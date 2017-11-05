export default (route) => {
    //标准分页的写法   使用路径参数
    route.get('/page/:pageSize/:pageIndex', async(ctx, next) => {
        ctx.body = await DB.models.project.c_getPage({ condition: {}, ...ctx.params });
    });
}