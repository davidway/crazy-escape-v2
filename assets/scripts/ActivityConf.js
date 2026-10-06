var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("ArrayUtil"),
    t =
        ((i.prototype.parseJson = function (t, e) {
            var o,
                n = e.activityConf;
            for (o in n)
                this.activitys.push(n[o]), this.activityMap.set(n[o].id, n[o]), this.chapters.push(n[o].chapter);
        }),
        (i.prototype.getActivitys = function () {
            return n.default.clone(this.activitys);
        }),
        (i.prototype.getActivityById = function (t) {
            return this.activityMap.get(t);
        }),
        i);
function i() {
    (this.activitys = []), (this.activityMap = new Map()), (this.chapters = []);
}
o.default = t;
