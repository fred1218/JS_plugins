Ext.define('KitchenSink.view.tablet.NestedList', {
    extend: 'Ext.NestedList',
    xtype: 'tabletnestedlist',

    platformConfig: {
        blackberry: {
            toolbar: {
                ui: 'dark'
            }
        }
        // Need to look at theme specific overrides for apps
        /*
        cupertinoclassic: {
            toolbar: {
                ui: 'dark'
            }
        }
        */
    }
});
