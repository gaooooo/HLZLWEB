
<template>
  <div style="text-align:right">
        <table class="scanner-modal__table">
        <tbody>
        <tr>
          <td class="scanner-modal__tit">1.全院开放床位数（张）</td>
          <td>{{row.qykfcws}}</td>
          <td class="scanner-modal__tit">2.全院重症监护病房床位数（张）</td>
          <td>{{row.qyzzjhbfcws}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">3.全院注册护士总数（人）</td>
          <td>{{row.qyzchszs}}</td>
          <td class="scanner-modal__tit">4.未注册护士总数（人）</td>
          <td>{{row.wzchszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">5.从事护理工作护士总数（人）</td>
          <td>{{row.cshlgzhszs}}</td>
          <td class="scanner-modal__tit">6.从事护理工作的护理人员占全院卫生技术人员的比例（%）</td>
          <td>{{row.cshlgzdhlryzqywsjsrydbl}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">7.临床岗位护士总数（人）</td>
          <td>{{row.lcgwhszs}}</td>
          <td class="scanner-modal__tit">8.全院病区注册护士总数（人）</td>
          <td>{{row.qybqzchszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">9.病区护士与实际开放床位比例（%）</td>
          <td>{{row.bqhsysjkfcwbl}}</td>
          <td class="scanner-modal__tit">10.重症监护病房护士总数（人）</td>
          <td>{{row.zzjhbfhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">11.重症监护病房护士与实际开放床位比例（%）</td>
          <td>{{row.zzjhbfhsysjkfcwbl}}</td>
          <td class="scanner-modal__tit">12.CCU病房护士总数（人）</td>
          <td>{{row.ccubfhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">13.CCU病房护士与实际开放床位比例（%）</td>
          <td>{{row.ccubfhsysjkfcwbl}}</td>
          <td class="scanner-modal__tit">14.手术室护士总数（人）</td>
          <td>{{row.ssshszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">15.手术室护士与实际开放手术间比例（%）</td>
          <td>{{row.ssshsysjkfssjbl}}</td>
          <td class="scanner-modal__tit">16.透析室护士总数（人）</td>
          <td>{{row.txshszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">17.透析室护士与透析机比例（%）</td>
          <td>{{row.txshsytxjbl}}</td>
          <td class="scanner-modal__tit">18.全年离职护士总数（人）</td>
          <td>{{row.qnlzhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">19.全院博士学历护士数（人）</td>
          <td>{{row.qybsxlhss}}</td>
          <td class="scanner-modal__tit">20.全院硕士学历护士数（人）</td>
          <td>{{row.ssxlhss}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">21.硕士以上学历护士占全院护士比例（%）</td>
          <td>{{row.ssysxlhszqyhsbl}}</td>
          <td class="scanner-modal__tit">22.全院本科学历护士数（人）</td>
          <td>{{row.qybkxlhss}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">23.本科学历护士占全院护士比例（%）</td>
          <td>{{row.bkxlhszbqyhsbl}}</td>
          <td class="scanner-modal__tit">24.全院大专学历护士数（人）</td>
          <td>{{row.qydzxlhss}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">25.大专学历护士占全院护士比例（%）</td>
          <td>{{row.dzxlhszbqqhsbl}}</td>
          <td class="scanner-modal__tit">26.全院中专学历护士数（人）</td>
          <td>{{row.qyzzxlhss}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">27.中专学历护士占全院护士比例（%）</td>
          <td>{{row.zzxlhszbqyhsbl}}</td>
          <td class="scanner-modal__tit">28.护理管理人员本科以上学历比例(%)</td>
          <td>{{row.hlglrybkysxlbl}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">29.中医院校毕业和中医护理专业毕业护士数（人）</td>
          <td>{{row.zyyxbyhzyhlzybyhss}}</td>
          <td class="scanner-modal__tit">30.中医院校毕业和中医护理专业毕业护士占全院护士比例（%）</td>
          <td>{{row.zzyxbyhzyhlzybyhszqyhsbl}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">31.全院主任护师总数（人）</td>
          <td>{{row.qyzrhszs}}</td>
          <td class="scanner-modal__tit">32.全院副主任护师总数（人）</td>
          <td>{{row.fzrhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">33.全院高级职称护士比例（%）</td>
          <td>{{row.qygzchsbl}}</td>
          <td class="scanner-modal__tit">34.全院主管护师总数（人）</td>
          <td>{{row.qyzghszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">35.全院中级职称护士比例（%）</td>
          <td>{{row.qyzjzchsbl}}</td>
          <td class="scanner-modal__tit">36.全院护师总数（人）</td>
          <td>{{row.qyhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">37.全院护士总数（人）</td>
          <td>{{row.qyhszs2}}</td>
          <td class="scanner-modal__tit">38.全院初级职称护士比例（%）</td>
          <td>{{row.qycjzchsbl}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">39.护理人员系统接受中医药知识和技能岗位培训（3年培训时间≥100学时）的比例（%）</td>
          <td colspan="3">{{row.hlryxtjszyyzshjngwpxdbl}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">40.全年外派进修人员总数（人）</td>
          <td>{{row.wpjxwyzs}}</td>
          <td class="scanner-modal__tit">41.全院有专科护士资格认证总人数（人）</td>
          <td>{{row.qyyzkhszgrzzrs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">42.专科资格认证护士占全院护士比例（%）</td>
          <td>{{row.zkhszqyhsbl}}</td>
          <td class="scanner-modal__tit">43.重症监护专科护士总数（人）</td>
          <td>{{row.zzjhzkhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">44.血液净化专科护士总数（人）</td>
          <td>{{row.xyjhzkhszs}}</td>
          <td class="scanner-modal__tit">45.肿瘤专科护士总数（人）</td>
          <td>{{row.zlzkhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">46.手术室专科护士总数（人）</td>
          <td>{{row.ssszkhszs}}</td>
          <td class="scanner-modal__tit">47.急诊急救专科护士总数（人）</td>
          <td>{{row.jzjjzkhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">48.骨科专科护士总数（人）</td>
          <td>{{row.gkzkhszs}}</td>
          <td class="scanner-modal__tit">49.静疗专科护士总数（人）</td>
          <td>{{row.jlzkhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">50.糖尿病专科护士总数（人）</td>
          <td>{{row.tnbzkhszs}}</td>
          <td class="scanner-modal__tit">51.消毒供应中心专科护士总数（人）</td>
          <td>{{row.xdgyzxzkhszs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">52.老年专科护士总数（人）</td>
          <td>{{row.lnzkhszs}}</td>
          <td class="scanner-modal__tit">53.其他（请在备注栏注明 ）</td>
          <td >{{row.cshlgzhszs + (row.cshlgzhszs && ',' + row.cshlgzhszs || '')}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">54.护理质量管理架构</td>
          <td>{{row.hlzlgljg}}</td>
          <td class="scanner-modal__tit">55.是否建立护理质量管理委员会</td>
          <td>{{row.sfjlhlzlglwyh}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">56.开展护理信息化建设</td>
          <td>{{row.kzhlxxhjs}}</td>
          <td class="scanner-modal__tit">57.临床护理信息系统</td>
          <td>{{row.lchlxxxt}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">58.全院病区总数（个）</td>
          <td colspan="3">{{row.qybqzs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">59.全院实施责任制整体护理服务模式病区数（个）</td>
          <td>{{row.qysszrzzthlfwmsbqs}}</td>
          <td class="scanner-modal__tit">60.责任制整体护理服务病区占全院病区数比例（%）</td>
          <td>{{row.zrzzthlfwbqzqybqsbl}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">61.医院为优质护理服务示范医院</td>
          <td colspan="3">{{row.yywyzhlfwsfyy}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">62.国家-级科室为优质护理服务示范病区（个）</td>
          <td>{{row.kswyzhlfwsfbq + (row.kswyzhlfwsfbq_count && ',' + row.kswyzhlfwsfbq_count || '') + (row.kswyzhlfwsfbq_desc && ',' + row.kswyzhlfwsfbq_desc || '')}}</td>
          <td class="scanner-modal__tit">63.市级-科室为优质护理服务示范病区 （个）</td>
          <td>{{row.kswyzhlfwsfbq2 + (row.kswyzhlfwsfbq2_count && ',' + row.kswyzhlfwsfbq2_count || '') + (row.kswyzhlfwsfbq2_desc && ',' + row.kswyzhlfwsfbq2_desc || '')}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">64.国家级-是否为各类别护理专科培训基地（基地名称请在备注栏注明）</td>
          <td>{{row.sfwglbhlzkpxjd + (row.sfwglbhlzkpxjd_count && ',' + row.sfwglbhlzkpxjd_count || '') + (row.sfwglbhlzkpxjd_desc && ',' + row.sfwglbhlzkpxjd_desc || '')}}</td>
          <td class="scanner-modal__tit">65.地市级-是否为各类别护理专科培训基地（基地名称请在备注栏注明）</td>
          <td>{{row.sfwglbhlzkpxjd2 + (row.sfwglbhlzkpxjd2_count && ',' + row.sfwglbhlzkpxjd2_count || '') + (row.sfwglbhlzkpxjd2_desc && ',' + row.sfwglbhlzkpxjd2_desc || '')}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">66.全院落实国家中医药管理局重点专科护理方案病种数（个）</td>
          <td>{{row.qylsgjzyygljzdzkhlfabzs}}</td>
          <td class="scanner-modal__tit">67.医院制定中医护理方案数量（个）</td>
          <td>{{row.yyzdzyhlfasl}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">68.全院中医护理技术开展项目数（项）</td>
          <td>{{row.qyzyhljskzxms}}</td>
          <td class="scanner-modal__tit">69.全年中医护理技术开展总例数（例）</td>
          <td>{{row.qnzyhljskzzlt}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">70.全院护理临床带教老师人数（人）</td>
          <td>{{row.qyhllcdjlsrs}}</td>
          <td class="scanner-modal__tit">71.全院每年接收实习生人数（人）</td>
          <td>{{row.qymnjssxsrs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">72.每年接收本科及以上学历实习生人数（人）</td>
          <td>{{row.mnjsbkjyssxsrs}}</td>
          <td class="scanner-modal__tit">73.每年接收中医院校和中医护理专业实习生人数（人）</td>
          <td>{{row.mnjszyyxhzyhlzysxsrs}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">74.每年接收进修护士人数（人）</td>
          <td>{{row.mnjsjxhsrs}}</td>
          <td class="scanner-modal__tit">75.国家级在研课题（项)</td>
          <td>{{row.gjjzykt}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">76.国家级在研课题获得经费（万元）</td>
          <td>{{row.ljjzykthdjf}}</td>
          <td class="scanner-modal__tit">77.省部级在研课题（项）</td>
          <td>{{row.sbjzykt}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">78.省部级在研课题获得经费（万元）</td>
          <td>{{row.sbjzykthdjf}}</td>
          <td class="scanner-modal__tit">79.市级（含大学、科学院）（项）</td>
          <td>{{row.sj}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">80.市级（含大学、科学院）获得经费（万元）</td>
          <td>{{row.sjhdjf}}</td>
          <td class="scanner-modal__tit">81.区级在研课题（项）</td>
          <td>{{row.qjzykt}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">82.区级在研课题获得经费（万元））</td>
          <td>{{row.qjzykthdjf}}</td>
          <td class="scanner-modal__tit">83.院级在研课题（项）</td>
          <td>{{row.yjzykt}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">84.院级在研课题获得经费（万元）</td>
          <td>{{row.yjzykthdjf}}</td>
          <td class="scanner-modal__tit">85.获得科研成果项目（项）请在备注栏注明</td>
          <td>{{row.hdkycgxm + (row.hdkycgxm_desc && ',' + row.hdkycgxm_desc || '')}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">86.核心期刊发表文章（篇）</td>
          <td>{{row.hxqkfbwz}}</td>
          <td class="scanner-modal__tit">87.SCI收录论文数（篇）</td>
          <td>{{row.scisllws}}</td>
        </tr>
        <tr>
          <td class="scanner-modal__tit">88.担任主编出版著作（部）著作名称请在备注栏注明</td>
          <td>{{row.drzbcbzz + (row.drzbcbzz && ',' + row.drzbcbzz || '')}}</td>
          <td class="scanner-modal__tit">89.参编著作（部）著作名称请在备注栏注明</td>
          <td>{{row.cbzz + (row.cbzz > 0 ? '(' + row.cbzz_desc + ')' : '')}}</td>
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