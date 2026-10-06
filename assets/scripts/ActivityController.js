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
    s = t("ConfData"),
    i =
        ((r = e.Singleton()),
        i(l, r),
        (l.prototype.initData = function () {
            var e = this;
            (this.activitys = a.app.local.getValue("activitys")),
                this.activitys.forEach(function (t) {
                    e.activityMap.set(t.id, t);
                });
        }),
        (l.prototype.getPlayCount = function (t) {
            return this.getActivityData(t).count;
        }),
        (l.prototype.getCanPlayCount = function (t) {
            var e = this.getActivityData(t),
                t = s.default.inst.activityConf.getActivityById(t);
            return t ? t.count - e.count : 0;
        }),
        (l.prototype.getActivityData = function (t) {
            var e = this.activityMap.get(t);
            return e || (this.activityMap.set(t, (e = {id: t, count: 0})), this.activitys.push(e)), e;
        }),
        (l.prototype.addPlayCount = function (t) {
            (this.getActivityData(t).count += 1), a.app.local.setValue("activitys", this.activitys);
        }),
        (l.prototype.clear = function () {
            a.app.local.setValue("activitys", []);
        }),
        l);
function l() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (t.activityMap = new Map()), t;
}
o.default = i;
