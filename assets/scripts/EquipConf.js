var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("MathUtil"),
    i = t("EquipType"),
    t =
        ((r.prototype.parseJson = function (t, e) {
            var o,
                n = e.equipConf,
                i = e.equipLevelConf,
                r = e.equipQualityConf,
                a = e.equipMergeConf;
            for (o in n)
                this._equipMap.set(n[o].equip_id, n[o]),
                    0 < n[o].equip_id &&
                        (this.equips.push(n[o]),
                        null == this.classifyEquips[n[o].type] && (this.classifyEquips[n[o].type] = []),
                        this.classifyEquips[n[o].type].push(n[o]));
            for (o in i)
                this._equipLevelMap.set(i[o].level, i[o]),
                    (this.equipMaxLevel = Math.max(this.equipMaxLevel, i[o].level));
            for (o in r) this._equipQualityMap.set(r[o].equip_id + "_" + r[o].quality, r[o]);
            for (o in a) this._equipMergeMap.set(a[o].quality, a[o]);
            console.log(
                "[EquipConf]-->[line:32]:",
                this.equips,
                this._equipMap,
                this._equipLevelMap,
                this._equipQualityMap,
                this._equipMergeMap,
                this.classifyEquips
            );
        }),
        (r.prototype.getEquipVo = function (t) {
            var e = this._equipMap.get(t);
            return e || console.error("找不到装备：", t), e;
        }),
        (r.prototype.getRandomEquip = function () {
            var t = n.default.randomRangeInt(0, this.equips.length);
            return this.equips[t];
        }),
        (r.prototype.getClassifyEquips = function (t) {
            if (t != i.EquipType.NONE) return this.classifyEquips[t];
        }),
        (r.prototype.getClassifyRandomEquips = function (t) {
            var e = n.default.randomRangeInt(0, this.classifyEquips[t].length);
            return this.classifyEquips[t][e];
        }),
        (r.prototype.getConsume = function (t) {
            return this._equipLevelMap.get(t);
        }),
        (r.prototype.getEquipMaxLevel = function (t, e) {
            e = this.getEquipQualityVo(t, e);
            return e ? e.max_level : 0;
        }),
        (r.prototype.getEquipQualityVo = function (t, e) {
            var o = this._equipQualityMap.get(t + "_" + e);
            return o || console.log("找不到配置", t, e), o;
        }),
        (r.prototype.getEquipMergeConfVo = function (t) {
            return this._equipMergeMap.get(t);
        }),
        r);
function r() {
    (this._equipMap = new Map()),
        (this._equipLevelMap = new Map()),
        (this._equipQualityMap = new Map()),
        (this._equipMergeMap = new Map()),
        (this.equips = []),
        (this.classifyEquips = [[]]),
        (this.equipMaxLevel = 1);
}
o.default = t;
