var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.app = void 0);
var n = t("LocalData"),
    i = t("PlatformFactory"),
    r = t("TrackFactory"),
    a = t("EventDispatcher"),
    s = t("SoundMgr"),
    l = t("StorageMgr"),
    c = t("UIMgr"),
    u = t("HttpNet"),
    p = t("Timer"),
    t =
        (Object.defineProperty(h.prototype, "storage", {
            get: function () {
                return this._storage;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(h.prototype, "platform", {
            get: function () {
                return this._platform;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(h.prototype, "sound", {
            get: function () {
                return this._sound;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(h.prototype, "local", {
            get: function () {
                return this._local;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(h.prototype, "gui", {
            get: function () {
                return this._gui;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(h.prototype, "timer", {
            get: function () {
                return this._timer;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(h.prototype, "http", {
            get: function () {
                return this._http;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(h.prototype, "event", {
            get: function () {
                return this._event;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(h.prototype, "track", {
            get: function () {
                return this._track;
            },
            enumerable: !1,
            configurable: !0
        }),
        (h.prototype.initialize = function () {
            (this._storage = new l.default()),
                (this._sound = new s.default()),
                (this._gui = new c.default()),
                (this._timer = new p.default()),
                (this._platform = i.default.create()),
                (this._local = new n.default()),
                (this._http = new u.default()),
                (this._event = new a.default()),
                (this._track = r.default.create()),
                cc.sys.isBrowser && this._local.initData(),
                this._sound.init();
        }),
        h);
function h() {
    (this._platform = null),
        (this._sound = null),
        (this._local = null),
        (this._gui = null),
        (this._timer = null),
        (this._http = null),
        (this._event = null),
        (this._storage = null),
        (this._track = null);
}
o.app = new t();
