var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("BitEncrypt"),
    t =
        ((i.prototype.read = function (t) {
            if (null != t) {
                var e = this.encrypt(t),
                    e = cc.sys.localStorage.getItem(e);
                if (e) {
                    var o = this.decryption(e);
                    return (n = JSON.parse(o))[t];
                }
                o = cc.sys.localStorage.getItem(t);
                if (o) {
                    var n = JSON.parse(o);
                    return this.save(t, n[t]), n[t];
                }
            }
            return null;
        }),
        (i.prototype.save = function (t, e) {
            try {
                var o, n, i, r;
                null != t &&
                    (((o = {})[t] = e),
                    cc.sys.isBrowser && ((n = JSON.stringify(o)), cc.sys.localStorage.setItem(t, n)),
                    (i = this.encrypt(t)),
                    (r = this.encrypt(o)),
                    cc.sys.localStorage.setItem(i, r));
            } catch (t) {
                cc.error(t);
            }
        }),
        (i.prototype.clear = function () {
            return cc.sys.localStorage.clear();
        }),
        (i.prototype.rm = function (t) {
            if (null != t) return cc.sys.localStorage.removeItem(t);
        }),
        (i.prototype.encrypt = function (t) {
            return n.BitEncrypt.encode(JSON.stringify(t), this.key);
        }),
        (i.prototype.decryption = function (t) {
            return n.BitEncrypt.decode(t, this.key);
        }),
        (i._inst = null),
        i);
function i() {
    (this.key = "35JQ6DwHsz6XXciPa"), i._inst ? console.error("StorageMgr 重复创建") : (i._inst = this);
}
o.default = t;
