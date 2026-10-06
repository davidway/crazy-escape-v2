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
    a = t("SkillEnum"),
    s = t("HeroSkill1"),
    l = t("HeroSkill10"),
    c = t("HeroSkill1014"),
    u = t("HeroSkill1002"),
    p = t("HeroSkill1012"),
    h = t("HeroSkill102"),
    d = t("HeroSkill11"),
    f = t("HeroSkill12"),
    y = t("HeroSkill13"),
    g = t("HeroSkill15"),
    m = t("HeroSkill2"),
    _ = t("HeroSkill3"),
    v = t("HeroSkill4"),
    b = t("HeroSkill5"),
    w = t("HeroSkill7"),
    C = t("HeroSkill8"),
    k = t("HeroSkill9"),
    E = t("MonsterSKill1"),
    S = t("MonsterSKill2"),
    M = t("MonsterSKill4"),
    R = t("HeroSkill1001"),
    T = t("HeroSkill1005"),
    D = t("HeroSkill1003"),
    P = t("HeroSkill1004"),
    O = t("HeroSkill1007"),
    A = t("HeroSkill1008"),
    L = t("HeroSkill1009"),
    x = t("HeroSkill1010"),
    B = t("HeroSkill1015"),
    I = t("HeroSkill6"),
    G = t("HeroSkill1011"),
    N = t("HeroSkill14"),
    U = t("HeroSkill1013"),
    V = t("HeroSkill1006"),
    F = t("MonsterSKill5"),
    j = t("MonsterSKill6"),
    H = t("MonsterSKill7"),
    q = t("MonsterSKill10"),
    z = t("MonsterSKill9"),
    W = t("MonsterSKill8"),
    Y = t("MonsterSKill11"),
    K = t("MonsterSKill12"),
    X = t("HeroSkill16"),
    J = t("HeroSkill1016"),
    i =
        ((r = e.Singleton()),
        i(Z, r),
        (Z.prototype.getHeroSkill = function (t) {
            return this.heroMap.has(t) ? this.heroMap.get(t) : (console.log("无英雄技能:", t), null);
        }),
        (Z.prototype.getMonsterSkill = function (t) {
            t = this.monsterMap.get(t);
            return t ? new t() : null;
        }),
        Z);
function Z() {
    var t = r.call(this) || this;
    return (
        (t.heroMap = new Map()),
        (t.monsterMap = new Map()),
        t.heroMap.set(a.HeroSkillType.Darts, new s.default()),
        t.heroMap.set(a.HeroSkillType.Gyro, new m.default()),
        t.heroMap.set(a.HeroSkillType.Lightning, new _.default()),
        t.heroMap.set(a.HeroSkillType.Forcefield, new v.default()),
        t.heroMap.set(a.HeroSkillType.Rocket, new b.default()),
        t.heroMap.set(a.HeroSkillType.Fireball, new I.default()),
        t.heroMap.set(a.HeroSkillType.Boomerang, new w.default()),
        t.heroMap.set(a.HeroSkillType.Bone, new C.default()),
        t.heroMap.set(a.HeroSkillType.Fuel_Bottle, new k.default()),
        t.heroMap.set(a.HeroSkillType.Greatsword, new l.default()),
        t.heroMap.set(a.HeroSkillType.Axe, new d.default()),
        t.heroMap.set(a.HeroSkillType.Bolt, new f.default()),
        t.heroMap.set(a.HeroSkillType.Spell, new y.default()),
        t.heroMap.set(a.HeroSkillType.LightDragon, new N.default()),
        t.heroMap.set(a.HeroSkillType.ChainLightning, new g.default()),
        t.heroMap.set(a.HeroSkillType.RotaryDart, new X.default()),
        t.heroMap.set(a.HeroSkillType.Holywater, new h.default()),
        t.heroMap.set(a.HeroSkillType.Axe_Max, new R.default()),
        t.heroMap.set(a.HeroSkillType.Fuel_Bottle_Max, new u.default()),
        t.heroMap.set(a.HeroSkillType.Rocket_Max, new D.default()),
        t.heroMap.set(a.HeroSkillType.Boomerang_Max, new P.default()),
        t.heroMap.set(a.HeroSkillType.Spell_Max, new T.default()),
        t.heroMap.set(a.HeroSkillType.Bone_Max, new V.default()),
        t.heroMap.set(a.HeroSkillType.Lightning_Max, new O.default()),
        t.heroMap.set(a.HeroSkillType.Forcefield_Max, new A.default()),
        t.heroMap.set(a.HeroSkillType.Greatsword_Max, new L.default()),
        t.heroMap.set(a.HeroSkillType.Bolt_Max, new x.default()),
        t.heroMap.set(a.HeroSkillType.Fireball_Max, new G.default()),
        t.heroMap.set(a.HeroSkillType.Darts_Max, new p.default()),
        t.heroMap.set(a.HeroSkillType.LightDragon_Max, new U.default()),
        t.heroMap.set(a.HeroSkillType.Gyro_Max, new c.default()),
        t.heroMap.set(a.HeroSkillType.ChainLightning_Max, new B.default()),
        t.heroMap.set(a.HeroSkillType.RotaryDart_Max, new J.default()),
        t.heroMap.set(a.HeroSkillType.Greatsword_Max_B, new L.default()),
        t.heroMap.set(a.HeroSkillType.Bolt_Max_B, new x.default()),
        t.heroMap.set(a.HeroSkillType.Darts_Max_B, new p.default()),
        t.heroMap.set(a.HeroSkillType.RotaryDart_Max_B, new J.default()),
        t.monsterMap.set(a.MonsterSkillType.Skill1, E.default),
        t.monsterMap.set(a.MonsterSkillType.Skill2, S.default),
        t.monsterMap.set(a.MonsterSkillType.Skill4, M.default),
        t.monsterMap.set(a.MonsterSkillType.Skill5, F.default),
        t.monsterMap.set(a.MonsterSkillType.Skill6, j.default),
        t.monsterMap.set(a.MonsterSkillType.Skill7, H.default),
        t.monsterMap.set(a.MonsterSkillType.Skill8, W.default),
        t.monsterMap.set(a.MonsterSkillType.Skill9, z.default),
        t.monsterMap.set(a.MonsterSkillType.Skill10, q.default),
        t.monsterMap.set(a.MonsterSkillType.Skill11, Y.default),
        t.monsterMap.set(a.MonsterSkillType.Skill12, K.default),
        t
    );
}
o.default = i;
