var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("Vector2D");
o.default = function (t, e) {
    void 0 === t && (t = null),
        void 0 === e && (e = null),
        (this.direction = n.default.ZERO),
        (this.point = n.default.ZERO),
        (this.direction = e),
        (this.point = t);
};
