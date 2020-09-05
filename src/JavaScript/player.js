var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
    function Player(startX, startY, inventory) {
        _classCallCheck(this, Player);

        this.x = startX;
        this.y = startY;
        this.baseSpeed = baseSpeed;

        this.covidBar = 0; // out of 100

        this.inventory = inventory;
    }
    // grid: [x, y]
    //  -1: invalid
    //   0: empty
    //   1: grass


    _createClass(Player, [{
        key: "move",
        value: function move(xM, yM, grid) {
            var _ref = [Math.round(this.x), Math.round(this.y)],
                x = _ref[0],
                y = _ref[1];


            var tX = 0;
            for (var i = 0; i < this.baseSpeed; i++) {
                if (x + i >= grid.length) {
                    break;
                }
                if (grid[x + i][y] === -1) {
                    break;
                } else if (grid[x + i][y] === 0) {
                    tX += 1;
                } else if (grid[x + i][y] === 1) {
                    tX += 0.5;
                } else if (grid[x + i][y] === 2) {
                    this.covidBar++;
                    tX += 1;
                }
            }
        }
        // covidGrid: [x, y]
        //   true/false

    }, {
        key: "tick",
        value: function tick(enemies) {
            var _ref2 = [Math.round(this.x), Math.round(this.y)],
                currX = _ref2[0],
                currY = _ref2[1];

            // check grid

            for (var x = currX - 1; x < currX + 2; x++) {
                for (var y = currY - 1; y < currY + 2; y++) {
                    if (x > covidGrid.length || x < 0 || y > covidGrid[0].length || y < 0) {
                        if (covidGrid[x][y]) {
                            this.covidBar++;
                        }
                    }
                }
            }
        }
    }]);

    return Player;
}();