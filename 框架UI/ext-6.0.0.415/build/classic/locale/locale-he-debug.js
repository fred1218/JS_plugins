Ext.define('Ext.locale.container.Viewport', {
    override: 'Ext.container.Viewport',
    requires: [
        'Ext.rtl.*'
    ],

    rtl: true
});
/**
 * Hebrew Translations
 * By spartacus (from forums) 06-12-2007
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["ינו�?ר", "פברו�?ר", "מרץ", "�?פריל", "מ�?י", "יוני", "יולי", "�?וגוסט", "ספטמבר", "�?וקטובר", "נובמבר", "דצמבר"];

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

        Ext.Date.dayNames = ["�?", "ב", "ג", "ד", "ה", "ו", "ש"];

        Ext.Date.getShortDayName = function(day) {
            return Ext.Date.dayNames[day].substring(0, 3);
        };
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: ',',
            decimalSeparator: '.',
            currencySign: '\u20aa',
            // Iraeli Shekel
            dateFormat: 'd/m/Y'
        });
    }
});

Ext.define("Ext.locale.he.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.he.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "שורות נבחרות {0}"
});

Ext.define("Ext.locale.he.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "סגור לשונית"
});

Ext.define("Ext.locale.he.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "הערך בשדה זה שגוי"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.he.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "...טוען"
});

Ext.define("Ext.locale.he.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "היו�?",
    minText: ".ת�?ריך זה חל קוד�? לת�?ריך ההתחלתי שנקבע",
    maxText: ".ת�?ריך זה חל ל�?חר הת�?ריך הסופי שנקבע",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: '(Control+Right) החודש הב�?',
    prevText: '(Control+Left) החודש הקוד�?',
    monthYearText: '(לבחירת שנה Control+Up/Down) בחר חודש',
    todayTip: "מקש רווח) {0})",
    format: "d/m/Y",
    startDay: 0
});

Ext.define("Ext.locale.he.picker.Month", {
    override: "Ext.picker.Month",
    okText: "&#160;�?ישור&#160;",
    cancelText: "ביטול"
});

Ext.define("Ext.locale.he.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "עמוד",
    afterPageText: "{0} מתוך",
    firstText: "עמוד ר�?שון",
    prevText: "עמוד קוד�?",
    nextText: "עמוד הב�?",
    lastText: "עמוד �?חרון",
    refreshText: "רענן",
    displayMsg: "מציג {0} - {1} מתוך {2}",
    emptyMsg: '�?ין מידע להצגה'
});

Ext.define("Ext.locale.he.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "{0} ה�?ורך המינימ�?לי לשדה זה הו�?",
    maxLengthText: "{0} ה�?ורך המירבי לשדה זה הו�?",
    blankText: "שדה זה הכרחי",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.he.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "{0} הערך המינימ�?לי לשדה זה הו�?",
    maxText: "{0} הערך המירבי לשדה זה הו�?",
    nanText: "הו�? ל�? מספר {0}"
});

Ext.define("Ext.locale.he.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "מנוטרל",
    disabledDatesText: "מנוטרל",
    minText: "{0} הת�?ריך בשדה זה חייב להיות ל�?חר",
    maxText: "{0} הת�?ריך בשדה זה חייב להיות לפני",
    invalidText: "{1} הו�? ל�? ת�?ריך תקני - חייב להיות בפורמט {0}",
    format: "m/d/y",
    altFormats: "m/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d"
});

Ext.define("Ext.locale.he.form.field.File", {
    override: "Ext.form.field.File",
    buttonText: "עיון ..."
});

Ext.define("Ext.locale.he.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "...טוען"
    });
});

Ext.define("Ext.locale.he.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: '"user@example.com" שדה זה צריך להיות כתובת דו�?ר �?לקטרוני בפורמט',
    urlText: '"http:/' + '/www.example.com" שדה זה צריך להיות כתובת �?ינטרנט בפורמט',
    alphaText: '_שדה זה יכול להכיל רק �?ותיות ו',
    alphanumText: '_שדה זה יכול להכיל רק �?ותיות, מספרי�? ו'
});

Ext.define("Ext.locale.he.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: ':�?נ�? הקלד �?ת כתובת ה�?ינטרנט עבור הקישור'
}, function() {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: '(Ctrl+B) מודגש',
                text: '.הדגש �?ת הטקסט הנבחר',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: '(Ctrl+I) נטוי',
                text: '.הטה �?ת הטקסט הנבחר',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: '(Ctrl+U) קו תחתי',
                text: '.הוסף קן תחתי עבור הטקסט הנבחר',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: 'הגדל טקסט',
                text: '.הגדל גופן עבור הטקסט הנבחר',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: 'הקטן טקסט',
                text: '.הקטן גופן עבור הטקסט הנבחר',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: 'צבע רקע לטקסט',
                text: '.שנה �?ת צבע הרקע עבור הטקסט הנבחר',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: 'צבע גופן',
                text: '.שנה �?ת צבע הגופן עבור הטקסט הנבחר',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: 'ישור לשמ�?ל',
                text: '.ישר שמ�?לה �?ת הטקסט הנבחר',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: 'ישור למרכז',
                text: '.ישר למרכז �?ת הטקסט הנבחר',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: 'ישור לימין',
                text: '.ישר ימינה �?ת הטקסט הנבחר',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: 'רשימת נקודות',
                text: '.התחל רשימת נקודות',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: 'רשימה ממוספרת',
                text: '.התחל רשימה ממוספרת',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: 'קישור',
                text: '.הפוך �?ת הטקסט הנבחר לקישור',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: 'עריכת קוד מקור',
                text: '.הצג קוד מקור',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});

Ext.define("Ext.locale.he.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "מיין בסדר עולה",
    sortDescText: "מיין בסדר יורד",
    lockText: "נעל עמודה",
    unlockText: "שחרר עמודה",
    columnsText: "עמודות"
});

Ext.define("Ext.locale.he.grid.GroupingFeature", {
    override: "Ext.grid.feature.Grouping",
    emptyGroupText: '(ריק)',
    groupByText: 'הצג בקבוצות לפי שדה זה',
    showGroupsText: 'הצג בקבוצות'
});

Ext.define("Ext.locale.he.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "ש�?",
    valueText: "ערך",
    dateFormat: "m/j/Y"
});

Ext.define("Ext.locale.he.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "�?ישור",
        cancel: "ביטול",
        yes: "כן",
        no: "ל�?"
    }    
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.he.Component", {	
    override: "Ext.Component"
});
