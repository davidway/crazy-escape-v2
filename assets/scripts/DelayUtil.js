var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.delay = function (e, o) {
    return new Promise(function (t) {
        cc.tween(o)
            .delay(e)
            .call(function () {
                t();
            })
            .start();
    });
}),
    (e = n);
function n() {}
o.default = e;
