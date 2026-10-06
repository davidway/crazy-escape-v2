var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.prototype.parseJson = function (t, e) {
    var o,
        n = e.hellConf;
    for (o in n) {
        var i = n[o],
            r = {chapter: i.chapter, chapter_id: i.chapter_id, rewards: []};
        i.reward1 && r.rewards.push(i.reward1),
            i.reward2 && r.rewards.push(i.reward2),
            i.reward3 && r.rewards.push(i.reward3),
            this.hellMap.set(r.chapter_id, r),
            this.hellMap.set(r.chapter, r),
            (this.maxChapter = Math.max(r.chapter_id, this.maxChapter)),
            (this.maxLen += 1);
    }
    (this.maxChapter = 4040), (this.maxLen = 40), console.log("地狱配置:", this.hellMap, this.maxChapter, this.maxLen);
}),
    (n.prototype.getHellVoByFb = function (t) {
        return this.hellMap.get(t);
    }),
    (n.prototype.getHellVoByChapter = function (t) {
        return this.hellMap.get(t);
    }),
    (e = n);
function n() {
    (this.hellMap = new Map()), (this.maxChapter = 0), (this.maxLen = 0);
}
o.default = e;
