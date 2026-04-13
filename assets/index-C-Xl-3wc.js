function Jh(e,r){for(var a=0;a<r.length;a++){const n=r[a];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(n,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();function Kh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kd={exports:{}},hs={},Nd={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zn=Symbol.for("react.element"),Yh=Symbol.for("react.portal"),Xh=Symbol.for("react.fragment"),Zh=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),tf=Symbol.for("react.provider"),rf=Symbol.for("react.context"),af=Symbol.for("react.forward_ref"),nf=Symbol.for("react.suspense"),sf=Symbol.for("react.memo"),lf=Symbol.for("react.lazy"),Bc=Symbol.iterator;function of(e){return e===null||typeof e!="object"?null:(e=Bc&&e[Bc]||e["@@iterator"],typeof e=="function"?e:null)}var Td={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pd=Object.assign,_d={};function za(e,r,a){this.props=e,this.context=r,this.refs=_d,this.updater=a||Td}za.prototype.isReactComponent={};za.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};za.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qd(){}qd.prototype=za.prototype;function So(e,r,a){this.props=e,this.context=r,this.refs=_d,this.updater=a||Td}var wo=So.prototype=new qd;wo.constructor=So;Pd(wo,za.prototype);wo.isPureReactComponent=!0;var Uc=Array.isArray,Od=Object.prototype.hasOwnProperty,Co={current:null},Id={key:!0,ref:!0,__self:!0,__source:!0};function Dd(e,r,a){var n,i={},s=null,l=null;if(r!=null)for(n in r.ref!==void 0&&(l=r.ref),r.key!==void 0&&(s=""+r.key),r)Od.call(r,n)&&!Id.hasOwnProperty(n)&&(i[n]=r[n]);var o=arguments.length-2;if(o===1)i.children=a;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)i[n]===void 0&&(i[n]=o[n]);return{$$typeof:zn,type:e,key:s,ref:l,props:i,_owner:Co.current}}function cf(e,r){return{$$typeof:zn,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function Eo(e){return typeof e=="object"&&e!==null&&e.$$typeof===zn}function uf(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return r[a]})}var $c=/\/+/g;function zs(e,r){return typeof e=="object"&&e!==null&&e.key!=null?uf(""+e.key):r.toString(36)}function Ci(e,r,a,n,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case zn:case Yh:l=!0}}if(l)return l=e,i=i(l),e=n===""?"."+zs(l,0):n,Uc(i)?(a="",e!=null&&(a=e.replace($c,"$&/")+"/"),Ci(i,r,a,"",function(u){return u})):i!=null&&(Eo(i)&&(i=cf(i,a+(!i.key||l&&l.key===i.key?"":(""+i.key).replace($c,"$&/")+"/")+e)),r.push(i)),1;if(l=0,n=n===""?".":n+":",Uc(e))for(var o=0;o<e.length;o++){s=e[o];var c=n+zs(s,o);l+=Ci(s,r,a,c,i)}else if(c=of(e),typeof c=="function")for(e=c.call(e),o=0;!(s=e.next()).done;)s=s.value,c=n+zs(s,o++),l+=Ci(s,r,a,c,i);else if(s==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function ri(e,r,a){if(e==null)return e;var n=[],i=0;return Ci(e,n,"","",function(s){return r.call(a,s,i++)}),n}function df(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var lt={current:null},Ei={transition:null},pf={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:Ei,ReactCurrentOwner:Co};function Fd(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:ri,forEach:function(e,r,a){ri(e,function(){r.apply(this,arguments)},a)},count:function(e){var r=0;return ri(e,function(){r++}),r},toArray:function(e){return ri(e,function(r){return r})||[]},only:function(e){if(!Eo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};de.Component=za;de.Fragment=Xh;de.Profiler=ef;de.PureComponent=So;de.StrictMode=Zh;de.Suspense=nf;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pf;de.act=Fd;de.cloneElement=function(e,r,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Pd({},e.props),i=e.key,s=e.ref,l=e._owner;if(r!=null){if(r.ref!==void 0&&(s=r.ref,l=Co.current),r.key!==void 0&&(i=""+r.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in r)Od.call(r,c)&&!Id.hasOwnProperty(c)&&(n[c]=r[c]===void 0&&o!==void 0?o[c]:r[c])}var c=arguments.length-2;if(c===1)n.children=a;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];n.children=o}return{$$typeof:zn,type:e.type,key:i,ref:s,props:n,_owner:l}};de.createContext=function(e){return e={$$typeof:rf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tf,_context:e},e.Consumer=e};de.createElement=Dd;de.createFactory=function(e){var r=Dd.bind(null,e);return r.type=e,r};de.createRef=function(){return{current:null}};de.forwardRef=function(e){return{$$typeof:af,render:e}};de.isValidElement=Eo;de.lazy=function(e){return{$$typeof:lf,_payload:{_status:-1,_result:e},_init:df}};de.memo=function(e,r){return{$$typeof:sf,type:e,compare:r===void 0?null:r}};de.startTransition=function(e){var r=Ei.transition;Ei.transition={};try{e()}finally{Ei.transition=r}};de.unstable_act=Fd;de.useCallback=function(e,r){return lt.current.useCallback(e,r)};de.useContext=function(e){return lt.current.useContext(e)};de.useDebugValue=function(){};de.useDeferredValue=function(e){return lt.current.useDeferredValue(e)};de.useEffect=function(e,r){return lt.current.useEffect(e,r)};de.useId=function(){return lt.current.useId()};de.useImperativeHandle=function(e,r,a){return lt.current.useImperativeHandle(e,r,a)};de.useInsertionEffect=function(e,r){return lt.current.useInsertionEffect(e,r)};de.useLayoutEffect=function(e,r){return lt.current.useLayoutEffect(e,r)};de.useMemo=function(e,r){return lt.current.useMemo(e,r)};de.useReducer=function(e,r,a){return lt.current.useReducer(e,r,a)};de.useRef=function(e){return lt.current.useRef(e)};de.useState=function(e){return lt.current.useState(e)};de.useSyncExternalStore=function(e,r,a){return lt.current.useSyncExternalStore(e,r,a)};de.useTransition=function(){return lt.current.useTransition()};de.version="18.3.1";Nd.exports=de;var A=Nd.exports;const mf=Kh(A),hf=Jh({__proto__:null,default:mf},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ff=A,xf=Symbol.for("react.element"),gf=Symbol.for("react.fragment"),vf=Object.prototype.hasOwnProperty,jf=ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bf={key:!0,ref:!0,__self:!0,__source:!0};function zd(e,r,a){var n,i={},s=null,l=null;a!==void 0&&(s=""+a),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(l=r.ref);for(n in r)vf.call(r,n)&&!bf.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)i[n]===void 0&&(i[n]=r[n]);return{$$typeof:xf,type:e,key:s,ref:l,props:i,_owner:jf.current}}hs.Fragment=gf;hs.jsx=zd;hs.jsxs=zd;kd.exports=hs;var t=kd.exports,Bd={exports:{}},bt={},Ud={exports:{}},$d={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(O,B){var U=O.length;O.push(B);e:for(;0<U;){var ae=U-1>>>1,ue=O[ae];if(0<i(ue,B))O[ae]=B,O[U]=ue,U=ae;else break e}}function a(O){return O.length===0?null:O[0]}function n(O){if(O.length===0)return null;var B=O[0],U=O.pop();if(U!==B){O[0]=U;e:for(var ae=0,ue=O.length,ye=ue>>>1;ae<ye;){var Re=2*(ae+1)-1,Fe=O[Re],we=Re+1,Ve=O[we];if(0>i(Fe,U))we<ue&&0>i(Ve,Fe)?(O[ae]=Ve,O[we]=U,ae=we):(O[ae]=Fe,O[Re]=U,ae=Re);else if(we<ue&&0>i(Ve,U))O[ae]=Ve,O[we]=U,ae=we;else break e}}return B}function i(O,B){var U=O.sortIndex-B.sortIndex;return U!==0?U:O.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var c=[],u=[],m=1,d=null,f=3,y=!1,g=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var B=a(u);B!==null;){if(B.callback===null)n(u);else if(B.startTime<=O)n(u),B.sortIndex=B.expirationTime,r(c,B);else break;B=a(u)}}function L(O){if(b=!1,v(O),!g)if(a(c)!==null)g=!0,G(k);else{var B=a(u);B!==null&&re(L,B.startTime-O)}}function k(O,B){g=!1,b&&(b=!1,h(E),E=-1),y=!0;var U=f;try{for(v(B),d=a(c);d!==null&&(!(d.expirationTime>B)||O&&!le());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,f=d.priorityLevel;var ue=ae(d.expirationTime<=B);B=e.unstable_now(),typeof ue=="function"?d.callback=ue:d===a(c)&&n(c),v(B)}else n(c);d=a(c)}if(d!==null)var ye=!0;else{var Re=a(u);Re!==null&&re(L,Re.startTime-B),ye=!1}return ye}finally{d=null,f=U,y=!1}}var P=!1,_=null,E=-1,V=5,F=-1;function le(){return!(e.unstable_now()-F<V)}function ee(){if(_!==null){var O=e.unstable_now();F=O;var B=!0;try{B=_(!0,O)}finally{B?ve():(P=!1,_=null)}}else P=!1}var ve;if(typeof p=="function")ve=function(){p(ee)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,q=te.port2;te.port1.onmessage=ee,ve=function(){q.postMessage(null)}}else ve=function(){S(ee,0)};function G(O){_=O,P||(P=!0,ve())}function re(O,B){E=S(function(){O(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,G(k))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return a(c)},e.unstable_next=function(O){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var U=f;f=B;try{return O()}finally{f=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var U=f;f=O;try{return B()}finally{f=U}},e.unstable_scheduleCallback=function(O,B,U){var ae=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ae+U:ae):U=ae,O){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=U+ue,O={id:m++,callback:B,priorityLevel:O,startTime:U,expirationTime:ue,sortIndex:-1},U>ae?(O.sortIndex=U,r(u,O),a(c)===null&&O===a(u)&&(b?(h(E),E=-1):b=!0,re(L,U-ae))):(O.sortIndex=ue,r(c,O),g||y||(g=!0,G(k))),O},e.unstable_shouldYield=le,e.unstable_wrapCallback=function(O){var B=f;return function(){var U=f;f=B;try{return O.apply(this,arguments)}finally{f=U}}}})($d);Ud.exports=$d;var yf=Ud.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf=A,jt=yf;function D(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gd=new Set,bn={};function na(e,r){Pa(e,r),Pa(e+"Capture",r)}function Pa(e,r){for(bn[e]=r,e=0;e<r.length;e++)Gd.add(r[e])}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),El=Object.prototype.hasOwnProperty,wf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gc={},Vc={};function Cf(e){return El.call(Vc,e)?!0:El.call(Gc,e)?!1:wf.test(e)?Vc[e]=!0:(Gc[e]=!0,!1)}function Ef(e,r,a,n){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Af(e,r,a,n){if(r===null||typeof r>"u"||Ef(e,r,a,n))return!0;if(n)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function ot(e,r,a,n,i,s,l){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=a,this.propertyName=e,this.type=r,this.sanitizeURL=s,this.removeEmptyString=l}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){We[e]=new ot(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];We[r]=new ot(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){We[e]=new ot(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){We[e]=new ot(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){We[e]=new ot(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){We[e]=new ot(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){We[e]=new ot(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){We[e]=new ot(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){We[e]=new ot(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ao=/[\-:]([a-z])/g;function Ro(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(Ao,Ro);We[r]=new ot(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(Ao,Ro);We[r]=new ot(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(Ao,Ro);We[r]=new ot(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){We[e]=new ot(e,1,!1,e.toLowerCase(),null,!1,!1)});We.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){We[e]=new ot(e,1,!1,e.toLowerCase(),null,!0,!0)});function Lo(e,r,a,n){var i=We.hasOwnProperty(r)?We[r]:null;(i!==null?i.type!==0:n||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Af(r,a,i,n)&&(a=null),n||i===null?Cf(r)&&(a===null?e.removeAttribute(r):e.setAttribute(r,""+a)):i.mustUseProperty?e[i.propertyName]=a===null?i.type===3?!1:"":a:(r=i.attributeName,n=i.attributeNamespace,a===null?e.removeAttribute(r):(i=i.type,a=i===3||i===4&&a===!0?"":""+a,n?e.setAttributeNS(n,r,a):e.setAttribute(r,a))))}var mr=Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ai=Symbol.for("react.element"),ma=Symbol.for("react.portal"),ha=Symbol.for("react.fragment"),Mo=Symbol.for("react.strict_mode"),Al=Symbol.for("react.profiler"),Vd=Symbol.for("react.provider"),Hd=Symbol.for("react.context"),ko=Symbol.for("react.forward_ref"),Rl=Symbol.for("react.suspense"),Ll=Symbol.for("react.suspense_list"),No=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),Qd=Symbol.for("react.offscreen"),Hc=Symbol.iterator;function Ha(e){return e===null||typeof e!="object"?null:(e=Hc&&e[Hc]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Object.assign,Bs;function an(e){if(Bs===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);Bs=r&&r[1]||""}return`
`+Bs+e}var Us=!1;function $s(e,r){if(!e||Us)return"";Us=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(u){var n=u}Reflect.construct(e,[],r)}else{try{r.call()}catch(u){n=u}e.call(r.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=n.stack.split(`
`),l=i.length-1,o=s.length-1;1<=l&&0<=o&&i[l]!==s[o];)o--;for(;1<=l&&0<=o;l--,o--)if(i[l]!==s[o]){if(l!==1||o!==1)do if(l--,o--,0>o||i[l]!==s[o]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=o);break}}}finally{Us=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?an(e):""}function Rf(e){switch(e.tag){case 5:return an(e.type);case 16:return an("Lazy");case 13:return an("Suspense");case 19:return an("SuspenseList");case 0:case 2:case 15:return e=$s(e.type,!1),e;case 11:return e=$s(e.type.render,!1),e;case 1:return e=$s(e.type,!0),e;default:return""}}function Ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ha:return"Fragment";case ma:return"Portal";case Al:return"Profiler";case Mo:return"StrictMode";case Rl:return"Suspense";case Ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hd:return(e.displayName||"Context")+".Consumer";case Vd:return(e._context.displayName||"Context")+".Provider";case ko:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case No:return r=e.displayName||null,r!==null?r:Ml(e.type)||"Memo";case vr:r=e._payload,e=e._init;try{return Ml(e(r))}catch{}}return null}function Lf(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ml(r);case 8:return r===Mo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function qr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wd(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Mf(e){var r=Wd(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),n=""+e[r];if(!e.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,s=a.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(l){n=""+l,s.call(this,l)}}),Object.defineProperty(e,r,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function ni(e){e._valueTracker||(e._valueTracker=Mf(e))}function Jd(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var a=r.getValue(),n="";return e&&(n=Wd(e)?e.checked?"true":"false":e.value),e=n,e!==a?(r.setValue(e),!0):!1}function Bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kl(e,r){var a=r.checked;return Te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function Qc(e,r){var a=r.defaultValue==null?"":r.defaultValue,n=r.checked!=null?r.checked:r.defaultChecked;a=qr(r.value!=null?r.value:a),e._wrapperState={initialChecked:n,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Kd(e,r){r=r.checked,r!=null&&Lo(e,"checked",r,!1)}function Nl(e,r){Kd(e,r);var a=qr(r.value),n=r.type;if(a!=null)n==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Tl(e,r.type,a):r.hasOwnProperty("defaultValue")&&Tl(e,r.type,qr(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Wc(e,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var n=r.type;if(!(n!=="submit"&&n!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,a||r===e.value||(e.value=r),e.defaultValue=r}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function Tl(e,r,a){(r!=="number"||Bi(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var nn=Array.isArray;function Aa(e,r,a,n){if(e=e.options,r){r={};for(var i=0;i<a.length;i++)r["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=r.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+qr(a),r=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function Pl(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(D(91));return Te({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jc(e,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(D(92));if(nn(a)){if(1<a.length)throw Error(D(93));a=a[0]}r=a}r==null&&(r=""),a=r}e._wrapperState={initialValue:qr(a)}}function Yd(e,r){var a=qr(r.value),n=qr(r.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),r.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),n!=null&&(e.defaultValue=""+n)}function Kc(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Xd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _l(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Xd(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ii,Zd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,n,i){MSApp.execUnsafeLocalFunction(function(){return e(r,a,n,i)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(ii=ii||document.createElement("div"),ii.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ii.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function yn(e,r){if(r){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=r;return}}e.textContent=r}var un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kf=["Webkit","ms","Moz","O"];Object.keys(un).forEach(function(e){kf.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),un[r]=un[e]})});function ep(e,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||un.hasOwnProperty(e)&&un[e]?(""+r).trim():r+"px"}function tp(e,r){e=e.style;for(var a in r)if(r.hasOwnProperty(a)){var n=a.indexOf("--")===0,i=ep(a,r[a],n);a==="float"&&(a="cssFloat"),n?e.setProperty(a,i):e[a]=i}}var Nf=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ql(e,r){if(r){if(Nf[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(D(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(D(61))}if(r.style!=null&&typeof r.style!="object")throw Error(D(62))}}function Ol(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Il=null;function To(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dl=null,Ra=null,La=null;function Yc(e){if(e=$n(e)){if(typeof Dl!="function")throw Error(D(280));var r=e.stateNode;r&&(r=js(r),Dl(e.stateNode,e.type,r))}}function rp(e){Ra?La?La.push(e):La=[e]:Ra=e}function ap(){if(Ra){var e=Ra,r=La;if(La=Ra=null,Yc(e),r)for(e=0;e<r.length;e++)Yc(r[e])}}function np(e,r){return e(r)}function ip(){}var Gs=!1;function sp(e,r,a){if(Gs)return e(r,a);Gs=!0;try{return np(e,r,a)}finally{Gs=!1,(Ra!==null||La!==null)&&(ip(),ap())}}function Sn(e,r){var a=e.stateNode;if(a===null)return null;var n=js(a);if(n===null)return null;a=n[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(D(231,r,typeof a));return a}var Fl=!1;if(cr)try{var Qa={};Object.defineProperty(Qa,"passive",{get:function(){Fl=!0}}),window.addEventListener("test",Qa,Qa),window.removeEventListener("test",Qa,Qa)}catch{Fl=!1}function Tf(e,r,a,n,i,s,l,o,c){var u=Array.prototype.slice.call(arguments,3);try{r.apply(a,u)}catch(m){this.onError(m)}}var dn=!1,Ui=null,$i=!1,zl=null,Pf={onError:function(e){dn=!0,Ui=e}};function _f(e,r,a,n,i,s,l,o,c){dn=!1,Ui=null,Tf.apply(Pf,arguments)}function qf(e,r,a,n,i,s,l,o,c){if(_f.apply(this,arguments),dn){if(dn){var u=Ui;dn=!1,Ui=null}else throw Error(D(198));$i||($i=!0,zl=u)}}function ia(e){var r=e,a=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(a=r.return),e=r.return;while(e)}return r.tag===3?a:null}function lp(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Xc(e){if(ia(e)!==e)throw Error(D(188))}function Of(e){var r=e.alternate;if(!r){if(r=ia(e),r===null)throw Error(D(188));return r!==e?null:e}for(var a=e,n=r;;){var i=a.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===a)return Xc(i),e;if(s===n)return Xc(i),r;s=s.sibling}throw Error(D(188))}if(a.return!==n.return)a=i,n=s;else{for(var l=!1,o=i.child;o;){if(o===a){l=!0,a=i,n=s;break}if(o===n){l=!0,n=i,a=s;break}o=o.sibling}if(!l){for(o=s.child;o;){if(o===a){l=!0,a=s,n=i;break}if(o===n){l=!0,n=s,a=i;break}o=o.sibling}if(!l)throw Error(D(189))}}if(a.alternate!==n)throw Error(D(190))}if(a.tag!==3)throw Error(D(188));return a.stateNode.current===a?e:r}function op(e){return e=Of(e),e!==null?cp(e):null}function cp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=cp(e);if(r!==null)return r;e=e.sibling}return null}var up=jt.unstable_scheduleCallback,Zc=jt.unstable_cancelCallback,If=jt.unstable_shouldYield,Df=jt.unstable_requestPaint,Oe=jt.unstable_now,Ff=jt.unstable_getCurrentPriorityLevel,Po=jt.unstable_ImmediatePriority,dp=jt.unstable_UserBlockingPriority,Gi=jt.unstable_NormalPriority,zf=jt.unstable_LowPriority,pp=jt.unstable_IdlePriority,fs=null,Qt=null;function Bf(e){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(fs,e,void 0,(e.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:Gf,Uf=Math.log,$f=Math.LN2;function Gf(e){return e>>>=0,e===0?32:31-(Uf(e)/$f|0)|0}var si=64,li=4194304;function sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vi(e,r){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes,l=a&268435455;if(l!==0){var o=l&~i;o!==0?n=sn(o):(s&=l,s!==0&&(n=sn(s)))}else l=a&~i,l!==0?n=sn(l):s!==0&&(n=sn(s));if(n===0)return 0;if(r!==0&&r!==n&&!(r&i)&&(i=n&-n,s=r&-r,i>=s||i===16&&(s&4194240)!==0))return r;if(n&4&&(n|=a&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=n;0<r;)a=31-Dt(r),i=1<<a,n|=e[a],r&=~i;return n}function Vf(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hf(e,r){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-Dt(s),o=1<<l,c=i[l];c===-1?(!(o&a)||o&n)&&(i[l]=Vf(o,r)):c<=r&&(e.expiredLanes|=o),s&=~o}}function Bl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mp(){var e=si;return si<<=1,!(si&4194240)&&(si=64),e}function Vs(e){for(var r=[],a=0;31>a;a++)r.push(e);return r}function Bn(e,r,a){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Dt(r),e[r]=a}function Qf(e,r){var a=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<a;){var i=31-Dt(a),s=1<<i;r[i]=0,n[i]=-1,e[i]=-1,a&=~s}}function _o(e,r){var a=e.entangledLanes|=r;for(e=e.entanglements;a;){var n=31-Dt(a),i=1<<n;i&r|e[n]&r&&(e[n]|=r),a&=~i}}var je=0;function hp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fp,qo,xp,gp,vp,Ul=!1,oi=[],Rr=null,Lr=null,Mr=null,wn=new Map,Cn=new Map,br=[],Wf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eu(e,r){switch(e){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":wn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(r.pointerId)}}function Wa(e,r,a,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:r,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},r!==null&&(r=$n(r),r!==null&&qo(r)),e):(e.eventSystemFlags|=n,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function Jf(e,r,a,n,i){switch(r){case"focusin":return Rr=Wa(Rr,e,r,a,n,i),!0;case"dragenter":return Lr=Wa(Lr,e,r,a,n,i),!0;case"mouseover":return Mr=Wa(Mr,e,r,a,n,i),!0;case"pointerover":var s=i.pointerId;return wn.set(s,Wa(wn.get(s)||null,e,r,a,n,i)),!0;case"gotpointercapture":return s=i.pointerId,Cn.set(s,Wa(Cn.get(s)||null,e,r,a,n,i)),!0}return!1}function jp(e){var r=Qr(e.target);if(r!==null){var a=ia(r);if(a!==null){if(r=a.tag,r===13){if(r=lp(a),r!==null){e.blockedOn=r,vp(e.priority,function(){xp(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ai(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var a=$l(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Il=n,a.target.dispatchEvent(n),Il=null}else return r=$n(a),r!==null&&qo(r),e.blockedOn=a,!1;r.shift()}return!0}function tu(e,r,a){Ai(e)&&a.delete(r)}function Kf(){Ul=!1,Rr!==null&&Ai(Rr)&&(Rr=null),Lr!==null&&Ai(Lr)&&(Lr=null),Mr!==null&&Ai(Mr)&&(Mr=null),wn.forEach(tu),Cn.forEach(tu)}function Ja(e,r){e.blockedOn===r&&(e.blockedOn=null,Ul||(Ul=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,Kf)))}function En(e){function r(i){return Ja(i,e)}if(0<oi.length){Ja(oi[0],e);for(var a=1;a<oi.length;a++){var n=oi[a];n.blockedOn===e&&(n.blockedOn=null)}}for(Rr!==null&&Ja(Rr,e),Lr!==null&&Ja(Lr,e),Mr!==null&&Ja(Mr,e),wn.forEach(r),Cn.forEach(r),a=0;a<br.length;a++)n=br[a],n.blockedOn===e&&(n.blockedOn=null);for(;0<br.length&&(a=br[0],a.blockedOn===null);)jp(a),a.blockedOn===null&&br.shift()}var Ma=mr.ReactCurrentBatchConfig,Hi=!0;function Yf(e,r,a,n){var i=je,s=Ma.transition;Ma.transition=null;try{je=1,Oo(e,r,a,n)}finally{je=i,Ma.transition=s}}function Xf(e,r,a,n){var i=je,s=Ma.transition;Ma.transition=null;try{je=4,Oo(e,r,a,n)}finally{je=i,Ma.transition=s}}function Oo(e,r,a,n){if(Hi){var i=$l(e,r,a,n);if(i===null)tl(e,r,n,Qi,a),eu(e,n);else if(Jf(i,e,r,a,n))n.stopPropagation();else if(eu(e,n),r&4&&-1<Wf.indexOf(e)){for(;i!==null;){var s=$n(i);if(s!==null&&fp(s),s=$l(e,r,a,n),s===null&&tl(e,r,n,Qi,a),s===i)break;i=s}i!==null&&n.stopPropagation()}else tl(e,r,n,null,a)}}var Qi=null;function $l(e,r,a,n){if(Qi=null,e=To(n),e=Qr(e),e!==null)if(r=ia(e),r===null)e=null;else if(a=r.tag,a===13){if(e=lp(r),e!==null)return e;e=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Qi=e,null}function bp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ff()){case Po:return 1;case dp:return 4;case Gi:case zf:return 16;case pp:return 536870912;default:return 16}default:return 16}}var Cr=null,Io=null,Ri=null;function yp(){if(Ri)return Ri;var e,r=Io,a=r.length,n,i="value"in Cr?Cr.value:Cr.textContent,s=i.length;for(e=0;e<a&&r[e]===i[e];e++);var l=a-e;for(n=1;n<=l&&r[a-n]===i[s-n];n++);return Ri=i.slice(e,1<n?1-n:void 0)}function Li(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function ci(){return!0}function ru(){return!1}function yt(e){function r(a,n,i,s,l){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ci:ru,this.isPropagationStopped=ru,this}return Te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),r}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Do=yt(Ba),Un=Te({},Ba,{view:0,detail:0}),Zf=yt(Un),Hs,Qs,Ka,xs=Te({},Un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ka&&(Ka&&e.type==="mousemove"?(Hs=e.screenX-Ka.screenX,Qs=e.screenY-Ka.screenY):Qs=Hs=0,Ka=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:Qs}}),au=yt(xs),ex=Te({},xs,{dataTransfer:0}),tx=yt(ex),rx=Te({},Un,{relatedTarget:0}),Ws=yt(rx),ax=Te({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),nx=yt(ax),ix=Te({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sx=yt(ix),lx=Te({},Ba,{data:0}),nu=yt(lx),ox={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dx(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=ux[e])?!!r[e]:!1}function Fo(){return dx}var px=Te({},Un,{key:function(e){if(e.key){var r=ox[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fo,charCode:function(e){return e.type==="keypress"?Li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mx=yt(px),hx=Te({},xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iu=yt(hx),fx=Te({},Un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fo}),xx=yt(fx),gx=Te({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),vx=yt(gx),jx=Te({},xs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bx=yt(jx),yx=[9,13,27,32],zo=cr&&"CompositionEvent"in window,pn=null;cr&&"documentMode"in document&&(pn=document.documentMode);var Sx=cr&&"TextEvent"in window&&!pn,Sp=cr&&(!zo||pn&&8<pn&&11>=pn),su=" ",lu=!1;function wp(e,r){switch(e){case"keyup":return yx.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fa=!1;function wx(e,r){switch(e){case"compositionend":return Cp(r);case"keypress":return r.which!==32?null:(lu=!0,su);case"textInput":return e=r.data,e===su&&lu?null:e;default:return null}}function Cx(e,r){if(fa)return e==="compositionend"||!zo&&wp(e,r)?(e=yp(),Ri=Io=Cr=null,fa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Sp&&r.locale!=="ko"?null:r.data;default:return null}}var Ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ou(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Ex[e.type]:r==="textarea"}function Ep(e,r,a,n){rp(n),r=Wi(r,"onChange"),0<r.length&&(a=new Do("onChange","change",null,a,n),e.push({event:a,listeners:r}))}var mn=null,An=null;function Ax(e){Op(e,0)}function gs(e){var r=va(e);if(Jd(r))return e}function Rx(e,r){if(e==="change")return r}var Ap=!1;if(cr){var Js;if(cr){var Ks="oninput"in document;if(!Ks){var cu=document.createElement("div");cu.setAttribute("oninput","return;"),Ks=typeof cu.oninput=="function"}Js=Ks}else Js=!1;Ap=Js&&(!document.documentMode||9<document.documentMode)}function uu(){mn&&(mn.detachEvent("onpropertychange",Rp),An=mn=null)}function Rp(e){if(e.propertyName==="value"&&gs(An)){var r=[];Ep(r,An,e,To(e)),sp(Ax,r)}}function Lx(e,r,a){e==="focusin"?(uu(),mn=r,An=a,mn.attachEvent("onpropertychange",Rp)):e==="focusout"&&uu()}function Mx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gs(An)}function kx(e,r){if(e==="click")return gs(r)}function Nx(e,r){if(e==="input"||e==="change")return gs(r)}function Tx(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Bt=typeof Object.is=="function"?Object.is:Tx;function Rn(e,r){if(Bt(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var a=Object.keys(e),n=Object.keys(r);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!El.call(r,i)||!Bt(e[i],r[i]))return!1}return!0}function du(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pu(e,r){var a=du(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=r&&n>=r)return{node:a,offset:r-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=du(a)}}function Lp(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Lp(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Mp(){for(var e=window,r=Bi();r instanceof e.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)e=r.contentWindow;else break;r=Bi(e.document)}return r}function Bo(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Px(e){var r=Mp(),a=e.focusedElem,n=e.selectionRange;if(r!==a&&a&&a.ownerDocument&&Lp(a.ownerDocument.documentElement,a)){if(n!==null&&Bo(a)){if(r=n.start,e=n.end,e===void 0&&(e=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(e,a.value.length);else if(e=(r=a.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=a.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!e.extend&&s>n&&(i=n,n=s,s=i),i=pu(a,s);var l=pu(a,n);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),s>n?(e.addRange(r),e.extend(l.node,l.offset)):(r.setEnd(l.node,l.offset),e.addRange(r)))}}for(r=[],e=a;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)e=r[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _x=cr&&"documentMode"in document&&11>=document.documentMode,xa=null,Gl=null,hn=null,Vl=!1;function mu(e,r,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vl||xa==null||xa!==Bi(n)||(n=xa,"selectionStart"in n&&Bo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),hn&&Rn(hn,n)||(hn=n,n=Wi(Gl,"onSelect"),0<n.length&&(r=new Do("onSelect","select",null,r,a),e.push({event:r,listeners:n}),r.target=xa)))}function ui(e,r){var a={};return a[e.toLowerCase()]=r.toLowerCase(),a["Webkit"+e]="webkit"+r,a["Moz"+e]="moz"+r,a}var ga={animationend:ui("Animation","AnimationEnd"),animationiteration:ui("Animation","AnimationIteration"),animationstart:ui("Animation","AnimationStart"),transitionend:ui("Transition","TransitionEnd")},Ys={},kp={};cr&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete ga.animationend.animation,delete ga.animationiteration.animation,delete ga.animationstart.animation),"TransitionEvent"in window||delete ga.transitionend.transition);function vs(e){if(Ys[e])return Ys[e];if(!ga[e])return e;var r=ga[e],a;for(a in r)if(r.hasOwnProperty(a)&&a in kp)return Ys[e]=r[a];return e}var Np=vs("animationend"),Tp=vs("animationiteration"),Pp=vs("animationstart"),_p=vs("transitionend"),qp=new Map,hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(e,r){qp.set(e,r),na(r,[e])}for(var Xs=0;Xs<hu.length;Xs++){var Zs=hu[Xs],qx=Zs.toLowerCase(),Ox=Zs[0].toUpperCase()+Zs.slice(1);Ir(qx,"on"+Ox)}Ir(Np,"onAnimationEnd");Ir(Tp,"onAnimationIteration");Ir(Pp,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(_p,"onTransitionEnd");Pa("onMouseEnter",["mouseout","mouseover"]);Pa("onMouseLeave",["mouseout","mouseover"]);Pa("onPointerEnter",["pointerout","pointerover"]);Pa("onPointerLeave",["pointerout","pointerover"]);na("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));na("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));na("onBeforeInput",["compositionend","keypress","textInput","paste"]);na("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));na("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));na("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ix=new Set("cancel close invalid load scroll toggle".split(" ").concat(ln));function fu(e,r,a){var n=e.type||"unknown-event";e.currentTarget=a,qf(n,r,void 0,e),e.currentTarget=null}function Op(e,r){r=(r&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var s=void 0;if(r)for(var l=n.length-1;0<=l;l--){var o=n[l],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&i.isPropagationStopped())break e;fu(i,o,u),s=c}else for(l=0;l<n.length;l++){if(o=n[l],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&i.isPropagationStopped())break e;fu(i,o,u),s=c}}}if($i)throw e=zl,$i=!1,zl=null,e}function Ce(e,r){var a=r[Kl];a===void 0&&(a=r[Kl]=new Set);var n=e+"__bubble";a.has(n)||(Ip(r,e,2,!1),a.add(n))}function el(e,r,a){var n=0;r&&(n|=4),Ip(a,e,n,r)}var di="_reactListening"+Math.random().toString(36).slice(2);function Ln(e){if(!e[di]){e[di]=!0,Gd.forEach(function(a){a!=="selectionchange"&&(Ix.has(a)||el(a,!1,e),el(a,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[di]||(r[di]=!0,el("selectionchange",!1,r))}}function Ip(e,r,a,n){switch(bp(r)){case 1:var i=Yf;break;case 4:i=Xf;break;default:i=Oo}a=i.bind(null,r,a,e),i=void 0,!Fl||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(r,a,{capture:!0,passive:i}):e.addEventListener(r,a,!0):i!==void 0?e.addEventListener(r,a,{passive:i}):e.addEventListener(r,a,!1)}function tl(e,r,a,n,i){var s=n;if(!(r&1)&&!(r&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var o=n.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(l===4)for(l=n.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;o!==null;){if(l=Qr(o),l===null)return;if(c=l.tag,c===5||c===6){n=s=l;continue e}o=o.parentNode}}n=n.return}sp(function(){var u=s,m=To(a),d=[];e:{var f=qp.get(e);if(f!==void 0){var y=Do,g=e;switch(e){case"keypress":if(Li(a)===0)break e;case"keydown":case"keyup":y=mx;break;case"focusin":g="focus",y=Ws;break;case"focusout":g="blur",y=Ws;break;case"beforeblur":case"afterblur":y=Ws;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=xx;break;case Np:case Tp:case Pp:y=nx;break;case _p:y=vx;break;case"scroll":y=Zf;break;case"wheel":y=bx;break;case"copy":case"cut":case"paste":y=sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=iu}var b=(r&4)!==0,S=!b&&e==="scroll",h=b?f!==null?f+"Capture":null:f;b=[];for(var p=u,v;p!==null;){v=p;var L=v.stateNode;if(v.tag===5&&L!==null&&(v=L,h!==null&&(L=Sn(p,h),L!=null&&b.push(Mn(p,L,v)))),S)break;p=p.return}0<b.length&&(f=new y(f,g,null,a,m),d.push({event:f,listeners:b}))}}if(!(r&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&a!==Il&&(g=a.relatedTarget||a.fromElement)&&(Qr(g)||g[ur]))break e;if((y||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,y?(g=a.relatedTarget||a.toElement,y=u,g=g?Qr(g):null,g!==null&&(S=ia(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(b=au,L="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(b=iu,L="onPointerLeave",h="onPointerEnter",p="pointer"),S=y==null?f:va(y),v=g==null?f:va(g),f=new b(L,p+"leave",y,a,m),f.target=S,f.relatedTarget=v,L=null,Qr(m)===u&&(b=new b(h,p+"enter",g,a,m),b.target=v,b.relatedTarget=S,L=b),S=L,y&&g)t:{for(b=y,h=g,p=0,v=b;v;v=ua(v))p++;for(v=0,L=h;L;L=ua(L))v++;for(;0<p-v;)b=ua(b),p--;for(;0<v-p;)h=ua(h),v--;for(;p--;){if(b===h||h!==null&&b===h.alternate)break t;b=ua(b),h=ua(h)}b=null}else b=null;y!==null&&xu(d,f,y,b,!1),g!==null&&S!==null&&xu(d,S,g,b,!0)}}e:{if(f=u?va(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var k=Rx;else if(ou(f))if(Ap)k=Nx;else{k=Mx;var P=Lx}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=kx);if(k&&(k=k(e,u))){Ep(d,k,a,m);break e}P&&P(e,f,u),e==="focusout"&&(P=f._wrapperState)&&P.controlled&&f.type==="number"&&Tl(f,"number",f.value)}switch(P=u?va(u):window,e){case"focusin":(ou(P)||P.contentEditable==="true")&&(xa=P,Gl=u,hn=null);break;case"focusout":hn=Gl=xa=null;break;case"mousedown":Vl=!0;break;case"contextmenu":case"mouseup":case"dragend":Vl=!1,mu(d,a,m);break;case"selectionchange":if(_x)break;case"keydown":case"keyup":mu(d,a,m)}var _;if(zo)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else fa?wp(e,a)&&(E="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(E="onCompositionStart");E&&(Sp&&a.locale!=="ko"&&(fa||E!=="onCompositionStart"?E==="onCompositionEnd"&&fa&&(_=yp()):(Cr=m,Io="value"in Cr?Cr.value:Cr.textContent,fa=!0)),P=Wi(u,E),0<P.length&&(E=new nu(E,e,null,a,m),d.push({event:E,listeners:P}),_?E.data=_:(_=Cp(a),_!==null&&(E.data=_)))),(_=Sx?wx(e,a):Cx(e,a))&&(u=Wi(u,"onBeforeInput"),0<u.length&&(m=new nu("onBeforeInput","beforeinput",null,a,m),d.push({event:m,listeners:u}),m.data=_))}Op(d,r)})}function Mn(e,r,a){return{instance:e,listener:r,currentTarget:a}}function Wi(e,r){for(var a=r+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Sn(e,a),s!=null&&n.unshift(Mn(e,s,i)),s=Sn(e,r),s!=null&&n.push(Mn(e,s,i))),e=e.return}return n}function ua(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xu(e,r,a,n,i){for(var s=r._reactName,l=[];a!==null&&a!==n;){var o=a,c=o.alternate,u=o.stateNode;if(c!==null&&c===n)break;o.tag===5&&u!==null&&(o=u,i?(c=Sn(a,s),c!=null&&l.unshift(Mn(a,c,o))):i||(c=Sn(a,s),c!=null&&l.push(Mn(a,c,o)))),a=a.return}l.length!==0&&e.push({event:r,listeners:l})}var Dx=/\r\n?/g,Fx=/\u0000|\uFFFD/g;function gu(e){return(typeof e=="string"?e:""+e).replace(Dx,`
`).replace(Fx,"")}function pi(e,r,a){if(r=gu(r),gu(e)!==r&&a)throw Error(D(425))}function Ji(){}var Hl=null,Ql=null;function Wl(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Jl=typeof setTimeout=="function"?setTimeout:void 0,zx=typeof clearTimeout=="function"?clearTimeout:void 0,vu=typeof Promise=="function"?Promise:void 0,Bx=typeof queueMicrotask=="function"?queueMicrotask:typeof vu<"u"?function(e){return vu.resolve(null).then(e).catch(Ux)}:Jl;function Ux(e){setTimeout(function(){throw e})}function rl(e,r){var a=r,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(n===0){e.removeChild(i),En(r);return}n--}else a!=="$"&&a!=="$?"&&a!=="$!"||n++;a=i}while(a);En(r)}function kr(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function ju(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return e;r--}else a==="/$"&&r++}e=e.previousSibling}return null}var Ua=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Ua,kn="__reactProps$"+Ua,ur="__reactContainer$"+Ua,Kl="__reactEvents$"+Ua,$x="__reactListeners$"+Ua,Gx="__reactHandles$"+Ua;function Qr(e){var r=e[Ht];if(r)return r;for(var a=e.parentNode;a;){if(r=a[ur]||a[Ht]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(e=ju(e);e!==null;){if(a=e[Ht])return a;e=ju(e)}return r}e=a,a=e.parentNode}return null}function $n(e){return e=e[Ht]||e[ur],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function va(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function js(e){return e[kn]||null}var Yl=[],ja=-1;function Dr(e){return{current:e}}function Ae(e){0>ja||(e.current=Yl[ja],Yl[ja]=null,ja--)}function Se(e,r){ja++,Yl[ja]=e.current,e.current=r}var Or={},tt=Dr(Or),dt=Dr(!1),Zr=Or;function _a(e,r){var a=e.type.contextTypes;if(!a)return Or;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===r)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in a)i[s]=r[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function pt(e){return e=e.childContextTypes,e!=null}function Ki(){Ae(dt),Ae(tt)}function bu(e,r,a){if(tt.current!==Or)throw Error(D(168));Se(tt,r),Se(dt,a)}function Dp(e,r,a){var n=e.stateNode;if(r=r.childContextTypes,typeof n.getChildContext!="function")return a;n=n.getChildContext();for(var i in n)if(!(i in r))throw Error(D(108,Lf(e)||"Unknown",i));return Te({},a,n)}function Yi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Or,Zr=tt.current,Se(tt,e),Se(dt,dt.current),!0}function yu(e,r,a){var n=e.stateNode;if(!n)throw Error(D(169));a?(e=Dp(e,r,Zr),n.__reactInternalMemoizedMergedChildContext=e,Ae(dt),Ae(tt),Se(tt,e)):Ae(dt),Se(dt,a)}var ir=null,bs=!1,al=!1;function Fp(e){ir===null?ir=[e]:ir.push(e)}function Vx(e){bs=!0,Fp(e)}function Fr(){if(!al&&ir!==null){al=!0;var e=0,r=je;try{var a=ir;for(je=1;e<a.length;e++){var n=a[e];do n=n(!0);while(n!==null)}ir=null,bs=!1}catch(i){throw ir!==null&&(ir=ir.slice(e+1)),up(Po,Fr),i}finally{je=r,al=!1}}return null}var ba=[],ya=0,Xi=null,Zi=0,Ct=[],Et=0,ea=null,sr=1,lr="";function Vr(e,r){ba[ya++]=Zi,ba[ya++]=Xi,Xi=e,Zi=r}function zp(e,r,a){Ct[Et++]=sr,Ct[Et++]=lr,Ct[Et++]=ea,ea=e;var n=sr;e=lr;var i=32-Dt(n)-1;n&=~(1<<i),a+=1;var s=32-Dt(r)+i;if(30<s){var l=i-i%5;s=(n&(1<<l)-1).toString(32),n>>=l,i-=l,sr=1<<32-Dt(r)+i|a<<i|n,lr=s+e}else sr=1<<s|a<<i|n,lr=e}function Uo(e){e.return!==null&&(Vr(e,1),zp(e,1,0))}function $o(e){for(;e===Xi;)Xi=ba[--ya],ba[ya]=null,Zi=ba[--ya],ba[ya]=null;for(;e===ea;)ea=Ct[--Et],Ct[Et]=null,lr=Ct[--Et],Ct[Et]=null,sr=Ct[--Et],Ct[Et]=null}var vt=null,gt=null,Le=!1,It=null;function Bp(e,r){var a=At(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=e,r=e.deletions,r===null?(e.deletions=[a],e.flags|=16):r.push(a)}function Su(e,r){switch(e.tag){case 5:var a=e.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,vt=e,gt=kr(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,vt=e,gt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=ea!==null?{id:sr,overflow:lr}:null,e.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=At(18,null,null,0),a.stateNode=r,a.return=e,e.child=a,vt=e,gt=null,!0):!1;default:return!1}}function Xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zl(e){if(Le){var r=gt;if(r){var a=r;if(!Su(e,r)){if(Xl(e))throw Error(D(418));r=kr(a.nextSibling);var n=vt;r&&Su(e,r)?Bp(n,a):(e.flags=e.flags&-4097|2,Le=!1,vt=e)}}else{if(Xl(e))throw Error(D(418));e.flags=e.flags&-4097|2,Le=!1,vt=e}}}function wu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function mi(e){if(e!==vt)return!1;if(!Le)return wu(e),Le=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Wl(e.type,e.memoizedProps)),r&&(r=gt)){if(Xl(e))throw Up(),Error(D(418));for(;r;)Bp(e,r),r=kr(r.nextSibling)}if(wu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(r===0){gt=kr(e.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}e=e.nextSibling}gt=null}}else gt=vt?kr(e.stateNode.nextSibling):null;return!0}function Up(){for(var e=gt;e;)e=kr(e.nextSibling)}function qa(){gt=vt=null,Le=!1}function Go(e){It===null?It=[e]:It.push(e)}var Hx=mr.ReactCurrentBatchConfig;function Ya(e,r,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(D(309));var n=a.stateNode}if(!n)throw Error(D(147,e));var i=n,s=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(l){var o=i.refs;l===null?delete o[s]:o[s]=l},r._stringRef=s,r)}if(typeof e!="string")throw Error(D(284));if(!a._owner)throw Error(D(290,e))}return e}function hi(e,r){throw e=Object.prototype.toString.call(r),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Cu(e){var r=e._init;return r(e._payload)}function $p(e){function r(h,p){if(e){var v=h.deletions;v===null?(h.deletions=[p],h.flags|=16):v.push(p)}}function a(h,p){if(!e)return null;for(;p!==null;)r(h,p),p=p.sibling;return null}function n(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=_r(h,p),h.index=0,h.sibling=null,h}function s(h,p,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<p?(h.flags|=2,p):v):(h.flags|=2,p)):(h.flags|=1048576,p)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function o(h,p,v,L){return p===null||p.tag!==6?(p=ul(v,h.mode,L),p.return=h,p):(p=i(p,v),p.return=h,p)}function c(h,p,v,L){var k=v.type;return k===ha?m(h,p,v.props.children,L,v.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===vr&&Cu(k)===p.type)?(L=i(p,v.props),L.ref=Ya(h,p,v),L.return=h,L):(L=qi(v.type,v.key,v.props,null,h.mode,L),L.ref=Ya(h,p,v),L.return=h,L)}function u(h,p,v,L){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=dl(v,h.mode,L),p.return=h,p):(p=i(p,v.children||[]),p.return=h,p)}function m(h,p,v,L,k){return p===null||p.tag!==7?(p=Xr(v,h.mode,L,k),p.return=h,p):(p=i(p,v),p.return=h,p)}function d(h,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ul(""+p,h.mode,v),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ai:return v=qi(p.type,p.key,p.props,null,h.mode,v),v.ref=Ya(h,null,p),v.return=h,v;case ma:return p=dl(p,h.mode,v),p.return=h,p;case vr:var L=p._init;return d(h,L(p._payload),v)}if(nn(p)||Ha(p))return p=Xr(p,h.mode,v,null),p.return=h,p;hi(h,p)}return null}function f(h,p,v,L){var k=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:o(h,p,""+v,L);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ai:return v.key===k?c(h,p,v,L):null;case ma:return v.key===k?u(h,p,v,L):null;case vr:return k=v._init,f(h,p,k(v._payload),L)}if(nn(v)||Ha(v))return k!==null?null:m(h,p,v,L,null);hi(h,v)}return null}function y(h,p,v,L,k){if(typeof L=="string"&&L!==""||typeof L=="number")return h=h.get(v)||null,o(p,h,""+L,k);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ai:return h=h.get(L.key===null?v:L.key)||null,c(p,h,L,k);case ma:return h=h.get(L.key===null?v:L.key)||null,u(p,h,L,k);case vr:var P=L._init;return y(h,p,v,P(L._payload),k)}if(nn(L)||Ha(L))return h=h.get(v)||null,m(p,h,L,k,null);hi(p,L)}return null}function g(h,p,v,L){for(var k=null,P=null,_=p,E=p=0,V=null;_!==null&&E<v.length;E++){_.index>E?(V=_,_=null):V=_.sibling;var F=f(h,_,v[E],L);if(F===null){_===null&&(_=V);break}e&&_&&F.alternate===null&&r(h,_),p=s(F,p,E),P===null?k=F:P.sibling=F,P=F,_=V}if(E===v.length)return a(h,_),Le&&Vr(h,E),k;if(_===null){for(;E<v.length;E++)_=d(h,v[E],L),_!==null&&(p=s(_,p,E),P===null?k=_:P.sibling=_,P=_);return Le&&Vr(h,E),k}for(_=n(h,_);E<v.length;E++)V=y(_,h,E,v[E],L),V!==null&&(e&&V.alternate!==null&&_.delete(V.key===null?E:V.key),p=s(V,p,E),P===null?k=V:P.sibling=V,P=V);return e&&_.forEach(function(le){return r(h,le)}),Le&&Vr(h,E),k}function b(h,p,v,L){var k=Ha(v);if(typeof k!="function")throw Error(D(150));if(v=k.call(v),v==null)throw Error(D(151));for(var P=k=null,_=p,E=p=0,V=null,F=v.next();_!==null&&!F.done;E++,F=v.next()){_.index>E?(V=_,_=null):V=_.sibling;var le=f(h,_,F.value,L);if(le===null){_===null&&(_=V);break}e&&_&&le.alternate===null&&r(h,_),p=s(le,p,E),P===null?k=le:P.sibling=le,P=le,_=V}if(F.done)return a(h,_),Le&&Vr(h,E),k;if(_===null){for(;!F.done;E++,F=v.next())F=d(h,F.value,L),F!==null&&(p=s(F,p,E),P===null?k=F:P.sibling=F,P=F);return Le&&Vr(h,E),k}for(_=n(h,_);!F.done;E++,F=v.next())F=y(_,h,E,F.value,L),F!==null&&(e&&F.alternate!==null&&_.delete(F.key===null?E:F.key),p=s(F,p,E),P===null?k=F:P.sibling=F,P=F);return e&&_.forEach(function(ee){return r(h,ee)}),Le&&Vr(h,E),k}function S(h,p,v,L){if(typeof v=="object"&&v!==null&&v.type===ha&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ai:e:{for(var k=v.key,P=p;P!==null;){if(P.key===k){if(k=v.type,k===ha){if(P.tag===7){a(h,P.sibling),p=i(P,v.props.children),p.return=h,h=p;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===vr&&Cu(k)===P.type){a(h,P.sibling),p=i(P,v.props),p.ref=Ya(h,P,v),p.return=h,h=p;break e}a(h,P);break}else r(h,P);P=P.sibling}v.type===ha?(p=Xr(v.props.children,h.mode,L,v.key),p.return=h,h=p):(L=qi(v.type,v.key,v.props,null,h.mode,L),L.ref=Ya(h,p,v),L.return=h,h=L)}return l(h);case ma:e:{for(P=v.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){a(h,p.sibling),p=i(p,v.children||[]),p.return=h,h=p;break e}else{a(h,p);break}else r(h,p);p=p.sibling}p=dl(v,h.mode,L),p.return=h,h=p}return l(h);case vr:return P=v._init,S(h,p,P(v._payload),L)}if(nn(v))return g(h,p,v,L);if(Ha(v))return b(h,p,v,L);hi(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(a(h,p.sibling),p=i(p,v),p.return=h,h=p):(a(h,p),p=ul(v,h.mode,L),p.return=h,h=p),l(h)):a(h,p)}return S}var Oa=$p(!0),Gp=$p(!1),es=Dr(null),ts=null,Sa=null,Vo=null;function Ho(){Vo=Sa=ts=null}function Qo(e){var r=es.current;Ae(es),e._currentValue=r}function eo(e,r,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,n!==null&&(n.childLanes|=r)):n!==null&&(n.childLanes&r)!==r&&(n.childLanes|=r),e===a)break;e=e.return}}function ka(e,r){ts=e,Vo=Sa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(ut=!0),e.firstContext=null)}function Lt(e){var r=e._currentValue;if(Vo!==e)if(e={context:e,memoizedValue:r,next:null},Sa===null){if(ts===null)throw Error(D(308));Sa=e,ts.dependencies={lanes:0,firstContext:e}}else Sa=Sa.next=e;return r}var Wr=null;function Wo(e){Wr===null?Wr=[e]:Wr.push(e)}function Vp(e,r,a,n){var i=r.interleaved;return i===null?(a.next=a,Wo(r)):(a.next=i.next,i.next=a),r.interleaved=a,dr(e,n)}function dr(e,r){e.lanes|=r;var a=e.alternate;for(a!==null&&(a.lanes|=r),a=e,e=e.return;e!==null;)e.childLanes|=r,a=e.alternate,a!==null&&(a.childLanes|=r),a=e,e=e.return;return a.tag===3?a.stateNode:null}var jr=!1;function Jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hp(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function or(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function Nr(e,r,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,xe&2){var i=n.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),n.pending=r,dr(e,a)}return i=n.interleaved,i===null?(r.next=r,Wo(n)):(r.next=i.next,i.next=r),n.interleaved=r,dr(e,a)}function Mi(e,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var n=r.lanes;n&=e.pendingLanes,a|=n,r.lanes=a,_o(e,a)}}function Eu(e,r){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var l={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};s===null?i=s=l:s=s.next=l,a=a.next}while(a!==null);s===null?i=s=r:s=s.next=r}else i=s=r;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=r:e.next=r,a.lastBaseUpdate=r}function rs(e,r,a,n){var i=e.updateQueue;jr=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,u=c.next;c.next=null,l===null?s=u:l.next=u,l=c;var m=e.alternate;m!==null&&(m=m.updateQueue,o=m.lastBaseUpdate,o!==l&&(o===null?m.firstBaseUpdate=u:o.next=u,m.lastBaseUpdate=c))}if(s!==null){var d=i.baseState;l=0,m=u=c=null,o=s;do{var f=o.lane,y=o.eventTime;if((n&f)===f){m!==null&&(m=m.next={eventTime:y,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=e,b=o;switch(f=r,y=a,b.tag){case 1:if(g=b.payload,typeof g=="function"){d=g.call(y,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,f=typeof g=="function"?g.call(y,d,f):g,f==null)break e;d=Te({},d,f);break e;case 2:jr=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[o]:f.push(o))}else y={eventTime:y,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},m===null?(u=m=y,c=d):m=m.next=y,l|=f;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;f=o,o=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(m===null&&(c=d),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=m,r=i.shared.interleaved,r!==null){i=r;do l|=i.lane,i=i.next;while(i!==r)}else s===null&&(i.shared.lanes=0);ra|=l,e.lanes=l,e.memoizedState=d}}function Au(e,r,a){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var n=e[r],i=n.callback;if(i!==null){if(n.callback=null,n=a,typeof i!="function")throw Error(D(191,i));i.call(n)}}}var Gn={},Wt=Dr(Gn),Nn=Dr(Gn),Tn=Dr(Gn);function Jr(e){if(e===Gn)throw Error(D(174));return e}function Ko(e,r){switch(Se(Tn,r),Se(Nn,e),Se(Wt,Gn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:_l(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=_l(r,e)}Ae(Wt),Se(Wt,r)}function Ia(){Ae(Wt),Ae(Nn),Ae(Tn)}function Qp(e){Jr(Tn.current);var r=Jr(Wt.current),a=_l(r,e.type);r!==a&&(Se(Nn,e),Se(Wt,a))}function Yo(e){Nn.current===e&&(Ae(Wt),Ae(Nn))}var ke=Dr(0);function as(e){for(var r=e;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var nl=[];function Xo(){for(var e=0;e<nl.length;e++)nl[e]._workInProgressVersionPrimary=null;nl.length=0}var ki=mr.ReactCurrentDispatcher,il=mr.ReactCurrentBatchConfig,ta=0,Ne=null,ze=null,$e=null,ns=!1,fn=!1,Pn=0,Qx=0;function Ye(){throw Error(D(321))}function Zo(e,r){if(r===null)return!1;for(var a=0;a<r.length&&a<e.length;a++)if(!Bt(e[a],r[a]))return!1;return!0}function ec(e,r,a,n,i,s){if(ta=s,Ne=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ki.current=e===null||e.memoizedState===null?Yx:Xx,e=a(n,i),fn){s=0;do{if(fn=!1,Pn=0,25<=s)throw Error(D(301));s+=1,$e=ze=null,r.updateQueue=null,ki.current=Zx,e=a(n,i)}while(fn)}if(ki.current=is,r=ze!==null&&ze.next!==null,ta=0,$e=ze=Ne=null,ns=!1,r)throw Error(D(300));return e}function tc(){var e=Pn!==0;return Pn=0,e}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Ne.memoizedState=$e=e:$e=$e.next=e,$e}function Mt(){if(ze===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var r=$e===null?Ne.memoizedState:$e.next;if(r!==null)$e=r,ze=e;else{if(e===null)throw Error(D(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},$e===null?Ne.memoizedState=$e=e:$e=$e.next=e}return $e}function _n(e,r){return typeof r=="function"?r(e):r}function sl(e){var r=Mt(),a=r.queue;if(a===null)throw Error(D(311));a.lastRenderedReducer=e;var n=ze,i=n.baseQueue,s=a.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}n.baseQueue=i=s,a.pending=null}if(i!==null){s=i.next,n=n.baseState;var o=l=null,c=null,u=s;do{var m=u.lane;if((ta&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var d={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=d,l=n):c=c.next=d,Ne.lanes|=m,ra|=m}u=u.next}while(u!==null&&u!==s);c===null?l=n:c.next=o,Bt(n,r.memoizedState)||(ut=!0),r.memoizedState=n,r.baseState=l,r.baseQueue=c,a.lastRenderedState=n}if(e=a.interleaved,e!==null){i=e;do s=i.lane,Ne.lanes|=s,ra|=s,i=i.next;while(i!==e)}else i===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function ll(e){var r=Mt(),a=r.queue;if(a===null)throw Error(D(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,s=r.memoizedState;if(i!==null){a.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);Bt(s,r.memoizedState)||(ut=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),a.lastRenderedState=s}return[s,n]}function Wp(){}function Jp(e,r){var a=Ne,n=Mt(),i=r(),s=!Bt(n.memoizedState,i);if(s&&(n.memoizedState=i,ut=!0),n=n.queue,rc(Xp.bind(null,a,n,e),[e]),n.getSnapshot!==r||s||$e!==null&&$e.memoizedState.tag&1){if(a.flags|=2048,qn(9,Yp.bind(null,a,n,i,r),void 0,null),Ge===null)throw Error(D(349));ta&30||Kp(a,r,i)}return i}function Kp(e,r,a){e.flags|=16384,e={getSnapshot:r,value:a},r=Ne.updateQueue,r===null?(r={lastEffect:null,stores:null},Ne.updateQueue=r,r.stores=[e]):(a=r.stores,a===null?r.stores=[e]:a.push(e))}function Yp(e,r,a,n){r.value=a,r.getSnapshot=n,Zp(r)&&em(e)}function Xp(e,r,a){return a(function(){Zp(r)&&em(e)})}function Zp(e){var r=e.getSnapshot;e=e.value;try{var a=r();return!Bt(e,a)}catch{return!0}}function em(e){var r=dr(e,1);r!==null&&Ft(r,e,1,-1)}function Ru(e){var r=Vt();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:e},r.queue=e,e=e.dispatch=Kx.bind(null,Ne,e),[r.memoizedState,e]}function qn(e,r,a,n){return e={tag:e,create:r,destroy:a,deps:n,next:null},r=Ne.updateQueue,r===null?(r={lastEffect:null,stores:null},Ne.updateQueue=r,r.lastEffect=e.next=e):(a=r.lastEffect,a===null?r.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,r.lastEffect=e)),e}function tm(){return Mt().memoizedState}function Ni(e,r,a,n){var i=Vt();Ne.flags|=e,i.memoizedState=qn(1|r,a,void 0,n===void 0?null:n)}function ys(e,r,a,n){var i=Mt();n=n===void 0?null:n;var s=void 0;if(ze!==null){var l=ze.memoizedState;if(s=l.destroy,n!==null&&Zo(n,l.deps)){i.memoizedState=qn(r,a,s,n);return}}Ne.flags|=e,i.memoizedState=qn(1|r,a,s,n)}function Lu(e,r){return Ni(8390656,8,e,r)}function rc(e,r){return ys(2048,8,e,r)}function rm(e,r){return ys(4,2,e,r)}function am(e,r){return ys(4,4,e,r)}function nm(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function im(e,r,a){return a=a!=null?a.concat([e]):null,ys(4,4,nm.bind(null,r,e),a)}function ac(){}function sm(e,r){var a=Mt();r=r===void 0?null:r;var n=a.memoizedState;return n!==null&&r!==null&&Zo(r,n[1])?n[0]:(a.memoizedState=[e,r],e)}function lm(e,r){var a=Mt();r=r===void 0?null:r;var n=a.memoizedState;return n!==null&&r!==null&&Zo(r,n[1])?n[0]:(e=e(),a.memoizedState=[e,r],e)}function om(e,r,a){return ta&21?(Bt(a,r)||(a=mp(),Ne.lanes|=a,ra|=a,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=a)}function Wx(e,r){var a=je;je=a!==0&&4>a?a:4,e(!0);var n=il.transition;il.transition={};try{e(!1),r()}finally{je=a,il.transition=n}}function cm(){return Mt().memoizedState}function Jx(e,r,a){var n=Pr(e);if(a={lane:n,action:a,hasEagerState:!1,eagerState:null,next:null},um(e))dm(r,a);else if(a=Vp(e,r,a,n),a!==null){var i=st();Ft(a,e,n,i),pm(a,r,n)}}function Kx(e,r,a){var n=Pr(e),i={lane:n,action:a,hasEagerState:!1,eagerState:null,next:null};if(um(e))dm(r,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var l=r.lastRenderedState,o=s(l,a);if(i.hasEagerState=!0,i.eagerState=o,Bt(o,l)){var c=r.interleaved;c===null?(i.next=i,Wo(r)):(i.next=c.next,c.next=i),r.interleaved=i;return}}catch{}finally{}a=Vp(e,r,i,n),a!==null&&(i=st(),Ft(a,e,n,i),pm(a,r,n))}}function um(e){var r=e.alternate;return e===Ne||r!==null&&r===Ne}function dm(e,r){fn=ns=!0;var a=e.pending;a===null?r.next=r:(r.next=a.next,a.next=r),e.pending=r}function pm(e,r,a){if(a&4194240){var n=r.lanes;n&=e.pendingLanes,a|=n,r.lanes=a,_o(e,a)}}var is={readContext:Lt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},Yx={readContext:Lt,useCallback:function(e,r){return Vt().memoizedState=[e,r===void 0?null:r],e},useContext:Lt,useEffect:Lu,useImperativeHandle:function(e,r,a){return a=a!=null?a.concat([e]):null,Ni(4194308,4,nm.bind(null,r,e),a)},useLayoutEffect:function(e,r){return Ni(4194308,4,e,r)},useInsertionEffect:function(e,r){return Ni(4,2,e,r)},useMemo:function(e,r){var a=Vt();return r=r===void 0?null:r,e=e(),a.memoizedState=[e,r],e},useReducer:function(e,r,a){var n=Vt();return r=a!==void 0?a(r):r,n.memoizedState=n.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=Jx.bind(null,Ne,e),[n.memoizedState,e]},useRef:function(e){var r=Vt();return e={current:e},r.memoizedState=e},useState:Ru,useDebugValue:ac,useDeferredValue:function(e){return Vt().memoizedState=e},useTransition:function(){var e=Ru(!1),r=e[0];return e=Wx.bind(null,e[1]),Vt().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,a){var n=Ne,i=Vt();if(Le){if(a===void 0)throw Error(D(407));a=a()}else{if(a=r(),Ge===null)throw Error(D(349));ta&30||Kp(n,r,a)}i.memoizedState=a;var s={value:a,getSnapshot:r};return i.queue=s,Lu(Xp.bind(null,n,s,e),[e]),n.flags|=2048,qn(9,Yp.bind(null,n,s,a,r),void 0,null),a},useId:function(){var e=Vt(),r=Ge.identifierPrefix;if(Le){var a=lr,n=sr;a=(n&~(1<<32-Dt(n)-1)).toString(32)+a,r=":"+r+"R"+a,a=Pn++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Qx++,r=":"+r+"r"+a.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Xx={readContext:Lt,useCallback:sm,useContext:Lt,useEffect:rc,useImperativeHandle:im,useInsertionEffect:rm,useLayoutEffect:am,useMemo:lm,useReducer:sl,useRef:tm,useState:function(){return sl(_n)},useDebugValue:ac,useDeferredValue:function(e){var r=Mt();return om(r,ze.memoizedState,e)},useTransition:function(){var e=sl(_n)[0],r=Mt().memoizedState;return[e,r]},useMutableSource:Wp,useSyncExternalStore:Jp,useId:cm,unstable_isNewReconciler:!1},Zx={readContext:Lt,useCallback:sm,useContext:Lt,useEffect:rc,useImperativeHandle:im,useInsertionEffect:rm,useLayoutEffect:am,useMemo:lm,useReducer:ll,useRef:tm,useState:function(){return ll(_n)},useDebugValue:ac,useDeferredValue:function(e){var r=Mt();return ze===null?r.memoizedState=e:om(r,ze.memoizedState,e)},useTransition:function(){var e=ll(_n)[0],r=Mt().memoizedState;return[e,r]},useMutableSource:Wp,useSyncExternalStore:Jp,useId:cm,unstable_isNewReconciler:!1};function qt(e,r){if(e&&e.defaultProps){r=Te({},r),e=e.defaultProps;for(var a in e)r[a]===void 0&&(r[a]=e[a]);return r}return r}function to(e,r,a,n){r=e.memoizedState,a=a(n,r),a=a==null?r:Te({},r,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ss={isMounted:function(e){return(e=e._reactInternals)?ia(e)===e:!1},enqueueSetState:function(e,r,a){e=e._reactInternals;var n=st(),i=Pr(e),s=or(n,i);s.payload=r,a!=null&&(s.callback=a),r=Nr(e,s,i),r!==null&&(Ft(r,e,i,n),Mi(r,e,i))},enqueueReplaceState:function(e,r,a){e=e._reactInternals;var n=st(),i=Pr(e),s=or(n,i);s.tag=1,s.payload=r,a!=null&&(s.callback=a),r=Nr(e,s,i),r!==null&&(Ft(r,e,i,n),Mi(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var a=st(),n=Pr(e),i=or(a,n);i.tag=2,r!=null&&(i.callback=r),r=Nr(e,i,n),r!==null&&(Ft(r,e,n,a),Mi(r,e,n))}};function Mu(e,r,a,n,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,l):r.prototype&&r.prototype.isPureReactComponent?!Rn(a,n)||!Rn(i,s):!0}function mm(e,r,a){var n=!1,i=Or,s=r.contextType;return typeof s=="object"&&s!==null?s=Lt(s):(i=pt(r)?Zr:tt.current,n=r.contextTypes,s=(n=n!=null)?_a(e,i):Or),r=new r(a,s),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ss,e.stateNode=r,r._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),r}function ku(e,r,a,n){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,n),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,n),r.state!==e&&Ss.enqueueReplaceState(r,r.state,null)}function ro(e,r,a,n){var i=e.stateNode;i.props=a,i.state=e.memoizedState,i.refs={},Jo(e);var s=r.contextType;typeof s=="object"&&s!==null?i.context=Lt(s):(s=pt(r)?Zr:tt.current,i.context=_a(e,s)),i.state=e.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(to(e,r,s,a),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Ss.enqueueReplaceState(i,i.state,null),rs(e,a,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Da(e,r){try{var a="",n=r;do a+=Rf(n),n=n.return;while(n);var i=a}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:r,stack:i,digest:null}}function ol(e,r,a){return{value:e,source:null,stack:a??null,digest:r??null}}function ao(e,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var eg=typeof WeakMap=="function"?WeakMap:Map;function hm(e,r,a){a=or(-1,a),a.tag=3,a.payload={element:null};var n=r.value;return a.callback=function(){ls||(ls=!0,ho=n),ao(e,r)},a}function fm(e,r,a){a=or(-1,a),a.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=r.value;a.payload=function(){return n(i)},a.callback=function(){ao(e,r)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(a.callback=function(){ao(e,r),typeof n!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var l=r.stack;this.componentDidCatch(r.value,{componentStack:l!==null?l:""})}),a}function Nu(e,r,a){var n=e.pingCache;if(n===null){n=e.pingCache=new eg;var i=new Set;n.set(r,i)}else i=n.get(r),i===void 0&&(i=new Set,n.set(r,i));i.has(a)||(i.add(a),e=hg.bind(null,e,r,a),r.then(e,e))}function Tu(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Pu(e,r,a,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===r?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=or(-1,1),r.tag=2,Nr(a,r,1))),a.lanes|=1),e)}var tg=mr.ReactCurrentOwner,ut=!1;function nt(e,r,a,n){r.child=e===null?Gp(r,null,a,n):Oa(r,e.child,a,n)}function _u(e,r,a,n,i){a=a.render;var s=r.ref;return ka(r,i),n=ec(e,r,a,n,s,i),a=tc(),e!==null&&!ut?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,pr(e,r,i)):(Le&&a&&Uo(r),r.flags|=1,nt(e,r,n,i),r.child)}function qu(e,r,a,n,i){if(e===null){var s=a.type;return typeof s=="function"&&!dc(s)&&s.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=s,xm(e,r,s,n,i)):(e=qi(a.type,null,n,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(a=a.compare,a=a!==null?a:Rn,a(l,n)&&e.ref===r.ref)return pr(e,r,i)}return r.flags|=1,e=_r(s,n),e.ref=r.ref,e.return=r,r.child=e}function xm(e,r,a,n,i){if(e!==null){var s=e.memoizedProps;if(Rn(s,n)&&e.ref===r.ref)if(ut=!1,r.pendingProps=n=s,(e.lanes&i)!==0)e.flags&131072&&(ut=!0);else return r.lanes=e.lanes,pr(e,r,i)}return no(e,r,a,n,i)}function gm(e,r,a){var n=r.pendingProps,i=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(Ca,ft),ft|=a;else{if(!(a&1073741824))return e=s!==null?s.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,Se(Ca,ft),ft|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:a,Se(Ca,ft),ft|=n}else s!==null?(n=s.baseLanes|a,r.memoizedState=null):n=a,Se(Ca,ft),ft|=n;return nt(e,r,i,a),r.child}function vm(e,r){var a=r.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function no(e,r,a,n,i){var s=pt(a)?Zr:tt.current;return s=_a(r,s),ka(r,i),a=ec(e,r,a,n,s,i),n=tc(),e!==null&&!ut?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,pr(e,r,i)):(Le&&n&&Uo(r),r.flags|=1,nt(e,r,a,i),r.child)}function Ou(e,r,a,n,i){if(pt(a)){var s=!0;Yi(r)}else s=!1;if(ka(r,i),r.stateNode===null)Ti(e,r),mm(r,a,n),ro(r,a,n,i),n=!0;else if(e===null){var l=r.stateNode,o=r.memoizedProps;l.props=o;var c=l.context,u=a.contextType;typeof u=="object"&&u!==null?u=Lt(u):(u=pt(a)?Zr:tt.current,u=_a(r,u));var m=a.getDerivedStateFromProps,d=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==n||c!==u)&&ku(r,l,n,u),jr=!1;var f=r.memoizedState;l.state=f,rs(r,n,l,i),c=r.memoizedState,o!==n||f!==c||dt.current||jr?(typeof m=="function"&&(to(r,a,m,n),c=r.memoizedState),(o=jr||Mu(r,a,o,n,f,c,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=n,r.memoizedState=c),l.props=n,l.state=c,l.context=u,n=o):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),n=!1)}else{l=r.stateNode,Hp(e,r),o=r.memoizedProps,u=r.type===r.elementType?o:qt(r.type,o),l.props=u,d=r.pendingProps,f=l.context,c=a.contextType,typeof c=="object"&&c!==null?c=Lt(c):(c=pt(a)?Zr:tt.current,c=_a(r,c));var y=a.getDerivedStateFromProps;(m=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==d||f!==c)&&ku(r,l,n,c),jr=!1,f=r.memoizedState,l.state=f,rs(r,n,l,i);var g=r.memoizedState;o!==d||f!==g||dt.current||jr?(typeof y=="function"&&(to(r,a,y,n),g=r.memoizedState),(u=jr||Mu(r,a,u,n,f,g,c)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,g,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,g,c)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(r.flags|=1024),r.memoizedProps=n,r.memoizedState=g),l.props=n,l.state=g,l.context=c,n=u):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(r.flags|=1024),n=!1)}return io(e,r,a,n,s,i)}function io(e,r,a,n,i,s){vm(e,r);var l=(r.flags&128)!==0;if(!n&&!l)return i&&yu(r,a,!1),pr(e,r,s);n=r.stateNode,tg.current=r;var o=l&&typeof a.getDerivedStateFromError!="function"?null:n.render();return r.flags|=1,e!==null&&l?(r.child=Oa(r,e.child,null,s),r.child=Oa(r,null,o,s)):nt(e,r,o,s),r.memoizedState=n.state,i&&yu(r,a,!0),r.child}function jm(e){var r=e.stateNode;r.pendingContext?bu(e,r.pendingContext,r.pendingContext!==r.context):r.context&&bu(e,r.context,!1),Ko(e,r.containerInfo)}function Iu(e,r,a,n,i){return qa(),Go(i),r.flags|=256,nt(e,r,a,n),r.child}var so={dehydrated:null,treeContext:null,retryLane:0};function lo(e){return{baseLanes:e,cachePool:null,transitions:null}}function bm(e,r,a){var n=r.pendingProps,i=ke.current,s=!1,l=(r.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(s=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Se(ke,i&1),e===null)return Zl(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(l=n.children,e=n.fallback,s?(n=r.mode,s=r.child,l={mode:"hidden",children:l},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Es(l,n,0,null),e=Xr(e,n,a,null),s.return=r,e.return=r,s.sibling=e,r.child=s,r.child.memoizedState=lo(a),r.memoizedState=so,e):nc(r,l));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return rg(e,r,l,n,o,i,a);if(s){s=n.fallback,l=r.mode,i=e.child,o=i.sibling;var c={mode:"hidden",children:n.children};return!(l&1)&&r.child!==i?(n=r.child,n.childLanes=0,n.pendingProps=c,r.deletions=null):(n=_r(i,c),n.subtreeFlags=i.subtreeFlags&14680064),o!==null?s=_r(o,s):(s=Xr(s,l,a,null),s.flags|=2),s.return=r,n.return=r,n.sibling=s,r.child=n,n=s,s=r.child,l=e.child.memoizedState,l=l===null?lo(a):{baseLanes:l.baseLanes|a,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~a,r.memoizedState=so,n}return s=e.child,e=s.sibling,n=_r(s,{mode:"visible",children:n.children}),!(r.mode&1)&&(n.lanes=a),n.return=r,n.sibling=null,e!==null&&(a=r.deletions,a===null?(r.deletions=[e],r.flags|=16):a.push(e)),r.child=n,r.memoizedState=null,n}function nc(e,r){return r=Es({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function fi(e,r,a,n){return n!==null&&Go(n),Oa(r,e.child,null,a),e=nc(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function rg(e,r,a,n,i,s,l){if(a)return r.flags&256?(r.flags&=-257,n=ol(Error(D(422))),fi(e,r,l,n)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(s=n.fallback,i=r.mode,n=Es({mode:"visible",children:n.children},i,0,null),s=Xr(s,i,l,null),s.flags|=2,n.return=r,s.return=r,n.sibling=s,r.child=n,r.mode&1&&Oa(r,e.child,null,l),r.child.memoizedState=lo(l),r.memoizedState=so,s);if(!(r.mode&1))return fi(e,r,l,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var o=n.dgst;return n=o,s=Error(D(419)),n=ol(s,n,void 0),fi(e,r,l,n)}if(o=(l&e.childLanes)!==0,ut||o){if(n=Ge,n!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,dr(e,i),Ft(n,e,i,-1))}return uc(),n=ol(Error(D(421))),fi(e,r,l,n)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=fg.bind(null,e),i._reactRetry=r,null):(e=s.treeContext,gt=kr(i.nextSibling),vt=r,Le=!0,It=null,e!==null&&(Ct[Et++]=sr,Ct[Et++]=lr,Ct[Et++]=ea,sr=e.id,lr=e.overflow,ea=r),r=nc(r,n.children),r.flags|=4096,r)}function Du(e,r,a){e.lanes|=r;var n=e.alternate;n!==null&&(n.lanes|=r),eo(e.return,r,a)}function cl(e,r,a,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=i)}function ym(e,r,a){var n=r.pendingProps,i=n.revealOrder,s=n.tail;if(nt(e,r,n.children,a),n=ke.current,n&2)n=n&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Du(e,a,r);else if(e.tag===19)Du(e,a,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Se(ke,n),!(r.mode&1))r.memoizedState=null;else switch(i){case"forwards":for(a=r.child,i=null;a!==null;)e=a.alternate,e!==null&&as(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=r.child,r.child=null):(i=a.sibling,a.sibling=null),cl(r,!1,i,a,s);break;case"backwards":for(a=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&as(e)===null){r.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}cl(r,!0,a,null,s);break;case"together":cl(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ti(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function pr(e,r,a){if(e!==null&&(r.dependencies=e.dependencies),ra|=r.lanes,!(a&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(D(153));if(r.child!==null){for(e=r.child,a=_r(e,e.pendingProps),r.child=a,a.return=r;e.sibling!==null;)e=e.sibling,a=a.sibling=_r(e,e.pendingProps),a.return=r;a.sibling=null}return r.child}function ag(e,r,a){switch(r.tag){case 3:jm(r),qa();break;case 5:Qp(r);break;case 1:pt(r.type)&&Yi(r);break;case 4:Ko(r,r.stateNode.containerInfo);break;case 10:var n=r.type._context,i=r.memoizedProps.value;Se(es,n._currentValue),n._currentValue=i;break;case 13:if(n=r.memoizedState,n!==null)return n.dehydrated!==null?(Se(ke,ke.current&1),r.flags|=128,null):a&r.child.childLanes?bm(e,r,a):(Se(ke,ke.current&1),e=pr(e,r,a),e!==null?e.sibling:null);Se(ke,ke.current&1);break;case 19:if(n=(a&r.childLanes)!==0,e.flags&128){if(n)return ym(e,r,a);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(ke,ke.current),n)break;return null;case 22:case 23:return r.lanes=0,gm(e,r,a)}return pr(e,r,a)}var Sm,oo,wm,Cm;Sm=function(e,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};oo=function(){};wm=function(e,r,a,n){var i=e.memoizedProps;if(i!==n){e=r.stateNode,Jr(Wt.current);var s=null;switch(a){case"input":i=kl(e,i),n=kl(e,n),s=[];break;case"select":i=Te({},i,{value:void 0}),n=Te({},n,{value:void 0}),s=[];break;case"textarea":i=Pl(e,i),n=Pl(e,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ji)}ql(a,n);var l;a=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(l in o)o.hasOwnProperty(l)&&(a||(a={}),a[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bn.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in n){var c=n[u];if(o=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(a||(a={}),a[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(a||(a={}),a[l]=c[l])}else a||(s||(s=[]),s.push(u,a)),a=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ce("scroll",e),s||o===c||(s=[])):(s=s||[]).push(u,c))}a&&(s=s||[]).push("style",a);var u=s;(r.updateQueue=u)&&(r.flags|=4)}};Cm=function(e,r,a,n){a!==n&&(r.flags|=4)};function Xa(e,r){if(!Le)switch(e.tailMode){case"hidden":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Xe(e){var r=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(r)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,r}function ng(e,r,a){var n=r.pendingProps;switch($o(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(r),null;case 1:return pt(r.type)&&Ki(),Xe(r),null;case 3:return n=r.stateNode,Ia(),Ae(dt),Ae(tt),Xo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(mi(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,It!==null&&(go(It),It=null))),oo(e,r),Xe(r),null;case 5:Yo(r);var i=Jr(Tn.current);if(a=r.type,e!==null&&r.stateNode!=null)wm(e,r,a,n,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!n){if(r.stateNode===null)throw Error(D(166));return Xe(r),null}if(e=Jr(Wt.current),mi(r)){n=r.stateNode,a=r.type;var s=r.memoizedProps;switch(n[Ht]=r,n[kn]=s,e=(r.mode&1)!==0,a){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(i=0;i<ln.length;i++)Ce(ln[i],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Qc(n,s),Ce("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},Ce("invalid",n);break;case"textarea":Jc(n,s),Ce("invalid",n)}ql(a,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var o=s[l];l==="children"?typeof o=="string"?n.textContent!==o&&(s.suppressHydrationWarning!==!0&&pi(n.textContent,o,e),i=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&pi(n.textContent,o,e),i=["children",""+o]):bn.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&Ce("scroll",n)}switch(a){case"input":ni(n),Wc(n,s,!0);break;case"textarea":ni(n),Kc(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Ji)}n=i,r.updateQueue=n,n!==null&&(r.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xd(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(a,{is:n.is}):(e=l.createElement(a),a==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,a),e[Ht]=r,e[kn]=n,Sm(e,r,!1,!1),r.stateNode=e;e:{switch(l=Ol(a,n),a){case"dialog":Ce("cancel",e),Ce("close",e),i=n;break;case"iframe":case"object":case"embed":Ce("load",e),i=n;break;case"video":case"audio":for(i=0;i<ln.length;i++)Ce(ln[i],e);i=n;break;case"source":Ce("error",e),i=n;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),i=n;break;case"details":Ce("toggle",e),i=n;break;case"input":Qc(e,n),i=kl(e,n),Ce("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=Te({},n,{value:void 0}),Ce("invalid",e);break;case"textarea":Jc(e,n),i=Pl(e,n),Ce("invalid",e);break;default:i=n}ql(a,i),o=i;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?tp(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Zd(e,c)):s==="children"?typeof c=="string"?(a!=="textarea"||c!=="")&&yn(e,c):typeof c=="number"&&yn(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bn.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Ce("scroll",e):c!=null&&Lo(e,s,c,l))}switch(a){case"input":ni(e),Wc(e,n,!1);break;case"textarea":ni(e),Kc(e);break;case"option":n.value!=null&&e.setAttribute("value",""+qr(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Aa(e,!!n.multiple,s,!1):n.defaultValue!=null&&Aa(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ji)}switch(a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Xe(r),null;case 6:if(e&&r.stateNode!=null)Cm(e,r,e.memoizedProps,n);else{if(typeof n!="string"&&r.stateNode===null)throw Error(D(166));if(a=Jr(Tn.current),Jr(Wt.current),mi(r)){if(n=r.stateNode,a=r.memoizedProps,n[Ht]=r,(s=n.nodeValue!==a)&&(e=vt,e!==null))switch(e.tag){case 3:pi(n.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pi(n.nodeValue,a,(e.mode&1)!==0)}s&&(r.flags|=4)}else n=(a.nodeType===9?a:a.ownerDocument).createTextNode(n),n[Ht]=r,r.stateNode=n}return Xe(r),null;case 13:if(Ae(ke),n=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&gt!==null&&r.mode&1&&!(r.flags&128))Up(),qa(),r.flags|=98560,s=!1;else if(s=mi(r),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(D(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[Ht]=r}else qa(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Xe(r),s=!1}else It!==null&&(go(It),It=null),s=!0;if(!s)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(r.child.flags|=8192,r.mode&1&&(e===null||ke.current&1?Be===0&&(Be=3):uc())),r.updateQueue!==null&&(r.flags|=4),Xe(r),null);case 4:return Ia(),oo(e,r),e===null&&Ln(r.stateNode.containerInfo),Xe(r),null;case 10:return Qo(r.type._context),Xe(r),null;case 17:return pt(r.type)&&Ki(),Xe(r),null;case 19:if(Ae(ke),s=r.memoizedState,s===null)return Xe(r),null;if(n=(r.flags&128)!==0,l=s.rendering,l===null)if(n)Xa(s,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(l=as(e),l!==null){for(r.flags|=128,Xa(s,!1),n=l.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),r.subtreeFlags=0,n=a,a=r.child;a!==null;)s=a,e=n,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return Se(ke,ke.current&1|2),r.child}e=e.sibling}s.tail!==null&&Oe()>Fa&&(r.flags|=128,n=!0,Xa(s,!1),r.lanes=4194304)}else{if(!n)if(e=as(l),e!==null){if(r.flags|=128,n=!0,a=e.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Xa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Le)return Xe(r),null}else 2*Oe()-s.renderingStartTime>Fa&&a!==1073741824&&(r.flags|=128,n=!0,Xa(s,!1),r.lanes=4194304);s.isBackwards?(l.sibling=r.child,r.child=l):(a=s.last,a!==null?a.sibling=l:r.child=l,s.last=l)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=Oe(),r.sibling=null,a=ke.current,Se(ke,n?a&1|2:a&1),r):(Xe(r),null);case 22:case 23:return cc(),n=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(r.flags|=8192),n&&r.mode&1?ft&1073741824&&(Xe(r),r.subtreeFlags&6&&(r.flags|=8192)):Xe(r),null;case 24:return null;case 25:return null}throw Error(D(156,r.tag))}function ig(e,r){switch($o(r),r.tag){case 1:return pt(r.type)&&Ki(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Ia(),Ae(dt),Ae(tt),Xo(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return Yo(r),null;case 13:if(Ae(ke),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(D(340));qa()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Ae(ke),null;case 4:return Ia(),null;case 10:return Qo(r.type._context),null;case 22:case 23:return cc(),null;case 24:return null;default:return null}}var xi=!1,et=!1,sg=typeof WeakSet=="function"?WeakSet:Set,Q=null;function wa(e,r){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(n){_e(e,r,n)}else a.current=null}function co(e,r,a){try{a()}catch(n){_e(e,r,n)}}var Fu=!1;function lg(e,r){if(Hl=Hi,e=Mp(),Bo(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var l=0,o=-1,c=-1,u=0,m=0,d=e,f=null;t:for(;;){for(var y;d!==a||i!==0&&d.nodeType!==3||(o=l+i),d!==s||n!==0&&d.nodeType!==3||(c=l+n),d.nodeType===3&&(l+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===e)break t;if(f===a&&++u===i&&(o=l),f===s&&++m===n&&(c=l),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}a=o===-1||c===-1?null:{start:o,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ql={focusedElem:e,selectionRange:a},Hi=!1,Q=r;Q!==null;)if(r=Q,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,Q=e;else for(;Q!==null;){r=Q;try{var g=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var b=g.memoizedProps,S=g.memoizedState,h=r.stateNode,p=h.getSnapshotBeforeUpdate(r.elementType===r.type?b:qt(r.type,b),S);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=r.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(L){_e(r,r.return,L)}if(e=r.sibling,e!==null){e.return=r.return,Q=e;break}Q=r.return}return g=Fu,Fu=!1,g}function xn(e,r,a){var n=r.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&co(r,a,s)}i=i.next}while(i!==n)}}function ws(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var n=a.create;a.destroy=n()}a=a.next}while(a!==r)}}function uo(e){var r=e.ref;if(r!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof r=="function"?r(e):r.current=e}}function Em(e){var r=e.alternate;r!==null&&(e.alternate=null,Em(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Ht],delete r[kn],delete r[Kl],delete r[$x],delete r[Gx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Am(e){return e.tag===5||e.tag===3||e.tag===4}function zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Am(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function po(e,r,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(e,r):a.insertBefore(e,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(e,a)):(r=a,r.appendChild(e)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Ji));else if(n!==4&&(e=e.child,e!==null))for(po(e,r,a),e=e.sibling;e!==null;)po(e,r,a),e=e.sibling}function mo(e,r,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?a.insertBefore(e,r):a.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(mo(e,r,a),e=e.sibling;e!==null;)mo(e,r,a),e=e.sibling}var He=null,Ot=!1;function fr(e,r,a){for(a=a.child;a!==null;)Rm(e,r,a),a=a.sibling}function Rm(e,r,a){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(fs,a)}catch{}switch(a.tag){case 5:et||wa(a,r);case 6:var n=He,i=Ot;He=null,fr(e,r,a),He=n,Ot=i,He!==null&&(Ot?(e=He,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):He.removeChild(a.stateNode));break;case 18:He!==null&&(Ot?(e=He,a=a.stateNode,e.nodeType===8?rl(e.parentNode,a):e.nodeType===1&&rl(e,a),En(e)):rl(He,a.stateNode));break;case 4:n=He,i=Ot,He=a.stateNode.containerInfo,Ot=!0,fr(e,r,a),He=n,Ot=i;break;case 0:case 11:case 14:case 15:if(!et&&(n=a.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&co(a,r,l),i=i.next}while(i!==n)}fr(e,r,a);break;case 1:if(!et&&(wa(a,r),n=a.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=a.memoizedProps,n.state=a.memoizedState,n.componentWillUnmount()}catch(o){_e(a,r,o)}fr(e,r,a);break;case 21:fr(e,r,a);break;case 22:a.mode&1?(et=(n=et)||a.memoizedState!==null,fr(e,r,a),et=n):fr(e,r,a);break;default:fr(e,r,a)}}function Bu(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new sg),r.forEach(function(n){var i=xg.bind(null,e,n);a.has(n)||(a.add(n),n.then(i,i))})}}function Pt(e,r){var a=r.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n];try{var s=e,l=r,o=l;e:for(;o!==null;){switch(o.tag){case 5:He=o.stateNode,Ot=!1;break e;case 3:He=o.stateNode.containerInfo,Ot=!0;break e;case 4:He=o.stateNode.containerInfo,Ot=!0;break e}o=o.return}if(He===null)throw Error(D(160));Rm(s,l,i),He=null,Ot=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){_e(i,r,u)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Lm(r,e),r=r.sibling}function Lm(e,r){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pt(r,e),$t(e),n&4){try{xn(3,e,e.return),ws(3,e)}catch(b){_e(e,e.return,b)}try{xn(5,e,e.return)}catch(b){_e(e,e.return,b)}}break;case 1:Pt(r,e),$t(e),n&512&&a!==null&&wa(a,a.return);break;case 5:if(Pt(r,e),$t(e),n&512&&a!==null&&wa(a,a.return),e.flags&32){var i=e.stateNode;try{yn(i,"")}catch(b){_e(e,e.return,b)}}if(n&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=a!==null?a.memoizedProps:s,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Kd(i,s),Ol(o,l);var u=Ol(o,s);for(l=0;l<c.length;l+=2){var m=c[l],d=c[l+1];m==="style"?tp(i,d):m==="dangerouslySetInnerHTML"?Zd(i,d):m==="children"?yn(i,d):Lo(i,m,d,u)}switch(o){case"input":Nl(i,s);break;case"textarea":Yd(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Aa(i,!!s.multiple,y,!1):f!==!!s.multiple&&(s.defaultValue!=null?Aa(i,!!s.multiple,s.defaultValue,!0):Aa(i,!!s.multiple,s.multiple?[]:"",!1))}i[kn]=s}catch(b){_e(e,e.return,b)}}break;case 6:if(Pt(r,e),$t(e),n&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(b){_e(e,e.return,b)}}break;case 3:if(Pt(r,e),$t(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{En(r.containerInfo)}catch(b){_e(e,e.return,b)}break;case 4:Pt(r,e),$t(e);break;case 13:Pt(r,e),$t(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(lc=Oe())),n&4&&Bu(e);break;case 22:if(m=a!==null&&a.memoizedState!==null,e.mode&1?(et=(u=et)||m,Pt(r,e),et=u):Pt(r,e),$t(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(Q=e,m=e.child;m!==null;){for(d=Q=m;Q!==null;){switch(f=Q,y=f.child,f.tag){case 0:case 11:case 14:case 15:xn(4,f,f.return);break;case 1:wa(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){n=f,a=f.return;try{r=n,g.props=r.memoizedProps,g.state=r.memoizedState,g.componentWillUnmount()}catch(b){_e(n,a,b)}}break;case 5:wa(f,f.return);break;case 22:if(f.memoizedState!==null){$u(d);continue}}y!==null?(y.return=f,Q=y):$u(d)}m=m.sibling}e:for(m=null,d=e;;){if(d.tag===5){if(m===null){m=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,c=d.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=ep("display",l))}catch(b){_e(e,e.return,b)}}}else if(d.tag===6){if(m===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(b){_e(e,e.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;m===d&&(m=null),d=d.return}m===d&&(m=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Pt(r,e),$t(e),n&4&&Bu(e);break;case 21:break;default:Pt(r,e),$t(e)}}function $t(e){var r=e.flags;if(r&2){try{e:{for(var a=e.return;a!==null;){if(Am(a)){var n=a;break e}a=a.return}throw Error(D(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(yn(i,""),n.flags&=-33);var s=zu(e);mo(e,s,i);break;case 3:case 4:var l=n.stateNode.containerInfo,o=zu(e);po(e,o,l);break;default:throw Error(D(161))}}catch(c){_e(e,e.return,c)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function og(e,r,a){Q=e,Mm(e)}function Mm(e,r,a){for(var n=(e.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&n){var l=i.memoizedState!==null||xi;if(!l){var o=i.alternate,c=o!==null&&o.memoizedState!==null||et;o=xi;var u=et;if(xi=l,(et=c)&&!u)for(Q=i;Q!==null;)l=Q,c=l.child,l.tag===22&&l.memoizedState!==null?Gu(i):c!==null?(c.return=l,Q=c):Gu(i);for(;s!==null;)Q=s,Mm(s),s=s.sibling;Q=i,xi=o,et=u}Uu(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):Uu(e)}}function Uu(e){for(;Q!==null;){var r=Q;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:et||ws(5,r);break;case 1:var n=r.stateNode;if(r.flags&4&&!et)if(a===null)n.componentDidMount();else{var i=r.elementType===r.type?a.memoizedProps:qt(r.type,a.memoizedProps);n.componentDidUpdate(i,a.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&Au(r,s,n);break;case 3:var l=r.updateQueue;if(l!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Au(r,l,a)}break;case 5:var o=r.stateNode;if(a===null&&r.flags&4){a=o;var c=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&a.focus();break;case"img":c.src&&(a.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var u=r.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var d=m.dehydrated;d!==null&&En(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}et||r.flags&512&&uo(r)}catch(f){_e(r,r.return,f)}}if(r===e){Q=null;break}if(a=r.sibling,a!==null){a.return=r.return,Q=a;break}Q=r.return}}function $u(e){for(;Q!==null;){var r=Q;if(r===e){Q=null;break}var a=r.sibling;if(a!==null){a.return=r.return,Q=a;break}Q=r.return}}function Gu(e){for(;Q!==null;){var r=Q;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{ws(4,r)}catch(c){_e(r,a,c)}break;case 1:var n=r.stateNode;if(typeof n.componentDidMount=="function"){var i=r.return;try{n.componentDidMount()}catch(c){_e(r,i,c)}}var s=r.return;try{uo(r)}catch(c){_e(r,s,c)}break;case 5:var l=r.return;try{uo(r)}catch(c){_e(r,l,c)}}}catch(c){_e(r,r.return,c)}if(r===e){Q=null;break}var o=r.sibling;if(o!==null){o.return=r.return,Q=o;break}Q=r.return}}var cg=Math.ceil,ss=mr.ReactCurrentDispatcher,ic=mr.ReactCurrentOwner,Rt=mr.ReactCurrentBatchConfig,xe=0,Ge=null,De=null,Qe=0,ft=0,Ca=Dr(0),Be=0,On=null,ra=0,Cs=0,sc=0,gn=null,ct=null,lc=0,Fa=1/0,nr=null,ls=!1,ho=null,Tr=null,gi=!1,Er=null,os=0,vn=0,fo=null,Pi=-1,_i=0;function st(){return xe&6?Oe():Pi!==-1?Pi:Pi=Oe()}function Pr(e){return e.mode&1?xe&2&&Qe!==0?Qe&-Qe:Hx.transition!==null?(_i===0&&(_i=mp()),_i):(e=je,e!==0||(e=window.event,e=e===void 0?16:bp(e.type)),e):1}function Ft(e,r,a,n){if(50<vn)throw vn=0,fo=null,Error(D(185));Bn(e,a,n),(!(xe&2)||e!==Ge)&&(e===Ge&&(!(xe&2)&&(Cs|=a),Be===4&&yr(e,Qe)),mt(e,n),a===1&&xe===0&&!(r.mode&1)&&(Fa=Oe()+500,bs&&Fr()))}function mt(e,r){var a=e.callbackNode;Hf(e,r);var n=Vi(e,e===Ge?Qe:0);if(n===0)a!==null&&Zc(a),e.callbackNode=null,e.callbackPriority=0;else if(r=n&-n,e.callbackPriority!==r){if(a!=null&&Zc(a),r===1)e.tag===0?Vx(Vu.bind(null,e)):Fp(Vu.bind(null,e)),Bx(function(){!(xe&6)&&Fr()}),a=null;else{switch(hp(n)){case 1:a=Po;break;case 4:a=dp;break;case 16:a=Gi;break;case 536870912:a=pp;break;default:a=Gi}a=Im(a,km.bind(null,e))}e.callbackPriority=r,e.callbackNode=a}}function km(e,r){if(Pi=-1,_i=0,xe&6)throw Error(D(327));var a=e.callbackNode;if(Na()&&e.callbackNode!==a)return null;var n=Vi(e,e===Ge?Qe:0);if(n===0)return null;if(n&30||n&e.expiredLanes||r)r=cs(e,n);else{r=n;var i=xe;xe|=2;var s=Tm();(Ge!==e||Qe!==r)&&(nr=null,Fa=Oe()+500,Yr(e,r));do try{pg();break}catch(o){Nm(e,o)}while(!0);Ho(),ss.current=s,xe=i,De!==null?r=0:(Ge=null,Qe=0,r=Be)}if(r!==0){if(r===2&&(i=Bl(e),i!==0&&(n=i,r=xo(e,i))),r===1)throw a=On,Yr(e,0),yr(e,n),mt(e,Oe()),a;if(r===6)yr(e,n);else{if(i=e.current.alternate,!(n&30)&&!ug(i)&&(r=cs(e,n),r===2&&(s=Bl(e),s!==0&&(n=s,r=xo(e,s))),r===1))throw a=On,Yr(e,0),yr(e,n),mt(e,Oe()),a;switch(e.finishedWork=i,e.finishedLanes=n,r){case 0:case 1:throw Error(D(345));case 2:Hr(e,ct,nr);break;case 3:if(yr(e,n),(n&130023424)===n&&(r=lc+500-Oe(),10<r)){if(Vi(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){st(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Jl(Hr.bind(null,e,ct,nr),r);break}Hr(e,ct,nr);break;case 4:if(yr(e,n),(n&4194240)===n)break;for(r=e.eventTimes,i=-1;0<n;){var l=31-Dt(n);s=1<<l,l=r[l],l>i&&(i=l),n&=~s}if(n=i,n=Oe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*cg(n/1960))-n,10<n){e.timeoutHandle=Jl(Hr.bind(null,e,ct,nr),n);break}Hr(e,ct,nr);break;case 5:Hr(e,ct,nr);break;default:throw Error(D(329))}}}return mt(e,Oe()),e.callbackNode===a?km.bind(null,e):null}function xo(e,r){var a=gn;return e.current.memoizedState.isDehydrated&&(Yr(e,r).flags|=256),e=cs(e,r),e!==2&&(r=ct,ct=a,r!==null&&go(r)),e}function go(e){ct===null?ct=e:ct.push.apply(ct,e)}function ug(e){for(var r=e;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var n=0;n<a.length;n++){var i=a[n],s=i.getSnapshot;i=i.value;try{if(!Bt(s(),i))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function yr(e,r){for(r&=~sc,r&=~Cs,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var a=31-Dt(r),n=1<<a;e[a]=-1,r&=~n}}function Vu(e){if(xe&6)throw Error(D(327));Na();var r=Vi(e,0);if(!(r&1))return mt(e,Oe()),null;var a=cs(e,r);if(e.tag!==0&&a===2){var n=Bl(e);n!==0&&(r=n,a=xo(e,n))}if(a===1)throw a=On,Yr(e,0),yr(e,r),mt(e,Oe()),a;if(a===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Hr(e,ct,nr),mt(e,Oe()),null}function oc(e,r){var a=xe;xe|=1;try{return e(r)}finally{xe=a,xe===0&&(Fa=Oe()+500,bs&&Fr())}}function aa(e){Er!==null&&Er.tag===0&&!(xe&6)&&Na();var r=xe;xe|=1;var a=Rt.transition,n=je;try{if(Rt.transition=null,je=1,e)return e()}finally{je=n,Rt.transition=a,xe=r,!(xe&6)&&Fr()}}function cc(){ft=Ca.current,Ae(Ca)}function Yr(e,r){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,zx(a)),De!==null)for(a=De.return;a!==null;){var n=a;switch($o(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ki();break;case 3:Ia(),Ae(dt),Ae(tt),Xo();break;case 5:Yo(n);break;case 4:Ia();break;case 13:Ae(ke);break;case 19:Ae(ke);break;case 10:Qo(n.type._context);break;case 22:case 23:cc()}a=a.return}if(Ge=e,De=e=_r(e.current,null),Qe=ft=r,Be=0,On=null,sc=Cs=ra=0,ct=gn=null,Wr!==null){for(r=0;r<Wr.length;r++)if(a=Wr[r],n=a.interleaved,n!==null){a.interleaved=null;var i=n.next,s=a.pending;if(s!==null){var l=s.next;s.next=i,n.next=l}a.pending=n}Wr=null}return e}function Nm(e,r){do{var a=De;try{if(Ho(),ki.current=is,ns){for(var n=Ne.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}ns=!1}if(ta=0,$e=ze=Ne=null,fn=!1,Pn=0,ic.current=null,a===null||a.return===null){Be=1,On=r,De=null;break}e:{var s=e,l=a.return,o=a,c=r;if(r=Qe,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=o,d=m.tag;if(!(m.mode&1)&&(d===0||d===11||d===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Tu(l);if(y!==null){y.flags&=-257,Pu(y,l,o,s,r),y.mode&1&&Nu(s,u,r),r=y,c=u;var g=r.updateQueue;if(g===null){var b=new Set;b.add(c),r.updateQueue=b}else g.add(c);break e}else{if(!(r&1)){Nu(s,u,r),uc();break e}c=Error(D(426))}}else if(Le&&o.mode&1){var S=Tu(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Pu(S,l,o,s,r),Go(Da(c,o));break e}}s=c=Da(c,o),Be!==4&&(Be=2),gn===null?gn=[s]:gn.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var h=hm(s,c,r);Eu(s,h);break e;case 1:o=c;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Tr===null||!Tr.has(v)))){s.flags|=65536,r&=-r,s.lanes|=r;var L=fm(s,o,r);Eu(s,L);break e}}s=s.return}while(s!==null)}_m(a)}catch(k){r=k,De===a&&a!==null&&(De=a=a.return);continue}break}while(!0)}function Tm(){var e=ss.current;return ss.current=is,e===null?is:e}function uc(){(Be===0||Be===3||Be===2)&&(Be=4),Ge===null||!(ra&268435455)&&!(Cs&268435455)||yr(Ge,Qe)}function cs(e,r){var a=xe;xe|=2;var n=Tm();(Ge!==e||Qe!==r)&&(nr=null,Yr(e,r));do try{dg();break}catch(i){Nm(e,i)}while(!0);if(Ho(),xe=a,ss.current=n,De!==null)throw Error(D(261));return Ge=null,Qe=0,Be}function dg(){for(;De!==null;)Pm(De)}function pg(){for(;De!==null&&!If();)Pm(De)}function Pm(e){var r=Om(e.alternate,e,ft);e.memoizedProps=e.pendingProps,r===null?_m(e):De=r,ic.current=null}function _m(e){var r=e;do{var a=r.alternate;if(e=r.return,r.flags&32768){if(a=ig(a,r),a!==null){a.flags&=32767,De=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,De=null;return}}else if(a=ng(a,r,ft),a!==null){De=a;return}if(r=r.sibling,r!==null){De=r;return}De=r=e}while(r!==null);Be===0&&(Be=5)}function Hr(e,r,a){var n=je,i=Rt.transition;try{Rt.transition=null,je=1,mg(e,r,a,n)}finally{Rt.transition=i,je=n}return null}function mg(e,r,a,n){do Na();while(Er!==null);if(xe&6)throw Error(D(327));a=e.finishedWork;var i=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var s=a.lanes|a.childLanes;if(Qf(e,s),e===Ge&&(De=Ge=null,Qe=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||gi||(gi=!0,Im(Gi,function(){return Na(),null})),s=(a.flags&15990)!==0,a.subtreeFlags&15990||s){s=Rt.transition,Rt.transition=null;var l=je;je=1;var o=xe;xe|=4,ic.current=null,lg(e,a),Lm(a,e),Px(Ql),Hi=!!Hl,Ql=Hl=null,e.current=a,og(a),Df(),xe=o,je=l,Rt.transition=s}else e.current=a;if(gi&&(gi=!1,Er=e,os=i),s=e.pendingLanes,s===0&&(Tr=null),Bf(a.stateNode),mt(e,Oe()),r!==null)for(n=e.onRecoverableError,a=0;a<r.length;a++)i=r[a],n(i.value,{componentStack:i.stack,digest:i.digest});if(ls)throw ls=!1,e=ho,ho=null,e;return os&1&&e.tag!==0&&Na(),s=e.pendingLanes,s&1?e===fo?vn++:(vn=0,fo=e):vn=0,Fr(),null}function Na(){if(Er!==null){var e=hp(os),r=Rt.transition,a=je;try{if(Rt.transition=null,je=16>e?16:e,Er===null)var n=!1;else{if(e=Er,Er=null,os=0,xe&6)throw Error(D(331));var i=xe;for(xe|=4,Q=e.current;Q!==null;){var s=Q,l=s.child;if(Q.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(Q=u;Q!==null;){var m=Q;switch(m.tag){case 0:case 11:case 15:xn(8,m,s)}var d=m.child;if(d!==null)d.return=m,Q=d;else for(;Q!==null;){m=Q;var f=m.sibling,y=m.return;if(Em(m),m===u){Q=null;break}if(f!==null){f.return=y,Q=f;break}Q=y}}}var g=s.alternate;if(g!==null){var b=g.child;if(b!==null){g.child=null;do{var S=b.sibling;b.sibling=null,b=S}while(b!==null)}}Q=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,Q=l;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xn(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Q=h;break e}Q=s.return}}var p=e.current;for(Q=p;Q!==null;){l=Q;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,Q=v;else e:for(l=p;Q!==null;){if(o=Q,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ws(9,o)}}catch(k){_e(o,o.return,k)}if(o===l){Q=null;break e}var L=o.sibling;if(L!==null){L.return=o.return,Q=L;break e}Q=o.return}}if(xe=i,Fr(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(fs,e)}catch{}n=!0}return n}finally{je=a,Rt.transition=r}}return!1}function Hu(e,r,a){r=Da(a,r),r=hm(e,r,1),e=Nr(e,r,1),r=st(),e!==null&&(Bn(e,1,r),mt(e,r))}function _e(e,r,a){if(e.tag===3)Hu(e,e,a);else for(;r!==null;){if(r.tag===3){Hu(r,e,a);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Tr===null||!Tr.has(n))){e=Da(a,e),e=fm(r,e,1),r=Nr(r,e,1),e=st(),r!==null&&(Bn(r,1,e),mt(r,e));break}}r=r.return}}function hg(e,r,a){var n=e.pingCache;n!==null&&n.delete(r),r=st(),e.pingedLanes|=e.suspendedLanes&a,Ge===e&&(Qe&a)===a&&(Be===4||Be===3&&(Qe&130023424)===Qe&&500>Oe()-lc?Yr(e,0):sc|=a),mt(e,r)}function qm(e,r){r===0&&(e.mode&1?(r=li,li<<=1,!(li&130023424)&&(li=4194304)):r=1);var a=st();e=dr(e,r),e!==null&&(Bn(e,r,a),mt(e,a))}function fg(e){var r=e.memoizedState,a=0;r!==null&&(a=r.retryLane),qm(e,a)}function xg(e,r){var a=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(D(314))}n!==null&&n.delete(r),qm(e,a)}var Om;Om=function(e,r,a){if(e!==null)if(e.memoizedProps!==r.pendingProps||dt.current)ut=!0;else{if(!(e.lanes&a)&&!(r.flags&128))return ut=!1,ag(e,r,a);ut=!!(e.flags&131072)}else ut=!1,Le&&r.flags&1048576&&zp(r,Zi,r.index);switch(r.lanes=0,r.tag){case 2:var n=r.type;Ti(e,r),e=r.pendingProps;var i=_a(r,tt.current);ka(r,a),i=ec(null,r,n,e,i,a);var s=tc();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,pt(n)?(s=!0,Yi(r)):s=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jo(r),i.updater=Ss,r.stateNode=i,i._reactInternals=r,ro(r,n,e,a),r=io(null,r,n,!0,s,a)):(r.tag=0,Le&&s&&Uo(r),nt(null,r,i,a),r=r.child),r;case 16:n=r.elementType;e:{switch(Ti(e,r),e=r.pendingProps,i=n._init,n=i(n._payload),r.type=n,i=r.tag=vg(n),e=qt(n,e),i){case 0:r=no(null,r,n,e,a);break e;case 1:r=Ou(null,r,n,e,a);break e;case 11:r=_u(null,r,n,e,a);break e;case 14:r=qu(null,r,n,qt(n.type,e),a);break e}throw Error(D(306,n,""))}return r;case 0:return n=r.type,i=r.pendingProps,i=r.elementType===n?i:qt(n,i),no(e,r,n,i,a);case 1:return n=r.type,i=r.pendingProps,i=r.elementType===n?i:qt(n,i),Ou(e,r,n,i,a);case 3:e:{if(jm(r),e===null)throw Error(D(387));n=r.pendingProps,s=r.memoizedState,i=s.element,Hp(e,r),rs(r,n,null,a);var l=r.memoizedState;if(n=l.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){i=Da(Error(D(423)),r),r=Iu(e,r,n,a,i);break e}else if(n!==i){i=Da(Error(D(424)),r),r=Iu(e,r,n,a,i);break e}else for(gt=kr(r.stateNode.containerInfo.firstChild),vt=r,Le=!0,It=null,a=Gp(r,null,n,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(qa(),n===i){r=pr(e,r,a);break e}nt(e,r,n,a)}r=r.child}return r;case 5:return Qp(r),e===null&&Zl(r),n=r.type,i=r.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,Wl(n,i)?l=null:s!==null&&Wl(n,s)&&(r.flags|=32),vm(e,r),nt(e,r,l,a),r.child;case 6:return e===null&&Zl(r),null;case 13:return bm(e,r,a);case 4:return Ko(r,r.stateNode.containerInfo),n=r.pendingProps,e===null?r.child=Oa(r,null,n,a):nt(e,r,n,a),r.child;case 11:return n=r.type,i=r.pendingProps,i=r.elementType===n?i:qt(n,i),_u(e,r,n,i,a);case 7:return nt(e,r,r.pendingProps,a),r.child;case 8:return nt(e,r,r.pendingProps.children,a),r.child;case 12:return nt(e,r,r.pendingProps.children,a),r.child;case 10:e:{if(n=r.type._context,i=r.pendingProps,s=r.memoizedProps,l=i.value,Se(es,n._currentValue),n._currentValue=l,s!==null)if(Bt(s.value,l)){if(s.children===i.children&&!dt.current){r=pr(e,r,a);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var o=s.dependencies;if(o!==null){l=s.child;for(var c=o.firstContext;c!==null;){if(c.context===n){if(s.tag===1){c=or(-1,a&-a),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}s.lanes|=a,c=s.alternate,c!==null&&(c.lanes|=a),eo(s.return,a,r),o.lanes|=a;break}c=c.next}}else if(s.tag===10)l=s.type===r.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(D(341));l.lanes|=a,o=l.alternate,o!==null&&(o.lanes|=a),eo(l,a,r),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===r){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}nt(e,r,i.children,a),r=r.child}return r;case 9:return i=r.type,n=r.pendingProps.children,ka(r,a),i=Lt(i),n=n(i),r.flags|=1,nt(e,r,n,a),r.child;case 14:return n=r.type,i=qt(n,r.pendingProps),i=qt(n.type,i),qu(e,r,n,i,a);case 15:return xm(e,r,r.type,r.pendingProps,a);case 17:return n=r.type,i=r.pendingProps,i=r.elementType===n?i:qt(n,i),Ti(e,r),r.tag=1,pt(n)?(e=!0,Yi(r)):e=!1,ka(r,a),mm(r,n,i),ro(r,n,i,a),io(null,r,n,!0,e,a);case 19:return ym(e,r,a);case 22:return gm(e,r,a)}throw Error(D(156,r.tag))};function Im(e,r){return up(e,r)}function gg(e,r,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,r,a,n){return new gg(e,r,a,n)}function dc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vg(e){if(typeof e=="function")return dc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ko)return 11;if(e===No)return 14}return 2}function _r(e,r){var a=e.alternate;return a===null?(a=At(e.tag,r,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=r,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,r=e.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function qi(e,r,a,n,i,s){var l=2;if(n=e,typeof e=="function")dc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case ha:return Xr(a.children,i,s,r);case Mo:l=8,i|=8;break;case Al:return e=At(12,a,r,i|2),e.elementType=Al,e.lanes=s,e;case Rl:return e=At(13,a,r,i),e.elementType=Rl,e.lanes=s,e;case Ll:return e=At(19,a,r,i),e.elementType=Ll,e.lanes=s,e;case Qd:return Es(a,i,s,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vd:l=10;break e;case Hd:l=9;break e;case ko:l=11;break e;case No:l=14;break e;case vr:l=16,n=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return r=At(l,a,r,i),r.elementType=e,r.type=n,r.lanes=s,r}function Xr(e,r,a,n){return e=At(7,e,n,r),e.lanes=a,e}function Es(e,r,a,n){return e=At(22,e,n,r),e.elementType=Qd,e.lanes=a,e.stateNode={isHidden:!1},e}function ul(e,r,a){return e=At(6,e,null,r),e.lanes=a,e}function dl(e,r,a){return r=At(4,e.children!==null?e.children:[],e.key,r),r.lanes=a,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function jg(e,r,a,n,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vs(0),this.expirationTimes=Vs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vs(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pc(e,r,a,n,i,s,l,o,c){return e=new jg(e,r,a,o,c),r===1?(r=1,s===!0&&(r|=8)):r=0,s=At(3,null,null,r),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jo(s),e}function bg(e,r,a){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ma,key:n==null?null:""+n,children:e,containerInfo:r,implementation:a}}function Dm(e){if(!e)return Or;e=e._reactInternals;e:{if(ia(e)!==e||e.tag!==1)throw Error(D(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(pt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(D(171))}if(e.tag===1){var a=e.type;if(pt(a))return Dp(e,a,r)}return r}function Fm(e,r,a,n,i,s,l,o,c){return e=pc(a,n,!0,e,i,s,l,o,c),e.context=Dm(null),a=e.current,n=st(),i=Pr(a),s=or(n,i),s.callback=r??null,Nr(a,s,i),e.current.lanes=i,Bn(e,i,n),mt(e,n),e}function As(e,r,a,n){var i=r.current,s=st(),l=Pr(i);return a=Dm(a),r.context===null?r.context=a:r.pendingContext=a,r=or(s,l),r.payload={element:e},n=n===void 0?null:n,n!==null&&(r.callback=n),e=Nr(i,r,l),e!==null&&(Ft(e,i,l,s),Mi(e,i,l)),l}function us(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qu(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<r?a:r}}function mc(e,r){Qu(e,r),(e=e.alternate)&&Qu(e,r)}function yg(){return null}var zm=typeof reportError=="function"?reportError:function(e){console.error(e)};function hc(e){this._internalRoot=e}Rs.prototype.render=hc.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(D(409));As(e,r,null,null)};Rs.prototype.unmount=hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;aa(function(){As(null,e,null,null)}),r[ur]=null}};function Rs(e){this._internalRoot=e}Rs.prototype.unstable_scheduleHydration=function(e){if(e){var r=gp();e={blockedOn:null,target:e,priority:r};for(var a=0;a<br.length&&r!==0&&r<br[a].priority;a++);br.splice(a,0,e),a===0&&jp(e)}};function fc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wu(){}function Sg(e,r,a,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var u=us(l);s.call(u)}}var l=Fm(r,n,e,0,null,!1,!1,"",Wu);return e._reactRootContainer=l,e[ur]=l.current,Ln(e.nodeType===8?e.parentNode:e),aa(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var o=n;n=function(){var u=us(c);o.call(u)}}var c=pc(e,0,!1,null,null,!1,!1,"",Wu);return e._reactRootContainer=c,e[ur]=c.current,Ln(e.nodeType===8?e.parentNode:e),aa(function(){As(r,c,a,n)}),c}function Ms(e,r,a,n,i){var s=a._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var o=i;i=function(){var c=us(l);o.call(c)}}As(r,l,e,i)}else l=Sg(a,r,e,i,n);return us(l)}fp=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var a=sn(r.pendingLanes);a!==0&&(_o(r,a|1),mt(r,Oe()),!(xe&6)&&(Fa=Oe()+500,Fr()))}break;case 13:aa(function(){var n=dr(e,1);if(n!==null){var i=st();Ft(n,e,1,i)}}),mc(e,1)}};qo=function(e){if(e.tag===13){var r=dr(e,134217728);if(r!==null){var a=st();Ft(r,e,134217728,a)}mc(e,134217728)}};xp=function(e){if(e.tag===13){var r=Pr(e),a=dr(e,r);if(a!==null){var n=st();Ft(a,e,r,n)}mc(e,r)}};gp=function(){return je};vp=function(e,r){var a=je;try{return je=e,r()}finally{je=a}};Dl=function(e,r,a){switch(r){case"input":if(Nl(e,a),r=a.name,a.type==="radio"&&r!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var n=a[r];if(n!==e&&n.form===e.form){var i=js(n);if(!i)throw Error(D(90));Jd(n),Nl(n,i)}}}break;case"textarea":Yd(e,a);break;case"select":r=a.value,r!=null&&Aa(e,!!a.multiple,r,!1)}};np=oc;ip=aa;var wg={usingClientEntryPoint:!1,Events:[$n,va,js,rp,ap,oc]},Za={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cg={bundleType:Za.bundleType,version:Za.version,rendererPackageName:Za.rendererPackageName,rendererConfig:Za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=op(e),e===null?null:e.stateNode},findFiberByHostInstance:Za.findFiberByHostInstance||yg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vi.isDisabled&&vi.supportsFiber)try{fs=vi.inject(Cg),Qt=vi}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wg;bt.createPortal=function(e,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fc(r))throw Error(D(200));return bg(e,r,null,a)};bt.createRoot=function(e,r){if(!fc(e))throw Error(D(299));var a=!1,n="",i=zm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=pc(e,1,!1,null,null,a,!1,n,i),e[ur]=r.current,Ln(e.nodeType===8?e.parentNode:e),new hc(r)};bt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=op(r),e=e===null?null:e.stateNode,e};bt.flushSync=function(e){return aa(e)};bt.hydrate=function(e,r,a){if(!Ls(r))throw Error(D(200));return Ms(null,e,r,!0,a)};bt.hydrateRoot=function(e,r,a){if(!fc(e))throw Error(D(405));var n=a!=null&&a.hydratedSources||null,i=!1,s="",l=zm;if(a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onRecoverableError!==void 0&&(l=a.onRecoverableError)),r=Fm(r,null,e,1,a??null,i,!1,s,l),e[ur]=r.current,Ln(e),n)for(e=0;e<n.length;e++)a=n[e],i=a._getVersion,i=i(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,i]:r.mutableSourceEagerHydrationData.push(a,i);return new Rs(r)};bt.render=function(e,r,a){if(!Ls(r))throw Error(D(200));return Ms(null,e,r,!1,a)};bt.unmountComponentAtNode=function(e){if(!Ls(e))throw Error(D(40));return e._reactRootContainer?(aa(function(){Ms(null,null,e,!1,function(){e._reactRootContainer=null,e[ur]=null})}),!0):!1};bt.unstable_batchedUpdates=oc;bt.unstable_renderSubtreeIntoContainer=function(e,r,a,n){if(!Ls(a))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return Ms(e,r,a,!1,n)};bt.version="18.3.1-next-f1338f8080-20240426";function Bm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bm)}catch(e){console.error(e)}}Bm(),Bd.exports=bt;var Um=Bd.exports,$m,Ju=Um;$m=Ju.createRoot,Ju.hydrateRoot;/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Gm=e=>{throw TypeError(e)},Eg=(e,r,a)=>r.has(e)||Gm("Cannot "+a),pl=(e,r,a)=>(Eg(e,r,"read from private field"),a?a.call(e):r.get(e)),Ag=(e,r,a)=>r.has(e)?Gm("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,a),Ku="popstate";function Yu(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function Rg(e={}){function r(i,s){let{pathname:l="/",search:o="",hash:c=""}=Yt(i.location.hash.substring(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),In("",{pathname:l,search:o,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function a(i,s){let l=i.document.querySelector("base"),o="";if(l&&l.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");o=u===-1?c:c.slice(0,u)}return o+"#"+(typeof s=="string"?s:Kt(s))}function n(i,s){Ie(i.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(s)})`)}return Mg(r,a,n,e)}function ce(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function Ie(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Lg(){return Math.random().toString(36).substring(2,10)}function Xu(e,r){return{usr:e.state,key:e.key,idx:r,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function In(e,r,a=null,n,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof r=="string"?Yt(r):r,state:a,key:r&&r.key||n||Lg(),unstable_mask:i}}function Kt({pathname:e="/",search:r="",hash:a=""}){return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function Yt(e){let r={};if(e){let a=e.indexOf("#");a>=0&&(r.hash=e.substring(a),e=e.substring(0,a));let n=e.indexOf("?");n>=0&&(r.search=e.substring(n),e=e.substring(0,n)),e&&(r.pathname=e)}return r}function Mg(e,r,a,n={}){let{window:i=document.defaultView,v5Compat:s=!1}=n,l=i.history,o="POP",c=null,u=m();u==null&&(u=0,l.replaceState({...l.state,idx:u},""));function m(){return(l.state||{idx:null}).idx}function d(){o="POP";let S=m(),h=S==null?null:S-u;u=S,c&&c({action:o,location:b.location,delta:h})}function f(S,h){o="PUSH";let p=Yu(S)?S:In(b.location,S,h);a&&a(p,S),u=m()+1;let v=Xu(p,u),L=b.createHref(p.unstable_mask||p);try{l.pushState(v,"",L)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(L)}s&&c&&c({action:o,location:b.location,delta:1})}function y(S,h){o="REPLACE";let p=Yu(S)?S:In(b.location,S,h);a&&a(p,S),u=m();let v=Xu(p,u),L=b.createHref(p.unstable_mask||p);l.replaceState(v,"",L),s&&c&&c({action:o,location:b.location,delta:0})}function g(S){return Vm(S)}let b={get action(){return o},get location(){return e(i,l)},listen(S){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Ku,d),c=S,()=>{i.removeEventListener(Ku,d),c=null}},createHref(S){return r(i,S)},createURL:g,encodeLocation(S){let h=g(S);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:y,go(S){return l.go(S)}};return b}function Vm(e,r=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),ce(a,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:Kt(e);return n=n.replace(/ $/,"%20"),!r&&n.startsWith("//")&&(n=a+n),new URL(n,a)}var on,Zu=class{constructor(e){if(Ag(this,on,new Map),e)for(let[r,a]of e)this.set(r,a)}get(e){if(pl(this,on).has(e))return pl(this,on).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,r){pl(this,on).set(e,r)}};on=new WeakMap;var kg=new Set(["lazy","caseSensitive","path","id","index","children"]);function Ng(e){return kg.has(e)}var Tg=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function Pg(e){return Tg.has(e)}function _g(e){return e.index===!0}function Dn(e,r,a=[],n={},i=!1){return e.map((s,l)=>{let o=[...a,String(l)],c=typeof s.id=="string"?s.id:o.join("-");if(ce(s.index!==!0||!s.children,"Cannot specify children on an index route"),ce(i||!n[c],`Found a route id collision on id "${c}".  Route id's must be globally unique within Data Router usages`),_g(s)){let u={...s,id:c};return n[c]=ed(u,r(u)),u}else{let u={...s,id:c,children:void 0};return n[c]=ed(u,r(u)),s.children&&(u.children=Dn(s.children,r,o,n,i)),u}})}function ed(e,r){return Object.assign(e,{...r,...typeof r.lazy=="object"&&r.lazy!=null?{lazy:{...e.lazy,...r.lazy}}:{}})}function Sr(e,r,a="/"){return cn(e,r,a,!1)}function cn(e,r,a,n){let i=typeof r=="string"?Yt(r):r,s=kt(i.pathname||"/",a);if(s==null)return null;let l=Hm(e);Og(l);let o=null;for(let c=0;o==null&&c<l.length;++c){let u=Qg(s);o=Vg(l[c],u,n)}return o}function qg(e,r){let{route:a,pathname:n,params:i}=e;return{id:a.id,pathname:n,params:i,data:r[a.id],loaderData:r[a.id],handle:a.handle}}function Hm(e,r=[],a=[],n="",i=!1){let s=(l,o,c=i,u)=>{let m={relativePath:u===void 0?l.path||"":u,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(n)&&c)return;ce(m.relativePath.startsWith(n),`Absolute route path "${m.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(n.length)}let d=zt([n,m.relativePath]),f=a.concat(m);l.children&&l.children.length>0&&(ce(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),Hm(l.children,r,f,d,c)),!(l.path==null&&!l.index)&&r.push({path:d,score:$g(d,l.index),routesMeta:f})};return e.forEach((l,o)=>{var c;if(l.path===""||!((c=l.path)!=null&&c.includes("?")))s(l,o);else for(let u of Qm(l.path))s(l,o,!0,u)}),r}function Qm(e){let r=e.split("/");if(r.length===0)return[];let[a,...n]=r,i=a.endsWith("?"),s=a.replace(/\?$/,"");if(n.length===0)return i?[s,""]:[s];let l=Qm(n.join("/")),o=[];return o.push(...l.map(c=>c===""?s:[s,c].join("/"))),i&&o.push(...l),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function Og(e){e.sort((r,a)=>r.score!==a.score?a.score-r.score:Gg(r.routesMeta.map(n=>n.childrenIndex),a.routesMeta.map(n=>n.childrenIndex)))}var Ig=/^:[\w-]+$/,Dg=3,Fg=2,zg=1,Bg=10,Ug=-2,td=e=>e==="*";function $g(e,r){let a=e.split("/"),n=a.length;return a.some(td)&&(n+=Ug),r&&(n+=Fg),a.filter(i=>!td(i)).reduce((i,s)=>i+(Ig.test(s)?Dg:s===""?zg:Bg),n)}function Gg(e,r){return e.length===r.length&&e.slice(0,-1).every((n,i)=>n===r[i])?e[e.length-1]-r[r.length-1]:0}function Vg(e,r,a=!1){let{routesMeta:n}=e,i={},s="/",l=[];for(let o=0;o<n.length;++o){let c=n[o],u=o===n.length-1,m=s==="/"?r:r.slice(s.length)||"/",d=ds({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},m),f=c.route;if(!d&&u&&a&&!n[n.length-1].route.index&&(d=ds({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!d)return null;Object.assign(i,d.params),l.push({params:i,pathname:zt([s,d.pathname]),pathnameBase:Kg(zt([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=zt([s,d.pathnameBase]))}return l}function ds(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,n]=Hg(e.path,e.caseSensitive,e.end),i=r.match(a);if(!i)return null;let s=i[0],l=s.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:n.reduce((u,{paramName:m,isOptional:d},f)=>{if(m==="*"){let g=o[f]||"";l=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}const y=o[f];return d&&!y?u[m]=void 0:u[m]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:l,pattern:e}}function Hg(e,r=!1,a=!0){Ie(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c,u,m)=>{if(n.push({paramName:o,isOptional:c!=null}),c){let d=m.charAt(u+l.length);return d&&d!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,r?void 0:"i"),n]}function Qg(e){try{return e.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Ie(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),e}}function kt(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let a=r.endsWith("/")?r.length-1:r.length,n=e.charAt(a);return n&&n!=="/"?null:e.slice(a)||"/"}function Wg({basename:e,pathname:r}){return r==="/"?e:zt([e,r])}var Wm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xc=e=>Wm.test(e);function Jg(e,r="/"){let{pathname:a,search:n="",hash:i=""}=typeof e=="string"?Yt(e):e,s;return a?(a=a.replace(/\/\/+/g,"/"),a.startsWith("/")?s=rd(a.substring(1),"/"):s=rd(a,r)):s=r,{pathname:s,search:Yg(n),hash:Xg(i)}}function rd(e,r){let a=r.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?a.length>1&&a.pop():i!=="."&&a.push(i)}),a.length>1?a.join("/"):"/"}function ml(e,r,a,n){return`Cannot include a '${e}' character in a manually specified \`to.${r}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Jm(e){return e.filter((r,a)=>a===0||r.route.path&&r.route.path.length>0)}function gc(e){let r=Jm(e);return r.map((a,n)=>n===r.length-1?a.pathname:a.pathnameBase)}function ks(e,r,a,n=!1){let i;typeof e=="string"?i=Yt(e):(i={...e},ce(!i.pathname||!i.pathname.includes("?"),ml("?","pathname","search",i)),ce(!i.pathname||!i.pathname.includes("#"),ml("#","pathname","hash",i)),ce(!i.search||!i.search.includes("#"),ml("#","search","hash",i)));let s=e===""||i.pathname==="",l=s?"/":i.pathname,o;if(l==null)o=a;else{let d=r.length-1;if(!n&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}o=d>=0?r[d]:"/"}let c=Jg(i,o),u=l&&l!=="/"&&l.endsWith("/"),m=(s||l===".")&&a.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}var zt=e=>e.join("/").replace(/\/\/+/g,"/"),Kg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Yg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Xg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Vn=class{constructor(e,r,a,n=!1){this.status=e,this.statusText=r||"",this.internal=n,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function Fn(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Hn(e){return e.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Km=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ym(e,r){let a=e;if(typeof a!="string"||!Wm.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let n=a,i=!1;if(Km)try{let s=new URL(window.location.href),l=a.startsWith("//")?new URL(s.protocol+a):new URL(a),o=kt(l.pathname,r);l.origin===s.origin&&o!=null?a=o+l.search+l.hash:i=!0}catch{Ie(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:n,isExternal:i,to:a}}var Ar=Symbol("Uninstrumented");function Zg(e,r){let a={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};e.forEach(i=>i({id:r.id,index:r.index,path:r.path,instrument(s){let l=Object.keys(a);for(let o of l)s[o]&&a[o].push(s[o])}}));let n={};if(typeof r.lazy=="function"&&a.lazy.length>0){let i=Ea(a.lazy,r.lazy,()=>{});i&&(n.lazy=i)}if(typeof r.lazy=="object"){let i=r.lazy;["middleware","loader","action"].forEach(s=>{let l=i[s],o=a[`lazy.${s}`];if(typeof l=="function"&&o.length>0){let c=Ea(o,l,()=>{});c&&(n.lazy=Object.assign(n.lazy||{},{[s]:c}))}})}return["loader","action"].forEach(i=>{let s=r[i];if(typeof s=="function"&&a[i].length>0){let l=s[Ar]??s,o=Ea(a[i],l,(...c)=>ad(c[0]));o&&(i==="loader"&&l.hydrate===!0&&(o.hydrate=!0),o[Ar]=l,n[i]=o)}}),r.middleware&&r.middleware.length>0&&a.middleware.length>0&&(n.middleware=r.middleware.map(i=>{let s=i[Ar]??i,l=Ea(a.middleware,s,(...o)=>ad(o[0]));return l?(l[Ar]=s,l):i})),n}function ev(e,r){let a={navigate:[],fetch:[]};if(r.forEach(n=>n({instrument(i){let s=Object.keys(i);for(let l of s)i[l]&&a[l].push(i[l])}})),a.navigate.length>0){let n=e.navigate[Ar]??e.navigate,i=Ea(a.navigate,n,(...s)=>{let[l,o]=s;return{to:typeof l=="number"||typeof l=="string"?l:l?Kt(l):".",...nd(e,o??{})}});i&&(i[Ar]=n,e.navigate=i)}if(a.fetch.length>0){let n=e.fetch[Ar]??e.fetch,i=Ea(a.fetch,n,(...s)=>{let[l,,o,c]=s;return{href:o??".",fetcherKey:l,...nd(e,c??{})}});i&&(i[Ar]=n,e.fetch=i)}return e}function Ea(e,r,a){return e.length===0?null:async(...n)=>{let i=await Xm(e,a(...n),()=>r(...n),e.length-1);if(i.type==="error")throw i.value;return i.value}}async function Xm(e,r,a,n){let i=e[n],s;if(i){let l,o=async()=>(l?console.error("You cannot call instrumented handlers more than once"):l=Xm(e,r,a,n-1),s=await l,ce(s,"Expected a result"),s.type==="error"&&s.value instanceof Error?{status:"error",error:s.value}:{status:"success",error:void 0});try{await i(o,r)}catch(c){console.error("An instrumentation function threw an error:",c)}l||await o(),await l}else try{s={type:"success",value:await a()}}catch(l){s={type:"error",value:l}}return s||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function ad(e){let{request:r,context:a,params:n,unstable_pattern:i}=e;return{request:tv(r),params:{...n},unstable_pattern:i,context:rv(a)}}function nd(e,r){return{currentUrl:Kt(e.state.location),..."formMethod"in r?{formMethod:r.formMethod}:{},..."formEncType"in r?{formEncType:r.formEncType}:{},..."formData"in r?{formData:r.formData}:{},..."body"in r?{body:r.body}:{}}}function tv(e){return{method:e.method,url:e.url,headers:{get:(...r)=>e.headers.get(...r)}}}function rv(e){if(nv(e)){let r={...e};return Object.freeze(r),r}else return{get:r=>e.get(r)}}var av=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function nv(e){if(e===null||typeof e!="object")return!1;const r=Object.getPrototypeOf(e);return r===Object.prototype||r===null||Object.getOwnPropertyNames(r).sort().join("\0")===av}var Zm=["POST","PUT","PATCH","DELETE"],iv=new Set(Zm),sv=["GET",...Zm],lv=new Set(sv),eh=new Set([301,302,303,307,308]),ov=new Set([307,308]),hl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},cv={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},en={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},uv=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),th="remix-router-transitions",rh=Symbol("ResetLoaderData");function dv(e){const r=e.window?e.window:typeof window<"u"?window:void 0,a=typeof r<"u"&&typeof r.document<"u"&&typeof r.document.createElement<"u";ce(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let n=e.hydrationRouteProperties||[],i=e.mapRouteProperties||uv,s=i;if(e.unstable_instrumentations){let C=e.unstable_instrumentations;s=R=>({...i(R),...Zg(C.map(M=>M.route).filter(Boolean),R)})}let l={},o=Dn(e.routes,s,void 0,l),c,u=e.basename||"/";u.startsWith("/")||(u=`/${u}`);let m=e.dataStrategy||xv,d={...e.future},f=null,y=new Set,g=null,b=null,S=null,h=e.hydrationData!=null,p=Sr(o,e.history.location,u),v=!1,L=null,k,P;if(p==null&&!e.patchRoutesOnNavigation){let C=wt(404,{pathname:e.history.location.pathname}),{matches:R,route:M}=ji(o);k=!0,P=!k,p=R,L={[M.id]:C}}else if(p&&!e.hydrationData&&Yn(p,o,e.history.location.pathname).active&&(p=null),p)if(p.some(C=>C.route.lazy))k=!1,P=!k;else if(!p.some(C=>vc(C.route)))k=!0,P=!k;else{let C=e.hydrationData?e.hydrationData.loaderData:null,R=e.hydrationData?e.hydrationData.errors:null,M=p;if(R){let I=p.findIndex(z=>R[z.route.id]!==void 0);M=M.slice(0,I+1)}P=!1,k=M.every(I=>{let z=ah(I.route,C,R);return P=P||z.renderFallback,!z.shouldLoad})}else{k=!1,P=!k,p=[];let C=Yn(null,o,e.history.location.pathname);C.active&&C.matches&&(v=!0,p=C.matches)}let _,E={historyAction:e.history.action,location:e.history.location,matches:p,initialized:k,renderFallback:P,navigation:hl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||L,fetchers:new Map,blockers:new Map},V="POP",F=null,le=!1,ee,ve=!1,te=new Map,q=null,G=!1,re=!1,O=new Set,B=new Map,U=0,ae=-1,ue=new Map,ye=new Set,Re=new Map,Fe=new Map,we=new Set,Ve=new Map,la,Tt=null;function Nh(){if(f=e.history.listen(({action:C,location:R,delta:M})=>{if(la){la(),la=void 0;return}Ie(Ve.size===0||M!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let I=Oc({currentLocation:E.location,nextLocation:R,historyAction:C});if(I&&M!=null){let z=new Promise(J=>{la=J});e.history.go(M*-1),Kn(I,{state:"blocked",location:R,proceed(){Kn(I,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),z.then(()=>e.history.go(M))},reset(){let J=new Map(E.blockers);J.set(I,en),Je({blockers:J})}}),F==null||F.resolve(),F=null;return}return zr(C,R)}),a){_v(r,te);let C=()=>qv(r,te);r.addEventListener("pagehide",C),q=()=>r.removeEventListener("pagehide",C)}return E.initialized||zr("POP",E.location,{initialHydration:!0}),_}function Th(){f&&f(),q&&q(),y.clear(),ee&&ee.abort(),E.fetchers.forEach((C,R)=>Is(R)),E.blockers.forEach((C,R)=>qc(R))}function Ph(C){return y.add(C),()=>y.delete(C)}function Je(C,R={}){C.matches&&(C.matches=C.matches.map(z=>{let J=l[z.route.id],Y=z.route;return Y.element!==J.element||Y.errorElement!==J.errorElement||Y.hydrateFallbackElement!==J.hydrateFallbackElement?{...z,route:J}:z})),E={...E,...C};let M=[],I=[];E.fetchers.forEach((z,J)=>{z.state==="idle"&&(we.has(J)?M.push(J):I.push(J))}),we.forEach(z=>{!E.fetchers.has(z)&&!B.has(z)&&M.push(z)}),[...y].forEach(z=>z(E,{deletedFetchers:M,newErrors:C.errors??null,viewTransitionOpts:R.viewTransitionOpts,flushSync:R.flushSync===!0})),M.forEach(z=>Is(z)),I.forEach(z=>E.fetchers.delete(z))}function oa(C,R,{flushSync:M}={}){var ne,K;let I=E.actionData!=null&&E.navigation.formMethod!=null&&Ze(E.navigation.formMethod)&&E.navigation.state==="loading"&&((ne=C.state)==null?void 0:ne._isRedirect)!==!0,z;R.actionData?Object.keys(R.actionData).length>0?z=R.actionData:z=null:I?z=E.actionData:z=null;let J=R.loaderData?hd(E.loaderData,R.loaderData,R.matches||[],R.errors):E.loaderData,Y=E.blockers;Y.size>0&&(Y=new Map(Y),Y.forEach((oe,me)=>Y.set(me,en)));let W=G?!1:Dc(C,R.matches||E.matches),H=le===!0||E.navigation.formMethod!=null&&Ze(E.navigation.formMethod)&&((K=C.state)==null?void 0:K._isRedirect)!==!0;c&&(o=c,c=void 0),G||V==="POP"||(V==="PUSH"?e.history.push(C,C.state):V==="REPLACE"&&e.history.replace(C,C.state));let X;if(V==="POP"){let oe=te.get(E.location.pathname);oe&&oe.has(C.pathname)?X={currentLocation:E.location,nextLocation:C}:te.has(C.pathname)&&(X={currentLocation:C,nextLocation:E.location})}else if(ve){let oe=te.get(E.location.pathname);oe?oe.add(C.pathname):(oe=new Set([C.pathname]),te.set(E.location.pathname,oe)),X={currentLocation:E.location,nextLocation:C}}Je({...R,actionData:z,loaderData:J,historyAction:V,location:C,initialized:!0,renderFallback:!1,navigation:hl,revalidation:"idle",restoreScrollPosition:W,preventScrollReset:H,blockers:Y},{viewTransitionOpts:X,flushSync:M===!0}),V="POP",le=!1,ve=!1,G=!1,re=!1,F==null||F.resolve(),F=null,Tt==null||Tt.resolve(),Tt=null}async function Lc(C,R){if(F==null||F.resolve(),F=null,typeof C=="number"){F||(F=vd());let Me=F.promise;return e.history.go(C),Me}let M=vo(E.location,E.matches,u,C,R==null?void 0:R.fromRouteId,R==null?void 0:R.relative),{path:I,submission:z,error:J}=id(!1,M,R),Y;R!=null&&R.unstable_mask&&(Y={pathname:"",search:"",hash:"",...typeof R.unstable_mask=="string"?Yt(R.unstable_mask):{...E.location.unstable_mask,...R.unstable_mask}});let W=E.location,H=In(W,I,R&&R.state,void 0,Y);H={...H,...e.history.encodeLocation(H)};let X=R&&R.replace!=null?R.replace:void 0,ne="PUSH";X===!0?ne="REPLACE":X===!1||z!=null&&Ze(z.formMethod)&&z.formAction===E.location.pathname+E.location.search&&(ne="REPLACE");let K=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,oe=(R&&R.flushSync)===!0,me=Oc({currentLocation:W,nextLocation:H,historyAction:ne});if(me){Kn(me,{state:"blocked",location:H,proceed(){Kn(me,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),Lc(C,R)},reset(){let Me=new Map(E.blockers);Me.set(me,en),Je({blockers:Me})}});return}await zr(ne,H,{submission:z,pendingError:J,preventScrollReset:K,replace:R&&R.replace,enableViewTransition:R&&R.viewTransition,flushSync:oe,callSiteDefaultShouldRevalidate:R&&R.unstable_defaultShouldRevalidate})}function _h(){Tt||(Tt=vd()),Os(),Je({revalidation:"loading"});let C=Tt.promise;return E.navigation.state==="submitting"?C:E.navigation.state==="idle"?(zr(E.historyAction,E.location,{startUninterruptedRevalidation:!0}),C):(zr(V||E.historyAction,E.navigation.location,{overrideNavigation:E.navigation,enableViewTransition:ve===!0}),C)}async function zr(C,R,M){ee&&ee.abort(),ee=null,V=C,G=(M&&M.startUninterruptedRevalidation)===!0,Vh(E.location,E.matches),le=(M&&M.preventScrollReset)===!0,ve=(M&&M.enableViewTransition)===!0;let I=c||o,z=M&&M.overrideNavigation,J=M!=null&&M.initialHydration&&E.matches&&E.matches.length>0&&!v?E.matches:Sr(I,R,u),Y=(M&&M.flushSync)===!0;if(J&&E.initialized&&!re&&Cv(E.location,R)&&!(M&&M.submission&&Ze(M.submission.formMethod))){oa(R,{matches:J},{flushSync:Y});return}let W=Yn(J,I,R.pathname);if(W.active&&W.matches&&(J=W.matches),!J){let{error:Ue,notFoundMatches:rt,route:be}=Ds(R.pathname);oa(R,{matches:rt,loaderData:{},errors:{[be.id]:Ue}},{flushSync:Y});return}ee=new AbortController;let H=pa(e.history,R,ee.signal,M&&M.submission),X=e.getContext?await e.getContext():new Zu,ne;if(M&&M.pendingError)ne=[wr(J).route.id,{type:"error",error:M.pendingError}];else if(M&&M.submission&&Ze(M.submission.formMethod)){let Ue=await qh(H,R,M.submission,J,X,W.active,M&&M.initialHydration===!0,{replace:M.replace,flushSync:Y});if(Ue.shortCircuited)return;if(Ue.pendingActionResult){let[rt,be]=Ue.pendingActionResult;if(xt(be)&&Fn(be.error)&&be.error.status===404){ee=null,oa(R,{matches:Ue.matches,loaderData:{},errors:{[rt]:be.error}});return}}J=Ue.matches||J,ne=Ue.pendingActionResult,z=fl(R,M.submission),Y=!1,W.active=!1,H=pa(e.history,H.url,H.signal)}let{shortCircuited:K,matches:oe,loaderData:me,errors:Me}=await Oh(H,R,J,X,W.active,z,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,Y,ne,M&&M.callSiteDefaultShouldRevalidate);K||(ee=null,oa(R,{matches:oe||J,...fd(ne),loaderData:me,errors:Me}))}async function qh(C,R,M,I,z,J,Y,W={}){Os();let H=Tv(R,M);if(Je({navigation:H},{flushSync:W.flushSync===!0}),J){let K=await Xn(I,R.pathname,C.signal);if(K.type==="aborted")return{shortCircuited:!0};if(K.type==="error"){if(K.partialMatches.length===0){let{matches:me,route:Me}=ji(o);return{matches:me,pendingActionResult:[Me.id,{type:"error",error:K.error}]}}let oe=wr(K.partialMatches).route.id;return{matches:K.partialMatches,pendingActionResult:[oe,{type:"error",error:K.error}]}}else if(K.matches)I=K.matches;else{let{notFoundMatches:oe,error:me,route:Me}=Ds(R.pathname);return{matches:oe,pendingActionResult:[Me.id,{type:"error",error:me}]}}}let X,ne=Oi(I,R);if(!ne.route.action&&!ne.route.lazy)X={type:"error",error:wt(405,{method:C.method,pathname:R.pathname,routeId:ne.route.id})};else{let K=Ta(s,l,C,I,ne,Y?[]:n,z),oe=await $a(C,K,z,null);if(X=oe[ne.route.id],!X){for(let me of I)if(oe[me.route.id]){X=oe[me.route.id];break}}if(C.signal.aborted)return{shortCircuited:!0}}if(Kr(X)){let K;return W&&W.replace!=null?K=W.replace:K=dd(X.response.headers.get("Location"),new URL(C.url),u,e.history)===E.location.pathname+E.location.search,await Br(C,X,!0,{submission:M,replace:K}),{shortCircuited:!0}}if(xt(X)){let K=wr(I,ne.route.id);return(W&&W.replace)!==!0&&(V="PUSH"),{matches:I,pendingActionResult:[K.route.id,X,ne.route.id]}}return{matches:I,pendingActionResult:[ne.route.id,X]}}async function Oh(C,R,M,I,z,J,Y,W,H,X,ne,K,oe){let me=J||fl(R,Y),Me=Y||W||gd(me),Ue=!G&&!X;if(z){if(Ue){let Ke=Mc(K);Je({navigation:me,...Ke!==void 0?{actionData:Ke}:{}},{flushSync:ne})}let fe=await Xn(M,R.pathname,C.signal);if(fe.type==="aborted")return{shortCircuited:!0};if(fe.type==="error"){if(fe.partialMatches.length===0){let{matches:ca,route:Gr}=ji(o);return{matches:ca,loaderData:{},errors:{[Gr.id]:fe.error}}}let Ke=wr(fe.partialMatches).route.id;return{matches:fe.partialMatches,loaderData:{},errors:{[Ke]:fe.error}}}else if(fe.matches)M=fe.matches;else{let{error:Ke,notFoundMatches:ca,route:Gr}=Ds(R.pathname);return{matches:ca,loaderData:{},errors:{[Gr.id]:Ke}}}}let rt=c||o,{dsMatches:be,revalidatingFetchers:St}=sd(C,I,s,l,e.history,E,M,Me,R,X?[]:n,X===!0,re,O,we,Re,ye,rt,u,e.patchRoutesOnNavigation!=null,K,oe);if(ae=++U,!e.dataStrategy&&!be.some(fe=>fe.shouldLoad)&&!be.some(fe=>fe.route.middleware&&fe.route.middleware.length>0)&&St.length===0){let fe=Pc();return oa(R,{matches:M,loaderData:{},errors:K&&xt(K[1])?{[K[0]]:K[1].error}:null,...fd(K),...fe?{fetchers:new Map(E.fetchers)}:{}},{flushSync:ne}),{shortCircuited:!0}}if(Ue){let fe={};if(!z){fe.navigation=me;let Ke=Mc(K);Ke!==void 0&&(fe.actionData=Ke)}St.length>0&&(fe.fetchers=Ih(St)),Je(fe,{flushSync:ne})}St.forEach(fe=>{rr(fe.key),fe.controller&&B.set(fe.key,fe.controller)});let Ur=()=>St.forEach(fe=>rr(fe.key));ee&&ee.signal.addEventListener("abort",Ur);let{loaderResults:Ga,fetcherResults:hr}=await kc(be,St,C,I);if(C.signal.aborted)return{shortCircuited:!0};ee&&ee.signal.removeEventListener("abort",Ur),St.forEach(fe=>B.delete(fe.key));let Ut=bi(Ga);if(Ut)return await Br(C,Ut.result,!0,{replace:H}),{shortCircuited:!0};if(Ut=bi(hr),Ut)return ye.add(Ut.key),await Br(C,Ut.result,!0,{replace:H}),{shortCircuited:!0};let{loaderData:Fs,errors:Va}=md(E,M,Ga,K,St,hr);X&&E.errors&&(Va={...E.errors,...Va});let $r=Pc(),Zn=_c(ae),ei=$r||Zn||St.length>0;return{matches:M,loaderData:Fs,errors:Va,...ei?{fetchers:new Map(E.fetchers)}:{}}}function Mc(C){if(C&&!xt(C[1]))return{[C[0]]:C[1].data};if(E.actionData)return Object.keys(E.actionData).length===0?null:E.actionData}function Ih(C){return C.forEach(R=>{let M=E.fetchers.get(R.key),I=tn(void 0,M?M.data:void 0);E.fetchers.set(R.key,I)}),new Map(E.fetchers)}async function Dh(C,R,M,I){rr(C);let z=(I&&I.flushSync)===!0,J=c||o,Y=vo(E.location,E.matches,u,M,R,I==null?void 0:I.relative),W=Sr(J,Y,u),H=Yn(W,J,Y);if(H.active&&H.matches&&(W=H.matches),!W){tr(C,R,wt(404,{pathname:Y}),{flushSync:z});return}let{path:X,submission:ne,error:K}=id(!0,Y,I);if(K){tr(C,R,K,{flushSync:z});return}let oe=e.getContext?await e.getContext():new Zu,me=(I&&I.preventScrollReset)===!0;if(ne&&Ze(ne.formMethod)){await Fh(C,R,X,W,oe,H.active,z,me,ne,I&&I.unstable_defaultShouldRevalidate);return}Re.set(C,{routeId:R,path:X}),await zh(C,R,X,W,oe,H.active,z,me,ne)}async function Fh(C,R,M,I,z,J,Y,W,H,X){Os(),Re.delete(C);let ne=E.fetchers.get(C);er(C,Pv(H,ne),{flushSync:Y});let K=new AbortController,oe=pa(e.history,M,K.signal,H);if(J){let Pe=await Xn(I,new URL(oe.url).pathname,oe.signal,C);if(Pe.type==="aborted")return;if(Pe.type==="error"){tr(C,R,Pe.error,{flushSync:Y});return}else if(Pe.matches)I=Pe.matches;else{tr(C,R,wt(404,{pathname:M}),{flushSync:Y});return}}let me=Oi(I,M);if(!me.route.action&&!me.route.lazy){let Pe=wt(405,{method:H.formMethod,pathname:M,routeId:R});tr(C,R,Pe,{flushSync:Y});return}B.set(C,K);let Me=U,Ue=Ta(s,l,oe,I,me,n,z),rt=await $a(oe,Ue,z,C),be=rt[me.route.id];if(!be){for(let Pe of Ue)if(rt[Pe.route.id]){be=rt[Pe.route.id];break}}if(oe.signal.aborted){B.get(C)===K&&B.delete(C);return}if(we.has(C)){if(Kr(be)||xt(be)){er(C,ar(void 0));return}}else{if(Kr(be))if(B.delete(C),ae>Me){er(C,ar(void 0));return}else return ye.add(C),er(C,tn(H)),Br(oe,be,!1,{fetcherSubmission:H,preventScrollReset:W});if(xt(be)){tr(C,R,be.error);return}}let St=E.navigation.location||E.location,Ur=pa(e.history,St,K.signal),Ga=c||o,hr=E.navigation.state!=="idle"?Sr(Ga,E.navigation.location,u):E.matches;ce(hr,"Didn't find any matches after fetcher action");let Ut=++U;ue.set(C,Ut);let Fs=tn(H,be.data);E.fetchers.set(C,Fs);let{dsMatches:Va,revalidatingFetchers:$r}=sd(Ur,z,s,l,e.history,E,hr,H,St,n,!1,re,O,we,Re,ye,Ga,u,e.patchRoutesOnNavigation!=null,[me.route.id,be],X);$r.filter(Pe=>Pe.key!==C).forEach(Pe=>{let ti=Pe.key,zc=E.fetchers.get(ti),Wh=tn(void 0,zc?zc.data:void 0);E.fetchers.set(ti,Wh),rr(ti),Pe.controller&&B.set(ti,Pe.controller)}),Je({fetchers:new Map(E.fetchers)});let Zn=()=>$r.forEach(Pe=>rr(Pe.key));K.signal.addEventListener("abort",Zn);let{loaderResults:ei,fetcherResults:fe}=await kc(Va,$r,Ur,z);if(K.signal.aborted)return;if(K.signal.removeEventListener("abort",Zn),ue.delete(C),B.delete(C),$r.forEach(Pe=>B.delete(Pe.key)),E.fetchers.has(C)){let Pe=ar(be.data);E.fetchers.set(C,Pe)}let Ke=bi(ei);if(Ke)return Br(Ur,Ke.result,!1,{preventScrollReset:W});if(Ke=bi(fe),Ke)return ye.add(Ke.key),Br(Ur,Ke.result,!1,{preventScrollReset:W});let{loaderData:ca,errors:Gr}=md(E,hr,ei,void 0,$r,fe);_c(Ut),E.navigation.state==="loading"&&Ut>ae?(ce(V,"Expected pending action"),ee&&ee.abort(),oa(E.navigation.location,{matches:hr,loaderData:ca,errors:Gr,fetchers:new Map(E.fetchers)})):(Je({errors:Gr,loaderData:hd(E.loaderData,ca,hr,Gr),fetchers:new Map(E.fetchers)}),re=!1)}async function zh(C,R,M,I,z,J,Y,W,H){let X=E.fetchers.get(C);er(C,tn(H,X?X.data:void 0),{flushSync:Y});let ne=new AbortController,K=pa(e.history,M,ne.signal);if(J){let be=await Xn(I,new URL(K.url).pathname,K.signal,C);if(be.type==="aborted")return;if(be.type==="error"){tr(C,R,be.error,{flushSync:Y});return}else if(be.matches)I=be.matches;else{tr(C,R,wt(404,{pathname:M}),{flushSync:Y});return}}let oe=Oi(I,M);B.set(C,ne);let me=U,Me=Ta(s,l,K,I,oe,n,z),rt=(await $a(K,Me,z,C))[oe.route.id];if(B.get(C)===ne&&B.delete(C),!K.signal.aborted){if(we.has(C)){er(C,ar(void 0));return}if(Kr(rt))if(ae>me){er(C,ar(void 0));return}else{ye.add(C),await Br(K,rt,!1,{preventScrollReset:W});return}if(xt(rt)){tr(C,R,rt.error);return}er(C,ar(rt.data))}}async function Br(C,R,M,{submission:I,fetcherSubmission:z,preventScrollReset:J,replace:Y}={}){M||(F==null||F.resolve(),F=null),R.response.headers.has("X-Remix-Revalidate")&&(re=!0);let W=R.response.headers.get("Location");ce(W,"Expected a Location header on the redirect Response"),W=dd(W,new URL(C.url),u,e.history);let H=In(E.location,W,{_isRedirect:!0});if(a){let Me=!1;if(R.response.headers.has("X-Remix-Reload-Document"))Me=!0;else if(xc(W)){const Ue=Vm(W,!0);Me=Ue.origin!==r.location.origin||kt(Ue.pathname,u)==null}if(Me){Y?r.location.replace(W):r.location.assign(W);return}}ee=null;let X=Y===!0||R.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:ne,formAction:K,formEncType:oe}=E.navigation;!I&&!z&&ne&&K&&oe&&(I=gd(E.navigation));let me=I||z;if(ov.has(R.response.status)&&me&&Ze(me.formMethod))await zr(X,H,{submission:{...me,formAction:W},preventScrollReset:J||le,enableViewTransition:M?ve:void 0});else{let Me=fl(H,I);await zr(X,H,{overrideNavigation:Me,fetcherSubmission:z,preventScrollReset:J||le,enableViewTransition:M?ve:void 0})}}async function $a(C,R,M,I){var Y;let z,J={};try{z=await vv(m,C,R,I,M,!1)}catch(W){return R.filter(H=>H.shouldLoad).forEach(H=>{J[H.route.id]={type:"error",error:W}}),J}if(C.signal.aborted)return J;if(!Ze(C.method))for(let W of R){if(((Y=z[W.route.id])==null?void 0:Y.type)==="error")break;!z.hasOwnProperty(W.route.id)&&!E.loaderData.hasOwnProperty(W.route.id)&&(!E.errors||!E.errors.hasOwnProperty(W.route.id))&&W.shouldCallHandler()&&(z[W.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${W.route.id}`)})}for(let[W,H]of Object.entries(z))if(Lv(H)){let X=H.result;J[W]={type:"redirect",response:Sv(X,C,W,R,u)}}else J[W]=await yv(H);return J}async function kc(C,R,M,I){let z=$a(M,C,I,null),J=Promise.all(R.map(async H=>{if(H.matches&&H.match&&H.request&&H.controller){let ne=(await $a(H.request,H.matches,I,H.key))[H.match.route.id];return{[H.key]:ne}}else return Promise.resolve({[H.key]:{type:"error",error:wt(404,{pathname:H.path})}})})),Y=await z,W=(await J).reduce((H,X)=>Object.assign(H,X),{});return{loaderResults:Y,fetcherResults:W}}function Os(){re=!0,Re.forEach((C,R)=>{B.has(R)&&O.add(R),rr(R)})}function er(C,R,M={}){E.fetchers.set(C,R),Je({fetchers:new Map(E.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function tr(C,R,M,I={}){let z=wr(E.matches,R);Is(C),Je({errors:{[z.route.id]:M},fetchers:new Map(E.fetchers)},{flushSync:(I&&I.flushSync)===!0})}function Nc(C){return Fe.set(C,(Fe.get(C)||0)+1),we.has(C)&&we.delete(C),E.fetchers.get(C)||cv}function Bh(C,R){rr(C,R==null?void 0:R.reason),er(C,ar(null))}function Is(C){let R=E.fetchers.get(C);B.has(C)&&!(R&&R.state==="loading"&&ue.has(C))&&rr(C),Re.delete(C),ue.delete(C),ye.delete(C),we.delete(C),O.delete(C),E.fetchers.delete(C)}function Uh(C){let R=(Fe.get(C)||0)-1;R<=0?(Fe.delete(C),we.add(C)):Fe.set(C,R),Je({fetchers:new Map(E.fetchers)})}function rr(C,R){let M=B.get(C);M&&(M.abort(R),B.delete(C))}function Tc(C){for(let R of C){let M=Nc(R),I=ar(M.data);E.fetchers.set(R,I)}}function Pc(){let C=[],R=!1;for(let M of ye){let I=E.fetchers.get(M);ce(I,`Expected fetcher: ${M}`),I.state==="loading"&&(ye.delete(M),C.push(M),R=!0)}return Tc(C),R}function _c(C){let R=[];for(let[M,I]of ue)if(I<C){let z=E.fetchers.get(M);ce(z,`Expected fetcher: ${M}`),z.state==="loading"&&(rr(M),ue.delete(M),R.push(M))}return Tc(R),R.length>0}function $h(C,R){let M=E.blockers.get(C)||en;return Ve.get(C)!==R&&Ve.set(C,R),M}function qc(C){E.blockers.delete(C),Ve.delete(C)}function Kn(C,R){let M=E.blockers.get(C)||en;ce(M.state==="unblocked"&&R.state==="blocked"||M.state==="blocked"&&R.state==="blocked"||M.state==="blocked"&&R.state==="proceeding"||M.state==="blocked"&&R.state==="unblocked"||M.state==="proceeding"&&R.state==="unblocked",`Invalid blocker state transition: ${M.state} -> ${R.state}`);let I=new Map(E.blockers);I.set(C,R),Je({blockers:I})}function Oc({currentLocation:C,nextLocation:R,historyAction:M}){if(Ve.size===0)return;Ve.size>1&&Ie(!1,"A router only supports one blocker at a time");let I=Array.from(Ve.entries()),[z,J]=I[I.length-1],Y=E.blockers.get(z);if(!(Y&&Y.state==="proceeding")&&J({currentLocation:C,nextLocation:R,historyAction:M}))return z}function Ds(C){let R=wt(404,{pathname:C}),M=c||o,{matches:I,route:z}=ji(M);return{notFoundMatches:I,route:z,error:R}}function Gh(C,R,M){if(g=C,S=R,b=M||null,!h&&E.navigation===hl){h=!0;let I=Dc(E.location,E.matches);I!=null&&Je({restoreScrollPosition:I})}return()=>{g=null,S=null,b=null}}function Ic(C,R){return b&&b(C,R.map(I=>qg(I,E.loaderData)))||C.key}function Vh(C,R){if(g&&S){let M=Ic(C,R);g[M]=S()}}function Dc(C,R){if(g){let M=Ic(C,R),I=g[M];if(typeof I=="number")return I}return null}function Yn(C,R,M){if(e.patchRoutesOnNavigation)if(C){if(Object.keys(C[0].params).length>0)return{active:!0,matches:cn(R,M,u,!0)}}else return{active:!0,matches:cn(R,M,u,!0)||[]};return{active:!1,matches:null}}async function Xn(C,R,M,I){if(!e.patchRoutesOnNavigation)return{type:"success",matches:C};let z=C;for(;;){let J=c==null,Y=c||o,W=l;try{await e.patchRoutesOnNavigation({signal:M,path:R,matches:z,fetcherKey:I,patch:(ne,K)=>{M.aborted||ld(ne,K,Y,W,s,!1)}})}catch(ne){return{type:"error",error:ne,partialMatches:z}}finally{J&&!M.aborted&&(o=[...o])}if(M.aborted)return{type:"aborted"};let H=Sr(Y,R,u),X=null;if(H){if(Object.keys(H[0].params).length===0)return{type:"success",matches:H};if(X=cn(Y,R,u,!0),!(X&&z.length<X.length&&Fc(z,X.slice(0,z.length))))return{type:"success",matches:H}}if(X||(X=cn(Y,R,u,!0)),!X||Fc(z,X))return{type:"success",matches:null};z=X}}function Fc(C,R){return C.length===R.length&&C.every((M,I)=>M.route.id===R[I].route.id)}function Hh(C){l={},c=Dn(C,s,void 0,l)}function Qh(C,R,M=!1){let I=c==null;ld(C,R,c||o,l,s,M),I&&(o=[...o],Je({}))}return _={get basename(){return u},get future(){return d},get state(){return E},get routes(){return o},get window(){return r},initialize:Nh,subscribe:Ph,enableScrollRestoration:Gh,navigate:Lc,fetch:Dh,revalidate:_h,createHref:C=>e.history.createHref(C),encodeLocation:C=>e.history.encodeLocation(C),getFetcher:Nc,resetFetcher:Bh,deleteFetcher:Uh,dispose:Th,getBlocker:$h,deleteBlocker:qc,patchRoutes:Qh,_internalFetchControllers:B,_internalSetRoutes:Hh,_internalSetStateDoNotUseOrYouWillBreakYourApp(C){Je(C)}},e.unstable_instrumentations&&(_=ev(_,e.unstable_instrumentations.map(C=>C.router).filter(Boolean))),_}function pv(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function vo(e,r,a,n,i,s){let l,o;if(i){l=[];for(let u of r)if(l.push(u),u.route.id===i){o=u;break}}else l=r,o=r[r.length-1];let c=ks(n||".",gc(l),kt(e.pathname,a)||e.pathname,s==="path");if(n==null&&(c.search=e.search,c.hash=e.hash),(n==null||n===""||n===".")&&o){let u=bc(c.search);if(o.route.index&&!u)c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index";else if(!o.route.index&&u){let m=new URLSearchParams(c.search),d=m.getAll("index");m.delete("index"),d.filter(y=>y).forEach(y=>m.append("index",y));let f=m.toString();c.search=f?`?${f}`:""}}return a!=="/"&&(c.pathname=Wg({basename:a,pathname:c.pathname})),Kt(c)}function id(e,r,a){if(!a||!pv(a))return{path:r};if(a.formMethod&&!Nv(a.formMethod))return{path:r,error:wt(405,{method:a.formMethod})};let n=()=>({path:r,error:wt(400,{type:"invalid-body"})}),s=(a.formMethod||"get").toUpperCase(),l=ch(r);if(a.body!==void 0){if(a.formEncType==="text/plain"){if(!Ze(s))return n();let d=typeof a.body=="string"?a.body:a.body instanceof FormData||a.body instanceof URLSearchParams?Array.from(a.body.entries()).reduce((f,[y,g])=>`${f}${y}=${g}
`,""):String(a.body);return{path:r,submission:{formMethod:s,formAction:l,formEncType:a.formEncType,formData:void 0,json:void 0,text:d}}}else if(a.formEncType==="application/json"){if(!Ze(s))return n();try{let d=typeof a.body=="string"?JSON.parse(a.body):a.body;return{path:r,submission:{formMethod:s,formAction:l,formEncType:a.formEncType,formData:void 0,json:d,text:void 0}}}catch{return n()}}}ce(typeof FormData=="function","FormData is not available in this environment");let o,c;if(a.formData)o=bo(a.formData),c=a.formData;else if(a.body instanceof FormData)o=bo(a.body),c=a.body;else if(a.body instanceof URLSearchParams)o=a.body,c=pd(o);else if(a.body==null)o=new URLSearchParams,c=new FormData;else try{o=new URLSearchParams(a.body),c=pd(o)}catch{return n()}let u={formMethod:s,formAction:l,formEncType:a&&a.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Ze(u.formMethod))return{path:r,submission:u};let m=Yt(r);return e&&m.search&&bc(m.search)&&o.append("index",""),m.search=`?${o}`,{path:Kt(m),submission:u}}function sd(e,r,a,n,i,s,l,o,c,u,m,d,f,y,g,b,S,h,p,v,L){var q;let k=v?xt(v[1])?v[1].error:v[1].data:void 0,P=i.createURL(s.location),_=i.createURL(c),E;if(m&&s.errors){let G=Object.keys(s.errors)[0];E=l.findIndex(re=>re.route.id===G)}else if(v&&xt(v[1])){let G=v[0];E=l.findIndex(re=>re.route.id===G)-1}let V=v?v[1].statusCode:void 0,F=V&&V>=400,le={currentUrl:P,currentParams:((q=s.matches[0])==null?void 0:q.params)||{},nextUrl:_,nextParams:l[0].params,...o,actionResult:k,actionStatus:V},ee=Hn(l),ve=l.map((G,re)=>{let{route:O}=G,B=null;if(E!=null&&re>E)B=!1;else if(O.lazy)B=!0;else if(!vc(O))B=!1;else if(m){let{shouldLoad:ye}=ah(O,s.loaderData,s.errors);B=ye}else mv(s.loaderData,s.matches[re],G)&&(B=!0);if(B!==null)return jo(a,n,e,ee,G,u,r,B);let U=!1;typeof L=="boolean"?U=L:F?U=!1:(d||P.pathname+P.search===_.pathname+_.search||P.search!==_.search||hv(s.matches[re],G))&&(U=!0);let ae={...le,defaultShouldRevalidate:U},ue=jn(G,ae);return jo(a,n,e,ee,G,u,r,ue,ae,L)}),te=[];return g.forEach((G,re)=>{if(m||!l.some(Fe=>Fe.route.id===G.routeId)||y.has(re))return;let O=s.fetchers.get(re),B=O&&O.state!=="idle"&&O.data===void 0,U=Sr(S,G.path,h);if(!U){if(p&&B)return;te.push({key:re,routeId:G.routeId,path:G.path,matches:null,match:null,request:null,controller:null});return}if(b.has(re))return;let ae=Oi(U,G.path),ue=new AbortController,ye=pa(i,G.path,ue.signal),Re=null;if(f.has(re))f.delete(re),Re=Ta(a,n,ye,U,ae,u,r);else if(B)d&&(Re=Ta(a,n,ye,U,ae,u,r));else{let Fe;typeof L=="boolean"?Fe=L:F?Fe=!1:Fe=d;let we={...le,defaultShouldRevalidate:Fe};jn(ae,we)&&(Re=Ta(a,n,ye,U,ae,u,r,we))}Re&&te.push({key:re,routeId:G.routeId,path:G.path,matches:Re,match:ae,request:ye,controller:ue})}),{dsMatches:ve,revalidatingFetchers:te}}function vc(e){return e.loader!=null||e.middleware!=null&&e.middleware.length>0}function ah(e,r,a){if(e.lazy)return{shouldLoad:!0,renderFallback:!0};if(!vc(e))return{shouldLoad:!1,renderFallback:!1};let n=r!=null&&e.id in r,i=a!=null&&a[e.id]!==void 0;if(!n&&i)return{shouldLoad:!1,renderFallback:!1};if(typeof e.loader=="function"&&e.loader.hydrate===!0)return{shouldLoad:!0,renderFallback:!n};let s=!n&&!i;return{shouldLoad:s,renderFallback:s}}function mv(e,r,a){let n=!r||a.route.id!==r.route.id,i=!e.hasOwnProperty(a.route.id);return n||i}function hv(e,r){let a=e.route.path;return e.pathname!==r.pathname||a!=null&&a.endsWith("*")&&e.params["*"]!==r.params["*"]}function jn(e,r){if(e.route.shouldRevalidate){let a=e.route.shouldRevalidate(r);if(typeof a=="boolean")return a}return r.defaultShouldRevalidate}function ld(e,r,a,n,i,s){let l;if(e){let u=n[e];ce(u,`No route found to patch children into: routeId = ${e}`),u.children||(u.children=[]),l=u.children}else l=a;let o=[],c=[];if(r.forEach(u=>{let m=l.find(d=>nh(u,d));m?c.push({existingRoute:m,newRoute:u}):o.push(u)}),o.length>0){let u=Dn(o,i,[e||"_","patch",String((l==null?void 0:l.length)||"0")],n);l.push(...u)}if(s&&c.length>0)for(let u=0;u<c.length;u++){let{existingRoute:m,newRoute:d}=c[u],f=m,[y]=Dn([d],i,[],{},!0);Object.assign(f,{element:y.element?y.element:f.element,errorElement:y.errorElement?y.errorElement:f.errorElement,hydrateFallbackElement:y.hydrateFallbackElement?y.hydrateFallbackElement:f.hydrateFallbackElement})}}function nh(e,r){var a;return"id"in e&&"id"in r&&e.id===r.id?!0:e.index===r.index&&e.path===r.path&&e.caseSensitive===r.caseSensitive?(!e.children||e.children.length===0)&&(!r.children||r.children.length===0)?!0:((a=e.children)==null?void 0:a.every((n,i)=>{var s;return(s=r.children)==null?void 0:s.some(l=>nh(n,l))}))??!1:!1}var od=new WeakMap,ih=({key:e,route:r,manifest:a,mapRouteProperties:n})=>{let i=a[r.id];if(ce(i,"No route found in manifest"),!i.lazy||typeof i.lazy!="object")return;let s=i.lazy[e];if(!s)return;let l=od.get(i);l||(l={},od.set(i,l));let o=l[e];if(o)return o;let c=(async()=>{let u=Ng(e),d=i[e]!==void 0&&e!=="hasErrorBoundary";if(u)Ie(!u,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),l[e]=Promise.resolve();else if(d)Ie(!1,`Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let f=await s();f!=null&&(Object.assign(i,{[e]:f}),Object.assign(i,n(i)))}typeof i.lazy=="object"&&(i.lazy[e]=void 0,Object.values(i.lazy).every(f=>f===void 0)&&(i.lazy=void 0))})();return l[e]=c,c},cd=new WeakMap;function fv(e,r,a,n,i){let s=a[e.id];if(ce(s,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let m=cd.get(s);if(m)return{lazyRoutePromise:m,lazyHandlerPromise:m};let d=(async()=>{ce(typeof e.lazy=="function","No lazy route function found");let f=await e.lazy(),y={};for(let g in f){let b=f[g];if(b===void 0)continue;let S=Pg(g),p=s[g]!==void 0&&g!=="hasErrorBoundary";S?Ie(!S,"Route property "+g+" is not a supported property to be returned from a lazy route function. This property will be ignored."):p?Ie(!p,`Route "${s.id}" has a static property "${g}" defined but its lazy function is also returning a value for this property. The lazy route property "${g}" will be ignored.`):y[g]=b}Object.assign(s,y),Object.assign(s,{...n(s),lazy:void 0})})();return cd.set(s,d),d.catch(()=>{}),{lazyRoutePromise:d,lazyHandlerPromise:d}}let l=Object.keys(e.lazy),o=[],c;for(let m of l){if(i&&i.includes(m))continue;let d=ih({key:m,route:e,manifest:a,mapRouteProperties:n});d&&(o.push(d),m===r&&(c=d))}let u=o.length>0?Promise.all(o).then(()=>{}):void 0;return u==null||u.catch(()=>{}),c==null||c.catch(()=>{}),{lazyRoutePromise:u,lazyHandlerPromise:c}}async function ud(e){let r=e.matches.filter(i=>i.shouldLoad),a={};return(await Promise.all(r.map(i=>i.resolve()))).forEach((i,s)=>{a[r[s].route.id]=i}),a}async function xv(e){return e.matches.some(r=>r.route.middleware)?sh(e,()=>ud(e)):ud(e)}function sh(e,r){return gv(e,r,n=>{if(kv(n))throw n;return n},Av,a);function a(n,i,s){if(s)return Promise.resolve(Object.assign(s.value,{[i]:{type:"error",result:n}}));{let{matches:l}=e,o=Math.min(Math.max(l.findIndex(u=>u.route.id===i),0),Math.max(l.findIndex(u=>u.shouldCallHandler()),0)),c=wr(l,l[o].route.id).route.id;return Promise.resolve({[c]:{type:"error",result:n}})}}}async function gv(e,r,a,n,i){let{matches:s,request:l,params:o,context:c,unstable_pattern:u}=e,m=s.flatMap(f=>f.route.middleware?f.route.middleware.map(y=>[f.route.id,y]):[]);return await lh({request:l,params:o,context:c,unstable_pattern:u},m,r,a,n,i)}async function lh(e,r,a,n,i,s,l=0){let{request:o}=e;if(o.signal.aborted)throw o.signal.reason??new Error(`Request aborted: ${o.method} ${o.url}`);let c=r[l];if(!c)return await a();let[u,m]=c,d,f=async()=>{if(d)throw new Error("You may only call `next()` once per middleware");try{return d={value:await lh(e,r,a,n,i,s,l+1)},d.value}catch(y){return d={value:await s(y,u,d)},d.value}};try{let y=await m(e,f),g=y!=null?n(y):void 0;return i(g)?g:d?g??d.value:(d={value:await f()},d.value)}catch(y){return await s(y,u,d)}}function oh(e,r,a,n,i){let s=ih({key:"middleware",route:n.route,manifest:r,mapRouteProperties:e}),l=fv(n.route,Ze(a.method)?"action":"loader",r,e,i);return{middleware:s,route:l.lazyRoutePromise,handler:l.lazyHandlerPromise}}function jo(e,r,a,n,i,s,l,o,c=null,u){let m=!1,d=oh(e,r,a,i,s);return{...i,_lazyPromises:d,shouldLoad:o,shouldRevalidateArgs:c,shouldCallHandler(f){return m=!0,c?typeof u=="boolean"?jn(i,{...c,defaultShouldRevalidate:u}):typeof f=="boolean"?jn(i,{...c,defaultShouldRevalidate:f}):jn(i,c):o},resolve(f){let{lazy:y,loader:g,middleware:b}=i.route,S=m||o||f&&!Ze(a.method)&&(y||g),h=b&&b.length>0&&!g&&!y;return S&&(Ze(a.method)||!h)?jv({request:a,unstable_pattern:n,match:i,lazyHandlerPromise:d==null?void 0:d.handler,lazyRoutePromise:d==null?void 0:d.route,handlerOverride:f,scopedContext:l}):Promise.resolve({type:"data",result:void 0})}}}function Ta(e,r,a,n,i,s,l,o=null){return n.map(c=>c.route.id!==i.route.id?{...c,shouldLoad:!1,shouldRevalidateArgs:o,shouldCallHandler:()=>!1,_lazyPromises:oh(e,r,a,c,s),resolve:()=>Promise.resolve({type:"data",result:void 0})}:jo(e,r,a,Hn(n),c,s,l,!0,o))}async function vv(e,r,a,n,i,s){a.some(u=>{var m;return(m=u._lazyPromises)==null?void 0:m.middleware})&&await Promise.all(a.map(u=>{var m;return(m=u._lazyPromises)==null?void 0:m.middleware}));let l={request:r,unstable_pattern:Hn(a),params:a[0].params,context:i,matches:a},c=await e({...l,fetcherKey:n,runClientMiddleware:u=>{let m=l;return sh(m,()=>u({...m,fetcherKey:n,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(a.flatMap(u=>{var m,d;return[(m=u._lazyPromises)==null?void 0:m.handler,(d=u._lazyPromises)==null?void 0:d.route]}))}catch{}return c}async function jv({request:e,unstable_pattern:r,match:a,lazyHandlerPromise:n,lazyRoutePromise:i,handlerOverride:s,scopedContext:l}){let o,c,u=Ze(e.method),m=u?"action":"loader",d=f=>{let y,g=new Promise((h,p)=>y=p);c=()=>y(),e.signal.addEventListener("abort",c);let b=h=>typeof f!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${m}" [routeId: ${a.route.id}]`)):f({request:e,unstable_pattern:r,params:a.params,context:l},...h!==void 0?[h]:[]),S=(async()=>{try{return{type:"data",result:await(s?s(p=>b(p)):b())}}catch(h){return{type:"error",result:h}}})();return Promise.race([S,g])};try{let f=u?a.route.action:a.route.loader;if(n||i)if(f){let y,[g]=await Promise.all([d(f).catch(b=>{y=b}),n,i]);if(y!==void 0)throw y;o=g}else{await n;let y=u?a.route.action:a.route.loader;if(y)[o]=await Promise.all([d(y),i]);else if(m==="action"){let g=new URL(e.url),b=g.pathname+g.search;throw wt(405,{method:e.method,pathname:b,routeId:a.route.id})}else return{type:"data",result:void 0}}else if(f)o=await d(f);else{let y=new URL(e.url),g=y.pathname+y.search;throw wt(404,{pathname:g})}}catch(f){return{type:"error",result:f}}finally{c&&e.signal.removeEventListener("abort",c)}return o}async function bv(e){let r=e.headers.get("Content-Type");return r&&/\bapplication\/json\b/.test(r)?e.body==null?null:e.json():e.text()}async function yv(e){var n,i,s,l,o;let{result:r,type:a}=e;if(jc(r)){let c;try{c=await bv(r)}catch(u){return{type:"error",error:u}}return a==="error"?{type:"error",error:new Vn(r.status,r.statusText,c),statusCode:r.status,headers:r.headers}:{type:"data",data:c,statusCode:r.status,headers:r.headers}}return a==="error"?xd(r)?r.data instanceof Error?{type:"error",error:r.data,statusCode:(n=r.init)==null?void 0:n.status,headers:(i=r.init)!=null&&i.headers?new Headers(r.init.headers):void 0}:{type:"error",error:Ev(r),statusCode:Fn(r)?r.status:void 0,headers:(s=r.init)!=null&&s.headers?new Headers(r.init.headers):void 0}:{type:"error",error:r,statusCode:Fn(r)?r.status:void 0}:xd(r)?{type:"data",data:r.data,statusCode:(l=r.init)==null?void 0:l.status,headers:(o=r.init)!=null&&o.headers?new Headers(r.init.headers):void 0}:{type:"data",data:r}}function Sv(e,r,a,n,i){let s=e.headers.get("Location");if(ce(s,"Redirects returned/thrown from loaders/actions must have a Location header"),!xc(s)){let l=n.slice(0,n.findIndex(o=>o.route.id===a)+1);s=vo(new URL(r.url),l,i,s),e.headers.set("Location",s)}return e}function dd(e,r,a,n){let i=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(xc(e)){let s=e,l=s.startsWith("//")?new URL(r.protocol+s):new URL(s);if(i.includes(l.protocol))throw new Error("Invalid redirect location");let o=kt(l.pathname,a)!=null;if(l.origin===r.origin&&o)return l.pathname+l.search+l.hash}try{let s=n.createURL(e);if(i.includes(s.protocol))throw new Error("Invalid redirect location")}catch{}return e}function pa(e,r,a,n){let i=e.createURL(ch(r)).toString(),s={signal:a};if(n&&Ze(n.formMethod)){let{formMethod:l,formEncType:o}=n;s.method=l.toUpperCase(),o==="application/json"?(s.headers=new Headers({"Content-Type":o}),s.body=JSON.stringify(n.json)):o==="text/plain"?s.body=n.text:o==="application/x-www-form-urlencoded"&&n.formData?s.body=bo(n.formData):s.body=n.formData}return new Request(i,s)}function bo(e){let r=new URLSearchParams;for(let[a,n]of e.entries())r.append(a,typeof n=="string"?n:n.name);return r}function pd(e){let r=new FormData;for(let[a,n]of e.entries())r.append(a,n);return r}function wv(e,r,a,n=!1,i=!1){let s={},l=null,o,c=!1,u={},m=a&&xt(a[1])?a[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in r))return;let f=d.route.id,y=r[f];if(ce(!Kr(y),"Cannot handle redirect results in processLoaderData"),xt(y)){let g=y.error;if(m!==void 0&&(g=m,m=void 0),l=l||{},i)l[f]=g;else{let b=wr(e,f);l[b.route.id]==null&&(l[b.route.id]=g)}n||(s[f]=rh),c||(c=!0,o=Fn(y.error)?y.error.status:500),y.headers&&(u[f]=y.headers)}else s[f]=y.data,y.statusCode&&y.statusCode!==200&&!c&&(o=y.statusCode),y.headers&&(u[f]=y.headers)}),m!==void 0&&a&&(l={[a[0]]:m},a[2]&&(s[a[2]]=void 0)),{loaderData:s,errors:l,statusCode:o||200,loaderHeaders:u}}function md(e,r,a,n,i,s){let{loaderData:l,errors:o}=wv(r,a,n);return i.filter(c=>!c.matches||c.matches.some(u=>u.shouldLoad)).forEach(c=>{let{key:u,match:m,controller:d}=c;if(d&&d.signal.aborted)return;let f=s[u];if(ce(f,"Did not find corresponding fetcher result"),xt(f)){let y=wr(e.matches,m==null?void 0:m.route.id);o&&o[y.route.id]||(o={...o,[y.route.id]:f.error}),e.fetchers.delete(u)}else if(Kr(f))ce(!1,"Unhandled fetcher revalidation redirect");else{let y=ar(f.data);e.fetchers.set(u,y)}}),{loaderData:l,errors:o}}function hd(e,r,a,n){let i=Object.entries(r).filter(([,s])=>s!==rh).reduce((s,[l,o])=>(s[l]=o,s),{});for(let s of a){let l=s.route.id;if(!r.hasOwnProperty(l)&&e.hasOwnProperty(l)&&s.route.loader&&(i[l]=e[l]),n&&n.hasOwnProperty(l))break}return i}function fd(e){return e?xt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function wr(e,r){return(r?e.slice(0,e.findIndex(n=>n.route.id===r)+1):[...e]).reverse().find(n=>n.route.hasErrorBoundary===!0)||e[0]}function ji(e){let r=e.length===1?e[0]:e.find(a=>a.index||!a.path||a.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:r}],route:r}}function wt(e,{pathname:r,routeId:a,method:n,type:i,message:s}={}){let l="Unknown Server Error",o="Unknown @remix-run/router error";return e===400?(l="Bad Request",n&&r&&a?o=`You made a ${n} request to "${r}" but did not provide a \`loader\` for route "${a}", so there is no way to handle the request.`:i==="invalid-body"&&(o="Unable to encode submission body")):e===403?(l="Forbidden",o=`Route "${a}" does not match URL "${r}"`):e===404?(l="Not Found",o=`No route matches URL "${r}"`):e===405&&(l="Method Not Allowed",n&&r&&a?o=`You made a ${n.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${a}", so there is no way to handle the request.`:n&&(o=`Invalid request method "${n.toUpperCase()}"`)),new Vn(e||500,l,new Error(o),!0)}function bi(e){let r=Object.entries(e);for(let a=r.length-1;a>=0;a--){let[n,i]=r[a];if(Kr(i))return{key:n,result:i}}}function ch(e){let r=typeof e=="string"?Yt(e):e;return Kt({...r,hash:""})}function Cv(e,r){return e.pathname!==r.pathname||e.search!==r.search?!1:e.hash===""?r.hash!=="":e.hash===r.hash?!0:r.hash!==""}function Ev(e){var r,a;return new Vn(((r=e.init)==null?void 0:r.status)??500,((a=e.init)==null?void 0:a.statusText)??"Internal Server Error",e.data)}function Av(e){return e!=null&&typeof e=="object"&&Object.entries(e).every(([r,a])=>typeof r=="string"&&Rv(a))}function Rv(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function Lv(e){return jc(e.result)&&eh.has(e.result.status)}function xt(e){return e.type==="error"}function Kr(e){return(e&&e.type)==="redirect"}function xd(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function jc(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Mv(e){return eh.has(e)}function kv(e){return jc(e)&&Mv(e.status)&&e.headers.has("Location")}function Nv(e){return lv.has(e.toUpperCase())}function Ze(e){return iv.has(e.toUpperCase())}function bc(e){return new URLSearchParams(e).getAll("index").some(r=>r==="")}function Oi(e,r){let a=typeof r=="string"?Yt(r).search:r.search;if(e[e.length-1].route.index&&bc(a||""))return e[e.length-1];let n=Jm(e);return n[n.length-1]}function gd(e){let{formMethod:r,formAction:a,formEncType:n,text:i,formData:s,json:l}=e;if(!(!r||!a||!n)){if(i!=null)return{formMethod:r,formAction:a,formEncType:n,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:r,formAction:a,formEncType:n,formData:s,json:void 0,text:void 0};if(l!==void 0)return{formMethod:r,formAction:a,formEncType:n,formData:void 0,json:l,text:void 0}}}function fl(e,r){return r?{state:"loading",location:e,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Tv(e,r){return{state:"submitting",location:e,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}}function tn(e,r){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:r}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:r}}function Pv(e,r){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:r?r.data:void 0}}function ar(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function _v(e,r){try{let a=e.sessionStorage.getItem(th);if(a){let n=JSON.parse(a);for(let[i,s]of Object.entries(n||{}))s&&Array.isArray(s)&&r.set(i,new Set(s||[]))}}catch{}}function qv(e,r){if(r.size>0){let a={};for(let[n,i]of r)a[n]=[...i];try{e.sessionStorage.setItem(th,JSON.stringify(a))}catch(n){Ie(!1,`Failed to save applied view transitions in sessionStorage (${n}).`)}}}function vd(){let e,r,a=new Promise((n,i)=>{e=async s=>{n(s);try{await a}catch{}},r=async s=>{i(s);try{await a}catch{}}});return{promise:a,resolve:e,reject:r}}var sa=A.createContext(null);sa.displayName="DataRouter";var Qn=A.createContext(null);Qn.displayName="DataRouterState";var uh=A.createContext(!1);function Ov(){return A.useContext(uh)}var yc=A.createContext({isTransitioning:!1});yc.displayName="ViewTransition";var dh=A.createContext(new Map);dh.displayName="Fetchers";var Iv=A.createContext(null);Iv.displayName="Await";var Nt=A.createContext(null);Nt.displayName="Navigation";var Ns=A.createContext(null);Ns.displayName="Location";var Xt=A.createContext({outlet:null,matches:[],isDataRoute:!1});Xt.displayName="Route";var Sc=A.createContext(null);Sc.displayName="RouteError";var ph="REACT_ROUTER_ERROR",Dv="REDIRECT",Fv="ROUTE_ERROR_RESPONSE";function zv(e){if(e.startsWith(`${ph}:${Dv}:{`))try{let r=JSON.parse(e.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function Bv(e){if(e.startsWith(`${ph}:${Fv}:{`))try{let r=JSON.parse(e.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new Vn(r.status,r.statusText,r.data)}catch{}}function Uv(e,{relative:r}={}){ce(Wn(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:n}=A.useContext(Nt),{hash:i,pathname:s,search:l}=Jn(e,{relative:r}),o=s;return a!=="/"&&(o=s==="/"?a:zt([a,s])),n.createHref({pathname:o,search:l,hash:i})}function Wn(){return A.useContext(Ns)!=null}function Zt(){return ce(Wn(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Ns).location}var mh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function hh(e){A.useContext(Nt).static||A.useLayoutEffect(e)}function $v(){let{isDataRoute:e}=A.useContext(Xt);return e?nj():Gv()}function Gv(){ce(Wn(),"useNavigate() may be used only in the context of a <Router> component.");let e=A.useContext(sa),{basename:r,navigator:a}=A.useContext(Nt),{matches:n}=A.useContext(Xt),{pathname:i}=Zt(),s=JSON.stringify(gc(n)),l=A.useRef(!1);return hh(()=>{l.current=!0}),A.useCallback((c,u={})=>{if(Ie(l.current,mh),!l.current)return;if(typeof c=="number"){a.go(c);return}let m=ks(c,JSON.parse(s),i,u.relative==="path");e==null&&r!=="/"&&(m.pathname=m.pathname==="/"?r:zt([r,m.pathname])),(u.replace?a.replace:a.push)(m,u.state,u)},[r,a,s,i,e])}var Vv=A.createContext(null);function Hv(e){let r=A.useContext(Xt).outlet;return A.useMemo(()=>r&&A.createElement(Vv.Provider,{value:e},r),[r,e])}function Jn(e,{relative:r}={}){let{matches:a}=A.useContext(Xt),{pathname:n}=Zt(),i=JSON.stringify(gc(a));return A.useMemo(()=>ks(e,JSON.parse(i),n,r==="path"),[e,i,n,r])}function Qv(e,r,a){ce(Wn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:n}=A.useContext(Nt),{matches:i}=A.useContext(Xt),s=i[i.length-1],l=s?s.params:{},o=s?s.pathname:"/",c=s?s.pathnameBase:"/",u=s&&s.route;{let S=u&&u.path||"";xh(o,!u||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let m=Zt(),d;d=m;let f=d.pathname||"/",y=f;if(c!=="/"){let S=c.replace(/^\//,"").split("/");y="/"+f.replace(/^\//,"").split("/").slice(S.length).join("/")}let g=Sr(e,{pathname:y});return Ie(u||g!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),Ie(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Xv(g&&g.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:zt([c,n.encodeLocation?n.encodeLocation(S.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:zt([c,n.encodeLocation?n.encodeLocation(S.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),i,a)}function Wv(){let e=aj(),r=Fn(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:n},s={padding:"2px 4px",backgroundColor:n},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:s},"ErrorBoundary")," or"," ",A.createElement("code",{style:s},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},r),a?A.createElement("pre",{style:i},a):null,l)}var Jv=A.createElement(Wv,null),fh=class extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){this.props.onError?this.props.onError(e,r):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const a=Bv(e.digest);a&&(e=a)}let r=e!==void 0?A.createElement(Xt.Provider,{value:this.props.routeContext},A.createElement(Sc.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?A.createElement(Kv,{error:e},r):r}};fh.contextType=uh;var xl=new WeakMap;function Kv({children:e,error:r}){let{basename:a}=A.useContext(Nt);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let n=zv(r.digest);if(n){let i=xl.get(r);if(i)throw i;let s=Ym(n.location,a);if(Km&&!xl.get(r))if(s.isExternal||n.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const l=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:n.replace}));throw xl.set(r,l),l}return A.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return e}function Yv({routeContext:e,match:r,children:a}){let n=A.useContext(sa);return n&&n.static&&n.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=r.route.id),A.createElement(Xt.Provider,{value:e},a)}function Xv(e,r=[],a){let n=a==null?void 0:a.state;if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(r.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,s=n==null?void 0:n.errors;if(s!=null){let m=i.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);ce(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,m+1))}let l=!1,o=-1;if(a&&n){l=n.renderFallback;for(let m=0;m<i.length;m++){let d=i[m];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(o=m),d.route.id){let{loaderData:f,errors:y}=n,g=d.route.loader&&!f.hasOwnProperty(d.route.id)&&(!y||y[d.route.id]===void 0);if(d.route.lazy||g){a.isStatic&&(l=!0),o>=0?i=i.slice(0,o+1):i=[i[0]];break}}}}let c=a==null?void 0:a.onError,u=n&&c?(m,d)=>{var f,y;c(m,{location:n.location,params:((y=(f=n.matches)==null?void 0:f[0])==null?void 0:y.params)??{},unstable_pattern:Hn(n.matches),errorInfo:d})}:void 0;return i.reduceRight((m,d,f)=>{let y,g=!1,b=null,S=null;n&&(y=s&&d.route.id?s[d.route.id]:void 0,b=d.route.errorElement||Jv,l&&(o<0&&f===0?(xh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),g=!0,S=null):o===f&&(g=!0,S=d.route.hydrateFallbackElement||null)));let h=r.concat(i.slice(0,f+1)),p=()=>{let v;return y?v=b:g?v=S:d.route.Component?v=A.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=m,A.createElement(Yv,{match:d,routeContext:{outlet:m,matches:h,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?A.createElement(fh,{location:n.location,revalidation:n.revalidation,component:b,error:y,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:u}):p()},null)}function wc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zv(e){let r=A.useContext(sa);return ce(r,wc(e)),r}function ej(e){let r=A.useContext(Qn);return ce(r,wc(e)),r}function tj(e){let r=A.useContext(Xt);return ce(r,wc(e)),r}function Cc(e){let r=tj(e),a=r.matches[r.matches.length-1];return ce(a.route.id,`${e} can only be used on routes that contain a unique "id"`),a.route.id}function rj(){return Cc("useRouteId")}function aj(){var n;let e=A.useContext(Sc),r=ej("useRouteError"),a=Cc("useRouteError");return e!==void 0?e:(n=r.errors)==null?void 0:n[a]}function nj(){let{router:e}=Zv("useNavigate"),r=Cc("useNavigate"),a=A.useRef(!1);return hh(()=>{a.current=!0}),A.useCallback(async(i,s={})=>{Ie(a.current,mh),a.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:r,...s}))},[e,r])}var jd={};function xh(e,r,a){!r&&!jd[e]&&(jd[e]=!0,Ie(!1,a))}var bd={};function yd(e,r){!e&&!bd[r]&&(bd[r]=!0,console.warn(r))}var ij="useOptimistic",Sd=hf[ij],sj=()=>{};function lj(e){return Sd?Sd(e):[e,sj]}function oj(e){let r={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&Ie(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(r,{element:A.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&Ie(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(r,{hydrateFallbackElement:A.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&Ie(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(r,{errorElement:A.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),r}var cj=["HydrateFallback","hydrateFallbackElement"],uj=class{constructor(){this.status="pending",this.promise=new Promise((e,r)=>{this.resolve=a=>{this.status==="pending"&&(this.status="resolved",e(a))},this.reject=a=>{this.status==="pending"&&(this.status="rejected",r(a))}})}};function dj({router:e,flushSync:r,onError:a,unstable_useTransitions:n}){n=Ov()||n;let[s,l]=A.useState(e.state),[o,c]=lj(s),[u,m]=A.useState(),[d,f]=A.useState({isTransitioning:!1}),[y,g]=A.useState(),[b,S]=A.useState(),[h,p]=A.useState(),v=A.useRef(new Map),L=A.useCallback((E,{deletedFetchers:V,newErrors:F,flushSync:le,viewTransitionOpts:ee})=>{F&&a&&Object.values(F).forEach(te=>{var q;return a(te,{location:E.location,params:((q=E.matches[0])==null?void 0:q.params)??{},unstable_pattern:Hn(E.matches)})}),E.fetchers.forEach((te,q)=>{te.data!==void 0&&v.current.set(q,te.data)}),V.forEach(te=>v.current.delete(te)),yd(le===!1||r!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let ve=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(yd(ee==null||ve,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!ee||!ve){r&&le?r(()=>l(E)):n===!1?l(E):A.startTransition(()=>{n===!0&&c(te=>wd(te,E)),l(E)});return}if(r&&le){r(()=>{b&&(y==null||y.resolve(),b.skipTransition()),f({isTransitioning:!0,flushSync:!0,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation})});let te=e.window.document.startViewTransition(()=>{r(()=>l(E))});te.finished.finally(()=>{r(()=>{g(void 0),S(void 0),m(void 0),f({isTransitioning:!1})})}),r(()=>S(te));return}b?(y==null||y.resolve(),b.skipTransition(),p({state:E,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation})):(m(E),f({isTransitioning:!0,flushSync:!1,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation}))},[e.window,r,b,y,n,c,a]);A.useLayoutEffect(()=>e.subscribe(L),[e,L]),A.useEffect(()=>{d.isTransitioning&&!d.flushSync&&g(new uj)},[d]),A.useEffect(()=>{if(y&&u&&e.window){let E=u,V=y.promise,F=e.window.document.startViewTransition(async()=>{n===!1?l(E):A.startTransition(()=>{n===!0&&c(le=>wd(le,E)),l(E)}),await V});F.finished.finally(()=>{g(void 0),S(void 0),m(void 0),f({isTransitioning:!1})}),S(F)}},[u,y,e.window,n,c]),A.useEffect(()=>{y&&u&&o.location.key===u.location.key&&y.resolve()},[y,b,o.location,u]),A.useEffect(()=>{!d.isTransitioning&&h&&(m(h.state),f({isTransitioning:!0,flushSync:!1,currentLocation:h.currentLocation,nextLocation:h.nextLocation}),p(void 0))},[d.isTransitioning,h]);let k=A.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:E=>e.navigate(E),push:(E,V,F)=>e.navigate(E,{state:V,preventScrollReset:F==null?void 0:F.preventScrollReset}),replace:(E,V,F)=>e.navigate(E,{replace:!0,state:V,preventScrollReset:F==null?void 0:F.preventScrollReset})}),[e]),P=e.basename||"/",_=A.useMemo(()=>({router:e,navigator:k,static:!1,basename:P,onError:a}),[e,k,P,a]);return A.createElement(A.Fragment,null,A.createElement(sa.Provider,{value:_},A.createElement(Qn.Provider,{value:o},A.createElement(dh.Provider,{value:v.current},A.createElement(yc.Provider,{value:d},A.createElement(fj,{basename:P,location:o.location,navigationType:o.historyAction,navigator:k,unstable_useTransitions:n},A.createElement(pj,{routes:e.routes,future:e.future,state:o,isStatic:!1,onError:a})))))),null)}function wd(e,r){return{...e,navigation:r.navigation.state!=="idle"?r.navigation:e.navigation,revalidation:r.revalidation!=="idle"?r.revalidation:e.revalidation,actionData:r.navigation.state!=="submitting"?r.actionData:e.actionData,fetchers:r.fetchers}}var pj=A.memo(mj);function mj({routes:e,future:r,state:a,isStatic:n,onError:i}){return Qv(e,void 0,{state:a,isStatic:n,onError:i})}function hj(e){return Hv(e.context)}function fj({basename:e="/",children:r=null,location:a,navigationType:n="POP",navigator:i,static:s=!1,unstable_useTransitions:l}){ce(!Wn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),c=A.useMemo(()=>({basename:o,navigator:i,static:s,unstable_useTransitions:l,future:{}}),[o,i,s,l]);typeof a=="string"&&(a=Yt(a));let{pathname:u="/",search:m="",hash:d="",state:f=null,key:y="default",unstable_mask:g}=a,b=A.useMemo(()=>{let S=kt(u,o);return S==null?null:{location:{pathname:S,search:m,hash:d,state:f,key:y,unstable_mask:g},navigationType:n}},[o,u,m,d,f,y,n,g]);return Ie(b!=null,`<Router basename="${o}"> is not able to match the URL "${u}${m}${d}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:A.createElement(Nt.Provider,{value:c},A.createElement(Ns.Provider,{children:r,value:b}))}var Ii="get",Di="application/x-www-form-urlencoded";function Ts(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function xj(e){return Ts(e)&&e.tagName.toLowerCase()==="button"}function gj(e){return Ts(e)&&e.tagName.toLowerCase()==="form"}function vj(e){return Ts(e)&&e.tagName.toLowerCase()==="input"}function jj(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function bj(e,r){return e.button===0&&(!r||r==="_self")&&!jj(e)}var yi=null;function yj(){if(yi===null)try{new FormData(document.createElement("form"),0),yi=!1}catch{yi=!0}return yi}var Sj=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gl(e){return e!=null&&!Sj.has(e)?(Ie(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Di}"`),null):e}function wj(e,r){let a,n,i,s,l;if(gj(e)){let o=e.getAttribute("action");n=o?kt(o,r):null,a=e.getAttribute("method")||Ii,i=gl(e.getAttribute("enctype"))||Di,s=new FormData(e)}else if(xj(e)||vj(e)&&(e.type==="submit"||e.type==="image")){let o=e.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||o.getAttribute("action");if(n=c?kt(c,r):null,a=e.getAttribute("formmethod")||o.getAttribute("method")||Ii,i=gl(e.getAttribute("formenctype"))||gl(o.getAttribute("enctype"))||Di,s=new FormData(o,e),!yj()){let{name:u,type:m,value:d}=e;if(m==="image"){let f=u?`${u}.`:"";s.append(`${f}x`,"0"),s.append(`${f}y`,"0")}else u&&s.append(u,d)}}else{if(Ts(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=Ii,n=null,i=Di,l=e}return s&&i==="text/plain"&&(l=s,s=void 0),{action:n,method:a.toLowerCase(),encType:i,formData:s,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ec(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function Cj(e,r,a,n){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${n}`:i.pathname=`${i.pathname}.${n}`:i.pathname==="/"?i.pathname=`_root.${n}`:r&&kt(i.pathname,r)==="/"?i.pathname=`${r.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function Ej(e,r){if(e.id in r)return r[e.id];try{let a=await import(e.module);return r[e.id]=a,a}catch(a){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Aj(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Rj(e,r,a){let n=await Promise.all(e.map(async i=>{let s=r.routes[i.route.id];if(s){let l=await Ej(s,a);return l.links?l.links():[]}return[]}));return Nj(n.flat(1).filter(Aj).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Cd(e,r,a,n,i,s){let l=(c,u)=>a[u]?c.route.id!==a[u].route.id:!0,o=(c,u)=>{var m;return a[u].pathname!==c.pathname||((m=a[u].route.path)==null?void 0:m.endsWith("*"))&&a[u].params["*"]!==c.params["*"]};return s==="assets"?r.filter((c,u)=>l(c,u)||o(c,u)):s==="data"?r.filter((c,u)=>{var d;let m=n.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(l(c,u)||o(c,u))return!0;if(c.route.shouldRevalidate){let f=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((d=a[0])==null?void 0:d.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function Lj(e,r,{includeHydrateFallback:a}={}){return Mj(e.map(n=>{let i=r.routes[n.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),a&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function Mj(e){return[...new Set(e)]}function kj(e){let r={},a=Object.keys(e).sort();for(let n of a)r[n]=e[n];return r}function Nj(e,r){let a=new Set;return new Set(r),e.reduce((n,i)=>{let s=JSON.stringify(kj(i));return a.has(s)||(a.add(s),n.push({key:s,link:i})),n},[])}function gh(){let e=A.useContext(sa);return Ec(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Tj(){let e=A.useContext(Qn);return Ec(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Ac=A.createContext(void 0);Ac.displayName="FrameworkContext";function vh(){let e=A.useContext(Ac);return Ec(e,"You must render this element inside a <HydratedRouter> element"),e}function Pj(e,r){let a=A.useContext(Ac),[n,i]=A.useState(!1),[s,l]=A.useState(!1),{onFocus:o,onBlur:c,onMouseEnter:u,onMouseLeave:m,onTouchStart:d}=r,f=A.useRef(null);A.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let b=h=>{h.forEach(p=>{l(p.isIntersecting)})},S=new IntersectionObserver(b,{threshold:.5});return f.current&&S.observe(f.current),()=>{S.disconnect()}}},[e]),A.useEffect(()=>{if(n){let b=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(b)}}},[n]);let y=()=>{i(!0)},g=()=>{i(!1),l(!1)};return a?e!=="intent"?[s,f,{}]:[s,f,{onFocus:rn(o,y),onBlur:rn(c,g),onMouseEnter:rn(u,y),onMouseLeave:rn(m,g),onTouchStart:rn(d,y)}]:[!1,f,{}]}function rn(e,r){return a=>{e&&e(a),a.defaultPrevented||r(a)}}function _j({page:e,...r}){let{router:a}=gh(),n=A.useMemo(()=>Sr(a.routes,e,a.basename),[a.routes,e,a.basename]);return n?A.createElement(Oj,{page:e,matches:n,...r}):null}function qj(e){let{manifest:r,routeModules:a}=vh(),[n,i]=A.useState([]);return A.useEffect(()=>{let s=!1;return Rj(e,r,a).then(l=>{s||i(l)}),()=>{s=!0}},[e,r,a]),n}function Oj({page:e,matches:r,...a}){let n=Zt(),{future:i,manifest:s,routeModules:l}=vh(),{basename:o}=gh(),{loaderData:c,matches:u}=Tj(),m=A.useMemo(()=>Cd(e,r,u,s,n,"data"),[e,r,u,s,n]),d=A.useMemo(()=>Cd(e,r,u,s,n,"assets"),[e,r,u,s,n]),f=A.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let b=new Set,S=!1;if(r.forEach(p=>{var L;let v=s.routes[p.route.id];!v||!v.hasLoader||(!m.some(k=>k.route.id===p.route.id)&&p.route.id in c&&((L=l[p.route.id])!=null&&L.shouldRevalidate)||v.hasClientLoader?S=!0:b.add(p.route.id))}),b.size===0)return[];let h=Cj(e,o,i.unstable_trailingSlashAwareDataRequests,"data");return S&&b.size>0&&h.searchParams.set("_routes",r.filter(p=>b.has(p.route.id)).map(p=>p.route.id).join(",")),[h.pathname+h.search]},[o,i.unstable_trailingSlashAwareDataRequests,c,n,s,m,r,e,l]),y=A.useMemo(()=>Lj(d,s),[d,s]),g=qj(d);return A.createElement(A.Fragment,null,f.map(b=>A.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...a})),y.map(b=>A.createElement("link",{key:b,rel:"modulepreload",href:b,...a})),g.map(({key:b,link:S})=>A.createElement("link",{key:b,nonce:a.nonce,...S,crossOrigin:S.crossOrigin??a.crossOrigin})))}function Ij(...e){return r=>{e.forEach(a=>{typeof a=="function"?a(r):a!=null&&(a.current=r)})}}var Dj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Dj&&(window.__reactRouterVersion="7.13.1")}catch{}function Fj(e,r){return dv({basename:r==null?void 0:r.basename,getContext:r==null?void 0:r.getContext,future:r==null?void 0:r.future,history:Rg({window:r==null?void 0:r.window}),hydrationData:zj(),routes:e,mapRouteProperties:oj,hydrationRouteProperties:cj,dataStrategy:r==null?void 0:r.dataStrategy,patchRoutesOnNavigation:r==null?void 0:r.patchRoutesOnNavigation,window:r==null?void 0:r.window,unstable_instrumentations:r==null?void 0:r.unstable_instrumentations}).initialize()}function zj(){let e=window==null?void 0:window.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:Bj(e.errors)}),e}function Bj(e){if(!e)return null;let r=Object.entries(e),a={};for(let[n,i]of r)if(i&&i.__type==="RouteErrorResponse")a[n]=new Vn(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let l=new s(i.message);l.stack="",a[n]=l}catch{}}if(a[n]==null){let s=new Error(i.message);s.stack="",a[n]=s}}else a[n]=i;return a}var jh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ps=A.forwardRef(function({onClick:r,discover:a="render",prefetch:n="none",relative:i,reloadDocument:s,replace:l,unstable_mask:o,state:c,target:u,to:m,preventScrollReset:d,viewTransition:f,unstable_defaultShouldRevalidate:y,...g},b){let{basename:S,navigator:h,unstable_useTransitions:p}=A.useContext(Nt),v=typeof m=="string"&&jh.test(m),L=Ym(m,S);m=L.to;let k=Uv(m,{relative:i}),P=Zt(),_=null;if(o){let q=ks(o,[],P.unstable_mask?P.unstable_mask.pathname:"/",!0);S!=="/"&&(q.pathname=q.pathname==="/"?S:zt([S,q.pathname])),_=h.createHref(q)}let[E,V,F]=Pj(n,g),le=Gj(m,{replace:l,unstable_mask:o,state:c,target:u,preventScrollReset:d,relative:i,viewTransition:f,unstable_defaultShouldRevalidate:y,unstable_useTransitions:p});function ee(q){r&&r(q),q.defaultPrevented||le(q)}let ve=!(L.isExternal||s),te=A.createElement("a",{...g,...F,href:(ve?_:void 0)||L.absoluteURL||k,onClick:ve?ee:r,ref:Ij(b,V),target:u,"data-discover":!v&&a==="render"?"true":void 0});return E&&!v?A.createElement(A.Fragment,null,te,A.createElement(_j,{page:k})):te});Ps.displayName="Link";var bh=A.forwardRef(function({"aria-current":r="page",caseSensitive:a=!1,className:n="",end:i=!1,style:s,to:l,viewTransition:o,children:c,...u},m){let d=Jn(l,{relative:u.relative}),f=Zt(),y=A.useContext(Qn),{navigator:g,basename:b}=A.useContext(Nt),S=y!=null&&Jj(d)&&o===!0,h=g.encodeLocation?g.encodeLocation(d).pathname:d.pathname,p=f.pathname,v=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;a||(p=p.toLowerCase(),v=v?v.toLowerCase():null,h=h.toLowerCase()),v&&b&&(v=kt(v,b)||v);const L=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let k=p===h||!i&&p.startsWith(h)&&p.charAt(L)==="/",P=v!=null&&(v===h||!i&&v.startsWith(h)&&v.charAt(h.length)==="/"),_={isActive:k,isPending:P,isTransitioning:S},E=k?r:void 0,V;typeof n=="function"?V=n(_):V=[n,k?"active":null,P?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let F=typeof s=="function"?s(_):s;return A.createElement(Ps,{...u,"aria-current":E,className:V,ref:m,style:F,to:l,viewTransition:o},typeof c=="function"?c(_):c)});bh.displayName="NavLink";var Uj=A.forwardRef(({discover:e="render",fetcherKey:r,navigate:a,reloadDocument:n,replace:i,state:s,method:l=Ii,action:o,onSubmit:c,relative:u,preventScrollReset:m,viewTransition:d,unstable_defaultShouldRevalidate:f,...y},g)=>{let{unstable_useTransitions:b}=A.useContext(Nt),S=Qj(),h=Wj(o,{relative:u}),p=l.toLowerCase()==="get"?"get":"post",v=typeof o=="string"&&jh.test(o),L=k=>{if(c&&c(k),k.defaultPrevented)return;k.preventDefault();let P=k.nativeEvent.submitter,_=(P==null?void 0:P.getAttribute("formmethod"))||l,E=()=>S(P||k.currentTarget,{fetcherKey:r,method:_,navigate:a,replace:i,state:s,relative:u,preventScrollReset:m,viewTransition:d,unstable_defaultShouldRevalidate:f});b&&a!==!1?A.startTransition(()=>E()):E()};return A.createElement("form",{ref:g,method:p,action:h,onSubmit:n?c:L,...y,"data-discover":!v&&e==="render"?"true":void 0})});Uj.displayName="Form";function $j(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yh(e){let r=A.useContext(sa);return ce(r,$j(e)),r}function Gj(e,{target:r,replace:a,unstable_mask:n,state:i,preventScrollReset:s,relative:l,viewTransition:o,unstable_defaultShouldRevalidate:c,unstable_useTransitions:u}={}){let m=$v(),d=Zt(),f=Jn(e,{relative:l});return A.useCallback(y=>{if(bj(y,r)){y.preventDefault();let g=a!==void 0?a:Kt(d)===Kt(f),b=()=>m(e,{replace:g,unstable_mask:n,state:i,preventScrollReset:s,relative:l,viewTransition:o,unstable_defaultShouldRevalidate:c});u?A.startTransition(()=>b()):b()}},[d,m,f,a,n,i,r,e,s,l,o,c,u])}var Vj=0,Hj=()=>`__${String(++Vj)}__`;function Qj(){let{router:e}=yh("useSubmit"),{basename:r}=A.useContext(Nt),a=rj(),n=e.fetch,i=e.navigate;return A.useCallback(async(s,l={})=>{let{action:o,method:c,encType:u,formData:m,body:d}=wj(s,r);if(l.navigate===!1){let f=l.fetcherKey||Hj();await n(f,a,l.action||o,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:m,body:d,formMethod:l.method||c,formEncType:l.encType||u,flushSync:l.flushSync})}else await i(l.action||o,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:m,body:d,formMethod:l.method||c,formEncType:l.encType||u,replace:l.replace,state:l.state,fromRouteId:a,flushSync:l.flushSync,viewTransition:l.viewTransition})},[n,i,r,a])}function Wj(e,{relative:r}={}){let{basename:a}=A.useContext(Nt),n=A.useContext(Xt);ce(n,"useFormAction must be used inside a RouteContext");let[i]=n.matches.slice(-1),s={...Jn(e||".",{relative:r})},l=Zt();if(e==null){s.search=l.search;let o=new URLSearchParams(s.search),c=o.getAll("index");if(c.some(m=>m==="")){o.delete("index"),c.filter(d=>d).forEach(d=>o.append("index",d));let m=o.toString();s.search=m?`?${m}`:""}}return(!e||e===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(s.pathname=s.pathname==="/"?a:zt([a,s.pathname])),Kt(s)}function Jj(e,{relative:r}={}){let a=A.useContext(yc);ce(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=yh("useViewTransitionState"),i=Jn(e,{relative:r});if(!a.isTransitioning)return!1;let s=kt(a.currentLocation.pathname,n)||a.currentLocation.pathname,l=kt(a.nextLocation.pathname,n)||a.nextLocation.pathname;return ds(i.pathname,l)!=null||ds(i.pathname,s)!=null}function Kj(e){return A.createElement(dj,{flushSync:Um.flushSync,...e})}const Yj="_header_18s0b_1",Xj="_left_18s0b_27",Zj="_collapseBtn_18s0b_39",eb="_logo_18s0b_79",tb="_logoIcon_18s0b_95",rb="_logoText_18s0b_121",ab="_logoSubtext_18s0b_133",nb="_hamburger_18s0b_145",xr={header:Yj,left:Xj,collapseBtn:Zj,logo:eb,logoIcon:tb,logoText:rb,logoSubtext:ab,hamburger:nb};function ib({onToggleSidebar:e,onCollapseSidebar:r,collapsed:a}){return t.jsxs("header",{className:xr.header,children:[t.jsxs("div",{className:xr.left,children:[t.jsx("button",{className:xr.collapseBtn,onClick:r,"aria-label":a?"Expandir menú":"Plegar menú",title:a?"Expandir menú":"Plegar menú",children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:a?t.jsx("path",{d:"M6 3L12 9L6 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}):t.jsx("path",{d:"M12 3L6 9L12 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),t.jsxs(Ps,{to:"/",className:xr.logo,children:[t.jsx("div",{className:xr.logoIcon,children:"J"}),t.jsxs("div",{children:[t.jsx("div",{className:xr.logoText,children:"Programacio Java"}),t.jsx("div",{className:xr.logoSubtext,children:"DAM - La Salle Tarragona"})]})]})]}),t.jsx("button",{className:xr.hamburger,onClick:e,"aria-label":"Obrir menu",children:t.jsx("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:t.jsx("path",{d:"M3 6H19M3 11H19M3 16H19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]})}const vl=[{id:"basics",title:"Basics de Java",items:[{path:"/basics/tipus-de-dades",label:"Tipus de Dades"},{path:"/basics/operadors",label:"Operadors"},{path:"/basics/sintaxi",label:"Sintaxi de Java"},{path:"/basics/condicionals",label:"Condicionals"},{path:"/basics/switch",label:"Switch"},{path:"/basics/bucles",label:"Bucles"},{path:"/basics/modificadors-acces",label:"Modificadors d'Acces"}]},{id:"arrays",title:"Arrays",items:[{path:"/arrays/arrays-1d",label:"Arrays 1D"},{path:"/arrays/arrays-2d",label:"Arrays 2D (Matrius)"},{path:"/arrays/arraylist",label:"ArrayList"}]},{id:"funcions",title:"Funcions",items:[{path:"/funcions/sense-parametres",label:"Funcions sense paràmetres"},{path:"/funcions/amb-parametres",label:"Funcions amb paràmetres"},{path:"/funcions/tipus-de-funcions",label:"Tipus de funcions"},{path:"/funcions/recursives",label:"Funcions recursives"},{path:"/funcions/cridar-des-de-main",label:"Cridar des del Main"},{path:"/funcions/resum",label:"Resum comparatiu"}]},{id:"classes",title:"Classes i Objectes",items:[{path:"/classes/introduccio",label:"Introducció a la POO"},{path:"/classes/classe-vs-objecte",label:"Classe vs Objecte"},{path:"/classes/modificadors",label:"Modificadors i Encapsulació"},{path:"/classes/constructors-this",label:"Constructors i THIS"},{path:"/classes/herencia",label:"Herència"},{path:"/classes/polimorfisme",label:"Polimorfisme"},{path:"/classes/classes-abstractes",label:"Classes Abstractes"},{path:"/classes/exemple-biblioteca",label:"Exemple: Biblioteca"}]},{id:"modularitat",title:"Modularitat i Packages",items:[{path:"/modularitat/introduccio",label:"Introducció a la Modularitat"},{path:"/modularitat/monolitic-vs-modular",label:"Monolític vs Modular"},{path:"/modularitat/packages",label:"Packages: Organització"},{path:"/modularitat/exemple-calculadora",label:"Exemple: Calculadora"}]},{id:"string-math",title:"String i Math",items:[{path:"/string-math/classe-string",label:"Classe String"},{path:"/string-math/classe-math",label:"Classe Math"},{path:"/string-math/random-vs-math-random",label:"Random vs Math.random()"}]},{id:"java-modern",title:"Java Modern",items:[{path:"/java-modern/for-each",label:"For-each"},{path:"/java-modern/operador-ternari",label:"Operador ternari"},{path:"/java-modern/var-i-altres",label:"var i altres novetats"}]},{id:"mon-professional",title:"El Món Professional",items:[{path:"/mon-professional/com-treballen-els-devs",label:"Com treballen els Devs"}]},{id:"activitats",title:"Activitats",items:[{path:"/activitats/quiz-mvc",label:"Quiz: MVC"}]},{id:"analisi-disseny",title:"Anàlisi i Disseny",items:[{path:"/analisi-disseny/diagrames-classes",label:"Diagrames de Classes"},{path:"/analisi-disseny/diagrames-sequencia",label:"Diagrames de Seqüència"},{path:"/analisi-disseny/diagrames-flux",label:"Diagrames de Flux"},{path:"/analisi-disseny/casos-dus",label:"Casos d'Ús"},{path:"/analisi-disseny/projecte-real",label:"Anatomia d'un Projecte Real"},{path:"/analisi-disseny/introduccio-mvc",label:"Introducció a MVC"}]}],sb="_overlay_acghx_1",lb="_sidebar_acghx_9",ob="_collapsed_acghx_39",cb="_sectionTitle_acghx_47",ub="_arrow_acghx_49",db="_items_acghx_51",pb="_sectionButton_acghx_65",mb="_sectionIcon_acghx_75",hb="_section_acghx_47",fb="_arrowOpen_acghx_173",xb="_itemsOpen_acghx_193",gb="_link_acghx_201",vb="_activeLink_acghx_233",jb="_overlayVisible_acghx_271",bb="_sidebarOpen_acghx_341",at={overlay:sb,sidebar:lb,collapsed:ob,sectionTitle:cb,arrow:ub,items:db,sectionButton:pb,sectionIcon:mb,section:hb,arrowOpen:fb,itemsOpen:xb,link:gb,activeLink:vb,overlayVisible:jb,sidebarOpen:bb},yb={basics:t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),t.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),arrays:t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),t.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),t.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),t.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]}),funcions:t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"12",cy:"12",r:"3"}),t.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),classes:t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),t.jsx("path",{d:"M16 3L12 7L8 3"})]}),modularitat:t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),t.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),t.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),"string-math":t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("polyline",{points:"4 7 4 4 20 4 20 7"}),t.jsx("line",{x1:"9",y1:"20",x2:"15",y2:"20"}),t.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20"})]}),"java-modern":t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),"mon-professional":t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),t.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"analisi-disseny":t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"3",y:"3",width:"6",height:"6",rx:"1"}),t.jsx("rect",{x:"15",y:"3",width:"6",height:"6",rx:"1"}),t.jsx("rect",{x:"9",y:"15",width:"6",height:"6",rx:"1"}),t.jsx("line",{x1:"6",y1:"9",x2:"6",y2:"12"}),t.jsx("line",{x1:"6",y1:"12",x2:"12",y2:"12"}),t.jsx("line",{x1:"12",y1:"12",x2:"12",y2:"15"}),t.jsx("line",{x1:"18",y1:"9",x2:"18",y2:"12"}),t.jsx("line",{x1:"18",y1:"12",x2:"12",y2:"12"})]})};function Sb({isOpen:e,collapsed:r,onClose:a,onExpand:n}){const i=Zt(),[s,l]=A.useState(()=>{const u=vl.find(m=>m.items.some(d=>i.pathname===d.path));return u?[u.id]:[vl[0].id]}),o=u=>{l(m=>m.includes(u)?m.filter(d=>d!==u):[...m,u])},c=[at.sidebar,e&&at.sidebarOpen,r&&at.collapsed].filter(Boolean).join(" ");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:`${at.overlay} ${e?at.overlayVisible:""}`,onClick:a}),t.jsx("nav",{className:c,onMouseEnter:r?n:void 0,children:vl.map(u=>{const m=s.includes(u.id),d=yb[u.id];return t.jsxs("div",{className:at.section,children:[t.jsxs("button",{className:at.sectionButton,onClick:()=>o(u.id),title:r?u.title:void 0,children:[t.jsx("span",{className:at.sectionIcon,children:d}),t.jsx("span",{className:at.sectionTitle,children:u.title}),t.jsx("span",{className:`${at.arrow} ${m?at.arrowOpen:""}`,children:t.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",children:t.jsx("path",{d:"M3 1L7 5L3 9"})})})]}),t.jsx("div",{className:`${at.items} ${m?at.itemsOpen:""}`,children:u.items.map(f=>t.jsx(bh,{to:f.path,className:({isActive:y})=>`${at.link} ${y?at.activeLink:""}`,onClick:a,children:f.label},f.path))})]},u.id)})})]})}function wb(){return t.jsx("footer",{style:{textAlign:"center",padding:"20px",color:"#718096",fontSize:"0.85em",borderTop:"1px solid #e2e8f0",marginTop:"40px"},children:"Recurs didàctic creat per a l'assignatura de Programació - La Salle Tarragona"})}function Cb(){const{pathname:e}=Zt();A.useEffect(()=>{window.scrollTo(0,0)},[e])}const Eb="_layout_e2a8v_1",Ab="_body_e2a8v_13",Rb="_content_e2a8v_23",Lb="_contentInner_e2a8v_37",Si={layout:Eb,body:Ab,content:Rb,contentInner:Lb};function Mb(){const[e,r]=A.useState(!1),[a,n]=A.useState(!1);return Cb(),t.jsxs("div",{className:Si.layout,children:[t.jsx(ib,{onToggleSidebar:()=>r(!e),onCollapseSidebar:()=>n(!a),collapsed:a}),t.jsxs("div",{className:Si.body,children:[t.jsx(Sb,{isOpen:e,collapsed:a,onClose:()=>r(!1),onExpand:()=>n(!1)}),t.jsx("main",{className:Si.content,children:t.jsxs("div",{className:Si.contentInner,children:[t.jsx(hj,{}),t.jsx(wb,{})]})})]})]})}const kb="_hero_ym8fg_1",Nb="_heroTitle_ym8fg_13",Tb="_heroAccent_ym8fg_29",Pb="_heroSubtitle_ym8fg_41",_b="_sectionsGrid_ym8fg_53",qb="_sectionCard_ym8fg_65",Ob="_cardIcon_ym8fg_101",Ib="_cardTitle_ym8fg_125",Db="_cardDescription_ym8fg_139",Fb="_cardTopics_ym8fg_151",zb="_topic_ym8fg_165",_t={hero:kb,heroTitle:Nb,heroAccent:Tb,heroSubtitle:Pb,sectionsGrid:_b,sectionCard:qb,cardIcon:Ob,cardTitle:Ib,cardDescription:Db,cardTopics:Fb,topic:zb},Bb={basics:t.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),t.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),arrays:t.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),t.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),t.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),t.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]}),funcions:t.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"12",cy:"12",r:"3"}),t.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),classes:t.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),t.jsx("path",{d:"M16 3L12 7L8 3"})]}),modularitat:t.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),t.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),t.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),"string-math":t.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("polyline",{points:"4 7 4 4 20 4 20 7"}),t.jsx("line",{x1:"9",y1:"20",x2:"15",y2:"20"}),t.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20"})]}),"java-modern":t.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),"analisi-disseny":t.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"3",y:"3",width:"6",height:"6",rx:"1"}),t.jsx("rect",{x:"15",y:"3",width:"6",height:"6",rx:"1"}),t.jsx("rect",{x:"9",y:"15",width:"6",height:"6",rx:"1"}),t.jsx("line",{x1:"6",y1:"9",x2:"6",y2:"12"}),t.jsx("line",{x1:"6",y1:"12",x2:"12",y2:"12"}),t.jsx("line",{x1:"12",y1:"12",x2:"12",y2:"15"}),t.jsx("line",{x1:"18",y1:"9",x2:"18",y2:"12"}),t.jsx("line",{x1:"18",y1:"12",x2:"12",y2:"12"})]})},Ub=[{id:"basics",title:"Basics de Java",description:"Fonaments del llenguatge: tipus de dades, operadors, condicionals, bucles i sintaxi bàsica.",path:"/basics/tipus-de-dades",topics:["Tipus de dades","Operadors","if/else","Bucles","Switch"]},{id:"arrays",title:"Arrays",description:"Arrays unidimensionals i bidimensionals amb exemples interactius.",path:"/arrays/arrays-1d",topics:["Arrays 1D","Matrius 2D"]},{id:"funcions",title:"Funcions",description:"Funcions amb i sense paràmetres, tipus, recursivitat i com cridar-les.",path:"/funcions/sense-parametres",topics:["Sense paràmetres","Amb paràmetres","Recursives","Tipus"]},{id:"classes",title:"Classes i Objectes",description:"POO: classes, objectes, encapsulació, constructors, herència.",path:"/classes/introduccio",topics:["Classes","Objectes","Constructors","Herència"]},{id:"modularitat",title:"Modularitat i Packages",description:"Organització del codi en múltiples classes i packages. Aplica tot el que s'ha après.",path:"/modularitat/introduccio",topics:["Monolític vs Modular","Packages","Imports"]},{id:"string-math",title:"String i Math",description:"Classes String i Math: tots els mètodes útils, Random vs Math.random().",path:"/string-math/classe-string",topics:["String","Math","Random"]},{id:"java-modern",title:"Java Modern",description:"Sintaxi moderna: for-each, operador ternari, var i altres novetats.",path:"/java-modern/for-each",topics:["for-each","Ternari","var"]},{id:"analisi-disseny",title:"Anàlisi i Disseny",description:"Diagrames UML, anàlisi de projectes reals i introducció a MVC.",path:"/analisi-disseny/diagrames-classes",topics:["UML","Projecte Real","MVC"]}];function $b(){return t.jsxs("div",{children:[t.jsxs("div",{className:_t.hero,children:[t.jsxs("h1",{className:_t.heroTitle,children:["Programació ",t.jsx("span",{className:_t.heroAccent,children:"Java"})]}),t.jsx("p",{className:_t.heroSubtitle,children:"Recurs visual interactiu per a l'aprenentatge de programació - DAM"})]}),t.jsx("div",{className:_t.sectionsGrid,children:Ub.map(e=>t.jsxs(Ps,{to:e.path,className:_t.sectionCard,children:[t.jsx("div",{className:_t.cardIcon,children:Bb[e.id]}),t.jsx("h2",{className:_t.cardTitle,children:e.title}),t.jsx("p",{className:_t.cardDescription,children:e.description}),t.jsx("div",{className:_t.cardTopics,children:e.topics.map(r=>t.jsx("span",{className:_t.topic,children:r},r))})]},e.path))})]})}const Gb="_header_1pa55_1",Vb="_title_1pa55_9",Hb="_accentLine_1pa55_29",jl={header:Gb,title:Vb,accentLine:Hb};function w({title:e}){return t.jsxs("div",{className:jl.header,children:[t.jsx("h2",{className:jl.title,children:e}),t.jsx("div",{className:jl.accentLine})]})}function Sh(e){var r,a,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(r=0;r<i;r++)e[r]&&(a=Sh(e[r]))&&(n&&(n+=" "),n+=a)}else for(a in e)e[a]&&(n&&(n+=" "),n+=a);return n}function wh(){for(var e,r,a=0,n="",i=arguments.length;a<i;a++)(e=arguments[a])&&(r=Sh(e))&&(n&&(n+=" "),n+=r);return n}var Qb=Object.create,_s=Object.defineProperty,Wb=Object.defineProperties,Jb=Object.getOwnPropertyDescriptor,Kb=Object.getOwnPropertyDescriptors,Ch=Object.getOwnPropertyNames,ps=Object.getOwnPropertySymbols,Yb=Object.getPrototypeOf,Rc=Object.prototype.hasOwnProperty,Eh=Object.prototype.propertyIsEnumerable,Ed=(e,r,a)=>r in e?_s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,Jt=(e,r)=>{for(var a in r||(r={}))Rc.call(r,a)&&Ed(e,a,r[a]);if(ps)for(var a of ps(r))Eh.call(r,a)&&Ed(e,a,r[a]);return e},qs=(e,r)=>Wb(e,Kb(r)),Ah=(e,r)=>{var a={};for(var n in e)Rc.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&ps)for(var n of ps(e))r.indexOf(n)<0&&Eh.call(e,n)&&(a[n]=e[n]);return a},Xb=(e,r)=>function(){return r||(0,e[Ch(e)[0]])((r={exports:{}}).exports,r),r.exports},Zb=(e,r)=>{for(var a in r)_s(e,a,{get:r[a],enumerable:!0})},ey=(e,r,a,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of Ch(r))!Rc.call(e,i)&&i!==a&&_s(e,i,{get:()=>r[i],enumerable:!(n=Jb(r,i))||n.enumerable});return e},ty=(e,r,a)=>(a=e!=null?Qb(Yb(e)):{},ey(!e||!e.__esModule?_s(a,"default",{value:e,enumerable:!0}):a,e)),ry=Xb({"../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(e,r){var a=function(){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,s={},l={util:{encode:function g(b){return b instanceof o?new o(b.type,g(b.content),b.alias):Array.isArray(b)?b.map(g):b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++i}),g.__id},clone:function g(b,S){S=S||{};var h,p;switch(l.util.type(b)){case"Object":if(p=l.util.objId(b),S[p])return S[p];h={},S[p]=h;for(var v in b)b.hasOwnProperty(v)&&(h[v]=g(b[v],S));return h;case"Array":return p=l.util.objId(b),S[p]?S[p]:(h=[],S[p]=h,b.forEach(function(L,k){h[k]=g(L,S)}),h);default:return b}},getLanguage:function(g){for(;g;){var b=n.exec(g.className);if(b)return b[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,b){g.className=g.className.replace(RegExp(n,"gi"),""),g.classList.add("language-"+b)},isActive:function(g,b,S){for(var h="no-"+b;g;){var p=g.classList;if(p.contains(b))return!0;if(p.contains(h))return!1;g=g.parentElement}return!!S}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(g,b){var S=l.util.clone(l.languages[g]);for(var h in b)S[h]=b[h];return S},insertBefore:function(g,b,S,h){h=h||l.languages;var p=h[g],v={};for(var L in p)if(p.hasOwnProperty(L)){if(L==b)for(var k in S)S.hasOwnProperty(k)&&(v[k]=S[k]);S.hasOwnProperty(L)||(v[L]=p[L])}var P=h[g];return h[g]=v,l.languages.DFS(l.languages,function(_,E){E===P&&_!=g&&(this[_]=v)}),v},DFS:function g(b,S,h,p){p=p||{};var v=l.util.objId;for(var L in b)if(b.hasOwnProperty(L)){S.call(b,L,b[L],h||L);var k=b[L],P=l.util.type(k);P==="Object"&&!p[v(k)]?(p[v(k)]=!0,g(k,S,null,p)):P==="Array"&&!p[v(k)]&&(p[v(k)]=!0,g(k,S,L,p))}}},plugins:{},highlight:function(g,b,S){var h={code:g,grammar:b,language:S};if(l.hooks.run("before-tokenize",h),!h.grammar)throw new Error('The language "'+h.language+'" has no grammar.');return h.tokens=l.tokenize(h.code,h.grammar),l.hooks.run("after-tokenize",h),o.stringify(l.util.encode(h.tokens),h.language)},tokenize:function(g,b){var S=b.rest;if(S){for(var h in S)b[h]=S[h];delete b.rest}var p=new m;return d(p,p.head,g),u(g,p,b,p.head,0),y(p)},hooks:{all:{},add:function(g,b){var S=l.hooks.all;S[g]=S[g]||[],S[g].push(b)},run:function(g,b){var S=l.hooks.all[g];if(!(!S||!S.length))for(var h=0,p;p=S[h++];)p(b)}},Token:o};function o(g,b,S,h){this.type=g,this.content=b,this.alias=S,this.length=(h||"").length|0}o.stringify=function g(b,S){if(typeof b=="string")return b;if(Array.isArray(b)){var h="";return b.forEach(function(P){h+=g(P,S)}),h}var p={type:b.type,content:g(b.content,S),tag:"span",classes:["token",b.type],attributes:{},language:S},v=b.alias;v&&(Array.isArray(v)?Array.prototype.push.apply(p.classes,v):p.classes.push(v)),l.hooks.run("wrap",p);var L="";for(var k in p.attributes)L+=" "+k+'="'+(p.attributes[k]||"").replace(/"/g,"&quot;")+'"';return"<"+p.tag+' class="'+p.classes.join(" ")+'"'+L+">"+p.content+"</"+p.tag+">"};function c(g,b,S,h){g.lastIndex=b;var p=g.exec(S);if(p&&h&&p[1]){var v=p[1].length;p.index+=v,p[0]=p[0].slice(v)}return p}function u(g,b,S,h,p,v){for(var L in S)if(!(!S.hasOwnProperty(L)||!S[L])){var k=S[L];k=Array.isArray(k)?k:[k];for(var P=0;P<k.length;++P){if(v&&v.cause==L+","+P)return;var _=k[P],E=_.inside,V=!!_.lookbehind,F=!!_.greedy,le=_.alias;if(F&&!_.pattern.global){var ee=_.pattern.toString().match(/[imsuy]*$/)[0];_.pattern=RegExp(_.pattern.source,ee+"g")}for(var ve=_.pattern||_,te=h.next,q=p;te!==b.tail&&!(v&&q>=v.reach);q+=te.value.length,te=te.next){var G=te.value;if(b.length>g.length)return;if(!(G instanceof o)){var re=1,O;if(F){if(O=c(ve,q,g,V),!O||O.index>=g.length)break;var ue=O.index,B=O.index+O[0].length,U=q;for(U+=te.value.length;ue>=U;)te=te.next,U+=te.value.length;if(U-=te.value.length,q=U,te.value instanceof o)continue;for(var ae=te;ae!==b.tail&&(U<B||typeof ae.value=="string");ae=ae.next)re++,U+=ae.value.length;re--,G=g.slice(q,U),O.index-=q}else if(O=c(ve,0,G,V),!O)continue;var ue=O.index,ye=O[0],Re=G.slice(0,ue),Fe=G.slice(ue+ye.length),we=q+G.length;v&&we>v.reach&&(v.reach=we);var Ve=te.prev;Re&&(Ve=d(b,Ve,Re),q+=Re.length),f(b,Ve,re);var la=new o(L,E?l.tokenize(ye,E):ye,le,ye);if(te=d(b,Ve,la),Fe&&d(b,te,Fe),re>1){var Tt={cause:L+","+P,reach:we};u(g,b,S,te.prev,q,Tt),v&&Tt.reach>v.reach&&(v.reach=Tt.reach)}}}}}}function m(){var g={value:null,prev:null,next:null},b={value:null,prev:g,next:null};g.next=b,this.head=g,this.tail=b,this.length=0}function d(g,b,S){var h=b.next,p={value:S,prev:b,next:h};return b.next=p,h.prev=p,g.length++,p}function f(g,b,S){for(var h=b.next,p=0;p<S&&h!==g.tail;p++)h=h.next;b.next=h,h.prev=b,g.length-=p}function y(g){for(var b=[],S=g.head.next;S!==g.tail;)b.push(S.value),S=S.next;return b}return l}();r.exports=a,a.default=a}}),T=ty(ry());T.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},T.languages.markup.tag.inside["attr-value"].inside.entity=T.languages.markup.entity,T.languages.markup.doctype.inside["internal-subset"].inside=T.languages.markup,T.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(T.languages.markup.tag,"addInlined",{value:function(e,n){var a={},a=(a["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:T.languages[n]},a.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}}),n=(a["language-"+n]={pattern:/[\s\S]+/,inside:T.languages[n]},{});n[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:a},T.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(T.languages.markup.tag,"addAttribute",{value:function(e,r){T.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:T.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),T.languages.html=T.languages.markup,T.languages.mathml=T.languages.markup,T.languages.svg=T.languages.markup,T.languages.xml=T.languages.extend("markup",{}),T.languages.ssml=T.languages.xml,T.languages.atom=T.languages.xml,T.languages.rss=T.languages.xml,function(e){var r={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},a=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,n="(?:[^\\\\-]|"+a.source+")",n=RegExp(n+"-"+n),i={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};e.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:n,inside:{escape:a,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":r,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:a}},"special-escape":r,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":i}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:a,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":i}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}}(T),T.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},T.languages.javascript=T.languages.extend("clike",{"class-name":[T.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),T.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,T.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:T.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:T.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:T.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:T.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:T.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),T.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:T.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),T.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),T.languages.markup&&(T.languages.markup.tag.addInlined("script","javascript"),T.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),T.languages.js=T.languages.javascript,T.languages.actionscript=T.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),T.languages.actionscript["class-name"].alias="function",delete T.languages.actionscript.parameter,delete T.languages.actionscript["literal-property"],T.languages.markup&&T.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:T.languages.markup}}),function(e){var r=/#(?!\{).+/,a={pattern:/#\{[^}]+\}/,alias:"variable"};e.languages.coffeescript=e.languages.extend("javascript",{comment:r,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:a}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),e.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:r,interpolation:a}}}),e.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:e.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:a}}]}),e.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete e.languages.coffeescript["template-string"],e.languages.coffee=e.languages.coffeescript}(T),function(e){var r=e.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(r,"addSupport",{value:function(a,n){(a=typeof a=="string"?[a]:a).forEach(function(i){var s=function(d){d.inside||(d.inside={}),d.inside.rest=n},l="doc-comment";if(o=e.languages[i]){var o,c=o[l];if((c=c||(o=e.languages.insertBefore(i,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[l])instanceof RegExp&&(c=o[l]={pattern:c}),Array.isArray(c))for(var u=0,m=c.length;u<m;u++)c[u]instanceof RegExp&&(c[u]={pattern:c[u]}),s(c[u]);else s(c)}})}}),r.addSupport(["java","javascript","php"],r)}(T),function(e){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,r=(e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css,e.languages.markup);r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(T),function(e){var r=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,r=(e.languages.css.selector={pattern:e.languages.css.selector.pattern,lookbehind:!0,inside:r={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+r.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[r,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},e.languages.css.atrule.inside["selector-function-argument"].inside=r,e.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}}),{pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0}),a={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};e.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:r,number:a,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:r,number:a})}(T),function(e){var r=/[*&][^\s[\]{},]+/,a=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,n="(?:"+a.source+"(?:[ 	]+"+r.source+")?|"+r.source+"(?:[ 	]+"+a.source+")?)",i=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),s=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function l(o,c){c=(c||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return n}).replace(/<<value>>/g,function(){return o});return RegExp(u,c)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return n})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return n}).replace(/<<key>>/g,function(){return"(?:"+i+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:l(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:l(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:l(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:l(s),lookbehind:!0,greedy:!0},number:{pattern:l(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:a,important:r,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml}(T),function(e){var r=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function a(u){return u=u.replace(/<inner>/g,function(){return r}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+u+")")}var n=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,i=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return n}),s=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,l=(e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+i+s+"(?:"+i+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+i+s+")(?:"+i+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(n),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+i+")"+s+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+i+"$"),inside:{"table-header":{pattern:RegExp(n),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:a(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:a(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:a(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:a(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(u){["url","bold","italic","strike","code-snippet"].forEach(function(m){u!==m&&(e.languages.markdown[u].inside.content.inside[m]=e.languages.markdown[m])})}),e.hooks.add("after-tokenize",function(u){u.language!=="markdown"&&u.language!=="md"||function m(d){if(d&&typeof d!="string")for(var f=0,y=d.length;f<y;f++){var g,b=d[f];b.type!=="code"?m(b.content):(g=b.content[1],b=b.content[3],g&&b&&g.type==="code-language"&&b.type==="code-block"&&typeof g.content=="string"&&(g=g.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),g="language-"+(g=(/[a-z][\w-]*/i.exec(g)||[""])[0].toLowerCase()),b.alias?typeof b.alias=="string"?b.alias=[b.alias,g]:b.alias.push(g):b.alias=[g]))}}(u.tokens)}),e.hooks.add("wrap",function(u){if(u.type==="code-block"){for(var m="",d=0,f=u.classes.length;d<f;d++){var y=u.classes[d],y=/language-(.+)/.exec(y);if(y){m=y[1];break}}var g,b=e.languages[m];b?u.content=e.highlight(function(S){return S=S.replace(l,""),S=S.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(h,p){var v;return(p=p.toLowerCase())[0]==="#"?(v=p[1]==="x"?parseInt(p.slice(2),16):Number(p.slice(1)),c(v)):o[p]||h})}(u.content),b,m):m&&m!=="none"&&e.plugins.autoloader&&(g="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random()),u.attributes.id=g,e.plugins.autoloader.loadLanguages(m,function(){var S=document.getElementById(g);S&&(S.innerHTML=e.highlight(S.textContent,e.languages[m],m))}))}}),RegExp(e.languages.markup.tag.pattern.source,"gi")),o={amp:"&",lt:"<",gt:">",quot:'"'},c=String.fromCodePoint||String.fromCharCode;e.languages.md=e.languages.markdown}(T),T.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:T.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},T.hooks.add("after-tokenize",function(e){if(e.language==="graphql")for(var r=e.tokens.filter(function(g){return typeof g!="string"&&g.type!=="comment"&&g.type!=="scalar"}),a=0;a<r.length;){var n=r[a++];if(n.type==="keyword"&&n.content==="mutation"){var i=[];if(d(["definition-mutation","punctuation"])&&m(1).content==="("){a+=2;var s=f(/^\($/,/^\)$/);if(s===-1)continue;for(;a<s;a++){var l=m(0);l.type==="variable"&&(y(l,"variable-input"),i.push(l.content))}a=s+1}if(d(["punctuation","property-query"])&&m(0).content==="{"&&(a++,y(m(0),"property-mutation"),0<i.length)){var o=f(/^\{$/,/^\}$/);if(o!==-1)for(var c=a;c<o;c++){var u=r[c];u.type==="variable"&&0<=i.indexOf(u.content)&&y(u,"variable-input")}}}}function m(g){return r[a+g]}function d(g,b){b=b||0;for(var S=0;S<g.length;S++){var h=m(S+b);if(!h||h.type!==g[S])return}return 1}function f(g,b){for(var S=1,h=a;h<r.length;h++){var p=r[h],v=p.content;if(p.type==="punctuation"&&typeof v=="string"){if(g.test(v))S++;else if(b.test(v)&&--S===0)return h}}return-1}function y(g,b){var S=g.alias;S?Array.isArray(S)||(g.alias=S=[S]):g.alias=S=[],S.push(b)}}),T.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(e){var r=e.languages.javascript["template-string"],a=r.pattern.source,n=r.inside.interpolation,i=n.inside["interpolation-punctuation"],s=n.pattern.source;function l(d,f){if(e.languages[d])return{pattern:RegExp("((?:"+f+")\\s*)"+a),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:d}}}}function o(d,f,y){return d={code:d,grammar:f,language:y},e.hooks.run("before-tokenize",d),d.tokens=e.tokenize(d.code,d.grammar),e.hooks.run("after-tokenize",d),d.tokens}function c(d,f,y){var S=e.tokenize(d,{interpolation:{pattern:RegExp(s),lookbehind:!0}}),g=0,b={},S=o(S.map(function(p){if(typeof p=="string")return p;for(var v,L,p=p.content;d.indexOf((L=g++,v="___"+y.toUpperCase()+"_"+L+"___"))!==-1;);return b[v]=p,v}).join(""),f,y),h=Object.keys(b);return g=0,function p(v){for(var L=0;L<v.length;L++){if(g>=h.length)return;var k,P,_,E,V,F,le,ee=v[L];typeof ee=="string"||typeof ee.content=="string"?(k=h[g],(le=(F=typeof ee=="string"?ee:ee.content).indexOf(k))!==-1&&(++g,P=F.substring(0,le),V=b[k],_=void 0,(E={})["interpolation-punctuation"]=i,(E=e.tokenize(V,E)).length===3&&((_=[1,1]).push.apply(_,o(E[1],e.languages.javascript,"javascript")),E.splice.apply(E,_)),_=new e.Token("interpolation",E,n.alias,V),E=F.substring(le+k.length),V=[],P&&V.push(P),V.push(_),E&&(p(F=[E]),V.push.apply(V,F)),typeof ee=="string"?(v.splice.apply(v,[L,1].concat(V)),L+=V.length-1):ee.content=V)):(le=ee.content,Array.isArray(le)?p(le):p([le]))}}(S),new e.Token(y,S,"language-"+y,d)}e.languages.javascript["template-string"]=[l("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),l("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),l("svg",/\bsvg/.source),l("markdown",/\b(?:markdown|md)/.source),l("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),l("sql",/\bsql/.source),r].filter(Boolean);var u={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function m(d){return typeof d=="string"?d:Array.isArray(d)?d.map(m).join(""):m(d.content)}e.hooks.add("after-tokenize",function(d){d.language in u&&function f(y){for(var g=0,b=y.length;g<b;g++){var S,h,p,v=y[g];typeof v!="string"&&(S=v.content,Array.isArray(S)?v.type==="template-string"?(v=S[1],S.length===3&&typeof v!="string"&&v.type==="embedded-code"&&(h=m(v),v=v.alias,v=Array.isArray(v)?v[0]:v,p=e.languages[v])&&(S[1]=c(h,p,v))):f(S):typeof S!="string"&&f([S]))}}(d.tokens)})}(T),function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var r=e.languages.extend("typescript",{});delete r["class-name"],e.languages.typescript["class-name"].inside=r,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:r}}}}),e.languages.ts=e.languages.typescript}(T),function(e){var r=e.languages.javascript,a=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,n="(@(?:arg|argument|param|property)\\s+(?:"+a+"\\s+)?)";e.languages.jsdoc=e.languages.extend("javadoclike",{parameter:{pattern:RegExp(n+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),e.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(n+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:r,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return a})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+a),lookbehind:!0,inside:{string:r.string,number:r.number,boolean:r.boolean,keyword:e.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:r,alias:"language-javascript"}}}}),e.languages.javadoclike.addSupport("javascript",e.languages.jsdoc)}(T),function(e){e.languages.flow=e.languages.extend("javascript",{}),e.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:"class-name"}]}),e.languages.flow["function-variable"].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete e.languages.flow.parameter,e.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(e.languages.flow.keyword)||(e.languages.flow.keyword=[e.languages.flow.keyword]),e.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})}(T),T.languages.n4js=T.languages.extend("javascript",{keyword:/\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),T.languages.insertBefore("n4js","constant",{annotation:{pattern:/@+\w+/,alias:"operator"}}),T.languages.n4jsd=T.languages.n4js,function(e){function r(l,o){return RegExp(l.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),o)}e.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+e.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),e.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+e.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),e.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),e.languages.insertBefore("javascript","keyword",{imports:{pattern:r(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:e.languages.javascript},exports:{pattern:r(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:e.languages.javascript}}),e.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),e.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),e.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:r(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var a=["function","function-variable","method","method-variable","property-access"],n=0;n<a.length;n++){var s=a[n],i=e.languages.javascript[s],s=(i=e.util.type(i)==="RegExp"?e.languages.javascript[s]={pattern:i}:i).inside||{};(i.inside=s)["maybe-class-name"]=/^[A-Z][\s\S]*/}}(T),function(e){var r=e.util.clone(e.languages.javascript),a=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,n=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function s(c,u){return c=c.replace(/<S>/g,function(){return a}).replace(/<BRACES>/g,function(){return n}).replace(/<SPREAD>/g,function(){return i}),RegExp(c,u)}i=s(i).source,e.languages.jsx=e.languages.extend("markup",r),e.languages.jsx.tag.pattern=s(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=r.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:s(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:s(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);function l(c){for(var u=[],m=0;m<c.length;m++){var d=c[m],f=!1;typeof d!="string"&&(d.type==="tag"&&d.content[0]&&d.content[0].type==="tag"?d.content[0].content[0].content==="</"?0<u.length&&u[u.length-1].tagName===o(d.content[0].content[1])&&u.pop():d.content[d.content.length-1].content!=="/>"&&u.push({tagName:o(d.content[0].content[1]),openedBraces:0}):0<u.length&&d.type==="punctuation"&&d.content==="{"?u[u.length-1].openedBraces++:0<u.length&&0<u[u.length-1].openedBraces&&d.type==="punctuation"&&d.content==="}"?u[u.length-1].openedBraces--:f=!0),(f||typeof d=="string")&&0<u.length&&u[u.length-1].openedBraces===0&&(f=o(d),m<c.length-1&&(typeof c[m+1]=="string"||c[m+1].type==="plain-text")&&(f+=o(c[m+1]),c.splice(m+1,1)),0<m&&(typeof c[m-1]=="string"||c[m-1].type==="plain-text")&&(f=o(c[m-1])+f,c.splice(m-1,1),m--),c[m]=new e.Token("plain-text",f,null,f)),d.content&&typeof d.content!="string"&&l(d.content)}}var o=function(c){return c?typeof c=="string"?c:typeof c.content=="string"?c.content:c.content.map(o).join(""):""};e.hooks.add("after-tokenize",function(c){c.language!=="jsx"&&c.language!=="tsx"||l(c.tokens)})}(T),function(e){var r=e.util.clone(e.languages.typescript),r=(e.languages.tsx=e.languages.extend("jsx",r),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"],e.languages.tsx.tag);r.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+r.pattern.source+")",r.pattern.flags),r.lookbehind=!0}(T),T.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(/(^|[^"#])/.source+"(?:"+/"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source+"|"+/"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source+")"+/(?!["#])/.source),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(/(^|[^"#])(#+)/.source+"(?:"+/"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source+"|"+/"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source+")\\2"),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp(/#/.source+"(?:"+/(?:elseif|if)\b/.source+"(?:[ 	]*"+/(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source+")+|"+/(?:else|endif)\b/.source+")"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},T.languages.swift["string-literal"].forEach(function(e){e.inside.interpolation.inside=T.languages.swift}),function(e){e.languages.kotlin=e.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete e.languages.kotlin["class-name"];var r={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:e.languages.kotlin}};e.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:r},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:r},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete e.languages.kotlin.string,e.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),e.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),e.languages.kt=e.languages.kotlin,e.languages.kts=e.languages.kotlin}(T),T.languages.c=T.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),T.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),T.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},T.languages.c.string],char:T.languages.c.char,comment:T.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:T.languages.c}}}}),T.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete T.languages.c.boolean,T.languages.objectivec=T.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete T.languages.objectivec["class-name"],T.languages.objc=T.languages.objectivec,T.languages.reason=T.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),T.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete T.languages.reason.function,function(e){for(var r=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,a=0;a<2;a++)r=r.replace(/<self>/g,function(){return r});r=r.replace(/<self>/g,function(){return/[^\s\S]/.source}),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+r),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string}(T),T.languages.go=T.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),T.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete T.languages.go["class-name"],function(e){var r=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,a=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return r.source});e.languages.cpp=e.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return r.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:r,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return a})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),e.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e.languages.cpp}}}}),e.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),e.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend("cpp",{})}}),e.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp["base-clause"])}(T),T.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},T.languages.python["string-interpolation"].inside.interpolation.inside.rest=T.languages.python,T.languages.py=T.languages.python,T.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},T.languages.webmanifest=T.languages.json;var ay={};Zb(ay,{dracula:()=>iy,duotoneDark:()=>ly,duotoneLight:()=>cy,github:()=>dy,gruvboxMaterialDark:()=>zy,gruvboxMaterialLight:()=>Uy,jettwaveDark:()=>Ty,jettwaveLight:()=>_y,nightOwl:()=>my,nightOwlLight:()=>fy,oceanicNext:()=>gy,okaidia:()=>jy,oneDark:()=>Oy,oneLight:()=>Dy,palenight:()=>yy,shadesOfPurple:()=>wy,synthwave84:()=>Ey,ultramin:()=>Ry,vsDark:()=>Rh,vsLight:()=>ky});var ny={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},iy=ny,sy={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},ly=sy,oy={plain:{backgroundColor:"#faf8f5",color:"#728fcb"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#b6ad9a"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#063289"}},{types:["property","function"],style:{color:"#b29762"}},{types:["tag-id","selector","atrule-id"],style:{color:"#2d2006"}},{types:["attr-name"],style:{color:"#896724"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule"],style:{color:"#728fcb"}},{types:["placeholder","variable"],style:{color:"#93abdc"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#896724"}}]},cy=oy,uy={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},dy=uy,py={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]},my=py,hy={plain:{color:"#403f53",backgroundColor:"#FBFBFB"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(72, 118, 214)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(152, 159, 177)",fontStyle:"italic"}},{types:["string","builtin","char","constant","url"],style:{color:"rgb(72, 118, 214)"}},{types:["variable"],style:{color:"rgb(201, 103, 101)"}},{types:["number"],style:{color:"rgb(170, 9, 130)"}},{types:["punctuation"],style:{color:"rgb(153, 76, 195)"}},{types:["function","selector","doctype"],style:{color:"rgb(153, 76, 195)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(17, 17, 17)"}},{types:["tag"],style:{color:"rgb(153, 76, 195)"}},{types:["operator","property","keyword","namespace"],style:{color:"rgb(12, 150, 155)"}},{types:["boolean"],style:{color:"rgb(188, 84, 84)"}}]},fy=hy,ht={char:"#D8DEE9",comment:"#999999",keyword:"#c5a5c5",primitive:"#5a9bcf",string:"#8dc891",variable:"#d7deea",boolean:"#ff8b50",tag:"#fc929e",function:"#79b6f2",className:"#FAC863"},xy={plain:{backgroundColor:"#282c34",color:"#ffffff"},styles:[{types:["attr-name"],style:{color:ht.keyword}},{types:["attr-value"],style:{color:ht.string}},{types:["comment","block-comment","prolog","doctype","cdata","shebang"],style:{color:ht.comment}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:ht.primitive}},{types:["boolean"],style:{color:ht.boolean}},{types:["tag"],style:{color:ht.tag}},{types:["string"],style:{color:ht.string}},{types:["punctuation"],style:{color:ht.string}},{types:["selector","char","builtin","inserted"],style:{color:ht.char}},{types:["function"],style:{color:ht.function}},{types:["operator","entity","url","variable"],style:{color:ht.variable}},{types:["keyword"],style:{color:ht.keyword}},{types:["atrule","class-name"],style:{color:ht.className}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}}]},gy=xy,vy={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"#f92672",fontStyle:"italic"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"#8292a2",fontStyle:"italic"}},{types:["string","url"],style:{color:"#a6e22e"}},{types:["variable"],style:{color:"#f8f8f2"}},{types:["number"],style:{color:"#ae81ff"}},{types:["builtin","char","constant","function","class-name"],style:{color:"#e6db74"}},{types:["punctuation"],style:{color:"#f8f8f2"}},{types:["selector","doctype"],style:{color:"#a6e22e",fontStyle:"italic"}},{types:["tag","operator","keyword"],style:{color:"#66d9ef"}},{types:["boolean"],style:{color:"#ae81ff"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)",opacity:.7}},{types:["tag","property"],style:{color:"#f92672"}},{types:["attr-name"],style:{color:"#a6e22e !important"}},{types:["doctype"],style:{color:"#8292a2"}},{types:["rule"],style:{color:"#e6db74"}}]},jy=vy,by={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},yy=by,Sy={plain:{color:"#9EFEFF",backgroundColor:"#2D2A55"},styles:[{types:["changed"],style:{color:"rgb(255, 238, 128)"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)"}},{types:["comment"],style:{color:"rgb(179, 98, 255)",fontStyle:"italic"}},{types:["punctuation"],style:{color:"rgb(255, 255, 255)"}},{types:["constant"],style:{color:"rgb(255, 98, 140)"}},{types:["string","url"],style:{color:"rgb(165, 255, 144)"}},{types:["variable"],style:{color:"rgb(255, 238, 128)"}},{types:["number","boolean"],style:{color:"rgb(255, 98, 140)"}},{types:["attr-name"],style:{color:"rgb(255, 180, 84)"}},{types:["keyword","operator","property","namespace","tag","selector","doctype"],style:{color:"rgb(255, 157, 0)"}},{types:["builtin","char","constant","function","class-name"],style:{color:"rgb(250, 208, 0)"}}]},wy=Sy,Cy={plain:{backgroundColor:"linear-gradient(to bottom, #2a2139 75%, #34294f)",backgroundImage:"#34294f",color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#495495",fontStyle:"italic"}},{types:["punctuation"],style:{color:"#ccc"}},{types:["tag","attr-name","namespace","number","unit","hexcode","deleted"],style:{color:"#e2777a"}},{types:["property","selector"],style:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"}},{types:["function-name"],style:{color:"#6196cc"}},{types:["boolean","selector-id","function"],style:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"}},{types:["class-name","maybe-class-name","builtin"],style:{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"}},{types:["constant","symbol"],style:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"}},{types:["important","atrule","keyword","selector-class"],style:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"}},{types:["string","char","attr-value","regex","variable"],style:{color:"#f87c32"}},{types:["parameter"],style:{fontStyle:"italic"}},{types:["entity","url"],style:{color:"#67cdcc"}},{types:["operator"],style:{color:"ffffffee"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["inserted"],style:{color:"green"}}]},Ey=Cy,Ay={plain:{color:"#282a2e",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(197, 200, 198)"}},{types:["string","number","builtin","variable"],style:{color:"rgb(150, 152, 150)"}},{types:["class-name","function","tag","attr-name"],style:{color:"rgb(40, 42, 46)"}}]},Ry=Ay,Ly={plain:{color:"#9CDCFE",backgroundColor:"#1E1E1E"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"rgb(86, 156, 214)"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"rgb(206, 145, 120)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(212, 212, 212)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(220, 220, 170)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}}]},Rh=Ly,My={plain:{color:"#000000",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(0, 128, 0)"}},{types:["builtin"],style:{color:"rgb(0, 112, 193)"}},{types:["number","variable","inserted"],style:{color:"rgb(9, 134, 88)"}},{types:["operator"],style:{color:"rgb(0, 0, 0)"}},{types:["constant","char"],style:{color:"rgb(129, 31, 63)"}},{types:["tag"],style:{color:"rgb(128, 0, 0)"}},{types:["attr-name"],style:{color:"rgb(255, 0, 0)"}},{types:["deleted","string"],style:{color:"rgb(163, 21, 21)"}},{types:["changed","punctuation"],style:{color:"rgb(4, 81, 165)"}},{types:["function","keyword"],style:{color:"rgb(0, 0, 255)"}},{types:["class-name"],style:{color:"rgb(38, 127, 153)"}}]},ky=My,Ny={plain:{color:"#f8fafc",backgroundColor:"#011627"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#569CD6"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#f8fafc"}},{types:["attr-name","variable"],style:{color:"#9CDCFE"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#cbd5e1"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#D4D4D4"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#7dd3fc"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},Ty=Ny,Py={plain:{color:"#0f172a",backgroundColor:"#f1f5f9"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#0c4a6e"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#0f172a"}},{types:["attr-name","variable"],style:{color:"#0c4a6e"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#64748b"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#475569"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#0e7490"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},_y=Py,qy={plain:{backgroundColor:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(220, 10%, 40%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(220, 14%, 71%)"}},{types:["attr-name","class-name","maybe-class-name","boolean","constant","number","atrule"],style:{color:"hsl(29, 54%, 61%)"}},{types:["keyword"],style:{color:"hsl(286, 60%, 67%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(355, 65%, 65%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value"],style:{color:"hsl(95, 38%, 62%)"}},{types:["variable","operator","function"],style:{color:"hsl(207, 82%, 66%)"}},{types:["url"],style:{color:"hsl(187, 47%, 55%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(220, 14%, 71%)"}}]},Oy=qy,Iy={plain:{backgroundColor:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(230, 4%, 64%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(230, 8%, 24%)"}},{types:["attr-name","class-name","boolean","constant","number","atrule"],style:{color:"hsl(35, 99%, 36%)"}},{types:["keyword"],style:{color:"hsl(301, 63%, 40%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(5, 74%, 59%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value","punctuation"],style:{color:"hsl(119, 34%, 47%)"}},{types:["variable","operator","function"],style:{color:"hsl(221, 87%, 60%)"}},{types:["url"],style:{color:"hsl(198, 99%, 37%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(230, 8%, 24%)"}}]},Dy=Iy,Fy={plain:{color:"#ebdbb2",backgroundColor:"#292828"},styles:[{types:["imports","class-name","maybe-class-name","constant","doctype","builtin","function"],style:{color:"#d8a657"}},{types:["property-access"],style:{color:"#7daea3"}},{types:["tag"],style:{color:"#e78a4e"}},{types:["attr-name","char","url","regex"],style:{color:"#a9b665"}},{types:["attr-value","string"],style:{color:"#89b482"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#ea6962"}},{types:["entity","number","symbol"],style:{color:"#d3869b"}}]},zy=Fy,By={plain:{color:"#654735",backgroundColor:"#f9f5d7"},styles:[{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#af2528"}},{types:["imports","class-name","maybe-class-name","constant","doctype","builtin"],style:{color:"#b4730e"}},{types:["string","attr-value"],style:{color:"#477a5b"}},{types:["property-access"],style:{color:"#266b79"}},{types:["function","attr-name","char","url"],style:{color:"#72761e"}},{types:["tag"],style:{color:"#b94c07"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["entity","number","symbol"],style:{color:"#924f79"}}]},Uy=By,$y=e=>A.useCallback(r=>{var a=r,{className:n,style:i,line:s}=a,l=Ah(a,["className","style","line"]);const o=qs(Jt({},l),{className:wh("token-line",n)});return typeof e=="object"&&"plain"in e&&(o.style=e.plain),typeof i=="object"&&(o.style=Jt(Jt({},o.style||{}),i)),o},[e]),Gy=e=>{const r=A.useCallback(({types:a,empty:n})=>{if(e!=null){{if(a.length===1&&a[0]==="plain")return n!=null?{display:"inline-block"}:void 0;if(a.length===1&&n!=null)return e[a[0]]}return Object.assign(n!=null?{display:"inline-block"}:{},...a.map(i=>e[i]))}},[e]);return A.useCallback(a=>{var n=a,{token:i,className:s,style:l}=n,o=Ah(n,["token","className","style"]);const c=qs(Jt({},o),{className:wh("token",...i.types,s),children:i.content,style:r(i)});return l!=null&&(c.style=Jt(Jt({},c.style||{}),l)),c},[r])},Vy=/\r\n|\r|\n/,Ad=e=>{e.length===0?e.push({types:["plain"],content:`
`,empty:!0}):e.length===1&&e[0].content===""&&(e[0].content=`
`,e[0].empty=!0)},Rd=(e,r)=>{const a=e.length;return a>0&&e[a-1]===r?e:e.concat(r)},Hy=e=>{const r=[[]],a=[e],n=[0],i=[e.length];let s=0,l=0,o=[];const c=[o];for(;l>-1;){for(;(s=n[l]++)<i[l];){let u,m=r[l];const f=a[l][s];if(typeof f=="string"?(m=l>0?m:["plain"],u=f):(m=Rd(m,f.type),f.alias&&(m=Rd(m,f.alias)),u=f.content),typeof u!="string"){l++,r.push(m),a.push(u),n.push(0),i.push(u.length);continue}const y=u.split(Vy),g=y.length;o.push({types:m,content:y[0]});for(let b=1;b<g;b++)Ad(o),c.push(o=[]),o.push({types:m,content:y[b]})}l--,r.pop(),a.pop(),n.pop(),i.pop()}return Ad(o),c},Ld=Hy,Qy=({prism:e,code:r,grammar:a,language:n})=>A.useMemo(()=>{if(a==null)return Ld([r]);const i={code:r,grammar:a,language:n,tokens:[]};return e.hooks.run("before-tokenize",i),i.tokens=e.tokenize(r,a),e.hooks.run("after-tokenize",i),Ld(i.tokens)},[r,a,n,e]),Wy=(e,r)=>{const{plain:a}=e,n=e.styles.reduce((i,s)=>{const{languages:l,style:o}=s;return l&&!l.includes(r)||s.types.forEach(c=>{const u=Jt(Jt({},i[c]),o);i[c]=u}),i},{});return n.root=a,n.plain=qs(Jt({},a),{backgroundColor:void 0}),n},Jy=Wy,Ky=({children:e,language:r,code:a,theme:n,prism:i})=>{const s=r.toLowerCase(),l=Jy(n,s),o=$y(l),c=Gy(l),u=i.languages[s],m=Qy({prism:i,language:s,code:a,grammar:u});return e({tokens:m,className:`prism-code language-${s}`,style:l!=null?l.root:{},getLineProps:o,getTokenProps:c})},Yy=e=>A.createElement(Ky,qs(Jt({},e),{prism:e.prism||T,theme:e.theme||Rh,code:e.code,language:e.language}));/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/const Xy="_wrapper_axajp_1",Zy="_pre_axajp_17",e0="_line_axajp_35",t0="_lineNumber_axajp_43",r0="_lineContent_axajp_61",a0="_label_axajp_69",da={wrapper:Xy,pre:Zy,line:e0,lineNumber:t0,lineContent:r0,label:a0},n0={plain:{color:"#e8eef5",backgroundColor:"#1e2837"},styles:[{types:["keyword","builtin","tag","boolean"],style:{color:"#ffd700",fontWeight:"bold"}},{types:["function","method"],style:{color:"#90cdf4"}},{types:["string","char"],style:{color:"#68d391"}},{types:["number"],style:{color:"#fc8181"}},{types:["comment"],style:{color:"#a0aec0",fontStyle:"italic"}},{types:["class-name"],style:{color:"#e5c07b"}},{types:["operator"],style:{color:"#e8eef5"}},{types:["punctuation"],style:{color:"#cbd5e0"}},{types:["annotation"],style:{color:"#ffd700"}}]};function j({code:e,language:r="java",showLineNumbers:a=!1,label:n}){return t.jsxs("div",{className:da.wrapper,children:[n&&t.jsx("div",{className:da.label,children:n}),t.jsx(Yy,{theme:n0,code:e.trim(),language:r,children:({style:i,tokens:s,getLineProps:l,getTokenProps:o})=>t.jsx("pre",{className:da.pre,style:i,children:s.map((c,u)=>t.jsxs("div",{...l({line:c}),className:da.line,children:[a&&t.jsx("span",{className:da.lineNumber,children:u+1}),t.jsx("span",{className:da.lineContent,children:c.map((m,d)=>t.jsx("span",{...o({token:m})},d))})]},u))})})]})}const i0="_box_ih0qt_1",s0="_title_ih0qt_17",l0="_info_ih0qt_31",o0="_warning_ih0qt_49",c0="_success_ih0qt_67",u0="_error_ih0qt_85",d0="_explanation_ih0qt_103",bl={box:i0,title:s0,info:l0,warning:o0,success:c0,error:u0,explanation:d0};function x({variant:e="info",title:r,children:a}){return t.jsxs("div",{className:`${bl.box} ${bl[e]}`,children:[r&&t.jsx("strong",{className:bl.title,children:r}),a]})}const p0="_tableWrapper_9u6ut_1",m0="_table_9u6ut_1",h0="_groupHeader_9u6ut_93",yl={tableWrapper:p0,table:m0,groupHeader:h0};function Z({headers:e,rows:r}){return t.jsx("div",{className:yl.tableWrapper,children:t.jsxs("table",{className:yl.table,children:[t.jsx("thead",{children:t.jsx("tr",{children:e.map((a,n)=>t.jsx("th",{children:a},n))})}),t.jsx("tbody",{children:r.map((a,n)=>a.group?t.jsx("tr",{className:yl.groupHeader,children:t.jsx("td",{colSpan:e.length,children:a.group})},n):t.jsx("tr",{children:a.cells.map((i,s)=>t.jsx("td",{children:i},s))},n))})]})})}function f0(){return t.jsxs("div",{children:[t.jsx(w,{title:"Tipus de Dades"}),t.jsx(x,{variant:"info",title:"Fonaments",children:t.jsx("p",{children:"Els tipus de dades són la base, determinen com s'emmagatzemen i manipulen els valors. Java és un llenguatge fortament tipat que distingeix entre tipus primitius (dades simples) i tipus de referència (objectes complexos), com Strings, Arrays... Veurem només els que hem après fins ara."})}),t.jsx(Z,{headers:["Nom","Paraula reservada","Sintaxi"],rows:[{group:"Primitius"},{cells:["Enter","int (32 bits)","0"]},{cells:["Flotant","float (32 bits)","3.14"]},{cells:["Flotant (double)","double (64 bits)","3.14"]},{cells:["Caràcter","char","'A'"]},{cells:["Booleà","boolean","true/false"]},{group:"Objectes"},{cells:["Cadena de text","String",'"Hola"']},{cells:["Array","tipus[]","{1, 2, 3}"]}]}),t.jsx(x,{variant:"warning",title:"Compte amb utilitzar char o String per números",children:t.jsx("p",{children:"Tot i que es permet, si el nostre objectiu és calcular, és millor utilitzar un tipus de dada dedicat als números. Si bé és cert que es poden convertir i així aconseguir els càlculs, no és una bona pràctica."})})]})}const x0="_grid_zd7lr_1",g0="_card_zd7lr_15",v0="_cardTitle_zd7lr_37",j0="_blue_zd7lr_53",b0="_good_zd7lr_81",y0="_bad_zd7lr_101",Fi={grid:x0,card:g0,cardTitle:v0,blue:j0,good:b0,bad:y0};function $({title:e,variant:r="blue",children:a}){return t.jsxs("div",{className:`${Fi.card} ${Fi[r]}`,children:[t.jsx("h3",{className:Fi.cardTitle,children:e}),a]})}function pe({children:e}){return t.jsx("div",{className:Fi.grid,children:e})}const S0="_grid_dh0in_1",w0="_card_dh0in_15",C0="_cardTitle_dh0in_41",E0="_blue_dh0in_55",A0="_yellow_dh0in_63",R0="_green_dh0in_71",L0="_pink_dh0in_79",M0="_gold_dh0in_87",zi={grid:S0,card:w0,cardTitle:C0,blue:E0,yellow:A0,green:R0,pink:L0,gold:M0};function N({title:e,variant:r="blue",children:a}){return t.jsxs("div",{className:`${zi.card} ${zi[r]}`,children:[t.jsx("h4",{className:zi.cardTitle,children:e}),a]})}function ge({children:e}){return t.jsx("div",{className:zi.grid,children:e})}function k0(){return t.jsxs("div",{children:[t.jsx(w,{title:"Operadors"}),t.jsx(x,{variant:"info",children:t.jsx("p",{children:"Els operadors són símbols que permeten realitzar càlculs i comparacions en Java. Es divideixen en diverses categories: aritmètics (suma, resta), de comparació (major, menor, igual), lògics (&&, ||, !), d'assignació (=, +=). N'hi ha més però per ara això és el principal."})}),t.jsx(Z,{headers:["Nom","Representació","Sintaxi"],rows:[{group:"Aritmètics"},{cells:["Suma","+","a + b"]},{cells:["Resta","-","a - b"]},{cells:["Multiplicació","*","a * b"]},{cells:["Divisió","/","a / b"]},{cells:["Mòdul (residu)","%","a % b"]},{cells:["Increment","++","a++ / ++a"]},{cells:["Decrement","--","a-- / --a"]},{group:"Comparació"},{cells:["Igual a","==","a == b"]},{cells:["Distint de","!=","a != b"]},{cells:["Major que",">","a > b"]},{cells:["Menor que","<","a < b"]},{cells:["Major o igual que",">=","a >= b"]},{cells:["Menor o igual que","<=","a <= b"]},{group:"Lògics"},{cells:["AND","&&","a && b"]},{cells:["OR","||","a || b"]},{cells:["NOT","!","!a"]},{group:"Assignació"},{cells:["Assignació","=","x = 5"]},{cells:["A. amb suma","+=","x += 3"]},{cells:["A. amb resta","-=","x -= 3"]},{cells:["A. amb multiplicació","*=","x *= 3"]},{cells:["A. amb divisió","/=","x /= 3"]}]}),t.jsx(w,{title:"Molt Important"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["L'operador ",t.jsx("strong",{children:"="})," serveix per assignar un valor a una variable, mentre que"," ",t.jsx("strong",{children:"=="})," s'usa per comparar si dos valors són iguals."]})}),t.jsxs(pe,{children:[t.jsxs($,{title:"Operador =",variant:"blue",children:[t.jsxs("p",{children:["Serveix per ",t.jsx("strong",{children:"assignar"})," un valor a una variable."]}),t.jsx(j,{code:"int x = 5;"})]}),t.jsxs($,{title:"Operador ==",variant:"blue",children:[t.jsxs("p",{children:["S'usa per ",t.jsx("strong",{children:"comparar"})," si dos valors són iguals."]}),t.jsx(j,{code:"if (x == 5)"})]})]}),t.jsx(x,{variant:"info",children:t.jsxs("p",{children:["En el cas de tipus primitius (int, double, boolean, char, etc.), ",t.jsx("strong",{children:"=="})," compara directament el valor."]})}),t.jsxs(x,{variant:"warning",title:"Strings i objectes",children:[t.jsxs("p",{children:["Si es tracta de String (o altres objectes), en Java no s'ha d'usar == per comparar contingut, sinó ",t.jsx("strong",{children:"equals()"})," perquè:"]}),t.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px"},children:[t.jsx("li",{children:"== compara si les dues referències apunten al mateix objecte en memòria, no si el text és el mateix."}),t.jsx("li",{children:"equals() compara el contingut dels Strings (caràcter per caràcter)."})]})]}),t.jsx(w,{title:"Operadors Lògics"}),t.jsx(x,{variant:"info",children:t.jsx("p",{children:"Tenint això en ment, anem a explicar i donar exemples:"})}),t.jsx(j,{label:"Variables d'exemple",code:`boolean a = true;
boolean b = true;
int c = 2;
int d = 2;`}),t.jsxs(ge,{children:[t.jsxs(N,{title:"AND (&&)",variant:"blue",children:[t.jsxs("p",{children:["Retorna TRUE únicament quan ",t.jsx("strong",{children:"AMBDUES"})," expressions/valors són TRUE"]}),t.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px",listStyle:"none"},children:[t.jsx("li",{children:"(a && b) → com ambdues són true, el resultat és true."}),t.jsx("li",{children:"(a && b) && (c == d) → com ambdues expressions són true, aleshores (true && true) → true."}),t.jsx("li",{children:"(a && b) && (c > d) → com l'expressió de la dreta és false, aleshores (true && false) → false."})]})]}),t.jsxs(N,{title:"OR (||)",variant:"yellow",children:[t.jsxs("p",{children:["Al contrari que el AND, retorna TRUE si ",t.jsx("strong",{children:"AL MENYS UNA"})," expressió té valor TRUE"]}),t.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px",listStyle:"none"},children:[t.jsx("li",{children:"(a || b) → com almenys una és true, el resultat és true."}),t.jsx("li",{children:"(a || false) → com a és true, el resultat és true."}),t.jsx("li",{children:"(false || false) → com cap és true, el resultat és false."}),t.jsx("li",{children:"(c == d || c > d) → (true || false) → true."})]})]}),t.jsx(N,{title:"NOT (!)",variant:"pink",children:t.jsx("p",{children:"Inverteix el valor d'una expressió booleana."})})]})]})}function N0(){return t.jsxs("div",{children:[t.jsx(w,{title:"Sintaxi de Java"}),t.jsx(x,{variant:"info",children:t.jsx("p",{children:"La sintaxi de Java és estructurada i orientada a objectes, heretada en gran part de C++. A continuació estan les estructures fonamentals del llenguatge: condicionals i bucles i, juntament amb la seva respectiva sintaxi per escriure codi clar i organitzat."})}),t.jsx(Z,{headers:["Nom","Paraula reservada","Sintaxi"],rows:[{cells:["Variable","tipus","tipus variable = valor"]},{cells:["Constant","final","final tipus constant = valor"]},{cells:["Condicional if","if","if (condició) { }"]},{cells:["Condicional else if","else if","else if (altra_condició) { }"]},{cells:["Condicional else","else","else { }"]},{cells:["Bucle for","for","for (inicialització; condició; increment) { }"]},{cells:["Bucle for each","for","for (element : col·lecció) { }"]},{cells:["Bucle while","while","while (condició) { }"]},{cells:["Bucle do while","do while","do { } while (condició)"]},{cells:["Switch","switch","switch (variable) { case valor: }"]},{cells:["Mètode principal","main","public static void main (String[] args) { }"]},{cells:["Sentència break","break","break"]},{cells:["Sentència continue","continue","continue"]},{cells:["Retorn","return","return valor"]}]}),t.jsx(x,{variant:"explanation",title:"Extra",children:t.jsx("p",{children:"Un programa no és més que una seqüència d'instruccions que s'executen en ordre de dalt cap avall, llevat que utilitzem estructures que canvien aquest flux."})})]})}function T0(){return t.jsxs("div",{children:[t.jsx(w,{title:'Estructures condicionals → "fer preguntes"'}),t.jsx(x,{variant:"info",children:t.jsx("p",{children:"Utilitzem una estructura condicional quan el programa ha de prendre decisions."})}),t.jsxs(N,{title:"Exemple vida real",variant:"blue",children:[t.jsx("p",{children:"Si plou,"}),t.jsx("p",{children:"porto paraigua."}),t.jsx("p",{children:"Si no,"}),t.jsx("p",{children:"no me'l porto."})]}),t.jsxs(N,{title:"Esquema mental",variant:"yellow",children:[t.jsx("p",{children:"SI (condició és verdadera) → faig alguna cosa"}),t.jsx("p",{children:"SI NO → faig una altra cosa"})]}),t.jsx(j,{label:"En codi",code:`if (plou) {
    portoParagua();
} else {
    noElPorto();
}`}),t.jsx(w,{title:"Cas amb més d'una pregunta (else if)"}),t.jsxs(N,{title:"Esquema mental",variant:"green",children:[t.jsx("p",{children:"Si plou → paraigua"}),t.jsx("p",{children:"Si neva → abric"}),t.jsx("p",{children:"Si no → res especial"})]}),t.jsx(j,{label:"En codi",code:`if (plou) {
    portoParagua();
} else if (neva) {
    portoAbric();
} else {
    noFaigRes();
}`}),t.jsx(w,{title:"Cas on una pregunta depèn d'una altra"}),t.jsx(x,{variant:"explanation",children:t.jsx("p",{children:"A destacar aquí que el flux va en ordre, primer avalua la primera condició, després la següent, que no depèn de la primera, és a dir, en cas de necessitar que la primera pregunta sigui TRUE perquè avaluï la següent, estaríem parlant d'estructures niuades."})}),t.jsxs(N,{title:"Esquema mental niuat",variant:"pink",children:[t.jsx("p",{children:"Si plou →"}),t.jsx("p",{style:{marginLeft:"20px"},children:"Si tinc paraigua → porto paraigua"}),t.jsx("p",{style:{marginLeft:"20px"},children:"Si no → espero que deixi de ploure"}),t.jsx("p",{children:"Si no → no porto paraigua"})]}),t.jsx(j,{label:"En codi",code:`if (plou) {
    if (paragua) {
        portoParagua();
    } else {
        esperar();
    }
} else {
    noPortoParagua();
}`})]})}function P0(){return t.jsxs("div",{children:[t.jsx(w,{title:`Switch → "menú d'opcions"`}),t.jsx(x,{variant:"info",children:t.jsx("p",{children:"Utilitzem switch quan tenim diverses opcions possibles i només una pot ser la correcta."})}),t.jsxs(N,{title:"Exemple vida real",variant:"blue",children:[t.jsx("p",{children:"Entro a un restaurant i trio:"}),t.jsx("p",{children:"1 → Pizza"}),t.jsx("p",{children:"2 → Amanida"}),t.jsx("p",{children:"3 → Pasta"})]}),t.jsx(N,{title:"Esquema mental",variant:"yellow",children:t.jsx("p",{children:"SEGONS l'opció que triïs → executo una cosa o una altra"})}),t.jsx(j,{label:"En codi",code:`switch (opcio) {
    case 1:
        demanarPizza();
        break;
    case 2:
        demanarAmanida();
        break;
    case 3:
        demanarPasta();
        break;
    default:
        opcioIncorrecta();
}`}),t.jsx(x,{variant:"explanation",children:t.jsx("p",{children:"És com anar directe al gra: si coincideix l'opció, s'executa aquest bloc."})})]})}function _0(){return t.jsxs("div",{children:[t.jsx(w,{title:'Bucles → "repetir mentre alguna cosa sigui cert"'}),t.jsx(x,{variant:"info",children:t.jsx("p",{children:"Utilitzem estructures de repetició quan volem que el programa repeteixi alguna cosa moltes vegades, ja sigui per imprimir, buscar o recórrer."})}),t.jsx(x,{variant:"warning",title:"Si la condició és false des del principi, no entra mai al bucle!!!",children:t.jsx("p",{children:"Recorda que la condició controla l'entrada al bucle. Si ja és falsa abans de començar, el codi del bucle mai s'executarà."})}),t.jsx(w,{title:'while → "repeteix mentre es compleixi la condició"'}),t.jsx(x,{variant:"info",children:t.jsx("p",{children:"Mentre no introdueixi la contrasenya correcta, segueix preguntant."})}),t.jsxs(N,{title:"Esquema mental",variant:"blue",children:[t.jsx("p",{children:"MENTRE (condició sigui true) → repeteixo"}),t.jsx("p",{children:"Quan sigui false → surto del bucle"})]}),t.jsx(j,{label:"En codi",code:`while (!passwordCorrecta) {
    demanarPassword();
}`}),t.jsx(w,{title:'do while → "fes-ho almenys una vegada"'}),t.jsx(x,{variant:"info",children:t.jsx("p",{children:"Pregunto la contrasenya almenys una vegada."})}),t.jsx(N,{title:"Esquema mental",variant:"yellow",children:t.jsx("p",{children:"FAIG → comprovo → si segueix sent true → repeteixo"})}),t.jsx(j,{label:"En codi",code:`do {
    demanarPassword();
} while (!passwordCorrecta);`}),t.jsx(w,{title:'for → "repeteix un número fix de vegades"'}),t.jsx(x,{variant:"info",children:t.jsx("p",{children:"El bucle for s'utilitza quan saps exactament quantes vegades vols repetir alguna cosa. És especialment útil per recórrer col·leccions o fer un número determinat d'iteracions."})}),t.jsx(N,{title:"Esquema mental",variant:"green",children:t.jsx("p",{children:"PER (des d'un valor inicial; mentre es compleixi una condició; incrementant) → repeteixo"})}),t.jsx(j,{label:"En codi",code:`for (int i = 1; i <= 10; i++) {
    System.out.println(i);
}
// Imprimeix números de l'1 al 10`}),t.jsx(x,{variant:"explanation",children:t.jsx("p",{children:"El bucle for té tres parts separades per punt i coma: la inicialització (on comença), la condició (fins quan continua), i l'increment (com avança en cada iteració)."})}),t.jsxs(x,{variant:"info",title:"El valor TRUE controla tot",children:[t.jsx("p",{children:"Tant en condicions com en bucles:"}),t.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px"},children:[t.jsx("li",{children:"Si la condició és true → entra."}),t.jsx("li",{children:"Si la condició és false → no entra o surt."}),t.jsx("li",{children:"Si la condició és false des del principi, el programa salta aquesta estructura i segueix amb el següent o acaba."})]})]}),t.jsx(w,{title:"Resum"}),t.jsx(Z,{headers:["Estructura","Per a què serveix","Exemple mental"],rows:[{cells:["if / else","Prendre decisions",'"Si passa això, faig això"']},{cells:["switch","Triar una opció entre diverses",`"Menú d'opcions"`]},{cells:["while","Repetir mentre alguna cosa sigui cert",'"Mentre no acabi, segueixo"']},{cells:["do while","Repetir almenys una vegada",'"Pregunto mínim una vegada"']},{cells:["for","Repetir un número fix de vegades",`"De l'1 al 10 faig això"`]}]})]})}function q0(){return t.jsxs("div",{children:[t.jsx(w,{title:"Modificadors d'accés"}),t.jsx(x,{variant:"info",children:t.jsx("p",{children:"Els modificadors d'accés controlen la visibilitat de classes, mètodes i atributs en Java. Determinen qui pot accedir a cada element del codi."})}),t.jsx(Z,{headers:["Nom","Paraula reservada","Descripció"],rows:[{cells:["public","public","Accessible des de qualsevol altra classe en qualsevol paquet."]},{cells:["private","private","Accessible només des de la classe en la qual va ser declarat."]},{cells:["protected","protected","Accessible des del mateix paquet i subclasses."]},{cells:["default","(sense paraula)","Per defecte. Accessible per a les classes del mateix paquet."]}]}),t.jsxs(ge,{children:[t.jsxs(N,{title:"public",variant:"green",children:[t.jsxs("p",{children:["Accessible des de ",t.jsx("strong",{children:"qualsevol lloc"}),"."]}),t.jsx(j,{code:"public int edat = 25;"})]}),t.jsxs(N,{title:"private",variant:"pink",children:[t.jsxs("p",{children:["Accessible només dins la ",t.jsx("strong",{children:"mateixa classe"}),"."]}),t.jsx(j,{code:'private String nom = "Joan";'})]}),t.jsxs(N,{title:"protected",variant:"yellow",children:[t.jsxs("p",{children:["Accessible dins el ",t.jsx("strong",{children:"paquet i subclasses"}),"."]}),t.jsx(j,{code:"protected double salari = 1500.0;"})]}),t.jsxs(N,{title:"default (sense paraula)",variant:"blue",children:[t.jsxs("p",{children:["Accessible només dins el ",t.jsx("strong",{children:"mateix paquet"}),"."]}),t.jsx(j,{code:"int comptador = 0;"})]})]})]})}const O0="_button_1snnp_1",I0="_secondary_1snnp_47",D0="_small_1snnp_67",Sl={button:O0,secondary:I0,small:D0};function it({children:e,onClick:r,variant:a,size:n,...i}){const s=[Sl.button,a==="secondary"&&Sl.secondary,n==="small"&&Sl.small].filter(Boolean).join(" ");return t.jsx("button",{className:s,onClick:r,...i,children:e})}const F0="_container_cd20o_1",z0="_title_cd20o_17",B0="_arrayContainer_cd20o_33",U0="_cell_cd20o_53",$0="_cellValue_cd20o_69",G0="_cellIndex_cd20o_115",V0="_controls_cd20o_131",H0="_info_cd20o_205",gr={container:F0,title:z0,arrayContainer:B0,cell:U0,cellValue:$0,cellIndex:G0,controls:V0,info:H0};function yo(){return Math.floor(Math.random()*100)}function Q0(e){return Array.from({length:e},()=>yo())}function W0(){const[e,r]=A.useState(()=>Q0(5)),a=()=>{r(s=>s.map(()=>yo()))},n=()=>{e.length<10&&r(s=>[...s,yo()])},i=()=>{e.length>1&&r(s=>s.slice(0,-1))};return t.jsxs("div",{className:gr.container,children:[t.jsx("div",{className:gr.title,children:"Array Interactiu 1D"}),t.jsx("div",{className:gr.arrayContainer,children:e.map((s,l)=>t.jsxs("div",{className:gr.cell,children:[t.jsx("div",{className:gr.cellValue,children:s}),t.jsxs("div",{className:gr.cellIndex,children:["[",l,"]"]})]},`${l}-${s}`))}),t.jsxs("div",{className:gr.controls,children:[t.jsx(it,{onClick:a,children:"Canviar Valors"}),t.jsx(it,{onClick:n,variant:"secondary",disabled:e.length>=10,children:"Afegir Element"}),t.jsx(it,{onClick:i,variant:"secondary",disabled:e.length<=1,children:"Eliminar Ultim"})]}),t.jsxs("div",{className:gr.info,children:["int[] array = new int[",e.length,"];   // Longitud: ",e.length]})]})}const J0=`// Declaracio d'un array d'enters
int[] numeros = new int[5];

// Declaracio amb valors inicials
int[] notes = {7, 9, 5, 8, 6};

// Declaracio de Strings
String[] noms = {"Anna", "Marc", "Laia"};`,K0=`int[] notes = {7, 9, 5, 8, 6};

// Accedir a un element (index comenca en 0)
System.out.println(notes[0]); // 7
System.out.println(notes[2]); // 5

// Modificar un element
notes[1] = 10;
System.out.println(notes[1]); // 10

// Longitud de l'array
System.out.println(notes.length); // 5`,Y0=`int[] numeros = {10, 20, 30, 40, 50};

// Recorregut amb for classic
for (int i = 0; i < numeros.length; i++) {
    System.out.println("Index " + i + ": " + numeros[i]);
}

// Recorregut amb for-each
for (int num : numeros) {
    System.out.println("Valor: " + num);
}`,X0=`public class ExempleArrays {
    public static void main(String[] args) {
        int[] temperatures = {22, 25, 19, 28, 31, 24, 20};

        // Calcular la mitjana
        int suma = 0;
        for (int temp : temperatures) {
            suma += temp;
        }
        double mitjana = (double) suma / temperatures.length;

        System.out.println("Mitjana: " + mitjana);

        // Trobar el maxim
        int max = temperatures[0];
        for (int i = 1; i < temperatures.length; i++) {
            if (temperatures[i] > max) {
                max = temperatures[i];
            }
        }
        System.out.println("Temperatura maxima: " + max);
    }
}`;function Z0(){return t.jsxs("div",{children:[t.jsx(w,{title:"Arrays Unidimensionals (1D)"}),t.jsx(x,{variant:"info",title:"Què és un Array?",children:t.jsxs("p",{children:["Un ",t.jsx("strong",{children:"array"})," és una estructura de dades que permet emmagatzemar múltiples valors del mateix tipus en una sola variable. Cada element té un",t.jsx("strong",{children:" índex"})," que comença en 0 i permet accedir directament a qualsevol posició."]})}),t.jsx(W0,{}),t.jsx(x,{variant:"explanation",title:"Característiques dels Arrays",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Mida fixa:"})," un cop creat, la mida no pot canviar."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Índex base 0:"})," el primer element és a la posició 0."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Tipus homogeni:"})," tots els elements són del mateix tipus."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Accés directe:"})," es pot accedir a qualsevol element pel seu índex en temps constant."]})]})}),t.jsx(j,{code:J0,label:"Declaració i inicialització",showLineNumbers:!0}),t.jsx(Z,{headers:["Operació","Sintaxi","Exemple"],rows:[{cells:["Declarar buit","tipus[] nom = new tipus[mida]","int[] nums = new int[5]"]},{cells:["Declarar amb valors","tipus[] nom = {v1, v2, ...}","int[] nums = {1, 2, 3}"]},{cells:["Accedir element","nom[index]","nums[0] // primer element"]},{cells:["Modificar element","nom[index] = valor","nums[2] = 99"]},{cells:["Longitud","nom.length","nums.length // 3"]}]}),t.jsx(j,{code:K0,label:"Accés i modificació d'elements",showLineNumbers:!0}),t.jsx(x,{variant:"warning",title:"ArrayIndexOutOfBoundsException",children:t.jsxs("p",{children:["Si intentes accedir a un índex fora del rang (negatiu o major/igual que la longitud), Java llençarà una excepció ",t.jsx("code",{children:"ArrayIndexOutOfBoundsException"}),". Sempre comprova que l'índex estigui dins dels límits!"]})}),t.jsx(j,{code:Y0,label:"Recórrer un Array",showLineNumbers:!0}),t.jsx(x,{variant:"success",title:"Exemple complet: Temperatures",children:t.jsx("p",{children:"Un exemple pràctic que calcula la mitjana i el màxim d'un array de temperatures setmanals."})}),t.jsx(j,{code:X0,label:"Exemple: Càlcul de mitjana i màxim",showLineNumbers:!0})]})}const eS="_container_1u9g6_1",tS="_title_1u9g6_17",rS="_matrixWrapper_1u9g6_33",aS="_matrix_1u9g6_33",nS="_cell_1u9g6_57",iS="_cellActive_1u9g6_107",sS="_cellSelected_1u9g6_125",lS="_cellIndex_1u9g6_141",oS="_controls_1u9g6_157",cS="_info_1u9g6_171",Gt={container:eS,title:tS,matrixWrapper:rS,matrix:aS,cell:nS,cellActive:iS,cellSelected:sS,cellIndex:lS,controls:oS,info:cS},Lh=4,Mh=4;function uS(){return Math.floor(Math.random()*100)}function Md(){return Array.from({length:Lh},()=>Array.from({length:Mh},()=>uS()))}function dS(){const[e,r]=A.useState(()=>Md()),[a,n]=A.useState(new Set),[i,s]=A.useState(null),l=A.useRef([]),o=A.useCallback(()=>{l.current.forEach(d=>clearTimeout(d)),l.current=[]},[]),c=()=>{o(),n(new Set),s(null),r(Md())},u=()=>{o(),n(new Set),s(null);const d=Math.min(Lh,Mh);for(let f=0;f<d;f++){const y=setTimeout(()=>{n(g=>{const b=new Set(g);return b.add(`${f}-${f}`),b})},f*200);l.current.push(y)}},m=(d,f)=>{s(`${d}-${f}`)};return t.jsxs("div",{className:Gt.container,children:[t.jsx("div",{className:Gt.title,children:"Matriu Interactiva 4x4"}),t.jsx("div",{className:Gt.matrixWrapper,children:t.jsx("div",{className:Gt.matrix,children:e.map((d,f)=>d.map((y,g)=>{const b=`${f}-${g}`,S=a.has(b),h=i===b;let p=Gt.cell;return S&&(p+=` ${Gt.cellActive}`),h&&(p+=` ${Gt.cellSelected}`),t.jsxs("div",{className:p,onClick:()=>m(f,g),children:[t.jsx("span",{children:y}),t.jsxs("span",{className:Gt.cellIndex,children:["[",f,"][",g,"]"]})]},b)}))})}),t.jsxs("div",{className:Gt.controls,children:[t.jsx(it,{onClick:u,children:"Ressaltar Diagonal"}),t.jsx(it,{onClick:c,variant:"secondary",children:"Nous Valors"})]}),t.jsx("div",{className:Gt.info,children:i?`matriu[${i.replace("-","][")}] = ${e[parseInt(i.split("-")[0])][parseInt(i.split("-")[1])]}`:"int[][] matriu = new int[4][4];"})]})}const pS=`// Declaracio d'una matriu 3x4
int[][] matriu = new int[3][4];

// Declaracio amb valors inicials
int[][] notes = {
    {7, 8, 9},    // Fila 0
    {6, 5, 8},    // Fila 1
    {9, 7, 10}    // Fila 2
};`,mS=`int[][] matriu = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Accedir a un element: matriu[fila][columna]
System.out.println(matriu[0][0]); // 1 (primera fila, primera columna)
System.out.println(matriu[1][2]); // 6 (segona fila, tercera columna)
System.out.println(matriu[2][1]); // 8 (tercera fila, segona columna)

// Modificar un element
matriu[1][1] = 99;

// Nombre de files i columnes
System.out.println("Files: " + matriu.length);        // 3
System.out.println("Columnes: " + matriu[0].length);   // 3`,hS=`int[][] matriu = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Recorregut amb doble for
for (int i = 0; i < matriu.length; i++) {
    for (int j = 0; j < matriu[i].length; j++) {
        System.out.print(matriu[i][j] + "\\t");
    }
    System.out.println(); // Salt de linia entre files
}`,fS=`// Recorrer la diagonal principal
// (nomes si la matriu es quadrada)
for (int i = 0; i < matriu.length; i++) {
    System.out.println("Diagonal[" + i + "]: " + matriu[i][i]);
}`,xS=`public class ExempleMatriu {
    public static void main(String[] args) {
        int[][] notesAlumnes = {
            {7, 8, 6, 9},   // Alumne 0
            {5, 6, 7, 8},   // Alumne 1
            {9, 10, 8, 9}   // Alumne 2
        };

        // Calcular la mitjana de cada alumne
        for (int i = 0; i < notesAlumnes.length; i++) {
            int suma = 0;
            for (int j = 0; j < notesAlumnes[i].length; j++) {
                suma += notesAlumnes[i][j];
            }
            double mitjana = (double) suma / notesAlumnes[i].length;
            System.out.println("Alumne " + i + " - Mitjana: " + mitjana);
        }
    }
}`;function gS(){return t.jsxs("div",{children:[t.jsx(w,{title:"Arrays Bidimensionals (Matrius)"}),t.jsx(x,{variant:"info",title:"Què és una Matriu?",children:t.jsxs("p",{children:["Una ",t.jsx("strong",{children:"matriu"})," (o array 2D) és un array d'arrays. Es pot pensar com una taula amb ",t.jsx("strong",{children:"files"})," i ",t.jsx("strong",{children:"columnes"}),". Cada element s'identifica amb dos índexos: ",t.jsx("code",{children:"[fila][columna]"}),"."]})}),t.jsx(dS,{}),t.jsx(x,{variant:"explanation",title:"Estructura d'una Matriu",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Files:"})," cada fila és un array independent."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Columnes:"})," cada posició dins d'una fila."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Accés:"})," ",t.jsx("code",{children:"matriu[fila][columna]"})," per llegir o escriure."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Mida:"})," ",t.jsx("code",{children:"matriu.length"})," dona el nombre de files, ",t.jsx("code",{children:"matriu[0].length"})," dona les columnes."]})]})}),t.jsx(j,{code:pS,label:"Declaració de matrius",showLineNumbers:!0}),t.jsx(Z,{headers:["Operació","Sintaxi","Descripció"],rows:[{cells:["Declarar buida","tipus[][] nom = new tipus[files][cols]","Crea matriu amb zeros"]},{cells:["Declarar amb valors","tipus[][] nom = {{...}, {...}}","Inicialitza amb valors"]},{cells:["Accedir element","nom[fila][col]","Llegeix un valor concret"]},{cells:["Nombre files","nom.length","Retorna total de files"]},{cells:["Nombre columnes","nom[0].length","Retorna columnes de la fila 0"]}]}),t.jsx(j,{code:mS,label:"Accés i modificació d'elements",showLineNumbers:!0}),t.jsx(j,{code:hS,label:"Recorregut complet de la matriu",showLineNumbers:!0}),t.jsx(x,{variant:"success",title:"Diagonal principal",children:t.jsxs("p",{children:["En una matriu quadrada (NxN), la ",t.jsx("strong",{children:"diagonal principal"})," són els elements on l'índex de fila és igual a l'índex de columna: ",t.jsx("code",{children:"matriu[i][i]"}),"."]})}),t.jsx(j,{code:fS,label:"Recórrer la diagonal",showLineNumbers:!0}),t.jsx(x,{variant:"info",title:"Exemple pràctic: Notes d'alumnes",children:t.jsx("p",{children:"Un cas d'ús habitual és guardar les notes de diversos alumnes en diverses assignatures, on cada fila representa un alumne i cada columna una assignatura."})}),t.jsx(j,{code:xS,label:"Exemple: Mitjana per alumne",showLineNumbers:!0})]})}const vS="_container_1elsv_1",jS="_title_1elsv_9",bS="_subtitle_1elsv_17",yS="_listArea_1elsv_25",SS="_listContainer_1elsv_33",wS="_emptyMessage_1elsv_41",CS="_cell_1elsv_48",ES="_cellValue_1elsv_55",AS="_cellHighlight_1elsv_79",RS="_cellShifting_1elsv_86",LS="_cellIndex_1elsv_92",MS="_controlsGrid_1elsv_101",kS="_controlGroup_1elsv_108",NS="_controlLabel_1elsv_115",TS="_controlRow_1elsv_124",PS="_console_1elsv_156",_S="_consoleLine_1elsv_170",qS="_consoleCode_1elsv_174",OS="_consoleResult_1elsv_178",IS="_consoleError_1elsv_182",DS="_consolePlaceholder_1elsv_186",FS="_sizeBar_1elsv_192",zS="_sizeBarLabel_1elsv_205",BS="_sizeBarTrack_1elsv_210",US="_sizeBarFill_1elsv_218",he={container:vS,title:jS,subtitle:bS,listArea:yS,listContainer:SS,emptyMessage:wS,cell:CS,cellValue:ES,cellHighlight:AS,cellShifting:RS,cellIndex:LS,controlsGrid:MS,controlGroup:kS,controlLabel:NS,controlRow:TS,console:PS,consoleLine:_S,consoleCode:qS,consoleResult:OS,consoleError:IS,consolePlaceholder:DS,sizeBar:FS,sizeBarLabel:zS,sizeBarTrack:BS,sizeBarFill:US},wi=15;function $S(){const[e,r]=A.useState(["Hola","Món","Java"]),[a,n]=A.useState([]),[i,s]=A.useState(null),[l,o]=A.useState([]),c=A.useRef(null),u=A.useRef(null),m=A.useRef(null),d=A.useRef(null),f=A.useRef(null),y=A.useRef(null),g=A.useRef(null),b=A.useRef(null),S=A.useRef(null);A.useEffect(()=>{S.current&&(S.current.scrollTop=S.current.scrollHeight)},[a]);const h=A.useCallback((q,G,re=!1)=>{n(O=>[...O.slice(-25),{code:q,result:G,isError:re,id:Date.now()+Math.random()}])},[]),p=A.useCallback(q=>{s(q),setTimeout(()=>s(null),800)},[]),v=A.useCallback(q=>{o(q),setTimeout(()=>o([]),600)},[]),L=()=>{var G;const q=(G=c.current)==null?void 0:G.value.trim();if(q){if(e.length>=wi){h(`llista.add("${q}")`,`Error: massa elements (max ${wi} per la demo)`,!0);return}r(re=>[...re,q]),h(`llista.add("${q}")`,`// S'afegeix "${q}" al final → mida = ${e.length+1}`),p(e.length),c.current.value="",c.current.focus()}},k=()=>{var O,B;const q=parseInt((O=u.current)==null?void 0:O.value),G=(B=m.current)==null?void 0:B.value.trim();if(isNaN(q)||!G)return;if(q<0||q>e.length){h(`llista.add(${q}, "${G}")`,`IndexOutOfBoundsException: Index ${q} fora de rang [0..${e.length}]`,!0);return}if(e.length>=wi){h(`llista.add(${q}, "${G}")`,`Error: massa elements (max ${wi})`,!0);return}const re=[];for(let U=q;U<e.length;U++)re.push(U+1);r(U=>[...U.slice(0,q),G,...U.slice(q)]),h(`llista.add(${q}, "${G}")`,`// Insereix "${G}" a posició ${q} → els elements es desplacen`),p(q),v(re),u.current.value="",m.current.value=""},P=()=>{var O;const q=parseInt((O=d.current)==null?void 0:O.value);if(isNaN(q))return;if(q<0||q>=e.length){h(`llista.remove(${q})`,`IndexOutOfBoundsException: Index ${q} fora de rang [0..${e.length-1}]`,!0);return}const G=e[q],re=[];for(let B=q+1;B<e.length;B++)re.push(B-1);r(B=>B.filter((U,ae)=>ae!==q)),h(`llista.remove(${q})`,`// Elimina "${G}" de posició ${q} → retorna "${G}"`),v(re),d.current.value=""},_=()=>{var G;const q=parseInt((G=f.current)==null?void 0:G.value);if(!isNaN(q)){if(q<0||q>=e.length){h(`llista.get(${q})`,`IndexOutOfBoundsException: Index ${q} fora de rang [0..${e.length-1}]`,!0);return}h(`llista.get(${q})`,`→ "${e[q]}"`),p(q),f.current.value=""}},E=()=>{var O,B;const q=parseInt((O=y.current)==null?void 0:O.value),G=(B=g.current)==null?void 0:B.value.trim();if(isNaN(q)||!G)return;if(q<0||q>=e.length){h(`llista.set(${q}, "${G}")`,`IndexOutOfBoundsException: Index ${q} fora de rang [0..${e.length-1}]`,!0);return}const re=e[q];r(U=>U.map((ae,ue)=>ue===q?G:ae)),h(`llista.set(${q}, "${G}")`,`// Substitueix "${re}" per "${G}" → retorna "${re}"`),p(q),y.current.value="",g.current.value=""},V=()=>{var O;const q=(O=b.current)==null?void 0:O.value.trim();if(!q)return;const G=e.includes(q),re=e.indexOf(q);h(`llista.contains("${q}")`,`→ ${G}${G?` (trobat a posició ${re})`:""}`),G&&p(re),b.current.value=""},F=()=>{h("llista.size()",`→ ${e.length}`)},le=()=>{r([]),h("llista.clear()","// S'han eliminat tots els elements → mida = 0")},ee=()=>{r(["Hola","Món","Java"]),n([]),s(null),o([])},ve=q=>G=>{G.key==="Enter"&&q()},te=Math.max(10,Math.pow(2,Math.ceil(Math.log2(e.length||1)+.1)));return t.jsxs("div",{className:he.container,children:[t.jsx("div",{className:he.title,children:"Simulador Interactiu d'ArrayList"}),t.jsx("div",{className:he.subtitle,children:"ArrayList<String> llista — Prova les operacions i observa el resultat!"}),t.jsx("div",{className:he.listArea,children:e.length===0?t.jsx("div",{className:he.emptyMessage,children:"[ ArrayList buit — afegeix elements! ]"}):t.jsx("div",{className:he.listContainer,children:e.map((q,G)=>t.jsxs("div",{className:`${he.cell} ${i===G?he.cellHighlight:""} ${l.includes(G)?he.cellShifting:""}`,children:[t.jsx("div",{className:he.cellValue,children:`"${q}"`}),t.jsxs("div",{className:he.cellIndex,children:["[",G,"]"]})]},`${G}-${q}-${e.length}`))})}),t.jsxs("div",{className:he.sizeBar,children:[t.jsxs("span",{className:he.sizeBarLabel,children:["size() = ",e.length]}),t.jsx("div",{className:he.sizeBarTrack,children:t.jsx("div",{className:he.sizeBarFill,style:{width:`${e.length/te*100}%`}})}),t.jsxs("span",{children:["capacitat interna ≈ ",te]})]}),t.jsxs("div",{className:he.controlsGrid,children:[t.jsxs("div",{className:he.controlGroup,children:[t.jsx("div",{className:he.controlLabel,children:"Afegir elements"}),t.jsxs("div",{className:he.controlRow,children:[t.jsx("input",{ref:c,placeholder:"valor",onKeyDown:ve(L)}),t.jsx(it,{onClick:L,variant:"secondary",children:"add()"})]}),t.jsxs("div",{className:he.controlRow,style:{marginTop:6},children:[t.jsx("input",{ref:u,placeholder:"pos",style:{maxWidth:50}}),t.jsx("input",{ref:m,placeholder:"valor",onKeyDown:ve(k)}),t.jsx(it,{onClick:k,variant:"secondary",children:"add(i, v)"})]})]}),t.jsxs("div",{className:he.controlGroup,children:[t.jsx("div",{className:he.controlLabel,children:"Accedir i modificar"}),t.jsxs("div",{className:he.controlRow,children:[t.jsx("input",{ref:f,placeholder:"pos",style:{maxWidth:50},onKeyDown:ve(_)}),t.jsx(it,{onClick:_,variant:"secondary",children:"get(i)"}),t.jsx("input",{ref:d,placeholder:"pos",style:{maxWidth:50},onKeyDown:ve(P)}),t.jsx(it,{onClick:P,variant:"secondary",children:"remove(i)"})]}),t.jsxs("div",{className:he.controlRow,style:{marginTop:6},children:[t.jsx("input",{ref:y,placeholder:"pos",style:{maxWidth:50}}),t.jsx("input",{ref:g,placeholder:"nou valor",onKeyDown:ve(E)}),t.jsx(it,{onClick:E,variant:"secondary",children:"set(i, v)"})]})]}),t.jsxs("div",{className:he.controlGroup,children:[t.jsx("div",{className:he.controlLabel,children:"Cercar i utilitats"}),t.jsxs("div",{className:he.controlRow,children:[t.jsx("input",{ref:b,placeholder:"valor",onKeyDown:ve(V)}),t.jsx(it,{onClick:V,variant:"secondary",children:"contains()"})]}),t.jsxs("div",{className:he.controlRow,style:{marginTop:6},children:[t.jsx(it,{onClick:F,variant:"secondary",children:"size()"}),t.jsx(it,{onClick:le,variant:"secondary",children:"clear()"}),t.jsx(it,{onClick:ee,children:"Reset"})]})]})]}),t.jsx("div",{className:he.console,ref:S,children:a.length===0?t.jsx("div",{className:he.consolePlaceholder,children:"// Fes clic als botons per veure el codi Java equivalent..."}):a.map(q=>t.jsxs("div",{className:he.consoleLine,children:[t.jsx("span",{className:he.consoleCode,children:q.code})," ",t.jsx("span",{className:q.isError?he.consoleError:he.consoleResult,children:q.result})]},q.id))})]})}const GS="import java.util.ArrayList;",VS=`// Crear un ArrayList de Strings
ArrayList<String> noms = new ArrayList<>();

// Crear un ArrayList d'enters (cal usar Integer, no int)
ArrayList<Integer> numeros = new ArrayList<>();

// Crear un ArrayList de decimals
ArrayList<Double> preus = new ArrayList<>();`,HS=`ArrayList<String> fruites = new ArrayList<>();

// Afegir elements al final
fruites.add("Poma");
fruites.add("Plàtan");
fruites.add("Taronja");
System.out.println(fruites); // [Poma, Plàtan, Taronja]

// Afegir a una posició concreta (desplaça els altres)
fruites.add(1, "Maduixa");
System.out.println(fruites); // [Poma, Maduixa, Plàtan, Taronja]

// Obtenir un element
String primera = fruites.get(0); // "Poma"

// Modificar un element
fruites.set(2, "Kiwi");
System.out.println(fruites); // [Poma, Maduixa, Kiwi, Taronja]

// Eliminar per posició
fruites.remove(0);
System.out.println(fruites); // [Maduixa, Kiwi, Taronja]

// Mida de la llista
int mida = fruites.size(); // 3`,QS=`ArrayList<String> noms = new ArrayList<>();
noms.add("Anna");
noms.add("Marc");
noms.add("Laia");

// ✅ Amb for clàssic (quan necessitem l'índex)
for (int i = 0; i < noms.size(); i++) {
    System.out.println(i + ": " + noms.get(i));
}

// ✅ Amb for-each (més net si no necessitem l'índex)
for (String nom : noms) {
    System.out.println("Hola, " + nom + "!");
}`,WS=`// AMB ARRAY NORMAL: mida fixa, hem de saber quants alumnes hi ha
String[] alumnes = new String[30]; // I si en venen 31? 💥
int comptador = 0;
alumnes[comptador++] = "Anna";
alumnes[comptador++] = "Marc";
// Per eliminar un del mig... un malson de desplaçaments manuals`,JS=`// AMB ARRAYLIST: creix automàticament, molt més fàcil
ArrayList<String> alumnes = new ArrayList<>();
alumnes.add("Anna");
alumnes.add("Marc");
alumnes.add("Laia");
alumnes.remove(1); // Elimina "Marc" fàcilment
// Mida s'ajusta sola: alumnes.size() → 2`,KS=`import java.util.ArrayList;

public class LlistaCompra {
    public static void main(String[] args) {
        ArrayList<String> llista = new ArrayList<>();

        // Afegim productes
        llista.add("Pa");
        llista.add("Llet");
        llista.add("Ous");
        llista.add("Formatge");
        llista.add("Llet"); // Es poden repetir!

        System.out.println("Llista de la compra: " + llista);
        System.out.println("Total productes: " + llista.size());

        // Comprovem si tenim un producte
        if (llista.contains("Ous")) {
            System.out.println("Ja tenim Ous a la llista!");
        }

        // Eliminem un producte que ja hem comprat
        llista.remove("Pa");
        System.out.println("Després de comprar Pa: " + llista);

        // indexOf: on es troba un element?
        int pos = llista.indexOf("Llet");
        System.out.println("Llet es troba a posició: " + pos);

        // Recorrem la llista final
        System.out.println("\\n--- Productes pendents ---");
        for (int i = 0; i < llista.size(); i++) {
            System.out.println((i + 1) + ". " + llista.get(i));
        }
    }
}`,YS=`// ❌ NO funciona: els tipus primitius no es poden usar directament
// ArrayList<int> numeros = new ArrayList<>();

// ✅ Cal usar les classes Wrapper
ArrayList<Integer> numeros = new ArrayList<>();
ArrayList<Double>  decimals = new ArrayList<>();
ArrayList<Boolean> flags = new ArrayList<>();
ArrayList<Character> lletres = new ArrayList<>();

// Java fa la conversió automàtica (autoboxing)
numeros.add(42);        // int → Integer automàticament
int valor = numeros.get(0); // Integer → int automàticament`,XS=`ArrayList<String> llista = new ArrayList<>();
llista.add("A");
llista.add("B");

// ❌ ERROR: IndexOutOfBoundsException
// String x = llista.get(5);   // Només hi ha posicions 0 i 1!
// llista.remove(10);           // No existeix posició 10!

// ✅ CORRECTE: sempre comprova amb size()
if (2 < llista.size()) {
    String x = llista.get(2);
}`;function ZS(){return t.jsxs("div",{children:[t.jsx(w,{title:"ArrayList: Llistes Dinàmiques"}),t.jsxs(x,{variant:"info",title:"Què és un ArrayList?",children:[t.jsxs("p",{children:["Un ",t.jsx("strong",{children:"ArrayList"})," és com un array, però ",t.jsx("strong",{children:"millor"}),": creix i s'encongeix automàticament quan afegeixes o elimines elements. No has de decidir la mida per avançat — simplement afegeixes el que necessitis."]}),t.jsx("p",{style:{marginTop:8},children:"Imagina't una llista de la compra: pots afegir productes, treure'ls quan els compres i no et cal saber per endavant quants en seran. Això és un ArrayList!"})]}),t.jsx(w,{title:"Array vs ArrayList: Quina diferència hi ha?"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Array (clàssic)",variant:"pink",children:t.jsxs("ul",{style:{margin:0,paddingLeft:18},children:[t.jsxs("li",{children:["Mida ",t.jsx("strong",{children:"fixa"})," — decidida al crear-lo"]}),t.jsx("li",{children:"No pot créixer ni encongir-se"}),t.jsx("li",{children:"Funciona amb tipus primitius (int, double...)"}),t.jsxs("li",{children:["Accés amb ",t.jsx("code",{children:"array[i]"})]}),t.jsxs("li",{children:["Longitud amb ",t.jsx("code",{children:".length"})]})]})}),t.jsx(N,{title:"ArrayList (dinàmic)",variant:"blue",children:t.jsxs("ul",{style:{margin:0,paddingLeft:18},children:[t.jsxs("li",{children:["Mida ",t.jsx("strong",{children:"flexible"})," — creix automàticament"]}),t.jsx("li",{children:"Afegir i eliminar quan vulguis"}),t.jsx("li",{children:"Només objectes (Integer, String, Double...)"}),t.jsxs("li",{children:["Accés amb ",t.jsx("code",{children:".get(i)"})]}),t.jsxs("li",{children:["Longitud amb ",t.jsx("code",{children:".size()"})]})]})})]}),t.jsxs(pe,{children:[t.jsx($,{title:"Amb Array: rígid i complicat",variant:"bad",children:t.jsx(j,{code:WS,language:"java"})}),t.jsx($,{title:"Amb ArrayList: flexible i senzill",variant:"good",children:t.jsx(j,{code:JS,language:"java"})})]}),t.jsx(w,{title:"Com crear un ArrayList"}),t.jsx(x,{variant:"warning",title:"Important: el import",children:t.jsx("p",{children:"Abans d'usar ArrayList, cal importar-lo a la part de dalt del fitxer:"})}),t.jsx(j,{code:GS,label:"Import necessari",language:"java"}),t.jsx(j,{code:VS,label:"Creació d'un ArrayList",language:"java",showLineNumbers:!0}),t.jsx(x,{variant:"explanation",title:"Tipus Wrapper: per què Integer i no int?",children:t.jsxs("p",{children:["ArrayList només pot guardar ",t.jsx("strong",{children:"objectes"}),", no tipus primitius. Per això existeixen les ",t.jsx("strong",{children:"classes Wrapper"}),': són la versió "objecte" dels tipus primitius. La bona notícia és que Java fa la conversió automàticament (',t.jsx("strong",{children:"autoboxing"}),")."]})}),t.jsx(Z,{headers:["Tipus primitiu","Classe Wrapper","Exemple ArrayList"],rows:[{cells:["int","Integer","ArrayList<Integer>"]},{cells:["double","Double","ArrayList<Double>"]},{cells:["boolean","Boolean","ArrayList<Boolean>"]},{cells:["char","Character","ArrayList<Character>"]},{cells:["String","String (ja és objecte!)","ArrayList<String>"]}]}),t.jsx(j,{code:YS,label:"Tipus Wrapper i Autoboxing",language:"java",showLineNumbers:!0}),t.jsx(w,{title:"Operacions principals"}),t.jsx(Z,{headers:["Mètode","Què fa","Retorna"],rows:[{cells:["add(element)","Afegeix al final de la llista","true"]},{cells:["add(index, element)","Insereix a la posició indicada","void"]},{cells:["get(index)","Obté l'element de la posició","L'element"]},{cells:["set(index, element)","Substitueix l'element de la posició","L'element antic"]},{cells:["remove(index)","Elimina l'element de la posició","L'element eliminat"]},{cells:["size()","Retorna quants elements hi ha","int"]},{cells:["contains(element)","Comprova si l'element hi és","boolean"]},{cells:["indexOf(element)","Retorna la posició de l'element (-1 si no hi és)","int"]},{cells:["isEmpty()","Comprova si la llista està buida","boolean"]},{cells:["clear()","Elimina tots els elements","void"]}]}),t.jsx(j,{code:HS,label:"Operacions bàsiques en acció",language:"java",showLineNumbers:!0}),t.jsx(w,{title:"Prova-ho tu!"}),t.jsx(x,{variant:"info",title:"Simulador interactiu",children:t.jsx("p",{children:"Utilitza el simulador de sota per provar totes les operacions d'un ArrayList. Escriu valors, fes clic als botons i observa com canvia la llista i el codi Java equivalent a la consola."})}),t.jsx($S,{}),t.jsx(w,{title:"Recórrer un ArrayList"}),t.jsx(j,{code:QS,label:"Formes de recórrer",language:"java",showLineNumbers:!0}),t.jsx(x,{variant:"explanation",title:"Quina forma triar?",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"for clàssic:"})," quan necessites saber la posició (índex) de cada element."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"for-each:"})," quan només vols accedir al valor, sense l'índex. Més net i menys propensos a errors."]})]})}),t.jsx(w,{title:"Errors comuns"}),t.jsx(x,{variant:"error",title:"IndexOutOfBoundsException",children:t.jsxs("p",{children:["L'error més habitual! Passa quan intentes accedir a una posició que no existeix. Recorda: les posicions van de ",t.jsx("strong",{children:"0"})," a ",t.jsx("strong",{children:"size() - 1"}),"."]})}),t.jsx(j,{code:XS,label:"Com evitar errors d'índex",language:"java",showLineNumbers:!0}),t.jsx(w,{title:"Exemple complet: Llista de la Compra"}),t.jsx(x,{variant:"success",title:"Posant-ho tot junt",children:t.jsx("p",{children:"Un exemple pràctic que utilitza les operacions principals: afegir, eliminar, cercar i recórrer una llista."})}),t.jsx(j,{code:KS,label:"LlistaCompra.java",language:"java",showLineNumbers:!0}),t.jsx(w,{title:"Resum"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Crear",variant:"blue",children:t.jsx("code",{children:"ArrayList<Tipus> nom = new ArrayList<>();"})}),t.jsxs(N,{title:"Afegir",variant:"green",children:[t.jsx("code",{children:"llista.add(element)"}),t.jsx("br",{}),t.jsx("code",{children:"llista.add(pos, element)"})]}),t.jsxs(N,{title:"Accedir / Modificar",variant:"yellow",children:[t.jsx("code",{children:"llista.get(pos)"}),t.jsx("br",{}),t.jsx("code",{children:"llista.set(pos, element)"})]}),t.jsxs(N,{title:"Eliminar / Cercar",variant:"pink",children:[t.jsx("code",{children:"llista.remove(pos)"}),t.jsx("br",{}),t.jsx("code",{children:"llista.contains(element)"}),t.jsx("br",{}),t.jsx("code",{children:"llista.size()"})]})]}),t.jsx(x,{variant:"info",title:"Quan usar ArrayList?",children:t.jsxs("p",{children:["Usa ",t.jsx("strong",{children:"ArrayList"})," quan no sàpigues per avançat quants elements tindràs, o quan necessitis afegir i eliminar elements sovint. Si la mida és fixa i coneguda, un array normal pot ser suficient i una mica més eficient."]})})]})}const e1="_container_4hbij_1",t1="_title_4hbij_17",r1="_functionsGrid_4hbij_33",a1="_functionBox_4hbij_47",n1="_functionName_4hbij_75",i1="_functionDesc_4hbij_91",s1="_inputGroup_4hbij_105",l1="_input_4hbij_105",o1="_executeBtn_4hbij_165",c1="_output_4hbij_211",u1="_outputLabel_4hbij_237",d1="_outputValue_4hbij_247",p1="_outputEmpty_4hbij_257",se={container:e1,title:t1,functionsGrid:r1,functionBox:a1,functionName:n1,functionDesc:i1,inputGroup:s1,input:l1,executeBtn:o1,output:c1,outputLabel:u1,outputValue:d1,outputEmpty:p1};function m1(){const[e,r]=A.useState(""),[a,n]=A.useState(""),i=()=>{r("Hola Mon!")},s=()=>{n(String(Math.floor(Math.random()*100)))};return t.jsxs("div",{className:se.container,children:[t.jsx("div",{className:se.title,children:"Demo: Funcions sense Parametres"}),t.jsxs("div",{className:se.functionsGrid,children:[t.jsxs("div",{className:se.functionBox,children:[t.jsx("div",{className:se.functionName,children:"saludar()"}),t.jsx("div",{className:se.functionDesc,children:"Retorna un missatge de salutacio fix. No rep cap parametre."}),t.jsx("button",{className:se.executeBtn,onClick:i,children:"Executar saludar()"}),t.jsx("div",{className:se.output,style:{marginTop:12},children:e?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:se.outputLabel,children:"Resultat: "}),t.jsxs("span",{className:se.outputValue,children:['"',e,'"']})]}):t.jsx("span",{className:se.outputEmpty,children:"Prem el boto per executar..."})})]}),t.jsxs("div",{className:se.functionBox,children:[t.jsx("div",{className:se.functionName,children:"obtenirNumeroAleatori()"}),t.jsx("div",{className:se.functionDesc,children:"Genera i retorna un numero aleatori entre 0 i 99."}),t.jsx("button",{className:se.executeBtn,onClick:s,children:"Executar obtenirNumeroAleatori()"}),t.jsx("div",{className:se.output,style:{marginTop:12},children:a?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:se.outputLabel,children:"Resultat: "}),t.jsx("span",{className:se.outputValue,children:a})]}):t.jsx("span",{className:se.outputEmpty,children:"Prem el boto per executar..."})})]})]})]})}function h1(){const[e,r]=A.useState(""),[a,n]=A.useState(""),[i,s]=A.useState(""),[l,o]=A.useState(""),[c,u]=A.useState(""),m=()=>{const f=parseFloat(e),y=parseFloat(a);if(isNaN(f)||isNaN(y)){s("Introdueix dos numeros valids");return}s(String(f+y))},d=()=>{if(!l.trim()){u("Introdueix un nom");return}u(`Hola, ${l.trim()}! Benvingut/da!`)};return t.jsxs("div",{className:se.container,children:[t.jsx("div",{className:se.title,children:"Demo: Funcions amb Parametres"}),t.jsxs("div",{className:se.functionsGrid,children:[t.jsxs("div",{className:se.functionBox,children:[t.jsx("div",{className:se.functionName,children:"sumar(int a, int b)"}),t.jsx("div",{className:se.functionDesc,children:"Rep dos numeros com a parametres i retorna la seva suma."}),t.jsxs("div",{className:se.inputGroup,children:[t.jsx("input",{type:"number",className:se.input,placeholder:"a",value:e,onChange:f=>r(f.target.value)}),t.jsx("input",{type:"number",className:se.input,placeholder:"b",value:a,onChange:f=>n(f.target.value)}),t.jsx("button",{className:se.executeBtn,onClick:m,children:"Executar"})]}),t.jsx("div",{className:se.output,children:i?t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:se.outputLabel,children:["sumar(",e,", ",a,") = "]}),t.jsx("span",{className:se.outputValue,children:i})]}):t.jsx("span",{className:se.outputEmpty,children:"Introdueix valors i executa..."})})]}),t.jsxs("div",{className:se.functionBox,children:[t.jsx("div",{className:se.functionName,children:"saludarPersona(String nom)"}),t.jsx("div",{className:se.functionDesc,children:"Rep un nom com a parametre i retorna un missatge personalitzat."}),t.jsxs("div",{className:se.inputGroup,children:[t.jsx("input",{type:"text",className:se.input,placeholder:"Nom",value:l,onChange:f=>o(f.target.value)}),t.jsx("button",{className:se.executeBtn,onClick:d,children:"Executar"})]}),t.jsx("div",{className:se.output,children:c?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:se.outputLabel,children:"Resultat: "}),t.jsxs("span",{className:se.outputValue,children:['"',c,'"']})]}):t.jsx("span",{className:se.outputEmpty,children:"Introdueix un nom i executa..."})})]})]})]})}function kh({mode:e="no-params"}){return e==="with-params"?t.jsx(h1,{}):t.jsx(m1,{})}const f1=`// Estructura general d'una funció sense paràmetres
static tipusRetorn nomFuncio() {
    // Cos de la funció
    return valor; // Si el tipus no és void
}

// Funció que no retorna res (void)
static void nomFuncio() {
    // Accions
}`,x1=`public class Funcions {
    // Funció que retorna un String
    static String saludar() {
        return "Hola Mon!";
    }

    // Funció que no retorna res
    static void mostrarMissatge() {
        System.out.println("Això és un missatge");
    }

    public static void main(String[] args) {
        String salutacio = saludar();
        System.out.println(salutacio); // Hola Mon!

        mostrarMissatge(); // Això és un missatge
    }
}`,g1=`public class GeneradorAleatori {
    // Funció que retorna un número aleatori
    static int obtenirNumeroAleatori() {
        return (int) (Math.random() * 100);
    }

    // Funció que retorna la data actual com a String
    static String obtenirSalutacioHora() {
        int hora = java.time.LocalTime.now().getHour();
        if (hora < 12) return "Bon dia!";
        if (hora < 20) return "Bona tarda!";
        return "Bona nit!";
    }

    public static void main(String[] args) {
        int num = obtenirNumeroAleatori();
        System.out.println("Número aleatori: " + num);

        System.out.println(obtenirSalutacioHora());
    }
}`;function v1(){return t.jsxs("div",{children:[t.jsx(w,{title:"Funcions sense Paràmetres"}),t.jsx(x,{variant:"info",title:"Què és una Funció?",children:t.jsxs("p",{children:["Una ",t.jsx("strong",{children:"funció"})," (o mètode) és un bloc de codi reutilitzable que realitza una tasca específica. Les funcions ",t.jsx("strong",{children:"sense paràmetres"})," no necessiten rebre cap dada externa per funcionar: fan la seva feina de manera autònoma."]})}),t.jsx(kh,{mode:"no-params"}),t.jsx(x,{variant:"explanation",title:"Avantatges de les funcions",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Reutilització:"})," es poden cridar tantes vegades com calgui."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Organització:"})," el codi queda més net i estructurat."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Manteniment:"})," si cal canviar la lògica, només es modifica en un lloc."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Llegibilitat:"})," el nom de la funció descriu què fa."]})]})}),t.jsx(j,{code:f1,label:"Estructura d'una funció sense paràmetres",showLineNumbers:!0}),t.jsx(Z,{headers:["Concepte","Descripció","Exemple"],rows:[{cells:["static","Permet cridar la funció sense crear un objecte","static void fer()"]},{cells:["Tipus de retorn","Indica què retorna la funció","int, String, void..."]},{cells:["void","La funció no retorna cap valor","static void mostrar()"]},{cells:["return","Retorna un valor i acaba la funció",'return "Hola";']}]}),t.jsx(j,{code:x1,label:"Exemple: Funció saludar()",showLineNumbers:!0}),t.jsx(x,{variant:"warning",title:"void vs tipus de retorn",children:t.jsxs("p",{children:["Si una funció és ",t.jsx("code",{children:"void"}),", no pot tenir ",t.jsx("code",{children:"return"})," amb valor (però pot tenir ",t.jsx("code",{children:"return;"})," per sortir abans). Si té un tipus de retorn (",t.jsx("code",{children:"int"}),", ",t.jsx("code",{children:"String"}),", etc.), ",t.jsx("strong",{children:"obligatòriament"})," ha de retornar un valor d'aquell tipus."]})}),t.jsx(j,{code:g1,label:"Exemple: Funcions sense paràmetres variades",showLineNumbers:!0})]})}const j1=`// Estructura general d'una funció amb paràmetres
static tipusRetorn nomFuncio(tipus param1, tipus param2) {
    // Cos de la funció - utilitza param1 i param2
    return valor;
}

// Exemple concret
static int sumar(int a, int b) {
    return a + b;
}`,b1=`public class OperacionsMatematiques {
    // Funció amb dos paràmetres enters
    static int sumar(int a, int b) {
        return a + b;
    }

    // Funció amb un paràmetre double
    static double calcularIVA(double preu) {
        return preu * 0.21;
    }

    // Funció amb paràmetre String
    static String saludarPersona(String nom) {
        return "Hola, " + nom + "! Benvingut/da!";
    }

    public static void main(String[] args) {
        int resultat = sumar(5, 3);
        System.out.println("5 + 3 = " + resultat); // 8

        double iva = calcularIVA(100.0);
        System.out.println("IVA de 100: " + iva); // 21.0

        String missatge = saludarPersona("Anna");
        System.out.println(missatge); // Hola, Anna! Benvingut/da!
    }
}`,y1=`public class FuncionsAvancades {
    // Funció amb múltiples paràmetres de diferent tipus
    static String crearFitxa(String nom, int edat, String ciutat) {
        return nom + " (" + edat + " anys, " + ciutat + ")";
    }

    // Funció que rep un array com a paràmetre
    static double calcularMitjana(int[] numeros) {
        int suma = 0;
        for (int num : numeros) {
            suma += num;
        }
        return (double) suma / numeros.length;
    }

    // Funció amb paràmetre i retorn booleà
    static boolean esMajorEdat(int edat) {
        return edat >= 18;
    }

    public static void main(String[] args) {
        System.out.println(crearFitxa("Marc", 22, "Barcelona"));

        int[] notes = {7, 8, 6, 9, 5};
        System.out.println("Mitjana: " + calcularMitjana(notes));

        System.out.println("És major? " + esMajorEdat(16)); // false
    }
}`;function S1(){return t.jsxs("div",{children:[t.jsx(w,{title:"Funcions amb Paràmetres"}),t.jsx(x,{variant:"info",title:"Paràmetres i Arguments",children:t.jsxs("p",{children:["Les funcions amb ",t.jsx("strong",{children:"paràmetres"})," reben dades d'entrada que poden utilitzar dins del seu cos. Els ",t.jsx("strong",{children:"paràmetres"})," es defineixen a la declaració de la funció, i els ",t.jsx("strong",{children:"arguments"})," són els valors concrets que es passen quan es crida la funció."]})}),t.jsx(kh,{mode:"with-params"}),t.jsx(j,{code:j1,label:"Estructura d'una funció amb paràmetres",showLineNumbers:!0}),t.jsx(Z,{headers:["Concepte","Descripció","Exemple"],rows:[{cells:["Paràmetre","Variable declarada a la signatura","(int a, int b)"]},{cells:["Argument","Valor passat en la crida","sumar(5, 3)"]},{cells:["Pas per valor","Java copia el valor del primitiu","int, double, char..."]},{cells:["Pas per referència","Java copia la referència de l'objecte","String, arrays, objectes"]}]}),t.jsx(x,{variant:"explanation",title:"Diferència entre Paràmetre i Argument",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Paràmetre:"}),' és la variable a la definició de la funció. És com un "espai reservat".']}),t.jsxs("li",{children:[t.jsx("strong",{children:"Argument:"})," és el valor real que enviem quan cridem la funció."]}),t.jsxs("li",{children:["Exemple: en ",t.jsx("code",{children:"static int sumar(int a, int b)"}),", ",t.jsx("code",{children:"a"})," i ",t.jsx("code",{children:"b"})," són paràmetres."]}),t.jsxs("li",{children:["Quan cridem ",t.jsx("code",{children:"sumar(5, 3)"}),", ",t.jsx("code",{children:"5"})," i ",t.jsx("code",{children:"3"})," són arguments."]})]})}),t.jsx(j,{code:b1,label:"Exemples bàsics de funcions amb paràmetres",showLineNumbers:!0}),t.jsx(x,{variant:"warning",title:"Ordre i tipus dels arguments",children:t.jsxs("p",{children:["Quan cridem una funció, els arguments han de coincidir en ",t.jsx("strong",{children:"nombre"}),",",t.jsx("strong",{children:" ordre"})," i ",t.jsx("strong",{children:"tipus"})," amb els paràmetres declarats. Si no, Java donarà un error de compilació."]})}),t.jsx(j,{code:y1,label:"Funcions amb múltiples paràmetres",showLineNumbers:!0})]})}const w1=`public class Exemples {
    // Procediment: NO retorna res (void)
    static void saludar() {
        System.out.println("Hola, mon!");
        // No hi ha return (o bé: return; sense valor)
    }

    // Procediment amb paràmetre
    static void mostrarMissatge(String missatge) {
        System.out.println(">> " + missatge);
    }

    public static void main(String[] args) {
        saludar();                        // Hola, mon!
        mostrarMissatge("Benvingut!");    // >> Benvingut!
    }
}`,C1=`public class FuncionsAmbRetorn {
    // Retorna un int
    static int sumar(int a, int b) {
        return a + b;
    }

    // Retorna un double
    static double calcularMitjana(int a, int b) {
        return (a + b) / 2.0;
    }

    // Retorna un String
    static String obtenirSalutacio(String nom) {
        return "Hola, " + nom + "!";
    }

    // Retorna un booleà
    static boolean esMajorEdat(int edat) {
        return edat >= 18;
    }

    public static void main(String[] args) {
        int resultat = sumar(5, 3);
        System.out.println(resultat);              // 8

        double mitjana = calcularMitjana(7, 9);
        System.out.println(mitjana);               // 8.0

        String salut = obtenirSalutacio("Anna");
        System.out.println(salut);                 // Hola, Anna!

        boolean major = esMajorEdat(16);
        System.out.println(major);                 // false
    }
}`,E1=`static int valorAbsolut(int num) {
    if (num < 0) {
        return -num;    // Surt de la funció i retorna -num
    }
    return num;         // Surt de la funció i retorna num
}

// ATENCIÓ: després d'un return, el codi NO s'executa
static int exemple() {
    return 42;
    // System.out.println("Això mai s'executarà"); // ERROR de compilació!
}`,A1=`public class SenseParametres {
    // No rep cap dada d'entrada
    static void saludar() {
        System.out.println("Hola a tothom!");
    }

    // Retorna un valor però no rep paràmetres
    static int obtenirNumeroMagic() {
        return 42;
    }

    // Retorna la data actual (exemple conceptual)
    static String obtenirSalutacioGeneral() {
        return "Bon dia, benvingut al programa!";
    }

    public static void main(String[] args) {
        saludar();                                     // Hola a tothom!
        int num = obtenirNumeroMagic();
        System.out.println(num);                       // 42
        System.out.println(obtenirSalutacioGeneral()); // Bon dia, benvingut al programa!
    }
}`,R1=`public class AmbParametres {
    // Un paràmetre
    static double calcularIVA(double preu) {
        return preu * 0.21;
    }

    // Dos paràmetres
    static int sumar(int a, int b) {
        return a + b;
    }

    // Múltiples paràmetres de tipus diferents
    static String crearFitxa(String nom, int edat, String ciutat) {
        return nom + " (" + edat + " anys, " + ciutat + ")";
    }

    public static void main(String[] args) {
        System.out.println(calcularIVA(100.0));                  // 21.0
        System.out.println(sumar(5, 3));                         // 8
        System.out.println(crearFitxa("Marc", 22, "Barcelona")); // Marc (22 anys, Barcelona)
    }
}`,L1=`public class ExempleVarargs {
    // int... numeros = pot rebre 0, 1, 2 o més enters
    static int sumar(int... numeros) {
        int total = 0;
        for (int num : numeros) {
            total += num;
        }
        return total;
    }

    public static void main(String[] args) {
        System.out.println(sumar());           // 0
        System.out.println(sumar(5));          // 5
        System.out.println(sumar(1, 2, 3));    // 6
        System.out.println(sumar(1, 2, 3, 4, 5)); // 15
    }
}`,M1=`public class Calculadora {
    // Mètode STATIC: pertany a la classe
    // No necessita un objecte per ser cridat
    static int sumar(int a, int b) {
        return a + b;
    }

    static double arrelQuadrada(double num) {
        return Math.sqrt(num);
    }

    public static void main(String[] args) {
        // Es crida directament amb el nom de la classe (o sense si estem a la mateixa classe)
        int resultat = Calculadora.sumar(5, 3);
        System.out.println(resultat); // 8

        // Des de la mateixa classe, es pot ometre el nom:
        double arrel = arrelQuadrada(16);
        System.out.println(arrel);    // 4.0
    }
}`,k1=`public class Comptador {
    // Atribut d'instància
    private int valor;

    public Comptador(int valorInicial) {
        this.valor = valorInicial;
    }

    // Mètode d'INSTÀNCIA: pertany a l'objecte
    // Pot accedir a l'atribut 'valor' de l'objecte concret
    public void incrementar() {
        this.valor++;
    }

    public int obtenirValor() {
        return this.valor;
    }

    public void mostrar() {
        System.out.println("Valor: " + this.valor);
    }
}

// --- En una altra classe / main ---
public class Main {
    public static void main(String[] args) {
        // Cal crear un OBJECTE per cridar mètodes d'instància
        Comptador c1 = new Comptador(0);
        Comptador c2 = new Comptador(10);

        c1.incrementar();
        c1.incrementar();
        c1.mostrar(); // Valor: 2

        c2.incrementar();
        c2.mostrar(); // Valor: 11
    }
}`,N1=`// BONS noms de mètodes: verb + nom, camelCase
public double calcularMitjana(int[] notes) { ... }
public String obtenirNom() { ... }
public boolean esValid(String email) { ... }
public void mostrarResultats() { ... }
public int comptarParaules(String text) { ... }
public void afegirEstudiant(String nom) { ... }

// MALS noms de mètodes
public double Mitjana(int[] notes) { ... }     // Falta verb, comença amb majúscula
public String x() { ... }                      // Nom no descriptiu
public void fer_coses() { ... }                // snake_case en lloc de camelCase
public boolean check(String s) { ... }         // Massa genèric, paràmetre poc clar`;function T1(){return t.jsxs("div",{children:[t.jsx(w,{title:"Tipus de Funcions (Mètodes) en Java"}),t.jsx(x,{variant:"info",title:"Per què classificar les funcions?",children:t.jsxs("p",{children:["Les funcions (en Java es diuen ",t.jsx("strong",{children:"mètodes"}),") es poden classificar de diverses maneres: segons si ",t.jsx("strong",{children:"retornen un valor"})," o no, segons si reben ",t.jsx("strong",{children:"paràmetres"}),", i segons si són ",t.jsx("strong",{children:"estàtiques"})," o d'instància. Entendre aquestes classificacions ens ajuda a escriure codi més clar i organitzat."]})}),t.jsx(w,{title:"Classificació per Tipus de Retorn"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["La primera gran distinció és si la funció ",t.jsx("strong",{children:"retorna un valor"})," al codi que l'ha cridat, o si simplement ",t.jsx("strong",{children:"executa una acció"})," sense retornar res."]})}),t.jsxs(pe,{children:[t.jsxs($,{title:"void - No retorna res (Procediment)",variant:"blue",children:[t.jsxs("p",{style:{marginBottom:"10px"},children:["Les funcions ",t.jsx("code",{children:"void"})," executen una acció (imprimir, modificar dades...) però ",t.jsx("strong",{children:"no retornen cap valor"}),". No pots guardar el seu resultat en una variable."]}),t.jsx(j,{code:`static void saludar() {
    System.out.println("Hola!");
    // No hi ha return amb valor
}

// Crida:
saludar(); // Imprimeix "Hola!"
// int x = saludar(); // ERROR!`})]}),t.jsxs($,{title:"Amb retorn - Retorna un valor",variant:"good",children:[t.jsxs("p",{style:{marginBottom:"10px"},children:["Les funcions amb tipus de retorn (",t.jsx("code",{children:"int"}),", ",t.jsx("code",{children:"String"}),",",t.jsx("code",{children:" boolean"}),", ",t.jsx("code",{children:"double"}),"...) ",t.jsx("strong",{children:"retornen un valor"})," que es pot guardar en una variable."]}),t.jsx(j,{code:`static int sumar(int a, int b) {
    return a + b;
}

// Crida:
int resultat = sumar(5, 3);
System.out.println(resultat); // 8`})]})]}),t.jsx(j,{label:"Exemples de funcions void (procediments)",code:w1,showLineNumbers:!0}),t.jsx(j,{label:"Exemples de funcions amb retorn",code:C1,showLineNumbers:!0}),t.jsx(w,{title:"La Paraula Clau return"}),t.jsx(x,{variant:"info",title:"Com funciona return?",children:t.jsxs("p",{children:["La paraula clau ",t.jsx("code",{children:"return"})," fa dues coses: ",t.jsx("strong",{children:"1)"})," finalitza l'execució de la funció immediatament, i ",t.jsx("strong",{children:"2)"})," retorna el valor especificat al codi que ha cridat la funció. Després d'un ",t.jsx("code",{children:"return"}),", cap línia de codi dins la funció s'executarà."]})}),t.jsx(j,{label:"Comportament de return",code:E1,showLineNumbers:!0}),t.jsx(x,{variant:"warning",title:"Regles importants de return",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["Una funció amb tipus de retorn (no void) ",t.jsx("strong",{children:"ha de tenir"})," un ",t.jsx("code",{children:"return"})," en tots els camins possibles."]}),t.jsxs("li",{children:["El valor retornat ha de ser del ",t.jsx("strong",{children:"mateix tipus"})," que el declarat (o compatible)."]}),t.jsxs("li",{children:["En funcions ",t.jsx("code",{children:"void"}),", pots usar ",t.jsx("code",{children:"return;"})," (sense valor) per sortir anticipadament."]}),t.jsxs("li",{children:["El codi després d'un ",t.jsx("code",{children:"return"})," és ",t.jsx("strong",{children:"inassolible"})," i dona error de compilació."]})]})}),t.jsx(w,{title:"Classificació per Paràmetres"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Una altra forma de classificar les funcions és segons si reben ",t.jsx("strong",{children:"dades d'entrada"})," (paràmetres) o no. Els paràmetres permeten que la funció treballi amb valors diferents cada cop que es crida."]})}),t.jsx(j,{label:"Funcions sense paràmetres",code:A1,showLineNumbers:!0}),t.jsx(j,{label:"Funcions amb paràmetres",code:R1,showLineNumbers:!0}),t.jsx(w,{title:"Paràmetres Variables (Varargs)"}),t.jsx(x,{variant:"info",title:"Què són els varargs?",children:t.jsxs("p",{children:["Java permet definir funcions que accepten un ",t.jsx("strong",{children:"nombre variable de paràmetres"})," del mateix tipus. S'utilitza la sintaxi ",t.jsx("code",{children:"tipus... nom"}),". Internament, Java tracta els varargs com un ",t.jsx("strong",{children:"array"}),"."]})}),t.jsx(j,{label:"Exemple de varargs (int... numeros)",code:L1,showLineNumbers:!0}),t.jsx(x,{variant:"warning",title:"Restriccions dels varargs",children:t.jsxs("p",{children:["Els varargs han de ser l'",t.jsx("strong",{children:"últim paràmetre"})," de la funció i només pot haver-n'hi ",t.jsx("strong",{children:"un"})," per funció. Per exemple:",t.jsx("code",{children:" static void exemple(String prefix, int... numeros)"})," és vàlid, però ",t.jsx("code",{children:"static void exemple(int... a, int... b)"})," ",t.jsx("strong",{children:"NO"})," ho és."]})}),t.jsx(w,{title:"Classificació per Accés: static vs Instància"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["En Java, els mètodes poden ser ",t.jsx("strong",{children:"estàtics"})," (pertanyen a la classe) o d'",t.jsx("strong",{children:"instància"})," (pertanyen a un objecte concret). Aquesta distinció és fonamental en la Programació Orientada a Objectes."]})}),t.jsxs(pe,{children:[t.jsxs($,{title:"Mètodes static",variant:"blue",children:[t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px",marginBottom:"10px"},children:[t.jsxs("li",{children:["Pertanyen a la ",t.jsx("strong",{children:"classe"}),", no a un objecte"]}),t.jsxs("li",{children:["Es criden amb ",t.jsx("code",{children:"NomClasse.mètode()"})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"No"})," poden accedir a atributs d'instància (no-static)"]}),t.jsx("li",{children:"Ideals per a funcions utilitat (càlculs, conversions...)"})]}),t.jsx(j,{code:`// Exemples de Java:
Math.sqrt(16);     // 4.0
Math.max(5, 3);    // 5
Integer.parseInt("42"); // 42`})]}),t.jsxs($,{title:"Mètodes d'instància",variant:"good",children:[t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px",marginBottom:"10px"},children:[t.jsxs("li",{children:["Pertanyen a un ",t.jsx("strong",{children:"objecte"})," concret"]}),t.jsxs("li",{children:["Es criden amb ",t.jsx("code",{children:"objecte.mètode()"})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Poden"})," accedir a atributs d'instància amb ",t.jsx("code",{children:"this"})]}),t.jsx("li",{children:"Ideals quan el mètode necessita l'estat de l'objecte"})]}),t.jsx(j,{code:`// Exemples:
String nom = "Hola";
nom.length();        // 4
nom.toUpperCase();   // "HOLA"
nom.charAt(0);       // 'H'`})]})]}),t.jsx(j,{label:"Exemple de mètodes static",code:M1,showLineNumbers:!0}),t.jsx(j,{label:"Exemple de mètodes d'instància",code:k1,showLineNumbers:!0}),t.jsx(x,{variant:"info",title:"Quan usar static vs instància?",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Usa static"})," quan la funció no depengui de cap atribut d'objecte: funcions matemàtiques, utilitats, conversions, validacions pures."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Usa instància"})," quan la funció necessiti accedir o modificar les dades d'un objecte concret: getters, setters, mètodes que depenguin de l'estat."]}),t.jsxs("li",{children:["Als programes simples amb ",t.jsx("code",{children:"main"}),", solem usar ",t.jsx("code",{children:"static"})," perquè no creem objectes."]}),t.jsx("li",{children:"En POO, la majoria de mètodes són d'instància."})]})}),t.jsx(w,{title:"Nomenclatura: Funció vs Mètode vs Procediment"}),t.jsx(x,{variant:"explanation",title:"Per què tants noms?",children:t.jsxs("p",{children:["En el món de la programació s'utilitzen diferents termes per referir-se a blocs de codi reutilitzables. Depenent del llenguatge i del context, es fan servir noms diferents. En Java, el terme oficial és ",t.jsx("strong",{children:"mètode"}),", però és important conèixer la terminologia general."]})}),t.jsxs(ge,{children:[t.jsxs(N,{title:"Funció",variant:"blue",children:[t.jsxs("p",{children:["Terme ",t.jsx("strong",{children:"general"})," de programació. És un bloc de codi que rep dades, les processa i ",t.jsx("strong",{children:"retorna un valor"}),"."]}),t.jsx("p",{style:{marginTop:"8px"},children:"Llenguatges: C, Python, JavaScript, etc."}),t.jsx(j,{code:`// Concepte de "funció"
static int sumar(int a, int b) {
    return a + b; // Retorna un valor
}`})]}),t.jsxs(N,{title:"Procediment",variant:"yellow",children:[t.jsxs("p",{children:["Terme general per a un bloc de codi que executa una acció però ",t.jsx("strong",{children:"NO retorna cap valor"})," (void)."]}),t.jsx("p",{style:{marginTop:"8px"},children:"Llenguatges: Pascal, Ada, Visual Basic (Sub)."}),t.jsx(j,{code:`// Concepte de "procediment"
static void mostrarMenu() {
    System.out.println("1. Jugar");
    System.out.println("2. Sortir");
    // No retorna res
}`})]}),t.jsxs(N,{title:"Mètode",variant:"green",children:[t.jsxs("p",{children:["El nom que Java utilitza per a ",t.jsx("strong",{children:"TOTES"})," les funcions i procediments dins d'una classe. Tant si retornen valor com si no."]}),t.jsx("p",{style:{marginTop:"8px"},children:"Llenguatges: Java, C#, Ruby, etc. (POO)"}),t.jsx(j,{code:`// En Java, TOT són "mètodes"
class Exemple {
    void saludar() { ... }   // Mètode
    int sumar() { ... }      // Mètode
}`})]})]}),t.jsx(x,{variant:"success",title:"Conclusió",children:t.jsxs("p",{children:["En Java, tant les funcions (que retornen valor) com els procediments (void) s'anomenen ",t.jsx("strong",{children:"mètodes"}),`, ja que sempre estan dins d'una classe. A la pràctica, molts programadors diuen "funció" de manera informal, i està perfectament bé. L'important és entendre que en Java, el terme tècnicament correcte és `,t.jsx("strong",{children:"mètode"}),"."]})}),t.jsx(w,{title:"Convencions per Nomenar Mètodes"}),t.jsx(x,{variant:"info",title:"Regles de nomenclatura en Java",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["Utilitza ",t.jsx("strong",{children:"camelCase"}),": la primera paraula en minúscula, les següents amb majúscula inicial."]}),t.jsxs("li",{children:["Comença amb un ",t.jsx("strong",{children:"verb"})," que descrigui l'acció: ",t.jsx("code",{children:"calcular"}),", ",t.jsx("code",{children:"obtenir"}),", ",t.jsx("code",{children:"mostrar"}),", ",t.jsx("code",{children:"és"}),", ",t.jsx("code",{children:"té"}),"."]}),t.jsxs("li",{children:["Sigues ",t.jsx("strong",{children:"descriptiu"}),": el nom ha d'explicar què fa el mètode."]}),t.jsxs("li",{children:["Per booleans, usa prefixos com ",t.jsx("code",{children:"és"})," o ",t.jsx("code",{children:"té"}),": ",t.jsx("code",{children:"esValid()"}),", ",t.jsx("code",{children:"tePermisos()"}),"."]}),t.jsxs("li",{children:["Getters: ",t.jsx("code",{children:"getNom()"}),", ",t.jsx("code",{children:"getEdat()"}),". Setters: ",t.jsx("code",{children:"setNom()"}),", ",t.jsx("code",{children:"setEdat()"}),"."]})]})}),t.jsx(j,{label:"Bons i mals noms de mètodes",code:N1,showLineNumbers:!0}),t.jsx(w,{title:"Taula Resum de Tipus de Funcions"}),t.jsx(Z,{headers:["Classificació","Tipus","Descripció","Exemple"],rows:[{group:"Per tipus de retorn"},{cells:["Retorn","void (Procediment)","No retorna cap valor","static void saludar() { ... }"]},{cells:["Retorn","Amb retorn (Funció)","Retorna un valor del tipus declarat","static int sumar(int a, int b) { return a + b; }"]},{group:"Per paràmetres"},{cells:["Paràmetres","Sense paràmetres","No rep cap dada d'entrada","static void saludar() { ... }"]},{cells:["Paràmetres","Amb paràmetres","Rep una o més dades d'entrada","static int sumar(int a, int b) { ... }"]},{cells:["Paràmetres","Varargs","Rep un nombre variable de paràmetres","static int sumar(int... nums) { ... }"]},{group:"Per accés (static vs instància)"},{cells:["Accés","static","Pertany a la classe, es crida amb NomClasse.mètode()","static double arrel(double n) { ... }"]},{cells:["Accés","Instància","Pertany a l'objecte, es crida amb objecte.mètode()","public void mostrar() { ... }"]},{group:"Per nomenclatura"},{cells:["Nom","Funció","Retorna un valor (terme general)","int sumar(int a, int b)"]},{cells:["Nom","Procediment","No retorna valor / void (terme general)","void mostrarMenu()"]},{cells:["Nom","Mètode","Nom oficial en Java per a tot","Qualsevol funció/procediment en Java"]}]}),t.jsx(x,{variant:"success",title:"Resum Final",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["Les funcions ",t.jsx("code",{children:"void"})," executen accions sense retornar valor (procediments)."]}),t.jsxs("li",{children:["Les funcions amb tipus de retorn retornen un valor amb ",t.jsx("code",{children:"return"}),"."]}),t.jsx("li",{children:"Les funcions poden rebre 0, 1, o múltiples paràmetres (inclosos varargs)."}),t.jsxs("li",{children:["Els mètodes ",t.jsx("code",{children:"static"})," pertanyen a la classe; els d'instància pertanyen a l'objecte."]}),t.jsxs("li",{children:["En Java, tot són ",t.jsx("strong",{children:"mètodes"}),', però informalment diem "funció" o "procediment".']}),t.jsxs("li",{children:["Usa ",t.jsx("strong",{children:"camelCase"})," i comença els noms amb un ",t.jsx("strong",{children:"verb"})," descriptiu."]})]})})]})}const P1="_container_1pzke_1",_1="_title_1pzke_17",q1="_demosGrid_1pzke_33",O1="_demoBox_1pzke_45",I1="_demoTitle_1pzke_61",D1="_inputRow_1pzke_75",F1="_label_1pzke_89",z1="_input_1pzke_75",B1="_executeBtn_1pzke_139",U1="_result_1pzke_185",$1="_stepsContainer_1pzke_217",G1="_step_1pzke_217",V1="_stepVisible_1pzke_257",H1="_stepHighlight_1pzke_267",Q1="_sequence_1pzke_279",W1="_sequenceLabel_1pzke_301",J1="_placeholder_1pzke_315",Ee={container:P1,title:_1,demosGrid:q1,demoBox:O1,demoTitle:I1,inputRow:D1,label:F1,input:z1,executeBtn:B1,result:U1,stepsContainer:$1,step:G1,stepVisible:V1,stepHighlight:H1,sequence:Q1,sequenceLabel:W1,placeholder:J1};function K1(){const[e,r]=A.useState(""),[a,n]=A.useState(null),[i,s]=A.useState([]),[l,o]=A.useState(0),c=A.useRef([]),u=A.useCallback(()=>{c.current.forEach(y=>clearTimeout(y)),c.current=[]},[]);A.useEffect(()=>()=>u(),[u]);const m=y=>y<0?null:y===0||y===1?1:y*m(y-1),d=y=>{const g=[];if(y<=1)return g.push({text:`factorial(${y}) = ${y}`,isBase:!0}),g;for(let S=y;S>=2;S--)g.push({text:`factorial(${S}) = ${S} * factorial(${S-1})`,isBase:!1});g.push({text:"factorial(1) = 1  (cas base)",isBase:!0});let b=1;for(let S=2;S<=y;S++)b*=S,g.push({text:`factorial(${S}) = ${S} * ${b/S} = ${b}`,isBase:!1});return g},f=()=>{u(),o(0);const y=parseInt(e,10);if(isNaN(y)||y<0||y>12){n("Introdueix un numero entre 0 i 12"),s([]);return}const g=m(y);n(`${y}! = ${g}`);const b=d(y);s(b),b.forEach((S,h)=>{const p=setTimeout(()=>{o(v=>v+1)},(h+1)*300);c.current.push(p)})};return t.jsxs("div",{className:Ee.demoBox,children:[t.jsx("div",{className:Ee.demoTitle,children:"Factorial (n!)"}),t.jsxs("div",{className:Ee.inputRow,children:[t.jsx("span",{className:Ee.label,children:"n ="}),t.jsx("input",{type:"number",className:Ee.input,placeholder:"5",min:"0",max:"12",value:e,onChange:y=>r(y.target.value)}),t.jsx("button",{className:Ee.executeBtn,onClick:f,children:"Calcular"})]}),a&&t.jsx("div",{className:Ee.result,children:a}),i.length>0&&t.jsx("div",{className:Ee.stepsContainer,children:i.map((y,g)=>t.jsx("div",{className:`${Ee.step} ${g<l?Ee.stepVisible:""} ${y.isBase?Ee.stepHighlight:""}`,children:y.text},g))}),!a&&t.jsx("div",{className:Ee.placeholder,children:"Introdueix un valor i prem Calcular per veure els passos"})]})}function Y1(){const[e,r]=A.useState(""),[a,n]=A.useState(null),[i,s]=A.useState([]),l=u=>{if(u<=0)return 0;if(u===1)return 1;let m=0,d=1;for(let f=2;f<=u;f++){const y=m+d;m=d,d=y}return d},o=u=>{const m=[];for(let d=0;d<=u;d++)m.push(l(d));return m},c=()=>{const u=parseInt(e,10);if(isNaN(u)||u<0||u>20){n("Introdueix un numero entre 0 i 20"),s([]);return}const m=l(u);n(`fibonacci(${u}) = ${m}`),s(o(u))};return t.jsxs("div",{className:Ee.demoBox,children:[t.jsx("div",{className:Ee.demoTitle,children:"Fibonacci"}),t.jsxs("div",{className:Ee.inputRow,children:[t.jsx("span",{className:Ee.label,children:"Posicio n ="}),t.jsx("input",{type:"number",className:Ee.input,placeholder:"7",min:"0",max:"20",value:e,onChange:u=>r(u.target.value)}),t.jsx("button",{className:Ee.executeBtn,onClick:c,children:"Calcular"})]}),a&&t.jsx("div",{className:Ee.result,children:a}),i.length>0&&t.jsxs("div",{className:Ee.sequence,children:[t.jsx("span",{className:Ee.sequenceLabel,children:"Sequencia completa:"}),i.join(", ")]}),!a&&t.jsx("div",{className:Ee.placeholder,children:"Introdueix una posicio i prem Calcular"})]})}function X1(){return t.jsxs("div",{className:Ee.container,children:[t.jsx("div",{className:Ee.title,children:"Demo: Funcions Recursives"}),t.jsxs("div",{className:Ee.demosGrid,children:[t.jsx(K1,{}),t.jsx(Y1,{})]})]})}const Z1=`// Estructura general d'una funció recursiva
static tipusRetorn funcioRecursiva(parametres) {
    // 1. Cas base: condició de parada
    if (condicioParada) {
        return valorBase;
    }

    // 2. Cas recursiu: la funció es crida a si mateixa
    return funcioRecursiva(parametresModificats);
}`,ew=`public class Factorial {
    // Funció recursiva per calcular n!
    static long factorial(int n) {
        // Cas base: 0! = 1, 1! = 1
        if (n <= 1) {
            return 1;
        }
        // Cas recursiu: n! = n * (n-1)!
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        System.out.println("5! = " + factorial(5));  // 120
        System.out.println("10! = " + factorial(10)); // 3628800
    }
}`,tw=`public class Fibonacci {
    // Funció recursiva per obtenir el n-èssim número de Fibonacci
    static int fibonacci(int n) {
        // Cas base
        if (n <= 0) return 0;
        if (n == 1) return 1;

        // Cas recursiu: fib(n) = fib(n-1) + fib(n-2)
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static void main(String[] args) {
        // Mostrar els primers 10 números de Fibonacci
        for (int i = 0; i < 10; i++) {
            System.out.print(fibonacci(i) + " ");
        }
        // 0 1 1 2 3 5 8 13 21 34
    }
}`,rw=`public class SumaRecursiva {
    // Suma dels números de 1 fins a n
    static int sumaFins(int n) {
        if (n <= 0) return 0;       // Cas base
        return n + sumaFins(n - 1); // Cas recursiu
    }

    // Potència: base^exponent
    static long potencia(int base, int exponent) {
        if (exponent == 0) return 1;            // Cas base
        return base * potencia(base, exponent - 1); // Cas recursiu
    }

    public static void main(String[] args) {
        System.out.println("Suma 1..5: " + sumaFins(5));   // 15
        System.out.println("2^8: " + potencia(2, 8));      // 256
    }
}`;function aw(){return t.jsxs("div",{children:[t.jsx(w,{title:"Funcions Recursives"}),t.jsx(x,{variant:"info",title:"Què és la Recursivitat?",children:t.jsxs("p",{children:["La ",t.jsx("strong",{children:"recursivitat"})," és una tècnica on una funció es crida a si mateixa per resoldre un problema. Cada crida resol una part més petita del problema fins arribar a un ",t.jsx("strong",{children:"cas base"})," que atura la recursió."]})}),t.jsx(X1,{}),t.jsx(x,{variant:"explanation",title:"Els dos elements clau",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Cas base:"})," la condició que atura la recursió. Sense cas base, la funció es cridaria infinitament i provocaria un ",t.jsx("code",{children:"StackOverflowError"}),"."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Cas recursiu:"})," la funció es crida a si mateixa amb paràmetres més simples o més petits, acostant-se al cas base."]})]})}),t.jsx(j,{code:Z1,label:"Estructura d'una funció recursiva",showLineNumbers:!0}),t.jsx(Z,{headers:["Concepte","Descripció","Importància"],rows:[{cells:["Cas base","Condició de parada de la recursió","Obligatori per evitar bucle infinit"]},{cells:["Cas recursiu","La funció es crida amb dades més simples","Ha de convergir cap al cas base"]},{cells:["Pila de crides","Cada crida s'apila fins al cas base","Limitat per la memòria de la pila"]},{cells:["StackOverflowError","Error si no hi ha cas base o no convergeix","Cal evitar-lo sempre"]}]}),t.jsx(x,{variant:"success",title:"Factorial (n!)",children:t.jsxs("p",{children:["El factorial és l'exemple clàssic de recursivitat: ",t.jsx("code",{children:"n! = n * (n-1)!"})," amb cas base ",t.jsx("code",{children:"0! = 1"}),"."]})}),t.jsx(j,{code:ew,label:"Exemple: Factorial recursiu",showLineNumbers:!0}),t.jsx(x,{variant:"success",title:"Fibonacci",children:t.jsxs("p",{children:["La seqüència de Fibonacci es defineix com: ",t.jsx("code",{children:"fib(n) = fib(n-1) + fib(n-2)"}),", amb casos base ",t.jsx("code",{children:"fib(0) = 0"})," i ",t.jsx("code",{children:"fib(1) = 1"}),"."]})}),t.jsx(j,{code:tw,label:"Exemple: Fibonacci recursiu",showLineNumbers:!0}),t.jsx(x,{variant:"warning",title:"Eficiència de la recursió",children:t.jsxs("p",{children:["La versió recursiva de Fibonacci és molt ineficient perquè recalcula els mateixos valors moltes vegades. Per a valors grans de ",t.jsx("code",{children:"n"}),", és preferible utilitzar un enfocament iteratiu o ",t.jsx("strong",{children:"memoització"}),"."]})}),t.jsx(j,{code:rw,label:"Més exemples: Suma i Potència recursius",showLineNumbers:!0})]})}const nw=`public class Calculadora {
    // Funció sense paràmetres
    static void mostrarMenu() {
        System.out.println("=== CALCULADORA ===");
        System.out.println("1. Sumar");
        System.out.println("2. Restar");
        System.out.println("3. Multiplicar");
    }

    // Funcions amb paràmetres
    static int sumar(int a, int b) {
        return a + b;
    }

    static int restar(int a, int b) {
        return a - b;
    }

    static int multiplicar(int a, int b) {
        return a * b;
    }

    // Funció main: punt d'entrada del programa
    public static void main(String[] args) {
        // 1. Cridem la funció sense paràmetres
        mostrarMenu();

        // 2. Cridem les funcions amb paràmetres
        int resultat1 = sumar(10, 5);
        int resultat2 = restar(10, 5);
        int resultat3 = multiplicar(10, 5);

        // 3. Mostrem els resultats
        System.out.println("10 + 5 = " + resultat1);  // 15
        System.out.println("10 - 5 = " + resultat2);  // 5
        System.out.println("10 * 5 = " + resultat3);  // 50
    }
}`,iw=`public class GestorNotes {
    // Funció que rep un array i retorna la mitjana
    static double calcularMitjana(int[] notes) {
        int suma = 0;
        for (int nota : notes) {
            suma += nota;
        }
        return (double) suma / notes.length;
    }

    // Funció que determina si aprova
    static boolean aprova(double mitjana) {
        return mitjana >= 5.0;
    }

    // Funció que genera un missatge
    static String generarInforme(String nom, double mitjana, boolean haAprovat) {
        String estat = haAprovat ? "APROVAT" : "SUSPÈS";
        return nom + " - Mitjana: " + mitjana + " - " + estat;
    }

    public static void main(String[] args) {
        // Dades
        String alumne = "Maria";
        int[] notesAlumne = {7, 8, 5, 9, 6};

        // Flux: cridem funcions en cadena
        // Pas 1: Calcular mitjana
        double mitjana = calcularMitjana(notesAlumne);

        // Pas 2: Determinar si aprova
        boolean haAprovat = aprova(mitjana);

        // Pas 3: Generar informe amb els resultats anteriors
        String informe = generarInforme(alumne, mitjana, haAprovat);

        // Pas 4: Mostrar resultat final
        System.out.println(informe);
        // Maria - Mitjana: 7.0 - APROVAT
    }
}`,sw=`public class JocEndevinar {
    // Funció recursiva per comptar intents
    static int jugar(int numeroSecret, int intent, java.util.Scanner sc) {
        System.out.print("Endevina el número (1-100): ");
        int resposta = sc.nextInt();

        if (resposta == numeroSecret) {
            System.out.println("Correcte!");
            return intent;
        }

        // Donem una pista
        if (resposta < numeroSecret) {
            System.out.println("Massa petit!");
        } else {
            System.out.println("Massa gran!");
        }

        // Crida recursiva amb un intent més
        return jugar(numeroSecret, intent + 1, sc);
    }

    // Funció per generar número aleatori
    static int generarNumeroSecret() {
        return (int) (Math.random() * 100) + 1;
    }

    // Funció per mostrar el resultat
    static void mostrarResultat(int intents) {
        System.out.println("Has necessitat " + intents + " intents.");
        if (intents <= 5) {
            System.out.println("Excellent!");
        } else if (intents <= 10) {
            System.out.println("Molt bé!");
        } else {
            System.out.println("Pots millorar!");
        }
    }

    public static void main(String[] args) {
        java.util.Scanner scanner = new java.util.Scanner(System.in);

        // Pas 1: Generar número (funció sense params)
        int secret = generarNumeroSecret();

        // Pas 2: Jugar (funció recursiva amb params)
        int intents = jugar(secret, 1, scanner);

        // Pas 3: Mostrar resultat (funció amb param)
        mostrarResultat(intents);

        scanner.close();
    }
}`;function lw(){return t.jsxs("div",{children:[t.jsx(w,{title:"Cridar Funcions des del Main"}),t.jsx(x,{variant:"info",title:"El mètode main()",children:t.jsxs("p",{children:["El mètode ",t.jsx("code",{children:"public static void main(String[] args)"})," és el"," ",t.jsx("strong",{children:"punt d'entrada"})," de qualsevol programa Java. Des d'aquí cridem les nostres funcions per executar la lògica del programa. Les funcions han de ser"," ",t.jsx("code",{children:"static"})," per poder-les cridar des del ",t.jsx("code",{children:"main"})," sense crear objectes."]})}),t.jsx(x,{variant:"explanation",title:"Flux d'execució",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"1."})," El programa comença sempre al ",t.jsx("code",{children:"main()"}),"."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"2."}),` Quan es crida una funció, l'execució "salta" al cos de la funció.`]}),t.jsxs("li",{children:[t.jsx("strong",{children:"3."})," Un cop la funció acaba (amb ",t.jsx("code",{children:"return"})," o al final del bloc), l'execució torna al punt on es va cridar."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"4."})," El valor retornat es pot guardar en una variable o usar directament."]})]})}),t.jsx(x,{variant:"success",title:"Exemple 1: Calculadora",children:t.jsxs("p",{children:["Combina funcions sense paràmetres (menú) i amb paràmetres (operacions). El ",t.jsx("code",{children:"main"})," coordina el flux."]})}),t.jsx(j,{code:nw,label:"Exemple 1: Calculadora amb funcions",showLineNumbers:!0}),t.jsx(x,{variant:"success",title:"Exemple 2: Gestor de Notes",children:t.jsx("p",{children:"Mostra com encadenar crides a funcions: el resultat d'una funció es passa com a argument de la següent. Cada funció fa una tasca concreta."})}),t.jsx(j,{code:iw,label:"Exemple 2: Crides encadenades de funcions",showLineNumbers:!0}),t.jsx(x,{variant:"warning",title:"Bones pràctiques",children:t.jsxs("ul",{children:[t.jsxs("li",{children:["Cada funció ha de fer ",t.jsx("strong",{children:"una sola cosa"})," i fer-la bé."]}),t.jsxs("li",{children:["Dona noms ",t.jsx("strong",{children:"descriptius"})," a les funcions (verbs: calcular, obtenir, mostrar...)."]}),t.jsxs("li",{children:["El ",t.jsx("code",{children:"main"})," ha de ser ",t.jsx("strong",{children:"curt i clar"}),": coordina, no calcula."]}),t.jsx("li",{children:"Reutilitza funcions en lloc de copiar codi."})]})}),t.jsx(x,{variant:"success",title:"Exemple 3: Joc d'endevinar",children:t.jsx("p",{children:"Un exemple més complet que combina funcions sense paràmetres, amb paràmetres i recursivitat per crear un petit joc interactiu."})}),t.jsx(j,{code:sw,label:"Exemple 3: Combinant tots els tipus de funcions",showLineNumbers:!0})]})}const ow=`public class ResumComplet {
    // Array 1D
    static int[] crearArray() {
        return new int[]{1, 2, 3, 4, 5};
    }

    // Array 2D (Matriu)
    static int[][] crearMatriu() {
        return new int[][]{{1, 2}, {3, 4}};
    }

    // Funció sense paràmetres
    static String saludar() {
        return "Hola Mon!";
    }

    // Funció amb paràmetres
    static int sumar(int a, int b) {
        return a + b;
    }

    // Funció recursiva
    static long factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        int[] arr = crearArray();
        int[][] mat = crearMatriu();
        System.out.println(saludar());
        System.out.println(sumar(3, 4));
        System.out.println(factorial(5));
    }
}`;function cw(){return t.jsxs("div",{children:[t.jsx(w,{title:"Resum Comparatiu"}),t.jsx(x,{variant:"info",title:"Vista general",children:t.jsx("p",{children:"Aquí tens un resum de tots els conceptes tractats en aquesta secció: arrays unidimensionals, arrays bidimensionals (matrius), funcions sense paràmetres, funcions amb paràmetres i funcions recursives."})}),t.jsxs(ge,{children:[t.jsx(N,{title:"Arrays 1D",variant:"blue",children:t.jsxs("ul",{children:[t.jsx("li",{children:"Emmagatzemen múltiples valors del mateix tipus"}),t.jsx("li",{children:"Mida fixa definida en la creació"}),t.jsx("li",{children:"Accés per índex (base 0)"}),t.jsx("li",{children:t.jsx("code",{children:"int[] nums = new int[5];"})}),t.jsxs("li",{children:["Recorregut amb ",t.jsx("code",{children:"for"})," o ",t.jsx("code",{children:"for-each"})]}),t.jsxs("li",{children:[t.jsx("code",{children:".length"})," per obtenir la mida"]})]})}),t.jsx(N,{title:"Arrays 2D (Matrius)",variant:"yellow",children:t.jsxs("ul",{children:[t.jsx("li",{children:"Array d'arrays: files i columnes"}),t.jsxs("li",{children:["Accés amb doble índex: ",t.jsx("code",{children:"[fila][col]"})]}),t.jsx("li",{children:t.jsx("code",{children:"int[][] mat = new int[3][4];"})}),t.jsxs("li",{children:["Recorregut amb doble ",t.jsx("code",{children:"for"})]}),t.jsxs("li",{children:[t.jsx("code",{children:".length"})," = files, ",t.jsx("code",{children:"[0].length"})," = columnes"]}),t.jsx("li",{children:"Ús: taules de dades, taulers de joc"})]})}),t.jsx(N,{title:"Funcions sense Paràmetres",variant:"green",children:t.jsxs("ul",{children:[t.jsx("li",{children:"No reben cap dada d'entrada"}),t.jsxs("li",{children:["Poden retornar un valor o ser ",t.jsx("code",{children:"void"})]}),t.jsx("li",{children:t.jsx("code",{children:"static String saludar() {...}"})}),t.jsx("li",{children:"Ideals per accions autònomes"}),t.jsx("li",{children:"Exemples: mostrar menú, generar aleatori"}),t.jsxs("li",{children:["Es criden amb ",t.jsx("code",{children:"nomFunció()"})]})]})}),t.jsx(N,{title:"Funcions amb Paràmetres",variant:"pink",children:t.jsxs("ul",{children:[t.jsx("li",{children:"Reben dades d'entrada (paràmetres)"}),t.jsx("li",{children:"Més flexibles i reutilitzables"}),t.jsx("li",{children:t.jsx("code",{children:"static int sumar(int a, int b) {...}"})}),t.jsx("li",{children:"Arguments han de coincidir en tipus i ordre"}),t.jsx("li",{children:"Poden rebre arrays i objectes"}),t.jsxs("li",{children:["Crida: ",t.jsx("code",{children:"sumar(5, 3)"})]})]})}),t.jsx(N,{title:"Funcions Recursives",variant:"gold",children:t.jsxs("ul",{children:[t.jsx("li",{children:"La funció es crida a si mateixa"}),t.jsxs("li",{children:["Necessiten un ",t.jsx("strong",{children:"cas base"})," obligatori"]}),t.jsxs("li",{children:["El ",t.jsx("strong",{children:"cas recursiu"})," ha de convergir"]}),t.jsx("li",{children:"Exemples: factorial, fibonacci, potència"}),t.jsxs("li",{children:["Perill: ",t.jsx("code",{children:"StackOverflowError"})," sense cas base"]}),t.jsx("li",{children:"Alternativa: versió iterativa"})]})})]}),t.jsx(x,{variant:"explanation",title:"Comparativa ràpida",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Arrays"})," són per ",t.jsx("em",{children:"emmagatzemar dades"}),", les"," ",t.jsx("strong",{children:"funcions"})," són per ",t.jsx("em",{children:"processar-les"}),"."]}),t.jsxs("li",{children:["Les funcions ",t.jsx("strong",{children:"sense paràmetres"})," són més simples però menys flexibles que les funcions ",t.jsx("strong",{children:"amb paràmetres"}),"."]}),t.jsxs("li",{children:["La ",t.jsx("strong",{children:"recursivitat"})," és elegant però pot ser menys eficient que un bucle iteratiu per a problemes grans."]}),t.jsxs("li",{children:["Combinar arrays amb funcions és la clau per escriure programes ",t.jsx("strong",{children:"modulars i nets"}),"."]})]})}),t.jsx(j,{code:ow,label:"Exemple integrador: tots els conceptes junts",showLineNumbers:!0})]})}function uw(){return t.jsxs("div",{children:[t.jsx(w,{title:"Introducció a la Programació Orientada a Objectes (POO)"}),t.jsx(x,{variant:"info",title:"Què és la POO?",children:t.jsxs("p",{children:["La ",t.jsx("strong",{children:"Programació Orientada a Objectes (POO)"})," és un paradigma de programació que organitza el codi al voltant d'",t.jsx("strong",{children:"objectes"})," en lloc de funcions i lògica seqüencial. Un objecte és una representació d'una entitat del món real que té",t.jsx("strong",{children:" propietats"})," (atributs) i ",t.jsx("strong",{children:"comportaments"})," (mètodes)."]})}),t.jsx(w,{title:"Programació Procedural vs POO"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Fins ara hem programat de forma ",t.jsx("strong",{children:"procedural"}),": un conjunt d'instruccions que s'executen de dalt a baix, una darrere l'altra. Funciona per a programes petits, però a mesura que el programa creix, es torna difícil de mantenir i organitzar."]})}),t.jsxs(pe,{children:[t.jsxs($,{title:"Programació Procedural",variant:"bad",children:[t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[t.jsx("li",{children:"Codi seqüencial, de dalt a baix"}),t.jsx("li",{children:"Dades i funcions separades"}),t.jsx("li",{children:"Difícil de reutilitzar"}),t.jsx("li",{children:"Difícil de mantenir en projectes grans"}),t.jsx("li",{children:"Tot està barrejat en un sol fitxer"})]}),t.jsx(j,{code:`// Tot en un sol lloc
String nomCotxe = "Toyota";
int kmCotxe = 50000;
System.out.println(nomCotxe);
// ... 500 linies mes ...`})]}),t.jsxs($,{title:"Programació Orientada a Objectes",variant:"good",children:[t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[t.jsx("li",{children:"Codi organitzat en objectes"}),t.jsx("li",{children:"Dades i comportaments junts"}),t.jsx("li",{children:"Fàcil de reutilitzar"}),t.jsx("li",{children:"Fàcil de mantenir i escalar"}),t.jsx("li",{children:"Cada classe té la seva responsabilitat"})]}),t.jsx(j,{code:`// Organitzat en objectes
Cotxe toyota = new Cotxe("Toyota", 50000);
toyota.mostrarInfo();
// Clar, net, reutilitzable`})]})]}),t.jsx(w,{title:"Analogia: L'Edifici de La Salle"}),t.jsxs(x,{variant:"info",children:[t.jsxs("p",{children:["Imagina l'edifici de ",t.jsx("strong",{children:"La Salle"}),". L'edifici no és només un bloc de formigó; està organitzat en ",t.jsx("strong",{children:"plantes"}),", cada planta té ",t.jsx("strong",{children:"aules"}),", cada aula té",t.jsx("strong",{children:" cadires, taules, una pissarra"}),"... Cada element té les seves propietats i funcions."]}),t.jsxs("p",{style:{marginTop:"10px"},children:["En POO fem el mateix: en lloc de tenir tot el codi en un sol lloc, l'organitzem en",t.jsx("strong",{children:" classes"})," (els plànols) i creem ",t.jsx("strong",{children:"objectes"})," (les instàncies reals)."]})]}),t.jsx(j,{label:"L'edifici com a objectes",code:`// La classe es el planol
class Aula {
    String nom;
    int capacitat;
    boolean teProjector;

    void impartirClasse() {
        System.out.println("Classe a " + nom);
    }
}

// L'objecte es l'aula real
Aula aulaJava = new Aula();
aulaJava.nom = "Aula 201";
aulaJava.capacitat = 30;
aulaJava.teProjector = true;
aulaJava.impartirClasse();`}),t.jsx(w,{title:"Els 4 Pilars de la POO"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["La POO es fonamenta en ",t.jsx("strong",{children:"4 pilars"})," fonamentals que fan que el codi sigui organitzat, segur, reutilitzable i flexible."]})}),t.jsxs(ge,{children:[t.jsxs(N,{title:"Encapsulació",variant:"blue",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Amagar les dades internes"})," d'un objecte i controlar-ne l'accés mitjançant mètodes públics (getters i setters)."]}),t.jsx("p",{style:{marginTop:"8px"},children:"Com una càpsula de medicament: no veus el contingut, però funciona."}),t.jsx(j,{code:`private String nom;
public String getNom() {
    return nom;
}`})]}),t.jsxs(N,{title:"Herència",variant:"yellow",children:[t.jsxs("p",{children:["Una classe pot ",t.jsx("strong",{children:"heretar"})," atributs i mètodes d'una altra classe. Permet reutilitzar codi i crear jerarquies."]}),t.jsx("p",{style:{marginTop:"8px"},children:"Com un fill que hereta característiques dels pares."}),t.jsx(j,{code:`class Animal {
    void menjar() { ... }
}
class Gos extends Animal {
    void bordar() { ... }
}`})]}),t.jsxs(N,{title:"Polimorfisme",variant:"green",children:[t.jsxs("p",{children:["Un mateix mètode pot tenir ",t.jsx("strong",{children:"comportaments diferents"})," segons l'objecte que l'executa."]}),t.jsx("p",{style:{marginTop:"8px"},children:'Com el verb "parlar": un humà parla, un gos borda, un gat miola.'}),t.jsx(j,{code:`Animal a = new Gos();
a.ferSo(); // "Bup bup!"
Animal b = new Gat();
b.ferSo(); // "Miau!"`})]}),t.jsxs(N,{title:"Abstracció",variant:"pink",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Simplificar la complexitat"})," mostrant només el que és necessari i amagant els detalls interns d'implementació."]}),t.jsx("p",{style:{marginTop:"8px"},children:"Com conduir un cotxe: només uses el volant i pedals, no veus el motor."}),t.jsx(j,{code:`// No cal saber COM funciona
cotxe.arrencar();
cotxe.accelerar();
// Nomes cal saber QUE fa`})]})]}),t.jsx(x,{variant:"success",title:"Resum",children:t.jsx("p",{children:"La POO ens permet organitzar el codi de manera que reflecteixi el món real. Cada objecte té les seves dades i els seus comportaments, i els 4 pilars (encapsulació, herència, polimorfisme i abstracció) ens ajuden a crear codi net, segur, reutilitzable i fàcil de mantenir."})})]})}function dw(){return t.jsxs("div",{children:[t.jsx(w,{title:"Classe vs Objecte"}),t.jsx(x,{variant:"info",title:"Concepte fonamental",children:t.jsxs("p",{children:["La diferència entre ",t.jsx("strong",{children:"classe"})," i ",t.jsx("strong",{children:"objecte"})," és un dels conceptes més importants de la POO. Entendre-la bé és clau per dominar la programació orientada a objectes."]})}),t.jsx(w,{title:"Analogia: El Plànol i la Casa"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Imagina que vols construir una casa. Primer necessites un ",t.jsx("strong",{children:"plànol"})," (la classe) que descrigui com serà la casa: quantes habitacions tindrà, de quin color serà, quina superfície tindrà... Després, a partir d'aquest plànol, pots construir",t.jsx("strong",{children:" una o moltes cases"})," (els objectes). Cada casa pot tenir colors diferents, però totes segueixen el mateix plànol."]})}),t.jsxs(pe,{children:[t.jsx($,{title:"Classe (El Plànol)",variant:"blue",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[t.jsxs("li",{children:["És la ",t.jsx("strong",{children:"plantilla"})," o definició"]}),t.jsx("li",{children:"Descriu quins atributs i mètodes tindran els objectes"}),t.jsx("li",{children:"No ocupa espai en memòria (fins que es crea un objecte)"}),t.jsx("li",{children:"Es defineix un cop"}),t.jsxs("li",{children:["Utilitza la paraula clau ",t.jsx("code",{children:"class"})]})]})}),t.jsx($,{title:"Objecte (La Casa)",variant:"good",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[t.jsxs("li",{children:["És una ",t.jsx("strong",{children:"instància"})," concreta de la classe"]}),t.jsx("li",{children:"Té valors reals per a cada atribut"}),t.jsx("li",{children:"Ocupa espai en memòria"}),t.jsx("li",{children:"Se'n poden crear tants com es vulgui"}),t.jsxs("li",{children:["Es crea amb la paraula clau ",t.jsx("code",{children:"new"})]})]})})]}),t.jsx(w,{title:"Exemple: La Classe Cotxe"}),t.jsx(x,{variant:"info",children:t.jsxs("p",{children:["Vegem un exemple concret amb una classe ",t.jsx("code",{children:"Cotxe"}),". La classe defineix que tot cotxe té una marca, un model, un color i quilòmetres. Després podem crear tants cotxes com vulguem."]})}),t.jsx(j,{label:"Definició de la classe Cotxe (el plànol)",showLineNumbers:!0,code:`public class Cotxe {
    // Atributs (propietats del cotxe)
    String marca;
    String model;
    String color;
    int quilometres;

    // Metode per mostrar la informacio
    void mostrarInfo() {
        System.out.println("Cotxe: " + marca + " " + model);
        System.out.println("Color: " + color);
        System.out.println("Km: " + quilometres);
    }

    // Metode per conduir
    void conduir(int km) {
        quilometres += km;
        System.out.println("Has conduit " + km + " km amb el " + marca);
    }
}`}),t.jsx(w,{title:"Creació d'Objectes (Instanciació)"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["A partir de la classe ",t.jsx("code",{children:"Cotxe"}),", podem crear múltiples objectes. Cada objecte és independent i té els seus propis valors. Crear un objecte s'anomena ",t.jsx("strong",{children:"instanciar"}),"."]})}),t.jsx(j,{label:"Crear objectes a partir de la classe",showLineNumbers:!0,code:`public class Main {
    public static void main(String[] args) {
        // Crear el primer cotxe (instancia 1)
        Cotxe cotxe1 = new Cotxe();
        cotxe1.marca = "Toyota";
        cotxe1.model = "Corolla";
        cotxe1.color = "Vermell";
        cotxe1.quilometres = 15000;

        // Crear el segon cotxe (instancia 2)
        Cotxe cotxe2 = new Cotxe();
        cotxe2.marca = "BMW";
        cotxe2.model = "Serie 3";
        cotxe2.color = "Negre";
        cotxe2.quilometres = 30000;

        // Crear el tercer cotxe (instancia 3)
        Cotxe cotxe3 = new Cotxe();
        cotxe3.marca = "Seat";
        cotxe3.model = "Leon";
        cotxe3.color = "Blanc";
        cotxe3.quilometres = 5000;

        // Usar els objectes
        cotxe1.mostrarInfo();
        cotxe2.mostrarInfo();
        cotxe3.conduir(200);
    }
}`}),t.jsx(w,{title:"Resum Visual"}),t.jsxs(ge,{children:[t.jsxs(N,{title:"Classe",variant:"blue",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Què és?"})," La plantilla / plànol"]}),t.jsxs("p",{style:{marginTop:"6px"},children:[t.jsx("strong",{children:"Paraula clau:"})," ",t.jsx("code",{children:"class"})]}),t.jsx("p",{style:{marginTop:"6px"},children:t.jsx("strong",{children:"Exemple:"})}),t.jsx(j,{code:"class Cotxe { ... }"})]}),t.jsxs(N,{title:"Objecte",variant:"yellow",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Què és?"})," Una instància real de la classe"]}),t.jsxs("p",{style:{marginTop:"6px"},children:[t.jsx("strong",{children:"Paraula clau:"})," ",t.jsx("code",{children:"new"})]}),t.jsx("p",{style:{marginTop:"6px"},children:t.jsx("strong",{children:"Exemple:"})}),t.jsx(j,{code:"Cotxe c = new Cotxe();"})]}),t.jsxs(N,{title:"Atributs",variant:"green",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Què són?"})," Les propietats de l'objecte"]}),t.jsxs("p",{style:{marginTop:"6px"},children:[t.jsx("strong",{children:"Exemples:"})," marca, color, km"]}),t.jsx("p",{style:{marginTop:"6px"},children:t.jsx("strong",{children:"Accés:"})}),t.jsx(j,{code:'cotxe1.marca = "Toyota";'})]}),t.jsxs(N,{title:"Mètodes",variant:"pink",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Què són?"})," Les accions que pot fer l'objecte"]}),t.jsxs("p",{style:{marginTop:"6px"},children:[t.jsx("strong",{children:"Exemples:"})," mostrarInfo(), conduir()"]}),t.jsx("p",{style:{marginTop:"6px"},children:t.jsx("strong",{children:"Crida:"})}),t.jsx(j,{code:"cotxe1.mostrarInfo();"})]})]}),t.jsx(x,{variant:"warning",title:"Recorda",children:t.jsxs("p",{children:["Una classe per si sola ",t.jsx("strong",{children:"no fa res"}),". És com tenir un plànol sense construir la casa. Has de crear objectes (",t.jsx("code",{children:"new"}),") per poder treballar amb les dades i cridar els mètodes."]})})]})}function pw(){return t.jsxs("div",{children:[t.jsx(w,{title:"Modificadors d'Accés i Encapsulació"}),t.jsx(x,{variant:"info",title:"Què són els modificadors d'accés?",children:t.jsxs("p",{children:["Els ",t.jsx("strong",{children:"modificadors d'accés"})," són paraules clau que controlen la ",t.jsx("strong",{children:"visibilitat"})," dels atributs i mètodes d'una classe. Determinen qui pot accedir a cada part del codi. Són fonamentals per aplicar l'",t.jsx("strong",{children:"encapsulació"}),", un dels 4 pilars de la POO."]})}),t.jsx(w,{title:"Tipus de Modificadors"}),t.jsx(Z,{headers:["Modificador","Mateixa Classe","Mateix Paquet","Subclasse","Tothom"],rows:[{cells:["public","Sí","Sí","Sí","Sí"]},{cells:["protected","Sí","Sí","Sí","No"]},{cells:["(sense modificador)","Sí","Sí","No","No"]},{cells:["private","Sí","No","No","No"]}]}),t.jsxs(ge,{children:[t.jsxs(N,{title:"public",variant:"green",children:[t.jsxs("p",{children:["Accessible des de ",t.jsx("strong",{children:"qualsevol lloc"})," del programa."]}),t.jsx(j,{code:`public String nom;
public void saludar() { ... }`})]}),t.jsxs(N,{title:"private",variant:"pink",children:[t.jsxs("p",{children:["Només accessible dins de la ",t.jsx("strong",{children:"mateixa classe"}),"."]}),t.jsx(j,{code:`private int edat;
private void calcular() { ... }`})]}),t.jsxs(N,{title:"protected",variant:"yellow",children:[t.jsxs("p",{children:["Accessible dins del ",t.jsx("strong",{children:"mateix paquet"})," i per ",t.jsx("strong",{children:"subclasses"}),"."]}),t.jsx(j,{code:`protected double salari;
protected void processar() { ... }`})]}),t.jsxs(N,{title:"(default)",variant:"blue",children:[t.jsxs("p",{children:["Sense paraula clau. Accessible dins del ",t.jsx("strong",{children:"mateix paquet"}),"."]}),t.jsx(j,{code:`String ciutat;
void mostrar() { ... }`})]})]}),t.jsx(w,{title:"Encapsulació: Per què private?"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["L'",t.jsx("strong",{children:"encapsulació"})," consisteix a declarar els atributs com a ",t.jsx("code",{children:"private"})," i proporcionar mètodes ",t.jsx("code",{children:"public"})," (getters i setters) per accedir-hi de forma controlada. Així protegim les dades internes de l'objecte i evitem que es modifiquin de forma incorrecta."]})}),t.jsxs(pe,{children:[t.jsxs($,{title:"MALAMENT: Sense encapsulació",variant:"bad",children:[t.jsx("p",{children:"Atributs públics: qualsevol pot modificar-los sense control."}),t.jsx(j,{showLineNumbers:!0,code:`public class Persona {
    public String nom;
    public int edat; // Qualsevol pot posar -5!
}

// Des d'un altre lloc:
Persona p = new Persona();
p.edat = -50; // Error logic! No hi ha control
p.nom = "";   // Nom buit acceptat!`}),t.jsx(x,{variant:"error",children:t.jsx("p",{children:"No hi ha cap validació. Es poden assignar valors incorrectes."})})]}),t.jsxs($,{title:"BÉ: Amb encapsulació",variant:"good",children:[t.jsx("p",{children:"Atributs privats amb getters/setters que validen les dades."}),t.jsx(j,{showLineNumbers:!0,code:`public class Persona {
    private String nom;
    private int edat;

    // Getter
    public String getNom() {
        return nom;
    }

    // Setter amb validacio
    public void setEdat(int edat) {
        if (edat >= 0 && edat <= 150) {
            this.edat = edat;
        } else {
            System.out.println("Edat no valida");
        }
    }
}`}),t.jsx(x,{variant:"success",children:t.jsx("p",{children:"Les dades estan protegides i validades."})})]})]}),t.jsx(w,{title:"Getters i Setters"}),t.jsx(x,{variant:"info",children:t.jsxs("p",{children:["Els ",t.jsx("strong",{children:"getters"})," són mètodes que retornen el valor d'un atribut privat. Els ",t.jsx("strong",{children:"setters"})," són mètodes que permeten modificar el valor d'un atribut privat, habitualment amb validació."]})}),t.jsx(j,{label:"Exemple complet amb getters i setters",showLineNumbers:!0,code:`public class Alumne {
    // Atributs PRIVATS (encapsulats)
    private String nom;
    private int nota;
    private String curs;

    // GETTERS: per llegir els valors
    public String getNom() {
        return nom;
    }

    public int getNota() {
        return nota;
    }

    public String getCurs() {
        return curs;
    }

    // SETTERS: per modificar els valors amb validacio
    public void setNom(String nom) {
        if (nom != null && !nom.isEmpty()) {
            this.nom = nom;
        }
    }

    public void setNota(int nota) {
        if (nota >= 0 && nota <= 10) {
            this.nota = nota;
        } else {
            System.out.println("La nota ha de ser entre 0 i 10");
        }
    }

    public void setCurs(String curs) {
        this.curs = curs;
    }
}`}),t.jsx(j,{label:"Ús des del main",code:`public class Main {
    public static void main(String[] args) {
        Alumne a = new Alumne();

        a.setNom("Maria");
        a.setNota(9);
        a.setCurs("1r DAM");

        System.out.println(a.getNom());  // Maria
        System.out.println(a.getNota()); // 9

        a.setNota(15); // "La nota ha de ser entre 0 i 10"
        a.setNota(-3); // "La nota ha de ser entre 0 i 10"
    }
}`}),t.jsx(x,{variant:"success",title:"Convenció de noms",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Getter:"})," ",t.jsx("code",{children:"getAtribut()"})," - retorna el valor (per booleans: ",t.jsx("code",{children:"isAtribut()"}),")"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Setter:"})," ",t.jsx("code",{children:"setAtribut(valor)"})," - modifica el valor"]}),t.jsxs("li",{children:["Sempre comencen amb ",t.jsx("code",{children:"get"})," o ",t.jsx("code",{children:"set"})," seguit del nom de l'atribut amb la primera lletra en majúscula"]})]})})]})}function ms({code:e,language:r="java",label:a,defaultOpen:n=!1}){const[i,s]=A.useState(n);return t.jsxs("div",{style:{margin:"16px 0"},children:[t.jsx(it,{size:"small",variant:"secondary",onClick:()=>s(!i),children:i?"Amagar Codi":"Veure Codi"}),i&&t.jsx(j,{code:e,language:r,label:a})]})}function mw(){return t.jsxs("div",{children:[t.jsx(w,{title:"Constructors i la Paraula Clau this"}),t.jsx(x,{variant:"info",title:"Què és un constructor?",children:t.jsxs("p",{children:["Un ",t.jsx("strong",{children:"constructor"})," és un mètode especial que s'executa automàticament quan es crea un objecte amb ",t.jsx("code",{children:"new"}),". Serveix per ",t.jsx("strong",{children:"inicialitzar"})," els atributs de l'objecte amb valors inicials. El constructor té el ",t.jsx("strong",{children:"mateix nom que la classe"})," i ",t.jsx("strong",{children:"no té tipus de retorn"})," (ni tan sols ",t.jsx("code",{children:"void"}),")."]})}),t.jsx(w,{title:"Sintaxi del Constructor"}),t.jsx(j,{label:"Estructura bàsica d'un constructor",showLineNumbers:!0,code:`public class NomClasse {
    // Atributs
    private String atribut1;
    private int atribut2;

    // Constructor (mateix nom que la classe, sense tipus de retorn)
    public NomClasse(String atribut1, int atribut2) {
        this.atribut1 = atribut1;
        this.atribut2 = atribut2;
    }
}`}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Fixa't que el constructor ",t.jsx("strong",{children:"no té"})," ",t.jsx("code",{children:"void"})," ni cap altre tipus de retorn. Si hi poses ",t.jsx("code",{children:"void"}),", Java ho tractarà com un mètode normal, no com un constructor!"]})}),t.jsx(w,{title:"La Paraula Clau this"}),t.jsx(x,{variant:"info",children:t.jsxs("p",{children:["La paraula clau ",t.jsx("code",{children:"this"})," fa referència a l'",t.jsx("strong",{children:"objecte actual"}),". S'utilitza principalment quan el nom del paràmetre del constructor (o mètode) coincideix amb el nom de l'atribut de la classe."]})}),t.jsxs(pe,{children:[t.jsxs($,{title:"Sense this (problema)",variant:"bad",children:[t.jsx(j,{code:`public Cotxe(String marca) {
    marca = marca; // ERROR!
    // Assigna el parametre a si mateix
    // L'atribut NO es modifica
}`}),t.jsx(x,{variant:"error",children:t.jsx("p",{children:"Java no sap distingir entre l'atribut i el paràmetre. L'atribut queda sense valor."})})]}),t.jsxs($,{title:"Amb this (correcte)",variant:"good",children:[t.jsx(j,{code:`public Cotxe(String marca) {
    this.marca = marca; // CORRECTE!
    // this.marca = atribut de la classe
    // marca = parametre del constructor
}`}),t.jsx(x,{variant:"success",children:t.jsxs("p",{children:[t.jsx("code",{children:"this.marca"})," es refereix a l'atribut de l'objecte. ",t.jsx("code",{children:"marca"})," és el paràmetre."]})})]})]}),t.jsx(w,{title:"Exemple Complet"}),t.jsx(j,{label:"Classe Cotxe amb constructor",showLineNumbers:!0,code:`public class Cotxe {
    private String marca;
    private String model;
    private int quilometres;

    // Constructor: inicialitza l'objecte
    public Cotxe(String marca, String model, int quilometres) {
        this.marca = marca;
        this.model = model;
        this.quilometres = quilometres;
    }

    // Getters
    public String getMarca() { return marca; }
    public String getModel() { return model; }
    public int getQuilometres() { return quilometres; }

    // Metode
    public void mostrarInfo() {
        System.out.println(marca + " " + model + " - " + quilometres + " km");
    }
}`}),t.jsx(j,{label:"Crear objectes amb el constructor",code:`public class Main {
    public static void main(String[] args) {
        // Ara podem inicialitzar en UNA sola linia!
        Cotxe c1 = new Cotxe("Toyota", "Corolla", 15000);
        Cotxe c2 = new Cotxe("BMW", "Serie 3", 30000);

        c1.mostrarInfo(); // Toyota Corolla - 15000 km
        c2.mostrarInfo(); // BMW Serie 3 - 30000 km
    }
}`}),t.jsx(w,{title:"Sobrecàrrega de Constructors"}),t.jsx(x,{variant:"info",title:"Què és la sobrecàrrega?",children:t.jsxs("p",{children:["Una classe pot tenir ",t.jsx("strong",{children:"múltiples constructors"})," amb diferent nombre o tipus de paràmetres. Això s'anomena ",t.jsx("strong",{children:"sobrecàrrega de constructors"})," (constructor overloading). Java selecciona automàticament el constructor adequat segons els arguments que li passem."]})}),t.jsx(j,{label:"Sobrecàrrega de constructors",showLineNumbers:!0,code:`public class Cotxe {
    private String marca;
    private String model;
    private int quilometres;

    // Constructor 1: tots els parametres
    public Cotxe(String marca, String model, int quilometres) {
        this.marca = marca;
        this.model = model;
        this.quilometres = quilometres;
    }

    // Constructor 2: sense quilometres (per defecte 0)
    public Cotxe(String marca, String model) {
        this.marca = marca;
        this.model = model;
        this.quilometres = 0; // Valor per defecte
    }

    // Constructor 3: sense parametres (valors per defecte)
    public Cotxe() {
        this.marca = "Desconeguda";
        this.model = "Desconegut";
        this.quilometres = 0;
    }
}`}),t.jsx(j,{label:"Usar els diferents constructors",code:`Cotxe c1 = new Cotxe("Toyota", "Corolla", 15000); // Constructor 1
Cotxe c2 = new Cotxe("BMW", "Serie 3");             // Constructor 2
Cotxe c3 = new Cotxe();                             // Constructor 3`}),t.jsx(w,{title:"Errors Comuns"}),t.jsxs(ge,{children:[t.jsxs(N,{title:"Posar void al constructor",variant:"pink",children:[t.jsxs("p",{children:["Si afegeixes ",t.jsx("code",{children:"void"}),", Java ho tracta com un mètode normal, no com un constructor."]}),t.jsx(j,{code:`// MALAMENT:
public void Cotxe(String marca) {
    this.marca = marca;
}
// Aixo NO es un constructor!`})]}),t.jsxs(N,{title:"No usar this",variant:"pink",children:[t.jsxs("p",{children:["Si el paràmetre té el mateix nom que l'atribut i no uses ",t.jsx("code",{children:"this"}),", l'atribut no es modifica."]}),t.jsx(j,{code:`// MALAMENT:
public Cotxe(String marca) {
    marca = marca; // No fa res!
}
// BE:
public Cotxe(String marca) {
    this.marca = marca;
}`})]}),t.jsxs(N,{title:"Nom diferent de la classe",variant:"pink",children:[t.jsxs("p",{children:["El constructor ha de tenir ",t.jsx("strong",{children:"exactament"})," el mateix nom que la classe."]}),t.jsx(j,{code:`// MALAMENT:
public class Cotxe {
    public cotxe() { } // minuscula!
}
// BE:
public class Cotxe {
    public Cotxe() { } // Correcte
}`})]}),t.jsxs(N,{title:"Constructor per defecte",variant:"yellow",children:[t.jsx("p",{children:"Si no defineixes cap constructor, Java en crea un de buit automàticament. Però si defineixes un constructor amb paràmetres, el buit desapareix."}),t.jsx(j,{code:`// Si tens:
public Cotxe(String marca) { ... }

// Aleshores AIXO ja no funciona:
Cotxe c = new Cotxe(); // ERROR!
// Has d'afegir el constructor buit`})]})]}),t.jsx(ms,{label:"Exemple complet: Classe Estudiant amb sobrecàrrega",code:`public class Estudiant {
    private String nom;
    private int edat;
    private String curs;
    private double nota;

    // Constructor complet
    public Estudiant(String nom, int edat, String curs, double nota) {
        this.nom = nom;
        this.edat = edat;
        this.curs = curs;
        this.nota = nota;
    }

    // Constructor parcial (sense nota)
    public Estudiant(String nom, int edat, String curs) {
        this.nom = nom;
        this.edat = edat;
        this.curs = curs;
        this.nota = 0.0;
    }

    // Constructor minim
    public Estudiant(String nom) {
        this.nom = nom;
        this.edat = 0;
        this.curs = "No assignat";
        this.nota = 0.0;
    }

    // Constructor buit
    public Estudiant() {
        this.nom = "Desconegut";
        this.edat = 0;
        this.curs = "No assignat";
        this.nota = 0.0;
    }

    public void mostrarInfo() {
        System.out.println(nom + " | Edat: " + edat
            + " | Curs: " + curs + " | Nota: " + nota);
    }
}`}),t.jsx(x,{variant:"success",title:"Resum",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["El constructor inicialitza l'objecte quan es crea amb ",t.jsx("code",{children:"new"})]}),t.jsx("li",{children:"Té el mateix nom que la classe i no té tipus de retorn"}),t.jsxs("li",{children:[t.jsx("code",{children:"this"})," es refereix a l'objecte actual i diferencia atributs de paràmetres"]}),t.jsx("li",{children:"La sobrecàrrega permet múltiples constructors amb paràmetres diferents"})]})})]})}const hw=`// Classe PARE (superclasse)
public class Animal {
    protected String nom;
    protected int edat;

    public Animal(String nom, int edat) {
        this.nom = nom;
        this.edat = edat;
    }

    public void menjar() {
        System.out.println(nom + " esta menjant.");
    }

    public void dormir() {
        System.out.println(nom + " esta dormint.");
    }

    public void mostrarInfo() {
        System.out.println("Animal: " + nom + ", Edat: " + edat);
    }
}`,fw=`// Classe FILLA (subclasse) - hereta d'Animal
public class Gos extends Animal {

    private String raca;

    public Gos(String nom, int edat, String raca) {
        super(nom, edat);   // Crida al constructor del pare
        this.raca = raca;
    }

    // Metode propi del Gos (no existeix a Animal)
    public void bordar() {
        System.out.println(nom + " fa: Bup bup!");
    }
}

// Una altra classe filla
public class Gat extends Animal {

    private boolean esInterior;

    public Gat(String nom, int edat, boolean esInterior) {
        super(nom, edat);   // Crida al constructor del pare
        this.esInterior = esInterior;
    }

    // Metode propi del Gat
    public void miolar() {
        System.out.println(nom + " fa: Miau!");
    }
}`,xw=`public class Main {
    public static void main(String[] args) {
        Gos rex = new Gos("Rex", 5, "Pastor Alemany");
        Gat mia = new Gat("Mia", 3, true);

        // Metodes HERETATS d'Animal
        rex.menjar();       // Rex esta menjant.
        rex.dormir();       // Rex esta dormint.
        rex.mostrarInfo();  // Animal: Rex, Edat: 5

        mia.menjar();       // Mia esta menjant.
        mia.dormir();       // Mia esta dormint.

        // Metodes PROPIS de cada subclasse
        rex.bordar();       // Rex fa: Bup bup!
        mia.miolar();       // Mia fa: Miau!

        // ATENCIO: un Gos NO pot miolar, ni un Gat bordar
        // rex.miolar();    // ERROR de compilacio!
        // mia.bordar();    // ERROR de compilacio!
    }
}`,gw=`public class Animal {
    protected String nom;

    public Animal(String nom) {
        this.nom = nom;
        System.out.println("Constructor d'Animal: " + nom);
    }
}

public class Gos extends Animal {
    private String raca;

    public Gos(String nom, String raca) {
        super(nom);  // OBLIGATORI: crida al constructor del pare
                     // Ha de ser la PRIMERA instruccio del constructor
        this.raca = raca;
        System.out.println("Constructor de Gos: " + raca);
    }
}

// Quan creem un Gos:
Gos rex = new Gos("Rex", "Pastor Alemany");
// Imprimeix:
// Constructor d'Animal: Rex
// Constructor de Gos: Pastor Alemany`,vw=`public class Animal {
    protected String nom;

    public Animal(String nom) {
        this.nom = nom;
    }

    public void mostrarInfo() {
        System.out.println("Nom: " + nom);
    }
}

public class Gos extends Animal {
    private String raca;

    public Gos(String nom, String raca) {
        super(nom);
        this.raca = raca;
    }

    @Override
    public void mostrarInfo() {
        super.mostrarInfo();  // Crida al metode del pare
        System.out.println("Raca: " + raca);  // Afegeix info propia
    }
}

// Resultat:
Gos rex = new Gos("Rex", "Pastor Alemany");
rex.mostrarInfo();
// Nom: Rex
// Raca: Pastor Alemany`,jw=`public class Animal {
    protected String nom;

    public Animal(String nom) {
        this.nom = nom;
    }

    public void ferSoroll() {
        System.out.println(nom + " fa un soroll generic.");
    }
}

public class Gos extends Animal {
    public Gos(String nom) {
        super(nom);
    }

    @Override  // Indica que sobreescrivim un metode del pare
    public void ferSoroll() {
        System.out.println(nom + " fa: Bup bup!");
    }
}

public class Gat extends Animal {
    public Gat(String nom) {
        super(nom);
    }

    @Override
    public void ferSoroll() {
        System.out.println(nom + " fa: Miau!");
    }
}

// Cada animal fa el SEU soroll:
Animal a = new Animal("Animal");
Gos rex = new Gos("Rex");
Gat mia = new Gat("Mia");

a.ferSoroll();    // Animal fa un soroll generic.
rex.ferSoroll();  // Rex fa: Bup bup!
mia.ferSoroll();  // Mia fa: Miau!`,bw=`public class Animal {
    private String nom;        // Nomes visible dins d'Animal
    protected int edat;        // Visible a Animal i a les subclasses
    public String especie;     // Visible a tot arreu

    public Animal(String nom, int edat) {
        this.nom = nom;
        this.edat = edat;
    }

    // Getter public per accedir a 'nom' des de fora
    public String getNom() {
        return nom;
    }
}

public class Gos extends Animal {
    public Gos(String nom, int edat) {
        super(nom, edat);
    }

    public void mostrar() {
        // System.out.println(nom);   // ERROR! 'nom' es private
        System.out.println(getNom()); // OK - getter public
        System.out.println(edat);     // OK - 'edat' es protected
        System.out.println(especie);  // OK - 'especie' es public
    }
}`,yw=`// ============ CLASSE PARE ============
public class Vehicle {
    protected String marca;
    protected String model;
    protected int anyFabricacio;
    protected double velocitat;

    public Vehicle(String marca, String model, int anyFabricacio) {
        this.marca = marca;
        this.model = model;
        this.anyFabricacio = anyFabricacio;
        this.velocitat = 0;
    }

    public void accelerar(double increment) {
        this.velocitat += increment;
        System.out.println(marca + " " + model + " accelera a " + velocitat + " km/h");
    }

    public void frenar() {
        this.velocitat = 0;
        System.out.println(marca + " " + model + " s'ha aturat.");
    }

    public void mostrarInfo() {
        System.out.println("Vehicle: " + marca + " " + model + " (" + anyFabricacio + ")");
        System.out.println("Velocitat actual: " + velocitat + " km/h");
    }
}

// ============ SUBCLASSE COTXE ============
public class Cotxe extends Vehicle {
    private int numPortes;
    private boolean teAireCondicionat;

    public Cotxe(String marca, String model, int anyFabricacio,
                 int numPortes, boolean teAireCondicionat) {
        super(marca, model, anyFabricacio);
        this.numPortes = numPortes;
        this.teAireCondicionat = teAireCondicionat;
    }

    // Metode propi del Cotxe
    public void obrirMaleter() {
        System.out.println("Obrint el maleter del " + marca + " " + model);
    }

    @Override
    public void mostrarInfo() {
        super.mostrarInfo();  // Crida al metode del pare
        System.out.println("Portes: " + numPortes);
        System.out.println("Aire condicionat: " + (teAireCondicionat ? "Si" : "No"));
    }
}

// ============ SUBCLASSE MOTO ============
public class Moto extends Vehicle {
    private String tipusManillar;

    public Moto(String marca, String model, int anyFabricacio, String tipusManillar) {
        super(marca, model, anyFabricacio);
        this.tipusManillar = tipusManillar;
    }

    // Metode propi de la Moto
    public void ferCavallets() {
        if (velocitat > 0) {
            System.out.println(marca + " " + model + " fa cavallets!");
        } else {
            System.out.println("La moto ha d'estar en moviment per fer cavallets!");
        }
    }

    @Override
    public void mostrarInfo() {
        super.mostrarInfo();
        System.out.println("Tipus de manillar: " + tipusManillar);
    }
}`,Sw=`public class Main {
    public static void main(String[] args) {
        // Crear objectes
        Cotxe seat = new Cotxe("SEAT", "Ibiza", 2022, 5, true);
        Moto yamaha = new Moto("Yamaha", "MT-07", 2023, "Esportiu");

        // Metodes HERETATS de Vehicle
        seat.accelerar(60);        // SEAT Ibiza accelera a 60.0 km/h
        yamaha.accelerar(80);      // Yamaha MT-07 accelera a 80.0 km/h

        // Metodes PROPIS
        seat.obrirMaleter();       // Obrint el maleter del SEAT Ibiza
        yamaha.ferCavallets();     // Yamaha MT-07 fa cavallets!

        // Metode SOBREESCRIT (Override)
        System.out.println("--- Info Cotxe ---");
        seat.mostrarInfo();
        // Vehicle: SEAT Ibiza (2022)
        // Velocitat actual: 60.0 km/h
        // Portes: 5
        // Aire condicionat: Si

        System.out.println("--- Info Moto ---");
        yamaha.mostrarInfo();
        // Vehicle: Yamaha MT-07 (2023)
        // Velocitat actual: 80.0 km/h
        // Tipus de manillar: Esportiu

        // Frenar
        seat.frenar();             // SEAT Ibiza s'ha aturat.
        yamaha.frenar();           // Yamaha MT-07 s'ha aturat.
    }
}`;function ww(){return t.jsxs("div",{children:[t.jsx(w,{title:"Herència en Java"}),t.jsx(x,{variant:"info",title:"Què és l'herència?",children:t.jsxs("p",{children:["L'",t.jsx("strong",{children:"herència"})," és un dels pilars fonamentals de la Programació Orientada a Objectes. Permet que una classe ",t.jsx("strong",{children:"filla"})," (subclasse) hereti els atributs i mètodes d'una classe ",t.jsx("strong",{children:"pare"})," (superclasse). D'aquesta manera, podem ",t.jsx("strong",{children:"reutilitzar codi"})," i crear jerarquies de classes organitzades."]})}),t.jsxs(x,{variant:"explanation",title:"Analogia del món real",children:[t.jsxs("p",{children:["Pensa en els animals. Tots els animals comparteixen comportaments comuns:",t.jsx("strong",{children:" menjar"}),", ",t.jsx("strong",{children:"dormir"}),", ",t.jsx("strong",{children:"moure's"}),"... Però cada tipus d'animal té comportaments propis: un gos pot ",t.jsx("strong",{children:"bordar"}),", un gat pot ",t.jsx("strong",{children:"miolar"}),", un ocell pot ",t.jsx("strong",{children:"volar"}),"."]}),t.jsxs("p",{style:{marginTop:"8px"},children:['En lloc de repetir "menjar" i "dormir" a cada classe (Gos, Gat, Ocell...), definim aquests comportaments comuns a la classe ',t.jsx("strong",{children:"Animal"})," i fem que cada animal en concret els ",t.jsx("strong",{children:"hereti"}),"."]})]}),t.jsx(w,{title:"Terminologia"}),t.jsx(Z,{headers:["Terme","Altres noms","Descripció"],rows:[{cells:["Classe pare","Superclasse, classe base","La classe de la qual s'hereten atributs i mètodes"]},{cells:["Classe filla","Subclasse, classe derivada","La classe que hereta d'una altra i pot afegir funcionalitat pròpia"]},{cells:["extends","Paraula clau","S'utilitza per indicar que una classe hereta d'una altra"]},{cells:["super","Paraula clau","Permet accedir al constructor o mètodes de la classe pare"]},{cells:["@Override","Anotació","Indica que un mètode sobreescriu un mètode del pare"]}]}),t.jsx(w,{title:"Sintaxi Bàsica i Exemple"}),t.jsxs(x,{variant:"info",children:[t.jsxs("p",{children:["Per indicar que una classe hereta d'una altra, s'utilitza la paraula clau ",t.jsx("code",{children:"extends"}),":"]}),t.jsx("p",{style:{marginTop:"8px"},children:t.jsxs("code",{children:["public class Filla ",t.jsx("strong",{children:"extends"})," Pare ","{ ... }"]})})]}),t.jsx(j,{label:"Classe pare: Animal",code:hw,showLineNumbers:!0}),t.jsx(j,{label:"Classes filles: Gos i Gat",code:fw,showLineNumbers:!0}),t.jsx(j,{label:"Utilitzar l'herència",code:xw,showLineNumbers:!0}),t.jsx(x,{variant:"success",title:"Què ha passat?",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("code",{children:"Gos"})," i ",t.jsx("code",{children:"Gat"})," hereten ",t.jsx("code",{children:"menjar()"}),", ",t.jsx("code",{children:"dormir()"})," i ",t.jsx("code",{children:"mostrarInfo()"})," d'Animal ",t.jsx("strong",{children:"sense haver de reescriure el codi"}),"."]}),t.jsxs("li",{children:["Cada subclasse pot tenir ",t.jsx("strong",{children:"mètodes propis"})," (",t.jsx("code",{children:"bordar()"}),", ",t.jsx("code",{children:"miolar()"}),") que no existeixen al pare."]}),t.jsxs("li",{children:["Un ",t.jsx("code",{children:"Gos"})," no pot usar ",t.jsx("code",{children:"miolar()"})," perquè és exclusiu de ",t.jsx("code",{children:"Gat"}),"."]})]})}),t.jsx(w,{title:"La Paraula Clau super"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["La paraula clau ",t.jsx("code",{children:"super"})," serveix per accedir als membres de la classe ",t.jsx("strong",{children:"pare"})," des de la classe filla. Té dos usos principals:"]})}),t.jsxs(pe,{children:[t.jsxs($,{title:"super() - Cridar al constructor del pare",variant:"blue",children:[t.jsxs("p",{style:{marginBottom:"10px"},children:["S'utilitza dins del constructor de la classe filla per cridar al constructor de la classe pare. ",t.jsx("strong",{children:"Ha de ser la primera instrucció"})," del constructor."]}),t.jsx(j,{code:`public Gos(String nom, String raca) {
    super(nom);  // Crida Animal(String nom)
    this.raca = raca;
}`})]}),t.jsxs($,{title:"super.mètode() - Cridar un mètode del pare",variant:"good",children:[t.jsxs("p",{style:{marginBottom:"10px"},children:["S'utilitza per cridar un mètode de la classe pare, especialment quan la classe filla l'ha ",t.jsx("strong",{children:"sobreescrit"})," (override)."]}),t.jsx(j,{code:`@Override
public void mostrarInfo() {
    super.mostrarInfo(); // Crida el del pare
    System.out.println("Raca: " + raca);
}`})]})]}),t.jsx(j,{label:"Exemple de super() en constructors",code:gw,showLineNumbers:!0}),t.jsx(j,{label:"Exemple de super.mètode()",code:vw,showLineNumbers:!0}),t.jsx(x,{variant:"warning",title:"Regles de super()",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("code",{children:"super()"})," ha de ser la ",t.jsx("strong",{children:"primera instrucció"})," del constructor de la classe filla."]}),t.jsxs("li",{children:["Si el pare no té un constructor sense paràmetres, la classe filla ",t.jsx("strong",{children:"ha de cridar"})," ",t.jsx("code",{children:"super(...)"})," amb els arguments corresponents."]}),t.jsxs("li",{children:["Si no escrius ",t.jsx("code",{children:"super()"}),", Java l'afegeix automàticament (només si el pare té constructor sense paràmetres)."]})]})}),t.jsx(w,{title:"Sobreescriptura de Mètodes (@Override)"}),t.jsx(x,{variant:"info",title:"Què és la sobreescriptura?",children:t.jsxs("p",{children:["La ",t.jsx("strong",{children:"sobreescriptura"})," (override) permet que una classe filla",t.jsx("strong",{children:" redefineixi"})," un mètode que ha heretat del pare. La classe filla proporciona la seva pròpia implementació del mètode, substituint la del pare. L'anotació ",t.jsx("code",{children:"@Override"})," no és obligatòria, però és molt",t.jsx("strong",{children:" recomanable"})," perquè ajuda a detectar errors."]})}),t.jsx(j,{label:"Exemple de sobreescriptura: ferSoroll()",code:jw,showLineNumbers:!0}),t.jsx(x,{variant:"explanation",title:"Per què @Override és important?",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["Si escrius ",t.jsx("code",{children:"@Override"})," i el mètode NO existeix al pare, Java et donarà un ",t.jsx("strong",{children:"error de compilació"}),". Això evita errors per noms mal escrits."]}),t.jsxs("li",{children:["Fa el codi més ",t.jsx("strong",{children:"llegible"}),": queda clar que el mètode ve del pare."]}),t.jsxs("li",{children:["El mètode sobreescrit ha de tenir la ",t.jsx("strong",{children:"mateixa signatura"})," (nom, paràmetres i tipus de retorn) que el del pare."]})]})}),t.jsx(w,{title:"El Modificador d'Accés protected"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Quan treballem amb herència, el modificador d'accés ",t.jsx("code",{children:"protected"})," és molt útil. Permet que els atributs i mètodes siguin accessibles des de la",t.jsx("strong",{children:" mateixa classe"}),", les ",t.jsx("strong",{children:"subclasses"})," i les classes del",t.jsx("strong",{children:" mateix paquet"}),", però no des de classes externes."]})}),t.jsx(Z,{headers:["Modificador","Mateixa classe","Subclasse","Mateix paquet","Altres classes"],rows:[{cells:["private","Sí","No","No","No"]},{cells:["protected","Sí","Sí","Sí","No"]},{cells:["public","Sí","Sí","Sí","Sí"]}]}),t.jsx(j,{label:"Exemple d'accés protected en herència",code:bw,showLineNumbers:!0}),t.jsx(x,{variant:"info",title:"Quan usar protected?",children:t.jsxs("p",{children:["Usa ",t.jsx("code",{children:"protected"})," per als atributs que vols que les classes filles puguin accedir ",t.jsx("strong",{children:"directament"}),", sense necessitat de getters. Si vols més control i encapsulació, utilitza ",t.jsx("code",{children:"private"})," amb getters/setters ",t.jsx("code",{children:"public"})," o ",t.jsx("code",{children:"protected"}),"."]})}),t.jsx(w,{title:"Exemple Complet: Vehicle, Cotxe i Moto"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Vegem un exemple complet que combina tot el que hem après: herència,",t.jsx("code",{children:" super"}),", ",t.jsx("code",{children:"@Override"}),", atributs ",t.jsx("code",{children:"protected"}),", mètodes propis i mètodes heretats."]})}),t.jsx(j,{label:"Jerarquia completa: Vehicle → Cotxe, Moto",code:yw,showLineNumbers:!0}),t.jsx(j,{label:"Utilitzar la jerarquia de vehicles",code:Sw,showLineNumbers:!0}),t.jsx(w,{title:"Regles Importants de l'Herència en Java"}),t.jsx(x,{variant:"warning",title:"Regles clau que has de recordar",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Herència simple:"})," Java només permet heretar d'UNA sola classe. No es pot fer ",t.jsx("code",{children:"class A extends B, C"}),". (Les ",t.jsx("em",{children:"interfaces"})," permeten una alternativa, però és un tema més avançat.)"]}),t.jsxs("li",{style:{marginTop:"8px"},children:[t.jsx("strong",{children:"Totes les classes hereten d'Object:"})," Si una classe no té",t.jsx("code",{children:" extends"}),", Java automàticament fa que hereti de la classe ",t.jsx("code",{children:"Object"}),". Per això totes les classes tenen mètodes com ",t.jsx("code",{children:"toString()"}),",",t.jsx("code",{children:" equals()"}),", etc."]}),t.jsxs("li",{style:{marginTop:"8px"},children:[t.jsx("strong",{children:"Classes final:"})," Si una classe es declara ",t.jsx("code",{children:"final"}),",",t.jsx("strong",{children:" no pot ser heretada"}),". Per exemple, ",t.jsxs("code",{children:["final class Utilitats ","{ ... }"]})," no es pot estendre."]})]})}),t.jsxs(ge,{children:[t.jsx(N,{title:"Herència Simple",variant:"blue",children:t.jsx(j,{code:`// CORRECTE: una sola classe pare
class Gos extends Animal { }

// ERROR: multiples classes pare
class Gos extends Animal, Mascota { }
// Aixo NO es pot fer en Java!`})}),t.jsx(N,{title:"Totes hereten d'Object",variant:"yellow",children:t.jsx(j,{code:`// Aquestes dues declaracions son equivalents:
class Animal { }
class Animal extends Object { }

// Per aixo pots fer:
Animal a = new Animal();
a.toString();  // Heretat d'Object
a.equals(b);   // Heretat d'Object`})}),t.jsx(N,{title:"Classes final",variant:"green",children:t.jsx(j,{code:`// Aquesta classe NO es pot heretar
final class Constants {
    static final double PI = 3.14159;
}

// ERROR de compilacio!
class MesConstants extends Constants { }
// No es pot estendre una classe final`})})]}),t.jsx(x,{variant:"success",title:"Resum",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["L'herència permet que una classe filla hereti atributs i mètodes d'una classe pare amb ",t.jsx("code",{children:"extends"}),"."]}),t.jsxs("li",{children:[t.jsx("code",{children:"super()"})," crida al constructor del pare; ",t.jsx("code",{children:"super.mètode()"})," crida un mètode del pare."]}),t.jsxs("li",{children:[t.jsx("code",{children:"@Override"})," indica que la classe filla redefineix un mètode del pare."]}),t.jsxs("li",{children:[t.jsx("code",{children:"protected"})," fa que els atributs siguin accessibles des de les subclasses."]}),t.jsxs("li",{children:["Java només permet ",t.jsx("strong",{children:"herència simple"})," (un sol pare)."]}),t.jsxs("li",{children:["Totes les classes hereten implícitament de ",t.jsx("code",{children:"Object"}),"."]}),t.jsxs("li",{children:["Les classes ",t.jsx("code",{children:"final"})," no poden ser heretades."]})]})})]})}const Cw=`public class Main {
    public static void main(String[] args) {
        Gos rex = new Gos("Rex");
        Gat mia = new Gat("Mia");
        Ocell piu = new Ocell("Piu");

        // Sense polimorfisme, necessitem un metode per CADA tipus:
        ferSorollGos(rex);
        ferSorollGat(mia);
        ferSorollOcell(piu);
        // I si afegim 10 animals mes? 10 metodes mes...
    }

    static void ferSorollGos(Gos g) { g.ferSoroll(); }
    static void ferSorollGat(Gat g) { g.ferSoroll(); }
    static void ferSorollOcell(Ocell o) { o.ferSoroll(); }
}`,Ew=`public class Main {
    public static void main(String[] args) {
        // Polimorfisme: el tipus de la variable es Animal (pare)
        // pero l'objecte real es Gos, Gat, Ocell (fills)
        Animal rex = new Gos("Rex");
        Animal mia = new Gat("Mia");
        Animal piu = new Ocell("Piu");

        // UN SOL metode serveix per a TOTS els animals!
        ferSoroll(rex);   // Rex fa: Bup bup!
        ferSoroll(mia);   // Mia fa: Miau!
        ferSoroll(piu);   // Piu fa: Piu piu!
    }

    // Accepta QUALSEVOL Animal (Gos, Gat, Ocell, el que sigui)
    static void ferSoroll(Animal a) {
        a.ferSoroll();  // Java sap quin metode cridar!
    }
}`,Aw=`public class Animal {
    protected String nom;

    public Animal(String nom) {
        this.nom = nom;
    }

    public void ferSoroll() {
        System.out.println(nom + " fa un soroll generic.");
    }

    public String getNom() {
        return nom;
    }
}

public class Gos extends Animal {
    public Gos(String nom) {
        super(nom);
    }

    @Override
    public void ferSoroll() {
        System.out.println(nom + " fa: Bup bup!");
    }
}

public class Gat extends Animal {
    public Gat(String nom) {
        super(nom);
    }

    @Override
    public void ferSoroll() {
        System.out.println(nom + " fa: Miau!");
    }
}

public class Ocell extends Animal {
    public Ocell(String nom) {
        super(nom);
    }

    @Override
    public void ferSoroll() {
        System.out.println(nom + " fa: Piu piu!");
    }
}`,Rw=`// Tipus ESTATIC: Animal (el que diu la variable)
// Tipus DINAMIC: Gos (l'objecte REAL que hi ha dins)
Animal rex = new Gos("Rex");

// Java mira el tipus DINAMIC per decidir quin metode cridar
rex.ferSoroll();  // Rex fa: Bup bup!  (NO "soroll generic")

// El compilador mira el tipus ESTATIC per saber que es LEGAL
// rex.bordar();  // ERROR! Animal no te bordar()
//                   Tot i que l'objecte real es un Gos`,Lw=`public class Main {
    public static void main(String[] args) {
        // Un array d'Animals pot contenir QUALSEVOL subclasse
        Animal[] animals = new Animal[4];
        animals[0] = new Gos("Rex");
        animals[1] = new Gat("Mia");
        animals[2] = new Ocell("Piu");
        animals[3] = new Gos("Toby");

        // Recorrem amb UN SOL bucle, i cada animal fa el SEU soroll
        for (Animal a : animals) {
            a.ferSoroll();
        }
        // Rex fa: Bup bup!
        // Mia fa: Miau!
        // Piu fa: Piu piu!
        // Toby fa: Bup bup!
    }
}`,Mw=`import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Animal> animals = new ArrayList<>();
        animals.add(new Gos("Rex"));
        animals.add(new Gat("Mia"));
        animals.add(new Ocell("Piu"));

        // Funciona igual que amb arrays!
        for (Animal a : animals) {
            a.ferSoroll();
        }

        // Podem afegir mes animals sense canviar RES del codi
        animals.add(new Gat("Luna"));
        animals.add(new Ocell("Kiwi"));
    }
}`,kw=`public class Main {
    public static void main(String[] args) {
        Animal rex = new Gos("Rex");

        // Comprovem el tipus REAL de l'objecte
        if (rex instanceof Gos) {
            System.out.println("Es un gos!");     // Aixo s'executa
        }

        if (rex instanceof Animal) {
            System.out.println("Es un animal!");   // Aixo tambe! (Gos ES Animal)
        }

        if (rex instanceof Gat) {
            System.out.println("Es un gat!");      // Aixo NO s'executa
        }
    }
}`,Nw=`Animal rex = new Gos("Rex");

// rex.bordar();  // ERROR! El tipus estatic es Animal, no te bordar()

// Primer comprovem que realment es un Gos
if (rex instanceof Gos) {
    Gos gosRex = (Gos) rex;   // DOWNCASTING: Animal -> Gos
    gosRex.bordar();           // Ara si! Rex fa: Bup bup!
}

// PERILL: si fem casting sense comprovar...
// Gat gatFals = (Gat) rex;   // ClassCastException! rex NO es un Gat`,Tw=`// ============ CLASSES ============
public class Animal {
    protected String nom;
    protected int edat;

    public Animal(String nom, int edat) {
        this.nom = nom;
        this.edat = edat;
    }

    public void ferSoroll() {
        System.out.println(nom + " fa un soroll.");
    }

    public String descripcio() {
        return nom + " (" + edat + " anys)";
    }
}

public class Gos extends Animal {
    private String raca;

    public Gos(String nom, int edat, String raca) {
        super(nom, edat);
        this.raca = raca;
    }

    @Override
    public void ferSoroll() {
        System.out.println(nom + " fa: Bup bup!");
    }

    @Override
    public String descripcio() {
        return super.descripcio() + " - Gos, raca: " + raca;
    }

    public void buscarPilota() {
        System.out.println(nom + " busca la pilota!");
    }
}

public class Gat extends Animal {
    private boolean esInterior;

    public Gat(String nom, int edat, boolean esInterior) {
        super(nom, edat);
        this.esInterior = esInterior;
    }

    @Override
    public void ferSoroll() {
        System.out.println(nom + " fa: Miau!");
    }

    @Override
    public String descripcio() {
        return super.descripcio() + " - Gat " + (esInterior ? "interior" : "exterior");
    }

    public void ronronejar() {
        System.out.println(nom + " esta ronronejant...");
    }
}`,Pw=`// ============ VETERINARI ============
public class Veterinari {

    // Accepta QUALSEVOL animal gracies al polimorfisme
    public void revisarAnimal(Animal animal) {
        System.out.println("--- Revisant: " + animal.descripcio() + " ---");
        animal.ferSoroll();

        // Si necessitem algo especific del tipus real:
        if (animal instanceof Gos) {
            Gos gos = (Gos) animal;
            gos.buscarPilota();  // Comprovem reflexos
        } else if (animal instanceof Gat) {
            Gat gat = (Gat) animal;
            gat.ronronejar();    // Comprovem que esta relaxat
        }

        System.out.println("Revisio completada!\\n");
    }

    // Pot revisar una llista sencera d'animals
    public void revisarTots(ArrayList<Animal> animals) {
        System.out.println("=== JORNADA DE REVISIONS ===\\n");
        for (Animal a : animals) {
            revisarAnimal(a);
        }
        System.out.println("Total animals revisats: " + animals.size());
    }
}

// ============ MAIN ============
public class Main {
    public static void main(String[] args) {
        Veterinari vet = new Veterinari();

        ArrayList<Animal> pacients = new ArrayList<>();
        pacients.add(new Gos("Rex", 5, "Pastor Alemany"));
        pacients.add(new Gat("Mia", 3, true));
        pacients.add(new Gos("Toby", 2, "Golden Retriever"));
        pacients.add(new Gat("Luna", 7, false));

        vet.revisarTots(pacients);
    }
}`,_w=`=== JORNADA DE REVISIONS ===

--- Revisant: Rex (5 anys) - Gos, raca: Pastor Alemany ---
Rex fa: Bup bup!
Rex busca la pilota!
Revisio completada!

--- Revisant: Mia (3 anys) - Gat interior ---
Mia fa: Miau!
Mia esta ronronejant...
Revisio completada!

--- Revisant: Toby (2 anys) - Gos, raca: Golden Retriever ---
Toby fa: Bup bup!
Toby busca la pilota!
Revisio completada!

--- Revisant: Luna (7 anys) - Gat exterior ---
Luna fa: Miau!
Luna esta ronronejant...
Revisio completada!

Total animals revisats: 4`,qw=`public class Calculadora {

    // Sobrecàrrega: MATEIX nom, DIFERENTS parametres
    public int sumar(int a, int b) {
        return a + b;
    }

    public double sumar(double a, double b) {
        return a + b;
    }

    public int sumar(int a, int b, int c) {
        return a + b + c;
    }
}

// Exemples d'us:
Calculadora calc = new Calculadora();
calc.sumar(2, 3);          // Crida sumar(int, int) -> 5
calc.sumar(2.5, 3.1);      // Crida sumar(double, double) -> 5.6
calc.sumar(1, 2, 3);       // Crida sumar(int, int, int) -> 6`,Ow=`public class Animal {
    public void ferSoroll() {
        System.out.println("Soroll generic");
    }
}

public class Gos extends Animal {
    @Override  // Sobreescriptura: MATEIX nom, MATEIXOS parametres
    public void ferSoroll() {
        System.out.println("Bup bup!");
    }
}

// El metode que s'executa depen de l'objecte REAL:
Animal a = new Gos("Rex");
a.ferSoroll();  // "Bup bup!" (no "Soroll generic")`;function Iw(){return t.jsxs("div",{children:[t.jsx(w,{title:"Polimorfisme en Java"}),t.jsx(x,{variant:"info",title:"Què és el polimorfisme?",children:t.jsxs("p",{children:[t.jsx("strong",{children:"Polimorfisme"})," ve del grec: ",t.jsx("em",{children:"poli"})," (molts) + ",t.jsx("em",{children:"morphe"})," (forma). Significa que ",t.jsx("strong",{children:"un mateix mètode pot comportar-se de manera diferent"})," segons l'objecte que l'executa. És el tercer pilar de la POO, juntament amb l'encapsulació i l'herència."]})}),t.jsxs(x,{variant:"explanation",title:"Analogia del món real",children:[t.jsxs("p",{children:["Pensa en el botó ",t.jsx("strong",{children:'"Play"'})," del mòbil. El mateix botó fa coses diferents segons el context: a Spotify reprodueix música, a YouTube reprodueix un vídeo, a un podcast reprodueix àudio. El botó és el ",t.jsx("strong",{children:"mateix"})," (mateixa interfície), però el ",t.jsx("strong",{children:"comportament canvia"})," segons l'aplicació (l'objecte real)."]}),t.jsxs("p",{style:{marginTop:"8px"},children:["En Java passa igual: pots cridar ",t.jsx("code",{children:"ferSoroll()"})," sobre qualsevol ",t.jsx("code",{children:"Animal"}),", i cada animal farà el ",t.jsx("strong",{children:"seu propi soroll"}),"."]})]}),t.jsx(w,{title:"El Problema sense Polimorfisme"}),t.jsx(x,{variant:"warning",title:"Sense polimorfisme: codi repetitiu i rígid",children:t.jsxs("p",{children:["Imagina que tenim les classes ",t.jsx("code",{children:"Gos"}),", ",t.jsx("code",{children:"Gat"})," i ",t.jsx("code",{children:"Ocell"})," que ja coneixem de l'herència. Sense polimorfisme, cada vegada que volem fer una acció amb diferents tipus d'animals, necessitem un mètode específic per a ",t.jsx("strong",{children:"cada tipus"}),":"]})}),t.jsx(j,{label:"Sense polimorfisme: un mètode per cada tipus",code:Cw,showLineNumbers:!0}),t.jsx(x,{variant:"error",title:"Problemes d'aquest enfocament",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["Si afegim un nou animal (Serp, Peix...), hem d'afegir un ",t.jsx("strong",{children:"nou mètode"})," cada vegada."]}),t.jsxs("li",{children:["Si tenim 20 tipus d'animals, necessitem ",t.jsx("strong",{children:"20 mètodes"})," gairebé iguals."]}),t.jsxs("li",{children:["El codi és ",t.jsx("strong",{children:"repetitiu, fràgil i difícil de mantenir"}),"."]})]})}),t.jsx(w,{title:"La Solució: Polimorfisme"}),t.jsx(x,{variant:"info",children:t.jsxs("p",{children:["Recordem les classes d'herència. Cada animal sobreescriu (",t.jsx("code",{children:"@Override"}),") el mètode ",t.jsx("code",{children:"ferSoroll()"}),":"]})}),t.jsx(j,{label:"Classes amb herència i @Override (ja les coneixem!)",code:Aw,showLineNumbers:!0}),t.jsx(x,{variant:"success",title:"Ara ve la màgia del polimorfisme",children:t.jsxs("p",{children:["La clau: podem guardar un objecte ",t.jsx("code",{children:"Gos"})," dins d'una variable de tipus ",t.jsx("code",{children:"Animal"}),". Quan cridem ",t.jsx("code",{children:"ferSoroll()"}),", Java executarà el mètode del ",t.jsx("strong",{children:"Gos"}),", no el de l'Animal genèric."]})}),t.jsx(j,{label:"Amb polimorfisme: UN mètode per a TOTS",code:Ew,showLineNumbers:!0}),t.jsx(x,{variant:"success",title:"Què ha canviat?",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Un sol mètode"})," ",t.jsx("code",{children:"ferSoroll(Animal a)"})," serveix per a TOTS els animals."]}),t.jsxs("li",{children:["Si afegim un nou animal (",t.jsx("code",{children:"Serp"}),"), ",t.jsx("strong",{children:"no cal tocar"})," el mètode."]}),t.jsxs("li",{children:["Java decideix ",t.jsx("strong",{children:"automàticament"})," quin ",t.jsx("code",{children:"ferSoroll()"})," cridar segons l'objecte real."]})]})}),t.jsx(w,{title:"Tipus Estàtic vs Tipus Dinàmic"}),t.jsx(x,{variant:"explanation",title:"El concepte més important del polimorfisme",children:t.jsxs("p",{children:["Quan escrivim ",t.jsx("code",{children:'Animal rex = new Gos("Rex")'}),", la variable té",t.jsx("strong",{children:" dos tipus alhora"}),":"]})}),t.jsxs(pe,{children:[t.jsxs($,{title:"Tipus Estàtic (la variable)",variant:"blue",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Animal"}),' rex = new Gos("Rex");']}),t.jsxs("p",{style:{marginTop:"8px"},children:["El tipus que veu el ",t.jsx("strong",{children:"compilador"}),". Determina quins mètodes pots ",t.jsx("strong",{children:"cridar"})," (només els d'Animal)."]}),t.jsx("p",{style:{marginTop:"8px",fontStyle:"italic"},children:'"Què puc fer amb aquesta variable?"'})]}),t.jsxs($,{title:"Tipus Dinàmic (l'objecte real)",variant:"good",children:[t.jsxs("p",{children:["Animal rex = new ",t.jsx("strong",{children:"Gos"}),'("Rex");']}),t.jsxs("p",{style:{marginTop:"8px"},children:["El tipus real de l'objecte a ",t.jsx("strong",{children:"memòria"}),". Determina quina",t.jsx("strong",{children:" versió"})," del mètode s'executa."]}),t.jsx("p",{style:{marginTop:"8px",fontStyle:"italic"},children:'"Com es comporta realment?"'})]})]}),t.jsx(j,{label:"Tipus estàtic vs dinàmic en acció",code:Rw,showLineNumbers:!0}),t.jsx(x,{variant:"warning",title:"Regla d'or",children:t.jsxs("p",{children:["El ",t.jsx("strong",{children:"compilador"})," (tipus estàtic) decideix si el codi és ",t.jsx("strong",{children:"legal"}),".",t.jsx("br",{}),"La ",t.jsx("strong",{children:"JVM en execució"})," (tipus dinàmic) decideix quin mètode ",t.jsx("strong",{children:"s'executa"}),"."]})}),t.jsx(w,{title:"Polimorfisme amb Col·leccions"}),t.jsx(x,{variant:"info",title:"On brilla el polimorfisme",children:t.jsxs("p",{children:["La potència real del polimorfisme apareix quan treballem amb ",t.jsx("strong",{children:"col·leccions"}),". Un array o ArrayList de tipus ",t.jsx("code",{children:"Animal"})," pot contenir Gossos, Gats, Ocells...",t.jsx("strong",{children:" tots barrejats!"})]})}),t.jsx(j,{label:"Array polimòrfic",code:Lw,showLineNumbers:!0}),t.jsx(j,{label:"ArrayList polimòrfic",code:Mw,showLineNumbers:!0}),t.jsx(x,{variant:"success",title:"Per què és tan potent?",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["El ",t.jsx("strong",{children:"mateix bucle"})," funciona per a qualsevol animal, ara i en el futur."]}),t.jsxs("li",{children:["Si demà creem una classe ",t.jsx("code",{children:"Serp extends Animal"}),", el bucle ",t.jsx("strong",{children:"ja funciona"})," sense canvis."]}),t.jsxs("li",{children:["Això es diu ",t.jsx("strong",{children:"codi obert a l'extensió, tancat a la modificació"})," (principi Open/Closed)."]})]})}),t.jsx(w,{title:"instanceof i Casting"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["De vegades necessitem saber el ",t.jsx("strong",{children:"tipus real"})," d'un objecte per accedir a mètodes que ",t.jsx("strong",{children:"no existeixen a la classe pare"}),". Per això tenim",t.jsx("code",{children:" instanceof"})," i el ",t.jsx("strong",{children:"casting"}),"."]})}),t.jsx(j,{label:"instanceof: comprovar el tipus real",code:kw,showLineNumbers:!0}),t.jsx(j,{label:"Downcasting: convertir al tipus real",code:Nw,showLineNumbers:!0}),t.jsx(Z,{headers:["Concepte","Direcció","Exemple","Risc"],rows:[{cells:["Upcasting","Fill → Pare",'Animal a = new Gos("Rex")',"Cap (automàtic)"]},{cells:["Downcasting","Pare → Fill","Gos g = (Gos) animal","ClassCastException si el tipus no coincideix"]}]}),t.jsx(x,{variant:"warning",title:"Regla important",children:t.jsxs("p",{children:[t.jsx("strong",{children:"Sempre"})," comprova amb ",t.jsx("code",{children:"instanceof"})," abans de fer downcasting. Si no ho fas i el tipus no coincideix, el programa llançarà una",t.jsx("code",{children:" ClassCastException"})," en temps d'execució."]})}),t.jsx(w,{title:"Sobrecàrrega vs Sobreescriptura"}),t.jsx(x,{variant:"info",children:t.jsxs("p",{children:["Aquests dos conceptes es confonen sovint perquè els noms es semblen. Però són coses ",t.jsx("strong",{children:"molt diferents"}),":"]})}),t.jsxs(pe,{children:[t.jsxs($,{title:"Sobrecàrrega (Overload)",variant:"blue",children:[t.jsxs("p",{style:{marginBottom:"8px"},children:[t.jsx("strong",{children:"Mateixa classe"}),", mateix nom, ",t.jsx("strong",{children:"diferents paràmetres"}),". Es resol en temps de ",t.jsx("strong",{children:"compilació"}),"."]}),t.jsx(j,{code:`// 3 metodes amb el MATEIX nom
int sumar(int a, int b)
double sumar(double a, double b)
int sumar(int a, int b, int c)`})]}),t.jsxs($,{title:"Sobreescriptura (Override)",variant:"good",children:[t.jsxs("p",{style:{marginBottom:"8px"},children:[t.jsx("strong",{children:"Classe filla"}),", mateix nom, ",t.jsx("strong",{children:"mateixos paràmetres"}),". Es resol en temps d'",t.jsx("strong",{children:"execució"})," (polimorfisme!)."]}),t.jsx(j,{code:`// Pare i fill: MATEIX metode
class Animal { void ferSoroll() }
class Gos extends Animal {
    @Override void ferSoroll()
}`})]})]}),t.jsx(Z,{headers:["","Sobrecàrrega (Overload)","Sobreescriptura (Override)"],rows:[{cells:["On?","Mateixa classe","Classe filla"]},{cells:["Nom del mètode","Igual","Igual"]},{cells:["Paràmetres","Diferents","Iguals"]},{cells:["Quan es decideix","Compilació","Execució"]},{cells:["Anotació","Cap","@Override"]},{cells:["Relació amb herència","No en necessita","Requereix herència"]}]}),t.jsx(j,{label:"Exemple de sobrecàrrega",code:qw,showLineNumbers:!0}),t.jsx(j,{label:"Exemple de sobreescriptura",code:Ow,showLineNumbers:!0}),t.jsx(w,{title:"Exemple Complet: Clínica Veterinària"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Vegem un exemple complet que combina tot el que hem après: polimorfisme, col·leccions, ",t.jsx("code",{children:"instanceof"})," i downcasting. Una clínica veterinària que pot revisar ",t.jsx("strong",{children:"qualsevol tipus d'animal"})," sense saber per avançat quin tipus serà."]})}),t.jsx(j,{label:"Classes: Animal, Gos i Gat",code:Tw,showLineNumbers:!0}),t.jsx(j,{label:"Veterinari i Main: polimorfisme en acció",code:Pw,showLineNumbers:!0}),t.jsx(j,{label:"Sortida del programa",code:_w}),t.jsx(x,{variant:"success",title:"Per què funciona?",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["El ",t.jsx("code",{children:"Veterinari"})," treballa amb ",t.jsx("code",{children:"Animal"}),", sense saber si és un Gos o un Gat."]}),t.jsxs("li",{children:[t.jsx("code",{children:"descripcio()"})," i ",t.jsx("code",{children:"ferSoroll()"})," es comporten diferent per a cada animal (",t.jsx("strong",{children:"polimorfisme"}),")."]}),t.jsxs("li",{children:["Quan necessitem un mètode específic (",t.jsx("code",{children:"buscarPilota"}),", ",t.jsx("code",{children:"ronronejar"}),"), usem ",t.jsx("code",{children:"instanceof"})," + ",t.jsx("strong",{children:"downcasting"}),"."]}),t.jsxs("li",{children:["Si demà afegim una classe ",t.jsx("code",{children:"Conill"}),", el mètode ",t.jsx("code",{children:"revisarAnimal"})," ",t.jsx("strong",{children:"ja funciona"})," sense canvis!"]})]})}),t.jsx(w,{title:"Resum: Quan necessito polimorfisme?"}),t.jsx(x,{variant:"explanation",title:"Herència sola vs Polimorfisme: quina diferència hi ha?",children:t.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[t.jsxs("p",{children:["Amb ",t.jsx("strong",{children:"herència sola"}),", cada variable és del seu propi tipus. Gos és Gos, Gat és Gat. No es barregen:"]}),t.jsx(j,{code:`Gos rex = new Gos("Rex");      // Tipus Gos, objecte Gos
Gat mia = new Gat("Mia");      // Tipus Gat, objecte Gat
rex.dormir();                   // Heretat d'Animal. Aixo ja es herencia.`}),t.jsxs("p",{style:{marginTop:"12px"},children:["El ",t.jsx("strong",{children:"polimorfisme"})," apareix quan necessites ",t.jsx("strong",{children:"tractar objectes de tipus diferent com si fossin el mateix"}),". Usos típics:"]})]})}),t.jsx(x,{variant:"info",title:"Necessito polimorfisme quan...",children:t.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[t.jsx("p",{children:t.jsx("strong",{children:"Vull posar-los a la mateixa llista:"})}),t.jsx(j,{code:`// Gossos, gats i ocells junts en UNA sola llista
ArrayList<Animal> animals = new ArrayList<>();
animals.add(new Gos("Rex"));
animals.add(new Gat("Mia"));
animals.add(new Ocell("Piu"));`}),t.jsx("p",{style:{marginTop:"12px"},children:t.jsx("strong",{children:"Vull comptar-los, recorre'ls o fer algo amb tots sense importar el tipus:"})}),t.jsx(j,{code:`// Quants animals hi ha? M'es igual si son gossos o gats.
animals.size();  // 3

// Que facin soroll tots. Cada un fara el SEU.
for (Animal a : animals) {
    a.ferSoroll();
}`}),t.jsx("p",{style:{marginTop:"12px"},children:t.jsx("strong",{children:"Vull un mètode que accepti QUALSEVOL animal:"})}),t.jsx(j,{code:`// UN sol metode per a Gos, Gat, Ocell, Serp, el que sigui
public void revisar(Animal a) {
    a.ferSoroll();
    a.descripcio();
}
// Sense polimorfisme necessitaria: revisar(Gos g), revisar(Gat g)...`})]})}),t.jsx(x,{variant:"warning",title:"NO necessito polimorfisme quan...",children:t.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[t.jsx("p",{children:"Si mai barrejo tipus i cada variable és sempre del seu tipus concret, no cal polimorfisme. Només herència:"}),t.jsx(j,{code:`// Sempre treballo amb Gos com a Gos. Mai el barrego amb Gat.
Gos rex = new Gos("Rex");
rex.dormir();    // Heretat d'Animal (herencia)
rex.bordar();    // Propi de Gos

// Aixo funciona perfectament nomes amb herencia.
// No necessito polimorfisme.`})]})}),t.jsx(x,{variant:"success",title:"La clau per recordar-ho",children:t.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[t.jsxs("p",{style:{padding:"16px",background:"rgba(0,0,0,0.04)",borderRadius:"8px"},children:[t.jsx("strong",{children:"Herència"})," → Les classes filles ",t.jsx("strong",{children:"reutilitzen"})," codi del pare.",t.jsx("br",{}),t.jsx("strong",{children:"Polimorfisme"})," → El codi que ",t.jsx("strong",{children:"usa"})," aquestes classes pot tractar-les ",t.jsx("strong",{children:"totes igual"}),"."]}),t.jsxs("p",{style:{marginTop:"16px"},children:["El polimorfisme ",t.jsx("strong",{children:"no és una cosa separada"})," de l'herència. És una ",t.jsx("strong",{children:"conseqüència"}),": si tens herència i ",t.jsx("code",{children:"@Override"}),", el polimorfisme ja funciona. Només cal que facis servir el tipus del pare com a variable (",t.jsx("code",{children:"Animal a = new Gos()"}),") i Java fa la resta."]}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"12px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Upcasting"})," (",t.jsx("code",{children:"Animal a = new Gos()"}),"): automàtic i segur."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Downcasting"})," (",t.jsx("code",{children:"Gos g = (Gos) animal"}),"): manual, comprova amb ",t.jsx("code",{children:"instanceof"})," primer."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Sobrecàrrega"})," (Overload): mateixa classe, diferent signatura → compilació."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Sobreescriptura"})," (Override): classe filla, mateixa signatura → execució."]})]})]})})]})}const Dw=`public class Main {
    public static void main(String[] args) {
        // Amb herencia i polimorfisme, podem fer aixo:
        Animal rex = new Gos("Rex");
        Animal mia = new Gat("Mia");

        // Pero... tambe podem fer AIXO:
        Animal cosa = new Animal("???");
        cosa.ferSoroll();  // "??? fa un soroll generic."

        // Quin animal es "???"? No te sentit!
        // Un "Animal generic" no existeix al mon real.
        // Nomes existeixen gossos, gats, ocells... animals CONCRETS.
    }
}`,Fw=`// La paraula 'abstract' impedeix que es pugui fer new Animal()
public abstract class Animal {
    protected String nom;

    public Animal(String nom) {
        this.nom = nom;
    }

    // Metode ABSTRACTE: no te cos (no te { })
    // Cada fill ESTA OBLIGAT a implementar-lo
    public abstract void ferSoroll();

    // Metode NORMAL: te cos, funciona igual que sempre
    public String getNom() {
        return nom;
    }
}`,zw=`public class Gos extends Animal {
    public Gos(String nom) {
        super(nom);
    }

    @Override
    public void ferSoroll() {     // OBLIGATORI implementar-lo
        System.out.println(nom + " fa: Bup bup!");
    }
}

public class Gat extends Animal {
    public Gat(String nom) {
        super(nom);
    }

    @Override
    public void ferSoroll() {     // OBLIGATORI implementar-lo
        System.out.println(nom + " fa: Miau!");
    }
}

// Si una classe filla NO implementa ferSoroll():
// ERROR DE COMPILACIO! Java no ho permet.`,Bw=`public class Main {
    public static void main(String[] args) {
        // Animal cosa = new Animal("???");  // ERROR! No es pot instanciar
        //                                      una classe abstracta

        // Pero el polimorfisme segueix funcionant!
        Animal rex = new Gos("Rex");   // Tipus estatic: Animal
        Animal mia = new Gat("Mia");   // Tipus dinamic: Gat

        rex.ferSoroll();  // Rex fa: Bup bup!
        mia.ferSoroll();  // Mia fa: Miau!

        // Arrays i ArrayLists tambe funcionen igual:
        ArrayList<Animal> animals = new ArrayList<>();
        animals.add(new Gos("Toby"));
        animals.add(new Gat("Luna"));

        for (Animal a : animals) {
            a.ferSoroll();  // Polimorfisme!
        }
    }
}`,Uw=`public abstract class Animal {
    protected String nom;

    public Animal(String nom) {
        this.nom = nom;
    }

    // ABSTRACTE: sense cos, les filles l'han d'implementar
    public abstract void ferSoroll();
    public abstract String getTipus();

    // NORMAL: amb cos, les filles l'hereten (poden fer @Override si volen)
    public void dormir() {
        System.out.println(nom + " esta dormint. Zzz...");
    }

    public String getNom() {
        return nom;
    }
}`,$w=`public class Gos extends Animal {
    public Gos(String nom) {
        super(nom);
    }

    // Ha d'implementar TOTS els metodes abstractes:
    @Override
    public void ferSoroll() {
        System.out.println(nom + " fa: Bup bup!");
    }

    @Override
    public String getTipus() {
        return "Gos";
    }

    // dormir() i getNom() ja funcionen, els ha heretat!
    // Pot fer @Override si vol canviar el comportament:
    // @Override
    // public void dormir() {
    //     System.out.println(nom + " dorm al seu llit de gos.");
    // }
}`,Gw=`// ============ CLASSE ABSTRACTA ============
public abstract class Figura {
    protected String color;

    public Figura(String color) {
        this.color = color;
    }

    // Cada figura calcula l'area de manera DIFERENT
    // Per tant, es abstracte: no podem escriure un cos generic
    public abstract double calcularArea();

    // Cada figura calcula el perimetre de manera DIFERENT
    public abstract double calcularPerimetre();

    // Pero mostrar la info es IGUAL per a totes
    public void mostrarInfo() {
        System.out.println("Figura de color " + color);
        System.out.println("Area: " + calcularArea());
        System.out.println("Perimetre: " + calcularPerimetre());
    }
}`,Vw=`// ============ CERCLE ============
public class Cercle extends Figura {
    private double radi;

    public Cercle(String color, double radi) {
        super(color);
        this.radi = radi;
    }

    @Override
    public double calcularArea() {
        return Math.PI * radi * radi;    // Pi * r^2
    }

    @Override
    public double calcularPerimetre() {
        return 2 * Math.PI * radi;       // 2 * Pi * r
    }
}

// ============ RECTANGLE ============
public class Rectangle extends Figura {
    private double base;
    private double alcada;

    public Rectangle(String color, double base, double alcada) {
        super(color);
        this.base = base;
        this.alcada = alcada;
    }

    @Override
    public double calcularArea() {
        return base * alcada;            // base * alcada
    }

    @Override
    public double calcularPerimetre() {
        return 2 * (base + alcada);      // 2 * (base + alcada)
    }
}

// ============ TRIANGLE ============
public class Triangle extends Figura {
    private double base;
    private double alcada;
    private double costat1, costat2, costat3;

    public Triangle(String color, double base, double alcada,
                    double c1, double c2, double c3) {
        super(color);
        this.base = base;
        this.alcada = alcada;
        this.costat1 = c1;
        this.costat2 = c2;
        this.costat3 = c3;
    }

    @Override
    public double calcularArea() {
        return (base * alcada) / 2;      // (base * alcada) / 2
    }

    @Override
    public double calcularPerimetre() {
        return costat1 + costat2 + costat3;
    }
}`,Hw=`public class Main {
    public static void main(String[] args) {
        // No podem fer: Figura f = new Figura("Blau");  // ERROR!

        // Pero si podem usar polimorfisme:
        ArrayList<Figura> figures = new ArrayList<>();
        figures.add(new Cercle("Vermell", 5));
        figures.add(new Rectangle("Blau", 4, 6));
        figures.add(new Triangle("Verd", 3, 4, 3, 4, 5));

        // UN sol bucle calcula l'area de TOTES les figures
        double areaTotal = 0;
        for (Figura f : figures) {
            f.mostrarInfo();
            areaTotal += f.calcularArea();
            System.out.println();
        }

        System.out.println("Area total: " + areaTotal);
    }
}`,Qw=`Figura de color Vermell
Area: 78.53981633974483
Perimetre: 31.41592653589793

Figura de color Blau
Area: 24.0
Perimetre: 20.0

Figura de color Verd
Area: 6.0
Perimetre: 12.0

Area total: 108.53981633974483`,Ww=`com.veterinari/
  model/         <- Animal.java (abstracta), Gos.java, Gat.java
  controller/    <- Clinica.java
  view/          <- Menu.java
  main/          <- Main.java`,Jw=`// ============ MODEL: Animal.java (abstracta) ============
package model;

public abstract class Animal {
    private String nom;
    private int edat;

    public Animal(String nom, int edat) {
        this.nom = nom;
        this.edat = edat;
    }

    // ABSTRACTE: cada animal fa un soroll diferent
    // No puc escriure un cos que serveixi per a tots
    public abstract void ferSoroll();

    // ABSTRACTE: cada animal es descriu diferent
    public abstract String getDescripcio();

    // NORMAL: funciona IGUAL per a tots els animals
    public String getNom() { return nom; }
    public int getEdat() { return edat; }
}`,Kw=`// ============ MODEL: Gos.java ============
package model;

public class Gos extends Animal {
    private String raca;

    public Gos(String nom, int edat, String raca) {
        super(nom, edat);
        this.raca = raca;
    }

    @Override
    public void ferSoroll() {
        System.out.println(getNom() + " fa: Bup bup!");
    }

    @Override
    public String getDescripcio() {
        return getNom() + " (" + getEdat() + " anys) - Gos, raca: " + raca;
    }
}

// ============ MODEL: Gat.java ============
package model;

public class Gat extends Animal {
    private boolean esInterior;

    public Gat(String nom, int edat, boolean esInterior) {
        super(nom, edat);
        this.esInterior = esInterior;
    }

    @Override
    public void ferSoroll() {
        System.out.println(getNom() + " fa: Miau!");
    }

    @Override
    public String getDescripcio() {
        return getNom() + " (" + getEdat() + " anys) - Gat "
            + (esInterior ? "interior" : "exterior");
    }
}`,Yw=`// ============ CONTROLLER: Clinica.java ============
package controller;

import model.Animal;   // Importa el PARE, no Gos ni Gat!
import java.util.ArrayList;

public class Clinica {
    private ArrayList<Animal> pacients;  // Polimorfisme!

    public Clinica() {
        this.pacients = new ArrayList<>();
    }

    // Rep QUALSEVOL Animal: Gos, Gat, o el que sigui
    public void registrar(Animal animal) {
        pacients.add(animal);
    }

    public void revisarTots() {
        for (Animal a : pacients) {
            a.ferSoroll();  // Cada un fa el SEU soroll (polimorfisme)
        }
    }

    public int getTotalPacients() {
        return pacients.size();
    }

    public ArrayList<Animal> getPacients() {
        return pacients;
    }
}`,Xw=`// ============ VIEW: Menu.java ============
package view;

import model.Animal;
import controller.Clinica;
import java.util.Scanner;

public class Menu {
    private Scanner scanner;
    private Clinica clinica;

    public Menu(Clinica clinica) {
        this.scanner = new Scanner(System.in);
        this.clinica = clinica;
    }

    public void mostrarMenu() {
        int opcio;
        do {
            System.out.println("--- Clinica Veterinaria ---");
            System.out.println("1. Veure pacients");
            System.out.println("2. Fer soroll a tots");
            System.out.println("3. Total pacients");
            System.out.println("0. Sortir");
            opcio = scanner.nextInt();

            switch (opcio) {
                case 1:
                    for (Animal a : clinica.getPacients()) {
                        // getDescripcio() es polimorfic:
                        // cada animal retorna la SEVA descripcio
                        System.out.println(a.getDescripcio());
                    }
                    break;
                case 2:
                    clinica.revisarTots();
                    break;
                case 3:
                    System.out.println("Total: " + clinica.getTotalPacients());
                    break;
            }
        } while (opcio != 0);
    }
}`,Zw=`// ============ MAIN: Main.java ============
package main;

import model.Gos;   // Aqui SI importem els tipus concrets
import model.Gat;   // perque hem de crear objectes reals
import controller.Clinica;
import view.Menu;

public class Main {
    public static void main(String[] args) {
        Clinica clinica = new Clinica();

        // Creem objectes concrets (Gos, Gat)
        clinica.registrar(new Gos("Rex", 5, "Pastor Alemany"));
        clinica.registrar(new Gat("Mia", 3, true));
        clinica.registrar(new Gos("Toby", 2, "Golden"));

        Menu menu = new Menu(clinica);
        menu.mostrarMenu();
    }
}`;function eC(){return t.jsxs("div",{children:[t.jsx(w,{title:"Classes Abstractes en Java"}),t.jsx(x,{variant:"info",title:"On som?",children:t.jsxs("p",{children:["Fins ara hem après ",t.jsx("strong",{children:"herència"})," (reutilitzar codi del pare) i ",t.jsx("strong",{children:"polimorfisme"})," (tractar objectes fills com si fossin el pare). Ara veurem les ",t.jsx("strong",{children:"classes abstractes"}),", que completen la idea: classes que ",t.jsx("strong",{children:"no es poden instanciar"})," i que ",t.jsx("strong",{children:"obliguen"})," les filles a implementar certs mètodes."]})}),t.jsx(w,{title:"El Problema"}),t.jsx(x,{variant:"warning",title:"Alguna cosa no encaixa...",children:t.jsxs("p",{children:["Amb el que sabem d'herència i polimorfisme, podem crear objectes de la classe ",t.jsx("strong",{children:"pare"})," directament. Però... té sentit?"]})}),t.jsx(j,{label:"El problema: instanciar la classe pare",code:Dw,showLineNumbers:!0}),t.jsx(x,{variant:"error",title:"Per què és un problema?",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:['Un "Animal genèric" ',t.jsx("strong",{children:"no existeix"})," al món real. Existeixen gossos, gats, ocells... animals ",t.jsx("strong",{children:"concrets"}),"."]}),t.jsxs("li",{children:["El mètode ",t.jsx("code",{children:"ferSoroll()"}),' a la classe Animal diu "soroll genèric", que ',t.jsx("strong",{children:"no té sentit"}),"."]}),t.jsxs("li",{children:["Qualsevol programador podria fer ",t.jsx("code",{children:"new Animal()"})," per error i el programa compilaria sense problemes."]}),t.jsxs("li",{children:["Necessitem una manera de dir: ",t.jsx("strong",{children:'"Animal existeix com a concepte, però NO es pot crear directament"'}),"."]})]})}),t.jsx(w,{title:"La Solució: Classes Abstractes"}),t.jsxs(x,{variant:"success",title:"Què és una classe abstracta?",children:[t.jsxs("p",{children:["Una classe abstracta és una classe que ",t.jsx("strong",{children:"no es pot instanciar"})," (no pots fer ",t.jsx("code",{children:"new"}),"). Serveix com a ",t.jsx("strong",{children:"plantilla"})," per a les classes filles. Pot contenir:"]}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Mètodes abstractes"}),": sense cos, les filles ",t.jsx("strong",{children:"estan obligades"})," a implementar-los."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Mètodes normals"}),": amb cos, les filles els ",t.jsx("strong",{children:"hereten"})," com sempre."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Atributs"}),": funcionen igual que en qualsevol classe."]})]})]}),t.jsx(j,{label:"Classe abstracta Animal",code:Fw,showLineNumbers:!0}),t.jsx(j,{label:"Les classes filles implementen el mètode abstracte",code:zw,showLineNumbers:!0}),t.jsx(j,{label:"Utilitzar-ho: el polimorfisme segueix funcionant!",code:Bw,showLineNumbers:!0}),t.jsx(x,{variant:"success",title:"Què hem aconseguit?",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Ningú"})," pot fer ",t.jsx("code",{children:"new Animal()"})," per error. Java ho impedeix."]}),t.jsxs("li",{children:["Cada filla ",t.jsx("strong",{children:"està obligada"})," a implementar ",t.jsx("code",{children:"ferSoroll()"}),". Si no ho fa, error de compilació."]}),t.jsxs("li",{children:["El ",t.jsx("strong",{children:"polimorfisme segueix funcionant"})," exactament igual: ",t.jsx("code",{children:'Animal rex = new Gos("Rex")'}),"."]})]})}),t.jsx(w,{title:"Mètodes Abstractes vs Mètodes Normals"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Una classe abstracta pot tenir ",t.jsx("strong",{children:"els dos tipus"})," de mètodes alhora. Aquesta és la seva gran avantatge respecte a altres mecanismes."]})}),t.jsxs(pe,{children:[t.jsxs($,{title:"Mètode Abstracte",variant:"blue",children:[t.jsxs("p",{style:{marginBottom:"8px"},children:[t.jsx("strong",{children:"No té cos"})," (acaba amb ",t.jsx("code",{children:";"}),"). La classe filla",t.jsx("strong",{children:" ha d'implementar-lo obligatòriament"}),"."]}),t.jsx(j,{code:`// Sense claus { }, acaba amb ;
public abstract void ferSoroll();
public abstract String getTipus();

// "Jo no se COM fer-ho,
//  pero les meves filles SI"`})]}),t.jsxs($,{title:"Mètode Normal",variant:"good",children:[t.jsxs("p",{style:{marginBottom:"8px"},children:[t.jsx("strong",{children:"Té cos"})," (amb ",t.jsx("code",{children:"{ }"}),"). Les filles l'",t.jsx("strong",{children:"hereten"})," i poden fer ",t.jsx("code",{children:"@Override"})," si volen."]}),t.jsx(j,{code:`// Amb claus { }, te implementacio
public void dormir() {
    System.out.println(nom + " dorm.");
}

// "Jo SE com fer-ho, i les meves
//  filles ho hereten gratis"`})]})]}),t.jsx(j,{label:"Classe abstracta amb els dos tipus de mètodes",code:Uw,showLineNumbers:!0}),t.jsx(j,{label:"La filla implementa els abstractes i hereta els normals",code:$w,showLineNumbers:!0}),t.jsx(x,{variant:"warning",title:"Regles dels mètodes abstractes",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["Un mètode abstracte ",t.jsx("strong",{children:"no té cos"}),": acaba amb ",t.jsx("code",{children:";"})," en lloc de ",t.jsx("code",{children:"{ }"}),"."]}),t.jsxs("li",{children:["Si una classe té ",t.jsx("strong",{children:"almenys un"})," mètode abstracte, la classe ",t.jsx("strong",{children:"ha de ser abstracta"}),"."]}),t.jsxs("li",{children:["La classe filla ",t.jsx("strong",{children:"ha d'implementar TOTS"})," els mètodes abstractes del pare. Si no, la filla ",t.jsx("strong",{children:"també ha de ser abstracta"}),"."]}),t.jsxs("li",{children:["Els mètodes abstractes ",t.jsxs("strong",{children:["no poden ser ",t.jsx("code",{children:"private"})]})," (les filles han de poder veure'ls)."]})]})}),t.jsx(w,{title:"Exemple Complet: Figures Geomètriques"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:[`Les figures geomètriques són l'exemple perfecte de classes abstractes. Una "Figura" genèrica `,t.jsx("strong",{children:"no existeix"}),": existeixen cercles, rectangles i triangles. Totes les figures tenen àrea i perímetre, però",t.jsx("strong",{children:" cada una els calcula de forma diferent"}),"."]})}),t.jsx(j,{label:"Classe abstracta Figura",code:Gw,showLineNumbers:!0}),t.jsx(x,{variant:"info",title:"Fixa't en el disseny",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("code",{children:"calcularArea()"})," i ",t.jsx("code",{children:"calcularPerimetre()"})," són ",t.jsx("strong",{children:"abstractes"}),": cada figura els calcula diferent."]}),t.jsxs("li",{children:[t.jsx("code",{children:"mostrarInfo()"})," és ",t.jsx("strong",{children:"normal"}),": mostra la info de la mateixa manera per a totes les figures. A dins, crida els mètodes abstractes!"]})]})}),t.jsx(j,{label:"Cercle, Rectangle i Triangle",code:Vw,showLineNumbers:!0}),t.jsx(j,{label:"Main: polimorfisme amb figures",code:Hw,showLineNumbers:!0}),t.jsx(j,{label:"Sortida del programa",code:Qw}),t.jsx(x,{variant:"success",title:"Per què funciona tan bé?",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("code",{children:"new Figura()"}),' no es pot fer: no existeix una "figura genèrica".']}),t.jsxs("li",{children:["Cada subclasse ",t.jsx("strong",{children:"està obligada"})," a implementar ",t.jsx("code",{children:"calcularArea()"})," i ",t.jsx("code",{children:"calcularPerimetre()"}),"."]}),t.jsxs("li",{children:[t.jsx("code",{children:"mostrarInfo()"})," funciona per a ",t.jsx("strong",{children:"totes"})," les figures gràcies al polimorfisme."]}),t.jsxs("li",{children:["Si demà afegim ",t.jsx("code",{children:"Pentagon"}),", només cal crear la classe i implementar els 2 mètodes. ",t.jsx("strong",{children:"Res més canvia."})]})]})}),t.jsx(w,{title:"Tot Junt: Herència + Polimorfisme + Abstracta dins de MVC"}),t.jsx(x,{variant:"explanation",title:"On va cada cosa?",children:t.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[t.jsxs("p",{children:["Ja sabeu com funciona ",t.jsx("strong",{children:"MVC"})," (Model-Vista-Controlador) i ara coneixeu herència, polimorfisme i classes abstractes. Però... ",t.jsx("strong",{children:"com encaixen junts?"})]}),t.jsxs("p",{style:{marginTop:"8px"},children:["MVC et diu ",t.jsx("strong",{children:"on posar"})," cada fitxer (en quina carpeta).",t.jsx("br",{}),"Herència/polimorfisme/abstracta et diuen ",t.jsx("strong",{children:"com es relacionen"})," les classes entre elles."]}),t.jsx("p",{style:{marginTop:"8px"},children:t.jsx("strong",{children:"No competeixen. Es complementen."})})]})}),t.jsx(Z,{headers:["Concepte POO","On viu dins MVC","Per què"],rows:[{cells:["Classe abstracta + classes filles","Model","Representen les dades/entitats del domini (Animal, Gos, Gat...)"]},{cells:["Polimorfisme (ArrayList del tipus pare)","Controller","El controller treballa amb el tipus generic sense saber quin fill es"]},{cells:["Crear objectes concrets (new Gos)","Main o View","Algu ha de crear els objectes reals amb les dades de l'usuari"]}]}),t.jsx(x,{variant:"info",title:"Exemple: Clínica Veterinària amb MVC",children:t.jsxs("p",{children:["Vegem l'exemple de la clínica veterinària organitzat en MVC. Les ",t.jsx("strong",{children:"mateixes classes"})," que ja coneixem, però cadascuna al seu lloc:"]})}),t.jsx(j,{label:"Estructura de packages",code:Ww}),t.jsx(j,{label:"MODEL: La classe abstracta i les filles",code:Jw,showLineNumbers:!0}),t.jsx(j,{label:"MODEL: Les classes filles (Gos i Gat)",code:Kw,showLineNumbers:!0}),t.jsx(x,{variant:"success",title:"Fixa't: el Model conté tota la POO",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("code",{children:"Animal"})," és ",t.jsx("strong",{children:"abstracta"})," (no existeix un animal genèric)."]}),t.jsxs("li",{children:[t.jsx("code",{children:"Gos"})," i ",t.jsx("code",{children:"Gat"})," ",t.jsx("strong",{children:"hereten"})," amb ",t.jsx("code",{children:"extends"})," i fan ",t.jsx("code",{children:"@Override"}),"."]}),t.jsxs("li",{children:["Herència, polimorfisme i abstracció ",t.jsx("strong",{children:"viuen dins del Model"}),"."]})]})}),t.jsx(j,{label:"CONTROLLER: Treballa amb el tipus pare (polimorfisme)",code:Yw,showLineNumbers:!0}),t.jsx(x,{variant:"warning",title:"Fixa't: el Controller només coneix Animal",children:t.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[t.jsxs("p",{children:[t.jsx("code",{children:"Clinica"})," importa ",t.jsx("code",{children:"Animal"}),", ",t.jsx("strong",{children:"no"})," Gos ni Gat. L'",t.jsx("code",{children:"ArrayList<Animal>"})," pot contenir qualsevol fill. El mètode ",t.jsx("code",{children:"revisarTots()"})," crida",t.jsx("code",{children:" ferSoroll()"})," de cada animal ",t.jsx("strong",{children:"sense saber quin tipus és"}),". Això és polimorfisme pur."]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Si demà afegim ",t.jsx("code",{children:"Ocell"}),", el Controller ",t.jsx("strong",{children:"no canvia ni una línia"}),"."]})]})}),t.jsx(j,{label:"VIEW: Mostra dades per consola",code:Xw,showLineNumbers:!0}),t.jsx(j,{label:"MAIN: Crea objectes concrets i connecta les parts",code:Zw,showLineNumbers:!0}),t.jsx(x,{variant:"success",title:"Qui coneix quin tipus?",children:t.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[t.jsx(Z,{headers:["Capa","Coneix Gos/Gat?","Per què"],rows:[{cells:["Model (Animal, Gos, Gat)","Sí","Son les propies classes. Es defineixen aqui."]},{cells:["Controller (Clinica)","NO","Nomes coneix Animal. Treballa amb el tipus pare."]},{cells:["View (Menu)","NO","Mostra les dades que rep. No li importa el tipus concret."]},{cells:["Main","Sí","Ha de crear objectes reals: new Gos(...), new Gat(...)."]}]}),t.jsxs("p",{style:{marginTop:"12px",padding:"12px",background:"rgba(0,0,0,0.04)",borderRadius:"8px"},children:["Aquesta separació és la ",t.jsx("strong",{children:"potència real"})," de combinar MVC amb polimorfisme: el Controller i la View ",t.jsx("strong",{children:"no saben ni els importa"})," si treballen amb un Gos, un Gat o un Ocell que encara no existeix. Tot funciona gràcies al tipus pare ",t.jsx("code",{children:"Animal"}),"."]})]})}),t.jsx(w,{title:"Errors Comuns dels Principiants"}),t.jsx(Z,{headers:["Error","Què passa","Solució"],rows:[{cells:["Fer new d'una classe abstracta",'Error de compilació: "Cannot instantiate abstract class"',"Instancia una classe filla concreta: new Gos(), new Gat()"]},{cells:["No implementar tots els mètodes abstractes",'Error de compilació: "must implement abstract method"',"Implementa tots els mètodes abstractes del pare amb @Override"]},{cells:["Posar cos a un mètode abstracte",'Error de compilació: "abstract methods cannot have a body"',"Treu les claus { } i acaba amb ;"]},{cells:["Confondre abstract amb final",`abstract = "les filles han d'implementar". final = "ningú pot heretar"`,"Són oposats! Una classe no pot ser abstract i final alhora"]}]}),t.jsx(w,{title:"Resum: Herència, Polimorfisme i Classes Abstractes"}),t.jsx(x,{variant:"explanation",title:"Són tres coses diferents o són el mateix?",children:t.jsx("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:t.jsxs("p",{children:[t.jsx("strong",{children:"No són tres coses separades."})," Són ",t.jsx("strong",{children:"passos naturals d'un mateix camí"}),". Cada pas neix perquè l'anterior es queda curt. Vegem la història sencera:"]})})}),t.jsx(x,{variant:"info",title:'Pas 1: Herència — "No vull copiar codi"',children:t.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[t.jsxs("p",{children:["Tens ",t.jsx("code",{children:"Gos"}),", ",t.jsx("code",{children:"Gat"})," i ",t.jsx("code",{children:"Ocell"}),". Les tres classes tenen ",t.jsx("code",{children:"nom"}),", ",t.jsx("code",{children:"edat"}),",",t.jsx("code",{children:" dormir()"}),"... El ",t.jsx("strong",{children:"mateix codi repetit"})," tres vegades."]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Solució: crees ",t.jsx("code",{children:"Animal"})," amb el codi comú i les altres hereten amb ",t.jsx("code",{children:"extends"}),". ",t.jsx("strong",{children:"Ara el codi existeix UN sol cop."})]}),t.jsx(j,{code:`Gos rex = new Gos("Rex");
rex.dormir();  // Heretat d'Animal, no l'has hagut de reescriure`}),t.jsx("p",{style:{marginTop:"8px",fontStyle:"italic",opacity:.85},children:"Problema resolt. Pero al fer-ho, apareix un problema nou..."})]})}),t.jsx(x,{variant:"info",title:'Pas 2: Polimorfisme — "No vull un mètode per cada fill"',children:t.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[t.jsxs("p",{children:["Ara vols posar tots els animals en una ",t.jsx("strong",{children:"mateixa llista"}),", o fer un mètode que accepti ",t.jsx("strong",{children:"qualsevol animal"}),". Sense polimorfisme, necessites un mètode per a Gos, un per a Gat, un per a Ocell..."]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Però com que ja tens herència, Java et permet fer",t.jsx("code",{children:" Animal a = new Gos()"}),". Quan crides ",t.jsx("code",{children:"a.ferSoroll()"}),", Java executa el del Gos."]}),t.jsx(j,{code:`// Puc posar-los tots junts i tractar-los igual
ArrayList<Animal> animals = new ArrayList<>();
animals.add(new Gos("Rex"));
animals.add(new Gat("Mia"));

for (Animal a : animals) {
    a.ferSoroll();  // Cada un fa el SEU soroll
}`}),t.jsxs("p",{style:{marginTop:"8px"},children:[t.jsx("strong",{children:'El polimorfisme no és una cosa que "afegeixes". És una conseqüència natural de tenir herència + @Override.'})," Només cal que usis el tipus del pare com a variable."]}),t.jsx("p",{style:{marginTop:"8px",fontStyle:"italic",opacity:.85},children:"Genial, funciona. Pero ara apareix un altre problema..."})]})}),t.jsx(x,{variant:"info",title:'Pas 3: Classe Abstracta — "No puc escriure el codi al pare"',children:t.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[t.jsxs("p",{children:["Tot funciona. Però mira el mètode ",t.jsx("code",{children:"ferSoroll()"})," de la classe ",t.jsx("code",{children:"Animal"}),". ",t.jsx("strong",{children:"Què hi poses dins?"})]}),t.jsx(j,{code:`public class Animal {
    public void ferSoroll() {
        System.out.println(???);
        // "Bup bup"? No, aixo es de Gos.
        // "Miau"? No, aixo es de Gat.
        // "Soroll generic"? Aixo no significa res.
        // NO HI HA RES CORRECTE que puguis escriure aqui.
    }
}`}),t.jsxs("p",{style:{marginTop:"8px"},children:["A més, algú podria fer ",t.jsx("code",{children:'new Animal("???")'})," per error. Un animal genèric no existeix al món real."]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Solució: fas la classe i el mètode ",t.jsx("code",{children:"abstract"}),". Ara:"]}),t.jsx(j,{code:`public abstract class Animal {
    // No te cos. Cada fill l'HA D'IMPLEMENTAR.
    public abstract void ferSoroll();

    // Aquest SI te cos, perque TOTS dormen igual
    public void dormir() {
        System.out.println(nom + " dorm. Zzz...");
    }
}`}),t.jsxs("p",{style:{marginTop:"8px"},children:[t.jsx("strong",{children:"La classe abstracta no és una cosa nova. És una restricció que afegeixes a l'herència"}),' per dir: "aquesta classe no es pot instanciar, i els fills estan obligats a implementar certs mètodes".']})]})}),t.jsx(x,{variant:"warning",title:"Com decideixo què necessito? Tres preguntes.",children:t.jsx("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:t.jsx(Z,{headers:["Pregunta","Si la resposta és SÍ...","Què fas"],rows:[{cells:["Les classes comparteixen codi?","Estàs copiant els mateixos atributs i mètodes","Herència (extends)"]},{cells:["Necessito barrejar-los o tractar-los igual?","Vull una llista de tots, o un mètode que accepti qualsevol","Polimorfisme (Animal a = new Gos())"]},{cells:["Puc escriure el codi del mètode al pare?","No hi ha res correcte que serveixi per a tots els fills","Mètode abstracte → classe abstracta"]}]})})}),t.jsx(x,{variant:"success",title:"Tot junt: un camí, tres passos",children:t.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[t.jsxs("p",{children:["No són tres eines separades que tries d'un calaix. Són ",t.jsx("strong",{children:"capes d'una mateixa idea"})," que es construeixen l'una sobre l'altra:"]}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["Sense ",t.jsx("strong",{children:"herència"}),", no hi ha polimorfisme ni classes abstractes."]}),t.jsxs("li",{children:["Sense ",t.jsx("strong",{children:"@Override"}),", el polimorfisme no fa res útil."]}),t.jsxs("li",{children:["Sense la necessitat de ",t.jsx("strong",{children:"protegir el pare"}),", no calen classes abstractes."]})]}),t.jsxs("p",{style:{marginTop:"16px",padding:"16px",background:"rgba(0,0,0,0.04)",borderRadius:"8px"},children:[t.jsx("strong",{children:"Herència"}),' → "No vull copiar codi"',t.jsx("br",{}),t.jsx("strong",{children:"Polimorfisme"}),` → "Vull tractar-los a tots igual" (conseqüència de l'herència)`,t.jsx("br",{}),t.jsx("strong",{children:"Classe abstracta"}),` → "No puc escriure el codi al pare i no vull que l'instanciïn" (restricció sobre l'herència)`]}),t.jsx("p",{style:{marginTop:"16px"},children:"I per als mètodes, la regla és simple:"}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Puc escriure un cos que serveixi per a tots?"})," → Mètode ",t.jsx("strong",{children:"normal"})," (com ",t.jsx("code",{children:"dormir()"}),": tots dormen igual)."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"No puc, cada fill ho fa diferent?"})," → Mètode ",t.jsx("strong",{children:"abstracte"})," (com ",t.jsx("code",{children:"ferSoroll()"}),": cada animal sona diferent)."]})]})]})})]})}function tC(){return t.jsxs("div",{children:[t.jsx(w,{title:"Exemple Complet: Sistema de Biblioteca"}),t.jsx(x,{variant:"info",title:"Objectiu",children:t.jsxs("p",{children:["Crearem un sistema de gestió d'una biblioteca utilitzant els conceptes de POO que hem après: classes, objectes, constructors, encapsulació (getters/setters) i packages. El sistema tindrà tres classes: ",t.jsx("code",{children:"Llibre"}),", ",t.jsx("code",{children:"Autor"})," i ",t.jsx("code",{children:"Biblioteca"}),"."]})}),t.jsx(w,{title:"Estructura del Projecte"}),t.jsx(j,{label:"Organització en packages",language:"bash",code:`biblioteca/
  src/
    model/
      Llibre.java
      Autor.java
    gestio/
      Biblioteca.java
    app/
      Main.java`}),t.jsxs(ge,{children:[t.jsxs(N,{title:"Classe Autor",variant:"blue",children:[t.jsx("p",{children:"Representa un autor amb nom i nacionalitat."}),t.jsxs("p",{style:{marginTop:"6px"},children:["Atributs: ",t.jsx("code",{children:"nom"}),", ",t.jsx("code",{children:"nacionalitat"})]})]}),t.jsxs(N,{title:"Classe Llibre",variant:"yellow",children:[t.jsx("p",{children:"Representa un llibre amb títol, autor, any i disponibilitat."}),t.jsxs("p",{style:{marginTop:"6px"},children:["Atributs: ",t.jsx("code",{children:"títol"}),", ",t.jsx("code",{children:"autor"}),", ",t.jsx("code",{children:"any"}),", ",t.jsx("code",{children:"disponible"})]})]}),t.jsxs(N,{title:"Classe Biblioteca",variant:"green",children:[t.jsx("p",{children:"Gestiona una col·lecció de llibres amb operacions CRUD."}),t.jsxs("p",{style:{marginTop:"6px"},children:["Mètodes: ",t.jsx("code",{children:"afegir"}),", ",t.jsx("code",{children:"buscar"}),", ",t.jsx("code",{children:"prestar"}),", ",t.jsx("code",{children:"retornar"})]})]}),t.jsx(N,{title:"Classe Main",variant:"pink",children:t.jsx("p",{children:"Punt d'entrada del programa per provar el sistema."})})]}),t.jsx(w,{title:"Classe Autor"}),t.jsx(j,{label:"model/Autor.java",showLineNumbers:!0,code:`package model;

public class Autor {
    // Atributs privats (encapsulacio)
    private String nom;
    private String nacionalitat;

    // Constructor
    public Autor(String nom, String nacionalitat) {
        this.nom = nom;
        this.nacionalitat = nacionalitat;
    }

    // Getters
    public String getNom() {
        return nom;
    }

    public String getNacionalitat() {
        return nacionalitat;
    }

    // Setters
    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setNacionalitat(String nacionalitat) {
        this.nacionalitat = nacionalitat;
    }

    // Metode per mostrar informacio
    public void mostrarInfo() {
        System.out.println("Autor: " + nom + " (" + nacionalitat + ")");
    }
}`}),t.jsx(w,{title:"Classe Llibre"}),t.jsx(j,{label:"model/Llibre.java",showLineNumbers:!0,code:`package model;

public class Llibre {
    // Atributs privats
    private String titol;
    private Autor autor;    // Composicio: un Llibre TE un Autor
    private int any;
    private boolean disponible;

    // Constructor
    public Llibre(String titol, Autor autor, int any) {
        this.titol = titol;
        this.autor = autor;
        this.any = any;
        this.disponible = true; // Per defecte, disponible
    }

    // Getters
    public String getTitol() {
        return titol;
    }

    public Autor getAutor() {
        return autor;
    }

    public int getAny() {
        return any;
    }

    public boolean isDisponible() {
        return disponible;
    }

    // Setters
    public void setDisponible(boolean disponible) {
        this.disponible = disponible;
    }

    // Metode per mostrar informacio
    public void mostrarInfo() {
        String estat = disponible ? "Disponible" : "Prestat";
        System.out.println(""" + titol + "" de " + autor.getNom()
            + " (" + any + ") - " + estat);
    }
}`}),t.jsx(x,{variant:"explanation",title:"Composició",children:t.jsxs("p",{children:["Fixa't que la classe ",t.jsx("code",{children:"Llibre"})," té un atribut de tipus ",t.jsx("code",{children:"Autor"}),". Això s'anomena ",t.jsx("strong",{children:"composició"}),`: un objecte conté un altre objecte. És una relació "TÉ UN" (un llibre TÉ UN autor). Així evitem duplicar les dades de l'autor en cada llibre.`]})}),t.jsx(w,{title:"Classe Biblioteca"}),t.jsx(j,{label:"gestio/Biblioteca.java",showLineNumbers:!0,code:`package gestio;

import model.Llibre;

public class Biblioteca {
    // Atributs privats
    private String nom;
    private Llibre[] llibres;
    private int numLlibres;

    // Constructor
    public Biblioteca(String nom, int capacitat) {
        this.nom = nom;
        this.llibres = new Llibre[capacitat];
        this.numLlibres = 0;
    }

    // Afegir un llibre
    public void afegirLlibre(Llibre llibre) {
        if (numLlibres < llibres.length) {
            llibres[numLlibres] = llibre;
            numLlibres++;
            System.out.println("Llibre afegit: " + llibre.getTitol());
        } else {
            System.out.println("La biblioteca esta plena!");
        }
    }

    // Buscar un llibre per titol
    public Llibre buscarPerTitol(String titol) {
        for (int i = 0; i < numLlibres; i++) {
            if (llibres[i].getTitol().equalsIgnoreCase(titol)) {
                return llibres[i];
            }
        }
        System.out.println("Llibre no trobat: " + titol);
        return null;
    }

    // Prestar un llibre
    public void prestarLlibre(String titol) {
        Llibre llibre = buscarPerTitol(titol);
        if (llibre != null) {
            if (llibre.isDisponible()) {
                llibre.setDisponible(false);
                System.out.println("Llibre prestat: " + titol);
            } else {
                System.out.println("El llibre ja esta prestat!");
            }
        }
    }

    // Retornar un llibre
    public void retornarLlibre(String titol) {
        Llibre llibre = buscarPerTitol(titol);
        if (llibre != null) {
            if (!llibre.isDisponible()) {
                llibre.setDisponible(true);
                System.out.println("Llibre retornat: " + titol);
            } else {
                System.out.println("El llibre ja estava disponible!");
            }
        }
    }

    // Llistar tots els llibres
    public void llistarLlibres() {
        System.out.println("\\n=== Biblioteca: " + nom + " ===");
        if (numLlibres == 0) {
            System.out.println("No hi ha llibres.");
            return;
        }
        for (int i = 0; i < numLlibres; i++) {
            llibres[i].mostrarInfo();
        }
        System.out.println("Total: " + numLlibres + " llibres");
    }
}`}),t.jsx(w,{title:"Classe Main (Punt d'entrada)"}),t.jsx(j,{label:"app/Main.java",showLineNumbers:!0,code:`package app;

import model.Autor;
import model.Llibre;
import gestio.Biblioteca;

public class Main {
    public static void main(String[] args) {
        // Crear autors
        Autor autor1 = new Autor("Gabriel Garcia Marquez", "Colombiana");
        Autor autor2 = new Autor("George Orwell", "Britanica");
        Autor autor3 = new Autor("Antoine de Saint-Exupery", "Francesa");

        // Crear llibres
        Llibre llibre1 = new Llibre("Cent anys de solitud", autor1, 1967);
        Llibre llibre2 = new Llibre("1984", autor2, 1949);
        Llibre llibre3 = new Llibre("El petit princep", autor3, 1943);

        // Crear la biblioteca
        Biblioteca biblio = new Biblioteca("Biblioteca La Salle", 100);

        // Afegir llibres
        biblio.afegirLlibre(llibre1);
        biblio.afegirLlibre(llibre2);
        biblio.afegirLlibre(llibre3);

        // Llistar tots els llibres
        biblio.llistarLlibres();

        // Prestar un llibre
        biblio.prestarLlibre("1984");

        // Llistar despres del prestec
        biblio.llistarLlibres();

        // Retornar el llibre
        biblio.retornarLlibre("1984");

        // Llistar despres de la devolucio
        biblio.llistarLlibres();
    }
}`}),t.jsx(w,{title:"Sortida del Programa"}),t.jsx(ms,{label:"Resultat esperat a la consola",language:"bash",defaultOpen:!0,code:`Llibre afegit: Cent anys de solitud
Llibre afegit: 1984
Llibre afegit: El petit princep

=== Biblioteca: Biblioteca La Salle ===
"Cent anys de solitud" de Gabriel Garcia Marquez (1967) - Disponible
"1984" de George Orwell (1949) - Disponible
"El petit princep" de Antoine de Saint-Exupery (1943) - Disponible
Total: 3 llibres

Llibre prestat: 1984

=== Biblioteca: Biblioteca La Salle ===
"Cent anys de solitud" de Gabriel Garcia Marquez (1967) - Disponible
"1984" de George Orwell (1949) - Prestat
"El petit princep" de Antoine de Saint-Exupery (1943) - Disponible
Total: 3 llibres

Llibre retornat: 1984

=== Biblioteca: Biblioteca La Salle ===
"Cent anys de solitud" de Gabriel Garcia Marquez (1967) - Disponible
"1984" de George Orwell (1949) - Disponible
"El petit princep" de Antoine de Saint-Exupery (1943) - Disponible
Total: 3 llibres`}),t.jsx(w,{title:"Conceptes Aplicats"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Encapsulació",variant:"blue",children:t.jsxs("p",{children:["Tots els atributs són ",t.jsx("code",{children:"private"})," amb getters i setters."]})}),t.jsx(N,{title:"Constructors",variant:"yellow",children:t.jsxs("p",{children:["Cada classe té un constructor que inicialitza els atributs amb ",t.jsx("code",{children:"this"}),"."]})}),t.jsx(N,{title:"Composició",variant:"green",children:t.jsxs("p",{children:[t.jsx("code",{children:"Llibre"})," conté un objecte ",t.jsx("code",{children:"Autor"}),". ",t.jsx("code",{children:"Biblioteca"})," conté un array de ",t.jsx("code",{children:"Llibre"}),"."]})}),t.jsx(N,{title:"Packages",variant:"pink",children:t.jsxs("p",{children:["Classes organitzades en packages: ",t.jsx("code",{children:"model"}),", ",t.jsx("code",{children:"gestio"}),", ",t.jsx("code",{children:"app"}),"."]})})]}),t.jsx(x,{variant:"success",title:"Resum",children:t.jsx("p",{children:"Aquest exemple mostra com la POO ens permet crear un sistema complet i organitzat. Cada classe té una responsabilitat clara, les dades estan protegides amb encapsulació, i el codi està organitzat en packages. Així és com es programen les aplicacions reals."})})]})}const wl=[{name:"src/",type:"folder",description:"Carpeta arrel del codi font. Conté tots els fitxers .java organitzats en packages."},{name:"  model/",type:"folder",description:"Package que conté les classes de dades (entitats). Representen els objectes del domini: Producte, Client, Comanda..."},{name:"    Producte.java",type:"file",description:"Classe que representa un producte amb atributs privats (nom, preu, estoc), constructor, getters i setters. És una classe de model pura, sense lògica de negoci."},{name:"    Client.java",type:"file",description:"Classe que representa un client amb nom, email i historial de compres. Encapsula totes les dades del client amb validació als setters."},{name:"  servei/",type:"folder",description:"Package que conté la lògica de negoci. Aquí és on es fan els càlculs, validacions i operacions complexes."},{name:"    GestorProductes.java",type:"file",description:"Classe que gestiona la col·lecció de productes: afegir, eliminar, buscar, calcular el valor total de l'inventari. Utilitza objectes de la classe Producte."},{name:"    GestorComandes.java",type:"file",description:"Classe que gestiona les comandes: crear comanda, afegir productes, calcular total, aplicar descomptes. Coordina Producte i Client."},{name:"  app/",type:"folder",description:"Package que conté el punt d'entrada de l'aplicació. Aquí és on està el main() que inicia el programa."},{name:"    Main.java",type:"file",description:"Classe principal amb el mètode main(). Crea objectes de les altres classes, els connecta i executa el programa. És el punt d'entrada."}];function rC(){const[e,r]=A.useState(null);return t.jsxs("div",{children:[t.jsx(w,{title:"Introducció a la Modularitat"}),t.jsx(x,{variant:"info",title:"Què és la modularitat?",children:t.jsxs("p",{children:["La ",t.jsx("strong",{children:"modularitat"})," és el principi de dividir un programa en parts més petites, independents i reutilitzables, anomenades ",t.jsx("strong",{children:"mòduls"}),". Cada mòdul té una responsabilitat concreta i ben definida. En Java, els mòduls són les ",t.jsx("strong",{children:"classes"})," organitzades en ",t.jsx("strong",{children:"packages"}),"."]})}),t.jsx(w,{title:"Analogia: La Ciutat"}),t.jsxs(x,{variant:"explanation",children:[t.jsxs("p",{children:["Imagina una ",t.jsx("strong",{children:"ciutat"}),". Una ciutat no és un sol edifici gegant on tot passa al mateix lloc. Està organitzada en zones: zona residencial, zona comercial, hospitals, escoles, parcs... Cada zona té la seva funció i són independents entre si, però es connecten mitjançant carrers i transport."]}),t.jsx("p",{style:{marginTop:"10px"},children:'Un programa modular funciona igual: cada classe és com una "zona" de la ciutat, amb una funció clara. Les classes es comuniquen entre si creant objectes i cridant mètodes, com els carrers que connecten les zones.'})]}),t.jsxs(ge,{children:[t.jsx(N,{title:"Zona Residencial = Classe Model",variant:"blue",children:t.jsxs("p",{children:["On viuen les dades. Classes com ",t.jsx("code",{children:"Producte"}),", ",t.jsx("code",{children:"Client"})," que emmagatzemen informació."]})}),t.jsx(N,{title:"Zona Comercial = Classe Servei",variant:"yellow",children:t.jsxs("p",{children:["On passa la lògica de negoci. Classes com ",t.jsx("code",{children:"GestorProductes"})," que processen dades."]})}),t.jsx(N,{title:"Ajuntament = Classe Main",variant:"green",children:t.jsxs("p",{children:["El punt central que coordina tot. El ",t.jsx("code",{children:"main()"})," inicia i connecta les parts."]})}),t.jsx(N,{title:"Carrers = Objectes i Mètodes",variant:"pink",children:t.jsx("p",{children:"La comunicació entre mòduls. Crear objectes i cridar mètodes connecta les classes."})})]}),t.jsx(w,{title:"Per què codi modular?"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Fàcil de mantenir",variant:"blue",children:t.jsx("p",{children:"Si alguna cosa falla, saps exactament a quina classe mirar. No cal revisar 1000 línies de codi."})}),t.jsx(N,{title:"Reutilitzable",variant:"yellow",children:t.jsx("p",{children:"Una classe ben feta es pot reutilitzar en altres projectes. Escrius el codi un cop, l'uses moltes vegades."})}),t.jsx(N,{title:"Treball en equip",variant:"green",children:t.jsx("p",{children:"Cada persona pot treballar en una classe diferent sense interferir amb els altres."})}),t.jsx(N,{title:"Fàcil de testejar",variant:"pink",children:t.jsx("p",{children:"Pots provar cada classe per separat (tests unitaris) abans de juntar-ho tot."})})]}),t.jsx(w,{title:"Explorador d'Estructura de Projecte"}),t.jsx(x,{variant:"info",children:t.jsx("p",{children:"Fes clic a qualsevol fitxer o carpeta per veure la seva descripció i entendre la seva funció dins del projecte modular."})}),t.jsxs("div",{style:{display:"flex",gap:"20px",marginTop:"16px",flexWrap:"wrap"},children:[t.jsxs("div",{style:{flex:"1",minWidth:"280px",backgroundColor:"#1e2837",borderRadius:"8px",padding:"16px",fontFamily:"monospace",fontSize:"14px"},children:[t.jsx("div",{style:{color:"#ffd700",marginBottom:"12px",fontWeight:"bold"},children:"Estructura del Projecte"}),wl.map((a,n)=>t.jsxs("div",{onClick:()=>r(n),style:{padding:"6px 8px",cursor:"pointer",borderRadius:"4px",color:e===n?"#ffd700":a.type==="folder"?"#90cdf4":"#e8eef5",backgroundColor:e===n?"rgba(255, 215, 0, 0.1)":"transparent",fontWeight:a.type==="folder"?"bold":"normal",transition:"background-color 0.2s"},onMouseOver:i=>{e!==n&&(i.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.05)")},onMouseOut:i=>{e!==n&&(i.currentTarget.style.backgroundColor="transparent")},children:[a.type==="folder"?"📁 ":"📄 ",a.name]},n))]}),t.jsx("div",{style:{flex:"1",minWidth:"280px",backgroundColor:"#f0f4f8",borderRadius:"8px",padding:"20px",border:"2px solid #d0dae6"},children:e!==null?t.jsxs(t.Fragment,{children:[t.jsx("h4",{style:{color:"#1a4d8f",marginBottom:"12px"},children:wl[e].name.trim()}),t.jsx("p",{style:{color:"#4a5568",lineHeight:"1.6"},children:wl[e].description})]}):t.jsx("p",{style:{color:"#a0aec0",fontStyle:"italic"},children:"Selecciona un fitxer o carpeta per veure la seva descripció."})})]}),t.jsx(w,{title:"Exemple Bàsic de Modularitat"}),t.jsx(j,{label:"Dues classes separades que col·laboren",showLineNumbers:!0,code:`// Fitxer: Salutador.java
public class Salutador {
    private String idioma;

    public Salutador(String idioma) {
        this.idioma = idioma;
    }

    public String saludar(String nom) {
        if (idioma.equals("catala")) {
            return "Hola, " + nom + "!";
        } else {
            return "Hello, " + nom + "!";
        }
    }
}

// Fitxer: Main.java
public class Main {
    public static void main(String[] args) {
        // Pas 1: Crear l'objecte (instanciar)
        Salutador s = new Salutador("catala");

        // Pas 2: Cridar el metode
        String missatge = s.saludar("Maria");
        System.out.println(missatge); // Hola, Maria!
    }
}`}),t.jsx(x,{variant:"success",title:"Resum",children:t.jsx("p",{children:"La modularitat és dividir el programa en classes amb responsabilitats clares. Cada classe és un mòdul independent que es pot reutilitzar, testejar i mantenir per separat. Les classes es comuniquen creant objectes i cridant mètodes."})})]})}function aC(){return t.jsxs("div",{children:[t.jsx(w,{title:"El Problema del Codi Monolític"}),t.jsx(x,{variant:"warning",title:"Què és un programa monolític?",children:t.jsxs("p",{children:["Un programa ",t.jsx("strong",{children:"monolític"})," és aquell on ",t.jsx("strong",{children:"tot el codi"})," està en un sol fitxer o classe. Totes les variables, tota la lògica, totes les funcionalitats... tot barrejat en un únic ",t.jsx("code",{children:"main()"}),". Funciona per a programes petits, però es converteix en un problema seriós a mesura que el programa creix."]})}),t.jsx(w,{title:"Exemple: Tot en un sol fitxer"}),t.jsx(j,{label:"Programa monolític (MAL disseny)",showLineNumbers:!0,code:`public class MonoliticApp {
    public static void main(String[] args) {
        // --- Dades dels productes ---
        String[] noms = {"Portatil", "Ratoli", "Teclat"};
        double[] preus = {899.99, 25.50, 45.00};
        int[] estocs = {10, 50, 30};

        // --- Calcular valor total inventari ---
        double totalInventari = 0;
        for (int i = 0; i < noms.length; i++) {
            totalInventari += preus[i] * estocs[i];
        }
        System.out.println("Valor total: " + totalInventari);

        // --- Buscar producte ---
        String buscat = "Ratoli";
        for (int i = 0; i < noms.length; i++) {
            if (noms[i].equals(buscat)) {
                System.out.println("Trobat: " + noms[i] + " - " + preus[i] + " EUR");
            }
        }

        // --- Aplicar descompte ---
        double descompte = 10; // 10%
        for (int i = 0; i < preus.length; i++) {
            preus[i] = preus[i] - (preus[i] * descompte / 100);
        }

        // --- Mostrar tot ---
        for (int i = 0; i < noms.length; i++) {
            System.out.println(noms[i] + ": " + preus[i] + " EUR (Estoc: " + estocs[i] + ")");
        }

        // Imagina 500 linies mes de codi aqui...
    }
}`}),t.jsx(w,{title:"Monolític vs Modular"}),t.jsxs(pe,{children:[t.jsx($,{title:"Programa Monolític",variant:"bad",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Tot en un sol fitxer:"})," variables, lògica, sortida... tot barrejat"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Difícil de llegir:"})," quan el programa creix, és impossible entendre-ho"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Difícil de mantenir:"})," un canvi pot trencar tot el programa"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"No reutilitzable:"})," no pots reutilitzar parts del codi en altres projectes"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"No testejable:"})," no pots provar una funcionalitat sense executar-ho tot"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Conflictes en equip:"})," dues persones no poden treballar al mateix fitxer sense conflictes"]})]})}),t.jsx($,{title:"Programa Modular",variant:"good",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Classes separades:"})," cada classe té una responsabilitat"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Fàcil de llegir:"})," cada fitxer és curt i clar"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Fàcil de mantenir:"})," un canvi en una classe no afecta les altres"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Reutilitzable:"})," pots usar les classes en altres projectes"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Testejable:"})," pots provar cada classe per separat"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Treball en equip:"})," cada persona treballa en una classe diferent"]})]})})]}),t.jsx(w,{title:"Problemes Concrets del Codi Monolític"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Efecte Espagueti",variant:"pink",children:t.jsx("p",{children:"El codi s'entrelliga com els espaguetis. Una variable definida a la línia 10 s'utilitza a la línia 200 i es modifica a la línia 450. Impossible de seguir."})}),t.jsx(N,{title:"Duplicació de Codi",variant:"pink",children:t.jsx("p",{children:"Sense mòduls, acabes copiant i enganxant el mateix codi en diversos llocs. Si has de canviar alguna cosa, l'has de canviar en tots els llocs."})}),t.jsx(N,{title:"Debugging Impossible",variant:"pink",children:t.jsx("p",{children:"Quan hi ha un error, has de revisar tot el fitxer. No pots aïllar el problema perquè tot està connectat. Un bug pot estar en qualsevol de les 1000 línies."})}),t.jsx(N,{title:"Escalabilitat Zero",variant:"pink",children:t.jsx("p",{children:"Afegir una nova funcionalitat significa modificar el fitxer monolític, amb el risc de trencar les funcionalitats existents."})})]}),t.jsx(w,{title:"La Solució: Dividir en Classes"}),t.jsxs(x,{variant:"success",children:[t.jsxs("p",{children:["La solució és ",t.jsx("strong",{children:"dividir el programa en classes"}),", on cada classe té una responsabilitat única i ben definida. Així aconseguim:"]}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Separació de responsabilitats:"})," cada classe fa UNA cosa"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Encapsulació:"})," les dades estan protegides dins de cada classe"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Reutilització:"})," les classes es poden usar en múltiples projectes"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Mantenibilitat:"})," és fàcil trobar i corregir errors"]})]})]}),t.jsxs(pe,{children:[t.jsx($,{title:"Monolític: 1 fitxer",variant:"bad",children:t.jsx(j,{language:"bash",code:`projecte/
  MonoliticApp.java  (500+ línies)`})}),t.jsx($,{title:"Modular: múltiples classes",variant:"good",children:t.jsx(j,{language:"bash",code:`projecte/
  model/
    Producte.java     (30 línies)
  servei/
    GestorProductes.java (50 línies)
  app/
    Main.java         (20 línies)`})})]}),t.jsx(x,{variant:"info",title:"Recorda",children:t.jsxs("p",{children:["El primer pas per millorar el teu codi és ",t.jsx("strong",{children:"identificar les responsabilitats"})," del teu programa i crear una classe per a cadascuna. A la següent pàgina veurem com fer-ho pas a pas amb un exemple concret."]})})]})}function nC(){return t.jsxs("div",{children:[t.jsx(w,{title:"Packages: Organització del Codi"}),t.jsx(x,{variant:"info",title:"Què és un package?",children:t.jsxs("p",{children:["Un ",t.jsx("strong",{children:"package"})," és una carpeta que agrupa classes relacionades. És la manera que té Java d'organitzar el codi en projectes grans. Cada fitxer ",t.jsx("code",{children:".java"})," declara a quin package pertany, i per utilitzar classes d'un altre package cal importar-les."]})}),t.jsx(w,{title:"Estructura de Carpetes"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["L'estructura de carpetes del projecte ha de coincidir amb la declaració dels packages. Cada package és una carpeta, i cada classe és un fitxer",t.jsx("code",{children:".java"})," dins d'aquesta carpeta."]})}),t.jsx(j,{label:"Estructura de carpetes d'un projecte",language:"bash",code:`el-meu-projecte/
  src/
    utils/                          ← Package "utils"
      CalculsArrayReals.java
      Validador.java
    model/                          ← Package "model"
      Producte.java
      Client.java
    app/                            ← Package "app"
      Main.java`}),t.jsx(w,{title:"Declaració de Package"}),t.jsx(x,{variant:"warning",title:"Regla important",children:t.jsxs("p",{children:["La declaració ",t.jsx("code",{children:"package"})," ha de ser la ",t.jsx("strong",{children:"primera instrucció"})," del fitxer Java, abans de qualsevol ",t.jsx("code",{children:"import"})," o declaració de classe. El nom del package ha de coincidir exactament amb el nom de la carpeta."]})}),t.jsx(j,{label:"Declaració del package",showLineNumbers:!0,code:`// Fitxer: src/utils/CalculsArrayReals.java
package utils;   // Primera linia del fitxer!

public class CalculsArrayReals {
    public double calcularMaxim(double[] array) {
        // ...
    }
}

// Fitxer: src/model/Producte.java
package model;   // Coincideix amb la carpeta "model"

public class Producte {
    private String nom;
    // ...
}`}),t.jsx(w,{title:"Mètodes d'Importació"}),t.jsx(x,{variant:"info",children:t.jsxs("p",{children:["Per utilitzar una classe d'un altre package, hi ha ",t.jsx("strong",{children:"tres mètodes"})," d'importació. Cadascun té els seus avantatges."]})}),t.jsx(Z,{headers:["Mètode","Sintaxi","Quan usar-lo"],rows:[{group:"Mètodes d'importació"},{cells:["Import explícit","import utils.CalculsArrayReals;","Quan uses una o poques classes concretes"]},{cells:["Import amb comodí (*)","import utils.*;","Quan uses moltes classes del mateix package"]},{cells:["Nom qualificat","utils.CalculsArrayReals c = new utils.CalculsArrayReals();","Per evitar ambigüitats o ús puntual"]}]}),t.jsxs(ge,{children:[t.jsxs(N,{title:"Import Explícit",variant:"blue",children:[t.jsxs("p",{children:["Importa una classe concreta. És el mètode ",t.jsx("strong",{children:"recomanat"}),"."]}),t.jsx(j,{code:`package app;

import utils.CalculsArrayReals;
import model.Producte;

public class Main {
    public static void main(String[] args) {
        CalculsArrayReals c = new CalculsArrayReals();
        Producte p = new Producte();
    }
}`}),t.jsx(x,{variant:"success",children:t.jsx("p",{children:"Queda clar quines classes s'estan usant."})})]}),t.jsxs(N,{title:"Import amb Comodí (*)",variant:"yellow",children:[t.jsxs("p",{children:["Importa ",t.jsx("strong",{children:"totes"})," les classes d'un package."]}),t.jsx(j,{code:`package app;

import utils.*;    // Totes les classes de utils
import model.*;    // Totes les classes de model

public class Main {
    public static void main(String[] args) {
        CalculsArrayReals c = new CalculsArrayReals();
        Producte p = new Producte();
        Validador v = new Validador();
    }
}`}),t.jsx(x,{variant:"warning",children:t.jsx("p",{children:"Més còmode, però menys clar. No saps quines classes s'usen realment."})})]}),t.jsxs(N,{title:"Nom Qualificat",variant:"green",children:[t.jsxs("p",{children:["Usa el nom complet ",t.jsx("strong",{children:"sense import"}),"."]}),t.jsx(j,{code:`package app;

// Sense import!
public class Main {
    public static void main(String[] args) {
        utils.CalculsArrayReals c =
            new utils.CalculsArrayReals();
        model.Producte p =
            new model.Producte();
    }
}`}),t.jsx(x,{variant:"info",children:t.jsx("p",{children:"Útil quan dues classes de packages diferents tenen el mateix nom."})})]})]}),t.jsx(w,{title:"Convencions de Noms"}),t.jsx(Z,{headers:["Regla","Exemple Correcte","Exemple Incorrecte"],rows:[{cells:["Tot en minúscules","package model;","package Model;"]},{cells:["Sense espais","package gestordades;","package gestor dades;"]},{cells:["Sense caràcters especials","package utils;","package utils-helpers;"]},{cells:["Noms descriptius","package controlador;","package ctrl;"]},{cells:["Domini invers (professional)","package com.lasalle.app;","package app.lasalle.com;"]}]}),t.jsx(x,{variant:"explanation",title:"Convenció del domini invers",children:t.jsxs("p",{children:["En projectes professionals, els packages comencen amb el ",t.jsx("strong",{children:"domini invers"})," de l'organització. Això evita conflictes de noms entre projectes de diferents empreses."]})}),t.jsx(j,{label:"Exemple amb domini invers",code:`// Projecte de La Salle
package com.lasalle.programacio.model;
package com.lasalle.programacio.vista;
package com.lasalle.programacio.controlador;

// Projecte de Google
package com.google.maps.model;
package com.google.maps.api;`}),t.jsx(w,{title:"Exemple Complet"}),t.jsxs(pe,{children:[t.jsx($,{title:"Estructura del projecte",variant:"blue",children:t.jsx(j,{language:"bash",code:`projecte/
  src/
    utils/
      Matematiques.java
    app/
      Main.java`})}),t.jsx($,{title:"Compilar i executar",variant:"blue",children:t.jsx(j,{language:"bash",code:`# Compilar
javac -d bin src/utils/Matematiques.java
javac -d bin -cp bin src/app/Main.java

# Executar
java -cp bin app.Main`})})]}),t.jsx(j,{label:"utils/Matematiques.java",showLineNumbers:!0,code:`package utils;

public class Matematiques {
    public int sumar(int a, int b) {
        return a + b;
    }

    public int restar(int a, int b) {
        return a - b;
    }

    public double dividir(int a, int b) {
        if (b == 0) {
            System.out.println("Error: divisio per zero!");
            return 0;
        }
        return (double) a / b;
    }
}`}),t.jsx(j,{label:"app/Main.java",showLineNumbers:!0,code:`package app;

import utils.Matematiques;  // Import explicit

public class Main {
    public static void main(String[] args) {
        // Pas 1: Instanciar
        Matematiques mat = new Matematiques();

        // Pas 2: Cridar metodes
        int resultat1 = mat.sumar(10, 5);
        int resultat2 = mat.restar(10, 5);
        double resultat3 = mat.dividir(10, 3);

        System.out.println("Suma: " + resultat1);     // 15
        System.out.println("Resta: " + resultat2);     // 5
        System.out.println("Divisio: " + resultat3);   // 3.333...
    }
}`}),t.jsx(x,{variant:"success",title:"Resum",children:t.jsxs("p",{children:["Els packages organitzen les classes en carpetes. Declara el package a la primera línia, utilitza ",t.jsx("code",{children:"import"})," per accedir a classes d'altres packages (preferiblement import explícit), i segueix les convencions de noms (tot en minúscules, domini invers en projectes professionals)."]})})]})}function iC(){return t.jsxs("div",{children:[t.jsx(w,{title:"Exemple Complet: Calculadora Modular"}),t.jsx(x,{variant:"info",title:"Objectiu",children:t.jsxs("p",{children:["Crearem una calculadora modular formada per ",t.jsx("strong",{children:"dues classes"}),": una classe ",t.jsx("code",{children:"Operacions"})," que conté els mètodes de càlcul (sumar, restar, multiplicar, dividir) i una classe ",t.jsx("code",{children:"Calculadora"})," amb el ",t.jsx("code",{children:"main()"}),"que la utilitza. Aplicarem tots els conceptes de modularitat apresos."]})}),t.jsx(w,{title:"Estructura del Projecte"}),t.jsx(j,{label:"Organització de fitxers",language:"bash",code:`calculadora/
  src/
    utils/
      Operacions.java       ← Classe amb els mètodes de càlcul
    app/
      Calculadora.java      ← Classe principal amb el main()`}),t.jsxs(pe,{children:[t.jsxs($,{title:"Operacions.java",variant:"blue",children:[t.jsxs("p",{children:["La classe ",t.jsx("strong",{children:"auxiliar"})," que conté tota la lògica de càlcul."]}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsx("li",{children:t.jsx("code",{children:"sumar(a, b)"})}),t.jsx("li",{children:t.jsx("code",{children:"restar(a, b)"})}),t.jsx("li",{children:t.jsx("code",{children:"multiplicar(a, b)"})}),t.jsxs("li",{children:[t.jsx("code",{children:"dividir(a, b)"})," amb control de divisió per zero"]})]})]}),t.jsxs($,{title:"Calculadora.java",variant:"blue",children:[t.jsxs("p",{children:["La classe ",t.jsx("strong",{children:"principal"})," que usa Operacions."]}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["Pas 1: Instancia ",t.jsx("code",{children:"Operacions"})]}),t.jsx("li",{children:"Pas 2: Crida els mètodes"}),t.jsx("li",{children:"Mostra els resultats"})]})]})]}),t.jsx(w,{title:"Classe Operacions"}),t.jsx(j,{label:"utils/Operacions.java",showLineNumbers:!0,code:`package utils;

public class Operacions {

    // Metode per sumar dos nombres
    public double sumar(double a, double b) {
        return a + b;
    }

    // Metode per restar dos nombres
    public double restar(double a, double b) {
        return a - b;
    }

    // Metode per multiplicar dos nombres
    public double multiplicar(double a, double b) {
        return a * b;
    }

    // Metode per dividir dos nombres AMB control d'error
    public double dividir(double a, double b) {
        if (b == 0) {
            System.out.println("Error: No es pot dividir per zero!");
            return 0;
        }
        return a / b;
    }
}`}),t.jsx(x,{variant:"warning",title:"Control de divisió per zero",children:t.jsxs("p",{children:["El mètode ",t.jsx("code",{children:"dividir"})," comprova si el divisor és zero abans de fer la divisió. Si és zero, mostra un missatge d'error i retorna 0. Això evita l'error ",t.jsx("code",{children:"ArithmeticException"})," que es produiria en una divisió per zero amb enters, i el resultat ",t.jsx("code",{children:"Infinity"})," amb doubles."]})}),t.jsx(w,{title:"Classe Calculadora (Main)"}),t.jsx(j,{label:"app/Calculadora.java",showLineNumbers:!0,code:`package app;

import utils.Operacions;  // Importar la classe auxiliar

public class Calculadora {
    public static void main(String[] args) {
        // PAS 1: Instanciar la classe Operacions
        Operacions op = new Operacions();

        // Valors per als calculs
        double num1 = 20;
        double num2 = 5;

        // PAS 2: Cridar els metodes
        double resultSuma = op.sumar(num1, num2);
        double resultResta = op.restar(num1, num2);
        double resultMult = op.multiplicar(num1, num2);
        double resultDiv = op.dividir(num1, num2);

        // Mostrar resultats
        System.out.println("=== CALCULADORA ===");
        System.out.println(num1 + " + " + num2 + " = " + resultSuma);
        System.out.println(num1 + " - " + num2 + " = " + resultResta);
        System.out.println(num1 + " * " + num2 + " = " + resultMult);
        System.out.println(num1 + " / " + num2 + " = " + resultDiv);

        // Provar divisio per zero
        System.out.println("\\n--- Prova divisio per zero ---");
        double resultError = op.dividir(10, 0);
        System.out.println("Resultat: " + resultError);
    }
}`}),t.jsx(w,{title:"Sortida del Programa"}),t.jsx(ms,{label:"Resultat esperat a la consola",language:"bash",defaultOpen:!0,code:`=== CALCULADORA ===
20.0 + 5.0 = 25.0
20.0 - 5.0 = 15.0
20.0 * 5.0 = 100.0
20.0 / 5.0 = 4.0

--- Prova divisio per zero ---
Error: No es pot dividir per zero!
Resultat: 0.0`}),t.jsx(w,{title:"Per què és millor que tot al main?"}),t.jsxs(pe,{children:[t.jsx($,{title:"Tot al main (monolític)",variant:"bad",children:t.jsx(j,{code:`public static void main(String[] args) {
    double a = 20, b = 5;

    // Suma
    double suma = a + b;
    System.out.println(a + " + " + b + " = " + suma);

    // Resta
    double resta = a - b;
    System.out.println(a + " - " + b + " = " + resta);

    // Multiplicacio
    double mult = a * b;
    System.out.println(a + " * " + b + " = " + mult);

    // Divisio amb control
    if (b != 0) {
        double div = a / b;
        System.out.println(a + " / " + b + " = " + div);
    } else {
        System.out.println("Error: divisio per zero");
    }
    // No reutilitzable!
}`})}),t.jsx($,{title:"Modular (classe separada)",variant:"good",children:t.jsx(j,{code:`public static void main(String[] args) {
    double a = 20, b = 5;

    // 1. Instanciar
    Operacions op = new Operacions();

    // 2. Cridar metodes
    System.out.println(op.sumar(a, b));
    System.out.println(op.restar(a, b));
    System.out.println(op.multiplicar(a, b));
    System.out.println(op.dividir(a, b));

    // Clar, net, reutilitzable!
}`})})]}),t.jsx(w,{title:"Conceptes Aplicats"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Modularitat",variant:"blue",children:t.jsx("p",{children:"El codi està dividit en dues classes amb responsabilitats clares i separades."})}),t.jsx(N,{title:"Packages",variant:"yellow",children:t.jsxs("p",{children:["Les classes estan organitzades en packages: ",t.jsx("code",{children:"utils"})," per als càlculs, ",t.jsx("code",{children:"app"})," per al main."]})}),t.jsx(N,{title:"Import",variant:"green",children:t.jsxs("p",{children:["S'utilitza ",t.jsx("code",{children:"import utils.Operacions;"})," per accedir a la classe auxiliar des d'un altre package."]})}),t.jsx(N,{title:"Control d'Errors",variant:"pink",children:t.jsxs("p",{children:["El mètode ",t.jsx("code",{children:"dividir"})," comprova la divisió per zero abans d'operar, evitant errors en temps d'execució."]})})]}),t.jsx(ms,{label:"Versió ampliada: més operacions",code:`package utils;

public class Operacions {

    public double sumar(double a, double b) {
        return a + b;
    }

    public double restar(double a, double b) {
        return a - b;
    }

    public double multiplicar(double a, double b) {
        return a * b;
    }

    public double dividir(double a, double b) {
        if (b == 0) {
            System.out.println("Error: No es pot dividir per zero!");
            return 0;
        }
        return a / b;
    }

    // --- Operacions ampliades ---

    public double potencia(double base, int exponent) {
        double resultat = 1;
        for (int i = 0; i < exponent; i++) {
            resultat *= base;
        }
        return resultat;
    }

    public int modul(int a, int b) {
        if (b == 0) {
            System.out.println("Error: modul per zero!");
            return 0;
        }
        return a % b;
    }

    public double valorAbsolut(double a) {
        if (a < 0) {
            return -a;
        }
        return a;
    }

    public boolean esPar(int num) {
        return num % 2 == 0;
    }
}`}),t.jsx(x,{variant:"success",title:"Resum",children:t.jsxs("p",{children:["Aquest exemple mostra com crear una calculadora modular amb dues classes.",t.jsx("code",{children:" Operacions"})," conté tota la lògica de càlcul amb control d'errors, i ",t.jsx("code",{children:"Calculadora"})," la utilitza seguint els 2 passos: instanciar i cridar mètodes. El codi és net, reutilitzable i fàcil d'ampliar."]})})]})}const sC=`// String es un OBJECTE, no un tipus primitiu
String salutacio = "Hola, mon!";

// Internament, Java gestiona String com un objecte immutable
// Cada vegada que "modifiquem" un String, es crea un objecte NOU
String original = "Hola";
String modificat = original.toUpperCase(); // Crea un nou objecte "HOLA"
System.out.println(original);   // "Hola" - no ha canviat!
System.out.println(modificat);  // "HOLA" - objecte nou`,lC=`// Forma 1: Literal (RECOMANADA)
// Java reutilitza objectes del "String Pool"
String nom1 = "Anna";
String nom2 = "Anna"; // Reutilitza el mateix objecte del pool

// Forma 2: Amb constructor new
// Crea SEMPRE un objecte nou a memoria (heap)
String nom3 = new String("Anna"); // Objecte diferent!
String nom4 = new String("Anna"); // Un altre objecte diferent!

// Forma 3: A partir d'un array de chars
char[] lletres = {'J', 'a', 'v', 'a'};
String paraula = new String(lletres); // "Java"`,oC=`String a = "Hola";
String b = "Hola";
String c = new String("Hola");

// == compara REFERENCIES (adreces de memoria), NO contingut!
System.out.println(a == b); // true  (mateix objecte al pool)
System.out.println(a == c); // FALSE! (objectes diferents a memoria)

// Aixo es un ERROR molt comu en Java!
// Encara que a i c contenen "Hola", == diu false
// perque apunten a posicions de memoria diferents`,cC=`String a = "Hola";
String c = new String("Hola");

// .equals() compara el CONTINGUT dels Strings
System.out.println(a.equals(c));           // true
System.out.println("Hola".equals(c));      // true

// .equalsIgnoreCase() ignora majuscules/minuscules
String x = "Java";
String y = "java";
System.out.println(x.equals(y));           // false
System.out.println(x.equalsIgnoreCase(y)); // true

// compareTo() compara lexicograficament (ordre alfabetic)
System.out.println("Anna".compareTo("Marc"));  // negatiu (A < M)
System.out.println("Marc".compareTo("Anna"));  // positiu (M > A)
System.out.println("Anna".compareTo("Anna"));  // 0 (iguals)`,uC=`String text = "Programacio";

// length() - retorna el nombre de caracters
System.out.println(text.length()); // 11

// charAt(index) - retorna el caracter a la posicio indicada
System.out.println(text.charAt(0));  // 'P'
System.out.println(text.charAt(4));  // 'r'
System.out.println(text.charAt(10)); // 'o'

// Recorrer un String caracter a caracter
for (int i = 0; i < text.length(); i++) {
    System.out.print(text.charAt(i) + " ");
}
// P r o g r a m a c i o`,dC=`String frase = "Bon dia, Java!";

// substring(inici) - des de l'index fins al final
System.out.println(frase.substring(9));    // "Java!"

// substring(inici, fi) - des de inici fins a fi (sense incloure fi)
System.out.println(frase.substring(0, 7)); // "Bon dia"
System.out.println(frase.substring(4, 7)); // "dia"

// Exemple practic: extreure extensio d'un fitxer
String arxiu = "document.pdf";
String extensio = arxiu.substring(arxiu.lastIndexOf(".") + 1);
System.out.println(extensio); // "pdf"`,pC=`String text = "Java es genial, Java es potent";

// indexOf(str) - primera aparicio
System.out.println(text.indexOf("Java"));    // 0
System.out.println(text.indexOf("es"));      // 5
System.out.println(text.indexOf("Python"));  // -1 (no trobat)

// indexOf(str, fromIndex) - cerca des d'una posicio
System.out.println(text.indexOf("Java", 1)); // 16

// lastIndexOf(str) - ultima aparicio
System.out.println(text.lastIndexOf("Java")); // 16
System.out.println(text.lastIndexOf("es"));   // 21`,mC=`String url = "https://www.exemple.cat/pagina";

// contains(str) - retorna true si conte el substring
System.out.println(url.contains("www"));     // true
System.out.println(url.contains("http"));    // true
System.out.println(url.contains("ftp"));     // false

// startsWith(str) - comprova si comenca amb...
System.out.println(url.startsWith("https")); // true
System.out.println(url.startsWith("http"));  // true
System.out.println(url.startsWith("ftp"));   // false

// endsWith(str) - comprova si acaba amb...
System.out.println(url.endsWith(".cat/pagina")); // true
System.out.println(url.endsWith(".html"));        // false

// Exemple practic: validar format d'email
String email = "usuari@domini.com";
boolean valid = email.contains("@") && email.endsWith(".com");
System.out.println("Email valid: " + valid); // true`,hC=`// toUpperCase() - convertir a majuscules
String text = "Hola Mon";
System.out.println(text.toUpperCase()); // "HOLA MON"

// toLowerCase() - convertir a minuscules
System.out.println(text.toLowerCase()); // "hola mon"

// trim() - elimina espais al principi i al final
String ambEspais = "   Hola, Java!   ";
System.out.println(ambEspais.trim());          // "Hola, Java!"
System.out.println(ambEspais.trim().length()); // 11

// isEmpty() - comprova si el String esta buit (length == 0)
String buit = "";
String noBuit = "abc";
System.out.println(buit.isEmpty());   // true
System.out.println(noBuit.isEmpty()); // false

// Exemple practic: netejar entrada d'usuari
String entrada = "   BARCELONA   ";
String net = entrada.trim().toLowerCase();
System.out.println(net); // "barcelona"`,fC=`String frase = "Java es dificil, Java es avorrit";

// replace(vell, nou) - substitueix TOTES les aparicions
String nova = frase.replace("dificil", "facil");
System.out.println(nova); // "Java es facil, Java es avorrit"

String nova2 = frase.replace("Java", "Python");
System.out.println(nova2); // "Python es dificil, Python es avorrit"

// replace amb chars
String text = "hola.mon.java";
System.out.println(text.replace('.', '/')); // "hola/mon/java"

// Exemple practic: netejar DNI
String dni = "12.345.678-A";
String net = dni.replace(".", "").replace("-", "");
System.out.println(net); // "12345678A"`,xC=`// split(regex) - divideix el String en un array
String csv = "Anna,Marc,Laia,Pere";
String[] noms = csv.split(",");
for (String nom : noms) {
    System.out.println(nom);
}
// Anna
// Marc
// Laia
// Pere

// Split amb espais
String frase = "Java es un llenguatge genial";
String[] paraules = frase.split(" ");
System.out.println("Nombre de paraules: " + paraules.length); // 5

// toCharArray() - converteix String a array de chars
String text = "Hola";
char[] lletres = text.toCharArray();
for (char c : lletres) {
    System.out.print(c + " "); // H o l a
}

// Exemple practic: comptar vocals
String paraula = "Programacio";
char[] chars = paraula.toLowerCase().toCharArray();
int vocals = 0;
for (char c : chars) {
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
        vocals++;
    }
}
System.out.println("Vocals: " + vocals); // 5`,gC=`// concat(str) - concatena dos Strings
String nom = "Java";
String resultat = nom.concat(" ").concat("Programacio");
System.out.println(resultat); // "Java Programacio"

// Es equivalent a usar +
String resultat2 = nom + " " + "Programacio";
System.out.println(resultat2); // "Java Programacio"

// valueOf(x) - converteix qualsevol tipus a String
int numero = 42;
double decimal = 3.14;
boolean cert = true;

String s1 = String.valueOf(numero);  // "42"
String s2 = String.valueOf(decimal); // "3.14"
String s3 = String.valueOf(cert);    // "true"

// Util per convertir explicitament a String
System.out.println(s1.length()); // 2 (es un String "42", no un numero)`,vC=`// Opcio 1: Operador + (senzill, per poques concatenacions)
String nom = "Anna";
int edat = 20;
String missatge = "Hola, " + nom + "! Tens " + edat + " anys.";

// Opcio 2: concat() (nomes Strings, no converteix altres tipus)
String salut = "Hola".concat(", ").concat(nom);

// Opcio 3: StringBuilder (EFICIENT per moltes concatenacions)
// Quan concatenem amb + dins d'un bucle, Java crea molts objectes temporals
// StringBuilder evita aquest problema`,jC=`// StringBuilder: MOLT mes eficient en bucles
StringBuilder sb = new StringBuilder();

// append() - afegeix al final
sb.append("Hola");
sb.append(", ");
sb.append("mon!");
System.out.println(sb.toString()); // "Hola, mon!"

// insert(index, text) - insereix a una posicio
sb.insert(0, ">> ");
System.out.println(sb.toString()); // ">> Hola, mon!"

// Exemple practic: construir una llista dins d'un bucle
String[] fruites = {"Poma", "Platano", "Taronja", "Maduixa"};
StringBuilder llista = new StringBuilder();
for (int i = 0; i < fruites.length; i++) {
    llista.append(fruites[i]);
    if (i < fruites.length - 1) {
        llista.append(", ");
    }
}
System.out.println(llista.toString()); // "Poma, Platano, Taronja, Maduixa"

// Altres metodes utils de StringBuilder
StringBuilder sb2 = new StringBuilder("Hola Mon");
sb2.delete(4, 8);           // "Hola"
sb2.reverse();               // "aloH"
System.out.println(sb2.length()); // 4`,bC=`// MAL: Concatenacio amb + en un bucle (crea molts objectes!)
String resultat = "";
for (int i = 0; i < 1000; i++) {
    resultat += i + ", "; // Cada iteracio crea un objecte String NOU
}

// BE: StringBuilder en un bucle (eficient!)
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i).append(", ");
}
String resultat2 = sb.toString(); // Nomes crea un String al final`,yC=`public class ExempleStrings {
    public static void main(String[] args) {
        // Analitzar una frase
        String frase = "  Java es el millor llenguatge de programacio!  ";

        // 1. Netejar
        String neta = frase.trim();
        System.out.println("Neta: '" + neta + "'");

        // 2. Informacio basica
        System.out.println("Longitud: " + neta.length());
        System.out.println("Primer caracter: " + neta.charAt(0));
        System.out.println("Últim caràcter: " + neta.charAt(neta.length() - 1));

        // 3. Cerques
        System.out.println("Conte 'millor': " + neta.contains("millor"));
        System.out.println("Posicio de 'programacio': " + neta.indexOf("programacio"));

        // 4. Transformacions
        System.out.println("Majuscules: " + neta.toUpperCase());
        String canviada = neta.replace("Java", "Python");
        System.out.println("Canviada: " + canviada);

        // 5. Dividir en paraules
        String[] paraules = neta.split(" ");
        System.out.println("Nombre de paraules: " + paraules.length);
        for (String p : paraules) {
            System.out.println("  - " + p);
        }

        // 6. Comparacions
        String a = "java";
        String b = "Java";
        System.out.println("equals: " + a.equals(b));           // false
        System.out.println("equalsIgnoreCase: " + a.equalsIgnoreCase(b)); // true
    }
}`;function SC(){return t.jsxs("div",{children:[t.jsx(w,{title:"La Classe String"}),t.jsxs(x,{variant:"info",title:"Què és String?",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"String"})," és una ",t.jsx("strong",{children:"classe"})," de Java, no un tipus primitiu. Representa una cadena de caràcters i és un dels objectes més utilitzats en programació."]}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"És un objecte:"}),' tot i que es pot crear amb literals ("text"), internament és un objecte de la classe ',t.jsx("code",{children:"java.lang.String"}),"."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"És immutable:"}),' un cop creat, el seu contingut NO es pot modificar. Qualsevol operació que "modifiqui" un String en realitat crea un objecte nou.']}),t.jsxs("li",{children:[t.jsx("strong",{children:"String Pool:"}),' Java manté un "pool" de Strings literals per reutilitzar objectes i estalviar memòria.']})]})]}),t.jsx(j,{code:sC,label:"String és un objecte immutable",showLineNumbers:!0}),t.jsx(w,{title:"Crear Strings"}),t.jsx(j,{code:lC,label:"Maneres de crear Strings",showLineNumbers:!0}),t.jsxs(pe,{children:[t.jsxs($,{title:"Literal (recomanat)",variant:"good",children:[t.jsx("p",{children:t.jsx("code",{children:'String s = "Hola";'})}),t.jsxs("ul",{children:[t.jsx("li",{children:"Més eficient (reutilitza objectes del pool)"}),t.jsx("li",{children:"Forma habitual i recomanada"}),t.jsx("li",{children:"Java optimitza automàticament"})]})]}),t.jsxs($,{title:"Constructor new",variant:"bad",children:[t.jsx("p",{children:t.jsx("code",{children:'String s = new String("Hola");'})}),t.jsxs("ul",{children:[t.jsx("li",{children:"Crea sempre un objecte nou"}),t.jsx("li",{children:"No aprofita el String Pool"}),t.jsx("li",{children:"Gasta més memòria innecessàriament"})]})]})]}),t.jsx(w,{title:"Comparar Strings"}),t.jsxs(x,{variant:"error",title:"ERROR COMÚ: Usar == per comparar Strings",children:[t.jsxs("p",{children:["L'operador ",t.jsx("code",{children:"=="})," compara ",t.jsx("strong",{children:"referències"})," (adreces de memòria), NO el contingut dels Strings. Dos Strings poden contenir el mateix text però estar en posicions de memòria diferents, i ",t.jsx("code",{children:"=="})," diria ",t.jsx("code",{children:"false"}),"."]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Sempre"})," utilitza ",t.jsx("code",{children:".equals()"})," o ",t.jsx("code",{children:".equalsIgnoreCase()"})," per comparar el contingut de Strings!"]})]}),t.jsx(j,{code:oC,label:"Per què == NO funciona per comparar contingut",showLineNumbers:!0}),t.jsx(j,{code:cC,label:"Comparació correcta amb .equals() i .equalsIgnoreCase()",showLineNumbers:!0}),t.jsx(Z,{headers:["Mètode","Compara","Retorna","Exemple"],rows:[{cells:["==","Referències (memòria)","boolean",'"Hola" == "Hola" // depèn!']},{cells:[".equals()","Contingut exacte","boolean",'"Hola".equals("Hola") // true']},{cells:[".equalsIgnoreCase()","Contingut (ignora cas)","boolean",'"Hola".equalsIgnoreCase("hola") // true']},{cells:[".compareTo()","Ordre lexicogràfic","int (neg/0/pos)",'"Anna".compareTo("Marc") // negatiu']}]}),t.jsx(w,{title:"Mètodes de la Classe String"}),t.jsx(Z,{headers:["Mètode","Descripció","Retorna","Exemple"],rows:[{group:"Longitud i Accés"},{cells:["length()","Nombre de caràcters","int",'"Hola".length() // 4']},{cells:["charAt(i)","Caràcter a la posició i","char",`"Hola".charAt(0) // 'H'`]},{cells:["isEmpty()","Comprova si està buit","boolean",'"".isEmpty() // true']},{group:"Cerca"},{cells:["indexOf(str)","Posició de la primera aparició","int (-1 si no trobat)",'"Hola".indexOf("la") // 2']},{cells:["lastIndexOf(str)","Posició de la última aparició","int (-1 si no trobat)",'"abab".lastIndexOf("ab") // 2']},{cells:["contains(str)","Conté el substring?","boolean",'"Hola".contains("ol") // true']},{cells:["startsWith(str)","Comença amb...?","boolean",'"Hola".startsWith("Ho") // true']},{cells:["endsWith(str)","Acaba amb...?","boolean",'"Hola".endsWith("la") // true']},{group:"Extracció"},{cells:["substring(inici)","Des de inici fins al final","String",'"Hola".substring(2) // "la"']},{cells:["substring(inici, fi)","Des de inici fins a fi (exclusiu)","String",'"Hola".substring(1,3) // "ol"']},{group:"Transformació"},{cells:["toUpperCase()","Converteix a majúscules","String",'"hola".toUpperCase() // "HOLA"']},{cells:["toLowerCase()","Converteix a minúscules","String",'"HOLA".toLowerCase() // "hola"']},{cells:["trim()","Elimina espais extrems","String",'"  hola  ".trim() // "hola"']},{cells:["replace(vell, nou)","Substitueix aparicions","String",'"hola".replace("o","0") // "h0la"']},{group:"Divisió i Conversió"},{cells:["split(regex)","Divideix en array","String[]",'"a,b,c".split(",") // ["a","b","c"]']},{cells:["toCharArray()","Converteix a array de chars","char[]",'"Hola".toCharArray()']},{cells:["concat(str)","Concatena amb un altre String","String",'"Hola".concat(" Mon") // "Hola Mon"']},{cells:["String.valueOf(x)","Converteix qualsevol valor a String","String",'String.valueOf(42) // "42"']}]}),t.jsx(w,{title:"Exemples Detallats"}),t.jsx(x,{variant:"explanation",title:"length() i charAt()",children:t.jsxs("p",{children:[t.jsx("code",{children:"length()"})," retorna el nombre total de caràcters. ",t.jsx("code",{children:"charAt(index)"})," retorna el caràcter a una posició concreta (començant des de 0)."]})}),t.jsx(j,{code:uC,label:"length() i charAt() - Longitud i accés per posició",showLineNumbers:!0}),t.jsx(j,{code:dC,label:"substring() - Extreure parts d'un String",showLineNumbers:!0}),t.jsx(j,{code:pC,label:"indexOf() i lastIndexOf() - Cercar dins d'un String",showLineNumbers:!0}),t.jsx(j,{code:mC,label:"contains(), startsWith(), endsWith() - Comprovacions",showLineNumbers:!0}),t.jsx(j,{code:hC,label:"toUpperCase(), toLowerCase(), trim(), isEmpty()",showLineNumbers:!0}),t.jsx(j,{code:fC,label:"replace() - Substituir text",showLineNumbers:!0}),t.jsx(j,{code:xC,label:"split() i toCharArray() - Dividir un String",showLineNumbers:!0}),t.jsx(j,{code:gC,label:"concat() i String.valueOf() - Concatenar i convertir",showLineNumbers:!0}),t.jsx(w,{title:"Concatenació de Strings"}),t.jsx(x,{variant:"info",title:"Tres maneres de concatenar",children:t.jsxs("p",{children:["Hi ha tres formes principals de concatenar Strings en Java. L'operador ",t.jsx("code",{children:"+"})," és el més comú, però ",t.jsx("strong",{children:"StringBuilder"})," és molt més eficient quan fas moltes concatenacions (especialment dins de bucles)."]})}),t.jsx(j,{code:vC,label:"Les tres opcions de concatenació",showLineNumbers:!0}),t.jsx(w,{title:"StringBuilder"}),t.jsx(x,{variant:"warning",title:"Quan usar StringBuilder?",children:t.jsxs("p",{children:["Utilitza ",t.jsx("strong",{children:"StringBuilder"})," sempre que necessitis concatenar Strings dins d'un ",t.jsx("strong",{children:"bucle"})," o quan facis moltes operacions de concatenació. Com que String és immutable, cada ",t.jsx("code",{children:"+"})," crea un objecte nou, cosa que és molt ineficient en bucles grans."]})}),t.jsx(j,{code:jC,label:"StringBuilder - Mètodes principals",showLineNumbers:!0}),t.jsxs(pe,{children:[t.jsx($,{title:"Concatenació amb + en bucle",variant:"bad",children:t.jsx("p",{children:"Cada iteració crea un objecte String nou. Molt lent per bucles grans."})}),t.jsx($,{title:"StringBuilder en bucle",variant:"good",children:t.jsx("p",{children:"Modifica el mateix objecte internament. Molt més ràpid i eficient."})})]}),t.jsx(j,{code:bC,label:"Comparació: + en bucle vs StringBuilder",showLineNumbers:!0}),t.jsx(w,{title:"Exemple Complet"}),t.jsx(x,{variant:"success",title:"Exemple pràctic: Analitzar una frase",children:t.jsx("p",{children:"Aquest exemple mostra com combinar diversos mètodes de String per analitzar i transformar una frase."})}),t.jsx(j,{code:yC,label:"Exemple complet: Analitzar i transformar text",showLineNumbers:!0}),t.jsx(w,{title:"Resum"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Immutabilitat",variant:"blue",children:t.jsx("p",{children:"Els Strings són immutables. Qualsevol modificació crea un objecte nou."})}),t.jsx(N,{title:"Comparació",variant:"blue",children:t.jsxs("p",{children:["Usa ",t.jsx("code",{children:".equals()"})," per comparar contingut. Mai ",t.jsx("code",{children:"=="})," per Strings."]})}),t.jsx(N,{title:"StringBuilder",variant:"blue",children:t.jsx("p",{children:"Utilitza StringBuilder per concatenacions en bucles. És molt més eficient."})}),t.jsx(N,{title:"Mètodes Útils",variant:"blue",children:t.jsx("p",{children:"String té més de 15 mètodes essencials: length, charAt, substring, indexOf, contains, replace, split, trim..."})})]})]})}const wC=`// Math es una classe utilitaria de java.lang
// TOTS els seus metodes son STATIC - no cal crear cap objecte
// No es pot instanciar: Math m = new Math(); // ERROR!

// S'utilitza directament amb el nom de la classe:
double resultat = Math.sqrt(25);      // 5.0
int maxim = Math.max(10, 20);         // 20
double aleatori = Math.random();       // 0.0 a 0.999...`,CC=`// Math.PI - El nombre Pi (3.141592653589793)
double perimetreCircle = 2 * Math.PI * 5; // Perimetre d'un cercle de radi 5
System.out.println("Perimetre: " + perimetreCircle); // 31.41592653589793

double areaCircle = Math.PI * Math.pow(5, 2); // Area d'un cercle de radi 5
System.out.println("Area: " + areaCircle); // 78.53981633974483

// Math.E - El nombre d'Euler (2.718281828459045)
double creixement = Math.E;
System.out.println("Nombre d'Euler: " + creixement); // 2.718281828459045`,EC=`// Math.abs(x) - Valor absolut (sempre positiu)
System.out.println(Math.abs(-15));    // 15
System.out.println(Math.abs(15));     // 15
System.out.println(Math.abs(-3.7));   // 3.7

// Exemple practic: diferencia entre dos valors
int a = 30, b = 45;
int diferencia = Math.abs(a - b);
System.out.println("Diferencia: " + diferencia); // 15

// Math.max(a, b) - Retorna el major dels dos
System.out.println(Math.max(10, 20));     // 20
System.out.println(Math.max(-5, -10));    // -5
System.out.println(Math.max(3.14, 2.71)); // 3.14

// Math.min(a, b) - Retorna el menor dels dos
System.out.println(Math.min(10, 20));     // 10
System.out.println(Math.min(-5, -10));    // -10

// Trobar el maxim de 3 valors (anidat)
int x = 15, y = 42, z = 28;
int maxim = Math.max(Math.max(x, y), z);
System.out.println("Maxim de tres: " + maxim); // 42`,AC=`// Math.pow(base, exponent) - Potencia
System.out.println(Math.pow(2, 3));    // 8.0 (2^3)
System.out.println(Math.pow(5, 2));    // 25.0 (5^2)
System.out.println(Math.pow(10, 0));   // 1.0 (qualsevol^0 = 1)
System.out.println(Math.pow(2, -1));   // 0.5 (2^-1 = 1/2)

// Exemple: Calcular interes compost
double capital = 1000;
double taxa = 0.05; // 5%
int anys = 10;
double capitalFinal = capital * Math.pow(1 + taxa, anys);
System.out.println("Capital despres de " + anys + " anys: " + capitalFinal);
// Capital despres de 10 anys: 1628.894626777442

// Math.sqrt(x) - Arrel quadrada
System.out.println(Math.sqrt(25));     // 5.0
System.out.println(Math.sqrt(2));      // 1.4142135623730951
System.out.println(Math.sqrt(144));    // 12.0

// Math.cbrt(x) - Arrel cubica
System.out.println(Math.cbrt(27));     // 3.0
System.out.println(Math.cbrt(8));      // 2.0
System.out.println(Math.cbrt(1000));   // 10.0

// Exemple: Calcular hipotenusa (teorema de Pitagores)
double catet1 = 3, catet2 = 4;
double hipotenusa = Math.sqrt(Math.pow(catet1, 2) + Math.pow(catet2, 2));
System.out.println("Hipotenusa: " + hipotenusa); // 5.0`,RC=`// Math.ceil(x) - Arrodoneix cap AMUNT (sostre)
System.out.println(Math.ceil(3.1));    // 4.0
System.out.println(Math.ceil(3.9));    // 4.0
System.out.println(Math.ceil(4.0));    // 4.0
System.out.println(Math.ceil(-2.3));   // -2.0

// Math.floor(x) - Arrodoneix cap AVALL (terra)
System.out.println(Math.floor(3.1));   // 3.0
System.out.println(Math.floor(3.9));   // 3.0
System.out.println(Math.floor(4.0));   // 4.0
System.out.println(Math.floor(-2.3));  // -3.0

// Math.round(x) - Arrodoneix al enter mes proper
System.out.println(Math.round(3.4));   // 3
System.out.println(Math.round(3.5));   // 4
System.out.println(Math.round(3.6));   // 4
System.out.println(Math.round(-2.5));  // -2

// Exemple practic: arrodonir a N decimals
double valor = 3.14159265;

// Arrodonir a 2 decimals
double dosDecimals = Math.round(valor * 100.0) / 100.0;
System.out.println(dosDecimals); // 3.14

// Arrodonir a 3 decimals
double tresDecimals = Math.round(valor * 1000.0) / 1000.0;
System.out.println(tresDecimals); // 3.142`,LC=`// Math.random() - Retorna un double aleatori entre 0.0 (inclusiu) i 1.0 (exclusiu)
double aleatori = Math.random();
System.out.println(aleatori); // ex: 0.7423891...

// Patrons comuns amb Math.random():

// Random double entre 0 i N (exclusiu)
double fins10 = Math.random() * 10; // 0.0 a 9.999...

// Random int entre 0 i N-1 (inclusiu)
int dau = (int)(Math.random() * 6) + 1; // 1 a 6
System.out.println("Dau: " + dau);

// Random int entre min i max (inclusiu)
int min = 10, max = 20;
int aleInt = (int)(Math.random() * (max - min + 1)) + min;
System.out.println("Aleatori [10, 20]: " + aleInt);

// Exemple: Generar 5 numeros aleatoris entre 1 i 100
System.out.println("5 numeros aleatoris:");
for (int i = 0; i < 5; i++) {
    int num = (int)(Math.random() * 100) + 1;
    System.out.println("  " + num);
}`,MC=`// Math.log(x) - Logaritme natural (base e)
System.out.println(Math.log(1));       // 0.0
System.out.println(Math.log(Math.E));  // 1.0
System.out.println(Math.log(10));      // 2.302585...

// Math.log10(x) - Logaritme en base 10
System.out.println(Math.log10(1));     // 0.0
System.out.println(Math.log10(10));    // 1.0
System.out.println(Math.log10(100));   // 2.0
System.out.println(Math.log10(1000));  // 3.0

// Exemple practic: calcular quants digits te un numero
int numero = 123456;
int digits = (int)(Math.log10(numero)) + 1;
System.out.println("El numero " + numero + " te " + digits + " digits"); // 6`,kC=`// IMPORTANT: Les funcions trigonometriques treballen amb RADIANS, no graus!
// Usa Math.toRadians() per convertir graus a radians

// Math.toRadians(graus) - Converteix graus a radians
double radians90 = Math.toRadians(90);
System.out.println(radians90); // 1.5707963... (PI/2)

// Math.sin(x) - Sinus (x en radians)
System.out.println(Math.sin(Math.toRadians(0)));   // 0.0
System.out.println(Math.sin(Math.toRadians(30)));  // 0.5
System.out.println(Math.sin(Math.toRadians(90)));  // 1.0

// Math.cos(x) - Cosinus (x en radians)
System.out.println(Math.cos(Math.toRadians(0)));   // 1.0
System.out.println(Math.cos(Math.toRadians(60)));  // 0.5
System.out.println(Math.cos(Math.toRadians(90)));  // ~0.0

// Math.tan(x) - Tangent (x en radians)
System.out.println(Math.tan(Math.toRadians(0)));   // 0.0
System.out.println(Math.tan(Math.toRadians(45)));  // ~1.0

// Exemple: Calcular l'alcada d'un edifici
// Si estem a 50m de l'edifici i l'angle d'elevacio es 60 graus
double distancia = 50;
double angleGraus = 60;
double alcada = distancia * Math.tan(Math.toRadians(angleGraus));
System.out.println("Alcada aproximada: " + Math.round(alcada) + " metres"); // 87 metres`,NC=`public class ExempleMath {
    public static void main(String[] args) {
        // 1. Calculadora de cercle
        double radi = 7.5;
        double area = Math.PI * Math.pow(radi, 2);
        double perimetre = 2 * Math.PI * radi;
        System.out.println("Cercle de radi " + radi + ":");
        System.out.println("  Area: " + Math.round(area * 100.0) / 100.0);
        System.out.println("  Perimetre: " + Math.round(perimetre * 100.0) / 100.0);

        // 2. Distancia entre dos punts
        double x1 = 3, y1 = 4;
        double x2 = 7, y2 = 1;
        double distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        System.out.println("Distancia: " + Math.round(distancia * 100.0) / 100.0);

        // 3. Simulacio de daus
        System.out.println("Tirant 2 daus:");
        for (int i = 0; i < 5; i++) {
            int dau1 = (int)(Math.random() * 6) + 1;
            int dau2 = (int)(Math.random() * 6) + 1;
            System.out.println("  Tirada " + (i+1) + ": " + dau1 + " + " + dau2
                + " = " + (dau1 + dau2));
        }

        // 4. Nota final amb limits
        double nota = 11.5;
        nota = Math.min(nota, 10.0); // Maxim 10
        nota = Math.max(nota, 0.0);  // Minim 0
        System.out.println("Nota ajustada: " + nota); // 10.0
    }
}`;function TC(){return t.jsxs("div",{children:[t.jsx(w,{title:"La Classe Math"}),t.jsxs(x,{variant:"info",title:"Què és la classe Math?",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Math"})," és una ",t.jsx("strong",{children:"classe utilitària"})," de Java (",t.jsx("code",{children:"java.lang.Math"}),") que proporciona mètodes i constants per realitzar operacions matemàtiques."]}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Tots els mètodes són static:"})," es criden directament amb ",t.jsx("code",{children:"Math.mètode()"}),", sense crear cap objecte."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"No s'instancia:"})," no es pot fer ",t.jsx("code",{children:"new Math()"}),". La classe té el constructor privat."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"No cal import:"})," com que pertany a ",t.jsx("code",{children:"java.lang"}),", està disponible automàticament."]})]})]}),t.jsx(j,{code:wC,label:"Utilitzar la classe Math",showLineNumbers:!0}),t.jsx(w,{title:"Constants"}),t.jsx(Z,{headers:["Constant","Valor","Descripció"],rows:[{cells:["Math.PI","3.141592653589793","El nombre Pi - relació entre circumferència i diàmetre"]},{cells:["Math.E","2.718281828459045","El nombre d'Euler - base del logaritme natural"]}]}),t.jsx(j,{code:CC,label:"Constants Math.PI i Math.E",showLineNumbers:!0}),t.jsx(w,{title:"Mètodes de la Classe Math"}),t.jsx(Z,{headers:["Mètode","Descripció","Retorna","Exemple"],rows:[{group:"Valor Absolut i Comparació"},{cells:["Math.abs(x)","Valor absolut","int/double","Math.abs(-5) // 5"]},{cells:["Math.max(a, b)","El major dels dos valors","int/double","Math.max(3, 7) // 7"]},{cells:["Math.min(a, b)","El menor dels dos valors","int/double","Math.min(3, 7) // 3"]},{group:"Potències i Arrels"},{cells:["Math.pow(base, exp)","Potència (base^exp)","double","Math.pow(2, 3) // 8.0"]},{cells:["Math.sqrt(x)","Arrel quadrada","double","Math.sqrt(25) // 5.0"]},{cells:["Math.cbrt(x)","Arrel cúbica","double","Math.cbrt(27) // 3.0"]},{group:"Arrodoniment"},{cells:["Math.ceil(x)","Arrodoneix cap amunt (sostre)","double","Math.ceil(3.1) // 4.0"]},{cells:["Math.floor(x)","Arrodoneix cap avall (terra)","double","Math.floor(3.9) // 3.0"]},{cells:["Math.round(x)","Arrodoneix al més proper","long","Math.round(3.5) // 4"]},{group:"Aleatori"},{cells:["Math.random()","Nombre aleatori [0.0, 1.0)","double","Math.random() // 0.7423..."]},{group:"Logaritmes"},{cells:["Math.log(x)","Logaritme natural (base e)","double","Math.log(Math.E) // 1.0"]},{cells:["Math.log10(x)","Logaritme en base 10","double","Math.log10(100) // 2.0"]},{group:"Trigonometria (radians)"},{cells:["Math.sin(x)","Sinus","double","Math.sin(Math.PI/2) // 1.0"]},{cells:["Math.cos(x)","Cosinus","double","Math.cos(0) // 1.0"]},{cells:["Math.tan(x)","Tangent","double","Math.tan(Math.PI/4) // ~1.0"]},{cells:["Math.toRadians(x)","Graus a radians","double","Math.toRadians(180) // PI"]}]}),t.jsx(w,{title:"Exemples Detallats"}),t.jsx(x,{variant:"explanation",title:"abs(), max(), min()",children:t.jsxs("p",{children:[t.jsx("code",{children:"Math.abs()"})," retorna el valor absolut (sempre positiu).",t.jsx("code",{children:" Math.max()"})," i ",t.jsx("code",{children:"Math.min()"})," retornen el major i menor de dos valors. Es poden anidar per comparar més de dos valors."]})}),t.jsx(j,{code:EC,label:"abs(), max(), min() - Valor absolut i comparacions",showLineNumbers:!0}),t.jsx(j,{code:AC,label:"pow(), sqrt(), cbrt() - Potències i arrels",showLineNumbers:!0}),t.jsx(x,{variant:"warning",title:"Math.round() vs Math.ceil() vs Math.floor()",children:t.jsxs("p",{children:["No confonguis aquests tres mètodes! ",t.jsx("code",{children:"ceil()"})," sempre arrodoneix cap amunt,",t.jsx("code",{children:" floor()"})," sempre cap avall, i ",t.jsx("code",{children:"round()"})," al més proper. Amb nombres negatius el comportament pot ser confús: ",t.jsx("code",{children:"Math.floor(-2.3)"})," dona ",t.jsx("code",{children:"-3.0"}),", no ",t.jsx("code",{children:"-2.0"}),"!"]})}),t.jsx(j,{code:RC,label:"ceil(), floor(), round() - Arrodoniment",showLineNumbers:!0}),t.jsx(j,{code:LC,label:"Math.random() - Nombres aleatoris",showLineNumbers:!0}),t.jsxs(x,{variant:"success",title:"Fórmula per enters aleatoris en un rang",children:[t.jsxs("p",{children:["La fórmula per obtenir un enter aleatori entre ",t.jsx("code",{children:"min"})," i ",t.jsx("code",{children:"max"})," (ambdós inclusius) és:"]}),t.jsx("p",{children:t.jsx("code",{children:"int aleatori = (int)(Math.random() * (max - min + 1)) + min;"})})]}),t.jsx(j,{code:MC,label:"log(), log10() - Logaritmes",showLineNumbers:!0}),t.jsx(x,{variant:"warning",title:"Trigonometria: Radians, no Graus!",children:t.jsxs("p",{children:["Les funcions ",t.jsx("code",{children:"Math.sin()"}),", ",t.jsx("code",{children:"Math.cos()"})," i ",t.jsx("code",{children:"Math.tan()"})," esperen l'angle en ",t.jsx("strong",{children:"radians"}),", no en graus. Utilitza ",t.jsx("code",{children:"Math.toRadians(graus)"})," per convertir graus a radians abans de passar-los a aquestes funcions."]})}),t.jsx(j,{code:kC,label:"sin(), cos(), tan(), toRadians() - Trigonometria",showLineNumbers:!0}),t.jsx(w,{title:"Exemple Complet"}),t.jsx(x,{variant:"success",title:"Exemple pràctic: Càlculs amb Math",children:t.jsx("p",{children:"Un exemple que combina diversos mètodes de Math per fer càlculs de cercles, distàncies, simulació de daus i ajust de notes."})}),t.jsx(j,{code:NC,label:"Exemple complet amb múltiples mètodes de Math",showLineNumbers:!0}),t.jsx(w,{title:"Patrons Pràctics"}),t.jsx(Z,{headers:["Patró","Codi","Resultat"],rows:[{cells:["Enter aleatori [1, 6]","(int)(Math.random() * 6) + 1","Dau: 1 a 6"]},{cells:["Enter aleatori [min, max]","(int)(Math.random() * (max-min+1)) + min","Rang personalitzat"]},{cells:["Arrodonir a 2 decimals","Math.round(x * 100.0) / 100.0","3.14159 -> 3.14"]},{cells:["Arrodonir a N decimals","Math.round(x * 10^N) / 10^N","Precisió variable"]},{cells:["Limitar un valor [min, max]","Math.max(min, Math.min(max, valor))","Clamp"]},{cells:["Distància entre 2 punts","Math.sqrt(pow(x2-x1,2) + pow(y2-y1,2))","Pitàgores"]},{cells:["Àrea del cercle","Math.PI * Math.pow(radi, 2)","Geometria"]}]}),t.jsx(w,{title:"Resum"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Classe Utilitària",variant:"blue",children:t.jsxs("p",{children:["Math és una classe static. No cal instanciar-la. Crida directament ",t.jsx("code",{children:"Math.mètode()"}),"."]})}),t.jsx(N,{title:"Arrodoniment",variant:"blue",children:t.jsxs("p",{children:[t.jsx("code",{children:"ceil"})," (amunt), ",t.jsx("code",{children:"floor"})," (avall), ",t.jsx("code",{children:"round"})," (més proper). Per N decimals: ",t.jsx("code",{children:"round(x * 10^N) / 10^N"}),"."]})}),t.jsx(N,{title:"Aleatoris",variant:"blue",children:t.jsxs("p",{children:[t.jsx("code",{children:"Math.random()"})," retorna [0.0, 1.0). Usa ",t.jsx("code",{children:"(int)(Math.random() * rang) + min"})," per enters."]})}),t.jsx(N,{title:"Trigonometria",variant:"blue",children:t.jsxs("p",{children:["Funcions trigonomètriques usen ",t.jsx("strong",{children:"radians"}),". Converteix amb ",t.jsx("code",{children:"Math.toRadians(graus)"}),"."]})})]})]})}const PC=`// Math.random() - Metode static de la classe Math
// Retorna un double aleatori entre 0.0 (inclusiu) i 1.0 (exclusiu)
// NO cal importar res - Math ja esta disponible

double aleatori = Math.random();
System.out.println(aleatori); // ex: 0.5823741...

// Random double entre 0 i N
double fins100 = Math.random() * 100; // 0.0 a 99.999...

// Random int entre 0 i N-1
int index = (int)(Math.random() * 10); // 0 a 9

// Random int entre 1 i N (inclusiu)
int dau = (int)(Math.random() * 6) + 1; // 1 a 6

// Random int entre min i max (ambdos inclusius)
int min = 10, max = 50;
int valor = (int)(Math.random() * (max - min + 1)) + min; // 10 a 50`,_C=`// java.util.Random - Una classe completa per generar aleatoris
// Cal importar: import java.util.Random;
// Cal instanciar: crear un objecte Random

import java.util.Random;

// Crear un objecte Random
Random random = new Random();

// Metodes disponibles:
int enterAleatori = random.nextInt();          // Qualsevol int (positiu o negatiu)
int enterLimitat = random.nextInt(100);        // 0 a 99 (exclusiu el limit)
double decimal = random.nextDouble();          // 0.0 a 0.999...
boolean boolea = random.nextBoolean();         // true o false
long gran = random.nextLong();                 // Qualsevol long

// Random int entre min i max (inclusiu)
int min = 10, max = 50;
int valor = random.nextInt(max - min + 1) + min; // 10 a 50`,qC=`import java.util.Random;

Random rng = new Random();

// nextInt() - Enter aleatori (qualsevol valor int)
int qualsevol = rng.nextInt();
System.out.println("Int aleatori: " + qualsevol); // ex: -1238547921

// nextInt(bound) - Enter entre 0 (inclusiu) i bound (exclusiu)
int dau = rng.nextInt(6) + 1; // 1 a 6
System.out.println("Dau: " + dau);

int percentatge = rng.nextInt(101); // 0 a 100
System.out.println("Percentatge: " + percentatge + "%");

// nextDouble() - Double entre 0.0 (inclusiu) i 1.0 (exclusiu)
double probabilitat = rng.nextDouble();
System.out.println("Probabilitat: " + probabilitat);

// nextBoolean() - true o false (50% cada un)
boolean cara = rng.nextBoolean();
System.out.println("Moneda: " + (cara ? "Cara" : "Creu"));

// nextLong() - Long aleatori (qualsevol valor long)
long numGran = rng.nextLong();
System.out.println("Long aleatori: " + numGran);`,OC=`import java.util.Random;

// Random AMB seed: genera SEMPRE la mateixa sequencia
// Util per proves i depuracio
Random rng1 = new Random(42); // seed = 42
System.out.println(rng1.nextInt(100)); // Sempre el MATEIX valor
System.out.println(rng1.nextInt(100)); // Sempre el MATEIX valor

Random rng2 = new Random(42); // mateixa seed
System.out.println(rng2.nextInt(100)); // IGUAL que rng1!
System.out.println(rng2.nextInt(100)); // IGUAL que rng1!

// Random SENSE seed: sequencia diferent cada execucio
Random rng3 = new Random(); // seed basada en el temps del sistema
System.out.println(rng3.nextInt(100)); // Diferent cada vegada`,IC=`// === PATRONS AMB Math.random() ===

// 1. Enter aleatori entre min i max (inclusiu)
int min = 1, max = 10;
int aleatori = (int)(Math.random() * (max - min + 1)) + min;

// 2. Element aleatori d'un array
String[] colors = {"Vermell", "Blau", "Verd", "Groc"};
int index = (int)(Math.random() * colors.length);
String colorAleatori = colors[index];
System.out.println("Color: " + colorAleatori);

// 3. Simular un boolea (cara o creu)
boolean cara = Math.random() < 0.5;
System.out.println("Moneda: " + (cara ? "Cara" : "Creu"));

// 4. Probabilitat personalitzada (30% de possibilitats)
boolean event = Math.random() < 0.30;
System.out.println("Event (30%): " + event);`,DC=`// === PATRONS AMB java.util.Random ===
import java.util.Random;
Random rng = new Random();

// 1. Enter aleatori entre min i max (inclusiu)
int min = 1, max = 10;
int aleatori = rng.nextInt(max - min + 1) + min;

// 2. Element aleatori d'un array
String[] colors = {"Vermell", "Blau", "Verd", "Groc"};
String colorAleatori = colors[rng.nextInt(colors.length)];
System.out.println("Color: " + colorAleatori);

// 3. Simular un boolea (cara o creu) - MES DIRECTE
boolean cara = rng.nextBoolean();
System.out.println("Moneda: " + (cara ? "Cara" : "Creu"));

// 4. Generar array de numeros aleatoris
int[] numeros = new int[10];
for (int i = 0; i < numeros.length; i++) {
    numeros[i] = rng.nextInt(100) + 1; // 1 a 100
}`,FC=`// OBJECTIU: Enter aleatori entre 1 i 100

// Amb Math.random()
int num1 = (int)(Math.random() * 100) + 1;

// Amb Random
Random rng = new Random();
int num2 = rng.nextInt(100) + 1;

// Ambdos fan el MATEIX, pero Random es mes net i llegible`,zC=`// OBJECTIU: Element aleatori d'un array

String[] noms = {"Anna", "Marc", "Laia", "Pere", "Sofia"};

// Amb Math.random()
String nom1 = noms[(int)(Math.random() * noms.length)];

// Amb Random
Random rng = new Random();
String nom2 = noms[rng.nextInt(noms.length)];`,BC=`// OBJECTIU: Valor boolean aleatori

// Amb Math.random()
boolean b1 = Math.random() < 0.5;

// Amb Random - MOLT MES DIRECTE
Random rng = new Random();
boolean b2 = rng.nextBoolean();`,UC=`import java.util.Random;

public class ExempleAleatoris {
    public static void main(String[] args) {
        Random rng = new Random();

        // === Joc: Endevina el numero ===
        int secret = rng.nextInt(100) + 1; // 1 a 100
        System.out.println("He pensat un numero entre 1 i 100...");
        System.out.println("(Pista: el numero es " + secret + ")");

        // === Simulacio: Llancament de moneda ===
        int cares = 0, creus = 0;
        for (int i = 0; i < 1000; i++) {
            if (rng.nextBoolean()) {
                cares++;
            } else {
                creus++;
            }
        }
        System.out.println("1000 llancaments: " + cares + " cares, " + creus + " creus");

        // === Barrejar un array (Fisher-Yates shuffle) ===
        int[] numeros = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        for (int i = numeros.length - 1; i > 0; i--) {
            int j = rng.nextInt(i + 1);
            int temp = numeros[i];
            numeros[i] = numeros[j];
            numeros[j] = temp;
        }
        System.out.print("Array barrejat: ");
        for (int n : numeros) {
            System.out.print(n + " ");
        }

        // === Generar contrasenya aleatoria ===
        String caracters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder contrasenya = new StringBuilder();
        for (int i = 0; i < 12; i++) {
            int index = rng.nextInt(caracters.length());
            contrasenya.append(caracters.charAt(index));
        }
        System.out.println("\\nContrasenya: " + contrasenya.toString());
    }
}`;function $C(){return t.jsxs("div",{children:[t.jsx(w,{title:"Math.random() vs java.util.Random"}),t.jsx(x,{variant:"info",title:"Dues maneres de generar nombres aleatoris",children:t.jsxs("p",{children:["Java ofereix dues formes principals per generar nombres aleatoris: el mètode static ",t.jsx("code",{children:"Math.random()"})," i la classe ",t.jsx("code",{children:"java.util.Random"}),". Ambdues són vàlides, però tenen diferències importants en flexibilitat i ús."]})}),t.jsx(w,{title:"Math.random()"}),t.jsx(x,{variant:"explanation",title:"Com funciona Math.random()",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Mètode static"})," de la classe ",t.jsx("code",{children:"Math"})," - es crida directament sense crear cap objecte."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"No cal import"})," - ",t.jsx("code",{children:"Math"})," pertany a ",t.jsx("code",{children:"java.lang"})," i està sempre disponible."]}),t.jsxs("li",{children:[t.jsxs("strong",{children:["Retorna un ",t.jsx("code",{children:"double"})]})," entre ",t.jsx("code",{children:"0.0"})," (inclusiu) i ",t.jsx("code",{children:"1.0"})," (exclusiu)."]}),t.jsx("li",{children:"Per obtenir enters o rangs personalitzats, cal fer operacions matemàtiques addicionals."})]})}),t.jsx(j,{code:PC,label:"Math.random() - Ús bàsic i patrons",showLineNumbers:!0}),t.jsx(w,{title:"La Classe java.util.Random"}),t.jsx(x,{variant:"explanation",title:"Com funciona java.util.Random",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"És una classe"})," - cal ",t.jsx("code",{children:"import java.util.Random;"})," i crear un objecte amb ",t.jsx("code",{children:"new Random()"}),"."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Múltiples mètodes"})," - pot generar ",t.jsx("code",{children:"int"}),", ",t.jsx("code",{children:"double"}),", ",t.jsx("code",{children:"boolean"}),", ",t.jsx("code",{children:"long"})," directament."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"nextInt(bound)"})," - genera un enter entre 0 (inclusiu) i bound (exclusiu), més còmode que Math.random()."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Seedable"})," - es pot inicialitzar amb una seed per obtenir seqüències reproduïbles."]})]})}),t.jsx(j,{code:_C,label:"java.util.Random - Creació i ús bàsic",showLineNumbers:!0}),t.jsx(Z,{headers:["Mètode","Retorna","Rang","Exemple"],rows:[{cells:["nextInt()","int","Qualsevol int","rng.nextInt() // -1238547921"]},{cells:["nextInt(bound)","int","0 a bound-1","rng.nextInt(6) // 0 a 5"]},{cells:["nextDouble()","double","0.0 a 0.999...","rng.nextDouble() // 0.7423..."]},{cells:["nextBoolean()","boolean","true o false","rng.nextBoolean() // true"]},{cells:["nextLong()","long","Qualsevol long","rng.nextLong()"]}]}),t.jsx(j,{code:qC,label:"Tots els mètodes de Random",showLineNumbers:!0}),t.jsx(w,{title:"Seed: Seqüències Reproduïbles"}),t.jsx(x,{variant:"info",title:"Què és una seed?",children:t.jsxs("p",{children:["Una ",t.jsx("strong",{children:"seed"})," és un valor inicial que determina la seqüència de nombres aleatoris. Si dos objectes ",t.jsx("code",{children:"Random"})," tenen la mateixa seed, generaran",t.jsx("strong",{children:" exactament la mateixa seqüència"}),". Això és molt útil per fer proves i depurar codi, ja que pots reproduir els mateixos resultats."]})}),t.jsx(j,{code:OC,label:"Seed per seqüències reproduïbles",showLineNumbers:!0}),t.jsx(w,{title:"Comparació Directa"}),t.jsxs(pe,{children:[t.jsx($,{title:"Math.random()",variant:"blue",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Tipus:"})," Mètode static"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Import:"})," No cal"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Instanciar:"})," No cal"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Retorna:"})," Només double [0.0, 1.0)"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Enters:"})," Cal cast manual ",t.jsx("code",{children:"(int)"})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Boolean:"})," Cal ",t.jsx("code",{children:"< 0.5"})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Seed:"})," No suportat"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Ideal per:"})," Ús ràpid i senzill"]})]})}),t.jsx($,{title:"java.util.Random",variant:"blue",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Tipus:"})," Classe completa"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Import:"})," ",t.jsx("code",{children:"import java.util.Random"})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Instanciar:"})," ",t.jsx("code",{children:"new Random()"})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Retorna:"})," int, double, boolean, long"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Enters:"})," Directe amb ",t.jsx("code",{children:"nextInt(bound)"})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Boolean:"})," Directe amb ",t.jsx("code",{children:"nextBoolean()"})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Seed:"})," Suportat (reproduïble)"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Ideal per:"})," Ús flexible i avançat"]})]})})]}),t.jsx(w,{title:"Quan Usar Cada Un?"}),t.jsxs(pe,{children:[t.jsx($,{title:"Usa Math.random() quan...",variant:"good",children:t.jsxs("ul",{children:[t.jsx("li",{children:"Necessites un random ràpid i senzill"}),t.jsx("li",{children:"No vols importar cap classe addicional"}),t.jsx("li",{children:"Només necessites un double aleatori"}),t.jsx("li",{children:"És un script petit o un exercici bàsic"}),t.jsx("li",{children:"No necessites reproduïbilitat"})]})}),t.jsx($,{title:"Usa Random quan...",variant:"good",children:t.jsxs("ul",{children:[t.jsx("li",{children:"Necessites generar enters directament"}),t.jsx("li",{children:"Necessites booleans aleatoris"}),t.jsx("li",{children:"Vols seqüències reproduïbles (seed)"}),t.jsx("li",{children:"Fas servir aleatoris en molts llocs del codi"}),t.jsx("li",{children:"El programa és més complex"})]})})]}),t.jsx(w,{title:"Exemples Comparatius"}),t.jsx(x,{variant:"explanation",title:"Mateixa tasca, dues solucions",children:t.jsxs("p",{children:["A continuació comparem com resoldre les mateixes tasques comunes amb ",t.jsx("code",{children:"Math.random()"})," i amb ",t.jsx("code",{children:"java.util.Random"}),"."]})}),t.jsx(j,{code:FC,label:"Enter aleatori en un rang",showLineNumbers:!0}),t.jsx(j,{code:zC,label:"Element aleatori d'un array",showLineNumbers:!0}),t.jsx(j,{code:BC,label:"Boolean aleatori",showLineNumbers:!0}),t.jsx(w,{title:"Patrons Comuns"}),t.jsx(j,{code:IC,label:"Patrons amb Math.random()",showLineNumbers:!0}),t.jsx(j,{code:DC,label:"Patrons amb java.util.Random",showLineNumbers:!0}),t.jsxs(x,{variant:"success",title:"Recomanació",children:[t.jsxs("p",{children:["Per a la majoria de programes, ",t.jsx("strong",{children:"java.util.Random"})," és la millor opció. És més llegible, més flexible, i ofereix mètodes directes per generar enters i booleans sense haver de fer operacions addicionals. A més, la possibilitat d'usar seeds la fa ideal per proves i depuració."]}),t.jsxs("p",{children:[t.jsx("code",{children:"Math.random()"})," és perfecte quan necessites un nombre aleatori ràpid en un context senzill i no vols importar cap classe."]})]}),t.jsx(w,{title:"Exemple Complet"}),t.jsx(x,{variant:"info",title:"Exemple pràctic amb java.util.Random",children:t.jsx("p",{children:"Un exemple complet que mostra diversos usos de nombres aleatoris: un joc, simulació de moneda, barreja d'array (shuffle) i generació de contrasenyes."})}),t.jsx(j,{code:UC,label:"Exemple complet: Joc, simulació, shuffle i contrasenyes",showLineNumbers:!0}),t.jsx(w,{title:"Resum"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Math.random()",variant:"blue",children:t.jsxs("p",{children:["Mètode static. Retorna double [0.0, 1.0). Ràpid i sense imports. Per enters: ",t.jsx("code",{children:"(int)(Math.random() * rang) + min"}),"."]})}),t.jsx(N,{title:"java.util.Random",variant:"blue",children:t.jsxs("p",{children:["Classe amb múltiples mètodes: ",t.jsx("code",{children:"nextInt()"}),", ",t.jsx("code",{children:"nextDouble()"}),", ",t.jsx("code",{children:"nextBoolean()"}),". Més flexible i llegible."]})}),t.jsx(N,{title:"Seed",variant:"blue",children:t.jsxs("p",{children:["Només ",t.jsx("code",{children:"Random"})," suporta seeds per seqüències reproduïbles. Útil per proves: ",t.jsx("code",{children:"new Random(42)"}),"."]})}),t.jsx(N,{title:"Recomanació",variant:"blue",children:t.jsxs("p",{children:["Prefereix ",t.jsx("code",{children:"java.util.Random"})," per projectes. Usa ",t.jsx("code",{children:"Math.random()"})," per coses ràpides i senzilles."]})})]})]})}function GC(){return t.jsxs("div",{children:[t.jsx(w,{title:"For-each: sintaxi simplificada per recórrer col·leccions"}),t.jsxs(x,{variant:"info",children:[t.jsxs("p",{children:["El bucle ",t.jsx("strong",{children:"for tradicional"})," és l'estàndard i el més utilitzat a Java, especialment per la seva similitud amb C, C++ i C#. És la base que has de dominar primer."]}),t.jsxs("p",{style:{marginTop:"8px"},children:["El ",t.jsx("strong",{children:"for-each"})," (també anomenat ",t.jsx("em",{children:"enhanced for"}),") és una sintaxi simplificada que Java ofereix per recórrer arrays i col·leccions quan ",t.jsx("strong",{children:"no necessites l'índex"}),"."]})]}),t.jsx(x,{variant:"warning",title:"Prioritat: for tradicional",children:t.jsx("p",{children:"A nivell de DAM, el for tradicional és la prioritat. El for-each és un complement útil que simplifica el codi en certs casos, però no substitueix el for clàssic."})}),t.jsx(w,{title:"Sintaxi del for-each"}),t.jsx(j,{label:"Estructura general",code:`for (Tipus element : coleccio) {
    // codi que utilitza 'element'
}`}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Es llegeix com: ",t.jsx("strong",{children:'"per cada element de la col·lecció, fes..."'}),". El compilador s'encarrega internament de gestionar l'índex i l'accés als elements."]})}),t.jsx(w,{title:"Comparació: for tradicional vs for-each"}),t.jsxs(pe,{children:[t.jsxs($,{title:"For tradicional (amb índex)",variant:"blue",children:[t.jsxs("p",{children:["Tens control total amb l'índex ",t.jsx("strong",{children:"i"}),"."]}),t.jsx(j,{code:`int[] nums = {10, 20, 30, 40, 50};

for (int i = 0; i < nums.length; i++) {
    System.out.println("Index " + i + ": " + nums[i]);
}`})]}),t.jsxs($,{title:"For-each (sense índex)",variant:"good",children:[t.jsxs("p",{children:["Més net, però ",t.jsx("strong",{children:"no tens accés a l'índex"}),"."]}),t.jsx(j,{code:`int[] nums = {10, 20, 30, 40, 50};

for (int num : nums) {
    System.out.println(num);
}`})]})]}),t.jsx(w,{title:"Quan utilitzar cadascun?"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Utilitza for tradicional quan...",variant:"blue",children:t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsx("li",{children:"Necessites l'índex (saber en quina posició estàs)"}),t.jsx("li",{children:"Vols modificar els elements de l'array"}),t.jsx("li",{children:"Vols recórrer només una part de l'array"}),t.jsx("li",{children:"Necessites recórrer al revés (de final a inici)"}),t.jsx("li",{children:"Necessites comparar elements consecutius"})]})}),t.jsx(N,{title:"Utilitza for-each quan...",variant:"green",children:t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsx("li",{children:"Només necessites llegir tots els elements"}),t.jsx("li",{children:"No necessites saber la posició"}),t.jsx("li",{children:"Vols un codi més curt i llegible"}),t.jsx("li",{children:"Treballes amb col·leccions (ArrayList, etc.)"})]})})]}),t.jsx(w,{title:"Exemples amb diferents tipus"}),t.jsx(j,{label:"Array d'enters (int)",showLineNumbers:!0,code:`int[] notes = {7, 9, 5, 8, 6};
int suma = 0;

for (int nota : notes) {
    suma += nota;
}

double mitjana = (double) suma / notes.length;
System.out.println("Mitjana: " + mitjana);`}),t.jsx(j,{label:"Array de Strings",showLineNumbers:!0,code:`String[] noms = {"Anna", "Marc", "Laia", "Pol"};

for (String nom : noms) {
    System.out.println("Hola, " + nom + "!");
}
// Hola, Anna!
// Hola, Marc!
// Hola, Laia!
// Hola, Pol!`}),t.jsx(j,{label:"Array d'objectes",showLineNumbers:!0,code:`// Suposem que tenim una classe Alumne amb getNom() i getNota()
Alumne[] alumnes = {
    new Alumne("Anna", 8.5),
    new Alumne("Marc", 6.0),
    new Alumne("Laia", 9.2)
};

for (Alumne a : alumnes) {
    System.out.println(a.getNom() + " -> " + a.getNota());
}`}),t.jsx(w,{title:"Limitacions del for-each"}),t.jsx(x,{variant:"warning",title:"El for-each NO et dona l'índex",children:t.jsxs("p",{children:["Dins del for-each, ",t.jsx("strong",{children:"no tens cap variable d'índex"}),". Si necessites saber en quina posició estàs, has d'usar el for tradicional."]})}),t.jsx(x,{variant:"error",title:"No pots modificar l'array amb la variable del bucle",children:t.jsxs("p",{children:["La variable del for-each és una ",t.jsx("strong",{children:"còpia"})," del valor. Modificar-la no canvia l'array original."]})}),t.jsxs(pe,{children:[t.jsx($,{title:"Això NO funciona",variant:"bad",children:t.jsx(j,{code:`int[] nums = {1, 2, 3};

// Intent de duplicar cada valor
for (int num : nums) {
    num = num * 2; // Modifica la COPIA, no l'array!
}
// nums segueix sent {1, 2, 3}`})}),t.jsx($,{title:"Això SÍ funciona",variant:"good",children:t.jsx(j,{code:`int[] nums = {1, 2, 3};

// Amb for tradicional pots modificar
for (int i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * 2; // Modifica l'array!
}
// nums ara es {2, 4, 6}`})})]}),t.jsx(w,{title:"For-each amb col·leccions (ArrayList)"}),t.jsx(x,{variant:"info",children:t.jsxs("p",{children:["El for-each funciona no només amb arrays, sinó també amb qualsevol col·lecció de Java com ",t.jsx("strong",{children:"ArrayList"}),". De fet, és on més brilla perquè l'alternativa amb for tradicional requereix usar ",t.jsx("code",{children:".get(i)"})," i ",t.jsx("code",{children:".size()"}),"."]})}),t.jsxs(pe,{children:[t.jsx($,{title:"ArrayList amb for tradicional",variant:"blue",children:t.jsx(j,{code:`ArrayList<String> fruites = new ArrayList<>();
fruites.add("Poma");
fruites.add("Platan");
fruites.add("Taronja");

for (int i = 0; i < fruites.size(); i++) {
    System.out.println(fruites.get(i));
}`})}),t.jsx($,{title:"ArrayList amb for-each",variant:"good",children:t.jsx(j,{code:`ArrayList<String> fruites = new ArrayList<>();
fruites.add("Poma");
fruites.add("Platan");
fruites.add("Taronja");

for (String fruita : fruites) {
    System.out.println(fruita);
}`})})]}),t.jsx(w,{title:"Resum"}),t.jsx(Z,{headers:["Característica","for tradicional","for-each"],rows:[{cells:["Accés a l'índex","Sí","No"]},{cells:["Modificar l'array","Sí","No (modifica còpia)"]},{cells:["Recórrer parcialment","Sí","No (sempre recorre tot)"]},{cells:["Recórrer al revés","Sí","No"]},{cells:["Llegibilitat","Correcta","Més neta i curta"]},{cells:["Funciona amb ArrayList","Sí (.get/.size)","Sí (directament)"]}]}),t.jsx(x,{variant:"success",title:"Consell",children:t.jsxs("p",{children:["Domina primer el ",t.jsx("strong",{children:"for tradicional"}),", que és el que trobaràs a la majoria d'exercicis i exàmens. Un cop el tinguis clar, el for-each et serà molt fàcil d'incorporar com a eina complementària."]})})]})}function VC(){return t.jsxs("div",{children:[t.jsx(w,{title:"Operador Ternari: if-else compacte en una línia"}),t.jsxs(x,{variant:"info",children:[t.jsxs("p",{children:["L'operador ternari és una forma ",t.jsx("strong",{children:"compacta"})," d'escriure un if-else senzill en una sola línia. És útil quan vols assignar un valor a una variable en funció d'una condició simple."]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Recorda: el ",t.jsx("strong",{children:"if-else tradicional"})," segueix sent la forma estàndard i prioritària. L'operador ternari és un complement per a casos concrets."]})]}),t.jsx(w,{title:"Sintaxi"}),t.jsx(j,{label:"Estructura de l'operador ternari",code:"variable = condicio ? valorSiTrue : valorSiFalse;"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Es llegeix com: ",t.jsx("strong",{children:'"Si la condició és certa, agafa el primer valor; si no, agafa el segon."'})]})}),t.jsxs(N,{title:"Esquema mental",variant:"blue",children:[t.jsx("p",{children:"CONDICIÓ → si TRUE → valor A"}),t.jsx("p",{children:"CONDICIÓ → si FALSE → valor B"})]}),t.jsx(w,{title:"Comparació: if-else vs ternari"}),t.jsxs(pe,{children:[t.jsx($,{title:"If-else tradicional (5+ línies)",variant:"blue",children:t.jsx(j,{code:`String resultat;

if (nota >= 5) {
    resultat = "Aprovat";
} else {
    resultat = "Suspes";
}`})}),t.jsx($,{title:"Operador ternari (1 línia)",variant:"good",children:t.jsx(j,{code:'String resultat = (nota >= 5) ? "Aprovat" : "Suspes";'})})]}),t.jsx(x,{variant:"explanation",children:t.jsx("p",{children:"Ambdós codis fan exactament el mateix. La diferència és purament estètica: el ternari és més compacte, però el if-else és més explícit i fàcil de llegir per a qui comença."})}),t.jsx(w,{title:"Casos d'ús pràctics"}),t.jsx(j,{label:"1. Assignar una variable segons una condició",showLineNumbers:!0,code:`int edat = 20;
String tipus = (edat >= 18) ? "Adult" : "Menor";
System.out.println(tipus); // Adult`}),t.jsx(j,{label:"2. Retornar un valor des d'un mètode",showLineNumbers:!0,code:`public static String obtenirSalutacio(boolean esMati) {
    return esMati ? "Bon dia!" : "Bona tarda!";
}`}),t.jsx(j,{label:"3. Directament dins d'un println",showLineNumbers:!0,code:`int puntuacio = 85;
System.out.println("Resultat: " + (puntuacio >= 50 ? "PASSAT" : "FALLAT"));`}),t.jsx(j,{label:"4. Determinar el major de dos números",showLineNumbers:!0,code:`int a = 15, b = 23;
int major = (a > b) ? a : b;
System.out.println("El major es: " + major); // 23`}),t.jsx(j,{label:"5. Paritat d'un número",showLineNumbers:!0,code:`int numero = 7;
String paritat = (numero % 2 == 0) ? "Parell" : "Senar";
System.out.println(numero + " es " + paritat); // 7 es Senar`}),t.jsx(j,{label:"6. Valor absolut (sense Math.abs)",showLineNumbers:!0,code:`int valor = -42;
int absolut = (valor >= 0) ? valor : -valor;
System.out.println("Valor absolut: " + absolut); // 42`}),t.jsx(w,{title:"Ternari aniuat (existeix, però no el recomanem)"}),t.jsx(x,{variant:"warning",title:"Evita els ternaris aniuats",children:t.jsxs("p",{children:["Tècnicament és possible encadenar ternaris, però el resultat és un codi molt difícil de llegir i mantenir. ",t.jsx("strong",{children:"No ho recomanem."})]})}),t.jsxs(pe,{children:[t.jsx($,{title:"Ternari aniuat (difícil de llegir)",variant:"bad",children:t.jsx(j,{code:`// NO recomanat!
String categoria = (edat < 12) ? "Nen"
    : (edat < 18) ? "Adolescent"
    : (edat < 65) ? "Adult"
    : "Jubilat";`})}),t.jsx($,{title:"If-else (molt més clar)",variant:"good",children:t.jsx(j,{code:`String categoria;

if (edat < 12) {
    categoria = "Nen";
} else if (edat < 18) {
    categoria = "Adolescent";
} else if (edat < 65) {
    categoria = "Adult";
} else {
    categoria = "Jubilat";
}`})})]}),t.jsx(w,{title:"Quan utilitzar i quan NO"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Utilitza l'operador ternari quan...",variant:"green",children:t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsx("li",{children:"La decisió és simple: una condició, dos valors possibles"}),t.jsx("li",{children:"Vols assignar un valor a una variable en una sola línia"}),t.jsx("li",{children:"Vols retornar un valor senzill des d'un mètode"}),t.jsx("li",{children:"El codi resultant segueix sent fàcil de llegir"})]})}),t.jsx(N,{title:"NO utilitzis l'operador ternari quan...",variant:"pink",children:t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsx("li",{children:"La lògica és complexa o té múltiples condicions"}),t.jsx("li",{children:"Necessites executar varies instruccions (no només retornar un valor)"}),t.jsx("li",{children:"Voldries aniuar ternaris dins d'altres ternaris"}),t.jsx("li",{children:"El codi es fa difícil d'entendre a primera vista"})]})})]}),t.jsx(w,{title:"Resum"}),t.jsx(Z,{headers:["Característica","if-else","Operador ternari"],rows:[{cells:["Línies de codi","5+ línies","1 línia"]},{cells:["Llegibilitat","Molt clara","Clara si és simple"]},{cells:["Múltiples instruccions","Sí","No (només retorna un valor)"]},{cells:["Condicions complexes","Sí","No recomanat"]},{cells:["Aniuament","Fàcil de llegir","Molt confús"]},{cells:["Ús principal","Qualsevol decisió","Assignacions simples"]}]}),t.jsx(x,{variant:"success",title:"Consell",children:t.jsxs("p",{children:["Pensa en l'operador ternari com un ",t.jsx("strong",{children:"atall"}),": si el caminet curt és clar i segur, pren-lo. Si és fosc i ple de revolts (condicions complexes), millor el camí principal (if-else)."]})})]})}function HC(){return t.jsxs("div",{children:[t.jsx(w,{title:"var i altres funcionalitats modernes de Java"}),t.jsxs(x,{variant:"info",children:[t.jsxs("p",{children:["Java ha anat evolucionant amb noves versions que incorporen sintaxis més modernes i compactes. Aquí veurem algunes de les més útils: ",t.jsx("strong",{children:"var"}),","," ",t.jsx("strong",{children:"text blocks"}),", ",t.jsx("strong",{children:"switch expressions"})," i"," ",t.jsx("strong",{children:"records"}),"."]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Totes aquestes funcionalitats són ",t.jsx("strong",{children:"complements"})," a la sintaxi tradicional, que segueix sent la prioritat a nivell acadèmic."]})]}),t.jsx(x,{variant:"warning",title:"Important per a estudiants de DAM",children:t.jsxs("p",{children:["Aquestes funcionalitats són ",t.jsx("strong",{children:'"nice to know"'})," (bo de saber). A nivell de DAM, centra't primer en la sintaxi tradicional que és la que apareixerà als exàmens i exercicis. Coneix-les per si les trobes en codi real o tutorials moderns."]})}),t.jsx(w,{title:"var: inferència de tipus local (Java 10+)"}),t.jsx(x,{variant:"info",children:t.jsxs("p",{children:["La paraula clau ",t.jsx("strong",{children:"var"})," permet declarar variables locals sense especificar explícitament el tipus. El compilador ",t.jsx("strong",{children:"dedueix"})," el tipus automàticament a partir del valor assignat."]})}),t.jsxs(pe,{children:[t.jsx($,{title:"Forma tradicional (tipus explícit)",variant:"blue",children:t.jsx(j,{code:`String nom = "Hola";
int edat = 25;
double preu = 19.99;
ArrayList<String> llista = new ArrayList<>();`})}),t.jsx($,{title:"Amb var (tipus inferit)",variant:"good",children:t.jsx(j,{code:`var nom = "Hola";        // String
var edat = 25;           // int
var preu = 19.99;        // double
var llista = new ArrayList<String>();`})})]}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["En ambdós casos, el tipus és ",t.jsx("strong",{children:"exactament el mateix"}),". L'única diferència és que amb ",t.jsx("code",{children:"var"})," no l'escrius tu, el compilador el dedueix. Un cop assignat, el tipus queda fixat."]})}),t.jsx(x,{variant:"error",title:"var NO fa que Java sigui dinàmic!",children:t.jsxs("p",{children:["A diferència de Python o JavaScript, ",t.jsx("code",{children:"var"})," ",t.jsx("strong",{children:"no"})," converteix Java en un llenguatge de tipat dinàmic. El tipus es determina en temps de compilació i no pot canviar després."]})}),t.jsx(j,{label:"Això dona ERROR de compilació",code:`var x = 10;       // x es int
x = "hola";       // ERROR! No pots assignar String a un int`}),t.jsx(w,{title:"On es pot i on NO es pot usar var"}),t.jsxs(ge,{children:[t.jsxs(N,{title:"SÍ es pot usar",variant:"green",children:[t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsx("li",{children:"Variables locals dins d'un mètode"}),t.jsx("li",{children:"Variables dins de bucles for"}),t.jsx("li",{children:"Variables dins de blocs try-with-resources"})]}),t.jsx(j,{code:`// Dins d'un metode
var resultat = calcular();

// Dins d'un for
for (var i = 0; i < 10; i++) { }

// Dins d'un for-each
for (var nom : llistaNoms) { }`})]}),t.jsxs(N,{title:"NO es pot usar",variant:"pink",children:[t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsx("li",{children:"Atributs de classe (camps/fields)"}),t.jsx("li",{children:"Paràmetres de mètodes"}),t.jsx("li",{children:"Tipus de retorn de mètodes"}),t.jsx("li",{children:"Sense valor inicial (el compilador no pot deduir)"})]}),t.jsx(j,{code:`// ERROR: camp de classe
class Persona {
    var nom = "Anna"; // NO COMPILA
}

// ERROR: parametre
public void saludar(var nom) { } // NO

// ERROR: retorn
public var getEdat() { } // NO

// ERROR: sense inicialitzar
var x; // NO COMPILA (quin tipus es?)`})]})]}),t.jsx(Z,{headers:["Situació","Es pot usar var?"],rows:[{cells:["Variable local amb assignació","Sí"]},{cells:["Variable en bucle for/for-each","Sí"]},{cells:["Atribut de classe","No"]},{cells:["Paràmetre de mètode","No"]},{cells:["Tipus de retorn","No"]},{cells:["Sense valor inicial","No"]}]}),t.jsx(w,{title:"Quan usar var i quan no"}),t.jsxs(pe,{children:[t.jsxs($,{title:"Bon ús de var",variant:"good",children:[t.jsx("p",{children:"Quan el tipus és obvi pel context:"}),t.jsx(j,{code:`// El tipus es evident
var scanner = new Scanner(System.in);
var noms = new ArrayList<String>();
var resultat = "Aprovat";`})]}),t.jsxs($,{title:"Mal ús de var",variant:"bad",children:[t.jsx("p",{children:"Quan el tipus no és clar i var confon:"}),t.jsx(j,{code:`// Quin tipus retorna? No es clar!
var dades = obtenirDades();
var resultat = processar(x, y);
var config = inicialitzar();`})]})]}),t.jsx(w,{title:"Text blocks: strings multilínia (Java 13+)"}),t.jsx(x,{variant:"info",children:t.jsxs("p",{children:["Els ",t.jsx("strong",{children:"text blocks"})," permeten escriure cadenes de text de múltiples línies sense haver de concatenar ni usar ",t.jsx("code",{children:"\\n"}),". S'utilitzen tres cometes dobles ",t.jsx("code",{children:'"""'})," per obrir i tancar."]})}),t.jsxs(pe,{children:[t.jsx($,{title:"Forma tradicional",variant:"blue",children:t.jsx(j,{code:`String json = "{\\n" +
    "  \\"nom\\": \\"Anna\\",\\n" +
    "  \\"edat\\": 25\\n" +
    "}";`})}),t.jsx($,{title:"Amb text blocks",variant:"good",children:t.jsx(j,{code:`String json = """
    {
      "nom": "Anna",
      "edat": 25
    }
    """;`})})]}),t.jsx(j,{label:"Molt útil per a SQL, HTML, JSON...",showLineNumbers:!0,code:`// Consulta SQL multilinia
String sql = """
    SELECT nom, edat
    FROM alumnes
    WHERE nota >= 5
    ORDER BY nom
    """;

// Missatge formatejat
String menu = """
    === MENU PRINCIPAL ===
    1. Nou alumne
    2. Llistar alumnes
    3. Sortir
    ===================""";
System.out.println(menu);`}),t.jsx(w,{title:"Switch expressions: switch que retorna valor (Java 14+)"}),t.jsx(x,{variant:"info",children:t.jsxs("p",{children:["Les ",t.jsx("strong",{children:"switch expressions"})," són una versió millorada del switch que pot retornar un valor directament, utilitza fletxes (",t.jsx("code",{children:"->"}),") en comptes de ",t.jsx("code",{children:"case/break"}),", i és més compacte."]})}),t.jsxs(pe,{children:[t.jsx($,{title:"Switch tradicional",variant:"blue",children:t.jsx(j,{code:`String nomDia;
switch (dia) {
    case 1:
        nomDia = "Dilluns";
        break;
    case 2:
        nomDia = "Dimarts";
        break;
    case 3:
        nomDia = "Dimecres";
        break;
    default:
        nomDia = "Desconegut";
        break;
}`})}),t.jsx($,{title:"Switch expression",variant:"good",children:t.jsx(j,{code:`String nomDia = switch (dia) {
    case 1 -> "Dilluns";
    case 2 -> "Dimarts";
    case 3 -> "Dimecres";
    default -> "Desconegut";
};`})})]}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Avantatges del switch expression: no necessita ",t.jsx("code",{children:"break"})," (no hi ha fall-through accidental), pot retornar valors directament, i permet agrupar casos fàcilment."]})}),t.jsx(j,{label:"Agrupar múltiples casos",code:`String tipusDia = switch (dia) {
    case 1, 2, 3, 4, 5 -> "Laborable";
    case 6, 7           -> "Cap de setmana";
    default             -> "Invalid";
};`}),t.jsx(w,{title:"Records: classes de dades simplificades (Java 16+)"}),t.jsx(x,{variant:"info",children:t.jsxs("p",{children:["Els ",t.jsx("strong",{children:"records"})," són una forma molt compacta de crear classes que només serveixen per guardar dades (com un DTO). Java genera automàticament el constructor, getters, ",t.jsx("code",{children:"equals()"}),", ",t.jsx("code",{children:"hashCode()"})," i"," ",t.jsx("code",{children:"toString()"}),"."]})}),t.jsxs(pe,{children:[t.jsx($,{title:"Classe tradicional",variant:"blue",children:t.jsx(j,{code:`public class Punt {
    private final int x;
    private final int y;

    public Punt(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() { return x; }
    public int getY() { return y; }

    // + equals, hashCode, toString...
}`})}),t.jsx($,{title:"Amb record",variant:"good",children:t.jsx(j,{code:`public record Punt(int x, int y) { }

// Ja inclou constructor, getters,
// equals, hashCode i toString!

// Us:
var p = new Punt(3, 5);
System.out.println(p.x()); // 3
System.out.println(p);     // Punt[x=3, y=5]`})})]}),t.jsx(x,{variant:"warning",title:"Limitacions dels records",children:t.jsxs("p",{children:["Els records són ",t.jsx("strong",{children:"immutables"})," (no tenen setters), no poden heretar d'altres classes, i els seus camps són finals. Són ideals per a dades simples, però no substitueixen les classes normals amb lògica complexa."]})}),t.jsx(w,{title:"Resum de funcionalitats modernes"}),t.jsx(Z,{headers:["Funcionalitat","Versió de Java","Per a què serveix","Prioritat a DAM"],rows:[{cells:["var","Java 10+","Inferència de tipus en variables locals","Útil però no essencial"]},{cells:['Text blocks (""")',"Java 13+","Strings multilínia sense \\n","Bo de saber"]},{cells:["Switch expressions","Java 14+","Switch que retorna valor, sense break","Bo de saber"]},{cells:["Records","Java 16+","Classes de dades compactes","Avançat, bo de saber"]}]}),t.jsx(x,{variant:"success",title:"Consell final",children:t.jsxs("p",{children:["Totes aquestes funcionalitats fan el codi més curt i modern, però la base de Java ",t.jsx("strong",{children:"segueix sent la mateixa"}),". Aprendre la sintaxi tradicional primer et garanteix entendre qualsevol codi Java, sigui antic o modern. Aquestes eines modernes les aniràs incorporant naturalment a mesura que guanyis experiència."]})})]})}function QC(){return t.jsxs("div",{children:[t.jsx(w,{title:"Com es pica codi en equip"}),t.jsxs(x,{variant:"info",title:"Que veurem aqui?",children:[t.jsxs("p",{children:["A ",t.jsx("strong",{children:"Anatomia d'un Projecte Real"})," heu vist COM es dissenya i estructura un projecte des de zero. Aqui veurem la part que falta:",t.jsx("strong",{children:" com es treballa dia a dia amb aquest codi"}),". Com fas servir Git quan sou 5 persones tocant el mateix projecte. Que passa quan obres un fitxer que no has escrit tu. Com trobes i arregles un bug. Com evites que el projecte es converteixi en un caos."]}),t.jsx("p",{style:{marginTop:"8px"},children:"Res de teoria abstracta: tot son situacions reals que viureu des del primer dia de feina."})]}),t.jsx(w,{title:"El teu primer dia: clonar i entendre el projecte"}),t.jsx(x,{variant:"explanation",title:"Arribes a una empresa, t'assignen un projecte. Ara que?",children:t.jsxs("p",{children:["Quan arribes a un equip, el projecte ja existeix. Pot tenir ",t.jsx("strong",{children:"milers de fitxers"})," ","escrits durant mesos o anys per persones que potser ja no hi treballen. El teu primer objectiu no es programar: es ",t.jsx("strong",{children:"entendre que hi ha"}),"."]})}),t.jsx(j,{label:"Pas 1: Clonar el projecte i fer-lo funcionar",showLineNumbers:!0,code:`# El teu company et passa el link del repositori
git clone https://github.com/empresa/restaurant-app.git
cd restaurant-app

# El primer que fas: llegir el README.md
# Aqui et diu com instal·lar dependencies i executar
cat README.md

# Instal·lar dependencies (Maven, en projectes Java)
mvn install

# Executar l'aplicacio
mvn spring-boot:run

# Si funciona: perfecte. Si no funciona: pregunta.
# NO perdis 4 hores intentant arreglar-ho sol el primer dia.`}),t.jsx(x,{variant:"info",title:"Que mires primer per entendre el projecte?",children:t.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"README.md"})," — Que fa l'aplicacio i com executar-la."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"L'estructura de carpetes"})," — Quins packages hi ha (model, service, controller...)."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"El model/"})," — Les classes de dades et diuen de que VA l'aplicacio. Si veus ",t.jsx("code",{children:"Reserva.java"}),", ",t.jsx("code",{children:"Taula.java"}),", ",t.jsx("code",{children:"Client.java"}),"... ja saps que es un sistema de reserves."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Els tests"})," — Llegir els tests es la millor forma d'entendre que fa cada classe, perque mostren exemples reals d'us."]})]})}),t.jsx(w,{title:"Git en equip: el flux que seguiras cada dia"}),t.jsx(x,{variant:"explanation",title:"Per que branques?",children:t.jsxs("p",{children:[`Imagina que tu estas fent la funcionalitat de "crear reserves" i un company esta fent "gestionar el menu". Si els dos toqueu el mateix fitxer a la mateixa branca, quan un faci push, l'altre tindra conflictes. Les `,t.jsx("strong",{children:"branques"})," ","solucionen aixo: cada persona treballa en una copia independent del codi, i nomes es fusiona quan esta acabat i revisat."]})}),t.jsx(j,{label:"El cicle complet que repetiras amb cada tasca",showLineNumbers:!0,code:`# ──────────────────────────────────────────
# 1. ACTUALITZAR-SE abans de comencar res
# ──────────────────────────────────────────
git checkout develop          # Anar a la branca principal de dev
git pull origin develop       # Descarregar els ultims canvis dels companys

# ──────────────────────────────────────────
# 2. CREAR BRANCA per la teva tasca
# ──────────────────────────────────────────
# El nom descriu QUE fas. Convencio: tipus/descripcio
git checkout -b feature/crear-reserva

# ──────────────────────────────────────────
# 3. PROGRAMAR + COMMITS petits
# ──────────────────────────────────────────
# Has creat la classe Reserva.java? Commit.
git add src/model/Reserva.java
git commit -m "feat: crear classe Reserva amb atributs i constructor"

# Has escrit el servei? Commit.
git add src/service/ServeiReserves.java
git commit -m "feat: implementar logica ferReserva() al servei"

# Has escrit els tests? Commit.
git add src/test/service/ServeiReservesTest.java
git commit -m "test: afegir tests per ferReserva() i cancelar()"

# ──────────────────────────────────────────
# 4. PUJAR al remot (GitHub)
# ──────────────────────────────────────────
git push origin feature/crear-reserva

# ──────────────────────────────────────────
# 5. OBRIR PULL REQUEST a GitHub
#    (des de la web o amb la CLI)
# ──────────────────────────────────────────
# Titol: "feat: implementar creacio de reserves"
# Descripcio: que has fet, com provar-ho

# ──────────────────────────────────────────
# 6. ESPERAR que un company revisi el codi
#    Si et demana canvis, els fas aqui mateix:
# ──────────────────────────────────────────
git add src/service/ServeiReserves.java
git commit -m "fix: validar que persones > 0 abans de crear reserva"
git push origin feature/crear-reserva
# La PR s'actualitza automaticament

# ──────────────────────────────────────────
# 7. PR APROVADA → es fusiona a develop
#    (normalment es fa des de GitHub, clicant "Merge")
# ──────────────────────────────────────────

# ──────────────────────────────────────────
# 8. TORNAR A COMENÇAR amb la propera tasca
# ──────────────────────────────────────────
git checkout develop
git pull origin develop
git checkout -b feature/gestionar-menu
# ...i repetir`}),t.jsx(x,{variant:"warning",title:"Errors tipics dels juniors amb Git",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Fer un sol commit gegant amb tots els canvis al final."})," Mal. Si alguna cosa va malament, no pots desfer nomes una part. Commits petits = control fi."]}),t.jsxs("li",{children:[t.jsxs("strong",{children:["Treballar directament a ",t.jsx("code",{children:"main"})," o ",t.jsx("code",{children:"develop"}),"."]})," Mal. Si la lies, afectes a tothom. Sempre branca propia."]}),t.jsxs("li",{children:[t.jsxs("strong",{children:["No fer ",t.jsx("code",{children:"git pull"})," abans de crear una branca."]})," Mal. Estaras treballant sobre codi antic i tindras conflictes segur."]}),t.jsxs("li",{children:[t.jsx("strong",{children:'Commits amb missatges com "coses", "fix", "asd".'})," Mal. D'aqui 3 mesos ningu (ni tu) sabra que fan."]})]})}),t.jsx(w,{title:"Convencions de commits: tots parlem el mateix idioma"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["La majoria d'equips segueixen ",t.jsx("strong",{children:"Conventional Commits"}),": cada missatge comenca amb un prefix que indica el TIPUS de canvi. Aixi, llegint l'historial, saps immediatament que ha passat:"]})}),t.jsx(Z,{headers:["Prefix","Quan s'usa","Exemple"],rows:[{cells:["feat:","Has afegit una funcionalitat nova","feat: afegir formulari de reserva"]},{cells:["fix:","Has corregit un bug","fix: corregir calcul del preu quan quantitat es 0"]},{cells:["test:","Has afegit o modificat tests","test: afegir tests per ServeiMenu"]},{cells:["refactor:","Has reorganitzat codi SENSE canviar el que fa","refactor: extreure metode privat buscarTaulaDisponible()"]},{cells:["docs:","Has tocat documentacio","docs: afegir instruccions d'instalacio al README"]},{cells:["chore:","Manteniment (dependencies, configuracio)","chore: actualitzar Spring Boot a 3.2"]}]}),t.jsx(j,{label:"Historial real d'un projecte (git log)",code:`a3f2c1d  feat: implementar cancelacio de reserves        (Marc, fa 2 hores)
b7e4a9f  test: afegir tests per cancelar()               (Marc, fa 2 hores)
c1d8f3e  fix: corregir NPE quan client no te email       (Anna, fa 5 hores)
d4a7b2c  feat: afegir endpoint GET /api/reserves          (Anna, fa 1 dia)
e8c3d6f  refactor: moure validacio al service             (Pau, fa 1 dia)
f2b5a9d  feat: crear classes model (Taula, Reserva...)    (Marc, fa 3 dies)

# Amb un cop d'ull saps QUI ha fet QUE i QUAN.
# Sense prefixos, seria: "coses", "fix", "mas cosas", "ok ya va"... un desastre.`}),t.jsx(w,{title:"Code Review: com es revisa codi de veritat"}),t.jsx(x,{variant:"explanation",title:"Per que ningu fusiona sense que un altre ho miri?",children:t.jsxs("p",{children:["Perque ",t.jsx("strong",{children:"tothom comet errors"}),`. Fins i tot els seniors. Un segon parell d'ulls detecta bugs, incoherencies i codi confus que l'autor no veu perque esta "massa a dins" del problema. A mes, la revisio fa que `,t.jsx("strong",{children:"tot l'equip conegui tot el codi"}),", no nomes la part que ha escrit cadascú."]})}),t.jsxs(pe,{children:[t.jsxs($,{title:"Comentari util",variant:"good",children:[t.jsx("p",{style:{marginTop:"8px",fontFamily:"monospace",fontSize:"0.85rem"},children:"Linia 42 de ServeiReserves.java:"}),t.jsxs("p",{style:{marginTop:"4px",fontFamily:"monospace",fontSize:"0.85rem"},children:['"Si ',t.jsx("code",{children:"persones"})," es 0 o negatiu, ",t.jsx("code",{children:"buscarTaulaDisponible()"})," ","retornara null i llançara RuntimeException amb un missatge confus. Millor validar al principi del metode amb un"," ",t.jsx("code",{children:"if (persones <= 0) throw new IllegalArgumentException(...)"}),'"']}),t.jsx("p",{style:{marginTop:"8px",fontSize:"0.85rem"},children:"Explica el problema, per que es un problema, i suggereix la solucio."})]}),t.jsxs($,{title:"Comentari inutil",variant:"bad",children:[t.jsx("p",{style:{marginTop:"8px",fontFamily:"monospace",fontSize:"0.85rem"},children:'"Aixo esta malament."'}),t.jsx("p",{style:{marginTop:"12px",fontFamily:"monospace",fontSize:"0.85rem"},children:'"Jo ho faria diferent."'}),t.jsx("p",{style:{marginTop:"12px",fontSize:"0.85rem"},children:"No diu que esta malament, ni per que, ni com arreglar-ho."})]})]}),t.jsx(x,{variant:"info",title:"Que mira un revisor?",children:t.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Funciona?"})," El codi fa el que diu que fa? Hi ha casos que no contempla (null, llistes buides, numeros negatius)?"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Te tests?"})," Si has afegit un metode nou, on esta el test que el prova?"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"S'enten?"})," Si el revisor ha de llegir el metode 3 cops per entendre'l, es massa complicat. Cal simplificar o afegir un comentari."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Segueix les convencions?"})," Noms de variables, estructura de packages, estil de codi... l'equip te unes normes i tothom les segueix."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"No trenca res existent?"})," Si has tocat un metode que altres parts del codi utilitzen, has comprovat que segueix funcionant?"]})]})}),t.jsx(x,{variant:"warning",title:"Consell important",children:t.jsxs("p",{children:["Quan et deixin 15 comentaris a la teva PR, ",t.jsx("strong",{children:"no ho agafis com un atac"}),". T'estan ajudant a millorar. Els millors devs son els que reben feedback, l'apliquen i aprenen. Si despres d'un mes les teves PRs tenen menys comentaris, vol dir que estas creixent."]})}),t.jsx(w,{title:"Debugging: com es troben i arreglen bugs"}),t.jsx(x,{variant:"explanation",title:"El 50% del temps d'un dev es debugging",children:t.jsxs("p",{children:["No exagero. Molta de la feina diaria es: alguna cosa no funciona, descobrir ",t.jsx("strong",{children:"per que"})," no funciona, i arreglar-ho. El proces es sempre el mateix:"]})}),t.jsx(Z,{headers:["Pas","Que fas","Eines"],rows:[{cells:["1. Reproduir","Primer de tot: aconseguir que el bug passi al TEU ordinador. Si no el pots veure, no el pots arreglar. Segueix els passos exactes que descriuen el bug.","L'app executant-se localment"]},{cells:["2. Llegir l'error","EL 90% DELS ERRORS US DIUEN EXACTAMENT QUE PASSA. Llegiu el missatge sencer. Busqueu el nom del fitxer i el numero de linia. Aneu directament alli.","Consola, logs del servidor"]},{cells:["3. Aillar","Reduir el problema al minim. Si falla al fer una reserva, prova nomes la part del servei. Si el servei funciona, el problema es al controller. Divideix i venceras.","Tests unitaris, breakpoints"]},{cells:["4. Entendre",`ABANS d'arreglar, entendre PER QUE falla. Si nomes canvies codi fins que "funciona" sense entendre per que, probablement estas creant un bug nou.`,"Debugger de l'IDE, println temporal"]},{cells:["5. Arreglar + test","Primer escriu un test que REPRODUEIXI el bug (el test ha de fallar). Despres arregla el codi. El test ara ha de passar. Aixi el bug no tornara mai mes.","JUnit, l'IDE"]}]}),t.jsx(j,{label:"Exemple real: trobar i arreglar un bug",showLineNumbers:!0,code:`// BUG REPORTAT: "Quan un client fa una reserva per a 4 persones,
// de vegades l'assigna a una taula per a 2 i dona error despres"

// PAS 1: Reproduir — Creo un test que simuli la situacio
@Test
void bugTaulaAssignadaMassaPetita() {
    List<Taula> taules = List.of(
        new Taula(1, 2),     // taula petita
        new Taula(2, 6)      // taula gran
    );
    ServeiReserves servei = new ServeiReserves(mockRepo, taules);
    Client client = new Client("Test", "600000000", "test@mail.com");

    Reserva r = servei.ferReserva(client, new Date(), 4);

    // Hauria de ser la taula 2 (capacitat 6), no la 1 (capacitat 2)
    assertEquals(2, r.getTaula().getNumero());  // FALLA! Retorna taula 1
}

// PAS 2: Llegir el codi — Anem a buscarTaulaDisponible()
private Taula buscarTaulaDisponible(Date data, int persones) {
    for (Taula t : taules) {
        if (!t.isOcupada()) {  // <-- ERROR! Nomes mira si esta lliure
            return t;          //     pero NO mira si te prou capacitat!
        }
    }
    return null;
}

// PAS 3: Entendre — El bucle retorna la PRIMERA taula lliure,
// sense comprovar si la capacitat es suficient.

// PAS 4: Arreglar
private Taula buscarTaulaDisponible(Date data, int persones) {
    for (Taula t : taules) {
        if (t.potAcollir(persones)) {  // potAcollir() comprova AMBDUES coses
            return t;
        }
    }
    return null;
}

// PAS 5: El test PASSA. Commit:
// "fix: usar potAcollir() per validar capacitat en buscar taula"`}),t.jsx(x,{variant:"info",title:"L'eina mes potent: el debugger de l'IDE",children:t.jsxs("p",{children:["IntelliJ i VS Code permeten posar ",t.jsx("strong",{children:"breakpoints"})," (punts de parada) al codi. Quan l'execucio arriba alli, s'atura i pots veure el valor de TOTES les variables en aquell moment. Es com congelar el temps i mirar per dins del programa. ",t.jsx("strong",{children:"Apreneu a usar-lo"}),": us estalviara hores."]})}),t.jsx(w,{title:"Llegir codi que no has escrit tu"}),t.jsx(x,{variant:"explanation",title:"La habilitat mes infravalorada",children:t.jsxs("p",{children:["A classe escriviu codi des de zero. A la feina, el 80% del temps llegireu codi que han escrit ALTRES PERSONES, fa mesos o anys. Codi que no te comentaris, que usa patrons que no coneixeu, amb noms de variables que no enteneu. I heu de ",t.jsx("strong",{children:"modificar-lo sense trencar res"}),". Aixo es la realitat."]})}),t.jsx(Z,{headers:["Estrategia","Com funciona"],rows:[{cells:["1. Comenca pel test",'Si la classe te tests, llegeix-los PRIMER. Un test diu: "si creo una Taula amb capacitat 4 i faig potAcollir(3), retorna true". Millor que qualsevol documentacio.']},{cells:["2. Busca el punt d'entrada","Si has de tocar un servei, busca QUINES classes el criden. Aixo et diu en quin context s'utilitza. A IntelliJ: Ctrl+Click sobre el nom del metode per veure on s'usa."]},{cells:["3. Segueix el flux d'una peticio","Agafa una accio concreta (ex: crear reserva) i segueix-la des del Controller fins a la BD. Controller → Service → Repository. Aixi entens com flueix la informacio."]},{cells:["4. git blame: qui va escriure aixo?",'La comanda "git blame fitxer.java" et mostra qui va escriure cada linia i en quin commit. Si no entens alguna cosa, saps a qui preguntar.']},{cells:["5. NO canvïis codi que no entens","Si no entens per que una linia existeix, NO la borris. Potser sembla innecessaria pero cobreix un cas que no estàs veient. Pregunta primer."]}]}),t.jsx(j,{label:"git blame: saber qui va escriure cada linia",code:`$ git blame src/service/ServeiReserves.java

a3f2c1d (Marc    2026-01-15)  public Reserva ferReserva(Client client, Date data, int persones) {
a3f2c1d (Marc    2026-01-15)      Taula taula = buscarTaulaDisponible(data, persones);
c1d8f3e (Anna    2026-02-03)      if (taula == null) {
c1d8f3e (Anna    2026-02-03)          throw new RuntimeException("No hi ha taules disponibles");
c1d8f3e (Anna    2026-02-03)      }
a3f2c1d (Marc    2026-01-15)      Reserva reserva = new Reserva(client, taula, data, persones);
e8c3d6f (Pau     2026-02-10)      taula.ocupar();  // Afegit perque hi havia un bug de doble reserva

# Veus que la linia de taula.ocupar() la va afegir Pau el 10 de febrer.
# Si no entens per que, pots preguntar-li directament o mirar el commit e8c3d6f.`}),t.jsx(w,{title:"Manteniment: el codi creix i s'ha de cuidar"}),t.jsx(x,{variant:"explanation",title:"El codi es com un jardi",children:t.jsxs("p",{children:["Si ningu el cuida, creix descontrolat. Les males herbes (codi duplicat, funcions massa llargues, noms confusos) s'acumulen poc a poc fins que el projecte es inmantenible. Per aixo existeix el ",t.jsx("strong",{children:"refactoring"}),": canviar l'estructura del codi ",t.jsx("strong",{children:"sense canviar el que fa"})," per mantenir-lo net."]})}),t.jsxs(pe,{children:[t.jsx($,{title:"Codi que necessita refactoring",variant:"bad",children:t.jsx(j,{code:`// Metode de 80 linies que fa 5 coses
public void processarComanda(int taulaNum,
    String[] plats, int[] quantitats) {
  // Buscar taula... (20 linies)
  // Validar que els plats existeixen... (15 linies)
  // Calcular preu... (15 linies)
  // Guardar a BD... (15 linies)
  // Enviar confirmacio... (15 linies)
}`})}),t.jsx($,{title:"Despres del refactoring",variant:"good",children:t.jsx(j,{code:`// Cada pas es un metode clar
public Comanda processarComanda(int taulaNum,
    String[] plats, int[] quantitats) {
  Taula taula = buscarTaula(taulaNum);
  List<Plat> platsValidats = validarPlats(plats);
  Comanda comanda = crearComanda(taula,
      platsValidats, quantitats);
  comandaRepo.save(comanda);
  return comanda;
}`})})]}),t.jsx(x,{variant:"info",title:"Quan es fa refactoring?",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Quan toques codi existent"}),": si has de modificar un metode i es un embolic, primer el neteges, despres el modifiques."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Quan un metode fa mes d'una cosa"}),`: si necessites un comentari que diu "// ara fem X" enmig d'un metode, probablement X hauria de ser un metode separat.`]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Quan copies i enganxes codi"}),": si la mateixa logica apareix a 3 llocs, crea un metode i crida'l des dels 3 llocs."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Regla del Boy Scout"}),`: "Deixa el codi mes net del que l'has trobat". Cada cop que toques un fitxer, millora'l una mica.`]})]})}),t.jsx(x,{variant:"warning",title:"Refactoring NOMES amb tests verds",children:t.jsxs("p",{children:["Mai refactoritzis codi que no te tests. Com sabras que no has trencat res? El proces es: ",t.jsx("strong",{children:"1)"})," comprova que els tests passen,",t.jsx("strong",{children:" 2)"})," refactoritza, ",t.jsx("strong",{children:"3)"})," torna a executar els tests. Si segueixen passant, el refactoring es correcte."]})}),t.jsx(w,{title:"Conflictes de Git: quan dos toquen el mateix"}),t.jsx(x,{variant:"explanation",title:"Els conflictes son normals, no son un error",children:t.jsxs("p",{children:["Si tu modifiques la linia 42 de ",t.jsx("code",{children:"ServeiReserves.java"})," a la teva branca, i un company modifica la ",t.jsx("strong",{children:"mateixa linia 42"})," a la seva branca i fusiona primer, quan tu intentis fusionar la teva, Git no sabra ",t.jsx("strong",{children:"quina versio es la bona"}),". Aixo es un ",t.jsx("strong",{children:"conflicte"}),". Passa constantment i es resol manualment."]})}),t.jsx(j,{label:"Com es veu un conflicte i com es resol",showLineNumbers:!0,code:`# Intentes fusionar la teva branca i Git et diu:
$ git merge develop
CONFLICT (content): Merge conflict in src/service/ServeiReserves.java

# Obres el fitxer i veus aixo:
<<<<<<< HEAD (els teus canvis)
    if (taula == null) {
        throw new IllegalArgumentException("No hi ha taules");
    }
=======
    if (taula == null) {
        return null;  // Retornar null si no n'hi ha
    }
>>>>>>> develop (els canvis del company)

# HAS DE DECIDIR quina versio es correcta (o combinar ambdues).
# En aquest cas, la teva versio (llançar excepcio) es millor.
# Borres les marques de conflicte i deixes:
    if (taula == null) {
        throw new IllegalArgumentException("No hi ha taules");
    }

# Despres:
git add src/service/ServeiReserves.java
git commit -m "fix: resoldre conflicte en ServeiReserves"`}),t.jsxs(ge,{children:[t.jsx(N,{title:"Evitar conflictes",variant:"blue",children:t.jsxs("ul",{style:{paddingLeft:"16px",marginTop:"4px"},children:[t.jsxs("li",{children:["Fer ",t.jsx("code",{children:"git pull"})," sovint per estar actualitzat"]}),t.jsx("li",{children:"Branques curtes (2-3 dies, no 2 setmanes)"}),t.jsx("li",{children:"Comunicar a l'equip quins fitxers toques"})]})}),t.jsx(N,{title:"Resoldre conflictes",variant:"yellow",children:t.jsxs("ul",{style:{paddingLeft:"16px",marginTop:"4px"},children:[t.jsx("li",{children:"Llegir les DUES versions amb calma"}),t.jsx("li",{children:"Entendre QUE volia fer cadascú"}),t.jsx("li",{children:"Si dubtes, parla amb el company"}),t.jsx("li",{children:"Executar tests despres de resoldre"})]})})]}),t.jsx(w,{title:"Del teu ordinador al servidor: entorns i desplegament"}),t.jsx(x,{variant:"explanation",title:"El codi passa per varies etapes abans d'arribar als usuaris",children:t.jsx("p",{children:"No es programa directament sobre el servidor que fan servir els clients. Hi ha etapes intermitges per assegurar que tot funciona:"})}),t.jsx(j,{label:"El viatge del codi",code:`El teu ordinador (LOCAL)
    │  Tu programes i fas tests aqui.
    │  Tens la teva propia base de dades amb dades inventades.
    │
    ▼
GitHub (REPOSITORI REMOT)
    │  Puges el codi, obres PR, els companys revisen.
    │
    ▼
Pipeline CI/CD (AUTOMATICA)
    │  Cada cop que es fusiona codi, automaticament:
    │  1. Compila el projecte
    │  2. Executa TOTS els tests
    │  3. Si algun test falla → STOP, no es desplega, reps un avís
    │
    ▼
Servidor de STAGING (pre-produccio)
    │  Una copia IDENTICA al servidor real, pero amb dades de prova.
    │  Aqui es fan les proves finals: "funciona tot be en un servidor
    │  de veritat, no nomes al meu portatil?"
    │
    ▼
Servidor de PRODUCCIO
    Els usuaris reals fan servir l'aplicacio aqui.
    MAI es toca directament. Tot arriba a traves de la pipeline.`}),t.jsx(x,{variant:"warning",title:"La regla sagrada",children:t.jsxs("p",{children:[t.jsx("strong",{children:"MAI es prova res directament a produccio."}),` Si un dev intenta "provar una coseta rapida" al servidor real i alguna cosa va malament, pot afectar milers d'usuaris. Per aixo existeix staging.`]})}),t.jsx(w,{title:"Coses que aprendras a la feina, no a classe"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Llegiràs mes codi que escriuràs",variant:"blue",children:t.jsx("p",{children:"En un projecte gran, el 80% del codi ja existeix. La teva feina es entendre'l i afegir-hi. Si un metode te 200 linies i nomes has de canviar 3, primer has d'entendre les 200."})}),t.jsx(N,{title:"La regla dels 30 minuts",variant:"yellow",children:t.jsxs("p",{children:["Si portes 30 minuts encallat amb el mateix error, ",t.jsx("strong",{children:"pregunta"}),`. Pero abans de preguntar: llegeix l'error, busca a Google, mira la documentacio. Despres pregunta amb context: "He provat X i Y, em dona Z. Alguna idea?"`]})}),t.jsx(N,{title:"El codi perfecte no existeix",variant:"green",children:t.jsxs("p",{children:["Hi ha codi que funciona, es llegible i te tests. Aixo es",t.jsx("strong",{children:" codi suficientment bo"}),". Buscar la perfeccio es una trampa: et bloqueja i no acabes res. Primer fes que funcioni, despres millora'l si cal."]})}),t.jsx(N,{title:"Les eines que has de dominar",variant:"pink",children:t.jsxs("p",{children:[t.jsx("strong",{children:"Git"})," (de veritat, no nomes push/pull), el ",t.jsx("strong",{children:"debugger"})," de l'IDE,",t.jsx("strong",{children:" Ctrl+Click"})," per navegar pel codi,",t.jsx("strong",{children:" Ctrl+Shift+F"})," per buscar a tot el projecte. Dominar les eines multiplica la teva velocitat per 5."]})})]}),t.jsxs(x,{variant:"success",title:"Resum: el dia a dia picant codi",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"1."})," Fas ",t.jsx("code",{children:"git pull"})," per actualitzar-te."," ",t.jsx("strong",{children:"2."})," Crees una branca per la teva tasca."," ",t.jsx("strong",{children:"3."})," Programes i fas commits petits i clars."," ",t.jsx("strong",{children:"4."})," Obres una Pull Request."," ",t.jsx("strong",{children:"5."})," Un company revisa el teu codi i et dona feedback."," ",t.jsx("strong",{children:"6."})," Arregles el que calgui, es fusiona."," ",t.jsx("strong",{children:"7."})," La pipeline executa tests i desplega."," ",t.jsx("strong",{children:"8."})," Repeteixes amb la propera tasca."]}),t.jsxs("p",{style:{marginTop:"12px"},children:["Entremig: llegiràs codi d'altres, faras debugging, resoldras conflictes de Git, refactoritzaras codi vell, i aprendras cada dia. Tot el que heu apres (classes, funcions, encapsulacio, packages) son les eines que fareu servir per fer tot aixo. Ara ja sabeu ",t.jsx("strong",{children:"com s'utilitzen de veritat"}),"."]})]})]})}const WC="_wrapper_1jc92_1",JC="_title_1jc92_17",KC="_diagram_1jc92_35",Cl={wrapper:WC,title:JC,diagram:KC},YC="/programacio-0485LIVE/diagrams/";function qe({src:e,title:r}){return t.jsxs("div",{className:Cl.wrapper,children:[r&&t.jsx("div",{className:Cl.title,children:r}),t.jsx("div",{className:Cl.diagram,children:t.jsx("img",{src:`${YC}${e}.svg`,alt:r||"Diagrama"})})]})}function XC(){return t.jsxs("div",{children:[t.jsx(w,{title:"Diagrames de Classes UML"}),t.jsxs(x,{variant:"explanation",title:"Que es un diagrama de classes?",children:[t.jsxs("p",{children:["Un ",t.jsx("strong",{children:"diagrama de classes"})," es una representacio visual de les classes d'un sistema, els seus ",t.jsx("strong",{children:"atributs"}),", ",t.jsx("strong",{children:"metodes"})," i les",t.jsx("strong",{children:" relacions"}),` entre elles. Es el "planol" d'un sistema orientat a objectes: abans de programar, dissenyem l'estructura del codi amb aquest diagrama.`]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Forma part de l'",t.jsx("strong",{children:"UML"})," (Unified Modeling Language), un estandard internacional per modelar sistemes de programari."]})]}),t.jsx(w,{title:"Elements d'un diagrama de classes"}),t.jsx(Z,{headers:["Element","Representacio","Descripcio"],rows:[{group:"Classe"},{cells:["Nom de la classe","Seccio superior del rectangle","El nom de la classe, en majuscula inicial (ex: Animal)"]},{cells:["Atributs","Seccio central del rectangle","Les variables de la classe amb el seu tipus (ex: -nom: String)"]},{cells:["Metodes","Seccio inferior del rectangle","Les funcions de la classe amb parametres i retorn (ex: +getNom(): String)"]},{group:"Visibilitat"},{cells:["+ public","Signe +","Accessible des de qualsevol classe"]},{cells:["- private","Signe -","Accessible nomes dins de la mateixa classe"]},{cells:["# protected","Signe #","Accessible des de la mateixa classe i les subclasses"]},{group:"Relacions"},{cells:["Herencia","--|> (fletxa buida)",`Una classe filla hereta d'una classe pare ("es un")`]},{cells:["Composicio","*-- (diamant ple)",'Una classe conte una altra; si el contenidor desapareix, el contingut tambe ("te un" fort)']},{cells:["Agregacio","o-- (diamant buit)",'Una classe conte una altra, pero poden existir independentment ("te un" debil)']},{cells:["Associacio","-- (linia simple)",'Dues classes es relacionen ("usa")']},{cells:["Dependencia","..> (linia discontinua)","Una classe usa temporalment una altra"]}]}),t.jsx(w,{title:"Diagrama basic: una classe"}),t.jsx(x,{variant:"info",title:"Estructura d'una classe",children:t.jsxs("p",{children:["Cada classe es representa com un ",t.jsx("strong",{children:"rectangle dividit en tres seccions"}),": el nom a dalt, els atributs al mig i els metodes a baix. Els simbols ",t.jsx("code",{children:"+"}),",",t.jsx("code",{children:" -"})," i ",t.jsx("code",{children:"#"})," indiquen la visibilitat."]})}),t.jsx(qe,{src:"classes-animal",title:"Classe Animal"}),t.jsx(w,{title:"Relacions entre classes"}),t.jsx(x,{variant:"info",children:t.jsx("p",{children:"Les relacions entre classes son la part mes important d'un diagrama de classes. Indiquen com les classes interactuen entre elles i quines dependencies existeixen."})}),t.jsx(Z,{headers:["Relacio","Simbol UML","Significat","Exemple"],rows:[{cells:["Herencia","<|--",'"es un"',"Gos extends Animal: un Gos ES UN Animal"]},{cells:["Composicio","*--",'"te un" (fort)',"Cotxe conte Motor: si el Cotxe desapareix, el Motor tambe"]},{cells:["Agregacio","o--",'"te un" (debil)',"Equip conte Jugadors: els Jugadors existeixen sense l'Equip"]},{cells:["Associacio","-->",'"usa"',"Professor ensenya Alumne: es relacionen pero son independents"]},{cells:["Dependencia","..>",'"usa temporalment"',"Un metode rep un objecte com a parametre"]}]}),t.jsx(w,{title:"Exemple: Herencia"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["La ",t.jsx("strong",{children:"herencia"})," es representa amb una fletxa buida que apunta de la classe filla cap a la classe pare. En aquest exemple, ",t.jsx("code",{children:"Gos"})," i ",t.jsx("code",{children:"Gat"})," hereten de ",t.jsx("code",{children:"Animal"}),". Les classes filles tenen els seus propis metodes (",t.jsx("code",{children:"bordar()"})," i ",t.jsx("code",{children:"miolar()"}),") a mes dels heretats."]})}),t.jsx(qe,{src:"classes-herencia",title:"Herencia: Animal, Gos i Gat"}),t.jsx(w,{title:"Exemple complet: Sistema de Biblioteca"}),t.jsxs(x,{variant:"explanation",children:[t.jsx("p",{children:"Aquest diagrama mostra el sistema de biblioteca que ja coneixem del curs. Fixa't en:"}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Composicio"})," (",t.jsx("code",{children:"*--"}),"): la Biblioteca ",t.jsx("em",{children:"conte"})," Llibres. Si la Biblioteca desapareix, els seus Llibres tambe."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Associacio"})," (",t.jsx("code",{children:"-->"}),"): cada Llibre ",t.jsx("em",{children:"esta escrit per"})," un Autor. L'Autor existeix independentment del Llibre."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Multiplicitat"}),": ",t.jsx("code",{children:'"1"'})," i ",t.jsx("code",{children:'"0..*"'})," indiquen quants objectes participen en la relacio (una Biblioteca te de 0 a molts Llibres)."]})]})]}),t.jsx(qe,{src:"classes-biblioteca",title:"Sistema de Biblioteca"}),t.jsx(w,{title:"Exemple avancat: Sistema RPG"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Un exemple mes complex d'un sistema de gestio de campanyes RPG (joc de rol). Fixa't en com combina ",t.jsx("strong",{children:"herencia"})," (Character amb PlayableCharacter i NonPlayableCharacter), ",t.jsx("strong",{children:"composicio"})," (Campaign conte Sessions),",t.jsx("strong",{children:" enumeracions"})," (Availability) i ",t.jsx("strong",{children:"multiples associacions"}),"."]})}),t.jsx(qe,{src:"classes-rpg",title:"Sistema de Campanyes RPG"}),t.jsx(w,{title:"Com llegir un diagrama de classes"}),t.jsxs(ge,{children:[t.jsx(N,{title:"1. Llegeix de dalt a baix",variant:"blue",children:t.jsxs("p",{children:["Comenca per les classes mes ",t.jsx("strong",{children:"generals"})," (les pare) i baixa cap a les mes ",t.jsx("strong",{children:"especifiques"})," (les filles). Aixo et dona una visio general de la jerarquia."]})}),t.jsx(N,{title:"2. Segueix les fletxes",variant:"yellow",children:t.jsxs("p",{children:["Les fletxes indiquen les ",t.jsx("strong",{children:"relacions"})," entre classes. Fixa't en el tipus de fletxa (herencia, composicio, associacio) per entendre com es connecten."]})}),t.jsx(N,{title:"3. Comprova les multiplicitats",variant:"green",children:t.jsxs("p",{children:["Els numeros a les linies (",t.jsx("code",{children:"1"}),", ",t.jsx("code",{children:"0..*"}),", ",t.jsx("code",{children:"1..*"}),") indiquen ",t.jsx("strong",{children:"quants objectes"})," participen en cada relacio. Per exemple,",t.jsx("code",{children:" 1"})," a ",t.jsx("code",{children:"0..*"}),' vol dir "un a molts".']})}),t.jsx(N,{title:"4. Identifica la classe central",variant:"pink",children:t.jsxs("p",{children:["Busca la classe amb ",t.jsx("strong",{children:"mes relacions"}),": sol ser la classe principal del sistema. En l'exemple de la biblioteca, ",t.jsx("code",{children:"Biblioteca"})," es el nucli perque gestiona tot el sistema."]})})]}),t.jsx(x,{variant:"success",title:"Resum",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["Un ",t.jsx("strong",{children:"diagrama de classes"})," es el planol visual d'un sistema orientat a objectes."]}),t.jsxs("li",{children:["Cada classe es representa amb un ",t.jsx("strong",{children:"rectangle"})," amb tres seccions: nom, atributs i metodes."]}),t.jsxs("li",{children:["La ",t.jsx("strong",{children:"visibilitat"})," s'indica amb ",t.jsx("code",{children:"+"})," (public), ",t.jsx("code",{children:"-"})," (private) i ",t.jsx("code",{children:"#"})," (protected)."]}),t.jsxs("li",{children:["Les ",t.jsx("strong",{children:"relacions"})," principals son: herencia, composicio, agregacio, associacio i dependencia."]}),t.jsxs("li",{children:["Les ",t.jsx("strong",{children:"multiplicitats"})," indiquen quants objectes participen en una relacio."]}),t.jsxs("li",{children:["Sempre es recomanable ",t.jsx("strong",{children:"dissenyar el diagrama abans de programar"}),"."]})]})})]})}const ZC=`public class Salutador {
    private String idioma;

    public Salutador(String idioma) {
        this.idioma = idioma;
    }

    public String saludar(String nom) {
        if (idioma.equals("catala")) {
            return "Hola, " + nom + "!";
        } else {
            return "Hello, " + nom + "!";
        }
    }
}`,eE=`public class Main {
    public static void main(String[] args) {
        // 1. Crear l'objecte Salutador
        Salutador s = new Salutador("catala");

        // 2. Cridar el metode saludar()
        String missatge = s.saludar("Maria");

        // 3. Mostrar el resultat
        System.out.println(missatge);
        // Sortida: Hola, Maria!
    }
}`;function tE(){return t.jsxs("div",{children:[t.jsx(w,{title:"Diagrames de Sequencia UML"}),t.jsxs(x,{variant:"explanation",title:"Que es un diagrama de sequencia?",children:[t.jsxs("p",{children:["Un ",t.jsx("strong",{children:"diagrama de sequencia"})," mostra l'",t.jsx("strong",{children:"ordre"})," de les interaccions entre objectes al llarg del temps. L'eix vertical representa el",t.jsx("strong",{children:" temps"})," (de dalt a baix) i l'eix horitzontal representa els",t.jsx("strong",{children:" objectes"})," que participen en la interaccio."]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Mentre que el diagrama de classes mostra l'",t.jsx("em",{children:"estructura"})," (que hi ha), el diagrama de sequencia mostra el ",t.jsx("em",{children:"comportament"})," (que passa i en quin ordre)."]})]}),t.jsx(w,{title:"Elements d'un diagrama de sequencia"}),t.jsx(Z,{headers:["Element","Representacio","Descripcio"],rows:[{cells:["Actor / Participant","Rectangle a la part superior","Un objecte o classe que participa en la interaccio"]},{cells:["Linia de vida (lifeline)","Linia vertical discontinua","Representa l'existencia de l'objecte al llarg del temps"]},{cells:["Missatge sincron","Fletxa continua (->>) ","Una crida a un metode que espera resposta"]},{cells:["Missatge de resposta","Fletxa discontinua (-->>)","El valor de retorn d'una crida"]},{cells:["Caixa d'activacio","Rectangle prim sobre la linia de vida","Indica que l'objecte esta executant una operacio"]},{cells:["Nota (note)","Rectangle amb cantonada doblegada","Comentari o aclariment sobre la interaccio"]},{cells:["Fragment alt/else","Rectangle amb etiqueta","Representa una estructura condicional (if/else)"]},{cells:["Fragment loop","Rectangle amb etiqueta loop","Representa un bucle (while/for)"]}]}),t.jsx(w,{title:"Exemple basic: Saludar"}),t.jsxs(x,{variant:"info",children:[t.jsxs("p",{children:["Aquest diagrama mostra la interaccio entre el ",t.jsx("code",{children:"Main"})," i un objecte",t.jsx("code",{children:" Salutador"}),". Llegeix-lo de dalt a baix per seguir l'ordre de les crides:"]}),t.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("code",{children:"Main"})," crea un nou ",t.jsx("code",{children:"Salutador"}),` amb l'idioma "catala"`]}),t.jsxs("li",{children:[t.jsx("code",{children:"Main"})," crida el metode ",t.jsx("code",{children:'saludar("Maria")'})]}),t.jsxs("li",{children:[t.jsx("code",{children:"Salutador"}),' retorna el text "Hola, Maria!"']}),t.jsxs("li",{children:[t.jsx("code",{children:"Main"})," imprimeix el resultat per consola"]})]})]}),t.jsx(qe,{src:"seq-saludar",title:"Diagrama de sequencia: Saludar"}),t.jsx(w,{title:"Exemple: Prestar un llibre"}),t.jsxs(x,{variant:"explanation",children:[t.jsx("p",{children:"Aquest diagrama mostra la sequencia d'interaccions quan es vol prestar un llibre de la biblioteca. Fixa't com:"}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["El ",t.jsx("code",{children:"Main"})," primer ",t.jsx("strong",{children:"busca"})," el llibre i despres el ",t.jsx("strong",{children:"presta"}),"."]}),t.jsxs("li",{children:["La ",t.jsx("code",{children:"Biblioteca"})," delega l'operacio de prestec al propi ",t.jsx("code",{children:"Llibre"}),"."]}),t.jsxs("li",{children:["El ",t.jsx("code",{children:"Llibre"})," actualitza el seu estat intern (",t.jsx("code",{children:"disponible = false"}),")."]}),t.jsxs("li",{children:["La ",t.jsx("strong",{children:"nota"})," al final aclareix l'estat final del sistema."]})]})]}),t.jsx(qe,{src:"seq-biblioteca",title:"Diagrama de sequencia: Prestar un llibre"}),t.jsx(w,{title:"Exemple amb condicionals (alt/else)"}),t.jsx(x,{variant:"info",children:t.jsxs("p",{children:["Els diagrames de sequencia tambe poden representar ",t.jsx("strong",{children:"decisions condicionals"})," amb els fragments ",t.jsx("code",{children:"alt"})," (alternativa) i ",t.jsx("code",{children:"else"}),". Funcionen com un",t.jsx("code",{children:" if/else"})," en Java: segons la condicio, s'executa un cami o un altre."]})}),t.jsx(qe,{src:"seq-condicional",title:"Diagrama de sequencia: Divisio amb control d'error"}),t.jsx(w,{title:"Exemple avancat: Sistema HydroFlow"}),t.jsxs(x,{variant:"explanation",children:[t.jsxs("p",{children:["Un exemple professional amb ",t.jsx("strong",{children:"activacions"})," (barres verticals que mostren quan un objecte esta treballant) i un fragment ",t.jsx("strong",{children:"loop"})," (bucle). L'operador demana reomplir el tanc, el sistema comprova el nivell d'aigua i repeteix l'operacio fins que arriba al minim."]}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"activate/deactivate"}),": mostren quan un objecte esta processant una crida"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"loop"}),": repeteix el bloc mentre ",t.jsx("code",{children:"waterLevel < MIN"})]}),t.jsxs("li",{children:["Les ",t.jsx("strong",{children:"fletxes numerades"})," indiquen l'ordre temporal"]})]})]}),t.jsx(qe,{src:"seq-hydroflow",title:"Sistema HydroFlow (amb loop i activacions)"}),t.jsx(x,{variant:"warning",title:"Fragments comuns",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"alt / else"}),": condicional (if/else). Nomes s'executa un dels camins."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"loop"}),": repeticio (for/while). El bloc es repeteix mentre es compleixi la condicio."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"opt"}),": opcional (if sense else). El bloc s'executa nomes si es compleix la condicio."]})]})}),t.jsx(w,{title:"Relacio amb el codi Java"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Cada ",t.jsx("strong",{children:"fletxa"})," del diagrama de sequencia correspon a una ",t.jsx("strong",{children:"linia de codi"})," Java. Vegem com es tradueix l'exemple del Salutador:"]})}),t.jsxs(pe,{children:[t.jsx($,{title:"Codi Java",variant:"blue",children:t.jsx(j,{code:eE,showLineNumbers:!0})}),t.jsx($,{title:"Correspondencia amb el diagrama",variant:"good",children:t.jsx(Z,{headers:["Linia de codi","Fletxa al diagrama"],rows:[{cells:['new Salutador("catala")','Main ->> Salutador: new Salutador("catala")']},{cells:['s.saludar("Maria")','Main ->> Salutador: saludar("Maria")']},{cells:['return "Hola, Maria!"','Salutador -->> Main: "Hola, Maria!"']},{cells:["System.out.println()","Main ->> Main: System.out.println()"]}]})})]}),t.jsx(j,{label:"Classe Salutador completa",code:ZC,showLineNumbers:!0}),t.jsx(w,{title:"Quan usar diagrames de sequencia?"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Depurar fluxos complexos",variant:"blue",children:t.jsxs("p",{children:["Quan un programa te moltes classes que interactuen entre elles, un diagrama de sequencia ajuda a ",t.jsx("strong",{children:"visualitzar l'ordre"})," de les crides i trobar errors de logica."]})}),t.jsx(N,{title:"Documentar APIs",variant:"yellow",children:t.jsxs("p",{children:["Quan dissenyes un sistema amb multiples components, els diagrames de sequencia documenten ",t.jsx("strong",{children:"com es comuniquen"})," entre ells i quines dades s'intercanvien."]})}),t.jsx(N,{title:"Entendre codi existent",variant:"green",children:t.jsxs("p",{children:["Quan arribes a un projecte nou, dibuixar un diagrama de sequencia t'ajuda a",t.jsx("strong",{children:" comprendre el flux"})," del programa sense haver de llegir tot el codi."]})}),t.jsx(N,{title:"Planificar noves funcionalitats",variant:"pink",children:t.jsxs("p",{children:["Abans de programar una nova funcionalitat, dibuixa el diagrama de sequencia per",t.jsx("strong",{children:" planificar"})," quins objectes necessites i com interactuaran."]})})]}),t.jsx(x,{variant:"success",title:"Resum",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["Un ",t.jsx("strong",{children:"diagrama de sequencia"})," mostra l'ordre de les interaccions entre objectes al llarg del temps."]}),t.jsxs("li",{children:["L'eix ",t.jsx("strong",{children:"vertical"})," representa el temps i l'eix ",t.jsx("strong",{children:"horitzontal"})," els objectes participants."]}),t.jsxs("li",{children:["Les ",t.jsx("strong",{children:"fletxes continues"})," representen crides a metodes; les ",t.jsx("strong",{children:"fletxes discontinues"})," representen valors de retorn."]}),t.jsxs("li",{children:["Les ",t.jsx("strong",{children:"activacions"})," mostren quan un objecte esta processant una operacio."]}),t.jsxs("li",{children:["Els fragments ",t.jsx("code",{children:"alt/else"}),", ",t.jsx("code",{children:"loop"})," i ",t.jsx("code",{children:"opt"})," permeten representar ",t.jsx("strong",{children:"condicionals i bucles"}),"."]}),t.jsxs("li",{children:["Cada fletxa del diagrama correspon a una ",t.jsx("strong",{children:"linia de codi"})," Java."]})]})})]})}function rE(){return t.jsxs("div",{children:[t.jsx(w,{title:"Diagrames de flux"}),t.jsxs(x,{variant:"info",title:"Que es un diagrama de flux?",children:[t.jsxs("p",{children:["Un ",t.jsx("strong",{children:"diagrama de flux"})," representa el ",t.jsx("strong",{children:"flux d'un algorisme"})," o proces pas a pas, de manera visual. Es una eina essencial per ",t.jsx("strong",{children:"planificar abans de programar"}),", ja que ens permet veure l'estructura logica del programa sense escriure codi."]}),t.jsx("p",{style:{marginTop:"8px"},children:"Cada forma geometrica representa un tipus d'accio diferent, i les fletxes indiquen l'ordre d'execucio."})]}),t.jsx(w,{title:"Simbols estandard"}),t.jsx(Z,{headers:["Forma","Nom","Significat"],rows:[{cells:["Oval / Rectangle arrodonit","Inici / Fi","Marca el punt d'inici o de finalitzacio del flux"]},{cells:["Rectangle","Proces / Accio","Representa una instruccio o operacio (assignacio, calcul...)"]},{cells:["Rombe (Diamond)","Decisio / Condicio","Representa una pregunta amb dues sortides: Si o No"]},{cells:["Parallelogram","Entrada / Sortida","Llegir dades de l'usuari o mostrar resultats per pantalla"]},{cells:["Fletxa","Flux / Direccio","Indica l'ordre en que s'executen les accions"]}]}),t.jsx(w,{title:"Exemple: Nombre parell o senar"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Un flux senzill amb una ",t.jsx("strong",{children:"decisio"}),": llegim un numero i comprovem si es parell o senar mitjancant l'operador modul (%)."]})}),t.jsx(qe,{src:"flux-parell-senar",title:"Flux: Nombre parell o senar"}),t.jsx(w,{title:"Exemple: Bucle for"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Un bucle ",t.jsx("strong",{children:"for"})," es representa amb una decisio que torna enrere. Mentre la condicio es certa, es processa l'element i s'incrementa el comptador. Quan la condicio es falsa, el flux surt del bucle."]})}),t.jsx(qe,{src:"flux-bucle-for",title:"Flux: Bucle for sobre un array"}),t.jsx(w,{title:"Exemple: Calcul de nota final"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Un exemple mes complex amb ",t.jsx("strong",{children:"multiples decisions encadenades"}),". Primer calculem la mitjana de tres notes i despres avaluem el resultat amb condicions niuades."]})}),t.jsx(qe,{src:"flux-nota-final",title:"Flux: Calcul de nota final"}),t.jsx(w,{title:"Exemple avancat: Sistema de Login"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Un diagrama mes realista que combina ",t.jsx("strong",{children:"bucles"}),", ",t.jsx("strong",{children:"decisions niuades"})," i",t.jsx("strong",{children:" multiples camins"}),". El sistema demana credencials, verifica l'usuari i la contrasenya, i bloqueja el compte despres de 3 intents fallits."]})}),t.jsx(qe,{src:"flux-login",title:"Flux: Sistema de Login amb control d'intents"}),t.jsx(w,{title:"Del diagrama al codi"}),t.jsx(x,{variant:"info",title:"Cada forma te el seu equivalent en Java",children:t.jsx("p",{children:"La gran utilitat dels diagrames de flux es que es poden traduir directament a codi. Cada simbol del diagrama correspon a una estructura del llenguatge de programacio."})}),t.jsx(Z,{headers:["Simbol del diagrama","Estructura en Java"],rows:[{cells:["Oval (Inici/Fi)","Inici i fi del metode main()"]},{cells:["Rectangle (Proces)","Instruccio o assignacio (variable = valor;)"]},{cells:["Rombe (Decisio)","Estructura condicional (if / else if / else)"]},{cells:["Parallelogram (Entrada)","Scanner per llegir dades (scanner.nextInt())"]},{cells:["Parallelogram (Sortida)","System.out.println() per mostrar resultats"]},{cells:["Fletxa que torna enrere","Bucle (for, while)"]}]}),t.jsx(j,{label:"Codi Java equivalent al diagrama de nota final",showLineNumbers:!0,code:`import java.util.Scanner;

public class NotaFinal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Parallelogram: Entrada de dades
        System.out.print("Nota 1: ");
        double nota1 = scanner.nextDouble();
        System.out.print("Nota 2: ");
        double nota2 = scanner.nextDouble();
        System.out.print("Nota 3: ");
        double nota3 = scanner.nextDouble();

        // Rectangle: Proces / Calcul
        double mitjana = (nota1 + nota2 + nota3) / 3;

        // Rombe: Decisio
        if (mitjana >= 5) {
            if (mitjana >= 9) {
                System.out.println("Excellent");
            } else {
                System.out.println("Aprovat");
            }
        } else {
            System.out.println("Suspes");
        }

        scanner.close();
    }
}`}),t.jsx(w,{title:"Bones practiques"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Inici i Fi clars",variant:"blue",children:t.jsxs("p",{children:["Sempre comenca amb un simbol d'",t.jsx("strong",{children:"Inici"})," i acaba amb un simbol de ",t.jsx("strong",{children:"Fi"}),". Tot flux ha de tenir un principi i un final ben definits."]})}),t.jsx(N,{title:"Un sol flux d'entrada",variant:"yellow",children:t.jsxs("p",{children:["Cada simbol ha de tenir ",t.jsx("strong",{children:"un sol flux d'entrada"}),". Pot tenir multiples sortides (com les decisions), pero nomes una entrada."]})}),t.jsx(N,{title:"Decisions amb 2 sortides",variant:"green",children:t.jsxs("p",{children:["Les decisions (rombes) han de tenir ",t.jsx("strong",{children:"exactament 2 sortides"}),": una per ",t.jsx("strong",{children:"Si"})," i una per ",t.jsx("strong",{children:"No"}),". Si necessites mes opcions, encadena multiples decisions."]})}),t.jsx(N,{title:"Direccio consistent",variant:"pink",children:t.jsxs("p",{children:["El flux ha d'anar de ",t.jsx("strong",{children:"dalt a baix"})," i d'",t.jsx("strong",{children:"esquerra a dreta"}),". Aixo fa que el diagrama sigui intuitiu i facil de llegir."]})})]}),t.jsx(x,{variant:"success",title:"Resum",children:t.jsx("p",{children:"Els diagrames de flux son una eina fonamental per planificar algorismes abans d'escriure codi. Cada forma geometrica representa un tipus d'accio (proces, decisio, entrada/sortida) i les fletxes marquen l'ordre d'execucio. Aprendre a llegir-los i crear-los es el primer pas per pensar com un programador."})})]})}function aE(){return t.jsxs("div",{children:[t.jsx(w,{title:"Diagrames de casos d'us"}),t.jsxs(x,{variant:"info",title:"Que es un diagrama de casos d'us?",children:[t.jsxs("p",{children:["Un ",t.jsx("strong",{children:"diagrama de casos d'us"})," mostra ",t.jsx("strong",{children:"QUE"})," fa un sistema des de la perspectiva de l'usuari. ",t.jsx("strong",{children:"No"})," mostra COM ho fa (aixo ho fan altres diagrames com els de flux o els de sequencia)."]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Identifica els ",t.jsx("strong",{children:"actors"})," (qui utilitza el sistema) i les seves",t.jsx("strong",{children:" interaccions"})," amb les funcionalitats del sistema. Es el primer diagrama que es fa quan s'analitzen els requisits d'un projecte."]})]}),t.jsx(w,{title:"Elements d'un diagrama de casos d'us"}),t.jsx(Z,{headers:["Element","Representacio","Descripcio"],rows:[{cells:["Actor","Figura de pal (stick figure)","Qui utilitza el sistema: persona, altre sistema o dispositiu"]},{cells:["Cas d'us","Oval / El·lipse","Una funcionalitat que el sistema ofereix a l'actor"]},{cells:["Sistema","Rectangle gran","El limit del sistema; els casos d'us van dins, els actors fora"]},{group:"Tipus de relacions"},{cells:["Associacio","Linia continua","Connecta un actor amb un cas d'us que utilitza"]},{cells:["<<include>>","Fletxa discontinua amb <<include>>","Un cas d'us SEMPRE inclou un altre (obligatori)"]},{cells:["<<extend>>","Fletxa discontinua amb <<extend>>","Un cas d'us OPCIONALMENT amplia un altre (condicional)"]}]}),t.jsx(w,{title:"Exemple: Sistema de Biblioteca"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Vegem un exemple complet amb dos actors (",t.jsx("strong",{children:"Bibliotecari"})," i ",t.jsx("strong",{children:"Alumne"}),"). Fixa't que ",t.jsx("strong",{children:"Buscar llibre"})," es un cas d'us compartit entre els dos actors, i que ",t.jsx("strong",{children:"Prestar llibre"})," inclou obligatoriament",t.jsx("strong",{children:" Verificar disponibilitat"}),"."]})}),t.jsx(qe,{src:"casosus-biblioteca",title:"Casos d'us: Sistema de Biblioteca"}),t.jsx(w,{title:"Exemple: Calculadora"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Un exemple mes senzill amb un sol actor i una relacio",t.jsx("strong",{children:" <<extend>>"}),": la divisio pot provocar un error si es divideix per zero, pero no sempre. Per tant es una extensio condicional."]})}),t.jsx(qe,{src:"casosus-calculadora",title:"Casos d'us: Calculadora"}),t.jsx(w,{title:"Exemple complet: Restaurant"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Un exemple mes realista amb ",t.jsx("strong",{children:"tres actors"})," (Client, Cambrer, Administrador) i multiples relacions. Observa com cada actor te funcionalitats propies i algunes son compartides. Aquest tipus de diagrama es el que es faria al comenar a analitzar un sistema de gestio de restaurant."]})}),t.jsx(qe,{src:"casosus-restaurant",title:"Casos d'us: Sistema de Reserves Restaurant"}),t.jsx(w,{title:"Include vs Extend"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Diferenciar ",t.jsx("strong",{children:"<<include>>"})," i",t.jsx("strong",{children:" <<extend>>"})," es un dels conceptes clau dels diagrames de casos d'us. Vegem-ne la comparacio:"]})}),t.jsxs(pe,{children:[t.jsxs($,{title:"<<include>> (Inclusio)",variant:"good",children:[t.jsxs("p",{style:{marginTop:"8px"},children:["El cas d'us inclos s'executa ",t.jsx("strong",{children:"SEMPRE"}),". Es una relacio ",t.jsx("strong",{children:"obligatoria"}),"."]}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Prestar llibre"})," inclou ",t.jsx("strong",{children:"Verificar disponibilitat"})]}),t.jsx("li",{children:"No es pot prestar un llibre sense verificar primer si esta disponible"}),t.jsx("li",{children:"La verificacio passa CADA vegada"})]}),t.jsx(j,{code:`// En codi seria com:
void prestarLlibre() {
    verificarDisponibilitat(); // SEMPRE
    // ... prestar el llibre
}`})]}),t.jsxs($,{title:"<<extend>> (Extensio)",variant:"bad",children:[t.jsxs("p",{style:{marginTop:"8px"},children:["El cas d'us estes s'executa ",t.jsx("strong",{children:"OPCIONALMENT"}),", nomes si es compleix una condicio. Es una relacio ",t.jsx("strong",{children:"condicional"}),"."]}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Dividir"})," pot estendre ",t.jsx("strong",{children:"Mostrar error"})]}),t.jsx("li",{children:"L'error nomes apareix si el divisor es zero"}),t.jsx("li",{children:"La majoria de vegades NO passa"})]}),t.jsx(j,{code:`// En codi seria com:
void dividir(int a, int b) {
    if (b == 0) {
        mostrarError(); // NOMES si b == 0
        return;
    }
    System.out.println(a / b);
}`})]})]}),t.jsx(w,{title:"Per a que serveixen?"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Entendre requisits",variant:"blue",children:t.jsxs("p",{children:["Permeten ",t.jsx("strong",{children:"entendre els requisits"})," del sistema abans de comencar a programar. Defineixen clarament que ha de fer el sistema i qui ho utilitza."]})}),t.jsx(N,{title:"Comunicar-se amb el client",variant:"yellow",children:t.jsxs("p",{children:["Son un ",t.jsx("strong",{children:"llenguatge visual"})," que tant els programadors com els clients poden entendre. Faciliten la comunicacio i eviten malentesos sobre les funcionalitats."]})}),t.jsx(N,{title:"Planificar funcionalitats",variant:"green",children:t.jsxs("p",{children:["Ajuden a ",t.jsx("strong",{children:"planificar les funcionalitats"})," del sistema de manera organitzada. Permeten prioritzar que es desenvolupa primer i distribuir la feina entre l'equip."]})}),t.jsx(N,{title:"Base per a altres diagrames UML",variant:"pink",children:t.jsxs("p",{children:["Son la ",t.jsx("strong",{children:"base per als altres diagrames UML"}),": diagrames de classes, de sequencia, d'activitats... Cada cas d'us es pot detallar amb diagrames mes especifics."]})})]}),t.jsx(x,{variant:"success",title:"Resum",children:t.jsxs("p",{children:["Els diagrames de casos d'us mostren ",t.jsx("strong",{children:"QUE"})," fa un sistema des de la perspectiva dels usuaris. Identifiquen actors, funcionalitats i les relacions entre ells (associacio, include i extend). Son el primer pas per analitzar i planificar un projecte de programari, i serveixen com a pont de comunicacio entre l'equip de desenvolupament i el client."]})})]})}function nE(){return t.jsxs("div",{children:[t.jsx(w,{title:"Com es construeix un projecte real, pas a pas"}),t.jsx(x,{variant:"info",title:"Objectiu d'aquesta pagina",children:t.jsxs("p",{children:["No nomes veurem ",t.jsx("strong",{children:"QUE"})," te un projecte real, sino",t.jsx("strong",{children:" COM es planteja des de zero"}),": que es fa primer, per que cada package existeix, que fa cada classe i com flueix l'execucio. Seguirem l'exemple d'un ",t.jsx("strong",{children:"Sistema de Reserves de Restaurant"}),"."]})}),t.jsx(w,{title:"Pas 1: Analitzar els requisits"}),t.jsxs(x,{variant:"explanation",title:"Abans de programar: entendre el PROBLEMA",children:[t.jsxs("p",{children:["El primer que fa un equip professional ",t.jsx("strong",{children:"NO es obrir l'IDE"}),". Es seure amb el client (el propietari del restaurant) i preguntar:",t.jsx("strong",{children:" que necessita exactament?"})," Aixo s'anomena",t.jsx("strong",{children:" analisi de requisits"}),"."]}),t.jsx("p",{style:{marginTop:"8px"},children:"Sense aquest pas, construiries una casa sense planols. El resultat seria un desastre."})]}),t.jsxs(x,{variant:"info",title:"Preguntes que fem al client",children:[t.jsx("p",{children:t.jsx("strong",{children:"Funcionalitats basiques:"})}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[t.jsx("li",{children:"Els clients han de poder fer reserves per telefon o web?"}),t.jsx("li",{children:"El cambrer ha de poder veure les reserves del dia?"}),t.jsx("li",{children:"L'administrador ha de poder gestionar el menu i els plats?"}),t.jsx("li",{children:"S'ha de poder fer comandes i associar-les a una taula?"}),t.jsx("li",{children:"Cal generar factures o tiquets?"})]}),t.jsx("p",{style:{marginTop:"12px"},children:t.jsx("strong",{children:"Informacio que necessitem guardar:"})}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[t.jsx("li",{children:"Dades dels clients: nom, telefon, email"}),t.jsx("li",{children:"Dades de les taules: numero, capacitat, si esta disponible"}),t.jsx("li",{children:"Dades de les reserves: qui, quan, quantes persones"}),t.jsx("li",{children:"Dades del menu: plats, preus, categories"}),t.jsx("li",{children:"Dades de les comandes: quins plats ha demanat cada taula"})]})]}),t.jsxs(x,{variant:"explanation",title:"El resultat: una llista clara de funcionalitats",children:[t.jsxs("p",{children:["Despres de parlar amb el client, tenim una llista de ",t.jsx("strong",{children:"funcionalitats"})," (requisits):"]}),t.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsx("li",{children:"Crear, consultar i cancel·lar reserves"}),t.jsx("li",{children:"Veure taules disponibles per a una data i nombre de persones"}),t.jsx("li",{children:"Gestionar el menu (afegir, modificar, eliminar plats)"}),t.jsx("li",{children:"Crear comandes associades a una taula"}),t.jsx("li",{children:"Calcular el total d'una comanda"})]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Amb aixo ja sabem ",t.jsx("strong",{children:"QUE"})," hem de construir. Ara hem de decidir ",t.jsx("strong",{children:"COM"}),"."]})]}),t.jsx(w,{title:"Pas 2: Identificar les entitats (les dades)"}),t.jsxs(x,{variant:"explanation",title:"Quins 'objectes del mon real' te el nostre sistema?",children:[t.jsxs("p",{children:["Mirem la llista de requisits i subratllem els ",t.jsx("strong",{children:"substantius"}),": restaurant, ",t.jsx("strong",{children:"taula"}),", ",t.jsx("strong",{children:"client"}),", ",t.jsx("strong",{children:"reserva"}),", menu, ",t.jsx("strong",{children:"plat"}),", ",t.jsx("strong",{children:"comanda"}),". Cada substantiu es una",t.jsx("strong",{children:" classe candidata"})," per al nostre model."]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Aquesta tecnica s'anomena ",t.jsx("strong",{children:"analisi de substantius"})," i es el que fan els arquitectes de programari com a primer pas de disseny."]})]}),t.jsx(Z,{headers:["Classe","Que representa","Atributs principals","Per que existeix"],rows:[{cells:["Restaurant","El restaurant sencer","nom, adreca, List<Taula>, Menu","Es el contenidor principal. Encapsula tot el sistema."]},{cells:["Taula","Una taula fisica del restaurant","numero, capacitat, ocupada","Necessitem saber si una taula pot acollir X persones i si esta lliure."]},{cells:["Client","Una persona que fa una reserva","nom, telefon, email","Cal guardar qui ha fet cada reserva per poder contactar-lo."]},{cells:["Reserva","Una reserva concreta","client, taula, data, persones, confirmada","Es la relacio entre un client i una taula en una data."]},{cells:["Plat","Un plat del menu","nom, preu, categoria, disponible","Cal saber que es pot demanar i a quin preu."]},{cells:["Menu","La carta del restaurant","List<Plat>","Agrupa tots els plats i permet filtrar-los per categoria."]},{cells:["Comanda","El que ha demanat una taula","taula, List<LiniaComanda>, tancada","Associa els plats demanats a una taula concreta."]},{cells:["LiniaComanda","Un plat dins d'una comanda","plat, quantitat","Necessitem saber QUANTS de cada plat s'han demanat."]}]}),t.jsx(x,{variant:"info",title:"Per que LiniaComanda i no directament una llista de plats?",children:t.jsxs("p",{children:["Si una taula demana 3 amanides, no volem guardar el plat 3 vegades. Guardem una ",t.jsx("code",{children:"LiniaComanda"}),` amb el plat i la quantitat. Es el mateix concepte que una linia d'un tiquet de compra: "3x Amanida Cesar = 28.50€". Aixo es un bon exemple de `,t.jsx("strong",{children:"disseny pensat"}),": cada classe modela exactament la realitat."]})}),t.jsx(w,{title:"Pas 3: Dissenyar les relacions entre classes"}),t.jsx(x,{variant:"explanation",children:t.jsxs("p",{children:["Ara que tenim les classes, necessitem saber ",t.jsx("strong",{children:"com es relacionen"}),". Un Restaurant ",t.jsx("strong",{children:"te"})," taules (composicio). Una Reserva ",t.jsx("strong",{children:"referencia"}),"un Client i una Taula (associacio). Dibuixem el diagrama de classes:"]})}),t.jsx(qe,{src:"projecte-classes",title:"Diagrama de classes: Sistema Restaurant"}),t.jsx(x,{variant:"info",title:"Com llegir el diagrama",children:t.jsxs("p",{children:["La fletxa amb rombe negre (",t.jsx("strong",{children:"composicio"}),') vol dir que Restaurant "conte" taules: si el restaurant desapareix, les taules tambe. La fletxa simple (',t.jsx("strong",{children:"associacio"}),') vol dir que Reserva "referencia" un Client, pero el Client existeix independentment.']})}),t.jsx(w,{title:"Pas 4: Organitzar en packages (separacio per capes)"}),t.jsx(x,{variant:"explanation",title:"Per que no posem totes les classes juntes?",children:t.jsxs("p",{children:["Podriem posar les 8 classes en una sola carpeta i funcionaria. Pero quan el projecte creixi a 50, 100 o 200 classes, seria un ",t.jsx("strong",{children:"caos"}),". Per aixo separem el codi en ",t.jsx("strong",{children:"packages"})," (carpetes) segons la seva",t.jsx("strong",{children:" responsabilitat"}),". Cada package te una funcio molt clara."]})}),t.jsx(j,{label:"Estructura del codi font (src/main/java)",showLineNumbers:!0,code:`cat/lasalle/restaurant/
│
├── RestaurantApp.java              # Punt d'entrada
│
├── model/                          # CAPA 1: Les DADES
│   ├── Restaurant.java
│   ├── Taula.java
│   ├── Client.java
│   ├── Reserva.java
│   ├── Menu.java
│   ├── Plat.java
│   ├── Comanda.java
│   └── LiniaComanda.java
│
├── repository/                     # CAPA 2: Acces a BASE DE DADES
│   ├── ReservaRepository.java
│   ├── ClientRepository.java
│   └── PlatRepository.java
│
├── service/                        # CAPA 3: LOGICA DE NEGOCI
│   ├── ServeiReserves.java
│   ├── ServeiComandes.java
│   └── ServeiMenu.java
│
└── controller/                     # CAPA 4: Punt d'ENTRADA (API)
    ├── ReservaController.java
    ├── MenuController.java
    └── ComandaController.java`}),t.jsx(Z,{headers:["Package","Que conte","Per que existeix","Exemple de responsabilitat"],rows:[{cells:["model/","Classes de dades (entitats)","Definir COM son les dades del sistema. Nomes atributs, getters, setters, constructors.","Taula sap si esta ocupada o no, pero NO sap com guardar-se a una BD."]},{cells:["repository/","Classes d'acces a base de dades","Separar el COM es guarden les dades del QUE son. Si canvies de MySQL a PostgreSQL, nomes toques aqui.","ReservaRepository sap fer save(), findById(), delete() a la BD."]},{cells:["service/","Classes amb logica de negoci","Aqui van les REGLES del restaurant. Separar-les facilita testejar-les sense necessitar BD ni API.","ServeiReserves comprova si hi ha taula disponible ABANS de crear la reserva."]},{cells:["controller/","Classes que reben peticions",`Son el "punt d'entrada" del sistema. Reben peticions HTTP del frontend i deleguen al service.`,"ReservaController rep POST /api/reserves i crida a ServeiReserves."]}]}),t.jsx(x,{variant:"info",title:"La regla d'or: cada capa nomes parla amb la seguent",children:t.jsxs("p",{children:["El ",t.jsx("strong",{children:"Controller"})," crida al ",t.jsx("strong",{children:"Service"}),". El Service crida al ",t.jsx("strong",{children:"Repository"}),". El Repository accedeix a la ",t.jsx("strong",{children:"Base de Dades"}),".",t.jsx("strong",{children:" Mai al reves!"})," Un Repository no crida mai a un Controller. Un Model no crida mai a un Service. Aquesta disciplina es el que fa que el codi sigui ",t.jsx("strong",{children:"mantenible"})," quan el projecte creix."]})}),t.jsx(w,{title:"Pas 5: Implementar cada classe"}),t.jsxs(x,{variant:"explanation",title:"Ordre d'implementacio: de baix cap a dalt",children:[t.jsxs("p",{children:["Es comenca pel ",t.jsx("strong",{children:"model"})," (les dades) i es va pujant cap al",t.jsx("strong",{children:" controller"})," (el punt d'entrada). Per que? Perque cada capa",t.jsx("strong",{children:" depèn"})," de la inferior: no pots escriure el Service sense tenir el Model, i no pots escriure el Controller sense tenir el Service."]}),t.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Primer:"})," model/ (les classes de dades)"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Segon:"})," repository/ (com guardar/recuperar les dades)"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Tercer:"})," service/ (les regles de negoci)"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Quart:"})," controller/ (el punt d'entrada)"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Cinque:"})," RestaurantApp.java (el main que arrenca tot)"]})]})]}),t.jsx(w,{title:"5a. El Model: les classes de dades"}),t.jsx(x,{variant:"info",title:"Que fa cada classe del model i PER QUE",children:t.jsxs("p",{children:['Cada classe del model representa un "objecte del mon real". Nomes te:',t.jsx("strong",{children:" atributs privats"}),", ",t.jsx("strong",{children:"constructor"}),",",t.jsx("strong",{children:" getters/setters"})," i algun metode de logica simple. El Model ",t.jsx("strong",{children:"no sap res"})," de base de dades, ni d'API, ni de pantalles. Nomes modela les dades."]})}),t.jsx(j,{label:"model/Taula.java — Representa una taula fisica",showLineNumbers:!0,code:`public class Taula {
    // Atributs: el que DEFINEIX una taula
    private int numero;        // Cada taula te un numero unic
    private int capacitat;     // Quantes persones hi caben
    private boolean ocupada;   // Si esta ocupada ara mateix

    // Constructor: crear una taula nova (per defecte, lliure)
    public Taula(int numero, int capacitat) {
        this.numero = numero;
        this.capacitat = capacitat;
        this.ocupada = false;  // Una taula nova sempre esta lliure
    }

    // Metodes de negoci simples
    public boolean potAcollir(int persones) {
        return !ocupada && capacitat >= persones;
    }

    public void ocupar() { this.ocupada = true; }
    public void alliberar() { this.ocupada = false; }

    // Getters (NO hi ha setter per "numero": un cop creada, no canvia)
    public int getNumero() { return numero; }
    public int getCapacitat() { return capacitat; }
    public boolean isOcupada() { return ocupada; }
}`}),t.jsx(x,{variant:"explanation",title:"Per que el numero no te setter?",children:t.jsxs("p",{children:["Fixa't que ",t.jsx("code",{children:"numero"})," no te ",t.jsx("code",{children:"setNumero()"}),". Una taula del restaurant sempre sera la taula 5 o la taula 12: el numero no canvia. Aixo es ",t.jsx("strong",{children:"disseny intencional"}),": si un atribut no ha de canviar, no li posem setter. Aixi cap part del codi pot canviar-lo per accident."]})}),t.jsx(j,{label:"model/Client.java — Una persona que fa una reserva",showLineNumbers:!0,code:`public class Client {
    private String nom;
    private String telefon;
    private String email;

    public Client(String nom, String telefon, String email) {
        this.nom = nom;
        this.telefon = telefon;
        this.email = email;
    }

    // Getters i setters (un client pot canviar de telefon o email)
    public String getNom() { return nom; }
    public String getTelefon() { return telefon; }
    public void setTelefon(String telefon) { this.telefon = telefon; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}`}),t.jsx(j,{label:"model/Reserva.java — La relacio entre client, taula i data",showLineNumbers:!0,code:`import java.util.Date;

public class Reserva {
    private int id;
    private Client client;     // QUI ha reservat
    private Taula taula;       // QUINA taula
    private Date data;         // QUAN
    private int persones;      // QUANTES persones
    private boolean confirmada;

    public Reserva(Client client, Taula taula, Date data, int persones) {
        this.client = client;
        this.taula = taula;
        this.data = data;
        this.persones = persones;
        this.confirmada = true;
    }

    public void cancelar() {
        this.confirmada = false;
        this.taula.alliberar();  // Quan es cancela, la taula queda lliure
    }

    // Getters...
    public int getId() { return id; }
    public Client getClient() { return client; }
    public Taula getTaula() { return taula; }
    public Date getData() { return data; }
    public int getPersones() { return persones; }
    public boolean isConfirmada() { return confirmada; }
}`}),t.jsx(j,{label:"model/Plat.java + model/LiniaComanda.java + model/Comanda.java",showLineNumbers:!0,code:`// --- Plat.java ---
public class Plat {
    private String nom;
    private double preu;
    private String categoria;  // "Primer", "Segon", "Postres", "Beguda"
    private boolean disponible;

    public Plat(String nom, double preu, String categoria) {
        this.nom = nom;
        this.preu = preu;
        this.categoria = categoria;
        this.disponible = true;
    }
    // Getters + setters (un plat pot canviar de preu o disponibilitat)
    public String getNom() { return nom; }
    public double getPreu() { return preu; }
    public void setPreu(double preu) { this.preu = preu; }
    public String getCategoria() { return categoria; }
    public boolean isDisponible() { return disponible; }
    public void setDisponible(boolean disponible) { this.disponible = disponible; }
}

// --- LiniaComanda.java ---
public class LiniaComanda {
    private Plat plat;
    private int quantitat;

    public LiniaComanda(Plat plat, int quantitat) {
        this.plat = plat;
        this.quantitat = quantitat;
    }

    public double getSubtotal() {
        return plat.getPreu() * quantitat;  // 3 x 9.50€ = 28.50€
    }

    public Plat getPlat() { return plat; }
    public int getQuantitat() { return quantitat; }
}

// --- Comanda.java ---
import java.util.ArrayList;
import java.util.List;

public class Comanda {
    private Taula taula;
    private List<LiniaComanda> linies;
    private boolean tancada;

    public Comanda(Taula taula) {
        this.taula = taula;
        this.linies = new ArrayList<>();
        this.tancada = false;
    }

    public void afegirPlat(Plat plat, int quantitat) {
        linies.add(new LiniaComanda(plat, quantitat));
    }

    public double getTotal() {
        double total = 0;
        for (LiniaComanda linia : linies) {
            total += linia.getSubtotal();
        }
        return total;
    }

    public void tancar() { this.tancada = true; }

    public Taula getTaula() { return taula; }
    public List<LiniaComanda> getLinies() { return linies; }
    public boolean isTancada() { return tancada; }
}`}),t.jsx(w,{title:"5b. El Repository: acces a la base de dades"}),t.jsx(x,{variant:"info",title:"Per que un package separat per a la base de dades?",children:t.jsxs("p",{children:["Imagina que ara guardes les dades a ",t.jsx("strong",{children:"MySQL"})," i d'aqui un any vols canviar a ",t.jsx("strong",{children:"PostgreSQL"}),". Si l'acces a la BD esta repartit per tot el codi, hauries de tocar desenes de fitxers. Pero si esta tot dins de",t.jsx("code",{children:" repository/"}),", nomes toques ",t.jsx("strong",{children:"3 fitxers"}),". Aixo es el poder de la ",t.jsx("strong",{children:"separacio per capes"}),"."]})}),t.jsx(j,{label:"repository/ReservaRepository.java — CRUD de reserves",showLineNumbers:!0,code:`import java.util.List;

public class ReservaRepository {

    // Guardar una reserva nova a la base de dades
    public void save(Reserva reserva) {
        // INSERT INTO reserves (client_id, taula_num, data, persones)
        // VALUES (?, ?, ?, ?)
    }

    // Buscar una reserva per ID
    public Reserva findById(int id) {
        // SELECT * FROM reserves WHERE id = ?
        return null; // retornaria la reserva trobada
    }

    // Llistar totes les reserves d'una data
    public List<Reserva> findByData(Date data) {
        // SELECT * FROM reserves WHERE data = ?
        return null;
    }

    // Eliminar una reserva
    public void delete(int id) {
        // DELETE FROM reserves WHERE id = ?
    }
}`}),t.jsx(x,{variant:"explanation",title:"CRUD: les 4 operacions basiques",children:t.jsxs("p",{children:["Gairebe tots els repositorys fan les mateixes 4 operacions:",t.jsx("strong",{children:" C"}),"reate (save), ",t.jsx("strong",{children:"R"}),"ead (find),",t.jsx("strong",{children:" U"}),"pdate (save), ",t.jsx("strong",{children:"D"}),"elete (delete). Aixo s'anomena ",t.jsx("strong",{children:"CRUD"})," i es la base de qualsevol aplicacio que gestiona dades."]})}),t.jsx(w,{title:"5c. El Service: la logica de negoci"}),t.jsx(x,{variant:"info",title:"Per que les regles van al Service i NO al Model?",children:t.jsxs("p",{children:["El Model (",t.jsx("code",{children:"Taula.java"}),") sap si esta ocupada, pero ",t.jsx("strong",{children:"no decideix"})," ","quina taula assignar a una reserva. Aquesta ",t.jsx("strong",{children:"decisio"})," (buscar taula lliure amb prou capacitat, crear la reserva, guardar-la) es ",t.jsx("strong",{children:"logica de negoci"})," ","i va al Service. Aixi el Model es manté simple i reutilitzable."]})}),t.jsx(j,{label:"service/ServeiReserves.java — Les REGLES del negoci",showLineNumbers:!0,code:`public class ServeiReserves {
    private ReservaRepository reservaRepo;    // Per guardar a la BD
    private List<Taula> taules;               // Les taules del restaurant

    public ServeiReserves(ReservaRepository reservaRepo, List<Taula> taules) {
        this.reservaRepo = reservaRepo;
        this.taules = taules;
    }

    // REGLA DE NEGOCI: crear una reserva
    public Reserva ferReserva(Client client, Date data, int persones) {

        // 1. Buscar una taula disponible amb prou capacitat
        Taula taula = buscarTaulaDisponible(data, persones);

        // 2. Si no n'hi ha cap, ERROR
        if (taula == null) {
            throw new RuntimeException("No hi ha taules disponibles per a "
                + persones + " persones el dia " + data);
        }

        // 3. Crear la reserva i marcar la taula com a ocupada
        Reserva reserva = new Reserva(client, taula, data, persones);
        taula.ocupar();

        // 4. Guardar a la base de dades
        reservaRepo.save(reserva);

        return reserva;
    }

    // REGLA DE NEGOCI: cancelar una reserva
    public void cancelar(int reservaId) {
        Reserva reserva = reservaRepo.findById(reservaId);
        if (reserva == null) {
            throw new RuntimeException("Reserva no trobada");
        }
        reserva.cancelar();      // Marca com a cancelada + allibera taula
        reservaRepo.save(reserva); // Actualitza a la BD
    }

    // Metode auxiliar privat: buscar taula disponible
    private Taula buscarTaulaDisponible(Date data, int persones) {
        for (Taula t : taules) {
            if (t.potAcollir(persones)) {
                return t;
            }
        }
        return null;  // No n'hi ha cap
    }

    public List<Reserva> getReserves(Date data) {
        return reservaRepo.findByData(data);
    }
}`}),t.jsxs(x,{variant:"explanation",title:"Fixa't en el flux del metode ferReserva()",children:[t.jsxs("p",{children:["Cada pas te un ",t.jsx("strong",{children:"per que"}),":"]}),t.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Buscar taula:"})," No podem assignar una taula sense comprovar que existeix i esta lliure."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Validar:"})," Si no n'hi ha, llançar un error clar (no retornar null silenciosament)."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Crear reserva + ocupar taula:"})," Les dues coses van juntes: si crees la reserva pero no ocupes la taula, una altra reserva podria agafar-la."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Guardar a BD:"})," Si no guardem, al reiniciar l'aplicacio es perdria tot."]})]})]}),t.jsx(w,{title:"5d. El Controller: el punt d'entrada"}),t.jsx(x,{variant:"info",title:"Que fa el Controller i per que existeix?",children:t.jsxs("p",{children:["El Controller es el ",t.jsx("strong",{children:"punt d'entrada"})," del sistema. Rep les peticions del frontend (web o app mobil), les ",t.jsx("strong",{children:"tradueix"})," a crides al Service, i retorna la resposta. El Controller ",t.jsx("strong",{children:"NO"})," conte logica de negoci: nomes fa de pont. Aixi, si demà vols canviar l'API REST per una interficie de consola, nomes toques el Controller."]})}),t.jsx(j,{label:"controller/ReservaController.java — Rep peticions HTTP",showLineNumbers:!0,code:`@RestController
@RequestMapping("/api/reserves")
public class ReservaController {
    private ServeiReserves serveiReserves;

    // El framework (Spring Boot) injecta el servei automaticament
    public ReservaController(ServeiReserves serveiReserves) {
        this.serveiReserves = serveiReserves;
    }

    // POST /api/reserves  →  Crear nova reserva
    // El frontend envia: { "nom": "Anna", "telefon": "666...", "data": "2026-03-15", "persones": 4 }
    @PostMapping
    public Reserva crearReserva(@RequestBody ReservaRequest request) {
        Client client = new Client(
            request.getNom(),
            request.getTelefon(),
            request.getEmail()
        );
        return serveiReserves.ferReserva(
            client, request.getData(), request.getPersones()
        );
    }

    // GET /api/reserves?data=2026-03-15  →  Llistar reserves del dia
    @GetMapping
    public List<Reserva> llistarReserves(@RequestParam Date data) {
        return serveiReserves.getReserves(data);
    }

    // DELETE /api/reserves/5  →  Cancelar reserva amb id=5
    @DeleteMapping("/{id}")
    public void cancelarReserva(@PathVariable int id) {
        serveiReserves.cancelar(id);
    }
}`}),t.jsx(w,{title:"Pas 6: El flux d'execucio complet"}),t.jsx(x,{variant:"explanation",title:"Que passa quan un client fa una reserva?",children:t.jsxs("p",{children:[`Seguim el cami complet des que l'usuari prem "Reservar" a l'app fins que rep la confirmacio. Cada capa fa la seva feina i `,t.jsx("strong",{children:"delega"}),"a la seguent."]})}),t.jsx(qe,{src:"projecte-seq-reserva",title:"Sequencia: Fer una reserva"}),t.jsx(Z,{headers:["Pas","Que passa","Qui ho fa","Per que es fa aixi"],rows:[{cells:["1",`L'usuari prem "Reservar" a l'app`,"Frontend (React/Android)","L'app envia POST /api/reserves amb les dades del formulari"]},{cells:["2","El Controller rep la peticio HTTP","ReservaController","Tradueix el JSON a objectes Java i crida al Service"]},{cells:["3","El Service busca una taula disponible","ServeiReserves","Aplica les REGLES: prou capacitat? Esta lliure?"]},{cells:["4","El Service crea la reserva","ServeiReserves","Crea l'objecte Reserva i marca la taula com a ocupada"]},{cells:["5","El Repository guarda a la BD","ReservaRepository","Executa INSERT INTO reserves... per persistir les dades"]},{cells:["6","La resposta torna pel mateix cami","Controller → Frontend","El Controller retorna la Reserva creada com a JSON"]}]}),t.jsxs(x,{variant:"info",title:"Per que tantes capes? No seria mes facil fer-ho tot al Controller?",children:[t.jsx("p",{children:"Si. En un projecte petit, fer-ho tot al Controller funciona. Pero imagina que:"}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["Vols fer reserves tambe per ",t.jsx("strong",{children:"consola"}),", no nomes per web → Nomes crees un nou Controller, el Service ja existeix."]}),t.jsxs("li",{children:["Vols canviar la ",t.jsx("strong",{children:"base de dades"})," de MySQL a PostgreSQL → Nomes toques el Repository."]}),t.jsxs("li",{children:["Vols afegir una ",t.jsx("strong",{children:"regla nova"})," (ex: maxim 2 reserves per client) → Nomes toques el Service."]}),t.jsxs("li",{children:["Vols fer ",t.jsx("strong",{children:"tests"})," de la logica sense necessitar BD ni servidor → Testeja el Service directament."]})]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Cada capa es pot ",t.jsx("strong",{children:"canviar o testejar independentment"}),". En un equip de 50 persones, aixo es ",t.jsx("strong",{children:"imprescindible"}),"."]})]}),t.jsx(w,{title:"Pas 7: La resta del projecte (no nomes codi)"}),t.jsx(x,{variant:"explanation",title:"Un projecte no es nomes Java",children:t.jsx("p",{children:"A mes del codi font, un projecte professional te fitxers de configuracio, documentacio, tests i pipelines. Vegem l'estructura completa:"})}),t.jsx(j,{label:"Estructura completa del projecte (TOTS els fitxers)",showLineNumbers:!0,code:`restaurant-app/
│
├── .git/                          # Historial de Git (no tocar mai)
├── .github/
│   └── workflows/
│       └── ci.yml                 # Pipeline CI/CD (tests automatics)
│
├── .gitignore                     # Fitxers que Git ha d'ignorar
├── README.md                      # Documentacio del projecte
├── LICENSE                        # Llicencia (MIT, Apache, GPL...)
├── Dockerfile                     # Com crear el contenidor Docker
├── docker-compose.yml             # Orquestrar app + base de dades
├── pom.xml                        # Dependencies Maven
│
├── src/
│   ├── main/java/cat/lasalle/restaurant/
│   │   ├── RestaurantApp.java
│   │   ├── model/         (8 classes de dades)
│   │   ├── repository/    (3 classes d'acces a BD)
│   │   ├── service/       (3 classes de logica)
│   │   └── controller/    (3 classes d'API)
│   │
│   ├── main/resources/
│   │   ├── application.properties  # URL de la BD, port, credencials
│   │   └── schema.sql              # Estructura de les taules SQL
│   │
│   └── test/java/                  # Tests automatics (mirall de main/)
│
└── docs/                           # Documentacio extra`}),t.jsx(Z,{headers:["Fitxer","Que fa","Per que es important"],rows:[{group:"Configuracio del projecte"},{cells:["pom.xml","Llista de dependencies (Spring Boot, JUnit, driver BD) i com compilar",'Sense aixo, el projecte no compila. Es com la "llista de la compra"']},{cells:[".gitignore","Diu a Git quins fitxers ignorar: /target, .class, .env","Evita pujar fitxers compilats o secrets al repositori"]},{cells:["README.md","Documentacio: que fa el projecte, com instal·lar-lo, com executar-lo","El primer que llegeix qualsevol persona que arriba al projecte"]},{cells:["LICENSE","Llicencia legal del codi (MIT, Apache 2.0...)","Sense llicencia, legalment ningu pot usar el codi"]},{group:"Desplegament"},{cells:["Dockerfile","Instruccions per empaquetar l'app en un contenidor","Permet executar l'app en qualsevol servidor sense instal·lar res"]},{cells:["docker-compose.yml","Orquestra app + base de dades junts",'Amb un sol "docker-compose up" tens tot funcionant']},{group:"CI/CD"},{cells:[".github/workflows/ci.yml","Cada cop que fas push, executa tests automaticament","Si algu puja codi que trenca els tests, el sistema ho detecta"]},{group:"Recursos"},{cells:["application.properties","Configuracio: URL de la BD, port del servidor","MAI es puja al repo amb contrasenyes reals"]},{cells:["schema.sql","Estructura de les taules SQL de la BD","Defineix les taules: reserves, clients, plats, comandes..."]}]}),t.jsx(w,{title:"Arquitectura completa: Frontend + Backend + BD"}),t.jsx(x,{variant:"info",children:t.jsx("p",{children:"El projecte Java (backend) es nomes una part. L'aplicacio completa te tres capes que es comuniquen per HTTP:"})}),t.jsx(qe,{src:"projecte-arquitectura",title:"Arquitectura d'una aplicacio real"}),t.jsx(Z,{headers:["Capa","Tecnologies tipiques","Que fa"],rows:[{cells:["Frontend (web)","React, Angular, Vue, HTML/CSS","La interficie visual que l'usuari veu al navegador"]},{cells:["Frontend (mobil)","Android (Kotlin/Java), iOS (Swift)","L'app que l'usuari descarrega al telefon"]},{cells:["Backend (API)","Spring Boot (Java), Node.js, Django","Processa peticions, aplica regles de negoci, accedeix a la BD"]},{cells:["Base de Dades","PostgreSQL, MySQL, MongoDB","Emmagatzema dades permanentment"]}]}),t.jsx(w,{title:"Com treballen equips de centenars de programadors?"}),t.jsx(x,{variant:"explanation",title:"El problema: centenars de persones tocant el mateix codi",children:t.jsxs("p",{children:["Imagineu un projecte com ",t.jsx("strong",{children:"java-design-patterns"})," a GitHub (93.800+ estrelles, centenars de contribuidors). Com eviten que tot peti? La resposta te quatre pilars: ",t.jsx("strong",{children:"Git amb branques"}),",",t.jsx("strong",{children:" Pull Requests"}),", ",t.jsx("strong",{children:"tests automatics"})," i",t.jsx("strong",{children:" CI/CD"}),"."]})}),t.jsx(w,{title:"1. Git Branching: cada un treballa en la seva branca"}),t.jsx(x,{variant:"info",children:t.jsxs("p",{children:[t.jsx("strong",{children:"NINGU"})," treballa directament sobre ",t.jsx("code",{children:"main"}),". Cada programador crea una ",t.jsx("strong",{children:"branca"})," per a cada funcionalitat. Aixi, els canvis d'una persona no afecten els altres fins que es revisen i s'aproven."]})}),t.jsx(qe,{src:"projecte-gitflow",title:"Flux de treball amb branques Git"}),t.jsx(Z,{headers:["Branca","Per a que serveix","Qui hi treballa"],rows:[{cells:["main","Codi estable, llest per produccio. MAI es toca directament.","Ningu directament. Nomes rep merges aprovats."]},{cells:["develop","Integracio de funcionalitats en desenvolupament.","Es on es fusionen les feature branches aprovades."]},{cells:["feature/reserves","Una funcionalitat concreta.","Un programador o petit equip (2-3 persones)."]},{cells:["hotfix/bug-123","Corregir un error urgent en produccio.","El programador assignat al bug."]}]}),t.jsx(w,{title:"2. Pull Requests: revisio obligatoria"}),t.jsxs(x,{variant:"explanation",title:"Com funciona una Pull Request (PR)?",children:[t.jsxs("p",{children:["Quan un programador acaba, ",t.jsx("strong",{children:"no fusiona directament"}),". Obre una ",t.jsx("strong",{children:"Pull Request"})," a GitHub:",t.jsx("em",{children:' "He acabat, podeu revisar els meus canvis?"'})]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Un o dos companys ",t.jsx("strong",{children:"revisen el codi"})," linia per linia, suggereixen millores i, si tot esta be, ",t.jsx("strong",{children:"aproven"})," la PR. Nomes llavors es pot fusionar."]})]}),t.jsxs(ge,{children:[t.jsx(N,{title:"El revisor comprova:",variant:"blue",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[t.jsx("li",{children:"El codi segueix les convencions de l'equip?"}),t.jsx("li",{children:"Hi ha tests per la nova funcionalitat?"}),t.jsx("li",{children:"El codi es clar i facil de mantenir?"}),t.jsx("li",{children:"No introdueix bugs ni vulnerabilitats?"})]})}),t.jsx(N,{title:"Regles habituals:",variant:"yellow",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[t.jsx("li",{children:"Minim 1-2 aprovacions per fusionar"}),t.jsx("li",{children:"L'autor NO pot aprovar la seva propia PR"}),t.jsx("li",{children:"Tots els tests han de passar"}),t.jsxs("li",{children:["La branca ",t.jsx("code",{children:"main"})," esta protegida"]})]})})]}),t.jsx(w,{title:"3. Tests automatics: la xarxa de seguretat"}),t.jsx(j,{label:"Exemple: Test del ServeiReserves",showLineNumbers:!0,code:`class ServeiReservesTest {
    @Test
    void ferReservaAssignaTaulaDisponible() {
        // Preparar
        List<Taula> taules = List.of(new Taula(1, 4), new Taula(2, 2));
        ServeiReserves servei = new ServeiReserves(mockRepo, taules);
        Client anna = new Client("Anna", "666111222", "anna@mail.com");

        // Actuar
        Reserva reserva = servei.ferReserva(anna, new Date(), 3);

        // Verificar
        assertEquals(1, reserva.getTaula().getNumero()); // Taula 1 (cap 4)
        assertTrue(reserva.isConfirmada());
    }

    @Test
    void ferReservaSenseTaulesLlancaError() {
        List<Taula> taules = List.of(new Taula(1, 2)); // Nomes cap 2
        ServeiReserves servei = new ServeiReserves(mockRepo, taules);
        Client anna = new Client("Anna", "666111222", "anna@mail.com");

        // Demanar taula per 5 persones quan nomes n'hi ha per 2
        assertThrows(RuntimeException.class, () -> {
            servei.ferReserva(anna, new Date(), 5);
        });
    }
}`}),t.jsx(Z,{headers:["Tipus de test","Que prova","Exemple"],rows:[{cells:["Unitari","Una sola classe o metode, aillat","TaulaTest: comprova que potAcollir() funciona correctament"]},{cells:["Integracio","Multiples classes juntes","ServeiReservesTest: comprova que ferReserva() crea una reserva i ocupa la taula"]},{cells:["End-to-End","Tot el sistema, de frontend a BD","Simula un usuari fent una reserva des de l'app"]}]}),t.jsx(w,{title:"4. CI/CD: automatitzar tot el proces"}),t.jsxs(x,{variant:"explanation",title:"Que es CI/CD?",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"CI"})," (Continuous Integration): cada cop que algu fa push, automaticament s'executen els tests. Si falla algun, tothom ho sap immediatament."]}),t.jsxs("p",{style:{marginTop:"8px"},children:[t.jsx("strong",{children:"CD"})," (Continuous Deployment): si tots els tests passen, l'aplicacio es desplega automaticament al servidor."]})]}),t.jsx(qe,{src:"projecte-cicd",title:"Pipeline CI/CD"}),t.jsx(j,{label:".github/workflows/ci.yml (GitHub Actions)",showLineNumbers:!0,code:`name: CI Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Java 17
        uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'temurin'
      - name: Run tests
        run: mvn test
      - name: Build
        run: mvn package -DskipTests`}),t.jsx(w,{title:"Resum: els 7 passos per construir un projecte"}),t.jsxs(ge,{children:[t.jsx(N,{title:"1. Requisits",variant:"blue",children:t.jsxs("p",{children:["Parlar amb el client. Entendre ",t.jsx("strong",{children:"QUE"})," necessita. Fer una llista de funcionalitats."]})}),t.jsx(N,{title:"2. Entitats",variant:"yellow",children:t.jsxs("p",{children:['Identificar els "objectes del mon real" (substantius) que seran les nostres ',t.jsx("strong",{children:"classes"}),"."]})}),t.jsx(N,{title:"3. Relacions",variant:"green",children:t.jsxs("p",{children:["Dibuixar el ",t.jsx("strong",{children:"diagrama de classes"}),": qui conte qui, qui referencia qui."]})}),t.jsx(N,{title:"4. Packages",variant:"pink",children:t.jsxs("p",{children:["Organitzar en capes: ",t.jsx("strong",{children:"model → repository → service → controller"}),". Cada capa te una responsabilitat."]})}),t.jsx(N,{title:"5. Implementar",variant:"blue",children:t.jsx("p",{children:"Codi de baix a dalt: primer Model, despres Repository, despres Service, finalment Controller."})}),t.jsx(N,{title:"6. Tests",variant:"yellow",children:t.jsxs("p",{children:["Escriure tests per cada capa. Verificar que les ",t.jsx("strong",{children:"regles de negoci"})," funcionen correctament."]})}),t.jsx(N,{title:"7. Configuracio",variant:"green",children:t.jsxs("p",{children:["Afegir pom.xml, README, .gitignore, Dockerfile, CI/CD. Preparar per a ",t.jsx("strong",{children:"produccio"}),"."]})})]}),t.jsx(w,{title:"Projectes de referencia a GitHub"}),t.jsxs(pe,{children:[t.jsxs($,{title:"java-design-patterns",variant:"blue",children:[t.jsx("p",{style:{marginTop:"8px"},children:t.jsx("code",{children:"github.com/iluwatar/java-design-patterns"})}),t.jsxs("p",{style:{marginTop:"8px"},children:[t.jsx("strong",{children:"93.800+ estrelles"})," - 195+ patrons de disseny en Java, cadascun amb tests, diagrames UML i documentacio. Patrons rellevants:",t.jsx("strong",{children:" Facade"}),", ",t.jsx("strong",{children:"Observer"}),",",t.jsx("strong",{children:" Strategy"}),", ",t.jsx("strong",{children:"Builder"}),"."]})]}),t.jsxs($,{title:"Spring PetClinic",variant:"good",children:[t.jsx("p",{style:{marginTop:"8px"},children:t.jsx("code",{children:"github.com/spring-projects/spring-petclinic"})}),t.jsxs("p",{style:{marginTop:"8px"},children:["L'exemple oficial de ",t.jsx("strong",{children:"Spring Boot"}),": MVC complet amb controllers, services, repositories, templates HTML i base de dades."]})]})]}),t.jsx(x,{variant:"success",title:"La idea clau",children:t.jsxs("p",{children:["Construir un projecte real no es comencar a programar directament. Es",t.jsx("strong",{children:" analitzar"})," (que necessitem?), ",t.jsx("strong",{children:"dissenyar"}),"(quines classes i com es relacionen?), ",t.jsx("strong",{children:"organitzar"})," (cada package amb la seva responsabilitat) i ",t.jsx("strong",{children:"implementar"})," de baix cap a dalt. La separacio en capes (model → repository → service → controller) es el que permet que 50 programadors treballin al mateix projecte sense trepitjar-se, que el codi sigui testejable i que qualsevol canvi futur sigui facil de fer."]})})]})}function iE(){return t.jsxs("div",{children:[t.jsx(w,{title:"Introduccio al patro MVC"}),t.jsx(x,{variant:"explanation",title:"El problema: tot en un sol lloc",children:t.jsxs("p",{children:["Quan els projectes creixen, tenir-ho tot dins de ",t.jsx("code",{children:"main()"})," o en una sola classe es fa ",t.jsx("strong",{children:"ingobernable"}),". Ja ho hem vist a la seccio de modularitat: el codi monolitic es dificil de llegir, mantenir i ampliar. El patro",t.jsx("strong",{children:" MVC"})," porta la modularitzacio al seguent nivell, donant-nos una estructura clara per organitzar qualsevol aplicacio."]})}),t.jsx(x,{variant:"info",title:"Que es MVC?",children:t.jsxs("p",{children:[t.jsx("strong",{children:"Model-View-Controller"})," es un ",t.jsx("strong",{children:"patro"})," (no una biblioteca, no un framework) per organitzar el codi en ",t.jsx("strong",{children:"3 responsabilitats"})," ben definides. Es l'estandard en el desenvolupament web, aplicacions mobils i aplicacions d'escriptori. Gairebe tots els frameworks moderns es basen en aquesta idea."]})}),t.jsx(w,{title:"Les 3 parts de MVC"}),t.jsxs(ge,{children:[t.jsxs(N,{title:"Model",variant:"blue",children:["Les ",t.jsx("strong",{children:"dades"})," i la ",t.jsx("strong",{children:"logica de negoci"}),". Son les classes que ja coneixeu: ",t.jsx("code",{children:"Alumne"}),", ",t.jsx("code",{children:"Restaurant"}),",",t.jsx("code",{children:" Taula"}),"... El Model no sap res de la interficie: nomes gestiona dades i regles."]}),t.jsxs(N,{title:"View (Vista)",variant:"yellow",children:["El que ",t.jsx("strong",{children:"veu l'usuari"}),". En Java de consola:",t.jsx("code",{children:" System.out.println"}),". En web: HTML. En Android: XML layouts. La Vista ",t.jsx("strong",{children:"mostra dades"})," pero ",t.jsx("strong",{children:"no les processa"})," ni pren decisions."]}),t.jsxs(N,{title:"Controller",variant:"green",children:["El ",t.jsx("strong",{children:`"director d'orquestra"`}),". Rep les accions de l'usuari, demana dades al Model i diu a la Vista que ha de mostrar. Es el pont que connecta les dades amb la presentacio."]})]}),t.jsx(w,{title:"Analogia: un restaurant"}),t.jsxs(x,{variant:"explanation",title:"MVC es com un restaurant",children:[t.jsx("p",{children:"Imagineu un restaurant per entendre MVC:"}),t.jsxs("p",{style:{marginTop:"8px"},children:["El ",t.jsx("strong",{children:"client"})," (Usuari) demana al ",t.jsx("strong",{children:"cambrer"})," (Controller). El cambrer porta la comanda a la ",t.jsx("strong",{children:"cuina"})," (Model). La cuina prepara el plat (processa les dades). El cambrer porta el plat al client i el",t.jsx("strong",{children:" plat servit"})," (Vista) mostra el resultat."]}),t.jsxs("p",{style:{marginTop:"8px"},children:["El client ",t.jsx("strong",{children:"MAI"})," va directament a la cuina. De la mateixa manera, l'usuari mai accedeix directament al Model: sempre passa pel Controller."]})]}),t.jsx(w,{title:"Diagrama visual del flux MVC"}),t.jsx(qe,{src:"mvc-flux",title:"Flux del patro MVC"}),t.jsx(w,{title:"MVC aplicat al Restaurant"}),t.jsx(x,{variant:"info",children:t.jsx("p",{children:"Vegem com s'aplica MVC al nostre projecte de restaurant. Cada capa te la seva responsabilitat i es comunica nomes amb les capes adjacents."})}),t.jsx(qe,{src:"mvc-restaurant",title:"MVC aplicat al Sistema de Restaurant"}),t.jsx(w,{title:"Exemple conceptual: Gestio de reserves"}),t.jsx(j,{code:`restaurant-app/
├── model/
│   ├── Restaurant.java          # Dades: taules[], menu
│   ├── Taula.java               # Dades: numero, capacitat, ocupada
│   └── Reserva.java             # Dades: client, data, persones
├── vista/
│   └── VistaConsola.java        # Mostra menu, resultats
└── controlador/
    └── ControladorReserves.java # Connecta model i vista`,label:"Estructura de carpetes amb MVC",showLineNumbers:!0}),t.jsx(x,{variant:"info",title:"El Controller: el director d'orquestra",children:t.jsxs("p",{children:["El Controlador rep l'accio de l'usuari (via la Vista), opera amb el Model i torna a la Vista per mostrar resultats. Fixa't que ",t.jsx("strong",{children:"mai"}),"fa ",t.jsx("code",{children:"System.out.println"})," directament: aixo es feina de la Vista."]})}),t.jsx(j,{code:`public class ControladorReserves {
    private Restaurant restaurant;    // Model
    private VistaConsola vista;       // Vista

    public void executar() {
        int opcio = vista.mostrarMenu();
        switch (opcio) {
            case 1:
                String nom = vista.demanarNom();
                String tel = vista.demanarTelefon();
                int persones = vista.demanarPersones();
                Client c = new Client(nom, tel, "");
                Reserva r = restaurant.ferReserva(c, new Date(), persones);
                if (r != null) {
                    vista.mostrarConfirmacio(r);
                } else {
                    vista.mostrarError("No hi ha taules disponibles");
                }
                break;
            case 2:
                vista.mostrarReserves(restaurant.getReserves());
                break;
        }
    }
}`,label:"Controlador de Reserves",showLineNumbers:!0}),t.jsx(w,{title:"On trobaras MVC?"}),t.jsx(x,{variant:"info",title:"MVC es a tot arreu",children:t.jsx("p",{children:"Practicament tots els frameworks moderns utilitzen MVC o una variant. Aqui teniu exemples reals:"})}),t.jsx(Z,{headers:["Plataforma","Tecnologia","Com aplica MVC"],rows:[{cells:["Java Web","Spring MVC (Spring Boot)","Controllers reben peticions HTTP, Models son les entitats, Vistes son plantilles HTML"]},{cells:["Android","Activities + Layouts + ViewModel","XML layouts (Vista), Activities/ViewModel (Controller), classes de dades (Model)"]},{cells:["Web Frontend","React, Angular, Vue","Components (Vista), estat/stores (Model), gestors d'events (Controller)"]},{cells:["Desktop","JavaFX (FXML + Controller)","Fitxers FXML (Vista), classes Controller, classes de dades (Model)"]},{cells:["Jocs","Unity (C#)","Usa una variant de MVC per separar logica de joc, renderitzat i input"]}]}),t.jsx(w,{title:"Connexio amb el que heu apres"}),t.jsxs(x,{variant:"explanation",title:"Ja teniu les peces!",children:[t.jsxs("p",{children:["Tot el que heu apres fins ara (classes, objectes, encapsulacio, packages, modularitat) son els ",t.jsx("strong",{children:"blocs de construccio"})," de MVC:"]}),t.jsxs("p",{style:{marginTop:"8px"},children:["El ",t.jsx("strong",{children:"Model"})," son les vostres classes amb encapsulacio (atributs privats, getters, setters). Els ",t.jsx("strong",{children:"packages"})," son la separacio en carpetes. La ",t.jsx("strong",{children:"modularitat"})," es el principi que cada classe fa una sola cosa. MVC simplement ",t.jsx("strong",{children:"formalitza el patro"}),": us diu on posar cada peca."]})]}),t.jsxs(x,{variant:"success",title:"La idea clau",children:[t.jsxs("p",{children:["MVC es una ",t.jsx("strong",{children:"manera de pensar"})," sobre l'organitzacio del codi, no una eina nova que cal aprendre. Ja coneixeu les peces: classes, objectes, encapsulacio, packages. MVC simplement us diu ",t.jsx("strong",{children:"on posar-les"}),": les dades al Model, la presentacio a la Vista i la coordinacio al Controller."]}),t.jsx("p",{style:{marginTop:"8px"},children:"Quan comenceu a treballar amb frameworks com Spring Boot o JavaFX, veureu que tot segueix aquest patro. Si enteneu MVC, enteneu l'arquitectura de qualsevol aplicacio moderna."})]})]})}const sE="_quizContainer_6jjjs_1",lE="_progressBar_6jjjs_6",oE="_progressDot_6jjjs_12",cE="_done_6jjjs_20",uE="_correct_6jjjs_24",dE="_wrong_6jjjs_28",pE="_active_6jjjs_32",mE="_questionCard_6jjjs_37",hE="_questionNumber_6jjjs_56",fE="_questionType_6jjjs_65",xE="_questionText_6jjjs_78",gE="_codeContext_6jjjs_87",vE="_codeGap_6jjjs_103",jE="_options_6jjjs_113",bE="_option_6jjjs_113",yE="_disabled_6jjjs_136",SE="_selected_6jjjs_142",wE="_optionLetter_6jjjs_162",CE="_optionCode_6jjjs_192",EE="_optionText_6jjjs_199",AE="_feedback_6jjjs_204",RE="_fadeIn_6jjjs_1",LE="_feedbackTitle_6jjjs_225",ME="_navRow_6jjjs_231",kE="_nextBtn_6jjjs_237",NE="_results_6jjjs_255",TE="_scoreCircle_6jjjs_260",PE="_great_6jjjs_273",_E="_good_6jjjs_279",qE="_low_6jjjs_285",OE="_scoreNumber_6jjjs_291",IE="_scoreLabel_6jjjs_296",DE="_resultsTitle_6jjjs_304",FE="_resultsSubtitle_6jjjs_311",zE="_resultsSummary_6jjjs_317",BE="_statBox_6jjjs_324",UE="_statNumber_6jjjs_328",$E="_green_6jjjs_333",GE="_red_6jjjs_334",VE="_statLabel_6jjjs_336",HE="_retryBtn_6jjjs_343",ie={quizContainer:sE,progressBar:lE,progressDot:oE,done:cE,correct:uE,wrong:dE,active:pE,questionCard:mE,questionNumber:hE,questionType:fE,questionText:xE,codeContext:gE,codeGap:vE,options:jE,option:bE,disabled:yE,selected:SE,optionLetter:wE,optionCode:CE,optionText:EE,feedback:AE,fadeIn:RE,feedbackTitle:LE,navRow:ME,nextBtn:kE,results:NE,scoreCircle:TE,great:PE,good:_E,low:qE,scoreNumber:OE,scoreLabel:IE,resultsTitle:DE,resultsSubtitle:FE,resultsSummary:zE,statBox:BE,statNumber:UE,green:$E,red:GE,statLabel:VE,retryBtn:HE},QE=["A","B","C","D"];function WE({questions:e,onFinish:r}){const[a,n]=A.useState(0),[i,s]=A.useState(null),[l,o]=A.useState(!1),[c,u]=A.useState([]),m=e[a],d=i===(m==null?void 0:m.correctIndex),f=a>=e.length,y=A.useCallback(S=>{l||(s(S),o(!0),u(h=>[...h,S===m.correctIndex]))},[l,m]),g=A.useCallback(()=>{s(null),o(!1),n(S=>S+1)},[]),b=A.useCallback(()=>{n(0),s(null),o(!1),u([])},[]);if(f){const S=c.filter(Boolean).length,h=e.length,p=Math.round(S/h*100),v=p>=80?"great":p>=50?"good":"low",L=p>=80?"Molt be! Domines MVC!":p>=50?"Bon treball! Repassa els errors.":"Cal repassar una mica mes. Torna-ho a intentar!";return t.jsxs("div",{className:ie.results,children:[t.jsxs("div",{className:`${ie.scoreCircle} ${ie[v]}`,children:[t.jsxs("span",{className:ie.scoreNumber,children:[p,"%"]}),t.jsx("span",{className:ie.scoreLabel,children:"encerts"})]}),t.jsx("h2",{className:ie.resultsTitle,children:L}),t.jsxs("p",{className:ie.resultsSubtitle,children:["Has encertat ",S," de ",h," preguntes"]}),t.jsxs("div",{className:ie.resultsSummary,children:[t.jsxs("div",{className:ie.statBox,children:[t.jsx("div",{className:`${ie.statNumber} ${ie.green}`,children:S}),t.jsx("div",{className:ie.statLabel,children:"Correctes"})]}),t.jsxs("div",{className:ie.statBox,children:[t.jsx("div",{className:`${ie.statNumber} ${ie.red}`,children:h-S}),t.jsx("div",{className:ie.statLabel,children:"Incorrectes"})]})]}),t.jsx("button",{className:ie.retryBtn,onClick:b,children:"Torna a intentar-ho"})]})}return t.jsxs("div",{className:ie.quizContainer,children:[t.jsx("div",{className:ie.progressBar,children:e.map((S,h)=>{let p=ie.progressDot;return h<c.length?p+=` ${c[h]?ie.correct:ie.wrong}`:h===a&&(p+=` ${ie.active}`),t.jsx("div",{className:p},h)})}),t.jsxs("div",{className:`${ie.questionCard} ${l?d?ie.correct:ie.wrong:""}`,children:[t.jsxs("div",{className:ie.questionNumber,children:["Pregunta ",a+1," de ",e.length,t.jsx("span",{className:ie.questionType,children:m.type})]}),t.jsx("div",{className:ie.questionText,children:m.question}),m.code&&t.jsx("div",{className:ie.codeContext,children:t.jsx("pre",{dangerouslySetInnerHTML:{__html:m.code}})}),t.jsx("div",{className:ie.options,children:m.options.map((S,h)=>{let p=`${ie.option}`;return l?(p+=` ${ie.disabled}`,h===m.correctIndex?p+=` ${ie.correct}`:h===i&&(p+=` ${ie.wrong}`)):h===i&&(p+=` ${ie.selected}`),t.jsxs("button",{className:p,onClick:()=>y(h),children:[t.jsx("span",{className:ie.optionLetter,children:QE[h]}),t.jsx("span",{className:S.isCode?ie.optionCode:ie.optionText,children:S.text})]},h)})}),l&&t.jsxs("div",{className:`${ie.feedback} ${d?ie.correct:ie.wrong}`,children:[t.jsx("div",{className:ie.feedbackTitle,children:d?"Correcte!":"Incorrecte!"}),t.jsx("div",{children:m.explanation})]}),l&&t.jsx("div",{className:ie.navRow,children:t.jsx("button",{className:ie.nextBtn,onClick:g,children:a<e.length-1?"Seguent pregunta":"Veure resultats"})})]})]})}const JE=[{type:"On va?",question:"A quina capa MVC pertany aquest codi?",code:`<span style="color:#ffd700">public class</span> <span style="color:#e5c07b">Alumne</span> {
    <span style="color:#ffd700">private</span> String nom;
    <span style="color:#ffd700">private int</span> edat;
    <span style="color:#ffd700">private double</span> nota;

    <span style="color:#ffd700">public double</span> <span style="color:#90cdf4">getNotaFinal</span>() {
        <span style="color:#ffd700">return</span> nota * <span style="color:#fc8181">0.6</span> + participacio * <span style="color:#fc8181">0.4</span>;
    }
}`,options:[{text:"Model — gestiona dades i logica de negoci",isCode:!1},{text:"Vista — mostra informacio a l'usuari",isCode:!1},{text:"Controller — coordina Model i Vista",isCode:!1},{text:"Main — punt d'entrada del programa",isCode:!1}],correctIndex:0,explanation:"Alumne es una classe amb atributs privats i logica de negoci (calcul de nota). Aixo es clarament el Model: dades + regles."},{type:"Completa",question:"Quin fragment completa correctament el Controller?",code:`<span style="color:#ffd700">public class</span> <span style="color:#e5c07b">ControladorNotes</span> {
    <span style="color:#ffd700">private</span> Alumne alumne;
    <span style="color:#ffd700">private</span> VistaNotes vista;

    <span style="color:#ffd700">public void</span> <span style="color:#90cdf4">mostrarNota</span>() {
        <span style="color:#ffd700;background:rgba(255,215,0,0.15);padding:2px 6px;border:1px dashed #ffd700;border-radius:3px">???</span>
    }
}`,options:[{text:`double nota = alumne.getNotaFinal();
vista.mostrarResultat(nota);`,isCode:!0},{text:"System.out.println(alumne.getNotaFinal());",isCode:!0},{text:`double nota = alumne.nota;
System.out.println("Nota: " + nota);`,isCode:!0},{text:"alumne.mostrarNota();",isCode:!0}],correctIndex:0,explanation:"El Controller demana dades al Model (alumne.getNotaFinal()) i les passa a la Vista (vista.mostrarResultat). Mai fa println directament!"},{type:"On va?",question:"A quina capa MVC pertany aquest codi?",code:`<span style="color:#ffd700">public void</span> <span style="color:#90cdf4">mostrarMenu</span>() {
    System.out.println(<span style="color:#68d391">"=== GESTIO D'ALUMNES ==="</span>);
    System.out.println(<span style="color:#68d391">"1. Afegir alumne"</span>);
    System.out.println(<span style="color:#68d391">"2. Veure notes"</span>);
    System.out.println(<span style="color:#68d391">"3. Sortir"</span>);
}`,options:[{text:"Model — gestiona dades i logica",isCode:!1},{text:"Vista — mostra informacio a l'usuari",isCode:!1},{text:"Controller — coordina tot",isCode:!1},{text:"Podria anar a qualsevol capa",isCode:!1}],correctIndex:1,explanation:"Tot el que fa es mostrar text a l'usuari (System.out.println). No processa dades ni pren decisions: es pura Vista."},{type:"Error MVC",question:"Quin es el problema d'aquest codi en termes de MVC?",code:`<span style="color:#ffd700">public class</span> <span style="color:#e5c07b">Producte</span> {
    <span style="color:#ffd700">private</span> String nom;
    <span style="color:#ffd700">private double</span> preu;

    <span style="color:#ffd700">public void</span> <span style="color:#90cdf4">mostrarInfo</span>() {
        System.out.println(<span style="color:#68d391">"Producte: "</span> + nom);
        System.out.println(<span style="color:#68d391">"Preu: "</span> + preu + <span style="color:#68d391">" EUR"</span>);
    }
}`,options:[{text:"El Model (Producte) esta fent feina de la Vista (println)",isCode:!1},{text:"Falta un Constructor",isCode:!1},{text:"Els atributs haurien de ser public",isCode:!1},{text:"No hi ha cap error, es correcte",isCode:!1}],correctIndex:0,explanation:"El Model (Producte) no hauria de fer System.out.println. Mostrar dades es responsabilitat de la Vista. El Model nomes ha de gestionar dades i logica."},{type:"Completa",question:"Quina es la manera correcta de completar aquesta Vista?",code:`<span style="color:#ffd700">public class</span> <span style="color:#e5c07b">VistaConsola</span> {
    <span style="color:#ffd700">public void</span> <span style="color:#90cdf4">mostrarLlistaAlumnes</span>(ArrayList&lt;Alumne&gt; alumnes) {
        <span style="color:#ffd700;background:rgba(255,215,0,0.15);padding:2px 6px;border:1px dashed #ffd700;border-radius:3px">???</span>
    }
}`,options:[{text:`for (Alumne a : alumnes) {
    System.out.println(a.getNom() + " - " + a.getNota());
}`,isCode:!0},{text:`for (Alumne a : alumnes) {
    a.mostrarInfo();
}`,isCode:!0},{text:`for (Alumne a : alumnes) {
    a.nota = a.nota + 1;
    System.out.println(a.nota);
}`,isCode:!0},{text:`alumnes.sort();
for (Alumne a : alumnes) {
    System.out.println(a.getNom());
}`,isCode:!0}],correctIndex:0,explanation:"La Vista mostra dades usant getters del Model. No modifica dades (opcio C), no fa logica de negoci com ordenar (opcio D), i no delega el mostrar al Model (opcio B)."},{type:"Concepte",question:"En MVC, quin es l'ordre correcte quan l'usuari vol veure les seves notes?",options:[{text:"Usuari -> Controller -> Model -> Controller -> Vista",isCode:!1},{text:"Usuari -> Model -> Vista -> Controller",isCode:!1},{text:"Usuari -> Vista -> Model -> Controller",isCode:!1},{text:"Usuari -> Controller -> Vista -> Model",isCode:!1}],correctIndex:0,explanation:"L'usuari interactua amb el Controller, que demana dades al Model, les rep de tornada i les passa a la Vista per mostrar-les. El Controller es sempre l'intermediari."},{type:"On va?",question:"A quina capa MVC pertany aquest codi?",code:`<span style="color:#ffd700">public void</span> <span style="color:#90cdf4">processarMatricula</span>() {
    String nom = vista.<span style="color:#90cdf4">demanarNom</span>();
    String curs = vista.<span style="color:#90cdf4">demanarCurs</span>();
    Alumne a = <span style="color:#ffd700">new</span> Alumne(nom, curs);

    <span style="color:#ffd700">if</span> (escola.<span style="color:#90cdf4">afegirAlumne</span>(a)) {
        vista.<span style="color:#90cdf4">mostrarMissatge</span>(<span style="color:#68d391">"Matricula correcta!"</span>);
    } <span style="color:#ffd700">else</span> {
        vista.<span style="color:#90cdf4">mostrarError</span>(<span style="color:#68d391">"No s'ha pogut matricular"</span>);
    }
}`,options:[{text:"Model",isCode:!1},{text:"Vista",isCode:!1},{text:"Controller",isCode:!1},{text:"Main",isCode:!1}],correctIndex:2,explanation:"Aquest metode rep dades de la Vista (demanarNom, demanarCurs), opera amb el Model (escola.afegirAlumne) i torna a la Vista per mostrar el resultat. Es el patro classic del Controller!"},{type:"Error MVC",question:"Quin principi MVC viola aquest Controller?",code:`<span style="color:#ffd700">public class</span> <span style="color:#e5c07b">ControladorTenda</span> {
    <span style="color:#ffd700">private</span> Tenda tenda;

    <span style="color:#ffd700">public void</span> <span style="color:#90cdf4">mostrarProductes</span>() {
        ArrayList&lt;Producte&gt; productes = tenda.<span style="color:#90cdf4">getProductes</span>();
        System.out.println(<span style="color:#68d391">"=== PRODUCTES ==="</span>);
        <span style="color:#ffd700">for</span> (Producte p : productes) {
            System.out.println(p.<span style="color:#90cdf4">getNom</span>() + <span style="color:#68d391">" - "</span> + p.<span style="color:#90cdf4">getPreu</span>() + <span style="color:#68d391">"EUR"</span>);
        }
    }
}`,options:[{text:"El Controller no hauria d'accedir al Model",isCode:!1},{text:"El Controller esta fent feina de la Vista (println)",isCode:!1},{text:"Hauria d'usar un array en lloc d'ArrayList",isCode:!1},{text:"No hi ha cap error",isCode:!1}],correctIndex:1,explanation:"El Controller NO ha de fer System.out.println. Hauria de passar la llista de productes a una Vista que s'encarregui de mostrar-los. Recordeu: el Controller coordina, la Vista mostra."},{type:"Completa",question:"Com hauria de ser el Main en una aplicacio MVC?",code:`<span style="color:#ffd700">public static void</span> <span style="color:#90cdf4">main</span>(String[] args) {
    <span style="color:#ffd700;background:rgba(255,215,0,0.15);padding:2px 6px;border:1px dashed #ffd700;border-radius:3px">???</span>
}`,options:[{text:`Restaurant model = new Restaurant();
VistaConsola vista = new VistaConsola();
Controlador ctrl = new Controlador(model, vista);
ctrl.executar();`,isCode:!0},{text:`Scanner sc = new Scanner(System.in);
int opcio = sc.nextInt();
// ... tot el programa aqui`,isCode:!0},{text:`Restaurant r = new Restaurant();
r.mostrarMenu();
r.ferReserva();`,isCode:!0},{text:`Controlador ctrl = new Controlador();
System.out.println("Benvingut!");
ctrl.executar();`,isCode:!0}],correctIndex:0,explanation:"El Main crea les 3 capes (Model, Vista, Controller), les connecta i arrenca el Controller. No fa logica, no fa println, nomes munta les peces."},{type:"Concepte",question:"Per que separem el codi en Model, Vista i Controller?",options:[{text:"Perque Java ens obliga a fer-ho",isCode:!1},{text:"Per poder canviar una part (ex: consola per GUI) sense tocar les altres",isCode:!1},{text:"Perque el codi s'executa mes rapid",isCode:!1},{text:"Perque es obligatori per poder usar ArrayList",isCode:!1}],correctIndex:1,explanation:"El gran avantatge de MVC es la separacio de responsabilitats. Si volem canviar de consola a interficie grafica, nomes cal tocar la Vista. El Model i el Controller queden intactes!"},{type:"Completa",question:"Quina linea falta en aquest Model?",code:`<span style="color:#ffd700">public class</span> <span style="color:#e5c07b">Biblioteca</span> {
    <span style="color:#ffd700">private</span> ArrayList&lt;Llibre&gt; llibres;

    <span style="color:#ffd700">public</span> <span style="color:#90cdf4">Biblioteca</span>() {
        llibres = <span style="color:#ffd700">new</span> ArrayList&lt;&gt;();
    }

    <span style="color:#ffd700">public boolean</span> <span style="color:#90cdf4">afegirLlibre</span>(Llibre ll) {
        <span style="color:#ffd700">if</span> (buscarLlibre(ll.getIsbn()) != <span style="color:#ffd700">null</span>) {
            <span style="color:#ffd700;background:rgba(255,215,0,0.15);padding:2px 6px;border:1px dashed #ffd700;border-radius:3px">???</span>
        }
        llibres.add(ll);
        <span style="color:#ffd700">return true</span>;
    }
}`,options:[{text:"return false;",isCode:!0},{text:'System.out.println("Ja existeix!");',isCode:!0},{text:'vista.mostrarError("Duplicat");',isCode:!0},{text:"throw new Exception();",isCode:!0}],correctIndex:0,explanation:"El Model retorna false per indicar que no s'ha pogut afegir. Mai fa println (es Vista) ni accedeix a la Vista directament. El Controller decidira que fer amb el resultat."},{type:"Error MVC",question:"Quina linia trencaria el patro MVC en aquesta Vista?",code:`<span style="color:#ffd700">public class</span> <span style="color:#e5c07b">VistaConsola</span> {
    <span style="color:#ffd700">private</span> Scanner sc = <span style="color:#ffd700">new</span> Scanner(System.in);

    <span style="color:#ffd700">public int</span> <span style="color:#90cdf4">demanarOpcio</span>() {
        System.out.println(<span style="color:#68d391">"Tria una opcio:"</span>);
        <span style="color:#ffd700">return</span> sc.nextInt();
    }

    <span style="color:#ffd700">public void</span> <span style="color:#90cdf4">processarComanda</span>(Restaurant r) {
        <span style="color:#ffd700">int</span> op = demanarOpcio();
        <span style="color:#ffd700">if</span> (op == <span style="color:#fc8181">1</span>) r.ferReserva(<span style="color:#ffd700">new</span> Client(<span style="color:#68d391">"Joan"</span>));
    }
}`,options:[{text:"demanarOpcio() — la Vista no hauria de llegir input",isCode:!1},{text:"processarComanda() — la Vista esta fent feina del Controller",isCode:!1},{text:"El Scanner — no es pot usar a la Vista",isCode:!1},{text:"No hi ha cap error",isCode:!1}],correctIndex:1,explanation:"La Vista pot llegir input (demanarOpcio es correcte), pero processarComanda() pren decisions i opera amb el Model. Aixo es feina del Controller! La Vista nomes mostra i recull dades."}];function KE(){return t.jsxs("div",{children:[t.jsx(w,{title:"Quiz: Domines el patro MVC?"}),t.jsx(x,{variant:"info",title:"Com funciona?",children:t.jsx("p",{children:"12 preguntes amb fragments de codi reals. Has d'identificar a quina capa MVC pertany cada codi, completar fragments o trobar errors. Al final veuràs la teva puntuacio. A veure qui treu un 100%!"})}),t.jsx(WE,{questions:JE})]})}function YE(){return t.jsxs("article",{children:[t.jsx(x,{variant:"warning",title:"Material del professorat",children:"Aquesta pàgina conté exercicis i solucions. No és visible per als alumnes."}),t.jsx(w,{title:"Exercicis Pràctics - POO"}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 1: Gestió d'una Agenda"}),t.jsxs(x,{variant:"explanation",children:[t.jsx("p",{children:"Crea un programa orientat a objectes per gestionar una agenda de contactes."}),t.jsx("p",{style:{marginTop:"10px"},children:t.jsx("strong",{children:"Requisits:"})}),t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsxs("li",{children:["Classe ",t.jsx("code",{children:"Contacte"})," amb atributs: nom, telefon, email (tots privats)"]}),t.jsx("li",{children:"Constructor que inicialitzi tots els atributs"}),t.jsx("li",{children:"Getters i setters per a cada atribut"}),t.jsxs("li",{children:["Mètode ",t.jsx("code",{children:"mostrarInfo()"})," que imprimeixi les dades del contacte"]}),t.jsxs("li",{children:["Classe ",t.jsx("code",{children:"Agenda"})," amb un array de Contacte i mètodes per afegir, buscar i eliminar"]}),t.jsxs("li",{children:["Classe ",t.jsx("code",{children:"TestAgenda"})," amb el main per provar-ho"]})]})]}),t.jsx(j,{label:"Solució - Contacte.java",code:`public class Contacte {
    private String nom;
    private String telefon;
    private String email;

    // Constructor
    public Contacte(String nom, String telefon, String email) {
        this.nom = nom;
        this.telefon = telefon;
        this.email = email;
    }

    // Getters
    public String getNom() { return nom; }
    public String getTelefon() { return telefon; }
    public String getEmail() { return email; }

    // Setters
    public void setNom(String nom) { this.nom = nom; }
    public void setTelefon(String telefon) { this.telefon = telefon; }
    public void setEmail(String email) { this.email = email; }

    // Mostrar info
    public void mostrarInfo() {
        System.out.println("Nom: " + nom);
        System.out.println("Telèfon: " + telefon);
        System.out.println("Email: " + email);
        System.out.println("---");
    }
}`}),t.jsx(j,{label:"Solució - Agenda.java",code:`public class Agenda {
    private Contacte[] contactes;
    private int numContactes;

    public Agenda(int capacitat) {
        this.contactes = new Contacte[capacitat];
        this.numContactes = 0;
    }

    public void afegir(Contacte c) {
        if (numContactes < contactes.length) {
            contactes[numContactes] = c;
            numContactes++;
            System.out.println("Contacte afegit: " + c.getNom());
        } else {
            System.out.println("Agenda plena!");
        }
    }

    public Contacte buscar(String nom) {
        for (int i = 0; i < numContactes; i++) {
            if (contactes[i].getNom().equalsIgnoreCase(nom)) {
                return contactes[i];
            }
        }
        return null;
    }

    public void eliminar(String nom) {
        for (int i = 0; i < numContactes; i++) {
            if (contactes[i].getNom().equalsIgnoreCase(nom)) {
                for (int j = i; j < numContactes - 1; j++) {
                    contactes[j] = contactes[j + 1];
                }
                contactes[numContactes - 1] = null;
                numContactes--;
                System.out.println("Contacte eliminat: " + nom);
                return;
            }
        }
        System.out.println("Contacte no trobat: " + nom);
    }

    public void llistar() {
        if (numContactes == 0) {
            System.out.println("L'agenda és buida.");
            return;
        }
        for (int i = 0; i < numContactes; i++) {
            contactes[i].mostrarInfo();
        }
    }
}`})]}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 2: Sistema de Productes"}),t.jsxs(x,{variant:"explanation",children:[t.jsx("p",{children:"Crea un sistema de gestió de productes per a una botiga."}),t.jsx("p",{style:{marginTop:"10px"},children:t.jsx("strong",{children:"Requisits:"})}),t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsxs("li",{children:["Classe ",t.jsx("code",{children:"Producte"})," amb: nom, preu, quantitat (privats)"]}),t.jsx("li",{children:"Constructor amb tots els atributs"}),t.jsx("li",{children:"Getters i setters"}),t.jsxs("li",{children:["Mètode ",t.jsx("code",{children:"calcularValorTotal()"})," que retorni preu * quantitat"]}),t.jsxs("li",{children:["Classe ",t.jsx("code",{children:"Botiga"})," amb array de Producte i mètodes per afegir, buscar per nom, i calcular el valor total de l'inventari"]})]})]}),t.jsx(j,{label:"Solució - Producte.java",code:`public class Producte {
    private String nom;
    private double preu;
    private int quantitat;

    public Producte(String nom, double preu, int quantitat) {
        this.nom = nom;
        this.preu = preu;
        this.quantitat = quantitat;
    }

    public String getNom() { return nom; }
    public double getPreu() { return preu; }
    public int getQuantitat() { return quantitat; }

    public void setPreu(double preu) { this.preu = preu; }
    public void setQuantitat(int quantitat) { this.quantitat = quantitat; }

    public double calcularValorTotal() {
        return preu * quantitat;
    }

    public void mostrarInfo() {
        System.out.println(nom + " - " + preu + "€ x" + quantitat
            + " = " + calcularValorTotal() + "€");
    }
}`})]})]})}function XE(){return t.jsxs("article",{children:[t.jsx(x,{variant:"warning",title:"Material del professorat",children:"Aquesta pàgina conté exercicis i solucions. No és visible per als alumnes."}),t.jsx(w,{title:"Exercicis Pràctics - Modularitat"}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 1: Gestió de Text"}),t.jsxs(x,{variant:"explanation",children:[t.jsx("p",{children:t.jsx("strong",{children:"Estructura:"})}),t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsxs("li",{children:[t.jsx("code",{children:"utilitats.text.AnalitzadorText"})," - Classe amb mètodes d'anàlisi"]}),t.jsxs("li",{children:[t.jsx("code",{children:"programa.GestorText"})," - Programa principal"]})]}),t.jsx("p",{style:{marginTop:"10px"},children:t.jsx("strong",{children:"Mètodes a implementar:"})}),t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsxs("li",{children:[t.jsx("code",{children:"comptarVocals(String text)"})," → int"]}),t.jsxs("li",{children:[t.jsx("code",{children:"comptarConsonants(String text)"})," → int"]}),t.jsxs("li",{children:[t.jsx("code",{children:"invertir(String text)"})," → String"]}),t.jsxs("li",{children:[t.jsx("code",{children:"esPalindrom(String text)"})," → boolean"]})]})]}),t.jsx(j,{label:"Solució - AnalitzadorText.java",code:`package utilitats.text;

public class AnalitzadorText {

    public int comptarVocals(String text) {
        int comptador = 0;
        String vocals = "aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚ";
        for (int i = 0; i < text.length(); i++) {
            if (vocals.indexOf(text.charAt(i)) != -1) {
                comptador++;
            }
        }
        return comptador;
    }

    public int comptarConsonants(String text) {
        int comptador = 0;
        String vocals = "aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚ";
        for (int i = 0; i < text.length(); i++) {
            char c = text.charAt(i);
            if (Character.isLetter(c) && vocals.indexOf(c) == -1) {
                comptador++;
            }
        }
        return comptador;
    }

    public String invertir(String text) {
        String resultat = "";
        for (int i = text.length() - 1; i >= 0; i--) {
            resultat += text.charAt(i);
        }
        return resultat;
    }

    public boolean esPalindrom(String text) {
        String net = text.toLowerCase().replaceAll("[^a-zàèéíòóú]", "");
        return net.equals(invertir(net));
    }
}`})]}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 2: Conversió d'Unitats"}),t.jsxs(x,{variant:"explanation",children:[t.jsx("p",{children:t.jsx("strong",{children:"Estructura:"})}),t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsx("li",{children:t.jsx("code",{children:"utilitats.conversions.Temperatura"})}),t.jsx("li",{children:t.jsx("code",{children:"utilitats.conversions.Distancia"})}),t.jsx("li",{children:t.jsx("code",{children:"utilitats.conversions.Pes"})}),t.jsxs("li",{children:[t.jsx("code",{children:"programa.Conversor"})," - Programa principal amb menú"]})]})]}),t.jsx(j,{label:"Solució - Temperatura.java",code:`package utilitats.conversions;

public class Temperatura {

    public double celsiusAFahrenheit(double celsius) {
        return (celsius * 9.0 / 5.0) + 32;
    }

    public double fahrenheitACelsius(double fahrenheit) {
        return (fahrenheit - 32) * 5.0 / 9.0;
    }

    public double celsiusAKelvin(double celsius) {
        return celsius + 273.15;
    }

    public double kelvinACelsius(double kelvin) {
        return kelvin - 273.15;
    }
}`}),t.jsx(j,{label:"Solució - Distancia.java",code:`package utilitats.conversions;

public class Distancia {

    public double kilometresAMilles(double km) {
        return km * 0.621371;
    }

    public double millesAKilometres(double milles) {
        return milles / 0.621371;
    }

    public double metresAPeus(double metres) {
        return metres * 3.28084;
    }

    public double peusAMetres(double peus) {
        return peus / 3.28084;
    }
}`})]}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 3: Gestió de Contactes"}),t.jsxs(x,{variant:"explanation",children:[t.jsx("p",{children:t.jsx("strong",{children:"Estructura:"})}),t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsx("li",{children:t.jsx("code",{children:"utilitats.contactes.GestorContactes"})}),t.jsxs("li",{children:[t.jsx("code",{children:"programa.Agenda"})," - Programa principal"]})]}),t.jsxs("p",{style:{marginTop:"10px"},children:[t.jsx("strong",{children:"Funcionalitats:"})," Afegir, buscar, eliminar, llistar contactes. Utilitza arrays paral·lels (noms[], telefons[])."]})]}),t.jsx(j,{label:"Solució - GestorContactes.java",code:`package utilitats.contactes;

public class GestorContactes {
    private String[] noms;
    private String[] telefons;
    private int numContactes;

    public GestorContactes(int capacitat) {
        this.noms = new String[capacitat];
        this.telefons = new String[capacitat];
        this.numContactes = 0;
    }

    public boolean afegir(String nom, String telefon) {
        if (numContactes >= noms.length) return false;
        noms[numContactes] = nom;
        telefons[numContactes] = telefon;
        numContactes++;
        return true;
    }

    public String buscar(String nom) {
        for (int i = 0; i < numContactes; i++) {
            if (noms[i].equalsIgnoreCase(nom)) {
                return telefons[i];
            }
        }
        return null;
    }

    public boolean eliminar(String nom) {
        for (int i = 0; i < numContactes; i++) {
            if (noms[i].equalsIgnoreCase(nom)) {
                for (int j = i; j < numContactes - 1; j++) {
                    noms[j] = noms[j + 1];
                    telefons[j] = telefons[j + 1];
                }
                numContactes--;
                return true;
            }
        }
        return false;
    }

    public int getNumContactes() {
        return numContactes;
    }

    public String getNom(int i) { return noms[i]; }
    public String getTelefon(int i) { return telefons[i]; }
}`}),t.jsx(x,{variant:"info",title:"Checklist de lliurament",children:t.jsxs("ol",{style:{paddingLeft:"20px"},children:[t.jsx("li",{children:"Estructura de packages correcta"}),t.jsx("li",{children:"Imports correctes entre packages"}),t.jsx("li",{children:"Tots els mètodes implementats"}),t.jsx("li",{children:"Programa principal funcional amb menú"}),t.jsx("li",{children:"Codi comentat"}),t.jsx("li",{children:"Proves amb dades d'exemple"}),t.jsx("li",{children:"Gestió bàsica d'errors"})]})})]})]})}function ZE(){return t.jsxs("article",{children:[t.jsx(x,{variant:"warning",title:"Material del professorat",children:"Aquesta pàgina conté la plantilla d'examen i la solució completa del Paraulògic. No és visible per als alumnes."}),t.jsx(w,{title:"Examen: Paraulògic"}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Descripció de l'examen"}),t.jsxs(x,{variant:"explanation",children:[t.jsx("p",{children:"El Paraulògic és un joc de paraules on l'alumne ha d'implementar un programa Java que:"}),t.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px"},children:[t.jsx("li",{children:"Té 7 lletres disponibles, una d'elles és la lletra central"}),t.jsx("li",{children:"L'usuari introdueix paraules que han de complir regles específiques"}),t.jsx("li",{children:"Cada paraula vàlida suma punts segons la seva longitud"}),t.jsx("li",{children:"Si la paraula utilitza totes les 7 lletres és un TUTI (+10 punts extra)"})]})]}),t.jsx("h4",{style:{color:"#2563a8",margin:"20px 0 12px"},children:"Sistema de puntuació"}),t.jsx(Z,{headers:["Longitud","Punts"],rows:[{cells:["3 lletres","1 punt"]},{cells:["4 lletres","2 punts"]},{cells:["5 lletres","5 punts"]},{cells:["6 lletres","6 punts"]},{cells:["7+ lletres","= longitud"]},{cells:["TUTI (totes 7)","+10 punts extra"]}]})]}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Mètodes obligatoris (capçalera donada)"}),t.jsxs(x,{variant:"info",title:"Capçaleres que han d'implementar",children:[t.jsx("p",{style:{fontFamily:"monospace",marginTop:"8px"},children:t.jsx("code",{children:"public boolean esParaulaValida(String paraula, char[] lletres, char letraC)"})}),t.jsx("p",{style:{marginTop:"8px"},children:"Retorna true si la paraula:"}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[t.jsx("li",{children:"Té 3+ lletres"}),t.jsx("li",{children:"Conté la lletra central"}),t.jsx("li",{children:"Només utilitza lletres del conjunt"})]}),t.jsx("p",{style:{fontFamily:"monospace",marginTop:"16px"},children:t.jsx("code",{children:"public int calcularPuntuacio(String paraula, char[] lletres)"})}),t.jsx("p",{style:{marginTop:"8px"},children:"Retorna els punts segons la taula + bonus TUTI."})]})]}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Plantilla per a l'alumne"}),t.jsx(j,{label:"Paraulogic.java - Plantilla alumne",code:`import java.util.Scanner;

public class Paraulogic {

    // Lletres fixes del joc
    private static final char[] LLETRES = {'a','e','m','p','l','r'};
    private static final char LLETRA_C = 'r';

    // Diccionari donat
    private static final String[] DICCIONARI = {
            "ram", "mar", "mare", "arma", "armar", "remar",
            "palmar", "palmera", "mara", "rama", "amar", "marca"
    };

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=== PARAULÒGIC ===");
        System.out.print("Lletres: ");
        for (int i = 0; i < LLETRES.length; i++) {
            char c = Character.toUpperCase(LLETRES[i]);
            if (LLETRES[i] == LLETRA_C)
                System.out.print("[" + c + "] ");
            else
                System.out.print(c + " ");
        }
        System.out.println();

        String[] trobades = new String[200];
        int nTrobades = 0;
        int total = 0;

        while (true) {
            System.out.print("Paraula (FI per acabar): ");
            String entrada = sc.nextLine().trim();

            if (entrada.equalsIgnoreCase("FI"))
                break;

            String paraula = entrada.toLowerCase();

            // TODO: Comprovar duplicada
            // TODO: Validar amb esParaulaValida()
            // TODO: Comprovar diccionari
            // TODO: Calcular puntuació
            // TODO: Guardar paraula trobada
        }

        // TODO: Mostrar resultat final
        sc.close();
    }

    // IMPLEMENTAR
    public static boolean esParaulaValida(String paraula, char[] lletres, char lletraC) {
        // TODO
        return false;
    }

    // IMPLEMENTAR
    public static int calcularPuntuacio(String paraula, char[] lletres) {
        // TODO
        return 0;
    }
}`})]}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Solució completa"}),t.jsx(j,{label:"Solució completa - Paraulogic.java",showLineNumbers:!0,code:`import java.util.Scanner;

public class Paraulogic {

    private static final char[] LLETRES = {'a','e','m','p','l','r'};
    private static final char LLETRA_C = 'r';

    private static final String[] DICCIONARI = {
            "ram", "mar", "mare", "arma", "armar", "remar",
            "palmar", "palmera", "mara", "rama", "amar", "marca"
    };

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("=== PARAULÒGIC ===");
        System.out.print("Lletres: ");
        for (int i = 0; i < LLETRES.length; i++) {
            char c = Character.toUpperCase(LLETRES[i]);
            if (LLETRES[i] == LLETRA_C)
                System.out.print("[" + c + "] ");
            else
                System.out.print(c + " ");
        }
        System.out.println();

        String[] trobades = new String[200];
        int nTrobades = 0;
        int total = 0;

        while (true) {
            System.out.print("Paraula (FI per acabar): ");
            String entrada = sc.nextLine().trim();

            if (entrada.equalsIgnoreCase("FI"))
                break;

            String paraula = entrada.toLowerCase();
            String paraulaUpper = paraula.toUpperCase();

            if (paraula.length() == 0) {
                System.out.println("Entrada buida.");
                continue;
            }

            // Comprovar duplicada
            boolean duplicada = false;
            for (int i = 0; i < nTrobades; i++) {
                if (trobades[i].equals(paraula)) {
                    duplicada = true;
                    break;
                }
            }
            if (duplicada) {
                System.out.println(paraulaUpper + " ja l'has trobat!");
                continue;
            }

            // Validar regles
            if (!esParaulaValida(paraula, LLETRES, LLETRA_C)) {
                System.out.println(paraulaUpper + " no és vàlida.");
                continue;
            }

            // Comprovar diccionari
            boolean existeix = false;
            for (int i = 0; i < DICCIONARI.length; i++) {
                if (DICCIONARI[i].equals(paraula)) {
                    existeix = true;
                    break;
                }
            }
            if (!existeix) {
                System.out.println(paraulaUpper + " no és vàlida.");
                continue;
            }

            // Guardar i puntuar
            trobades[nTrobades] = paraula;
            nTrobades++;

            int punts = calcularPuntuacio(paraula, LLETRES);
            total += punts;

            if (esTuti(paraula, LLETRES)) {
                System.out.println(paraulaUpper + " és un TUTI! +" + punts + " punts | Total: " + total);
            } else {
                System.out.println(paraulaUpper + " és vàlida! +" + punts + " punts | Total: " + total);
            }
        }

        System.out.println("=== RESULTAT FINAL ===");
        System.out.println("Puntuació: " + total + " pts");
        System.out.println("Paraules trobades: " + nTrobades);
        for (int i = 0; i < nTrobades; i++) {
            System.out.print(trobades[i].toUpperCase());
            if (i < nTrobades - 1) System.out.print(", ");
        }
        System.out.println();
        sc.close();
    }

    public static boolean esParaulaValida(String paraula, char[] lletres, char lletraC) {
        if (paraula.length() < 3) return false;

        boolean teCentral = false;
        for (int i = 0; i < paraula.length(); i++) {
            char c = paraula.charAt(i);
            if (c < 'a' || c > 'z') return false;
            if (c == lletraC) teCentral = true;

            boolean dins = false;
            for (int j = 0; j < lletres.length; j++) {
                if (c == lletres[j]) { dins = true; break; }
            }
            if (!dins) return false;
        }
        return teCentral;
    }

    public static int calcularPuntuacio(String paraula, char[] lletres) {
        int len = paraula.length();
        int punts;
        if (len == 3) punts = 1;
        else if (len == 4) punts = 2;
        else punts = len;

        if (esTuti(paraula, lletres)) punts += 10;
        return punts;
    }

    private static boolean esTuti(String paraula, char[] lletres) {
        for (int i = 0; i < lletres.length; i++) {
            boolean apareix = false;
            for (int j = 0; j < paraula.length(); j++) {
                if (paraula.charAt(j) == lletres[i]) { apareix = true; break; }
            }
            if (!apareix) return false;
        }
        return true;
    }
}`})]})]})}const eA=Fj([{path:"/",element:t.jsx(Mb,{}),children:[{index:!0,element:t.jsx($b,{})},{path:"basics/tipus-de-dades",element:t.jsx(f0,{})},{path:"basics/operadors",element:t.jsx(k0,{})},{path:"basics/sintaxi",element:t.jsx(N0,{})},{path:"basics/condicionals",element:t.jsx(T0,{})},{path:"basics/switch",element:t.jsx(P0,{})},{path:"basics/bucles",element:t.jsx(_0,{})},{path:"basics/modificadors-acces",element:t.jsx(q0,{})},{path:"arrays/arrays-1d",element:t.jsx(Z0,{})},{path:"arrays/arrays-2d",element:t.jsx(gS,{})},{path:"arrays/arraylist",element:t.jsx(ZS,{})},{path:"funcions/sense-parametres",element:t.jsx(v1,{})},{path:"funcions/amb-parametres",element:t.jsx(S1,{})},{path:"funcions/tipus-de-funcions",element:t.jsx(T1,{})},{path:"funcions/recursives",element:t.jsx(aw,{})},{path:"funcions/cridar-des-de-main",element:t.jsx(lw,{})},{path:"funcions/resum",element:t.jsx(cw,{})},{path:"classes/introduccio",element:t.jsx(uw,{})},{path:"classes/classe-vs-objecte",element:t.jsx(dw,{})},{path:"classes/modificadors",element:t.jsx(pw,{})},{path:"classes/constructors-this",element:t.jsx(mw,{})},{path:"classes/herencia",element:t.jsx(ww,{})},{path:"classes/polimorfisme",element:t.jsx(Iw,{})},{path:"classes/classes-abstractes",element:t.jsx(eC,{})},{path:"classes/exemple-biblioteca",element:t.jsx(tC,{})},{path:"modularitat/introduccio",element:t.jsx(rC,{})},{path:"modularitat/monolitic-vs-modular",element:t.jsx(aC,{})},{path:"modularitat/packages",element:t.jsx(nC,{})},{path:"modularitat/exemple-calculadora",element:t.jsx(iC,{})},{path:"string-math/classe-string",element:t.jsx(SC,{})},{path:"string-math/classe-math",element:t.jsx(TC,{})},{path:"string-math/random-vs-math-random",element:t.jsx($C,{})},{path:"java-modern/for-each",element:t.jsx(GC,{})},{path:"java-modern/operador-ternari",element:t.jsx(VC,{})},{path:"java-modern/var-i-altres",element:t.jsx(HC,{})},{path:"mon-professional/com-treballen-els-devs",element:t.jsx(QC,{})},{path:"analisi-disseny/diagrames-classes",element:t.jsx(XC,{})},{path:"analisi-disseny/diagrames-sequencia",element:t.jsx(tE,{})},{path:"analisi-disseny/diagrames-flux",element:t.jsx(rE,{})},{path:"analisi-disseny/casos-dus",element:t.jsx(aE,{})},{path:"analisi-disseny/projecte-real",element:t.jsx(nE,{})},{path:"analisi-disseny/introduccio-mvc",element:t.jsx(iE,{})},{path:"activitats/quiz-mvc",element:t.jsx(KE,{})},{path:"professor/exercicis-poo",element:t.jsx(YE,{})},{path:"professor/exercicis-modularitat",element:t.jsx(XE,{})},{path:"professor/paraulogic",element:t.jsx(ZE,{})}]}]);function tA(){return t.jsx(Kj,{router:eA})}$m(document.getElementById("root")).render(t.jsx(A.StrictMode,{children:t.jsx(tA,{})}));
