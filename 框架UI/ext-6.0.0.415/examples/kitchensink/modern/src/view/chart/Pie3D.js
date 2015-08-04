/**
 * Demonstrates how to use Ext.chart.series.Pie3D
 */
//<feature charts>
Ext.define('KitchenSink.view.PieChart3D', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.chart.PolarChart',
        'Ext.chart.series.Pie3D',
        'Ext.chart.interactions.RotatePie3D'
    ],

    controller: 'chart',

    layout: 'fit',
    items: [{
        xtype: 'toolbar',
        docked: 'top',
        cls: 'charttoolbar',
        items: [{
            xtype: 'spacer'
        }, {
            iconCls: 'settings',
            text: 'Theme',
            handler: 'onThemeChange'
        }, {
            iconCls: 'refresh',
            text: 'Refresh',
            handler: function() {
                Ext.getStore('Pie').generateData(9);
            }
        }]
    }, {
        // Bug: When a theme is not specified, the pie disappears on 'rotate', leaving only the shadows.
        // Bug: With or without theme, the shadow doesn't show anymore - except the bug above.
        xtype: 'polar',
        store: 'Pie',
        innerPadding: 20,
        background: 'white',
        interactions: 'rotatePie3d',
        animate: {
            duration: 500,
            easing: 'easeIn'
        },
        series: [{
            type: 'pie3d',
            angleField: 'g1',
            donut: 30,
            distortion: 0.6,
            style: {
                strokeStyle: 'none'
            }
        }]
    }],

    initialize: function() {
        this.callParent();
        Ext.getStore('Pie').generateData(9);
    }
});
//</feature>