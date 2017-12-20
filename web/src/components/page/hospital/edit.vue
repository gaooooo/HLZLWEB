
<template>
  <div style="text-align:right">
        <div class="form-box">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="hosipital-form">
               <el-form-item
                    label="医院名称"
                    prop="name"
                    :rules="[
                    { required: true, message: '医院名称不能为空'}
                    ]">
                <el-input type="name" v-model="ruleForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="登录名"
                    prop="account"
                    :rules="[
                    { required: true, message: '登录名不能为空'}
                    ]">
                <el-input type="account" v-model="ruleForm.account" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="登录密码"
                    prop="password"
                    :rules="[
                    { required: true, message: '登录密码不能为空'}
                    ]">
                <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
                </el-form-item>
                
                </el-form>
                        
        </div>
        
        <span slot="footer" class="dialog-footer" style="text-align:right">
            <el-button @click.native="onCancel">取 消</el-button>
            <el-button type="primary" @click.native="onOK">确 定</el-button>
        </span>
  </div>
</template>
<script>
  export default {
    props: {
      row: Object
    },
    data() {
      return {
        ruleForm: {
          name: '',
          account: '',
          password: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入医院名称', trigger: 'blur' }
          ],
          account: [
            { required: true, message: '请输入登录名', trigger: 'blur' },
            { min: 6, message: '长度至少6个字符！', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入登录密码', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      onCancel() {
        this.$emit('on-cancel')
      },
      onOK() {
        this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            this.$emit('on-ok', this.ruleForm);
          } else {
            this.$message('请检查数据格式！');
            return false;
          }
        });
      },
      resetForm() {
        this.$refs['ruleForm'].resetFields();
      }
    },
    created() {
    },
    mounted() {
      this.row ? (this.ruleForm = Object.assign(this.ruleForm, this.row)) : this.resetForm()
    }
  }
</script>