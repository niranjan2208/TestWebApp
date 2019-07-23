
Ext.QuickTips.init();
Ext.form.Field.prototype.msgTarget ='side';

Ext.onReady(function() {


var myform = new Ext.FormPanel({
width:800,
height:250,
defaultType:'textfield',
items:[{
xtype: 'textfield'
,fieldLabel: 'User Name'
,inputTpe: 'password'
,width: 250
,id: 'txtuserName'
,allowBlank:false
,blankText:'UserName Field is Mandatory'
,minLength:3
,maxLength: 30
},{
xtype: 'textfield'
,fieldLabel: 'Password'
,id:'txtPassword'
,inputTpe: 'password'
,width: 250
,allowBlank:false
,blankText:'Password Field is Mandatory'
,minLength:3
,maxLength: 30
}]

});

var panel = new Ext.Panel({
width:800,
height:250,
renderTo:document.body,
buttonAlign: 'center',
buttons:[{text:'Login'},{text:'Reset'}],
title: 'Welcome to ONE NETWORK',
frame:true,
layout : 'form',
items : [myform]
});


})

