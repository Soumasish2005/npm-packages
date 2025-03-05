"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EasyDsa = (function () {
    function EasyDsa() {
        _classCallCheck(this, EasyDsa);
    }

    _createClass(EasyDsa, [{
        key: "linearSearch",
        value: function linearSearch(arr, key) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === key) {
                    return i;
                }
            }
            return -1;
        }
    }, {
        key: "binarySearch",
        value: function binarySearch(arr, key) {
            var left = 0;
            var right = arr.length - 1;

            while (left <= right) {
                var mid = Math.floor((left + right) / 2);

                if (arr[mid] === key) return mid;
                if (arr[mid] < key) left = mid + 1;else right = mid - 1;
            }

            return -1; // Key not found
        }
    }]);

    return EasyDsa;
})();

exports.EasyDsa = EasyDsa;
