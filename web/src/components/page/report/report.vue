
<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 数据管理</el-breadcrumb-item>
                <el-breadcrumb-item>数据上报</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box report">
            <el-form :model="modelInfo" ref="modelInfo" :rules="rules" label-width="420px" class="report-form">
            
                <el-form-item
                    label="1.全院开放床位数（张）"
                    prop="qykfcws"
                    :rules="[   
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qykfcws" auto-complete="off"></el-input>
                </el-form-item>
           
                 <el-form-item
                    label="2.全院重症监护病房床位数（张）"
                    prop="qyzzjhbfcws"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qyzzjhbfcws" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="3.全院注册护士总数（人）"
                    prop="qyzchszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qyzchszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-tooltip class="item" effect="light" content="与医院签订劳务合同，尚未取得护士执业证书" placement="top">
                 <el-form-item
                    label="4.未注册护士总数（人）"
                    prop="wzchszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.wzchszs" auto-complete="off"></el-input>
                </el-form-item>
                </el-tooltip>
                <el-tooltip class="item" effect="light" content="含未注册护士" placement="top">
                 <el-form-item
                    label="5.从事护理工作护士总数（人）"
                    prop="cshlgzhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.cshlgzhszs" auto-complete="off"></el-input>
                </el-form-item>
                </el-tooltip>
                 <el-form-item
                    label="6.从事护理工作的护理人员占全院卫生技术人员的比例（%）"
                    prop="cshlgzdhlryzqywsjsrydbl">
                    <el-input  v-model="modelInfo.cshlgzdhlryzqywsjsrydbl" auto-complete="off"></el-input>
                </el-form-item>
                <el-tooltip class="item" effect="light" content="不包含：护理部、供应室、医院感染办公室的护理人员" placement="top">
                 <el-form-item
                    label="7.临床岗位护士总数（人）"
                    prop="lcgwhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.lcgwhszs" auto-complete="off"></el-input>
                </el-form-item>
                </el-tooltip>
                <el-tooltip class="item" effect="light" content="不包含：ICU、CCU、手术室" placement="top">
                 <el-form-item
                    label="8.全院病区注册护士总数（人）"
                    prop="qybqzchszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qybqzchszs" auto-complete="off"></el-input>
                </el-form-item>
                </el-tooltip>
                 <el-form-item
                    label="9.病区护士与实际开放床位比例（%） "
                    prop="bqhsysjkfcwbl">
                <el-input  v-model.number="modelInfo.bqhsysjkfcwbl" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="10.重症监护病房护士总数（人）"
                    prop="zzjhbfhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.zzjhbfhszs" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="11.重症监护病房护士与实际开放床位比例（%）  "
                    prop="zzjhbfhsysjkfcwbl">
                <el-input  v-model.number="modelInfo.zzjhbfhsysjkfcwbl" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="12.CCU病房护士总数（人）  "
                    prop="ccubfhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.ccubfhszs" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="13.CCU病房护士与实际开放床位比例（%）"
                    prop="ccubfhsysjkfcwbl">
                <el-input  v-model.number="modelInfo.ccubfhsysjkfcwbl" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="14.手术室护士总数（人）"
                    prop="ssshszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.ssshszs" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="15.手术室护士与实际开放手术间比例（%）"
                    prop="ssshsysjkfssjbl">
                <el-input  v-model.number="modelInfo.ssshsysjkfssjbl" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="16.透析室护士总数（人）"
                    prop="txshszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.txshszs" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="17.透析室护士与透析机比例（%） "
                    prop="txshsytxjbl">
                <el-input  v-model.number="modelInfo.txshsytxjbl" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="18.全年离职护士总数（人）"
                    prop="qnlzhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qnlzhszs" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="19.全院博士学历护士数（人）"
                    prop="qybsxlhss"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qybsxlhss" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="20.硕士学历护士数（人）"
                    prop="ssxlhss"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.ssxlhss" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="21.硕士以上学历护士占全院护士比例（%）"
                    prop="ssysxlhszqyhsbl">
                <el-input  v-model.number="modelInfo.ssysxlhszqyhsbl" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="22.全院本科学历护士数（人）"
                    prop="qybkxlhss"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qybkxlhss" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="23.本科学历护士占全院护士比例（%）"
                    prop="bkxlhszbqyhsbl">
                <el-input  v-model.number="modelInfo.bkxlhszbqyhsbl" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="24.全院大专学历护士数（人）"
                    prop="qydzxlhss"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qydzxlhss" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="25.大专学历护士占全院护士比例（%）"
                    prop="dzxlhszbqqhsbl">
                <el-input  v-model.number="modelInfo.dzxlhszbqqhsbl" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="26.全院中专学历护士数（人）"
                    prop="qyzzxlhss"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qyzzxlhss" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="27.中专学历护士占全院护士比例（%）"
                    prop="zzxlhszbqyhsbl">
                <el-input  v-model.number="modelInfo.zzxlhszbqyhsbl" auto-complete="off"></el-input>
                </el-form-item>
                <el-tooltip class="item" effect="light" content="护理管理人员范围：护理部人员（例如：正/副主任、干事/科员等）、护士长、片区护士长、护理出身的主管护理工作院长" placement="top">
                 <el-form-item
                    label="28.护理管理人员本科以上学历比例(%)"
                    prop="hlglrybkysxlbl">
                <el-input  v-model.number="modelInfo.hlglrybkysxlbl" auto-complete="off"></el-input>
                </el-form-item>
                </el-tooltip>
                 <el-form-item
                    label="29.中医院校毕业和中医护理专业毕业护士数（人）"
                    prop="zyyxbyhzyhlzybyhss"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.zyyxbyhzyhlzybyhss" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item
                    label="30.中医院校毕业和中医护理专业毕业护士占全院护士比例（%）"
                    prop="zzyxbyhzyhlzybyhszqyhsbl">
                <el-input  v-model.number="modelInfo.zzyxbyhzyhlzybyhszqyhsbl" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="31.全院主任护师总数（人）"
                    prop="qyzrhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qyzrhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="32.全院副主任护师总数（人）"
                    prop="fzrhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.fzrhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="33.全院高级职称护士比例（%）"
                    prop="qygzchsbl">
                <el-input  v-model.number="modelInfo.qygzchsbl" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="34.全院主管护师总数（人）"
                    prop="qyzghszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qyzghszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="35.全院中级职称护士比例（%）"
                    prop="qyzjzchsbl">
                <el-input  v-model.number="modelInfo.qyzjzchsbl" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="36.全院护师总数（人）"
                    prop="qyhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qyhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="37.全院护士总数（人）"
                    prop="qyhszs2"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qyhszs2" auto-complete="off"></el-input>
                </el-form-item>
                <el-tooltip class="item" effect="light" content="初级职称范围：护士、护师" placement="top">
                <el-form-item
                    label="38.全院初级职称护士比例（%）"
                    prop="qycjzchsbl">
                <el-input  v-model.number="modelInfo.qycjzchsbl" auto-complete="off"></el-input>
                </el-form-item>
                </el-tooltip>
                <el-tooltip class="item" effect="light" content="培训时间为：2014年——2016年" placement="top">
                <el-form-item
                    label="39.护理人员系统接受中医药知识和技能岗位培训（3年培训时间≥100学时）的比例（%）"
                    prop="hlryxtjszyyzshjngwpxdbl">
                <el-input  v-model.number="modelInfo.hlryxtjszyyzshjngwpxdbl" auto-complete="off"></el-input>
                </el-form-item>
                </el-tooltip>
                 <el-tooltip class="item" effect="light" content="进修时间不少于1个月" placement="top">
                <el-form-item
                    label="40.全年外派进修人员总数（人）"
                    prop="wpjxwyzs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.wpjxwyzs" auto-complete="off"></el-input>
                </el-form-item>
                </el-tooltip>
                <el-form-item
                    label="41.全院有专科护士资格认证总人数（人）"
                    prop="qyyzkhszgrzzrs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qyyzkhszgrzzrs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="42.专科资格认证护士占全院护士比例（%）"
                    prop="zkhszqyhsbl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.zkhszqyhsbl" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="43.重症监护专科护士总数（人）"
                    prop="zzjhzkhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.zzjhzkhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="44.血液净化专科护士总数（人）"
                    prop="xyjhzkhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.xyjhzkhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="45.肿瘤专科护士总数（人）"
                    prop="zlzkhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.zlzkhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="46.手术室专科护士总数（人）"
                    prop="ssszkhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.ssszkhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="47.急诊急救专科护士总数（人）"
                    prop="jzjjzkhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.jzjjzkhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="48.骨科专科护士总数（人）"
                    prop="gkzkhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.gkzkhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="49.静疗专科护士总数（人）"
                    prop="jlzkhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.jlzkhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="50.糖尿病专科护士总数（人）"
                    prop="tnbzkhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.tnbzkhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="51.消毒供应中心专科护士总数（人）"
                    prop="xdgyzxzkhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.xdgyzxzkhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="52.老年专科护士总数（人）"
                    prop="lnzkhszs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.lnzkhszs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="53.其他（请在备注栏注明 ）"
                    prop="qita"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input :autosize="{minRows: 2, maxRows: 4}" v-model.number="modelInfo.qita" auto-complete="off"></el-input>
                <!--<div class="input_desc">
                    <span>备注：</span><el-input placeholder="请输入其他项内容" v-model="modelInfo.qita_desc" auto-complete="off"></el-input>
                </div>-->
                </el-form-item>
                <el-form-item
                    v-show="parseInt(modelInfo.qita) > 0"
                    label="备注："
                    prop="qita_desc">
                    <el-input placeholder="请输入其他项内容" v-model="modelInfo.qita_desc" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item 
                    label="54.护理质量管理架构" 
                    prop="hlzlgljg"
                    :rules="[
                    { required: true, message: '本字段不能为空'} 
                    ]">
                    <el-radio-group v-model="modelInfo.hlzlgljg">
                    <el-radio label="一级"></el-radio>
                    <el-radio label="二级"></el-radio>
                    <el-radio label="三级"></el-radio>
                    <el-radio label="否"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item 
                    label="55.是否建立护理质量管理委员会" 
                    prop="sfjlhlzlglwyh"
                    :rules="[
                    { required: true, message: '本字段不能为空'} 
                    ]">
                    <el-radio-group v-model="modelInfo.sfjlhlzlglwyh">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                    </el-radio-group>
                </el-form-item>
               <el-form-item 
                    label="56.开展护理信息化建设" 
                    prop="kzhlxxhjs"
                    :rules="[
                    { required: true, message: '本字段不能为空'} 
                    ]">
                    <el-radio-group v-model="modelInfo.kzhlxxhjs">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item 
                    label="57.临床护理信息系统" 
                    prop="lchlxxxt"
                    :rules="[
                    { required: true, message: '本字段不能为空' } 
                    ]">
                    <el-checkbox-group v-model="modelInfo.lchlxxxt">
                        <el-checkbox label="移动护理"></el-checkbox>
                        <el-checkbox label="护理管理"></el-checkbox>
                        <el-checkbox label="护士继续教育系统"></el-checkbox>
                        <el-checkbox label="物品追溯" ></el-checkbox>
                    </el-checkbox-group>
                    <!--<div class="input_desc">
                      <span>备注：</span><el-input placeholder="请输入其他项内容" v-model="modelInfo.lchlxxxt_desc" auto-complete="off"></el-input>
                    </div>-->
                </el-form-item>
                <el-form-item
                    label="备注："
                    prop="lchlxxxt_desc">
                    <el-input placeholder="请输入临床护理信息系统其他项内容" v-model="modelInfo.lchlxxxt_desc" auto-complete="off"></el-input>
                </el-form-item>
                <!--<el-form-item 
                    label="57.护理管理系统" 
                    prop="hlglxt"
                    :rules="[
                    { required: true, message: '本字段不能为空'} 
                    ]">
                    <el-radio-group v-model="modelInfo.hlglxt">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                    </el-radio-group>
                </el-form-item>-->
                <el-form-item
                    label="58.全院病区总数（个）"
                    prop="qybqzs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qybqzs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="59.全院实施责任制整体护理服务模式病区数（个）"
                    prop="qysszrzzthlfwmsbqs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qysszrzzthlfwmsbqs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="60.责任制整体护理服务病区占全院病区数比例（%）"
                    prop="zrzzthlfwbqzqybqsbl">
                <el-input  v-model.number="modelInfo.zrzzthlfwbqzqybqsbl" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item 
                    label="61.医院为优质护理服务示范医院" 
                    prop="yywyzhlfwsfyy"
                    :rules="[
                    { required: true, message: '本字段不能为空'} 
                    ]">
                    <el-radio-group v-model="modelInfo.yywyzhlfwsfyy">
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
                    <el-radio-group v-model="modelInfo.kswyzhlfwsfbq">
                    <el-radio label="国家级"></el-radio>
                    <el-radio label="否"></el-radio>
                    </el-radio-group>
                    <!--<div class="input_desc half" v-show="modelInfo.kswyzhlfwsfbq != '否'">
                      <span>个数：</span><el-input placeholder="请输入示范病区个数" v-model="modelInfo.kswyzhlfwsfbq_count" auto-complete="off"></el-input>
                       <span>备注：</span><el-input placeholder="请输入示范病区内容" v-model="modelInfo.kswyzhlfwsfbq_desc" auto-complete="off"></el-input>
                    </div>-->
                </el-form-item>
                <el-form-item
                    v-show="modelInfo.kswyzhlfwsfbq!='否'"
                    class="half"
                    label="备注："
                    prop="kswyzhlfwsfbq_verify">
                    <span>个数：</span><el-input placeholder="请输入示范病区个数" v-model.number="modelInfo.kswyzhlfwsfbq_count" auto-complete="off"></el-input>
                      <span>内容：</span><el-input placeholder="请输入示范病区内容" v-model="modelInfo.kswyzhlfwsfbq_desc" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item 
                    label="63.科室为优质护理服务示范病区 （个）" 
                    prop="kswyzhlfwsfbq2"
                    :rules="[
                    { required: true, message: '本字段不能为空'} 
                    ]">
                    <el-radio-group v-model="modelInfo.kswyzhlfwsfbq2">
                    <el-radio label="市级"></el-radio>
                    <el-radio label="否"></el-radio>
                    </el-radio-group>
                    <!--<div class="input_desc half"  v-show="modelInfo.kswyzhlfwsfbq2 != '否'">
                      <span>个数：</span><el-input placeholder="请输入示范病区个数" v-model="modelInfo.kswyzhlfwsfbq2_count" auto-complete="off"></el-input>
                      <span>备注：</span><el-input placeholder="请输入示范病区内容" v-model="modelInfo.kswyzhlfwsfbq2_desc" auto-complete="off"></el-input>
                    </div>-->
                </el-form-item>
                <el-form-item
                    v-show="modelInfo.kswyzhlfwsfbq2!='否'"
                    class="half"
                    label="备注："
                    prop="kswyzhlfwsfbq2_verify">
                    <span>个数：</span><el-input placeholder="请输入示范病区个数" v-model.number="modelInfo.kswyzhlfwsfbq2_count" auto-complete="off"></el-input>
                      <span>内容：</span><el-input placeholder="请输入示范病区内容" v-model="modelInfo.kswyzhlfwsfbq2_desc" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item 
                    label="64.是否为各类别护理专科培训基地（基地名称请在备注栏注明）" 
                    prop="sfwglbhlzkpxjd"
                    :rules="[
                    { required: true, message: '本字段不能为空'} 
                    ]">
                    <el-radio-group v-model="modelInfo.sfwglbhlzkpxjd">
                    <el-radio label="国家级"></el-radio>
                    <el-radio label="否"></el-radio>
                    </el-radio-group>
                    <!--<div class="input_desc half" v-show="modelInfo.sfwglbhlzkpxjd != '否'">
                      <span>个数：</span><el-input placeholder="请输入基地个数" v-model="modelInfo.sfwglbhlzkpxjd_count" auto-complete="off"></el-input>
                      <span>备注：</span><el-input placeholder="请输入基地名称" v-model="modelInfo.sfwglbhlzkpxjd_desc" auto-complete="off"></el-input>
                    </div>-->
                </el-form-item>
                <el-form-item
                    v-show="modelInfo.sfwglbhlzkpxjd!='否'"
                    class="half"
                    label="备注："
                    prop="sfwglbhlzkpxjd_verify">
                    <span>个数：</span><el-input placeholder="请输入基地个数" v-model.number="modelInfo.sfwglbhlzkpxjd_count" auto-complete="off"></el-input>
                      <span>内容：</span><el-input placeholder="请输入基地名称" v-model="modelInfo.sfwglbhlzkpxjd_desc" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item 
                    label="65.是否为各类别护理专科培训基地（基地名称请在备注栏注明）" 
                    prop="sfwglbhlzkpxjd2"
                    :rules="[
                    { required: true, message: '本字段不能为空'} 
                    ]">
                    <el-radio-group v-model="modelInfo.sfwglbhlzkpxjd2">
                    <el-radio label="地市级"></el-radio>
                    <el-radio label="否"></el-radio>
                    </el-radio-group>
                    <!--<div class="input_desc half" v-show="modelInfo.sfwglbhlzkpxjd2 != '否'">
                      <span>个数：</span><el-input placeholder="请输入基地个数" v-model="modelInfo.sfwglbhlzkpxjd2_count" auto-complete="off"></el-input>
                      <span>备注：</span><el-input placeholder="请输入基地名称" v-model="modelInfo.sfwglbhlzkpxjd2_desc" auto-complete="off"></el-input>
                    </div>-->
                </el-form-item>
                <el-form-item
                    v-show="modelInfo.sfwglbhlzkpxjd2!='否'"
                    class="half"
                    label="备注："
                    prop="sfwglbhlzkpxjd2_verify">
                    <span>个数：</span><el-input placeholder="请输入基地个数" v-model.number="modelInfo.sfwglbhlzkpxjd2_count" auto-complete="off"></el-input>
                    <span>内容：</span><el-input placeholder="请输入基地名称" v-model="modelInfo.sfwglbhlzkpxjd2_desc" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="66.全院落实国家中医药管理局重点专科护理方案病种数（个）"
                    prop="qylsgjzyygljzdzkhlfabzs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qylsgjzyygljzdzkhlfabzs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="67.医院制定中医护理方案数量（个）"
                    prop="yyzdzyhlfasl"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.yyzdzyhlfasl" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="68.全院中医护理技术开展项目数（项）"
                    prop="qyzyhljskzxms"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qyzyhljskzxms" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="69.全年中医护理技术开展总例数（例）"
                    prop="qnzyhljskzzlt"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qnzyhljskzzlt" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="70.全院护理临床带教老师人数（人）"
                    prop="qyhllcdjlsrs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qyhllcdjlsrs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="71.全院每年接收实习生人数（人）"
                    prop="qymnjssxsrs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qymnjssxsrs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="72.每年接收本科及以上学历实习生人数（人）"
                    prop="mnjsbkjyssxsrs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.mnjsbkjyssxsrs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="73.每年接收中医院校和中医护理专业实习生人数（人）"
                    prop="mnjszyyxhzyhlzysxsrs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.mnjszyyxhzyhlzysxsrs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="74.每年接收进修护士人数（人）"
                    prop="mnjsjxhsrs"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.mnjsjxhsrs" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="75.国家级在研课题 （项) "
                    prop="gjjzykt"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.gjjzykt" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="76.国家级在研课题获得经费 （万元）"
                    prop="ljjzykthdjf"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.ljjzykthdjf" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="77.省部级在研课题（项）"
                    prop="sbjzykt"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.sbjzykt" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="78.省部级在研课题获得经费（万元）"
                    prop="sbjzykthdjf"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.sbjzykthdjf" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="79.市级（含大学、科学院）（项）"
                    prop="sj"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.sj" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="80.市级（含大学、科学院）获得经费（万元）"
                    prop="sjhdjf"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.sjhdjf" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="81.区级在研课题 （项）"
                    prop="qjzykt"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qjzykt" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="82.区级在研课题获得经费（万元））"
                    prop="qjzykthdjf"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.qjzykthdjf" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="83.院级在研课题（项）"
                    prop="yjzykt"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.yjzykt" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="84.院级在研课题获得经费 （万元）"
                    prop="yjzykthdjf"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.yjzykthdjf" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="85.获得科研成果项目（项）请在备注栏注明"
                    prop="hdkycgxm"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                    <el-input v-model.number="modelInfo.hdkycgxm" auto-complete="off"></el-input>
                    <!--<div class="input_desc">
                      <span>备注：</span><el-input placeholder="请输入科研成果" v-model="modelInfo.hdkycgxm_desc" auto-complete="off"></el-input>
                    </div>-->
                </el-form-item>
                <el-form-item
                    v-show="parseInt(modelInfo.hdkycgxm) > 0"
                    label="备注："
                    prop="hdkycgxm_desc">
                    <el-input placeholder="请输入科研成果" v-model="modelInfo.hdkycgxm_desc" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="86.核心期刊发表文章（篇）"
                    prop="hxqkfbwz"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.hxqkfbwz" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="87.SCI收录论文数（篇）"
                    prop="scisllws"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.scisllws" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="88.担任主编出版著作（部）著作名称请在备注栏注明 "
                    prop="drzbcbzz"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.drzbcbzz" auto-complete="off"></el-input>
                    <!--<div class="input_desc">
                      <span>备注：</span><el-input placeholder="请输入担任主编出版著作名称" v-model="modelInfo.drzbcbzz_desc" auto-complete="off"></el-input>
                    </div>-->
                </el-form-item>
                <el-form-item
                    v-show="parseInt(modelInfo.drzbcbzz) > 0"
                    label="备注："
                    prop="drzbcbzz_desc">
                    <el-input placeholder="请输入担任主编出版著作名称" v-model="modelInfo.drzbcbzz_desc" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="89.参编著作（部）著作名称请在备注栏注明"
                    prop="cbzz"
                    :rules="[
                    { required: true, message: '本字段不能为空'},
                    { type: 'number', message: '本字段必须为数字值'}
                    ]">
                <el-input  v-model.number="modelInfo.cbzz" auto-complete="off"></el-input>
                <!--<div class="input_desc">
                    <span>备注：</span><el-input placeholder="请输入参编著作名称" v-model="modelInfo.cbzz_desc" auto-complete="off"></el-input>
                </div>-->
                </el-form-item>
                <el-form-item
                    v-show="parseInt(modelInfo.cbzz) > 0"
                    label="备注："
                    prop="cbzz_desc">
                    <el-input placeholder="请输入参编著作名称" v-model="modelInfo.cbzz_desc" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button  @click="submitForm('modelInfo')">立即创建</el-button>
                    <el-button @click="resetForm('modelInfo')">重置</el-button>
                </el-form-item>
                </el-form>
        </div>
    </div>
</template>
<script>
import { add } from 'src/api/report'
  export default {
    data() {
       let checkPercent = (rule, value, callback) => {
        if (value !== 0 && !value) {
          return callback(new Error('本字段不能为空'))
        }
        setTimeout(() => {
          if (!/^\d{0,5}(\.\d+)?$|^500$/.test(value)) {
            callback(new Error('字段取值为0-500.0之间'))
          } else {
            callback()
          }
        }, 1000)
      }
      var check_kswyzhlfwsfbq_verify = (rule, value, callback) => {
        if (this.modelInfo.kswyzhlfwsfbq == '否') {
          return callback()
        }
        if (!this.modelInfo.kswyzhlfwsfbq_count || this.modelInfo.kswyzhlfwsfbq_count === 0) {
          return callback(new Error('请填写个数'));
        }
        if (!Number.isInteger(this.modelInfo.kswyzhlfwsfbq_count)) {
          return callback(new Error('请输入数字值'));
        }
        if (this.modelInfo.kswyzhlfwsfbq_count > 0 && !this.modelInfo.kswyzhlfwsfbq_desc) {
          return callback(new Error('请填写内容'));
        }
        return callback()
      };
      var check_kswyzhlfwsfbq2_verify = (rule, value, callback) => {
        if (this.modelInfo.kswyzhlfwsfbq2 == '否') {
          return callback()
        }
        if (!this.modelInfo.kswyzhlfwsfbq2_count || this.modelInfo.kswyzhlfwsfbq2_count === 0) {
          return callback(new Error('请填写个数'));
        }
        if (!Number.isInteger(this.modelInfo.kswyzhlfwsfbq2_count)) {
          return callback(new Error('请输入数字值'));
        }
        if (this.modelInfo.kswyzhlfwsfbq2_count > 0 && !this.modelInfo.kswyzhlfwsfbq2_desc) {
          return callback(new Error('请填写内容'));
        }
        return callback()
      };
      var check_sfwglbhlzkpxjd_verify = (rule, value, callback) => {
        if (this.modelInfo.sfwglbhlzkpxjd == '否') {
          return callback()
        }
        if (!this.modelInfo.sfwglbhlzkpxjd_count || this.modelInfo.sfwglbhlzkpxjd_count === 0) {
          return callback(new Error('请填写个数'));
        }
        if (!Number.isInteger(this.modelInfo.sfwglbhlzkpxjd_count)) {
          return callback(new Error('请输入数字值'));
        }
        if (this.modelInfo.sfwglbhlzkpxjd_count > 0 && !this.modelInfo.sfwglbhlzkpxjd2_desc) {
          return callback(new Error('请填写内容'));
        }
        return callback()
      };
      var check_sfwglbhlzkpxjd2_verify = (rule, value, callback) => {
        if (this.modelInfo.sfwglbhlzkpxjd2 == '否') {
          return callback()
        }
        if (!this.modelInfo.sfwglbhlzkpxjd2_count || this.modelInfo.sfwglbhlzkpxjd2_count === 0) {
          return callback(new Error('请填写个数'));
        }
        if (!Number.isInteger(this.modelInfo.sfwglbhlzkpxjd2_count)) {
          return callback(new Error('请输入数字值'));
        }
        if (this.modelInfo.sfwglbhlzkpxjd2_count > 0 && !this.modelInfo.sfwglbhlzkpxjd2_desc) {
          return callback(new Error('请填写内容'));
        }
        return callback()
      };
      return {
        modelInfo: {
          sfjlhlzlglwyh: '否',
          kzhlxxhjs: '否',
          // hlglxt: '否',
          yywyzhlfwsfyy: '否',
          kswyzhlfwsfbq: '否',
          kswyzhlfwsfbq2: '否',
          sfwglbhlzkpxjd: '否',
          sfwglbhlzkpxjd2: '否',
          lchlxxxt: [],
          hlzlgljg: '否'
        },
        rules: {
          cshlgzdhlryzqywsjsrydbl: [
            { validator: checkPercent, trigger: 'blur' }
          ],
          bqhsysjkfcwbl: [
            { validator: checkPercent, trigger: 'blur' }
          ],
          zzjhbfhsysjkfcwbl: [
            { validator: checkPercent, trigger: 'blur' }
          ],
          ccubfhsysjkfcwbl: [
            { validator: checkPercent, trigger: 'blur' }
          ],
          ssshsysjkfssjbl: [
            { validator: checkPercent, trigger: 'blur' }
          ],
          txshsytxjbl: [
            { validator: checkPercent, trigger: 'blur' }
          ],
          ssysxlhszqyhsbl: [
            { validator: checkPercent, trigger: 'blur' }
          ],
          bkxlhszbqyhsbl: [
            { validator: checkPercent, trigger: 'blur' }
          ],
          dzxlhszbqqhsbl: [
            { validator: checkPercent, trigger: 'blur' }
          ],
          zzxlhszbqyhsbl: [
            { validator: checkPercent, trigger: 'blur' }
          ],
          hlglrybkysxlbl: [
            { validator: checkPercent, trigger: 'blur' }
          ],
          zzyxbyhzyhlzybyhszqyhsbl: [
            { validator: checkPercent, trigger: 'blur' }
          ],
          qygzchsbl: [
            { validator: checkPercent, trigger: 'blur' }
          ],
          qyzjzchsbl: [
            { validator: checkPercent, trigger: 'blur' }
          ],
          qycjzchsbl: [
            { validator: checkPercent, trigger: 'blur' }
          ],
          qycjzchsbl: [
            { validator: checkPercent, trigger: 'blur' }
          ],
          hlryxtjszyyzshjngwpxdbl: [
            { validator: checkPercent, trigger: 'blur' }
          ],
          zkhszqyhsbl: [
            { validator: checkPercent, trigger: 'blur' }
          ],
          zrzzthlfwbqzqybqsbl: [
            { validator: checkPercent, trigger: 'blur' }
          ],
          kswyzhlfwsfbq_verify: [
            { validator: check_kswyzhlfwsfbq_verify, trigger: 'blur'}
          ],
          kswyzhlfwsfbq2_verify: [
            { validator: check_kswyzhlfwsfbq2_verify, trigger: 'blur'}
          ],
          sfwglbhlzkpxjd_verify: [
            { validator: check_sfwglbhlzkpxjd_verify, trigger: 'blur'}
          ],
          sfwglbhlzkpxjd2_verify: [
            { validator: check_sfwglbhlzkpxjd2_verify, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        // testFetch().then(response => {
        //   console.log(response.data)
        // });
        this.$refs[formName].validate((valid) => {
          if (valid) {
            add(this.modelInfo).then(response => {
              if (response.data.status == 2) {
                this.$router.push('/login');
                this.$message(response.data.message);
                return
              }
              if (!response.data.status) {
                this.$message(response.data.message);
                return
              }
              this.$message({
                message: '上报成功！',
                type: 'success'
              });
              this.$router.push('/reportlist')
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
<style>
input.input_dsec {
  display: inline-block;
}
</style>