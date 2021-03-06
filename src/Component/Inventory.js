'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _InputWithTitle = require('./InputWithTitle');

var _InputWithTitle2 = _interopRequireDefault(_InputWithTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inventory = function (_React$Component) {
    _inherits(Inventory, _React$Component);

    function Inventory() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, Inventory);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Inventory)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.render = function () {

            return _react2.default.createElement(
                'div',
                { className: 'content-page' },
                _react2.default.createElement(
                    'h1',
                    { className: 'content-page__title' },
                    'Inventory #123'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'content-page__body' },
                    _react2.default.createElement(
                        'div',
                        { className: 'content-page__body-top' },
                        _react2.default.createElement(
                            'div',
                            { className: 'content-page__body-left' },
                            _react2.default.createElement(_InputWithTitle2.default, { title: '123' }),
                            _react2.default.createElement(_InputWithTitle2.default, { title: '123' }),
                            _react2.default.createElement(_InputWithTitle2.default, { title: '123' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'content-page__body-right' },
                            _react2.default.createElement(_InputWithTitle2.default, { title: '123' }),
                            _react2.default.createElement(_InputWithTitle2.default, { title: '123' }),
                            _react2.default.createElement(_InputWithTitle2.default, { title: '123' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'content-page__body-bottom' },
                        _react2.default.createElement(_InputWithTitle2.default, { title: '123', type: 'textarea' })
                    )
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Inventory;
}(_react2.default.Component);

exports.default = Inventory;

//# sourceMappingURL=Inventory.js.map