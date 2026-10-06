var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var i = t("MathUtil"),
    t =
        ((n.prototype.parseJson = function (t, e) {
            var o = e.deathConf,
                n = e.deathExtraConf,
                i = e.deathLevelConf,
                r = e.deathRewardsConf;
            for (s in o) {
                var a = o[s];
                this.confMap.set(a.chapter, a);
            }
            s = 0;
            for (var s, l = n.length; s < l; s++) {
                (a = n[s]), (this.extraVo = a.value);
                break;
            }
            for (s in i) (a = i[s]), this.levelMap.push(a), (this.maxLevel = Math.max(this.maxLevel, a.level));
            for (s in (this.levelMap.sort(function (t, e) {
                return t.level - e.level;
            }),
            r))
                (a = r[s]), this.rewardsMap.set(a.level, a), (this.maxRewards = Math.max(this.maxRewards, a.level));
            console.log(
                "[DeathConf]-->[line:10]:",
                this.confMap,
                this.extraVo,
                this.levelMap,
                this.rewardsMap,
                this.maxLevel,
                this.maxRewards
            );
        }),
        (n.prototype.getDeathConfVoByChapter = function (t) {
            return this.confMap.get(t);
        }),
        (n.prototype.getExtraVo = function () {
            return this.extraVo;
        }),
        (n.prototype.getDeathInfo = function (t) {
            return t < 1 || t >= this.maxLevel ? null : this.levelMap[t - 1];
        }),
        (n.prototype.calcRewards = function (t) {
            if ((t = Math.max(t, 1)) < this.maxRewards) return this.rewardsMap.get(t);
            for (
                var e = this.rewardsMap.get(this.maxRewards), o = i.default.copyObj(e), n = this.maxRewards;
                n < t;
                n++
            )
                (o.drawings += this.extraVo.rewards.drawings),
                    (o.gem += this.extraVo.rewards.gem),
                    (o.gold += this.extraVo.rewards.gold);
            return (o.equips = t % 5 == 0 ? 1 : 0), o;
        }),
        (n.prototype.calcAttr = function (t) {
            var o = {
                mob_speed: 0,
                mob_hp: 0,
                mob_atk: 0,
                is_egg_hp: !0,
                boss_hp: 0,
                boss_speed: 0,
                boss_hp_add: 0,
                is_fast_mob: !1,
                Magnet_rate: 0
            };
            if (t <= 0) return o;
            for (
                var e = function (t) {
                        if (t)
                            for (var e in t)
                                switch (e) {
                                    case "t1":
                                        o.mob_speed += t[e];
                                        break;
                                    case "t2":
                                        o.mob_hp += t[e];
                                        break;
                                    case "t3":
                                        o.mob_atk += t[e];
                                        break;
                                    case "t4":
                                        1 != t[e] && (o.is_egg_hp = !1);
                                        break;
                                    case "t5":
                                        o.boss_hp += t[e];
                                        break;
                                    case "t6":
                                        1 == t[e] && (o.is_fast_mob = !0);
                                        break;
                                    case "t7":
                                        o.boss_speed += t[e];
                                        break;
                                    case "t8":
                                        o.Magnet_rate += t[e];
                                        break;
                                    case "t9":
                                        o.boss_hp_add += t[e];
                                }
                    },
                    n = 0;
                n < t;
                n++
            )
                n < this.maxLevel ? e(this.levelMap[n].effect) : e(this.extraVo.attr);
            return o;
        }),
        n);
function n() {
    (this.confMap = new Map()),
        (this.levelMap = []),
        (this.rewardsMap = new Map()),
        (this.extraVo = null),
        (this.maxLevel = 0),
        (this.maxRewards = 0);
}
o.default = t;
