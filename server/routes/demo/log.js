const pm2Helper = appUtils.requireCommon('pm2Helper');

export default (route, { logger }) => {
    route.get('/', async(ctx, next) => {
        ctx.body = 'logger';
        logger.info('我了个去');
    });

    return route;
}