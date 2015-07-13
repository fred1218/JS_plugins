// run the polyfills
require('./polyfill/index');

var core = module.exports = require('./core/index');

// add core plugins.
core.extras         = require('./extras/index');
core.filters        = require('./filters/index');
core.interaction    = require('./interaction/index');
core.loaders        = require('./loaders/index');
core.mesh           = require('./mesh/index');

// export a premade loader instance
/**
 * A premade instance of the loader that can be used to loader resources.
 *
 * @name loader
 * @memberof PIXI
 * @property {PIXI.loaders.Loader}
 */
core.loader = new core.loaders.Loader();

// mixin the deprecation features.
Object.assign(core, require('./deprecation'));

// Always export pixi globally.
global.PIXI = core;
