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
        }),
    i =
        (this && this.__awaiter) ||
        function (t, a, s, l) {
            return new (s = s || Promise)(function (o, e) {
                function n(t) {
                    try {
                        r(l.next(t));
                    } catch (t) {
                        e(t);
                    }
                }
                function i(t) {
                    try {
                        r(l.throw(t));
                    } catch (t) {
                        e(t);
                    }
                }
                function r(t) {
                    var e;
                    t.done
                        ? o(t.value)
                        : ((e = t.value) instanceof s
                              ? e
                              : new s(function (t) {
                                    t(e);
                                })
                          ).then(n, i);
                }
                r((l = l.apply(t, a || [])).next());
            });
        },
    p =
        (this && this.__generator) ||
        function (o, n) {
            var i,
                r,
                a,
                s = {
                    label: 0,
                    sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                    },
                    trys: [],
                    ops: []
                },
                t = {next: e(0), throw: e(1), return: e(2)};
            return (
                "function" == typeof Symbol &&
                    (t[Symbol.iterator] = function () {
                        return this;
                    }),
                t
            );
            function e(e) {
                return function (t) {
                    return (function (e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (
                                    ((i = 1),
                                    r &&
                                        (a =
                                            2 & e[0]
                                                ? r.return
                                                : e[0]
                                                ? r.throw || ((a = r.return) && a.call(r), 0)
                                                : r.next) &&
                                        !(a = a.call(r, e[1])).done)
                                )
                                    return a;
                                switch (((r = 0), (e = a ? [2 & e[0], a.value] : e)[0])) {
                                    case 0:
                                    case 1:
                                        a = e;
                                        break;
                                    case 4:
                                        return s.label++, {value: e[1], done: !1};
                                    case 5:
                                        s.label++, (r = e[1]), (e = [0]);
                                        continue;
                                    case 7:
                                        (e = s.ops.pop()), s.trys.pop();
                                        continue;
                                    default:
                                        if (
                                            !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                                            (6 === e[0] || 2 === e[0])
                                        ) {
                                            s = 0;
                                            continue;
                                        }
                                        if (3 === e[0] && (!a || (e[1] > a[0] && e[1] < a[3]))) {
                                            s.label = e[1];
                                            break;
                                        }
                                        if (6 === e[0] && s.label < a[1]) {
                                            (s.label = a[1]), (a = e);
                                            break;
                                        }
                                        if (a && s.label < a[2]) {
                                            (s.label = a[2]), s.ops.push(e);
                                            break;
                                        }
                                        a[2] && s.ops.pop(), s.trys.pop();
                                        continue;
                                }
                                e = n.call(o, s);
                            } catch (t) {
                                (e = [6, t]), (r = 0);
                            } finally {
                                i = a = 0;
                            }
                        if (5 & e[0]) throw e[1];
                        return {value: e[0] ? e[1] : void 0, done: !0};
                    })([e, t]);
                };
            }
        };
Object.defineProperty(o, "__esModule", {value: !0});
var r,
    h = t("ResMgr"),
    d = t("ArrayUtil"),
    f = t("MathUtil"),
    y = t("ResUtils"),
    g = t("HeroController"),
    m = t("GameEnums"),
    _ = t("GameMgr"),
    v = t("MoveSys"),
    a = t("FiringEffect"),
    b = t("FuelBottle"),
    e =
        ((r = t("HeroSkillBase").default),
        e(s, r),
        (s.prototype.updateSkill = function () {
            var t;
            r.prototype.updateSkill.call(this),
                (this.delay =
                    (null === (t = this._data.confVo.extra_values) || void 0 === t ? void 0 : t.delay) || 0.5),
                (this.attack_dis =
                    (null === (t = this._data.confVo.extra_values) || void 0 === t ? void 0 : t.attack_dis) || 400),
                console.log("瓶子:", this.delay, this.attack_dis);
        }),
        (s.prototype.levelUp = function () {
            this.clear();
        }),
        (s.prototype.onUpdate = function (t, e) {
            var o = this;
            0 < this.closeList.length &&
                (this.closeList.forEach(function (t) {
                    o.bottles.delete(t), o.fires.delete(t);
                }),
                (this.closeList.length = 0)),
                (0 == this._data.useTime || this._data.useTime + this.exeTime < t) &&
                    (0 == this._data.useTime && (this.count = 0),
                    (this.count = this._data.confVo.atk_num),
                    (this._data.useTime = t),
                    (this.play_time = this.duration + 1),
                    (this.create_delay = 0),
                    this.findTargets()),
                0 < this.count &&
                    ((this.create_delay -= e),
                    this.create_delay <= 0 && (--this.count, (this.create_delay = 100), this.createBottle())),
                !this.isCreateFire && 0 < this.posList.length && this.createFire(this.posList.pop()),
                this.bottles.forEach(function (t) {
                    t.onUpdate(e);
                }),
                this.fires.forEach(function (t) {
                    t.onUpdate(e);
                });
        }),
        (s.prototype.del = function (t) {
            this.closeList.push(t.uuid);
        }),
        (s.prototype.clear = function () {
            this.bottles.forEach(function (t) {
                t.recycle();
            }),
                this.fires.forEach(function (t) {
                    t.recycle();
                }),
                this.bottles.clear(),
                this.fires.clear(),
                (this.isCreateFire = !1),
                (this.count = 0),
                (this.posList.length = 0);
        }),
        (s.prototype.addFire = function (t) {
            this.posList.push(t);
        }),
        (s.prototype.findTargets = function () {
            (this.idx = 0), (this.indexs.length = 0);
            for (var t = (this.dirs.length = 0), e = this.targets; t < e.length; t++) (o = e[t]).length = 0;
            for (
                var o,
                    n,
                    i = g.HeroController.getHeroCenter(),
                    r = _.default.inst.getMapCameraPos(),
                    r = cc.rect(
                        r.x - _.default.inst.halfWidth + 60,
                        r.y - _.default.inst.halfHeight + 100,
                        _.default.inst.stageWidth - 120,
                        _.default.inst.stageHeight - 200
                    ),
                    a = v.MoveSys.getInSightList(r),
                    s = 0;
                s < a.length;
                s++
            )
                (o = a[s]).monster.type != m.MonsterType.AGILITY_MOB &&
                    o.monster.type != m.MonsterType.REWARD_MOB &&
                    ((n = o.getCenterPos()),
                    (n = f.default.getAngleTwoPoint(i, n)),
                    (n = Math.floor(n / 45)),
                    this.targets[n].push(o),
                    this.dirs.includes(n) || this.dirs.push(n));
            for (var l = 0, c = this.targets; l < c.length; l++) {
                var u = c[l];
                d.default.shuffle(u);
            }
            d.default.shuffle(this.targets);
        }),
        (s.prototype.createBottle = function () {
            var u;
            return i(this, void 0, void 0, function () {
                var e, o, n, i, r, a, s, l, c;
                return p(this, function (t) {
                    switch (t.label) {
                        case 0:
                            for (
                                this.create_delay = 100,
                                    e = null,
                                    o = g.HeroController.getHeroCenter(),
                                    a = _.default.inst.getMapCameraPos(),
                                    n = cc.rect(
                                        a.x - _.default.inst.halfWidth + 60,
                                        a.y - _.default.inst.halfHeight + 100,
                                        _.default.inst.stageWidth - 120,
                                        _.default.inst.stageHeight - 200
                                    ),
                                    r = this.idx;
                                r < 8 &&
                                ((this.idx = (this.idx + 1) % 8),
                                !(0 < (i = this.targets[r]).length) ||
                                    ((i = i.pop()),
                                    (null !== (u = i.monster) && void 0 !== u && u.isDie) ||
                                        ((e = i.getCenterPos()), !n.contains(e))));
                                r++
                            );
                            if (!e) {
                                if (0 == this.indexs.length) {
                                    for (r = 0; r < 8; r++) this.dirs.includes(r) || this.indexs.push(r);
                                    d.default.shuffle(this.indexs);
                                }
                                (s = this.indexs.pop()),
                                    (l = f.default.randomRangeInt(45 * s, 45 * (s + 1))),
                                    (c = f.default.randomRangeInt(120, this.attack_dis)),
                                    (e = o.add(f.default.rotatePoint(cc.v3(c, 0), l)));
                            }
                            return [
                                4,
                                h.default.inst.getNodeFromPool(
                                    y.ResUtils.Prefabs.Bottle.url,
                                    y.ResUtils.Prefabs.Bottle.bundle
                                )
                            ];
                        case 1:
                            return (
                                ((a = t.sent()).position = o),
                                (s = a.getComponent(b.default)),
                                (c = cc.Vec3.distance(e, o)),
                                (l = e.sub(o).normalize().mulSelf(this._data.confVo.speed)),
                                (c = c / this._data.confVo.speed / 60),
                                (s.isMax = !1),
                                (a.angle = 0),
                                (s.hitNum = Number.MAX_SAFE_INTEGER),
                                s.setData(
                                    {speed: l, fly_time: c, duration: this.duration + 1, radius: this.radius},
                                    this.hurtValue,
                                    this
                                ),
                                (a.parent = this._topLayer),
                                this.bottles.set(a.uuid, s),
                                this.spliceCloseList(a),
                                (this.create_delay = this.delay),
                                [2]
                            );
                    }
                });
            });
        }),
        (s.prototype.createFire = function (n) {
            return i(this, void 0, void 0, function () {
                var e, o;
                return p(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (this.isCreateFire = !0),
                                [
                                    4,
                                    h.default.inst.getNodeFromPool(
                                        y.ResUtils.Prefabs.Firingeff.url,
                                        y.ResUtils.Prefabs.Firingeff.bundle
                                    )
                                ]
                            );
                        case 1:
                            return (
                                ((e = t.sent()).position = n),
                                ((o = e.getComponent(a.default)).hitNum = Number.MAX_SAFE_INTEGER),
                                o.setData({duration: this.duration, radius: this.radius}, this.hurtValue, this),
                                (e.parent = this._bottomLayer),
                                (e.zIndex = -200),
                                this.fires.set(e.uuid, o),
                                (this.isCreateFire = !1),
                                this.spliceCloseList(e),
                                [2]
                            );
                    }
                });
            });
        }),
        s);
function s() {
    var t = r.call(this) || this;
    (t.count = 0),
        (t.bottles = new Map()),
        (t.fires = new Map()),
        (t.play_time = 0),
        (t.delay = 0),
        (t.create_delay = 0),
        (t.attack_dis = 0),
        (t.targets = []),
        (t.dirs = []),
        (t.indexs = []),
        (t.idx = 0),
        (t.posList = []),
        (t.isCreateFire = !1);
    for (var e = 0; e < 8; e++) t.targets[e] = [];
    return t;
}
o.default = e;
