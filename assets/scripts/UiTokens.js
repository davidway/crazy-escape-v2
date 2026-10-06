var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
/**
 * 夜间求生 Arcade — design tokens（大厅与战斗 HUD 共用）
 * 对齐 wayfinder 票 01 / 原型 A
 */
(o.Color = {
    bgBase: "#0B0F14",
    bgPanel: "#121820",
    bgPanelRaised: "#1A2230",
    border: "#2A3444",
    borderGold: "#5A4810",
    text: "#E8EDF5",
    muted: "#8A96A8",
    gold: "#F5C518",
    cyan: "#2EE6A8",
    danger: "#FF4D4D",
    ctaText: "#141008",
    outline: "#0B0F14",
    quality: {
        1: "#9AA3B0",
        2: "#5CBF7A",
        3: "#4A9FE8",
        4: "#B07AE8",
        5: "#E85A4A"
    }
}),
    (o.Radius = {
        /** 面板 / 按钮统一 8px（设计宽 750 下 ≈ 16 world） */
        sm: 8,
        md: 8,
        lg: 12,
        phone: 28
    }),
    (o.Motion = {
        fast: 0.15,
        base: 0.18,
        slow: 0.22,
        ease: "sineOut"
    }),
    (o.Glow = {
        /** 仅大奖 / Boss / 进化 / 三选一选中 */
        allowed: ["jackpot", "boss", "evolve", "skill_pick", "legend"],
        color: "#F5C518",
        opacity: 0.35
    }),
    (o.Forbidden = [
        "purple-gradient-primary",
        "cream-terracotta",
        "serif-display-hero",
        "light-combat-hud",
        "fullscreen-blur-glass"
    ]),
    (o.hexToColor = function (t, e) {
        void 0 === e && (e = 255);
        var o = cc.Color.WHITE.fromHEX(t);
        return (o.a = e), o;
    }),
    (o.DesignWidth = 750);
