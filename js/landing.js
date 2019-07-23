 Ext.onReady(function() {
            Ext.create('Ext.form.Panel', {
               id: 'newForm',
               renderTo: 'formId',
               border: true,
               width: 600,
                             
               items: [{
                  xtype: 'button',
                  text: 'Login'
               },{
                  xtype: 'button',
                  text: 'Register'
               }
               ]
            });
         });