var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
Object.defineProperty(n.prototype, "skinNum", {
    get: function () {
        return this._skinNum;
    },
    enumerable: !1,
    configurable: !0
}),
    (n.prototype.parseJson = function (t, e) {
        var o,
            n = e.playerSkinConf,
            i = e.skinSkillConf;
        for (o in n) this.skins.set(n[o].id, n[o]), (this._skinNum += 1), this.sortList.set(n[o].index, n[o]);
        for (o in i) this.skills.set(i[o].id, i[o]);
    }),
    (n.prototype.getPlayerSkinVoById = function (t) {
        return this.skins.get(t);
    }),
    (n.prototype.getPlayerSkinVoByIndex = function (t) {
        return this.sortList.get(t);
    }),
    (n.prototype.getPlayerSkins = function () {
        return this.skins;
    }),
    (n.prototype.getSkinSKillVo = function (t) {
        return this.skills.get(t);
    }),
    (e = n);
function n() {
    (this.skins = new Map()), (this.skills = new Map()), (this.sortList = new Map()), (this._skinNum = 0);
}
o.default = e;
