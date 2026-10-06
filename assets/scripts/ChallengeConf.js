var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.prototype.parseJson = function (t, e) {
    var o,
        n = e.challengeConf;
    for (o in n) {
        var i = this.fbMap.get(n[o].chapter);
        (i = i || []).push(n[o]),
            this.fbMap.set(n[o].chapter, i),
            this.fbs.push(n[o]),
            this.chapters.push(n[o].chapter_id);
    }
}),
    (n.prototype.getFbs = function () {
        return Array.from(this.fbMap.values());
    }),
    (n.prototype.getFbByChapter = function (t) {
        for (var e = 0, o = this.fbs; e < o.length; e++) {
            var n = o[e];
            if (n.chapter_id == t) return n;
        }
        return null;
    }),
    (e = n);
function n() {
    (this.fbMap = new Map()), (this.fbs = []), (this.chapters = []);
}
o.default = e;
