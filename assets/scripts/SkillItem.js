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
        }),
    r =
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
var a,
    s = t("HeroController"),
    l = t("ConfData"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(c, a),
        (c.prototype.onLoad = function () {
            for (var t = this, e = 0; e < this.stars.childrenCount; e++) {
                var o = this.stars.children[e];
                this.starList.push(o.getComponent(cc.Sprite));
            }
            this.showTween = cc
                .tween(this.node)
                .call(function () {
                    t.node.scale = 0;
                })
                .to(0.2, {scale: 1})
                .delay(0.5)
                .to(0.2, {scale: 0});
        }),
        (c.prototype.setData = function (t) {
            t.skill ? this.initSkills(t.skill) : this.initGold(t.gold);
        }),
        (c.prototype.initSkills = function (t) {
            this.iconSp.spriteFrame = t.spf;
            var e = s.HeroController.getHeroSkill(t.id),
                t = l.default.inst.playerSkillConf.getPlayerSkillLevelConfVo(e.id, e.level);
            if (t.isUltimate) (this.maxStar.active = !0), (this.stars.active = !1);
            else {
                (this.maxStar.active = !1), (this.stars.active = !0);
                for (var o = 0; o < 5; o++)
                    o <= e.level - 1
                        ? (this.starList[o].spriteFrame = this.starIcons[1])
                        : (this.starList[o].spriteFrame = this.starIcons[0]);
            }
            (this.nameLab.string = t.name), (this.descLab.string = t.desc), this.showTween.start();
        }),
        (c.prototype.initGold = function (t) {
            (this.iconSp.spriteFrame = t.spf),
                (this.maxStar.active = !1),
                (this.stars.active = !1),
                (this.nameLab.string = "金币"),
                (this.descLab.string = "获得" + t.value + "金币"),
                this.showTween.start();
        }),
        r([e(cc.Node)], c.prototype, "content", void 0),
        r([e(cc.Node)], c.prototype, "stars", void 0),
        r([e(cc.Node)], c.prototype, "maxStar", void 0),
        r([e(cc.Sprite)], c.prototype, "iconSp", void 0),
        r([e(cc.Label)], c.prototype, "nameLab", void 0),
        r([e(cc.Label)], c.prototype, "descLab", void 0),
        r([e([cc.SpriteFrame])], c.prototype, "starIcons", void 0),
        r([t], c));
function c() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.content = null),
        (t.stars = null),
        (t.maxStar = null),
        (t.iconSp = null),
        (t.nameLab = null),
        (t.descLab = null),
        (t.starIcons = []),
        (t.starList = []),
        (t.showTween = null),
        t
    );
}
o.default = t;
