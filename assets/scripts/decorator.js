var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}),
    (o.gameEvent = o.autoBind = o.initOnLoad = o.eventsOnEnable = void 0),
    (o.eventsOnEnable = function (e) {
        return (
            void 0 === e && (e = !0),
            function (t) {
                !(function (t, e, o, n) {
                    void 0 === n && (n = !0);
                    var i = t.prototype[e],
                        r = t.prototype[o];
                    (t.prototype[e] = function () {
                        this.onBtnEvents && this.onBtnEvents(),
                            this.onGameEvents && this.onGameEvents(),
                            this.updateView && this.updateView(),
                            i && i.call(this);
                    }),
                        (t.prototype[o] = function () {
                            this.offBtnEvents && this.offBtnEvents(),
                                this.offGameEvents && this.offGameEvents(),
                                r && r.call(this);
                        });
                })(t, "onEnable", "onDisable", e);
            }
        );
    }),
    (o.initOnLoad = function () {
        return function (t) {
            var e = t.prototype.onLoad;
            t.prototype.onLoad = function () {
                this.doInit(), e && e.call(this), this.initView && this.initView();
            };
        };
    }),
    (o.autoBind = function (o, n) {
        return function (t, e) {
            setTimeout(function () {
                t.__classname__,
                    (t.constructor.prototype.nodeMap || (t.constructor.prototype.nodeMap = new Map())).set(n, {
                        type: o,
                        path: n || e,
                        name: e
                    });
            }, 1);
        };
    }),
    (o.gameEvent = function (o, n) {
        return (
            void 0 === n && (n = !1),
            function (t, e) {
                setTimeout(function () {
                    t.__classname__,
                        (t.constructor.prototype.eventMap || (t.constructor.prototype.eventMap = new Map())).set(o, {
                            event: o,
                            once: n,
                            func: e
                        });
                }, 1);
            }
        );
    });
