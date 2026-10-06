var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
Object.defineProperty(n.prototype, "noticeData", {
    get: function () {
        return this._noticeData;
    },
    enumerable: !1,
    configurable: !0
}),
    (n.prototype.parseJson = function (t, e) {
        (this._noticeData = e.noticeData[0]),
            (this._noticeData.Notice_end_time += ""),
            (this._noticeData.Notice_start_time += ""),
            console.log("[NoticeConf]", this._noticeData);
    }),
    (e = n);
function n() {
    this._noticeData = null;
}
o.default = e;
