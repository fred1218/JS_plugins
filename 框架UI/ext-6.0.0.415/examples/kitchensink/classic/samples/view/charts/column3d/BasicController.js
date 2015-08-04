Ext.define('KitchenSink.view.charts.column3d.BasicController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.column-basic-3d',

    onDownload: function () {
        var chart = this.lookupReference('chart');

        if (Ext.os.is.Desktop) {
            chart.download({
                filename: 'Industry size in major economies for 2011'
            });
        } else {
            chart.preview();
        }
    },

    onSeriesLabelRender: function (v) {
        return Ext.util.Format.number(v / 1000, '0,000');
    },

    onTooltipRender: function (tooltip, record, item) {
        tooltip.setHtml(record.get('country') + ': ' +
            Ext.util.Format.number(record.get('ind'), '0,000 (millions of USD)'));
    }

});