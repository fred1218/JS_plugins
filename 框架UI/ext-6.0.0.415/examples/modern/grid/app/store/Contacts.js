Ext.define('Grid.store.Contacts', {
    extend: 'Ext.data.Store',
    alias: 'store.Contacts',

    fields: [
        {name: 'id'},
        {name: 'guid', type: 'string'},
        {name: 'picture', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'gender', type: 'string'},
        {name: 'age', type: 'integer'},
        {name: 'company', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'address', type: 'string'},
        {name: 'about', type: 'string'},
        {name: 'registered', type: 'date'}
    ],

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'contacts.json',
        reader: {
            rootProperty: 'results'
        }
    }
});