/**
 * Simplified Chinese translation
 * By DavidHu
 * 09 April 2007
 *
 * update by andy_ghg
 * 2009-10-22 15:00:57
 */
Ext.onReady(function() {
    var parseCodes;

    if (Ext.Date) {
        Ext.Date.monthNames = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "�?月", "�??月", "�??一月", "�??二月"];

        Ext.Date.dayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

        Ext.Date.formatCodes.a = "(this.getHours() < 12 ? '上�?�' : '下�?�')";
        Ext.Date.formatCodes.A = "(this.getHours() < 12 ? '上�?�' : '下�?�')";

        parseCodes = {
            g: 1,
            c: "if (/(上�?�)/i.test(results[{0}])) {\n"
                + "if (!h || h == 12) { h = 0; }\n"
                + "} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
            s: "(上�?�|下�?�)",
            calcAtEnd: true
        };

        Ext.Date.parseCodes.a = Ext.Date.parseCodes.A = parseCodes;
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: ',',
            decimalSeparator: '.',
            currencySign: '\u00a5',
            // Chinese Yuan
            dateFormat: 'y年m月d日'
        });
    }
});

Ext.define("Ext.locale.zh_CN.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.zh_CN.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "选择了 {0} 行"
});

Ext.define("Ext.locale.zh_CN.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "关闭此标签"
});

Ext.define("Ext.locale.zh_CN.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "输入值�?�法"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.zh_CN.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "讀�?�中..."
});

Ext.define("Ext.locale.zh_CN.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "今天",
    minText: "日期必须大于最�?�?许日期",
    //update
    maxText: "日期必须�?于最大�?许日期",
    //update
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: '下个月 (Ctrl+Right)',
    prevText: '上个月 (Ctrl+Left)',
    monthYearText: '选择一个月 (Control+Up/Down �?�改�?�年份)',
    //update
    todayTip: "{0} (空格键选择)",
    format: "y年m月d日",
    ariaTitle: '{0}',
    ariaTitleDateFormat: 'Y\u5e74m\u6708d\u65e5',
    longDayFormat: 'Y\u5e74m\u6708d\u65e5',
    monthYearFormat: 'Y\u5e74m\u6708',
    getDayInitial: function (value) {
        // Grab the last character
        return value.substr(value.length - 1);
    }
});

Ext.define("Ext.locale.zh_CN.picker.Month", {
    override: "Ext.picker.Month",
    okText: "确定",
    cancelText: "�?�消"
});

Ext.define("Ext.locale.zh_CN.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "第",
    //update
    afterPageText: "页,共 {0} 页",
    //update
    firstText: "第一页",
    prevText: "上一页",
    //update
    nextText: "下一页",
    lastText: "最�?�页",
    refreshText: "刷新",
    displayMsg: "显示 {0} - {1}�?�，共 {2} �?�",
    //update
    emptyMsg: '没有数�?�'
});

Ext.define("Ext.locale.zh_CN.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "该输入项的最�?长度是 {0} 个字符",
    maxLengthText: "该输入项的最大长度是 {0} 个字符",
    blankText: "该输入项为必输项",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.zh_CN.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "该输入项的最�?值是 {0}",
    maxText: "该输入项的最大值是 {0}",
    nanText: "{0} �?是有效数值"
});

Ext.define("Ext.locale.zh_CN.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "�?用",
    disabledDatesText: "�?用",
    minText: "该输入项的日期必须在 {0} 之�?�",
    maxText: "该输入项的日期必须在 {0} 之�?",
    invalidText: "{0} 是无效的日期 - 必须符�?�格�?： {1}",
    format: "y年m月d日"
});

Ext.define("Ext.locale.zh_CN.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "加载中..."
    });
});

Ext.define("Ext.locale.zh_CN.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: '该输入项必须是电�?邮件地�?�，格�?如： "user@example.com"',
    urlText: '该输入项必须是URL地�?�，格�?如： "http:/' + '/www.example.com"',
    alphaText: '该输入项�?�能包�?��?�角字�?和_',
    alphanumText: '该输入项�?�能包�?��?�角字�?,数字和_'
});

//add HTMLEditor's tips by andy_ghg
Ext.define("Ext.locale.zh_CN.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: '添加超级链接:'
}, function() {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: '粗体 (Ctrl+B)',
                text: '将选中的文字设置为粗体',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: '斜体 (Ctrl+I)',
                text: '将选中的文字设置为斜体',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: '下划线 (Ctrl+U)',
                text: '给所选文字加下划线',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: '增大字体',
                text: '增大字�?�',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: '缩�?字体',
                text: '�?�?字�?�',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: '以�?�?�颜色�?出显示文本',
                text: '使文字看上去�?是用�?�光笔�?�了标记一样',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: '字体颜色',
                text: '更改字体颜色',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: '左对�?',
                text: '将文字左对�?',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: '居中',
                text: '将文字居中对�?',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: '�?�对�?',
                text: '将文字�?�对�?',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: '项目符�?�',
                text: '开始创建项目符�?�列表',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: '编�?�',
                text: '开始创建编�?�列表',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: '转�?超级链接',
                text: '将所选文本转�?��?超级链接',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: '代�?视图',
                text: '以代�?的形�?展现文本',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});

Ext.define("Ext.locale.zh_CN.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "正�?",
    //update
    sortDescText: "倒�?",
    //update
    lockText: "�?定列",
    //update
    unlockText: "解除�?定",
    //update
    columnsText: "列"
});

Ext.define("Ext.locale.zh_CN.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "�??称",
    valueText: "值",
    dateFormat: "y年m月d日"
});

Ext.define("Ext.locale.zh_CN.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "确定",
        cancel: "�?�消",
        yes: "是",
        no: "�?�"
    }    
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.zh_CN.Component", {	
    override: "Ext.Component"
});
