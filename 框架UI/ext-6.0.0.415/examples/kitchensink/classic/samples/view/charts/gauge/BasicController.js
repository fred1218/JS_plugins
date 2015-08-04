Ext.define('KitchenSink.view.charts.gauge.BasicController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.gauge-basic',

    onRefresh: function () {
        var r = Math.random;

        if (this.store) {
            this.store.setData([{
                mph: r() * 100,
                fuel: r() * 100,
                temp: r() * 250,
                rpm: r() * 8000
            }]);
        }
    },

    onAfterRender: function () {
        var me = this,
            gauges = me.getView().query('polar'),
            i, gauge;

        me.store = Ext.create('Ext.data.JsonStore', {
            fields: ['mph', 'fuel', 'temp', 'rpm' ],
            data: [
                { mph: 65, fuel: 50, temp: 150, rpm: 6000 }
            ]
        });

        for (i = 0; i < gauges.length; i++) {
            gauge = gauges[i];
            gauge.setStore(me.store);
        }
    }

});