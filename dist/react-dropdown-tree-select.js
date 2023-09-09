/*! For license information please see react-dropdown-tree-select.js.LICENSE.txt */
!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('react')))
    : 'function' == typeof define && define.amd
    ? define('ReactDropdownTreeSelect', ['react'], t)
    : 'object' == typeof exports
    ? (exports.ReactDropdownTreeSelect = t(require('react')))
    : (e.ReactDropdownTreeSelect = t(e.React))
})(this, e =>
  (() => {
    var t = {
        865: e => {
          'use strict'
          e.exports = function(e, t) {
            var r = e.filter(t)
            return 0 !== r.length && r.length !== e.length
          }
        },
        703: (e, t, r) => {
          'use strict'
          var n = r(414)
          function o() {}
          function i() {}
          ;(i.resetWarningCache = o),
            (e.exports = function() {
              function e(e, t, r, o, i, a) {
                if (a !== n) {
                  var c = new Error(
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                  )
                  throw ((c.name = 'Invariant Violation'), c)
                }
              }
              function t() {
                return e
              }
              e.isRequired = e
              var r = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: i,
                resetWarningCache: o,
              }
              return (r.PropTypes = r), r
            })
        },
        697: (e, t, r) => {
          e.exports = r(703)()
        },
        414: e => {
          'use strict'
          e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
        },
        385: function(e, t, r) {
          var n
          ;(n = function(e) {
            return (function(e) {
              var t = {}
              function r(n) {
                if (t[n]) return t[n].exports
                var o = (t[n] = { exports: {}, id: n, loaded: !1 })
                return e[n].call(o.exports, o, o.exports, r), (o.loaded = !0), o.exports
              }
              return (r.m = e), (r.c = t), (r.p = ''), r(0)
            })([
              function(e, t, r) {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                var n =
                    Object.assign ||
                    function(e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t]
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                      }
                      return e
                    },
                  o = (function() {
                    function e(e, t) {
                      for (var r = 0; r < t.length; r++) {
                        var n = t[r]
                        ;(n.enumerable = n.enumerable || !1),
                          (n.configurable = !0),
                          'value' in n && (n.writable = !0),
                          Object.defineProperty(e, n.key, n)
                      }
                    }
                    return function(t, r, n) {
                      return r && e(t.prototype, r), n && e(t, n), t
                    }
                  })()
                function i(e) {
                  return e && e.__esModule ? e : { default: e }
                }
                var a = r(8),
                  c = i(a),
                  l = i(r(6)),
                  u = i(r(2)),
                  s = r(1),
                  f = (function(e) {
                    function t(e) {
                      !(function(e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
                      })(this, t),
                        (function(e, t, r) {
                          for (var n = !0; n; ) {
                            var o = e,
                              i = t,
                              a = r
                            ;(n = !1), null === o && (o = Function.prototype)
                            var c = Object.getOwnPropertyDescriptor(o, i)
                            if (void 0 !== c) {
                              if ('value' in c) return c.value
                              var l = c.get
                              if (void 0 === l) return
                              return l.call(a)
                            }
                            var u = Object.getPrototypeOf(o)
                            if (null === u) return
                            ;(e = u), (t = i), (r = a), (n = !0), (c = u = void 0)
                          }
                        })(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this),
                        (this.state = {
                          showLoader: !1,
                          lastScrollTop: 0,
                          actionTriggered: !1,
                          pullToRefreshThresholdBreached: !1,
                        }),
                        (this.startY = 0),
                        (this.currentY = 0),
                        (this.dragging = !1),
                        (this.maxPullDownDistance = 0),
                        (this.onScrollListener = this.onScrollListener.bind(this)),
                        (this.throttledOnScrollListener = (0, u.default)(this.onScrollListener, 150).bind(this)),
                        (this.onStart = this.onStart.bind(this)),
                        (this.onMove = this.onMove.bind(this)),
                        (this.onEnd = this.onEnd.bind(this)),
                        (this.getScrollableTarget = this.getScrollableTarget.bind(this))
                    }
                    return (
                      (function(e, t) {
                        if ('function' != typeof t && null !== t)
                          throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
                        ;(e.prototype = Object.create(t && t.prototype, {
                          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                        })),
                          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
                      })(t, e),
                      o(t, [
                        {
                          key: 'componentDidMount',
                          value: function() {
                            if (
                              ((this._scrollableNode = this.getScrollableTarget()),
                              (this.el = this.props.height ? this._infScroll : this._scrollableNode || window),
                              this.el.addEventListener('scroll', this.throttledOnScrollListener),
                              'number' == typeof this.props.initialScrollY &&
                                this.el.scrollHeight > this.props.initialScrollY &&
                                this.el.scrollTo(0, this.props.initialScrollY),
                              this.props.pullDownToRefresh &&
                                (this.el.addEventListener('touchstart', this.onStart),
                                this.el.addEventListener('touchmove', this.onMove),
                                this.el.addEventListener('touchend', this.onEnd),
                                this.el.addEventListener('mousedown', this.onStart),
                                this.el.addEventListener('mousemove', this.onMove),
                                this.el.addEventListener('mouseup', this.onEnd),
                                (this.maxPullDownDistance = this._pullDown.firstChild.getBoundingClientRect().height),
                                this.forceUpdate(),
                                'function' != typeof this.props.refreshFunction))
                            )
                              throw new Error(
                                'Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\''
                              )
                          },
                        },
                        {
                          key: 'componentWillUnmount',
                          value: function() {
                            this.el.removeEventListener('scroll', this.throttledOnScrollListener),
                              this.props.pullDownToRefresh &&
                                (this.el.removeEventListener('touchstart', this.onStart),
                                this.el.removeEventListener('touchmove', this.onMove),
                                this.el.removeEventListener('touchend', this.onEnd),
                                this.el.removeEventListener('mousedown', this.onStart),
                                this.el.removeEventListener('mousemove', this.onMove),
                                this.el.removeEventListener('mouseup', this.onEnd))
                          },
                        },
                        {
                          key: 'componentWillReceiveProps',
                          value: function(e) {
                            ;(this.props.key === e.key && this.props.dataLength === e.dataLength) ||
                              this.setState({ showLoader: !1, actionTriggered: !1, pullToRefreshThresholdBreached: !1 })
                          },
                        },
                        {
                          key: 'getScrollableTarget',
                          value: function() {
                            return this.props.scrollableTarget instanceof HTMLElement
                              ? this.props.scrollableTarget
                              : 'string' == typeof this.props.scrollableTarget
                              ? document.getElementById(this.props.scrollableTarget)
                              : (null === this.props.scrollableTarget &&
                                  console.warn(
                                    'You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '
                                  ),
                                null)
                          },
                        },
                        {
                          key: 'onStart',
                          value: function(e) {
                            this.state.lastScrollTop ||
                              ((this.dragging = !0),
                              (this.startY = e.pageY || e.touches[0].pageY),
                              (this.currentY = this.startY),
                              (this._infScroll.style.willChange = 'transform'),
                              (this._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)'))
                          },
                        },
                        {
                          key: 'onMove',
                          value: function(e) {
                            this.dragging &&
                              ((this.currentY = e.pageY || e.touches[0].pageY),
                              this.currentY < this.startY ||
                                (this.currentY - this.startY >= this.props.pullDownToRefreshThreshold &&
                                  this.setState({ pullToRefreshThresholdBreached: !0 }),
                                this.currentY - this.startY > 1.5 * this.maxPullDownDistance ||
                                  ((this._infScroll.style.overflow = 'visible'),
                                  (this._infScroll.style.transform =
                                    'translate3d(0px, ' + (this.currentY - this.startY) + 'px, 0px)'))))
                          },
                        },
                        {
                          key: 'onEnd',
                          value: function(e) {
                            var t = this
                            ;(this.startY = 0),
                              (this.currentY = 0),
                              (this.dragging = !1),
                              this.state.pullToRefreshThresholdBreached &&
                                this.props.refreshFunction &&
                                this.props.refreshFunction(),
                              requestAnimationFrame(function() {
                                t._infScroll &&
                                  ((t._infScroll.style.overflow = 'auto'),
                                  (t._infScroll.style.transform = 'none'),
                                  (t._infScroll.style.willChange = 'none'))
                              })
                          },
                        },
                        {
                          key: 'isElementAtBottom',
                          value: function(e) {
                            var t = arguments.length <= 1 || void 0 === arguments[1] ? 0.8 : arguments[1],
                              r =
                                e === document.body || e === document.documentElement
                                  ? window.screen.availHeight
                                  : e.clientHeight,
                              n = (0, s.parseThreshold)(t)
                            return n.unit === s.ThresholdUnits.Pixel
                              ? e.scrollTop + r >= e.scrollHeight - n.value
                              : e.scrollTop + r >= (n.value / 100) * e.scrollHeight
                          },
                        },
                        {
                          key: 'onScrollListener',
                          value: function(e) {
                            var t = this
                            'function' == typeof this.props.onScroll &&
                              setTimeout(function() {
                                return t.props.onScroll(e)
                              }, 0)
                            var r =
                              this.props.height || this._scrollableNode
                                ? e.target
                                : document.documentElement.scrollTop
                                ? document.documentElement
                                : document.body
                            this.state.actionTriggered ||
                              (this.isElementAtBottom(r, this.props.scrollThreshold) &&
                                this.props.hasMore &&
                                (this.setState({ actionTriggered: !0, showLoader: !0 }), this.props.next()),
                              this.setState({ lastScrollTop: r.scrollTop }))
                          },
                        },
                        {
                          key: 'render',
                          value: function() {
                            var e = this,
                              t = n(
                                {
                                  height: this.props.height || 'auto',
                                  overflow: 'auto',
                                  WebkitOverflowScrolling: 'touch',
                                },
                                this.props.style
                              ),
                              r = this.props.hasChildren || !(!this.props.children || !this.props.children.length),
                              o = this.props.pullDownToRefresh && this.props.height ? { overflow: 'auto' } : {}
                            return c.default.createElement(
                              'div',
                              { style: o },
                              c.default.createElement(
                                'div',
                                {
                                  className: 'infinite-scroll-component ' + (this.props.className || ''),
                                  ref: function(t) {
                                    return (e._infScroll = t)
                                  },
                                  style: t,
                                },
                                this.props.pullDownToRefresh &&
                                  c.default.createElement(
                                    'div',
                                    {
                                      style: { position: 'relative' },
                                      ref: function(t) {
                                        return (e._pullDown = t)
                                      },
                                    },
                                    c.default.createElement(
                                      'div',
                                      {
                                        style: {
                                          position: 'absolute',
                                          left: 0,
                                          right: 0,
                                          top: -1 * this.maxPullDownDistance,
                                        },
                                      },
                                      !this.state.pullToRefreshThresholdBreached && this.props.pullDownToRefreshContent,
                                      this.state.pullToRefreshThresholdBreached && this.props.releaseToRefreshContent
                                    )
                                  ),
                                this.props.children,
                                !this.state.showLoader && !r && this.props.hasMore && this.props.loader,
                                this.state.showLoader && this.props.hasMore && this.props.loader,
                                !this.props.hasMore && this.props.endMessage
                              )
                            )
                          },
                        },
                      ]),
                      t
                    )
                  })(a.Component)
                ;(t.default = f),
                  (f.defaultProps = {
                    pullDownToRefreshContent: c.default.createElement('h3', null, 'Pull down to refresh'),
                    releaseToRefreshContent: c.default.createElement('h3', null, 'Release to refresh'),
                    pullDownToRefreshThreshold: 100,
                    disableBrowserPullToRefresh: !0,
                  }),
                  (f.propTypes = {
                    next: l.default.func,
                    hasMore: l.default.bool,
                    children: l.default.node,
                    loader: l.default.node.isRequired,
                    scrollThreshold: l.default.oneOfType([l.default.number, l.default.string]),
                    endMessage: l.default.node,
                    style: l.default.object,
                    height: l.default.number,
                    scrollableTarget: l.default.node,
                    hasChildren: l.default.bool,
                    pullDownToRefresh: l.default.bool,
                    pullDownToRefreshContent: l.default.node,
                    releaseToRefreshContent: l.default.node,
                    pullDownToRefreshThreshold: l.default.number,
                    refreshFunction: l.default.func,
                    onScroll: l.default.func,
                    dataLength: l.default.number.isRequired,
                    key: l.default.string,
                  }),
                  (e.exports = t.default)
              },
              function(e, t) {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                  (t.parseThreshold = function(e) {
                    return 'number' == typeof e
                      ? { unit: r.Percent, value: 100 * e }
                      : 'string' == typeof e
                      ? e.match(/^(\d*(\.\d+)?)px$/)
                        ? { unit: r.Pixel, value: parseFloat(e) }
                        : e.match(/^(\d*(\.\d+)?)%$/)
                        ? { unit: r.Percent, value: parseFloat(e) }
                        : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), n)
                      : (console.warn('scrollThreshold should be string or number'), n)
                  })
                var r = { Pixel: 'Pixel', Percent: 'Percent' }
                t.ThresholdUnits = r
                var n = { unit: r.Percent, value: 0.8 }
              },
              function(e, t) {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                  (t.default = function(e, t, r) {
                    var n, o
                    return (
                      t || (t = 250),
                      function() {
                        var i = r || this,
                          a = +new Date(),
                          c = arguments
                        n && a < n + t
                          ? (clearTimeout(o),
                            (o = setTimeout(function() {
                              ;(n = a), e.apply(i, c)
                            }, t)))
                          : ((n = a), e.apply(i, c))
                      }
                    )
                  }),
                  (e.exports = t.default)
              },
              function(e, t) {
                'use strict'
                function r(e) {
                  return function() {
                    return e
                  }
                }
                var n = function() {}
                ;(n.thatReturns = r),
                  (n.thatReturnsFalse = r(!1)),
                  (n.thatReturnsTrue = r(!0)),
                  (n.thatReturnsNull = r(null)),
                  (n.thatReturnsThis = function() {
                    return this
                  }),
                  (n.thatReturnsArgument = function(e) {
                    return e
                  }),
                  (e.exports = n)
              },
              function(e, t, r) {
                'use strict'
                e.exports = function(e, t, r, n, o, i, a, c) {
                  if (!e) {
                    var l
                    if (void 0 === t)
                      l = new Error(
                        'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
                      )
                    else {
                      var u = [r, n, o, i, a, c],
                        s = 0
                      ;(l = new Error(
                        t.replace(/%s/g, function() {
                          return u[s++]
                        })
                      )).name = 'Invariant Violation'
                    }
                    throw ((l.framesToPop = 1), l)
                  }
                }
              },
              function(e, t, r) {
                'use strict'
                var n = r(3),
                  o = r(4),
                  i = r(7)
                e.exports = function() {
                  function e(e, t, r, n, a, c) {
                    c !== i &&
                      o(
                        !1,
                        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                      )
                  }
                  function t() {
                    return e
                  }
                  e.isRequired = e
                  var r = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                  }
                  return (r.checkPropTypes = n), (r.PropTypes = r), r
                }
              },
              function(e, t, r) {
                e.exports = r(5)()
              },
              function(e, t) {
                'use strict'
                e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
              },
              function(t, r) {
                t.exports = e
              },
            ])
          }),
            (e.exports = n(r(787)))
        },
        787: t => {
          'use strict'
          t.exports = e
        },
      },
      r = {}
    function n(e) {
      var o = r[e]
      if (void 0 !== o) return o.exports
      var i = (r[e] = { exports: {} })
      return t[e].call(i.exports, i, i.exports, n), i.exports
    }
    ;(n.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e
      return n.d(t, { a: t }), t
    }),
      (n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
      }),
      (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (n.r = e => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      })
    var o = {}
    return (
      (() => {
        'use strict'
        n.r(o), n.d(o, { default: () => Cr })
        var e = n(697),
          t = n.n(e),
          r = n(787),
          i = n.n(r),
          a = function(e) {
            return e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
          }
        const c = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            return Object.keys(e).reduce(function(t, r) {
              return (t['data-'.concat(a(r))] = e[r]), t
            }, {})
          },
          l = function(e) {
            return !e || (Array.isArray(e) && !e.length)
          }
        var u, s
        const f = ('rdts',
          (u = 1),
          (s = new WeakMap()),
          {
            get: function(e) {
              return s.has(e) || s.set(e, u++), ''.concat('rdts').concat(s.get(e))
            },
            reset: function() {
              ;(s = new WeakMap()), (u = 1)
            },
          }),
          p = function(e, t, r) {
            if (Array.prototype.findIndex) return e.findIndex(t, r)
            if (!e) throw new TypeError('findIndex called on null or undefined')
            if ('function' != typeof t) throw new TypeError('findIndex predicate must be a function')
            for (var n = 0; n < e.length; n++) {
              var o = e[n]
              if (t.call(r, o, n, e)) return n
            }
            return -1
          }
        function d(e, t) {
          var r = (function(e) {
            return e
              ? '#' === e[0]
                ? { 'aria-labelledby': e.substring(1).replace(/ #/g, ' ') }
                : { 'aria-label': e }
              : {}
          })(e)
          return (
            t &&
              (r['aria-labelledby'] = ''
                .concat(r['aria-labelledby'] || '', ' ')
                .concat(t)
                .trim()),
            r
          )
        }
        function h(e) {
          return (
            (h =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            h(e)
          )
        }
        function y() {
          return (
            (y =
              Object.assign ||
              function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t]
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
              }),
            y.apply(this, arguments)
          )
        }
        function b(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        function g(e, t) {
          return (
            (g =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              }),
            g(e, t)
          )
        }
        function v(e, t) {
          if (t && ('object' === h(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return m(e)
        }
        function m(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          return e
        }
        function O(e) {
          return (
            (O = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            O(e)
          )
        }
        function w(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = r),
            e
          )
        }
        var P = (function(e) {
          !(function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && g(e, t)
          })(c, e)
          var t,
            r,
            n,
            o,
            a = ((n = c),
            (o = (function() {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1
              if (Reflect.construct.sham) return !1
              if ('function' == typeof Proxy) return !0
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
              } catch (e) {
                return !1
              }
            })()),
            function() {
              var e,
                t = O(n)
              if (o) {
                var r = O(this).constructor
                e = Reflect.construct(t, arguments, r)
              } else e = t.apply(this, arguments)
              return v(this, e)
            })
          function c(e) {
            var t, r, n
            return (
              (function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, c),
              w(m((t = a.call(this, e))), 'handleInputChange', function(e) {
                e.persist(), t.delayedCallback(e)
              }),
              (t.delayedCallback = ((r = function(e) {
                return t.props.onInputChange(e.target.value)
              }),
              300,
              function() {
                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o]
                var i = function() {
                    ;(n = null), r.apply(void 0, t)
                  },
                  a = !n
                clearTimeout(n), (n = setTimeout(i, 300)), a && r.apply(void 0, t)
              })),
              t
            )
          }
          return (
            (t = c),
            (r = [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.inputRef,
                    r = e.texts,
                    n = void 0 === r ? {} : r,
                    o = e.onFocus,
                    a = e.onBlur,
                    c = e.disabled,
                    l = e.readOnly,
                    u = e.onKeyDown,
                    s = e.activeDescendant,
                    f = e.inlineSearchInput
                  return i().createElement(
                    'input',
                    y(
                      {
                        type: 'text',
                        disabled: c,
                        ref: t,
                        className: 'search',
                        placeholder: f ? n.inlineSearchPlaceholder || 'Search...' : n.placeholder || 'Choose...',
                        onKeyDown: u,
                        onChange: this.handleInputChange,
                        onFocus: o,
                        onBlur: a,
                        readOnly: l,
                        'aria-activedescendant': s,
                        'aria-autocomplete': u ? 'list' : void 0,
                      },
                      d(n.label)
                    )
                  )
                },
              },
            ]) && b(t.prototype, r),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            c
          )
        })(r.PureComponent)
        w(P, 'propTypes', {
          tags: t().array,
          texts: t().object,
          onInputChange: t().func,
          onFocus: t().func,
          onBlur: t().func,
          onTagRemove: t().func,
          onKeyDown: t().func,
          inputRef: t().func,
          disabled: t().bool,
          readOnly: t().bool,
          activeDescendant: t().string,
          inlineSearchInput: t().bool,
        })
        const S = P
        function j(e) {
          return (
            (j =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            j(e)
          )
        }
        function k(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        function T(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        function _(e, t) {
          return (
            (_ =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              }),
            _(e, t)
          )
        }
        function E(e, t) {
          if (t && ('object' === j(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return C(e)
        }
        function C(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          return e
        }
        function x(e) {
          return (
            (x = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            x(e)
          )
        }
        function R(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = r),
            e
          )
        }
        var N = function(e) {
            return ''.concat(e, '_tag')
          },
          D = (function(e) {
            !(function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function')
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                t && _(e, t)
            })(c, e)
            var t,
              r,
              n,
              o,
              a = ((n = c),
              (o = (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                if (Reflect.construct.sham) return !1
                if ('function' == typeof Proxy) return !0
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                  return !1
                }
              })()),
              function() {
                var e,
                  t = x(n)
                if (o) {
                  var r = x(this).constructor
                  e = Reflect.construct(t, arguments, r)
                } else e = t.apply(this, arguments)
                return E(this, e)
              })
            function c() {
              var e
              k(this, c)
              for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]
              return (
                R(C((e = a.call.apply(a, [this].concat(r)))), 'handleClick', function(t) {
                  var r = e.props,
                    n = r.id,
                    o = r.onDelete
                  t.stopPropagation(), t.nativeEvent.stopImmediatePropagation(), o(n, void 0 !== (t.key || t.keyCode))
                }),
                R(C(e), 'onKeyDown', function(t) {
                  'Backspace' === t.key && (e.handleClick(t), t.preventDefault())
                }),
                R(C(e), 'onKeyUp', function(t) {
                  ;(32 === t.keyCode || ['Delete', 'Enter'].indexOf(t.key) > -1) &&
                    (e.handleClick(t), t.preventDefault())
                }),
                e
              )
            }
            return (
              (t = c),
              (r = [
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.id,
                      r = e.label,
                      n = e.labelRemove,
                      o = void 0 === n ? 'Remove' : n,
                      a = e.readOnly,
                      c = e.disabled,
                      l = N(t),
                      u = ''.concat(t, '_button'),
                      s = ['tag-remove', a && 'readOnly', c && 'disabled'].filter(Boolean).join(' '),
                      f = a || c
                    return i().createElement(
                      'span',
                      { className: 'tag', id: l, 'aria-label': r },
                      r,
                      i().createElement(
                        'button',
                        {
                          id: u,
                          onClick: f ? void 0 : this.handleClick,
                          onKeyDown: f ? void 0 : this.onKeyDown,
                          onKeyUp: f ? void 0 : this.onKeyUp,
                          className: s,
                          type: 'button',
                          'aria-label': o,
                          'aria-labelledby': ''.concat(u, ' ').concat(l),
                          'aria-disabled': f,
                        },
                        'x'
                      )
                    )
                  },
                },
              ]) && T(t.prototype, r),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              c
            )
          })(r.PureComponent)
        R(D, 'propTypes', {
          id: t().string.isRequired,
          label: t().string.isRequired,
          onDelete: t().func,
          readOnly: t().bool,
          disabled: t().bool,
          labelRemove: t().string,
        })
        const I = D
        function M(e) {
          return (
            (M =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            M(e)
          )
        }
        function B(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        function A(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        function F(e, t) {
          return (
            (F =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              }),
            F(e, t)
          )
        }
        function L(e, t) {
          if (t && ('object' === M(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        }
        function V(e) {
          return (
            (V = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            V(e)
          )
        }
        function Y() {
          return (
            (Y =
              Object.assign ||
              function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t]
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
              }),
            Y.apply(this, arguments)
          )
        }
        var K,
          q,
          U,
          H = (function(e) {
            !(function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function')
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                t && F(e, t)
            })(l, e)
            var t,
              r,
              n,
              o,
              a = ((n = l),
              (o = (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                if (Reflect.construct.sham) return !1
                if ('function' == typeof Proxy) return !0
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                  return !1
                }
              })()),
              function() {
                var e,
                  t = V(n)
                if (o) {
                  var r = V(this).constructor
                  e = Reflect.construct(t, arguments, r)
                } else e = t.apply(this, arguments)
                return L(this, e)
              })
            function l() {
              return B(this, l), a.apply(this, arguments)
            }
            return (
              (t = l),
              (r = [
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.tags,
                      r = e.onTagRemove,
                      n = e.texts,
                      o = void 0 === n ? {} : n,
                      a = e.disabled,
                      l = e.readOnly,
                      u =
                        e.children ||
                        i().createElement('span', { className: 'placeholder' }, o.placeholder || 'Choose...')
                    return i().createElement(
                      'ul',
                      { className: 'tag-list' },
                      (function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                          t = arguments.length > 1 ? arguments[1] : void 0,
                          r = arguments.length > 2 ? arguments[2] : void 0,
                          n = arguments.length > 3 ? arguments[3] : void 0,
                          o = arguments.length > 4 ? arguments[4] : void 0
                        return e.map(function(e) {
                          var a = e._id,
                            l = e.label,
                            u = e.tagClassName,
                            s = e.dataset,
                            f = e.tagLabel
                          return i().createElement(
                            'li',
                            Y(
                              { className: ['tag-item', u].filter(Boolean).join(' '), key: 'tag-item-'.concat(a) },
                              c(s)
                            ),
                            i().createElement(I, {
                              label: f || l,
                              id: a,
                              onDelete: t,
                              readOnly: r,
                              disabled: n || e.disabled,
                              labelRemove: o,
                            })
                          )
                        })
                      })(t, r, l, a, o.labelRemove),
                      i().createElement('li', { className: 'tag-item' }, u)
                    )
                  },
                },
              ]),
              r && A(t.prototype, r),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              l
            )
          })(r.PureComponent)
        ;(K = H),
          (q = 'propTypes'),
          (U = {
            tags: t().array,
            onTagRemove: t().func,
            readOnly: t().bool,
            disabled: t().bool,
            texts: t().object,
            children: t().node,
          }),
          q in K
            ? Object.defineProperty(K, q, { value: U, enumerable: !0, configurable: !0, writable: !0 })
            : (K[q] = U)
        const W = H
        function z(e) {
          return (
            (z =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            z(e)
          )
        }
        function $() {
          return (
            ($ =
              Object.assign ||
              function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t]
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
              }),
            $.apply(this, arguments)
          )
        }
        function J(e, t) {
          var r = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e)
            t &&
              (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              r.push.apply(r, n)
          }
          return r
        }
        function Z(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? J(Object(r), !0).forEach(function(t) {
                  ne(e, t, r[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : J(Object(r)).forEach(function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
          }
          return e
        }
        function G(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        function Q(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        function X(e, t) {
          return (
            (X =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              }),
            X(e, t)
          )
        }
        function ee(e, t) {
          if (t && ('object' === z(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return te(e)
        }
        function te(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          return e
        }
        function re(e) {
          return (
            (re = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            re(e)
          )
        }
        function ne(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = r),
            e
          )
        }
        var oe = (function(e) {
          !(function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && X(e, t)
          })(c, e)
          var t,
            r,
            n,
            o,
            a = ((n = c),
            (o = (function() {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1
              if (Reflect.construct.sham) return !1
              if ('function' == typeof Proxy) return !0
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
              } catch (e) {
                return !1
              }
            })()),
            function() {
              var e,
                t = re(n)
              if (o) {
                var r = re(this).constructor
                e = Reflect.construct(t, arguments, r)
              } else e = t.apply(this, arguments)
              return ee(this, e)
            })
          function c() {
            var e
            G(this, c)
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]
            return (
              ne(te((e = a.call.apply(a, [this].concat(r)))), 'getAriaAttributes', function() {
                var t = e.props,
                  r = t.mode,
                  n = t.texts,
                  o = void 0 === n ? {} : n,
                  i = t.showDropdown,
                  a = t.clientId,
                  c = t.tags,
                  l = ''.concat(a, '_trigger'),
                  u = [],
                  s = d(o.label)
                return (
                  c &&
                    c.length &&
                    (s['aria-label'] && u.push(l),
                    c.forEach(function(e) {
                      u.push(N(e._id))
                    }),
                    (s = d(o.label, u.join(' ')))),
                  Z(
                    {
                      id: l,
                      role: 'button',
                      tabIndex: e.props.tabIndex,
                      'aria-haspopup': 'simpleSelect' === r ? 'listbox' : 'tree',
                      'aria-expanded': i ? 'true' : 'false',
                    },
                    s
                  )
                )
              }),
              ne(te(e), 'handleTrigger', function(t) {
                ;(t.key && 13 !== t.keyCode && 32 !== t.keyCode && 40 !== t.keyCode) ||
                  (t.key && e.triggerNode && e.triggerNode !== document.activeElement) ||
                  (e.props.showDropdown || 32 !== t.keyCode || t.preventDefault(), e.props.onTrigger(t))
              }),
              e
            )
          }
          return (
            (t = c),
            (r = [
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    r = t.disabled,
                    n = t.readOnly,
                    o = t.showDropdown,
                    a = ['dropdown-trigger', 'arrow', r && 'disabled', n && 'readOnly', o && 'top', !o && 'bottom']
                      .filter(Boolean)
                      .join(' ')
                  return i().createElement(
                    'a',
                    $(
                      {
                        ref: function(t) {
                          e.triggerNode = t
                        },
                        className: a,
                        onClick: r ? void 0 : this.handleTrigger,
                        onKeyDown: r ? void 0 : this.handleTrigger,
                      },
                      this.getAriaAttributes()
                    ),
                    this.props.children
                  )
                },
              },
            ]) && Q(t.prototype, r),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            c
          )
        })(r.PureComponent)
        ne(oe, 'propTypes', {
          onTrigger: t().func,
          disabled: t().bool,
          readOnly: t().bool,
          showDropdown: t().bool,
          mode: t().oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
          texts: t().object,
          clientId: t().string,
          tags: t().array,
          tabIndex: t().number,
        })
        const ie = oe
        var ae = n(385),
          ce = n.n(ae)
        function le(e) {
          return (
            (le =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            le(e)
          )
        }
        function ue(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        function se(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        function fe(e, t) {
          return (
            (fe =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              }),
            fe(e, t)
          )
        }
        function pe(e, t) {
          if (t && ('object' === le(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return de(e)
        }
        function de(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          return e
        }
        function he(e) {
          return (
            (he = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            he(e)
          )
        }
        function ye(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = r),
            e
          )
        }
        var be = (function(e) {
          !(function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && fe(e, t)
          })(c, e)
          var t,
            r,
            n,
            o,
            a = ((n = c),
            (o = (function() {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1
              if (Reflect.construct.sham) return !1
              if ('function' == typeof Proxy) return !0
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
              } catch (e) {
                return !1
              }
            })()),
            function() {
              var e,
                t = he(n)
              if (o) {
                var r = he(this).constructor
                e = Reflect.construct(t, arguments, r)
              } else e = t.apply(this, arguments)
              return pe(this, e)
            })
          function c() {
            var e
            ue(this, c)
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]
            return (
              ye(de((e = a.call.apply(a, [this].concat(r)))), 'handleClick', function() {
                var t = e.props,
                  r = t.onAction,
                  n = t.actionData
                r && r(n.nodeId, n.action)
              }),
              e
            )
          }
          return (
            (t = c),
            (r = [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.title,
                    r = e.className,
                    n = e.text,
                    o = e.readOnly
                  return i().createElement('i', { title: t, className: r, onClick: o ? void 0 : this.handleClick }, n)
                },
              },
            ]) && se(t.prototype, r),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            c
          )
        })(r.PureComponent)
        ye(be, 'propTypes', {
          title: t().string,
          text: t().string,
          className: t().string,
          actionData: t().object,
          onAction: t().func,
          readOnly: t().bool,
        }),
          ye(be, 'defaultProps', { onAction: function() {} })
        const ge = be
        function ve(e) {
          return (
            (ve =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            ve(e)
          )
        }
        var me = ['actions', 'id']
        function Oe() {
          return (
            (Oe =
              Object.assign ||
              function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t]
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
              }),
            Oe.apply(this, arguments)
          )
        }
        function we(e, t) {
          var r = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e)
            t &&
              (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              r.push.apply(r, n)
          }
          return r
        }
        function Pe(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? we(Object(r), !0).forEach(function(t) {
                  Ee(e, t, r[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : we(Object(r)).forEach(function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
          }
          return e
        }
        function Se(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        function je(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        function ke(e, t) {
          return (
            (ke =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              }),
            ke(e, t)
          )
        }
        function Te(e, t) {
          if (t && ('object' === ve(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        }
        function _e(e) {
          return (
            (_e = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            _e(e)
          )
        }
        function Ee(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = r),
            e
          )
        }
        var Ce = (function(e) {
          !(function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && ke(e, t)
          })(c, e)
          var t,
            r,
            n,
            o,
            a = ((n = c),
            (o = (function() {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1
              if (Reflect.construct.sham) return !1
              if ('function' == typeof Proxy) return !0
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
              } catch (e) {
                return !1
              }
            })()),
            function() {
              var e,
                t = _e(n)
              if (o) {
                var r = _e(this).constructor
                e = Reflect.construct(t, arguments, r)
              } else e = t.apply(this, arguments)
              return Te(this, e)
            })
          function c() {
            return Se(this, c), a.apply(this, arguments)
          }
          return (
            (t = c),
            (r = [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    r = e.id,
                    n = (function(e, t) {
                      if (null == e) return {}
                      var r,
                        n,
                        o = (function(e, t) {
                          if (null == e) return {}
                          var r,
                            n,
                            o = {},
                            i = Object.keys(e)
                          for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
                          return o
                        })(e, t)
                      if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e)
                        for (n = 0; n < i.length; n++)
                          (r = i[n]),
                            t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]))
                      }
                      return o
                    })(e, me)
                  return l(t)
                    ? null
                    : t.map(function(e, t) {
                        var o = e.id || 'action-'.concat(t)
                        return i().createElement(
                          ge,
                          Oe({ key: o }, n, e, { actionData: { action: Pe(Pe({}, e), {}, { id: o }), nodeId: r } })
                        )
                      })
                },
              },
            ]) && je(t.prototype, r),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            c
          )
        })(r.PureComponent)
        Ee(Ce, 'propTypes', { id: t().string.isRequired, actions: t().array })
        const xe = Ce
        function Re(e) {
          return (
            (Re =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            Re(e)
          )
        }
        var Ne = ['checked', 'indeterminate', 'onChange', 'disabled', 'readOnly']
        function De() {
          return (
            (De =
              Object.assign ||
              function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t]
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
              }),
            De.apply(this, arguments)
          )
        }
        function Ie(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        function Me(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        function Be(e, t) {
          return (
            (Be =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              }),
            Be(e, t)
          )
        }
        function Ae(e, t) {
          if (t && ('object' === Re(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        }
        function Fe(e) {
          return (
            (Fe = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            Fe(e)
          )
        }
        var Le = function(e) {
            var t = e.checked,
              r = e.indeterminate
            return function(e) {
              e && ((e.checked = t), (e.indeterminate = r))
            }
          },
          Ve = (function(e) {
            !(function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function')
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                t && Be(e, t)
            })(c, e)
            var t,
              r,
              n,
              o,
              a = ((n = c),
              (o = (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                if (Reflect.construct.sham) return !1
                if ('function' == typeof Proxy) return !0
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                  return !1
                }
              })()),
              function() {
                var e,
                  t = Fe(n)
                if (o) {
                  var r = Fe(this).constructor
                  e = Reflect.construct(t, arguments, r)
                } else e = t.apply(this, arguments)
                return Ae(this, e)
              })
            function c() {
              return Ie(this, c), a.apply(this, arguments)
            }
            return (
              (t = c),
              (r = [
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.checked,
                      r = e.indeterminate,
                      n = void 0 !== r && r,
                      o = e.onChange,
                      a = e.disabled,
                      c = e.readOnly,
                      l = (function(e, t) {
                        if (null == e) return {}
                        var r,
                          n,
                          o = (function(e, t) {
                            if (null == e) return {}
                            var r,
                              n,
                              o = {},
                              i = Object.keys(e)
                            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
                            return o
                          })(e, t)
                        if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e)
                          for (n = 0; n < i.length; n++)
                            (r = i[n]),
                              t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]))
                        }
                        return o
                      })(e, Ne),
                      u = a || c
                    return i().createElement(
                      'input',
                      De({ type: 'checkbox', ref: Le({ checked: t, indeterminate: n }), onChange: o, disabled: u }, l)
                    )
                  },
                },
              ]) && Me(t.prototype, r),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              c
            )
          })(r.PureComponent)
        !(function(e, t, r) {
          t in e
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r)
        })(Ve, 'propTypes', {
          checked: t().bool,
          indeterminate: t().bool,
          onChange: t().func,
          disabled: t().bool,
          readOnly: t().bool,
        })
        const Ye = Ve
        function Ke(e) {
          return (
            (Ke =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            Ke(e)
          )
        }
        var qe = ['name', 'checked', 'onChange', 'disabled', 'readOnly']
        function Ue() {
          return (
            (Ue =
              Object.assign ||
              function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t]
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
              }),
            Ue.apply(this, arguments)
          )
        }
        function He(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        function We(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        function ze(e, t) {
          return (
            (ze =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              }),
            ze(e, t)
          )
        }
        function $e(e, t) {
          if (t && ('object' === Ke(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        }
        function Je(e) {
          return (
            (Je = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            Je(e)
          )
        }
        var Ze = function(e) {
            var t = e.checked
            return function(e) {
              e && (e.checked = t)
            }
          },
          Ge = (function(e) {
            !(function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function')
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                t && ze(e, t)
            })(c, e)
            var t,
              r,
              n,
              o,
              a = ((n = c),
              (o = (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                if (Reflect.construct.sham) return !1
                if ('function' == typeof Proxy) return !0
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                  return !1
                }
              })()),
              function() {
                var e,
                  t = Je(n)
                if (o) {
                  var r = Je(this).constructor
                  e = Reflect.construct(t, arguments, r)
                } else e = t.apply(this, arguments)
                return $e(this, e)
              })
            function c() {
              return He(this, c), a.apply(this, arguments)
            }
            return (
              (t = c),
              (r = [
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.name,
                      r = e.checked,
                      n = e.onChange,
                      o = e.disabled,
                      a = e.readOnly,
                      c = (function(e, t) {
                        if (null == e) return {}
                        var r,
                          n,
                          o = (function(e, t) {
                            if (null == e) return {}
                            var r,
                              n,
                              o = {},
                              i = Object.keys(e)
                            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
                            return o
                          })(e, t)
                        if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e)
                          for (n = 0; n < i.length; n++)
                            (r = i[n]),
                              t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]))
                        }
                        return o
                      })(e, qe),
                      l = o || a
                    return i().createElement(
                      'input',
                      Ue({ type: 'radio', name: t, ref: Ze({ checked: r }), onChange: n, disabled: l }, c)
                    )
                  },
                },
              ]) && We(t.prototype, r),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              c
            )
          })(r.PureComponent)
        !(function(e, t, r) {
          t in e
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r)
        })(Ge, 'propTypes', {
          name: t().string.isRequired,
          checked: t().bool,
          onChange: t().func,
          disabled: t().bool,
          readOnly: t().bool,
        })
        const Qe = Ge
        function Xe(e) {
          return (
            (Xe =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            Xe(e)
          )
        }
        function et() {
          return (
            (et =
              Object.assign ||
              function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t]
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
              }),
            et.apply(this, arguments)
          )
        }
        function tt(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        function rt(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        function nt(e, t) {
          return (
            (nt =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              }),
            nt(e, t)
          )
        }
        function ot(e, t) {
          if (t && ('object' === Xe(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return it(e)
        }
        function it(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          return e
        }
        function at(e) {
          return (
            (at = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            at(e)
          )
        }
        function ct(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = r),
            e
          )
        }
        var lt = (function(e) {
          !(function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && nt(e, t)
          })(c, e)
          var t,
            r,
            n,
            o,
            a = ((n = c),
            (o = (function() {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1
              if (Reflect.construct.sham) return !1
              if ('function' == typeof Proxy) return !0
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
              } catch (e) {
                return !1
              }
            })()),
            function() {
              var e,
                t = at(n)
              if (o) {
                var r = at(this).constructor
                e = Reflect.construct(t, arguments, r)
              } else e = t.apply(this, arguments)
              return ot(this, e)
            })
          function c() {
            var e
            tt(this, c)
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]
            return (
              ct(it((e = a.call.apply(a, [this].concat(r)))), 'handleCheckboxChange', function(t) {
                var r = e.props,
                  n = r.mode,
                  o = r.id,
                  i = r.onCheckboxChange
                i(o, 'simpleSelect' === n || 'radioSelect' === n || t.target.checked),
                  t.stopPropagation(),
                  t.nativeEvent.stopImmediatePropagation()
              }),
              e
            )
          }
          return (
            (t = c),
            (r = [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.mode,
                    r = e.title,
                    n = e.label,
                    o = e.id,
                    a = e.partial,
                    c = e.checked,
                    l = this.props,
                    u = l.value,
                    s = l.disabled,
                    f = l.showPartiallySelected,
                    p = l.readOnly,
                    d = l.clientId,
                    h = { className: 'node-label' }
                  'simpleSelect' === t && !p && !s && (h.onClick = this.handleCheckboxChange)
                  var y = { id: o, value: u, checked: c, disabled: s, readOnly: p, tabIndex: -1 },
                    b = ['checkbox-item form-check-input', 'simpleSelect' === t && 'simple-select']
                      .filter(Boolean)
                      .join(' ')
                  return i().createElement(
                    'label',
                    { title: r || n, htmlFor: o },
                    'radioSelect' === t
                      ? i().createElement(
                          Qe,
                          et({ name: d, className: 'radio-item', onChange: this.handleCheckboxChange }, y)
                        )
                      : i().createElement(
                          'div',
                          { className: 'form-check' },
                          i().createElement(
                            Ye,
                            et({ name: o, className: b, indeterminate: f && a, onChange: this.handleCheckboxChange }, y)
                          )
                        ),
                    i().createElement('span', h, n)
                  )
                },
              },
            ]),
            r && rt(t.prototype, r),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            c
          )
        })(r.PureComponent)
        ct(lt, 'propTypes', {
          id: t().string.isRequired,
          actions: t().array,
          title: t().string,
          label: t().string.isRequired,
          value: t().string.isRequired,
          checked: t().bool,
          partial: t().bool,
          disabled: t().bool,
          dataset: t().object,
          mode: t().oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
          showPartiallySelected: t().bool,
          onCheckboxChange: t().func,
          readOnly: t().bool,
          clientId: t().string,
        })
        const ut = lt
        function st(e) {
          return (
            (st =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            st(e)
          )
        }
        function ft(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        function pt(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        function dt(e, t) {
          return (
            (dt =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              }),
            dt(e, t)
          )
        }
        function ht(e, t) {
          if (t && ('object' === st(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return yt(e)
        }
        function yt(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          return e
        }
        function bt(e) {
          return (
            (bt = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            bt(e)
          )
        }
        function gt(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = r),
            e
          )
        }
        var vt = (function(e) {
          !(function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && dt(e, t)
          })(c, e)
          var t,
            r,
            n,
            o,
            a = ((n = c),
            (o = (function() {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1
              if (Reflect.construct.sham) return !1
              if ('function' == typeof Proxy) return !0
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
              } catch (e) {
                return !1
              }
            })()),
            function() {
              var e,
                t = bt(n)
              if (o) {
                var r = bt(this).constructor
                e = Reflect.construct(t, arguments, r)
              } else e = t.apply(this, arguments)
              return ht(this, e)
            })
          function c() {
            var e
            ft(this, c)
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]
            return (
              gt(yt((e = a.call.apply(a, [this].concat(r)))), 'onToggle', function(t) {
                t.stopPropagation(), t.nativeEvent.stopImmediatePropagation(), e.props.onNodeToggle(e.props.id)
              }),
              gt(yt(e), 'onKeyDown', function(t) {
                ;('Enter' !== t.key && 32 !== t.keyCode) || (e.props.onNodeToggle(e.props.id), t.preventDefault())
              }),
              e
            )
          }
          return (
            (t = c),
            (r = [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.expanded,
                    r = e.isLeaf,
                    n = ['toggle', t && 'expanded', !t && 'collapsed'].filter(Boolean).join(' ')
                  return r
                    ? i().createElement('i', {
                        role: 'button',
                        tabIndex: -1,
                        className: n,
                        style: { visibility: 'hidden' },
                        'aria-hidden': !0,
                      })
                    : i().createElement('i', {
                        role: 'button',
                        tabIndex: -1,
                        className: n,
                        onClick: this.onToggle,
                        onKeyDown: this.onKeyDown,
                        'aria-hidden': !0,
                      })
                },
              },
            ]),
            r && pt(t.prototype, r),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            c
          )
        })(r.PureComponent)
        gt(vt, 'propTypes', { expanded: t().bool, isLeaf: t().bool, onNodeToggle: t().func, id: t().string })
        const mt = vt
        function Ot(e) {
          return (
            (Ot =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            Ot(e)
          )
        }
        function wt() {
          return (
            (wt =
              Object.assign ||
              function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t]
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
              }),
            wt.apply(this, arguments)
          )
        }
        function Pt(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        function St(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        function jt(e, t) {
          return (
            (jt =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              }),
            jt(e, t)
          )
        }
        function kt(e, t) {
          if (t && ('object' === Ot(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return Tt(e)
        }
        function Tt(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          return e
        }
        function _t(e) {
          return (
            (_t = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            _t(e)
          )
        }
        function Et(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = r),
            e
          )
        }
        var Ct = function(e) {
            return l(e)
          },
          xt = (function(e) {
            !(function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function')
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                t && jt(e, t)
            })(l, e)
            var t,
              r,
              n,
              o,
              a = ((n = l),
              (o = (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                if (Reflect.construct.sham) return !1
                if ('function' == typeof Proxy) return !0
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                  return !1
                }
              })()),
              function() {
                var e,
                  t = _t(n)
                if (o) {
                  var r = _t(this).constructor
                  e = Reflect.construct(t, arguments, r)
                } else e = t.apply(this, arguments)
                return kt(this, e)
              })
            function l() {
              var e
              Pt(this, l)
              for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]
              return (
                Et(Tt((e = a.call.apply(a, [this].concat(r)))), 'getAriaAttributes', function() {
                  var t = e.props,
                    r = t._children,
                    n = t._depth,
                    o = t.checked,
                    i = t.disabled,
                    a = t.expanded,
                    c = t.readOnly,
                    l = t.mode,
                    u = t.partial,
                    s = {}
                  return (
                    (s.role = 'simpleSelect' === l ? 'option' : 'treeitem'),
                    (s['aria-disabled'] = i || c),
                    (s['aria-selected'] = o),
                    'simpleSelect' !== l &&
                      ((s['aria-checked'] = u ? 'mixed' : o),
                      (s['aria-level'] = (n || 0) + 1),
                      (s['aria-expanded'] = r && (a ? 'true' : 'false'))),
                    s
                  )
                }),
                e
              )
            }
            return (
              (t = l),
              (r = [
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.mode,
                      r = e.keepTreeOnSearch,
                      n = e._id,
                      o = e._children,
                      a = e.dataset,
                      l = e._depth,
                      u = e.expanded,
                      s = e.title,
                      f = e.label,
                      p = e.partial,
                      d = e.checked,
                      h = e.value,
                      y = e.disabled,
                      b = e.actions,
                      g = e.onAction,
                      v = e.searchModeOn,
                      m = e.onNodeToggle,
                      O = e.onCheckboxChange,
                      w = e.showPartiallySelected,
                      P = e.readOnly,
                      S = e.clientId,
                      j = (function(e) {
                        var t = e.keepTreeOnSearch,
                          r = e.keepChildrenOnSearch,
                          n = e._children,
                          o = e.matchInChildren,
                          i = e.matchInParent,
                          a = e.disabled,
                          c = e.partial,
                          l = e.hide,
                          u = e.className,
                          s = e.showPartiallySelected,
                          f = e.readOnly,
                          p = e.checked,
                          d = e._focused
                        return [
                          'node',
                          Ct(n) && 'leaf',
                          !Ct(n) && 'tree',
                          a && 'disabled',
                          l && 'hide',
                          t && o && 'match-in-children',
                          t && r && i && 'match-in-parent',
                          s && c && 'partial',
                          f && 'readOnly',
                          p && 'checked',
                          d && 'focused',
                          u,
                        ]
                          .filter(Boolean)
                          .join(' ')
                      })(this.props),
                      k = r || !v ? { paddingLeft: ''.concat(20 * (l || 0), 'px') } : {},
                      T = ''.concat(n, '_li')
                    return i().createElement(
                      'li',
                      wt({ className: j, style: k, id: T }, c(a), this.getAriaAttributes()),
                      i().createElement(mt, { isLeaf: Ct(o), expanded: u, id: n, onNodeToggle: m }),
                      i().createElement(ut, {
                        title: s,
                        label: f,
                        id: n,
                        partial: p,
                        checked: d,
                        value: h,
                        disabled: y,
                        mode: t,
                        onCheckboxChange: O,
                        showPartiallySelected: w,
                        readOnly: P,
                        clientId: S,
                      }),
                      i().createElement(xe, { actions: b, onAction: g, id: n, readOnly: P })
                    )
                  },
                },
              ]),
              r && St(t.prototype, r),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              l
            )
          })(r.PureComponent)
        Et(xt, 'propTypes', {
          _id: t().string.isRequired,
          _depth: t().number,
          _children: t().array,
          actions: t().array,
          className: t().string,
          title: t().string,
          label: t().string.isRequired,
          value: t().string.isRequired,
          checked: t().bool,
          expanded: t().bool,
          disabled: t().bool,
          partial: t().bool,
          dataset: t().object,
          keepTreeOnSearch: t().bool,
          keepChildrenOnSearch: t().bool,
          searchModeOn: t().bool,
          onNodeToggle: t().func,
          onAction: t().func,
          onCheckboxChange: t().func,
          mode: t().oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
          showPartiallySelected: t().bool,
          readOnly: t().bool,
          clientId: t().string,
        })
        const Rt = xt
        function Nt(e) {
          return (
            (Nt =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            Nt(e)
          )
        }
        function Dt() {
          return (
            (Dt =
              Object.assign ||
              function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t]
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
              }),
            Dt.apply(this, arguments)
          )
        }
        function It(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        function Mt(e, t) {
          return (
            (Mt =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              }),
            Mt(e, t)
          )
        }
        function Bt(e, t) {
          if (t && ('object' === Nt(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return At(e)
        }
        function At(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          return e
        }
        function Ft(e) {
          return (
            (Ft = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            Ft(e)
          )
        }
        function Lt(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = r),
            e
          )
        }
        var Vt = (function(e) {
          !(function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && Mt(e, t)
          })(c, e)
          var t,
            r,
            n,
            o,
            a = ((n = c),
            (o = (function() {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1
              if (Reflect.construct.sham) return !1
              if ('function' == typeof Proxy) return !0
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
              } catch (e) {
                return !1
              }
            })()),
            function() {
              var e,
                t = Ft(n)
              if (o) {
                var r = Ft(this).constructor
                e = Reflect.construct(t, arguments, r)
              } else e = t.apply(this, arguments)
              return Bt(this, e)
            })
          function c(e) {
            var t
            return (
              (function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, c),
              Lt(At((t = a.call(this, e))), 'UNSAFE_componentWillReceiveProps', function(e) {
                var r = e.activeDescendant === t.props.activeDescendant
                t.computeInstanceProps(e, !r),
                  t.setState({ items: t.allVisibleNodes.slice(0, t.currentPage * t.props.pageSize) })
              }),
              Lt(At(t), 'componentDidMount', function() {
                t.setState({ scrollableTarget: t.node.parentNode })
              }),
              Lt(At(t), 'computeInstanceProps', function(e, r) {
                if (
                  ((t.allVisibleNodes = t.getNodes(e)),
                  (t.totalPages = Math.ceil(t.allVisibleNodes.length / t.props.pageSize)),
                  r && e.activeDescendant)
                ) {
                  var n = e.activeDescendant.replace(/_li$/, ''),
                    o =
                      p(t.allVisibleNodes, function(e) {
                        return e.key === n
                      }) + 1
                  t.currentPage = o > 0 ? Math.ceil(o / t.props.pageSize) : 1
                }
              }),
              Lt(At(t), 'shouldRenderNode', function(e, t) {
                var r = t.data,
                  n = t.searchModeOn,
                  o = e.expanded,
                  i = e._parent
                if (n || o) return !0
                var a = i && r.get(i)
                return !a || a.expanded
              }),
              Lt(At(t), 'getNodes', function(e) {
                var r = e.data,
                  n = e.keepTreeOnSearch,
                  o = e.keepChildrenOnSearch,
                  a = e.searchModeOn,
                  c = e.mode,
                  l = e.showPartiallySelected,
                  u = e.readOnly,
                  s = e.onAction,
                  f = e.onChange,
                  p = e.onCheckboxChange,
                  d = e.onNodeToggle,
                  h = e.activeDescendant,
                  y = e.clientId,
                  b = []
                return (
                  r.forEach(function(r) {
                    t.shouldRenderNode(r, e) &&
                      b.push(
                        i().createElement(
                          Rt,
                          Dt({ keepTreeOnSearch: n, keepChildrenOnSearch: o, key: r._id }, r, {
                            searchModeOn: a,
                            onChange: f,
                            onCheckboxChange: p,
                            onNodeToggle: d,
                            onAction: s,
                            mode: c,
                            showPartiallySelected: l,
                            readOnly: u,
                            clientId: y,
                            activeDescendant: h,
                          })
                        )
                      )
                  }),
                  b
                )
              }),
              Lt(At(t), 'hasMore', function() {
                return t.currentPage < t.totalPages
              }),
              Lt(At(t), 'loadMore', function() {
                t.currentPage = t.currentPage + 1
                var e = t.allVisibleNodes.slice(0, t.currentPage * t.props.pageSize)
                t.setState({ items: e })
              }),
              Lt(At(t), 'setNodeRef', function(e) {
                t.node = e
              }),
              Lt(At(t), 'getAriaAttributes', function() {
                var e = t.props.mode
                return {
                  role: 'simpleSelect' === e ? 'listbox' : 'tree',
                  'aria-multiselectable': /multiSelect|hierarchical/.test(e),
                }
              }),
              (t.currentPage = 1),
              t.computeInstanceProps(e, !0),
              (t.state = { items: t.allVisibleNodes.slice(0, t.props.pageSize) }),
              t
            )
          }
          return (
            (t = c),
            (r = [
              {
                key: 'render',
                value: function() {
                  var e = this.props.searchModeOn
                  return i().createElement(
                    'ul',
                    Dt(
                      { className: 'root '.concat(e ? 'searchModeOn' : ''), ref: this.setNodeRef },
                      this.getAriaAttributes()
                    ),
                    this.state.scrollableTarget &&
                      i().createElement(
                        ce(),
                        {
                          dataLength: this.state.items.length,
                          next: this.loadMore,
                          hasMore: this.hasMore(),
                          loader: i().createElement('span', { className: 'searchLoader' }, 'Loading...'),
                          scrollableTarget: this.state.scrollableTarget,
                        },
                        this.state.items
                      )
                  )
                },
              },
            ]) && It(t.prototype, r),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            c
          )
        })(r.Component)
        Lt(Vt, 'propTypes', {
          data: t().object,
          keepTreeOnSearch: t().bool,
          keepChildrenOnSearch: t().bool,
          searchModeOn: t().bool,
          onChange: t().func,
          onNodeToggle: t().func,
          onAction: t().func,
          onCheckboxChange: t().func,
          mode: t().oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
          showPartiallySelected: t().bool,
          pageSize: t().number,
          readOnly: t().bool,
          clientId: t().string,
          activeDescendant: t().string,
        }),
          Lt(Vt, 'defaultProps', { pageSize: 100 })
        const Yt = Vt
        var Kt = n(865),
          qt = n.n(Kt),
          Ut = function(e) {
            return e
          }
        const Ht = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'children',
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ut
          return (
            qt()(e[t], function(e) {
              return r(e).checked
            }) ||
            e[t].some(function(e) {
              return r(e).partial
            })
          )
        }
        function Wt(e) {
          var t = e.nodes,
            r = e.parent,
            n = e.depth,
            o = void 0 === n ? 0 : n,
            i = e.simple,
            a = e.radio,
            c = e.showPartialState,
            u = e.hierarchical,
            s = e.rootPrefixId,
            f = e._rv,
            p = void 0 === f ? { list: new Map(), defaultValues: [], singleSelectedNode: null } : f,
            d = i || a
          return (
            t.forEach(function(e, t) {
              ;(e._depth = o),
                r
                  ? ((e._id = e.id || ''.concat(r._id, '-').concat(t)), (e._parent = r._id), r._children.push(e._id))
                  : (e._id = e.id || ''.concat(s ? ''.concat(s, '-').concat(t) : t)),
                d && e.checked && (p.singleSelectedNode ? (e.checked = !1) : (p.singleSelectedNode = e)),
                d &&
                  e.isDefaultValue &&
                  p.singleSelectedNode &&
                  !p.singleSelectedNode.isDefaultValue &&
                  ((p.singleSelectedNode.checked = !1), (p.singleSelectedNode = null)),
                !e.isDefaultValue ||
                  (d && 0 !== p.defaultValues.length) ||
                  (p.defaultValues.push(e._id), (e.checked = !0), d && (p.singleSelectedNode = e)),
                (u && !a) ||
                  (function(e) {
                    for (
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r =
                          arguments.length > 2 && void 0 !== arguments[2] && !arguments[2]
                            ? ['disabled']
                            : ['checked', 'disabled'],
                        n = 0;
                      n < r.length;
                      n++
                    ) {
                      var o = r[n]
                      void 0 === e[o] && void 0 !== t[o] && (e[o] = t[o])
                    }
                  })(e, r, !a),
                p.list.set(e._id, e),
                !i &&
                  e.children &&
                  ((e._children = []),
                  Wt({
                    nodes: e.children,
                    parent: e,
                    depth: o + 1,
                    radio: a,
                    showPartialState: c,
                    hierarchical: u,
                    _rv: p,
                  }),
                  c &&
                    !e.checked &&
                    ((e.partial = Ht(e)),
                    d ||
                      l(e.children) ||
                      !e.children.every(function(e) {
                        return e.checked
                      }) ||
                      (e.checked = !0)),
                  (e.children = void 0))
            }),
            p
          )
        }
        const zt = function(e) {
          var t = e.tree,
            r = e.simple,
            n = e.radio,
            o = e.showPartialState,
            i = e.hierarchical,
            a = e.rootPrefixId
          return Wt({
            nodes: Array.isArray(t) ? t : [t],
            simple: r,
            radio: n,
            showPartialState: o,
            hierarchical: i,
            rootPrefixId: a,
          })
        }
        var $t = function e(t, r, n) {
            ;(r[t._id] = !0),
              l(t._children) ||
                t._children.forEach(function(t) {
                  return e(n(t), r, n)
                })
          },
          Jt = function(e, t) {
            var r = [],
              n = {}
            return (
              e.forEach(function(e, o) {
                n[o] || (t(e, o, n) && r.push(e), (n[o] = !0))
              }),
              r
            )
          },
          Zt = {
            getNodesMatching: Jt,
            getVisibleNodes: function(e, t, r) {
              return Jt(e, function(e, n, o) {
                return r && e._children && e._children.length && !0 !== e.expanded && $t(e, o, t), !e.hide
              })
            },
            markSubTreeVisited: $t,
          }
        const Gt = Zt
        function Qt(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
          return n
        }
        var Xt = 'ArrowUp',
          er = 'ArrowDown',
          tr = 'ArrowLeft',
          rr = 'ArrowRight',
          nr = 'Enter',
          or = 'Home',
          ir = 'PageUp',
          ar = 'PageDown',
          cr = {
            None: 'None',
            FocusPrevious: 'FocusPrevious',
            FocusNext: 'FocusNext',
            FocusParent: 'FocusParent',
            FocusFirst: 'FocusFirst',
            FocusLast: 'FocusLast',
            ToggleExpanded: 'ToggleExpanded',
            ToggleChecked: 'ToggleChecked',
          },
          lr = new Set([cr.FocusPrevious, cr.FocusNext, cr.FocusParent, cr.FocusFirst, cr.FocusLast]),
          ur = [Xt, er, or, ir, 'End', ar],
          sr = ur.concat([tr, rr, nr]),
          fr = function(e, t, r, n) {
            return t.indexOf(e) > -1 || (!r && e === n)
          },
          pr = function(e, t, r) {
            if (!e || 0 === e.length) return t
            var n,
              o,
              i = t
            return (
              !(function(e) {
                return fr(e, [cr.FocusFirst, cr.FocusLast], !0)
              })(r)
                ? [cr.FocusPrevious, cr.FocusNext].indexOf(r) > -1 &&
                  (i = (function(e, t) {
                    var r = e.indexOf(t) + 1
                    return r % e.length == 0 ? e[0] : e[r]
                  })(e, t))
                : (i = ((n = e),
                  (o = 1),
                  (function(e) {
                    if (Array.isArray(e)) return e
                  })(n) ||
                    (function(e, t) {
                      var r = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
                      if (null != r) {
                        var n,
                          o,
                          i = [],
                          a = !0,
                          c = !1
                        try {
                          for (
                            r = r.call(e);
                            !(a = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t);
                            a = !0
                          );
                        } catch (e) {
                          ;(c = !0), (o = e)
                        } finally {
                          try {
                            a || null == r.return || r.return()
                          } finally {
                            if (c) throw o
                          }
                        }
                        return i
                      }
                    })(n, o) ||
                    (function(e, t) {
                      if (e) {
                        if ('string' == typeof e) return Qt(e, t)
                        var r = Object.prototype.toString.call(e).slice(8, -1)
                        return (
                          'Object' === r && e.constructor && (r = e.constructor.name),
                          'Map' === r || 'Set' === r
                            ? Array.from(e)
                            : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? Qt(e, t)
                            : void 0
                        )
                      }
                    })(n, o) ||
                    (function() {
                      throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                      )
                    })())[0]),
              i
            )
          },
          dr = {
            isValidKey: function(e, t) {
              return (t ? sr : ur).indexOf(e) > -1
            },
            getAction: function(e, t) {
              var r
              return (
                (r =
                  t === tr
                    ? (function(e, t) {
                        return e && t === tr
                          ? !0 === e.expanded
                            ? cr.ToggleExpanded
                            : e._parent
                            ? cr.FocusParent
                            : cr.None
                          : cr.None
                      })(e, t)
                    : t === rr
                    ? (function(e, t) {
                        return e && e._children && t === rr
                          ? !0 !== e.expanded
                            ? cr.ToggleExpanded
                            : cr.FocusNext
                          : cr.None
                      })(e, t)
                    : (function(e, t) {
                        return fr(e, [or, ir], t, er)
                      })(t, e)
                    ? cr.FocusFirst
                    : (function(e, t) {
                        return fr(e, ['End', ar], t, Xt)
                      })(t, e)
                    ? cr.FocusLast
                    : (function(e, t) {
                        if (!e) return cr.None
                        switch (t) {
                          case Xt:
                            return cr.FocusPrevious
                          case er:
                            return cr.FocusNext
                          case nr:
                            return cr.ToggleChecked
                          default:
                            return cr.None
                        }
                      })(e, t)),
                r
              )
            },
            getNextFocus: function(e, t, r, n, o) {
              if (r === cr.FocusParent)
                return (function(e, t) {
                  return e && e._parent ? t(e._parent) : e
                })(t, n)
              if (!lr.has(r)) return t
              var i = Gt.getVisibleNodes(e, n, o)
              return (
                (function(e) {
                  return fr(e, [cr.FocusPrevious, cr.FocusLast], !0)
                })(r) && (i = i.reverse()),
                pr(i, t, r)
              )
            },
            getNextFocusAfterTagDelete: function(e, t, r, n) {
              var o = t
                ? p(t, function(t) {
                    return t._id === e
                  })
                : -1
              if (o < 0 || !r.length) return n
              var i = r[(o = r.length > o ? o : r.length - 1)]._id,
                a = document.getElementById(N(i))
              return (a && a.firstElementChild) || n
            },
            handleFocusNavigationkey: function(e, t, r, n, o) {
              var i = dr.getNextFocus(e, r, t, n, o)
              return dr.adjustFocusedProps(r, i), i ? i._id : r && r._id
            },
            handleToggleNavigationkey: function(e, t, r, n, o) {
              return (
                e !== cr.ToggleChecked || r || t.readOnly || t.disabled
                  ? e === cr.ToggleExpanded && o(t._id)
                  : n(t._id, !0 !== t.checked),
                t && t._id
              )
            },
            adjustFocusedProps: function(e, t) {
              e && t && e._id !== t._id && (e._focused = !1), t && (t._focused = !0)
            },
          }
        const hr = dr
        function yr(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        var br = (function() {
          function e(t) {
            var r = t.data,
              n = t.mode,
              o = t.showPartiallySelected,
              i = t.rootPrefixId,
              a = t.searchPredicate
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, e),
              (this._src = r),
              (this.simpleSelect = 'simpleSelect' === n),
              (this.radioSelect = 'radioSelect' === n),
              (this.hierarchical = 'hierarchical' === n),
              (this.searchPredicate = a)
            var c = zt({
                tree: JSON.parse(JSON.stringify(r)),
                simple: this.simpleSelect,
                radio: this.radioSelect,
                showPartialState: o,
                hierarchical: this.hierarchical,
                rootPrefixId: i,
              }),
              l = c.list,
              u = c.defaultValues,
              s = c.singleSelectedNode
            ;(this.tree = l),
              (this.defaultValues = u),
              (this.showPartialState = !this.hierarchical && o),
              (this.searchMaps = new Map()),
              (this.simpleSelect || this.radioSelect) && s && (this.currentChecked = s._id)
          }
          var t, r
          return (
            (t = e),
            (r = [
              {
                key: 'getNodeById',
                value: function(e) {
                  return this.tree.get(e)
                },
              },
              {
                key: 'getMatches',
                value: function(e) {
                  var t = this
                  if (this.searchMaps.has(e)) return this.searchMaps.get(e)
                  var r = -1,
                    n = e
                  this.searchMaps.forEach(function(t, o) {
                    e.startsWith(o) && o.length > r && ((r = o.length), (n = o))
                  })
                  var o = [],
                    i = this._getAddOnMatch(o, e)
                  return (
                    n !== e
                      ? this.searchMaps.get(n).forEach(function(e) {
                          return i(t.getNodeById(e))
                        })
                      : this.tree.forEach(i),
                    this.searchMaps.set(e, o),
                    o
                  )
                },
              },
              {
                key: 'addParentsToTree',
                value: function(e, t) {
                  if (void 0 !== e) {
                    var r = this.getNodeById(e)
                    this.addParentsToTree(r._parent, t),
                      (r.hide = !r._isMatch || r.hide),
                      (r.matchInChildren = !0),
                      t.set(e, r)
                  }
                },
              },
              {
                key: 'addChildrenToTree',
                value: function(e, t, r) {
                  var n = this
                  void 0 !== e &&
                    e.forEach(function(e) {
                      if (!r || !r.includes(e)) {
                        var o = n.getNodeById(e)
                        ;(o.matchInParent = !0), t.set(e, o), n.addChildrenToTree(o._children, t)
                      }
                    })
                },
              },
              {
                key: 'filterTree',
                value: function(e, t, r) {
                  var n = this,
                    o = this.getMatches(e.toLowerCase()),
                    i = new Map()
                  o.forEach(function(e) {
                    var a = n.getNodeById(e)
                    ;(a.hide = !1),
                      (a._isMatch = !0),
                      t && n.addParentsToTree(a._parent, i),
                      i.set(e, a),
                      t && r && n.addChildrenToTree(a._children, i, o)
                  })
                  var a = 0 === o.length
                  return (this.matchTree = i), { allNodesHidden: a, tree: i }
                },
              },
              {
                key: 'restoreNodes',
                value: function() {
                  return (
                    this.tree.forEach(function(e) {
                      e.hide = !1
                    }),
                    this.tree
                  )
                },
              },
              {
                key: 'restoreDefaultValues',
                value: function() {
                  var e = this
                  return (
                    this.defaultValues.forEach(function(t) {
                      e.setNodeCheckedState(t, !0)
                    }),
                    this.tree
                  )
                },
              },
              {
                key: 'togglePreviousChecked',
                value: function(e, t) {
                  var r = this.currentChecked
                  if (r && r !== e) {
                    var n = this.getNodeById(r)
                    ;(n.checked = !1), this.radioSelect && this.showPartialState && this.partialCheckParents(n)
                  }
                  this.currentChecked = t ? e : null
                },
              },
              {
                key: 'setNodeCheckedState',
                value: function(e, t) {
                  this.radioSelect && this.togglePreviousChecked(e, t)
                  var r = this.getNodeById(e)
                  ;(r.checked = t),
                    this.showPartialState && (r.partial = !1),
                    this.simpleSelect
                      ? this.togglePreviousChecked(e, t)
                      : this.radioSelect
                      ? (this.showPartialState && this.partialCheckParents(r), t || this.unCheckParents(r))
                      : (this.hierarchical || this.toggleChildren(e, t),
                        this.showPartialState && this.partialCheckParents(r),
                        this.hierarchical || t || this.unCheckParents(r))
                },
              },
              {
                key: 'unCheckParents',
                value: function(e) {
                  for (var t = e._parent; t; ) {
                    var r = this.getNodeById(t)
                    ;(r.checked = !1), (r.partial = Ht(r, '_children', this.getNodeById.bind(this))), (t = r._parent)
                  }
                },
              },
              {
                key: 'partialCheckParents',
                value: function(e) {
                  for (var t = this, r = e._parent; r; ) {
                    var n = this.getNodeById(r)
                    ;(n.checked = n._children.every(function(e) {
                      return t.getNodeById(e).checked
                    })),
                      (n.partial = Ht(n, '_children', this.getNodeById.bind(this))),
                      (r = n._parent)
                  }
                },
              },
              {
                key: 'toggleChildren',
                value: function(e, t) {
                  var r = this,
                    n = this.getNodeById(e)
                  ;(n.checked = t),
                    this.showPartialState && (n.partial = !1),
                    l(n._children) ||
                      n._children.forEach(function(e) {
                        return r.toggleChildren(e, t)
                      })
                },
              },
              {
                key: 'toggleNodeExpandState',
                value: function(e) {
                  var t = this.getNodeById(e)
                  return (t.expanded = !t.expanded), t.expanded || this.collapseChildren(t), this.tree
                },
              },
              {
                key: 'collapseChildren',
                value: function(e) {
                  var t = this
                  ;(e.expanded = !1),
                    l(e._children) ||
                      e._children.forEach(function(e) {
                        return t.collapseChildren(t.getNodeById(e))
                      })
                },
              },
              {
                key: 'tags',
                get: function() {
                  var e = this
                  return this.radioSelect || this.simpleSelect
                    ? this.currentChecked
                      ? [this.getNodeById(this.currentChecked)]
                      : []
                    : Gt.getNodesMatching(this.tree, function(t, r, n) {
                        return (
                          t.checked &&
                            !e.hierarchical &&
                            Gt.markSubTreeVisited(t, n, function(t) {
                              return e.getNodeById(t)
                            }),
                          t.checked
                        )
                      })
                },
              },
              {
                key: 'getTreeAndTags',
                value: function() {
                  return { tree: this.tree, tags: this.tags }
                },
              },
              {
                key: 'handleNavigationKey',
                value: function(e, t, r, n, o, i, a) {
                  var c = this,
                    l = e && this.getNodeById(e),
                    u = hr.getAction(l, r)
                  return lr.has(u)
                    ? hr.handleFocusNavigationkey(
                        t,
                        u,
                        l,
                        function(e) {
                          return c.getNodeById(e)
                        },
                        o
                      )
                    : l && t.has(l._id)
                    ? hr.handleToggleNavigationkey(u, l, n, i, a)
                    : e
                },
              },
              {
                key: '_getAddOnMatch',
                value: function(e, t) {
                  var r = function(e, t) {
                    return e.label.toLowerCase().indexOf(t) >= 0
                  }
                  return (
                    'function' == typeof this.searchPredicate && (r = this.searchPredicate),
                    function(n) {
                      r(n, t) && e.push(n._id)
                    }
                  )
                },
              },
            ]),
            r && yr(t.prototype, r),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            e
          )
        })()
        const gr = br
        function vr(e) {
          return (
            (vr =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            vr(e)
          )
        }
        function mr() {
          return (
            (mr =
              Object.assign ||
              function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t]
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
              }),
            mr.apply(this, arguments)
          )
        }
        function Or(e, t) {
          var r = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e)
            t &&
              (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              r.push.apply(r, n)
          }
          return r
        }
        function wr(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? Or(Object(r), !0).forEach(function(t) {
                  _r(e, t, r[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Or(Object(r)).forEach(function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
          }
          return e
        }
        function Pr(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        function Sr(e, t) {
          return (
            (Sr =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              }),
            Sr(e, t)
          )
        }
        function jr(e, t) {
          if (t && ('object' === vr(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return kr(e)
        }
        function kr(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          return e
        }
        function Tr(e) {
          return (
            (Tr = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            Tr(e)
          )
        }
        function _r(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = r),
            e
          )
        }
        var Er = (function(e) {
          !(function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && Sr(e, t)
          })(c, e)
          var t,
            r,
            n,
            o,
            a = ((n = c),
            (o = (function() {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1
              if (Reflect.construct.sham) return !1
              if ('function' == typeof Proxy) return !0
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
              } catch (e) {
                return !1
              }
            })()),
            function() {
              var e,
                t = Tr(n)
              if (o) {
                var r = Tr(this).constructor
                e = Reflect.construct(t, arguments, r)
              } else e = t.apply(this, arguments)
              return jr(this, e)
            })
          function c(e) {
            var t
            return (
              (function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, c),
              _r(kr((t = a.call(this, e))), 'initNewProps', function(e) {
                var r = e.data,
                  n = e.mode,
                  o = e.showDropdown,
                  i = e.showPartiallySelected,
                  a = e.searchPredicate
                ;(t.treeManager = new gr({
                  data: r,
                  mode: n,
                  showPartiallySelected: i,
                  rootPrefixId: t.clientId,
                  searchPredicate: a,
                })),
                  t.setState(function(e) {
                    var r = e.currentFocus && t.treeManager.getNodeById(e.currentFocus)
                    return (
                      r && (r._focused = !0),
                      wr(
                        { showDropdown: /initial|always/.test(o) || !0 === e.showDropdown },
                        t.treeManager.getTreeAndTags()
                      )
                    )
                  })
              }),
              _r(kr(t), 'resetSearchState', function() {
                return (
                  t.searchInput && (t.searchInput.value = ''),
                  { tree: t.treeManager.restoreNodes(), searchModeOn: !1, allNodesHidden: !1 }
                )
              }),
              _r(kr(t), 'handleClick', function(e, r) {
                t.setState(function(e) {
                  var r = 'always' === t.props.showDropdown || t.keepDropdownActive || !e.showDropdown
                  return (
                    r !== e.showDropdown &&
                      (r
                        ? document.addEventListener('click', t.handleOutsideClick, !1)
                        : document.removeEventListener('click', t.handleOutsideClick, !1)),
                    r ? t.props.onFocus() : t.props.onBlur(),
                    r ? { showDropdown: r } : wr({ showDropdown: r }, t.resetSearchState())
                  )
                }, r)
              }),
              _r(kr(t), 'handleOutsideClick', function(e) {
                'always' !== t.props.showDropdown &&
                  (function(e, t) {
                    return (
                      e instanceof Event &&
                      !(function(e) {
                        if (e.path) return e.path
                        for (var t = e.target, r = [t]; t.parentElement; ) (t = t.parentElement), r.unshift(t)
                        return r
                      })(e).some(function(e) {
                        return e === t
                      })
                    )
                  })(e, t.node) &&
                  t.handleClick()
              }),
              _r(kr(t), 'onInputChange', function(e) {
                var r = e.length > 0
                if (r) {
                  var n = t.treeManager.filterTree(e, t.props.keepTreeOnSearch, t.props.keepChildrenOnSearch),
                    o = n.allNodesHidden,
                    i = n.tree
                  t.setState({ tree: i, searchModeOn: r, allNodesHidden: o })
                } else t.setState(t.resetSearchState())
              }),
              _r(kr(t), 'onTagRemove', function(e, r) {
                var n = t.state.tags
                t.onCheckboxChange(e, !1, function(o) {
                  r && hr.getNextFocusAfterTagDelete(e, n, o, t.searchInput).focus()
                })
              }),
              _r(kr(t), 'onNodeToggle', function(e) {
                t.treeManager.toggleNodeExpandState(e)
                var r = t.state.searchModeOn ? t.treeManager.matchTree : t.treeManager.tree
                t.setState({ tree: r }),
                  'function' == typeof t.props.onNodeToggle && t.props.onNodeToggle(t.treeManager.getNodeById(e))
              }),
              _r(kr(t), 'onCheckboxChange', function(e, r, n) {
                var o = t.props,
                  i = o.mode,
                  a = o.keepOpenOnSelect,
                  c = o.clearSearchOnChange,
                  l = t.state,
                  u = l.currentFocus,
                  s = l.searchModeOn
                t.treeManager.setNodeCheckedState(e, r)
                var f = t.treeManager.tags,
                  p = ['simpleSelect', 'radioSelect'].indexOf(i) > -1,
                  d = !(p && !a) && t.state.showDropdown,
                  h = u && t.treeManager.getNodeById(u),
                  y = t.treeManager.getNodeById(e)
                f.length || (t.treeManager.restoreDefaultValues(), (f = t.treeManager.tags))
                var b = {
                  tree: s ? t.treeManager.matchTree : t.treeManager.tree,
                  tags: f,
                  showDropdown: d,
                  currentFocus: e,
                }
                ;((p && !d) || c) && Object.assign(b, t.resetSearchState()),
                  p && !d && document.removeEventListener('click', t.handleOutsideClick, !1),
                  hr.adjustFocusedProps(h, y),
                  t.setState(b, function() {
                    n && n(f)
                  }),
                  t.props.onChange(y, f)
              }),
              _r(kr(t), 'onAction', function(e, r) {
                t.props.onAction(t.treeManager.getNodeById(e), r)
              }),
              _r(kr(t), 'onInputFocus', function() {
                t.keepDropdownActive = !0
              }),
              _r(kr(t), 'onInputBlur', function() {
                t.keepDropdownActive = !1
              }),
              _r(kr(t), 'onTrigger', function(e) {
                t.handleClick(e, function() {
                  t.state.showDropdown && t.searchInput.focus()
                })
              }),
              _r(kr(t), 'onKeyboardKeyDown', function(e) {
                var r = t.props,
                  n = r.readOnly,
                  o = r.mode,
                  i = r.disablePoppingOnBackspace,
                  a = t.state,
                  c = a.showDropdown,
                  l = a.tags,
                  u = a.searchModeOn,
                  s = a.currentFocus,
                  f = t.treeManager,
                  p = u ? f.matchTree : f.tree
                if (c || (!hr.isValidKey(e.key, !1) && !/^\w$/i.test(e.key)))
                  if (c && hr.isValidKey(e.key, !0)) {
                    var d = f.handleNavigationKey(s, p, e.key, n, !u, t.onCheckboxChange, t.onNodeToggle)
                    d !== s &&
                      t.setState({ currentFocus: d }, function() {
                        var e = document && document.getElementById(''.concat(d, '_li'))
                        e && e.scrollIntoView()
                      })
                  } else {
                    if (c && ['Escape', 'Tab'].indexOf(e.key) > -1)
                      return void ('simpleSelect' === o && p.has(s)
                        ? t.onCheckboxChange(s, !0)
                        : ((t.keepDropdownActive = !1), t.handleClick()))
                    if (i || 'Backspace' !== e.key || !l.length || 0 !== t.searchInput.value.length) return
                    var h = l.pop()
                    t.onCheckboxChange(h._id, !1)
                  }
                else if (
                  (e.persist(),
                  t.handleClick(null, function() {
                    return t.onKeyboardKeyDown(e)
                  }),
                  /\w/i.test(e.key))
                )
                  return
                e.preventDefault()
              }),
              _r(kr(t), 'getAriaAttributes', function() {
                var e = t.props,
                  r = e.mode,
                  n = e.texts
                return 'radioSelect' !== r ? {} : wr({ role: 'radiogroup' }, d(n.label))
              }),
              (t.state = { searchModeOn: !1, currentFocus: void 0 }),
              (t.clientId = e.id || f.get(kr(t))),
              t
            )
          }
          return (
            (t = c),
            (r = [
              {
                key: 'UNSAFE_componentWillMount',
                value: function() {
                  this.initNewProps(this.props)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  document.removeEventListener('click', this.handleOutsideClick, !1)
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function(e) {
                  this.initNewProps(e)
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    r = t.disabled,
                    n = t.readOnly,
                    o = t.mode,
                    a = t.texts,
                    c = t.inlineSearchInput,
                    l = t.tabIndex,
                    u = this.state,
                    s = u.showDropdown,
                    f = u.currentFocus,
                    p = u.tags,
                    d = {
                      disabled: r,
                      readOnly: n,
                      activeDescendant: f ? ''.concat(f, '_li') : void 0,
                      texts: a,
                      mode: o,
                      clientId: this.clientId,
                    },
                    h = i().createElement(
                      S,
                      mr(
                        {
                          inputRef: function(t) {
                            e.searchInput = t
                          },
                          onInputChange: this.onInputChange,
                          onFocus: this.onInputFocus,
                          onBlur: this.onInputBlur,
                          onKeyDown: this.onKeyboardKeyDown,
                        },
                        d,
                        { inlineSearchInput: c }
                      )
                    )
                  return i().createElement(
                    'div',
                    {
                      id: this.clientId,
                      className: [this.props.className && this.props.className, 'react-dropdown-tree-select']
                        .filter(Boolean)
                        .join(' '),
                      ref: function(t) {
                        e.node = t
                      },
                    },
                    i().createElement(
                      'div',
                      {
                        className: [
                          'dropdown',
                          'simpleSelect' === o && 'simple-select',
                          'radioSelect' === o && 'radio-select',
                        ]
                          .filter(Boolean)
                          .join(' '),
                      },
                      i().createElement(
                        ie,
                        mr({ onTrigger: this.onTrigger, showDropdown: s }, d, { tags: p, tabIndex: l }),
                        i().createElement(W, mr({ tags: p, onTagRemove: this.onTagRemove }, d), !c && h)
                      ),
                      s &&
                        i().createElement(
                          'div',
                          mr({ className: 'dropdown-content' }, this.getAriaAttributes()),
                          c && h,
                          this.state.allNodesHidden
                            ? i().createElement('span', { className: 'no-matches' }, a.noMatches || 'No matches found')
                            : i().createElement(
                                Yt,
                                mr(
                                  {
                                    data: this.state.tree,
                                    keepTreeOnSearch: this.props.keepTreeOnSearch,
                                    keepChildrenOnSearch: this.props.keepChildrenOnSearch,
                                    searchModeOn: this.state.searchModeOn,
                                    onAction: this.onAction,
                                    onCheckboxChange: this.onCheckboxChange,
                                    onNodeToggle: this.onNodeToggle,
                                    mode: o,
                                    showPartiallySelected: this.props.showPartiallySelected,
                                  },
                                  d
                                )
                              )
                        )
                    )
                  )
                },
              },
            ]) && Pr(t.prototype, r),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            c
          )
        })(r.Component)
        _r(Er, 'propTypes', {
          data: t().oneOfType([t().object, t().array]).isRequired,
          clearSearchOnChange: t().bool,
          keepTreeOnSearch: t().bool,
          keepChildrenOnSearch: t().bool,
          keepOpenOnSelect: t().bool,
          texts: t().shape({
            placeholder: t().string,
            inlineSearchPlaceholder: t().string,
            noMatches: t().string,
            label: t().string,
            labelRemove: t().string,
          }),
          showDropdown: t().oneOf(['default', 'initial', 'always']),
          className: t().string,
          onChange: t().func,
          onAction: t().func,
          onNodeToggle: t().func,
          onFocus: t().func,
          onBlur: t().func,
          mode: t().oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
          showPartiallySelected: t().bool,
          disabled: t().bool,
          readOnly: t().bool,
          id: t().string,
          searchPredicate: t().func,
          inlineSearchInput: t().bool,
          tabIndex: t().number,
          disablePoppingOnBackspace: t().bool,
        }),
          _r(Er, 'defaultProps', {
            onAction: function() {},
            onFocus: function() {},
            onBlur: function() {},
            onChange: function() {},
            texts: {},
            showDropdown: 'default',
            inlineSearchInput: !1,
            tabIndex: 0,
            disablePoppingOnBackspace: !1,
          })
        const Cr = Er
      })(),
      o
    )
  })()
)
//# sourceMappingURL=react-dropdown-tree-select.js.map
