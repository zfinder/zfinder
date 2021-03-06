'use strict';
/**
 * text-editor module
 * @module text-editor
 * @see module:index
 */
const lang = require('zero-lang');
const fs = require('fs');
const escape = require('escape-html');
const Handler = require('./base');
const template = require('../template/text-editor');

const name = 'text-editor';
const DEFAULT_OPTIONS = {
  maxFileSize: 1024000,
};

module.exports = new Handler({
  method: 'get',
  name,
  url: '*',
  toRoute(options, rc) {
    options = lang.extend({}, DEFAULT_OPTIONS, options);

    return (req, res, next) => {
      /*
       * params might affect handler:
       * {
       *    _raw: true,
       * }
       */
      const pathname = req._normalizedPathname;
      const stats = req._stats;
      if (!req._raw && req._handler === name && req._isFile && !req._isBinary && stats.size < options.maxFileSize) {
        try {
          const pathInfo = req._pathInfo;
          res._HTMLRes(template({
            content: escape(fs.readFileSync(pathname, 'utf8')),
            pathInfo,
            language: req._fileLanguage,
            rc,
            title: pathInfo.basename,
          }));
        } catch (err) {
          next(err);
        }
      } else {
        next();
      }
    };
  }
});
