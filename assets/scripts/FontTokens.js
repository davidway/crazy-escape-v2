var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("UiTokens");
/**
 * 字体与 Label 预设 — 对齐 research/cocos-typography.md
 * 字体资源：Bundle `ui-font` 内 ui-subset / ui-subset-bold（待裁剪接入）
 * 未加载前 fallback 系统字体，色与字号仍按 token 应用
 */
(o.FontFamily = {
    UI: "ui-subset",
    UI_BOLD: "ui-subset-bold",
    DAMAGE: "damage-bm",
    FALLBACK: "Arial"
}),
    (o.FontSize = {
        hero: 68,
        h1: 48,
        h2: 40,
        body: 32,
        caption: 24,
        hud: 20,
        damageNormal: 32,
        damageCrit: 36,
        damageBoss: 40
    }),
    (o.LabelStyle = {
        hero: {size: "hero", color: "text", bold: !0, outline: 4},
        h1Gold: {size: "h1", color: "gold", bold: !0, outline: 4},
        h2: {size: "h2", color: "text", bold: !0, outline: 2},
        body: {size: "body", color: "text", bold: !1, outline: 0},
        caption: {size: "caption", color: "muted", bold: !1, outline: 0},
        hud: {size: "hud", color: "text", bold: !1, outline: 2},
        cta: {size: "body", color: "ctaText", bold: !0, outline: 0},
        cyan: {size: "body", color: "cyan", bold: !0, outline: 2},
        danger: {size: "body", color: "danger", bold: !0, outline: 2}
    }),
    (o.DamageStyle = {
        normal: {size: "damageNormal", color: "text"},
        gold: {size: "damageNormal", color: "gold"},
        crit: {size: "damageCrit", color: "cyan"},
        boss: {size: "damageBoss", color: "danger"}
    }),
    (o.resolveColor = function (t) {
        return n.Color[t] || n.Color.text;
    }),
    (o.resolveSize = function (t) {
        return o.FontSize[t] || o.FontSize.body;
    });
