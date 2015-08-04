Ext.define('KitchenSink.view.charts.pie.BasicController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.pie-basic',

    onPreview: function () {
        var chart = this.lookupReference('chart');
        chart.preview();
    },

    onDataRender: function (v) {
        return v + '%';
    }

});