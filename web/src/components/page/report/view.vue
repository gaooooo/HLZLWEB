
<template>
  <div style="text-align:right">
        <table class="scanner-modal__table">
        <tbody>
        <tr>
          <td class="scanner-modal__tit">全院开放床位数（张）</td>
          <td>{{row.qykfcws}}</td>
          <td class="scanner-modal__tit">全院重症监护病房床位数（张）</td>
          <td>{{row.qyzzjhbfcws}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">全院注册护士总数（人）</td>
          <td>{{row.qyzchszs}}</td>
          <td class="scanner-modal__tit">未注册护士总数（人）</td>
          <td>{{row.wzchszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">从事护理工作护士总数（人）</td>
          <td>{{row.cshlgzhszs}}</td>
          <td class="scanner-modal__tit">从事护理工作的护理人员占全院卫生技术人员的比例（%）</td>
          <td>{{row.cshlgzdhlryzqywsjsrydbl}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">临床岗位护士总数（人）</td>
          <td>{{row.lcgwhszs}}</td>
          <td class="scanner-modal__tit">全院病区注册护士总数（人）</td>
          <td>{{row.qybqzchszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">病区护士与实际开放床位比例（%）</td>
          <td>{{row.bqhsysjkfcwbl}}</td>
          <td class="scanner-modal__tit">重症监护病房护士总数（人）</td>
          <td>{{row.zzjhbfhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">重症监护病房护士与实际开放床位比例（%）</td>
          <td>{{row.zzjhbfhsysjkfcwbl}}</td>
          <td class="scanner-modal__tit">CCU病房护士总数（人）</td>
          <td>{{row.ccubfhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">CCU病房护士与实际开放床位比例（%）</td>
          <td>{{row.ccubfhsysjkfcwbl}}</td>
          <td class="scanner-modal__tit">手术室护士总数（人）</td>
          <td>{{row.ssshszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">手术室护士与实际开放手术间比例（%）</td>
          <td>{{row.ssshsysjkfssjbl}}</td>
          <td class="scanner-modal__tit">透析室护士总数（人）</td>
          <td>{{row.txshszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">透析室护士与透析机比例（%）</td>
          <td>{{row.txshsytxjbl}}</td>
          <td class="scanner-modal__tit">全年离职护士总数（人）</td>
          <td>{{row.qnlzhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">全院博士学历护士数（人）</td>
          <td>{{row.qybsxlhss}}</td>
          <td class="scanner-modal__tit">硕士学历护士数（人）</td>
          <td>{{row.ssxlhss}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">硕士以上学历护士占全院护士比例（%）</td>
          <td>{{row.ssysxlhszqyhsbl}}</td>
          <td class="scanner-modal__tit">全院本科学历护士数（人）</td>
          <td>{{row.qybkxlhss}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">本科学历护士占比全院护士比例（%）</td>
          <td>{{row.bkxlhszbqyhsbl}}</td>
          <td class="scanner-modal__tit">全院大专学历护士数（人）</td>
          <td>{{row.qydzxlhss}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">大专学历护士占比全院护士比例（%）</td>
          <td>{{row.dzxlhszbqqhsbl}}</td>
          <td class="scanner-modal__tit">全院中专学历护士数（人）</td>
          <td>{{row.qyzzxlhss}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">中专学历护士占比全院护士比例（%）</td>
          <td>{{row.zzxlhszbqyhsbl}}</td>
          <td class="scanner-modal__tit">护理管理人员本科以上学历比例(%)</td>
          <td>{{row.hlglrybkysxlbl}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">中医院校毕业和中医护理专业毕业护士数（人）</td>
          <td>{{row.zyyxbyhzyhlzybyhss}}</td>
          <td class="scanner-modal__tit">中医院校毕业和中医护理专业毕业护士占全院护士比例（%）</td>
          <td>{{row.zzyxbyhzyhlzybyhszqyhsbl}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">全院主任护师总数（人）</td>
          <td>{{row.qyzrhszs}}</td>
          <td class="scanner-modal__tit">副主任护师总数（人）</td>
          <td>{{row.fzrhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">全院高级职称护士比例（%）</td>
          <td>{{row.qygzchsbl}}</td>
          <td class="scanner-modal__tit">全院主管护师总数（人）</td>
          <td>{{row.qyzghszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">全院中级职称护士比例（%）</td>
          <td>{{row.qyzjzchsbl}}</td>
          <td class="scanner-modal__tit">全院护师总数（人）</td>
          <td>{{row.qyhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">全院护士总数（人）</td>
          <td>{{row.qyhszs2}}</td>
          <td class="scanner-modal__tit">全院初级职称护士比例（%）</td>
          <td>{{row.qycjzchsbl}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">护理人员系统接受中医药知识和技能岗位培训（3年培训时间≥100学时）的比例（%）</td>
          <td colspan="3">{{row.hlryxtjszyyzshjngwpxdbl}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">外派进修人员总数（人）</td>
          <td>{{row.wpjxwyzs}}</td>
          <td class="scanner-modal__tit">全院有专科护士资格认证总人数（人）</td>
          <td>{{row.qyyzkhszgrzzrs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">专科护士占全院护士比例（%）</td>
          <td>{{row.zkhszqyhsbl}}</td>
          <td class="scanner-modal__tit">重症监护专科护士总数（人）</td>
          <td>{{row.zzjhzkhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">血液净化专科护士总数（人）</td>
          <td>{{row.xyjhzkhszs}}</td>
          <td class="scanner-modal__tit">肿瘤专科护士总数（人）</td>
          <td>{{row.zlzkhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">手术室专科护士总数（人）</td>
          <td>{{row.ssszkhszs}}</td>
          <td class="scanner-modal__tit">急诊急救专科护士总数（人）</td>
          <td>{{row.jzjjzkhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">骨科专科护士总数（人）</td>
          <td>{{row.gkzkhszs}}</td>
          <td class="scanner-modal__tit">静疗专科护士总数（人）</td>
          <td>{{row.jlzkhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">糖尿病专科护士总数（人）</td>
          <td>{{row.tnbzkhszs}}</td>
          <td class="scanner-modal__tit">消毒供应中心专科护士总数（人）</td>
          <td>{{row.xdgyzxzkhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">其他（请在备注栏注明 ）</td>
          <td colspan="3">{{row.cshlgzhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">护理质量管理架构</td>
          <td>{{row.hlzlgljg}}</td>
          <td class="scanner-modal__tit">是否建立护理质量管理委员会</td>
          <td>{{row.sfjlhlzlglwyh}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">开展护理信息化建设</td>
          <td>{{row.kzhlxxhjs}}</td>
          <td class="scanner-modal__tit">临床护理信息系统</td>
          <td>{{row.lchlxxxt}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">护理管理系统</td>
          <td>{{row.hlglxt}}</td>
          <td class="scanner-modal__tit">全院病区总数（个）</td>
          <td>{{row.qybqzs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">全院实施责任制整体护理服务模式病区数（个）</td>
          <td>{{row.qysszrzzthlfwmsbqs}}</td>
          <td class="scanner-modal__tit">责任制整体护理服务病区占全院病区数比例（%）</td>
          <td>{{row.zrzzthlfwbqzqybqsbl}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">医院为优质护理服务示范医院</td>
          <td colspan="3">{{row.yywyzhlfwsfyy}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">科室为优质护理服务示范病区（个）</td>
          <td>{{row.kswyzhlfwsfbq}}</td>
          <td class="scanner-modal__tit">备注</td>
          <td>{{row.kswyzhlfwsfbq_desc}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">科室为优质护理服务示范病区 （个）</td>
          <td>{{row.kswyzhlfwsfbq2}}</td>
          <td class="scanner-modal__tit">备注</td>
          <td>{{row.kswyzhlfwsfbq2_desc}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">是否为各类别护理专科培训基地（基地名称请在备注栏注明）</td>
          <td>{{row.sfwglbhlzkpxjd}}</td>
          <td class="scanner-modal__tit">备注</td>
          <td>{{row.sfwglbhlzkpxjd_desc}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">是否为各类别护理专科培训基地（基地名称请在备注栏注明）</td>
          <td>{{row.sfwglbhlzkpxjd2}}</td>
          <td class="scanner-modal__tit">备注</td>
          <td>{{row.sfwglbhlzkpxjd2_desc}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">全院落实国家中医药管理局重点专科护理方案病种数（个）</td>
          <td>{{row.qylsgjzyygljzdzkhlfabzs}}</td>
          <td class="scanner-modal__tit">医院制定中医护理方案数量（个）</td>
          <td>{{row.yyzdzyhlfasl}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">全院中医护理技术开展项目数（项）</td>
          <td>{{row.qyzyhljskzxms}}</td>
          <td class="scanner-modal__tit">全年中医护理技术开展总例数（例）</td>
          <td>{{row.qnzyhljskzzlt}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">全院护理临床带教老师人数（人）</td>
          <td>{{row.qyhllcdjlsrs}}</td>
          <td class="scanner-modal__tit">全院每年接收实习生人数（人）</td>
          <td>{{row.qymnjssxsrs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">每年接收本科及以上实习生人数（人）</td>
          <td>{{row.mnjsbkjyssxsrs}}</td>
          <td class="scanner-modal__tit">每年接收中医院校和中医护理专业实习生人数（人）</td>
          <td>{{row.mnjszyyxhzyhlzysxsrs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">每年接收进修护士人数（人）</td>
          <td>{{row.mnjsjxhsrs}}</td>
          <td class="scanner-modal__tit">国家级在研课题（项)</td>
          <td>{{row.gjjzykt}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">国家级在研课题获得经费（万元）</td>
          <td>{{row.ljjzykthdjf}}</td>
          <td class="scanner-modal__tit">省部级在研课题（项）</td>
          <td>{{row.sbjzykt}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">省部级在研课题获得经费（万元）</td>
          <td>{{row.sbjzykthdjf}}</td>
          <td class="scanner-modal__tit">市级（含大学、科学院）（项）</td>
          <td>{{row.sj}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">市级（含大学、科学院）获得经费（万元）</td>
          <td>{{row.sjhdjf}}</td>
          <td class="scanner-modal__tit">区级在研课题（项）</td>
          <td>{{row.qjzykt}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">区级在研课题获得经费（万元））</td>
          <td>{{row.qjzykthdjf}}</td>
          <td class="scanner-modal__tit">院级在研课题（项）</td>
          <td>{{row.yjzykt}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">院级在研课题获得经费（万元）</td>
          <td>{{row.yjzykthdjf}}</td>
          <td class="scanner-modal__tit">获得科研成果项目（项）请在备注栏注明</td>
          <td>{{row.hdkycgxm}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">核心期刊发表文章（篇）</td>
          <td>{{row.hxqkfbwz}}</td>
          <td class="scanner-modal__tit">SCI收录论文数（篇）</td>
          <td>{{row.scisllws}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">担任主编出版著作（部）著作名称请在备注栏注明</td>
          <td>{{row.drzbcbzz}}</td>
          <td class="scanner-modal__tit">备注</td>
          <td>{{row.drzbcbzz_desc}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">参编著作（部）著作名称请在备注栏注明</td>
          <td>{{row.cbzz}}</td>
          <td class="scanner-modal__tit">备注</td>
          <td>{{row.cbzz_desc}}</td>
        </tr>
        </tbody>
      </table>
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
<style>
.scanner-modal__table {
    border: 1px solid #e1e5ee;
    width: 100%;
    word-wrap:break-word; 
    word-break:break-all;
    border:0;margin:0;border-collapse:collapse;border-spacing:0;
    margin-bottom: 20px;
  }
  .scanner-modal__table td {
      padding-left: 18px;
      height: 38px;
      overflow: hidden;
      border: 1px solid #e1e5ee;
      box-sizing: border-box;
      text-align: left;
      text-overflow: ellipsis;
      vertical-align: middle;
      width: 25%;
    }
  .scanner-modal__tit {
    background-color: #f1f4f9;
  }
</style>