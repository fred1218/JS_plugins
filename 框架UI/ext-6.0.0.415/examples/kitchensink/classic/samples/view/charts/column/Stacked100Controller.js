Ext.define('KitchenSink.view.charts.column.Stacked100Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.column-stacked-100',

    yearTotal: {},

    onPreview: function() {
        var chart = this.lookupReference('chart');

        chart.preview();
    },

    getYearTotal: function (record) {
        var map = this.yearTotal,
            year = record.get('year'),
            total = map[year];

        if (!total) {
            map[year] = total =
                record.get('to') +
                record.get('gm') +
                record.get('vw') +
                record.get('hy') +
                record.get('fo');
        }

        return total;
    },

    onBarTipRender: function (tooltip, record, item) {
        var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
            manufacturer = item.series.getTitle()[fieldIndex],
            percent = record.get(item.field) / this.getYearTotal(record) * 100;

        tooltip.setHtml(manufacturer + ' in ' + record.get('year') + ': ' +
            percent.toFixed(1) + '%');
    },

    onGridMonthRender: function (value) {
        return value;
    },

    onGridValueRender: function (value) {
        return value + '%';
    }

});