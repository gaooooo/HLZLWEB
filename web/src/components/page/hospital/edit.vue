
<template>

        <div class="form-box">
            <el-form :model="ruleForm" ref="ruleForm" label-width="200px" class="demo-ruleForm">
               <el-form-item
                    label="医院名称"
                    prop="hospital"
                    :rules="[
                    { required: true, message: '医院名称不能为空'}
                    ]">
                <el-input type="hospital" v-model.number="ruleForm.hospital" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="登录名"
                    prop="account"
                    :rules="[
                    { required: true, message: '登录名不能为空'}
                    ]">
                <el-input type="account" v-model.number="ruleForm.account" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="初始密码"
                    prop="password"
                    :rules="[
                    { required: true, message: '初始密码不能为空'}
                    ]">
                <el-input type="password" v-model.number="ruleForm.password" auto-complete="off"></el-input>
                </el-form-item>
                
                </el-form>
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