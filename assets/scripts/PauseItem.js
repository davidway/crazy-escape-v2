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
    s = t("ConfData"),
    l = t("SkillIcon"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(c, a),
        (c.prototype.onLoad = function () {
            for (var t = 0; t < this.stars.childrenCount; t++) {
                var e = this.stars.children[t];
                this.starList.push(e.getComponent(cc.Sprite));
            }
        }),
        (c.prototype.setIcon = function (t) {
            this.iconSp = t.getComponent(l.default);
        }),
        (c.prototype.setData = function (t, e) {
            if (
                (e
                    ? ((this.content.getComponent(cc.Sprite).spriteFrame = this.bg[0]),
                      (this.node.getComponent(cc.Sprite).spriteFrame = this.bg[0]))
                    : ((this.content.getComponent(cc.Sprite).spriteFrame = this.bg[1]),
                      (this.node.getComponent(cc.Sprite).spriteFrame = this.bg[1])),
                t)
            ) {
                if (
                    ((this.content.active = !0),
                    (this.iconSp.node.active = !0),
                    this.iconSp.setData(t.skill_id, t.level),
                    s.default.inst.playerSkillConf.getPlayerSkillLevelConfVo(t.skill_id, t.level).isUltimate)
                )
                    (this.maxStar.active = !0), (this.stars.active = !1);
                else {
                    (this.maxStar.active = !1), (this.stars.active = !0);
                    for (var o = 0; o < 5; o++)
                        o <= t.level - 1
                            ? (this.starList[o].spriteFrame = this.starIcons[1])
                            : (this.starList[o].spriteFrame = this.starIcons[0]);
                }
            } else (this.iconSp.node.active = !1), (this.content.active = !1);
        }),
        r([e(cc.Node)], c.prototype, "content", void 0),
        r([e(cc.Node)], c.prototype, "stars", void 0),
        r([e(cc.Node)], c.prototype, "maxStar", void 0),
        r([e([cc.SpriteFrame])], c.prototype, "starIcons", void 0),
        r([e([cc.SpriteFrame])], c.prototype, "bg", void 0),
        r([t], c));
function c() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.content = null),
        (t.stars = null),
        (t.maxStar = null),
        (t.starIcons = []),
        (t.bg = []),
        (t.iconSp = null),
        (t.starList = []),
        t
    );
}
o.default = t;
