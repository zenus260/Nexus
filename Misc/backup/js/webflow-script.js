/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var br = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, v) {
        var I = new ve.Bare();
        return I.init(l, v);
      }
      function n(l) {
        return l.replace(/[A-Z]/g, function (v) {
          return "-" + v.toLowerCase();
        });
      }
      function r(l) {
        var v = parseInt(l.slice(1), 16),
          I = (v >> 16) & 255,
          A = (v >> 8) & 255,
          P = 255 & v;
        return [I, A, P];
      }
      function o(l, v, I) {
        return (
          "#" + ((1 << 24) | (l << 16) | (v << 8) | I).toString(16).slice(1)
        );
      }
      function i() {}
      function a(l, v) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof v + "] " + v);
      }
      function u(l, v, I) {
        f("Units do not match [" + l + "]: " + v + ", " + I);
      }
      function s(l, v, I) {
        if ((v !== void 0 && (I = v), l === void 0)) return I;
        var A = I;
        return (
          Je.test(l) || !Be.test(l)
            ? (A = parseInt(l, 10))
            : Be.test(l) && (A = 1e3 * parseFloat(l)),
          0 > A && (A = 0),
          A === A ? A : I
        );
      }
      function f(l) {
        z.debug && window && window.console.warn(l);
      }
      function E(l) {
        for (var v = -1, I = l ? l.length : 0, A = []; ++v < I; ) {
          var P = l[v];
          P && A.push(P);
        }
        return A;
      }
      var h = (function (l, v, I) {
          function A(te) {
            return typeof te == "object";
          }
          function P(te) {
            return typeof te == "function";
          }
          function w() {}
          function Y(te, Q) {
            function F() {
              var Oe = new re();
              return P(Oe.init) && Oe.init.apply(Oe, arguments), Oe;
            }
            function re() {}
            Q === I && ((Q = te), (te = Object)), (F.Bare = re);
            var oe,
              he = (w[l] = te[l]),
              Pe = (re[l] = F[l] = new w());
            return (
              (Pe.constructor = F),
              (F.mixin = function (Oe) {
                return (re[l] = F[l] = Y(F, Oe)[l]), F;
              }),
              (F.open = function (Oe) {
                if (
                  ((oe = {}),
                  P(Oe) ? (oe = Oe.call(F, Pe, he, F, te)) : A(Oe) && (oe = Oe),
                  A(oe))
                )
                  for (var Wt in oe) v.call(oe, Wt) && (Pe[Wt] = oe[Wt]);
                return P(Pe.init) || (Pe.init = te), F;
              }),
              F.open(Q)
            );
          }
          return Y;
        })("prototype", {}.hasOwnProperty),
        p = {
          ease: [
            "ease",
            function (l, v, I, A) {
              var P = (l /= A) * l,
                w = P * l;
              return (
                v +
                I * (-2.75 * w * P + 11 * P * P + -15.5 * w + 8 * P + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, v, I, A) {
              var P = (l /= A) * l,
                w = P * l;
              return v + I * (-1 * w * P + 3 * P * P + -3 * w + 2 * P);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, v, I, A) {
              var P = (l /= A) * l,
                w = P * l;
              return (
                v +
                I * (0.3 * w * P + -1.6 * P * P + 2.2 * w + -1.8 * P + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, v, I, A) {
              var P = (l /= A) * l,
                w = P * l;
              return v + I * (2 * w * P + -5 * P * P + 2 * w + 2 * P);
            },
          ],
          linear: [
            "linear",
            function (l, v, I, A) {
              return (I * l) / A + v;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, v, I, A) {
              return I * (l /= A) * l + v;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, v, I, A) {
              return -I * (l /= A) * (l - 2) + v;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, v, I, A) {
              return (l /= A / 2) < 1
                ? (I / 2) * l * l + v
                : (-I / 2) * (--l * (l - 2) - 1) + v;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, v, I, A) {
              return I * (l /= A) * l * l + v;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, v, I, A) {
              return I * ((l = l / A - 1) * l * l + 1) + v;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, v, I, A) {
              return (l /= A / 2) < 1
                ? (I / 2) * l * l * l + v
                : (I / 2) * ((l -= 2) * l * l + 2) + v;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, v, I, A) {
              return I * (l /= A) * l * l * l + v;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, v, I, A) {
              return -I * ((l = l / A - 1) * l * l * l - 1) + v;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, v, I, A) {
              return (l /= A / 2) < 1
                ? (I / 2) * l * l * l * l + v
                : (-I / 2) * ((l -= 2) * l * l * l - 2) + v;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, v, I, A) {
              return I * (l /= A) * l * l * l * l + v;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, v, I, A) {
              return I * ((l = l / A - 1) * l * l * l * l + 1) + v;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, v, I, A) {
              return (l /= A / 2) < 1
                ? (I / 2) * l * l * l * l * l + v
                : (I / 2) * ((l -= 2) * l * l * l * l + 2) + v;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, v, I, A) {
              return -I * Math.cos((l / A) * (Math.PI / 2)) + I + v;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, v, I, A) {
              return I * Math.sin((l / A) * (Math.PI / 2)) + v;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, v, I, A) {
              return (-I / 2) * (Math.cos((Math.PI * l) / A) - 1) + v;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, v, I, A) {
              return l === 0 ? v : I * Math.pow(2, 10 * (l / A - 1)) + v;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, v, I, A) {
              return l === A
                ? v + I
                : I * (-Math.pow(2, (-10 * l) / A) + 1) + v;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, v, I, A) {
              return l === 0
                ? v
                : l === A
                ? v + I
                : (l /= A / 2) < 1
                ? (I / 2) * Math.pow(2, 10 * (l - 1)) + v
                : (I / 2) * (-Math.pow(2, -10 * --l) + 2) + v;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, v, I, A) {
              return -I * (Math.sqrt(1 - (l /= A) * l) - 1) + v;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, v, I, A) {
              return I * Math.sqrt(1 - (l = l / A - 1) * l) + v;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, v, I, A) {
              return (l /= A / 2) < 1
                ? (-I / 2) * (Math.sqrt(1 - l * l) - 1) + v
                : (I / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + v;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, v, I, A, P) {
              return (
                P === void 0 && (P = 1.70158),
                I * (l /= A) * l * ((P + 1) * l - P) + v
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, v, I, A, P) {
              return (
                P === void 0 && (P = 1.70158),
                I * ((l = l / A - 1) * l * ((P + 1) * l + P) + 1) + v
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, v, I, A, P) {
              return (
                P === void 0 && (P = 1.70158),
                (l /= A / 2) < 1
                  ? (I / 2) * l * l * (((P *= 1.525) + 1) * l - P) + v
                  : (I / 2) *
                      ((l -= 2) * l * (((P *= 1.525) + 1) * l + P) + 2) +
                    v
              );
            },
          ],
        },
        g = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        m = document,
        y = window,
        O = "bkwld-tram",
        _ = /[\-\.0-9]/g,
        S = /[A-Z]/,
        b = "number",
        R = /^(rgb|#)/,
        L = /(em|cm|mm|in|pt|pc|px)$/,
        N = /(em|cm|mm|in|pt|pc|px|%)$/,
        V = /(deg|rad|turn)$/,
        X = "unitless",
        W = /(all|none) 0s ease 0s/,
        j = /^(width|height)$/,
        J = " ",
        D = m.createElement("a"),
        T = ["Webkit", "Moz", "O", "ms"],
        M = ["-webkit-", "-moz-", "-o-", "-ms-"],
        k = function (l) {
          if (l in D.style) return { dom: l, css: l };
          var v,
            I,
            A = "",
            P = l.split("-");
          for (v = 0; v < P.length; v++)
            A += P[v].charAt(0).toUpperCase() + P[v].slice(1);
          for (v = 0; v < T.length; v++)
            if (((I = T[v] + A), I in D.style))
              return { dom: I, css: M[v] + l };
        },
        U = (t.support = {
          bind: Function.prototype.bind,
          transform: k("transform"),
          transition: k("transition"),
          backface: k("backface-visibility"),
          timing: k("transition-timing-function"),
        });
      if (U.transition) {
        var ee = U.timing.dom;
        if (((D.style[ee] = p["ease-in-back"][0]), !D.style[ee]))
          for (var Z in g) p[Z][0] = g[Z];
      }
      var ue = (t.frame = (function () {
          var l =
            y.requestAnimationFrame ||
            y.webkitRequestAnimationFrame ||
            y.mozRequestAnimationFrame ||
            y.oRequestAnimationFrame ||
            y.msRequestAnimationFrame;
          return l && U.bind
            ? l.bind(y)
            : function (v) {
                y.setTimeout(v, 16);
              };
        })()),
        me = (t.now = (function () {
          var l = y.performance,
            v = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return v && U.bind
            ? v.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        Ne = h(function (l) {
          function v($, se) {
            var pe = E(("" + $).split(J)),
              ce = pe[0];
            se = se || {};
            var be = q[ce];
            if (!be) return f("Unsupported property: " + ce);
            if (!se.weak || !this.props[ce]) {
              var xe = be[0],
                Se = this.props[ce];
              return (
                Se || (Se = this.props[ce] = new xe.Bare()),
                Se.init(this.$el, pe, be, se),
                Se
              );
            }
          }
          function I($, se, pe) {
            if ($) {
              var ce = typeof $;
              if (
                (se ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                ce == "number" && se)
              )
                return (
                  (this.timer = new ie({
                    duration: $,
                    context: this,
                    complete: w,
                  })),
                  void (this.active = !0)
                );
              if (ce == "string" && se) {
                switch ($) {
                  case "hide":
                    F.call(this);
                    break;
                  case "stop":
                    Y.call(this);
                    break;
                  case "redraw":
                    re.call(this);
                    break;
                  default:
                    v.call(this, $, pe && pe[1]);
                }
                return w.call(this);
              }
              if (ce == "function") return void $.call(this, this);
              if (ce == "object") {
                var be = 0;
                Pe.call(
                  this,
                  $,
                  function (_e, aE) {
                    _e.span > be && (be = _e.span), _e.stop(), _e.animate(aE);
                  },
                  function (_e) {
                    "wait" in _e && (be = s(_e.wait, 0));
                  }
                ),
                  he.call(this),
                  be > 0 &&
                    ((this.timer = new ie({ duration: be, context: this })),
                    (this.active = !0),
                    se && (this.timer.complete = w));
                var xe = this,
                  Se = !1,
                  hn = {};
                ue(function () {
                  Pe.call(xe, $, function (_e) {
                    _e.active && ((Se = !0), (hn[_e.name] = _e.nextStyle));
                  }),
                    Se && xe.$el.css(hn);
                });
              }
            }
          }
          function A($) {
            ($ = s($, 0)),
              this.active
                ? this.queue.push({ options: $ })
                : ((this.timer = new ie({
                    duration: $,
                    context: this,
                    complete: w,
                  })),
                  (this.active = !0));
          }
          function P($) {
            return this.active
              ? (this.queue.push({ options: $, args: arguments }),
                void (this.timer.complete = w))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function w() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var $ = this.queue.shift();
              I.call(this, $.options, !0, $.args);
            }
          }
          function Y($) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var se;
            typeof $ == "string"
              ? ((se = {}), (se[$] = 1))
              : (se = typeof $ == "object" && $ != null ? $ : this.props),
              Pe.call(this, se, Oe),
              he.call(this);
          }
          function te($) {
            Y.call(this, $), Pe.call(this, $, Wt, iE);
          }
          function Q($) {
            typeof $ != "string" && ($ = "block"), (this.el.style.display = $);
          }
          function F() {
            Y.call(this), (this.el.style.display = "none");
          }
          function re() {
            this.el.offsetHeight;
          }
          function oe() {
            Y.call(this), e.removeData(this.el, O), (this.$el = this.el = null);
          }
          function he() {
            var $,
              se,
              pe = [];
            this.upstream && pe.push(this.upstream);
            for ($ in this.props)
              (se = this.props[$]), se.active && pe.push(se.string);
            (pe = pe.join(",")),
              this.style !== pe &&
                ((this.style = pe), (this.el.style[U.transition.dom] = pe));
          }
          function Pe($, se, pe) {
            var ce,
              be,
              xe,
              Se,
              hn = se !== Oe,
              _e = {};
            for (ce in $)
              (xe = $[ce]),
                ce in fe
                  ? (_e.transform || (_e.transform = {}),
                    (_e.transform[ce] = xe))
                  : (S.test(ce) && (ce = n(ce)),
                    ce in q ? (_e[ce] = xe) : (Se || (Se = {}), (Se[ce] = xe)));
            for (ce in _e) {
              if (((xe = _e[ce]), (be = this.props[ce]), !be)) {
                if (!hn) continue;
                be = v.call(this, ce);
              }
              se.call(this, be, xe);
            }
            pe && Se && pe.call(this, Se);
          }
          function Oe($) {
            $.stop();
          }
          function Wt($, se) {
            $.set(se);
          }
          function iE($) {
            this.$el.css($);
          }
          function De($, se) {
            l[$] = function () {
              return this.children
                ? oE.call(this, se, arguments)
                : (this.el && se.apply(this, arguments), this);
            };
          }
          function oE($, se) {
            var pe,
              ce = this.children.length;
            for (pe = 0; ce > pe; pe++) $.apply(this.children[pe], se);
            return this;
          }
          (l.init = function ($) {
            if (
              ((this.$el = e($)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              z.keepInherited && !z.fallback)
            ) {
              var se = x(this.el, "transition");
              se && !W.test(se) && (this.upstream = se);
            }
            U.backface &&
              z.hideBackface &&
              d(this.el, U.backface.css, "hidden");
          }),
            De("add", v),
            De("start", I),
            De("wait", A),
            De("then", P),
            De("next", w),
            De("stop", Y),
            De("set", te),
            De("show", Q),
            De("hide", F),
            De("redraw", re),
            De("destroy", oe);
        }),
        ve = h(Ne, function (l) {
          function v(I, A) {
            var P = e.data(I, O) || e.data(I, O, new Ne.Bare());
            return P.el || P.init(I), A ? P.start(A) : P;
          }
          l.init = function (I, A) {
            var P = e(I);
            if (!P.length) return this;
            if (P.length === 1) return v(P[0], A);
            var w = [];
            return (
              P.each(function (Y, te) {
                w.push(v(te, A));
              }),
              (this.children = w),
              this
            );
          };
        }),
        C = h(function (l) {
          function v() {
            var w = this.get();
            this.update("auto");
            var Y = this.get();
            return this.update(w), Y;
          }
          function I(w, Y, te) {
            return Y !== void 0 && (te = Y), w in p ? w : te;
          }
          function A(w) {
            var Y = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(w);
            return (Y ? o(Y[1], Y[2], Y[3]) : w).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var P = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (w, Y, te, Q) {
            (this.$el = w), (this.el = w[0]);
            var F = Y[0];
            te[2] && (F = te[2]),
              H[F] && (F = H[F]),
              (this.name = F),
              (this.type = te[1]),
              (this.duration = s(Y[1], this.duration, P.duration)),
              (this.ease = I(Y[2], this.ease, P.ease)),
              (this.delay = s(Y[3], this.delay, P.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = j.test(this.name)),
              (this.unit = Q.unit || this.unit || z.defaultUnit),
              (this.angle = Q.angle || this.angle || z.defaultAngle),
              z.fallback || Q.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    J +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? J + p[this.ease][0] : "") +
                    (this.delay ? J + this.delay + "ms" : "")));
          }),
            (l.set = function (w) {
              (w = this.convert(w, this.type)), this.update(w), this.redraw();
            }),
            (l.transition = function (w) {
              (this.active = !0),
                (w = this.convert(w, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  w == "auto" && (w = v.call(this))),
                (this.nextStyle = w);
            }),
            (l.fallback = function (w) {
              var Y =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (w = this.convert(w, this.type)),
                this.auto &&
                  (Y == "auto" && (Y = this.convert(this.get(), this.type)),
                  w == "auto" && (w = v.call(this))),
                (this.tween = new ne({
                  from: Y,
                  to: w,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return x(this.el, this.name);
            }),
            (l.update = function (w) {
              d(this.el, this.name, w);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                d(this.el, this.name, this.get()));
              var w = this.tween;
              w && w.context && w.destroy();
            }),
            (l.convert = function (w, Y) {
              if (w == "auto" && this.auto) return w;
              var te,
                Q = typeof w == "number",
                F = typeof w == "string";
              switch (Y) {
                case b:
                  if (Q) return w;
                  if (F && w.replace(_, "") === "") return +w;
                  te = "number(unitless)";
                  break;
                case R:
                  if (F) {
                    if (w === "" && this.original) return this.original;
                    if (Y.test(w))
                      return w.charAt(0) == "#" && w.length == 7 ? w : A(w);
                  }
                  te = "hex or rgb string";
                  break;
                case L:
                  if (Q) return w + this.unit;
                  if (F && Y.test(w)) return w;
                  te = "number(px) or string(unit)";
                  break;
                case N:
                  if (Q) return w + this.unit;
                  if (F && Y.test(w)) return w;
                  te = "number(px) or string(unit or %)";
                  break;
                case V:
                  if (Q) return w + this.angle;
                  if (F && Y.test(w)) return w;
                  te = "number(deg) or string(angle)";
                  break;
                case X:
                  if (Q || (F && N.test(w))) return w;
                  te = "number(unitless) or string(unit or %)";
              }
              return a(te, w), w;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        B = h(C, function (l, v) {
          l.init = function () {
            v.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), R));
          };
        }),
        K = h(C, function (l, v) {
          (l.init = function () {
            v.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (I) {
              this.$el[this.name](I);
            });
        }),
        G = h(C, function (l, v) {
          function I(A, P) {
            var w, Y, te, Q, F;
            for (w in A)
              (Q = fe[w]),
                (te = Q[0]),
                (Y = Q[1] || w),
                (F = this.convert(A[w], te)),
                P.call(this, Y, F, te);
          }
          (l.init = function () {
            v.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                fe.perspective &&
                  z.perspective &&
                  ((this.current.perspective = z.perspective),
                  d(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (A) {
              I.call(this, A, function (P, w) {
                this.current[P] = w;
              }),
                d(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (A) {
              var P = this.values(A);
              this.tween = new ae({
                current: this.current,
                values: P,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var w,
                Y = {};
              for (w in this.current) Y[w] = w in P ? P[w] : this.current[w];
              (this.active = !0), (this.nextStyle = this.style(Y));
            }),
            (l.fallback = function (A) {
              var P = this.values(A);
              this.tween = new ae({
                current: this.current,
                values: P,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              d(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (A) {
              var P,
                w = "";
              for (P in A) w += P + "(" + A[P] + ") ";
              return w;
            }),
            (l.values = function (A) {
              var P,
                w = {};
              return (
                I.call(this, A, function (Y, te, Q) {
                  (w[Y] = te),
                    this.current[Y] === void 0 &&
                      ((P = 0),
                      ~Y.indexOf("scale") && (P = 1),
                      (this.current[Y] = this.convert(P, Q)));
                }),
                w
              );
            });
        }),
        ne = h(function (l) {
          function v(F) {
            te.push(F) === 1 && ue(I);
          }
          function I() {
            var F,
              re,
              oe,
              he = te.length;
            if (he)
              for (ue(I), re = me(), F = he; F--; )
                (oe = te[F]), oe && oe.render(re);
          }
          function A(F) {
            var re,
              oe = e.inArray(F, te);
            oe >= 0 &&
              ((re = te.slice(oe + 1)),
              (te.length = oe),
              re.length && (te = te.concat(re)));
          }
          function P(F) {
            return Math.round(F * Q) / Q;
          }
          function w(F, re, oe) {
            return o(
              F[0] + oe * (re[0] - F[0]),
              F[1] + oe * (re[1] - F[1]),
              F[2] + oe * (re[2] - F[2])
            );
          }
          var Y = { ease: p.ease[1], from: 0, to: 1 };
          (l.init = function (F) {
            (this.duration = F.duration || 0), (this.delay = F.delay || 0);
            var re = F.ease || Y.ease;
            p[re] && (re = p[re][1]),
              typeof re != "function" && (re = Y.ease),
              (this.ease = re),
              (this.update = F.update || i),
              (this.complete = F.complete || i),
              (this.context = F.context || this),
              (this.name = F.name);
            var oe = F.from,
              he = F.to;
            oe === void 0 && (oe = Y.from),
              he === void 0 && (he = Y.to),
              (this.unit = F.unit || ""),
              typeof oe == "number" && typeof he == "number"
                ? ((this.begin = oe), (this.change = he - oe))
                : this.format(he, oe),
              (this.value = this.begin + this.unit),
              (this.start = me()),
              F.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = me()),
                (this.active = !0),
                v(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), A(this));
            }),
            (l.render = function (F) {
              var re,
                oe = F - this.start;
              if (this.delay) {
                if (oe <= this.delay) return;
                oe -= this.delay;
              }
              if (oe < this.duration) {
                var he = this.ease(oe, 0, 1, this.duration);
                return (
                  (re = this.startRGB
                    ? w(this.startRGB, this.endRGB, he)
                    : P(this.begin + he * this.change)),
                  (this.value = re + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (re = this.endHex || this.begin + this.change),
                (this.value = re + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (F, re) {
              if (((re += ""), (F += ""), F.charAt(0) == "#"))
                return (
                  (this.startRGB = r(re)),
                  (this.endRGB = r(F)),
                  (this.endHex = F),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var oe = re.replace(_, ""),
                  he = F.replace(_, "");
                oe !== he && u("tween", re, F), (this.unit = oe);
              }
              (re = parseFloat(re)),
                (F = parseFloat(F)),
                (this.begin = this.value = re),
                (this.change = F - re);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = i);
            });
          var te = [],
            Q = 1e3;
        }),
        ie = h(ne, function (l) {
          (l.init = function (v) {
            (this.duration = v.duration || 0),
              (this.complete = v.complete || i),
              (this.context = v.context),
              this.play();
          }),
            (l.render = function (v) {
              var I = v - this.start;
              I < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        ae = h(ne, function (l, v) {
          (l.init = function (I) {
            (this.context = I.context),
              (this.update = I.update),
              (this.tweens = []),
              (this.current = I.current);
            var A, P;
            for (A in I.values)
              (P = I.values[A]),
                this.current[A] !== P &&
                  this.tweens.push(
                    new ne({
                      name: A,
                      from: this.current[A],
                      to: P,
                      duration: I.duration,
                      delay: I.delay,
                      ease: I.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (I) {
              var A,
                P,
                w = this.tweens.length,
                Y = !1;
              for (A = w; A--; )
                (P = this.tweens[A]),
                  P.context &&
                    (P.render(I), (this.current[P.name] = P.value), (Y = !0));
              return Y
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((v.destroy.call(this), this.tweens)) {
                var I,
                  A = this.tweens.length;
                for (I = A; I--; ) this.tweens[I].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        z = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !U.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!U.transition) return (z.fallback = !0);
        z.agentTests.push("(" + l + ")");
        var v = new RegExp(z.agentTests.join("|"), "i");
        z.fallback = v.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new ne(l);
        }),
        (t.delay = function (l, v, I) {
          return new ie({ complete: v, duration: l, context: I });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var d = e.style,
        x = e.css,
        H = { transform: U.transform && U.transform.css },
        q = {
          color: [B, R],
          background: [B, R, "background-color"],
          "outline-color": [B, R],
          "border-color": [B, R],
          "border-top-color": [B, R],
          "border-right-color": [B, R],
          "border-bottom-color": [B, R],
          "border-left-color": [B, R],
          "border-width": [C, L],
          "border-top-width": [C, L],
          "border-right-width": [C, L],
          "border-bottom-width": [C, L],
          "border-left-width": [C, L],
          "border-spacing": [C, L],
          "letter-spacing": [C, L],
          margin: [C, L],
          "margin-top": [C, L],
          "margin-right": [C, L],
          "margin-bottom": [C, L],
          "margin-left": [C, L],
          padding: [C, L],
          "padding-top": [C, L],
          "padding-right": [C, L],
          "padding-bottom": [C, L],
          "padding-left": [C, L],
          "outline-width": [C, L],
          opacity: [C, b],
          top: [C, N],
          right: [C, N],
          bottom: [C, N],
          left: [C, N],
          "font-size": [C, N],
          "text-indent": [C, N],
          "word-spacing": [C, N],
          width: [C, N],
          "min-width": [C, N],
          "max-width": [C, N],
          height: [C, N],
          "min-height": [C, N],
          "max-height": [C, N],
          "line-height": [C, X],
          "scroll-top": [K, b, "scrollTop"],
          "scroll-left": [K, b, "scrollLeft"],
        },
        fe = {};
      U.transform &&
        ((q.transform = [G]),
        (fe = {
          x: [N, "translateX"],
          y: [N, "translateY"],
          rotate: [V],
          rotateX: [V],
          rotateY: [V],
          scale: [b],
          scaleX: [b],
          scaleY: [b],
          skew: [V],
          skewX: [V],
          skewY: [V],
        })),
        U.transform &&
          U.backface &&
          ((fe.z = [N, "translateZ"]),
          (fe.rotateZ = [V]),
          (fe.scaleZ = [b]),
          (fe.perspective = [L]));
      var Je = /ms/,
        Be = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var $o = c((CF, Qo) => {
    "use strict";
    var uE = window.$,
      sE = br() && uE.tram;
    Qo.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        n = Array.prototype,
        r = Object.prototype,
        o = Function.prototype,
        i = n.push,
        a = n.slice,
        u = n.concat,
        s = r.toString,
        f = r.hasOwnProperty,
        E = n.forEach,
        h = n.map,
        p = n.reduce,
        g = n.reduceRight,
        m = n.filter,
        y = n.every,
        O = n.some,
        _ = n.indexOf,
        S = n.lastIndexOf,
        b = Array.isArray,
        R = Object.keys,
        L = o.bind,
        N =
          (e.each =
          e.forEach =
            function (T, M, k) {
              if (T == null) return T;
              if (E && T.forEach === E) T.forEach(M, k);
              else if (T.length === +T.length) {
                for (var U = 0, ee = T.length; U < ee; U++)
                  if (M.call(k, T[U], U, T) === t) return;
              } else
                for (var Z = e.keys(T), U = 0, ee = Z.length; U < ee; U++)
                  if (M.call(k, T[Z[U]], Z[U], T) === t) return;
              return T;
            });
      (e.map = e.collect =
        function (T, M, k) {
          var U = [];
          return T == null
            ? U
            : h && T.map === h
            ? T.map(M, k)
            : (N(T, function (ee, Z, ue) {
                U.push(M.call(k, ee, Z, ue));
              }),
              U);
        }),
        (e.find = e.detect =
          function (T, M, k) {
            var U;
            return (
              V(T, function (ee, Z, ue) {
                if (M.call(k, ee, Z, ue)) return (U = ee), !0;
              }),
              U
            );
          }),
        (e.filter = e.select =
          function (T, M, k) {
            var U = [];
            return T == null
              ? U
              : m && T.filter === m
              ? T.filter(M, k)
              : (N(T, function (ee, Z, ue) {
                  M.call(k, ee, Z, ue) && U.push(ee);
                }),
                U);
          });
      var V =
        (e.some =
        e.any =
          function (T, M, k) {
            M || (M = e.identity);
            var U = !1;
            return T == null
              ? U
              : O && T.some === O
              ? T.some(M, k)
              : (N(T, function (ee, Z, ue) {
                  if (U || (U = M.call(k, ee, Z, ue))) return t;
                }),
                !!U);
          });
      (e.contains = e.include =
        function (T, M) {
          return T == null
            ? !1
            : _ && T.indexOf === _
            ? T.indexOf(M) != -1
            : V(T, function (k) {
                return k === M;
              });
        }),
        (e.delay = function (T, M) {
          var k = a.call(arguments, 2);
          return setTimeout(function () {
            return T.apply(null, k);
          }, M);
        }),
        (e.defer = function (T) {
          return e.delay.apply(e, [T, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (T) {
          var M, k, U;
          return function () {
            M ||
              ((M = !0),
              (k = arguments),
              (U = this),
              sE.frame(function () {
                (M = !1), T.apply(U, k);
              }));
          };
        }),
        (e.debounce = function (T, M, k) {
          var U,
            ee,
            Z,
            ue,
            me,
            Ne = function () {
              var ve = e.now() - ue;
              ve < M
                ? (U = setTimeout(Ne, M - ve))
                : ((U = null), k || ((me = T.apply(Z, ee)), (Z = ee = null)));
            };
          return function () {
            (Z = this), (ee = arguments), (ue = e.now());
            var ve = k && !U;
            return (
              U || (U = setTimeout(Ne, M)),
              ve && ((me = T.apply(Z, ee)), (Z = ee = null)),
              me
            );
          };
        }),
        (e.defaults = function (T) {
          if (!e.isObject(T)) return T;
          for (var M = 1, k = arguments.length; M < k; M++) {
            var U = arguments[M];
            for (var ee in U) T[ee] === void 0 && (T[ee] = U[ee]);
          }
          return T;
        }),
        (e.keys = function (T) {
          if (!e.isObject(T)) return [];
          if (R) return R(T);
          var M = [];
          for (var k in T) e.has(T, k) && M.push(k);
          return M;
        }),
        (e.has = function (T, M) {
          return f.call(T, M);
        }),
        (e.isObject = function (T) {
          return T === Object(T);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var X = /(.)^/,
        W = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        j = /\\|'|\r|\n|\u2028|\u2029/g,
        J = function (T) {
          return "\\" + W[T];
        },
        D = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (T, M, k) {
          !M && k && (M = k), (M = e.defaults({}, M, e.templateSettings));
          var U = RegExp(
              [
                (M.escape || X).source,
                (M.interpolate || X).source,
                (M.evaluate || X).source,
              ].join("|") + "|$",
              "g"
            ),
            ee = 0,
            Z = "__p+='";
          T.replace(U, function (ve, C, B, K, G) {
            return (
              (Z += T.slice(ee, G).replace(j, J)),
              (ee = G + ve.length),
              C
                ? (Z +=
                    `'+
((__t=(` +
                    C +
                    `))==null?'':_.escape(__t))+
'`)
                : B
                ? (Z +=
                    `'+
((__t=(` +
                    B +
                    `))==null?'':__t)+
'`)
                : K &&
                  (Z +=
                    `';
` +
                    K +
                    `
__p+='`),
              ve
            );
          }),
            (Z += `';
`);
          var ue = M.variable;
          if (ue) {
            if (!D.test(ue))
              throw new Error("variable is not a bare identifier: " + ue);
          } else
            (Z =
              `with(obj||{}){
` +
              Z +
              `}
`),
              (ue = "obj");
          Z =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            Z +
            `return __p;
`;
          var me;
          try {
            me = new Function(M.variable || "obj", "_", Z);
          } catch (ve) {
            throw ((ve.source = Z), ve);
          }
          var Ne = function (ve) {
            return me.call(this, ve, e);
          };
          return (
            (Ne.source =
              "function(" +
              ue +
              `){
` +
              Z +
              "}"),
            Ne
          );
        }),
        e
      );
    })();
  });
  var Ge = c((RF, oa) => {
    "use strict";
    var le = {},
      _t = {},
      yt = [],
      Sr = window.Webflow || [],
      et = window.jQuery,
      qe = et(window),
      cE = et(document),
      Xe = et.isFunction,
      Fe = (le._ = $o()),
      Jo = (le.tram = br() && et.tram),
      vn = !1,
      wr = !1;
    Jo.config.hideBackface = !1;
    Jo.config.keepInherited = !0;
    le.define = function (e, t, n) {
      _t[e] && ta(_t[e]);
      var r = (_t[e] = t(et, Fe, n) || {});
      return ea(r), r;
    };
    le.require = function (e) {
      return _t[e];
    };
    function ea(e) {
      le.env() &&
        (Xe(e.design) && qe.on("__wf_design", e.design),
        Xe(e.preview) && qe.on("__wf_preview", e.preview)),
        Xe(e.destroy) && qe.on("__wf_destroy", e.destroy),
        e.ready && Xe(e.ready) && lE(e);
    }
    function lE(e) {
      if (vn) {
        e.ready();
        return;
      }
      Fe.contains(yt, e.ready) || yt.push(e.ready);
    }
    function ta(e) {
      Xe(e.design) && qe.off("__wf_design", e.design),
        Xe(e.preview) && qe.off("__wf_preview", e.preview),
        Xe(e.destroy) && qe.off("__wf_destroy", e.destroy),
        e.ready && Xe(e.ready) && fE(e);
    }
    function fE(e) {
      yt = Fe.filter(yt, function (t) {
        return t !== e.ready;
      });
    }
    le.push = function (e) {
      if (vn) {
        Xe(e) && e();
        return;
      }
      Sr.push(e);
    };
    le.env = function (e) {
      var t = window.__wf_design,
        n = typeof t < "u";
      if (!e) return n;
      if (e === "design") return n && t;
      if (e === "preview") return n && !t;
      if (e === "slug") return n && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var En = navigator.userAgent.toLowerCase(),
      na = (le.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      dE = (le.env.chrome =
        /chrome/.test(En) &&
        /Google/.test(navigator.vendor) &&
        parseInt(En.match(/chrome\/(\d+)\./)[1], 10)),
      pE = (le.env.ios = /(ipod|iphone|ipad)/.test(En));
    le.env.safari = /safari/.test(En) && !dE && !pE;
    var Ar;
    na &&
      cE.on("touchstart mousedown", function (e) {
        Ar = e.target;
      });
    le.validClick = na
      ? function (e) {
          return e === Ar || et.contains(e, Ar);
        }
      : function () {
          return !0;
        };
    var ra = "resize.webflow orientationchange.webflow load.webflow",
      gE = "scroll.webflow " + ra;
    le.resize = Cr(qe, ra);
    le.scroll = Cr(qe, gE);
    le.redraw = Cr();
    function Cr(e, t) {
      var n = [],
        r = {};
      return (
        (r.up = Fe.throttle(function (o) {
          Fe.each(n, function (i) {
            i(o);
          });
        })),
        e && t && e.on(t, r.up),
        (r.on = function (o) {
          typeof o == "function" && (Fe.contains(n, o) || n.push(o));
        }),
        (r.off = function (o) {
          if (!arguments.length) {
            n = [];
            return;
          }
          n = Fe.filter(n, function (i) {
            return i !== o;
          });
        }),
        r
      );
    }
    le.location = function (e) {
      window.location = e;
    };
    le.env() && (le.location = function () {});
    le.ready = function () {
      (vn = !0), wr ? hE() : Fe.each(yt, Zo), Fe.each(Sr, Zo), le.resize.up();
    };
    function Zo(e) {
      Xe(e) && e();
    }
    function hE() {
      (wr = !1), Fe.each(_t, ea);
    }
    var st;
    le.load = function (e) {
      st.then(e);
    };
    function ia() {
      st && (st.reject(), qe.off("load", st.resolve)),
        (st = new et.Deferred()),
        qe.on("load", st.resolve);
    }
    le.destroy = function (e) {
      (e = e || {}),
        (wr = !0),
        qe.triggerHandler("__wf_destroy"),
        e.domready != null && (vn = e.domready),
        Fe.each(_t, ta),
        le.resize.off(),
        le.scroll.off(),
        le.redraw.off(),
        (yt = []),
        (Sr = []),
        st.state() === "pending" && ia();
    };
    et(le.ready);
    ia();
    oa.exports = window.Webflow = le;
  });
  var sa = c((NF, ua) => {
    "use strict";
    var aa = Ge();
    aa.define("brand", (ua.exports = function () {}), function (e) {
      var t = {},
        n = document,
        r = e("html"),
        o = e("body"),
        i = ".w-webflow-badge",
        a = window.location,
        u = /PhantomJS/i.test(navigator.userAgent),
        s =
          "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
        f;
      t.ready = function () {
        var g = r.attr("data-wf-status"),
          m = r.attr("data-wf-domain") || "";
        /\.webflow\.io$/i.test(m) && a.hostname !== m && (g = !0),
          g &&
            !u &&
            ((f = f || h()), p(), setTimeout(p, 500), e(n).off(s, E).on(s, E));
      };
      function E() {
        var g =
          n.fullScreen ||
          n.mozFullScreen ||
          n.webkitIsFullScreen ||
          n.msFullscreenElement ||
          !!n.webkitFullscreenElement;
        e(f).attr("style", g ? "display: none !important;" : "");
      }
      function h() {
        var g = e('<a class="w-webflow-badge"></a>').attr(
            "href",
            "https://webflow.com?utm_campaign=brandjs"
          ),
          m = e("<img>")
            .attr(
              "src",
              "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
            )
            .attr("alt", "")
            .css({ marginRight: "4px", width: "26px" }),
          y = e("<img>")
            .attr(
              "src",
              "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
            )
            .attr("alt", "Made in Webflow");
        return g.append(m, y), g[0];
      }
      function p() {
        var g = o.children(i),
          m = g.length && g.get(0) === f,
          y = aa.env("editor");
        if (m) {
          y && g.remove();
          return;
        }
        g.length && g.remove(), y || o.append(f);
      }
      return t;
    });
  });
  var la = c((PF, ca) => {
    "use strict";
    var mt = Ge();
    mt.define(
      "links",
      (ca.exports = function (e, t) {
        var n = {},
          r = e(window),
          o,
          i = mt.env(),
          a = window.location,
          u = document.createElement("a"),
          s = "w--current",
          f = /index\.(html|php)$/,
          E = /\/$/,
          h,
          p;
        n.ready = n.design = n.preview = g;
        function g() {
          (o = i && mt.env("design")),
            (p = mt.env("slug") || a.pathname || ""),
            mt.scroll.off(y),
            (h = []);
          for (var _ = document.links, S = 0; S < _.length; ++S) m(_[S]);
          h.length && (mt.scroll.on(y), y());
        }
        function m(_) {
          if (!_.getAttribute("hreflang")) {
            var S =
              (o && _.getAttribute("href-disabled")) || _.getAttribute("href");
            if (((u.href = S), !(S.indexOf(":") >= 0))) {
              var b = e(_);
              if (
                u.hash.length > 1 &&
                u.host + u.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
                var R = e(u.hash);
                R.length && h.push({ link: b, sec: R, active: !1 });
                return;
              }
              if (!(S === "#" || S === "")) {
                var L =
                  u.href === a.href || S === p || (f.test(S) && E.test(p));
                O(b, s, L);
              }
            }
          }
        }
        function y() {
          var _ = r.scrollTop(),
            S = r.height();
          t.each(h, function (b) {
            if (!b.link.attr("hreflang")) {
              var R = b.link,
                L = b.sec,
                N = L.offset().top,
                V = L.outerHeight(),
                X = S * 0.5,
                W = L.is(":visible") && N + V - X >= _ && N + X <= _ + S;
              b.active !== W && ((b.active = W), O(R, s, W));
            }
          });
        }
        function O(_, S, b) {
          var R = _.hasClass(S);
          (b && R) || (!b && !R) || (b ? _.addClass(S) : _.removeClass(S));
        }
        return n;
      })
    );
  });
  var da = c((LF, fa) => {
    "use strict";
    var _n = Ge();
    _n.define(
      "scroll",
      (fa.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          n = window.location,
          r = m() ? null : window.history,
          o = e(window),
          i = e(document),
          a = e(document.body),
          u =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (D) {
              window.setTimeout(D, 15);
            },
          s = _n.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            s +
            " > .header, " +
            s +
            " > .w-nav:not([data-no-scroll])",
          E = 'a[href="#"]',
          h = 'a[href*="#"]:not(.w-tab-link):not(' + E + ")",
          p = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          g = document.createElement("style");
        g.appendChild(document.createTextNode(p));
        function m() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var y = /^#[a-zA-Z0-9][\w:.-]*$/;
        function O(D) {
          return y.test(D.hash) && D.host + D.pathname === n.host + n.pathname;
        }
        let _ =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function S() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            _.matches
          );
        }
        function b(D, T) {
          var M;
          switch (T) {
            case "add":
              (M = D.attr("tabindex")),
                M
                  ? D.attr("data-wf-tabindex-swap", M)
                  : D.attr("tabindex", "-1");
              break;
            case "remove":
              (M = D.attr("data-wf-tabindex-swap")),
                M
                  ? (D.attr("tabindex", M),
                    D.removeAttr("data-wf-tabindex-swap"))
                  : D.removeAttr("tabindex");
              break;
          }
          D.toggleClass("wf-force-outline-none", T === "add");
        }
        function R(D) {
          var T = D.currentTarget;
          if (
            !(
              _n.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(T.className))
            )
          ) {
            var M = O(T) ? T.hash : "";
            if (M !== "") {
              var k = e(M);
              k.length &&
                (D && (D.preventDefault(), D.stopPropagation()),
                L(M, D),
                window.setTimeout(
                  function () {
                    N(k, function () {
                      b(k, "add"),
                        k.get(0).focus({ preventScroll: !0 }),
                        b(k, "remove");
                    });
                  },
                  D ? 0 : 300
                ));
            }
          }
        }
        function L(D) {
          if (
            n.hash !== D &&
            r &&
            r.pushState &&
            !(_n.env.chrome && n.protocol === "file:")
          ) {
            var T = r.state && r.state.hash;
            T !== D && r.pushState({ hash: D }, "", D);
          }
        }
        function N(D, T) {
          var M = o.scrollTop(),
            k = V(D);
          if (M !== k) {
            var U = X(D, M, k),
              ee = Date.now(),
              Z = function () {
                var ue = Date.now() - ee;
                window.scroll(0, W(M, k, ue, U)),
                  ue <= U ? u(Z) : typeof T == "function" && T();
              };
            u(Z);
          }
        }
        function V(D) {
          var T = e(f),
            M = T.css("position") === "fixed" ? T.outerHeight() : 0,
            k = D.offset().top - M;
          if (D.data("scroll") === "mid") {
            var U = o.height() - M,
              ee = D.outerHeight();
            ee < U && (k -= Math.round((U - ee) / 2));
          }
          return k;
        }
        function X(D, T, M) {
          if (S()) return 0;
          var k = 1;
          return (
            a.add(D).each(function (U, ee) {
              var Z = parseFloat(ee.getAttribute("data-scroll-time"));
              !isNaN(Z) && Z >= 0 && (k = Z);
            }),
            (472.143 * Math.log(Math.abs(T - M) + 125) - 2e3) * k
          );
        }
        function W(D, T, M, k) {
          return M > k ? T : D + (T - D) * j(M / k);
        }
        function j(D) {
          return D < 0.5
            ? 4 * D * D * D
            : (D - 1) * (2 * D - 2) * (2 * D - 2) + 1;
        }
        function J() {
          var { WF_CLICK_EMPTY: D, WF_CLICK_SCROLL: T } = t;
          i.on(T, h, R),
            i.on(D, E, function (M) {
              M.preventDefault();
            }),
            document.head.insertBefore(g, document.head.firstChild);
        }
        return { ready: J };
      })
    );
  });
  var ha = c((MF, ga) => {
    "use strict";
    var pa = Ge();
    pa.define(
      "focus",
      (ga.exports = function () {
        var e = [],
          t = !1;
        function n(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function r(a) {
          var u = a.target,
            s = u.tagName;
          return (
            (/^a$/i.test(s) && u.href != null) ||
            (/^(button|textarea)$/i.test(s) && u.disabled !== !0) ||
            (/^input$/i.test(s) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(u.type) &&
              !u.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(s) &&
              !Number.isNaN(Number.parseFloat(u.tabIndex))) ||
            /^audio$/i.test(s) ||
            (/^video$/i.test(s) && u.controls === !0)
          );
        }
        function o(a) {
          r(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var u = e.pop();
                u.target.dispatchEvent(new MouseEvent(u.type, u));
              }
            }, 0));
        }
        function i() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            pa.env.safari &&
            (document.addEventListener("mousedown", o, !0),
            document.addEventListener("mouseup", n, !0),
            document.addEventListener("click", n, !0));
        }
        return { ready: i };
      })
    );
  });
  var va = c((DF, Ea) => {
    "use strict";
    var EE = Ge();
    EE.define(
      "focus-visible",
      (Ea.exports = function () {
        function e(n) {
          var r = !0,
            o = !1,
            i = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function u(b) {
            return !!(
              b &&
              b !== document &&
              b.nodeName !== "HTML" &&
              b.nodeName !== "BODY" &&
              "classList" in b &&
              "contains" in b.classList
            );
          }
          function s(b) {
            var R = b.type,
              L = b.tagName;
            return !!(
              (L === "INPUT" && a[R] && !b.readOnly) ||
              (L === "TEXTAREA" && !b.readOnly) ||
              b.isContentEditable
            );
          }
          function f(b) {
            b.getAttribute("data-wf-focus-visible") ||
              b.setAttribute("data-wf-focus-visible", "true");
          }
          function E(b) {
            b.getAttribute("data-wf-focus-visible") &&
              b.removeAttribute("data-wf-focus-visible");
          }
          function h(b) {
            b.metaKey ||
              b.altKey ||
              b.ctrlKey ||
              (u(n.activeElement) && f(n.activeElement), (r = !0));
          }
          function p() {
            r = !1;
          }
          function g(b) {
            u(b.target) && (r || s(b.target)) && f(b.target);
          }
          function m(b) {
            u(b.target) &&
              b.target.hasAttribute("data-wf-focus-visible") &&
              ((o = !0),
              window.clearTimeout(i),
              (i = window.setTimeout(function () {
                o = !1;
              }, 100)),
              E(b.target));
          }
          function y() {
            document.visibilityState === "hidden" && (o && (r = !0), O());
          }
          function O() {
            document.addEventListener("mousemove", S),
              document.addEventListener("mousedown", S),
              document.addEventListener("mouseup", S),
              document.addEventListener("pointermove", S),
              document.addEventListener("pointerdown", S),
              document.addEventListener("pointerup", S),
              document.addEventListener("touchmove", S),
              document.addEventListener("touchstart", S),
              document.addEventListener("touchend", S);
          }
          function _() {
            document.removeEventListener("mousemove", S),
              document.removeEventListener("mousedown", S),
              document.removeEventListener("mouseup", S),
              document.removeEventListener("pointermove", S),
              document.removeEventListener("pointerdown", S),
              document.removeEventListener("pointerup", S),
              document.removeEventListener("touchmove", S),
              document.removeEventListener("touchstart", S),
              document.removeEventListener("touchend", S);
          }
          function S(b) {
            (b.target.nodeName && b.target.nodeName.toLowerCase() === "html") ||
              ((r = !1), _());
          }
          document.addEventListener("keydown", h, !0),
            document.addEventListener("mousedown", p, !0),
            document.addEventListener("pointerdown", p, !0),
            document.addEventListener("touchstart", p, !0),
            document.addEventListener("visibilitychange", y, !0),
            O(),
            n.addEventListener("focus", g, !0),
            n.addEventListener("blur", m, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var ya = c((xF, _a) => {
    "use strict";
    var vE = Ge();
    vE.define(
      "touch",
      (_a.exports = function (e) {
        var t = {},
          n = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (i) {
            return (
              (i = typeof i == "string" ? e(i).get(0) : i), i ? new r(i) : null
            );
          });
        function r(i) {
          var a = !1,
            u = !1,
            s = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            E;
          i.addEventListener("touchstart", h, !1),
            i.addEventListener("touchmove", p, !1),
            i.addEventListener("touchend", g, !1),
            i.addEventListener("touchcancel", m, !1),
            i.addEventListener("mousedown", h, !1),
            i.addEventListener("mousemove", p, !1),
            i.addEventListener("mouseup", g, !1),
            i.addEventListener("mouseout", m, !1);
          function h(O) {
            var _ = O.touches;
            (_ && _.length > 1) ||
              ((a = !0),
              _ ? ((u = !0), (f = _[0].clientX)) : (f = O.clientX),
              (E = f));
          }
          function p(O) {
            if (a) {
              if (u && O.type === "mousemove") {
                O.preventDefault(), O.stopPropagation();
                return;
              }
              var _ = O.touches,
                S = _ ? _[0].clientX : O.clientX,
                b = S - E;
              (E = S),
                Math.abs(b) > s &&
                  n &&
                  String(n()) === "" &&
                  (o("swipe", O, { direction: b > 0 ? "right" : "left" }), m());
            }
          }
          function g(O) {
            if (a && ((a = !1), u && O.type === "mouseup")) {
              O.preventDefault(), O.stopPropagation(), (u = !1);
              return;
            }
          }
          function m() {
            a = !1;
          }
          function y() {
            i.removeEventListener("touchstart", h, !1),
              i.removeEventListener("touchmove", p, !1),
              i.removeEventListener("touchend", g, !1),
              i.removeEventListener("touchcancel", m, !1),
              i.removeEventListener("mousedown", h, !1),
              i.removeEventListener("mousemove", p, !1),
              i.removeEventListener("mouseup", g, !1),
              i.removeEventListener("mouseout", m, !1),
              (i = null);
          }
          this.destroy = y;
        }
        function o(i, a, u) {
          var s = e.Event(i, { originalEvent: a });
          e(a.target).trigger(s, u);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var Ia = c((FF, ma) => {
    "use strict";
    var Rr = Ge();
    Rr.define(
      "edit",
      (ma.exports = function (e, t, n) {
        if (
          ((n = n || {}),
          (Rr.env("test") || Rr.env("frame")) && !n.fixture && !_E())
        )
          return { exit: 1 };
        var r = {},
          o = e(window),
          i = e(document.documentElement),
          a = document.location,
          u = "hashchange",
          s,
          f = n.load || p,
          E = !1;
        try {
          E =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        E
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : o.on(u, h).triggerHandler(u);
        function h() {
          s || (/\?edit/.test(a.hash) && f());
        }
        function p() {
          (s = !0),
            (window.WebflowEditor = !0),
            o.off(u, h),
            S(function (R) {
              e.ajax({
                url: _("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: i.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: g(R),
              });
            });
        }
        function g(R) {
          return function (L) {
            if (!L) {
              console.error("Could not load editor data");
              return;
            }
            (L.thirdPartyCookiesSupported = R),
              m(O(L.scriptPath), function () {
                window.WebflowEditor(L);
              });
          };
        }
        function m(R, L) {
          e.ajax({ type: "GET", url: R, dataType: "script", cache: !0 }).then(
            L,
            y
          );
        }
        function y(R, L, N) {
          throw (console.error("Could not load editor script: " + L), N);
        }
        function O(R) {
          return R.indexOf("//") >= 0
            ? R
            : _("https://editor-api.webflow.com" + R);
        }
        function _(R) {
          return R.replace(/([^:])\/\//g, "$1/");
        }
        function S(R) {
          var L = window.document.createElement("iframe");
          (L.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (L.style.display = "none"),
            (L.sandbox = "allow-scripts allow-same-origin");
          var N = function (V) {
            V.data === "WF_third_party_cookies_unsupported"
              ? (b(L, N), R(!1))
              : V.data === "WF_third_party_cookies_supported" &&
                (b(L, N), R(!0));
          };
          (L.onerror = function () {
            b(L, N), R(!1);
          }),
            window.addEventListener("message", N, !1),
            window.document.body.appendChild(L);
        }
        function b(R, L) {
          window.removeEventListener("message", L, !1), R.remove();
        }
        return r;
      })
    );
    function _E() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Nr = c((qF, Ta) => {
    var yE =
      typeof global == "object" && global && global.Object === Object && global;
    Ta.exports = yE;
  });
  var Ve = c((GF, Oa) => {
    var mE = Nr(),
      IE = typeof self == "object" && self && self.Object === Object && self,
      TE = mE || IE || Function("return this")();
    Oa.exports = TE;
  });
  var It = c((VF, ba) => {
    var OE = Ve(),
      bE = OE.Symbol;
    ba.exports = bE;
  });
  var Ca = c((UF, wa) => {
    var Aa = It(),
      Sa = Object.prototype,
      AE = Sa.hasOwnProperty,
      SE = Sa.toString,
      kt = Aa ? Aa.toStringTag : void 0;
    function wE(e) {
      var t = AE.call(e, kt),
        n = e[kt];
      try {
        e[kt] = void 0;
        var r = !0;
      } catch {}
      var o = SE.call(e);
      return r && (t ? (e[kt] = n) : delete e[kt]), o;
    }
    wa.exports = wE;
  });
  var Na = c((BF, Ra) => {
    var CE = Object.prototype,
      RE = CE.toString;
    function NE(e) {
      return RE.call(e);
    }
    Ra.exports = NE;
  });
  var tt = c((XF, Ma) => {
    var Pa = It(),
      PE = Ca(),
      LE = Na(),
      ME = "[object Null]",
      DE = "[object Undefined]",
      La = Pa ? Pa.toStringTag : void 0;
    function xE(e) {
      return e == null
        ? e === void 0
          ? DE
          : ME
        : La && La in Object(e)
        ? PE(e)
        : LE(e);
    }
    Ma.exports = xE;
  });
  var Pr = c((WF, Da) => {
    function FE(e, t) {
      return function (n) {
        return e(t(n));
      };
    }
    Da.exports = FE;
  });
  var Lr = c((kF, xa) => {
    var qE = Pr(),
      GE = qE(Object.getPrototypeOf, Object);
    xa.exports = GE;
  });
  var Qe = c((HF, Fa) => {
    function VE(e) {
      return e != null && typeof e == "object";
    }
    Fa.exports = VE;
  });
  var Mr = c((zF, Ga) => {
    var UE = tt(),
      BE = Lr(),
      XE = Qe(),
      WE = "[object Object]",
      kE = Function.prototype,
      HE = Object.prototype,
      qa = kE.toString,
      zE = HE.hasOwnProperty,
      jE = qa.call(Object);
    function KE(e) {
      if (!XE(e) || UE(e) != WE) return !1;
      var t = BE(e);
      if (t === null) return !0;
      var n = zE.call(t, "constructor") && t.constructor;
      return typeof n == "function" && n instanceof n && qa.call(n) == jE;
    }
    Ga.exports = KE;
  });
  var Va = c((Dr) => {
    "use strict";
    Object.defineProperty(Dr, "__esModule", { value: !0 });
    Dr.default = YE;
    function YE(e) {
      var t,
        n = e.Symbol;
      return (
        typeof n == "function"
          ? n.observable
            ? (t = n.observable)
            : ((t = n("observable")), (n.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var Ua = c((Fr, xr) => {
    "use strict";
    Object.defineProperty(Fr, "__esModule", { value: !0 });
    var QE = Va(),
      $E = ZE(QE);
    function ZE(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Tt;
    typeof self < "u"
      ? (Tt = self)
      : typeof window < "u"
      ? (Tt = window)
      : typeof global < "u"
      ? (Tt = global)
      : typeof xr < "u"
      ? (Tt = xr)
      : (Tt = Function("return this")());
    var JE = (0, $E.default)(Tt);
    Fr.default = JE;
  });
  var qr = c((Ht) => {
    "use strict";
    Ht.__esModule = !0;
    Ht.ActionTypes = void 0;
    Ht.default = ka;
    var ev = Mr(),
      tv = Wa(ev),
      nv = Ua(),
      Ba = Wa(nv);
    function Wa(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Xa = (Ht.ActionTypes = { INIT: "@@redux/INIT" });
    function ka(e, t, n) {
      var r;
      if (
        (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
        typeof n < "u")
      ) {
        if (typeof n != "function")
          throw new Error("Expected the enhancer to be a function.");
        return n(ka)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var o = e,
        i = t,
        a = [],
        u = a,
        s = !1;
      function f() {
        u === a && (u = a.slice());
      }
      function E() {
        return i;
      }
      function h(y) {
        if (typeof y != "function")
          throw new Error("Expected listener to be a function.");
        var O = !0;
        return (
          f(),
          u.push(y),
          function () {
            if (O) {
              (O = !1), f();
              var S = u.indexOf(y);
              u.splice(S, 1);
            }
          }
        );
      }
      function p(y) {
        if (!(0, tv.default)(y))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof y.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (s) throw new Error("Reducers may not dispatch actions.");
        try {
          (s = !0), (i = o(i, y));
        } finally {
          s = !1;
        }
        for (var O = (a = u), _ = 0; _ < O.length; _++) O[_]();
        return y;
      }
      function g(y) {
        if (typeof y != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (o = y), p({ type: Xa.INIT });
      }
      function m() {
        var y,
          O = h;
        return (
          (y = {
            subscribe: function (S) {
              if (typeof S != "object")
                throw new TypeError("Expected the observer to be an object.");
              function b() {
                S.next && S.next(E());
              }
              b();
              var R = O(b);
              return { unsubscribe: R };
            },
          }),
          (y[Ba.default] = function () {
            return this;
          }),
          y
        );
      }
      return (
        p({ type: Xa.INIT }),
        (r = { dispatch: p, subscribe: h, getState: E, replaceReducer: g }),
        (r[Ba.default] = m),
        r
      );
    }
  });
  var Vr = c((Gr) => {
    "use strict";
    Gr.__esModule = !0;
    Gr.default = rv;
    function rv(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var ja = c((Ur) => {
    "use strict";
    Ur.__esModule = !0;
    Ur.default = sv;
    var Ha = qr(),
      iv = Mr(),
      QF = za(iv),
      ov = Vr(),
      $F = za(ov);
    function za(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function av(e, t) {
      var n = t && t.type,
        r = (n && '"' + n.toString() + '"') || "an action";
      return (
        "Given action " +
        r +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function uv(e) {
      Object.keys(e).forEach(function (t) {
        var n = e[t],
          r = n(void 0, { type: Ha.ActionTypes.INIT });
        if (typeof r > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var o =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof n(void 0, { type: o }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                Ha.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function sv(e) {
      for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var o = t[r];
        typeof e[o] == "function" && (n[o] = e[o]);
      }
      var i = Object.keys(n);
      if (!1) var a;
      var u;
      try {
        uv(n);
      } catch (s) {
        u = s;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          E = arguments[1];
        if (u) throw u;
        if (!1) var h;
        for (var p = !1, g = {}, m = 0; m < i.length; m++) {
          var y = i[m],
            O = n[y],
            _ = f[y],
            S = O(_, E);
          if (typeof S > "u") {
            var b = av(y, E);
            throw new Error(b);
          }
          (g[y] = S), (p = p || S !== _);
        }
        return p ? g : f;
      };
    }
  });
  var Ya = c((Br) => {
    "use strict";
    Br.__esModule = !0;
    Br.default = cv;
    function Ka(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function cv(e, t) {
      if (typeof e == "function") return Ka(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var n = Object.keys(e), r = {}, o = 0; o < n.length; o++) {
        var i = n[o],
          a = e[i];
        typeof a == "function" && (r[i] = Ka(a, t));
      }
      return r;
    }
  });
  var Wr = c((Xr) => {
    "use strict";
    Xr.__esModule = !0;
    Xr.default = lv;
    function lv() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      if (t.length === 0)
        return function (i) {
          return i;
        };
      if (t.length === 1) return t[0];
      var r = t[t.length - 1],
        o = t.slice(0, -1);
      return function () {
        return o.reduceRight(function (i, a) {
          return a(i);
        }, r.apply(void 0, arguments));
      };
    }
  });
  var Qa = c((kr) => {
    "use strict";
    kr.__esModule = !0;
    var fv =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    kr.default = hv;
    var dv = Wr(),
      pv = gv(dv);
    function gv(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function hv() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (r) {
        return function (o, i, a) {
          var u = r(o, i, a),
            s = u.dispatch,
            f = [],
            E = {
              getState: u.getState,
              dispatch: function (p) {
                return s(p);
              },
            };
          return (
            (f = t.map(function (h) {
              return h(E);
            })),
            (s = pv.default.apply(void 0, f)(u.dispatch)),
            fv({}, u, { dispatch: s })
          );
        };
      };
    }
  });
  var Hr = c((Le) => {
    "use strict";
    Le.__esModule = !0;
    Le.compose =
      Le.applyMiddleware =
      Le.bindActionCreators =
      Le.combineReducers =
      Le.createStore =
        void 0;
    var Ev = qr(),
      vv = Ot(Ev),
      _v = ja(),
      yv = Ot(_v),
      mv = Ya(),
      Iv = Ot(mv),
      Tv = Qa(),
      Ov = Ot(Tv),
      bv = Wr(),
      Av = Ot(bv),
      Sv = Vr(),
      n1 = Ot(Sv);
    function Ot(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Le.createStore = vv.default;
    Le.combineReducers = yv.default;
    Le.bindActionCreators = Iv.default;
    Le.applyMiddleware = Ov.default;
    Le.compose = Av.default;
  });
  var $a = c((zr) => {
    "use strict";
    Object.defineProperty(zr, "__esModule", { value: !0 });
    function wv(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    wv(zr, {
      EventAppliesTo: function () {
        return Rv;
      },
      EventBasedOn: function () {
        return Nv;
      },
      EventContinuousMouseAxes: function () {
        return Pv;
      },
      EventLimitAffectedElements: function () {
        return Lv;
      },
      EventTypeConsts: function () {
        return Cv;
      },
      QuickEffectDirectionConsts: function () {
        return Dv;
      },
      QuickEffectIds: function () {
        return Mv;
      },
    });
    var Cv = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      },
      Rv = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
      Nv = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
      Pv = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
      Lv = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
      },
      Mv = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
      },
      Dv = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
      };
  });
  var Kr = c((jr) => {
    "use strict";
    Object.defineProperty(jr, "__esModule", { value: !0 });
    function xv(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    xv(jr, {
      ActionAppliesTo: function () {
        return qv;
      },
      ActionTypeConsts: function () {
        return Fv;
      },
    });
    var Fv = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      },
      qv = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
      };
  });
  var Za = c((Yr) => {
    "use strict";
    Object.defineProperty(Yr, "__esModule", { value: !0 });
    Object.defineProperty(Yr, "InteractionTypeConsts", {
      enumerable: !0,
      get: function () {
        return Gv;
      },
    });
    var Gv = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
  });
  var Ja = c((Qr) => {
    "use strict";
    Object.defineProperty(Qr, "__esModule", { value: !0 });
    Object.defineProperty(Qr, "ReducedMotionTypes", {
      enumerable: !0,
      get: function () {
        return jv;
      },
    });
    var Vv = Kr(),
      {
        TRANSFORM_MOVE: Uv,
        TRANSFORM_SCALE: Bv,
        TRANSFORM_ROTATE: Xv,
        TRANSFORM_SKEW: Wv,
        STYLE_SIZE: kv,
        STYLE_FILTER: Hv,
        STYLE_FONT_VARIATION: zv,
      } = Vv.ActionTypeConsts,
      jv = {
        [Uv]: !0,
        [Bv]: !0,
        [Xv]: !0,
        [Wv]: !0,
        [kv]: !0,
        [Hv]: !0,
        [zv]: !0,
      };
  });
  var eu = c(($r) => {
    "use strict";
    Object.defineProperty($r, "__esModule", { value: !0 });
    function Kv(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    Kv($r, {
      IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
        return f_;
      },
      IX2_ANIMATION_FRAME_CHANGED: function () {
        return o_;
      },
      IX2_CLEAR_REQUESTED: function () {
        return n_;
      },
      IX2_ELEMENT_STATE_CHANGED: function () {
        return l_;
      },
      IX2_EVENT_LISTENER_ADDED: function () {
        return r_;
      },
      IX2_EVENT_STATE_CHANGED: function () {
        return i_;
      },
      IX2_INSTANCE_ADDED: function () {
        return u_;
      },
      IX2_INSTANCE_REMOVED: function () {
        return c_;
      },
      IX2_INSTANCE_STARTED: function () {
        return s_;
      },
      IX2_MEDIA_QUERIES_DEFINED: function () {
        return p_;
      },
      IX2_PARAMETER_CHANGED: function () {
        return a_;
      },
      IX2_PLAYBACK_REQUESTED: function () {
        return e_;
      },
      IX2_PREVIEW_REQUESTED: function () {
        return Jv;
      },
      IX2_RAW_DATA_IMPORTED: function () {
        return Yv;
      },
      IX2_SESSION_INITIALIZED: function () {
        return Qv;
      },
      IX2_SESSION_STARTED: function () {
        return $v;
      },
      IX2_SESSION_STOPPED: function () {
        return Zv;
      },
      IX2_STOP_REQUESTED: function () {
        return t_;
      },
      IX2_TEST_FRAME_RENDERED: function () {
        return g_;
      },
      IX2_VIEWPORT_WIDTH_CHANGED: function () {
        return d_;
      },
    });
    var Yv = "IX2_RAW_DATA_IMPORTED",
      Qv = "IX2_SESSION_INITIALIZED",
      $v = "IX2_SESSION_STARTED",
      Zv = "IX2_SESSION_STOPPED",
      Jv = "IX2_PREVIEW_REQUESTED",
      e_ = "IX2_PLAYBACK_REQUESTED",
      t_ = "IX2_STOP_REQUESTED",
      n_ = "IX2_CLEAR_REQUESTED",
      r_ = "IX2_EVENT_LISTENER_ADDED",
      i_ = "IX2_EVENT_STATE_CHANGED",
      o_ = "IX2_ANIMATION_FRAME_CHANGED",
      a_ = "IX2_PARAMETER_CHANGED",
      u_ = "IX2_INSTANCE_ADDED",
      s_ = "IX2_INSTANCE_STARTED",
      c_ = "IX2_INSTANCE_REMOVED",
      l_ = "IX2_ELEMENT_STATE_CHANGED",
      f_ = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
      d_ = "IX2_VIEWPORT_WIDTH_CHANGED",
      p_ = "IX2_MEDIA_QUERIES_DEFINED",
      g_ = "IX2_TEST_FRAME_RENDERED";
  });
  var tu = c((Zr) => {
    "use strict";
    Object.defineProperty(Zr, "__esModule", { value: !0 });
    function h_(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    h_(Zr, {
      ABSTRACT_NODE: function () {
        return py;
      },
      AUTO: function () {
        return ny;
      },
      BACKGROUND: function () {
        return Q_;
      },
      BACKGROUND_COLOR: function () {
        return Y_;
      },
      BAR_DELIMITER: function () {
        return oy;
      },
      BORDER_COLOR: function () {
        return $_;
      },
      BOUNDARY_SELECTOR: function () {
        return m_;
      },
      CHILDREN: function () {
        return ay;
      },
      COLON_DELIMITER: function () {
        return iy;
      },
      COLOR: function () {
        return Z_;
      },
      COMMA_DELIMITER: function () {
        return ry;
      },
      CONFIG_UNIT: function () {
        return C_;
      },
      CONFIG_VALUE: function () {
        return b_;
      },
      CONFIG_X_UNIT: function () {
        return A_;
      },
      CONFIG_X_VALUE: function () {
        return I_;
      },
      CONFIG_Y_UNIT: function () {
        return S_;
      },
      CONFIG_Y_VALUE: function () {
        return T_;
      },
      CONFIG_Z_UNIT: function () {
        return w_;
      },
      CONFIG_Z_VALUE: function () {
        return O_;
      },
      DISPLAY: function () {
        return J_;
      },
      FILTER: function () {
        return H_;
      },
      FLEX: function () {
        return ey;
      },
      FONT_VARIATION_SETTINGS: function () {
        return z_;
      },
      HEIGHT: function () {
        return K_;
      },
      HTML_ELEMENT: function () {
        return fy;
      },
      IMMEDIATE_CHILDREN: function () {
        return uy;
      },
      IX2_ID_DELIMITER: function () {
        return E_;
      },
      OPACITY: function () {
        return k_;
      },
      PARENT: function () {
        return cy;
      },
      PLAIN_OBJECT: function () {
        return dy;
      },
      PRESERVE_3D: function () {
        return ly;
      },
      RENDER_GENERAL: function () {
        return hy;
      },
      RENDER_PLUGIN: function () {
        return vy;
      },
      RENDER_STYLE: function () {
        return Ey;
      },
      RENDER_TRANSFORM: function () {
        return gy;
      },
      ROTATE_X: function () {
        return G_;
      },
      ROTATE_Y: function () {
        return V_;
      },
      ROTATE_Z: function () {
        return U_;
      },
      SCALE_3D: function () {
        return q_;
      },
      SCALE_X: function () {
        return D_;
      },
      SCALE_Y: function () {
        return x_;
      },
      SCALE_Z: function () {
        return F_;
      },
      SIBLINGS: function () {
        return sy;
      },
      SKEW: function () {
        return B_;
      },
      SKEW_X: function () {
        return X_;
      },
      SKEW_Y: function () {
        return W_;
      },
      TRANSFORM: function () {
        return R_;
      },
      TRANSLATE_3D: function () {
        return M_;
      },
      TRANSLATE_X: function () {
        return N_;
      },
      TRANSLATE_Y: function () {
        return P_;
      },
      TRANSLATE_Z: function () {
        return L_;
      },
      WF_PAGE: function () {
        return v_;
      },
      WIDTH: function () {
        return j_;
      },
      WILL_CHANGE: function () {
        return ty;
      },
      W_MOD_IX: function () {
        return y_;
      },
      W_MOD_JS: function () {
        return __;
      },
    });
    var E_ = "|",
      v_ = "data-wf-page",
      __ = "w-mod-js",
      y_ = "w-mod-ix",
      m_ = ".w-dyn-item",
      I_ = "xValue",
      T_ = "yValue",
      O_ = "zValue",
      b_ = "value",
      A_ = "xUnit",
      S_ = "yUnit",
      w_ = "zUnit",
      C_ = "unit",
      R_ = "transform",
      N_ = "translateX",
      P_ = "translateY",
      L_ = "translateZ",
      M_ = "translate3d",
      D_ = "scaleX",
      x_ = "scaleY",
      F_ = "scaleZ",
      q_ = "scale3d",
      G_ = "rotateX",
      V_ = "rotateY",
      U_ = "rotateZ",
      B_ = "skew",
      X_ = "skewX",
      W_ = "skewY",
      k_ = "opacity",
      H_ = "filter",
      z_ = "font-variation-settings",
      j_ = "width",
      K_ = "height",
      Y_ = "backgroundColor",
      Q_ = "background",
      $_ = "borderColor",
      Z_ = "color",
      J_ = "display",
      ey = "flex",
      ty = "willChange",
      ny = "AUTO",
      ry = ",",
      iy = ":",
      oy = "|",
      ay = "CHILDREN",
      uy = "IMMEDIATE_CHILDREN",
      sy = "SIBLINGS",
      cy = "PARENT",
      ly = "preserve-3d",
      fy = "HTML_ELEMENT",
      dy = "PLAIN_OBJECT",
      py = "ABSTRACT_NODE",
      gy = "RENDER_TRANSFORM",
      hy = "RENDER_GENERAL",
      Ey = "RENDER_STYLE",
      vy = "RENDER_PLUGIN";
  });
  var we = c((ct) => {
    "use strict";
    Object.defineProperty(ct, "__esModule", { value: !0 });
    function _y(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    _y(ct, {
      ActionTypeConsts: function () {
        return my.ActionTypeConsts;
      },
      IX2EngineActionTypes: function () {
        return Iy;
      },
      IX2EngineConstants: function () {
        return Ty;
      },
      QuickEffectIds: function () {
        return yy.QuickEffectIds;
      },
    });
    var yy = yn($a(), ct),
      my = yn(Kr(), ct);
    yn(Za(), ct);
    yn(Ja(), ct);
    var Iy = ru(eu()),
      Ty = ru(tu());
    function yn(e, t) {
      return (
        Object.keys(e).forEach(function (n) {
          n !== "default" &&
            !Object.prototype.hasOwnProperty.call(t, n) &&
            Object.defineProperty(t, n, {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            });
        }),
        e
      );
    }
    function nu(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (nu = function (r) {
        return r ? n : t;
      })(e);
    }
    function ru(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = nu(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(r, i, a)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
  });
  var iu = c((Jr) => {
    "use strict";
    Object.defineProperty(Jr, "__esModule", { value: !0 });
    Object.defineProperty(Jr, "ixData", {
      enumerable: !0,
      get: function () {
        return Ay;
      },
    });
    var Oy = we(),
      { IX2_RAW_DATA_IMPORTED: by } = Oy.IX2EngineActionTypes,
      Ay = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case by:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
  });
  var bt = c((ge) => {
    "use strict";
    Object.defineProperty(ge, "__esModule", { value: !0 });
    var Sy =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    ge.clone = In;
    ge.addLast = uu;
    ge.addFirst = su;
    ge.removeLast = cu;
    ge.removeFirst = lu;
    ge.insert = fu;
    ge.removeAt = du;
    ge.replaceAt = pu;
    ge.getIn = Tn;
    ge.set = On;
    ge.setIn = bn;
    ge.update = hu;
    ge.updateIn = Eu;
    ge.merge = vu;
    ge.mergeDeep = _u;
    ge.mergeIn = yu;
    ge.omit = mu;
    ge.addDefaults = Iu;
    var ou = "INVALID_ARGS";
    function au(e) {
      throw new Error(e);
    }
    function ei(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var wy = {}.hasOwnProperty;
    function In(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = ei(e), n = {}, r = 0; r < t.length; r++) {
        var o = t[r];
        n[o] = e[o];
      }
      return n;
    }
    function Ce(e, t, n) {
      var r = n;
      r == null && au(ou);
      for (
        var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), u = 3;
        u < i;
        u++
      )
        a[u - 3] = arguments[u];
      for (var s = 0; s < a.length; s++) {
        var f = a[s];
        if (f != null) {
          var E = ei(f);
          if (E.length)
            for (var h = 0; h <= E.length; h++) {
              var p = E[h];
              if (!(e && r[p] !== void 0)) {
                var g = f[p];
                t && mn(r[p]) && mn(g) && (g = Ce(e, t, r[p], g)),
                  !(g === void 0 || g === r[p]) &&
                    (o || ((o = !0), (r = In(r))), (r[p] = g));
              }
            }
        }
      }
      return r;
    }
    function mn(e) {
      var t = typeof e > "u" ? "undefined" : Sy(e);
      return e != null && (t === "object" || t === "function");
    }
    function uu(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function su(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function cu(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function lu(e) {
      return e.length ? e.slice(1) : e;
    }
    function fu(e, t, n) {
      return e
        .slice(0, t)
        .concat(Array.isArray(n) ? n : [n])
        .concat(e.slice(t));
    }
    function du(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function pu(e, t, n) {
      if (e[t] === n) return e;
      for (var r = e.length, o = Array(r), i = 0; i < r; i++) o[i] = e[i];
      return (o[t] = n), o;
    }
    function Tn(e, t) {
      if ((!Array.isArray(t) && au(ou), e != null)) {
        for (var n = e, r = 0; r < t.length; r++) {
          var o = t[r];
          if (((n = n?.[o]), n === void 0)) return n;
        }
        return n;
      }
    }
    function On(e, t, n) {
      var r = typeof t == "number" ? [] : {},
        o = e ?? r;
      if (o[t] === n) return o;
      var i = In(o);
      return (i[t] = n), i;
    }
    function gu(e, t, n, r) {
      var o = void 0,
        i = t[r];
      if (r === t.length - 1) o = n;
      else {
        var a =
          mn(e) && mn(e[i]) ? e[i] : typeof t[r + 1] == "number" ? [] : {};
        o = gu(a, t, n, r + 1);
      }
      return On(e, i, o);
    }
    function bn(e, t, n) {
      return t.length ? gu(e, t, n, 0) : n;
    }
    function hu(e, t, n) {
      var r = e?.[t],
        o = n(r);
      return On(e, t, o);
    }
    function Eu(e, t, n) {
      var r = Tn(e, t),
        o = n(r);
      return bn(e, t, o);
    }
    function vu(e, t, n, r, o, i) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Ce.call.apply(Ce, [null, !1, !1, e, t, n, r, o, i].concat(u))
        : Ce(!1, !1, e, t, n, r, o, i);
    }
    function _u(e, t, n, r, o, i) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Ce.call.apply(Ce, [null, !1, !0, e, t, n, r, o, i].concat(u))
        : Ce(!1, !0, e, t, n, r, o, i);
    }
    function yu(e, t, n, r, o, i, a) {
      var u = Tn(e, t);
      u == null && (u = {});
      for (
        var s = void 0,
          f = arguments.length,
          E = Array(f > 7 ? f - 7 : 0),
          h = 7;
        h < f;
        h++
      )
        E[h - 7] = arguments[h];
      return (
        E.length
          ? (s = Ce.call.apply(Ce, [null, !1, !1, u, n, r, o, i, a].concat(E)))
          : (s = Ce(!1, !1, u, n, r, o, i, a)),
        bn(e, t, s)
      );
    }
    function mu(e, t) {
      for (var n = Array.isArray(t) ? t : [t], r = !1, o = 0; o < n.length; o++)
        if (wy.call(e, n[o])) {
          r = !0;
          break;
        }
      if (!r) return e;
      for (var i = {}, a = ei(e), u = 0; u < a.length; u++) {
        var s = a[u];
        n.indexOf(s) >= 0 || (i[s] = e[s]);
      }
      return i;
    }
    function Iu(e, t, n, r, o, i) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Ce.call.apply(Ce, [null, !0, !1, e, t, n, r, o, i].concat(u))
        : Ce(!0, !1, e, t, n, r, o, i);
    }
    var Cy = {
      clone: In,
      addLast: uu,
      addFirst: su,
      removeLast: cu,
      removeFirst: lu,
      insert: fu,
      removeAt: du,
      replaceAt: pu,
      getIn: Tn,
      set: On,
      setIn: bn,
      update: hu,
      updateIn: Eu,
      merge: vu,
      mergeDeep: _u,
      mergeIn: yu,
      omit: mu,
      addDefaults: Iu,
    };
    ge.default = Cy;
  });
  var Ou = c((ti) => {
    "use strict";
    Object.defineProperty(ti, "__esModule", { value: !0 });
    Object.defineProperty(ti, "ixRequest", {
      enumerable: !0,
      get: function () {
        return Fy;
      },
    });
    var Ry = we(),
      Ny = bt(),
      {
        IX2_PREVIEW_REQUESTED: Py,
        IX2_PLAYBACK_REQUESTED: Ly,
        IX2_STOP_REQUESTED: My,
        IX2_CLEAR_REQUESTED: Dy,
      } = Ry.IX2EngineActionTypes,
      xy = { preview: {}, playback: {}, stop: {}, clear: {} },
      Tu = Object.create(null, {
        [Py]: { value: "preview" },
        [Ly]: { value: "playback" },
        [My]: { value: "stop" },
        [Dy]: { value: "clear" },
      }),
      Fy = (e = xy, t) => {
        if (t.type in Tu) {
          let n = [Tu[t.type]];
          return (0, Ny.setIn)(e, [n], { ...t.payload });
        }
        return e;
      };
  });
  var Au = c((ni) => {
    "use strict";
    Object.defineProperty(ni, "__esModule", { value: !0 });
    Object.defineProperty(ni, "ixSession", {
      enumerable: !0,
      get: function () {
        return Yy;
      },
    });
    var qy = we(),
      We = bt(),
      {
        IX2_SESSION_INITIALIZED: Gy,
        IX2_SESSION_STARTED: Vy,
        IX2_TEST_FRAME_RENDERED: Uy,
        IX2_SESSION_STOPPED: By,
        IX2_EVENT_LISTENER_ADDED: Xy,
        IX2_EVENT_STATE_CHANGED: Wy,
        IX2_ANIMATION_FRAME_CHANGED: ky,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: Hy,
        IX2_VIEWPORT_WIDTH_CHANGED: zy,
        IX2_MEDIA_QUERIES_DEFINED: jy,
      } = qy.IX2EngineActionTypes,
      bu = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      Ky = 20,
      Yy = (e = bu, t) => {
        switch (t.type) {
          case Gy: {
            let { hasBoundaryNodes: n, reducedMotion: r } = t.payload;
            return (0, We.merge)(e, { hasBoundaryNodes: n, reducedMotion: r });
          }
          case Vy:
            return (0, We.set)(e, "active", !0);
          case Uy: {
            let {
              payload: { step: n = Ky },
            } = t;
            return (0, We.set)(e, "tick", e.tick + n);
          }
          case By:
            return bu;
          case ky: {
            let {
              payload: { now: n },
            } = t;
            return (0, We.set)(e, "tick", n);
          }
          case Xy: {
            let n = (0, We.addLast)(e.eventListeners, t.payload);
            return (0, We.set)(e, "eventListeners", n);
          }
          case Wy: {
            let { stateKey: n, newState: r } = t.payload;
            return (0, We.setIn)(e, ["eventState", n], r);
          }
          case Hy: {
            let { actionListId: n, isPlaying: r } = t.payload;
            return (0, We.setIn)(e, ["playbackState", n], r);
          }
          case zy: {
            let { width: n, mediaQueries: r } = t.payload,
              o = r.length,
              i = null;
            for (let a = 0; a < o; a++) {
              let { key: u, min: s, max: f } = r[a];
              if (n >= s && n <= f) {
                i = u;
                break;
              }
            }
            return (0, We.merge)(e, { viewportWidth: n, mediaQueryKey: i });
          }
          case jy:
            return (0, We.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
  });
  var wu = c((h1, Su) => {
    function Qy() {
      (this.__data__ = []), (this.size = 0);
    }
    Su.exports = Qy;
  });
  var An = c((E1, Cu) => {
    function $y(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Cu.exports = $y;
  });
  var zt = c((v1, Ru) => {
    var Zy = An();
    function Jy(e, t) {
      for (var n = e.length; n--; ) if (Zy(e[n][0], t)) return n;
      return -1;
    }
    Ru.exports = Jy;
  });
  var Pu = c((_1, Nu) => {
    var em = zt(),
      tm = Array.prototype,
      nm = tm.splice;
    function rm(e) {
      var t = this.__data__,
        n = em(t, e);
      if (n < 0) return !1;
      var r = t.length - 1;
      return n == r ? t.pop() : nm.call(t, n, 1), --this.size, !0;
    }
    Nu.exports = rm;
  });
  var Mu = c((y1, Lu) => {
    var im = zt();
    function om(e) {
      var t = this.__data__,
        n = im(t, e);
      return n < 0 ? void 0 : t[n][1];
    }
    Lu.exports = om;
  });
  var xu = c((m1, Du) => {
    var am = zt();
    function um(e) {
      return am(this.__data__, e) > -1;
    }
    Du.exports = um;
  });
  var qu = c((I1, Fu) => {
    var sm = zt();
    function cm(e, t) {
      var n = this.__data__,
        r = sm(n, e);
      return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
    }
    Fu.exports = cm;
  });
  var jt = c((T1, Gu) => {
    var lm = wu(),
      fm = Pu(),
      dm = Mu(),
      pm = xu(),
      gm = qu();
    function At(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    At.prototype.clear = lm;
    At.prototype.delete = fm;
    At.prototype.get = dm;
    At.prototype.has = pm;
    At.prototype.set = gm;
    Gu.exports = At;
  });
  var Uu = c((O1, Vu) => {
    var hm = jt();
    function Em() {
      (this.__data__ = new hm()), (this.size = 0);
    }
    Vu.exports = Em;
  });
  var Xu = c((b1, Bu) => {
    function vm(e) {
      var t = this.__data__,
        n = t.delete(e);
      return (this.size = t.size), n;
    }
    Bu.exports = vm;
  });
  var ku = c((A1, Wu) => {
    function _m(e) {
      return this.__data__.get(e);
    }
    Wu.exports = _m;
  });
  var zu = c((S1, Hu) => {
    function ym(e) {
      return this.__data__.has(e);
    }
    Hu.exports = ym;
  });
  var ke = c((w1, ju) => {
    function mm(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    ju.exports = mm;
  });
  var ri = c((C1, Ku) => {
    var Im = tt(),
      Tm = ke(),
      Om = "[object AsyncFunction]",
      bm = "[object Function]",
      Am = "[object GeneratorFunction]",
      Sm = "[object Proxy]";
    function wm(e) {
      if (!Tm(e)) return !1;
      var t = Im(e);
      return t == bm || t == Am || t == Om || t == Sm;
    }
    Ku.exports = wm;
  });
  var Qu = c((R1, Yu) => {
    var Cm = Ve(),
      Rm = Cm["__core-js_shared__"];
    Yu.exports = Rm;
  });
  var Ju = c((N1, Zu) => {
    var ii = Qu(),
      $u = (function () {
        var e = /[^.]+$/.exec((ii && ii.keys && ii.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function Nm(e) {
      return !!$u && $u in e;
    }
    Zu.exports = Nm;
  });
  var oi = c((P1, es) => {
    var Pm = Function.prototype,
      Lm = Pm.toString;
    function Mm(e) {
      if (e != null) {
        try {
          return Lm.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    es.exports = Mm;
  });
  var ns = c((L1, ts) => {
    var Dm = ri(),
      xm = Ju(),
      Fm = ke(),
      qm = oi(),
      Gm = /[\\^$.*+?()[\]{}|]/g,
      Vm = /^\[object .+?Constructor\]$/,
      Um = Function.prototype,
      Bm = Object.prototype,
      Xm = Um.toString,
      Wm = Bm.hasOwnProperty,
      km = RegExp(
        "^" +
          Xm.call(Wm)
            .replace(Gm, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function Hm(e) {
      if (!Fm(e) || xm(e)) return !1;
      var t = Dm(e) ? km : Vm;
      return t.test(qm(e));
    }
    ts.exports = Hm;
  });
  var is = c((M1, rs) => {
    function zm(e, t) {
      return e?.[t];
    }
    rs.exports = zm;
  });
  var nt = c((D1, os) => {
    var jm = ns(),
      Km = is();
    function Ym(e, t) {
      var n = Km(e, t);
      return jm(n) ? n : void 0;
    }
    os.exports = Ym;
  });
  var Sn = c((x1, as) => {
    var Qm = nt(),
      $m = Ve(),
      Zm = Qm($m, "Map");
    as.exports = Zm;
  });
  var Kt = c((F1, us) => {
    var Jm = nt(),
      eI = Jm(Object, "create");
    us.exports = eI;
  });
  var ls = c((q1, cs) => {
    var ss = Kt();
    function tI() {
      (this.__data__ = ss ? ss(null) : {}), (this.size = 0);
    }
    cs.exports = tI;
  });
  var ds = c((G1, fs) => {
    function nI(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    fs.exports = nI;
  });
  var gs = c((V1, ps) => {
    var rI = Kt(),
      iI = "__lodash_hash_undefined__",
      oI = Object.prototype,
      aI = oI.hasOwnProperty;
    function uI(e) {
      var t = this.__data__;
      if (rI) {
        var n = t[e];
        return n === iI ? void 0 : n;
      }
      return aI.call(t, e) ? t[e] : void 0;
    }
    ps.exports = uI;
  });
  var Es = c((U1, hs) => {
    var sI = Kt(),
      cI = Object.prototype,
      lI = cI.hasOwnProperty;
    function fI(e) {
      var t = this.__data__;
      return sI ? t[e] !== void 0 : lI.call(t, e);
    }
    hs.exports = fI;
  });
  var _s = c((B1, vs) => {
    var dI = Kt(),
      pI = "__lodash_hash_undefined__";
    function gI(e, t) {
      var n = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (n[e] = dI && t === void 0 ? pI : t),
        this
      );
    }
    vs.exports = gI;
  });
  var ms = c((X1, ys) => {
    var hI = ls(),
      EI = ds(),
      vI = gs(),
      _I = Es(),
      yI = _s();
    function St(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    St.prototype.clear = hI;
    St.prototype.delete = EI;
    St.prototype.get = vI;
    St.prototype.has = _I;
    St.prototype.set = yI;
    ys.exports = St;
  });
  var Os = c((W1, Ts) => {
    var Is = ms(),
      mI = jt(),
      II = Sn();
    function TI() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Is(),
          map: new (II || mI)(),
          string: new Is(),
        });
    }
    Ts.exports = TI;
  });
  var As = c((k1, bs) => {
    function OI(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    bs.exports = OI;
  });
  var Yt = c((H1, Ss) => {
    var bI = As();
    function AI(e, t) {
      var n = e.__data__;
      return bI(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
    }
    Ss.exports = AI;
  });
  var Cs = c((z1, ws) => {
    var SI = Yt();
    function wI(e) {
      var t = SI(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    ws.exports = wI;
  });
  var Ns = c((j1, Rs) => {
    var CI = Yt();
    function RI(e) {
      return CI(this, e).get(e);
    }
    Rs.exports = RI;
  });
  var Ls = c((K1, Ps) => {
    var NI = Yt();
    function PI(e) {
      return NI(this, e).has(e);
    }
    Ps.exports = PI;
  });
  var Ds = c((Y1, Ms) => {
    var LI = Yt();
    function MI(e, t) {
      var n = LI(this, e),
        r = n.size;
      return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
    }
    Ms.exports = MI;
  });
  var wn = c((Q1, xs) => {
    var DI = Os(),
      xI = Cs(),
      FI = Ns(),
      qI = Ls(),
      GI = Ds();
    function wt(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    wt.prototype.clear = DI;
    wt.prototype.delete = xI;
    wt.prototype.get = FI;
    wt.prototype.has = qI;
    wt.prototype.set = GI;
    xs.exports = wt;
  });
  var qs = c(($1, Fs) => {
    var VI = jt(),
      UI = Sn(),
      BI = wn(),
      XI = 200;
    function WI(e, t) {
      var n = this.__data__;
      if (n instanceof VI) {
        var r = n.__data__;
        if (!UI || r.length < XI - 1)
          return r.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new BI(r);
      }
      return n.set(e, t), (this.size = n.size), this;
    }
    Fs.exports = WI;
  });
  var ai = c((Z1, Gs) => {
    var kI = jt(),
      HI = Uu(),
      zI = Xu(),
      jI = ku(),
      KI = zu(),
      YI = qs();
    function Ct(e) {
      var t = (this.__data__ = new kI(e));
      this.size = t.size;
    }
    Ct.prototype.clear = HI;
    Ct.prototype.delete = zI;
    Ct.prototype.get = jI;
    Ct.prototype.has = KI;
    Ct.prototype.set = YI;
    Gs.exports = Ct;
  });
  var Us = c((J1, Vs) => {
    var QI = "__lodash_hash_undefined__";
    function $I(e) {
      return this.__data__.set(e, QI), this;
    }
    Vs.exports = $I;
  });
  var Xs = c((eq, Bs) => {
    function ZI(e) {
      return this.__data__.has(e);
    }
    Bs.exports = ZI;
  });
  var ks = c((tq, Ws) => {
    var JI = wn(),
      eT = Us(),
      tT = Xs();
    function Cn(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.__data__ = new JI(); ++t < n; ) this.add(e[t]);
    }
    Cn.prototype.add = Cn.prototype.push = eT;
    Cn.prototype.has = tT;
    Ws.exports = Cn;
  });
  var zs = c((nq, Hs) => {
    function nT(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
        if (t(e[n], n, e)) return !0;
      return !1;
    }
    Hs.exports = nT;
  });
  var Ks = c((rq, js) => {
    function rT(e, t) {
      return e.has(t);
    }
    js.exports = rT;
  });
  var ui = c((iq, Ys) => {
    var iT = ks(),
      oT = zs(),
      aT = Ks(),
      uT = 1,
      sT = 2;
    function cT(e, t, n, r, o, i) {
      var a = n & uT,
        u = e.length,
        s = t.length;
      if (u != s && !(a && s > u)) return !1;
      var f = i.get(e),
        E = i.get(t);
      if (f && E) return f == t && E == e;
      var h = -1,
        p = !0,
        g = n & sT ? new iT() : void 0;
      for (i.set(e, t), i.set(t, e); ++h < u; ) {
        var m = e[h],
          y = t[h];
        if (r) var O = a ? r(y, m, h, t, e, i) : r(m, y, h, e, t, i);
        if (O !== void 0) {
          if (O) continue;
          p = !1;
          break;
        }
        if (g) {
          if (
            !oT(t, function (_, S) {
              if (!aT(g, S) && (m === _ || o(m, _, n, r, i))) return g.push(S);
            })
          ) {
            p = !1;
            break;
          }
        } else if (!(m === y || o(m, y, n, r, i))) {
          p = !1;
          break;
        }
      }
      return i.delete(e), i.delete(t), p;
    }
    Ys.exports = cT;
  });
  var $s = c((oq, Qs) => {
    var lT = Ve(),
      fT = lT.Uint8Array;
    Qs.exports = fT;
  });
  var Js = c((aq, Zs) => {
    function dT(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r, o) {
          n[++t] = [o, r];
        }),
        n
      );
    }
    Zs.exports = dT;
  });
  var tc = c((uq, ec) => {
    function pT(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r) {
          n[++t] = r;
        }),
        n
      );
    }
    ec.exports = pT;
  });
  var ac = c((sq, oc) => {
    var nc = It(),
      rc = $s(),
      gT = An(),
      hT = ui(),
      ET = Js(),
      vT = tc(),
      _T = 1,
      yT = 2,
      mT = "[object Boolean]",
      IT = "[object Date]",
      TT = "[object Error]",
      OT = "[object Map]",
      bT = "[object Number]",
      AT = "[object RegExp]",
      ST = "[object Set]",
      wT = "[object String]",
      CT = "[object Symbol]",
      RT = "[object ArrayBuffer]",
      NT = "[object DataView]",
      ic = nc ? nc.prototype : void 0,
      si = ic ? ic.valueOf : void 0;
    function PT(e, t, n, r, o, i, a) {
      switch (n) {
        case NT:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case RT:
          return !(e.byteLength != t.byteLength || !i(new rc(e), new rc(t)));
        case mT:
        case IT:
        case bT:
          return gT(+e, +t);
        case TT:
          return e.name == t.name && e.message == t.message;
        case AT:
        case wT:
          return e == t + "";
        case OT:
          var u = ET;
        case ST:
          var s = r & _T;
          if ((u || (u = vT), e.size != t.size && !s)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (r |= yT), a.set(e, t);
          var E = hT(u(e), u(t), r, o, i, a);
          return a.delete(e), E;
        case CT:
          if (si) return si.call(e) == si.call(t);
      }
      return !1;
    }
    oc.exports = PT;
  });
  var Rn = c((cq, uc) => {
    function LT(e, t) {
      for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
      return e;
    }
    uc.exports = LT;
  });
  var Ie = c((lq, sc) => {
    var MT = Array.isArray;
    sc.exports = MT;
  });
  var ci = c((fq, cc) => {
    var DT = Rn(),
      xT = Ie();
    function FT(e, t, n) {
      var r = t(e);
      return xT(e) ? r : DT(r, n(e));
    }
    cc.exports = FT;
  });
  var fc = c((dq, lc) => {
    function qT(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
        var a = e[n];
        t(a, n, e) && (i[o++] = a);
      }
      return i;
    }
    lc.exports = qT;
  });
  var li = c((pq, dc) => {
    function GT() {
      return [];
    }
    dc.exports = GT;
  });
  var fi = c((gq, gc) => {
    var VT = fc(),
      UT = li(),
      BT = Object.prototype,
      XT = BT.propertyIsEnumerable,
      pc = Object.getOwnPropertySymbols,
      WT = pc
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                VT(pc(e), function (t) {
                  return XT.call(e, t);
                }));
          }
        : UT;
    gc.exports = WT;
  });
  var Ec = c((hq, hc) => {
    function kT(e, t) {
      for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
      return r;
    }
    hc.exports = kT;
  });
  var _c = c((Eq, vc) => {
    var HT = tt(),
      zT = Qe(),
      jT = "[object Arguments]";
    function KT(e) {
      return zT(e) && HT(e) == jT;
    }
    vc.exports = KT;
  });
  var Qt = c((vq, Ic) => {
    var yc = _c(),
      YT = Qe(),
      mc = Object.prototype,
      QT = mc.hasOwnProperty,
      $T = mc.propertyIsEnumerable,
      ZT = yc(
        (function () {
          return arguments;
        })()
      )
        ? yc
        : function (e) {
            return YT(e) && QT.call(e, "callee") && !$T.call(e, "callee");
          };
    Ic.exports = ZT;
  });
  var Oc = c((_q, Tc) => {
    function JT() {
      return !1;
    }
    Tc.exports = JT;
  });
  var Nn = c(($t, Rt) => {
    var e0 = Ve(),
      t0 = Oc(),
      Sc = typeof $t == "object" && $t && !$t.nodeType && $t,
      bc = Sc && typeof Rt == "object" && Rt && !Rt.nodeType && Rt,
      n0 = bc && bc.exports === Sc,
      Ac = n0 ? e0.Buffer : void 0,
      r0 = Ac ? Ac.isBuffer : void 0,
      i0 = r0 || t0;
    Rt.exports = i0;
  });
  var Pn = c((yq, wc) => {
    var o0 = 9007199254740991,
      a0 = /^(?:0|[1-9]\d*)$/;
    function u0(e, t) {
      var n = typeof e;
      return (
        (t = t ?? o0),
        !!t &&
          (n == "number" || (n != "symbol" && a0.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    wc.exports = u0;
  });
  var Ln = c((mq, Cc) => {
    var s0 = 9007199254740991;
    function c0(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= s0;
    }
    Cc.exports = c0;
  });
  var Nc = c((Iq, Rc) => {
    var l0 = tt(),
      f0 = Ln(),
      d0 = Qe(),
      p0 = "[object Arguments]",
      g0 = "[object Array]",
      h0 = "[object Boolean]",
      E0 = "[object Date]",
      v0 = "[object Error]",
      _0 = "[object Function]",
      y0 = "[object Map]",
      m0 = "[object Number]",
      I0 = "[object Object]",
      T0 = "[object RegExp]",
      O0 = "[object Set]",
      b0 = "[object String]",
      A0 = "[object WeakMap]",
      S0 = "[object ArrayBuffer]",
      w0 = "[object DataView]",
      C0 = "[object Float32Array]",
      R0 = "[object Float64Array]",
      N0 = "[object Int8Array]",
      P0 = "[object Int16Array]",
      L0 = "[object Int32Array]",
      M0 = "[object Uint8Array]",
      D0 = "[object Uint8ClampedArray]",
      x0 = "[object Uint16Array]",
      F0 = "[object Uint32Array]",
      de = {};
    de[C0] =
      de[R0] =
      de[N0] =
      de[P0] =
      de[L0] =
      de[M0] =
      de[D0] =
      de[x0] =
      de[F0] =
        !0;
    de[p0] =
      de[g0] =
      de[S0] =
      de[h0] =
      de[w0] =
      de[E0] =
      de[v0] =
      de[_0] =
      de[y0] =
      de[m0] =
      de[I0] =
      de[T0] =
      de[O0] =
      de[b0] =
      de[A0] =
        !1;
    function q0(e) {
      return d0(e) && f0(e.length) && !!de[l0(e)];
    }
    Rc.exports = q0;
  });
  var Lc = c((Tq, Pc) => {
    function G0(e) {
      return function (t) {
        return e(t);
      };
    }
    Pc.exports = G0;
  });
  var Dc = c((Zt, Nt) => {
    var V0 = Nr(),
      Mc = typeof Zt == "object" && Zt && !Zt.nodeType && Zt,
      Jt = Mc && typeof Nt == "object" && Nt && !Nt.nodeType && Nt,
      U0 = Jt && Jt.exports === Mc,
      di = U0 && V0.process,
      B0 = (function () {
        try {
          var e = Jt && Jt.require && Jt.require("util").types;
          return e || (di && di.binding && di.binding("util"));
        } catch {}
      })();
    Nt.exports = B0;
  });
  var Mn = c((Oq, qc) => {
    var X0 = Nc(),
      W0 = Lc(),
      xc = Dc(),
      Fc = xc && xc.isTypedArray,
      k0 = Fc ? W0(Fc) : X0;
    qc.exports = k0;
  });
  var pi = c((bq, Gc) => {
    var H0 = Ec(),
      z0 = Qt(),
      j0 = Ie(),
      K0 = Nn(),
      Y0 = Pn(),
      Q0 = Mn(),
      $0 = Object.prototype,
      Z0 = $0.hasOwnProperty;
    function J0(e, t) {
      var n = j0(e),
        r = !n && z0(e),
        o = !n && !r && K0(e),
        i = !n && !r && !o && Q0(e),
        a = n || r || o || i,
        u = a ? H0(e.length, String) : [],
        s = u.length;
      for (var f in e)
        (t || Z0.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (o && (f == "offset" || f == "parent")) ||
              (i &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              Y0(f, s))
          ) &&
          u.push(f);
      return u;
    }
    Gc.exports = J0;
  });
  var Dn = c((Aq, Vc) => {
    var eO = Object.prototype;
    function tO(e) {
      var t = e && e.constructor,
        n = (typeof t == "function" && t.prototype) || eO;
      return e === n;
    }
    Vc.exports = tO;
  });
  var Bc = c((Sq, Uc) => {
    var nO = Pr(),
      rO = nO(Object.keys, Object);
    Uc.exports = rO;
  });
  var xn = c((wq, Xc) => {
    var iO = Dn(),
      oO = Bc(),
      aO = Object.prototype,
      uO = aO.hasOwnProperty;
    function sO(e) {
      if (!iO(e)) return oO(e);
      var t = [];
      for (var n in Object(e)) uO.call(e, n) && n != "constructor" && t.push(n);
      return t;
    }
    Xc.exports = sO;
  });
  var lt = c((Cq, Wc) => {
    var cO = ri(),
      lO = Ln();
    function fO(e) {
      return e != null && lO(e.length) && !cO(e);
    }
    Wc.exports = fO;
  });
  var en = c((Rq, kc) => {
    var dO = pi(),
      pO = xn(),
      gO = lt();
    function hO(e) {
      return gO(e) ? dO(e) : pO(e);
    }
    kc.exports = hO;
  });
  var zc = c((Nq, Hc) => {
    var EO = ci(),
      vO = fi(),
      _O = en();
    function yO(e) {
      return EO(e, _O, vO);
    }
    Hc.exports = yO;
  });
  var Yc = c((Pq, Kc) => {
    var jc = zc(),
      mO = 1,
      IO = Object.prototype,
      TO = IO.hasOwnProperty;
    function OO(e, t, n, r, o, i) {
      var a = n & mO,
        u = jc(e),
        s = u.length,
        f = jc(t),
        E = f.length;
      if (s != E && !a) return !1;
      for (var h = s; h--; ) {
        var p = u[h];
        if (!(a ? p in t : TO.call(t, p))) return !1;
      }
      var g = i.get(e),
        m = i.get(t);
      if (g && m) return g == t && m == e;
      var y = !0;
      i.set(e, t), i.set(t, e);
      for (var O = a; ++h < s; ) {
        p = u[h];
        var _ = e[p],
          S = t[p];
        if (r) var b = a ? r(S, _, p, t, e, i) : r(_, S, p, e, t, i);
        if (!(b === void 0 ? _ === S || o(_, S, n, r, i) : b)) {
          y = !1;
          break;
        }
        O || (O = p == "constructor");
      }
      if (y && !O) {
        var R = e.constructor,
          L = t.constructor;
        R != L &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof R == "function" &&
            R instanceof R &&
            typeof L == "function" &&
            L instanceof L
          ) &&
          (y = !1);
      }
      return i.delete(e), i.delete(t), y;
    }
    Kc.exports = OO;
  });
  var $c = c((Lq, Qc) => {
    var bO = nt(),
      AO = Ve(),
      SO = bO(AO, "DataView");
    Qc.exports = SO;
  });
  var Jc = c((Mq, Zc) => {
    var wO = nt(),
      CO = Ve(),
      RO = wO(CO, "Promise");
    Zc.exports = RO;
  });
  var tl = c((Dq, el) => {
    var NO = nt(),
      PO = Ve(),
      LO = NO(PO, "Set");
    el.exports = LO;
  });
  var gi = c((xq, nl) => {
    var MO = nt(),
      DO = Ve(),
      xO = MO(DO, "WeakMap");
    nl.exports = xO;
  });
  var Fn = c((Fq, cl) => {
    var hi = $c(),
      Ei = Sn(),
      vi = Jc(),
      _i = tl(),
      yi = gi(),
      sl = tt(),
      Pt = oi(),
      rl = "[object Map]",
      FO = "[object Object]",
      il = "[object Promise]",
      ol = "[object Set]",
      al = "[object WeakMap]",
      ul = "[object DataView]",
      qO = Pt(hi),
      GO = Pt(Ei),
      VO = Pt(vi),
      UO = Pt(_i),
      BO = Pt(yi),
      ft = sl;
    ((hi && ft(new hi(new ArrayBuffer(1))) != ul) ||
      (Ei && ft(new Ei()) != rl) ||
      (vi && ft(vi.resolve()) != il) ||
      (_i && ft(new _i()) != ol) ||
      (yi && ft(new yi()) != al)) &&
      (ft = function (e) {
        var t = sl(e),
          n = t == FO ? e.constructor : void 0,
          r = n ? Pt(n) : "";
        if (r)
          switch (r) {
            case qO:
              return ul;
            case GO:
              return rl;
            case VO:
              return il;
            case UO:
              return ol;
            case BO:
              return al;
          }
        return t;
      });
    cl.exports = ft;
  });
  var vl = c((qq, El) => {
    var mi = ai(),
      XO = ui(),
      WO = ac(),
      kO = Yc(),
      ll = Fn(),
      fl = Ie(),
      dl = Nn(),
      HO = Mn(),
      zO = 1,
      pl = "[object Arguments]",
      gl = "[object Array]",
      qn = "[object Object]",
      jO = Object.prototype,
      hl = jO.hasOwnProperty;
    function KO(e, t, n, r, o, i) {
      var a = fl(e),
        u = fl(t),
        s = a ? gl : ll(e),
        f = u ? gl : ll(t);
      (s = s == pl ? qn : s), (f = f == pl ? qn : f);
      var E = s == qn,
        h = f == qn,
        p = s == f;
      if (p && dl(e)) {
        if (!dl(t)) return !1;
        (a = !0), (E = !1);
      }
      if (p && !E)
        return (
          i || (i = new mi()),
          a || HO(e) ? XO(e, t, n, r, o, i) : WO(e, t, s, n, r, o, i)
        );
      if (!(n & zO)) {
        var g = E && hl.call(e, "__wrapped__"),
          m = h && hl.call(t, "__wrapped__");
        if (g || m) {
          var y = g ? e.value() : e,
            O = m ? t.value() : t;
          return i || (i = new mi()), o(y, O, n, r, i);
        }
      }
      return p ? (i || (i = new mi()), kO(e, t, n, r, o, i)) : !1;
    }
    El.exports = KO;
  });
  var Ii = c((Gq, ml) => {
    var YO = vl(),
      _l = Qe();
    function yl(e, t, n, r, o) {
      return e === t
        ? !0
        : e == null || t == null || (!_l(e) && !_l(t))
        ? e !== e && t !== t
        : YO(e, t, n, r, yl, o);
    }
    ml.exports = yl;
  });
  var Tl = c((Vq, Il) => {
    var QO = ai(),
      $O = Ii(),
      ZO = 1,
      JO = 2;
    function eb(e, t, n, r) {
      var o = n.length,
        i = o,
        a = !r;
      if (e == null) return !i;
      for (e = Object(e); o--; ) {
        var u = n[o];
        if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++o < i; ) {
        u = n[o];
        var s = u[0],
          f = e[s],
          E = u[1];
        if (a && u[2]) {
          if (f === void 0 && !(s in e)) return !1;
        } else {
          var h = new QO();
          if (r) var p = r(f, E, s, e, t, h);
          if (!(p === void 0 ? $O(E, f, ZO | JO, r, h) : p)) return !1;
        }
      }
      return !0;
    }
    Il.exports = eb;
  });
  var Ti = c((Uq, Ol) => {
    var tb = ke();
    function nb(e) {
      return e === e && !tb(e);
    }
    Ol.exports = nb;
  });
  var Al = c((Bq, bl) => {
    var rb = Ti(),
      ib = en();
    function ob(e) {
      for (var t = ib(e), n = t.length; n--; ) {
        var r = t[n],
          o = e[r];
        t[n] = [r, o, rb(o)];
      }
      return t;
    }
    bl.exports = ob;
  });
  var Oi = c((Xq, Sl) => {
    function ab(e, t) {
      return function (n) {
        return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
      };
    }
    Sl.exports = ab;
  });
  var Cl = c((Wq, wl) => {
    var ub = Tl(),
      sb = Al(),
      cb = Oi();
    function lb(e) {
      var t = sb(e);
      return t.length == 1 && t[0][2]
        ? cb(t[0][0], t[0][1])
        : function (n) {
            return n === e || ub(n, e, t);
          };
    }
    wl.exports = lb;
  });
  var tn = c((kq, Rl) => {
    var fb = tt(),
      db = Qe(),
      pb = "[object Symbol]";
    function gb(e) {
      return typeof e == "symbol" || (db(e) && fb(e) == pb);
    }
    Rl.exports = gb;
  });
  var Gn = c((Hq, Nl) => {
    var hb = Ie(),
      Eb = tn(),
      vb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      _b = /^\w*$/;
    function yb(e, t) {
      if (hb(e)) return !1;
      var n = typeof e;
      return n == "number" ||
        n == "symbol" ||
        n == "boolean" ||
        e == null ||
        Eb(e)
        ? !0
        : _b.test(e) || !vb.test(e) || (t != null && e in Object(t));
    }
    Nl.exports = yb;
  });
  var Ml = c((zq, Ll) => {
    var Pl = wn(),
      mb = "Expected a function";
    function bi(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(mb);
      var n = function () {
        var r = arguments,
          o = t ? t.apply(this, r) : r[0],
          i = n.cache;
        if (i.has(o)) return i.get(o);
        var a = e.apply(this, r);
        return (n.cache = i.set(o, a) || i), a;
      };
      return (n.cache = new (bi.Cache || Pl)()), n;
    }
    bi.Cache = Pl;
    Ll.exports = bi;
  });
  var xl = c((jq, Dl) => {
    var Ib = Ml(),
      Tb = 500;
    function Ob(e) {
      var t = Ib(e, function (r) {
          return n.size === Tb && n.clear(), r;
        }),
        n = t.cache;
      return t;
    }
    Dl.exports = Ob;
  });
  var ql = c((Kq, Fl) => {
    var bb = xl(),
      Ab =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Sb = /\\(\\)?/g,
      wb = bb(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(Ab, function (n, r, o, i) {
            t.push(o ? i.replace(Sb, "$1") : r || n);
          }),
          t
        );
      });
    Fl.exports = wb;
  });
  var Ai = c((Yq, Gl) => {
    function Cb(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
        o[n] = t(e[n], n, e);
      return o;
    }
    Gl.exports = Cb;
  });
  var kl = c((Qq, Wl) => {
    var Vl = It(),
      Rb = Ai(),
      Nb = Ie(),
      Pb = tn(),
      Lb = 1 / 0,
      Ul = Vl ? Vl.prototype : void 0,
      Bl = Ul ? Ul.toString : void 0;
    function Xl(e) {
      if (typeof e == "string") return e;
      if (Nb(e)) return Rb(e, Xl) + "";
      if (Pb(e)) return Bl ? Bl.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -Lb ? "-0" : t;
    }
    Wl.exports = Xl;
  });
  var zl = c(($q, Hl) => {
    var Mb = kl();
    function Db(e) {
      return e == null ? "" : Mb(e);
    }
    Hl.exports = Db;
  });
  var nn = c((Zq, jl) => {
    var xb = Ie(),
      Fb = Gn(),
      qb = ql(),
      Gb = zl();
    function Vb(e, t) {
      return xb(e) ? e : Fb(e, t) ? [e] : qb(Gb(e));
    }
    jl.exports = Vb;
  });
  var Lt = c((Jq, Kl) => {
    var Ub = tn(),
      Bb = 1 / 0;
    function Xb(e) {
      if (typeof e == "string" || Ub(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -Bb ? "-0" : t;
    }
    Kl.exports = Xb;
  });
  var Vn = c((e5, Yl) => {
    var Wb = nn(),
      kb = Lt();
    function Hb(e, t) {
      t = Wb(t, e);
      for (var n = 0, r = t.length; e != null && n < r; ) e = e[kb(t[n++])];
      return n && n == r ? e : void 0;
    }
    Yl.exports = Hb;
  });
  var Un = c((t5, Ql) => {
    var zb = Vn();
    function jb(e, t, n) {
      var r = e == null ? void 0 : zb(e, t);
      return r === void 0 ? n : r;
    }
    Ql.exports = jb;
  });
  var Zl = c((n5, $l) => {
    function Kb(e, t) {
      return e != null && t in Object(e);
    }
    $l.exports = Kb;
  });
  var ef = c((r5, Jl) => {
    var Yb = nn(),
      Qb = Qt(),
      $b = Ie(),
      Zb = Pn(),
      Jb = Ln(),
      eA = Lt();
    function tA(e, t, n) {
      t = Yb(t, e);
      for (var r = -1, o = t.length, i = !1; ++r < o; ) {
        var a = eA(t[r]);
        if (!(i = e != null && n(e, a))) break;
        e = e[a];
      }
      return i || ++r != o
        ? i
        : ((o = e == null ? 0 : e.length),
          !!o && Jb(o) && Zb(a, o) && ($b(e) || Qb(e)));
    }
    Jl.exports = tA;
  });
  var nf = c((i5, tf) => {
    var nA = Zl(),
      rA = ef();
    function iA(e, t) {
      return e != null && rA(e, t, nA);
    }
    tf.exports = iA;
  });
  var of = c((o5, rf) => {
    var oA = Ii(),
      aA = Un(),
      uA = nf(),
      sA = Gn(),
      cA = Ti(),
      lA = Oi(),
      fA = Lt(),
      dA = 1,
      pA = 2;
    function gA(e, t) {
      return sA(e) && cA(t)
        ? lA(fA(e), t)
        : function (n) {
            var r = aA(n, e);
            return r === void 0 && r === t ? uA(n, e) : oA(t, r, dA | pA);
          };
    }
    rf.exports = gA;
  });
  var Bn = c((a5, af) => {
    function hA(e) {
      return e;
    }
    af.exports = hA;
  });
  var Si = c((u5, uf) => {
    function EA(e) {
      return function (t) {
        return t?.[e];
      };
    }
    uf.exports = EA;
  });
  var cf = c((s5, sf) => {
    var vA = Vn();
    function _A(e) {
      return function (t) {
        return vA(t, e);
      };
    }
    sf.exports = _A;
  });
  var ff = c((c5, lf) => {
    var yA = Si(),
      mA = cf(),
      IA = Gn(),
      TA = Lt();
    function OA(e) {
      return IA(e) ? yA(TA(e)) : mA(e);
    }
    lf.exports = OA;
  });
  var rt = c((l5, df) => {
    var bA = Cl(),
      AA = of(),
      SA = Bn(),
      wA = Ie(),
      CA = ff();
    function RA(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? SA
        : typeof e == "object"
        ? wA(e)
          ? AA(e[0], e[1])
          : bA(e)
        : CA(e);
    }
    df.exports = RA;
  });
  var wi = c((f5, pf) => {
    var NA = rt(),
      PA = lt(),
      LA = en();
    function MA(e) {
      return function (t, n, r) {
        var o = Object(t);
        if (!PA(t)) {
          var i = NA(n, 3);
          (t = LA(t)),
            (n = function (u) {
              return i(o[u], u, o);
            });
        }
        var a = e(t, n, r);
        return a > -1 ? o[i ? t[a] : a] : void 0;
      };
    }
    pf.exports = MA;
  });
  var Ci = c((d5, gf) => {
    function DA(e, t, n, r) {
      for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
        if (t(e[i], i, e)) return i;
      return -1;
    }
    gf.exports = DA;
  });
  var Ef = c((p5, hf) => {
    var xA = /\s/;
    function FA(e) {
      for (var t = e.length; t-- && xA.test(e.charAt(t)); );
      return t;
    }
    hf.exports = FA;
  });
  var _f = c((g5, vf) => {
    var qA = Ef(),
      GA = /^\s+/;
    function VA(e) {
      return e && e.slice(0, qA(e) + 1).replace(GA, "");
    }
    vf.exports = VA;
  });
  var Xn = c((h5, If) => {
    var UA = _f(),
      yf = ke(),
      BA = tn(),
      mf = 0 / 0,
      XA = /^[-+]0x[0-9a-f]+$/i,
      WA = /^0b[01]+$/i,
      kA = /^0o[0-7]+$/i,
      HA = parseInt;
    function zA(e) {
      if (typeof e == "number") return e;
      if (BA(e)) return mf;
      if (yf(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = yf(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = UA(e);
      var n = WA.test(e);
      return n || kA.test(e) ? HA(e.slice(2), n ? 2 : 8) : XA.test(e) ? mf : +e;
    }
    If.exports = zA;
  });
  var bf = c((E5, Of) => {
    var jA = Xn(),
      Tf = 1 / 0,
      KA = 17976931348623157e292;
    function YA(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = jA(e)), e === Tf || e === -Tf)) {
        var t = e < 0 ? -1 : 1;
        return t * KA;
      }
      return e === e ? e : 0;
    }
    Of.exports = YA;
  });
  var Ri = c((v5, Af) => {
    var QA = bf();
    function $A(e) {
      var t = QA(e),
        n = t % 1;
      return t === t ? (n ? t - n : t) : 0;
    }
    Af.exports = $A;
  });
  var wf = c((_5, Sf) => {
    var ZA = Ci(),
      JA = rt(),
      eS = Ri(),
      tS = Math.max;
    function nS(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var o = n == null ? 0 : eS(n);
      return o < 0 && (o = tS(r + o, 0)), ZA(e, JA(t, 3), o);
    }
    Sf.exports = nS;
  });
  var Ni = c((y5, Cf) => {
    var rS = wi(),
      iS = wf(),
      oS = rS(iS);
    Cf.exports = oS;
  });
  var kn = c((Pi) => {
    "use strict";
    Object.defineProperty(Pi, "__esModule", { value: !0 });
    function aS(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    aS(Pi, {
      ELEMENT_MATCHES: function () {
        return cS;
      },
      FLEX_PREFIXED: function () {
        return lS;
      },
      IS_BROWSER_ENV: function () {
        return Nf;
      },
      TRANSFORM_PREFIXED: function () {
        return Pf;
      },
      TRANSFORM_STYLE_PREFIXED: function () {
        return fS;
      },
      withBrowser: function () {
        return Wn;
      },
    });
    var uS = sS(Ni());
    function sS(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Nf = typeof window < "u",
      Wn = (e, t) => (Nf ? e() : t),
      cS = Wn(() =>
        (0, uS.default)(
          [
            "matches",
            "matchesSelector",
            "mozMatchesSelector",
            "msMatchesSelector",
            "oMatchesSelector",
            "webkitMatchesSelector",
          ],
          (e) => e in Element.prototype
        )
      ),
      lS = Wn(() => {
        let e = document.createElement("i"),
          t = [
            "flex",
            "-webkit-flex",
            "-ms-flexbox",
            "-moz-box",
            "-webkit-box",
          ],
          n = "";
        try {
          let { length: r } = t;
          for (let o = 0; o < r; o++) {
            let i = t[o];
            if (((e.style.display = i), e.style.display === i)) return i;
          }
          return n;
        } catch {
          return n;
        }
      }, "flex"),
      Pf = Wn(() => {
        let e = document.createElement("i");
        if (e.style.transform == null) {
          let t = ["Webkit", "Moz", "ms"],
            n = "Transform",
            { length: r } = t;
          for (let o = 0; o < r; o++) {
            let i = t[o] + n;
            if (e.style[i] !== void 0) return i;
          }
        }
        return "transform";
      }, "transform"),
      Rf = Pf.split("transform")[0],
      fS = Rf ? Rf + "TransformStyle" : "transformStyle";
  });
  var Li = c((I5, Ff) => {
    var dS = 4,
      pS = 0.001,
      gS = 1e-7,
      hS = 10,
      rn = 11,
      Hn = 1 / (rn - 1),
      ES = typeof Float32Array == "function";
    function Lf(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function Mf(e, t) {
      return 3 * t - 6 * e;
    }
    function Df(e) {
      return 3 * e;
    }
    function zn(e, t, n) {
      return ((Lf(t, n) * e + Mf(t, n)) * e + Df(t)) * e;
    }
    function xf(e, t, n) {
      return 3 * Lf(t, n) * e * e + 2 * Mf(t, n) * e + Df(t);
    }
    function vS(e, t, n, r, o) {
      var i,
        a,
        u = 0;
      do
        (a = t + (n - t) / 2), (i = zn(a, r, o) - e), i > 0 ? (n = a) : (t = a);
      while (Math.abs(i) > gS && ++u < hS);
      return a;
    }
    function _S(e, t, n, r) {
      for (var o = 0; o < dS; ++o) {
        var i = xf(t, n, r);
        if (i === 0) return t;
        var a = zn(t, n, r) - e;
        t -= a / i;
      }
      return t;
    }
    Ff.exports = function (t, n, r, o) {
      if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var i = ES ? new Float32Array(rn) : new Array(rn);
      if (t !== n || r !== o)
        for (var a = 0; a < rn; ++a) i[a] = zn(a * Hn, t, r);
      function u(s) {
        for (var f = 0, E = 1, h = rn - 1; E !== h && i[E] <= s; ++E) f += Hn;
        --E;
        var p = (s - i[E]) / (i[E + 1] - i[E]),
          g = f + p * Hn,
          m = xf(g, t, r);
        return m >= pS ? _S(s, g, t, r) : m === 0 ? g : vS(s, f, f + Hn, t, r);
      }
      return function (f) {
        return t === n && r === o
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : zn(u(f), n, o);
      };
    };
  });
  var Di = c((Mi) => {
    "use strict";
    Object.defineProperty(Mi, "__esModule", { value: !0 });
    function yS(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    yS(Mi, {
      bounce: function () {
        return nw;
      },
      bouncePast: function () {
        return rw;
      },
      ease: function () {
        return IS;
      },
      easeIn: function () {
        return TS;
      },
      easeInOut: function () {
        return bS;
      },
      easeOut: function () {
        return OS;
      },
      inBack: function () {
        return jS;
      },
      inCirc: function () {
        return WS;
      },
      inCubic: function () {
        return CS;
      },
      inElastic: function () {
        return QS;
      },
      inExpo: function () {
        return US;
      },
      inOutBack: function () {
        return YS;
      },
      inOutCirc: function () {
        return HS;
      },
      inOutCubic: function () {
        return NS;
      },
      inOutElastic: function () {
        return ZS;
      },
      inOutExpo: function () {
        return XS;
      },
      inOutQuad: function () {
        return wS;
      },
      inOutQuart: function () {
        return MS;
      },
      inOutQuint: function () {
        return FS;
      },
      inOutSine: function () {
        return VS;
      },
      inQuad: function () {
        return AS;
      },
      inQuart: function () {
        return PS;
      },
      inQuint: function () {
        return DS;
      },
      inSine: function () {
        return qS;
      },
      outBack: function () {
        return KS;
      },
      outBounce: function () {
        return zS;
      },
      outCirc: function () {
        return kS;
      },
      outCubic: function () {
        return RS;
      },
      outElastic: function () {
        return $S;
      },
      outExpo: function () {
        return BS;
      },
      outQuad: function () {
        return SS;
      },
      outQuart: function () {
        return LS;
      },
      outQuint: function () {
        return xS;
      },
      outSine: function () {
        return GS;
      },
      swingFrom: function () {
        return ew;
      },
      swingFromTo: function () {
        return JS;
      },
      swingTo: function () {
        return tw;
      },
    });
    var jn = mS(Li());
    function mS(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var $e = 1.70158,
      IS = (0, jn.default)(0.25, 0.1, 0.25, 1),
      TS = (0, jn.default)(0.42, 0, 1, 1),
      OS = (0, jn.default)(0, 0, 0.58, 1),
      bS = (0, jn.default)(0.42, 0, 0.58, 1);
    function AS(e) {
      return Math.pow(e, 2);
    }
    function SS(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function wS(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function CS(e) {
      return Math.pow(e, 3);
    }
    function RS(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function NS(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function PS(e) {
      return Math.pow(e, 4);
    }
    function LS(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function MS(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function DS(e) {
      return Math.pow(e, 5);
    }
    function xS(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function FS(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function qS(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function GS(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function VS(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function US(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function BS(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function XS(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function WS(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function kS(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function HS(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function zS(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function jS(e) {
      let t = $e;
      return e * e * ((t + 1) * e - t);
    }
    function KS(e) {
      let t = $e;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function YS(e) {
      let t = $e;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function QS(e) {
      let t = $e,
        n = 0,
        r = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (n || (n = 0.3),
          r < 1
            ? ((r = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          -(
            r *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / n)
          ));
    }
    function $S(e) {
      let t = $e,
        n = 0,
        r = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (n || (n = 0.3),
          r < 1
            ? ((r = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          r * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / n) +
            1);
    }
    function ZS(e) {
      let t = $e,
        n = 0,
        r = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (n || (n = 0.3 * 1.5),
          r < 1
            ? ((r = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          e < 1
            ? -0.5 *
              (r *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / n))
            : r *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / n) *
                0.5 +
              1);
    }
    function JS(e) {
      let t = $e;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function ew(e) {
      let t = $e;
      return e * e * ((t + 1) * e - t);
    }
    function tw(e) {
      let t = $e;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function nw(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function rw(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var qi = c((Fi) => {
    "use strict";
    Object.defineProperty(Fi, "__esModule", { value: !0 });
    function iw(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    iw(Fi, {
      applyEasing: function () {
        return cw;
      },
      createBezierEasing: function () {
        return sw;
      },
      optimizeFloat: function () {
        return xi;
      },
    });
    var qf = uw(Di()),
      ow = aw(Li());
    function aw(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Gf(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (Gf = function (r) {
        return r ? n : t;
      })(e);
    }
    function uw(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = Gf(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(r, i, a)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    function xi(e, t = 5, n = 10) {
      let r = Math.pow(n, t),
        o = Number(Math.round(e * r) / r);
      return Math.abs(o) > 1e-4 ? o : 0;
    }
    function sw(e) {
      return (0, ow.default)(...e);
    }
    function cw(e, t, n) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : xi(n ? (t > 0 ? n(t) : t) : t > 0 && e && qf[e] ? qf[e](t) : t);
    }
  });
  var Xf = c((Vi) => {
    "use strict";
    Object.defineProperty(Vi, "__esModule", { value: !0 });
    function lw(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    lw(Vi, {
      createElementState: function () {
        return Bf;
      },
      ixElements: function () {
        return bw;
      },
      mergeActionState: function () {
        return Gi;
      },
    });
    var Kn = bt(),
      Uf = we(),
      {
        HTML_ELEMENT: b5,
        PLAIN_OBJECT: fw,
        ABSTRACT_NODE: A5,
        CONFIG_X_VALUE: dw,
        CONFIG_Y_VALUE: pw,
        CONFIG_Z_VALUE: gw,
        CONFIG_VALUE: hw,
        CONFIG_X_UNIT: Ew,
        CONFIG_Y_UNIT: vw,
        CONFIG_Z_UNIT: _w,
        CONFIG_UNIT: yw,
      } = Uf.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: mw,
        IX2_INSTANCE_ADDED: Iw,
        IX2_ELEMENT_STATE_CHANGED: Tw,
      } = Uf.IX2EngineActionTypes,
      Vf = {},
      Ow = "refState",
      bw = (e = Vf, t = {}) => {
        switch (t.type) {
          case mw:
            return Vf;
          case Iw: {
            let {
                elementId: n,
                element: r,
                origin: o,
                actionItem: i,
                refType: a,
              } = t.payload,
              { actionTypeId: u } = i,
              s = e;
            return (
              (0, Kn.getIn)(s, [n, r]) !== r && (s = Bf(s, r, a, n, i)),
              Gi(s, n, u, o, i)
            );
          }
          case Tw: {
            let {
              elementId: n,
              actionTypeId: r,
              current: o,
              actionItem: i,
            } = t.payload;
            return Gi(e, n, r, o, i);
          }
          default:
            return e;
        }
      };
    function Bf(e, t, n, r, o) {
      let i =
        n === fw ? (0, Kn.getIn)(o, ["config", "target", "objectId"]) : null;
      return (0, Kn.mergeIn)(e, [r], { id: r, ref: t, refId: i, refType: n });
    }
    function Gi(e, t, n, r, o) {
      let i = Sw(o),
        a = [t, Ow, n];
      return (0, Kn.mergeIn)(e, a, r, i);
    }
    var Aw = [
      [dw, Ew],
      [pw, vw],
      [gw, _w],
      [hw, yw],
    ];
    function Sw(e) {
      let { config: t } = e;
      return Aw.reduce((n, r) => {
        let o = r[0],
          i = r[1],
          a = t[o],
          u = t[i];
        return a != null && u != null && (n[i] = u), n;
      }, {});
    }
  });
  var Wf = c((Ui) => {
    "use strict";
    Object.defineProperty(Ui, "__esModule", { value: !0 });
    function ww(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    ww(Ui, {
      clearPlugin: function () {
        return Dw;
      },
      createPluginInstance: function () {
        return Lw;
      },
      getPluginConfig: function () {
        return Cw;
      },
      getPluginDestination: function () {
        return Pw;
      },
      getPluginDuration: function () {
        return Rw;
      },
      getPluginOrigin: function () {
        return Nw;
      },
      renderPlugin: function () {
        return Mw;
      },
    });
    var Cw = (e) => e.value,
      Rw = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let n = parseFloat(e.getAttribute("data-duration"));
        return n > 0
          ? n * 1e3
          : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      },
      Nw = (e) => e || { value: 0 },
      Pw = (e) => ({ value: e.value }),
      Lw = (e) => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      },
      Mw = (e, t, n) => {
        if (!e) return;
        let r = t[n.actionTypeId].value / 100;
        e.goToFrame(e.frames * r);
      },
      Dw = (e) => {
        window.Webflow.require("lottie").createInstance(e).stop();
      };
  });
  var Hf = c((Bi) => {
    "use strict";
    Object.defineProperty(Bi, "__esModule", { value: !0 });
    function xw(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    xw(Bi, {
      clearPlugin: function () {
        return Hw;
      },
      createPluginInstance: function () {
        return Ww;
      },
      getPluginConfig: function () {
        return Vw;
      },
      getPluginDestination: function () {
        return Xw;
      },
      getPluginDuration: function () {
        return Uw;
      },
      getPluginOrigin: function () {
        return Bw;
      },
      renderPlugin: function () {
        return kw;
      },
    });
    var Fw = (e) => document.querySelector(`[data-w-id="${e}"]`),
      qw = () => window.Webflow.require("spline"),
      Gw = (e, t) => e.filter((n) => !t.includes(n)),
      Vw = (e, t) => e.value[t],
      Uw = () => null,
      kf = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      Bw = (e, t) => {
        let n = t.config.value,
          r = Object.keys(n);
        if (e) {
          let i = Object.keys(e),
            a = Gw(r, i);
          return a.length ? a.reduce((s, f) => ((s[f] = kf[f]), s), e) : e;
        }
        return r.reduce((i, a) => ((i[a] = kf[a]), i), {});
      },
      Xw = (e) => e.value,
      Ww = (e, t) => {
        let n = t?.config?.target?.pluginElement;
        return n ? Fw(n) : null;
      },
      kw = (e, t, n) => {
        let r = qw(),
          o = r.getInstance(e),
          i = n.config.target.objectId,
          a = (u) => {
            if (!u)
              throw new Error("Invalid spline app passed to renderSpline");
            let s = i && u.findObjectById(i);
            if (!s) return;
            let { PLUGIN_SPLINE: f } = t;
            f.positionX != null && (s.position.x = f.positionX),
              f.positionY != null && (s.position.y = f.positionY),
              f.positionZ != null && (s.position.z = f.positionZ),
              f.rotationX != null && (s.rotation.x = f.rotationX),
              f.rotationY != null && (s.rotation.y = f.rotationY),
              f.rotationZ != null && (s.rotation.z = f.rotationZ),
              f.scaleX != null && (s.scale.x = f.scaleX),
              f.scaleY != null && (s.scale.y = f.scaleY),
              f.scaleZ != null && (s.scale.z = f.scaleZ);
          };
        o ? a(o.spline) : r.setLoadHandler(e, a);
      },
      Hw = () => null;
  });
  var zf = c((ki) => {
    "use strict";
    Object.defineProperty(ki, "__esModule", { value: !0 });
    function zw(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    zw(ki, {
      clearPlugin: function () {
        return tC;
      },
      createPluginInstance: function () {
        return Jw;
      },
      getPluginConfig: function () {
        return Yw;
      },
      getPluginDestination: function () {
        return Zw;
      },
      getPluginDuration: function () {
        return Qw;
      },
      getPluginOrigin: function () {
        return $w;
      },
      renderPlugin: function () {
        return eC;
      },
    });
    var Xi = "--wf-rive-fit",
      Wi = "--wf-rive-alignment",
      jw = (e) => document.querySelector(`[data-w-id="${e}"]`),
      Kw = () => window.Webflow.require("rive"),
      Yw = (e, t) => e.value.inputs[t],
      Qw = () => null,
      $w = (e, t) => {
        if (e) return e;
        let n = {},
          { inputs: r = {} } = t.config.value;
        for (let o in r) r[o] == null && (n[o] = 0);
        return n;
      },
      Zw = (e) => e.value.inputs ?? {},
      Jw = (e, t) => {
        if ((t.config?.target?.selectorGuids || []).length > 0) return e;
        let r = t?.config?.target?.pluginElement;
        return r ? jw(r) : null;
      },
      eC = (e, { PLUGIN_RIVE: t }, n) => {
        let r = Kw(),
          o = r.getInstance(e),
          i = r.rive.StateMachineInputType,
          { name: a, inputs: u = {} } = n.config.value || {};
        function s(f) {
          if (f.loaded) E();
          else {
            let h = () => {
              E(), f?.off("load", h);
            };
            f?.on("load", h);
          }
          function E() {
            let h = f.stateMachineInputs(a);
            if (h != null) {
              if ((f.isPlaying || f.play(a, !1), Xi in u || Wi in u)) {
                let p = f.layout,
                  g = u[Xi] ?? p.fit,
                  m = u[Wi] ?? p.alignment;
                (g !== p.fit || m !== p.alignment) &&
                  (f.layout = p.copyWith({ fit: g, alignment: m }));
              }
              for (let p in u) {
                if (p === Xi || p === Wi) continue;
                let g = h.find((m) => m.name === p);
                if (g != null)
                  switch (g.type) {
                    case i.Boolean: {
                      if (u[p] != null) {
                        let m = !!u[p];
                        g.value = m;
                      }
                      break;
                    }
                    case i.Number: {
                      let m = t[p];
                      m != null && (g.value = m);
                      break;
                    }
                    case i.Trigger: {
                      u[p] && g.fire();
                      break;
                    }
                  }
              }
            }
          }
        }
        o?.rive ? s(o.rive) : r.setLoadHandler(e, s);
      },
      tC = (e, t) => null;
  });
  var zi = c((Hi) => {
    "use strict";
    Object.defineProperty(Hi, "__esModule", { value: !0 });
    Object.defineProperty(Hi, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return nC;
      },
    });
    var jf = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function nC(e) {
      let t,
        n,
        r,
        o = 1,
        i = e.replace(/\s/g, "").toLowerCase(),
        u = (typeof jf[i] == "string" ? jf[i].toLowerCase() : null) || i;
      if (u.startsWith("#")) {
        let s = u.substring(1);
        s.length === 3 || s.length === 4
          ? ((t = parseInt(s[0] + s[0], 16)),
            (n = parseInt(s[1] + s[1], 16)),
            (r = parseInt(s[2] + s[2], 16)),
            s.length === 4 && (o = parseInt(s[3] + s[3], 16) / 255))
          : (s.length === 6 || s.length === 8) &&
            ((t = parseInt(s.substring(0, 2), 16)),
            (n = parseInt(s.substring(2, 4), 16)),
            (r = parseInt(s.substring(4, 6), 16)),
            s.length === 8 && (o = parseInt(s.substring(6, 8), 16) / 255));
      } else if (u.startsWith("rgba")) {
        let s = u.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (n = parseInt(s[1], 10)),
          (r = parseInt(s[2], 10)),
          (o = parseFloat(s[3]));
      } else if (u.startsWith("rgb")) {
        let s = u.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (n = parseInt(s[1], 10)),
          (r = parseInt(s[2], 10));
      } else if (u.startsWith("hsla")) {
        let s = u.match(/hsla\(([^)]+)\)/)[1].split(","),
          f = parseFloat(s[0]),
          E = parseFloat(s[1].replace("%", "")) / 100,
          h = parseFloat(s[2].replace("%", "")) / 100;
        o = parseFloat(s[3]);
        let p = (1 - Math.abs(2 * h - 1)) * E,
          g = p * (1 - Math.abs(((f / 60) % 2) - 1)),
          m = h - p / 2,
          y,
          O,
          _;
        f >= 0 && f < 60
          ? ((y = p), (O = g), (_ = 0))
          : f >= 60 && f < 120
          ? ((y = g), (O = p), (_ = 0))
          : f >= 120 && f < 180
          ? ((y = 0), (O = p), (_ = g))
          : f >= 180 && f < 240
          ? ((y = 0), (O = g), (_ = p))
          : f >= 240 && f < 300
          ? ((y = g), (O = 0), (_ = p))
          : ((y = p), (O = 0), (_ = g)),
          (t = Math.round((y + m) * 255)),
          (n = Math.round((O + m) * 255)),
          (r = Math.round((_ + m) * 255));
      } else if (u.startsWith("hsl")) {
        let s = u.match(/hsl\(([^)]+)\)/)[1].split(","),
          f = parseFloat(s[0]),
          E = parseFloat(s[1].replace("%", "")) / 100,
          h = parseFloat(s[2].replace("%", "")) / 100,
          p = (1 - Math.abs(2 * h - 1)) * E,
          g = p * (1 - Math.abs(((f / 60) % 2) - 1)),
          m = h - p / 2,
          y,
          O,
          _;
        f >= 0 && f < 60
          ? ((y = p), (O = g), (_ = 0))
          : f >= 60 && f < 120
          ? ((y = g), (O = p), (_ = 0))
          : f >= 120 && f < 180
          ? ((y = 0), (O = p), (_ = g))
          : f >= 180 && f < 240
          ? ((y = 0), (O = g), (_ = p))
          : f >= 240 && f < 300
          ? ((y = g), (O = 0), (_ = p))
          : ((y = p), (O = 0), (_ = g)),
          (t = Math.round((y + m) * 255)),
          (n = Math.round((O + m) * 255)),
          (r = Math.round((_ + m) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: n, blue: r, alpha: o };
    }
  });
  var Kf = c((ji) => {
    "use strict";
    Object.defineProperty(ji, "__esModule", { value: !0 });
    function rC(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    rC(ji, {
      clearPlugin: function () {
        return dC;
      },
      createPluginInstance: function () {
        return cC;
      },
      getPluginConfig: function () {
        return oC;
      },
      getPluginDestination: function () {
        return sC;
      },
      getPluginDuration: function () {
        return aC;
      },
      getPluginOrigin: function () {
        return uC;
      },
      renderPlugin: function () {
        return fC;
      },
    });
    var iC = zi(),
      oC = (e, t) => e.value[t],
      aC = () => null,
      uC = (e, t) => {
        if (e) return e;
        let n = t.config.value,
          r = t.config.target.objectId,
          o = getComputedStyle(document.documentElement).getPropertyValue(r);
        if (n.size != null) return { size: parseInt(o, 10) };
        if (n.unit === "%" || n.unit === "-") return { size: parseFloat(o) };
        if (n.red != null && n.green != null && n.blue != null)
          return (0, iC.normalizeColor)(o);
      },
      sC = (e) => e.value,
      cC = () => null,
      lC = {
        color: {
          match: ({ red: e, green: t, blue: n, alpha: r }) =>
            [e, t, n, r].every((o) => o != null),
          getValue: ({ red: e, green: t, blue: n, alpha: r }) =>
            `rgba(${e}, ${t}, ${n}, ${r})`,
        },
        size: {
          match: ({ size: e }) => e != null,
          getValue: ({ size: e }, t) => {
            switch (t) {
              case "-":
                return e;
              default:
                return `${e}${t}`;
            }
          },
        },
      },
      fC = (e, t, n) => {
        let {
            target: { objectId: r },
            value: { unit: o },
          } = n.config,
          i = t.PLUGIN_VARIABLE,
          a = Object.values(lC).find((u) => u.match(i, o));
        a && document.documentElement.style.setProperty(r, a.getValue(i, o));
      },
      dC = (e, t) => {
        let n = t.config.target.objectId;
        document.documentElement.style.removeProperty(n);
      };
  });
  var Qf = c((Ki) => {
    "use strict";
    Object.defineProperty(Ki, "__esModule", { value: !0 });
    Object.defineProperty(Ki, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return vC;
      },
    });
    var Yn = we(),
      pC = Qn(Wf()),
      gC = Qn(Hf()),
      hC = Qn(zf()),
      EC = Qn(Kf());
    function Yf(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (Yf = function (r) {
        return r ? n : t;
      })(e);
    }
    function Qn(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = Yf(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(r, i, a)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var vC = new Map([
      [Yn.ActionTypeConsts.PLUGIN_LOTTIE, { ...pC }],
      [Yn.ActionTypeConsts.PLUGIN_SPLINE, { ...gC }],
      [Yn.ActionTypeConsts.PLUGIN_RIVE, { ...hC }],
      [Yn.ActionTypeConsts.PLUGIN_VARIABLE, { ...EC }],
    ]);
  });
  var Qi = c((Yi) => {
    "use strict";
    Object.defineProperty(Yi, "__esModule", { value: !0 });
    function _C(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    _C(Yi, {
      clearPlugin: function () {
        return wC;
      },
      createPluginInstance: function () {
        return AC;
      },
      getPluginConfig: function () {
        return IC;
      },
      getPluginDestination: function () {
        return bC;
      },
      getPluginDuration: function () {
        return OC;
      },
      getPluginOrigin: function () {
        return TC;
      },
      isPluginType: function () {
        return mC;
      },
      renderPlugin: function () {
        return SC;
      },
    });
    var yC = kn(),
      $f = Qf();
    function mC(e) {
      return $f.pluginMethodMap.has(e);
    }
    var dt = (e) => (t) => {
        if (!yC.IS_BROWSER_ENV) return () => null;
        let n = $f.pluginMethodMap.get(t);
        if (!n) throw new Error(`IX2 no plugin configured for: ${t}`);
        let r = n[e];
        if (!r) throw new Error(`IX2 invalid plugin method: ${e}`);
        return r;
      },
      IC = dt("getPluginConfig"),
      TC = dt("getPluginOrigin"),
      OC = dt("getPluginDuration"),
      bC = dt("getPluginDestination"),
      AC = dt("createPluginInstance"),
      SC = dt("renderPlugin"),
      wC = dt("clearPlugin");
  });
  var Jf = c((D5, Zf) => {
    function CC(e, t) {
      return e == null || e !== e ? t : e;
    }
    Zf.exports = CC;
  });
  var td = c((x5, ed) => {
    function RC(e, t, n, r) {
      var o = -1,
        i = e == null ? 0 : e.length;
      for (r && i && (n = e[++o]); ++o < i; ) n = t(n, e[o], o, e);
      return n;
    }
    ed.exports = RC;
  });
  var rd = c((F5, nd) => {
    function NC(e) {
      return function (t, n, r) {
        for (var o = -1, i = Object(t), a = r(t), u = a.length; u--; ) {
          var s = a[e ? u : ++o];
          if (n(i[s], s, i) === !1) break;
        }
        return t;
      };
    }
    nd.exports = NC;
  });
  var od = c((q5, id) => {
    var PC = rd(),
      LC = PC();
    id.exports = LC;
  });
  var $i = c((G5, ad) => {
    var MC = od(),
      DC = en();
    function xC(e, t) {
      return e && MC(e, t, DC);
    }
    ad.exports = xC;
  });
  var sd = c((V5, ud) => {
    var FC = lt();
    function qC(e, t) {
      return function (n, r) {
        if (n == null) return n;
        if (!FC(n)) return e(n, r);
        for (
          var o = n.length, i = t ? o : -1, a = Object(n);
          (t ? i-- : ++i < o) && r(a[i], i, a) !== !1;

        );
        return n;
      };
    }
    ud.exports = qC;
  });
  var Zi = c((U5, cd) => {
    var GC = $i(),
      VC = sd(),
      UC = VC(GC);
    cd.exports = UC;
  });
  var fd = c((B5, ld) => {
    function BC(e, t, n, r, o) {
      return (
        o(e, function (i, a, u) {
          n = r ? ((r = !1), i) : t(n, i, a, u);
        }),
        n
      );
    }
    ld.exports = BC;
  });
  var pd = c((X5, dd) => {
    var XC = td(),
      WC = Zi(),
      kC = rt(),
      HC = fd(),
      zC = Ie();
    function jC(e, t, n) {
      var r = zC(e) ? XC : HC,
        o = arguments.length < 3;
      return r(e, kC(t, 4), n, o, WC);
    }
    dd.exports = jC;
  });
  var hd = c((W5, gd) => {
    var KC = Ci(),
      YC = rt(),
      QC = Ri(),
      $C = Math.max,
      ZC = Math.min;
    function JC(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var o = r - 1;
      return (
        n !== void 0 &&
          ((o = QC(n)), (o = n < 0 ? $C(r + o, 0) : ZC(o, r - 1))),
        KC(e, YC(t, 3), o, !0)
      );
    }
    gd.exports = JC;
  });
  var vd = c((k5, Ed) => {
    var eR = wi(),
      tR = hd(),
      nR = eR(tR);
    Ed.exports = nR;
  });
  var yd = c((Ji) => {
    "use strict";
    Object.defineProperty(Ji, "__esModule", { value: !0 });
    Object.defineProperty(Ji, "default", {
      enumerable: !0,
      get: function () {
        return iR;
      },
    });
    function _d(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function rR(e, t) {
      if (_d(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (let o = 0; o < n.length; o++)
        if (!Object.hasOwn(t, n[o]) || !_d(e[n[o]], t[n[o]])) return !1;
      return !0;
    }
    var iR = rR;
  });
  var Gd = c((so) => {
    "use strict";
    Object.defineProperty(so, "__esModule", { value: !0 });
    function oR(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    oR(so, {
      cleanupHTMLElement: function () {
        return iN;
      },
      clearAllStyles: function () {
        return rN;
      },
      clearObjectCache: function () {
        return bR;
      },
      getActionListProgress: function () {
        return aN;
      },
      getAffectedElements: function () {
        return ao;
      },
      getComputedStyle: function () {
        return LR;
      },
      getDestinationValues: function () {
        return VR;
      },
      getElementId: function () {
        return CR;
      },
      getInstanceId: function () {
        return SR;
      },
      getInstanceOrigin: function () {
        return xR;
      },
      getItemConfigByKey: function () {
        return GR;
      },
      getMaxDurationItemIndex: function () {
        return qd;
      },
      getNamespacedParameterId: function () {
        return cN;
      },
      getRenderType: function () {
        return Dd;
      },
      getStyleProp: function () {
        return UR;
      },
      mediaQueriesEqual: function () {
        return fN;
      },
      observeStore: function () {
        return PR;
      },
      reduceListToGroup: function () {
        return uN;
      },
      reifyState: function () {
        return RR;
      },
      renderHTMLElement: function () {
        return BR;
      },
      shallowEqual: function () {
        return wd.default;
      },
      shouldAllowMediaQuery: function () {
        return lN;
      },
      shouldNamespaceEventParameter: function () {
        return sN;
      },
      stringifyTarget: function () {
        return dN;
      },
    });
    var it = er(Jf()),
      no = er(pd()),
      to = er(vd()),
      md = bt(),
      pt = we(),
      wd = er(yd()),
      aR = qi(),
      uR = zi(),
      je = Qi(),
      Ae = kn();
    function er(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var {
        BACKGROUND: sR,
        TRANSFORM: cR,
        TRANSLATE_3D: lR,
        SCALE_3D: fR,
        ROTATE_X: dR,
        ROTATE_Y: pR,
        ROTATE_Z: gR,
        SKEW: hR,
        PRESERVE_3D: ER,
        FLEX: vR,
        OPACITY: Zn,
        FILTER: on,
        FONT_VARIATION_SETTINGS: an,
        WIDTH: He,
        HEIGHT: ze,
        BACKGROUND_COLOR: Cd,
        BORDER_COLOR: _R,
        COLOR: yR,
        CHILDREN: Id,
        IMMEDIATE_CHILDREN: mR,
        SIBLINGS: Td,
        PARENT: IR,
        DISPLAY: Jn,
        WILL_CHANGE: Mt,
        AUTO: ot,
        COMMA_DELIMITER: un,
        COLON_DELIMITER: TR,
        BAR_DELIMITER: eo,
        RENDER_TRANSFORM: Rd,
        RENDER_GENERAL: ro,
        RENDER_STYLE: io,
        RENDER_PLUGIN: Nd,
      } = pt.IX2EngineConstants,
      {
        TRANSFORM_MOVE: Dt,
        TRANSFORM_SCALE: xt,
        TRANSFORM_ROTATE: Ft,
        TRANSFORM_SKEW: sn,
        STYLE_OPACITY: Pd,
        STYLE_FILTER: cn,
        STYLE_FONT_VARIATION: ln,
        STYLE_SIZE: qt,
        STYLE_BACKGROUND_COLOR: Gt,
        STYLE_BORDER: Vt,
        STYLE_TEXT_COLOR: Ut,
        GENERAL_DISPLAY: tr,
        OBJECT_VALUE: OR,
      } = pt.ActionTypeConsts,
      Ld = (e) => e.trim(),
      oo = Object.freeze({ [Gt]: Cd, [Vt]: _R, [Ut]: yR }),
      Md = Object.freeze({
        [Ae.TRANSFORM_PREFIXED]: cR,
        [Cd]: sR,
        [Zn]: Zn,
        [on]: on,
        [He]: He,
        [ze]: ze,
        [an]: an,
      }),
      $n = new Map();
    function bR() {
      $n.clear();
    }
    var AR = 1;
    function SR() {
      return "i" + AR++;
    }
    var wR = 1;
    function CR(e, t) {
      for (let n in e) {
        let r = e[n];
        if (r && r.ref === t) return r.id;
      }
      return "e" + wR++;
    }
    function RR({ events: e, actionLists: t, site: n } = {}) {
      let r = (0, no.default)(
          e,
          (a, u) => {
            let { eventTypeId: s } = u;
            return a[s] || (a[s] = {}), (a[s][u.id] = u), a;
          },
          {}
        ),
        o = n && n.mediaQueries,
        i = [];
      return (
        o
          ? (i = o.map((a) => a.key))
          : ((o = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: r,
            mediaQueries: o,
            mediaQueryKeys: i,
          },
        }
      );
    }
    var NR = (e, t) => e === t;
    function PR({ store: e, select: t, onChange: n, comparator: r = NR }) {
      let { getState: o, subscribe: i } = e,
        a = i(s),
        u = t(o());
      function s() {
        let f = t(o());
        if (f == null) {
          a();
          return;
        }
        r(f, u) || ((u = f), n(u, e));
      }
      return a;
    }
    function Od(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: n,
          objectId: r,
          selector: o,
          selectorGuids: i,
          appliesTo: a,
          useEventTarget: u,
        } = e;
        return {
          id: n,
          objectId: r,
          selector: o,
          selectorGuids: i,
          appliesTo: a,
          useEventTarget: u,
        };
      }
      return {};
    }
    function ao({
      config: e,
      event: t,
      eventTarget: n,
      elementRoot: r,
      elementApi: o,
    }) {
      if (!o) throw new Error("IX2 missing elementApi");
      let { targets: i } = e;
      if (Array.isArray(i) && i.length > 0)
        return i.reduce(
          (D, T) =>
            D.concat(
              ao({
                config: { target: T },
                event: t,
                eventTarget: n,
                elementRoot: r,
                elementApi: o,
              })
            ),
          []
        );
      let {
          getValidDocument: a,
          getQuerySelector: u,
          queryDocument: s,
          getChildElements: f,
          getSiblingElements: E,
          matchSelector: h,
          elementContains: p,
          isSiblingNode: g,
        } = o,
        { target: m } = e;
      if (!m) return [];
      let {
        id: y,
        objectId: O,
        selector: _,
        selectorGuids: S,
        appliesTo: b,
        useEventTarget: R,
      } = Od(m);
      if (O) return [$n.has(O) ? $n.get(O) : $n.set(O, {}).get(O)];
      if (b === pt.EventAppliesTo.PAGE) {
        let D = a(y);
        return D ? [D] : [];
      }
      let N = (t?.action?.config?.affectedElements ?? {})[y || _] || {},
        V = !!(N.id || N.selector),
        X,
        W,
        j,
        J = t && u(Od(t.target));
      if (
        (V
          ? ((X = N.limitAffectedElements), (W = J), (j = u(N)))
          : (W = j = u({ id: y, selector: _, selectorGuids: S })),
        t && R)
      ) {
        let D = n && (j || R === !0) ? [n] : s(J);
        if (j) {
          if (R === IR) return s(j).filter((T) => D.some((M) => p(T, M)));
          if (R === Id) return s(j).filter((T) => D.some((M) => p(M, T)));
          if (R === Td) return s(j).filter((T) => D.some((M) => g(M, T)));
        }
        return D;
      }
      return W == null || j == null
        ? []
        : Ae.IS_BROWSER_ENV && r
        ? s(j).filter((D) => r.contains(D))
        : X === Id
        ? s(W, j)
        : X === mR
        ? f(s(W)).filter(h(j))
        : X === Td
        ? E(s(W)).filter(h(j))
        : s(j);
    }
    function LR({ element: e, actionItem: t }) {
      if (!Ae.IS_BROWSER_ENV) return {};
      let { actionTypeId: n } = t;
      switch (n) {
        case qt:
        case Gt:
        case Vt:
        case Ut:
        case tr:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var bd = /px/,
      MR = (e, t) =>
        t.reduce(
          (n, r) => (n[r.type] == null && (n[r.type] = XR[r.type]), n),
          e || {}
        ),
      DR = (e, t) =>
        t.reduce(
          (n, r) => (
            n[r.type] == null &&
              (n[r.type] = WR[r.type] || r.defaultValue || 0),
            n
          ),
          e || {}
        );
    function xR(e, t = {}, n = {}, r, o) {
      let { getStyle: i } = o,
        { actionTypeId: a } = r;
      if ((0, je.isPluginType)(a)) return (0, je.getPluginOrigin)(a)(t[a], r);
      switch (r.actionTypeId) {
        case Dt:
        case xt:
        case Ft:
        case sn:
          return t[r.actionTypeId] || uo[r.actionTypeId];
        case cn:
          return MR(t[r.actionTypeId], r.config.filters);
        case ln:
          return DR(t[r.actionTypeId], r.config.fontVariations);
        case Pd:
          return { value: (0, it.default)(parseFloat(i(e, Zn)), 1) };
        case qt: {
          let u = i(e, He),
            s = i(e, ze),
            f,
            E;
          return (
            r.config.widthUnit === ot
              ? (f = bd.test(u) ? parseFloat(u) : parseFloat(n.width))
              : (f = (0, it.default)(parseFloat(u), parseFloat(n.width))),
            r.config.heightUnit === ot
              ? (E = bd.test(s) ? parseFloat(s) : parseFloat(n.height))
              : (E = (0, it.default)(parseFloat(s), parseFloat(n.height))),
            { widthValue: f, heightValue: E }
          );
        }
        case Gt:
        case Vt:
        case Ut:
          return eN({
            element: e,
            actionTypeId: r.actionTypeId,
            computedStyle: n,
            getStyle: i,
          });
        case tr:
          return { value: (0, it.default)(i(e, Jn), n.display) };
        case OR:
          return t[r.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var FR = (e, t) => (t && (e[t.type] = t.value || 0), e),
      qR = (e, t) => (t && (e[t.type] = t.value || 0), e),
      GR = (e, t, n) => {
        if ((0, je.isPluginType)(e)) return (0, je.getPluginConfig)(e)(n, t);
        switch (e) {
          case cn: {
            let r = (0, to.default)(n.filters, ({ type: o }) => o === t);
            return r ? r.value : 0;
          }
          case ln: {
            let r = (0, to.default)(n.fontVariations, ({ type: o }) => o === t);
            return r ? r.value : 0;
          }
          default:
            return n[t];
        }
      };
    function VR({ element: e, actionItem: t, elementApi: n }) {
      if ((0, je.isPluginType)(t.actionTypeId))
        return (0, je.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case Dt:
        case xt:
        case Ft:
        case sn: {
          let { xValue: r, yValue: o, zValue: i } = t.config;
          return { xValue: r, yValue: o, zValue: i };
        }
        case qt: {
          let { getStyle: r, setStyle: o, getProperty: i } = n,
            { widthUnit: a, heightUnit: u } = t.config,
            { widthValue: s, heightValue: f } = t.config;
          if (!Ae.IS_BROWSER_ENV) return { widthValue: s, heightValue: f };
          if (a === ot) {
            let E = r(e, He);
            o(e, He, ""), (s = i(e, "offsetWidth")), o(e, He, E);
          }
          if (u === ot) {
            let E = r(e, ze);
            o(e, ze, ""), (f = i(e, "offsetHeight")), o(e, ze, E);
          }
          return { widthValue: s, heightValue: f };
        }
        case Gt:
        case Vt:
        case Ut: {
          let {
            rValue: r,
            gValue: o,
            bValue: i,
            aValue: a,
            globalSwatchId: u,
          } = t.config;
          if (u && u.startsWith("--")) {
            let { getStyle: s } = n,
              f = s(e, u),
              E = (0, uR.normalizeColor)(f);
            return {
              rValue: E.red,
              gValue: E.green,
              bValue: E.blue,
              aValue: E.alpha,
            };
          }
          return { rValue: r, gValue: o, bValue: i, aValue: a };
        }
        case cn:
          return t.config.filters.reduce(FR, {});
        case ln:
          return t.config.fontVariations.reduce(qR, {});
        default: {
          let { value: r } = t.config;
          return { value: r };
        }
      }
    }
    function Dd(e) {
      if (/^TRANSFORM_/.test(e)) return Rd;
      if (/^STYLE_/.test(e)) return io;
      if (/^GENERAL_/.test(e)) return ro;
      if (/^PLUGIN_/.test(e)) return Nd;
    }
    function UR(e, t) {
      return e === io ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function BR(e, t, n, r, o, i, a, u, s) {
      switch (u) {
        case Rd:
          return zR(e, t, n, o, a);
        case io:
          return tN(e, t, n, o, i, a);
        case ro:
          return nN(e, o, a);
        case Nd: {
          let { actionTypeId: f } = o;
          if ((0, je.isPluginType)(f)) return (0, je.renderPlugin)(f)(s, t, o);
        }
      }
    }
    var uo = {
        [Dt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [xt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [Ft]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [sn]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      XR = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      WR = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      kR = (e, t) => {
        let n = (0, to.default)(t.filters, ({ type: r }) => r === e);
        if (n && n.unit) return n.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      HR = Object.keys(uo);
    function zR(e, t, n, r, o) {
      let i = HR.map((u) => {
          let s = uo[u],
            {
              xValue: f = s.xValue,
              yValue: E = s.yValue,
              zValue: h = s.zValue,
              xUnit: p = "",
              yUnit: g = "",
              zUnit: m = "",
            } = t[u] || {};
          switch (u) {
            case Dt:
              return `${lR}(${f}${p}, ${E}${g}, ${h}${m})`;
            case xt:
              return `${fR}(${f}${p}, ${E}${g}, ${h}${m})`;
            case Ft:
              return `${dR}(${f}${p}) ${pR}(${E}${g}) ${gR}(${h}${m})`;
            case sn:
              return `${hR}(${f}${p}, ${E}${g})`;
            default:
              return "";
          }
        }).join(" "),
        { setStyle: a } = o;
      gt(e, Ae.TRANSFORM_PREFIXED, o),
        a(e, Ae.TRANSFORM_PREFIXED, i),
        YR(r, n) && a(e, Ae.TRANSFORM_STYLE_PREFIXED, ER);
    }
    function jR(e, t, n, r) {
      let o = (0, no.default)(t, (a, u, s) => `${a} ${s}(${u}${kR(s, n)})`, ""),
        { setStyle: i } = r;
      gt(e, on, r), i(e, on, o);
    }
    function KR(e, t, n, r) {
      let o = (0, no.default)(
          t,
          (a, u, s) => (a.push(`"${s}" ${u}`), a),
          []
        ).join(", "),
        { setStyle: i } = r;
      gt(e, an, r), i(e, an, o);
    }
    function YR({ actionTypeId: e }, { xValue: t, yValue: n, zValue: r }) {
      return (
        (e === Dt && r !== void 0) ||
        (e === xt && r !== void 0) ||
        (e === Ft && (t !== void 0 || n !== void 0))
      );
    }
    var QR = "\\(([^)]+)\\)",
      $R = /^rgb/,
      ZR = RegExp(`rgba?${QR}`);
    function JR(e, t) {
      let n = e.exec(t);
      return n ? n[1] : "";
    }
    function eN({
      element: e,
      actionTypeId: t,
      computedStyle: n,
      getStyle: r,
    }) {
      let o = oo[t],
        i = r(e, o),
        a = $R.test(i) ? i : n[o],
        u = JR(ZR, a).split(un);
      return {
        rValue: (0, it.default)(parseInt(u[0], 10), 255),
        gValue: (0, it.default)(parseInt(u[1], 10), 255),
        bValue: (0, it.default)(parseInt(u[2], 10), 255),
        aValue: (0, it.default)(parseFloat(u[3]), 1),
      };
    }
    function tN(e, t, n, r, o, i) {
      let { setStyle: a } = i;
      switch (r.actionTypeId) {
        case qt: {
          let { widthUnit: u = "", heightUnit: s = "" } = r.config,
            { widthValue: f, heightValue: E } = n;
          f !== void 0 &&
            (u === ot && (u = "px"), gt(e, He, i), a(e, He, f + u)),
            E !== void 0 &&
              (s === ot && (s = "px"), gt(e, ze, i), a(e, ze, E + s));
          break;
        }
        case cn: {
          jR(e, n, r.config, i);
          break;
        }
        case ln: {
          KR(e, n, r.config, i);
          break;
        }
        case Gt:
        case Vt:
        case Ut: {
          let u = oo[r.actionTypeId],
            s = Math.round(n.rValue),
            f = Math.round(n.gValue),
            E = Math.round(n.bValue),
            h = n.aValue;
          gt(e, u, i),
            a(
              e,
              u,
              h >= 1 ? `rgb(${s},${f},${E})` : `rgba(${s},${f},${E},${h})`
            );
          break;
        }
        default: {
          let { unit: u = "" } = r.config;
          gt(e, o, i), a(e, o, n.value + u);
          break;
        }
      }
    }
    function nN(e, t, n) {
      let { setStyle: r } = n;
      switch (t.actionTypeId) {
        case tr: {
          let { value: o } = t.config;
          o === vR && Ae.IS_BROWSER_ENV
            ? r(e, Jn, Ae.FLEX_PREFIXED)
            : r(e, Jn, o);
          return;
        }
      }
    }
    function gt(e, t, n) {
      if (!Ae.IS_BROWSER_ENV) return;
      let r = Md[t];
      if (!r) return;
      let { getStyle: o, setStyle: i } = n,
        a = o(e, Mt);
      if (!a) {
        i(e, Mt, r);
        return;
      }
      let u = a.split(un).map(Ld);
      u.indexOf(r) === -1 && i(e, Mt, u.concat(r).join(un));
    }
    function xd(e, t, n) {
      if (!Ae.IS_BROWSER_ENV) return;
      let r = Md[t];
      if (!r) return;
      let { getStyle: o, setStyle: i } = n,
        a = o(e, Mt);
      !a ||
        a.indexOf(r) === -1 ||
        i(
          e,
          Mt,
          a
            .split(un)
            .map(Ld)
            .filter((u) => u !== r)
            .join(un)
        );
    }
    function rN({ store: e, elementApi: t }) {
      let { ixData: n } = e.getState(),
        { events: r = {}, actionLists: o = {} } = n;
      Object.keys(r).forEach((i) => {
        let a = r[i],
          { config: u } = a.action,
          { actionListId: s } = u,
          f = o[s];
        f && Ad({ actionList: f, event: a, elementApi: t });
      }),
        Object.keys(o).forEach((i) => {
          Ad({ actionList: o[i], elementApi: t });
        });
    }
    function Ad({ actionList: e = {}, event: t, elementApi: n }) {
      let { actionItemGroups: r, continuousParameterGroups: o } = e;
      r &&
        r.forEach((i) => {
          Sd({ actionGroup: i, event: t, elementApi: n });
        }),
        o &&
          o.forEach((i) => {
            let { continuousActionGroups: a } = i;
            a.forEach((u) => {
              Sd({ actionGroup: u, event: t, elementApi: n });
            });
          });
    }
    function Sd({ actionGroup: e, event: t, elementApi: n }) {
      let { actionItems: r } = e;
      r.forEach((o) => {
        let { actionTypeId: i, config: a } = o,
          u;
        (0, je.isPluginType)(i)
          ? (u = (s) => (0, je.clearPlugin)(i)(s, o))
          : (u = Fd({ effect: oN, actionTypeId: i, elementApi: n })),
          ao({ config: a, event: t, elementApi: n }).forEach(u);
      });
    }
    function iN(e, t, n) {
      let { setStyle: r, getStyle: o } = n,
        { actionTypeId: i } = t;
      if (i === qt) {
        let { config: a } = t;
        a.widthUnit === ot && r(e, He, ""), a.heightUnit === ot && r(e, ze, "");
      }
      o(e, Mt) && Fd({ effect: xd, actionTypeId: i, elementApi: n })(e);
    }
    var Fd =
      ({ effect: e, actionTypeId: t, elementApi: n }) =>
      (r) => {
        switch (t) {
          case Dt:
          case xt:
          case Ft:
          case sn:
            e(r, Ae.TRANSFORM_PREFIXED, n);
            break;
          case cn:
            e(r, on, n);
            break;
          case ln:
            e(r, an, n);
            break;
          case Pd:
            e(r, Zn, n);
            break;
          case qt:
            e(r, He, n), e(r, ze, n);
            break;
          case Gt:
          case Vt:
          case Ut:
            e(r, oo[t], n);
            break;
          case tr:
            e(r, Jn, n);
            break;
        }
      };
    function oN(e, t, n) {
      let { setStyle: r } = n;
      xd(e, t, n),
        r(e, t, ""),
        t === Ae.TRANSFORM_PREFIXED && r(e, Ae.TRANSFORM_STYLE_PREFIXED, "");
    }
    function qd(e) {
      let t = 0,
        n = 0;
      return (
        e.forEach((r, o) => {
          let { config: i } = r,
            a = i.delay + i.duration;
          a >= t && ((t = a), (n = o));
        }),
        n
      );
    }
    function aN(e, t) {
      let { actionItemGroups: n, useFirstGroupAsInitialState: r } = e,
        { actionItem: o, verboseTimeElapsed: i = 0 } = t,
        a = 0,
        u = 0;
      return (
        n.forEach((s, f) => {
          if (r && f === 0) return;
          let { actionItems: E } = s,
            h = E[qd(E)],
            { config: p, actionTypeId: g } = h;
          o.id === h.id && (u = a + i);
          let m = Dd(g) === ro ? 0 : p.duration;
          a += p.delay + m;
        }),
        a > 0 ? (0, aR.optimizeFloat)(u / a) : 0
      );
    }
    function uN({ actionList: e, actionItemId: t, rawData: n }) {
      let { actionItemGroups: r, continuousParameterGroups: o } = e,
        i = [],
        a = (u) => (
          i.push((0, md.mergeIn)(u, ["config"], { delay: 0, duration: 0 })),
          u.id === t
        );
      return (
        r && r.some(({ actionItems: u }) => u.some(a)),
        o &&
          o.some((u) => {
            let { continuousActionGroups: s } = u;
            return s.some(({ actionItems: f }) => f.some(a));
          }),
        (0, md.setIn)(n, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
        })
      );
    }
    function sN(e, { basedOn: t }) {
      return (
        (e === pt.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === pt.EventBasedOn.ELEMENT || t == null)) ||
        (e === pt.EventTypeConsts.MOUSE_MOVE && t === pt.EventBasedOn.ELEMENT)
      );
    }
    function cN(e, t) {
      return e + TR + t;
    }
    function lN(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function fN(e, t) {
      return (0, wd.default)(e && e.sort(), t && t.sort());
    }
    function dN(e) {
      if (typeof e == "string") return e;
      if (e.pluginElement && e.objectId)
        return e.pluginElement + eo + e.objectId;
      if (e.objectId) return e.objectId;
      let { id: t = "", selector: n = "", useEventTarget: r = "" } = e;
      return t + eo + n + eo + r;
    }
  });
  var ht = c((co) => {
    "use strict";
    Object.defineProperty(co, "__esModule", { value: !0 });
    function pN(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    pN(co, {
      IX2BrowserSupport: function () {
        return gN;
      },
      IX2EasingUtils: function () {
        return EN;
      },
      IX2Easings: function () {
        return hN;
      },
      IX2ElementsReducer: function () {
        return vN;
      },
      IX2VanillaPlugins: function () {
        return _N;
      },
      IX2VanillaUtils: function () {
        return yN;
      },
    });
    var gN = Bt(kn()),
      hN = Bt(Di()),
      EN = Bt(qi()),
      vN = Bt(Xf()),
      _N = Bt(Qi()),
      yN = Bt(Gd());
    function Vd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (Vd = function (r) {
        return r ? n : t;
      })(e);
    }
    function Bt(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = Vd(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(r, i, a)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
  });
  var Wd = c((fo) => {
    "use strict";
    Object.defineProperty(fo, "__esModule", { value: !0 });
    Object.defineProperty(fo, "ixInstances", {
      enumerable: !0,
      get: function () {
        return LN;
      },
    });
    var Ud = we(),
      Bd = ht(),
      Xt = bt(),
      {
        IX2_RAW_DATA_IMPORTED: mN,
        IX2_SESSION_STOPPED: IN,
        IX2_INSTANCE_ADDED: TN,
        IX2_INSTANCE_STARTED: ON,
        IX2_INSTANCE_REMOVED: bN,
        IX2_ANIMATION_FRAME_CHANGED: AN,
      } = Ud.IX2EngineActionTypes,
      {
        optimizeFloat: nr,
        applyEasing: Xd,
        createBezierEasing: SN,
      } = Bd.IX2EasingUtils,
      { RENDER_GENERAL: wN } = Ud.IX2EngineConstants,
      {
        getItemConfigByKey: lo,
        getRenderType: CN,
        getStyleProp: RN,
      } = Bd.IX2VanillaUtils,
      NN = (e, t) => {
        let {
            position: n,
            parameterId: r,
            actionGroups: o,
            destinationKeys: i,
            smoothing: a,
            restingValue: u,
            actionTypeId: s,
            customEasingFn: f,
            skipMotion: E,
            skipToValue: h,
          } = e,
          { parameters: p } = t.payload,
          g = Math.max(1 - a, 0.01),
          m = p[r];
        m == null && ((g = 1), (m = u));
        let y = Math.max(m, 0) || 0,
          O = nr(y - n),
          _ = E ? h : nr(n + O * g),
          S = _ * 100;
        if (_ === n && e.current) return e;
        let b, R, L, N;
        for (let X = 0, { length: W } = o; X < W; X++) {
          let { keyframe: j, actionItems: J } = o[X];
          if ((X === 0 && (b = J[0]), S >= j)) {
            b = J[0];
            let D = o[X + 1],
              T = D && S !== j;
            (R = T ? D.actionItems[0] : null),
              T && ((L = j / 100), (N = (D.keyframe - j) / 100));
          }
        }
        let V = {};
        if (b && !R)
          for (let X = 0, { length: W } = i; X < W; X++) {
            let j = i[X];
            V[j] = lo(s, j, b.config);
          }
        else if (b && R && L !== void 0 && N !== void 0) {
          let X = (_ - L) / N,
            W = b.config.easing,
            j = Xd(W, X, f);
          for (let J = 0, { length: D } = i; J < D; J++) {
            let T = i[J],
              M = lo(s, T, b.config),
              ee = (lo(s, T, R.config) - M) * j + M;
            V[T] = ee;
          }
        }
        return (0, Xt.merge)(e, { position: _, current: V });
      },
      PN = (e, t) => {
        let {
            active: n,
            origin: r,
            start: o,
            immediate: i,
            renderType: a,
            verbose: u,
            actionItem: s,
            destination: f,
            destinationKeys: E,
            pluginDuration: h,
            instanceDelay: p,
            customEasingFn: g,
            skipMotion: m,
          } = e,
          y = s.config.easing,
          { duration: O, delay: _ } = s.config;
        h != null && (O = h),
          (_ = p ?? _),
          a === wN ? (O = 0) : (i || m) && (O = _ = 0);
        let { now: S } = t.payload;
        if (n && r) {
          let b = S - (o + _);
          if (u) {
            let X = S - o,
              W = O + _,
              j = nr(Math.min(Math.max(0, X / W), 1));
            e = (0, Xt.set)(e, "verboseTimeElapsed", W * j);
          }
          if (b < 0) return e;
          let R = nr(Math.min(Math.max(0, b / O), 1)),
            L = Xd(y, R, g),
            N = {},
            V = null;
          return (
            E.length &&
              (V = E.reduce((X, W) => {
                let j = f[W],
                  J = parseFloat(r[W]) || 0,
                  T = (parseFloat(j) - J) * L + J;
                return (X[W] = T), X;
              }, {})),
            (N.current = V),
            (N.position = R),
            R === 1 && ((N.active = !1), (N.complete = !0)),
            (0, Xt.merge)(e, N)
          );
        }
        return e;
      },
      LN = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case mN:
            return t.payload.ixInstances || Object.freeze({});
          case IN:
            return Object.freeze({});
          case TN: {
            let {
                instanceId: n,
                elementId: r,
                actionItem: o,
                eventId: i,
                eventTarget: a,
                eventStateKey: u,
                actionListId: s,
                groupIndex: f,
                isCarrier: E,
                origin: h,
                destination: p,
                immediate: g,
                verbose: m,
                continuous: y,
                parameterId: O,
                actionGroups: _,
                smoothing: S,
                restingValue: b,
                pluginInstance: R,
                pluginDuration: L,
                instanceDelay: N,
                skipMotion: V,
                skipToValue: X,
              } = t.payload,
              { actionTypeId: W } = o,
              j = CN(W),
              J = RN(j, W),
              D = Object.keys(p).filter(
                (M) => p[M] != null && typeof p[M] != "string"
              ),
              { easing: T } = o.config;
            return (0, Xt.set)(e, n, {
              id: n,
              elementId: r,
              active: !1,
              position: 0,
              start: 0,
              origin: h,
              destination: p,
              destinationKeys: D,
              immediate: g,
              verbose: m,
              current: null,
              actionItem: o,
              actionTypeId: W,
              eventId: i,
              eventTarget: a,
              eventStateKey: u,
              actionListId: s,
              groupIndex: f,
              renderType: j,
              isCarrier: E,
              styleProp: J,
              continuous: y,
              parameterId: O,
              actionGroups: _,
              smoothing: S,
              restingValue: b,
              pluginInstance: R,
              pluginDuration: L,
              instanceDelay: N,
              skipMotion: V,
              skipToValue: X,
              customEasingFn:
                Array.isArray(T) && T.length === 4 ? SN(T) : void 0,
            });
          }
          case ON: {
            let { instanceId: n, time: r } = t.payload;
            return (0, Xt.mergeIn)(e, [n], {
              active: !0,
              complete: !1,
              start: r,
            });
          }
          case bN: {
            let { instanceId: n } = t.payload;
            if (!e[n]) return e;
            let r = {},
              o = Object.keys(e),
              { length: i } = o;
            for (let a = 0; a < i; a++) {
              let u = o[a];
              u !== n && (r[u] = e[u]);
            }
            return r;
          }
          case AN: {
            let n = e,
              r = Object.keys(e),
              { length: o } = r;
            for (let i = 0; i < o; i++) {
              let a = r[i],
                u = e[a],
                s = u.continuous ? NN : PN;
              n = (0, Xt.set)(n, a, s(u, t));
            }
            return n;
          }
          default:
            return e;
        }
      };
  });
  var kd = c((po) => {
    "use strict";
    Object.defineProperty(po, "__esModule", { value: !0 });
    Object.defineProperty(po, "ixParameters", {
      enumerable: !0,
      get: function () {
        return qN;
      },
    });
    var MN = we(),
      {
        IX2_RAW_DATA_IMPORTED: DN,
        IX2_SESSION_STOPPED: xN,
        IX2_PARAMETER_CHANGED: FN,
      } = MN.IX2EngineActionTypes,
      qN = (e = {}, t) => {
        switch (t.type) {
          case DN:
            return t.payload.ixParameters || {};
          case xN:
            return {};
          case FN: {
            let { key: n, value: r } = t.payload;
            return (e[n] = r), e;
          }
          default:
            return e;
        }
      };
  });
  var Hd = c((go) => {
    "use strict";
    Object.defineProperty(go, "__esModule", { value: !0 });
    Object.defineProperty(go, "default", {
      enumerable: !0,
      get: function () {
        return zN;
      },
    });
    var GN = Hr(),
      VN = iu(),
      UN = Ou(),
      BN = Au(),
      XN = ht(),
      WN = Wd(),
      kN = kd(),
      { ixElements: HN } = XN.IX2ElementsReducer,
      zN = (0, GN.combineReducers)({
        ixData: VN.ixData,
        ixRequest: UN.ixRequest,
        ixSession: BN.ixSession,
        ixElements: HN,
        ixInstances: WN.ixInstances,
        ixParameters: kN.ixParameters,
      });
  });
  var jd = c(($5, zd) => {
    var jN = tt(),
      KN = Ie(),
      YN = Qe(),
      QN = "[object String]";
    function $N(e) {
      return typeof e == "string" || (!KN(e) && YN(e) && jN(e) == QN);
    }
    zd.exports = $N;
  });
  var Yd = c((Z5, Kd) => {
    var ZN = Si(),
      JN = ZN("length");
    Kd.exports = JN;
  });
  var $d = c((J5, Qd) => {
    var eP = "\\ud800-\\udfff",
      tP = "\\u0300-\\u036f",
      nP = "\\ufe20-\\ufe2f",
      rP = "\\u20d0-\\u20ff",
      iP = tP + nP + rP,
      oP = "\\ufe0e\\ufe0f",
      aP = "\\u200d",
      uP = RegExp("[" + aP + eP + iP + oP + "]");
    function sP(e) {
      return uP.test(e);
    }
    Qd.exports = sP;
  });
  var ap = c((eG, op) => {
    var Jd = "\\ud800-\\udfff",
      cP = "\\u0300-\\u036f",
      lP = "\\ufe20-\\ufe2f",
      fP = "\\u20d0-\\u20ff",
      dP = cP + lP + fP,
      pP = "\\ufe0e\\ufe0f",
      gP = "[" + Jd + "]",
      ho = "[" + dP + "]",
      Eo = "\\ud83c[\\udffb-\\udfff]",
      hP = "(?:" + ho + "|" + Eo + ")",
      ep = "[^" + Jd + "]",
      tp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      np = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      EP = "\\u200d",
      rp = hP + "?",
      ip = "[" + pP + "]?",
      vP = "(?:" + EP + "(?:" + [ep, tp, np].join("|") + ")" + ip + rp + ")*",
      _P = ip + rp + vP,
      yP = "(?:" + [ep + ho + "?", ho, tp, np, gP].join("|") + ")",
      Zd = RegExp(Eo + "(?=" + Eo + ")|" + yP + _P, "g");
    function mP(e) {
      for (var t = (Zd.lastIndex = 0); Zd.test(e); ) ++t;
      return t;
    }
    op.exports = mP;
  });
  var sp = c((tG, up) => {
    var IP = Yd(),
      TP = $d(),
      OP = ap();
    function bP(e) {
      return TP(e) ? OP(e) : IP(e);
    }
    up.exports = bP;
  });
  var lp = c((nG, cp) => {
    var AP = xn(),
      SP = Fn(),
      wP = lt(),
      CP = jd(),
      RP = sp(),
      NP = "[object Map]",
      PP = "[object Set]";
    function LP(e) {
      if (e == null) return 0;
      if (wP(e)) return CP(e) ? RP(e) : e.length;
      var t = SP(e);
      return t == NP || t == PP ? e.size : AP(e).length;
    }
    cp.exports = LP;
  });
  var dp = c((rG, fp) => {
    var MP = "Expected a function";
    function DP(e) {
      if (typeof e != "function") throw new TypeError(MP);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    fp.exports = DP;
  });
  var vo = c((iG, pp) => {
    var xP = nt(),
      FP = (function () {
        try {
          var e = xP(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    pp.exports = FP;
  });
  var _o = c((oG, hp) => {
    var gp = vo();
    function qP(e, t, n) {
      t == "__proto__" && gp
        ? gp(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
        : (e[t] = n);
    }
    hp.exports = qP;
  });
  var vp = c((aG, Ep) => {
    var GP = _o(),
      VP = An(),
      UP = Object.prototype,
      BP = UP.hasOwnProperty;
    function XP(e, t, n) {
      var r = e[t];
      (!(BP.call(e, t) && VP(r, n)) || (n === void 0 && !(t in e))) &&
        GP(e, t, n);
    }
    Ep.exports = XP;
  });
  var mp = c((uG, yp) => {
    var WP = vp(),
      kP = nn(),
      HP = Pn(),
      _p = ke(),
      zP = Lt();
    function jP(e, t, n, r) {
      if (!_p(e)) return e;
      t = kP(t, e);
      for (var o = -1, i = t.length, a = i - 1, u = e; u != null && ++o < i; ) {
        var s = zP(t[o]),
          f = n;
        if (s === "__proto__" || s === "constructor" || s === "prototype")
          return e;
        if (o != a) {
          var E = u[s];
          (f = r ? r(E, s, u) : void 0),
            f === void 0 && (f = _p(E) ? E : HP(t[o + 1]) ? [] : {});
        }
        WP(u, s, f), (u = u[s]);
      }
      return e;
    }
    yp.exports = jP;
  });
  var Tp = c((sG, Ip) => {
    var KP = Vn(),
      YP = mp(),
      QP = nn();
    function $P(e, t, n) {
      for (var r = -1, o = t.length, i = {}; ++r < o; ) {
        var a = t[r],
          u = KP(e, a);
        n(u, a) && YP(i, QP(a, e), u);
      }
      return i;
    }
    Ip.exports = $P;
  });
  var bp = c((cG, Op) => {
    var ZP = Rn(),
      JP = Lr(),
      eL = fi(),
      tL = li(),
      nL = Object.getOwnPropertySymbols,
      rL = nL
        ? function (e) {
            for (var t = []; e; ) ZP(t, eL(e)), (e = JP(e));
            return t;
          }
        : tL;
    Op.exports = rL;
  });
  var Sp = c((lG, Ap) => {
    function iL(e) {
      var t = [];
      if (e != null) for (var n in Object(e)) t.push(n);
      return t;
    }
    Ap.exports = iL;
  });
  var Cp = c((fG, wp) => {
    var oL = ke(),
      aL = Dn(),
      uL = Sp(),
      sL = Object.prototype,
      cL = sL.hasOwnProperty;
    function lL(e) {
      if (!oL(e)) return uL(e);
      var t = aL(e),
        n = [];
      for (var r in e)
        (r == "constructor" && (t || !cL.call(e, r))) || n.push(r);
      return n;
    }
    wp.exports = lL;
  });
  var Np = c((dG, Rp) => {
    var fL = pi(),
      dL = Cp(),
      pL = lt();
    function gL(e) {
      return pL(e) ? fL(e, !0) : dL(e);
    }
    Rp.exports = gL;
  });
  var Lp = c((pG, Pp) => {
    var hL = ci(),
      EL = bp(),
      vL = Np();
    function _L(e) {
      return hL(e, vL, EL);
    }
    Pp.exports = _L;
  });
  var Dp = c((gG, Mp) => {
    var yL = Ai(),
      mL = rt(),
      IL = Tp(),
      TL = Lp();
    function OL(e, t) {
      if (e == null) return {};
      var n = yL(TL(e), function (r) {
        return [r];
      });
      return (
        (t = mL(t)),
        IL(e, n, function (r, o) {
          return t(r, o[0]);
        })
      );
    }
    Mp.exports = OL;
  });
  var Fp = c((hG, xp) => {
    var bL = rt(),
      AL = dp(),
      SL = Dp();
    function wL(e, t) {
      return SL(e, AL(bL(t)));
    }
    xp.exports = wL;
  });
  var Gp = c((EG, qp) => {
    var CL = xn(),
      RL = Fn(),
      NL = Qt(),
      PL = Ie(),
      LL = lt(),
      ML = Nn(),
      DL = Dn(),
      xL = Mn(),
      FL = "[object Map]",
      qL = "[object Set]",
      GL = Object.prototype,
      VL = GL.hasOwnProperty;
    function UL(e) {
      if (e == null) return !0;
      if (
        LL(e) &&
        (PL(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          ML(e) ||
          xL(e) ||
          NL(e))
      )
        return !e.length;
      var t = RL(e);
      if (t == FL || t == qL) return !e.size;
      if (DL(e)) return !CL(e).length;
      for (var n in e) if (VL.call(e, n)) return !1;
      return !0;
    }
    qp.exports = UL;
  });
  var Up = c((vG, Vp) => {
    var BL = _o(),
      XL = $i(),
      WL = rt();
    function kL(e, t) {
      var n = {};
      return (
        (t = WL(t, 3)),
        XL(e, function (r, o, i) {
          BL(n, o, t(r, o, i));
        }),
        n
      );
    }
    Vp.exports = kL;
  });
  var Xp = c((_G, Bp) => {
    function HL(e, t) {
      for (
        var n = -1, r = e == null ? 0 : e.length;
        ++n < r && t(e[n], n, e) !== !1;

      );
      return e;
    }
    Bp.exports = HL;
  });
  var kp = c((yG, Wp) => {
    var zL = Bn();
    function jL(e) {
      return typeof e == "function" ? e : zL;
    }
    Wp.exports = jL;
  });
  var zp = c((mG, Hp) => {
    var KL = Xp(),
      YL = Zi(),
      QL = kp(),
      $L = Ie();
    function ZL(e, t) {
      var n = $L(e) ? KL : YL;
      return n(e, QL(t));
    }
    Hp.exports = ZL;
  });
  var Kp = c((IG, jp) => {
    var JL = Ve(),
      e2 = function () {
        return JL.Date.now();
      };
    jp.exports = e2;
  });
  var $p = c((TG, Qp) => {
    var t2 = ke(),
      yo = Kp(),
      Yp = Xn(),
      n2 = "Expected a function",
      r2 = Math.max,
      i2 = Math.min;
    function o2(e, t, n) {
      var r,
        o,
        i,
        a,
        u,
        s,
        f = 0,
        E = !1,
        h = !1,
        p = !0;
      if (typeof e != "function") throw new TypeError(n2);
      (t = Yp(t) || 0),
        t2(n) &&
          ((E = !!n.leading),
          (h = "maxWait" in n),
          (i = h ? r2(Yp(n.maxWait) || 0, t) : i),
          (p = "trailing" in n ? !!n.trailing : p));
      function g(N) {
        var V = r,
          X = o;
        return (r = o = void 0), (f = N), (a = e.apply(X, V)), a;
      }
      function m(N) {
        return (f = N), (u = setTimeout(_, t)), E ? g(N) : a;
      }
      function y(N) {
        var V = N - s,
          X = N - f,
          W = t - V;
        return h ? i2(W, i - X) : W;
      }
      function O(N) {
        var V = N - s,
          X = N - f;
        return s === void 0 || V >= t || V < 0 || (h && X >= i);
      }
      function _() {
        var N = yo();
        if (O(N)) return S(N);
        u = setTimeout(_, y(N));
      }
      function S(N) {
        return (u = void 0), p && r ? g(N) : ((r = o = void 0), a);
      }
      function b() {
        u !== void 0 && clearTimeout(u), (f = 0), (r = s = o = u = void 0);
      }
      function R() {
        return u === void 0 ? a : S(yo());
      }
      function L() {
        var N = yo(),
          V = O(N);
        if (((r = arguments), (o = this), (s = N), V)) {
          if (u === void 0) return m(s);
          if (h) return clearTimeout(u), (u = setTimeout(_, t)), g(s);
        }
        return u === void 0 && (u = setTimeout(_, t)), a;
      }
      return (L.cancel = b), (L.flush = R), L;
    }
    Qp.exports = o2;
  });
  var Jp = c((OG, Zp) => {
    var a2 = $p(),
      u2 = ke(),
      s2 = "Expected a function";
    function c2(e, t, n) {
      var r = !0,
        o = !0;
      if (typeof e != "function") throw new TypeError(s2);
      return (
        u2(n) &&
          ((r = "leading" in n ? !!n.leading : r),
          (o = "trailing" in n ? !!n.trailing : o)),
        a2(e, t, { leading: r, maxWait: t, trailing: o })
      );
    }
    Zp.exports = c2;
  });
  var rr = c((mo) => {
    "use strict";
    Object.defineProperty(mo, "__esModule", { value: !0 });
    function l2(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    l2(mo, {
      actionListPlaybackChanged: function () {
        return Q2;
      },
      animationFrameChanged: function () {
        return k2;
      },
      clearRequested: function () {
        return U2;
      },
      elementStateChanged: function () {
        return Y2;
      },
      eventListenerAdded: function () {
        return B2;
      },
      eventStateChanged: function () {
        return W2;
      },
      instanceAdded: function () {
        return z2;
      },
      instanceRemoved: function () {
        return K2;
      },
      instanceStarted: function () {
        return j2;
      },
      mediaQueriesDefined: function () {
        return Z2;
      },
      parameterChanged: function () {
        return H2;
      },
      playbackRequested: function () {
        return G2;
      },
      previewRequested: function () {
        return q2;
      },
      rawDataImported: function () {
        return M2;
      },
      sessionInitialized: function () {
        return D2;
      },
      sessionStarted: function () {
        return x2;
      },
      sessionStopped: function () {
        return F2;
      },
      stopRequested: function () {
        return V2;
      },
      testFrameRendered: function () {
        return X2;
      },
      viewportWidthChanged: function () {
        return $2;
      },
    });
    var eg = we(),
      f2 = ht(),
      {
        IX2_RAW_DATA_IMPORTED: d2,
        IX2_SESSION_INITIALIZED: p2,
        IX2_SESSION_STARTED: g2,
        IX2_SESSION_STOPPED: h2,
        IX2_PREVIEW_REQUESTED: E2,
        IX2_PLAYBACK_REQUESTED: v2,
        IX2_STOP_REQUESTED: _2,
        IX2_CLEAR_REQUESTED: y2,
        IX2_EVENT_LISTENER_ADDED: m2,
        IX2_TEST_FRAME_RENDERED: I2,
        IX2_EVENT_STATE_CHANGED: T2,
        IX2_ANIMATION_FRAME_CHANGED: O2,
        IX2_PARAMETER_CHANGED: b2,
        IX2_INSTANCE_ADDED: A2,
        IX2_INSTANCE_STARTED: S2,
        IX2_INSTANCE_REMOVED: w2,
        IX2_ELEMENT_STATE_CHANGED: C2,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: R2,
        IX2_VIEWPORT_WIDTH_CHANGED: N2,
        IX2_MEDIA_QUERIES_DEFINED: P2,
      } = eg.IX2EngineActionTypes,
      { reifyState: L2 } = f2.IX2VanillaUtils,
      M2 = (e) => ({ type: d2, payload: { ...L2(e) } }),
      D2 = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
        type: p2,
        payload: { hasBoundaryNodes: e, reducedMotion: t },
      }),
      x2 = () => ({ type: g2 }),
      F2 = () => ({ type: h2 }),
      q2 = ({ rawData: e, defer: t }) => ({
        type: E2,
        payload: { defer: t, rawData: e },
      }),
      G2 = ({
        actionTypeId: e = eg.ActionTypeConsts.GENERAL_START_ACTION,
        actionListId: t,
        actionItemId: n,
        eventId: r,
        allowEvents: o,
        immediate: i,
        testManual: a,
        verbose: u,
        rawData: s,
      }) => ({
        type: v2,
        payload: {
          actionTypeId: e,
          actionListId: t,
          actionItemId: n,
          testManual: a,
          eventId: r,
          allowEvents: o,
          immediate: i,
          verbose: u,
          rawData: s,
        },
      }),
      V2 = (e) => ({ type: _2, payload: { actionListId: e } }),
      U2 = () => ({ type: y2 }),
      B2 = (e, t) => ({ type: m2, payload: { target: e, listenerParams: t } }),
      X2 = (e = 1) => ({ type: I2, payload: { step: e } }),
      W2 = (e, t) => ({ type: T2, payload: { stateKey: e, newState: t } }),
      k2 = (e, t) => ({ type: O2, payload: { now: e, parameters: t } }),
      H2 = (e, t) => ({ type: b2, payload: { key: e, value: t } }),
      z2 = (e) => ({ type: A2, payload: { ...e } }),
      j2 = (e, t) => ({ type: S2, payload: { instanceId: e, time: t } }),
      K2 = (e) => ({ type: w2, payload: { instanceId: e } }),
      Y2 = (e, t, n, r) => ({
        type: C2,
        payload: { elementId: e, actionTypeId: t, current: n, actionItem: r },
      }),
      Q2 = ({ actionListId: e, isPlaying: t }) => ({
        type: R2,
        payload: { actionListId: e, isPlaying: t },
      }),
      $2 = ({ width: e, mediaQueries: t }) => ({
        type: N2,
        payload: { width: e, mediaQueries: t },
      }),
      Z2 = () => ({ type: P2 });
  });
  var rg = c((To) => {
    "use strict";
    Object.defineProperty(To, "__esModule", { value: !0 });
    function J2(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    J2(To, {
      elementContains: function () {
        return fM;
      },
      getChildElements: function () {
        return pM;
      },
      getClosestElement: function () {
        return hM;
      },
      getProperty: function () {
        return aM;
      },
      getQuerySelector: function () {
        return sM;
      },
      getRefType: function () {
        return EM;
      },
      getSiblingElements: function () {
        return gM;
      },
      getStyle: function () {
        return oM;
      },
      getValidDocument: function () {
        return cM;
      },
      isSiblingNode: function () {
        return dM;
      },
      matchSelector: function () {
        return uM;
      },
      queryDocument: function () {
        return lM;
      },
      setStyle: function () {
        return iM;
      },
    });
    var eM = ht(),
      tM = we(),
      { ELEMENT_MATCHES: Io } = eM.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: tg,
        HTML_ELEMENT: nM,
        PLAIN_OBJECT: rM,
        WF_PAGE: ng,
      } = tM.IX2EngineConstants;
    function iM(e, t, n) {
      e.style[t] = n;
    }
    function oM(e, t) {
      if (t.startsWith("--"))
        return window
          .getComputedStyle(document.documentElement)
          .getPropertyValue(t);
      if (e.style instanceof CSSStyleDeclaration) return e.style[t];
    }
    function aM(e, t) {
      return e[t];
    }
    function uM(e) {
      return (t) => t[Io](e);
    }
    function sM({ id: e, selector: t }) {
      if (e) {
        let n = e;
        if (e.indexOf(tg) !== -1) {
          let r = e.split(tg),
            o = r[0];
          if (((n = r[1]), o !== document.documentElement.getAttribute(ng)))
            return null;
        }
        return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`;
      }
      return t;
    }
    function cM(e) {
      return e == null || e === document.documentElement.getAttribute(ng)
        ? document
        : null;
    }
    function lM(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function fM(e, t) {
      return e.contains(t);
    }
    function dM(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function pM(e) {
      let t = [];
      for (let n = 0, { length: r } = e || []; n < r; n++) {
        let { children: o } = e[n],
          { length: i } = o;
        if (i) for (let a = 0; a < i; a++) t.push(o[a]);
      }
      return t;
    }
    function gM(e = []) {
      let t = [],
        n = [];
      for (let r = 0, { length: o } = e; r < o; r++) {
        let { parentNode: i } = e[r];
        if (!i || !i.children || !i.children.length || n.indexOf(i) !== -1)
          continue;
        n.push(i);
        let a = i.firstElementChild;
        for (; a != null; )
          e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
      }
      return t;
    }
    var hM = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let n = e;
          do {
            if (n[Io] && n[Io](t)) return n;
            n = n.parentNode;
          } while (n != null);
          return null;
        };
    function EM(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? nM
          : rM
        : null;
    }
  });
  var Oo = c((SG, og) => {
    var vM = ke(),
      ig = Object.create,
      _M = (function () {
        function e() {}
        return function (t) {
          if (!vM(t)) return {};
          if (ig) return ig(t);
          e.prototype = t;
          var n = new e();
          return (e.prototype = void 0), n;
        };
      })();
    og.exports = _M;
  });
  var ir = c((wG, ag) => {
    function yM() {}
    ag.exports = yM;
  });
  var ar = c((CG, ug) => {
    var mM = Oo(),
      IM = ir();
    function or(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    or.prototype = mM(IM.prototype);
    or.prototype.constructor = or;
    ug.exports = or;
  });
  var fg = c((RG, lg) => {
    var sg = It(),
      TM = Qt(),
      OM = Ie(),
      cg = sg ? sg.isConcatSpreadable : void 0;
    function bM(e) {
      return OM(e) || TM(e) || !!(cg && e && e[cg]);
    }
    lg.exports = bM;
  });
  var gg = c((NG, pg) => {
    var AM = Rn(),
      SM = fg();
    function dg(e, t, n, r, o) {
      var i = -1,
        a = e.length;
      for (n || (n = SM), o || (o = []); ++i < a; ) {
        var u = e[i];
        t > 0 && n(u)
          ? t > 1
            ? dg(u, t - 1, n, r, o)
            : AM(o, u)
          : r || (o[o.length] = u);
      }
      return o;
    }
    pg.exports = dg;
  });
  var Eg = c((PG, hg) => {
    var wM = gg();
    function CM(e) {
      var t = e == null ? 0 : e.length;
      return t ? wM(e, 1) : [];
    }
    hg.exports = CM;
  });
  var _g = c((LG, vg) => {
    function RM(e, t, n) {
      switch (n.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2]);
      }
      return e.apply(t, n);
    }
    vg.exports = RM;
  });
  var Ig = c((MG, mg) => {
    var NM = _g(),
      yg = Math.max;
    function PM(e, t, n) {
      return (
        (t = yg(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var r = arguments, o = -1, i = yg(r.length - t, 0), a = Array(i);
            ++o < i;

          )
            a[o] = r[t + o];
          o = -1;
          for (var u = Array(t + 1); ++o < t; ) u[o] = r[o];
          return (u[t] = n(a)), NM(e, this, u);
        }
      );
    }
    mg.exports = PM;
  });
  var Og = c((DG, Tg) => {
    function LM(e) {
      return function () {
        return e;
      };
    }
    Tg.exports = LM;
  });
  var Sg = c((xG, Ag) => {
    var MM = Og(),
      bg = vo(),
      DM = Bn(),
      xM = bg
        ? function (e, t) {
            return bg(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: MM(t),
              writable: !0,
            });
          }
        : DM;
    Ag.exports = xM;
  });
  var Cg = c((FG, wg) => {
    var FM = 800,
      qM = 16,
      GM = Date.now;
    function VM(e) {
      var t = 0,
        n = 0;
      return function () {
        var r = GM(),
          o = qM - (r - n);
        if (((n = r), o > 0)) {
          if (++t >= FM) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    wg.exports = VM;
  });
  var Ng = c((qG, Rg) => {
    var UM = Sg(),
      BM = Cg(),
      XM = BM(UM);
    Rg.exports = XM;
  });
  var Lg = c((GG, Pg) => {
    var WM = Eg(),
      kM = Ig(),
      HM = Ng();
    function zM(e) {
      return HM(kM(e, void 0, WM), e + "");
    }
    Pg.exports = zM;
  });
  var xg = c((VG, Dg) => {
    var Mg = gi(),
      jM = Mg && new Mg();
    Dg.exports = jM;
  });
  var qg = c((UG, Fg) => {
    function KM() {}
    Fg.exports = KM;
  });
  var bo = c((BG, Vg) => {
    var Gg = xg(),
      YM = qg(),
      QM = Gg
        ? function (e) {
            return Gg.get(e);
          }
        : YM;
    Vg.exports = QM;
  });
  var Bg = c((XG, Ug) => {
    var $M = {};
    Ug.exports = $M;
  });
  var Ao = c((WG, Wg) => {
    var Xg = Bg(),
      ZM = Object.prototype,
      JM = ZM.hasOwnProperty;
    function eD(e) {
      for (
        var t = e.name + "", n = Xg[t], r = JM.call(Xg, t) ? n.length : 0;
        r--;

      ) {
        var o = n[r],
          i = o.func;
        if (i == null || i == e) return o.name;
      }
      return t;
    }
    Wg.exports = eD;
  });
  var sr = c((kG, kg) => {
    var tD = Oo(),
      nD = ir(),
      rD = 4294967295;
    function ur(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = rD),
        (this.__views__ = []);
    }
    ur.prototype = tD(nD.prototype);
    ur.prototype.constructor = ur;
    kg.exports = ur;
  });
  var zg = c((HG, Hg) => {
    function iD(e, t) {
      var n = -1,
        r = e.length;
      for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
      return t;
    }
    Hg.exports = iD;
  });
  var Kg = c((zG, jg) => {
    var oD = sr(),
      aD = ar(),
      uD = zg();
    function sD(e) {
      if (e instanceof oD) return e.clone();
      var t = new aD(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = uD(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    jg.exports = sD;
  });
  var $g = c((jG, Qg) => {
    var cD = sr(),
      Yg = ar(),
      lD = ir(),
      fD = Ie(),
      dD = Qe(),
      pD = Kg(),
      gD = Object.prototype,
      hD = gD.hasOwnProperty;
    function cr(e) {
      if (dD(e) && !fD(e) && !(e instanceof cD)) {
        if (e instanceof Yg) return e;
        if (hD.call(e, "__wrapped__")) return pD(e);
      }
      return new Yg(e);
    }
    cr.prototype = lD.prototype;
    cr.prototype.constructor = cr;
    Qg.exports = cr;
  });
  var Jg = c((KG, Zg) => {
    var ED = sr(),
      vD = bo(),
      _D = Ao(),
      yD = $g();
    function mD(e) {
      var t = _D(e),
        n = yD[t];
      if (typeof n != "function" || !(t in ED.prototype)) return !1;
      if (e === n) return !0;
      var r = vD(n);
      return !!r && e === r[0];
    }
    Zg.exports = mD;
  });
  var rh = c((YG, nh) => {
    var eh = ar(),
      ID = Lg(),
      TD = bo(),
      So = Ao(),
      OD = Ie(),
      th = Jg(),
      bD = "Expected a function",
      AD = 8,
      SD = 32,
      wD = 128,
      CD = 256;
    function RD(e) {
      return ID(function (t) {
        var n = t.length,
          r = n,
          o = eh.prototype.thru;
        for (e && t.reverse(); r--; ) {
          var i = t[r];
          if (typeof i != "function") throw new TypeError(bD);
          if (o && !a && So(i) == "wrapper") var a = new eh([], !0);
        }
        for (r = a ? r : n; ++r < n; ) {
          i = t[r];
          var u = So(i),
            s = u == "wrapper" ? TD(i) : void 0;
          s &&
          th(s[0]) &&
          s[1] == (wD | AD | SD | CD) &&
          !s[4].length &&
          s[9] == 1
            ? (a = a[So(s[0])].apply(a, s[3]))
            : (a = i.length == 1 && th(i) ? a[u]() : a.thru(i));
        }
        return function () {
          var f = arguments,
            E = f[0];
          if (a && f.length == 1 && OD(E)) return a.plant(E).value();
          for (var h = 0, p = n ? t[h].apply(this, f) : E; ++h < n; )
            p = t[h].call(this, p);
          return p;
        };
      });
    }
    nh.exports = RD;
  });
  var oh = c((QG, ih) => {
    var ND = rh(),
      PD = ND();
    ih.exports = PD;
  });
  var uh = c(($G, ah) => {
    function LD(e, t, n) {
      return (
        e === e &&
          (n !== void 0 && (e = e <= n ? e : n),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    ah.exports = LD;
  });
  var ch = c((ZG, sh) => {
    var MD = uh(),
      wo = Xn();
    function DD(e, t, n) {
      return (
        n === void 0 && ((n = t), (t = void 0)),
        n !== void 0 && ((n = wo(n)), (n = n === n ? n : 0)),
        t !== void 0 && ((t = wo(t)), (t = t === t ? t : 0)),
        MD(wo(e), t, n)
      );
    }
    sh.exports = DD;
  });
  var wh = c((Mo) => {
    "use strict";
    Object.defineProperty(Mo, "__esModule", { value: !0 });
    Object.defineProperty(Mo, "default", {
      enumerable: !0,
      get: function () {
        return Ex;
      },
    });
    var xD = Lo(oh()),
      FD = Lo(Un()),
      qD = Lo(ch()),
      Et = we(),
      Co = Do(),
      lr = rr(),
      GD = ht();
    function Lo(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var {
        MOUSE_CLICK: VD,
        MOUSE_SECOND_CLICK: UD,
        MOUSE_DOWN: BD,
        MOUSE_UP: XD,
        MOUSE_OVER: WD,
        MOUSE_OUT: kD,
        DROPDOWN_CLOSE: HD,
        DROPDOWN_OPEN: zD,
        SLIDER_ACTIVE: jD,
        SLIDER_INACTIVE: KD,
        TAB_ACTIVE: YD,
        TAB_INACTIVE: QD,
        NAVBAR_CLOSE: $D,
        NAVBAR_OPEN: ZD,
        MOUSE_MOVE: JD,
        PAGE_SCROLL_DOWN: _h,
        SCROLL_INTO_VIEW: yh,
        SCROLL_OUT_OF_VIEW: ex,
        PAGE_SCROLL_UP: tx,
        SCROLLING_IN_VIEW: nx,
        PAGE_FINISH: mh,
        ECOMMERCE_CART_CLOSE: rx,
        ECOMMERCE_CART_OPEN: ix,
        PAGE_START: Ih,
        PAGE_SCROLL: ox,
      } = Et.EventTypeConsts,
      Ro = "COMPONENT_ACTIVE",
      Th = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: lh } = Et.IX2EngineConstants,
      { getNamespacedParameterId: fh } = GD.IX2VanillaUtils,
      Oh = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      dn = Oh(({ element: e, nativeEvent: t }) => e === t.target),
      ax = Oh(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      Ke = (0, xD.default)([dn, ax]),
      bh = (e, t) => {
        if (t) {
          let { ixData: n } = e.getState(),
            { events: r } = n,
            o = r[t];
          if (o && !sx[o.eventTypeId]) return o;
        }
        return null;
      },
      ux = ({ store: e, event: t }) => {
        let { action: n } = t,
          { autoStopEventId: r } = n.config;
        return !!bh(e, r);
      },
      Re = ({ store: e, event: t, element: n, eventStateKey: r }, o) => {
        let { action: i, id: a } = t,
          { actionListId: u, autoStopEventId: s } = i.config,
          f = bh(e, s);
        return (
          f &&
            (0, Co.stopActionGroup)({
              store: e,
              eventId: s,
              eventTarget: n,
              eventStateKey: s + lh + r.split(lh)[1],
              actionListId: (0, FD.default)(f, "action.config.actionListId"),
            }),
          (0, Co.stopActionGroup)({
            store: e,
            eventId: a,
            eventTarget: n,
            eventStateKey: r,
            actionListId: u,
          }),
          (0, Co.startActionGroup)({
            store: e,
            eventId: a,
            eventTarget: n,
            eventStateKey: r,
            actionListId: u,
          }),
          o
        );
      },
      Ue = (e, t) => (n, r) => e(n, r) === !0 ? t(n, r) : r,
      pn = { handler: Ue(Ke, Re) },
      Ah = { ...pn, types: [Ro, Th].join(" ") },
      No = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      dh = "mouseover mouseout",
      Po = { types: No },
      sx = { PAGE_START: Ih, PAGE_FINISH: mh },
      fn = (() => {
        let e = window.pageXOffset !== void 0,
          n =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : n.scrollLeft,
          scrollTop: e ? window.pageYOffset : n.scrollTop,
          stiffScrollTop: (0, qD.default)(
            e ? window.pageYOffset : n.scrollTop,
            0,
            n.scrollHeight - window.innerHeight
          ),
          scrollWidth: n.scrollWidth,
          scrollHeight: n.scrollHeight,
          clientWidth: n.clientWidth,
          clientHeight: n.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      cx = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      lx = ({ element: e, nativeEvent: t }) => {
        let { type: n, target: r, relatedTarget: o } = t,
          i = e.contains(r);
        if (n === "mouseover" && i) return !0;
        let a = e.contains(o);
        return !!(n === "mouseout" && i && a);
      },
      fx = (e) => {
        let {
            element: t,
            event: { config: n },
          } = e,
          { clientWidth: r, clientHeight: o } = fn(),
          i = n.scrollOffsetValue,
          s = n.scrollOffsetUnit === "PX" ? i : (o * (i || 0)) / 100;
        return cx(t.getBoundingClientRect(), {
          left: 0,
          top: s,
          right: r,
          bottom: o - s,
        });
      },
      Sh = (e) => (t, n) => {
        let { type: r } = t.nativeEvent,
          o = [Ro, Th].indexOf(r) !== -1 ? r === Ro : n.isActive,
          i = { ...n, isActive: o };
        return ((!n || i.isActive !== n.isActive) && e(t, i)) || i;
      },
      ph = (e) => (t, n) => {
        let r = { elementHovered: lx(t) };
        return (
          ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) &&
            e(t, r)) ||
          r
        );
      },
      dx = (e) => (t, n) => {
        let r = { ...n, elementVisible: fx(t) };
        return (
          ((n ? r.elementVisible !== n.elementVisible : r.elementVisible) &&
            e(t, r)) ||
          r
        );
      },
      gh =
        (e) =>
        (t, n = {}) => {
          let { stiffScrollTop: r, scrollHeight: o, innerHeight: i } = fn(),
            {
              event: { config: a, eventTypeId: u },
            } = t,
            { scrollOffsetValue: s, scrollOffsetUnit: f } = a,
            E = f === "PX",
            h = o - i,
            p = Number((r / h).toFixed(2));
          if (n && n.percentTop === p) return n;
          let g = (E ? s : (i * (s || 0)) / 100) / h,
            m,
            y,
            O = 0;
          n &&
            ((m = p > n.percentTop),
            (y = n.scrollingDown !== m),
            (O = y ? p : n.anchorTop));
          let _ = u === _h ? p >= O + g : p <= O - g,
            S = {
              ...n,
              percentTop: p,
              inBounds: _,
              anchorTop: O,
              scrollingDown: m,
            };
          return (n && _ && (y || S.inBounds !== n.inBounds) && e(t, S)) || S;
        },
      px = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      gx = (e) => (t, n) => {
        let r = { finished: document.readyState === "complete" };
        return r.finished && !(n && n.finshed) && e(t), r;
      },
      hx = (e) => (t, n) => {
        let r = { started: !0 };
        return n || e(t), r;
      },
      hh =
        (e) =>
        (t, n = { clickCount: 0 }) => {
          let r = { clickCount: (n.clickCount % 2) + 1 };
          return (r.clickCount !== n.clickCount && e(t, r)) || r;
        },
      fr = (e = !0) => ({
        ...Ah,
        handler: Ue(
          e ? Ke : dn,
          Sh((t, n) => (n.isActive ? pn.handler(t, n) : n))
        ),
      }),
      dr = (e = !0) => ({
        ...Ah,
        handler: Ue(
          e ? Ke : dn,
          Sh((t, n) => (n.isActive ? n : pn.handler(t, n)))
        ),
      }),
      Eh = {
        ...Po,
        handler: dx((e, t) => {
          let { elementVisible: n } = t,
            { event: r, store: o } = e,
            { ixData: i } = o.getState(),
            { events: a } = i;
          return !a[r.action.config.autoStopEventId] && t.triggered
            ? t
            : (r.eventTypeId === yh) === n
            ? (Re(e), { ...t, triggered: !0 })
            : t;
        }),
      },
      vh = 0.05,
      Ex = {
        [jD]: fr(),
        [KD]: dr(),
        [zD]: fr(),
        [HD]: dr(),
        [ZD]: fr(!1),
        [$D]: dr(!1),
        [YD]: fr(),
        [QD]: dr(),
        [ix]: { types: "ecommerce-cart-open", handler: Ue(Ke, Re) },
        [rx]: { types: "ecommerce-cart-close", handler: Ue(Ke, Re) },
        [VD]: {
          types: "click",
          handler: Ue(
            Ke,
            hh((e, { clickCount: t }) => {
              ux(e) ? t === 1 && Re(e) : Re(e);
            })
          ),
        },
        [UD]: {
          types: "click",
          handler: Ue(
            Ke,
            hh((e, { clickCount: t }) => {
              t === 2 && Re(e);
            })
          ),
        },
        [BD]: { ...pn, types: "mousedown" },
        [XD]: { ...pn, types: "mouseup" },
        [WD]: {
          types: dh,
          handler: Ue(
            Ke,
            ph((e, t) => {
              t.elementHovered && Re(e);
            })
          ),
        },
        [kD]: {
          types: dh,
          handler: Ue(
            Ke,
            ph((e, t) => {
              t.elementHovered || Re(e);
            })
          ),
        },
        [JD]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: n,
              nativeEvent: r,
              eventStateKey: o,
            },
            i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: a,
                selectedAxis: u,
                continuousParameterGroupId: s,
                reverse: f,
                restingState: E = 0,
              } = n,
              {
                clientX: h = i.clientX,
                clientY: p = i.clientY,
                pageX: g = i.pageX,
                pageY: m = i.pageY,
              } = r,
              y = u === "X_AXIS",
              O = r.type === "mouseout",
              _ = E / 100,
              S = s,
              b = !1;
            switch (a) {
              case Et.EventBasedOn.VIEWPORT: {
                _ = y
                  ? Math.min(h, window.innerWidth) / window.innerWidth
                  : Math.min(p, window.innerHeight) / window.innerHeight;
                break;
              }
              case Et.EventBasedOn.PAGE: {
                let {
                  scrollLeft: R,
                  scrollTop: L,
                  scrollWidth: N,
                  scrollHeight: V,
                } = fn();
                _ = y ? Math.min(R + g, N) / N : Math.min(L + m, V) / V;
                break;
              }
              case Et.EventBasedOn.ELEMENT:
              default: {
                S = fh(o, s);
                let R = r.type.indexOf("mouse") === 0;
                if (R && Ke({ element: t, nativeEvent: r }) !== !0) break;
                let L = t.getBoundingClientRect(),
                  { left: N, top: V, width: X, height: W } = L;
                if (!R && !px({ left: h, top: p }, L)) break;
                (b = !0), (_ = y ? (h - N) / X : (p - V) / W);
                break;
              }
            }
            return (
              O && (_ > 1 - vh || _ < vh) && (_ = Math.round(_)),
              (a !== Et.EventBasedOn.ELEMENT || b || b !== i.elementHovered) &&
                ((_ = f ? 1 - _ : _),
                e.dispatch((0, lr.parameterChanged)(S, _))),
              { elementHovered: b, clientX: h, clientY: p, pageX: g, pageY: m }
            );
          },
        },
        [ox]: {
          types: No,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: n, reverse: r } = t,
              { scrollTop: o, scrollHeight: i, clientHeight: a } = fn(),
              u = o / (i - a);
            (u = r ? 1 - u : u), e.dispatch((0, lr.parameterChanged)(n, u));
          },
        },
        [nx]: {
          types: No,
          handler: (
            { element: e, store: t, eventConfig: n, eventStateKey: r },
            o = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: i,
                scrollTop: a,
                scrollWidth: u,
                scrollHeight: s,
                clientHeight: f,
              } = fn(),
              {
                basedOn: E,
                selectedAxis: h,
                continuousParameterGroupId: p,
                startsEntering: g,
                startsExiting: m,
                addEndOffset: y,
                addStartOffset: O,
                addOffsetValue: _ = 0,
                endOffsetValue: S = 0,
              } = n,
              b = h === "X_AXIS";
            if (E === Et.EventBasedOn.VIEWPORT) {
              let R = b ? i / u : a / s;
              return (
                R !== o.scrollPercent &&
                  t.dispatch((0, lr.parameterChanged)(p, R)),
                { scrollPercent: R }
              );
            } else {
              let R = fh(r, p),
                L = e.getBoundingClientRect(),
                N = (O ? _ : 0) / 100,
                V = (y ? S : 0) / 100;
              (N = g ? N : 1 - N), (V = m ? V : 1 - V);
              let X = L.top + Math.min(L.height * N, f),
                j = L.top + L.height * V - X,
                J = Math.min(f + j, s),
                T = Math.min(Math.max(0, f - X), J) / J;
              return (
                T !== o.scrollPercent &&
                  t.dispatch((0, lr.parameterChanged)(R, T)),
                { scrollPercent: T }
              );
            }
          },
        },
        [yh]: Eh,
        [ex]: Eh,
        [_h]: {
          ...Po,
          handler: gh((e, t) => {
            t.scrollingDown && Re(e);
          }),
        },
        [tx]: {
          ...Po,
          handler: gh((e, t) => {
            t.scrollingDown || Re(e);
          }),
        },
        [mh]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Ue(dn, gx(Re)),
        },
        [Ih]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Ue(dn, hx(Re)),
        },
      };
  });
  var Do = c((Wo) => {
    "use strict";
    Object.defineProperty(Wo, "__esModule", { value: !0 });
    function vx(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    vx(Wo, {
      observeRequests: function () {
        return Hx;
      },
      startActionGroup: function () {
        return Uo;
      },
      startEngine: function () {
        return vr;
      },
      stopActionGroup: function () {
        return Vo;
      },
      stopAllActionGroups: function () {
        return qh;
      },
      stopEngine: function () {
        return _r;
      },
    });
    var _x = Ze(Ni()),
      at = Ze(Un()),
      yx = Ze(lp()),
      mx = Ze(Fp()),
      Ix = Ze(Gp()),
      Tx = Ze(Up()),
      gn = Ze(zp()),
      Ox = Ze(Jp()),
      Me = we(),
      Nh = ht(),
      Ee = rr(),
      ye = Ax(rg()),
      bx = Ze(wh());
    function Ze(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Ph(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (Ph = function (r) {
        return r ? n : t;
      })(e);
    }
    function Ax(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = Ph(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(r, i, a)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var Sx = Object.keys(Me.QuickEffectIds),
      xo = (e) => Sx.includes(e),
      {
        COLON_DELIMITER: Fo,
        BOUNDARY_SELECTOR: pr,
        HTML_ELEMENT: Lh,
        RENDER_GENERAL: wx,
        W_MOD_IX: Ch,
      } = Me.IX2EngineConstants,
      {
        getAffectedElements: gr,
        getElementId: Cx,
        getDestinationValues: qo,
        observeStore: vt,
        getInstanceId: Rx,
        renderHTMLElement: Nx,
        clearAllStyles: Mh,
        getMaxDurationItemIndex: Px,
        getComputedStyle: Lx,
        getInstanceOrigin: Mx,
        reduceListToGroup: Dx,
        shouldNamespaceEventParameter: xx,
        getNamespacedParameterId: Fx,
        shouldAllowMediaQuery: hr,
        cleanupHTMLElement: qx,
        clearObjectCache: Gx,
        stringifyTarget: Vx,
        mediaQueriesEqual: Ux,
        shallowEqual: Bx,
      } = Nh.IX2VanillaUtils,
      {
        isPluginType: Er,
        createPluginInstance: Go,
        getPluginDuration: Xx,
      } = Nh.IX2VanillaPlugins,
      Rh = navigator.userAgent,
      Wx = Rh.match(/iPad/i) || Rh.match(/iPhone/),
      kx = 12;
    function Hx(e) {
      vt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: Kx }),
        vt({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: Yx,
        }),
        vt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: Qx }),
        vt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: $x });
    }
    function zx(e) {
      vt({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          _r(e),
            Mh({ store: e, elementApi: ye }),
            vr({ store: e, allowEvents: !0 }),
            Dh();
        },
      });
    }
    function jx(e, t) {
      let n = vt({
        store: e,
        select: ({ ixSession: r }) => r.tick,
        onChange: (r) => {
          t(r), n();
        },
      });
    }
    function Kx({ rawData: e, defer: t }, n) {
      let r = () => {
        vr({ store: n, rawData: e, allowEvents: !0 }), Dh();
      };
      t ? setTimeout(r, 0) : r();
    }
    function Dh() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function Yx(e, t) {
      let {
          actionTypeId: n,
          actionListId: r,
          actionItemId: o,
          eventId: i,
          allowEvents: a,
          immediate: u,
          testManual: s,
          verbose: f = !0,
        } = e,
        { rawData: E } = e;
      if (r && o && E && u) {
        let h = E.actionLists[r];
        h && (E = Dx({ actionList: h, actionItemId: o, rawData: E }));
      }
      if (
        (vr({ store: t, rawData: E, allowEvents: a, testManual: s }),
        (r && n === Me.ActionTypeConsts.GENERAL_START_ACTION) || xo(n))
      ) {
        Vo({ store: t, actionListId: r }),
          Fh({ store: t, actionListId: r, eventId: i });
        let h = Uo({
          store: t,
          eventId: i,
          actionListId: r,
          immediate: u,
          verbose: f,
        });
        f &&
          h &&
          t.dispatch(
            (0, Ee.actionListPlaybackChanged)({
              actionListId: r,
              isPlaying: !u,
            })
          );
      }
    }
    function Qx({ actionListId: e }, t) {
      e ? Vo({ store: t, actionListId: e }) : qh({ store: t }), _r(t);
    }
    function $x(e, t) {
      _r(t), Mh({ store: t, elementApi: ye });
    }
    function vr({ store: e, rawData: t, allowEvents: n, testManual: r }) {
      let { ixSession: o } = e.getState();
      t && e.dispatch((0, Ee.rawDataImported)(t)),
        o.active ||
          (e.dispatch(
            (0, Ee.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(pr),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          n &&
            (rF(e),
            Zx(),
            e.getState().ixSession.hasDefinedMediaQueries && zx(e)),
          e.dispatch((0, Ee.sessionStarted)()),
          Jx(e, r));
    }
    function Zx() {
      let { documentElement: e } = document;
      e.className.indexOf(Ch) === -1 && (e.className += ` ${Ch}`);
    }
    function Jx(e, t) {
      let n = (r) => {
        let { ixSession: o, ixParameters: i } = e.getState();
        o.active &&
          (e.dispatch((0, Ee.animationFrameChanged)(r, i)),
          t ? jx(e, n) : requestAnimationFrame(n));
      };
      n(window.performance.now());
    }
    function _r(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: n } = t;
        n.forEach(eF), Gx(), e.dispatch((0, Ee.sessionStopped)());
      }
    }
    function eF({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function tF({
      store: e,
      eventStateKey: t,
      eventTarget: n,
      eventId: r,
      eventConfig: o,
      actionListId: i,
      parameterGroup: a,
      smoothing: u,
      restingValue: s,
    }) {
      let { ixData: f, ixSession: E } = e.getState(),
        { events: h } = f,
        p = h[r],
        { eventTypeId: g } = p,
        m = {},
        y = {},
        O = [],
        { continuousActionGroups: _ } = a,
        { id: S } = a;
      xx(g, o) && (S = Fx(t, S));
      let b = E.hasBoundaryNodes && n ? ye.getClosestElement(n, pr) : null;
      _.forEach((R) => {
        let { keyframe: L, actionItems: N } = R;
        N.forEach((V) => {
          let { actionTypeId: X } = V,
            { target: W } = V.config;
          if (!W) return;
          let j = W.boundaryMode ? b : null,
            J = Vx(W) + Fo + X;
          if (((y[J] = nF(y[J], L, V)), !m[J])) {
            m[J] = !0;
            let { config: D } = V;
            gr({
              config: D,
              event: p,
              eventTarget: n,
              elementRoot: j,
              elementApi: ye,
            }).forEach((T) => {
              O.push({ element: T, key: J });
            });
          }
        });
      }),
        O.forEach(({ element: R, key: L }) => {
          let N = y[L],
            V = (0, at.default)(N, "[0].actionItems[0]", {}),
            { actionTypeId: X } = V,
            j = (
              X === Me.ActionTypeConsts.PLUGIN_RIVE
                ? (V.config?.target?.selectorGuids || []).length === 0
                : Er(X)
            )
              ? Go(X)(R, V)
              : null,
            J = qo({ element: R, actionItem: V, elementApi: ye }, j);
          Bo({
            store: e,
            element: R,
            eventId: r,
            actionListId: i,
            actionItem: V,
            destination: J,
            continuous: !0,
            parameterId: S,
            actionGroups: N,
            smoothing: u,
            restingValue: s,
            pluginInstance: j,
          });
        });
    }
    function nF(e = [], t, n) {
      let r = [...e],
        o;
      return (
        r.some((i, a) => (i.keyframe === t ? ((o = a), !0) : !1)),
        o == null && ((o = r.length), r.push({ keyframe: t, actionItems: [] })),
        r[o].actionItems.push(n),
        r
      );
    }
    function rF(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: n } = t;
      xh(e),
        (0, gn.default)(n, (o, i) => {
          let a = bx.default[i];
          if (!a) {
            console.warn(`IX2 event type not configured: ${i}`);
            return;
          }
          cF({ logic: a, store: e, events: o });
        });
      let { ixSession: r } = e.getState();
      r.eventListeners.length && oF(e);
    }
    var iF = ["resize", "orientationchange"];
    function oF(e) {
      let t = () => {
        xh(e);
      };
      iF.forEach((n) => {
        window.addEventListener(n, t),
          e.dispatch((0, Ee.eventListenerAdded)(window, [n, t]));
      }),
        t();
    }
    function xh(e) {
      let { ixSession: t, ixData: n } = e.getState(),
        r = window.innerWidth;
      if (r !== t.viewportWidth) {
        let { mediaQueries: o } = n;
        e.dispatch((0, Ee.viewportWidthChanged)({ width: r, mediaQueries: o }));
      }
    }
    var aF = (e, t) => (0, mx.default)((0, Tx.default)(e, t), Ix.default),
      uF = (e, t) => {
        (0, gn.default)(e, (n, r) => {
          n.forEach((o, i) => {
            let a = r + Fo + i;
            t(o, r, a);
          });
        });
      },
      sF = (e) => {
        let t = { target: e.target, targets: e.targets };
        return gr({ config: t, elementApi: ye });
      };
    function cF({ logic: e, store: t, events: n }) {
      lF(n);
      let { types: r, handler: o } = e,
        { ixData: i } = t.getState(),
        { actionLists: a } = i,
        u = aF(n, sF);
      if (!(0, yx.default)(u)) return;
      (0, gn.default)(u, (h, p) => {
        let g = n[p],
          { action: m, id: y, mediaQueries: O = i.mediaQueryKeys } = g,
          { actionListId: _ } = m.config;
        Ux(O, i.mediaQueryKeys) || t.dispatch((0, Ee.mediaQueriesDefined)()),
          m.actionTypeId === Me.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(g.config) ? g.config : [g.config]).forEach((b) => {
              let { continuousParameterGroupId: R } = b,
                L = (0, at.default)(a, `${_}.continuousParameterGroups`, []),
                N = (0, _x.default)(L, ({ id: W }) => W === R),
                V = (b.smoothing || 0) / 100,
                X = (b.restingState || 0) / 100;
              N &&
                h.forEach((W, j) => {
                  let J = y + Fo + j;
                  tF({
                    store: t,
                    eventStateKey: J,
                    eventTarget: W,
                    eventId: y,
                    eventConfig: b,
                    actionListId: _,
                    parameterGroup: N,
                    smoothing: V,
                    restingValue: X,
                  });
                });
            }),
          (m.actionTypeId === Me.ActionTypeConsts.GENERAL_START_ACTION ||
            xo(m.actionTypeId)) &&
            Fh({ store: t, actionListId: _, eventId: y });
      });
      let s = (h) => {
          let { ixSession: p } = t.getState();
          uF(u, (g, m, y) => {
            let O = n[m],
              _ = p.eventState[y],
              { action: S, mediaQueries: b = i.mediaQueryKeys } = O;
            if (!hr(b, p.mediaQueryKey)) return;
            let R = (L = {}) => {
              let N = o(
                {
                  store: t,
                  element: g,
                  event: O,
                  eventConfig: L,
                  nativeEvent: h,
                  eventStateKey: y,
                },
                _
              );
              Bx(N, _) || t.dispatch((0, Ee.eventStateChanged)(y, N));
            };
            S.actionTypeId === Me.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(O.config) ? O.config : [O.config]).forEach(R)
              : R();
          });
        },
        f = (0, Ox.default)(s, kx),
        E = ({ target: h = document, types: p, throttle: g }) => {
          p.split(" ")
            .filter(Boolean)
            .forEach((m) => {
              let y = g ? f : s;
              h.addEventListener(m, y),
                t.dispatch((0, Ee.eventListenerAdded)(h, [m, y]));
            });
        };
      Array.isArray(r) ? r.forEach(E) : typeof r == "string" && E(e);
    }
    function lF(e) {
      if (!Wx) return;
      let t = {},
        n = "";
      for (let r in e) {
        let { eventTypeId: o, target: i } = e[r],
          a = ye.getQuerySelector(i);
        t[a] ||
          ((o === Me.EventTypeConsts.MOUSE_CLICK ||
            o === Me.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[a] = !0),
            (n += a + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (n) {
        let r = document.createElement("style");
        (r.textContent = n), document.body.appendChild(r);
      }
    }
    function Fh({ store: e, actionListId: t, eventId: n }) {
      let { ixData: r, ixSession: o } = e.getState(),
        { actionLists: i, events: a } = r,
        u = a[n],
        s = i[t];
      if (s && s.useFirstGroupAsInitialState) {
        let f = (0, at.default)(s, "actionItemGroups[0].actionItems", []),
          E = (0, at.default)(u, "mediaQueries", r.mediaQueryKeys);
        if (!hr(E, o.mediaQueryKey)) return;
        f.forEach((h) => {
          let { config: p, actionTypeId: g } = h,
            m =
              p?.target?.useEventTarget === !0 && p?.target?.objectId == null
                ? { target: u.target, targets: u.targets }
                : p,
            y = gr({ config: m, event: u, elementApi: ye }),
            O = Er(g);
          y.forEach((_) => {
            let S = O ? Go(g)(_, h) : null;
            Bo({
              destination: qo({ element: _, actionItem: h, elementApi: ye }, S),
              immediate: !0,
              store: e,
              element: _,
              eventId: n,
              actionItem: h,
              actionListId: t,
              pluginInstance: S,
            });
          });
        });
      }
    }
    function qh({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, gn.default)(t, (n) => {
        if (!n.continuous) {
          let { actionListId: r, verbose: o } = n;
          Xo(n, e),
            o &&
              e.dispatch(
                (0, Ee.actionListPlaybackChanged)({
                  actionListId: r,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function Vo({
      store: e,
      eventId: t,
      eventTarget: n,
      eventStateKey: r,
      actionListId: o,
    }) {
      let { ixInstances: i, ixSession: a } = e.getState(),
        u = a.hasBoundaryNodes && n ? ye.getClosestElement(n, pr) : null;
      (0, gn.default)(i, (s) => {
        let f = (0, at.default)(s, "actionItem.config.target.boundaryMode"),
          E = r ? s.eventStateKey === r : !0;
        if (s.actionListId === o && s.eventId === t && E) {
          if (u && f && !ye.elementContains(u, s.element)) return;
          Xo(s, e),
            s.verbose &&
              e.dispatch(
                (0, Ee.actionListPlaybackChanged)({
                  actionListId: o,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function Uo({
      store: e,
      eventId: t,
      eventTarget: n,
      eventStateKey: r,
      actionListId: o,
      groupIndex: i = 0,
      immediate: a,
      verbose: u,
    }) {
      let { ixData: s, ixSession: f } = e.getState(),
        { events: E } = s,
        h = E[t] || {},
        { mediaQueries: p = s.mediaQueryKeys } = h,
        g = (0, at.default)(s, `actionLists.${o}`, {}),
        { actionItemGroups: m, useFirstGroupAsInitialState: y } = g;
      if (!m || !m.length) return !1;
      i >= m.length && (0, at.default)(h, "config.loop") && (i = 0),
        i === 0 && y && i++;
      let _ =
          (i === 0 || (i === 1 && y)) && xo(h.action?.actionTypeId)
            ? h.config.delay
            : void 0,
        S = (0, at.default)(m, [i, "actionItems"], []);
      if (!S.length || !hr(p, f.mediaQueryKey)) return !1;
      let b = f.hasBoundaryNodes && n ? ye.getClosestElement(n, pr) : null,
        R = Px(S),
        L = !1;
      return (
        S.forEach((N, V) => {
          let { config: X, actionTypeId: W } = N,
            j = Er(W),
            { target: J } = X;
          if (!J) return;
          let D = J.boundaryMode ? b : null;
          gr({
            config: X,
            event: h,
            eventTarget: n,
            elementRoot: D,
            elementApi: ye,
          }).forEach((M, k) => {
            let U = j ? Go(W)(M, N) : null,
              ee = j ? Xx(W)(M, N) : null;
            L = !0;
            let Z = R === V && k === 0,
              ue = Lx({ element: M, actionItem: N }),
              me = qo({ element: M, actionItem: N, elementApi: ye }, U);
            Bo({
              store: e,
              element: M,
              actionItem: N,
              eventId: t,
              eventTarget: n,
              eventStateKey: r,
              actionListId: o,
              groupIndex: i,
              isCarrier: Z,
              computedStyle: ue,
              destination: me,
              immediate: a,
              verbose: u,
              pluginInstance: U,
              pluginDuration: ee,
              instanceDelay: _,
            });
          });
        }),
        L
      );
    }
    function Bo(e) {
      let { store: t, computedStyle: n, ...r } = e,
        {
          element: o,
          actionItem: i,
          immediate: a,
          pluginInstance: u,
          continuous: s,
          restingValue: f,
          eventId: E,
        } = r,
        h = !s,
        p = Rx(),
        { ixElements: g, ixSession: m, ixData: y } = t.getState(),
        O = Cx(g, o),
        { refState: _ } = g[O] || {},
        S = ye.getRefType(o),
        b = m.reducedMotion && Me.ReducedMotionTypes[i.actionTypeId],
        R;
      if (b && s)
        switch (y.events[E]?.eventTypeId) {
          case Me.EventTypeConsts.MOUSE_MOVE:
          case Me.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            R = f;
            break;
          default:
            R = 0.5;
            break;
        }
      let L = Mx(o, _, n, i, ye, u);
      if (
        (t.dispatch(
          (0, Ee.instanceAdded)({
            instanceId: p,
            elementId: O,
            origin: L,
            refType: S,
            skipMotion: b,
            skipToValue: R,
            ...r,
          })
        ),
        Gh(document.body, "ix2-animation-started", p),
        a)
      ) {
        fF(t, p);
        return;
      }
      vt({ store: t, select: ({ ixInstances: N }) => N[p], onChange: Vh }),
        h && t.dispatch((0, Ee.instanceStarted)(p, m.tick));
    }
    function Xo(e, t) {
      Gh(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: n, actionItem: r } = e,
        { ixElements: o } = t.getState(),
        { ref: i, refType: a } = o[n] || {};
      a === Lh && qx(i, r, ye), t.dispatch((0, Ee.instanceRemoved)(e.id));
    }
    function Gh(e, t, n) {
      let r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, n), e.dispatchEvent(r);
    }
    function fF(e, t) {
      let { ixParameters: n } = e.getState();
      e.dispatch((0, Ee.instanceStarted)(t, 0)),
        e.dispatch((0, Ee.animationFrameChanged)(performance.now(), n));
      let { ixInstances: r } = e.getState();
      Vh(r[t], e);
    }
    function Vh(e, t) {
      let {
          active: n,
          continuous: r,
          complete: o,
          elementId: i,
          actionItem: a,
          actionTypeId: u,
          renderType: s,
          current: f,
          groupIndex: E,
          eventId: h,
          eventTarget: p,
          eventStateKey: g,
          actionListId: m,
          isCarrier: y,
          styleProp: O,
          verbose: _,
          pluginInstance: S,
        } = e,
        { ixData: b, ixSession: R } = t.getState(),
        { events: L } = b,
        N = L && L[h] ? L[h] : {},
        { mediaQueries: V = b.mediaQueryKeys } = N;
      if (hr(V, R.mediaQueryKey) && (r || n || o)) {
        if (f || (s === wx && o)) {
          t.dispatch((0, Ee.elementStateChanged)(i, u, f, a));
          let { ixElements: X } = t.getState(),
            { ref: W, refType: j, refState: J } = X[i] || {},
            D = J && J[u];
          (j === Lh || Er(u)) && Nx(W, J, D, h, a, O, ye, s, S);
        }
        if (o) {
          if (y) {
            let X = Uo({
              store: t,
              eventId: h,
              eventTarget: p,
              eventStateKey: g,
              actionListId: m,
              groupIndex: E + 1,
              verbose: _,
            });
            _ &&
              !X &&
              t.dispatch(
                (0, Ee.actionListPlaybackChanged)({
                  actionListId: m,
                  isPlaying: !1,
                })
              );
          }
          Xo(e, t);
        }
      }
    }
  });
  var Xh = c((Ho) => {
    "use strict";
    Object.defineProperty(Ho, "__esModule", { value: !0 });
    function dF(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    dF(Ho, {
      actions: function () {
        return hF;
      },
      destroy: function () {
        return Bh;
      },
      init: function () {
        return yF;
      },
      setEnv: function () {
        return _F;
      },
      store: function () {
        return yr;
      },
    });
    var pF = Hr(),
      gF = EF(Hd()),
      ko = Do(),
      hF = vF(rr());
    function EF(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Uh(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (Uh = function (r) {
        return r ? n : t;
      })(e);
    }
    function vF(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = Uh(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(r, i, a)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var yr = (0, pF.createStore)(gF.default);
    function _F(e) {
      e() && (0, ko.observeRequests)(yr);
    }
    function yF(e) {
      Bh(), (0, ko.startEngine)({ store: yr, rawData: e, allowEvents: !0 });
    }
    function Bh() {
      (0, ko.stopEngine)(yr);
    }
  });
  var zh = c((nV, Hh) => {
    "use strict";
    var Wh = Ge(),
      kh = Xh();
    kh.setEnv(Wh.env);
    Wh.define(
      "ix2",
      (Hh.exports = function () {
        return kh;
      })
    );
  });
  var Yh = c((rV, Kh) => {
    "use strict";
    var zo = window.jQuery,
      Ye = {},
      mr = [],
      jh = ".w-ix",
      Ir = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), zo(t).triggerHandler(Ye.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), zo(t).triggerHandler(Ye.types.OUTRO));
        },
      };
    Ye.triggers = {};
    Ye.types = { INTRO: "w-ix-intro" + jh, OUTRO: "w-ix-outro" + jh };
    Ye.init = function () {
      for (var e = mr.length, t = 0; t < e; t++) {
        var n = mr[t];
        n[0](0, n[1]);
      }
      (mr = []), zo.extend(Ye.triggers, Ir);
    };
    Ye.async = function () {
      for (var e in Ir) {
        var t = Ir[e];
        Ir.hasOwnProperty(e) &&
          (Ye.triggers[e] = function (n, r) {
            mr.push([t, r]);
          });
      }
    };
    Ye.async();
    Kh.exports = Ye;
  });
  var Ko = c((iV, Zh) => {
    "use strict";
    var jo = Yh();
    function Qh(e, t) {
      var n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
    }
    var mF = window.jQuery,
      Tr = {},
      $h = ".w-ix",
      IF = {
        reset: function (e, t) {
          jo.triggers.reset(e, t);
        },
        intro: function (e, t) {
          jo.triggers.intro(e, t), Qh(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          jo.triggers.outro(e, t), Qh(t, "COMPONENT_INACTIVE");
        },
      };
    Tr.triggers = {};
    Tr.types = { INTRO: "w-ix-intro" + $h, OUTRO: "w-ix-outro" + $h };
    mF.extend(Tr.triggers, IF);
    Zh.exports = Tr;
  });
  var eE = c((oV, Jh) => {
    "use strict";
    var ut = Ge(),
      TF = Ko(),
      Te = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    ut.define(
      "navbar",
      (Jh.exports = function (e, t) {
        var n = {},
          r = e.tram,
          o = e(window),
          i = e(document),
          a = t.debounce,
          u,
          s,
          f,
          E,
          h = ut.env(),
          p = '<div class="w-nav-overlay" data-wf-ignore />',
          g = ".w-nav",
          m = "w--open",
          y = "w--nav-dropdown-open",
          O = "w--nav-dropdown-toggle-open",
          _ = "w--nav-dropdown-list-open",
          S = "w--nav-link-open",
          b = TF.triggers,
          R = e();
        (n.ready = n.design = n.preview = L),
          (n.destroy = function () {
            (R = e()), N(), s && s.length && s.each(j);
          });
        function L() {
          (f = h && ut.env("design")),
            (E = ut.env("editor")),
            (u = e(document.body)),
            (s = i.find(g)),
            s.length && (s.each(W), N(), V());
        }
        function N() {
          ut.resize.off(X);
        }
        function V() {
          ut.resize.on(X);
        }
        function X() {
          s.each(C);
        }
        function W(d, x) {
          var H = e(x),
            q = e.data(x, g);
          q ||
            (q = e.data(x, g, {
              open: !1,
              el: H,
              config: {},
              selectedIdx: -1,
            })),
            (q.menu = H.find(".w-nav-menu")),
            (q.links = q.menu.find(".w-nav-link")),
            (q.dropdowns = q.menu.find(".w-dropdown")),
            (q.dropdownToggle = q.menu.find(".w-dropdown-toggle")),
            (q.dropdownList = q.menu.find(".w-dropdown-list")),
            (q.button = H.find(".w-nav-button")),
            (q.container = H.find(".w-container")),
            (q.overlayContainerId = "w-nav-overlay-" + d),
            (q.outside = Ne(q));
          var fe = H.find(".w-nav-brand");
          fe &&
            fe.attr("href") === "/" &&
            fe.attr("aria-label") == null &&
            fe.attr("aria-label", "home"),
            q.button.attr("style", "-webkit-user-select: text;"),
            q.button.attr("aria-label") == null &&
              q.button.attr("aria-label", "menu"),
            q.button.attr("role", "button"),
            q.button.attr("tabindex", "0"),
            q.button.attr("aria-controls", q.overlayContainerId),
            q.button.attr("aria-haspopup", "menu"),
            q.button.attr("aria-expanded", "false"),
            q.el.off(g),
            q.button.off(g),
            q.menu.off(g),
            T(q),
            f
              ? (J(q), q.el.on("setting" + g, M(q)))
              : (D(q),
                q.button.on("click" + g, ue(q)),
                q.menu.on("click" + g, "a", me(q)),
                q.button.on("keydown" + g, k(q)),
                q.el.on("keydown" + g, U(q))),
            C(d, x);
        }
        function j(d, x) {
          var H = e.data(x, g);
          H && (J(H), e.removeData(x, g));
        }
        function J(d) {
          d.overlay && (z(d, !0), d.overlay.remove(), (d.overlay = null));
        }
        function D(d) {
          d.overlay ||
            ((d.overlay = e(p).appendTo(d.el)),
            d.overlay.attr("id", d.overlayContainerId),
            (d.parent = d.menu.parent()),
            z(d, !0));
        }
        function T(d) {
          var x = {},
            H = d.config || {},
            q = (x.animation = d.el.attr("data-animation") || "default");
          (x.animOver = /^over/.test(q)),
            (x.animDirect = /left$/.test(q) ? -1 : 1),
            H.animation !== q && d.open && t.defer(Z, d),
            (x.easing = d.el.attr("data-easing") || "ease"),
            (x.easing2 = d.el.attr("data-easing2") || "ease");
          var fe = d.el.attr("data-duration");
          (x.duration = fe != null ? Number(fe) : 400),
            (x.docHeight = d.el.attr("data-doc-height")),
            (d.config = x);
        }
        function M(d) {
          return function (x, H) {
            H = H || {};
            var q = o.width();
            T(d),
              H.open === !0 && ie(d, !0),
              H.open === !1 && z(d, !0),
              d.open &&
                t.defer(function () {
                  q !== o.width() && Z(d);
                });
          };
        }
        function k(d) {
          return function (x) {
            switch (x.keyCode) {
              case Te.SPACE:
              case Te.ENTER:
                return ue(d)(), x.preventDefault(), x.stopPropagation();
              case Te.ESCAPE:
                return z(d), x.preventDefault(), x.stopPropagation();
              case Te.ARROW_RIGHT:
              case Te.ARROW_DOWN:
              case Te.HOME:
              case Te.END:
                return d.open
                  ? (x.keyCode === Te.END
                      ? (d.selectedIdx = d.links.length - 1)
                      : (d.selectedIdx = 0),
                    ee(d),
                    x.preventDefault(),
                    x.stopPropagation())
                  : (x.preventDefault(), x.stopPropagation());
            }
          };
        }
        function U(d) {
          return function (x) {
            if (d.open)
              switch (
                ((d.selectedIdx = d.links.index(document.activeElement)),
                x.keyCode)
              ) {
                case Te.HOME:
                case Te.END:
                  return (
                    x.keyCode === Te.END
                      ? (d.selectedIdx = d.links.length - 1)
                      : (d.selectedIdx = 0),
                    ee(d),
                    x.preventDefault(),
                    x.stopPropagation()
                  );
                case Te.ESCAPE:
                  return (
                    z(d),
                    d.button.focus(),
                    x.preventDefault(),
                    x.stopPropagation()
                  );
                case Te.ARROW_LEFT:
                case Te.ARROW_UP:
                  return (
                    (d.selectedIdx = Math.max(-1, d.selectedIdx - 1)),
                    ee(d),
                    x.preventDefault(),
                    x.stopPropagation()
                  );
                case Te.ARROW_RIGHT:
                case Te.ARROW_DOWN:
                  return (
                    (d.selectedIdx = Math.min(
                      d.links.length - 1,
                      d.selectedIdx + 1
                    )),
                    ee(d),
                    x.preventDefault(),
                    x.stopPropagation()
                  );
              }
          };
        }
        function ee(d) {
          if (d.links[d.selectedIdx]) {
            var x = d.links[d.selectedIdx];
            x.focus(), me(x);
          }
        }
        function Z(d) {
          d.open && (z(d, !0), ie(d, !0));
        }
        function ue(d) {
          return a(function () {
            d.open ? z(d) : ie(d);
          });
        }
        function me(d) {
          return function (x) {
            var H = e(this),
              q = H.attr("href");
            if (!ut.validClick(x.currentTarget)) {
              x.preventDefault();
              return;
            }
            q && q.indexOf("#") === 0 && d.open && z(d);
          };
        }
        function Ne(d) {
          return (
            d.outside && i.off("click" + g, d.outside),
            function (x) {
              var H = e(x.target);
              (E && H.closest(".w-editor-bem-EditorOverlay").length) ||
                ve(d, H);
            }
          );
        }
        var ve = a(function (d, x) {
          if (d.open) {
            var H = x.closest(".w-nav-menu");
            d.menu.is(H) || z(d);
          }
        });
        function C(d, x) {
          var H = e.data(x, g),
            q = (H.collapsed = H.button.css("display") !== "none");
          if ((H.open && !q && !f && z(H, !0), H.container.length)) {
            var fe = K(H);
            H.links.each(fe), H.dropdowns.each(fe);
          }
          H.open && ae(H);
        }
        var B = "max-width";
        function K(d) {
          var x = d.container.css(B);
          return (
            x === "none" && (x = ""),
            function (H, q) {
              (q = e(q)), q.css(B, ""), q.css(B) === "none" && q.css(B, x);
            }
          );
        }
        function G(d, x) {
          x.setAttribute("data-nav-menu-open", "");
        }
        function ne(d, x) {
          x.removeAttribute("data-nav-menu-open");
        }
        function ie(d, x) {
          if (d.open) return;
          (d.open = !0),
            d.menu.each(G),
            d.links.addClass(S),
            d.dropdowns.addClass(y),
            d.dropdownToggle.addClass(O),
            d.dropdownList.addClass(_),
            d.button.addClass(m);
          var H = d.config,
            q = H.animation;
          (q === "none" || !r.support.transform || H.duration <= 0) && (x = !0);
          var fe = ae(d),
            Je = d.menu.outerHeight(!0),
            Be = d.menu.outerWidth(!0),
            l = d.el.height(),
            v = d.el[0];
          if (
            (C(0, v),
            b.intro(0, v),
            ut.redraw.up(),
            f || i.on("click" + g, d.outside),
            x)
          ) {
            P();
            return;
          }
          var I = "transform " + H.duration + "ms " + H.easing;
          if (
            (d.overlay &&
              ((R = d.menu.prev()), d.overlay.show().append(d.menu)),
            H.animOver)
          ) {
            r(d.menu)
              .add(I)
              .set({ x: H.animDirect * Be, height: fe })
              .start({ x: 0 })
              .then(P),
              d.overlay && d.overlay.width(Be);
            return;
          }
          var A = l + Je;
          r(d.menu).add(I).set({ y: -A }).start({ y: 0 }).then(P);
          function P() {
            d.button.attr("aria-expanded", "true");
          }
        }
        function ae(d) {
          var x = d.config,
            H = x.docHeight ? i.height() : u.height();
          return (
            x.animOver
              ? d.menu.height(H)
              : d.el.css("position") !== "fixed" && (H -= d.el.outerHeight(!0)),
            d.overlay && d.overlay.height(H),
            H
          );
        }
        function z(d, x) {
          if (!d.open) return;
          (d.open = !1), d.button.removeClass(m);
          var H = d.config;
          if (
            ((H.animation === "none" ||
              !r.support.transform ||
              H.duration <= 0) &&
              (x = !0),
            b.outro(0, d.el[0]),
            i.off("click" + g, d.outside),
            x)
          ) {
            r(d.menu).stop(), v();
            return;
          }
          var q = "transform " + H.duration + "ms " + H.easing2,
            fe = d.menu.outerHeight(!0),
            Je = d.menu.outerWidth(!0),
            Be = d.el.height();
          if (H.animOver) {
            r(d.menu)
              .add(q)
              .start({ x: Je * H.animDirect })
              .then(v);
            return;
          }
          var l = Be + fe;
          r(d.menu).add(q).start({ y: -l }).then(v);
          function v() {
            d.menu.height(""),
              r(d.menu).set({ x: 0, y: 0 }),
              d.menu.each(ne),
              d.links.removeClass(S),
              d.dropdowns.removeClass(y),
              d.dropdownToggle.removeClass(O),
              d.dropdownList.removeClass(_),
              d.overlay &&
                d.overlay.children().length &&
                (R.length ? d.menu.insertAfter(R) : d.menu.prependTo(d.parent),
                d.overlay.attr("style", "").hide()),
              d.el.triggerHandler("w-close"),
              d.button.attr("aria-expanded", "false");
          }
        }
        return n;
      })
    );
  });
  var tE = c((Yo) => {
    "use strict";
    Object.defineProperty(Yo, "__esModule", { value: !0 });
    Object.defineProperty(Yo, "default", {
      enumerable: !0,
      get: function () {
        return OF;
      },
    });
    function OF(e, t, n, r, o, i, a, u, s, f, E, h, p) {
      return function (g) {
        e(g);
        var m = g.form,
          y = {
            name: m.attr("data-name") || m.attr("name") || "Untitled Form",
            pageId: m.attr("data-wf-page-id") || "",
            elementId: m.attr("data-wf-element-id") || "",
            domain: h("html").attr("data-wf-domain") || null,
            source: t.href,
            test: n.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              m.html()
            ),
            trackingCookies: r(),
          };
        let O = m.attr("data-wf-flow");
        O && (y.wfFlow = O), o(g);
        var _ = i(m, y.fields);
        if (_) return a(_);
        if (((y.fileUploads = u(m)), s(g), !f)) {
          E(g);
          return;
        }
        h.ajax({
          url: p,
          type: "POST",
          data: y,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (S) {
            S && S.code === 200 && (g.success = !0), E(g);
          })
          .fail(function () {
            E(g);
          });
      };
    }
  });
  var rE = c((uV, nE) => {
    "use strict";
    var Or = Ge(),
      bF = (e, t, n, r) => {
        let o = document.createElement("div");
        t.appendChild(o),
          turnstile.render(o, {
            sitekey: e,
            callback: function (i) {
              n(i);
            },
            "error-callback": function () {
              r();
            },
          });
      };
    Or.define(
      "forms",
      (nE.exports = function (e, t) {
        let n = "TURNSTILE_LOADED";
        var r = {},
          o = e(document),
          i,
          a = window.location,
          u = window.XDomainRequest && !window.atob,
          s = ".w-form",
          f,
          E = /e(-)?mail/i,
          h = /^\S+@\S+$/,
          p = window.alert,
          g = Or.env(),
          m,
          y,
          O;
        let _ = o.find("[data-turnstile-sitekey]").data("turnstile-sitekey"),
          S;
        var b = /list-manage[1-9]?.com/i,
          R = t.debounce(function () {
            p(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              N(), L(), !g && !m && X();
            };
        function L() {
          (f = e("html").attr("data-wf-site")),
            (y = "https://webflow.com/api/v1/form/" + f),
            u &&
              y.indexOf("https://webflow.com") >= 0 &&
              (y = y.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (O = `${y}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(V);
        }
        function N() {
          _ &&
            ((S = document.createElement("script")),
            (S.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"),
            document.head.appendChild(S),
            (S.onload = () => {
              o.trigger(n);
            }));
        }
        function V(C, B) {
          var K = e(B),
            G = e.data(B, s);
          G || (G = e.data(B, s, { form: K })), W(G);
          var ne = K.closest("div.w-form");
          (G.done = ne.find("> .w-form-done")),
            (G.fail = ne.find("> .w-form-fail")),
            (G.fileUploads = ne.find(".w-file-upload")),
            G.fileUploads.each(function (z) {
              me(z, G);
            }),
            _ &&
              ((G.wait = !1),
              j(G),
              o.on(typeof turnstile < "u" ? "ready" : n, function () {
                bF(
                  _,
                  B,
                  (z) => {
                    (G.turnstileToken = z), W(G);
                  },
                  () => {
                    j(G);
                  }
                );
              }));
          var ie =
            G.form.attr("aria-label") || G.form.attr("data-name") || "Form";
          G.done.attr("aria-label") || G.form.attr("aria-label", ie),
            G.done.attr("tabindex", "-1"),
            G.done.attr("role", "region"),
            G.done.attr("aria-label") ||
              G.done.attr("aria-label", ie + " success"),
            G.fail.attr("tabindex", "-1"),
            G.fail.attr("role", "region"),
            G.fail.attr("aria-label") ||
              G.fail.attr("aria-label", ie + " failure");
          var ae = (G.action = K.attr("action"));
          if (
            ((G.handler = null),
            (G.redirect = K.attr("data-redirect")),
            b.test(ae))
          ) {
            G.handler = ee;
            return;
          }
          if (!ae) {
            if (f) {
              G.handler = (() => {
                let z = tE().default;
                return z(W, a, Or, M, ue, J, p, D, j, f, Z, e, y);
              })();
              return;
            }
            R();
          }
        }
        function X() {
          (m = !0),
            o.on("submit", s + " form", function (z) {
              var d = e.data(this, s);
              d.handler && ((d.evt = z), d.handler(d));
            });
          let C = ".w-checkbox-input",
            B = ".w-radio-input",
            K = "w--redirected-checked",
            G = "w--redirected-focus",
            ne = "w--redirected-focus-visible",
            ie = ":focus-visible, [data-wf-focus-visible]",
            ae = [
              ["checkbox", C],
              ["radio", B],
            ];
          o.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + C + ")",
            (z) => {
              e(z.target).siblings(C).toggleClass(K);
            }
          ),
            o.on("change", s + ' form input[type="radio"]', (z) => {
              e(`input[name="${z.target.name}"]:not(${C})`).map((x, H) =>
                e(H).siblings(B).removeClass(K)
              );
              let d = e(z.target);
              d.hasClass("w-radio-input") || d.siblings(B).addClass(K);
            }),
            ae.forEach(([z, d]) => {
              o.on(
                "focus",
                s + ` form input[type="${z}"]:not(` + d + ")",
                (x) => {
                  e(x.target).siblings(d).addClass(G),
                    e(x.target).filter(ie).siblings(d).addClass(ne);
                }
              ),
                o.on(
                  "blur",
                  s + ` form input[type="${z}"]:not(` + d + ")",
                  (x) => {
                    e(x.target).siblings(d).removeClass(`${G} ${ne}`);
                  }
                );
            });
        }
        function W(C) {
          var B = (C.btn = C.form.find(':input[type="submit"]'));
          (C.wait = C.btn.attr("data-wait") || null),
            (C.success = !1),
            B.prop("disabled", !!(_ && !C.turnstileToken)),
            C.label && B.val(C.label);
        }
        function j(C) {
          var B = C.btn,
            K = C.wait;
          B.prop("disabled", !0), K && ((C.label = B.val()), B.val(K));
        }
        function J(C, B) {
          var K = null;
          return (
            (B = B || {}),
            C.find(':input:not([type="submit"]):not([type="file"])').each(
              function (G, ne) {
                var ie = e(ne),
                  ae = ie.attr("type"),
                  z =
                    ie.attr("data-name") ||
                    ie.attr("name") ||
                    "Field " + (G + 1);
                z = encodeURIComponent(z);
                var d = ie.val();
                if (ae === "checkbox") d = ie.is(":checked");
                else if (ae === "radio") {
                  if (B[z] === null || typeof B[z] == "string") return;
                  d =
                    C.find(
                      'input[name="' + ie.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof d == "string" && (d = e.trim(d)),
                  (B[z] = d),
                  (K = K || k(ie, ae, z, d));
              }
            ),
            K
          );
        }
        function D(C) {
          var B = {};
          return (
            C.find(':input[type="file"]').each(function (K, G) {
              var ne = e(G),
                ie =
                  ne.attr("data-name") || ne.attr("name") || "File " + (K + 1),
                ae = ne.attr("data-value");
              typeof ae == "string" && (ae = e.trim(ae)), (B[ie] = ae);
            }),
            B
          );
        }
        let T = { _mkto_trk: "marketo" };
        function M() {
          return document.cookie.split("; ").reduce(function (B, K) {
            let G = K.split("="),
              ne = G[0];
            if (ne in T) {
              let ie = T[ne],
                ae = G.slice(1).join("=");
              B[ie] = ae;
            }
            return B;
          }, {});
        }
        function k(C, B, K, G) {
          var ne = null;
          return (
            B === "password"
              ? (ne = "Passwords cannot be submitted.")
              : C.attr("required")
              ? G
                ? E.test(C.attr("type")) &&
                  (h.test(G) ||
                    (ne = "Please enter a valid email address for: " + K))
                : (ne = "Please fill out the required field: " + K)
              : K === "g-recaptcha-response" &&
                !G &&
                (ne = "Please confirm you\u2019re not a robot."),
            ne
          );
        }
        function U(C) {
          ue(C), Z(C);
        }
        function ee(C) {
          W(C);
          var B = C.form,
            K = {};
          if (/^https/.test(a.href) && !/^https/.test(C.action)) {
            B.attr("method", "post");
            return;
          }
          ue(C);
          var G = J(B, K);
          if (G) return p(G);
          j(C);
          var ne;
          t.each(K, function (d, x) {
            E.test(x) && (K.EMAIL = d),
              /^((full[ _-]?)?name)$/i.test(x) && (ne = d),
              /^(first[ _-]?name)$/i.test(x) && (K.FNAME = d),
              /^(last[ _-]?name)$/i.test(x) && (K.LNAME = d);
          }),
            ne &&
              !K.FNAME &&
              ((ne = ne.split(" ")),
              (K.FNAME = ne[0]),
              (K.LNAME = K.LNAME || ne[1]));
          var ie = C.action.replace("/post?", "/post-json?") + "&c=?",
            ae = ie.indexOf("u=") + 2;
          ae = ie.substring(ae, ie.indexOf("&", ae));
          var z = ie.indexOf("id=") + 3;
          (z = ie.substring(z, ie.indexOf("&", z))),
            (K["b_" + ae + "_" + z] = ""),
            e
              .ajax({ url: ie, data: K, dataType: "jsonp" })
              .done(function (d) {
                (C.success = d.result === "success" || /already/.test(d.msg)),
                  C.success || console.info("MailChimp error: " + d.msg),
                  Z(C);
              })
              .fail(function () {
                Z(C);
              });
        }
        function Z(C) {
          var B = C.form,
            K = C.redirect,
            G = C.success;
          if (G && K) {
            Or.location(K);
            return;
          }
          C.done.toggle(G),
            C.fail.toggle(!G),
            G ? C.done.focus() : C.fail.focus(),
            B.toggle(!G),
            W(C);
        }
        function ue(C) {
          C.evt && C.evt.preventDefault(), (C.evt = null);
        }
        function me(C, B) {
          if (!B.fileUploads || !B.fileUploads[C]) return;
          var K,
            G = e(B.fileUploads[C]),
            ne = G.find("> .w-file-upload-default"),
            ie = G.find("> .w-file-upload-uploading"),
            ae = G.find("> .w-file-upload-success"),
            z = G.find("> .w-file-upload-error"),
            d = ne.find(".w-file-upload-input"),
            x = ne.find(".w-file-upload-label"),
            H = x.children(),
            q = z.find(".w-file-upload-error-msg"),
            fe = ae.find(".w-file-upload-file"),
            Je = ae.find(".w-file-remove-link"),
            Be = fe.find(".w-file-upload-file-name"),
            l = q.attr("data-w-size-error"),
            v = q.attr("data-w-type-error"),
            I = q.attr("data-w-generic-error");
          if (
            (g ||
              x.on("click keydown", function (Q) {
                (Q.type === "keydown" && Q.which !== 13 && Q.which !== 32) ||
                  (Q.preventDefault(), d.click());
              }),
            x.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            Je.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            g)
          )
            d.on("click", function (Q) {
              Q.preventDefault();
            }),
              x.on("click", function (Q) {
                Q.preventDefault();
              }),
              H.on("click", function (Q) {
                Q.preventDefault();
              });
          else {
            Je.on("click keydown", function (Q) {
              if (Q.type === "keydown") {
                if (Q.which !== 13 && Q.which !== 32) return;
                Q.preventDefault();
              }
              d.removeAttr("data-value"),
                d.val(""),
                Be.html(""),
                ne.toggle(!0),
                ae.toggle(!1),
                x.focus();
            }),
              d.on("change", function (Q) {
                (K = Q.target && Q.target.files && Q.target.files[0]),
                  K &&
                    (ne.toggle(!1),
                    z.toggle(!1),
                    ie.toggle(!0),
                    ie.focus(),
                    Be.text(K.name),
                    te() || j(B),
                    (B.fileUploads[C].uploading = !0),
                    Ne(K, w));
              });
            var A = x.outerHeight();
            d.height(A), d.width(1);
          }
          function P(Q) {
            var F = Q.responseJSON && Q.responseJSON.msg,
              re = I;
            typeof F == "string" && F.indexOf("InvalidFileTypeError") === 0
              ? (re = v)
              : typeof F == "string" &&
                F.indexOf("MaxFileSizeError") === 0 &&
                (re = l),
              q.text(re),
              d.removeAttr("data-value"),
              d.val(""),
              ie.toggle(!1),
              ne.toggle(!0),
              z.toggle(!0),
              z.focus(),
              (B.fileUploads[C].uploading = !1),
              te() || W(B);
          }
          function w(Q, F) {
            if (Q) return P(Q);
            var re = F.fileName,
              oe = F.postData,
              he = F.fileId,
              Pe = F.s3Url;
            d.attr("data-value", he), ve(Pe, oe, K, re, Y);
          }
          function Y(Q) {
            if (Q) return P(Q);
            ie.toggle(!1),
              ae.css("display", "inline-block"),
              ae.focus(),
              (B.fileUploads[C].uploading = !1),
              te() || W(B);
          }
          function te() {
            var Q = (B.fileUploads && B.fileUploads.toArray()) || [];
            return Q.some(function (F) {
              return F.uploading;
            });
          }
        }
        function Ne(C, B) {
          var K = new URLSearchParams({ name: C.name, size: C.size });
          e.ajax({ type: "GET", url: `${O}?${K}`, crossDomain: !0 })
            .done(function (G) {
              B(null, G);
            })
            .fail(function (G) {
              B(G);
            });
        }
        function ve(C, B, K, G, ne) {
          var ie = new FormData();
          for (var ae in B) ie.append(ae, B[ae]);
          ie.append("file", K, G),
            e
              .ajax({
                type: "POST",
                url: C,
                data: ie,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                ne(null);
              })
              .fail(function (z) {
                ne(z);
              });
        }
        return r;
      })
    );
  });
  sa();
  la();
  da();
  ha();
  va();
  ya();
  Ia();
  zh();
  Ko();
  eE();
  rE();
  Webflow.require("ix2").init({
    events: {
      e: {
        id: "e",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-2",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "675369662e3502508e2b63c4|89a9a172-e290-b2a4-cbb3-ae7ee87c576a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "675369662e3502508e2b63c4|89a9a172-e290-b2a4-cbb3-ae7ee87c576a",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1736683654137,
      },
      "e-7": {
        id: "e-7",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-8",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "675369662e3502508e2b63c6|24b145b0-5f87-5151-f0b9-30216fe1dbc9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "675369662e3502508e2b63c6|24b145b0-5f87-5151-f0b9-30216fe1dbc9",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1736693116834,
      },
      "e-15": {
        id: "e-15",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-16",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "675369662e3502508e2b63c6|c1a2543c-c1b1-7f00-7a20-3ffa2dac5c42",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "675369662e3502508e2b63c6|c1a2543c-c1b1-7f00-7a20-3ffa2dac5c42",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1736693519354,
      },
      "e-17": {
        id: "e-17",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-18",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "675369662e3502508e2b63c6|225ed376-bb92-8215-c327-f0a5820a4cf1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "675369662e3502508e2b63c6|225ed376-bb92-8215-c327-f0a5820a4cf1",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1736693551145,
      },
      "e-19": {
        id: "e-19",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-20",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "675369662e3502508e2b63c6|16746c02-48a2-f08d-927b-59131752c918",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "675369662e3502508e2b63c6|16746c02-48a2-f08d-927b-59131752c918",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1736693564964,
      },
      "e-21": {
        id: "e-21",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-22",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "675369662e3502508e2b63c6|e4e11114-6223-5a3b-2ba9-d18dffe24685",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "675369662e3502508e2b63c6|e4e11114-6223-5a3b-2ba9-d18dffe24685",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1736696820550,
      },
      "e-23": {
        id: "e-23",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-3",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-24",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "675369662e3502508e2b63c4|2b802029-4807-56f6-536a-dfabc17d8d27",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "675369662e3502508e2b63c4|2b802029-4807-56f6-536a-dfabc17d8d27",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1736844000204,
      },
      "e-29": {
        id: "e-29",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-30",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "675369662e3502508e2b63c4|32eac989-8b4d-5020-5889-785aa54e11a6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "675369662e3502508e2b63c4|32eac989-8b4d-5020-5889-785aa54e11a6",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1736845046579,
      },
    },
    actionLists: {
      a: {
        id: "a",
        title: "Text animation",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "675369662e3502508e2b63c4|89a9a172-e290-b2a4-cbb3-ae7ee87c576a",
                  },
                  yValue: 1.5,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "675369662e3502508e2b63c4|89a9a172-e290-b2a4-cbb3-ae7ee87c576a",
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1e3,
                  target: {
                    useEventTarget: !0,
                    id: "675369662e3502508e2b63c4|89a9a172-e290-b2a4-cbb3-ae7ee87c576a",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 1400,
                  target: {
                    useEventTarget: !0,
                    id: "675369662e3502508e2b63c4|89a9a172-e290-b2a4-cbb3-ae7ee87c576a",
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1736683690478,
      },
      "a-3": {
        id: "a-3",
        title: "Fade only",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-3-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "675369662e3502508e2b63c4|89a9a172-e290-b2a4-cbb3-ae7ee87c576a",
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-3-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 500,
                  easing: "easeIn",
                  duration: 2e3,
                  target: {
                    useEventTarget: !0,
                    id: "675369662e3502508e2b63c4|89a9a172-e290-b2a4-cbb3-ae7ee87c576a",
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1736683690478,
      },
    },
    site: {
      mediaQueries: [
        { key: "main", min: 992, max: 1e4 },
        { key: "medium", min: 768, max: 991 },
        { key: "small", min: 480, max: 767 },
        { key: "tiny", min: 0, max: 479 },
      ],
    },
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      // Close all other open sections
      accordionHeaders.forEach((otherHeader) => {
        if (otherHeader !== header) {
          otherHeader.classList.remove("active");
          const otherContent = otherHeader.nextElementSibling;
          otherContent.style.maxHeight = null;
        }
      });

      // Toggle current section
      header.classList.toggle("active");
      const content = header.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});

// Collapse sidebar on mobile

document.addEventListener("DOMContentLoaded", function () {
  // Add event listener for the toggle button
  document
    .getElementById("toggleSidebar")
    .addEventListener("click", function () {
      document.getElementById("outlinersticky").classList.toggle("active");
    });

  // Close sidebar when clicking outside
  document.addEventListener("click", function (event) {
    const sidebar = document.getElementById("outlinersticky");
    const toggleBtn = document.getElementById("toggleSidebar");

    if (window.innerWidth <= 768) {
      if (
        !sidebar.contains(event.target) &&
        !toggleBtn.contains(event.target) &&
        sidebar.classList.contains("active")
      ) {
        sidebar.classList.remove("active");
      }
    }
  });
});

// filter attempt 2

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const shareLinkInput = document.getElementById("shareLink");
  const copyBtn = document.getElementById("copyBtn");
  const tooltipText = document.getElementById("tooltipText");

  // Function to apply filter
  function applyFilter(filterValue) {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => {
      if (btn.getAttribute("data-filter") === filterValue) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Filter projects
    projectCards.forEach((card) => {
      card.classList.remove("fadeIn");

      if (filterValue === "all") {
        card.classList.remove("hide");
        setTimeout(() => {
          card.classList.add("fadeIn");
        }, 10);
      } else {
        const categories = card.getAttribute("data-categories");

        if (categories.includes(filterValue)) {
          card.classList.remove("hide");
          setTimeout(() => {
            card.classList.add("fadeIn");
          }, 10);
        } else {
          card.classList.add("hide");
        }
      }
    });

    // Update URL and share link
    updateURL(filterValue);
  }

  // Function to update URL with filter parameter
  function updateURL(filter) {
    const url = new URL(window.location);

    if (filter === "all") {
      // Remove the filter parameter if "all" is selected
      url.searchParams.delete("filter");
    } else {
      // Set the filter parameter
      url.searchParams.set("filter", filter);
    }

    // Update browser history without refreshing the page
    window.history.pushState({}, "", url);

    // Update share link input
    shareLinkInput.value = url.href;
  }

  // Copy link button functionality
  copyBtn.addEventListener("click", function () {
    shareLinkInput.select();
    document.execCommand("copy");

    // Show the tooltip
    copyBtn.classList.add("show");

    // Hide the tooltip after 2 seconds
    setTimeout(() => {
      copyBtn.classList.remove("show");
    }, 2000);
  });

  // Add click event to filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter");
      applyFilter(filterValue);
    });
  });

  // Check for filter parameter in URL on page load
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get("filter");

  if (filterParam) {
    // Apply the filter from URL parameter
    applyFilter(filterParam);
  } else {
    // Default to "all" and set initial share link
    shareLinkInput.value = window.location.href;
  }
});

/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
