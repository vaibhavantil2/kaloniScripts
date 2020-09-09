/**
 * Commerce record view
 *
 * @module N/commerce/recordView
 * @NApiVersion 2.x
 *
 */
function recordView() {}
/**
 * Returns item's field values
 *
 * @param {Object} options
 * @param {array} options.ids Array of item ids for which the fields are returned
 * @param {array} options.fields Array of item fields that are returned
 *
 * @since 2019.1
 */
recordView.prototype.viewItems = function(options) {};

/**
 * Returns site's field values
 *
 * @param {Object} options
 * @param {array} options.id  Id of site for which the fields are returned
 * @param {array} options.fields List of website fields that are returned
 *
 * @since 2019.1
 */
recordView.prototype.viewWebsite = function(options) {};

recordView = new recordView();
var commerce = {};
/**
 * @type {commerce}
 */
N.prototype.commerce = commerce;
/**
 * @type {recordView}
 */
commerce.prototype.recordView = recordView;