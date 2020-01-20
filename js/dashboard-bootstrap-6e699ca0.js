function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

self.System = self.System || function () {
  var e = {},
      t = {},
      r = function r(e) {
    return e.replace(/^.\/(\w+)-[a-f0-9]{8,}.js$/, "./$1.js");
  },
      n = {
    register: function register(s, o) {
      var i = r("./".concat(((document.currentScript || {}).src || "").split("?").shift().split("/").pop())),
          a = {},
          c = o(function (e, t) {
        return t ? a[e] = t : Object.assign(a, e);
      }, n);
      e[i] = Promise.all(s.map(function (e, t) {
        return n["import"](r(e)).then(c.setters[t]);
      })).then(function () {
        return c.execute(), a;
      })["catch"](function (e) {
        throw e.message = "evaluating module ".concat(i, ": ").concat(e.message), e;
      }), t[i] && (t[i](e[i]), delete t[i]);
    },
    "import": function _import(r) {
      return e[r] || (e[r] = new Promise(function (e, n) {
        var s = setTimeout(function () {
          n(new Error("could not resolve ".concat(r)));
        }, 1e4);

        t[r] = function (t) {
          clearTimeout(s), e(t);
        };
      }));
    }
  };

  return n;
}(), System.register(["./frameworks.js"], function () {
  "use strict";

  var e, t, r, n, s, o, i, a, c, l, u, d, f;
  return {
    setters: [function (p) {
      e = p.c, t = p.o, r = p.t, n = p.g, s = p.m, o = p.q, i = p.n, a = p.e, c = p.p, l = p.k, u = p.f, d = p.v, f = p.w;
    }],
    execute: function execute() {
      function p(e) {
        var t = e.map(function (e) {
          return e.priority;
        }),
            r = Math.min.apply(Math, _toConsumableArray(t)),
            n = e.find(function (e) {
          return e.priority === r;
        });

        if (n) {
          o(n.el, ".js-loader").classList.remove("d-none");
        }
      }

      e(".dashboard-sidebar.js-sticky", {
        constructor: HTMLElement,
        initialize: function initialize(e) {
          if (e.classList.contains("is-placeholder")) return;
          var t = !0;

          var r = function r() {
            var r = e.getBoundingClientRect(),
                n = window.innerHeight,
                s = "fixed" === e.style.position;
            s ? s && t && (t = !1, e.style.height = "".concat(n, "px")) : (e.style.width = "auto", e.style.height = "".concat(n - r.top, "px"));
          };

          document.addEventListener("scroll", r, {
            passive: !0
          }), window.addEventListener("resize", function () {
            t = !0, r();
          }, {
            passive: !0
          }), r();
        }
      }), t("details:toggled", ".js-news-feed-event-group", function (e) {
        if (!_instanceof(e, CustomEvent)) throw new Error("invariant: app/assets/modules/github/dashboard.js:50");
        if (!e.detail.open) return;
        var t = e.currentTarget;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = t.querySelectorAll("[data-hydro-view]")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _n = _step.value;
            _instanceof(_n, HTMLElement) && r(_n);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
      var m = document.querySelectorAll(".js-dashboard-deferred");
      if (m.length) try {
        !function (e) {
          var t = Array.from(e).map(function (e) {
            return {
              url: n(e, "data-src"),
              priority: parseInt(n(e, "data-priority"), 10),
              el: e,
              loaded: !1
            };
          });
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            var _loop = function _loop() {
              var r = _step2.value;
              var e = r.url,
                  n = r.el;
              s(document, e).then(function (e) {
                n.replaceWith(e), r.loaded = !0, p(t.filter(function (e) {
                  return !e.loaded;
                }));
              })["catch"](function () {
                n.classList.add("is-error");
              });
            };

            for (var _iterator2 = t[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              _loop();
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          p(t);
        }(m);
      } catch (v) {}
      t("click", ".js-show-more-recent-items", function (e) {
        e.currentTarget.classList.add("d-none");
      }), e(".js-recent-activity-container", function () {
        var e = document.querySelector(".js-all-activity-header");
        e && e.classList.remove("d-none");
      });
      var h = new WeakMap(),
          g = 100;

      function j(e) {
        var t = h.get(e) || 0;
        if (t > g) return;
        var r = e.querySelector(".js-more-repos-form");

        if (r) {
          if (h.set(e, t + 1), !_instanceof(r, HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/dashboard/repo-list.js:29");
          l(r);
        }
      }

      function y(e) {
        var t = e.querySelector(".js-your-repositories-search");
        t && u(t, "filterable:change");
      }

      function w(e) {
        var t = n(e, "data-url"),
            r = n(e, "data-query-name");
        d(null, "", function (e, t, r) {
          var n = new URL(e, window.location.origin),
              s = new URLSearchParams(n.search.slice(1));
          return t.length < 1 ? s["delete"](r) : s.set(r, t), n.search = s.toString(), n.toString();
        }(t, e.value.trim(), r));
      }

      i(".js-your-repositories-search", function (e) {
        j(a(e, ".js-repos-container"));
      }), e(".js-your-repositories-search", {
        constructor: HTMLInputElement,
        initialize: function initialize(e) {
          e.defaultValue.trim().length > 0 && y(a(e, ".js-repos-container"));
        }
      }), c(".js-your-repositories-search", function (e) {
        var t = e.target;
        if (!_instanceof(t, HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/dashboard/repo-list.js:104");
        w(t);
      }), e(".js-more-repos-form", function (e) {
        var t = a(e, ".js-repos-container");
        (function (e) {
          var t = e.querySelector(".js-your-repositories-search");
          if (!t) return !1;
          if (document.activeElement === t) return !0;
          if (!_instanceof(t, HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/dashboard/repo-list.js:65");
          return t.defaultValue.trim().length > 0;
        })(t) && j(t), e.addEventListener("page:loaded", function () {
          y(t);
        });
      }), t("pjax:end", ".js-repos-container", function (e) {
        var t = e.target;
        if (!_instanceof(t, HTMLElement)) throw new Error("invariant: app/assets/modules/github/dashboard/repo-list.js:126");
        !function (e) {
          h.set(e, 0);
        }(t), y(t);
      }), f(".js-user-dashboard-unpin-form",
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(e, t) {
          var r, n, s;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  n = a(e, ".js-pinned-dashboard-items-container"), s = o(n, ".js-unpin-dashboard-item-error");
                  s.hidden = !0;
                  _context.prev = 2;
                  _context.next = 5;
                  return t.html();

                case 5:
                  r = _context.sent;
                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](2);
                  s.hidden = !1;

                case 11:
                  if (r) {
                    a(e, ".js-pinned-dashboard-item").remove();
                  }

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[2, 8]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  };
});
