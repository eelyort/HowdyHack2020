var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

// grid: [x, y]
//  -1: invalid
//   0: empty
//   1: grass
// covidGrid: [x, y]
//   true/false


var App = function (_React$Component2) {
    _inherits(App, _React$Component2);

    function App(props) {
        _classCallCheck(this, App);

        var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this2.player = new Player();

        _this2.state = { stage: 0 };

        _this2.game = null;

        _this2.interval = null;

        _this2.tick = _this2.tick.bind(_this2);
        _this2.nextStage = _this2.nextStage.bind(_this2);
        return _this2;
    }

    _createClass(App, [{
        key: "tick",
        value: function tick() {
            if (!this.game.tick()) {
                this.nextStage();
            }
        }
    }, {
        key: "nextStage",
        value: function nextStage() {
            var _this3 = this;

            // to tutorial
            if (this.state.stage === 0) {
                this.interval = setInterval(function () {
                    return _this3.tick();
                }, tickSpeed);
                this.game = React.createElement(Game, { map: map1, start: start1, player: this.player });
            }
            // to main
            else if (this.state.stage === 1) {
                    this.interval = setInterval(function () {
                        return _this3.tick();
                    }, tickSpeed);
                    this.game = React.createElement(Game, { map: map2, start: start2, player: this.player });
                }
            // increment
            this.setState(function (state) {
                return { stage: state.stage + 1 };
            });
        }
    }, {
        key: "render",
        value: function render() {
            // the content
            var game = null;
            // item select
            if (this.state.stage === 0) {
                game = React.createElement(Inventory, { player: this.player });
            }
            // tutorial or game
            else if (this.state.stage === 1 || this.state.stage === 2) {
                    game = this.game;
                }
                // end
                else {
                        game = React.createElement(EndCredit, null);
                    }

            // render
            return React.createElement(
                Fragment,
                null,
                React.createElement(UI, null),
                game
            );
        }
    }]);

    return App;
}(React.Component);

// grid: [x, y]
//  -1: invalid
//   0: empty
//   1: grass
// covidGrid: [x, y]
//   true/false


var Game = function (_React$Component3) {
    _inherits(Game, _React$Component3);

    function Game(props) {
        _classCallCheck(this, Game);

        var _this4 = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

        _this4.myPlayer = _this4.props.player;
        _this4.map = _this4.props.map;
        _this4.myStart = _this4.props.start;

        _this4.myEnemies = [];

        var _this4$myStart = _slicedToArray(_this4.myStart, 2);

        _this4.myPlayer.x = _this4$myStart[0];
        _this4.myPlayer.y = _this4$myStart[1];
        return _this4;
    }

    _createClass(Game, [{
        key: "tick",
        value: function tick() {
            this.myPlayer.tick();
            return true; // TODO
        }
    }]);

    return Game;
}(React.Component);

ReactDOM.render(React.createElement(Shell, null), document.getElementById("cont"));