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
        });
Object.defineProperty(o, "__esModule", {value: !0});
var r,
    l = t("App"),
    e = t("Singleton"),
    a = t("MainPageType"),
    i =
        ((r = e.Singleton()),
        i(s, r),
        (s.prototype.opacity = function (t, e) {
            cc.tween(t)
                .repeatForever(cc.tween(t).to(e, {opacity: 0}).to(e, {opacity: 255}))
                .start();
        }),
        (s.prototype.prohibit = function () {
            var t = this;
            (this._prohibit = !0),
                setTimeout(function () {
                    t._prohibit = !1;
                }, 200);
        }),
        (s.prototype.wobble = function (t, e, o, n, i) {
            void 0 === i && (i = 2);
            function r() {
                return cc
                    .tween(t)
                    .to(n, {angle: e})
                    .to(n, {angle: o})
                    .call(function () {
                        (++a < i
                            ? r()
                            : cc
                                  .tween(t)
                                  .to(n, {angle: 0})
                                  .call(function () {
                                      a = 0;
                                  })
                        ).start();
                    });
            }
            var a = 0;
            return r();
        }),
        (s.prototype.Breathing = function (t, e, o, n) {
            return cc
                .tween(t)
                .repeatForever(cc.tween(t).to(n, {scale: e}).to(n, {scale: o}))
                .start();
        }),
        (s.prototype.setAnNodeSpeed = function (t) {
            this.anNodeSpeed = t;
        }),
        (s.prototype.showBlock = function (e, o, t, n, i) {
            var r = this;
            void 0 === i && (i = 0), (this.anNodeSpeed = t = void 0 === t ? 0.1 : t);
            function a(t) {
                (t.active = !0),
                    cc
                        .tween(t)
                        .to(r.anNodeSpeed, {scale: o, opacity: 255})
                        .call(function () {
                            l.app.sound.playEffect("数据出现"),
                                null != e[++s]
                                    ? a(e[s])
                                    : ((r.anNodeSpeed = 0.2),
                                      setTimeout(function () {
                                          n && n();
                                      }, 1e3 * i));
                        })
                        .start();
            }
            var s = 0;
            e[s] ? a(e[s]) : n && n();
        }),
        (s.prototype.finishEject = function (t, e, o) {
            void 0 === e && (e = 0.2),
                cc
                    .tween(t)
                    .to(e, {scaleX: 2, scaleY: 0.02}, cc.easeOut(3))
                    .to(e, {scaleX: 1, scaleY: 1.3}, cc.easeIn(3))
                    .to(e, {scaleX: 1, scaleY: 1})
                    .call(function () {
                        o && o();
                    })
                    .start();
        }),
        (s.prototype.eject = function (t, e, o) {
            var n = t.scale,
                i = 1.1 * n;
            (t.scale = 0),
                (e.opacity = 0),
                cc.tween(e).to(0.2, {opacity: 190}).start(),
                cc
                    .tween(t)
                    .to(0.1, {scale: i})
                    .to(0.1, {scale: n})
                    .call(function () {
                        o();
                    })
                    .start();
        }),
        (s.prototype.rotate = function (t, e) {
            void 0 === e && (e = 2),
                cc
                    .tween(t)
                    .repeatForever(
                        cc
                            .tween(t)
                            .to(e, {angle: 360})
                            .call(function () {
                                t.angle = 0;
                            })
                    )
                    .start();
        }),
        (s.prototype.onDestroy = function (t, e) {
            t.off(cc.Node.EventType.TOUCH_START, this.ClickDown, e),
                t.off(cc.Node.EventType.TOUCH_END, this.ClickUp, e);
        }),
        (s.prototype.on = function (t, e) {
            t.on(cc.Node.EventType.TOUCH_START, this.ClickDown, e), t.on(cc.Node.EventType.TOUCH_END, this.ClickUp, e);
        }),
        (s.prototype.ClickDown = function (t) {
            this.clickPos = t.getLocation();
        }),
        (s.prototype.ClickUp = function (t) {
            var e, o, n, i;
            s.inst._prohibit ||
                null == this.clickPos ||
                ((e = Math.abs(t.getLocation().x - this.clickPos.x)),
                (o = Math.abs(t.getLocation().y - this.clickPos.y)),
                this.clickPos.x < t.getLocation().x
                    ? 150 < e &&
                      o < 150 &&
                      (console.log("从左往右滑动", e, t.getLocation().x, t.getLocation().y, s.inst.nowPage),
                      (n = function (t) {
                          null == s.inst.openList[t - 1]
                              ? n(t - 1 < 1 ? s.inst.openList.length : t - 1)
                              : (0, s.inst.openList[t - 1])(1);
                      })(s.inst.nowPage))
                    : this.clickPos.x > t.getLocation().x &&
                      150 < e &&
                      o < 150 &&
                      (console.log("从右往左滑动", e, t.getLocation().x, t.getLocation().y, s.inst.nowPage),
                      (i = function (t) {
                          console.log(t, s.inst.openList.length),
                              null == s.inst.openList[t + 1]
                                  ? t + 1 > a.MainPageType.Evolve
                                      ? i(0)
                                      : i(t + 1)
                                  : (0, s.inst.openList[t + 1])(-1);
                      })(s.inst.nowPage)));
        }),
        s);
function s() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (t.nowPage = 1), (t.openList = null), (t._prohibit = !1), (t.anNodeSpeed = 0.2), t;
}
o.default = i;
