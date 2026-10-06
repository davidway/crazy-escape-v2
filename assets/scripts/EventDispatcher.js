var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.prototype.on = function (t, e, o) {
    t && o ? cc.game.on(t, e, o) : console.error("事件对象|类型为空===> type = ", t);
}),
    (n.prototype.once = function (t, e, o) {
        t && o ? cc.game.once(t, e, o) : console.error("事件对象|类型为空===> type = ", t);
    }),
    (n.prototype.off = function (t, e, o) {
        t && o ? cc.game.off(t, e, o) : console.error("事件对象|类型为空===> type = ", t);
    }),
    (n.prototype.targetOff = function (t) {
        t ? cc.game.targetOff(t) : console.error("事件对象===>");
    }),
    (n.prototype.emit = function (t, e) {
        cc.game.emit(t, e);
    }),
    (e = n);
function n() {}
o.default = e;
