var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.loadRemote = function (o, n) {
    var i = this;
    o &&
        n &&
        ((this._recordes[n.uuid] = o),
        cc.assetManager.loadRemote(o, {ext: ".png"}, function (t, e) {
            o == i._recordes[n.uuid] &&
                n.isValid &&
                n.node.activeInHierarchy &&
                (n.spriteFrame = new cc.SpriteFrame(e)),
                (i._assets[o] = [e, n.spriteFrame]);
        }));
}),
    (n.releaseRemote = function (t) {
        var e = this;
        t = t || [];
        var o,
            n = [];
        for (o in this._assets)
            -1 == t.indexOf(o) &&
                (n.push(o),
                this._assets[o].forEach(function (t) {
                    t && t.decRef();
                }));
        n.forEach(function (t) {
            delete e._assets[t];
        });
    }),
    (n._recordes = {}),
    (n._assets = {}),
    (e = n);
function n() {}
o.default = e;
