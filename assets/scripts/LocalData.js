var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("App"),
    i = t("DateUtil"),
    r = t("EventTypes"),
    a = t("EquipType"),
    s = t("ServerData"),
    l = t("IUserEquipVo"),
    t =
        ((c.prototype.initDefaultData = function () {
            (this.user.level = 1),
                (this.user.totalExp = 0),
                (this.user.gold = 0),
                (this.user.gem = 0),
                (this.user.gene = 0),
                (this.user.goldCount = 0),
                (this.user.gemCount = 0),
                (this.user.skin = 1 == this.guide_hero_type ? 11 : 1),
                (this.user.energy = 0),
                (this.user.energy_time = 0),
                (this.user.chapter = 1),
                (this.user.hellChapter = 4001),
                (this.user.chest = 1),
                (this.user.skins = 1 == this.guide_hero_type ? [11] : [1]),
                (this.user.skinSkills = []),
                (this.user.skins_debris = []),
                (this.user.equips = [
                    {id: 1, quality: 1, level: 1, status: l.EquipStatus.ON, equipType: a.EquipType.WEAPONS}
                ]),
                (this.user.activitys = []),
                (this.user.challenges = []),
                (this.user.chapters = [{id: 1, best_time: 0, isPass: 0}]),
                (this.user.unlocked_content_ids = []),
                (this.user.evolve = {normal: 0, special: 0}),
                (this.user.setup = {Voice: !0, Music: !0, Shock: !0}),
                (this.user.game = this.defaultGame),
                (this.user.guide = {
                    Novicepass: 0,
                    Equipment: 0,
                    Evolution: 0,
                    Challenge: 0,
                    Patrol: 0,
                    Activity: 0,
                    skin: 0
                }),
                (this.user.dailyTask = []),
                (this.user.dailyReward = []),
                (this.user.weekTask = []),
                (this.user.weekReward = []),
                (this.user.honourTask = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                (this.user.dailyData = {
                    login: 1,
                    chapter: 0,
                    chapterBox: 0,
                    signIn: 0,
                    challenge: 0,
                    equip_lv_up: 0,
                    fast_patrol: 0,
                    patrol: 0,
                    video: 0,
                    chest: 0
                }),
                (this.user.weekData = {
                    equip_lv_up: 0,
                    chapter: 0,
                    challenge: 0,
                    kill_boss: 0,
                    chapterBox: 0,
                    video: 0,
                    chest: 0
                }),
                (this.user.honourData = {
                    use_gold: 0,
                    use_gem: 0,
                    chapterBox: 0,
                    chapter: 0,
                    pass: 0,
                    equips: 0,
                    talent: 0,
                    level: 0
                }),
                (this.user.nickName = ""),
                (this.user.avatarUrl = ""),
                (this.user.saveDate = 0),
                (this.user.hellData = {}),
                (this.user.deathPass = 0),
                (this.user.goods = {}),
                (this.user.codes = {}),
                (this.user.share_count = 0);
        }),
        (c.prototype.setUid = function (t) {
            (this.uid = t), (this.userKey = "user_" + t);
        }),
        (c.prototype.initData = function () {
            var t;
            "" == this.userKey && this.setUid(this.uid), this.initDefaultData();
            var e = null === (t = n.app.storage) || void 0 === t ? void 0 : t.read(this.userKey);
            if (e) for (var o in ((this.isDefaultData = !1), e)) this.user[o] = e[o];
            cc.sys.isBrowser &&
                (this.resetNewDate(),
                this.resetNewWeek(),
                (this.user.login = Date.now()),
                null === (t = n.app.timer) || void 0 === t || t.on(this, this.save, 2)),
                console.log("[LocalData]-->[line:22]:", this.user);
        }),
        (c.prototype.onGetSettingData = function (t) {
            (this.guide_hero_type = t), this.initData();
        }),
        (c.prototype.setData = function (t) {
            var e;
            if (
                t &&
                "[object Object]" === Object.prototype.toString.call(t) &&
                (console.log(
                    "数据判定:",
                    this.isDefaultData,
                    t.level > this.user.level,
                    t.totalExp > this.user.totalExp,
                    t.chapter > this.user.chapter
                ),
                this.isDefaultData ||
                    t.level > this.user.level ||
                    t.totalExp > this.user.totalExp ||
                    t.chapter > this.user.chapter)
            ) {
                for (var o in t) this.user[o] = t[o];
                (this.user.game = this.defaultGame),
                    (this.isUpdate = !0),
                    this.save(),
                    console.log("[LocalData]-->更新数据:", t, this.user);
            }
            console.log("[LocalData]-->[line:476]:", this.isDefaultData, t),
                this.resetNewDate(),
                this.resetNewWeek(),
                (this.user.login = Date.now()),
                null === (e = n.app.timer) || void 0 === e || e.on(this, this.save, 2),
                null === (e = n.app.timer) || void 0 === e || e.on(this, this.postData, 20),
                n.app.event.on(r.EventType.On_Hide, this.postData, this);
        }),
        (c.prototype.getValue = function (t) {
            return this.user[t];
        }),
        (c.prototype.setValue = function (t, e) {
            (this.user[t] = e),
                (this.isUpdate = !0),
                this.isNeedPosData || -1 == this.mainKeys.indexOf(t) || (this.isNeedPosData = !0);
        }),
        (c.prototype.resetNewDate = function () {
            var t = this.user.login ? i.default.compare(this.user.login, Date.now()) : 1;
            if ((console.log("[LocalData]-->[line:119]:同一天", t), 0 < t))
                for (var e in this.newDateValue) this.user[e] = this.newDateValue[e];
        }),
        (c.prototype.resetNewWeek = function () {
            if (this.user.login && !i.default.compareWeek(this.user.login, Date.now()))
                for (var t in this.newWeekValue) this.user[t] = this.newWeekValue[t];
        }),
        (c.prototype.save = function () {
            var t;
            this.isUpdate &&
                ((this.isUpdate = !1),
                (this.user.saveDate = Date.now()),
                null === (t = n.app.storage) || void 0 === t || t.save(this.userKey, this.user),
                this.isNeedPosData && 4e3 <= Date.now() - this.postDate && this.postData());
        }),
        (c.prototype.postData = function () {
            var t;
            this.isNeedPosData &&
                null !== (t = this.user.guide) &&
                void 0 !== t &&
                t.Novicepass &&
                ((this.isNeedPosData = !1), (this.postDate = Date.now()), s.default.inst.postData(this.user));
        }),
        c);
function c() {
    (this.user = {}),
        (this.defaultGame = {
            chapter: 0,
            time: 0,
            round: 0,
            level: 1,
            exp: 0,
            skills: [],
            gold: 0,
            killNum: 0,
            equips: [],
            drawings: [],
            revive: 0,
            bossNum: 0,
            goddessHp: 0,
            hp: 0,
            speed_flag: 0,
            goods: []
        }),
        (this.isUpdate = !1),
        (this.isNeedPosData = !1),
        (this.postDate = 0),
        (this.uid = 1),
        (this.userKey = ""),
        (this.mainKeys = [
            "gem",
            "gene",
            "gold",
            "honourData",
            "weekData",
            "dailyData",
            "honourTask",
            "weekReward",
            "weekTask",
            "dailyReward",
            "dailyTask",
            "InviteData",
            "EverydayRewardData",
            "guide",
            "level",
            "totalExp",
            "energy",
            "energy_time",
            "skin",
            "skins",
            "skinSkills",
            "skins_debris",
            "equips",
            "chapter",
            "hellChapter",
            "chapters",
            "drawing",
            "chest",
            "profitDrawings",
            "profitEquips",
            "energyNum",
            "date",
            "activitys",
            "evolve",
            "startTime",
            "startFastTime",
            "Assignment",
            "deathPass",
            "unlocked_content_ids",
            "goods",
            "codes"
        ]),
        (this.newDateValue = {
            activitys: [],
            dailyTask: [],
            dailyReward: [],
            dailyData: {
                login: 1,
                chapter: 0,
                chapterBox: 0,
                signIn: 0,
                challenge: 0,
                equip_lv_up: 0,
                fast_patrol: 0,
                patrol: 0,
                video: 0,
                chest: 0
            },
            goldCount: 0,
            share_count: 0,
            gemCount: 0
        }),
        (this.newWeekValue = {
            weekTask: [],
            weekReward: [],
            weekData: {
                equip_lv_up: 0,
                chapter: 0,
                challenge: 0,
                kill_boss: 0,
                chapterBox: 0,
                signIn: 0,
                patrol: 0,
                video: 0,
                chest: 0
            }
        }),
        (this.guide_hero_type = 1),
        (this.isDefaultData = !0);
}
o.default = t;
