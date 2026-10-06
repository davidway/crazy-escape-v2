var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var r = t("GameSetting"),
    t =
        ((n.prototype.parseJson = function (t, e) {
            var o,
                n = e.monsterConf;
            for (o in n) {
                var i = r.GameSetting.inst.getMonsterAttr(n[o].id);
                i &&
                    ((n[o].hp = i.hp),
                    (n[o].drop_rate = i.drop_rate),
                    (n[o].speed = i.speed),
                    (n[o].attack = i.attack),
                    (n[o].atk_time = i.atk_time),
                    (n[o].atk_radius = i.atk_radius)),
                    this._monsters.set(n[o].id, n[o]);
            }
            console.log("[MonsterConf]-->[line:5]:", this._monsters);
        }),
        (n.prototype.getMonserVo = function (t) {
            return this._monsters.get(t);
        }),
        n);
function n() {
    this._monsters = new Map();
}
o.default = t;
