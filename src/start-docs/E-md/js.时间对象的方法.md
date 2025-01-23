# js.时间对象的方法

| 方法                                                         |                                                   描述 |
| :----------------------------------------------------------- | -----------------------------------------------------: |
| [Date()](https://www.w3school.com.cn/jsref/jsref_Date.asp)   |                                 返回当日的日期和时间。 |
| [getDate()](https://www.w3school.com.cn/jsref/jsref_getDate.asp) |            从 Date 对象返回一个月中的某一天 (1 ~ 31)。 |
| [getDay()](https://www.w3school.com.cn/jsref/jsref_getDay.asp) |               从 Date 对象返回一周中的某一天 (0 ~ 6)。 |
| [getMonth()](https://www.w3school.com.cn/jsref/jsref_getMonth.asp) |                        从 Date 对象返回月份 (0 ~ 11)。 |
| [getFullYear()](https://www.w3school.com.cn/jsref/jsref_getFullYear.asp) |                       从 Date 对象以四位数字返回年份。 |
| [getYear()](https://www.w3school.com.cn/jsref/jsref_getYear.asp) |                        请使用 getFullYear() 方法代替。 |
| [getHours()](https://www.w3school.com.cn/jsref/jsref_getHours.asp) |                        返回 Date 对象的小时 (0 ~ 23)。 |
| [getMinutes()](https://www.w3school.com.cn/jsref/jsref_getMinutes.asp) |                        返回 Date 对象的分钟 (0 ~ 59)。 |
| [getSeconds()](https://www.w3school.com.cn/jsref/jsref_getSeconds.asp) |                        返回 Date 对象的秒数 (0 ~ 59)。 |
| [getMilliseconds()](https://www.w3school.com.cn/jsref/jsref_getMilliseconds.asp) |                        返回 Date 对象的毫秒(0 ~ 999)。 |
| [getTime()](https://www.w3school.com.cn/jsref/jsref_getTime.asp) |                   返回 1970 年 1 月 1 日至今的毫秒数。 |
| [getTimezoneOffset()](https://www.w3school.com.cn/jsref/jsref_getTimezoneOffset.asp) |        返回本地时间与格林威治标准时间 (GMT) 的分钟差。 |
| [getUTCDate()](https://www.w3school.com.cn/jsref/jsref_getUTCDate.asp) |        根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。 |
| [getUTCDay()](https://www.w3school.com.cn/jsref/jsref_getUTCDay.asp) |         根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。 |
| [getUTCMonth()](https://www.w3school.com.cn/jsref/jsref_getUTCMonth.asp) |              根据世界时从 Date 对象返回月份 (0 ~ 11)。 |
| [getUTCFullYear()](https://www.w3school.com.cn/jsref/jsref_getUTCFullYear.asp) |               根据世界时从 Date 对象返回四位数的年份。 |
| [getUTCHours()](https://www.w3school.com.cn/jsref/jsref_getUTCHours.asp) |              根据世界时返回 Date 对象的小时 (0 ~ 23)。 |
| [getUTCMinutes()](https://www.w3school.com.cn/jsref/jsref_getUTCMinutes.asp) |              根据世界时返回 Date 对象的分钟 (0 ~ 59)。 |
| [getUTCSeconds()](https://www.w3school.com.cn/jsref/jsref_getUTCSeconds.asp) |              根据世界时返回 Date 对象的秒钟 (0 ~ 59)。 |
| [getUTCMilliseconds()](https://www.w3school.com.cn/jsref/jsref_getUTCMilliseconds.asp) |              根据世界时返回 Date 对象的毫秒(0 ~ 999)。 |
| [parse()](https://www.w3school.com.cn/jsref/jsref_parse.asp) |     返回1970年1月1日午夜到指定日期（字符串）的毫秒数。 |
| [setDate()](https://www.w3school.com.cn/jsref/jsref_setDate.asp) |                  设置 Date 对象中月的某一天 (1 ~ 31)。 |
| [setMonth()](https://www.w3school.com.cn/jsref/jsref_setMonth.asp) |                        设置 Date 对象中月份 (0 ~ 11)。 |
| [setFullYear()](https://www.w3school.com.cn/jsref/jsref_setFullYear.asp) |                   设置 Date 对象中的年份（四位数字）。 |
| [setYear()](https://www.w3school.com.cn/jsref/jsref_setYear.asp) |                        请使用 setFullYear() 方法代替。 |
| [setHours()](https://www.w3school.com.cn/jsref/jsref_setHours.asp) |                      设置 Date 对象中的小时 (0 ~ 23)。 |
| [setMinutes()](https://www.w3school.com.cn/jsref/jsref_setMinutes.asp) |                      设置 Date 对象中的分钟 (0 ~ 59)。 |
| [setSeconds()](https://www.w3school.com.cn/jsref/jsref_setSeconds.asp) |                      设置 Date 对象中的秒钟 (0 ~ 59)。 |
| [setMilliseconds()](https://www.w3school.com.cn/jsref/jsref_setMilliseconds.asp) |                     设置 Date 对象中的毫秒 (0 ~ 999)。 |
| [setTime()](https://www.w3school.com.cn/jsref/jsref_setTime.asp) |                                 以毫秒设置 Date 对象。 |
| [setUTCDate()](https://www.w3school.com.cn/jsref/jsref_setUTCDate.asp) |        根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。 |
| [setUTCMonth()](https://www.w3school.com.cn/jsref/jsref_setUTCMonth.asp) |            根据世界时设置 Date 对象中的月份 (0 ~ 11)。 |
| [setUTCFullYear()](https://www.w3school.com.cn/jsref/jsref_setUTCFullYear.asp) |         根据世界时设置 Date 对象中的年份（四位数字）。 |
| [setUTCHours()](https://www.w3school.com.cn/jsref/jsref_setutchours.asp) |            根据世界时设置 Date 对象中的小时 (0 ~ 23)。 |
| [setUTCMinutes()](https://www.w3school.com.cn/jsref/jsref_setUTCMinutes.asp) |            根据世界时设置 Date 对象中的分钟 (0 ~ 59)。 |
| [setUTCSeconds()](https://www.w3school.com.cn/jsref/jsref_setUTCSeconds.asp) |            根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。 |
| [setUTCMilliseconds()](https://www.w3school.com.cn/jsref/jsref_setUTCMilliseconds.asp) |           根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。 |
| [toSource()](https://www.w3school.com.cn/jsref/jsref_tosource_boolean.asp) |                                   返回该对象的源代码。 |
| [toString()](https://www.w3school.com.cn/jsref/jsref_toString_date.asp) |                             把 Date 对象转换为字符串。 |
| [toTimeString()](https://www.w3school.com.cn/jsref/jsref_toTimeString.asp) |                   把 Date 对象的时间部分转换为字符串。 |
| [toDateString()](https://www.w3school.com.cn/jsref/jsref_toDateString.asp) |                   把 Date 对象的日期部分转换为字符串。 |
| [toGMTString()](https://www.w3school.com.cn/jsref/jsref_toGMTString.asp) |                        请使用 toUTCString() 方法代替。 |
| [toUTCString()](https://www.w3school.com.cn/jsref/jsref_toUTCString.asp) |                 根据世界时，把 Date 对象转换为字符串。 |
| [toLocaleString()](https://www.w3school.com.cn/jsref/jsref_toLocaleString.asp) |           根据本地时间格式，把 Date 对象转换为字符串。 |
| [toLocaleTimeString()](https://www.w3school.com.cn/jsref/jsref_toLocaleTimeString.asp) | 根据本地时间格式，把 Date 对象的时间部分转换为字符串。 |
| [toLocaleDateString()](https://www.w3school.com.cn/jsref/jsref_toLocaleDateString.asp) | 根据本地时间格式，把 Date 对象的日期部分转换为字符串。 |
| [UTC()](https://www.w3school.com.cn/jsref/jsref_utc.asp)     |  根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。 |
| [valueOf()](https://www.w3school.com.cn/jsref/jsref_valueOf_date.asp) |                               返回 Date 对象的原始值。 |
