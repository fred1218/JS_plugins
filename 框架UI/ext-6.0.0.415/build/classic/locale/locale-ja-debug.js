/**
 * Japanese translation
 * By tyama
 * 04-08-2007, 05:49 AM
 *
 * update based on English Translations by Condor (8 Aug 2008)
 * By sakuro (30 Aug 2008)
 */
Ext.onReady(function() {
    var parseCodes;

    if (Ext.Date) {
        Ext.Date.monthNames = ['1æœˆ', '2æœˆ', '3æœˆ', '4æœˆ', '5æœˆ', '6æœˆ', '7æœˆ', '8æœˆ', '9æœˆ', '10æœˆ', '11æœˆ', '12æœˆ'];

        Ext.Date.getShortMonthName = function(month) {
            return "" + (month + 1);
        };

        Ext.Date.monthNumbers = {
            "1": 0,
            "2": 1,
            "3": 2,
            "4": 3,
            "5": 4,
            "6": 5,
            "7": 6,
            "8": 7,
            "9": 8,
            "10": 9,
            "11": 10,
            "12": 11
        };

        Ext.Date.getMonthNumber = function(name) {
            return Ext.Date.monthNumbers[name.substring(0, name.length - 1)];
            // or simply parseInt(name.substring(0, name.length - 1)) - 1
        };

        Ext.Date.dayNames = ["æ—¥æ›œæ—¥", "æœˆæ›œæ—¥", "ç?«æ›œæ—¥", "æ°´æ›œæ—¥", "æœ¨æ›œæ—¥", "é‡‘æ›œæ—¥", "åœŸæ›œæ—¥"];

        Ext.Date.getShortDayName = function(day) {
            return Ext.Date.dayNames[day].substring(0, 1); // just remove "æ›œæ—¥" suffix
        };

        Ext.Date.formatCodes.a = "(this.getHours() < 12 ? 'å?ˆå‰?' : 'å?ˆå¾Œ')";
        Ext.Date.formatCodes.A = "(this.getHours() < 12 ? 'å?ˆå‰?' : 'å?ˆå¾Œ')"; // no case difference
        
        parseCodes = {
            g: 1,
            c: "if (/(å?ˆå‰?)/i.test(results[{0}])) {\n"
                + "if (!h || h == 12) { h = 0; }\n"
                + "} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
            s: "(å?ˆå‰?|å?ˆå¾Œ)",
            calcAtEnd: true
        };

        Ext.Date.parseCodes.a = Ext.Date.parseCodes.A = parseCodes;
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: ',',
            decimalSeparator: '.',
            currencySign: '\u00a5',
            // Japanese Yen
            dateFormat: 'Y/m/d'
        });
    }
});

Ext.define("Ext.locale.ja.LoadMask", {
    override: "Ext.LoadMask",
    msg: "èª­ã?¿è¾¼ã?¿ä¸­..."
});

Ext.define("Ext.locale.ja.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.ja.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} è¡Œé?¸æŠž"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.ja.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "èª­ã?¿è¾¼ã?¿ä¸­..."
});

Ext.define("Ext.locale.ja.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "ä»Šæ—¥",
    minText: "é?¸æŠžã?—ã?Ÿæ—¥ä»˜ã?¯æœ€å°?å€¤ä»¥ä¸‹ã?§ã?™ã€‚",
    maxText: "é?¸æŠžã?—ã?Ÿæ—¥ä»˜ã?¯æœ€å¤§å€¤ä»¥ä¸Šã?§ã?™ã€‚",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: 'æ¬¡æœˆã?¸ (ã‚³ãƒ³ãƒˆãƒ­ãƒ¼ãƒ«+å?³)',
    prevText: 'å‰?æœˆã?¸ (ã‚³ãƒ³ãƒˆãƒ­ãƒ¼ãƒ«+å·¦)',
    monthYearText: 'æœˆé?¸æŠž (ã‚³ãƒ³ãƒˆãƒ­ãƒ¼ãƒ«+ä¸Š/ä¸‹ã?§å¹´ç§»å‹•)',
    todayTip: "{0} (ã‚¹ãƒšãƒ¼ã‚¹ã‚­ãƒ¼)",
    format: "Y/m/d",
    startDay: 0,
    ariaTitle: '{0}',
    ariaTitleDateFormat: 'Y\u5e74m\u6708d\u65e5',
    longDayFormat: 'Y\u5e74m\u6708d\u65e5',
    monthYearFormat: 'Y\u5e74m\u6708'
});

Ext.define("Ext.locale.ja.picker.Month", {
    override: "Ext.picker.Month",
    okText: "&#160;OK&#160;",
    cancelText: "ã‚­ãƒ£ãƒ³ã‚»ãƒ«"
});

Ext.define("Ext.locale.ja.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "ãƒšãƒ¼ã‚¸",
    afterPageText: "/ {0}",
    firstText: "æœ€åˆ?ã?®ãƒšãƒ¼ã‚¸",
    prevText: "å‰?ã?®ãƒšãƒ¼ã‚¸",
    nextText: "æ¬¡ã?®ãƒšãƒ¼ã‚¸",
    lastText: "æœ€å¾Œã?®ãƒšãƒ¼ã‚¸",
    refreshText: "æ›´æ–°",
    displayMsg: "{2} ä»¶ä¸­ {0} - {1} ã‚’è¡¨ç¤º",
    emptyMsg: 'è¡¨ç¤ºã?™ã‚‹ãƒ‡ãƒ¼ã‚¿ã?Œã?‚ã‚Šã?¾ã?›ã‚“ã€‚'
});

Ext.define("Ext.locale.ja.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "ãƒ•ã‚£ãƒ¼ãƒ«ãƒ‰ã?®å€¤ã?Œä¸?æ­£ã?§ã?™ã€‚"
});

Ext.define("Ext.locale.ja.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "ã?“ã?®ãƒ•ã‚£ãƒ¼ãƒ«ãƒ‰ã?®æœ€å°?å€¤ã?¯ {0} ã?§ã?™ã€‚",
    maxLengthText: "ã?“ã?®ãƒ•ã‚£ãƒ¼ãƒ«ãƒ‰ã?®æœ€å¤§å€¤ã?¯ {0} ã?§ã?™ã€‚",
    blankText: "å¿…é ˆé …ç›®ã?§ã?™ã€‚",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.ja.form.field.File", {
    override: "Ext.form.field.File",
    buttonText: "å?‚ç…§..."
});

Ext.define("Ext.locale.ja.form.field.Number", {
    override: "Ext.form.field.Number",
    decimalPrecision: 2,
    minText: "ã?“ã?®ãƒ•ã‚£ãƒ¼ãƒ«ãƒ‰ã?®æœ€å°?å€¤ã?¯ {0} ã?§ã?™ã€‚",
    maxText: "ã?“ã?®ãƒ•ã‚£ãƒ¼ãƒ«ãƒ‰ã?®æœ€å¤§å€¤ã?¯ {0} ã?§ã?™ã€‚",
    nanText: "{0} ã?¯æ•°å€¤ã?§ã?¯ã?‚ã‚Šã?¾ã?›ã‚“ã€‚",
    negativeText: "è² ã?®å€¤ã?¯ç„¡åŠ¹ã?§ã?™ã€‚"
});

Ext.define("Ext.locale.ja.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "ç„¡åŠ¹",
    disabledDatesText: "ç„¡åŠ¹",
    minText: "ã?“ã?®ãƒ•ã‚£ãƒ¼ãƒ«ãƒ‰ã?®æ—¥ä»˜ã?¯ã€? {0} ä»¥é™?ã?®æ—¥ä»˜ã?«è¨­å®šã?—ã?¦ã??ã? ã?•ã?„ã€‚",
    maxText: "ã?“ã?®ãƒ•ã‚£ãƒ¼ãƒ«ãƒ‰ã?®æ—¥ä»˜ã?¯ã€? {0} ä»¥å‰?ã?®æ—¥ä»˜ã?«è¨­å®šã?—ã?¦ã??ã? ã?•ã?„ã€‚",
    invalidText: "{0} ã?¯é–“é?•ã?£ã?Ÿæ—¥ä»˜å…¥åŠ›ã?§ã?™ã€‚ - å…¥åŠ›å½¢å¼?ã?¯ã€Œ{1}ã€?ã?§ã?™ã€‚",
    format: "Y/m/d",
    altFormats: "y/m/d|m/d/y|m/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d"
});

Ext.define("Ext.locale.ja.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "èª­ã?¿è¾¼ã?¿ä¸­..."
    });
});

Ext.define("Ext.locale.ja.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'ãƒ¡ãƒ¼ãƒ«ã‚¢ãƒ‰ãƒ¬ã‚¹ã‚’"user@example.com"ã?®å½¢å¼?ã?§å…¥åŠ›ã?—ã?¦ã??ã? ã?•ã?„ã€‚',
    urlText: 'URLã‚’"http:/' + '/www.example.com"ã?®å½¢å¼?ã?§å…¥åŠ›ã?—ã?¦ã??ã? ã?•ã?„ã€‚',
    alphaText: 'å?Šè§’è‹±å­—ã?¨"_"ã?®ã?¿ã?§ã?™ã€‚',
    alphanumText: 'å?Šè§’è‹±æ•°ã?¨"_"ã?®ã?¿ã?§ã?™ã€‚'
});

Ext.define("Ext.locale.ja.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: 'ãƒªãƒ³ã‚¯ã?®URLã‚’å…¥åŠ›ã?—ã?¦ã??ã? ã?•ã?„:'
}, function() {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: 'å¤ªå­— (ã‚³ãƒ³ãƒˆãƒ­ãƒ¼ãƒ«+B)',
                text: 'é?¸æŠžãƒ†ã‚­ã‚¹ãƒˆã‚’å¤ªå­—ã?«ã?—ã?¾ã?™ã€‚',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: 'æ–œä½“ (ã‚³ãƒ³ãƒˆãƒ­ãƒ¼ãƒ«+I)',
                text: 'é?¸æŠžãƒ†ã‚­ã‚¹ãƒˆã‚’æ–œä½“ã?«ã?—ã?¾ã?™ã€‚',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: 'ä¸‹ç·š (ã‚³ãƒ³ãƒˆãƒ­ãƒ¼ãƒ«+U)',
                text: 'é?¸æŠžãƒ†ã‚­ã‚¹ãƒˆã?«ä¸‹ç·šã‚’å¼•ã??ã?¾ã?™ã€‚',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: 'æ–‡å­—ã‚’å¤§ã??ã??',
                text: 'ãƒ•ã‚©ãƒ³ãƒˆã‚µã‚¤ã‚ºã‚’å¤§ã??ã??ã?—ã?¾ã?™ã€‚',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: 'æ–‡å­—ã‚’å°?ã?•ã??',
                text: 'ãƒ•ã‚©ãƒ³ãƒˆã‚µã‚¤ã‚ºã‚’å°?ã?•ã??ã?—ã?¾ã?™ã€‚',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: 'æ–‡å­—ã?®ãƒ?ã‚¤ãƒ©ã‚¤ãƒˆ',
                text: 'é?¸æŠžãƒ†ã‚­ã‚¹ãƒˆã?®èƒŒæ™¯è‰²ã‚’å¤‰æ›´ã?—ã?¾ã?™ã€‚',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: 'æ–‡å­—ã?®è‰²',
                text: 'é?¸æŠžãƒ†ã‚­ã‚¹ãƒˆã?®è‰²ã‚’å¤‰æ›´ã?—ã?¾ã?™ã€‚',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: 'å·¦æ?ƒã?ˆ',
                text: 'ãƒ†ã‚­ã‚¹ãƒˆã‚’å·¦æ?ƒã?ˆã?«ã?—ã?¾ã?™ã€‚',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: 'ä¸­å¤®æ?ƒã?ˆ',
                text: 'ãƒ†ã‚­ã‚¹ãƒˆã‚’ä¸­å¤®æ?ƒã?ˆã?«ã?—ã?¾ã?™ã€‚',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: 'å?³æ?ƒã?ˆ',
                text: 'ãƒ†ã‚­ã‚¹ãƒˆã‚’å?³æ?ƒã?ˆã?«ã?—ã?¾ã?™ã€‚',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: 'ç•ªå?·ã?ªã?—ç®‡æ?¡æ›¸ã??',
                text: 'ç•ªå?·ã?ªã?—ç®‡æ?¡æ›¸ã??ã‚’é–‹å§‹ã?—ã?¾ã?™ã€‚',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: 'ç•ªå?·ä»˜ã??ç®‡æ?¡æ›¸ã??',
                text: 'ç•ªå?·ä»˜ã??ç®‡æ?¡æ›¸ã??ã‚’é–‹å§‹ã?—ã?¾ã?™ã€‚',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: 'ãƒ?ã‚¤ãƒ‘ãƒ¼ãƒªãƒ³ã‚¯',
                text: 'é?¸æŠžãƒ†ã‚­ã‚¹ãƒˆã‚’ãƒ?ã‚¤ãƒ‘ãƒ¼ãƒªãƒ³ã‚¯ã?«ã?—ã?¾ã?™ã€‚',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: 'ã‚½ãƒ¼ã‚¹ç·¨é›†',
                text: 'ã‚½ãƒ¼ã‚¹ç·¨é›†ãƒ¢ãƒ¼ãƒ‰ã?«åˆ‡ã‚Šæ›¿ã?ˆã?¾ã?™ã€‚',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});

Ext.define("Ext.locale.ja.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "æ˜‡é †",
    sortDescText: "é™?é †",
    columnsText: "ã‚«ãƒ©ãƒ "
});

Ext.define("Ext.locale.ja.grid.column.Date", {
    override: "Ext.grid.column.Date",
    format: "Y/m/d"
});

Ext.define("Ext.locale.ja.grid.GroupingFeature", {
    override: "Ext.grid.feature.Grouping",
    emptyGroupText: '(ã?ªã?—)',
    groupByText: 'ã?“ã?®ã‚«ãƒ©ãƒ ã?§ã‚°ãƒ«ãƒ¼ãƒ”ãƒ³ã‚°',
    showGroupsText: 'ã‚°ãƒ«ãƒ¼ãƒ”ãƒ³ã‚°'
});

Ext.define("Ext.locale.ja.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "å??ç§°",
    valueText: "å€¤",
    dateFormat: "Y/m/d"
});

Ext.define("Ext.locale.ja.form.field.Time", {
    override: "Ext.form.field.Time",
    minText: "ã?“ã?®ãƒ•ã‚£ãƒ¼ãƒ«ãƒ‰ã?®æ™‚åˆ»ã?¯ã€? {0} ä»¥é™?ã?®æ™‚åˆ»ã?«è¨­å®šã?—ã?¦ã??ã? ã?•ã?„ã€‚",
    maxText: "ã?“ã?®ãƒ•ã‚£ãƒ¼ãƒ«ãƒ‰ã?®æ™‚åˆ»ã?¯ã€? {0} ä»¥å‰?ã?®æ™‚åˆ»ã?«è¨­å®šã?—ã?¦ã??ã? ã?•ã?„ã€‚",
    invalidText: "{0} ã?¯é–“é?•ã?£ã?Ÿæ™‚åˆ»å…¥åŠ›ã?§ã?™ã€‚",
    format: "g:i A",
    altFormats: "g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H"
});

Ext.define("Ext.locale.ja.form.CheckboxGroup", {
    override: "Ext.form.CheckboxGroup",
    blankText: "ã?“ã?®ã‚°ãƒ«ãƒ¼ãƒ—ã?‹ã‚‰æœ€ä½Žï¼‘ã?¤ã?®ã‚¢ã‚¤ãƒ†ãƒ ã‚’é?¸æŠžã?—ã?ªã?‘ã‚Œã?°ã?ªã‚Šã?¾ã?›ã‚“ã€‚"
});

Ext.define("Ext.locale.ja.form.RadioGroup", {
    override: "Ext.form.RadioGroup",
    blankText: "ã?“ã?®ã‚°ãƒ«ãƒ¼ãƒ—ã?‹ã‚‰ï¼‘ã?¤ã?®ã‚¢ã‚¤ãƒ†ãƒ ã‚’é?¸æŠžã?—ã?ªã?‘ã‚Œã?°ã?ªã‚Šã?¾ã?›ã‚“ã€‚"
});

Ext.define("Ext.locale.ja.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "OK",
        cancel: "ã‚­ãƒ£ãƒ³ã‚»ãƒ«",
        yes: "ã?¯ã?„",
        no: "ã?„ã?„ã?ˆ"
    }    
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.ja.Component", {	
    override: "Ext.Component"
});
