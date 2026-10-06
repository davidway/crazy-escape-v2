var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var l = t("Vector2D"),
    r = t("Obstacle"),
    c = t("Agent"),
    a = t("RVOMath"),
    n = t("KdTree"),
    t =
        ((i.prototype.getGlobalTime = function () {
            return this.time;
        }),
        (i.prototype.getNumAgents = function () {
            return this.agents.length;
        }),
        (i.prototype.getTimeStep = function () {
            return this.timeStep;
        }),
        (i.prototype.setAgentPrefVelocity = function (t, e, o) {
            this.agents[t].prefVelocity = new l.default(e, o);
        }),
        (i.prototype.setAgentPosition = function (t, e, o) {
            this.agents[t].position = new l.default(e, o);
        }),
        (i.prototype.setAgentGoal = function (t, e, o) {
            this.goals[t] = new l.default(e, o);
        }),
        (i.prototype.setTimeStep = function (t) {
            this.timeStep = t;
        }),
        (i.prototype.getAgentPosition = function (t) {
            return this.agents[t].position;
        }),
        (i.prototype.getAgentPrefVelocity = function (t) {
            return this.agents[t].prefVelocity;
        }),
        (i.prototype.getAgentVelocity = function (t) {
            return this.agents[t].velocity;
        }),
        (i.prototype.getAgentRadius = function (t) {
            return this.agents[t].radius;
        }),
        (i.prototype.getAgentOrcaLines = function (t) {
            return this.agents[t].orcaLines;
        }),
        (i.prototype.addAgent = function (t) {
            if (!this.defaultAgent) throw new Error("no default agent");
            var e = t || {},
                o = e.position,
                n = void 0 === o ? new l.default(0, 0) : o,
                i = e.neighborDist,
                r = void 0 === i ? this.defaultAgent.neighborDist : i,
                a = e.maxNeighbors,
                s = void 0 === a ? this.defaultAgent.maxNeighbors : a,
                t = e.timeHorizon,
                o = void 0 === t ? this.defaultAgent.timeHorizon : t,
                i = e.timeHorizonObst,
                a = void 0 === i ? this.defaultAgent.timeHorizonObst : i,
                t = e.radius,
                i = void 0 === t ? this.defaultAgent.radius : t,
                t = e.maxSpeed,
                e = void 0 === t ? this.defaultAgent.maxNeighbors : t,
                t = new c.default();
            return (
                (t.position = n),
                (t.maxNeighbors = s),
                (t.radius = i),
                (t.maxSpeed = e),
                (t.neighborDist = r),
                (t.timeHorizon = o),
                (t.timeHorizonObst = a),
                (t.velocity = this.defaultAgent.velocity),
                (t.simulator = this),
                (t.id = this.agents.length),
                t
            );
        }),
        (i.prototype.setAgent = function (t) {
            this.agents.includes(t) || ((t.id = this.agents.length), this.agents.push(t), this.goals.push(t.position));
        }),
        (i.prototype.clearAgent = function () {
            (this.agents.length = 0), (this.goals.length = 0);
        }),
        (i.prototype.setAgentDefaults = function (t, e, o, n, i, r) {
            this.defaultAgent || (this.defaultAgent = new c.default()),
                (this.defaultAgent.maxNeighbors = e),
                (this.defaultAgent.maxSpeed = r),
                (this.defaultAgent.neighborDist = t),
                (this.defaultAgent.radius = i),
                (this.defaultAgent.timeHorizon = o),
                (this.defaultAgent.timeHorizonObst = n),
                (this.defaultAgent.velocity = new l.default()),
                (this.defaultAgent.simulator = this);
        }),
        (i.prototype.run = function () {
            this.kdTree.buildAgentTree(), (this.index += 1), this.index, this.group;
            for (var t = 0; t < this.getNumAgents(); t++)
                this.agents[t].computeNeighbors(), this.agents[t].computeNewVelocity(), this.agents[t].update();
            this.time += this.timeStep;
        }),
        (i.prototype.reachedGoal = function () {
            for (var t, e = 0, o = this.getNumAgents(); e < o; ++e)
                if (((t = this.getAgentPosition(e)), a.default.absSq(this.goals[e].minus(t)) > a.default.RVO_EPSILON))
                    return !1;
            return !0;
        }),
        (i.prototype.addGoals = function (t) {
            this.goals = t;
        }),
        (i.prototype.getGoal = function (t) {
            return this.goals[t];
        }),
        (i.prototype.addObstacle = function (t) {
            if (t.length < 2) return -1;
            for (var e = this.obstacles.length, o = 0, n = t.length; o < n; ++o) {
                var i = new r.default();
                (i.point = t[o]),
                    0 != o && ((i.previous = this.obstacles[this.obstacles.length - 1]), (i.previous.next = i)),
                    o == t.length - 1 && ((i.next = this.obstacles[e]), (i.next.previous = i)),
                    (i.unitDir = a.default.normalize(t[o == t.length - 1 ? 0 : o + 1].minus(t[o]))),
                    2 == t.length
                        ? (i.isConvex = !0)
                        : (i.isConvex =
                              0 <=
                              a.default.leftOf(
                                  t[0 == o ? t.length - 1 : o - 1],
                                  t[o],
                                  t[o == t.length - 1 ? 0 : o + 1]
                              )),
                    (i.id = this.obstacles.length),
                    this.obstacles.push(i);
            }
            return e;
        }),
        (i.prototype.processObstacles = function () {
            this.kdTree.buildObstacleTree();
        }),
        (i.prototype.queryVisibility = function (t, e, o) {
            return this.kdTree.queryVisibility(t, e, o);
        }),
        (i.prototype.getObstacles = function () {
            return this.obstacles;
        }),
        i);
function i() {
    (this.agents = []),
        (this.obstacles = []),
        (this.goals = []),
        (this.kdTree = new n.default()),
        (this.timeStep = 0.1),
        (this.time = 0),
        (this.index = 0),
        (this.group = 2),
        ((this.kdTree.simulator = this).kdTree.MAXLEAF_SIZE = 1e3);
}
o.default = t;
