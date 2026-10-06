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
    a = t("App"),
    e = t("Singleton"),
    s = t("NetHelper"),
    i =
        ((r = e.Singleton()),
        i(l, r),
        (l.prototype.parse = function (t, e) {
            var o;
            e
                ? (1 == (o = e.gamedata) && e.encrypt && (o = this.decrypt(e.encrypt)),
                  console.log("数据解析:", e, o),
                  a.app.local.setData(1 == o ? null : o))
                : a.app.local.setData(null);
        }),
        (l.prototype.postData = function (t) {
            !cc.sys.isBrowser &&
                t &&
                ((t = this.encrypt(t)), a.app.http.send(s.default.setData, {encrypt: t, gamedata: 1}));
        }),
        (l.prototype.initOption = function (t) {
            if (!cc.sys.isBrowser) {
                if (((this.CryptoJS = window.CryptoJS), 2 == t)) {
                    t = a.app.http.getOpenid();
                    if (t) {
                        t = (t + this.aesKey).substring(0, 32);
                        return (
                            (this.key = this.CryptoJS.enc.Utf8.parse(t)),
                            void (this.option = {
                                iv: this.CryptoJS.enc.Utf8.parse(t.substring(0, 16)),
                                mode: this.CryptoJS.mode.CBC,
                                padding: this.CryptoJS.pad.Pkcs7
                            })
                        );
                    }
                }
                (this.key = this.CryptoJS.enc.Utf8.parse(this.aesKey)),
                    (this.option = {
                        iv: this.CryptoJS.enc.Utf8.parse(this.aesKey.substring(0, 16)),
                        mode: this.CryptoJS.mode.CBC,
                        padding: this.CryptoJS.pad.Pkcs7
                    });
            }
        }),
        (l.prototype.encrypt = function (t) {
            return this.CryptoJS.AES.encrypt(JSON.stringify(t), this.key, this.option).toString();
        }),
        (l.prototype.decrypt = function (t) {
            (t = this.CryptoJS.AES.decrypt(t, this.key, this.option)),
                (t = JSON.parse(t.toString(this.CryptoJS.enc.Utf8)));
            return console.log("数据：", t), t;
        }),
        l);
function l() {
    var t = r.call(this) || this;
    return (
        (t.aesKey = "e10adc3949ba59abbe56e057f20f883e"),
        (t.key = ""),
        (t.option = null),
        (t.CryptoJS = null),
        cc.sys.isBrowser ||
            ((t.CryptoJS = window.CryptoJS),
            (t.key = t.CryptoJS.enc.Utf8.parse(t.aesKey)),
            (t.option = {
                iv: t.CryptoJS.enc.Utf8.parse(t.aesKey.substring(0, 16)),
                mode: t.CryptoJS.mode.CBC,
                padding: t.CryptoJS.pad.Pkcs7
            })),
        t
    );
}
o.default = i;
