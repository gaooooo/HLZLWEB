/**
 * 日志表
 */
export default (mongoose, Schema) => {
    return {
        Schema: {
            //项目名称
            projectId: {
                type: Schema.Types.ObjectId,
                required: true
            },
            envTypes: {
                test: {
                    logFile: {
                        type: Schema.Types.ObjectId,
                        required: true
                    }
                },
                prod: {
                    logFile: {
                        type: Schema.Types.ObjectId,
                        required: true
                    }
                }
            },
            prod: {}
        },
        statics: {

        }
    }
}