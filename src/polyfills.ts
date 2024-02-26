/************************************************************************************
 * BROWSER POLYFILLS
 */

/** IE9, IE10, IE11, and older Chrome/Firefox/Opera/Safari/Edge browsers **/
import 'core-js/es6';

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
import 'classlist.js';  // Run `npm install --save classlist.js`.

/************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js/dist/zone';  // Included with Angular CLI.

/************************************************************************************
 * APPLICATION IMPORTS
 */

/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11, Safari 10
 */
import 'intl';  // Run `npm install --save intl`.

/**
 * Need to import at least one locale-data with intl.
 */
import 'intl/locale-data/jsonp/en';
