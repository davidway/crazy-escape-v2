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
    a = t("App"),
    e = t("Singleton"),
    s = t("EventTypes"),
    g = t("ConfData"),
    l = t("AssignmentConf"),
    m = t("EvolveType"),
    c = t("AssignmentController"),
    u = t("TaskController"),
    _ = t("UserDataController"),
    i =
        ((r = e.Singleton()),
        i(p, r),
        (p.prototype.initData = function () {
            (this.evolve = a.app.local.getValue("evolve")), this.calcTalent();
        }),
        Object.defineProperty(p.prototype, "nomal", {
            get: function () {
                return this.evolve.normal;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(p.prototype, "special", {
            get: function () {
                return this.evolve.special;
            },
            enumerable: !1,
            configurable: !0
        }),
        (p.prototype.calcTalent = function () {
            for (
                var t,
                    e = 0,
                    o = 0,
                    n = 0,
                    i = 0,
                    r = 0,
                    a = 0,
                    s = 0,
                    l = 0,
                    c = 0,
                    u = 0,
                    p = 0,
                    h = g.default.inst.evolveConf.normalStart;
                h <= this.evolve.normal;
                h++
            )
                switch ((t = g.default.inst.evolveConf.getEvolveConfVo(h)).type) {
                    case m.EvolveType.Atk:
                        u += t.value;
                        break;
                    case m.EvolveType.Hp:
                        p += t.value;
                        break;
                    case m.EvolveType.Defense:
                        e += t.value;
                        break;
                    case m.EvolveType.Food_Hp:
                        o += t.value;
                }
            for (h = g.default.inst.evolveConf.specialStart; h <= this.evolve.special; h++)
                switch ((t = g.default.inst.evolveConf.getEvolveConfVo(h)).type) {
                    case m.EvolveType.Lucky:
                        n += t.value;
                        break;
                    case m.EvolveType.Flexible:
                        i += t.value;
                        break;
                    case m.EvolveType.Speed:
                        r += t.value;
                        break;
                    case m.EvolveType.Meat:
                        a += t.value;
                        break;
                    case m.EvolveType.Hunter:
                        s += t.value;
                        break;
                    case m.EvolveType.Owl:
                        l += t.value;
                        break;
                    case m.EvolveType.Devourer:
                        c += t.value;
                }
            var d = _.default.inst.skin,
                f = g.default.inst.playerSkinConf.getPlayerSkinVoById(d),
                y = Math.ceil(f.attack * u),
                d = Math.ceil(f.hp * p);
            (this.attr = {
                Atk: y,
                Hp: d,
                Defense: e,
                Food_Hp: o,
                Lucky: n,
                Flexible: i,
                Speed: r,
                Meat: a,
                Hunter: s,
                Owl: l,
                Devourer: c
            }),
                console.log("天赋属性:", f, p, this.attr);
        }),
        (p.prototype.getTalent = function () {
            return this.attr;
        }),
        (p.prototype.getShowTalent = function () {
            for (var t = 0, e = 0, o = g.default.inst.evolveConf.normalStart; o <= this.evolve.normal; o++) {
                var n = g.default.inst.evolveConf.getEvolveConfVo(o);
                switch (n.type) {
                    case m.EvolveType.Atk:
                        t += n.value;
                        break;
                    case m.EvolveType.Hp:
                        e += n.value;
                }
            }
            var i = _.default.inst.skin,
                i = g.default.inst.playerSkinConf.getPlayerSkinVoById(i);
            return {Atk: Math.floor(i.attack * t * 10), Hp: Math.floor(i.hp * e * 10)};
        }),
        (p.prototype.getNormalid = function () {
            return 0 == this.evolve.normal ? g.default.inst.evolveConf.normalStart : this.evolve.normal + 1;
        }),
        (p.prototype.getSpecialid = function () {
            return 0 == this.evolve.special ? g.default.inst.evolveConf.specialStart : this.evolve.special + 1;
        }),
        (p.prototype.updateTask = function () {
            var t = 0;
            0 < this.nomal && (t += this.nomal - g.default.inst.evolveConf.normalStart + 1),
                0 < this.special && (t += this.special - g.default.inst.evolveConf.specialStart + 1),
                u.default.inst.setHonour("talent", t);
        }),
        (p.prototype.unlockNormal = function (t) {
            var e = !1;
            if ((e = 0 == this.evolve.normal || this.evolve.normal + 1 == t ? !0 : e)) {
                e = g.default.inst.evolveConf.getEvolveConfVo(t);
                if (_.default.inst.useGold(e.cost))
                    return (
                        0 == this.evolve.normal
                            ? (this.evolve.normal = g.default.inst.evolveConf.normalStart)
                            : (this.evolve.normal += 1),
                        a.app.local.setValue("evolve", this.evolve),
                        this.calcTalent(),
                        a.app.event.emit(s.EventType.User_Evolve_Change, t),
                        a.app.sound.playEffect("升级天赋成功时音效"),
                        console.log(this.evolve.normal, g.default.inst.evolveConf.normalStart),
                        c.default.inst.setProg(this.evolve.normal + this.evolve.special, l.DayAssign.evolution),
                        !0
                    );
            }
            return !1;
        }),
        (p.prototype.unlockSpecial = function (t) {
            var e = !1;
            if ((e = 0 == this.evolve.special || this.evolve.special + 1 == t ? !0 : e)) {
                e = g.default.inst.evolveConf.getEvolveConfVo(t);
                if (_.default.inst.useGene(e.cost))
                    return (
                        0 == this.evolve.special
                            ? (this.evolve.special = g.default.inst.evolveConf.specialStart)
                            : (this.evolve.special += 1),
                        a.app.local.setValue("evolve", this.evolve),
                        this.calcTalent(),
                        a.app.event.emit(s.EventType.User_Evolve_Change, t),
                        a.app.sound.playEffect("升级天赋成功时音效"),
                        c.default.inst.setProg(this.evolve.normal + this.evolve.special, l.DayAssign.evolution),
                        !0
                    );
            }
            return !1;
        }),
        p);
function p() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (t.evolve = null), (t.attr = null), t;
}
o.default = i;
