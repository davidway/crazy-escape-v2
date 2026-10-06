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
    s = t("ArrayUtil"),
    i =
        ((r = e.Singleton()),
        i(l, r),
        (l.prototype.initData = function () {
            this._game = a.app.local.getValue("game");
            for (var t = 0, e = this.keys; t < e.length; t++) {
                var o = e[t];
                null == this._game[o] && (this._game[o] = "skills" == o || "goods" == o ? [] : 0);
            }
            console.log("游戏数据:", this._game, a.app.local.getValue("game"));
        }),
        (l.prototype.clear = function () {
            (this._game.chapter = 0),
                (this._game.time = 0),
                (this._game.round = 0),
                (this._game.level = 1),
                (this._game.exp = 0),
                (this._game.killNum = 0),
                (this._game.revive = 0),
                (this._game.skills = []),
                (this._game.equips = []),
                (this._game.bossNum = 0),
                (this._game.goddessHp = 0),
                (this._game.hp = 0),
                (this._game.speed_flag = 0),
                (this._game.goods = []),
                a.app.local.setValue("game", this._game);
        }),
        Object.defineProperty(l.prototype, "game", {
            get: function () {
                return this._game;
            },
            set: function (t) {
                this._game = t;
                for (var e = 0, o = this.keys; e < o.length; e++) {
                    var n = o[e];
                    null == this._game[n] && (this._game[n] = "skills" == n || "goods" == n ? [] : 0);
                }
                a.app.local.setValue("game", this._game);
            },
            enumerable: !1,
            configurable: !0
        }),
        (l.prototype.getValue = function (t) {
            return this._game[t];
        }),
        (l.prototype.setSpeedFlag = function (t) {
            (this._game.speed_flag = t), a.app.local.setValue("game", this._game);
        }),
        (l.prototype.setChapter = function (t) {
            (this._game.chapter = t), a.app.local.setValue("game", this._game);
        }),
        (l.prototype.setTime = function (t) {
            (this._game.time = t), a.app.local.setValue("game", this._game);
        }),
        (l.prototype.setRound = function (t) {
            (this._game.round = t), a.app.local.setValue("game", this._game);
        }),
        (l.prototype.setRevive = function (t) {
            (this._game.revive = t), a.app.local.setValue("game", this._game);
        }),
        (l.prototype.setKillNum = function (t) {
            (this._game.killNum = t), a.app.local.setValue("game", this._game);
        }),
        (l.prototype.setBossNum = function (t) {
            (this._game.bossNum = t), a.app.local.setValue("game", this._game);
        }),
        (l.prototype.setLevelAndExp = function (t, e) {
            (this._game.level = t), (this._game.exp = e), a.app.local.setValue("game", this._game);
        }),
        (l.prototype.setGoddessHp = function (t) {
            (this._game.goddessHp = t), a.app.local.setValue("game", this._game);
        }),
        (l.prototype.setHeroHp = function (t) {
            (this._game.hp = t), a.app.local.setValue("game", this._game);
        }),
        (l.prototype.addSkill = function (t, e) {
            for (var o = !1, n = 0; n < this._game.skills.length; n++)
                if (this._game.skills[n].id == t) {
                    (this._game.skills[n].level = e), (o = !0);
                    break;
                }
            o || this._game.skills.push({id: t, level: e}), a.app.local.setValue("game", this._game);
        }),
        (l.prototype.delSkill = function (t) {
            for (var e = -1, o = 0; o < this._game.skills.length; o++)
                if (this._game.skills[o].id == t) {
                    e = o;
                    break;
                }
            -1 != e && this._game.skills.splice(e, 1), a.app.local.setValue("game", this._game);
        }),
        (l.prototype.setGold = function (t) {
            (this._game.gold = t), a.app.local.setValue("game", this._game);
        }),
        (l.prototype.setEquips = function (t) {
            this._game.equips = s.default.clone(t);
        }),
        (l.prototype.setDrawings = function (t) {
            this._game.drawings = s.default.clone(t);
        }),
        (l.prototype.setGoods = function (t) {
            this._game.goods = s.default.clone(t);
        }),
        l);
function l() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (
        (t.keys = [
            "chapter",
            "time",
            "round",
            "level",
            "exp",
            "killNum",
            "revive",
            "skills",
            "bossNum",
            "goddessHp",
            "hp",
            "speed_flag",
            "goods"
        ]),
        (t._game = null),
        t
    );
}
o.default = i;
