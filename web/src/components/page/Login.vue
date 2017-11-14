<template>
    <div class="login-wrap">
        <div class="ms-title"><div>北京市护理质量控制</div><div>数据上报管理系统</div></div>
        <div class="ms-login">
            <el-tabs type="border-card">
            <el-tab-pane label="医院登录">
           
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                    <el-form-item prop="username">
                        <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                    </el-form-item>
                    <div class="login-btn">
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    </div>
                    <p style="font-size:12px;line-height:30px;color:#999;">Tips : 请选择对应的登录选项卡。</p>
                </el-form>
      
        
            </el-tab-pane>
            <el-tab-pane label="管理员登录">
                <el-form :model="lruleForm" :rules="lrules" ref="lruleForm" label-width="0px" class="demo-ruleForm">
                    <el-form-item prop="lusername">
                        <el-input v-model="lruleForm.username" placeholder="lusername"></el-input>
                    </el-form-item>
                    <el-form-item prop="lpassword">
                        <el-input type="password" placeholder="password" v-model="lruleForm.password" @keyup.enter.native="submitForm('lruleForm')"></el-input>
                    </el-form-item>
                    <div class="login-btn">
                        <el-button type="primary" @click="submitFormL('lruleForm')">登录</el-button>
                    </div>
                    <p style="font-size:12px;line-height:30px;color:#999;">Tips : 请选择对应的登录选项卡。</p>
                </el-form>
           </el-tab-pane>
           </el-tabs>
       </div>
 </div>
</template>

<script>
import * as accountModel from 'src/api/account'
import * as hospitalModel from 'src/api/hospital'
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                lruleForm: {  
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                },
                lrules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                // 医院登录
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                     hospitalModel.login(self.ruleForm.username, self.ruleForm.password).then(response => {
                        if (!response.data.status) {
                            this.$message({
                                showClose: true,
                                message: response.data.message,
                                type: 'error'
                            });
                            return
                        }
                        this.$message({
                          message: '登录成功！',
                          type: 'success'
                        });
                        localStorage.setItem('ms_name', response.data.data.name);
                        localStorage.setItem('ms_account', response.data.data.account);
                        localStorage.setItem('ms_permission', response.data.data.role);
                        self.$router.push('/readme');
                      });
                    } else {
                        this.$message('请检查数据格式！');
                        return false;
                    }
                });
            },
            submitFormL(formName) {
                // 管理员登录
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                     accountModel.login(self.lruleForm.username, self.lruleForm.password).then(response => {
                        if (!response.data.status) {
                            this.$message({
                                showClose: true,
                                message: response.data.message,
                                type: 'error'
                            });
                            return
                        }
                        this.$message({
                          message: '登录成功！',
                          type: 'success'
                        });
                        localStorage.setItem('ms_name', response.data.data.name);
                        localStorage.setItem('ms_account', response.data.data.account);
                        localStorage.setItem('ms_permission', response.data.data.role);
                        self.$router.push('/readme');
                      });
                    } else {
                        this.$message('请检查数据格式！');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:45%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:400px;
        height:160px;
        margin:-150px 0 0 -190px;
        border-radius: 5px;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>