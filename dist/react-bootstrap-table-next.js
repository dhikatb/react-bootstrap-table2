(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable2"] = factory(require("react"));
	else
		root["ReactBootstrapTable2"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = __webpack_require__(27);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function splitNested(str) {
  return [str].join('.').replace(/\[/g, '.').replace(/\]/g, '').split('.');
} /* eslint no-empty: 0 */
/* eslint no-param-reassign: 0 */
/* eslint prefer-rest-params: 0 */


function contains(list, value) {
  if (_underscore2.default.includes) {
    return _underscore2.default.includes(list, value);
  }

  return list.indexOf(value) > -1;
}

function get(target, field) {
  var directGet = target[field];
  if (directGet !== undefined && directGet !== null) {
    return directGet;
  }

  var pathArray = splitNested(field);
  var result = void 0;
  try {
    result = pathArray.reduce(function (curr, path) {
      return curr[path];
    }, target);
  } catch (e) {}
  return result;
}

function set(target, field, value) {
  var safe = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var pathArray = splitNested(field);
  var level = 0;
  pathArray.reduce(function (a, b) {
    level += 1;
    if (typeof a[b] === 'undefined') {
      if (!safe) throw new Error(a + '.' + b + ' is undefined');
      a[b] = {};
      return a[b];
    }

    if (level === pathArray.length) {
      a[b] = value;
      return value;
    }
    return a[b];
  }, target);
}

function isEmptyObject(obj) {
  if (!_underscore2.default.isObject(obj)) return false;

  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i += 1) {
    if (hasOwnProperty.call(obj, keys[i])) return false;
  }

  return true;
}

function isDefined(value) {
  return typeof value !== 'undefined' && value !== null;
}

function sleep(fn, ms) {
  return setTimeout(function () {
    return fn();
  }, ms);
}

function debounce(func, wait, immediate) {
  var _this = this,
      _arguments = arguments;

  var timeout = void 0;

  return function () {
    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(_this, _arguments);
      }
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait || 0);

    if (callNow) {
      func.apply(_this, _arguments);
    }
  };
}

exports.default = Object.assign(_underscore2.default, {
  get: get,
  set: set,
  isDefined: isDefined,
  isEmptyObject: isEmptyObject,
  sleep: sleep,
  debounce: debounce,
  contains: contains
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(19)();
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  SORT_ASC: 'asc',
  SORT_DESC: 'desc',
  ROW_SELECT_SINGLE: 'radio',
  ROW_SELECT_MULTIPLE: 'checkbox',
  ROW_SELECT_DISABLED: 'ROW_SELECT_DISABLED',
  CHECKBOX_STATUS_CHECKED: 'checked',
  CHECKBOX_STATUS_INDETERMINATE: 'indeterminate',
  CHECKBOX_STATUS_UNCHECKED: 'unchecked',
  INDICATOR_POSITION_LEFT: 'left',
  INDICATOR_POSITION_RIGHT: 'right',
  TYPE_STRING: 'string',
  TYPE_NUMBER: 'number',
  TYPE_BOOLEAN: 'bool',
  TYPE_DATE: 'date',
  FILTERS_POSITION_INLINE: 'inline',
  FILTERS_POSITION_TOP: 'top',
  FILTERS_POSITION_BOTTOM: 'bottom'
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BootstrapContext = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BootstrapContext = exports.BootstrapContext = _react2.default.createContext({
  bootstrap4: false
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRowByRowId = exports.matchRow = undefined;

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matchRow = exports.matchRow = function matchRow(keyField, id) {
  return function (row) {
    return _utils2.default.get(row, keyField) === id;
  };
};

var getRowByRowId = exports.getRowByRowId = function getRowByRowId(data, keyField, id) {
  return data.find(matchRow(keyField, id));
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = ['onClick', 'onDoubleClick', 'onMouseEnter', 'onMouseLeave', 'onContextMenu', 'onAuxClick'];

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(CellEventDelegater, _ExtendBase);

    function CellEventDelegater(props) {
      _classCallCheck(this, CellEventDelegater);

      var _this = _possibleConstructorReturn(this, (CellEventDelegater.__proto__ || Object.getPrototypeOf(CellEventDelegater)).call(this, props));

      _this.createDefaultEventHandler = _this.createDefaultEventHandler.bind(_this);
      return _this;
    }

    _createClass(CellEventDelegater, [{
      key: 'createDefaultEventHandler',
      value: function createDefaultEventHandler(cb) {
        var _this2 = this;

        return function (e) {
          var _props = _this2.props,
              column = _props.column,
              columnIndex = _props.columnIndex,
              index = _props.index;

          cb(e, column, typeof columnIndex !== 'undefined' ? columnIndex : index);
        };
      }
    }, {
      key: 'delegate',
      value: function delegate() {
        var _this3 = this;

        var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newAttrs = _extends({}, attrs);
        Object.keys(attrs).forEach(function (attr) {
          if (_utils2.default.contains(events, attr)) {
            newAttrs[attr] = _this3.createDefaultEventHandler(attrs[attr]);
          }
        });
        return newAttrs;
      }
    }]);

    return CellEventDelegater;
  }(ExtendBase);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _operators = __webpack_require__(9);

var _operators2 = _interopRequireDefault(_operators);

var _selection = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */
/* eslint react/prop-types: 0 */


var SelectionContext = _react2.default.createContext();

var SelectionProvider = function (_React$Component) {
  _inherits(SelectionProvider, _React$Component);

  function SelectionProvider(props) {
    _classCallCheck(this, SelectionProvider);

    var _this = _possibleConstructorReturn(this, (SelectionProvider.__proto__ || Object.getPrototypeOf(SelectionProvider)).call(this, props));

    _this.handleRowSelect = function (rowKey, checked, rowIndex, e) {
      var _this$props = _this.props,
          data = _this$props.data,
          keyField = _this$props.keyField,
          _this$props$selectRow = _this$props.selectRow,
          mode = _this$props$selectRow.mode,
          onSelect = _this$props$selectRow.onSelect;
      var ROW_SELECT_SINGLE = _const2.default.ROW_SELECT_SINGLE;


      var currSelected = [].concat(_toConsumableArray(_this.selected));

      var result = true;
      if (onSelect) {
        var row = _operators2.default.getRowByRowId(data, keyField, rowKey);
        result = onSelect(row, checked, rowIndex, e);
      }

      if (result === true || result === undefined) {
        if (mode === ROW_SELECT_SINGLE) {
          // when select mode is radio
          currSelected = [rowKey];
        } else if (checked) {
          // when select mode is checkbox
          currSelected.push(rowKey);
        } else {
          currSelected = currSelected.filter(function (value) {
            return value !== rowKey;
          });
        }
      }
      _this.selected = currSelected;
      _this.forceUpdate();
    };

    _this.handleAllRowsSelect = function (e, isUnSelect) {
      var _this$props2 = _this.props,
          data = _this$props2.data,
          keyField = _this$props2.keyField,
          _this$props2$selectRo = _this$props2.selectRow,
          onSelectAll = _this$props2$selectRo.onSelectAll,
          nonSelectable = _this$props2$selectRo.nonSelectable;
      var selected = _this.selected;


      var currSelected = void 0;

      if (!isUnSelect) {
        currSelected = selected.concat(_operators2.default.selectableKeys(data, keyField, nonSelectable));
      } else {
        currSelected = selected.filter(function (s) {
          return typeof data.find(function (d) {
            return _utils2.default.get(d, keyField) === s;
          }) === 'undefined';
        });
      }

      var result = void 0;
      if (onSelectAll) {
        result = onSelectAll(!isUnSelect, _operators2.default.getSelectedRows(data, keyField, isUnSelect ? selected : currSelected), e);
        if (Array.isArray(result)) {
          currSelected = result;
        }
      }
      _this.selected = currSelected;
      _this.forceUpdate();
    };

    _this.selected = props.selectRow.selected || [];
    return _this;
  }

  // exposed API


  _createClass(SelectionProvider, [{
    key: 'getSelected',
    value: function getSelected() {
      return this.selected;
    }
  }, {
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.selectRow) {
        this.selected = nextProps.selectRow.selected || this.selected;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _getSelectionSummary = (0, _selection.getSelectionSummary)(this.props.data, this.props.keyField, this.selected),
          allRowsSelected = _getSelectionSummary.allRowsSelected,
          allRowsNotSelected = _getSelectionSummary.allRowsNotSelected;

      var checkedStatus = void 0;

      // checkbox status depending on selected rows counts
      if (allRowsSelected) checkedStatus = _const2.default.CHECKBOX_STATUS_CHECKED;else if (allRowsNotSelected) checkedStatus = _const2.default.CHECKBOX_STATUS_UNCHECKED;else checkedStatus = _const2.default.CHECKBOX_STATUS_INDETERMINATE;

      return _react2.default.createElement(
        SelectionContext.Provider,
        {
          value: _extends({}, this.props.selectRow, {
            selected: this.selected,
            onRowSelect: this.handleRowSelect,
            onAllRowsSelect: this.handleAllRowsSelect,
            allRowsSelected: allRowsSelected,
            allRowsNotSelected: allRowsNotSelected,
            checkedStatus: checkedStatus
          })
        },
        this.props.children
      );
    }
  }]);

  return SelectionProvider;
}(_react2.default.Component);

SelectionProvider.propTypes = {
  children: _propTypes2.default.node.isRequired,
  data: _propTypes2.default.array.isRequired,
  keyField: _propTypes2.default.string.isRequired
};
exports.default = {
  Provider: SelectionProvider,
  Consumer: SelectionContext.Consumer
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _rows = __webpack_require__(6);

var rows = _interopRequireWildcard(_rows);

var _selection = __webpack_require__(11);

var selection = _interopRequireWildcard(_selection);

var _expand = __webpack_require__(33);

var expand = _interopRequireWildcard(_expand);

var _mutate = __webpack_require__(34);

var mutate = _interopRequireWildcard(_mutate);

var _sort = __webpack_require__(35);

var sort = _interopRequireWildcard(_sort);

var _type = __webpack_require__(36);

var type = _interopRequireWildcard(_type);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = _extends({}, rows, selection, expand, mutate, sort, type);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _operators = __webpack_require__(9);

var _operators2 = _interopRequireDefault(_operators);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */
/* eslint react/prop-types: 0 */


var RowExpandContext = _react2.default.createContext();

var RowExpandProvider = function (_React$Component) {
  _inherits(RowExpandProvider, _React$Component);

  function RowExpandProvider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RowExpandProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RowExpandProvider.__proto__ || Object.getPrototypeOf(RowExpandProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = { expanded: _this.props.expandRow.expanded || [],
      isClosing: _this.props.expandRow.isClosing || [] }, _this.onClosed = function (closedRow) {
      _this.setState({ isClosing: _this.state.isClosing.filter(function (value) {
          return value !== closedRow;
        }) });
    }, _this.handleRowExpand = function (rowKey, expanded, rowIndex, e) {
      var _this$props = _this.props,
          data = _this$props.data,
          keyField = _this$props.keyField,
          _this$props$expandRow = _this$props.expandRow,
          onExpand = _this$props$expandRow.onExpand,
          onlyOneExpanding = _this$props$expandRow.onlyOneExpanding,
          nonExpandable = _this$props$expandRow.nonExpandable;

      if (nonExpandable && _utils2.default.contains(nonExpandable, rowKey)) {
        return;
      }

      var currExpanded = [].concat(_toConsumableArray(_this.state.expanded));
      var isClosing = [].concat(_toConsumableArray(_this.state.isClosing));

      if (expanded) {
        if (onlyOneExpanding) {
          isClosing = isClosing.concat(currExpanded);
          currExpanded = [rowKey];
        } else currExpanded.push(rowKey);
      } else {
        isClosing.push(rowKey);
        currExpanded = currExpanded.filter(function (value) {
          return value !== rowKey;
        });
      }

      if (onExpand) {
        var row = _operators2.default.getRowByRowId(data, keyField, rowKey);
        onExpand(row, expanded, rowIndex, e);
      }
      _this.setState(function () {
        return { expanded: currExpanded, isClosing: isClosing };
      });
    }, _this.handleAllRowExpand = function (e, expandAll) {
      var _this$props2 = _this.props,
          data = _this$props2.data,
          keyField = _this$props2.keyField,
          _this$props2$expandRo = _this$props2.expandRow,
          onExpandAll = _this$props2$expandRo.onExpandAll,
          nonExpandable = _this$props2$expandRo.nonExpandable;
      var expanded = _this.state.expanded;


      var currExpanded = void 0;

      if (expandAll) {
        currExpanded = expanded.concat(_operators2.default.expandableKeys(data, keyField, nonExpandable));
      } else {
        currExpanded = expanded.filter(function (s) {
          return typeof data.find(function (d) {
            return _utils2.default.get(d, keyField) === s;
          }) === 'undefined';
        });
      }

      if (onExpandAll) {
        onExpandAll(expandAll, _operators2.default.getExpandedRows(data, keyField, currExpanded), e);
      }

      _this.setState(function () {
        return { expanded: currExpanded };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RowExpandProvider, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.expandRow) {
        var nextExpanded = [].concat(_toConsumableArray(nextProps.expandRow.expanded || this.state.expanded));
        var _nextProps$expandRow$ = nextProps.expandRow.nonExpandable,
            nonExpandable = _nextProps$expandRow$ === undefined ? [] : _nextProps$expandRow$;

        nextExpanded = nextExpanded.filter(function (rowId) {
          return !_utils2.default.contains(nonExpandable, rowId);
        });
        var isClosing = this.state.expanded.reduce(function (acc, cur) {
          if (!_utils2.default.contains(nextExpanded, cur)) {
            acc.push(cur);
          }
          return acc;
        }, []);

        this.setState(function () {
          return {
            expanded: nextExpanded,
            isClosing: isClosing
          };
        });
      } else {
        this.setState(function () {
          return {
            expanded: _this2.state.expanded
          };
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          keyField = _props.keyField;

      return _react2.default.createElement(
        RowExpandContext.Provider,
        {
          value: _extends({}, this.props.expandRow, {
            nonExpandable: this.props.expandRow.nonExpandable,
            expanded: this.state.expanded,
            isClosing: this.state.isClosing,
            onClosed: this.onClosed,
            isAnyExpands: _operators2.default.isAnyExpands(data, keyField, this.state.expanded),
            onRowExpand: this.handleRowExpand,
            onAllRowExpand: this.handleAllRowExpand
          })
        },
        this.props.children
      );
    }
  }]);

  return RowExpandProvider;
}(_react2.default.Component);

RowExpandProvider.propTypes = {
  children: _propTypes2.default.node.isRequired,
  data: _propTypes2.default.array.isRequired,
  keyField: _propTypes2.default.string.isRequired
};
exports.default = {
  Provider: RowExpandProvider,
  Consumer: RowExpandContext.Consumer
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectedRows = exports.unSelectableKeys = exports.selectableKeys = exports.getSelectionSummary = undefined;

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _rows = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getSelectionSummary = exports.getSelectionSummary = function getSelectionSummary() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keyField = arguments[1];
  var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var allRowsSelected = data.length > 0;
  var allRowsNotSelected = true;

  var rowKeys = data.map(function (d) {
    return _utils2.default.get(d, keyField);
  });

  var _loop = function _loop(i) {
    var curr = rowKeys[i];
    if (typeof selected.find(function (x) {
      return x === curr;
    }) === 'undefined') {
      allRowsSelected = false;
    } else {
      allRowsNotSelected = false;
    }
  };

  for (var i = 0; i < rowKeys.length; i += 1) {
    _loop(i);
  }
  return {
    allRowsSelected: allRowsSelected,
    allRowsNotSelected: allRowsNotSelected
  };
};

var selectableKeys = exports.selectableKeys = function selectableKeys() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keyField = arguments[1];
  var skips = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (skips.length === 0) {
    return data.map(function (row) {
      return _utils2.default.get(row, keyField);
    });
  }
  return data.filter(function (row) {
    return !_utils2.default.contains(skips, _utils2.default.get(row, keyField));
  }).map(function (row) {
    return _utils2.default.get(row, keyField);
  });
};

var unSelectableKeys = exports.unSelectableKeys = function unSelectableKeys(selected) {
  var skips = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (skips.length === 0) {
    return [];
  }
  return selected.filter(function (x) {
    return _utils2.default.contains(skips, x);
  });
};

var getSelectedRows = exports.getSelectedRows = function getSelectedRows() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keyField = arguments[1];
  var selected = arguments[2];
  return selected.map(function (k) {
    return (0, _rows.getRowByRowId)(data, keyField, k);
  }).filter(function (x) {
    return !!x;
  });
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint react/require-default-props: 0 */


var RowTemplate = function RowTemplate(props) {
  var renderContent = props.renderContent,
      selectRow = props.selectRow,
      expandRow = props.expandRow,
      cellEl = props.cellEl,
      rest = _objectWithoutProperties(props, ['renderContent', 'selectRow', 'expandRow', 'cellEl']);

  var isRenderFunctionColumnInLeft = function isRenderFunctionColumnInLeft() {
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _const2.default.INDICATOR_POSITION_LEFT;
    return position === _const2.default.INDICATOR_POSITION_LEFT;
  };

  var childrens = renderContent() || [];

  if (selectRow && selectRow.hideSelectColumn !== true) {
    if (isRenderFunctionColumnInLeft(selectRow.selectColumnPosition)) {
      childrens.unshift(_react2.default.createElement(cellEl, { key: 'selection' }));
    } else {
      childrens.push(_react2.default.createElement(cellEl, { key: 'selection' }));
    }
  }

  if (expandRow.showExpandColumn) {
    if (isRenderFunctionColumnInLeft(expandRow.expandColumnPosition)) {
      childrens.unshift(_react2.default.createElement(cellEl, { key: 'expansion' }));
    } else {
      childrens.push(_react2.default.createElement(cellEl, { key: 'expansion' }));
    }
  }

  return _react2.default.createElement(
    'tr',
    rest,
    childrens
  );
};

RowTemplate.propTypes = {
  renderContent: _propTypes2.default.func.isRequired,
  cellEl: _propTypes2.default.string.isRequired,
  selectRow: _propTypes2.default.object,
  expandRow: _propTypes2.default.object
};

exports.default = RowTemplate;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _cell = __webpack_require__(43);

var _cell2 = _interopRequireDefault(_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/no-array-index-key: 0 */
/* eslint no-plusplus: 0 */


var RowPureContent = function (_React$Component) {
  _inherits(RowPureContent, _React$Component);

  function RowPureContent() {
    _classCallCheck(this, RowPureContent);

    return _possibleConstructorReturn(this, (RowPureContent.__proto__ || Object.getPrototypeOf(RowPureContent)).apply(this, arguments));
  }

  _createClass(RowPureContent, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (typeof nextProps.shouldUpdate !== 'undefined') {
        return nextProps.shouldUpdate;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          row = _props.row,
          keyField = _props.keyField,
          columns = _props.columns,
          rowIndex = _props.rowIndex,
          editable = _props.editable,
          editingRowIdx = _props.editingRowIdx,
          editingColIdx = _props.editingColIdx,
          onStart = _props.onStart,
          clickToEdit = _props.clickToEdit,
          dbclickToEdit = _props.dbclickToEdit,
          EditingCellComponent = _props.EditingCellComponent,
          tabIndexStart = _props.tabIndexStart;


      var tabIndex = tabIndexStart;

      return columns.map(function (column, index) {
        var dataField = column.dataField;

        var content = _utils2.default.get(row, dataField);
        if (rowIndex === editingRowIdx && index === editingColIdx) {
          return _react2.default.createElement(EditingCellComponent, {
            key: content + '-' + index + '-editing',
            row: row,
            rowIndex: rowIndex,
            column: column,
            columnIndex: index
          });
        }
        // render cell
        var cellTitle = void 0;
        var cellStyle = {};
        var cellAttrs = _extends({}, _utils2.default.isFunction(column.attrs) ? column.attrs(content, row, rowIndex, index) : column.attrs);

        if (column.events) {
          var events = Object.assign({}, column.events);
          Object.keys(Object.assign({}, column.events)).forEach(function (key) {
            var originFn = events[key];
            events[key] = function () {
              for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
                rest[_key] = arguments[_key];
              }

              return originFn.apply(undefined, rest.concat([row, rowIndex]));
            };
          });
          cellAttrs = _extends({}, cellAttrs, events);
        }

        var cellClasses = _utils2.default.isFunction(column.classes) ? column.classes(content, row, rowIndex, index) : column.classes;

        if (column.style) {
          cellStyle = _utils2.default.isFunction(column.style) ? column.style(content, row, rowIndex, index) : column.style;
          cellStyle = Object.assign({}, cellStyle) || {};
        }

        if (column.title) {
          cellTitle = _utils2.default.isFunction(column.title) ? column.title(content, row, rowIndex, index) : content;
          cellAttrs.title = cellTitle;
        }

        if (column.align) {
          cellStyle.textAlign = _utils2.default.isFunction(column.align) ? column.align(content, row, rowIndex, index) : column.align;
        }

        if (cellClasses) cellAttrs.className = cellClasses;
        if (!_utils2.default.isEmptyObject(cellStyle)) cellAttrs.style = cellStyle;

        var editableCell = _utils2.default.isDefined(column.editable) ? column.editable : true;
        if (column.dataField === keyField || !editable) editableCell = false;
        if (_utils2.default.isFunction(column.editable)) {
          editableCell = column.editable(content, row, rowIndex, index);
        }

        if (tabIndexStart !== -1) {
          cellAttrs.tabIndex = tabIndex++;
        }

        return _react2.default.createElement(_cell2.default, _extends({
          key: content + '-' + index,
          row: row,
          editable: editableCell,
          rowIndex: rowIndex,
          columnIndex: index,
          column: column,
          onStart: onStart,
          clickToEdit: clickToEdit,
          dbclickToEdit: dbclickToEdit
        }, cellAttrs));
      });
    }
  }]);

  return RowPureContent;
}(_react2.default.Component);

exports.default = RowPureContent;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = ['onClick', 'onDoubleClick', 'onMouseEnter', 'onMouseLeave', 'onContextMenu', 'onAuxClick'];

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(RowEventDelegater, _ExtendBase);

    function RowEventDelegater(props) {
      _classCallCheck(this, RowEventDelegater);

      var _this = _possibleConstructorReturn(this, (RowEventDelegater.__proto__ || Object.getPrototypeOf(RowEventDelegater)).call(this, props));

      _this.clickNum = 0;
      _this.createDefaultEventHandler = _this.createDefaultEventHandler.bind(_this);
      _this.createClickEventHandler = _this.createClickEventHandler.bind(_this);
      return _this;
    }

    _createClass(RowEventDelegater, [{
      key: 'createClickEventHandler',
      value: function createClickEventHandler(cb) {
        var _this2 = this;

        return function (e) {
          var _props = _this2.props,
              row = _props.row,
              selected = _props.selected,
              keyField = _props.keyField,
              selectable = _props.selectable,
              expandable = _props.expandable,
              rowIndex = _props.rowIndex,
              expanded = _props.expanded,
              expandRow = _props.expandRow,
              selectRow = _props.selectRow,
              DELAY_FOR_DBCLICK = _props.DELAY_FOR_DBCLICK;

          var clickFn = function clickFn() {
            if (cb) {
              cb(e, row, rowIndex);
            }
            var key = _utils2.default.get(row, keyField);
            if (expandRow && expandable && !expandRow.expandByColumnOnly) {
              if (selectRow.mode !== _const2.default.ROW_SELECT_DISABLED && selectRow.clickToExpand || selectRow.mode === _const2.default.ROW_SELECT_DISABLED) {
                expandRow.onRowExpand(key, !expanded, rowIndex, e);
              }
            }
            if (selectRow.clickToSelect && selectable) {
              selectRow.onRowSelect(key, !selected, rowIndex, e);
            }
          };

          if (DELAY_FOR_DBCLICK) {
            _this2.clickNum += 1;
            _utils2.default.debounce(function () {
              if (_this2.clickNum === 1) {
                clickFn();
              }
              _this2.clickNum = 0;
            }, DELAY_FOR_DBCLICK)();
          } else {
            clickFn();
          }
        };
      }
    }, {
      key: 'createDefaultEventHandler',
      value: function createDefaultEventHandler(cb) {
        var _this3 = this;

        return function (e) {
          var _props2 = _this3.props,
              row = _props2.row,
              rowIndex = _props2.rowIndex;

          cb(e, row, rowIndex);
        };
      }
    }, {
      key: 'delegate',
      value: function delegate() {
        var _this4 = this;

        var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newAttrs = _extends({}, attrs);
        Object.keys(attrs).forEach(function (attr) {
          if (_utils2.default.contains(events, attr)) {
            newAttrs[attr] = _this4.createDefaultEventHandler(attrs[attr]);
          }
        });
        return newAttrs;
      }
    }]);

    return RowEventDelegater;
  }(ExtendBase);
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(RowShouldUpdater, _ExtendBase);

    function RowShouldUpdater() {
      _classCallCheck(this, RowShouldUpdater);

      return _possibleConstructorReturn(this, (RowShouldUpdater.__proto__ || Object.getPrototypeOf(RowShouldUpdater)).apply(this, arguments));
    }

    _createClass(RowShouldUpdater, [{
      key: 'shouldUpdateByCellEditing',
      value: function shouldUpdateByCellEditing(nextProps) {
        if (!(this.props.clickToEdit || this.props.dbclickToEdit)) return false;
        return nextProps.editingRowIdx === nextProps.rowIndex || this.props.editingRowIdx === nextProps.rowIndex && nextProps.editingRowIdx === null || this.props.editingRowIdx === nextProps.rowIndex;
      }
    }, {
      key: 'shouldUpdatedBySelfProps',
      value: function shouldUpdatedBySelfProps(nextProps) {
        return this.props.className !== nextProps.className || !_utils2.default.isEqual(this.props.style, nextProps.style) || !_utils2.default.isEqual(this.props.attrs, nextProps.attrs);
      }

      // Only use for simple-row

    }, {
      key: 'shouldUpdateByColumnsForSimpleCheck',
      value: function shouldUpdateByColumnsForSimpleCheck(nextProps) {
        if (this.props.columns.length !== nextProps.columns.length) {
          return true;
        }
        for (var i = 0; i < this.props.columns.length; i += 1) {
          if (!_utils2.default.isEqual(this.props.columns[i], nextProps.columns[i])) {
            return true;
          }
        }
        return false;
      }
    }, {
      key: 'shouldUpdatedByNormalProps',
      value: function shouldUpdatedByNormalProps(nextProps) {
        var shouldUpdate = this.props.rowIndex !== nextProps.rowIndex || this.props.editable !== nextProps.editable || !_utils2.default.isEqual(this.props.row, nextProps.row) || this.props.columns.length !== nextProps.columns.length;

        return shouldUpdate;
      }
    }, {
      key: 'shouldUpdateChild',
      value: function shouldUpdateChild(nextProps) {
        return this.shouldUpdateByCellEditing(nextProps) || this.shouldUpdatedByNormalProps(nextProps);
      }
    }, {
      key: 'shouldRowContentUpdate',
      value: function shouldRowContentUpdate(nextProps) {
        return this.shouldUpdateChild(nextProps) || this.shouldUpdateByColumnsForSimpleCheck(nextProps);
      }
    }]);

    return RowShouldUpdater;
  }(ExtendBase);
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bootstrapTable = __webpack_require__(18);

var _bootstrapTable2 = _interopRequireDefault(_bootstrapTable);

var _contexts = __webpack_require__(55);

var _contexts2 = _interopRequireDefault(_contexts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _contexts2.default)(_bootstrapTable2.default);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _header = __webpack_require__(23);

var _header2 = _interopRequireDefault(_header);

var _filters = __webpack_require__(38);

var _filters2 = _interopRequireDefault(_filters);

var _caption = __webpack_require__(40);

var _caption2 = _interopRequireDefault(_caption);

var _body = __webpack_require__(41);

var _body2 = _interopRequireDefault(_body);

var _footer = __webpack_require__(51);

var _footer2 = _interopRequireDefault(_footer);

var _propsResolver = __webpack_require__(53);

var _propsResolver2 = _interopRequireDefault(_propsResolver);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */
/* eslint arrow-body-style: 0 */

var BootstrapTable = function (_PropsBaseResolver) {
  _inherits(BootstrapTable, _PropsBaseResolver);

  function BootstrapTable(props) {
    _classCallCheck(this, BootstrapTable);

    var _this = _possibleConstructorReturn(this, (BootstrapTable.__proto__ || Object.getPrototypeOf(BootstrapTable)).call(this, props));

    _this.getData = function () {
      return _this.visibleRows();
    };

    _this.validateProps();
    return _this;
  }

  _createClass(BootstrapTable, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.onDataSizeChange && !nextProps.pagination) {
        if (nextProps.data.length !== this.props.data.length) {
          nextProps.onDataSizeChange({ dataSize: nextProps.data.length });
        }
      }
    }

    // Exposed APIs

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          loading = _props.loading,
          overlay = _props.overlay;

      if (overlay) {
        var LoadingOverlay = overlay(loading);
        return _react2.default.createElement(
          LoadingOverlay,
          null,
          this.renderTable()
        );
      }
      return this.renderTable();
    }
  }, {
    key: 'renderTable',
    value: function renderTable() {
      var _props2 = this.props,
          columns = _props2.columns,
          keyField = _props2.keyField,
          tabIndexCell = _props2.tabIndexCell,
          id = _props2.id,
          classes = _props2.classes,
          bootstrap4 = _props2.bootstrap4,
          striped = _props2.striped,
          hover = _props2.hover,
          bordered = _props2.bordered,
          condensed = _props2.condensed,
          noDataIndication = _props2.noDataIndication,
          caption = _props2.caption,
          rowStyle = _props2.rowStyle,
          rowClasses = _props2.rowClasses,
          wrapperClasses = _props2.wrapperClasses,
          rowEvents = _props2.rowEvents,
          selectRow = _props2.selectRow,
          expandRow = _props2.expandRow,
          cellEdit = _props2.cellEdit,
          filterPosition = _props2.filterPosition;


      var tableWrapperClass = (0, _classnames2.default)('react-bootstrap-table', wrapperClasses);

      var tableClass = (0, _classnames2.default)('table', _defineProperty({
        'table-striped': striped,
        'table-hover': hover,
        'table-bordered': bordered
      }, bootstrap4 ? 'table-sm' : 'table-condensed', condensed), classes);

      var hasFilters = columns.some(function (col) {
        return col.filter || col.filterRenderer;
      });

      var hasFooter = _utils2.default.filter(columns, function (col) {
        return _utils2.default.has(col, 'footer');
      }).length > 0;

      var tableCaption = caption && _react2.default.createElement(
        _caption2.default,
        { bootstrap4: bootstrap4 },
        caption
      );

      return _react2.default.createElement(
        'div',
        { className: tableWrapperClass },
        _react2.default.createElement(
          'table',
          { id: id, className: tableClass },
          tableCaption,
          _react2.default.createElement(_header2.default, {
            columns: columns,
            className: this.props.headerClasses,
            wrapperClasses: this.props.headerWrapperClasses,
            sortField: this.props.sortField,
            sortOrder: this.props.sortOrder,
            onSort: this.props.onSort,
            globalSortCaret: this.props.sort && this.props.sort.sortCaret,
            onFilter: this.props.onFilter,
            currFilters: this.props.currFilters,
            onExternalFilter: this.props.onExternalFilter,
            selectRow: selectRow,
            expandRow: expandRow,
            filterPosition: filterPosition
          }),
          hasFilters && filterPosition !== _const2.default.FILTERS_POSITION_INLINE && _react2.default.createElement(_filters2.default, {
            columns: columns,
            className: this.props.filtersClasses,
            onSort: this.props.onSort,
            onFilter: this.props.onFilter,
            currFilters: this.props.currFilters,
            filterPosition: this.props.filterPosition,
            onExternalFilter: this.props.onExternalFilter,
            selectRow: selectRow,
            expandRow: expandRow
          }),
          _react2.default.createElement(_body2.default, {
            className: this.props.bodyClasses,
            data: this.getData(),
            keyField: keyField,
            tabIndexCell: tabIndexCell,
            columns: columns,
            isEmpty: this.isEmpty(),
            visibleColumnSize: this.visibleColumnSize(),
            noDataIndication: noDataIndication,
            cellEdit: cellEdit,
            selectRow: selectRow,
            expandRow: expandRow,
            rowStyle: rowStyle,
            rowClasses: rowClasses,
            rowEvents: rowEvents
          }),
          hasFooter && _react2.default.createElement(_footer2.default, {
            data: this.getData(),
            columns: columns,
            selectRow: selectRow,
            expandRow: expandRow,
            className: this.props.footerClasses
          })
        )
      );
    }
  }]);

  return BootstrapTable;
}((0, _propsResolver2.default)(_react.Component));

BootstrapTable.propTypes = {
  keyField: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.array.isRequired,
  columns: _propTypes2.default.array.isRequired,
  bootstrap4: _propTypes2.default.bool,
  remote: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    pagination: _propTypes2.default.bool
  })]),
  noDataIndication: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  striped: _propTypes2.default.bool,
  bordered: _propTypes2.default.bool,
  hover: _propTypes2.default.bool,
  tabIndexCell: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  classes: _propTypes2.default.string,
  headerClasses: _propTypes2.default.string,
  bodyClasses: _propTypes2.default.string,
  wrapperClasses: _propTypes2.default.string,
  headerWrapperClasses: _propTypes2.default.string,
  condensed: _propTypes2.default.bool,
  caption: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
  pagination: _propTypes2.default.object,
  filter: _propTypes2.default.object,
  cellEdit: _propTypes2.default.object,
  selectRow: _propTypes2.default.shape({
    mode: _propTypes2.default.oneOf([_const2.default.ROW_SELECT_SINGLE, _const2.default.ROW_SELECT_MULTIPLE, _const2.default.ROW_SELECT_DISABLED]).isRequired,
    clickToSelect: _propTypes2.default.bool,
    clickToExpand: _propTypes2.default.bool,
    clickToEdit: _propTypes2.default.bool,
    hideSelectAll: _propTypes2.default.bool,
    onSelect: _propTypes2.default.func,
    onSelectAll: _propTypes2.default.func,
    style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    nonSelectable: _propTypes2.default.array,
    nonSelectableStyle: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    nonSelectableClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    bgColor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    hideSelectColumn: _propTypes2.default.bool,
    selectionRenderer: _propTypes2.default.func,
    selectionHeaderRenderer: _propTypes2.default.func,
    headerColumnStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    selectColumnStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    selectColumnPosition: _propTypes2.default.oneOf([_const2.default.INDICATOR_POSITION_LEFT, _const2.default.INDICATOR_POSITION_RIGHT])
  }),
  expandRow: _propTypes2.default.shape({
    renderer: _propTypes2.default.func,
    expanded: _propTypes2.default.array,
    onExpand: _propTypes2.default.func,
    onExpandAll: _propTypes2.default.func,
    nonExpandable: _propTypes2.default.array,
    showExpandColumn: _propTypes2.default.bool,
    onlyOneExpanding: _propTypes2.default.bool,
    expandByColumnOnly: _propTypes2.default.bool,
    expandColumnRenderer: _propTypes2.default.func,
    expandHeaderColumnRenderer: _propTypes2.default.func,
    expandColumnPosition: _propTypes2.default.oneOf([_const2.default.INDICATOR_POSITION_LEFT, _const2.default.INDICATOR_POSITION_RIGHT]),
    className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    parentClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
  }),
  rowStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  rowEvents: _propTypes2.default.object,
  rowClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  filtersClasses: _propTypes2.default.string,
  filterPosition: _propTypes2.default.oneOf([_const2.default.FILTERS_POSITION_TOP, _const2.default.FILTERS_POSITION_INLINE, _const2.default.FILTERS_POSITION_BOTTOM]),
  footerClasses: _propTypes2.default.string,
  defaultSorted: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    dataField: _propTypes2.default.string.isRequired,
    order: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]).isRequired
  })),
  sort: _propTypes2.default.shape({
    dataField: _propTypes2.default.string,
    order: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]),
    sortFunc: _propTypes2.default.func,
    sortCaret: _propTypes2.default.func
  }),
  defaultSortDirection: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]),
  overlay: _propTypes2.default.func,
  onTableChange: _propTypes2.default.func,
  onSort: _propTypes2.default.func,
  onFilter: _propTypes2.default.func,
  onExternalFilter: _propTypes2.default.func,
  onDataSizeChange: _propTypes2.default.func,
  // Inject from toolkit
  search: _propTypes2.default.shape({
    searchText: _propTypes2.default.string,
    searchContext: _propTypes2.default.func
  }),
  setDependencyModules: _propTypes2.default.func
};

BootstrapTable.defaultProps = {
  bootstrap4: false,
  remote: false,
  striped: false,
  bordered: true,
  hover: false,
  condensed: false,
  noDataIndication: null,
  selectRow: {
    mode: _const2.default.ROW_SELECT_DISABLED,
    selected: [],
    hideSelectColumn: true
  },
  expandRow: {
    renderer: undefined,
    expanded: [],
    nonExpandable: []
  },
  cellEdit: {
    mode: null,
    nonEditableRows: []
  },
  filterPosition: _const2.default.FILTERS_POSITION_INLINE
};

exports.default = BootstrapTable;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(20);
var invariant = __webpack_require__(21);
var ReactPropTypesSecret = __webpack_require__(22);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _headerCell = __webpack_require__(24);

var _headerCell2 = _interopRequireDefault(_headerCell);

var _selectionHeaderCell = __webpack_require__(30);

var _selectionHeaderCell2 = _interopRequireDefault(_selectionHeaderCell);

var _expandHeaderCell = __webpack_require__(31);

var _expandHeaderCell2 = _interopRequireDefault(_expandHeaderCell);

var _selectionHeaderCellConsumer = __webpack_require__(32);

var _selectionHeaderCellConsumer2 = _interopRequireDefault(_selectionHeaderCellConsumer);

var _expandHeaderCellConsumer = __webpack_require__(37);

var _expandHeaderCellConsumer2 = _interopRequireDefault(_expandHeaderCellConsumer);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/require-default-props: 0 */
var Header = function Header(props) {
  var className = props.className,
      columns = props.columns,
      onSort = props.onSort,
      onFilter = props.onFilter,
      sortField = props.sortField,
      sortOrder = props.sortOrder,
      selectRow = props.selectRow,
      expandRow = props.expandRow,
      currFilters = props.currFilters,
      onExternalFilter = props.onExternalFilter,
      filterPosition = props.filterPosition,
      globalSortCaret = props.globalSortCaret,
      wrapperClasses = props.wrapperClasses;


  var SelectionHeaderCellComp = function SelectionHeaderCellComp() {
    return null;
  };
  var ExpansionHeaderCellComp = function ExpansionHeaderCellComp() {
    return null;
  };

  if (expandRow.showExpandColumn) {
    ExpansionHeaderCellComp = (0, _expandHeaderCellConsumer2.default)(_expandHeaderCell2.default);
  }

  if (selectRow) {
    SelectionHeaderCellComp = (0, _selectionHeaderCellConsumer2.default)(_selectionHeaderCell2.default);
  }

  var isRenderFunctionColumnInLeft = function isRenderFunctionColumnInLeft() {
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _const2.default.INDICATOR_POSITION_LEFT;
    return position === _const2.default.INDICATOR_POSITION_LEFT;
  };

  var childrens = [columns.map(function (column, i) {
    var currSort = column.dataField === sortField;
    var isLastSorting = column.dataField === sortField;

    return _react2.default.createElement(_headerCell2.default, {
      index: i,
      key: column.dataField,
      column: column,
      onSort: onSort,
      sorting: currSort,
      sortOrder: sortOrder,
      globalSortCaret: globalSortCaret,
      isLastSorting: isLastSorting,
      onFilter: onFilter,
      currFilters: currFilters,
      onExternalFilter: onExternalFilter,
      filterPosition: filterPosition
    });
  })];

  if (!selectRow.hideSelectColumn) {
    if (isRenderFunctionColumnInLeft(selectRow.selectColumnPosition)) {
      childrens.unshift(_react2.default.createElement(SelectionHeaderCellComp, { key: 'selection' }));
    } else {
      childrens.push(_react2.default.createElement(SelectionHeaderCellComp, { key: 'selection' }));
    }
  }

  if (expandRow.showExpandColumn) {
    if (isRenderFunctionColumnInLeft(expandRow.expandColumnPosition)) {
      childrens.unshift(_react2.default.createElement(ExpansionHeaderCellComp, { key: 'expansion' }));
    } else {
      childrens.push(_react2.default.createElement(ExpansionHeaderCellComp, { key: 'expansion' }));
    }
  }

  return _react2.default.createElement(
    'thead',
    { className: wrapperClasses },
    _react2.default.createElement(
      'tr',
      { className: className },
      childrens
    )
  );
};

Header.propTypes = {
  columns: _propTypes2.default.array.isRequired,
  onSort: _propTypes2.default.func,
  onFilter: _propTypes2.default.func,
  sortField: _propTypes2.default.string,
  sortOrder: _propTypes2.default.string,
  selectRow: _propTypes2.default.object,
  currFilters: _propTypes2.default.object,
  onExternalFilter: _propTypes2.default.func,
  globalSortCaret: _propTypes2.default.func,
  className: _propTypes2.default.string,
  wrapperClasses: _propTypes2.default.string,
  expandRow: _propTypes2.default.object,
  filterPosition: _propTypes2.default.oneOf([_const2.default.FILTERS_POSITION_TOP, _const2.default.FILTERS_POSITION_INLINE, _const2.default.FILTERS_POSITION_BOTTOM])
};

exports.default = Header;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _symbol = __webpack_require__(25);

var _symbol2 = _interopRequireDefault(_symbol);

var _caret = __webpack_require__(26);

var _caret2 = _interopRequireDefault(_caret);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _cellEventDelegater = __webpack_require__(7);

var _cellEventDelegater2 = _interopRequireDefault(_cellEventDelegater);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */


var HeaderCell = function (_eventDelegater) {
  _inherits(HeaderCell, _eventDelegater);

  function HeaderCell() {
    _classCallCheck(this, HeaderCell);

    return _possibleConstructorReturn(this, (HeaderCell.__proto__ || Object.getPrototypeOf(HeaderCell)).apply(this, arguments));
  }

  _createClass(HeaderCell, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          column = _props.column,
          index = _props.index,
          onSort = _props.onSort,
          sorting = _props.sorting,
          sortOrder = _props.sortOrder,
          isLastSorting = _props.isLastSorting,
          onFilter = _props.onFilter,
          currFilters = _props.currFilters,
          filterPosition = _props.filterPosition,
          onExternalFilter = _props.onExternalFilter,
          globalSortCaret = _props.globalSortCaret;
      var text = column.text,
          sort = column.sort,
          sortCaret = column.sortCaret,
          filter = column.filter,
          filterRenderer = column.filterRenderer,
          headerTitle = column.headerTitle,
          headerAlign = column.headerAlign,
          headerFormatter = column.headerFormatter,
          headerEvents = column.headerEvents,
          headerClasses = column.headerClasses,
          headerStyle = column.headerStyle,
          headerAttrs = column.headerAttrs,
          headerSortingClasses = column.headerSortingClasses,
          headerSortingStyle = column.headerSortingStyle;


      var sortCaretfunc = sortCaret || globalSortCaret;

      var delegateEvents = this.delegate(headerEvents);

      var customAttrs = _utils2.default.isFunction(headerAttrs) ? headerAttrs(column, index) : headerAttrs || {};

      var cellAttrs = _extends({}, customAttrs, delegateEvents, {
        tabIndex: _utils2.default.isDefined(customAttrs.tabIndex) ? customAttrs.tabIndex : 0
      });

      var sortSymbol = void 0;
      var filterElm = void 0;
      var cellStyle = {};
      var cellClasses = _utils2.default.isFunction(headerClasses) ? headerClasses(column, index) : headerClasses;

      if (headerStyle) {
        cellStyle = _utils2.default.isFunction(headerStyle) ? headerStyle(column, index) : headerStyle;
        cellStyle = cellStyle ? _extends({}, cellStyle) : cellStyle;
      }

      if (headerTitle) {
        cellAttrs.title = _utils2.default.isFunction(headerTitle) ? headerTitle(column, index) : text;
      }

      if (headerAlign) {
        cellStyle.textAlign = _utils2.default.isFunction(headerAlign) ? headerAlign(column, index) : headerAlign;
      }

      if (sort) {
        var customClick = cellAttrs.onClick;
        cellAttrs['aria-label'] = sorting ? text + ' sort ' + sortOrder : text + ' sortable';
        cellAttrs.onKeyUp = function (e) {
          if (e.key === 'Enter') {
            onSort(column);
            if (_utils2.default.isFunction(customClick)) customClick(e);
          }
        };
        cellAttrs.onClick = function (e) {
          onSort(column);
          if (_utils2.default.isFunction(customClick)) customClick(e);
        };
        cellAttrs.className = (0, _classnames2.default)(cellAttrs.className, 'sortable');

        if (sorting) {
          sortSymbol = sortCaretfunc ? sortCaretfunc(sortOrder, column) : _react2.default.createElement(_caret2.default, { order: sortOrder });

          // append customized classes or style if table was sorting based on the current column.
          cellClasses = (0, _classnames2.default)(cellClasses, _utils2.default.isFunction(headerSortingClasses) ? headerSortingClasses(column, sortOrder, isLastSorting, index) : headerSortingClasses);

          cellStyle = _extends({}, cellStyle, _utils2.default.isFunction(headerSortingStyle) ? headerSortingStyle(column, sortOrder, isLastSorting, index) : headerSortingStyle);
        } else {
          sortSymbol = sortCaretfunc ? sortCaretfunc(undefined, column) : _react2.default.createElement(_symbol2.default, null);
        }
      }

      if (cellClasses) cellAttrs.className = (0, _classnames2.default)(cellAttrs.className, cellClasses);
      if (!_utils2.default.isEmptyObject(cellStyle)) cellAttrs.style = cellStyle;

      if (filterPosition === _const2.default.FILTERS_POSITION_INLINE) {
        if (filterRenderer) {
          var onCustomFilter = onExternalFilter(column, filter.props.type);
          filterElm = filterRenderer(onCustomFilter, column);
        } else if (filter) {
          filterElm = _react2.default.createElement(filter.Filter, _extends({}, filter.props, {
            filterState: currFilters[column.dataField],
            onFilter: onFilter,
            column: column
          }));
        }
      }

      var children = headerFormatter ? headerFormatter(column, index, { sortElement: sortSymbol, filterElement: filterElm }) : text;

      if (headerFormatter) {
        return _react2.default.createElement('th', cellAttrs, children);
      }

      return _react2.default.createElement('th', cellAttrs, children, sortSymbol, filterElm);
    }
  }]);

  return HeaderCell;
}((0, _cellEventDelegater2.default)(_react2.default.Component));

HeaderCell.propTypes = {
  column: _propTypes2.default.shape({
    dataField: _propTypes2.default.string.isRequired,
    text: _propTypes2.default.string.isRequired,
    type: _propTypes2.default.oneOf([_const2.default.TYPE_STRING, _const2.default.TYPE_NUMBER, _const2.default.TYPE_BOOLEAN, _const2.default.TYPE_DATE]),
    isDummyField: _propTypes2.default.bool,
    hidden: _propTypes2.default.bool,
    headerFormatter: _propTypes2.default.func,
    formatter: _propTypes2.default.func,
    formatExtraData: _propTypes2.default.any,
    headerClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    headerStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    headerTitle: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    title: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    headerEvents: _propTypes2.default.object,
    events: _propTypes2.default.object,
    headerAlign: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    align: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    headerAttrs: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    attrs: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    sort: _propTypes2.default.bool,
    sortFunc: _propTypes2.default.func,
    onSort: _propTypes2.default.func,
    editor: _propTypes2.default.object,
    editable: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    editCellStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    editCellClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    editorStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    editorClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    editorRenderer: _propTypes2.default.func,
    validator: _propTypes2.default.func,
    filter: _propTypes2.default.object,
    filterRenderer: _propTypes2.default.func,
    filterValue: _propTypes2.default.func,
    searchable: _propTypes2.default.bool
  }).isRequired,
  index: _propTypes2.default.number.isRequired,
  onSort: _propTypes2.default.func,
  sorting: _propTypes2.default.bool,
  sortOrder: _propTypes2.default.oneOf([_const2.default.SORT_ASC, _const2.default.SORT_DESC]),
  sortCaret: _propTypes2.default.func,
  isLastSorting: _propTypes2.default.bool,
  onFilter: _propTypes2.default.func,
  filterPosition: _propTypes2.default.oneOf([_const2.default.FILTERS_POSITION_INLINE, _const2.default.FILTERS_POSITION_BOTTOM, _const2.default.FILTERS_POSITION_TOP]),
  currFilters: _propTypes2.default.object,
  onExternalFilter: _propTypes2.default.func
};

exports.default = HeaderCell;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bootstrap = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortSymbol = function SortSymbol() {
  return _react2.default.createElement(
    _bootstrap.BootstrapContext.Consumer,
    null,
    function (_ref) {
      var bootstrap4 = _ref.bootstrap4;
      return bootstrap4 ? _react2.default.createElement('span', { className: 'order-4' }) : _react2.default.createElement(
        'span',
        { className: 'order' },
        _react2.default.createElement(
          'span',
          { className: 'dropdown' },
          _react2.default.createElement('span', { className: 'caret' })
        ),
        _react2.default.createElement(
          'span',
          { className: 'dropup' },
          _react2.default.createElement('span', { className: 'caret' })
        )
      );
    }
  );
};

exports.default = SortSymbol;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _bootstrap = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortCaret = function SortCaret(_ref) {
  var order = _ref.order;

  var orderClass = (0, _classnames2.default)('react-bootstrap-table-sort-order', {
    dropup: order === _const2.default.SORT_ASC
  });

  return _react2.default.createElement(
    _bootstrap.BootstrapContext.Consumer,
    null,
    function (_ref2) {
      var bootstrap4 = _ref2.bootstrap4;
      return bootstrap4 ? _react2.default.createElement('span', { className: 'caret-4-' + order }) : _react2.default.createElement(
        'span',
        { className: orderClass },
        _react2.default.createElement('span', { className: 'caret' })
      );
    }
  );
};

SortCaret.propTypes = {
  order: _propTypes2.default.oneOf([_const2.default.SORT_ASC, _const2.default.SORT_DESC]).isRequired
};

exports.default = SortCaret;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` (`self`) in the browser, `global`
  // on the server, or `this` in some virtual machines. We use `self`
  // instead of `window` for `WebWorker` support.
  var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this ||
            {};

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype;
  var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

  // Create quick reference variables for speed access to core prototypes.
  var push = ArrayProto.push,
      slice = ArrayProto.slice,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var nativeIsArray = Array.isArray,
      nativeKeys = Object.keys,
      nativeCreate = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for their old module API. If we're in
  // the browser, add `_` as a global object.
  // (`nodeType` is checked to ensure that `module`
  // and `exports` are not HTML elements.)
  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.9.1';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      // The 2-argument case is omitted because we’re not using it.
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  var builtinIteratee;

  // An internal function to generate callbacks that can be applied to each
  // element in a collection, returning the desired result — either `identity`,
  // an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value) && !_.isArray(value)) return _.matcher(value);
    return _.property(value);
  };

  // External wrapper for our callback generator. Users may customize
  // `_.iteratee` if they want additional predicate/iteratee shorthand styles.
  // This abstraction hides the internal-only argCount argument.
  _.iteratee = builtinIteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // Some functions take a variable number of arguments, or a few expected
  // arguments at the beginning and then a variable number of values to operate
  // on. This helper accumulates all remaining arguments past the function’s
  // argument length (or an explicit `startIndex`), into an array that becomes
  // the last argument. Similar to ES6’s "rest parameter".
  var restArguments = function(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
      var length = Math.max(arguments.length - startIndex, 0),
          rest = Array(length),
          index = 0;
      for (; index < length; index++) {
        rest[index] = arguments[index + startIndex];
      }
      switch (startIndex) {
        case 0: return func.call(this, rest);
        case 1: return func.call(this, arguments[0], rest);
        case 2: return func.call(this, arguments[0], arguments[1], rest);
      }
      var args = Array(startIndex + 1);
      for (index = 0; index < startIndex; index++) {
        args[index] = arguments[index];
      }
      args[startIndex] = rest;
      return func.apply(this, args);
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var shallowProperty = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  var has = function(obj, path) {
    return obj != null && hasOwnProperty.call(obj, path);
  }

  var deepGet = function(obj, path) {
    var length = path.length;
    for (var i = 0; i < length; i++) {
      if (obj == null) return void 0;
      obj = obj[path[i]];
    }
    return length ? obj : void 0;
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object.
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = shallowProperty('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  var createReduce = function(dir) {
    // Wrap code that reassigns argument variables in a separate function than
    // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
    var reducer = function(obj, iteratee, memo, initial) {
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      if (!initial) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    };

    return function(obj, iteratee, memo, context) {
      var initial = arguments.length >= 3;
      return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
    };
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;
    var key = keyFinder(obj, predicate, context);
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = restArguments(function(obj, path, args) {
    var contextPath, func;
    if (_.isFunction(path)) {
      func = path;
    } else if (_.isArray(path)) {
      contextPath = path.slice(0, -1);
      path = path[path.length - 1];
    }
    return _.map(obj, function(context) {
      var method = func;
      if (!method) {
        if (contextPath && contextPath.length) {
          context = deepGet(context, contextPath);
        }
        if (context == null) return void 0;
        method = context[path];
      }
      return method == null ? method : method.apply(context, args);
    });
  });

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection.
  _.shuffle = function(obj) {
    return _.sample(obj, Infinity);
  };

  // Sample **n** random values from a collection using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
    var length = getLength(sample);
    n = Math.max(Math.min(n, length), 0);
    var last = length - 1;
    for (var index = 0; index < n; index++) {
      var rand = _.random(index, last);
      var temp = sample[index];
      sample[index] = sample[rand];
      sample[rand] = temp;
    }
    return sample.slice(0, n);
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    var index = 0;
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, key, list) {
      return {
        value: value,
        index: index++,
        criteria: iteratee(value, key, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior, partition) {
    return function(obj, iteratee, context) {
      var result = partition ? [[], []] : {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (has(result, key)) result[key]++; else result[key] = 1;
  });

  var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (_.isString(obj)) {
      // Keep surrogate pair characters together
      return obj.match(reStrSymbol);
    }
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = group(function(result, value, pass) {
    result[pass ? 0 : 1].push(value);
  }, true);

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, Boolean);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    output = output || [];
    var idx = output.length;
    for (var i = 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        // Flatten current level of array or arguments object.
        if (shallow) {
          var j = 0, len = value.length;
          while (j < len) output[idx++] = value[j++];
        } else {
          flatten(value, shallow, strict, output);
          idx = output.length;
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = restArguments(function(array, otherArrays) {
    return _.difference(array, otherArrays);
  });

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // The faster algorithm will not work with an iteratee if the iteratee
  // is not a one-to-one function, so providing an iteratee will disable
  // the faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted && !iteratee) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = restArguments(function(arrays) {
    return _.uniq(flatten(arrays, true, true));
  });

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      var j;
      for (j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = restArguments(function(array, rest) {
    rest = flatten(rest, true, true);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  });

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices.
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = restArguments(_.unzip);

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values. Passing by pairs is the reverse of _.pairs.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions.
  var createPredicateIndexFinder = function(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  };

  // Returns the first index on an array-like that passes a predicate test.
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions.
  var createIndexFinder = function(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
          i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Chunk a single array into multiple arrays, each containing `count` or fewer
  // items.
  _.chunk = function(array, count) {
    if (count == null || count < 1) return [];
    var result = [];
    var i = 0, length = array.length;
    while (i < length) {
      result.push(slice.call(array, i, i += count));
    }
    return result;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments.
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = restArguments(function(func, context, args) {
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var bound = restArguments(function(callArgs) {
      return executeBound(func, bound, context, this, args.concat(callArgs));
    });
    return bound;
  });

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder by default, allowing any combination of arguments to be
  // pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
  _.partial = restArguments(function(func, boundArgs) {
    var placeholder = _.partial.placeholder;
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  });

  _.partial.placeholder = _;

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = restArguments(function(obj, keys) {
    keys = flatten(keys, false, false);
    var index = keys.length;
    if (index < 1) throw new Error('bindAll must be passed function names');
    while (index--) {
      var key = keys[index];
      obj[key] = _.bind(obj[key], obj);
    }
  });

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = restArguments(function(func, wait, args) {
    return setTimeout(function() {
      return func.apply(null, args);
    }, wait);
  });

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };

    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;

    var later = function(context, args) {
      timeout = null;
      if (args) result = func.apply(context, args);
    };

    var debounced = restArguments(function(args) {
      if (timeout) clearTimeout(timeout);
      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(this, args);
      } else {
        timeout = _.delay(later, wait, this, args);
      }

      return result;
    });

    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = null;
    };

    return debounced;
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  _.restArguments = restArguments;

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  var collectNonEnumProps = function(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  };

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`.
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object.
  // In contrast to _.map it returns an object.
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = _.keys(obj),
        length = keys.length,
        results = {};
    for (var index = 0; index < length; index++) {
      var currentKey = keys[index];
      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  // The opposite of _.object.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`.
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, defaults) {
    return function(obj) {
      var length = arguments.length;
      if (defaults) obj = Object(obj);
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!defaults || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s).
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test.
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Internal pick helper function to determine if `obj` has key `key`.
  var keyInObj = function(value, key, obj) {
    return key in obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = restArguments(function(obj, keys) {
    var result = {}, iteratee = keys[0];
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
      keys = _.allKeys(obj);
    } else {
      iteratee = keyInObj;
      keys = flatten(keys, false, false);
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  });

  // Return a copy of the object without the blacklisted properties.
  _.omit = restArguments(function(obj, keys) {
    var iteratee = keys[0], context;
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
      if (keys.length > 1) context = keys[1];
    } else {
      keys = _.map(flatten(keys, false, false), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  });

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq, deepEq;
  eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null) return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
    return deepEq(a, b, aStack, bStack);
  };

  // Internal recursive comparison function for `isEqual`.
  deepEq = function(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN.
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
      case '[object Symbol]':
        return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
  var nodelist = root.document && root.document.childNodes;
  if (typeof /./ != 'function' && typeof Int8Array != 'object' && typeof nodelist != 'function') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return !_.isSymbol(obj) && isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`?
  _.isNaN = function(obj) {
    return _.isNumber(obj) && isNaN(obj);
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, path) {
    if (!_.isArray(path)) {
      return has(obj, path);
    }
    var length = path.length;
    for (var i = 0; i < length; i++) {
      var key = path[i];
      if (obj == null || !hasOwnProperty.call(obj, key)) {
        return false;
      }
      obj = obj[key];
    }
    return !!length;
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  // Creates a function that, when passed an object, will traverse that object’s
  // properties down the given `path`, specified as an array of keys or indexes.
  _.property = function(path) {
    if (!_.isArray(path)) {
      return shallowProperty(path);
    }
    return function(obj) {
      return deepGet(obj, path);
    };
  };

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    if (obj == null) {
      return function(){};
    }
    return function(path) {
      return !_.isArray(path) ? obj[path] : deepGet(obj, path);
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

  // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped.
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // Traverses the children of `obj` along `path`. If a child is a function, it
  // is invoked with its parent as context. Returns the value of the final
  // child, or `fallback` if any child is undefined.
  _.result = function(obj, path, fallback) {
    if (!_.isArray(path)) path = [path];
    var length = path.length;
    if (!length) {
      return _.isFunction(fallback) ? fallback.call(obj) : fallback;
    }
    for (var i = 0; i < length; i++) {
      var prop = obj == null ? void 0 : obj[path[i]];
      if (prop === void 0) {
        prop = fallback;
        i = length; // Ensure we don't continue iterating.
      }
      obj = _.isFunction(prop) ? prop.call(obj) : prop;
    }
    return obj;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offset.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    var render;
    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var chainResult = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return chainResult(this, func.apply(_, args));
      };
    });
    return _;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return chainResult(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return chainResult(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return String(this._wrapped);
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return _;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28), __webpack_require__(29)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBox = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _bootstrap = __webpack_require__(5);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */


var CheckBox = exports.CheckBox = function CheckBox(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      indeterminate = _ref.indeterminate;
  return _react2.default.createElement('input', {
    type: 'checkbox',
    checked: checked,
    className: className,
    ref: function ref(input) {
      if (input) input.indeterminate = indeterminate; // eslint-disable-line no-param-reassign
    },
    onChange: function onChange() {}
  });
};

CheckBox.propTypes = {
  checked: _propTypes2.default.bool.isRequired,
  indeterminate: _propTypes2.default.bool.isRequired,
  className: _propTypes2.default.string
};

var SelectionHeaderCell = function (_Component) {
  _inherits(SelectionHeaderCell, _Component);

  function SelectionHeaderCell() {
    _classCallCheck(this, SelectionHeaderCell);

    var _this = _possibleConstructorReturn(this, (SelectionHeaderCell.__proto__ || Object.getPrototypeOf(SelectionHeaderCell)).call(this));

    _this.handleCheckBoxClick = _this.handleCheckBoxClick.bind(_this);
    return _this;
  }

  /**
   * avoid updating if button is
   * 1. radio
   * 2. status was not changed.
   */


  _createClass(SelectionHeaderCell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var ROW_SELECT_SINGLE = _const2.default.ROW_SELECT_SINGLE;
      var _props = this.props,
          mode = _props.mode,
          checkedStatus = _props.checkedStatus;


      if (mode === ROW_SELECT_SINGLE) return false;

      return nextProps.checkedStatus !== checkedStatus;
    }
  }, {
    key: 'handleCheckBoxClick',
    value: function handleCheckBoxClick(e) {
      var _props2 = this.props,
          onAllRowsSelect = _props2.onAllRowsSelect,
          checkedStatus = _props2.checkedStatus;

      var isUnSelect = checkedStatus === _const2.default.CHECKBOX_STATUS_CHECKED || checkedStatus === _const2.default.CHECKBOX_STATUS_INDETERMINATE;

      onAllRowsSelect(e, isUnSelect);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var CHECKBOX_STATUS_CHECKED = _const2.default.CHECKBOX_STATUS_CHECKED,
          CHECKBOX_STATUS_INDETERMINATE = _const2.default.CHECKBOX_STATUS_INDETERMINATE,
          ROW_SELECT_MULTIPLE = _const2.default.ROW_SELECT_MULTIPLE;
      var _props3 = this.props,
          mode = _props3.mode,
          checkedStatus = _props3.checkedStatus,
          selectionHeaderRenderer = _props3.selectionHeaderRenderer,
          hideSelectAll = _props3.hideSelectAll,
          headerColumnStyle = _props3.headerColumnStyle;

      if (hideSelectAll) {
        return _react2.default.createElement('th', { 'data-row-selection': true });
      }

      var checked = checkedStatus === CHECKBOX_STATUS_CHECKED;

      var indeterminate = checkedStatus === CHECKBOX_STATUS_INDETERMINATE;

      var attrs = {};
      var content = void 0;
      if (selectionHeaderRenderer || mode === ROW_SELECT_MULTIPLE) {
        attrs.onClick = this.handleCheckBoxClick;
      }

      attrs.style = _utils2.default.isFunction(headerColumnStyle) ? headerColumnStyle(checkedStatus) : headerColumnStyle;

      return _react2.default.createElement(
        _bootstrap.BootstrapContext.Consumer,
        null,
        function (_ref2) {
          var bootstrap4 = _ref2.bootstrap4;

          if (selectionHeaderRenderer) {
            content = selectionHeaderRenderer({
              mode: mode,
              checked: checked,
              indeterminate: indeterminate
            });
          } else if (mode === ROW_SELECT_MULTIPLE) {
            content = _react2.default.createElement(CheckBox, _extends({}, _this2.props, {
              checked: checked,
              className: bootstrap4 ? 'selection-input-4' : '',
              indeterminate: indeterminate
            }));
          }
          return _react2.default.createElement(
            'th',
            _extends({ className: 'selection-cell-header', 'data-row-selection': true }, attrs),
            content
          );
        }
      );
    }
  }]);

  return SelectionHeaderCell;
}(_react.Component);

SelectionHeaderCell.propTypes = {
  mode: _propTypes2.default.string.isRequired,
  checkedStatus: _propTypes2.default.string,
  onAllRowsSelect: _propTypes2.default.func,
  hideSelectAll: _propTypes2.default.bool,
  selectionHeaderRenderer: _propTypes2.default.func,
  headerColumnStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func])
};
exports.default = SelectionHeaderCell;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint no-nested-ternary: 0 */


var ExpansionHeaderCell = function (_Component) {
  _inherits(ExpansionHeaderCell, _Component);

  function ExpansionHeaderCell() {
    _classCallCheck(this, ExpansionHeaderCell);

    var _this = _possibleConstructorReturn(this, (ExpansionHeaderCell.__proto__ || Object.getPrototypeOf(ExpansionHeaderCell)).call(this));

    _this.handleCheckBoxClick = _this.handleCheckBoxClick.bind(_this);
    return _this;
  }

  _createClass(ExpansionHeaderCell, [{
    key: 'handleCheckBoxClick',
    value: function handleCheckBoxClick(e) {
      var _props = this.props,
          isAnyExpands = _props.isAnyExpands,
          onAllRowExpand = _props.onAllRowExpand;


      onAllRowExpand(e, !isAnyExpands);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          isAnyExpands = _props2.isAnyExpands,
          expandHeaderColumnRenderer = _props2.expandHeaderColumnRenderer;

      var attrs = {
        onClick: this.handleCheckBoxClick
      };

      return _react2.default.createElement(
        'th',
        _extends({ className: 'expand-cell-header', 'data-row-selection': true }, attrs),
        expandHeaderColumnRenderer ? expandHeaderColumnRenderer({ isAnyExpands: isAnyExpands }) : isAnyExpands ? '(-)' : '(+)'
      );
    }
  }]);

  return ExpansionHeaderCell;
}(_react.Component);

ExpansionHeaderCell.propTypes = {
  isAnyExpands: _propTypes2.default.bool.isRequired,
  onAllRowExpand: _propTypes2.default.func.isRequired,
  expandHeaderColumnRenderer: _propTypes2.default.func
};
exports.default = ExpansionHeaderCell;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _selectionContext = __webpack_require__(8);

var _selectionContext2 = _interopRequireDefault(_selectionContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component) {
  return function () {
    return _react2.default.createElement(
      _selectionContext2.default.Consumer,
      null,
      function (selectRow) {
        return _react2.default.createElement(Component, selectRow);
      }
    );
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExpandedRows = exports.expandableKeys = exports.isAnyExpands = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _rows = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isAnyExpands = exports.isAnyExpands = function isAnyExpands(data, keyField) {
  var expanded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var _loop = function _loop(i) {
    var rowKey = _utils2.default.get(data[i], keyField);
    if (typeof expanded.find(function (x) {
      return x === rowKey;
    }) !== 'undefined') {
      return {
        v: true
      };
    }
  };

  for (var i = 0; i < data.length; i += 1) {
    var _ret = _loop(i);

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
  return false;
};

var expandableKeys = exports.expandableKeys = function expandableKeys(data, keyField) {
  var skips = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (skips.length === 0) {
    return data.map(function (row) {
      return _utils2.default.get(row, keyField);
    });
  }
  return data.filter(function (row) {
    return !_utils2.default.contains(skips, _utils2.default.get(row, keyField));
  }).map(function (row) {
    return _utils2.default.get(row, keyField);
  });
};

var getExpandedRows = exports.getExpandedRows = function getExpandedRows(data, keyField, expanded) {
  return expanded.map(function (k) {
    return (0, _rows.getRowByRowId)(data, keyField, k);
  });
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editCell = undefined;

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _rows = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var editCell = exports.editCell = function editCell(data, keyField, rowId, dataField, newValue) {
  var row = (0, _rows.getRowByRowId)(data, keyField, rowId);
  if (row) _utils2.default.set(row, dataField, newValue);
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextOrder = exports.sort = undefined;

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* eslint no-nested-ternary: 0 */
/* eslint no-lonely-if: 0 */
/* eslint no-underscore-dangle: 0 */


function comparator(a, b) {
  var result = void 0;
  if (typeof b === 'string') {
    result = b.localeCompare(a);
  } else {
    result = a > b ? -1 : a < b ? 1 : 0;
  }
  return result;
}

var sort = exports.sort = function sort(data, sortOrder, _ref) {
  var dataField = _ref.dataField,
      sortFunc = _ref.sortFunc,
      sortValue = _ref.sortValue;

  var _data = [].concat(_toConsumableArray(data));
  _data.sort(function (a, b) {
    var result = void 0;
    var valueA = _utils2.default.get(a, dataField);
    var valueB = _utils2.default.get(b, dataField);
    if (sortValue) {
      valueA = sortValue(valueA, a);
      valueB = sortValue(valueB, b);
    } else {
      valueA = _utils2.default.isDefined(valueA) ? valueA : '';
      valueB = _utils2.default.isDefined(valueB) ? valueB : '';
    }

    if (sortFunc) {
      result = sortFunc(valueA, valueB, sortOrder, dataField, a, b);
    } else {
      if (sortOrder === _const2.default.SORT_DESC) {
        result = comparator(valueA, valueB);
      } else {
        result = comparator(valueB, valueA);
      }
    }
    return result;
  });
  return _data;
};

var nextOrder = exports.nextOrder = function nextOrder(currentSortColumn, _ref2) {
  var sortOrder = _ref2.sortOrder,
      sortColumn = _ref2.sortColumn;
  var defaultOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _const2.default.SORT_DESC;

  if (!sortColumn || currentSortColumn.dataField !== sortColumn.dataField) return defaultOrder;
  return sortOrder === _const2.default.SORT_DESC ? _const2.default.SORT_ASC : _const2.default.SORT_DESC;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeConvert = undefined;

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeConvert = exports.typeConvert = function typeConvert(type, value) {
  if (type === _const2.default.TYPE_STRING) {
    return String(value);
  } else if (type === _const2.default.TYPE_NUMBER) {
    return Number(value);
  } else if (type === _const2.default.TYPE_BOOLEAN) {
    if (typeof value === 'boolean') {
      return value;
    }
    return value === 'true';
  } else if (type === _const2.default.TYPE_DATE) {
    return new Date(value);
  }
  return value;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rowExpandContext = __webpack_require__(10);

var _rowExpandContext2 = _interopRequireDefault(_rowExpandContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component) {
  return function () {
    return _react2.default.createElement(
      _rowExpandContext2.default.Consumer,
      null,
      function (expandRow) {
        return _react2.default.createElement(Component, expandRow);
      }
    );
  };
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _filtersCell = __webpack_require__(39);

var _filtersCell2 = _interopRequireDefault(_filtersCell);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _rowTemplate = __webpack_require__(12);

var _rowTemplate2 = _interopRequireDefault(_rowTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filters = function Filters(props) {
  var columns = props.columns,
      onFilter = props.onFilter,
      currFilters = props.currFilters,
      filterPosition = props.filterPosition,
      onExternalFilter = props.onExternalFilter,
      className = props.className,
      selectRow = props.selectRow,
      expandRow = props.expandRow;


  function renderContent() {
    var filterColumns = [];
    var showFiltersRow = false;

    columns.forEach(function (column, i) {
      filterColumns.push(_react2.default.createElement(_filtersCell2.default, {
        index: i,
        key: column.dataField,
        column: column,
        currFilters: currFilters,
        onExternalFilter: onExternalFilter,
        onFilter: onFilter
      }));

      if (column.filterRenderer || column.filter) {
        if (!showFiltersRow) {
          showFiltersRow = true;
        }
      }
    });
    return filterColumns;
  }

  return _react2.default.createElement(
    'tbody',
    {
      className: className,
      style: {
        display: filterPosition === _const2.default.FILTERS_POSITION_TOP ? 'table-header-group' : 'table-footer-group'
      }
    },
    _react2.default.createElement(_rowTemplate2.default, {
      renderContent: renderContent,
      selectRow: selectRow,
      expandRow: expandRow,
      cellEl: 'td'
    })
  );
}; /* eslint react/require-default-props: 0 */


Filters.propTypes = {
  columns: _propTypes2.default.array.isRequired,
  onFilter: _propTypes2.default.func,
  filterPosition: _propTypes2.default.oneOf([_const2.default.FILTERS_POSITION_TOP, _const2.default.FILTERS_POSITION_INLINE, _const2.default.FILTERS_POSITION_BOTTOM]),
  currFilters: _propTypes2.default.object,
  onExternalFilter: _propTypes2.default.func,
  className: _propTypes2.default.string,
  selectRow: _propTypes2.default.object,
  expandRow: _propTypes2.default.object
};

Filters.defaultProps = {
  position: _const2.default.FILTERS_POSITION_TOP
};

exports.default = Filters;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FiltersCell = function FiltersCell(props) {
  var index = props.index,
      column = props.column,
      onExternalFilter = props.onExternalFilter,
      currFilters = props.currFilters,
      onFilter = props.onFilter;
  var filterRenderer = column.filterRenderer,
      filter = column.filter;

  var filterElm = void 0;
  var cellAttrs = {};
  var cellStyle = {};
  cellAttrs.style = cellStyle;
  if (column.headerAlign) {
    cellStyle.textAlign = _utils2.default.isFunction(column.headerAlign) ? column.headerAlign(column, index) : column.headerAlign;
  }
  if (column.filterRenderer) {
    var onCustomFilter = onExternalFilter(column, filter.props.type);
    filterElm = filterRenderer(onCustomFilter, column);
  } else if (filter) {
    filterElm = _react2.default.createElement(filter.Filter, _extends({}, filter.props, {
      filterState: currFilters[column.dataField],
      onFilter: onFilter,
      column: column
    }));
  }
  return _react2.default.createElement('th', cellAttrs, filterElm);
};

FiltersCell.propTypes = {
  index: _propTypes2.default.number.isRequired,
  column: _propTypes2.default.object.isRequired,
  currFilters: _propTypes2.default.object.isRequired,
  onFilter: _propTypes2.default.func,
  onExternalFilter: _propTypes2.default.func
};

FiltersCell.defaultProps = {
  onFilter: function onFilter() {},
  onExternalFilter: function onExternalFilter() {}
};

exports.default = FiltersCell;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/require-default-props: 0 */
var Caption = function Caption(props) {
  if (!props.children) return null;

  var caption = props.bootstrap4 ? _react2.default.createElement(
    'caption',
    { style: { captionSide: 'top' } },
    props.children
  ) : _react2.default.createElement(
    'caption',
    null,
    props.children
  );

  return caption;
};

Caption.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
  bootstrap4: _propTypes2.default.bool
};

exports.default = Caption;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _simpleRow = __webpack_require__(42);

var _simpleRow2 = _interopRequireDefault(_simpleRow);

var _aggregateRow = __webpack_require__(44);

var _aggregateRow2 = _interopRequireDefault(_aggregateRow);

var _rowSection = __webpack_require__(47);

var _rowSection2 = _interopRequireDefault(_rowSection);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _rowConsumer = __webpack_require__(48);

var _rowConsumer2 = _interopRequireDefault(_rowConsumer);

var _rowConsumer3 = __webpack_require__(49);

var _rowConsumer4 = _interopRequireDefault(_rowConsumer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/require-default-props: 0 */

var Body = function (_React$Component) {
  _inherits(Body, _React$Component);

  function Body(props) {
    _classCallCheck(this, Body);

    var _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));

    var keyField = props.keyField,
        cellEdit = props.cellEdit,
        selectRow = props.selectRow,
        expandRow = props.expandRow;

    // Construct Editing Cell Component

    if (cellEdit.createContext) {
      _this.EditingCell = cellEdit.createEditingCell(_utils2.default, cellEdit.options.onStartEdit);
    }

    // Construct Row Component
    var RowComponent = _simpleRow2.default;
    var selectRowEnabled = selectRow.mode !== _const2.default.ROW_SELECT_DISABLED;
    var expandRowEnabled = !!expandRow.renderer;

    if (expandRowEnabled) {
      RowComponent = (0, _rowConsumer4.default)(_aggregateRow2.default);
    }

    if (selectRowEnabled) {
      RowComponent = (0, _rowConsumer2.default)(expandRowEnabled ? RowComponent : _aggregateRow2.default);
    }

    if (cellEdit.createContext) {
      RowComponent = cellEdit.withRowLevelCellEdit(RowComponent, selectRowEnabled, keyField, _utils2.default);
    }
    _this.RowComponent = RowComponent;
    return _this;
  }

  _createClass(Body, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          columns = _props.columns,
          data = _props.data,
          tabIndexCell = _props.tabIndexCell,
          keyField = _props.keyField,
          isEmpty = _props.isEmpty,
          noDataIndication = _props.noDataIndication,
          visibleColumnSize = _props.visibleColumnSize,
          cellEdit = _props.cellEdit,
          selectRow = _props.selectRow,
          rowStyle = _props.rowStyle,
          rowClasses = _props.rowClasses,
          rowEvents = _props.rowEvents,
          expandRow = _props.expandRow,
          className = _props.className;


      var content = void 0;

      if (isEmpty) {
        var indication = _utils2.default.isFunction(noDataIndication) ? noDataIndication() : noDataIndication;
        if (!indication) {
          return null;
        }
        content = _react2.default.createElement(_rowSection2.default, { content: indication, colSpan: visibleColumnSize });
      } else {
        var selectRowEnabled = selectRow.mode !== _const2.default.ROW_SELECT_DISABLED;
        var expandRowEnabled = !!expandRow.renderer;

        var additionalRowProps = {};

        if (cellEdit.createContext) {
          additionalRowProps.EditingCellComponent = this.EditingCell;
        }

        if (selectRowEnabled || expandRowEnabled) {
          additionalRowProps.expandRow = expandRow;
          additionalRowProps.selectRow = selectRow;
        }

        content = data.map(function (row, index) {
          var key = _utils2.default.get(row, keyField);
          var baseRowProps = _extends({
            key: key,
            row: row,
            tabIndexCell: tabIndexCell,
            columns: columns,
            keyField: keyField,
            cellEdit: cellEdit,
            value: key,
            rowIndex: index,
            visibleColumnSize: visibleColumnSize,
            attrs: rowEvents || {}
          }, additionalRowProps);

          baseRowProps.style = _utils2.default.isFunction(rowStyle) ? rowStyle(row, index) : rowStyle;
          baseRowProps.className = _utils2.default.isFunction(rowClasses) ? rowClasses(row, index) : rowClasses;

          return _react2.default.createElement(_this2.RowComponent, baseRowProps);
        });
      }

      return _react2.default.createElement(
        'tbody',
        { className: className },
        content
      );
    }
  }]);

  return Body;
}(_react2.default.Component);

Body.propTypes = {
  keyField: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.array.isRequired,
  columns: _propTypes2.default.array.isRequired,
  selectRow: _propTypes2.default.object
};

exports.default = Body;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rowPureContent = __webpack_require__(13);

var _rowPureContent2 = _interopRequireDefault(_rowPureContent);

var _eventDelegater = __webpack_require__(14);

var _eventDelegater2 = _interopRequireDefault(_eventDelegater);

var _shouldUpdater2 = __webpack_require__(15);

var _shouldUpdater3 = _interopRequireDefault(_shouldUpdater2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/no-array-index-key: 0 */


var SimpleRow = function (_shouldUpdater) {
  _inherits(SimpleRow, _shouldUpdater);

  function SimpleRow(props) {
    _classCallCheck(this, SimpleRow);

    var _this = _possibleConstructorReturn(this, (SimpleRow.__proto__ || Object.getPrototypeOf(SimpleRow)).call(this, props));

    _this.shouldUpdateRowContent = false;
    return _this;
  }

  _createClass(SimpleRow, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      this.shouldUpdateRowContent = false;
      this.shouldUpdateRowContent = this.shouldRowContentUpdate(nextProps);
      if (this.shouldUpdateRowContent) return true;

      return this.shouldUpdatedBySelfProps(nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          attrs = _props.attrs,
          visibleColumnSize = _props.visibleColumnSize,
          tabIndexCell = _props.tabIndexCell,
          rest = _objectWithoutProperties(_props, ['className', 'style', 'attrs', 'visibleColumnSize', 'tabIndexCell']);

      var trAttrs = this.delegate(attrs);
      var tabIndexStart = this.props.rowIndex * visibleColumnSize + 1;

      return _react2.default.createElement(
        'tr',
        _extends({ style: style, className: className }, trAttrs),
        _react2.default.createElement(_rowPureContent2.default, _extends({
          shouldUpdate: this.shouldUpdateRowContent,
          tabIndexStart: tabIndexCell ? tabIndexStart : -1
        }, rest))
      );
    }
  }]);

  return SimpleRow;
}((0, _shouldUpdater3.default)((0, _eventDelegater2.default)(_react.Component)));

SimpleRow.propTypes = {
  row: _propTypes2.default.object.isRequired,
  rowIndex: _propTypes2.default.number.isRequired,
  columns: _propTypes2.default.array.isRequired,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  attrs: _propTypes2.default.object
};

SimpleRow.defaultProps = {
  editable: true,
  style: {},
  className: null,
  attrs: {}
};

exports.default = SimpleRow;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cellEventDelegater = __webpack_require__(7);

var _cellEventDelegater2 = _interopRequireDefault(_cellEventDelegater);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


var Cell = function (_eventDelegater) {
  _inherits(Cell, _eventDelegater);

  function Cell(props) {
    _classCallCheck(this, Cell);

    var _this = _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).call(this, props));

    _this.createHandleEditingCell = function (originFunc) {
      return function (e) {
        var _this$props = _this.props,
            onStart = _this$props.onStart,
            rowIndex = _this$props.rowIndex,
            columnIndex = _this$props.columnIndex,
            clickToEdit = _this$props.clickToEdit,
            dbclickToEdit = _this$props.dbclickToEdit;

        if ((clickToEdit || dbclickToEdit) && _utils2.default.isFunction(originFunc)) {
          originFunc(e);
        }
        if (onStart) {
          onStart(rowIndex, columnIndex);
        }
      };
    };

    _this.createHandleEditingCell = _this.createHandleEditingCell.bind(_this);
    return _this;
  }

  _createClass(Cell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var shouldUpdate = false;
      if (nextProps.column.isDummyField) {
        shouldUpdate = !_utils2.default.isEqual(this.props.row, nextProps.row);
      } else {
        shouldUpdate = _utils2.default.get(this.props.row, this.props.column.dataField) !== _utils2.default.get(nextProps.row, nextProps.column.dataField);
      }

      if (shouldUpdate) return true;

      // if (nextProps.formatter)

      shouldUpdate = (nextProps.column.formatter ? !_utils2.default.isEqual(this.props.row, nextProps.row) : false) || this.props.column.hidden !== nextProps.column.hidden || this.props.column.isDummyField !== nextProps.column.isDummyField || this.props.rowIndex !== nextProps.rowIndex || this.props.columnIndex !== nextProps.columnIndex || this.props.className !== nextProps.className || this.props.title !== nextProps.title || this.props.editable !== nextProps.editable || this.props.clickToEdit !== nextProps.clickToEdit || this.props.dbclickToEdit !== nextProps.dbclickToEdit || !_utils2.default.isEqual(this.props.style, nextProps.style) || !_utils2.default.isEqual(this.props.column.formatExtraData, nextProps.column.formatExtraData) || !_utils2.default.isEqual(this.props.column.events, nextProps.column.events) || !_utils2.default.isEqual(this.props.column.attrs, nextProps.column.attrs) || this.props.tabIndex !== nextProps.tabIndex;
      return shouldUpdate;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          row = _props.row,
          rowIndex = _props.rowIndex,
          column = _props.column,
          columnIndex = _props.columnIndex,
          onStart = _props.onStart,
          editable = _props.editable,
          clickToEdit = _props.clickToEdit,
          dbclickToEdit = _props.dbclickToEdit,
          rest = _objectWithoutProperties(_props, ['row', 'rowIndex', 'column', 'columnIndex', 'onStart', 'editable', 'clickToEdit', 'dbclickToEdit']);

      var dataField = column.dataField,
          formatter = column.formatter,
          formatExtraData = column.formatExtraData;

      var attrs = this.delegate(_extends({}, rest));
      var content = column.isDummyField ? null : _utils2.default.get(row, dataField);

      if (formatter) {
        content = column.formatter(content, row, rowIndex, formatExtraData);
      }

      if (clickToEdit && editable) {
        attrs.onClick = this.createHandleEditingCell(attrs.onClick);
      } else if (dbclickToEdit && editable) {
        attrs.onDoubleClick = this.createHandleEditingCell(attrs.onDoubleClick);
      }

      return _react2.default.createElement(
        'td',
        attrs,
        typeof content === 'boolean' ? '' + content : content
      );
    }
  }]);

  return Cell;
}((0, _cellEventDelegater2.default)(_react.Component));

Cell.propTypes = {
  row: _propTypes2.default.object.isRequired,
  rowIndex: _propTypes2.default.number.isRequired,
  column: _propTypes2.default.object.isRequired,
  columnIndex: _propTypes2.default.number.isRequired
};

exports.default = Cell;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _expandCell = __webpack_require__(45);

var _expandCell2 = _interopRequireDefault(_expandCell);

var _selectionCell = __webpack_require__(46);

var _selectionCell2 = _interopRequireDefault(_selectionCell);

var _shouldUpdater2 = __webpack_require__(15);

var _shouldUpdater3 = _interopRequireDefault(_shouldUpdater2);

var _eventDelegater = __webpack_require__(14);

var _eventDelegater2 = _interopRequireDefault(_eventDelegater);

var _rowPureContent = __webpack_require__(13);

var _rowPureContent2 = _interopRequireDefault(_rowPureContent);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint class-methods-use-this: 0 */
/* eslint react/prop-types: 0 */
/* eslint no-plusplus: 0 */


var RowAggregator = function (_shouldUpdater) {
  _inherits(RowAggregator, _shouldUpdater);

  function RowAggregator(props) {
    _classCallCheck(this, RowAggregator);

    var _this = _possibleConstructorReturn(this, (RowAggregator.__proto__ || Object.getPrototypeOf(RowAggregator)).call(this, props));

    _this.clickNum = 0;
    _this.shouldUpdateRowContent = false;
    _this.createClickEventHandler = _this.createClickEventHandler.bind(_this);
    return _this;
  }

  _createClass(RowAggregator, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.selected !== nextProps.selected || this.props.expanded !== nextProps.expanded || this.props.expandable !== nextProps.expandable || this.props.selectable !== nextProps.selectable || this.props.selectRow.hideSelectColumn !== nextProps.selectRow.hideSelectColumn || this.shouldUpdatedBySelfProps(nextProps)) {
        this.shouldUpdateRowContent = this.shouldRowContentUpdate(nextProps);
        return true;
      }
      this.shouldUpdateRowContent = this.shouldRowContentUpdate(nextProps);

      return this.shouldUpdateRowContent;
    }
  }, {
    key: 'isRenderFunctionColumnInLeft',
    value: function isRenderFunctionColumnInLeft() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _const2.default.INDICATOR_POSITION_LEFT;

      return position === _const2.default.INDICATOR_POSITION_LEFT;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          row = _props.row,
          columns = _props.columns,
          keyField = _props.keyField,
          rowIndex = _props.rowIndex,
          style = _props.style,
          className = _props.className,
          attrs = _props.attrs,
          selectRow = _props.selectRow,
          expandRow = _props.expandRow,
          expanded = _props.expanded,
          expandable = _props.expandable,
          selected = _props.selected,
          selectable = _props.selectable,
          visibleColumnSize = _props.visibleColumnSize,
          tabIndexCell = _props.tabIndexCell,
          rest = _objectWithoutProperties(_props, ['row', 'columns', 'keyField', 'rowIndex', 'style', 'className', 'attrs', 'selectRow', 'expandRow', 'expanded', 'expandable', 'selected', 'selectable', 'visibleColumnSize', 'tabIndexCell']);

      var key = _utils2.default.get(row, keyField);
      var hideSelectColumn = selectRow.hideSelectColumn,
          selectColumnPosition = selectRow.selectColumnPosition,
          clickToSelect = selectRow.clickToSelect;
      var showExpandColumn = expandRow.showExpandColumn,
          expandColumnPosition = expandRow.expandColumnPosition;


      var newAttrs = this.delegate(_extends({}, attrs));
      if (clickToSelect || !!expandRow.renderer) {
        newAttrs.onClick = this.createClickEventHandler(newAttrs.onClick);
      }

      var tabIndexStart = rowIndex * visibleColumnSize + 1;

      var childrens = [_react2.default.createElement(_rowPureContent2.default, _extends({
        key: 'row',
        row: row,
        columns: columns,
        keyField: keyField,
        rowIndex: rowIndex,
        shouldUpdate: this.shouldUpdateRowContent,
        tabIndexStart: tabIndexCell ? tabIndexStart : -1
      }, rest))];

      if (!hideSelectColumn) {
        var selectCell = _react2.default.createElement(_selectionCell2.default, _extends({}, selectRow, {
          key: 'selection-cell',
          rowKey: key,
          rowIndex: rowIndex,
          selected: selected,
          disabled: !selectable,
          tabIndex: tabIndexCell ? tabIndexStart++ : -1
        }));
        if (this.isRenderFunctionColumnInLeft(selectColumnPosition)) {
          childrens.unshift(selectCell);
        } else {
          childrens.push(selectCell);
        }
      }

      if (showExpandColumn) {
        var expandCell = _react2.default.createElement(_expandCell2.default, _extends({}, expandRow, {
          key: 'expand-cell',
          rowKey: key,
          rowIndex: rowIndex,
          expanded: expanded,
          expandable: expandable,
          tabIndex: tabIndexCell ? tabIndexStart++ : -1
        }));
        if (this.isRenderFunctionColumnInLeft(expandColumnPosition)) {
          childrens.unshift(expandCell);
        } else {
          childrens.push(expandCell);
        }
      }

      return _react2.default.createElement(
        'tr',
        _extends({
          style: style,
          className: className
        }, newAttrs),
        childrens
      );
    }
  }]);

  return RowAggregator;
}((0, _shouldUpdater3.default)((0, _eventDelegater2.default)(_react2.default.Component)));

RowAggregator.propTypes = {
  attrs: _propTypes2.default.object,
  style: _propTypes2.default.object
};
RowAggregator.defaultProps = {
  attrs: {},
  style: {}
};
exports.default = RowAggregator;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 react/require-default-props: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 jsx-a11y/no-noninteractive-element-interactions: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
/* eslint no-nested-ternary: 0 */


var ExpandCell = function (_Component) {
  _inherits(ExpandCell, _Component);

  function ExpandCell() {
    _classCallCheck(this, ExpandCell);

    var _this = _possibleConstructorReturn(this, (ExpandCell.__proto__ || Object.getPrototypeOf(ExpandCell)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(ExpandCell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var shouldUpdate = this.props.rowIndex !== nextProps.rowIndex || this.props.expanded !== nextProps.expanded || this.props.rowKey !== nextProps.rowKey || this.props.tabIndex !== nextProps.tabIndex;

      return shouldUpdate;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _props = this.props,
          rowKey = _props.rowKey,
          expanded = _props.expanded,
          onRowExpand = _props.onRowExpand,
          rowIndex = _props.rowIndex;

      e.stopPropagation();
      onRowExpand(rowKey, !expanded, rowIndex, e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          expanded = _props2.expanded,
          expandable = _props2.expandable,
          expandColumnRenderer = _props2.expandColumnRenderer,
          tabIndex = _props2.tabIndex,
          rowKey = _props2.rowKey;

      var attrs = {};
      if (tabIndex !== -1) attrs.tabIndex = tabIndex;

      return _react2.default.createElement(
        'td',
        _extends({ className: 'expand-cell', onClick: this.handleClick }, attrs),
        expandColumnRenderer ? expandColumnRenderer({
          expandable: expandable,
          expanded: expanded,
          rowKey: rowKey
        }) : expandable ? expanded ? '(-)' : '(+)' : ''
      );
    }
  }]);

  return ExpandCell;
}(_react.Component);

ExpandCell.propTypes = {
  rowKey: _propTypes2.default.any,
  expanded: _propTypes2.default.bool.isRequired,
  expandable: _propTypes2.default.bool.isRequired,
  onRowExpand: _propTypes2.default.func.isRequired,
  expandColumnRenderer: _propTypes2.default.func,
  rowIndex: _propTypes2.default.number,
  tabIndex: _propTypes2.default.number
};
exports.default = ExpandCell;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _bootstrap = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 react/require-default-props: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 jsx-a11y/no-noninteractive-element-interactions: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var SelectionCell = function (_Component) {
  _inherits(SelectionCell, _Component);

  function SelectionCell() {
    _classCallCheck(this, SelectionCell);

    var _this = _possibleConstructorReturn(this, (SelectionCell.__proto__ || Object.getPrototypeOf(SelectionCell)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(SelectionCell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var shouldUpdate = this.props.rowIndex !== nextProps.rowIndex || this.props.selected !== nextProps.selected || this.props.disabled !== nextProps.disabled || this.props.rowKey !== nextProps.rowKey || this.props.tabIndex !== nextProps.tabIndex || this.props.selectColumnStyle !== nextProps.selectColumnStyle;

      return shouldUpdate;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _props = this.props,
          inputType = _props.mode,
          rowKey = _props.rowKey,
          selected = _props.selected,
          onRowSelect = _props.onRowSelect,
          disabled = _props.disabled,
          rowIndex = _props.rowIndex;

      e.stopPropagation();
      if (disabled) return;

      var checked = inputType === _const2.default.ROW_SELECT_SINGLE ? true : !selected;

      onRowSelect(rowKey, checked, rowIndex, e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          rowKey = _props2.rowKey,
          inputType = _props2.mode,
          selected = _props2.selected,
          disabled = _props2.disabled,
          tabIndex = _props2.tabIndex,
          rowIndex = _props2.rowIndex,
          selectionRenderer = _props2.selectionRenderer,
          selectColumnStyle = _props2.selectColumnStyle;


      var attrs = {};
      if (tabIndex !== -1) attrs.tabIndex = tabIndex;

      attrs.style = _utils2.default.isFunction(selectColumnStyle) ? selectColumnStyle({
        checked: selected,
        disabled: disabled,
        rowIndex: rowIndex,
        rowKey: rowKey
      }) : selectColumnStyle;

      return _react2.default.createElement(
        _bootstrap.BootstrapContext.Consumer,
        null,
        function (_ref) {
          var bootstrap4 = _ref.bootstrap4;
          return _react2.default.createElement(
            'td',
            _extends({ className: 'selection-cell', onClick: _this2.handleClick }, attrs),
            selectionRenderer ? selectionRenderer({
              mode: inputType,
              checked: selected,
              disabled: disabled,
              rowIndex: rowIndex,
              rowKey: rowKey
            }) : _react2.default.createElement('input', {
              type: inputType,
              checked: selected,
              disabled: disabled,
              className: bootstrap4 ? 'selection-input-4' : '',
              onChange: function onChange() {}
            })
          );
        }
      );
    }
  }]);

  return SelectionCell;
}(_react.Component);

SelectionCell.propTypes = {
  mode: _propTypes2.default.string.isRequired,
  rowKey: _propTypes2.default.any,
  selected: _propTypes2.default.bool,
  onRowSelect: _propTypes2.default.func,
  disabled: _propTypes2.default.bool,
  rowIndex: _propTypes2.default.number,
  tabIndex: _propTypes2.default.number,
  clickToSelect: _propTypes2.default.bool,
  selectionRenderer: _propTypes2.default.func,
  selectColumnStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func])
};
exports.default = SelectionCell;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RowSection = function RowSection(_ref) {
  var content = _ref.content,
      colSpan = _ref.colSpan;
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      {
        'data-toggle': 'collapse',
        colSpan: colSpan,
        className: 'react-bs-table-no-data'
      },
      content
    )
  );
};

RowSection.propTypes = {
  content: _propTypes2.default.any,
  colSpan: _propTypes2.default.number
};

RowSection.defaultProps = {
  content: null,
  colSpan: 1
};

exports.default = RowSection;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/prop-types: 0 */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _selectionContext = __webpack_require__(8);

var _selectionContext2 = _interopRequireDefault(_selectionContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component) {
  var renderWithSelection = function renderWithSelection(props, selectRow) {
    var key = props.value;
    var selected = _utils2.default.contains(selectRow.selected, key);
    var selectable = !selectRow.nonSelectable || !_utils2.default.contains(selectRow.nonSelectable, key);
    var notSelectable = _utils2.default.contains(selectRow.nonSelectable, key);

    var style = props.style,
        className = props.className;


    if (selected) {
      var selectedStyle = _utils2.default.isFunction(selectRow.style) ? selectRow.style(props.row, props.rowIndex) : selectRow.style;

      var selectedClasses = _utils2.default.isFunction(selectRow.classes) ? selectRow.classes(props.row, props.rowIndex) : selectRow.classes;

      style = _extends({}, style, selectedStyle);
      className = (0, _classnames2.default)(className, selectedClasses) || undefined;

      if (selectRow.bgColor) {
        style = style || {};
        style.backgroundColor = _utils2.default.isFunction(selectRow.bgColor) ? selectRow.bgColor(props.row, props.rowIndex) : selectRow.bgColor;
      }
    }

    if (notSelectable) {
      var notSelectableStyle = _utils2.default.isFunction(selectRow.nonSelectableStyle) ? selectRow.nonSelectableStyle(props.row, props.rowIndex) : selectRow.nonSelectableStyle;

      var notSelectableClasses = _utils2.default.isFunction(selectRow.nonSelectableClasses) ? selectRow.nonSelectableClasses(props.row, props.rowIndex) : selectRow.nonSelectableClasses;

      style = _extends({}, style, notSelectableStyle);
      className = (0, _classnames2.default)(className, notSelectableClasses) || undefined;
    }

    return _react2.default.createElement(Component, _extends({}, props, {
      style: style,
      className: className,
      selectRow: selectRow,
      selected: selected,
      selectable: selectable
    }));
  };

  function withConsumer(props) {
    return _react2.default.createElement(
      _selectionContext2.default.Consumer,
      null,
      function (selectRow) {
        return renderWithSelection(props, selectRow);
      }
    );
  }

  withConsumer.displayName = 'WithSelectionRowConsumer';
  return withConsumer;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/prop-types: 0 */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _expandRow = __webpack_require__(50);

var _expandRow2 = _interopRequireDefault(_expandRow);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _rowExpandContext = __webpack_require__(10);

var _rowExpandContext2 = _interopRequireDefault(_rowExpandContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component) {
  var renderWithExpansion = function renderWithExpansion(props, expandRow) {
    var parentClassName = '';
    var className = '';
    var key = props.value;

    var expanded = _utils2.default.contains(expandRow.expanded, key);
    var isClosing = _utils2.default.contains(expandRow.isClosing, key);
    var expandable = !expandRow.nonExpandable || !_utils2.default.contains(expandRow.nonExpandable, key);
    if (expanded) {
      parentClassName = _utils2.default.isFunction(expandRow.parentClassName) ? expandRow.parentClassName(expanded, props.row, props.rowIndex) : expandRow.parentClassName || '';

      className = _utils2.default.isFunction(expandRow.className) ? expandRow.className(expanded, props.row, props.rowIndex) : expandRow.className || '';
    }

    return [_react2.default.createElement(Component, _extends({}, props, {
      key: key,
      expanded: expanded,
      expandable: expandable,
      expandRow: _extends({}, expandRow),
      className: (0, _classnames2.default)(props.className, parentClassName)
    })), expanded || isClosing ? _react2.default.createElement(
      _expandRow2.default,
      {
        key: key + '-expanding',
        colSpan: props.visibleColumnSize,
        expanded: expanded,
        onClosed: function onClosed() {
          return expandRow.onClosed(key);
        },
        className: className
      },
      expandRow.renderer(props.row, props.rowIndex)
    ) : null];
  };
  return function (props) {
    return _react2.default.createElement(
      _rowExpandContext2.default.Consumer,
      null,
      function (expandRow) {
        return renderWithExpansion(props, expandRow);
      }
    );
  };
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-transition-group\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ExpandRow = function ExpandRow(_ref) {
  var children = _ref.children,
      expanded = _ref.expanded,
      onClosed = _ref.onClosed,
      className = _ref.className,
      transitionTimeout = _ref.transitionTimeout,
      rest = _objectWithoutProperties(_ref, ["children", "expanded", "onClosed", "className", "transitionTimeout"]);

  return _react2.default.createElement(
    "tr",
    null,
    _react2.default.createElement(
      "td",
      _extends({ className: (0, _classnames2.default)("reset-expansion-style", className) }, rest),
      _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        {
          appear: true,
          "in": expanded,
          timeout: transitionTimeout,
          classNames: "row-expand-slide",
          onExited: onClosed
        },
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            { className: "row-expansion-style" },
            children
          )
        )
      )
    )
  );
};

ExpandRow.propTypes = {
  children: _propTypes2.default.node,
  expanded: _propTypes2.default.bool,
  onClosed: _propTypes2.default.func,
  className: _propTypes2.default.string,
  transitionTimeout: _propTypes2.default.number
};

ExpandRow.defaultProps = {
  children: null,
  expanded: false,
  onClosed: null,
  className: "",
  transitionTimeout: 400
};

exports.default = ExpandRow;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rowTemplate = __webpack_require__(12);

var _rowTemplate2 = _interopRequireDefault(_rowTemplate);

var _footerCell = __webpack_require__(52);

var _footerCell2 = _interopRequireDefault(_footerCell);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  var data = props.data,
      className = props.className,
      columns = props.columns,
      selectRow = props.selectRow,
      expandRow = props.expandRow;


  function renderContent() {
    return columns.map(function (column, i) {
      if (column.footer === undefined || column.footer === null) {
        return false;
      }

      var columnData = _utils2.default.pluck(data, column.dataField);

      return _react2.default.createElement(_footerCell2.default, {
        index: i,
        key: column.dataField,
        column: column,
        columnData: columnData
      });
    });
  }

  return _react2.default.createElement(
    'tfoot',
    null,
    _react2.default.createElement(_rowTemplate2.default, {
      renderContent: renderContent,
      selectRow: selectRow,
      expandRow: expandRow,
      className: className,
      cellEl: 'th'
    })
  );
}; /* eslint react/require-default-props: 0 */


Footer.propTypes = {
  data: _propTypes2.default.array,
  className: _propTypes2.default.string,
  columns: _propTypes2.default.array,
  selectRow: _propTypes2.default.object,
  expandRow: _propTypes2.default.object
};

exports.default = Footer;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _cellEventDelegater = __webpack_require__(7);

var _cellEventDelegater2 = _interopRequireDefault(_cellEventDelegater);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */


var FooterCell = function (_eventDelegater) {
  _inherits(FooterCell, _eventDelegater);

  function FooterCell() {
    _classCallCheck(this, FooterCell);

    return _possibleConstructorReturn(this, (FooterCell.__proto__ || Object.getPrototypeOf(FooterCell)).apply(this, arguments));
  }

  _createClass(FooterCell, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          index = _props.index,
          column = _props.column,
          columnData = _props.columnData;
      var footer = column.footer,
          footerTitle = column.footerTitle,
          footerAlign = column.footerAlign,
          footerFormatter = column.footerFormatter,
          footerEvents = column.footerEvents,
          footerClasses = column.footerClasses,
          footerStyle = column.footerStyle,
          footerAttrs = column.footerAttrs;


      var delegateEvents = this.delegate(footerEvents);
      var cellAttrs = _extends({}, _utils2.default.isFunction(footerAttrs) ? footerAttrs(column, index) : footerAttrs, delegateEvents);

      var text = '';
      if (_utils2.default.isString(footer)) {
        text = footer;
      } else if (_utils2.default.isFunction(footer)) {
        text = footer(columnData, column, index);
      }

      var cellStyle = {};
      var cellClasses = _utils2.default.isFunction(footerClasses) ? footerClasses(column, index) : footerClasses;

      if (footerStyle) {
        cellStyle = _utils2.default.isFunction(footerStyle) ? footerStyle(column, index) : footerStyle;
        cellStyle = cellStyle ? _extends({}, cellStyle) : cellStyle;
      }

      if (footerTitle) {
        cellAttrs.title = _utils2.default.isFunction(footerTitle) ? footerTitle(column, index) : text;
      }

      if (footerAlign) {
        cellStyle.textAlign = _utils2.default.isFunction(footerAlign) ? footerAlign(column, index) : footerAlign;
      }

      if (cellClasses) cellAttrs.className = (0, _classnames2.default)(cellAttrs.className, cellClasses);
      if (!_utils2.default.isEmptyObject(cellStyle)) cellAttrs.style = cellStyle;

      var children = footerFormatter ? footerFormatter(column, index, { text: text }) : text;

      return _react2.default.createElement('th', cellAttrs, children);
    }
  }]);

  return FooterCell;
}((0, _cellEventDelegater2.default)(_react2.default.Component));

FooterCell.propTypes = {
  columnData: _propTypes2.default.array,
  index: _propTypes2.default.number,
  column: _propTypes2.default.object
};

exports.default = FooterCell;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _columnResolver = __webpack_require__(54);

var _columnResolver2 = _interopRequireDefault(_columnResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ExtendBase) {
  return function (_ColumnResolver) {
    _inherits(TableResolver, _ColumnResolver);

    function TableResolver() {
      _classCallCheck(this, TableResolver);

      return _possibleConstructorReturn(this, (TableResolver.__proto__ || Object.getPrototypeOf(TableResolver)).apply(this, arguments));
    }

    _createClass(TableResolver, [{
      key: 'validateProps',
      value: function validateProps() {
        var keyField = this.props.keyField;

        if (!keyField) {
          throw new Error('Please specify a field as key via keyField');
        }
        if (this.visibleColumnSize(false) <= 0) {
          throw new Error('No visible columns detected');
        }
      }
    }, {
      key: 'isEmpty',
      value: function isEmpty() {
        return this.props.data.length === 0;
      }
    }, {
      key: 'visibleRows',
      value: function visibleRows() {
        var _props = this.props,
            data = _props.data,
            hiddenRows = _props.hiddenRows,
            keyField = _props.keyField;

        if (!hiddenRows || hiddenRows.length === 0) return data;
        return data.filter(function (row) {
          var key = _utils2.default.get(row, keyField);
          return !_utils2.default.contains(hiddenRows, key);
        });
      }
    }]);

    return TableResolver;
  }((0, _columnResolver2.default)(ExtendBase));
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(ColumnResolver, _ExtendBase);

    function ColumnResolver() {
      _classCallCheck(this, ColumnResolver);

      return _possibleConstructorReturn(this, (ColumnResolver.__proto__ || Object.getPrototypeOf(ColumnResolver)).apply(this, arguments));
    }

    _createClass(ColumnResolver, [{
      key: "visibleColumnSize",
      value: function visibleColumnSize() {
        var includeSelectColumn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        var columnLen = void 0;
        if (this.props.columnToggle && this.props.columnToggle.toggles) {
          var columns = this.props.columnToggle.toggles;
          columnLen = Object.keys(columns).filter(function (name) {
            return columns[name];
          }).length;
        } else {
          columnLen = this.props.columns.filter(function (c) {
            return !c.hidden;
          }).length;
        }
        if (!includeSelectColumn) return columnLen;
        if (this.props.selectRow && !this.props.selectRow.hideSelectColumn) {
          columnLen += 1;
        }
        if (this.props.expandRow && this.props.expandRow.showExpandColumn) {
          columnLen += 1;
        }
        return columnLen;
      }
    }]);

    return ColumnResolver;
  }(ExtendBase);
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _events = __webpack_require__(16);

var _events2 = _interopRequireDefault(_events);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _dataContext = __webpack_require__(56);

var _dataContext2 = _interopRequireDefault(_dataContext);

var _columnContext = __webpack_require__(57);

var _columnContext2 = _interopRequireDefault(_columnContext);

var _sortContext = __webpack_require__(58);

var _sortContext2 = _interopRequireDefault(_sortContext);

var _selectionContext = __webpack_require__(8);

var _selectionContext2 = _interopRequireDefault(_selectionContext);

var _rowExpandContext = __webpack_require__(10);

var _rowExpandContext2 = _interopRequireDefault(_rowExpandContext);

var _remoteResolver2 = __webpack_require__(59);

var _remoteResolver3 = _interopRequireDefault(_remoteResolver2);

var _bootstrap = __webpack_require__(5);

var _operators = __webpack_require__(9);

var _operators2 = _interopRequireDefault(_operators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */
/* eslint no-return-assign: 0 */
/* eslint no-param-reassign: 0 */
/* eslint class-methods-use-this: 0 */


var withContext = function withContext(Base) {
  return function (_remoteResolver) {
    _inherits(BootstrapTableContainer, _remoteResolver);

    function BootstrapTableContainer(props) {
      _classCallCheck(this, BootstrapTableContainer);

      var _this = _possibleConstructorReturn(this, (BootstrapTableContainer.__proto__ || Object.getPrototypeOf(BootstrapTableContainer)).call(this, props));

      _this.DataContext = (0, _dataContext2.default)();

      if (props.registerExposedAPI) {
        var exposedAPIEmitter = new _events2.default();
        exposedAPIEmitter.on('get.table.data', function (payload) {
          return payload.result = _this.table.getData();
        });
        exposedAPIEmitter.on('get.selected.rows', function (payload) {
          return payload.result = _this.selectionContext.getSelected();
        });
        exposedAPIEmitter.on('get.filtered.rows', function (payload) {
          if (_this.searchContext) {
            payload.result = _this.searchContext.getSearched();
          } else if (_this.filterContext) {
            payload.result = _this.filterContext.getFiltered();
          } else {
            payload.result = _this.table.getData();
          }
        });
        props.registerExposedAPI(exposedAPIEmitter);
      }

      if (props.columns.filter(function (col) {
        return col.sort;
      }).length > 0) {
        _this.SortContext = (0, _sortContext2.default)(_operators2.default, _this.isRemoteSort, _this.handleRemoteSortChange);
      }

      if (props.columnToggle || props.columns.filter(function (col) {
        return col.hidden;
      }).length > 0) {
        _this.ColumnManagementContext = (0, _columnContext2.default)();
      }

      if (props.selectRow) {
        _this.SelectionContext = _selectionContext2.default;
      }

      if (props.expandRow) {
        _this.RowExpandContext = _rowExpandContext2.default;
      }

      if (props.cellEdit && props.cellEdit.createContext) {
        _this.CellEditContext = props.cellEdit.createContext(_utils2.default, _operators2.default, _this.isRemoteCellEdit, _this.handleRemoteCellChange);
      }

      if (props.filter) {
        _this.FilterContext = props.filter.createContext(_utils2.default, _this.isRemoteFiltering, _this.handleRemoteFilterChange);
      }

      if (props.pagination) {
        _this.PaginationContext = props.pagination.createContext();
      }

      if (props.search && props.search.searchContext) {
        _this.SearchContext = props.search.searchContext(_utils2.default, _this.isRemoteSearch, _this.handleRemoteSearchChange);
      }

      if (props.setDependencyModules) {
        props.setDependencyModules(_utils2.default);
      }

      if (props.setPaginationRemoteEmitter) {
        props.setPaginationRemoteEmitter(_this.remoteEmitter);
      }
      return _this;
    }

    _createClass(BootstrapTableContainer, [{
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.columns.filter(function (col) {
          return col.sort;
        }).length <= 0) {
          this.SortContext = null;
        } else if (!this.SortContext) {
          this.SortContext = (0, _sortContext2.default)(_operators2.default, this.isRemoteSort, this.handleRemoteSortChange);
        }
        if (!nextProps.pagination && this.props.pagination) {
          this.PaginationContext = null;
        }
        if (nextProps.pagination && !this.props.pagination) {
          this.PaginationContext = nextProps.pagination.createContext(this.isRemotePagination, this.handleRemotePageChange);
        }
        if (!nextProps.cellEdit && this.props.cellEdit) {
          this.CellEditContext = null;
        }
        if (nextProps.cellEdit && !this.props.cellEdit) {
          this.CellEditContext = nextProps.cellEdit.createContext(_utils2.default, _operators2.default, this.isRemoteCellEdit, this.handleRemoteCellChange);
        }
      }
    }, {
      key: 'renderBase',
      value: function renderBase() {
        var _this2 = this;

        return function (rootProps, filterProps, searchProps, sortProps, paginationProps, columnToggleProps) {
          return _react2.default.createElement(Base, _extends({
            ref: function ref(n) {
              return _this2.table = n;
            }
          }, _this2.props, sortProps, filterProps, searchProps, paginationProps, columnToggleProps, {
            data: rootProps.getData(filterProps, searchProps, sortProps, paginationProps)
          }));
        };
      }
    }, {
      key: 'renderWithColumnManagementCtx',
      value: function renderWithColumnManagementCtx(base, baseProps) {
        var _this3 = this;

        return function (rootProps, filterProps, searchProps, sortProps, paginationProps) {
          return _react2.default.createElement(
            _this3.ColumnManagementContext.Provider,
            _extends({}, baseProps, {
              toggles: _this3.props.columnToggle ? _this3.props.columnToggle.toggles : null
            }),
            _react2.default.createElement(
              _this3.ColumnManagementContext.Consumer,
              null,
              function (columnToggleProps) {
                return base(rootProps, filterProps, searchProps, sortProps, paginationProps, columnToggleProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithSelectionCtx',
      value: function renderWithSelectionCtx(base, baseProps) {
        var _this4 = this;

        return function (rootProps, filterProps, searchProps, sortProps, paginationProps) {
          return _react2.default.createElement(
            _this4.SelectionContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this4.selectionContext = n;
              },
              selectRow: _this4.props.selectRow,
              data: rootProps.getData(filterProps, searchProps, sortProps, paginationProps)
            }),
            base(rootProps, filterProps, searchProps, sortProps, paginationProps)
          );
        };
      }
    }, {
      key: 'renderWithRowExpandCtx',
      value: function renderWithRowExpandCtx(base, baseProps) {
        var _this5 = this;

        return function (rootProps, filterProps, searchProps, sortProps, paginationProps) {
          return _react2.default.createElement(
            _this5.RowExpandContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this5.rowExpandContext = n;
              },
              expandRow: _this5.props.expandRow,
              data: rootProps.getData(filterProps, searchProps, sortProps, paginationProps)
            }),
            base(rootProps, filterProps, searchProps, sortProps, paginationProps)
          );
        };
      }
    }, {
      key: 'renderWithPaginationCtx',
      value: function renderWithPaginationCtx(base) {
        var _this6 = this;

        return function (rootProps, filterProps, searchProps, sortProps) {
          return _react2.default.createElement(
            _this6.PaginationContext.Provider,
            {
              ref: function ref(n) {
                return _this6.paginationContext = n;
              },
              pagination: _this6.props.pagination,
              data: rootProps.getData(filterProps, searchProps, sortProps),
              bootstrap4: _this6.props.bootstrap4,
              isRemotePagination: _this6.isRemotePagination,
              remoteEmitter: _this6.remoteEmitter,
              onDataSizeChange: _this6.props.onDataSizeChange,
              tableId: _this6.props.id
            },
            _react2.default.createElement(
              _this6.PaginationContext.Consumer,
              null,
              function (paginationProps) {
                return base(rootProps, filterProps, searchProps, sortProps, paginationProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithSortCtx',
      value: function renderWithSortCtx(base, baseProps) {
        var _this7 = this;

        return function (rootProps, filterProps, searchProps) {
          return _react2.default.createElement(
            _this7.SortContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this7.sortContext = n;
              },
              defaultSorted: _this7.props.defaultSorted,
              defaultSortDirection: _this7.props.defaultSortDirection,
              sort: _this7.props.sort,
              data: rootProps.getData(filterProps, searchProps)
            }),
            _react2.default.createElement(
              _this7.SortContext.Consumer,
              null,
              function (sortProps) {
                return base(rootProps, filterProps, searchProps, sortProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithSearchCtx',
      value: function renderWithSearchCtx(base, baseProps) {
        var _this8 = this;

        return function (rootProps, filterProps) {
          return _react2.default.createElement(
            _this8.SearchContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this8.searchContext = n;
              },
              data: rootProps.getData(filterProps),
              searchText: _this8.props.search.searchText,
              dataChangeListener: _this8.props.dataChangeListener
            }),
            _react2.default.createElement(
              _this8.SearchContext.Consumer,
              null,
              function (searchProps) {
                return base(rootProps, filterProps, searchProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithFilterCtx',
      value: function renderWithFilterCtx(base, baseProps) {
        var _this9 = this;

        return function (rootProps) {
          return _react2.default.createElement(
            _this9.FilterContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this9.filterContext = n;
              },
              data: rootProps.getData(),
              filter: _this9.props.filter.options || {},
              dataChangeListener: _this9.props.dataChangeListener
            }),
            _react2.default.createElement(
              _this9.FilterContext.Consumer,
              null,
              function (filterProps) {
                return base(rootProps, filterProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithCellEditCtx',
      value: function renderWithCellEditCtx(base, baseProps) {
        var _this10 = this;

        return function (rootProps) {
          return _react2.default.createElement(
            _this10.CellEditContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this10.cellEditContext = n;
              },
              selectRow: _this10.props.selectRow,
              cellEdit: _this10.props.cellEdit,
              data: rootProps.getData()
            }),
            base(rootProps)
          );
        };
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            keyField = _props.keyField,
            columns = _props.columns,
            bootstrap4 = _props.bootstrap4;

        var baseProps = { keyField: keyField, columns: columns };

        var base = this.renderBase();

        if (this.ColumnManagementContext) {
          base = this.renderWithColumnManagementCtx(base, baseProps);
        }

        if (this.SelectionContext) {
          base = this.renderWithSelectionCtx(base, baseProps);
        }

        if (this.RowExpandContext) {
          base = this.renderWithRowExpandCtx(base, baseProps);
        }

        if (this.PaginationContext) {
          base = this.renderWithPaginationCtx(base, baseProps);
        }

        if (this.SortContext) {
          base = this.renderWithSortCtx(base, baseProps);
        }

        if (this.SearchContext) {
          base = this.renderWithSearchCtx(base, baseProps);
        }

        if (this.FilterContext) {
          base = this.renderWithFilterCtx(base, baseProps);
        }

        if (this.CellEditContext) {
          base = this.renderWithCellEditCtx(base, baseProps);
        }

        return _react2.default.createElement(
          _bootstrap.BootstrapContext.Provider,
          { value: { bootstrap4: bootstrap4 } },
          _react2.default.createElement(
            this.DataContext.Provider,
            _extends({}, baseProps, {
              data: this.props.data
            }),
            _react2.default.createElement(
              this.DataContext.Consumer,
              null,
              base
            )
          )
        );
      }
    }]);

    return BootstrapTableContainer;
  }((0, _remoteResolver3.default)(_react.Component));
};

exports.default = withContext;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */


exports.default = function () {
  var DataContext = _react2.default.createContext();

  var DataProvider = function (_Component) {
    _inherits(DataProvider, _Component);

    function DataProvider() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, DataProvider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DataProvider.__proto__ || Object.getPrototypeOf(DataProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = { data: _this.props.data }, _this.getData = function (filterProps, searchProps, sortProps, paginationProps) {
        if (paginationProps) return paginationProps.data;else if (sortProps) return sortProps.data;else if (searchProps) return searchProps.data;else if (filterProps) return filterProps.data;
        return _this.props.data;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DataProvider, [{
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState(function () {
          return { data: nextProps.data };
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          DataContext.Provider,
          {
            value: {
              data: this.state.data,
              getData: this.getData
            }
          },
          this.props.children
        );
      }
    }]);

    return DataProvider;
  }(_react.Component);

  DataProvider.propTypes = {
    data: _propTypes2.default.array.isRequired,
    children: _propTypes2.default.node.isRequired
  };

  return {
    Provider: DataProvider,
    Consumer: DataContext.Consumer
  };
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/prefer-stateless-function: 0 */


exports.default = function () {
  var ColumnManagementContext = _react2.default.createContext();

  var ColumnManagementProvider = function (_React$Component) {
    _inherits(ColumnManagementProvider, _React$Component);

    function ColumnManagementProvider() {
      _classCallCheck(this, ColumnManagementProvider);

      return _possibleConstructorReturn(this, (ColumnManagementProvider.__proto__ || Object.getPrototypeOf(ColumnManagementProvider)).apply(this, arguments));
    }

    _createClass(ColumnManagementProvider, [{
      key: 'render',
      value: function render() {
        var toggleColumn = void 0;
        var _props = this.props,
            columns = _props.columns,
            toggles = _props.toggles;

        if (toggles) {
          toggleColumn = columns.filter(function (column) {
            return toggles[column.dataField];
          });
        } else {
          toggleColumn = columns.filter(function (column) {
            return !column.hidden;
          });
        }
        return _react2.default.createElement(
          ColumnManagementContext.Provider,
          { value: { columns: toggleColumn } },
          this.props.children
        );
      }
    }]);

    return ColumnManagementProvider;
  }(_react2.default.Component);

  ColumnManagementProvider.propTypes = {
    columns: _propTypes2.default.array.isRequired,
    toggles: _propTypes2.default.object
  };
  ColumnManagementProvider.defaultProps = {
    toggles: null
  };


  return {
    Provider: ColumnManagementProvider,
    Consumer: ColumnManagementContext.Consumer
  };
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */
/* eslint react/require-default-props: 0 */


exports.default = function (dataOperator, isRemoteSort, handleSortChange) {
  var SortContext = _react2.default.createContext();

  var SortProvider = function (_React$Component) {
    _inherits(SortProvider, _React$Component);

    function SortProvider(props) {
      _classCallCheck(this, SortProvider);

      var _this = _possibleConstructorReturn(this, (SortProvider.__proto__ || Object.getPrototypeOf(SortProvider)).call(this, props));

      _initialiseProps.call(_this);

      var sortOrder = void 0;
      var sortColumn = void 0;
      var defaultSorted = props.defaultSorted,
          defaultSortDirection = props.defaultSortDirection,
          sort = props.sort;


      if (defaultSorted && defaultSorted.length > 0) {
        sortOrder = defaultSorted[0].order || defaultSortDirection;
        sortColumn = _this.initSort(defaultSorted[0].dataField, sortOrder);
      } else if (sort && sort.dataField && sort.order) {
        sortOrder = sort.order;
        sortColumn = _this.initSort(sort.dataField, sortOrder);
      }
      _this.state = { sortOrder: sortOrder, sortColumn: sortColumn };
      return _this;
    }

    _createClass(SortProvider, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _state = this.state,
            sortOrder = _state.sortOrder,
            sortColumn = _state.sortColumn;

        if (isRemoteSort() && sortOrder && sortColumn) {
          handleSortChange(sortColumn.dataField, sortOrder);
        }
      }
    }, {
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        var sort = nextProps.sort,
            columns = nextProps.columns;

        if (sort && sort.dataField && sort.order) {
          this.setState({
            sortOrder: sort.order,
            sortColumn: columns.find(function (col) {
              return col.dataField === sort.dataField;
            })
          });
        }
      }
    }, {
      key: 'initSort',
      value: function initSort(sortField, sortOrder) {
        var sortColumn = void 0;
        var columns = this.props.columns;

        var sortColumns = columns.filter(function (col) {
          return col.dataField === sortField;
        });
        if (sortColumns.length > 0) {
          sortColumn = sortColumns[0];

          if (sortColumn.onSort) {
            sortColumn.onSort(sortField, sortOrder);
          }
        }
        return sortColumn;
      }
    }, {
      key: 'render',
      value: function render() {
        var data = this.props.data;
        var sort = this.props.sort;
        var _state2 = this.state,
            sortOrder = _state2.sortOrder,
            sortColumn = _state2.sortColumn;

        if (!isRemoteSort() && sortColumn) {
          var sortFunc = sortColumn.sortFunc ? sortColumn.sortFunc : sort && sort.sortFunc;
          data = dataOperator.sort(data, sortOrder, _extends({}, sortColumn, { sortFunc: sortFunc }));
        }

        return _react2.default.createElement(
          SortContext.Provider,
          {
            value: {
              data: data,
              sortOrder: sortOrder,
              onSort: this.handleSort,
              sortField: sortColumn ? sortColumn.dataField : null
            }
          },
          this.props.children
        );
      }
    }]);

    return SortProvider;
  }(_react2.default.Component);

  SortProvider.propTypes = {
    data: _propTypes2.default.array.isRequired,
    columns: _propTypes2.default.array.isRequired,
    children: _propTypes2.default.node.isRequired,
    defaultSorted: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      dataField: _propTypes2.default.string.isRequired,
      order: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]).isRequired
    })),
    sort: _propTypes2.default.shape({
      dataField: _propTypes2.default.string,
      order: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]),
      sortFunc: _propTypes2.default.func
    }),
    defaultSortDirection: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC])
  };

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.handleSort = function (column) {
      var sortOrder = dataOperator.nextOrder(column, _this2.state, _this2.props.defaultSortDirection);

      if (column.onSort) {
        column.onSort(column.dataField, sortOrder);
      }

      if (isRemoteSort()) {
        handleSortChange(column.dataField, sortOrder);
      }
      _this2.setState(function () {
        return {
          sortOrder: sortOrder,
          sortColumn: column
        };
      });
    };
  };

  return {
    Provider: SortProvider,
    Consumer: SortContext.Consumer
  };
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _events = __webpack_require__(16);

var _events2 = _interopRequireDefault(_events);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(RemoteResolver, _ExtendBase);

    function RemoteResolver(props) {
      _classCallCheck(this, RemoteResolver);

      var _this = _possibleConstructorReturn(this, (RemoteResolver.__proto__ || Object.getPrototypeOf(RemoteResolver)).call(this, props));

      _this.getNewestState = function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var sortOrder = void 0;
        var sortField = void 0;
        var page = void 0;
        var sizePerPage = void 0;
        var searchText = void 0;
        var filters = {};

        if (_this.sortContext) {
          sortOrder = _this.sortContext.state.sortOrder;
          sortField = _this.sortContext.state.sortColumn ? _this.sortContext.state.sortColumn.dataField : null;
        }

        if (_this.filterContext) {
          filters = _this.filterContext.currFilters;
        }

        if (_this.paginationContext) {
          page = _this.paginationContext.currPage;
          sizePerPage = _this.paginationContext.currSizePerPage;
        }

        if (_this.searchContext) {
          searchText = _this.props.search.searchText;
        }

        return _extends({
          sortOrder: sortOrder,
          sortField: sortField,
          filters: filters,
          page: page,
          sizePerPage: sizePerPage,
          searchText: searchText
        }, state, {
          data: _this.props.data
        });
      };

      _this.isRemoteSearch = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.search || _this.isRemotePagination();
      };

      _this.isRemotePagination = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var remote = _this.props.remote;

        e.result = remote === true || _utils2.default.isObject(remote) && remote.pagination;
        return e.result;
      };

      _this.isRemoteFiltering = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.filter || _this.isRemotePagination();
      };

      _this.isRemoteSort = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.sort || _this.isRemotePagination();
      };

      _this.isRemoteCellEdit = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.cellEdit;
      };

      _this.handleRemotePageChange = function (page, sizePerPage) {
        _this.props.onTableChange('pagination', _this.getNewestState({ page: page, sizePerPage: sizePerPage }));
      };

      _this.handleRemoteFilterChange = function (filters) {
        var newState = { filters: filters };
        if (_this.isRemotePagination()) {
          var options = _this.props.pagination.options || {};
          newState.page = _utils2.default.isDefined(options.pageStartIndex) ? options.pageStartIndex : 1;
        }
        _this.props.onTableChange('filter', _this.getNewestState(newState));
      };

      _this.handleRemoteSortChange = function (sortField, sortOrder) {
        _this.props.onTableChange('sort', _this.getNewestState({ sortField: sortField, sortOrder: sortOrder }));
      };

      _this.handleRemoteCellChange = function (rowId, dataField, newValue) {
        var cellEdit = { rowId: rowId, dataField: dataField, newValue: newValue };
        _this.props.onTableChange('cellEdit', _this.getNewestState({ cellEdit: cellEdit }));
      };

      _this.handleRemoteSearchChange = function (searchText) {
        _this.props.onTableChange('search', _this.getNewestState({ searchText: searchText }));
      };

      _this.remoteEmitter = new _events2.default();
      _this.remoteEmitter.on('paginationChange', _this.handleRemotePageChange);
      _this.remoteEmitter.on('isRemotePagination', _this.isRemotePagination);
      return _this;
    }

    return RemoteResolver;
  }(ExtendBase);
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmMzFlZjkzNzlmYWQ5MTk3NWQ3ZiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvcm93cy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jZWxsLWV2ZW50LWRlbGVnYXRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9zZWxlY3Rpb24tY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9vcGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvcm93LWV4cGFuZC1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cvcm93LXRlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy9yb3ctcHVyZS1jb250ZW50LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy9ldmVudC1kZWxlZ2F0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L3Nob3VsZC11cGRhdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvYm9vdHN0cmFwLXRhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvaGVhZGVyLWNlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc29ydC9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc29ydC9jYXJldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS91bmRlcnNjb3JlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1oZWFkZXItY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1oZWFkZXItY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1oZWFkZXItY2VsbC1jb25zdW1lci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9leHBhbmQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvbXV0YXRlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3NvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1oZWFkZXItY2VsbC1jb25zdW1lci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9maWx0ZXJzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2ZpbHRlcnMtY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jYXB0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L3NpbXBsZS1yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cvYWdncmVnYXRlLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1jZWxsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWNlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L3Jvdy1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vcm93LWNvbnN1bWVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1leHBhbmQvcm93LWNvbnN1bWVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1leHBhbmQvZXhwYW5kLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvZm9vdGVyLWNlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcHJvcHMtcmVzb2x2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcHJvcHMtcmVzb2x2ZXIvY29sdW1uLXJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL2RhdGEtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9jb2x1bW4tY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9zb3J0LWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcHJvcHMtcmVzb2x2ZXIvcmVtb3RlLXJlc29sdmVyLmpzIl0sIm5hbWVzIjpbInNwbGl0TmVzdGVkIiwic3RyIiwiam9pbiIsInJlcGxhY2UiLCJzcGxpdCIsImNvbnRhaW5zIiwibGlzdCIsInZhbHVlIiwiaW5jbHVkZXMiLCJpbmRleE9mIiwiZ2V0IiwidGFyZ2V0IiwiZmllbGQiLCJkaXJlY3RHZXQiLCJ1bmRlZmluZWQiLCJwYXRoQXJyYXkiLCJyZXN1bHQiLCJyZWR1Y2UiLCJjdXJyIiwicGF0aCIsImUiLCJzZXQiLCJzYWZlIiwibGV2ZWwiLCJhIiwiYiIsIkVycm9yIiwibGVuZ3RoIiwiaXNFbXB0eU9iamVjdCIsIm9iaiIsImlzT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJrZXlzIiwiaSIsImNhbGwiLCJpc0RlZmluZWQiLCJzbGVlcCIsImZuIiwibXMiLCJzZXRUaW1lb3V0IiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsImFzc2lnbiIsIlNPUlRfQVNDIiwiU09SVF9ERVNDIiwiUk9XX1NFTEVDVF9TSU5HTEUiLCJST1dfU0VMRUNUX01VTFRJUExFIiwiUk9XX1NFTEVDVF9ESVNBQkxFRCIsIkNIRUNLQk9YX1NUQVRVU19DSEVDS0VEIiwiQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEUiLCJDSEVDS0JPWF9TVEFUVVNfVU5DSEVDS0VEIiwiSU5ESUNBVE9SX1BPU0lUSU9OX0xFRlQiLCJJTkRJQ0FUT1JfUE9TSVRJT05fUklHSFQiLCJUWVBFX1NUUklORyIsIlRZUEVfTlVNQkVSIiwiVFlQRV9CT09MRUFOIiwiVFlQRV9EQVRFIiwiRklMVEVSU19QT1NJVElPTl9JTkxJTkUiLCJGSUxURVJTX1BPU0lUSU9OX1RPUCIsIkZJTFRFUlNfUE9TSVRJT05fQk9UVE9NIiwiQm9vdHN0cmFwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJib290c3RyYXA0IiwibWF0Y2hSb3ciLCJrZXlGaWVsZCIsImlkIiwicm93IiwiZ2V0Um93QnlSb3dJZCIsImRhdGEiLCJmaW5kIiwiZXZlbnRzIiwicHJvcHMiLCJjcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyIiwiYmluZCIsImNiIiwiY29sdW1uIiwiY29sdW1uSW5kZXgiLCJpbmRleCIsImF0dHJzIiwibmV3QXR0cnMiLCJmb3JFYWNoIiwiYXR0ciIsIkV4dGVuZEJhc2UiLCJTZWxlY3Rpb25Db250ZXh0IiwiU2VsZWN0aW9uUHJvdmlkZXIiLCJoYW5kbGVSb3dTZWxlY3QiLCJyb3dLZXkiLCJjaGVja2VkIiwicm93SW5kZXgiLCJzZWxlY3RSb3ciLCJtb2RlIiwib25TZWxlY3QiLCJjdXJyU2VsZWN0ZWQiLCJzZWxlY3RlZCIsInB1c2giLCJmaWx0ZXIiLCJmb3JjZVVwZGF0ZSIsImhhbmRsZUFsbFJvd3NTZWxlY3QiLCJpc1VuU2VsZWN0Iiwib25TZWxlY3RBbGwiLCJub25TZWxlY3RhYmxlIiwiY29uY2F0Iiwic2VsZWN0YWJsZUtleXMiLCJkIiwicyIsImdldFNlbGVjdGVkUm93cyIsIkFycmF5IiwiaXNBcnJheSIsIm5leHRQcm9wcyIsImFsbFJvd3NTZWxlY3RlZCIsImFsbFJvd3NOb3RTZWxlY3RlZCIsImNoZWNrZWRTdGF0dXMiLCJvblJvd1NlbGVjdCIsIm9uQWxsUm93c1NlbGVjdCIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJhcnJheSIsInN0cmluZyIsIlByb3ZpZGVyIiwiQ29uc3VtZXIiLCJyb3dzIiwic2VsZWN0aW9uIiwiZXhwYW5kIiwibXV0YXRlIiwic29ydCIsInR5cGUiLCJSb3dFeHBhbmRDb250ZXh0IiwiUm93RXhwYW5kUHJvdmlkZXIiLCJzdGF0ZSIsImV4cGFuZGVkIiwiZXhwYW5kUm93IiwiaXNDbG9zaW5nIiwib25DbG9zZWQiLCJjbG9zZWRSb3ciLCJzZXRTdGF0ZSIsImhhbmRsZVJvd0V4cGFuZCIsIm9uRXhwYW5kIiwib25seU9uZUV4cGFuZGluZyIsIm5vbkV4cGFuZGFibGUiLCJjdXJyRXhwYW5kZWQiLCJoYW5kbGVBbGxSb3dFeHBhbmQiLCJleHBhbmRBbGwiLCJvbkV4cGFuZEFsbCIsImV4cGFuZGFibGVLZXlzIiwiZ2V0RXhwYW5kZWRSb3dzIiwibmV4dEV4cGFuZGVkIiwicm93SWQiLCJhY2MiLCJjdXIiLCJpc0FueUV4cGFuZHMiLCJvblJvd0V4cGFuZCIsIm9uQWxsUm93RXhwYW5kIiwiZ2V0U2VsZWN0aW9uU3VtbWFyeSIsInJvd0tleXMiLCJtYXAiLCJ4Iiwic2tpcHMiLCJ1blNlbGVjdGFibGVLZXlzIiwiayIsIlJvd1RlbXBsYXRlIiwicmVuZGVyQ29udGVudCIsImNlbGxFbCIsInJlc3QiLCJpc1JlbmRlckZ1bmN0aW9uQ29sdW1uSW5MZWZ0IiwicG9zaXRpb24iLCJjaGlsZHJlbnMiLCJoaWRlU2VsZWN0Q29sdW1uIiwic2VsZWN0Q29sdW1uUG9zaXRpb24iLCJ1bnNoaWZ0IiwiY3JlYXRlRWxlbWVudCIsImtleSIsInNob3dFeHBhbmRDb2x1bW4iLCJleHBhbmRDb2x1bW5Qb3NpdGlvbiIsIm9iamVjdCIsIlJvd1B1cmVDb250ZW50Iiwic2hvdWxkVXBkYXRlIiwiY29sdW1ucyIsImVkaXRhYmxlIiwiZWRpdGluZ1Jvd0lkeCIsImVkaXRpbmdDb2xJZHgiLCJvblN0YXJ0IiwiY2xpY2tUb0VkaXQiLCJkYmNsaWNrVG9FZGl0IiwiRWRpdGluZ0NlbGxDb21wb25lbnQiLCJ0YWJJbmRleFN0YXJ0IiwidGFiSW5kZXgiLCJkYXRhRmllbGQiLCJjb250ZW50IiwiY2VsbFRpdGxlIiwiY2VsbFN0eWxlIiwiY2VsbEF0dHJzIiwiaXNGdW5jdGlvbiIsIm9yaWdpbkZuIiwiY2VsbENsYXNzZXMiLCJjbGFzc2VzIiwic3R5bGUiLCJ0aXRsZSIsImFsaWduIiwidGV4dEFsaWduIiwiY2xhc3NOYW1lIiwiZWRpdGFibGVDZWxsIiwiY2xpY2tOdW0iLCJjcmVhdGVDbGlja0V2ZW50SGFuZGxlciIsInNlbGVjdGFibGUiLCJleHBhbmRhYmxlIiwiREVMQVlfRk9SX0RCQ0xJQ0siLCJjbGlja0ZuIiwiZXhwYW5kQnlDb2x1bW5Pbmx5IiwiY2xpY2tUb0V4cGFuZCIsImNsaWNrVG9TZWxlY3QiLCJpc0VxdWFsIiwic2hvdWxkVXBkYXRlQnlDZWxsRWRpdGluZyIsInNob3VsZFVwZGF0ZWRCeU5vcm1hbFByb3BzIiwic2hvdWxkVXBkYXRlQ2hpbGQiLCJzaG91bGRVcGRhdGVCeUNvbHVtbnNGb3JTaW1wbGVDaGVjayIsIkJvb3RzdHJhcFRhYmxlIiwiZ2V0RGF0YSIsInZpc2libGVSb3dzIiwidmFsaWRhdGVQcm9wcyIsIm9uRGF0YVNpemVDaGFuZ2UiLCJwYWdpbmF0aW9uIiwiZGF0YVNpemUiLCJsb2FkaW5nIiwib3ZlcmxheSIsIkxvYWRpbmdPdmVybGF5IiwicmVuZGVyVGFibGUiLCJ0YWJJbmRleENlbGwiLCJzdHJpcGVkIiwiaG92ZXIiLCJib3JkZXJlZCIsImNvbmRlbnNlZCIsIm5vRGF0YUluZGljYXRpb24iLCJjYXB0aW9uIiwicm93U3R5bGUiLCJyb3dDbGFzc2VzIiwid3JhcHBlckNsYXNzZXMiLCJyb3dFdmVudHMiLCJjZWxsRWRpdCIsImZpbHRlclBvc2l0aW9uIiwidGFibGVXcmFwcGVyQ2xhc3MiLCJ0YWJsZUNsYXNzIiwiaGFzRmlsdGVycyIsInNvbWUiLCJjb2wiLCJmaWx0ZXJSZW5kZXJlciIsImhhc0Zvb3RlciIsImhhcyIsInRhYmxlQ2FwdGlvbiIsImhlYWRlckNsYXNzZXMiLCJoZWFkZXJXcmFwcGVyQ2xhc3NlcyIsInNvcnRGaWVsZCIsInNvcnRPcmRlciIsIm9uU29ydCIsInNvcnRDYXJldCIsIm9uRmlsdGVyIiwiY3VyckZpbHRlcnMiLCJvbkV4dGVybmFsRmlsdGVyIiwiZmlsdGVyc0NsYXNzZXMiLCJib2R5Q2xhc3NlcyIsImlzRW1wdHkiLCJ2aXNpYmxlQ29sdW1uU2l6ZSIsImZvb3RlckNsYXNzZXMiLCJib29sIiwicmVtb3RlIiwib25lT2ZUeXBlIiwic2hhcGUiLCJvbmVPZiIsImhpZGVTZWxlY3RBbGwiLCJub25TZWxlY3RhYmxlU3R5bGUiLCJub25TZWxlY3RhYmxlQ2xhc3NlcyIsImJnQ29sb3IiLCJzZWxlY3Rpb25SZW5kZXJlciIsInNlbGVjdGlvbkhlYWRlclJlbmRlcmVyIiwiaGVhZGVyQ29sdW1uU3R5bGUiLCJzZWxlY3RDb2x1bW5TdHlsZSIsInJlbmRlcmVyIiwiZXhwYW5kQ29sdW1uUmVuZGVyZXIiLCJleHBhbmRIZWFkZXJDb2x1bW5SZW5kZXJlciIsInBhcmVudENsYXNzTmFtZSIsImRlZmF1bHRTb3J0ZWQiLCJhcnJheU9mIiwib3JkZXIiLCJzb3J0RnVuYyIsImRlZmF1bHRTb3J0RGlyZWN0aW9uIiwib25UYWJsZUNoYW5nZSIsInNlYXJjaCIsInNlYXJjaFRleHQiLCJzZWFyY2hDb250ZXh0Iiwic2V0RGVwZW5kZW5jeU1vZHVsZXMiLCJkZWZhdWx0UHJvcHMiLCJub25FZGl0YWJsZVJvd3MiLCJIZWFkZXIiLCJnbG9iYWxTb3J0Q2FyZXQiLCJTZWxlY3Rpb25IZWFkZXJDZWxsQ29tcCIsIkV4cGFuc2lvbkhlYWRlckNlbGxDb21wIiwiY3VyclNvcnQiLCJpc0xhc3RTb3J0aW5nIiwiSGVhZGVyQ2VsbCIsInNvcnRpbmciLCJ0ZXh0IiwiaGVhZGVyVGl0bGUiLCJoZWFkZXJBbGlnbiIsImhlYWRlckZvcm1hdHRlciIsImhlYWRlckV2ZW50cyIsImhlYWRlclN0eWxlIiwiaGVhZGVyQXR0cnMiLCJoZWFkZXJTb3J0aW5nQ2xhc3NlcyIsImhlYWRlclNvcnRpbmdTdHlsZSIsInNvcnRDYXJldGZ1bmMiLCJkZWxlZ2F0ZUV2ZW50cyIsImRlbGVnYXRlIiwiY3VzdG9tQXR0cnMiLCJzb3J0U3ltYm9sIiwiZmlsdGVyRWxtIiwiY3VzdG9tQ2xpY2siLCJvbkNsaWNrIiwib25LZXlVcCIsIm9uQ3VzdG9tRmlsdGVyIiwic29ydEVsZW1lbnQiLCJmaWx0ZXJFbGVtZW50IiwiaXNEdW1teUZpZWxkIiwiaGlkZGVuIiwiZm9ybWF0dGVyIiwiZm9ybWF0RXh0cmFEYXRhIiwiYW55IiwiZWRpdG9yIiwiZWRpdENlbGxTdHlsZSIsImVkaXRDZWxsQ2xhc3NlcyIsImVkaXRvclN0eWxlIiwiZWRpdG9yQ2xhc3NlcyIsImVkaXRvclJlbmRlcmVyIiwidmFsaWRhdG9yIiwiZmlsdGVyVmFsdWUiLCJzZWFyY2hhYmxlIiwibnVtYmVyIiwiU29ydFN5bWJvbCIsIlNvcnRDYXJldCIsIm9yZGVyQ2xhc3MiLCJkcm9wdXAiLCJDaGVja0JveCIsImluZGV0ZXJtaW5hdGUiLCJpbnB1dCIsIlNlbGVjdGlvbkhlYWRlckNlbGwiLCJoYW5kbGVDaGVja0JveENsaWNrIiwiRXhwYW5zaW9uSGVhZGVyQ2VsbCIsImVkaXRDZWxsIiwibmV3VmFsdWUiLCJjb21wYXJhdG9yIiwibG9jYWxlQ29tcGFyZSIsInNvcnRWYWx1ZSIsIl9kYXRhIiwidmFsdWVBIiwidmFsdWVCIiwibmV4dE9yZGVyIiwiY3VycmVudFNvcnRDb2x1bW4iLCJzb3J0Q29sdW1uIiwiZGVmYXVsdE9yZGVyIiwidHlwZUNvbnZlcnQiLCJTdHJpbmciLCJOdW1iZXIiLCJEYXRlIiwiRmlsdGVycyIsImZpbHRlckNvbHVtbnMiLCJzaG93RmlsdGVyc1JvdyIsImRpc3BsYXkiLCJGaWx0ZXJzQ2VsbCIsIkNhcHRpb24iLCJjYXB0aW9uU2lkZSIsIkJvZHkiLCJFZGl0aW5nQ2VsbCIsImNyZWF0ZUVkaXRpbmdDZWxsIiwib3B0aW9ucyIsIm9uU3RhcnRFZGl0IiwiUm93Q29tcG9uZW50Iiwic2VsZWN0Um93RW5hYmxlZCIsImV4cGFuZFJvd0VuYWJsZWQiLCJ3aXRoUm93TGV2ZWxDZWxsRWRpdCIsImluZGljYXRpb24iLCJhZGRpdGlvbmFsUm93UHJvcHMiLCJiYXNlUm93UHJvcHMiLCJTaW1wbGVSb3ciLCJzaG91bGRVcGRhdGVSb3dDb250ZW50Iiwic2hvdWxkUm93Q29udGVudFVwZGF0ZSIsInNob3VsZFVwZGF0ZWRCeVNlbGZQcm9wcyIsInRyQXR0cnMiLCJDZWxsIiwiY3JlYXRlSGFuZGxlRWRpdGluZ0NlbGwiLCJvcmlnaW5GdW5jIiwib25Eb3VibGVDbGljayIsIlJvd0FnZ3JlZ2F0b3IiLCJzZWxlY3RDZWxsIiwiZXhwYW5kQ2VsbCIsIkV4cGFuZENlbGwiLCJoYW5kbGVDbGljayIsInN0b3BQcm9wYWdhdGlvbiIsIlNlbGVjdGlvbkNlbGwiLCJkaXNhYmxlZCIsImlucHV0VHlwZSIsIlJvd1NlY3Rpb24iLCJjb2xTcGFuIiwicmVuZGVyV2l0aFNlbGVjdGlvbiIsIm5vdFNlbGVjdGFibGUiLCJzZWxlY3RlZFN0eWxlIiwic2VsZWN0ZWRDbGFzc2VzIiwiYmFja2dyb3VuZENvbG9yIiwibm90U2VsZWN0YWJsZVN0eWxlIiwibm90U2VsZWN0YWJsZUNsYXNzZXMiLCJ3aXRoQ29uc3VtZXIiLCJkaXNwbGF5TmFtZSIsInJlbmRlcldpdGhFeHBhbnNpb24iLCJFeHBhbmRSb3ciLCJ0cmFuc2l0aW9uVGltZW91dCIsIkZvb3RlciIsImZvb3RlciIsImNvbHVtbkRhdGEiLCJwbHVjayIsIkZvb3RlckNlbGwiLCJmb290ZXJUaXRsZSIsImZvb3RlckFsaWduIiwiZm9vdGVyRm9ybWF0dGVyIiwiZm9vdGVyRXZlbnRzIiwiZm9vdGVyU3R5bGUiLCJmb290ZXJBdHRycyIsImlzU3RyaW5nIiwiaGlkZGVuUm93cyIsImluY2x1ZGVTZWxlY3RDb2x1bW4iLCJjb2x1bW5MZW4iLCJjb2x1bW5Ub2dnbGUiLCJ0b2dnbGVzIiwibmFtZSIsImMiLCJ3aXRoQ29udGV4dCIsIkRhdGFDb250ZXh0IiwicmVnaXN0ZXJFeHBvc2VkQVBJIiwiZXhwb3NlZEFQSUVtaXR0ZXIiLCJvbiIsInBheWxvYWQiLCJ0YWJsZSIsInNlbGVjdGlvbkNvbnRleHQiLCJnZXRTZWxlY3RlZCIsImdldFNlYXJjaGVkIiwiZmlsdGVyQ29udGV4dCIsImdldEZpbHRlcmVkIiwiU29ydENvbnRleHQiLCJpc1JlbW90ZVNvcnQiLCJoYW5kbGVSZW1vdGVTb3J0Q2hhbmdlIiwiQ29sdW1uTWFuYWdlbWVudENvbnRleHQiLCJDZWxsRWRpdENvbnRleHQiLCJpc1JlbW90ZUNlbGxFZGl0IiwiaGFuZGxlUmVtb3RlQ2VsbENoYW5nZSIsIkZpbHRlckNvbnRleHQiLCJpc1JlbW90ZUZpbHRlcmluZyIsImhhbmRsZVJlbW90ZUZpbHRlckNoYW5nZSIsIlBhZ2luYXRpb25Db250ZXh0IiwiU2VhcmNoQ29udGV4dCIsImlzUmVtb3RlU2VhcmNoIiwiaGFuZGxlUmVtb3RlU2VhcmNoQ2hhbmdlIiwic2V0UGFnaW5hdGlvblJlbW90ZUVtaXR0ZXIiLCJyZW1vdGVFbWl0dGVyIiwiaXNSZW1vdGVQYWdpbmF0aW9uIiwiaGFuZGxlUmVtb3RlUGFnZUNoYW5nZSIsInJvb3RQcm9wcyIsImZpbHRlclByb3BzIiwic2VhcmNoUHJvcHMiLCJzb3J0UHJvcHMiLCJwYWdpbmF0aW9uUHJvcHMiLCJjb2x1bW5Ub2dnbGVQcm9wcyIsIm4iLCJiYXNlIiwiYmFzZVByb3BzIiwicm93RXhwYW5kQ29udGV4dCIsInBhZ2luYXRpb25Db250ZXh0Iiwic29ydENvbnRleHQiLCJkYXRhQ2hhbmdlTGlzdGVuZXIiLCJjZWxsRWRpdENvbnRleHQiLCJyZW5kZXJCYXNlIiwicmVuZGVyV2l0aENvbHVtbk1hbmFnZW1lbnRDdHgiLCJyZW5kZXJXaXRoU2VsZWN0aW9uQ3R4IiwicmVuZGVyV2l0aFJvd0V4cGFuZEN0eCIsInJlbmRlcldpdGhQYWdpbmF0aW9uQ3R4IiwicmVuZGVyV2l0aFNvcnRDdHgiLCJyZW5kZXJXaXRoU2VhcmNoQ3R4IiwicmVuZGVyV2l0aEZpbHRlckN0eCIsInJlbmRlcldpdGhDZWxsRWRpdEN0eCIsIkRhdGFQcm92aWRlciIsIkNvbHVtbk1hbmFnZW1lbnRQcm92aWRlciIsInRvZ2dsZUNvbHVtbiIsImRhdGFPcGVyYXRvciIsImhhbmRsZVNvcnRDaGFuZ2UiLCJTb3J0UHJvdmlkZXIiLCJpbml0U29ydCIsInNvcnRDb2x1bW5zIiwiaGFuZGxlU29ydCIsImdldE5ld2VzdFN0YXRlIiwicGFnZSIsInNpemVQZXJQYWdlIiwiZmlsdGVycyIsImN1cnJQYWdlIiwiY3VyclNpemVQZXJQYWdlIiwibmV3U3RhdGUiLCJwYWdlU3RhcnRJbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0gsb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN1NBOzs7O0FBQ0E7Ozs7OztrQkFFZSxpRDs7Ozs7Ozs7Ozs7Ozs7O0FDQWY7Ozs7QUFD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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsV0FBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsWUFBWTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsWUFBWTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsWUFBWTtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsWUFBWTtBQUN6RDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4QkFBOEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywwQkFBMEI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQixjQUFjO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZUFBZTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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QUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxl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ekIsRUFBbUMsTUFBS2lOLGNBQUwsQ0FBb0JNLFFBQXBCLENBQW5DO0FBQ0QsT0FwRmtCOztBQUFBLFlBc0ZuQnRELHNCQXRGbUIsR0FzRk0sVUFBQ25NLFNBQUQsRUFBWUMsU0FBWixFQUEwQjtBQUNqRCxjQUFLdkwsS0FBTCxDQUFXd04sYUFBWCxDQUF5QixNQUF6QixFQUFpQyxNQUFLaU4sY0FBTCxDQUFvQixFQUFFblAsb0JBQUYsRUFBYUMsb0JBQWIsRUFBcEIsQ0FBakM7QUFDRCxPQXhGa0I7O0FBQUEsWUEwRm5Cc00sc0JBMUZtQixHQTBGTSxVQUFDL1MsS0FBRCxFQUFRd0MsU0FBUixFQUFtQmdLLFFBQW5CLEVBQWdDO0FBQ3ZELFlBQU03RyxXQUFXLEVBQUUzRixZQUFGLEVBQVN3QyxvQkFBVCxFQUFvQmdLLGtCQUFwQixFQUFqQjtBQUNBLGNBQUt0UixLQUFMLENBQVd3TixhQUFYLENBQXlCLFVBQXpCLEVBQXFDLE1BQUtpTixjQUFMLENBQW9CLEVBQUVoUSxrQkFBRixFQUFwQixDQUFyQztBQUNELE9BN0ZrQjs7QUFBQSxZQStGbkIyTix3QkEvRm1CLEdBK0ZRLFVBQUMxSyxVQUFELEVBQWdCO0FBQ3pDLGNBQUsxTixLQUFMLENBQVd3TixhQUFYLENBQXlCLFFBQXpCLEVBQW1DLE1BQUtpTixjQUFMLENBQW9CLEVBQUUvTSxzQkFBRixFQUFwQixDQUFuQztBQUNELE9BakdrQjs7QUFFakIsWUFBSzRLLGFBQUwsR0FBcUIsc0JBQXJCO0FBQ0EsWUFBS0EsYUFBTCxDQUFtQnZCLEVBQW5CLENBQXNCLGtCQUF0QixFQUEwQyxNQUFLeUIsc0JBQS9DO0FBQ0EsWUFBS0YsYUFBTCxDQUFtQnZCLEVBQW5CLENBQXNCLG9CQUF0QixFQUE0QyxNQUFLd0Isa0JBQWpEO0FBSmlCO0FBS2xCOztBQVBVO0FBQUEsSUFDZ0I1WCxVQURoQjtBQUFBLEMiLCJmaWxlIjoicmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9kaXN0L3JlYWN0LWJvb3RzdHJhcC10YWJsZS1uZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3RCb290c3RyYXBUYWJsZTJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RCb290c3RyYXBUYWJsZTJcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjMxZWY5Mzc5ZmFkOTE5NzVkN2YiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiBlc2xpbnQgbm8tZW1wdHk6IDAgKi9cbi8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogMCAqL1xuLyogZXNsaW50IHByZWZlci1yZXN0LXBhcmFtczogMCAqL1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmZ1bmN0aW9uIHNwbGl0TmVzdGVkKHN0cikge1xuICByZXR1cm4gW3N0cl1cbiAgICAuam9pbignLicpXG4gICAgLnJlcGxhY2UoL1xcWy9nLCAnLicpXG4gICAgLnJlcGxhY2UoL1xcXS9nLCAnJylcbiAgICAuc3BsaXQoJy4nKTtcbn1cblxuZnVuY3Rpb24gY29udGFpbnMobGlzdCwgdmFsdWUpIHtcbiAgaWYgKF8uaW5jbHVkZXMpIHtcbiAgICByZXR1cm4gXy5pbmNsdWRlcyhsaXN0LCB2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gbGlzdC5pbmRleE9mKHZhbHVlKSA+IC0xO1xufVxuXG5mdW5jdGlvbiBnZXQodGFyZ2V0LCBmaWVsZCkge1xuICBjb25zdCBkaXJlY3RHZXQgPSB0YXJnZXRbZmllbGRdO1xuICBpZiAoZGlyZWN0R2V0ICE9PSB1bmRlZmluZWQgJiYgZGlyZWN0R2V0ICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGRpcmVjdEdldDtcbiAgfVxuXG4gIGNvbnN0IHBhdGhBcnJheSA9IHNwbGl0TmVzdGVkKGZpZWxkKTtcbiAgbGV0IHJlc3VsdDtcbiAgdHJ5IHtcbiAgICByZXN1bHQgPSBwYXRoQXJyYXkucmVkdWNlKChjdXJyLCBwYXRoKSA9PiBjdXJyW3BhdGhdLCB0YXJnZXQpO1xuICB9IGNhdGNoIChlKSB7fVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzZXQodGFyZ2V0LCBmaWVsZCwgdmFsdWUsIHNhZmUgPSBmYWxzZSkge1xuICBjb25zdCBwYXRoQXJyYXkgPSBzcGxpdE5lc3RlZChmaWVsZCk7XG4gIGxldCBsZXZlbCA9IDA7XG4gIHBhdGhBcnJheS5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICBsZXZlbCArPSAxO1xuICAgIGlmICh0eXBlb2YgYVtiXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICghc2FmZSkgdGhyb3cgbmV3IEVycm9yKGAke2F9LiR7Yn0gaXMgdW5kZWZpbmVkYCk7XG4gICAgICBhW2JdID0ge307XG4gICAgICByZXR1cm4gYVtiXTtcbiAgICB9XG5cbiAgICBpZiAobGV2ZWwgPT09IHBhdGhBcnJheS5sZW5ndGgpIHtcbiAgICAgIGFbYl0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGFbYl07XG4gIH0sIHRhcmdldCk7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHlPYmplY3Qob2JqKSB7XG4gIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gZmFsc2U7XG5cbiAgY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBzbGVlcChmbiwgbXMpIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoKCkgPT4gZm4oKSwgbXMpO1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgbGV0IHRpbWVvdXQ7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBsYXRlciA9ICgpID0+IHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuXG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgfHwgMCk7XG5cbiAgICBpZiAoY2FsbE5vdykge1xuICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmFzc2lnbihfLCB7XG4gIGdldCxcbiAgc2V0LFxuICBpc0RlZmluZWQsXG4gIGlzRW1wdHlPYmplY3QsXG4gIHNsZWVwLFxuICBkZWJvdW5jZSxcbiAgY29udGFpbnNcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvdXRpbHMuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgU09SVF9BU0M6ICdhc2MnLFxuICBTT1JUX0RFU0M6ICdkZXNjJyxcbiAgUk9XX1NFTEVDVF9TSU5HTEU6ICdyYWRpbycsXG4gIFJPV19TRUxFQ1RfTVVMVElQTEU6ICdjaGVja2JveCcsXG4gIFJPV19TRUxFQ1RfRElTQUJMRUQ6ICdST1dfU0VMRUNUX0RJU0FCTEVEJyxcbiAgQ0hFQ0tCT1hfU1RBVFVTX0NIRUNLRUQ6ICdjaGVja2VkJyxcbiAgQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEU6ICdpbmRldGVybWluYXRlJyxcbiAgQ0hFQ0tCT1hfU1RBVFVTX1VOQ0hFQ0tFRDogJ3VuY2hlY2tlZCcsXG4gIElORElDQVRPUl9QT1NJVElPTl9MRUZUOiAnbGVmdCcsXG4gIElORElDQVRPUl9QT1NJVElPTl9SSUdIVDogJ3JpZ2h0JyxcbiAgVFlQRV9TVFJJTkc6ICdzdHJpbmcnLFxuICBUWVBFX05VTUJFUjogJ251bWJlcicsXG4gIFRZUEVfQk9PTEVBTjogJ2Jvb2wnLFxuICBUWVBFX0RBVEU6ICdkYXRlJyxcbiAgRklMVEVSU19QT1NJVElPTl9JTkxJTkU6ICdpbmxpbmUnLFxuICBGSUxURVJTX1BPU0lUSU9OX1RPUDogJ3RvcCcsXG4gIEZJTFRFUlNfUE9TSVRJT05fQk9UVE9NOiAnYm90dG9tJ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnN0LmpzIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBCb290c3RyYXBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIGJvb3RzdHJhcDQ6IGZhbHNlXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL2Jvb3RzdHJhcC5qcyIsImltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IG1hdGNoUm93ID0gKGtleUZpZWxkLCBpZCkgPT4gcm93ID0+IF8uZ2V0KHJvdywga2V5RmllbGQpID09PSBpZDtcblxuZXhwb3J0IGNvbnN0IGdldFJvd0J5Um93SWQgPSAoZGF0YSwga2V5RmllbGQsIGlkKSA9PiBkYXRhLmZpbmQobWF0Y2hSb3coa2V5RmllbGQsIGlkKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9yb3dzLmpzIiwiaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGV2ZW50cyA9IFtcbiAgJ29uQ2xpY2snLFxuICAnb25Eb3VibGVDbGljaycsXG4gICdvbk1vdXNlRW50ZXInLFxuICAnb25Nb3VzZUxlYXZlJyxcbiAgJ29uQ29udGV4dE1lbnUnLFxuICAnb25BdXhDbGljaydcbl07XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVuZEJhc2UgPT5cbiAgY2xhc3MgQ2VsbEV2ZW50RGVsZWdhdGVyIGV4dGVuZHMgRXh0ZW5kQmFzZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuY3JlYXRlRGVmYXVsdEV2ZW50SGFuZGxlciA9IHRoaXMuY3JlYXRlRGVmYXVsdEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIoY2IpIHtcbiAgICAgIHJldHVybiAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbHVtbiwgY29sdW1uSW5kZXgsIGluZGV4IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjYihlLCBjb2x1bW4sIHR5cGVvZiBjb2x1bW5JbmRleCAhPT0gJ3VuZGVmaW5lZCcgPyBjb2x1bW5JbmRleCA6IGluZGV4KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZGVsZWdhdGUoYXR0cnMgPSB7fSkge1xuICAgICAgY29uc3QgbmV3QXR0cnMgPSB7IC4uLmF0dHJzIH07XG4gICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICBpZiAoXy5jb250YWlucyhldmVudHMsIGF0dHIpKSB7XG4gICAgICAgICAgbmV3QXR0cnNbYXR0cl0gPSB0aGlzLmNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIoYXR0cnNbYXR0cl0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXdBdHRycztcbiAgICB9XG4gIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jZWxsLWV2ZW50LWRlbGVnYXRlci5qcyIsIi8qIGVzbGludCBjYW1lbGNhc2U6IDAgKi9cbi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5pbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5cbmltcG9ydCBkYXRhT3BlcmF0b3IgZnJvbSAnLi4vc3RvcmUvb3BlcmF0b3JzJztcbmltcG9ydCB7IGdldFNlbGVjdGlvblN1bW1hcnkgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3Rpb24nO1xuXG5jb25zdCBTZWxlY3Rpb25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuY2xhc3MgU2VsZWN0aW9uUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIGtleUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBwcm9wcy5zZWxlY3RSb3cuc2VsZWN0ZWQgfHwgW107XG4gIH1cblxuICAvLyBleHBvc2VkIEFQSVxuICBnZXRTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZDtcbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuc2VsZWN0Um93KSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gbmV4dFByb3BzLnNlbGVjdFJvdy5zZWxlY3RlZCB8fCB0aGlzLnNlbGVjdGVkO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJvd1NlbGVjdCA9IChyb3dLZXksIGNoZWNrZWQsIHJvd0luZGV4LCBlKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBrZXlGaWVsZCwgc2VsZWN0Um93OiB7IG1vZGUsIG9uU2VsZWN0IH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBST1dfU0VMRUNUX1NJTkdMRSB9ID0gQ29uc3Q7XG5cbiAgICBsZXQgY3VyclNlbGVjdGVkID0gWy4uLnRoaXMuc2VsZWN0ZWRdO1xuXG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgaWYgKG9uU2VsZWN0KSB7XG4gICAgICBjb25zdCByb3cgPSBkYXRhT3BlcmF0b3IuZ2V0Um93QnlSb3dJZChkYXRhLCBrZXlGaWVsZCwgcm93S2V5KTtcbiAgICAgIHJlc3VsdCA9IG9uU2VsZWN0KHJvdywgY2hlY2tlZCwgcm93SW5kZXgsIGUpO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT09IHRydWUgfHwgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChtb2RlID09PSBST1dfU0VMRUNUX1NJTkdMRSkgeyAvLyB3aGVuIHNlbGVjdCBtb2RlIGlzIHJhZGlvXG4gICAgICAgIGN1cnJTZWxlY3RlZCA9IFtyb3dLZXldO1xuICAgICAgfSBlbHNlIGlmIChjaGVja2VkKSB7IC8vIHdoZW4gc2VsZWN0IG1vZGUgaXMgY2hlY2tib3hcbiAgICAgICAgY3VyclNlbGVjdGVkLnB1c2gocm93S2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJTZWxlY3RlZCA9IGN1cnJTZWxlY3RlZC5maWx0ZXIodmFsdWUgPT4gdmFsdWUgIT09IHJvd0tleSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWQgPSBjdXJyU2VsZWN0ZWQ7XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgaGFuZGxlQWxsUm93c1NlbGVjdCA9IChlLCBpc1VuU2VsZWN0KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YSxcbiAgICAgIGtleUZpZWxkLFxuICAgICAgc2VsZWN0Um93OiB7XG4gICAgICAgIG9uU2VsZWN0QWxsLFxuICAgICAgICBub25TZWxlY3RhYmxlXG4gICAgICB9XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdGhpcztcblxuICAgIGxldCBjdXJyU2VsZWN0ZWQ7XG5cbiAgICBpZiAoIWlzVW5TZWxlY3QpIHtcbiAgICAgIGN1cnJTZWxlY3RlZCA9IHNlbGVjdGVkLmNvbmNhdChkYXRhT3BlcmF0b3Iuc2VsZWN0YWJsZUtleXMoZGF0YSwga2V5RmllbGQsIG5vblNlbGVjdGFibGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VyclNlbGVjdGVkID0gc2VsZWN0ZWQuZmlsdGVyKHMgPT4gdHlwZW9mIGRhdGEuZmluZChkID0+IF8uZ2V0KGQsIGtleUZpZWxkKSA9PT0gcykgPT09ICd1bmRlZmluZWQnKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmIChvblNlbGVjdEFsbCkge1xuICAgICAgcmVzdWx0ID0gb25TZWxlY3RBbGwoXG4gICAgICAgICFpc1VuU2VsZWN0LFxuICAgICAgICBkYXRhT3BlcmF0b3IuZ2V0U2VsZWN0ZWRSb3dzKFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAga2V5RmllbGQsXG4gICAgICAgICAgaXNVblNlbGVjdCA/IHNlbGVjdGVkIDogY3VyclNlbGVjdGVkXG4gICAgICAgICksXG4gICAgICAgIGVcbiAgICAgICk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgIGN1cnJTZWxlY3RlZCA9IHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZCA9IGN1cnJTZWxlY3RlZDtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYWxsUm93c1NlbGVjdGVkLFxuICAgICAgYWxsUm93c05vdFNlbGVjdGVkXG4gICAgfSA9IGdldFNlbGVjdGlvblN1bW1hcnkoXG4gICAgICB0aGlzLnByb3BzLmRhdGEsXG4gICAgICB0aGlzLnByb3BzLmtleUZpZWxkLFxuICAgICAgdGhpcy5zZWxlY3RlZFxuICAgICk7XG5cbiAgICBsZXQgY2hlY2tlZFN0YXR1cztcblxuICAgIC8vIGNoZWNrYm94IHN0YXR1cyBkZXBlbmRpbmcgb24gc2VsZWN0ZWQgcm93cyBjb3VudHNcbiAgICBpZiAoYWxsUm93c1NlbGVjdGVkKSBjaGVja2VkU3RhdHVzID0gQ29uc3QuQ0hFQ0tCT1hfU1RBVFVTX0NIRUNLRUQ7XG4gICAgZWxzZSBpZiAoYWxsUm93c05vdFNlbGVjdGVkKSBjaGVja2VkU3RhdHVzID0gQ29uc3QuQ0hFQ0tCT1hfU1RBVFVTX1VOQ0hFQ0tFRDtcbiAgICBlbHNlIGNoZWNrZWRTdGF0dXMgPSBDb25zdC5DSEVDS0JPWF9TVEFUVVNfSU5ERVRFUk1JTkFURTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2VsZWN0aW9uQ29udGV4dC5Qcm92aWRlclxuICAgICAgICB2YWx1ZT17IHtcbiAgICAgICAgICAuLi50aGlzLnByb3BzLnNlbGVjdFJvdyxcbiAgICAgICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCxcbiAgICAgICAgICBvblJvd1NlbGVjdDogdGhpcy5oYW5kbGVSb3dTZWxlY3QsXG4gICAgICAgICAgb25BbGxSb3dzU2VsZWN0OiB0aGlzLmhhbmRsZUFsbFJvd3NTZWxlY3QsXG4gICAgICAgICAgYWxsUm93c1NlbGVjdGVkLFxuICAgICAgICAgIGFsbFJvd3NOb3RTZWxlY3RlZCxcbiAgICAgICAgICBjaGVja2VkU3RhdHVzXG4gICAgICAgIH0gfVxuICAgICAgPlxuICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgPC9TZWxlY3Rpb25Db250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBQcm92aWRlcjogU2VsZWN0aW9uUHJvdmlkZXIsXG4gIENvbnN1bWVyOiBTZWxlY3Rpb25Db250ZXh0LkNvbnN1bWVyXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvc2VsZWN0aW9uLWNvbnRleHQuanMiLCJpbXBvcnQgKiBhcyByb3dzIGZyb20gJy4vcm93cyc7XG5pbXBvcnQgKiBhcyBzZWxlY3Rpb24gZnJvbSAnLi9zZWxlY3Rpb24nO1xuaW1wb3J0ICogYXMgZXhwYW5kIGZyb20gJy4vZXhwYW5kJztcbmltcG9ydCAqIGFzIG11dGF0ZSBmcm9tICcuL211dGF0ZSc7XG5pbXBvcnQgKiBhcyBzb3J0IGZyb20gJy4vc29ydCc7XG5pbXBvcnQgKiBhcyB0eXBlIGZyb20gJy4vdHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLi4ucm93cyxcbiAgLi4uc2VsZWN0aW9uLFxuICAuLi5leHBhbmQsXG4gIC4uLm11dGF0ZSxcbiAgLi4uc29ydCxcbiAgLi4udHlwZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL29wZXJhdG9ycy5qcyIsIi8qIGVzbGludCBjYW1lbGNhc2U6IDAgKi9cbi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBkYXRhT3BlcmF0b3IgZnJvbSAnLi4vc3RvcmUvb3BlcmF0b3JzJztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcblxuY29uc3QgUm93RXhwYW5kQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuY2xhc3MgUm93RXhwYW5kUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIGtleUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0ZSA9IHsgZXhwYW5kZWQ6IHRoaXMucHJvcHMuZXhwYW5kUm93LmV4cGFuZGVkIHx8IFtdLFxuICAgIGlzQ2xvc2luZzogdGhpcy5wcm9wcy5leHBhbmRSb3cuaXNDbG9zaW5nIHx8IFtdIH07XG5cbiAgb25DbG9zZWQgPSAoY2xvc2VkUm93KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzQ2xvc2luZzogdGhpcy5zdGF0ZS5pc0Nsb3NpbmcuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSBjbG9zZWRSb3cpIH0pO1xuICB9O1xuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuZXhwYW5kUm93KSB7XG4gICAgICBsZXQgbmV4dEV4cGFuZGVkID0gWy4uLihuZXh0UHJvcHMuZXhwYW5kUm93LmV4cGFuZGVkIHx8IHRoaXMuc3RhdGUuZXhwYW5kZWQpXTtcbiAgICAgIGNvbnN0IHsgbm9uRXhwYW5kYWJsZSA9IFtdIH0gPSBuZXh0UHJvcHMuZXhwYW5kUm93O1xuICAgICAgbmV4dEV4cGFuZGVkID0gbmV4dEV4cGFuZGVkLmZpbHRlcihyb3dJZCA9PiAhXy5jb250YWlucyhub25FeHBhbmRhYmxlLCByb3dJZCkpO1xuICAgICAgY29uc3QgaXNDbG9zaW5nID0gdGhpcy5zdGF0ZS5leHBhbmRlZC5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XG4gICAgICAgIGlmICghXy5jb250YWlucyhuZXh0RXhwYW5kZWQsIGN1cikpIHtcbiAgICAgICAgICBhY2MucHVzaChjdXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCBbXSk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgZXhwYW5kZWQ6IG5leHRFeHBhbmRlZCxcbiAgICAgICAgaXNDbG9zaW5nXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgZXhwYW5kZWQ6IHRoaXMuc3RhdGUuZXhwYW5kZWRcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSb3dFeHBhbmQgPSAocm93S2V5LCBleHBhbmRlZCwgcm93SW5kZXgsIGUpID0+IHtcbiAgICBjb25zdCB7IGRhdGEsIGtleUZpZWxkLCBleHBhbmRSb3c6IHsgb25FeHBhbmQsIG9ubHlPbmVFeHBhbmRpbmcsIG5vbkV4cGFuZGFibGUgfSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobm9uRXhwYW5kYWJsZSAmJiBfLmNvbnRhaW5zKG5vbkV4cGFuZGFibGUsIHJvd0tleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY3VyckV4cGFuZGVkID0gWy4uLnRoaXMuc3RhdGUuZXhwYW5kZWRdO1xuICAgIGxldCBpc0Nsb3NpbmcgPSBbLi4udGhpcy5zdGF0ZS5pc0Nsb3NpbmddO1xuXG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICBpZiAob25seU9uZUV4cGFuZGluZykge1xuICAgICAgICBpc0Nsb3NpbmcgPSBpc0Nsb3NpbmcuY29uY2F0KGN1cnJFeHBhbmRlZCk7XG4gICAgICAgIGN1cnJFeHBhbmRlZCA9IFtyb3dLZXldO1xuICAgICAgfSBlbHNlIGN1cnJFeHBhbmRlZC5wdXNoKHJvd0tleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzQ2xvc2luZy5wdXNoKHJvd0tleSk7XG4gICAgICBjdXJyRXhwYW5kZWQgPSBjdXJyRXhwYW5kZWQuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSByb3dLZXkpO1xuICAgIH1cblxuICAgIGlmIChvbkV4cGFuZCkge1xuICAgICAgY29uc3Qgcm93ID0gZGF0YU9wZXJhdG9yLmdldFJvd0J5Um93SWQoZGF0YSwga2V5RmllbGQsIHJvd0tleSk7XG4gICAgICBvbkV4cGFuZChyb3csIGV4cGFuZGVkLCByb3dJbmRleCwgZSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgZXhwYW5kZWQ6IGN1cnJFeHBhbmRlZCwgaXNDbG9zaW5nIH0pKTtcbiAgfTtcblxuICBoYW5kbGVBbGxSb3dFeHBhbmQgPSAoZSwgZXhwYW5kQWxsKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YSxcbiAgICAgIGtleUZpZWxkLFxuICAgICAgZXhwYW5kUm93OiB7XG4gICAgICAgIG9uRXhwYW5kQWxsLFxuICAgICAgICBub25FeHBhbmRhYmxlXG4gICAgICB9XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBleHBhbmRlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGxldCBjdXJyRXhwYW5kZWQ7XG5cbiAgICBpZiAoZXhwYW5kQWxsKSB7XG4gICAgICBjdXJyRXhwYW5kZWQgPSBleHBhbmRlZC5jb25jYXQoZGF0YU9wZXJhdG9yLmV4cGFuZGFibGVLZXlzKGRhdGEsIGtleUZpZWxkLCBub25FeHBhbmRhYmxlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJFeHBhbmRlZCA9IGV4cGFuZGVkLmZpbHRlcihzID0+IHR5cGVvZiBkYXRhLmZpbmQoZCA9PiBfLmdldChkLCBrZXlGaWVsZCkgPT09IHMpID09PSAndW5kZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgaWYgKG9uRXhwYW5kQWxsKSB7XG4gICAgICBvbkV4cGFuZEFsbChleHBhbmRBbGwsIGRhdGFPcGVyYXRvci5nZXRFeHBhbmRlZFJvd3MoZGF0YSwga2V5RmllbGQsIGN1cnJFeHBhbmRlZCksIGUpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgZXhwYW5kZWQ6IGN1cnJFeHBhbmRlZCB9KSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSwga2V5RmllbGQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3dFeHBhbmRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgIHZhbHVlPXsge1xuICAgICAgICAgIC4uLnRoaXMucHJvcHMuZXhwYW5kUm93LFxuICAgICAgICAgIG5vbkV4cGFuZGFibGU6IHRoaXMucHJvcHMuZXhwYW5kUm93Lm5vbkV4cGFuZGFibGUsXG4gICAgICAgICAgZXhwYW5kZWQ6IHRoaXMuc3RhdGUuZXhwYW5kZWQsXG4gICAgICAgICAgaXNDbG9zaW5nOiB0aGlzLnN0YXRlLmlzQ2xvc2luZyxcbiAgICAgICAgICBvbkNsb3NlZDogdGhpcy5vbkNsb3NlZCxcbiAgICAgICAgICBpc0FueUV4cGFuZHM6IGRhdGFPcGVyYXRvci5pc0FueUV4cGFuZHMoZGF0YSwga2V5RmllbGQsIHRoaXMuc3RhdGUuZXhwYW5kZWQpLFxuICAgICAgICAgIG9uUm93RXhwYW5kOiB0aGlzLmhhbmRsZVJvd0V4cGFuZCxcbiAgICAgICAgICBvbkFsbFJvd0V4cGFuZDogdGhpcy5oYW5kbGVBbGxSb3dFeHBhbmRcbiAgICAgICAgfSB9XG4gICAgICA+XG4gICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICA8L1Jvd0V4cGFuZENvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFByb3ZpZGVyOiBSb3dFeHBhbmRQcm92aWRlcixcbiAgQ29uc3VtZXI6IFJvd0V4cGFuZENvbnRleHQuQ29uc3VtZXJcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9yb3ctZXhwYW5kLWNvbnRleHQuanMiLCJpbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXRSb3dCeVJvd0lkIH0gZnJvbSAnLi9yb3dzJztcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGlvblN1bW1hcnkgPSAoXG4gIGRhdGEgPSBbXSxcbiAga2V5RmllbGQsXG4gIHNlbGVjdGVkID0gW11cbikgPT4ge1xuICBsZXQgYWxsUm93c1NlbGVjdGVkID0gZGF0YS5sZW5ndGggPiAwO1xuICBsZXQgYWxsUm93c05vdFNlbGVjdGVkID0gdHJ1ZTtcblxuICBjb25zdCByb3dLZXlzID0gZGF0YS5tYXAoZCA9PiBfLmdldChkLCBrZXlGaWVsZCkpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0tleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBjdXJyID0gcm93S2V5c1tpXTtcbiAgICBpZiAodHlwZW9mIHNlbGVjdGVkLmZpbmQoeCA9PiB4ID09PSBjdXJyKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGFsbFJvd3NTZWxlY3RlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGxSb3dzTm90U2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhbGxSb3dzU2VsZWN0ZWQsXG4gICAgYWxsUm93c05vdFNlbGVjdGVkXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0YWJsZUtleXMgPSAoZGF0YSA9IFtdLCBrZXlGaWVsZCwgc2tpcHMgPSBbXSkgPT4ge1xuICBpZiAoc2tpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKHJvdyA9PiBfLmdldChyb3csIGtleUZpZWxkKSk7XG4gIH1cbiAgcmV0dXJuIGRhdGFcbiAgICAuZmlsdGVyKHJvdyA9PiAhXy5jb250YWlucyhza2lwcywgXy5nZXQocm93LCBrZXlGaWVsZCkpKVxuICAgIC5tYXAocm93ID0+IF8uZ2V0KHJvdywga2V5RmllbGQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1blNlbGVjdGFibGVLZXlzID0gKHNlbGVjdGVkLCBza2lwcyA9IFtdKSA9PiB7XG4gIGlmIChza2lwcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcmV0dXJuIHNlbGVjdGVkLmZpbHRlcih4ID0+IF8uY29udGFpbnMoc2tpcHMsIHgpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFJvd3MgPSAoZGF0YSA9IFtdLCBrZXlGaWVsZCwgc2VsZWN0ZWQpID0+XG4gIHNlbGVjdGVkLm1hcChrID0+IGdldFJvd0J5Um93SWQoZGF0YSwga2V5RmllbGQsIGspKS5maWx0ZXIoeCA9PiAhIXgpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9zZWxlY3Rpb24uanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcblxuY29uc3QgUm93VGVtcGxhdGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHJlbmRlckNvbnRlbnQsXG4gICAgc2VsZWN0Um93LFxuICAgIGV4cGFuZFJvdyxcbiAgICBjZWxsRWwsXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaXNSZW5kZXJGdW5jdGlvbkNvbHVtbkluTGVmdCA9IChcbiAgICBwb3NpdGlvbiA9IENvbnN0LklORElDQVRPUl9QT1NJVElPTl9MRUZUXG4gICkgPT4gcG9zaXRpb24gPT09IENvbnN0LklORElDQVRPUl9QT1NJVElPTl9MRUZUO1xuXG4gIGNvbnN0IGNoaWxkcmVucyA9IHJlbmRlckNvbnRlbnQoKSB8fCBbXTtcblxuICBpZiAoc2VsZWN0Um93ICYmIHNlbGVjdFJvdy5oaWRlU2VsZWN0Q29sdW1uICE9PSB0cnVlKSB7XG4gICAgaWYgKGlzUmVuZGVyRnVuY3Rpb25Db2x1bW5JbkxlZnQoc2VsZWN0Um93LnNlbGVjdENvbHVtblBvc2l0aW9uKSkge1xuICAgICAgY2hpbGRyZW5zLnVuc2hpZnQoUmVhY3QuY3JlYXRlRWxlbWVudChjZWxsRWwsIHsga2V5OiAnc2VsZWN0aW9uJyB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkcmVucy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoY2VsbEVsLCB7IGtleTogJ3NlbGVjdGlvbicgfSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChleHBhbmRSb3cuc2hvd0V4cGFuZENvbHVtbikge1xuICAgIGlmIChpc1JlbmRlckZ1bmN0aW9uQ29sdW1uSW5MZWZ0KGV4cGFuZFJvdy5leHBhbmRDb2x1bW5Qb3NpdGlvbikpIHtcbiAgICAgIGNoaWxkcmVucy51bnNoaWZ0KFJlYWN0LmNyZWF0ZUVsZW1lbnQoY2VsbEVsLCB7IGtleTogJ2V4cGFuc2lvbicgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZHJlbnMucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KGNlbGxFbCwgeyBrZXk6ICdleHBhbnNpb24nIH0pKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gPHRyIHsgLi4ucmVzdCB9PnsgY2hpbGRyZW5zIH08L3RyPjtcbn07XG5cblJvd1RlbXBsYXRlLnByb3BUeXBlcyA9IHtcbiAgcmVuZGVyQ29udGVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2VsbEVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNlbGVjdFJvdzogUHJvcFR5cGVzLm9iamVjdCxcbiAgZXhwYW5kUm93OiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3dUZW1wbGF0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy9yb3ctdGVtcGxhdGUuanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IHJlYWN0L25vLWFycmF5LWluZGV4LWtleTogMCAqL1xuLyogZXNsaW50IG5vLXBsdXNwbHVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgQ2VsbCBmcm9tICcuLi9jZWxsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm93UHVyZUNvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UHJvcHMuc2hvdWxkVXBkYXRlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIG5leHRQcm9wcy5zaG91bGRVcGRhdGU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHJvdyxcbiAgICAgIGtleUZpZWxkLFxuICAgICAgY29sdW1ucyxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgZWRpdGFibGUsXG4gICAgICBlZGl0aW5nUm93SWR4LFxuICAgICAgZWRpdGluZ0NvbElkeCxcbiAgICAgIG9uU3RhcnQsXG4gICAgICBjbGlja1RvRWRpdCxcbiAgICAgIGRiY2xpY2tUb0VkaXQsXG4gICAgICBFZGl0aW5nQ2VsbENvbXBvbmVudCxcbiAgICAgIHRhYkluZGV4U3RhcnRcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCB0YWJJbmRleCA9IHRhYkluZGV4U3RhcnQ7XG5cbiAgICByZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbiwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YUZpZWxkIH0gPSBjb2x1bW47XG4gICAgICBjb25zdCBjb250ZW50ID0gXy5nZXQocm93LCBkYXRhRmllbGQpO1xuICAgICAgaWYgKHJvd0luZGV4ID09PSBlZGl0aW5nUm93SWR4ICYmIGluZGV4ID09PSBlZGl0aW5nQ29sSWR4KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEVkaXRpbmdDZWxsQ29tcG9uZW50XG4gICAgICAgICAgICBrZXk9eyBgJHtjb250ZW50fS0ke2luZGV4fS1lZGl0aW5nYCB9XG4gICAgICAgICAgICByb3c9eyByb3cgfVxuICAgICAgICAgICAgcm93SW5kZXg9eyByb3dJbmRleCB9XG4gICAgICAgICAgICBjb2x1bW49eyBjb2x1bW4gfVxuICAgICAgICAgICAgY29sdW1uSW5kZXg9eyBpbmRleCB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIC8vIHJlbmRlciBjZWxsXG4gICAgICBsZXQgY2VsbFRpdGxlO1xuICAgICAgbGV0IGNlbGxTdHlsZSA9IHt9O1xuICAgICAgbGV0IGNlbGxBdHRycyA9IHtcbiAgICAgICAgLi4uXy5pc0Z1bmN0aW9uKGNvbHVtbi5hdHRycylcbiAgICAgICAgICA/IGNvbHVtbi5hdHRycyhjb250ZW50LCByb3csIHJvd0luZGV4LCBpbmRleClcbiAgICAgICAgICA6IGNvbHVtbi5hdHRyc1xuICAgICAgfTtcblxuICAgICAgaWYgKGNvbHVtbi5ldmVudHMpIHtcbiAgICAgICAgY29uc3QgZXZlbnRzID0gT2JqZWN0LmFzc2lnbih7fSwgY29sdW1uLmV2ZW50cyk7XG4gICAgICAgIE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIGNvbHVtbi5ldmVudHMpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBjb25zdCBvcmlnaW5GbiA9IGV2ZW50c1trZXldO1xuICAgICAgICAgIGV2ZW50c1trZXldID0gKC4uLnJlc3QpID0+IG9yaWdpbkZuKC4uLnJlc3QsIHJvdywgcm93SW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2VsbEF0dHJzID0geyAuLi5jZWxsQXR0cnMsIC4uLmV2ZW50cyB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjZWxsQ2xhc3NlcyA9IF8uaXNGdW5jdGlvbihjb2x1bW4uY2xhc3NlcylcbiAgICAgICAgPyBjb2x1bW4uY2xhc3Nlcyhjb250ZW50LCByb3csIHJvd0luZGV4LCBpbmRleClcbiAgICAgICAgOiBjb2x1bW4uY2xhc3NlcztcblxuICAgICAgaWYgKGNvbHVtbi5zdHlsZSkge1xuICAgICAgICBjZWxsU3R5bGUgPSBfLmlzRnVuY3Rpb24oY29sdW1uLnN0eWxlKVxuICAgICAgICAgID8gY29sdW1uLnN0eWxlKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGluZGV4KVxuICAgICAgICAgIDogY29sdW1uLnN0eWxlO1xuICAgICAgICBjZWxsU3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBjZWxsU3R5bGUpIHx8IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoY29sdW1uLnRpdGxlKSB7XG4gICAgICAgIGNlbGxUaXRsZSA9IF8uaXNGdW5jdGlvbihjb2x1bW4udGl0bGUpXG4gICAgICAgICAgPyBjb2x1bW4udGl0bGUoY29udGVudCwgcm93LCByb3dJbmRleCwgaW5kZXgpXG4gICAgICAgICAgOiBjb250ZW50O1xuICAgICAgICBjZWxsQXR0cnMudGl0bGUgPSBjZWxsVGl0bGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb2x1bW4uYWxpZ24pIHtcbiAgICAgICAgY2VsbFN0eWxlLnRleHRBbGlnbiA9XG4gICAgICAgICAgXy5pc0Z1bmN0aW9uKGNvbHVtbi5hbGlnbilcbiAgICAgICAgICAgID8gY29sdW1uLmFsaWduKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGluZGV4KVxuICAgICAgICAgICAgOiBjb2x1bW4uYWxpZ247XG4gICAgICB9XG5cbiAgICAgIGlmIChjZWxsQ2xhc3NlcykgY2VsbEF0dHJzLmNsYXNzTmFtZSA9IGNlbGxDbGFzc2VzO1xuICAgICAgaWYgKCFfLmlzRW1wdHlPYmplY3QoY2VsbFN0eWxlKSkgY2VsbEF0dHJzLnN0eWxlID0gY2VsbFN0eWxlO1xuXG4gICAgICBsZXQgZWRpdGFibGVDZWxsID0gXy5pc0RlZmluZWQoY29sdW1uLmVkaXRhYmxlKSA/IGNvbHVtbi5lZGl0YWJsZSA6IHRydWU7XG4gICAgICBpZiAoY29sdW1uLmRhdGFGaWVsZCA9PT0ga2V5RmllbGQgfHwgIWVkaXRhYmxlKSBlZGl0YWJsZUNlbGwgPSBmYWxzZTtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24oY29sdW1uLmVkaXRhYmxlKSkge1xuICAgICAgICBlZGl0YWJsZUNlbGwgPSBjb2x1bW4uZWRpdGFibGUoY29udGVudCwgcm93LCByb3dJbmRleCwgaW5kZXgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFiSW5kZXhTdGFydCAhPT0gLTEpIHtcbiAgICAgICAgY2VsbEF0dHJzLnRhYkluZGV4ID0gdGFiSW5kZXgrKztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENlbGxcbiAgICAgICAgICBrZXk9eyBgJHtjb250ZW50fS0ke2luZGV4fWAgfVxuICAgICAgICAgIHJvdz17IHJvdyB9XG4gICAgICAgICAgZWRpdGFibGU9eyBlZGl0YWJsZUNlbGwgfVxuICAgICAgICAgIHJvd0luZGV4PXsgcm93SW5kZXggfVxuICAgICAgICAgIGNvbHVtbkluZGV4PXsgaW5kZXggfVxuICAgICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAgICAgb25TdGFydD17IG9uU3RhcnQgfVxuICAgICAgICAgIGNsaWNrVG9FZGl0PXsgY2xpY2tUb0VkaXQgfVxuICAgICAgICAgIGRiY2xpY2tUb0VkaXQ9eyBkYmNsaWNrVG9FZGl0IH1cbiAgICAgICAgICB7IC4uLmNlbGxBdHRycyB9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cvcm93LXB1cmUtY29udGVudC5qcyIsImltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5cbmNvbnN0IGV2ZW50cyA9IFtcbiAgJ29uQ2xpY2snLFxuICAnb25Eb3VibGVDbGljaycsXG4gICdvbk1vdXNlRW50ZXInLFxuICAnb25Nb3VzZUxlYXZlJyxcbiAgJ29uQ29udGV4dE1lbnUnLFxuICAnb25BdXhDbGljaydcbl07XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVuZEJhc2UgPT5cbiAgY2xhc3MgUm93RXZlbnREZWxlZ2F0ZXIgZXh0ZW5kcyBFeHRlbmRCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5jbGlja051bSA9IDA7XG4gICAgICB0aGlzLmNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIgPSB0aGlzLmNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuY3JlYXRlQ2xpY2tFdmVudEhhbmRsZXIgPSB0aGlzLmNyZWF0ZUNsaWNrRXZlbnRIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xpY2tFdmVudEhhbmRsZXIoY2IpIHtcbiAgICAgIHJldHVybiAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgcm93LFxuICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgIGtleUZpZWxkLFxuICAgICAgICAgIHNlbGVjdGFibGUsXG4gICAgICAgICAgZXhwYW5kYWJsZSxcbiAgICAgICAgICByb3dJbmRleCxcbiAgICAgICAgICBleHBhbmRlZCxcbiAgICAgICAgICBleHBhbmRSb3csXG4gICAgICAgICAgc2VsZWN0Um93LFxuICAgICAgICAgIERFTEFZX0ZPUl9EQkNMSUNLXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjbGlja0ZuID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgY2IoZSwgcm93LCByb3dJbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGtleSA9IF8uZ2V0KHJvdywga2V5RmllbGQpO1xuICAgICAgICAgIGlmIChleHBhbmRSb3cgJiYgZXhwYW5kYWJsZSAmJiAhZXhwYW5kUm93LmV4cGFuZEJ5Q29sdW1uT25seSkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAoc2VsZWN0Um93Lm1vZGUgIT09IENvbnN0LlJPV19TRUxFQ1RfRElTQUJMRUQgJiYgc2VsZWN0Um93LmNsaWNrVG9FeHBhbmQpIHx8XG4gICAgICAgICAgICAgIHNlbGVjdFJvdy5tb2RlID09PSBDb25zdC5ST1dfU0VMRUNUX0RJU0FCTEVEXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgZXhwYW5kUm93Lm9uUm93RXhwYW5kKGtleSwgIWV4cGFuZGVkLCByb3dJbmRleCwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzZWxlY3RSb3cuY2xpY2tUb1NlbGVjdCAmJiBzZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICBzZWxlY3RSb3cub25Sb3dTZWxlY3Qoa2V5LCAhc2VsZWN0ZWQsIHJvd0luZGV4LCBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKERFTEFZX0ZPUl9EQkNMSUNLKSB7XG4gICAgICAgICAgdGhpcy5jbGlja051bSArPSAxO1xuICAgICAgICAgIF8uZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xpY2tOdW0gPT09IDEpIHtcbiAgICAgICAgICAgICAgY2xpY2tGbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbGlja051bSA9IDA7XG4gICAgICAgICAgfSwgREVMQVlfRk9SX0RCQ0xJQ0spKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xpY2tGbigpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIoY2IpIHtcbiAgICAgIHJldHVybiAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7IHJvdywgcm93SW5kZXggfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNiKGUsIHJvdywgcm93SW5kZXgpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBkZWxlZ2F0ZShhdHRycyA9IHt9KSB7XG4gICAgICBjb25zdCBuZXdBdHRycyA9IHsgLi4uYXR0cnMgfTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgIGlmIChfLmNvbnRhaW5zKGV2ZW50cywgYXR0cikpIHtcbiAgICAgICAgICBuZXdBdHRyc1thdHRyXSA9IHRoaXMuY3JlYXRlRGVmYXVsdEV2ZW50SGFuZGxlcihhdHRyc1thdHRyXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ld0F0dHJzO1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy9ldmVudC1kZWxlZ2F0ZXIuanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBFeHRlbmRCYXNlID0+XG4gIGNsYXNzIFJvd1Nob3VsZFVwZGF0ZXIgZXh0ZW5kcyBFeHRlbmRCYXNlIHtcbiAgICBzaG91bGRVcGRhdGVCeUNlbGxFZGl0aW5nKG5leHRQcm9wcykge1xuICAgICAgaWYgKCEodGhpcy5wcm9wcy5jbGlja1RvRWRpdCB8fCB0aGlzLnByb3BzLmRiY2xpY2tUb0VkaXQpKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBuZXh0UHJvcHMuZWRpdGluZ1Jvd0lkeCA9PT0gbmV4dFByb3BzLnJvd0luZGV4IHx8XG4gICAgICAgICh0aGlzLnByb3BzLmVkaXRpbmdSb3dJZHggPT09IG5leHRQcm9wcy5yb3dJbmRleCAmJlxuICAgICAgICBuZXh0UHJvcHMuZWRpdGluZ1Jvd0lkeCA9PT0gbnVsbCkgfHxcbiAgICAgICAgdGhpcy5wcm9wcy5lZGl0aW5nUm93SWR4ID09PSBuZXh0UHJvcHMucm93SW5kZXhcbiAgICAgICk7XG4gICAgfVxuXG4gICAgc2hvdWxkVXBkYXRlZEJ5U2VsZlByb3BzKG5leHRQcm9wcykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWUgIT09IG5leHRQcm9wcy5jbGFzc05hbWUgfHxcbiAgICAgICAgIV8uaXNFcXVhbCh0aGlzLnByb3BzLnN0eWxlLCBuZXh0UHJvcHMuc3R5bGUpIHx8XG4gICAgICAgICFfLmlzRXF1YWwodGhpcy5wcm9wcy5hdHRycywgbmV4dFByb3BzLmF0dHJzKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBPbmx5IHVzZSBmb3Igc2ltcGxlLXJvd1xuICAgIHNob3VsZFVwZGF0ZUJ5Q29sdW1uc0ZvclNpbXBsZUNoZWNrKG5leHRQcm9wcykge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY29sdW1ucy5sZW5ndGggIT09IG5leHRQcm9wcy5jb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICghXy5pc0VxdWFsKHRoaXMucHJvcHMuY29sdW1uc1tpXSwgbmV4dFByb3BzLmNvbHVtbnNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzaG91bGRVcGRhdGVkQnlOb3JtYWxQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGNvbnN0IHNob3VsZFVwZGF0ZSA9XG4gICAgICAgIHRoaXMucHJvcHMucm93SW5kZXggIT09IG5leHRQcm9wcy5yb3dJbmRleCB8fFxuICAgICAgICB0aGlzLnByb3BzLmVkaXRhYmxlICE9PSBuZXh0UHJvcHMuZWRpdGFibGUgfHxcbiAgICAgICAgIV8uaXNFcXVhbCh0aGlzLnByb3BzLnJvdywgbmV4dFByb3BzLnJvdykgfHxcbiAgICAgICAgdGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aCAhPT0gbmV4dFByb3BzLmNvbHVtbnMubGVuZ3RoO1xuXG4gICAgICByZXR1cm4gc2hvdWxkVXBkYXRlO1xuICAgIH1cblxuICAgIHNob3VsZFVwZGF0ZUNoaWxkKG5leHRQcm9wcykge1xuICAgICAgcmV0dXJuIHRoaXMuc2hvdWxkVXBkYXRlQnlDZWxsRWRpdGluZyhuZXh0UHJvcHMpIHx8XG4gICAgICAgIHRoaXMuc2hvdWxkVXBkYXRlZEJ5Tm9ybWFsUHJvcHMobmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICBzaG91bGRSb3dDb250ZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgcmV0dXJuIHRoaXMuc2hvdWxkVXBkYXRlQ2hpbGQobmV4dFByb3BzKSB8fFxuICAgICAgICB0aGlzLnNob3VsZFVwZGF0ZUJ5Q29sdW1uc0ZvclNpbXBsZUNoZWNrKG5leHRQcm9wcyk7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L3Nob3VsZC11cGRhdGVyLmpzIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4gKCcgKyBlciArICcpJyk7XG4gICAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICh0aGlzLl9ldmVudHMpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV2bGlzdGVuZXIpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoZXZsaXN0ZW5lcilcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgQm9vdHN0cmFwVGFibGUgZnJvbSAnLi9zcmMvYm9vdHN0cmFwLXRhYmxlJztcbmltcG9ydCB3aXRoQ29udGV4dCBmcm9tICcuL3NyYy9jb250ZXh0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb250ZXh0KEJvb3RzdHJhcFRhYmxlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvaW5kZXguanMiLCIvKiBlc2xpbnQgY2FtZWxjYXNlOiAwICovXG4vKiBlc2xpbnQgYXJyb3ctYm9keS1zdHlsZTogMCAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgRmlsdGVycyBmcm9tICcuL2ZpbHRlcnMnO1xuaW1wb3J0IENhcHRpb24gZnJvbSAnLi9jYXB0aW9uJztcbmltcG9ydCBCb2R5IGZyb20gJy4vYm9keSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcbmltcG9ydCBQcm9wc0Jhc2VSZXNvbHZlciBmcm9tICcuL3Byb3BzLXJlc29sdmVyJztcbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnO1xuXG5jbGFzcyBCb290c3RyYXBUYWJsZSBleHRlbmRzIFByb3BzQmFzZVJlc29sdmVyKENvbXBvbmVudCkge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnZhbGlkYXRlUHJvcHMoKTtcbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMub25EYXRhU2l6ZUNoYW5nZSAmJiAhbmV4dFByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuZGF0YS5sZW5ndGggIT09IHRoaXMucHJvcHMuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbmV4dFByb3BzLm9uRGF0YVNpemVDaGFuZ2UoeyBkYXRhU2l6ZTogbmV4dFByb3BzLmRhdGEubGVuZ3RoIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEV4cG9zZWQgQVBJc1xuICBnZXREYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnZpc2libGVSb3dzKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBvdmVybGF5IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChvdmVybGF5KSB7XG4gICAgICBjb25zdCBMb2FkaW5nT3ZlcmxheSA9IG92ZXJsYXkobG9hZGluZyk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TG9hZGluZ092ZXJsYXk+XG4gICAgICAgICAgeyB0aGlzLnJlbmRlclRhYmxlKCkgfVxuICAgICAgICA8L0xvYWRpbmdPdmVybGF5PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyVGFibGUoKTtcbiAgfVxuXG4gIHJlbmRlclRhYmxlKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbHVtbnMsXG4gICAgICBrZXlGaWVsZCxcbiAgICAgIHRhYkluZGV4Q2VsbCxcbiAgICAgIGlkLFxuICAgICAgY2xhc3NlcyxcbiAgICAgIGJvb3RzdHJhcDQsXG4gICAgICBzdHJpcGVkLFxuICAgICAgaG92ZXIsXG4gICAgICBib3JkZXJlZCxcbiAgICAgIGNvbmRlbnNlZCxcbiAgICAgIG5vRGF0YUluZGljYXRpb24sXG4gICAgICBjYXB0aW9uLFxuICAgICAgcm93U3R5bGUsXG4gICAgICByb3dDbGFzc2VzLFxuICAgICAgd3JhcHBlckNsYXNzZXMsXG4gICAgICByb3dFdmVudHMsXG4gICAgICBzZWxlY3RSb3csXG4gICAgICBleHBhbmRSb3csXG4gICAgICBjZWxsRWRpdCxcbiAgICAgIGZpbHRlclBvc2l0aW9uXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB0YWJsZVdyYXBwZXJDbGFzcyA9IGNzKCdyZWFjdC1ib290c3RyYXAtdGFibGUnLCB3cmFwcGVyQ2xhc3Nlcyk7XG5cbiAgICBjb25zdCB0YWJsZUNsYXNzID0gY3MoJ3RhYmxlJywge1xuICAgICAgJ3RhYmxlLXN0cmlwZWQnOiBzdHJpcGVkLFxuICAgICAgJ3RhYmxlLWhvdmVyJzogaG92ZXIsXG4gICAgICAndGFibGUtYm9yZGVyZWQnOiBib3JkZXJlZCxcbiAgICAgIFtib290c3RyYXA0ID8gJ3RhYmxlLXNtJyA6ICd0YWJsZS1jb25kZW5zZWQnXTogY29uZGVuc2VkXG4gICAgfSwgY2xhc3Nlcyk7XG5cbiAgICBjb25zdCBoYXNGaWx0ZXJzID0gY29sdW1ucy5zb21lKGNvbCA9PiBjb2wuZmlsdGVyIHx8IGNvbC5maWx0ZXJSZW5kZXJlcik7XG5cbiAgICBjb25zdCBoYXNGb290ZXIgPSBfLmZpbHRlcihjb2x1bW5zLCBjb2wgPT4gXy5oYXMoY29sLCAnZm9vdGVyJykpLmxlbmd0aCA+IDA7XG5cbiAgICBjb25zdCB0YWJsZUNhcHRpb24gPSAoXG4gICAgICBjYXB0aW9uICYmIDxDYXB0aW9uIGJvb3RzdHJhcDQ9eyBib290c3RyYXA0IH0+eyBjYXB0aW9uIH08L0NhcHRpb24+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHRhYmxlV3JhcHBlckNsYXNzIH0+XG4gICAgICAgIDx0YWJsZSBpZD17IGlkIH0gY2xhc3NOYW1lPXsgdGFibGVDbGFzcyB9PlxuICAgICAgICAgIHsgdGFibGVDYXB0aW9uIH1cbiAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICBjb2x1bW5zPXsgY29sdW1ucyB9XG4gICAgICAgICAgICBjbGFzc05hbWU9eyB0aGlzLnByb3BzLmhlYWRlckNsYXNzZXMgfVxuICAgICAgICAgICAgd3JhcHBlckNsYXNzZXM9eyB0aGlzLnByb3BzLmhlYWRlcldyYXBwZXJDbGFzc2VzIH1cbiAgICAgICAgICAgIHNvcnRGaWVsZD17IHRoaXMucHJvcHMuc29ydEZpZWxkIH1cbiAgICAgICAgICAgIHNvcnRPcmRlcj17IHRoaXMucHJvcHMuc29ydE9yZGVyIH1cbiAgICAgICAgICAgIG9uU29ydD17IHRoaXMucHJvcHMub25Tb3J0IH1cbiAgICAgICAgICAgIGdsb2JhbFNvcnRDYXJldD17IHRoaXMucHJvcHMuc29ydCAmJiB0aGlzLnByb3BzLnNvcnQuc29ydENhcmV0IH1cbiAgICAgICAgICAgIG9uRmlsdGVyPXsgdGhpcy5wcm9wcy5vbkZpbHRlciB9XG4gICAgICAgICAgICBjdXJyRmlsdGVycz17IHRoaXMucHJvcHMuY3VyckZpbHRlcnMgfVxuICAgICAgICAgICAgb25FeHRlcm5hbEZpbHRlcj17IHRoaXMucHJvcHMub25FeHRlcm5hbEZpbHRlciB9XG4gICAgICAgICAgICBzZWxlY3RSb3c9eyBzZWxlY3RSb3cgfVxuICAgICAgICAgICAgZXhwYW5kUm93PXsgZXhwYW5kUm93IH1cbiAgICAgICAgICAgIGZpbHRlclBvc2l0aW9uPXsgZmlsdGVyUG9zaXRpb24gfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2hhc0ZpbHRlcnMgJiYgZmlsdGVyUG9zaXRpb24gIT09IENvbnN0LkZJTFRFUlNfUE9TSVRJT05fSU5MSU5FICYmIChcbiAgICAgICAgICAgIDxGaWx0ZXJzXG4gICAgICAgICAgICAgIGNvbHVtbnM9eyBjb2x1bW5zIH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5maWx0ZXJzQ2xhc3NlcyB9XG4gICAgICAgICAgICAgIG9uU29ydD17IHRoaXMucHJvcHMub25Tb3J0IH1cbiAgICAgICAgICAgICAgb25GaWx0ZXI9eyB0aGlzLnByb3BzLm9uRmlsdGVyIH1cbiAgICAgICAgICAgICAgY3VyckZpbHRlcnM9eyB0aGlzLnByb3BzLmN1cnJGaWx0ZXJzIH1cbiAgICAgICAgICAgICAgZmlsdGVyUG9zaXRpb249eyB0aGlzLnByb3BzLmZpbHRlclBvc2l0aW9uIH1cbiAgICAgICAgICAgICAgb25FeHRlcm5hbEZpbHRlcj17IHRoaXMucHJvcHMub25FeHRlcm5hbEZpbHRlciB9XG4gICAgICAgICAgICAgIHNlbGVjdFJvdz17IHNlbGVjdFJvdyB9XG4gICAgICAgICAgICAgIGV4cGFuZFJvdz17IGV4cGFuZFJvdyB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPEJvZHlcbiAgICAgICAgICAgIGNsYXNzTmFtZT17IHRoaXMucHJvcHMuYm9keUNsYXNzZXMgfVxuICAgICAgICAgICAgZGF0YT17IHRoaXMuZ2V0RGF0YSgpIH1cbiAgICAgICAgICAgIGtleUZpZWxkPXsga2V5RmllbGQgfVxuICAgICAgICAgICAgdGFiSW5kZXhDZWxsPXsgdGFiSW5kZXhDZWxsIH1cbiAgICAgICAgICAgIGNvbHVtbnM9eyBjb2x1bW5zIH1cbiAgICAgICAgICAgIGlzRW1wdHk9eyB0aGlzLmlzRW1wdHkoKSB9XG4gICAgICAgICAgICB2aXNpYmxlQ29sdW1uU2l6ZT17IHRoaXMudmlzaWJsZUNvbHVtblNpemUoKSB9XG4gICAgICAgICAgICBub0RhdGFJbmRpY2F0aW9uPXsgbm9EYXRhSW5kaWNhdGlvbiB9XG4gICAgICAgICAgICBjZWxsRWRpdD17IGNlbGxFZGl0IH1cbiAgICAgICAgICAgIHNlbGVjdFJvdz17IHNlbGVjdFJvdyB9XG4gICAgICAgICAgICBleHBhbmRSb3c9eyBleHBhbmRSb3cgfVxuICAgICAgICAgICAgcm93U3R5bGU9eyByb3dTdHlsZSB9XG4gICAgICAgICAgICByb3dDbGFzc2VzPXsgcm93Q2xhc3NlcyB9XG4gICAgICAgICAgICByb3dFdmVudHM9eyByb3dFdmVudHMgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2hhc0Zvb3RlciAmJiAoXG4gICAgICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgICAgIGRhdGE9eyB0aGlzLmdldERhdGEoKSB9XG4gICAgICAgICAgICAgIGNvbHVtbnM9eyBjb2x1bW5zIH1cbiAgICAgICAgICAgICAgc2VsZWN0Um93PXsgc2VsZWN0Um93IH1cbiAgICAgICAgICAgICAgZXhwYW5kUm93PXsgZXhwYW5kUm93IH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5mb290ZXJDbGFzc2VzIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQm9vdHN0cmFwVGFibGUucHJvcFR5cGVzID0ge1xuICBrZXlGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGJvb3RzdHJhcDQ6IFByb3BUeXBlcy5ib29sLFxuICByZW1vdGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHBhZ2luYXRpb246IFByb3BUeXBlcy5ib29sXG4gIH0pXSksXG4gIG5vRGF0YUluZGljYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLFxuICBzdHJpcGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgYm9yZGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBob3ZlcjogUHJvcFR5cGVzLmJvb2wsXG4gIHRhYkluZGV4Q2VsbDogUHJvcFR5cGVzLmJvb2wsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoZWFkZXJDbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBib2R5Q2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcbiAgd3JhcHBlckNsYXNzZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlYWRlcldyYXBwZXJDbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb25kZW5zZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjYXB0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nXG4gIF0pLFxuICBwYWdpbmF0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICBmaWx0ZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNlbGxFZGl0OiBQcm9wVHlwZXMub2JqZWN0LFxuICBzZWxlY3RSb3c6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbW9kZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIENvbnN0LlJPV19TRUxFQ1RfU0lOR0xFLFxuICAgICAgQ29uc3QuUk9XX1NFTEVDVF9NVUxUSVBMRSxcbiAgICAgIENvbnN0LlJPV19TRUxFQ1RfRElTQUJMRURcbiAgICBdKS5pc1JlcXVpcmVkLFxuICAgIGNsaWNrVG9TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsaWNrVG9FeHBhbmQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsaWNrVG9FZGl0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoaWRlU2VsZWN0QWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3RBbGw6IFByb3BUeXBlcy5mdW5jLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgbm9uU2VsZWN0YWJsZTogUHJvcFR5cGVzLmFycmF5LFxuICAgIG5vblNlbGVjdGFibGVTdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBub25TZWxlY3RhYmxlQ2xhc3NlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBiZ0NvbG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGhpZGVTZWxlY3RDb2x1bW46IFByb3BUeXBlcy5ib29sLFxuICAgIHNlbGVjdGlvblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzZWxlY3Rpb25IZWFkZXJSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGVhZGVyQ29sdW1uU3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgc2VsZWN0Q29sdW1uU3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgc2VsZWN0Q29sdW1uUG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBDb25zdC5JTkRJQ0FUT1JfUE9TSVRJT05fTEVGVCxcbiAgICAgIENvbnN0LklORElDQVRPUl9QT1NJVElPTl9SSUdIVFxuICAgIF0pXG4gIH0pLFxuICBleHBhbmRSb3c6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGV4cGFuZGVkOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgb25FeHBhbmQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRXhwYW5kQWxsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBub25FeHBhbmRhYmxlOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2hvd0V4cGFuZENvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25seU9uZUV4cGFuZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgZXhwYW5kQnlDb2x1bW5Pbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBleHBhbmRDb2x1bW5SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZXhwYW5kSGVhZGVyQ29sdW1uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGV4cGFuZENvbHVtblBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgQ29uc3QuSU5ESUNBVE9SX1BPU0lUSU9OX0xFRlQsXG4gICAgICBDb25zdC5JTkRJQ0FUT1JfUE9TSVRJT05fUklHSFRcbiAgICBdKSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgcGFyZW50Q2xhc3NOYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pXG4gIH0pLFxuICByb3dTdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgcm93RXZlbnRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICByb3dDbGFzc2VzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICBmaWx0ZXJzQ2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmlsdGVyUG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgQ29uc3QuRklMVEVSU19QT1NJVElPTl9UT1AsXG4gICAgQ29uc3QuRklMVEVSU19QT1NJVElPTl9JTkxJTkUsXG4gICAgQ29uc3QuRklMVEVSU19QT1NJVElPTl9CT1RUT01cbiAgXSksXG4gIGZvb3RlckNsYXNzZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRTb3J0ZWQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgZGF0YUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb3JkZXI6IFByb3BUeXBlcy5vbmVPZihbQ29uc3QuU09SVF9ERVNDLCBDb25zdC5TT1JUX0FTQ10pLmlzUmVxdWlyZWRcbiAgfSkpLFxuICBzb3J0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGRhdGFGaWVsZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvcmRlcjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0RFU0MsIENvbnN0LlNPUlRfQVNDXSksXG4gICAgc29ydEZ1bmM6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNvcnRDYXJldDogUHJvcFR5cGVzLmZ1bmNcbiAgfSksXG4gIGRlZmF1bHRTb3J0RGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoW0NvbnN0LlNPUlRfREVTQywgQ29uc3QuU09SVF9BU0NdKSxcbiAgb3ZlcmxheTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVGFibGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblNvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRXh0ZXJuYWxGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkRhdGFTaXplQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLy8gSW5qZWN0IGZyb20gdG9vbGtpdFxuICBzZWFyY2g6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgc2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWFyY2hDb250ZXh0OiBQcm9wVHlwZXMuZnVuY1xuICB9KSxcbiAgc2V0RGVwZW5kZW5jeU1vZHVsZXM6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5Cb290c3RyYXBUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGJvb3RzdHJhcDQ6IGZhbHNlLFxuICByZW1vdGU6IGZhbHNlLFxuICBzdHJpcGVkOiBmYWxzZSxcbiAgYm9yZGVyZWQ6IHRydWUsXG4gIGhvdmVyOiBmYWxzZSxcbiAgY29uZGVuc2VkOiBmYWxzZSxcbiAgbm9EYXRhSW5kaWNhdGlvbjogbnVsbCxcbiAgc2VsZWN0Um93OiB7XG4gICAgbW9kZTogQ29uc3QuUk9XX1NFTEVDVF9ESVNBQkxFRCxcbiAgICBzZWxlY3RlZDogW10sXG4gICAgaGlkZVNlbGVjdENvbHVtbjogdHJ1ZVxuICB9LFxuICBleHBhbmRSb3c6IHtcbiAgICByZW5kZXJlcjogdW5kZWZpbmVkLFxuICAgIGV4cGFuZGVkOiBbXSxcbiAgICBub25FeHBhbmRhYmxlOiBbXVxuICB9LFxuICBjZWxsRWRpdDoge1xuICAgIG1vZGU6IG51bGwsXG4gICAgbm9uRWRpdGFibGVSb3dzOiBbXVxuICB9LFxuICBmaWx0ZXJQb3NpdGlvbjogQ29uc3QuRklMVEVSU19QT1NJVElPTl9JTkxJTkVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvb3RzdHJhcFRhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvYm9vdHN0cmFwLXRhYmxlLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgSGVhZGVyQ2VsbCBmcm9tICcuL2hlYWRlci1jZWxsJztcbmltcG9ydCBTZWxlY3Rpb25IZWFkZXJDZWxsIGZyb20gJy4vcm93LXNlbGVjdGlvbi9zZWxlY3Rpb24taGVhZGVyLWNlbGwnO1xuaW1wb3J0IEV4cGFuZEhlYWRlckNlbGwgZnJvbSAnLi9yb3ctZXhwYW5kL2V4cGFuZC1oZWFkZXItY2VsbCc7XG5pbXBvcnQgd2l0aEhlYWRlclNlbGVjdGlvbiBmcm9tICcuL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWhlYWRlci1jZWxsLWNvbnN1bWVyJztcbmltcG9ydCB3aXRoSGVhZGVyRXhwYW5zaW9uIGZyb20gJy4vcm93LWV4cGFuZC9leHBhbmQtaGVhZGVyLWNlbGwtY29uc3VtZXInO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vY29uc3QnO1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSxcbiAgICBjb2x1bW5zLFxuICAgIG9uU29ydCxcbiAgICBvbkZpbHRlcixcbiAgICBzb3J0RmllbGQsXG4gICAgc29ydE9yZGVyLFxuICAgIHNlbGVjdFJvdyxcbiAgICBleHBhbmRSb3csXG4gICAgY3VyckZpbHRlcnMsXG4gICAgb25FeHRlcm5hbEZpbHRlcixcbiAgICBmaWx0ZXJQb3NpdGlvbixcbiAgICBnbG9iYWxTb3J0Q2FyZXQsXG4gICAgd3JhcHBlckNsYXNzZXNcbiAgfSA9IHByb3BzO1xuXG4gIGxldCBTZWxlY3Rpb25IZWFkZXJDZWxsQ29tcCA9ICgpID0+IG51bGw7XG4gIGxldCBFeHBhbnNpb25IZWFkZXJDZWxsQ29tcCA9ICgpID0+IG51bGw7XG5cbiAgaWYgKGV4cGFuZFJvdy5zaG93RXhwYW5kQ29sdW1uKSB7XG4gICAgRXhwYW5zaW9uSGVhZGVyQ2VsbENvbXAgPSB3aXRoSGVhZGVyRXhwYW5zaW9uKEV4cGFuZEhlYWRlckNlbGwpO1xuICB9XG5cbiAgaWYgKHNlbGVjdFJvdykge1xuICAgIFNlbGVjdGlvbkhlYWRlckNlbGxDb21wID0gd2l0aEhlYWRlclNlbGVjdGlvbihTZWxlY3Rpb25IZWFkZXJDZWxsKTtcbiAgfVxuXG4gIGNvbnN0IGlzUmVuZGVyRnVuY3Rpb25Db2x1bW5JbkxlZnQgPSAoXG4gICAgcG9zaXRpb24gPSBDb25zdC5JTkRJQ0FUT1JfUE9TSVRJT05fTEVGVFxuICApID0+IHBvc2l0aW9uID09PSBDb25zdC5JTkRJQ0FUT1JfUE9TSVRJT05fTEVGVDtcblxuICBjb25zdCBjaGlsZHJlbnMgPSBbXG4gICAgY29sdW1ucy5tYXAoKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgY3VyclNvcnQgPSBjb2x1bW4uZGF0YUZpZWxkID09PSBzb3J0RmllbGQ7XG4gICAgICBjb25zdCBpc0xhc3RTb3J0aW5nID0gY29sdW1uLmRhdGFGaWVsZCA9PT0gc29ydEZpZWxkO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8SGVhZGVyQ2VsbFxuICAgICAgICAgIGluZGV4PXsgaSB9XG4gICAgICAgICAga2V5PXsgY29sdW1uLmRhdGFGaWVsZCB9XG4gICAgICAgICAgY29sdW1uPXsgY29sdW1uIH1cbiAgICAgICAgICBvblNvcnQ9eyBvblNvcnQgfVxuICAgICAgICAgIHNvcnRpbmc9eyBjdXJyU29ydCB9XG4gICAgICAgICAgc29ydE9yZGVyPXsgc29ydE9yZGVyIH1cbiAgICAgICAgICBnbG9iYWxTb3J0Q2FyZXQ9eyBnbG9iYWxTb3J0Q2FyZXQgfVxuICAgICAgICAgIGlzTGFzdFNvcnRpbmc9eyBpc0xhc3RTb3J0aW5nIH1cbiAgICAgICAgICBvbkZpbHRlcj17IG9uRmlsdGVyIH1cbiAgICAgICAgICBjdXJyRmlsdGVycz17IGN1cnJGaWx0ZXJzIH1cbiAgICAgICAgICBvbkV4dGVybmFsRmlsdGVyPXsgb25FeHRlcm5hbEZpbHRlciB9XG4gICAgICAgICAgZmlsdGVyUG9zaXRpb249eyBmaWx0ZXJQb3NpdGlvbiB9XG4gICAgICAgIC8+KTtcbiAgICB9KVxuICBdO1xuXG4gIGlmICghc2VsZWN0Um93LmhpZGVTZWxlY3RDb2x1bW4pIHtcbiAgICBpZiAoaXNSZW5kZXJGdW5jdGlvbkNvbHVtbkluTGVmdChzZWxlY3RSb3cuc2VsZWN0Q29sdW1uUG9zaXRpb24pKSB7XG4gICAgICBjaGlsZHJlbnMudW5zaGlmdCg8U2VsZWN0aW9uSGVhZGVyQ2VsbENvbXAga2V5PVwic2VsZWN0aW9uXCIgLz4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZHJlbnMucHVzaCg8U2VsZWN0aW9uSGVhZGVyQ2VsbENvbXAga2V5PVwic2VsZWN0aW9uXCIgLz4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChleHBhbmRSb3cuc2hvd0V4cGFuZENvbHVtbikge1xuICAgIGlmIChpc1JlbmRlckZ1bmN0aW9uQ29sdW1uSW5MZWZ0KGV4cGFuZFJvdy5leHBhbmRDb2x1bW5Qb3NpdGlvbikpIHtcbiAgICAgIGNoaWxkcmVucy51bnNoaWZ0KDxFeHBhbnNpb25IZWFkZXJDZWxsQ29tcCBrZXk9XCJleHBhbnNpb25cIiAvPik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkcmVucy5wdXNoKDxFeHBhbnNpb25IZWFkZXJDZWxsQ29tcCBrZXk9XCJleHBhbnNpb25cIiAvPik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dGhlYWQgY2xhc3NOYW1lPXsgd3JhcHBlckNsYXNzZXMgfT5cbiAgICAgIDx0ciBjbGFzc05hbWU9eyBjbGFzc05hbWUgfT5cbiAgICAgICAgeyBjaGlsZHJlbnMgfVxuICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICApO1xufTtcblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIG9uU29ydDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgc29ydEZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzb3J0T3JkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdFJvdzogUHJvcFR5cGVzLm9iamVjdCxcbiAgY3VyckZpbHRlcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIG9uRXh0ZXJuYWxGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBnbG9iYWxTb3J0Q2FyZXQ6IFByb3BUeXBlcy5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBwZXJDbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleHBhbmRSb3c6IFByb3BUeXBlcy5vYmplY3QsXG4gIGZpbHRlclBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIENvbnN0LkZJTFRFUlNfUE9TSVRJT05fVE9QLFxuICAgIENvbnN0LkZJTFRFUlNfUE9TSVRJT05fSU5MSU5FLFxuICAgIENvbnN0LkZJTFRFUlNfUE9TSVRJT05fQk9UVE9NXG4gIF0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9oZWFkZXIuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IENvbnN0IGZyb20gJy4vY29uc3QnO1xuaW1wb3J0IFNvcnRTeW1ib2wgZnJvbSAnLi9zb3J0L3N5bWJvbCc7XG5pbXBvcnQgU29ydENhcmV0IGZyb20gJy4vc29ydC9jYXJldCc7XG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBldmVudERlbGVnYXRlciBmcm9tICcuL2NlbGwtZXZlbnQtZGVsZWdhdGVyJztcblxuXG5jbGFzcyBIZWFkZXJDZWxsIGV4dGVuZHMgZXZlbnREZWxlZ2F0ZXIoUmVhY3QuQ29tcG9uZW50KSB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjb2x1bW4sXG4gICAgICBpbmRleCxcbiAgICAgIG9uU29ydCxcbiAgICAgIHNvcnRpbmcsXG4gICAgICBzb3J0T3JkZXIsXG4gICAgICBpc0xhc3RTb3J0aW5nLFxuICAgICAgb25GaWx0ZXIsXG4gICAgICBjdXJyRmlsdGVycyxcbiAgICAgIGZpbHRlclBvc2l0aW9uLFxuICAgICAgb25FeHRlcm5hbEZpbHRlcixcbiAgICAgIGdsb2JhbFNvcnRDYXJldFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qge1xuICAgICAgdGV4dCxcbiAgICAgIHNvcnQsXG4gICAgICBzb3J0Q2FyZXQsXG4gICAgICBmaWx0ZXIsXG4gICAgICBmaWx0ZXJSZW5kZXJlcixcbiAgICAgIGhlYWRlclRpdGxlLFxuICAgICAgaGVhZGVyQWxpZ24sXG4gICAgICBoZWFkZXJGb3JtYXR0ZXIsXG4gICAgICBoZWFkZXJFdmVudHMsXG4gICAgICBoZWFkZXJDbGFzc2VzLFxuICAgICAgaGVhZGVyU3R5bGUsXG4gICAgICBoZWFkZXJBdHRycyxcbiAgICAgIGhlYWRlclNvcnRpbmdDbGFzc2VzLFxuICAgICAgaGVhZGVyU29ydGluZ1N0eWxlXG4gICAgfSA9IGNvbHVtbjtcblxuICAgIGNvbnN0IHNvcnRDYXJldGZ1bmMgPSBzb3J0Q2FyZXQgfHwgZ2xvYmFsU29ydENhcmV0O1xuXG4gICAgY29uc3QgZGVsZWdhdGVFdmVudHMgPSB0aGlzLmRlbGVnYXRlKGhlYWRlckV2ZW50cyk7XG5cbiAgICBjb25zdCBjdXN0b21BdHRycyA9IF8uaXNGdW5jdGlvbihoZWFkZXJBdHRycylcbiAgICAgID8gaGVhZGVyQXR0cnMoY29sdW1uLCBpbmRleClcbiAgICAgIDogKGhlYWRlckF0dHJzIHx8IHt9KTtcblxuICAgIGNvbnN0IGNlbGxBdHRycyA9IHtcbiAgICAgIC4uLmN1c3RvbUF0dHJzLFxuICAgICAgLi4uZGVsZWdhdGVFdmVudHMsXG4gICAgICB0YWJJbmRleDogXy5pc0RlZmluZWQoY3VzdG9tQXR0cnMudGFiSW5kZXgpID8gY3VzdG9tQXR0cnMudGFiSW5kZXggOiAwXG4gICAgfTtcblxuICAgIGxldCBzb3J0U3ltYm9sO1xuICAgIGxldCBmaWx0ZXJFbG07XG4gICAgbGV0IGNlbGxTdHlsZSA9IHt9O1xuICAgIGxldCBjZWxsQ2xhc3NlcyA9IF8uaXNGdW5jdGlvbihoZWFkZXJDbGFzc2VzKSA/IGhlYWRlckNsYXNzZXMoY29sdW1uLCBpbmRleCkgOiBoZWFkZXJDbGFzc2VzO1xuXG4gICAgaWYgKGhlYWRlclN0eWxlKSB7XG4gICAgICBjZWxsU3R5bGUgPSBfLmlzRnVuY3Rpb24oaGVhZGVyU3R5bGUpID8gaGVhZGVyU3R5bGUoY29sdW1uLCBpbmRleCkgOiBoZWFkZXJTdHlsZTtcbiAgICAgIGNlbGxTdHlsZSA9IGNlbGxTdHlsZSA/IHsgLi4uY2VsbFN0eWxlIH0gOiBjZWxsU3R5bGU7XG4gICAgfVxuXG4gICAgaWYgKGhlYWRlclRpdGxlKSB7XG4gICAgICBjZWxsQXR0cnMudGl0bGUgPSBfLmlzRnVuY3Rpb24oaGVhZGVyVGl0bGUpID8gaGVhZGVyVGl0bGUoY29sdW1uLCBpbmRleCkgOiB0ZXh0O1xuICAgIH1cblxuICAgIGlmIChoZWFkZXJBbGlnbikge1xuICAgICAgY2VsbFN0eWxlLnRleHRBbGlnbiA9IF8uaXNGdW5jdGlvbihoZWFkZXJBbGlnbikgPyBoZWFkZXJBbGlnbihjb2x1bW4sIGluZGV4KSA6IGhlYWRlckFsaWduO1xuICAgIH1cblxuICAgIGlmIChzb3J0KSB7XG4gICAgICBjb25zdCBjdXN0b21DbGljayA9IGNlbGxBdHRycy5vbkNsaWNrO1xuICAgICAgY2VsbEF0dHJzWydhcmlhLWxhYmVsJ10gPSBzb3J0aW5nID8gYCR7dGV4dH0gc29ydCAke3NvcnRPcmRlcn1gIDogYCR7dGV4dH0gc29ydGFibGVgO1xuICAgICAgY2VsbEF0dHJzLm9uS2V5VXAgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICBvblNvcnQoY29sdW1uKTtcbiAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGN1c3RvbUNsaWNrKSkgY3VzdG9tQ2xpY2soZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjZWxsQXR0cnMub25DbGljayA9IChlKSA9PiB7XG4gICAgICAgIG9uU29ydChjb2x1bW4pO1xuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGN1c3RvbUNsaWNrKSkgY3VzdG9tQ2xpY2soZSk7XG4gICAgICB9O1xuICAgICAgY2VsbEF0dHJzLmNsYXNzTmFtZSA9IGNzKGNlbGxBdHRycy5jbGFzc05hbWUsICdzb3J0YWJsZScpO1xuXG4gICAgICBpZiAoc29ydGluZykge1xuICAgICAgICBzb3J0U3ltYm9sID0gc29ydENhcmV0ZnVuYyA/XG4gICAgICAgICAgc29ydENhcmV0ZnVuYyhzb3J0T3JkZXIsIGNvbHVtbikgOlxuICAgICAgICAgIDxTb3J0Q2FyZXQgb3JkZXI9eyBzb3J0T3JkZXIgfSAvPjtcblxuICAgICAgICAvLyBhcHBlbmQgY3VzdG9taXplZCBjbGFzc2VzIG9yIHN0eWxlIGlmIHRhYmxlIHdhcyBzb3J0aW5nIGJhc2VkIG9uIHRoZSBjdXJyZW50IGNvbHVtbi5cbiAgICAgICAgY2VsbENsYXNzZXMgPSBjcyhcbiAgICAgICAgICBjZWxsQ2xhc3NlcyxcbiAgICAgICAgICBfLmlzRnVuY3Rpb24oaGVhZGVyU29ydGluZ0NsYXNzZXMpXG4gICAgICAgICAgICA/IGhlYWRlclNvcnRpbmdDbGFzc2VzKGNvbHVtbiwgc29ydE9yZGVyLCBpc0xhc3RTb3J0aW5nLCBpbmRleClcbiAgICAgICAgICAgIDogaGVhZGVyU29ydGluZ0NsYXNzZXNcbiAgICAgICAgKTtcblxuICAgICAgICBjZWxsU3R5bGUgPSB7XG4gICAgICAgICAgLi4uY2VsbFN0eWxlLFxuICAgICAgICAgIC4uLl8uaXNGdW5jdGlvbihoZWFkZXJTb3J0aW5nU3R5bGUpXG4gICAgICAgICAgICA/IGhlYWRlclNvcnRpbmdTdHlsZShjb2x1bW4sIHNvcnRPcmRlciwgaXNMYXN0U29ydGluZywgaW5kZXgpXG4gICAgICAgICAgICA6IGhlYWRlclNvcnRpbmdTdHlsZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc29ydFN5bWJvbCA9IHNvcnRDYXJldGZ1bmMgPyBzb3J0Q2FyZXRmdW5jKHVuZGVmaW5lZCwgY29sdW1uKSA6IDxTb3J0U3ltYm9sIC8+O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjZWxsQ2xhc3NlcykgY2VsbEF0dHJzLmNsYXNzTmFtZSA9IGNzKGNlbGxBdHRycy5jbGFzc05hbWUsIGNlbGxDbGFzc2VzKTtcbiAgICBpZiAoIV8uaXNFbXB0eU9iamVjdChjZWxsU3R5bGUpKSBjZWxsQXR0cnMuc3R5bGUgPSBjZWxsU3R5bGU7XG5cbiAgICBpZiAoZmlsdGVyUG9zaXRpb24gPT09IENvbnN0LkZJTFRFUlNfUE9TSVRJT05fSU5MSU5FKSB7XG4gICAgICBpZiAoZmlsdGVyUmVuZGVyZXIpIHtcbiAgICAgICAgY29uc3Qgb25DdXN0b21GaWx0ZXIgPSBvbkV4dGVybmFsRmlsdGVyKGNvbHVtbiwgZmlsdGVyLnByb3BzLnR5cGUpO1xuICAgICAgICBmaWx0ZXJFbG0gPSBmaWx0ZXJSZW5kZXJlcihvbkN1c3RvbUZpbHRlciwgY29sdW1uKTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyKSB7XG4gICAgICAgIGZpbHRlckVsbSA9IChcbiAgICAgICAgICA8ZmlsdGVyLkZpbHRlclxuICAgICAgICAgICAgeyAuLi5maWx0ZXIucHJvcHMgfVxuICAgICAgICAgICAgZmlsdGVyU3RhdGU9eyBjdXJyRmlsdGVyc1tjb2x1bW4uZGF0YUZpZWxkXSB9XG4gICAgICAgICAgICBvbkZpbHRlcj17IG9uRmlsdGVyIH1cbiAgICAgICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IGhlYWRlckZvcm1hdHRlciA/XG4gICAgICBoZWFkZXJGb3JtYXR0ZXIoY29sdW1uLCBpbmRleCwgeyBzb3J0RWxlbWVudDogc29ydFN5bWJvbCwgZmlsdGVyRWxlbWVudDogZmlsdGVyRWxtIH0pIDpcbiAgICAgIHRleHQ7XG5cbiAgICBpZiAoaGVhZGVyRm9ybWF0dGVyKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCBjZWxsQXR0cnMsIGNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCBjZWxsQXR0cnMsIGNoaWxkcmVuLCBzb3J0U3ltYm9sLCBmaWx0ZXJFbG0pO1xuICB9XG59XG5cbkhlYWRlckNlbGwucHJvcFR5cGVzID0ge1xuICBjb2x1bW46IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgZGF0YUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBDb25zdC5UWVBFX1NUUklORyxcbiAgICAgIENvbnN0LlRZUEVfTlVNQkVSLFxuICAgICAgQ29uc3QuVFlQRV9CT09MRUFOLFxuICAgICAgQ29uc3QuVFlQRV9EQVRFXG4gICAgXSksXG4gICAgaXNEdW1teUZpZWxkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICAgIGhlYWRlckZvcm1hdHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZm9ybWF0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmb3JtYXRFeHRyYURhdGE6IFByb3BUeXBlcy5hbnksXG4gICAgaGVhZGVyQ2xhc3NlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGhlYWRlclN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGhlYWRlclRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgaGVhZGVyRXZlbnRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGV2ZW50czogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBoZWFkZXJBbGlnbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBoZWFkZXJBdHRyczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBhdHRyczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBzb3J0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzb3J0RnVuYzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Tb3J0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBlZGl0b3I6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZWRpdGFibGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGVkaXRDZWxsU3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgZWRpdENlbGxDbGFzc2VzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGVkaXRvclN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGVkaXRvckNsYXNzZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgZWRpdG9yUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHZhbGlkYXRvcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZmlsdGVyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGZpbHRlclJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmaWx0ZXJWYWx1ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2VhcmNoYWJsZTogUHJvcFR5cGVzLmJvb2xcbiAgfSkuaXNSZXF1aXJlZCxcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgb25Tb3J0OiBQcm9wVHlwZXMuZnVuYyxcbiAgc29ydGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIHNvcnRPcmRlcjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0FTQywgQ29uc3QuU09SVF9ERVNDXSksXG4gIHNvcnRDYXJldDogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzTGFzdFNvcnRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBvbkZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGZpbHRlclBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW0NvbnN0LkZJTFRFUlNfUE9TSVRJT05fSU5MSU5FLFxuICAgIENvbnN0LkZJTFRFUlNfUE9TSVRJT05fQk9UVE9NLCBDb25zdC5GSUxURVJTX1BPU0lUSU9OX1RPUF0pLFxuICBjdXJyRmlsdGVyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgb25FeHRlcm5hbEZpbHRlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckNlbGw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9oZWFkZXItY2VsbC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb290c3RyYXBDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvYm9vdHN0cmFwJztcblxuY29uc3QgU29ydFN5bWJvbCA9ICgpID0+IChcbiAgPEJvb3RzdHJhcENvbnRleHQuQ29uc3VtZXI+XG4gICAge1xuICAgICAgKHsgYm9vdHN0cmFwNCB9KSA9PiAoYm9vdHN0cmFwNCA/IChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3JkZXItNFwiIC8+XG4gICAgICApIDogKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcmRlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRyb3B1cFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKSlcbiAgICB9XG4gIDwvQm9vdHN0cmFwQ29udGV4dC5Db25zdW1lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRTeW1ib2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zb3J0L3N5bWJvbC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vY29uc3QnO1xuaW1wb3J0IHsgQm9vdHN0cmFwQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL2Jvb3RzdHJhcCc7XG5cblxuY29uc3QgU29ydENhcmV0ID0gKHsgb3JkZXIgfSkgPT4ge1xuICBjb25zdCBvcmRlckNsYXNzID0gY3MoJ3JlYWN0LWJvb3RzdHJhcC10YWJsZS1zb3J0LW9yZGVyJywge1xuICAgIGRyb3B1cDogb3JkZXIgPT09IENvbnN0LlNPUlRfQVNDXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEJvb3RzdHJhcENvbnRleHQuQ29uc3VtZXI+XG4gICAgICB7XG4gICAgICAgICh7IGJvb3RzdHJhcDQgfSkgPT4gKGJvb3RzdHJhcDQgPyAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsgYGNhcmV0LTQtJHtvcmRlcn1gIH0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyBvcmRlckNsYXNzIH0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApKVxuICAgICAgfVxuICAgIDwvQm9vdHN0cmFwQ29udGV4dC5Db25zdW1lcj5cbiAgKTtcbn07XG5cblNvcnRDYXJldC5wcm9wVHlwZXMgPSB7XG4gIG9yZGVyOiBQcm9wVHlwZXMub25lT2YoW0NvbnN0LlNPUlRfQVNDLCBDb25zdC5TT1JUX0RFU0NdKS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTb3J0Q2FyZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zb3J0L2NhcmV0LmpzIiwiLy8gICAgIFVuZGVyc2NvcmUuanMgMS45LjFcbi8vICAgICBodHRwOi8vdW5kZXJzY29yZWpzLm9yZ1xuLy8gICAgIChjKSAyMDA5LTIwMTggSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbi8vICAgICBVbmRlcnNjb3JlIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG4oZnVuY3Rpb24oKSB7XG5cbiAgLy8gQmFzZWxpbmUgc2V0dXBcbiAgLy8gLS0tLS0tLS0tLS0tLS1cblxuICAvLyBFc3RhYmxpc2ggdGhlIHJvb3Qgb2JqZWN0LCBgd2luZG93YCAoYHNlbGZgKSBpbiB0aGUgYnJvd3NlciwgYGdsb2JhbGBcbiAgLy8gb24gdGhlIHNlcnZlciwgb3IgYHRoaXNgIGluIHNvbWUgdmlydHVhbCBtYWNoaW5lcy4gV2UgdXNlIGBzZWxmYFxuICAvLyBpbnN0ZWFkIG9mIGB3aW5kb3dgIGZvciBgV2ViV29ya2VyYCBzdXBwb3J0LlxuICB2YXIgcm9vdCA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYuc2VsZiA9PT0gc2VsZiAmJiBzZWxmIHx8XG4gICAgICAgICAgICB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbC5nbG9iYWwgPT09IGdsb2JhbCAmJiBnbG9iYWwgfHxcbiAgICAgICAgICAgIHRoaXMgfHxcbiAgICAgICAgICAgIHt9O1xuXG4gIC8vIFNhdmUgdGhlIHByZXZpb3VzIHZhbHVlIG9mIHRoZSBgX2AgdmFyaWFibGUuXG4gIHZhciBwcmV2aW91c1VuZGVyc2NvcmUgPSByb290Ll87XG5cbiAgLy8gU2F2ZSBieXRlcyBpbiB0aGUgbWluaWZpZWQgKGJ1dCBub3QgZ3ppcHBlZCkgdmVyc2lvbjpcbiAgdmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsIE9ialByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIFN5bWJvbFByb3RvID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBTeW1ib2wucHJvdG90eXBlIDogbnVsbDtcblxuICAvLyBDcmVhdGUgcXVpY2sgcmVmZXJlbmNlIHZhcmlhYmxlcyBmb3Igc3BlZWQgYWNjZXNzIHRvIGNvcmUgcHJvdG90eXBlcy5cbiAgdmFyIHB1c2ggPSBBcnJheVByb3RvLnB1c2gsXG4gICAgICBzbGljZSA9IEFycmF5UHJvdG8uc2xpY2UsXG4gICAgICB0b1N0cmluZyA9IE9ialByb3RvLnRvU3RyaW5nLFxuICAgICAgaGFzT3duUHJvcGVydHkgPSBPYmpQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuICAvLyBBbGwgKipFQ01BU2NyaXB0IDUqKiBuYXRpdmUgZnVuY3Rpb24gaW1wbGVtZW50YXRpb25zIHRoYXQgd2UgaG9wZSB0byB1c2VcbiAgLy8gYXJlIGRlY2xhcmVkIGhlcmUuXG4gIHZhciBuYXRpdmVJc0FycmF5ID0gQXJyYXkuaXNBcnJheSxcbiAgICAgIG5hdGl2ZUtleXMgPSBPYmplY3Qua2V5cyxcbiAgICAgIG5hdGl2ZUNyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbiAgLy8gTmFrZWQgZnVuY3Rpb24gcmVmZXJlbmNlIGZvciBzdXJyb2dhdGUtcHJvdG90eXBlLXN3YXBwaW5nLlxuICB2YXIgQ3RvciA9IGZ1bmN0aW9uKCl7fTtcblxuICAvLyBDcmVhdGUgYSBzYWZlIHJlZmVyZW5jZSB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QgZm9yIHVzZSBiZWxvdy5cbiAgdmFyIF8gPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgXykgcmV0dXJuIG9iajtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgXykpIHJldHVybiBuZXcgXyhvYmopO1xuICAgIHRoaXMuX3dyYXBwZWQgPSBvYmo7XG4gIH07XG5cbiAgLy8gRXhwb3J0IHRoZSBVbmRlcnNjb3JlIG9iamVjdCBmb3IgKipOb2RlLmpzKiosIHdpdGhcbiAgLy8gYmFja3dhcmRzLWNvbXBhdGliaWxpdHkgZm9yIHRoZWlyIG9sZCBtb2R1bGUgQVBJLiBJZiB3ZSdyZSBpblxuICAvLyB0aGUgYnJvd3NlciwgYWRkIGBfYCBhcyBhIGdsb2JhbCBvYmplY3QuXG4gIC8vIChgbm9kZVR5cGVgIGlzIGNoZWNrZWQgdG8gZW5zdXJlIHRoYXQgYG1vZHVsZWBcbiAgLy8gYW5kIGBleHBvcnRzYCBhcmUgbm90IEhUTUwgZWxlbWVudHMuKVxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcgJiYgIWV4cG9ydHMubm9kZVR5cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBfO1xuICAgIH1cbiAgICBleHBvcnRzLl8gPSBfO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuXyA9IF87XG4gIH1cblxuICAvLyBDdXJyZW50IHZlcnNpb24uXG4gIF8uVkVSU0lPTiA9ICcxLjkuMSc7XG5cbiAgLy8gSW50ZXJuYWwgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGVmZmljaWVudCAoZm9yIGN1cnJlbnQgZW5naW5lcykgdmVyc2lvblxuICAvLyBvZiB0aGUgcGFzc2VkLWluIGNhbGxiYWNrLCB0byBiZSByZXBlYXRlZGx5IGFwcGxpZWQgaW4gb3RoZXIgVW5kZXJzY29yZVxuICAvLyBmdW5jdGlvbnMuXG4gIHZhciBvcHRpbWl6ZUNiID0gZnVuY3Rpb24oZnVuYywgY29udGV4dCwgYXJnQ291bnQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSByZXR1cm4gZnVuYztcbiAgICBzd2l0Y2ggKGFyZ0NvdW50ID09IG51bGwgPyAzIDogYXJnQ291bnQpIHtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgdmFsdWUpO1xuICAgICAgfTtcbiAgICAgIC8vIFRoZSAyLWFyZ3VtZW50IGNhc2UgaXMgb21pdHRlZCBiZWNhdXNlIHdl4oCZcmUgbm90IHVzaW5nIGl0LlxuICAgICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICAgIH07XG4gICAgICBjYXNlIDQ6IHJldHVybiBmdW5jdGlvbihhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGJ1aWx0aW5JdGVyYXRlZTtcblxuICAvLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiB0byBnZW5lcmF0ZSBjYWxsYmFja3MgdGhhdCBjYW4gYmUgYXBwbGllZCB0byBlYWNoXG4gIC8vIGVsZW1lbnQgaW4gYSBjb2xsZWN0aW9uLCByZXR1cm5pbmcgdGhlIGRlc2lyZWQgcmVzdWx0IOKAlCBlaXRoZXIgYGlkZW50aXR5YCxcbiAgLy8gYW4gYXJiaXRyYXJ5IGNhbGxiYWNrLCBhIHByb3BlcnR5IG1hdGNoZXIsIG9yIGEgcHJvcGVydHkgYWNjZXNzb3IuXG4gIHZhciBjYiA9IGZ1bmN0aW9uKHZhbHVlLCBjb250ZXh0LCBhcmdDb3VudCkge1xuICAgIGlmIChfLml0ZXJhdGVlICE9PSBidWlsdGluSXRlcmF0ZWUpIHJldHVybiBfLml0ZXJhdGVlKHZhbHVlLCBjb250ZXh0KTtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIF8uaWRlbnRpdHk7XG4gICAgaWYgKF8uaXNGdW5jdGlvbih2YWx1ZSkpIHJldHVybiBvcHRpbWl6ZUNiKHZhbHVlLCBjb250ZXh0LCBhcmdDb3VudCk7XG4gICAgaWYgKF8uaXNPYmplY3QodmFsdWUpICYmICFfLmlzQXJyYXkodmFsdWUpKSByZXR1cm4gXy5tYXRjaGVyKHZhbHVlKTtcbiAgICByZXR1cm4gXy5wcm9wZXJ0eSh2YWx1ZSk7XG4gIH07XG5cbiAgLy8gRXh0ZXJuYWwgd3JhcHBlciBmb3Igb3VyIGNhbGxiYWNrIGdlbmVyYXRvci4gVXNlcnMgbWF5IGN1c3RvbWl6ZVxuICAvLyBgXy5pdGVyYXRlZWAgaWYgdGhleSB3YW50IGFkZGl0aW9uYWwgcHJlZGljYXRlL2l0ZXJhdGVlIHNob3J0aGFuZCBzdHlsZXMuXG4gIC8vIFRoaXMgYWJzdHJhY3Rpb24gaGlkZXMgdGhlIGludGVybmFsLW9ubHkgYXJnQ291bnQgYXJndW1lbnQuXG4gIF8uaXRlcmF0ZWUgPSBidWlsdGluSXRlcmF0ZWUgPSBmdW5jdGlvbih2YWx1ZSwgY29udGV4dCkge1xuICAgIHJldHVybiBjYih2YWx1ZSwgY29udGV4dCwgSW5maW5pdHkpO1xuICB9O1xuXG4gIC8vIFNvbWUgZnVuY3Rpb25zIHRha2UgYSB2YXJpYWJsZSBudW1iZXIgb2YgYXJndW1lbnRzLCBvciBhIGZldyBleHBlY3RlZFxuICAvLyBhcmd1bWVudHMgYXQgdGhlIGJlZ2lubmluZyBhbmQgdGhlbiBhIHZhcmlhYmxlIG51bWJlciBvZiB2YWx1ZXMgdG8gb3BlcmF0ZVxuICAvLyBvbi4gVGhpcyBoZWxwZXIgYWNjdW11bGF0ZXMgYWxsIHJlbWFpbmluZyBhcmd1bWVudHMgcGFzdCB0aGUgZnVuY3Rpb27igJlzXG4gIC8vIGFyZ3VtZW50IGxlbmd0aCAob3IgYW4gZXhwbGljaXQgYHN0YXJ0SW5kZXhgKSwgaW50byBhbiBhcnJheSB0aGF0IGJlY29tZXNcbiAgLy8gdGhlIGxhc3QgYXJndW1lbnQuIFNpbWlsYXIgdG8gRVM24oCZcyBcInJlc3QgcGFyYW1ldGVyXCIuXG4gIHZhciByZXN0QXJndW1lbnRzID0gZnVuY3Rpb24oZnVuYywgc3RhcnRJbmRleCkge1xuICAgIHN0YXJ0SW5kZXggPSBzdGFydEluZGV4ID09IG51bGwgPyBmdW5jLmxlbmd0aCAtIDEgOiArc3RhcnRJbmRleDtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoYXJndW1lbnRzLmxlbmd0aCAtIHN0YXJ0SW5kZXgsIDApLFxuICAgICAgICAgIHJlc3QgPSBBcnJheShsZW5ndGgpLFxuICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgIGZvciAoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICByZXN0W2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleCArIHN0YXJ0SW5kZXhdO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChzdGFydEluZGV4KSB7XG4gICAgICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCByZXN0KTtcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3VtZW50c1swXSwgcmVzdCk7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgcmVzdCk7XG4gICAgICB9XG4gICAgICB2YXIgYXJncyA9IEFycmF5KHN0YXJ0SW5kZXggKyAxKTtcbiAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHN0YXJ0SW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgYXJnc1tpbmRleF0gPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgfVxuICAgICAgYXJnc1tzdGFydEluZGV4XSA9IHJlc3Q7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhIG5ldyBvYmplY3QgdGhhdCBpbmhlcml0cyBmcm9tIGFub3RoZXIuXG4gIHZhciBiYXNlQ3JlYXRlID0gZnVuY3Rpb24ocHJvdG90eXBlKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KHByb3RvdHlwZSkpIHJldHVybiB7fTtcbiAgICBpZiAobmF0aXZlQ3JlYXRlKSByZXR1cm4gbmF0aXZlQ3JlYXRlKHByb3RvdHlwZSk7XG4gICAgQ3Rvci5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBDdG9yO1xuICAgIEN0b3IucHJvdG90eXBlID0gbnVsbDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBzaGFsbG93UHJvcGVydHkgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqID09IG51bGwgPyB2b2lkIDAgOiBvYmpba2V5XTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBoYXMgPSBmdW5jdGlvbihvYmosIHBhdGgpIHtcbiAgICByZXR1cm4gb2JqICE9IG51bGwgJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHBhdGgpO1xuICB9XG5cbiAgdmFyIGRlZXBHZXQgPSBmdW5jdGlvbihvYmosIHBhdGgpIHtcbiAgICB2YXIgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgICAgb2JqID0gb2JqW3BhdGhbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gbGVuZ3RoID8gb2JqIDogdm9pZCAwO1xuICB9O1xuXG4gIC8vIEhlbHBlciBmb3IgY29sbGVjdGlvbiBtZXRob2RzIHRvIGRldGVybWluZSB3aGV0aGVyIGEgY29sbGVjdGlvblxuICAvLyBzaG91bGQgYmUgaXRlcmF0ZWQgYXMgYW4gYXJyYXkgb3IgYXMgYW4gb2JqZWN0LlxuICAvLyBSZWxhdGVkOiBodHRwOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2xlbmd0aFxuICAvLyBBdm9pZHMgYSB2ZXJ5IG5hc3R5IGlPUyA4IEpJVCBidWcgb24gQVJNLTY0LiAjMjA5NFxuICB2YXIgTUFYX0FSUkFZX0lOREVYID0gTWF0aC5wb3coMiwgNTMpIC0gMTtcbiAgdmFyIGdldExlbmd0aCA9IHNoYWxsb3dQcm9wZXJ0eSgnbGVuZ3RoJyk7XG4gIHZhciBpc0FycmF5TGlrZSA9IGZ1bmN0aW9uKGNvbGxlY3Rpb24pIHtcbiAgICB2YXIgbGVuZ3RoID0gZ2V0TGVuZ3RoKGNvbGxlY3Rpb24pO1xuICAgIHJldHVybiB0eXBlb2YgbGVuZ3RoID09ICdudW1iZXInICYmIGxlbmd0aCA+PSAwICYmIGxlbmd0aCA8PSBNQVhfQVJSQVlfSU5ERVg7XG4gIH07XG5cbiAgLy8gQ29sbGVjdGlvbiBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBUaGUgY29ybmVyc3RvbmUsIGFuIGBlYWNoYCBpbXBsZW1lbnRhdGlvbiwgYWthIGBmb3JFYWNoYC5cbiAgLy8gSGFuZGxlcyByYXcgb2JqZWN0cyBpbiBhZGRpdGlvbiB0byBhcnJheS1saWtlcy4gVHJlYXRzIGFsbFxuICAvLyBzcGFyc2UgYXJyYXktbGlrZXMgYXMgaWYgdGhleSB3ZXJlIGRlbnNlLlxuICBfLmVhY2ggPSBfLmZvckVhY2ggPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBvcHRpbWl6ZUNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB2YXIgaSwgbGVuZ3RoO1xuICAgIGlmIChpc0FycmF5TGlrZShvYmopKSB7XG4gICAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlcmF0ZWUob2JqW2ldLCBpLCBvYmopO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgICAgZm9yIChpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVyYXRlZShvYmpba2V5c1tpXV0sIGtleXNbaV0sIG9iaik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSByZXN1bHRzIG9mIGFwcGx5aW5nIHRoZSBpdGVyYXRlZSB0byBlYWNoIGVsZW1lbnQuXG4gIF8ubWFwID0gXy5jb2xsZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgIGxlbmd0aCA9IChrZXlzIHx8IG9iaikubGVuZ3RoLFxuICAgICAgICByZXN1bHRzID0gQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY3VycmVudEtleSA9IGtleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4O1xuICAgICAgcmVzdWx0c1tpbmRleF0gPSBpdGVyYXRlZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIHJlZHVjaW5nIGZ1bmN0aW9uIGl0ZXJhdGluZyBsZWZ0IG9yIHJpZ2h0LlxuICB2YXIgY3JlYXRlUmVkdWNlID0gZnVuY3Rpb24oZGlyKSB7XG4gICAgLy8gV3JhcCBjb2RlIHRoYXQgcmVhc3NpZ25zIGFyZ3VtZW50IHZhcmlhYmxlcyBpbiBhIHNlcGFyYXRlIGZ1bmN0aW9uIHRoYW5cbiAgICAvLyB0aGUgb25lIHRoYXQgYWNjZXNzZXMgYGFyZ3VtZW50cy5sZW5ndGhgIHRvIGF2b2lkIGEgcGVyZiBoaXQuICgjMTk5MSlcbiAgICB2YXIgcmVkdWNlciA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIG1lbW8sIGluaXRpYWwpIHtcbiAgICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBkaXIgPiAwID8gMCA6IGxlbmd0aCAtIDE7XG4gICAgICBpZiAoIWluaXRpYWwpIHtcbiAgICAgICAgbWVtbyA9IG9ialtrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleF07XG4gICAgICAgIGluZGV4ICs9IGRpcjtcbiAgICAgIH1cbiAgICAgIGZvciAoOyBpbmRleCA+PSAwICYmIGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSBkaXIpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICAgICAgbWVtbyA9IGl0ZXJhdGVlKG1lbW8sIG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH07XG5cbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgbWVtbywgY29udGV4dCkge1xuICAgICAgdmFyIGluaXRpYWwgPSBhcmd1bWVudHMubGVuZ3RoID49IDM7XG4gICAgICByZXR1cm4gcmVkdWNlcihvYmosIG9wdGltaXplQ2IoaXRlcmF0ZWUsIGNvbnRleHQsIDQpLCBtZW1vLCBpbml0aWFsKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vICoqUmVkdWNlKiogYnVpbGRzIHVwIGEgc2luZ2xlIHJlc3VsdCBmcm9tIGEgbGlzdCBvZiB2YWx1ZXMsIGFrYSBgaW5qZWN0YCxcbiAgLy8gb3IgYGZvbGRsYC5cbiAgXy5yZWR1Y2UgPSBfLmZvbGRsID0gXy5pbmplY3QgPSBjcmVhdGVSZWR1Y2UoMSk7XG5cbiAgLy8gVGhlIHJpZ2h0LWFzc29jaWF0aXZlIHZlcnNpb24gb2YgcmVkdWNlLCBhbHNvIGtub3duIGFzIGBmb2xkcmAuXG4gIF8ucmVkdWNlUmlnaHQgPSBfLmZvbGRyID0gY3JlYXRlUmVkdWNlKC0xKTtcblxuICAvLyBSZXR1cm4gdGhlIGZpcnN0IHZhbHVlIHdoaWNoIHBhc3NlcyBhIHRydXRoIHRlc3QuIEFsaWFzZWQgYXMgYGRldGVjdGAuXG4gIF8uZmluZCA9IF8uZGV0ZWN0ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIga2V5RmluZGVyID0gaXNBcnJheUxpa2Uob2JqKSA/IF8uZmluZEluZGV4IDogXy5maW5kS2V5O1xuICAgIHZhciBrZXkgPSBrZXlGaW5kZXIob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIGlmIChrZXkgIT09IHZvaWQgMCAmJiBrZXkgIT09IC0xKSByZXR1cm4gb2JqW2tleV07XG4gIH07XG5cbiAgLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBwYXNzIGEgdHJ1dGggdGVzdC5cbiAgLy8gQWxpYXNlZCBhcyBgc2VsZWN0YC5cbiAgXy5maWx0ZXIgPSBfLnNlbGVjdCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGxpc3QpKSByZXN1bHRzLnB1c2godmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIGZvciB3aGljaCBhIHRydXRoIHRlc3QgZmFpbHMuXG4gIF8ucmVqZWN0ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIob2JqLCBfLm5lZ2F0ZShjYihwcmVkaWNhdGUpKSwgY29udGV4dCk7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgYWxsIG9mIHRoZSBlbGVtZW50cyBtYXRjaCBhIHRydXRoIHRlc3QuXG4gIC8vIEFsaWFzZWQgYXMgYGFsbGAuXG4gIF8uZXZlcnkgPSBfLmFsbCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICB2YXIga2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIF8ua2V5cyhvYmopLFxuICAgICAgICBsZW5ndGggPSAoa2V5cyB8fCBvYmopLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY3VycmVudEtleSA9IGtleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4O1xuICAgICAgaWYgKCFwcmVkaWNhdGUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiBhdCBsZWFzdCBvbmUgZWxlbWVudCBpbiB0aGUgb2JqZWN0IG1hdGNoZXMgYSB0cnV0aCB0ZXN0LlxuICAvLyBBbGlhc2VkIGFzIGBhbnlgLlxuICBfLnNvbWUgPSBfLmFueSA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICB2YXIga2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIF8ua2V5cyhvYmopLFxuICAgICAgICBsZW5ndGggPSAoa2V5cyB8fCBvYmopLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY3VycmVudEtleSA9IGtleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4O1xuICAgICAgaWYgKHByZWRpY2F0ZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaikpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBhcnJheSBvciBvYmplY3QgY29udGFpbnMgYSBnaXZlbiBpdGVtICh1c2luZyBgPT09YCkuXG4gIC8vIEFsaWFzZWQgYXMgYGluY2x1ZGVzYCBhbmQgYGluY2x1ZGVgLlxuICBfLmNvbnRhaW5zID0gXy5pbmNsdWRlcyA9IF8uaW5jbHVkZSA9IGZ1bmN0aW9uKG9iaiwgaXRlbSwgZnJvbUluZGV4LCBndWFyZCkge1xuICAgIGlmICghaXNBcnJheUxpa2Uob2JqKSkgb2JqID0gXy52YWx1ZXMob2JqKTtcbiAgICBpZiAodHlwZW9mIGZyb21JbmRleCAhPSAnbnVtYmVyJyB8fCBndWFyZCkgZnJvbUluZGV4ID0gMDtcbiAgICByZXR1cm4gXy5pbmRleE9mKG9iaiwgaXRlbSwgZnJvbUluZGV4KSA+PSAwO1xuICB9O1xuXG4gIC8vIEludm9rZSBhIG1ldGhvZCAod2l0aCBhcmd1bWVudHMpIG9uIGV2ZXJ5IGl0ZW0gaW4gYSBjb2xsZWN0aW9uLlxuICBfLmludm9rZSA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24ob2JqLCBwYXRoLCBhcmdzKSB7XG4gICAgdmFyIGNvbnRleHRQYXRoLCBmdW5jO1xuICAgIGlmIChfLmlzRnVuY3Rpb24ocGF0aCkpIHtcbiAgICAgIGZ1bmMgPSBwYXRoO1xuICAgIH0gZWxzZSBpZiAoXy5pc0FycmF5KHBhdGgpKSB7XG4gICAgICBjb250ZXh0UGF0aCA9IHBhdGguc2xpY2UoMCwgLTEpO1xuICAgICAgcGF0aCA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgcmV0dXJuIF8ubWFwKG9iaiwgZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgdmFyIG1ldGhvZCA9IGZ1bmM7XG4gICAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgICBpZiAoY29udGV4dFBhdGggJiYgY29udGV4dFBhdGgubGVuZ3RoKSB7XG4gICAgICAgICAgY29udGV4dCA9IGRlZXBHZXQoY29udGV4dCwgY29udGV4dFBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZXh0ID09IG51bGwpIHJldHVybiB2b2lkIDA7XG4gICAgICAgIG1ldGhvZCA9IGNvbnRleHRbcGF0aF07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWV0aG9kID09IG51bGwgPyBtZXRob2QgOiBtZXRob2QuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYG1hcGA6IGZldGNoaW5nIGEgcHJvcGVydHkuXG4gIF8ucGx1Y2sgPSBmdW5jdGlvbihvYmosIGtleSkge1xuICAgIHJldHVybiBfLm1hcChvYmosIF8ucHJvcGVydHkoa2V5KSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgZmlsdGVyYDogc2VsZWN0aW5nIG9ubHkgb2JqZWN0c1xuICAvLyBjb250YWluaW5nIHNwZWNpZmljIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLndoZXJlID0gZnVuY3Rpb24ob2JqLCBhdHRycykge1xuICAgIHJldHVybiBfLmZpbHRlcihvYmosIF8ubWF0Y2hlcihhdHRycykpO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYGZpbmRgOiBnZXR0aW5nIHRoZSBmaXJzdCBvYmplY3RcbiAgLy8gY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy5maW5kV2hlcmUgPSBmdW5jdGlvbihvYmosIGF0dHJzKSB7XG4gICAgcmV0dXJuIF8uZmluZChvYmosIF8ubWF0Y2hlcihhdHRycykpO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbWF4aW11bSBlbGVtZW50IChvciBlbGVtZW50LWJhc2VkIGNvbXB1dGF0aW9uKS5cbiAgXy5tYXggPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdCA9IC1JbmZpbml0eSwgbGFzdENvbXB1dGVkID0gLUluZmluaXR5LFxuICAgICAgICB2YWx1ZSwgY29tcHV0ZWQ7XG4gICAgaWYgKGl0ZXJhdGVlID09IG51bGwgfHwgdHlwZW9mIGl0ZXJhdGVlID09ICdudW1iZXInICYmIHR5cGVvZiBvYmpbMF0gIT0gJ29iamVjdCcgJiYgb2JqICE9IG51bGwpIHtcbiAgICAgIG9iaiA9IGlzQXJyYXlMaWtlKG9iaikgPyBvYmogOiBfLnZhbHVlcyhvYmopO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IG9ialtpXTtcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgPiByZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHYsIGluZGV4LCBsaXN0KSB7XG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUodiwgaW5kZXgsIGxpc3QpO1xuICAgICAgICBpZiAoY29tcHV0ZWQgPiBsYXN0Q29tcHV0ZWQgfHwgY29tcHV0ZWQgPT09IC1JbmZpbml0eSAmJiByZXN1bHQgPT09IC1JbmZpbml0eSkge1xuICAgICAgICAgIHJlc3VsdCA9IHY7XG4gICAgICAgICAgbGFzdENvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbWluaW11bSBlbGVtZW50IChvciBlbGVtZW50LWJhc2VkIGNvbXB1dGF0aW9uKS5cbiAgXy5taW4gPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdCA9IEluZmluaXR5LCBsYXN0Q29tcHV0ZWQgPSBJbmZpbml0eSxcbiAgICAgICAgdmFsdWUsIGNvbXB1dGVkO1xuICAgIGlmIChpdGVyYXRlZSA9PSBudWxsIHx8IHR5cGVvZiBpdGVyYXRlZSA9PSAnbnVtYmVyJyAmJiB0eXBlb2Ygb2JqWzBdICE9ICdvYmplY3QnICYmIG9iaiAhPSBudWxsKSB7XG4gICAgICBvYmogPSBpc0FycmF5TGlrZShvYmopID8gb2JqIDogXy52YWx1ZXMob2JqKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSBvYmpbaV07XG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlIDwgcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2LCBpbmRleCwgbGlzdCkge1xuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlKHYsIGluZGV4LCBsaXN0KTtcbiAgICAgICAgaWYgKGNvbXB1dGVkIDwgbGFzdENvbXB1dGVkIHx8IGNvbXB1dGVkID09PSBJbmZpbml0eSAmJiByZXN1bHQgPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdjtcbiAgICAgICAgICBsYXN0Q29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gU2h1ZmZsZSBhIGNvbGxlY3Rpb24uXG4gIF8uc2h1ZmZsZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBfLnNhbXBsZShvYmosIEluZmluaXR5KTtcbiAgfTtcblxuICAvLyBTYW1wbGUgKipuKiogcmFuZG9tIHZhbHVlcyBmcm9tIGEgY29sbGVjdGlvbiB1c2luZyB0aGUgbW9kZXJuIHZlcnNpb24gb2YgdGhlXG4gIC8vIFtGaXNoZXItWWF0ZXMgc2h1ZmZsZV0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GaXNoZXLigJNZYXRlc19zaHVmZmxlKS5cbiAgLy8gSWYgKipuKiogaXMgbm90IHNwZWNpZmllZCwgcmV0dXJucyBhIHNpbmdsZSByYW5kb20gZWxlbWVudC5cbiAgLy8gVGhlIGludGVybmFsIGBndWFyZGAgYXJndW1lbnQgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgbWFwYC5cbiAgXy5zYW1wbGUgPSBmdW5jdGlvbihvYmosIG4sIGd1YXJkKSB7XG4gICAgaWYgKG4gPT0gbnVsbCB8fCBndWFyZCkge1xuICAgICAgaWYgKCFpc0FycmF5TGlrZShvYmopKSBvYmogPSBfLnZhbHVlcyhvYmopO1xuICAgICAgcmV0dXJuIG9ialtfLnJhbmRvbShvYmoubGVuZ3RoIC0gMSldO1xuICAgIH1cbiAgICB2YXIgc2FtcGxlID0gaXNBcnJheUxpa2Uob2JqKSA/IF8uY2xvbmUob2JqKSA6IF8udmFsdWVzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IGdldExlbmd0aChzYW1wbGUpO1xuICAgIG4gPSBNYXRoLm1heChNYXRoLm1pbihuLCBsZW5ndGgpLCAwKTtcbiAgICB2YXIgbGFzdCA9IGxlbmd0aCAtIDE7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG47IGluZGV4KyspIHtcbiAgICAgIHZhciByYW5kID0gXy5yYW5kb20oaW5kZXgsIGxhc3QpO1xuICAgICAgdmFyIHRlbXAgPSBzYW1wbGVbaW5kZXhdO1xuICAgICAgc2FtcGxlW2luZGV4XSA9IHNhbXBsZVtyYW5kXTtcbiAgICAgIHNhbXBsZVtyYW5kXSA9IHRlbXA7XG4gICAgfVxuICAgIHJldHVybiBzYW1wbGUuc2xpY2UoMCwgbik7XG4gIH07XG5cbiAgLy8gU29ydCB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uIHByb2R1Y2VkIGJ5IGFuIGl0ZXJhdGVlLlxuICBfLnNvcnRCeSA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHJldHVybiBfLnBsdWNrKF8ubWFwKG9iaiwgZnVuY3Rpb24odmFsdWUsIGtleSwgbGlzdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpbmRleDogaW5kZXgrKyxcbiAgICAgICAgY3JpdGVyaWE6IGl0ZXJhdGVlKHZhbHVlLCBrZXksIGxpc3QpXG4gICAgICB9O1xuICAgIH0pLnNvcnQoZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICAgIHZhciBhID0gbGVmdC5jcml0ZXJpYTtcbiAgICAgIHZhciBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgICBpZiAoYSAhPT0gYikge1xuICAgICAgICBpZiAoYSA+IGIgfHwgYSA9PT0gdm9pZCAwKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKGEgPCBiIHx8IGIgPT09IHZvaWQgMCkgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxlZnQuaW5kZXggLSByaWdodC5pbmRleDtcbiAgICB9KSwgJ3ZhbHVlJyk7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gdXNlZCBmb3IgYWdncmVnYXRlIFwiZ3JvdXAgYnlcIiBvcGVyYXRpb25zLlxuICB2YXIgZ3JvdXAgPSBmdW5jdGlvbihiZWhhdmlvciwgcGFydGl0aW9uKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICAgIHZhciByZXN1bHQgPSBwYXJ0aXRpb24gPyBbW10sIFtdXSA6IHt9O1xuICAgICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGtleSA9IGl0ZXJhdGVlKHZhbHVlLCBpbmRleCwgb2JqKTtcbiAgICAgICAgYmVoYXZpb3IocmVzdWx0LCB2YWx1ZSwga2V5KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEdyb3VwcyB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uLiBQYXNzIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGVcbiAgLy8gdG8gZ3JvdXAgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBjcml0ZXJpb24uXG4gIF8uZ3JvdXBCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICAgIGlmIChoYXMocmVzdWx0LCBrZXkpKSByZXN1bHRba2V5XS5wdXNoKHZhbHVlKTsgZWxzZSByZXN1bHRba2V5XSA9IFt2YWx1ZV07XG4gIH0pO1xuXG4gIC8vIEluZGV4ZXMgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbiwgc2ltaWxhciB0byBgZ3JvdXBCeWAsIGJ1dCBmb3JcbiAgLy8gd2hlbiB5b3Uga25vdyB0aGF0IHlvdXIgaW5kZXggdmFsdWVzIHdpbGwgYmUgdW5pcXVlLlxuICBfLmluZGV4QnkgPSBncm91cChmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICB9KTtcblxuICAvLyBDb3VudHMgaW5zdGFuY2VzIG9mIGFuIG9iamVjdCB0aGF0IGdyb3VwIGJ5IGEgY2VydGFpbiBjcml0ZXJpb24uIFBhc3NcbiAgLy8gZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZSB0byBjb3VudCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4gIC8vIGNyaXRlcmlvbi5cbiAgXy5jb3VudEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gICAgaWYgKGhhcyhyZXN1bHQsIGtleSkpIHJlc3VsdFtrZXldKys7IGVsc2UgcmVzdWx0W2tleV0gPSAxO1xuICB9KTtcblxuICB2YXIgcmVTdHJTeW1ib2wgPSAvW15cXHVkODAwLVxcdWRmZmZdfFtcXHVkODAwLVxcdWRiZmZdW1xcdWRjMDAtXFx1ZGZmZl18W1xcdWQ4MDAtXFx1ZGZmZl0vZztcbiAgLy8gU2FmZWx5IGNyZWF0ZSBhIHJlYWwsIGxpdmUgYXJyYXkgZnJvbSBhbnl0aGluZyBpdGVyYWJsZS5cbiAgXy50b0FycmF5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFvYmopIHJldHVybiBbXTtcbiAgICBpZiAoXy5pc0FycmF5KG9iaikpIHJldHVybiBzbGljZS5jYWxsKG9iaik7XG4gICAgaWYgKF8uaXNTdHJpbmcob2JqKSkge1xuICAgICAgLy8gS2VlcCBzdXJyb2dhdGUgcGFpciBjaGFyYWN0ZXJzIHRvZ2V0aGVyXG4gICAgICByZXR1cm4gb2JqLm1hdGNoKHJlU3RyU3ltYm9sKTtcbiAgICB9XG4gICAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHJldHVybiBfLm1hcChvYmosIF8uaWRlbnRpdHkpO1xuICAgIHJldHVybiBfLnZhbHVlcyhvYmopO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIGFuIG9iamVjdC5cbiAgXy5zaXplID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gMDtcbiAgICByZXR1cm4gaXNBcnJheUxpa2Uob2JqKSA/IG9iai5sZW5ndGggOiBfLmtleXMob2JqKS5sZW5ndGg7XG4gIH07XG5cbiAgLy8gU3BsaXQgYSBjb2xsZWN0aW9uIGludG8gdHdvIGFycmF5czogb25lIHdob3NlIGVsZW1lbnRzIGFsbCBzYXRpc2Z5IHRoZSBnaXZlblxuICAvLyBwcmVkaWNhdGUsIGFuZCBvbmUgd2hvc2UgZWxlbWVudHMgYWxsIGRvIG5vdCBzYXRpc2Z5IHRoZSBwcmVkaWNhdGUuXG4gIF8ucGFydGl0aW9uID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwgcGFzcykge1xuICAgIHJlc3VsdFtwYXNzID8gMCA6IDFdLnB1c2godmFsdWUpO1xuICB9LCB0cnVlKTtcblxuICAvLyBBcnJheSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gR2V0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGFuIGFycmF5LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBOXG4gIC8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuIEFsaWFzZWQgYXMgYGhlYWRgIGFuZCBgdGFrZWAuIFRoZSAqKmd1YXJkKiogY2hlY2tcbiAgLy8gYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgXy5tYXBgLlxuICBfLmZpcnN0ID0gXy5oZWFkID0gXy50YWtlID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwgfHwgYXJyYXkubGVuZ3RoIDwgMSkgcmV0dXJuIG4gPT0gbnVsbCA/IHZvaWQgMCA6IFtdO1xuICAgIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHJldHVybiBhcnJheVswXTtcbiAgICByZXR1cm4gXy5pbml0aWFsKGFycmF5LCBhcnJheS5sZW5ndGggLSBuKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBsYXN0IGVudHJ5IG9mIHRoZSBhcnJheS4gRXNwZWNpYWxseSB1c2VmdWwgb25cbiAgLy8gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gYWxsIHRoZSB2YWx1ZXMgaW5cbiAgLy8gdGhlIGFycmF5LCBleGNsdWRpbmcgdGhlIGxhc3QgTi5cbiAgXy5pbml0aWFsID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIDAsIE1hdGgubWF4KDAsIGFycmF5Lmxlbmd0aCAtIChuID09IG51bGwgfHwgZ3VhcmQgPyAxIDogbikpKTtcbiAgfTtcblxuICAvLyBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgbGFzdCBOXG4gIC8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuXG4gIF8ubGFzdCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsIHx8IGFycmF5Lmxlbmd0aCA8IDEpIHJldHVybiBuID09IG51bGwgPyB2b2lkIDAgOiBbXTtcbiAgICBpZiAobiA9PSBudWxsIHx8IGd1YXJkKSByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIF8ucmVzdChhcnJheSwgTWF0aC5tYXgoMCwgYXJyYXkubGVuZ3RoIC0gbikpO1xuICB9O1xuXG4gIC8vIFJldHVybnMgZXZlcnl0aGluZyBidXQgdGhlIGZpcnN0IGVudHJ5IG9mIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgdGFpbGAgYW5kIGBkcm9wYC5cbiAgLy8gRXNwZWNpYWxseSB1c2VmdWwgb24gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgYW4gKipuKiogd2lsbCByZXR1cm5cbiAgLy8gdGhlIHJlc3QgTiB2YWx1ZXMgaW4gdGhlIGFycmF5LlxuICBfLnJlc3QgPSBfLnRhaWwgPSBfLmRyb3AgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgbiA9PSBudWxsIHx8IGd1YXJkID8gMSA6IG4pO1xuICB9O1xuXG4gIC8vIFRyaW0gb3V0IGFsbCBmYWxzeSB2YWx1ZXMgZnJvbSBhbiBhcnJheS5cbiAgXy5jb21wYWN0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIoYXJyYXksIEJvb2xlYW4pO1xuICB9O1xuXG4gIC8vIEludGVybmFsIGltcGxlbWVudGF0aW9uIG9mIGEgcmVjdXJzaXZlIGBmbGF0dGVuYCBmdW5jdGlvbi5cbiAgdmFyIGZsYXR0ZW4gPSBmdW5jdGlvbihpbnB1dCwgc2hhbGxvdywgc3RyaWN0LCBvdXRwdXQpIHtcbiAgICBvdXRwdXQgPSBvdXRwdXQgfHwgW107XG4gICAgdmFyIGlkeCA9IG91dHB1dC5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChpbnB1dCk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHZhbHVlID0gaW5wdXRbaV07XG4gICAgICBpZiAoaXNBcnJheUxpa2UodmFsdWUpICYmIChfLmlzQXJyYXkodmFsdWUpIHx8IF8uaXNBcmd1bWVudHModmFsdWUpKSkge1xuICAgICAgICAvLyBGbGF0dGVuIGN1cnJlbnQgbGV2ZWwgb2YgYXJyYXkgb3IgYXJndW1lbnRzIG9iamVjdC5cbiAgICAgICAgaWYgKHNoYWxsb3cpIHtcbiAgICAgICAgICB2YXIgaiA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICB3aGlsZSAoaiA8IGxlbikgb3V0cHV0W2lkeCsrXSA9IHZhbHVlW2orK107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmxhdHRlbih2YWx1ZSwgc2hhbGxvdywgc3RyaWN0LCBvdXRwdXQpO1xuICAgICAgICAgIGlkeCA9IG91dHB1dC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCkge1xuICAgICAgICBvdXRwdXRbaWR4KytdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbiAgLy8gRmxhdHRlbiBvdXQgYW4gYXJyYXksIGVpdGhlciByZWN1cnNpdmVseSAoYnkgZGVmYXVsdCksIG9yIGp1c3Qgb25lIGxldmVsLlxuICBfLmZsYXR0ZW4gPSBmdW5jdGlvbihhcnJheSwgc2hhbGxvdykge1xuICAgIHJldHVybiBmbGF0dGVuKGFycmF5LCBzaGFsbG93LCBmYWxzZSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgdmVyc2lvbiBvZiB0aGUgYXJyYXkgdGhhdCBkb2VzIG5vdCBjb250YWluIHRoZSBzcGVjaWZpZWQgdmFsdWUocykuXG4gIF8ud2l0aG91dCA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oYXJyYXksIG90aGVyQXJyYXlzKSB7XG4gICAgcmV0dXJuIF8uZGlmZmVyZW5jZShhcnJheSwgb3RoZXJBcnJheXMpO1xuICB9KTtcblxuICAvLyBQcm9kdWNlIGEgZHVwbGljYXRlLWZyZWUgdmVyc2lvbiBvZiB0aGUgYXJyYXkuIElmIHRoZSBhcnJheSBoYXMgYWxyZWFkeVxuICAvLyBiZWVuIHNvcnRlZCwgeW91IGhhdmUgdGhlIG9wdGlvbiBvZiB1c2luZyBhIGZhc3RlciBhbGdvcml0aG0uXG4gIC8vIFRoZSBmYXN0ZXIgYWxnb3JpdGhtIHdpbGwgbm90IHdvcmsgd2l0aCBhbiBpdGVyYXRlZSBpZiB0aGUgaXRlcmF0ZWVcbiAgLy8gaXMgbm90IGEgb25lLXRvLW9uZSBmdW5jdGlvbiwgc28gcHJvdmlkaW5nIGFuIGl0ZXJhdGVlIHdpbGwgZGlzYWJsZVxuICAvLyB0aGUgZmFzdGVyIGFsZ29yaXRobS5cbiAgLy8gQWxpYXNlZCBhcyBgdW5pcXVlYC5cbiAgXy51bmlxID0gXy51bmlxdWUgPSBmdW5jdGlvbihhcnJheSwgaXNTb3J0ZWQsIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaWYgKCFfLmlzQm9vbGVhbihpc1NvcnRlZCkpIHtcbiAgICAgIGNvbnRleHQgPSBpdGVyYXRlZTtcbiAgICAgIGl0ZXJhdGVlID0gaXNTb3J0ZWQ7XG4gICAgICBpc1NvcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXRlcmF0ZWUgIT0gbnVsbCkgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBzZWVuID0gW107XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHZhbHVlID0gYXJyYXlbaV0sXG4gICAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlLCBpLCBhcnJheSkgOiB2YWx1ZTtcbiAgICAgIGlmIChpc1NvcnRlZCAmJiAhaXRlcmF0ZWUpIHtcbiAgICAgICAgaWYgKCFpIHx8IHNlZW4gIT09IGNvbXB1dGVkKSByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICAgIHNlZW4gPSBjb21wdXRlZDtcbiAgICAgIH0gZWxzZSBpZiAoaXRlcmF0ZWUpIHtcbiAgICAgICAgaWYgKCFfLmNvbnRhaW5zKHNlZW4sIGNvbXB1dGVkKSkge1xuICAgICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFfLmNvbnRhaW5zKHJlc3VsdCwgdmFsdWUpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIHVuaW9uOiBlYWNoIGRpc3RpbmN0IGVsZW1lbnQgZnJvbSBhbGwgb2ZcbiAgLy8gdGhlIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8udW5pb24gPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGFycmF5cykge1xuICAgIHJldHVybiBfLnVuaXEoZmxhdHRlbihhcnJheXMsIHRydWUsIHRydWUpKTtcbiAgfSk7XG5cbiAgLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGV2ZXJ5IGl0ZW0gc2hhcmVkIGJldHdlZW4gYWxsIHRoZVxuICAvLyBwYXNzZWQtaW4gYXJyYXlzLlxuICBfLmludGVyc2VjdGlvbiA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBhcmdzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IGFycmF5W2ldO1xuICAgICAgaWYgKF8uY29udGFpbnMocmVzdWx0LCBpdGVtKSkgY29udGludWU7XG4gICAgICB2YXIgajtcbiAgICAgIGZvciAoaiA9IDE7IGogPCBhcmdzTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKCFfLmNvbnRhaW5zKGFyZ3VtZW50c1tqXSwgaXRlbSkpIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKGogPT09IGFyZ3NMZW5ndGgpIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFRha2UgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBvbmUgYXJyYXkgYW5kIGEgbnVtYmVyIG9mIG90aGVyIGFycmF5cy5cbiAgLy8gT25seSB0aGUgZWxlbWVudHMgcHJlc2VudCBpbiBqdXN0IHRoZSBmaXJzdCBhcnJheSB3aWxsIHJlbWFpbi5cbiAgXy5kaWZmZXJlbmNlID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihhcnJheSwgcmVzdCkge1xuICAgIHJlc3QgPSBmbGF0dGVuKHJlc3QsIHRydWUsIHRydWUpO1xuICAgIHJldHVybiBfLmZpbHRlcihhcnJheSwgZnVuY3Rpb24odmFsdWUpe1xuICAgICAgcmV0dXJuICFfLmNvbnRhaW5zKHJlc3QsIHZhbHVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gQ29tcGxlbWVudCBvZiBfLnppcC4gVW56aXAgYWNjZXB0cyBhbiBhcnJheSBvZiBhcnJheXMgYW5kIGdyb3Vwc1xuICAvLyBlYWNoIGFycmF5J3MgZWxlbWVudHMgb24gc2hhcmVkIGluZGljZXMuXG4gIF8udW56aXAgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciBsZW5ndGggPSBhcnJheSAmJiBfLm1heChhcnJheSwgZ2V0TGVuZ3RoKS5sZW5ndGggfHwgMDtcbiAgICB2YXIgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHJlc3VsdFtpbmRleF0gPSBfLnBsdWNrKGFycmF5LCBpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gWmlwIHRvZ2V0aGVyIG11bHRpcGxlIGxpc3RzIGludG8gYSBzaW5nbGUgYXJyYXkgLS0gZWxlbWVudHMgdGhhdCBzaGFyZVxuICAvLyBhbiBpbmRleCBnbyB0b2dldGhlci5cbiAgXy56aXAgPSByZXN0QXJndW1lbnRzKF8udW56aXApO1xuXG4gIC8vIENvbnZlcnRzIGxpc3RzIGludG8gb2JqZWN0cy4gUGFzcyBlaXRoZXIgYSBzaW5nbGUgYXJyYXkgb2YgYFtrZXksIHZhbHVlXWBcbiAgLy8gcGFpcnMsIG9yIHR3byBwYXJhbGxlbCBhcnJheXMgb2YgdGhlIHNhbWUgbGVuZ3RoIC0tIG9uZSBvZiBrZXlzLCBhbmQgb25lIG9mXG4gIC8vIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlcy4gUGFzc2luZyBieSBwYWlycyBpcyB0aGUgcmV2ZXJzZSBvZiBfLnBhaXJzLlxuICBfLm9iamVjdCA9IGZ1bmN0aW9uKGxpc3QsIHZhbHVlcykge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGxpc3QpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgcmVzdWx0W2xpc3RbaV1dID0gdmFsdWVzW2ldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2xpc3RbaV1bMF1dID0gbGlzdFtpXVsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBHZW5lcmF0b3IgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBmaW5kSW5kZXggYW5kIGZpbmRMYXN0SW5kZXggZnVuY3Rpb25zLlxuICB2YXIgY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIgPSBmdW5jdGlvbihkaXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oYXJyYXksIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICAgIHZhciBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpO1xuICAgICAgdmFyIGluZGV4ID0gZGlyID4gMCA/IDAgOiBsZW5ndGggLSAxO1xuICAgICAgZm9yICg7IGluZGV4ID49IDAgJiYgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IGRpcikge1xuICAgICAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3QgaW5kZXggb24gYW4gYXJyYXktbGlrZSB0aGF0IHBhc3NlcyBhIHByZWRpY2F0ZSB0ZXN0LlxuICBfLmZpbmRJbmRleCA9IGNyZWF0ZVByZWRpY2F0ZUluZGV4RmluZGVyKDEpO1xuICBfLmZpbmRMYXN0SW5kZXggPSBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlcigtMSk7XG5cbiAgLy8gVXNlIGEgY29tcGFyYXRvciBmdW5jdGlvbiB0byBmaWd1cmUgb3V0IHRoZSBzbWFsbGVzdCBpbmRleCBhdCB3aGljaFxuICAvLyBhbiBvYmplY3Qgc2hvdWxkIGJlIGluc2VydGVkIHNvIGFzIHRvIG1haW50YWluIG9yZGVyLiBVc2VzIGJpbmFyeSBzZWFyY2guXG4gIF8uc29ydGVkSW5kZXggPSBmdW5jdGlvbihhcnJheSwgb2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQsIDEpO1xuICAgIHZhciB2YWx1ZSA9IGl0ZXJhdGVlKG9iaik7XG4gICAgdmFyIGxvdyA9IDAsIGhpZ2ggPSBnZXRMZW5ndGgoYXJyYXkpO1xuICAgIHdoaWxlIChsb3cgPCBoaWdoKSB7XG4gICAgICB2YXIgbWlkID0gTWF0aC5mbG9vcigobG93ICsgaGlnaCkgLyAyKTtcbiAgICAgIGlmIChpdGVyYXRlZShhcnJheVttaWRdKSA8IHZhbHVlKSBsb3cgPSBtaWQgKyAxOyBlbHNlIGhpZ2ggPSBtaWQ7XG4gICAgfVxuICAgIHJldHVybiBsb3c7XG4gIH07XG5cbiAgLy8gR2VuZXJhdG9yIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgaW5kZXhPZiBhbmQgbGFzdEluZGV4T2YgZnVuY3Rpb25zLlxuICB2YXIgY3JlYXRlSW5kZXhGaW5kZXIgPSBmdW5jdGlvbihkaXIsIHByZWRpY2F0ZUZpbmQsIHNvcnRlZEluZGV4KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBpZHgpIHtcbiAgICAgIHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICAgIGlmICh0eXBlb2YgaWR4ID09ICdudW1iZXInKSB7XG4gICAgICAgIGlmIChkaXIgPiAwKSB7XG4gICAgICAgICAgaSA9IGlkeCA+PSAwID8gaWR4IDogTWF0aC5tYXgoaWR4ICsgbGVuZ3RoLCBpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZW5ndGggPSBpZHggPj0gMCA/IE1hdGgubWluKGlkeCArIDEsIGxlbmd0aCkgOiBpZHggKyBsZW5ndGggKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNvcnRlZEluZGV4ICYmIGlkeCAmJiBsZW5ndGgpIHtcbiAgICAgICAgaWR4ID0gc29ydGVkSW5kZXgoYXJyYXksIGl0ZW0pO1xuICAgICAgICByZXR1cm4gYXJyYXlbaWR4XSA9PT0gaXRlbSA/IGlkeCA6IC0xO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0gIT09IGl0ZW0pIHtcbiAgICAgICAgaWR4ID0gcHJlZGljYXRlRmluZChzbGljZS5jYWxsKGFycmF5LCBpLCBsZW5ndGgpLCBfLmlzTmFOKTtcbiAgICAgICAgcmV0dXJuIGlkeCA+PSAwID8gaWR4ICsgaSA6IC0xO1xuICAgICAgfVxuICAgICAgZm9yIChpZHggPSBkaXIgPiAwID8gaSA6IGxlbmd0aCAtIDE7IGlkeCA+PSAwICYmIGlkeCA8IGxlbmd0aDsgaWR4ICs9IGRpcikge1xuICAgICAgICBpZiAoYXJyYXlbaWR4XSA9PT0gaXRlbSkgcmV0dXJuIGlkeDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYW4gaXRlbSBpbiBhbiBhcnJheSxcbiAgLy8gb3IgLTEgaWYgdGhlIGl0ZW0gaXMgbm90IGluY2x1ZGVkIGluIHRoZSBhcnJheS5cbiAgLy8gSWYgdGhlIGFycmF5IGlzIGxhcmdlIGFuZCBhbHJlYWR5IGluIHNvcnQgb3JkZXIsIHBhc3MgYHRydWVgXG4gIC8vIGZvciAqKmlzU29ydGVkKiogdG8gdXNlIGJpbmFyeSBzZWFyY2guXG4gIF8uaW5kZXhPZiA9IGNyZWF0ZUluZGV4RmluZGVyKDEsIF8uZmluZEluZGV4LCBfLnNvcnRlZEluZGV4KTtcbiAgXy5sYXN0SW5kZXhPZiA9IGNyZWF0ZUluZGV4RmluZGVyKC0xLCBfLmZpbmRMYXN0SW5kZXgpO1xuXG4gIC8vIEdlbmVyYXRlIGFuIGludGVnZXIgQXJyYXkgY29udGFpbmluZyBhbiBhcml0aG1ldGljIHByb2dyZXNzaW9uLiBBIHBvcnQgb2ZcbiAgLy8gdGhlIG5hdGl2ZSBQeXRob24gYHJhbmdlKClgIGZ1bmN0aW9uLiBTZWVcbiAgLy8gW3RoZSBQeXRob24gZG9jdW1lbnRhdGlvbl0oaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L2Z1bmN0aW9ucy5odG1sI3JhbmdlKS5cbiAgXy5yYW5nZSA9IGZ1bmN0aW9uKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgaWYgKHN0b3AgPT0gbnVsbCkge1xuICAgICAgc3RvcCA9IHN0YXJ0IHx8IDA7XG4gICAgICBzdGFydCA9IDA7XG4gICAgfVxuICAgIGlmICghc3RlcCkge1xuICAgICAgc3RlcCA9IHN0b3AgPCBzdGFydCA/IC0xIDogMTtcbiAgICB9XG5cbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoTWF0aC5jZWlsKChzdG9wIC0gc3RhcnQpIC8gc3RlcCksIDApO1xuICAgIHZhciByYW5nZSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBsZW5ndGg7IGlkeCsrLCBzdGFydCArPSBzdGVwKSB7XG4gICAgICByYW5nZVtpZHhdID0gc3RhcnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmdlO1xuICB9O1xuXG4gIC8vIENodW5rIGEgc2luZ2xlIGFycmF5IGludG8gbXVsdGlwbGUgYXJyYXlzLCBlYWNoIGNvbnRhaW5pbmcgYGNvdW50YCBvciBmZXdlclxuICAvLyBpdGVtcy5cbiAgXy5jaHVuayA9IGZ1bmN0aW9uKGFycmF5LCBjb3VudCkge1xuICAgIGlmIChjb3VudCA9PSBudWxsIHx8IGNvdW50IDwgMSkgcmV0dXJuIFtdO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgICAgcmVzdWx0LnB1c2goc2xpY2UuY2FsbChhcnJheSwgaSwgaSArPSBjb3VudCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIChhaGVtKSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGV4ZWN1dGUgYSBmdW5jdGlvbiBhcyBhIGNvbnN0cnVjdG9yXG4gIC8vIG9yIGEgbm9ybWFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3ZpZGVkIGFyZ3VtZW50cy5cbiAgdmFyIGV4ZWN1dGVCb3VuZCA9IGZ1bmN0aW9uKHNvdXJjZUZ1bmMsIGJvdW5kRnVuYywgY29udGV4dCwgY2FsbGluZ0NvbnRleHQsIGFyZ3MpIHtcbiAgICBpZiAoIShjYWxsaW5nQ29udGV4dCBpbnN0YW5jZW9mIGJvdW5kRnVuYykpIHJldHVybiBzb3VyY2VGdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIHZhciBzZWxmID0gYmFzZUNyZWF0ZShzb3VyY2VGdW5jLnByb3RvdHlwZSk7XG4gICAgdmFyIHJlc3VsdCA9IHNvdXJjZUZ1bmMuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgaWYgKF8uaXNPYmplY3QocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSBmdW5jdGlvbiBib3VuZCB0byBhIGdpdmVuIG9iamVjdCAoYXNzaWduaW5nIGB0aGlzYCwgYW5kIGFyZ3VtZW50cyxcbiAgLy8gb3B0aW9uYWxseSkuIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBGdW5jdGlvbi5iaW5kYCBpZlxuICAvLyBhdmFpbGFibGUuXG4gIF8uYmluZCA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oZnVuYywgY29udGV4dCwgYXJncykge1xuICAgIGlmICghXy5pc0Z1bmN0aW9uKGZ1bmMpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdCaW5kIG11c3QgYmUgY2FsbGVkIG9uIGEgZnVuY3Rpb24nKTtcbiAgICB2YXIgYm91bmQgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGNhbGxBcmdzKSB7XG4gICAgICByZXR1cm4gZXhlY3V0ZUJvdW5kKGZ1bmMsIGJvdW5kLCBjb250ZXh0LCB0aGlzLCBhcmdzLmNvbmNhdChjYWxsQXJncykpO1xuICAgIH0pO1xuICAgIHJldHVybiBib3VuZDtcbiAgfSk7XG5cbiAgLy8gUGFydGlhbGx5IGFwcGx5IGEgZnVuY3Rpb24gYnkgY3JlYXRpbmcgYSB2ZXJzaW9uIHRoYXQgaGFzIGhhZCBzb21lIG9mIGl0c1xuICAvLyBhcmd1bWVudHMgcHJlLWZpbGxlZCwgd2l0aG91dCBjaGFuZ2luZyBpdHMgZHluYW1pYyBgdGhpc2AgY29udGV4dC4gXyBhY3RzXG4gIC8vIGFzIGEgcGxhY2Vob2xkZXIgYnkgZGVmYXVsdCwgYWxsb3dpbmcgYW55IGNvbWJpbmF0aW9uIG9mIGFyZ3VtZW50cyB0byBiZVxuICAvLyBwcmUtZmlsbGVkLiBTZXQgYF8ucGFydGlhbC5wbGFjZWhvbGRlcmAgZm9yIGEgY3VzdG9tIHBsYWNlaG9sZGVyIGFyZ3VtZW50LlxuICBfLnBhcnRpYWwgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGZ1bmMsIGJvdW5kQXJncykge1xuICAgIHZhciBwbGFjZWhvbGRlciA9IF8ucGFydGlhbC5wbGFjZWhvbGRlcjtcbiAgICB2YXIgYm91bmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IDAsIGxlbmd0aCA9IGJvdW5kQXJncy5sZW5ndGg7XG4gICAgICB2YXIgYXJncyA9IEFycmF5KGxlbmd0aCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFyZ3NbaV0gPSBib3VuZEFyZ3NbaV0gPT09IHBsYWNlaG9sZGVyID8gYXJndW1lbnRzW3Bvc2l0aW9uKytdIDogYm91bmRBcmdzW2ldO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHBvc2l0aW9uIDwgYXJndW1lbnRzLmxlbmd0aCkgYXJncy5wdXNoKGFyZ3VtZW50c1twb3NpdGlvbisrXSk7XG4gICAgICByZXR1cm4gZXhlY3V0ZUJvdW5kKGZ1bmMsIGJvdW5kLCB0aGlzLCB0aGlzLCBhcmdzKTtcbiAgICB9O1xuICAgIHJldHVybiBib3VuZDtcbiAgfSk7XG5cbiAgXy5wYXJ0aWFsLnBsYWNlaG9sZGVyID0gXztcblxuICAvLyBCaW5kIGEgbnVtYmVyIG9mIGFuIG9iamVjdCdzIG1ldGhvZHMgdG8gdGhhdCBvYmplY3QuIFJlbWFpbmluZyBhcmd1bWVudHNcbiAgLy8gYXJlIHRoZSBtZXRob2QgbmFtZXMgdG8gYmUgYm91bmQuIFVzZWZ1bCBmb3IgZW5zdXJpbmcgdGhhdCBhbGwgY2FsbGJhY2tzXG4gIC8vIGRlZmluZWQgb24gYW4gb2JqZWN0IGJlbG9uZyB0byBpdC5cbiAgXy5iaW5kQWxsID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgICBrZXlzID0gZmxhdHRlbihrZXlzLCBmYWxzZSwgZmFsc2UpO1xuICAgIHZhciBpbmRleCA9IGtleXMubGVuZ3RoO1xuICAgIGlmIChpbmRleCA8IDEpIHRocm93IG5ldyBFcnJvcignYmluZEFsbCBtdXN0IGJlIHBhc3NlZCBmdW5jdGlvbiBuYW1lcycpO1xuICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpbmRleF07XG4gICAgICBvYmpba2V5XSA9IF8uYmluZChvYmpba2V5XSwgb2JqKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIE1lbW9pemUgYW4gZXhwZW5zaXZlIGZ1bmN0aW9uIGJ5IHN0b3JpbmcgaXRzIHJlc3VsdHMuXG4gIF8ubWVtb2l6ZSA9IGZ1bmN0aW9uKGZ1bmMsIGhhc2hlcikge1xuICAgIHZhciBtZW1vaXplID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgY2FjaGUgPSBtZW1vaXplLmNhY2hlO1xuICAgICAgdmFyIGFkZHJlc3MgPSAnJyArIChoYXNoZXIgPyBoYXNoZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IGtleSk7XG4gICAgICBpZiAoIWhhcyhjYWNoZSwgYWRkcmVzcykpIGNhY2hlW2FkZHJlc3NdID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIGNhY2hlW2FkZHJlc3NdO1xuICAgIH07XG4gICAgbWVtb2l6ZS5jYWNoZSA9IHt9O1xuICAgIHJldHVybiBtZW1vaXplO1xuICB9O1xuXG4gIC8vIERlbGF5cyBhIGZ1bmN0aW9uIGZvciB0aGUgZ2l2ZW4gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgYW5kIHRoZW4gY2FsbHNcbiAgLy8gaXQgd2l0aCB0aGUgYXJndW1lbnRzIHN1cHBsaWVkLlxuICBfLmRlbGF5ID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihmdW5jLCB3YWl0LCBhcmdzKSB7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9LCB3YWl0KTtcbiAgfSk7XG5cbiAgLy8gRGVmZXJzIGEgZnVuY3Rpb24sIHNjaGVkdWxpbmcgaXQgdG8gcnVuIGFmdGVyIHRoZSBjdXJyZW50IGNhbGwgc3RhY2sgaGFzXG4gIC8vIGNsZWFyZWQuXG4gIF8uZGVmZXIgPSBfLnBhcnRpYWwoXy5kZWxheSwgXywgMSk7XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCB3aGVuIGludm9rZWQsIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgYXQgbW9zdCBvbmNlXG4gIC8vIGR1cmluZyBhIGdpdmVuIHdpbmRvdyBvZiB0aW1lLiBOb3JtYWxseSwgdGhlIHRocm90dGxlZCBmdW5jdGlvbiB3aWxsIHJ1blxuICAvLyBhcyBtdWNoIGFzIGl0IGNhbiwgd2l0aG91dCBldmVyIGdvaW5nIG1vcmUgdGhhbiBvbmNlIHBlciBgd2FpdGAgZHVyYXRpb247XG4gIC8vIGJ1dCBpZiB5b3UnZCBsaWtlIHRvIGRpc2FibGUgdGhlIGV4ZWN1dGlvbiBvbiB0aGUgbGVhZGluZyBlZGdlLCBwYXNzXG4gIC8vIGB7bGVhZGluZzogZmFsc2V9YC4gVG8gZGlzYWJsZSBleGVjdXRpb24gb24gdGhlIHRyYWlsaW5nIGVkZ2UsIGRpdHRvLlxuICBfLnRocm90dGxlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICAgIHZhciB0aW1lb3V0LCBjb250ZXh0LCBhcmdzLCByZXN1bHQ7XG4gICAgdmFyIHByZXZpb3VzID0gMDtcbiAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcblxuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcHJldmlvdXMgPSBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlID8gMCA6IF8ubm93KCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9O1xuXG4gICAgdmFyIHRocm90dGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5vdyA9IF8ubm93KCk7XG4gICAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHByZXZpb3VzID0gbm93O1xuICAgICAgdmFyIHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgICAgY29udGV4dCA9IHRoaXM7XG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgaWYgKHJlbWFpbmluZyA8PSAwIHx8IHJlbWFpbmluZyA+IHdhaXQpIHtcbiAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHRocm90dGxlZC5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHByZXZpb3VzID0gMDtcbiAgICAgIHRpbWVvdXQgPSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfTtcblxuICAgIHJldHVybiB0aHJvdHRsZWQ7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuICAvLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4gIC8vIE4gbWlsbGlzZWNvbmRzLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRyaWdnZXIgdGhlIGZ1bmN0aW9uIG9uIHRoZVxuICAvLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuICBfLmRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gICAgdmFyIHRpbWVvdXQsIHJlc3VsdDtcblxuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKGNvbnRleHQsIGFyZ3MpIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKGFyZ3MpIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcblxuICAgIHZhciBkZWJvdW5jZWQgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgIGlmICh0aW1lb3V0KSBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICBpZiAoaW1tZWRpYXRlKSB7XG4gICAgICAgIHZhciBjYWxsTm93ID0gIXRpbWVvdXQ7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgICAgaWYgKGNhbGxOb3cpIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lb3V0ID0gXy5kZWxheShsYXRlciwgd2FpdCwgdGhpcywgYXJncyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG5cbiAgICBkZWJvdW5jZWQuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRlYm91bmNlZDtcbiAgfTtcblxuICAvLyBSZXR1cm5zIHRoZSBmaXJzdCBmdW5jdGlvbiBwYXNzZWQgYXMgYW4gYXJndW1lbnQgdG8gdGhlIHNlY29uZCxcbiAgLy8gYWxsb3dpbmcgeW91IHRvIGFkanVzdCBhcmd1bWVudHMsIHJ1biBjb2RlIGJlZm9yZSBhbmQgYWZ0ZXIsIGFuZFxuICAvLyBjb25kaXRpb25hbGx5IGV4ZWN1dGUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxuICBfLndyYXAgPSBmdW5jdGlvbihmdW5jLCB3cmFwcGVyKSB7XG4gICAgcmV0dXJuIF8ucGFydGlhbCh3cmFwcGVyLCBmdW5jKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgbmVnYXRlZCB2ZXJzaW9uIG9mIHRoZSBwYXNzZWQtaW4gcHJlZGljYXRlLlxuICBfLm5lZ2F0ZSA9IGZ1bmN0aW9uKHByZWRpY2F0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhcHJlZGljYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBpcyB0aGUgY29tcG9zaXRpb24gb2YgYSBsaXN0IG9mIGZ1bmN0aW9ucywgZWFjaFxuICAvLyBjb25zdW1pbmcgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gdGhhdCBmb2xsb3dzLlxuICBfLmNvbXBvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgc3RhcnQgPSBhcmdzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGkgPSBzdGFydDtcbiAgICAgIHZhciByZXN1bHQgPSBhcmdzW3N0YXJ0XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgd2hpbGUgKGktLSkgcmVzdWx0ID0gYXJnc1tpXS5jYWxsKHRoaXMsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIG9uIGFuZCBhZnRlciB0aGUgTnRoIGNhbGwuXG4gIF8uYWZ0ZXIgPSBmdW5jdGlvbih0aW1lcywgZnVuYykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgtLXRpbWVzIDwgMSkge1xuICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIHVwIHRvIChidXQgbm90IGluY2x1ZGluZykgdGhlIE50aCBjYWxsLlxuICBfLmJlZm9yZSA9IGZ1bmN0aW9uKHRpbWVzLCBmdW5jKSB7XG4gICAgdmFyIG1lbW87XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKC0tdGltZXMgPiAwKSB7XG4gICAgICAgIG1lbW8gPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICBpZiAodGltZXMgPD0gMSkgZnVuYyA9IG51bGw7XG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYXQgbW9zdCBvbmUgdGltZSwgbm8gbWF0dGVyIGhvd1xuICAvLyBvZnRlbiB5b3UgY2FsbCBpdC4gVXNlZnVsIGZvciBsYXp5IGluaXRpYWxpemF0aW9uLlxuICBfLm9uY2UgPSBfLnBhcnRpYWwoXy5iZWZvcmUsIDIpO1xuXG4gIF8ucmVzdEFyZ3VtZW50cyA9IHJlc3RBcmd1bWVudHM7XG5cbiAgLy8gT2JqZWN0IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gS2V5cyBpbiBJRSA8IDkgdGhhdCB3b24ndCBiZSBpdGVyYXRlZCBieSBgZm9yIGtleSBpbiAuLi5gIGFuZCB0aHVzIG1pc3NlZC5cbiAgdmFyIGhhc0VudW1CdWcgPSAhe3RvU3RyaW5nOiBudWxsfS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgndG9TdHJpbmcnKTtcbiAgdmFyIG5vbkVudW1lcmFibGVQcm9wcyA9IFsndmFsdWVPZicsICdpc1Byb3RvdHlwZU9mJywgJ3RvU3RyaW5nJyxcbiAgICAncHJvcGVydHlJc0VudW1lcmFibGUnLCAnaGFzT3duUHJvcGVydHknLCAndG9Mb2NhbGVTdHJpbmcnXTtcblxuICB2YXIgY29sbGVjdE5vbkVudW1Qcm9wcyA9IGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICAgIHZhciBub25FbnVtSWR4ID0gbm9uRW51bWVyYWJsZVByb3BzLmxlbmd0aDtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBvYmouY29uc3RydWN0b3I7XG4gICAgdmFyIHByb3RvID0gXy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yKSAmJiBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgfHwgT2JqUHJvdG87XG5cbiAgICAvLyBDb25zdHJ1Y3RvciBpcyBhIHNwZWNpYWwgY2FzZS5cbiAgICB2YXIgcHJvcCA9ICdjb25zdHJ1Y3Rvcic7XG4gICAgaWYgKGhhcyhvYmosIHByb3ApICYmICFfLmNvbnRhaW5zKGtleXMsIHByb3ApKSBrZXlzLnB1c2gocHJvcCk7XG5cbiAgICB3aGlsZSAobm9uRW51bUlkeC0tKSB7XG4gICAgICBwcm9wID0gbm9uRW51bWVyYWJsZVByb3BzW25vbkVudW1JZHhdO1xuICAgICAgaWYgKHByb3AgaW4gb2JqICYmIG9ialtwcm9wXSAhPT0gcHJvdG9bcHJvcF0gJiYgIV8uY29udGFpbnMoa2V5cywgcHJvcCkpIHtcbiAgICAgICAga2V5cy5wdXNoKHByb3ApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBSZXRyaWV2ZSB0aGUgbmFtZXMgb2YgYW4gb2JqZWN0J3Mgb3duIHByb3BlcnRpZXMuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBPYmplY3Qua2V5c2AuXG4gIF8ua2V5cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gW107XG4gICAgaWYgKG5hdGl2ZUtleXMpIHJldHVybiBuYXRpdmVLZXlzKG9iaik7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAoaGFzKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gICAgLy8gQWhlbSwgSUUgPCA5LlxuICAgIGlmIChoYXNFbnVtQnVnKSBjb2xsZWN0Tm9uRW51bVByb3BzKG9iaiwga2V5cyk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH07XG5cbiAgLy8gUmV0cmlldmUgYWxsIHRoZSBwcm9wZXJ0eSBuYW1lcyBvZiBhbiBvYmplY3QuXG4gIF8uYWxsS2V5cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gW107XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBrZXlzLnB1c2goa2V5KTtcbiAgICAvLyBBaGVtLCBJRSA8IDkuXG4gICAgaWYgKGhhc0VudW1CdWcpIGNvbGxlY3ROb25FbnVtUHJvcHMob2JqLCBrZXlzKTtcbiAgICByZXR1cm4ga2V5cztcbiAgfTtcblxuICAvLyBSZXRyaWV2ZSB0aGUgdmFsdWVzIG9mIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIF8udmFsdWVzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIHZhbHVlcyA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWVzW2ldID0gb2JqW2tleXNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xuXG4gIC8vIFJldHVybnMgdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGl0ZXJhdGVlIHRvIGVhY2ggZWxlbWVudCBvZiB0aGUgb2JqZWN0LlxuICAvLyBJbiBjb250cmFzdCB0byBfLm1hcCBpdCByZXR1cm5zIGFuIG9iamVjdC5cbiAgXy5tYXBPYmplY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKSxcbiAgICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGgsXG4gICAgICAgIHJlc3VsdHMgPSB7fTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY3VycmVudEtleSA9IGtleXNbaW5kZXhdO1xuICAgICAgcmVzdWx0c1tjdXJyZW50S2V5XSA9IGl0ZXJhdGVlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gQ29udmVydCBhbiBvYmplY3QgaW50byBhIGxpc3Qgb2YgYFtrZXksIHZhbHVlXWAgcGFpcnMuXG4gIC8vIFRoZSBvcHBvc2l0ZSBvZiBfLm9iamVjdC5cbiAgXy5wYWlycyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBwYWlycyA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcGFpcnNbaV0gPSBba2V5c1tpXSwgb2JqW2tleXNbaV1dXTtcbiAgICB9XG4gICAgcmV0dXJuIHBhaXJzO1xuICB9O1xuXG4gIC8vIEludmVydCB0aGUga2V5cyBhbmQgdmFsdWVzIG9mIGFuIG9iamVjdC4gVGhlIHZhbHVlcyBtdXN0IGJlIHNlcmlhbGl6YWJsZS5cbiAgXy5pbnZlcnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0W29ialtrZXlzW2ldXV0gPSBrZXlzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHNvcnRlZCBsaXN0IG9mIHRoZSBmdW5jdGlvbiBuYW1lcyBhdmFpbGFibGUgb24gdGhlIG9iamVjdC5cbiAgLy8gQWxpYXNlZCBhcyBgbWV0aG9kc2AuXG4gIF8uZnVuY3Rpb25zID0gXy5tZXRob2RzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIG5hbWVzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbihvYmpba2V5XSkpIG5hbWVzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVzLnNvcnQoKTtcbiAgfTtcblxuICAvLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYXNzaWduZXIgZnVuY3Rpb25zLlxuICB2YXIgY3JlYXRlQXNzaWduZXIgPSBmdW5jdGlvbihrZXlzRnVuYywgZGVmYXVsdHMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIGlmIChkZWZhdWx0cykgb2JqID0gT2JqZWN0KG9iaik7XG4gICAgICBpZiAobGVuZ3RoIDwgMiB8fCBvYmogPT0gbnVsbCkgcmV0dXJuIG9iajtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF0sXG4gICAgICAgICAgICBrZXlzID0ga2V5c0Z1bmMoc291cmNlKSxcbiAgICAgICAgICAgIGwgPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoIWRlZmF1bHRzIHx8IG9ialtrZXldID09PSB2b2lkIDApIG9ialtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcbiAgfTtcblxuICAvLyBFeHRlbmQgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIHByb3BlcnRpZXMgaW4gcGFzc2VkLWluIG9iamVjdChzKS5cbiAgXy5leHRlbmQgPSBjcmVhdGVBc3NpZ25lcihfLmFsbEtleXMpO1xuXG4gIC8vIEFzc2lnbnMgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIG93biBwcm9wZXJ0aWVzIGluIHRoZSBwYXNzZWQtaW4gb2JqZWN0KHMpLlxuICAvLyAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2Fzc2lnbilcbiAgXy5leHRlbmRPd24gPSBfLmFzc2lnbiA9IGNyZWF0ZUFzc2lnbmVyKF8ua2V5cyk7XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3Qga2V5IG9uIGFuIG9iamVjdCB0aGF0IHBhc3NlcyBhIHByZWRpY2F0ZSB0ZXN0LlxuICBfLmZpbmRLZXkgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKSwga2V5O1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKHByZWRpY2F0ZShvYmpba2V5XSwga2V5LCBvYmopKSByZXR1cm4ga2V5O1xuICAgIH1cbiAgfTtcblxuICAvLyBJbnRlcm5hbCBwaWNrIGhlbHBlciBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgYG9iamAgaGFzIGtleSBga2V5YC5cbiAgdmFyIGtleUluT2JqID0gZnVuY3Rpb24odmFsdWUsIGtleSwgb2JqKSB7XG4gICAgcmV0dXJuIGtleSBpbiBvYmo7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0IG9ubHkgY29udGFpbmluZyB0aGUgd2hpdGVsaXN0ZWQgcHJvcGVydGllcy5cbiAgXy5waWNrID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgICB2YXIgcmVzdWx0ID0ge30sIGl0ZXJhdGVlID0ga2V5c1swXTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihpdGVyYXRlZSkpIHtcbiAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIGl0ZXJhdGVlID0gb3B0aW1pemVDYihpdGVyYXRlZSwga2V5c1sxXSk7XG4gICAgICBrZXlzID0gXy5hbGxLZXlzKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZXJhdGVlID0ga2V5SW5PYmo7XG4gICAgICBrZXlzID0gZmxhdHRlbihrZXlzLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgb2JqID0gT2JqZWN0KG9iaik7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIHZhciB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgaWYgKGl0ZXJhdGVlKHZhbHVlLCBrZXksIG9iaikpIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xuXG4gIC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCB3aXRob3V0IHRoZSBibGFja2xpc3RlZCBwcm9wZXJ0aWVzLlxuICBfLm9taXQgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICAgIHZhciBpdGVyYXRlZSA9IGtleXNbMF0sIGNvbnRleHQ7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihpdGVyYXRlZSkpIHtcbiAgICAgIGl0ZXJhdGVlID0gXy5uZWdhdGUoaXRlcmF0ZWUpO1xuICAgICAgaWYgKGtleXMubGVuZ3RoID4gMSkgY29udGV4dCA9IGtleXNbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBfLm1hcChmbGF0dGVuKGtleXMsIGZhbHNlLCBmYWxzZSksIFN0cmluZyk7XG4gICAgICBpdGVyYXRlZSA9IGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuICFfLmNvbnRhaW5zKGtleXMsIGtleSk7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gXy5waWNrKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpO1xuICB9KTtcblxuICAvLyBGaWxsIGluIGEgZ2l2ZW4gb2JqZWN0IHdpdGggZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICBfLmRlZmF1bHRzID0gY3JlYXRlQXNzaWduZXIoXy5hbGxLZXlzLCB0cnVlKTtcblxuICAvLyBDcmVhdGVzIGFuIG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gdGhlIGdpdmVuIHByb3RvdHlwZSBvYmplY3QuXG4gIC8vIElmIGFkZGl0aW9uYWwgcHJvcGVydGllcyBhcmUgcHJvdmlkZWQgdGhlbiB0aGV5IHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4gIC8vIGNyZWF0ZWQgb2JqZWN0LlxuICBfLmNyZWF0ZSA9IGZ1bmN0aW9uKHByb3RvdHlwZSwgcHJvcHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUNyZWF0ZShwcm90b3R5cGUpO1xuICAgIGlmIChwcm9wcykgXy5leHRlbmRPd24ocmVzdWx0LCBwcm9wcyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSAoc2hhbGxvdy1jbG9uZWQpIGR1cGxpY2F0ZSBvZiBhbiBvYmplY3QuXG4gIF8uY2xvbmUgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgICByZXR1cm4gXy5pc0FycmF5KG9iaikgPyBvYmouc2xpY2UoKSA6IF8uZXh0ZW5kKHt9LCBvYmopO1xuICB9O1xuXG4gIC8vIEludm9rZXMgaW50ZXJjZXB0b3Igd2l0aCB0aGUgb2JqLCBhbmQgdGhlbiByZXR1cm5zIG9iai5cbiAgLy8gVGhlIHByaW1hcnkgcHVycG9zZSBvZiB0aGlzIG1ldGhvZCBpcyB0byBcInRhcCBpbnRvXCIgYSBtZXRob2QgY2hhaW4sIGluXG4gIC8vIG9yZGVyIHRvIHBlcmZvcm0gb3BlcmF0aW9ucyBvbiBpbnRlcm1lZGlhdGUgcmVzdWx0cyB3aXRoaW4gdGhlIGNoYWluLlxuICBfLnRhcCA9IGZ1bmN0aW9uKG9iaiwgaW50ZXJjZXB0b3IpIHtcbiAgICBpbnRlcmNlcHRvcihvYmopO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gUmV0dXJucyB3aGV0aGVyIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBzZXQgb2YgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8uaXNNYXRjaCA9IGZ1bmN0aW9uKG9iamVjdCwgYXR0cnMpIHtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhhdHRycyksIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkgcmV0dXJuICFsZW5ndGg7XG4gICAgdmFyIG9iaiA9IE9iamVjdChvYmplY3QpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKGF0dHJzW2tleV0gIT09IG9ialtrZXldIHx8ICEoa2V5IGluIG9iaikpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cblxuICAvLyBJbnRlcm5hbCByZWN1cnNpdmUgY29tcGFyaXNvbiBmdW5jdGlvbiBmb3IgYGlzRXF1YWxgLlxuICB2YXIgZXEsIGRlZXBFcTtcbiAgZXEgPSBmdW5jdGlvbihhLCBiLCBhU3RhY2ssIGJTdGFjaykge1xuICAgIC8vIElkZW50aWNhbCBvYmplY3RzIGFyZSBlcXVhbC4gYDAgPT09IC0wYCwgYnV0IHRoZXkgYXJlbid0IGlkZW50aWNhbC5cbiAgICAvLyBTZWUgdGhlIFtIYXJtb255IGBlZ2FsYCBwcm9wb3NhbF0oaHR0cDovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9aGFybW9ueTplZ2FsKS5cbiAgICBpZiAoYSA9PT0gYikgcmV0dXJuIGEgIT09IDAgfHwgMSAvIGEgPT09IDEgLyBiO1xuICAgIC8vIGBudWxsYCBvciBgdW5kZWZpbmVkYCBvbmx5IGVxdWFsIHRvIGl0c2VsZiAoc3RyaWN0IGNvbXBhcmlzb24pLlxuICAgIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS5cbiAgICBpZiAoYSAhPT0gYSkgcmV0dXJuIGIgIT09IGI7XG4gICAgLy8gRXhoYXVzdCBwcmltaXRpdmUgY2hlY2tzXG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgYTtcbiAgICBpZiAodHlwZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiAhPSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBkZWVwRXEoYSwgYiwgYVN0YWNrLCBiU3RhY2spO1xuICB9O1xuXG4gIC8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXG4gIGRlZXBFcSA9IGZ1bmN0aW9uKGEsIGIsIGFTdGFjaywgYlN0YWNrKSB7XG4gICAgLy8gVW53cmFwIGFueSB3cmFwcGVkIG9iamVjdHMuXG4gICAgaWYgKGEgaW5zdGFuY2VvZiBfKSBhID0gYS5fd3JhcHBlZDtcbiAgICBpZiAoYiBpbnN0YW5jZW9mIF8pIGIgPSBiLl93cmFwcGVkO1xuICAgIC8vIENvbXBhcmUgYFtbQ2xhc3NdXWAgbmFtZXMuXG4gICAgdmFyIGNsYXNzTmFtZSA9IHRvU3RyaW5nLmNhbGwoYSk7XG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gdG9TdHJpbmcuY2FsbChiKSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICAvLyBTdHJpbmdzLCBudW1iZXJzLCByZWd1bGFyIGV4cHJlc3Npb25zLCBkYXRlcywgYW5kIGJvb2xlYW5zIGFyZSBjb21wYXJlZCBieSB2YWx1ZS5cbiAgICAgIGNhc2UgJ1tvYmplY3QgUmVnRXhwXSc6XG4gICAgICAvLyBSZWdFeHBzIGFyZSBjb2VyY2VkIHRvIHN0cmluZ3MgZm9yIGNvbXBhcmlzb24gKE5vdGU6ICcnICsgL2EvaSA9PT0gJy9hL2knKVxuICAgICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzpcbiAgICAgICAgLy8gUHJpbWl0aXZlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBvYmplY3Qgd3JhcHBlcnMgYXJlIGVxdWl2YWxlbnQ7IHRodXMsIGBcIjVcImAgaXNcbiAgICAgICAgLy8gZXF1aXZhbGVudCB0byBgbmV3IFN0cmluZyhcIjVcIilgLlxuICAgICAgICByZXR1cm4gJycgKyBhID09PSAnJyArIGI7XG4gICAgICBjYXNlICdbb2JqZWN0IE51bWJlcl0nOlxuICAgICAgICAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLlxuICAgICAgICAvLyBPYmplY3QoTmFOKSBpcyBlcXVpdmFsZW50IHRvIE5hTi5cbiAgICAgICAgaWYgKCthICE9PSArYSkgcmV0dXJuICtiICE9PSArYjtcbiAgICAgICAgLy8gQW4gYGVnYWxgIGNvbXBhcmlzb24gaXMgcGVyZm9ybWVkIGZvciBvdGhlciBudW1lcmljIHZhbHVlcy5cbiAgICAgICAgcmV0dXJuICthID09PSAwID8gMSAvICthID09PSAxIC8gYiA6ICthID09PSArYjtcbiAgICAgIGNhc2UgJ1tvYmplY3QgRGF0ZV0nOlxuICAgICAgY2FzZSAnW29iamVjdCBCb29sZWFuXSc6XG4gICAgICAgIC8vIENvZXJjZSBkYXRlcyBhbmQgYm9vbGVhbnMgdG8gbnVtZXJpYyBwcmltaXRpdmUgdmFsdWVzLiBEYXRlcyBhcmUgY29tcGFyZWQgYnkgdGhlaXJcbiAgICAgICAgLy8gbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zLiBOb3RlIHRoYXQgaW52YWxpZCBkYXRlcyB3aXRoIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9uc1xuICAgICAgICAvLyBvZiBgTmFOYCBhcmUgbm90IGVxdWl2YWxlbnQuXG4gICAgICAgIHJldHVybiArYSA9PT0gK2I7XG4gICAgICBjYXNlICdbb2JqZWN0IFN5bWJvbF0nOlxuICAgICAgICByZXR1cm4gU3ltYm9sUHJvdG8udmFsdWVPZi5jYWxsKGEpID09PSBTeW1ib2xQcm90by52YWx1ZU9mLmNhbGwoYik7XG4gICAgfVxuXG4gICAgdmFyIGFyZUFycmF5cyA9IGNsYXNzTmFtZSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICBpZiAoIWFyZUFycmF5cykge1xuICAgICAgaWYgKHR5cGVvZiBhICE9ICdvYmplY3QnIHx8IHR5cGVvZiBiICE9ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIC8vIE9iamVjdHMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1aXZhbGVudCwgYnV0IGBPYmplY3RgcyBvciBgQXJyYXlgc1xuICAgICAgLy8gZnJvbSBkaWZmZXJlbnQgZnJhbWVzIGFyZS5cbiAgICAgIHZhciBhQ3RvciA9IGEuY29uc3RydWN0b3IsIGJDdG9yID0gYi5jb25zdHJ1Y3RvcjtcbiAgICAgIGlmIChhQ3RvciAhPT0gYkN0b3IgJiYgIShfLmlzRnVuY3Rpb24oYUN0b3IpICYmIGFDdG9yIGluc3RhbmNlb2YgYUN0b3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmlzRnVuY3Rpb24oYkN0b3IpICYmIGJDdG9yIGluc3RhbmNlb2YgYkN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICYmICgnY29uc3RydWN0b3InIGluIGEgJiYgJ2NvbnN0cnVjdG9yJyBpbiBiKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEFzc3VtZSBlcXVhbGl0eSBmb3IgY3ljbGljIHN0cnVjdHVyZXMuIFRoZSBhbGdvcml0aG0gZm9yIGRldGVjdGluZyBjeWNsaWNcbiAgICAvLyBzdHJ1Y3R1cmVzIGlzIGFkYXB0ZWQgZnJvbSBFUyA1LjEgc2VjdGlvbiAxNS4xMi4zLCBhYnN0cmFjdCBvcGVyYXRpb24gYEpPYC5cblxuICAgIC8vIEluaXRpYWxpemluZyBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICAvLyBJdCdzIGRvbmUgaGVyZSBzaW5jZSB3ZSBvbmx5IG5lZWQgdGhlbSBmb3Igb2JqZWN0cyBhbmQgYXJyYXlzIGNvbXBhcmlzb24uXG4gICAgYVN0YWNrID0gYVN0YWNrIHx8IFtdO1xuICAgIGJTdGFjayA9IGJTdGFjayB8fCBbXTtcbiAgICB2YXIgbGVuZ3RoID0gYVN0YWNrLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIC8vIExpbmVhciBzZWFyY2guIFBlcmZvcm1hbmNlIGlzIGludmVyc2VseSBwcm9wb3J0aW9uYWwgdG8gdGhlIG51bWJlciBvZlxuICAgICAgLy8gdW5pcXVlIG5lc3RlZCBzdHJ1Y3R1cmVzLlxuICAgICAgaWYgKGFTdGFja1tsZW5ndGhdID09PSBhKSByZXR1cm4gYlN0YWNrW2xlbmd0aF0gPT09IGI7XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBmaXJzdCBvYmplY3QgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIGFTdGFjay5wdXNoKGEpO1xuICAgIGJTdGFjay5wdXNoKGIpO1xuXG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIGFuZCBhcnJheXMuXG4gICAgaWYgKGFyZUFycmF5cykge1xuICAgICAgLy8gQ29tcGFyZSBhcnJheSBsZW5ndGhzIHRvIGRldGVybWluZSBpZiBhIGRlZXAgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkuXG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICAvLyBEZWVwIGNvbXBhcmUgdGhlIGNvbnRlbnRzLCBpZ25vcmluZyBub24tbnVtZXJpYyBwcm9wZXJ0aWVzLlxuICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgIGlmICghZXEoYVtsZW5ndGhdLCBiW2xlbmd0aF0sIGFTdGFjaywgYlN0YWNrKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEZWVwIGNvbXBhcmUgb2JqZWN0cy5cbiAgICAgIHZhciBrZXlzID0gXy5rZXlzKGEpLCBrZXk7XG4gICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICAgIC8vIEVuc3VyZSB0aGF0IGJvdGggb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIG51bWJlciBvZiBwcm9wZXJ0aWVzIGJlZm9yZSBjb21wYXJpbmcgZGVlcCBlcXVhbGl0eS5cbiAgICAgIGlmIChfLmtleXMoYikubGVuZ3RoICE9PSBsZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICAvLyBEZWVwIGNvbXBhcmUgZWFjaCBtZW1iZXJcbiAgICAgICAga2V5ID0ga2V5c1tsZW5ndGhdO1xuICAgICAgICBpZiAoIShoYXMoYiwga2V5KSAmJiBlcShhW2tleV0sIGJba2V5XSwgYVN0YWNrLCBiU3RhY2spKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucG9wKCk7XG4gICAgYlN0YWNrLnBvcCgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIFBlcmZvcm0gYSBkZWVwIGNvbXBhcmlzb24gdG8gY2hlY2sgaWYgdHdvIG9iamVjdHMgYXJlIGVxdWFsLlxuICBfLmlzRXF1YWwgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGVxKGEsIGIpO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gYXJyYXksIHN0cmluZywgb3Igb2JqZWN0IGVtcHR5P1xuICAvLyBBbiBcImVtcHR5XCIgb2JqZWN0IGhhcyBubyBlbnVtZXJhYmxlIG93bi1wcm9wZXJ0aWVzLlxuICBfLmlzRW1wdHkgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgIGlmIChpc0FycmF5TGlrZShvYmopICYmIChfLmlzQXJyYXkob2JqKSB8fCBfLmlzU3RyaW5nKG9iaikgfHwgXy5pc0FyZ3VtZW50cyhvYmopKSkgcmV0dXJuIG9iai5sZW5ndGggPT09IDA7XG4gICAgcmV0dXJuIF8ua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGEgRE9NIGVsZW1lbnQ/XG4gIF8uaXNFbGVtZW50ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuICEhKG9iaiAmJiBvYmoubm9kZVR5cGUgPT09IDEpO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYW4gYXJyYXk/XG4gIC8vIERlbGVnYXRlcyB0byBFQ01BNSdzIG5hdGl2ZSBBcnJheS5pc0FycmF5XG4gIF8uaXNBcnJheSA9IG5hdGl2ZUlzQXJyYXkgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIGFuIG9iamVjdD9cbiAgXy5pc09iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIG9iajtcbiAgICByZXR1cm4gdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlID09PSAnb2JqZWN0JyAmJiAhIW9iajtcbiAgfTtcblxuICAvLyBBZGQgc29tZSBpc1R5cGUgbWV0aG9kczogaXNBcmd1bWVudHMsIGlzRnVuY3Rpb24sIGlzU3RyaW5nLCBpc051bWJlciwgaXNEYXRlLCBpc1JlZ0V4cCwgaXNFcnJvciwgaXNNYXAsIGlzV2Vha01hcCwgaXNTZXQsIGlzV2Vha1NldC5cbiAgXy5lYWNoKFsnQXJndW1lbnRzJywgJ0Z1bmN0aW9uJywgJ1N0cmluZycsICdOdW1iZXInLCAnRGF0ZScsICdSZWdFeHAnLCAnRXJyb3InLCAnU3ltYm9sJywgJ01hcCcsICdXZWFrTWFwJywgJ1NldCcsICdXZWFrU2V0J10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBfWydpcycgKyBuYW1lXSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgJyArIG5hbWUgKyAnXSc7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gRGVmaW5lIGEgZmFsbGJhY2sgdmVyc2lvbiBvZiB0aGUgbWV0aG9kIGluIGJyb3dzZXJzIChhaGVtLCBJRSA8IDkpLCB3aGVyZVxuICAvLyB0aGVyZSBpc24ndCBhbnkgaW5zcGVjdGFibGUgXCJBcmd1bWVudHNcIiB0eXBlLlxuICBpZiAoIV8uaXNBcmd1bWVudHMoYXJndW1lbnRzKSkge1xuICAgIF8uaXNBcmd1bWVudHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBoYXMob2JqLCAnY2FsbGVlJyk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIE9wdGltaXplIGBpc0Z1bmN0aW9uYCBpZiBhcHByb3ByaWF0ZS4gV29yayBhcm91bmQgc29tZSB0eXBlb2YgYnVncyBpbiBvbGQgdjgsXG4gIC8vIElFIDExICgjMTYyMSksIFNhZmFyaSA4ICgjMTkyOSksIGFuZCBQaGFudG9tSlMgKCMyMjM2KS5cbiAgdmFyIG5vZGVsaXN0ID0gcm9vdC5kb2N1bWVudCAmJiByb290LmRvY3VtZW50LmNoaWxkTm9kZXM7XG4gIGlmICh0eXBlb2YgLy4vICE9ICdmdW5jdGlvbicgJiYgdHlwZW9mIEludDhBcnJheSAhPSAnb2JqZWN0JyAmJiB0eXBlb2Ygbm9kZWxpc3QgIT0gJ2Z1bmN0aW9uJykge1xuICAgIF8uaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJyB8fCBmYWxzZTtcbiAgICB9O1xuICB9XG5cbiAgLy8gSXMgYSBnaXZlbiBvYmplY3QgYSBmaW5pdGUgbnVtYmVyP1xuICBfLmlzRmluaXRlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuICFfLmlzU3ltYm9sKG9iaikgJiYgaXNGaW5pdGUob2JqKSAmJiAhaXNOYU4ocGFyc2VGbG9hdChvYmopKTtcbiAgfTtcblxuICAvLyBJcyB0aGUgZ2l2ZW4gdmFsdWUgYE5hTmA/XG4gIF8uaXNOYU4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gXy5pc051bWJlcihvYmopICYmIGlzTmFOKG9iaik7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIGJvb2xlYW4/XG4gIF8uaXNCb29sZWFuID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZSB8fCBvYmogPT09IGZhbHNlIHx8IHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgZXF1YWwgdG8gbnVsbD9cbiAgXy5pc051bGwgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgdW5kZWZpbmVkP1xuICBfLmlzVW5kZWZpbmVkID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdm9pZCAwO1xuICB9O1xuXG4gIC8vIFNob3J0Y3V0IGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gcHJvcGVydHkgZGlyZWN0bHlcbiAgLy8gb24gaXRzZWxmIChpbiBvdGhlciB3b3Jkcywgbm90IG9uIGEgcHJvdG90eXBlKS5cbiAgXy5oYXMgPSBmdW5jdGlvbihvYmosIHBhdGgpIHtcbiAgICBpZiAoIV8uaXNBcnJheShwYXRoKSkge1xuICAgICAgcmV0dXJuIGhhcyhvYmosIHBhdGgpO1xuICAgIH1cbiAgICB2YXIgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IHBhdGhbaV07XG4gICAgICBpZiAob2JqID09IG51bGwgfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iaiA9IG9ialtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gISFsZW5ndGg7XG4gIH07XG5cbiAgLy8gVXRpbGl0eSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBSdW4gVW5kZXJzY29yZS5qcyBpbiAqbm9Db25mbGljdCogbW9kZSwgcmV0dXJuaW5nIHRoZSBgX2AgdmFyaWFibGUgdG8gaXRzXG4gIC8vIHByZXZpb3VzIG93bmVyLiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgcm9vdC5fID0gcHJldmlvdXNVbmRlcnNjb3JlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vIEtlZXAgdGhlIGlkZW50aXR5IGZ1bmN0aW9uIGFyb3VuZCBmb3IgZGVmYXVsdCBpdGVyYXRlZXMuXG4gIF8uaWRlbnRpdHkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICAvLyBQcmVkaWNhdGUtZ2VuZXJhdGluZyBmdW5jdGlvbnMuIE9mdGVuIHVzZWZ1bCBvdXRzaWRlIG9mIFVuZGVyc2NvcmUuXG4gIF8uY29uc3RhbnQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICB9O1xuXG4gIF8ubm9vcCA9IGZ1bmN0aW9uKCl7fTtcblxuICAvLyBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBwYXNzZWQgYW4gb2JqZWN0LCB3aWxsIHRyYXZlcnNlIHRoYXQgb2JqZWN04oCZc1xuICAvLyBwcm9wZXJ0aWVzIGRvd24gdGhlIGdpdmVuIGBwYXRoYCwgc3BlY2lmaWVkIGFzIGFuIGFycmF5IG9mIGtleXMgb3IgaW5kZXhlcy5cbiAgXy5wcm9wZXJ0eSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICBpZiAoIV8uaXNBcnJheShwYXRoKSkge1xuICAgICAgcmV0dXJuIHNoYWxsb3dQcm9wZXJ0eShwYXRoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIGRlZXBHZXQob2JqLCBwYXRoKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEdlbmVyYXRlcyBhIGZ1bmN0aW9uIGZvciBhIGdpdmVuIG9iamVjdCB0aGF0IHJldHVybnMgYSBnaXZlbiBwcm9wZXJ0eS5cbiAgXy5wcm9wZXJ0eU9mID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKXt9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24ocGF0aCkge1xuICAgICAgcmV0dXJuICFfLmlzQXJyYXkocGF0aCkgPyBvYmpbcGF0aF0gOiBkZWVwR2V0KG9iaiwgcGF0aCk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgcHJlZGljYXRlIGZvciBjaGVja2luZyB3aGV0aGVyIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBzZXQgb2ZcbiAgLy8gYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8ubWF0Y2hlciA9IF8ubWF0Y2hlcyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgYXR0cnMgPSBfLmV4dGVuZE93bih7fSwgYXR0cnMpO1xuICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBfLmlzTWF0Y2gob2JqLCBhdHRycyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSdW4gYSBmdW5jdGlvbiAqKm4qKiB0aW1lcy5cbiAgXy50aW1lcyA9IGZ1bmN0aW9uKG4sIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIGFjY3VtID0gQXJyYXkoTWF0aC5tYXgoMCwgbikpO1xuICAgIGl0ZXJhdGVlID0gb3B0aW1pemVDYihpdGVyYXRlZSwgY29udGV4dCwgMSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIGFjY3VtW2ldID0gaXRlcmF0ZWUoaSk7XG4gICAgcmV0dXJuIGFjY3VtO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIGFuZCBtYXggKGluY2x1c2l2ZSkuXG4gIF8ucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICBpZiAobWF4ID09IG51bGwpIHtcbiAgICAgIG1heCA9IG1pbjtcbiAgICAgIG1pbiA9IDA7XG4gICAgfVxuICAgIHJldHVybiBtaW4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpO1xuICB9O1xuXG4gIC8vIEEgKHBvc3NpYmx5IGZhc3Rlcikgd2F5IHRvIGdldCB0aGUgY3VycmVudCB0aW1lc3RhbXAgYXMgYW4gaW50ZWdlci5cbiAgXy5ub3cgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH07XG5cbiAgLy8gTGlzdCBvZiBIVE1MIGVudGl0aWVzIGZvciBlc2NhcGluZy5cbiAgdmFyIGVzY2FwZU1hcCA9IHtcbiAgICAnJic6ICcmYW1wOycsXG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0OycsXG4gICAgJ1wiJzogJyZxdW90OycsXG4gICAgXCInXCI6ICcmI3gyNzsnLFxuICAgICdgJzogJyYjeDYwOydcbiAgfTtcbiAgdmFyIHVuZXNjYXBlTWFwID0gXy5pbnZlcnQoZXNjYXBlTWFwKTtcblxuICAvLyBGdW5jdGlvbnMgZm9yIGVzY2FwaW5nIGFuZCB1bmVzY2FwaW5nIHN0cmluZ3MgdG8vZnJvbSBIVE1MIGludGVycG9sYXRpb24uXG4gIHZhciBjcmVhdGVFc2NhcGVyID0gZnVuY3Rpb24obWFwKSB7XG4gICAgdmFyIGVzY2FwZXIgPSBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgcmV0dXJuIG1hcFttYXRjaF07XG4gICAgfTtcbiAgICAvLyBSZWdleGVzIGZvciBpZGVudGlmeWluZyBhIGtleSB0aGF0IG5lZWRzIHRvIGJlIGVzY2FwZWQuXG4gICAgdmFyIHNvdXJjZSA9ICcoPzonICsgXy5rZXlzKG1hcCkuam9pbignfCcpICsgJyknO1xuICAgIHZhciB0ZXN0UmVnZXhwID0gUmVnRXhwKHNvdXJjZSk7XG4gICAgdmFyIHJlcGxhY2VSZWdleHAgPSBSZWdFeHAoc291cmNlLCAnZycpO1xuICAgIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgIHN0cmluZyA9IHN0cmluZyA9PSBudWxsID8gJycgOiAnJyArIHN0cmluZztcbiAgICAgIHJldHVybiB0ZXN0UmVnZXhwLnRlc3Qoc3RyaW5nKSA/IHN0cmluZy5yZXBsYWNlKHJlcGxhY2VSZWdleHAsIGVzY2FwZXIpIDogc3RyaW5nO1xuICAgIH07XG4gIH07XG4gIF8uZXNjYXBlID0gY3JlYXRlRXNjYXBlcihlc2NhcGVNYXApO1xuICBfLnVuZXNjYXBlID0gY3JlYXRlRXNjYXBlcih1bmVzY2FwZU1hcCk7XG5cbiAgLy8gVHJhdmVyc2VzIHRoZSBjaGlsZHJlbiBvZiBgb2JqYCBhbG9uZyBgcGF0aGAuIElmIGEgY2hpbGQgaXMgYSBmdW5jdGlvbiwgaXRcbiAgLy8gaXMgaW52b2tlZCB3aXRoIGl0cyBwYXJlbnQgYXMgY29udGV4dC4gUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGZpbmFsXG4gIC8vIGNoaWxkLCBvciBgZmFsbGJhY2tgIGlmIGFueSBjaGlsZCBpcyB1bmRlZmluZWQuXG4gIF8ucmVzdWx0ID0gZnVuY3Rpb24ob2JqLCBwYXRoLCBmYWxsYmFjaykge1xuICAgIGlmICghXy5pc0FycmF5KHBhdGgpKSBwYXRoID0gW3BhdGhdO1xuICAgIHZhciBsZW5ndGggPSBwYXRoLmxlbmd0aDtcbiAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgcmV0dXJuIF8uaXNGdW5jdGlvbihmYWxsYmFjaykgPyBmYWxsYmFjay5jYWxsKG9iaikgOiBmYWxsYmFjaztcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHByb3AgPSBvYmogPT0gbnVsbCA/IHZvaWQgMCA6IG9ialtwYXRoW2ldXTtcbiAgICAgIGlmIChwcm9wID09PSB2b2lkIDApIHtcbiAgICAgICAgcHJvcCA9IGZhbGxiYWNrO1xuICAgICAgICBpID0gbGVuZ3RoOyAvLyBFbnN1cmUgd2UgZG9uJ3QgY29udGludWUgaXRlcmF0aW5nLlxuICAgICAgfVxuICAgICAgb2JqID0gXy5pc0Z1bmN0aW9uKHByb3ApID8gcHJvcC5jYWxsKG9iaikgOiBwcm9wO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIEdlbmVyYXRlIGEgdW5pcXVlIGludGVnZXIgaWQgKHVuaXF1ZSB3aXRoaW4gdGhlIGVudGlyZSBjbGllbnQgc2Vzc2lvbikuXG4gIC8vIFVzZWZ1bCBmb3IgdGVtcG9yYXJ5IERPTSBpZHMuXG4gIHZhciBpZENvdW50ZXIgPSAwO1xuICBfLnVuaXF1ZUlkID0gZnVuY3Rpb24ocHJlZml4KSB7XG4gICAgdmFyIGlkID0gKytpZENvdW50ZXIgKyAnJztcbiAgICByZXR1cm4gcHJlZml4ID8gcHJlZml4ICsgaWQgOiBpZDtcbiAgfTtcblxuICAvLyBCeSBkZWZhdWx0LCBVbmRlcnNjb3JlIHVzZXMgRVJCLXN0eWxlIHRlbXBsYXRlIGRlbGltaXRlcnMsIGNoYW5nZSB0aGVcbiAgLy8gZm9sbG93aW5nIHRlbXBsYXRlIHNldHRpbmdzIHRvIHVzZSBhbHRlcm5hdGl2ZSBkZWxpbWl0ZXJzLlxuICBfLnRlbXBsYXRlU2V0dGluZ3MgPSB7XG4gICAgZXZhbHVhdGU6IC88JShbXFxzXFxTXSs/KSU+L2csXG4gICAgaW50ZXJwb2xhdGU6IC88JT0oW1xcc1xcU10rPyklPi9nLFxuICAgIGVzY2FwZTogLzwlLShbXFxzXFxTXSs/KSU+L2dcbiAgfTtcblxuICAvLyBXaGVuIGN1c3RvbWl6aW5nIGB0ZW1wbGF0ZVNldHRpbmdzYCwgaWYgeW91IGRvbid0IHdhbnQgdG8gZGVmaW5lIGFuXG4gIC8vIGludGVycG9sYXRpb24sIGV2YWx1YXRpb24gb3IgZXNjYXBpbmcgcmVnZXgsIHdlIG5lZWQgb25lIHRoYXQgaXNcbiAgLy8gZ3VhcmFudGVlZCBub3QgdG8gbWF0Y2guXG4gIHZhciBub01hdGNoID0gLyguKV4vO1xuXG4gIC8vIENlcnRhaW4gY2hhcmFjdGVycyBuZWVkIHRvIGJlIGVzY2FwZWQgc28gdGhhdCB0aGV5IGNhbiBiZSBwdXQgaW50byBhXG4gIC8vIHN0cmluZyBsaXRlcmFsLlxuICB2YXIgZXNjYXBlcyA9IHtcbiAgICBcIidcIjogXCInXCIsXG4gICAgJ1xcXFwnOiAnXFxcXCcsXG4gICAgJ1xccic6ICdyJyxcbiAgICAnXFxuJzogJ24nLFxuICAgICdcXHUyMDI4JzogJ3UyMDI4JyxcbiAgICAnXFx1MjAyOSc6ICd1MjAyOSdcbiAgfTtcblxuICB2YXIgZXNjYXBlUmVnRXhwID0gL1xcXFx8J3xcXHJ8XFxufFxcdTIwMjh8XFx1MjAyOS9nO1xuXG4gIHZhciBlc2NhcGVDaGFyID0gZnVuY3Rpb24obWF0Y2gpIHtcbiAgICByZXR1cm4gJ1xcXFwnICsgZXNjYXBlc1ttYXRjaF07XG4gIH07XG5cbiAgLy8gSmF2YVNjcmlwdCBtaWNyby10ZW1wbGF0aW5nLCBzaW1pbGFyIHRvIEpvaG4gUmVzaWcncyBpbXBsZW1lbnRhdGlvbi5cbiAgLy8gVW5kZXJzY29yZSB0ZW1wbGF0aW5nIGhhbmRsZXMgYXJiaXRyYXJ5IGRlbGltaXRlcnMsIHByZXNlcnZlcyB3aGl0ZXNwYWNlLFxuICAvLyBhbmQgY29ycmVjdGx5IGVzY2FwZXMgcXVvdGVzIHdpdGhpbiBpbnRlcnBvbGF0ZWQgY29kZS5cbiAgLy8gTkI6IGBvbGRTZXR0aW5nc2Agb25seSBleGlzdHMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICBfLnRlbXBsYXRlID0gZnVuY3Rpb24odGV4dCwgc2V0dGluZ3MsIG9sZFNldHRpbmdzKSB7XG4gICAgaWYgKCFzZXR0aW5ncyAmJiBvbGRTZXR0aW5ncykgc2V0dGluZ3MgPSBvbGRTZXR0aW5ncztcbiAgICBzZXR0aW5ncyA9IF8uZGVmYXVsdHMoe30sIHNldHRpbmdzLCBfLnRlbXBsYXRlU2V0dGluZ3MpO1xuXG4gICAgLy8gQ29tYmluZSBkZWxpbWl0ZXJzIGludG8gb25lIHJlZ3VsYXIgZXhwcmVzc2lvbiB2aWEgYWx0ZXJuYXRpb24uXG4gICAgdmFyIG1hdGNoZXIgPSBSZWdFeHAoW1xuICAgICAgKHNldHRpbmdzLmVzY2FwZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAoc2V0dGluZ3MuaW50ZXJwb2xhdGUgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgICAgKHNldHRpbmdzLmV2YWx1YXRlIHx8IG5vTWF0Y2gpLnNvdXJjZVxuICAgIF0uam9pbignfCcpICsgJ3wkJywgJ2cnKTtcblxuICAgIC8vIENvbXBpbGUgdGhlIHRlbXBsYXRlIHNvdXJjZSwgZXNjYXBpbmcgc3RyaW5nIGxpdGVyYWxzIGFwcHJvcHJpYXRlbHkuXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgc291cmNlID0gXCJfX3ArPSdcIjtcbiAgICB0ZXh0LnJlcGxhY2UobWF0Y2hlciwgZnVuY3Rpb24obWF0Y2gsIGVzY2FwZSwgaW50ZXJwb2xhdGUsIGV2YWx1YXRlLCBvZmZzZXQpIHtcbiAgICAgIHNvdXJjZSArPSB0ZXh0LnNsaWNlKGluZGV4LCBvZmZzZXQpLnJlcGxhY2UoZXNjYXBlUmVnRXhwLCBlc2NhcGVDaGFyKTtcbiAgICAgIGluZGV4ID0gb2Zmc2V0ICsgbWF0Y2gubGVuZ3RoO1xuXG4gICAgICBpZiAoZXNjYXBlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgZXNjYXBlICsgXCIpKT09bnVsbD8nJzpfLmVzY2FwZShfX3QpKStcXG4nXCI7XG4gICAgICB9IGVsc2UgaWYgKGludGVycG9sYXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgaW50ZXJwb2xhdGUgKyBcIikpPT1udWxsPycnOl9fdCkrXFxuJ1wiO1xuICAgICAgfSBlbHNlIGlmIChldmFsdWF0ZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInO1xcblwiICsgZXZhbHVhdGUgKyBcIlxcbl9fcCs9J1wiO1xuICAgICAgfVxuXG4gICAgICAvLyBBZG9iZSBWTXMgbmVlZCB0aGUgbWF0Y2ggcmV0dXJuZWQgdG8gcHJvZHVjZSB0aGUgY29ycmVjdCBvZmZzZXQuXG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG4gICAgc291cmNlICs9IFwiJztcXG5cIjtcblxuICAgIC8vIElmIGEgdmFyaWFibGUgaXMgbm90IHNwZWNpZmllZCwgcGxhY2UgZGF0YSB2YWx1ZXMgaW4gbG9jYWwgc2NvcGUuXG4gICAgaWYgKCFzZXR0aW5ncy52YXJpYWJsZSkgc291cmNlID0gJ3dpdGgob2JqfHx7fSl7XFxuJyArIHNvdXJjZSArICd9XFxuJztcblxuICAgIHNvdXJjZSA9IFwidmFyIF9fdCxfX3A9JycsX19qPUFycmF5LnByb3RvdHlwZS5qb2luLFwiICtcbiAgICAgIFwicHJpbnQ9ZnVuY3Rpb24oKXtfX3ArPV9fai5jYWxsKGFyZ3VtZW50cywnJyk7fTtcXG5cIiArXG4gICAgICBzb3VyY2UgKyAncmV0dXJuIF9fcDtcXG4nO1xuXG4gICAgdmFyIHJlbmRlcjtcbiAgICB0cnkge1xuICAgICAgcmVuZGVyID0gbmV3IEZ1bmN0aW9uKHNldHRpbmdzLnZhcmlhYmxlIHx8ICdvYmonLCAnXycsIHNvdXJjZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZS5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cblxuICAgIHZhciB0ZW1wbGF0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHJldHVybiByZW5kZXIuY2FsbCh0aGlzLCBkYXRhLCBfKTtcbiAgICB9O1xuXG4gICAgLy8gUHJvdmlkZSB0aGUgY29tcGlsZWQgc291cmNlIGFzIGEgY29udmVuaWVuY2UgZm9yIHByZWNvbXBpbGF0aW9uLlxuICAgIHZhciBhcmd1bWVudCA9IHNldHRpbmdzLnZhcmlhYmxlIHx8ICdvYmonO1xuICAgIHRlbXBsYXRlLnNvdXJjZSA9ICdmdW5jdGlvbignICsgYXJndW1lbnQgKyAnKXtcXG4nICsgc291cmNlICsgJ30nO1xuXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9O1xuXG4gIC8vIEFkZCBhIFwiY2hhaW5cIiBmdW5jdGlvbi4gU3RhcnQgY2hhaW5pbmcgYSB3cmFwcGVkIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLmNoYWluID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGluc3RhbmNlID0gXyhvYmopO1xuICAgIGluc3RhbmNlLl9jaGFpbiA9IHRydWU7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xuXG4gIC8vIE9PUFxuICAvLyAtLS0tLS0tLS0tLS0tLS1cbiAgLy8gSWYgVW5kZXJzY29yZSBpcyBjYWxsZWQgYXMgYSBmdW5jdGlvbiwgaXQgcmV0dXJucyBhIHdyYXBwZWQgb2JqZWN0IHRoYXRcbiAgLy8gY2FuIGJlIHVzZWQgT08tc3R5bGUuIFRoaXMgd3JhcHBlciBob2xkcyBhbHRlcmVkIHZlcnNpb25zIG9mIGFsbCB0aGVcbiAgLy8gdW5kZXJzY29yZSBmdW5jdGlvbnMuIFdyYXBwZWQgb2JqZWN0cyBtYXkgYmUgY2hhaW5lZC5cblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udGludWUgY2hhaW5pbmcgaW50ZXJtZWRpYXRlIHJlc3VsdHMuXG4gIHZhciBjaGFpblJlc3VsdCA9IGZ1bmN0aW9uKGluc3RhbmNlLCBvYmopIHtcbiAgICByZXR1cm4gaW5zdGFuY2UuX2NoYWluID8gXyhvYmopLmNoYWluKCkgOiBvYmo7XG4gIH07XG5cbiAgLy8gQWRkIHlvdXIgb3duIGN1c3RvbSBmdW5jdGlvbnMgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm1peGluID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgXy5lYWNoKF8uZnVuY3Rpb25zKG9iaiksIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHZhciBmdW5jID0gX1tuYW1lXSA9IG9ialtuYW1lXTtcbiAgICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gW3RoaXMuX3dyYXBwZWRdO1xuICAgICAgICBwdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiBjaGFpblJlc3VsdCh0aGlzLCBmdW5jLmFwcGx5KF8sIGFyZ3MpKTtcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIF87XG4gIH07XG5cbiAgLy8gQWRkIGFsbCBvZiB0aGUgVW5kZXJzY29yZSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIgb2JqZWN0LlxuICBfLm1peGluKF8pO1xuXG4gIC8vIEFkZCBhbGwgbXV0YXRvciBBcnJheSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG4gIF8uZWFjaChbJ3BvcCcsICdwdXNoJywgJ3JldmVyc2UnLCAnc2hpZnQnLCAnc29ydCcsICdzcGxpY2UnLCAndW5zaGlmdCddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvYmogPSB0aGlzLl93cmFwcGVkO1xuICAgICAgbWV0aG9kLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICAgIGlmICgobmFtZSA9PT0gJ3NoaWZ0JyB8fCBuYW1lID09PSAnc3BsaWNlJykgJiYgb2JqLmxlbmd0aCA9PT0gMCkgZGVsZXRlIG9ialswXTtcbiAgICAgIHJldHVybiBjaGFpblJlc3VsdCh0aGlzLCBvYmopO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIEFkZCBhbGwgYWNjZXNzb3IgQXJyYXkgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuICBfLmVhY2goWydjb25jYXQnLCAnam9pbicsICdzbGljZSddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBjaGFpblJlc3VsdCh0aGlzLCBtZXRob2QuYXBwbHkodGhpcy5fd3JhcHBlZCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gRXh0cmFjdHMgdGhlIHJlc3VsdCBmcm9tIGEgd3JhcHBlZCBhbmQgY2hhaW5lZCBvYmplY3QuXG4gIF8ucHJvdG90eXBlLnZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dyYXBwZWQ7XG4gIH07XG5cbiAgLy8gUHJvdmlkZSB1bndyYXBwaW5nIHByb3h5IGZvciBzb21lIG1ldGhvZHMgdXNlZCBpbiBlbmdpbmUgb3BlcmF0aW9uc1xuICAvLyBzdWNoIGFzIGFyaXRobWV0aWMgYW5kIEpTT04gc3RyaW5naWZpY2F0aW9uLlxuICBfLnByb3RvdHlwZS52YWx1ZU9mID0gXy5wcm90b3R5cGUudG9KU09OID0gXy5wcm90b3R5cGUudmFsdWU7XG5cbiAgXy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gU3RyaW5nKHRoaXMuX3dyYXBwZWQpO1xuICB9O1xuXG4gIC8vIEFNRCByZWdpc3RyYXRpb24gaGFwcGVucyBhdCB0aGUgZW5kIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQU1EIGxvYWRlcnNcbiAgLy8gdGhhdCBtYXkgbm90IGVuZm9yY2UgbmV4dC10dXJuIHNlbWFudGljcyBvbiBtb2R1bGVzLiBFdmVuIHRob3VnaCBnZW5lcmFsXG4gIC8vIHByYWN0aWNlIGZvciBBTUQgcmVnaXN0cmF0aW9uIGlzIHRvIGJlIGFub255bW91cywgdW5kZXJzY29yZSByZWdpc3RlcnNcbiAgLy8gYXMgYSBuYW1lZCBtb2R1bGUgYmVjYXVzZSwgbGlrZSBqUXVlcnksIGl0IGlzIGEgYmFzZSBsaWJyYXJ5IHRoYXQgaXNcbiAgLy8gcG9wdWxhciBlbm91Z2ggdG8gYmUgYnVuZGxlZCBpbiBhIHRoaXJkIHBhcnR5IGxpYiwgYnV0IG5vdCBiZSBwYXJ0IG9mXG4gIC8vIGFuIEFNRCBsb2FkIHJlcXVlc3QuIFRob3NlIGNhc2VzIGNvdWxkIGdlbmVyYXRlIGFuIGVycm9yIHdoZW4gYW5cbiAgLy8gYW5vbnltb3VzIGRlZmluZSgpIGlzIGNhbGxlZCBvdXRzaWRlIG9mIGEgbG9hZGVyIHJlcXVlc3QuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZSgndW5kZXJzY29yZScsIFtdLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfO1xuICAgIH0pO1xuICB9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS91bmRlcnNjb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vY29uc3QnO1xuaW1wb3J0IHsgQm9vdHN0cmFwQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL2Jvb3RzdHJhcCc7XG5pbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBDaGVja0JveCA9ICh7IGNsYXNzTmFtZSwgY2hlY2tlZCwgaW5kZXRlcm1pbmF0ZSB9KSA9PiAoXG4gIDxpbnB1dFxuICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgY2hlY2tlZD17IGNoZWNrZWQgfVxuICAgIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG4gICAgcmVmPXsgKGlucHV0KSA9PiB7XG4gICAgICBpZiAoaW5wdXQpIGlucHV0LmluZGV0ZXJtaW5hdGUgPSBpbmRldGVybWluYXRlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfSB9XG4gICAgb25DaGFuZ2U9eyAoKSA9PiB7fSB9XG4gIC8+XG4pO1xuXG5DaGVja0JveC5wcm9wVHlwZXMgPSB7XG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGluZGV0ZXJtaW5hdGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0aW9uSGVhZGVyQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbW9kZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoZWNrZWRTdGF0dXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25BbGxSb3dzU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoaWRlU2VsZWN0QWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzZWxlY3Rpb25IZWFkZXJSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGVhZGVyQ29sdW1uU3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5oYW5kbGVDaGVja0JveENsaWNrID0gdGhpcy5oYW5kbGVDaGVja0JveENsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogYXZvaWQgdXBkYXRpbmcgaWYgYnV0dG9uIGlzXG4gICAqIDEuIHJhZGlvXG4gICAqIDIuIHN0YXR1cyB3YXMgbm90IGNoYW5nZWQuXG4gICAqL1xuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgY29uc3QgeyBST1dfU0VMRUNUX1NJTkdMRSB9ID0gQ29uc3Q7XG4gICAgY29uc3QgeyBtb2RlLCBjaGVja2VkU3RhdHVzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKG1vZGUgPT09IFJPV19TRUxFQ1RfU0lOR0xFKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbmV4dFByb3BzLmNoZWNrZWRTdGF0dXMgIT09IGNoZWNrZWRTdGF0dXM7XG4gIH1cblxuICBoYW5kbGVDaGVja0JveENsaWNrKGUpIHtcbiAgICBjb25zdCB7IG9uQWxsUm93c1NlbGVjdCwgY2hlY2tlZFN0YXR1cyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpc1VuU2VsZWN0ID1cbiAgICAgIGNoZWNrZWRTdGF0dXMgPT09IENvbnN0LkNIRUNLQk9YX1NUQVRVU19DSEVDS0VEIHx8XG4gICAgICBjaGVja2VkU3RhdHVzID09PSBDb25zdC5DSEVDS0JPWF9TVEFUVVNfSU5ERVRFUk1JTkFURTtcblxuICAgIG9uQWxsUm93c1NlbGVjdChlLCBpc1VuU2VsZWN0KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBDSEVDS0JPWF9TVEFUVVNfQ0hFQ0tFRCwgQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEUsIFJPV19TRUxFQ1RfTVVMVElQTEVcbiAgICB9ID0gQ29uc3Q7XG5cbiAgICBjb25zdCB7XG4gICAgICBtb2RlLFxuICAgICAgY2hlY2tlZFN0YXR1cyxcbiAgICAgIHNlbGVjdGlvbkhlYWRlclJlbmRlcmVyLFxuICAgICAgaGlkZVNlbGVjdEFsbCxcbiAgICAgIGhlYWRlckNvbHVtblN0eWxlXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGhpZGVTZWxlY3RBbGwpIHtcbiAgICAgIHJldHVybiA8dGggZGF0YS1yb3ctc2VsZWN0aW9uIC8+O1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrZWQgPSBjaGVja2VkU3RhdHVzID09PSBDSEVDS0JPWF9TVEFUVVNfQ0hFQ0tFRDtcblxuICAgIGNvbnN0IGluZGV0ZXJtaW5hdGUgPSBjaGVja2VkU3RhdHVzID09PSBDSEVDS0JPWF9TVEFUVVNfSU5ERVRFUk1JTkFURTtcblxuICAgIGNvbnN0IGF0dHJzID0ge307XG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgaWYgKHNlbGVjdGlvbkhlYWRlclJlbmRlcmVyIHx8IG1vZGUgPT09IFJPV19TRUxFQ1RfTVVMVElQTEUpIHtcbiAgICAgIGF0dHJzLm9uQ2xpY2sgPSB0aGlzLmhhbmRsZUNoZWNrQm94Q2xpY2s7XG4gICAgfVxuXG4gICAgYXR0cnMuc3R5bGUgPSBfLmlzRnVuY3Rpb24oaGVhZGVyQ29sdW1uU3R5bGUpID9cbiAgICAgIGhlYWRlckNvbHVtblN0eWxlKGNoZWNrZWRTdGF0dXMpIDpcbiAgICAgIGhlYWRlckNvbHVtblN0eWxlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb290c3RyYXBDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7XG4gICAgICAgICAgKHsgYm9vdHN0cmFwNCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uSGVhZGVyUmVuZGVyZXIpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IHNlbGVjdGlvbkhlYWRlclJlbmRlcmVyKHtcbiAgICAgICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQsXG4gICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gUk9XX1NFTEVDVF9NVUxUSVBMRSkge1xuICAgICAgICAgICAgICBjb250ZW50ID0gKFxuICAgICAgICAgICAgICAgIDxDaGVja0JveFxuICAgICAgICAgICAgICAgICAgeyAuLi50aGlzLnByb3BzIH1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBjaGVja2VkIH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGJvb3RzdHJhcDQgPyAnc2VsZWN0aW9uLWlucHV0LTQnIDogJycgfVxuICAgICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZT17IGluZGV0ZXJtaW5hdGUgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwic2VsZWN0aW9uLWNlbGwtaGVhZGVyXCIgZGF0YS1yb3ctc2VsZWN0aW9uIHsgLi4uYXR0cnMgfT57IGNvbnRlbnQgfTwvdGg+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC9Cb290c3RyYXBDb250ZXh0LkNvbnN1bWVyPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWhlYWRlci1jZWxsLmpzIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuLyogZXNsaW50IG5vLW5lc3RlZC10ZXJuYXJ5OiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwYW5zaW9uSGVhZGVyQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaXNBbnlFeHBhbmRzOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIG9uQWxsUm93RXhwYW5kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGV4cGFuZEhlYWRlckNvbHVtblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhbmRsZUNoZWNrQm94Q2xpY2sgPSB0aGlzLmhhbmRsZUNoZWNrQm94Q2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoZWNrQm94Q2xpY2soZSkge1xuICAgIGNvbnN0IHsgaXNBbnlFeHBhbmRzLCBvbkFsbFJvd0V4cGFuZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIG9uQWxsUm93RXhwYW5kKGUsICFpc0FueUV4cGFuZHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNBbnlFeHBhbmRzLCBleHBhbmRIZWFkZXJDb2x1bW5SZW5kZXJlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2hlY2tCb3hDbGlja1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRoIGNsYXNzTmFtZT1cImV4cGFuZC1jZWxsLWhlYWRlclwiIGRhdGEtcm93LXNlbGVjdGlvbiB7IC4uLmF0dHJzIH0+XG4gICAgICAgIHtcbiAgICAgICAgICBleHBhbmRIZWFkZXJDb2x1bW5SZW5kZXJlciA/XG4gICAgICAgICAgICBleHBhbmRIZWFkZXJDb2x1bW5SZW5kZXJlcih7IGlzQW55RXhwYW5kcyB9KSA6XG4gICAgICAgICAgICAoaXNBbnlFeHBhbmRzID8gJygtKScgOiAnKCspJylcbiAgICAgICAgfVxuICAgICAgPC90aD5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1oZWFkZXItY2VsbC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VsZWN0aW9uQ29udGV4dCBmcm9tICcuLi9jb250ZXh0cy9zZWxlY3Rpb24tY29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudCA9PiAoKSA9PiAoXG4gIDxTZWxlY3Rpb25Db250ZXh0LkNvbnN1bWVyPlxuICAgIHsgc2VsZWN0Um93ID0+IDxDb21wb25lbnQgeyAuLi5zZWxlY3RSb3cgfSAvPiB9XG4gIDwvU2VsZWN0aW9uQ29udGV4dC5Db25zdW1lcj5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1oZWFkZXItY2VsbC1jb25zdW1lci5qcyIsImltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGdldFJvd0J5Um93SWQgfSBmcm9tICcuL3Jvd3MnO1xuXG5leHBvcnQgY29uc3QgaXNBbnlFeHBhbmRzID0gKFxuICBkYXRhLFxuICBrZXlGaWVsZCxcbiAgZXhwYW5kZWQgPSBbXVxuKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJvd0tleSA9IF8uZ2V0KGRhdGFbaV0sIGtleUZpZWxkKTtcbiAgICBpZiAodHlwZW9mIGV4cGFuZGVkLmZpbmQoeCA9PiB4ID09PSByb3dLZXkpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBleHBhbmRhYmxlS2V5cyA9IChkYXRhLCBrZXlGaWVsZCwgc2tpcHMgPSBbXSkgPT4ge1xuICBpZiAoc2tpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKHJvdyA9PiBfLmdldChyb3csIGtleUZpZWxkKSk7XG4gIH1cbiAgcmV0dXJuIGRhdGFcbiAgICAuZmlsdGVyKHJvdyA9PiAhXy5jb250YWlucyhza2lwcywgXy5nZXQocm93LCBrZXlGaWVsZCkpKVxuICAgIC5tYXAocm93ID0+IF8uZ2V0KHJvdywga2V5RmllbGQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRFeHBhbmRlZFJvd3MgPSAoZGF0YSwga2V5RmllbGQsIGV4cGFuZGVkKSA9PlxuICBleHBhbmRlZC5tYXAoayA9PiBnZXRSb3dCeVJvd0lkKGRhdGEsIGtleUZpZWxkLCBrKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9leHBhbmQuanMiLCJpbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXRSb3dCeVJvd0lkIH0gZnJvbSAnLi9yb3dzJztcblxuZXhwb3J0IGNvbnN0IGVkaXRDZWxsID0gKGRhdGEsIGtleUZpZWxkLCByb3dJZCwgZGF0YUZpZWxkLCBuZXdWYWx1ZSkgPT4ge1xuICBjb25zdCByb3cgPSBnZXRSb3dCeVJvd0lkKGRhdGEsIGtleUZpZWxkLCByb3dJZCk7XG4gIGlmIChyb3cpIF8uc2V0KHJvdywgZGF0YUZpZWxkLCBuZXdWYWx1ZSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvbXV0YXRlLmpzIiwiLyogZXNsaW50IG5vLW5lc3RlZC10ZXJuYXJ5OiAwICovXG4vKiBlc2xpbnQgbm8tbG9uZWx5LWlmOiAwICovXG4vKiBlc2xpbnQgbm8tdW5kZXJzY29yZS1kYW5nbGU6IDAgKi9cbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5cbmZ1bmN0aW9uIGNvbXBhcmF0b3IoYSwgYikge1xuICBsZXQgcmVzdWx0O1xuICBpZiAodHlwZW9mIGIgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gYi5sb2NhbGVDb21wYXJlKGEpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGEgPiBiID8gLTEgOiAoKGEgPCBiKSA/IDEgOiAwKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgY29uc3Qgc29ydCA9IChkYXRhLCBzb3J0T3JkZXIsIHsgZGF0YUZpZWxkLCBzb3J0RnVuYywgc29ydFZhbHVlIH0pID0+IHtcbiAgY29uc3QgX2RhdGEgPSBbLi4uZGF0YV07XG4gIF9kYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCB2YWx1ZUEgPSBfLmdldChhLCBkYXRhRmllbGQpO1xuICAgIGxldCB2YWx1ZUIgPSBfLmdldChiLCBkYXRhRmllbGQpO1xuICAgIGlmIChzb3J0VmFsdWUpIHtcbiAgICAgIHZhbHVlQSA9IHNvcnRWYWx1ZSh2YWx1ZUEsIGEpO1xuICAgICAgdmFsdWVCID0gc29ydFZhbHVlKHZhbHVlQiwgYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlQSA9IF8uaXNEZWZpbmVkKHZhbHVlQSkgPyB2YWx1ZUEgOiAnJztcbiAgICAgIHZhbHVlQiA9IF8uaXNEZWZpbmVkKHZhbHVlQikgPyB2YWx1ZUIgOiAnJztcbiAgICB9XG5cbiAgICBpZiAoc29ydEZ1bmMpIHtcbiAgICAgIHJlc3VsdCA9IHNvcnRGdW5jKHZhbHVlQSwgdmFsdWVCLCBzb3J0T3JkZXIsIGRhdGFGaWVsZCwgYSwgYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzb3J0T3JkZXIgPT09IENvbnN0LlNPUlRfREVTQykge1xuICAgICAgICByZXN1bHQgPSBjb21wYXJhdG9yKHZhbHVlQSwgdmFsdWVCKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGNvbXBhcmF0b3IodmFsdWVCLCB2YWx1ZUEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcbiAgcmV0dXJuIF9kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IG5leHRPcmRlciA9IChcbiAgY3VycmVudFNvcnRDb2x1bW4sXG4gIHsgc29ydE9yZGVyLCBzb3J0Q29sdW1uIH0sXG4gIGRlZmF1bHRPcmRlciA9IENvbnN0LlNPUlRfREVTQ1xuKSA9PiB7XG4gIGlmICghc29ydENvbHVtbiB8fCBjdXJyZW50U29ydENvbHVtbi5kYXRhRmllbGQgIT09IHNvcnRDb2x1bW4uZGF0YUZpZWxkKSByZXR1cm4gZGVmYXVsdE9yZGVyO1xuICByZXR1cm4gc29ydE9yZGVyID09PSBDb25zdC5TT1JUX0RFU0MgPyBDb25zdC5TT1JUX0FTQyA6IENvbnN0LlNPUlRfREVTQztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9zb3J0LmpzIiwiaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcblxuZXhwb3J0IGNvbnN0IHR5cGVDb252ZXJ0ID0gKHR5cGUsIHZhbHVlKSA9PiB7XG4gIGlmICh0eXBlID09PSBDb25zdC5UWVBFX1NUUklORykge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IENvbnN0LlRZUEVfTlVNQkVSKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gQ29uc3QuVFlQRV9CT09MRUFOKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZSA9PT0gJ3RydWUnO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IENvbnN0LlRZUEVfREFURSkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvdHlwZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXhwYW5zaW9uQ29udGV4dCBmcm9tICcuLi9jb250ZXh0cy9yb3ctZXhwYW5kLWNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQgPT4gKCkgPT4gKFxuICA8RXhwYW5zaW9uQ29udGV4dC5Db25zdW1lcj5cbiAgICB7IGV4cGFuZFJvdyA9PiA8Q29tcG9uZW50IHsgLi4uZXhwYW5kUm93IH0gLz4gfVxuICA8L0V4cGFuc2lvbkNvbnRleHQuQ29uc3VtZXI+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LWV4cGFuZC9leHBhbmQtaGVhZGVyLWNlbGwtY29uc3VtZXIuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEZpbHRlcnNDZWxsIGZyb20gJy4vZmlsdGVycy1jZWxsJztcbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcbmltcG9ydCBSb3dUZW1wbGF0ZSBmcm9tICcuL3Jvdy9yb3ctdGVtcGxhdGUnO1xuXG5jb25zdCBGaWx0ZXJzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2x1bW5zLFxuICAgIG9uRmlsdGVyLFxuICAgIGN1cnJGaWx0ZXJzLFxuICAgIGZpbHRlclBvc2l0aW9uLFxuICAgIG9uRXh0ZXJuYWxGaWx0ZXIsXG4gICAgY2xhc3NOYW1lLFxuICAgIHNlbGVjdFJvdyxcbiAgICBleHBhbmRSb3dcbiAgfSA9IHByb3BzO1xuXG4gIGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgZmlsdGVyQ29sdW1ucyA9IFtdO1xuICAgIGxldCBzaG93RmlsdGVyc1JvdyA9IGZhbHNlO1xuXG4gICAgY29sdW1ucy5mb3JFYWNoKChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGZpbHRlckNvbHVtbnMucHVzaCg8RmlsdGVyc0NlbGxcbiAgICAgICAgaW5kZXg9eyBpIH1cbiAgICAgICAga2V5PXsgY29sdW1uLmRhdGFGaWVsZCB9XG4gICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAgIGN1cnJGaWx0ZXJzPXsgY3VyckZpbHRlcnMgfVxuICAgICAgICBvbkV4dGVybmFsRmlsdGVyPXsgb25FeHRlcm5hbEZpbHRlciB9XG4gICAgICAgIG9uRmlsdGVyPXsgb25GaWx0ZXIgfVxuICAgICAgLz4pO1xuXG4gICAgICBpZiAoY29sdW1uLmZpbHRlclJlbmRlcmVyIHx8IGNvbHVtbi5maWx0ZXIpIHtcbiAgICAgICAgaWYgKCFzaG93RmlsdGVyc1Jvdykge1xuICAgICAgICAgIHNob3dGaWx0ZXJzUm93ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJDb2x1bW5zO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dGJvZHlcbiAgICAgIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG4gICAgICBzdHlsZT17IHtcbiAgICAgICAgZGlzcGxheTpcbiAgICAgICAgZmlsdGVyUG9zaXRpb24gPT09IENvbnN0LkZJTFRFUlNfUE9TSVRJT05fVE9QXG4gICAgICAgICAgPyAndGFibGUtaGVhZGVyLWdyb3VwJ1xuICAgICAgICAgIDogJ3RhYmxlLWZvb3Rlci1ncm91cCdcbiAgICAgIH0gfVxuICAgID5cbiAgICAgIDxSb3dUZW1wbGF0ZVxuICAgICAgICByZW5kZXJDb250ZW50PXsgcmVuZGVyQ29udGVudCB9XG4gICAgICAgIHNlbGVjdFJvdz17IHNlbGVjdFJvdyB9XG4gICAgICAgIGV4cGFuZFJvdz17IGV4cGFuZFJvdyB9XG4gICAgICAgIGNlbGxFbD1cInRkXCJcbiAgICAgIC8+XG4gICAgPC90Ym9keT5cbiAgKTtcbn07XG5cbkZpbHRlcnMucHJvcFR5cGVzID0ge1xuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBmaWx0ZXJQb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBDb25zdC5GSUxURVJTX1BPU0lUSU9OX1RPUCxcbiAgICBDb25zdC5GSUxURVJTX1BPU0lUSU9OX0lOTElORSxcbiAgICBDb25zdC5GSUxURVJTX1BPU0lUSU9OX0JPVFRPTVxuICBdKSxcbiAgY3VyckZpbHRlcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIG9uRXh0ZXJuYWxGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdFJvdzogUHJvcFR5cGVzLm9iamVjdCxcbiAgZXhwYW5kUm93OiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5GaWx0ZXJzLmRlZmF1bHRQcm9wcyA9IHtcbiAgcG9zaXRpb246IENvbnN0LkZJTFRFUlNfUE9TSVRJT05fVE9QXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvZmlsdGVycy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IEZpbHRlcnNDZWxsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpbmRleCwgY29sdW1uLCBvbkV4dGVybmFsRmlsdGVyLFxuICAgIGN1cnJGaWx0ZXJzLCBvbkZpbHRlclxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgZmlsdGVyUmVuZGVyZXIsIGZpbHRlciB9ID0gY29sdW1uO1xuICBsZXQgZmlsdGVyRWxtO1xuICBjb25zdCBjZWxsQXR0cnMgPSB7fTtcbiAgY29uc3QgY2VsbFN0eWxlID0ge307XG4gIGNlbGxBdHRycy5zdHlsZSA9IGNlbGxTdHlsZTtcbiAgaWYgKGNvbHVtbi5oZWFkZXJBbGlnbikge1xuICAgIGNlbGxTdHlsZS50ZXh0QWxpZ24gPSBfLmlzRnVuY3Rpb24oY29sdW1uLmhlYWRlckFsaWduKVxuICAgICAgPyBjb2x1bW4uaGVhZGVyQWxpZ24oY29sdW1uLCBpbmRleClcbiAgICAgIDogY29sdW1uLmhlYWRlckFsaWduO1xuICB9XG4gIGlmIChjb2x1bW4uZmlsdGVyUmVuZGVyZXIpIHtcbiAgICBjb25zdCBvbkN1c3RvbUZpbHRlciA9IG9uRXh0ZXJuYWxGaWx0ZXIoY29sdW1uLCBmaWx0ZXIucHJvcHMudHlwZSk7XG4gICAgZmlsdGVyRWxtID0gZmlsdGVyUmVuZGVyZXIob25DdXN0b21GaWx0ZXIsIGNvbHVtbik7XG4gIH0gZWxzZSBpZiAoZmlsdGVyKSB7XG4gICAgZmlsdGVyRWxtID0gKFxuICAgICAgPGZpbHRlci5GaWx0ZXJcbiAgICAgICAgeyAuLi5maWx0ZXIucHJvcHMgfVxuICAgICAgICBmaWx0ZXJTdGF0ZT17IGN1cnJGaWx0ZXJzW2NvbHVtbi5kYXRhRmllbGRdIH1cbiAgICAgICAgb25GaWx0ZXI9eyBvbkZpbHRlciB9XG4gICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywgY2VsbEF0dHJzLCBmaWx0ZXJFbG0pO1xufTtcblxuRmlsdGVyc0NlbGwucHJvcFR5cGVzID0ge1xuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjb2x1bW46IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY3VyckZpbHRlcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkV4dGVybmFsRmlsdGVyOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuRmlsdGVyc0NlbGwuZGVmYXVsdFByb3BzID0ge1xuICBvbkZpbHRlcjogKCkgPT4geyB9LFxuICBvbkV4dGVybmFsRmlsdGVyOiAoKSA9PiB7IH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcnNDZWxsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvZmlsdGVycy1jZWxsLmpzIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IENhcHRpb24gPSAocHJvcHMpID0+IHtcbiAgaWYgKCFwcm9wcy5jaGlsZHJlbikgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgY2FwdGlvbiA9IHByb3BzLmJvb3RzdHJhcDQgPyAoXG4gICAgPGNhcHRpb24gc3R5bGU9eyB7IGNhcHRpb25TaWRlOiAndG9wJyB9IH0+e3Byb3BzLmNoaWxkcmVufTwvY2FwdGlvbj5cbiAgKSA6IChcbiAgICA8Y2FwdGlvbj57cHJvcHMuY2hpbGRyZW59PC9jYXB0aW9uPlxuICApO1xuXG4gIHJldHVybiBjYXB0aW9uO1xufTtcblxuQ2FwdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nXG4gIF0pLFxuICBib290c3RyYXA0OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FwdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NhcHRpb24uanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgU2ltcGxlUm93IGZyb20gJy4vcm93L3NpbXBsZS1yb3cnO1xuaW1wb3J0IFJvd0FnZ3JlZ2F0b3IgZnJvbSAnLi9yb3cvYWdncmVnYXRlLXJvdyc7XG5pbXBvcnQgUm93U2VjdGlvbiBmcm9tICcuL3Jvdy9yb3ctc2VjdGlvbic7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9jb25zdCc7XG5pbXBvcnQgd2l0aFJvd1NlbGVjdGlvbiBmcm9tICcuL3Jvdy1zZWxlY3Rpb24vcm93LWNvbnN1bWVyJztcbmltcG9ydCB3aXRoUm93RXhwYW5zaW9uIGZyb20gJy4vcm93LWV4cGFuZC9yb3ctY29uc3VtZXInO1xuXG5jbGFzcyBCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qge1xuICAgICAga2V5RmllbGQsXG4gICAgICBjZWxsRWRpdCxcbiAgICAgIHNlbGVjdFJvdyxcbiAgICAgIGV4cGFuZFJvd1xuICAgIH0gPSBwcm9wcztcblxuICAgIC8vIENvbnN0cnVjdCBFZGl0aW5nIENlbGwgQ29tcG9uZW50XG4gICAgaWYgKGNlbGxFZGl0LmNyZWF0ZUNvbnRleHQpIHtcbiAgICAgIHRoaXMuRWRpdGluZ0NlbGwgPSBjZWxsRWRpdC5jcmVhdGVFZGl0aW5nQ2VsbChfLCBjZWxsRWRpdC5vcHRpb25zLm9uU3RhcnRFZGl0KTtcbiAgICB9XG5cbiAgICAvLyBDb25zdHJ1Y3QgUm93IENvbXBvbmVudFxuICAgIGxldCBSb3dDb21wb25lbnQgPSBTaW1wbGVSb3c7XG4gICAgY29uc3Qgc2VsZWN0Um93RW5hYmxlZCA9IHNlbGVjdFJvdy5tb2RlICE9PSBDb25zdC5ST1dfU0VMRUNUX0RJU0FCTEVEO1xuICAgIGNvbnN0IGV4cGFuZFJvd0VuYWJsZWQgPSAhIWV4cGFuZFJvdy5yZW5kZXJlcjtcblxuICAgIGlmIChleHBhbmRSb3dFbmFibGVkKSB7XG4gICAgICBSb3dDb21wb25lbnQgPSB3aXRoUm93RXhwYW5zaW9uKFJvd0FnZ3JlZ2F0b3IpO1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RSb3dFbmFibGVkKSB7XG4gICAgICBSb3dDb21wb25lbnQgPSB3aXRoUm93U2VsZWN0aW9uKGV4cGFuZFJvd0VuYWJsZWQgPyBSb3dDb21wb25lbnQgOiBSb3dBZ2dyZWdhdG9yKTtcbiAgICB9XG5cbiAgICBpZiAoY2VsbEVkaXQuY3JlYXRlQ29udGV4dCkge1xuICAgICAgUm93Q29tcG9uZW50ID0gY2VsbEVkaXQud2l0aFJvd0xldmVsQ2VsbEVkaXQoUm93Q29tcG9uZW50LCBzZWxlY3RSb3dFbmFibGVkLCBrZXlGaWVsZCwgXyk7XG4gICAgfVxuICAgIHRoaXMuUm93Q29tcG9uZW50ID0gUm93Q29tcG9uZW50O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbHVtbnMsXG4gICAgICBkYXRhLFxuICAgICAgdGFiSW5kZXhDZWxsLFxuICAgICAga2V5RmllbGQsXG4gICAgICBpc0VtcHR5LFxuICAgICAgbm9EYXRhSW5kaWNhdGlvbixcbiAgICAgIHZpc2libGVDb2x1bW5TaXplLFxuICAgICAgY2VsbEVkaXQsXG4gICAgICBzZWxlY3RSb3csXG4gICAgICByb3dTdHlsZSxcbiAgICAgIHJvd0NsYXNzZXMsXG4gICAgICByb3dFdmVudHMsXG4gICAgICBleHBhbmRSb3csXG4gICAgICBjbGFzc05hbWVcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBjb250ZW50O1xuXG4gICAgaWYgKGlzRW1wdHkpIHtcbiAgICAgIGNvbnN0IGluZGljYXRpb24gPSBfLmlzRnVuY3Rpb24obm9EYXRhSW5kaWNhdGlvbikgPyBub0RhdGFJbmRpY2F0aW9uKCkgOiBub0RhdGFJbmRpY2F0aW9uO1xuICAgICAgaWYgKCFpbmRpY2F0aW9uKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgY29udGVudCA9IDxSb3dTZWN0aW9uIGNvbnRlbnQ9eyBpbmRpY2F0aW9uIH0gY29sU3Bhbj17IHZpc2libGVDb2x1bW5TaXplIH0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlbGVjdFJvd0VuYWJsZWQgPSBzZWxlY3RSb3cubW9kZSAhPT0gQ29uc3QuUk9XX1NFTEVDVF9ESVNBQkxFRDtcbiAgICAgIGNvbnN0IGV4cGFuZFJvd0VuYWJsZWQgPSAhIWV4cGFuZFJvdy5yZW5kZXJlcjtcblxuICAgICAgY29uc3QgYWRkaXRpb25hbFJvd1Byb3BzID0ge307XG5cbiAgICAgIGlmIChjZWxsRWRpdC5jcmVhdGVDb250ZXh0KSB7XG4gICAgICAgIGFkZGl0aW9uYWxSb3dQcm9wcy5FZGl0aW5nQ2VsbENvbXBvbmVudCA9IHRoaXMuRWRpdGluZ0NlbGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3RSb3dFbmFibGVkIHx8IGV4cGFuZFJvd0VuYWJsZWQpIHtcbiAgICAgICAgYWRkaXRpb25hbFJvd1Byb3BzLmV4cGFuZFJvdyA9IGV4cGFuZFJvdztcbiAgICAgICAgYWRkaXRpb25hbFJvd1Byb3BzLnNlbGVjdFJvdyA9IHNlbGVjdFJvdztcbiAgICAgIH1cblxuICAgICAgY29udGVudCA9IGRhdGEubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IF8uZ2V0KHJvdywga2V5RmllbGQpO1xuICAgICAgICBjb25zdCBiYXNlUm93UHJvcHMgPSB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHJvdyxcbiAgICAgICAgICB0YWJJbmRleENlbGwsXG4gICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICBrZXlGaWVsZCxcbiAgICAgICAgICBjZWxsRWRpdCxcbiAgICAgICAgICB2YWx1ZToga2V5LFxuICAgICAgICAgIHJvd0luZGV4OiBpbmRleCxcbiAgICAgICAgICB2aXNpYmxlQ29sdW1uU2l6ZSxcbiAgICAgICAgICBhdHRyczogcm93RXZlbnRzIHx8IHt9LFxuICAgICAgICAgIC4uLmFkZGl0aW9uYWxSb3dQcm9wc1xuICAgICAgICB9O1xuXG4gICAgICAgIGJhc2VSb3dQcm9wcy5zdHlsZSA9IF8uaXNGdW5jdGlvbihyb3dTdHlsZSkgPyByb3dTdHlsZShyb3csIGluZGV4KSA6IHJvd1N0eWxlO1xuICAgICAgICBiYXNlUm93UHJvcHMuY2xhc3NOYW1lID0gKF8uaXNGdW5jdGlvbihyb3dDbGFzc2VzKSA/IHJvd0NsYXNzZXMocm93LCBpbmRleCkgOiByb3dDbGFzc2VzKTtcblxuICAgICAgICByZXR1cm4gPHRoaXMuUm93Q29tcG9uZW50IHsgLi4uYmFzZVJvd1Byb3BzIH0gLz47XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRib2R5IGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9PnsgY29udGVudCB9PC90Ym9keT5cbiAgICApO1xuICB9XG59XG5cbkJvZHkucHJvcFR5cGVzID0ge1xuICBrZXlGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHNlbGVjdFJvdzogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2JvZHkuanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IHJlYWN0L25vLWFycmF5LWluZGV4LWtleTogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBSb3dQdXJlQ29udGVudCBmcm9tICcuL3Jvdy1wdXJlLWNvbnRlbnQnO1xuaW1wb3J0IGV2ZW50RGVsZWdhdGVyIGZyb20gJy4vZXZlbnQtZGVsZWdhdGVyJztcbmltcG9ydCBzaG91bGRVcGRhdGVyIGZyb20gJy4vc2hvdWxkLXVwZGF0ZXInO1xuXG5jbGFzcyBTaW1wbGVSb3cgZXh0ZW5kcyBzaG91bGRVcGRhdGVyKGV2ZW50RGVsZWdhdGVyKENvbXBvbmVudCkpIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zaG91bGRVcGRhdGVSb3dDb250ZW50ID0gZmFsc2U7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgdGhpcy5zaG91bGRVcGRhdGVSb3dDb250ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5zaG91bGRVcGRhdGVSb3dDb250ZW50ID0gdGhpcy5zaG91bGRSb3dDb250ZW50VXBkYXRlKG5leHRQcm9wcyk7XG4gICAgaWYgKHRoaXMuc2hvdWxkVXBkYXRlUm93Q29udGVudCkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gdGhpcy5zaG91bGRVcGRhdGVkQnlTZWxmUHJvcHMobmV4dFByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZSxcbiAgICAgIGF0dHJzLFxuICAgICAgdmlzaWJsZUNvbHVtblNpemUsXG4gICAgICB0YWJJbmRleENlbGwsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdHJBdHRycyA9IHRoaXMuZGVsZWdhdGUoYXR0cnMpO1xuICAgIGNvbnN0IHRhYkluZGV4U3RhcnQgPSAodGhpcy5wcm9wcy5yb3dJbmRleCAqIHZpc2libGVDb2x1bW5TaXplKSArIDE7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRyIHN0eWxlPXsgc3R5bGUgfSBjbGFzc05hbWU9eyBjbGFzc05hbWUgfSB7IC4uLnRyQXR0cnMgfT5cbiAgICAgICAgPFJvd1B1cmVDb250ZW50XG4gICAgICAgICAgc2hvdWxkVXBkYXRlPXsgdGhpcy5zaG91bGRVcGRhdGVSb3dDb250ZW50IH1cbiAgICAgICAgICB0YWJJbmRleFN0YXJ0PXsgdGFiSW5kZXhDZWxsID8gdGFiSW5kZXhTdGFydCA6IC0xIH1cbiAgICAgICAgICB7IC4uLnJlc3QgfVxuICAgICAgICAvPlxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG59XG5cblNpbXBsZVJvdy5wcm9wVHlwZXMgPSB7XG4gIHJvdzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXR0cnM6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cblNpbXBsZVJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGVkaXRhYmxlOiB0cnVlLFxuICBzdHlsZToge30sXG4gIGNsYXNzTmFtZTogbnVsbCxcbiAgYXR0cnM6IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVSb3c7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cvc2ltcGxlLXJvdy5qcyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IGV2ZW50RGVsZWdhdGVyIGZyb20gJy4vY2VsbC1ldmVudC1kZWxlZ2F0ZXInO1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5cbmNsYXNzIENlbGwgZXh0ZW5kcyBldmVudERlbGVnYXRlcihDb21wb25lbnQpIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jcmVhdGVIYW5kbGVFZGl0aW5nQ2VsbCA9IHRoaXMuY3JlYXRlSGFuZGxlRWRpdGluZ0NlbGwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBsZXQgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgaWYgKG5leHRQcm9wcy5jb2x1bW4uaXNEdW1teUZpZWxkKSB7XG4gICAgICBzaG91bGRVcGRhdGUgPSAhXy5pc0VxdWFsKHRoaXMucHJvcHMucm93LCBuZXh0UHJvcHMucm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvdWxkVXBkYXRlID1cbiAgICAgICAgXy5nZXQodGhpcy5wcm9wcy5yb3csIHRoaXMucHJvcHMuY29sdW1uLmRhdGFGaWVsZClcbiAgICAgICAgICAhPT0gXy5nZXQobmV4dFByb3BzLnJvdywgbmV4dFByb3BzLmNvbHVtbi5kYXRhRmllbGQpO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRVcGRhdGUpIHJldHVybiB0cnVlO1xuXG4gICAgLy8gaWYgKG5leHRQcm9wcy5mb3JtYXR0ZXIpXG5cbiAgICBzaG91bGRVcGRhdGUgPVxuICAgICAgKG5leHRQcm9wcy5jb2x1bW4uZm9ybWF0dGVyID8gIV8uaXNFcXVhbCh0aGlzLnByb3BzLnJvdywgbmV4dFByb3BzLnJvdykgOiBmYWxzZSkgfHxcbiAgICAgIHRoaXMucHJvcHMuY29sdW1uLmhpZGRlbiAhPT0gbmV4dFByb3BzLmNvbHVtbi5oaWRkZW4gfHxcbiAgICAgIHRoaXMucHJvcHMuY29sdW1uLmlzRHVtbXlGaWVsZCAhPT0gbmV4dFByb3BzLmNvbHVtbi5pc0R1bW15RmllbGQgfHxcbiAgICAgIHRoaXMucHJvcHMucm93SW5kZXggIT09IG5leHRQcm9wcy5yb3dJbmRleCB8fFxuICAgICAgdGhpcy5wcm9wcy5jb2x1bW5JbmRleCAhPT0gbmV4dFByb3BzLmNvbHVtbkluZGV4IHx8XG4gICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZSAhPT0gbmV4dFByb3BzLmNsYXNzTmFtZSB8fFxuICAgICAgdGhpcy5wcm9wcy50aXRsZSAhPT0gbmV4dFByb3BzLnRpdGxlIHx8XG4gICAgICB0aGlzLnByb3BzLmVkaXRhYmxlICE9PSBuZXh0UHJvcHMuZWRpdGFibGUgfHxcbiAgICAgIHRoaXMucHJvcHMuY2xpY2tUb0VkaXQgIT09IG5leHRQcm9wcy5jbGlja1RvRWRpdCB8fFxuICAgICAgdGhpcy5wcm9wcy5kYmNsaWNrVG9FZGl0ICE9PSBuZXh0UHJvcHMuZGJjbGlja1RvRWRpdCB8fFxuICAgICAgIV8uaXNFcXVhbCh0aGlzLnByb3BzLnN0eWxlLCBuZXh0UHJvcHMuc3R5bGUpIHx8XG4gICAgICAhXy5pc0VxdWFsKHRoaXMucHJvcHMuY29sdW1uLmZvcm1hdEV4dHJhRGF0YSwgbmV4dFByb3BzLmNvbHVtbi5mb3JtYXRFeHRyYURhdGEpIHx8XG4gICAgICAhXy5pc0VxdWFsKHRoaXMucHJvcHMuY29sdW1uLmV2ZW50cywgbmV4dFByb3BzLmNvbHVtbi5ldmVudHMpIHx8XG4gICAgICAhXy5pc0VxdWFsKHRoaXMucHJvcHMuY29sdW1uLmF0dHJzLCBuZXh0UHJvcHMuY29sdW1uLmF0dHJzKSB8fFxuICAgICAgdGhpcy5wcm9wcy50YWJJbmRleCAhPT0gbmV4dFByb3BzLnRhYkluZGV4O1xuICAgIHJldHVybiBzaG91bGRVcGRhdGU7XG4gIH1cblxuICBjcmVhdGVIYW5kbGVFZGl0aW5nQ2VsbCA9IG9yaWdpbkZ1bmMgPT4gKGUpID0+IHtcbiAgICBjb25zdCB7IG9uU3RhcnQsIHJvd0luZGV4LCBjb2x1bW5JbmRleCwgY2xpY2tUb0VkaXQsIGRiY2xpY2tUb0VkaXQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKChjbGlja1RvRWRpdCB8fCBkYmNsaWNrVG9FZGl0KSAmJiBfLmlzRnVuY3Rpb24ob3JpZ2luRnVuYykpIHtcbiAgICAgIG9yaWdpbkZ1bmMoZSk7XG4gICAgfVxuICAgIGlmIChvblN0YXJ0KSB7XG4gICAgICBvblN0YXJ0KHJvd0luZGV4LCBjb2x1bW5JbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHJvdyxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgY29sdW1uLFxuICAgICAgY29sdW1uSW5kZXgsXG4gICAgICBvblN0YXJ0LFxuICAgICAgZWRpdGFibGUsXG4gICAgICBjbGlja1RvRWRpdCxcbiAgICAgIGRiY2xpY2tUb0VkaXQsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YUZpZWxkLFxuICAgICAgZm9ybWF0dGVyLFxuICAgICAgZm9ybWF0RXh0cmFEYXRhXG4gICAgfSA9IGNvbHVtbjtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZGVsZWdhdGUoeyAuLi5yZXN0IH0pO1xuICAgIGxldCBjb250ZW50ID0gY29sdW1uLmlzRHVtbXlGaWVsZCA/IG51bGwgOiBfLmdldChyb3csIGRhdGFGaWVsZCk7XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBjb250ZW50ID0gY29sdW1uLmZvcm1hdHRlcihjb250ZW50LCByb3csIHJvd0luZGV4LCBmb3JtYXRFeHRyYURhdGEpO1xuICAgIH1cblxuICAgIGlmIChjbGlja1RvRWRpdCAmJiBlZGl0YWJsZSkge1xuICAgICAgYXR0cnMub25DbGljayA9IHRoaXMuY3JlYXRlSGFuZGxlRWRpdGluZ0NlbGwoYXR0cnMub25DbGljayk7XG4gICAgfSBlbHNlIGlmIChkYmNsaWNrVG9FZGl0ICYmIGVkaXRhYmxlKSB7XG4gICAgICBhdHRycy5vbkRvdWJsZUNsaWNrID0gdGhpcy5jcmVhdGVIYW5kbGVFZGl0aW5nQ2VsbChhdHRycy5vbkRvdWJsZUNsaWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRkIHsgLi4uYXR0cnMgfT5cbiAgICAgICAgeyB0eXBlb2YgY29udGVudCA9PT0gJ2Jvb2xlYW4nID8gYCR7Y29udGVudH1gIDogY29udGVudCB9XG4gICAgICA8L3RkPlxuICAgICk7XG4gIH1cbn1cblxuQ2VsbC5wcm9wVHlwZXMgPSB7XG4gIHJvdzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjb2x1bW46IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY29sdW1uSW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2VsbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NlbGwuanMiLCIvKiBlc2xpbnQgY2xhc3MtbWV0aG9kcy11c2UtdGhpczogMCAqL1xuLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbi8qIGVzbGludCBuby1wbHVzcGx1czogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgRXhwYW5kQ2VsbCBmcm9tICcuLi9yb3ctZXhwYW5kL2V4cGFuZC1jZWxsJztcbmltcG9ydCBTZWxlY3Rpb25DZWxsIGZyb20gJy4uL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWNlbGwnO1xuaW1wb3J0IHNob3VsZFVwZGF0ZXIgZnJvbSAnLi9zaG91bGQtdXBkYXRlcic7XG5pbXBvcnQgZXZlbnREZWxlZ2F0ZXIgZnJvbSAnLi9ldmVudC1kZWxlZ2F0ZXInO1xuaW1wb3J0IFJvd1B1cmVDb250ZW50IGZyb20gJy4vcm93LXB1cmUtY29udGVudCc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vY29uc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3dBZ2dyZWdhdG9yIGV4dGVuZHMgc2hvdWxkVXBkYXRlcihldmVudERlbGVnYXRlcihSZWFjdC5Db21wb25lbnQpKSB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYXR0cnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXR0cnM6IHt9LFxuICAgIHN0eWxlOiB7fVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jbGlja051bSA9IDA7XG4gICAgdGhpcy5zaG91bGRVcGRhdGVSb3dDb250ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5jcmVhdGVDbGlja0V2ZW50SGFuZGxlciA9IHRoaXMuY3JlYXRlQ2xpY2tFdmVudEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnNlbGVjdGVkICE9PSBuZXh0UHJvcHMuc2VsZWN0ZWQgfHxcbiAgICAgIHRoaXMucHJvcHMuZXhwYW5kZWQgIT09IG5leHRQcm9wcy5leHBhbmRlZCB8fFxuICAgICAgdGhpcy5wcm9wcy5leHBhbmRhYmxlICE9PSBuZXh0UHJvcHMuZXhwYW5kYWJsZSB8fFxuICAgICAgdGhpcy5wcm9wcy5zZWxlY3RhYmxlICE9PSBuZXh0UHJvcHMuc2VsZWN0YWJsZSB8fFxuICAgICAgdGhpcy5wcm9wcy5zZWxlY3RSb3cuaGlkZVNlbGVjdENvbHVtbiAhPT0gbmV4dFByb3BzLnNlbGVjdFJvdy5oaWRlU2VsZWN0Q29sdW1uIHx8XG4gICAgICB0aGlzLnNob3VsZFVwZGF0ZWRCeVNlbGZQcm9wcyhuZXh0UHJvcHMpXG4gICAgKSB7XG4gICAgICB0aGlzLnNob3VsZFVwZGF0ZVJvd0NvbnRlbnQgPSB0aGlzLnNob3VsZFJvd0NvbnRlbnRVcGRhdGUobmV4dFByb3BzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnNob3VsZFVwZGF0ZVJvd0NvbnRlbnQgPSB0aGlzLnNob3VsZFJvd0NvbnRlbnRVcGRhdGUobmV4dFByb3BzKTtcblxuICAgIHJldHVybiB0aGlzLnNob3VsZFVwZGF0ZVJvd0NvbnRlbnQ7XG4gIH1cblxuICBpc1JlbmRlckZ1bmN0aW9uQ29sdW1uSW5MZWZ0KFxuICAgIHBvc2l0aW9uID0gQ29uc3QuSU5ESUNBVE9SX1BPU0lUSU9OX0xFRlRcbiAgKSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uID09PSBDb25zdC5JTkRJQ0FUT1JfUE9TSVRJT05fTEVGVDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICByb3csXG4gICAgICBjb2x1bW5zLFxuICAgICAga2V5RmllbGQsXG4gICAgICByb3dJbmRleCxcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYXR0cnMsXG4gICAgICBzZWxlY3RSb3csXG4gICAgICBleHBhbmRSb3csXG4gICAgICBleHBhbmRlZCxcbiAgICAgIGV4cGFuZGFibGUsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIHNlbGVjdGFibGUsXG4gICAgICB2aXNpYmxlQ29sdW1uU2l6ZSxcbiAgICAgIHRhYkluZGV4Q2VsbCxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBrZXkgPSBfLmdldChyb3csIGtleUZpZWxkKTtcbiAgICBjb25zdCB7IGhpZGVTZWxlY3RDb2x1bW4sIHNlbGVjdENvbHVtblBvc2l0aW9uLCBjbGlja1RvU2VsZWN0IH0gPSBzZWxlY3RSb3c7XG4gICAgY29uc3QgeyBzaG93RXhwYW5kQ29sdW1uLCBleHBhbmRDb2x1bW5Qb3NpdGlvbiB9ID0gZXhwYW5kUm93O1xuXG4gICAgY29uc3QgbmV3QXR0cnMgPSB0aGlzLmRlbGVnYXRlKHsgLi4uYXR0cnMgfSk7XG4gICAgaWYgKGNsaWNrVG9TZWxlY3QgfHwgISFleHBhbmRSb3cucmVuZGVyZXIpIHtcbiAgICAgIG5ld0F0dHJzLm9uQ2xpY2sgPSB0aGlzLmNyZWF0ZUNsaWNrRXZlbnRIYW5kbGVyKG5ld0F0dHJzLm9uQ2xpY2spO1xuICAgIH1cblxuICAgIGxldCB0YWJJbmRleFN0YXJ0ID0gKHJvd0luZGV4ICogdmlzaWJsZUNvbHVtblNpemUpICsgMTtcblxuICAgIGNvbnN0IGNoaWxkcmVucyA9IFsoXG4gICAgICA8Um93UHVyZUNvbnRlbnRcbiAgICAgICAga2V5PVwicm93XCJcbiAgICAgICAgcm93PXsgcm93IH1cbiAgICAgICAgY29sdW1ucz17IGNvbHVtbnMgfVxuICAgICAgICBrZXlGaWVsZD17IGtleUZpZWxkIH1cbiAgICAgICAgcm93SW5kZXg9eyByb3dJbmRleCB9XG4gICAgICAgIHNob3VsZFVwZGF0ZT17IHRoaXMuc2hvdWxkVXBkYXRlUm93Q29udGVudCB9XG4gICAgICAgIHRhYkluZGV4U3RhcnQ9eyB0YWJJbmRleENlbGwgPyB0YWJJbmRleFN0YXJ0IDogLTEgfVxuICAgICAgICB7IC4uLnJlc3QgfVxuICAgICAgLz5cbiAgICApXTtcblxuICAgIGlmICghaGlkZVNlbGVjdENvbHVtbikge1xuICAgICAgY29uc3Qgc2VsZWN0Q2VsbCA9IChcbiAgICAgICAgPFNlbGVjdGlvbkNlbGxcbiAgICAgICAgICB7IC4uLnNlbGVjdFJvdyB9XG4gICAgICAgICAga2V5PVwic2VsZWN0aW9uLWNlbGxcIlxuICAgICAgICAgIHJvd0tleT17IGtleSB9XG4gICAgICAgICAgcm93SW5kZXg9eyByb3dJbmRleCB9XG4gICAgICAgICAgc2VsZWN0ZWQ9eyBzZWxlY3RlZCB9XG4gICAgICAgICAgZGlzYWJsZWQ9eyAhc2VsZWN0YWJsZSB9XG4gICAgICAgICAgdGFiSW5kZXg9eyB0YWJJbmRleENlbGwgPyB0YWJJbmRleFN0YXJ0KysgOiAtMSB9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgICAgaWYgKHRoaXMuaXNSZW5kZXJGdW5jdGlvbkNvbHVtbkluTGVmdChzZWxlY3RDb2x1bW5Qb3NpdGlvbikpIHtcbiAgICAgICAgY2hpbGRyZW5zLnVuc2hpZnQoc2VsZWN0Q2VsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZHJlbnMucHVzaChzZWxlY3RDZWxsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2hvd0V4cGFuZENvbHVtbikge1xuICAgICAgY29uc3QgZXhwYW5kQ2VsbCA9IChcbiAgICAgICAgPEV4cGFuZENlbGxcbiAgICAgICAgICB7IC4uLmV4cGFuZFJvdyB9XG4gICAgICAgICAga2V5PVwiZXhwYW5kLWNlbGxcIlxuICAgICAgICAgIHJvd0tleT17IGtleSB9XG4gICAgICAgICAgcm93SW5kZXg9eyByb3dJbmRleCB9XG4gICAgICAgICAgZXhwYW5kZWQ9eyBleHBhbmRlZCB9XG4gICAgICAgICAgZXhwYW5kYWJsZT17IGV4cGFuZGFibGUgfVxuICAgICAgICAgIHRhYkluZGV4PXsgdGFiSW5kZXhDZWxsID8gdGFiSW5kZXhTdGFydCsrIDogLTEgfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICAgIGlmICh0aGlzLmlzUmVuZGVyRnVuY3Rpb25Db2x1bW5JbkxlZnQoZXhwYW5kQ29sdW1uUG9zaXRpb24pKSB7XG4gICAgICAgIGNoaWxkcmVucy51bnNoaWZ0KGV4cGFuZENlbGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGRyZW5zLnB1c2goZXhwYW5kQ2VsbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0clxuICAgICAgICBzdHlsZT17IHN0eWxlIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cbiAgICAgICAgeyAuLi5uZXdBdHRycyB9XG4gICAgICA+XG4gICAgICAgIHsgY2hpbGRyZW5zIH1cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L2FnZ3JlZ2F0ZS1yb3cuanMiLCIvKiBlc2xpbnRcbiAgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwXG4gIGpzeC1hMTF5L25vLW5vbmludGVyYWN0aXZlLWVsZW1lbnQtaW50ZXJhY3Rpb25zOiAwXG4qL1xuLyogZXNsaW50IG5vLW5lc3RlZC10ZXJuYXJ5OiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwYW5kQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgcm93S2V5OiBQcm9wVHlwZXMuYW55LFxuICAgIGV4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGV4cGFuZGFibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgb25Sb3dFeHBhbmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZXhwYW5kQ29sdW1uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgY29uc3Qgc2hvdWxkVXBkYXRlID1cbiAgICAgIHRoaXMucHJvcHMucm93SW5kZXggIT09IG5leHRQcm9wcy5yb3dJbmRleCB8fFxuICAgICAgdGhpcy5wcm9wcy5leHBhbmRlZCAhPT0gbmV4dFByb3BzLmV4cGFuZGVkIHx8XG4gICAgICB0aGlzLnByb3BzLnJvd0tleSAhPT0gbmV4dFByb3BzLnJvd0tleSB8fFxuICAgICAgdGhpcy5wcm9wcy50YWJJbmRleCAhPT0gbmV4dFByb3BzLnRhYkluZGV4O1xuXG4gICAgcmV0dXJuIHNob3VsZFVwZGF0ZTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBjb25zdCB7IHJvd0tleSwgZXhwYW5kZWQsIG9uUm93RXhwYW5kLCByb3dJbmRleCB9ID0gdGhpcy5wcm9wcztcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIG9uUm93RXhwYW5kKHJvd0tleSwgIWV4cGFuZGVkLCByb3dJbmRleCwgZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBleHBhbmRlZCwgZXhwYW5kYWJsZSwgZXhwYW5kQ29sdW1uUmVuZGVyZXIsIHRhYkluZGV4LCByb3dLZXkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYXR0cnMgPSB7fTtcbiAgICBpZiAodGFiSW5kZXggIT09IC0xKSBhdHRycy50YWJJbmRleCA9IHRhYkluZGV4O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJleHBhbmQtY2VsbFwiIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNsaWNrIH0geyAuLi5hdHRycyB9PlxuICAgICAgICB7XG4gICAgICAgICAgZXhwYW5kQ29sdW1uUmVuZGVyZXIgPyBleHBhbmRDb2x1bW5SZW5kZXJlcih7XG4gICAgICAgICAgICBleHBhbmRhYmxlLFxuICAgICAgICAgICAgZXhwYW5kZWQsXG4gICAgICAgICAgICByb3dLZXlcbiAgICAgICAgICB9KSA6IChleHBhbmRhYmxlID8gKGV4cGFuZGVkID8gJygtKScgOiAnKCspJykgOiAnJylcbiAgICAgICAgfVxuICAgICAgPC90ZD5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1jZWxsLmpzIiwiLyogZXNsaW50XG4gIHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMFxuICBqc3gtYTExeS9uby1ub25pbnRlcmFjdGl2ZS1lbGVtZW50LWludGVyYWN0aW9uczogMFxuKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEJvb3RzdHJhcENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9ib290c3RyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3Rpb25DZWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBtb2RlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcm93S2V5OiBQcm9wVHlwZXMuYW55LFxuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvblJvd1NlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNsaWNrVG9TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlbGVjdGlvblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzZWxlY3RDb2x1bW5TdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHNob3VsZFVwZGF0ZSA9XG4gICAgICB0aGlzLnByb3BzLnJvd0luZGV4ICE9PSBuZXh0UHJvcHMucm93SW5kZXggfHxcbiAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWQgIT09IG5leHRQcm9wcy5zZWxlY3RlZCB8fFxuICAgICAgdGhpcy5wcm9wcy5kaXNhYmxlZCAhPT0gbmV4dFByb3BzLmRpc2FibGVkIHx8XG4gICAgICB0aGlzLnByb3BzLnJvd0tleSAhPT0gbmV4dFByb3BzLnJvd0tleSB8fFxuICAgICAgdGhpcy5wcm9wcy50YWJJbmRleCAhPT0gbmV4dFByb3BzLnRhYkluZGV4IHx8XG4gICAgICB0aGlzLnByb3BzLnNlbGVjdENvbHVtblN0eWxlICE9PSBuZXh0UHJvcHMuc2VsZWN0Q29sdW1uU3R5bGU7XG5cbiAgICByZXR1cm4gc2hvdWxkVXBkYXRlO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1vZGU6IGlucHV0VHlwZSxcbiAgICAgIHJvd0tleSxcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgb25Sb3dTZWxlY3QsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHJvd0luZGV4XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoZGlzYWJsZWQpIHJldHVybjtcblxuICAgIGNvbnN0IGNoZWNrZWQgPSBpbnB1dFR5cGUgPT09IENvbnN0LlJPV19TRUxFQ1RfU0lOR0xFXG4gICAgICA/IHRydWVcbiAgICAgIDogIXNlbGVjdGVkO1xuXG4gICAgb25Sb3dTZWxlY3Qocm93S2V5LCBjaGVja2VkLCByb3dJbmRleCwgZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcm93S2V5LFxuICAgICAgbW9kZTogaW5wdXRUeXBlLFxuICAgICAgc2VsZWN0ZWQsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHRhYkluZGV4LFxuICAgICAgcm93SW5kZXgsXG4gICAgICBzZWxlY3Rpb25SZW5kZXJlcixcbiAgICAgIHNlbGVjdENvbHVtblN0eWxlXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBhdHRycyA9IHt9O1xuICAgIGlmICh0YWJJbmRleCAhPT0gLTEpIGF0dHJzLnRhYkluZGV4ID0gdGFiSW5kZXg7XG5cbiAgICBhdHRycy5zdHlsZSA9IF8uaXNGdW5jdGlvbihzZWxlY3RDb2x1bW5TdHlsZSkgP1xuICAgICAgc2VsZWN0Q29sdW1uU3R5bGUoe1xuICAgICAgICBjaGVja2VkOiBzZWxlY3RlZCxcbiAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgIHJvd0luZGV4LFxuICAgICAgICByb3dLZXlcbiAgICAgIH0pIDpcbiAgICAgIHNlbGVjdENvbHVtblN0eWxlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb290c3RyYXBDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7XG4gICAgICAgICAgKHsgYm9vdHN0cmFwNCB9KSA9PiAoXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2VsZWN0aW9uLWNlbGxcIiBvbkNsaWNrPXsgdGhpcy5oYW5kbGVDbGljayB9IHsgLi4uYXR0cnMgfT5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvblJlbmRlcmVyID8gc2VsZWN0aW9uUmVuZGVyZXIoe1xuICAgICAgICAgICAgICAgICAgbW9kZTogaW5wdXRUeXBlLFxuICAgICAgICAgICAgICAgICAgY2hlY2tlZDogc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgIHJvd0luZGV4LFxuICAgICAgICAgICAgICAgICAgcm93S2V5XG4gICAgICAgICAgICAgICAgfSkgOiAoXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17IGlucHV0VHlwZSB9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBzZWxlY3RlZCB9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXsgZGlzYWJsZWQgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBib290c3RyYXA0ID8gJ3NlbGVjdGlvbi1pbnB1dC00JyA6ICcnIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoKSA9PiB7fSB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvQm9vdHN0cmFwQ29udGV4dC5Db25zdW1lcj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1jZWxsLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFJvd1NlY3Rpb24gPSAoeyBjb250ZW50LCBjb2xTcGFuIH0pID0+IChcbiAgPHRyPlxuICAgIDx0ZFxuICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICBjb2xTcGFuPXsgY29sU3BhbiB9XG4gICAgICBjbGFzc05hbWU9XCJyZWFjdC1icy10YWJsZS1uby1kYXRhXCJcbiAgICA+XG4gICAgICB7IGNvbnRlbnQgfVxuICAgIDwvdGQ+XG4gIDwvdHI+XG4pO1xuXG5Sb3dTZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgY29udGVudDogUHJvcFR5cGVzLmFueSxcbiAgY29sU3BhbjogUHJvcFR5cGVzLm51bWJlclxufTtcblxuUm93U2VjdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRlbnQ6IG51bGwsXG4gIGNvbFNwYW46IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvd1NlY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cvcm93LXNlY3Rpb24uanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBTZWxlY3Rpb25Db250ZXh0IGZyb20gJy4uL2NvbnRleHRzL3NlbGVjdGlvbi1jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgKENvbXBvbmVudCkgPT4ge1xuICBjb25zdCByZW5kZXJXaXRoU2VsZWN0aW9uID0gKHByb3BzLCBzZWxlY3RSb3cpID0+IHtcbiAgICBjb25zdCBrZXkgPSBwcm9wcy52YWx1ZTtcbiAgICBjb25zdCBzZWxlY3RlZCA9IF8uY29udGFpbnMoc2VsZWN0Um93LnNlbGVjdGVkLCBrZXkpO1xuICAgIGNvbnN0IHNlbGVjdGFibGUgPSAhc2VsZWN0Um93Lm5vblNlbGVjdGFibGUgfHwgIV8uY29udGFpbnMoc2VsZWN0Um93Lm5vblNlbGVjdGFibGUsIGtleSk7XG4gICAgY29uc3Qgbm90U2VsZWN0YWJsZSA9IF8uY29udGFpbnMoc2VsZWN0Um93Lm5vblNlbGVjdGFibGUsIGtleSk7XG5cbiAgICBsZXQge1xuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc05hbWVcbiAgICB9ID0gcHJvcHM7XG5cbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkU3R5bGUgPSBfLmlzRnVuY3Rpb24oc2VsZWN0Um93LnN0eWxlKVxuICAgICAgICA/IHNlbGVjdFJvdy5zdHlsZShwcm9wcy5yb3csIHByb3BzLnJvd0luZGV4KVxuICAgICAgICA6IHNlbGVjdFJvdy5zdHlsZTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRDbGFzc2VzID0gXy5pc0Z1bmN0aW9uKHNlbGVjdFJvdy5jbGFzc2VzKVxuICAgICAgICA/IHNlbGVjdFJvdy5jbGFzc2VzKHByb3BzLnJvdywgcHJvcHMucm93SW5kZXgpXG4gICAgICAgIDogc2VsZWN0Um93LmNsYXNzZXM7XG5cbiAgICAgIHN0eWxlID0ge1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgLi4uc2VsZWN0ZWRTdHlsZVxuICAgICAgfTtcbiAgICAgIGNsYXNzTmFtZSA9IGNzKGNsYXNzTmFtZSwgc2VsZWN0ZWRDbGFzc2VzKSB8fCB1bmRlZmluZWQ7XG5cbiAgICAgIGlmIChzZWxlY3RSb3cuYmdDb2xvcikge1xuICAgICAgICBzdHlsZSA9IHN0eWxlIHx8IHt9O1xuICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBfLmlzRnVuY3Rpb24oc2VsZWN0Um93LmJnQ29sb3IpXG4gICAgICAgICAgPyBzZWxlY3RSb3cuYmdDb2xvcihwcm9wcy5yb3csIHByb3BzLnJvd0luZGV4KVxuICAgICAgICAgIDogc2VsZWN0Um93LmJnQ29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vdFNlbGVjdGFibGUpIHtcbiAgICAgIGNvbnN0IG5vdFNlbGVjdGFibGVTdHlsZSA9IF8uaXNGdW5jdGlvbihzZWxlY3RSb3cubm9uU2VsZWN0YWJsZVN0eWxlKVxuICAgICAgICA/IHNlbGVjdFJvdy5ub25TZWxlY3RhYmxlU3R5bGUocHJvcHMucm93LCBwcm9wcy5yb3dJbmRleClcbiAgICAgICAgOiBzZWxlY3RSb3cubm9uU2VsZWN0YWJsZVN0eWxlO1xuXG4gICAgICBjb25zdCBub3RTZWxlY3RhYmxlQ2xhc3NlcyA9IF8uaXNGdW5jdGlvbihzZWxlY3RSb3cubm9uU2VsZWN0YWJsZUNsYXNzZXMpXG4gICAgICAgID8gc2VsZWN0Um93Lm5vblNlbGVjdGFibGVDbGFzc2VzKHByb3BzLnJvdywgcHJvcHMucm93SW5kZXgpXG4gICAgICAgIDogc2VsZWN0Um93Lm5vblNlbGVjdGFibGVDbGFzc2VzO1xuXG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIC4uLm5vdFNlbGVjdGFibGVTdHlsZVxuICAgICAgfTtcbiAgICAgIGNsYXNzTmFtZSA9IGNzKGNsYXNzTmFtZSwgbm90U2VsZWN0YWJsZUNsYXNzZXMpIHx8IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7IC4uLnByb3BzIH1cbiAgICAgICAgc3R5bGU9eyBzdHlsZSB9XG4gICAgICAgIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG4gICAgICAgIHNlbGVjdFJvdz17IHNlbGVjdFJvdyB9XG4gICAgICAgIHNlbGVjdGVkPXsgc2VsZWN0ZWQgfVxuICAgICAgICBzZWxlY3RhYmxlPXsgc2VsZWN0YWJsZSB9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgZnVuY3Rpb24gd2l0aENvbnN1bWVyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3Rpb25Db250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7IHNlbGVjdFJvdyA9PiByZW5kZXJXaXRoU2VsZWN0aW9uKHByb3BzLCBzZWxlY3RSb3cpIH1cbiAgICAgIDwvU2VsZWN0aW9uQ29udGV4dC5Db25zdW1lcj5cbiAgICApO1xuICB9XG5cbiAgd2l0aENvbnN1bWVyLmRpc3BsYXlOYW1lID0gJ1dpdGhTZWxlY3Rpb25Sb3dDb25zdW1lcic7XG4gIHJldHVybiB3aXRoQ29uc3VtZXI7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LXNlbGVjdGlvbi9yb3ctY29uc3VtZXIuanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBFeHBhbmRSb3cgZnJvbSAnLi9leHBhbmQtcm93JztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBFeHBhbnNpb25Db250ZXh0IGZyb20gJy4uL2NvbnRleHRzL3Jvdy1leHBhbmQtY29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IChDb21wb25lbnQpID0+IHtcbiAgY29uc3QgcmVuZGVyV2l0aEV4cGFuc2lvbiA9IChwcm9wcywgZXhwYW5kUm93KSA9PiB7XG4gICAgbGV0IHBhcmVudENsYXNzTmFtZSA9ICcnO1xuICAgIGxldCBjbGFzc05hbWUgPSAnJztcbiAgICBjb25zdCBrZXkgPSBwcm9wcy52YWx1ZTtcblxuICAgIGNvbnN0IGV4cGFuZGVkID0gXy5jb250YWlucyhleHBhbmRSb3cuZXhwYW5kZWQsIGtleSk7XG4gICAgY29uc3QgaXNDbG9zaW5nID0gXy5jb250YWlucyhleHBhbmRSb3cuaXNDbG9zaW5nLCBrZXkpO1xuICAgIGNvbnN0IGV4cGFuZGFibGUgPSAhZXhwYW5kUm93Lm5vbkV4cGFuZGFibGUgfHwgIV8uY29udGFpbnMoZXhwYW5kUm93Lm5vbkV4cGFuZGFibGUsIGtleSk7XG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICBwYXJlbnRDbGFzc05hbWUgPSBfLmlzRnVuY3Rpb24oZXhwYW5kUm93LnBhcmVudENsYXNzTmFtZSkgP1xuICAgICAgICBleHBhbmRSb3cucGFyZW50Q2xhc3NOYW1lKGV4cGFuZGVkLCBwcm9wcy5yb3csIHByb3BzLnJvd0luZGV4KSA6XG4gICAgICAgIChleHBhbmRSb3cucGFyZW50Q2xhc3NOYW1lIHx8ICcnKTtcblxuICAgICAgY2xhc3NOYW1lID0gXy5pc0Z1bmN0aW9uKGV4cGFuZFJvdy5jbGFzc05hbWUpID9cbiAgICAgICAgZXhwYW5kUm93LmNsYXNzTmFtZShleHBhbmRlZCwgcHJvcHMucm93LCBwcm9wcy5yb3dJbmRleCkgOlxuICAgICAgICAoZXhwYW5kUm93LmNsYXNzTmFtZSB8fCAnJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgeyAuLi5wcm9wcyB9XG4gICAgICAgIGtleT17IGtleSB9XG4gICAgICAgIGV4cGFuZGVkPXsgZXhwYW5kZWQgfVxuICAgICAgICBleHBhbmRhYmxlPXsgZXhwYW5kYWJsZSB9XG4gICAgICAgIGV4cGFuZFJvdz17IHsgLi4uZXhwYW5kUm93IH0gfVxuICAgICAgICBjbGFzc05hbWU9eyBjcyhwcm9wcy5jbGFzc05hbWUsIHBhcmVudENsYXNzTmFtZSkgfVxuICAgICAgLz4sXG4gICAgICBleHBhbmRlZCB8fCBpc0Nsb3NpbmcgPyA8RXhwYW5kUm93XG4gICAgICAgIGtleT17IGAke2tleX0tZXhwYW5kaW5nYCB9XG4gICAgICAgIGNvbFNwYW49eyBwcm9wcy52aXNpYmxlQ29sdW1uU2l6ZSB9XG4gICAgICAgIGV4cGFuZGVkPXsgZXhwYW5kZWQgfVxuICAgICAgICBvbkNsb3NlZD17ICgpID0+IGV4cGFuZFJvdy5vbkNsb3NlZChrZXkpIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cbiAgICAgID5cbiAgICAgICAgeyBleHBhbmRSb3cucmVuZGVyZXIocHJvcHMucm93LCBwcm9wcy5yb3dJbmRleCkgfVxuICAgICAgPC9FeHBhbmRSb3c+IDogbnVsbFxuICAgIF07XG4gIH07XG4gIHJldHVybiBwcm9wcyA9PiAoXG4gICAgPEV4cGFuc2lvbkNvbnRleHQuQ29uc3VtZXI+XG4gICAgICB7IGV4cGFuZFJvdyA9PiByZW5kZXJXaXRoRXhwYW5zaW9uKHByb3BzLCBleHBhbmRSb3cpIH1cbiAgICA8L0V4cGFuc2lvbkNvbnRleHQuQ29uc3VtZXI+XG4gICk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LWV4cGFuZC9yb3ctY29uc3VtZXIuanMiLCJpbXBvcnQgY3MgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiO1xuXG5jb25zdCBFeHBhbmRSb3cgPSAoe1xuICBjaGlsZHJlbixcbiAgZXhwYW5kZWQsXG4gIG9uQ2xvc2VkLFxuICBjbGFzc05hbWUsXG4gIHRyYW5zaXRpb25UaW1lb3V0LFxuICAuLi5yZXN0XG59KSA9PiAoXG4gIDx0cj5cbiAgICA8dGQgY2xhc3NOYW1lPXtjcyhcInJlc2V0LWV4cGFuc2lvbi1zdHlsZVwiLCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XG4gICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICBhcHBlYXJcbiAgICAgICAgaW49e2V4cGFuZGVkfVxuICAgICAgICB0aW1lb3V0PXt0cmFuc2l0aW9uVGltZW91dH1cbiAgICAgICAgY2xhc3NOYW1lcz1cInJvdy1leHBhbmQtc2xpZGVcIlxuICAgICAgICBvbkV4aXRlZD17b25DbG9zZWR9XG4gICAgICA+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctZXhwYW5zaW9uLXN0eWxlXCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICA8L3RkPlxuICA8L3RyPlxuKTtcblxuRXhwYW5kUm93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBleHBhbmRlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2xvc2VkOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmFuc2l0aW9uVGltZW91dDogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbkV4cGFuZFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxuICBleHBhbmRlZDogZmFsc2UsXG4gIG9uQ2xvc2VkOiBudWxsLFxuICBjbGFzc05hbWU6IFwiXCIsXG4gIHRyYW5zaXRpb25UaW1lb3V0OiA0MDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRSb3c7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1yb3cuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFJvd1RlbXBsYXRlIGZyb20gJy4vcm93L3Jvdy10ZW1wbGF0ZSc7XG5pbXBvcnQgRm9vdGVyQ2VsbCBmcm9tICcuL2Zvb3Rlci1jZWxsJztcbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBGb290ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBjbGFzc05hbWUsIGNvbHVtbnMsIHNlbGVjdFJvdywgZXhwYW5kUm93IH0gPSBwcm9wcztcblxuICBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIHJldHVybiBjb2x1bW5zLm1hcCgoY29sdW1uLCBpKSA9PiB7XG4gICAgICBpZiAoY29sdW1uLmZvb3RlciA9PT0gdW5kZWZpbmVkIHx8IGNvbHVtbi5mb290ZXIgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb2x1bW5EYXRhID0gXy5wbHVjayhkYXRhLCBjb2x1bW4uZGF0YUZpZWxkKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvb3RlckNlbGxcbiAgICAgICAgICBpbmRleD17IGkgfVxuICAgICAgICAgIGtleT17IGNvbHVtbi5kYXRhRmllbGQgfVxuICAgICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAgICAgY29sdW1uRGF0YT17IGNvbHVtbkRhdGEgfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHRmb290PlxuICAgICAgPFJvd1RlbXBsYXRlXG4gICAgICAgIHJlbmRlckNvbnRlbnQ9eyByZW5kZXJDb250ZW50IH1cbiAgICAgICAgc2VsZWN0Um93PXsgc2VsZWN0Um93IH1cbiAgICAgICAgZXhwYW5kUm93PXsgZXhwYW5kUm93IH1cbiAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cbiAgICAgICAgY2VsbEVsPVwidGhcIlxuICAgICAgLz5cbiAgICA8L3Rmb290PlxuICApO1xufTtcblxuRm9vdGVyLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgc2VsZWN0Um93OiBQcm9wVHlwZXMub2JqZWN0LFxuICBleHBhbmRSb3c6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2Zvb3Rlci5qcyIsIi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBldmVudERlbGVnYXRlciBmcm9tICcuL2NlbGwtZXZlbnQtZGVsZWdhdGVyJztcblxuY2xhc3MgRm9vdGVyQ2VsbCBleHRlbmRzIGV2ZW50RGVsZWdhdGVyKFJlYWN0LkNvbXBvbmVudCkge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbmRleCwgY29sdW1uLCBjb2x1bW5EYXRhIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qge1xuICAgICAgZm9vdGVyLFxuICAgICAgZm9vdGVyVGl0bGUsXG4gICAgICBmb290ZXJBbGlnbixcbiAgICAgIGZvb3RlckZvcm1hdHRlcixcbiAgICAgIGZvb3RlckV2ZW50cyxcbiAgICAgIGZvb3RlckNsYXNzZXMsXG4gICAgICBmb290ZXJTdHlsZSxcbiAgICAgIGZvb3RlckF0dHJzXG4gICAgfSA9IGNvbHVtbjtcblxuICAgIGNvbnN0IGRlbGVnYXRlRXZlbnRzID0gdGhpcy5kZWxlZ2F0ZShmb290ZXJFdmVudHMpO1xuICAgIGNvbnN0IGNlbGxBdHRycyA9IHtcbiAgICAgIC4uLihfLmlzRnVuY3Rpb24oZm9vdGVyQXR0cnMpID8gZm9vdGVyQXR0cnMoY29sdW1uLCBpbmRleCkgOiBmb290ZXJBdHRycyksXG4gICAgICAuLi5kZWxlZ2F0ZUV2ZW50c1xuICAgIH07XG5cblxuICAgIGxldCB0ZXh0ID0gJyc7XG4gICAgaWYgKF8uaXNTdHJpbmcoZm9vdGVyKSkge1xuICAgICAgdGV4dCA9IGZvb3RlcjtcbiAgICB9IGVsc2UgaWYgKF8uaXNGdW5jdGlvbihmb290ZXIpKSB7XG4gICAgICB0ZXh0ID0gZm9vdGVyKGNvbHVtbkRhdGEsIGNvbHVtbiwgaW5kZXgpO1xuICAgIH1cblxuICAgIGxldCBjZWxsU3R5bGUgPSB7fTtcbiAgICBjb25zdCBjZWxsQ2xhc3NlcyA9IF8uaXNGdW5jdGlvbihmb290ZXJDbGFzc2VzKSA/IGZvb3RlckNsYXNzZXMoY29sdW1uLCBpbmRleCkgOiBmb290ZXJDbGFzc2VzO1xuXG4gICAgaWYgKGZvb3RlclN0eWxlKSB7XG4gICAgICBjZWxsU3R5bGUgPSBfLmlzRnVuY3Rpb24oZm9vdGVyU3R5bGUpID8gZm9vdGVyU3R5bGUoY29sdW1uLCBpbmRleCkgOiBmb290ZXJTdHlsZTtcbiAgICAgIGNlbGxTdHlsZSA9IGNlbGxTdHlsZSA/IHsgLi4uY2VsbFN0eWxlIH0gOiBjZWxsU3R5bGU7XG4gICAgfVxuXG4gICAgaWYgKGZvb3RlclRpdGxlKSB7XG4gICAgICBjZWxsQXR0cnMudGl0bGUgPSBfLmlzRnVuY3Rpb24oZm9vdGVyVGl0bGUpID8gZm9vdGVyVGl0bGUoY29sdW1uLCBpbmRleCkgOiB0ZXh0O1xuICAgIH1cblxuICAgIGlmIChmb290ZXJBbGlnbikge1xuICAgICAgY2VsbFN0eWxlLnRleHRBbGlnbiA9IF8uaXNGdW5jdGlvbihmb290ZXJBbGlnbikgPyBmb290ZXJBbGlnbihjb2x1bW4sIGluZGV4KSA6IGZvb3RlckFsaWduO1xuICAgIH1cblxuICAgIGlmIChjZWxsQ2xhc3NlcykgY2VsbEF0dHJzLmNsYXNzTmFtZSA9IGNzKGNlbGxBdHRycy5jbGFzc05hbWUsIGNlbGxDbGFzc2VzKTtcbiAgICBpZiAoIV8uaXNFbXB0eU9iamVjdChjZWxsU3R5bGUpKSBjZWxsQXR0cnMuc3R5bGUgPSBjZWxsU3R5bGU7XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IGZvb3RlckZvcm1hdHRlciA/IGZvb3RlckZvcm1hdHRlcihjb2x1bW4sIGluZGV4LCB7IHRleHQgfSkgOiB0ZXh0O1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywgY2VsbEF0dHJzLCBjaGlsZHJlbik7XG4gIH1cbn1cblxuRm9vdGVyQ2VsbC5wcm9wVHlwZXMgPSB7XG4gIGNvbHVtbkRhdGE6IFByb3BUeXBlcy5hcnJheSxcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHVtbjogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyQ2VsbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2Zvb3Rlci1jZWxsLmpzIiwiaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IENvbHVtblJlc29sdmVyIGZyb20gJy4vY29sdW1uLXJlc29sdmVyJztcblxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBUYWJsZVJlc29sdmVyIGV4dGVuZHMgQ29sdW1uUmVzb2x2ZXIoRXh0ZW5kQmFzZSkge1xuICAgIHZhbGlkYXRlUHJvcHMoKSB7XG4gICAgICBjb25zdCB7IGtleUZpZWxkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKCFrZXlGaWVsZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBzcGVjaWZ5IGEgZmllbGQgYXMga2V5IHZpYSBrZXlGaWVsZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudmlzaWJsZUNvbHVtblNpemUoZmFsc2UpIDw9IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB2aXNpYmxlIGNvbHVtbnMgZGV0ZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpc0VtcHR5KCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YS5sZW5ndGggPT09IDA7XG4gICAgfVxuXG4gICAgdmlzaWJsZVJvd3MoKSB7XG4gICAgICBjb25zdCB7IGRhdGEsIGhpZGRlblJvd3MsIGtleUZpZWxkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKCFoaWRkZW5Sb3dzIHx8IGhpZGRlblJvd3MubGVuZ3RoID09PSAwKSByZXR1cm4gZGF0YTtcbiAgICAgIHJldHVybiBkYXRhLmZpbHRlcigocm93KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IF8uZ2V0KHJvdywga2V5RmllbGQpO1xuICAgICAgICByZXR1cm4gIV8uY29udGFpbnMoaGlkZGVuUm93cywga2V5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBDb2x1bW5SZXNvbHZlciBleHRlbmRzIEV4dGVuZEJhc2Uge1xuICAgIHZpc2libGVDb2x1bW5TaXplKGluY2x1ZGVTZWxlY3RDb2x1bW4gPSB0cnVlKSB7XG4gICAgICBsZXQgY29sdW1uTGVuO1xuICAgICAgaWYgKHRoaXMucHJvcHMuY29sdW1uVG9nZ2xlICYmIHRoaXMucHJvcHMuY29sdW1uVG9nZ2xlLnRvZ2dsZXMpIHtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IHRoaXMucHJvcHMuY29sdW1uVG9nZ2xlLnRvZ2dsZXM7XG4gICAgICAgIGNvbHVtbkxlbiA9IE9iamVjdC5rZXlzKGNvbHVtbnMpLmZpbHRlcihuYW1lID0+IGNvbHVtbnNbbmFtZV0pLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHVtbkxlbiA9IHRoaXMucHJvcHMuY29sdW1ucy5maWx0ZXIoYyA9PiAhYy5oaWRkZW4pLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIGlmICghaW5jbHVkZVNlbGVjdENvbHVtbikgcmV0dXJuIGNvbHVtbkxlbjtcbiAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdyAmJiAhdGhpcy5wcm9wcy5zZWxlY3RSb3cuaGlkZVNlbGVjdENvbHVtbikge1xuICAgICAgICBjb2x1bW5MZW4gKz0gMTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLmV4cGFuZFJvdyAmJiB0aGlzLnByb3BzLmV4cGFuZFJvdy5zaG93RXhwYW5kQ29sdW1uKSB7XG4gICAgICAgIGNvbHVtbkxlbiArPSAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbHVtbkxlbjtcbiAgICB9XG4gIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9wcm9wcy1yZXNvbHZlci9jb2x1bW4tcmVzb2x2ZXIuanMiLCIvKiBlc2xpbnQgY2FtZWxjYXNlOiAwICovXG4vKiBlc2xpbnQgbm8tcmV0dXJuLWFzc2lnbjogMCAqL1xuLyogZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOiAwICovXG4vKiBlc2xpbnQgY2xhc3MtbWV0aG9kcy11c2UtdGhpczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRzJztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBjcmVhdGVEYXRhQ29udGV4dCBmcm9tICcuL2RhdGEtY29udGV4dCc7XG5pbXBvcnQgY3JlYXRlQ29sdW1uTWd0Q29udGV4dCBmcm9tICcuL2NvbHVtbi1jb250ZXh0JztcbmltcG9ydCBjcmVhdGVTb3J0Q29udGV4dCBmcm9tICcuL3NvcnQtY29udGV4dCc7XG5pbXBvcnQgU2VsZWN0aW9uQ29udGV4dCBmcm9tICcuL3NlbGVjdGlvbi1jb250ZXh0JztcbmltcG9ydCBSb3dFeHBhbmRDb250ZXh0IGZyb20gJy4vcm93LWV4cGFuZC1jb250ZXh0JztcbmltcG9ydCByZW1vdGVSZXNvbHZlciBmcm9tICcuLi9wcm9wcy1yZXNvbHZlci9yZW1vdGUtcmVzb2x2ZXInO1xuaW1wb3J0IHsgQm9vdHN0cmFwQ29udGV4dCB9IGZyb20gJy4vYm9vdHN0cmFwJztcbmltcG9ydCBkYXRhT3BlcmF0b3IgZnJvbSAnLi4vc3RvcmUvb3BlcmF0b3JzJztcblxuY29uc3Qgd2l0aENvbnRleHQgPSBCYXNlID0+XG4gIGNsYXNzIEJvb3RzdHJhcFRhYmxlQ29udGFpbmVyIGV4dGVuZHMgcmVtb3RlUmVzb2x2ZXIoQ29tcG9uZW50KSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuRGF0YUNvbnRleHQgPSBjcmVhdGVEYXRhQ29udGV4dCgpO1xuXG4gICAgICBpZiAocHJvcHMucmVnaXN0ZXJFeHBvc2VkQVBJKSB7XG4gICAgICAgIGNvbnN0IGV4cG9zZWRBUElFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICBleHBvc2VkQVBJRW1pdHRlci5vbignZ2V0LnRhYmxlLmRhdGEnLCBwYXlsb2FkID0+IHBheWxvYWQucmVzdWx0ID0gdGhpcy50YWJsZS5nZXREYXRhKCkpO1xuICAgICAgICBleHBvc2VkQVBJRW1pdHRlci5vbignZ2V0LnNlbGVjdGVkLnJvd3MnLCBwYXlsb2FkID0+IHBheWxvYWQucmVzdWx0ID0gdGhpcy5zZWxlY3Rpb25Db250ZXh0LmdldFNlbGVjdGVkKCkpO1xuICAgICAgICBleHBvc2VkQVBJRW1pdHRlci5vbignZ2V0LmZpbHRlcmVkLnJvd3MnLCAocGF5bG9hZCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnNlYXJjaENvbnRleHQpIHtcbiAgICAgICAgICAgIHBheWxvYWQucmVzdWx0ID0gdGhpcy5zZWFyY2hDb250ZXh0LmdldFNlYXJjaGVkKCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlckNvbnRleHQpIHtcbiAgICAgICAgICAgIHBheWxvYWQucmVzdWx0ID0gdGhpcy5maWx0ZXJDb250ZXh0LmdldEZpbHRlcmVkKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBheWxvYWQucmVzdWx0ID0gdGhpcy50YWJsZS5nZXREYXRhKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcHJvcHMucmVnaXN0ZXJFeHBvc2VkQVBJKGV4cG9zZWRBUElFbWl0dGVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmNvbHVtbnMuZmlsdGVyKGNvbCA9PiBjb2wuc29ydCkubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLlNvcnRDb250ZXh0ID0gY3JlYXRlU29ydENvbnRleHQoXG4gICAgICAgICAgZGF0YU9wZXJhdG9yLCB0aGlzLmlzUmVtb3RlU29ydCwgdGhpcy5oYW5kbGVSZW1vdGVTb3J0Q2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5jb2x1bW5Ub2dnbGUgfHxcbiAgICAgICAgcHJvcHMuY29sdW1ucy5maWx0ZXIoY29sID0+IGNvbC5oaWRkZW4pLmxlbmd0aCA+IDBcbiAgICAgICkge1xuICAgICAgICB0aGlzLkNvbHVtbk1hbmFnZW1lbnRDb250ZXh0ID0gY3JlYXRlQ29sdW1uTWd0Q29udGV4dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuc2VsZWN0Um93KSB7XG4gICAgICAgIHRoaXMuU2VsZWN0aW9uQ29udGV4dCA9IFNlbGVjdGlvbkNvbnRleHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5leHBhbmRSb3cpIHtcbiAgICAgICAgdGhpcy5Sb3dFeHBhbmRDb250ZXh0ID0gUm93RXhwYW5kQ29udGV4dDtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmNlbGxFZGl0ICYmIHByb3BzLmNlbGxFZGl0LmNyZWF0ZUNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5DZWxsRWRpdENvbnRleHQgPSBwcm9wcy5jZWxsRWRpdC5jcmVhdGVDb250ZXh0KFxuICAgICAgICAgIF8sIGRhdGFPcGVyYXRvciwgdGhpcy5pc1JlbW90ZUNlbGxFZGl0LCB0aGlzLmhhbmRsZVJlbW90ZUNlbGxDaGFuZ2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuZmlsdGVyKSB7XG4gICAgICAgIHRoaXMuRmlsdGVyQ29udGV4dCA9IHByb3BzLmZpbHRlci5jcmVhdGVDb250ZXh0KFxuICAgICAgICAgIF8sIHRoaXMuaXNSZW1vdGVGaWx0ZXJpbmcsIHRoaXMuaGFuZGxlUmVtb3RlRmlsdGVyQ2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgICAgdGhpcy5QYWdpbmF0aW9uQ29udGV4dCA9IHByb3BzLnBhZ2luYXRpb24uY3JlYXRlQ29udGV4dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuc2VhcmNoICYmIHByb3BzLnNlYXJjaC5zZWFyY2hDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuU2VhcmNoQ29udGV4dCA9IHByb3BzLnNlYXJjaC5zZWFyY2hDb250ZXh0KFxuICAgICAgICAgIF8sIHRoaXMuaXNSZW1vdGVTZWFyY2gsIHRoaXMuaGFuZGxlUmVtb3RlU2VhcmNoQ2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnNldERlcGVuZGVuY3lNb2R1bGVzKSB7XG4gICAgICAgIHByb3BzLnNldERlcGVuZGVuY3lNb2R1bGVzKF8pO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuc2V0UGFnaW5hdGlvblJlbW90ZUVtaXR0ZXIpIHtcbiAgICAgICAgcHJvcHMuc2V0UGFnaW5hdGlvblJlbW90ZUVtaXR0ZXIodGhpcy5yZW1vdGVFbWl0dGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuY29sdW1ucy5maWx0ZXIoY29sID0+IGNvbC5zb3J0KS5sZW5ndGggPD0gMCkge1xuICAgICAgICB0aGlzLlNvcnRDb250ZXh0ID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuU29ydENvbnRleHQpIHtcbiAgICAgICAgdGhpcy5Tb3J0Q29udGV4dCA9IGNyZWF0ZVNvcnRDb250ZXh0KFxuICAgICAgICAgIGRhdGFPcGVyYXRvciwgdGhpcy5pc1JlbW90ZVNvcnQsIHRoaXMuaGFuZGxlUmVtb3RlU29ydENoYW5nZSk7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRQcm9wcy5wYWdpbmF0aW9uICYmIHRoaXMucHJvcHMucGFnaW5hdGlvbikge1xuICAgICAgICB0aGlzLlBhZ2luYXRpb25Db250ZXh0ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0UHJvcHMucGFnaW5hdGlvbiAmJiAhdGhpcy5wcm9wcy5wYWdpbmF0aW9uKSB7XG4gICAgICAgIHRoaXMuUGFnaW5hdGlvbkNvbnRleHQgPSBuZXh0UHJvcHMucGFnaW5hdGlvbi5jcmVhdGVDb250ZXh0KFxuICAgICAgICAgIHRoaXMuaXNSZW1vdGVQYWdpbmF0aW9uLCB0aGlzLmhhbmRsZVJlbW90ZVBhZ2VDaGFuZ2UpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0UHJvcHMuY2VsbEVkaXQgJiYgdGhpcy5wcm9wcy5jZWxsRWRpdCkge1xuICAgICAgICB0aGlzLkNlbGxFZGl0Q29udGV4dCA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAobmV4dFByb3BzLmNlbGxFZGl0ICYmICF0aGlzLnByb3BzLmNlbGxFZGl0KSB7XG4gICAgICAgIHRoaXMuQ2VsbEVkaXRDb250ZXh0ID0gbmV4dFByb3BzLmNlbGxFZGl0LmNyZWF0ZUNvbnRleHQoXG4gICAgICAgICAgXywgZGF0YU9wZXJhdG9yLCB0aGlzLmlzUmVtb3RlQ2VsbEVkaXQsIHRoaXMuaGFuZGxlUmVtb3RlQ2VsbENoYW5nZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyQmFzZSgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgIHNlYXJjaFByb3BzLFxuICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgIHBhZ2luYXRpb25Qcm9wcyxcbiAgICAgICAgY29sdW1uVG9nZ2xlUHJvcHNcbiAgICAgICkgPT4gKFxuICAgICAgICA8QmFzZVxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy50YWJsZSA9IG4gfVxuICAgICAgICAgIHsgLi4udGhpcy5wcm9wcyB9XG4gICAgICAgICAgeyAuLi5zb3J0UHJvcHMgfVxuICAgICAgICAgIHsgLi4uZmlsdGVyUHJvcHMgfVxuICAgICAgICAgIHsgLi4uc2VhcmNoUHJvcHMgfVxuICAgICAgICAgIHsgLi4ucGFnaW5hdGlvblByb3BzIH1cbiAgICAgICAgICB7IC4uLmNvbHVtblRvZ2dsZVByb3BzIH1cbiAgICAgICAgICBkYXRhPXsgcm9vdFByb3BzLmdldERhdGEoZmlsdGVyUHJvcHMsIHNlYXJjaFByb3BzLCBzb3J0UHJvcHMsIHBhZ2luYXRpb25Qcm9wcykgfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJXaXRoQ29sdW1uTWFuYWdlbWVudEN0eChiYXNlLCBiYXNlUHJvcHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgIHNlYXJjaFByb3BzLFxuICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgIHBhZ2luYXRpb25Qcm9wc1xuICAgICAgKSA9PiAoXG4gICAgICAgIDx0aGlzLkNvbHVtbk1hbmFnZW1lbnRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIHRvZ2dsZXM9eyB0aGlzLnByb3BzLmNvbHVtblRvZ2dsZSA/IHRoaXMucHJvcHMuY29sdW1uVG9nZ2xlLnRvZ2dsZXMgOiBudWxsIH1cbiAgICAgICAgPlxuICAgICAgICAgIDx0aGlzLkNvbHVtbk1hbmFnZW1lbnRDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2x1bW5Ub2dnbGVQcm9wcyA9PiBiYXNlKFxuICAgICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJQcm9wcyxcbiAgICAgICAgICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvblByb3BzLFxuICAgICAgICAgICAgICAgIGNvbHVtblRvZ2dsZVByb3BzXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RoaXMuQ29sdW1uTWFuYWdlbWVudENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIDwvdGhpcy5Db2x1bW5NYW5hZ2VtZW50Q29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyV2l0aFNlbGVjdGlvbkN0eChiYXNlLCBiYXNlUHJvcHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgIHNlYXJjaFByb3BzLFxuICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgIHBhZ2luYXRpb25Qcm9wc1xuICAgICAgKSA9PiAoXG4gICAgICAgIDx0aGlzLlNlbGVjdGlvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICB7IC4uLmJhc2VQcm9wcyB9XG4gICAgICAgICAgcmVmPXsgbiA9PiB0aGlzLnNlbGVjdGlvbkNvbnRleHQgPSBuIH1cbiAgICAgICAgICBzZWxlY3RSb3c9eyB0aGlzLnByb3BzLnNlbGVjdFJvdyB9XG4gICAgICAgICAgZGF0YT17IHJvb3RQcm9wcy5nZXREYXRhKGZpbHRlclByb3BzLCBzZWFyY2hQcm9wcywgc29ydFByb3BzLCBwYWdpbmF0aW9uUHJvcHMpIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJhc2UoXG4gICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgICAgICAgIHNlYXJjaFByb3BzLFxuICAgICAgICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgICAgICAgIHBhZ2luYXRpb25Qcm9wc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC90aGlzLlNlbGVjdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcldpdGhSb3dFeHBhbmRDdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgc29ydFByb3BzLFxuICAgICAgICBwYWdpbmF0aW9uUHJvcHNcbiAgICAgICkgPT4gKFxuICAgICAgICA8dGhpcy5Sb3dFeHBhbmRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5yb3dFeHBhbmRDb250ZXh0ID0gbiB9XG4gICAgICAgICAgZXhwYW5kUm93PXsgdGhpcy5wcm9wcy5leHBhbmRSb3cgfVxuICAgICAgICAgIGRhdGE9eyByb290UHJvcHMuZ2V0RGF0YShmaWx0ZXJQcm9wcywgc2VhcmNoUHJvcHMsIHNvcnRQcm9wcywgcGFnaW5hdGlvblByb3BzKSB9XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBiYXNlKFxuICAgICAgICAgICAgICByb290UHJvcHMsXG4gICAgICAgICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgICAgICAgc29ydFByb3BzLFxuICAgICAgICAgICAgICBwYWdpbmF0aW9uUHJvcHNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIDwvdGhpcy5Sb3dFeHBhbmRDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJXaXRoUGFnaW5hdGlvbkN0eChiYXNlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgc29ydFByb3BzXG4gICAgICApID0+IChcbiAgICAgICAgPHRoaXMuUGFnaW5hdGlvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICByZWY9eyBuID0+IHRoaXMucGFnaW5hdGlvbkNvbnRleHQgPSBuIH1cbiAgICAgICAgICBwYWdpbmF0aW9uPXsgdGhpcy5wcm9wcy5wYWdpbmF0aW9uIH1cbiAgICAgICAgICBkYXRhPXsgcm9vdFByb3BzLmdldERhdGEoZmlsdGVyUHJvcHMsIHNlYXJjaFByb3BzLCBzb3J0UHJvcHMpIH1cbiAgICAgICAgICBib290c3RyYXA0PXsgdGhpcy5wcm9wcy5ib290c3RyYXA0IH1cbiAgICAgICAgICBpc1JlbW90ZVBhZ2luYXRpb249eyB0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbiB9XG4gICAgICAgICAgcmVtb3RlRW1pdHRlcj17IHRoaXMucmVtb3RlRW1pdHRlciB9XG4gICAgICAgICAgb25EYXRhU2l6ZUNoYW5nZT17IHRoaXMucHJvcHMub25EYXRhU2l6ZUNoYW5nZSB9XG4gICAgICAgICAgdGFibGVJZD17IHRoaXMucHJvcHMuaWQgfVxuICAgICAgICA+XG4gICAgICAgICAgPHRoaXMuUGFnaW5hdGlvbkNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhZ2luYXRpb25Qcm9wcyA9PiBiYXNlKFxuICAgICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJQcm9wcyxcbiAgICAgICAgICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvblByb3BzXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RoaXMuUGFnaW5hdGlvbkNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIDwvdGhpcy5QYWdpbmF0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyV2l0aFNvcnRDdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICBzZWFyY2hQcm9wc1xuICAgICAgKSA9PiAoXG4gICAgICAgIDx0aGlzLlNvcnRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5zb3J0Q29udGV4dCA9IG4gfVxuICAgICAgICAgIGRlZmF1bHRTb3J0ZWQ9eyB0aGlzLnByb3BzLmRlZmF1bHRTb3J0ZWQgfVxuICAgICAgICAgIGRlZmF1bHRTb3J0RGlyZWN0aW9uPXsgdGhpcy5wcm9wcy5kZWZhdWx0U29ydERpcmVjdGlvbiB9XG4gICAgICAgICAgc29ydD17IHRoaXMucHJvcHMuc29ydCB9XG4gICAgICAgICAgZGF0YT17IHJvb3RQcm9wcy5nZXREYXRhKGZpbHRlclByb3BzLCBzZWFyY2hQcm9wcykgfVxuICAgICAgICA+XG4gICAgICAgICAgPHRoaXMuU29ydENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNvcnRQcm9wcyA9PiBiYXNlKFxuICAgICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJQcm9wcyxcbiAgICAgICAgICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RoaXMuU29ydENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIDwvdGhpcy5Tb3J0Q29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyV2l0aFNlYXJjaEN0eChiYXNlLCBiYXNlUHJvcHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgZmlsdGVyUHJvcHNcbiAgICAgICkgPT4gKFxuICAgICAgICA8dGhpcy5TZWFyY2hDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5zZWFyY2hDb250ZXh0ID0gbiB9XG4gICAgICAgICAgZGF0YT17IHJvb3RQcm9wcy5nZXREYXRhKGZpbHRlclByb3BzKSB9XG4gICAgICAgICAgc2VhcmNoVGV4dD17IHRoaXMucHJvcHMuc2VhcmNoLnNlYXJjaFRleHQgfVxuICAgICAgICAgIGRhdGFDaGFuZ2VMaXN0ZW5lcj17IHRoaXMucHJvcHMuZGF0YUNoYW5nZUxpc3RlbmVyIH1cbiAgICAgICAgPlxuICAgICAgICAgIDx0aGlzLlNlYXJjaENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlYXJjaFByb3BzID0+IGJhc2UoXG4gICAgICAgICAgICAgICAgcm9vdFByb3BzLFxuICAgICAgICAgICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICAgICAgICAgIHNlYXJjaFByb3BzXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RoaXMuU2VhcmNoQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgPC90aGlzLlNlYXJjaENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcldpdGhGaWx0ZXJDdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gcm9vdFByb3BzID0+IChcbiAgICAgICAgPHRoaXMuRmlsdGVyQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgIHsgLi4uYmFzZVByb3BzIH1cbiAgICAgICAgICByZWY9eyBuID0+IHRoaXMuZmlsdGVyQ29udGV4dCA9IG4gfVxuICAgICAgICAgIGRhdGE9eyByb290UHJvcHMuZ2V0RGF0YSgpIH1cbiAgICAgICAgICBmaWx0ZXI9eyB0aGlzLnByb3BzLmZpbHRlci5vcHRpb25zIHx8IHt9IH1cbiAgICAgICAgICBkYXRhQ2hhbmdlTGlzdGVuZXI9eyB0aGlzLnByb3BzLmRhdGFDaGFuZ2VMaXN0ZW5lciB9XG4gICAgICAgID5cbiAgICAgICAgICA8dGhpcy5GaWx0ZXJDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmaWx0ZXJQcm9wcyA9PiBiYXNlKFxuICAgICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJQcm9wc1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90aGlzLkZpbHRlckNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIDwvdGhpcy5GaWx0ZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJXaXRoQ2VsbEVkaXRDdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gcm9vdFByb3BzID0+IChcbiAgICAgICAgPHRoaXMuQ2VsbEVkaXRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5jZWxsRWRpdENvbnRleHQgPSBuIH1cbiAgICAgICAgICBzZWxlY3RSb3c9eyB0aGlzLnByb3BzLnNlbGVjdFJvdyB9XG4gICAgICAgICAgY2VsbEVkaXQ9eyB0aGlzLnByb3BzLmNlbGxFZGl0IH1cbiAgICAgICAgICBkYXRhPXsgcm9vdFByb3BzLmdldERhdGEoKSB9XG4gICAgICAgID5cbiAgICAgICAgICB7IGJhc2Uocm9vdFByb3BzKSB9XG4gICAgICAgIDwvdGhpcy5DZWxsRWRpdENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsga2V5RmllbGQsIGNvbHVtbnMsIGJvb3RzdHJhcDQgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBiYXNlUHJvcHMgPSB7IGtleUZpZWxkLCBjb2x1bW5zIH07XG5cbiAgICAgIGxldCBiYXNlID0gdGhpcy5yZW5kZXJCYXNlKCk7XG5cbiAgICAgIGlmICh0aGlzLkNvbHVtbk1hbmFnZW1lbnRDb250ZXh0KSB7XG4gICAgICAgIGJhc2UgPSB0aGlzLnJlbmRlcldpdGhDb2x1bW5NYW5hZ2VtZW50Q3R4KGJhc2UsIGJhc2VQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLlNlbGVjdGlvbkNvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aFNlbGVjdGlvbkN0eChiYXNlLCBiYXNlUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5Sb3dFeHBhbmRDb250ZXh0KSB7XG4gICAgICAgIGJhc2UgPSB0aGlzLnJlbmRlcldpdGhSb3dFeHBhbmRDdHgoYmFzZSwgYmFzZVByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuUGFnaW5hdGlvbkNvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aFBhZ2luYXRpb25DdHgoYmFzZSwgYmFzZVByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuU29ydENvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aFNvcnRDdHgoYmFzZSwgYmFzZVByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuU2VhcmNoQ29udGV4dCkge1xuICAgICAgICBiYXNlID0gdGhpcy5yZW5kZXJXaXRoU2VhcmNoQ3R4KGJhc2UsIGJhc2VQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLkZpbHRlckNvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aEZpbHRlckN0eChiYXNlLCBiYXNlUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5DZWxsRWRpdENvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aENlbGxFZGl0Q3R4KGJhc2UsIGJhc2VQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCb290c3RyYXBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsgeyBib290c3RyYXA0IH0gfT5cbiAgICAgICAgICA8dGhpcy5EYXRhQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgICAgZGF0YT17IHRoaXMucHJvcHMuZGF0YSB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRoaXMuRGF0YUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiYXNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGhpcy5EYXRhQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICA8L3RoaXMuRGF0YUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgIDwvQm9vdHN0cmFwQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29udGV4dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL2luZGV4LmpzIiwiLyogZXNsaW50IGNhbWVsY2FzZTogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgRGF0YUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbiAgY2xhc3MgRGF0YVByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZFxuICAgIH1cblxuICAgIHN0YXRlID0geyBkYXRhOiB0aGlzLnByb3BzLmRhdGEgfTtcblxuICAgIGdldERhdGEgPSAoZmlsdGVyUHJvcHMsIHNlYXJjaFByb3BzLCBzb3J0UHJvcHMsIHBhZ2luYXRpb25Qcm9wcykgPT4ge1xuICAgICAgaWYgKHBhZ2luYXRpb25Qcm9wcykgcmV0dXJuIHBhZ2luYXRpb25Qcm9wcy5kYXRhO1xuICAgICAgZWxzZSBpZiAoc29ydFByb3BzKSByZXR1cm4gc29ydFByb3BzLmRhdGE7XG4gICAgICBlbHNlIGlmIChzZWFyY2hQcm9wcykgcmV0dXJuIHNlYXJjaFByb3BzLmRhdGE7XG4gICAgICBlbHNlIGlmIChmaWx0ZXJQcm9wcykgcmV0dXJuIGZpbHRlclByb3BzLmRhdGE7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBkYXRhOiBuZXh0UHJvcHMuZGF0YSB9KSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERhdGFDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgdmFsdWU9eyB7XG4gICAgICAgICAgICBkYXRhOiB0aGlzLnN0YXRlLmRhdGEsXG4gICAgICAgICAgICBnZXREYXRhOiB0aGlzLmdldERhdGFcbiAgICAgICAgICB9IH1cbiAgICAgICAgPlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIFByb3ZpZGVyOiBEYXRhUHJvdmlkZXIsXG4gICAgQ29uc3VtZXI6IERhdGFDb250ZXh0LkNvbnN1bWVyXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvZGF0YS1jb250ZXh0LmpzIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbi8qIGVzbGludCByZWFjdC9wcmVmZXItc3RhdGVsZXNzLWZ1bmN0aW9uOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBDb2x1bW5NYW5hZ2VtZW50Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuICBjbGFzcyBDb2x1bW5NYW5hZ2VtZW50UHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgIHRvZ2dsZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgdG9nZ2xlczogbnVsbFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGxldCB0b2dnbGVDb2x1bW47XG4gICAgICBjb25zdCB7IGNvbHVtbnMsIHRvZ2dsZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAodG9nZ2xlcykge1xuICAgICAgICB0b2dnbGVDb2x1bW4gPSBjb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gdG9nZ2xlc1tjb2x1bW4uZGF0YUZpZWxkXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2dnbGVDb2x1bW4gPSBjb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gIWNvbHVtbi5oaWRkZW4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENvbHVtbk1hbmFnZW1lbnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsgeyBjb2x1bW5zOiB0b2dnbGVDb2x1bW4gfSB9PlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgIDwvQ29sdW1uTWFuYWdlbWVudENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgUHJvdmlkZXI6IENvbHVtbk1hbmFnZW1lbnRQcm92aWRlcixcbiAgICBDb25zdW1lcjogQ29sdW1uTWFuYWdlbWVudENvbnRleHQuQ29uc3VtZXJcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9jb2x1bW4tY29udGV4dC5qcyIsIi8qIGVzbGludCBjYW1lbGNhc2U6IDAgKi9cbi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcblxuZXhwb3J0IGRlZmF1bHQgKFxuICBkYXRhT3BlcmF0b3IsXG4gIGlzUmVtb3RlU29ydCxcbiAgaGFuZGxlU29ydENoYW5nZVxuKSA9PiB7XG4gIGNvbnN0IFNvcnRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG4gIGNsYXNzIFNvcnRQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICAgIGRlZmF1bHRTb3J0ZWQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGRhdGFGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBvcmRlcjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0RFU0MsIENvbnN0LlNPUlRfQVNDXSkuaXNSZXF1aXJlZFxuICAgICAgfSkpLFxuICAgICAgc29ydDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgZGF0YUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBvcmRlcjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0RFU0MsIENvbnN0LlNPUlRfQVNDXSksXG4gICAgICAgIHNvcnRGdW5jOiBQcm9wVHlwZXMuZnVuY1xuICAgICAgfSksXG4gICAgICBkZWZhdWx0U29ydERpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0RFU0MsIENvbnN0LlNPUlRfQVNDXSlcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgbGV0IHNvcnRPcmRlcjtcbiAgICAgIGxldCBzb3J0Q29sdW1uO1xuICAgICAgY29uc3QgeyBkZWZhdWx0U29ydGVkLCBkZWZhdWx0U29ydERpcmVjdGlvbiwgc29ydCB9ID0gcHJvcHM7XG5cbiAgICAgIGlmIChkZWZhdWx0U29ydGVkICYmIGRlZmF1bHRTb3J0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICBzb3J0T3JkZXIgPSBkZWZhdWx0U29ydGVkWzBdLm9yZGVyIHx8IGRlZmF1bHRTb3J0RGlyZWN0aW9uO1xuICAgICAgICBzb3J0Q29sdW1uID0gdGhpcy5pbml0U29ydChkZWZhdWx0U29ydGVkWzBdLmRhdGFGaWVsZCwgc29ydE9yZGVyKTtcbiAgICAgIH0gZWxzZSBpZiAoc29ydCAmJiBzb3J0LmRhdGFGaWVsZCAmJiBzb3J0Lm9yZGVyKSB7XG4gICAgICAgIHNvcnRPcmRlciA9IHNvcnQub3JkZXI7XG4gICAgICAgIHNvcnRDb2x1bW4gPSB0aGlzLmluaXRTb3J0KHNvcnQuZGF0YUZpZWxkLCBzb3J0T3JkZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZSA9IHsgc29ydE9yZGVyLCBzb3J0Q29sdW1uIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCB7IHNvcnRPcmRlciwgc29ydENvbHVtbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGlmIChpc1JlbW90ZVNvcnQoKSAmJiBzb3J0T3JkZXIgJiYgc29ydENvbHVtbikge1xuICAgICAgICBoYW5kbGVTb3J0Q2hhbmdlKHNvcnRDb2x1bW4uZGF0YUZpZWxkLCBzb3J0T3JkZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgY29uc3QgeyBzb3J0LCBjb2x1bW5zIH0gPSBuZXh0UHJvcHM7XG4gICAgICBpZiAoc29ydCAmJiBzb3J0LmRhdGFGaWVsZCAmJiBzb3J0Lm9yZGVyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNvcnRPcmRlcjogc29ydC5vcmRlcixcbiAgICAgICAgICBzb3J0Q29sdW1uOiBjb2x1bW5zLmZpbmQoY29sID0+IGNvbC5kYXRhRmllbGQgPT09IHNvcnQuZGF0YUZpZWxkKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0U29ydChzb3J0RmllbGQsIHNvcnRPcmRlcikge1xuICAgICAgbGV0IHNvcnRDb2x1bW47XG4gICAgICBjb25zdCB7IGNvbHVtbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBzb3J0Q29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKGNvbCA9PiBjb2wuZGF0YUZpZWxkID09PSBzb3J0RmllbGQpO1xuICAgICAgaWYgKHNvcnRDb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc29ydENvbHVtbiA9IHNvcnRDb2x1bW5zWzBdO1xuXG4gICAgICAgIGlmIChzb3J0Q29sdW1uLm9uU29ydCkge1xuICAgICAgICAgIHNvcnRDb2x1bW4ub25Tb3J0KHNvcnRGaWVsZCwgc29ydE9yZGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNvcnRDb2x1bW47XG4gICAgfVxuXG4gICAgaGFuZGxlU29ydCA9IChjb2x1bW4pID0+IHtcbiAgICAgIGNvbnN0IHNvcnRPcmRlciA9IGRhdGFPcGVyYXRvci5uZXh0T3JkZXIoY29sdW1uLCB0aGlzLnN0YXRlLCB0aGlzLnByb3BzLmRlZmF1bHRTb3J0RGlyZWN0aW9uKTtcblxuICAgICAgaWYgKGNvbHVtbi5vblNvcnQpIHtcbiAgICAgICAgY29sdW1uLm9uU29ydChjb2x1bW4uZGF0YUZpZWxkLCBzb3J0T3JkZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNSZW1vdGVTb3J0KCkpIHtcbiAgICAgICAgaGFuZGxlU29ydENoYW5nZShjb2x1bW4uZGF0YUZpZWxkLCBzb3J0T3JkZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICBzb3J0T3JkZXIsXG4gICAgICAgIHNvcnRDb2x1bW46IGNvbHVtblxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGxldCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IHNvcnQgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IHNvcnRPcmRlciwgc29ydENvbHVtbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGlmICghaXNSZW1vdGVTb3J0KCkgJiYgc29ydENvbHVtbikge1xuICAgICAgICBjb25zdCBzb3J0RnVuYyA9IHNvcnRDb2x1bW4uc29ydEZ1bmMgPyBzb3J0Q29sdW1uLnNvcnRGdW5jIDogKHNvcnQgJiYgc29ydC5zb3J0RnVuYyk7XG4gICAgICAgIGRhdGEgPSBkYXRhT3BlcmF0b3Iuc29ydChkYXRhLCBzb3J0T3JkZXIsIHsgLi4uc29ydENvbHVtbiwgc29ydEZ1bmMgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTb3J0Q29udGV4dC5Qcm92aWRlclxuICAgICAgICAgIHZhbHVlPXsge1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHNvcnRPcmRlcixcbiAgICAgICAgICAgIG9uU29ydDogdGhpcy5oYW5kbGVTb3J0LFxuICAgICAgICAgICAgc29ydEZpZWxkOiBzb3J0Q29sdW1uID8gc29ydENvbHVtbi5kYXRhRmllbGQgOiBudWxsXG4gICAgICAgICAgfSB9XG4gICAgICAgID5cbiAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L1NvcnRDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBQcm92aWRlcjogU29ydFByb3ZpZGVyLFxuICAgIENvbnN1bWVyOiBTb3J0Q29udGV4dC5Db25zdW1lclxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL3NvcnQtY29udGV4dC5qcyIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRzJztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBSZW1vdGVSZXNvbHZlciBleHRlbmRzIEV4dGVuZEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnJlbW90ZUVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICB0aGlzLnJlbW90ZUVtaXR0ZXIub24oJ3BhZ2luYXRpb25DaGFuZ2UnLCB0aGlzLmhhbmRsZVJlbW90ZVBhZ2VDaGFuZ2UpO1xuICAgICAgdGhpcy5yZW1vdGVFbWl0dGVyLm9uKCdpc1JlbW90ZVBhZ2luYXRpb24nLCB0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbik7XG4gICAgfVxuXG4gICAgZ2V0TmV3ZXN0U3RhdGUgPSAoc3RhdGUgPSB7fSkgPT4ge1xuICAgICAgbGV0IHNvcnRPcmRlcjtcbiAgICAgIGxldCBzb3J0RmllbGQ7XG4gICAgICBsZXQgcGFnZTtcbiAgICAgIGxldCBzaXplUGVyUGFnZTtcbiAgICAgIGxldCBzZWFyY2hUZXh0O1xuICAgICAgbGV0IGZpbHRlcnMgPSB7fTtcblxuICAgICAgaWYgKHRoaXMuc29ydENvbnRleHQpIHtcbiAgICAgICAgc29ydE9yZGVyID0gdGhpcy5zb3J0Q29udGV4dC5zdGF0ZS5zb3J0T3JkZXI7XG4gICAgICAgIHNvcnRGaWVsZCA9IHRoaXMuc29ydENvbnRleHQuc3RhdGUuc29ydENvbHVtbiA/XG4gICAgICAgICAgdGhpcy5zb3J0Q29udGV4dC5zdGF0ZS5zb3J0Q29sdW1uLmRhdGFGaWVsZCA6XG4gICAgICAgICAgbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZmlsdGVyQ29udGV4dCkge1xuICAgICAgICBmaWx0ZXJzID0gdGhpcy5maWx0ZXJDb250ZXh0LmN1cnJGaWx0ZXJzO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wYWdpbmF0aW9uQ29udGV4dCkge1xuICAgICAgICBwYWdlID0gdGhpcy5wYWdpbmF0aW9uQ29udGV4dC5jdXJyUGFnZTtcbiAgICAgICAgc2l6ZVBlclBhZ2UgPSB0aGlzLnBhZ2luYXRpb25Db250ZXh0LmN1cnJTaXplUGVyUGFnZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2VhcmNoQ29udGV4dCkge1xuICAgICAgICBzZWFyY2hUZXh0ID0gdGhpcy5wcm9wcy5zZWFyY2guc2VhcmNoVGV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc29ydE9yZGVyLFxuICAgICAgICBzb3J0RmllbGQsXG4gICAgICAgIGZpbHRlcnMsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIHNpemVQZXJQYWdlLFxuICAgICAgICBzZWFyY2hUZXh0LFxuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5kYXRhXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlzUmVtb3RlU2VhcmNoID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyByZW1vdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gcmVtb3RlID09PSB0cnVlIHx8IChfLmlzT2JqZWN0KHJlbW90ZSkgJiYgcmVtb3RlLnNlYXJjaCkgfHwgdGhpcy5pc1JlbW90ZVBhZ2luYXRpb24oKTtcbiAgICB9XG5cbiAgICBpc1JlbW90ZVBhZ2luYXRpb24gPSAoZSA9IHt9KSA9PiB7XG4gICAgICBjb25zdCB7IHJlbW90ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGUucmVzdWx0ID0gKHJlbW90ZSA9PT0gdHJ1ZSB8fCAoXy5pc09iamVjdChyZW1vdGUpICYmIHJlbW90ZS5wYWdpbmF0aW9uKSk7XG4gICAgICByZXR1cm4gZS5yZXN1bHQ7XG4gICAgfVxuXG4gICAgaXNSZW1vdGVGaWx0ZXJpbmcgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHJlbW90ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiByZW1vdGUgPT09IHRydWUgfHwgKF8uaXNPYmplY3QocmVtb3RlKSAmJiByZW1vdGUuZmlsdGVyKSB8fCB0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbigpO1xuICAgIH1cblxuICAgIGlzUmVtb3RlU29ydCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgcmVtb3RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIHJlbW90ZSA9PT0gdHJ1ZSB8fCAoXy5pc09iamVjdChyZW1vdGUpICYmIHJlbW90ZS5zb3J0KSB8fCB0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbigpO1xuICAgIH1cblxuICAgIGlzUmVtb3RlQ2VsbEVkaXQgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHJlbW90ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiByZW1vdGUgPT09IHRydWUgfHwgKF8uaXNPYmplY3QocmVtb3RlKSAmJiByZW1vdGUuY2VsbEVkaXQpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlbW90ZVBhZ2VDaGFuZ2UgPSAocGFnZSwgc2l6ZVBlclBhZ2UpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25UYWJsZUNoYW5nZSgncGFnaW5hdGlvbicsIHRoaXMuZ2V0TmV3ZXN0U3RhdGUoeyBwYWdlLCBzaXplUGVyUGFnZSB9KSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVtb3RlRmlsdGVyQ2hhbmdlID0gKGZpbHRlcnMpID0+IHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0geyBmaWx0ZXJzIH07XG4gICAgICBpZiAodGhpcy5pc1JlbW90ZVBhZ2luYXRpb24oKSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5wcm9wcy5wYWdpbmF0aW9uLm9wdGlvbnMgfHwge307XG4gICAgICAgIG5ld1N0YXRlLnBhZ2UgPSBfLmlzRGVmaW5lZChvcHRpb25zLnBhZ2VTdGFydEluZGV4KSA/IG9wdGlvbnMucGFnZVN0YXJ0SW5kZXggOiAxO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5vblRhYmxlQ2hhbmdlKCdmaWx0ZXInLCB0aGlzLmdldE5ld2VzdFN0YXRlKG5ld1N0YXRlKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVtb3RlU29ydENoYW5nZSA9IChzb3J0RmllbGQsIHNvcnRPcmRlcikgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vblRhYmxlQ2hhbmdlKCdzb3J0JywgdGhpcy5nZXROZXdlc3RTdGF0ZSh7IHNvcnRGaWVsZCwgc29ydE9yZGVyIH0pKTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZW1vdGVDZWxsQ2hhbmdlID0gKHJvd0lkLCBkYXRhRmllbGQsIG5ld1ZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBjZWxsRWRpdCA9IHsgcm93SWQsIGRhdGFGaWVsZCwgbmV3VmFsdWUgfTtcbiAgICAgIHRoaXMucHJvcHMub25UYWJsZUNoYW5nZSgnY2VsbEVkaXQnLCB0aGlzLmdldE5ld2VzdFN0YXRlKHsgY2VsbEVkaXQgfSkpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlbW90ZVNlYXJjaENoYW5nZSA9IChzZWFyY2hUZXh0KSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uVGFibGVDaGFuZ2UoJ3NlYXJjaCcsIHRoaXMuZ2V0TmV3ZXN0U3RhdGUoeyBzZWFyY2hUZXh0IH0pKTtcbiAgICB9XG4gIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9wcm9wcy1yZXNvbHZlci9yZW1vdGUtcmVzb2x2ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=react-bootstrap-table-next.js.map