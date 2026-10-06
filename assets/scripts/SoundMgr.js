var t = require;
var e = module;
var o = exports;
var r =
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
(n.prototype.init = function () {}),
    Object.defineProperty(n.prototype, "musicOn", {
        get: function () {
            return this._musicOn;
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(n.prototype, "soundOn", {
        get: function () {
            return this._effectOn;
        },
        enumerable: !1,
        configurable: !0
    }),
    (n.prototype.setVoice = function (t, e) {
        (this._musicOn = t), (this._effectOn = e), this._updateVoice();
    }),
    (n.prototype._updateVoice = function () {
        this._musicOn ? this.resumeMusic() : this.stopMusic();
    }),
    (n.prototype.getClip = function (n) {
        var i = this;
        return new Promise(function (o) {
            i.clipMap.has(n)
                ? o(i.clipMap.get(n))
                : cc.resources.load("audios/" + n, cc.AudioClip, function (t, e) {
                      return t
                          ? (console.error("加载音频:" + n + "失败" + t), void o(null))
                          : (i.clipMap.set(n, e), void o(e));
                  });
        });
    }),
    (n.prototype.playMusic = function (o, n) {
        return (
            void 0 === o && (o = ""),
            void 0 === n && (n = !0),
            r(this, void 0, void 0, function () {
                var e;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (this._lastBgm = o) && this._bgmName != o && this._musicOn
                                ? (console.log("播放背景音乐:", o), [4, this.getClip(o)])
                                : [2];
                        case 1:
                            return (e = t.sent()) && ((this._bgmName = o), cc.audioEngine.playMusic(e, n)), [2];
                    }
                });
            })
        );
    }),
    (n.prototype.resumeMusic = function () {
        var t;
        this._musicOn && this._lastBgm && ((t = this._lastBgm), (this._bgmName = ""), this.playMusic(t));
    }),
    (n.prototype.pauseMusic = function () {
        cc.audioEngine.isMusicPlaying && cc.audioEngine.pauseMusic();
    }),
    (n.prototype.stopMusic = function () {
        cc.audioEngine.isMusicPlaying && cc.audioEngine.stopMusic();
    }),
    (n.prototype.playEffect = function (i) {
        return r(this, void 0, void 0, function () {
            var t = this;
            return a(this, function () {
                return [
                    2,
                    new Promise(function (n) {
                        return r(t, void 0, void 0, function () {
                            var e, o;
                            return a(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return this._effectOn ? [4, this.getClip(i)] : (n(!1), [2]);
                                    case 1:
                                        return (
                                            (e = t.sent())
                                                ? ((o = cc.audioEngine.playEffect(e, !1)),
                                                  cc.audioEngine.setFinishCallback(o, function () {
                                                      cc.audioEngine.setFinishCallback(o, null), n(!0);
                                                  }))
                                                : n(!1),
                                            [2]
                                        );
                                }
                            });
                        });
                    })
                ];
            });
        });
    }),
    (n.prototype.stopAllEffects = function () {
        cc.audioEngine.stopAllEffects();
    }),
    (e = n);
function n() {
    (this.clipMap = new Map()), (this._musicOn = !0), (this._effectOn = !0), (this._bgmName = ""), (this._lastBgm = "");
}
o.default = e;
