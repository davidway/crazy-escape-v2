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
var a = t("MathUtil"),
    s = t("HeroController"),
    l = t("EquipType"),
    u = t("GameEnums"),
    c = t("GameMgr"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        (i.prototype.parseJson = function (t, e) {
            for (var o = 0, n = e.chapterConf; o < n.length; o++) {
                var i = n[o];
                this.chapterMap.set(i.id, i),
                    i.type == u.Map_Group.NORMAL && (this.max_chapter = Math.max(this.max_chapter, i.id));
            }
            for (var r = e.equipDropNumConf, e = e.equipDropQualityConf, a = 0, s = r; a < s.length; a++)
                (i = s[a]),
                    this.equipDropNum.push(i),
                    (this.max_drop_num_ratio += i.ratio),
                    1 == i.first_drop && (this.first_drop_num = i.equip_num);
            for (var l = 0, c = e; l < c.length; l++)
                (i = c[l]), this.equipDropQuality.push(i), (this.max_drop_quality_ratio += i.ratio);
            console.log("[ChapterConf]-->[line:16]:", this.chapterMap);
        }),
        (i.prototype.getMaxChapter = function () {
            return this.max_chapter;
        }),
        (i.prototype.getChapterVo = function (t) {
            return this.chapterMap.get(t);
        }),
        (i.prototype.getEquipDropNum = function (t) {
            if (0 == t && 0 < this.first_drop_num) return this.first_drop_num;
            var e = s.HeroController.getEvolveAtrr("Hunter"),
                o = a.default.randomRangeInt(0, this.max_drop_num_ratio),
                n = 0,
                i = this.equipDropNum.length;
            console.log("结算获得装备:是否获得天赋", e);
            for (var r = 0; r < i; r++)
                if (o <= (n += 0 < e ? this.equipDropNum[r].talent_ratio : this.equipDropNum[r].ratio))
                    return this.equipDropNum[r].equip_num;
            return 0;
        }),
        (i.prototype.calcEquipDropQuality = function () {
            return this.equipDropQuality;
        }),
        (i.prototype.getEquipDropQuality = function () {
            for (
                var t = c.default.inst.chapter,
                    e = a.default.randomRangeInt(0, this.max_drop_quality_ratio),
                    o = 0,
                    n = this.calcEquipDropQuality(t),
                    i = n.length,
                    r = 0;
                r < i;
                r++
            )
                if (e <= (o += n[r].ratio)) return n[r].quality;
            return l.EquipQualityType.GRAY;
        }),
        n([t], i));
function i() {
    (this.chapterMap = new Map()),
        (this.max_chapter = 0),
        (this.max_patrol_time = 16),
        (this.equipDropNum = []),
        (this.equipDropQuality = []),
        (this.first_drop_num = 0),
        (this.max_drop_num_ratio = 0),
        (this.max_drop_quality_ratio = 0),
        (this.dropQualityMap = new Map());
}
o.default = t;
