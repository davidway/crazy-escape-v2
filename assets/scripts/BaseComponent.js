var t = require;
var e = module;
var o = exports;
var n,
    i =
        (this && this.__extends) ||
        ((n = function (t, e) {
            return (n =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
        }),
        function (t, e) {
            function o() {
                this.constructor = t;
            }
            n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
        }),
    e =
        (this && this.__decorate) ||
        function (t, e, o, n) {
            var i,
                r = arguments.length,
                a = r < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else
                for (var s = t.length - 1; 0 <= s; s--)
                    (i = t[s]) && (a = (r < 3 ? i(a) : 3 < r ? i(e, o, a) : i(e, o)) || a);
            return 3 < r && a && Object.defineProperty(e, o, a), a;
        },
    r =
        (this && this.__awaiter) ||
        function (t, a, s, l) {
            return new (s = s || Promise)(function (o, e) {
                function n(t) {
                    try {
                        r(l.next(t));
                    } catch (t) {
                        e(t);
                    }
                }
                function i(t) {
                    try {
                        r(l.throw(t));
                    } catch (t) {
                        e(t);
                    }
                }
                function r(t) {
                    var e;
                    t.done
                        ? o(t.value)
                        : ((e = t.value) instanceof s
                              ? e
                              : new s(function (t) {
                                    t(e);
                                })
                          ).then(n, i);
                }
                r((l = l.apply(t, a || [])).next());
            });
        },
    a =
        (this && this.__generator) ||
        function (o, n) {
            var i,
                r,
                a,
                s = {
                    label: 0,
                    sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                    },
                    trys: [],
                    ops: []
                },
                t = {next: e(0), throw: e(1), return: e(2)};
            return (
                "function" == typeof Symbol &&
                    (t[Symbol.iterator] = function () {
                        return this;
                    }),
                t
            );
            function e(e) {
                return function (t) {
                    return (function (e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (
                                    ((i = 1),
                                    r &&
                                        (a =
                                            2 & e[0]
                                                ? r.return
                                                : e[0]
                                                ? r.throw || ((a = r.return) && a.call(r), 0)
                                                : r.next) &&
                                        !(a = a.call(r, e[1])).done)
                                )
                                    return a;
                                switch (((r = 0), (e = a ? [2 & e[0], a.value] : e)[0])) {
                                    case 0:
                                    case 1:
                                        a = e;
                                        break;
                                    case 4:
                                        return s.label++, {value: e[1], done: !1};
                                    case 5:
                                        s.label++, (r = e[1]), (e = [0]);
                                        continue;
                                    case 7:
                                        (e = s.ops.pop()), s.trys.pop();
                                        continue;
                                    default:
                                        if (
                                            !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                                            (6 === e[0] || 2 === e[0])
                                        ) {
                                            s = 0;
                                            continue;
                                        }
                                        if (3 === e[0] && (!a || (e[1] > a[0] && e[1] < a[3]))) {
                                            s.label = e[1];
                                            break;
                                        }
                                        if (6 === e[0] && s.label < a[1]) {
                                            (s.label = a[1]), (a = e);
                                            break;
                                        }
                                        if (a && s.label < a[2]) {
                                            (s.label = a[2]), s.ops.push(e);
                                            break;
                                        }
                                        a[2] && s.ops.pop(), s.trys.pop();
                                        continue;
                                }
                                e = n.call(o, s);
                            } catch (t) {
                                (e = [6, t]), (r = 0);
                            } finally {
                                i = a = 0;
                            }
                        if (5 & e[0]) throw e[1];
                        return {value: e[0] ? e[1] : void 0, done: !0};
                    })([e, t]);
                };
            }
        };
Object.defineProperty(o, "__esModule", {value: !0});
var s,
    l = t("ResMgr"),
    t = cc._decorator.ccclass,
    t =
        ((s = cc.Component),
        i(c, s),
        (c.prototype.setSource = function (e, o) {
            return (
                void 0 === o && (o = ""),
                r(this, void 0, void 0, function () {
                    return a(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return e == this._source && o == this._bundle
                                    ? [3, 2]
                                    : ((this._source = e),
                                      (this._bundle = o),
                                      (this.needUpdate = !0),
                                      (this.node.opacity = 0),
                                      [4, this.updateRes()]);
                            case 1:
                                t.sent(), (t.label = 2);
                            case 2:
                                return [2];
                        }
                    });
                })
            );
        }),
        (c.prototype.onEnable = function () {
            (this.isEnable = !0), this.updateRes();
        }),
        (c.prototype.onDisable = function () {
            var t;
            (this.isEnable = !1),
                (this.needUpdate = !0),
                this.clearAsset(),
                null === (t = this.assetItem) || void 0 === t || t.decRef(),
                (this.assetItem = null);
        }),
        (c.prototype.updateRes = function () {
            var o;
            return r(this, void 0, void 0, function () {
                var e;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.isEnable && this.needUpdate && this._source ? [4, this.loadRes()] : [3, 2];
                        case 1:
                            (e = t.sent()) &&
                                (e.addRef(),
                                e.getPath() == this._source && e.getBundle() == this._bundle
                                    ? (null === (o = this.assetItem) || void 0 === o || o.decRef(),
                                      (this.assetItem = e),
                                      this.setAsset(e.getAsset()),
                                      (this.node.opacity = 255))
                                    : e.decRef()),
                                (t.label = 2);
                        case 2:
                            return [2];
                    }
                });
            });
        }),
        (c.prototype.onDestroy = function () {
            var t;
            null === (t = this.defAsset) || void 0 === t || t.decRef(),
                null === (t = this.assetItem) || void 0 === t || t.decRef(),
                (this.defAsset = null),
                (this.assetItem = null);
        }),
        (c.prototype.loadRes = function () {
            return r(this, void 0, Promise, function () {
                var t = this;
                return a(this, function () {
                    return [
                        2,
                        new Promise(function (o) {
                            return r(t, void 0, void 0, function () {
                                var e;
                                return a(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return [
                                                4,
                                                l.default.inst.loadAsset({
                                                    url: this._source,
                                                    type: this.assetType,
                                                    bundle: this._bundle
                                                })
                                            ];
                                        case 1:
                                            return (e = t.sent()), o(e), [2];
                                    }
                                });
                            });
                        })
                    ];
                });
            });
        }),
        e([t], c));
function c() {
    var t = (null !== s && s.apply(this, arguments)) || this;
    return (
        (t._source = ""),
        (t._bundle = ""),
        (t.isEnable = !1),
        (t.assetItem = null),
        (t.defAsset = null),
        (t.needUpdate = !1),
        (t.assetType = null),
        (t.autoClear = !1),
        t
    );
}
o.default = t;
