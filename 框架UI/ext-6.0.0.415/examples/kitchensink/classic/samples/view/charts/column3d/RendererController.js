Ext.define('KitchenSink.view.charts.column3d.RendererController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.column-renderer-3d',

    colors: [
        '#8ca640',
        '#974144',
        '#4091ba',
        '#8e658e',
        '#3b8d8b',
        '#b86465',
        '#d2af69',
        '#6e8852',
        '#3dcc7e',
        '#a6bed1',
        '#cbaa4b',
        '#998baa'
    ],

    onColumnRender: function (sprite, config, data, index) {
        return {
            fillStyle: this.colors[index],
            strokeStyle: index % 2 ? 'none' : 'black',
            opacity: index % 2 ? 1 : 0.5
        };
    },

    onTooltipRender: function (tooltip, record, item) {
        tooltip.setHtml(record.get('month') + ': ' + record.get('data3') + '%');
    }

});