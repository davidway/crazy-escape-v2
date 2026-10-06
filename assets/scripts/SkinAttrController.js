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
Object.defineProperty(o, "__esModule", {value: !0});
var r,
    e = t("Singleton"),
    l = t("ConfData"),
    c = t("UserDataController"),
    i =
        ((r = e.Singleton()),
        i(a, r),
        (a.prototype.calcAttrById = function (t) {
            var a = this;
            (this._totalAttr = this.createAttr(this._totalAttr)),
                this._skillMap.forEach(function (t) {
                    a.createAttr(t);
                });
            function e(t) {
                var e = l.default.inst.playerSkinConf.getSkinSKillVo(t);
                if (0 < (null === (t = e.skills) || void 0 === t ? void 0 : t.length))
                    for (var o = 0, n = e.skills; o < n.length; o++) {
                        var i = n[o],
                            r = a._skillMap.get(i) || a.createAttr();
                        s(e, r), a._skillMap.set(i, r);
                    }
                else s(e, a._totalAttr);
            }
            var o = l.default.inst.playerSkinConf.getPlayerSkinVoById(t),
                s = function (t, e) {
                    for (var o = 0, n = t.attr; o < n.length; o++) {
                        var i = n[o];
                        switch (i.type) {
                            case 1:
                                e.appear += i.value;
                                break;
                            case 2:
                                e.atk += i.value;
                                break;
                            case 3:
                                e.crit_rate += i.value;
                                break;
                            case 4:
                                e.crit_value += i.value;
                                break;
                            case 5:
                                e.hp += i.value;
                                break;
                            case 6:
                                e.addHp += i.value;
                                break;
                            case 7:
                                e.addHpRate += i.value;
                                break;
                            case 8:
                                e.defenseRate += i.value;
                                break;
                            case 9:
                                e.seckill_rate += i.value;
                        }
                    }
                };
            0 < o.skill_id && e(o.skill_id),
                0 < o.mb_id && c.default.inst.getSkinSkillStatus(t) && e(o.mb_id),
                console.log("皮肤属性:", this._totalAttr, this._skillMap);
        }),
        (a.prototype.getAttr = function (t, e) {
            var o = this._totalAttr[t] || 0;
            return null == e || ((e = this._skillMap.get(e)) && (o += e[t] || 0)), o || 0;
        }),
        (a.prototype.createAttr = function (t) {
            return t
                ? ((t.appear = 0),
                  (t.atk = 0),
                  (t.crit_rate = 0),
                  (t.crit_value = 0),
                  (t.hp = 0),
                  (t.addHp = 0),
                  (t.addHpRate = 0),
                  (t.defenseRate = 0),
                  (t.seckill_rate = 0),
                  (t.gj_crit_rate = 0),
                  (t.hy_crit_rate = 0),
                  (t.ld_crit_rate = 0),
                  t)
                : {
                      appear: 0,
                      atk: 0,
                      crit_rate: 0,
                      crit_value: 0,
                      hp: 0,
                      addHp: 0,
                      addHpRate: 0,
                      defenseRate: 0,
                      seckill_rate: 0,
                      gj_crit_rate: 0,
                      hy_crit_rate: 0,
                      ld_crit_rate: 0
                  };
        }),
        a);
function a() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (t._totalAttr = null), (t._skillMap = new Map()), t;
}
o.default = i;
