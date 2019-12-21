!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(
        exports,
        require("react"),
        require("prop-types"),
        require("classnames"),
        require("react-onclickoutside"),
        require("moment"),
        require("react-popper")
      )
    : "function" == typeof define && define.amd
    ? define([
        "exports",
        "react",
        "prop-types",
        "classnames",
        "react-onclickoutside",
        "moment",
        "react-popper"
      ], t)
    : t(
        (e.DatePicker = {}),
        e.React,
        e.PropTypes,
        e.classNames,
        e.onClickOutside,
        e.moment,
        e.ReactPopper
      );
})(this, function(e, h, t, d, n, u, p) {
  "use strict";
  (h = h && h.hasOwnProperty("default") ? h.default : h),
    (t = t && t.hasOwnProperty("default") ? t.default : t),
    (d = d && d.hasOwnProperty("default") ? d.default : d),
    (n = n && n.hasOwnProperty("default") ? n.default : n),
    (u = u && u.hasOwnProperty("default") ? u.default : u);
  function a(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  var D =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          },
    o = function(e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e;
    };
  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(e, o.key, o);
    }
  }
  function s(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  }
  function m(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
  }
  var l =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var o in n)
          Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }
      return e;
    };
  var i,
    c =
      (s(f, (i = h.Component)),
      (f.prototype.render = function() {
        var e = d({
          "react-datepicker__year-dropdown": !0,
          "react-datepicker__year-dropdown--scrollable": this.props
            .scrollableYearDropdown
        });
        return h.createElement("div", { className: e }, this.renderOptions());
      }),
      f);
  function f(e) {
    a(this, f);
    var r = m(this, i.call(this, e));
    return (
      (r.renderOptions = function() {
        var t = r.props.year,
          e = r.state.yearsList.map(function(e) {
            return h.createElement(
              "div",
              {
                className:
                  t === e
                    ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                    : "react-datepicker__year-option",
                key: e,
                ref: e,
                onClick: r.onChange.bind(r, e)
              },
              t === e
                ? h.createElement(
                    "span",
                    { className: "react-datepicker__year-option--selected" },
                    "✓"
                  )
                : "",
              e
            );
          }),
          n = r.props.minDate ? r.props.minDate.year() : null,
          o = r.props.maxDate ? r.props.maxDate.year() : null;
        return (
          (o &&
            r.state.yearsList.find(function(e) {
              return e === o;
            })) ||
            e.unshift(
              h.createElement(
                "div",
                {
                  className: "react-datepicker__year-option",
                  ref: "upcoming",
                  key: "upcoming",
                  onClick: r.incrementYears
                },
                h.createElement("a", {
                  className:
                    "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"
                })
              )
            ),
          (n &&
            r.state.yearsList.find(function(e) {
              return e === n;
            })) ||
            e.push(
              h.createElement(
                "div",
                {
                  className: "react-datepicker__year-option",
                  ref: "previous",
                  key: "previous",
                  onClick: r.decrementYears
                },
                h.createElement("a", {
                  className:
                    "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"
                })
              )
            ),
          e
        );
      }),
      (r.onChange = function(e) {
        r.props.onChange(e);
      }),
      (r.handleClickOutside = function() {
        r.props.onCancel();
      }),
      (r.shiftYears = function(t) {
        var e = r.state.yearsList.map(function(e) {
          return e + t;
        });
        r.setState({ yearsList: e });
      }),
      (r.incrementYears = function() {
        return r.shiftYears(1);
      }),
      (r.decrementYears = function() {
        return r.shiftYears(-1);
      }),
      (r.state = {
        yearsList: (function(e, t, n, o) {
          for (var r = [], a = 0; a < 2 * t + 1; a++) {
            var s = e + t - a,
              i = !0;
            n && (i = n.year() <= s),
              o && i && (i = o.year() >= s),
              i && r.push(s);
          }
          return r;
        })(
          r.props.year,
          e.yearDropdownItemNumber || (e.scrollableYearDropdown ? 10 : 5),
          r.props.minDate,
          r.props.maxDate
        )
      }),
      r
    );
  }
  c.propTypes = {
    minDate: t.object,
    maxDate: t.object,
    onCancel: t.func.isRequired,
    onChange: t.func.isRequired,
    scrollableYearDropdown: t.bool,
    year: t.number.isRequired,
    yearDropdownItemNumber: t.number
  };
  var y = {
    1: "mon",
    2: "tue",
    3: "wed",
    4: "thu",
    5: "fri",
    6: "sat",
    7: "sun"
  };
  function g(e, t, n) {
    return e.set(t, n);
  }
  function b(e, t, n) {
    return e.add(t, n);
  }
  function v(e, t, n) {
    return e.subtract(t, n);
  }
  function w(e, t) {
    return e.get(t);
  }
  function k(e, t) {
    return e.startOf(t);
  }
  function C(e) {
    return u(e);
  }
  function S(e) {
    return null == e
      ? C()
      : ((t = e),
        u()
          .utc()
          .utcOffset(t));
    var t;
  }
  function _(e) {
    return e.clone();
  }
  function M(e) {
    return u.isMoment(e);
  }
  function N(e, t) {
    return e.format(t);
  }
  function O(e, t) {
    return e.set({ hour: t.hour, minute: t.minute, second: t.second }), e;
  }
  function T(e, t) {
    return g(e, "month", t);
  }
  function E(e, t) {
    return g(e, "year", t);
  }
  function x(e) {
    return w(e, "minute");
  }
  function j(e) {
    return w(e, "hour");
  }
  function Y(e) {
    return w(e, "month");
  }
  function P(e) {
    return w(e, "year");
  }
  function F(e) {
    return w(e, "date");
  }
  function R(e) {
    return k(e, "week");
  }
  function I(e) {
    return k(e, "month");
  }
  function W(e, t) {
    return b(e, t, "minutes");
  }
  function B(e, t) {
    return b(e, t, "days");
  }
  function q(e, t) {
    return b(e, t, "weeks");
  }
  function L(e, t) {
    return b(e, t, "months");
  }
  function H(e, t) {
    return v(e, t, "months");
  }
  function V(e, t) {
    return e.isBefore(t);
  }
  function A(e, t) {
    return e.isAfter(t);
  }
  function K(e, t) {
    return e && t ? e.isSame(t, "year") : !e && !t;
  }
  function U(e, t) {
    return e && t ? e.isSame(t, "month") : !e && !t;
  }
  function z(e, t) {
    return e && t ? e.isSame(t, "day") : !e && !t;
  }
  function G(e, t, n) {
    var o = t
        .clone()
        .startOf("day")
        .subtract(1, "seconds"),
      r = n
        .clone()
        .startOf("day")
        .add(1, "seconds");
    return e
      .clone()
      .startOf("day")
      .isBetween(o, r);
  }
  function J(e, t) {
    return e.clone().locale(t || u.locale());
  }
  function Q(t, e) {
    var n = 1 < arguments.length && void 0 !== e ? e : {},
      o = n.minDate,
      r = n.maxDate,
      a = n.excludeDates,
      s = n.includeDates,
      i = n.filterDate;
    return (
      (o && t.isBefore(o, "day")) ||
      (r && t.isAfter(r, "day")) ||
      (a &&
        a.some(function(e) {
          return z(t, e);
        })) ||
      (s &&
        !s.some(function(e) {
          return z(t, e);
        })) ||
      (i && !i(t.clone())) ||
      !1
    );
  }
  function X(e, t) {
    for (var n = t.length, o = 0; o < n; o++)
      if (
        t[o].get("hours") === e.get("hours") &&
        t[o].get("minutes") === e.get("minutes")
      )
        return !0;
    return !1;
  }
  function Z(e, t) {
    var n = t.minTime,
      o = t.maxTime;
    if (!n || !o) throw Error("Both minTime and maxTime props required");
    var r = u()
        .hours(0)
        .minutes(0)
        .seconds(0),
      a = r
        .clone()
        .hours(e.get("hours"))
        .minutes(e.get("minutes")),
      s = r
        .clone()
        .hours(n.get("hours"))
        .minutes(n.get("minutes")),
      i = r
        .clone()
        .hours(o.get("hours"))
        .minutes(o.get("minutes"));
    return !(a.isSameOrAfter(s) && a.isSameOrBefore(i));
  }
  function $(e, t, n) {
    var o = 2 < arguments.length && void 0 !== n ? n : {},
      r = o.minDate,
      a = o.includeDates,
      s = e.clone().subtract(1, t);
    return (
      (r && s.isBefore(r, t)) ||
      (a &&
        a.every(function(e) {
          return s.isBefore(e, t);
        })) ||
      !1
    );
  }
  function ee(e, t, n) {
    var o = 2 < arguments.length && void 0 !== n ? n : {},
      r = o.maxDate,
      a = o.includeDates,
      s = e.clone().add(1, t);
    return (
      (r && s.isAfter(r, t)) ||
      (a &&
        a.every(function(e) {
          return s.isAfter(e, t);
        })) ||
      !1
    );
  }
  function te(e) {
    var t = e.minDate,
      n = e.includeDates;
    return n && t
      ? u.min(
          n.filter(function(e) {
            return t.isSameOrBefore(e, "day");
          })
        )
      : n
      ? u.min(n)
      : t;
  }
  function ne(e) {
    var t = e.maxDate,
      n = e.includeDates;
    return n && t
      ? u.max(
          n.filter(function(e) {
            return t.isSameOrAfter(e, "day");
          })
        )
      : n
      ? u.max(n)
      : t;
  }
  function oe(e, t) {
    for (
      var n = 0 < arguments.length && void 0 !== e ? e : [],
        o =
          1 < arguments.length && void 0 !== t
            ? t
            : "react-datepicker__day--highlighted",
        r = new Map(),
        a = 0,
        s = n.length;
      a < s;
      a++
    ) {
      var i = n[a];
      if (M(i)) {
        var p = i.format("MM.DD.YYYY"),
          c = r.get(p) || [];
        c.includes(o) || (c.push(o), r.set(p, c));
      } else if ("object" === (void 0 === i ? "undefined" : D(i))) {
        var l = Object.keys(i),
          d = l[0],
          u = i[l[0]];
        if ("string" == typeof d && u.constructor === Array)
          for (var h = 0, m = u.length; h < m; h++) {
            var f = u[h].format("MM.DD.YYYY"),
              y = r.get(f) || [];
            y.includes(d) || (y.push(d), r.set(f, y));
          }
      }
    }
    return r;
  }
  function re(e, t, n, o, r) {
    for (var a, s, i = r.length, p = [], c = 0; c < i; c++) {
      var l = W(((a = _(e)), (s = j(r[c])), b(a, s, "hours")), x(r[c])),
        d = W(_(e), (n + 1) * o);
      l.isBetween(t, d) && p.push(r[c]);
    }
    return p;
  }
  var ae,
    se = n(c),
    ie =
      (s(pe, (ae = h.Component)),
      (pe.prototype.render = function() {
        var e = void 0;
        switch (this.props.dropdownMode) {
          case "scroll":
            e = this.renderScrollMode();
            break;
          case "select":
            e = this.renderSelectMode();
        }
        return h.createElement(
          "div",
          {
            className:
              "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--" +
              this.props.dropdownMode
          },
          e
        );
      }),
      pe);
  function pe() {
    var e, r;
    a(this, pe);
    for (var t = arguments.length, n = Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return (
      ((e = r = m(this, ae.call.apply(ae, [this].concat(n)))).state = {
        dropdownVisible: !1
      }),
      (r.renderSelectOptions = function() {
        for (
          var e = r.props.minDate ? P(r.props.minDate) : 1900,
            t = r.props.maxDate ? P(r.props.maxDate) : 2100,
            n = [],
            o = e;
          o <= t;
          o++
        )
          n.push(h.createElement("option", { key: o, value: o }, o));
        return n;
      }),
      (r.onSelectChange = function(e) {
        r.onChange(e.target.value);
      }),
      (r.renderSelectMode = function() {
        return h.createElement(
          "select",
          {
            value: r.props.year,
            className: "react-datepicker__year-select",
            onChange: r.onSelectChange
          },
          r.renderSelectOptions()
        );
      }),
      (r.renderReadView = function(e) {
        return h.createElement(
          "div",
          {
            key: "read",
            style: { visibility: e ? "visible" : "hidden" },
            className: "react-datepicker__year-read-view",
            onClick: function(e) {
              return r.toggleDropdown(e);
            }
          },
          h.createElement("span", {
            className: "react-datepicker__year-read-view--down-arrow"
          }),
          h.createElement(
            "span",
            { className: "react-datepicker__year-read-view--selected-year" },
            r.props.year
          )
        );
      }),
      (r.renderDropdown = function() {
        return h.createElement(se, {
          key: "dropdown",
          ref: "options",
          year: r.props.year,
          onChange: r.onChange,
          onCancel: r.toggleDropdown,
          minDate: r.props.minDate,
          maxDate: r.props.maxDate,
          scrollableYearDropdown: r.props.scrollableYearDropdown,
          yearDropdownItemNumber: r.props.yearDropdownItemNumber
        });
      }),
      (r.renderScrollMode = function() {
        var e = r.state.dropdownVisible,
          t = [r.renderReadView(!e)];
        return e && t.unshift(r.renderDropdown()), t;
      }),
      (r.onChange = function(e) {
        r.toggleDropdown(), e !== r.props.year && r.props.onChange(e);
      }),
      (r.toggleDropdown = function(e) {
        r.setState({ dropdownVisible: !r.state.dropdownVisible }, function() {
          r.props.adjustDateOnChange && r.handleYearChange(r.props.date, e);
        });
      }),
      (r.handleYearChange = function(e, t) {
        r.onSelect(e, t), r.setOpen();
      }),
      (r.onSelect = function(e, t) {
        r.props.onSelect && r.props.onSelect(e, t);
      }),
      (r.setOpen = function() {
        r.props.setOpen && r.props.setOpen(!0);
      }),
      m(r, e)
    );
  }
  ie.propTypes = {
    adjustDateOnChange: t.bool,
    dropdownMode: t.oneOf(["scroll", "select"]).isRequired,
    maxDate: t.object,
    minDate: t.object,
    onChange: t.func.isRequired,
    scrollableYearDropdown: t.bool,
    year: t.number.isRequired,
    yearDropdownItemNumber: t.number,
    date: t.object,
    onSelect: t.func,
    setOpen: t.func
  };
  var ce,
    le =
      (s(de, (ce = h.Component)),
      (de.prototype.render = function() {
        return h.createElement(
          "div",
          { className: "react-datepicker__month-dropdown" },
          this.renderOptions()
        );
      }),
      de);
  function de() {
    var e, n;
    a(this, de);
    for (var t = arguments.length, o = Array(t), r = 0; r < t; r++)
      o[r] = arguments[r];
    return (
      ((e = n = m(
        this,
        ce.call.apply(ce, [this].concat(o))
      )).renderOptions = function() {
        return n.props.monthNames.map(function(e, t) {
          return h.createElement(
            "div",
            {
              className:
                n.props.month === t
                  ? "react-datepicker__month-option --selected_month"
                  : "react-datepicker__month-option",
              key: e,
              ref: e,
              onClick: n.onChange.bind(n, t)
            },
            n.props.month === t
              ? h.createElement(
                  "span",
                  { className: "react-datepicker__month-option--selected" },
                  "✓"
                )
              : "",
            e
          );
        });
      }),
      (n.onChange = function(e) {
        return n.props.onChange(e);
      }),
      (n.handleClickOutside = function() {
        return n.props.onCancel();
      }),
      m(n, e)
    );
  }
  le.propTypes = {
    onCancel: t.func.isRequired,
    onChange: t.func.isRequired,
    month: t.number.isRequired,
    monthNames: t.arrayOf(t.string.isRequired).isRequired
  };
  var ue,
    he = n(le),
    me =
      (s(fe, (ue = h.Component)),
      (fe.prototype.render = function() {
        var o = this,
          r = u.localeData(this.props.locale),
          e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
            this.props.useShortMonthInDropdown
              ? function(e) {
                  return (t = r), (n = C({ M: e })), t.monthsShort(n);
                  var t, n;
                }
              : function(e) {
                  return (
                    (t = r), (n = C({ M: e })), t.months(n, o.props.dateFormat)
                  );
                  var t, n;
                }
          ),
          t = void 0;
        switch (this.props.dropdownMode) {
          case "scroll":
            t = this.renderScrollMode(e);
            break;
          case "select":
            t = this.renderSelectMode(e);
        }
        return h.createElement(
          "div",
          {
            className:
              "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--" +
              this.props.dropdownMode
          },
          t
        );
      }),
      fe);
  function fe() {
    var e, o;
    a(this, fe);
    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return (
      ((e = o = m(this, ue.call.apply(ue, [this].concat(n)))).state = {
        dropdownVisible: !1
      }),
      (o.renderSelectOptions = function(e) {
        return e.map(function(e, t) {
          return h.createElement("option", { key: t, value: t }, e);
        });
      }),
      (o.renderSelectMode = function(e) {
        return h.createElement(
          "select",
          {
            value: o.props.month,
            className: "react-datepicker__month-select",
            onChange: function(e) {
              return o.onChange(e.target.value);
            }
          },
          o.renderSelectOptions(e)
        );
      }),
      (o.renderReadView = function(e, t) {
        return h.createElement(
          "div",
          {
            key: "read",
            style: { visibility: e ? "visible" : "hidden" },
            className: "react-datepicker__month-read-view",
            onClick: o.toggleDropdown
          },
          h.createElement("span", {
            className: "react-datepicker__month-read-view--down-arrow"
          }),
          h.createElement(
            "span",
            { className: "react-datepicker__month-read-view--selected-month" },
            t[o.props.month]
          )
        );
      }),
      (o.renderDropdown = function(e) {
        return h.createElement(he, {
          key: "dropdown",
          ref: "options",
          month: o.props.month,
          monthNames: e,
          onChange: o.onChange,
          onCancel: o.toggleDropdown
        });
      }),
      (o.renderScrollMode = function(e) {
        var t = o.state.dropdownVisible,
          n = [o.renderReadView(!t, e)];
        return t && n.unshift(o.renderDropdown(e)), n;
      }),
      (o.onChange = function(e) {
        o.toggleDropdown(), e !== o.props.month && o.props.onChange(e);
      }),
      (o.toggleDropdown = function() {
        return o.setState({ dropdownVisible: !o.state.dropdownVisible });
      }),
      m(o, e)
    );
  }
  me.propTypes = {
    dropdownMode: t.oneOf(["scroll", "select"]).isRequired,
    locale: t.string,
    dateFormat: t.string.isRequired,
    month: t.number.isRequired,
    onChange: t.func.isRequired,
    useShortMonthInDropdown: t.bool
  };
  var ye,
    De =
      (s(ge, (ye = h.Component)),
      (ge.prototype.render = function() {
        var e = d({
          "react-datepicker__month-year-dropdown": !0,
          "react-datepicker__month-year-dropdown--scrollable": this.props
            .scrollableMonthYearDropdown
        });
        return h.createElement("div", { className: e }, this.renderOptions());
      }),
      ge);
  function ge(e) {
    a(this, ge);
    var o = m(this, ye.call(this, e));
    return (
      (o.renderOptions = function() {
        return o.state.monthYearsList.map(function(e) {
          var t = e.valueOf(),
            n = K(o.props.date, e) && U(o.props.date, e);
          return h.createElement(
            "div",
            {
              className: n
                ? "react-datepicker__month-year-option --selected_month-year"
                : "react-datepicker__month-year-option",
              key: t,
              ref: t,
              onClick: o.onChange.bind(o, t)
            },
            n
              ? h.createElement(
                  "span",
                  {
                    className: "react-datepicker__month-year-option--selected"
                  },
                  "✓"
                )
              : "",
            N(e, o.props.dateFormat)
          );
        });
      }),
      (o.onChange = function(e) {
        return o.props.onChange(e);
      }),
      (o.handleClickOutside = function() {
        o.props.onCancel();
      }),
      (o.state = {
        monthYearsList: (function(e, t) {
          for (var n = [], o = I(_(e)), r = I(_(t)); !A(o, r); )
            n.push(_(o)), L(o, 1);
          return n;
        })(o.props.minDate, o.props.maxDate)
      }),
      o
    );
  }
  De.propTypes = {
    minDate: t.object.isRequired,
    maxDate: t.object.isRequired,
    onCancel: t.func.isRequired,
    onChange: t.func.isRequired,
    scrollableMonthYearDropdown: t.bool,
    date: t.object.isRequired,
    dateFormat: t.string.isRequired
  };
  var be,
    ve = n(De),
    we =
      (s(ke, (be = h.Component)),
      (ke.prototype.render = function() {
        var e = void 0;
        switch (this.props.dropdownMode) {
          case "scroll":
            e = this.renderScrollMode();
            break;
          case "select":
            e = this.renderSelectMode();
        }
        return h.createElement(
          "div",
          {
            className:
              "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--" +
              this.props.dropdownMode
          },
          e
        );
      }),
      ke);
  function ke() {
    var e, r;
    a(this, ke);
    for (var t = arguments.length, n = Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return (
      ((e = r = m(this, be.call.apply(be, [this].concat(n)))).state = {
        dropdownVisible: !1
      }),
      (r.renderSelectOptions = function() {
        for (
          var e = I(J(r.props.minDate, r.props.locale)),
            t = I(J(r.props.maxDate, r.props.locale)),
            n = [];
          !A(e, t);

        ) {
          var o = e.valueOf();
          n.push(
            h.createElement(
              "option",
              { key: o, value: o },
              N(e, r.props.dateFormat)
            )
          ),
            L(e, 1);
        }
        return n;
      }),
      (r.onSelectChange = function(e) {
        r.onChange(e.target.value);
      }),
      (r.renderSelectMode = function() {
        return h.createElement(
          "select",
          {
            value: I(r.props.date).valueOf(),
            className: "react-datepicker__month-year-select",
            onChange: r.onSelectChange
          },
          r.renderSelectOptions()
        );
      }),
      (r.renderReadView = function(e) {
        var t = N(J(C(r.props.date), r.props.locale), r.props.dateFormat);
        return h.createElement(
          "div",
          {
            key: "read",
            style: { visibility: e ? "visible" : "hidden" },
            className: "react-datepicker__month-year-read-view",
            onClick: function(e) {
              return r.toggleDropdown(e);
            }
          },
          h.createElement("span", {
            className: "react-datepicker__month-year-read-view--down-arrow"
          }),
          h.createElement(
            "span",
            {
              className:
                "react-datepicker__month-year-read-view--selected-month-year"
            },
            t
          )
        );
      }),
      (r.renderDropdown = function() {
        return h.createElement(ve, {
          key: "dropdown",
          ref: "options",
          date: r.props.date,
          dateFormat: r.props.dateFormat,
          onChange: r.onChange,
          onCancel: r.toggleDropdown,
          minDate: J(r.props.minDate, r.props.locale),
          maxDate: J(r.props.maxDate, r.props.locale),
          scrollableMonthYearDropdown: r.props.scrollableMonthYearDropdown
        });
      }),
      (r.renderScrollMode = function() {
        var e = r.state.dropdownVisible,
          t = [r.renderReadView(!e)];
        return e && t.unshift(r.renderDropdown()), t;
      }),
      (r.onChange = function(e) {
        r.toggleDropdown();
        var t = C(parseInt(e));
        (K(r.props.date, t) && U(r.props.date, t)) || r.props.onChange(t);
      }),
      (r.toggleDropdown = function() {
        return r.setState({ dropdownVisible: !r.state.dropdownVisible });
      }),
      m(r, e)
    );
  }
  we.propTypes = {
    dropdownMode: t.oneOf(["scroll", "select"]).isRequired,
    dateFormat: t.string.isRequired,
    locale: t.string,
    maxDate: t.object.isRequired,
    minDate: t.object.isRequired,
    date: t.object.isRequired,
    onChange: t.func.isRequired,
    scrollableMonthYearDropdown: t.bool
  };
  var Ce,
    Se =
      (s(_e, (Ce = h.Component)),
      (_e.prototype.render = function() {
        return h.createElement(
          "div",
          {
            className: this.getClassNames(this.props.day),
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            "aria-label": "day-" + F(this.props.day),
            role: "option"
          },
          this.props.renderDayContents
            ? this.props.renderDayContents(F(this.props.day))
            : F(this.props.day)
        );
      }),
      _e);
  function _e() {
    var e, i;
    a(this, _e);
    for (var t = arguments.length, n = Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return (
      ((e = i = m(
        this,
        Ce.call.apply(Ce, [this].concat(n))
      )).handleClick = function(e) {
        !i.isDisabled() && i.props.onClick && i.props.onClick(e);
      }),
      (i.handleMouseEnter = function(e) {
        !i.isDisabled() && i.props.onMouseEnter && i.props.onMouseEnter(e);
      }),
      (i.isSameDay = function(e) {
        return z(i.props.day, e);
      }),
      (i.isKeyboardSelected = function() {
        return (
          !i.props.disabledKeyboardNavigation &&
          !i.props.inline &&
          !i.isSameDay(i.props.selected) &&
          i.isSameDay(i.props.preSelection)
        );
      }),
      (i.isDisabled = function() {
        return Q(i.props.day, i.props);
      }),
      (i.getHighLightedClass = function(e) {
        var t = i.props,
          n = t.highlightDates;
        if (!n) return !1;
        var o = t.day.format("MM.DD.YYYY");
        return n.get(o);
      }),
      (i.isInRange = function() {
        var e = i.props,
          t = e.startDate,
          n = e.endDate;
        return !(!t || !n) && G(e.day, t, n);
      }),
      (i.isInSelectingRange = function() {
        var e = i.props,
          t = e.day,
          n = e.selectsStart,
          o = e.selectsEnd,
          r = e.selectingDate,
          a = e.startDate,
          s = e.endDate;
        return (
          !((!n && !o) || !r || i.isDisabled()) &&
          (n && s && r.isSameOrBefore(s)
            ? G(t, r, s)
            : !!(o && a && r.isSameOrAfter(a)) && G(t, a, r))
        );
      }),
      (i.isSelectingRangeStart = function() {
        if (!i.isInSelectingRange()) return !1;
        var e = i.props,
          t = e.day;
        return z(t, e.selectsStart ? e.selectingDate : e.startDate);
      }),
      (i.isSelectingRangeEnd = function() {
        if (!i.isInSelectingRange()) return !1;
        var e = i.props,
          t = e.day;
        return z(t, e.selectsEnd ? e.selectingDate : e.endDate);
      }),
      (i.isRangeStart = function() {
        var e = i.props,
          t = e.startDate;
        return !(!t || !e.endDate) && z(t, e.day);
      }),
      (i.isRangeEnd = function() {
        var e = i.props,
          t = e.endDate;
        return !(!e.startDate || !t) && z(t, e.day);
      }),
      (i.isWeekend = function() {
        var e = w(i.props.day, "day");
        return 0 === e || 6 === e;
      }),
      (i.isOutsideMonth = function() {
        return void 0 !== i.props.month && i.props.month !== Y(i.props.day);
      }),
      (i.getClassNames = function(e) {
        var t = i.props.dayClassName ? i.props.dayClassName(e) : void 0;
        return d(
          "react-datepicker__day",
          t,
          "react-datepicker__day--" + y[i.props.day.isoWeekday()],
          {
            "react-datepicker__day--disabled": i.isDisabled(),
            "react-datepicker__day--selected": i.isSameDay(i.props.selected),
            "react-datepicker__day--keyboard-selected": i.isKeyboardSelected(),
            "react-datepicker__day--range-start": i.isRangeStart(),
            "react-datepicker__day--range-end": i.isRangeEnd(),
            "react-datepicker__day--in-range": i.isInRange(),
            "react-datepicker__day--in-selecting-range": i.isInSelectingRange(),
            "react-datepicker__day--selecting-range-start": i.isSelectingRangeStart(),
            "react-datepicker__day--selecting-range-end": i.isSelectingRangeEnd(),
            "react-datepicker__day--today": i.isSameDay(S(i.props.utcOffset)),
            "react-datepicker__day--weekend": i.isWeekend(),
            "react-datepicker__day--outside-month": i.isOutsideMonth()
          },
          i.getHighLightedClass("react-datepicker__day--highlighted")
        );
      }),
      m(i, e)
    );
  }
  Se.propTypes = {
    disabledKeyboardNavigation: t.bool,
    day: t.object.isRequired,
    dayClassName: t.func,
    endDate: t.object,
    highlightDates: t.instanceOf(Map),
    inline: t.bool,
    month: t.number,
    onClick: t.func,
    onMouseEnter: t.func,
    preSelection: t.object,
    selected: t.object,
    selectingDate: t.object,
    selectsEnd: t.bool,
    selectsStart: t.bool,
    startDate: t.object,
    utcOffset: t.oneOfType([t.number, t.string]),
    renderDayContents: t.func
  };
  var Me,
    Ne =
      (s(Oe, (Me = h.Component)),
      (Oe.prototype.render = function() {
        return h.createElement(
          "div",
          {
            className: d({
              "react-datepicker__week-number": !0,
              "react-datepicker__week-number--clickable": !!this.props.onClick
            }),
            "aria-label": "week-" + this.props.weekNumber,
            onClick: this.handleClick
          },
          this.props.weekNumber
        );
      }),
      Oe);
  function Oe() {
    var e, t;
    a(this, Oe);
    for (var n = arguments.length, o = Array(n), r = 0; r < n; r++)
      o[r] = arguments[r];
    return (
      ((e = t = m(
        this,
        Me.call.apply(Me, [this].concat(o))
      )).handleClick = function(e) {
        t.props.onClick && t.props.onClick(e);
      }),
      m(t, e)
    );
  }
  Ne.propTypes = { weekNumber: t.number.isRequired, onClick: t.func };
  var Te,
    Ee =
      (s(xe, (Te = h.Component)),
      (xe.prototype.render = function() {
        return h.createElement(
          "div",
          { className: "react-datepicker__week" },
          this.renderDays()
        );
      }),
      xe);
  function xe() {
    var e, r;
    a(this, xe);
    for (var t = arguments.length, n = Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return (
      ((e = r = m(
        this,
        Te.call.apply(Te, [this].concat(n))
      )).handleDayClick = function(e, t) {
        r.props.onDayClick && r.props.onDayClick(e, t);
      }),
      (r.handleDayMouseEnter = function(e) {
        r.props.onDayMouseEnter && r.props.onDayMouseEnter(e);
      }),
      (r.handleWeekClick = function(e, t, n) {
        "function" == typeof r.props.onWeekSelect &&
          r.props.onWeekSelect(e, t, n);
      }),
      (r.formatWeekNumber = function(e) {
        return r.props.formatWeekNumber
          ? r.props.formatWeekNumber(e)
          : w(e, "week");
      }),
      (r.renderDays = function() {
        var n = R(_(r.props.day)),
          e = [],
          t = r.formatWeekNumber(n);
        if (r.props.showWeekNumber) {
          var o = r.props.onWeekSelect
            ? r.handleWeekClick.bind(r, n, t)
            : void 0;
          e.push(h.createElement(Ne, { key: "W", weekNumber: t, onClick: o }));
        }
        return e.concat(
          [0, 1, 2, 3, 4, 5, 6].map(function(e) {
            var t = B(_(n), e);
            return h.createElement(Se, {
              key: e,
              day: t,
              month: r.props.month,
              onClick: r.handleDayClick.bind(r, t),
              onMouseEnter: r.handleDayMouseEnter.bind(r, t),
              minDate: r.props.minDate,
              maxDate: r.props.maxDate,
              excludeDates: r.props.excludeDates,
              includeDates: r.props.includeDates,
              inline: r.props.inline,
              highlightDates: r.props.highlightDates,
              selectingDate: r.props.selectingDate,
              filterDate: r.props.filterDate,
              preSelection: r.props.preSelection,
              selected: r.props.selected,
              selectsStart: r.props.selectsStart,
              selectsEnd: r.props.selectsEnd,
              startDate: r.props.startDate,
              endDate: r.props.endDate,
              dayClassName: r.props.dayClassName,
              utcOffset: r.props.utcOffset,
              renderDayContents: r.props.renderDayContents,
              disabledKeyboardNavigation: r.props.disabledKeyboardNavigation
            });
          })
        );
      }),
      m(r, e)
    );
  }
  Ee.propTypes = {
    disabledKeyboardNavigation: t.bool,
    day: t.object.isRequired,
    dayClassName: t.func,
    endDate: t.object,
    excludeDates: t.array,
    filterDate: t.func,
    formatWeekNumber: t.func,
    highlightDates: t.instanceOf(Map),
    includeDates: t.array,
    inline: t.bool,
    maxDate: t.object,
    minDate: t.object,
    month: t.number,
    onDayClick: t.func,
    onDayMouseEnter: t.func,
    onWeekSelect: t.func,
    preSelection: t.object,
    selected: t.object,
    selectingDate: t.object,
    selectsEnd: t.bool,
    selectsStart: t.bool,
    showWeekNumber: t.bool,
    startDate: t.object,
    utcOffset: t.oneOfType([t.number, t.string]),
    renderDayContents: t.func
  };
  var je,
    Ye =
      (s(Pe, (je = h.Component)),
      (Pe.prototype.render = function() {
        return h.createElement(
          "div",
          {
            className: this.getClassNames(),
            onMouseLeave: this.handleMouseLeave,
            role: "listbox",
            "aria-label": "month-" + this.props.day.format("YYYY-MM")
          },
          this.renderWeeks()
        );
      }),
      Pe);
  function Pe() {
    var e, i;
    a(this, Pe);
    for (var t = arguments.length, n = Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return (
      ((e = i = m(
        this,
        je.call.apply(je, [this].concat(n))
      )).handleDayClick = function(e, t) {
        i.props.onDayClick && i.props.onDayClick(e, t);
      }),
      (i.handleDayMouseEnter = function(e) {
        i.props.onDayMouseEnter && i.props.onDayMouseEnter(e);
      }),
      (i.handleMouseLeave = function() {
        i.props.onMouseLeave && i.props.onMouseLeave();
      }),
      (i.isWeekInMonth = function(e) {
        var t = i.props.day,
          n = B(_(e), 6);
        return U(e, t) || U(n, t);
      }),
      (i.renderWeeks = function() {
        for (
          var e = [],
            t = i.props.fixedHeight,
            n = R(I(_(i.props.day))),
            o = 0,
            r = !1;
          e.push(
            h.createElement(Ee, {
              key: o,
              day: n,
              month: Y(i.props.day),
              onDayClick: i.handleDayClick,
              onDayMouseEnter: i.handleDayMouseEnter,
              onWeekSelect: i.props.onWeekSelect,
              formatWeekNumber: i.props.formatWeekNumber,
              minDate: i.props.minDate,
              maxDate: i.props.maxDate,
              excludeDates: i.props.excludeDates,
              includeDates: i.props.includeDates,
              inline: i.props.inline,
              highlightDates: i.props.highlightDates,
              selectingDate: i.props.selectingDate,
              filterDate: i.props.filterDate,
              preSelection: i.props.preSelection,
              selected: i.props.selected,
              selectsStart: i.props.selectsStart,
              selectsEnd: i.props.selectsEnd,
              showWeekNumber: i.props.showWeekNumbers,
              startDate: i.props.startDate,
              endDate: i.props.endDate,
              dayClassName: i.props.dayClassName,
              utcOffset: i.props.utcOffset,
              disabledKeyboardNavigation: i.props.disabledKeyboardNavigation,
              renderDayContents: i.props.renderDayContents
            })
          ),
            !r;

        ) {
          o++, (n = q(_(n), 1));
          var a = t && 6 <= o,
            s = !t && !i.isWeekInMonth(n);
          if (a || s) {
            if (!i.props.peekNextMonth) break;
            r = !0;
          }
        }
        return e;
      }),
      (i.getClassNames = function() {
        var e = i.props;
        return d("react-datepicker__month", {
          "react-datepicker__month--selecting-range":
            e.selectingDate && (e.selectsStart || e.selectsEnd)
        });
      }),
      m(i, e)
    );
  }
  Ye.propTypes = {
    disabledKeyboardNavigation: t.bool,
    day: t.object.isRequired,
    dayClassName: t.func,
    endDate: t.object,
    excludeDates: t.array,
    filterDate: t.func,
    fixedHeight: t.bool,
    formatWeekNumber: t.func,
    highlightDates: t.instanceOf(Map),
    includeDates: t.array,
    inline: t.bool,
    maxDate: t.object,
    minDate: t.object,
    onDayClick: t.func,
    onDayMouseEnter: t.func,
    onMouseLeave: t.func,
    onWeekSelect: t.func,
    peekNextMonth: t.bool,
    preSelection: t.object,
    selected: t.object,
    selectingDate: t.object,
    selectsEnd: t.bool,
    selectsStart: t.bool,
    showWeekNumbers: t.bool,
    startDate: t.object,
    utcOffset: t.oneOfType([t.number, t.string]),
    renderDayContents: t.func
  };
  var Fe,
    Re =
      (s(Ie, (Fe = h.Component)),
      (Ie.prototype.componentDidMount = function() {
        this.list.scrollTop = Ie.calcCenterPosition(
          this.props.monthRef
            ? this.props.monthRef.clientHeight - this.header.clientHeight
            : this.list.clientHeight,
          this.centerLi
        );
      }),
      (Ie.prototype.render = function() {
        var t = this,
          e = null;
        return (
          this.props.monthRef &&
            this.header &&
            (e = this.props.monthRef.clientHeight - this.header.clientHeight),
          h.createElement(
            "div",
            {
              className:
                "react-datepicker__time-container " +
                (this.props.todayButton
                  ? "react-datepicker__time-container--with-today-button"
                  : "")
            },
            h.createElement(
              "div",
              {
                className:
                  "react-datepicker__header react-datepicker__header--time",
                ref: function(e) {
                  t.header = e;
                }
              },
              h.createElement(
                "div",
                { className: "react-datepicker-time__header" },
                this.props.timeCaption
              )
            ),
            h.createElement(
              "div",
              { className: "react-datepicker__time" },
              h.createElement(
                "div",
                { className: "react-datepicker__time-box" },
                h.createElement(
                  "ul",
                  {
                    className: "react-datepicker__time-list",
                    ref: function(e) {
                      t.list = e;
                    },
                    style: e ? { height: e } : {}
                  },
                  this.renderTimes.bind(this)()
                )
              )
            )
          )
        );
      }),
      o(Ie, null, [
        {
          key: "defaultProps",
          get: function() {
            return {
              intervals: 30,
              onTimeChange: function() {},
              todayButton: null,
              timeCaption: "Time"
            };
          }
        }
      ]),
      Ie);
  function Ie() {
    var e, u;
    a(this, Ie);
    for (var t = arguments.length, n = Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return (
      ((e = u = m(
        this,
        Fe.call.apply(Fe, [this].concat(n))
      )).handleClick = function(e) {
        ((u.props.minTime || u.props.maxTime) && Z(e, u.props)) ||
          (u.props.excludeTimes && X(e, u.props.excludeTimes)) ||
          (u.props.includeTimes && !X(e, u.props.includeTimes)) ||
          u.props.onChange(e);
      }),
      (u.liClasses = function(e, t, n) {
        var o = ["react-datepicker__time-list-item"];
        return (
          t === j(e) &&
            n === x(e) &&
            o.push("react-datepicker__time-list-item--selected"),
          (((u.props.minTime || u.props.maxTime) && Z(e, u.props)) ||
            (u.props.excludeTimes && X(e, u.props.excludeTimes)) ||
            (u.props.includeTimes && !X(e, u.props.includeTimes))) &&
            o.push("react-datepicker__time-list-item--disabled"),
          u.props.injectTimes &&
            (60 * j(e) + x(e)) % u.props.intervals != 0 &&
            o.push("react-datepicker__time-list-item--injected"),
          o.join(" ")
        );
      }),
      (u.renderTimes = function() {
        for (
          var e = [],
            n = u.props.format ? u.props.format : "hh:mm A",
            t = u.props.intervals,
            o = u.props.selected ? u.props.selected : C(),
            r = j(o),
            a = x(o),
            s = k(C(), "day"),
            i = 1440 / t,
            p =
              u.props.injectTimes &&
              u.props.injectTimes.sort(function(e, t) {
                return e - t;
              }),
            c = 0;
          c < i;
          c++
        ) {
          var l = W(_(s), c * t);
          if ((e.push(l), p)) {
            var d = re(s, l, c, t, p);
            e = e.concat(d);
          }
        }
        return e.map(function(t, e) {
          return h.createElement(
            "li",
            {
              key: e,
              onClick: u.handleClick.bind(u, t),
              className: u.liClasses(t, r, a),
              ref: function(e) {
                ((r === j(t) && a === x(t)) || (r === j(t) && !u.centerLi)) &&
                  (u.centerLi = e);
              }
            },
            N(t, n)
          );
        });
      }),
      m(u, e)
    );
  }
  function We(e) {
    var t = e.children,
      n = e.arrowProps;
    return h.createElement(
      "div",
      { className: e.className },
      h.createElement(
        "div",
        l({ className: "react-datepicker__triangle" }, void 0 === n ? {} : n)
      ),
      t
    );
  }
  (Re.propTypes = {
    format: t.string,
    includeTimes: t.array,
    intervals: t.number,
    selected: t.object,
    onChange: t.func,
    todayButton: t.node,
    minTime: t.object,
    maxTime: t.object,
    excludeTimes: t.array,
    monthRef: t.object,
    timeCaption: t.string,
    injectTimes: t.array
  }),
    (Re.calcCenterPosition = function(e, t) {
      return t.offsetTop - (e / 2 - t.clientHeight / 2);
    }),
    (We.propTypes = {
      className: t.string,
      children: t.node,
      arrowProps: t.object
    });
  var Be,
    qe = [
      "react-datepicker__year-select",
      "react-datepicker__month-select",
      "react-datepicker__month-year-select"
    ],
    Le =
      (s(He, (Be = h.Component)),
      o(He, null, [
        {
          key: "defaultProps",
          get: function() {
            return {
              onDropdownFocus: function() {},
              monthsShown: 1,
              forceShowMonthNavigation: !1,
              timeCaption: "Time",
              previousMonthButtonLabel: "Previous Month",
              nextMonthButtonLabel: "Next Month"
            };
          }
        }
      ]),
      (He.prototype.componentDidMount = function() {
        var e = this;
        this.props.showTimeSelect &&
          (this.assignMonthContainer = void e.setState({
            monthContainer: e.monthContainer
          }));
      }),
      (He.prototype.componentDidUpdate = function(e) {
        this.props.preSelection && !z(this.props.preSelection, e.preSelection)
          ? this.setState({ date: this.localizeDate(this.props.preSelection) })
          : this.props.openToDate &&
            !z(this.props.openToDate, e.openToDate) &&
            this.setState({ date: this.localizeDate(this.props.openToDate) });
      }),
      (He.prototype.render = function() {
        return h.createElement(
          this.props.container || We,
          {
            className: d("react-datepicker", this.props.className, {
              "react-datepicker--time-only": this.props.showTimeSelectOnly
            })
          },
          this.renderPreviousMonthButton(),
          this.renderNextMonthButton(),
          this.renderMonths(),
          this.renderTodayButton(),
          this.renderTimeSection(),
          this.props.children
        );
      }),
      He);
  function He(e) {
    a(this, He);
    var c = m(this, Be.call(this, e));
    return (
      (c.handleClickOutside = function(e) {
        c.props.onClickOutside(e);
      }),
      (c.handleDropdownFocus = function(e) {
        !(function(e) {
          var t = (
            (0 < arguments.length && void 0 !== e ? e : {}).className || ""
          ).split(/\s+/);
          return qe.some(function(e) {
            return !!~t.indexOf(e);
          });
        })(e.target) || c.props.onDropdownFocus();
      }),
      (c.getDateInView = function() {
        var e = c.props,
          t = e.preSelection,
          n = e.selected,
          o = e.openToDate,
          r = e.utcOffset,
          a = te(c.props),
          s = ne(c.props),
          i = S(r),
          p = o || n || t;
        return p || (a && V(i, a) ? a : s && A(i, s) ? s : i);
      }),
      (c.localizeDate = function(e) {
        return J(e, c.props.locale);
      }),
      (c.increaseMonth = function() {
        c.setState({ date: L(_(c.state.date), 1) }, function() {
          return c.handleMonthChange(c.state.date);
        });
      }),
      (c.decreaseMonth = function() {
        c.setState({ date: H(_(c.state.date), 1) }, function() {
          return c.handleMonthChange(c.state.date);
        });
      }),
      (c.handleDayClick = function(e, t) {
        return c.props.onSelect(e, t);
      }),
      (c.handleDayMouseEnter = function(e) {
        return c.setState({ selectingDate: e });
      }),
      (c.handleMonthMouseLeave = function() {
        return c.setState({ selectingDate: null });
      }),
      (c.handleYearChange = function(e) {
        c.props.onYearChange && c.props.onYearChange(e);
      }),
      (c.handleMonthChange = function(e) {
        c.props.onMonthChange && c.props.onMonthChange(e),
          c.props.adjustDateOnChange &&
            (c.props.onSelect && c.props.onSelect(e),
            c.props.setOpen && c.props.setOpen(!0));
      }),
      (c.handleMonthYearChange = function(e) {
        c.handleYearChange(e), c.handleMonthChange(e);
      }),
      (c.changeYear = function(e) {
        c.setState({ date: E(_(c.state.date), e) }, function() {
          return c.handleYearChange(c.state.date);
        });
      }),
      (c.changeMonth = function(e) {
        c.setState({ date: T(_(c.state.date), e) }, function() {
          return c.handleMonthChange(c.state.date);
        });
      }),
      (c.changeMonthYear = function(e) {
        c.setState({ date: E(T(_(c.state.date), Y(e)), P(e)) }, function() {
          return c.handleMonthYearChange(c.state.date);
        });
      }),
      (c.header = function() {
        var r = R(
            _(
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : c.state.date
            )
          ),
          e = [];
        return (
          c.props.showWeekNumbers &&
            e.push(
              h.createElement(
                "div",
                { key: "W", className: "react-datepicker__day-name" },
                c.props.weekLabel || "#"
              )
            ),
          e.concat(
            [0, 1, 2, 3, 4, 5, 6].map(function(e) {
              var t = B(_(r), e),
                n = t.localeData(),
                o = c.formatWeekday(n, t);
              return h.createElement(
                "div",
                { key: e, className: "react-datepicker__day-name" },
                o
              );
            })
          )
        );
      }),
      (c.formatWeekday = function(e, t) {
        return c.props.formatWeekDay
          ? (0, c.props.formatWeekDay)(e.weekdays(t))
          : c.props.useWeekdaysShort
          ? e.weekdaysShort(t)
          : e.weekdaysMin(t);
      }),
      (c.renderPreviousMonthButton = function() {
        if (!c.props.renderCustomHeader) {
          var e = $(c.state.date, "month", c.props);
          if (
            (c.props.forceShowMonthNavigation ||
              c.props.showDisabledMonthNavigation ||
              !e) &&
            !c.props.showTimeSelectOnly
          ) {
            var t = [
                "react-datepicker__navigation",
                "react-datepicker__navigation--previous"
              ],
              n = c.decreaseMonth;
            return (
              e &&
                c.props.showDisabledMonthNavigation &&
                (t.push("react-datepicker__navigation--previous--disabled"),
                (n = null)),
              h.createElement(
                "button",
                {
                  type: "button",
                  className: t.join(" "),
                  onClick: n,
                  "aria-label": "Previous Month"
                },
                c.props.previousMonthButtonLabel
              )
            );
          }
        }
      }),
      (c.renderNextMonthButton = function() {
        if (!c.props.renderCustomHeader) {
          var e = ee(c.state.date, "month", c.props);
          if (
            (c.props.forceShowMonthNavigation ||
              c.props.showDisabledMonthNavigation ||
              !e) &&
            !c.props.showTimeSelectOnly
          ) {
            var t = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--next"
            ];
            c.props.showTimeSelect &&
              t.push("react-datepicker__navigation--next--with-time"),
              c.props.todayButton &&
                t.push("react-datepicker__navigation--next--with-today-button");
            var n = c.increaseMonth;
            return (
              e &&
                c.props.showDisabledMonthNavigation &&
                (t.push("react-datepicker__navigation--next--disabled"),
                (n = null)),
              h.createElement(
                "button",
                {
                  type: "button",
                  className: t.join(" "),
                  onClick: n,
                  "aria-label": "Next Month"
                },
                c.props.nextMonthButtonLabel
              )
            );
          }
        }
      }),
      (c.renderCurrentMonth = function() {
        var e =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : c.state.date,
          t = ["react-datepicker__current-month"];
        return (
          c.props.showYearDropdown &&
            t.push("react-datepicker__current-month--hasYearDropdown"),
          c.props.showMonthDropdown &&
            t.push("react-datepicker__current-month--hasMonthDropdown"),
          c.props.showMonthYearDropdown &&
            t.push("react-datepicker__current-month--hasMonthYearDropdown"),
          h.createElement(
            "div",
            { className: t.join(" ") },
            N(e, c.props.dateFormat)
          )
        );
      }),
      (c.renderYearDropdown = function() {
        if (
          c.props.showYearDropdown &&
          !(0 < arguments.length && void 0 !== arguments[0] && arguments[0])
        )
          return h.createElement(ie, {
            adjustDateOnChange: c.props.adjustDateOnChange,
            date: c.state.date,
            onSelect: c.props.onSelect,
            setOpen: c.props.setOpen,
            dropdownMode: c.props.dropdownMode,
            onChange: c.changeYear,
            minDate: c.props.minDate,
            maxDate: c.props.maxDate,
            year: P(c.state.date),
            scrollableYearDropdown: c.props.scrollableYearDropdown,
            yearDropdownItemNumber: c.props.yearDropdownItemNumber
          });
      }),
      (c.renderMonthDropdown = function() {
        if (
          c.props.showMonthDropdown &&
          !(0 < arguments.length && void 0 !== arguments[0] && arguments[0])
        )
          return h.createElement(me, {
            dropdownMode: c.props.dropdownMode,
            locale: c.props.locale,
            dateFormat: c.props.dateFormat,
            onChange: c.changeMonth,
            month: Y(c.state.date),
            useShortMonthInDropdown: c.props.useShortMonthInDropdown
          });
      }),
      (c.renderMonthYearDropdown = function() {
        if (
          c.props.showMonthYearDropdown &&
          !(0 < arguments.length && void 0 !== arguments[0] && arguments[0])
        )
          return h.createElement(we, {
            dropdownMode: c.props.dropdownMode,
            locale: c.props.locale,
            dateFormat: c.props.dateFormat,
            onChange: c.changeMonthYear,
            minDate: c.props.minDate,
            maxDate: c.props.maxDate,
            date: c.state.date,
            scrollableMonthYearDropdown: c.props.scrollableMonthYearDropdown
          });
      }),
      (c.renderTodayButton = function() {
        if (c.props.todayButton && !c.props.showTimeSelectOnly)
          return h.createElement(
            "div",
            {
              className: "react-datepicker__today-button",
              onClick: function(e) {
                return c.props.onSelect(k(S(c.props.utcOffset), "date"), e);
              }
            },
            c.props.todayButton
          );
      }),
      (c.renderDefaultHeader = function(e) {
        var t = e.monthDate,
          n = e.i;
        return h.createElement(
          "div",
          { className: "react-datepicker__header" },
          c.renderCurrentMonth(t),
          h.createElement(
            "div",
            {
              className:
                "react-datepicker__header__dropdown react-datepicker__header__dropdown--" +
                c.props.dropdownMode,
              onFocus: c.handleDropdownFocus
            },
            c.renderMonthDropdown(0 !== n),
            c.renderMonthYearDropdown(0 !== n),
            c.renderYearDropdown(0 !== n)
          ),
          h.createElement(
            "div",
            { className: "react-datepicker__day-names" },
            c.header(t)
          )
        );
      }),
      (c.renderCustomHeader = function(e) {
        var t = e.monthDate;
        if (0 !== e.i) return null;
        var n = $(c.state.date, "month", c.props),
          o = ee(c.state.date, "month", c.props);
        return h.createElement(
          "div",
          {
            className:
              "react-datepicker__header react-datepicker__header--custom",
            onFocus: c.props.onDropdownFocus
          },
          c.props.renderCustomHeader(
            l({}, c.state, {
              changeMonth: c.changeMonth,
              changeYear: c.changeYear,
              decreaseMonth: c.decreaseMonth,
              increaseMonth: c.increaseMonth,
              prevMonthButtonDisabled: n,
              nextMonthButtonDisabled: o
            })
          ),
          h.createElement(
            "div",
            { className: "react-datepicker__day-names" },
            c.header(t)
          )
        );
      }),
      (c.renderMonths = function() {
        if (!c.props.showTimeSelectOnly) {
          for (var e = [], t = 0; t < c.props.monthsShown; ++t) {
            var n = L(_(c.state.date), t);
            e.push(
              h.createElement(
                "div",
                {
                  key: "month-" + t,
                  ref: function(e) {
                    c.monthContainer = e;
                  },
                  className: "react-datepicker__month-container"
                },
                c.props.renderCustomHeader
                  ? c.renderCustomHeader({ monthDate: n, i: t })
                  : c.renderDefaultHeader({ monthDate: n, i: t }),
                h.createElement(Ye, {
                  day: n,
                  dayClassName: c.props.dayClassName,
                  onDayClick: c.handleDayClick,
                  onDayMouseEnter: c.handleDayMouseEnter,
                  onMouseLeave: c.handleMonthMouseLeave,
                  onWeekSelect: c.props.onWeekSelect,
                  formatWeekNumber: c.props.formatWeekNumber,
                  minDate: c.props.minDate,
                  maxDate: c.props.maxDate,
                  excludeDates: c.props.excludeDates,
                  highlightDates: c.props.highlightDates,
                  selectingDate: c.state.selectingDate,
                  includeDates: c.props.includeDates,
                  inline: c.props.inline,
                  fixedHeight: c.props.fixedHeight,
                  filterDate: c.props.filterDate,
                  preSelection: c.props.preSelection,
                  selected: c.props.selected,
                  selectsStart: c.props.selectsStart,
                  selectsEnd: c.props.selectsEnd,
                  showWeekNumbers: c.props.showWeekNumbers,
                  startDate: c.props.startDate,
                  endDate: c.props.endDate,
                  peekNextMonth: c.props.peekNextMonth,
                  utcOffset: c.props.utcOffset,
                  renderDayContents: c.props.renderDayContents,
                  disabledKeyboardNavigation: c.props.disabledKeyboardNavigation
                })
              )
            );
          }
          return e;
        }
      }),
      (c.renderTimeSection = function() {
        if (
          c.props.showTimeSelect &&
          (c.state.monthContainer || c.props.showTimeSelectOnly)
        )
          return h.createElement(Re, {
            selected: c.props.selected,
            onChange: c.props.onTimeChange,
            format: c.props.timeFormat,
            includeTimes: c.props.includeTimes,
            intervals: c.props.timeIntervals,
            minTime: c.props.minTime,
            maxTime: c.props.maxTime,
            excludeTimes: c.props.excludeTimes,
            timeCaption: c.props.timeCaption,
            todayButton: c.props.todayButton,
            showMonthDropdown: c.props.showMonthDropdown,
            showMonthYearDropdown: c.props.showMonthYearDropdown,
            showYearDropdown: c.props.showYearDropdown,
            withPortal: c.props.withPortal,
            monthRef: c.state.monthContainer,
            injectTimes: c.props.injectTimes
          });
      }),
      (c.state = {
        date: c.localizeDate(c.getDateInView()),
        selectingDate: null,
        monthContainer: null
      }),
      c
    );
  }
  Le.propTypes = {
    adjustDateOnChange: t.bool,
    className: t.string,
    children: t.node,
    container: t.func,
    dateFormat: t.oneOfType([t.string, t.array]).isRequired,
    dayClassName: t.func,
    disabledKeyboardNavigation: t.bool,
    dropdownMode: t.oneOf(["scroll", "select"]),
    endDate: t.object,
    excludeDates: t.array,
    filterDate: t.func,
    fixedHeight: t.bool,
    formatWeekNumber: t.func,
    highlightDates: t.instanceOf(Map),
    includeDates: t.array,
    includeTimes: t.array,
    injectTimes: t.array,
    inline: t.bool,
    locale: t.string,
    maxDate: t.object,
    minDate: t.object,
    monthsShown: t.number,
    onClickOutside: t.func.isRequired,
    onMonthChange: t.func,
    onYearChange: t.func,
    forceShowMonthNavigation: t.bool,
    onDropdownFocus: t.func,
    onSelect: t.func.isRequired,
    onWeekSelect: t.func,
    showTimeSelect: t.bool,
    showTimeSelectOnly: t.bool,
    timeFormat: t.string,
    timeIntervals: t.number,
    onTimeChange: t.func,
    minTime: t.object,
    maxTime: t.object,
    excludeTimes: t.array,
    timeCaption: t.string,
    openToDate: t.object,
    peekNextMonth: t.bool,
    scrollableYearDropdown: t.bool,
    scrollableMonthYearDropdown: t.bool,
    preSelection: t.object,
    selected: t.object,
    selectsEnd: t.bool,
    selectsStart: t.bool,
    showMonthDropdown: t.bool,
    showMonthYearDropdown: t.bool,
    showWeekNumbers: t.bool,
    showYearDropdown: t.bool,
    startDate: t.object,
    todayButton: t.node,
    useWeekdaysShort: t.bool,
    formatWeekDay: t.func,
    withPortal: t.bool,
    utcOffset: t.oneOfType([t.number, t.string]),
    weekLabel: t.string,
    yearDropdownItemNumber: t.number,
    setOpen: t.func,
    useShortMonthInDropdown: t.bool,
    showDisabledMonthNavigation: t.bool,
    previousMonthButtonLabel: t.string,
    nextMonthButtonLabel: t.string,
    renderCustomHeader: t.func,
    renderDayContents: t.func
  };
  var Ve,
    Ae = [
      "bottom",
      "bottom-end",
      "bottom-start",
      "left",
      "left-end",
      "left-start",
      "right",
      "right-end",
      "right-start",
      "top",
      "top-end",
      "top-start"
    ],
    Ke =
      (s(Ue, (Ve = h.Component)),
      (Ue.prototype.render = function() {
        var e = this.props,
          n = e.popperComponent,
          t = e.popperModifiers,
          o = e.popperPlacement,
          r = e.popperProps,
          a = e.targetComponent,
          s = void 0;
        if (!e.hidePopper) {
          var i = d("react-datepicker-popper", e.className);
          s = h.createElement(
            p.Popper,
            l({ modifiers: t, placement: o }, r),
            function(e) {
              var t = e.arrowProps;
              return h.createElement(
                "div",
                l(
                  { ref: e.ref, style: e.style },
                  { className: i, "data-placement": e.placement }
                ),
                h.cloneElement(n, { arrowProps: t })
              );
            }
          );
        }
        return (
          this.props.popperContainer &&
            (s = h.createElement(this.props.popperContainer, {}, s)),
          h.createElement(
            p.Manager,
            null,
            h.createElement(p.Reference, null, function(e) {
              return h.createElement(
                "div",
                { ref: e.ref, className: "react-datepicker-wrapper" },
                a
              );
            }),
            s
          )
        );
      }),
      o(Ue, null, [
        {
          key: "defaultProps",
          get: function() {
            return {
              hidePopper: !0,
              popperModifiers: {
                preventOverflow: {
                  enabled: !0,
                  escapeWithReference: !0,
                  boundariesElement: "viewport"
                }
              },
              popperProps: {},
              popperPlacement: "bottom-start"
            };
          }
        }
      ]),
      Ue);
  function Ue() {
    return a(this, Ue), m(this, Ve.apply(this, arguments));
  }
  Ke.propTypes = {
    className: t.string,
    hidePopper: t.bool,
    popperComponent: t.element,
    popperModifiers: t.object,
    popperPlacement: t.oneOf(Ae),
    popperContainer: t.func,
    popperProps: t.object,
    targetComponent: t.element
  };
  var ze = "react-datepicker-ignore-onclickoutside",
    Ge = n(Le);
  var Je,
    Qe = "Date input not valid.",
    Xe =
      (s(Ze, (Je = h.Component)),
      o(Ze, null, [
        {
          key: "defaultProps",
          get: function() {
            return {
              allowSameDay: !1,
              dateFormat: "L",
              dateFormatCalendar: "MMMM YYYY",
              onChange: function() {},
              disabled: !1,
              disabledKeyboardNavigation: !1,
              dropdownMode: "scroll",
              onFocus: function() {},
              onBlur: function() {},
              onKeyDown: function() {},
              onInputClick: function() {},
              onSelect: function() {},
              onClickOutside: function() {},
              onMonthChange: function() {},
              preventOpenOnFocus: !1,
              onYearChange: function() {},
              onInputError: function() {},
              monthsShown: 1,
              readOnly: !1,
              withPortal: !1,
              shouldCloseOnSelect: !0,
              showTimeSelect: !1,
              timeIntervals: 30,
              timeCaption: "Time",
              previousMonthButtonLabel: "Previous Month",
              nextMonthButtonLabel: "Next month",
              renderDayContents: function(e) {
                return e;
              }
            };
          }
        }
      ]),
      (Ze.prototype.componentDidUpdate = function(e, t) {
        var n, o, r, a;
        e.inline &&
          ((o = this.props.selected),
          (n = e.selected) && o ? Y(n) !== Y(o) || P(n) !== P(o) : n !== o) &&
          this.setPreSelection(this.props.selected),
          e.highlightDates !== this.props.highlightDates &&
            this.setState({ highlightDates: oe(this.props.highlightDates) }),
          !t.focused &&
            ((a = this.props.selected),
            (r = e.selected) && a && !r.isSame(a)) &&
            this.setState({ inputValue: null });
      }),
      (Ze.prototype.componentWillUnmount = function() {
        this.clearPreventFocusTimeout();
      }),
      (Ze.prototype.render = function() {
        var e = this.renderCalendar();
        return this.props.inline && !this.props.withPortal
          ? e
          : this.props.withPortal
          ? h.createElement(
              "div",
              null,
              this.props.inline
                ? null
                : h.createElement(
                    "div",
                    { className: "react-datepicker__input-container" },
                    this.renderDateInput(),
                    this.renderClearButton()
                  ),
              this.state.open || this.props.inline
                ? h.createElement(
                    "div",
                    { className: "react-datepicker__portal" },
                    e
                  )
                : null
            )
          : h.createElement(Ke, {
              className: this.props.popperClassName,
              hidePopper: !this.isCalendarOpen(),
              popperModifiers: this.props.popperModifiers,
              targetComponent: h.createElement(
                "div",
                { className: "react-datepicker__input-container" },
                this.renderDateInput(),
                this.renderClearButton()
              ),
              popperContainer: this.props.popperContainer,
              popperComponent: e,
              popperPlacement: this.props.popperPlacement,
              popperProps: this.props.popperProps
            });
      }),
      Ze);
  function Ze(e) {
    a(this, Ze);
    var l = m(this, Je.call(this, e));
    return (
      (l.getPreSelection = function() {
        return l.props.openToDate
          ? C(l.props.openToDate)
          : l.props.selectsEnd && l.props.startDate
          ? C(l.props.startDate)
          : l.props.selectsStart && l.props.endDate
          ? C(l.props.endDate)
          : S(l.props.utcOffset);
      }),
      (l.calcInitialState = function() {
        var e = l.getPreSelection(),
          t = te(l.props),
          n = ne(l.props),
          o = t && V(e, t) ? t : n && A(e, n) ? n : e;
        return {
          open: l.props.startOpen || !1,
          preventFocus: !1,
          preSelection: l.props.selected ? C(l.props.selected) : o,
          highlightDates: oe(l.props.highlightDates),
          focused: !1
        };
      }),
      (l.clearPreventFocusTimeout = function() {
        l.preventFocusTimeout && clearTimeout(l.preventFocusTimeout);
      }),
      (l.setFocus = function() {
        l.input && l.input.focus && l.input.focus();
      }),
      (l.setBlur = function() {
        l.input && l.input.blur && l.input.blur(),
          l.props.onBlur && l.props.onBlur(),
          l.cancelFocusInput();
      }),
      (l.setOpen = function(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
        l.setState(
          {
            open: e,
            preSelection:
              e && l.state.open
                ? l.state.preSelection
                : l.calcInitialState().preSelection,
            lastPreSelectChange: et
          },
          function() {
            e ||
              l.setState(
                function(e) {
                  return { focused: !!t && e.focused };
                },
                function() {
                  t || l.setBlur(), l.setState({ inputValue: null });
                }
              );
          }
        );
      }),
      (l.inputOk = function() {
        return M(l.state.preSelection) || u.isDate(l.state.preSelection);
      }),
      (l.isCalendarOpen = function() {
        return void 0 === l.props.open
          ? l.state.open && !l.props.disabled && !l.props.readOnly
          : l.props.open;
      }),
      (l.handleFocus = function(e) {
        l.state.preventFocus ||
          (l.props.onFocus(e),
          l.props.preventOpenOnFocus || l.props.readOnly || l.setOpen(!0)),
          l.setState({ focused: !0 });
      }),
      (l.cancelFocusInput = function() {
        clearTimeout(l.inputFocusTimeout), (l.inputFocusTimeout = null);
      }),
      (l.deferFocusInput = function() {
        l.cancelFocusInput(),
          (l.inputFocusTimeout = setTimeout(function() {
            return l.setFocus();
          }, 1));
      }),
      (l.handleDropdownFocus = function() {
        l.cancelFocusInput();
      }),
      (l.handleBlur = function(e) {
        l.state.open && !l.props.withPortal
          ? l.deferFocusInput()
          : l.props.onBlur(e),
          l.setState({ focused: !1 });
      }),
      (l.handleCalendarClickOutside = function(e) {
        l.props.inline || l.setOpen(!1),
          l.props.onClickOutside(e),
          l.props.withPortal && e.preventDefault();
      }),
      (l.handleChange = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var o = t[0];
        if (
          !l.props.onChangeRaw ||
          (l.props.onChangeRaw.apply(l, t),
          "function" == typeof o.isDefaultPrevented && !o.isDefaultPrevented())
        ) {
          l.setState({ inputValue: o.target.value, lastPreSelectChange: $e });
          var r,
            a,
            s = (a = u(
              o.target.value,
              (r = l.props).dateFormat,
              r.locale || u.locale(),
              !0
            )).isValid()
              ? a
              : null;
          (!s && o.target.value) || l.setSelected(s, o, !0);
        }
      }),
      (l.handleSelect = function(e, t) {
        l.setState({ preventFocus: !0 }, function() {
          return (
            (l.preventFocusTimeout = setTimeout(function() {
              return l.setState({ preventFocus: !1 });
            }, 50)),
            l.preventFocusTimeout
          );
        }),
          l.setSelected(e, t),
          !l.props.shouldCloseOnSelect || l.props.showTimeSelect
            ? l.setPreSelection(e)
            : l.props.inline || l.setOpen(!1);
      }),
      (l.setSelected = function(e, t, n) {
        var o = e;
        if (null !== o && Q(o, l.props))
          !(function(e, t) {
            var n = 1 < arguments.length && void 0 !== t ? t : {},
              o = n.minDate,
              r = n.maxDate;
            return (o && e.isBefore(o, "day")) || (r && e.isAfter(r, "day"));
          })(o, l.props) || (l.props.onChange(e, t), l.props.onSelect(o, t));
        else {
          if (!z(l.props.selected, o) || l.props.allowSameDay) {
            if (null !== o) {
              if (l.props.selected) {
                var r = l.props.selected;
                n && (r = C(o)),
                  (o = O(C(o), {
                    hour: j(r),
                    minute: x(r),
                    second: w(r, "second")
                  }));
              }
              l.props.inline || l.setState({ preSelection: o });
            }
            l.props.onChange(o, t);
          }
          l.props.onSelect(o, t), n || l.setState({ inputValue: null });
        }
      }),
      (l.setPreSelection = function(e) {
        (void 0 !== l.props.minDate &&
          void 0 !== l.props.maxDate &&
          e &&
          !G(e, l.props.minDate, l.props.maxDate)) ||
          l.setState({ preSelection: e });
      }),
      (l.handleTimeChange = function(e) {
        var t = O(
          _(l.props.selected ? l.props.selected : l.getPreSelection()),
          { hour: j(e), minute: x(e) }
        );
        l.setState({ preSelection: t }),
          l.props.onChange(t),
          l.props.shouldCloseOnSelect && l.setOpen(!1),
          l.setState({ inputValue: null });
      }),
      (l.onInputClick = function() {
        l.props.disabled || l.props.readOnly || l.setOpen(!0),
          l.props.onInputClick();
      }),
      (l.onInputKeyDown = function(e) {
        l.props.onKeyDown(e);
        var t = e.key;
        if (l.state.open || l.props.inline || l.props.preventOpenOnFocus) {
          var n = C(l.state.preSelection);
          if ("Enter" === t)
            e.preventDefault(),
              l.inputOk() && l.state.lastPreSelectChange === et
                ? (l.handleSelect(n, e),
                  l.props.shouldCloseOnSelect || l.setPreSelection(n))
                : l.setOpen(!1);
          else if ("Escape" === t)
            e.preventDefault(),
              l.setOpen(!1),
              l.inputOk() || l.props.onInputError({ code: 1, msg: Qe });
          else if ("Tab" === t) l.setOpen(!1, !0);
          else if (!l.props.disabledKeyboardNavigation) {
            var o = void 0;
            switch (t) {
              case "ArrowLeft":
                o = v(n, 1, "days");
                break;
              case "ArrowRight":
                o = B(n, 1);
                break;
              case "ArrowUp":
                o = v(n, 1, "weeks");
                break;
              case "ArrowDown":
                o = q(n, 1);
                break;
              case "PageUp":
                o = H(n, 1);
                break;
              case "PageDown":
                o = L(n, 1);
                break;
              case "Home":
                o = v(n, 1, "years");
                break;
              case "End":
                o = b(n, 1, "years");
            }
            if (!o)
              return void (
                l.props.onInputError &&
                l.props.onInputError({ code: 1, msg: Qe })
              );
            e.preventDefault(),
              l.setState({ lastPreSelectChange: et }),
              l.props.adjustDateOnChange && l.setSelected(o),
              l.setPreSelection(o);
          }
        } else ("ArrowDown" !== t && "ArrowUp" !== t) || l.onInputClick();
      }),
      (l.onClearClick = function(e) {
        e && e.preventDefault && e.preventDefault(),
          l.props.onChange(null, e),
          l.setState({ inputValue: null });
      }),
      (l.clear = function() {
        l.onClearClick();
      }),
      (l.renderCalendar = function() {
        return l.props.inline || l.isCalendarOpen()
          ? h.createElement(
              Ge,
              {
                ref: function(e) {
                  l.calendar = e;
                },
                locale: l.props.locale,
                adjustDateOnChange: l.props.adjustDateOnChange,
                setOpen: l.setOpen,
                dateFormat: l.props.dateFormatCalendar,
                useWeekdaysShort: l.props.useWeekdaysShort,
                formatWeekDay: l.props.formatWeekDay,
                dropdownMode: l.props.dropdownMode,
                selected: l.props.selected,
                preSelection: l.state.preSelection,
                onSelect: l.handleSelect,
                onWeekSelect: l.props.onWeekSelect,
                openToDate: l.props.openToDate,
                minDate: l.props.minDate,
                maxDate: l.props.maxDate,
                selectsStart: l.props.selectsStart,
                selectsEnd: l.props.selectsEnd,
                startDate: l.props.startDate,
                endDate: l.props.endDate,
                excludeDates: l.props.excludeDates,
                filterDate: l.props.filterDate,
                onClickOutside: l.handleCalendarClickOutside,
                formatWeekNumber: l.props.formatWeekNumber,
                highlightDates: l.state.highlightDates,
                includeDates: l.props.includeDates,
                includeTimes: l.props.includeTimes,
                injectTimes: l.props.injectTimes,
                inline: l.props.inline,
                peekNextMonth: l.props.peekNextMonth,
                showMonthDropdown: l.props.showMonthDropdown,
                useShortMonthInDropdown: l.props.useShortMonthInDropdown,
                showMonthYearDropdown: l.props.showMonthYearDropdown,
                showWeekNumbers: l.props.showWeekNumbers,
                showYearDropdown: l.props.showYearDropdown,
                withPortal: l.props.withPortal,
                forceShowMonthNavigation: l.props.forceShowMonthNavigation,
                showDisabledMonthNavigation:
                  l.props.showDisabledMonthNavigation,
                scrollableYearDropdown: l.props.scrollableYearDropdown,
                scrollableMonthYearDropdown:
                  l.props.scrollableMonthYearDropdown,
                todayButton: l.props.todayButton,
                weekLabel: l.props.weekLabel,
                utcOffset: l.props.utcOffset,
                outsideClickIgnoreClass: ze,
                fixedHeight: l.props.fixedHeight,
                monthsShown: l.props.monthsShown,
                onDropdownFocus: l.handleDropdownFocus,
                onMonthChange: l.props.onMonthChange,
                onYearChange: l.props.onYearChange,
                dayClassName: l.props.dayClassName,
                showTimeSelect: l.props.showTimeSelect,
                showTimeSelectOnly: l.props.showTimeSelectOnly,
                onTimeChange: l.handleTimeChange,
                timeFormat: l.props.timeFormat,
                timeIntervals: l.props.timeIntervals,
                minTime: l.props.minTime,
                maxTime: l.props.maxTime,
                excludeTimes: l.props.excludeTimes,
                timeCaption: l.props.timeCaption,
                className: l.props.calendarClassName,
                container: l.props.calendarContainer,
                yearDropdownItemNumber: l.props.yearDropdownItemNumber,
                previousMonthButtonLabel: l.props.previousMonthButtonLabel,
                nextMonthButtonLabel: l.props.nextMonthButtonLabel,
                disabledKeyboardNavigation: l.props.disabledKeyboardNavigation,
                renderCustomHeader: l.props.renderCustomHeader,
                popperProps: l.props.popperProps,
                renderDayContents: l.props.renderDayContents
              },
              l.props.children
            )
          : null;
      }),
      (l.renderDateInput = function() {
        var e,
          t,
          n,
          o,
          r,
          a,
          s = d(l.props.className, (((e = {})[ze] = l.state.open), e)),
          i = l.props.customInput || h.createElement("input", { type: "text" }),
          p = l.props.customInputRef || "ref",
          c =
            "string" == typeof l.props.value
              ? l.props.value
              : "string" == typeof l.state.inputValue
              ? l.state.inputValue
              : ((r = (o = l.props).dateFormat),
                (a = o.locale),
                ((n = l.props.selected) &&
                  n
                    .clone()
                    .locale(a || u.locale())
                    .format(Array.isArray(r) ? r[0] : r)) ||
                  "");
        return h.cloneElement(
          i,
          (((t = {})[p] = function(e) {
            l.input = e;
          }),
          (t.value = c),
          (t.onBlur = l.handleBlur),
          (t.onChange = l.handleChange),
          (t.onClick = l.onInputClick),
          (t.onFocus = l.handleFocus),
          (t.onKeyDown = l.onInputKeyDown),
          (t.id = l.props.id),
          (t.name = l.props.name),
          (t.autoFocus = l.props.autoFocus),
          (t.placeholder = l.props.placeholderText),
          (t.disabled = l.props.disabled),
          (t.autoComplete = l.props.autoComplete),
          (t.className = s),
          (t.title = l.props.title),
          (t.readOnly = l.props.readOnly),
          (t.required = l.props.required),
          (t.tabIndex = l.props.tabIndex),
          t)
        );
      }),
      (l.renderClearButton = function() {
        return l.props.isClearable && null != l.props.selected
          ? h.createElement("button", {
              type: "button",
              className: "react-datepicker__close-icon",
              onClick: l.onClearClick,
              title: l.props.clearButtonTitle,
              tabIndex: -1
            })
          : null;
      }),
      (l.state = l.calcInitialState()),
      l
    );
  }
  Xe.propTypes = {
    adjustDateOnChange: t.bool,
    allowSameDay: t.bool,
    autoComplete: t.string,
    autoFocus: t.bool,
    calendarClassName: t.string,
    calendarContainer: t.func,
    children: t.node,
    className: t.string,
    customInput: t.element,
    customInputRef: t.string,
    dateFormat: t.oneOfType([t.string, t.array]),
    dateFormatCalendar: t.string,
    dayClassName: t.func,
    disabled: t.bool,
    disabledKeyboardNavigation: t.bool,
    dropdownMode: t.oneOf(["scroll", "select"]).isRequired,
    endDate: t.object,
    excludeDates: t.array,
    filterDate: t.func,
    fixedHeight: t.bool,
    formatWeekNumber: t.func,
    highlightDates: t.array,
    id: t.string,
    includeDates: t.array,
    includeTimes: t.array,
    injectTimes: t.array,
    inline: t.bool,
    isClearable: t.bool,
    locale: t.string,
    maxDate: t.object,
    minDate: t.object,
    monthsShown: t.number,
    name: t.string,
    onBlur: t.func,
    onChange: t.func.isRequired,
    onSelect: t.func,
    onWeekSelect: t.func,
    onClickOutside: t.func,
    onChangeRaw: t.func,
    onFocus: t.func,
    onInputClick: t.func,
    onKeyDown: t.func,
    onMonthChange: t.func,
    onYearChange: t.func,
    onInputError: t.func,
    open: t.bool,
    openToDate: t.object,
    peekNextMonth: t.bool,
    placeholderText: t.string,
    popperContainer: t.func,
    popperClassName: t.string,
    popperModifiers: t.object,
    popperPlacement: t.oneOf(Ae),
    popperProps: t.object,
    preventOpenOnFocus: t.bool,
    readOnly: t.bool,
    required: t.bool,
    scrollableYearDropdown: t.bool,
    scrollableMonthYearDropdown: t.bool,
    selected: t.object,
    selectsEnd: t.bool,
    selectsStart: t.bool,
    showMonthDropdown: t.bool,
    showMonthYearDropdown: t.bool,
    showWeekNumbers: t.bool,
    showYearDropdown: t.bool,
    forceShowMonthNavigation: t.bool,
    showDisabledMonthNavigation: t.bool,
    startDate: t.object,
    startOpen: t.bool,
    tabIndex: t.number,
    timeCaption: t.string,
    title: t.string,
    todayButton: t.node,
    useWeekdaysShort: t.bool,
    formatWeekDay: t.func,
    utcOffset: t.oneOfType([t.number, t.string]),
    value: t.string,
    weekLabel: t.string,
    withPortal: t.bool,
    yearDropdownItemNumber: t.number,
    shouldCloseOnSelect: t.bool,
    showTimeSelect: t.bool,
    showTimeSelectOnly: t.bool,
    timeFormat: t.string,
    timeIntervals: t.number,
    minTime: t.object,
    maxTime: t.object,
    excludeTimes: t.array,
    useShortMonthInDropdown: t.bool,
    clearButtonTitle: t.string,
    previousMonthButtonLabel: t.string,
    nextMonthButtonLabel: t.string,
    renderCustomHeader: t.func,
    renderDayContents: t.func
  };
  var $e = "input",
    et = "navigate";
  (e.default = Xe),
    (e.CalendarContainer = We),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
