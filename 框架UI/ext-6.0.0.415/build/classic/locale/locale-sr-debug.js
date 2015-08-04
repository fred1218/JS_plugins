/**
 * Serbian Latin Translation
 * by Atila Hajnal (latin, utf8 encoding)
 * sr
 * 14 Sep 2007
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["Januar", "Februar", "Mart", "April", "Мај", "Jun", "Јul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"];

        Ext.Date.dayNames = ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"];
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '\u0414\u0438\u043d\u002e',
            // Serbian Dinar
            dateFormat: 'd.m.Y'
        });
    }
});

Ext.define("Ext.locale.sr.view.View", {
    override: "Ext.view.View",
    emptyText: "Ne postoji ni jedan slog"
});

Ext.define("Ext.locale.sr.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} izabranih redova"
});

Ext.define("Ext.locale.sr.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Zatvori оvu »karticu«"
});

Ext.define("Ext.locale.sr.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "Unešena vrednost nije pravilna"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.sr.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "U�?itavam..."
});

Ext.define("Ext.locale.sr.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Danas",
    minText: "Datum је ispred najmanjeg dozvoljenog datuma",
    maxText: "Datum је nakon najvećeg dozvoljenog datuma",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: 'Sledeći mesec (Control+Desno)',
    prevText: 'Prethodni mesec (Control+Levo)',
    monthYearText: 'Izaberite mesec (Control+Gore/Dole za izbor godine)',
    todayTip: "{0} (Razmaknica)",
    format: "d.m.y",
    startDay: 1
});

Ext.define("Ext.locale.sr.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Strana",
    afterPageText: "od {0}",
    firstText: "Prva strana",
    prevText: "Prethodna strana",
    nextText: "Sledeća strana",
    lastText: "Poslednja strana",
    refreshText: "Osveži",
    displayMsg: "Prikazana {0} - {1} od {2}",
    emptyMsg: 'Nemam šta prikazati'
});

Ext.define("Ext.locale.sr.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "Minimalna dužina ovog polja је {0}",
    maxLengthText: "Maksimalna dužina ovog polja је {0}",
    blankText: "Polje је obavezno",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.sr.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "Minimalna vrednost u polju је {0}",
    maxText: "Maksimalna vrednost u polju је {0}",
    nanText: "{0} nije pravilan broj"
});

Ext.define("Ext.locale.sr.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "Pasivno",
    disabledDatesText: "Pasivno",
    minText: "Datum u ovom polju mora biti nakon {0}",
    maxText: "Datum u ovom polju mora biti pre {0}",
    invalidText: "{0} nije pravilan datum - zahtevani oblik je {1}",
    format: "d.m.y",
    altFormats: "d.m.y|d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
});

Ext.define("Ext.locale.sr.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "U�?itavam..."
    });
});

Ext.define("Ext.locale.sr.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'Ovo polje prihavata e-mail adresu isklju�?ivo u obliku "korisnik@domen.com"',
    urlText: 'Ovo polje prihavata URL adresu isklju�?ivo u obliku "http:/' + '/www.domen.com"',
    alphaText: 'Ovo polje može sadržati isklju�?ivo slova i znak _',
    alphanumText: 'Ovo polje može sadržati �?амо slova, brojeve i znak _'
});

Ext.define("Ext.locale.sr.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Rastući redosled",
    sortDescText: "Opadajući redosled",
    lockText: "Zaklju�?aj kolonu",
    unlockText: "Otklju�?aj kolonu",
    columnsText: "Kolone"
});

Ext.define("Ext.locale.sr.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "Naziv",
    valueText: "Vrednost",
    dateFormat: "d.m.Y"
});

Ext.define("Ext.locale.sr.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "U redu",
        cancel: "Odustani",
        yes: "Da",
        no: "Ne"
    }    
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.sr.Component", {	
    override: "Ext.Component"
});
