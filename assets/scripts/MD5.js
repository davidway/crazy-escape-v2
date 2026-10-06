var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.prototype.hex_md5 = function (t) {
    return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(t)));
}),
    (n.prototype.b64_md5 = function (t) {
        return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(t)));
    }),
    (n.prototype.any_md5 = function (t, e) {
        return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(t)), e);
    }),
    (n.prototype.hex_hmac_md5 = function (t, e) {
        return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)));
    }),
    (n.prototype.b64_hmac_md5 = function (t, e) {
        return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)));
    }),
    (n.prototype.any_hmac_md5 = function (t, e, o) {
        return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)), o);
    }),
    (n.prototype.md5_vm_test = function () {
        return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase();
    }),
    (n.prototype.rstr_md5 = function (t) {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(t), 8 * t.length));
    }),
    (n.prototype.rstr_hmac_md5 = function (t, e) {
        var o = this.rstr2binl(t);
        16 < o.length && (o = this.binl_md5(o, 8 * t.length));
        for (var n = Array(16), i = Array(16), r = 0; r < 16; r++)
            (n[r] = 909522486 ^ o[r]), (i[r] = 1549556828 ^ o[r]);
        e = this.binl_md5(n.concat(this.rstr2binl(e)), 512 + 8 * e.length);
        return this.binl2rstr(this.binl_md5(i.concat(e), 640));
    }),
    (n.prototype.rstr2hex = function (t) {
        try {
            this.hexcase;
        } catch (t) {
            this.hexcase = 0;
        }
        for (var e, o = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", n = "", i = 0; i < t.length; i++)
            (e = t.charCodeAt(i)), (n += o.charAt((e >>> 4) & 15) + o.charAt(15 & e));
        return n;
    }),
    (n.prototype.rstr2b64 = function (t) {
        try {
            this.b64pad;
        } catch (t) {
            this.b64pad = "";
        }
        for (var e = "", o = t.length, n = 0; n < o; n += 3)
            for (
                var i =
                        (t.charCodeAt(n) << 16) |
                        (n + 1 < o ? t.charCodeAt(n + 1) << 8 : 0) |
                        (n + 2 < o ? t.charCodeAt(n + 2) : 0),
                    r = 0;
                r < 4;
                r++
            )
                8 * n + 6 * r > 8 * t.length
                    ? (e += this.b64pad)
                    : (e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
                          (i >>> (6 * (3 - r))) & 63
                      ));
        return e;
    }),
    (n.prototype.rstr2any = function (t, e) {
        for (var o, n, i, r = e.length, a = Array(Math.ceil(t.length / 2)), s = 0; s < a.length; s++)
            a[s] = (t.charCodeAt(2 * s) << 8) | t.charCodeAt(2 * s + 1);
        for (var l = Math.ceil((8 * t.length) / (Math.log(e.length) / Math.log(2))), c = Array(l), u = 0; u < l; u++) {
            for (i = Array(), s = n = 0; s < a.length; s++)
                (n = (n << 16) + a[s]),
                    (n -= (o = Math.floor(n / r)) * r),
                    (0 < i.length || 0 < o) && (i[i.length] = o);
            (c[u] = n), (a = i);
        }
        var p = "";
        for (s = c.length - 1; 0 <= s; s--) p += e.charAt(c[s]);
        return p;
    }),
    (n.prototype.str2rstr_utf8 = function (t) {
        for (var e, o, n = "", i = -1; ++i < t.length; )
            (e = t.charCodeAt(i)),
                (o = i + 1 < t.length ? t.charCodeAt(i + 1) : 0),
                55296 <= e &&
                    e <= 56319 &&
                    56320 <= o &&
                    o <= 57343 &&
                    ((e = 65536 + ((1023 & e) << 10) + (1023 & o)), i++),
                e <= 127
                    ? (n += String.fromCharCode(e))
                    : e <= 2047
                    ? (n += String.fromCharCode(192 | ((e >>> 6) & 31), 128 | (63 & e)))
                    : e <= 65535
                    ? (n += String.fromCharCode(224 | ((e >>> 12) & 15), 128 | ((e >>> 6) & 63), 128 | (63 & e)))
                    : e <= 2097151 &&
                      (n += String.fromCharCode(
                          240 | ((e >>> 18) & 7),
                          128 | ((e >>> 12) & 63),
                          128 | ((e >>> 6) & 63),
                          128 | (63 & e)
                      ));
        return n;
    }),
    (n.prototype.str2rstr_utf16le = function (t) {
        for (var e = "", o = 0; o < t.length; o++)
            e += String.fromCharCode(255 & t.charCodeAt(o), (t.charCodeAt(o) >>> 8) & 255);
        return e;
    }),
    (n.prototype.str2rstr_utf16be = function (t) {
        for (var e = "", o = 0; o < t.length; o++)
            e += String.fromCharCode((t.charCodeAt(o) >>> 8) & 255, 255 & t.charCodeAt(o));
        return e;
    }),
    (n.prototype.rstr2binl = function (t) {
        for (var e = Array(t.length >> 2), o = 0; o < e.length; o++) e[o] = 0;
        for (o = 0; o < 8 * t.length; o += 8) e[o >> 5] |= (255 & t.charCodeAt(o / 8)) << o % 32;
        return e;
    }),
    (n.prototype.binl2rstr = function (t) {
        for (var e = "", o = 0; o < 32 * t.length; o += 8) e += String.fromCharCode((t[o >> 5] >>> o % 32) & 255);
        return e;
    }),
    (n.prototype.binl_md5 = function (t, e) {
        (t[e >> 5] |= 128 << e % 32), (t[14 + (((e + 64) >>> 9) << 4)] = e);
        for (var o = 1732584193, n = -271733879, i = -1732584194, r = 271733878, a = 0; a < t.length; a += 16) {
            var s = o,
                l = n,
                c = i,
                u = r,
                o = this.md5_ff(o, n, i, r, t[a + 0], 7, -680876936),
                r = this.md5_ff(r, o, n, i, t[a + 1], 12, -389564586),
                i = this.md5_ff(i, r, o, n, t[a + 2], 17, 606105819),
                n = this.md5_ff(n, i, r, o, t[a + 3], 22, -1044525330);
            (o = this.md5_ff(o, n, i, r, t[a + 4], 7, -176418897)),
                (r = this.md5_ff(r, o, n, i, t[a + 5], 12, 1200080426)),
                (i = this.md5_ff(i, r, o, n, t[a + 6], 17, -1473231341)),
                (n = this.md5_ff(n, i, r, o, t[a + 7], 22, -45705983)),
                (o = this.md5_ff(o, n, i, r, t[a + 8], 7, 1770035416)),
                (r = this.md5_ff(r, o, n, i, t[a + 9], 12, -1958414417)),
                (i = this.md5_ff(i, r, o, n, t[a + 10], 17, -42063)),
                (n = this.md5_ff(n, i, r, o, t[a + 11], 22, -1990404162)),
                (o = this.md5_ff(o, n, i, r, t[a + 12], 7, 1804603682)),
                (r = this.md5_ff(r, o, n, i, t[a + 13], 12, -40341101)),
                (i = this.md5_ff(i, r, o, n, t[a + 14], 17, -1502002290)),
                (n = this.md5_ff(n, i, r, o, t[a + 15], 22, 1236535329)),
                (o = this.md5_gg(o, n, i, r, t[a + 1], 5, -165796510)),
                (r = this.md5_gg(r, o, n, i, t[a + 6], 9, -1069501632)),
                (i = this.md5_gg(i, r, o, n, t[a + 11], 14, 643717713)),
                (n = this.md5_gg(n, i, r, o, t[a + 0], 20, -373897302)),
                (o = this.md5_gg(o, n, i, r, t[a + 5], 5, -701558691)),
                (r = this.md5_gg(r, o, n, i, t[a + 10], 9, 38016083)),
                (i = this.md5_gg(i, r, o, n, t[a + 15], 14, -660478335)),
                (n = this.md5_gg(n, i, r, o, t[a + 4], 20, -405537848)),
                (o = this.md5_gg(o, n, i, r, t[a + 9], 5, 568446438)),
                (r = this.md5_gg(r, o, n, i, t[a + 14], 9, -1019803690)),
                (i = this.md5_gg(i, r, o, n, t[a + 3], 14, -187363961)),
                (n = this.md5_gg(n, i, r, o, t[a + 8], 20, 1163531501)),
                (o = this.md5_gg(o, n, i, r, t[a + 13], 5, -1444681467)),
                (r = this.md5_gg(r, o, n, i, t[a + 2], 9, -51403784)),
                (i = this.md5_gg(i, r, o, n, t[a + 7], 14, 1735328473)),
                (n = this.md5_gg(n, i, r, o, t[a + 12], 20, -1926607734)),
                (o = this.md5_hh(o, n, i, r, t[a + 5], 4, -378558)),
                (r = this.md5_hh(r, o, n, i, t[a + 8], 11, -2022574463)),
                (i = this.md5_hh(i, r, o, n, t[a + 11], 16, 1839030562)),
                (n = this.md5_hh(n, i, r, o, t[a + 14], 23, -35309556)),
                (o = this.md5_hh(o, n, i, r, t[a + 1], 4, -1530992060)),
                (r = this.md5_hh(r, o, n, i, t[a + 4], 11, 1272893353)),
                (i = this.md5_hh(i, r, o, n, t[a + 7], 16, -155497632)),
                (n = this.md5_hh(n, i, r, o, t[a + 10], 23, -1094730640)),
                (o = this.md5_hh(o, n, i, r, t[a + 13], 4, 681279174)),
                (r = this.md5_hh(r, o, n, i, t[a + 0], 11, -358537222)),
                (i = this.md5_hh(i, r, o, n, t[a + 3], 16, -722521979)),
                (n = this.md5_hh(n, i, r, o, t[a + 6], 23, 76029189)),
                (o = this.md5_hh(o, n, i, r, t[a + 9], 4, -640364487)),
                (r = this.md5_hh(r, o, n, i, t[a + 12], 11, -421815835)),
                (i = this.md5_hh(i, r, o, n, t[a + 15], 16, 530742520)),
                (n = this.md5_hh(n, i, r, o, t[a + 2], 23, -995338651)),
                (o = this.md5_ii(o, n, i, r, t[a + 0], 6, -198630844)),
                (r = this.md5_ii(r, o, n, i, t[a + 7], 10, 1126891415)),
                (i = this.md5_ii(i, r, o, n, t[a + 14], 15, -1416354905)),
                (n = this.md5_ii(n, i, r, o, t[a + 5], 21, -57434055)),
                (o = this.md5_ii(o, n, i, r, t[a + 12], 6, 1700485571)),
                (r = this.md5_ii(r, o, n, i, t[a + 3], 10, -1894986606)),
                (i = this.md5_ii(i, r, o, n, t[a + 10], 15, -1051523)),
                (n = this.md5_ii(n, i, r, o, t[a + 1], 21, -2054922799)),
                (o = this.md5_ii(o, n, i, r, t[a + 8], 6, 1873313359)),
                (r = this.md5_ii(r, o, n, i, t[a + 15], 10, -30611744)),
                (i = this.md5_ii(i, r, o, n, t[a + 6], 15, -1560198380)),
                (n = this.md5_ii(n, i, r, o, t[a + 13], 21, 1309151649)),
                (o = this.md5_ii(o, n, i, r, t[a + 4], 6, -145523070)),
                (r = this.md5_ii(r, o, n, i, t[a + 11], 10, -1120210379)),
                (i = this.md5_ii(i, r, o, n, t[a + 2], 15, 718787259)),
                (n = this.md5_ii(n, i, r, o, t[a + 9], 21, -343485551)),
                (o = this.safe_add(o, s)),
                (n = this.safe_add(n, l)),
                (i = this.safe_add(i, c)),
                (r = this.safe_add(r, u));
        }
        return [o, n, i, r];
    }),
    (n.prototype.md5_cmn = function (t, e, o, n, i, r) {
        return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e, t), this.safe_add(n, r)), i), o);
    }),
    (n.prototype.md5_ff = function (t, e, o, n, i, r, a) {
        return this.md5_cmn((e & o) | (~e & n), t, e, i, r, a);
    }),
    (n.prototype.md5_gg = function (t, e, o, n, i, r, a) {
        return this.md5_cmn((e & n) | (o & ~n), t, e, i, r, a);
    }),
    (n.prototype.md5_hh = function (t, e, o, n, i, r, a) {
        return this.md5_cmn(e ^ o ^ n, t, e, i, r, a);
    }),
    (n.prototype.md5_ii = function (t, e, o, n, i, r, a) {
        return this.md5_cmn(o ^ (e | ~n), t, e, i, r, a);
    }),
    (n.prototype.safe_add = function (t, e) {
        var o = (65535 & t) + (65535 & e);
        return (((t >> 16) + (e >> 16) + (o >> 16)) << 16) | (65535 & o);
    }),
    (n.prototype.bit_rol = function (t, e) {
        return (t << e) | (t >>> (32 - e));
    }),
    (e = n);
function n() {
    (this.hexcase = 0), (this.b64pad = "");
}
o.default = e;
