export default (io) => {
    io.on('log', (context, data) => {
        //检测成功响应事件
        context.socket.emit('log-response', 'log-response');
    });
};