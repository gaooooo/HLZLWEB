
<template>
  <div style="text-align:right">
        hahhhaahah
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
      };
    },
    methods: {
      onCancel() {
        this.$emit('on-cancel')
      },
      onOK() {
        this.$emit('on-ok');
      }
    },
    created() {
    },
    mounted() {
      this.row ? (this.ruleForm = Object.assign(this.ruleForm, this.row)) : this.resetForm()
    }
  }
</script>