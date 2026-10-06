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
    s = t("UIEnum"),
    i =
        ((r = e.Singleton()),
        i(l, r),
        (l.prototype.setNode = function (t, e) {
            this.nodes.has(t) || this.nodes.set(t, e);
        }),
        (l.prototype.getNode = function (t) {
            if (this.nodes.has(t)) return this.nodes.get(t);
            console.error("没有" + t);
        }),
        (l.prototype.closeNode = function () {
            a.app.gui.closeUI(s.UIEnum.DescribeBlackView);
        }),
        l);
function l() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (t.nodes = new Map()), t;
}
o.default = i;
