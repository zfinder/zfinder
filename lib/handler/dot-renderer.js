'use strict';
/**
 * dot-renderer module
 * @module dot-renderer
 * @see module:index
 */
const Handler = require('./base');
const viz2svg = require('../common/viz2svg');

const name = 'dot-renderer';

module.exports = new Handler({
  method: 'get',
  name,
  url: '*',
  toRoute() {
    return (req, res, next) => {
      /*
       * params might affect handler:
       * {
       *    _handler: 'dot-renderer',
       *    content: 'dot language',
       * }
       */
      if (req._handler === name) {
        try {
          res._sendRes(viz2svg(req._params.content, 'dot'), 'image/svg+xml');
        } catch (err) {
          next(err);
        }
      } else {
        next();
      }
    };
  }
});
