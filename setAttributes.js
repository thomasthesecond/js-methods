define(function() {
  'use strict';

  /**
   * Sets a number of attrbutes to a given element.
   * @param {Object} element    Element on which to set attributes
   * @param {Object} attributes Object literal of attributes
   *
   * @usage
   * ```
   * setAttributes(document.querySelector('li'), {
   *   tabindex: '-1',
   *   'aria-selected': 'false'
   * });
   * ```
   */
  var setAttributes = function(element, attributes)
  {
    for (var key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  };

  return setAttributes;
});
