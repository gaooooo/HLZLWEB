<template>
<div>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 数据管理</el-breadcrumb-item>
                <el-breadcrumb-item>查看上报记录</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="handle-box">
           <el-button type="primary" icon="plus" class="handle-del mr10" @click="handleAdd">数据上报</el-button>
            <el-button type="primary" icon="delete" class="handle-del mr10" v-if="userpermission == '1'" @click="handleDelAll">批量删除</el-button>
            <el-input v-model="select_word" placeholder="请输入医院名称搜索" class="handle-input mr10" v-if="userpermission == '1'"></el-input>
             <el-date-picker
      v-model="dataValue"
      type="daterange"
      align="right"
      placeholder="选择日期范围"
      :picker-options="datePickerOptions">
    </el-date-picker>
            <el-button type="primary" icon="search" @click="handleSearch" v-if="userpermission == '1'">搜索</el-button>
            <el-button style="float:right" type="primary" @click="handleExport" v-if="userpermission == '1'">导出统计表</el-button>
        </div>
        <el-table :data="tableData" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="hospital_name" label="医院名称" sortable width="150">
            </el-table-column>
            <el-table-column prop="qykfcws" label="全院开放床位数" width="120">
            </el-table-column>
            <el-table-column prop="qyzzjhbfcws" label="全院重症监护病房床位数">
            </el-table-column>
            <el-table-column prop="qyzchszs" label="全院注册护士总数">
            </el-table-column>
            <el-table-column prop="wzchszs" label="未注册护士总数">
            </el-table-column>
            <el-table-column prop="updateTimeString" label="最近一次更新时间">
            </el-table-column>
            <el-table-column prop="state" label="上报状态">
                <template scope="scope">
                   <el-tag :type="!scope.row.state ? 'warning' : 'success'">{{ scope.row.state ? '已上报' : '未上报' }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template scope="scope">
                    <el-button size="small"
                            @click="handleView(scope.$index, scope.row)">查看</el-button>
                     <el-button size="small"  v-if="userpermission == '1' || scope.row.state === 0"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" v-if="userpermission == '1' || scope.row.state === 0"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                    @current-change ="handleCurrentChange"
                    layout="total, prev, pager, next"
                    :total="pageTotal">
            </el-pagination>
        </div>
    </div>
    <el-dialog
        title="查看"
        :visible.sync="viewDialogVisible"
        width="30%"
        v-if="viewDialogVisible"
        >
        <view-modal :row="row" @on-ok="onOK" @on-cancel="onCancel" v-if="viewDialogVisible"></view-modal>
    </el-dialog>
</div>
</template>

<script>
import ViewModal from './view.vue'
import { getPage, del, download } from 'src/api/report'
    export default {
        data() {
            return {
                datePickerOptions: {
                  shortcuts: [{
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                  }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                  },{
                    text: '最近一年',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
                        picker.$emit('pick', [start, end]);
                    }
                  }, ]
                },
                dataValue: '',
                viewDialogVisible: false,
                tableData: [],
                pageIndex: 1,
                pageSize: 10,
                pageTotal: 0,
                multipleSelection: [],
                select_word: '',
                row: null
            }
        },
        computed:{
            userpermission(){
                let ms_permission = localStorage.getItem('ms_permission');
                return ms_permission;
            }
        },
        components: {
          ViewModal 
        },
        created(){
            this.getData();
        },
        methods: {
            onCancel() {
              this.viewDialogVisible = false;
            },
            onOK(model) {
              this.viewDialogVisible = false;
            },
            handleExport () {
              let str = ''
              if (this.select_word.trim()) {
                str += `&name=${this.select_word.trim()}`
              }
              if (this.dataValue) {
                str += `&start_date=${+this.dataValue[0]}&end_date=${+this.dataValue[1]}`
              }
              download(`/report/page/1000/1?is_export=1` + str)
            },
            handleCurrentChange(val){
                this.pageIndex = val;
                this.pageSize = 10;
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
                if (this.dataValue) {
                  Object.assign(queryValue, {start_date: +this.dataValue[0]}, {end_date: +this.dataValue[1]})
                }
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
            handleView(index, row) {
                this.row = row;
                this.viewDialogVisible = true;
            },
            handleEdit(index, row) {
                this.$router.push({path: '/report', query: { row }})
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
              this.$message({
                message: '删除成功！',
                type: 'success'
              });
              this.getData()
            },
            handleAdd () {
              this.$router.push('/report')
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