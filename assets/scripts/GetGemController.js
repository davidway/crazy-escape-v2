var t = require;
var e = module;
var o = exports;
var n,
    e =
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
var i,
    r = t("App"),
    e =
        ((i = t("Singleton").Singleton()),
        e(a, i),
        (a.prototype.initData = function () {
            this.get_Gem_time();
        }),
        (a.prototype.set_Gem_time = function (t) {
            (this.gem_time = t), r.app.local.setValue("gem_time", t);
        }),
        (a.prototype.get_Gem_time = function () {
            var t = r.app.local.getValue("gem_time") || 0;
            this.gem_time = t;
        }),
        a);
function a() {
    var t = (null !== i && i.apply(this, arguments)) || this;
    return (t.gem_time = 0), t;
}
o.default = e;
