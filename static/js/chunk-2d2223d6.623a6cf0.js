(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2223d6"],{ce86:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.ratingList},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{align:"center",type:"selection",width:"50"}}),n("el-table-column",{attrs:{align:"center",label:"学号",prop:"studentId"}}),n("el-table-column",{attrs:{align:"center",label:"姓名",prop:"studentName"}}),n("el-table-column",{attrs:{align:"center",label:"姓名",prop:"groupName"}}),n("el-table-column",{attrs:{align:"center",label:"自我学习",prop:"self"}}),n("el-table-column",{attrs:{align:"center",label:"信息处理",prop:"information"}}),n("el-table-column",{attrs:{align:"center",label:"沟通交流",prop:"communicate"}}),n("el-table-column",{attrs:{align:"center",label:"团队合作",prop:"team"}}),n("el-table-column",{attrs:{align:"center",label:"解决问题",prop:"solve"}}),n("el-table-column",{attrs:{align:"center",label:"革新创新",prop:"innovation"}}),n("el-table-column",{attrs:{align:"center",label:"上次总分",prop:"thisResult"}}),n("el-table-column",{attrs:{align:"center",label:"修改时间",prop:"updateTime",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.updateTime?e.row.updateTime:"暂无数据"))])]}}])}),n("el-table-column",{attrs:{align:"center","class-name":"small-padding fixed-width",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["complex:rating:edit"],expression:"['complex:rating:edit']"}],attrs:{icon:"el-icon-edit",size:"mini",type:"text"},on:{click:function(n){return t.handleUpdate(e.row)}}},[t._v("修改 ")]),n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["complex:rating:remove"],expression:"['complex:rating:remove']"}],attrs:{icon:"el-icon-delete",size:"mini",type:"text"},on:{click:function(n){return t.handleDelete(e.row)}}},[t._v("删除 ")])]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{limit:t.queryParams.pageSize,page:t.queryParams.pageNum,total:t.total},on:{"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},"update:page":function(e){return t.$set(t.queryParams,"pageNum",e)},pagination:t.getList}}),n("el-dialog",{attrs:{title:t.title,visible:t.open,"append-to-body":"",width:"600px"},on:{"update:visible":function(e){t.open=e}}},[n("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"学生姓名",prop:"studentName"}},[n("el-input",{attrs:{disabled:!0,maxlength:"30",placeholder:"请输入姓名"},model:{value:t.form.studentName,callback:function(e){t.$set(t.form,"studentName",e)},expression:"form.studentName"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"学生学号",prop:"studentId"}},[n("el-input-number",{attrs:{disabled:!0,"controls-position":"right"},model:{value:t.form.studentId,callback:function(e){t.$set(t.form,"studentId",e)},expression:"form.studentId"}})],1)],1)],1),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"自我学习",prop:"self"}},[n("el-input-number",{attrs:{max:2,min:0,"controls-position":"right"},model:{value:t.form.self,callback:function(e){t.$set(t.form,"self",e)},expression:"form.self"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"信息处理",prop:"information"}},[n("el-input-number",{attrs:{max:2,min:0,"controls-position":"right"},model:{value:t.form.information,callback:function(e){t.$set(t.form,"information",e)},expression:"form.information"}})],1)],1)],1),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"沟通交流",prop:"communicate"}},[n("el-input-number",{attrs:{max:2,min:0,"controls-position":"right"},model:{value:t.form.communicate,callback:function(e){t.$set(t.form,"communicate",e)},expression:"form.communicate"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"团队合作",prop:"team"}},[n("el-input-number",{attrs:{max:2,min:0,"controls-position":"right"},model:{value:t.form.team,callback:function(e){t.$set(t.form,"team",e)},expression:"form.team"}})],1)],1)],1),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"解决问题",prop:"solve"}},[n("el-input-number",{attrs:{max:2,min:0,"controls-position":"right"},model:{value:t.form.solve,callback:function(e){t.$set(t.form,"solve",e)},expression:"form.solve"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"革新创新",prop:"innovation"}},[n("el-input-number",{attrs:{max:2,min:0,"controls-position":"right"},model:{value:t.form.innovation,callback:function(e){t.$set(t.form,"innovation",e)},expression:"form.innovation"}})],1)],1)],1),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"本次总分",prop:"thisResult"}},[n("el-input-number",{attrs:{disabled:!0,"max:":10,min:0,"controls-position":"right"},model:{value:t.form.thisResult,callback:function(e){t.$set(t.form,"thisResult",e)},expression:"form.thisResult"}})],1)],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")]),n("el-button",{on:{click:t.cancel}},[t._v("取 消")])],1)],1)],1)},a=[],l=n("5530"),i=(n("d81d"),n("b775"));function r(t){return Object(i["a"])({url:"/school/complex/student/last/ratings/list",method:"get",params:t})}function s(t){return Object(i["a"])({url:"/school/complex/student/last/ratings/"+t,method:"get"})}function m(t){return Object(i["a"])({url:"/school/complex/student/last/ratings",method:"put",data:t})}var u={name:"Post",dicts:["sys_normal_disable"],data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,ratingList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,postCode:void 0,postName:void 0,status:void 0},form:{},rules:{studentName:[{required:!0,message:"学生姓名不能为空!",trigger:"blur"}],studentId:[{required:!0,message:"学号不能为空!",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.loading=!0,r(this.queryParams).then((function(e){t.ratingList=e.rows,t.total=e.total,t.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={studentName:void 0,studentId:0,ratingsId:void 0,self:0,information:0,communicate:0,team:0,solve:0,innovation:0,thisResult:0},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(t){this.ids=t.map((function(t){return t.postId})),this.single=1!=t.length,this.multiple=!t.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加岗位"},handleUpdate:function(t){var e=this;this.reset();var n=t.studentId||this.ids;s(n).then((function(t){e.form=t.data,e.open=!0,e.title="修改成绩"}))},submitForm:function(){var t=this;this.$refs["form"].validate((function(e){e&&void 0!==t.form.ratingsId&&m(t.form).then((function(e){t.$modal.msgSuccess("修改成功"),t.open=!1,t.getList()}))}))},handleDelete:function(t){var e=this,n=t.postId||this.ids;this.$modal.confirm('是否确认删除岗位编号为"'+n+'"的数据项？').then((function(){return delPost(n)})).then((function(){e.getList(),e.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("system/post/export",Object(l["a"])({},this.queryParams),"post_".concat((new Date).getTime(),".xlsx"))}}},c=u,p=n("2877"),d=Object(p["a"])(c,o,a,!1,null,null,null);e["default"]=d.exports}}]);