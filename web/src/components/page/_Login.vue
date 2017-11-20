<template>
   <div class="login">
        <span class="login_title">北京市护理质量控制<br/>数据上报管理系统</span>
       
        <div class="tab-wrapper login_content">
    <!--tab section 1-->
    <input type="radio" name="tab-radio" class="tab-radio" id="tab-radio-1" checked>
    <label for="tab-radio-1" class="tab-handler tab-handler-1">医院登录</label>
    <div class="tab-content tab-content-1">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <el-form-item prop="username">
            <el-input class="logininput"  autocomplete="off" v-model="ruleForm.username" placeholder="username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input class="logininput" autocomplete="off" type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <div class="login-btn">
            <el-button class="btn btn-primary btn-block btn-large" type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
      </el-form>
    
    </div>
    <!--tab section 2-->
    <input type="radio" name="tab-radio" class="tab-radio" id="tab-radio-2">
    <label for="tab-radio-2" class="tab-handler tab-handler-2">管理员登录</label>
    <div class="tab-content tab-content-2">
      <el-form :model="lruleForm" :rules="lrules" ref="lruleForm" label-width="0px" class="demo-ruleForm">
            <el-form-item prop="lusername">
                <el-input class="logininput" autocomplete="off" v-model="lruleForm.lusername" placeholder="lusername"></el-input>
            </el-form-item>
            <el-form-item prop="lpassword">
                <el-input class="logininput" autocomplete="off" type="password" placeholder="password" v-model="lruleForm.lpassword" @keyup.enter.native="submitForm('lruleForm')"></el-input>
            </el-form-item>
            <div class="login-btn">
                <el-button  class="btn btn-primary btn-block btn-large" type="primary" @click="submitFormL('lruleForm')">登录</el-button>
            </div>
        </el-form>
    </div>
  
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
                    lusername: '',
                    lpassword: ''
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
                    lusername: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    lpassword: [
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
                        localStorage.setItem('ms_id', response.data.data._id);
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
                     accountModel.login(self.lruleForm.lusername, self.lruleForm.lpassword).then(response => {
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
                        localStorage.setItem('ms_id', response.data.data._id);
                        self.$router.push('/readme');
                      });
                    } else {
                        this.$message('请检查数据格式！');
                        return false;
                    }
                });
            }
        },
        created () {
          this.ruleForm.username = ''
          this.ruleForm.password = ''
          this.lruleForm.lusername = ''
          this.lruleForm.lpassword = ''
        },
        mounted () {
          this.$refs['ruleForm'].resetFields();
          this.$refs['lruleForm'].resetFields();
        }
    }
</script>

<style>      
    .login_content .btn { height: 50px; display: inline-block; *display: inline; *zoom: 1; padding: 4px 10px 4px; margin-bottom: 0; font-size: 13px; line-height: 18px; color: #333333; text-align: center;text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); vertical-align: middle; background-color: #f5f5f5; background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6); background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6); background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6)); background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6); background-image: -o-linear-gradient(top, #ffffff, #e6e6e6); background-image: linear-gradient(top, #ffffff, #e6e6e6); background-repeat: repeat-x; filter: progid:dximagetransform.microsoft.gradient(startColorstr=#ffffff, endColorstr=#e6e6e6, GradientType=0); border-color: #e6e6e6 #e6e6e6 #e6e6e6; border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25); border: 1px solid #e6e6e6; -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); cursor: pointer; *margin-left: .3em; }
    .login_content .btn:hover, .btn:active, .btn.active, .btn.disabled, .btn[disabled] { background-color: #e6e6e6; }
    .login_content .btn-large { padding: 9px 14px; font-size: 15px; line-height: normal; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; }
    .login_content .btn:hover { color: #333333; text-decoration: none; background-color: #e6e6e6; background-position: 0 -15px; -webkit-transition: background-position 0.1s linear; -moz-transition: background-position 0.1s linear; -ms-transition: background-position 0.1s linear; -o-transition: background-position 0.1s linear; transition: background-position 0.1s linear; }
    .login_content .btn-primary, .btn-primary:hover { text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); color: #ffffff; }
    .login_content .btn-primary.active { color: rgba(255, 255, 255, 0.75); }
    .login_content .btn-primary { background-color: #4a77d4; background-image: -moz-linear-gradient(top, #6eb6de, #4a77d4); background-image: -ms-linear-gradient(top, #6eb6de, #4a77d4); background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#6eb6de), to(#4a77d4)); background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4); background-image: -o-linear-gradient(top, #6eb6de, #4a77d4); background-image: linear-gradient(top, #6eb6de, #4a77d4); background-repeat: repeat-x; filter: progid:dximagetransform.microsoft.gradient(startColorstr=#6eb6de, endColorstr=#4a77d4, GradientType=0);  border: 1px solid #3762bc; text-shadow: 1px 1px 1px rgba(0,0,0,0.4); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5); }
    .login_content .btn-primary:hover, .btn-primary:active, .btn-primary.active, .btn-primary.disabled, .btn-primary[disabled] { filter: none; background-color: #4a77d4; }
    .login_content .btn-block { width: 100%; display:block; }
    .login {
      width: 100%;
      height: 100%;
      font-family: 'Open Sans', sans-serif;
      background: #092756;
      background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,  rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg,  #670d10 0%, #092756 100%);
      background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
      background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
      background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
      background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
    }

    .login .login_title {
        display: inline-block;
        width: 100%;
        font-size: 36px; 
        color: #fff; 
        text-shadow: 0 0 10px rgba(0,0,0,0.3); 
        letter-spacing:1px; 
        text-align:center;
        position: absolute;
        margin-top: 120px;
    }
    .logininput .el-input__inner { 
        width: 100%; 
        height: 50px;
        margin-bottom: 10px; 
        background: rgba(0,0,0,0.3);
        border: none;
        outline: none;
        padding: 10px;
        font-size: 13px;
        color: #fff;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 4px;
        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);
        -webkit-transition: box-shadow .5s ease;
        -moz-transition: box-shadow .5s ease;
        -o-transition: box-shadow .5s ease;
        -ms-transition: box-shadow .5s ease;
        transition: box-shadow .5s ease;
    }
    .logininput input:focus { box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); }
    .tab-wrapper{
        border: 1px solid rgba(0,0,0,0.3);
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -100px 0 0 -250px;
        width:500px;
        height:340px;
    }
    .tab-wrapper .tab-radio{
        display: none;
    }
    .tab-handler{
        position: relative;
        z-index: 2;
        display: block;
        float: left;
        height: 60px;
        padding: 0 40px;
        color: #717181;
        font-size: 16px;
        line-height: 60px;
        transition: .3s;
        transform: scale(.9);
        width: 50%;
        text-align: center;
    }
    .tab-radio:checked + .tab-handler{
        color: #fff;
        background-color: #e74c3c;
        transform: scale(1);
    }
    .tab-radio:checked + .tab-handler + .tab-content{
        visibility: visible;
        opacity: 1;
        transform: scale(1);
    }
    .tab-wrapper .tab-content{
        visibility: hidden;
        position: absolute;
        width: 100%;
        background: transparent;
        top: 60px;
        left: 0;
        padding: 30px;
        color: #999;
        font-size: 14px;
        line-height: 1.618em;
        opacity: 0;
        transition: transform .5s, opacity .7s;
        transform: translateY(20px);
    }
</style>