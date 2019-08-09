
Ext.onReady(function() {
var myform = new Ext.FormPanel({

   
              items: [{
                  xtype: 'textfield',
                  fieldLabel: 'Full Name'
                  },{
                  xtype: 'fieldcontainer',
                  fieldLabel: 'Gender',
                  defaultType: 'radiofield',
                  defaults: {
                     flex: 1
                  },
                  layout: 'hbox',
                  items: [{
                     boxLabel: 'Male',
                     inputValue: 'a',
                     id: 'radio1'
                  },{
                     boxLabel: 'Female',
                     inputValue: 'b',
                     id: 'radio2'
                  
                  }]
                },
                {
                  xtype: 'datefield',
                  fieldLabel: 'Date Of Birth'
               },{
                  xtype: 'textfield',
                  fieldLabel: 'Email'
             },{
                  xtype: 'textfield',
                  fieldLabel: 'Address Line 1'
             },{
             xtype: 'textfield',
                  fieldLabel: 'Address Line 2'
             
             },{
                  xtype: 'combobox',
                  fieldLabel: 'City',
                  store: Ext.create('Ext.data.Store', {
                     fields: ['abbr', 'name'],
                     data: [{
                        'abbr': 'Pune',
                        'name': 'Pune'
                     },{
                        'abbr': 'Mumbai',
                        'name': 'Mumbai'
                     },{
                        'abbr': 'Nagpur',
                        'name': 'Nagpur'
                     },{
                        'abbr': 'Bangalore',
                        'name': 'Bangalore'
                     }]
                  }),
                  valueField: 'abbr',
                  displayField: 'name'

             },{
                 xtype: 'fieldcontainer',
                  fieldLabel: '',
                  defaultType: 'checkboxfield',
               items: [{
                     boxLabel: 'Agree T & C',
                     inputValue: 'Agree T & C',
                     id: 'checkbox1'
                  }
             ]
             
           
                }],
                
               
               
       })  ;      
               
var panel = new Ext.Panel({
width:600,
height:300,
layout:'border',
renderTo:document.body,
 border: 1,
    style: {borderColor:'#000000', borderStyle:'solid', borderWidth:'1px', margin:'10px' }, 
          
    buttonAlign: 'center',
    buttons:[{text:'Submit'}],
               

               title: 'Register Here!!!',
               frame:true,
               layout : 'form',
               items : [myform]
                
               
     })  ;
     

   
   
   
   
     
     
     
     
     })        