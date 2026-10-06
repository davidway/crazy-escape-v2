var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var M = t("RVOMath"),
    R = t("Obstacle"),
    t =
        ((n.prototype.buildAgentTree = function () {
            if (this.agents.length != this.simulator.getNumAgents()) {
                this.agents = this.simulator.agents;
                for (var t = 0, e = 2 * this.agents.length; t < e; t++) this.agentTree.push(new i());
            }
            0 < this.agents.length && this._buildAgentTreeRecursive(0, this.agents.length, 0);
        }),
        (n.prototype._buildAgentTreeRecursive = function (t, e, o) {
            (this.agentTree[o].begin = t),
                (this.agentTree[o].end = e),
                (this.agentTree[o].minX = this.agentTree[o].maxX = this.agents[t].position.x),
                (this.agentTree[o].minY = this.agentTree[o].maxY = this.agents[t].position.y);
            for (var n = t + 1; n < e; ++n)
                (this.agentTree[o].maxX = Math.max(this.agentTree[o].maxX, this.agents[n].position.x)),
                    (this.agentTree[o].minX = Math.max(this.agentTree[o].minX, this.agents[n].position.x)),
                    (this.agentTree[o].maxY = Math.max(this.agentTree[o].maxX, this.agents[n].position.y)),
                    (this.agentTree[o].minY = Math.max(this.agentTree[o].minY, this.agents[n].position.y));
            if (e - t > this.MAXLEAF_SIZE) {
                for (
                    var i,
                        r =
                            this.agentTree[o].maxX - this.agentTree[o].minX >
                            this.agentTree[o].maxY - this.agentTree[o].minY,
                        a = r
                            ? 0.5 * (this.agentTree[o].maxX + this.agentTree[o].minX)
                            : 0.5 * (this.agentTree[o].maxY + this.agentTree[o].minY),
                        s = t,
                        l = e;
                    s < l;

                ) {
                    for (; s < l && (r ? this.agents[s].position.x : this.agents[s].position.y) < a; ) ++s;
                    for (; s < l && (r ? this.agents[l - 1].position.x : this.agents[l - 1].position.y) >= a; ) --l;
                    s < l &&
                        ((i = this.agents[s]),
                        (this.agents[s] = this.agents[l - 1]),
                        (this.agents[l - 1] = i),
                        ++s,
                        --l);
                }
                var c = s - t;
                0 == c && (++c, ++s, ++l),
                    (this.agentTree[o].left = o + 1),
                    (this.agentTree[o].right = o + 1 + (2 * c - 1)),
                    this._buildAgentTreeRecursive(t, s, this.agentTree[o].left),
                    this._buildAgentTreeRecursive(s, e, this.agentTree[o].right);
            }
        }),
        (n.prototype.buildObstacleTree = function () {
            var t = this.simulator.obstacles;
            this.obstacleTree = this._buildObstacleTreeRecursive(t);
        }),
        (n.prototype._buildObstacleTreeRecursive = function (t) {
            if (0 == t.length) return null;
            for (var e = new D(), o = 0, n = t.length, i = t.length, r = 0, a = t.length; r < a; ++r) {
                for (var s = 0, l = 0, c = (v = t[r]).next, u = 0; u < t.length; u++)
                    if (r != u) {
                        var p = (b = t[u]).next,
                            h = M.default.leftOf(v.point, c.point, b.point),
                            d = M.default.leftOf(v.point, c.point, p.point);
                        h >= -M.default.RVO_EPSILON && d >= -M.default.RVO_EPSILON
                            ? ++s
                            : ((h <= M.default.RVO_EPSILON && d <= M.default.RVO_EPSILON) || ++s, ++l);
                        var f = new T(Math.max(s, l), Math.min(s, l)),
                            y = new T(Math.max(n, i), Math.min(n, i));
                        if (f._get(y)) break;
                    }
                (f = new T(Math.max(s, l), Math.min(s, l))),
                    (y = new T(Math.max(n, i), Math.min(n, i))),
                    f._mt(y) && ((n = s), (i = l), (o = r));
            }
            for (var g = [], m = 0; m < n; ++m) g.push(null);
            for (var _ = [], m = 0; m < i; ++m) _.push(null);
            for (var v, b, w, C, k = 0, E = 0, S = ((c = (v = t[(r = o)]).next), 0); S < t.length; ++S)
                r != S &&
                    ((p = (b = t[S]).next),
                    (h = M.default.leftOf(v.point, c.point, b.point)),
                    (d = M.default.leftOf(v.point, c.point, p.point)),
                    h >= -M.default.RVO_EPSILON && d >= -M.default.RVO_EPSILON
                        ? (g[k++] = t[S])
                        : h <= M.default.RVO_EPSILON && d <= M.default.RVO_EPSILON
                        ? (_[E++] = t[S])
                        : ((C =
                              M.default.det(c.point.minus(v.point), b.point.minus(v.point)) /
                              M.default.det(c.point.minus(v.point), b.point.minus(p.point))),
                          (w = b.point.plus(p.point.minus(b.point).scale(C))),
                          ((C = new R.default()).point = w),
                          (C.previous = b),
                          (C.next = p),
                          (C.isConvex = !0),
                          (C.unitDir = b.unitDir),
                          (C.id = this.simulator.obstacles.length),
                          this.simulator.obstacles.push(C),
                          (b.next = C),
                          (p.previous = C),
                          0 < h ? ((g[k++] = b), (_[E++] = C)) : ((_[E++] = b), (g[k++] = C))));
            return (
                (e.obstacle = v),
                (e.left = this._buildObstacleTreeRecursive(g)),
                (e.right = this._buildObstacleTreeRecursive(_)),
                e
            );
        }),
        (n.prototype.computeAgentNeighbors = function (t, e) {
            this._queryAgentTreeRecursive(t, e, 0);
        }),
        (n.prototype.computeObstacleNeighbors = function (t, e) {
            this._queryObstacleTreeRecursive(t, e, this.obstacleTree);
        }),
        (n.prototype._queryAgentTreeRecursive = function (t, e, o) {
            var n = this.agentTree;
            if (n[o].end - n[o].begin <= this.MAXLEAF_SIZE)
                for (var i = n[o].begin; i < n[o].end; ++i) t.insertAgentNeighbor(this.agents[i], e);
            else {
                var r =
                        M.default.sqr(Math.max(0, n[n[o].left].minX - t.position.x)) +
                        M.default.sqr(Math.max(0, t.position.x - n[n[o].left].maxX)) +
                        M.default.sqr(Math.max(0, n[n[o].left].minY - t.position.y)) +
                        M.default.sqr(Math.max(0, t.position.y - n[n[o].left].maxY)),
                    a =
                        M.default.sqr(Math.max(0, n[n[o].right].minX - t.position.x)) +
                        M.default.sqr(Math.max(0, t.position.x - n[n[o].right].maxX)) +
                        M.default.sqr(Math.max(0, n[n[o].right].minY - t.position.y)) +
                        M.default.sqr(Math.max(0, t.position.y - n[n[o].right].maxY));
                r < a
                    ? r < e &&
                      (this._queryAgentTreeRecursive(t, e, n[o].left),
                      a < e && this._queryAgentTreeRecursive(t, e, n[o].right))
                    : a < e &&
                      (this._queryAgentTreeRecursive(t, e, n[o].right),
                      r < e && this._queryAgentTreeRecursive(t, e, n[o].left));
            }
        }),
        (n.prototype._queryObstacleTreeRecursive = function (t, e, o) {
            var n, i, r;
            null != o &&
                ((i = (n = o.obstacle).next),
                (r = M.default.leftOf(n.point, i.point, t.position)),
                this._queryObstacleTreeRecursive(t, e, 0 <= r ? o.left : o.right),
                M.default.sqr(r) / M.default.absSq(i.point.minus(n.point)) < e &&
                    (r < 0 && t.insertObstacleNeighbor(o.obstacle, e),
                    this._queryObstacleTreeRecursive(t, e, 0 <= r ? o.right : o.left)));
        }),
        (n.prototype.queryVisibility = function (t, e, o) {
            return this._queryVisibilityRecursive(t, e, o, this.obstacleTree);
        }),
        (n.prototype._queryVisibilityRecursive = function (t, e, o, n) {
            if (null == n) return !0;
            var i = n.obstacle,
                r = i.next,
                a = M.default.leftOf(i.point, r.point, t),
                s = M.default.leftOf(i.point, r.point, e),
                l = 1 / M.default.absSq(r.point.minus(i.point));
            if (0 <= a && 0 <= s)
                return (
                    this._queryVisibilityRecursive(t, e, o, n.left) &&
                    ((M.default.sqr(a) * l >= M.default.sqr(o) && M.default.sqr(s) * l >= M.default.sqr(o)) ||
                        this._queryVisibilityRecursive(t, e, o, n.right))
                );
            if (a <= 0 && s <= 0)
                return (
                    this._queryVisibilityRecursive(t, e, o, n.right) &&
                    ((M.default.sqr(a) * l >= M.default.sqr(o) && M.default.sqr(s) * l >= M.default.sqr(o)) ||
                        this._queryVisibilityRecursive(t, e, o, n.left))
                );
            if (0 <= a && s <= 0)
                return (
                    this._queryVisibilityRecursive(t, e, o, n.left) && this._queryVisibilityRecursive(t, e, o, n.right)
                );
            (s = M.default.leftOf(t, e, i.point)),
                (i = M.default.leftOf(t, e, r.point)),
                (r = 1 / M.default.absSq(e.minus(t)));
            return (
                0 <= s * i &&
                M.default.sqr(s) * r > M.default.sqr(o) &&
                M.default.sqr(i) * r > M.default.sqr(o) &&
                this._queryVisibilityRecursive(t, e, o, n.left) &&
                this._queryVisibilityRecursive(t, e, o, n.right)
            );
        }),
        n);
function n() {
    (this.MAXLEAF_SIZE = 30), (this.agents = []), (this.agentTree = []), (this.obstacleTree = new D());
}
o.default = t;
var T =
        ((r.prototype._mt = function (t) {
            return this.a < t.a || (!(t.a < this.a) && this.b < t.b);
        }),
        (r.prototype._met = function (t) {
            return (this.a == t.a && this.b == t.b) || this._mt(t);
        }),
        (r.prototype._gt = function (t) {
            return !this._met(t);
        }),
        (r.prototype._get = function (t) {
            return !this._mt(t);
        }),
        r),
    i = function () {
        (this.begin = 0),
            (this.end = 0),
            (this.left = 0),
            (this.maxX = 0),
            (this.maxY = 0),
            (this.minX = 0),
            (this.minY = 0),
            (this.right = 0);
    },
    D = function () {};
function r(t, e) {
    void 0 === t && (t = 0), void 0 === e && (e = 0), (this.a = 0), (this.b = 0), (this.a = t), (this.b = e);
}
