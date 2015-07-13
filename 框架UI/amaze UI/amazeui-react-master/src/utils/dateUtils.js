'use strict';

var locales = {
  'en_US': {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    weekStart: 0
  },
  'zh_CN': {
    days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    daysShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    daysMin: ['日', '一', '二', '三', '四', '五', '六'],
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月',
      '八月', '九月', '十月', '十一月', '十二月'],
    monthsShort: ['一月', '二月', '三月', '四月', '五月', '六月',
      '七月', '八月', '九月', '十月', '十一月', '十二月'],
    today: '今天',
    weekStart: 0
  }
};

var dateUtils = {
  isLeapYear: function(year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
  },

  getDaysInMonth: function(year, month) {
    return [31, (this.isLeapYear(year) ? 29 : 28),
      31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
  },

  getLocale: function(locale) {
    if (!locale) {
      locale = navigator.language && navigator.language.split('-');
      locale[1] = locale[1].toUpperCase();
      locale = locale.join('_');
    }

    return locales[locale] || locales['en_US'];
  }
};

module.exports = dateUtils;
