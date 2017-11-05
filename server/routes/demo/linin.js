export default(route) => {
    route.get('/api1', async(ctx, next) => {
        let data = await DB.models.student.c_find({ condition: {} })
        ctx.body = global.JSONResponse(1, data, '查询成功');
    });
    return route;
}