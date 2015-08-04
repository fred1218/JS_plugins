Ext.define('Aria.view.ItemSelector', {
    extend: 'Ext.panel.Panel',
    alias:'widget.mysimpleitemselector',
    
    requires: [
        'Ext.ux.form.MultiSelect',
        'Ext.ux.form.ItemSelector'
    ],

    title: 'Item Selector',

    initComponent:function () {
        var me = this;
        var ds = Ext.create('Ext.data.ArrayStore', {
            fields:['value', 'text'],
            data:[
                [123, 'One Hundred Twenty Three'],
                ['1', 'One'],
                ['2', 'Two'],
                ['3', 'Three'],
                ['4', 'Four'],
                ['5', 'Five'],
                ['6', 'Six'],
                ['7', 'Seven'],
                ['8', 'Eight'],
                ['9', 'Nine'],
                ['10', 'Ten'],
                ['11', 'Eleven'],
                ['12', 'Twelve'],
                ['13', 'Thirteen'],
                ['14', 'Fourteen'],
                ['15', 'Fifteen']
            ]
        });

        me.items = [{
            xtype: 'panel',
            title: 'Sample ItemSelector widget',
            ariaRole: 'region',
            
            width: 600,
            height: 250,
            layout: 'fit',
            
            bodyStyle: {
                'padding-top': '6px'
            },
            
            items: [{
                xtype:'itemselector',
                name:'itemselector',
                id:'itemselector-field',
                cls: 'aria-itemselector',
                fieldLabel: 'Select multiple items',
                imagePath:'../ux/images/',
                store:ds,
                displayField:'text',
                valueField:'value',
                value:['3', '4', '6'],
                allowBlank:false,
                msgTarget:'side',
                fromTitle:'Available',
                toTitle:'Selected'
            }]
        }];

        me.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'bottom',
                ui: 'footer',
                defaults: {
                    minWidth: 75
                },
                items: ['->', {
                    text: 'Clear',
                    handler: function(){
                        var field = Ext.getCmp(fieldId);
                        if (!field.disabled) {
                            field.clearValue();
                        }
                    }
                }, {
                    text: 'Reset',
                    handler: function() {
                        Ext.getCmp(fieldId).up('form').getForm().reset();
                    }
                }, {
                    text: 'Save',
                    handler: function(){
                        var form = Ext.getCmp(fieldId).up('form').getForm();
                        form.getValues(true);
                        if (form.isValid()){
                            Aria.app.msg('Submitted Values', 'The following will be sent to the server: <br />'+
                                form.getValues(true));
                        }
                    }
                }]
            }];

        me.callParent(arguments);
    }
});