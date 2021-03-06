/**
 * Utility functions for ad loading because we want to load the ads module ASAP,
 *  before any other JS libs that might provide these functions.
 */
var Utils = {

  /**
   * Extend given object by given non-parameterized arguments.
   *
   * @param {object} out - object to extend.
   * @returns {object} extended object.
   */
  extend: function (out) {
    out = out || {};

    for (var i = 1; i < arguments.length; i++) {
      if (!arguments[i])
        continue;

      for (var key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key))
          out[key] = arguments[i][key];
      }
    }

    return out;
  },

  dispatchEvent: function (el, eventName) {
    var customEvent;
    try {
      customEvent = new window.CustomEvent(eventName, {
        bubbles: true,
        cancelable: true
      });
    }
    catch (e) {
      customEvent = document.createEvent('Event');
      customEvent.initEvent(eventName, true, true);
    }
    el.dispatchEvent(customEvent);
  }
};

module.exports = Utils;
