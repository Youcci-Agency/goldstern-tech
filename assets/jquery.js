/*! jQuery v4.0.0-beta+slim | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = t(e, !0))
    : t(e);
})('undefined' != typeof window ? window : this, function (e, t) {
  'use strict';
  if (!e.document) throw Error('jQuery requires a window with a document');
  var n,
    r,
    i = [],
    o = Object.getPrototypeOf,
    a = i.slice,
    s = i.flat
      ? function (e) {
          return i.flat.call(e);
        }
      : function (e) {
          return i.concat.apply([], e);
        },
    u = i.push,
    l = i.indexOf,
    c = {},
    f = c.toString,
    p = c.hasOwnProperty,
    d = p.toString,
    h = d.call(Object),
    g = {};
  function v(e) {
    return null == e
      ? e + ''
      : 'object' == typeof e
      ? c[f.call(e)] || 'object'
      : typeof e;
  }
  function y(e) {
    return null != e && e === e.window;
  }
  function m(e) {
    var t = !!e && e.length,
      n = v(e);
    return (
      !('function' == typeof e || y(e)) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && t > 0 && t - 1 in e))
    );
  }
  var x = e.document,
    b = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function w(e, t, n) {
    var r,
      i = (n = n || x).createElement('script');
    for (r in ((i.text = e), b)) t && t[r] && (i[r] = t[r]);
    n.head.appendChild(i).parentNode && i.parentNode.removeChild(i);
  }
  var T = '4.0.0-beta+slim',
    C = /HTML$/i,
    E = function (e, t) {
      return new E.fn.init(e, t);
    };
  function S(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  (E.fn = E.prototype =
    {
      jquery: T,
      constructor: E,
      length: 0,
      toArray: function () {
        return a.call(this);
      },
      get: function (e) {
        return null == e
          ? a.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = E.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return E.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          E.map(this, function (t, n) {
            return e.call(t, n, t);
          }),
        );
      },
      slice: function () {
        return this.pushStack(a.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          E.grep(this, function (e, t) {
            return (t + 1) % 2;
          }),
        );
      },
      odd: function () {
        return this.pushStack(
          E.grep(this, function (e, t) {
            return t % 2;
          }),
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
    }),
    (E.extend = E.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          'boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            'object' != typeof a && 'function' != typeof a && (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                '__proto__' !== t &&
                  a !== r &&
                  (l && r && (E.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || E.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = E.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    E.extend({
      expando: 'jQuery' + (T + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !!e &&
          '[object Object]' === f.call(e) &&
          (!(t = o(e)) ||
            ('function' ==
              typeof (n = p.call(t, 'constructor') && t.constructor) &&
              d.call(n) === h))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        w(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (m(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      text: function (e) {
        var t,
          n = '',
          r = 0,
          i = e.nodeType;
        if (!i) while ((t = e[r++])) n += E.text(t);
        return 1 === i || 11 === i
          ? e.textContent
          : 9 === i
          ? e.documentElement.textContent
          : 3 === i || 4 === i
          ? e.nodeValue
          : n;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (m(Object(e))
              ? E.merge(n, 'string' == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : l.call(t, e, n);
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !C.test(t || (n && n.nodeName) || 'HTML');
      },
      contains: function (e, t) {
        var n = t && t.parentNode;
        return (
          e === n ||
          !!(
            n &&
            1 === n.nodeType &&
            (e.contains
              ? e.contains(n)
              : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
          )
        );
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (m(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return s(a);
      },
      guid: 1,
      support: g,
    }),
    'function' == typeof Symbol && (E.fn[Symbol.iterator] = i[Symbol.iterator]),
    E.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' ',
      ),
      function (e, t) {
        c['[object ' + t + ']'] = t.toLowerCase();
      },
    );
  var A = i.pop,
    D = '[\\x20\\t\\r\\n\\f]',
    k = x.documentMode;
  try {
    x.querySelector(':has(*,:jqfake)'), (g.cssHas = !1);
  } catch (e) {
    g.cssHas = !0;
  }
  var N = [];
  k &&
    N.push(
      ':enabled',
      ':disabled',
      '\\[' + D + '*name' + D + '*=' + D + '*(?:\'\'|"")',
    ),
    g.cssHas || N.push(':has'),
    (N = N.length && new RegExp(N.join('|')));
  var j = RegExp('^' + D + '+|((?:^|[^\\\\])(?:\\\\.)*)' + D + '+$', 'g'),
    O =
      '(?:\\\\[\\da-fA-F]{1,6}' +
      D +
      '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+',
    L = RegExp('^' + D + '*([>+~]|' + D + ')' + D + '*'),
    P = RegExp(D + '|>'),
    R = /[+~]/,
    H = x.documentElement,
    I = H.matches || H.msMatchesSelector;
  function $() {
    var e = [];
    function t(n, r) {
      return (
        e.push(n + ' ') > E.expr.cacheLength && delete t[e.shift()],
        (t[n + ' '] = r)
      );
    }
    return t;
  }
  function B(e) {
    return e && void 0 !== e.getElementsByTagName && e;
  }
  var M =
      '\\[' +
      D +
      '*(' +
      O +
      ')(?:' +
      D +
      '*([*^$|!~]?=)' +
      D +
      '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
      O +
      '))|)' +
      D +
      '*\\]',
    q =
      ':(' +
      O +
      ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
      M +
      ')*)|.*)\\)|)',
    W = {
      ID: RegExp('^#(' + O + ')'),
      CLASS: RegExp('^\\.(' + O + ')'),
      TAG: RegExp('^(' + O + '|[*])'),
      ATTR: RegExp('^' + M),
      PSEUDO: RegExp('^' + q),
      CHILD: RegExp(
        '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
          D +
          '*(even|odd|(([+-]|)(\\d*)n|)' +
          D +
          '*(?:([+-]|)' +
          D +
          '*(\\d+)|))' +
          D +
          '*\\)|)',
        'i',
      ),
    },
    F = new RegExp(q),
    U = RegExp('\\\\[\\da-fA-F]{1,6}' + D + '?|\\\\([^\\r\\n\\f])', 'g'),
    z = function (e, t) {
      var n = '0x' + e.slice(1) - 65536;
      return (
        t ||
        (n < 0
          ? String.fromCharCode(n + 65536)
          : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
      );
    };
  function X(e) {
    return e.replace(U, z);
  }
  function _(e) {
    E.error('Syntax error, unrecognized expression: ' + e);
  }
  var V = RegExp('^' + D + '*,' + D + '*'),
    Y = $();
  function Q(e, t) {
    var n,
      r,
      i,
      o,
      a,
      s,
      u,
      l = Y[e + ' '];
    if (l) return t ? 0 : l.slice(0);
    (a = e), (s = []), (u = E.expr.preFilter);
    while (a) {
      for (o in ((!n || (r = V.exec(a))) &&
        (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
      (n = !1),
      (r = L.exec(a)) &&
        ((n = r.shift()),
        i.push({ value: n, type: r[0].replace(j, ' ') }),
        (a = a.slice(n.length))),
      W))
        (r = E.expr.match[o].exec(a)) &&
          (!u[o] || (r = u[o](r))) &&
          ((n = r.shift()),
          i.push({ value: n, type: o, matches: r }),
          (a = a.slice(n.length)));
      if (!n) break;
    }
    return t ? a.length : a ? _(e) : Y(e, s).slice(0);
  }
  function G(e) {
    for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
    return r;
  }
  function K(e, t, n, r, i, o, a) {
    var s = 0,
      u = e.length,
      l = null == n;
    if ('object' === v(n)) for (s in ((i = !0), n)) K(e, t, s, n[s], !0, o, a);
    else if (
      void 0 !== r &&
      ((i = !0),
      'function' != typeof r && (a = !0),
      l &&
        (a
          ? (t.call(e, r), (t = null))
          : ((l = t),
            (t = function (e, t, n) {
              return l.call(E(e), n);
            }))),
      t)
    )
      for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  }
  var J = /[^\x20\t\r\n\f]+/g;
  E.fn.extend({
    attr: function (e, t) {
      return K(this, E.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        E.removeAttr(this, e);
      });
    },
  }),
    E.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) {
          if (void 0 === e.getAttribute) return E.prop(e, t, n);
          if (
            ((1 === o && E.isXMLDoc(e)) || (i = E.attrHooks[t.toLowerCase()]),
            void 0 !== n)
          ) {
            if (null === n) {
              E.removeAttr(e, t);
              return;
            }
            return i && 'set' in i && void 0 !== (r = i.set(e, n, t))
              ? r
              : (e.setAttribute(t, n), n);
          }
          return i && 'get' in i && null !== (r = i.get(e, t))
            ? r
            : null == (r = e.getAttribute(t))
            ? void 0
            : r;
        }
      },
      attrHooks: {},
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(J);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    k &&
      (E.attrHooks.type = {
        set: function (e, t) {
          if ('radio' === t && S(e, 'input')) {
            var n = e.value;
            return e.setAttribute('type', t), n && (e.value = n), t;
          }
        },
      }),
    E.each(
      'checked selected async autofocus autoplay controls defer disabled hidden ismap loop multiple open readonly required scoped'.split(
        ' ',
      ),
      function (e, t) {
        E.attrHooks[t] = {
          get: function (e) {
            return null != e.getAttribute(t) ? t.toLowerCase() : null;
          },
          set: function (e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        };
      },
    );
  var Z = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function ee(e, t) {
    return t
      ? '\x00' === e
        ? '\uFFFD'
        : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' '
      : '\\' + e;
  }
  E.escapeSelector = function (e) {
    return (e + '').replace(Z, ee);
  };
  var et = i.sort,
    en = i.splice;
  function er(e, t) {
    if (e === t) return (ei = !0), 0;
    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
    return (
      n ||
      (1 &
      (n =
        (e.ownerDocument || e) == (t.ownerDocument || t)
          ? e.compareDocumentPosition(t)
          : 1)
        ? e == x || (e.ownerDocument == x && E.contains(x, e))
          ? -1
          : t == x || (t.ownerDocument == x && E.contains(x, t))
          ? 1
          : 0
        : 4 & n
        ? -1
        : 1)
    );
  }
  (E.uniqueSort = function (e) {
    var t,
      n = [],
      r = 0,
      i = 0;
    if (((ei = !1), et.call(e, er), ei)) {
      while ((t = e[i++])) t === e[i] && (r = n.push(i));
      while (r--) en.call(e, n[r], 1);
    }
    return e;
  }),
    (E.fn.uniqueSort = function () {
      return this.pushStack(E.uniqueSort(a.apply(this)));
    });
  var ei,
    eo,
    ea,
    es,
    eu,
    el,
    ec = 0,
    ef = 0,
    ep = $(),
    ed = $(),
    eh = $(),
    eg = RegExp(D + '+', 'g'),
    ev = RegExp('^' + O + '$'),
    ey = E.extend(
      {
        needsContext: RegExp(
          '^' +
            D +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            D +
            '*((?:-\\d)?\\d*)' +
            D +
            '*\\)|)(?=[^-]|$)',
          'i',
        ),
      },
      W,
    ),
    em = /^(?:input|select|textarea|button)$/i,
    ex = /^h\d$/i,
    eb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    ew = function () {
      eD();
    },
    eT = eN(
      function (e) {
        return !0 === e.disabled && S(e, 'fieldset');
      },
      { dir: 'parentNode', next: 'legend' },
    );
  function eC(e, t, n, r) {
    var i,
      o,
      a,
      s,
      l,
      c,
      f,
      p = t && t.ownerDocument,
      d = t ? t.nodeType : 9;
    if (
      ((n = n || []),
      'string' != typeof e || !e || (1 !== d && 9 !== d && 11 !== d))
    )
      return n;
    if (!r && (eD(t), (t = t || es), el)) {
      if (11 !== d && (l = eb.exec(e))) {
        if ((i = l[1])) {
          if (9 === d) return (a = t.getElementById(i)) && u.call(n, a), n;
          if (p && (a = p.getElementById(i)) && E.contains(t, a))
            return u.call(n, a), n;
        } else if (l[2]) return u.apply(n, t.getElementsByTagName(e)), n;
        else if ((i = l[3]) && t.getElementsByClassName)
          return u.apply(n, t.getElementsByClassName(i)), n;
      }
      if (!eh[e + ' '] && (!N || !N.test(e))) {
        if (((f = e), (p = t), 1 === d && (P.test(e) || L.test(e)))) {
          ((p = (R.test(e) && B(t.parentNode)) || t) != t || k) &&
            ((s = t.getAttribute('id'))
              ? (s = E.escapeSelector(s))
              : t.setAttribute('id', (s = E.expando))),
            (o = (c = Q(e)).length);
          while (o--) c[o] = (s ? '#' + s : ':scope') + ' ' + G(c[o]);
          f = c.join(',');
        }
        try {
          return u.apply(n, p.querySelectorAll(f)), n;
        } catch (t) {
          eh(e, !0);
        } finally {
          s === E.expando && t.removeAttribute('id');
        }
      }
    }
    return eP(e.replace(j, '$1'), t, n, r);
  }
  function eE(e) {
    return (e[E.expando] = !0), e;
  }
  function eS(e) {
    return function (t) {
      if ('form' in t)
        return t.parentNode && !1 === t.disabled
          ? 'label' in t
            ? 'label' in t.parentNode
              ? t.parentNode.disabled === e
              : t.disabled === e
            : t.isDisabled === e || (!e !== t.isDisabled && eT(t) === e)
          : t.disabled === e;
      return 'label' in t && t.disabled === e;
    };
  }
  function eA(e) {
    return eE(function (t) {
      return (
        (t = +t),
        eE(function (n, r) {
          var i,
            o = e([], n.length, t),
            a = o.length;
          while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
        })
      );
    });
  }
  function eD(e) {
    var t,
      n = e ? e.ownerDocument || e : x;
    n != es &&
      9 === n.nodeType &&
      ((eu = (es = n).documentElement),
      (el = !E.isXMLDoc(es)),
      k &&
        x != es &&
        (t = es.defaultView) &&
        t.top !== t &&
        t.addEventListener('unload', ew));
  }
  for (eo in ((eC.matches = function (e, t) {
    return eC(e, null, null, t);
  }),
  (eC.matchesSelector = function (e, t) {
    if ((eD(e), el && !eh[t + ' '] && (!N || !N.test(t))))
      try {
        return I.call(e, t);
      } catch (e) {
        eh(t, !0);
      }
    return eC(t, es, null, [e]).length > 0;
  }),
  (E.expr = {
    cacheLength: 50,
    createPseudo: eE,
    match: ey,
    find: {
      ID: function (e, t) {
        if (void 0 !== t.getElementById && el) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      },
      TAG: function (e, t) {
        return void 0 !== t.getElementsByTagName
          ? t.getElementsByTagName(e)
          : t.querySelectorAll(e);
      },
      CLASS: function (e, t) {
        if (void 0 !== t.getElementsByClassName && el)
          return t.getElementsByClassName(e);
      },
    },
    relative: {
      '>': { dir: 'parentNode', first: !0 },
      ' ': { dir: 'parentNode' },
      '+': { dir: 'previousSibling', first: !0 },
      '~': { dir: 'previousSibling' },
    },
    preFilter: {
      ATTR: function (e) {
        return (
          (e[1] = X(e[1])),
          (e[3] = X(e[3] || e[4] || e[5] || '')),
          '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
          e.slice(0, 4)
        );
      },
      CHILD: function (e) {
        return (
          (e[1] = e[1].toLowerCase()),
          'nth' === e[1].slice(0, 3)
            ? (e[3] || _(e[0]),
              (e[4] = +(e[4]
                ? e[5] + (e[6] || 1)
                : 2 * ('even' === e[3] || 'odd' === e[3]))),
              (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
            : e[3] && _(e[0]),
          e
        );
      },
      PSEUDO: function (e) {
        var t,
          n = !e[6] && e[2];
        return W.CHILD.test(e[0])
          ? null
          : (e[3]
              ? (e[2] = e[4] || e[5] || '')
              : n &&
                F.test(n) &&
                (t = Q(n, !0)) &&
                (t = n.indexOf(')', n.length - t) - n.length) &&
                ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
            e.slice(0, 3));
      },
    },
    filter: {
      ID: function (e) {
        var t = X(e);
        return function (e) {
          return e.getAttribute('id') === t;
        };
      },
      TAG: function (e) {
        var t = X(e).toLowerCase();
        return '*' === e
          ? function () {
              return !0;
            }
          : function (e) {
              return S(e, t);
            };
      },
      CLASS: function (e) {
        var t = ep[e + ' '];
        return (
          t ||
          ((t = RegExp('(^|' + D + ')' + e + '(' + D + '|$)')),
          ep(e, function (e) {
            return t.test(
              ('string' == typeof e.className && e.className) ||
                (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                '',
            );
          }))
        );
      },
      ATTR: function (e, t, n) {
        return function (r) {
          var i = E.attr(r, e);
          return null == i
            ? '!=' === t
            : !t ||
                (((i += ''), '=' === t)
                  ? i === n
                  : '!=' === t
                  ? i !== n
                  : '^=' === t
                  ? n && 0 === i.indexOf(n)
                  : '*=' === t
                  ? n && i.indexOf(n) > -1
                  : '$=' === t
                  ? n && i.slice(-n.length) === n
                  : '~=' === t
                  ? (' ' + i.replace(eg, ' ') + ' ').indexOf(n) > -1
                  : '|=' === t &&
                    (i === n || i.slice(0, n.length + 1) === n + '-'));
        };
      },
      CHILD: function (e, t, n, r, i) {
        var o = 'nth' !== e.slice(0, 3),
          a = 'last' !== e.slice(-4),
          s = 'of-type' === t;
        return 1 === r && 0 === i
          ? function (e) {
              return !!e.parentNode;
            }
          : function (t, n, u) {
              var l,
                c,
                f,
                p,
                d,
                h = o !== a ? 'nextSibling' : 'previousSibling',
                g = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                y = !u && !s,
                m = !1;
              if (g) {
                if (o) {
                  while (h) {
                    f = t;
                    while ((f = f[h]))
                      if (s ? S(f, v) : 1 === f.nodeType) return !1;
                    d = h = 'only' === e && !d && 'nextSibling';
                  }
                  return !0;
                }
                if (((d = [a ? g.firstChild : g.lastChild]), a && y)) {
                  (m =
                    (p =
                      (l =
                        (c = g[E.expando] || (g[E.expando] = {}))[e] ||
                        [])[0] === ec && l[1]) && l[2]),
                    (f = p && g.childNodes[p]);
                  while ((f = (++p && f && f[h]) || (m = p = 0) || d.pop()))
                    if (1 === f.nodeType && ++m && f === t) {
                      c[e] = [ec, p, m];
                      break;
                    }
                } else if (
                  (y &&
                    (m = p =
                      (l =
                        (c = t[E.expando] || (t[E.expando] = {}))[e] ||
                        [])[0] === ec && l[1]),
                  !1 === m)
                ) {
                  while ((f = (++p && f && f[h]) || (m = p = 0) || d.pop()))
                    if (
                      (s ? S(f, v) : 1 === f.nodeType) &&
                      ++m &&
                      (y &&
                        ((c = f[E.expando] || (f[E.expando] = {}))[e] = [
                          ec,
                          m,
                        ]),
                      f === t)
                    )
                      break;
                }
                return (m -= i) === r || (m % r == 0 && m / r >= 0);
              }
            };
      },
      PSEUDO: function (e, t) {
        var n =
          E.expr.pseudos[e] ||
          E.expr.setFilters[e.toLowerCase()] ||
          _('unsupported pseudo: ' + e);
        return n[E.expando] ? n(t) : n;
      },
    },
    pseudos: {
      not: eE(function (e) {
        var t = [],
          n = [],
          r = eL(e.replace(j, '$1'));
        return r[E.expando]
          ? eE(function (e, t, n, i) {
              var o,
                a = r(e, null, i, []),
                s = e.length;
              while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
            })
          : function (e, i, o) {
              return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
            };
      }),
      has: eE(function (e) {
        return function (t) {
          return eC(e, t).length > 0;
        };
      }),
      contains: eE(function (e) {
        return (
          (e = X(e)),
          function (t) {
            return (t.textContent || E.text(t)).indexOf(e) > -1;
          }
        );
      }),
      lang: eE(function (e) {
        return (
          ev.test(e || '') || _('unsupported lang: ' + e),
          (e = X(e).toLowerCase()),
          function (t) {
            var n;
            do
              if (
                (n = el
                  ? t.lang
                  : t.getAttribute('xml:lang') || t.getAttribute('lang'))
              )
                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-');
            while ((t = t.parentNode) && 1 === t.nodeType);
            return !1;
          }
        );
      }),
      target: function (t) {
        var n = e.location && e.location.hash;
        return n && n.slice(1) === t.id;
      },
      root: function (e) {
        return e === eu;
      },
      focus: function (e) {
        return (
          e === es.activeElement &&
          es.hasFocus() &&
          !!(e.type || e.href || ~e.tabIndex)
        );
      },
      enabled: eS(!1),
      disabled: eS(!0),
      checked: function (e) {
        return (
          (S(e, 'input') && !!e.checked) || (S(e, 'option') && !!e.selected)
        );
      },
      selected: function (e) {
        return (
          k && e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
        );
      },
      empty: function (e) {
        for (e = e.firstChild; e; e = e.nextSibling)
          if (e.nodeType < 6) return !1;
        return !0;
      },
      parent: function (e) {
        return !E.expr.pseudos.empty(e);
      },
      header: function (e) {
        return ex.test(e.nodeName);
      },
      input: function (e) {
        return em.test(e.nodeName);
      },
      button: function (e) {
        return (S(e, 'input') && 'button' === e.type) || S(e, 'button');
      },
      text: function (e) {
        return S(e, 'input') && 'text' === e.type;
      },
      first: eA(function () {
        return [0];
      }),
      last: eA(function (e, t) {
        return [t - 1];
      }),
      eq: eA(function (e, t, n) {
        return [n < 0 ? n + t : n];
      }),
      even: eA(function (e, t) {
        for (var n = 0; n < t; n += 2) e.push(n);
        return e;
      }),
      odd: eA(function (e, t) {
        for (var n = 1; n < t; n += 2) e.push(n);
        return e;
      }),
      lt: eA(function (e, t, n) {
        var r;
        for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
        return e;
      }),
      gt: eA(function (e, t, n) {
        for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
        return e;
      }),
    },
  }),
  (E.expr.pseudos.nth = E.expr.pseudos.eq),
  { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
    E.expr.pseudos[eo] = (function (e) {
      return function (t) {
        return S(t, 'input') && t.type === e;
      };
    })(eo);
  for (eo in { submit: !0, reset: !0 })
    E.expr.pseudos[eo] = (function (e) {
      return function (t) {
        return (S(t, 'input') || S(t, 'button')) && t.type === e;
      };
    })(eo);
  function ek() {}
  function eN(e, t, n) {
    var r = t.dir,
      i = t.next,
      o = i || r,
      a = n && 'parentNode' === o,
      s = ef++;
    return t.first
      ? function (t, n, i) {
          while ((t = t[r])) if (1 === t.nodeType || a) return e(t, n, i);
          return !1;
        }
      : function (t, n, u) {
          var l,
            c,
            f = [ec, s];
          if (u) {
            while ((t = t[r]))
              if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
          } else
            while ((t = t[r]))
              if (1 === t.nodeType || a) {
                if (((c = t[E.expando] || (t[E.expando] = {})), i && S(t, i)))
                  t = t[r] || t;
                else if ((l = c[o]) && l[0] === ec && l[1] === s)
                  return (f[2] = l[2]);
                else if (((c[o] = f), (f[2] = e(t, n, u)))) return !0;
              }
          return !1;
        };
  }
  function ej(e) {
    return e.length > 1
      ? function (t, n, r) {
          var i = e.length;
          while (i--) if (!e[i](t, n, r)) return !1;
          return !0;
        }
      : e[0];
  }
  function eO(e, t, n, r, i) {
    for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
      (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
    return a;
  }
  function eL(e, t) {
    var n,
      r,
      i,
      o,
      a = [],
      s = [],
      c = ed[e + ' '];
    if (!c) {
      t || (t = Q(e)), (o = t.length);
      while (o--)
        (c = (function e(t) {
          for (
            var n,
              r,
              i,
              o = t.length,
              a = E.expr.relative[t[0].type],
              s = a || E.expr.relative[' '],
              c = a ? 1 : 0,
              f = eN(
                function (e) {
                  return e === n;
                },
                s,
                !0,
              ),
              p = eN(
                function (e) {
                  return l.call(n, e) > -1;
                },
                s,
                !0,
              ),
              d = [
                function (e, t, r) {
                  var i =
                    (!a && (r || t != ea)) ||
                    ((n = t).nodeType ? f(e, t, r) : p(e, t, r));
                  return (n = null), i;
                },
              ];
            c < o;
            c++
          )
            if ((r = E.expr.relative[t[c].type])) d = [eN(ej(d), r)];
            else {
              if (
                (r = E.expr.filter[t[c].type].apply(null, t[c].matches))[
                  E.expando
                ]
              ) {
                for (i = ++c; i < o && !E.expr.relative[t[i].type]; i++);
                return (function e(t, n, r, i, o, a) {
                  return (
                    i && !i[E.expando] && (i = e(i)),
                    o && !o[E.expando] && (o = e(o, a)),
                    eE(function (e, a, s, c) {
                      var f,
                        p,
                        d,
                        h,
                        g = [],
                        v = [],
                        y = a.length,
                        m =
                          e ||
                          (function (e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++)
                              eC(e, t[r], n);
                            return n;
                          })(n || '*', s.nodeType ? [s] : s, []),
                        x = t && (e || !n) ? eO(m, g, t, s, c) : m;
                      if (
                        (r
                          ? r(x, (h = o || (e ? t : y || i) ? [] : a), s, c)
                          : (h = x),
                        i)
                      ) {
                        (f = eO(h, v)), i(f, [], s, c), (p = f.length);
                        while (p--) (d = f[p]) && (h[v[p]] = !(x[v[p]] = d));
                      }
                      if (e) {
                        if (o || t) {
                          if (o) {
                            (f = []), (p = h.length);
                            while (p--) (d = h[p]) && f.push((x[p] = d));
                            o(null, (h = []), f, c);
                          }
                          p = h.length;
                          while (p--)
                            (d = h[p]) &&
                              (f = o ? l.call(e, d) : g[p]) > -1 &&
                              (e[f] = !(a[f] = d));
                        }
                      } else (h = eO(h === a ? h.splice(y, h.length) : h)), o ? o(null, a, h, c) : u.apply(a, h);
                    })
                  );
                })(
                  c > 1 && ej(d),
                  c > 1 &&
                    G(
                      t
                        .slice(0, c - 1)
                        .concat({ value: ' ' === t[c - 2].type ? '*' : '' }),
                    ).replace(j, '$1'),
                  r,
                  c < i && e(t.slice(c, i)),
                  i < o && e((t = t.slice(i))),
                  i < o && G(t),
                );
              }
              d.push(r);
            }
          return ej(d);
        })(t[o]))[E.expando]
          ? a.push(c)
          : s.push(c);
      (c = ed(
        e,
        ((n = a.length > 0),
        (r = s.length > 0),
        (i = function (e, t, i, o, l) {
          var c,
            f,
            p,
            d = 0,
            h = '0',
            g = e && [],
            v = [],
            y = ea,
            m = e || (r && E.expr.find.TAG('*', l)),
            x = (ec += null == y ? 1 : Math.random() || 0.1);
          for (l && (ea = t == es || t || l); null != (c = m[h]); h++) {
            if (r && c) {
              (f = 0), t || c.ownerDocument == es || (eD(c), (i = !el));
              while ((p = s[f++]))
                if (p(c, t || es, i)) {
                  u.call(o, c);
                  break;
                }
              l && (ec = x);
            }
            n && ((c = !p && c) && d--, e && g.push(c));
          }
          if (((d += h), n && h !== d)) {
            f = 0;
            while ((p = a[f++])) p(g, v, t, i);
            if (e) {
              if (d > 0) while (h--) g[h] || v[h] || (v[h] = A.call(o));
              v = eO(v);
            }
            u.apply(o, v),
              l && !e && v.length > 0 && d + a.length > 1 && E.uniqueSort(o);
          }
          return l && ((ec = x), (ea = y)), g;
        }),
        n ? eE(i) : i),
      )).selector = e;
    }
    return c;
  }
  function eP(e, t, n, r) {
    var i,
      o,
      a,
      s,
      l,
      c = 'function' == typeof e && e,
      f = !r && Q((e = c.selector || e));
    if (((n = n || []), 1 === f.length)) {
      if (
        (o = f[0] = f[0].slice(0)).length > 2 &&
        'ID' === (a = o[0]).type &&
        9 === t.nodeType &&
        el &&
        E.expr.relative[o[1].type]
      ) {
        if (!(t = (E.expr.find.ID(X(a.matches[0]), t) || [])[0])) return n;
        c && (t = t.parentNode), (e = e.slice(o.shift().value.length));
      }
      i = ey.needsContext.test(e) ? 0 : o.length;
      while (i--) {
        if (((a = o[i]), E.expr.relative[(s = a.type)])) break;
        if (
          (l = E.expr.find[s]) &&
          (r = l(X(a.matches[0]), (R.test(o[0].type) && B(t.parentNode)) || t))
        ) {
          if ((o.splice(i, 1), !(e = r.length && G(o))))
            return u.apply(n, r), n;
          break;
        }
      }
    }
    return (
      (c || eL(e, f))(r, t, !el, n, !t || (R.test(e) && B(t.parentNode)) || t),
      n
    );
  }
  function eR(e, t, n) {
    var r = [],
      i = void 0 !== n;
    while ((e = e[t]) && 9 !== e.nodeType)
      if (1 === e.nodeType) {
        if (i && E(e).is(n)) break;
        r.push(e);
      }
    return r;
  }
  function eH(e, t) {
    for (var n = []; e; e = e.nextSibling)
      1 === e.nodeType && e !== t && n.push(e);
    return n;
  }
  (ek.prototype = E.expr.filters = E.expr.pseudos),
    (E.expr.setFilters = new ek()),
    eD(),
    (E.find = eC),
    (eC.compile = eL),
    (eC.select = eP),
    (eC.setDocument = eD),
    (eC.tokenize = Q);
  var eI = E.expr.match.needsContext,
    e$ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function eB(e) {
    return '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3;
  }
  function eM(e, t, n) {
    return 'function' == typeof t
      ? E.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        })
      : t.nodeType
      ? E.grep(e, function (e) {
          return (e === t) !== n;
        })
      : 'string' != typeof t
      ? E.grep(e, function (e) {
          return l.call(t, e) > -1 !== n;
        })
      : E.filter(t, e, n);
  }
  (E.filter = function (e, t, n) {
    var r = t[0];
    return (n && (e = ':not(' + e + ')'), 1 === t.length && 1 === r.nodeType)
      ? E.find.matchesSelector(r, e)
        ? [r]
        : []
      : E.find.matches(
          e,
          E.grep(t, function (e) {
            return 1 === e.nodeType;
          }),
        );
  }),
    E.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ('string' != typeof e)
          return this.pushStack(
            E(e).filter(function () {
              for (t = 0; t < r; t++) if (E.contains(i[t], this)) return !0;
            }),
          );
        for (t = 0, n = this.pushStack([]); t < r; t++) E.find(e, i[t], n);
        return r > 1 ? E.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(eM(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(eM(this, e || [], !0));
      },
      is: function (e) {
        return !!eM(
          this,
          'string' == typeof e && eI.test(e) ? E(e) : e || [],
          !1,
        ).length;
      },
    });
  var eq,
    eW = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((E.fn.init = function (e, t) {
    var n, r;
    if (!e) return this;
    if (e.nodeType) return (this[0] = e), (this.length = 1), this;
    if ('function' == typeof e) return void 0 !== eq.ready ? eq.ready(e) : e(E);
    if (eB((n = e + ''))) n = [null, e, null];
    else {
      if ('string' != typeof e) return E.makeArray(e, this);
      n = eW.exec(e);
    }
    if (n && (n[1] || !t)) {
      if (!n[1])
        return (
          (r = x.getElementById(n[2])) && ((this[0] = r), (this.length = 1)),
          this
        );
      if (
        ((t = t instanceof E ? t[0] : t),
        E.merge(
          this,
          E.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : x, !0),
        ),
        e$.test(n[1]) && E.isPlainObject(t))
      )
        for (n in t)
          'function' == typeof this[n] ? this[n](t[n]) : this.attr(n, t[n]);
      return this;
    }
    return !t || t.jquery ? (t || eq).find(e) : this.constructor(t).find(e);
  }).prototype = E.fn),
    (eq = E(x));
  var eF = /^(?:parents|prev(?:Until|All))/,
    eU = { children: !0, contents: !0, next: !0, prev: !0 };
  function ez(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  E.fn.extend({
    has: function (e) {
      var t = E(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = 'string' != typeof e && E(e);
      if (!eI.test(e)) {
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && E.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      }
      return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? l.call(E(e), this[0])
          : l.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    E.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return eR(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return eR(e, 'parentNode', n);
        },
        next: function (e) {
          return ez(e, 'nextSibling');
        },
        prev: function (e) {
          return ez(e, 'previousSibling');
        },
        nextAll: function (e) {
          return eR(e, 'nextSibling');
        },
        prevAll: function (e) {
          return eR(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return eR(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return eR(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return eH((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return eH(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && o(e.contentDocument)
            ? e.contentDocument
            : (S(e, 'template') && (e = e.content || e),
              E.merge([], e.childNodes));
        },
      },
      function (e, t) {
        E.fn[e] = function (n, r) {
          var i = E.map(this, t, n);
          return (
            'Until' !== e.slice(-5) && (r = n),
            r && 'string' == typeof r && (i = E.filter(r, i)),
            this.length > 1 &&
              (eU[e] || E.uniqueSort(i), eF.test(e) && i.reverse()),
            this.pushStack(i)
          );
        };
      },
    );
  var eX = /-([a-z])/g;
  function e_(e, t) {
    return t.toUpperCase();
  }
  function eV(e) {
    return e.replace(eX, e_);
  }
  function eY(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }
  function eQ() {
    this.expando = E.expando + eQ.uid++;
  }
  (eQ.uid = 1),
    (eQ.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          !t &&
            ((t = Object.create(null)),
            eY(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ('string' == typeof t) i[eV(t)] = n;
        else for (r in t) i[eV(r)] = t[r];
        return n;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][eV(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(eV)
              : (t = eV(t)) in r
              ? [t]
              : t.match(J) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || E.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !E.isEmptyObject(t);
      },
    });
  var eG = new eQ(),
    eK = new eQ(),
    eJ = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    eZ = /[A-Z]/g;
  function e0(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) {
      if (
        ((r = 'data-' + t.replace(eZ, '-$&').toLowerCase()),
        'string' == typeof (n = e.getAttribute(r)))
      ) {
        try {
          (i = n),
            (n =
              'true' === i ||
              ('false' !== i &&
                ('null' === i
                  ? null
                  : i === +i + ''
                  ? +i
                  : eJ.test(i)
                  ? JSON.parse(i)
                  : i)));
        } catch (e) {}
        eK.set(e, t, n);
      } else n = void 0;
    }
    return n;
  }
  E.extend({
    hasData: function (e) {
      return eK.hasData(e) || eG.hasData(e);
    },
    data: function (e, t, n) {
      return eK.access(e, t, n);
    },
    removeData: function (e, t) {
      eK.remove(e, t);
    },
    _data: function (e, t, n) {
      return eG.access(e, t, n);
    },
    _removeData: function (e, t) {
      eG.remove(e, t);
    },
  }),
    E.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = eK.get(o)), 1 === o.nodeType && !eG.get(o, 'hasDataAttrs'))
          ) {
            n = a.length;
            while (n--)
              a[n] &&
                0 === (r = a[n].name).indexOf('data-') &&
                e0(o, (r = eV(r.slice(5))), i[r]);
            eG.set(o, 'hasDataAttrs', !0);
          }
          return i;
        }
        return 'object' == typeof e
          ? this.each(function () {
              eK.set(this, e);
            })
          : K(
              this,
              function (t) {
                var n;
                if (o && void 0 === t)
                  return void 0 !== (n = eK.get(o, e)) ||
                    void 0 !== (n = e0(o, e))
                    ? n
                    : void 0;
                this.each(function () {
                  eK.set(this, e, t);
                });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0,
            );
      },
      removeData: function (e) {
        return this.each(function () {
          eK.remove(this, e);
        });
      },
    });
  var e1 = /^(?:input|select|textarea|button)$/i,
    e2 = /^(?:a|area)$/i;
  function e3(e) {
    return (e.match(J) || []).join(' ');
  }
  function e5(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function e9(e) {
    return Array.isArray(e) ? e : ('string' == typeof e && e.match(J)) || [];
  }
  E.fn.extend({
    prop: function (e, t) {
      return K(this, E.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[E.propFix[e] || e];
      });
    },
  }),
    E.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return ((1 === o && E.isXMLDoc(e)) ||
            ((t = E.propFix[t] || t), (i = E.propHooks[t])),
          void 0 !== n)
            ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
              ? r
              : (e[t] = n)
            : i && 'get' in i && null !== (r = i.get(e, t))
            ? r
            : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = e.getAttribute('tabindex');
            return t
              ? parseInt(t, 10)
              : e1.test(e.nodeName) || (e2.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    k &&
      (E.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    E.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        E.propFix[this.toLowerCase()] = this;
      },
    ),
    E.fn.extend({
      addClass: function (e) {
        var t, n, r, i, o, a;
        return 'function' == typeof e
          ? this.each(function (t) {
              E(this).addClass(e.call(this, t, e5(this)));
            })
          : (t = e9(e)).length
          ? this.each(function () {
              if (
                ((r = e5(this)), (n = 1 === this.nodeType && ' ' + e3(r) + ' '))
              ) {
                for (o = 0; o < t.length; o++)
                  (i = t[o]), 0 > n.indexOf(' ' + i + ' ') && (n += i + ' ');
                r !== (a = e3(n)) && this.setAttribute('class', a);
              }
            })
          : this;
      },
      removeClass: function (e) {
        var t, n, r, i, o, a;
        return 'function' == typeof e
          ? this.each(function (t) {
              E(this).removeClass(e.call(this, t, e5(this)));
            })
          : arguments.length
          ? (t = e9(e)).length
            ? this.each(function () {
                if (
                  ((r = e5(this)),
                  (n = 1 === this.nodeType && ' ' + e3(r) + ' '))
                ) {
                  for (o = 0; o < t.length; o++) {
                    i = t[o];
                    while (n.indexOf(' ' + i + ' ') > -1)
                      n = n.replace(' ' + i + ' ', ' ');
                  }
                  r !== (a = e3(n)) && this.setAttribute('class', a);
                }
              })
            : this
          : this.attr('class', '');
      },
      toggleClass: function (e, t) {
        var n, r, i, o;
        return 'function' == typeof e
          ? this.each(function (n) {
              E(this).toggleClass(e.call(this, n, e5(this), t), t);
            })
          : 'boolean' == typeof t
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : (n = e9(e)).length
          ? this.each(function () {
              for (i = 0, o = E(this); i < n.length; i++)
                (r = n[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
            })
          : this;
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = ' ' + e + ' ';
        while ((n = this[r++]))
          if (1 === n.nodeType && (' ' + e3(e5(n)) + ' ').indexOf(t) > -1)
            return !0;
        return !1;
      },
    }),
    E.fn.extend({
      val: function (e) {
        var t,
          n,
          r,
          i = this[0];
        return arguments.length
          ? ((r = 'function' == typeof e),
            this.each(function (n) {
              var i;
              1 === this.nodeType &&
                (null == (i = r ? e.call(this, n, E(this).val()) : e)
                  ? (i = '')
                  : 'number' == typeof i
                  ? (i += '')
                  : Array.isArray(i) &&
                    (i = E.map(i, function (e) {
                      return null == e ? '' : e + '';
                    })),
                ((t =
                  E.valHooks[this.type] ||
                  E.valHooks[this.nodeName.toLowerCase()]) &&
                  'set' in t &&
                  void 0 !== t.set(this, i, 'value')) ||
                  (this.value = i));
            }))
          : i
          ? (t = E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()]) &&
            'get' in t &&
            void 0 !== (n = t.get(i, 'value'))
            ? n
            : null == (n = i.value)
            ? ''
            : n
          : void 0;
      },
    }),
    E.extend({
      valHooks: {
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = 'select-one' === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                (n = i[r]).selected &&
                !n.disabled &&
                (!n.parentNode.disabled || !S(n.parentNode, 'optgroup'))
              ) {
                if (((t = E(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = E.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected = E.inArray(E(r).val(), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    k &&
      (E.valHooks.option = {
        get: function (e) {
          var t = e.getAttribute('value');
          return null != t ? t : e3(E.text(e));
        },
      }),
    E.each(['radio', 'checkbox'], function () {
      E.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = E.inArray(E(e).val(), t) > -1);
        },
      };
    });
  var e6 = /^(?:checkbox|radio)$/i,
    e4 = /^([^.]*)(?:\.(.+)|)/;
  function e8() {
    return !0;
  }
  function e7() {
    return !1;
  }
  function te(e, t, n, r, i, o) {
    var a, s;
    if ('object' == typeof t) {
      for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
        te(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ('string' == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = e7;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return E().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = E.guid++))),
      e.each(function () {
        E.event.add(this, t, i, r, n);
      })
    );
  }
  function tt(e, t, n) {
    if (!n) {
      void 0 === eG.get(e, t) && E.event.add(e, t, e8);
      return;
    }
    eG.set(e, t, !1),
      E.event.add(e, t, {
        namespace: !1,
        handler: function (e) {
          var n,
            r = eG.get(this, t);
          if (1 & e.isTrigger && this[t]) {
            if (r)
              (E.event.special[t] || {}).delegateType && e.stopPropagation();
            else if (
              ((r = a.call(arguments)),
              eG.set(this, t, r),
              this[t](),
              (n = eG.get(this, t)),
              eG.set(this, t, !1),
              r !== n)
            )
              return e.stopImmediatePropagation(), e.preventDefault(), n;
          } else
            r &&
              (eG.set(this, t, E.event.trigger(r[0], r.slice(1), this)),
              e.stopPropagation(),
              (e.isImmediatePropagationStopped = e8));
        },
      });
  }
  (E.event = {
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = eG.get(e);
      if (eY(e)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && E.find.matchesSelector(H, i),
          n.guid || (n.guid = E.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (t) {
                return E.event.triggered !== t.type
                  ? E.event.dispatch.apply(e, arguments)
                  : void 0;
              }),
          (l = (t = (t || '').match(J) || ['']).length);
        while (l--) {
          if (
            ((d = g = (s = e4.exec(t[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            !d)
          )
            continue;
          (f = E.event.special[d] || {}),
            (d = (i ? f.delegateType : f.bindType) || d),
            (f = E.event.special[d] || {}),
            (c = E.extend(
              {
                type: d,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && E.expr.match.needsContext.test(i),
                namespace: h.join('.'),
              },
              o,
            )),
            (p = u[d]) ||
              (((p = u[d] = []).delegateCount = 0),
              (!f.setup || !1 === f.setup.call(e, r, h, a)) &&
                e.addEventListener &&
                e.addEventListener(d, a)),
            f.add &&
              (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
            i ? p.splice(p.delegateCount++, 0, c) : p.push(c);
        }
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = eG.hasData(e) && eG.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || '').match(J) || ['']).length;
        while (l--) {
          if (
            ((d = g = (s = e4.exec(t[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            !d)
          ) {
            for (d in u) E.event.remove(e, d + t[l], n, r, !0);
            continue;
          }
          (f = E.event.special[d] || {}),
            (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
            (s =
              s[2] && RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')),
            (a = o = p.length);
          while (o--)
            (c = p[o]),
              (i || g === c.origType) &&
                (!n || n.guid === c.guid) &&
                (!s || s.test(c.namespace)) &&
                (!r || r === c.selector || ('**' === r && c.selector)) &&
                (p.splice(o, 1),
                c.selector && p.delegateCount--,
                f.remove && f.remove.call(e, c));
          a &&
            !p.length &&
            ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
              E.removeEvent(e, d, v.handle),
            delete u[d]);
        }
        E.isEmptyObject(u) && eG.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = Array(arguments.length),
        u = E.event.fix(e),
        l = (eG.get(this, 'events') || Object.create(null))[u.type] || [],
        c = E.event.special[u.type] || {};
      for (t = 1, s[0] = u; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = E.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (!u.rnamespace ||
              !1 === o.namespace ||
              u.rnamespace.test(o.namespace)) &&
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (E.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && !('click' === e.type && e.button >= 1)) {
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && !('click' === e.type && !0 === l.disabled)) {
            for (n = 0, o = [], a = {}; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                (a[i] = r.needsContext
                  ? E(i, this).index(l) > -1
                  : E.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(E.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get:
          'function' == typeof t
            ? function () {
                if (this.originalEvent) return t(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[e];
              },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[E.expando] ? e : new E.Event(e);
    },
    special: E.extend(Object.create(null), {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            e6.test(t.type) && t.click && S(t, 'input') && tt(t, 'click', !0),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            e6.test(t.type) && t.click && S(t, 'input') && tt(t, 'click'), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (e6.test(t.type) &&
              t.click &&
              S(t, 'input') &&
              eG.get(t, 'click')) ||
            S(t, 'a')
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    }),
  }),
    (E.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (E.Event = function (e, t) {
      if (!(this instanceof E.Event)) return new E.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented = e.defaultPrevented ? e8 : e7),
          (this.target = e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && E.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[E.expando] = !0);
    }),
    (E.Event.prototype = {
      constructor: E.Event,
      isDefaultPrevented: e7,
      isPropagationStopped: e7,
      isImmediatePropagationStopped: e7,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = e8),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = e8),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = e8),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    E.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      E.event.addProp,
    ),
    E.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
      function n(e) {
        var t = E.event.fix(e);
        (t.type = 'focusin' === e.type ? 'focus' : 'blur'),
          (t.isSimulated = !0),
          t.target === t.currentTarget && eG.get(this, 'handle')(t);
      }
      E.event.special[e] = {
        setup: function () {
          if ((tt(this, e, !0), !k)) return !1;
          this.addEventListener(t, n);
        },
        trigger: function () {
          return tt(this, e), !0;
        },
        teardown: function () {
          if (!k) return !1;
          this.removeEventListener(t, n);
        },
        _default: function (t) {
          return eG.get(t.target, e);
        },
        delegateType: t,
      };
    }),
    E.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, t) {
        E.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = e.relatedTarget,
              i = e.handleObj;
            return (
              (r && (r === this || E.contains(this, r))) ||
                ((e.type = i.origType),
                (n = i.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      },
    ),
    E.fn.extend({
      on: function (e, t, n, r) {
        return te(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return te(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            E(e.delegateTarget).off(
              r.namespace ? r.origType + '.' + r.namespace : r.origType,
              r.selector,
              r.handler,
            ),
            this
          );
        if ('object' == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 === t || 'function' == typeof t) && ((n = t), (t = void 0)),
          !1 === n && (n = e7),
          this.each(function () {
            E.event.remove(this, e, n, t);
          })
        );
      },
    });
  var tn = /^(?:focusinfocus|focusoutblur)$/,
    tr = function (e) {
      e.stopPropagation();
    };
  E.extend(E.event, {
    trigger: function (t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        h = [r || x],
        g = p.call(t, 'type') ? t.type : t,
        v = p.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (
        ((a = d = s = r = r || x),
        !(
          3 === r.nodeType ||
          8 === r.nodeType ||
          tn.test(g + E.event.triggered)
        ) &&
          (g.indexOf('.') > -1 && ((g = (v = g.split('.')).shift()), v.sort()),
          (l = 0 > g.indexOf(':') && 'on' + g),
          ((t = t[E.expando]
            ? t
            : new E.Event(g, 'object' == typeof t && t)).isTrigger = i ? 2 : 3),
          (t.namespace = v.join('.')),
          (t.rnamespace = t.namespace
            ? RegExp('(^|\\.)' + v.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : E.makeArray(n, [t])),
          (f = E.event.special[g] || {}),
          i || !f.trigger || !1 !== f.trigger.apply(r, n)))
      ) {
        if (!i && !f.noBubble && !y(r)) {
          for (
            u = f.delegateType || g, tn.test(u + g) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            h.push(a), (s = a);
          s === (r.ownerDocument || x) &&
            h.push(s.defaultView || s.parentWindow || e);
        }
        o = 0;
        while ((a = h[o++]) && !t.isPropagationStopped())
          (d = a),
            (t.type = o > 1 ? u : f.bindType || g),
            (c =
              (eG.get(a, 'events') || Object.create(null))[t.type] &&
              eG.get(a, 'handle')) && c.apply(a, n),
            (c = l && a[l]) &&
              c.apply &&
              eY(a) &&
              ((t.result = c.apply(a, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = g),
          !i &&
            !t.isDefaultPrevented() &&
            (!f._default || !1 === f._default.apply(h.pop(), n)) &&
            eY(r) &&
            l &&
            'function' == typeof r[g] &&
            !y(r) &&
            ((s = r[l]) && (r[l] = null),
            (E.event.triggered = g),
            t.isPropagationStopped() && d.addEventListener(g, tr),
            r[g](),
            t.isPropagationStopped() && d.removeEventListener(g, tr),
            (E.event.triggered = void 0),
            s && (r[l] = s)),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
      E.event.trigger(r, null, t);
    },
  }),
    E.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          E.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return E.event.trigger(e, t, n, !0);
      },
    });
  var ti = function (e) {
      return (
        E.contains(e.ownerDocument, e) || e.getRootNode(to) === e.ownerDocument
      );
    },
    to = { composed: !0 };
  H.getRootNode ||
    (ti = function (e) {
      return E.contains(e.ownerDocument, e);
    });
  var ta = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    ts = {
      thead: ['table'],
      col: ['colgroup', 'table'],
      tr: ['tbody', 'table'],
      td: ['tr', 'tbody', 'table'],
    };
  function tu(e, t) {
    var n;
    return ((n =
      void 0 !== e.getElementsByTagName
        ? e.getElementsByTagName(t || '*')
        : void 0 !== e.querySelectorAll
        ? e.querySelectorAll(t || '*')
        : []),
    void 0 === t || (t && S(e, t)))
      ? E.merge([e], n)
      : n;
  }
  (ts.tbody = ts.tfoot = ts.colgroup = ts.caption = ts.thead), (ts.th = ts.td);
  var tl = /^$|^module$|\/(?:java|ecma)script/i;
  function tc(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      eG.set(e[n], 'globalEval', !t || eG.get(t[n], 'globalEval'));
  }
  var tf = /<|&#?\w+;/;
  function tp(e, t, n, r, o) {
    for (
      var a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((a = e[d]) || 0 === a) {
        if ('object' === v(a) && (a.nodeType || m(a)))
          E.merge(p, a.nodeType ? [a] : a);
        else if (tf.test(a)) {
          (s = s || f.appendChild(t.createElement('div'))),
            (c = (u = ts[(ta.exec(a) || ['', ''])[1].toLowerCase()] || i)
              .length);
          while (--c > -1) s = s.appendChild(t.createElement(u[c]));
          (s.innerHTML = E.htmlPrefilter(a)),
            E.merge(p, s.childNodes),
            ((s = f.firstChild).textContent = '');
        } else p.push(t.createTextNode(a));
      }
    (f.textContent = ''), (d = 0);
    while ((a = p[d++])) {
      if (r && E.inArray(a, r) > -1) {
        o && o.push(a);
        continue;
      }
      if (((l = ti(a)), (s = tu(f.appendChild(a), 'script')), l && tc(s), n)) {
        c = 0;
        while ((a = s[c++])) tl.test(a.type || '') && n.push(a);
      }
    }
    return f;
  }
  function td(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function th(e) {
    return (
      'true/' === (e.type || '').slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute('type'),
      e
    );
  }
  function tg(e, t, n, r) {
    t = s(t);
    var i,
      o,
      a,
      u,
      l,
      c,
      f = 0,
      p = e.length,
      d = p - 1,
      h = t[0];
    if ('function' == typeof h)
      return e.each(function (i) {
        var o = e.eq(i);
        (t[0] = h.call(this, i, o.html())), tg(o, t, n, r);
      });
    if (
      p &&
      ((o = (i = tp(t, e[0].ownerDocument, !1, e, r)).firstChild),
      1 === i.childNodes.length && (i = o),
      o || r)
    ) {
      for (u = (a = E.map(tu(i, 'script'), td)).length; f < p; f++)
        (l = i),
          f !== d &&
            ((l = E.clone(l, !0, !0)), u && E.merge(a, tu(l, 'script'))),
          n.call(e[f], l, f);
      if (u)
        for (c = a[a.length - 1].ownerDocument, E.map(a, th), f = 0; f < u; f++)
          (l = a[f]),
            tl.test(l.type || '') &&
              !eG.get(l, 'globalEval') &&
              E.contains(c, l) &&
              (l.src && 'module' !== (l.type || '').toLowerCase()
                ? E._evalUrl &&
                  !l.noModule &&
                  E._evalUrl(
                    l.src,
                    { nonce: l.nonce, crossOrigin: l.crossOrigin },
                    c,
                  )
                : w(l.textContent, l, c));
    }
    return e;
  }
  var tv = /<script|<style|<link/i;
  function ty(e, t) {
    return (
      (S(e, 'table') &&
        S(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
        E(e).children('tbody')[0]) ||
      e
    );
  }
  function tm(e, t) {
    var n,
      r,
      i,
      o = eG.get(e, 'events');
    if (1 === t.nodeType) {
      if (o)
        for (n in (eG.remove(t, 'handle events'), o))
          for (r = 0, i = o[n].length; r < i; r++) E.event.add(t, n, o[n][r]);
      eK.hasData(e) && eK.set(t, E.extend({}, eK.get(e)));
    }
  }
  function tx(e, t, n) {
    for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || E.cleanData(tu(r)),
        r.parentNode &&
          (n && ti(r) && tc(tu(r, 'script')), r.parentNode.removeChild(r));
    return e;
  }
  E.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s = e.cloneNode(!0),
        u = ti(e);
      if (k && (1 === e.nodeType || 11 === e.nodeType) && !E.isXMLDoc(e))
        for (r = 0, a = tu(s), i = (o = tu(e)).length; r < i; r++)
          S(a[r], 'textarea') && (a[r].defaultValue = o[r].defaultValue);
      if (t) {
        if (n)
          for (r = 0, o = o || tu(e), a = a || tu(s), i = o.length; r < i; r++)
            tm(o[r], a[r]);
        else tm(e, s);
      }
      return (
        (a = tu(s, 'script')).length > 0 && tc(a, !u && tu(e, 'script')), s
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (eY(n)) {
          if ((t = n[eG.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
            n[eG.expando] = void 0;
          }
          n[eK.expando] && (n[eK.expando] = void 0);
        }
    },
  }),
    E.fn.extend({
      detach: function (e) {
        return tx(this, e, !0);
      },
      remove: function (e) {
        return tx(this, e);
      },
      text: function (e) {
        return K(
          this,
          function (e) {
            return void 0 === e
              ? E.text(this)
              : this.empty().each(function () {
                  (1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType) &&
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length,
        );
      },
      append: function () {
        return tg(this, arguments, function (e) {
          (1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType) &&
            ty(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return tg(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = ty(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return tg(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return tg(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (E.cleanData(tu(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return E.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return K(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              'string' == typeof e &&
              !tv.test(e) &&
              !ts[(ta.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = E.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  (t = this[n] || {}),
                    1 === t.nodeType &&
                      (E.cleanData(tu(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length,
        );
      },
      replaceWith: function () {
        var e = [];
        return tg(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            0 > E.inArray(this, e) &&
              (E.cleanData(tu(this)), n && n.replaceChild(t, this));
          },
          e,
        );
      },
    }),
    E.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, t) {
        E.fn[e] = function (e) {
          for (var n, r = [], i = E(e), o = i.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)), E(i[a])[t](n), u.apply(r, n);
          return this.pushStack(r);
        };
      },
    ),
    E.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            ('function' == typeof e && (e = e.call(this[0])),
            (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return 'function' == typeof e
          ? this.each(function (t) {
              E(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = E(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = 'function' == typeof e;
        return this.each(function (n) {
          E(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not('body')
            .each(function () {
              E(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    });
  var tb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    tw = RegExp('^(?:([+-])=|)(' + tb + ')([a-z%]*)$', 'i'),
    tT = RegExp('^(' + tb + ')(?!px)[a-z%]+$', 'i'),
    tC = /^--/,
    tE = ['Top', 'Right', 'Bottom', 'Left'],
    tS = /^[a-z]/,
    tA =
      /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
  function tD(e) {
    return tS.test(e) && tA.test(e[0].toUpperCase() + e.slice(1));
  }
  var tk = /^-ms-/;
  function tN(e) {
    return eV(e.replace(tk, 'ms-'));
  }
  function tj(t) {
    var n = t.ownerDocument.defaultView;
    return n || (n = e), n.getComputedStyle(t);
  }
  function tO(e, t, n) {
    var r,
      i = tC.test(t);
    return (
      (n = n || tj(e)) &&
        ((r = n.getPropertyValue(t) || n[t]),
        i && r && (r = r.replace(j, '$1') || void 0),
        '' !== r || ti(e) || (r = E.style(e, t))),
      void 0 !== r ? r + '' : r
    );
  }
  var tL = ['Webkit', 'Moz', 'ms'],
    tP = x.createElement('div').style,
    tR = {};
  function tH(e) {
    return (
      tR[e] ||
      (e in tP
        ? e
        : (tR[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = tL.length;
              while (n--) if ((e = tL[n] + t) in tP) return e;
            })(e) || e))
    );
  }
  (r = x.createElement('div')).style &&
    (g.reliableTrDimensions = function () {
      var t, i, o;
      if (null == n) {
        if (
          ((t = x.createElement('table')),
          (i = x.createElement('tr')),
          (t.style.cssText =
            'position:absolute;left:-11111px;border-collapse:separate'),
          (i.style.cssText = 'box-sizing:content-box;border:1px solid'),
          (i.style.height = '1px'),
          (r.style.height = '9px'),
          (r.style.display = 'block'),
          H.appendChild(t).appendChild(i).appendChild(r),
          0 === t.offsetWidth)
        ) {
          H.removeChild(t);
          return;
        }
        (n =
          parseInt((o = e.getComputedStyle(i)).height, 10) +
            parseInt(o.borderTopWidth, 10) +
            parseInt(o.borderBottomWidth, 10) ===
          i.offsetHeight),
          H.removeChild(t);
      }
      return n;
    });
  var tI = /^(none|table(?!-c[ea]).+)/,
    t$ = { position: 'absolute', visibility: 'hidden', display: 'block' },
    tB = { letterSpacing: '0', fontWeight: '400' };
  function tM(e, t, n) {
    var r = tw.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
  }
  function tq(e, t, n, r, i, o) {
    var a = 'width' === t ? 1 : 0,
      s = 0,
      u = 0,
      l = 0;
    if (n === (r ? 'border' : 'content')) return 0;
    for (; a < 4; a += 2)
      'margin' === n && (l += E.css(e, n + tE[a], !0, i)),
        r
          ? ('content' === n && (u -= E.css(e, 'padding' + tE[a], !0, i)),
            'margin' !== n &&
              (u -= E.css(e, 'border' + tE[a] + 'Width', !0, i)))
          : ((u += E.css(e, 'padding' + tE[a], !0, i)),
            'padding' !== n
              ? (u += E.css(e, 'border' + tE[a] + 'Width', !0, i))
              : (s += E.css(e, 'border' + tE[a] + 'Width', !0, i)));
    return (
      !r &&
        o >= 0 &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5,
            ),
          ) || 0),
      u + l
    );
  }
  function tW(e, t, n) {
    var r = tj(e),
      i = (k || n) && 'border-box' === E.css(e, 'boxSizing', !1, r),
      o = i,
      a = tO(e, t, r),
      s = 'offset' + t[0].toUpperCase() + t.slice(1);
    if (tT.test(a)) {
      if (!n) return a;
      a = 'auto';
    }
    return (
      ('auto' === a || (k && i) || (!g.reliableTrDimensions() && S(e, 'tr'))) &&
        e.getClientRects().length &&
        ((i = 'border-box' === E.css(e, 'boxSizing', !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        tq(e, t, n || (i ? 'border' : 'content'), o, r, a) +
        'px'
    );
  }
  function tF(e, t) {
    return (
      'none' === (e = t || e).style.display ||
      ('' === e.style.display && 'none' === E.css(e, 'display'))
    );
  }
  E.extend({
    cssHooks: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = tN(t),
          u = tC.test(t),
          l = e.style;
        if (
          (u || (t = tH(s)), (a = E.cssHooks[t] || E.cssHooks[s]), void 0 === n)
        )
          return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        'string' == (o = typeof n) &&
          (i = tw.exec(n)) &&
          i[1] &&
          ((n = (function (e, t, n, r) {
            var i,
              o,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return E.css(e, t, '');
                  },
              u = s(),
              l = (n && n[3]) || (tD(t) ? 'px' : ''),
              c =
                e.nodeType &&
                (!tD(t) || ('px' !== l && +u)) &&
                tw.exec(E.css(e, t));
            if (c && c[3] !== l) {
              (u /= 2), (l = l || c[3]), (c = +u || 1);
              while (a--)
                E.style(e, t, c + l),
                  (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                  (c /= o);
              (c *= 2), E.style(e, t, c + l), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
              i
            );
          })(e, t, i)),
          (o = 'number')),
          null != n &&
            n == n &&
            ('number' === o && (n += (i && i[3]) || (tD(s) ? 'px' : '')),
            k &&
              '' === n &&
              0 === t.indexOf('background') &&
              (l[t] = 'inherit'),
            (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = tN(t);
      return (tC.test(t) || (t = tH(s)),
      (a = E.cssHooks[t] || E.cssHooks[s]) &&
        'get' in a &&
        (i = a.get(e, !0, n)),
      void 0 === i && (i = tO(e, t, r)),
      'normal' === i && t in tB && (i = tB[t]),
      '' === n || n)
        ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
        : i;
    },
  }),
    E.each(['height', 'width'], function (e, t) {
      E.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return !tI.test(E.css(e, 'display')) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? tW(e, t, r)
              : (function (e, t, n) {
                  var r,
                    i,
                    o = {};
                  for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
                  for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
                  return r;
                })(e, t$, function () {
                  return tW(e, t, r);
                });
        },
        set: function (e, n, r) {
          var i,
            o = tj(e),
            a = r && 'border-box' === E.css(e, 'boxSizing', !1, o),
            s = r ? tq(e, t, r, a, o) : 0;
          return (
            s &&
              (i = tw.exec(n)) &&
              'px' !== (i[3] || 'px') &&
              ((e.style[t] = n), (n = E.css(e, t))),
            tM(e, n, s)
          );
        },
      };
    }),
    E.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
      (E.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n];
            r < 4;
            r++
          )
            i[e + tE[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        'margin' !== e && (E.cssHooks[e + t].set = tM);
    }),
    E.fn.extend({
      css: function (e, t) {
        return K(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = tj(e), i = t.length; a < i; a++)
                o[t[a]] = E.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
          },
          e,
          t,
          arguments.length > 1,
        );
      },
    }),
    (E.expr.pseudos.hidden = function (e) {
      return !E.expr.pseudos.visible(e);
    }),
    (E.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    });
  var tU = {};
  function tz(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
      (r = e[o]).style &&
        ((n = r.style.display),
        t
          ? ('none' !== n ||
              ((i[o] = eG.get(r, 'display') || null),
              i[o] || (r.style.display = '')),
            '' === r.style.display &&
              tF(r) &&
              (i[o] = (function (e) {
                var t,
                  n = e.ownerDocument,
                  r = e.nodeName,
                  i = tU[r];
                return (
                  i ||
                    ((t = n.body.appendChild(n.createElement(r))),
                    (i = E.css(t, 'display')),
                    t.parentNode.removeChild(t),
                    'none' === i && (i = 'block'),
                    (tU[r] = i)),
                  i
                );
              })(r)))
          : 'none' !== n && ((i[o] = 'none'), eG.set(r, 'display', n)));
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  E.fn.extend({
    show: function () {
      return tz(this, !0);
    },
    hide: function () {
      return tz(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            tF(this) ? E(this).show() : E(this).hide();
          });
    },
  });
  var tX = /\[\]$/,
    t_ = /\r?\n/g,
    tV = /^(?:submit|button|image|reset|file)$/i,
    tY = /^(?:input|select|textarea|keygen)/i;
  (E.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = 'function' == typeof t ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (null == e) return '';
    if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
      E.each(e, function () {
        i(this.name, this.value);
      });
    else
      for (n in e)
        !(function e(t, n, r, i) {
          var o;
          if (Array.isArray(n))
            E.each(n, function (n, o) {
              r || tX.test(t)
                ? i(t, o)
                : e(
                    t +
                      '[' +
                      ('object' == typeof o && null != o ? n : '') +
                      ']',
                    o,
                    r,
                    i,
                  );
            });
          else if (r || 'object' !== v(n)) i(t, n);
          else for (o in n) e(t + '[' + o + ']', n[o], r, i);
        })(n, e[n], t, i);
    return r.join('&');
  }),
    E.fn.extend({
      serialize: function () {
        return E.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = E.prop(this, 'elements');
          return e ? E.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !E(this).is(':disabled') &&
              tY.test(this.nodeName) &&
              !tV.test(e) &&
              (this.checked || !e6.test(e))
            );
          })
          .map(function (e, t) {
            var n = E(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? E.map(n, function (e) {
                  return { name: t.name, value: e.replace(t_, '\r\n') };
                })
              : { name: t.name, value: n.replace(t_, '\r\n') };
          })
          .get();
      },
    }),
    (E.parseXML = function (t) {
      var n, r;
      if (!t || 'string' != typeof t) return null;
      try {
        n = new e.DOMParser().parseFromString(t, 'text/xml');
      } catch (e) {}
      return (
        (r = n && n.getElementsByTagName('parsererror')[0]),
        (!n || r) &&
          E.error(
            'Invalid XML: ' +
              (r
                ? E.map(r.childNodes, function (e) {
                    return e.textContent;
                  }).join('\n')
                : t),
          ),
        n
      );
    }),
    (E.parseHTML = function (e, t, n) {
      var r, i, o;
      return 'string' == typeof e || eB(e + '')
        ? ('boolean' == typeof t && ((n = t), (t = !1)),
          t ||
            (((r = (t = x.implementation.createHTMLDocument('')).createElement(
              'base',
            )).href = x.location.href),
            t.head.appendChild(r)),
          (i = e$.exec(e)),
          (o = !n && []),
          i)
          ? [t.createElement(i[1])]
          : ((i = tp([e], t, o)),
            o && o.length && E(o).remove(),
            E.merge([], i.childNodes))
        : [];
    }),
    (E.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = E.css(e, 'position'),
          c = E(e),
          f = {};
        'static' === l && (e.style.position = 'relative'),
          (s = c.offset()),
          (o = E.css(e, 'top')),
          (u = E.css(e, 'left')),
          ('absolute' === l || 'fixed' === l) && (o + u).indexOf('auto') > -1
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          'function' == typeof t && (t = t.call(e, n, E.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          'using' in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    E.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                E.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((t = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ('fixed' === E.css(r, 'position')) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              'static' === E.css(e, 'position')
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              ((i = E(e).offset()),
              (i.top += E.css(e, 'borderTopWidth', !0)),
              (i.left += E.css(e, 'borderLeftWidth', !0)));
          }
          return {
            top: t.top - i.top - E.css(r, 'marginTop', !0),
            left: t.left - i.left - E.css(r, 'marginLeft', !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && 'static' === E.css(e, 'position')) e = e.offsetParent;
          return e || H;
        });
      },
    }),
    E.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (e, t) {
        var n = 'pageYOffset' === t;
        E.fn[e] = function (r) {
          return K(
            this,
            function (e, r, i) {
              var o;
              if (
                (y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
              )
                return o ? o[t] : e[r];
              o
                ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                : (e[r] = i);
            },
            e,
            r,
            arguments.length,
          );
        };
      },
    ),
    E.each({ Height: 'height', Width: 'width' }, function (e, t) {
      E.each(
        { padding: 'inner' + e, content: t, '': 'outer' + e },
        function (n, r) {
          E.fn[r] = function (i, o) {
            var a = arguments.length && (n || 'boolean' != typeof i),
              s = n || (!0 === i || !0 === o ? 'margin' : 'border');
            return K(
              this,
              function (t, n, i) {
                var o;
                return y(t)
                  ? 0 === r.indexOf('outer')
                    ? t['inner' + e]
                    : t.document.documentElement['client' + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body['scroll' + e],
                      o['scroll' + e],
                      t.body['offset' + e],
                      o['offset' + e],
                      o['client' + e],
                    ))
                  : void 0 === i
                  ? E.css(t, n, s)
                  : E.style(t, n, i, s);
              },
              t,
              a ? i : void 0,
              a,
            );
          };
        },
      );
    }),
    E.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 == arguments.length
          ? this.off(e, '**')
          : this.off(t, e || '**', n);
      },
      hover: function (e, t) {
        return this.on('mouseenter', e).on('mouseleave', t || e);
      },
    }),
    E.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' ',
      ),
      function (e, t) {
        E.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      },
    ),
    (E.proxy = function (e, t) {
      var n, r, i;
      if (
        ('string' == typeof t && ((n = e[t]), (t = e), (e = n)),
        'function' == typeof e)
      )
        return (
          (r = a.call(arguments, 2)),
          ((i = function () {
            return e.apply(t || this, r.concat(a.call(arguments)));
          }).guid = e.guid =
            e.guid || E.guid++),
          i
        );
    }),
    (E.holdReady = function (e) {
      e ? E.readyWait++ : E.ready(!0);
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return E;
      });
  var tQ = e.jQuery,
    tG = e.$;
  (E.noConflict = function (t) {
    return e.$ === E && (e.$ = tG), t && e.jQuery === E && (e.jQuery = tQ), E;
  }),
    void 0 === t && (e.jQuery = e.$ = E);
  var tK = [],
    tJ = function (e) {
      tK.push(e);
    },
    tZ = function (t) {
      e.setTimeout(function () {
        t.call(x, E);
      });
    };
  function t0() {
    x.removeEventListener('DOMContentLoaded', t0),
      e.removeEventListener('load', t0),
      E.ready();
  }
  return (
    (E.fn.ready = function (e) {
      return tJ(e), this;
    }),
    E.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        !(!0 === e ? --E.readyWait : E.isReady) &&
          ((E.isReady = !0),
          (!0 !== e && --E.readyWait > 0) ||
            (tJ = function (e) {
              tK.push(e);
              while (tK.length) 'function' == typeof (e = tK.shift()) && tZ(e);
            })());
      },
    }),
    (E.ready.then = E.fn.ready),
    'loading' !== x.readyState
      ? e.setTimeout(E.ready)
      : (x.addEventListener('DOMContentLoaded', t0),
        e.addEventListener('load', t0)),
    E
  );
});
