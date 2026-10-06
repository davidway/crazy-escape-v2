var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.GridMgr = void 0);
var r = t("GameController"),
    a = t("GameEnums"),
    t =
        ((n.prototype.clear = function () {
            this.gridMap.forEach(function (t) {
                (t.comp = null), (t.neighbors.length = 0), (t.walkable = !0);
            });
        }),
        (n.prototype.getNeighbors = function (t, e, o) {
            if ((void 0 === o && (o = !1), !e || !t)) return null;
            for (var n = t.x, t = t.y, i = e.size, r = [], a = n - (i.x >> 1), s = t, l = 0; l < i.x; l++)
                for (var c = 0; c < i.y; c++) {
                    var u = this.getGridXY(a + l, s + c);
                    if (!u.comp && o && !u.walkable) return null;
                    if (u.comp && u.comp != e) return null;
                    r.push(u);
                }
            return r;
        }),
        (n.prototype.setWaklable = function (t, e, o) {
            for (var n = this.calcXY(t), i = o.left; i <= o.right; i++)
                for (var r = o.buttom; r <= o.top; r++) this.getGridXY(n.x + i, n.y + r).walkable = e;
        }),
        (n.prototype.addComp = function (t) {
            if (t) {
                var e = t.getPosition(),
                    o = this.getGrid(e),
                    e = this.getNeighbors(o, t);
                if (e) {
                    for (var n = 0, i = e; n < i.length; n++) i[n].comp = t;
                    ((t.center = o).comp = t), (o.neighbors = e);
                }
            }
        }),
        (n.prototype.delComp = function (t) {
            var e = this;
            t.center &&
                (t.center.neighbors.forEach(function (t) {
                    e.getGridXY(t.x, t.y).comp = null;
                }),
                (t.center.neighbors = [])),
                (t.center = null);
        }),
        (n.prototype.moveComp = function (t, e) {
            return !!this.checkMove(t, e);
        }),
        (n.prototype.checkMove = function (t, e) {
            if (!t) return !1;
            var o = t.center,
                o = this.getGridXY(o.x + e.x, o.y + e.y),
                e = o.pos;
            if (
                r.GameController.inst.mapType == a.MapType.VERTICAL_MAP &&
                (r.GameController.inst.moveLimit.rect.left > e.x || r.GameController.inst.moveLimit.rect.right < e.x)
            )
                return !1;
            e = this.getNeighbors(o, t, !0);
            if (!e) return !1;
            this.delComp(t);
            for (var n = 0, i = e; n < i.length; n++) i[n].comp = t;
            return (o.neighbors = e), (t.center = o), !0;
        }),
        (n.prototype.calcXY = function (t) {
            return {
                x: Math.ceil((t.x - this.halfSize) / this.gridSize),
                y: Math.ceil((t.y - this.halfSize) / this.gridSize)
            };
        }),
        (n.prototype.getGrid = function (t) {
            t = this.calcXY(t);
            return this.getGridXY(t.x, t.y);
        }),
        (n.prototype.getGridXY = function (t, e) {
            var o = t + "_" + e;
            if (this.gridMap.has(o)) return this.gridMap.get(o);
            e = {x: t, y: e, pos: cc.v3(t * this.gridSize, e * this.gridSize), comp: null, neighbors: [], walkable: !0};
            return this.gridMap.set(o, e), e;
        }),
        n);
function n() {
    (this.gridSize = 10),
        (this.gridMap = new Map()),
        (this.halfSize = this.gridSize >> 1),
        (this.radius = Math.sqrt(this.gridSize * this.gridSize + this.gridSize * this.gridSize));
}
o.GridMgr = new t();
