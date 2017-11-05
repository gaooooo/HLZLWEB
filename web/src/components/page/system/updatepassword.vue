
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
                <el-input type="account" v-model.number="ruleForm.account" auto-complete="off" :disabled="true"></el-input>
                </el-form-item>
                 <el-form-item
                    label="新密码"
                    prop="password"
                    :rules="[
                    { required: true, message: '本字段不能为空'}
                    ]">
                <el-input type="password" v-model.number="ruleForm.password" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="重复新密码"
                    prop="passwordagain"
                    :rules="[
                    { required: true, message: '本字段不能为空'}
                    ]">
                <el-input type="passwordagain" v-model.number="ruleForm.passwordagain" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="">
                 <el-button type="primary">保存</el-button>
                 <el-button type="info">重置</el-button>
                </el-form-item>
            </el-form>
           
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
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
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
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