var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shell = function (_React$Component) {
    _inherits(Shell, _React$Component);

    function Shell(props) {
        _classCallCheck(this, Shell);

        var _this = _possibleConstructorReturn(this, (Shell.__proto__ || Object.getPrototypeOf(Shell)).call(this, props));

        _this.state = { ready: false };
        _this.wrapperRef = React.createRef();
        return _this;
    }

    _createClass(Shell, [{
        key: "render",
        value: function render() {
            if (this.state.ready) {
                return React.createElement(
                    "div",
                    { ref: this.wrapperRef, className: "react_wrapper" },
                    React.createElement(
                        SquareFill,
                        { parentRef: this.wrapperRef },
                        React.createElement(App, null)
                    )
                );
            } else {
                return React.createElement("div", { ref: this.wrapperRef, className: "react_wrapper" });
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.setState(function () {
                return { ready: true };
            });
        }
    }]);

    return Shell;
}(React.Component);

var App = function (_React$Component2) {
    _inherits(App, _React$Component2);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return null;
            // return(
            //     <div id={"test"}>
            //
            //     </div>
            // );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(Shell, null), document.getElementById("cont"));