
Ext.QuickTips.init();
Ext.form.Field.prototype.msgTarget ='side';

Ext.onReady(function() {


var myform = new Ext.FormPanel({

width:500,
height:250,
xtype:'formpanel',
id:'myForm',

defaultType:'textfield',
method:'POST',
url:'backEnd',
items:[

{
 xtype: 'radiogroup',
fieldLabel: 'Login As',
 defaults: { 
            labelWidth: 250,
            margin: '5 5 5 5 '
         },
items:[
         {
            xtype: 'radiofield',
            boxLabel: 'Staff',
            name: 'framework',
            checked: false,
            inputValue: 'Staff'
          },
          
        {
            xtype: 'radiofield',
            boxLabel: 'Student',
            name: 'framework',
            checked: false,
            inputValue: 'Student'
          }
       ]
 },                
{
xtype: 'textfield'
,fieldLabel: 'User Name'
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
,inputType: 'password'
,width: 250
,allowBlank:false
,blankText:'Password Field is Mandatory'
,minLength:3
,maxLength: 30

}]

});

var panel = new Ext.Panel({
width:500,
height:250,
layout:'border',
renderTo:document.body,
 border: 1,
    style: {borderColor:'#00000', borderStyle:'solid', borderWidth:'5px'},
buttonAlign: 'center',
buttons:[{text:'Sign In',
//type:'submit',
listeners: {
        click: function() {
            
        	var value1 = Ext.ComponentQuery.query('textfield[id=txtuserName]')[0].getValue();
        	var value2 = Ext.ComponentQuery.query('textfield[id=txtPassword]')[0].getValue();
    if (myform.isValid()) {
        myform.submit({
        	
      		url:'backEnd',  // your url
            params: {id:value1,pwd:value2}, // needed for additional params
            submitEmptyText: false,  // don't post empty text in fields
//            success: function(myform, action) {
//               Ext.Msg.alert('Success', "Login successful");
////            	window.location = 'registration';    				
//            },
//            failure: function(myform, action) {
//                Ext.Msg.alert('Failed', "Login failed");
//            }
        });     	
        }      
}
}
},
{text:'Register'}],
title: 'Welcome to ONE NETWORK',
frame:true,
layout : 'form',
items : [myform]
}).show();

});

