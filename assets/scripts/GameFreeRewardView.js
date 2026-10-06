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
    s = t("BasePanel"),
    l = t("UIEnum"),
    c = t("decorator"),
    u = t("FreeRewardItem"),
    p = t("App"),
    h = t("EffectMgr"),
    d = t("HeroController"),
    f = t("SkillEnum"),
    y = t("ConfData"),
    g = t("ArrayUtil"),
    m = t("EventTypes"),
    _ = t("GameMgr"),
    v = cc._decorator,
    e = v.ccclass,
    t = v.property,
    e =
        (v.inspector,
        (a = s.default),
        i(b, a),
        (b.prototype.initView = function () {
            for (var t = this, e = 0; e < this.content.childrenCount; e++) {
                var o = this.content.children[e];
                this.items.push(o.getComponent(u.default));
            }
            this.tween = cc
                .tween(this.panel)
                .call(function () {
                    t.panel.scale = 0;
                })
                .to(0.2, {scale: 1.2})
                .to(0.1, {scale: 1})
                .call(function () {});
        }),
        (b.prototype.updateView = function () {
            this.tween.start();
            var t,
                e = [],
                o = d.HeroController.getHeroSkills(),
                n = g.default.clone(y.default.inst.playerSkillConf.getRoundSkills()),
                i = [],
                r = [],
                a = [];
            if (
                (o.forEach(function (t) {
                    (t.confVo.type == f.SkillGroup.ACTIVE_SKILL ? r : a).push(t.id), i.push(t.id);
                }),
                a.length < 6 && 0 < r.length)
            ) {
                g.default.shuffle(r);
                for (var s = 0, l = r.length; s < l; s++) {
                    var c = r[s];
                    (t = y.default.inst.playerSkillConf.getSkillInfoVo(c)).isUltimate
                        ? ((c = y.default.inst.playerSkillConf.getSkillIdByTopId(c)), i.push(c))
                        : ((c = t.relation[0]), i.includes(c) || (e.push({skill: {id: c}}), i.push(c)));
                }
            }
            if (e.length < 3 && 0 < a.length && r.length < 6)
                for (g.default.shuffle(a), s = 0, l = a.length; s < l; s++)
                    (t = y.default.inst.playerSkillConf.getSkillInfoVo(a[s])).relation.forEach(function (t) {
                        !i.includes(t) && n.includes(t) && (e.push({skill: {id: t}}), i.push(t));
                    });
            console.warn("roundList:", n, e),
                e.length < 3 &&
                    (g.default.shuffle(n),
                    n.forEach(function (t) {
                        i.includes(t) ||
                            1e3 < t ||
                            (((t < 100 && r.length < 6) || (100 < t && a.length < 6)) && e.push({skill: {id: t}}));
                    }));
            for (var u = Math.floor(0.5 * _.default.inst.chapterVo.total_coin), s = 0; s < 3; s++)
                e[s] || (e[s] = {reward: {spf: this.gold, name: "+" + u + "金币", value: u, type: 1, isVideo: !0}});
            for (
                u = Math.floor(0.25 * _.default.inst.chapterVo.total_coin),
                    e[3] = {reward: {name: "+" + u + "金币", value: u, type: 1, isVideo: !1}},
                    e[4] = {reward: {name: "全屏经验", value: 0, type: 2, isVideo: !0}},
                    e[5] = {reward: {name: "回复满血", value: 0, type: 3, isVideo: !0}},
                    s = 0;
                s < 6;
                s++
            )
                this.items[s].setData(e[s]);
        }),
        (b.prototype.onGetReward = function () {
            _.default.inst.gameResume(), p.app.gui.closeUI(l.UIEnum.GameFreeRewardView);
        }),
        (b.prototype.onBtnRefreshClick = function () {
            var t = this;
            _.default.inst.getVideoShareReward(
                function () {
                    t.updateView();
                },
                null,
                function () {
                    h.default.inst.showTips("获取视频失败，请稍候再试！");
                }
            );
        }),
        r([c.autoBind("cc.Node", "panel")], b.prototype, "panel", void 0),
        r([c.autoBind("cc.Node", "panel/content")], b.prototype, "content", void 0),
        r([c.autoBind("cc.Node", "panel/btnRefresh")], b.prototype, "btnRefresh", void 0),
        r([t(cc.SpriteFrame)], b.prototype, "gold", void 0),
        r([c.gameEvent(m.EventType.Game_Free_Reward)], b.prototype, "onGetReward", null),
        r([e], b));
function b() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.panel = null),
        (t.content = null),
        (t.btnRefresh = null),
        (t.gold = null),
        (t.items = []),
        (t.tween = null),
        t
    );
}
o.default = e;
