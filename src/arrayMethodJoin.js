'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let index = 0;

    while (index < this.length) {
      let joinElement = this[index];
      if (joinElement === null || joinElement === undefined) {
        joinElement = '';
      }
      if (index === this.length - 1) {
        result += joinElement;
        break;
      }
      result += joinElement + `${separator}`;
      index++;
    }
    return result;
  };
}

module.exports = applyCustomJoin;
