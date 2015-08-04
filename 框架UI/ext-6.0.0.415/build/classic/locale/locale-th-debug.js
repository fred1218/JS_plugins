/**
 * List compiled by KillerNay on the extjs.com forums.
 * Thank you KillerNay!
 *
 * Thailand Translations
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["ร�?ย�?รร’โฌร�?", "ย�?รร�?ลธร’ร“ลธร‘ยนลพรฌ", "ร�?ร•ยนร’โฌร�?", "ร ร�?รร’รยน", "ลธรรร€ร’โฌร�?", "ร�?ร�?ยถรยนร’รยน", "ย�?รย�?ย�?ร’โฌร�?", "รร�?ยงรร’โฌร�?", "ย�?ร‘ยนรร’รยน", "ยตรร…ร’โฌร�?", "ลธรรล�?ร�?ย�?ร’รยน", "ลพร‘ยนรร’โฌร�?"];

        Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.monthNames[month].substring(0, 3);
        };

        Ext.Date.monthNumbers = {
            "ร�?โฌ": 0,
            "ย�?ลธ": 1,
            "ร�?ร•โฌ": 2,
            "ร ร�?ร": 3,
            "ลธโฌ": 4,
            "ร�?ร�?ร": 5,
            "ย�?โฌ": 6,
            "รโฌ": 7,
            "ย�?ร": 8,
            "ยตโฌ": 9,
            "ลธร": 10,
            "ลพโฌ": 11
        };

        Ext.Date.getMonthNumber = function(name) {
            return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
        };

        Ext.Date.dayNames = ["ร�?ร’ยทร�?ยตรรฌ", "ล�?ร‘ยนยทรรฌ", "ร�?ร‘ยงโฌร’ร", "ลธรร—ลพ", "ลธรรร‘รยบล�?ร•", "รรย�?รรฌ", "ร รร’รรฌ"];

        Ext.Date.getShortDayName = function(day) {
            return Ext.Date.dayNames[day].substring(0, 3);
        };
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '\u0e3f',
            // Thai Baht
            dateFormat: 'm/d/Y'
        });
    }
});

Ext.define("Ext.locale.th.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.th.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} ร ร…ร—ร�?ย�?ร�?ร…รฉรยทร‘รฉยงรร�?ล�?ร�?ยถร"
});

Ext.define("Ext.locale.th.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "ยปร�?ล�?ร�?ยทรงยบยนร•รฉ"
});

Ext.define("Ext.locale.th.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "โฌรจร’ยขร�?ยงยชรจร�?ยงยนร•รฉรคร�?รจยถรย�?ยตรฉร�?ยง"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.th.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "ย�?ร“ร…ร‘ยงรขรร…ล�?..."
});

Ext.define("Ext.locale.th.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "รร‘ยนยนร•รฉ",
    minText: "This date is before the minimum date",
    maxText: "This date is after the maximum date",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: 'ร ล�?ร—ร�?ยนยถร‘ล�?รคยป (Control+Right)',
    prevText: 'ร ล�?ร—ร�?ยนย�?รจร�?ยนรยนรฉร’ (Control+Left)',
    monthYearText: 'ร ร…ร—ร�?ย�?ร ล�?ร—ร�?ยน (Control+Up/Down to move years)',
    todayTip: "{0} (Spacebar)",
    format: "m/d/y",
    startDay: 0
});

Ext.define("Ext.locale.th.picker.Month", {
    override: "Ext.picker.Month",
    okText: "&#160;ยตย�?ร…ยง&#160;",
    cancelText: "รย�?ร ร…ร�?ย�?"
});

Ext.define("Ext.locale.th.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "รยนรฉร’",
    afterPageText: "of {0}",
    firstText: "รยนรฉร’ร�?รย�?",
    prevText: "ย�?รจร�?ยนรยนรฉร’",
    nextText: "ยถร‘ล�?รคยป",
    lastText: "รยนรฉร’รรล�?ยทรฉร’ร",
    refreshText: "รร•ร ยฟรยช",
    displayMsg: "ย�?ร“ร…ร‘ยงร�?รล�?ยง {0} - {1} ล�?ร’ย�? {2}",
    emptyMsg: 'รคร�?รจร�?ร•ยขรฉร�?ร�?รร…ร�?รล�?ยง'
});

Ext.define("Ext.locale.th.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "The minimum length for this field is {0}",
    maxLengthText: "The maximum length for this field is {0}",
    blankText: "This field is required",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.th.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "The minimum value for this field is {0}",
    maxText: "The maximum value for this field is {0}",
    nanText: "{0} is not a valid number"
});

Ext.define("Ext.locale.th.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "ยปร�?ล�?",
    disabledDatesText: "ยปร�?ล�?",
    minText: "The date in this field must be after {0}",
    maxText: "The date in this field must be before {0}",
    invalidText: "{0} is not a valid date - it must be in the format {1}",
    format: "m/d/y",
    altFormats: "m/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d"
});

Ext.define("Ext.locale.th.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "ย�?ร“ร…ร‘ยงรขรร…ล�?..."
    });
});

Ext.define("Ext.locale.th.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'This field should be an e-mail address in the format "user@example.com"',
    urlText: 'This field should be a URL in the format "http:/' + '/www.example.com"',
    alphaText: 'This field should only contain letters and _',
    alphanumText: 'This field should only contain letters, numbers and _'
});

Ext.define("Ext.locale.th.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: 'Please enter the URL for the link:'
}, function() {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: 'Bold (Ctrl+B)',
                text: 'Make the selected text bold.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: 'Italic (Ctrl+I)',
                text: 'Make the selected text italic.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: 'Underline (Ctrl+U)',
                text: 'Underline the selected text.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: 'Grow Text',
                text: 'Increase the font size.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: 'Shrink Text',
                text: 'Decrease the font size.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: 'Text Highlight Color',
                text: 'Change the background color of the selected text.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: 'Font Color',
                text: 'Change the color of the selected text.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: 'Align Text Left',
                text: 'Align text to the left.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: 'Center Text',
                text: 'Center text in the editor.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: 'Align Text Right',
                text: 'Align text to the right.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: 'Bullet List',
                text: 'Start a bulleted list.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: 'Numbered List',
                text: 'Start a numbered list.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: 'Hyperlink',
                text: 'Make the selected text a hyperlink.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: 'Source Edit',
                text: 'Switch to source editing mode.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});

Ext.define("Ext.locale.th.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Sort Ascending",
    sortDescText: "Sort Descending",
    lockText: "Lock Column",
    unlockText: "Unlock Column",
    columnsText: "Columns"
});

Ext.define("Ext.locale.th.grid.GroupingFeature", {
    override: "Ext.grid.feature.Grouping",
    emptyGroupText: '(None)',
    groupByText: 'Group By This Field',
    showGroupsText: 'Show in Groups'
});

Ext.define("Ext.locale.th.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "Name",
    valueText: "Value",
    dateFormat: "m/j/Y"
});

Ext.define("Ext.locale.th.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "ยตย�?ร…ยง",
        cancel: "รย�?ร ร…ร�?ย�?",
        yes: "รฃยชรจ",
        no: "รคร�?รจรฃยชรจ"
    }    
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.th.Component", {	
    override: "Ext.Component"
});
