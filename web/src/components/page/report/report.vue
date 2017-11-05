
<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 数据管理</el-breadcrumb-item>
                <el-breadcrumb-item>数据上报</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form :model="ruleForm" ref="ruleForm" label-width="200px" class="demo-ruleForm">
                <el-form-item
                    label="1.全院开放床位数（张）"
                    prop="qykfcws"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qykfcws" v-model.number="ruleForm.qykfcws" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="2.全院重症监护病房床位数（张）"
                    prop="qyzzjhbfcws"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qyzzjhbfcws" v-model.number="ruleForm.qyzzjhbfcws" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="3.全院注册护士总数（人）"
                    prop="qyzchszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qyzchszs" v-model.number="ruleForm.qyzchszs" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="4.未注册护士总数（人）"
                    prop="wzchszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="wzchszs" v-model.number="ruleForm.wzchszs" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="5.从事护理工作护士总数（人）"
                    prop="cshlgzhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="cshlgzhszs" v-model.number="ruleForm.cshlgzhszs" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="6.从事护理工作的护理人员占全院卫生技术人员的比例（%）"
                    prop="cshlgzdhlryzqywsjsrydbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="cshlgzdhlryzqywsjsrydbl" v-model.number="ruleForm.cshlgzdhlryzqywsjsrydbl" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="7.临床岗位护士总数（人）"
                    prop="lcgwhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="lcgwhszs" v-model.number="ruleForm.lcgwhszs" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="8.全院病区注册护士总数（人）"
                    prop="qybqzchszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qybqzchszs" v-model.number="ruleForm.qybqzchszs" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="9.病区护士与实际开放床位比例（%） "
                    prop="bqhsysjkfcwbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="bqhsysjkfcwbl" v-model.number="ruleForm.bqhsysjkfcwbl" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="10.重症监护病房护士总数（人）"
                    prop="cshlgzhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="cshlgzhszs" v-model.number="ruleForm.cshlgzhszs" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="11.重症监护病房护士与实际开放床位比例（%）  "
                    prop="zzjhbfhsysjkfcwbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="zzjhbfhsysjkfcwbl" v-model.number="ruleForm.zzjhbfhsysjkfcwbl" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="12.CCU病房护士总数（人）  "
                    prop="ccubfhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="ccubfhszs" v-model.number="ruleForm.ccubfhszs" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="13.CCU病房护士与实际开放床位比例（%）"
                    prop="ccubfhsysjkfcwbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="ccubfhsysjkfcwbl" v-model.number="ruleForm.ccubfhsysjkfcwbl" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="14.手术室护士总数（人）"
                    prop="ssshszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="ssshszs" v-model.number="ruleForm.ssshszs" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="15.手术室护士与实际开放手术间比例（%）"
                    prop="ssshsysjkfssjbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="ssshsysjkfssjbl" v-model.number="ruleForm.ssshsysjkfssjbl" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="16.透析室护士总数（人）"
                    prop="txshszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="txshszs" v-model.number="ruleForm.txshszs" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="17.透析室护士与透析机比例（%） "
                    prop="txshsytxjbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="txshsytxjbl" v-model.number="ruleForm.txshsytxjbl" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="18.全年离职护士总数（人）"
                    prop="qnlzhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qnlzhszs" v-model.number="ruleForm.qnlzhszs" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="19.全院博士学历护士数（人）"
                    prop="qybsxlhss"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qybsxlhss" v-model.number="ruleForm.qybsxlhss" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="20.硕士学历护士数（人）"
                    prop="ssxlhss"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="ssxlhss" v-model.number="ruleForm.ssxlhss" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="21.硕士以上学历护士占全院护士比例（%）"
                    prop="ssysxlhszqyhsbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="ssysxlhszqyhsbl" v-model.number="ruleForm.ssysxlhszqyhsbl" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="22.全院本科学历护士数（人）"
                    prop="qybkxlhss"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qybkxlhss" v-model.number="ruleForm.qybkxlhss" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="23.本科学历护士占比全院护士比例（%）"
                    prop="bkxlhszbqyhsbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="bkxlhszbqyhsbl" v-model.number="ruleForm.bkxlhszbqyhsbl" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="24.全院大专学历护士数（人）"
                    prop="qydzxlhss"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qydzxlhss" v-model.number="ruleForm.qydzxlhss" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="25.大专学历护士占比全院护士比例（%）"
                    prop="dzxlhszbqqhsbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="dzxlhszbqqhsbl" v-model.number="ruleForm.dzxlhszbqqhsbl" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="26.全院中专学历护士数（人）"
                    prop="qyzzxlhss"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qyzzxlhss" v-model.number="ruleForm.qyzzxlhss" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="27.中专学历护士占比全院护士比例（%）"
                    prop="zzxlhszbqyhsbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="zzxlhszbqyhsbl" v-model.number="ruleForm.zzxlhszbqyhsbl" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="28.护理管理人员本科以上学历比例(%)"
                    prop="hlglrybkysxlbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="hlglrybkysxlbl" v-model.number="ruleForm.hlglrybkysxlbl" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="29.中医院校毕业和中医护理专业毕业护士数（人）"
                    prop="zyyxbyhzyhlzybyhss"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="zyyxbyhzyhlzybyhss" v-model.number="ruleForm.zyyxbyhzyhlzybyhss" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="30.中医院校毕业和中医护理专业毕业护士占全院护士比例（%）"
                    prop="zzyxbyhzyhlzybyhszqyhsbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="zzyxbyhzyhlzybyhszqyhsbl" v-model.number="ruleForm.zzyxbyhzyhlzybyhszqyhsbl" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="31.全院主任护师总数（人）"
                    prop="qyzrhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qyzrhszs" v-model.number="ruleForm.qyzrhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="32.副主任护师总数（人）"
                    prop="fzrhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="fzrhszs" v-model.number="ruleForm.fzrhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="33.全院高级职称护士比例（%）"
                    prop="qygzchsbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qygzchsbl" v-model.number="ruleForm.qygzchsbl" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="34.全院主管护师总数（人）"
                    prop="qyzghszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qyzghszs" v-model.number="ruleForm.qyzghszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="35.全院中级职称护士比例（%）"
                    prop="qyzjzchsbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qyzjzchsbl" v-model.number="ruleForm.qyzjzchsbl" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="36.全院护师总数（人）"
                    prop="qyhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qyhszs" v-model.number="ruleForm.qyhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="37.全院护士总数（人）"
                    prop="qyhszs2"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qyhszs2" v-model.number="ruleForm.qyhszs2" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="38.全院初级职称护士比例（%）"
                    prop="qycjzchsbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qycjzchsbl" v-model.number="ruleForm.qycjzchsbl" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="39.护理人员系统接受中医药知识和技能岗位培训（3年培训时间≥100学时）的比例（%）"
                    prop="hlryxtjszyyzshjngwpxdbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="hlryxtjszyyzshjngwpxdbl" v-model.number="ruleForm.hlryxtjszyyzshjngwpxdbl" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="40.外派进修人员总数（人）"
                    prop="wpjxwyzs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="wpjxwyzs" v-model.number="ruleForm.wpjxwyzs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="41.全院有专科护士资格认证总人数（人）"
                    prop="qyyzkhszgrzzrs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qyyzkhszgrzzrs" v-model.number="ruleForm.qyyzkhszgrzzrs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="42.专科护士占全院护士比例（%）"
                    prop="zkhszqyhsbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="zkhszqyhsbl" v-model.number="ruleForm.zkhszqyhsbl" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="43.重症监护专科护士总数（人）"
                    prop="zzjhzkhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="zzjhzkhszs" v-model.number="ruleForm.zzjhzkhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="44.血液净化专科护士总数（人）"
                    prop="xyjhzkhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="xyjhzkhszs" v-model.number="ruleForm.xyjhzkhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="45.肿瘤专科护士总数（人）"
                    prop="zlzkhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="zlzkhszs" v-model.number="ruleForm.zlzkhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="46.手术室专科护士总数（人）"
                    prop="ssszkhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="ssszkhszs" v-model.number="ruleForm.ssszkhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="47.急诊急救专科护士总数（人）"
                    prop="jzjjzkhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="jzjjzkhszs" v-model.number="ruleForm.jzjjzkhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="48.骨科专科护士总数（人）"
                    prop="gkzkhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="gkzkhszs" v-model.number="ruleForm.gkzkhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="49.静疗专科护士总数（人）"
                    prop="jlzkhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="jlzkhszs" v-model.number="ruleForm.jlzkhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="50.糖尿病专科护士总数（人）"
                    prop="tnbzkhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="tnbzkhszs" v-model.number="ruleForm.tnbzkhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="51.消毒供应中心专科护士总数（人）"
                    prop="xdgyzxzkhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="xdgyzxzkhszs" v-model.number="ruleForm.xdgyzxzkhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="52.其他（请在备注栏注明 ）"
                    prop="qita"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qita" v-model.number="ruleForm.qita" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item 
                    label="53.护理质量管理架构" 
                    prop="hlzlgljg"
                    :rules="[
                    { required: true, message: '本字段不能为空'} 
                    ]">
                    <el-radio-group v-model="ruleForm.hlzlgljg">
                    <el-radio label="一级"></el-radio>
                    <el-radio label="二级"></el-radio>
                    <el-radio label="三级"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item 
                    label="54.是否建立护理质量管理委员会" 
                    prop="sfjlhlzlglwyh"
                    :rules="[
                    { required: true, message: '本字段不能为空'} 
                    ]">
                    <el-radio-group v-model="ruleForm.sfjlhlzlglwyh">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                    </el-radio-group>
                </el-form-item>
               <el-form-item 
                    label="55.开展护理信息化建设" 
                    prop="kzhlxxhjs"
                    :rules="[
                    { required: true, message: '本字段不能为空'} 
                    ]">
                    <el-radio-group v-model="ruleForm.kzhlxxhjs">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item 
                    label="56.临床护理信息系统" 
                    prop="lchlxxxt"
                    :rules="[
                    { required: true, message: '本字段不能为空'} 
                    ]">
                    <el-radio-group v-model="ruleForm.lchlxxxt">
                    <el-radio label="护士工作站"></el-radio>
                    <el-radio label="移动护理"></el-radio>
                    <el-radio label="物品追溯"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item 
                    label="57.护理管理系统" 
                    prop="hlglxt"
                    :rules="[
                    { required: true, message: '本字段不能为空'} 
                    ]">
                    <el-radio-group v-model="ruleForm.hlglxt">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item
                    label="58.全院病区总数（个）"
                    prop="hlryxtjszyyzshjngwpxdbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="hlryxtjszyyzshjngwpxdbl" v-model.number="ruleForm.hlryxtjszyyzshjngwpxdbl" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="59.全院实施责任制整体护理服务模式病区数（个）"
                    prop="hlryxtjszyyzshjngwpxdbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="hlryxtjszyyzshjngwpxdbl" v-model.number="ruleForm.hlryxtjszyyzshjngwpxdbl" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="60.责任制整体护理服务病区占全院病区数比例（%）"
                    prop="hlryxtjszyyzshjngwpxdbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="hlryxtjszyyzshjngwpxdbl" v-model.number="ruleForm.hlryxtjszyyzshjngwpxdbl" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item 
                    label="61.医院为优质护理服务示范医院" 
                    prop="yywyzhlfwsfyy"
                    :rules="[
                    { required: true, message: '本字段不能为空'} 
                    ]">
                    <el-radio-group v-model="ruleForm.yywyzhlfwsfyy">
                    <el-radio label="国家级"></el-radio>
                    <el-radio label="市级"></el-radio>
                    <el-radio label="否"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item 
                    label="62.科室为优质护理服务示范病区（个）" 
                    prop="kswyzhlfwsfbq"
                    :rules="[
                    { required: true, message: '本字段不能为空'} 
                    ]">
                    <el-radio-group v-model="ruleForm.kswyzhlfwsfbq">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item 
                    label="63.科室为优质护理服务示范病区 （个）" 
                    prop="kswyzhlfwsfbq"
                    :rules="[
                    { required: true, message: '本字段不能为空'} 
                    ]">
                    <el-radio-group v-model="ruleForm.kswyzhlfwsfbq">
                    <el-radio label="市级"></el-radio>
                    <el-radio label="否"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item 
                    label="64.是否为各类别护理专科培训基地（基地名称请在备注栏注明）" 
                    prop="sfwglbhlzkpxjd"
                    :rules="[
                    { required: true, message: '本字段不能为空'} 
                    ]">
                    <el-radio-group v-model="ruleForm.sfwglbhlzkpxjd">
                    <el-radio label="国家级"></el-radio>
                    <el-radio label="否"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item 
                    label="65.是否为各类别护理专科培训基地（基地名称请在备注栏注明）" 
                    prop="sfwglbhlzkpxjd"
                    :rules="[
                    { required: true, message: '本字段不能为空'} 
                    ]">
                    <el-radio-group v-model="ruleForm.sfwglbhlzkpxjd">
                    <el-radio label="地市级"></el-radio>
                    <el-radio label="否"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item
                    label="66.全院落实国家中医药管理局重点专科护理方案病种数（个）"
                    prop="qylsgjzyygljzdzkhlfabzs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qylsgjzyygljzdzkhlfabzs" v-model.number="ruleForm.qylsgjzyygljzdzkhlfabzs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="67.医院制定中医护理方案数量（个）"
                    prop="yyzdzyhlfasl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="yyzdzyhlfasl" v-model.number="ruleForm.yyzdzyhlfasl" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="68.全院中医护理技术开展项目数（项）"
                    prop="qyzyhljskzxms"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qyzyhljskzxms" v-model.number="ruleForm.qyzyhljskzxms" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="69.全年中医护理技术开展总例数（例）"
                    prop="qnzyhljskzzlt"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qnzyhljskzzlt" v-model.number="ruleForm.qnzyhljskzzlt" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="70.全院护理临床带教老师人数（人）"
                    prop="qyhllcdjlsrs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qyhllcdjlsrs" v-model.number="ruleForm.qyhllcdjlsrs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="71.全院每年接收实习生人数（人）"
                    prop="qymnjssxsrs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qymnjssxsrs" v-model.number="ruleForm.qymnjssxsrs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="72.每年接收本科及以上实习生人数（人）"
                    prop="mnjsbkjyssxsrs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="mnjsbkjyssxsrs" v-model.number="ruleForm.mnjsbkjyssxsrs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="73.每年接收中医院校和中医护理专业实习生人数（人）"
                    prop="mnjszyyxhzyhlzysxsrs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="mnjszyyxhzyhlzysxsrs" v-model.number="ruleForm.mnjszyyxhzyhlzysxsrs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="74.每年接收进修护士人数（人）"
                    prop="mnjsjxhsrs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="mnjsjxhsrs" v-model.number="ruleForm.mnjsjxhsrs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="75.国家级在研课题 （项) "
                    prop="gjjzykt"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="gjjzykt" v-model.number="ruleForm.gjjzykt" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="76.国家级在研课题获得经费 （万元）"
                    prop="ljjzykthdjf"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="ljjzykthdjf" v-model.number="ruleForm.ljjzykthdjf" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="77.省部级在研课题（项）"
                    prop="sbjzykt"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="sbjzykt" v-model.number="ruleForm.sbjzykt" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="78.省部级在研课题获得经费（万元）"
                    prop="sbjzykthdjf"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="sbjzykthdjf" v-model.number="ruleForm.sbjzykthdjf" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="79.市级（含大学、科学院）（项）"
                    prop="sj"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="sj" v-model.number="ruleForm.sj" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="80.市级（含大学、科学院）获得经费（万元）"
                    prop="sjhdjf"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="sjhdjf" v-model.number="ruleForm.sjhdjf" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="81.区级在研课题 （项）"
                    prop="qjzykt"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qjzykt" v-model.number="ruleForm.qjzykt" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="82.区级在研课题获得经费（万元））"
                    prop="qjzykthdjf"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="qjzykthdjf" v-model.number="ruleForm.qjzykthdjf" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="83.院级在研课题（项）"
                    prop="yjzykt"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="yjzykt" v-model.number="ruleForm.yjzykt" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="84.院级在研课题获得经费 （万元）"
                    prop="yjzykthdjf"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="yjzykthdjf" v-model.number="ruleForm.yjzykthdjf" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="85.获得科研成果项目（项）请在备注栏注明"
                    prop="hdkycgxm"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="hdkycgxm" v-model.number="ruleForm.hdkycgxm" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="86.核心期刊发表文章（篇）"
                    prop="hxqkfbwz"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="hxqkfbwz" v-model.number="ruleForm.hxqkfbwz" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="87.SCI收录论文数（篇）"
                    prop="scisllws"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="scisllws" v-model.number="ruleForm.scisllws" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="88.担任主编出版著作（部）著作名称请在备注栏注明 "
                    prop="hlryxtjszyyzshjngwpxdbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="drzbcbzz" v-model.number="ruleForm.drzbcbzz" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="89.参编著作（部）著作名称请在备注栏注明"
                    prop="cbzz"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input type="cbzz" v-model.number="ruleForm.cbzz" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
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