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
    l = t("LaunchMgr"),
    i =
        ((r = e.Singleton()),
        i(c, r),
        (c.prototype.login = function () {
            a.app.event.once(
                s.EventType.Get_Login_Code,
                function (t) {
                    console.warn("登陆code:", JSON.stringify(t)), l.default.inst.start();
                },
                this
            ),
                a.app.platform.login();
        }),
        c);
function c() {
    return (null !== r && r.apply(this, arguments)) || this;
}
o.default = i;
