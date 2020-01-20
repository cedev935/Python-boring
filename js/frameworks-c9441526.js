"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

self.System = self.System || function () {
  var t = {},
      e = {},
      n = function n(t) {
    return t.replace(/^.\/(\w+)-[a-f0-9]{8,}.js$/, "./$1.js");
  },
      o = {
    register: function register(i, r) {
      var s = n("./".concat(((document.currentScript || {}).src || "").split("?").shift().split("/").pop())),
          a = {},
          c = r(function (t, e) {
        return e ? a[t] = e : Object.assign(a, t);
      }, o);
      t[s] = Promise.all(i.map(function (t, e) {
        return o["import"](n(t)).then(c.setters[e]);
      })).then(function () {
        return c.execute(), a;
      })["catch"](function (t) {
        throw t.message = "evaluating module ".concat(s, ": ").concat(t.message), t;
      }), e[s] && (e[s](t[s]), delete e[s]);
    },
    "import": function _import(n) {
      return t[n] || (t[n] = new Promise(function (t, o) {
        var i = setTimeout(function () {
          o(new Error("could not resolve ".concat(n)));
        }, 1e4);

        e[n] = function (e) {
          clearTimeout(i), t(e);
        };
      }));
    }
  };

  return o;
}(), System.register([], function (t) {
  "use strict";

  return {
    execute: function execute() {
      function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      function n(t, n) {
        return !n || "object" !== e(n) && "function" != typeof n ? function (t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }(t) : n;
      }

      function o(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (o = function o(t) {
          if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
          var n;
          if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");

          if (void 0 !== e) {
            if (e.has(t)) return e.get(t);
            e.set(t, o);
          }

          function o() {
            return i(t, arguments, s(this).constructor);
          }

          return o.prototype = Object.create(t.prototype, {
            constructor: {
              value: o,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), r(o, t);
        })(t);
      }

      function i(t, e, n) {
        return (i = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;

          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
          } catch (Hr) {
            return !1;
          }
        }() ? Reflect.construct : function (t, e, n) {
          var o = [null];
          o.push.apply(o, e);
          var i = new (Function.bind.apply(t, o))();
          return n && r(i, n.prototype), i;
        }).apply(null, arguments);
      }

      function r(t, e) {
        return (r = Object.setPrototypeOf || function (t, e) {
          return t.__proto__ = e, t;
        })(t, e);
      }

      function s(t) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
      }

      t({
        $: function $(t, e) {
          var n = t.currentTarget;
          if (!_instanceof(n, HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/pjax.js:82");
          var o = {
            type: (n.method || "GET").toUpperCase(),
            url: n.action,
            container: null,
            target: n
          };

          if (Object.assign(o, e), "GET" === o.type) {
            if (n.querySelector("input[type=file]")) return;
            if ("string" != typeof o.url) throw new Error("invariant: app/assets/modules/github/pjax.js:97");

            var _t2 = bi(o.url);

            _t2.search += (_t2.search ? "&" : "") + De(n), o.url = _t2.toString();
          } else o.data = new FormData(n);

          fi(o), t.preventDefault();
        },
        A: ge,
        B: J,
        C: z,
        D: function D(t, e) {
          0 === Object.keys(wo.children).length && document.addEventListener("keydown", xo);

          var n = function (t) {
            return t.split(",").map(function (t) {
              return t.split(" ");
            });
          }(e || t.getAttribute("data-hotkey") || "").map(function (e) {
            return wo.insert(e).add(t);
          });

          bo.set(t, n);
        },
        E: function E(t) {
          var e = bo.get(t);

          if (e && e.length) {
            var n = !0,
                o = !1,
                i = void 0;

            try {
              for (var r, s = e[Symbol.iterator](); !(n = (r = s.next()).done); n = !0) {
                var a = r.value;
                a && a["delete"](t);
              }
            } catch (c) {
              o = !0, i = c;
            } finally {
              try {
                n || null == s["return"] || s["return"]();
              } finally {
                if (o) throw i;
              }
            }
          }

          0 === Object.keys(wo.children).length && document.removeEventListener("keydown", xo);
        },
        F: function F(t, e, n) {
          function o(e) {
            var i = e.currentTarget;
            i && (i.removeEventListener(t, n), i.removeEventListener("blur", o));
          }

          Ne(e, function (e) {
            e.addEventListener(t, n), e.addEventListener("blur", o);
          });
        },
        G: function G() {
          return Promise.resolve();
        },
        H: u,
        J: function J(t, e) {
          return 1 === t ? e : e.endsWith("y") ? "".concat(e.substring(0, e.length - 1), "ies") : "".concat(e, "s");
        },
        K: function K(t, e, n) {
          var o = n || HTMLInputElement,
              i = t.elements.namedItem(e);
          if (_instanceof(i, o)) return i;
          throw new a("Element not found by name: <".concat(o.name, "> ").concat(e));
        },
        M: De,
        N: Co,
        O: function O(t, e) {
          if ("boolean" == typeof e) {
            if (!_instanceof(t, HTMLInputElement)) throw new TypeError("only checkboxes can be set to boolean value");
            t.checked = e;
          } else {
            if ("checkbox" === t.type) throw new TypeError("checkbox can't be set to string value");
            t.value = e;
          }

          Se(t, "change", !1);
        },
        P: function () {
          var _P = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(t, e) {
            var n,
                o,
                _o2,
                _args = arguments;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    n = _args.length > 2 && _args[2] !== undefined ? _args[2] : !1;
                    o = Fo.get(t);
                    o && o.abort();

                    if (qo("PAGE_STALE_CHECK")) {
                      _o2 = t.closest(".js-updatable-content[data-url], .js-updatable-content [data-url]");
                      !n && _o2 && _o2 === t && (Bo[d(_o2, "data-url")] = e);
                    }

                    return _context.abrupt("return", $o(t, e));

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function P(_x, _x2) {
            return _P.apply(this, arguments);
          }

          return P;
        }(),
        Q: Mo,
        R: Wo,
        U: function U(t) {
          ze.push(t);
        },
        V: function () {
          var _V = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee2() {
                      var t, e, n, o;
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              t = document.querySelector("link[rel=sso-session]"), e = document.querySelector("meta[name=sso-expires-around]");

                              if (_instanceof(t, HTMLLinkElement)) {
                                _context2.next = 3;
                                break;
                              }

                              return _context2.abrupt("return", !0);

                            case 3:
                              if (function (t) {
                                if (!_instanceof(t, HTMLMetaElement)) return !0;
                                var e = parseInt(t.content);
                                return new Date().getTime() / 1e3 > e;
                              }(e)) {
                                _context2.next = 5;
                                break;
                              }

                              return _context2.abrupt("return", !0);

                            case 5:
                              n = t.href;
                              _context2.next = 8;
                              return at(n, {
                                headers: {
                                  Accept: "application/json"
                                }
                              });

                            case 8:
                              o = _context2.sent;
                              _context2.next = 11;
                              return o.json();

                            case 11:
                              return _context2.abrupt("return", _context2.sent);

                            case 12:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }))();

                  case 2:
                    _context4.t0 = _context4.sent;

                    if (_context4.t0) {
                      _context4.next = 7;
                      break;
                    }

                    Zo || (Zo = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee3() {
                      var t, e, n, o;
                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              t = l(document, "link[rel=sso-modal]", HTMLLinkElement);
                              _context3.next = 3;
                              return Wo({
                                content: lt(document, t.href),
                                dialogClass: "sso-modal"
                              });

                            case 3:
                              e = _context3.sent;
                              n = null;
                              o = window.external;

                              o.ssoComplete = function (t) {
                                t.error ? (n = !1, Jo(n)) : (n = !0, Jo(n), function (t) {
                                  var e = document.querySelector("meta[name=sso-expires-around]");
                                  e && e.setAttribute("content", t);
                                }(t.expiresAround), window.focus()), o.ssoComplete = null;
                              };

                              _context3.next = 9;
                              return function (t) {
                                return new Promise(function (e) {
                                  t.addEventListener("dialog:remove", e, {
                                    once: !0
                                  });
                                });
                              }(e);

                            case 9:
                              if (n) {
                                _context3.next = 11;
                                break;
                              }

                              throw new Error("sso prompt canceled");

                            case 11:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }))().then(Qo)["catch"](Qo));
                    _context4.next = 7;
                    return Zo;

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          function V() {
            return _V.apply(this, arguments);
          }

          return V;
        }(),
        W: function W(t, e) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
            wait: null
          };
          Xo.set(t, {
            keypressed: !1,
            inputed: !1,
            timer: void 0,
            listener: e,
            wait: null != n.wait ? n.wait : 100
          }), t.addEventListener("keydown", Go), t.addEventListener("keyup", Yo), t.addEventListener("input", zo);
        },
        X: function X(t, e) {
          t.removeEventListener("keydown", Go), t.removeEventListener("keyup", Yo), t.removeEventListener("input", zo);
          var n = Xo.get(t);
          n && (null != n.timer && n.listener === e && clearTimeout(n.timer), Xo["delete"](t));
        },
        Z: jo,
        _: function _(t, e) {
          var n = t.currentTarget;
          if (!_instanceof(n, HTMLAnchorElement)) throw new Error("invariant: app/assets/modules/github/pjax.js:39");
          if (0 !== t.button || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;
          if (location.protocol !== n.protocol || location.hostname !== n.hostname) return;
          if (n.href.indexOf("#") > -1 && yi(n) === yi(location)) return;
          if (t.defaultPrevented) return;
          var o = {
            url: n.href,
            container: null,
            target: n
          };
          Object.assign(o, e), ui(n, "pjax:click", {
            options: o,
            relatedEvent: t
          }) && (fi(o), t.preventDefault(), ui(n, "pjax:clicked", {
            options: o
          }));
        },
        a$: function a$(t, e, n) {
          var o = t.value.substring(0, t.selectionEnd || 0),
              i = t.value.substring(t.selectionEnd || 0);
          o = o.replace(e, n), i = i.replace(e, n), t.value = o + i, t.selectionStart = o.length, t.selectionEnd = o.length, t.dispatchEvent(new CustomEvent("change", {
            bubbles: !0,
            cancelable: !1
          }));
        },
        a0: di,
        a2: vo,
        a3: ni,
        a4: ei,
        a5: Ci,
        a6: function a6() {
          return ci;
        },
        a7: ko,
        a8: function a8(t, e) {
          return new Promise(function (n, o) {
            !function i(r) {
              at(t, e).then(function (t) {
                switch (t.status) {
                  case 200:
                    n(t);
                    break;

                  case 202:
                    setTimeout(function () {
                      return i(1.5 * r);
                    }, r);
                    break;

                  default:
                    o(new nt(t));
                }
              }, o);
            }(1e3);
          });
        },
        a9: function a9(t) {
          var e = t.split("鈥�");
          var n = 0;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _o3 = _step.value;
              var _t3 = Array.from(_o3.split(/[\ufe00-\ufe0f]/).join("")).length;
              n += _t3;
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

          return n / e.length;
        },
        aA: qo,
        aB: pr,
        aC: fr,
        aD: je,
        aF: Do,
        aG: Ro,
        aH: function aH(t, e) {
          mr(t), pr(t, e);
        },
        aI: function aI(t) {
          var e = t.getAttribute("data-hydro-click-payload") || "",
              n = t.getAttribute("data-hydro-click-hmac") || "",
              o = t.getAttribute("data-hydro-client-context") || "";
          Ee({
            hydroEventPayload: e,
            hydroEventHmac: n,
            hydroClientContext: o
          }, !0);
        },
        aJ: function () {
          var _aJ = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7(t) {
            var e, n;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    e = (n = t, "low" === n || "medium" === n || "high" === n || "two_factor" === n ? n : null);

                    if (e) {
                      _context7.next = 3;
                      break;
                    }

                    throw new Error("invariant violation: level");

                  case 3:
                    _context7.next = 5;
                    return ct("/sessions/in_sudo?requested_access_level=".concat(e), {
                      headers: {
                        accept: "application/json"
                      }
                    });

                  case 5:
                    _context7.t1 = _context7.sent;
                    _context7.t0 = "true" === _context7.t1;

                    if (_context7.t0) {
                      _context7.next = 9;
                      break;
                    }

                    _context7.t0 = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee6() {
                      var t, e;
                      return regeneratorRuntime.wrap(function _callee6$(_context6) {
                        while (1) {
                          switch (_context6.prev = _context6.next) {
                            case 0:
                              if (!Kr) {
                                _context6.next = 2;
                                break;
                              }

                              return _context6.abrupt("return", !1);

                            case 2:
                              Kr = !0, Gr = !1;
                              _context6.next = 5;
                              return _asyncToGenerator(
                              /*#__PURE__*/
                              regeneratorRuntime.mark(function _callee5() {
                                var t, e, n, _n2;

                                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                  while (1) {
                                    switch (_context5.prev = _context5.next) {
                                      case 0:
                                        t = document.body;

                                        if (t) {
                                          _context5.next = 3;
                                          break;
                                        }

                                        throw new Error("invariant violation: body");

                                      case 3:
                                        e = l(document, "link[rel=sudo-modal]", HTMLLinkElement), n = document.querySelector(".js-sudo-prompt");

                                        if (!_instanceof(n, HTMLTemplateElement)) {
                                          _context5.next = 6;
                                          break;
                                        }

                                        return _context5.abrupt("return", n);

                                      case 6:
                                        if (!e) {
                                          _context5.next = 11;
                                          break;
                                        }

                                        _context5.next = 9;
                                        return lt(document, function (t) {
                                          var e = new URL(t, window.location.origin),
                                              n = new URLSearchParams(e.search.slice(1));
                                          return n.set("webauthn-support", Xr()), e.search = n.toString(), e.toString();
                                        }(e.href));

                                      case 9:
                                        _n2 = _context5.sent;
                                        return _context5.abrupt("return", (t.appendChild(_n2), l(document, ".js-sudo-prompt", HTMLTemplateElement)));

                                      case 11:
                                        throw new Error("couldn't load sudo prompt");

                                      case 12:
                                      case "end":
                                        return _context5.stop();
                                    }
                                  }
                                }, _callee5);
                              }))();

                            case 5:
                              _context6.t0 = !0;
                              t = _context6.sent.content.cloneNode(_context6.t0);

                              if (_instanceof(t, DocumentFragment)) {
                                _context6.next = 9;
                                break;
                              }

                              throw new Error("invariant violation: content instanceof DocumentFragment");

                            case 9:
                              _context6.next = 11;
                              return Wo({
                                content: t
                              });

                            case 11:
                              e = _context6.sent;
                              _context6.next = 14;
                              return new Promise(function (t) {
                                e.addEventListener("dialog:remove", function () {
                                  Kr = !1, t();
                                }, {
                                  once: !0
                                });
                              });

                            case 14:
                              return _context6.abrupt("return", Gr);

                            case 15:
                            case "end":
                              return _context6.stop();
                          }
                        }
                      }, _callee6);
                    }))();

                  case 9:
                    return _context7.abrupt("return", _context7.t0);

                  case 10:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));

          function aJ(_x3) {
            return _aJ.apply(this, arguments);
          }

          return aJ;
        }(),
        aK: function () {
          var _aK = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8(t, e) {
            var n, o, i, _e2;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (!Fo.get(t)) {
                      _context8.next = 2;
                      break;
                    }

                    return _context8.abrupt("return");

                  case 2:
                    n = new XMLHttpRequest(), o = d(t, "data-url"), i = t.hasAttribute("data-retain-focus");
                    n.open("GET", o), n.setRequestHeader("Accept", "text/html"), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), null != e && n.setRequestHeader("X-Request-Purpose", e);
                    Fo.set(t, n);
                    _context8.prev = 5;
                    _context8.next = 8;
                    return function (t, e) {
                      return new Promise(function (n, o) {
                        t.onload = function () {
                          200 === t.status ? n(t.responseText) : o(new Error("XMLHttpRequest ".concat(t.statusText)));
                        }, t.onerror = o, t.send(e || null);
                      });
                    }(n);

                  case 8:
                    _e2 = _context8.sent;

                    if (!Do(t, i)) {
                      _context8.next = 11;
                      break;
                    }

                    throw new Error("element had interactions");

                  case 11:
                    return _context8.abrupt("return", (qo("PAGE_STALE_CHECK") && (Bo[o] = _e2), $o(t, _e2, i)));

                  case 14:
                    _context8.prev = 14;
                    _context8.t0 = _context8["catch"](5);
                    "XMLHttpRequest abort" !== _context8.t0.message && console.warn("Failed to update content", t, _context8.t0);

                  case 17:
                    _context8.prev = 17;
                    Fo["delete"](t);
                    return _context8.finish(17);

                  case 20:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, null, [[5, 14, 17, 20]]);
          }));

          function aK(_x4, _x5) {
            return _aK.apply(this, arguments);
          }

          return aK;
        }(),
        aL: Ji,
        aM: function aM() {
          var t = Ie[Be() - 1];
          if (t) return t.url;
        },
        aN: function aN() {
          var t = Ie[Be() + 1];
          if (t) return t.url;
        },
        aO: function aO(t, e) {
          var n = t.closest("[data-pjax-container]");
          if (!n) throw new Error("no pjax container for ".concat(function (t) {
            var e = [];
            var n = t;

            for (; n && (e.push(oi(n)), !_instanceof(n, window.Window)) && 9 !== n.nodeType && !n.id;) {
              if (_instanceof(n.parentNode, Document)) {
                e.push("#document");
                break;
              }

              if (!_instanceof(n.parentNode, HTMLElement)) break;
              n = n.parentNode;
            }

            return e.reverse().join(" > ");
          }(t)));
          var o = Ei(n),
              i = bi(t.href);
          return i.search += "".concat(i.search ? "&" : "", "_pjax=").concat(encodeURIComponent(o)), at(i.href, {
            headers: Object.assign({
              Accept: "text/html",
              "X-PJAX": "true",
              "X-PJAX-Container": o
            }, e && e.headers)
          });
        },
        aP: function aP(t, e) {
          ii.set(t, e), n = e, n["catch"](function () {});
          var n;
        },
        aQ: We,
        aR: function aR(t) {
          return Yr.get(t);
        },
        aS: function aS(t, e) {
          var n = c(t, "[data-notification-id]");
          e.hasAttribute("data-status") && function (t, e) {
            t.classList.toggle("notification-archived", "archived" === e), t.classList.toggle("notification-unread", "unread" === e), t.classList.toggle("notification-read", "read" === e);
          }(n, d(e, "data-status"));
          e.hasAttribute("data-subscription-status") && function (t, e) {
            t.classList.toggle("notification-unsubscribed", "unsubscribed" === e);
          }(n, d(e, "data-subscription-status"));
          e.hasAttribute("data-starred-status") && function (t, e) {
            t.classList.toggle("notification-starred", "starred" === e);
          }(n, d(e, "data-starred-status"));
        },
        aT: ti,
        aU: function aU(t) {
          var e = t.getAttribute("data-details-container") || ".js-details-container",
              n = c(t, e).classList;
          return n.contains("Details--on") || n.contains("open");
        },
        aV: Xr,
        aW: function () {
          var _aW = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.t0 = window.PublicKeyCredential && window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable;

                    if (!_context9.t0) {
                      _context9.next = 5;
                      break;
                    }

                    _context9.next = 4;
                    return window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();

                  case 4:
                    _context9.t0 = _context9.sent;

                  case 5:
                    if (!_context9.t0) {
                      _context9.next = 9;
                      break;
                    }

                    _context9.t1 = "supported";
                    _context9.next = 10;
                    break;

                  case 9:
                    _context9.t1 = "unsupported";

                  case 10:
                    return _context9.abrupt("return", _context9.t1);

                  case 11:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }));

          function aW() {
            return _aW.apply(this, arguments);
          }

          return aW;
        }(),
        aX: Wr,
        aY: function () {
          var _aY = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10(t) {
            var e, n;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    e = Pr(Hr, $r, t);
                    _context10.next = 3;
                    return navigator.credentials.get(e);

                  case 3:
                    n = _context10.sent;
                    return _context10.abrupt("return", Pr(Or, Ur, n));

                  case 5:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10);
          }));

          function aY(_x6) {
            return _aY.apply(this, arguments);
          }

          return aY;
        }(),
        aa: Vo,
        ab: Q,
        ac: function ac(t) {
          return at(t.action, {
            method: t.method,
            body: new FormData(t)
          });
        },
        ad: function ad(t, e) {
          for (var n in e) {
            var _o4 = e[n],
                _i2 = t.elements.namedItem(n);

            _instanceof(_i2, HTMLInputElement) ? _i2.value = _o4 : _instanceof(_i2, HTMLTextAreaElement) && (_i2.value = _o4);
          }
        },
        ae: Mi,
        af: Wi,
        ag: Ve,
        ah: Xi,
        ai: function ai(t) {
          var e = ti(t);
          e && Wi(e);
        },
        aj: function aj(t, e) {
          window.ga("provide", t, e);
        },
        ak: function ak(t) {
          window.ga("set", {
            location: t
          });
        },
        al: function al(t) {
          window.ga("set", {
            title: t
          });
        },
        am: function am(t, e) {
          window.ga("set", t, e);
        },
        an: function an(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            page: ""
          };
          e.page = t || "", window.ga("send", "pageview", e);
        },
        ao: function ao(t, e) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          window.ga("create", t, e, n), window.ga("set", "transport", "sendBeacon" in window.navigator ? "beacon" : "xhr");
        },
        ap: function ap(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          window.ga(function () {
            window.ga("require", t, e);
          });
        },
        aq: function aq(t) {
          void 0 === t.interactive && (t.interactive = !0);
          window.ga("send", "event", t.category, t.action, t.label, t.value, {
            nonInteraction: !t.interactive
          });
        },
        as: zi,
        at: function at(t) {
          var e = t;
          "string" == typeof e && (e = e.replace(/,/g, ""));
          return parseFloat(e);
        },
        au: function au(t) {
          return "".concat(t).replace(/(^|[^\w.])(\d{4,})/g, function (t, e, n) {
            return e + n.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,");
          });
        },
        av: function av(t, e) {
          var n = 1 === t ? "data-singular-string" : "data-plural-string",
              o = e.getAttribute(n);
          if (null == o) return;
          e.textContent = o;
        },
        aw: function aw(t, e) {
          var n = t.selectionEnd || 0,
              o = t.value.substring(0, n),
              i = t.value.substring(n),
              r = "" === t.value || o.match(/\n$/) ? "" : "\n";
          t.value = o + r + e + i, t.selectionStart = n + e.length, t.selectionEnd = n + e.length, t.dispatchEvent(new CustomEvent("change", {
            bubbles: !0,
            cancelable: !1
          })), t.focus();
        },
        ax: function ax(t, e) {
          var n = new URL(t, window.location.origin),
              o = e ? Object.assign({}, e) : {},
              i = n.hash.match(/^#csrf-token=([A-Za-z0-9+/=]+)$/);
          if (!i) throw new TypeError("Expected csrfRequest(url) to have an associated #csrf-token");
          n.hash = "";
          var r = n.toString();
          o.mode = "same-origin";
          var s = new Request(r, o);
          return s.headers.append("Scoped-CSRF-Token", i[1]), s;
        },
        az: et,
        b: function () {
          var _b = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11(t, e) {
            var n, o, i;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    n = rt(t, e);
                    n.headers.set("Accept", "application/json");
                    _context11.next = 4;
                    return self.fetch(n);

                  case 4:
                    o = _context11.sent;
                    i = new nt(o);
                    return _context11.abrupt("return", (it(o, i), o.json()));

                  case 7:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11);
          }));

          function b(_x7, _x8) {
            return _b.apply(this, arguments);
          }

          return b;
        }(),
        b0: hr,
        b1: Ae,
        b2: _e,
        b3: function b3(t) {
          Je.push(t);
        },
        b4: function b4() {
          throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs");
        },
        b5: function b5(t) {
          var e = Xo.get(t);
          e && e.listener.call(null, t);
        },
        b6: function b6(t) {
          return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t["default"] : t;
        },
        b7: function () {
          var _b2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12(t) {
            var e, n;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.t0 = Yr.get(t);

                    if (_context12.t0) {
                      _context12.next = 7;
                      break;
                    }

                    _context12.t1 = zr;
                    _context12.next = 5;
                    return e = t, n = "codeEditor:ready", new Promise(function (t) {
                      e.addEventListener(n, t, {
                        once: !0
                      });
                    });

                  case 5:
                    _context12.t2 = _context12.sent;
                    _context12.t0 = (0, _context12.t1)(_context12.t2);

                  case 7:
                    return _context12.abrupt("return", _context12.t0);

                  case 8:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          }));

          function b7(_x9) {
            return _b2.apply(this, arguments);
          }

          return b7;
        }(),
        b8: function b8(t) {
          return t && t["default"] || t;
        },
        b9: function b9(t) {
          var e = t.getBoundingClientRect();
          return {
            top: e.top + window.pageYOffset,
            left: e.left + window.pageXOffset
          };
        },
        ba: function ba() {
          return new Promise(window.requestAnimationFrame);
        },
        bc: Jr,
        bd: Lo,
        be: function () {
          var _be = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var t,
                e,
                n,
                _args13 = arguments;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    t = _args13.length > 0 && _args13[0] !== undefined ? _args13[0] : Sr();
                    e = jr(document);

                    if (Cr(t)) {
                      _context13.next = 4;
                      break;
                    }

                    return _context13.abrupt("return");

                  case 4:
                    _context13.next = 6;
                    return new Promise(function (t) {
                      return setTimeout(t, Ar);
                    });

                  case 6:
                    if (Cr(t)) {
                      _context13.next = 8;
                      break;
                    }

                    return _context13.abrupt("return");

                  case 8:
                    _context13.prev = 8;

                    if (Dr(e)) {
                      _context13.next = 11;
                      break;
                    }

                    return _context13.abrupt("return");

                  case 11:
                    _context13.next = 13;
                    return lt(document, e);

                  case 13:
                    n = _context13.sent;
                    _context13.next = 19;
                    break;

                  case 16:
                    _context13.prev = 16;
                    _context13.t0 = _context13["catch"](8);
                    return _context13.abrupt("return");

                  case 19:
                    if (Cr(t)) {
                      _context13.next = 21;
                      break;
                    }

                    return _context13.abrupt("return");

                  case 21:
                    !function (t) {
                      if (!Dr(jr(t))) return;
                      Mr(".js-notification-inboxes", t), Mr(".js-notification-sidebar-filters", t), Mr(".js-notification-sidebar-repositories", t), Mr(".js-notifications-list-paginator", t), Mr(".js-notifications-list", t), Mr(".js-notifications-mark-selected-actions", t), Mr(".js-notifications-mark-all-actions", t);
                    }(n);

                  case 22:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, null, [[8, 16]]);
          }));

          function be() {
            return _be.apply(this, arguments);
          }

          return be;
        }(),
        bf: function bf() {
          Sr();
        },
        bg: Sr,
        bh: function () {
          var _bh = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14(t) {
            var e, n;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    e = Pr(Hr, Fr, t);
                    _context14.next = 3;
                    return navigator.credentials.create(e);

                  case 3:
                    n = _context14.sent;
                    return _context14.abrupt("return", Pr(Or, Br, n));

                  case 5:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14);
          }));

          function bh(_x10) {
            return _bh.apply(this, arguments);
          }

          return bh;
        }(),
        c: me,
        d: function d(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          var _ref5 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
              _ref5$start = _ref5.start,
              n = _ref5$start === void 0 ? !1 : _ref5$start,
              _ref5$middle = _ref5.middle,
              o = _ref5$middle === void 0 ? !1 : _ref5$middle,
              _ref5$once = _ref5.once,
              i = _ref5$once === void 0 ? !1 : _ref5$once;

          return Q(t, e, {
            start: n,
            middle: o,
            once: i
          });
        },
        e: c,
        f: Ot,
        g: d,
        i: function i(t, e) {
          t.addEventListener("compositionstart", Z), t.addEventListener("compositionend", Z), t.addEventListener("keydown", G), e.addEventListener("click", Y);
        },
        j: at,
        k: Ce,
        m: lt,
        n: Ne,
        o: Ht,
        p: function p(t, e) {
          function n(t) {
            var o = t.currentTarget;
            o && (o.removeEventListener("input", e), o.removeEventListener("blur", n));
          }

          Ne(t, function (t) {
            t.addEventListener("input", e), t.addEventListener("blur", n);
          });
        },
        q: l,
        s: Ee,
        t: function t(_t4) {
          var e = _t4.getAttribute("data-hydro-view") || "",
              n = _t4.getAttribute("data-hydro-view-hmac") || "",
              o = _t4.getAttribute("data-hydro-client-context") || "";
          Ee({
            hydroEventPayload: e,
            hydroEventHmac: n,
            hydroClientContext: o
          }, !0);
        },
        u: function u(t, e) {
          t.removeAttribute("aria-activedescendant"), t.removeEventListener("compositionstart", Z), t.removeEventListener("compositionend", Z), t.removeEventListener("keydown", G), e.removeEventListener("click", Y);
        },
        v: Xe,
        w: Ze,
        x: ct,
        y: tn,
        z: ve
      });

      var a = function (t) {
        function e(t) {
          var o;
          return function (t, e) {
            if (!_instanceof(t, e)) throw new TypeError("Cannot call a class as a function");
          }(this, e), (o = n(this, s(e).call(this, t))).name = "QueryError", o.framesToPop = 1, o;
        }

        return function (t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && r(t, e);
        }(e, t), e;
      }(o(Error));

      function c(t, e, n) {
        var o = n || HTMLElement,
            i = t.closest(e);
        if (_instanceof(i, o)) return i;
        throw new a("Element not found: <".concat(o.name, "> ").concat(e));
      }

      function l(t, e, n) {
        var o = n || HTMLElement,
            i = t.querySelector(e);
        if (_instanceof(i, o)) return i;
        throw new a("Element not found: <".concat(o.name, "> ").concat(e));
      }

      function u(t, e, n) {
        var o = n || HTMLElement,
            i = [],
            r = !0,
            s = !1,
            a = void 0;

        try {
          for (var c, l = t.querySelectorAll(e)[Symbol.iterator](); !(r = (c = l.next()).done); r = !0) {
            var u = c.value;
            _instanceof(u, o) && i.push(u);
          }
        } catch (d) {
          s = !0, a = d;
        } finally {
          try {
            r || null == l["return"] || l["return"]();
          } finally {
            if (s) throw a;
          }
        }

        return i;
      }

      function d(t, e) {
        var n = t.getAttribute(e);
        if (null != n) return n;
        throw new a("Attribute not found on element: ".concat(e));
      }
      /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */


      var f = new WeakMap(),
          h = function h(t) {
        return "function" == typeof t && f.has(t);
      },
          p = void 0 !== window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
          m = function m(t, e) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        for (; e !== n;) {
          var _n3 = e.nextSibling;
          t.removeChild(e), e = _n3;
        }
      },
          g = {},
          v = {},
          w = "{{lit-".concat(String(Math.random()).slice(2), "}}"),
          b = "<!--".concat(w, "-->"),
          y = new RegExp("".concat(w, "|").concat(b)),
          E = "$lit$";

      var T = function T(t, e) {
        _classCallCheck(this, T);

        this.parts = [], this.element = e;
        var n = [],
            o = [],
            i = document.createTreeWalker(e.content, 133, null, !1);
        var r = 0,
            s = -1,
            a = 0;
        var c = t.strings,
            l = t.values.length;

        for (; a < l;) {
          var _t5 = i.nextNode();

          if (null !== _t5) {
            if (s++, 1 === _t5.nodeType) {
              if (_t5.hasAttributes()) {
                var _e3 = _t5.attributes,
                    _n4 = _e3.length;
                var _o5 = 0;

                for (var _t6 = 0; _t6 < _n4; _t6++) {
                  x(_e3[_t6].name, E) && _o5++;
                }

                for (; _o5-- > 0;) {
                  var _e4 = c[a],
                      _n5 = A.exec(_e4)[2],
                      _o6 = _n5.toLowerCase() + E,
                      _i3 = _t5.getAttribute(_o6);

                  _t5.removeAttribute(_o6);

                  var _r2 = _i3.split(y);

                  this.parts.push({
                    type: "attribute",
                    index: s,
                    name: _n5,
                    strings: _r2
                  }), a += _r2.length - 1;
                }
              }

              "TEMPLATE" === _t5.tagName && (o.push(_t5), i.currentNode = _t5.content);
            } else if (3 === _t5.nodeType) {
              var _e5 = _t5.data;

              if (_e5.indexOf(w) >= 0) {
                var _o7 = _t5.parentNode,
                    _i4 = _e5.split(y),
                    _r3 = _i4.length - 1;

                for (var _e6 = 0; _e6 < _r3; _e6++) {
                  var _n6 = void 0,
                      _r4 = _i4[_e6];

                  if ("" === _r4) _n6 = L();else {
                    var _t7 = A.exec(_r4);

                    null !== _t7 && x(_t7[2], E) && (_r4 = _r4.slice(0, _t7.index) + _t7[1] + _t7[2].slice(0, -E.length) + _t7[3]), _n6 = document.createTextNode(_r4);
                  }
                  _o7.insertBefore(_n6, _t5), this.parts.push({
                    type: "node",
                    index: ++s
                  });
                }

                "" === _i4[_r3] ? (_o7.insertBefore(L(), _t5), n.push(_t5)) : _t5.data = _i4[_r3], a += _r3;
              }
            } else if (8 === _t5.nodeType) if (_t5.data === w) {
              var _e7 = _t5.parentNode;
              null !== _t5.previousSibling && s !== r || (s++, _e7.insertBefore(L(), _t5)), r = s, this.parts.push({
                type: "node",
                index: s
              }), null === _t5.nextSibling ? _t5.data = "" : (n.push(_t5), s--), a++;
            } else {
              var _e8 = -1;

              for (; -1 !== (_e8 = _t5.data.indexOf(w, _e8 + 1));) {
                this.parts.push({
                  type: "node",
                  index: -1
                }), a++;
              }
            }
          } else i.currentNode = o.pop();
        }

        for (var _i5 = 0, _n7 = n; _i5 < _n7.length; _i5++) {
          var _u = _n7[_i5];

          _u.parentNode.removeChild(_u);
        }
      };

      var x = function x(t, e) {
        var n = t.length - e.length;
        return n >= 0 && t.slice(n) === e;
      },
          k = function k(t) {
        return -1 !== t.index;
      },
          L = function L() {
        return document.createComment("");
      },
          A = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
      /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */


      var _ =
      /*#__PURE__*/
      function () {
        function _(t, e, n) {
          _classCallCheck(this, _);

          this.__parts = [], this.template = t, this.processor = e, this.options = n;
        }

        _createClass(_, [{
          key: "update",
          value: function update(t) {
            var e = 0;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = this.__parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _n8 = _step2.value;
                void 0 !== _n8 && _n8.setValue(t[e]), e++;
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

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = this.__parts[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _n9 = _step3.value;
                void 0 !== _n9 && _n9.commit();
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                  _iterator3["return"]();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          }
        }, {
          key: "_clone",
          value: function _clone() {
            var t = p ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
                e = [],
                n = this.template.parts,
                o = document.createTreeWalker(t, 133, null, !1);
            var i,
                r = 0,
                s = 0,
                a = o.nextNode();

            for (; r < n.length;) {
              if (i = n[r], k(i)) {
                var _this$__parts;

                for (; s < i.index;) {
                  s++, "TEMPLATE" === a.nodeName && (e.push(a), o.currentNode = a.content), null === (a = o.nextNode()) && (o.currentNode = e.pop(), a = o.nextNode());
                }

                if ("node" === i.type) {
                  var _t8 = this.processor.handleTextExpression(this.options);

                  _t8.insertAfterNode(a.previousSibling), this.__parts.push(_t8);
                } else (_this$__parts = this.__parts).push.apply(_this$__parts, _toConsumableArray(this.processor.handleAttributeExpressions(a, i.name, i.strings, this.options)));

                r++;
              } else this.__parts.push(void 0), r++;
            }

            return p && (document.adoptNode(t), customElements.upgrade(t)), t;
          }
        }]);

        return _;
      }();
      /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */


      var S = " ".concat(w, " ");

      var C =
      /*#__PURE__*/
      function () {
        function C(t, e, n, o) {
          _classCallCheck(this, C);

          this.strings = t, this.values = e, this.type = n, this.processor = o;
        }

        _createClass(C, [{
          key: "getHTML",
          value: function getHTML() {
            var t = this.strings.length - 1;
            var e = "",
                n = !1;

            for (var _o8 = 0; _o8 < t; _o8++) {
              var _t9 = this.strings[_o8],
                  _i6 = _t9.lastIndexOf("\x3c!--");

              n = (_i6 > -1 || n) && -1 === _t9.indexOf("--\x3e", _i6 + 1);

              var _r5 = A.exec(_t9);

              e += null === _r5 ? _t9 + (n ? S : b) : _t9.substr(0, _r5.index) + _r5[1] + _r5[2] + E + _r5[3] + w;
            }

            return e += this.strings[t], e;
          }
        }, {
          key: "getTemplateElement",
          value: function getTemplateElement() {
            var t = document.createElement("template");
            return t.innerHTML = this.getHTML(), t;
          }
        }]);

        return C;
      }();
      /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */


      var j = function j(t) {
        return null === t || !("object" == _typeof(t) || "function" == typeof t);
      },
          D = function D(t) {
        return Array.isArray(t) || !(!t || !t[Symbol.iterator]);
      };

      var M =
      /*#__PURE__*/
      function () {
        function M(t, e, n) {
          _classCallCheck(this, M);

          this.dirty = !0, this.element = t, this.name = e, this.strings = n, this.parts = [];

          for (var _o9 = 0; _o9 < n.length - 1; _o9++) {
            this.parts[_o9] = this._createPart();
          }
        }

        _createClass(M, [{
          key: "_createPart",
          value: function _createPart() {
            return new H(this);
          }
        }, {
          key: "_getValue",
          value: function _getValue() {
            var t = this.strings,
                e = t.length - 1;
            var n = "";

            for (var _o10 = 0; _o10 < e; _o10++) {
              n += t[_o10];
              var _e9 = this.parts[_o10];

              if (void 0 !== _e9) {
                var _t10 = _e9.value;
                if (j(_t10) || !D(_t10)) n += "string" == typeof _t10 ? _t10 : String(_t10);else {
                  var _iteratorNormalCompletion4 = true;
                  var _didIteratorError4 = false;
                  var _iteratorError4 = undefined;

                  try {
                    for (var _iterator4 = _t10[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                      var _e10 = _step4.value;
                      n += "string" == typeof _e10 ? _e10 : String(_e10);
                    }
                  } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                        _iterator4["return"]();
                      }
                    } finally {
                      if (_didIteratorError4) {
                        throw _iteratorError4;
                      }
                    }
                  }
                }
              }
            }

            return n += t[e], n;
          }
        }, {
          key: "commit",
          value: function commit() {
            this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
          }
        }]);

        return M;
      }();

      var H =
      /*#__PURE__*/
      function () {
        function H(t) {
          _classCallCheck(this, H);

          this.value = void 0, this.committer = t;
        }

        _createClass(H, [{
          key: "setValue",
          value: function setValue(t) {
            t === g || j(t) && t === this.value || (this.value = t, h(t) || (this.committer.dirty = !0));
          }
        }, {
          key: "commit",
          value: function commit() {
            for (; h(this.value);) {
              var _t11 = this.value;
              this.value = g, _t11(this);
            }

            this.value !== g && this.committer.commit();
          }
        }]);

        return H;
      }();

      var O =
      /*#__PURE__*/
      function () {
        function O(t) {
          _classCallCheck(this, O);

          this.value = void 0, this.__pendingValue = void 0, this.options = t;
        }

        _createClass(O, [{
          key: "appendInto",
          value: function appendInto(t) {
            this.startNode = t.appendChild(L()), this.endNode = t.appendChild(L());
          }
        }, {
          key: "insertAfterNode",
          value: function insertAfterNode(t) {
            this.startNode = t, this.endNode = t.nextSibling;
          }
        }, {
          key: "appendIntoPart",
          value: function appendIntoPart(t) {
            t.__insert(this.startNode = L()), t.__insert(this.endNode = L());
          }
        }, {
          key: "insertAfterPart",
          value: function insertAfterPart(t) {
            t.__insert(this.startNode = L()), this.endNode = t.endNode, t.endNode = this.startNode;
          }
        }, {
          key: "setValue",
          value: function setValue(t) {
            this.__pendingValue = t;
          }
        }, {
          key: "commit",
          value: function commit() {
            for (; h(this.__pendingValue);) {
              var _t12 = this.__pendingValue;
              this.__pendingValue = g, _t12(this);
            }

            var t = this.__pendingValue;
            t !== g && (j(t) ? t !== this.value && this.__commitText(t) : _instanceof(t, C) ? this.__commitTemplateResult(t) : _instanceof(t, Node) ? this.__commitNode(t) : D(t) ? this.__commitIterable(t) : t === v ? (this.value = v, this.clear()) : this.__commitText(t));
          }
        }, {
          key: "__insert",
          value: function __insert(t) {
            this.endNode.parentNode.insertBefore(t, this.endNode);
          }
        }, {
          key: "__commitNode",
          value: function __commitNode(t) {
            this.value !== t && (this.clear(), this.__insert(t), this.value = t);
          }
        }, {
          key: "__commitText",
          value: function __commitText(t) {
            var e = this.startNode.nextSibling,
                n = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
            e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = n : this.__commitNode(document.createTextNode(n)), this.value = t;
          }
        }, {
          key: "__commitTemplateResult",
          value: function __commitTemplateResult(t) {
            var e = this.options.templateFactory(t);
            if (_instanceof(this.value, _) && this.value.template === e) this.value.update(t.values);else {
              var _n10 = new _(e, t.processor, this.options),
                  _o11 = _n10._clone();

              _n10.update(t.values), this.__commitNode(_o11), this.value = _n10;
            }
          }
        }, {
          key: "__commitIterable",
          value: function __commitIterable(t) {
            Array.isArray(this.value) || (this.value = [], this.clear());
            var e = this.value;
            var n,
                o = 0;
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = t[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var _i7 = _step5.value;
                n = e[o], void 0 === n && (n = new O(this.options), e.push(n), 0 === o ? n.appendIntoPart(this) : n.insertAfterPart(e[o - 1])), n.setValue(_i7), n.commit(), o++;
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                  _iterator5["return"]();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }

            o < e.length && (e.length = o, this.clear(n && n.endNode));
          }
        }, {
          key: "clear",
          value: function clear() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
            m(this.startNode.parentNode, t.nextSibling, this.endNode);
          }
        }]);

        return O;
      }();

      var N =
      /*#__PURE__*/
      function () {
        function N(t, e, n) {
          _classCallCheck(this, N);

          if (this.value = void 0, this.__pendingValue = void 0, 2 !== n.length || "" !== n[0] || "" !== n[1]) throw new Error("Boolean attributes can only contain a single expression");
          this.element = t, this.name = e, this.strings = n;
        }

        _createClass(N, [{
          key: "setValue",
          value: function setValue(t) {
            this.__pendingValue = t;
          }
        }, {
          key: "commit",
          value: function commit() {
            for (; h(this.__pendingValue);) {
              var _t13 = this.__pendingValue;
              this.__pendingValue = g, _t13(this);
            }

            if (this.__pendingValue === g) return;
            var t = !!this.__pendingValue;
            this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = t), this.__pendingValue = g;
          }
        }]);

        return N;
      }();

      var I =
      /*#__PURE__*/
      function (_M) {
        _inherits(I, _M);

        function I(t, e, n) {
          var _this;

          _classCallCheck(this, I);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(I).call(this, t, e, n)), _this.single = 2 === n.length && "" === n[0] && "" === n[1];
          return _this;
        }

        _createClass(I, [{
          key: "_createPart",
          value: function _createPart() {
            return new P(this);
          }
        }, {
          key: "_getValue",
          value: function _getValue() {
            return this.single ? this.parts[0].value : _get(_getPrototypeOf(I.prototype), "_getValue", this).call(this);
          }
        }, {
          key: "commit",
          value: function commit() {
            this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
          }
        }]);

        return I;
      }(M);

      var P =
      /*#__PURE__*/
      function (_H) {
        _inherits(P, _H);

        function P() {
          _classCallCheck(this, P);

          return _possibleConstructorReturn(this, _getPrototypeOf(P).apply(this, arguments));
        }

        return P;
      }(H);

      var q = !1;

      try {
        var _t14 = {
          get capture() {
            return q = !0, !1;
          }

        };
        window.addEventListener("test", _t14, _t14), window.removeEventListener("test", _t14, _t14);
      } catch (Qr) {}

      var R =
      /*#__PURE__*/
      function () {
        function R(t, e, n) {
          var _this2 = this;

          _classCallCheck(this, R);

          this.value = void 0, this.__pendingValue = void 0, this.element = t, this.eventName = e, this.eventContext = n, this.__boundHandleEvent = function (t) {
            return _this2.handleEvent(t);
          };
        }

        _createClass(R, [{
          key: "setValue",
          value: function setValue(t) {
            this.__pendingValue = t;
          }
        }, {
          key: "commit",
          value: function commit() {
            for (; h(this.__pendingValue);) {
              var _t15 = this.__pendingValue;
              this.__pendingValue = g, _t15(this);
            }

            if (this.__pendingValue === g) return;
            var t = this.__pendingValue,
                e = this.value,
                n = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive),
                o = null != t && (null == e || n);
            n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), o && (this.__options = V(t), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = t, this.__pendingValue = g;
          }
        }, {
          key: "handleEvent",
          value: function handleEvent(t) {
            "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t);
          }
        }]);

        return R;
      }();

      var V = function V(t) {
        return t && (q ? {
          capture: t.capture,
          passive: t.passive,
          once: t.once
        } : t.capture);
      };
      /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */


      var F = new (
      /*#__PURE__*/
      function () {
        function _class() {
          _classCallCheck(this, _class);
        }

        _createClass(_class, [{
          key: "handleAttributeExpressions",
          value: function handleAttributeExpressions(t, e, n, o) {
            var i = e[0];

            if ("." === i) {
              return new I(t, e.slice(1), n).parts;
            }

            return "@" === i ? [new R(t, e.slice(1), o.eventContext)] : "?" === i ? [new N(t, e.slice(1), n)] : new M(t, e, n).parts;
          }
        }, {
          key: "handleTextExpression",
          value: function handleTextExpression(t) {
            return new O(t);
          }
        }]);

        return _class;
      }())();
      /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */

      function B(t) {
        var e = $.get(t.type);
        void 0 === e && (e = {
          stringsArray: new WeakMap(),
          keyString: new Map()
        }, $.set(t.type, e));
        var n = e.stringsArray.get(t.strings);
        if (void 0 !== n) return n;
        var o = t.strings.join(w);
        return n = e.keyString.get(o), void 0 === n && (n = new T(t, t.getTemplateElement()), e.keyString.set(o, n)), e.stringsArray.set(t.strings, n), n;
      }

      var $ = new Map(),
          U = new WeakMap();
      /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */

      t("r", function (t, e, n) {
        var o = U.get(e);
        void 0 === o && (m(e, e.firstChild), U.set(e, o = new O(Object.assign({
          templateFactory: B
        }, n))), o.appendInto(e)), o.setValue(t), o.commit();
      });
      /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */

      (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.1.2");
      t("h", function (t) {
        for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          e[_key - 1] = arguments[_key];
        }

        return new C(t, e, "html", F);
      });

      function W(t, e) {
        (function (t, e) {
          var n = t.scrollTop,
              o = n + t.clientHeight,
              i = e.offsetTop,
              r = i + e.clientHeight;
          return i >= n && r <= o;
        })(t, e) || (t.scrollTop = e.offsetTop);
      }

      var X = !1;
      var K = !!navigator.userAgent.match(/Macintosh/);

      function G(t) {
        if (t.shiftKey || t.metaKey || t.altKey) return;
        var e = t.currentTarget;
        if (!(_instanceof(e, HTMLTextAreaElement) || _instanceof(e, HTMLInputElement))) return;
        if (X) return;
        var n = document.getElementById(e.getAttribute("aria-owns") || "");
        if (n) switch (t.key) {
          case "Enter":
          case "Tab":
            (function (t, e) {
              var n = e.querySelector('[aria-selected="true"]');
              return !!n && ("true" === n.getAttribute("aria-disabled") || (n.click(), !0));
            })(0, n) && t.preventDefault();
            break;

          case "Escape":
            J(e, n);
            break;

          case "ArrowDown":
            z(e, n, 1), t.preventDefault();
            break;

          case "ArrowUp":
            z(e, n, -1), t.preventDefault();
            break;

          case "n":
            K && t.ctrlKey && (z(e, n, 1), t.preventDefault());
            break;

          case "p":
            K && t.ctrlKey && (z(e, n, -1), t.preventDefault());
        }
      }

      function Y(t) {
        if (!_instanceof(t.target, Element)) return;
        var e = t.target.closest('[role="option"]');
        e && "true" !== e.getAttribute("aria-disabled") && function (t) {
          t.dispatchEvent(new CustomEvent("combobox-commit", {
            bubbles: !0
          }));
        }(e);
      }

      function z(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        var o = e.querySelector('[aria-selected="true"]'),
            i = Array.from(e.querySelectorAll('[role="option"]')),
            r = i.indexOf(o);
        var s = 1 === n ? 0 : i.length - 1;

        if (o && r >= 0) {
          var _t16 = r + n;

          _t16 >= 0 && _t16 < i.length && (s = _t16);
        }

        var a = i[s];

        if (a) {
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = i[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var _c = _step6.value;
              a === _c ? (t.setAttribute("aria-activedescendant", a.id), a.setAttribute("aria-selected", "true"), W(e, a)) : _c.setAttribute("aria-selected", "false");
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                _iterator6["return"]();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }
        }
      }

      function J(t, e) {
        t.removeAttribute("aria-activedescendant");
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = e.querySelectorAll('[aria-selected="true"]')[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var _n11 = _step7.value;

            _n11.setAttribute("aria-selected", "false");
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
              _iterator7["return"]();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }
      }

      function Z(t) {
        var e = t.currentTarget;
        if (!(_instanceof(e, HTMLTextAreaElement) || _instanceof(e, HTMLInputElement))) return;
        X = "compositionstart" === t.type;
        var n = document.getElementById(e.getAttribute("aria-owns") || "");
        n && J(e, n);
      }

      function Q(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var _ref6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            _ref6$start = _ref6.start,
            n = _ref6$start === void 0 ? !0 : _ref6$start,
            _ref6$middle = _ref6.middle,
            o = _ref6$middle === void 0 ? !0 : _ref6$middle,
            _ref6$once = _ref6.once,
            i = _ref6$once === void 0 ? !1 : _ref6$once;

        var r,
            s = 0,
            a = !1,
            c = function c() {
          for (var _len2 = arguments.length, l = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            l[_key2] = arguments[_key2];
          }

          if (!a) {
            var u = Date.now() - s;
            s = Date.now(), n ? (n = !1, t.apply(void 0, l), i && c.cancel()) : (o && u < e || !o) && (clearTimeout(r), r = setTimeout(function () {
              s = Date.now(), t.apply(void 0, l), i && c.cancel();
            }, o ? e - u : e));
          }
        };

        return c.cancel = function () {
          clearTimeout(r), a = !0;
        }, c;
      }

      var tt =
      /*#__PURE__*/
      function (_Error) {
        _inherits(tt, _Error);

        function tt(t, e) {
          var _this3;

          _classCallCheck(this, tt);

          _this3 = _possibleConstructorReturn(this, _getPrototypeOf(tt).call(this, "".concat(t, " for HTTP ").concat(e.status))), _this3.response = e;
          return _this3;
        }

        return tt;
      }(_wrapNativeSuper(Error));

      function et(t, e) {
        var n = t.createElement("template");
        return n.innerHTML = e, t.importNode(n.content, !0);
      }

      var nt =
      /*#__PURE__*/
      function (_Error2) {
        _inherits(nt, _Error2);

        function nt(t) {
          var _this4;

          _classCallCheck(this, nt);

          _this4 = _possibleConstructorReturn(this, _getPrototypeOf(nt).call(this)), _this4.response = t, _this4.framesToPop = 1;
          return _this4;
        }

        return nt;
      }(_wrapNativeSuper(Error));

      var ot = window.AbortError ||
      /*#__PURE__*/
      function (_Error3) {
        _inherits(_class2, _Error3);

        function _class2() {
          _classCallCheck(this, _class2);

          return _possibleConstructorReturn(this, _getPrototypeOf(_class2).apply(this, arguments));
        }

        return _class2;
      }(_wrapNativeSuper(Error));

      function it(t, e) {
        if (t.status >= 200 && t.status < 300) return t;
        {
          var _n12 = t.statusText ? " ".concat(t.statusText) : "";

          throw e.message = "HTTP ".concat(t.status).concat(_n12), e;
        }
      }

      function rt(t, e) {
        var n = e ? Object.assign({}, e) : {};
        n.credentials || (n.credentials = "same-origin");
        var o = new Request(t, n);
        if (o.headers.append("X-Requested-With", "XMLHttpRequest"), /#csrf-token=/.test(o.url)) throw new TypeError("URL with encoded CSRF token was passed to fetch() without using the csrfRequest(url) helper");
        return o;
      }

      function st(_x11, _x12) {
        return _st.apply(this, arguments);
      }

      function _st() {
        _st = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee23(t, e) {
          var n;
          return regeneratorRuntime.wrap(function _callee23$(_context24) {
            while (1) {
              switch (_context24.prev = _context24.next) {
                case 0:
                  _context24.next = 2;
                  return self.fetch(t);

                case 2:
                  n = _context24.sent;

                  if (!(e && e.aborted)) {
                    _context24.next = 5;
                    break;
                  }

                  throw new ot("The operation was aborted");

                case 5:
                  return _context24.abrupt("return", n);

                case 6:
                case "end":
                  return _context24.stop();
              }
            }
          }, _callee23);
        }));
        return _st.apply(this, arguments);
      }

      function at(_x13, _x14) {
        return _at.apply(this, arguments);
      }

      function _at() {
        _at = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee24(t, e) {
          var n, o;
          return regeneratorRuntime.wrap(function _callee24$(_context25) {
            while (1) {
              switch (_context25.prev = _context25.next) {
                case 0:
                  n = rt(t, e);
                  _context25.next = 3;
                  return st(n, e && e.signal);

                case 3:
                  o = _context25.sent;
                  return _context25.abrupt("return", (it(o, new nt(o)), o));

                case 5:
                case "end":
                  return _context25.stop();
              }
            }
          }, _callee24);
        }));
        return _at.apply(this, arguments);
      }

      function ct(_x15, _x16) {
        return _ct.apply(this, arguments);
      }

      function _ct() {
        _ct = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee25(t, e) {
          var n, o;
          return regeneratorRuntime.wrap(function _callee25$(_context26) {
            while (1) {
              switch (_context26.prev = _context26.next) {
                case 0:
                  n = rt(t, e);
                  _context26.next = 3;
                  return st(n, e && e.signal);

                case 3:
                  o = _context26.sent;
                  return _context26.abrupt("return", (it(o, new nt(o)), o.text()));

                case 5:
                case "end":
                  return _context26.stop();
              }
            }
          }, _callee25);
        }));
        return _ct.apply(this, arguments);
      }

      function lt(_x17, _x18, _x19) {
        return _lt.apply(this, arguments);
      }

      function _lt() {
        _lt = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee26(t, e, n) {
          var o, i;
          return regeneratorRuntime.wrap(function _callee26$(_context27) {
            while (1) {
              switch (_context27.prev = _context27.next) {
                case 0:
                  o = rt(e, n);
                  _context27.next = 3;
                  return st(o, n && n.signal);

                case 3:
                  i = _context27.sent;
                  it(i, new nt(i));

                  (function (t, e) {
                    var n = e.headers.get("content-type") || "";
                    if (!n.startsWith("text/html")) throw new tt("expected response with text/html, but was ".concat(n), e);
                    var o = e.headers.get("x-html-safe");
                    if (!o) throw new tt("missing X-HTML-Safe nonce", e);
                    if (o !== t) throw new tt("response X-HTML-Safe nonce did not match", e);
                  })(function (t) {
                    var e = t.querySelector("meta[name=html-safe-nonce]");
                    if (null == e || !_instanceof(e, HTMLMetaElement)) throw new Error("could not find html-safe-nonce on document");
                    var n = e.content;
                    if (n) return n;
                    throw new Error("could not find html-safe-nonce on document");
                  }(t), i);

                  _context27.t0 = et;
                  _context27.t1 = t;
                  _context27.next = 10;
                  return i.text();

                case 10:
                  _context27.t2 = _context27.sent;
                  return _context27.abrupt("return", (0, _context27.t0)(_context27.t1, _context27.t2));

                case 12:
                case "end":
                  return _context27.stop();
              }
            }
          }, _callee26);
        }));
        return _lt.apply(this, arguments);
      }

      function ut() {
        if (!_instanceof(this, ut)) return new ut();
        this.size = 0, this.uid = 0, this.selectors = [], this.indexes = Object.create(this.indexes), this.activeIndexes = [];
      }

      var dt = window.document.documentElement,
          ft = dt.matches || dt.webkitMatchesSelector || dt.mozMatchesSelector || dt.oMatchesSelector || dt.msMatchesSelector;
      ut.prototype.matchesSelector = function (t, e) {
        return ft.call(t, e);
      }, ut.prototype.querySelectorAll = function (t, e) {
        return e.querySelectorAll(t);
      }, ut.prototype.indexes = [];
      var ht = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
      ut.prototype.indexes.push({
        name: "ID",
        selector: function selector(t) {
          var e;
          if (e = t.match(ht)) return e[0].slice(1);
        },
        element: function element(t) {
          if (t.id) return [t.id];
        }
      });
      var pt = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
      ut.prototype.indexes.push({
        name: "CLASS",
        selector: function selector(t) {
          var e;
          if (e = t.match(pt)) return e[0].slice(1);
        },
        element: function element(t) {
          var e = t.className;

          if (e) {
            if ("string" == typeof e) return e.split(/\s/);
            if ("object" == _typeof(e) && "baseVal" in e) return e.baseVal.split(/\s/);
          }
        }
      });
      var mt,
          gt = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
      ut.prototype.indexes.push({
        name: "TAG",
        selector: function selector(t) {
          var e;
          if (e = t.match(gt)) return e[0].toUpperCase();
        },
        element: function element(t) {
          return [t.nodeName.toUpperCase()];
        }
      }), ut.prototype.indexes["default"] = {
        name: "UNIVERSAL",
        selector: function selector() {
          return !0;
        },
        element: function element() {
          return [!0];
        }
      }, mt = "function" == typeof window.Map ? window.Map : function () {
        function t() {
          this.map = {};
        }

        return t.prototype.get = function (t) {
          return this.map[t + " "];
        }, t.prototype.set = function (t, e) {
          this.map[t + " "] = e;
        }, t;
      }();
      var vt = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

      function wt(t, e) {
        var n,
            o,
            i,
            r,
            s,
            a,
            c = (t = t.slice(0).concat(t["default"])).length,
            l = e,
            u = [];

        do {
          if (vt.exec(""), (i = vt.exec(l)) && (l = i[3], i[2] || !l)) for (n = 0; n < c; n++) {
            if (s = (a = t[n]).selector(i[1])) {
              for (o = u.length, r = !1; o--;) {
                if (u[o].index === a && u[o].key === s) {
                  r = !0;
                  break;
                }
              }

              r || u.push({
                index: a,
                key: s
              });
              break;
            }
          }
        } while (i);

        return u;
      }

      function bt(t, e) {
        var n, o, i;

        for (n = 0, o = t.length; n < o; n++) {
          if (i = t[n], e.isPrototypeOf(i)) return i;
        }
      }

      function yt(t, e) {
        return t.id - e.id;
      }

      ut.prototype.logDefaultIndexUsed = function () {}, ut.prototype.add = function (t, e) {
        var n,
            o,
            i,
            r,
            s,
            a,
            c,
            l,
            u = this.activeIndexes,
            d = this.selectors;

        if ("string" == typeof t) {
          for (n = {
            id: this.uid++,
            selector: t,
            data: e
          }, c = wt(this.indexes, t), o = 0; o < c.length; o++) {
            r = (l = c[o]).key, (s = bt(u, i = l.index)) || ((s = Object.create(i)).map = new mt(), u.push(s)), i === this.indexes["default"] && this.logDefaultIndexUsed(n), (a = s.map.get(r)) || (a = [], s.map.set(r, a)), a.push(n);
          }

          this.size++, d.push(t);
        }
      }, ut.prototype.remove = function (t, e) {
        if ("string" == typeof t) {
          var n,
              o,
              i,
              r,
              s,
              a,
              c,
              l,
              u = this.activeIndexes,
              d = {},
              f = 1 === arguments.length;

          for (n = wt(this.indexes, t), i = 0; i < n.length; i++) {
            for (o = n[i], r = u.length; r--;) {
              if (a = u[r], o.index.isPrototypeOf(a)) {
                if (c = a.map.get(o.key)) for (s = c.length; s--;) {
                  (l = c[s]).selector !== t || !f && l.data !== e || (c.splice(s, 1), d[l.id] = !0);
                }
                break;
              }
            }
          }

          this.size -= Object.keys(d).length;
        }
      }, ut.prototype.queryAll = function (t) {
        if (!this.selectors.length) return [];
        var e,
            n,
            o,
            i,
            r,
            s,
            a,
            c,
            l = {},
            u = [],
            d = this.querySelectorAll(this.selectors.join(", "), t);

        for (e = 0, o = d.length; e < o; e++) {
          for (r = d[e], n = 0, i = (s = this.matches(r)).length; n < i; n++) {
            l[(c = s[n]).id] ? a = l[c.id] : (a = {
              id: c.id,
              selector: c.selector,
              data: c.data,
              elements: []
            }, l[c.id] = a, u.push(a)), a.elements.push(r);
          }
        }

        return u.sort(yt);
      }, ut.prototype.matches = function (t) {
        if (!t) return [];
        var e,
            n,
            o,
            i,
            r,
            s,
            a,
            c,
            l,
            u,
            d,
            f = this.activeIndexes,
            h = {},
            p = [];

        for (e = 0, i = f.length; e < i; e++) {
          if (c = (a = f[e]).element(t)) for (n = 0, r = c.length; n < r; n++) {
            if (l = a.map.get(c[n])) for (o = 0, s = l.length; o < s; o++) {
              !h[d = (u = l[o]).id] && this.matchesSelector(t, u.selector) && (h[d] = !0, p.push(u));
            }
          }
        }

        return p.sort(yt);
      };
      var Et = {},
          Tt = {},
          xt = new WeakMap(),
          kt = new WeakMap(),
          Lt = new WeakMap(),
          At = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");

      function _t(t, e, n) {
        var o = t[e];
        return t[e] = function () {
          return n.apply(t, arguments), o.apply(t, arguments);
        }, t;
      }

      function St() {
        xt.set(this, !0);
      }

      function Ct() {
        xt.set(this, !0), kt.set(this, !0);
      }

      function jt() {
        return Lt.get(this) || null;
      }

      function Dt(t, e) {
        At && Object.defineProperty(t, "currentTarget", {
          configurable: !0,
          enumerable: !0,
          get: e || At.get
        });
      }

      function Mt(t) {
        var e = (1 === t.eventPhase ? Tt : Et)[t.type];

        if (e) {
          var n = function (t, e, n) {
            var o = [],
                i = e;

            do {
              if (1 !== i.nodeType) break;
              var r = t.matches(i);

              if (r.length) {
                var s = {
                  node: i,
                  observers: r
                };
                n ? o.unshift(s) : o.push(s);
              }
            } while (i = i.parentElement);

            return o;
          }(e, t.target, 1 === t.eventPhase);

          if (n.length) {
            _t(t, "stopPropagation", St), _t(t, "stopImmediatePropagation", Ct), Dt(t, jt);

            for (var o = 0, i = n.length; o < i && !xt.get(t); o++) {
              var r = n[o];
              Lt.set(t, r.node);

              for (var s = 0, a = r.observers.length; s < a && !kt.get(t); s++) {
                r.observers[s].data.call(r.node, t);
              }
            }

            Lt["delete"](t), Dt(t);
          }
        }
      }

      function Ht(t, e, n) {
        var o = !!(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}).capture,
            i = o ? Tt : Et,
            r = i[t];
        r || (r = new ut(), i[t] = r, document.addEventListener(t, Mt, o)), r.add(e, n);
      }

      function Ot(t, e, n) {
        return t.dispatchEvent(new CustomEvent(e, {
          bubbles: !0,
          cancelable: !0,
          detail: n
        }));
      }
      /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */


      var Nt = new WeakMap();
      t("a", function (t) {
        return function () {
          var n = t.apply(void 0, arguments);
          return f.set(n, !0), n;
        };
      }(function () {
        for (var _len3 = arguments.length, t = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          t[_key3] = arguments[_key3];
        }

        return function (e) {
          var n = Nt.get(e);
          void 0 === n && (n = {
            lastRenderedIndex: 2147483647,
            values: []
          }, Nt.set(e, n));
          var o = n.values;
          var i = o.length;
          n.values = t;

          var _loop = function _loop(_r6) {
            var s = t[_r6];

            if (j(s) || "function" != typeof s.then) {
              e.setValue(s), n.lastRenderedIndex = _r6;
              return "break";
            }

            _r6 < i && s === o[_r6] || (n.lastRenderedIndex = 2147483647, i = 0, Promise.resolve(s).then(function (t) {
              var o = n.values.indexOf(s);
              o > -1 && o < n.lastRenderedIndex && (n.lastRenderedIndex = o, e.setValue(t), e.commit());
            }));
          };

          for (var _r6 = 0; _r6 < t.length && !(_r6 > n.lastRenderedIndex); _r6++) {
            var _ret = _loop(_r6);

            if (_ret === "break") break;
          }
        };
      }));
      var It = null,
          Pt = null,
          qt = [];

      function Rt(t, e) {
        var n = [];

        function o() {
          var t = n;
          n = [], e(t);
        }

        return function () {
          for (var e = arguments.length, i = Array(e), r = 0; r < e; r++) {
            i[r] = arguments[r];
          }

          n.push(i), 1 === n.length && Vt(t, o);
        };
      }

      function Vt(t, e) {
        Pt || (Pt = new MutationObserver(Ft)), It || (It = t.createElement("div"), Pt.observe(It, {
          attributes: !0
        })), qt.push(e), It.setAttribute("data-twiddle", "" + Date.now());
      }

      function Ft() {
        var t = qt;
        qt = [];

        for (var e = 0; e < t.length; e++) {
          try {
            t[e]();
          } catch (n) {
            setTimeout(function () {
              throw n;
            }, 0);
          }
        }
      }

      var Bt = new WeakMap(),
          $t = new WeakMap(),
          Ut = new WeakMap(),
          Wt = new WeakMap();

      function Xt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n],
              i = o[0],
              r = o[1],
              s = o[2];
          i === Qt ? (Kt(s, r), Gt(s, r)) : i === te ? Yt(s, r) : i === ee && zt(t.observers, r);
        }
      }

      function Kt(t, e) {
        if (_instanceof(e, t.elementConstructor)) {
          var n = Bt.get(e);

          if (n || (n = [], Bt.set(e, n)), -1 === n.indexOf(t.id)) {
            var o = void 0;

            if (t.initialize && (o = t.initialize.call(void 0, e)), o) {
              var i = $t.get(e);
              i || (i = {}, $t.set(e, i)), i["" + t.id] = o;
            }

            n.push(t.id);
          }
        }
      }

      function Gt(t, e) {
        if (_instanceof(e, t.elementConstructor)) {
          var n = Wt.get(e);

          if (n || (n = [], Wt.set(e, n)), -1 === n.indexOf(t.id)) {
            t.elements.push(e);
            var o = $t.get(e),
                i = o ? o["" + t.id] : null;

            if (i && i.add && i.add.call(void 0, e), t.subscribe) {
              var r = t.subscribe.call(void 0, e);

              if (r) {
                var s = Ut.get(e);
                s || (s = {}, Ut.set(e, s)), s["" + t.id] = r;
              }
            }

            t.add && t.add.call(void 0, e), n.push(t.id);
          }
        }
      }

      function Yt(t, e) {
        if (_instanceof(e, t.elementConstructor)) {
          var n = Wt.get(e);

          if (n) {
            var o = t.elements.indexOf(e);

            if (-1 !== o && t.elements.splice(o, 1), -1 !== (o = n.indexOf(t.id))) {
              var i = $t.get(e),
                  r = i ? i["" + t.id] : null;

              if (r && r.remove && r.remove.call(void 0, e), t.subscribe) {
                var s = Ut.get(e),
                    a = s ? s["" + t.id] : null;
                a && a.unsubscribe && a.unsubscribe();
              }

              t.remove && t.remove.call(void 0, e), n.splice(o, 1);
            }

            0 === n.length && Wt["delete"](e);
          }
        }
      }

      function zt(t, e) {
        var n = Wt.get(e);

        if (n) {
          for (var o = n.slice(0), i = 0; i < o.length; i++) {
            var r = t[o[i]];

            if (r) {
              var s = r.elements.indexOf(e);
              -1 !== s && r.elements.splice(s, 1);
              var a = $t.get(e),
                  c = a ? a["" + r.id] : null;
              c && c.remove && c.remove.call(void 0, e);
              var l = Ut.get(e),
                  u = l ? l["" + r.id] : null;
              u && u.unsubscribe && u.unsubscribe(), r.remove && r.remove.call(void 0, e);
            }
          }

          Wt["delete"](e);
        }
      }

      var Jt = null;

      function Zt(t) {
        return "matches" in t || "webkitMatchesSelector" in t || "mozMatchesSelector" in t || "oMatchesSelector" in t || "msMatchesSelector" in t;
      }

      var Qt = 1,
          te = 2,
          ee = 3;

      function ne(t, e, n) {
        for (var o = 0; o < n.length; o++) {
          var i = n[o];
          "childList" === i.type ? (oe(t, e, i.addedNodes), ie(t, e, i.removedNodes)) : "attributes" === i.type && re(t, e, i.target);
        }

        (function (t) {
          if (null === Jt) {
            var e = t.createElement("div"),
                n = t.createElement("div"),
                o = t.createElement("div");
            e.appendChild(n), n.appendChild(o), e.innerHTML = "", Jt = o.parentNode !== n;
          }

          return Jt;
        })(t.ownerDocument) && function (t, e) {
          for (var n = 0; n < t.observers.length; n++) {
            var o = t.observers[n];
            if (o) for (var i = o.elements, r = 0; r < i.length; r++) {
              var s = i[r];
              s.parentNode || e.push([ee, s]);
            }
          }
        }(t, e);
      }

      function oe(t, e, n) {
        for (var o = 0; o < n.length; o++) {
          var i = n[o];
          if (Zt(i)) for (var r = t.selectorSet.matches(i), s = 0; s < r.length; s++) {
            var a = r[s].data;
            e.push([Qt, i, a]);
          }
          if ("querySelectorAll" in i) for (var c = t.selectorSet.queryAll(i), l = 0; l < c.length; l++) {
            for (var u = c[l], d = u.data, f = u.elements, h = 0; h < f.length; h++) {
              e.push([Qt, f[h], d]);
            }
          }
        }
      }

      function ie(t, e, n) {
        for (var o = 0; o < n.length; o++) {
          var i = n[o];

          if ("querySelectorAll" in i) {
            e.push([ee, i]);

            for (var r = i.querySelectorAll("*"), s = 0; s < r.length; s++) {
              e.push([ee, r[s]]);
            }
          }
        }
      }

      function re(t, e, n) {
        if (Zt(n)) for (var o = t.selectorSet.matches(n), i = 0; i < o.length; i++) {
          var r = o[i].data;
          e.push([Qt, n, r]);
        }

        if ("querySelectorAll" in n) {
          var s = Wt.get(n);
          if (s) for (var a = 0; a < s.length; a++) {
            var c = t.observers[s[a]];
            c && (t.selectorSet.matchesSelector(n, c.selector) || e.push([te, n, c]));
          }
        }
      }

      var se = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      },
          ae = 0;

      function ce(t) {
        this.rootNode = 9 === t.nodeType ? t.documentElement : t, this.ownerDocument = 9 === t.nodeType ? t : t.ownerDocument, this.observers = [], this.selectorSet = new ut(), this.mutationObserver = new MutationObserver(de.bind(this, this)), this._scheduleAddRootNodes = Rt(this.ownerDocument, ue.bind(this, this)), this._handleThrottledChangedTargets = Rt(this.ownerDocument, he.bind(this, this)), this.rootNode.addEventListener("change", fe.bind(this, this), !1), function (t, e) {
          var n = t.readyState;
          "interactive" === n || "complete" === n ? Vt(t, e) : t.addEventListener("DOMContentLoaded", Vt(t, e));
        }(this.ownerDocument, le.bind(this, this));
      }

      function le(t) {
        t.mutationObserver.observe(t.rootNode, {
          childList: !0,
          attributes: !0,
          subtree: !0
        }), t._scheduleAddRootNodes();
      }

      function ue(t) {
        var e = [];
        oe(t, e, [t.rootNode]), Xt(t, e);
      }

      function de(t, e) {
        var n = [];
        ne(t, n, e), Xt(t, n);
      }

      function fe(t, e) {
        t._handleThrottledChangedTargets(e.target);
      }

      function he(t, e) {
        var n = [];
        !function (t, e, n) {
          for (var o = 0; o < n.length; o++) {
            for (var i = n[o], r = i.form ? i.form.elements : t.rootNode.querySelectorAll("input"), s = 0; s < r.length; s++) {
              re(t, e, r[s]);
            }
          }
        }(t, n, e), Xt(t, n);
      }

      ce.prototype.disconnect = function () {
        this.mutationObserver.disconnect();
      }, ce.prototype.observe = function (t, e) {
        var n = void 0;
        "function" == typeof e ? n = {
          selector: t,
          initialize: e
        } : "object" === (void 0 === e ? "undefined" : se(e)) ? (n = e).selector = t : n = t;
        var o = this,
            i = {
          id: ae++,
          selector: n.selector,
          initialize: n.initialize,
          add: n.add,
          remove: n.remove,
          subscribe: n.subscribe,
          elements: [],
          elementConstructor: n.hasOwnProperty("constructor") ? n.constructor : this.ownerDocument.defaultView.Element,
          abort: function abort() {
            o._abortObserving(i);
          }
        };
        return this.selectorSet.add(i.selector, i), this.observers[i.id] = i, this._scheduleAddRootNodes(), i;
      }, ce.prototype._abortObserving = function (t) {
        for (var e = t.elements, n = 0; n < e.length; n++) {
          Yt(t, e[n]);
        }

        this.selectorSet.remove(t.selector, t), delete this.observers[t.id];
      }, ce.prototype.triggerObservers = function (t) {
        var e = [];
        !function (t, e, n) {
          if ("querySelectorAll" in n) {
            re(t, e, n);

            for (var o = n.querySelectorAll("*"), i = 0; i < o.length; i++) {
              re(t, e, o[i]);
            }
          }
        }(this, e, t), Xt(this, e);
      };
      var pe = void 0;

      function me() {
        var t;
        return (pe || (pe = new ce(window.document)), t = pe).observe.apply(t, arguments);
      }

      function ge(t, e) {
        var n = t.head;
        if (!n) return "";
        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          for (var _iterator8 = n.getElementsByTagName("meta")[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var _o12 = _step8.value;
            if (_o12.name === e) return _o12.content;
          }
        } catch (err) {
          _didIteratorError8 = true;
          _iteratorError8 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
              _iterator8["return"]();
            }
          } finally {
            if (_didIteratorError8) {
              throw _iteratorError8;
            }
          }
        }

        return "";
      }

      function ve(t) {
        var e = ge(t, "expected-hostname");
        return !!e && e.replace(/\.$/, "").split(".").slice(-2).join(".") !== t.location.hostname.replace(/\.$/, "").split(".").slice(-2).join(".");
      }

      var we = t("a1", "interactive" === document.readyState || "complete" === document.readyState ? Promise.resolve() : new Promise(function (t) {
        document.addEventListener("DOMContentLoaded", function () {
          t();
        });
      })),
          be = t("l", "complete" === document.readyState ? Promise.resolve() : new Promise(function (t) {
        window.addEventListener("load", t);
      }));
      var ye = [];

      function Ee(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        void 0 === t.timestamp && (t.timestamp = new Date().getTime()), ye.push(t), e ? xe() : _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee15() {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return be;

                case 2:
                  null == Te && (Te = window.requestIdleCallback(xe));

                case 3:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15);
        }))();
      }

      var Te = null;

      function xe() {
        if (Te = null, ve(document)) return;
        var t = ge(document, "browser-stats-url");
        if (!t) return;
        var e = JSON.stringify({
          stats: ye
        });
        navigator.sendBeacon && navigator.sendBeacon(t, e), ye = [];
      }

      var ke;
      ke = "function" == typeof FormData && "entries" in FormData.prototype ? function (t) {
        return Array.from(new FormData(t).entries());
      } : function (t) {
        for (var e = [], n = t.elements, o = 0; o < n.length; o++) {
          var i = n[o],
              r = i.tagName.toUpperCase();

          if ("SELECT" === r || "TEXTAREA" === r || "INPUT" === r) {
            var s = i.type,
                a = i.name;
            if (a && !i.disabled && "submit" !== s && "reset" !== s && "button" !== s && ("radio" !== s && "checkbox" !== s || i.checked)) if ("SELECT" === r) for (var c = i.getElementsByTagName("option"), l = 0; l < c.length; l++) {
              var u = c[l];
              u.selected && e.push([a, u.value]);
            } else "file" === s ? (console.warn("form-data-entries could not serialize <input type=file>", i), e.push([a, ""])) : e.push([a, i.value]);
          }
        }

        return e;
      };
      var Le = t("ay", ke);

      function Ae(t) {
        var e = t.closest("form");
        if (!_instanceof(e, HTMLFormElement)) return;

        var n = _e(e);

        if (t.name) {
          var _o13 = t.matches("input[type=submit]") ? "Submit" : "",
              _i8 = t.value || _o13;

          n || (n = document.createElement("input"), n.type = "hidden", n.classList.add("is-submit-button-value"), e.prepend(n)), n.name = t.name, n.value = _i8;
        } else n && n.remove();
      }

      function _e(t) {
        var e = t.querySelector("input.is-submit-button-value");
        return _instanceof(e, HTMLInputElement) ? e : null;
      }

      function Se(t, e, n) {
        return t.dispatchEvent(new CustomEvent(e, {
          bubbles: !0,
          cancelable: n
        }));
      }

      function Ce(t, e) {
        e && (!function (t, e) {
          if (!_instanceof(t, HTMLFormElement)) throw new TypeError("The specified element is not of type HTMLFormElement.");
          if (!_instanceof(e, HTMLElement)) throw new TypeError("The specified element is not of type HTMLElement.");
          if ("submit" !== e.type) throw new TypeError("The specified element is not a submit button.");
          if (!t || t !== e.form) throw new Error("The specified element is not owned by the form element.");
        }(t, e), Ae(e)), Se(t, "submit", !0) && t.submit();
      }

      function je(t) {
        if (!_instanceof(t, HTMLElement)) return !1;
        var e = t.nodeName.toLowerCase(),
            n = (t.getAttribute("type") || "").toLowerCase();
        return "select" === e || "textarea" === e || "input" === e && "submit" !== n && "reset" !== n || t.isContentEditable;
      }

      function De(t) {
        var e = new URLSearchParams();
        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          for (var _iterator9 = Le(t)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var _step9$value = _slicedToArray(_step9.value, 2),
                _n13 = _step9$value[0],
                _o14 = _step9$value[1];

            e.append(_n13, _o14);
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
              _iterator9["return"]();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }

        return e.toString();
      }

      Ht("click", "[data-hydro-click]", function (t) {
        var e = t.currentTarget;
        Ee({
          hydroEventPayload: e.getAttribute("data-hydro-click") || "",
          hydroEventHmac: e.getAttribute("data-hydro-click-hmac") || "",
          hydroClientContext: e.getAttribute("data-hydro-client-context") || ""
        }, !0);
      });
      var Me = !1;
      var He = new ut();

      function Oe(t) {
        var e = t.target;

        if (_instanceof(e, HTMLElement) && e.nodeType !== Node.DOCUMENT_NODE) {
          var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            for (var _iterator10 = He.matches(e)[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              var _n14 = _step10.value;

              _n14.data.call(null, e);
            }
          } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
                _iterator10["return"]();
              }
            } finally {
              if (_didIteratorError10) {
                throw _iteratorError10;
              }
            }
          }
        }
      }

      function Ne(t, e) {
        Me || (Me = !0, document.addEventListener("focus", Oe, !0)), He.add(t, e), document.activeElement && document.activeElement.matches(t) && e(document.activeElement);
      }

      var Ie = [];
      var Pe,
          qe,
          Re = 0;

      function Ve() {
        return Pe;
      }

      function Fe() {
        try {
          return Math.min(Math.max(0, history.length) || 0, 9007199254740991);
        } catch (Hr) {
          return 0;
        }
      }

      function Be() {
        return Fe() - 1 + Re;
      }

      function $e(t) {
        Pe = t;
        var e = location.href;
        Ie[Be()] = {
          url: e,
          state: Pe
        }, Ie.length = Fe(), window.dispatchEvent(new CustomEvent("statechange", {
          bubbles: !1,
          cancelable: !1
        }));
      }

      function Ue() {
        return new Date().getTime();
      }

      function We(t, e, n) {
        Re = 0;
        var o = Object.assign({}, {
          _id: Ue()
        }, t);
        history.pushState(o, e, n), $e(o);
      }

      function Xe(t, e, n) {
        var o = Object.assign({}, {
          _id: Ve()._id
        }, t);
        history.replaceState(o, e, n), $e(o);
      }

      function Ke(t, e) {
        return function (t) {
          if (Array.isArray(t)) return t;
        }(t) || function (t, e) {
          var n = [],
              o = !0,
              i = !1,
              r = void 0;

          try {
            for (var s, a = t[Symbol.iterator](); !(o = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); o = !0) {
              ;
            }
          } catch (c) {
            i = !0, r = c;
          } finally {
            try {
              o || null == a["return"] || a["return"]();
            } finally {
              if (i) throw r;
            }
          }

          return n;
        }(t, e) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
      }

      Pe = function () {
        var t = {
          _id: new Date().getTime()
        };
        return $e(t), t;
      }(), window.addEventListener("popstate", function (t) {
        var e = t.state;
        e && e._id && (e._id < (Ve()._id || NaN) ? Re-- : Re++, $e(e));
      }, !0), window.addEventListener("hashchange", function () {
        if (Fe() > Ie.length) {
          var _t17 = {
            _id: Ue()
          };
          history.replaceState(_t17, "", location.href), $e(_t17);
        }
      }, !0);

      var Ge =
      /*#__PURE__*/
      function (_Error4) {
        _inherits(Ge, _Error4);

        function Ge(t, e) {
          var _this5;

          _classCallCheck(this, Ge);

          _this5 = _possibleConstructorReturn(this, _getPrototypeOf(Ge).call(this, t)), _this5.response = e;
          return _this5;
        }

        return Ge;
      }(_wrapNativeSuper(Error));

      function Ye() {
        var t, e;
        return [new Promise(function (n, o) {
          t = n, e = o;
        }), t, e];
      }

      var ze = [],
          Je = [];

      function Ze(t, e) {
        qe || (qe = new ut(), document.addEventListener("submit", Qe)), qe.add(t, e);
      }

      function Qe(t) {
        if (!_instanceof(t.target, HTMLFormElement)) return;
        var e = t.target,
            n = qe && qe.matches(e);
        if (!n || 0 === n.length) return;

        var o = function (t) {
          var e = {
            method: t.method || "GET",
            url: t.action,
            headers: new Headers({
              "X-Requested-With": "XMLHttpRequest"
            }),
            body: null
          };

          if ("GET" === e.method.toUpperCase()) {
            var _n15 = function (t) {
              var e = new URLSearchParams();
              var _iteratorNormalCompletion11 = true;
              var _didIteratorError11 = false;
              var _iteratorError11 = undefined;

              try {
                for (var _iterator11 = Le(t)[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                  var _o15 = _step11.value;
                  var n = Ke(_o15, 2);
                  var _t18 = n[0],
                      _i9 = n[1];
                  e.append(_t18, _i9);
                }
              } catch (err) {
                _didIteratorError11 = true;
                _iteratorError11 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
                    _iterator11["return"]();
                  }
                } finally {
                  if (_didIteratorError11) {
                    throw _iteratorError11;
                  }
                }
              }

              return e.toString();
            }(t);

            _n15 && (e.url += (~e.url.indexOf("?") ? "&" : "?") + _n15);
          } else e.body = new FormData(t);

          return e;
        }(e),
            i = Ke(Ye(), 3),
            r = i[0],
            s = i[1],
            a = i[2];

        t.preventDefault(), function () {
          var _ref8 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16(t, e, n, o) {
            var i, _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _loop2, _iterator12, _step12;

            return regeneratorRuntime.wrap(function _callee16$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    i = !1;
                    _iteratorNormalCompletion12 = true;
                    _didIteratorError12 = false;
                    _iteratorError12 = undefined;
                    _context17.prev = 4;
                    _loop2 =
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _loop2() {
                      var r, t, s, a, c, l;
                      return regeneratorRuntime.wrap(function _loop2$(_context16) {
                        while (1) {
                          switch (_context16.prev = _context16.next) {
                            case 0:
                              r = _step12.value;
                              t = Ke(Ye(), 2), s = t[0], a = t[1], c = function c() {
                                return i = !0, a(), o;
                              }, l = {
                                text: c,
                                json: function json() {
                                  return n.headers.set("Accept", "application/json"), c();
                                },
                                html: function html() {
                                  return n.headers.set("Accept", "text/html"), c();
                                }
                              };
                              _context16.next = 4;
                              return Promise.race([s, r.data.call(null, e, l, n)]);

                            case 4:
                            case "end":
                              return _context16.stop();
                          }
                        }
                      }, _loop2);
                    });
                    _iterator12 = t[Symbol.iterator]();

                  case 7:
                    if (_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done) {
                      _context17.next = 12;
                      break;
                    }

                    return _context17.delegateYield(_loop2(), "t0", 9);

                  case 9:
                    _iteratorNormalCompletion12 = true;
                    _context17.next = 7;
                    break;

                  case 12:
                    _context17.next = 18;
                    break;

                  case 14:
                    _context17.prev = 14;
                    _context17.t1 = _context17["catch"](4);
                    _didIteratorError12 = true;
                    _iteratorError12 = _context17.t1;

                  case 18:
                    _context17.prev = 18;
                    _context17.prev = 19;

                    if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
                      _iterator12["return"]();
                    }

                  case 21:
                    _context17.prev = 21;

                    if (!_didIteratorError12) {
                      _context17.next = 24;
                      break;
                    }

                    throw _iteratorError12;

                  case 24:
                    return _context17.finish(21);

                  case 25:
                    return _context17.finish(18);

                  case 26:
                    return _context17.abrupt("return", i);

                  case 27:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee16, null, [[4, 14, 18, 26], [19,, 21, 25]]);
          }));

          return function (_x20, _x21, _x22, _x23) {
            return _ref8.apply(this, arguments);
          };
        }()(n, e, o, r).then(
        /*#__PURE__*/
        function () {
          var _ref9 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee18(t) {
            var _iteratorNormalCompletion13, _didIteratorError13, _iteratorError13, _iterator13, _step13, _t20;

            return regeneratorRuntime.wrap(function _callee18$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    if (!t) {
                      _context19.next = 30;
                      break;
                    }

                    _iteratorNormalCompletion13 = true;
                    _didIteratorError13 = false;
                    _iteratorError13 = undefined;
                    _context19.prev = 4;
                    _iterator13 = Je[Symbol.iterator]();

                  case 6:
                    if (_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done) {
                      _context19.next = 13;
                      break;
                    }

                    _t20 = _step13.value;
                    _context19.next = 10;
                    return _t20(e);

                  case 10:
                    _iteratorNormalCompletion13 = true;
                    _context19.next = 6;
                    break;

                  case 13:
                    _context19.next = 19;
                    break;

                  case 15:
                    _context19.prev = 15;
                    _context19.t0 = _context19["catch"](4);
                    _didIteratorError13 = true;
                    _iteratorError13 = _context19.t0;

                  case 19:
                    _context19.prev = 19;
                    _context19.prev = 20;

                    if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
                      _iterator13["return"]();
                    }

                  case 22:
                    _context19.prev = 22;

                    if (!_didIteratorError13) {
                      _context19.next = 25;
                      break;
                    }

                    throw _iteratorError13;

                  case 25:
                    return _context19.finish(22);

                  case 26:
                    return _context19.finish(19);

                  case 27:
                    (function () {
                      var _ref10 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee17(t) {
                        var e, n, o;
                        return regeneratorRuntime.wrap(function _callee17$(_context18) {
                          while (1) {
                            switch (_context18.prev = _context18.next) {
                              case 0:
                                _context18.next = 2;
                                return window.fetch(t.url, {
                                  method: t.method,
                                  body: null !== t.body ? t.body : void 0,
                                  headers: t.headers,
                                  credentials: "same-origin"
                                });

                              case 2:
                                e = _context18.sent;
                                _context18.t0 = e.url;
                                _context18.t1 = e.status;
                                _context18.t2 = e.statusText;
                                _context18.t3 = e.headers;
                                n = {
                                  url: _context18.t0,
                                  status: _context18.t1,
                                  statusText: _context18.t2,
                                  headers: _context18.t3,
                                  text: "",

                                  get json() {
                                    t = JSON.parse(this.text);
                                    return delete this.json, this.json = t, this.json;
                                  },

                                  get html() {
                                    return delete this.html, this.html = function (t, e) {
                                      var n = t.createElement("template");
                                      return n.innerHTML = e, t.importNode(n.content, !0);
                                    }(document, this.text), this.html;
                                  }

                                };
                                _context18.next = 10;
                                return e.text();

                              case 10:
                                o = _context18.sent;

                                if (!(n.text = o, e.ok)) {
                                  _context18.next = 13;
                                  break;
                                }

                                return _context18.abrupt("return", n);

                              case 13:
                                throw new Ge("request failed", n);

                              case 14:
                              case "end":
                                return _context18.stop();
                            }
                          }
                        }, _callee17);
                      }));

                      return function (_x25) {
                        return _ref10.apply(this, arguments);
                      };
                    })()(o).then(s, a)["catch"](function () {}).then(function () {
                      var _iteratorNormalCompletion14 = true;
                      var _didIteratorError14 = false;
                      var _iteratorError14 = undefined;

                      try {
                        for (var _iterator14 = ze[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                          var _t19 = _step14.value;

                          _t19(e);
                        }
                      } catch (err) {
                        _didIteratorError14 = true;
                        _iteratorError14 = err;
                      } finally {
                        try {
                          if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
                            _iterator14["return"]();
                          }
                        } finally {
                          if (_didIteratorError14) {
                            throw _iteratorError14;
                          }
                        }
                      }
                    });
                    _context19.next = 31;
                    break;

                  case 30:
                    e.submit();

                  case 31:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee18, null, [[4, 15, 19, 27], [20,, 22, 26]]);
          }));

          return function (_x24) {
            return _ref9.apply(this, arguments);
          };
        }(), function (t) {
          e.submit(), setTimeout(function () {
            throw t;
          });
        });
      }

      t("ar", "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {});

      function tn(t, e) {
        return t(e = {
          exports: {}
        }, e.exports), e.exports;
      }

      var en =
      /*#__PURE__*/
      function (_CustomEvent) {
        _inherits(en, _CustomEvent);

        function en(t, e) {
          var _this6;

          _classCallCheck(this, en);

          _this6 = _possibleConstructorReturn(this, _getPrototypeOf(en).call(this, t, e)), _this6.relatedTarget = e.relatedTarget;
          return _this6;
        }

        return en;
      }(_wrapNativeSuper(CustomEvent));

      var nn = new WeakMap();

      function on(t, e) {
        var n = new XMLHttpRequest();
        return n.open("GET", e, !0), n.setRequestHeader("Accept", "text/html; fragment"), function (t, e) {
          var n = nn.get(t);
          n && n.abort();
          nn.set(t, e);

          var o = function o() {
            return nn["delete"](t);
          },
              i = function (t) {
            return new Promise(function (e, n) {
              t.onload = function () {
                t.status >= 200 && t.status < 300 ? e(t.responseText) : n(new Error(t.responseText));
              }, t.onerror = n, t.send();
            });
          }(e);

          return i.then(o, o), i;
        }(t, n);
      }

      function rn(t, e) {
        (function (t, e) {
          var n = t.scrollTop,
              o = n + t.clientHeight,
              i = e.offsetTop,
              r = i + e.clientHeight;
          return i >= n && r <= o;
        })(t, e) || (t.scrollTop = e.offsetTop);
      }

      var sn = !1;
      var an = !!navigator.userAgent.match(/Macintosh/);

      function cn(t) {
        if (t.shiftKey || t.metaKey || t.altKey) return;
        var e = t.currentTarget;
        if (!(_instanceof(e, HTMLTextAreaElement) || _instanceof(e, HTMLInputElement))) return;
        if (sn) return;
        var n = document.getElementById(e.getAttribute("aria-owns") || "");
        if (n) switch (t.key) {
          case "Enter":
          case "Tab":
            (function (t, e) {
              var n = e.querySelector('[aria-selected="true"]');
              return !!n && ("true" === n.getAttribute("aria-disabled") || (n.click(), !0));
            })(0, n) && t.preventDefault();
            break;

          case "Escape":
            dn(e, n);
            break;

          case "ArrowDown":
            un(e, n, 1), t.preventDefault();
            break;

          case "ArrowUp":
            un(e, n, -1), t.preventDefault();
            break;

          case "n":
            an && t.ctrlKey && (un(e, n, 1), t.preventDefault());
            break;

          case "p":
            an && t.ctrlKey && (un(e, n, -1), t.preventDefault());
        }
      }

      function ln(t) {
        if (!_instanceof(t.target, Element)) return;
        var e = t.target.closest('[role="option"]');
        e && "true" !== e.getAttribute("aria-disabled") && function (t) {
          t.dispatchEvent(new CustomEvent("combobox-commit", {
            bubbles: !0
          }));
        }(e);
      }

      function un(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        var o = e.querySelector('[aria-selected="true"]'),
            i = Array.from(e.querySelectorAll('[role="option"]')),
            r = i.indexOf(o);
        var s = 1 === n ? 0 : i.length - 1;

        if (o && r >= 0) {
          var _t21 = r + n;

          _t21 >= 0 && _t21 < i.length && (s = _t21);
        }

        var a = i[s];

        if (a) {
          var _iteratorNormalCompletion15 = true;
          var _didIteratorError15 = false;
          var _iteratorError15 = undefined;

          try {
            for (var _iterator15 = i[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
              var _c2 = _step15.value;
              a === _c2 ? (t.setAttribute("aria-activedescendant", a.id), a.setAttribute("aria-selected", "true"), rn(e, a)) : _c2.setAttribute("aria-selected", "false");
            }
          } catch (err) {
            _didIteratorError15 = true;
            _iteratorError15 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
                _iterator15["return"]();
              }
            } finally {
              if (_didIteratorError15) {
                throw _iteratorError15;
              }
            }
          }
        }
      }

      function dn(t, e) {
        t.removeAttribute("aria-activedescendant");
        var _iteratorNormalCompletion16 = true;
        var _didIteratorError16 = false;
        var _iteratorError16 = undefined;

        try {
          for (var _iterator16 = e.querySelectorAll('[aria-selected="true"]')[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
            var _n16 = _step16.value;

            _n16.setAttribute("aria-selected", "false");
          }
        } catch (err) {
          _didIteratorError16 = true;
          _iteratorError16 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) {
              _iterator16["return"]();
            }
          } finally {
            if (_didIteratorError16) {
              throw _iteratorError16;
            }
          }
        }
      }

      function fn(t) {
        var e = t.currentTarget;
        if (!(_instanceof(e, HTMLTextAreaElement) || _instanceof(e, HTMLInputElement))) return;
        sn = "compositionstart" === t.type;
        var n = document.getElementById(e.getAttribute("aria-owns") || "");
        n && dn(e, n);
      }

      var hn =
      /*#__PURE__*/
      function () {
        function hn(t, e, n) {
          _classCallCheck(this, hn);

          this.container = t, this.input = e, this.results = n, this.results.hidden = !0, this.input.setAttribute("autocomplete", "off"), this.input.setAttribute("spellcheck", "false"), this.interactingWithList = !1, this.onInputChange = function (t, e) {
            var n;
            return function () {
              for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++) {
                i[r] = arguments[r];
              }

              clearTimeout(n), n = setTimeout(function () {
                clearTimeout(n), t.apply(void 0, i);
              }, e);
            };
          }(this.onInputChange.bind(this), 300), this.onResultsMouseDown = this.onResultsMouseDown.bind(this), this.onInputBlur = this.onInputBlur.bind(this), this.onInputFocus = this.onInputFocus.bind(this), this.onKeydown = this.onKeydown.bind(this), this.onCommit = this.onCommit.bind(this), this.input.addEventListener("keydown", this.onKeydown), this.input.addEventListener("focus", this.onInputFocus), this.input.addEventListener("blur", this.onInputBlur), this.input.addEventListener("input", this.onInputChange), this.results.addEventListener("mousedown", this.onResultsMouseDown), this.results.addEventListener("combobox-commit", this.onCommit);
        }

        _createClass(hn, [{
          key: "destroy",
          value: function destroy() {
            this.input.removeEventListener("keydown", this.onKeydown), this.input.removeEventListener("focus", this.onInputFocus), this.input.removeEventListener("blur", this.onInputBlur), this.input.removeEventListener("input", this.onInputChange), this.results.removeEventListener("mousedown", this.onResultsMouseDown), this.results.removeEventListener("combobox-commit", this.onCommit);
          }
        }, {
          key: "sibling",
          value: function sibling(t) {
            var e = Array.from(this.results.querySelectorAll('[role="option"]')),
                n = this.results.querySelector('[aria-selected="true"]'),
                o = e.indexOf(n),
                i = t ? e[o + 1] : e[o - 1],
                r = t ? e[0] : e[e.length - 1];
            return i || r;
          }
        }, {
          key: "onKeydown",
          value: function onKeydown(t) {
            "Escape" === t.key && this.container.open && (this.container.open = !1, t.stopPropagation(), t.preventDefault());
          }
        }, {
          key: "onInputFocus",
          value: function onInputFocus() {
            this.fetchResults();
          }
        }, {
          key: "onInputBlur",
          value: function onInputBlur() {
            this.interactingWithList ? this.interactingWithList = !1 : this.container.open = !1;
          }
        }, {
          key: "onCommit",
          value: function onCommit(t) {
            var e = t.target;
            var n = e;
            if (!_instanceof(n, HTMLElement)) return;
            if (this.container.open = !1, _instanceof(n, HTMLAnchorElement)) return;
            var o = n.getAttribute("data-autocomplete-value") || n.textContent;
            this.container.value = o;
          }
        }, {
          key: "onResultsMouseDown",
          value: function onResultsMouseDown() {
            this.interactingWithList = !0;
          }
        }, {
          key: "onInputChange",
          value: function onInputChange() {
            this.container.removeAttribute("value"), this.fetchResults();
          }
        }, {
          key: "identifyOptions",
          value: function identifyOptions() {
            var t = 0;
            var _iteratorNormalCompletion17 = true;
            var _didIteratorError17 = false;
            var _iteratorError17 = undefined;

            try {
              for (var _iterator17 = this.results.querySelectorAll('[role="option"]:not([id])')[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                var e = _step17.value;
                e.id = "".concat(this.results.id, "-option-").concat(t++);
              }
            } catch (err) {
              _didIteratorError17 = true;
              _iteratorError17 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion17 && _iterator17["return"] != null) {
                  _iterator17["return"]();
                }
              } finally {
                if (_didIteratorError17) {
                  throw _iteratorError17;
                }
              }
            }
          }
        }, {
          key: "fetchResults",
          value: function fetchResults() {
            var _this7 = this;

            var t = this.input.value.trim();
            if (!t) return void (this.container.open = !1);
            var e = this.container.src;
            if (!e) return;
            var n = new URL(e, window.location.href),
                o = new URLSearchParams(n.search.slice(1));
            o.append("q", t), n.search = o.toString(), this.container.dispatchEvent(new CustomEvent("loadstart")), on(this.input, n.toString()).then(function (t) {
              _this7.results.innerHTML = t, _this7.identifyOptions();
              var e = !!_this7.results.querySelector('[role="option"]');
              _this7.container.open = e, _this7.container.dispatchEvent(new CustomEvent("load")), _this7.container.dispatchEvent(new CustomEvent("loadend"));
            })["catch"](function () {
              _this7.container.dispatchEvent(new CustomEvent("error")), _this7.container.dispatchEvent(new CustomEvent("loadend"));
            });
          }
        }, {
          key: "open",
          value: function open() {
            var t, e;
            this.results.hidden && (t = this.input, e = this.results, t.addEventListener("compositionstart", fn), t.addEventListener("compositionend", fn), t.addEventListener("keydown", cn), e.addEventListener("click", ln), this.results.hidden = !1, this.container.setAttribute("aria-expanded", "true"));
          }
        }, {
          key: "close",
          value: function close() {
            var t, e;
            this.results.hidden || (t = this.input, e = this.results, t.removeAttribute("aria-activedescendant"), t.removeEventListener("compositionstart", fn), t.removeEventListener("compositionend", fn), t.removeEventListener("keydown", cn), e.removeEventListener("click", ln), this.results.hidden = !0, this.input.removeAttribute("aria-activedescendant"), this.container.setAttribute("aria-expanded", "false"));
          }
        }]);

        return hn;
      }();

      var pn = new WeakMap();

      var AutocompleteElement =
      /*#__PURE__*/
      function (_HTMLElement) {
        _inherits(AutocompleteElement, _HTMLElement);

        function AutocompleteElement() {
          _classCallCheck(this, AutocompleteElement);

          return _possibleConstructorReturn(this, _getPrototypeOf(AutocompleteElement).call(this));
        }

        _createClass(AutocompleteElement, [{
          key: "connectedCallback",
          value: function connectedCallback() {
            var t = this.getAttribute("aria-owns");
            if (!t) return;
            var e = this.querySelector("input"),
                n = document.getElementById(t);
            _instanceof(e, HTMLInputElement) && n && (e.setAttribute("aria-owns", t), pn.set(this, new hn(this, e, n)), this.setAttribute("role", "combobox"), this.setAttribute("aria-haspopup", "listbox"), this.setAttribute("aria-expanded", "false"), e.setAttribute("aria-autocomplete", "list"), e.setAttribute("aria-controls", t), n.setAttribute("role", "listbox"));
          }
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            var t = pn.get(this);
            t && (t.destroy(), pn["delete"](this));
          }
        }, {
          key: "attributeChangedCallback",
          value: function attributeChangedCallback(t, e, n) {
            if (e === n) return;
            var o = pn.get(this);
            if (o) switch (t) {
              case "open":
                null === n ? o.close() : o.open();
                break;

              case "value":
                null !== n && (o.input.value = n), this.dispatchEvent(new en("auto-complete-change", {
                  bubbles: !0,
                  relatedTarget: o.input
                }));
            }
          }
        }, {
          key: "src",
          get: function get() {
            return this.getAttribute("src") || "";
          },
          set: function set(t) {
            this.setAttribute("src", t);
          }
        }, {
          key: "value",
          get: function get() {
            return this.getAttribute("value") || "";
          },
          set: function set(t) {
            this.setAttribute("value", t);
          }
        }, {
          key: "open",
          get: function get() {
            return this.hasAttribute("open");
          },
          set: function set(t) {
            t ? this.setAttribute("open", "") : this.removeAttribute("open");
          }
        }], [{
          key: "observedAttributes",
          get: function get() {
            return ["open", "value"];
          }
        }]);

        return AutocompleteElement;
      }(_wrapNativeSuper(HTMLElement));

      window.customElements.get("auto-complete") || (window.AutocompleteElement = AutocompleteElement, window.customElements.define("auto-complete", AutocompleteElement)), t("L", AutocompleteElement);
      var mn = "data-close-dialog",
          gn = "[".concat(mn, "]");

      function vn(t) {
        var e = Array.from(t.querySelectorAll("[autofocus]")).filter(bn)[0];
        e || (e = t, t.setAttribute("tabindex", "-1")), e.focus();
      }

      function wn(t) {
        var e = t.currentTarget;
        _instanceof(e, Element) && ("Escape" === t.key || "Esc" === t.key ? (xn(e, !1), t.stopPropagation()) : "Tab" === t.key && function (t) {
          if (!_instanceof(t.currentTarget, Element)) return;
          var e = t.currentTarget.querySelector("details-dialog");
          if (!e) return;
          t.preventDefault();
          var n = Array.from(e.querySelectorAll("*")).filter(bn);
          if (0 === n.length) return;
          var o = t.shiftKey ? -1 : 1,
              i = e.contains(document.activeElement) ? document.activeElement : null;
          var r = -1 === o ? -1 : 0;

          if (i) {
            var _t22 = n.indexOf(i);

            -1 !== _t22 && (r = _t22 + o);
          }

          r < 0 ? r = n.length - 1 : r %= n.length;
          n[r].focus();
        }(t));
      }

      function bn(t) {
        return t.tabIndex >= 0 && !t.disabled && function (t) {
          return !t.hidden && (!t.type || "hidden" !== t.type) && (t.offsetWidth > 0 || t.offsetHeight > 0);
        }(t);
      }

      function yn(t) {
        var e = t.querySelector("details-dialog");
        return !_instanceof(e, DetailsDialogElement) || e.dispatchEvent(new CustomEvent("details-dialog-close", {
          bubbles: !0,
          cancelable: !0
        }));
      }

      function En(t) {
        if (!_instanceof(t.currentTarget, Element)) return;
        var e = t.currentTarget.closest("details[open]");
        e && (yn(e) || (t.preventDefault(), t.stopPropagation()));
      }

      function Tn(t) {
        var e = t.currentTarget;
        if (!_instanceof(e, Element)) return;
        var n = e.querySelector("details-dialog");
        if (_instanceof(n, DetailsDialogElement)) if (e.hasAttribute("open")) document.activeElement && _n.set(n, {
          details: e,
          activeElement: document.activeElement
        }), vn(n), e.addEventListener("keydown", wn);else {
          var _iteratorNormalCompletion18 = true;
          var _didIteratorError18 = false;
          var _iteratorError18 = undefined;

          try {
            for (var _iterator18 = n.querySelectorAll("form")[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
              var _e11 = _step18.value;
              _instanceof(_e11, HTMLFormElement) && _e11.reset();
            }
          } catch (err) {
            _didIteratorError18 = true;
            _iteratorError18 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion18 && _iterator18["return"] != null) {
                _iterator18["return"]();
              }
            } finally {
              if (_didIteratorError18) {
                throw _iteratorError18;
              }
            }
          }

          var _t23 = function (t, e) {
            var n = _n.get(e);

            return n && _instanceof(n.activeElement, HTMLElement) ? n.activeElement : t.querySelector("summary");
          }(e, n);

          _t23 && _t23.focus(), e.removeEventListener("keydown", wn);
        }
      }

      function xn(t, e) {
        e !== t.hasAttribute("open") && (e ? t.setAttribute("open", "") : yn(t) && t.removeAttribute("open"));
      }

      function kn(t) {
        var e = t.currentTarget;
        if (!_instanceof(e, Element)) return;
        var n = e.querySelector("details-dialog");
        if (!_instanceof(n, DetailsDialogElement)) return;
        var o = n.querySelector("include-fragment:not([src])");
        if (!o) return;
        var i = n.src;
        null !== i && (o.addEventListener("loadend", function () {
          e.hasAttribute("open") && vn(n);
        }), o.setAttribute("src", i));
      }

      function Ln(t, e, n) {
        An(t), e && t.addEventListener("toggle", kn, {
          once: !0
        }), e && n && t.addEventListener("mouseover", kn, {
          once: !0
        });
      }

      function An(t) {
        t.removeEventListener("toggle", kn), t.removeEventListener("mouseover", kn);
      }

      var _n = new WeakMap();

      var DetailsDialogElement =
      /*#__PURE__*/
      function (_HTMLElement2) {
        _inherits(DetailsDialogElement, _HTMLElement2);

        _createClass(DetailsDialogElement, null, [{
          key: "CLOSE_ATTR",
          get: function get() {
            return mn;
          }
        }, {
          key: "CLOSE_SELECTOR",
          get: function get() {
            return gn;
          }
        }]);

        function DetailsDialogElement() {
          var _this8;

          _classCallCheck(this, DetailsDialogElement);

          _this8 = _possibleConstructorReturn(this, _getPrototypeOf(DetailsDialogElement).call(this)), _n.set(_assertThisInitialized(_this8), {
            details: null,
            activeElement: null
          }), _this8.addEventListener("click", function (t) {
            var e = t.target;
            if (!_instanceof(e, Element)) return;
            var n = e.closest("details");
            n && e.closest(gn) && xn(n, !1);
          });
          return _this8;
        }

        _createClass(DetailsDialogElement, [{
          key: "connectedCallback",
          value: function connectedCallback() {
            this.setAttribute("role", "dialog"), this.setAttribute("aria-modal", "true");

            var t = _n.get(this);

            if (!t) return;
            var e = this.parentElement;
            if (!e) return;
            var n = e.querySelector("summary");
            n && (n.hasAttribute("role") || n.setAttribute("role", "button"), n.addEventListener("click", En, {
              capture: !0
            })), e.addEventListener("toggle", Tn), t.details = e, Ln(e, this.src, this.preload);
          }
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            var t = _n.get(this);

            if (!t) return;
            var e = t.details;
            if (!e) return;
            e.removeEventListener("toggle", Tn), An(e);
            var n = e.querySelector("summary");
            n && n.removeEventListener("click", En, {
              capture: !0
            }), t.details = null;
          }
        }, {
          key: "toggle",
          value: function toggle(t) {
            var e = _n.get(this);

            if (!e) return;
            var n = e.details;
            n && xn(n, t);
          }
        }, {
          key: "attributeChangedCallback",
          value: function attributeChangedCallback() {
            var t = _n.get(this);

            if (!t) return;
            var e = t.details;
            e && Ln(e, this.src, this.preload);
          }
        }, {
          key: "src",
          get: function get() {
            return this.getAttribute("src");
          },
          set: function set(t) {
            this.setAttribute("src", t);
          }
        }, {
          key: "preload",
          get: function get() {
            return this.hasAttribute("preload");
          },
          set: function set(t) {
            t ? this.setAttribute("preload", "") : this.removeAttribute("preload");
          }
        }], [{
          key: "observedAttributes",
          get: function get() {
            return ["src", "preload"];
          }
        }]);

        return DetailsDialogElement;
      }(_wrapNativeSuper(HTMLElement));

      t("bb", DetailsDialogElement), window.customElements.get("details-dialog") || (window.DetailsDialogElement = DetailsDialogElement, window.customElements.define("details-dialog", DetailsDialogElement));

      var FilterInputElement =
      /*#__PURE__*/
      function (_HTMLElement3) {
        _inherits(FilterInputElement, _HTMLElement3);

        function FilterInputElement() {
          var _this9;

          _classCallCheck(this, FilterInputElement);

          _this9 = _possibleConstructorReturn(this, _getPrototypeOf(FilterInputElement).call(this)), _this9.currentQuery = null, _this9.filter = null, _this9.debounceInputChange = function (t) {
            var e;
            return function () {
              clearTimeout(e), e = setTimeout(function () {
                clearTimeout(e), t();
              }, 300);
            };
          }(function () {
            return Sn(_assertThisInitialized(_this9), !0);
          }), _this9.boundFilterResults = function () {
            Sn(_assertThisInitialized(_this9), !1);
          };
          return _this9;
        }

        _createClass(FilterInputElement, [{
          key: "attributeChangedCallback",
          value: function attributeChangedCallback(t, e) {
            e && "aria-owns" === t && Sn(this, !1);
          }
        }, {
          key: "connectedCallback",
          value: function connectedCallback() {
            var t = this.input;
            t && (t.setAttribute("autocomplete", "off"), t.setAttribute("spellcheck", "false"), t.addEventListener("focus", this.boundFilterResults), t.addEventListener("change", this.boundFilterResults), t.addEventListener("input", this.debounceInputChange));
          }
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            var t = this.input;
            t && (t.removeEventListener("focus", this.boundFilterResults), t.removeEventListener("change", this.boundFilterResults), t.removeEventListener("input", this.debounceInputChange));
          }
        }, {
          key: "reset",
          value: function reset() {
            var t = this.input;
            t && (t.value = "", t.dispatchEvent(new Event("change", {
              bubbles: !0
            })));
          }
        }, {
          key: "input",
          get: function get() {
            var t = this.querySelector("input");
            return _instanceof(t, HTMLInputElement) ? t : null;
          }
        }], [{
          key: "observedAttributes",
          get: function get() {
            return ["aria-owns"];
          }
        }]);

        return FilterInputElement;
      }(_wrapNativeSuper(HTMLElement));

      function Sn(_x26) {
        return _Sn.apply(this, arguments);
      }

      function _Sn() {
        _Sn = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee27(t) {
          var e,
              n,
              o,
              i,
              r,
              s,
              a,
              c,
              l,
              u,
              _i20,
              _Array$from,
              _h,
              _t45,
              d,
              f,
              _args28 = arguments;

          return regeneratorRuntime.wrap(function _callee27$(_context28) {
            while (1) {
              switch (_context28.prev = _context28.next) {
                case 0:
                  e = _args28.length > 1 && _args28[1] !== undefined ? _args28[1] : !1;
                  n = t.input;

                  if (n) {
                    _context28.next = 4;
                    break;
                  }

                  return _context28.abrupt("return");

                case 4:
                  o = n.value.trim(), i = t.getAttribute("aria-owns");

                  if (i) {
                    _context28.next = 7;
                    break;
                  }

                  return _context28.abrupt("return");

                case 7:
                  r = document.getElementById(i);

                  if (r) {
                    _context28.next = 10;
                    break;
                  }

                  return _context28.abrupt("return");

                case 10:
                  s = r.hasAttribute("data-filter-list") ? r : r.querySelector("[data-filter-list]");

                  if (s) {
                    _context28.next = 13;
                    break;
                  }

                  return _context28.abrupt("return");

                case 13:
                  if (!(t.dispatchEvent(new CustomEvent("filter-input-start", {
                    bubbles: !0
                  })), e && t.currentQuery === o)) {
                    _context28.next = 15;
                    break;
                  }

                  return _context28.abrupt("return");

                case 15:
                  t.currentQuery = o;
                  a = t.filter || Cn, c = s.childElementCount;
                  l = 0, u = !1;
                  _i20 = 0, _Array$from = Array.from(s.children);

                case 19:
                  if (!(_i20 < _Array$from.length)) {
                    _context28.next = 28;
                    break;
                  }

                  _h = _Array$from[_i20];

                  if (_instanceof(_h, HTMLElement)) {
                    _context28.next = 23;
                    break;
                  }

                  return _context28.abrupt("continue", 25);

                case 23:
                  _t45 = a(_h, jn(_h), o);
                  !0 === _t45.hideNew && (u = _t45.hideNew), _h.hidden = !_t45.match, _t45.match && l++;

                case 25:
                  _i20++;
                  _context28.next = 19;
                  break;

                case 28:
                  d = r.querySelector("[data-filter-new-item]"), f = !!d && o.length > 0 && !u;
                  _instanceof(d, HTMLElement) && (d.hidden = !f, f && function (t, e) {
                    var n = t.querySelector("[data-filter-new-item-text]");
                    n && (n.textContent = e);
                    var o = t.querySelector("[data-filter-new-item-value]");
                    (_instanceof(o, HTMLInputElement) || _instanceof(o, HTMLButtonElement)) && (o.value = e);
                  }(d, o)), function (t, e) {
                    var n = t.querySelector("[data-filter-empty-state]");
                    _instanceof(n, HTMLElement) && (n.hidden = e);
                  }(r, l > 0 || f), t.dispatchEvent(new CustomEvent("filter-input-updated", {
                    bubbles: !0,
                    detail: {
                      count: l,
                      total: c
                    }
                  }));

                case 30:
                case "end":
                  return _context28.stop();
              }
            }
          }, _callee27);
        }));
        return _Sn.apply(this, arguments);
      }

      function Cn(t, e, n) {
        return {
          match: -1 !== e.toLowerCase().indexOf(n.toLowerCase()),
          hideNew: e === n
        };
      }

      function jn(t) {
        return ((t.querySelector("[data-filter-item-text]") || t).textContent || "").trim();
      }

      t("Y", FilterInputElement), window.customElements.get("filter-input") || (window.FilterInputElement = FilterInputElement, window.customElements.define("filter-input", FilterInputElement));
      var Dn = new WeakMap();

      function Mn(t, e) {
        setTimeout(function () {
          e.dispatchEvent(new Event(t));
        }, 0);
      }

      function Hn(t) {
        return On(t).then(function (e) {
          var n = t.parentNode;
          n && (t.insertAdjacentHTML("afterend", e), n.removeChild(t));
        }, function () {
          t.classList.add("is-error");
        });
      }

      function On(t) {
        var e = t.src;
        var n = Dn.get(t);
        return n && n.src === e ? n.data : (n = e ? t.load() : Promise.reject(new Error("missing src")), Dn.set(t, {
          src: e,
          data: n
        }), n);
      }

      var IncludeFragmentElement =
      /*#__PURE__*/
      function (_HTMLElement4) {
        _inherits(IncludeFragmentElement, _HTMLElement4);

        function IncludeFragmentElement() {
          _classCallCheck(this, IncludeFragmentElement);

          return _possibleConstructorReturn(this, _getPrototypeOf(IncludeFragmentElement).call(this));
        }

        _createClass(IncludeFragmentElement, [{
          key: "attributeChangedCallback",
          value: function attributeChangedCallback(t) {
            "src" === t && this._attached && Hn(this);
          }
        }, {
          key: "connectedCallback",
          value: function connectedCallback() {
            this._attached = !0, this.src && Hn(this);
          }
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            this._attached = !1;
          }
        }, {
          key: "request",
          value: function request() {
            var t = this.src;
            if (!t) throw new Error("missing src");
            return new Request(t, {
              method: "GET",
              credentials: "same-origin",
              headers: {
                Accept: this.accept || "text/html"
              }
            });
          }
        }, {
          key: "load",
          value: function load() {
            var _this10 = this;

            return Promise.resolve().then(function () {
              return Mn("loadstart", _this10), _this10.fetch(_this10.request());
            }).then(function (t) {
              if (200 !== t.status) throw new Error("Failed to load resource: the server responded with a status of ".concat(t.status));
              var e = t.headers.get("Content-Type");
              if (!(function (t) {
                return t && !!t.split(",").find(function (t) {
                  return t.match(/^\s*\*\/\*/);
                });
              }(_this10.accept) || e && e.match(_this10.accept ? _this10.accept : /^text\/html/))) throw new Error("Failed to load resource: expected ".concat(_this10.accept || "text/html", " but was ").concat(e));
              return t;
            }).then(function (t) {
              return t.text();
            }).then(function (t) {
              return Mn("load", _this10), Mn("loadend", _this10), t;
            }, function (t) {
              throw Mn("error", _this10), Mn("loadend", _this10), t;
            });
          }
        }, {
          key: "fetch",
          value: function (_fetch) {
            function fetch(_x27) {
              return _fetch.apply(this, arguments);
            }

            fetch.toString = function () {
              return _fetch.toString();
            };

            return fetch;
          }(function (t) {
            return fetch(t);
          })
        }, {
          key: "src",
          get: function get() {
            var t = this.getAttribute("src");

            if (t) {
              var e = this.ownerDocument.createElement("a");
              return e.href = t, e.href;
            }

            return "";
          },
          set: function set(t) {
            this.setAttribute("src", t);
          }
        }, {
          key: "accept",
          get: function get() {
            return this.getAttribute("accept");
          },
          set: function set(t) {
            this.setAttribute("accept", t);
          }
        }, {
          key: "data",
          get: function get() {
            return On(this);
          }
        }], [{
          key: "observedAttributes",
          get: function get() {
            return ["src"];
          }
        }]);

        return IncludeFragmentElement;
      }(_wrapNativeSuper(HTMLElement));

      t("I", IncludeFragmentElement), window.customElements.get("include-fragment") || (window.IncludeFragmentElement = IncludeFragmentElement, window.customElements.define("include-fragment", IncludeFragmentElement));
      var Nn = new WeakMap();

      var RemoteInputElement =
      /*#__PURE__*/
      function (_HTMLElement5) {
        _inherits(RemoteInputElement, _HTMLElement5);

        function RemoteInputElement() {
          var _this11;

          _classCallCheck(this, RemoteInputElement);

          _this11 = _possibleConstructorReturn(this, _getPrototypeOf(RemoteInputElement).call(this));
          var t = In.bind(null, _assertThisInitialized(_this11), !0),
              e = {
            currentQuery: null,
            oninput: Pn(t),
            fetch: t,
            controller: null
          };
          Nn.set(_assertThisInitialized(_this11), e);
          return _this11;
        }

        _createClass(RemoteInputElement, [{
          key: "attributeChangedCallback",
          value: function attributeChangedCallback(t, e) {
            e && "src" === t && In(this, !1);
          }
        }, {
          key: "connectedCallback",
          value: function connectedCallback() {
            var t = this.input;
            if (!t) return;
            t.setAttribute("autocomplete", "off"), t.setAttribute("spellcheck", "false");
            var e = Nn.get(this);
            e && (t.addEventListener("focus", e.fetch), t.addEventListener("change", e.fetch), t.addEventListener("input", e.oninput));
          }
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            var t = this.input;
            if (!t) return;
            var e = Nn.get(this);
            e && (t.removeEventListener("focus", e.fetch), t.removeEventListener("change", e.fetch), t.removeEventListener("input", e.oninput));
          }
        }, {
          key: "input",
          get: function get() {
            var t = this.querySelector("input, textarea");
            return _instanceof(t, HTMLInputElement) || _instanceof(t, HTMLTextAreaElement) ? t : null;
          }
        }, {
          key: "src",
          get: function get() {
            return this.getAttribute("src") || "";
          },
          set: function set(t) {
            this.setAttribute("src", t);
          }
        }], [{
          key: "observedAttributes",
          get: function get() {
            return ["src"];
          }
        }]);

        return RemoteInputElement;
      }(_wrapNativeSuper(HTMLElement));

      function In(_x28, _x29) {
        return _In.apply(this, arguments);
      }

      function _In() {
        _In = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee29(t, e) {
          var n, o, i, r, s, a, c, l, u;
          return regeneratorRuntime.wrap(function _callee29$(_context30) {
            while (1) {
              switch (_context30.prev = _context30.next) {
                case 0:
                  n = t.input;

                  if (n) {
                    _context30.next = 3;
                    break;
                  }

                  return _context30.abrupt("return");

                case 3:
                  o = Nn.get(t);

                  if (o) {
                    _context30.next = 6;
                    break;
                  }

                  return _context30.abrupt("return");

                case 6:
                  i = n.value;

                  if (!(e && o.currentQuery === i)) {
                    _context30.next = 9;
                    break;
                  }

                  return _context30.abrupt("return");

                case 9:
                  o.currentQuery = i;
                  r = t.src;

                  if (r) {
                    _context30.next = 13;
                    break;
                  }

                  return _context30.abrupt("return");

                case 13:
                  s = document.getElementById(t.getAttribute("aria-owns") || "");

                  if (s) {
                    _context30.next = 16;
                    break;
                  }

                  return _context30.abrupt("return");

                case 16:
                  a = new URL(r, window.location.href), c = new URLSearchParams(a.search);
                  c.append(t.getAttribute("param") || "q", i), a.search = c.toString(), o.controller ? o.controller.abort() : (t.dispatchEvent(new CustomEvent("loadstart")), t.setAttribute("loading", "")), o.controller = "AbortController" in window ? new AbortController() : {
                    signal: null,
                    abort: function abort() {}
                  };
                  u = "";
                  _context30.prev = 19;
                  _context30.next = 22;
                  return function () {
                    var _ref21 = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee28(t, e, n) {
                      var _o24;

                      return regeneratorRuntime.wrap(function _callee28$(_context29) {
                        while (1) {
                          switch (_context29.prev = _context29.next) {
                            case 0:
                              _context29.prev = 0;
                              _context29.next = 3;
                              return fetch(e, n);

                            case 3:
                              _o24 = _context29.sent;
                              return _context29.abrupt("return", (t.dispatchEvent(new CustomEvent("load")), t.dispatchEvent(new CustomEvent("loadend")), _o24));

                            case 7:
                              _context29.prev = 7;
                              _context29.t0 = _context29["catch"](0);
                              throw "AbortError" !== _context29.t0.name && (t.dispatchEvent(new CustomEvent("error")), t.dispatchEvent(new CustomEvent("loadend"))), _context29.t0;

                            case 10:
                            case "end":
                              return _context29.stop();
                          }
                        }
                      }, _callee28, null, [[0, 7]]);
                    }));

                    return function (_x37, _x38, _x39) {
                      return _ref21.apply(this, arguments);
                    };
                  }()(t, a.toString(), {
                    signal: o.controller.signal,
                    credentials: "same-origin",
                    headers: {
                      accept: "text/html; fragment"
                    }
                  });

                case 22:
                  l = _context30.sent;
                  _context30.next = 25;
                  return l.text();

                case 25:
                  u = _context30.sent;
                  t.removeAttribute("loading");
                  o.controller = null;
                  _context30.next = 33;
                  break;

                case 30:
                  _context30.prev = 30;
                  _context30.t0 = _context30["catch"](19);
                  return _context30.abrupt("return", void ("AbortError" !== _context30.t0.name && (t.removeAttribute("loading"), o.controller = null)));

                case 33:
                  l && l.ok ? (s.innerHTML = u, t.dispatchEvent(new CustomEvent("remote-input-success", {
                    bubbles: !0
                  }))) : t.dispatchEvent(new CustomEvent("remote-input-error", {
                    bubbles: !0
                  }));

                case 34:
                case "end":
                  return _context30.stop();
              }
            }
          }, _callee29, null, [[19, 30]]);
        }));
        return _In.apply(this, arguments);
      }

      function Pn(t) {
        var e;
        return function () {
          clearTimeout(e), e = setTimeout(function () {
            clearTimeout(e), t();
          }, 300);
        };
      }

      t("T", RemoteInputElement), window.customElements.get("remote-input") || (window.RemoteInputElement = RemoteInputElement, window.customElements.define("remote-input", RemoteInputElement));
      var qn = new WeakMap();
      var Rn = null;

      function Vn(t, e) {
        return t.closest("task-lists") === e.closest("task-lists");
      }

      function Fn(t) {
        if (t.currentTarget !== t.target) return;
        var e = t.currentTarget;
        if (!_instanceof(e, Element)) return;
        var n = e.closest(".contains-task-list");
        if (!n) return;
        if (e.classList.add("is-ghost"), t.dataTransfer && t.dataTransfer.setData("text/plain", e.textContent.trim()), !e.parentElement) return;
        var o = Array.from(e.parentElement.children),
            i = o.indexOf(e),
            r = qn.get(e);
        r && r.sortStarted(n), Rn = {
          didDrop: !1,
          dragging: e,
          dropzone: e,
          sourceList: n,
          sourceSibling: o[i + 1] || null,
          sourceIndex: i
        };
      }

      function Bn(t) {
        if (!Rn) return;
        var e = t.currentTarget;
        _instanceof(e, Element) && (Vn(Rn.dragging, e) ? (t.preventDefault(), t.dataTransfer && (t.dataTransfer.dropEffect = "move"), Rn.dropzone !== e && (Rn.dragging.classList.add("is-dragging"), Rn.dropzone = e, !function (t, e) {
          if (t.parentNode === e.parentNode) {
            var _n17 = t;

            for (; _n17;) {
              if (_n17 === e) return !0;
              _n17 = _n17.previousElementSibling;
            }
          }

          return !1;
        }(Rn.dragging, e) ? e.after(Rn.dragging) : e.before(Rn.dragging))) : t.stopPropagation());
      }

      function $n(t) {
        if (!Rn) return;
        t.preventDefault(), t.stopPropagation();
        var e = t.currentTarget;
        if (!_instanceof(e, Element)) return;
        if (Rn.didDrop = !0, !Rn.dragging.parentElement) return;
        var n = Array.from(Rn.dragging.parentElement.children).indexOf(Rn.dragging);
        var o = e.closest(".contains-task-list");
        if (!o) return;
        if (Rn.sourceIndex === n && Rn.sourceList === o) return;
        Rn.sourceList === o && Rn.sourceIndex < n && n++;
        var i = {
          list: Rn.sourceList,
          index: Rn.sourceIndex
        },
            r = {
          list: o,
          index: n
        },
            s = qn.get(Rn.dragging);
        s && s.sortFinished({
          src: i,
          dst: r
        });
      }

      function Un() {
        Rn && (Rn.dragging.classList.remove("is-dragging"), Rn.dragging.classList.remove("is-ghost"), Rn.didDrop || Rn.sourceList.insertBefore(Rn.dragging, Rn.sourceSibling), Rn = null);
      }

      function Wn(t) {
        if (!Rn) return;
        var e = t.currentTarget;
        _instanceof(e, Element) && (Vn(Rn.dragging, e) ? (t.preventDefault(), t.dataTransfer && (t.dataTransfer.dropEffect = "move")) : t.stopPropagation());
      }

      var Xn = new WeakMap();

      var TaskListsElement =
      /*#__PURE__*/
      function (_HTMLElement6) {
        _inherits(TaskListsElement, _HTMLElement6);

        function TaskListsElement() {
          var _this12;

          _classCallCheck(this, TaskListsElement);

          _this12 = _possibleConstructorReturn(this, _getPrototypeOf(TaskListsElement).call(this)), _this12.addEventListener("change", function (t) {
            var e = t.target;
            _instanceof(e, HTMLInputElement) && e.classList.contains("task-list-item-checkbox") && _this12.dispatchEvent(new CustomEvent("task-lists-check", {
              bubbles: !0,
              detail: {
                position: Zn(e),
                checked: e.checked
              }
            }));
          }), Xn.set(_assertThisInitialized(_this12), new MutationObserver(eo.bind(null, _assertThisInitialized(_this12))));
          return _this12;
        }

        _createClass(TaskListsElement, [{
          key: "connectedCallback",
          value: function connectedCallback() {
            var t = Xn.get(this);
            t && t.observe(this, {
              childList: !0,
              subtree: !0
            }), eo(this);
          }
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            var t = Xn.get(this);
            t && t.disconnect();
          }
        }, {
          key: "attributeChangedCallback",
          value: function attributeChangedCallback(t, e, n) {
            if (e !== n) switch (t) {
              case "disabled":
                no(this);
            }
          }
        }, {
          key: "disabled",
          get: function get() {
            return this.hasAttribute("disabled");
          },
          set: function set(t) {
            t ? this.setAttribute("disabled", "") : this.removeAttribute("disabled");
          }
        }, {
          key: "sortable",
          get: function get() {
            return this.hasAttribute("sortable");
          },
          set: function set(t) {
            t ? this.setAttribute("sortable", "") : this.removeAttribute("sortable");
          }
        }], [{
          key: "observedAttributes",
          get: function get() {
            return ["disabled"];
          }
        }]);

        return TaskListsElement;
      }(_wrapNativeSuper(HTMLElement));

      var Kn = document.createElement("template");
      Kn.innerHTML = '\n  <span class="handle">\n    <svg class="drag-handle" aria-hidden="true" width="16" height="15" version="1.1" viewBox="0 0 16 15">\n      <path d="M12,4V5H4V4h8ZM4,8h8V7H4V8Zm0,3h8V10H4v1Z"></path>\n    </svg>\n  </span>';
      var Gn = new WeakMap();

      function Yn(t) {
        if (Gn.get(t)) return;
        Gn.set(t, !0);
        var e = t.closest("task-lists");
        if (!_instanceof(e, TaskListsElement)) return;
        if (e.querySelectorAll(".task-list-item").length <= 1) return;
        var n = Kn.content.cloneNode(!0),
            o = n.querySelector(".handle");
        if (t.prepend(n), !o) throw new Error("handle not found");
        o.addEventListener("mouseenter", ao), o.addEventListener("mouseleave", co), function (t, e, n) {
          qn.set(t, {
            sortStarted: e,
            sortFinished: n
          }), t.addEventListener("dragstart", Fn), t.addEventListener("dragenter", Bn), t.addEventListener("dragend", Un), t.addEventListener("drop", $n), t.addEventListener("dragover", Wn);
        }(t, ro, so), t.addEventListener("mouseenter", zn), t.addEventListener("mouseleave", Jn);
      }

      function zn(t) {
        var e = t.currentTarget;
        if (!_instanceof(e, Element)) return;
        var n = e.closest("task-lists");
        _instanceof(n, TaskListsElement) && n.sortable && !n.disabled && e.classList.add("hovered");
      }

      function Jn(t) {
        var e = t.currentTarget;
        _instanceof(e, Element) && e.classList.remove("hovered");
      }

      function Zn(t) {
        var e = Qn(t);
        if (!e) throw new Error(".contains-task-list not found");
        var n = Array.from(e.children).indexOf(t.closest(".task-list-item"));
        return [oo(e), n];
      }

      function Qn(t) {
        var e = t.parentElement;
        return e ? e.closest(".contains-task-list") : null;
      }

      function to(t) {
        return Qn(t) === function t(e) {
          var n = Qn(e);
          return n ? t(n) || n : null;
        }(t);
      }

      function eo(t) {
        var e = t.querySelectorAll(".contains-task-list > .task-list-item");
        var _iteratorNormalCompletion19 = true;
        var _didIteratorError19 = false;
        var _iteratorError19 = undefined;

        try {
          for (var _iterator19 = e[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
            var _n18 = _step19.value;
            to(_n18) && Yn(_n18);
          }
        } catch (err) {
          _didIteratorError19 = true;
          _iteratorError19 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion19 && _iterator19["return"] != null) {
              _iterator19["return"]();
            }
          } finally {
            if (_didIteratorError19) {
              throw _iteratorError19;
            }
          }
        }

        no(t);
      }

      function no(t) {
        var _iteratorNormalCompletion20 = true;
        var _didIteratorError20 = false;
        var _iteratorError20 = undefined;

        try {
          for (var _iterator20 = t.querySelectorAll(".task-list-item")[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
            var e = _step20.value;
            e.classList.toggle("enabled", !t.disabled);
          }
        } catch (err) {
          _didIteratorError20 = true;
          _iteratorError20 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion20 && _iterator20["return"] != null) {
              _iterator20["return"]();
            }
          } finally {
            if (_didIteratorError20) {
              throw _iteratorError20;
            }
          }
        }

        var _iteratorNormalCompletion21 = true;
        var _didIteratorError21 = false;
        var _iteratorError21 = undefined;

        try {
          for (var _iterator21 = t.querySelectorAll(".task-list-item-checkbox")[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
            var _e12 = _step21.value;
            _instanceof(_e12, HTMLInputElement) && (_e12.disabled = t.disabled);
          }
        } catch (err) {
          _didIteratorError21 = true;
          _iteratorError21 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion21 && _iterator21["return"] != null) {
              _iterator21["return"]();
            }
          } finally {
            if (_didIteratorError21) {
              throw _iteratorError21;
            }
          }
        }
      }

      function oo(t) {
        var e = t.closest("task-lists");
        if (!e) throw new Error("parent not found");
        return Array.from(e.querySelectorAll("ol, ul")).indexOf(t);
      }

      var io = new WeakMap();

      function ro(t) {
        var e = t.closest("task-lists");
        if (!e) throw new Error("parent not found");
        io.set(e, Array.from(e.querySelectorAll("ol, ul")));
      }

      function so(t) {
        var e = t.src,
            n = t.dst;
        var o = e.list.closest("task-lists");
        if (!o) return;
        var i = io.get(o);
        i && (io["delete"](o), o.dispatchEvent(new CustomEvent("task-lists-move", {
          bubbles: !0,
          detail: {
            src: [i.indexOf(e.list), e.index],
            dst: [i.indexOf(n.list), n.index]
          }
        })));
      }

      function ao(t) {
        var e = t.currentTarget;
        if (!_instanceof(e, Element)) return;
        var n = e.closest(".task-list-item");
        if (!n) return;
        var o = n.closest("task-lists");
        _instanceof(o, TaskListsElement) && o.sortable && !o.disabled && n.setAttribute("draggable", "true");
      }

      function co(t) {
        if (Rn) return;
        var e = t.currentTarget;
        if (!_instanceof(e, Element)) return;
        var n = e.closest(".task-list-item");
        n && n.setAttribute("draggable", "false");
      }

      function lo(t, e) {
        if (!_instanceof(t, e)) throw new TypeError("Cannot call a class as a function");
      }

      function uo(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }

      function fo(t, e, n) {
        return e && uo(t.prototype, e), n && uo(t, n), t;
      }

      function ho(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n, t;
      }

      window.customElements.get("task-lists") || (window.TaskListsElement = TaskListsElement, window.customElements.define("task-lists", TaskListsElement));

      var po = function () {
        function t(e) {
          lo(this, t), ho(this, "parent", void 0), ho(this, "children", []), this.parent = e;
        }

        return fo(t, [{
          key: "delete",
          value: function value(t) {
            var e = this.children.indexOf(t);
            return -1 !== e && (this.children = this.children.slice(0, e).concat(this.children.slice(e + 1)), 0 === this.children.length && this.parent["delete"](this), !0);
          }
        }, {
          key: "add",
          value: function value(t) {
            return this.children.push(t), this;
          }
        }]), t;
      }();

      function mo(t) {
        if (!_instanceof(t, HTMLElement)) return !1;
        var e = t.nodeName.toLowerCase(),
            n = (t.getAttribute("type") || "").toLowerCase();
        return "select" === e || "textarea" === e || "input" === e && "submit" !== n && "reset" !== n && "checkbox" !== n && "radio" !== n || t.isContentEditable;
      }

      function go(t) {
        mo(t) ? t.focus() : (_instanceof(t, HTMLAnchorElement) && t.href || "BUTTON" === t.tagName || "SUMMARY" === t.tagName || function (t) {
          if (!_instanceof(t, HTMLElement)) return !1;
          var e = t.nodeName.toLowerCase(),
              n = (t.getAttribute("type") || "").toLowerCase();
          return "input" === e && ("checkbox" === n || "radio" === n);
        }(t)) && t.click();
      }

      function vo(t) {
        return "".concat(t.ctrlKey ? "Control+" : "").concat(t.altKey ? "Alt+" : "").concat(t.metaKey ? "Meta+" : "").concat(t.key);
      }

      var wo = new (function () {
        function t(e) {
          lo(this, t), ho(this, "parent", null), ho(this, "children", {}), this.parent = e || null;
        }

        return fo(t, [{
          key: "get",
          value: function value(t) {
            return this.children[t];
          }
        }, {
          key: "insert",
          value: function value(e) {
            for (var n = this, o = 0; o < e.length; o += 1) {
              var i = e[o],
                  r = n.get(i);
              if (o === e.length - 1) return _instanceof(r, t) && (n["delete"](r), r = null), r || (r = new po(n), n.children[i] = r), r;
              _instanceof(r, po) && (r = null), r || (r = new t(n), n.children[i] = r), n = r;
            }

            return n;
          }
        }, {
          key: "delete",
          value: function value(t) {
            for (var e in this.children) {
              if (this.children[e] === t) {
                var n = delete this.children[e];
                return 0 === Object.keys(this.children).length && this.parent && this.parent["delete"](this), n;
              }
            }

            return !1;
          }
        }]), t;
      }())(),
          bo = new WeakMap(),
          yo = wo,
          Eo = null;

      function To() {
        Eo = null, yo = wo;
      }

      function xo(t) {
        if (!(_instanceof(t.target, Node) && mo(t.target))) {
          null != Eo && clearTimeout(Eo), Eo = setTimeout(To, 1500);
          var e = yo.get(vo(t));
          if (e) return yo = e, _instanceof(e, po) ? (go(e.children[e.children.length - 1]), t.preventDefault(), void To()) : void 0;
          To();
        }
      }

      function ko() {
        var t = document.getElementById("ajax-error-message");
        t && t.classList.add("visible");
      }

      function Lo() {
        var t = document.getElementById("ajax-error-message");
        t && t.classList.remove("visible");
      }

      function Ao() {}

      Ht("deprecatedAjaxError", "[data-remote]", function (t) {
        if (!_instanceof(t, CustomEvent)) throw new Error("invariant: app/assets/modules/github/behaviors/ajax-error.js:26");
        var e = t.detail,
            n = e.error,
            o = e.text;
        t.currentTarget === t.target && "abort" !== n && "canceled" !== n && (/<html/.test(o) ? (ko(), t.stopImmediatePropagation()) : setTimeout(function () {
          t.defaultPrevented || ko();
        }, 0));
      }), Ht("deprecatedAjaxSend", "[data-remote]", function () {
        Lo();
      }), Ht("click", ".js-ajax-error-dismiss", function () {
        Lo();
      });

      var _o =
      /*#__PURE__*/
      function () {
        function _o() {
          _classCallCheck(this, _o);

          this.previousReceiver = {
            resolve: Ao,
            reject: Ao
          };
        }

        _createClass(_o, [{
          key: "push",
          value: function push(t) {
            var _this13 = this;

            return this.previousReceiver.resolve = this.previousReceiver.reject = Ao, new Promise(function (e, n) {
              var o = {
                resolve: e,
                reject: n
              };
              _this13.previousReceiver = o, t.then(function () {
                o.resolve.apply(o, arguments);
              }, function () {
                o.reject.apply(o, arguments);
              });
            });
          }
        }]);

        return _o;
      }();

      t("S", _o);

      var So = function So(t) {
        var _this14 = this;

        _classCallCheck(this, So);

        this.closed = !1, this.unsubscribe = function () {
          t(), _this14.closed = !0;
        };
      };

      function Co(t, e, n) {
        var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
        return t.addEventListener(e, n, o), new So(function () {
          t.removeEventListener(e, n, o);
        });
      }

      function jo() {
        for (var _len4 = arguments.length, t = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          t[_key4] = arguments[_key4];
        }

        return new So(function () {
          var _iteratorNormalCompletion22 = true;
          var _didIteratorError22 = false;
          var _iteratorError22 = undefined;

          try {
            for (var _iterator22 = t[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
              var e = _step22.value;
              e.unsubscribe();
            }
          } catch (err) {
            _didIteratorError22 = true;
            _iteratorError22 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion22 && _iterator22["return"] != null) {
                _iterator22["return"]();
              }
            } finally {
              if (_didIteratorError22) {
                throw _iteratorError22;
              }
            }
          }
        });
      }

      function Do(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        return Mo(t) || function (t, e) {
          var n = function (t) {
            if (_instanceof(Oo, Element)) return Oo;
            if (t && t.ownerDocument && t.ownerDocument.activeElement) return t.ownerDocument.activeElement;
            return null;
          }(t);

          return null != n && !(e && n === t) && (je(n) && n === t || t.contains(n) && !function (t) {
            if (!_instanceof(No, Element)) return !1;
            var e = t.closest(Io);
            if (!e) return !1;
            var n = No.closest(Io);
            return e === n;
          }(n));
        }(t, e) || function (t) {
          return t.matches(":active");
        }(t) || function (t) {
          return !(!t.closest(".is-dirty") && !t.querySelector(".is-dirty"));
        }(t);
      }

      function Mo(t) {
        var _iteratorNormalCompletion23 = true;
        var _didIteratorError23 = false;
        var _iteratorError23 = undefined;

        try {
          for (var _iterator23 = t.querySelectorAll("input, textarea")[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
            var e = _step23.value;
            if ((_instanceof(e, HTMLInputElement) || _instanceof(e, HTMLTextAreaElement)) && Ho(e)) return !0;
          }
        } catch (err) {
          _didIteratorError23 = true;
          _iteratorError23 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion23 && _iterator23["return"] != null) {
              _iterator23["return"]();
            }
          } finally {
            if (_didIteratorError23) {
              throw _iteratorError23;
            }
          }
        }

        return !1;
      }

      function Ho(t) {
        if (_instanceof(t, HTMLInputElement) && ("checkbox" === t.type || "radio" === t.type)) {
          if (t.checked !== t.defaultChecked) return !0;
        } else if (t.value !== t.defaultValue) return !0;

        return !1;
      }

      var Oo, No;
      document.addEventListener("mouseup", function (t) {
        No = t.target;
      });
      var Io = "a[href], button, details:not([open]) summary";
      var Po;

      function qo(t) {
        return Po || (Po = ge(document, "enabled-features").split(",")), -1 !== Po.indexOf(t);
      }

      function Ro(t, e) {
        return Vo(function (t) {
          if (t.activeElement !== t.body) return t.activeElement;
          var e = t.querySelectorAll(":hover"),
              n = e.length;
          if (n) return e[n - 1];
        }(t), e);
      }

      function Vo(t, e) {
        var n = t;
        if (!n) return Promise.resolve(e());
        var o = n.ownerDocument.documentElement;

        var i = function (t) {
          for (var e = []; t;) {
            var n = t.getBoundingClientRect(),
                o = n.top,
                i = n.left;
            e.push({
              element: t,
              top: o,
              left: i
            }), t = t.parentElement;
          }

          return e;
        }(n);

        return Promise.resolve(e()).then(function (t) {
          var e = function (t) {
            for (var e = 0; e < t.length; e++) {
              var n = t[e];
              if (o.contains(n.element)) return n;
            }
          }(i);

          if (e) {
            n = e.element;
            var r = e.top,
                s = e.left,
                a = n.getBoundingClientRect(),
                c = a.top,
                l = a.left;
            !function (t, e, n) {
              var o = t.ownerDocument,
                  i = o.defaultView;

              function r(t) {
                return t.offsetParent ? {
                  top: t.scrollTop,
                  left: t.scrollLeft
                } : {
                  top: i.pageYOffset,
                  left: i.pageXOffset
                };
              }

              function s(t, e, n) {
                if (0 === e && 0 === n) return [0, 0];
                var s = r(t),
                    a = s.top + n,
                    c = s.left + e;
                t === o || t === i || t === o.documentElement || t === o.body ? o.defaultView.scrollTo(c, a) : (t.scrollTop = a, t.scrollLeft = c);
                var l = r(t);
                return [l.left - s.left, l.top - s.top];
              }

              function a(t) {
                var e = t;

                if (e.offsetParent && e !== o.body) {
                  for (; e !== o.body;) {
                    if (!e.parentElement) return;
                    e = e.parentElement;
                    var n = i.getComputedStyle(e),
                        r = n.position,
                        s = n.overflowY,
                        a = n.overflowX;
                    if ("fixed" === r || "auto" === s || "auto" === a || "scroll" === s || "scroll" === a) break;
                  }

                  return e;
                }
              }

              var c = a(t),
                  l = 0,
                  u = 0;

              for (; c;) {
                var d = s(c, e - l, n - u);
                if (l += d[0], u += d[1], l === e && u === n) break;
                c = a(c);
              }
            }(n, l - s, c - r);
          }

          return t;
        });
      }

      var Fo = new WeakMap(),
          Bo = t("a_", {});

      function $o(t, e) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        return Ro(document, function () {
          var o = et(document, e.trim()),
              i = n && t === t.ownerDocument.activeElement ? o.querySelector("*") : null,
              r = Array.from(t.querySelectorAll("details[open][id]")).map(function (t) {
            return t.id;
          });
          "DETAILS" === t.tagName && t.id && t.hasAttribute("open") && r.push(t.id);
          var _iteratorNormalCompletion24 = true;
          var _didIteratorError24 = false;
          var _iteratorError24 = undefined;

          try {
            for (var _iterator24 = t.querySelectorAll(".js-updatable-content-preserve-scroll-position")[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
              var _e13 = _step24.value;

              var _t24 = d(_e13, "data-updatable-content-scroll-position-id");

              Uo.set(_t24, _e13.scrollTop);
            }
          } catch (err) {
            _didIteratorError24 = true;
            _iteratorError24 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion24 && _iterator24["return"] != null) {
                _iterator24["return"]();
              }
            } finally {
              if (_didIteratorError24) {
                throw _iteratorError24;
              }
            }
          }

          var _iteratorNormalCompletion25 = true;
          var _didIteratorError25 = false;
          var _iteratorError25 = undefined;

          try {
            for (var _iterator25 = r[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
              var _t25 = _step25.value;

              var _e14 = o.querySelector("#".concat(_t25));

              _e14 && _e14.setAttribute("open", "");
            }
          } catch (err) {
            _didIteratorError25 = true;
            _iteratorError25 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion25 && _iterator25["return"] != null) {
                _iterator25["return"]();
              }
            } finally {
              if (_didIteratorError25) {
                throw _iteratorError25;
              }
            }
          }

          t.replaceWith(o), i && i.focus();
        });
      }

      var Uo = new Map();

      function Wo(_x30) {
        return _Wo.apply(this, arguments);
      }

      function _Wo() {
        _Wo = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee30(t) {
          var _n$classList, _o$classList;

          var e, n, o, i, r;
          return regeneratorRuntime.wrap(function _callee30$(_context31) {
            while (1) {
              switch (_context31.prev = _context31.next) {
                case 0:
                  e = l(document, "#site-details-dialog", HTMLTemplateElement).content.cloneNode(!0);

                  if (_instanceof(e, DocumentFragment)) {
                    _context31.next = 3;
                    break;
                  }

                  throw new Error("invariant violation: clonedDetails instanceof HTMLElement");

                case 3:
                  n = l(e, "details"), o = l(n, "details-dialog"), i = l(n, ".js-details-dialog-spinner");

                  if (!(t.detailsClass && (_n$classList = n.classList).add.apply(_n$classList, _toConsumableArray(t.detailsClass.split(" "))), t.dialogClass && (_o$classList = o.classList).add.apply(_o$classList, _toConsumableArray(t.dialogClass.split(" "))), !document.body)) {
                    _context31.next = 6;
                    break;
                  }

                  throw new Error("invariant violation: document.body");

                case 6:
                  document.body.append(e);
                  _context31.next = 9;
                  return t.content;

                case 9:
                  r = _context31.sent;
                  return _context31.abrupt("return", (i.remove(), o.prepend(r), n.addEventListener("toggle", function () {
                    n.hasAttribute("open") || (Ot(o, "dialog:remove"), n.remove());
                  }), o));

                case 11:
                case "end":
                  return _context31.stop();
              }
            }
          }, _callee30);
        }));
        return _Wo.apply(this, arguments);
      }

      me(".js-updatable-content-preserve-scroll-position", {
        constructor: HTMLElement,
        add: function add(t) {
          var e = t.getAttribute("data-updatable-content-scroll-position-id");
          if (!e) return;
          var n = Uo.get(e);
          null != n && (t.scrollTop = n);
        }
      });
      var Xo = new WeakMap();

      function Ko(t) {
        var e = Xo.get(t);
        e && (null != e.timer && clearTimeout(e.timer), e.timer = window.setTimeout(function () {
          null != e.timer && (e.timer = null), e.inputed = !1, e.listener.call(null, t);
        }, e.wait));
      }

      function Go(t) {
        var e = t.currentTarget;
        if (!(e && _instanceof(e, Element))) return;
        var n = Xo.get(e);
        n && (n.keypressed = !0, null != n.timer && clearTimeout(n.timer));
      }

      function Yo(t) {
        var e = t.currentTarget;
        if (!e || !(_instanceof(e, HTMLInputElement) || _instanceof(e, HTMLTextAreaElement))) return;
        var n = Xo.get(e);
        n && (n.keypressed = !1, n.inputed && Ko(e));
      }

      function zo(t) {
        var e = t.currentTarget;
        if (!e || !(_instanceof(e, HTMLInputElement) || _instanceof(e, HTMLTextAreaElement))) return;
        var n = Xo.get(e);
        n && (n.inputed = !0, n.keypressed || Ko(e));
      }

      function Jo(t) {
        var e = document.querySelector(".sso-modal");
        e && (e.classList.remove("success", "error"), t ? e.classList.add("success") : e.classList.add("error"));
      }

      me(".js-sso-modal-complete", function (t) {
        if (window.opener && window.opener.external.ssoComplete) {
          var e = t.getAttribute("data-error"),
              _n19 = t.getAttribute("data-expires-around");

          window.opener.external.ssoComplete({
            error: e,
            expiresAround: _n19
          }), window.close();
        } else {
          var _e15 = t.getAttribute("data-fallback-url");

          _e15 && (window.location.href = _e15);
        }
      });
      var Zo = null;

      function Qo() {
        Zo = null;
      }

      function ti(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.hash;
        return ei(t, ni(e));
      }

      function ei(t, e) {
        return "" === e ? null : t.getElementById(e) || t.getElementsByName(e)[0];
      }

      function ni(t) {
        try {
          return decodeURIComponent(t.slice(1));
        } catch (e) {
          return "";
        }
      }

      function oi(t) {
        if (_instanceof(t, window.Window)) return "window";
        if (_instanceof(t, window.Document)) return "#document";
        var e = [t.nodeName.toLowerCase()];
        if (!_instanceof(t, HTMLElement)) throw new Error("invariant: app/assets/modules/github/inspect.js:58");
        var n = t.id;

        if (n && e.push("#".concat(n)), "function" == typeof t.getAttribute && t.getAttribute("class")) {
          var _n20 = (t.getAttribute("class") || "").trim().split(/\s+/).join(".");

          _n20 && e.push(".".concat(_n20));
        }

        return e.join("");
      }

      var ii = new WeakMap();

      function ri(t, e) {
        var n = function (t, e) {
          var n = u(t, "link[rel=pjax-prefetch]", HTMLLinkElement);
          var _iteratorNormalCompletion26 = true;
          var _didIteratorError26 = false;
          var _iteratorError26 = undefined;

          try {
            for (var _iterator26 = n[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
              var _o16 = _step26.value;
              if (_o16.href === e) return _o16;
            }
          } catch (err) {
            _didIteratorError26 = true;
            _iteratorError26 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion26 && _iterator26["return"] != null) {
                _iterator26["return"]();
              }
            } finally {
              if (_didIteratorError26) {
                throw _iteratorError26;
              }
            }
          }
        }(t, e);

        if (n) {
          var _t26 = ii.get(n);

          return n.remove(), ii["delete"](n), _t26;
        }
      }

      var si = {
        container: null,
        push: !0,
        replace: !1,
        type: "GET",
        dataType: "html",
        scrollTo: 0
      },
          ai = 20;
      var ci;
      var li = new _o();

      function ui(t, e, n) {
        return t.dispatchEvent(new CustomEvent(e, {
          bubbles: !0,
          cancelable: !0,
          detail: n
        }));
      }

      function di(t) {
        fi({
          url: t.url,
          container: t.container,
          replace: t.replace
        });
      }

      function fi(t) {
        var e = {
          url: "",
          container: null
        };
        if (Object.assign(e, si, t), "string" != typeof e.url) throw new Error("invariant: app/assets/modules/github/pjax.js:132");
        e.requestUrl = e.url;
        var n = bi(e.url),
            o = n.hash,
            i = e.container;
        if (!i) throw new Error("invariant: app/assets/modules/github/pjax.js:137");
        var r = Ei(i);
        if ("GET" === e.type && (n.search += "".concat(n.search ? "&" : "", "_pjax=").concat(encodeURIComponent(r)), e.url = n.toString()), ci || (ci = {
          id: vi(),
          url: window.location.href,
          title: document.title,
          container: r,
          fragment: e.fragment
        }, Xe(ci, ci.title, ci.url)), di.options = e, "string" != typeof e.requestUrl) throw new Error("invariant: app/assets/modules/github/pjax.js:273");
        var s = ri(i, e.requestUrl);

        if (!s) {
          if (!e.url) throw new Error("invariant: app/assets/modules/github/pjax.js:277");
          s = at(e.url, {
            method: e.type,
            body: e.data,
            headers: {
              Accept: "text/html",
              "X-PJAX": "true",
              "X-PJAX-Container": r
            }
          });
        }

        if (!0 === e.push && !0 !== e.replace) {
          if (a = ci.id, c = wi(i), Li[a] = c, _i.push(a), Si(Ai, 0), Si(_i, ai), "string" != typeof e.requestUrl) throw new Error("invariant: app/assets/modules/github/pjax.js:292");
          We(null, "", e.requestUrl);
        }

        var a, c;
        ui(i, "pjax:start", {
          url: e.url
        }), ui(i, "pjax:send"), li.push(s).then(
        /*#__PURE__*/
        function () {
          var _ref11 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19(t) {
            var n, s, a, c, l, d, f, h, p, m, _t32;

            return regeneratorRuntime.wrap(function _callee19$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    n = ci;

                    s = function () {
                      var _iteratorNormalCompletion27 = true;
                      var _didIteratorError27 = false;
                      var _iteratorError27 = undefined;

                      try {
                        for (var _iterator27 = document.getElementsByTagName("meta")[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
                          var _t27 = _step27.value;

                          var _e16 = _t27.getAttribute("http-equiv");

                          if (_e16 && "X-PJAX-VERSION" === _e16.toUpperCase()) return _t27.content;
                        }
                      } catch (err) {
                        _didIteratorError27 = true;
                        _iteratorError27 = err;
                      } finally {
                        try {
                          if (!_iteratorNormalCompletion27 && _iterator27["return"] != null) {
                            _iterator27["return"]();
                          }
                        } finally {
                          if (_didIteratorError27) {
                            throw _iteratorError27;
                          }
                        }
                      }
                    }();

                    a = t.headers.get("X-PJAX-Version");

                    _context20.t0 = function (t, e, n) {
                      if ("string" != typeof n.requestUrl) throw new Error("invariant: app/assets/modules/github/pjax.js:540");
                      var o = {
                        url: ki(e, n.requestUrl),
                        title: ""
                      },
                          i = /<html/i.test(t);
                      if ("text/html" !== (e.headers.get("Content-Type") || "").split(";", 1)[0].trim()) return o;
                      var r, s;

                      if (i) {
                        var _e17 = t.match(/<head[^>]*>([\s\S.]*)<\/head>/i),
                            _n21 = t.match(/<body[^>]*>([\s\S.]*)<\/body>/i);

                        r = _e17 ? Array.from(et(document, _e17[0]).childNodes) : [], s = _n21 ? Array.from(et(document, _n21[0]).childNodes) : [];
                      } else r = s = Array.from(et(document, t).childNodes);

                      if (0 === s.length) return o;
                      var a = Ti(r, "title", HTMLTitleElement);
                      var c;

                      if (o.title = a.length > 0 ? a[a.length - 1].textContent : "", n.fragment) {
                        if ("body" === n.fragment) c = s;else {
                          var _t28 = Ti(s, n.fragment, Element);

                          c = _t28.length > 0 ? [_t28[0]] : [];
                        }

                        if (c.length && ("body" === n.fragment ? o.contents = c : o.contents = c.flatMap(function (t) {
                          return Array.from(t.childNodes);
                        }), !o.title)) {
                          var _t29 = c[0];
                          _instanceof(_t29, Element) && (o.title = _t29.getAttribute("title") || _t29.getAttribute("data-title") || "");
                        }
                      } else i || (o.contents = s);

                      if (o.contents) {
                        o.contents = o.contents.filter(function (t) {
                          return !_instanceof(t, Element) || !t.matches("title");
                        });
                        var _iteratorNormalCompletion28 = true;
                        var _didIteratorError28 = false;
                        var _iteratorError28 = undefined;

                        try {
                          for (var _iterator28 = o.contents[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
                            var _e18 = _step28.value;

                            if (_instanceof(_e18, Element)) {
                              var _iteratorNormalCompletion30 = true;
                              var _didIteratorError30 = false;
                              var _iteratorError30 = undefined;

                              try {
                                for (var _iterator30 = _e18.querySelectorAll("title")[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
                                  var _t31 = _step30.value;

                                  _t31.remove();
                                }
                              } catch (err) {
                                _didIteratorError30 = true;
                                _iteratorError30 = err;
                              } finally {
                                try {
                                  if (!_iteratorNormalCompletion30 && _iterator30["return"] != null) {
                                    _iterator30["return"]();
                                  }
                                } finally {
                                  if (_didIteratorError30) {
                                    throw _iteratorError30;
                                  }
                                }
                              }
                            }
                          }
                        } catch (err) {
                          _didIteratorError28 = true;
                          _iteratorError28 = err;
                        } finally {
                          try {
                            if (!_iteratorNormalCompletion28 && _iterator28["return"] != null) {
                              _iterator28["return"]();
                            }
                          } finally {
                            if (_didIteratorError28) {
                              throw _iteratorError28;
                            }
                          }
                        }

                        var _t30 = Ti(o.contents, "script[src]", HTMLScriptElement);

                        var _iteratorNormalCompletion29 = true;
                        var _didIteratorError29 = false;
                        var _iteratorError29 = undefined;

                        try {
                          for (var _iterator29 = _t30[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
                            var _e19 = _step29.value;

                            _e19.remove();
                          }
                        } catch (err) {
                          _didIteratorError29 = true;
                          _iteratorError29 = err;
                        } finally {
                          try {
                            if (!_iteratorNormalCompletion29 && _iterator29["return"] != null) {
                              _iterator29["return"]();
                            }
                          } finally {
                            if (_didIteratorError29) {
                              throw _iteratorError29;
                            }
                          }
                        }

                        if (o.scripts = _t30, !o.contents) throw new Error("invariant: app/assets/modules/github/pjax.js:632");
                        o.contents = o.contents.filter(function (e) {
                          return -1 === _t30.indexOf(e);
                        });
                      }

                      o.title && (o.title = o.title.trim());
                      return o;
                    };

                    _context20.next = 6;
                    return t.text();

                  case 6:
                    _context20.t1 = _context20.sent;
                    _context20.t2 = t;
                    _context20.t3 = e;
                    c = (0, _context20.t0)(_context20.t1, _context20.t2, _context20.t3);
                    l = c.contents;
                    d = bi(c.url);

                    if (!(o && (d.hash = o, c.url = d.href), s && a && s !== a)) {
                      _context20.next = 14;
                      break;
                    }

                    return _context20.abrupt("return", void hi(c.url));

                  case 14:
                    if (l) {
                      _context20.next = 16;
                      break;
                    }

                    return _context20.abrupt("return", void hi(c.url));

                  case 16:
                    ci = {
                      id: null != e.id ? e.id : vi(),
                      url: c.url,
                      title: c.title,
                      container: r,
                      fragment: e.fragment
                    }, !0 !== e.push && !0 !== e.replace || Xe(ci, c.title, c.url);
                    f = document.activeElement, h = null != e.container && e.container.contains(f);
                    if (f && h) try {
                      f.blur();
                    } catch (Hr) {}
                    c.title && (document.title = c.title), ui(i, "pjax:beforeReplace", {
                      contents: l,
                      state: ci,
                      previousState: n
                    }), xi(i, l);
                    p = u(i, "input[autofocus], textarea[autofocus]").pop();
                    p && document.activeElement !== p && p.focus(), function (t) {
                      if (!t) return;
                      var e = u(document, "script[src]", HTMLScriptElement);
                      var _iteratorNormalCompletion31 = true;
                      var _didIteratorError31 = false;
                      var _iteratorError31 = undefined;

                      try {
                        var _loop3 = function _loop3() {
                          var n = _step31.value;
                          var t = n.src;
                          if (e.some(function (e) {
                            return e.src === t;
                          })) return {
                            v: void 0
                          };
                          var o = document.createElement("script"),
                              i = n.getAttribute("type");
                          i && (o.type = i), o.src = t, document.head && document.head.appendChild(o);
                        };

                        for (var _iterator31 = t[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
                          var _ret2 = _loop3();

                          if (_typeof(_ret2) === "object") return _ret2.v;
                        }
                      } catch (err) {
                        _didIteratorError31 = true;
                        _iteratorError31 = err;
                      } finally {
                        try {
                          if (!_iteratorNormalCompletion31 && _iterator31["return"] != null) {
                            _iterator31["return"]();
                          }
                        } finally {
                          if (_didIteratorError31) {
                            throw _iteratorError31;
                          }
                        }
                      }
                    }(c.scripts);
                    m = e.scrollTo;

                    if (o) {
                      _t32 = ti(document, o);

                      if (_t32) {
                        m = _t32.getBoundingClientRect().top + window.pageYOffset;
                      }
                    }

                    "number" == typeof m && window.scrollTo(window.pageXOffset, m), ui(i, "pjax:success"), ui(i, "pjax:complete"), ui(i, "pjax:end");

                  case 25:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee19);
          }));

          return function (_x31) {
            return _ref11.apply(this, arguments);
          };
        }(), function (t) {
          var n = e.requestUrl;
          if ("string" != typeof n) throw new Error("invariant: app/assets/modules/github/pjax.js:150");
          t.response && (n = ki(t.response, n));
          var o = ui(i, "pjax:error");
          "GET" === e.type && o && hi(n), ui(i, "pjax:complete"), ui(i, "pjax:end");
        });
      }

      function hi(t) {
        ci && Xe(null, "", ci.url), window.location.replace(t);
      }

      var pi = !0;
      var mi = window.location.href,
          gi = window.history.state;

      function vi() {
        return new Date().getTime();
      }

      function wi(t) {
        var e = t.cloneNode(!0);
        return [Ei(t), Array.from(e.childNodes), Date.now()];
      }

      function bi(t) {
        var e = document.createElement("a");
        return e.href = t, e;
      }

      function yi(t) {
        return t.href.replace(/#.*/, "");
      }

      function Ei(t) {
        if (t.id) return "#".concat(t.id);
        throw new Error("pjax container has no id");
      }

      function Ti(t, e, n) {
        var o = [];
        var _iteratorNormalCompletion32 = true;
        var _didIteratorError32 = false;
        var _iteratorError32 = undefined;

        try {
          for (var _iterator32 = t[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
            var _i10 = _step32.value;
            _instanceof(_i10, Element) && (_instanceof(_i10, n) && _i10.matches(e) && o.push(_i10), o = o.concat(u(_i10, e, n)));
          }
        } catch (err) {
          _didIteratorError32 = true;
          _iteratorError32 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion32 && _iterator32["return"] != null) {
              _iterator32["return"]();
            }
          } finally {
            if (_didIteratorError32) {
              throw _iteratorError32;
            }
          }
        }

        return o;
      }

      function xi(t, e) {
        t.innerHTML = "";
        var _iteratorNormalCompletion33 = true;
        var _didIteratorError33 = false;
        var _iteratorError33 = undefined;

        try {
          for (var _iterator33 = e[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
            var _n22 = _step33.value;
            null != _n22 && t.appendChild(_n22);
          }
        } catch (err) {
          _didIteratorError33 = true;
          _iteratorError33 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion33 && _iterator33["return"] != null) {
              _iterator33["return"]();
            }
          } finally {
            if (_didIteratorError33) {
              throw _iteratorError33;
            }
          }
        }
      }

      function ki(t, e) {
        var n = t.headers.get("X-PJAX-URL");
        return n ? ((o = bi(n)).search = o.search.replace(/([?&])(_pjax|_)=[^&]*/g, ""), o.href.replace(/\?($|#)/, "$1")) : e;
        var o;
      }

      gi && gi.container && (ci = gi), "state" in window.history && (pi = !1);
      var Li = {},
          Ai = [],
          _i = [];

      function Si(t, e) {
        for (; t.length > e;) {
          delete Li[t.shift()];
        }
      }

      function Ci(t) {
        return !function (t) {
          return t.offsetWidth <= 0 && t.offsetHeight <= 0;
        }(t);
      }

      window.addEventListener("popstate", function (t) {
        pi || li.push(Promise.resolve(new Response()));
        var e = ci,
            n = t.state;
        var o;

        if (n && n.container) {
          if (pi && mi === n.url) return;

          if (e) {
            if (e.id === n.id) return;
            o = e.id < n.id ? "forward" : "back";
          }

          var _ref12 = Li[n.id] || [],
              _ref13 = _slicedToArray(_ref12, 3),
              _t33 = _ref13[0],
              _i11 = _ref13[1],
              _r7 = _ref13[2],
              _s2 = document.querySelector(_t33 || n.container);

          if (_s2) {
            e && function (t, e, n) {
              var o, i;
              Li[e] = n, "forward" === t ? (o = _i, i = Ai) : (o = Ai, i = _i);
              o.push(e);
              var r = i.pop();
              r && delete Li[r];
              Si(o, ai);
            }(o, e.id, wi(_s2)), ui(_s2, "pjax:popstate", {
              state: n,
              direction: o,
              cachedAt: _r7
            });
            var _t34 = {
              id: n.id,
              url: n.url,
              container: _s2,
              push: !1,
              fragment: n.fragment || "",
              scrollTo: !1
            };
            _i11 ? (ui(_s2, "pjax:start"), ci = n, n.title && (document.title = n.title), ui(_s2, "pjax:beforeReplace", {
              contents: _i11,
              state: n,
              previousState: e
            }), xi(_s2, _i11), ui(_s2, "pjax:end")) : fi(_t34), _s2.offsetHeight;
          } else hi(location.href);
        }

        pi = !1;
      });
      var ji = [];
      var Di = 0;

      function Mi(t) {
        !_asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee20() {
          return regeneratorRuntime.wrap(function _callee20$(_context21) {
            while (1) {
              switch (_context21.prev = _context21.next) {
                case 0:
                  ji.push(t);
                  _context21.next = 3;
                  return we;

                case 3:
                  (function () {
                    var t = Di;
                    Di = ji.length, Hi(ji.slice(t), null, window.location.href);
                  })();

                case 4:
                case "end":
                  return _context21.stop();
              }
            }
          }, _callee20);
        }))();
      }

      function Hi(t, e, n) {
        var o = window.location.hash.slice(1),
            i = {
          oldURL: e,
          newURL: n,
          target: o ? document.getElementById(o) : null
        };
        var _iteratorNormalCompletion34 = true;
        var _didIteratorError34 = false;
        var _iteratorError34 = undefined;

        try {
          for (var _iterator34 = t[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
            var _r8 = _step34.value;

            _r8.call(null, i);
          }
        } catch (err) {
          _didIteratorError34 = true;
          _iteratorError34 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion34 && _iterator34["return"] != null) {
              _iterator34["return"]();
            }
          } finally {
            if (_didIteratorError34) {
              throw _iteratorError34;
            }
          }
        }
      }

      Mi.clear = function () {
        ji.length = Di = 0;
      };

      var Oi = window.location.href;
      window.addEventListener("popstate", function () {
        Oi = window.location.href;
      }), window.addEventListener("hashchange", function (t) {
        var e = window.location.href;

        try {
          Hi(ji, t.oldURL || Oi, e);
        } finally {
          Oi = e;
        }
      });
      var Ni = null;
      document.addEventListener("pjax:start", function () {
        Ni = window.location.href;
      }), document.addEventListener("pjax:end", function () {
        Hi(ji, Ni, window.location.href);
      });
      var Ii = !1;
      var Pi = [];

      function qi() {
        Pi.length ? Ii || (window.addEventListener("resize", Ri, {
          passive: !0
        }), document.addEventListener("scroll", Ri, {
          passive: !0
        }), Ii = !0) : function () {
          var t = {
            passive: !0
          };
          window.removeEventListener("resize", Ri, t), document.removeEventListener("scroll", Ri, t), Ii = !1;
        }();
      }

      function Ri() {
        var _iteratorNormalCompletion35 = true;
        var _didIteratorError35 = false;
        var _iteratorError35 = undefined;

        try {
          for (var _iterator35 = Pi[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
            var _t35 = _step35.value;

            if (_t35.element.offsetHeight > 0) {
              var e = _t35.element,
                  _n23 = _t35.placeholder,
                  _o17 = _t35.top,
                  _i12 = e.getBoundingClientRect();

              if (_n23) {
                var _r9 = _n23.getBoundingClientRect();

                e.classList.contains("is-stuck") ? _r9.top > parseInt(String(_o17)) ? Fi(_t35) : Bi(_t35) : _i12.top <= parseInt(String(_o17)) && Vi(_t35);
              } else _i12.top <= parseInt(String(_o17)) ? Vi(_t35) : Fi(_t35);
            }
          }
        } catch (err) {
          _didIteratorError35 = true;
          _iteratorError35 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion35 && _iterator35["return"] != null) {
              _iterator35["return"]();
            }
          } finally {
            if (_didIteratorError35) {
              throw _iteratorError35;
            }
          }
        }
      }

      function Vi(_ref15) {
        var t = _ref15.element,
            e = _ref15.placeholder,
            n = _ref15.top;

        if (e) {
          var _o18 = t.getBoundingClientRect();

          t.style.top = n.toString(), t.style.left = "".concat(_o18.left, "px"), t.style.width = "".concat(_o18.width, "px"), t.style.marginTop = "0", t.style.position = "fixed", e.style.display = "block";
        }

        t.classList.add("is-stuck");
      }

      function Fi(_ref16) {
        var t = _ref16.element,
            e = _ref16.placeholder;
        e && (t.style.position = "static", t.style.marginTop = e.style.marginTop, e.style.display = "none"), t.classList.remove("is-stuck");
      }

      function Bi(_ref17) {
        var t = _ref17.element,
            e = _ref17.placeholder,
            n = _ref17.offsetParent,
            o = _ref17.top;

        if (e) {
          var _i13 = t.getBoundingClientRect(),
              _r10 = e.getBoundingClientRect();

          if (t.style.left = "".concat(_r10.left, "px"), t.style.width = "".concat(_r10.width, "px"), n) {
            var _e20 = n.getBoundingClientRect();

            _e20.bottom < _i13.height + parseInt(String(o)) && (t.style.top = "".concat(_e20.bottom - _i13.height, "px"));
          }
        }
      }

      function $i(t) {
        if (function (t) {
          var _window$getComputedSt = window.getComputedStyle(t),
              e = _window$getComputedSt.position;

          return /sticky/.test(e);
        }(t)) return null;
        var e = t.previousElementSibling;

        if (e && e.classList.contains("is-placeholder")) {
          if (!_instanceof(e, HTMLElement)) throw new Error("invariant: app/assets/modules/github/sticky.js:173");
          return e;
        }

        var n = document.createElement("div");
        if (n.style.visibility = "hidden", n.style.display = "none", n.style.height = window.getComputedStyle(t).height, n.className = t.className, n.classList.remove("js-sticky"), n.classList.add("is-placeholder"), !t.parentNode) throw new Error("invariant: app/assets/modules/github/sticky.js:185");
        return t.parentNode.insertBefore(n, t);
      }

      function Ui(_x32) {
        return _Ui.apply(this, arguments);
      }

      function _Ui() {
        _Ui = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee31(t) {
          return regeneratorRuntime.wrap(function _callee31$(_context32) {
            while (1) {
              switch (_context32.prev = _context32.next) {
                case 0:
                  _context32.next = 2;
                  return be;

                case 2:
                  (function (t) {
                    var e = $i(t),
                        n = window.getComputedStyle(t).position;
                    t.style.position = "static";
                    var o = t.offsetParent;
                    t.style.position = "fixed";
                    var i = window.getComputedStyle(t).top,
                        r = {
                      element: t,
                      placeholder: e,
                      offsetParent: o,
                      top: "auto" === i ? 0 : i
                    };
                    t.style.position = n, Pi.push(r);
                  })(t);

                  Ri();
                  qi();

                case 5:
                case "end":
                  return _context32.stop();
              }
            }
          }, _callee31);
        }));
        return _Ui.apply(this, arguments);
      }

      function Wi(t) {
        var e = t.ownerDocument;
        t.scrollIntoView(), e && e.defaultView && e.defaultView.scrollBy(0, -Xi(e));
      }

      function Xi(t) {
        Ri();
        var e = t.querySelectorAll(".js-sticky-offset-scroll"),
            n = t.querySelectorAll(".js-position-sticky");
        return Math.max.apply(Math, [0].concat(_toConsumableArray(Array.from(e).map(function (t) {
          var _t$getBoundingClientR = t.getBoundingClientRect(),
              e = _t$getBoundingClientR.top,
              n = _t$getBoundingClientR.height;

          return 0 === e ? n : 0;
        })))) + Math.max.apply(Math, [0].concat(_toConsumableArray(Array.from(n).map(function (t) {
          var _t$getBoundingClientR2 = t.getBoundingClientRect(),
              e = _t$getBoundingClientR2.top,
              n = _t$getBoundingClientR2.height,
              o = parseInt(getComputedStyle(t).top);

          if (!t.parentElement) return 0;
          var i = t.parentElement.getBoundingClientRect().top;
          return e === o && i < 0 ? n : 0;
        }))));
      }

      me(".js-sticky", {
        constructor: HTMLElement,
        add: function add(t) {
          Ui(t);
        },
        remove: function remove(t) {
          !function (t) {
            var e = Pi.map(function (t) {
              return t.element;
            }).indexOf(t);
            Pi.splice(e, 1);
          }(t), qi();
        }
      }), function () {
        var t = function t(_t36) {
          this.w = _t36 || [];
        };

        t.prototype.set = function (t) {
          this.w[t] = !0;
        }, t.prototype.encode = function () {
          for (var t = [], e = 0; e < this.w.length; e++) {
            this.w[e] && (t[Math.floor(e / 6)] ^= 1 << e % 6);
          }

          for (e = 0; e < t.length; e++) {
            t[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[e] || 0);
          }

          return t.join("") + "~";
        };
        var e = new t();

        function n(t) {
          e.set(t);
        }

        var o = function o(e, n) {
          var o = new t(r(e));
          o.set(n), e.set(se, o.w);
        },
            i = function i(n) {
          n = r(n), n = new t(n);

          for (var o = e.w.slice(), i = 0; i < n.w.length; i++) {
            o[i] = o[i] || n.w[i];
          }

          return new t(o).encode();
        },
            r = function r(t) {
          return t = t.get(se), a(t) || (t = []), t;
        },
            s = function s(t) {
          return "function" == typeof t;
        },
            a = function a(t) {
          return "[object Array]" == Object.prototype.toString.call(Object(t));
        },
            c = function c(t) {
          return null != t && -1 < (t.constructor + "").indexOf("String");
        },
            l = function l(t, e) {
          return 0 == t.indexOf(e);
        },
            u = function u(t) {
          return t ? t.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : "";
        },
            d = function d(t) {
          var e = x.createElement("img");
          return e.width = 1, e.height = 1, e.src = t, e;
        },
            f = function f() {},
            h = function h(t) {
          return _instanceof(encodeURIComponent, Function) ? encodeURIComponent(t) : (n(28), t);
        },
            p = function p(t, e, o, i) {
          try {
            t.addEventListener ? t.addEventListener(e, o, !!i) : t.attachEvent && t.attachEvent("on" + e, o);
          } catch (Hr) {
            n(27);
          }
        },
            m = /^[\w\-:/.?=&%!]+$/,
            g = function g(t, e, n, o) {
          t && (n ? (o = "", e && m.test(e) && (o = ' id="' + e + '"'), m.test(t) && x.write("<script" + o + ' src="' + t + '"><\/script>')) : ((n = x.createElement("script")).type = "text/javascript", n.async = !0, n.src = t, o && (n.onload = o), e && (n.id = e), (t = x.getElementsByTagName("script")[0]).parentNode.insertBefore(n, t)));
        },
            v = function v() {
          return "https:" == x.location.protocol;
        },
            w = function w(t, e) {
          return (t = t.match("(?:&|#|\\?)" + h(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == t.length ? t[1] : "";
        },
            b = function b() {
          var t = "" + x.location.hostname;
          return 0 == t.indexOf("www.") ? t.substring(4) : t;
        },
            y = function y(t, e) {
          if (1 == e.length && null != e[0] && "object" == _typeof(e[0])) return e[0];

          for (var n = {}, o = Math.min(t.length + 1, e.length), i = 0; i < o; i++) {
            if ("object" == _typeof(e[i])) {
              for (var r in e[i]) {
                e[i].hasOwnProperty(r) && (n[r] = e[i][r]);
              }

              break;
            }

            i < t.length && (n[t[i]] = e[i]);
          }

          return n;
        },
            E = function E() {
          this.keys = [], this.values = {}, this.m = {};
        };

        E.prototype.set = function (t, e, n) {
          this.keys.push(t), n ? this.m[":" + t] = e : this.values[":" + t] = e;
        }, E.prototype.get = function (t) {
          return this.m.hasOwnProperty(":" + t) ? this.m[":" + t] : this.values[":" + t];
        }, E.prototype.map = function (t) {
          for (var e = 0; e < this.keys.length; e++) {
            var n = this.keys[e],
                o = this.get(n);
            o && t(n, o);
          }
        };

        var T = window,
            x = document,
            k = window,
            L = function L(t) {
          var e = k._gaUserPrefs;
          if (e && e.ioo && e.ioo() || t && !0 === k["ga-disable-" + t]) return !0;

          try {
            var n = k.external;
            if (n && n._gaUserPrefs && "oo" == n._gaUserPrefs) return !0;
          } catch (Ur) {}

          return !1;
        },
            A = function A(t) {
          var e = [],
              n = x.cookie.split(";");
          t = new RegExp("^\\s*" + t + "=\\s*(.*?)\\s*$");

          for (var o = 0; o < n.length; o++) {
            var i = n[o].match(t);
            i && e.push(i[1]);
          }

          return e;
        },
            _ = function _(t, e, o, i, r, s) {
          if (!(r = !L(r) && !(j.test(x.location.hostname) || "/" == o && C.test(i)))) return !1;
          if (e && 1200 < e.length && (e = e.substring(0, 1200), n(24)), o = t + "=" + e + "; path=" + o + "; ", s && (o += "expires=" + new Date(new Date().getTime() + s).toGMTString() + "; "), i && "none" != i && (o += "domain=" + i + ";"), i = x.cookie, x.cookie = o, !(i = i != x.cookie)) t: {
            for (t = A(t), i = 0; i < t.length; i++) {
              if (e == t[i]) {
                i = !0;
                break t;
              }
            }

            i = !1;
          }
          return i;
        },
            S = function S(t) {
          return h(t).replace(/\(/g, "%28").replace(/\)/g, "%29");
        },
            C = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
            j = /(^|\.)doubleclick\.net$/i,
            D = function D() {
          return (dt || v() ? "https:" : "http:") + "//www.google-analytics.com";
        },
            M = function M(t) {
          this.name = "len", this.message = t + "-8192";
        },
            H = function H(t, e, n) {
          if (n = n || f, 2036 >= e.length) O(t, e, n);else {
            if (!(8192 >= e.length)) throw P("len", e.length), new M(e.length);
            I(t, e, n) || N(t, e, n) || O(t, e, n);
          }
        },
            O = function O(t, e, n) {
          var o = d(t + "?" + e);

          o.onload = o.onerror = function () {
            o.onload = null, o.onerror = null, n();
          };
        },
            N = function N(t, e, n) {
          var o = T.XMLHttpRequest;
          if (!o) return !1;
          var i = new o();
          return "withCredentials" in i && (i.open("POST", t, !0), i.withCredentials = !0, i.setRequestHeader("Content-Type", "text/plain"), i.onreadystatechange = function () {
            4 == i.readyState && (n(), i = null);
          }, i.send(e), !0);
        },
            I = function I(t, e, n) {
          return !!T.navigator.sendBeacon && !!T.navigator.sendBeacon(t, e) && (n(), !0);
        },
            P = function P(t, e, n) {
          1 <= 100 * Math.random() || L("?") || (t = ["t=error", "_e=" + t, "_v=j48", "sr=1"], e && t.push("_f=" + e), n && t.push("_m=" + h(n.substring(0, 100))), t.push("aip=1"), t.push("z=" + Y()), O(D() + "/collect", t.join("&"), f));
        },
            q = function q(t) {
          var e = T.gaData = T.gaData || {};
          return e[t] = e[t] || {};
        },
            R = function R() {
          this.M = [];
        };

        function V(t) {
          if (100 != t.get(Ie) && Zn(et(t, xe)) % 1e4 >= 100 * nt(t, Ie)) throw "abort";
        }

        function F(t) {
          if (L(et(t, Ae))) throw "abort";
        }

        function B() {
          var t = x.location.protocol;
          if ("http:" != t && "https:" != t) throw "abort";
        }

        function $(t) {
          try {
            T.navigator.sendBeacon ? n(42) : T.XMLHttpRequest && "withCredentials" in new T.XMLHttpRequest() && n(40);
          } catch (Vr) {}

          t.set(re, i(t), !0), t.set(yt, nt(t, yt) + 1);
          var e = [];
          Q.map(function (n, o) {
            o.F && null != (n = t.get(n)) && n != o.defaultValue && ("boolean" == typeof n && (n *= 1), e.push(o.F + "=" + h("" + n)));
          }), e.push("z=" + z()), t.set(vt, e.join("&"), !0);
        }

        function U(t) {
          var e = et(t, Re) || D() + "/collect",
              n = et(t, bt);

          if (!n && t.get(wt) && (n = "beacon"), n) {
            var o = et(t, vt),
                i = (i = t.get(gt)) || f;
            "image" == n ? O(e, o, i) : "xhr" == n && N(e, o, i) || "beacon" == n && I(e, o, i) || H(e, o, i);
          } else H(e, et(t, vt), t.get(gt));

          e = t.get(Ae), n = (e = q(e)).hitcount, e.hitcount = n ? n + 1 : 1, e = t.get(Ae), delete q(e).pending_experiments, t.set(gt, f, !0);
        }

        function W(t) {
          var e;
          (T.gaData = T.gaData || {}).expId && t.set(zt, (T.gaData = T.gaData || {}).expId), (T.gaData = T.gaData || {}).expVar && t.set(Jt, (T.gaData = T.gaData || {}).expVar);
          var n = t.get(Ae);

          if (n = q(n).pending_experiments) {
            var o = [];

            for (e in n) {
              n.hasOwnProperty(e) && n[e] && o.push(encodeURIComponent(e) + "." + encodeURIComponent(n[e]));
            }

            e = o.join("!");
          } else e = void 0;

          e && t.set(Zt, e, !0);
        }

        function X() {
          if (T.navigator && "preview" == T.navigator.loadPurpose) throw "abort";
        }

        function K(t) {
          var e = T.gaDevIds;
          a(e) && 0 != e.length && t.set("&did", e.join(","), !0);
        }

        function G(t) {
          if (!t.get(Ae)) throw "abort";
        }

        R.prototype.add = function (t) {
          this.M.push(t);
        }, R.prototype.D = function (t) {
          try {
            for (var e = 0; e < this.M.length; e++) {
              var n = t.get(this.M[e]);
              n && s(n) && n.call(T, t);
            }
          } catch (Ur) {}

          (e = t.get(gt)) != f && s(e) && (t.set(gt, f, !0), setTimeout(e, 10));
        };

        var Y = function Y() {
          return Math.round(2147483647 * Math.random());
        },
            z = function z() {
          try {
            var t = new Uint32Array(1);
            return T.crypto.getRandomValues(t), 2147483647 & t[0];
          } catch (e) {
            return Y();
          }
        };

        function J(t) {
          var e = nt(t, ne);

          if (500 <= e && n(15), "transaction" != (o = et(t, mt)) && "item" != o) {
            var o = nt(t, ie),
                i = new Date().getTime(),
                r = nt(t, oe);
            if (0 == r && t.set(oe, i), 0 < (r = Math.round(2 * (i - r) / 1e3)) && (o = Math.min(o + r, 20), t.set(oe, i)), 0 >= o) throw "abort";
            t.set(ie, --o);
          }

          t.set(ne, ++e);
        }

        var Z = function Z() {
          this.data = new E();
        },
            Q = new E(),
            tt = [];

        Z.prototype.get = function (t) {
          var e = rt(t),
              n = this.data.get(t);
          return e && null == n && (n = s(e.defaultValue) ? e.defaultValue() : e.defaultValue), e && e.Z ? e.Z(this, t, n) : n;
        };

        var et = function et(t, e) {
          return null == (t = t.get(e)) ? "" : "" + t;
        },
            nt = function nt(t, e) {
          return null == (t = t.get(e)) || "" === t ? 0 : 1 * t;
        };

        Z.prototype.set = function (t, e, n) {
          if (t) if ("object" == _typeof(t)) for (var o in t) {
            t.hasOwnProperty(o) && ot(this, o, t[o], n);
          } else ot(this, t, e, n);
        };

        var ot = function ot(t, e, n, o) {
          if (null != n) switch (e) {
            case Ae:
              _n.test(n);

          }
          var i = rt(e);
          i && i.o ? i.o(t, e, n, o) : t.data.set(e, n, o);
        },
            it = function it(t, e, n, o, i) {
          this.name = t, this.F = e, this.Z = o, this.o = i, this.defaultValue = n;
        },
            rt = function rt(t) {
          var e = Q.get(t);
          if (!e) for (var n = 0; n < tt.length; n++) {
            var o = tt[n],
                i = o[0].exec(t);

            if (i) {
              e = o[1](i), Q.set(e.name, e);
              break;
            }
          }
          return e;
        },
            st = function st(t, e, n, o, i) {
          return t = new it(t, e, n, o, i), Q.set(t.name, t), t.name;
        },
            at = function at(t, e) {
          tt.push([new RegExp("^" + t + "$"), e]);
        },
            ct = function ct(t, e, n) {
          return st(t, e, n, void 0, lt);
        },
            lt = function lt() {},
            ut = c(window.GoogleAnalyticsObject) && u(window.GoogleAnalyticsObject) || "ga",
            dt = !1,
            ft = ct("apiVersion", "v"),
            ht = ct("clientVersion", "_v");

        st("anonymizeIp", "aip");
        var pt = st("adSenseId", "a"),
            mt = st("hitType", "t"),
            gt = st("hitCallback"),
            vt = st("hitPayload");
        st("nonInteraction", "ni"), st("currencyCode", "cu"), st("dataSource", "ds");
        var wt = st("useBeacon", void 0, !1),
            bt = st("transport");
        st("sessionControl", "sc", ""), st("sessionGroup", "sg"), st("queueTime", "qt");
        var yt = st("_s", "_s");
        st("screenName", "cd");
        var Et = st("location", "dl", ""),
            Tt = st("referrer", "dr"),
            xt = st("page", "dp", "");
        st("hostname", "dh");
        var kt = st("language", "ul"),
            Lt = st("encoding", "de");
        st("title", "dt", function () {
          return x.title || void 0;
        }), at("contentGroup([0-9]+)", function (t) {
          return new it(t[0], "cg" + t[1]);
        });

        var At = st("screenColors", "sd"),
            _t = st("screenResolution", "sr"),
            St = st("viewportSize", "vp"),
            Ct = st("javaEnabled", "je"),
            jt = st("flashVersion", "fl");

        st("campaignId", "ci"), st("campaignName", "cn"), st("campaignSource", "cs"), st("campaignMedium", "cm"), st("campaignKeyword", "ck"), st("campaignContent", "cc");
        var Dt = st("eventCategory", "ec"),
            Mt = st("eventAction", "ea"),
            Ht = st("eventLabel", "el"),
            Ot = st("eventValue", "ev"),
            Nt = st("socialNetwork", "sn"),
            It = st("socialAction", "sa"),
            Pt = st("socialTarget", "st"),
            qt = st("l1", "plt"),
            Rt = st("l2", "pdt"),
            Vt = st("l3", "dns"),
            Ft = st("l4", "rrt"),
            Bt = st("l5", "srt"),
            $t = st("l6", "tcp"),
            Ut = st("l7", "dit"),
            Wt = st("l8", "clt"),
            Xt = st("timingCategory", "utc"),
            Kt = st("timingVar", "utv"),
            Gt = st("timingLabel", "utl"),
            Yt = st("timingValue", "utt");
        st("appName", "an"), st("appVersion", "av", ""), st("appId", "aid", ""), st("appInstallerId", "aiid", ""), st("exDescription", "exd"), st("exFatal", "exf");
        var zt = st("expId", "xid"),
            Jt = st("expVar", "xvar"),
            Zt = st("exp", "exp"),
            Qt = st("_utma", "_utma"),
            te = st("_utmz", "_utmz"),
            ee = st("_utmht", "_utmht"),
            ne = st("_hc", void 0, 0),
            oe = st("_ti", void 0, 0),
            ie = st("_to", void 0, 20);
        at("dimension([0-9]+)", function (t) {
          return new it(t[0], "cd" + t[1]);
        }), at("metric([0-9]+)", function (t) {
          return new it(t[0], "cm" + t[1]);
        }), st("linkerParam", void 0, void 0, function (t) {
          var e = ln(t = t.get(xe), 0);
          return "_ga=1." + h(e + "." + t);
        }, lt);
        var re = st("usage", "_u"),
            se = st("_um");
        st("forceSSL", void 0, void 0, function () {
          return dt;
        }, function (t, e, o) {
          n(34), dt = !!o;
        });
        var ae = st("_j1", "jid");
        at("\\&(.*)", function (t) {
          var e = new it(t[0], t[1]),
              n = function (t) {
            var e;
            return Q.map(function (n, o) {
              o.F == t && (e = o);
            }), e && e.name;
          }(t[0].substring(1));

          return n && (e.Z = function (t) {
            return t.get(n);
          }, e.o = function (t, e, o, i) {
            t.set(n, o, i);
          }, e.F = void 0), e;
        });

        var ce = ct("_oot"),
            le = st("previewTask"),
            ue = st("checkProtocolTask"),
            de = st("validationTask"),
            fe = st("checkStorageTask"),
            he = st("historyImportTask"),
            pe = st("samplerTask"),
            me = st("_rlt"),
            ge = st("buildHitTask"),
            ve = st("sendHitTask"),
            we = st("ceTask"),
            be = st("devIdTask"),
            ye = st("timingTask"),
            Ee = st("displayFeaturesTask"),
            Te = ct("name"),
            xe = ct("clientId", "cid"),
            ke = ct("clientIdTime"),
            Le = st("userId", "uid"),
            Ae = ct("trackingId", "tid"),
            _e = ct("cookieName", void 0, "_ga"),
            Se = ct("cookieDomain"),
            Ce = ct("cookiePath", void 0, "/"),
            je = ct("cookieExpires", void 0, 63072e3),
            De = ct("legacyCookieDomain"),
            Me = ct("legacyHistoryImport", void 0, !0),
            He = ct("storage", void 0, "cookie"),
            Oe = ct("allowLinker", void 0, !1),
            Ne = ct("allowAnchor", void 0, !0),
            Ie = ct("sampleRate", "sf", 100),
            Pe = ct("siteSpeedSampleRate", void 0, 1),
            qe = ct("alwaysSendReferrer", void 0, !1),
            Re = st("transportUrl"),
            Ve = st("_r", "_r");

        function Fe(t, e, o, i) {
          e[t] = function () {
            try {
              return i && n(i), o.apply(this, arguments);
            } catch (Hr) {
              throw P("exc", t, Hr && Hr.name), Hr;
            }
          };
        }

        var Be = function Be(t, e, n) {
          this.V = t, this.fa = e, this.$ = !1, this.oa = n, this.ea = 1;
        },
            $e = function $e(t, e) {
          var n;
          if (t.fa && t.$) return 0;

          if (t.$ = !0, e) {
            if (t.oa && nt(e, t.oa)) return nt(e, t.oa);
            if (0 == e.get(Pe)) return 0;
          }

          return 0 == t.V ? 0 : (void 0 === n && (n = z()), 0 == n % t.V ? Math.floor(n / t.V) % t.ea + 1 : 0);
        };

        var Ue = function Ue(t) {
          var e = {};

          if (We(e) || Xe(e)) {
            var n = e[qt];
            null == n || 1 / 0 == n || isNaN(n) || (0 < n ? (Ke(e, Vt), Ke(e, $t), Ke(e, Bt), Ke(e, Rt), Ke(e, Ft), Ke(e, Ut), Ke(e, Wt), t(e)) : p(T, "load", function () {
              Ue(t);
            }, !1));
          }
        },
            We = function We(t) {
          var e;
          if (!(e = (e = T.performance || T.webkitPerformance) && e.timing)) return !1;
          var n = e.navigationStart;
          return 0 != n && (t[qt] = e.loadEventStart - n, t[Vt] = e.domainLookupEnd - e.domainLookupStart, t[$t] = e.connectEnd - e.connectStart, t[Bt] = e.responseStart - e.requestStart, t[Rt] = e.responseEnd - e.responseStart, t[Ft] = e.fetchStart - n, t[Ut] = e.domInteractive - n, t[Wt] = e.domContentLoadedEventStart - n, !0);
        },
            Xe = function Xe(t) {
          if (T.top != T) return !1;
          var e = T.external,
              n = e && e.onloadT;
          return e && !e.isValidLoadTime && (n = void 0), 2147483648 < n && (n = void 0), 0 < n && e.setPageReadyTime(), null != n && (t[qt] = n, !0);
        },
            Ke = function Ke(t, e) {
          var n = t[e];
          (isNaN(n) || 1 / 0 == n || 0 > n) && (t[e] = void 0);
        },
            Ge = function Ge(t) {
          return function (e) {
            if ("pageview" == e.get(mt) && !t.I) {
              t.I = !0;

              var n = function (t) {
                var e = Math.min(nt(t, Pe), 100);
                return !(Zn(et(t, xe)) % 100 >= e);
              }(e);

              e = 0 < w(e.get(Et), "gclid").length, (n || e) && Ue(function (e) {
                t.send(n ? "timing" : "adtiming", e);
              });
            }
          };
        },
            Ye = !1,
            ze = function ze(t) {
          if ("cookie" == et(t, He)) {
            var e = et(t, _e),
                o = Qe(t),
                i = nn(et(t, Ce)),
                r = en(et(t, Se)),
                s = 1e3 * nt(t, je),
                a = et(t, Ae);
            if ("auto" != r) _(e, o, i, r, a, s) && (Ye = !0);else {
              var c;

              if (n(32), o = [], 4 != (r = b().split(".")).length || (c = r[r.length - 1], parseInt(c, 10) != c)) {
                for (c = r.length - 2; 0 <= c; c--) {
                  o.push(r.slice(c).join("."));
                }

                o.push("none"), c = o;
              } else c = ["none"];

              for (var l = 0; l < c.length; l++) {
                if (r = c[l], t.data.set(Se, r), o = Qe(t), _(e, o, i, r, a, s)) return void (Ye = !0);
              }

              t.data.set(Se, "auto");
            }
          }
        },
            Je = function Je(t) {
          if ("cookie" == et(t, He) && !Ye && (ze(t), !Ye)) throw "abort";
        },
            Ze = function Ze(t) {
          if (t.get(Me)) {
            var e = et(t, Se),
                o = et(t, De) || b(),
                i = rn("__utma", o, e);
            i && (n(19), t.set(ee, new Date().getTime(), !0), t.set(Qt, i.R), (e = rn("__utmz", o, e)) && i.hash == e.hash && t.set(te, e.R));
          }
        },
            Qe = function Qe(t) {
          var e = S(et(t, xe)),
              n = en(et(t, Se)).split(".").length;
          return 1 < (t = on(et(t, Ce))) && (n += "-" + t), ["GA1", n, e].join(".");
        },
            tn = function tn(t, e, n) {
          for (var o, i = [], r = [], s = 0; s < t.length; s++) {
            var a = t[s];
            a.H[n] == e ? i.push(a) : null == o || a.H[n] < o ? (r = [a], o = a.H[n]) : a.H[n] == o && r.push(a);
          }

          return 0 < i.length ? i : r;
        },
            en = function en(t) {
          return 0 == t.indexOf(".") ? t.substr(1) : t;
        },
            nn = function nn(t) {
          return t ? (1 < t.length && t.lastIndexOf("/") == t.length - 1 && (t = t.substr(0, t.length - 1)), 0 != t.indexOf("/") && (t = "/" + t), t) : "/";
        },
            on = function on(t) {
          return "/" == (t = nn(t)) ? 1 : t.split("/").length;
        };

        function rn(t, e, n) {
          "none" == e && (e = "");
          var o = [],
              i = A(t);
          t = "__utma" == t ? 6 : 2;

          for (var r = 0; r < i.length; r++) {
            var s = ("" + i[r]).split(".");
            s.length >= t && o.push({
              hash: s[0],
              R: i[r],
              O: s
            });
          }

          if (0 != o.length) return 1 == o.length ? o[0] : sn(e, o) || sn(n, o) || sn(null, o) || o[0];
        }

        function sn(t, e) {
          var n;
          null == t ? n = t = 1 : (n = Zn(t), t = Zn(l(t, ".") ? t.substring(1) : "." + t));

          for (var o = 0; o < e.length; o++) {
            if (e[o].hash == n || e[o].hash == t) return e[o];
          }
        }

        var an = new RegExp(/^https?:\/\/([^\/:]+)/),
            cn = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;

        function ln(t, e) {
          var n = new Date(),
              o = T.navigator,
              i = o.plugins || [];

          for (t = [t, o.userAgent, n.getTimezoneOffset(), n.getYear(), n.getDate(), n.getHours(), n.getMinutes() + e], e = 0; e < i.length; ++e) {
            t.push(i[e].description);
          }

          return Zn(t.join("."));
        }

        var un = function un(t) {
          n(48), this.target = t, this.T = !1;
        };

        un.prototype.ca = function (t, e) {
          if (t.tagName) {
            if ("a" == t.tagName.toLowerCase()) return void (t.href && (t.href = dn(this, t.href, e)));
            if ("form" == t.tagName.toLowerCase()) return fn(this, t);
          }

          if ("string" == typeof t) return dn(this, t, e);
        };

        var dn = function dn(t, e, n) {
          (i = cn.exec(e)) && 3 <= i.length && (e = i[1] + (i[3] ? i[2] + i[3] : "")), t = t.target.get("linkerParam");
          var o = e.indexOf("?"),
              i = e.indexOf("#");
          return n ? e += (-1 == i ? "#" : "&") + t : (n = -1 == o ? "?" : "&", e = -1 == i ? e + (n + t) : e.substring(0, i) + n + t + e.substring(i)), e.replace(/&+_ga=/, "&_ga=");
        },
            fn = function fn(t, e) {
          if (e && e.action) {
            var n = t.target.get("linkerParam").split("=")[1];

            if ("get" == e.method.toLowerCase()) {
              t = e.childNodes || [];

              for (var o = 0; o < t.length; o++) {
                if ("_ga" == t[o].name) return void t[o].setAttribute("value", n);
              }

              (t = x.createElement("input")).setAttribute("type", "hidden"), t.setAttribute("name", "_ga"), t.setAttribute("value", n), e.appendChild(t);
            } else "post" == e.method.toLowerCase() && (e.action = dn(t, e.action));
          }
        };

        function hn(t, e) {
          if (e == x.location.hostname) return !1;

          for (var n = 0; n < t.length; n++) {
            if (_instanceof(t[n], RegExp)) {
              if (t[n].test(e)) return !0;
            } else if (0 <= e.indexOf(t[n])) return !0;
          }

          return !1;
        }

        un.prototype.S = function (t, e, o) {
          function i(o) {
            try {
              var i;
              o = o || T.event;

              t: {
                var s = o.target || o.srcElement;

                for (o = 100; s && 0 < o;) {
                  if (s.href && s.nodeName.match(/^a(?:rea)?$/i)) {
                    i = s;
                    break t;
                  }

                  s = s.parentNode, o--;
                }

                i = {};
              }

              ("http:" == i.protocol || "https:" == i.protocol) && hn(t, i.hostname || "") && i.href && (i.href = dn(r, i.href, e));
            } catch (a) {
              n(26);
            }
          }

          var r = this;
          this.T || (this.T = !0, p(x, "mousedown", i, !1), p(x, "keyup", i, !1)), o && p(x, "submit", function (e) {
            if ((e = (e = e || T.event).target || e.srcElement) && e.action) {
              var n = e.action.match(an);
              n && hn(t, n[1]) && fn(r, e);
            }
          });
        };

        var pn,
            mn = /^(GTM|OPT)-[A-Z0-9]+$/,
            gn = /;_gaexp=[^;]*/g,
            vn = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,
            wn = function wn(t, e, o) {
          this.U = ae, this.aa = e, (e = o) || (e = (e = et(t, Te)) && "t0" != e ? Tn.test(e) ? "_gat_" + S(et(t, Ae)) : "_gat_" + S(e) : "_gat"), this.Y = e, $e(new Be(10), t) && (n(30), this.pa = !0);
        },
            bn = function bn(t, e) {
          e.get(t.U) || ("1" == A(t.Y)[0] ? e.set(t.U, "", !0) : e.set(t.U, "" + Y(), !0));
        },
            yn = function yn(t, e) {
          if (e.get(t.U)) {
            var n = 6e5;
            t.pa && (n /= 10), _(t.Y, "1", e.get(Ce), e.get(Se), e.get(Ae), n);
          }
        },
            En = function En(t, e) {
          if (e.get(t.U)) {
            var n = new E(),
                o = function o(t) {
              rt(t).F && n.set(rt(t).F, e.get(t));
            };

            o(ft), o(ht), o(Ae), o(xe), o(Le), o(t.U), n.set(rt(re).F, i(e));
            var r = t.aa;
            n.map(function (t, e) {
              r += h(t) + "=", r += h("" + e) + "&";
            }), r += "z=" + Y(), d(r), e.set(t.U, "", !0);
          }
        },
            Tn = /^gtm\d+$/,
            xn = function xn(t, e) {
          var n;
          (t = t.b).get("dcLoaded") || (o(t, 29), (e = e || {})[_e] && (n = S(e[_e])), function (t, e) {
            var n = e.get(ge);
            e.set(ge, function (e) {
              bn(t, e);
              var o = n(e);
              return yn(t, e), o;
            });
            var o = e.get(ve);
            e.set(ve, function (e) {
              var n = o(e);
              return En(t, e), n;
            });
          }(e = new wn(t, "https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&", n), t), t.set("dcLoaded", !0));
        },
            kn = function kn(t) {
          if (!t.get("dcLoaded") && "cookie" == t.get(He)) {
            o(t, 51);
            var e = new wn(t);
            bn(e, t), yn(e, t), t.get(e.U) && (t.set(Ve, 1, !0), t.set(Re, D() + "/r/collect", !0));
          }
        },
            Ln = function Ln(t) {
          return t ? (1 * t).toFixed(3) : "0";
        },
            An = function An(t) {
          var e = T.performance;

          if (e && e.getEntriesByName) {
            n(35);
            var o = "https://www.google-analytics.com/analytics.js?wpid=" + t;
            g(o, void 0, void 0, function () {
              try {
                var i = 1,
                    r = e.getEntriesByName("https://www.google-analytics.com/analytics.js");
                r && 0 != r.length || (r = e.getEntriesByName("http://www.google-analytics.com/analytics.js"), i = 0);
                var s = e.getEntriesByName(o);

                if (r && 1 == r.length && s && 1 == s.length) {
                  n(37);
                  var a = r[0],
                      c = s[0],
                      l = {
                    tid: t,
                    ad: Ln(a.duration),
                    bd: Ln(c.duration),
                    ar: Ln(a.responseEnd - a.requestStart),
                    br: Ln(c.responseEnd - c.requestStart),
                    an: Ln(a.domainLookupEnd - a.domainLookupStart),
                    bn: Ln(c.domainLookupEnd - c.domainLookupStart),
                    ac: Ln(a.connectEnd - a.connectStart),
                    bc: Ln(c.connectEnd - c.connectStart),
                    as: i
                  };
                  i = [];

                  for (var u in i.push("_v=j48"), i.push("id=10"), l) {
                    l.hasOwnProperty(u) && i.push(u + "=" + h(l[u]));
                  }

                  i.push("z=" + Y()), O("https://www.google-analytics.com/u/d", i.join("&"), f);
                }
              } catch (d) {}
            });
          }
        },
            _n = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
            Sn = function Sn(t) {
          function e(t, e) {
            r.b.data.set(t, e);
          }

          function o(t, n) {
            e(t, n), r.filters.add(t);
          }

          function i(t, e, o) {
            $e(new Be(1e4, !0, e), r.b) && (t = A(t)) && 0 < t.length && n(o);
          }

          var r = this;
          this.b = new Z(), this.filters = new R(), e(Te, t[Te]), e(Ae, u(t[Ae])), e(_e, t[_e]), e(Se, t[Se] || b()), e(Ce, t[Ce]), e(je, t[je]), e(De, t[De]), e(Me, t[Me]), e(Oe, t[Oe]), e(Ne, t[Ne]), e(Ie, t[Ie]), e(Pe, t[Pe]), e(qe, t[qe]), e(He, t[He]), e(Le, t[Le]), e(ke, t[ke]), e(ft, 1), e(ht, "j48"), o(ce, F), o(le, X), o(ue, B), o(de, G), o(fe, Je), o(he, Ze), o(pe, V), o(me, J), o(we, W), o(be, K), o(Ee, kn), o(ge, $), o(ve, U), o(ye, Ge(this)), Cn(this.b, t[xe]), jn(this.b), this.b.set(pt, function () {
            var t = T.gaGlobal = T.gaGlobal || {};
            return t.hid = t.hid || Y();
          }()), function (t, e, n) {
            if (!pn) {
              var o;
              o = x.location.hash;
              var i = T.name,
                  r = /^#?gaso=([^&]*)/;
              (i = (o = (o = o && o.match(r) || i && i.match(r)) ? o[1] : A("GASO")[0] || "") && o.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) && (_("GASO", "" + o, n, e, t, 0), window._udo || (window._udo = e), window._utcp || (window._utcp = n), t = i[1], g("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (t ? "prefix=" + t + "&" : "") + Y(), "_gasojs")), pn = !0;
            }
          }(this.b.get(Ae), this.b.get(Se), this.b.get(Ce)), this.ra = new Be(1e4, !0, "gaexp10"), i("_gid", "gacookie11", 41), i("_gaid", "gacookie12", 44);
        },
            Cn = function Cn(t, e) {
          if ("cookie" == et(t, He)) {
            var o;
            Ye = !1;

            t: {
              var i = A(et(t, _e));

              if (i && !(1 > i.length)) {
                o = [];

                for (var r = 0; r < i.length; r++) {
                  var s,
                      a = (s = i[r].split(".")).shift();
                  ("GA1" == a || "1" == a) && 1 < s.length ? (1 == (a = s.shift().split("-")).length && (a[1] = "1"), a[0] *= 1, a[1] *= 1, s = {
                    H: a,
                    s: s.join(".")
                  }) : s = void 0, s && o.push(s);
                }

                if (1 == o.length) {
                  n(13), o = o[0].s;
                  break t;
                }

                if (0 != o.length) {
                  if (n(14), i = en(et(t, Se)).split(".").length, 1 == (o = tn(o, i, 0)).length) {
                    o = o[0].s;
                    break t;
                  }

                  i = on(et(t, Ce)), o = (o = tn(o, i, 1))[0] && o[0].s;
                  break t;
                }

                n(12);
              }

              o = void 0;
            }

            o || (o = et(t, Se), null != (o = rn("__utma", i = et(t, De) || b(), o)) ? (n(10), o = o.O[1] + "." + o.O[2]) : o = void 0), o && (t.data.set(xe, o), Ye = !0);
          }

          if (o = t.get(Ne), (r = w(x.location[o ? "href" : "search"], "_ga")) && (t.get(Oe) ? -1 == (o = r.indexOf(".")) ? n(22) : (i = r.substring(o + 1), "1" != r.substring(0, o) ? n(22) : -1 == (o = i.indexOf(".")) ? n(22) : (r = i.substring(0, o)) != ln(o = i.substring(o + 1), 0) && r != ln(o, -1) && r != ln(o, -2) ? n(23) : (n(11), t.data.set(xe, o))) : n(21)), e && (n(9), t.data.set(xe, h(e))), !t.get(xe)) if (e = (e = T.gaGlobal && T.gaGlobal.vid) && -1 != e.search(/^(?:utma\.)?\d+\.\d+$/) ? e : void 0) n(17), t.data.set(xe, e);else {
            for (n(8), o = (e = T.navigator.userAgent + (x.cookie ? x.cookie : "") + (x.referrer ? x.referrer : "")).length, i = T.history.length; 0 < i;) {
              e += i-- ^ o++;
            }

            t.data.set(xe, [Y() ^ 2147483647 & Zn(e), Math.round(new Date().getTime() / 1e3)].join("."));
          }
          ze(t);
        },
            jn = function jn(t) {
          var e = T.navigator,
              o = T.screen,
              i = x.location;

          if (t.set(Tt, function (t) {
            var e = x.referrer;

            if (/^https?:\/\//i.test(e)) {
              if (t) return e;
              t = "//" + x.location.hostname;
              var n = e.indexOf(t);
              if ((5 == n || 6 == n) && ("/" == (t = e.charAt(n + t.length)) || "?" == t || "" == t || ":" == t)) return;
              return e;
            }
          }(t.get(qe))), i) {
            var r = i.pathname || "";
            "/" != r.charAt(0) && (n(31), r = "/" + r), t.set(Et, i.protocol + "//" + i.hostname + r + i.search);
          }

          o && t.set(_t, o.width + "x" + o.height), o && t.set(At, o.colorDepth + "-bit");
          o = x.documentElement;
          var s = (r = x.body) && r.clientWidth && r.clientHeight,
              a = [];

          if (o && o.clientWidth && o.clientHeight && ("CSS1Compat" === x.compatMode || !s) ? a = [o.clientWidth, o.clientHeight] : s && (a = [r.clientWidth, r.clientHeight]), o = 0 >= a[0] || 0 >= a[1] ? "" : a.join("x"), t.set(St, o), t.set(jt, function () {
            var t, e, n;
            if ((n = (n = T.navigator) ? n.plugins : null) && n.length) for (var o = 0; o < n.length && !e; o++) {
              var i = n[o];
              -1 < i.name.indexOf("Shockwave Flash") && (e = i.description);
            }
            if (!e) try {
              e = (t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")).GetVariable("$version");
            } catch (s) {}
            if (!e) try {
              t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), e = "WIN 6,0,21,0", t.AllowScriptAccess = "always", e = t.GetVariable("$version");
            } catch (s) {}
            if (!e) try {
              e = (t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version");
            } catch (s) {}
            return e && (t = e.match(/[\d]+/g)) && 3 <= t.length && (e = t[0] + "." + t[1] + " r" + t[2]), e || void 0;
          }()), t.set(Lt, x.characterSet || x.charset), t.set(Ct, e && "function" == typeof e.javaEnabled && e.javaEnabled() || !1), t.set(kt, (e && (e.language || e.browserLanguage) || "").toLowerCase()), i && t.get(Ne) && (e = x.location.hash)) {
            for (e = e.split(/[?&#]+/), i = [], o = 0; o < e.length; ++o) {
              (l(e[o], "utm_id") || l(e[o], "utm_campaign") || l(e[o], "utm_source") || l(e[o], "utm_medium") || l(e[o], "utm_term") || l(e[o], "utm_content") || l(e[o], "gclid") || l(e[o], "dclid") || l(e[o], "gclsrc")) && i.push(e[o]);
            }

            0 < i.length && (e = "#" + i.join("&"), t.set(Et, t.get(Et) + e));
          }
        };

        Sn.prototype.get = function (t) {
          return this.b.get(t);
        }, Sn.prototype.set = function (t, e) {
          this.b.set(t, e);
        };
        var Dn = {
          pageview: [xt],
          event: [Dt, Mt, Ht, Ot],
          social: [Nt, It, Pt],
          timing: [Xt, Kt, Yt, Gt]
        };
        Sn.prototype.send = function (t) {
          var e, n;
          1 > arguments.length || ("string" == typeof arguments[0] ? (e = arguments[0], n = [].slice.call(arguments, 1)) : (e = arguments[0] && arguments[0][mt], n = arguments), e && ((n = y(Dn[e] || [], n))[mt] = e, this.b.set(n, void 0, !0), this.filters.D(this.b), this.b.data.m = {}, $e(this.ra, this.b) && An(this.b.get(Ae))));
        }, Sn.prototype.ma = function (t, e) {
          var n = this;
          Fn(t, n, e) || ($n(t, function () {
            Fn(t, n, e);
          }), Bn(String(n.get(Te)), t, void 0, e, !0));
        };

        var Mn,
            Hn,
            On,
            Nn,
            In = function In(t) {
          return "prerender" != x.visibilityState && (t(), !0);
        },
            Pn = function Pn(t) {
          if (!In(t)) {
            n(16);

            var e = !1,
                o = function o() {
              if (!e && In(t)) {
                e = !0;
                var n = o,
                    i = x;
                i.removeEventListener ? i.removeEventListener("visibilitychange", n, !1) : i.detachEvent && i.detachEvent("onvisibilitychange", n);
              }
            };

            p(x, "visibilitychange", o);
          }
        },
            qn = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
            Rn = function Rn(t) {
          if (s(t[0])) this.u = t[0];else {
            var e = qn.exec(t[0]);
            if (null != e && 4 == e.length && (this.c = e[1] || "t0", this.K = e[2] || "", this.C = e[3], this.a = [].slice.call(t, 1), this.K || (this.A = "create" == this.C, this.i = "require" == this.C, this.g = "provide" == this.C, this.ba = "remove" == this.C), this.i && (3 <= this.a.length ? (this.X = this.a[1], this.W = this.a[2]) : this.a[1] && (c(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1]))), e = t[1], t = t[2], !this.C) throw "abort";
            if (this.i && (!c(e) || "" == e)) throw "abort";
            if (this.g && (!c(e) || "" == e || !s(t))) throw "abort";
            if (Vn(this.c) || Vn(this.K)) throw "abort";
            if (this.g && "t0" != this.c) throw "abort";
          }
        };

        function Vn(t) {
          return 0 <= t.indexOf(".") || 0 <= t.indexOf(":");
        }

        Mn = new E(), On = new E(), Nn = new E(), Hn = {
          ec: 45,
          ecommerce: 46,
          linkid: 47
        };

        var Fn = function Fn(t, e, n) {
          e == Gn || e.get(Te);
          var o = Mn.get(t);
          return !!s(o) && (e.plugins_ = e.plugins_ || new E(), !!e.plugins_.get(t) || (e.plugins_.set(t, new o(e, n || {})), !0));
        },
            Bn = function Bn(t, e, o, i, r) {
          if (!s(Mn.get(e)) && !On.get(e)) {
            if (Hn.hasOwnProperty(e) && n(Hn[e]), mn.test(e)) {
              if (n(52), !(t = Gn.j(t))) return !0;
              i = {
                id: e,
                B: (o = i || {}).dataLayer || "dataLayer",
                ia: !!t.get("anonymizeIp"),
                na: r,
                G: !1
              }, t.get("&gtm") == e && (i.G = !0);
              var a = String(t.get("name"));
              "t0" != a && (i.target = a), L(String(t.get("trackingId"))) || (i.ja = String(t.get(xe)), i.ka = Number(t.get(ke)), o = o.palindrome ? vn : gn, o = (o = x.cookie.replace(/^|(; +)/g, ";").match(o)) ? o.sort().join("").substring(1) : void 0, i.la = o, i.qa = w(t.b.get(Et) || "", "gclid")), t = i.B, o = new Date().getTime(), T[t] = T[t] || [], o = {
                "gtm.start": o
              }, r || (o.event = "gtm.js"), T[t].push(o), o = function (t) {
                function e(t, e) {
                  e && (n += "&" + t + "=" + h(e));
                }

                var n = "https://www.google-analytics.com/gtm/js?id=" + h(t.id);
                return "dataLayer" != t.B && e("l", t.B), e("t", t.target), e("cid", t.ja), e("cidt", t.ka), e("gac", t.la), e("aip", t.ia), t.na && e("m", "sync"), e("cycle", t.G), t.qa && e("gclid", t.qa), n;
              }(i);
            }

            !o && Hn.hasOwnProperty(e) ? (n(39), o = e + ".js") : n(43), o && (o && 0 <= o.indexOf("/") || (o = (dt || v() ? "https:" : "http:") + "//www.google-analytics.com/plugins/ua/" + o), t = (i = Xn(o)).protocol, o = x.location.protocol, ("https:" == t || t == o || "http:" == t && "http:" == o) && Wn(i) && (g(i.url, void 0, r), On.set(e, !0)));
          }
        },
            $n = function $n(t, e) {
          var n = Nn.get(t) || [];
          n.push(e), Nn.set(t, n);
        },
            Un = function Un(t, e) {
          Mn.set(t, e), e = Nn.get(t) || [];

          for (var n = 0; n < e.length; n++) {
            e[n]();
          }

          Nn.set(t, []);
        },
            Wn = function Wn(t) {
          var e = Xn(x.location.href);
          return !!l(t.url, "https://www.google-analytics.com/gtm/js?id=") || !(t.query || 0 <= t.url.indexOf("?") || 0 <= t.path.indexOf("://")) && (t.host == e.host && t.port == e.port || (e = "http:" == t.protocol ? 80 : 443, !("www.google-analytics.com" != t.host || (t.port || e) != e || !l(t.path, "/plugins/"))));
        },
            Xn = function Xn(t) {
          function e(t) {
            var e = (t.hostname || "").split(":")[0].toLowerCase(),
                n = (t.protocol || "").toLowerCase();
            n = 1 * t.port || ("http:" == n ? 80 : "https:" == n ? 443 : "");
            return t = t.pathname || "", l(t, "/") || (t = "/" + t), [e, "" + n, t];
          }

          var n = x.createElement("a");
          n.href = x.location.href;
          var o = (n.protocol || "").toLowerCase(),
              i = e(n),
              r = n.search || "",
              s = o + "//" + i[0] + (i[1] ? ":" + i[1] : "");
          return l(t, "//") ? t = o + t : l(t, "/") ? t = s + t : !t || l(t, "?") ? t = s + i[2] + (t || r) : 0 > t.split("/")[0].indexOf(":") && (t = s + i[2].substring(0, i[2].lastIndexOf("/")) + "/" + t), n.href = t, o = e(n), {
            protocol: (n.protocol || "").toLowerCase(),
            host: o[0],
            port: o[1],
            path: o[2],
            query: n.search || "",
            url: t || ""
          };
        },
            Kn = {
          ga: function ga() {
            Kn.f = [];
          }
        };

        Kn.ga(), Kn.D = function (t) {
          var e = Kn.J.apply(Kn, arguments);
          e = Kn.f.concat(e);

          for (Kn.f = []; 0 < e.length && !Kn.v(e[0]) && (e.shift(), !(0 < Kn.f.length));) {
            ;
          }

          Kn.f = Kn.f.concat(e);
        }, Kn.J = function (t) {
          for (var e = [], n = 0; n < arguments.length; n++) {
            try {
              var o = new Rn(arguments[n]);
              o.g ? Un(o.a[0], o.a[1]) : (o.i && (o.ha = Bn(o.c, o.a[0], o.X, o.W)), e.push(o));
            } catch (Hr) {}
          }

          return e;
        }, Kn.v = function (t) {
          try {
            if (t.u) t.u.call(T, Gn.j("t0"));else {
              var e = t.c == ut ? Gn : Gn.j(t.c);
              if (t.A) "t0" != t.c || Gn.create.apply(Gn, t.a);else if (t.ba) Gn.remove(t.c);else if (e) if (t.i) {
                if (t.ha && (t.ha = Bn(t.c, t.a[0], t.X, t.W)), !Fn(t.a[0], e, t.W)) return !0;
              } else if (t.K) {
                var n = t.C,
                    o = t.a,
                    i = e.plugins_.get(t.K);
                i[n].apply(i, o);
              } else e[t.C].apply(e, t.a);
            }
          } catch (r) {}
        };

        var Gn = function Gn(t) {
          n(1), Kn.D.apply(Kn, [arguments]);
        };

        Gn.h = {}, Gn.P = [], Gn.L = 0, Gn.answer = 42;
        var Yn = [Ae, Se, Te];
        Gn.create = function (t) {
          var e = y(Yn, [].slice.call(arguments));
          e[Te] || (e[Te] = "t0");
          var n = "" + e[Te];
          return Gn.h[n] ? Gn.h[n] : (e = new Sn(e), Gn.h[n] = e, Gn.P.push(e), e);
        }, Gn.remove = function (t) {
          for (var e = 0; e < Gn.P.length; e++) {
            if (Gn.P[e].get(Te) == t) {
              Gn.P.splice(e, 1), Gn.h[t] = null;
              break;
            }
          }
        }, Gn.j = function (t) {
          return Gn.h[t];
        }, Gn.getAll = function () {
          return Gn.P.slice(0);
        }, Gn.N = function () {
          "ga" != ut && n(49);
          var t = T[ut];

          if (!t || 42 != t.answer) {
            if (Gn.L = t && t.l, Gn.loaded = !0, Fe("create", e = T[ut] = Gn, e.create), Fe("remove", e, e.remove), Fe("getByName", e, e.j, 5), Fe("getAll", e, e.getAll, 6), Fe("get", e = Sn.prototype, e.get, 7), Fe("set", e, e.set, 4), Fe("send", e, e.send), Fe("requireSync", e, e.ma), Fe("get", e = Z.prototype, e.get), Fe("set", e, e.set), !v() && !dt) {
              t: {
                for (var e = x.getElementsByTagName("script"), o = 0; o < e.length && 100 > o; o++) {
                  var i = e[o].src;

                  if (i && 0 == i.indexOf("https://www.google-analytics.com/analytics")) {
                    n(33), e = !0;
                    break t;
                  }
                }

                e = !1;
              }

              e && (dt = !0);
            }

            v() || dt || !$e(new Be(1e4)) || (n(36), dt = !0), (T.gaplugins = T.gaplugins || {}).Linker = un, e = un.prototype, Un("linker", un), Fe("decorate", e, e.ca, 20), Fe("autoLink", e, e.S, 25), Un("displayfeatures", xn), Un("adfeatures", xn), t = t && t.q, a(t) ? Kn.D.apply(Gn, t) : n(50);
          }
        }, Gn.da = function () {
          for (var t = Gn.getAll(), e = 0; e < t.length; e++) {
            t[e].get(Te);
          }
        };
        var zn = Gn.N,
            Jn = T[ut];

        function Zn(t) {
          var e,
              n,
              o = 1;
          if (t) for (o = 0, n = t.length - 1; 0 <= n; n--) {
            o = 0 != (e = 266338304 & (o = (o << 6 & 268435455) + (e = t.charCodeAt(n)) + (e << 14))) ? o ^ e >> 21 : o;
          }
          return o;
        }

        Jn && Jn.r ? zn() : Pn(zn), Pn(function () {
          Kn.D(["provide", "render", f]);
        });
      }(), function () {
        var t = window,
            e = "push",
            n = "length",
            o = "prototype",
            i = function i(t) {
          if (t.get && t.set) {
            this.clear();
            var e = t.get("buildHitTask");
            t.set("buildHitTask", d(this, e)), t.set("_rlt", f(this, t.get("_rlt")));
          }
        },
            r = {
          action: "pa",
          promoAction: "promoa",
          id: "ti",
          affiliation: "ta",
          revenue: "tr",
          tax: "tt",
          shipping: "ts",
          coupon: "tcc",
          step: "cos",
          label: "col",
          option: "col",
          options: "col",
          list: "pal",
          listSource: "pls"
        },
            s = {
          id: "id",
          name: "nm",
          brand: "br",
          category: "ca",
          variant: "va",
          position: "ps",
          price: "pr",
          quantity: "qt",
          coupon: "cc",
          "dimension(\\d+)": "cd",
          "metric(\\d+)": "cm"
        },
            a = {
          id: "id",
          name: "nm",
          creative: "cr",
          position: "ps"
        },
            c = function c(t, e) {
          this.name = t, this.source = e, this.e = [];
        },
            l = "detail checkout checkout_option click add remove purchase refund".split(" ");

        i[o].clear = function () {
          this.b = void 0, this.f = [], this.a = [], this.g = [], this.d = void 0;
        }, i[o].h = function (t, e) {
          var n = e || {};
          "promo_click" == t ? n.promoAction = "click" : n.action = t, this.b = h(n);
        }, i[o].j = function (t) {
          (t = h(t)) && this.f[e](t);
        }, i[o].i = function (t) {
          var o = h(t);

          if (o) {
            var i,
                r = t.list || "";
            t = t.listSource || "";

            for (var s = 0; s < this.a[n]; s++) {
              if (this.a[s].name == r) {
                i = this.a[s];
                break;
              }
            }

            i || (i = new c(r, t), this.a[e](i)), i.e[e](o);
          }
        }, i[o].c = function (t) {
          (t = h(t)) && this.g[e](t);
        };

        var u = function u(t, e, i) {
          if ("[object Array]" == Object[o].toString.call(Object(t))) for (var r = 0; r < t[n]; r++) {
            e.call(i, t[r]);
          }
        };

        i[o].data = function (t) {
          if (t && t.ecommerce) {
            (t = t.ecommerce).promoView && u(t.promoView.promotions, this.c, this), t.promoClick && (this.h("promo_click", t.promoClick.actionField), u(t.promoClick.promotions, this.c, this));

            for (var e = 0; e < l[n]; e++) {
              var o = t[l[e]];

              if (o) {
                this.h(l[e], o.actionField), u(o.products, this.j, this);
                break;
              }
            }

            u(t.impressions, this.i, this), t.currencyCode && (this.d = t.currencyCode);
          }
        };

        var d = function d(t, e) {
          return function (o) {
            var i, c, l;

            for (t.b && p(r, t.b, o, "&"), i = 0; i < t.f[n]; i++) {
              c = "&pr" + (i + 1), p(s, t.f[i], o, c);
            }

            for (i = 0; i < t.a[n]; i++) {
              c = "&il" + (i + 1), (l = t.a[i]).name && o.set(c + "nm", l.name, !0), l.source && o.set(c + "ls", l.source, !0);

              for (var u = 0; u < l.e[n]; u++) {
                p(s, l.e[u], o, c + "pi" + (u + 1));
              }
            }

            for (i = 0; i < t.g[n]; i++) {
              c = "&promo" + (i + 1), p(a, t.g[i], o, c);
            }

            return t.d && o.set("&cu", t.d, !0), t.clear(), e(o);
          };
        },
            f = function f(t, e) {
          return function (n) {
            var o = t.b && t.b.action;
            if ("purchase" != o && "refund" != o) return e(n);
          };
        },
            h = function h(t) {
          var e = 0,
              n = {};
          if (t && "object" == _typeof(t)) for (var o in t) {
            t.hasOwnProperty(o) && (n[o] = t[o], e++);
          }
          return e ? n : void 0;
        },
            p = function p(t, e, n, o) {
          for (var i in e) {
            if (e.hasOwnProperty(i)) for (var r in t) {
              if (t.hasOwnProperty(r)) {
                var s = i.match("^" + r + "$");
                s && n.set(o + t[r] + s.slice(1).join(""), e[i], !0);
              }
            }
          }
        };

        !function () {
          t.gaplugins = t.gaplugins || {}, t.gaplugins.EC = i, i[o].setAction = i[o].h, i[o].addProduct = i[o].j, i[o].addImpression = i[o].i, i[o].addPromo = i[o].c, i[o].clear = i[o].clear, i[o].data = i[o].data;
          var n = t.GoogleAnalyticsObject || "ga";
          t[n] = t[n] || function () {
            (t[n].q = t[n].q || [])[e](arguments);
          }, t[n]("provide", "ec", i);
        }();
      }(), window.ga || (window.ga = function () {
        window.ga.q.push(arguments);
      }, window.ga.q = []);
      var Ki = "ontransitionend" in window;

      function Gi(t) {
        return "height" === getComputedStyle(t).transitionProperty;
      }

      function Yi(t, e) {
        t.style.transition = "none", e(), t.offsetHeight, t.style.transition = "";
      }

      function zi(t, e) {
        var n = t.getAttribute("data-details-container") || ".js-details-container",
            o = c(t, n);
        !function (t, e) {
          if (!Ki) return void e();
          var n = Array.from(t.querySelectorAll(".js-transitionable"));
          t.classList.contains("js-transitionable") && n.push(t);

          var _loop4 = function _loop4() {
            var o = _n24[_i14];
            var t = Gi(o);
            _instanceof(o, HTMLElement) && (o.addEventListener("transitionend", function () {
              o.style.display = "", o.style.visibility = "", t && Yi(o, function () {
                o.style.height = "";
              });
            }, {
              once: !0
            }), o.style.boxSizing = "content-box", o.style.display = "block", o.style.visibility = "visible", t && Yi(o, function () {
              o.style.height = getComputedStyle(o).height;
            }), o.offsetHeight);
          };

          for (var _i14 = 0, _n24 = n; _i14 < _n24.length; _i14++) {
            _loop4();
          }

          e();

          for (var _i15 = 0, _n25 = n; _i15 < _n25.length; _i15++) {
            var _o19 = _n25[_i15];

            if (_instanceof(_o19, HTMLElement) && Gi(_o19)) {
              var _t37 = getComputedStyle(_o19).height;
              _o19.style.boxSizing = "", _o19.style.height = "0px" === _t37 ? "".concat(_o19.scrollHeight, "px") : "0px";
            }
          }
        }(o, function () {
          var n = null != e ? e : !o.classList.contains("open");
          o.classList.toggle("open", n), o.classList.toggle("Details--on", n), t.setAttribute("aria-expanded", n.toString()), Promise.resolve().then(function () {
            !function (t) {
              var e = t.querySelectorAll("input[autofocus], textarea[autofocus]"),
                  n = e[e.length - 1];
              _instanceof(n, HTMLElement) && document.activeElement !== n && n.focus();
            }(o), function (t) {
              t.classList.contains("tooltipped") && (t.classList.remove("tooltipped"), t.addEventListener("mouseleave", function () {
                t.classList.add("tooltipped"), _instanceof(t, HTMLElement) && t.blur();
              }, {
                once: !0
              }));
            }(t), function (t) {
              var e = t.closest(".js-edit-repository-meta");
              _instanceof(e, HTMLFormElement) && e.reset();
            }(t);
            var e = new CustomEvent("details:toggled", {
              bubbles: !0,
              cancelable: !1,
              detail: {
                open: o.classList.contains("Details--on")
              }
            });
            o.dispatchEvent(e);
          });
        });
      }

      function Ji(t) {
        var e = !1,
            n = t.parentElement;

        for (; n;) {
          n.classList.contains("Details-content--shown") && (e = !0), n.classList.contains("js-details-container") && (n.classList.toggle("open", !e), n.classList.toggle("Details--on", !e), e = !1), n = n.parentElement;
        }
      }

      function Zi(t) {
        var e = t;
        var n = e.ownerDocument;
        if (!n) return;
        if (!e.offsetParent) return;
        var o = n.defaultView.HTMLElement;

        if (e !== n.body) {
          for (; e !== n.body;) {
            if (!_instanceof(e.parentElement, o)) return;
            e = e.parentElement;

            var _getComputedStyle = getComputedStyle(e),
                _t38 = _getComputedStyle.position,
                _n26 = _getComputedStyle.overflowY,
                _i16 = _getComputedStyle.overflowX;

            if ("fixed" === _t38 || "auto" === _n26 || "auto" === _i16 || "scroll" === _n26 || "scroll" === _i16) break;
          }

          return _instanceof(e, Document) ? null : e;
        }
      }

      function Qi(t, e) {
        var n = e;
        var o = t.ownerDocument;
        if (!o) return;
        if (!o.body) return;
        var i = o.documentElement;
        if (!i) return;
        if (t === i) return;
        var r = tr(t, n);
        if (!r) return;
        n = r._container;
        var s = n === o.documentElement ? {
          top: o.defaultView.pageYOffset,
          left: o.defaultView.pageXOffset
        } : {
          top: n.scrollTop,
          left: n.scrollLeft
        },
            a = r.top - s.top,
            c = r.left - s.left,
            l = n.clientHeight,
            u = n.clientWidth;
        return {
          top: a,
          left: c,
          bottom: l - (a + t.offsetHeight),
          right: u - (c + t.offsetWidth),
          height: l,
          width: u
        };
      }

      function tr(t, e) {
        var n = t;
        var o = n.ownerDocument;
        if (!o) return;
        var i = o.documentElement;
        if (!i) return;
        var r = o.body;
        if (!r) return;
        var s = o.defaultView.HTMLElement;
        var a = 0,
            c = 0;
        var l = n.offsetHeight,
            u = n.offsetWidth;

        for (; n !== o.body && n !== e;) {
          if (a += n.offsetTop || 0, c += n.offsetLeft || 0, !_instanceof(n.offsetParent, s)) return;
          n = n.offsetParent;
        }

        var d, f, h;

        if (e && e !== o && e !== o.defaultView && e !== o.documentElement && e !== o.body) {
          if (!_instanceof(e, s)) return;
          h = e, d = e.scrollHeight, f = e.scrollWidth;
        } else h = i, d = function (t, e) {
          return Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, e.clientHeight);
        }(r, i), f = function (t, e) {
          return Math.max(t.scrollWidth, e.scrollWidth, t.offsetWidth, e.offsetWidth, e.clientWidth);
        }(r, i);

        return {
          top: a,
          left: c,
          bottom: d - (a + l),
          right: f - (c + u),
          _container: h
        };
      }

      function er(t, e) {
        var n = t;
        var o = t.ownerDocument;
        n !== o && n !== o.defaultView && n !== o.documentElement && n !== o.body || (n = o);
        var i = o.defaultView.Document,
            r = o.defaultView.HTMLElement;

        if (_instanceof(n, i)) {
          var _t39 = null != e.top ? e.top : o.defaultView.pageYOffset,
              _n27 = null != e.left ? e.left : o.defaultView.pageXOffset;

          o.defaultView.scrollTo(_n27, _t39);
        } else {
          if (!_instanceof(n, r)) throw new Error("invariant: container is not HTMLElement -- app/assets/modules/github/scrollto.js:23");
          n.scrollTop = e.top, null != e.left && (n.scrollLeft = e.left);
        }
      }

      Ht("click", ".js-details-target", function (t) {
        var e = t.currentTarget;
        _instanceof(e, HTMLElement) && (zi(e), t.preventDefault());
      }), Mi(function (_ref18) {
        var t = _ref18.target;
        t && Ji(t);
      });
      var nr = navigator.userAgent.match(/Macintosh/),
          or = nr ? "metaKey" : "ctrlKey",
          ir = nr ? "Meta" : "Control";
      var rr = !1,
          sr = {
        x: 0,
        y: 0
      };

      function ar(t) {
        _instanceof(t, MouseEvent) && (sr.x === t.clientX && sr.y === t.clientY || (rr = !1), sr = {
          x: t.clientX,
          y: t.clientY
        });
      }

      function cr(t) {
        if (rr) return;
        var e = t.currentTarget,
            n = t.target;
        if (!(_instanceof(n, Element) && _instanceof(e, HTMLElement) && e.closest(".js-active-navigation-container"))) return;
        var o = n.closest(".js-navigation-item");
        o && br(o, e);
      }

      me(".js-navigation-container:not(.js-navigation-container-no-mouse)", {
        subscribe: function subscribe(t) {
          return jo(Co(t, "mouseover", ar), Co(t, "mouseover", cr));
        }
      });
      var lr = 0;

      function ur(t) {
        if (t.target !== document.body && _instanceof(t.target, HTMLElement) && !t.target.classList.contains("js-navigation-enable")) return;
        rr = !0;
        var e = yr();
        var n = !1;

        if (e) {
          n = Ot(e.querySelector('.js-navigation-item[aria-selected="true"]') || e, "navigation:keydown", {
            hotkey: vo(t),
            originalEvent: t,
            originalTarget: t.target
          });
        }

        n || t.preventDefault();
      }

      function dr(t) {
        Ot(t.currentTarget, "navigation:open", {
          modifierKey: t.modifierKey || t.altKey || t.ctrlKey || t.metaKey,
          shiftKey: t.shiftKey
        }) || t.preventDefault();
      }

      function fr(t) {
        var e = yr();
        t !== e && (e && hr(e), t.classList.add("js-active-navigation-container"));
      }

      function hr(t) {
        t.classList.remove("js-active-navigation-container");
      }

      function pr(t, e) {
        e || (e = t);
        var n = Er(t)[0],
            o = e.closest(".js-navigation-item") || n;

        if (fr(t), _instanceof(o, HTMLElement)) {
          if (br(o, t)) return;

          var _e21 = Zi(o);

          if (!_e21) throw new Error("invariant: app/assets/modules/github/navigation.js:481");
          kr(_e21, o);
        }
      }

      function mr(t) {
        var e = t.querySelectorAll(".js-navigation-item[aria-selected]");
        var _iteratorNormalCompletion36 = true;
        var _didIteratorError36 = false;
        var _iteratorError36 = undefined;

        try {
          for (var _iterator36 = e[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
            var _n28 = _step36.value;
            _n28.classList.remove("navigation-focus"), _n28.setAttribute("aria-selected", "false");
          }
        } catch (err) {
          _didIteratorError36 = true;
          _iteratorError36 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion36 && _iterator36["return"] != null) {
              _iterator36["return"]();
            }
          } finally {
            if (_didIteratorError36) {
              throw _iteratorError36;
            }
          }
        }
      }

      function gr(t, e) {
        var n = Er(e),
            o = n.indexOf(t),
            i = n[o - 1];

        if (i) {
          if (br(i, e)) return;

          var _t40 = Zi(i);

          if (!_t40) throw new Error("invariant: app/assets/modules/github/navigation.js:529");
          "page" === Tr(e) ? xr(_t40, i) : kr(_t40, i);
        }
      }

      function vr(t, e) {
        var n = Er(e),
            o = n.indexOf(t),
            i = n[o + 1];

        if (i) {
          if (br(i, e)) return;

          var _t41 = Zi(i);

          if (!_t41) throw new Error("invariant: app/assets/modules/github/navigation.js:558");
          "page" === Tr(e) ? xr(_t41, i) : kr(_t41, i);
        }
      }

      function wr(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        Ot(t, "navigation:keyopen", {
          modifierKey: e
        });
      }

      function br(t, e) {
        return !Ot(t, "navigation:focus") || (mr(e), t.classList.add("navigation-focus"), t.setAttribute("aria-selected", "true"), !1);
      }

      function yr() {
        return document.querySelector(".js-active-navigation-container");
      }

      function Er(t) {
        return Array.from(t.querySelectorAll(".js-navigation-item")).filter(Ci);
      }

      function Tr(t) {
        return t.getAttribute("data-navigation-scroll") || "item";
      }

      function xr(t, e) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "smooth";
        var o = Qi(e, t);
        o && (o.bottom <= 0 ? e.scrollIntoView({
          behavior: n,
          block: "start"
        }) : o.top <= 0 && e.scrollIntoView({
          behavior: n,
          block: "end"
        }));
      }

      function kr(t, e) {
        var n = tr(e, t),
            o = Qi(e, t);
        if (null != n && null != o) if (o.bottom <= 0 && document.body) {
          er(t, {
            top: (null != t.offsetParent ? t.scrollHeight : document.body.scrollHeight) - (n.bottom + o.height)
          });
        } else o.top <= 0 && er(t, {
          top: n.top
        });
      }

      me(".js-active-navigation-container", {
        add: function add() {
          lr++, 1 === lr && document.addEventListener("keydown", ur);
        },
        remove: function remove() {
          lr--, 0 === lr && document.removeEventListener("keydown", ur);
        }
      }), Ht("navigation:keydown", ".js-active-navigation-container", function (t) {
        if (!_instanceof(t, CustomEvent)) throw new Error("invariant: app/assets/modules/github/navigation.js:208");
        var e = t.currentTarget,
            n = t.detail.originalTarget.matches("input, textarea"),
            o = t.target;
        if (o.classList.contains("js-navigation-item")) {
          if (n) {
            if (nr) switch (vo(t.detail.originalEvent)) {
              case "Control+n":
                vr(o, e);
                break;

              case "Control+p":
                gr(o, e);
            }

            switch (vo(t.detail.originalEvent)) {
              case "ArrowUp":
                gr(o, e);
                break;

              case "ArrowDown":
                vr(o, e);
                break;

              case "Enter":
              case "".concat(ir, "+Enter"):
                wr(o, t.detail.originalEvent[or]);
            }
          } else {
            if (nr) switch (vo(t.detail.originalEvent)) {
              case "Control+n":
                vr(o, e);
                break;

              case "Control+p":
                gr(o, e);
                break;

              case "Alt+v":
                !function (t, e) {
                  var n = Er(e);
                  var o = n.indexOf(t);
                  var i = Zi(t);
                  if (null == i) return;
                  var r, s;

                  for (; (r = n[o - 1]) && (s = Qi(r, i)) && s.top >= 0;) {
                    o--;
                  }

                  if (r) {
                    if (br(r, e)) return;
                    xr(i, r);
                  }
                }(o, e);
                break;

              case "Control+v":
                !function (t, e) {
                  var n = Er(e);
                  var o = n.indexOf(t);
                  var i = Zi(t);
                  if (null == i) return;
                  var r, s;

                  for (; (r = n[o + 1]) && (s = Qi(r, i)) && s.bottom >= 0;) {
                    o++;
                  }

                  if (r) {
                    if (br(r, e)) return;
                    xr(i, r);
                  }
                }(o, e);
            }

            switch (vo(t.detail.originalEvent)) {
              case "j":
              case "J":
                vr(o, e);
                break;

              case "k":
              case "K":
                gr(o, e);
                break;

              case "o":
              case "Enter":
              case "".concat(ir, "+Enter"):
                wr(o, t.detail[or]);
            }
          }
        } else {
          var _o20 = Er(e)[0];
          if (_o20) if (n) {
            if (nr) switch (vo(t.detail.originalEvent)) {
              case "Control+n":
                br(_o20, e);
            }

            switch (vo(t.detail.originalEvent)) {
              case "ArrowDown":
                br(_o20, e);
            }
          } else {
            if (nr) switch (vo(t.detail.originalEvent)) {
              case "Control+n":
              case "Control+v":
                br(_o20, e);
            }

            switch (vo(t.detail.originalEvent)) {
              case "j":
                br(_o20, e);
            }
          }
        }

        if (n) {
          if (nr) switch (vo(t.detail.originalEvent)) {
            case "Control+n":
            case "Control+p":
              t.preventDefault();
          }

          switch (vo(t.detail.originalEvent)) {
            case "ArrowUp":
            case "ArrowDown":
              t.preventDefault();
              break;

            case "Enter":
              t.preventDefault();
          }
        } else {
          if (nr) switch (vo(t.detail.originalEvent)) {
            case "Control+n":
            case "Control+p":
            case "Control+v":
            case "Alt+v":
              t.preventDefault();
          }

          switch (vo(t.detail.originalEvent)) {
            case "j":
            case "k":
              t.preventDefault();
              break;

            case "o":
            case "Enter":
            case "".concat(or, "+Enter"):
              t.preventDefault();
          }
        }
      }), Ht("click", ".js-active-navigation-container .js-navigation-item", function (t) {
        if (!_instanceof(t, MouseEvent)) throw new Error("invariant: app/assets/modules/github/navigation.js:379");
        dr(t);
      }), Ht("navigation:keyopen", ".js-active-navigation-container .js-navigation-item", function (t) {
        if (!_instanceof(t, CustomEvent)) throw new Error("invariant: app/assets/modules/github/navigation.js:384");
        var e = t.currentTarget.classList.contains("js-navigation-open") ? t.currentTarget : t.currentTarget.querySelector(".js-navigation-open");

        if (e) {
          if (t.detail.modifierKey) window.open(e.href, "_blank"), window.focus();else {
            e.dispatchEvent(new MouseEvent("click", {
              bubbles: !0,
              cancelable: !0
            })) && e.click();
          }
          t.preventDefault();
        } else dr(t);
      });
      var Lr = tn(function (t) {
        /**!
               * Sortable
               * @author	RubaXa   <trash@rubaxa.org>
               * @license MIT
               */
        var e;
        e = function e() {
          if ("undefined" == typeof window || !window.document) return function () {
            throw new Error("Sortable.js requires a window with a document");
          };

          var t,
              e,
              n,
              o,
              i,
              r,
              s,
              a,
              c,
              l,
              u,
              d,
              f,
              h,
              p,
              m,
              g,
              v,
              w,
              b,
              y,
              E = {},
              T = /\s+/g,
              x = /left|right|inline/,
              k = "Sortable" + new Date().getTime(),
              L = window,
              A = L.document,
              _ = L.parseInt,
              S = L.setTimeout,
              C = L.jQuery || L.Zepto,
              j = L.Polymer,
              D = !1,
              M = "draggable" in A.createElement("div"),
              H = function (t) {
            return !navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i) && ((t = A.createElement("x")).style.cssText = "pointer-events:auto", "auto" === t.style.pointerEvents);
          }(),
              O = !1,
              N = Math.abs,
              I = Math.min,
              P = [],
              q = [],
              R = function R() {
            return !1;
          },
              V = it(function (t, e, n) {
            if (n && e.scroll) {
              var o,
                  i,
                  r,
                  s,
                  a,
                  d,
                  f = n[k],
                  h = e.scrollSensitivity,
                  p = e.scrollSpeed,
                  m = t.clientX,
                  g = t.clientY,
                  v = window.innerWidth,
                  w = window.innerHeight;

              if (l !== n && (c = e.scroll, l = n, u = e.scrollFn, !0 === c)) {
                c = n;

                do {
                  if (c.offsetWidth < c.scrollWidth || c.offsetHeight < c.scrollHeight) break;
                } while (c = c.parentNode);
              }

              c && (o = c, i = c.getBoundingClientRect(), r = (N(i.right - m) <= h) - (N(i.left - m) <= h), s = (N(i.bottom - g) <= h) - (N(i.top - g) <= h)), r || s || (s = (w - g <= h) - (g <= h), ((r = (v - m <= h) - (m <= h)) || s) && (o = L)), E.vx === r && E.vy === s && E.el === o || (E.el = o, E.vx = r, E.vy = s, clearInterval(E.pid), o && (E.pid = setInterval(function () {
                if (d = s ? s * p : 0, a = r ? r * p : 0, "function" == typeof u) return u.call(f, a, d, t);
                o === L ? L.scrollTo(L.pageXOffset + a, L.pageYOffset + d) : (o.scrollTop += d, o.scrollLeft += a);
              }, 24)));
            }
          }, 30),
              F = function F(t) {
            function e(t, e) {
              return null != t && !0 !== t || null != (t = n.name) ? "function" == typeof t ? t : function (n, o) {
                var i = o.options.group.name;
                return e ? t : t && (t.join ? t.indexOf(i) > -1 : i == t);
              } : R;
            }

            var n = {},
                o = t.group;
            o && "object" == _typeof(o) || (o = {
              name: o
            }), n.name = o.name, n.checkPull = e(o.pull, !0), n.checkPut = e(o.put), n.revertClone = o.revertClone, t.group = n;
          };

          try {
            window.addEventListener("test", null, Object.defineProperty({}, "passive", {
              get: function get() {
                D = {
                  capture: !1,
                  passive: !1
                };
              }
            }));
          } catch (ct) {}

          function B(t, e) {
            if (!t || !t.nodeType || 1 !== t.nodeType) throw "Sortable: `el` must be HTMLElement, and not " + {}.toString.call(t);
            this.el = t, this.options = e = rt({}, e), t[k] = this;
            var n = {
              group: null,
              sort: !0,
              disabled: !1,
              store: null,
              handle: null,
              scroll: !0,
              scrollSensitivity: 30,
              scrollSpeed: 10,
              draggable: /[uo]l/i.test(t.nodeName) ? "li" : ">*",
              ghostClass: "sortable-ghost",
              chosenClass: "sortable-chosen",
              dragClass: "sortable-drag",
              ignore: "a, img",
              filter: null,
              preventOnFilter: !0,
              animation: 0,
              setData: function setData(t, e) {
                t.setData("Text", e.textContent);
              },
              dropBubble: !1,
              dragoverBubble: !1,
              dataIdAttr: "data-id",
              delay: 0,
              forceFallback: !1,
              fallbackClass: "sortable-fallback",
              fallbackOnBody: !1,
              fallbackTolerance: 0,
              fallbackOffset: {
                x: 0,
                y: 0
              },
              supportPointer: !1 !== B.supportPointer
            };

            for (var o in n) {
              !(o in e) && (e[o] = n[o]);
            }

            for (var i in F(e), this) {
              "_" === i.charAt(0) && "function" == typeof this[i] && (this[i] = this[i].bind(this));
            }

            this.nativeDraggable = !e.forceFallback && M, X(t, "mousedown", this._onTapStart), X(t, "touchstart", this._onTapStart), e.supportPointer && X(t, "pointerdown", this._onTapStart), this.nativeDraggable && (X(t, "dragover", this), X(t, "dragenter", this)), q.push(this._onDragOver), e.store && this.sort(e.store.get(this));
          }

          function $(e, n) {
            "clone" !== e.lastPullMode && (n = !0), i && i.state !== n && (Y(i, "display", n ? "none" : ""), n || i.state && (e.options.group.revertClone ? (r.insertBefore(i, s), e._animate(t, i)) : r.insertBefore(i, t)), i.state = n);
          }

          function U(t, e, n) {
            if (t) {
              n = n || A;

              do {
                if (">*" === e && t.parentNode === n || ot(t, e)) return t;
              } while (t = W(t));
            }

            return null;
          }

          function W(t) {
            var e = t.host;
            return e && e.nodeType ? e : t.parentNode;
          }

          function X(t, e, n) {
            t.addEventListener(e, n, D);
          }

          function K(t, e, n) {
            t.removeEventListener(e, n, D);
          }

          function G(t, e, n) {
            if (t) if (t.classList) t.classList[n ? "add" : "remove"](e);else {
              var o = (" " + t.className + " ").replace(T, " ").replace(" " + e + " ", " ");
              t.className = (o + (n ? " " + e : "")).replace(T, " ");
            }
          }

          function Y(t, e, n) {
            var o = t && t.style;

            if (o) {
              if (void 0 === n) return A.defaultView && A.defaultView.getComputedStyle ? n = A.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), void 0 === e ? n : n[e];
              e in o || (e = "-webkit-" + e), o[e] = n + ("string" == typeof n ? "" : "px");
            }
          }

          function z(t, e, n) {
            if (t) {
              var o = t.getElementsByTagName(e),
                  i = 0,
                  r = o.length;
              if (n) for (; i < r; i++) {
                n(o[i], i);
              }
              return o;
            }

            return [];
          }

          function J(t, e, n, o, r, s, a, c) {
            t = t || e[k];
            var l = A.createEvent("Event"),
                u = t.options,
                d = "on" + n.charAt(0).toUpperCase() + n.substr(1);
            l.initEvent(n, !0, !0), l.to = r || e, l.from = s || e, l.item = o || e, l.clone = i, l.oldIndex = a, l.newIndex = c, e.dispatchEvent(l), u[d] && u[d].call(t, l);
          }

          function Z(t, e, n, o, i, r, s, a) {
            var c,
                l,
                u = t[k],
                d = u.options.onMove;
            return (c = A.createEvent("Event")).initEvent("move", !0, !0), c.to = e, c.from = t, c.dragged = n, c.draggedRect = o, c.related = i || e, c.relatedRect = r || e.getBoundingClientRect(), c.willInsertAfter = a, t.dispatchEvent(c), d && (l = d.call(u, c, s)), l;
          }

          function Q(t) {
            t.draggable = !1;
          }

          function tt() {
            O = !1;
          }

          function et(t) {
            for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, o = 0; n--;) {
              o += e.charCodeAt(n);
            }

            return o.toString(36);
          }

          function nt(t, e) {
            var n = 0;
            if (!t || !t.parentNode) return -1;

            for (; t && (t = t.previousElementSibling);) {
              "TEMPLATE" === t.nodeName.toUpperCase() || ">*" !== e && !ot(t, e) || n++;
            }

            return n;
          }

          function ot(t, e) {
            if (t) {
              var n = (e = e.split(".")).shift().toUpperCase(),
                  o = new RegExp("\\s(" + e.join("|") + ")(?=\\s)", "g");
              return !("" !== n && t.nodeName.toUpperCase() != n || e.length && ((" " + t.className + " ").match(o) || []).length != e.length);
            }

            return !1;
          }

          function it(t, e) {
            var n, o;
            return function () {
              void 0 === n && (n = arguments, o = this, S(function () {
                1 === n.length ? t.call(o, n[0]) : t.apply(o, n), n = void 0;
              }, e));
            };
          }

          function rt(t, e) {
            if (t && e) for (var n in e) {
              e.hasOwnProperty(n) && (t[n] = e[n]);
            }
            return t;
          }

          function st(t) {
            return S(t, 0);
          }

          function at(t) {
            return clearTimeout(t);
          }

          return B.prototype = {
            constructor: B,
            _onTapStart: function _onTapStart(e) {
              var n,
                  o = this,
                  i = this.el,
                  r = this.options,
                  s = r.preventOnFilter,
                  c = e.type,
                  l = e.touches && e.touches[0],
                  u = (l || e).target,
                  d = e.target.shadowRoot && e.path && e.path[0] || u,
                  f = r.filter;

              if (function (t) {
                P.length = 0;

                for (var e = t.getElementsByTagName("input"), n = e.length; n--;) {
                  var o = e[n];
                  o.checked && P.push(o);
                }
              }(i), !t && !(/mousedown|pointerdown/.test(c) && 0 !== e.button || r.disabled) && !d.isContentEditable && (u = U(u, r.draggable, i)) && a !== u) {
                if (n = nt(u, r.draggable), "function" == typeof f) {
                  if (f.call(this, e, u, this)) return J(o, d, "filter", u, i, i, n), void (s && e.preventDefault());
                } else if (f && (f = f.split(",").some(function (t) {
                  if (t = U(d, t.trim(), i)) return J(o, t, "filter", u, i, i, n), !0;
                }))) return void (s && e.preventDefault());

                r.handle && !U(d, r.handle, i) || this._prepareDragStart(e, l, u, n);
              }
            },
            _prepareDragStart: function _prepareDragStart(o, i, c, l) {
              var u,
                  d = this,
                  f = d.el,
                  h = d.options,
                  m = f.ownerDocument;
              c && !t && c.parentNode === f && (w = o, r = f, t = c, h.handleReplacedDragElement && (e = c.getAttribute("id")), n = t.parentNode, s = t.nextSibling, a = c, g = h.group, p = l, this._lastX = (i || o).clientX, this._lastY = (i || o).clientY, t.style["will-change"] = "all", u = function u() {
                d._disableDelayedDrag(), t.draggable = d.nativeDraggable, G(t, h.chosenClass, !0), d._triggerDragStart(o, i), J(d, r, "choose", t, r, r, p);
              }, h.ignore.split(",").forEach(function (e) {
                z(t, e.trim(), Q);
              }), X(m, "mouseup", d._onDrop), X(m, "touchend", d._onDrop), X(m, "touchcancel", d._onDrop), X(m, "selectstart", d), h.supportPointer && X(m, "pointercancel", d._onDrop), h.delay ? (X(m, "mouseup", d._disableDelayedDrag), X(m, "touchend", d._disableDelayedDrag), X(m, "touchcancel", d._disableDelayedDrag), X(m, "mousemove", d._disableDelayedDrag), X(m, "touchmove", d._disableDelayedDrag), h.supportPointer && X(m, "pointermove", d._disableDelayedDrag), d._dragStartTimer = S(u, h.delay)) : u());
            },
            _disableDelayedDrag: function _disableDelayedDrag() {
              var t = this.el.ownerDocument;
              clearTimeout(this._dragStartTimer), K(t, "mouseup", this._disableDelayedDrag), K(t, "touchend", this._disableDelayedDrag), K(t, "touchcancel", this._disableDelayedDrag), K(t, "mousemove", this._disableDelayedDrag), K(t, "touchmove", this._disableDelayedDrag), K(t, "pointermove", this._disableDelayedDrag);
            },
            _triggerDragStart: function _triggerDragStart(e, n) {
              (n = n || ("touch" == e.pointerType ? e : null)) ? (w = {
                target: t,
                clientX: n.clientX,
                clientY: n.clientY
              }, this._onDragStart(w, "touch")) : this.nativeDraggable ? (X(t, "dragend", this), X(r, "dragstart", this._onDragStart)) : this._onDragStart(w, !0);

              try {
                A.selection ? st(function () {
                  A.selection.empty();
                }) : window.getSelection().removeAllRanges();
              } catch (ct) {}
            },
            _dragStarted: function _dragStarted() {
              if (r && t) {
                var e = this.options;
                G(t, e.ghostClass, !0), G(t, e.dragClass, !1), B.active = this, J(this, r, "start", t, r, r, p);
              } else this._nulling();
            },
            _emulateDragOver: function _emulateDragOver() {
              if (b) {
                if (this._lastX === b.clientX && this._lastY === b.clientY) return;
                this._lastX = b.clientX, this._lastY = b.clientY, H || Y(o, "display", "none");
                var t = A.elementFromPoint(b.clientX, b.clientY),
                    e = t,
                    n = q.length;
                if (t && t.shadowRoot && (e = t = t.shadowRoot.elementFromPoint(b.clientX, b.clientY)), e) do {
                  if (e[k]) {
                    for (; n--;) {
                      q[n]({
                        clientX: b.clientX,
                        clientY: b.clientY,
                        target: t,
                        rootEl: e
                      });
                    }

                    break;
                  }

                  t = e;
                } while (e = e.parentNode);
                H || Y(o, "display", "");
              }
            },
            _onTouchMove: function _onTouchMove(t) {
              if (w) {
                var e = this.options,
                    n = e.fallbackTolerance,
                    i = e.fallbackOffset,
                    r = t.touches ? t.touches[0] : t,
                    s = r.clientX - w.clientX + i.x,
                    a = r.clientY - w.clientY + i.y,
                    c = t.touches ? "translate3d(" + s + "px," + a + "px,0)" : "translate(" + s + "px," + a + "px)";

                if (!B.active) {
                  if (n && I(N(r.clientX - this._lastX), N(r.clientY - this._lastY)) < n) return;

                  this._dragStarted();
                }

                this._appendGhost(), y = !0, b = r, Y(o, "webkitTransform", c), Y(o, "mozTransform", c), Y(o, "msTransform", c), Y(o, "transform", c), t.preventDefault();
              }
            },
            _appendGhost: function _appendGhost() {
              if (!o) {
                var e,
                    n = t.getBoundingClientRect(),
                    i = Y(t),
                    s = this.options;
                G(o = t.cloneNode(!0), s.ghostClass, !1), G(o, s.fallbackClass, !0), G(o, s.dragClass, !0), Y(o, "top", n.top - _(i.marginTop, 10)), Y(o, "left", n.left - _(i.marginLeft, 10)), Y(o, "width", n.width), Y(o, "height", n.height), Y(o, "opacity", "0.8"), Y(o, "position", "fixed"), Y(o, "zIndex", "100000"), Y(o, "pointerEvents", "none"), s.fallbackOnBody && A.body.appendChild(o) || r.appendChild(o), e = o.getBoundingClientRect(), Y(o, "width", 2 * n.width - e.width), Y(o, "height", 2 * n.height - e.height);
              }
            },
            _onDragStart: function _onDragStart(e, n) {
              var o = e.dataTransfer,
                  i = this.options;
              this._offUpEvents(), g.checkPull(this, this, t, e), G(t, i.dragClass, !0), n ? ("touch" === n ? (X(A, "touchmove", this._onTouchMove), X(A, "touchend", this._onDrop), X(A, "touchcancel", this._onDrop), i.supportPointer && (X(A, "pointermove", this._onTouchMove), X(A, "pointerup", this._onDrop))) : (X(A, "mousemove", this._onTouchMove), X(A, "mouseup", this._onDrop)), this._loopId = setInterval(this._emulateDragOver, 50)) : (o && (o.effectAllowed = "move", i.setData && i.setData.call(this, o, t)), X(A, "drop", this), this._dragStartId = st(this._dragStarted));
            },
            _onDragOver: function _onDragOver(a) {
              var c,
                  l,
                  u,
                  p,
                  m = this.el,
                  w = this.options,
                  b = w.group,
                  E = B.active,
                  T = g === b,
                  L = !1,
                  _ = w.sort;

              if (void 0 !== a.preventDefault && (a.preventDefault(), !w.dragoverBubble && a.stopPropagation()), !t.animated && (y = !0, w.handleReplacedDragElement && !t.parentNode && e && G(t = A.getElementById(e) || t, this.options.ghostClass, !0), E && !w.disabled && (T ? _ || (p = !r.contains(t)) : v === this || (E.lastPullMode = g.checkPull(this, E, t, a)) && b.checkPut(this, E, t, a)) && (void 0 === a.rootEl || a.rootEl === this.el))) {
                if (V(a, w, this.el), O) return;
                if (c = U(a.target, w.draggable, m), l = t.getBoundingClientRect(), v !== this && (v = this, L = !0), p) return $(E, !0), n = r, void (i || s ? r.insertBefore(t, i || s) : _ || r.appendChild(t));

                if (0 === m.children.length || m.children[0] === o || m === a.target && function (t, e) {
                  var n = t.lastElementChild.getBoundingClientRect();
                  return e.clientY - (n.top + n.height) > 5 || e.clientX - (n.left + n.width) > 5;
                }(m, a)) {
                  if (0 !== m.children.length && m.children[0] !== o && m === a.target && (c = m.lastElementChild), c) {
                    if (c.animated) return;
                    u = c.getBoundingClientRect();
                  }

                  $(E, T), !1 !== Z(r, m, t, l, c, u, a) && (t.contains(m) || (m.appendChild(t), n = m), this._animate(l, t), c && this._animate(u, c));
                } else if (c && !c.animated && c !== t && void 0 !== c.parentNode[k]) {
                  d !== c && (d = c, f = Y(c), h = Y(c.parentNode));
                  var C = (u = c.getBoundingClientRect()).right - u.left,
                      j = u.bottom - u.top,
                      D = x.test(f.cssFloat + f.display) || "flex" == h.display && 0 === h["flex-direction"].indexOf("row"),
                      M = c.offsetWidth > t.offsetWidth,
                      H = c.offsetHeight > t.offsetHeight,
                      N = (D ? (a.clientX - u.left) / C : (a.clientY - u.top) / j) > .5,
                      I = c.nextElementSibling,
                      P = !1;

                  if (D) {
                    var q = t.offsetTop,
                        R = c.offsetTop;
                    P = q === R ? c.previousElementSibling === t && !M || N && M : c.previousElementSibling === t || t.previousElementSibling === c ? (a.clientY - u.top) / j > .5 : R > q;
                  } else L || (P = I !== t && !H || N && H);

                  var F = Z(r, m, t, l, c, u, a, P);
                  !1 !== F && (1 !== F && -1 !== F || (P = 1 === F), O = !0, S(tt, 30), $(E, T), t.contains(m) || (P && !I ? m.appendChild(t) : c.parentNode.insertBefore(t, P ? I : c)), n = t.parentNode, this._animate(l, t), this._animate(u, c));
                }
              }
            },
            _animate: function _animate(t, e) {
              var n = this.options.animation;

              if (n) {
                var o = e.getBoundingClientRect();
                1 === t.nodeType && (t = t.getBoundingClientRect()), Y(e, "transition", "none"), Y(e, "transform", "translate3d(" + (t.left - o.left) + "px," + (t.top - o.top) + "px,0)"), e.offsetWidth, Y(e, "transition", "all " + n + "ms"), Y(e, "transform", "translate3d(0,0,0)"), clearTimeout(e.animated), e.animated = S(function () {
                  Y(e, "transition", ""), Y(e, "transform", ""), e.animated = !1;
                }, n);
              }
            },
            _offUpEvents: function _offUpEvents() {
              var t = this.el.ownerDocument;
              K(A, "touchmove", this._onTouchMove), K(A, "pointermove", this._onTouchMove), K(t, "mouseup", this._onDrop), K(t, "touchend", this._onDrop), K(t, "pointerup", this._onDrop), K(t, "touchcancel", this._onDrop), K(t, "pointercancel", this._onDrop), K(t, "selectstart", this);
            },
            _onDrop: function _onDrop(e) {
              var a = this.el,
                  c = this.options;
              clearInterval(this._loopId), clearInterval(E.pid), clearTimeout(this._dragStartTimer), at(this._cloneId), at(this._dragStartId), K(A, "mouseover", this), K(A, "mousemove", this._onTouchMove), this.nativeDraggable && (K(A, "drop", this), K(a, "dragstart", this._onDragStart)), this._offUpEvents(), e && (y && (e.preventDefault(), !c.dropBubble && e.stopPropagation()), o && o.parentNode && o.parentNode.removeChild(o), r !== n && "clone" === B.active.lastPullMode || i && i.parentNode && i.parentNode.removeChild(i), t && (this.nativeDraggable && K(t, "dragend", this), Q(t), t.style["will-change"] = "", G(t, this.options.ghostClass, !1), G(t, this.options.chosenClass, !1), J(this, r, "unchoose", t, n, r, p), r !== n ? (m = nt(t, c.draggable)) >= 0 && (J(null, n, "add", t, n, r, p, m), J(this, r, "remove", t, n, r, p, m), J(null, n, "sort", t, n, r, p, m), J(this, r, "sort", t, n, r, p, m)) : t.nextSibling !== s && (m = nt(t, c.draggable)) >= 0 && (J(this, r, "update", t, n, r, p, m), J(this, r, "sort", t, n, r, p, m)), B.active && (null != m && -1 !== m || (m = p), J(this, r, "end", t, n, r, p, m), this.save()))), this._nulling();
            },
            _nulling: function _nulling() {
              r = t = n = o = s = i = a = c = l = w = b = y = m = d = f = v = g = B.active = null, P.forEach(function (t) {
                t.checked = !0;
              }), P.length = 0;
            },
            handleEvent: function handleEvent(e) {
              switch (e.type) {
                case "drop":
                case "dragend":
                  this._onDrop(e);

                  break;

                case "dragover":
                case "dragenter":
                  t && (this._onDragOver(e), function (t) {
                    t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.preventDefault();
                  }(e));
                  break;

                case "mouseover":
                  this._onDrop(e);

                  break;

                case "selectstart":
                  e.preventDefault();
              }
            },
            toArray: function toArray() {
              for (var t, e = [], n = this.el.children, o = 0, i = n.length, r = this.options; o < i; o++) {
                U(t = n[o], r.draggable, this.el) && e.push(t.getAttribute(r.dataIdAttr) || et(t));
              }

              return e;
            },
            sort: function sort(t) {
              var e = {},
                  n = this.el;
              this.toArray().forEach(function (t, o) {
                var i = n.children[o];
                U(i, this.options.draggable, n) && (e[t] = i);
              }, this), t.forEach(function (t) {
                e[t] && (n.removeChild(e[t]), n.appendChild(e[t]));
              });
            },
            save: function save() {
              var t = this.options.store;
              t && t.set(this);
            },
            closest: function closest(t, e) {
              return U(t, e || this.options.draggable, this.el);
            },
            option: function option(t, e) {
              var n = this.options;
              if (void 0 === e) return n[t];
              n[t] = e, "group" === t && F(n);
            },
            destroy: function destroy() {
              var t = this.el;
              t[k] = null, K(t, "mousedown", this._onTapStart), K(t, "touchstart", this._onTapStart), K(t, "pointerdown", this._onTapStart), this.nativeDraggable && (K(t, "dragover", this), K(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function (t) {
                t.removeAttribute("draggable");
              }), q.splice(q.indexOf(this._onDragOver), 1), this._onDrop(), this.el = t = null;
            }
          }, X(A, "touchmove", function (t) {
            B.active && t.preventDefault();
          }), B.utils = {
            on: X,
            off: K,
            css: Y,
            find: z,
            is: function is(t, e) {
              return !!U(t, e, t);
            },
            extend: rt,
            throttle: it,
            closest: U,
            toggleClass: G,
            clone: function clone(t) {
              return j && j.dom ? j.dom(t).cloneNode(!0) : C ? C(t).clone(!0)[0] : t.cloneNode(!0);
            },
            index: nt,
            nextTick: st,
            cancelNextTick: at
          }, B.create = function (t, e) {
            return new B(t, e);
          }, B.version = "1.7.0", B;
        }, t.exports = e();
      });
      t("aE", Lr);
      var Ar = 500;
      var _r = 1;

      function Sr() {
        return _r = (_r + 1) % 1e4, _r;
      }

      function Cr(t) {
        return _r === t;
      }

      function jr(t) {
        return d(l(t, ".js-notifications-container"), "data-url");
      }

      function Dr(t) {
        return t === jr(document);
      }

      function Mr(t, e) {
        var n = e.querySelector(t);
        if (!n) return;
        var o = document.querySelector(t);
        o && (Do(o, !0) || n.outerHTML !== o.outerHTML && o.replaceWith(n));
      }

      function Hr(t) {
        var e = "==".slice(0, (4 - t.length % 4) % 4),
            n = t.replace(/-/g, "+").replace(/_/g, "/") + e,
            o = atob(n),
            i = new ArrayBuffer(o.length),
            r = new Uint8Array(i);

        for (var _s3 = 0; _s3 < o.length; _s3++) {
          r[_s3] = o.charCodeAt(_s3);
        }

        return i;
      }

      function Or(t) {
        var e = new Uint8Array(t);
        var n = "";
        var _iteratorNormalCompletion37 = true;
        var _didIteratorError37 = false;
        var _iteratorError37 = undefined;

        try {
          for (var _iterator37 = e[Symbol.iterator](), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
            var _o21 = _step37.value;
            n += String.fromCharCode(_o21);
          }
        } catch (err) {
          _didIteratorError37 = true;
          _iteratorError37 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion37 && _iterator37["return"] != null) {
              _iterator37["return"]();
            }
          } finally {
            if (_didIteratorError37) {
              throw _iteratorError37;
            }
          }
        }

        return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      }

      var Nr = "copy",
          Ir = "convert";

      function Pr(t, e, n) {
        if (e === Nr) return n;
        if (e === Ir) return t(n);
        if (_instanceof(e, Array)) return n.map(function (n) {
          return Pr(t, e[0], n);
        });

        if (_instanceof(e, Object)) {
          var _o22 = {};

          for (var _i17 = 0, _Object$entries = Object.entries(e); _i17 < _Object$entries.length; _i17++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i17], 2),
                _i18 = _Object$entries$_i[0],
                _r11 = _Object$entries$_i[1];

            if (_i18 in n) null != n[_i18] ? _o22[_i18] = Pr(t, _r11.schema, n[_i18]) : _o22[_i18] = null;else if (_r11.required) throw new Error("Missing key: ".concat(_i18));
          }

          return _o22;
        }
      }

      function qr(t) {
        return {
          required: !0,
          schema: t
        };
      }

      function Rr(t) {
        return {
          required: !1,
          schema: t
        };
      }

      var Vr = {
        type: qr(Nr),
        id: qr(Ir),
        transports: Rr(Nr)
      },
          Fr = {
        publicKey: qr({
          rp: qr(Nr),
          user: qr({
            id: qr(Ir),
            name: qr(Nr),
            displayName: qr(Nr),
            icon: Rr(Nr)
          }),
          challenge: qr(Ir),
          pubKeyCredParams: qr(Nr),
          timeout: Rr(Nr),
          excludeCredentials: Rr([Vr]),
          authenticatorSelection: Rr(Nr),
          attestation: Rr(Nr),
          extensions: Rr(Nr)
        }),
        signal: Rr(Nr)
      },
          Br = {
        type: qr(Nr),
        id: qr(Nr),
        rawId: qr(Ir),
        response: qr({
          clientDataJSON: qr(Ir),
          attestationObject: qr(Ir)
        })
      },
          $r = {
        mediation: Rr(Nr),
        publicKey: qr({
          challenge: qr(Ir),
          timeout: Rr(Nr),
          rpId: Rr(Nr),
          allowCredentials: Rr([Vr]),
          userVerification: Rr(Nr),
          extensions: Rr(Nr)
        }),
        signal: Rr(Nr)
      },
          Ur = {
        type: qr(Nr),
        id: qr(Nr),
        rawId: qr(Ir),
        response: qr({
          clientDataJSON: qr(Ir),
          authenticatorData: qr(Ir),
          signature: qr(Ir),
          userHandle: qr(Ir)
        })
      };

      function Wr() {
        return !!(navigator.credentials && navigator.credentials.create && navigator.credentials.get && window.PublicKeyCredential);
      }

      function Xr() {
        return Wr() ? "supported" : "unsupported";
      }

      t("aZ", {
        report: function report(t) {}
      });
      var Kr = !1;
      var Gr = !1;
      Ze(".js-sudo-form",
      /*#__PURE__*/
      function () {
        var _ref19 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee21(t, e) {
          var _e22;

          return regeneratorRuntime.wrap(function _callee21$(_context22) {
            while (1) {
              switch (_context22.prev = _context22.next) {
                case 0:
                  _context22.prev = 0;
                  _context22.next = 3;
                  return e.text();

                case 3:
                  _context22.next = 18;
                  break;

                case 5:
                  _context22.prev = 5;
                  _context22.t0 = _context22["catch"](0);

                  if (_context22.t0.response) {
                    _context22.next = 9;
                    break;
                  }

                  throw _context22.t0;

                case 9:
                  _context22.t1 = _context22.t0.response.status;
                  _context22.next = _context22.t1 === 401 ? 12 : _context22.t1 === 429 ? 14 : 16;
                  break;

                case 12:
                  _e22 = "Incorrect password.";
                  return _context22.abrupt("break", 17);

                case 14:
                  _e22 = "Too many password attempts. Please wait and try again later.";
                  return _context22.abrupt("break", 17);

                case 16:
                  _e22 = "Failed to receive a response. Please try again later.";

                case 17:
                  return _context22.abrupt("return", (l(t, ".js-sudo-error").textContent = _e22, l(t, ".js-sudo-error").hidden = !1, void (l(t, ".js-sudo-password", HTMLInputElement).value = "")));

                case 18:
                  Gr = !0, c(t, "details").removeAttribute("open");

                case 19:
                case "end":
                  return _context22.stop();
              }
            }
          }, _callee21, null, [[0, 5]]);
        }));

        return function (_x33, _x34) {
          return _ref19.apply(this, arguments);
        };
      }());
      var Yr = new WeakMap();

      function zr(t) {
        if (!_instanceof(t, CustomEvent)) throw new Error("assert: event is not a CustomEvent");
        var e = t.detail.editor;
        if (!t.target) throw new Error("assert: event.target is null");
        return Yr.set(t.target, e), e;
      }

      function Jr(t) {
        if (t.querySelector(".js-task-list-field")) {
          var _iteratorNormalCompletion38 = true;
          var _didIteratorError38 = false;
          var _iteratorError38 = undefined;

          try {
            for (var _iterator38 = u(t, "task-lists", TaskListsElement)[Symbol.iterator](), _step38; !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
              var e = _step38.value;
              e.disabled = !1;
            }
          } catch (err) {
            _didIteratorError38 = true;
            _iteratorError38 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion38 && _iterator38["return"] != null) {
                _iterator38["return"]();
              }
            } finally {
              if (_didIteratorError38) {
                throw _iteratorError38;
              }
            }
          }
        }
      }

      function Zr(t, e, n) {
        var o = l(t, ".js-comment-update", HTMLFormElement);
        !function (t) {
          var _iteratorNormalCompletion39 = true;
          var _didIteratorError39 = false;
          var _iteratorError39 = undefined;

          try {
            for (var _iterator39 = u(t, "task-lists", TaskListsElement)[Symbol.iterator](), _step39; !(_iteratorNormalCompletion39 = (_step39 = _iterator39.next()).done); _iteratorNormalCompletion39 = true) {
              var _e23 = _step39.value;
              _e23.disabled = !0;
            }
          } catch (err) {
            _didIteratorError39 = true;
            _iteratorError39 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion39 && _iterator39["return"] != null) {
                _iterator39["return"]();
              }
            } finally {
              if (_didIteratorError39) {
                throw _iteratorError39;
              }
            }
          }
        }(t);
        var i = o.elements.namedItem("task_list_track");
        i && i.remove();
        var r = o.elements.namedItem("task_list_operation");
        r && r.remove();
        var s = document.createElement("input");
        s.setAttribute("type", "hidden"), s.setAttribute("name", "task_list_track"), s.setAttribute("value", e), o.appendChild(s);
        var a = document.createElement("input");

        if (a.setAttribute("type", "hidden"), a.setAttribute("name", "task_list_operation"), a.setAttribute("value", JSON.stringify(n)), o.appendChild(a), !o.elements.namedItem("task_list_key")) {
          var _t42 = d(l(o, ".js-task-list-field"), "name").split("[")[0],
              _e24 = document.createElement("input");

          _e24.setAttribute("type", "hidden"), _e24.setAttribute("name", "task_list_key"), _e24.setAttribute("value", _t42), o.appendChild(_e24);
        }

        t.classList.remove("is-comment-stale"), Ce(o);
      }

      Ht("codeEditor:ready", ".js-code-editor", zr), me(".js-task-list-container .js-task-list-field", function (t) {
        Jr(c(t, ".js-task-list-container"));
      }), Ht("task-lists-move", "task-lists", function (t) {
        if (!_instanceof(t, CustomEvent)) throw new Error("invariant: app/assets/modules/github/task-list.js:49");
        var _t$detail = t.detail,
            e = _t$detail.src,
            n = _t$detail.dst;
        Zr(c(t.currentTarget, ".js-task-list-container"), "reordered", {
          operation: "move",
          src: e,
          dst: n
        });
      }), Ht("task-lists-check", "task-lists", function (t) {
        if (!_instanceof(t, CustomEvent)) throw new Error("invariant: app/assets/modules/github/task-list.js:62");
        var _t$detail2 = t.detail,
            e = _t$detail2.position,
            n = _t$detail2.checked;
        Zr(c(t.currentTarget, ".js-task-list-container"), "checked:".concat(n ? 1 : 0), {
          operation: "check",
          position: e,
          checked: n
        });
      }), Ze(".js-task-list-container .js-comment-update",
      /*#__PURE__*/
      function () {
        var _ref20 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee22(t, e) {
          var n, o, i, r, _t43, _e25, _o23, _i19, _t44, _r12, _s4;

          return regeneratorRuntime.wrap(function _callee22$(_context23) {
            while (1) {
              switch (_context23.prev = _context23.next) {
                case 0:
                  n = c(t, ".js-task-list-container"), o = t.elements.namedItem("task_list_track");
                  o && o.remove();
                  i = t.elements.namedItem("task_list_operation");
                  i && i.remove();
                  _context23.prev = 4;
                  _context23.next = 7;
                  return e.json();

                case 7:
                  r = _context23.sent;
                  _context23.next = 14;
                  break;

                case 10:
                  _context23.prev = 10;
                  _context23.t0 = _context23["catch"](4);

                  try {
                    _t43 = JSON.parse(_context23.t0.response.text);
                  } catch (Hr) {}

                  if (_t43 && _t43.stale) {
                    _e25 = _t43.updated_markdown, _o23 = _t43.updated_html, _i19 = _t43.version;

                    if (_e25 && _o23 && _i19) {
                      _t44 = l(n, ".js-comment-body"), _r12 = l(n, ".js-body-version"), _s4 = l(n, ".js-task-list-field", HTMLTextAreaElement);
                      _t44.innerHTML = _o23, _s4.value = _e25, n.setAttribute("data-body-version", _i19), _instanceof(_r12, HTMLInputElement) && (_r12.value = _i19);
                    }
                  } else window.location.reload();

                case 14:
                  r && (i && r.json.source && (l(n, ".js-task-list-field", HTMLTextAreaElement).value = r.json.source), Jr(n));

                case 15:
                case "end":
                  return _context23.stop();
              }
            }
          }, _callee22, null, [[4, 10]]);
        }));

        return function (_x35, _x36) {
          return _ref20.apply(this, arguments);
        };
      }());
    }
  };
});