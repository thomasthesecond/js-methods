define([], function()
{
  'use strict';

  /**
   * Loops through each event, attaches a listener and creates a fallback
   * with `attachEvent`.
   * @private
   * @param {Object}   element  The element on which to attach the listener
   * @param {Array}    events   An array containing the event(s) to listen for
   * @param {Function} listener The function that's called when the event fires
   */
   function addEventListener(element, events, listener)
   {
    for (var i = 0, length = events.length; i < length; i++) {
      if (element.addEventListener) {
        element.addEventListener(events[i], listener, false);

      } else {
        element.attachEvent('on' + events[i], listener);

      }
    }
  }

  /**
   * Attaches an event to an element.
   * @public
   * @param {Object}   element  The element on which to attach the listener
   * @param {String}   events   A string containing the event(s) to listen for;
   *                            separate multiple events by a space. The string
   *                            gets converted to an array by the `split` method
   * @param {Function} listener The function that's called when the event fires
   *
   * @usage
   * ```
   * var button = document.querySelector('button');
   * addEvent(button, 'click touchstart', function(event) {
   *   // do something
   *   event.preventDefault();
   * });
   * ```
   */
   var addEvent = function(element, events, listener)
   {
    events = events.split(' ');

    if (typeof element.length === 'undefined' || element.length === 0) {
      addEventListener(element, events, listener);

    } else {
      for (var i = 0, length = element.length; i < length; i++) {
        addEventListener(element[i], events, listener);
      }

    }
  };

  return addEvent;
});
