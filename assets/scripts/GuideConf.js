var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("ArrayUtil"),
    t =
        ((i.prototype.parseJson = function (t, e) {
            for (var o = 0, n = e.guideConf; o < n.length; o++) {
                var i = n[o],
                    r = this.guides.get(i.group);
                (r = r || []).push(i), this.guides.set(i.group, r);
            }
        }),
        (i.prototype.getGuideList = function (t) {
            t = this.guides.get(t);
            return t ? n.default.clone(t) : null;
        }),
        i);
function i() {
    this.guides = new Map();
}
o.default = t;
