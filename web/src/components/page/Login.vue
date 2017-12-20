<template>
<div class="clearfix">
<div id="header">
	<div class="header_title">
		<span class="title_con">北京市护理质量控制
			数据上报管理系统</span>
	</div>
</div>

<div id="content">
	<center>
		<div class="con">
		<div class="con_title">
			<span class="con_title_sp">欢迎登录数据上报系统</span>
		</div>
		<div class="con_panel">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="65px" class="demo-ruleForm">
            <el-form-item label="用户名"  prop="username">
                <el-input class="logininput"  autocomplete="off" v-model="ruleForm.username" placeholder="请填写用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码"  prop="password">
                <el-input class="logininput" autocomplete="off" type="password" placeholder="请填写密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
            </el-form-item>
            <el-form-item style="text-align:left;margin-bottom:2px;">
                <el-radio v-model="radioRole" label="1">医院用户</el-radio>
                <el-radio v-model="radioRole" label="2">管理员</el-radio>
            </el-form-item>
            <div class="login-btn">
               <el-button size="medium" class="submit-btn" type="success" @click="submitForm('ruleForm')" round>登录</el-button>
            </div>
          </el-form>
         </div>
		</div>
	</center>
</div>

<div id="footer">
	<center>
	</center>
</div>
     
</div>
</template>

<script>
import * as accountModel from 'src/api/account'
import * as hospitalModel from 'src/api/hospital'
    export default {
        data: function(){
            return {
                radioRole: '1',
                ruleForm: {
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
                }
            }
        },
        methods: {
            submitForm(formName) {
                // 医院登录
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                     let fetchlogin = this.radioRole === '1' ? hospitalModel.login(self.ruleForm.username, self.ruleForm.password) : accountModel.login(self.ruleForm.username, self.ruleForm.password)
                     fetchlogin.then(response => {
                        if (!response.data.status) {
                            this.$message({
                                showClose: true,
                                message: response.data.message,
                                type: 'error'
                            });
                            window.is_login = false
                            return
                        }
                        this.$message({
                          message: '登录成功！',
                          type: 'success'
                        });
                        window.is_login = true
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
        },
        mounted () {
          this.$refs['ruleForm'].resetFields();
        }
    }
</script>

<style>
body{padding: 0px;margin: 0px;overflow: hidden}
#header{width: auto;min-height: 70px;line-height: 70px;}
#header{border-bottom: medium solid #39A631;}
span.title_con{font-family:"微软雅黑";font-style: normal;font-size: 2em;font-weight:800 ;color: #39A631;padding-left: 1em;}
#content{width: auto;height:40em;text-align: center;background-image: url(../../../static/img/xgxt_login_bg.jpg);background-size: 100% 100%;}
#footer{width: auto;min-height: 60px;line-height:60px;}
#footer{border-top: thin solid #39A631;}
.con{width: 35%;height: 20em;margin-top:4em;}
.con{border: thin solid #8EC172;}
.con_title{background-color: #8EC172;width: auto;height: 3.5em;line-height: 3.5em;text-align: center;}
.con_title_sp{font-family: "微软雅黑";font-size: 1.5em;font-weight: 800;color: #FFF;}
.con_panel { width:70%; margin-top: 20px;}
.con_input{margin: 2em 0 1em 0;}
.submit-btn{width: 8em;height: 2em;background-color: #62ab00;border-radius: 4px;border: 0px;color: #fff;font-family:"微软雅黑";font-size: 1em;font-weight: bold;}
.con_input span{font-family: "微软雅黑";font-size: 1em;font-weight: bold;color: #333;}
.con_input input{width: 15em;padding: 0.5em 1em;border: 1px solid #bbb;}
.submit-btn{margin: 1em 0 1em 0;}
.con_select{font-family:"微软雅黑";font-size: 1em;color: #333;}
.el-radio__input.is-checked .el-radio__inner {
   border-color: #8EC172;
   background: #8EC172;
}
.el-radio__input.is-checked .el-radio__inner {

}
</style>