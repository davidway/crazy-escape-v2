var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.awaitTo = function (t) {
    if (t)
        return t
            .then(function (t) {
                return [null, t];
            })
            .catch(function (t) {
                return [t, null];
            });
    Promise.resolve();
}),
    (n.execute = function (o) {
        return new Promise(function (t, e) {
            o && 0 != o.length
                ? Promise.all(o)
                      .then(function () {
                          t();
                      })
                      .catch(function () {
                          e();
                      })
                : t();
        });
    }),
    (e = n);
function n() {}
o.default = e;
