/**
 * Demonstrates how to use Ext.chart.series.Pie
 */
Ext.define('KitchenSink.view.PieChart', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.chart.PolarChart',
        'Ext.chart.series.Pie',
        'Ext.chart.interactions.Rotate'
    ],

    controller: {
        type: 'chart'
    },

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
                Ext.getStore('Pie').generateData(5);
            }
        }, {
            text: 'Reset',
            handler: function() {
                //ensure the query gets the chart for this kitchensink example
                var chart = this.up().up().down('polar');

                //reset the rotation
                Ext.ComponentQuery.query('series', chart)[0].setRotation(0);

                //reset the legend
                chart.resetLegendStore();
            }
        }]
    }, {
        xtype: 'polar',
        store: 'Pie',
        interactions: ['rotate', 'itemhighlight'],
        legend: {
            position: 'right',
            verticalWidth: 100
        },
        innerPadding: 45,
        series: [{
            type: 'pie',
            xField: 'g1',
            label: {
                field: 'name',
                display: 'rotate'
            },
            donut: 30,
            highlightCfg: {
                margin: 20
            },
            style: {
                stroke: 'white',
                miterLimit: 10,
                lineCap: 'miter',
                lineWidth: 2
            }
        }],
        axes: []
    }],

    initialize: function() {
        this.callParent();
        Ext.getStore('Pie').generateData(5);
    }
});