/**
 * Demonstrates how to use Ext.chart.ColumnChart3D
 */
Ext.define('KitchenSink.view.ColumnChart3D', {
    extend: 'Ext.Panel',
    requires: ['Ext.chart.CartesianChart', 'Ext.chart.interactions.PanZoom',
        'KitchenSink.view.ColumnSeries3D', 'Ext.chart.axis.Numeric', 'Ext.chart.axis.Category'
    ],

    controller: {
        type: 'chart',
        defaultVisibleRange: {
            bottom: [0, 0.2]
        }
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
                Ext.getStore('OrderItems').generateData(25);
            }
        }, {
            text: 'Reset',
            handler: 'onReset'
        }]
    }, {
        xtype: 'cartesian',
        store: 'OrderItems',
        background: '#EEE',
        interactions: [{
            type: 'panzoom',
            axes: {
                "left": {
                    allowPan: false,
                    allowZoom: false
                },
                "bottom": {
                    allowPan: true,
                    allowZoom: true
                }
            }
        }],
        series: [{
            type: 'column3d',
            xField: 'name',
            yField: 'g1',
            style: {
                maxBarWidth: 50,
                lineJoin: 'miter',
                miterLimit: 3
            }
        }],
        axes: [{
            type: 'numeric',
            position: 'left',
            fields: ['g1', 'g2', 'g3', 'g4'],
            grid: true,
            label: {
                rotate: {
                    degrees: -30
                }
            }
        }, {
            type: 'category',
            position: 'bottom',
            fields: 'name',
            visibleRange: [0, 0.2]
        }]
    }],

    initialize: function() {
        this.callParent();
        Ext.getStore('OrderItems').generateData(25);
        var toolbar = Ext.ComponentQuery.query('toolbar', this)[0],
            interaction = Ext.ComponentQuery.query('interaction', this)[0];
        if (toolbar && interaction && !interaction.isMultiTouch()) {
            toolbar.add(interaction.getModeToggleButton());
        }
    }
});