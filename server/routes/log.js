export default (route) => {
    route.get('/page/:pageSize/:pageIndex', async(ctx, next) => {
        ctx.body = await DB.models.project.c_getPage({ condition: {}, ...ctx.params });
    });
    return route;
}