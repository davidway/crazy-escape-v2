var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.BitEncrypt = void 0);
Object.defineProperty(n.prototype, "encryptKey", {
    get: function () {
        return this._encryptKey;
    },
    set: function (t) {
        this._encryptKey = t;
    },
    enumerable: !1,
    configurable: !0
}),
    (n.prototype.decode = function (t, e) {
        return this._code(t, e);
    }),
    (n.prototype.encode = function (t, e) {
        return this._code(t, e);
    }),
    (n.prototype._code = function (t, e) {
        var o = this._check(t, e);
        if (o.isOK) {
            for (var n = [], i = 0; i < t.length; i++) n.push(t.charCodeAt(i));
            for (var r = 0, a = /[\w\d_-`~#!$%^&*(){}=+;:'"<,>,/?|\\\u4e00-\u9fa5]/g, i = 0; i < n.length; i++) {
                var s = t[i].match(a);
                s &&
                    0 < s.length &&
                    ((n[i] ^= o.key.charCodeAt(r)),
                    ((s = String.fromCharCode(n[i]).match(a)) && s.length) || (n[i] ^= o.key.charCodeAt(r)),
                    ++r >= o.key.length && (r = 0));
            }
            var l = "";
            for (i = 0; i < n.length; i++) l += String.fromCharCode(n[i]);
            return l;
        }
        return t;
    }),
    (n.prototype._check = function (t, e) {
        return t && 0 < t.length
            ? e && 0 < e.length
                ? {isOK: !0, key: e}
                : this.encryptKey && 0 < this.encryptKey.length
                ? {isOK: !0, key: this.encryptKey}
                : {isOK: !1, key: ""}
            : {isOK: !1, key: ""};
    }),
    (e = n);
function n() {
    (this.logTag = "[BitEncrypt]:"), (this._encryptKey = "EskKbMvzZBILhcTv");
}
o.BitEncrypt = new e();
