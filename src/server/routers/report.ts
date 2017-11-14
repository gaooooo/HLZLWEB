/**
 * report
 */
export default (router, { controller }) => {
    router.post('/', controller.bindAction('add'))
    router.delete('/', controller.bindAction('delete'))
    router.put('/:_id', controller.bindAction('update'))
    router.get('/page/:pageSize/:pageIndex', controller.bindAction('getPage'))
    router.get('/:_id', controller.bindAction('getById'))
} 