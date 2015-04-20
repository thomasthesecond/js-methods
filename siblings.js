define(function() {
  'use strict';

  /**
   * Returns a list of an element's siblings. After you get the object and set
   * it to a variable, you can then loop through the object using the
   * forEach utility.
   * @param  {Object} element     `querySelector` element
   * @param  {Object} elementList NodeList with element
   * @return {Object}             NodeList without element
   */
   var siblings = function(element, elementList) {
    var siblingList = [];

    for (var i = elementList.length - 1; i >= 0; i--) {
      if (elementList[i] !== element) {
        siblingList.push(elementList[i]);
      }
    }

    return siblingList;
  };

  return siblings;
});
