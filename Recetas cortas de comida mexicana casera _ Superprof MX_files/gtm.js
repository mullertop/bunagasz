
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"7",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-84331427-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-84331427-2",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.timerInterval"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.timerEventNumber"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\";3E4===",["escape",["macro",9],8,16],"\u0026\u00261===",["escape",["macro",10],8,16],"?a=\"30 seconds or more\":6E4===",["escape",["macro",9],8,16],"\u0026\u00261===",["escape",["macro",10],8,16],"?a=\"60 seconds or more\":6E4===",["escape",["macro",9],8,16],"\u0026\u00261\u003C",["escape",["macro",10],8,16],"\u0026\u0026(a=",["escape",["macro",10],8,16],"+\" minutes or more\");if(\"\"!==a)return a=\"page visit \"+a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"{}",
      "vtp_name":"teacher"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"{}",
      "vtp_name":"location"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"{}",
      "vtp_name":"course"
    },{
      "function":"__jsm",
      "convert_null_to":"-",
      "convert_undefined_to":"-",
      "vtp_javascript":["template","(function(){var c={},d=0,b=0,a=[];",["escape",["macro",16],8,16],"\u0026\u0026(a=a.concat([{name:\"dNa\",value:",["escape",["macro",16],8,16],".discipline,check:\"empty\"},{name:\"dId\",value:",["escape",["macro",16],8,16],".discipline_id,check:\"empty\"}]));",["escape",["macro",15],8,16],"\u0026\u0026(a=a.concat([{name:\"lCi\",value:",["escape",["macro",15],8,16],".city,check:\"empty\"},{name:\"lCiId\",value:",["escape",["macro",15],8,16],".cityId,check:\"empty\"}]));",["escape",["macro",16],8,16],"\u0026\u0026(a=a.concat([{name:\"dLv\",value:",["escape",["macro",16],8,16],".level,check:\"empty\"},{name:\"dLvId\",value:",["escape",["macro",16],8,16],".levelId,\ncheck:\"empty\"}]));",["escape",["macro",13],8,16],"\u0026\u0026(a=a.concat([{name:\"tId\",value:",["escape",["macro",13],8,16],".id,check:\"empty\"},{name:\"tAS\",value:",["escape",["macro",13],8,16],".ambassadorStatus,check:\"boolean\"}]));for(",["escape",["macro",15],8,16],"\u0026\u0026(a=a.concat([{name:\"lCo\",value:",["escape",["macro",15],8,16],".country,check:\"empty\"},{name:\"lCoId\",value:",["escape",["macro",15],8,16],".countryId,check:\"empty\"}]));150\u003E=d\u0026\u0026b\u003Ca.length;)a[b]\u0026\u0026\"empty\"===a[b].check\u0026\u0026a[b].value\u0026\u0026\"\"!==a[b].value\u0026\u0026d\u003C=150-a[b].value.toString().length-a[b].name.toString().length-\n2\u0026\u0026(c[a[b].name]=a[b].value,d=d+a[b].value.toString().length+a[b].name.toString().length+2),a[b]\u0026\u0026\"boolean\"===a[b].check\u0026\u0026(!0===a[b].value||\"true\"===a[b].value||!1===a[b].value||\"false\"===a[b].value)\u0026\u0026d\u003C=150-a[b].name.toString().length-3\u0026\u0026(c[a[b].name]=!0===a[b].value||\"true\"===a[b].value?\"1\":\"0\",d=d+a[b].name.toString().length+3),b++;c=JSON.stringify(c);c=c.substring(1,c.length-1);return 0\u003Cc.length?c:\"-\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return{ecommerce:{purchase:{actionField:{id:",["escape",["macro",18],8,16],".transaction.id,revenue:",["escape",["macro",18],8,16],".transaction.revenue,coupon:",["escape",["macro",18],8,16],".transaction.coupon},products:",["escape",["macro",18],8,16],".products}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=new Date,d=-b.getTimezoneOffset(),e=0\u003C=d?\"+\":\"-\",c=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a},f=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"00\":\"\")+(100\u003Ea\u0026\u002610\u003C=a?\"0\":\"\")+a};return b.getFullYear()+\"-\"+c(b.getMonth()+1)+\"-\"+c(b.getDate())+\"T\"+c(b.getHours())+\":\"+c(b.getMinutes())+\":\"+c(b.getSeconds())+\".\"+f(b.getMilliseconds())+e+c(d\/60)+\":\"+c(d%60)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.transaction.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"-",
      "vtp_name":"user"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","opening","value","true"],["map","key","viewDetails","value","true"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=2,c=6;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"));a.set(\"dimension\"+c,a.get(\"clientId\")+\"|\"+",["escape",["macro",23],8,16],")}})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",25]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",20]],["map","index","3","dimension",["macro",23]],["map","index","4","dimension","-"],["map","index","5","dimension","-"]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-0000000-0",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    }],
  "tags":[{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":13
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":14
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":15
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":17
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"964838392",
      "vtp_conversionLabel":"2aHhCL6YuloQ-IeJzAM",
      "vtp_url":["macro",4],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":18
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":19
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":28
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",6],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":29
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":30
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":31
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"adjusted bounce rate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",8],
      "vtp_eventAction":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":32
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":33
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"60000",
      "vtp_limit":"10",
      "vtp_uniqueTriggerId":"13129103_25",
      "tag_id":34
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"13129103_26",
      "tag_id":35
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",21,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{content_ids:",["escape",["macro",12],8,16],".id,content_type:\"product\",value:",["escape",["macro",12],8,16],".value,currency:",["escape",["macro",12],8,16],".currency,id:",["escape",["macro",12],8,16],".id,title:",["escape",["macro",12],8,16],".subject,description:",["escape",["macro",13],8,16],".name,availability:",["escape",["macro",12],8,16],".availability,condition:",["escape",["macro",12],8,16],".condition,price:",["escape",["macro",12],8,16],".value,link:",["escape",["macro",12],8,16],".link,image_link:",["escape",["macro",12],8,16],".image_link});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":20
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",21,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\",{value:\"0.01\",currency:\"EUR\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":21
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",21,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\",{value:\"0.01\",currency:\"EUR\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":22
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",21,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":23
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",21,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{content_ids:",["escape",["macro",12],8,16],".id,content_type:\"product\",value:",["escape",["macro",12],8,16],".value,currency:",["escape",["macro",12],8,16],".currency,id:",["escape",["macro",12],8,16],".id,title:",["escape",["macro",12],8,16],".subject,description:",["escape",["macro",13],8,16],".name,availability:",["escape",["macro",12],8,16],".availability,condition:",["escape",["macro",12],8,16],".condition,price:",["escape",["macro",12],8,16],".value,link:",["escape",["macro",12],8,16],".link,image_link:",["escape",["macro",12],8,16],".image_link});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",21,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Search\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":25
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",21,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_ids:",["escape",["macro",12],8,16],".id,content_type:\"product\",value:",["escape",["macro",12],8,16],".value,currency:",["escape",["macro",12],8,16],".currency,id:",["escape",["macro",12],8,16],".id,title:",["escape",["macro",12],8,16],".subject,description:",["escape",["macro",13],8,16],".name,availability:",["escape",["macro",12],8,16],".availability,condition:",["escape",["macro",12],8,16],".condition,price:",["escape",["macro",12],8,16],".value,link:",["escape",["macro",12],8,16],".link,image_link:",["escape",["macro",12],8,16],".image_link});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":26
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"659167000921752\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":27
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"studentsFunnel"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"payment"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"success"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"superprof.mx"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"createAd"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"stepPrice"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"teachersFunnel"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/ressources\/"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/blog\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(^$|((^|,)13129103_25($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(^$|((^|,)13129103_26($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",5],
      "arg1":"\/blog\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"cta-booking"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"teacherProfile"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"register"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"loginPage"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"https:\/\/www.superprof.mx\/s\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"viewDetails"
    }],
  "rules":[
    [["if",0],["add",0]],
    [["if",0,1,2],["add",1,5,6,18],["block",0]],
    [["if",3,4],["add",2,3]],
    [["if",5,6,7],["add",4,9,15]],
    [["if",3,4],["unless",8,9],["add",7,17]],
    [["if",4],["add",8]],
    [["if",10,11],["add",10]],
    [["if",10,12],["add",10]],
    [["if",3,4,13],["add",11,17,12,13]],
    [["if",0,14,15],["add",14]],
    [["if",16,17],["add",16]],
    [["if",4,18],["add",19]],
    [["if",0,15,19],["add",20]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ca="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var ha={Jf:!0},ia={};try{ia.__proto__=ha;ea=ia.Jf;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=da,ka=this||self,la=/^[\w+/_-]+[=]{0,2}$/,ma=null;var na=function(){},oa=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},pa=function(a){return"number"==typeof a&&!isNaN(a)},ra=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},n=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ta=function(a,b){if(a&&ra(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},ua=function(a,b){if(!pa(a)||
!pa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},wa=function(a,b){for(var c=new va,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},xa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},za=function(a){return Math.round(Number(a))||0},Aa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ba=function(a){var b=[];if(ra(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ca=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ea=function(){return(new Date).getTime()},va=function(){this.prefix="gtm.";this.values={}};va.prototype.set=function(a,b){this.values[this.prefix+a]=b};va.prototype.get=function(a){return this.values[this.prefix+a]};
var Fa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ha=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ia=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ja=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ka=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},La=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Ma=function(a){var b=
[];xa(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Na=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Oa=function(a){if(null==a)return String(a);var b=Na.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Pa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Qa=function(a){if(!a||"object"!=Oa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Pa(a,"constructor")&&!Pa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Pa(a,b)},C=function(a,b){var c=b||("array"==Oa(a)?[]:{}),d;for(d in a)if(Pa(a,d)){var e=a[d];"array"==Oa(e)?("array"!=Oa(c[d])&&(c[d]=[]),c[d]=C(e,c[d])):Qa(e)?(Qa(c[d])||(c[d]={}),c[d]=C(e,c[d])):c[d]=e}return c};
var Ra=[],Sa={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ta=function(a){return Sa[a]},Ua=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ya=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Za={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},$a=function(a){return Za[a]};
Ra[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ya,$a)+"'"}};var jb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,kb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},mb=function(a){return kb[a]};Ra[16]=function(a){return a};var ob;
var pb=[],qb=[],rb=[],sb=[],tb=[],ub={},vb,wb,xb,zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ab=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=ub[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):ob(c,e,b)},Cb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Bb(a[e],b,c));
return d},Db=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=ub[b];return c?c.priorityOverride||0:0},Bb=function(a,b,c){if(ra(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Bb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=pb[f];if(!h||b.Wc(h))return;c[f]=!0;try{var k=Cb(h,b,c);k.vtp_gtmEventId=b.id;d=Ab(k,b);xb&&(d=xb.jg(d,k))}catch(y){b.Fe&&b.Fe(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Bb(a[l],b,c)]=Bb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,q=1;q<a.length;q++){var r=Bb(a[q],b,c);wb&&(m=m||r===wb.Kb);d.push(r)}return wb&&m?wb.mg(d):d.join("");case "escape":d=Bb(a[1],b,c);if(wb&&ra(a[1])&&"macro"===a[1][0]&&wb.Mg(a))return wb.eh(d);d=String(d);for(var u=2;u<a.length;u++)Ra[a[u]]&&(d=Ra[a[u]](d));return d;case "tag":var p=a[1];if(!sb[p])throw Error("Unable to resolve tag reference "+p+".");return d={se:a[2],
index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var w=Eb(t,b,c),v=!!a[4];return v||2!==w?v!==(1===w):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Eb=function(a,b,c){try{return vb(Cb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Fb=function(){var a=function(b){return{toString:function(){return b}}};return{Ad:a("convert_case_to"),Bd:a("convert_false_to"),Cd:a("convert_null_to"),Dd:a("convert_true_to"),Ed:a("convert_undefined_to"),Mh:a("debug_mode_metadata"),xa:a("function"),hf:a("instance_name"),nf:a("live_only"),qf:a("malware_disabled"),rf:a("metadata"),Nh:a("original_vendor_template_id"),vf:a("once_per_event"),Md:a("once_per_load"),Ud:a("setup_tags"),Wd:a("tag_id"),Xd:a("teardown_tags")}}();var Gb=null,Jb=function(a){function b(r){for(var u=0;u<r.length;u++)d[r[u]]=!0}var c=[],d=[];Gb=Hb(a);for(var e=0;e<qb.length;e++){var f=qb[e],h=Ib(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],q=0;q<sb.length;q++)c[q]&&!d[q]&&(m[q]=!0);return m},Ib=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Gb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Gb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Hb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Eb(rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var D={va:"_ee",Ph:"_uei",Ac:"event_callback",Jb:"event_timeout",D:"gtag.config",ca:"allow_ad_personalization_signals",Bc:"restricted_data_processing",$a:"allow_google_signals",da:"cookie_expires",Ib:"cookie_update",ab:"session_duration",ka:"user_properties",sa:"transport_url",F:"ads_data_redaction"};D.Ae=[D.ca,D.$a,D.Ib];D.Ce=[D.da,D.Jb,D.ab];var F=window,G=document,fc=navigator,gc=G.currentScript&&G.currentScript.src,hc=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},ic=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},jc=function(a,b,c){var d=G.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;ic(d,b);c&&(d.onerror=c);var e;if(null===ma)b:{var f=ka.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&la.test(k)){ma=k;break b}}ma=""}e=ma;e&&d.setAttribute("nonce",e);var l=G.getElementsByTagName("script")[0]||G.body||G.head;l.parentNode.insertBefore(d,l);return d},kc=function(){if(gc){var a=gc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},lc=function(a,b){var c=G.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=G.body&&G.body.lastChild||
G.body||G.head;d.parentNode.insertBefore(c,d);ic(c,b);void 0!==a&&(c.src=a);return c},mc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},nc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},oc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){F.setTimeout(a,0)},pc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},qc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},rc=function(a){var b=G.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},sc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},tc=function(a){fc.sendBeacon&&fc.sendBeacon(a)||mc(a)},uc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var vc={},J=function(a,b){vc[a]=vc[a]||[];vc[a][b]=!0},wc=function(a){for(var b=[],c=vc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var xc=[];function yc(){var a=hc("google_tag_data",{});a.ics||(a.ics={entries:{},set:zc,update:Ac,addListener:Bc,notifyListeners:Cc,active:!1});return a.ics}
function zc(a,b,c,d,e,f){var h=yc();h.active=!0;if(void 0!=b){var k=h.entries,l=k[a]||{},m=l.region,q=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(q===e||(q===d?m!==e:!q&&!m)){var r=!!(f&&0<f&&void 0===l.update),u={region:q,initial:"granted"===b,update:l.update,quiet:r};k[a]=u;r&&F.setTimeout(function(){k[a]===u&&u.quiet&&(u.quiet=!1,Ec(a),Cc(),J("TAGGING",2))},f)}}}
function Ac(a,b){var c=yc();c.active=!0;if(void 0!=b){var d=Fc(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var h=Fc(a);f.quiet?(f.quiet=!1,Ec(a)):h!==d&&Ec(a)}}function Bc(a,b){xc.push({me:a,xg:b})}function Ec(a){for(var b=0;b<xc.length;++b){var c=xc[b];ra(c.me)&&-1!==c.me.indexOf(a)&&(c.Oe=!0)}}function Cc(){for(var a=0;a<xc.length;++a){var b=xc[a];if(b.Oe){b.Oe=!1;try{b.xg.call()}catch(c){}}}}
var Fc=function(a){var b=yc().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Gc=function(a){return!(yc().entries[a]||{}).quiet},Hc=function(){return yc().active},Ic=function(a,b){yc().addListener(a,b)},Jc=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Gc(b[e]))return!0;return!1}if(c()){var d=!1;Ic(b,function(){d||c()||(d=!0,a())})}else a()},Kc=function(a,b){if(!1===Fc(b)){var c=!1;Ic([b],function(){!c&&Fc(b)&&(a(),c=!0)})}};var Lc=[D.m,D.K],Mc=function(a){var b=a[D.kh];b&&J("GTM",40);var c=a[D.lh];c&&J("GTM",41);for(var d=ra(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<Lc.length;f++){var h=Lc[f],k=a[Lc[f]],l=d[e];yc().set(h,k,l,"UA","UA-30",c)}},Nc=function(a){for(var b=0;b<Lc.length;b++){var c=Lc[b],d=a[Lc[b]];yc().update(c,d)}yc().notifyListeners()},Oc=function(a){var b=Fc(a);return void 0!=b?b:!0},Pc=function(){for(var a=[],b=0;b<Lc.length;b++){var c=Fc(Lc[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},Qc=function(a){Kc(a,D.m)},Rc=function(a,b){Jc(a,b)};var Tc=function(a){return Sc?G.querySelectorAll(a):null},Uc=function(a,b){if(!Sc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!G.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Vc=!1;if(G.querySelectorAll)try{var Wc=G.querySelectorAll(":root");Wc&&1==Wc.length&&Wc[0]==G.documentElement&&(Vc=!0)}catch(a){}var Sc=Vc;var kd={},ld=null,md=Math.random();kd.s="GTM-NWLFC99";kd.Ob="561";kd.Ld="";var nd={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},pd="www.googletagmanager.com/gtm.js";
var qd=pd,rd=null,sd=null,td=null,ud="//www.googletagmanager.com/a?id="+kd.s+"&cv=7",vd={},wd={},xd=function(){var a=ld.sequence||0;ld.sequence=a+1;return a};
var yd=function(){return"&tc="+sb.filter(function(a){return a}).length},Bd=function(){zd||(zd=F.setTimeout(Ad,500))},Ad=function(){zd&&(F.clearTimeout(zd),zd=void 0);void 0===Cd||Dd[Cd]&&!Ed&&!Fd||(Gd[Cd]||Hd.Og()||0>=Id--?(J("GTM",1),Gd[Cd]=!0):(Hd.nh(),mc(Jd()),Dd[Cd]=!0,Kd=Ld=Fd=Ed=""))},Jd=function(){var a=Cd;if(void 0===a)return"";var b=wc("GTM"),c=wc("TAGGING");return[Md,Dd[a]?"":"&es=1",Nd[a],b?"&u="+b:"",c?"&ut="+c:"",yd(),Ed,Fd,Ld,Kd,"&z=0"].join("")},Od=function(){return[ud,"&v=3&t=t","&pid="+
ua(),"&rv="+kd.Ob].join("")},Pd="0.005000">Math.random(),Md=Od(),Qd=function(){Md=Od()},Dd={},Ed="",Fd="",Kd="",Ld="",Cd=void 0,Nd={},Gd={},zd=void 0,Hd=function(a,b){var c=0,d=0;return{Og:function(){if(c<a)return!1;Ea()-d>=b&&(c=0);return c>=a},nh:function(){Ea()-d>=b&&(c=0);c++;d=Ea()}}}(2,1E3),Id=1E3,Rd=function(a,b){if(Pd&&!Gd[a]&&Cd!==a){Ad();Cd=a;Kd=Ed="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Nd[a]="&e="+c+"&eid="+a;Bd()}},Sd=function(a,b,c){if(Pd&&!Gd[a]&&
b){a!==Cd&&(Ad(),Cd=a);var d,e=String(b[Fb.xa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Ed=Ed?Ed+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(ub[h]?"1":"2")+d;Kd=Kd?Kd+"."+k:"&ti="+k;Bd();2022<=Jd().length&&Ad()}},Td=function(a,b,c){if(Pd&&!Gd[a]){a!==Cd&&(Ad(),Cd=a);var d=c+b;Fd=Fd?Fd+
"."+d:"&epr="+d;Bd();2022<=Jd().length&&Ad()}};var Ud={},Vd=new va,Wd={},Xd={},$d={name:"dataLayer",set:function(a,b){C(La(a,b),Wd);Yd()},get:function(a){return Zd(a,2)},reset:function(){Vd=new va;Wd={};Yd()}},Zd=function(a,b){if(2!=b){var c=Vd.get(a);if(Pd){var d=ae(a);c!==d&&J("GTM",5)}return c}return ae(a)},ae=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:be(b)},be=function(a){for(var b=Wd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var ce=function(a,b){Xd.hasOwnProperty(a)||(Vd.set(a,b),C(La(a,b),Wd),Yd())},Yd=function(a){xa(Xd,function(b,c){Vd.set(b,c);C(La(b,void 0),Wd);C(La(b,c),Wd);a&&delete Xd[b]})},de=function(a,b,c){Ud[a]=Ud[a]||{};var d=1!==c?ae(b):Vd.get(b);"array"===Oa(d)||"object"===Oa(d)?Ud[a][b]=C(d):Ud[a][b]=d},ee=function(a,b){if(Ud[a])return Ud[a][b]},fe=function(a,b){Ud[a]&&delete Ud[a][b]};var ie=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var je=/:[0-9]+$/,ke=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},ne=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=le(a.protocol)||le(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||F.location.hostname).replace(je,"").toLowerCase());return me(a,b,c,d,e)},me=function(a,b,c,d,e){var f,h=le(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=oe(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(je,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||J("TAGGING",1);
f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=n(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=ke(f,e,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},le=function(a){return a?a.replace(":","").toLowerCase():""},oe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},pe=function(a){var b=G.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||J("TAGGING",1),c="/"+c);var d=b.hostname.replace(je,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},qe=function(a){function b(m){var q=m.split("=")[0];return 0>d.indexOf(q)?m:q+"=0"}function c(m){return m.split("&").map(b).filter(function(q){return void 0!=q}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),
e=pe(a),f=a.split(/[?#]/)[0],h=e.search,k=e.hash;"?"===h[0]&&(h=h.substring(1));"#"===k[0]&&(k=k.substring(1));h=c(h);k=c(k);""!==h&&(h="?"+h);""!==k&&(k="#"+k);var l=""+f+h+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function re(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var se={},te=function(a){return void 0==se[a]?!1:se[a]};var ve=function(a,b,c,d){return ue(d)?re(a,String(b||document.cookie),c):[]},ye=function(a,b,c,d,e){if(ue(e)){var f=we(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=xe(f,function(h){return h.Vb},b);if(1===f.length)return f[0].id;f=xe(f,function(h){return h.yb},c);return f[0]?f[0].id:void 0}}};function ze(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=ve(b,f,!1,d).indexOf(c)}
var De=function(a,b,c){function d(p,t,w){if(null==w)return delete h[t],p;h[t]=w;return p+"; "+t+"="+w}function e(p,t){if(null==t)return delete h[t],p;h[t]=!0;return p+"; "+t}if(!ue(c.Da))return 2;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Ae(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.Zh);f=d(f,"samesite",
c.ei);c.fi&&(f=e(f,"secure"));f=e(f,c.flags);var l=c.domain;if("auto"===l){for(var m=Be(),q=0;q<m.length;++q){var r="none"!==m[q]?m[q]:void 0,u=d(f,"domain",r);if(!Ce(r,c.path)&&ze(u,a,b,c.Da))return 0}return 1}l&&"none"!==l&&(f=d(f,"domain",l));return Ce(l,c.path)?1:ze(f,a,b,c.Da)?0:1},Ee=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return De(a,b,c)};
function xe(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function we(a,b,c){for(var d=[],e=ve(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),Vb:1*l[0]||1,yb:1*l[1]||1}))}}return d}
var Ae=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Fe=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ge=/(^|\.)doubleclick\.net$/i,Ce=function(a,b){return Ge.test(document.location.hostname)||"/"===b&&Fe.test(a)},Be=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Ge.test(e)||Fe.test(e)||a.push("none");
return a},ue=function(a){if(!te("gtag_cs_api")||!a||!Hc())return!0;if(!Gc(a))return!1;var b=Fc(a);return null==b?!0:!!b};var He=function(){for(var a=fc.userAgent+(G.cookie||"")+(G.referrer||""),b=a.length,c=F.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ea()/1E3)].join(".")},Ke=function(a,b,c,d,e){var f=Ie(b);return ye(a,f,Je(c),d,e)},Le=function(a,b,c,d){var e=""+Ie(c),f=Je(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Ie=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Je=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Me(a,b,c){var d,e=a.wb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ea())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Ne=["1"],Oe={},Se=function(a){var b=Pe(a.prefix);Oe[b]||Qe(b,a.path,a.domain)||(Re(b,He(),a),Qe(b,a.path,a.domain))};function Re(a,b,c){var d=Le(b,"1",c.domain,c.path),e=Me(c);e.Da="ad_storage";Ee(a,d,e)}function Qe(a,b,c){var d=Ke(a,b,c,Ne,"ad_storage");d&&(Oe[a]=d);return d}function Pe(a){return(a||"_gcl")+"_au"};function Te(){for(var a=Ue,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Ve(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Ue,We;function Xe(a){Ue=Ue||Ve();We=We||Te();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,q=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(q=64));b.push(Ue[l],Ue[m],Ue[q],Ue[r])}return b.join("")}
function Ye(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),q=We[m];if(null!=q)return q;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Ue=Ue||Ve();We=We||Te();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Ze;var cf=function(){var a=$e,b=af,c=bf(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){nc(G,"mousedown",d);nc(G,"keyup",d);nc(G,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},df=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};bf().decorators.push(f)},ef=function(a,b,c){for(var d=bf().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a;if(l&&(h.sameHost||m!==G.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[q])){k=!0;break a}k=!1}if(k){var r=h.placement;void 0==r&&(r=h.fragment?2:1);r===b&&Ia(e,h.callback())}}return e},bf=function(){var a=hc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var ff=/(.*?)\*(.*?)\*(.*)/,gf=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,hf=/^(?:www\.|m\.|amp\.)+/,jf=/([^?#]+)(\?[^#]*)?(#.*)?/;function kf(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var mf=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Xe(String(d))))}var e=b.join("*");return["1",lf(e),e].join("*")},lf=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ze)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Ze=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ze[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},of=function(){return function(a){var b=pe(F.location.href),c=b.search.replace("?",""),d=ke(c,"_gl",!0)||"";a.query=nf(d)||{};var e=ne(b,"fragment").match(kf("_gl"));a.fragment=nf(e&&e[3]||"")||{}}},pf=function(a){var b=of(),c=bf();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Ia(d,e.query),a&&Ia(d,e.fragment));return d},nf=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=ff.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],q=0;q<b;++q)if(m===lf(k,q)){l=!0;break a}l=!1}if(l){for(var r={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)r[u[p]]=Ye(u[p+1]);return r}}}}catch(t){}};
function qf(a,b,c,d){function e(q){var r=q,u=kf(a).exec(r),p=r;if(u){var t=u[2],w=u[4];p=u[1];w&&(p=p+t+w)}q=p;var v=q.charAt(q.length-1);q&&"&"!==v&&(q+="&");return q+m}d=void 0===d?!1:d;var f=jf.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function rf(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=ef(b,1,c),e=ef(b,2,c),f=ef(b,3,c);if(Ja(d)){var h=mf(d);c?sf("_gl",h,a):tf("_gl",h,a,!1)}if(!c&&Ja(e)){var k=mf(e);tf("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,q=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){tf(m,q,r,void 0);break a}if("form"===r.tagName.toLowerCase()){sf(m,q,r);break a}}"string"==typeof r&&qf(m,q,r,void 0)}}
function tf(a,b,c,d){if(c.href){var e=qf(a,b,c.href,void 0===d?!1:d);ie.test(e)&&(c.href=e)}}
function sf(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=G.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=qf(a,b,c.action);ie.test(m)&&(c.action=m)}}}
var $e=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||rf(e,e.hostname)}}catch(h){}},af=function(a){try{if(a.action){var b=ne(pe(a.action),"host");rf(a,b)}}catch(c){}},uf=function(a,b,c,d){cf();df(a,b,"fragment"===c?2:1,!!d,!1)},vf=function(a,b){cf();df(a,[me(F.location,"host",!0)],b,!0,!0)},wf=function(){var a=G.location.hostname,b=gf.exec(G.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(hf,""),l=e.replace(hf,""),m;if(!(m=k===l)){var q="."+l;m=k.substring(k.length-q.length,k.length)===q}return m},xf=function(a,b){return!1===a?!1:a||b||wf()};var yf=/^\w+$/,zf=/^[\w-]+$/,Af=/^~?[\w-]+$/,Bf={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Cf=function(){if(!te("gtag_cs_api")||!Hc())return!0;var a=Fc("ad_storage");return null==a?!0:!!a},Df=function(a,b){Gc("ad_storage")?Cf()?a():Kc(a,"ad_storage"):b?J("TAGGING",3):Jc(function(){Df(a,!0)},["ad_storage"])},Gf=function(a){var b=[];if(!G.cookie)return b;var c=ve(a,G.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Ef(c[d]);e&&-1===n(b,e)&&b.push(e)}return Ff(b)};
function Hf(a){return a&&"string"==typeof a&&a.match(yf)?a:"_gcl"}
var Jf=function(){var a=pe(F.location.href),b=ne(a,"query",!1,void 0,"gclid"),c=ne(a,"query",!1,void 0,"gclsrc"),d=ne(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||ke(e,"gclid",void 0);c=c||ke(e,"gclsrc",void 0)}return If(b,c,d)},If=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(zf))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":te("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Lf=function(a){var b=Jf();Df(function(){return Kf(b,a)})};
function Kf(a,b,c){function d(m,q){var r=Mf(m,e);r&&(Ee(r,q,f),h=!0)}b=b||{};var e=Hf(b.prefix);c=c||Ea();var f=Me(b,c,!0);f.Da="ad_storage";var h=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.ji?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return h}
var Of=function(a,b){var c=pf(!0);Df(function(){for(var d=Hf(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Bf[f]){var h=Mf(f,d),k=c[h];if(k){var l=Math.min(Nf(k),Ea()),m;b:{for(var q=l,r=ve(h,G.cookie,void 0,"ad_storage"),u=0;u<r.length;++u)if(Nf(r[u])>q){m=!0;break b}m=!1}if(!m){var p=Me(b,l,!0);p.Da="ad_storage";Ee(h,k,p)}}}}Kf(If(c.gclid,c.gclsrc),b)})},Mf=function(a,b){var c=Bf[a];if(void 0!==c)return b+c},Nf=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Ef(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Pf=function(a,b,c,d,e){if(ra(b)){var f=Hf(e),h=function(){for(var k={},l=0;l<a.length;++l){var m=Mf(a[l],f);if(m){var q=ve(m,G.cookie,void 0,"ad_storage");q.length&&(k[m]=q.sort()[q.length-1])}}return k};Df(function(){uf(h,b,c,d)})}},Ff=function(a){return a.filter(function(b){return Af.test(b)})},Qf=function(a,b){for(var c=Hf(b.prefix),d={},e=0;e<a.length;e++)Bf[a[e]]&&(d[a[e]]=Bf[a[e]]);Df(function(){xa(d,function(f,h){var k=ve(c+h,G.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=Nf(l),
q={};q[f]=[Ef(l)];Kf(q,b,m)}})})};function Rf(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Sf=function(){function a(e,f,h){h&&(e[f]=h)}var b=["aw","dc"];if(Hc()){var c=Jf();if(Rf(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);vf(function(){return d},3);vf(function(){var e={};return e._up="1",e},1)}}},Tf=function(){var a;if(Cf()){for(var b=[],c=G.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({pd:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].pd]||(h[b[k].pd]=[]),h[b[k].pd].push({timestamp:l[1],zg:l[2]}))}a=h}else a={};return a};var Uf=/^\d+\.fls\.doubleclick\.net$/;function Vf(a,b){Gc(D.m)?Oc(D.m)?a():Qc(a):b?J("GTM",42):Rc(function(){Vf(a,!0)},[D.m])}function Wf(a){var b=pe(F.location.href),c=ne(b,"host",!1);if(c&&c.match(Uf)){var d=ne(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Xf(a,b,c){if("aw"==a||"dc"==a){var d=Wf("gcl"+a);if(d)return d.split(".")}var e=Hf(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Oc(D.m)&&c,h;h=Jf()[a]||[];if(0<h.length)return f?["0"]:h}var k=Mf(a,e);return k?Gf(k):[]}
var Yf=function(a){var b=Wf("gac");if(b)return!Oc(D.m)&&a?"0":decodeURIComponent(b);var c=Tf(),d=[];xa(c,function(e,f){for(var h=[],k=0;k<f.length;k++)h.push(f[k].zg);h=Ff(h);h.length&&d.push(e+":"+h.join(","))});return d.join(";")},Zf=function(a,b){var c=Jf().dc||[];Vf(function(){Se(b);var d=Oe[Pe(b.prefix)],e=!1;if(d&&0<c.length){var f=ld.joined_au=ld.joined_au||{},h=b.prefix||"_gcl";if(!f[h])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;tc(l);e=f[h]=
!0}}null==a&&(a=e);if(a&&d){var m=Pe(b.prefix),q=Oe[m];q&&Re(m,q,b)}})};var $f=/[A-Z]+/,ag=/\s/,bg=function(a){if(g(a)&&(a=Ca(a),!ag.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if($f.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],w:d}}}}},dg=function(a){for(var b={},c=0;c<a.length;++c){var d=bg(a[c]);d&&(b[d.id]=d)}cg(b);var e=[];xa(b,function(f,h){e.push(h)});return e};
function cg(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.w[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var eg=function(){var a=!1;return a};var Q=function(a,b,c,d){return(2===fg()||d||"http:"!=F.location.protocol?a:b)+c},fg=function(){var a=kc(),b;if(1===a)a:{var c=qd;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=G.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var tg=function(a){return Oc(D.m)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=qe(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var ug=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),vg={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},wg={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},yg="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ag=function(a){var b=Zd("gtm.whitelist");b&&J("GTM",9);var c=b&&Ka(Ba(b),vg),d=Zd("gtm.blacklist");d||(d=Zd("tagTypeBlacklist"))&&J("GTM",3);d?
J("GTM",8):d=[];zg()&&(d=Ba(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=n(Ba(d),"google")&&J("GTM",2);var e=d&&Ka(Ba(d),wg),f={};return function(h){var k=h&&h[Fb.xa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=wd[k]||[],m=a(k,l);if(b){var q;if(q=m)a:{if(0>n(c,k))if(l&&0<l.length)for(var r=0;r<
l.length;r++){if(0>n(c,l[r])){J("GTM",11);q=!1;break a}}else{q=!1;break a}q=!0}m=q}var u=!1;if(d){var p=0<=n(e,k);if(p)u=p;else{var t=wa(e,l||[]);t&&J("GTM",10);u=t}}var w=!m||u;w||!(0<=n(l,"sandboxedScripts"))||c&&-1!==n(c,"sandboxedScripts")||(w=wa(e,yg));return f[k]=w}},zg=function(){return ug.test(F.location&&F.location.hostname)};var Bg={jg:function(a,b){b[Fb.Ad]&&"string"===typeof a&&(a=1==b[Fb.Ad]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Fb.Cd)&&null===a&&(a=b[Fb.Cd]);b.hasOwnProperty(Fb.Ed)&&void 0===a&&(a=b[Fb.Ed]);b.hasOwnProperty(Fb.Dd)&&!0===a&&(a=b[Fb.Dd]);b.hasOwnProperty(Fb.Bd)&&!1===a&&(a=b[Fb.Bd]);return a}};var Cg={active:!0,isWhitelisted:function(){return!0}},Dg=function(a){var b=ld.zones;!b&&a&&(b=ld.zones=a());return b};var Eg=function(){};var Fg=!1,Gg=0,Hg=[];function Ig(a){if(!Fg){var b=G.createEventObject,c="complete"==G.readyState,d="interactive"==G.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Fg=!0;for(var e=0;e<Hg.length;e++)I(Hg[e])}Hg.push=function(){for(var f=0;f<arguments.length;f++)I(arguments[f]);return 0}}}function Jg(){if(!Fg&&140>Gg){Gg++;try{G.documentElement.doScroll("left"),Ig()}catch(a){F.setTimeout(Jg,50)}}}var Kg=function(a){Fg?a():Hg.push(a)};var Lg={},Mg={},Ng=function(a,b,c,d){if(!Mg[a]||nd[b]||"__zone"===b)return-1;var e={};Qa(d)&&(e=C(d,e));e.id=c;e.status="timeout";return Mg[a].tags.push(e)-1},Og=function(a,b,c,d){if(Mg[a]){var e=Mg[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Pg(a){for(var b=Lg[a]||[],c=0;c<b.length;c++)b[c]();Lg[a]={push:function(d){d(kd.s,Mg[a])}}}
var Sg=function(a,b,c){Mg[a]={tags:[]};oa(b)&&Qg(a,b);c&&F.setTimeout(function(){return Pg(a)},Number(c));return Rg(a)},Qg=function(a,b){Lg[a]=Lg[a]||[];Lg[a].push(Ha(function(){return I(function(){b(kd.s,Mg[a])})}))};function Rg(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ha(function(){b++;d&&b>=c&&Pg(a)})},Vf:function(){d=!0;b>=c&&Pg(a)}}};var Tg=function(){function a(d){return!pa(d)||0>d?0:d}if(!ld._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=pa($d.get("gtm.start"))?$d.get("gtm.start"):0;ld._li={cst:a(c-b),cbt:a(sd-b)}}};var Xg={},Yg=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},Zg=!1;
var $g=function(a){F.GoogleAnalyticsObject||(F.GoogleAnalyticsObject=a||"ga");var b=F.GoogleAnalyticsObject;if(F[b])F.hasOwnProperty(b)||J("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);F[b]=c}Tg();return F[b]},ah=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Yg();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ch=function(a){},bh=function(){return F.GoogleAnalyticsObject||"ga"};function ih(a,b,c,d){var e=sb[a],f=jh(a,b,c,d);if(!f)return null;var h=Bb(e[Fb.Ud],c,[]);if(h&&h.length){var k=h[0];f=ih(k.index,{C:f,B:1===k.se?b.terminate:f,terminate:b.terminate},c,d)}return f}
function jh(a,b,c,d){function e(){if(f[Fb.qf])k();else{var v=Cb(f,c,[]),y=Ng(c.id,String(f[Fb.xa]),Number(f[Fb.Wd]),v[Fb.rf]),x=!1;v.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Ea()-A;Sd(c.id,sb[a],"5");Og(c.id,y,"success",z);h()}};v.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Ea()-A;Sd(c.id,sb[a],"6");Og(c.id,y,"failure",z);k()}};v.vtp_gtmTagId=f.tag_id;
v.vtp_gtmEventId=c.id;Sd(c.id,f,"1");var B=function(){var z=Ea()-A;Sd(c.id,f,"7");Og(c.id,y,"exception",z);x||(x=!0,k())};var A=Ea();try{Ab(v,c)}catch(z){B(z)}}}var f=sb[a],h=b.C,k=b.B,l=b.terminate;if(c.Wc(f))return null;var m=Bb(f[Fb.Xd],c,[]);if(m&&m.length){var q=m[0],r=ih(q.index,{C:h,B:k,terminate:l},c,d);if(!r)return null;h=r;k=2===q.se?l:r}if(f[Fb.Md]||f[Fb.vf]){var u=f[Fb.Md]?tb:c.wh,p=h,t=k;if(!u[a]){e=Ha(e);var w=kh(a,u,e);h=w.C;k=w.B}return function(){u[a](p,t)}}return e}
function kh(a,b,c){var d=[],e=[];b[a]=lh(d,e,c);return{C:function(){b[a]=mh;for(var f=0;f<d.length;f++)d[f]()},B:function(){b[a]=nh;for(var f=0;f<e.length;f++)e[f]()}}}function lh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function mh(a){a()}function nh(a,b){b()};var qh=function(a,b){for(var c=[],d=0;d<sb.length;d++)if(a.xb[d]){var e=sb[d];var f=b.add();try{var h=ih(d,{C:f,B:f,terminate:f},a,d);h?c.push({Ue:d,Pe:Db(e),vg:h}):(oh(d,a),f())}catch(l){f()}}b.Vf();c.sort(ph);for(var k=0;k<c.length;k++)c[k].vg();return 0<c.length};function ph(a,b){var c,d=b.Pe,e=a.Pe;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Ue,k=b.Ue;f=h>k?1:h<k?-1:0}return f}
function oh(a,b){if(!Pd)return;var c=function(d){var e=b.Wc(sb[d])?"3":"4",f=Bb(sb[d][Fb.Ud],b,[]);f&&f.length&&c(f[0].index);Sd(b.id,sb[d],e);var h=Bb(sb[d][Fb.Xd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var rh=!1,sh=function(a,b,c,d,e){if("gtm.js"==b){if(rh)return!1;rh=!0}Rd(a,b);var f=Sg(a,d,e);de(a,"event",1);de(a,"ecommerce",1);de(a,"gtm");var h={id:a,name:b,Wc:Ag(c),xb:[],wh:[],Fe:function(){J("GTM",6)}};h.xb=Jb(h);var k=qh(h,f);"gtm.js"!==b&&"gtm.sync"!==b||ch(kd.s);if(!k)return k;for(var l=0;l<h.xb.length;l++)if(h.xb[l]){var m=sb[l];if(m&&!nd[String(m[Fb.xa])])return!0}return!1};function uh(a,b){}function vh(a,b){return wh()?uh(a,b):void 0}function wh(){var a=!1;return a};var xh=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.C=function(){};this.B=function(){};this.eventId=void 0},yh=function(a){var b=new xh;b.eventModel=a;return b},zh=function(a,b){a.targetConfig=b;return a},Ah=function(a,b){a.containerConfig=b;return a},Bh=function(a,b){a.h=b;return a},Ch=function(a,b){a.globalConfig=b;return a},Dh=function(a,b){a.C=b;return a},Eh=function(a,b){a.B=b;return a};
xh.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Fh=function(a){function b(e){xa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];xa(c,function(e){d.push(e)});return d};var Gh;if(3===kd.Ob.length)Gh="g";else{var Hh="G";Gh=Hh}
var Ih={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Gh,OPT:"o"},Jh=function(a){var b=kd.s.split("-"),c=b[0].toUpperCase(),d=Ih[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===kd.Ob.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+kd.Ob+e};function Kh(){var a=!1;return a}
function Lh(a,b,c){function d(r){var u;ld.reported_gclid||(ld.reported_gclid={});u=ld.reported_gclid;var p=f+(r?"gcu":"gcs");if(!u[p]){u[p]=!0;var t=[],w=function(A,z){z&&t.push(A+"="+encodeURIComponent(z))},v="https://www.google.com";
w("gclid",Mh(b,f));w("gclsrc",h);w("gtm",Jh(!c));var B=v+"/pagead/landing?"+t.join("&");tc(B)}}var e=Jf(),f=e.gclid||"",h=e.gclsrc,k=e.dclid||"",l=!a&&(!f||h&&"aw.ds"!==h?!1:!0),m=Kh();if(l||m){var q=""+He();m?Rc(function(){d();Oc(D.m)||Qc(function(){return d(!0)})},[D.m]):d()}}
function Mh(a,b){return b}var Qi={},Ri=["G","GP"];Qi.We="";var Si=Qi.We.split(",");function Ti(){var a=ld;return a.gcq=a.gcq||new Ui}
var Vi=function(a,b,c){Ti().register(a,b,c)},Wi=function(a,b,c,d){Ti().push("event",[b,a],c,d)},Xi=function(a,b){Ti().push("config",[a],b)},Yi={},Zi=function(a){return!0},$i=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.o=null;this.h=!1},aj=function(a,b,c,d,e){this.type=a;this.o=b;this.aa=c||"";
this.h=d;this.i=e},Ui=function(){this.o={};this.i={};this.h=[]},bj=function(a,b){var c=bg(b);return a.o[c.containerId]=a.o[c.containerId]||new $i},cj=function(a,b,c){if(b){var d=bg(b);if(d&&1===bj(a,b).status&&Zi(d.prefix)){bj(a,b).status=2;var e={};Pd&&(e.timeoutId=F.setTimeout(function(){J("GTM",38);Bd()},3E3));a.push("require",[e],d.containerId);Yi[d.containerId]=Ea();if(eg()){}else{var h="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=F.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),l=vh(c,h)||k;jc(l)}}}},dj=function(a,b,c,d){if(d.aa){var e=bj(a,d.aa),
f=e.o;if(f){var h=C(c),k=C(e.targetConfig[d.aa]),l=C(e.containerConfig),m=C(e.i),q=C(a.i),r=Zd("gtm.uniqueEventId"),u=bg(d.aa).prefix,p=Eh(Dh(Ch(Bh(Ah(zh(yh(h),k),l),m),q),function(){Td(r,u,"2");}),function(){Td(r,u,"3");});try{Td(r,u,"1");f(d.aa,b,d.o,p)}catch(t){
Td(r,u,"4");}}}};
Ui.prototype.register=function(a,b,c){if(3!==bj(this,a).status){bj(this,a).o=b;bj(this,a).status=3;c&&(bj(this,a).i=c);var d=bg(a),e=Yi[d.containerId];if(void 0!==e){var f=ld[d.containerId].bootstrap,h=d.prefix.toUpperCase();ld[d.containerId]._spx&&(h=h.toLowerCase());var k=Zd("gtm.uniqueEventId"),l=h,m=Ea()-f;if(Pd&&!Gd[k]){k!==Cd&&(Ad(),Cd=k);var q=l+"."+Math.floor(f-e)+"."+Math.floor(m);Ld=Ld?Ld+","+q:"&cl="+q}delete Yi[d.containerId]}this.flush()}};
Ui.prototype.push=function(a,b,c,d){var e=Math.floor(Ea()/1E3);cj(this,c,b[0][D.sa]||this.i[D.sa]);this.h.push(new aj(a,e,c,b,d));d||this.flush()};
Ui.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==bj(this,c.aa).status&&!a)return;Pd&&F.clearTimeout(c.h[0].timeoutId);break;case "set":xa(c.h[0],function(l,m){C(La(l,m),b.i)});break;case "config":var d=c.h[0],e=!!d[D.hc];delete d[D.hc];var f=bj(this,c.aa),h=bg(c.aa),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.aa]={});f.h&&e||dj(this,D.D,d,c);f.h=!0;delete d[D.va];k?C(d,f.containerConfig):
C(d,f.targetConfig[c.aa]);break;case "event":dj(this,c.h[1],c.h[0],c)}this.h.shift()}};var ej=["GP","G"],fj="G".split(/,/);fj.push("GF");fj.push("HA");fj.push("AW");var gj=!1;gj=!0;var hj=null,ij={},jj={},kj;function lj(a,b){var c={event:a};b&&(c.eventModel=C(b),b[D.Ac]&&(c.eventCallback=b[D.Ac]),b[D.Jb]&&(c.eventTimeout=b[D.Jb]));return c}
var qj={config:function(a){},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Qa(a[2])&&void 0!=a[2])return;c=a[2]}var d=lj(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Qa(a[1])?b=C(a[1]):3==a.length&&g(a[1])&&(b={},Qa(a[2])||ra(a[2])?
b[a[1]]=C(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};var rj={policy:!0};var sj=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},uj=function(a){var b=tj(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var vj=!1,wj=[];function xj(){if(!vj){vj=!0;for(var a=0;a<wj.length;a++)I(wj[a])}}var yj=function(a){vj?I(a):wj.push(a)};var Qj=function(a){if(Pj(a))return a;this.h=a};Qj.prototype.Dg=function(){return this.h};var Pj=function(a){return!a||"object"!==Oa(a)||Qa(a)?!1:"getUntrustedUpdateValue"in a};Qj.prototype.getUntrustedUpdateValue=Qj.prototype.Dg;var Rj=[],Sj=!1,Tj=function(a){return F["dataLayer"].push(a)},Uj=function(a){var b=ld["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Vj(a){var b=a._clear;xa(a,function(f,h){"_clear"!==f&&(b&&ce(f,void 0),ce(f,h))});rd||(rd=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=xd(),a["gtm.uniqueEventId"]=d,ce("gtm.uniqueEventId",d));td=c;var e=Wj(a);td=null;switch(c){case "gtm.init":J("GTM",19),e&&J("GTM",20)}return e}
function Wj(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=ld.zones;d=e?e.checkState(kd.s,c):Cg;return d.active?sh(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Xj(){for(var a=!1;!Sj&&0<Rj.length;){Sj=!0;delete Wd.eventModel;Yd();var b=Rj.shift();if(null!=b){var c=Pj(b);if(c){var d=b;b=Pj(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Zd(h,1);if(ra(k)||Qa(k))k=C(k);Xd[h]=k}}try{if(oa(b))try{b.call($d)}catch(w){}else if(ra(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),q=m.pop(),r=l.slice(1),u=Zd(m.join("."),2);if(void 0!==u&&null!==u)try{u[q].apply(u,r)}catch(w){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&g(b[0])){var t=qj[b[0]];if(t&&(!c||!rj[b[0]])){b=t(b);break a}}b=void 0}if(!b){Sj=!1;continue}}a=Vj(b)||a}}finally{c&&Yd(!0)}}Sj=!1}
return!a}function Yj(){var a=Xj();try{sj(F["dataLayer"],kd.s)}catch(b){}return a}
var ak=function(){var a=hc("dataLayer",[]),b=hc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Kg(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});yj(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<ld.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Qj(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Rj.push.apply(Rj,d);if(300<
this.length)for(J("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return Xj()&&h};Rj.push.apply(Rj,a.slice(0));Zj()&&I(Yj)},Zj=function(){var a=!0;return a};var bk={};bk.Kb=new String("undefined");
var ck=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===bk.Kb?b:a[d]);return c.join("")}};ck.prototype.toString=function(){return this.h("undefined")};ck.prototype.valueOf=ck.prototype.toString;bk.Ef=ck;bk.Ic={};bk.mg=function(a){return new ck(a)};var dk={};bk.oh=function(a,b){var c=xd();dk[c]=[a,b];return c};bk.ne=function(a){var b=a?0:1;return function(c){var d=dk[c];if(d&&"function"===typeof d[b])d[b]();dk[c]=void 0}};bk.Mg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};bk.eh=function(a){if(a===bk.Kb)return a;var b=xd();bk.Ic[b]=a;return'google_tag_manager["'+kd.s+'"].macro('+b+")"};bk.Wg=function(a,b,c){a instanceof bk.Ef&&(a=a.h(bk.oh(b,c)),b=na);return{Uc:a,C:b}};var ek=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||pc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},fk=function(a){ld.hasOwnProperty("autoEventsSettings")||(ld.autoEventsSettings={});var b=ld.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},gk=function(a,b,c){fk(a)[b]=c},hk=function(a,b,c,d){var e=fk(a),f=Fa(e,b,d);e[b]=c(f)},ik=function(a,b,c){var d=fk(a);return Fa(d,b,c)};var jk=["input","select","textarea"],kk=["button","hidden","image","reset","submit"],lk=function(a){var b=a.tagName.toLowerCase();return!ta(jk,function(c){return c===b})||"input"===b&&ta(kk,function(c){return c===a.type.toLowerCase()})?!1:!0},mk=function(a){return a.form?a.form.tagName?a.form:G.getElementById(a.form):sc(a,["form"],100)},nk=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(lk(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var ok=!!F.MutationObserver,pk=void 0,qk=function(a){if(!pk){var b=function(){var c=G.body;if(c)if(ok)(new MutationObserver(function(){for(var e=0;e<pk.length;e++)I(pk[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;nc(c,"DOMNodeInserted",function(){d||(d=!0,I(function(){d=!1;for(var e=0;e<pk.length;e++)I(pk[e])}))})}};pk=[];G.body?b():I(b)}pk.push(a)};var Lk=F.clearTimeout,Mk=F.setTimeout,S=function(a,b,c){if(eg()){b&&I(b)}else return jc(a,b,c)},Nk=function(){return F.location.href},Ok=function(a){return ne(pe(a),"fragment")},Pk=function(a){return oe(pe(a))},T=function(a,b){return Zd(a,b||2)},Qk=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Tj(a)):d=Tj(a);return d},Rk=function(a,b){F[a]=b},V=function(a,b,c){b&&(void 0===F[a]||c&&!F[a])&&(F[a]=
b);return F[a]},Sk=function(a,b,c){return ve(a,b,void 0===c?!0:!!c)},Tk=function(a,b,c){return 0===Ee(a,b,c)},Uk=function(a,b){if(eg()){b&&I(b)}else lc(a,b)},Vk=function(a){return!!ik(a,"init",!1)},Wk=function(a){gk(a,"init",!0)},Xk=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":qd;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(Q("https://","http://",c))},Yk=function(a,b){var c=a[b];return c};
var Zk=bk.Wg;var vl=new va;function wl(a,b){function c(h){var k=pe(h),l=ne(k,"protocol"),m=ne(k,"host",!0),q=ne(k,"port"),r=ne(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==q||"https"==l&&"443"==q)l="web",q="default";return[l,m,q,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function xl(a){return yl(a)?1:0}
function yl(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ra(c)){for(var d=0;d<c.length;d++)if(xl({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(w){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var q;q=String(b).split(",");return 0<=n(q,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var r;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,t=vl.get(p);t||(t=new RegExp(c,u),vl.set(p,t));r=t.test(b)}catch(w){r=!1}return r;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return wl(b,
c)}return!1};var zl=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Al={},Bl=encodeURI,W=encodeURIComponent,Cl=mc;var Dl=function(a,b){if(!a)return!1;var c=ne(pe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var El=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Al.Ng=function(){var a=!1;return a};var Sm=function(){var a=F.gaGlobal=F.gaGlobal||{};a.hid=a.hid||ua();return a.hid};var cn=window,dn=document,en=function(a){var b=cn._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===cn["ga-disable-"+a])return!0;try{var c=cn.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=re("AMP_TOKEN",String(dn.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return dn.getElementById("__gaOptOutExtension")?!0:!1};
function hn(a,b){delete b.eventModel[D.va];if(a!==D.D){var c=b.getWithConfig(D.bc);if(ra(c)){J("GTM",26);for(var d={},e=0;e<c.length;e++){var f=c[e],h=b.getWithConfig(f);void 0!==h&&(d[f]=h)}b.eventModel=d}}kn(b.eventModel)}var kn=function(a){xa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[D.ka]||{};xa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var nn=function(a,b,c){Wi(b,c,a)},on=function(a,b,c){Wi(b,c,a,!0)},qn=function(a,b){};
function pn(a,b){}var Z={a:{}};


Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(ee(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=T("gtm.referrer",1)||G.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?ne(pe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Pk(String(b)):String(b)})}();

Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=T("gtm.url",1);c=c||Nk();var d=b[a("vtp_component")];if(!d||"URL"==d)return Pk(String(c));var e=pe(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?ra(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var q=0;q<m.length;q++){var r=ne(e,"QUERY",void 0,void 0,m[q]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=ne(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=T(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.tl=["google"],function(){function a(b){return function(){if(b.Zc&&b.ad>=b.Zc)b.Vc&&V("self").clearInterval(b.Vc);else{b.ad++;var c=(new Date).getTime();Qk({event:b.fa,"gtm.timerId":b.Vc,"gtm.timerEventNumber":b.ad,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Zc,"gtm.timerStartTime":b.Te,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Te,"gtm.triggers":b.Ah})}}}(function(b){Z.__tl=b;Z.__tl.b="tl";Z.__tl.g=!0;Z.__tl.priorityOverride=0})(function(b){I(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{fa:b.vtp_eventName,ad:0,interval:Number(b.vtp_interval),Zc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Ah:String(b.vtp_uniqueTriggerId||"0"),Te:(new Date).getTime()};c.Vc=V("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={};if(d.vtp_gaSettings){var m=d.vtp_gaSettings;C(El(m.vtp_fieldsToSet,"fieldName","value"),f);C(El(m.vtp_contentGroup,"index","group"),h);C(El(m.vtp_dimension,"index","dimension"),k);C(El(m.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;m.vtp_fieldsToSet=void 0;m.vtp_contentGroup=void 0;m.vtp_dimension=void 0;m.vtp_metric=void 0;var q=C(m);d=C(d,q)}C(El(d.vtp_fieldsToSet,"fieldName","value"),f);C(El(d.vtp_contentGroup,
"index","group"),h);C(El(d.vtp_dimension,"index","dimension"),k);C(El(d.vtp_metric,"index","metric"),l);var r=$g(d.vtp_functionName);if(oa(r)){var u="",p="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(p=d.vtp_trackerName,u=p+"."):(p="gtm"+xd(),u=p+".");var t={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},
v=function(O){var M=[].slice.call(arguments,0);M[0]=u+M[0];r.apply(window,M)},y=function(O,M){return void 0===M?M:O(M)},x=function(O,M){if(M)for(var Ga in M)M.hasOwnProperty(Ga)&&v("set",O+Ga,M[Ga])},B=function(){},A=function(O,M,Ga){var Pb=0;if(O)for(var Da in O)if(O.hasOwnProperty(Da)&&(Ga&&t[Da]||!Ga&&void 0===t[Da])){var bb=w[Da]?Aa(O[Da]):O[Da];
"anonymizeIp"!=Da||bb||(bb=void 0);M[Da]=bb;Pb++}return Pb},z={name:p};A(f,z,!0);r("create",d.vtp_trackingId||e.trackingId,z);v("set","&gtm",Jh(!0));d.vtp_enableRecaptcha&&
v("require","recaptcha","recaptcha.js");(function(O,M){void 0!==d[M]&&v("set",O,d[M])})("nonInteraction","vtp_nonInteraction");x("contentGroup",h);x("dimension",k);x("metric",l);var E={};A(f,E,!1)&&v("set",E);var H;d.vtp_enableLinkId&&v("require","linkid","linkid.js");v("set","hitCallback",function(){var O=f&&f.hitCallback;oa(O)&&
O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(v("require","ec","ec.js"),B());var N={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:y(String,d.vtp_eventLabel||e.label),eventValue:y(za,d.vtp_eventValue||e.value)};A(H,N,!1);v("send",N);}else if("TRACK_SOCIAL"==
d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(v("require","ec","ec.js"),B());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var fa="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require",
"displayfeatures",void 0,{cookieName:fa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var Y="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","adfeatures",{cookieName:Y})}H?v("send","pageview",H):v("send","pageview");}if(!a){var sa=
d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(sa="internal/"+sa);a=!0;var ya=vh(f._x_19,"/analytics.js"),Qb=Q("https:","http:","//www.google-analytics.com/"+sa,f&&f.forceSSL);S("analytics.js"===sa&&ya?ya:Qb,function(){var O=Yg();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else I(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();





Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){I(b.vtp_gtmOnSuccess);var c,d,e,f;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain,b.vtp_enableCookieFlagsFeature&&(f=b.vtp_cookieFlags));var h=null;b.vtp_enableCookieUpdateFeature&&(h=!0,void 0!==b.vtp_cookieUpdate&&(h=!!b.vtp_cookieUpdate));var k={prefix:e,path:c,domain:d,flags:f};b.vtp_enableCrossDomainFeature&&
(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||wf())&&Of(a,k));Lf(k);Qf(["aw","dc"],k);Zf(h,k);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var m=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),q=b.vtp_urlPosition,r=!!b.vtp_formDecoration;Pf(a,m,q,r,l);}var u=T(D.F);
Lh(!1,void 0!=u&&!1!==u);b.vtp_enableUrlPassthroughFeature&&b.vtp_enableUrlPassthrough&&Sf()})}();

Z.a.aev=["google"],function(){function a(p,t){var w=ee(p,"gtm");if(w)return w[t]}function b(p,t,w,v){v||(v="element");var y=p+"."+t,x;if(q.hasOwnProperty(y))x=q[y];else{var B=a(p,v);if(B&&(x=w(B),q[y]=x,r.push(y),35<r.length)){var A=r.shift();delete q[A]}}return x}function c(p,t,w){var v=a(p,u[t]);return void 0!==v?v:w}function d(p,t){if(!p)return!1;var w=e(Nk());ra(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var v=[w],y=0;y<t.length;y++)if(t[y]instanceof RegExp){if(t[y].test(p))return!1}else{var x=
t[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;v.push(e(x))}}return!Dl(p,v)}function e(p){m.test(p)||(p="http://"+p);return ne(pe(p),"HOST",!0)}function f(p,t,w){switch(p){case "SUBMIT_TEXT":return b(t,"FORM."+p,h,"formSubmitElement")||w;case "LENGTH":var v=b(t,"FORM."+p,k);return void 0===v?w:v;case "INTERACTED_FIELD_ID":return l(t,"id",w);case "INTERACTED_FIELD_NAME":return l(t,"name",w);case "INTERACTED_FIELD_TYPE":return l(t,"type",w);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");
return void 0===y?w:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?w:x;default:return w}}function h(p){switch(p.tagName.toLowerCase()){case "input":return pc(p,"value");case "button":return qc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var t=0,w=0;w<p.elements.length;w++)lk(p.elements[w])&&t++;return t}}function l(p,t,w){var v=a(p,"interactedFormField");return v&&pc(v,t)||w}var m=/^https?:\/\//i,q={},r=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var t=p.vtp_gtmEventId,w=p.vtp_defaultValue,v=p.vtp_varType;switch(v){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||
w;case "TEXT":return b(t,v,qc)||w;case "URL":var x;a:{var B=String(a(t,"elementUrl")||w||""),A=pe(B),z=String(p.vtp_component||"URL");switch(z){case "URL":x=B;break a;case "IS_OUTBOUND":x=d(B,p.vtp_affiliatedDomains);break a;default:x=ne(A,z,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(t,v,w);else{var H=p.vtp_attribute,N=a(t,"element");E=N&&pc(N,H)||w||""}return E;case "MD":var P=p.vtp_mdValue,R=b(t,"MD",xk);return P&&R?Ak(R,P)||
w:R||w;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),t,w);default:return c(t,v,w)}})}();
Z.a.gas=["google"],function(){function a(b,c,d){b.vtp_fieldsToSet=b.vtp_fieldsToSet||[];var e=b[c];void 0!==e&&(b.vtp_fieldsToSet.push({fieldName:d,value:e}),delete b[c])}(function(b){Z.__gas=b;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(b){var c=C(b),d=c;d[Fb.xa]=null;d[Fb.hf]=null;c=d;a(c,"vtp_cookieDomain","cookieDomain");return c})}();


Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=V("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(k){function l(){var v=!1;v&&Hc()?
Rc(function(){var y=Oc(D.m),x=!y&&void 0!=T(D.F)&&!1!==T(D.F);!k.vtp_transportUrl&&x&&(m.google_transport_url="https://pagead2.googlesyndication.com/");u("gcs",Pc());b.push(m);y||Qc(function(){m=C(m);!k.vtp_transportUrl&&m.google_transport_url&&delete m.google_transport_url;u("gcs",Pc());u("gcu","1");b.push(m)})},[D.m]):b.push(m)}Tg();var m={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,google_conversion_value:k.vtp_conversionValue||
0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Jh()};k.vtp_rdp&&(m.google_restricted_data_processing=!0);void 0!=T(D.F)&&!1!==T(D.F)&&(m.google_gtm_url_processor=function(v){return v=tg(v)});var q=function(v){return function(y,x,B){var A="DATA_LAYER"==v?T(B):k[x];A&&(m[y]=A)}},r=q("JSON");r("google_conversion_currency","vtp_currencyCode");r("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(r=q(k.vtp_productReportingDataSource),
r("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),r("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),r("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),r("google_basket_discount","vtp_discount","discount"),r("google_conversion_items","vtp_items","items"),m.google_conversion_items&&m.google_conversion_items.map&&(m.google_conversion_items=m.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}})));
var u=function(v,y){(m.google_additional_conversion_params=m.google_additional_conversion_params||{})[v]=y},p=function(v){return function(y,x,B,A){var z="DATA_LAYER"==v?T(B):k[x];A(z)&&u(y,z)}};var t=vh(k.vtp_transportUrl,"/pagead/conversion_async.js");t||(t=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":
"https://www.google.com/pagead/conversion_async.js");k.vtp_enableNewCustomerReporting&&(r=p(k.vtp_newCustomerReportingDataSource),r("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),r("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(m.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),m.google_read_gcl_cookie_opt_out=
!1):m.google_read_gcl_cookie_opt_out=!0;var w=!0;w&&l();a||(a=!0,S(t,f(),e(t)))};
Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=El(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();





Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){I(a.vtp_gtmOnFailure)})}();
Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=G.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var q=k.getAttribute("data-gtmsrc");q&&(m.src=q,ic(m,l));d.insertBefore(m,null);q||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(u){I(h)}}}var c=function(d){if(G.body){var e=
d.vtp_gtmOnFailure,f=Zk(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Uc,k=f.C;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(G.body,rc(h),k,e)()}else Mk(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();








var rn={};rn.macro=function(a){if(bk.Ic.hasOwnProperty(a))return bk.Ic[a]},rn.onHtmlSuccess=bk.ne(!0),rn.onHtmlFailure=bk.ne(!1);rn.dataLayer=$d;rn.callback=function(a){vd.hasOwnProperty(a)&&oa(vd[a])&&vd[a]();delete vd[a]};function sn(){ld[kd.s]=rn;Ia(wd,Z.a);wb=wb||bk;xb=Bg}
function tn(){se.gtm_3pds=!0;ld=F.google_tag_manager=F.google_tag_manager||{};if(ld[kd.s]){var a=ld.zones;a&&a.unregisterChild(kd.s);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)pb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)sb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var q=l[m],r={},u=0;u<q.length;u++)r[q[u][0]]=Array.prototype.slice.call(q[u],1);qb.push(r)}ub=Z;vb=xl;sn();ak();Fg=!1;Gg=0;if("interactive"==G.readyState&&!G.createEventObject||"complete"==G.readyState)Ig();
else{nc(G,"DOMContentLoaded",Ig);nc(G,"readystatechange",Ig);if(G.createEventObject&&G.documentElement.doScroll){var p=!0;try{p=!F.frameElement}catch(y){}p&&Jg()}nc(F,"load",Ig)}vj=!1;"complete"===G.readyState?xj():nc(F,"load",xj);a:{if(!Pd)break a;F.setInterval(Qd,
864E5);}sd=(new Date).getTime();}}
(function(a){
a()})(tn);

})()
