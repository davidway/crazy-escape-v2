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
        }),
    r =
        (this && this.__decorate) ||
        function (t, e, o, n) {
            var i,
                r = arguments.length,
                a = r < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else
                for (var s = t.length - 1; 0 <= s; s--)
                    (i = t[s]) && (a = (r < 3 ? i(a) : 3 < r ? i(e, o, a) : i(e, o)) || a);
            return 3 < r && a && Object.defineProperty(e, o, a), a;
        },
    a =
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
    l =
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
var s,
    c = t("App"),
    u = t("ResMgr"),
    p = t("MathUtil"),
    h = t("EventTypes"),
    d = t("FrameComp"),
    f = t("DropController"),
    y = t("GoodsDataController"),
    g = t("HeroController"),
    m = t("HolidayController"),
    _ = t("SkinAttrController"),
    v = t("Flash"),
    b = t("MobHit"),
    w = t("DropType"),
    C = t("FloatFontType"),
    k = t("GameEnums"),
    E = t("KillType"),
    S = t("GameMgr"),
    M = t("GridMgr"),
    R = t("AnimSys"),
    T = t("Monster"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((s = T.default),
        i(D, s),
        Object.defineProperty(D.prototype, "type", {
            get: function () {
                return k.MonsterType.MOB;
            },
            enumerable: !1,
            configurable: !0
        }),
        (D.prototype.onLoad = function () {
            s.prototype.onLoad.call(this),
                (this.size.x = 5),
                (this.size.y = 7),
                (this.node.width = this.size.x * M.GridMgr.gridSize),
                (this.node.height = this.size.y * M.GridMgr.gridSize),
                (this.flashComp = this.body.node.addComponent(v.default)),
                this.flashComp.setColor(cc.Color.WHITE.fromHEX("#EAEAEA")),
                (this.hitComp = this.node.addComponent(b.default)),
                (this.animComp = new d.FrameComp(this.node, this.body)),
                R.AnimSys.addComp(this.animComp);
        }),
        (D.prototype.onEnable = function () {
            s.prototype.onEnable.call(this), this.initAmins();
        }),
        (D.prototype.onDisable = function () {
            s.prototype.onDisable.call(this), this.animComp.clear(), R.AnimSys.delComp(this.animComp);
        }),
        (D.prototype.onIdle = function () {}),
        (D.prototype.onMove = function () {}),
        (D.prototype.onAttack = function () {}),
        (D.prototype.initAmins = function () {
            return a(this, void 0, void 0, function () {
                var e, o, n, i, r, a, s;
                return l(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                this.animComp.clear(),
                                [4, u.default.inst.getAsset(this.mSkin.url, cc.SpriteAtlas, "actors")]
                            );
                        case 1:
                            for (e = t.sent(), o = 0, n = this.mSkin.action.length; o < n; o++) {
                                for (i = this.mSkin.action[o], r = [], a = 1; a <= i.count; a++)
                                    r.push(e.getSpriteFrame("" + i.name + this.mSkin.index + "_" + a));
                                (s = {name: i.name, frames: r, interval: i.interval, loop: i.name == k.MobActs.WALK}),
                                    this.animComp.setData(s);
                            }
                            return this.animComp.play(k.MobActs.WALK), [2];
                    }
                });
            });
        }),
        (D.prototype.onLostHp = function (t, e) {
            var o =
                    g.HeroController.getAtrr("seckill_rate") +
                    _.default.inst.getAttr("seckill_rate", e ? e.skill_id : null),
                n = !1;
            if ((n = 0 < o && Math.random() <= o ? !0 : n))
                return (
                    this.kill(),
                    void c.app.event.emit(h.EventType.On_Float, {
                        pt: this.moveComp.getCenterPos().add(cc.v3(0, 30)),
                        msg: "" + t.value,
                        type: C.FloatFontType.kill
                    })
                );
            s.prototype.onLostHp.call(this, t, e),
                this.isDie ||
                    (this.flashComp.play(),
                    this.hitComp.play(),
                    e && 0 != e.beat && this.type == k.MonsterType.MOB
                        ? ((this.hurt_time = 0), this.moveComp.beatBack(e.beat))
                        : (this.hurt_time = cc.director.getTotalTime() + this.hurt_Delay));
        }),
        (D.prototype.onDie = function () {
            var t = this;
            this.animComp.has(k.MobActs.DIE)
                ? this.animComp.play(k.MobActs.DIE, function () {
                      R.AnimSys.delComp(t.animComp), s.prototype.onDie.call(t);
                  })
                : (R.AnimSys.delComp(this.animComp), s.prototype.onDie.call(this));
        }),
        (D.prototype.onUpdate = function (t) {
            (this.body.node.angle += this.sign),
                (this.body.node.angle < -7 || 7 < this.body.node.angle) && (this.sign = -this.sign),
                s.prototype.onUpdate.call(this, t);
        }),
        (D.prototype.setScale = function (t) {
            (this.bodyScale = t), (this.body.node.scale = this.bodyScale);
        }),
        (D.prototype.setDir = function (t) {
            this.body.node.scaleX = -t * this.bodyScale;
        }),
        (D.prototype.checkDrop = function () {
            if (this.mConf.exp)
                if (this.dieType == E.KillType.Clean && 1 != S.default.inst.chapterVo.boss_kill_drop)
                    console.log("清怪不掉落经验");
                else {
                    var e = 0;
                    this.mConf.exp.forEach(function (t) {
                        e += t.ratio;
                    });
                    for (var t = p.default.randomRangeInt(0, e), o = 0, n = 0; n < this.mConf.exp.length; n++)
                        if (t <= (o += (r = this.mConf.exp[n]).ratio)) {
                            r.type != w.ExpType.None &&
                                c.app.event.emit(h.EventType.On_Exp_Drop, {
                                    pt: this.moveComp.getCenterPos(),
                                    type: r.type,
                                    value: r.value
                                });
                            break;
                        }
                }
            var i = m.default.inst.getDropActivity();
            if (
                i &&
                m.default.inst.dropNum < i.drop_max &&
                y.default.inst.checkGoodsDrop(i.goods_id, this.moveComp.getCenterPos())
            )
                m.default.inst.dropNum++;
            else {
                i = g.HeroController.getEvolveAtrr("Devourer") + this.mConf.drop_rate;
                if (0 != i && Math.random() < i && this.mConf.drop) {
                    var r,
                        a = 0;
                    for (
                        this.mConf.drop.forEach(function (t) {
                            a += t.ratio;
                        }),
                            t = p.default.randomRangeInt(0, a),
                            n = o = 0;
                        n < this.mConf.drop.length;
                        n++
                    )
                        if (t <= (o += (r = this.mConf.drop[n]).ratio)) {
                            r.type != w.ExpType.None &&
                                f.default.inst.canDropItem() &&
                                f.default.inst.addDrop({
                                    type: r.type,
                                    data: {
                                        pt: this.moveComp.getCenterPos(),
                                        type: r.type == w.DropType.Gold ? 1 : 0,
                                        value: r.value,
                                        index: 0
                                    }
                                });
                            break;
                        }
                }
            }
        }),
        r([e(cc.Sprite)], D.prototype, "body", void 0),
        r([t], D));
function D() {
    var t = (null !== s && s.apply(this, arguments)) || this;
    return (
        (t.body = null),
        (t.flashComp = null),
        (t.animComp = null),
        (t.hitComp = null),
        (t.hurt_time = 0),
        (t.hurt_Delay = 200),
        (t.sign = -0.4),
        (t.scale = -0.01),
        t
    );
}
o.default = t;
