var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.MoveSys = void 0);
var i = t("ArrayUtil"),
    u = t("GoddessController"),
    p = t("HeroController"),
    h = t("GameEnums"),
    d = t("GameMgr"),
    n = t("GridMgr"),
    t =
        ((r.prototype.clear = function () {
            (this.nearList.length = 0), this.moveMap.clear();
        }),
        (r.prototype.addComp = function (t) {
            var e;
            t &&
                t.monster.type != h.MonsterType.FENCE &&
                ((null === (e = t.monster) || void 0 === e ? void 0 : e.type) == h.MonsterType.REWARD_MOB
                    ? (console.log("神龙"), this.rewardList.push(t))
                    : this.moveMap.set(t.getID(), t));
        }),
        (r.prototype.getMoveNum = function () {
            return this.moveMap.size;
        }),
        (r.prototype.delComp = function (t) {
            t && (n.GridMgr.delComp(t), this.moveMap.delete(t.getID()), i.default.splice(this.rewardList, t));
        }),
        (r.prototype.getInSightList = function (t) {
            var o = [],
                n = null;
            return (
                t
                    ? (n = t)
                    : ((n = cc.rect(0, 0, d.default.inst.stageWidth, d.default.inst.stageHeight)),
                      (t = d.default.inst.getMapCameraPos()),
                      (n.x = t.x - d.default.inst.halfWidth),
                      (n.y = t.y - d.default.inst.halfHeight)),
                this.moveMap.forEach(function (t) {
                    var e = t.getCenterPos();
                    n.contains(e) && o.push(t);
                }),
                0 < o.length && i.default.shuffle(o),
                o
            );
        }),
        (r.prototype.onUpdate = function (t) {
            if (this.sortCount <= 0) {
                this.sortCount = 0.2 / d.default.inst.timeScale;
                var o = p.HeroController.getHeroCenter(),
                    n = d.default.inst.checkMapType([h.Map_Group.DEATH]) ? u.GoddessController.getCenter() : cc.v3(),
                    e = Array.from(this.moveMap.values());
                e.forEach(function (t) {
                    var e = t.getCenterPos();
                    (t.distance = cc.Vec3.distance(e, o)),
                        d.default.inst.checkMapType([h.Map_Group.DEATH]) && (t.targetDis = cc.Vec3.distance(e, n));
                }),
                    e.sort(function (t, e) {
                        if (!d.default.inst.checkMapType([h.Map_Group.DEATH, h.Map_Group.ENDLESS])) {
                            if (t.isBoss) return -1;
                            if (e.isBoss) return 1;
                        }
                        return t.distance - e.distance;
                    }),
                    (this.nearList = e);
                for (var i = 0, r = this.rewardList; i < r.length; i++) {
                    var a = (l = r[i]).getCenterPos();
                    l.distance = cc.Vec3.distance(a, o);
                }
            }
            for (var s = this.rewardList.length - 1; 0 <= s; s--) (l = this.rewardList[s]) && l.onUpdate(t);
            for (var l, s = 0, c = this.nearList.length; s < c; s++) (l = this.nearList[s]) && l.onUpdate(t);
            this.sortCount -= t;
        }),
        r);
function r() {
    (this.moveMap = new Map()), (this.nearList = []), (this.rewardList = []), (this.ratio = 1), (this.sortCount = 0.2);
}
o.MoveSys = new t();
