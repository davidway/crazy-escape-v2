var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.AnimSys = void 0);
(n.prototype.addComp = function (t) {
    this.list.push(t), (this.count = Math.ceil(0.2 * this.list.length));
}),
    (n.prototype.delComp = function (t) {
        t && t.clear();
    }),
    (n.prototype.onUpdate = function (t) {
        for (var e = 0; e < this.count; e++)
            this.list[this.index].isValid && this.list[this.index].onUpdate(5 * t),
                (this.index = (this.index + 1) % this.list.length);
    }),
    (e = n);
function n() {
    (this.list = []), (this.count = 0), (this.index = 0);
}
o.AnimSys = new e();
