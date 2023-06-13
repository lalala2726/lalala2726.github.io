(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4aebf114"],{"1f34":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:4,xs:24}},[s("div",{staticClass:"head-container"},[s("el-input",{staticStyle:{"margin-bottom":"20px"},attrs:{placeholder:"请输入部门名称",clearable:"",size:"small","prefix-icon":"el-icon-search"},model:{value:e.deptName,callback:function(t){e.deptName=t},expression:"deptName"}})],1),s("div",{staticClass:"head-container"},[s("el-tree",{ref:"tree",attrs:{data:e.deptOptions,props:e.defaultProps,"expand-on-click-node":!1,"filter-node-method":e.filterNode,"node-key":"id","default-expand-all":"","highlight-current":""},on:{"node-click":e.handleNodeClick}})],1)]),s("el-col",{attrs:{span:20,xs:24}},[s("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"68px"}},[s("el-form-item",{attrs:{label:"用户名称",prop:"userName"}},[s("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入用户名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.userName,callback:function(t){e.$set(e.queryParams,"userName",t)},expression:"queryParams.userName"}})],1),s("el-form-item",{attrs:{label:"手机号码",prop:"phonenumber"}},[s("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入手机号码",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.phonenumber,callback:function(t){e.$set(e.queryParams,"phonenumber",t)},expression:"queryParams.phonenumber"}})],1),s("el-form-item",{attrs:{label:"状态",prop:"status"}},[s("el-select",{staticStyle:{width:"240px"},attrs:{placeholder:"用户状态",clearable:""},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.dict.type.sys_normal_disable,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),s("el-form-item",{attrs:{label:"创建时间"}},[s("el-date-picker",{staticStyle:{width:"240px"},attrs:{"value-format":"yyyy-MM-dd",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),s("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),s("el-row",{staticClass:"mb8",attrs:{gutter:10}},[s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:add"],expression:"['system:user:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:edit"],expression:"['system:user:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:remove"],expression:"['system:user:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:import"],expression:"['system:user:import']"}],attrs:{type:"info",plain:"",icon:"el-icon-upload2",size:"mini"},on:{click:e.handleImport}},[e._v("导入")])],1),s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:export"],expression:"['system:user:export']"}],attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1),s("right-toolbar",{attrs:{showSearch:e.showSearch,columns:e.columns},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.userList},on:{"selection-change":e.handleSelectionChange}},[s("el-table-column",{attrs:{align:"center",type:"selection",width:"50"}}),e.columns[0].visible?s("el-table-column",{key:"userId",attrs:{align:"center",label:"用户编号",prop:"userId"}}):e._e(),e.columns[1].visible?s("el-table-column",{key:"userName",attrs:{"show-overflow-tooltip":!0,align:"center",label:"用户名称",prop:"userName"}}):e._e(),e.columns[2].visible?s("el-table-column",{key:"nickName",attrs:{"show-overflow-tooltip":!0,align:"center",label:"用户昵称",prop:"nickName"}}):e._e(),e.columns[3].visible?s("el-table-column",{key:"deptName",attrs:{"show-overflow-tooltip":!0,align:"center",label:"部门",prop:"dept.deptName"}}):e._e(),e.columns[4].visible?s("el-table-column",{key:"phonenumber",attrs:{align:"center",label:"手机号码",prop:"phonenumber",width:"120"}}):e._e(),e.columns[5].visible?s("el-table-column",{key:"status",attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-switch",{attrs:{"active-value":"0","inactive-value":"1"},on:{change:function(s){return e.handleStatusChange(t.row)}},model:{value:t.row.status,callback:function(s){e.$set(t.row,"status",s)},expression:"scope.row.status"}})]}}],null,!1,3955094654)}):e._e(),e.columns[6].visible?s("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}],null,!1,3078210614)}):e._e(),s("el-table-column",{attrs:{label:"操作",align:"center",width:"160","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return 1!==t.row.userId?[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:edit"],expression:"['system:user:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(s){return e.handleUpdate(t.row)}}},[e._v("修改")]),s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:remove"],expression:"['system:user:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(s){return e.handleDelete(t.row)}}},[e._v("删除")]),s("el-dropdown",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:resetPwd","system:user:edit"],expression:"['system:user:resetPwd', 'system:user:edit']"}],attrs:{size:"mini"},on:{command:function(s){return e.handleCommand(s,t.row)}}},[s("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-d-arrow-right"}},[e._v("更多")]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:resetPwd"],expression:"['system:user:resetPwd']"}],attrs:{command:"handleResetPwd",icon:"el-icon-key"}},[e._v("重置密码 ")]),s("el-dropdown-item",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:edit"],expression:"['system:user:edit']"}],attrs:{command:"handleAuthRole",icon:"el-icon-circle-check"}},[e._v("分配角色 ")])],1)],1)]:void 0}}],null,!0)})],1),s("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)],1),s("el-dialog",{attrs:{title:e.title,visible:e.open,width:"600px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[s("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[s("el-row",[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"用户昵称",prop:"nickName"}},[s("el-input",{attrs:{maxlength:"30",placeholder:"请输入用户昵称"},model:{value:e.form.nickName,callback:function(t){e.$set(e.form,"nickName",t)},expression:"form.nickName"}})],1)],1),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"归属部门",prop:"deptId"}},[s("treeselect",{attrs:{options:e.deptOptions,"show-count":!0,placeholder:"请选择归属部门"},model:{value:e.form.deptId,callback:function(t){e.$set(e.form,"deptId",t)},expression:"form.deptId"}})],1)],1)],1),s("el-row",[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"手机号码",prop:"phonenumber"}},[s("el-input",{attrs:{placeholder:"请输入手机号码",maxlength:"11"},model:{value:e.form.phonenumber,callback:function(t){e.$set(e.form,"phonenumber",t)},expression:"form.phonenumber"}})],1)],1),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{attrs:{placeholder:"请输入邮箱",maxlength:"50"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1)],1),s("el-row",[s("el-col",{attrs:{span:12}},[void 0==e.form.userId?s("el-form-item",{attrs:{label:"用户名称",prop:"userName"}},[s("el-input",{attrs:{maxlength:"30",placeholder:"请输入用户名称"},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}})],1):e._e()],1),s("el-col",{attrs:{span:12}},[void 0==e.form.userId?s("el-form-item",{attrs:{label:"用户密码",prop:"password"}},[s("el-input",{attrs:{placeholder:"请输入用户密码",type:"password",maxlength:"20","show-password":""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1):e._e()],1)],1),s("el-row",[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"用户性别"}},[s("el-select",{attrs:{placeholder:"请选择性别"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},e._l(e.dict.type.sys_user_sex,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"状态"}},[s("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.dict.type.sys_normal_disable,(function(t){return s("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1)],1)],1),s("el-row",[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"岗位"}},[s("el-select",{attrs:{multiple:"",placeholder:"请选择岗位"},model:{value:e.form.postIds,callback:function(t){e.$set(e.form,"postIds",t)},expression:"form.postIds"}},e._l(e.postOptions,(function(e){return s("el-option",{key:e.postId,attrs:{label:e.postName,value:e.postId,disabled:1==e.status}})})),1)],1)],1),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"角色"}},[s("el-select",{attrs:{multiple:"",placeholder:"请选择角色"},model:{value:e.form.roleIds,callback:function(t){e.$set(e.form,"roleIds",t)},expression:"form.roleIds"}},e._l(e.roleOptions,(function(e){return s("el-option",{key:e.roleId,attrs:{label:e.roleName,value:e.roleId,disabled:1==e.status}})})),1)],1)],1)],1),s("el-row",[s("el-col",{attrs:{span:24}},[s("el-form-item",{attrs:{label:"备注"}},[s("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),s("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),s("el-dialog",{attrs:{title:e.upload.title,visible:e.upload.open,width:"400px","append-to-body":""},on:{"update:visible":function(t){return e.$set(e.upload,"open",t)}}},[s("el-upload",{ref:"upload",attrs:{limit:1,accept:".xlsx, .xls",headers:e.upload.headers,action:e.upload.url+"?updateSupport="+e.upload.updateSupport,disabled:e.upload.isUploading,"on-progress":e.handleFileUploadProgress,"on-success":e.handleFileSuccess,"auto-upload":!1,drag:""}},[s("i",{staticClass:"el-icon-upload"}),s("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),s("em",[e._v("点击上传")])]),s("div",{staticClass:"el-upload__tip text-center",attrs:{slot:"tip"},slot:"tip"},[s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[s("el-checkbox",{model:{value:e.upload.updateSupport,callback:function(t){e.$set(e.upload,"updateSupport",t)},expression:"upload.updateSupport"}}),e._v(" 是否更新已经存在的用户数据 ")],1),s("span",[e._v("仅允许导入xls、xlsx格式文件。")]),s("el-link",{staticStyle:{"font-size":"12px","vertical-align":"baseline"},attrs:{type:"primary",underline:!1},on:{click:e.importTemplate}},[e._v("下载模板")])],1)]),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:e.submitFileForm}},[e._v("确 定")]),s("el-button",{on:{click:function(t){e.upload.open=!1}}},[e._v("取 消")])],1)],1)],1)},r=[],l=s("5530"),o=(s("4de4"),s("d3b7"),s("d81d"),s("14d9"),s("c0c7")),n=s("5f87"),i=s("ca17"),u=s.n(i),d=(s("542c"),{name:"User",dicts:["sys_normal_disable","sys_user_sex"],components:{Treeselect:u.a},data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,userList:null,title:"",deptOptions:void 0,open:!1,deptName:void 0,initPassword:void 0,dateRange:[],postOptions:[],roleOptions:[],form:{},defaultProps:{children:"children",label:"label"},upload:{open:!1,title:"",isUploading:!1,updateSupport:0,headers:{Authorization:"Bearer "+Object(n["a"])()},url:"/prod-api/system/user/importData"},queryParams:{pageNum:1,pageSize:10,userName:void 0,phonenumber:void 0,status:void 0,deptId:void 0},columns:[{key:0,label:"用户编号",visible:!0},{key:1,label:"用户名称",visible:!0},{key:2,label:"用户昵称",visible:!0},{key:3,label:"部门",visible:!0},{key:4,label:"手机号码",visible:!0},{key:5,label:"状态",visible:!0},{key:6,label:"创建时间",visible:!0}],rules:{userName:[{required:!0,message:"用户名称不能为空",trigger:"blur"},{min:2,max:20,message:"用户名称长度必须介于 2 和 20 之间",trigger:"blur"}],nickName:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],password:[{required:!0,message:"用户密码不能为空",trigger:"blur"},{min:5,max:20,message:"用户密码长度必须介于 5 和 20 之间",trigger:"blur"}],email:[{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],phonenumber:[{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}},watch:{deptName:function(e){this.$refs.tree.filter(e)}},created:function(){var e=this;this.getList(),this.getDeptTree(),this.getConfigKey("sys.user.initPassword").then((function(t){e.initPassword=t.msg}))},methods:{getList:function(){var e=this;this.loading=!0,Object(o["h"])(this.addDateRange(this.queryParams,this.dateRange)).then((function(t){e.userList=t.rows,e.total=t.total,e.loading=!1}))},getDeptTree:function(){var e=this;Object(o["d"])().then((function(t){e.deptOptions=t.data}))},filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},handleNodeClick:function(e){this.queryParams.deptId=e.id,this.handleQuery()},handleStatusChange:function(e){var t=this,s="0"===e.status?"启用":"停用";this.$modal.confirm('确认要"'+s+'""'+e.userName+'"用户吗？').then((function(){return Object(o["b"])(e.userId,e.status)})).then((function(){t.$modal.msgSuccess(s+"成功")})).catch((function(){e.status="0"===e.status?"1":"0"}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={userId:void 0,deptId:void 0,userName:void 0,nickName:void 0,password:void 0,phonenumber:void 0,email:void 0,sex:void 0,status:"0",remark:void 0,postIds:[],roleIds:[]},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.dateRange=[],this.resetForm("queryForm"),this.queryParams.deptId=void 0,this.$refs.tree.setCurrentKey(null),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.userId})),this.single=1!=e.length,this.multiple=!e.length},handleCommand:function(e,t){switch(e){case"handleResetPwd":this.handleResetPwd(t);break;case"handleAuthRole":this.handleAuthRole(t);break;default:break}},handleAdd:function(){var e=this;this.reset(),Object(o["f"])().then((function(t){e.postOptions=t.posts,e.roleOptions=t.roles,e.open=!0,e.title="添加用户",e.form.password=e.initPassword}))},handleUpdate:function(e){var t=this;this.reset();var s=e.userId||this.ids;Object(o["f"])(s).then((function(e){t.form=e.data,t.postOptions=e.posts,t.roleOptions=e.roles,t.$set(t.form,"postIds",e.postIds),t.$set(t.form,"roleIds",e.roleIds),t.open=!0,t.title="修改用户",t.form.password=""}))},handleResetPwd:function(e){var t=this;this.$prompt('请输入"'+e.userName+'"的新密码',"提示",{confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,inputPattern:/^.{5,20}$/,inputErrorMessage:"用户密码长度必须介于 5 和 20 之间"}).then((function(s){var a=s.value;Object(o["i"])(e.userId,a).then((function(e){t.$modal.msgSuccess("修改成功，新密码是："+a)}))})).catch((function(){}))},handleAuthRole:function(e){var t=e.userId;this.$router.push("/system/user-auth/role/"+t)},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!=e.form.userId?Object(o["k"])(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):Object(o["a"])(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,s=e.userId||this.ids;this.$modal.confirm('是否确认删除用户编号为"'+s+'"的数据项？').then((function(){return Object(o["c"])(s)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("system/user/export",Object(l["a"])({},this.queryParams),"user_".concat((new Date).getTime(),".xlsx"))},handleImport:function(){this.upload.title="用户导入",this.upload.open=!0},importTemplate:function(){this.download("system/user/importTemplate",{},"user_template_".concat((new Date).getTime(),".xlsx"))},handleFileUploadProgress:function(e,t,s){this.upload.isUploading=!0},handleFileSuccess:function(e,t,s){this.upload.open=!1,this.upload.isUploading=!1,this.$refs.upload.clearFiles(),this.$alert("<div style='overflow: auto;overflow-x: hidden;max-height: 70vh;padding: 10px 20px 0;'>"+e.msg+"</div>","导入结果",{dangerouslyUseHTMLString:!0}),this.getList()},submitFileForm:function(){this.$refs.upload.submit()}}}),c=d,m=s("2877"),p=Object(m["a"])(c,a,r,!1,null,null,null);t["default"]=p.exports},c0c7:function(e,t,s){"use strict";s.d(t,"h",(function(){return l})),s.d(t,"f",(function(){return o})),s.d(t,"a",(function(){return n})),s.d(t,"k",(function(){return i})),s.d(t,"c",(function(){return u})),s.d(t,"i",(function(){return d})),s.d(t,"b",(function(){return c})),s.d(t,"g",(function(){return m})),s.d(t,"l",(function(){return p})),s.d(t,"m",(function(){return h})),s.d(t,"n",(function(){return f})),s.d(t,"e",(function(){return b})),s.d(t,"j",(function(){return v})),s.d(t,"d",(function(){return y}));var a=s("b775"),r=s("c38a");function l(e){return Object(a["a"])({url:"/system/user/list",method:"get",params:e})}function o(e){return Object(a["a"])({url:"/system/user/"+Object(r["e"])(e),method:"get"})}function n(e){return Object(a["a"])({url:"/system/user",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/system/user",method:"put",data:e})}function u(e){return Object(a["a"])({url:"/system/user/"+e,method:"delete"})}function d(e,t){var s={userId:e,password:t};return Object(a["a"])({url:"/system/user/resetPwd",method:"put",data:s})}function c(e,t){var s={userId:e,status:t};return Object(a["a"])({url:"/system/user/changeStatus",method:"put",data:s})}function m(){return Object(a["a"])({url:"/system/user/profile",method:"get"})}function p(e){return Object(a["a"])({url:"/system/user/profile",method:"put",data:e})}function h(e,t){var s={oldPassword:e,newPassword:t};return Object(a["a"])({url:"/system/user/profile/updatePwd",method:"put",params:s})}function f(e){return Object(a["a"])({url:"/system/user/profile/avatar",method:"post",data:e})}function b(e){return Object(a["a"])({url:"/system/user/authRole/"+e,method:"get"})}function v(e){return Object(a["a"])({url:"/system/user/authRole",method:"put",params:e})}function y(){return Object(a["a"])({url:"/system/user/deptTree",method:"get"})}}}]);