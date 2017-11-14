<template>
<div>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 医院管理</el-breadcrumb-item>
                <el-breadcrumb-item>医院信息管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="handle-box">
           <el-button type="primary" icon="plus" class="handle-del mr10" @click="handleAdd">添加</el-button>
            <el-button type="primary" icon="delete" class="handle-del mr10" @click="handleDelAll">批量删除</el-button>
            <el-input v-model="select_word" placeholder="请输入医院名称搜索" class="handle-input mr10"></el-input>
            <el-button type="primary" icon="search" @click="handleSearch">搜索</el-button>
        </div>
        <el-table :data="tableData" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="医院名称" sortable width="150">
            </el-table-column>
            <el-table-column prop="account" label="登录名" width="120">
            </el-table-column>
            <el-table-column prop="updateTimeString" label="最后一次更新时间">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template scope="scope">
                    <el-button size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                    @current-change ="handleCurrentChange"
                    layout="prev, pager, next"
                    :total="pageTotal">
            </el-pagination>
        </div>
    </div>
    <el-dialog
        :title="!option ? '新增' : '修改'"
        :visible.sync="editDialogVisible"
        width="30%"
        v-if="editDialogVisible"
        >
        <edit-modal :row="row" @on-ok="onOK" @on-cancel="onCancel" v-if="editDialogVisible"></edit-modal>
    </el-dialog>
</div>
</template>

<script>
import EditModal from './edit.vue'
import { add, getPage, del, update } from 'src/api/hospital'
    export default {
        data() {
            return {
                editDialogVisible: false,
                url: './static/vuetable.json',
                tableData: [],
                pageIndex: 1,
                pageSize: 10,
                pageTotal: 0,
                multipleSelection: [],
                select_word: '',
                row: null,
                option: 0
            }
        },
        components: {
          EditModal 
        },
        created(){
            this.getData();
        },
        computed: {
        },
        methods: {
            onCancel() {
              this.editDialogVisible = false;
            },
            onOK(model) {
              !this.option && add(model).then(response => {
                if (!response.data.status) {
                this.$message(response.data.message);
                return
                }
              });
              this.option && update(model._id, model).then(response => {
                if (!response.data.status) {
                  this.$message(response.data.message);
                  return
                }
              });
              this.getData()
              this.$message({
                message: !this.option ? '添加记录成功！' : '修改记录成功！',
                type: 'success'
              });
              this.editDialogVisible = false;
              
            },
            handleCurrentChange(val){
                this.pageIndex = val;
                this.getData();
            },
            getData(){
                // let self = this;
                // if(process.env.NODE_ENV === 'development'){
                //     self.url = '/ms/table/list';
                // };
                // self.$axios.post(self.url, {page:self.pageIndex}).then((res) => {
                //     self.tableData = res.data.list;
                // })
                let queryValue = !this.select_word.trim() ? {} : {name:this.select_word}
                getPage(this.pageIndex, this.pageSize, queryValue).then(response => {
                  if (!response.data.status) {
                    this.$message({
                        showClose: true,
                        message: response.data.message,
                        type: 'error'
                    });
                    return
                  }
                  this.tableData = response.data.data.list;
                  this.pageTotal = response.data.data.total;
                });
            },
            handleSearch(){
               this.getData()
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row) {
                this.option = 1;
                this.row = row;
                this.editDialogVisible = true;
            },
            async handleDelete(ids, row) {
              let delconfirm = false;
              ids = row && row._id || ids
              if (ids === ''){
                this.$message({
                  showClose: true,
                  message: '记录ID为空！',
                  type: 'error'
                });
                return
              }
              try {
                await this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                })
                delconfirm = true;
              }
              catch (error) {
                delconfirm = false;
              }
              if (!delconfirm) { return; }
              del(ids.toString()).then(response => {
                if (!response.data.status) {
                  this.$message(response.data.message);
                  return
                }
              });
              this.getData()
              this.$message({
                message: '删除成功！',
                type: 'success'
              });
            },
            handleAdd () {
              this.option = 0;
              this.row = null;
              this.editDialogVisible = true;
            },
            handleSubmit() {
              console.log(this.$refs)
            },
            handleDelAll(){
              const self = this;
              if (self.multipleSelection.length === 0) {
                this.$message({
                  showClose: true,
                  message: '请选择要删除的记录！',
                  type: 'error'
                });
                return
              }
              let del_list = [].concat(self.multipleSelection);
              self.handleDelete(del_list.map(x => x._id).toString());
              self.multipleSelection = [];
            },
            handleSelectionChange(val) {
              this.multipleSelection = val;
            }
        }
    }
</script>

<style>
.handle-box{
    margin-bottom: 20px;
}
.handle-select{
    width: 120px;
}
.handle-input{
    width: 300px;
    display: inline-block;
}
</style>