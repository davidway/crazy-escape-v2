var t = require;
var e = module;
var o = exports;
var n,
    e =
        (this && this.__extends) ||
        ((n = function (t, e) {
            return (n =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
        }),
        function (t, e) {
            function o() {
                this.constructor = t;
            }
            n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
        });
Object.defineProperty(o, "__esModule", {value: !0});
var i,
    r = t("MathUtil"),
    a = t("GameController"),
    s = t("HeroController"),
    l = t("GameEnums"),
    c = t("Monster"),
    u = t("GameMgr"),
    p = t("GridMgr"),
    e =
        ((i = t("BaseComp").default),
        e(h, i),
        Object.defineProperty(h.prototype, "monster", {
            get: function () {
                return this._monster;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(h.prototype, "isBoss", {
            get: function () {
                return this._monster.type == l.MonsterType.BOSS;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(h.prototype, "size", {
            get: function () {
                return this._size;
            },
            set: function (t) {
                this._size = t;
            },
            enumerable: !1,
            configurable: !0
        }),
        (h.prototype.reset = function () {
            p.GridMgr.delComp(this),
                (this.targetPos.x = this.startPos.x = this.pos.x = this.ower.position.x),
                (this.targetPos.y = this.startPos.y = this.pos.y = this.ower.position.y),
                (this.distance = Number.MAX_SAFE_INTEGER),
                (this.duration = 0),
                (this.sortCount = 1);
        }),
        (h.prototype.onUpdate = function (t) {
            !this._monster.isDie && this._monster.canMove
                ? (this.monster.type == l.MonsterType.MOB
                      ? this.onMobMove(t)
                      : this.monster.type == l.MonsterType.ELITE
                      ? this.onEliteMove(t)
                      : this.monster.type == l.MonsterType.BOSS
                      ? this.onBossMove(t)
                      : this.monster.type == l.MonsterType.AGILITY_MOB
                      ? this.onAgilityMobMove(t)
                      : this.monster.type == l.MonsterType.REWARD_MOB && this.onRewardMobMove(t),
                  this.updateZindex())
                : this._monster.canMove || this.updateZindex();
        }),
        (h.prototype.onRewardMobMove = function (t) {
            var e, o;
            this.pos.equals(this.targetPos)
                ? (this.seekTarget(),
                  (e = u.default.inst.getTargetPos(this._monster.target)),
                  (o = cc.Vec3.distance(e, this.pos)) < 3 ||
                      ((o = o / this.speed),
                      (o = (t * this._monster.speedRate) / o),
                      this.pos.lerp(e, o, this.pos),
                      this.ower.setPosition(this.pos),
                      this.monster.setDir(e.x < this.pos.x ? -1 : 1),
                      r.default.copy(this.targetPos, this.pos)))
                : this.moveToTarget(t);
        }),
        (h.prototype.onAgilityMobMove = function (t) {
            if (
                ((this.agility_delay -= t),
                (this.monster.move_time += t),
                this.agility_delay <= 0 &&
                    ((this.agility_delay = 1),
                    6 < this.monster.move_time && this.distance >= u.default.inst.inSightRadius + 100))
            )
                return (this.monster.isDel = !0), void this.monster.kill();
            1 == u.default.inst.timeScale
                ? this.pos.addSelf(this._monster.speed)
                : this.pos.addSelf(this._monster.speed.mul(u.default.inst.timeScale)),
                this.ower.setPosition(this.pos);
        }),
        (h.prototype.onMobMove = function (t) {
            if (!this.center)
                return p.GridMgr.addComp(this), void (this.monster.node.opacity = null != this.center ? 255 : 0);
            if (((this.stayTime -= t), !(0 < this.stayTime))) {
                if (!this.isBeat) {
                    var e = s.HeroController.getHeroCenter();
                    if (cc.Vec3.distance(e, this.getCenterPos()) < this.radius)
                        return void r.default.copy(this.targetPos, this.pos);
                }
                if (this.pos.equals(this.targetPos)) {
                    if (this.isBeat) return void (this.isBeat = !1);
                    this.findMobTarget();
                }
                (this.moveTime = cc.misc.clampf(this.moveTime + t * this._monster.speedRate, 0, this.duration)),
                    this.moveTime == this.duration
                        ? r.default.copy(this.pos, this.targetPos)
                        : ((t = this.moveTime / this.duration), this.startPos.lerp(this.targetPos, t, this.pos)),
                    this.ower.setPosition(this.pos);
            }
        }),
        (h.prototype.onEliteMove = function (t) {
            var e, o;
            this.pos.equals(this.targetPos)
                ? (this.seekTarget(),
                  (e = u.default.inst.getTargetPos(this._monster.target)),
                  (o = cc.Vec3.distance(e, this.pos)) < 3 ||
                      ((o = o / this.speed),
                      (o = (t * this._monster.speedRate) / o),
                      this.pos.lerp(e, o, this.pos),
                      this.ower.setPosition(this.pos),
                      this.monster.setDir(e.x < this.pos.x ? -1 : 1),
                      r.default.copy(this.targetPos, this.pos)))
                : this.moveToTarget(t);
        }),
        (h.prototype.onBossMove = function (t) {
            this.pos.equals(this.targetPos) ? this.findBossTarget() : this.moveToTarget(t);
        }),
        (h.prototype.moveToTarget = function (t) {
            if (
                (this.monster.onMove(),
                (this.moveTime = cc.misc.clampf(this.moveTime + t * this._monster.speedRate, 0, this.duration)),
                this.moveTime == this.duration)
            ) {
                if (!a.GameController.inst.checkBoundaries(this.targetPos, 10))
                    return void r.default.copy(this.targetPos, this.pos);
                r.default.copy(this.pos, this.targetPos);
            } else {
                var e = this.moveTime / this.duration,
                    t = cc.v3();
                if ((this.startPos.lerp(this.targetPos, e, t), !a.GameController.inst.checkBoundaries(t, 10))) return;
                r.default.copy(this.pos, t);
            }
            this.ower.setPosition(this.pos);
        }),
        (h.prototype.findBossTarget = function () {
            var t,
                e = null;
            if (this.AI_Type == l.BossAIType.FOLLOW) {
                this.seekTarget();
                var o = u.default.inst.getTargetPos(this._monster.target);
                if (cc.Vec3.distance(o, this.pos) < 20) return;
                var n = o.sub(this.pos).normalizeSelf(),
                    e = this.pos.add(n.mulSelf(20));
            }
            (e && this.AI_Type != l.BossAIType.FREE) ||
                ((o = a.GameController.inst.moveLimit).type == l.FenceType.CIRCULAR
                    ? ((t = r.default.randomRangeInt(0, 360)), (e = this.getPosByAngle(o.pos, t, o.value - 90)))
                    : o.type == l.FenceType.RECT
                    ? ((n = r.default.randomRangeInt(o.rect.left + 90, o.rect.right - 90)),
                      (t = r.default.randomRangeInt(o.rect.bottom + 90, o.rect.top - 90)),
                      (e = cc.v3(n, t)))
                    : o.type == l.FenceType.UPANDDOWN && (e = cc.v3(0, 0))),
                this.setTarget(e);
        }),
        (h.prototype.getPosByAngle = function (t, e, o) {
            var n = r.default.getRadian(e),
                e = o * Math.cos(n),
                n = o * Math.sin(n);
            return t.add(cc.v3(e, n));
        }),
        (h.prototype.updateZindex = function () {
            var t;
            --this.sortCount,
                this.sortCount <= 0 &&
                    ((this.sortCount = 15),
                    (t = u.default.inst.getZindex(this.pos)),
                    (this.ower.zIndex =
                        this.monster.type == l.MonsterType.AGILITY_MOB ? t + u.default.inst.halfHeight : t));
        }),
        (h.prototype.setTarget = function (t, e) {
            (this.moveTime = 0), r.default.copy(this.targetPos, t), r.default.copy(this.startPos, this.pos);
            t = cc.Vec3.distance(this.targetPos, this.pos);
            (this.duration = e || t / this.speed),
                this.monster.type == l.MonsterType.MOB
                    ? this.monster.setDir(u.default.inst.getTargetPos(this._monster.target).x < this.pos.x ? -1 : 1)
                    : (this.monster.type != l.MonsterType.ELITE && this.monster.type != l.MonsterType.BOSS) ||
                      this.monster.setDir(this.targetPos.x < this.pos.x ? -1 : 1);
        }),
        (h.prototype.setOrientation = function (t) {
            t = this.pos.add(t.sub(this.pos).normalize().mul(2e3));
            this.setTarget(t);
        }),
        (h.prototype.stopMove = function () {
            this.monster &&
                ((this._monster.isAllowMove = !1), r.default.copy(this.targetPos, this.pos), this.monster.onIdle());
        }),
        (h.prototype.beatBack = function (t) {
            if (!this.isBeat) {
                for (
                    var e = Math.floor(t / p.GridMgr.gridSize),
                        o = s.HeroController.getHeroCenter(),
                        n = this.pos.sub(o).normalizeSelf(),
                        i = 0;
                    i < e;
                    i++
                ) {
                    var r = this.pos.add(n.mul(t - i * p.GridMgr.gridSize)),
                        a = p.GridMgr.getGrid(r);
                    if (p.GridMgr.moveComp(this, {x: a.x - this.center.x, y: a.y - this.center.y})) {
                        this.setTarget(r, 0.1), (this.isBeat = !0);
                        break;
                    }
                }
                this.isBeat || (this.stayTime = 0.2);
            }
        }),
        (h.prototype.findMobTarget = function () {
            var o = this;
            this.seekTarget();
            function t(t) {
                var e = {x: (e = p.GridMgr.getGrid(t)).x - o.center.x, y: e.y - o.center.y};
                return !!p.GridMgr.moveComp(o, e) && (o.setTarget(t), !0);
            }
            var e = u.default.inst.getTargetPos(this._monster.target),
                n = this.pos.add(e.sub(this.pos).normalizeSelf().mulSelf(p.GridMgr.radius));
            if (!t(n)) {
                for (var i = 1; i < 5; i++) {
                    if (t(r.default.rotatePoint(n, i * this.sign * 30, this.pos))) return;
                    if (t(r.default.rotatePoint(n, -i * this.sign * 30, this.pos))) return;
                }
                this.stayTime = 0.5;
            }
        }),
        (h.prototype.getPosition = function () {
            return this.pos;
        }),
        (h.prototype.getCenterPos = function () {
            return this.pos.add(this._monster.offset);
        }),
        (h.prototype.seekTarget = function () {
            u.default.inst.checkMapType([l.Map_Group.DEATH]) &&
                (this._monster.target = u.default.inst.seekTarget(this.distance));
        }),
        h);
function h(t) {
    var e = i.call(this, t) || this;
    return (
        (e.ower = t),
        (e.pos = null),
        (e.speed = 120),
        (e.radius = 10),
        (e.targetPos = cc.v3()),
        (e.distance = Number.MAX_SAFE_INTEGER),
        (e.targetDis = Number.MAX_SAFE_INTEGER),
        (e._monster = null),
        (e.sortCount = 6),
        (e.duration = 0),
        (e.moveTime = 0),
        (e.stayTime = 0),
        (e.startPos = cc.v3()),
        (e._size = cc.v2(0, 0)),
        (e.sign = 1),
        (e.isBeat = !1),
        (e.AI_Type = l.BossAIType.None),
        (e.agility_delay = 1),
        (e._monster = t.getComponent(c.default)),
        (e.pos = t.position.clone()),
        (e.targetPos.x = e.pos.x),
        (e.targetPos.y = e.pos.y),
        (e.duration = 0),
        (e.sortCount = 1),
        e
    );
}
o.default = e;
