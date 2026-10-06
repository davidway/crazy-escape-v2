var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var d = t("GameSetting"),
    t =
        ((n.prototype.parseJson = function (t, e) {
            if (!t.startsWith("all") && !this._roundMap.has(t) && e) {
                for (
                    var o = [],
                        n = parseInt(t.substring(9)),
                        i = d.GameSetting.inst.getRoundAttr(n),
                        r = e.keys,
                        a = e.types,
                        s = e.values,
                        l = 0,
                        c = s.length;
                    l < c;
                    l++
                ) {
                    for (var u = {}, p = s[l], h = 0; h < r.length; h++)
                        "object" == a[h]
                            ? (u[r[h]] = "null" == p[h] || null == p[h] ? null : JSON.parse(p[h]))
                            : (u[r[h]] = p[h]);
                    i && ((u.atk_ratio += i.atk_ratio), (u.hp_ratio += i.hp_ratio), (u.speed_ratio += i.speed_ratio)),
                        o.push(u);
                }
                this._roundMap.set(t, o),
                    o.sort(function (t, e) {
                        return t.time - e.time;
                    }),
                    o.forEach(function (t, e) {
                        t.index = e;
                    }),
                    console.log("[RoundConf]-->[line:5]:", this._roundMap.keys(), t);
            }
        }),
        (n.prototype.hasRound = function (t) {
            return this._roundMap.has("roundConf" + t);
        }),
        (n.prototype.getRoundById = function (t) {
            return this._roundMap.get("roundConf" + t);
        }),
        (n.prototype.copyRound = function (t, e) {
            var o, n;
            this.hasRound(e) ||
                ((n = "roundConf" + e),
                (o = this.getRoundById(t)) && this._roundMap.set(n, o),
                console.log("副本拷贝:", this._roundMap, t, e, n));
        }),
        n);
function n() {
    this._roundMap = new Map();
}
o.default = t;
