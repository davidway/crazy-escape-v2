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
        };
Object.defineProperty(o, "__esModule", {value: !0});
var a,
    s,
    y,
    l = cc._decorator,
    c = l.ccclass,
    u = l.property,
    p = l.disallowMultiple,
    h = l.menu,
    e = l.executionOrder,
    l = l.requireComponent,
    g = t("ListItem");
((t = a = a || {})[(t.NODE = 1)] = "NODE"),
    (t[(t.PREFAB = 2)] = "PREFAB"),
    ((t = s = s || {})[(t.NORMAL = 1)] = "NORMAL"),
    (t[(t.ADHERING = 2)] = "ADHERING"),
    (t[(t.PAGE = 3)] = "PAGE"),
    ((t = y = y || {})[(t.NONE = 0)] = "NONE"),
    (t[(t.SINGLE = 1)] = "SINGLE"),
    (t[(t.MULT = 2)] = "MULT");
var d,
    e =
        ((d = cc.Component),
        i(f, d),
        Object.defineProperty(f.prototype, "slideMode", {
            get: function () {
                return this._slideMode;
            },
            set: function (t) {
                this._slideMode = t;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(f.prototype, "virtual", {
            get: function () {
                return this._virtual;
            },
            set: function (t) {
                null != t && (this._virtual = t), 0 != this._numItems && this._onScrolling();
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(f.prototype, "updateRate", {
            get: function () {
                return this._updateRate;
            },
            set: function (t) {
                0 <= t && t <= 6 && (this._updateRate = t);
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(f.prototype, "selectedId", {
            get: function () {
                return this._selectedId;
            },
            set: function (t) {
                var e = this;
                switch (e.selectedMode) {
                    case y.SINGLE:
                        if (!e.repeatEventSingle && t == e._selectedId) return;
                        var o = e.getItemByListId(t),
                            n = void 0;
                        0 <= e._selectedId ? (e._lastSelectedId = e._selectedId) : (e._lastSelectedId = null),
                            (e._selectedId = t),
                            o && ((n = o.getComponent(g.default)).selected = !0),
                            0 <= e._lastSelectedId &&
                                e._lastSelectedId != e._selectedId &&
                                (i = e.getItemByListId(e._lastSelectedId)) &&
                                (i.getComponent(g.default).selected = !1),
                            e.selectedEvent &&
                                cc.Component.EventHandler.emitEvents(
                                    [e.selectedEvent],
                                    o,
                                    t % this._actualNumItems,
                                    null == e._lastSelectedId ? null : e._lastSelectedId % this._actualNumItems
                                );
                        break;
                    case y.MULT:
                        if (!(o = e.getItemByListId(t))) return;
                        (n = o.getComponent(g.default)),
                            0 <= e._selectedId && (e._lastSelectedId = e._selectedId),
                            (e._selectedId = t);
                        var i = !n.selected;
                        n.selected = i;
                        n = e.multSelected.indexOf(t);
                        i && n < 0 ? e.multSelected.push(t) : !i && 0 <= n && e.multSelected.splice(n, 1),
                            e.selectedEvent &&
                                cc.Component.EventHandler.emitEvents(
                                    [e.selectedEvent],
                                    o,
                                    t % this._actualNumItems,
                                    null == e._lastSelectedId ? null : e._lastSelectedId % this._actualNumItems,
                                    i
                                );
                }
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(f.prototype, "numItems", {
            get: function () {
                return this._actualNumItems;
            },
            set: function (t) {
                var e = this;
                if (e.checkInited(!1))
                    if (null == t || t < 0) cc.error("numItems set the wrong::", t);
                    else if (((e._actualNumItems = e._numItems = t), (e._forceUpdate = !0), e._virtual))
                        e._resizeContent(),
                            e.cyclic && (e._numItems = e._cyclicNum * e._numItems),
                            e._onScrolling(),
                            e.frameByFrameRenderNum || e.slideMode != s.PAGE || (e.curPageNum = e.nearestListId);
                    else {
                        e.cyclic && (e._resizeContent(), (e._numItems = e._cyclicNum * e._numItems));
                        t = e.content.getComponent(cc.Layout);
                        if (
                            (t && (t.enabled = !0),
                            e._delRedundantItem(),
                            (e.firstListId = 0) < e.frameByFrameRenderNum)
                        ) {
                            for (
                                var o = e.frameByFrameRenderNum > e._numItems ? e._numItems : e.frameByFrameRenderNum,
                                    n = 0;
                                n < o;
                                n++
                            )
                                e._createOrUpdateItem2(n);
                            e.frameByFrameRenderNum < e._numItems &&
                                ((e._updateCounter = e.frameByFrameRenderNum), (e._updateDone = !1));
                        } else {
                            for (n = 0; n < e._numItems; n++) e._createOrUpdateItem2(n);
                            e.displayItemNum = e._numItems;
                        }
                    }
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(f.prototype, "scrollView", {
            get: function () {
                return this._scrollView;
            },
            enumerable: !1,
            configurable: !0
        }),
        (f.prototype.onLoad = function () {
            this._init();
        }),
        (f.prototype.onDestroy = function () {
            cc.isValid(this._itemTmp) && this._itemTmp.destroy(),
                cc.isValid(this.tmpNode) && this.tmpNode.destroy(),
                this._pool && this._pool.clear();
        }),
        (f.prototype.onEnable = function () {
            this._registerEvent(),
                this._init(),
                this._aniDelRuning &&
                    ((this._aniDelRuning = !1),
                    this._aniDelItem &&
                        (this._aniDelBeforePos &&
                            ((this._aniDelItem.position = this._aniDelBeforePos), delete this._aniDelBeforePos),
                        this._aniDelBeforeScale &&
                            ((this._aniDelItem.scale = this._aniDelBeforeScale), delete this._aniDelBeforeScale),
                        delete this._aniDelItem),
                    this._aniDelCB && (this._aniDelCB(), delete this._aniDelCB));
        }),
        (f.prototype.onDisable = function () {
            this._unregisterEvent();
        }),
        (f.prototype._registerEvent = function () {
            var t = this;
            t.node.on(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, !0),
                t.node.on("touch-up", t._onTouchUp, t),
                t.node.on(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, !0),
                t.node.on("scroll-began", t._onScrollBegan, t, !0),
                t.node.on("scroll-ended", t._onScrollEnded, t, !0),
                t.node.on("scrolling", t._onScrolling, t, !0),
                t.node.on(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
        }),
        (f.prototype._unregisterEvent = function () {
            var t = this;
            t.node.off(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, !0),
                t.node.off("touch-up", t._onTouchUp, t),
                t.node.off(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, !0),
                t.node.off("scroll-began", t._onScrollBegan, t, !0),
                t.node.off("scroll-ended", t._onScrollEnded, t, !0),
                t.node.off("scrolling", t._onScrolling, t, !0),
                t.node.off(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
        }),
        (f.prototype._init = function () {
            var t = this;
            if (!t._inited)
                if (
                    ((t._scrollView = t.node.getComponent(cc.ScrollView)),
                    (t.content = t._scrollView.content),
                    t.content)
                ) {
                    switch (
                        ((t._layout = t.content.getComponent(cc.Layout)),
                        (t._align = t._layout.type),
                        (t._resizeMode = t._layout.resizeMode),
                        (t._startAxis = t._layout.startAxis),
                        (t._topGap = t._layout.paddingTop),
                        (t._rightGap = t._layout.paddingRight),
                        (t._bottomGap = t._layout.paddingBottom),
                        (t._leftGap = t._layout.paddingLeft),
                        (t._columnGap = t._layout.spacingX),
                        (t._lineGap = t._layout.spacingY),
                        t._colLineNum,
                        (t._verticalDir = t._layout.verticalDirection),
                        (t._horizontalDir = t._layout.horizontalDirection),
                        t.setTemplateItem(cc.instantiate(t.templateType == a.PREFAB ? t.tmpPrefab : t.tmpNode)),
                        (t._slideMode != s.ADHERING && t._slideMode != s.PAGE) ||
                            ((t._scrollView.inertia = !1), (t._scrollView._onMouseWheel = function () {})),
                        t.virtual || (t.lackCenter = !1),
                        (t._lastDisplayData = []),
                        (t.displayData = []),
                        (t._pool = new cc.NodePool()),
                        (t._forceUpdate = !1),
                        (t._updateCounter = 0),
                        (t._updateDone = !0),
                        (t.curPageNum = 0),
                        t.cyclic &&
                            ((t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t)),
                            (t._scrollView._startBounceBackIfNeeded = function () {
                                return !1;
                            })),
                        t._align)
                    ) {
                        case cc.Layout.Type.HORIZONTAL:
                            switch (t._horizontalDir) {
                                case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                    t._alignCalcType = 1;
                                    break;
                                case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                    t._alignCalcType = 2;
                            }
                            break;
                        case cc.Layout.Type.VERTICAL:
                            switch (t._verticalDir) {
                                case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                    t._alignCalcType = 3;
                                    break;
                                case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                    t._alignCalcType = 4;
                            }
                            break;
                        case cc.Layout.Type.GRID:
                            switch (t._startAxis) {
                                case cc.Layout.AxisDirection.HORIZONTAL:
                                    switch (t._verticalDir) {
                                        case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                            t._alignCalcType = 3;
                                            break;
                                        case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                            t._alignCalcType = 4;
                                    }
                                    break;
                                case cc.Layout.AxisDirection.VERTICAL:
                                    switch (t._horizontalDir) {
                                        case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                            t._alignCalcType = 1;
                                            break;
                                        case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                            t._alignCalcType = 2;
                                    }
                            }
                    }
                    t.content.removeAllChildren(), (t._inited = !0);
                } else cc.error(t.node.name + "'s cc.ScrollView unset content!");
        }),
        (f.prototype._processAutoScrolling = function (t) {
            this._scrollView._autoScrollAccumulatedTime += +t;
            var e = Math.min(1, this._scrollView._autoScrollAccumulatedTime / this._scrollView._autoScrollTotalTime);
            this._scrollView._autoScrollAttenuate && (e = (o = e - 1) * o * o * o * o + 1);
            var t = this._scrollView._autoScrollStartPosition.add(this._scrollView._autoScrollTargetDelta.mul(e)),
                o = this._scrollView.getScrollEndedEventTiming(),
                o = Math.abs(e - 1) <= o;
            Math.abs(e - 1) <= this._scrollView.getScrollEndedEventTiming() &&
                !this._scrollView._isScrollEndedWithThresholdEventFired &&
                (this._scrollView._dispatchEvent("scroll-ended-with-threshold"),
                (this._scrollView._isScrollEndedWithThresholdEventFired = !0)),
                o && (this._scrollView._autoScrolling = !1);
            t = t.sub(this._scrollView.getContentPosition());
            this._scrollView._moveContent(this._scrollView._clampDelta(t), o),
                this._scrollView._dispatchEvent("scrolling"),
                this._scrollView._autoScrolling ||
                    ((this._scrollView._isBouncing = !1),
                    (this._scrollView._scrolling = !1),
                    this._scrollView._dispatchEvent("scroll-ended"));
        }),
        (f.prototype.setTemplateItem = function (t) {
            if (t) {
                var e,
                    o = this;
                switch (
                    ((o._itemTmp = t),
                    o._resizeMode == cc.Layout.ResizeMode.CHILDREN
                        ? (o._itemSize = o._layout.cellSize)
                        : (o._itemSize = cc.size(t.width, t.height)),
                    ((e = t.getComponent(g.default)) ? !1 : !0) && (o.selectedMode = y.NONE),
                    (e = t.getComponent(cc.Widget)) && e.enabled && (o._needUpdateWidget = !0),
                    o.selectedMode == y.MULT && (o.multSelected = []),
                    o._align)
                ) {
                    case cc.Layout.Type.HORIZONTAL:
                        (o._colLineNum = 1), (o._sizeType = !1);
                        break;
                    case cc.Layout.Type.VERTICAL:
                        (o._colLineNum = 1), (o._sizeType = !0);
                        break;
                    case cc.Layout.Type.GRID:
                        switch (o._startAxis) {
                            case cc.Layout.AxisDirection.HORIZONTAL:
                                var n = o.content.width - o._leftGap - o._rightGap;
                                (o._colLineNum = Math.floor((n + o._columnGap) / (o._itemSize.width + o._columnGap))),
                                    (o._sizeType = !0);
                                break;
                            case cc.Layout.AxisDirection.VERTICAL:
                                n = o.content.height - o._topGap - o._bottomGap;
                                (o._colLineNum = Math.floor((n + o._lineGap) / (o._itemSize.height + o._lineGap))),
                                    (o._sizeType = !1);
                        }
                }
            }
        }),
        (f.prototype.checkInited = function (t) {
            return (
                void 0 === t && (t = !0), !!this._inited || (t && cc.error("List initialization not completed!"), !1)
            );
        }),
        (f.prototype._resizeContent = function () {
            var t,
                e,
                o = this;
            switch (o._align) {
                case cc.Layout.Type.HORIZONTAL:
                    e = o._customSize
                        ? ((t = o._getFixedSize(null)),
                          o._leftGap +
                              t.val +
                              o._itemSize.width * (o._numItems - t.count) +
                              o._columnGap * (o._numItems - 1) +
                              o._rightGap)
                        : o._leftGap + o._itemSize.width * o._numItems + o._columnGap * (o._numItems - 1) + o._rightGap;
                    break;
                case cc.Layout.Type.VERTICAL:
                    e = o._customSize
                        ? ((t = o._getFixedSize(null)),
                          o._topGap +
                              t.val +
                              o._itemSize.height * (o._numItems - t.count) +
                              o._lineGap * (o._numItems - 1) +
                              o._bottomGap)
                        : o._topGap + o._itemSize.height * o._numItems + o._lineGap * (o._numItems - 1) + o._bottomGap;
                    break;
                case cc.Layout.Type.GRID:
                    switch ((o.lackCenter && (o.lackCenter = !1), o._startAxis)) {
                        case cc.Layout.AxisDirection.HORIZONTAL:
                            var n = Math.ceil(o._numItems / o._colLineNum);
                            e = o._topGap + o._itemSize.height * n + o._lineGap * (n - 1) + o._bottomGap;
                            break;
                        case cc.Layout.AxisDirection.VERTICAL:
                            n = Math.ceil(o._numItems / o._colLineNum);
                            e = o._leftGap + o._itemSize.width * n + o._columnGap * (n - 1) + o._rightGap;
                    }
            }
            var i = o.content.getComponent(cc.Layout);
            i && (i.enabled = !1),
                (o._allItemSize = e),
                (o._allItemSizeNoEdge =
                    o._allItemSize - (o._sizeType ? o._topGap + o._bottomGap : o._leftGap + o._rightGap)),
                o.cyclic &&
                    ((r = o._sizeType ? o.node.height : o.node.width),
                    (o._cyclicPos1 = 0),
                    (r -= o._cyclicPos1),
                    (o._cyclicNum = Math.ceil(r / o._allItemSizeNoEdge) + 1),
                    (r = o._sizeType ? o._lineGap : o._columnGap),
                    (o._cyclicPos2 = o._cyclicPos1 + o._allItemSizeNoEdge + r),
                    (o._cyclicAllItemSize =
                        o._allItemSize + o._allItemSizeNoEdge * (o._cyclicNum - 1) + r * (o._cyclicNum - 1)),
                    (o._cycilcAllItemSizeNoEdge = o._allItemSizeNoEdge * o._cyclicNum),
                    (o._cycilcAllItemSizeNoEdge += r * (o._cyclicNum - 1))),
                (o._lack = !o.cyclic && o._allItemSize < (o._sizeType ? o.node.height : o.node.width));
            var r = (o._lack && o.lackCenter) || !o.lackSlide ? 0.1 : 0,
                r = o._lack
                    ? (o._sizeType ? o.node.height : o.node.width) - r
                    : o.cyclic
                    ? o._cyclicAllItemSize
                    : o._allItemSize;
            r < 0 && (r = 0), o._sizeType ? (o.content.height = r) : (o.content.width = r);
        }),
        (f.prototype._onScrolling = function (t) {
            if (
                (void 0 === t && (t = null),
                null == this.frameCount && (this.frameCount = this._updateRate),
                !this._forceUpdate && t && "scroll-ended" != t.type && 0 < this.frameCount)
            )
                this.frameCount--;
            else if (((this.frameCount = this._updateRate), !this._aniDelRuning)) {
                if (this.cyclic) {
                    var e = this.content.getPosition(),
                        e = this._sizeType ? e.y : e.x,
                        o = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap),
                        n = this._sizeType ? cc.v2(0, o) : cc.v2(o, 0);
                    switch (this._alignCalcType) {
                        case 1:
                            e > -this._cyclicPos1
                                ? ((this.content.x = -this._cyclicPos2),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.sub(n)))
                                : e < -this._cyclicPos2 &&
                                  ((this.content.x = -this._cyclicPos1),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.add(n)));
                            break;
                        case 2:
                            e < this._cyclicPos1
                                ? ((this.content.x = this._cyclicPos2),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.add(n)))
                                : e > this._cyclicPos2 &&
                                  ((this.content.x = this._cyclicPos1),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.sub(n)));
                            break;
                        case 3:
                            e < this._cyclicPos1
                                ? ((this.content.y = this._cyclicPos2),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.add(n)))
                                : e > this._cyclicPos2 &&
                                  ((this.content.y = this._cyclicPos1),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.sub(n)));
                            break;
                        case 4:
                            e > -this._cyclicPos1
                                ? ((this.content.y = -this._cyclicPos2),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.sub(n)))
                                : e < -this._cyclicPos2 &&
                                  ((this.content.y = -this._cyclicPos1),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.add(n)));
                    }
                }
                var i, r, a, s;
                if (
                    (this._calcViewPos(),
                    this._sizeType
                        ? ((i = this.viewTop), (a = this.viewBottom))
                        : ((r = this.viewRight), (s = this.viewLeft)),
                    this._virtual)
                ) {
                    this.displayData = [];
                    var l,
                        c = 0,
                        u = this._numItems - 1;
                    if (this._customSize)
                        for (var p = !1; c <= u && !p; c++)
                            switch (((l = this._calcItemPos(c)), this._align)) {
                                case cc.Layout.Type.HORIZONTAL:
                                    l.right >= s && l.left <= r
                                        ? this.displayData.push(l)
                                        : 0 != c && 0 < this.displayData.length && (p = !0);
                                    break;
                                case cc.Layout.Type.VERTICAL:
                                    l.bottom <= i && l.top >= a
                                        ? this.displayData.push(l)
                                        : 0 != c && 0 < this.displayData.length && (p = !0);
                                    break;
                                case cc.Layout.Type.GRID:
                                    switch (this._startAxis) {
                                        case cc.Layout.AxisDirection.HORIZONTAL:
                                            l.bottom <= i && l.top >= a
                                                ? this.displayData.push(l)
                                                : 0 != c && 0 < this.displayData.length && (p = !0);
                                            break;
                                        case cc.Layout.AxisDirection.VERTICAL:
                                            l.right >= s && l.left <= r
                                                ? this.displayData.push(l)
                                                : 0 != c && 0 < this.displayData.length && (p = !0);
                                    }
                            }
                    else {
                        var h = this._itemSize.width + this._columnGap,
                            d = this._itemSize.height + this._lineGap;
                        switch (this._alignCalcType) {
                            case 1:
                                (c = (s - this._leftGap) / h), (u = (r - this._leftGap) / h);
                                break;
                            case 2:
                                (c = (-r - this._rightGap) / h), (u = (-s - this._rightGap) / h);
                                break;
                            case 3:
                                (c = (-i - this._topGap) / d), (u = (-a - this._topGap) / d);
                                break;
                            case 4:
                                (c = (a - this._bottomGap) / d), (u = (i - this._bottomGap) / d);
                        }
                        for (
                            c = Math.floor(c) * this._colLineNum,
                                u = Math.ceil(u) * this._colLineNum,
                                c < 0 && (c = 0),
                                --u >= this._numItems && (u = this._numItems - 1);
                            c <= u;
                            c++
                        )
                            this.displayData.push(this._calcItemPos(c));
                    }
                    if ((this._delRedundantItem(), this.displayData.length <= 0 || !this._numItems))
                        this._lastDisplayData = [];
                    else {
                        (this.firstListId = this.displayData[0].id), (this.displayItemNum = this.displayData.length);
                        (t = this._lastDisplayData.length), (o = this.displayItemNum != t);
                        if (
                            (o &&
                                (0 < this.frameByFrameRenderNum &&
                                    this._lastDisplayData.sort(function (t, e) {
                                        return t - e;
                                    }),
                                (o =
                                    this.firstListId != this._lastDisplayData[0] ||
                                    this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[t - 1])),
                            this._forceUpdate || o)
                        )
                            if (0 < this.frameByFrameRenderNum)
                                0 < this._numItems
                                    ? (this._updateDone ? (this._updateCounter = 0) : (this._doneAfterUpdate = !0),
                                      (this._updateDone = !1))
                                    : ((this._updateCounter = 0), (this._updateDone = !0));
                            else {
                                this._lastDisplayData = [];
                                for (var f = 0; f < this.displayItemNum; f++)
                                    this._createOrUpdateItem(this.displayData[f]);
                                this._forceUpdate = !1;
                            }
                        this._calcNearestItem();
                    }
                }
            }
        }),
        (f.prototype._calcViewPos = function () {
            var t = this.content.getPosition();
            switch (this._alignCalcType) {
                case 1:
                    (this.elasticLeft = 0 < t.x ? t.x : 0),
                        (this.viewLeft = (t.x < 0 ? -t.x : 0) - this.elasticLeft),
                        (this.viewRight = this.viewLeft + this.node.width),
                        (this.elasticRight =
                            this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0),
                        (this.viewRight += this.elasticRight);
                    break;
                case 2:
                    (this.elasticRight = t.x < 0 ? -t.x : 0),
                        (this.viewRight = (0 < t.x ? -t.x : 0) + this.elasticRight),
                        (this.viewLeft = this.viewRight - this.node.width),
                        (this.elasticLeft =
                            this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0),
                        (this.viewLeft -= this.elasticLeft);
                    break;
                case 3:
                    (this.elasticTop = t.y < 0 ? Math.abs(t.y) : 0),
                        (this.viewTop = (0 < t.y ? -t.y : 0) + this.elasticTop),
                        (this.viewBottom = this.viewTop - this.node.height),
                        (this.elasticBottom =
                            this.viewBottom < -this.content.height
                                ? Math.abs(this.viewBottom + this.content.height)
                                : 0),
                        (this.viewBottom += this.elasticBottom);
                    break;
                case 4:
                    (this.elasticBottom = 0 < t.y ? Math.abs(t.y) : 0),
                        (this.viewBottom = (t.y < 0 ? -t.y : 0) - this.elasticBottom),
                        (this.viewTop = this.viewBottom + this.node.height),
                        (this.elasticTop =
                            this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0),
                        (this.viewTop -= this.elasticTop);
            }
        }),
        (f.prototype._calcItemPos = function (t) {
            var e, o, n, i, r, a, s, l;
            switch (this._align) {
                case cc.Layout.Type.HORIZONTAL:
                    switch (this._horizontalDir) {
                        case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                            return (
                                (l = this._customSize
                                    ? ((a = this._getFixedSize(t)),
                                      (s =
                                          this._leftGap +
                                          (this._itemSize.width + this._columnGap) * (t - a.count) +
                                          (a.val + this._columnGap * a.count)),
                                      0 < (c = this._customSize[t]) ? c : this._itemSize.width)
                                    : ((s = this._leftGap + (this._itemSize.width + this._columnGap) * t),
                                      this._itemSize.width)),
                                this.lackCenter &&
                                    ((s -= this._leftGap), (s += this.content.width / 2 - this._allItemSizeNoEdge / 2)),
                                {
                                    id: t,
                                    left: s,
                                    right: (n = s + l),
                                    x: s + this._itemTmp.anchorX * l,
                                    y: this._itemTmp.y
                                }
                            );
                        case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                            return (
                                (l = this._customSize
                                    ? ((a = this._getFixedSize(t)),
                                      (n =
                                          -this._rightGap -
                                          (this._itemSize.width + this._columnGap) * (t - a.count) -
                                          (a.val + this._columnGap * a.count)),
                                      0 < (c = this._customSize[t]) ? c : this._itemSize.width)
                                    : ((n = -this._rightGap - (this._itemSize.width + this._columnGap) * t),
                                      this._itemSize.width)),
                                this.lackCenter &&
                                    ((n += this._rightGap),
                                    (n -= this.content.width / 2 - this._allItemSizeNoEdge / 2)),
                                {
                                    id: t,
                                    right: n,
                                    left: (s = n - l),
                                    x: s + this._itemTmp.anchorX * l,
                                    y: this._itemTmp.y
                                }
                            );
                    }
                    break;
                case cc.Layout.Type.VERTICAL:
                    switch (this._verticalDir) {
                        case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                            return (
                                (u = this._customSize
                                    ? ((a = this._getFixedSize(t)),
                                      (e =
                                          -this._topGap -
                                          (this._itemSize.height + this._lineGap) * (t - a.count) -
                                          (a.val + this._lineGap * a.count)),
                                      0 < (c = this._customSize[t]) ? c : this._itemSize.height)
                                    : ((e = -this._topGap - (this._itemSize.height + this._lineGap) * t),
                                      this._itemSize.height)),
                                this.lackCenter &&
                                    ((e += this._topGap), (e -= this.content.height / 2 - this._allItemSizeNoEdge / 2)),
                                {
                                    id: t,
                                    top: e,
                                    bottom: (o = e - u),
                                    x: this._itemTmp.x,
                                    y: o + this._itemTmp.anchorY * u
                                }
                            );
                        case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                            var c,
                                u = this._customSize
                                    ? ((a = this._getFixedSize(t)),
                                      (o =
                                          this._bottomGap +
                                          (this._itemSize.height + this._lineGap) * (t - a.count) +
                                          (a.val + this._lineGap * a.count)),
                                      0 < (c = this._customSize[t]) ? c : this._itemSize.height)
                                    : ((o = this._bottomGap + (this._itemSize.height + this._lineGap) * t),
                                      this._itemSize.height);
                            return (
                                this.lackCenter &&
                                    ((o -= this._bottomGap),
                                    (o += this.content.height / 2 - this._allItemSizeNoEdge / 2)),
                                {
                                    id: t,
                                    top: (e = o + u),
                                    bottom: o,
                                    x: this._itemTmp.x,
                                    y: o + this._itemTmp.anchorY * u
                                }
                            );
                    }
                case cc.Layout.Type.GRID:
                    var p = Math.floor(t / this._colLineNum);
                    switch (this._startAxis) {
                        case cc.Layout.AxisDirection.HORIZONTAL:
                            switch (this._verticalDir) {
                                case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                    r =
                                        (o =
                                            (e = -this._topGap - (this._itemSize.height + this._lineGap) * p) -
                                            this._itemSize.height) +
                                        this._itemTmp.anchorY * this._itemSize.height;
                                    break;
                                case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                    (e =
                                        (o = this._bottomGap + (this._itemSize.height + this._lineGap) * p) +
                                        this._itemSize.height),
                                        (r = o + this._itemTmp.anchorY * this._itemSize.height);
                            }
                            switch (
                                ((i =
                                    this._leftGap + (t % this._colLineNum) * (this._itemSize.width + this._columnGap)),
                                this._horizontalDir)
                            ) {
                                case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                    (i += this._itemTmp.anchorX * this._itemSize.width),
                                        (i -= this.content.anchorX * this.content.width);
                                    break;
                                case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                    (i += (1 - this._itemTmp.anchorX) * this._itemSize.width),
                                        (i -= (1 - this.content.anchorX) * this.content.width),
                                        (i *= -1);
                            }
                            return {id: t, top: e, bottom: o, x: i, y: r};
                        case cc.Layout.AxisDirection.VERTICAL:
                            switch (this._horizontalDir) {
                                case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                    (n =
                                        (s = this._leftGap + (this._itemSize.width + this._columnGap) * p) +
                                        this._itemSize.width),
                                        (i = s + this._itemTmp.anchorX * this._itemSize.width),
                                        (i -= this.content.anchorX * this.content.width);
                                    break;
                                case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                    (i =
                                        (s =
                                            (n = -this._rightGap - (this._itemSize.width + this._columnGap) * p) -
                                            this._itemSize.width) +
                                        this._itemTmp.anchorX * this._itemSize.width),
                                        (i += (1 - this.content.anchorX) * this.content.width);
                            }
                            switch (
                                ((r = -this._topGap - (t % this._colLineNum) * (this._itemSize.height + this._lineGap)),
                                this._verticalDir)
                            ) {
                                case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                    (r -= (1 - this._itemTmp.anchorY) * this._itemSize.height),
                                        (r += (1 - this.content.anchorY) * this.content.height);
                                    break;
                                case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                    (r -= this._itemTmp.anchorY * this._itemSize.height),
                                        (r += this.content.anchorY * this.content.height),
                                        (r *= -1);
                            }
                            return {id: t, left: s, right: n, x: i, y: r};
                    }
            }
        }),
        (f.prototype._calcExistItemPos = function (t) {
            var e = this.getItemByListId(t);
            if (!e) return null;
            t = {id: t, x: e.x, y: e.y};
            return (
                this._sizeType
                    ? ((t.top = e.y + e.height * (1 - e.anchorY)), (t.bottom = e.y - e.height * e.anchorY))
                    : ((t.left = e.x - e.width * e.anchorX), (t.right = e.x + e.width * (1 - e.anchorX))),
                t
            );
        }),
        (f.prototype.getItemPos = function (t) {
            return this._virtual || this.frameByFrameRenderNum ? this._calcItemPos(t) : this._calcExistItemPos(t);
        }),
        (f.prototype._getFixedSize = function (t) {
            if (!this._customSize) return null;
            null == t && (t = this._numItems);
            var e,
                o = 0,
                n = 0;
            for (e in this._customSize) parseInt(e) < t && ((o += this._customSize[e]), n++);
            return {val: o, count: n};
        }),
        (f.prototype._onScrollBegan = function () {
            this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
        }),
        (f.prototype._onScrollEnded = function () {
            var t,
                e = this;
            (e.curScrollIsTouch = !1),
                null != e.scrollToListId &&
                    ((t = e.getItemByListId(e.scrollToListId)),
                    (e.scrollToListId = null),
                    t && cc.tween(t).to(0.1, {scale: 1.06}).to(0.1, {scale: 1}).start()),
                e._onScrolling(),
                e._slideMode != s.ADHERING || e.adhering
                    ? e._slideMode == s.PAGE &&
                      (null != e._beganPos && e.curScrollIsTouch ? this._pageAdhere() : e.adhere())
                    : e.adhere();
        }),
        (f.prototype._onTouchStart = function (t) {
            if (((this.curScrollIsTouch = !0), t.eventPhase !== cc.Event.AT_TARGET || t.target !== this.node)) {
                for (var e = t.target; null == e._listId && e.parent; ) e = e.parent;
                this._scrollItem = null != e._listId ? e : t.target;
            }
        }),
        (f.prototype._onTouchUp = function () {
            (this._scrollPos = null),
                this._slideMode == s.ADHERING
                    ? (this.adhering && (this._adheringBarrier = !0), this.adhere())
                    : this._slideMode == s.PAGE && (null != this._beganPos ? this._pageAdhere() : this.adhere()),
                (this._scrollItem = null);
        }),
        (f.prototype._onTouchCancelled = function () {
            (this._scrollPos = null),
                this._slideMode == s.ADHERING
                    ? (this.adhering && (this._adheringBarrier = !0), this.adhere())
                    : this._slideMode == s.PAGE && (null != this._beganPos ? this._pageAdhere() : this.adhere()),
                (this._scrollItem = null);
        }),
        (f.prototype._onSizeChanged = function () {
            this.checkInited(!1) && this._onScrolling();
        }),
        (f.prototype._onItemAdaptive = function (t) {
            var e;
            ((!this._sizeType && t.width != this._itemSize.width) ||
                (this._sizeType && t.height != this._itemSize.height)) &&
                (this._customSize || (this._customSize = {}),
                (e = this._sizeType ? t.height : t.width),
                this._customSize[t._listId] != e &&
                    ((this._customSize[t._listId] = e),
                    this._resizeContent(),
                    this.updateAll(),
                    null != this._scrollToListId &&
                        ((this._scrollPos = null),
                        this.unschedule(this._scrollToSo),
                        this.scrollTo(
                            this._scrollToListId,
                            Math.max(0, this._scrollToEndTime - new Date().getTime() / 1e3)
                        ))));
        }),
        (f.prototype._pageAdhere = function () {
            var t = this;
            if (t.cyclic || !(0 < t.elasticTop || 0 < t.elasticRight || 0 < t.elasticBottom || 0 < t.elasticLeft)) {
                var e = t._sizeType ? t.viewTop : t.viewLeft,
                    o = (t._sizeType ? t.node.height : t.node.width) * t.pageDistance;
                if (Math.abs(t._beganPos - e) > o)
                    switch (t._alignCalcType) {
                        case 1:
                        case 4:
                            t._beganPos > e ? t.prePage(0.5) : t.nextPage(0.5);
                            break;
                        case 2:
                        case 3:
                            t._beganPos < e ? t.prePage(0.5) : t.nextPage(0.5);
                    }
                else
                    t.elasticTop <= 0 &&
                        t.elasticRight <= 0 &&
                        t.elasticBottom <= 0 &&
                        t.elasticLeft <= 0 &&
                        t.adhere();
                t._beganPos = null;
            }
        }),
        (f.prototype.adhere = function () {
            var t,
                e = this;
            e.checkInited() &&
                !(0 < e.elasticTop || 0 < e.elasticRight || 0 < e.elasticBottom || 0 < e.elasticLeft) &&
                ((e.adhering = !0),
                e._calcNearestItem(),
                (t = (e._sizeType ? e._topGap : e._leftGap) / (e._sizeType ? e.node.height : e.node.width)),
                e.scrollTo(e.nearestListId, 0.7, t));
        }),
        (f.prototype.update = function () {
            if (!(this.frameByFrameRenderNum <= 0 || this._updateDone))
                if (this._virtual) {
                    for (
                        var t =
                                this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum
                                    ? this.displayItemNum
                                    : this._updateCounter + this.frameByFrameRenderNum,
                            e = this._updateCounter;
                        e < t;
                        e++
                    ) {
                        var o = this.displayData[e];
                        o && this._createOrUpdateItem(o);
                    }
                    this._updateCounter >= this.displayItemNum - 1
                        ? this._doneAfterUpdate
                            ? ((this._updateCounter = 0), (this._updateDone = !1), (this._doneAfterUpdate = !1))
                            : ((this._updateDone = !0),
                              this._delRedundantItem(),
                              (this._forceUpdate = !1),
                              this._calcNearestItem(),
                              this.slideMode == s.PAGE && (this.curPageNum = this.nearestListId))
                        : (this._updateCounter += this.frameByFrameRenderNum);
                } else if (this._updateCounter < this._numItems) {
                    for (
                        t =
                            this._updateCounter + this.frameByFrameRenderNum > this._numItems
                                ? this._numItems
                                : this._updateCounter + this.frameByFrameRenderNum,
                            e = this._updateCounter;
                        e < t;
                        e++
                    )
                        this._createOrUpdateItem2(e);
                    this._updateCounter += this.frameByFrameRenderNum;
                } else
                    (this._updateDone = !0),
                        this._calcNearestItem(),
                        this.slideMode == s.PAGE && (this.curPageNum = this.nearestListId);
        }),
        (f.prototype._createOrUpdateItem = function (t) {
            var e,
                o,
                n = this.getItemByListId(t.id);
            n
                ? this._forceUpdate &&
                  this.renderEvent &&
                  (n.setPosition(cc.v2(t.x, t.y)),
                  this._resetItemSize(n),
                  this.renderEvent &&
                      cc.Component.EventHandler.emitEvents([this.renderEvent], n, t.id % this._actualNumItems))
                : ((n = (e = 0 < this._pool.size()) ? this._pool.get() : cc.instantiate(this._itemTmp)),
                  (e && cc.isValid(n)) || ((n = cc.instantiate(this._itemTmp)), (e = !1)),
                  n._listId != t.id && ((n._listId = t.id), n.setContentSize(this._itemSize)),
                  n.setPosition(cc.v2(t.x, t.y)),
                  this._resetItemSize(n),
                  this.content.addChild(n),
                  e && this._needUpdateWidget && (o = n.getComponent(cc.Widget)) && o.updateAlignment(),
                  n.setSiblingIndex(this.content.childrenCount - 1),
                  (o = n.getComponent(g.default)),
                  (n.listItem = o) && ((o.listId = t.id), (o.list = this), o._registerEvent()),
                  this.renderEvent &&
                      cc.Component.EventHandler.emitEvents([this.renderEvent], n, t.id % this._actualNumItems)),
                this._resetItemSize(n),
                this._updateListItem(n.listItem),
                this._lastDisplayData.indexOf(t.id) < 0 && this._lastDisplayData.push(t.id);
        }),
        (f.prototype._createOrUpdateItem2 = function (t) {
            var e,
                o = this.content.children[t];
            o
                ? this._forceUpdate &&
                  this.renderEvent &&
                  ((o._listId = t),
                  e && (e.listId = t),
                  this.renderEvent &&
                      cc.Component.EventHandler.emitEvents([this.renderEvent], o, t % this._actualNumItems))
                : (((o = cc.instantiate(this._itemTmp))._listId = t),
                  this.content.addChild(o),
                  (e = o.getComponent(g.default)),
                  (o.listItem = e) && ((e.listId = t), (e.list = this), e._registerEvent()),
                  this.renderEvent &&
                      cc.Component.EventHandler.emitEvents([this.renderEvent], o, t % this._actualNumItems)),
                this._updateListItem(e),
                this._lastDisplayData.indexOf(t) < 0 && this._lastDisplayData.push(t);
        }),
        (f.prototype._updateListItem = function (t) {
            if (t && this.selectedMode > y.NONE) {
                var e = t.node;
                switch (this.selectedMode) {
                    case y.SINGLE:
                        t.selected = this.selectedId == e._listId;
                        break;
                    case y.MULT:
                        t.selected = 0 <= this.multSelected.indexOf(e._listId);
                }
            }
        }),
        (f.prototype._resetItemSize = function () {}),
        (f.prototype._updateItemPos = function (t) {
            var e = isNaN(t) ? t : this.getItemByListId(t),
                t = this.getItemPos(e._listId);
            e.setPosition(t.x, t.y);
        }),
        (f.prototype.setMultSelected = function (t, e) {
            if (this.checkInited()) {
                if ((Array.isArray(t) || (t = [t]), null == e)) this.multSelected = t;
                else {
                    var o = void 0,
                        n = void 0;
                    if (e)
                        for (var i = t.length - 1; 0 <= i; i--)
                            (o = t[i]), (n = this.multSelected.indexOf(o)) < 0 && this.multSelected.push(o);
                    else
                        for (i = t.length - 1; 0 <= i; i--)
                            (o = t[i]), 0 <= (n = this.multSelected.indexOf(o)) && this.multSelected.splice(n, 1);
                }
                (this._forceUpdate = !0), this._onScrolling();
            }
        }),
        (f.prototype.getMultSelected = function () {
            return this.multSelected;
        }),
        (f.prototype.hasMultSelected = function (t) {
            return this.multSelected && 0 <= this.multSelected.indexOf(t);
        }),
        (f.prototype.updateItem = function (t) {
            if (this.checkInited())
                for (var e = 0, o = (t = !Array.isArray(t) ? [t] : t).length; e < o; e++) {
                    var n = t[e],
                        i = this.getItemByListId(n);
                    i && cc.Component.EventHandler.emitEvents([this.renderEvent], i, n % this._actualNumItems);
                }
        }),
        (f.prototype.updateAll = function () {
            this.checkInited() && (this.numItems = this.numItems);
        }),
        (f.prototype.getItemByListId = function (t) {
            if (this.content)
                for (var e = this.content.childrenCount - 1; 0 <= e; e--) {
                    var o = this.content.children[e];
                    if (o._listId == t) return o;
                }
        }),
        (f.prototype._getOutsideItem = function () {
            for (var e, t = [], o = this.content.childrenCount - 1; 0 <= o; o--)
                (e = this.content.children[o]),
                    this.displayData.find(function (t) {
                        return t.id == e._listId;
                    }) || t.push(e);
            return t;
        }),
        (f.prototype._delRedundantItem = function () {
            if (this._virtual)
                for (var t = this._getOutsideItem(), e = t.length - 1; 0 <= e; e--) {
                    var o = t[e];
                    if (!this._scrollItem || o._listId != this._scrollItem._listId) {
                        (o.isCached = !0), this._pool.put(o);
                        for (var n = this._lastDisplayData.length - 1; 0 <= n; n--)
                            if (this._lastDisplayData[n] == o._listId) {
                                this._lastDisplayData.splice(n, 1);
                                break;
                            }
                    }
                }
            else
                for (; this.content.childrenCount > this._numItems; )
                    this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
        }),
        (f.prototype._delSingleItem = function (t) {
            t.removeFromParent(), t.destroy && t.destroy();
        }),
        (f.prototype.aniDelItem = function (c, u, t) {
            var p = this;
            if (!p.checkInited() || p.cyclic || !p._virtual)
                return cc.error("This function is not allowed to be called!");
            if (!u)
                return cc.error(
                    "CallFunc are not allowed to be NULL, You need to delete the corresponding index in the data array in the CallFunc!"
                );
            if (p._aniDelRuning) return cc.warn("Please wait for the current deletion to finish!");
            var e,
                h,
                d,
                f = p.getItemByListId(c);
            f
                ? ((e = f.getComponent(g.default)),
                  (p._aniDelRuning = !0),
                  (p._aniDelCB = u),
                  (p._aniDelItem = f),
                  (p._aniDelBeforePos = f.position),
                  (p._aniDelBeforeScale = f.scale),
                  (h = p.displayData[p.displayData.length - 1].id),
                  (d = e.selected),
                  e.showAni(
                      t,
                      function () {
                          var t, e, o;
                          if (
                              (null != (t = h < p._numItems - 2 ? h + 1 : t)
                                  ? ((n = p._calcItemPos(t)),
                                    p.displayData.push(n),
                                    p._virtual ? p._createOrUpdateItem(n) : p._createOrUpdateItem2(t))
                                  : p._numItems--,
                              p.selectedMode == y.SINGLE)
                          )
                              d ? (p._selectedId = -1) : 0 <= p._selectedId - 1 && p._selectedId--;
                          else if (p.selectedMode == y.MULT && p.multSelected.length) {
                              var n = p.multSelected.indexOf(c);
                              0 <= n && p.multSelected.splice(n, 1);
                              for (var i = p.multSelected.length - 1; 0 <= i; i--)
                                  (r = p.multSelected[i]) >= c && p.multSelected[i]--;
                          }
                          if (p._customSize) {
                              p._customSize[c] && delete p._customSize[c];
                              var r,
                                  a = {};
                              for (r in p._customSize) {
                                  var s = p._customSize[r],
                                      l = parseInt(r);
                                  a[l - (c <= l ? 1 : 0)] = s;
                              }
                              p._customSize = a;
                          }
                          for (i = null != t ? t : h; c + 1 <= i; i--)
                              (f = p.getItemByListId(i)) &&
                                  ((o = p._calcItemPos(i - 1)),
                                  (o = cc.tween(f).to(0.2333, {position: cc.v2(o.x, o.y)})),
                                  i <= c + 1 &&
                                      ((e = !0),
                                      o.call(function () {
                                          (p._aniDelRuning = !1), u(c), delete p._aniDelCB;
                                      })),
                                  o.start());
                          e || ((p._aniDelRuning = !1), u(c), (p._aniDelCB = null));
                      },
                      !0
                  ))
                : u(c);
        }),
        (f.prototype.scrollTo = function (e, t, o, n) {
            void 0 === t && (t = 0.5), void 0 === o && (o = null), void 0 === n && (n = !1);
            var i = this;
            if (i.checkInited(!1)) {
                null == t ? (t = 0.5) : t < 0 && (t = 0),
                    e < 0 ? (e = 0) : e >= i._numItems && (e = i._numItems - 1),
                    !i._virtual && i._layout && i._layout.enabled && i._layout.updateLayout();
                var r,
                    a,
                    s = i.getItemPos(e);
                if (!s) return !1;
                switch (i._alignCalcType) {
                    case 1:
                        (r = s.left), (r -= null != o ? i.node.width * o : i._leftGap), (s = cc.v2(r, 0));
                        break;
                    case 2:
                        (r = s.right - i.node.width),
                            (r += null != o ? i.node.width * o : i._rightGap),
                            (s = cc.v2(r + i.content.width, 0));
                        break;
                    case 3:
                        (a = s.top), (a += null != o ? i.node.height * o : i._topGap), (s = cc.v2(0, -a));
                        break;
                    case 4:
                        (a = s.bottom + i.node.height),
                            (a -= null != o ? i.node.height * o : i._bottomGap),
                            (s = cc.v2(0, -a + i.content.height));
                }
                var l = i.content.getPosition(),
                    l = Math.abs(i._sizeType ? l.y : l.x),
                    c = i._sizeType ? s.y : s.x;
                0.5 < Math.abs((null != i._scrollPos ? i._scrollPos : l) - c) &&
                    (i._scrollView.scrollToOffset(s, t),
                    (i._scrollToListId = e),
                    (i._scrollToEndTime = new Date().getTime() / 1e3 + t),
                    (i._scrollToSo = i.scheduleOnce(function () {
                        var t;
                        i._adheringBarrier || (i.adhering = i._adheringBarrier = !1),
                            (i._scrollPos = i._scrollToListId = i._scrollToEndTime = i._scrollToSo = null),
                            n &&
                                (t = i.getItemByListId(e)) &&
                                cc.tween(t).to(0.1, {scale: 1.05}).to(0.1, {scale: 1}).start();
                    }, t + 0.1)),
                    t <= 0 && i._onScrolling());
            }
        }),
        (f.prototype._calcNearestItem = function () {
            var t,
                e,
                o = this;
            (o.nearestListId = null), o._virtual && o._calcViewPos();
            for (
                var n = o.viewTop, i = o.viewRight, r = o.viewBottom, a = o.viewLeft, s = !1, l = 0;
                l < o.content.childrenCount && !s;
                l += o._colLineNum
            )
                if ((t = o._virtual ? o.displayData[l] : o._calcExistItemPos(l)))
                    switch (((e = o._sizeType ? (t.top + t.bottom) / 2 : (t.left + t.right) / 2), o._alignCalcType)) {
                        case 1:
                            t.right >= a &&
                                ((o.nearestListId = t.id), e < a && (o.nearestListId += o._colLineNum), (s = !0));
                            break;
                        case 2:
                            t.left <= i &&
                                ((o.nearestListId = t.id), i < e && (o.nearestListId += o._colLineNum), (s = !0));
                            break;
                        case 3:
                            t.bottom <= n &&
                                ((o.nearestListId = t.id), n < e && (o.nearestListId += o._colLineNum), (s = !0));
                            break;
                        case 4:
                            t.top >= r &&
                                ((o.nearestListId = t.id), e < r && (o.nearestListId += o._colLineNum), (s = !0));
                    }
            if (
                (t = o._virtual ? o.displayData[o.displayItemNum - 1] : o._calcExistItemPos(o._numItems - 1)) &&
                t.id == o._numItems - 1
            )
                switch (((e = o._sizeType ? (t.top + t.bottom) / 2 : (t.left + t.right) / 2), o._alignCalcType)) {
                    case 1:
                        e < i && (o.nearestListId = t.id);
                        break;
                    case 2:
                        a < e && (o.nearestListId = t.id);
                        break;
                    case 3:
                        r < e && (o.nearestListId = t.id);
                        break;
                    case 4:
                        e < n && (o.nearestListId = t.id);
                }
        }),
        (f.prototype.prePage = function (t) {
            void 0 === t && (t = 0.5), this.checkInited() && this.skipPage(this.curPageNum - 1, t);
        }),
        (f.prototype.nextPage = function (t) {
            void 0 === t && (t = 0.5), this.checkInited() && this.skipPage(this.curPageNum + 1, t);
        }),
        (f.prototype.skipPage = function (t, e) {
            if (this.checkInited())
                return this._slideMode != s.PAGE
                    ? cc.error("This function is not allowed to be called, Must SlideMode = PAGE!")
                    : void (
                          t < 0 ||
                          t >= this._numItems ||
                          (this.curPageNum != t &&
                              ((this.curPageNum = t),
                              this.pageChangeEvent && cc.Component.EventHandler.emitEvents([this.pageChangeEvent], t),
                              this.scrollTo(t, e)))
                      );
        }),
        (f.prototype.calcCustomSize = function (t) {
            var e = this;
            if (e.checkInited()) {
                if (!e._itemTmp) return cc.error("Unset template item!");
                if (!e.renderEvent) return cc.error("Unset Render-Event!");
                e._customSize = {};
                var o = cc.instantiate(e._itemTmp);
                e.content.addChild(o);
                for (var n = 0; n < t; n++)
                    cc.Component.EventHandler.emitEvents([e.renderEvent], o, n),
                        (o.height == e._itemSize.height && o.width == e._itemSize.width) ||
                            (e._customSize[n] = e._sizeType ? o.height : o.width);
                return (
                    Object.keys(e._customSize).length || (e._customSize = null),
                    o.removeFromParent(),
                    o.destroy && o.destroy(),
                    e._customSize
                );
            }
        }),
        r([u({type: cc.Enum(a)})], f.prototype, "templateType", void 0),
        r(
            [
                u({
                    type: cc.Node,
                    visible: function () {
                        return this.templateType == a.NODE;
                    }
                })
            ],
            f.prototype,
            "tmpNode",
            void 0
        ),
        r(
            [
                u({
                    type: cc.Prefab,
                    visible: function () {
                        return this.templateType == a.PREFAB;
                    }
                })
            ],
            f.prototype,
            "tmpPrefab",
            void 0
        ),
        r([u()], f.prototype, "_slideMode", void 0),
        r([u({type: cc.Enum(s)})], f.prototype, "slideMode", null),
        r(
            [
                u({
                    type: cc.Float,
                    range: [0, 1, 0.1],
                    slide: !0,
                    visible: function () {
                        return this._slideMode == s.PAGE;
                    }
                })
            ],
            f.prototype,
            "pageDistance",
            void 0
        ),
        r(
            [
                u({
                    type: cc.Component.EventHandler,
                    visible: function () {
                        return this._slideMode == s.PAGE;
                    }
                })
            ],
            f.prototype,
            "pageChangeEvent",
            void 0
        ),
        r([u()], f.prototype, "_virtual", void 0),
        r([u({type: cc.Boolean})], f.prototype, "virtual", null),
        r(
            [
                u({
                    visible: function () {
                        var t = this.slideMode == s.NORMAL;
                        return t || (this.cyclic = !1), t;
                    }
                })
            ],
            f.prototype,
            "cyclic",
            void 0
        ),
        r(
            [
                u({
                    visible: function () {
                        return this.virtual;
                    }
                })
            ],
            f.prototype,
            "lackCenter",
            void 0
        ),
        r(
            [
                u({
                    visible: function () {
                        var t = this.virtual && !this.lackCenter;
                        return t || (this.lackSlide = !1), t;
                    }
                })
            ],
            f.prototype,
            "lackSlide",
            void 0
        ),
        r([u({type: cc.Integer})], f.prototype, "_updateRate", void 0),
        r([u({type: cc.Integer, range: [0, 6, 1], slide: !0})], f.prototype, "updateRate", null),
        r([u({type: cc.Integer, range: [0, 12, 1], slide: !0})], f.prototype, "frameByFrameRenderNum", void 0),
        r([u({type: cc.Component.EventHandler})], f.prototype, "renderEvent", void 0),
        r([u({type: cc.Enum(y)})], f.prototype, "selectedMode", void 0),
        r(
            [
                u({
                    visible: function () {
                        return this.selectedMode == y.SINGLE;
                    }
                })
            ],
            f.prototype,
            "repeatEventSingle",
            void 0
        ),
        r(
            [
                u({
                    type: cc.Component.EventHandler,
                    visible: function () {
                        return this.selectedMode > y.NONE;
                    }
                })
            ],
            f.prototype,
            "selectedEvent",
            void 0
        ),
        r([u({serializable: !1})], f.prototype, "_numItems", void 0),
        r([c, p(), h("自定义组件/List"), l(cc.ScrollView), e(-5e3)], f));
function f() {
    var t = (null !== d && d.apply(this, arguments)) || this;
    return (
        (t.templateType = a.NODE),
        (t.tmpNode = null),
        (t.tmpPrefab = null),
        (t._slideMode = s.NORMAL),
        (t.pageDistance = 0.3),
        (t.pageChangeEvent = new cc.Component.EventHandler()),
        (t._virtual = !0),
        (t.cyclic = !1),
        (t.lackCenter = !1),
        (t.lackSlide = !1),
        (t._updateRate = 0),
        (t.frameByFrameRenderNum = 0),
        (t.renderEvent = new cc.Component.EventHandler()),
        (t.selectedMode = y.NONE),
        (t.repeatEventSingle = !1),
        (t.selectedEvent = new cc.Component.EventHandler()),
        (t._selectedId = -1),
        (t._forceUpdate = !1),
        (t._updateDone = !0),
        (t._numItems = 0),
        (t._inited = !1),
        (t._needUpdateWidget = !1),
        (t._aniDelRuning = !1),
        (t._doneAfterUpdate = !1),
        (t.adhering = !1),
        (t._adheringBarrier = !1),
        (t.curPageNum = 0),
        t
    );
}
o.default = e;
