var t = require;
var e = module;
var o = exports;
var n =
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
    };
Object.defineProperty(o, "__esModule", {value: !0});
var i = cc._decorator,
    e = i.ccclass,
    e =
        (i.property,
        (r.prototype.parseJson = function (t, e) {
            var o,
                n = e.monsterSkinConf;
            for (o in n) this.skinMap.set(n[o].id, n[o]);
        }),
        (r.prototype.getMonsterSkinVo = function (t) {
            return this.skinMap.get(t);
        }),
        n([e], r));
function r() {
    this.skinMap = new Map();
}
o.default = e;
