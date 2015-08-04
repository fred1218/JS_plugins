//<feature charts>
Ext.define('KitchenSink.view.ColumnSeries3D', {
    extend: 'Ext.chart.series.Bar',
    requires: ['KitchenSink.view.sprite.Column3D'],
    seriesType: 'columnSeries3d',
    alias: 'series.column3d',
    type: 'column3d',
    config: {
        itemInstancing: null
    }
});
//</feature>