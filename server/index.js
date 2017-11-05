const requireHelper = appUtils.requireCommon('requireHelper');
const debug = require('debug')('server');
export default async function init(app) {
    requireHelper.requireDir([__dirname, 'inits'], (item) => {
        item && item.init && (item.init(app, { debug }));
    });
}