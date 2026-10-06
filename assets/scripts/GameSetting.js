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
Object.defineProperty(o, "__esModule", {value: !0}), (o.GameSetting = void 0);
var i,
    u = t("App"),
    e =
        ((i = t("Singleton").Singleton()),
        e(r, i),
        Object.defineProperty(r.prototype, "isDebug", {
            get: function () {
                return cc.sys.isBrowser && this._isDebug;
            },
            set: function (t) {
                this._isDebug = t;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "max_monster_num", {
            get: function () {
                var t = u.app.platform.getSystemInfoSync();
                return t && "ios" == t.platform ? this.ios_max_monster_num : this.android_max_monster_num;
            },
            set: function () {},
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "max_monster_num2", {
            get: function () {
                var t = u.app.platform.getSystemInfoSync();
                return t && "ios" == t.platform ? this.ios_max_monster_num2 : this.android_max_monster_num2;
            },
            set: function () {},
            enumerable: !1,
            configurable: !0
        }),
        (r.prototype.getRoundAttr = function (t) {
            return this.roundAttrMap.get(t);
        }),
        (r.prototype.getMonsterAttr = function (t) {
            return this.monsterAttrMap.get(t);
        }),
        (r.prototype.getLottery = function (t) {
            return this.lotteryMap.has(t) ? this.lotteryMap.get(t) : this.unify_lottery;
        }),
        (r.prototype.parse = function (t, e) {
            if (e) {
                for (var o in e)
                    if (((this[o] = e[o]), "roundAttr" == o))
                        for (var n = 0, i = e[o]; n < i.length; n++) {
                            var r = i[n];
                            this.roundAttrMap.set(r.id, r);
                        }
                    else if ("monsterAttr" == o)
                        for (var a = 0, s = e[o]; a < s.length; a++) (r = s[a]), this.monsterAttrMap.set(r.id, r);
                    else if ("special_lottery" == o)
                        for (var l = 0, c = e[o]; l < c.length; l++) (r = c[l]), this.lotteryMap.set(r.chapter, r);
                console.log(
                    "设置数据",
                    t,
                    e,
                    this.roundAttrMap.values(),
                    this.monsterAttrMap.values(),
                    this.lotteryMap.values()
                ),
                    this.initShare(),
                    u.app.local.onGetSettingData(this.guide_hero_type);
            }
        }),
        (r.prototype.initAds = function () {
            this.ad_videoID && u.app.platform.createVideoAd(this.ad_videoID);
        }),
        (r.prototype.initShare = function () {
            this.share_info && u.app.platform.initShare(this.share_info, this.share_scuss_sec || 3e3);
        }),
        r);
function r() {
    var t = (null !== i && i.apply(this, arguments)) || this;
    return (
        (t._isDebug = !1),
        (t.game_speed_window = 0),
        (t.Game_Speed_Rate = 1.5),
        (t.videoTest = 102 == window.videoTest),
        (t.undead = 103 == window.undead),
        (t.use_foresee = 0),
        (t.Client_version = "1.0"),
        (t.Notice_version = "1.0"),
        (t.Notice_text_front = ""),
        (t.Notice_text_after = ""),
        (t.Notice_start_time = "202354"),
        (t.Notice_end_time = "2023511"),
        (t.Notice_reward = [
            {id: 2, count: 500},
            {id: 6, count: 50},
            {id: 5, count: 5}
        ]),
        (t.Notice_everyday_show = 1),
        (t.Notice_index = 1),
        (t.complete_refresh = 0),
        (t.surplusNum = 5),
        (t.freeNum = 1),
        (t.cleanUseEnergy = 15),
        (t.seek_horse = 30),
        (t.seek_horse2 = 7),
        (t.show_shop_renovate = 1),
        (t.chest_ad_down_time = 30),
        (t.plain_chest_ad = 2),
        (t.epic_chest_ad = 2),
        (t.energy_default_value = 30),
        (t.energy_recovery_value = 1),
        (t.energy_recovery_mil_sec = 6e5),
        (t.energy_use_value = 5),
        (t.revive_gem = 50),
        (t.energy_num = 15),
        (t.death_boss_num = 3),
        (t.endless_boss_num = 3),
        (t.endless_chest_rate = 50),
        (t.unify_lottery = {before: 0, count: 2}),
        (t.special_lottery = [
            {chapter: 1, before: 0, count: 2},
            {chapter: 2, before: 0, count: 2}
        ]),
        (t.is_new = 1),
        (t.wudi_sce = 3),
        (t.isPreloadSkill = !0),
        (t.death_egg_hp_time = 5),
        (t.death_egg_hp_rate = 0.01),
        (t.on_hide_pause = !0),
        (t.guide_hero_type = 0),
        (t.mouse_ids = [3, 4, 6]),
        (t.skull_ids = [12, 7, 8]),
        (t.endless_score = [
            {bossNum: 1, score: "B", grade: 1},
            {bossNum: 3, score: "B+", grade: 1},
            {bossNum: 6, score: "A", grade: 2},
            {bossNum: 9, score: "A+", grade: 2},
            {bossNum: 12, score: "S", grade: 3},
            {bossNum: 15, score: "SS", grade: 3}
        ]),
        (t.holiday_details = null),
        (t.code_rewards = [
            {code: "LS888", gem: 300, gold: 0, drawings: 0, equips: 0},
            {code: "ZSWZQ", gem: 50, gold: 2e3, drawings: 50, equips: 0},
            {code: "FKDTS", gem: 100, gold: 4e3, drawings: 0, equips: 0}
        ]),
        (t.user_codes = null),
        (t.goods_drop_rate = []),
        (t.ios_max_monster_num = 450),
        (t.ios_max_monster_num2 = 210),
        (t.android_max_monster_num = 450),
        (t.android_max_monster_num2 = 210),
        (t.ad_videoID = []),
        (t.share_info = null),
        (t.dailyGold = 1500),
        (t.dailyGoldCount = 5),
        (t.dailyGem = 50),
        (t.dailyGemCount = 5),
        (t.wealth_cd = 20),
        (t.roundAttr = null),
        (t.monsterAttr = null),
        (t.lotteryMap = new Map()),
        (t.roundAttrMap = new Map()),
        (t.monsterAttrMap = new Map()),
        (t.share_scuss_sec = 3e3),
        (t.share_count = 3),
        t
    );
}
o.GameSetting = e;
