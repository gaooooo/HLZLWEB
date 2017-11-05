//跨平台 执行命令
import spawn from 'cross-spawn-async';
export default {
    addEvent(obj, eventName, options, cb) {
        obj.on(eventName, (data) => {
            if (options.debugger !== false) {
                console.log(`${eventName}:${data} `);
            }
            cb && cb(data);
        });
    },
    /**
     * 
     * @param {cmd,deps,spawnOptions} options 
     */
    create(options) {
        let result = spawn(options.cmd, options.deps || [], Object.assign(options.spawnOptions, {}));
        this.addEvent(result.stdout, 'data', options, options.stdoutCallback);
        this.addEvent(result.stderr, 'data', options, options.stderrCallback);
        this.addEvent(result, 'close', options.closeCallback);
        return result;
    },
    /**
     * 
     * @param {命令名称} name 
     * @param {cwd} options 
     */
    run(name, options) {
        let result = this.create({
            deps: options.deps,
            cmd: name,
            spawnOptions: { cwd: options.cwd },
            stdoutCallback: (data) => {
                console.log(`STDOUT:${data}`);
                options.stdoutCallback && options.stdoutCallback(data);
            },
            stderrCallback: (data) => {
                console.log(`STDERR:${data}`)
            },
            closeCallback: (data) => {
                console.log(`CLOSE:${data}`)
                options.closeCallback && options.closeCallback(data);
            }
        })
    }
};