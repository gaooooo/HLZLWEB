<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-if="userpermission == '1'" v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
            <template v-if="userpermission == '2'" v-for="item in itemshospital">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                role: 2,
                items: [
                    {
                        icon: 'el-icon-date',
                        index: '1',
                        title: '数据管理',
                        subs: [
                            {
                                index: 'report',
                                title: '数据上报'
                            },
                            {
                                index: 'reportlist',
                                title: '查看上报'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: '2',
                        title: '医院管理',
                        subs: [
                            {
                                index: 'hospital',
                                title: '医院信息管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-setting',
                        index: '3',
                        title: '系统管理',
                        subs: [
                            {
                                index: 'account',
                                title: '账号管理'
                            }
                        ]
                    }
                ],
                itemshospital: [
                    {
                        icon: 'el-icon-date',
                        index: '1',
                        title: '数据管理',
                        subs: [
                            {
                                index: 'report',
                                title: '数据上报'
                            },
                            {
                                index: 'reportlist',
                                title: '查看上报'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            },
            userpermission(){
                let ms_permission = localStorage.getItem('ms_permission');
                console.log(1111111111, ms_permission)
                return ms_permission;
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
