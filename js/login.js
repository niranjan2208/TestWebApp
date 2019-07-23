
var myform = new Ext.form.FormPanel({
width:400,
height:250,
renderTo:document.body,
items:[{
xtype: 'textfield'
,fieldlabel: 'UserName'
,inputTpe: 'password'
,width: 150
,id: 'txtuserName'
,allowBlank:false
,minLength:3
,maxLength: 30
},{
xtype: 'textfield'
,fieldlabel: 'Password'
,id:'txtPassword'
,inputTpe: 'password'
,width: 150
,allowBlank:false
,minLength:3
,maxLength: 30
}]

});
