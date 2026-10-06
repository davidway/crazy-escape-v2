var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("UiTokens"),
    i = t("FontTokens");
function r(t) {
    return n.hexToColor(t);
}
function a(t, e) {
    if (!t) return;
    var o = t.getComponent(cc.Label);
    if (!o) return;
    var a = i.LabelStyle[e] || i.LabelStyle.body;
    (o.fontSize = i.resolveSize(a.size)),
        (o.node.color = r(i.resolveColor(a.color))),
        (o.lineHeight = Math.ceil(o.fontSize * 1.25));
    var s = t.getComponent(cc.LabelOutline);
    a.outline
        ? (s || (s = t.addComponent(cc.LabelOutline)),
          (s.color = r(n.Color.outline)),
          (s.width = a.outline))
        : s && (s.enabled = !1);
}
function s(t, e, o) {
    void 0 === e && (e = n.Color.bgPanel), void 0 === o && (o = n.Color.border);
    if (!t) return;
    var i = t.getComponent(cc.Graphics);
    i || (i = t.addComponent(cc.Graphics));
    var a = t.width || 200,
        s = t.height || 100,
        l = n.Radius.sm;
    i.clear(),
        (i.fillColor = r(e)),
        i.roundRect(-a / 2, -s / 2, a, s, l),
        i.fill(),
        (i.strokeColor = r(o)),
        (i.lineWidth = 2),
        i.roundRect(-a / 2, -s / 2, a, s, l),
        i.stroke();
}
(o.applyLabelStyle = a),
    (o.paintPanel = s),
    (o.paintCta = function (t) {
        s(t, n.Color.gold, n.Color.borderGold);
    }),
    /** 装饰层不抢点击（Graphics / Label 盖在按钮上时必需） */
    (o.ignoreHits = function (t) {
        t &&
            (t._hitTest = function () {
                return !1;
            });
    }),
    /** 浏览器预览默认关 GM；仅 window.tiaoshi===101 或 ?gm=1 开启 */
    (o.isGmEnabled = function () {
        if (101 == window.tiaoshi) return !0;
        try {
            return -1 < String(location.search || "").indexOf("gm=1");
        } catch (e) {
            return !1;
        }
    }),
    (o.tweenPress = function (t, e) {
        if (!t) return;
        var o = n.Motion.fast;
        cc.tween(t)
            .to(o, {scale: 0.96}, {easing: n.Motion.ease})
            .to(o, {scale: 1}, {easing: n.Motion.ease})
            .call(function () {
                e && e();
            })
            .start();
    }),
    (o.tweenPopIn = function (t, e) {
        if (!t) return;
        (t.scale = 0.85),
            (t.opacity = 0),
            cc.tween(t)
                .to(n.Motion.base, {scale: 1, opacity: 255}, {easing: n.Motion.ease})
                .call(function () {
                    e && e();
                })
                .start();
    }),
    (o.createPanel = function (t, e, o) {
        void 0 === t && (t = 300), void 0 === e && (e = 160);
        var i = new cc.Node(o || "UiPanel");
        return (i.width = t), (i.height = e), (i.anchorX = 0.5), (i.anchorY = 0.5), s(i), i;
    }),
    (o.createButton = function (t, e, o) {
        void 0 === e && (e = 280), void 0 === o && (o = 72);
        var i = new cc.Node("UiButton"),
            s = new cc.Node("label");
        return (
            (i.width = e),
            (i.height = o),
            (i.anchorX = 0.5),
            (i.anchorY = 0.5),
            this.paintCta(i),
            (s.parent = i),
            (s.addComponent(cc.Label).string = t || "开始挑战"),
            a(s, "cta"),
            i.on(
                cc.Node.EventType.TOUCH_END,
                function () {
                    this.tweenPress(i);
                }.bind(this)
            ),
            i
        );
    }),
    (o.createLabel = function (t, e) {
        void 0 === e && (e = "body");
        var o = new cc.Node("UiLabel");
        return (o.addComponent(cc.Label).string = t || ""), a(o, e), o;
    }),
    (o.Tokens = n),
    (o.Fonts = i);
