var t = require;
var e = module;
var o = exports;
var r =
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
    a =
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
Object.defineProperty(o, "__esModule", {value: !0}), (o.GoddessController = void 0);
var i = t("App"),
    n = t("ResMgr"),
    s = t("DelayUtil"),
    l = t("MathUtil"),
    c = t("EventTypes"),
    u = t("ResUtils"),
    p = t("ConfData"),
    h = t("GameSetting"),
    d = t("FloatFontType"),
    f = t("GameEnums"),
    y = t("Goddess"),
    g = t("GameMgr"),
    m = t("GridMgr"),
    _ = t("GameController"),
    v = t("GameDataController"),
    b = t("HeroController"),
    w = t("UserDataController"),
    t =
        (Object.defineProperty(C.prototype, "attrData", {
            get: function () {
                return this._attrData;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(C.prototype, "radius", {
            get: function () {
                return this._radius;
            },
            enumerable: !1,
            configurable: !0
        }),
        (C.prototype.setLayer = function (t) {
            this._layer = t;
        }),
        (C.prototype.setGoddessUI = function (t) {
            this.goddessUI = t;
        }),
        (C.prototype.setHpBar = function (t) {
            this.hpBar = t;
        }),
        (C.prototype.clear = function () {
            var t;
            (this.goddessUI.active = !1),
                (this.hurtValue = 0),
                null === (t = this.ower) || void 0 === t || t.setParent(null);
        }),
        (C.prototype.addGoddess = function (n, i) {
            return r(this, void 0, void 0, function () {
                var e, o;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.ower ? [3, 2] : [4, this.getGoddness()];
                        case 1:
                            t.sent(), (t.label = 2);
                        case 2:
                            return (
                                g.default.inst.isNewGame ||
                                    (0 < (e = v.default.inst.getValue("goddessHp")) && (n.hp = e)),
                                (this._data = n),
                                (this._isDie = !1),
                                (this.ower.position = i),
                                (this.ower.parent = this._layer),
                                (this.goddessUI.active = !0),
                                (this.goddessUI.position = i),
                                this.hpBar.updateBar(this._data.hp / this._data.maxHp),
                                (this.hp_time = h.GameSetting.inst.death_egg_hp_time),
                                (o = g.default.inst.getZindex(i)),
                                (this.ower.zIndex = o),
                                (e = cc.v3(0, 60)),
                                (o = p.default.inst.deathConf.getDeathConfVoByChapter(g.default.inst.chapter)) &&
                                    ((this._radius = o.radius),
                                    o.offset && ((e.x = o.offset.x), (e.y = o.offset.y)),
                                    console.log("死神来了", e.toString(), this._radius)),
                                (this.center.x = i.x + e.x),
                                (this.center.y = i.y + e.y),
                                (this.pos = i),
                                m.GridMgr.setWaklable(this.getCenter(), !1, {left: -4, right: 4, buttom: -4, top: 4}),
                                [2]
                            );
                    }
                });
            });
        }),
        (C.prototype.calcAttr = function () {
            (this._attrData = p.default.inst.deathConf.calcAttr(w.default.inst.deathPass)),
                console.log("死神附加属性:", JSON.stringify(this._attrData), w.default.inst.deathPass);
        }),
        (C.prototype.getGoddness = function () {
            return r(this, void 0, void 0, function () {
                var e;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = this),
                                [
                                    4,
                                    n.default.inst.getNodeFromPool(
                                        u.ResUtils.Prefabs.Goddess.url,
                                        u.ResUtils.Prefabs.Goddess.bundle
                                    )
                                ]
                            );
                        case 1:
                            return (e.ower = t.sent()), (this.goddess = this.ower.getComponent(y.default)), [2];
                    }
                });
            });
        }),
        (C.prototype.lostHp = function (t) {
            this._isDie ||
                (0 < this.wudi_time
                    ? console.log("蛋蛋无敌免伤", this.wudi_time.toFixed(2))
                    : ((this._data.hp = cc.misc.clampf(this._data.hp - t, 0, this._data.maxHp)),
                      this.hpBar.updateBar(this._data.hp / this._data.maxHp),
                      this.goddess.onLostHp(),
                      i.app.event.emit(c.EventType.Game_Hero_Lost_Hp),
                      0 == this._data.hp
                          ? ((this._isDie = !0), _.GameController.inst.enqueue(this, this.onGamePause, !0))
                          : ((this.hurtValue += t), v.default.inst.setGoddessHp(this._data.hp))));
        }),
        (C.prototype.addHp = function (t) {
            (this._data.hp = cc.misc.clampf(this._data.hp + t, 0, this._data.maxHp)),
                this.hpBar.updateBar(this._data.hp / this._data.maxHp),
                i.app.event.emit(c.EventType.On_Float, {pt: this.pos, msg: "" + t, type: d.FloatFontType.hp}),
                v.default.inst.setGoddessHp(this._data.hp);
        }),
        (C.prototype.onGamePause = function () {
            return r(this, void 0, void 0, function () {
                var e, o;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                g.default.inst.gamePause(),
                                i.app.gui.isLock(!0),
                                (e = this.getCenter()),
                                (o = g.default.inst.getMapCameraPos()),
                                (o = o.sub(e).mag()),
                                (o = cc.misc.clampf(o / 300, 0.1, 1)),
                                [4, g.default.inst.cameraTween(e, o)]
                            );
                        case 1:
                            return t.sent(), [4, this.goddess.onDie()];
                        case 2:
                            return t.sent(), [4, s.default.delay(0.5, this)];
                        case 3:
                            return (
                                t.sent(),
                                i.app.gui.isLock(!1),
                                b.HeroController.onGoddessDie() || this.onRevive(!1),
                                [2]
                            );
                    }
                });
            });
        }),
        (C.prototype.onWin = function () {
            return r(this, void 0, void 0, function () {
                var e, o;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                i.app.gui.isLock(!0),
                                (e = this.getCenter()),
                                (o = g.default.inst.getMapCameraPos()),
                                (o = o.sub(e).mag()),
                                (o = cc.misc.clampf(o / 300, 0.1, 1)),
                                [4, g.default.inst.cameraTween(e, o)]
                            );
                        case 1:
                            return t.sent(), i.app.event.emit(c.EventType.Game_Win), [2];
                    }
                });
            });
        }),
        (C.prototype.setWudi = function (t) {
            console.log("无敌", t), (this.wudi_time = t), i.app.event.emit(c.EventType.Game_Goddess_Wudi_Start);
        }),
        (C.prototype.onRevive = function (n) {
            return r(this, void 0, void 0, function () {
                var e, o;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return !this._data || 0 < this._data.hp
                                ? [2]
                                : n
                                ? (i.app.gui.isLock(!0),
                                  (this._isDie = !1),
                                  (this._data.hp = this._data.maxHp),
                                  this.hpBar.updateBar(1),
                                  this.goddess.onIdle(),
                                  i.app.event.emit(c.EventType.Game_Get_Bomb, this.getCenter()),
                                  i.app.sound.playEffect("复活"),
                                  (o = b.HeroController.getHeroPos()),
                                  (e = cc.v3(o.x, o.y - 10)),
                                  (o = g.default.inst.getMapCameraPos()),
                                  (o = o.sub(e).mag()),
                                  (o = cc.misc.clampf(o / 300, 0.1, 1)),
                                  [4, s.default.delay(1, this)])
                                : [3, 3];
                        case 1:
                            return t.sent(), [4, g.default.inst.cameraTween(e, o)];
                        case 2:
                            return (
                                t.sent(),
                                g.default.inst.gameResume(),
                                i.app.gui.isLock(!1),
                                this.setWudi(h.GameSetting.inst.wudi_sce),
                                v.default.inst.setGoddessHp(this._data.hp),
                                [2]
                            );
                        case 3:
                            return i.app.event.emit(c.EventType.Game_Fail), [2];
                    }
                });
            });
        }),
        (C.prototype.onUpdate = function (t) {
            var e;
            g.default.inst.checkMapType([f.Map_Group.DEATH]) &&
                ((this.index_interval -= t),
                this.index_interval <= 0 &&
                    ((e = g.default.inst.getZindex(this.pos)), (this.ower.zIndex = e), (this.index_interval = 0.2)),
                (this.hurtTime -= t),
                this.playHurt(),
                this.checkHp(t),
                this.updateWudi(t));
        }),
        (C.prototype.updateWudi = function (t) {
            0 < this.wudi_time &&
                ((this.wudi_time -= t), this.wudi_time <= 0 && i.app.event.emit(c.EventType.Game_Goddess_Wudi_End));
        }),
        (C.prototype.checkHp = function (t) {
            var e;
            null !== (e = this._attrData) &&
                void 0 !== e &&
                e.is_egg_hp &&
                this._data.hp != this._data.maxHp &&
                ((this.hp_time -= t), this.hp_time <= 0) &&
                ((this.hp_time = 5),
                (t = Math.ceil(h.GameSetting.inst.death_egg_hp_rate * this._data.maxHp)),
                console.log("回血:", t, h.GameSetting.inst.death_egg_hp_rate, this._data.maxHp),
                this.addHp(t));
        }),
        (C.prototype.playHurt = function () {
            this.hurtTime <= 0 &&
                0 < this.hurtValue &&
                ((this.offset.x = l.default.randomRangeInt(-40, 40)),
                (this.offset.y = l.default.randomRangeInt(-40, 40)),
                i.app.event.emit(c.EventType.On_Float, {
                    pt: this.getCenter().add(this.offset),
                    msg: "" + this.hurtValue,
                    type: d.FloatFontType.Normal
                }),
                (this.hurtTime = 0.1),
                (this.hurtValue = 0));
        }),
        (C.prototype.getCenter = function () {
            return this.center;
        }),
        (C.prototype.getPos = function () {
            return this.pos;
        }),
        C);
function C() {
    (this.ower = null),
        (this.goddess = null),
        (this._layer = null),
        (this.goddessUI = null),
        (this.hpBar = null),
        (this._data = null),
        (this.hurtValue = 0),
        (this.hurtTime = 0.1),
        (this.hp_time = 0),
        (this._isDie = !1),
        (this.center = cc.v3()),
        (this.pos = null),
        (this.wudi_time = 0),
        (this._attrData = null),
        (this._radius = 40),
        (this.index_interval = 0.2),
        (this.offset = cc.v3());
}
o.GoddessController = new t();
