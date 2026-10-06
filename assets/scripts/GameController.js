var t = require;
var e = module;
var o = exports;
var n,
    i =
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
Object.defineProperty(o, "__esModule", {value: !0}), (o.GameController = void 0);
var r,
    a = t("App"),
    s = t("LayerMgr"),
    e = t("Singleton"),
    c = t("ArrayUtil"),
    u = t("MathUtil"),
    l = t("EventTypes"),
    p = t("UIEnum"),
    h = t("ConfData"),
    d = t("DropType"),
    f = t("GameEnums"),
    y = t("KillType"),
    g = t("ValueTypes"),
    m = t("Monster"),
    _ = t("EffectMgr"),
    v = t("GameMgr"),
    b = t("GridMgr"),
    w = t("AnimSys"),
    C = t("MoveSys"),
    k = t("DropController"),
    E = t("FloatController"),
    S = t("GoddessController"),
    M = t("HeroController"),
    R = t("MapController"),
    T = t("MonsterController"),
    CM = t("ChapterModifierController"),
    i =
        ((r = e.Singleton()),
        i(D, r),
        (D.prototype.getMonsterNum = function () {
            return this.monsters.size;
        }),
        (D.prototype.getMonsters = function () {
            return this.monsters;
        }),
        (D.prototype.gameStart = function () {
            (this.chapterVo = v.default.inst.chapterVo),
                (this.roundVo = h.default.inst.roundConf.getRoundById(v.default.inst.chapter)),
                (this.maxRate = 0),
                (this.repeat_dis = (2 * this.chapterVo.repeat_radius) / 3),
                (this.half_repeat_dis = this.chapterVo.repeat_radius / 3);
            var t = 0;
            this.bossRound = 0;
            for (var e = (this.bossTimes.length = 0), o = this.roundVo.length; e < o; e++) {
                var n,
                    i,
                    r,
                    a = this.roundVo[e];
                a.round_type == g.FixedType.CROWD &&
                    ((n = {time: a.time - 5, type: g.FixedType.CROWD, index: a.index}),
                    v.default.inst.registerFixedEvent(n)),
                    a.round_type == g.FixedType.BOSS &&
                        ((n = {time: a.time - 5, type: g.FixedType.BOSS, index: a.index}),
                        v.default.inst.registerFixedEvent(n),
                        (t = a.time),
                        (this.bossRound += 1),
                        this.bossTimes.push(a.time)),
                    0 < a.zoomRatio &&
                        ((i = {time: a.time - 1, type: g.FixedType.Camera_Scale, index: a.index, value: a.zoomRatio}),
                        v.default.inst.registerFixedEvent(i)),
                    v.default.inst.checkMapType([f.Map_Group.DEATH])
                        ? 1 == a.is_fast
                            ? null !== (i = S.GoddessController.attrData) &&
                              void 0 !== i &&
                              i.is_fast_mob &&
                              ((r = {time: a.time, round_type: a.round_type, type: g.FixedType.NONE, index: a.index}),
                              v.default.inst.registerFixedEvent(r))
                            : ((r = {time: a.time, round_type: a.round_type, type: g.FixedType.NONE, index: a.index}),
                              v.default.inst.registerFixedEvent(r))
                        : ((a = {time: a.time, round_type: a.round_type, type: g.FixedType.NONE, index: a.index}),
                          v.default.inst.registerFixedEvent(a));
            }
            for (var s = this.chapterVo.box_interval, e = 0; e < 30; e++) {
                var l = s * e + 1;
                l < t && ((l = {time: l, type: g.FixedType.Box, index: 0}), v.default.inst.registerFixedEvent(l));
            }
            var c = {time: 0.5, type: g.FixedType.Lucky, index: 0};
            v.default.inst.registerFixedEvent(c),
                (c = {time: 1, type: g.FixedType.Skin_Skill, index: 0}),
                v.default.inst.registerFixedEvent(c),
                CM.scheduleForChapter(v.default.inst.chapter, v.default.inst),
                1 < this.bossTimes.length &&
                    this.bossTimes.sort(function (t, e) {
                        return t - e;
                    }),
                v.default.inst.sortFixedEvent(),
                T.MonsterController.setChapterVo(this.chapterVo);
        }),
        (D.prototype.checkSkinSkill = function () {
            _.default.inst.showSkinSkill();
        }),
        (D.prototype.checkLucky = function () {
            0 < M.HeroController.getEvolveAtrr("Lucky") &&
                (console.log("幸运儿"),
                D.inst.enqueue(this, function () {
                    v.default.inst.gamePause(), a.app.gui.openUI(p.UIEnum.SkillView, s.LayerEnum.VIEW_LAYER);
                }));
        }),
        (D.prototype.clear = function () {
            b.GridMgr.clear(),
                (this.bossid = ""),
                this.boss.clear(),
                this.freeMoveMonsters.clear(),
                this.agility.clear(),
                this.mobs.clear(),
                this.monsters.forEach(function (t) {
                    t.recycle();
                }),
                (this.moveLimit = null),
                this.monsters.clear(),
                C.MoveSys.clear(),
                this.clearQueue(),
                (this.closeMonsters.length = 0);
        }),
        (D.prototype.enqueue = function (t, e, o) {
            (o = void 0 === o ? !1 : o)
                ? this.queue.unshift({target: t, handler: e})
                : this.queue.push({target: t, handler: e}),
                console.warn("队列", this.queue.length);
        }),
        (D.prototype.dequeue = function () {
            var t = this.queue.shift();
            t && t.handler.call(t.target), console.log("队列", this.queue.length);
        }),
        (D.prototype.clearQueue = function () {
            this.queue.length = 0;
        }),
        (D.prototype.addMonster = function (t) {
            var e = t.getComponent(m.default),
                o = t.uuid;
            !this.monsters.has(o) &&
                (this.monsters.set(o, e),
                (e.type != f.MonsterType.ELITE && e.type != f.MonsterType.BOSS) ||
                    (this.freeMoveMonsters.set(o, e),
                    e.type == f.MonsterType.BOSS && (this.boss.set(o, e), (this.bossid = o))),
                e.type == f.MonsterType.AGILITY_MOB && this.agility.set(o, e),
                this.closeMonsters.includes(t.uuid)) &&
                ((t = this.closeMonsters.indexOf(t.uuid)), this.closeMonsters.splice(t, 1));
        }),
        (D.prototype.delMonster = function (t) {
            this.closeMonsters.push(t.uuid),
                this.freeMoveMonsters.delete(t.uuid),
                this.mobs.delete(t.uuid),
                this.boss.delete(t.uuid),
                this.agility.delete(t.uuid);
        }),
        (D.prototype.hasMonster = function (t) {
            return this.monsters.has(t);
        }),
        (D.prototype.getFreeMoveMonsters = function () {
            return this.freeMoveMonsters;
        }),
        (D.prototype.getBossCount = function () {
            return this.boss.size;
        }),
        (D.prototype.getAgility = function () {
            return this.agility;
        }),
        (D.prototype.getMobs = function () {
            return this.mobs;
        }),
        Object.defineProperty(D.prototype, "mapType", {
            get: function () {
                return this.chapterVo.map_type;
            },
            enumerable: !1,
            configurable: !0
        }),
        (D.prototype.clearMoveLimit = function (t) {
            void 0 === t && (t = !1),
                this.moveLimit &&
                    (this.chapterVo.map_type == f.MapType.BIG_MAP || t
                        ? (this.moveLimit = null)
                        : this.chapterVo.map_type == f.MapType.VERTICAL_MAP
                        ? (this.moveLimit.rect && (this.moveLimit.rect.bottom = -Number.MAX_SAFE_INTEGER),
                          this.moveLimit.rect && (this.moveLimit.rect.top = Number.MAX_SAFE_INTEGER))
                        : this.chapterVo.map_type == f.MapType.HORIZONTAL_MAP &&
                          (this.moveLimit.rect && (this.moveLimit.rect.left = -Number.MAX_SAFE_INTEGER),
                          this.moveLimit.rect && (this.moveLimit.rect.right = Number.MAX_SAFE_INTEGER)));
        }),
        (D.prototype.checkMonster = function () {
            if (v.default.inst.chapterVo.map_type != f.MapType.LIMIT_MAP)
                for (
                    var t = M.HeroController.getHeroPos(), e = cc.v3(), o = 0, n = Array.from(this.monsters.values());
                    o < n.length;
                    o++
                ) {
                    var i = n[o];
                    u.default.copy(e, i.node.position), 3200 < u.default.getDistance(e, t) && i.kill(y.KillType.Clean);
                }
        }),
        (D.prototype.checkVisibleBounce = function (t, e, o) {
            var n = this.checkBounce(t, e, o);
            if (n) return !0;
            var i = v.default.inst.halfWidth,
                r = v.default.inst.halfHeight,
                a = v.default.inst.getMapCameraPos(),
                s = a.x - i + o,
                l = a.x + i - o,
                i = a.y - r + o,
                o = a.y + r - o;
            return (
                ((e.x <= s && t.x < 0) || (e.x >= l && 0 < t.x)) && ((t.x = -t.x), (n = !0)),
                ((e.y <= i && t.y < 0) || (e.y >= o && 0 < t.y)) && ((t.y = -t.y), (n = !0)),
                n
            );
        }),
        (D.prototype.checkBounce = function (t, e, o) {
            if (!D.inst.checkBoundaries(e, o)) {
                if (D.inst.moveLimit.type == f.FenceType.CIRCULAR)
                    return (
                        0 == t.x && (t.y = -t.y),
                        0 == t.y && (t.x = -t.x),
                        0 != t.x &&
                            0 != t.y &&
                            ((o = cc.v3()),
                            u.default.copy(o, D.inst.moveLimit.pos),
                            (o = u.default.getAngleTwoPoint(o, e)),
                            (o = 2 * -(u.default.getAngleTwoPoint(cc.v3(), t) - o)),
                            (o = u.default.rotatePoint(t, o, cc.v3())),
                            (t.x = -o.x),
                            (t.y = -o.y)),
                        !0
                    );
                if (D.inst.moveLimit.type == f.FenceType.RECT || D.inst.moveLimit.type == f.FenceType.UPANDDOWN)
                    return (
                        ((t.x < 0 && e.x <= D.inst.moveLimit.rect.left) ||
                            (0 < t.x && e.x >= D.inst.moveLimit.rect.right)) &&
                            (t.x = -t.x),
                        ((t.y < 0 && e.y <= D.inst.moveLimit.rect.bottom) ||
                            (0 < t.y && e.y >= D.inst.moveLimit.rect.top)) &&
                            (t.y = -t.y),
                        !0
                    );
            }
            return !1;
        }),
        (D.prototype.checkBoundaries = function (t, e) {
            if ((void 0 === e && (e = 0), !this.moveLimit)) return !0;
            var o = u.default.copyObj(this.moveLimit);
            if (
                (0 < e &&
                    (this.moveLimit.type == f.FenceType.CIRCULAR
                        ? (o.value -= e)
                        : this.moveLimit.type == f.FenceType.RECT &&
                          ((o.rect.bottom += e), (o.rect.top -= e), (o.rect.left += e), (o.rect.right -= e))),
                o.type == f.FenceType.CIRCULAR)
            ) {
                if (!u.default.pointInCircle(t, o.pos, o.value)) return !1;
            } else if (
                (o.type == f.FenceType.RECT || this.moveLimit.type == f.FenceType.UPANDDOWN) &&
                !u.default.pointInRect(t, o.rect)
            )
                return !1;
            return !0;
        }),
        (D.prototype.onUpdate = function (e) {
            var t,
                o,
                n,
                i = this;
            v.default.inst.onStatus(f.GameStatus.BOSS | f.GameStatus.PLAYING) &&
                ((v.default.inst.playTime += e),
                v.default.inst.moveVector.equals(cc.Vec3.ZERO) ||
                    M.HeroController.isDie ||
                    ((t = v.default.inst.moveVector.mul(M.HeroController.getHeroSpeed())),
                    (o = M.HeroController.getHeroCenter().add(t)),
                    (n = this.mapType == f.MapType.LIMIT_MAP ? 0 : 25),
                    this.checkBoundaries(o, n)
                        ? v.default.inst.checkMapType([f.Map_Group.DEATH]) &&
                          this.eggSize &&
                          this.eggSize.contains(o) &&
                          ((o = M.HeroController.getHeroCenter().add(cc.v3(t.x, 0))),
                          this.eggSize.contains(o)
                              ? ((o = M.HeroController.getHeroCenter().add(cc.v3(0, t.y))),
                                this.eggSize.contains(o) ? (t.x = t.y = 0) : (t.x = 0))
                              : (t.y = 0))
                        : ((o = M.HeroController.getHeroCenter().add(cc.v3(t.x, 0))),
                          this.checkBoundaries(o, n)
                              ? (t.y = 0)
                              : ((o = M.HeroController.getHeroCenter().add(cc.v3(0, t.y))),
                                this.checkBoundaries(o, n) ? (t.x = 0) : (t.x = t.y = 0))),
                    M.HeroController.heroMove(t),
                    v.default.inst.mapCameraMove(t)),
                this.closeMonsters.forEach(function (t) {
                    i.monsters.get(t) &&
                        (i.monsters.delete(t),
                        i.freeMoveMonsters.delete(t),
                        i.boss.delete(t),
                        i.agility.delete(t),
                        i.mobs.delete(t));
                }),
                (this.closeMonsters.length = 0),
                (this.check_delay -= e),
                this.check_delay <= 0 && ((this.check_delay = 5), this.checkMonster()),
                v.default.inst.onUpdate(e),
                M.HeroController.onUpdate(e),
                S.GoddessController.onUpdate(e),
                T.MonsterController.onUpdate(e),
                C.MoveSys.onUpdate(e),
                k.default.inst.onUpdate(e),
                this.monsters.forEach(function (t) {
                    t.onUpdate(e);
                }),
                0 < this.queue.length && this.dequeue()),
                w.AnimSys.onUpdate(e),
                E.default.inst.onUpdate(e),
                R.default.inst.onUpdate(e);
        }),
        (D.prototype.checkRepeat = function (t) {
            var e = M.HeroController.getHeroCenter(),
                o = this.chapterVo.repeat_radius,
                n = Math.floor((e.x + this.half_repeat_dis) / this.repeat_dis),
                i = Math.floor((e.y + this.half_repeat_dis) / this.repeat_dis),
                r = !1,
                r = !1,
                a = Math.floor((t.x + this.half_repeat_dis) / this.repeat_dis),
                e = Math.floor((t.y + this.half_repeat_dis) / this.repeat_dis);
            return (
                a < n && n - a == 2 ? ((t.x += 2 * o), (r = !0)) : n < a && a - n == 2 && ((t.x -= 2 * o), (r = !0)),
                e < i && i - e == 2 ? ((t.y += 2 * o), (r = !0)) : i < e && e - i == 2 && ((t.y -= 2 * o), (r = !0)),
                {isNewPos: r, pos: t}
            );
        }),
        (D.prototype.onEvents = function () {
            var t;
            null === (t = a.app.event) ||
                void 0 === t ||
                t.on(l.EventType.Trigger_Fixed_Event, this.onFixedEvent, this),
                null === (t = a.app.event) ||
                    void 0 === t ||
                    t.on(l.EventType.Game_Bomb_Kill_All, this.onGetBomb, this),
                null === (t = a.app.event) ||
                    void 0 === t ||
                    t.on(l.EventType.Game_Add_Drop_Item, this.addDropItem, this),
                null === (t = a.app.event) ||
                    void 0 === t ||
                    t.on(l.EventType.Game_Add_Equip_Item, this.onDropEquip, this),
                null === (t = a.app.event) ||
                    void 0 === t ||
                    t.on(l.EventType.Game_Add_Drawing_Item, this.onDropDrawing, this);
        }),
        (D.prototype.onDropEquip = function (t) {
            k.default.inst.addDrop({
                type: d.DropType.Equip,
                data: {pt: t.pos, type: 0, value: 0, id: t.id, quality: t.quality}
            });
        }),
        (D.prototype.onDropDrawing = function (t) {
            k.default.inst.addDrop({type: d.DropType.Drawing, data: {pt: t.pos, type: 0, value: 0, id: t.id}});
        }),
        (D.prototype.addDropItem = function (t) {
            var e = this;
            if (k.default.inst.canDropItem()) {
                0 == this.maxRate &&
                    this.chapterVo.item_rate.forEach(function (t) {
                        e.maxRate += t.ratio;
                    });
                var o,
                    n,
                    i = u.default.randomRangeInt(0, this.maxRate),
                    r = 0,
                    a = 0,
                    s = 0;
                if (t.id) {
                    if (((a = t.id), t.value)) s = t.value;
                    else
                        for (var l = 0, c = this.chapterVo.item_rate.length; l < c; l++)
                            if (this.chapterVo.item_rate[l].id == a) {
                                s = this.chapterVo.item_rate[l].value;
                                break;
                            }
                } else
                    for (l = 0, c = this.chapterVo.item_rate.length; l < c; l++)
                        if ((r += this.chapterVo.item_rate[l].ratio) >= i) {
                            (a = this.chapterVo.item_rate[l].id), (s = this.chapterVo.item_rate[l].value);
                            break;
                        }
                0 != a &&
                    ((o = d.DropType.Smked),
                    (n = d.GoldType.None),
                    4 == a
                        ? ((o = d.DropType.Gold), (n = u.default.randomRangeInt(1, 4)))
                        : 2 == a
                        ? (o = d.DropType.Magnet)
                        : 3 == a && (o = d.DropType.Bomb),
                    k.default.inst.addDrop({
                        type: o,
                        data: {pt: t.pos, type: 4 == a ? n : 0, value: s, index: t.index}
                    }));
            }
        }),
        (D.prototype.onGetBomb = function () {
            T.MonsterController.killAll(!0),
                k.default.inst.allBoxBroken(),
                a.app.timer.once(
                    this,
                    function () {
                        T.MonsterController.createLastRound();
                    },
                    1
                );
        }),
        (D.prototype.onFixedEvent = function (t) {
            if (t.type != g.FixedType.NONE) {
                if (
                    (t.type == g.FixedType.Skin_Skill && this.checkSkinSkill(),
                    t.type == g.FixedType.Lucky && this.checkLucky(),
                    t.type != g.FixedType.Start_Exp)
                ) {
                    if (t.type == g.FixedType.Box) {
                        console.log("[GameController]-->[line:638]:宝箱");
                        var e = k.default.inst.getBoxNum();
                        if (e < this.chapterVo.box_num) {
                            for (
                                var o = M.HeroController.getHeroPos(),
                                    n = [],
                                    i = ((s = 0), this.chapterVo.box_points.length);
                                s < i;
                                s++
                            ) {
                                var r = this.chapterVo.box_points[s];
                                Math.abs(o.x - r.x) < v.default.inst.halfWidth + 100 ||
                                    Math.abs(o.y - r.y) < v.default.inst.halfHeight + 100 ||
                                    k.default.inst.hasBoxOrItem(s + 1) ||
                                    n.push({pos: r, index: s + 1});
                            }
                            if (0 < n.length)
                                for (
                                    c.default.shuffle(n), i = Math.min(n.length, this.chapterVo.box_num - e), s = 0;
                                    s < i;
                                    s++
                                ) {
                                    var a = n[s];
                                    k.default.inst.addDrop({
                                        type: d.DropType.Box,
                                        data: {pt: cc.v3(a.pos.x, a.pos.y), type: 0, value: 0, index: a.index}
                                    });
                                }
                        }
                    }
                } else
                    for (var o = M.HeroController.getHeroPos(), s = 0; s < 20; s++) {
                        var l = o.add(cc.v3(u.default.randomRangeInt(-200, 200), u.default.randomRangeInt(-200, 200)));
                        k.default.inst.addDrop({type: d.DropType.Exp, data: {pt: l, type: d.ExpType.Green, value: 20}});
                    }
            } else T.MonsterController.addRoundMonster(this.roundVo[t.index]);
        }),
        D);
function D() {
    var t = r.call(this) || this;
    return (
        (t.monsters = new Map()),
        (t.closeMonsters = []),
        (t.bossid = ""),
        (t.boss = new Map()),
        (t.freeMoveMonsters = new Map()),
        (t.agility = new Map()),
        (t.mobs = new Map()),
        (t.moveLimit = null),
        (t.check_delay = 2),
        (t.bossRound = 0),
        (t.bossTimes = []),
        (t.eggSize = null),
        (t.roundVo = null),
        (t.chapterVo = null),
        (t.maxRate = 0),
        (t.queue = []),
        (t.repeat_dis = 0),
        (t.half_repeat_dis = 0),
        t.onEvents(),
        t
    );
}
o.GameController = i;
