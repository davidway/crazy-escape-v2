var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}),
    (o.Singleton = void 0),
    (o.Singleton = function () {
        return (
            Object.defineProperty(t, "inst", {
                get: function () {
                    return (t._inst = null == t._inst ? new this() : t._inst);
                },
                enumerable: !1,
                configurable: !0
            }),
            (t._inst = null),
            t
        );
        function t() {}
    });
