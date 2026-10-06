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
    e = t("Singleton"),
    a = t("ActivityConf"),
    s = t("AssignmentConf"),
    l = t("ChallengeConf"),
    c = t("ChapterConf"),
    u = t("ChapterRewardConf"),
    p = t("ConstConf"),
    h = t("DeathConf"),
    d = t("DrawingConf"),
    f = t("EndlessBossConf"),
    y = t("EquipConf"),
    g = t("EverydayRewardConf."),
    m = t("EvolveConf"),
    _ = t("GoodsConf"),
    v = t("GuideConf"),
    b = t("HellConf"),
    w = t("HolidayConf"),
    C = t("InviteConf"),
    k = t("MonsterConf"),
    E = t("MonsterSkillConf"),
    S = t("MonsterSkinConf"),
    M = t("NoticeConf"),
    R = t("PlayerLevelConf"),
    T = t("PlayerSkillConf"),
    D = t("PlayerSkinConf"),
    P = t("PrizeConf"),
    O = t("RoundConf"),
    A = t("ShopConf"),
    L = t("TaskConf"),
    x = t("UserLevelConf"),
    i =
        ((r = e.Singleton()),
        i(B, r),
        (B.prototype.parseJson = function (t) {
            var e,
                o = t.name;
            for (e in this) e.endsWith("Conf") && this[e].parseJson(o, t.json);
        }),
        B);
function B() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (
        (t.monsterConf = new k.default()),
        (t.roundConf = new O.default()),
        (t.playerLevelConf = new R.default()),
        (t.playerSkillConf = new T.default()),
        (t.playerSkinConf = new D.default()),
        (t.monsterSkinConf = new S.default()),
        (t.monsterSkillConf = new E.default()),
        (t.chapterConf = new c.default()),
        (t.chapterRewardConf = new u.default()),
        (t.equipConf = new y.default()),
        (t.drawingConf = new d.default()),
        (t.userLevelConf = new x.default()),
        (t.constConf = new p.default()),
        (t.activityConf = new a.default()),
        (t.challengeConf = new l.default()),
        (t.evolveConf = new m.default()),
        (t.guideConf = new v.default()),
        (t.everydayRewardConf = new g.default()),
        (t.PrizeConf = new P.default()),
        (t.InviteConf = new C.default()),
        (t.taskConf = new L.default()),
        (t.shopConf = new A.default()),
        (t.assignmentConf = new s.default()),
        (t.endlessBossConf = new f.default()),
        (t.hellConf = new b.default()),
        (t.deathConf = new h.default()),
        (t.goodsConf = new _.default()),
        (t.holidayConf = new w.default()),
        (t.NoticeConf = new M.default()),
        t
    );
}
o.default = i;
