
<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>首页</el-breadcrumb-item>
                <el-breadcrumb-item>修改密码</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form :model="ruleForm" ref="ruleForm" label-width="200px" class="demo-ruleForm">
                <el-form-item
                    label="用户名">
                <span>{{account }}</span>
                </el-form-item>
                 <el-form-item
                    label="新密码"
                    prop="password"
                    :rules="[
                    { required: true, message: '本字段不能为空'}
                    ]">
                <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="重复新密码"
                    prop="passwordagain"
                    :rules="[
                    { required: true, message: '本字段不能为空'}
                    ]">
                <el-input type="password" v-model="ruleForm.passwordagain" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="">
                 <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                 <el-button type="info" @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
           
        </div>
    </div>
</template>
<script>
import  * as accountModel from 'src/api/account'
import  * as hospitalModel from 'src/api/hospital'
  export default {
    data() {
      return {
        ruleForm: {
          password: '',
          passwordagain: ''
        }
        // rules: {
        //   name: [
        //     { required: true, message: '请输入活动名称', trigger: 'blur' },
        //     { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        //   ],
        //   type: [
        //     { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        //   ],
        //   resource: [
        //     { required: true, message: '请选择活动资源', trigger: 'change' }
        //   ],
        //   desc: [
        //     { required: true, message: '请填写活动形式', trigger: 'blur' }
        //   ]
        // }
      };
    },
    computed:{
        _id(){
            let ms_id = localStorage.getItem('ms_id');
            return ms_id;
        },
        account(){
            let ms_account = localStorage.getItem('ms_account');
            return ms_account;
        },
        role() {
           let ms_role = localStorage.getItem('ms_permission');
           return ms_role;
        }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (this.ruleForm.password !== this.ruleForm.passwordagain) {
              this.$message('两次输入密码不一致！');
              return false;
            }
            console.log(this.role)
            console.log(accountModel)
            // 这里是异步请求
            this.role == '1' && accountModel.update(this._id, this.ruleForm).then(response => {
              if (!response.data.status) {
                this.$message({
                    showClose: true,
                    message: response.data.message,
                    type: 'error'
                });
                return
              }
              this.$message({
                message: '管理员密码修改成功，请重新登录！',
                type: 'success'
              });
              this.$router.push('/login');
            });

            this.role == '2' && hospitalModel.update(this._id, this.ruleForm).then(response => {
              if (!response.data.status) {
                this.$message({
                    showClose: true,
                    message: response.data.message,
                    type: 'error'
                });
                return
              }
              this.$message({
                message: '医院密码修改成功，请重新登录！',
                type: 'success'
              });
              this.$router.push('/login');
            });
          } else {
            this.$message('请检查数据格式！');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>