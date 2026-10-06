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
    d =
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
var a,
    f = t("ResMgr"),
    e = t("Singleton"),
    s = t("ArrayUtil"),
    l = t("MathUtil"),
    c = t("ResUtils"),
    y = t("GameEnums"),
    u = t("MapFence"),
    p = t("Plant"),
    g = t("GameMgr"),
    h = t("GameController"),
    i =
        ((a = e.Singleton()),
        i(m, a),
        (m.prototype.setMapSp = function (t) {
            this._mapSp = t;
        }),
        (m.prototype.setPlantLayer = function (t, e) {
            (this._plantLayer = t), (this._borderLayer = e);
        }),
        (m.prototype.initMap = function () {
            return r(this, void 0, void 0, function () {
                var e, o;
                return d(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = g.default.inst.chapterVo),
                                (this.chapterVo = e),
                                [4, f.default.inst.getAsset(e.map_url, cc.SpriteFrame, this.mapBundle)]
                            );
                        case 1:
                            return (
                                (o = t.sent()),
                                (this._mapSp.spriteFrame = o),
                                (this.spfWidth = o.getTexture().width),
                                (this.spfHeight = o.getTexture().height),
                                console.log(
                                    "[MapController]-->[line:44]:",
                                    this.chapterVo,
                                    this.spfWidth,
                                    this.spfHeight
                                ),
                                (this.mapPos.x = this.mapPos.y = 0),
                                (this._mapSp.node.position = this.mapPos),
                                (this.checkSize = cc.winSize.height + 200),
                                (this.map_type = e.map_type),
                                (this.grids.length = 0),
                                e.map_type == y.MapType.BIG_MAP
                                    ? (this.initGrids(),
                                      (this._mapSp.type = cc.Sprite.Type.TILED),
                                      (this.mapRect.left = Number.MIN_SAFE_INTEGER),
                                      (this.mapRect.right = Number.MAX_SAFE_INTEGER),
                                      (this.mapRect.bottom = Number.MIN_SAFE_INTEGER),
                                      (this.mapRect.top = Number.MAX_SAFE_INTEGER),
                                      this.resizeMap())
                                    : e.map_type == y.MapType.VERTICAL_MAP
                                    ? ((this._mapSp.type = cc.Sprite.Type.TILED),
                                      (o = e.map_size.width >> 1),
                                      (this.mapRect.left = -o),
                                      (this.mapRect.right = o),
                                      (this.mapRect.bottom = Number.MIN_SAFE_INTEGER),
                                      (this.mapRect.top = Number.MAX_SAFE_INTEGER),
                                      (h.GameController.inst.moveLimit = {
                                          type: y.FenceType.UPANDDOWN,
                                          value: 0,
                                          pos: cc.v3(),
                                          rect: {
                                              left: this.mapRect.left + 10,
                                              right: this.mapRect.right - 10,
                                              bottom: -Number.MAX_SAFE_INTEGER,
                                              top: Number.MAX_SAFE_INTEGER
                                          }
                                      }),
                                      this.resizeMap())
                                    : e.map_type == y.MapType.HORIZONTAL_MAP ||
                                      (e.map_type == y.MapType.LIMIT_MAP &&
                                          (this.initGrids(),
                                          (this._mapSp.type = cc.Sprite.Type.TILED),
                                          (this.mapRect.left = -e.map_size.width >> 1),
                                          (this.mapRect.right = e.map_size.width >> 1),
                                          (this.mapRect.bottom = -e.map_size.heiht >> 1),
                                          (this.mapRect.top = e.map_size.heiht >> 1),
                                          this.resizeMap(),
                                          (h.GameController.inst.moveLimit = {
                                              type: y.FenceType.RECT,
                                              value: 0,
                                              pos: cc.v3(),
                                              rect: {
                                                  left: this.mapRect.left + 30,
                                                  right: this.mapRect.right - 30,
                                                  bottom: this.mapRect.bottom + 30,
                                                  top: this.mapRect.top - 30
                                              }
                                          }))),
                                this.initPlant(),
                                this.initFence(),
                                [2]
                            );
                    }
                });
            });
        }),
        (m.prototype.clearMap = function () {
            this._mapSp && this._mapSp.spriteFrame && (this._mapSp.spriteFrame = null);
            for (var t = 0, e = this.plantList; t < e.length; t++) {
                var o = e[t];
                f.default.inst.putNodeToPool(o);
            }
            for (var n = (this.plantList.length = 0), i = this.fenceList; n < i.length; n++)
                (o = i[n]), f.default.inst.putNodeToPool(o);
            this.fenceList.length = 0;
        }),
        (m.prototype.initGrids = function () {
            for (
                var t = -this.chapterVo.repeat_radius,
                    e = -this.chapterVo.repeat_radius,
                    o = Math.floor((2 * this.chapterVo.repeat_radius) / 500),
                    n = 0;
                n < o;
                n++
            )
                for (var i = 250 + t + 500 * n, r = 0; r < o; r++) this.grids.push(cc.v3(i, 250 + e + 500 * r));
            s.default.shuffle(this.grids);
        }),
        (m.prototype.onUpdate = function (t) {
            this.map_type != y.MapType.LIMIT_MAP &&
                ((this.check_delay -= t),
                this.check_delay <= 0 && ((this.check_delay = 2), 0 < this.plantList.length && this.checkPlant()),
                this.updateBgPos());
        }),
        (m.prototype.updateBgPos = function () {
            var t = g.default.inst.getMapCameraPos(),
                e = !1;
            t.x > this.mapPos.x && t.x - this.mapPos.x > this.halfWidth
                ? ((this.mapPos.x += this.halfWidth), (e = !0))
                : t.x < this.mapPos.x &&
                  this.mapPos.x - t.x > this.halfWidth &&
                  ((this.mapPos.x -= this.halfWidth), (e = !0)),
                t.y > this.mapPos.y && t.y - this.mapPos.y > this.halfHeight
                    ? ((this.mapPos.y += this.halfHeight), (e = !0))
                    : t.y < this.mapPos.y &&
                      this.mapPos.y - t.y > this.halfHeight &&
                      ((this.mapPos.y -= this.halfHeight), (e = !0)),
                e && (this._mapSp.node.position = this.mapPos);
        }),
        (m.prototype.checkPlant = function () {
            if (this.map_type == y.MapType.BIG_MAP)
                for (var t = cc.v3(), e = 0, o = this.plantList; e < o.length; e++) {
                    var n = o[e];
                    l.default.copy(t, n.position);
                    var i = h.GameController.inst.checkRepeat(t);
                    i.isNewPos && n.setPosition(i.pos);
                }
        }),
        (m.prototype.initPlant = function () {
            return r(this, void 0, void 0, function () {
                var e, o, n, i, r;
                return d(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.chapterVo.plant_url && this.chapterVo.plants
                                ? ((this.index = 0),
                                  [
                                      4,
                                      f.default.inst.getAsset(this.chapterVo.plant_url, cc.SpriteAtlas, this.mapBundle)
                                  ])
                                : [2];
                        case 1:
                            (e = t.sent()), (o = 0), (n = this.chapterVo.plants), (t.label = 2);
                        case 2:
                            if (!(o < n.length)) return [3, 7];
                            (i = n[o]), (r = 0), (t.label = 3);
                        case 3:
                            return r < i.count ? [4, this.createPlant(e, i)] : [3, 6];
                        case 4:
                            t.sent(), (t.label = 5);
                        case 5:
                            return r++, [3, 3];
                        case 6:
                            return o++, [3, 2];
                        case 7:
                            return [2];
                    }
                });
            });
        }),
        (m.prototype.initFence = function () {
            return r(this, void 0, void 0, function () {
                var e, o, n, i, r, a, s, l, c, u, p, h;
                return d(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.map_type == y.MapType.LIMIT_MAP && this.chapterVo.fence_url
                                ? ((this.index = 0),
                                  [
                                      4,
                                      f.default.inst.getAsset(
                                          this.chapterVo.fence_url.url,
                                          cc.SpriteFrame,
                                          this.mapBundle
                                      )
                                  ])
                                : [2];
                        case 1:
                            (e = t.sent()),
                                (o = this.chapterVo.fence_url.width),
                                (h = this.chapterVo.fence_url.height),
                                (u = this.chapterVo.map_size.width >> 1),
                                (p = this.chapterVo.map_size.heiht >> 1),
                                (n = -u - (o >> 1)),
                                (i = u + (o >> 1)),
                                (r = -p - (h >> 1)),
                                (a = p + (h >> 1)),
                                (l = s = 0),
                                (c = g.default.inst.checkMapType([y.Map_Group.ENDLESS, y.Map_Group.DEATH]) ? 2 : 10),
                                (u = Math.ceil(this.chapterVo.map_size.heiht / h) + c),
                                (l = (this.chapterVo.map_size.heiht + h) / u),
                                console.log("[MapController]-->[line:233]:", this.chapterVo, u, l),
                                (p = null),
                                (h = 0),
                                (t.label = 2);
                        case 2:
                            return h <= u ? ((p = cc.v3(n, r + h * l)), [4, this.createFence(e, p)]) : [3, 6];
                        case 3:
                            return t.sent(), (p = cc.v3(i, r + h * l)), [4, this.createFence(e, p)];
                        case 4:
                            t.sent(), (t.label = 5);
                        case 5:
                            return h++, [3, 2];
                        case 6:
                            (u = Math.ceil(this.chapterVo.map_size.width / o) + c),
                                (s = (this.chapterVo.map_size.width + o) / u),
                                console.log("[MapController]-->[line:253]:", this.chapterVo, u, s),
                                (h = 0),
                                (t.label = 7);
                        case 7:
                            return h < u ? ((p = cc.v3(n + h * s, r)), [4, this.createFence(e, p)]) : [3, 11];
                        case 8:
                            return t.sent(), (p = cc.v3(n + h * s, a)), [4, this.createFence(e, p)];
                        case 9:
                            t.sent(), (t.label = 10);
                        case 10:
                            return h++, [3, 7];
                        case 11:
                            return [2];
                    }
                });
            });
        }),
        (m.prototype.createFence = function (o, n) {
            return r(this, void 0, void 0, function () {
                var e;
                return d(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [
                                4,
                                f.default.inst.getNodeFromPool(
                                    c.ResUtils.Prefabs.MapFence.url,
                                    c.ResUtils.Prefabs.MapFence.bundle
                                )
                            ];
                        case 1:
                            return (
                                (e = t.sent()),
                                this.fenceList.push(e),
                                (e.position = n),
                                e.getComponent(u.default).setData(o),
                                (e.parent = this._borderLayer),
                                (e.zIndex = g.default.inst.getZindex(n)),
                                [2]
                            );
                    }
                });
            });
        }),
        (m.prototype.createPlant = function (a, s) {
            return r(this, void 0, void 0, function () {
                var e, o, n, i, r;
                return d(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return !a || this.index >= this.grids.length
                                ? [2]
                                : [
                                      4,
                                      f.default.inst.getNodeFromPool(
                                          c.ResUtils.Prefabs.Plant.url,
                                          c.ResUtils.Prefabs.Plant.bundle
                                      )
                                  ];
                        case 1:
                            return (
                                (e = t.sent()),
                                this.plantList.push(e),
                                (o = e.getComponent(p.default)),
                                (n = a.getSpriteFrame(s.name)) &&
                                    (o.setData(n, s),
                                    150 < (n = Math.max(n.getTexture().width, n.getTexture().height))
                                        ? ((i = (480 - n) >> 1),
                                          (r = cc.v3(l.default.randomRangeInt(-i, i), l.default.randomRangeInt(-i, i))),
                                          (e.position = this.grids[this.index].add(r)),
                                          (this.index += 1))
                                        : ((i = l.default.randomRangeInt(
                                              -this.chapterVo.repeat_radius,
                                              this.chapterVo.repeat_radius
                                          )),
                                          (r = l.default.randomRangeInt(
                                              -this.chapterVo.repeat_radius,
                                              this.chapterVo.repeat_radius
                                          )),
                                          (e.position = cc.v3(i, r))),
                                    (e.parent = this._plantLayer)),
                                [2]
                            );
                    }
                });
            });
        }),
        (m.prototype.resizeMap = function () {
            var t = Math.max(
                Math.ceil(g.default.inst.stageHeight / this.spfHeight),
                Math.ceil(g.default.inst.stageWidth / this.spfWidth)
            );
            t % 2 == 1 && (t += 1);
            var e = t * this.spfWidth,
                o = t * this.spfHeight;
            (this.halfWidth = e >> 1), (this.halfHeight = o >> 1);
            var n = 0,
                i = 3 * o;
            this.map_type == y.MapType.BIG_MAP || this.map_type == y.MapType.LIMIT_MAP
                ? (n = 3 * e)
                : this.map_type == y.MapType.VERTICAL_MAP && (n = this.chapterVo.map_size.width),
                (this._mapSp.node.width = n),
                (this._mapSp.node.height = i),
                console.warn(
                    "[MapController]-->[line:121]:地图尺寸：",
                    e,
                    o,
                    g.default.inst.stageWidth,
                    g.default.inst.stageHeight,
                    this.spfWidth,
                    this.spfHeight,
                    t,
                    this._mapSp.node.width,
                    this._mapSp.node.height
                );
        }),
        m);
function m() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.mapRect = {left: 0, right: 0, bottom: 0, top: 0}),
        (t.check_delay = 2),
        (t.map_type = y.MapType.NONE),
        (t.checkSize = 0),
        (t.chapterVo = null),
        (t.plantList = []),
        (t.fenceList = []),
        (t.grids = []),
        (t.spfWidth = 0),
        (t.spfHeight = 0),
        (t.halfWidth = 0),
        (t.halfHeight = 0),
        (t.mapPos = cc.v3()),
        (t.mapBundle = "maps"),
        (t.index = 0),
        t
    );
}
o.default = i;
