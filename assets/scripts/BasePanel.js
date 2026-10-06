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
    s = t("App"),
    l = t("decorator"),
    c = t("BaseUI"),
    e = cc._decorator,
    t = e.ccclass,
    l =
        (e.property,
        (a = c.default),
        i(u, a),
        (u.prototype.doInit = function () {
            console.time(this.__classname__ + " 初始化时间");
            var t = this.nodeMap,
                e = [{path: "", node: this.node}];
            if (t) {
                for (; 0 < e.length; ) {
                    var o = e.shift(),
                        n = o.node.name,
                        i = o.path;
                    if (
                        (this.hasOwnProperty(n) && t.has(i) && this.parse(o.node, t.get(i).type),
                        0 < o.node.childrenCount)
                    )
                        for (var r = 0, a = o.node.children; r < a.length; r++) {
                            var s = a[r];
                            e.push({path: "" == i ? s.name : i + "/" + s.name, node: s});
                        }
                }
                console.timeEnd(this.__classname__ + " 初始化时间");
            }
        }),
        (u.prototype.parse = function (t, e) {
            var o = t.name;
            "cc.Node" == e
                ? ((this[o] = t), (o.startsWith("btn") || o.endsWith("Btn")) && this.btnNodes.push(t))
                : ((this[o] = t.getComponent(e)), "cc.Button" == e && this.btnNodes.push(t));
        }),
        (u.prototype.onBtnEvents = function () {
            var n = this;
            this.btnNodes.forEach(function (t) {
                var e = "on" + n._formatToUpper(t.name) + "Click",
                    o = n.__proto__[e];
                o ? n.on(t, o, n) : console.warn("[BasePanel]-->[line:65]: no " + e);
            });
        }),
        (u.prototype.offBtnEvents = function () {
            this.clear();
        }),
        (u.prototype.onGameEvents = function () {
            var o = this,
                t = this.eventMap;
            t &&
                0 < t.size &&
                t.forEach(function (t) {
                    var e = o.__proto__[t.func];
                    e
                        ? t.once
                            ? s.app.event.once(t.event, e, o)
                            : s.app.event.on(t.event, e, o)
                        : console.warn("[BasePanel]-->[line:84]: no " + t.func);
                });
        }),
        (u.prototype.offGameEvents = function () {
            s.app.event.targetOff(this);
        }),
        (u.prototype._formatToUpper = function (t) {
            for (var e = t.match(/[a-zA-Z0-9]+/g), o = 0; o < e.length; o++) {
                var n = e[o];
                e[o] = n.charAt(0).toUpperCase() + n.slice(1);
            }
            return e.join("");
        }),
        (u.prototype.show = function (t) {
            this._viewData = t;
        }),
        (u.prototype.hide = function () {
            console.log("hide"), s.app.event.targetOff(this);
        }),
        (u.prototype.playIn = function () {
            return Promise.resolve();
        }),
        (u.prototype.initView = function () {}),
        (u.prototype.updateView = function () {}),
        (u.prototype.onDestroy = function () {
            this.btnNodes.length = 0;
        }),
        r([t, l.eventsOnEnable(), l.initOnLoad()], u));
function u() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t._viewData = null), (t.btnNodes = []), t;
}
o.default = l;
