var t = require;
var e = module;
var o = exports;
var s =
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
    l =
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
var a = t("EventTypes"),
    c = t("App"),
    u = t("BasePanel"),
    p = t("LayerMgr"),
    r = t("ResMgr"),
    t =
        ((n.prototype.register = function (t) {
            var e = t.id,
                o = t.url,
                t = t.bundle,
                t = void 0 === t ? "" : t;
            !this.viewList.has(e) && o
                ? this.viewList.set(e, {url: o, bundle: t})
                : console.warn(this.viewList.has(e) ? "ui已注册:" + e : " 注册url为空:" + e);
        }),
        (n.prototype.openUI = function (i, r, a) {
            var t = this;
            return (
                void 0 === r && (r = p.LayerEnum.VIEW_LAYER),
                new Promise(function (n) {
                    return s(t, void 0, void 0, function () {
                        var e, o;
                        return l(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return (
                                        (e = i),
                                        console.warn("展示UI" + e),
                                        this.loadingUI.has(e) || this.uiList.has(e) || !this.viewList.has(e)
                                            ? (console.warn(
                                                  this.loadingUI.has(e)
                                                      ? "ui加载中:" + e
                                                      : this.uiList.has(e)
                                                      ? "ui已在显示列表:" + e
                                                      : "ui尚未注册:" + e
                                              ),
                                              [2])
                                            : (this.isLock(!0), this.loadingUI.set(e, 1), [4, this.getNode(e)])
                                    );
                                case 1:
                                    return (o = t.sent()) ? [4, this.showUI(e, o, r, a)] : [3, 3];
                                case 2:
                                    t.sent(), (t.label = 3);
                                case 3:
                                    return this.isLock(!1), n(), [2];
                            }
                        });
                    });
                })
            );
        }),
        (n.prototype.closeUI = function (o) {
            return s(this, void 0, void 0, function () {
                var t, e;
                return l(this, function () {
                    return (
                        (t = this.uiList.get(o)),
                        this.uiList.delete(o),
                        t &&
                            ((e = t.getComponent(u.default)) && e.hide(),
                            this.viewList.get(o) && r.default.inst.putNodeToPool(t),
                            c.app.event.emit(a.EventType.On_View_Hide, o)),
                        [2]
                    );
                });
            });
        }),
        (n.prototype.getNode = function (i) {
            return s(this, void 0, void 0, function () {
                var e, o, n;
                return l(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (n = this.viewList.get(i)),
                                (e = null),
                                n
                                    ? ((o = n.url),
                                      (n = n.bundle),
                                      o ? [4, r.default.inst.getNodeFromPool(o, n)] : [3, 2])
                                    : [3, 2]
                            );
                        case 1:
                            (e = t.sent()), (t.label = 2);
                        case 2:
                            return [2, e];
                    }
                });
            });
        }),
        (n.prototype.hasUI = function (t) {
            return this.uiList.has(t) || this.loadingUI.has(t);
        }),
        (n.prototype.getUI = function (t) {
            return this.uiList.get(t);
        }),
        (n.prototype.getLastUI = function () {
            for (
                var t = [p.LayerEnum.TOP_LAYER, p.LayerEnum.VIEW_LAYER, p.LayerEnum.GAME_LAYER],
                    e = null,
                    o = 0,
                    n = t.length;
                o < n && (!(e = this._getLastUI(t[o])) || "GetGoldView" == e.name);
                o++
            );
            return e;
        }),
        (n.prototype._getLastUI = function (t) {
            t = p.default.inst.getLayerNode(t);
            if (0 < t.childrenCount) return t.children[t.childrenCount - 1];
        }),
        (n.prototype.showUI = function (o, n, i, r) {
            return (
                void 0 === r && (r = null),
                s(this, void 0, void 0, function () {
                    var e;
                    return l(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return (e = n.getComponent(u.default))
                                    ? (e.show(r),
                                      p.default.inst.addUI(i, n),
                                      this.uiList.set(o, n),
                                      this.loadingUI.delete(o),
                                      [4, e.playIn()])
                                    : [3, 2];
                            case 1:
                                t.sent(), c.app.event.emit(a.EventType.On_View_Show, o), (t.label = 2);
                            case 2:
                                return [2];
                        }
                    });
                })
            );
        }),
        (n.prototype.isLock = function (t, e) {
            void 0 === e && (e = 7),
                (p.default.inst.getLockNode().active = t)
                    ? (null === (t = c.app.timer) || void 0 === t || t.off(this, this.unLock),
                      null === (t = c.app.timer) || void 0 === t || t.once(this, this.unLock, e))
                    : this.unLock();
        }),
        (n.prototype.unLock = function () {
            var t;
            null === (t = c.app.timer) || void 0 === t || t.off(this, this.unLock),
                (p.default.inst.getLockNode().active = !1);
        }),
        n);
function n() {
    (this.viewList = new Map()), (this.uiList = new Map()), (this.loadingUI = new Map());
}
o.default = t;
