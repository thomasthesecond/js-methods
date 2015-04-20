define(function()
{
  'use strict';

  /**
   * Loops through a NodeList or Array and runs a function
   * @author [Todd Moto](http://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/)
   * @param  {Array}    array    NodeList or Array to loop through
   * @param  {Function} callback Function to run within loop
   * @param  {Object}   scope    Scope in which to run the function
   *
   * @usage
   * Optionally change the scope as final parameter
   * ```
   * var myNodeList = document.querySelectorAll('li');
   * forEach(myNodeList, function(value, index) {
   *   console.log(value, index); // passes value, index
   * });
   * ```
   */
   var forEach = function(array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, array[i], i);
    }
  };

  return forEach;
});
