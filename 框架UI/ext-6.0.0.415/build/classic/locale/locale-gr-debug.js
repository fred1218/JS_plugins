/**
 * Greek (Old Version) Translations by Vagelis
 * 03-June-2007
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["ÉáíïõÜñéïò", "ÖåâñïõÜñéïò", "ÌÜñôéïò", "�?ðñßëéïò", "ÌÜéïò", "Éïýíéïò", "Éïýëéïò", "�?ýãïõóôïò", "Óåðô�?ìâñéïò", "�?êôþâñéïò", "�?ï�?ìâñéïò", "Äåê�?ìâñéïò"];

        Ext.Date.dayNames = ["ÊõñéáêÞ", "Äåõô�?ñá", "Ôñßôç", "ÔåôÜñôç", "�?�?ìðôç", "�?áñáóêåõÞ", "ÓÜââáôï"];
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '\u20ac',
            // Greek Euro
            dateFormat: 'ì/ç/Å'
        });
    }
});

Ext.define("Ext.locale.gr.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.gr.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} åðéëåãì�?íç(åò) ãñáììÞ(�?ò)"
});

Ext.define("Ext.locale.gr.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Êëåßóôå áõôÞ ôçí êáñô�?ëá"
});

Ext.define("Ext.locale.gr.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "Ç ôéìÞ óôï ðåäßï äåí åßíáé �?ãêõñç"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.gr.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "Öüñôùóç..."
});

Ext.define("Ext.locale.gr.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "ÓÞìåñá",
    minText: "Ç çìåñïìçíßá áõôÞ åßíáé ðñéí ôçí ìéêñüôåñç çìåñïìçíßá",
    maxText: "Ç çìåñïìçíßá áõôÞ åßíáé ìåôÜ ôçí ìåãáëýôåñç çìåñïìçíßá",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: 'Åðüìåíïò ÌÞíáò (Control+Right)',
    prevText: '�?ñïçãïýìåíïò ÌÞíáò (Control+Left)',
    monthYearText: 'Åðéë�?îôå ÌÞíá (Control+Up/Down ãéá ìåôáêßíçóç óôá �?ôç)',
    todayTip: "{0} (Spacebar)",
    format: "ì/ç/Å"
});

Ext.define("Ext.locale.gr.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Óåëßäá",
    afterPageText: "áðü {0}",
    firstText: "�?ñþôç óåëßäá",
    prevText: "�?ñïçãïýìåíç óåëßäá",
    nextText: "Åðüìåíç óåëßäá",
    lastText: "Ôåëåõôáßá óåëßäá",
    refreshText: "�?íáí�?ùóç",
    displayMsg: "ÅìöÜíéóç {0} - {1} áðü {2}",
    emptyMsg: 'Äåí âñ�?èçêáí åããñáö�?ò ãéá åìöÜíéóç'
});

Ext.define("Ext.locale.gr.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "Ôï åëÜ÷éóôï ì�?ãåèïò ãéá áõôü ôï ðåäßï åßíáé {0}",
    maxLengthText: "Ôï ì�?ãéóôï ì�?ãåèïò ãéá áõôü ôï ðåäßï åßíáé {0}",
    blankText: "Ôï ðåäßï áõôü åßíáé õðï÷ñåùôïêü",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.gr.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "Ç åëÜ÷éóôç ôéìÞ ãéá áõôü ôï ðåäßï åßíáé {0}",
    maxText: "Ç ì�?ãéóôç ôéìÞ ãéá áõôü ôï ðåäßï åßíáé {0}",
    nanText: "{0} äåí åßíáé �?ãêõñïò áñéèìüò"
});

Ext.define("Ext.locale.gr.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "�?ðåíåñãïðïéçì�?íï",
    disabledDatesText: "�?ðåíåñãïðïéçì�?íï",
    minText: "Ç çìåñïìçíßá ó' áõôü ôï ðåäßï ðñ�?ðåé íá åßíáé ìåôÜ áðü {0}",
    maxText: "Ç çìåñïìçíßá ó' áõôü ôï ðåäßï ðñ�?ðåé íá åßíáé ðñéí áðü {0}",
    invalidText: "{0} äåí åßíáé �?ãêõñç çìåñïìçíßá - ðñ�?ðåé íá åßíáé ôçò ìïñöÞò {1}",
    format: "ì/ç/Å"
});

Ext.define("Ext.locale.gr.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Öüñôùóç..."
    });
});

Ext.define("Ext.locale.gr.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: '�?õôü ôï ðåäßï ðñ�?ðåé íá åßíáé e-mail address ôçò ìïñöÞò "user@example.com"',
    urlText: '�?õôü ôï ðåäßï ðñ�?ðåé íá åßíáé ìéá äéåýèõíóç URL ôçò ìïñöÞò "http:/' + '/www.example.com"',
    alphaText: '�?õôü ôï ðåäßï ðñ�?ðåé íá ðåñé�?÷åé ãñÜììáôá êáé _',
    alphanumText: '�?õôü ôï ðåäßï ðñ�?ðåé íá ðåñé�?÷åé ãñÜììáôá, áñéèìïýò êáé _'
});

Ext.define("Ext.locale.gr.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "�?ýîïõóá Ôáîéíüìçóç",
    sortDescText: "Öèßíïõóá Ôáîéíüìçóç",
    lockText: "Êëåßäùìá óôÞëçò",
    unlockText: "Îåêëåßäùìá óôÞëçò",
    columnsText: "ÓôÞëåò"
});

Ext.define("Ext.locale.gr.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "¼íïìá",
    valueText: "ÔéìÞ",
    dateFormat: "ì/ç/Å"
});

Ext.define("Ext.locale.gr.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "ÅíôÜîåé",
        cancel: "�?êýñùóç",
        yes: "�?áé",
        no: "¼÷é"
    }    
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.gr.Component", {	
    override: "Ext.Component"
});
