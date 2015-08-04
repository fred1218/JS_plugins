/**
 * Croatian translation
 * By Ylodi (utf8 encoding)
 * 8 May 2007
 *
 * By Stjepan at gmail dot com (utf8 encoding)
 * 17 May 2008
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["SijeÄ?anj", "VeljaÄ?a", "OÅ¾ujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"];

        Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.monthNames[month].substring(0, 3);
        };

        Ext.Date.monthNumbers = {
            Jan: 0,
            Feb: 1,
            Mar: 2,
            Apr: 3,
            May: 4,
            Jun: 5,
            Jul: 6,
            Aug: 7,
            Sep: 8,
            Oct: 9,
            Nov: 10,
            Dec: 11
        };

        Ext.Date.getMonthNumber = function(name) {
            return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
        };

        Ext.Date.dayNames = ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "ÄŒetvrtak", "Petak", "Subota"];

        Ext.Date.getShortDayName = function(day) {
            return Ext.Date.dayNames[day].substring(0, 3);
        };
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: 'kn',
            // Croation Kuna
            dateFormat: 'd.m.Y'
        });
    }
});

Ext.define("Ext.locale.hr.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.hr.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} odabranih redova"
});

Ext.define("Ext.locale.hr.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Zatvori ovaj tab"
});

Ext.define("Ext.locale.hr.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "Unesena vrijednost u ovom polju je neispravna"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.hr.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "UÄ?itavanje..."
});

Ext.define("Ext.locale.hr.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Danas",
    minText: "Taj datum je prije najmanjeg datuma",
    maxText: "Taj datum je poslije najveÄ‡eg datuma",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: 'SlijedeÄ‡i mjesec (Control+Desno)',
    prevText: 'Prethodni mjesec (Control+Lijevo)',
    monthYearText: 'Odaberite mjesec (Control+Gore/Dolje za promjenu godine)',
    todayTip: "{0} (Razmaknica)",
    format: "d.m.y",
    startDay: 1
});

Ext.define("Ext.locale.hr.picker.Month", {
    override: "Ext.picker.Month",
    okText: "&#160;U redu&#160;",
    cancelText: "Odustani"
});

Ext.define("Ext.locale.hr.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Stranica",
    afterPageText: "od {0}",
    firstText: "Prva stranica",
    prevText: "Prethodna stranica",
    nextText: "SlijedeÄ‡a stranica",
    lastText: "Posljednja stranica",
    refreshText: "Obnovi",
    displayMsg: "Prikazujem {0} - {1} od {2}",
    emptyMsg: 'Nema podataka za prikaz'
});

Ext.define("Ext.locale.hr.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "Minimalna duÅ¾ina za ovo polje je {0}",
    maxLengthText: "Maksimalna duÅ¾ina za ovo polje je {0}",
    blankText: "Ovo polje je obavezno",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.hr.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "Minimalna vrijednost za ovo polje je {0}",
    maxText: "Maksimalna vrijednost za ovo polje je {0}",
    nanText: "{0} nije ispravan broj"
});

Ext.define("Ext.locale.hr.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "Neaktivno",
    disabledDatesText: "Neaktivno",
    minText: "Datum u ovom polje mora biti poslije {0}",
    maxText: "Datum u ovom polju mora biti prije {0}",
    invalidText: "{0} nije ispravan datum - mora biti u obliku {1}",
    format: "d.m.y"
});

Ext.define("Ext.locale.hr.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "UÄ?itavanje..."
    });
});

Ext.define("Ext.locale.hr.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'Ovdje moÅ¾ete unijeti samo e-mail adresu u obliku "korisnik@domena.com"',
    urlText: 'Ovdje moÅ¾ete unijeti samo URL u obliku "http:/' + '/www.domena.com"',
    alphaText: 'Ovo polje moÅ¾e sadrÅ¾avati samo slova i znak _',
    alphanumText: 'Ovo polje moÅ¾e sadrÅ¾avati samo slova, brojeve i znak _'
});

Ext.define("Ext.locale.hr.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: 'Unesite URL za link:'
}, function() {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: 'Podebljano (Ctrl+B)',
                text: 'Podebljavanje oznaÄ?enog teksta.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: 'Kurziv (Ctrl+I)',
                text: 'Pretvaranje oznaÄ?enog tekst u kurziv',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: 'Podcrtano (Ctrl+U)',
                text: 'Potcrtavanje oznaÄ?enog teksta',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: 'PoveÄ‡anje teksta',
                text: 'PoveÄ‡avanje veliÄ?ine fonta.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: 'Smanjivanje teksta',
                text: 'Smanjivanje veliÄ?ine fonta.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: 'Boja oznaÄ?enog teksta',
                text: 'Promjena boje pozadine oznaÄ?enog teksta.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: 'Boja fonta',
                text: 'Promjena boje oznaÄ?enog teksta.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: 'Lijevo poravnanje teksta',
                text: 'Poravnanje teksta na lijevu stranu.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: 'Centriranje teksta',
                text: 'Centriranje teksta u ureÄ‘ivaÄ?u teksta.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: 'Desno poravnanje teksta',
                text: 'Poravnanje teksta na desnu stranu.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: 'OznaÄ?ena lista',
                text: 'ZapoÄ?injanje oznaÄ?ene liste.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: 'Numerirana lista',
                text: 'ZapoÄ?injanje numerirane liste.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: 'Hiperveza',
                text: 'Stvaranje hiperveze od oznaÄ?enog teksta.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: 'UreÄ‘ivanje izvornog koda',
                text: 'Prebacivanje u naÄ?in rada za ureÄ‘ivanje izvornog koda.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});

Ext.define("Ext.locale.hr.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Sortiraj rastuÄ‡im redoslijedom",
    sortDescText: "Sortiraj padajuÄ‡im redoslijedom",
    lockText: "ZakljuÄ?aj stupac",
    unlockText: "OtkljuÄ?aj stupac",
    columnsText: "Stupci"
});

Ext.define("Ext.locale.hr.grid.GroupingFeature", {
    override: "Ext.grid.feature.Grouping",
    emptyGroupText: '(NiÅ¡ta)',
    groupByText: 'Grupiranje po ovom polju',
    showGroupsText: 'Prikaz u grupama'
});

Ext.define("Ext.locale.hr.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "Naziv",
    valueText: "Vrijednost",
    dateFormat: "d.m.Y"
});

Ext.define("Ext.locale.hr.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "U redu",
        cancel: "Odustani",
        yes: "Da",
        no: "Ne"
    }    
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.hr.Component", {	
    override: "Ext.Component"
});
