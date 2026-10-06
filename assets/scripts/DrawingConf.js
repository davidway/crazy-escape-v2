var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("MathUtil"),
    a = t("Prop"),
    t =
        ((i.prototype.parseJson = function (t, e) {
            var o,
                n = e.drawingConf;
            for (o in n) this._drawingMap.set(n[o].id, n[o]), 7 != n[o].id && this._drawings.push(n[o]);
        }),
        (i.prototype.getDrawingVoById = function (t) {
            return this._drawingMap.get(t);
        }),
        (i.prototype.getRandomDrawing = function () {
            var t = n.default.randomRangeInt(0, this._drawings.length);
            return this._drawings[t];
        }),
        (i.prototype.getRandomDraw = function (t) {
            for (var e = [], o = [], n = [], i = 0; i < t; i++) {
                var r = this.getRandomDrawing();
                e.push({id: r.id, quantity: 1});
            }
            for (i = 0; i < e.length; i++)
                null == o[e[i].id] && (o[e[i].id] = {id: 0, quantity: 0}),
                    (o[e[i].id].id = e[i].id),
                    (o[e[i].id].quantity += e[i].quantity);
            return (
                o.forEach(function (t) {
                    n.push({type: a.Prop.drawing, profit: {draw: {id: t.id, quantity: t.quantity}}});
                }),
                {getLists: o, showDatas: n}
            );
        }),
        i);
function i() {
    (this._drawingMap = new Map()), (this._drawings = []);
}
o.default = t;
