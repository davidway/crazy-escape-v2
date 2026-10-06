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
    s = t("EventTypes"),
    l = t("ConfData"),
    c = t("GameSetting"),
    u = t("EffectMgr"),
    i =
        ((r = e.Singleton()),
        i(p, r),
        Object.defineProperty(p.prototype, "isEject", {
            get: function () {
                return this._isEject;
            },
            set: function (t) {
                this._isEject = t;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(p.prototype, "showNoticeBtn", {
            get: function () {
                return this._showNoticeBtn;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(p.prototype, "NoticeData", {
            get: function () {
                return this._NoticeData;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(p.prototype, "text", {
            get: function () {
                return this._text;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(p.prototype, "renew", {
            get: function () {
                return this._renew;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(p.prototype, "reward", {
            get: function () {
                return this._reward;
            },
            enumerable: !1,
            configurable: !0
        }),
        (p.prototype.initData = function () {
            console.log(cc.sys.isBrowser, !0);
            var t = l.default.inst.NoticeConf.noticeData;
            cc.sys.isBrowser &&
                ((c.GameSetting.inst.Notice_version = t.Notice_version),
                (c.GameSetting.inst.Notice_text_front = t.Notice_text_front),
                (c.GameSetting.inst.Notice_text_after = t.Notice_text_after),
                (c.GameSetting.inst.Notice_start_time = t.Notice_start_time),
                (c.GameSetting.inst.Notice_end_time = t.Notice_end_time),
                (c.GameSetting.inst.Notice_reward = t.Notice_reward),
                (c.GameSetting.inst.Notice_everyday_show = t.Notice_everyday_show),
                (c.GameSetting.inst.Notice_index = t.Notice_index)),
                "" == c.GameSetting.inst.Notice_text_front &&
                    (c.GameSetting.inst.Notice_text_front = t.Notice_text_front),
                "" == c.GameSetting.inst.Notice_text_after &&
                    (c.GameSetting.inst.Notice_text_after = t.Notice_text_after);
            var e = new Date(),
                o = e.getFullYear() + "" + (e.getMonth() + 1) + e.getDate();
            parseInt(c.GameSetting.inst.Notice_start_time) <= parseInt(o) &&
            parseInt(o) < parseInt(c.GameSetting.inst.Notice_end_time)
                ? (this._showNoticeBtn = !0)
                : (this._showNoticeBtn = !1),
                this.clickTest || (this._version = c.GameSetting.inst.Client_version),
                this._showNoticeBtn &&
                    ((this._NoticeData = this.getStorageData()),
                    (t = c.GameSetting.inst.Notice_reward),
                    (this._reward = l.default.inst.PrizeConf.getRewardData(t)),
                    (e = ""),
                    (e =
                        0 == this._renew ? c.GameSetting.inst.Notice_text_front : c.GameSetting.inst.Notice_text_after),
                    (o = (e = 0 == c.GameSetting.inst.use_foresee ? c.GameSetting.inst.Notice_text_after : e).indexOf(
                        "1"
                    )),
                    (t = e.indexOf("2")),
                    -1 != o && -1 != t && (this._text[0] = e.slice(o + 2, t)),
                    (o = e.indexOf("2")),
                    (t = e.indexOf("3")),
                    -1 != o && -1 != t && (this._text[1] = e.slice(o + 2, t)),
                    -1 != (o = e.indexOf("3")) && (this._text[2] = e.slice(o + 2)),
                    console.log(this._text));
        }),
        (p.prototype.getReward = function () {
            l.default.inst.PrizeConf.addReward(this._reward),
                (this._NoticeData.reward = 1),
                this.setStorageData(this._NoticeData),
                a.app.event.emit(s.EventType.Battle_Notice_Change);
        }),
        (p.prototype.getStorageData = function () {
            this._getRewardVersion = c.GameSetting.inst.Notice_version;
            var t = a.app.local.getValue("NoticeData");
            console.log(t);
            var e = new Date(),
                e = e.getFullYear() + "" + e.getMonth() + e.getDate();
            return (
                t
                    ? this._version == this._getRewardVersion
                        ? ((this._renew = 1),
                          t.version != this._version
                              ? ((t = {version: this._version, reward: 0, date: e, prompt: 0}),
                                this.setStorageData(t),
                                (this._isEject = !1))
                              : (t.date != e && 0 == t.reward
                                    ? ((this._isEject = !1), (t.date = e), this.setStorageData(t))
                                    : (this._isEject = !0),
                                0 == c.GameSetting.inst.Notice_everyday_show && (this._isEject = !0)))
                        : ((this._renew = 0),
                          (t = {version: this._version, reward: 0, date: e, prompt: 0}),
                          this.setStorageData(t),
                          t.date != e ? (this._isEject = !1) : (this._isEject = !0),
                          0 == c.GameSetting.inst.Notice_everyday_show && (this._isEject = !0))
                    : (this._version == this._getRewardVersion ? (this._renew = 1) : (this._renew = 0),
                      (t = {version: this._version, reward: 0, date: e, prompt: 0}),
                      this.setStorageData(t),
                      (this._isEject = !1),
                      0 == c.GameSetting.inst.Notice_everyday_show && (this._isEject = !0)),
                t
            );
        }),
        (p.prototype.setPrompt = function () {
            (this._NoticeData.prompt = 1), this.setStorageData(this._NoticeData);
        }),
        (p.prototype.setStorageData = function (t) {
            a.app.local.setValue("NoticeData", t);
        }),
        (p.prototype.setNoticeVersion = function (t) {
            t > this._getRewardVersion
                ? u.default.inst.showTips("客户端版本不可大于公告版本，公告版本" + this._getRewardVersion)
                : ((this.clickTest = !0),
                  (this._version = t),
                  this.initData(),
                  a.app.event.emit(s.EventType.Battle_Notice_Change));
        }),
        p);
function p() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (
        (t._reward = []),
        (t._showNoticeBtn = !0),
        (t._renew = 0),
        (t._isEject = !1),
        (t._version = "1.6"),
        (t._getRewardVersion = ""),
        (t._NoticeData = null),
        (t._text = []),
        (t.clickTest = !1),
        t
    );
}
o.default = i;
