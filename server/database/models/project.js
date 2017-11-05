/**
 * 项目表
 */
export default (mongoose, Schema) => {
    return {
        Schema: {
            code: {
                type: Schema.Types.String,
                required: true
            },
            createUser: {
                type: Schema.Types.String,
                required: true
            },
            name: {
                type: Schema.Types.String,
                required: true
            },
            catalog: {
                type: Schema.Types.String,
                required: true
            },
            sysType: {
                type: Schema.Types.String,
                required: true
            },
            gitUrl: {
                type: Schema.Types.String,
                required: true
            },
            gitBranch: {
                type: Schema.Types.String,
                required: true
            },
            describe: {
                type: Schema.Types.String,
                required: true
            },
            envTypes: {
                test: {
                    address: {
                        type: Schema.Types.String,
                        required: true
                    },
                    status: {
                        type: Schema.Types.Number,
                        required: true
                    },
                    port: {
                        type: Schema.Types.Number,
                        required: true
                    },
                    nodeEnv: {
                        type: Schema.Types.Array,
                        required: true
                    }
                },
                prod: {
                    required: false,
                    address: {
                        type: Schema.Types.String,
                        required: true
                    },
                    status: {
                        type: Schema.Types.Number,
                        required: true
                    },
                    port: {
                        type: Schema.Types.Number,
                        required: true
                    },
                    nodeEnv: {
                        type: Schema.Types.Object,
                        required: true
                    }
                }
            }

        },
        statics: {

        }
    }
}