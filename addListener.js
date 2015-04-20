define(function() {
  'use strict';

  /**
   * Adds a listener for `matchMedia` and runs a callback function when the
   * media query matches.
   * @param {String}   breakpoint Media query to listen for
   * @param {Function} callback   Callback function to run when the query
   *                              matches
   *
   * @usage
   * ```
   * addListener('screen and (min-width: 30em)', function() {
   *   // do something at the given breakpoint
   * });
   * ```
   */
   var addListener = function(breakpoint, callback) {
    var query = window.matchMedia(breakpoint);

    if (typeof callback === 'function') {
      query.addListener(callback);

      callback(query);
    }
  };

  return addListener;
});
