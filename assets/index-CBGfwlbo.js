function Wh(t,a){for(var r=0;r<a.length;r++){const n=a[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(n,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function Kh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Td={exports:{}},hs={},Pd={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zn=Symbol.for("react.element"),Yh=Symbol.for("react.portal"),Xh=Symbol.for("react.fragment"),Zh=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),tf=Symbol.for("react.provider"),af=Symbol.for("react.context"),rf=Symbol.for("react.forward_ref"),nf=Symbol.for("react.suspense"),sf=Symbol.for("react.memo"),lf=Symbol.for("react.lazy"),Bc=Symbol.iterator;function of(t){return t===null||typeof t!="object"?null:(t=Bc&&t[Bc]||t["@@iterator"],typeof t=="function"?t:null)}var Nd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kd=Object.assign,qd={};function zr(t,a,r){this.props=t,this.context=a,this.refs=qd,this.updater=r||Nd}zr.prototype.isReactComponent={};zr.prototype.setState=function(t,a){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,a,"setState")};zr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _d(){}_d.prototype=zr.prototype;function So(t,a,r){this.props=t,this.context=a,this.refs=qd,this.updater=r||Nd}var Eo=So.prototype=new _d;Eo.constructor=So;kd(Eo,zr.prototype);Eo.isPureReactComponent=!0;var Uc=Array.isArray,Od=Object.prototype.hasOwnProperty,Co={current:null},Id={key:!0,ref:!0,__self:!0,__source:!0};function Dd(t,a,r){var n,i={},s=null,l=null;if(a!=null)for(n in a.ref!==void 0&&(l=a.ref),a.key!==void 0&&(s=""+a.key),a)Od.call(a,n)&&!Id.hasOwnProperty(n)&&(i[n]=a[n]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(n in o=t.defaultProps,o)i[n]===void 0&&(i[n]=o[n]);return{$$typeof:zn,type:t,key:s,ref:l,props:i,_owner:Co.current}}function cf(t,a){return{$$typeof:zn,type:t.type,key:a,ref:t.ref,props:t.props,_owner:t._owner}}function wo(t){return typeof t=="object"&&t!==null&&t.$$typeof===zn}function uf(t){var a={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return a[r]})}var Gc=/\/+/g;function zs(t,a){return typeof t=="object"&&t!==null&&t.key!=null?uf(""+t.key):a.toString(36)}function Ci(t,a,r,n,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case zn:case Yh:l=!0}}if(l)return l=t,i=i(l),t=n===""?"."+zs(l,0):n,Uc(i)?(r="",t!=null&&(r=t.replace(Gc,"$&/")+"/"),Ci(i,a,r,"",function(u){return u})):i!=null&&(wo(i)&&(i=cf(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Gc,"$&/")+"/")+t)),a.push(i)),1;if(l=0,n=n===""?".":n+":",Uc(t))for(var o=0;o<t.length;o++){s=t[o];var c=n+zs(s,o);l+=Ci(s,a,r,c,i)}else if(c=of(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=n+zs(s,o++),l+=Ci(s,a,r,c,i);else if(s==="object")throw a=String(t),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");return l}function ai(t,a,r){if(t==null)return t;var n=[],i=0;return Ci(t,n,"","",function(s){return a.call(r,s,i++)}),n}function df(t){if(t._status===-1){var a=t._result;a=a(),a.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},wi={transition:null},pf={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:wi,ReactCurrentOwner:Co};function Fd(){throw Error("act(...) is not supported in production builds of React.")}pe.Children={map:ai,forEach:function(t,a,r){ai(t,function(){a.apply(this,arguments)},r)},count:function(t){var a=0;return ai(t,function(){a++}),a},toArray:function(t){return ai(t,function(a){return a})||[]},only:function(t){if(!wo(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pe.Component=zr;pe.Fragment=Xh;pe.Profiler=ef;pe.PureComponent=So;pe.StrictMode=Zh;pe.Suspense=nf;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pf;pe.act=Fd;pe.cloneElement=function(t,a,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=kd({},t.props),i=t.key,s=t.ref,l=t._owner;if(a!=null){if(a.ref!==void 0&&(s=a.ref,l=Co.current),a.key!==void 0&&(i=""+a.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in a)Od.call(a,c)&&!Id.hasOwnProperty(c)&&(n[c]=a[c]===void 0&&o!==void 0?o[c]:a[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];n.children=o}return{$$typeof:zn,type:t.type,key:i,ref:s,props:n,_owner:l}};pe.createContext=function(t){return t={$$typeof:af,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:tf,_context:t},t.Consumer=t};pe.createElement=Dd;pe.createFactory=function(t){var a=Dd.bind(null,t);return a.type=t,a};pe.createRef=function(){return{current:null}};pe.forwardRef=function(t){return{$$typeof:rf,render:t}};pe.isValidElement=wo;pe.lazy=function(t){return{$$typeof:lf,_payload:{_status:-1,_result:t},_init:df}};pe.memo=function(t,a){return{$$typeof:sf,type:t,compare:a===void 0?null:a}};pe.startTransition=function(t){var a=wi.transition;wi.transition={};try{t()}finally{wi.transition=a}};pe.unstable_act=Fd;pe.useCallback=function(t,a){return lt.current.useCallback(t,a)};pe.useContext=function(t){return lt.current.useContext(t)};pe.useDebugValue=function(){};pe.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};pe.useEffect=function(t,a){return lt.current.useEffect(t,a)};pe.useId=function(){return lt.current.useId()};pe.useImperativeHandle=function(t,a,r){return lt.current.useImperativeHandle(t,a,r)};pe.useInsertionEffect=function(t,a){return lt.current.useInsertionEffect(t,a)};pe.useLayoutEffect=function(t,a){return lt.current.useLayoutEffect(t,a)};pe.useMemo=function(t,a){return lt.current.useMemo(t,a)};pe.useReducer=function(t,a,r){return lt.current.useReducer(t,a,r)};pe.useRef=function(t){return lt.current.useRef(t)};pe.useState=function(t){return lt.current.useState(t)};pe.useSyncExternalStore=function(t,a,r){return lt.current.useSyncExternalStore(t,a,r)};pe.useTransition=function(){return lt.current.useTransition()};pe.version="18.3.1";Pd.exports=pe;var A=Pd.exports;const mf=Kh(A),hf=Wh({__proto__:null,default:mf},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ff=A,xf=Symbol.for("react.element"),gf=Symbol.for("react.fragment"),jf=Object.prototype.hasOwnProperty,vf=ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bf={key:!0,ref:!0,__self:!0,__source:!0};function zd(t,a,r){var n,i={},s=null,l=null;r!==void 0&&(s=""+r),a.key!==void 0&&(s=""+a.key),a.ref!==void 0&&(l=a.ref);for(n in a)jf.call(a,n)&&!bf.hasOwnProperty(n)&&(i[n]=a[n]);if(t&&t.defaultProps)for(n in a=t.defaultProps,a)i[n]===void 0&&(i[n]=a[n]);return{$$typeof:xf,type:t,key:s,ref:l,props:i,_owner:vf.current}}hs.Fragment=gf;hs.jsx=zd;hs.jsxs=zd;Td.exports=hs;var e=Td.exports,Bd={exports:{}},bt={},Ud={exports:{}},Gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function a(O,B){var G=O.length;O.push(B);e:for(;0<G;){var re=G-1>>>1,de=O[re];if(0<i(de,B))O[re]=B,O[G]=de,G=re;else break e}}function r(O){return O.length===0?null:O[0]}function n(O){if(O.length===0)return null;var B=O[0],G=O.pop();if(G!==B){O[0]=G;e:for(var re=0,de=O.length,ye=de>>>1;re<ye;){var Le=2*(re+1)-1,Fe=O[Le],Ee=Le+1,$e=O[Ee];if(0>i(Fe,G))Ee<de&&0>i($e,Fe)?(O[re]=$e,O[Ee]=G,re=Ee):(O[re]=Fe,O[Le]=G,re=Le);else if(Ee<de&&0>i($e,G))O[re]=$e,O[Ee]=G,re=Ee;else break e}}return B}function i(O,B){var G=O.sortIndex-B.sortIndex;return G!==0?G:O.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,o=l.now();t.unstable_now=function(){return l.now()-o}}var c=[],u=[],h=1,d=null,x=3,S=!1,j=!1,b=!1,E=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var B=r(u);B!==null;){if(B.callback===null)n(u);else if(B.startTime<=O)n(u),B.sortIndex=B.expirationTime,a(c,B);else break;B=r(u)}}function R(O){if(b=!1,v(O),!j)if(r(c)!==null)j=!0,H(P);else{var B=r(u);B!==null&&ae(R,B.startTime-O)}}function P(O,B){j=!1,b&&(b=!1,f(w),w=-1),S=!0;var G=x;try{for(v(B),d=r(c);d!==null&&(!(d.expirationTime>B)||O&&!le());){var re=d.callback;if(typeof re=="function"){d.callback=null,x=d.priorityLevel;var de=re(d.expirationTime<=B);B=t.unstable_now(),typeof de=="function"?d.callback=de:d===r(c)&&n(c),v(B)}else n(c);d=r(c)}if(d!==null)var ye=!0;else{var Le=r(u);Le!==null&&ae(R,Le.startTime-B),ye=!1}return ye}finally{d=null,x=G,S=!1}}var k=!1,q=null,w=-1,$=5,F=-1;function le(){return!(t.unstable_now()-F<$)}function ee(){if(q!==null){var O=t.unstable_now();F=O;var B=!0;try{B=q(!0,O)}finally{B?je():(k=!1,q=null)}}else k=!1}var je;if(typeof p=="function")je=function(){p(ee)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,_=te.port2;te.port1.onmessage=ee,je=function(){_.postMessage(null)}}else je=function(){E(ee,0)};function H(O){q=O,k||(k=!0,je())}function ae(O,B){w=E(function(){O(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){j||S||(j=!0,H(P))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(O){switch(x){case 1:case 2:case 3:var B=3;break;default:B=x}var G=x;x=B;try{return O()}finally{x=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var G=x;x=O;try{return B()}finally{x=G}},t.unstable_scheduleCallback=function(O,B,G){var re=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?re+G:re):G=re,O){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=G+de,O={id:h++,callback:B,priorityLevel:O,startTime:G,expirationTime:de,sortIndex:-1},G>re?(O.sortIndex=G,a(u,O),r(c)===null&&O===r(u)&&(b?(f(w),w=-1):b=!0,ae(R,G-re))):(O.sortIndex=de,a(c,O),j||S||(j=!0,H(P))),O},t.unstable_shouldYield=le,t.unstable_wrapCallback=function(O){var B=x;return function(){var G=x;x=B;try{return O.apply(this,arguments)}finally{x=G}}}})(Gd);Ud.exports=Gd;var yf=Ud.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf=A,vt=yf;function D(t){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hd=new Set,bn={};function nr(t,a){kr(t,a),kr(t+"Capture",a)}function kr(t,a){for(bn[t]=a,t=0;t<a.length;t++)Hd.add(a[t])}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wl=Object.prototype.hasOwnProperty,Ef=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hc={},$c={};function Cf(t){return wl.call($c,t)?!0:wl.call(Hc,t)?!1:Ef.test(t)?$c[t]=!0:(Hc[t]=!0,!1)}function wf(t,a,r,n){if(r!==null&&r.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Af(t,a,r,n){if(a===null||typeof a>"u"||wf(t,a,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function ot(t,a,r,n,i,s,l){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=a,this.sanitizeURL=s,this.removeEmptyString=l}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var a=t[0];Je[a]=new ot(a,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ao=/[\-:]([a-z])/g;function Lo(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var a=t.replace(Ao,Lo);Je[a]=new ot(a,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var a=t.replace(Ao,Lo);Je[a]=new ot(a,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var a=t.replace(Ao,Lo);Je[a]=new ot(a,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new ot(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ro(t,a,r,n){var i=Je.hasOwnProperty(a)?Je[a]:null;(i!==null?i.type!==0:n||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(Af(a,r,i,n)&&(r=null),n||i===null?Cf(a)&&(r===null?t.removeAttribute(a):t.setAttribute(a,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(a=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(a):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,a,r):t.setAttribute(a,r))))}var ma=Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ri=Symbol.for("react.element"),mr=Symbol.for("react.portal"),hr=Symbol.for("react.fragment"),Mo=Symbol.for("react.strict_mode"),Al=Symbol.for("react.profiler"),$d=Symbol.for("react.provider"),Vd=Symbol.for("react.context"),To=Symbol.for("react.forward_ref"),Ll=Symbol.for("react.suspense"),Rl=Symbol.for("react.suspense_list"),Po=Symbol.for("react.memo"),ja=Symbol.for("react.lazy"),Qd=Symbol.for("react.offscreen"),Vc=Symbol.iterator;function Vr(t){return t===null||typeof t!="object"?null:(t=Vc&&t[Vc]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,Bs;function rn(t){if(Bs===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);Bs=a&&a[1]||""}return`
`+Bs+t}var Us=!1;function Gs(t,a){if(!t||Us)return"";Us=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(u){var n=u}Reflect.construct(t,[],a)}else{try{a.call()}catch(u){n=u}t.call(a.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=n.stack.split(`
`),l=i.length-1,o=s.length-1;1<=l&&0<=o&&i[l]!==s[o];)o--;for(;1<=l&&0<=o;l--,o--)if(i[l]!==s[o]){if(l!==1||o!==1)do if(l--,o--,0>o||i[l]!==s[o]){var c=`
`+i[l].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=l&&0<=o);break}}}finally{Us=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?rn(t):""}function Lf(t){switch(t.tag){case 5:return rn(t.type);case 16:return rn("Lazy");case 13:return rn("Suspense");case 19:return rn("SuspenseList");case 0:case 2:case 15:return t=Gs(t.type,!1),t;case 11:return t=Gs(t.type.render,!1),t;case 1:return t=Gs(t.type,!0),t;default:return""}}function Ml(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hr:return"Fragment";case mr:return"Portal";case Al:return"Profiler";case Mo:return"StrictMode";case Ll:return"Suspense";case Rl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Vd:return(t.displayName||"Context")+".Consumer";case $d:return(t._context.displayName||"Context")+".Provider";case To:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Po:return a=t.displayName||null,a!==null?a:Ml(t.type)||"Memo";case ja:a=t._payload,t=t._init;try{return Ml(t(a))}catch{}}return null}function Rf(t){var a=t.type;switch(t.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=a.render,t=t.displayName||t.name||"",a.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ml(a);case 8:return a===Mo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function _a(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jd(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Mf(t){var a=Jd(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,a),n=""+t[a];if(!t.hasOwnProperty(a)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return i.call(this)},set:function(l){n=""+l,s.call(this,l)}}),Object.defineProperty(t,a,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function ni(t){t._valueTracker||(t._valueTracker=Mf(t))}function Wd(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var r=a.getValue(),n="";return t&&(n=Jd(t)?t.checked?"true":"false":t.value),t=n,t!==r?(a.setValue(t),!0):!1}function Bi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tl(t,a){var r=a.checked;return Ne({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Qc(t,a){var r=a.defaultValue==null?"":a.defaultValue,n=a.checked!=null?a.checked:a.defaultChecked;r=_a(a.value!=null?a.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Kd(t,a){a=a.checked,a!=null&&Ro(t,"checked",a,!1)}function Pl(t,a){Kd(t,a);var r=_a(a.value),n=a.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}a.hasOwnProperty("value")?Nl(t,a.type,r):a.hasOwnProperty("defaultValue")&&Nl(t,a.type,_a(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(t.defaultChecked=!!a.defaultChecked)}function Jc(t,a,r){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var n=a.type;if(!(n!=="submit"&&n!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+t._wrapperState.initialValue,r||a===t.value||(t.value=a),t.defaultValue=a}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function Nl(t,a,r){(a!=="number"||Bi(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var nn=Array.isArray;function Ar(t,a,r,n){if(t=t.options,a){a={};for(var i=0;i<r.length;i++)a["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=a.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+_a(r),a=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}a!==null||t[i].disabled||(a=t[i])}a!==null&&(a.selected=!0)}}function kl(t,a){if(a.dangerouslySetInnerHTML!=null)throw Error(D(91));return Ne({},a,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wc(t,a){var r=a.value;if(r==null){if(r=a.children,a=a.defaultValue,r!=null){if(a!=null)throw Error(D(92));if(nn(r)){if(1<r.length)throw Error(D(93));r=r[0]}a=r}a==null&&(a=""),r=a}t._wrapperState={initialValue:_a(r)}}function Yd(t,a){var r=_a(a.value),n=_a(a.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),a.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function Kc(t){var a=t.textContent;a===t._wrapperState.initialValue&&a!==""&&a!==null&&(t.value=a)}function Xd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ql(t,a){return t==null||t==="http://www.w3.org/1999/xhtml"?Xd(a):t==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ii,Zd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(a,r,n,i)})}:t}(function(t,a){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=a;else{for(ii=ii||document.createElement("div"),ii.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=ii.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;a.firstChild;)t.appendChild(a.firstChild)}});function yn(t,a){if(a){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=a;return}}t.textContent=a}var un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tf=["Webkit","ms","Moz","O"];Object.keys(un).forEach(function(t){Tf.forEach(function(a){a=a+t.charAt(0).toUpperCase()+t.substring(1),un[a]=un[t]})});function ep(t,a,r){return a==null||typeof a=="boolean"||a===""?"":r||typeof a!="number"||a===0||un.hasOwnProperty(t)&&un[t]?(""+a).trim():a+"px"}function tp(t,a){t=t.style;for(var r in a)if(a.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=ep(r,a[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var Pf=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _l(t,a){if(a){if(Pf[t]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(D(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(D(61))}if(a.style!=null&&typeof a.style!="object")throw Error(D(62))}}function Ol(t,a){if(t.indexOf("-")===-1)return typeof a.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Il=null;function No(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dl=null,Lr=null,Rr=null;function Yc(t){if(t=Gn(t)){if(typeof Dl!="function")throw Error(D(280));var a=t.stateNode;a&&(a=vs(a),Dl(t.stateNode,t.type,a))}}function ap(t){Lr?Rr?Rr.push(t):Rr=[t]:Lr=t}function rp(){if(Lr){var t=Lr,a=Rr;if(Rr=Lr=null,Yc(t),a)for(t=0;t<a.length;t++)Yc(a[t])}}function np(t,a){return t(a)}function ip(){}var Hs=!1;function sp(t,a,r){if(Hs)return t(a,r);Hs=!0;try{return np(t,a,r)}finally{Hs=!1,(Lr!==null||Rr!==null)&&(ip(),rp())}}function Sn(t,a){var r=t.stateNode;if(r===null)return null;var n=vs(r);if(n===null)return null;r=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(D(231,a,typeof r));return r}var Fl=!1;if(ca)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){Fl=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{Fl=!1}function Nf(t,a,r,n,i,s,l,o,c){var u=Array.prototype.slice.call(arguments,3);try{a.apply(r,u)}catch(h){this.onError(h)}}var dn=!1,Ui=null,Gi=!1,zl=null,kf={onError:function(t){dn=!0,Ui=t}};function qf(t,a,r,n,i,s,l,o,c){dn=!1,Ui=null,Nf.apply(kf,arguments)}function _f(t,a,r,n,i,s,l,o,c){if(qf.apply(this,arguments),dn){if(dn){var u=Ui;dn=!1,Ui=null}else throw Error(D(198));Gi||(Gi=!0,zl=u)}}function ir(t){var a=t,r=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,a.flags&4098&&(r=a.return),t=a.return;while(t)}return a.tag===3?r:null}function lp(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function Xc(t){if(ir(t)!==t)throw Error(D(188))}function Of(t){var a=t.alternate;if(!a){if(a=ir(t),a===null)throw Error(D(188));return a!==t?null:t}for(var r=t,n=a;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return Xc(i),t;if(s===n)return Xc(i),a;s=s.sibling}throw Error(D(188))}if(r.return!==n.return)r=i,n=s;else{for(var l=!1,o=i.child;o;){if(o===r){l=!0,r=i,n=s;break}if(o===n){l=!0,n=i,r=s;break}o=o.sibling}if(!l){for(o=s.child;o;){if(o===r){l=!0,r=s,n=i;break}if(o===n){l=!0,n=s,r=i;break}o=o.sibling}if(!l)throw Error(D(189))}}if(r.alternate!==n)throw Error(D(190))}if(r.tag!==3)throw Error(D(188));return r.stateNode.current===r?t:a}function op(t){return t=Of(t),t!==null?cp(t):null}function cp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var a=cp(t);if(a!==null)return a;t=t.sibling}return null}var up=vt.unstable_scheduleCallback,Zc=vt.unstable_cancelCallback,If=vt.unstable_shouldYield,Df=vt.unstable_requestPaint,Oe=vt.unstable_now,Ff=vt.unstable_getCurrentPriorityLevel,ko=vt.unstable_ImmediatePriority,dp=vt.unstable_UserBlockingPriority,Hi=vt.unstable_NormalPriority,zf=vt.unstable_LowPriority,pp=vt.unstable_IdlePriority,fs=null,Qt=null;function Bf(t){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(fs,t,void 0,(t.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:Hf,Uf=Math.log,Gf=Math.LN2;function Hf(t){return t>>>=0,t===0?32:31-(Uf(t)/Gf|0)|0}var si=64,li=4194304;function sn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $i(t,a){var r=t.pendingLanes;if(r===0)return 0;var n=0,i=t.suspendedLanes,s=t.pingedLanes,l=r&268435455;if(l!==0){var o=l&~i;o!==0?n=sn(o):(s&=l,s!==0&&(n=sn(s)))}else l=r&~i,l!==0?n=sn(l):s!==0&&(n=sn(s));if(n===0)return 0;if(a!==0&&a!==n&&!(a&i)&&(i=n&-n,s=a&-a,i>=s||i===16&&(s&4194240)!==0))return a;if(n&4&&(n|=r&16),a=t.entangledLanes,a!==0)for(t=t.entanglements,a&=n;0<a;)r=31-Dt(a),i=1<<r,n|=t[r],a&=~i;return n}function $f(t,a){switch(t){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vf(t,a){for(var r=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var l=31-Dt(s),o=1<<l,c=i[l];c===-1?(!(o&r)||o&n)&&(i[l]=$f(o,a)):c<=a&&(t.expiredLanes|=o),s&=~o}}function Bl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mp(){var t=si;return si<<=1,!(si&4194240)&&(si=64),t}function $s(t){for(var a=[],r=0;31>r;r++)a.push(t);return a}function Bn(t,a,r){t.pendingLanes|=a,a!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,a=31-Dt(a),t[a]=r}function Qf(t,a){var r=t.pendingLanes&~a;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=a,t.mutableReadLanes&=a,t.entangledLanes&=a,a=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-Dt(r),s=1<<i;a[i]=0,n[i]=-1,t[i]=-1,r&=~s}}function qo(t,a){var r=t.entangledLanes|=a;for(t=t.entanglements;r;){var n=31-Dt(r),i=1<<n;i&a|t[n]&a&&(t[n]|=a),r&=~i}}var ve=0;function hp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var fp,_o,xp,gp,jp,Ul=!1,oi=[],La=null,Ra=null,Ma=null,En=new Map,Cn=new Map,ba=[],Jf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eu(t,a){switch(t){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":En.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(a.pointerId)}}function Jr(t,a,r,n,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:a,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},a!==null&&(a=Gn(a),a!==null&&_o(a)),t):(t.eventSystemFlags|=n,a=t.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),t)}function Wf(t,a,r,n,i){switch(a){case"focusin":return La=Jr(La,t,a,r,n,i),!0;case"dragenter":return Ra=Jr(Ra,t,a,r,n,i),!0;case"mouseover":return Ma=Jr(Ma,t,a,r,n,i),!0;case"pointerover":var s=i.pointerId;return En.set(s,Jr(En.get(s)||null,t,a,r,n,i)),!0;case"gotpointercapture":return s=i.pointerId,Cn.set(s,Jr(Cn.get(s)||null,t,a,r,n,i)),!0}return!1}function vp(t){var a=Qa(t.target);if(a!==null){var r=ir(a);if(r!==null){if(a=r.tag,a===13){if(a=lp(r),a!==null){t.blockedOn=a,jp(t.priority,function(){xp(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ai(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var r=Gl(t.domEventName,t.eventSystemFlags,a[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);Il=n,r.target.dispatchEvent(n),Il=null}else return a=Gn(r),a!==null&&_o(a),t.blockedOn=r,!1;a.shift()}return!0}function tu(t,a,r){Ai(t)&&r.delete(a)}function Kf(){Ul=!1,La!==null&&Ai(La)&&(La=null),Ra!==null&&Ai(Ra)&&(Ra=null),Ma!==null&&Ai(Ma)&&(Ma=null),En.forEach(tu),Cn.forEach(tu)}function Wr(t,a){t.blockedOn===a&&(t.blockedOn=null,Ul||(Ul=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,Kf)))}function wn(t){function a(i){return Wr(i,t)}if(0<oi.length){Wr(oi[0],t);for(var r=1;r<oi.length;r++){var n=oi[r];n.blockedOn===t&&(n.blockedOn=null)}}for(La!==null&&Wr(La,t),Ra!==null&&Wr(Ra,t),Ma!==null&&Wr(Ma,t),En.forEach(a),Cn.forEach(a),r=0;r<ba.length;r++)n=ba[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<ba.length&&(r=ba[0],r.blockedOn===null);)vp(r),r.blockedOn===null&&ba.shift()}var Mr=ma.ReactCurrentBatchConfig,Vi=!0;function Yf(t,a,r,n){var i=ve,s=Mr.transition;Mr.transition=null;try{ve=1,Oo(t,a,r,n)}finally{ve=i,Mr.transition=s}}function Xf(t,a,r,n){var i=ve,s=Mr.transition;Mr.transition=null;try{ve=4,Oo(t,a,r,n)}finally{ve=i,Mr.transition=s}}function Oo(t,a,r,n){if(Vi){var i=Gl(t,a,r,n);if(i===null)tl(t,a,n,Qi,r),eu(t,n);else if(Wf(i,t,a,r,n))n.stopPropagation();else if(eu(t,n),a&4&&-1<Jf.indexOf(t)){for(;i!==null;){var s=Gn(i);if(s!==null&&fp(s),s=Gl(t,a,r,n),s===null&&tl(t,a,n,Qi,r),s===i)break;i=s}i!==null&&n.stopPropagation()}else tl(t,a,n,null,r)}}var Qi=null;function Gl(t,a,r,n){if(Qi=null,t=No(n),t=Qa(t),t!==null)if(a=ir(t),a===null)t=null;else if(r=a.tag,r===13){if(t=lp(a),t!==null)return t;t=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null);return Qi=t,null}function bp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ff()){case ko:return 1;case dp:return 4;case Hi:case zf:return 16;case pp:return 536870912;default:return 16}default:return 16}}var Ca=null,Io=null,Li=null;function yp(){if(Li)return Li;var t,a=Io,r=a.length,n,i="value"in Ca?Ca.value:Ca.textContent,s=i.length;for(t=0;t<r&&a[t]===i[t];t++);var l=r-t;for(n=1;n<=l&&a[r-n]===i[s-n];n++);return Li=i.slice(t,1<n?1-n:void 0)}function Ri(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function ci(){return!0}function au(){return!1}function yt(t){function a(r,n,i,s,l){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(r=t[o],this[o]=r?r(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ci:au,this.isPropagationStopped=au,this}return Ne(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),a}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Do=yt(Br),Un=Ne({},Br,{view:0,detail:0}),Zf=yt(Un),Vs,Qs,Kr,xs=Ne({},Un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Kr&&(Kr&&t.type==="mousemove"?(Vs=t.screenX-Kr.screenX,Qs=t.screenY-Kr.screenY):Qs=Vs=0,Kr=t),Vs)},movementY:function(t){return"movementY"in t?t.movementY:Qs}}),ru=yt(xs),ex=Ne({},xs,{dataTransfer:0}),tx=yt(ex),ax=Ne({},Un,{relatedTarget:0}),Js=yt(ax),rx=Ne({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),nx=yt(rx),ix=Ne({},Br,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sx=yt(ix),lx=Ne({},Br,{data:0}),nu=yt(lx),ox={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dx(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=ux[t])?!!a[t]:!1}function Fo(){return dx}var px=Ne({},Un,{key:function(t){if(t.key){var a=ox[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Ri(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fo,charCode:function(t){return t.type==="keypress"?Ri(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ri(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mx=yt(px),hx=Ne({},xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iu=yt(hx),fx=Ne({},Un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fo}),xx=yt(fx),gx=Ne({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),jx=yt(gx),vx=Ne({},xs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bx=yt(vx),yx=[9,13,27,32],zo=ca&&"CompositionEvent"in window,pn=null;ca&&"documentMode"in document&&(pn=document.documentMode);var Sx=ca&&"TextEvent"in window&&!pn,Sp=ca&&(!zo||pn&&8<pn&&11>=pn),su=" ",lu=!1;function Ep(t,a){switch(t){case"keyup":return yx.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fr=!1;function Ex(t,a){switch(t){case"compositionend":return Cp(a);case"keypress":return a.which!==32?null:(lu=!0,su);case"textInput":return t=a.data,t===su&&lu?null:t;default:return null}}function Cx(t,a){if(fr)return t==="compositionend"||!zo&&Ep(t,a)?(t=yp(),Li=Io=Ca=null,fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Sp&&a.locale!=="ko"?null:a.data;default:return null}}var wx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ou(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!wx[t.type]:a==="textarea"}function wp(t,a,r,n){ap(n),a=Ji(a,"onChange"),0<a.length&&(r=new Do("onChange","change",null,r,n),t.push({event:r,listeners:a}))}var mn=null,An=null;function Ax(t){Op(t,0)}function gs(t){var a=jr(t);if(Wd(a))return t}function Lx(t,a){if(t==="change")return a}var Ap=!1;if(ca){var Ws;if(ca){var Ks="oninput"in document;if(!Ks){var cu=document.createElement("div");cu.setAttribute("oninput","return;"),Ks=typeof cu.oninput=="function"}Ws=Ks}else Ws=!1;Ap=Ws&&(!document.documentMode||9<document.documentMode)}function uu(){mn&&(mn.detachEvent("onpropertychange",Lp),An=mn=null)}function Lp(t){if(t.propertyName==="value"&&gs(An)){var a=[];wp(a,An,t,No(t)),sp(Ax,a)}}function Rx(t,a,r){t==="focusin"?(uu(),mn=a,An=r,mn.attachEvent("onpropertychange",Lp)):t==="focusout"&&uu()}function Mx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gs(An)}function Tx(t,a){if(t==="click")return gs(a)}function Px(t,a){if(t==="input"||t==="change")return gs(a)}function Nx(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var Bt=typeof Object.is=="function"?Object.is:Nx;function Ln(t,a){if(Bt(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var r=Object.keys(t),n=Object.keys(a);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!wl.call(a,i)||!Bt(t[i],a[i]))return!1}return!0}function du(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pu(t,a){var r=du(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=a&&n>=a)return{node:r,offset:a-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=du(r)}}function Rp(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?Rp(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function Mp(){for(var t=window,a=Bi();a instanceof t.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)t=a.contentWindow;else break;a=Bi(t.document)}return a}function Bo(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}function kx(t){var a=Mp(),r=t.focusedElem,n=t.selectionRange;if(a!==r&&r&&r.ownerDocument&&Rp(r.ownerDocument.documentElement,r)){if(n!==null&&Bo(r)){if(a=n.start,t=n.end,t===void 0&&(t=a),"selectionStart"in r)r.selectionStart=a,r.selectionEnd=Math.min(t,r.value.length);else if(t=(a=r.ownerDocument||document)&&a.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!t.extend&&s>n&&(i=n,n=s,s=i),i=pu(r,s);var l=pu(r,n);i&&l&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(a=a.createRange(),a.setStart(i.node,i.offset),t.removeAllRanges(),s>n?(t.addRange(a),t.extend(l.node,l.offset)):(a.setEnd(l.node,l.offset),t.addRange(a)))}}for(a=[],t=r;t=t.parentNode;)t.nodeType===1&&a.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<a.length;r++)t=a[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qx=ca&&"documentMode"in document&&11>=document.documentMode,xr=null,Hl=null,hn=null,$l=!1;function mu(t,a,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;$l||xr==null||xr!==Bi(n)||(n=xr,"selectionStart"in n&&Bo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),hn&&Ln(hn,n)||(hn=n,n=Ji(Hl,"onSelect"),0<n.length&&(a=new Do("onSelect","select",null,a,r),t.push({event:a,listeners:n}),a.target=xr)))}function ui(t,a){var r={};return r[t.toLowerCase()]=a.toLowerCase(),r["Webkit"+t]="webkit"+a,r["Moz"+t]="moz"+a,r}var gr={animationend:ui("Animation","AnimationEnd"),animationiteration:ui("Animation","AnimationIteration"),animationstart:ui("Animation","AnimationStart"),transitionend:ui("Transition","TransitionEnd")},Ys={},Tp={};ca&&(Tp=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function js(t){if(Ys[t])return Ys[t];if(!gr[t])return t;var a=gr[t],r;for(r in a)if(a.hasOwnProperty(r)&&r in Tp)return Ys[t]=a[r];return t}var Pp=js("animationend"),Np=js("animationiteration"),kp=js("animationstart"),qp=js("transitionend"),_p=new Map,hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ia(t,a){_p.set(t,a),nr(a,[t])}for(var Xs=0;Xs<hu.length;Xs++){var Zs=hu[Xs],_x=Zs.toLowerCase(),Ox=Zs[0].toUpperCase()+Zs.slice(1);Ia(_x,"on"+Ox)}Ia(Pp,"onAnimationEnd");Ia(Np,"onAnimationIteration");Ia(kp,"onAnimationStart");Ia("dblclick","onDoubleClick");Ia("focusin","onFocus");Ia("focusout","onBlur");Ia(qp,"onTransitionEnd");kr("onMouseEnter",["mouseout","mouseover"]);kr("onMouseLeave",["mouseout","mouseover"]);kr("onPointerEnter",["pointerout","pointerover"]);kr("onPointerLeave",["pointerout","pointerover"]);nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ix=new Set("cancel close invalid load scroll toggle".split(" ").concat(ln));function fu(t,a,r){var n=t.type||"unknown-event";t.currentTarget=r,_f(n,a,void 0,t),t.currentTarget=null}function Op(t,a){a=(a&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;e:{var s=void 0;if(a)for(var l=n.length-1;0<=l;l--){var o=n[l],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&i.isPropagationStopped())break e;fu(i,o,u),s=c}else for(l=0;l<n.length;l++){if(o=n[l],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&i.isPropagationStopped())break e;fu(i,o,u),s=c}}}if(Gi)throw t=zl,Gi=!1,zl=null,t}function Ce(t,a){var r=a[Kl];r===void 0&&(r=a[Kl]=new Set);var n=t+"__bubble";r.has(n)||(Ip(a,t,2,!1),r.add(n))}function el(t,a,r){var n=0;a&&(n|=4),Ip(r,t,n,a)}var di="_reactListening"+Math.random().toString(36).slice(2);function Rn(t){if(!t[di]){t[di]=!0,Hd.forEach(function(r){r!=="selectionchange"&&(Ix.has(r)||el(r,!1,t),el(r,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[di]||(a[di]=!0,el("selectionchange",!1,a))}}function Ip(t,a,r,n){switch(bp(a)){case 1:var i=Yf;break;case 4:i=Xf;break;default:i=Oo}r=i.bind(null,a,r,t),i=void 0,!Fl||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(a,r,{capture:!0,passive:i}):t.addEventListener(a,r,!0):i!==void 0?t.addEventListener(a,r,{passive:i}):t.addEventListener(a,r,!1)}function tl(t,a,r,n,i){var s=n;if(!(a&1)&&!(a&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var o=n.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(l===4)for(l=n.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;o!==null;){if(l=Qa(o),l===null)return;if(c=l.tag,c===5||c===6){n=s=l;continue e}o=o.parentNode}}n=n.return}sp(function(){var u=s,h=No(r),d=[];e:{var x=_p.get(t);if(x!==void 0){var S=Do,j=t;switch(t){case"keypress":if(Ri(r)===0)break e;case"keydown":case"keyup":S=mx;break;case"focusin":j="focus",S=Js;break;case"focusout":j="blur",S=Js;break;case"beforeblur":case"afterblur":S=Js;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=xx;break;case Pp:case Np:case kp:S=nx;break;case qp:S=jx;break;case"scroll":S=Zf;break;case"wheel":S=bx;break;case"copy":case"cut":case"paste":S=sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=iu}var b=(a&4)!==0,E=!b&&t==="scroll",f=b?x!==null?x+"Capture":null:x;b=[];for(var p=u,v;p!==null;){v=p;var R=v.stateNode;if(v.tag===5&&R!==null&&(v=R,f!==null&&(R=Sn(p,f),R!=null&&b.push(Mn(p,R,v)))),E)break;p=p.return}0<b.length&&(x=new S(x,j,null,r,h),d.push({event:x,listeners:b}))}}if(!(a&7)){e:{if(x=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",x&&r!==Il&&(j=r.relatedTarget||r.fromElement)&&(Qa(j)||j[ua]))break e;if((S||x)&&(x=h.window===h?h:(x=h.ownerDocument)?x.defaultView||x.parentWindow:window,S?(j=r.relatedTarget||r.toElement,S=u,j=j?Qa(j):null,j!==null&&(E=ir(j),j!==E||j.tag!==5&&j.tag!==6)&&(j=null)):(S=null,j=u),S!==j)){if(b=ru,R="onMouseLeave",f="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(b=iu,R="onPointerLeave",f="onPointerEnter",p="pointer"),E=S==null?x:jr(S),v=j==null?x:jr(j),x=new b(R,p+"leave",S,r,h),x.target=E,x.relatedTarget=v,R=null,Qa(h)===u&&(b=new b(f,p+"enter",j,r,h),b.target=v,b.relatedTarget=E,R=b),E=R,S&&j)t:{for(b=S,f=j,p=0,v=b;v;v=ur(v))p++;for(v=0,R=f;R;R=ur(R))v++;for(;0<p-v;)b=ur(b),p--;for(;0<v-p;)f=ur(f),v--;for(;p--;){if(b===f||f!==null&&b===f.alternate)break t;b=ur(b),f=ur(f)}b=null}else b=null;S!==null&&xu(d,x,S,b,!1),j!==null&&E!==null&&xu(d,E,j,b,!0)}}e:{if(x=u?jr(u):window,S=x.nodeName&&x.nodeName.toLowerCase(),S==="select"||S==="input"&&x.type==="file")var P=Lx;else if(ou(x))if(Ap)P=Px;else{P=Mx;var k=Rx}else(S=x.nodeName)&&S.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(P=Tx);if(P&&(P=P(t,u))){wp(d,P,r,h);break e}k&&k(t,x,u),t==="focusout"&&(k=x._wrapperState)&&k.controlled&&x.type==="number"&&Nl(x,"number",x.value)}switch(k=u?jr(u):window,t){case"focusin":(ou(k)||k.contentEditable==="true")&&(xr=k,Hl=u,hn=null);break;case"focusout":hn=Hl=xr=null;break;case"mousedown":$l=!0;break;case"contextmenu":case"mouseup":case"dragend":$l=!1,mu(d,r,h);break;case"selectionchange":if(qx)break;case"keydown":case"keyup":mu(d,r,h)}var q;if(zo)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else fr?Ep(t,r)&&(w="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(w="onCompositionStart");w&&(Sp&&r.locale!=="ko"&&(fr||w!=="onCompositionStart"?w==="onCompositionEnd"&&fr&&(q=yp()):(Ca=h,Io="value"in Ca?Ca.value:Ca.textContent,fr=!0)),k=Ji(u,w),0<k.length&&(w=new nu(w,t,null,r,h),d.push({event:w,listeners:k}),q?w.data=q:(q=Cp(r),q!==null&&(w.data=q)))),(q=Sx?Ex(t,r):Cx(t,r))&&(u=Ji(u,"onBeforeInput"),0<u.length&&(h=new nu("onBeforeInput","beforeinput",null,r,h),d.push({event:h,listeners:u}),h.data=q))}Op(d,a)})}function Mn(t,a,r){return{instance:t,listener:a,currentTarget:r}}function Ji(t,a){for(var r=a+"Capture",n=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Sn(t,r),s!=null&&n.unshift(Mn(t,s,i)),s=Sn(t,a),s!=null&&n.push(Mn(t,s,i))),t=t.return}return n}function ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xu(t,a,r,n,i){for(var s=a._reactName,l=[];r!==null&&r!==n;){var o=r,c=o.alternate,u=o.stateNode;if(c!==null&&c===n)break;o.tag===5&&u!==null&&(o=u,i?(c=Sn(r,s),c!=null&&l.unshift(Mn(r,c,o))):i||(c=Sn(r,s),c!=null&&l.push(Mn(r,c,o)))),r=r.return}l.length!==0&&t.push({event:a,listeners:l})}var Dx=/\r\n?/g,Fx=/\u0000|\uFFFD/g;function gu(t){return(typeof t=="string"?t:""+t).replace(Dx,`
`).replace(Fx,"")}function pi(t,a,r){if(a=gu(a),gu(t)!==a&&r)throw Error(D(425))}function Wi(){}var Vl=null,Ql=null;function Jl(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Wl=typeof setTimeout=="function"?setTimeout:void 0,zx=typeof clearTimeout=="function"?clearTimeout:void 0,ju=typeof Promise=="function"?Promise:void 0,Bx=typeof queueMicrotask=="function"?queueMicrotask:typeof ju<"u"?function(t){return ju.resolve(null).then(t).catch(Ux)}:Wl;function Ux(t){setTimeout(function(){throw t})}function al(t,a){var r=a,n=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){t.removeChild(i),wn(a);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);wn(a)}function Ta(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return t}function vu(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(a===0)return t;a--}else r==="/$"&&a++}t=t.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Ur,Tn="__reactProps$"+Ur,ua="__reactContainer$"+Ur,Kl="__reactEvents$"+Ur,Gx="__reactListeners$"+Ur,Hx="__reactHandles$"+Ur;function Qa(t){var a=t[Vt];if(a)return a;for(var r=t.parentNode;r;){if(a=r[ua]||r[Vt]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(t=vu(t);t!==null;){if(r=t[Vt])return r;t=vu(t)}return a}t=r,r=t.parentNode}return null}function Gn(t){return t=t[Vt]||t[ua],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function vs(t){return t[Tn]||null}var Yl=[],vr=-1;function Da(t){return{current:t}}function Ae(t){0>vr||(t.current=Yl[vr],Yl[vr]=null,vr--)}function Se(t,a){vr++,Yl[vr]=t.current,t.current=a}var Oa={},tt=Da(Oa),dt=Da(!1),Za=Oa;function qr(t,a){var r=t.type.contextTypes;if(!r)return Oa;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===a)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=a[s];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=a,t.__reactInternalMemoizedMaskedChildContext=i),i}function pt(t){return t=t.childContextTypes,t!=null}function Ki(){Ae(dt),Ae(tt)}function bu(t,a,r){if(tt.current!==Oa)throw Error(D(168));Se(tt,a),Se(dt,r)}function Dp(t,a,r){var n=t.stateNode;if(a=a.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in a))throw Error(D(108,Rf(t)||"Unknown",i));return Ne({},r,n)}function Yi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Oa,Za=tt.current,Se(tt,t),Se(dt,dt.current),!0}function yu(t,a,r){var n=t.stateNode;if(!n)throw Error(D(169));r?(t=Dp(t,a,Za),n.__reactInternalMemoizedMergedChildContext=t,Ae(dt),Ae(tt),Se(tt,t)):Ae(dt),Se(dt,r)}var ia=null,bs=!1,rl=!1;function Fp(t){ia===null?ia=[t]:ia.push(t)}function $x(t){bs=!0,Fp(t)}function Fa(){if(!rl&&ia!==null){rl=!0;var t=0,a=ve;try{var r=ia;for(ve=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}ia=null,bs=!1}catch(i){throw ia!==null&&(ia=ia.slice(t+1)),up(ko,Fa),i}finally{ve=a,rl=!1}}return null}var br=[],yr=0,Xi=null,Zi=0,Ct=[],wt=0,er=null,sa=1,la="";function $a(t,a){br[yr++]=Zi,br[yr++]=Xi,Xi=t,Zi=a}function zp(t,a,r){Ct[wt++]=sa,Ct[wt++]=la,Ct[wt++]=er,er=t;var n=sa;t=la;var i=32-Dt(n)-1;n&=~(1<<i),r+=1;var s=32-Dt(a)+i;if(30<s){var l=i-i%5;s=(n&(1<<l)-1).toString(32),n>>=l,i-=l,sa=1<<32-Dt(a)+i|r<<i|n,la=s+t}else sa=1<<s|r<<i|n,la=t}function Uo(t){t.return!==null&&($a(t,1),zp(t,1,0))}function Go(t){for(;t===Xi;)Xi=br[--yr],br[yr]=null,Zi=br[--yr],br[yr]=null;for(;t===er;)er=Ct[--wt],Ct[wt]=null,la=Ct[--wt],Ct[wt]=null,sa=Ct[--wt],Ct[wt]=null}var jt=null,gt=null,Re=!1,It=null;function Bp(t,a){var r=At(5,null,null,0);r.elementType="DELETED",r.stateNode=a,r.return=t,a=t.deletions,a===null?(t.deletions=[r],t.flags|=16):a.push(r)}function Su(t,a){switch(t.tag){case 5:var r=t.type;return a=a.nodeType!==1||r.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(t.stateNode=a,jt=t,gt=Ta(a.firstChild),!0):!1;case 6:return a=t.pendingProps===""||a.nodeType!==3?null:a,a!==null?(t.stateNode=a,jt=t,gt=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(r=er!==null?{id:sa,overflow:la}:null,t.memoizedState={dehydrated:a,treeContext:r,retryLane:1073741824},r=At(18,null,null,0),r.stateNode=a,r.return=t,t.child=r,jt=t,gt=null,!0):!1;default:return!1}}function Xl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zl(t){if(Re){var a=gt;if(a){var r=a;if(!Su(t,a)){if(Xl(t))throw Error(D(418));a=Ta(r.nextSibling);var n=jt;a&&Su(t,a)?Bp(n,r):(t.flags=t.flags&-4097|2,Re=!1,jt=t)}}else{if(Xl(t))throw Error(D(418));t.flags=t.flags&-4097|2,Re=!1,jt=t}}}function Eu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jt=t}function mi(t){if(t!==jt)return!1;if(!Re)return Eu(t),Re=!0,!1;var a;if((a=t.tag!==3)&&!(a=t.tag!==5)&&(a=t.type,a=a!=="head"&&a!=="body"&&!Jl(t.type,t.memoizedProps)),a&&(a=gt)){if(Xl(t))throw Up(),Error(D(418));for(;a;)Bp(t,a),a=Ta(a.nextSibling)}if(Eu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(a===0){gt=Ta(t.nextSibling);break e}a--}else r!=="$"&&r!=="$!"&&r!=="$?"||a++}t=t.nextSibling}gt=null}}else gt=jt?Ta(t.stateNode.nextSibling):null;return!0}function Up(){for(var t=gt;t;)t=Ta(t.nextSibling)}function _r(){gt=jt=null,Re=!1}function Ho(t){It===null?It=[t]:It.push(t)}var Vx=ma.ReactCurrentBatchConfig;function Yr(t,a,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(D(309));var n=r.stateNode}if(!n)throw Error(D(147,t));var i=n,s=""+t;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===s?a.ref:(a=function(l){var o=i.refs;l===null?delete o[s]:o[s]=l},a._stringRef=s,a)}if(typeof t!="string")throw Error(D(284));if(!r._owner)throw Error(D(290,t))}return t}function hi(t,a){throw t=Object.prototype.toString.call(a),Error(D(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t))}function Cu(t){var a=t._init;return a(t._payload)}function Gp(t){function a(f,p){if(t){var v=f.deletions;v===null?(f.deletions=[p],f.flags|=16):v.push(p)}}function r(f,p){if(!t)return null;for(;p!==null;)a(f,p),p=p.sibling;return null}function n(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function i(f,p){return f=qa(f,p),f.index=0,f.sibling=null,f}function s(f,p,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<p?(f.flags|=2,p):v):(f.flags|=2,p)):(f.flags|=1048576,p)}function l(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,p,v,R){return p===null||p.tag!==6?(p=ul(v,f.mode,R),p.return=f,p):(p=i(p,v),p.return=f,p)}function c(f,p,v,R){var P=v.type;return P===hr?h(f,p,v.props.children,R,v.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ja&&Cu(P)===p.type)?(R=i(p,v.props),R.ref=Yr(f,p,v),R.return=f,R):(R=_i(v.type,v.key,v.props,null,f.mode,R),R.ref=Yr(f,p,v),R.return=f,R)}function u(f,p,v,R){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=dl(v,f.mode,R),p.return=f,p):(p=i(p,v.children||[]),p.return=f,p)}function h(f,p,v,R,P){return p===null||p.tag!==7?(p=Xa(v,f.mode,R,P),p.return=f,p):(p=i(p,v),p.return=f,p)}function d(f,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ul(""+p,f.mode,v),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ri:return v=_i(p.type,p.key,p.props,null,f.mode,v),v.ref=Yr(f,null,p),v.return=f,v;case mr:return p=dl(p,f.mode,v),p.return=f,p;case ja:var R=p._init;return d(f,R(p._payload),v)}if(nn(p)||Vr(p))return p=Xa(p,f.mode,v,null),p.return=f,p;hi(f,p)}return null}function x(f,p,v,R){var P=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:o(f,p,""+v,R);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ri:return v.key===P?c(f,p,v,R):null;case mr:return v.key===P?u(f,p,v,R):null;case ja:return P=v._init,x(f,p,P(v._payload),R)}if(nn(v)||Vr(v))return P!==null?null:h(f,p,v,R,null);hi(f,v)}return null}function S(f,p,v,R,P){if(typeof R=="string"&&R!==""||typeof R=="number")return f=f.get(v)||null,o(p,f,""+R,P);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case ri:return f=f.get(R.key===null?v:R.key)||null,c(p,f,R,P);case mr:return f=f.get(R.key===null?v:R.key)||null,u(p,f,R,P);case ja:var k=R._init;return S(f,p,v,k(R._payload),P)}if(nn(R)||Vr(R))return f=f.get(v)||null,h(p,f,R,P,null);hi(p,R)}return null}function j(f,p,v,R){for(var P=null,k=null,q=p,w=p=0,$=null;q!==null&&w<v.length;w++){q.index>w?($=q,q=null):$=q.sibling;var F=x(f,q,v[w],R);if(F===null){q===null&&(q=$);break}t&&q&&F.alternate===null&&a(f,q),p=s(F,p,w),k===null?P=F:k.sibling=F,k=F,q=$}if(w===v.length)return r(f,q),Re&&$a(f,w),P;if(q===null){for(;w<v.length;w++)q=d(f,v[w],R),q!==null&&(p=s(q,p,w),k===null?P=q:k.sibling=q,k=q);return Re&&$a(f,w),P}for(q=n(f,q);w<v.length;w++)$=S(q,f,w,v[w],R),$!==null&&(t&&$.alternate!==null&&q.delete($.key===null?w:$.key),p=s($,p,w),k===null?P=$:k.sibling=$,k=$);return t&&q.forEach(function(le){return a(f,le)}),Re&&$a(f,w),P}function b(f,p,v,R){var P=Vr(v);if(typeof P!="function")throw Error(D(150));if(v=P.call(v),v==null)throw Error(D(151));for(var k=P=null,q=p,w=p=0,$=null,F=v.next();q!==null&&!F.done;w++,F=v.next()){q.index>w?($=q,q=null):$=q.sibling;var le=x(f,q,F.value,R);if(le===null){q===null&&(q=$);break}t&&q&&le.alternate===null&&a(f,q),p=s(le,p,w),k===null?P=le:k.sibling=le,k=le,q=$}if(F.done)return r(f,q),Re&&$a(f,w),P;if(q===null){for(;!F.done;w++,F=v.next())F=d(f,F.value,R),F!==null&&(p=s(F,p,w),k===null?P=F:k.sibling=F,k=F);return Re&&$a(f,w),P}for(q=n(f,q);!F.done;w++,F=v.next())F=S(q,f,w,F.value,R),F!==null&&(t&&F.alternate!==null&&q.delete(F.key===null?w:F.key),p=s(F,p,w),k===null?P=F:k.sibling=F,k=F);return t&&q.forEach(function(ee){return a(f,ee)}),Re&&$a(f,w),P}function E(f,p,v,R){if(typeof v=="object"&&v!==null&&v.type===hr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ri:e:{for(var P=v.key,k=p;k!==null;){if(k.key===P){if(P=v.type,P===hr){if(k.tag===7){r(f,k.sibling),p=i(k,v.props.children),p.return=f,f=p;break e}}else if(k.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ja&&Cu(P)===k.type){r(f,k.sibling),p=i(k,v.props),p.ref=Yr(f,k,v),p.return=f,f=p;break e}r(f,k);break}else a(f,k);k=k.sibling}v.type===hr?(p=Xa(v.props.children,f.mode,R,v.key),p.return=f,f=p):(R=_i(v.type,v.key,v.props,null,f.mode,R),R.ref=Yr(f,p,v),R.return=f,f=R)}return l(f);case mr:e:{for(k=v.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){r(f,p.sibling),p=i(p,v.children||[]),p.return=f,f=p;break e}else{r(f,p);break}else a(f,p);p=p.sibling}p=dl(v,f.mode,R),p.return=f,f=p}return l(f);case ja:return k=v._init,E(f,p,k(v._payload),R)}if(nn(v))return j(f,p,v,R);if(Vr(v))return b(f,p,v,R);hi(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(r(f,p.sibling),p=i(p,v),p.return=f,f=p):(r(f,p),p=ul(v,f.mode,R),p.return=f,f=p),l(f)):r(f,p)}return E}var Or=Gp(!0),Hp=Gp(!1),es=Da(null),ts=null,Sr=null,$o=null;function Vo(){$o=Sr=ts=null}function Qo(t){var a=es.current;Ae(es),t._currentValue=a}function eo(t,a,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),t===r)break;t=t.return}}function Tr(t,a){ts=t,$o=Sr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&a&&(ut=!0),t.firstContext=null)}function Rt(t){var a=t._currentValue;if($o!==t)if(t={context:t,memoizedValue:a,next:null},Sr===null){if(ts===null)throw Error(D(308));Sr=t,ts.dependencies={lanes:0,firstContext:t}}else Sr=Sr.next=t;return a}var Ja=null;function Jo(t){Ja===null?Ja=[t]:Ja.push(t)}function $p(t,a,r,n){var i=a.interleaved;return i===null?(r.next=r,Jo(a)):(r.next=i.next,i.next=r),a.interleaved=r,da(t,n)}function da(t,a){t.lanes|=a;var r=t.alternate;for(r!==null&&(r.lanes|=a),r=t,t=t.return;t!==null;)t.childLanes|=a,r=t.alternate,r!==null&&(r.childLanes|=a),r=t,t=t.return;return r.tag===3?r.stateNode:null}var va=!1;function Wo(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vp(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function oa(t,a){return{eventTime:t,lane:a,tag:0,payload:null,callback:null,next:null}}function Pa(t,a,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,ge&2){var i=n.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),n.pending=a,da(t,r)}return i=n.interleaved,i===null?(a.next=a,Jo(n)):(a.next=i.next,i.next=a),n.interleaved=a,da(t,r)}function Mi(t,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194240)!==0)){var n=a.lanes;n&=t.pendingLanes,r|=n,a.lanes=r,qo(t,r)}}function wu(t,a){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=l:s=s.next=l,r=r.next}while(r!==null);s===null?i=s=a:s=s.next=a}else i=s=a;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=a:t.next=a,r.lastBaseUpdate=a}function as(t,a,r,n){var i=t.updateQueue;va=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,u=c.next;c.next=null,l===null?s=u:l.next=u,l=c;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==l&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=c))}if(s!==null){var d=i.baseState;l=0,h=u=c=null,o=s;do{var x=o.lane,S=o.eventTime;if((n&x)===x){h!==null&&(h=h.next={eventTime:S,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var j=t,b=o;switch(x=a,S=r,b.tag){case 1:if(j=b.payload,typeof j=="function"){d=j.call(S,d,x);break e}d=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=b.payload,x=typeof j=="function"?j.call(S,d,x):j,x==null)break e;d=Ne({},d,x);break e;case 2:va=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,x=i.effects,x===null?i.effects=[o]:x.push(o))}else S={eventTime:S,lane:x,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=S,c=d):h=h.next=S,l|=x;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;x=o,o=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);if(h===null&&(c=d),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=h,a=i.shared.interleaved,a!==null){i=a;do l|=i.lane,i=i.next;while(i!==a)}else s===null&&(i.shared.lanes=0);ar|=l,t.lanes=l,t.memoizedState=d}}function Au(t,a,r){if(t=a.effects,a.effects=null,t!==null)for(a=0;a<t.length;a++){var n=t[a],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(D(191,i));i.call(n)}}}var Hn={},Jt=Da(Hn),Pn=Da(Hn),Nn=Da(Hn);function Wa(t){if(t===Hn)throw Error(D(174));return t}function Ko(t,a){switch(Se(Nn,a),Se(Pn,t),Se(Jt,Hn),t=a.nodeType,t){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:ql(null,"");break;default:t=t===8?a.parentNode:a,a=t.namespaceURI||null,t=t.tagName,a=ql(a,t)}Ae(Jt),Se(Jt,a)}function Ir(){Ae(Jt),Ae(Pn),Ae(Nn)}function Qp(t){Wa(Nn.current);var a=Wa(Jt.current),r=ql(a,t.type);a!==r&&(Se(Pn,t),Se(Jt,r))}function Yo(t){Pn.current===t&&(Ae(Jt),Ae(Pn))}var Te=Da(0);function rs(t){for(var a=t;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var nl=[];function Xo(){for(var t=0;t<nl.length;t++)nl[t]._workInProgressVersionPrimary=null;nl.length=0}var Ti=ma.ReactCurrentDispatcher,il=ma.ReactCurrentBatchConfig,tr=0,Pe=null,ze=null,Ge=null,ns=!1,fn=!1,kn=0,Qx=0;function Ye(){throw Error(D(321))}function Zo(t,a){if(a===null)return!1;for(var r=0;r<a.length&&r<t.length;r++)if(!Bt(t[r],a[r]))return!1;return!0}function ec(t,a,r,n,i,s){if(tr=s,Pe=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Ti.current=t===null||t.memoizedState===null?Yx:Xx,t=r(n,i),fn){s=0;do{if(fn=!1,kn=0,25<=s)throw Error(D(301));s+=1,Ge=ze=null,a.updateQueue=null,Ti.current=Zx,t=r(n,i)}while(fn)}if(Ti.current=is,a=ze!==null&&ze.next!==null,tr=0,Ge=ze=Pe=null,ns=!1,a)throw Error(D(300));return t}function tc(){var t=kn!==0;return kn=0,t}function $t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Pe.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function Mt(){if(ze===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var a=Ge===null?Pe.memoizedState:Ge.next;if(a!==null)Ge=a,ze=t;else{if(t===null)throw Error(D(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ge===null?Pe.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function qn(t,a){return typeof a=="function"?a(t):a}function sl(t){var a=Mt(),r=a.queue;if(r===null)throw Error(D(311));r.lastRenderedReducer=t;var n=ze,i=n.baseQueue,s=r.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}n.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,n=n.baseState;var o=l=null,c=null,u=s;do{var h=u.lane;if((tr&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:t(n,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=d,l=n):c=c.next=d,Pe.lanes|=h,ar|=h}u=u.next}while(u!==null&&u!==s);c===null?l=n:c.next=o,Bt(n,a.memoizedState)||(ut=!0),a.memoizedState=n,a.baseState=l,a.baseQueue=c,r.lastRenderedState=n}if(t=r.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,ar|=s,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[a.memoizedState,r.dispatch]}function ll(t){var a=Mt(),r=a.queue;if(r===null)throw Error(D(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,s=a.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do s=t(s,l.action),l=l.next;while(l!==i);Bt(s,a.memoizedState)||(ut=!0),a.memoizedState=s,a.baseQueue===null&&(a.baseState=s),r.lastRenderedState=s}return[s,n]}function Jp(){}function Wp(t,a){var r=Pe,n=Mt(),i=a(),s=!Bt(n.memoizedState,i);if(s&&(n.memoizedState=i,ut=!0),n=n.queue,ac(Xp.bind(null,r,n,t),[t]),n.getSnapshot!==a||s||Ge!==null&&Ge.memoizedState.tag&1){if(r.flags|=2048,_n(9,Yp.bind(null,r,n,i,a),void 0,null),He===null)throw Error(D(349));tr&30||Kp(r,a,i)}return i}function Kp(t,a,r){t.flags|=16384,t={getSnapshot:a,value:r},a=Pe.updateQueue,a===null?(a={lastEffect:null,stores:null},Pe.updateQueue=a,a.stores=[t]):(r=a.stores,r===null?a.stores=[t]:r.push(t))}function Yp(t,a,r,n){a.value=r,a.getSnapshot=n,Zp(a)&&em(t)}function Xp(t,a,r){return r(function(){Zp(a)&&em(t)})}function Zp(t){var a=t.getSnapshot;t=t.value;try{var r=a();return!Bt(t,r)}catch{return!0}}function em(t){var a=da(t,1);a!==null&&Ft(a,t,1,-1)}function Lu(t){var a=$t();return typeof t=="function"&&(t=t()),a.memoizedState=a.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:t},a.queue=t,t=t.dispatch=Kx.bind(null,Pe,t),[a.memoizedState,t]}function _n(t,a,r,n){return t={tag:t,create:a,destroy:r,deps:n,next:null},a=Pe.updateQueue,a===null?(a={lastEffect:null,stores:null},Pe.updateQueue=a,a.lastEffect=t.next=t):(r=a.lastEffect,r===null?a.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,a.lastEffect=t)),t}function tm(){return Mt().memoizedState}function Pi(t,a,r,n){var i=$t();Pe.flags|=t,i.memoizedState=_n(1|a,r,void 0,n===void 0?null:n)}function ys(t,a,r,n){var i=Mt();n=n===void 0?null:n;var s=void 0;if(ze!==null){var l=ze.memoizedState;if(s=l.destroy,n!==null&&Zo(n,l.deps)){i.memoizedState=_n(a,r,s,n);return}}Pe.flags|=t,i.memoizedState=_n(1|a,r,s,n)}function Ru(t,a){return Pi(8390656,8,t,a)}function ac(t,a){return ys(2048,8,t,a)}function am(t,a){return ys(4,2,t,a)}function rm(t,a){return ys(4,4,t,a)}function nm(t,a){if(typeof a=="function")return t=t(),a(t),function(){a(null)};if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function im(t,a,r){return r=r!=null?r.concat([t]):null,ys(4,4,nm.bind(null,a,t),r)}function rc(){}function sm(t,a){var r=Mt();a=a===void 0?null:a;var n=r.memoizedState;return n!==null&&a!==null&&Zo(a,n[1])?n[0]:(r.memoizedState=[t,a],t)}function lm(t,a){var r=Mt();a=a===void 0?null:a;var n=r.memoizedState;return n!==null&&a!==null&&Zo(a,n[1])?n[0]:(t=t(),r.memoizedState=[t,a],t)}function om(t,a,r){return tr&21?(Bt(r,a)||(r=mp(),Pe.lanes|=r,ar|=r,t.baseState=!0),a):(t.baseState&&(t.baseState=!1,ut=!0),t.memoizedState=r)}function Jx(t,a){var r=ve;ve=r!==0&&4>r?r:4,t(!0);var n=il.transition;il.transition={};try{t(!1),a()}finally{ve=r,il.transition=n}}function cm(){return Mt().memoizedState}function Wx(t,a,r){var n=ka(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},um(t))dm(a,r);else if(r=$p(t,a,r,n),r!==null){var i=st();Ft(r,t,n,i),pm(r,a,n)}}function Kx(t,a,r){var n=ka(t),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(um(t))dm(a,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=a.lastRenderedReducer,s!==null))try{var l=a.lastRenderedState,o=s(l,r);if(i.hasEagerState=!0,i.eagerState=o,Bt(o,l)){var c=a.interleaved;c===null?(i.next=i,Jo(a)):(i.next=c.next,c.next=i),a.interleaved=i;return}}catch{}finally{}r=$p(t,a,i,n),r!==null&&(i=st(),Ft(r,t,n,i),pm(r,a,n))}}function um(t){var a=t.alternate;return t===Pe||a!==null&&a===Pe}function dm(t,a){fn=ns=!0;var r=t.pending;r===null?a.next=a:(a.next=r.next,r.next=a),t.pending=a}function pm(t,a,r){if(r&4194240){var n=a.lanes;n&=t.pendingLanes,r|=n,a.lanes=r,qo(t,r)}}var is={readContext:Rt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},Yx={readContext:Rt,useCallback:function(t,a){return $t().memoizedState=[t,a===void 0?null:a],t},useContext:Rt,useEffect:Ru,useImperativeHandle:function(t,a,r){return r=r!=null?r.concat([t]):null,Pi(4194308,4,nm.bind(null,a,t),r)},useLayoutEffect:function(t,a){return Pi(4194308,4,t,a)},useInsertionEffect:function(t,a){return Pi(4,2,t,a)},useMemo:function(t,a){var r=$t();return a=a===void 0?null:a,t=t(),r.memoizedState=[t,a],t},useReducer:function(t,a,r){var n=$t();return a=r!==void 0?r(a):a,n.memoizedState=n.baseState=a,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},n.queue=t,t=t.dispatch=Wx.bind(null,Pe,t),[n.memoizedState,t]},useRef:function(t){var a=$t();return t={current:t},a.memoizedState=t},useState:Lu,useDebugValue:rc,useDeferredValue:function(t){return $t().memoizedState=t},useTransition:function(){var t=Lu(!1),a=t[0];return t=Jx.bind(null,t[1]),$t().memoizedState=t,[a,t]},useMutableSource:function(){},useSyncExternalStore:function(t,a,r){var n=Pe,i=$t();if(Re){if(r===void 0)throw Error(D(407));r=r()}else{if(r=a(),He===null)throw Error(D(349));tr&30||Kp(n,a,r)}i.memoizedState=r;var s={value:r,getSnapshot:a};return i.queue=s,Ru(Xp.bind(null,n,s,t),[t]),n.flags|=2048,_n(9,Yp.bind(null,n,s,r,a),void 0,null),r},useId:function(){var t=$t(),a=He.identifierPrefix;if(Re){var r=la,n=sa;r=(n&~(1<<32-Dt(n)-1)).toString(32)+r,a=":"+a+"R"+r,r=kn++,0<r&&(a+="H"+r.toString(32)),a+=":"}else r=Qx++,a=":"+a+"r"+r.toString(32)+":";return t.memoizedState=a},unstable_isNewReconciler:!1},Xx={readContext:Rt,useCallback:sm,useContext:Rt,useEffect:ac,useImperativeHandle:im,useInsertionEffect:am,useLayoutEffect:rm,useMemo:lm,useReducer:sl,useRef:tm,useState:function(){return sl(qn)},useDebugValue:rc,useDeferredValue:function(t){var a=Mt();return om(a,ze.memoizedState,t)},useTransition:function(){var t=sl(qn)[0],a=Mt().memoizedState;return[t,a]},useMutableSource:Jp,useSyncExternalStore:Wp,useId:cm,unstable_isNewReconciler:!1},Zx={readContext:Rt,useCallback:sm,useContext:Rt,useEffect:ac,useImperativeHandle:im,useInsertionEffect:am,useLayoutEffect:rm,useMemo:lm,useReducer:ll,useRef:tm,useState:function(){return ll(qn)},useDebugValue:rc,useDeferredValue:function(t){var a=Mt();return ze===null?a.memoizedState=t:om(a,ze.memoizedState,t)},useTransition:function(){var t=ll(qn)[0],a=Mt().memoizedState;return[t,a]},useMutableSource:Jp,useSyncExternalStore:Wp,useId:cm,unstable_isNewReconciler:!1};function _t(t,a){if(t&&t.defaultProps){a=Ne({},a),t=t.defaultProps;for(var r in t)a[r]===void 0&&(a[r]=t[r]);return a}return a}function to(t,a,r,n){a=t.memoizedState,r=r(n,a),r=r==null?a:Ne({},a,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Ss={isMounted:function(t){return(t=t._reactInternals)?ir(t)===t:!1},enqueueSetState:function(t,a,r){t=t._reactInternals;var n=st(),i=ka(t),s=oa(n,i);s.payload=a,r!=null&&(s.callback=r),a=Pa(t,s,i),a!==null&&(Ft(a,t,i,n),Mi(a,t,i))},enqueueReplaceState:function(t,a,r){t=t._reactInternals;var n=st(),i=ka(t),s=oa(n,i);s.tag=1,s.payload=a,r!=null&&(s.callback=r),a=Pa(t,s,i),a!==null&&(Ft(a,t,i,n),Mi(a,t,i))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var r=st(),n=ka(t),i=oa(r,n);i.tag=2,a!=null&&(i.callback=a),a=Pa(t,i,n),a!==null&&(Ft(a,t,n,r),Mi(a,t,n))}};function Mu(t,a,r,n,i,s,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,s,l):a.prototype&&a.prototype.isPureReactComponent?!Ln(r,n)||!Ln(i,s):!0}function mm(t,a,r){var n=!1,i=Oa,s=a.contextType;return typeof s=="object"&&s!==null?s=Rt(s):(i=pt(a)?Za:tt.current,n=a.contextTypes,s=(n=n!=null)?qr(t,i):Oa),a=new a(r,s),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ss,t.stateNode=a,a._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),a}function Tu(t,a,r,n){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,n),a.state!==t&&Ss.enqueueReplaceState(a,a.state,null)}function ao(t,a,r,n){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs={},Wo(t);var s=a.contextType;typeof s=="object"&&s!==null?i.context=Rt(s):(s=pt(a)?Za:tt.current,i.context=qr(t,s)),i.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(to(t,a,s,r),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(a=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),a!==i.state&&Ss.enqueueReplaceState(i,i.state,null),as(t,r,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Dr(t,a){try{var r="",n=a;do r+=Lf(n),n=n.return;while(n);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:a,stack:i,digest:null}}function ol(t,a,r){return{value:t,source:null,stack:r??null,digest:a??null}}function ro(t,a){try{console.error(a.value)}catch(r){setTimeout(function(){throw r})}}var eg=typeof WeakMap=="function"?WeakMap:Map;function hm(t,a,r){r=oa(-1,r),r.tag=3,r.payload={element:null};var n=a.value;return r.callback=function(){ls||(ls=!0,ho=n),ro(t,a)},r}function fm(t,a,r){r=oa(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;r.payload=function(){return n(i)},r.callback=function(){ro(t,a)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){ro(t,a),typeof n!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var l=a.stack;this.componentDidCatch(a.value,{componentStack:l!==null?l:""})}),r}function Pu(t,a,r){var n=t.pingCache;if(n===null){n=t.pingCache=new eg;var i=new Set;n.set(a,i)}else i=n.get(a),i===void 0&&(i=new Set,n.set(a,i));i.has(r)||(i.add(r),t=hg.bind(null,t,a,r),a.then(t,t))}function Nu(t){do{var a;if((a=t.tag===13)&&(a=t.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return t;t=t.return}while(t!==null);return null}function ku(t,a,r,n,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===a?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(a=oa(-1,1),a.tag=2,Pa(r,a,1))),r.lanes|=1),t)}var tg=ma.ReactCurrentOwner,ut=!1;function nt(t,a,r,n){a.child=t===null?Hp(a,null,r,n):Or(a,t.child,r,n)}function qu(t,a,r,n,i){r=r.render;var s=a.ref;return Tr(a,i),n=ec(t,a,r,n,s,i),r=tc(),t!==null&&!ut?(a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~i,pa(t,a,i)):(Re&&r&&Uo(a),a.flags|=1,nt(t,a,n,i),a.child)}function _u(t,a,r,n,i){if(t===null){var s=r.type;return typeof s=="function"&&!dc(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(a.tag=15,a.type=s,xm(t,a,s,n,i)):(t=_i(r.type,null,n,a,a.mode,i),t.ref=a.ref,t.return=a,a.child=t)}if(s=t.child,!(t.lanes&i)){var l=s.memoizedProps;if(r=r.compare,r=r!==null?r:Ln,r(l,n)&&t.ref===a.ref)return pa(t,a,i)}return a.flags|=1,t=qa(s,n),t.ref=a.ref,t.return=a,a.child=t}function xm(t,a,r,n,i){if(t!==null){var s=t.memoizedProps;if(Ln(s,n)&&t.ref===a.ref)if(ut=!1,a.pendingProps=n=s,(t.lanes&i)!==0)t.flags&131072&&(ut=!0);else return a.lanes=t.lanes,pa(t,a,i)}return no(t,a,r,n,i)}function gm(t,a,r){var n=a.pendingProps,i=n.children,s=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(a.mode&1))a.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(Cr,ft),ft|=r;else{if(!(r&1073741824))return t=s!==null?s.baseLanes|r:r,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:t,cachePool:null,transitions:null},a.updateQueue=null,Se(Cr,ft),ft|=t,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,Se(Cr,ft),ft|=n}else s!==null?(n=s.baseLanes|r,a.memoizedState=null):n=r,Se(Cr,ft),ft|=n;return nt(t,a,i,r),a.child}function jm(t,a){var r=a.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(a.flags|=512,a.flags|=2097152)}function no(t,a,r,n,i){var s=pt(r)?Za:tt.current;return s=qr(a,s),Tr(a,i),r=ec(t,a,r,n,s,i),n=tc(),t!==null&&!ut?(a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~i,pa(t,a,i)):(Re&&n&&Uo(a),a.flags|=1,nt(t,a,r,i),a.child)}function Ou(t,a,r,n,i){if(pt(r)){var s=!0;Yi(a)}else s=!1;if(Tr(a,i),a.stateNode===null)Ni(t,a),mm(a,r,n),ao(a,r,n,i),n=!0;else if(t===null){var l=a.stateNode,o=a.memoizedProps;l.props=o;var c=l.context,u=r.contextType;typeof u=="object"&&u!==null?u=Rt(u):(u=pt(r)?Za:tt.current,u=qr(a,u));var h=r.getDerivedStateFromProps,d=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==n||c!==u)&&Tu(a,l,n,u),va=!1;var x=a.memoizedState;l.state=x,as(a,n,l,i),c=a.memoizedState,o!==n||x!==c||dt.current||va?(typeof h=="function"&&(to(a,r,h,n),c=a.memoizedState),(o=va||Mu(a,r,o,n,x,c,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(a.flags|=4194308)):(typeof l.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=c),l.props=n,l.state=c,l.context=u,n=o):(typeof l.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{l=a.stateNode,Vp(t,a),o=a.memoizedProps,u=a.type===a.elementType?o:_t(a.type,o),l.props=u,d=a.pendingProps,x=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=Rt(c):(c=pt(r)?Za:tt.current,c=qr(a,c));var S=r.getDerivedStateFromProps;(h=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==d||x!==c)&&Tu(a,l,n,c),va=!1,x=a.memoizedState,l.state=x,as(a,n,l,i);var j=a.memoizedState;o!==d||x!==j||dt.current||va?(typeof S=="function"&&(to(a,r,S,n),j=a.memoizedState),(u=va||Mu(a,r,u,n,x,j,c)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,j,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,j,c)),typeof l.componentDidUpdate=="function"&&(a.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===t.memoizedProps&&x===t.memoizedState||(a.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&x===t.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=j),l.props=n,l.state=j,l.context=c,n=u):(typeof l.componentDidUpdate!="function"||o===t.memoizedProps&&x===t.memoizedState||(a.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&x===t.memoizedState||(a.flags|=1024),n=!1)}return io(t,a,r,n,s,i)}function io(t,a,r,n,i,s){jm(t,a);var l=(a.flags&128)!==0;if(!n&&!l)return i&&yu(a,r,!1),pa(t,a,s);n=a.stateNode,tg.current=a;var o=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return a.flags|=1,t!==null&&l?(a.child=Or(a,t.child,null,s),a.child=Or(a,null,o,s)):nt(t,a,o,s),a.memoizedState=n.state,i&&yu(a,r,!0),a.child}function vm(t){var a=t.stateNode;a.pendingContext?bu(t,a.pendingContext,a.pendingContext!==a.context):a.context&&bu(t,a.context,!1),Ko(t,a.containerInfo)}function Iu(t,a,r,n,i){return _r(),Ho(i),a.flags|=256,nt(t,a,r,n),a.child}var so={dehydrated:null,treeContext:null,retryLane:0};function lo(t){return{baseLanes:t,cachePool:null,transitions:null}}function bm(t,a,r){var n=a.pendingProps,i=Te.current,s=!1,l=(a.flags&128)!==0,o;if((o=l)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!==0),o?(s=!0,a.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Se(Te,i&1),t===null)return Zl(a),t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(a.mode&1?t.data==="$!"?a.lanes=8:a.lanes=1073741824:a.lanes=1,null):(l=n.children,t=n.fallback,s?(n=a.mode,s=a.child,l={mode:"hidden",children:l},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=ws(l,n,0,null),t=Xa(t,n,r,null),s.return=a,t.return=a,s.sibling=t,a.child=s,a.child.memoizedState=lo(r),a.memoizedState=so,t):nc(a,l));if(i=t.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return ag(t,a,l,n,o,i,r);if(s){s=n.fallback,l=a.mode,i=t.child,o=i.sibling;var c={mode:"hidden",children:n.children};return!(l&1)&&a.child!==i?(n=a.child,n.childLanes=0,n.pendingProps=c,a.deletions=null):(n=qa(i,c),n.subtreeFlags=i.subtreeFlags&14680064),o!==null?s=qa(o,s):(s=Xa(s,l,r,null),s.flags|=2),s.return=a,n.return=a,n.sibling=s,a.child=n,n=s,s=a.child,l=t.child.memoizedState,l=l===null?lo(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=t.childLanes&~r,a.memoizedState=so,n}return s=t.child,t=s.sibling,n=qa(s,{mode:"visible",children:n.children}),!(a.mode&1)&&(n.lanes=r),n.return=a,n.sibling=null,t!==null&&(r=a.deletions,r===null?(a.deletions=[t],a.flags|=16):r.push(t)),a.child=n,a.memoizedState=null,n}function nc(t,a){return a=ws({mode:"visible",children:a},t.mode,0,null),a.return=t,t.child=a}function fi(t,a,r,n){return n!==null&&Ho(n),Or(a,t.child,null,r),t=nc(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function ag(t,a,r,n,i,s,l){if(r)return a.flags&256?(a.flags&=-257,n=ol(Error(D(422))),fi(t,a,l,n)):a.memoizedState!==null?(a.child=t.child,a.flags|=128,null):(s=n.fallback,i=a.mode,n=ws({mode:"visible",children:n.children},i,0,null),s=Xa(s,i,l,null),s.flags|=2,n.return=a,s.return=a,n.sibling=s,a.child=n,a.mode&1&&Or(a,t.child,null,l),a.child.memoizedState=lo(l),a.memoizedState=so,s);if(!(a.mode&1))return fi(t,a,l,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var o=n.dgst;return n=o,s=Error(D(419)),n=ol(s,n,void 0),fi(t,a,l,n)}if(o=(l&t.childLanes)!==0,ut||o){if(n=He,n!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,da(t,i),Ft(n,t,i,-1))}return uc(),n=ol(Error(D(421))),fi(t,a,l,n)}return i.data==="$?"?(a.flags|=128,a.child=t.child,a=fg.bind(null,t),i._reactRetry=a,null):(t=s.treeContext,gt=Ta(i.nextSibling),jt=a,Re=!0,It=null,t!==null&&(Ct[wt++]=sa,Ct[wt++]=la,Ct[wt++]=er,sa=t.id,la=t.overflow,er=a),a=nc(a,n.children),a.flags|=4096,a)}function Du(t,a,r){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a),eo(t.return,a,r)}function cl(t,a,r,n,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(s.isBackwards=a,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=i)}function ym(t,a,r){var n=a.pendingProps,i=n.revealOrder,s=n.tail;if(nt(t,a,n.children,r),n=Te.current,n&2)n=n&1|2,a.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Du(t,r,a);else if(t.tag===19)Du(t,r,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break e;for(;t.sibling===null;){if(t.return===null||t.return===a)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(Se(Te,n),!(a.mode&1))a.memoizedState=null;else switch(i){case"forwards":for(r=a.child,i=null;r!==null;)t=r.alternate,t!==null&&rs(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=a.child,a.child=null):(i=r.sibling,r.sibling=null),cl(a,!1,i,r,s);break;case"backwards":for(r=null,i=a.child,a.child=null;i!==null;){if(t=i.alternate,t!==null&&rs(t)===null){a.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}cl(a,!0,r,null,s);break;case"together":cl(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Ni(t,a){!(a.mode&1)&&t!==null&&(t.alternate=null,a.alternate=null,a.flags|=2)}function pa(t,a,r){if(t!==null&&(a.dependencies=t.dependencies),ar|=a.lanes,!(r&a.childLanes))return null;if(t!==null&&a.child!==t.child)throw Error(D(153));if(a.child!==null){for(t=a.child,r=qa(t,t.pendingProps),a.child=r,r.return=a;t.sibling!==null;)t=t.sibling,r=r.sibling=qa(t,t.pendingProps),r.return=a;r.sibling=null}return a.child}function rg(t,a,r){switch(a.tag){case 3:vm(a),_r();break;case 5:Qp(a);break;case 1:pt(a.type)&&Yi(a);break;case 4:Ko(a,a.stateNode.containerInfo);break;case 10:var n=a.type._context,i=a.memoizedProps.value;Se(es,n._currentValue),n._currentValue=i;break;case 13:if(n=a.memoizedState,n!==null)return n.dehydrated!==null?(Se(Te,Te.current&1),a.flags|=128,null):r&a.child.childLanes?bm(t,a,r):(Se(Te,Te.current&1),t=pa(t,a,r),t!==null?t.sibling:null);Se(Te,Te.current&1);break;case 19:if(n=(r&a.childLanes)!==0,t.flags&128){if(n)return ym(t,a,r);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Te,Te.current),n)break;return null;case 22:case 23:return a.lanes=0,gm(t,a,r)}return pa(t,a,r)}var Sm,oo,Em,Cm;Sm=function(t,a){for(var r=a.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break;for(;r.sibling===null;){if(r.return===null||r.return===a)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};oo=function(){};Em=function(t,a,r,n){var i=t.memoizedProps;if(i!==n){t=a.stateNode,Wa(Jt.current);var s=null;switch(r){case"input":i=Tl(t,i),n=Tl(t,n),s=[];break;case"select":i=Ne({},i,{value:void 0}),n=Ne({},n,{value:void 0}),s=[];break;case"textarea":i=kl(t,i),n=kl(t,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Wi)}_l(r,n);var l;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(l in o)o.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bn.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in n){var c=n[u];if(o=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(s||(s=[]),s.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ce("scroll",t),s||o===c||(s=[])):(s=s||[]).push(u,c))}r&&(s=s||[]).push("style",r);var u=s;(a.updateQueue=u)&&(a.flags|=4)}};Cm=function(t,a,r,n){r!==n&&(a.flags|=4)};function Xr(t,a){if(!Re)switch(t.tailMode){case"hidden":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Xe(t){var a=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(a)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=r,a}function ng(t,a,r){var n=a.pendingProps;switch(Go(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(a),null;case 1:return pt(a.type)&&Ki(),Xe(a),null;case 3:return n=a.stateNode,Ir(),Ae(dt),Ae(tt),Xo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(mi(a)?a.flags|=4:t===null||t.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,It!==null&&(go(It),It=null))),oo(t,a),Xe(a),null;case 5:Yo(a);var i=Wa(Nn.current);if(r=a.type,t!==null&&a.stateNode!=null)Em(t,a,r,n,i),t.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!n){if(a.stateNode===null)throw Error(D(166));return Xe(a),null}if(t=Wa(Jt.current),mi(a)){n=a.stateNode,r=a.type;var s=a.memoizedProps;switch(n[Vt]=a,n[Tn]=s,t=(a.mode&1)!==0,r){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(i=0;i<ln.length;i++)Ce(ln[i],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Qc(n,s),Ce("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},Ce("invalid",n);break;case"textarea":Wc(n,s),Ce("invalid",n)}_l(r,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var o=s[l];l==="children"?typeof o=="string"?n.textContent!==o&&(s.suppressHydrationWarning!==!0&&pi(n.textContent,o,t),i=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&pi(n.textContent,o,t),i=["children",""+o]):bn.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&Ce("scroll",n)}switch(r){case"input":ni(n),Jc(n,s,!0);break;case"textarea":ni(n),Kc(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Wi)}n=i,a.updateQueue=n,n!==null&&(a.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xd(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=l.createElement(r,{is:n.is}):(t=l.createElement(r),r==="select"&&(l=t,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):t=l.createElementNS(t,r),t[Vt]=a,t[Tn]=n,Sm(t,a,!1,!1),a.stateNode=t;e:{switch(l=Ol(r,n),r){case"dialog":Ce("cancel",t),Ce("close",t),i=n;break;case"iframe":case"object":case"embed":Ce("load",t),i=n;break;case"video":case"audio":for(i=0;i<ln.length;i++)Ce(ln[i],t);i=n;break;case"source":Ce("error",t),i=n;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),i=n;break;case"details":Ce("toggle",t),i=n;break;case"input":Qc(t,n),i=Tl(t,n),Ce("invalid",t);break;case"option":i=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=Ne({},n,{value:void 0}),Ce("invalid",t);break;case"textarea":Wc(t,n),i=kl(t,n),Ce("invalid",t);break;default:i=n}_l(r,i),o=i;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?tp(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Zd(t,c)):s==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&yn(t,c):typeof c=="number"&&yn(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bn.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Ce("scroll",t):c!=null&&Ro(t,s,c,l))}switch(r){case"input":ni(t),Jc(t,n,!1);break;case"textarea":ni(t),Kc(t);break;case"option":n.value!=null&&t.setAttribute("value",""+_a(n.value));break;case"select":t.multiple=!!n.multiple,s=n.value,s!=null?Ar(t,!!n.multiple,s,!1):n.defaultValue!=null&&Ar(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Wi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Xe(a),null;case 6:if(t&&a.stateNode!=null)Cm(t,a,t.memoizedProps,n);else{if(typeof n!="string"&&a.stateNode===null)throw Error(D(166));if(r=Wa(Nn.current),Wa(Jt.current),mi(a)){if(n=a.stateNode,r=a.memoizedProps,n[Vt]=a,(s=n.nodeValue!==r)&&(t=jt,t!==null))switch(t.tag){case 3:pi(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pi(n.nodeValue,r,(t.mode&1)!==0)}s&&(a.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Vt]=a,a.stateNode=n}return Xe(a),null;case 13:if(Ae(Te),n=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&gt!==null&&a.mode&1&&!(a.flags&128))Up(),_r(),a.flags|=98560,s=!1;else if(s=mi(a),n!==null&&n.dehydrated!==null){if(t===null){if(!s)throw Error(D(318));if(s=a.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[Vt]=a}else _r(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;Xe(a),s=!1}else It!==null&&(go(It),It=null),s=!0;if(!s)return a.flags&65536?a:null}return a.flags&128?(a.lanes=r,a):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(a.child.flags|=8192,a.mode&1&&(t===null||Te.current&1?Be===0&&(Be=3):uc())),a.updateQueue!==null&&(a.flags|=4),Xe(a),null);case 4:return Ir(),oo(t,a),t===null&&Rn(a.stateNode.containerInfo),Xe(a),null;case 10:return Qo(a.type._context),Xe(a),null;case 17:return pt(a.type)&&Ki(),Xe(a),null;case 19:if(Ae(Te),s=a.memoizedState,s===null)return Xe(a),null;if(n=(a.flags&128)!==0,l=s.rendering,l===null)if(n)Xr(s,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=a.child;t!==null;){if(l=rs(t),l!==null){for(a.flags|=128,Xr(s,!1),n=l.updateQueue,n!==null&&(a.updateQueue=n,a.flags|=4),a.subtreeFlags=0,n=r,r=a.child;r!==null;)s=r,t=n,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,t=l.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return Se(Te,Te.current&1|2),a.child}t=t.sibling}s.tail!==null&&Oe()>Fr&&(a.flags|=128,n=!0,Xr(s,!1),a.lanes=4194304)}else{if(!n)if(t=rs(l),t!==null){if(a.flags|=128,n=!0,r=t.updateQueue,r!==null&&(a.updateQueue=r,a.flags|=4),Xr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Re)return Xe(a),null}else 2*Oe()-s.renderingStartTime>Fr&&r!==1073741824&&(a.flags|=128,n=!0,Xr(s,!1),a.lanes=4194304);s.isBackwards?(l.sibling=a.child,a.child=l):(r=s.last,r!==null?r.sibling=l:a.child=l,s.last=l)}return s.tail!==null?(a=s.tail,s.rendering=a,s.tail=a.sibling,s.renderingStartTime=Oe(),a.sibling=null,r=Te.current,Se(Te,n?r&1|2:r&1),a):(Xe(a),null);case 22:case 23:return cc(),n=a.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(a.flags|=8192),n&&a.mode&1?ft&1073741824&&(Xe(a),a.subtreeFlags&6&&(a.flags|=8192)):Xe(a),null;case 24:return null;case 25:return null}throw Error(D(156,a.tag))}function ig(t,a){switch(Go(a),a.tag){case 1:return pt(a.type)&&Ki(),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return Ir(),Ae(dt),Ae(tt),Xo(),t=a.flags,t&65536&&!(t&128)?(a.flags=t&-65537|128,a):null;case 5:return Yo(a),null;case 13:if(Ae(Te),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(D(340));_r()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return Ae(Te),null;case 4:return Ir(),null;case 10:return Qo(a.type._context),null;case 22:case 23:return cc(),null;case 24:return null;default:return null}}var xi=!1,et=!1,sg=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Er(t,a){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){qe(t,a,n)}else r.current=null}function co(t,a,r){try{r()}catch(n){qe(t,a,n)}}var Fu=!1;function lg(t,a){if(Vl=Vi,t=Mp(),Bo(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var l=0,o=-1,c=-1,u=0,h=0,d=t,x=null;t:for(;;){for(var S;d!==r||i!==0&&d.nodeType!==3||(o=l+i),d!==s||n!==0&&d.nodeType!==3||(c=l+n),d.nodeType===3&&(l+=d.nodeValue.length),(S=d.firstChild)!==null;)x=d,d=S;for(;;){if(d===t)break t;if(x===r&&++u===i&&(o=l),x===s&&++h===n&&(c=l),(S=d.nextSibling)!==null)break;d=x,x=d.parentNode}d=S}r=o===-1||c===-1?null:{start:o,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ql={focusedElem:t,selectionRange:r},Vi=!1,Q=a;Q!==null;)if(a=Q,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,Q=t;else for(;Q!==null;){a=Q;try{var j=a.alternate;if(a.flags&1024)switch(a.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var b=j.memoizedProps,E=j.memoizedState,f=a.stateNode,p=f.getSnapshotBeforeUpdate(a.elementType===a.type?b:_t(a.type,b),E);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=a.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(R){qe(a,a.return,R)}if(t=a.sibling,t!==null){t.return=a.return,Q=t;break}Q=a.return}return j=Fu,Fu=!1,j}function xn(t,a,r){var n=a.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&co(a,r,s)}i=i.next}while(i!==n)}}function Es(t,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==a)}}function uo(t){var a=t.ref;if(a!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof a=="function"?a(t):a.current=t}}function wm(t){var a=t.alternate;a!==null&&(t.alternate=null,wm(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&(delete a[Vt],delete a[Tn],delete a[Kl],delete a[Gx],delete a[Hx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Am(t){return t.tag===5||t.tag===3||t.tag===4}function zu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Am(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function po(t,a,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,a?r.nodeType===8?r.parentNode.insertBefore(t,a):r.insertBefore(t,a):(r.nodeType===8?(a=r.parentNode,a.insertBefore(t,r)):(a=r,a.appendChild(t)),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=Wi));else if(n!==4&&(t=t.child,t!==null))for(po(t,a,r),t=t.sibling;t!==null;)po(t,a,r),t=t.sibling}function mo(t,a,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,a?r.insertBefore(t,a):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(mo(t,a,r),t=t.sibling;t!==null;)mo(t,a,r),t=t.sibling}var Ve=null,Ot=!1;function fa(t,a,r){for(r=r.child;r!==null;)Lm(t,a,r),r=r.sibling}function Lm(t,a,r){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(fs,r)}catch{}switch(r.tag){case 5:et||Er(r,a);case 6:var n=Ve,i=Ot;Ve=null,fa(t,a,r),Ve=n,Ot=i,Ve!==null&&(Ot?(t=Ve,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Ve.removeChild(r.stateNode));break;case 18:Ve!==null&&(Ot?(t=Ve,r=r.stateNode,t.nodeType===8?al(t.parentNode,r):t.nodeType===1&&al(t,r),wn(t)):al(Ve,r.stateNode));break;case 4:n=Ve,i=Ot,Ve=r.stateNode.containerInfo,Ot=!0,fa(t,a,r),Ve=n,Ot=i;break;case 0:case 11:case 14:case 15:if(!et&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&co(r,a,l),i=i.next}while(i!==n)}fa(t,a,r);break;case 1:if(!et&&(Er(r,a),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(o){qe(r,a,o)}fa(t,a,r);break;case 21:fa(t,a,r);break;case 22:r.mode&1?(et=(n=et)||r.memoizedState!==null,fa(t,a,r),et=n):fa(t,a,r);break;default:fa(t,a,r)}}function Bu(t){var a=t.updateQueue;if(a!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new sg),a.forEach(function(n){var i=xg.bind(null,t,n);r.has(n)||(r.add(n),n.then(i,i))})}}function kt(t,a){var r=a.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var s=t,l=a,o=l;e:for(;o!==null;){switch(o.tag){case 5:Ve=o.stateNode,Ot=!1;break e;case 3:Ve=o.stateNode.containerInfo,Ot=!0;break e;case 4:Ve=o.stateNode.containerInfo,Ot=!0;break e}o=o.return}if(Ve===null)throw Error(D(160));Lm(s,l,i),Ve=null,Ot=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){qe(i,a,u)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)Rm(a,t),a=a.sibling}function Rm(t,a){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kt(a,t),Gt(t),n&4){try{xn(3,t,t.return),Es(3,t)}catch(b){qe(t,t.return,b)}try{xn(5,t,t.return)}catch(b){qe(t,t.return,b)}}break;case 1:kt(a,t),Gt(t),n&512&&r!==null&&Er(r,r.return);break;case 5:if(kt(a,t),Gt(t),n&512&&r!==null&&Er(r,r.return),t.flags&32){var i=t.stateNode;try{yn(i,"")}catch(b){qe(t,t.return,b)}}if(n&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,l=r!==null?r.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Kd(i,s),Ol(o,l);var u=Ol(o,s);for(l=0;l<c.length;l+=2){var h=c[l],d=c[l+1];h==="style"?tp(i,d):h==="dangerouslySetInnerHTML"?Zd(i,d):h==="children"?yn(i,d):Ro(i,h,d,u)}switch(o){case"input":Pl(i,s);break;case"textarea":Yd(i,s);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?Ar(i,!!s.multiple,S,!1):x!==!!s.multiple&&(s.defaultValue!=null?Ar(i,!!s.multiple,s.defaultValue,!0):Ar(i,!!s.multiple,s.multiple?[]:"",!1))}i[Tn]=s}catch(b){qe(t,t.return,b)}}break;case 6:if(kt(a,t),Gt(t),n&4){if(t.stateNode===null)throw Error(D(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(b){qe(t,t.return,b)}}break;case 3:if(kt(a,t),Gt(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{wn(a.containerInfo)}catch(b){qe(t,t.return,b)}break;case 4:kt(a,t),Gt(t);break;case 13:kt(a,t),Gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(lc=Oe())),n&4&&Bu(t);break;case 22:if(h=r!==null&&r.memoizedState!==null,t.mode&1?(et=(u=et)||h,kt(a,t),et=u):kt(a,t),Gt(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(Q=t,h=t.child;h!==null;){for(d=Q=h;Q!==null;){switch(x=Q,S=x.child,x.tag){case 0:case 11:case 14:case 15:xn(4,x,x.return);break;case 1:Er(x,x.return);var j=x.stateNode;if(typeof j.componentWillUnmount=="function"){n=x,r=x.return;try{a=n,j.props=a.memoizedProps,j.state=a.memoizedState,j.componentWillUnmount()}catch(b){qe(n,r,b)}}break;case 5:Er(x,x.return);break;case 22:if(x.memoizedState!==null){Gu(d);continue}}S!==null?(S.return=x,Q=S):Gu(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,c=d.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=ep("display",l))}catch(b){qe(t,t.return,b)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(b){qe(t,t.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:kt(a,t),Gt(t),n&4&&Bu(t);break;case 21:break;default:kt(a,t),Gt(t)}}function Gt(t){var a=t.flags;if(a&2){try{e:{for(var r=t.return;r!==null;){if(Am(r)){var n=r;break e}r=r.return}throw Error(D(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(yn(i,""),n.flags&=-33);var s=zu(t);mo(t,s,i);break;case 3:case 4:var l=n.stateNode.containerInfo,o=zu(t);po(t,o,l);break;default:throw Error(D(161))}}catch(c){qe(t,t.return,c)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function og(t,a,r){Q=t,Mm(t)}function Mm(t,a,r){for(var n=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&n){var l=i.memoizedState!==null||xi;if(!l){var o=i.alternate,c=o!==null&&o.memoizedState!==null||et;o=xi;var u=et;if(xi=l,(et=c)&&!u)for(Q=i;Q!==null;)l=Q,c=l.child,l.tag===22&&l.memoizedState!==null?Hu(i):c!==null?(c.return=l,Q=c):Hu(i);for(;s!==null;)Q=s,Mm(s),s=s.sibling;Q=i,xi=o,et=u}Uu(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):Uu(t)}}function Uu(t){for(;Q!==null;){var a=Q;if(a.flags&8772){var r=a.alternate;try{if(a.flags&8772)switch(a.tag){case 0:case 11:case 15:et||Es(5,a);break;case 1:var n=a.stateNode;if(a.flags&4&&!et)if(r===null)n.componentDidMount();else{var i=a.elementType===a.type?r.memoizedProps:_t(a.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=a.updateQueue;s!==null&&Au(a,s,n);break;case 3:var l=a.updateQueue;if(l!==null){if(r=null,a.child!==null)switch(a.child.tag){case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}Au(a,l,r)}break;case 5:var o=a.stateNode;if(r===null&&a.flags&4){r=o;var c=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var u=a.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&wn(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}et||a.flags&512&&uo(a)}catch(x){qe(a,a.return,x)}}if(a===t){Q=null;break}if(r=a.sibling,r!==null){r.return=a.return,Q=r;break}Q=a.return}}function Gu(t){for(;Q!==null;){var a=Q;if(a===t){Q=null;break}var r=a.sibling;if(r!==null){r.return=a.return,Q=r;break}Q=a.return}}function Hu(t){for(;Q!==null;){var a=Q;try{switch(a.tag){case 0:case 11:case 15:var r=a.return;try{Es(4,a)}catch(c){qe(a,r,c)}break;case 1:var n=a.stateNode;if(typeof n.componentDidMount=="function"){var i=a.return;try{n.componentDidMount()}catch(c){qe(a,i,c)}}var s=a.return;try{uo(a)}catch(c){qe(a,s,c)}break;case 5:var l=a.return;try{uo(a)}catch(c){qe(a,l,c)}}}catch(c){qe(a,a.return,c)}if(a===t){Q=null;break}var o=a.sibling;if(o!==null){o.return=a.return,Q=o;break}Q=a.return}}var cg=Math.ceil,ss=ma.ReactCurrentDispatcher,ic=ma.ReactCurrentOwner,Lt=ma.ReactCurrentBatchConfig,ge=0,He=null,De=null,Qe=0,ft=0,Cr=Da(0),Be=0,On=null,ar=0,Cs=0,sc=0,gn=null,ct=null,lc=0,Fr=1/0,na=null,ls=!1,ho=null,Na=null,gi=!1,wa=null,os=0,jn=0,fo=null,ki=-1,qi=0;function st(){return ge&6?Oe():ki!==-1?ki:ki=Oe()}function ka(t){return t.mode&1?ge&2&&Qe!==0?Qe&-Qe:Vx.transition!==null?(qi===0&&(qi=mp()),qi):(t=ve,t!==0||(t=window.event,t=t===void 0?16:bp(t.type)),t):1}function Ft(t,a,r,n){if(50<jn)throw jn=0,fo=null,Error(D(185));Bn(t,r,n),(!(ge&2)||t!==He)&&(t===He&&(!(ge&2)&&(Cs|=r),Be===4&&ya(t,Qe)),mt(t,n),r===1&&ge===0&&!(a.mode&1)&&(Fr=Oe()+500,bs&&Fa()))}function mt(t,a){var r=t.callbackNode;Vf(t,a);var n=$i(t,t===He?Qe:0);if(n===0)r!==null&&Zc(r),t.callbackNode=null,t.callbackPriority=0;else if(a=n&-n,t.callbackPriority!==a){if(r!=null&&Zc(r),a===1)t.tag===0?$x($u.bind(null,t)):Fp($u.bind(null,t)),Bx(function(){!(ge&6)&&Fa()}),r=null;else{switch(hp(n)){case 1:r=ko;break;case 4:r=dp;break;case 16:r=Hi;break;case 536870912:r=pp;break;default:r=Hi}r=Im(r,Tm.bind(null,t))}t.callbackPriority=a,t.callbackNode=r}}function Tm(t,a){if(ki=-1,qi=0,ge&6)throw Error(D(327));var r=t.callbackNode;if(Pr()&&t.callbackNode!==r)return null;var n=$i(t,t===He?Qe:0);if(n===0)return null;if(n&30||n&t.expiredLanes||a)a=cs(t,n);else{a=n;var i=ge;ge|=2;var s=Nm();(He!==t||Qe!==a)&&(na=null,Fr=Oe()+500,Ya(t,a));do try{pg();break}catch(o){Pm(t,o)}while(!0);Vo(),ss.current=s,ge=i,De!==null?a=0:(He=null,Qe=0,a=Be)}if(a!==0){if(a===2&&(i=Bl(t),i!==0&&(n=i,a=xo(t,i))),a===1)throw r=On,Ya(t,0),ya(t,n),mt(t,Oe()),r;if(a===6)ya(t,n);else{if(i=t.current.alternate,!(n&30)&&!ug(i)&&(a=cs(t,n),a===2&&(s=Bl(t),s!==0&&(n=s,a=xo(t,s))),a===1))throw r=On,Ya(t,0),ya(t,n),mt(t,Oe()),r;switch(t.finishedWork=i,t.finishedLanes=n,a){case 0:case 1:throw Error(D(345));case 2:Va(t,ct,na);break;case 3:if(ya(t,n),(n&130023424)===n&&(a=lc+500-Oe(),10<a)){if($i(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){st(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Wl(Va.bind(null,t,ct,na),a);break}Va(t,ct,na);break;case 4:if(ya(t,n),(n&4194240)===n)break;for(a=t.eventTimes,i=-1;0<n;){var l=31-Dt(n);s=1<<l,l=a[l],l>i&&(i=l),n&=~s}if(n=i,n=Oe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*cg(n/1960))-n,10<n){t.timeoutHandle=Wl(Va.bind(null,t,ct,na),n);break}Va(t,ct,na);break;case 5:Va(t,ct,na);break;default:throw Error(D(329))}}}return mt(t,Oe()),t.callbackNode===r?Tm.bind(null,t):null}function xo(t,a){var r=gn;return t.current.memoizedState.isDehydrated&&(Ya(t,a).flags|=256),t=cs(t,a),t!==2&&(a=ct,ct=r,a!==null&&go(a)),t}function go(t){ct===null?ct=t:ct.push.apply(ct,t)}function ug(t){for(var a=t;;){if(a.flags&16384){var r=a.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],s=i.getSnapshot;i=i.value;try{if(!Bt(s(),i))return!1}catch{return!1}}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ya(t,a){for(a&=~sc,a&=~Cs,t.suspendedLanes|=a,t.pingedLanes&=~a,t=t.expirationTimes;0<a;){var r=31-Dt(a),n=1<<r;t[r]=-1,a&=~n}}function $u(t){if(ge&6)throw Error(D(327));Pr();var a=$i(t,0);if(!(a&1))return mt(t,Oe()),null;var r=cs(t,a);if(t.tag!==0&&r===2){var n=Bl(t);n!==0&&(a=n,r=xo(t,n))}if(r===1)throw r=On,Ya(t,0),ya(t,a),mt(t,Oe()),r;if(r===6)throw Error(D(345));return t.finishedWork=t.current.alternate,t.finishedLanes=a,Va(t,ct,na),mt(t,Oe()),null}function oc(t,a){var r=ge;ge|=1;try{return t(a)}finally{ge=r,ge===0&&(Fr=Oe()+500,bs&&Fa())}}function rr(t){wa!==null&&wa.tag===0&&!(ge&6)&&Pr();var a=ge;ge|=1;var r=Lt.transition,n=ve;try{if(Lt.transition=null,ve=1,t)return t()}finally{ve=n,Lt.transition=r,ge=a,!(ge&6)&&Fa()}}function cc(){ft=Cr.current,Ae(Cr)}function Ya(t,a){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,zx(r)),De!==null)for(r=De.return;r!==null;){var n=r;switch(Go(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ki();break;case 3:Ir(),Ae(dt),Ae(tt),Xo();break;case 5:Yo(n);break;case 4:Ir();break;case 13:Ae(Te);break;case 19:Ae(Te);break;case 10:Qo(n.type._context);break;case 22:case 23:cc()}r=r.return}if(He=t,De=t=qa(t.current,null),Qe=ft=a,Be=0,On=null,sc=Cs=ar=0,ct=gn=null,Ja!==null){for(a=0;a<Ja.length;a++)if(r=Ja[a],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,s=r.pending;if(s!==null){var l=s.next;s.next=i,n.next=l}r.pending=n}Ja=null}return t}function Pm(t,a){do{var r=De;try{if(Vo(),Ti.current=is,ns){for(var n=Pe.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}ns=!1}if(tr=0,Ge=ze=Pe=null,fn=!1,kn=0,ic.current=null,r===null||r.return===null){Be=1,On=a,De=null;break}e:{var s=t,l=r.return,o=r,c=a;if(a=Qe,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=o,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var x=h.alternate;x?(h.updateQueue=x.updateQueue,h.memoizedState=x.memoizedState,h.lanes=x.lanes):(h.updateQueue=null,h.memoizedState=null)}var S=Nu(l);if(S!==null){S.flags&=-257,ku(S,l,o,s,a),S.mode&1&&Pu(s,u,a),a=S,c=u;var j=a.updateQueue;if(j===null){var b=new Set;b.add(c),a.updateQueue=b}else j.add(c);break e}else{if(!(a&1)){Pu(s,u,a),uc();break e}c=Error(D(426))}}else if(Re&&o.mode&1){var E=Nu(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),ku(E,l,o,s,a),Ho(Dr(c,o));break e}}s=c=Dr(c,o),Be!==4&&(Be=2),gn===null?gn=[s]:gn.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,a&=-a,s.lanes|=a;var f=hm(s,c,a);wu(s,f);break e;case 1:o=c;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Na===null||!Na.has(v)))){s.flags|=65536,a&=-a,s.lanes|=a;var R=fm(s,o,a);wu(s,R);break e}}s=s.return}while(s!==null)}qm(r)}catch(P){a=P,De===r&&r!==null&&(De=r=r.return);continue}break}while(!0)}function Nm(){var t=ss.current;return ss.current=is,t===null?is:t}function uc(){(Be===0||Be===3||Be===2)&&(Be=4),He===null||!(ar&268435455)&&!(Cs&268435455)||ya(He,Qe)}function cs(t,a){var r=ge;ge|=2;var n=Nm();(He!==t||Qe!==a)&&(na=null,Ya(t,a));do try{dg();break}catch(i){Pm(t,i)}while(!0);if(Vo(),ge=r,ss.current=n,De!==null)throw Error(D(261));return He=null,Qe=0,Be}function dg(){for(;De!==null;)km(De)}function pg(){for(;De!==null&&!If();)km(De)}function km(t){var a=Om(t.alternate,t,ft);t.memoizedProps=t.pendingProps,a===null?qm(t):De=a,ic.current=null}function qm(t){var a=t;do{var r=a.alternate;if(t=a.return,a.flags&32768){if(r=ig(r,a),r!==null){r.flags&=32767,De=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,De=null;return}}else if(r=ng(r,a,ft),r!==null){De=r;return}if(a=a.sibling,a!==null){De=a;return}De=a=t}while(a!==null);Be===0&&(Be=5)}function Va(t,a,r){var n=ve,i=Lt.transition;try{Lt.transition=null,ve=1,mg(t,a,r,n)}finally{Lt.transition=i,ve=n}return null}function mg(t,a,r,n){do Pr();while(wa!==null);if(ge&6)throw Error(D(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(D(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(Qf(t,s),t===He&&(De=He=null,Qe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||gi||(gi=!0,Im(Hi,function(){return Pr(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=Lt.transition,Lt.transition=null;var l=ve;ve=1;var o=ge;ge|=4,ic.current=null,lg(t,r),Rm(r,t),kx(Ql),Vi=!!Vl,Ql=Vl=null,t.current=r,og(r),Df(),ge=o,ve=l,Lt.transition=s}else t.current=r;if(gi&&(gi=!1,wa=t,os=i),s=t.pendingLanes,s===0&&(Na=null),Bf(r.stateNode),mt(t,Oe()),a!==null)for(n=t.onRecoverableError,r=0;r<a.length;r++)i=a[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(ls)throw ls=!1,t=ho,ho=null,t;return os&1&&t.tag!==0&&Pr(),s=t.pendingLanes,s&1?t===fo?jn++:(jn=0,fo=t):jn=0,Fa(),null}function Pr(){if(wa!==null){var t=hp(os),a=Lt.transition,r=ve;try{if(Lt.transition=null,ve=16>t?16:t,wa===null)var n=!1;else{if(t=wa,wa=null,os=0,ge&6)throw Error(D(331));var i=ge;for(ge|=4,Q=t.current;Q!==null;){var s=Q,l=s.child;if(Q.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(Q=u;Q!==null;){var h=Q;switch(h.tag){case 0:case 11:case 15:xn(8,h,s)}var d=h.child;if(d!==null)d.return=h,Q=d;else for(;Q!==null;){h=Q;var x=h.sibling,S=h.return;if(wm(h),h===u){Q=null;break}if(x!==null){x.return=S,Q=x;break}Q=S}}}var j=s.alternate;if(j!==null){var b=j.child;if(b!==null){j.child=null;do{var E=b.sibling;b.sibling=null,b=E}while(b!==null)}}Q=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,Q=l;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xn(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Q=f;break e}Q=s.return}}var p=t.current;for(Q=p;Q!==null;){l=Q;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,Q=v;else e:for(l=p;Q!==null;){if(o=Q,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Es(9,o)}}catch(P){qe(o,o.return,P)}if(o===l){Q=null;break e}var R=o.sibling;if(R!==null){R.return=o.return,Q=R;break e}Q=o.return}}if(ge=i,Fa(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(fs,t)}catch{}n=!0}return n}finally{ve=r,Lt.transition=a}}return!1}function Vu(t,a,r){a=Dr(r,a),a=hm(t,a,1),t=Pa(t,a,1),a=st(),t!==null&&(Bn(t,1,a),mt(t,a))}function qe(t,a,r){if(t.tag===3)Vu(t,t,r);else for(;a!==null;){if(a.tag===3){Vu(a,t,r);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Na===null||!Na.has(n))){t=Dr(r,t),t=fm(a,t,1),a=Pa(a,t,1),t=st(),a!==null&&(Bn(a,1,t),mt(a,t));break}}a=a.return}}function hg(t,a,r){var n=t.pingCache;n!==null&&n.delete(a),a=st(),t.pingedLanes|=t.suspendedLanes&r,He===t&&(Qe&r)===r&&(Be===4||Be===3&&(Qe&130023424)===Qe&&500>Oe()-lc?Ya(t,0):sc|=r),mt(t,a)}function _m(t,a){a===0&&(t.mode&1?(a=li,li<<=1,!(li&130023424)&&(li=4194304)):a=1);var r=st();t=da(t,a),t!==null&&(Bn(t,a,r),mt(t,r))}function fg(t){var a=t.memoizedState,r=0;a!==null&&(r=a.retryLane),_m(t,r)}function xg(t,a){var r=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(D(314))}n!==null&&n.delete(a),_m(t,r)}var Om;Om=function(t,a,r){if(t!==null)if(t.memoizedProps!==a.pendingProps||dt.current)ut=!0;else{if(!(t.lanes&r)&&!(a.flags&128))return ut=!1,rg(t,a,r);ut=!!(t.flags&131072)}else ut=!1,Re&&a.flags&1048576&&zp(a,Zi,a.index);switch(a.lanes=0,a.tag){case 2:var n=a.type;Ni(t,a),t=a.pendingProps;var i=qr(a,tt.current);Tr(a,r),i=ec(null,a,n,t,i,r);var s=tc();return a.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,pt(n)?(s=!0,Yi(a)):s=!1,a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wo(a),i.updater=Ss,a.stateNode=i,i._reactInternals=a,ao(a,n,t,r),a=io(null,a,n,!0,s,r)):(a.tag=0,Re&&s&&Uo(a),nt(null,a,i,r),a=a.child),a;case 16:n=a.elementType;e:{switch(Ni(t,a),t=a.pendingProps,i=n._init,n=i(n._payload),a.type=n,i=a.tag=jg(n),t=_t(n,t),i){case 0:a=no(null,a,n,t,r);break e;case 1:a=Ou(null,a,n,t,r);break e;case 11:a=qu(null,a,n,t,r);break e;case 14:a=_u(null,a,n,_t(n.type,t),r);break e}throw Error(D(306,n,""))}return a;case 0:return n=a.type,i=a.pendingProps,i=a.elementType===n?i:_t(n,i),no(t,a,n,i,r);case 1:return n=a.type,i=a.pendingProps,i=a.elementType===n?i:_t(n,i),Ou(t,a,n,i,r);case 3:e:{if(vm(a),t===null)throw Error(D(387));n=a.pendingProps,s=a.memoizedState,i=s.element,Vp(t,a),as(a,n,null,r);var l=a.memoizedState;if(n=l.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},a.updateQueue.baseState=s,a.memoizedState=s,a.flags&256){i=Dr(Error(D(423)),a),a=Iu(t,a,n,r,i);break e}else if(n!==i){i=Dr(Error(D(424)),a),a=Iu(t,a,n,r,i);break e}else for(gt=Ta(a.stateNode.containerInfo.firstChild),jt=a,Re=!0,It=null,r=Hp(a,null,n,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(_r(),n===i){a=pa(t,a,r);break e}nt(t,a,n,r)}a=a.child}return a;case 5:return Qp(a),t===null&&Zl(a),n=a.type,i=a.pendingProps,s=t!==null?t.memoizedProps:null,l=i.children,Jl(n,i)?l=null:s!==null&&Jl(n,s)&&(a.flags|=32),jm(t,a),nt(t,a,l,r),a.child;case 6:return t===null&&Zl(a),null;case 13:return bm(t,a,r);case 4:return Ko(a,a.stateNode.containerInfo),n=a.pendingProps,t===null?a.child=Or(a,null,n,r):nt(t,a,n,r),a.child;case 11:return n=a.type,i=a.pendingProps,i=a.elementType===n?i:_t(n,i),qu(t,a,n,i,r);case 7:return nt(t,a,a.pendingProps,r),a.child;case 8:return nt(t,a,a.pendingProps.children,r),a.child;case 12:return nt(t,a,a.pendingProps.children,r),a.child;case 10:e:{if(n=a.type._context,i=a.pendingProps,s=a.memoizedProps,l=i.value,Se(es,n._currentValue),n._currentValue=l,s!==null)if(Bt(s.value,l)){if(s.children===i.children&&!dt.current){a=pa(t,a,r);break e}}else for(s=a.child,s!==null&&(s.return=a);s!==null;){var o=s.dependencies;if(o!==null){l=s.child;for(var c=o.firstContext;c!==null;){if(c.context===n){if(s.tag===1){c=oa(-1,r&-r),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),eo(s.return,r,a),o.lanes|=r;break}c=c.next}}else if(s.tag===10)l=s.type===a.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(D(341));l.lanes|=r,o=l.alternate,o!==null&&(o.lanes|=r),eo(l,r,a),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===a){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}nt(t,a,i.children,r),a=a.child}return a;case 9:return i=a.type,n=a.pendingProps.children,Tr(a,r),i=Rt(i),n=n(i),a.flags|=1,nt(t,a,n,r),a.child;case 14:return n=a.type,i=_t(n,a.pendingProps),i=_t(n.type,i),_u(t,a,n,i,r);case 15:return xm(t,a,a.type,a.pendingProps,r);case 17:return n=a.type,i=a.pendingProps,i=a.elementType===n?i:_t(n,i),Ni(t,a),a.tag=1,pt(n)?(t=!0,Yi(a)):t=!1,Tr(a,r),mm(a,n,i),ao(a,n,i,r),io(null,a,n,!0,t,r);case 19:return ym(t,a,r);case 22:return gm(t,a,r)}throw Error(D(156,a.tag))};function Im(t,a){return up(t,a)}function gg(t,a,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,a,r,n){return new gg(t,a,r,n)}function dc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jg(t){if(typeof t=="function")return dc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===To)return 11;if(t===Po)return 14}return 2}function qa(t,a){var r=t.alternate;return r===null?(r=At(t.tag,a,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=a,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,a=t.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function _i(t,a,r,n,i,s){var l=2;if(n=t,typeof t=="function")dc(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case hr:return Xa(r.children,i,s,a);case Mo:l=8,i|=8;break;case Al:return t=At(12,r,a,i|2),t.elementType=Al,t.lanes=s,t;case Ll:return t=At(13,r,a,i),t.elementType=Ll,t.lanes=s,t;case Rl:return t=At(19,r,a,i),t.elementType=Rl,t.lanes=s,t;case Qd:return ws(r,i,s,a);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $d:l=10;break e;case Vd:l=9;break e;case To:l=11;break e;case Po:l=14;break e;case ja:l=16,n=null;break e}throw Error(D(130,t==null?t:typeof t,""))}return a=At(l,r,a,i),a.elementType=t,a.type=n,a.lanes=s,a}function Xa(t,a,r,n){return t=At(7,t,n,a),t.lanes=r,t}function ws(t,a,r,n){return t=At(22,t,n,a),t.elementType=Qd,t.lanes=r,t.stateNode={isHidden:!1},t}function ul(t,a,r){return t=At(6,t,null,a),t.lanes=r,t}function dl(t,a,r){return a=At(4,t.children!==null?t.children:[],t.key,a),a.lanes=r,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}function vg(t,a,r,n,i){this.tag=a,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$s(0),this.expirationTimes=$s(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$s(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pc(t,a,r,n,i,s,l,o,c){return t=new vg(t,a,r,o,c),a===1?(a=1,s===!0&&(a|=8)):a=0,s=At(3,null,null,a),t.current=s,s.stateNode=t,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wo(s),t}function bg(t,a,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mr,key:n==null?null:""+n,children:t,containerInfo:a,implementation:r}}function Dm(t){if(!t)return Oa;t=t._reactInternals;e:{if(ir(t)!==t||t.tag!==1)throw Error(D(170));var a=t;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(pt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(D(171))}if(t.tag===1){var r=t.type;if(pt(r))return Dp(t,r,a)}return a}function Fm(t,a,r,n,i,s,l,o,c){return t=pc(r,n,!0,t,i,s,l,o,c),t.context=Dm(null),r=t.current,n=st(),i=ka(r),s=oa(n,i),s.callback=a??null,Pa(r,s,i),t.current.lanes=i,Bn(t,i,n),mt(t,n),t}function As(t,a,r,n){var i=a.current,s=st(),l=ka(i);return r=Dm(r),a.context===null?a.context=r:a.pendingContext=r,a=oa(s,l),a.payload={element:t},n=n===void 0?null:n,n!==null&&(a.callback=n),t=Pa(i,a,l),t!==null&&(Ft(t,i,l,s),Mi(t,i,l)),l}function us(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qu(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<a?r:a}}function mc(t,a){Qu(t,a),(t=t.alternate)&&Qu(t,a)}function yg(){return null}var zm=typeof reportError=="function"?reportError:function(t){console.error(t)};function hc(t){this._internalRoot=t}Ls.prototype.render=hc.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(D(409));As(t,a,null,null)};Ls.prototype.unmount=hc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;rr(function(){As(null,t,null,null)}),a[ua]=null}};function Ls(t){this._internalRoot=t}Ls.prototype.unstable_scheduleHydration=function(t){if(t){var a=gp();t={blockedOn:null,target:t,priority:a};for(var r=0;r<ba.length&&a!==0&&a<ba[r].priority;r++);ba.splice(r,0,t),r===0&&vp(t)}};function fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ju(){}function Sg(t,a,r,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var u=us(l);s.call(u)}}var l=Fm(a,n,t,0,null,!1,!1,"",Ju);return t._reactRootContainer=l,t[ua]=l.current,Rn(t.nodeType===8?t.parentNode:t),rr(),l}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var o=n;n=function(){var u=us(c);o.call(u)}}var c=pc(t,0,!1,null,null,!1,!1,"",Ju);return t._reactRootContainer=c,t[ua]=c.current,Rn(t.nodeType===8?t.parentNode:t),rr(function(){As(a,c,r,n)}),c}function Ms(t,a,r,n,i){var s=r._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var o=i;i=function(){var c=us(l);o.call(c)}}As(a,l,t,i)}else l=Sg(r,a,t,i,n);return us(l)}fp=function(t){switch(t.tag){case 3:var a=t.stateNode;if(a.current.memoizedState.isDehydrated){var r=sn(a.pendingLanes);r!==0&&(qo(a,r|1),mt(a,Oe()),!(ge&6)&&(Fr=Oe()+500,Fa()))}break;case 13:rr(function(){var n=da(t,1);if(n!==null){var i=st();Ft(n,t,1,i)}}),mc(t,1)}};_o=function(t){if(t.tag===13){var a=da(t,134217728);if(a!==null){var r=st();Ft(a,t,134217728,r)}mc(t,134217728)}};xp=function(t){if(t.tag===13){var a=ka(t),r=da(t,a);if(r!==null){var n=st();Ft(r,t,a,n)}mc(t,a)}};gp=function(){return ve};jp=function(t,a){var r=ve;try{return ve=t,a()}finally{ve=r}};Dl=function(t,a,r){switch(a){case"input":if(Pl(t,r),a=r.name,r.type==="radio"&&a!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<r.length;a++){var n=r[a];if(n!==t&&n.form===t.form){var i=vs(n);if(!i)throw Error(D(90));Wd(n),Pl(n,i)}}}break;case"textarea":Yd(t,r);break;case"select":a=r.value,a!=null&&Ar(t,!!r.multiple,a,!1)}};np=oc;ip=rr;var Eg={usingClientEntryPoint:!1,Events:[Gn,jr,vs,ap,rp,oc]},Zr={findFiberByHostInstance:Qa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cg={bundleType:Zr.bundleType,version:Zr.version,rendererPackageName:Zr.rendererPackageName,rendererConfig:Zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ma.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=op(t),t===null?null:t.stateNode},findFiberByHostInstance:Zr.findFiberByHostInstance||yg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ji.isDisabled&&ji.supportsFiber)try{fs=ji.inject(Cg),Qt=ji}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eg;bt.createPortal=function(t,a){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fc(a))throw Error(D(200));return bg(t,a,null,r)};bt.createRoot=function(t,a){if(!fc(t))throw Error(D(299));var r=!1,n="",i=zm;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onRecoverableError!==void 0&&(i=a.onRecoverableError)),a=pc(t,1,!1,null,null,r,!1,n,i),t[ua]=a.current,Rn(t.nodeType===8?t.parentNode:t),new hc(a)};bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(D(188)):(t=Object.keys(t).join(","),Error(D(268,t)));return t=op(a),t=t===null?null:t.stateNode,t};bt.flushSync=function(t){return rr(t)};bt.hydrate=function(t,a,r){if(!Rs(a))throw Error(D(200));return Ms(null,t,a,!0,r)};bt.hydrateRoot=function(t,a,r){if(!fc(t))throw Error(D(405));var n=r!=null&&r.hydratedSources||null,i=!1,s="",l=zm;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),a=Fm(a,null,t,1,r??null,i,!1,s,l),t[ua]=a.current,Rn(t),n)for(t=0;t<n.length;t++)r=n[t],i=r._getVersion,i=i(r._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[r,i]:a.mutableSourceEagerHydrationData.push(r,i);return new Ls(a)};bt.render=function(t,a,r){if(!Rs(a))throw Error(D(200));return Ms(null,t,a,!1,r)};bt.unmountComponentAtNode=function(t){if(!Rs(t))throw Error(D(40));return t._reactRootContainer?(rr(function(){Ms(null,null,t,!1,function(){t._reactRootContainer=null,t[ua]=null})}),!0):!1};bt.unstable_batchedUpdates=oc;bt.unstable_renderSubtreeIntoContainer=function(t,a,r,n){if(!Rs(r))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return Ms(t,a,r,!1,n)};bt.version="18.3.1-next-f1338f8080-20240426";function Bm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bm)}catch(t){console.error(t)}}Bm(),Bd.exports=bt;var Um=Bd.exports,Gm,Wu=Um;Gm=Wu.createRoot,Wu.hydrateRoot;/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Hm=t=>{throw TypeError(t)},wg=(t,a,r)=>a.has(t)||Hm("Cannot "+r),pl=(t,a,r)=>(wg(t,a,"read from private field"),r?r.call(t):a.get(t)),Ag=(t,a,r)=>a.has(t)?Hm("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(t):a.set(t,r),Ku="popstate";function Yu(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function Lg(t={}){function a(i,s){let{pathname:l="/",search:o="",hash:c=""}=Yt(i.location.hash.substring(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),In("",{pathname:l,search:o,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(i,s){let l=i.document.querySelector("base"),o="";if(l&&l.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");o=u===-1?c:c.slice(0,u)}return o+"#"+(typeof s=="string"?s:Kt(s))}function n(i,s){Ie(i.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(s)})`)}return Mg(a,r,n,t)}function ue(t,a){if(t===!1||t===null||typeof t>"u")throw new Error(a)}function Ie(t,a){if(!t){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function Rg(){return Math.random().toString(36).substring(2,10)}function Xu(t,a){return{usr:t.state,key:t.key,idx:a,masked:t.unstable_mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function In(t,a,r=null,n,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof a=="string"?Yt(a):a,state:r,key:a&&a.key||n||Rg(),unstable_mask:i}}function Kt({pathname:t="/",search:a="",hash:r=""}){return a&&a!=="?"&&(t+=a.charAt(0)==="?"?a:"?"+a),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Yt(t){let a={};if(t){let r=t.indexOf("#");r>=0&&(a.hash=t.substring(r),t=t.substring(0,r));let n=t.indexOf("?");n>=0&&(a.search=t.substring(n),t=t.substring(0,n)),t&&(a.pathname=t)}return a}function Mg(t,a,r,n={}){let{window:i=document.defaultView,v5Compat:s=!1}=n,l=i.history,o="POP",c=null,u=h();u==null&&(u=0,l.replaceState({...l.state,idx:u},""));function h(){return(l.state||{idx:null}).idx}function d(){o="POP";let E=h(),f=E==null?null:E-u;u=E,c&&c({action:o,location:b.location,delta:f})}function x(E,f){o="PUSH";let p=Yu(E)?E:In(b.location,E,f);r&&r(p,E),u=h()+1;let v=Xu(p,u),R=b.createHref(p.unstable_mask||p);try{l.pushState(v,"",R)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(R)}s&&c&&c({action:o,location:b.location,delta:1})}function S(E,f){o="REPLACE";let p=Yu(E)?E:In(b.location,E,f);r&&r(p,E),u=h();let v=Xu(p,u),R=b.createHref(p.unstable_mask||p);l.replaceState(v,"",R),s&&c&&c({action:o,location:b.location,delta:0})}function j(E){return $m(E)}let b={get action(){return o},get location(){return t(i,l)},listen(E){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Ku,d),c=E,()=>{i.removeEventListener(Ku,d),c=null}},createHref(E){return a(i,E)},createURL:j,encodeLocation(E){let f=j(E);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:x,replace:S,go(E){return l.go(E)}};return b}function $m(t,a=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),ue(r,"No window.location.(origin|href) available to create URL");let n=typeof t=="string"?t:Kt(t);return n=n.replace(/ $/,"%20"),!a&&n.startsWith("//")&&(n=r+n),new URL(n,r)}var on,Zu=class{constructor(t){if(Ag(this,on,new Map),t)for(let[a,r]of t)this.set(a,r)}get(t){if(pl(this,on).has(t))return pl(this,on).get(t);if(t.defaultValue!==void 0)return t.defaultValue;throw new Error("No value found for context")}set(t,a){pl(this,on).set(t,a)}};on=new WeakMap;var Tg=new Set(["lazy","caseSensitive","path","id","index","children"]);function Pg(t){return Tg.has(t)}var Ng=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function kg(t){return Ng.has(t)}function qg(t){return t.index===!0}function Dn(t,a,r=[],n={},i=!1){return t.map((s,l)=>{let o=[...r,String(l)],c=typeof s.id=="string"?s.id:o.join("-");if(ue(s.index!==!0||!s.children,"Cannot specify children on an index route"),ue(i||!n[c],`Found a route id collision on id "${c}".  Route id's must be globally unique within Data Router usages`),qg(s)){let u={...s,id:c};return n[c]=ed(u,a(u)),u}else{let u={...s,id:c,children:void 0};return n[c]=ed(u,a(u)),s.children&&(u.children=Dn(s.children,a,o,n,i)),u}})}function ed(t,a){return Object.assign(t,{...a,...typeof a.lazy=="object"&&a.lazy!=null?{lazy:{...t.lazy,...a.lazy}}:{}})}function Sa(t,a,r="/"){return cn(t,a,r,!1)}function cn(t,a,r,n){let i=typeof a=="string"?Yt(a):a,s=Tt(i.pathname||"/",r);if(s==null)return null;let l=Vm(t);Og(l);let o=null;for(let c=0;o==null&&c<l.length;++c){let u=Qg(s);o=$g(l[c],u,n)}return o}function _g(t,a){let{route:r,pathname:n,params:i}=t;return{id:r.id,pathname:n,params:i,data:a[r.id],loaderData:a[r.id],handle:r.handle}}function Vm(t,a=[],r=[],n="",i=!1){let s=(l,o,c=i,u)=>{let h={relativePath:u===void 0?l.path||"":u,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};if(h.relativePath.startsWith("/")){if(!h.relativePath.startsWith(n)&&c)return;ue(h.relativePath.startsWith(n),`Absolute route path "${h.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(n.length)}let d=zt([n,h.relativePath]),x=r.concat(h);l.children&&l.children.length>0&&(ue(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),Vm(l.children,a,x,d,c)),!(l.path==null&&!l.index)&&a.push({path:d,score:Gg(d,l.index),routesMeta:x})};return t.forEach((l,o)=>{var c;if(l.path===""||!((c=l.path)!=null&&c.includes("?")))s(l,o);else for(let u of Qm(l.path))s(l,o,!0,u)}),a}function Qm(t){let a=t.split("/");if(a.length===0)return[];let[r,...n]=a,i=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return i?[s,""]:[s];let l=Qm(n.join("/")),o=[];return o.push(...l.map(c=>c===""?s:[s,c].join("/"))),i&&o.push(...l),o.map(c=>t.startsWith("/")&&c===""?"/":c)}function Og(t){t.sort((a,r)=>a.score!==r.score?r.score-a.score:Hg(a.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var Ig=/^:[\w-]+$/,Dg=3,Fg=2,zg=1,Bg=10,Ug=-2,td=t=>t==="*";function Gg(t,a){let r=t.split("/"),n=r.length;return r.some(td)&&(n+=Ug),a&&(n+=Fg),r.filter(i=>!td(i)).reduce((i,s)=>i+(Ig.test(s)?Dg:s===""?zg:Bg),n)}function Hg(t,a){return t.length===a.length&&t.slice(0,-1).every((n,i)=>n===a[i])?t[t.length-1]-a[a.length-1]:0}function $g(t,a,r=!1){let{routesMeta:n}=t,i={},s="/",l=[];for(let o=0;o<n.length;++o){let c=n[o],u=o===n.length-1,h=s==="/"?a:a.slice(s.length)||"/",d=ds({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},h),x=c.route;if(!d&&u&&r&&!n[n.length-1].route.index&&(d=ds({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},h)),!d)return null;Object.assign(i,d.params),l.push({params:i,pathname:zt([s,d.pathname]),pathnameBase:Kg(zt([s,d.pathnameBase])),route:x}),d.pathnameBase!=="/"&&(s=zt([s,d.pathnameBase]))}return l}function ds(t,a){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,n]=Vg(t.path,t.caseSensitive,t.end),i=a.match(r);if(!i)return null;let s=i[0],l=s.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:n.reduce((u,{paramName:h,isOptional:d},x)=>{if(h==="*"){let j=o[x]||"";l=s.slice(0,s.length-j.length).replace(/(.)\/+$/,"$1")}const S=o[x];return d&&!S?u[h]=void 0:u[h]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:l,pattern:t}}function Vg(t,a=!1,r=!0){Ie(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let n=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c,u,h)=>{if(n.push({paramName:o,isOptional:c!=null}),c){let d=h.charAt(u+l.length);return d&&d!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(n.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,a?void 0:"i"),n]}function Qg(t){try{return t.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return Ie(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),t}}function Tt(t,a){if(a==="/")return t;if(!t.toLowerCase().startsWith(a.toLowerCase()))return null;let r=a.endsWith("/")?a.length-1:a.length,n=t.charAt(r);return n&&n!=="/"?null:t.slice(r)||"/"}function Jg({basename:t,pathname:a}){return a==="/"?t:zt([t,a])}var Jm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xc=t=>Jm.test(t);function Wg(t,a="/"){let{pathname:r,search:n="",hash:i=""}=typeof t=="string"?Yt(t):t,s;return r?(r=r.replace(/\/\/+/g,"/"),r.startsWith("/")?s=ad(r.substring(1),"/"):s=ad(r,a)):s=a,{pathname:s,search:Yg(n),hash:Xg(i)}}function ad(t,a){let r=a.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function ml(t,a,r,n){return`Cannot include a '${t}' character in a manually specified \`to.${a}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Wm(t){return t.filter((a,r)=>r===0||a.route.path&&a.route.path.length>0)}function gc(t){let a=Wm(t);return a.map((r,n)=>n===a.length-1?r.pathname:r.pathnameBase)}function Ts(t,a,r,n=!1){let i;typeof t=="string"?i=Yt(t):(i={...t},ue(!i.pathname||!i.pathname.includes("?"),ml("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),ml("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),ml("#","search","hash",i)));let s=t===""||i.pathname==="",l=s?"/":i.pathname,o;if(l==null)o=r;else{let d=a.length-1;if(!n&&l.startsWith("..")){let x=l.split("/");for(;x[0]==="..";)x.shift(),d-=1;i.pathname=x.join("/")}o=d>=0?a[d]:"/"}let c=Wg(i,o),u=l&&l!=="/"&&l.endsWith("/"),h=(s||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}var zt=t=>t.join("/").replace(/\/\/+/g,"/"),Kg=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Yg=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Xg=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,$n=class{constructor(t,a,r,n=!1){this.status=t,this.statusText=a||"",this.internal=n,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Fn(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function Vn(t){return t.map(a=>a.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Km=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ym(t,a){let r=t;if(typeof r!="string"||!Jm.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let n=r,i=!1;if(Km)try{let s=new URL(window.location.href),l=r.startsWith("//")?new URL(s.protocol+r):new URL(r),o=Tt(l.pathname,a);l.origin===s.origin&&o!=null?r=o+l.search+l.hash:i=!0}catch{Ie(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:n,isExternal:i,to:r}}var Aa=Symbol("Uninstrumented");function Zg(t,a){let r={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};t.forEach(i=>i({id:a.id,index:a.index,path:a.path,instrument(s){let l=Object.keys(r);for(let o of l)s[o]&&r[o].push(s[o])}}));let n={};if(typeof a.lazy=="function"&&r.lazy.length>0){let i=wr(r.lazy,a.lazy,()=>{});i&&(n.lazy=i)}if(typeof a.lazy=="object"){let i=a.lazy;["middleware","loader","action"].forEach(s=>{let l=i[s],o=r[`lazy.${s}`];if(typeof l=="function"&&o.length>0){let c=wr(o,l,()=>{});c&&(n.lazy=Object.assign(n.lazy||{},{[s]:c}))}})}return["loader","action"].forEach(i=>{let s=a[i];if(typeof s=="function"&&r[i].length>0){let l=s[Aa]??s,o=wr(r[i],l,(...c)=>rd(c[0]));o&&(i==="loader"&&l.hydrate===!0&&(o.hydrate=!0),o[Aa]=l,n[i]=o)}}),a.middleware&&a.middleware.length>0&&r.middleware.length>0&&(n.middleware=a.middleware.map(i=>{let s=i[Aa]??i,l=wr(r.middleware,s,(...o)=>rd(o[0]));return l?(l[Aa]=s,l):i})),n}function ej(t,a){let r={navigate:[],fetch:[]};if(a.forEach(n=>n({instrument(i){let s=Object.keys(i);for(let l of s)i[l]&&r[l].push(i[l])}})),r.navigate.length>0){let n=t.navigate[Aa]??t.navigate,i=wr(r.navigate,n,(...s)=>{let[l,o]=s;return{to:typeof l=="number"||typeof l=="string"?l:l?Kt(l):".",...nd(t,o??{})}});i&&(i[Aa]=n,t.navigate=i)}if(r.fetch.length>0){let n=t.fetch[Aa]??t.fetch,i=wr(r.fetch,n,(...s)=>{let[l,,o,c]=s;return{href:o??".",fetcherKey:l,...nd(t,c??{})}});i&&(i[Aa]=n,t.fetch=i)}return t}function wr(t,a,r){return t.length===0?null:async(...n)=>{let i=await Xm(t,r(...n),()=>a(...n),t.length-1);if(i.type==="error")throw i.value;return i.value}}async function Xm(t,a,r,n){let i=t[n],s;if(i){let l,o=async()=>(l?console.error("You cannot call instrumented handlers more than once"):l=Xm(t,a,r,n-1),s=await l,ue(s,"Expected a result"),s.type==="error"&&s.value instanceof Error?{status:"error",error:s.value}:{status:"success",error:void 0});try{await i(o,a)}catch(c){console.error("An instrumentation function threw an error:",c)}l||await o(),await l}else try{s={type:"success",value:await r()}}catch(l){s={type:"error",value:l}}return s||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function rd(t){let{request:a,context:r,params:n,unstable_pattern:i}=t;return{request:tj(a),params:{...n},unstable_pattern:i,context:aj(r)}}function nd(t,a){return{currentUrl:Kt(t.state.location),..."formMethod"in a?{formMethod:a.formMethod}:{},..."formEncType"in a?{formEncType:a.formEncType}:{},..."formData"in a?{formData:a.formData}:{},..."body"in a?{body:a.body}:{}}}function tj(t){return{method:t.method,url:t.url,headers:{get:(...a)=>t.headers.get(...a)}}}function aj(t){if(nj(t)){let a={...t};return Object.freeze(a),a}else return{get:a=>t.get(a)}}var rj=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function nj(t){if(t===null||typeof t!="object")return!1;const a=Object.getPrototypeOf(t);return a===Object.prototype||a===null||Object.getOwnPropertyNames(a).sort().join("\0")===rj}var Zm=["POST","PUT","PATCH","DELETE"],ij=new Set(Zm),sj=["GET",...Zm],lj=new Set(sj),eh=new Set([301,302,303,307,308]),oj=new Set([307,308]),hl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},cj={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},en={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},uj=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),th="remix-router-transitions",ah=Symbol("ResetLoaderData");function dj(t){const a=t.window?t.window:typeof window<"u"?window:void 0,r=typeof a<"u"&&typeof a.document<"u"&&typeof a.document.createElement<"u";ue(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let n=t.hydrationRouteProperties||[],i=t.mapRouteProperties||uj,s=i;if(t.unstable_instrumentations){let C=t.unstable_instrumentations;s=L=>({...i(L),...Zg(C.map(M=>M.route).filter(Boolean),L)})}let l={},o=Dn(t.routes,s,void 0,l),c,u=t.basename||"/";u.startsWith("/")||(u=`/${u}`);let h=t.dataStrategy||xj,d={...t.future},x=null,S=new Set,j=null,b=null,E=null,f=t.hydrationData!=null,p=Sa(o,t.history.location,u),v=!1,R=null,P,k;if(p==null&&!t.patchRoutesOnNavigation){let C=Et(404,{pathname:t.history.location.pathname}),{matches:L,route:M}=vi(o);P=!0,k=!P,p=L,R={[M.id]:C}}else if(p&&!t.hydrationData&&Yn(p,o,t.history.location.pathname).active&&(p=null),p)if(p.some(C=>C.route.lazy))P=!1,k=!P;else if(!p.some(C=>jc(C.route)))P=!0,k=!P;else{let C=t.hydrationData?t.hydrationData.loaderData:null,L=t.hydrationData?t.hydrationData.errors:null,M=p;if(L){let I=p.findIndex(z=>L[z.route.id]!==void 0);M=M.slice(0,I+1)}k=!1,P=M.every(I=>{let z=rh(I.route,C,L);return k=k||z.renderFallback,!z.shouldLoad})}else{P=!1,k=!P,p=[];let C=Yn(null,o,t.history.location.pathname);C.active&&C.matches&&(v=!0,p=C.matches)}let q,w={historyAction:t.history.action,location:t.history.location,matches:p,initialized:P,renderFallback:k,navigation:hl,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||R,fetchers:new Map,blockers:new Map},$="POP",F=null,le=!1,ee,je=!1,te=new Map,_=null,H=!1,ae=!1,O=new Set,B=new Map,G=0,re=-1,de=new Map,ye=new Set,Le=new Map,Fe=new Map,Ee=new Set,$e=new Map,lr,Nt=null;function Ph(){if(x=t.history.listen(({action:C,location:L,delta:M})=>{if(lr){lr(),lr=void 0;return}Ie($e.size===0||M!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let I=Oc({currentLocation:w.location,nextLocation:L,historyAction:C});if(I&&M!=null){let z=new Promise(K=>{lr=K});t.history.go(M*-1),Kn(I,{state:"blocked",location:L,proceed(){Kn(I,{state:"proceeding",proceed:void 0,reset:void 0,location:L}),z.then(()=>t.history.go(M))},reset(){let K=new Map(w.blockers);K.set(I,en),We({blockers:K})}}),F==null||F.resolve(),F=null;return}return za(C,L)}),r){qj(a,te);let C=()=>_j(a,te);a.addEventListener("pagehide",C),_=()=>a.removeEventListener("pagehide",C)}return w.initialized||za("POP",w.location,{initialHydration:!0}),q}function Nh(){x&&x(),_&&_(),S.clear(),ee&&ee.abort(),w.fetchers.forEach((C,L)=>Is(L)),w.blockers.forEach((C,L)=>_c(L))}function kh(C){return S.add(C),()=>S.delete(C)}function We(C,L={}){C.matches&&(C.matches=C.matches.map(z=>{let K=l[z.route.id],X=z.route;return X.element!==K.element||X.errorElement!==K.errorElement||X.hydrateFallbackElement!==K.hydrateFallbackElement?{...z,route:K}:z})),w={...w,...C};let M=[],I=[];w.fetchers.forEach((z,K)=>{z.state==="idle"&&(Ee.has(K)?M.push(K):I.push(K))}),Ee.forEach(z=>{!w.fetchers.has(z)&&!B.has(z)&&M.push(z)}),[...S].forEach(z=>z(w,{deletedFetchers:M,newErrors:C.errors??null,viewTransitionOpts:L.viewTransitionOpts,flushSync:L.flushSync===!0})),M.forEach(z=>Is(z)),I.forEach(z=>w.fetchers.delete(z))}function or(C,L,{flushSync:M}={}){var ne,Y;let I=w.actionData!=null&&w.navigation.formMethod!=null&&Ze(w.navigation.formMethod)&&w.navigation.state==="loading"&&((ne=C.state)==null?void 0:ne._isRedirect)!==!0,z;L.actionData?Object.keys(L.actionData).length>0?z=L.actionData:z=null:I?z=w.actionData:z=null;let K=L.loaderData?hd(w.loaderData,L.loaderData,L.matches||[],L.errors):w.loaderData,X=w.blockers;X.size>0&&(X=new Map(X),X.forEach((ce,he)=>X.set(he,en)));let W=H?!1:Dc(C,L.matches||w.matches),V=le===!0||w.navigation.formMethod!=null&&Ze(w.navigation.formMethod)&&((Y=C.state)==null?void 0:Y._isRedirect)!==!0;c&&(o=c,c=void 0),H||$==="POP"||($==="PUSH"?t.history.push(C,C.state):$==="REPLACE"&&t.history.replace(C,C.state));let Z;if($==="POP"){let ce=te.get(w.location.pathname);ce&&ce.has(C.pathname)?Z={currentLocation:w.location,nextLocation:C}:te.has(C.pathname)&&(Z={currentLocation:C,nextLocation:w.location})}else if(je){let ce=te.get(w.location.pathname);ce?ce.add(C.pathname):(ce=new Set([C.pathname]),te.set(w.location.pathname,ce)),Z={currentLocation:w.location,nextLocation:C}}We({...L,actionData:z,loaderData:K,historyAction:$,location:C,initialized:!0,renderFallback:!1,navigation:hl,revalidation:"idle",restoreScrollPosition:W,preventScrollReset:V,blockers:X},{viewTransitionOpts:Z,flushSync:M===!0}),$="POP",le=!1,je=!1,H=!1,ae=!1,F==null||F.resolve(),F=null,Nt==null||Nt.resolve(),Nt=null}async function Rc(C,L){if(F==null||F.resolve(),F=null,typeof C=="number"){F||(F=jd());let Me=F.promise;return t.history.go(C),Me}let M=jo(w.location,w.matches,u,C,L==null?void 0:L.fromRouteId,L==null?void 0:L.relative),{path:I,submission:z,error:K}=id(!1,M,L),X;L!=null&&L.unstable_mask&&(X={pathname:"",search:"",hash:"",...typeof L.unstable_mask=="string"?Yt(L.unstable_mask):{...w.location.unstable_mask,...L.unstable_mask}});let W=w.location,V=In(W,I,L&&L.state,void 0,X);V={...V,...t.history.encodeLocation(V)};let Z=L&&L.replace!=null?L.replace:void 0,ne="PUSH";Z===!0?ne="REPLACE":Z===!1||z!=null&&Ze(z.formMethod)&&z.formAction===w.location.pathname+w.location.search&&(ne="REPLACE");let Y=L&&"preventScrollReset"in L?L.preventScrollReset===!0:void 0,ce=(L&&L.flushSync)===!0,he=Oc({currentLocation:W,nextLocation:V,historyAction:ne});if(he){Kn(he,{state:"blocked",location:V,proceed(){Kn(he,{state:"proceeding",proceed:void 0,reset:void 0,location:V}),Rc(C,L)},reset(){let Me=new Map(w.blockers);Me.set(he,en),We({blockers:Me})}});return}await za(ne,V,{submission:z,pendingError:K,preventScrollReset:Y,replace:L&&L.replace,enableViewTransition:L&&L.viewTransition,flushSync:ce,callSiteDefaultShouldRevalidate:L&&L.unstable_defaultShouldRevalidate})}function qh(){Nt||(Nt=jd()),Os(),We({revalidation:"loading"});let C=Nt.promise;return w.navigation.state==="submitting"?C:w.navigation.state==="idle"?(za(w.historyAction,w.location,{startUninterruptedRevalidation:!0}),C):(za($||w.historyAction,w.navigation.location,{overrideNavigation:w.navigation,enableViewTransition:je===!0}),C)}async function za(C,L,M){ee&&ee.abort(),ee=null,$=C,H=(M&&M.startUninterruptedRevalidation)===!0,$h(w.location,w.matches),le=(M&&M.preventScrollReset)===!0,je=(M&&M.enableViewTransition)===!0;let I=c||o,z=M&&M.overrideNavigation,K=M!=null&&M.initialHydration&&w.matches&&w.matches.length>0&&!v?w.matches:Sa(I,L,u),X=(M&&M.flushSync)===!0;if(K&&w.initialized&&!ae&&Cj(w.location,L)&&!(M&&M.submission&&Ze(M.submission.formMethod))){or(L,{matches:K},{flushSync:X});return}let W=Yn(K,I,L.pathname);if(W.active&&W.matches&&(K=W.matches),!K){let{error:Ue,notFoundMatches:at,route:be}=Ds(L.pathname);or(L,{matches:at,loaderData:{},errors:{[be.id]:Ue}},{flushSync:X});return}ee=new AbortController;let V=pr(t.history,L,ee.signal,M&&M.submission),Z=t.getContext?await t.getContext():new Zu,ne;if(M&&M.pendingError)ne=[Ea(K).route.id,{type:"error",error:M.pendingError}];else if(M&&M.submission&&Ze(M.submission.formMethod)){let Ue=await _h(V,L,M.submission,K,Z,W.active,M&&M.initialHydration===!0,{replace:M.replace,flushSync:X});if(Ue.shortCircuited)return;if(Ue.pendingActionResult){let[at,be]=Ue.pendingActionResult;if(xt(be)&&Fn(be.error)&&be.error.status===404){ee=null,or(L,{matches:Ue.matches,loaderData:{},errors:{[at]:be.error}});return}}K=Ue.matches||K,ne=Ue.pendingActionResult,z=fl(L,M.submission),X=!1,W.active=!1,V=pr(t.history,V.url,V.signal)}let{shortCircuited:Y,matches:ce,loaderData:he,errors:Me}=await Oh(V,L,K,Z,W.active,z,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,X,ne,M&&M.callSiteDefaultShouldRevalidate);Y||(ee=null,or(L,{matches:ce||K,...fd(ne),loaderData:he,errors:Me}))}async function _h(C,L,M,I,z,K,X,W={}){Os();let V=Nj(L,M);if(We({navigation:V},{flushSync:W.flushSync===!0}),K){let Y=await Xn(I,L.pathname,C.signal);if(Y.type==="aborted")return{shortCircuited:!0};if(Y.type==="error"){if(Y.partialMatches.length===0){let{matches:he,route:Me}=vi(o);return{matches:he,pendingActionResult:[Me.id,{type:"error",error:Y.error}]}}let ce=Ea(Y.partialMatches).route.id;return{matches:Y.partialMatches,pendingActionResult:[ce,{type:"error",error:Y.error}]}}else if(Y.matches)I=Y.matches;else{let{notFoundMatches:ce,error:he,route:Me}=Ds(L.pathname);return{matches:ce,pendingActionResult:[Me.id,{type:"error",error:he}]}}}let Z,ne=Oi(I,L);if(!ne.route.action&&!ne.route.lazy)Z={type:"error",error:Et(405,{method:C.method,pathname:L.pathname,routeId:ne.route.id})};else{let Y=Nr(s,l,C,I,ne,X?[]:n,z),ce=await Gr(C,Y,z,null);if(Z=ce[ne.route.id],!Z){for(let he of I)if(ce[he.route.id]){Z=ce[he.route.id];break}}if(C.signal.aborted)return{shortCircuited:!0}}if(Ka(Z)){let Y;return W&&W.replace!=null?Y=W.replace:Y=dd(Z.response.headers.get("Location"),new URL(C.url),u,t.history)===w.location.pathname+w.location.search,await Ba(C,Z,!0,{submission:M,replace:Y}),{shortCircuited:!0}}if(xt(Z)){let Y=Ea(I,ne.route.id);return(W&&W.replace)!==!0&&($="PUSH"),{matches:I,pendingActionResult:[Y.route.id,Z,ne.route.id]}}return{matches:I,pendingActionResult:[ne.route.id,Z]}}async function Oh(C,L,M,I,z,K,X,W,V,Z,ne,Y,ce){let he=K||fl(L,X),Me=X||W||gd(he),Ue=!H&&!Z;if(z){if(Ue){let Ke=Mc(Y);We({navigation:he,...Ke!==void 0?{actionData:Ke}:{}},{flushSync:ne})}let xe=await Xn(M,L.pathname,C.signal);if(xe.type==="aborted")return{shortCircuited:!0};if(xe.type==="error"){if(xe.partialMatches.length===0){let{matches:cr,route:Ha}=vi(o);return{matches:cr,loaderData:{},errors:{[Ha.id]:xe.error}}}let Ke=Ea(xe.partialMatches).route.id;return{matches:xe.partialMatches,loaderData:{},errors:{[Ke]:xe.error}}}else if(xe.matches)M=xe.matches;else{let{error:Ke,notFoundMatches:cr,route:Ha}=Ds(L.pathname);return{matches:cr,loaderData:{},errors:{[Ha.id]:Ke}}}}let at=c||o,{dsMatches:be,revalidatingFetchers:St}=sd(C,I,s,l,t.history,w,M,Me,L,Z?[]:n,Z===!0,ae,O,Ee,Le,ye,at,u,t.patchRoutesOnNavigation!=null,Y,ce);if(re=++G,!t.dataStrategy&&!be.some(xe=>xe.shouldLoad)&&!be.some(xe=>xe.route.middleware&&xe.route.middleware.length>0)&&St.length===0){let xe=kc();return or(L,{matches:M,loaderData:{},errors:Y&&xt(Y[1])?{[Y[0]]:Y[1].error}:null,...fd(Y),...xe?{fetchers:new Map(w.fetchers)}:{}},{flushSync:ne}),{shortCircuited:!0}}if(Ue){let xe={};if(!z){xe.navigation=he;let Ke=Mc(Y);Ke!==void 0&&(xe.actionData=Ke)}St.length>0&&(xe.fetchers=Ih(St)),We(xe,{flushSync:ne})}St.forEach(xe=>{aa(xe.key),xe.controller&&B.set(xe.key,xe.controller)});let Ua=()=>St.forEach(xe=>aa(xe.key));ee&&ee.signal.addEventListener("abort",Ua);let{loaderResults:Hr,fetcherResults:ha}=await Tc(be,St,C,I);if(C.signal.aborted)return{shortCircuited:!0};ee&&ee.signal.removeEventListener("abort",Ua),St.forEach(xe=>B.delete(xe.key));let Ut=bi(Hr);if(Ut)return await Ba(C,Ut.result,!0,{replace:V}),{shortCircuited:!0};if(Ut=bi(ha),Ut)return ye.add(Ut.key),await Ba(C,Ut.result,!0,{replace:V}),{shortCircuited:!0};let{loaderData:Fs,errors:$r}=md(w,M,Hr,Y,St,ha);Z&&w.errors&&($r={...w.errors,...$r});let Ga=kc(),Zn=qc(re),ei=Ga||Zn||St.length>0;return{matches:M,loaderData:Fs,errors:$r,...ei?{fetchers:new Map(w.fetchers)}:{}}}function Mc(C){if(C&&!xt(C[1]))return{[C[0]]:C[1].data};if(w.actionData)return Object.keys(w.actionData).length===0?null:w.actionData}function Ih(C){return C.forEach(L=>{let M=w.fetchers.get(L.key),I=tn(void 0,M?M.data:void 0);w.fetchers.set(L.key,I)}),new Map(w.fetchers)}async function Dh(C,L,M,I){aa(C);let z=(I&&I.flushSync)===!0,K=c||o,X=jo(w.location,w.matches,u,M,L,I==null?void 0:I.relative),W=Sa(K,X,u),V=Yn(W,K,X);if(V.active&&V.matches&&(W=V.matches),!W){ta(C,L,Et(404,{pathname:X}),{flushSync:z});return}let{path:Z,submission:ne,error:Y}=id(!0,X,I);if(Y){ta(C,L,Y,{flushSync:z});return}let ce=t.getContext?await t.getContext():new Zu,he=(I&&I.preventScrollReset)===!0;if(ne&&Ze(ne.formMethod)){await Fh(C,L,Z,W,ce,V.active,z,he,ne,I&&I.unstable_defaultShouldRevalidate);return}Le.set(C,{routeId:L,path:Z}),await zh(C,L,Z,W,ce,V.active,z,he,ne)}async function Fh(C,L,M,I,z,K,X,W,V,Z){Os(),Le.delete(C);let ne=w.fetchers.get(C);ea(C,kj(V,ne),{flushSync:X});let Y=new AbortController,ce=pr(t.history,M,Y.signal,V);if(K){let ke=await Xn(I,new URL(ce.url).pathname,ce.signal,C);if(ke.type==="aborted")return;if(ke.type==="error"){ta(C,L,ke.error,{flushSync:X});return}else if(ke.matches)I=ke.matches;else{ta(C,L,Et(404,{pathname:M}),{flushSync:X});return}}let he=Oi(I,M);if(!he.route.action&&!he.route.lazy){let ke=Et(405,{method:V.formMethod,pathname:M,routeId:L});ta(C,L,ke,{flushSync:X});return}B.set(C,Y);let Me=G,Ue=Nr(s,l,ce,I,he,n,z),at=await Gr(ce,Ue,z,C),be=at[he.route.id];if(!be){for(let ke of Ue)if(at[ke.route.id]){be=at[ke.route.id];break}}if(ce.signal.aborted){B.get(C)===Y&&B.delete(C);return}if(Ee.has(C)){if(Ka(be)||xt(be)){ea(C,ra(void 0));return}}else{if(Ka(be))if(B.delete(C),re>Me){ea(C,ra(void 0));return}else return ye.add(C),ea(C,tn(V)),Ba(ce,be,!1,{fetcherSubmission:V,preventScrollReset:W});if(xt(be)){ta(C,L,be.error);return}}let St=w.navigation.location||w.location,Ua=pr(t.history,St,Y.signal),Hr=c||o,ha=w.navigation.state!=="idle"?Sa(Hr,w.navigation.location,u):w.matches;ue(ha,"Didn't find any matches after fetcher action");let Ut=++G;de.set(C,Ut);let Fs=tn(V,be.data);w.fetchers.set(C,Fs);let{dsMatches:$r,revalidatingFetchers:Ga}=sd(Ua,z,s,l,t.history,w,ha,V,St,n,!1,ae,O,Ee,Le,ye,Hr,u,t.patchRoutesOnNavigation!=null,[he.route.id,be],Z);Ga.filter(ke=>ke.key!==C).forEach(ke=>{let ti=ke.key,zc=w.fetchers.get(ti),Jh=tn(void 0,zc?zc.data:void 0);w.fetchers.set(ti,Jh),aa(ti),ke.controller&&B.set(ti,ke.controller)}),We({fetchers:new Map(w.fetchers)});let Zn=()=>Ga.forEach(ke=>aa(ke.key));Y.signal.addEventListener("abort",Zn);let{loaderResults:ei,fetcherResults:xe}=await Tc($r,Ga,Ua,z);if(Y.signal.aborted)return;if(Y.signal.removeEventListener("abort",Zn),de.delete(C),B.delete(C),Ga.forEach(ke=>B.delete(ke.key)),w.fetchers.has(C)){let ke=ra(be.data);w.fetchers.set(C,ke)}let Ke=bi(ei);if(Ke)return Ba(Ua,Ke.result,!1,{preventScrollReset:W});if(Ke=bi(xe),Ke)return ye.add(Ke.key),Ba(Ua,Ke.result,!1,{preventScrollReset:W});let{loaderData:cr,errors:Ha}=md(w,ha,ei,void 0,Ga,xe);qc(Ut),w.navigation.state==="loading"&&Ut>re?(ue($,"Expected pending action"),ee&&ee.abort(),or(w.navigation.location,{matches:ha,loaderData:cr,errors:Ha,fetchers:new Map(w.fetchers)})):(We({errors:Ha,loaderData:hd(w.loaderData,cr,ha,Ha),fetchers:new Map(w.fetchers)}),ae=!1)}async function zh(C,L,M,I,z,K,X,W,V){let Z=w.fetchers.get(C);ea(C,tn(V,Z?Z.data:void 0),{flushSync:X});let ne=new AbortController,Y=pr(t.history,M,ne.signal);if(K){let be=await Xn(I,new URL(Y.url).pathname,Y.signal,C);if(be.type==="aborted")return;if(be.type==="error"){ta(C,L,be.error,{flushSync:X});return}else if(be.matches)I=be.matches;else{ta(C,L,Et(404,{pathname:M}),{flushSync:X});return}}let ce=Oi(I,M);B.set(C,ne);let he=G,Me=Nr(s,l,Y,I,ce,n,z),at=(await Gr(Y,Me,z,C))[ce.route.id];if(B.get(C)===ne&&B.delete(C),!Y.signal.aborted){if(Ee.has(C)){ea(C,ra(void 0));return}if(Ka(at))if(re>he){ea(C,ra(void 0));return}else{ye.add(C),await Ba(Y,at,!1,{preventScrollReset:W});return}if(xt(at)){ta(C,L,at.error);return}ea(C,ra(at.data))}}async function Ba(C,L,M,{submission:I,fetcherSubmission:z,preventScrollReset:K,replace:X}={}){M||(F==null||F.resolve(),F=null),L.response.headers.has("X-Remix-Revalidate")&&(ae=!0);let W=L.response.headers.get("Location");ue(W,"Expected a Location header on the redirect Response"),W=dd(W,new URL(C.url),u,t.history);let V=In(w.location,W,{_isRedirect:!0});if(r){let Me=!1;if(L.response.headers.has("X-Remix-Reload-Document"))Me=!0;else if(xc(W)){const Ue=$m(W,!0);Me=Ue.origin!==a.location.origin||Tt(Ue.pathname,u)==null}if(Me){X?a.location.replace(W):a.location.assign(W);return}}ee=null;let Z=X===!0||L.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:ne,formAction:Y,formEncType:ce}=w.navigation;!I&&!z&&ne&&Y&&ce&&(I=gd(w.navigation));let he=I||z;if(oj.has(L.response.status)&&he&&Ze(he.formMethod))await za(Z,V,{submission:{...he,formAction:W},preventScrollReset:K||le,enableViewTransition:M?je:void 0});else{let Me=fl(V,I);await za(Z,V,{overrideNavigation:Me,fetcherSubmission:z,preventScrollReset:K||le,enableViewTransition:M?je:void 0})}}async function Gr(C,L,M,I){var X;let z,K={};try{z=await jj(h,C,L,I,M,!1)}catch(W){return L.filter(V=>V.shouldLoad).forEach(V=>{K[V.route.id]={type:"error",error:W}}),K}if(C.signal.aborted)return K;if(!Ze(C.method))for(let W of L){if(((X=z[W.route.id])==null?void 0:X.type)==="error")break;!z.hasOwnProperty(W.route.id)&&!w.loaderData.hasOwnProperty(W.route.id)&&(!w.errors||!w.errors.hasOwnProperty(W.route.id))&&W.shouldCallHandler()&&(z[W.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${W.route.id}`)})}for(let[W,V]of Object.entries(z))if(Rj(V)){let Z=V.result;K[W]={type:"redirect",response:Sj(Z,C,W,L,u)}}else K[W]=await yj(V);return K}async function Tc(C,L,M,I){let z=Gr(M,C,I,null),K=Promise.all(L.map(async V=>{if(V.matches&&V.match&&V.request&&V.controller){let ne=(await Gr(V.request,V.matches,I,V.key))[V.match.route.id];return{[V.key]:ne}}else return Promise.resolve({[V.key]:{type:"error",error:Et(404,{pathname:V.path})}})})),X=await z,W=(await K).reduce((V,Z)=>Object.assign(V,Z),{});return{loaderResults:X,fetcherResults:W}}function Os(){ae=!0,Le.forEach((C,L)=>{B.has(L)&&O.add(L),aa(L)})}function ea(C,L,M={}){w.fetchers.set(C,L),We({fetchers:new Map(w.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function ta(C,L,M,I={}){let z=Ea(w.matches,L);Is(C),We({errors:{[z.route.id]:M},fetchers:new Map(w.fetchers)},{flushSync:(I&&I.flushSync)===!0})}function Pc(C){return Fe.set(C,(Fe.get(C)||0)+1),Ee.has(C)&&Ee.delete(C),w.fetchers.get(C)||cj}function Bh(C,L){aa(C,L==null?void 0:L.reason),ea(C,ra(null))}function Is(C){let L=w.fetchers.get(C);B.has(C)&&!(L&&L.state==="loading"&&de.has(C))&&aa(C),Le.delete(C),de.delete(C),ye.delete(C),Ee.delete(C),O.delete(C),w.fetchers.delete(C)}function Uh(C){let L=(Fe.get(C)||0)-1;L<=0?(Fe.delete(C),Ee.add(C)):Fe.set(C,L),We({fetchers:new Map(w.fetchers)})}function aa(C,L){let M=B.get(C);M&&(M.abort(L),B.delete(C))}function Nc(C){for(let L of C){let M=Pc(L),I=ra(M.data);w.fetchers.set(L,I)}}function kc(){let C=[],L=!1;for(let M of ye){let I=w.fetchers.get(M);ue(I,`Expected fetcher: ${M}`),I.state==="loading"&&(ye.delete(M),C.push(M),L=!0)}return Nc(C),L}function qc(C){let L=[];for(let[M,I]of de)if(I<C){let z=w.fetchers.get(M);ue(z,`Expected fetcher: ${M}`),z.state==="loading"&&(aa(M),de.delete(M),L.push(M))}return Nc(L),L.length>0}function Gh(C,L){let M=w.blockers.get(C)||en;return $e.get(C)!==L&&$e.set(C,L),M}function _c(C){w.blockers.delete(C),$e.delete(C)}function Kn(C,L){let M=w.blockers.get(C)||en;ue(M.state==="unblocked"&&L.state==="blocked"||M.state==="blocked"&&L.state==="blocked"||M.state==="blocked"&&L.state==="proceeding"||M.state==="blocked"&&L.state==="unblocked"||M.state==="proceeding"&&L.state==="unblocked",`Invalid blocker state transition: ${M.state} -> ${L.state}`);let I=new Map(w.blockers);I.set(C,L),We({blockers:I})}function Oc({currentLocation:C,nextLocation:L,historyAction:M}){if($e.size===0)return;$e.size>1&&Ie(!1,"A router only supports one blocker at a time");let I=Array.from($e.entries()),[z,K]=I[I.length-1],X=w.blockers.get(z);if(!(X&&X.state==="proceeding")&&K({currentLocation:C,nextLocation:L,historyAction:M}))return z}function Ds(C){let L=Et(404,{pathname:C}),M=c||o,{matches:I,route:z}=vi(M);return{notFoundMatches:I,route:z,error:L}}function Hh(C,L,M){if(j=C,E=L,b=M||null,!f&&w.navigation===hl){f=!0;let I=Dc(w.location,w.matches);I!=null&&We({restoreScrollPosition:I})}return()=>{j=null,E=null,b=null}}function Ic(C,L){return b&&b(C,L.map(I=>_g(I,w.loaderData)))||C.key}function $h(C,L){if(j&&E){let M=Ic(C,L);j[M]=E()}}function Dc(C,L){if(j){let M=Ic(C,L),I=j[M];if(typeof I=="number")return I}return null}function Yn(C,L,M){if(t.patchRoutesOnNavigation)if(C){if(Object.keys(C[0].params).length>0)return{active:!0,matches:cn(L,M,u,!0)}}else return{active:!0,matches:cn(L,M,u,!0)||[]};return{active:!1,matches:null}}async function Xn(C,L,M,I){if(!t.patchRoutesOnNavigation)return{type:"success",matches:C};let z=C;for(;;){let K=c==null,X=c||o,W=l;try{await t.patchRoutesOnNavigation({signal:M,path:L,matches:z,fetcherKey:I,patch:(ne,Y)=>{M.aborted||ld(ne,Y,X,W,s,!1)}})}catch(ne){return{type:"error",error:ne,partialMatches:z}}finally{K&&!M.aborted&&(o=[...o])}if(M.aborted)return{type:"aborted"};let V=Sa(X,L,u),Z=null;if(V){if(Object.keys(V[0].params).length===0)return{type:"success",matches:V};if(Z=cn(X,L,u,!0),!(Z&&z.length<Z.length&&Fc(z,Z.slice(0,z.length))))return{type:"success",matches:V}}if(Z||(Z=cn(X,L,u,!0)),!Z||Fc(z,Z))return{type:"success",matches:null};z=Z}}function Fc(C,L){return C.length===L.length&&C.every((M,I)=>M.route.id===L[I].route.id)}function Vh(C){l={},c=Dn(C,s,void 0,l)}function Qh(C,L,M=!1){let I=c==null;ld(C,L,c||o,l,s,M),I&&(o=[...o],We({}))}return q={get basename(){return u},get future(){return d},get state(){return w},get routes(){return o},get window(){return a},initialize:Ph,subscribe:kh,enableScrollRestoration:Hh,navigate:Rc,fetch:Dh,revalidate:qh,createHref:C=>t.history.createHref(C),encodeLocation:C=>t.history.encodeLocation(C),getFetcher:Pc,resetFetcher:Bh,deleteFetcher:Uh,dispose:Nh,getBlocker:Gh,deleteBlocker:_c,patchRoutes:Qh,_internalFetchControllers:B,_internalSetRoutes:Vh,_internalSetStateDoNotUseOrYouWillBreakYourApp(C){We(C)}},t.unstable_instrumentations&&(q=ej(q,t.unstable_instrumentations.map(C=>C.router).filter(Boolean))),q}function pj(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function jo(t,a,r,n,i,s){let l,o;if(i){l=[];for(let u of a)if(l.push(u),u.route.id===i){o=u;break}}else l=a,o=a[a.length-1];let c=Ts(n||".",gc(l),Tt(t.pathname,r)||t.pathname,s==="path");if(n==null&&(c.search=t.search,c.hash=t.hash),(n==null||n===""||n===".")&&o){let u=bc(c.search);if(o.route.index&&!u)c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index";else if(!o.route.index&&u){let h=new URLSearchParams(c.search),d=h.getAll("index");h.delete("index"),d.filter(S=>S).forEach(S=>h.append("index",S));let x=h.toString();c.search=x?`?${x}`:""}}return r!=="/"&&(c.pathname=Jg({basename:r,pathname:c.pathname})),Kt(c)}function id(t,a,r){if(!r||!pj(r))return{path:a};if(r.formMethod&&!Pj(r.formMethod))return{path:a,error:Et(405,{method:r.formMethod})};let n=()=>({path:a,error:Et(400,{type:"invalid-body"})}),s=(r.formMethod||"get").toUpperCase(),l=ch(a);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Ze(s))return n();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((x,[S,j])=>`${x}${S}=${j}
`,""):String(r.body);return{path:a,submission:{formMethod:s,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!Ze(s))return n();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:a,submission:{formMethod:s,formAction:l,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return n()}}}ue(typeof FormData=="function","FormData is not available in this environment");let o,c;if(r.formData)o=bo(r.formData),c=r.formData;else if(r.body instanceof FormData)o=bo(r.body),c=r.body;else if(r.body instanceof URLSearchParams)o=r.body,c=pd(o);else if(r.body==null)o=new URLSearchParams,c=new FormData;else try{o=new URLSearchParams(r.body),c=pd(o)}catch{return n()}let u={formMethod:s,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Ze(u.formMethod))return{path:a,submission:u};let h=Yt(a);return t&&h.search&&bc(h.search)&&o.append("index",""),h.search=`?${o}`,{path:Kt(h),submission:u}}function sd(t,a,r,n,i,s,l,o,c,u,h,d,x,S,j,b,E,f,p,v,R){var _;let P=v?xt(v[1])?v[1].error:v[1].data:void 0,k=i.createURL(s.location),q=i.createURL(c),w;if(h&&s.errors){let H=Object.keys(s.errors)[0];w=l.findIndex(ae=>ae.route.id===H)}else if(v&&xt(v[1])){let H=v[0];w=l.findIndex(ae=>ae.route.id===H)-1}let $=v?v[1].statusCode:void 0,F=$&&$>=400,le={currentUrl:k,currentParams:((_=s.matches[0])==null?void 0:_.params)||{},nextUrl:q,nextParams:l[0].params,...o,actionResult:P,actionStatus:$},ee=Vn(l),je=l.map((H,ae)=>{let{route:O}=H,B=null;if(w!=null&&ae>w)B=!1;else if(O.lazy)B=!0;else if(!jc(O))B=!1;else if(h){let{shouldLoad:ye}=rh(O,s.loaderData,s.errors);B=ye}else mj(s.loaderData,s.matches[ae],H)&&(B=!0);if(B!==null)return vo(r,n,t,ee,H,u,a,B);let G=!1;typeof R=="boolean"?G=R:F?G=!1:(d||k.pathname+k.search===q.pathname+q.search||k.search!==q.search||hj(s.matches[ae],H))&&(G=!0);let re={...le,defaultShouldRevalidate:G},de=vn(H,re);return vo(r,n,t,ee,H,u,a,de,re,R)}),te=[];return j.forEach((H,ae)=>{if(h||!l.some(Fe=>Fe.route.id===H.routeId)||S.has(ae))return;let O=s.fetchers.get(ae),B=O&&O.state!=="idle"&&O.data===void 0,G=Sa(E,H.path,f);if(!G){if(p&&B)return;te.push({key:ae,routeId:H.routeId,path:H.path,matches:null,match:null,request:null,controller:null});return}if(b.has(ae))return;let re=Oi(G,H.path),de=new AbortController,ye=pr(i,H.path,de.signal),Le=null;if(x.has(ae))x.delete(ae),Le=Nr(r,n,ye,G,re,u,a);else if(B)d&&(Le=Nr(r,n,ye,G,re,u,a));else{let Fe;typeof R=="boolean"?Fe=R:F?Fe=!1:Fe=d;let Ee={...le,defaultShouldRevalidate:Fe};vn(re,Ee)&&(Le=Nr(r,n,ye,G,re,u,a,Ee))}Le&&te.push({key:ae,routeId:H.routeId,path:H.path,matches:Le,match:re,request:ye,controller:de})}),{dsMatches:je,revalidatingFetchers:te}}function jc(t){return t.loader!=null||t.middleware!=null&&t.middleware.length>0}function rh(t,a,r){if(t.lazy)return{shouldLoad:!0,renderFallback:!0};if(!jc(t))return{shouldLoad:!1,renderFallback:!1};let n=a!=null&&t.id in a,i=r!=null&&r[t.id]!==void 0;if(!n&&i)return{shouldLoad:!1,renderFallback:!1};if(typeof t.loader=="function"&&t.loader.hydrate===!0)return{shouldLoad:!0,renderFallback:!n};let s=!n&&!i;return{shouldLoad:s,renderFallback:s}}function mj(t,a,r){let n=!a||r.route.id!==a.route.id,i=!t.hasOwnProperty(r.route.id);return n||i}function hj(t,a){let r=t.route.path;return t.pathname!==a.pathname||r!=null&&r.endsWith("*")&&t.params["*"]!==a.params["*"]}function vn(t,a){if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate(a);if(typeof r=="boolean")return r}return a.defaultShouldRevalidate}function ld(t,a,r,n,i,s){let l;if(t){let u=n[t];ue(u,`No route found to patch children into: routeId = ${t}`),u.children||(u.children=[]),l=u.children}else l=r;let o=[],c=[];if(a.forEach(u=>{let h=l.find(d=>nh(u,d));h?c.push({existingRoute:h,newRoute:u}):o.push(u)}),o.length>0){let u=Dn(o,i,[t||"_","patch",String((l==null?void 0:l.length)||"0")],n);l.push(...u)}if(s&&c.length>0)for(let u=0;u<c.length;u++){let{existingRoute:h,newRoute:d}=c[u],x=h,[S]=Dn([d],i,[],{},!0);Object.assign(x,{element:S.element?S.element:x.element,errorElement:S.errorElement?S.errorElement:x.errorElement,hydrateFallbackElement:S.hydrateFallbackElement?S.hydrateFallbackElement:x.hydrateFallbackElement})}}function nh(t,a){var r;return"id"in t&&"id"in a&&t.id===a.id?!0:t.index===a.index&&t.path===a.path&&t.caseSensitive===a.caseSensitive?(!t.children||t.children.length===0)&&(!a.children||a.children.length===0)?!0:((r=t.children)==null?void 0:r.every((n,i)=>{var s;return(s=a.children)==null?void 0:s.some(l=>nh(n,l))}))??!1:!1}var od=new WeakMap,ih=({key:t,route:a,manifest:r,mapRouteProperties:n})=>{let i=r[a.id];if(ue(i,"No route found in manifest"),!i.lazy||typeof i.lazy!="object")return;let s=i.lazy[t];if(!s)return;let l=od.get(i);l||(l={},od.set(i,l));let o=l[t];if(o)return o;let c=(async()=>{let u=Pg(t),d=i[t]!==void 0&&t!=="hasErrorBoundary";if(u)Ie(!u,"Route property "+t+" is not a supported lazy route property. This property will be ignored."),l[t]=Promise.resolve();else if(d)Ie(!1,`Route "${i.id}" has a static property "${t}" defined. The lazy property will be ignored.`);else{let x=await s();x!=null&&(Object.assign(i,{[t]:x}),Object.assign(i,n(i)))}typeof i.lazy=="object"&&(i.lazy[t]=void 0,Object.values(i.lazy).every(x=>x===void 0)&&(i.lazy=void 0))})();return l[t]=c,c},cd=new WeakMap;function fj(t,a,r,n,i){let s=r[t.id];if(ue(s,"No route found in manifest"),!t.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof t.lazy=="function"){let h=cd.get(s);if(h)return{lazyRoutePromise:h,lazyHandlerPromise:h};let d=(async()=>{ue(typeof t.lazy=="function","No lazy route function found");let x=await t.lazy(),S={};for(let j in x){let b=x[j];if(b===void 0)continue;let E=kg(j),p=s[j]!==void 0&&j!=="hasErrorBoundary";E?Ie(!E,"Route property "+j+" is not a supported property to be returned from a lazy route function. This property will be ignored."):p?Ie(!p,`Route "${s.id}" has a static property "${j}" defined but its lazy function is also returning a value for this property. The lazy route property "${j}" will be ignored.`):S[j]=b}Object.assign(s,S),Object.assign(s,{...n(s),lazy:void 0})})();return cd.set(s,d),d.catch(()=>{}),{lazyRoutePromise:d,lazyHandlerPromise:d}}let l=Object.keys(t.lazy),o=[],c;for(let h of l){if(i&&i.includes(h))continue;let d=ih({key:h,route:t,manifest:r,mapRouteProperties:n});d&&(o.push(d),h===a&&(c=d))}let u=o.length>0?Promise.all(o).then(()=>{}):void 0;return u==null||u.catch(()=>{}),c==null||c.catch(()=>{}),{lazyRoutePromise:u,lazyHandlerPromise:c}}async function ud(t){let a=t.matches.filter(i=>i.shouldLoad),r={};return(await Promise.all(a.map(i=>i.resolve()))).forEach((i,s)=>{r[a[s].route.id]=i}),r}async function xj(t){return t.matches.some(a=>a.route.middleware)?sh(t,()=>ud(t)):ud(t)}function sh(t,a){return gj(t,a,n=>{if(Tj(n))throw n;return n},Aj,r);function r(n,i,s){if(s)return Promise.resolve(Object.assign(s.value,{[i]:{type:"error",result:n}}));{let{matches:l}=t,o=Math.min(Math.max(l.findIndex(u=>u.route.id===i),0),Math.max(l.findIndex(u=>u.shouldCallHandler()),0)),c=Ea(l,l[o].route.id).route.id;return Promise.resolve({[c]:{type:"error",result:n}})}}}async function gj(t,a,r,n,i){let{matches:s,request:l,params:o,context:c,unstable_pattern:u}=t,h=s.flatMap(x=>x.route.middleware?x.route.middleware.map(S=>[x.route.id,S]):[]);return await lh({request:l,params:o,context:c,unstable_pattern:u},h,a,r,n,i)}async function lh(t,a,r,n,i,s,l=0){let{request:o}=t;if(o.signal.aborted)throw o.signal.reason??new Error(`Request aborted: ${o.method} ${o.url}`);let c=a[l];if(!c)return await r();let[u,h]=c,d,x=async()=>{if(d)throw new Error("You may only call `next()` once per middleware");try{return d={value:await lh(t,a,r,n,i,s,l+1)},d.value}catch(S){return d={value:await s(S,u,d)},d.value}};try{let S=await h(t,x),j=S!=null?n(S):void 0;return i(j)?j:d?j??d.value:(d={value:await x()},d.value)}catch(S){return await s(S,u,d)}}function oh(t,a,r,n,i){let s=ih({key:"middleware",route:n.route,manifest:a,mapRouteProperties:t}),l=fj(n.route,Ze(r.method)?"action":"loader",a,t,i);return{middleware:s,route:l.lazyRoutePromise,handler:l.lazyHandlerPromise}}function vo(t,a,r,n,i,s,l,o,c=null,u){let h=!1,d=oh(t,a,r,i,s);return{...i,_lazyPromises:d,shouldLoad:o,shouldRevalidateArgs:c,shouldCallHandler(x){return h=!0,c?typeof u=="boolean"?vn(i,{...c,defaultShouldRevalidate:u}):typeof x=="boolean"?vn(i,{...c,defaultShouldRevalidate:x}):vn(i,c):o},resolve(x){let{lazy:S,loader:j,middleware:b}=i.route,E=h||o||x&&!Ze(r.method)&&(S||j),f=b&&b.length>0&&!j&&!S;return E&&(Ze(r.method)||!f)?vj({request:r,unstable_pattern:n,match:i,lazyHandlerPromise:d==null?void 0:d.handler,lazyRoutePromise:d==null?void 0:d.route,handlerOverride:x,scopedContext:l}):Promise.resolve({type:"data",result:void 0})}}}function Nr(t,a,r,n,i,s,l,o=null){return n.map(c=>c.route.id!==i.route.id?{...c,shouldLoad:!1,shouldRevalidateArgs:o,shouldCallHandler:()=>!1,_lazyPromises:oh(t,a,r,c,s),resolve:()=>Promise.resolve({type:"data",result:void 0})}:vo(t,a,r,Vn(n),c,s,l,!0,o))}async function jj(t,a,r,n,i,s){r.some(u=>{var h;return(h=u._lazyPromises)==null?void 0:h.middleware})&&await Promise.all(r.map(u=>{var h;return(h=u._lazyPromises)==null?void 0:h.middleware}));let l={request:a,unstable_pattern:Vn(r),params:r[0].params,context:i,matches:r},c=await t({...l,fetcherKey:n,runClientMiddleware:u=>{let h=l;return sh(h,()=>u({...h,fetcherKey:n,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(r.flatMap(u=>{var h,d;return[(h=u._lazyPromises)==null?void 0:h.handler,(d=u._lazyPromises)==null?void 0:d.route]}))}catch{}return c}async function vj({request:t,unstable_pattern:a,match:r,lazyHandlerPromise:n,lazyRoutePromise:i,handlerOverride:s,scopedContext:l}){let o,c,u=Ze(t.method),h=u?"action":"loader",d=x=>{let S,j=new Promise((f,p)=>S=p);c=()=>S(),t.signal.addEventListener("abort",c);let b=f=>typeof x!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${h}" [routeId: ${r.route.id}]`)):x({request:t,unstable_pattern:a,params:r.params,context:l},...f!==void 0?[f]:[]),E=(async()=>{try{return{type:"data",result:await(s?s(p=>b(p)):b())}}catch(f){return{type:"error",result:f}}})();return Promise.race([E,j])};try{let x=u?r.route.action:r.route.loader;if(n||i)if(x){let S,[j]=await Promise.all([d(x).catch(b=>{S=b}),n,i]);if(S!==void 0)throw S;o=j}else{await n;let S=u?r.route.action:r.route.loader;if(S)[o]=await Promise.all([d(S),i]);else if(h==="action"){let j=new URL(t.url),b=j.pathname+j.search;throw Et(405,{method:t.method,pathname:b,routeId:r.route.id})}else return{type:"data",result:void 0}}else if(x)o=await d(x);else{let S=new URL(t.url),j=S.pathname+S.search;throw Et(404,{pathname:j})}}catch(x){return{type:"error",result:x}}finally{c&&t.signal.removeEventListener("abort",c)}return o}async function bj(t){let a=t.headers.get("Content-Type");return a&&/\bapplication\/json\b/.test(a)?t.body==null?null:t.json():t.text()}async function yj(t){var n,i,s,l,o;let{result:a,type:r}=t;if(vc(a)){let c;try{c=await bj(a)}catch(u){return{type:"error",error:u}}return r==="error"?{type:"error",error:new $n(a.status,a.statusText,c),statusCode:a.status,headers:a.headers}:{type:"data",data:c,statusCode:a.status,headers:a.headers}}return r==="error"?xd(a)?a.data instanceof Error?{type:"error",error:a.data,statusCode:(n=a.init)==null?void 0:n.status,headers:(i=a.init)!=null&&i.headers?new Headers(a.init.headers):void 0}:{type:"error",error:wj(a),statusCode:Fn(a)?a.status:void 0,headers:(s=a.init)!=null&&s.headers?new Headers(a.init.headers):void 0}:{type:"error",error:a,statusCode:Fn(a)?a.status:void 0}:xd(a)?{type:"data",data:a.data,statusCode:(l=a.init)==null?void 0:l.status,headers:(o=a.init)!=null&&o.headers?new Headers(a.init.headers):void 0}:{type:"data",data:a}}function Sj(t,a,r,n,i){let s=t.headers.get("Location");if(ue(s,"Redirects returned/thrown from loaders/actions must have a Location header"),!xc(s)){let l=n.slice(0,n.findIndex(o=>o.route.id===r)+1);s=jo(new URL(a.url),l,i,s),t.headers.set("Location",s)}return t}function dd(t,a,r,n){let i=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(xc(t)){let s=t,l=s.startsWith("//")?new URL(a.protocol+s):new URL(s);if(i.includes(l.protocol))throw new Error("Invalid redirect location");let o=Tt(l.pathname,r)!=null;if(l.origin===a.origin&&o)return l.pathname+l.search+l.hash}try{let s=n.createURL(t);if(i.includes(s.protocol))throw new Error("Invalid redirect location")}catch{}return t}function pr(t,a,r,n){let i=t.createURL(ch(a)).toString(),s={signal:r};if(n&&Ze(n.formMethod)){let{formMethod:l,formEncType:o}=n;s.method=l.toUpperCase(),o==="application/json"?(s.headers=new Headers({"Content-Type":o}),s.body=JSON.stringify(n.json)):o==="text/plain"?s.body=n.text:o==="application/x-www-form-urlencoded"&&n.formData?s.body=bo(n.formData):s.body=n.formData}return new Request(i,s)}function bo(t){let a=new URLSearchParams;for(let[r,n]of t.entries())a.append(r,typeof n=="string"?n:n.name);return a}function pd(t){let a=new FormData;for(let[r,n]of t.entries())a.append(r,n);return a}function Ej(t,a,r,n=!1,i=!1){let s={},l=null,o,c=!1,u={},h=r&&xt(r[1])?r[1].error:void 0;return t.forEach(d=>{if(!(d.route.id in a))return;let x=d.route.id,S=a[x];if(ue(!Ka(S),"Cannot handle redirect results in processLoaderData"),xt(S)){let j=S.error;if(h!==void 0&&(j=h,h=void 0),l=l||{},i)l[x]=j;else{let b=Ea(t,x);l[b.route.id]==null&&(l[b.route.id]=j)}n||(s[x]=ah),c||(c=!0,o=Fn(S.error)?S.error.status:500),S.headers&&(u[x]=S.headers)}else s[x]=S.data,S.statusCode&&S.statusCode!==200&&!c&&(o=S.statusCode),S.headers&&(u[x]=S.headers)}),h!==void 0&&r&&(l={[r[0]]:h},r[2]&&(s[r[2]]=void 0)),{loaderData:s,errors:l,statusCode:o||200,loaderHeaders:u}}function md(t,a,r,n,i,s){let{loaderData:l,errors:o}=Ej(a,r,n);return i.filter(c=>!c.matches||c.matches.some(u=>u.shouldLoad)).forEach(c=>{let{key:u,match:h,controller:d}=c;if(d&&d.signal.aborted)return;let x=s[u];if(ue(x,"Did not find corresponding fetcher result"),xt(x)){let S=Ea(t.matches,h==null?void 0:h.route.id);o&&o[S.route.id]||(o={...o,[S.route.id]:x.error}),t.fetchers.delete(u)}else if(Ka(x))ue(!1,"Unhandled fetcher revalidation redirect");else{let S=ra(x.data);t.fetchers.set(u,S)}}),{loaderData:l,errors:o}}function hd(t,a,r,n){let i=Object.entries(a).filter(([,s])=>s!==ah).reduce((s,[l,o])=>(s[l]=o,s),{});for(let s of r){let l=s.route.id;if(!a.hasOwnProperty(l)&&t.hasOwnProperty(l)&&s.route.loader&&(i[l]=t[l]),n&&n.hasOwnProperty(l))break}return i}function fd(t){return t?xt(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Ea(t,a){return(a?t.slice(0,t.findIndex(n=>n.route.id===a)+1):[...t]).reverse().find(n=>n.route.hasErrorBoundary===!0)||t[0]}function vi(t){let a=t.length===1?t[0]:t.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:a}],route:a}}function Et(t,{pathname:a,routeId:r,method:n,type:i,message:s}={}){let l="Unknown Server Error",o="Unknown @remix-run/router error";return t===400?(l="Bad Request",n&&a&&r?o=`You made a ${n} request to "${a}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`:i==="invalid-body"&&(o="Unable to encode submission body")):t===403?(l="Forbidden",o=`Route "${r}" does not match URL "${a}"`):t===404?(l="Not Found",o=`No route matches URL "${a}"`):t===405&&(l="Method Not Allowed",n&&a&&r?o=`You made a ${n.toUpperCase()} request to "${a}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`:n&&(o=`Invalid request method "${n.toUpperCase()}"`)),new $n(t||500,l,new Error(o),!0)}function bi(t){let a=Object.entries(t);for(let r=a.length-1;r>=0;r--){let[n,i]=a[r];if(Ka(i))return{key:n,result:i}}}function ch(t){let a=typeof t=="string"?Yt(t):t;return Kt({...a,hash:""})}function Cj(t,a){return t.pathname!==a.pathname||t.search!==a.search?!1:t.hash===""?a.hash!=="":t.hash===a.hash?!0:a.hash!==""}function wj(t){var a,r;return new $n(((a=t.init)==null?void 0:a.status)??500,((r=t.init)==null?void 0:r.statusText)??"Internal Server Error",t.data)}function Aj(t){return t!=null&&typeof t=="object"&&Object.entries(t).every(([a,r])=>typeof a=="string"&&Lj(r))}function Lj(t){return t!=null&&typeof t=="object"&&"type"in t&&"result"in t&&(t.type==="data"||t.type==="error")}function Rj(t){return vc(t.result)&&eh.has(t.result.status)}function xt(t){return t.type==="error"}function Ka(t){return(t&&t.type)==="redirect"}function xd(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function vc(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function Mj(t){return eh.has(t)}function Tj(t){return vc(t)&&Mj(t.status)&&t.headers.has("Location")}function Pj(t){return lj.has(t.toUpperCase())}function Ze(t){return ij.has(t.toUpperCase())}function bc(t){return new URLSearchParams(t).getAll("index").some(a=>a==="")}function Oi(t,a){let r=typeof a=="string"?Yt(a).search:a.search;if(t[t.length-1].route.index&&bc(r||""))return t[t.length-1];let n=Wm(t);return n[n.length-1]}function gd(t){let{formMethod:a,formAction:r,formEncType:n,text:i,formData:s,json:l}=t;if(!(!a||!r||!n)){if(i!=null)return{formMethod:a,formAction:r,formEncType:n,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:a,formAction:r,formEncType:n,formData:s,json:void 0,text:void 0};if(l!==void 0)return{formMethod:a,formAction:r,formEncType:n,formData:void 0,json:l,text:void 0}}}function fl(t,a){return a?{state:"loading",location:t,formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Nj(t,a){return{state:"submitting",location:t,formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text}}function tn(t,a){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:a}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:a}}function kj(t,a){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:a?a.data:void 0}}function ra(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function qj(t,a){try{let r=t.sessionStorage.getItem(th);if(r){let n=JSON.parse(r);for(let[i,s]of Object.entries(n||{}))s&&Array.isArray(s)&&a.set(i,new Set(s||[]))}}catch{}}function _j(t,a){if(a.size>0){let r={};for(let[n,i]of a)r[n]=[...i];try{t.sessionStorage.setItem(th,JSON.stringify(r))}catch(n){Ie(!1,`Failed to save applied view transitions in sessionStorage (${n}).`)}}}function jd(){let t,a,r=new Promise((n,i)=>{t=async s=>{n(s);try{await r}catch{}},a=async s=>{i(s);try{await r}catch{}}});return{promise:r,resolve:t,reject:a}}var sr=A.createContext(null);sr.displayName="DataRouter";var Qn=A.createContext(null);Qn.displayName="DataRouterState";var uh=A.createContext(!1);function Oj(){return A.useContext(uh)}var yc=A.createContext({isTransitioning:!1});yc.displayName="ViewTransition";var dh=A.createContext(new Map);dh.displayName="Fetchers";var Ij=A.createContext(null);Ij.displayName="Await";var Pt=A.createContext(null);Pt.displayName="Navigation";var Ps=A.createContext(null);Ps.displayName="Location";var Xt=A.createContext({outlet:null,matches:[],isDataRoute:!1});Xt.displayName="Route";var Sc=A.createContext(null);Sc.displayName="RouteError";var ph="REACT_ROUTER_ERROR",Dj="REDIRECT",Fj="ROUTE_ERROR_RESPONSE";function zj(t){if(t.startsWith(`${ph}:${Dj}:{`))try{let a=JSON.parse(t.slice(28));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.location=="string"&&typeof a.reloadDocument=="boolean"&&typeof a.replace=="boolean")return a}catch{}}function Bj(t){if(t.startsWith(`${ph}:${Fj}:{`))try{let a=JSON.parse(t.slice(40));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string")return new $n(a.status,a.statusText,a.data)}catch{}}function Uj(t,{relative:a}={}){ue(Jn(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=A.useContext(Pt),{hash:i,pathname:s,search:l}=Wn(t,{relative:a}),o=s;return r!=="/"&&(o=s==="/"?r:zt([r,s])),n.createHref({pathname:o,search:l,hash:i})}function Jn(){return A.useContext(Ps)!=null}function Zt(){return ue(Jn(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Ps).location}var mh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function hh(t){A.useContext(Pt).static||A.useLayoutEffect(t)}function Gj(){let{isDataRoute:t}=A.useContext(Xt);return t?nv():Hj()}function Hj(){ue(Jn(),"useNavigate() may be used only in the context of a <Router> component.");let t=A.useContext(sr),{basename:a,navigator:r}=A.useContext(Pt),{matches:n}=A.useContext(Xt),{pathname:i}=Zt(),s=JSON.stringify(gc(n)),l=A.useRef(!1);return hh(()=>{l.current=!0}),A.useCallback((c,u={})=>{if(Ie(l.current,mh),!l.current)return;if(typeof c=="number"){r.go(c);return}let h=Ts(c,JSON.parse(s),i,u.relative==="path");t==null&&a!=="/"&&(h.pathname=h.pathname==="/"?a:zt([a,h.pathname])),(u.replace?r.replace:r.push)(h,u.state,u)},[a,r,s,i,t])}var $j=A.createContext(null);function Vj(t){let a=A.useContext(Xt).outlet;return A.useMemo(()=>a&&A.createElement($j.Provider,{value:t},a),[a,t])}function Wn(t,{relative:a}={}){let{matches:r}=A.useContext(Xt),{pathname:n}=Zt(),i=JSON.stringify(gc(r));return A.useMemo(()=>Ts(t,JSON.parse(i),n,a==="path"),[t,i,n,a])}function Qj(t,a,r){ue(Jn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:n}=A.useContext(Pt),{matches:i}=A.useContext(Xt),s=i[i.length-1],l=s?s.params:{},o=s?s.pathname:"/",c=s?s.pathnameBase:"/",u=s&&s.route;{let E=u&&u.path||"";xh(o,!u||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let h=Zt(),d;d=h;let x=d.pathname||"/",S=x;if(c!=="/"){let E=c.replace(/^\//,"").split("/");S="/"+x.replace(/^\//,"").split("/").slice(E.length).join("/")}let j=Sa(t,{pathname:S});return Ie(u||j!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),Ie(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Xj(j&&j.map(E=>Object.assign({},E,{params:Object.assign({},l,E.params),pathname:zt([c,n.encodeLocation?n.encodeLocation(E.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?c:zt([c,n.encodeLocation?n.encodeLocation(E.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathnameBase])})),i,r)}function Jj(){let t=rv(),a=Fn(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,n="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:n},s={padding:"2px 4px",backgroundColor:n},l=null;return console.error("Error handled by React Router default ErrorBoundary:",t),l=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:s},"ErrorBoundary")," or"," ",A.createElement("code",{style:s},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},a),r?A.createElement("pre",{style:i},r):null,l)}var Wj=A.createElement(Jj,null),fh=class extends A.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,a){return a.location!==t.location||a.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:a.error,location:a.location,revalidation:t.revalidation||a.revalidation}}componentDidCatch(t,a){this.props.onError?this.props.onError(t,a):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const r=Bj(t.digest);r&&(t=r)}let a=t!==void 0?A.createElement(Xt.Provider,{value:this.props.routeContext},A.createElement(Sc.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?A.createElement(Kj,{error:t},a):a}};fh.contextType=uh;var xl=new WeakMap;function Kj({children:t,error:a}){let{basename:r}=A.useContext(Pt);if(typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){let n=zj(a.digest);if(n){let i=xl.get(a);if(i)throw i;let s=Ym(n.location,r);if(Km&&!xl.get(a))if(s.isExternal||n.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const l=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:n.replace}));throw xl.set(a,l),l}return A.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return t}function Yj({routeContext:t,match:a,children:r}){let n=A.useContext(sr);return n&&n.static&&n.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=a.route.id),A.createElement(Xt.Provider,{value:t},r)}function Xj(t,a=[],r){let n=r==null?void 0:r.state;if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(a.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,s=n==null?void 0:n.errors;if(s!=null){let h=i.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);ue(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,h+1))}let l=!1,o=-1;if(r&&n){l=n.renderFallback;for(let h=0;h<i.length;h++){let d=i[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(o=h),d.route.id){let{loaderData:x,errors:S}=n,j=d.route.loader&&!x.hasOwnProperty(d.route.id)&&(!S||S[d.route.id]===void 0);if(d.route.lazy||j){r.isStatic&&(l=!0),o>=0?i=i.slice(0,o+1):i=[i[0]];break}}}}let c=r==null?void 0:r.onError,u=n&&c?(h,d)=>{var x,S;c(h,{location:n.location,params:((S=(x=n.matches)==null?void 0:x[0])==null?void 0:S.params)??{},unstable_pattern:Vn(n.matches),errorInfo:d})}:void 0;return i.reduceRight((h,d,x)=>{let S,j=!1,b=null,E=null;n&&(S=s&&d.route.id?s[d.route.id]:void 0,b=d.route.errorElement||Wj,l&&(o<0&&x===0?(xh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,E=null):o===x&&(j=!0,E=d.route.hydrateFallbackElement||null)));let f=a.concat(i.slice(0,x+1)),p=()=>{let v;return S?v=b:j?v=E:d.route.Component?v=A.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=h,A.createElement(Yj,{match:d,routeContext:{outlet:h,matches:f,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||x===0)?A.createElement(fh,{location:n.location,revalidation:n.revalidation,component:b,error:S,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0},onError:u}):p()},null)}function Ec(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zj(t){let a=A.useContext(sr);return ue(a,Ec(t)),a}function ev(t){let a=A.useContext(Qn);return ue(a,Ec(t)),a}function tv(t){let a=A.useContext(Xt);return ue(a,Ec(t)),a}function Cc(t){let a=tv(t),r=a.matches[a.matches.length-1];return ue(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function av(){return Cc("useRouteId")}function rv(){var n;let t=A.useContext(Sc),a=ev("useRouteError"),r=Cc("useRouteError");return t!==void 0?t:(n=a.errors)==null?void 0:n[r]}function nv(){let{router:t}=Zj("useNavigate"),a=Cc("useNavigate"),r=A.useRef(!1);return hh(()=>{r.current=!0}),A.useCallback(async(i,s={})=>{Ie(r.current,mh),r.current&&(typeof i=="number"?await t.navigate(i):await t.navigate(i,{fromRouteId:a,...s}))},[t,a])}var vd={};function xh(t,a,r){!a&&!vd[t]&&(vd[t]=!0,Ie(!1,r))}var bd={};function yd(t,a){!t&&!bd[a]&&(bd[a]=!0,console.warn(a))}var iv="useOptimistic",Sd=hf[iv],sv=()=>{};function lv(t){return Sd?Sd(t):[t,sv]}function ov(t){let a={hasErrorBoundary:t.hasErrorBoundary||t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&(t.element&&Ie(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(a,{element:A.createElement(t.Component),Component:void 0})),t.HydrateFallback&&(t.hydrateFallbackElement&&Ie(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(a,{hydrateFallbackElement:A.createElement(t.HydrateFallback),HydrateFallback:void 0})),t.ErrorBoundary&&(t.errorElement&&Ie(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(a,{errorElement:A.createElement(t.ErrorBoundary),ErrorBoundary:void 0})),a}var cv=["HydrateFallback","hydrateFallbackElement"],uv=class{constructor(){this.status="pending",this.promise=new Promise((t,a)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",a(r))}})}};function dv({router:t,flushSync:a,onError:r,unstable_useTransitions:n}){n=Oj()||n;let[s,l]=A.useState(t.state),[o,c]=lv(s),[u,h]=A.useState(),[d,x]=A.useState({isTransitioning:!1}),[S,j]=A.useState(),[b,E]=A.useState(),[f,p]=A.useState(),v=A.useRef(new Map),R=A.useCallback((w,{deletedFetchers:$,newErrors:F,flushSync:le,viewTransitionOpts:ee})=>{F&&r&&Object.values(F).forEach(te=>{var _;return r(te,{location:w.location,params:((_=w.matches[0])==null?void 0:_.params)??{},unstable_pattern:Vn(w.matches)})}),w.fetchers.forEach((te,_)=>{te.data!==void 0&&v.current.set(_,te.data)}),$.forEach(te=>v.current.delete(te)),yd(le===!1||a!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let je=t.window!=null&&t.window.document!=null&&typeof t.window.document.startViewTransition=="function";if(yd(ee==null||je,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!ee||!je){a&&le?a(()=>l(w)):n===!1?l(w):A.startTransition(()=>{n===!0&&c(te=>Ed(te,w)),l(w)});return}if(a&&le){a(()=>{b&&(S==null||S.resolve(),b.skipTransition()),x({isTransitioning:!0,flushSync:!0,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation})});let te=t.window.document.startViewTransition(()=>{a(()=>l(w))});te.finished.finally(()=>{a(()=>{j(void 0),E(void 0),h(void 0),x({isTransitioning:!1})})}),a(()=>E(te));return}b?(S==null||S.resolve(),b.skipTransition(),p({state:w,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation})):(h(w),x({isTransitioning:!0,flushSync:!1,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation}))},[t.window,a,b,S,n,c,r]);A.useLayoutEffect(()=>t.subscribe(R),[t,R]),A.useEffect(()=>{d.isTransitioning&&!d.flushSync&&j(new uv)},[d]),A.useEffect(()=>{if(S&&u&&t.window){let w=u,$=S.promise,F=t.window.document.startViewTransition(async()=>{n===!1?l(w):A.startTransition(()=>{n===!0&&c(le=>Ed(le,w)),l(w)}),await $});F.finished.finally(()=>{j(void 0),E(void 0),h(void 0),x({isTransitioning:!1})}),E(F)}},[u,S,t.window,n,c]),A.useEffect(()=>{S&&u&&o.location.key===u.location.key&&S.resolve()},[S,b,o.location,u]),A.useEffect(()=>{!d.isTransitioning&&f&&(h(f.state),x({isTransitioning:!0,flushSync:!1,currentLocation:f.currentLocation,nextLocation:f.nextLocation}),p(void 0))},[d.isTransitioning,f]);let P=A.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:w=>t.navigate(w),push:(w,$,F)=>t.navigate(w,{state:$,preventScrollReset:F==null?void 0:F.preventScrollReset}),replace:(w,$,F)=>t.navigate(w,{replace:!0,state:$,preventScrollReset:F==null?void 0:F.preventScrollReset})}),[t]),k=t.basename||"/",q=A.useMemo(()=>({router:t,navigator:P,static:!1,basename:k,onError:r}),[t,P,k,r]);return A.createElement(A.Fragment,null,A.createElement(sr.Provider,{value:q},A.createElement(Qn.Provider,{value:o},A.createElement(dh.Provider,{value:v.current},A.createElement(yc.Provider,{value:d},A.createElement(fv,{basename:k,location:o.location,navigationType:o.historyAction,navigator:P,unstable_useTransitions:n},A.createElement(pv,{routes:t.routes,future:t.future,state:o,isStatic:!1,onError:r})))))),null)}function Ed(t,a){return{...t,navigation:a.navigation.state!=="idle"?a.navigation:t.navigation,revalidation:a.revalidation!=="idle"?a.revalidation:t.revalidation,actionData:a.navigation.state!=="submitting"?a.actionData:t.actionData,fetchers:a.fetchers}}var pv=A.memo(mv);function mv({routes:t,future:a,state:r,isStatic:n,onError:i}){return Qj(t,void 0,{state:r,isStatic:n,onError:i})}function hv(t){return Vj(t.context)}function fv({basename:t="/",children:a=null,location:r,navigationType:n="POP",navigator:i,static:s=!1,unstable_useTransitions:l}){ue(!Jn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),c=A.useMemo(()=>({basename:o,navigator:i,static:s,unstable_useTransitions:l,future:{}}),[o,i,s,l]);typeof r=="string"&&(r=Yt(r));let{pathname:u="/",search:h="",hash:d="",state:x=null,key:S="default",unstable_mask:j}=r,b=A.useMemo(()=>{let E=Tt(u,o);return E==null?null:{location:{pathname:E,search:h,hash:d,state:x,key:S,unstable_mask:j},navigationType:n}},[o,u,h,d,x,S,n,j]);return Ie(b!=null,`<Router basename="${o}"> is not able to match the URL "${u}${h}${d}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:A.createElement(Pt.Provider,{value:c},A.createElement(Ps.Provider,{children:a,value:b}))}var Ii="get",Di="application/x-www-form-urlencoded";function Ns(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function xv(t){return Ns(t)&&t.tagName.toLowerCase()==="button"}function gv(t){return Ns(t)&&t.tagName.toLowerCase()==="form"}function jv(t){return Ns(t)&&t.tagName.toLowerCase()==="input"}function vv(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function bv(t,a){return t.button===0&&(!a||a==="_self")&&!vv(t)}var yi=null;function yv(){if(yi===null)try{new FormData(document.createElement("form"),0),yi=!1}catch{yi=!0}return yi}var Sv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gl(t){return t!=null&&!Sv.has(t)?(Ie(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Di}"`),null):t}function Ev(t,a){let r,n,i,s,l;if(gv(t)){let o=t.getAttribute("action");n=o?Tt(o,a):null,r=t.getAttribute("method")||Ii,i=gl(t.getAttribute("enctype"))||Di,s=new FormData(t)}else if(xv(t)||jv(t)&&(t.type==="submit"||t.type==="image")){let o=t.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=t.getAttribute("formaction")||o.getAttribute("action");if(n=c?Tt(c,a):null,r=t.getAttribute("formmethod")||o.getAttribute("method")||Ii,i=gl(t.getAttribute("formenctype"))||gl(o.getAttribute("enctype"))||Di,s=new FormData(o,t),!yv()){let{name:u,type:h,value:d}=t;if(h==="image"){let x=u?`${u}.`:"";s.append(`${x}x`,"0"),s.append(`${x}y`,"0")}else u&&s.append(u,d)}}else{if(Ns(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Ii,n=null,i=Di,l=t}return s&&i==="text/plain"&&(l=s,s=void 0),{action:n,method:r.toLowerCase(),encType:i,formData:s,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function wc(t,a){if(t===!1||t===null||typeof t>"u")throw new Error(a)}function Cv(t,a,r,n){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${n}`:i.pathname=`${i.pathname}.${n}`:i.pathname==="/"?i.pathname=`_root.${n}`:a&&Tt(i.pathname,a)==="/"?i.pathname=`${a.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function wv(t,a){if(t.id in a)return a[t.id];try{let r=await import(t.module);return a[t.id]=r,r}catch(r){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Av(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Lv(t,a,r){let n=await Promise.all(t.map(async i=>{let s=a.routes[i.route.id];if(s){let l=await wv(s,r);return l.links?l.links():[]}return[]}));return Pv(n.flat(1).filter(Av).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Cd(t,a,r,n,i,s){let l=(c,u)=>r[u]?c.route.id!==r[u].route.id:!0,o=(c,u)=>{var h;return r[u].pathname!==c.pathname||((h=r[u].route.path)==null?void 0:h.endsWith("*"))&&r[u].params["*"]!==c.params["*"]};return s==="assets"?a.filter((c,u)=>l(c,u)||o(c,u)):s==="data"?a.filter((c,u)=>{var d;let h=n.routes[c.route.id];if(!h||!h.hasLoader)return!1;if(l(c,u)||o(c,u))return!0;if(c.route.shouldRevalidate){let x=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((d=r[0])==null?void 0:d.params)||{},nextUrl:new URL(t,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Rv(t,a,{includeHydrateFallback:r}={}){return Mv(t.map(n=>{let i=a.routes[n.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),r&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function Mv(t){return[...new Set(t)]}function Tv(t){let a={},r=Object.keys(t).sort();for(let n of r)a[n]=t[n];return a}function Pv(t,a){let r=new Set;return new Set(a),t.reduce((n,i)=>{let s=JSON.stringify(Tv(i));return r.has(s)||(r.add(s),n.push({key:s,link:i})),n},[])}function gh(){let t=A.useContext(sr);return wc(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Nv(){let t=A.useContext(Qn);return wc(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Ac=A.createContext(void 0);Ac.displayName="FrameworkContext";function jh(){let t=A.useContext(Ac);return wc(t,"You must render this element inside a <HydratedRouter> element"),t}function kv(t,a){let r=A.useContext(Ac),[n,i]=A.useState(!1),[s,l]=A.useState(!1),{onFocus:o,onBlur:c,onMouseEnter:u,onMouseLeave:h,onTouchStart:d}=a,x=A.useRef(null);A.useEffect(()=>{if(t==="render"&&l(!0),t==="viewport"){let b=f=>{f.forEach(p=>{l(p.isIntersecting)})},E=new IntersectionObserver(b,{threshold:.5});return x.current&&E.observe(x.current),()=>{E.disconnect()}}},[t]),A.useEffect(()=>{if(n){let b=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(b)}}},[n]);let S=()=>{i(!0)},j=()=>{i(!1),l(!1)};return r?t!=="intent"?[s,x,{}]:[s,x,{onFocus:an(o,S),onBlur:an(c,j),onMouseEnter:an(u,S),onMouseLeave:an(h,j),onTouchStart:an(d,S)}]:[!1,x,{}]}function an(t,a){return r=>{t&&t(r),r.defaultPrevented||a(r)}}function qv({page:t,...a}){let{router:r}=gh(),n=A.useMemo(()=>Sa(r.routes,t,r.basename),[r.routes,t,r.basename]);return n?A.createElement(Ov,{page:t,matches:n,...a}):null}function _v(t){let{manifest:a,routeModules:r}=jh(),[n,i]=A.useState([]);return A.useEffect(()=>{let s=!1;return Lv(t,a,r).then(l=>{s||i(l)}),()=>{s=!0}},[t,a,r]),n}function Ov({page:t,matches:a,...r}){let n=Zt(),{future:i,manifest:s,routeModules:l}=jh(),{basename:o}=gh(),{loaderData:c,matches:u}=Nv(),h=A.useMemo(()=>Cd(t,a,u,s,n,"data"),[t,a,u,s,n]),d=A.useMemo(()=>Cd(t,a,u,s,n,"assets"),[t,a,u,s,n]),x=A.useMemo(()=>{if(t===n.pathname+n.search+n.hash)return[];let b=new Set,E=!1;if(a.forEach(p=>{var R;let v=s.routes[p.route.id];!v||!v.hasLoader||(!h.some(P=>P.route.id===p.route.id)&&p.route.id in c&&((R=l[p.route.id])!=null&&R.shouldRevalidate)||v.hasClientLoader?E=!0:b.add(p.route.id))}),b.size===0)return[];let f=Cv(t,o,i.unstable_trailingSlashAwareDataRequests,"data");return E&&b.size>0&&f.searchParams.set("_routes",a.filter(p=>b.has(p.route.id)).map(p=>p.route.id).join(",")),[f.pathname+f.search]},[o,i.unstable_trailingSlashAwareDataRequests,c,n,s,h,a,t,l]),S=A.useMemo(()=>Rv(d,s),[d,s]),j=_v(d);return A.createElement(A.Fragment,null,x.map(b=>A.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...r})),S.map(b=>A.createElement("link",{key:b,rel:"modulepreload",href:b,...r})),j.map(({key:b,link:E})=>A.createElement("link",{key:b,nonce:r.nonce,...E,crossOrigin:E.crossOrigin??r.crossOrigin})))}function Iv(...t){return a=>{t.forEach(r=>{typeof r=="function"?r(a):r!=null&&(r.current=a)})}}var Dv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Dv&&(window.__reactRouterVersion="7.13.1")}catch{}function Fv(t,a){return dj({basename:a==null?void 0:a.basename,getContext:a==null?void 0:a.getContext,future:a==null?void 0:a.future,history:Lg({window:a==null?void 0:a.window}),hydrationData:zv(),routes:t,mapRouteProperties:ov,hydrationRouteProperties:cv,dataStrategy:a==null?void 0:a.dataStrategy,patchRoutesOnNavigation:a==null?void 0:a.patchRoutesOnNavigation,window:a==null?void 0:a.window,unstable_instrumentations:a==null?void 0:a.unstable_instrumentations}).initialize()}function zv(){let t=window==null?void 0:window.__staticRouterHydrationData;return t&&t.errors&&(t={...t,errors:Bv(t.errors)}),t}function Bv(t){if(!t)return null;let a=Object.entries(t),r={};for(let[n,i]of a)if(i&&i.__type==="RouteErrorResponse")r[n]=new $n(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let l=new s(i.message);l.stack="",r[n]=l}catch{}}if(r[n]==null){let s=new Error(i.message);s.stack="",r[n]=s}}else r[n]=i;return r}var vh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ks=A.forwardRef(function({onClick:a,discover:r="render",prefetch:n="none",relative:i,reloadDocument:s,replace:l,unstable_mask:o,state:c,target:u,to:h,preventScrollReset:d,viewTransition:x,unstable_defaultShouldRevalidate:S,...j},b){let{basename:E,navigator:f,unstable_useTransitions:p}=A.useContext(Pt),v=typeof h=="string"&&vh.test(h),R=Ym(h,E);h=R.to;let P=Uj(h,{relative:i}),k=Zt(),q=null;if(o){let _=Ts(o,[],k.unstable_mask?k.unstable_mask.pathname:"/",!0);E!=="/"&&(_.pathname=_.pathname==="/"?E:zt([E,_.pathname])),q=f.createHref(_)}let[w,$,F]=kv(n,j),le=Hv(h,{replace:l,unstable_mask:o,state:c,target:u,preventScrollReset:d,relative:i,viewTransition:x,unstable_defaultShouldRevalidate:S,unstable_useTransitions:p});function ee(_){a&&a(_),_.defaultPrevented||le(_)}let je=!(R.isExternal||s),te=A.createElement("a",{...j,...F,href:(je?q:void 0)||R.absoluteURL||P,onClick:je?ee:a,ref:Iv(b,$),target:u,"data-discover":!v&&r==="render"?"true":void 0});return w&&!v?A.createElement(A.Fragment,null,te,A.createElement(qv,{page:P})):te});ks.displayName="Link";var bh=A.forwardRef(function({"aria-current":a="page",caseSensitive:r=!1,className:n="",end:i=!1,style:s,to:l,viewTransition:o,children:c,...u},h){let d=Wn(l,{relative:u.relative}),x=Zt(),S=A.useContext(Qn),{navigator:j,basename:b}=A.useContext(Pt),E=S!=null&&Wv(d)&&o===!0,f=j.encodeLocation?j.encodeLocation(d).pathname:d.pathname,p=x.pathname,v=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;r||(p=p.toLowerCase(),v=v?v.toLowerCase():null,f=f.toLowerCase()),v&&b&&(v=Tt(v,b)||v);const R=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let P=p===f||!i&&p.startsWith(f)&&p.charAt(R)==="/",k=v!=null&&(v===f||!i&&v.startsWith(f)&&v.charAt(f.length)==="/"),q={isActive:P,isPending:k,isTransitioning:E},w=P?a:void 0,$;typeof n=="function"?$=n(q):$=[n,P?"active":null,k?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let F=typeof s=="function"?s(q):s;return A.createElement(ks,{...u,"aria-current":w,className:$,ref:h,style:F,to:l,viewTransition:o},typeof c=="function"?c(q):c)});bh.displayName="NavLink";var Uv=A.forwardRef(({discover:t="render",fetcherKey:a,navigate:r,reloadDocument:n,replace:i,state:s,method:l=Ii,action:o,onSubmit:c,relative:u,preventScrollReset:h,viewTransition:d,unstable_defaultShouldRevalidate:x,...S},j)=>{let{unstable_useTransitions:b}=A.useContext(Pt),E=Qv(),f=Jv(o,{relative:u}),p=l.toLowerCase()==="get"?"get":"post",v=typeof o=="string"&&vh.test(o),R=P=>{if(c&&c(P),P.defaultPrevented)return;P.preventDefault();let k=P.nativeEvent.submitter,q=(k==null?void 0:k.getAttribute("formmethod"))||l,w=()=>E(k||P.currentTarget,{fetcherKey:a,method:q,navigate:r,replace:i,state:s,relative:u,preventScrollReset:h,viewTransition:d,unstable_defaultShouldRevalidate:x});b&&r!==!1?A.startTransition(()=>w()):w()};return A.createElement("form",{ref:j,method:p,action:f,onSubmit:n?c:R,...S,"data-discover":!v&&t==="render"?"true":void 0})});Uv.displayName="Form";function Gv(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yh(t){let a=A.useContext(sr);return ue(a,Gv(t)),a}function Hv(t,{target:a,replace:r,unstable_mask:n,state:i,preventScrollReset:s,relative:l,viewTransition:o,unstable_defaultShouldRevalidate:c,unstable_useTransitions:u}={}){let h=Gj(),d=Zt(),x=Wn(t,{relative:l});return A.useCallback(S=>{if(bv(S,a)){S.preventDefault();let j=r!==void 0?r:Kt(d)===Kt(x),b=()=>h(t,{replace:j,unstable_mask:n,state:i,preventScrollReset:s,relative:l,viewTransition:o,unstable_defaultShouldRevalidate:c});u?A.startTransition(()=>b()):b()}},[d,h,x,r,n,i,a,t,s,l,o,c,u])}var $v=0,Vv=()=>`__${String(++$v)}__`;function Qv(){let{router:t}=yh("useSubmit"),{basename:a}=A.useContext(Pt),r=av(),n=t.fetch,i=t.navigate;return A.useCallback(async(s,l={})=>{let{action:o,method:c,encType:u,formData:h,body:d}=Ev(s,a);if(l.navigate===!1){let x=l.fetcherKey||Vv();await n(x,r,l.action||o,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:h,body:d,formMethod:l.method||c,formEncType:l.encType||u,flushSync:l.flushSync})}else await i(l.action||o,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:h,body:d,formMethod:l.method||c,formEncType:l.encType||u,replace:l.replace,state:l.state,fromRouteId:r,flushSync:l.flushSync,viewTransition:l.viewTransition})},[n,i,a,r])}function Jv(t,{relative:a}={}){let{basename:r}=A.useContext(Pt),n=A.useContext(Xt);ue(n,"useFormAction must be used inside a RouteContext");let[i]=n.matches.slice(-1),s={...Wn(t||".",{relative:a})},l=Zt();if(t==null){s.search=l.search;let o=new URLSearchParams(s.search),c=o.getAll("index");if(c.some(h=>h==="")){o.delete("index"),c.filter(d=>d).forEach(d=>o.append("index",d));let h=o.toString();s.search=h?`?${h}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(s.pathname=s.pathname==="/"?r:zt([r,s.pathname])),Kt(s)}function Wv(t,{relative:a}={}){let r=A.useContext(yc);ue(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=yh("useViewTransitionState"),i=Wn(t,{relative:a});if(!r.isTransitioning)return!1;let s=Tt(r.currentLocation.pathname,n)||r.currentLocation.pathname,l=Tt(r.nextLocation.pathname,n)||r.nextLocation.pathname;return ds(i.pathname,l)!=null||ds(i.pathname,s)!=null}function Kv(t){return A.createElement(dv,{flushSync:Um.flushSync,...t})}const Yv="_header_18s0b_1",Xv="_left_18s0b_27",Zv="_collapseBtn_18s0b_39",eb="_logo_18s0b_79",tb="_logoIcon_18s0b_95",ab="_logoText_18s0b_121",rb="_logoSubtext_18s0b_133",nb="_hamburger_18s0b_145",xa={header:Yv,left:Xv,collapseBtn:Zv,logo:eb,logoIcon:tb,logoText:ab,logoSubtext:rb,hamburger:nb};function ib({onToggleSidebar:t,onCollapseSidebar:a,collapsed:r}){return e.jsxs("header",{className:xa.header,children:[e.jsxs("div",{className:xa.left,children:[e.jsx("button",{className:xa.collapseBtn,onClick:a,"aria-label":r?"Expandir menú":"Plegar menú",title:r?"Expandir menú":"Plegar menú",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:r?e.jsx("path",{d:"M6 3L12 9L6 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}):e.jsx("path",{d:"M12 3L6 9L12 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsxs(ks,{to:"/",className:xa.logo,children:[e.jsx("div",{className:xa.logoIcon,children:"J"}),e.jsxs("div",{children:[e.jsx("div",{className:xa.logoText,children:"Programacio Java"}),e.jsx("div",{className:xa.logoSubtext,children:"DAM - La Salle Tarragona"})]})]})]}),e.jsx("button",{className:xa.hamburger,onClick:t,"aria-label":"Obrir menu",children:e.jsx("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:e.jsx("path",{d:"M3 6H19M3 11H19M3 16H19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]})}const jl=[{id:"basics",title:"Basics de Java",items:[{path:"/basics/tipus-de-dades",label:"Tipus de Dades"},{path:"/basics/operadors",label:"Operadors"},{path:"/basics/sintaxi",label:"Sintaxi de Java"},{path:"/basics/condicionals",label:"Condicionals"},{path:"/basics/switch",label:"Switch"},{path:"/basics/bucles",label:"Bucles"},{path:"/basics/modificadors-acces",label:"Modificadors d'Acces"}]},{id:"arrays",title:"Arrays",items:[{path:"/arrays/arrays-1d",label:"Arrays 1D"},{path:"/arrays/arrays-2d",label:"Arrays 2D (Matrius)"},{path:"/arrays/arraylist",label:"ArrayList"}]},{id:"funcions",title:"Funcions",items:[{path:"/funcions/sense-parametres",label:"Funcions sense paràmetres"},{path:"/funcions/amb-parametres",label:"Funcions amb paràmetres"},{path:"/funcions/tipus-de-funcions",label:"Tipus de funcions"},{path:"/funcions/recursives",label:"Funcions recursives"},{path:"/funcions/cridar-des-de-main",label:"Cridar des del Main"},{path:"/funcions/resum",label:"Resum comparatiu"}]},{id:"classes",title:"Classes i Objectes",items:[{path:"/classes/introduccio",label:"Introducció a la POO"},{path:"/classes/classe-vs-objecte",label:"Classe vs Objecte"},{path:"/classes/modificadors",label:"Modificadors i Encapsulació"},{path:"/classes/constructors-this",label:"Constructors i THIS"},{path:"/classes/herencia",label:"Herència"},{path:"/classes/polimorfisme",label:"Polimorfisme"},{path:"/classes/classes-abstractes",label:"Classes Abstractes"},{path:"/classes/exemple-biblioteca",label:"Exemple: Biblioteca"}]},{id:"modularitat",title:"Modularitat i Packages",items:[{path:"/modularitat/introduccio",label:"Introducció a la Modularitat"},{path:"/modularitat/monolitic-vs-modular",label:"Monolític vs Modular"},{path:"/modularitat/packages",label:"Packages: Organització"},{path:"/modularitat/exemple-calculadora",label:"Exemple: Calculadora"}]},{id:"string-math",title:"String i Math",items:[{path:"/string-math/classe-string",label:"Classe String"},{path:"/string-math/classe-math",label:"Classe Math"},{path:"/string-math/random-vs-math-random",label:"Random vs Math.random()"}]},{id:"java-modern",title:"Java Modern",items:[{path:"/java-modern/for-each",label:"For-each"},{path:"/java-modern/operador-ternari",label:"Operador ternari"},{path:"/java-modern/var-i-altres",label:"var i altres novetats"}]},{id:"mon-professional",title:"El Món Professional",items:[{path:"/mon-professional/com-treballen-els-devs",label:"Com treballen els Devs"}]},{id:"activitats",title:"Activitats",items:[{path:"/activitats/quiz-mvc",label:"Quiz: MVC"}]},{id:"spring-boot",title:"Spring Boot",items:[{path:"/spring-boot/que-es",label:"Què és Spring Boot?"},{path:"/spring-boot/primer-projecte",label:"Primer Projecte"},{path:"/spring-boot/endevina-animal",label:"Projecte: Endevina l'Animal"}]},{id:"analisi-disseny",title:"Anàlisi i Disseny",items:[{path:"/analisi-disseny/diagrames-classes",label:"Diagrames de Classes"},{path:"/analisi-disseny/diagrames-sequencia",label:"Diagrames de Seqüència"},{path:"/analisi-disseny/diagrames-flux",label:"Diagrames de Flux"},{path:"/analisi-disseny/casos-dus",label:"Casos d'Ús"},{path:"/analisi-disseny/projecte-real",label:"Anatomia d'un Projecte Real"},{path:"/analisi-disseny/introduccio-mvc",label:"Introducció a MVC"}]}],sb="_overlay_acghx_1",lb="_sidebar_acghx_9",ob="_collapsed_acghx_39",cb="_sectionTitle_acghx_47",ub="_arrow_acghx_49",db="_items_acghx_51",pb="_sectionButton_acghx_65",mb="_sectionIcon_acghx_75",hb="_section_acghx_47",fb="_arrowOpen_acghx_173",xb="_itemsOpen_acghx_193",gb="_link_acghx_201",jb="_activeLink_acghx_233",vb="_overlayVisible_acghx_271",bb="_sidebarOpen_acghx_341",rt={overlay:sb,sidebar:lb,collapsed:ob,sectionTitle:cb,arrow:ub,items:db,sectionButton:pb,sectionIcon:mb,section:hb,arrowOpen:fb,itemsOpen:xb,link:gb,activeLink:jb,overlayVisible:vb,sidebarOpen:bb},yb={basics:e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),e.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),arrays:e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]}),funcions:e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),classes:e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),e.jsx("path",{d:"M16 3L12 7L8 3"})]}),modularitat:e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),e.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),e.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),"string-math":e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"4 7 4 4 20 4 20 7"}),e.jsx("line",{x1:"9",y1:"20",x2:"15",y2:"20"}),e.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20"})]}),"java-modern":e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),"mon-professional":e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"analisi-disseny":e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"6",height:"6",rx:"1"}),e.jsx("rect",{x:"15",y:"3",width:"6",height:"6",rx:"1"}),e.jsx("rect",{x:"9",y:"15",width:"6",height:"6",rx:"1"}),e.jsx("line",{x1:"6",y1:"9",x2:"6",y2:"12"}),e.jsx("line",{x1:"6",y1:"12",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"12",x2:"12",y2:"15"}),e.jsx("line",{x1:"18",y1:"9",x2:"18",y2:"12"}),e.jsx("line",{x1:"18",y1:"12",x2:"12",y2:"12"})]})};function Sb({isOpen:t,collapsed:a,onClose:r,onExpand:n}){const i=Zt(),[s,l]=A.useState(()=>{const u=jl.find(h=>h.items.some(d=>i.pathname===d.path));return u?[u.id]:[jl[0].id]}),o=u=>{l(h=>h.includes(u)?h.filter(d=>d!==u):[...h,u])},c=[rt.sidebar,t&&rt.sidebarOpen,a&&rt.collapsed].filter(Boolean).join(" ");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`${rt.overlay} ${t?rt.overlayVisible:""}`,onClick:r}),e.jsx("nav",{className:c,onMouseEnter:a?n:void 0,children:jl.map(u=>{const h=s.includes(u.id),d=yb[u.id];return e.jsxs("div",{className:rt.section,children:[e.jsxs("button",{className:rt.sectionButton,onClick:()=>o(u.id),title:a?u.title:void 0,children:[e.jsx("span",{className:rt.sectionIcon,children:d}),e.jsx("span",{className:rt.sectionTitle,children:u.title}),e.jsx("span",{className:`${rt.arrow} ${h?rt.arrowOpen:""}`,children:e.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",children:e.jsx("path",{d:"M3 1L7 5L3 9"})})})]}),e.jsx("div",{className:`${rt.items} ${h?rt.itemsOpen:""}`,children:u.items.map(x=>e.jsx(bh,{to:x.path,className:({isActive:S})=>`${rt.link} ${S?rt.activeLink:""}`,onClick:r,children:x.label},x.path))})]},u.id)})})]})}function Eb(){return e.jsx("footer",{style:{textAlign:"center",padding:"20px",color:"#718096",fontSize:"0.85em",borderTop:"1px solid #e2e8f0",marginTop:"40px"},children:"Recurs didàctic creat per a l'assignatura de Programació - La Salle Tarragona"})}function Cb(){const{pathname:t}=Zt();A.useEffect(()=>{window.scrollTo(0,0)},[t])}const wb="_layout_e2a8v_1",Ab="_body_e2a8v_13",Lb="_content_e2a8v_23",Rb="_contentInner_e2a8v_37",Si={layout:wb,body:Ab,content:Lb,contentInner:Rb};function Mb(){const[t,a]=A.useState(!1),[r,n]=A.useState(!1);return Cb(),e.jsxs("div",{className:Si.layout,children:[e.jsx(ib,{onToggleSidebar:()=>a(!t),onCollapseSidebar:()=>n(!r),collapsed:r}),e.jsxs("div",{className:Si.body,children:[e.jsx(Sb,{isOpen:t,collapsed:r,onClose:()=>a(!1),onExpand:()=>n(!1)}),e.jsx("main",{className:Si.content,children:e.jsxs("div",{className:Si.contentInner,children:[e.jsx(hv,{}),e.jsx(Eb,{})]})})]})]})}const Tb="_hero_ym8fg_1",Pb="_heroTitle_ym8fg_13",Nb="_heroAccent_ym8fg_29",kb="_heroSubtitle_ym8fg_41",qb="_sectionsGrid_ym8fg_53",_b="_sectionCard_ym8fg_65",Ob="_cardIcon_ym8fg_101",Ib="_cardTitle_ym8fg_125",Db="_cardDescription_ym8fg_139",Fb="_cardTopics_ym8fg_151",zb="_topic_ym8fg_165",qt={hero:Tb,heroTitle:Pb,heroAccent:Nb,heroSubtitle:kb,sectionsGrid:qb,sectionCard:_b,cardIcon:Ob,cardTitle:Ib,cardDescription:Db,cardTopics:Fb,topic:zb},Bb={basics:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),e.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),arrays:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]}),funcions:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),classes:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),e.jsx("path",{d:"M16 3L12 7L8 3"})]}),modularitat:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),e.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),e.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),"string-math":e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"4 7 4 4 20 4 20 7"}),e.jsx("line",{x1:"9",y1:"20",x2:"15",y2:"20"}),e.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20"})]}),"java-modern":e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),"analisi-disseny":e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"6",height:"6",rx:"1"}),e.jsx("rect",{x:"15",y:"3",width:"6",height:"6",rx:"1"}),e.jsx("rect",{x:"9",y:"15",width:"6",height:"6",rx:"1"}),e.jsx("line",{x1:"6",y1:"9",x2:"6",y2:"12"}),e.jsx("line",{x1:"6",y1:"12",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"12",x2:"12",y2:"15"}),e.jsx("line",{x1:"18",y1:"9",x2:"18",y2:"12"}),e.jsx("line",{x1:"18",y1:"12",x2:"12",y2:"12"})]})},Ub=[{id:"basics",title:"Basics de Java",description:"Fonaments del llenguatge: tipus de dades, operadors, condicionals, bucles i sintaxi bàsica.",path:"/basics/tipus-de-dades",topics:["Tipus de dades","Operadors","if/else","Bucles","Switch"]},{id:"arrays",title:"Arrays",description:"Arrays unidimensionals i bidimensionals amb exemples interactius.",path:"/arrays/arrays-1d",topics:["Arrays 1D","Matrius 2D"]},{id:"funcions",title:"Funcions",description:"Funcions amb i sense paràmetres, tipus, recursivitat i com cridar-les.",path:"/funcions/sense-parametres",topics:["Sense paràmetres","Amb paràmetres","Recursives","Tipus"]},{id:"classes",title:"Classes i Objectes",description:"POO: classes, objectes, encapsulació, constructors, herència.",path:"/classes/introduccio",topics:["Classes","Objectes","Constructors","Herència"]},{id:"modularitat",title:"Modularitat i Packages",description:"Organització del codi en múltiples classes i packages. Aplica tot el que s'ha après.",path:"/modularitat/introduccio",topics:["Monolític vs Modular","Packages","Imports"]},{id:"string-math",title:"String i Math",description:"Classes String i Math: tots els mètodes útils, Random vs Math.random().",path:"/string-math/classe-string",topics:["String","Math","Random"]},{id:"java-modern",title:"Java Modern",description:"Sintaxi moderna: for-each, operador ternari, var i altres novetats.",path:"/java-modern/for-each",topics:["for-each","Ternari","var"]},{id:"analisi-disseny",title:"Anàlisi i Disseny",description:"Diagrames UML, anàlisi de projectes reals i introducció a MVC.",path:"/analisi-disseny/diagrames-classes",topics:["UML","Projecte Real","MVC"]}];function Gb(){return e.jsxs("div",{children:[e.jsxs("div",{className:qt.hero,children:[e.jsxs("h1",{className:qt.heroTitle,children:["Programació ",e.jsx("span",{className:qt.heroAccent,children:"Java"})]}),e.jsx("p",{className:qt.heroSubtitle,children:"Recurs visual interactiu per a l'aprenentatge de programació - DAM"})]}),e.jsx("div",{className:qt.sectionsGrid,children:Ub.map(t=>e.jsxs(ks,{to:t.path,className:qt.sectionCard,children:[e.jsx("div",{className:qt.cardIcon,children:Bb[t.id]}),e.jsx("h2",{className:qt.cardTitle,children:t.title}),e.jsx("p",{className:qt.cardDescription,children:t.description}),e.jsx("div",{className:qt.cardTopics,children:t.topics.map(a=>e.jsx("span",{className:qt.topic,children:a},a))})]},t.path))})]})}const Hb="_header_1pa55_1",$b="_title_1pa55_9",Vb="_accentLine_1pa55_29",vl={header:Hb,title:$b,accentLine:Vb};function y({title:t}){return e.jsxs("div",{className:vl.header,children:[e.jsx("h2",{className:vl.title,children:t}),e.jsx("div",{className:vl.accentLine})]})}function Sh(t){var a,r,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(a=0;a<i;a++)t[a]&&(r=Sh(t[a]))&&(n&&(n+=" "),n+=r)}else for(r in t)t[r]&&(n&&(n+=" "),n+=r);return n}function Eh(){for(var t,a,r=0,n="",i=arguments.length;r<i;r++)(t=arguments[r])&&(a=Sh(t))&&(n&&(n+=" "),n+=a);return n}var Qb=Object.create,qs=Object.defineProperty,Jb=Object.defineProperties,Wb=Object.getOwnPropertyDescriptor,Kb=Object.getOwnPropertyDescriptors,Ch=Object.getOwnPropertyNames,ps=Object.getOwnPropertySymbols,Yb=Object.getPrototypeOf,Lc=Object.prototype.hasOwnProperty,wh=Object.prototype.propertyIsEnumerable,wd=(t,a,r)=>a in t?qs(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,Wt=(t,a)=>{for(var r in a||(a={}))Lc.call(a,r)&&wd(t,r,a[r]);if(ps)for(var r of ps(a))wh.call(a,r)&&wd(t,r,a[r]);return t},_s=(t,a)=>Jb(t,Kb(a)),Ah=(t,a)=>{var r={};for(var n in t)Lc.call(t,n)&&a.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&ps)for(var n of ps(t))a.indexOf(n)<0&&wh.call(t,n)&&(r[n]=t[n]);return r},Xb=(t,a)=>function(){return a||(0,t[Ch(t)[0]])((a={exports:{}}).exports,a),a.exports},Zb=(t,a)=>{for(var r in a)qs(t,r,{get:a[r],enumerable:!0})},ey=(t,a,r,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of Ch(a))!Lc.call(t,i)&&i!==r&&qs(t,i,{get:()=>a[i],enumerable:!(n=Wb(a,i))||n.enumerable});return t},ty=(t,a,r)=>(r=t!=null?Qb(Yb(t)):{},ey(!t||!t.__esModule?qs(r,"default",{value:t,enumerable:!0}):r,t)),ay=Xb({"../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(t,a){var r=function(){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,s={},l={util:{encode:function j(b){return b instanceof o?new o(b.type,j(b.content),b.alias):Array.isArray(b)?b.map(j):b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(j){return Object.prototype.toString.call(j).slice(8,-1)},objId:function(j){return j.__id||Object.defineProperty(j,"__id",{value:++i}),j.__id},clone:function j(b,E){E=E||{};var f,p;switch(l.util.type(b)){case"Object":if(p=l.util.objId(b),E[p])return E[p];f={},E[p]=f;for(var v in b)b.hasOwnProperty(v)&&(f[v]=j(b[v],E));return f;case"Array":return p=l.util.objId(b),E[p]?E[p]:(f=[],E[p]=f,b.forEach(function(R,P){f[P]=j(R,E)}),f);default:return b}},getLanguage:function(j){for(;j;){var b=n.exec(j.className);if(b)return b[1].toLowerCase();j=j.parentElement}return"none"},setLanguage:function(j,b){j.className=j.className.replace(RegExp(n,"gi"),""),j.classList.add("language-"+b)},isActive:function(j,b,E){for(var f="no-"+b;j;){var p=j.classList;if(p.contains(b))return!0;if(p.contains(f))return!1;j=j.parentElement}return!!E}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(j,b){var E=l.util.clone(l.languages[j]);for(var f in b)E[f]=b[f];return E},insertBefore:function(j,b,E,f){f=f||l.languages;var p=f[j],v={};for(var R in p)if(p.hasOwnProperty(R)){if(R==b)for(var P in E)E.hasOwnProperty(P)&&(v[P]=E[P]);E.hasOwnProperty(R)||(v[R]=p[R])}var k=f[j];return f[j]=v,l.languages.DFS(l.languages,function(q,w){w===k&&q!=j&&(this[q]=v)}),v},DFS:function j(b,E,f,p){p=p||{};var v=l.util.objId;for(var R in b)if(b.hasOwnProperty(R)){E.call(b,R,b[R],f||R);var P=b[R],k=l.util.type(P);k==="Object"&&!p[v(P)]?(p[v(P)]=!0,j(P,E,null,p)):k==="Array"&&!p[v(P)]&&(p[v(P)]=!0,j(P,E,R,p))}}},plugins:{},highlight:function(j,b,E){var f={code:j,grammar:b,language:E};if(l.hooks.run("before-tokenize",f),!f.grammar)throw new Error('The language "'+f.language+'" has no grammar.');return f.tokens=l.tokenize(f.code,f.grammar),l.hooks.run("after-tokenize",f),o.stringify(l.util.encode(f.tokens),f.language)},tokenize:function(j,b){var E=b.rest;if(E){for(var f in E)b[f]=E[f];delete b.rest}var p=new h;return d(p,p.head,j),u(j,p,b,p.head,0),S(p)},hooks:{all:{},add:function(j,b){var E=l.hooks.all;E[j]=E[j]||[],E[j].push(b)},run:function(j,b){var E=l.hooks.all[j];if(!(!E||!E.length))for(var f=0,p;p=E[f++];)p(b)}},Token:o};function o(j,b,E,f){this.type=j,this.content=b,this.alias=E,this.length=(f||"").length|0}o.stringify=function j(b,E){if(typeof b=="string")return b;if(Array.isArray(b)){var f="";return b.forEach(function(k){f+=j(k,E)}),f}var p={type:b.type,content:j(b.content,E),tag:"span",classes:["token",b.type],attributes:{},language:E},v=b.alias;v&&(Array.isArray(v)?Array.prototype.push.apply(p.classes,v):p.classes.push(v)),l.hooks.run("wrap",p);var R="";for(var P in p.attributes)R+=" "+P+'="'+(p.attributes[P]||"").replace(/"/g,"&quot;")+'"';return"<"+p.tag+' class="'+p.classes.join(" ")+'"'+R+">"+p.content+"</"+p.tag+">"};function c(j,b,E,f){j.lastIndex=b;var p=j.exec(E);if(p&&f&&p[1]){var v=p[1].length;p.index+=v,p[0]=p[0].slice(v)}return p}function u(j,b,E,f,p,v){for(var R in E)if(!(!E.hasOwnProperty(R)||!E[R])){var P=E[R];P=Array.isArray(P)?P:[P];for(var k=0;k<P.length;++k){if(v&&v.cause==R+","+k)return;var q=P[k],w=q.inside,$=!!q.lookbehind,F=!!q.greedy,le=q.alias;if(F&&!q.pattern.global){var ee=q.pattern.toString().match(/[imsuy]*$/)[0];q.pattern=RegExp(q.pattern.source,ee+"g")}for(var je=q.pattern||q,te=f.next,_=p;te!==b.tail&&!(v&&_>=v.reach);_+=te.value.length,te=te.next){var H=te.value;if(b.length>j.length)return;if(!(H instanceof o)){var ae=1,O;if(F){if(O=c(je,_,j,$),!O||O.index>=j.length)break;var de=O.index,B=O.index+O[0].length,G=_;for(G+=te.value.length;de>=G;)te=te.next,G+=te.value.length;if(G-=te.value.length,_=G,te.value instanceof o)continue;for(var re=te;re!==b.tail&&(G<B||typeof re.value=="string");re=re.next)ae++,G+=re.value.length;ae--,H=j.slice(_,G),O.index-=_}else if(O=c(je,0,H,$),!O)continue;var de=O.index,ye=O[0],Le=H.slice(0,de),Fe=H.slice(de+ye.length),Ee=_+H.length;v&&Ee>v.reach&&(v.reach=Ee);var $e=te.prev;Le&&($e=d(b,$e,Le),_+=Le.length),x(b,$e,ae);var lr=new o(R,w?l.tokenize(ye,w):ye,le,ye);if(te=d(b,$e,lr),Fe&&d(b,te,Fe),ae>1){var Nt={cause:R+","+k,reach:Ee};u(j,b,E,te.prev,_,Nt),v&&Nt.reach>v.reach&&(v.reach=Nt.reach)}}}}}}function h(){var j={value:null,prev:null,next:null},b={value:null,prev:j,next:null};j.next=b,this.head=j,this.tail=b,this.length=0}function d(j,b,E){var f=b.next,p={value:E,prev:b,next:f};return b.next=p,f.prev=p,j.length++,p}function x(j,b,E){for(var f=b.next,p=0;p<E&&f!==j.tail;p++)f=f.next;b.next=f,f.prev=b,j.length-=p}function S(j){for(var b=[],E=j.head.next;E!==j.tail;)b.push(E.value),E=E.next;return b}return l}();a.exports=r,r.default=r}}),N=ty(ay());N.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},N.languages.markup.tag.inside["attr-value"].inside.entity=N.languages.markup.entity,N.languages.markup.doctype.inside["internal-subset"].inside=N.languages.markup,N.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(N.languages.markup.tag,"addInlined",{value:function(t,n){var r={},r=(r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:N.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}}),n=(r["language-"+n]={pattern:/[\s\S]+/,inside:N.languages[n]},{});n[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:r},N.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(N.languages.markup.tag,"addAttribute",{value:function(t,a){N.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[a,"language-"+a],inside:N.languages[a]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),N.languages.html=N.languages.markup,N.languages.mathml=N.languages.markup,N.languages.svg=N.languages.markup,N.languages.xml=N.languages.extend("markup",{}),N.languages.ssml=N.languages.xml,N.languages.atom=N.languages.xml,N.languages.rss=N.languages.xml,function(t){var a={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},r=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,n="(?:[^\\\\-]|"+r.source+")",n=RegExp(n+"-"+n),i={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};t.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:n,inside:{escape:r,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":a,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:r}},"special-escape":a,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":i}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:r,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":i}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}}(N),N.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},N.languages.javascript=N.languages.extend("clike",{"class-name":[N.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),N.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,N.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:N.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:N.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:N.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:N.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:N.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),N.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:N.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),N.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),N.languages.markup&&(N.languages.markup.tag.addInlined("script","javascript"),N.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),N.languages.js=N.languages.javascript,N.languages.actionscript=N.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),N.languages.actionscript["class-name"].alias="function",delete N.languages.actionscript.parameter,delete N.languages.actionscript["literal-property"],N.languages.markup&&N.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:N.languages.markup}}),function(t){var a=/#(?!\{).+/,r={pattern:/#\{[^}]+\}/,alias:"variable"};t.languages.coffeescript=t.languages.extend("javascript",{comment:a,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:r}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),t.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:a,interpolation:r}}}),t.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:t.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:r}}]}),t.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete t.languages.coffeescript["template-string"],t.languages.coffee=t.languages.coffeescript}(N),function(t){var a=t.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(a,"addSupport",{value:function(r,n){(r=typeof r=="string"?[r]:r).forEach(function(i){var s=function(d){d.inside||(d.inside={}),d.inside.rest=n},l="doc-comment";if(o=t.languages[i]){var o,c=o[l];if((c=c||(o=t.languages.insertBefore(i,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[l])instanceof RegExp&&(c=o[l]={pattern:c}),Array.isArray(c))for(var u=0,h=c.length;u<h;u++)c[u]instanceof RegExp&&(c[u]={pattern:c[u]}),s(c[u]);else s(c)}})}}),a.addSupport(["java","javascript","php"],a)}(N),function(t){var a=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,a=(t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+a.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+a.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+a.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+a.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:a,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css,t.languages.markup);a&&(a.tag.addInlined("style","css"),a.tag.addAttribute("style","css"))}(N),function(t){var a=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,a=(t.languages.css.selector={pattern:t.languages.css.selector.pattern,lookbehind:!0,inside:a={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+a.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[a,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},t.languages.css.atrule.inside["selector-function-argument"].inside=a,t.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}}),{pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0}),r={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};t.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:a,number:r,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:a,number:r})}(N),function(t){var a=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,n="(?:"+r.source+"(?:[ 	]+"+a.source+")?|"+a.source+"(?:[ 	]+"+r.source+")?)",i=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),s=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function l(o,c){c=(c||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return n}).replace(/<<value>>/g,function(){return o});return RegExp(u,c)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return n})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return n}).replace(/<<key>>/g,function(){return"(?:"+i+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:l(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:l(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:l(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:l(s),lookbehind:!0,greedy:!0},number:{pattern:l(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:a,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml}(N),function(t){var a=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function r(u){return u=u.replace(/<inner>/g,function(){return a}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+u+")")}var n=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,i=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return n}),s=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,l=(t.languages.markdown=t.languages.extend("markup",{}),t.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:t.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+i+s+"(?:"+i+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+i+s+")(?:"+i+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(n),inside:t.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+i+")"+s+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+i+"$"),inside:{"table-header":{pattern:RegExp(n),alias:"important",inside:t.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:r(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:r(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:r(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:r(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(u){["url","bold","italic","strike","code-snippet"].forEach(function(h){u!==h&&(t.languages.markdown[u].inside.content.inside[h]=t.languages.markdown[h])})}),t.hooks.add("after-tokenize",function(u){u.language!=="markdown"&&u.language!=="md"||function h(d){if(d&&typeof d!="string")for(var x=0,S=d.length;x<S;x++){var j,b=d[x];b.type!=="code"?h(b.content):(j=b.content[1],b=b.content[3],j&&b&&j.type==="code-language"&&b.type==="code-block"&&typeof j.content=="string"&&(j=j.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),j="language-"+(j=(/[a-z][\w-]*/i.exec(j)||[""])[0].toLowerCase()),b.alias?typeof b.alias=="string"?b.alias=[b.alias,j]:b.alias.push(j):b.alias=[j]))}}(u.tokens)}),t.hooks.add("wrap",function(u){if(u.type==="code-block"){for(var h="",d=0,x=u.classes.length;d<x;d++){var S=u.classes[d],S=/language-(.+)/.exec(S);if(S){h=S[1];break}}var j,b=t.languages[h];b?u.content=t.highlight(function(E){return E=E.replace(l,""),E=E.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(f,p){var v;return(p=p.toLowerCase())[0]==="#"?(v=p[1]==="x"?parseInt(p.slice(2),16):Number(p.slice(1)),c(v)):o[p]||f})}(u.content),b,h):h&&h!=="none"&&t.plugins.autoloader&&(j="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random()),u.attributes.id=j,t.plugins.autoloader.loadLanguages(h,function(){var E=document.getElementById(j);E&&(E.innerHTML=t.highlight(E.textContent,t.languages[h],h))}))}}),RegExp(t.languages.markup.tag.pattern.source,"gi")),o={amp:"&",lt:"<",gt:">",quot:'"'},c=String.fromCodePoint||String.fromCharCode;t.languages.md=t.languages.markdown}(N),N.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:N.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},N.hooks.add("after-tokenize",function(t){if(t.language==="graphql")for(var a=t.tokens.filter(function(j){return typeof j!="string"&&j.type!=="comment"&&j.type!=="scalar"}),r=0;r<a.length;){var n=a[r++];if(n.type==="keyword"&&n.content==="mutation"){var i=[];if(d(["definition-mutation","punctuation"])&&h(1).content==="("){r+=2;var s=x(/^\($/,/^\)$/);if(s===-1)continue;for(;r<s;r++){var l=h(0);l.type==="variable"&&(S(l,"variable-input"),i.push(l.content))}r=s+1}if(d(["punctuation","property-query"])&&h(0).content==="{"&&(r++,S(h(0),"property-mutation"),0<i.length)){var o=x(/^\{$/,/^\}$/);if(o!==-1)for(var c=r;c<o;c++){var u=a[c];u.type==="variable"&&0<=i.indexOf(u.content)&&S(u,"variable-input")}}}}function h(j){return a[r+j]}function d(j,b){b=b||0;for(var E=0;E<j.length;E++){var f=h(E+b);if(!f||f.type!==j[E])return}return 1}function x(j,b){for(var E=1,f=r;f<a.length;f++){var p=a[f],v=p.content;if(p.type==="punctuation"&&typeof v=="string"){if(j.test(v))E++;else if(b.test(v)&&--E===0)return f}}return-1}function S(j,b){var E=j.alias;E?Array.isArray(E)||(j.alias=E=[E]):j.alias=E=[],E.push(b)}}),N.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(t){var a=t.languages.javascript["template-string"],r=a.pattern.source,n=a.inside.interpolation,i=n.inside["interpolation-punctuation"],s=n.pattern.source;function l(d,x){if(t.languages[d])return{pattern:RegExp("((?:"+x+")\\s*)"+r),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:d}}}}function o(d,x,S){return d={code:d,grammar:x,language:S},t.hooks.run("before-tokenize",d),d.tokens=t.tokenize(d.code,d.grammar),t.hooks.run("after-tokenize",d),d.tokens}function c(d,x,S){var E=t.tokenize(d,{interpolation:{pattern:RegExp(s),lookbehind:!0}}),j=0,b={},E=o(E.map(function(p){if(typeof p=="string")return p;for(var v,R,p=p.content;d.indexOf((R=j++,v="___"+S.toUpperCase()+"_"+R+"___"))!==-1;);return b[v]=p,v}).join(""),x,S),f=Object.keys(b);return j=0,function p(v){for(var R=0;R<v.length;R++){if(j>=f.length)return;var P,k,q,w,$,F,le,ee=v[R];typeof ee=="string"||typeof ee.content=="string"?(P=f[j],(le=(F=typeof ee=="string"?ee:ee.content).indexOf(P))!==-1&&(++j,k=F.substring(0,le),$=b[P],q=void 0,(w={})["interpolation-punctuation"]=i,(w=t.tokenize($,w)).length===3&&((q=[1,1]).push.apply(q,o(w[1],t.languages.javascript,"javascript")),w.splice.apply(w,q)),q=new t.Token("interpolation",w,n.alias,$),w=F.substring(le+P.length),$=[],k&&$.push(k),$.push(q),w&&(p(F=[w]),$.push.apply($,F)),typeof ee=="string"?(v.splice.apply(v,[R,1].concat($)),R+=$.length-1):ee.content=$)):(le=ee.content,Array.isArray(le)?p(le):p([le]))}}(E),new t.Token(S,E,"language-"+S,d)}t.languages.javascript["template-string"]=[l("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),l("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),l("svg",/\bsvg/.source),l("markdown",/\b(?:markdown|md)/.source),l("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),l("sql",/\bsql/.source),a].filter(Boolean);var u={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function h(d){return typeof d=="string"?d:Array.isArray(d)?d.map(h).join(""):h(d.content)}t.hooks.add("after-tokenize",function(d){d.language in u&&function x(S){for(var j=0,b=S.length;j<b;j++){var E,f,p,v=S[j];typeof v!="string"&&(E=v.content,Array.isArray(E)?v.type==="template-string"?(v=E[1],E.length===3&&typeof v!="string"&&v.type==="embedded-code"&&(f=h(v),v=v.alias,v=Array.isArray(v)?v[0]:v,p=t.languages[v])&&(E[1]=c(f,p,v))):x(E):typeof E!="string"&&x([E]))}}(d.tokens)})}(N),function(t){t.languages.typescript=t.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),t.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete t.languages.typescript.parameter,delete t.languages.typescript["literal-property"];var a=t.languages.extend("typescript",{});delete a["class-name"],t.languages.typescript["class-name"].inside=a,t.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:a}}}}),t.languages.ts=t.languages.typescript}(N),function(t){var a=t.languages.javascript,r=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,n="(@(?:arg|argument|param|property)\\s+(?:"+r+"\\s+)?)";t.languages.jsdoc=t.languages.extend("javadoclike",{parameter:{pattern:RegExp(n+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),t.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(n+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:a,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return r})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+r),lookbehind:!0,inside:{string:a.string,number:a.number,boolean:a.boolean,keyword:t.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:a,alias:"language-javascript"}}}}),t.languages.javadoclike.addSupport("javascript",t.languages.jsdoc)}(N),function(t){t.languages.flow=t.languages.extend("javascript",{}),t.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:"class-name"}]}),t.languages.flow["function-variable"].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete t.languages.flow.parameter,t.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(t.languages.flow.keyword)||(t.languages.flow.keyword=[t.languages.flow.keyword]),t.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})}(N),N.languages.n4js=N.languages.extend("javascript",{keyword:/\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),N.languages.insertBefore("n4js","constant",{annotation:{pattern:/@+\w+/,alias:"operator"}}),N.languages.n4jsd=N.languages.n4js,function(t){function a(l,o){return RegExp(l.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),o)}t.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+t.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),t.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+t.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),t.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),t.languages.insertBefore("javascript","keyword",{imports:{pattern:a(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:t.languages.javascript},exports:{pattern:a(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:t.languages.javascript}}),t.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),t.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),t.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:a(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var r=["function","function-variable","method","method-variable","property-access"],n=0;n<r.length;n++){var s=r[n],i=t.languages.javascript[s],s=(i=t.util.type(i)==="RegExp"?t.languages.javascript[s]={pattern:i}:i).inside||{};(i.inside=s)["maybe-class-name"]=/^[A-Z][\s\S]*/}}(N),function(t){var a=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,n=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function s(c,u){return c=c.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return n}).replace(/<SPREAD>/g,function(){return i}),RegExp(c,u)}i=s(i).source,t.languages.jsx=t.languages.extend("markup",a),t.languages.jsx.tag.pattern=s(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=a.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:s(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:s(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);function l(c){for(var u=[],h=0;h<c.length;h++){var d=c[h],x=!1;typeof d!="string"&&(d.type==="tag"&&d.content[0]&&d.content[0].type==="tag"?d.content[0].content[0].content==="</"?0<u.length&&u[u.length-1].tagName===o(d.content[0].content[1])&&u.pop():d.content[d.content.length-1].content!=="/>"&&u.push({tagName:o(d.content[0].content[1]),openedBraces:0}):0<u.length&&d.type==="punctuation"&&d.content==="{"?u[u.length-1].openedBraces++:0<u.length&&0<u[u.length-1].openedBraces&&d.type==="punctuation"&&d.content==="}"?u[u.length-1].openedBraces--:x=!0),(x||typeof d=="string")&&0<u.length&&u[u.length-1].openedBraces===0&&(x=o(d),h<c.length-1&&(typeof c[h+1]=="string"||c[h+1].type==="plain-text")&&(x+=o(c[h+1]),c.splice(h+1,1)),0<h&&(typeof c[h-1]=="string"||c[h-1].type==="plain-text")&&(x=o(c[h-1])+x,c.splice(h-1,1),h--),c[h]=new t.Token("plain-text",x,null,x)),d.content&&typeof d.content!="string"&&l(d.content)}}var o=function(c){return c?typeof c=="string"?c:typeof c.content=="string"?c.content:c.content.map(o).join(""):""};t.hooks.add("after-tokenize",function(c){c.language!=="jsx"&&c.language!=="tsx"||l(c.tokens)})}(N),function(t){var a=t.util.clone(t.languages.typescript),a=(t.languages.tsx=t.languages.extend("jsx",a),delete t.languages.tsx.parameter,delete t.languages.tsx["literal-property"],t.languages.tsx.tag);a.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+a.pattern.source+")",a.pattern.flags),a.lookbehind=!0}(N),N.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(/(^|[^"#])/.source+"(?:"+/"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source+"|"+/"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source+")"+/(?!["#])/.source),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(/(^|[^"#])(#+)/.source+"(?:"+/"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source+"|"+/"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source+")\\2"),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp(/#/.source+"(?:"+/(?:elseif|if)\b/.source+"(?:[ 	]*"+/(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source+")+|"+/(?:else|endif)\b/.source+")"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},N.languages.swift["string-literal"].forEach(function(t){t.inside.interpolation.inside=N.languages.swift}),function(t){t.languages.kotlin=t.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete t.languages.kotlin["class-name"];var a={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:t.languages.kotlin}};t.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:a},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:a},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete t.languages.kotlin.string,t.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),t.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),t.languages.kt=t.languages.kotlin,t.languages.kts=t.languages.kotlin}(N),N.languages.c=N.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),N.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),N.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},N.languages.c.string],char:N.languages.c.char,comment:N.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:N.languages.c}}}}),N.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete N.languages.c.boolean,N.languages.objectivec=N.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete N.languages.objectivec["class-name"],N.languages.objc=N.languages.objectivec,N.languages.reason=N.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),N.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete N.languages.reason.function,function(t){for(var a=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,r=0;r<2;r++)a=a.replace(/<self>/g,function(){return a});a=a.replace(/<self>/g,function(){return/[^\s\S]/.source}),t.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+a),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},t.languages.rust["closure-params"].inside.rest=t.languages.rust,t.languages.rust.attribute.inside.string=t.languages.rust.string}(N),N.languages.go=N.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),N.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete N.languages.go["class-name"],function(t){var a=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,r=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return a.source});t.languages.cpp=t.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return a.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:a,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),t.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return r})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),t.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t.languages.cpp}}}}),t.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),t.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:t.languages.extend("cpp",{})}}),t.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},t.languages.cpp["base-clause"])}(N),N.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},N.languages.python["string-interpolation"].inside.interpolation.inside.rest=N.languages.python,N.languages.py=N.languages.python,N.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},N.languages.webmanifest=N.languages.json;var ry={};Zb(ry,{dracula:()=>iy,duotoneDark:()=>ly,duotoneLight:()=>cy,github:()=>dy,gruvboxMaterialDark:()=>zy,gruvboxMaterialLight:()=>Uy,jettwaveDark:()=>Ny,jettwaveLight:()=>qy,nightOwl:()=>my,nightOwlLight:()=>fy,oceanicNext:()=>gy,okaidia:()=>vy,oneDark:()=>Oy,oneLight:()=>Dy,palenight:()=>yy,shadesOfPurple:()=>Ey,synthwave84:()=>wy,ultramin:()=>Ly,vsDark:()=>Lh,vsLight:()=>Ty});var ny={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},iy=ny,sy={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},ly=sy,oy={plain:{backgroundColor:"#faf8f5",color:"#728fcb"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#b6ad9a"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#063289"}},{types:["property","function"],style:{color:"#b29762"}},{types:["tag-id","selector","atrule-id"],style:{color:"#2d2006"}},{types:["attr-name"],style:{color:"#896724"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule"],style:{color:"#728fcb"}},{types:["placeholder","variable"],style:{color:"#93abdc"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#896724"}}]},cy=oy,uy={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},dy=uy,py={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]},my=py,hy={plain:{color:"#403f53",backgroundColor:"#FBFBFB"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(72, 118, 214)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(152, 159, 177)",fontStyle:"italic"}},{types:["string","builtin","char","constant","url"],style:{color:"rgb(72, 118, 214)"}},{types:["variable"],style:{color:"rgb(201, 103, 101)"}},{types:["number"],style:{color:"rgb(170, 9, 130)"}},{types:["punctuation"],style:{color:"rgb(153, 76, 195)"}},{types:["function","selector","doctype"],style:{color:"rgb(153, 76, 195)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(17, 17, 17)"}},{types:["tag"],style:{color:"rgb(153, 76, 195)"}},{types:["operator","property","keyword","namespace"],style:{color:"rgb(12, 150, 155)"}},{types:["boolean"],style:{color:"rgb(188, 84, 84)"}}]},fy=hy,ht={char:"#D8DEE9",comment:"#999999",keyword:"#c5a5c5",primitive:"#5a9bcf",string:"#8dc891",variable:"#d7deea",boolean:"#ff8b50",tag:"#fc929e",function:"#79b6f2",className:"#FAC863"},xy={plain:{backgroundColor:"#282c34",color:"#ffffff"},styles:[{types:["attr-name"],style:{color:ht.keyword}},{types:["attr-value"],style:{color:ht.string}},{types:["comment","block-comment","prolog","doctype","cdata","shebang"],style:{color:ht.comment}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:ht.primitive}},{types:["boolean"],style:{color:ht.boolean}},{types:["tag"],style:{color:ht.tag}},{types:["string"],style:{color:ht.string}},{types:["punctuation"],style:{color:ht.string}},{types:["selector","char","builtin","inserted"],style:{color:ht.char}},{types:["function"],style:{color:ht.function}},{types:["operator","entity","url","variable"],style:{color:ht.variable}},{types:["keyword"],style:{color:ht.keyword}},{types:["atrule","class-name"],style:{color:ht.className}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}}]},gy=xy,jy={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"#f92672",fontStyle:"italic"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"#8292a2",fontStyle:"italic"}},{types:["string","url"],style:{color:"#a6e22e"}},{types:["variable"],style:{color:"#f8f8f2"}},{types:["number"],style:{color:"#ae81ff"}},{types:["builtin","char","constant","function","class-name"],style:{color:"#e6db74"}},{types:["punctuation"],style:{color:"#f8f8f2"}},{types:["selector","doctype"],style:{color:"#a6e22e",fontStyle:"italic"}},{types:["tag","operator","keyword"],style:{color:"#66d9ef"}},{types:["boolean"],style:{color:"#ae81ff"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)",opacity:.7}},{types:["tag","property"],style:{color:"#f92672"}},{types:["attr-name"],style:{color:"#a6e22e !important"}},{types:["doctype"],style:{color:"#8292a2"}},{types:["rule"],style:{color:"#e6db74"}}]},vy=jy,by={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},yy=by,Sy={plain:{color:"#9EFEFF",backgroundColor:"#2D2A55"},styles:[{types:["changed"],style:{color:"rgb(255, 238, 128)"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)"}},{types:["comment"],style:{color:"rgb(179, 98, 255)",fontStyle:"italic"}},{types:["punctuation"],style:{color:"rgb(255, 255, 255)"}},{types:["constant"],style:{color:"rgb(255, 98, 140)"}},{types:["string","url"],style:{color:"rgb(165, 255, 144)"}},{types:["variable"],style:{color:"rgb(255, 238, 128)"}},{types:["number","boolean"],style:{color:"rgb(255, 98, 140)"}},{types:["attr-name"],style:{color:"rgb(255, 180, 84)"}},{types:["keyword","operator","property","namespace","tag","selector","doctype"],style:{color:"rgb(255, 157, 0)"}},{types:["builtin","char","constant","function","class-name"],style:{color:"rgb(250, 208, 0)"}}]},Ey=Sy,Cy={plain:{backgroundColor:"linear-gradient(to bottom, #2a2139 75%, #34294f)",backgroundImage:"#34294f",color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#495495",fontStyle:"italic"}},{types:["punctuation"],style:{color:"#ccc"}},{types:["tag","attr-name","namespace","number","unit","hexcode","deleted"],style:{color:"#e2777a"}},{types:["property","selector"],style:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"}},{types:["function-name"],style:{color:"#6196cc"}},{types:["boolean","selector-id","function"],style:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"}},{types:["class-name","maybe-class-name","builtin"],style:{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"}},{types:["constant","symbol"],style:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"}},{types:["important","atrule","keyword","selector-class"],style:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"}},{types:["string","char","attr-value","regex","variable"],style:{color:"#f87c32"}},{types:["parameter"],style:{fontStyle:"italic"}},{types:["entity","url"],style:{color:"#67cdcc"}},{types:["operator"],style:{color:"ffffffee"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["inserted"],style:{color:"green"}}]},wy=Cy,Ay={plain:{color:"#282a2e",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(197, 200, 198)"}},{types:["string","number","builtin","variable"],style:{color:"rgb(150, 152, 150)"}},{types:["class-name","function","tag","attr-name"],style:{color:"rgb(40, 42, 46)"}}]},Ly=Ay,Ry={plain:{color:"#9CDCFE",backgroundColor:"#1E1E1E"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"rgb(86, 156, 214)"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"rgb(206, 145, 120)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(212, 212, 212)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(220, 220, 170)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}}]},Lh=Ry,My={plain:{color:"#000000",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(0, 128, 0)"}},{types:["builtin"],style:{color:"rgb(0, 112, 193)"}},{types:["number","variable","inserted"],style:{color:"rgb(9, 134, 88)"}},{types:["operator"],style:{color:"rgb(0, 0, 0)"}},{types:["constant","char"],style:{color:"rgb(129, 31, 63)"}},{types:["tag"],style:{color:"rgb(128, 0, 0)"}},{types:["attr-name"],style:{color:"rgb(255, 0, 0)"}},{types:["deleted","string"],style:{color:"rgb(163, 21, 21)"}},{types:["changed","punctuation"],style:{color:"rgb(4, 81, 165)"}},{types:["function","keyword"],style:{color:"rgb(0, 0, 255)"}},{types:["class-name"],style:{color:"rgb(38, 127, 153)"}}]},Ty=My,Py={plain:{color:"#f8fafc",backgroundColor:"#011627"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#569CD6"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#f8fafc"}},{types:["attr-name","variable"],style:{color:"#9CDCFE"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#cbd5e1"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#D4D4D4"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#7dd3fc"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},Ny=Py,ky={plain:{color:"#0f172a",backgroundColor:"#f1f5f9"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#0c4a6e"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#0f172a"}},{types:["attr-name","variable"],style:{color:"#0c4a6e"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#64748b"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#475569"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#0e7490"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},qy=ky,_y={plain:{backgroundColor:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(220, 10%, 40%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(220, 14%, 71%)"}},{types:["attr-name","class-name","maybe-class-name","boolean","constant","number","atrule"],style:{color:"hsl(29, 54%, 61%)"}},{types:["keyword"],style:{color:"hsl(286, 60%, 67%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(355, 65%, 65%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value"],style:{color:"hsl(95, 38%, 62%)"}},{types:["variable","operator","function"],style:{color:"hsl(207, 82%, 66%)"}},{types:["url"],style:{color:"hsl(187, 47%, 55%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(220, 14%, 71%)"}}]},Oy=_y,Iy={plain:{backgroundColor:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(230, 4%, 64%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(230, 8%, 24%)"}},{types:["attr-name","class-name","boolean","constant","number","atrule"],style:{color:"hsl(35, 99%, 36%)"}},{types:["keyword"],style:{color:"hsl(301, 63%, 40%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(5, 74%, 59%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value","punctuation"],style:{color:"hsl(119, 34%, 47%)"}},{types:["variable","operator","function"],style:{color:"hsl(221, 87%, 60%)"}},{types:["url"],style:{color:"hsl(198, 99%, 37%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(230, 8%, 24%)"}}]},Dy=Iy,Fy={plain:{color:"#ebdbb2",backgroundColor:"#292828"},styles:[{types:["imports","class-name","maybe-class-name","constant","doctype","builtin","function"],style:{color:"#d8a657"}},{types:["property-access"],style:{color:"#7daea3"}},{types:["tag"],style:{color:"#e78a4e"}},{types:["attr-name","char","url","regex"],style:{color:"#a9b665"}},{types:["attr-value","string"],style:{color:"#89b482"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#ea6962"}},{types:["entity","number","symbol"],style:{color:"#d3869b"}}]},zy=Fy,By={plain:{color:"#654735",backgroundColor:"#f9f5d7"},styles:[{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#af2528"}},{types:["imports","class-name","maybe-class-name","constant","doctype","builtin"],style:{color:"#b4730e"}},{types:["string","attr-value"],style:{color:"#477a5b"}},{types:["property-access"],style:{color:"#266b79"}},{types:["function","attr-name","char","url"],style:{color:"#72761e"}},{types:["tag"],style:{color:"#b94c07"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["entity","number","symbol"],style:{color:"#924f79"}}]},Uy=By,Gy=t=>A.useCallback(a=>{var r=a,{className:n,style:i,line:s}=r,l=Ah(r,["className","style","line"]);const o=_s(Wt({},l),{className:Eh("token-line",n)});return typeof t=="object"&&"plain"in t&&(o.style=t.plain),typeof i=="object"&&(o.style=Wt(Wt({},o.style||{}),i)),o},[t]),Hy=t=>{const a=A.useCallback(({types:r,empty:n})=>{if(t!=null){{if(r.length===1&&r[0]==="plain")return n!=null?{display:"inline-block"}:void 0;if(r.length===1&&n!=null)return t[r[0]]}return Object.assign(n!=null?{display:"inline-block"}:{},...r.map(i=>t[i]))}},[t]);return A.useCallback(r=>{var n=r,{token:i,className:s,style:l}=n,o=Ah(n,["token","className","style"]);const c=_s(Wt({},o),{className:Eh("token",...i.types,s),children:i.content,style:a(i)});return l!=null&&(c.style=Wt(Wt({},c.style||{}),l)),c},[a])},$y=/\r\n|\r|\n/,Ad=t=>{t.length===0?t.push({types:["plain"],content:`
`,empty:!0}):t.length===1&&t[0].content===""&&(t[0].content=`
`,t[0].empty=!0)},Ld=(t,a)=>{const r=t.length;return r>0&&t[r-1]===a?t:t.concat(a)},Vy=t=>{const a=[[]],r=[t],n=[0],i=[t.length];let s=0,l=0,o=[];const c=[o];for(;l>-1;){for(;(s=n[l]++)<i[l];){let u,h=a[l];const x=r[l][s];if(typeof x=="string"?(h=l>0?h:["plain"],u=x):(h=Ld(h,x.type),x.alias&&(h=Ld(h,x.alias)),u=x.content),typeof u!="string"){l++,a.push(h),r.push(u),n.push(0),i.push(u.length);continue}const S=u.split($y),j=S.length;o.push({types:h,content:S[0]});for(let b=1;b<j;b++)Ad(o),c.push(o=[]),o.push({types:h,content:S[b]})}l--,a.pop(),r.pop(),n.pop(),i.pop()}return Ad(o),c},Rd=Vy,Qy=({prism:t,code:a,grammar:r,language:n})=>A.useMemo(()=>{if(r==null)return Rd([a]);const i={code:a,grammar:r,language:n,tokens:[]};return t.hooks.run("before-tokenize",i),i.tokens=t.tokenize(a,r),t.hooks.run("after-tokenize",i),Rd(i.tokens)},[a,r,n,t]),Jy=(t,a)=>{const{plain:r}=t,n=t.styles.reduce((i,s)=>{const{languages:l,style:o}=s;return l&&!l.includes(a)||s.types.forEach(c=>{const u=Wt(Wt({},i[c]),o);i[c]=u}),i},{});return n.root=r,n.plain=_s(Wt({},r),{backgroundColor:void 0}),n},Wy=Jy,Ky=({children:t,language:a,code:r,theme:n,prism:i})=>{const s=a.toLowerCase(),l=Wy(n,s),o=Gy(l),c=Hy(l),u=i.languages[s],h=Qy({prism:i,language:s,code:r,grammar:u});return t({tokens:h,className:`prism-code language-${s}`,style:l!=null?l.root:{},getLineProps:o,getTokenProps:c})},Yy=t=>A.createElement(Ky,_s(Wt({},t),{prism:t.prism||N,theme:t.theme||Lh,code:t.code,language:t.language}));/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/const Xy="_wrapper_axajp_1",Zy="_pre_axajp_17",eS="_line_axajp_35",tS="_lineNumber_axajp_43",aS="_lineContent_axajp_61",rS="_label_axajp_69",dr={wrapper:Xy,pre:Zy,line:eS,lineNumber:tS,lineContent:aS,label:rS},nS={plain:{color:"#e8eef5",backgroundColor:"#1e2837"},styles:[{types:["keyword","builtin","tag","boolean"],style:{color:"#ffd700",fontWeight:"bold"}},{types:["function","method"],style:{color:"#90cdf4"}},{types:["string","char"],style:{color:"#68d391"}},{types:["number"],style:{color:"#fc8181"}},{types:["comment"],style:{color:"#a0aec0",fontStyle:"italic"}},{types:["class-name"],style:{color:"#e5c07b"}},{types:["operator"],style:{color:"#e8eef5"}},{types:["punctuation"],style:{color:"#cbd5e0"}},{types:["annotation"],style:{color:"#ffd700"}}]};function g({code:t,language:a="java",showLineNumbers:r=!1,label:n}){return e.jsxs("div",{className:dr.wrapper,children:[n&&e.jsx("div",{className:dr.label,children:n}),e.jsx(Yy,{theme:nS,code:t.trim(),language:a,children:({style:i,tokens:s,getLineProps:l,getTokenProps:o})=>e.jsx("pre",{className:dr.pre,style:i,children:s.map((c,u)=>e.jsxs("div",{...l({line:c}),className:dr.line,children:[r&&e.jsx("span",{className:dr.lineNumber,children:u+1}),e.jsx("span",{className:dr.lineContent,children:c.map((h,d)=>e.jsx("span",{...o({token:h})},d))})]},u))})})]})}const iS="_box_ih0qt_1",sS="_title_ih0qt_17",lS="_info_ih0qt_31",oS="_warning_ih0qt_49",cS="_success_ih0qt_67",uS="_error_ih0qt_85",dS="_explanation_ih0qt_103",bl={box:iS,title:sS,info:lS,warning:oS,success:cS,error:uS,explanation:dS};function m({variant:t="info",title:a,children:r}){return e.jsxs("div",{className:`${bl.box} ${bl[t]}`,children:[a&&e.jsx("strong",{className:bl.title,children:a}),r]})}const pS="_tableWrapper_9u6ut_1",mS="_table_9u6ut_1",hS="_groupHeader_9u6ut_93",yl={tableWrapper:pS,table:mS,groupHeader:hS};function J({headers:t,rows:a}){return e.jsx("div",{className:yl.tableWrapper,children:e.jsxs("table",{className:yl.table,children:[e.jsx("thead",{children:e.jsx("tr",{children:t.map((r,n)=>e.jsx("th",{children:r},n))})}),e.jsx("tbody",{children:a.map((r,n)=>r.group?e.jsx("tr",{className:yl.groupHeader,children:e.jsx("td",{colSpan:t.length,children:r.group})},n):e.jsx("tr",{children:r.cells.map((i,s)=>e.jsx("td",{children:i},s))},n))})]})})}function fS(){return e.jsxs("div",{children:[e.jsx(y,{title:"Tipus de Dades"}),e.jsx(m,{variant:"info",title:"Fonaments",children:e.jsx("p",{children:"Els tipus de dades són la base, determinen com s'emmagatzemen i manipulen els valors. Java és un llenguatge fortament tipat que distingeix entre tipus primitius (dades simples) i tipus de referència (objectes complexos), com Strings, Arrays... Veurem només els que hem après fins ara."})}),e.jsx(J,{headers:["Nom","Paraula reservada","Sintaxi"],rows:[{group:"Primitius"},{cells:["Enter","int (32 bits)","0"]},{cells:["Flotant","float (32 bits)","3.14"]},{cells:["Flotant (double)","double (64 bits)","3.14"]},{cells:["Caràcter","char","'A'"]},{cells:["Booleà","boolean","true/false"]},{group:"Objectes"},{cells:["Cadena de text","String",'"Hola"']},{cells:["Array","tipus[]","{1, 2, 3}"]}]}),e.jsx(m,{variant:"warning",title:"Compte amb utilitzar char o String per números",children:e.jsx("p",{children:"Tot i que es permet, si el nostre objectiu és calcular, és millor utilitzar un tipus de dada dedicat als números. Si bé és cert que es poden convertir i així aconseguir els càlculs, no és una bona pràctica."})})]})}const xS="_grid_zd7lr_1",gS="_card_zd7lr_15",jS="_cardTitle_zd7lr_37",vS="_blue_zd7lr_53",bS="_good_zd7lr_81",yS="_bad_zd7lr_101",Fi={grid:xS,card:gS,cardTitle:jS,blue:vS,good:bS,bad:yS};function U({title:t,variant:a="blue",children:r}){return e.jsxs("div",{className:`${Fi.card} ${Fi[a]}`,children:[e.jsx("h3",{className:Fi.cardTitle,children:t}),r]})}function oe({children:t}){return e.jsx("div",{className:Fi.grid,children:t})}const SS="_grid_dh0in_1",ES="_card_dh0in_15",CS="_cardTitle_dh0in_41",wS="_blue_dh0in_55",AS="_yellow_dh0in_63",LS="_green_dh0in_71",RS="_pink_dh0in_79",MS="_gold_dh0in_87",zi={grid:SS,card:ES,cardTitle:CS,blue:wS,yellow:AS,green:LS,pink:RS,gold:MS};function T({title:t,variant:a="blue",children:r}){return e.jsxs("div",{className:`${zi.card} ${zi[a]}`,children:[e.jsx("h4",{className:zi.cardTitle,children:t}),r]})}function me({children:t}){return e.jsx("div",{className:zi.grid,children:t})}function TS(){return e.jsxs("div",{children:[e.jsx(y,{title:"Operadors"}),e.jsx(m,{variant:"info",children:e.jsx("p",{children:"Els operadors són símbols que permeten realitzar càlculs i comparacions en Java. Es divideixen en diverses categories: aritmètics (suma, resta), de comparació (major, menor, igual), lògics (&&, ||, !), d'assignació (=, +=). N'hi ha més però per ara això és el principal."})}),e.jsx(J,{headers:["Nom","Representació","Sintaxi"],rows:[{group:"Aritmètics"},{cells:["Suma","+","a + b"]},{cells:["Resta","-","a - b"]},{cells:["Multiplicació","*","a * b"]},{cells:["Divisió","/","a / b"]},{cells:["Mòdul (residu)","%","a % b"]},{cells:["Increment","++","a++ / ++a"]},{cells:["Decrement","--","a-- / --a"]},{group:"Comparació"},{cells:["Igual a","==","a == b"]},{cells:["Distint de","!=","a != b"]},{cells:["Major que",">","a > b"]},{cells:["Menor que","<","a < b"]},{cells:["Major o igual que",">=","a >= b"]},{cells:["Menor o igual que","<=","a <= b"]},{group:"Lògics"},{cells:["AND","&&","a && b"]},{cells:["OR","||","a || b"]},{cells:["NOT","!","!a"]},{group:"Assignació"},{cells:["Assignació","=","x = 5"]},{cells:["A. amb suma","+=","x += 3"]},{cells:["A. amb resta","-=","x -= 3"]},{cells:["A. amb multiplicació","*=","x *= 3"]},{cells:["A. amb divisió","/=","x /= 3"]}]}),e.jsx(y,{title:"Molt Important"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["L'operador ",e.jsx("strong",{children:"="})," serveix per assignar un valor a una variable, mentre que"," ",e.jsx("strong",{children:"=="})," s'usa per comparar si dos valors són iguals."]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Operador =",variant:"blue",children:[e.jsxs("p",{children:["Serveix per ",e.jsx("strong",{children:"assignar"})," un valor a una variable."]}),e.jsx(g,{code:"int x = 5;"})]}),e.jsxs(U,{title:"Operador ==",variant:"blue",children:[e.jsxs("p",{children:["S'usa per ",e.jsx("strong",{children:"comparar"})," si dos valors són iguals."]}),e.jsx(g,{code:"if (x == 5)"})]})]}),e.jsx(m,{variant:"info",children:e.jsxs("p",{children:["En el cas de tipus primitius (int, double, boolean, char, etc.), ",e.jsx("strong",{children:"=="})," compara directament el valor."]})}),e.jsxs(m,{variant:"warning",title:"Strings i objectes",children:[e.jsxs("p",{children:["Si es tracta de String (o altres objectes), en Java no s'ha d'usar == per comparar contingut, sinó ",e.jsx("strong",{children:"equals()"})," perquè:"]}),e.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px"},children:[e.jsx("li",{children:"== compara si les dues referències apunten al mateix objecte en memòria, no si el text és el mateix."}),e.jsx("li",{children:"equals() compara el contingut dels Strings (caràcter per caràcter)."})]})]}),e.jsx(y,{title:"Operadors Lògics"}),e.jsx(m,{variant:"info",children:e.jsx("p",{children:"Tenint això en ment, anem a explicar i donar exemples:"})}),e.jsx(g,{label:"Variables d'exemple",code:`boolean a = true;
boolean b = true;
int c = 2;
int d = 2;`}),e.jsxs(me,{children:[e.jsxs(T,{title:"AND (&&)",variant:"blue",children:[e.jsxs("p",{children:["Retorna TRUE únicament quan ",e.jsx("strong",{children:"AMBDUES"})," expressions/valors són TRUE"]}),e.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px",listStyle:"none"},children:[e.jsx("li",{children:"(a && b) → com ambdues són true, el resultat és true."}),e.jsx("li",{children:"(a && b) && (c == d) → com ambdues expressions són true, aleshores (true && true) → true."}),e.jsx("li",{children:"(a && b) && (c > d) → com l'expressió de la dreta és false, aleshores (true && false) → false."})]})]}),e.jsxs(T,{title:"OR (||)",variant:"yellow",children:[e.jsxs("p",{children:["Al contrari que el AND, retorna TRUE si ",e.jsx("strong",{children:"AL MENYS UNA"})," expressió té valor TRUE"]}),e.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px",listStyle:"none"},children:[e.jsx("li",{children:"(a || b) → com almenys una és true, el resultat és true."}),e.jsx("li",{children:"(a || false) → com a és true, el resultat és true."}),e.jsx("li",{children:"(false || false) → com cap és true, el resultat és false."}),e.jsx("li",{children:"(c == d || c > d) → (true || false) → true."})]})]}),e.jsx(T,{title:"NOT (!)",variant:"pink",children:e.jsx("p",{children:"Inverteix el valor d'una expressió booleana."})})]})]})}function PS(){return e.jsxs("div",{children:[e.jsx(y,{title:"Sintaxi de Java"}),e.jsx(m,{variant:"info",children:e.jsx("p",{children:"La sintaxi de Java és estructurada i orientada a objectes, heretada en gran part de C++. A continuació estan les estructures fonamentals del llenguatge: condicionals i bucles i, juntament amb la seva respectiva sintaxi per escriure codi clar i organitzat."})}),e.jsx(J,{headers:["Nom","Paraula reservada","Sintaxi"],rows:[{cells:["Variable","tipus","tipus variable = valor"]},{cells:["Constant","final","final tipus constant = valor"]},{cells:["Condicional if","if","if (condició) { }"]},{cells:["Condicional else if","else if","else if (altra_condició) { }"]},{cells:["Condicional else","else","else { }"]},{cells:["Bucle for","for","for (inicialització; condició; increment) { }"]},{cells:["Bucle for each","for","for (element : col·lecció) { }"]},{cells:["Bucle while","while","while (condició) { }"]},{cells:["Bucle do while","do while","do { } while (condició)"]},{cells:["Switch","switch","switch (variable) { case valor: }"]},{cells:["Mètode principal","main","public static void main (String[] args) { }"]},{cells:["Sentència break","break","break"]},{cells:["Sentència continue","continue","continue"]},{cells:["Retorn","return","return valor"]}]}),e.jsx(m,{variant:"explanation",title:"Extra",children:e.jsx("p",{children:"Un programa no és més que una seqüència d'instruccions que s'executen en ordre de dalt cap avall, llevat que utilitzem estructures que canvien aquest flux."})})]})}function NS(){return e.jsxs("div",{children:[e.jsx(y,{title:'Estructures condicionals → "fer preguntes"'}),e.jsx(m,{variant:"info",children:e.jsx("p",{children:"Utilitzem una estructura condicional quan el programa ha de prendre decisions."})}),e.jsxs(T,{title:"Exemple vida real",variant:"blue",children:[e.jsx("p",{children:"Si plou,"}),e.jsx("p",{children:"porto paraigua."}),e.jsx("p",{children:"Si no,"}),e.jsx("p",{children:"no me'l porto."})]}),e.jsxs(T,{title:"Esquema mental",variant:"yellow",children:[e.jsx("p",{children:"SI (condició és verdadera) → faig alguna cosa"}),e.jsx("p",{children:"SI NO → faig una altra cosa"})]}),e.jsx(g,{label:"En codi",code:`if (plou) {
    portoParagua();
} else {
    noElPorto();
}`}),e.jsx(y,{title:"Cas amb més d'una pregunta (else if)"}),e.jsxs(T,{title:"Esquema mental",variant:"green",children:[e.jsx("p",{children:"Si plou → paraigua"}),e.jsx("p",{children:"Si neva → abric"}),e.jsx("p",{children:"Si no → res especial"})]}),e.jsx(g,{label:"En codi",code:`if (plou) {
    portoParagua();
} else if (neva) {
    portoAbric();
} else {
    noFaigRes();
}`}),e.jsx(y,{title:"Cas on una pregunta depèn d'una altra"}),e.jsx(m,{variant:"explanation",children:e.jsx("p",{children:"A destacar aquí que el flux va en ordre, primer avalua la primera condició, després la següent, que no depèn de la primera, és a dir, en cas de necessitar que la primera pregunta sigui TRUE perquè avaluï la següent, estaríem parlant d'estructures niuades."})}),e.jsxs(T,{title:"Esquema mental niuat",variant:"pink",children:[e.jsx("p",{children:"Si plou →"}),e.jsx("p",{style:{marginLeft:"20px"},children:"Si tinc paraigua → porto paraigua"}),e.jsx("p",{style:{marginLeft:"20px"},children:"Si no → espero que deixi de ploure"}),e.jsx("p",{children:"Si no → no porto paraigua"})]}),e.jsx(g,{label:"En codi",code:`if (plou) {
    if (paragua) {
        portoParagua();
    } else {
        esperar();
    }
} else {
    noPortoParagua();
}`})]})}function kS(){return e.jsxs("div",{children:[e.jsx(y,{title:`Switch → "menú d'opcions"`}),e.jsx(m,{variant:"info",children:e.jsx("p",{children:"Utilitzem switch quan tenim diverses opcions possibles i només una pot ser la correcta."})}),e.jsxs(T,{title:"Exemple vida real",variant:"blue",children:[e.jsx("p",{children:"Entro a un restaurant i trio:"}),e.jsx("p",{children:"1 → Pizza"}),e.jsx("p",{children:"2 → Amanida"}),e.jsx("p",{children:"3 → Pasta"})]}),e.jsx(T,{title:"Esquema mental",variant:"yellow",children:e.jsx("p",{children:"SEGONS l'opció que triïs → executo una cosa o una altra"})}),e.jsx(g,{label:"En codi",code:`switch (opcio) {
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
}`}),e.jsx(m,{variant:"explanation",children:e.jsx("p",{children:"És com anar directe al gra: si coincideix l'opció, s'executa aquest bloc."})})]})}function qS(){return e.jsxs("div",{children:[e.jsx(y,{title:'Bucles → "repetir mentre alguna cosa sigui cert"'}),e.jsx(m,{variant:"info",children:e.jsx("p",{children:"Utilitzem estructures de repetició quan volem que el programa repeteixi alguna cosa moltes vegades, ja sigui per imprimir, buscar o recórrer."})}),e.jsx(m,{variant:"warning",title:"Si la condició és false des del principi, no entra mai al bucle!!!",children:e.jsx("p",{children:"Recorda que la condició controla l'entrada al bucle. Si ja és falsa abans de començar, el codi del bucle mai s'executarà."})}),e.jsx(y,{title:'while → "repeteix mentre es compleixi la condició"'}),e.jsx(m,{variant:"info",children:e.jsx("p",{children:"Mentre no introdueixi la contrasenya correcta, segueix preguntant."})}),e.jsxs(T,{title:"Esquema mental",variant:"blue",children:[e.jsx("p",{children:"MENTRE (condició sigui true) → repeteixo"}),e.jsx("p",{children:"Quan sigui false → surto del bucle"})]}),e.jsx(g,{label:"En codi",code:`while (!passwordCorrecta) {
    demanarPassword();
}`}),e.jsx(y,{title:'do while → "fes-ho almenys una vegada"'}),e.jsx(m,{variant:"info",children:e.jsx("p",{children:"Pregunto la contrasenya almenys una vegada."})}),e.jsx(T,{title:"Esquema mental",variant:"yellow",children:e.jsx("p",{children:"FAIG → comprovo → si segueix sent true → repeteixo"})}),e.jsx(g,{label:"En codi",code:`do {
    demanarPassword();
} while (!passwordCorrecta);`}),e.jsx(y,{title:'for → "repeteix un número fix de vegades"'}),e.jsx(m,{variant:"info",children:e.jsx("p",{children:"El bucle for s'utilitza quan saps exactament quantes vegades vols repetir alguna cosa. És especialment útil per recórrer col·leccions o fer un número determinat d'iteracions."})}),e.jsx(T,{title:"Esquema mental",variant:"green",children:e.jsx("p",{children:"PER (des d'un valor inicial; mentre es compleixi una condició; incrementant) → repeteixo"})}),e.jsx(g,{label:"En codi",code:`for (int i = 1; i <= 10; i++) {
    System.out.println(i);
}
// Imprimeix números de l'1 al 10`}),e.jsx(m,{variant:"explanation",children:e.jsx("p",{children:"El bucle for té tres parts separades per punt i coma: la inicialització (on comença), la condició (fins quan continua), i l'increment (com avança en cada iteració)."})}),e.jsxs(m,{variant:"info",title:"El valor TRUE controla tot",children:[e.jsx("p",{children:"Tant en condicions com en bucles:"}),e.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px"},children:[e.jsx("li",{children:"Si la condició és true → entra."}),e.jsx("li",{children:"Si la condició és false → no entra o surt."}),e.jsx("li",{children:"Si la condició és false des del principi, el programa salta aquesta estructura i segueix amb el següent o acaba."})]})]}),e.jsx(y,{title:"Resum"}),e.jsx(J,{headers:["Estructura","Per a què serveix","Exemple mental"],rows:[{cells:["if / else","Prendre decisions",'"Si passa això, faig això"']},{cells:["switch","Triar una opció entre diverses",`"Menú d'opcions"`]},{cells:["while","Repetir mentre alguna cosa sigui cert",'"Mentre no acabi, segueixo"']},{cells:["do while","Repetir almenys una vegada",'"Pregunto mínim una vegada"']},{cells:["for","Repetir un número fix de vegades",`"De l'1 al 10 faig això"`]}]})]})}function _S(){return e.jsxs("div",{children:[e.jsx(y,{title:"Modificadors d'accés"}),e.jsx(m,{variant:"info",children:e.jsx("p",{children:"Els modificadors d'accés controlen la visibilitat de classes, mètodes i atributs en Java. Determinen qui pot accedir a cada element del codi."})}),e.jsx(J,{headers:["Nom","Paraula reservada","Descripció"],rows:[{cells:["public","public","Accessible des de qualsevol altra classe en qualsevol paquet."]},{cells:["private","private","Accessible només des de la classe en la qual va ser declarat."]},{cells:["protected","protected","Accessible des del mateix paquet i subclasses."]},{cells:["default","(sense paraula)","Per defecte. Accessible per a les classes del mateix paquet."]}]}),e.jsxs(me,{children:[e.jsxs(T,{title:"public",variant:"green",children:[e.jsxs("p",{children:["Accessible des de ",e.jsx("strong",{children:"qualsevol lloc"}),"."]}),e.jsx(g,{code:"public int edat = 25;"})]}),e.jsxs(T,{title:"private",variant:"pink",children:[e.jsxs("p",{children:["Accessible només dins la ",e.jsx("strong",{children:"mateixa classe"}),"."]}),e.jsx(g,{code:'private String nom = "Joan";'})]}),e.jsxs(T,{title:"protected",variant:"yellow",children:[e.jsxs("p",{children:["Accessible dins el ",e.jsx("strong",{children:"paquet i subclasses"}),"."]}),e.jsx(g,{code:"protected double salari = 1500.0;"})]}),e.jsxs(T,{title:"default (sense paraula)",variant:"blue",children:[e.jsxs("p",{children:["Accessible només dins el ",e.jsx("strong",{children:"mateix paquet"}),"."]}),e.jsx(g,{code:"int comptador = 0;"})]})]})]})}const OS="_button_1snnp_1",IS="_secondary_1snnp_47",DS="_small_1snnp_67",Sl={button:OS,secondary:IS,small:DS};function it({children:t,onClick:a,variant:r,size:n,...i}){const s=[Sl.button,r==="secondary"&&Sl.secondary,n==="small"&&Sl.small].filter(Boolean).join(" ");return e.jsx("button",{className:s,onClick:a,...i,children:t})}const FS="_container_cd20o_1",zS="_title_cd20o_17",BS="_arrayContainer_cd20o_33",US="_cell_cd20o_53",GS="_cellValue_cd20o_69",HS="_cellIndex_cd20o_115",$S="_controls_cd20o_131",VS="_info_cd20o_205",ga={container:FS,title:zS,arrayContainer:BS,cell:US,cellValue:GS,cellIndex:HS,controls:$S,info:VS};function yo(){return Math.floor(Math.random()*100)}function QS(t){return Array.from({length:t},()=>yo())}function JS(){const[t,a]=A.useState(()=>QS(5)),r=()=>{a(s=>s.map(()=>yo()))},n=()=>{t.length<10&&a(s=>[...s,yo()])},i=()=>{t.length>1&&a(s=>s.slice(0,-1))};return e.jsxs("div",{className:ga.container,children:[e.jsx("div",{className:ga.title,children:"Array Interactiu 1D"}),e.jsx("div",{className:ga.arrayContainer,children:t.map((s,l)=>e.jsxs("div",{className:ga.cell,children:[e.jsx("div",{className:ga.cellValue,children:s}),e.jsxs("div",{className:ga.cellIndex,children:["[",l,"]"]})]},`${l}-${s}`))}),e.jsxs("div",{className:ga.controls,children:[e.jsx(it,{onClick:r,children:"Canviar Valors"}),e.jsx(it,{onClick:n,variant:"secondary",disabled:t.length>=10,children:"Afegir Element"}),e.jsx(it,{onClick:i,variant:"secondary",disabled:t.length<=1,children:"Eliminar Ultim"})]}),e.jsxs("div",{className:ga.info,children:["int[] array = new int[",t.length,"];   // Longitud: ",t.length]})]})}const WS=`// Declaracio d'un array d'enters
int[] numeros = new int[5];

// Declaracio amb valors inicials
int[] notes = {7, 9, 5, 8, 6};

// Declaracio de Strings
String[] noms = {"Anna", "Marc", "Laia"};`,KS=`int[] notes = {7, 9, 5, 8, 6};

// Accedir a un element (index comenca en 0)
System.out.println(notes[0]); // 7
System.out.println(notes[2]); // 5

// Modificar un element
notes[1] = 10;
System.out.println(notes[1]); // 10

// Longitud de l'array
System.out.println(notes.length); // 5`,YS=`int[] numeros = {10, 20, 30, 40, 50};

// Recorregut amb for classic
for (int i = 0; i < numeros.length; i++) {
    System.out.println("Index " + i + ": " + numeros[i]);
}

// Recorregut amb for-each
for (int num : numeros) {
    System.out.println("Valor: " + num);
}`,XS=`public class ExempleArrays {
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
}`;function ZS(){return e.jsxs("div",{children:[e.jsx(y,{title:"Arrays Unidimensionals (1D)"}),e.jsx(m,{variant:"info",title:"Què és un Array?",children:e.jsxs("p",{children:["Un ",e.jsx("strong",{children:"array"})," és una estructura de dades que permet emmagatzemar múltiples valors del mateix tipus en una sola variable. Cada element té un",e.jsx("strong",{children:" índex"})," que comença en 0 i permet accedir directament a qualsevol posició."]})}),e.jsx(JS,{}),e.jsx(m,{variant:"explanation",title:"Característiques dels Arrays",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Mida fixa:"})," un cop creat, la mida no pot canviar."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Índex base 0:"})," el primer element és a la posició 0."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tipus homogeni:"})," tots els elements són del mateix tipus."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accés directe:"})," es pot accedir a qualsevol element pel seu índex en temps constant."]})]})}),e.jsx(g,{code:WS,label:"Declaració i inicialització",showLineNumbers:!0}),e.jsx(J,{headers:["Operació","Sintaxi","Exemple"],rows:[{cells:["Declarar buit","tipus[] nom = new tipus[mida]","int[] nums = new int[5]"]},{cells:["Declarar amb valors","tipus[] nom = {v1, v2, ...}","int[] nums = {1, 2, 3}"]},{cells:["Accedir element","nom[index]","nums[0] // primer element"]},{cells:["Modificar element","nom[index] = valor","nums[2] = 99"]},{cells:["Longitud","nom.length","nums.length // 3"]}]}),e.jsx(g,{code:KS,label:"Accés i modificació d'elements",showLineNumbers:!0}),e.jsx(m,{variant:"warning",title:"ArrayIndexOutOfBoundsException",children:e.jsxs("p",{children:["Si intentes accedir a un índex fora del rang (negatiu o major/igual que la longitud), Java llençarà una excepció ",e.jsx("code",{children:"ArrayIndexOutOfBoundsException"}),". Sempre comprova que l'índex estigui dins dels límits!"]})}),e.jsx(g,{code:YS,label:"Recórrer un Array",showLineNumbers:!0}),e.jsx(m,{variant:"success",title:"Exemple complet: Temperatures",children:e.jsx("p",{children:"Un exemple pràctic que calcula la mitjana i el màxim d'un array de temperatures setmanals."})}),e.jsx(g,{code:XS,label:"Exemple: Càlcul de mitjana i màxim",showLineNumbers:!0})]})}const e0="_container_1u9g6_1",t0="_title_1u9g6_17",a0="_matrixWrapper_1u9g6_33",r0="_matrix_1u9g6_33",n0="_cell_1u9g6_57",i0="_cellActive_1u9g6_107",s0="_cellSelected_1u9g6_125",l0="_cellIndex_1u9g6_141",o0="_controls_1u9g6_157",c0="_info_1u9g6_171",Ht={container:e0,title:t0,matrixWrapper:a0,matrix:r0,cell:n0,cellActive:i0,cellSelected:s0,cellIndex:l0,controls:o0,info:c0},Rh=4,Mh=4;function u0(){return Math.floor(Math.random()*100)}function Md(){return Array.from({length:Rh},()=>Array.from({length:Mh},()=>u0()))}function d0(){const[t,a]=A.useState(()=>Md()),[r,n]=A.useState(new Set),[i,s]=A.useState(null),l=A.useRef([]),o=A.useCallback(()=>{l.current.forEach(d=>clearTimeout(d)),l.current=[]},[]),c=()=>{o(),n(new Set),s(null),a(Md())},u=()=>{o(),n(new Set),s(null);const d=Math.min(Rh,Mh);for(let x=0;x<d;x++){const S=setTimeout(()=>{n(j=>{const b=new Set(j);return b.add(`${x}-${x}`),b})},x*200);l.current.push(S)}},h=(d,x)=>{s(`${d}-${x}`)};return e.jsxs("div",{className:Ht.container,children:[e.jsx("div",{className:Ht.title,children:"Matriu Interactiva 4x4"}),e.jsx("div",{className:Ht.matrixWrapper,children:e.jsx("div",{className:Ht.matrix,children:t.map((d,x)=>d.map((S,j)=>{const b=`${x}-${j}`,E=r.has(b),f=i===b;let p=Ht.cell;return E&&(p+=` ${Ht.cellActive}`),f&&(p+=` ${Ht.cellSelected}`),e.jsxs("div",{className:p,onClick:()=>h(x,j),children:[e.jsx("span",{children:S}),e.jsxs("span",{className:Ht.cellIndex,children:["[",x,"][",j,"]"]})]},b)}))})}),e.jsxs("div",{className:Ht.controls,children:[e.jsx(it,{onClick:u,children:"Ressaltar Diagonal"}),e.jsx(it,{onClick:c,variant:"secondary",children:"Nous Valors"})]}),e.jsx("div",{className:Ht.info,children:i?`matriu[${i.replace("-","][")}] = ${t[parseInt(i.split("-")[0])][parseInt(i.split("-")[1])]}`:"int[][] matriu = new int[4][4];"})]})}const p0=`// Declaracio d'una matriu 3x4
int[][] matriu = new int[3][4];

// Declaracio amb valors inicials
int[][] notes = {
    {7, 8, 9},    // Fila 0
    {6, 5, 8},    // Fila 1
    {9, 7, 10}    // Fila 2
};`,m0=`int[][] matriu = {
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
System.out.println("Columnes: " + matriu[0].length);   // 3`,h0=`int[][] matriu = {
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
}`,f0=`// Recorrer la diagonal principal
// (nomes si la matriu es quadrada)
for (int i = 0; i < matriu.length; i++) {
    System.out.println("Diagonal[" + i + "]: " + matriu[i][i]);
}`,x0=`public class ExempleMatriu {
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
}`;function g0(){return e.jsxs("div",{children:[e.jsx(y,{title:"Arrays Bidimensionals (Matrius)"}),e.jsx(m,{variant:"info",title:"Què és una Matriu?",children:e.jsxs("p",{children:["Una ",e.jsx("strong",{children:"matriu"})," (o array 2D) és un array d'arrays. Es pot pensar com una taula amb ",e.jsx("strong",{children:"files"})," i ",e.jsx("strong",{children:"columnes"}),". Cada element s'identifica amb dos índexos: ",e.jsx("code",{children:"[fila][columna]"}),"."]})}),e.jsx(d0,{}),e.jsx(m,{variant:"explanation",title:"Estructura d'una Matriu",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Files:"})," cada fila és un array independent."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Columnes:"})," cada posició dins d'una fila."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accés:"})," ",e.jsx("code",{children:"matriu[fila][columna]"})," per llegir o escriure."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mida:"})," ",e.jsx("code",{children:"matriu.length"})," dona el nombre de files, ",e.jsx("code",{children:"matriu[0].length"})," dona les columnes."]})]})}),e.jsx(g,{code:p0,label:"Declaració de matrius",showLineNumbers:!0}),e.jsx(J,{headers:["Operació","Sintaxi","Descripció"],rows:[{cells:["Declarar buida","tipus[][] nom = new tipus[files][cols]","Crea matriu amb zeros"]},{cells:["Declarar amb valors","tipus[][] nom = {{...}, {...}}","Inicialitza amb valors"]},{cells:["Accedir element","nom[fila][col]","Llegeix un valor concret"]},{cells:["Nombre files","nom.length","Retorna total de files"]},{cells:["Nombre columnes","nom[0].length","Retorna columnes de la fila 0"]}]}),e.jsx(g,{code:m0,label:"Accés i modificació d'elements",showLineNumbers:!0}),e.jsx(g,{code:h0,label:"Recorregut complet de la matriu",showLineNumbers:!0}),e.jsx(m,{variant:"success",title:"Diagonal principal",children:e.jsxs("p",{children:["En una matriu quadrada (NxN), la ",e.jsx("strong",{children:"diagonal principal"})," són els elements on l'índex de fila és igual a l'índex de columna: ",e.jsx("code",{children:"matriu[i][i]"}),"."]})}),e.jsx(g,{code:f0,label:"Recórrer la diagonal",showLineNumbers:!0}),e.jsx(m,{variant:"info",title:"Exemple pràctic: Notes d'alumnes",children:e.jsx("p",{children:"Un cas d'ús habitual és guardar les notes de diversos alumnes en diverses assignatures, on cada fila representa un alumne i cada columna una assignatura."})}),e.jsx(g,{code:x0,label:"Exemple: Mitjana per alumne",showLineNumbers:!0})]})}const j0="_container_1elsv_1",v0="_title_1elsv_9",b0="_subtitle_1elsv_17",y0="_listArea_1elsv_25",S0="_listContainer_1elsv_33",E0="_emptyMessage_1elsv_41",C0="_cell_1elsv_48",w0="_cellValue_1elsv_55",A0="_cellHighlight_1elsv_79",L0="_cellShifting_1elsv_86",R0="_cellIndex_1elsv_92",M0="_controlsGrid_1elsv_101",T0="_controlGroup_1elsv_108",P0="_controlLabel_1elsv_115",N0="_controlRow_1elsv_124",k0="_console_1elsv_156",q0="_consoleLine_1elsv_170",_0="_consoleCode_1elsv_174",O0="_consoleResult_1elsv_178",I0="_consoleError_1elsv_182",D0="_consolePlaceholder_1elsv_186",F0="_sizeBar_1elsv_192",z0="_sizeBarLabel_1elsv_205",B0="_sizeBarTrack_1elsv_210",U0="_sizeBarFill_1elsv_218",fe={container:j0,title:v0,subtitle:b0,listArea:y0,listContainer:S0,emptyMessage:E0,cell:C0,cellValue:w0,cellHighlight:A0,cellShifting:L0,cellIndex:R0,controlsGrid:M0,controlGroup:T0,controlLabel:P0,controlRow:N0,console:k0,consoleLine:q0,consoleCode:_0,consoleResult:O0,consoleError:I0,consolePlaceholder:D0,sizeBar:F0,sizeBarLabel:z0,sizeBarTrack:B0,sizeBarFill:U0},Ei=15;function G0(){const[t,a]=A.useState(["Hola","Món","Java"]),[r,n]=A.useState([]),[i,s]=A.useState(null),[l,o]=A.useState([]),c=A.useRef(null),u=A.useRef(null),h=A.useRef(null),d=A.useRef(null),x=A.useRef(null),S=A.useRef(null),j=A.useRef(null),b=A.useRef(null),E=A.useRef(null);A.useEffect(()=>{E.current&&(E.current.scrollTop=E.current.scrollHeight)},[r]);const f=A.useCallback((_,H,ae=!1)=>{n(O=>[...O.slice(-25),{code:_,result:H,isError:ae,id:Date.now()+Math.random()}])},[]),p=A.useCallback(_=>{s(_),setTimeout(()=>s(null),800)},[]),v=A.useCallback(_=>{o(_),setTimeout(()=>o([]),600)},[]),R=()=>{var H;const _=(H=c.current)==null?void 0:H.value.trim();if(_){if(t.length>=Ei){f(`llista.add("${_}")`,`Error: massa elements (max ${Ei} per la demo)`,!0);return}a(ae=>[...ae,_]),f(`llista.add("${_}")`,`// S'afegeix "${_}" al final → mida = ${t.length+1}`),p(t.length),c.current.value="",c.current.focus()}},P=()=>{var O,B;const _=parseInt((O=u.current)==null?void 0:O.value),H=(B=h.current)==null?void 0:B.value.trim();if(isNaN(_)||!H)return;if(_<0||_>t.length){f(`llista.add(${_}, "${H}")`,`IndexOutOfBoundsException: Index ${_} fora de rang [0..${t.length}]`,!0);return}if(t.length>=Ei){f(`llista.add(${_}, "${H}")`,`Error: massa elements (max ${Ei})`,!0);return}const ae=[];for(let G=_;G<t.length;G++)ae.push(G+1);a(G=>[...G.slice(0,_),H,...G.slice(_)]),f(`llista.add(${_}, "${H}")`,`// Insereix "${H}" a posició ${_} → els elements es desplacen`),p(_),v(ae),u.current.value="",h.current.value=""},k=()=>{var O;const _=parseInt((O=d.current)==null?void 0:O.value);if(isNaN(_))return;if(_<0||_>=t.length){f(`llista.remove(${_})`,`IndexOutOfBoundsException: Index ${_} fora de rang [0..${t.length-1}]`,!0);return}const H=t[_],ae=[];for(let B=_+1;B<t.length;B++)ae.push(B-1);a(B=>B.filter((G,re)=>re!==_)),f(`llista.remove(${_})`,`// Elimina "${H}" de posició ${_} → retorna "${H}"`),v(ae),d.current.value=""},q=()=>{var H;const _=parseInt((H=x.current)==null?void 0:H.value);if(!isNaN(_)){if(_<0||_>=t.length){f(`llista.get(${_})`,`IndexOutOfBoundsException: Index ${_} fora de rang [0..${t.length-1}]`,!0);return}f(`llista.get(${_})`,`→ "${t[_]}"`),p(_),x.current.value=""}},w=()=>{var O,B;const _=parseInt((O=S.current)==null?void 0:O.value),H=(B=j.current)==null?void 0:B.value.trim();if(isNaN(_)||!H)return;if(_<0||_>=t.length){f(`llista.set(${_}, "${H}")`,`IndexOutOfBoundsException: Index ${_} fora de rang [0..${t.length-1}]`,!0);return}const ae=t[_];a(G=>G.map((re,de)=>de===_?H:re)),f(`llista.set(${_}, "${H}")`,`// Substitueix "${ae}" per "${H}" → retorna "${ae}"`),p(_),S.current.value="",j.current.value=""},$=()=>{var O;const _=(O=b.current)==null?void 0:O.value.trim();if(!_)return;const H=t.includes(_),ae=t.indexOf(_);f(`llista.contains("${_}")`,`→ ${H}${H?` (trobat a posició ${ae})`:""}`),H&&p(ae),b.current.value=""},F=()=>{f("llista.size()",`→ ${t.length}`)},le=()=>{a([]),f("llista.clear()","// S'han eliminat tots els elements → mida = 0")},ee=()=>{a(["Hola","Món","Java"]),n([]),s(null),o([])},je=_=>H=>{H.key==="Enter"&&_()},te=Math.max(10,Math.pow(2,Math.ceil(Math.log2(t.length||1)+.1)));return e.jsxs("div",{className:fe.container,children:[e.jsx("div",{className:fe.title,children:"Simulador Interactiu d'ArrayList"}),e.jsx("div",{className:fe.subtitle,children:"ArrayList<String> llista — Prova les operacions i observa el resultat!"}),e.jsx("div",{className:fe.listArea,children:t.length===0?e.jsx("div",{className:fe.emptyMessage,children:"[ ArrayList buit — afegeix elements! ]"}):e.jsx("div",{className:fe.listContainer,children:t.map((_,H)=>e.jsxs("div",{className:`${fe.cell} ${i===H?fe.cellHighlight:""} ${l.includes(H)?fe.cellShifting:""}`,children:[e.jsx("div",{className:fe.cellValue,children:`"${_}"`}),e.jsxs("div",{className:fe.cellIndex,children:["[",H,"]"]})]},`${H}-${_}-${t.length}`))})}),e.jsxs("div",{className:fe.sizeBar,children:[e.jsxs("span",{className:fe.sizeBarLabel,children:["size() = ",t.length]}),e.jsx("div",{className:fe.sizeBarTrack,children:e.jsx("div",{className:fe.sizeBarFill,style:{width:`${t.length/te*100}%`}})}),e.jsxs("span",{children:["capacitat interna ≈ ",te]})]}),e.jsxs("div",{className:fe.controlsGrid,children:[e.jsxs("div",{className:fe.controlGroup,children:[e.jsx("div",{className:fe.controlLabel,children:"Afegir elements"}),e.jsxs("div",{className:fe.controlRow,children:[e.jsx("input",{ref:c,placeholder:"valor",onKeyDown:je(R)}),e.jsx(it,{onClick:R,variant:"secondary",children:"add()"})]}),e.jsxs("div",{className:fe.controlRow,style:{marginTop:6},children:[e.jsx("input",{ref:u,placeholder:"pos",style:{maxWidth:50}}),e.jsx("input",{ref:h,placeholder:"valor",onKeyDown:je(P)}),e.jsx(it,{onClick:P,variant:"secondary",children:"add(i, v)"})]})]}),e.jsxs("div",{className:fe.controlGroup,children:[e.jsx("div",{className:fe.controlLabel,children:"Accedir i modificar"}),e.jsxs("div",{className:fe.controlRow,children:[e.jsx("input",{ref:x,placeholder:"pos",style:{maxWidth:50},onKeyDown:je(q)}),e.jsx(it,{onClick:q,variant:"secondary",children:"get(i)"}),e.jsx("input",{ref:d,placeholder:"pos",style:{maxWidth:50},onKeyDown:je(k)}),e.jsx(it,{onClick:k,variant:"secondary",children:"remove(i)"})]}),e.jsxs("div",{className:fe.controlRow,style:{marginTop:6},children:[e.jsx("input",{ref:S,placeholder:"pos",style:{maxWidth:50}}),e.jsx("input",{ref:j,placeholder:"nou valor",onKeyDown:je(w)}),e.jsx(it,{onClick:w,variant:"secondary",children:"set(i, v)"})]})]}),e.jsxs("div",{className:fe.controlGroup,children:[e.jsx("div",{className:fe.controlLabel,children:"Cercar i utilitats"}),e.jsxs("div",{className:fe.controlRow,children:[e.jsx("input",{ref:b,placeholder:"valor",onKeyDown:je($)}),e.jsx(it,{onClick:$,variant:"secondary",children:"contains()"})]}),e.jsxs("div",{className:fe.controlRow,style:{marginTop:6},children:[e.jsx(it,{onClick:F,variant:"secondary",children:"size()"}),e.jsx(it,{onClick:le,variant:"secondary",children:"clear()"}),e.jsx(it,{onClick:ee,children:"Reset"})]})]})]}),e.jsx("div",{className:fe.console,ref:E,children:r.length===0?e.jsx("div",{className:fe.consolePlaceholder,children:"// Fes clic als botons per veure el codi Java equivalent..."}):r.map(_=>e.jsxs("div",{className:fe.consoleLine,children:[e.jsx("span",{className:fe.consoleCode,children:_.code})," ",e.jsx("span",{className:_.isError?fe.consoleError:fe.consoleResult,children:_.result})]},_.id))})]})}const H0="import java.util.ArrayList;",$0=`// Crear un ArrayList de Strings
ArrayList<String> noms = new ArrayList<>();

// Crear un ArrayList d'enters (cal usar Integer, no int)
ArrayList<Integer> numeros = new ArrayList<>();

// Crear un ArrayList de decimals
ArrayList<Double> preus = new ArrayList<>();`,V0=`ArrayList<String> fruites = new ArrayList<>();

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
int mida = fruites.size(); // 3`,Q0=`ArrayList<String> noms = new ArrayList<>();
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
}`,J0=`// AMB ARRAY NORMAL: mida fixa, hem de saber quants alumnes hi ha
String[] alumnes = new String[30]; // I si en venen 31? 💥
int comptador = 0;
alumnes[comptador++] = "Anna";
alumnes[comptador++] = "Marc";
// Per eliminar un del mig... un malson de desplaçaments manuals`,W0=`// AMB ARRAYLIST: creix automàticament, molt més fàcil
ArrayList<String> alumnes = new ArrayList<>();
alumnes.add("Anna");
alumnes.add("Marc");
alumnes.add("Laia");
alumnes.remove(1); // Elimina "Marc" fàcilment
// Mida s'ajusta sola: alumnes.size() → 2`,K0=`import java.util.ArrayList;

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
}`,Y0=`// ❌ NO funciona: els tipus primitius no es poden usar directament
// ArrayList<int> numeros = new ArrayList<>();

// ✅ Cal usar les classes Wrapper
ArrayList<Integer> numeros = new ArrayList<>();
ArrayList<Double>  decimals = new ArrayList<>();
ArrayList<Boolean> flags = new ArrayList<>();
ArrayList<Character> lletres = new ArrayList<>();

// Java fa la conversió automàtica (autoboxing)
numeros.add(42);        // int → Integer automàticament
int valor = numeros.get(0); // Integer → int automàticament`,X0=`ArrayList<String> llista = new ArrayList<>();
llista.add("A");
llista.add("B");

// ❌ ERROR: IndexOutOfBoundsException
// String x = llista.get(5);   // Només hi ha posicions 0 i 1!
// llista.remove(10);           // No existeix posició 10!

// ✅ CORRECTE: sempre comprova amb size()
if (2 < llista.size()) {
    String x = llista.get(2);
}`;function Z0(){return e.jsxs("div",{children:[e.jsx(y,{title:"ArrayList: Llistes Dinàmiques"}),e.jsxs(m,{variant:"info",title:"Què és un ArrayList?",children:[e.jsxs("p",{children:["Un ",e.jsx("strong",{children:"ArrayList"})," és com un array, però ",e.jsx("strong",{children:"millor"}),": creix i s'encongeix automàticament quan afegeixes o elimines elements. No has de decidir la mida per avançat — simplement afegeixes el que necessitis."]}),e.jsx("p",{style:{marginTop:8},children:"Imagina't una llista de la compra: pots afegir productes, treure'ls quan els compres i no et cal saber per endavant quants en seran. Això és un ArrayList!"})]}),e.jsx(y,{title:"Array vs ArrayList: Quina diferència hi ha?"}),e.jsxs(me,{children:[e.jsx(T,{title:"Array (clàssic)",variant:"pink",children:e.jsxs("ul",{style:{margin:0,paddingLeft:18},children:[e.jsxs("li",{children:["Mida ",e.jsx("strong",{children:"fixa"})," — decidida al crear-lo"]}),e.jsx("li",{children:"No pot créixer ni encongir-se"}),e.jsx("li",{children:"Funciona amb tipus primitius (int, double...)"}),e.jsxs("li",{children:["Accés amb ",e.jsx("code",{children:"array[i]"})]}),e.jsxs("li",{children:["Longitud amb ",e.jsx("code",{children:".length"})]})]})}),e.jsx(T,{title:"ArrayList (dinàmic)",variant:"blue",children:e.jsxs("ul",{style:{margin:0,paddingLeft:18},children:[e.jsxs("li",{children:["Mida ",e.jsx("strong",{children:"flexible"})," — creix automàticament"]}),e.jsx("li",{children:"Afegir i eliminar quan vulguis"}),e.jsx("li",{children:"Només objectes (Integer, String, Double...)"}),e.jsxs("li",{children:["Accés amb ",e.jsx("code",{children:".get(i)"})]}),e.jsxs("li",{children:["Longitud amb ",e.jsx("code",{children:".size()"})]})]})})]}),e.jsxs(oe,{children:[e.jsx(U,{title:"Amb Array: rígid i complicat",variant:"bad",children:e.jsx(g,{code:J0,language:"java"})}),e.jsx(U,{title:"Amb ArrayList: flexible i senzill",variant:"good",children:e.jsx(g,{code:W0,language:"java"})})]}),e.jsx(y,{title:"Com crear un ArrayList"}),e.jsx(m,{variant:"warning",title:"Important: el import",children:e.jsx("p",{children:"Abans d'usar ArrayList, cal importar-lo a la part de dalt del fitxer:"})}),e.jsx(g,{code:H0,label:"Import necessari",language:"java"}),e.jsx(g,{code:$0,label:"Creació d'un ArrayList",language:"java",showLineNumbers:!0}),e.jsx(m,{variant:"explanation",title:"Tipus Wrapper: per què Integer i no int?",children:e.jsxs("p",{children:["ArrayList només pot guardar ",e.jsx("strong",{children:"objectes"}),", no tipus primitius. Per això existeixen les ",e.jsx("strong",{children:"classes Wrapper"}),': són la versió "objecte" dels tipus primitius. La bona notícia és que Java fa la conversió automàticament (',e.jsx("strong",{children:"autoboxing"}),")."]})}),e.jsx(J,{headers:["Tipus primitiu","Classe Wrapper","Exemple ArrayList"],rows:[{cells:["int","Integer","ArrayList<Integer>"]},{cells:["double","Double","ArrayList<Double>"]},{cells:["boolean","Boolean","ArrayList<Boolean>"]},{cells:["char","Character","ArrayList<Character>"]},{cells:["String","String (ja és objecte!)","ArrayList<String>"]}]}),e.jsx(g,{code:Y0,label:"Tipus Wrapper i Autoboxing",language:"java",showLineNumbers:!0}),e.jsx(y,{title:"Operacions principals"}),e.jsx(J,{headers:["Mètode","Què fa","Retorna"],rows:[{cells:["add(element)","Afegeix al final de la llista","true"]},{cells:["add(index, element)","Insereix a la posició indicada","void"]},{cells:["get(index)","Obté l'element de la posició","L'element"]},{cells:["set(index, element)","Substitueix l'element de la posició","L'element antic"]},{cells:["remove(index)","Elimina l'element de la posició","L'element eliminat"]},{cells:["size()","Retorna quants elements hi ha","int"]},{cells:["contains(element)","Comprova si l'element hi és","boolean"]},{cells:["indexOf(element)","Retorna la posició de l'element (-1 si no hi és)","int"]},{cells:["isEmpty()","Comprova si la llista està buida","boolean"]},{cells:["clear()","Elimina tots els elements","void"]}]}),e.jsx(g,{code:V0,label:"Operacions bàsiques en acció",language:"java",showLineNumbers:!0}),e.jsx(y,{title:"Prova-ho tu!"}),e.jsx(m,{variant:"info",title:"Simulador interactiu",children:e.jsx("p",{children:"Utilitza el simulador de sota per provar totes les operacions d'un ArrayList. Escriu valors, fes clic als botons i observa com canvia la llista i el codi Java equivalent a la consola."})}),e.jsx(G0,{}),e.jsx(y,{title:"Recórrer un ArrayList"}),e.jsx(g,{code:Q0,label:"Formes de recórrer",language:"java",showLineNumbers:!0}),e.jsx(m,{variant:"explanation",title:"Quina forma triar?",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"for clàssic:"})," quan necessites saber la posició (índex) de cada element."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"for-each:"})," quan només vols accedir al valor, sense l'índex. Més net i menys propensos a errors."]})]})}),e.jsx(y,{title:"Errors comuns"}),e.jsx(m,{variant:"error",title:"IndexOutOfBoundsException",children:e.jsxs("p",{children:["L'error més habitual! Passa quan intentes accedir a una posició que no existeix. Recorda: les posicions van de ",e.jsx("strong",{children:"0"})," a ",e.jsx("strong",{children:"size() - 1"}),"."]})}),e.jsx(g,{code:X0,label:"Com evitar errors d'índex",language:"java",showLineNumbers:!0}),e.jsx(y,{title:"Exemple complet: Llista de la Compra"}),e.jsx(m,{variant:"success",title:"Posant-ho tot junt",children:e.jsx("p",{children:"Un exemple pràctic que utilitza les operacions principals: afegir, eliminar, cercar i recórrer una llista."})}),e.jsx(g,{code:K0,label:"LlistaCompra.java",language:"java",showLineNumbers:!0}),e.jsx(y,{title:"Resum"}),e.jsxs(me,{children:[e.jsx(T,{title:"Crear",variant:"blue",children:e.jsx("code",{children:"ArrayList<Tipus> nom = new ArrayList<>();"})}),e.jsxs(T,{title:"Afegir",variant:"green",children:[e.jsx("code",{children:"llista.add(element)"}),e.jsx("br",{}),e.jsx("code",{children:"llista.add(pos, element)"})]}),e.jsxs(T,{title:"Accedir / Modificar",variant:"yellow",children:[e.jsx("code",{children:"llista.get(pos)"}),e.jsx("br",{}),e.jsx("code",{children:"llista.set(pos, element)"})]}),e.jsxs(T,{title:"Eliminar / Cercar",variant:"pink",children:[e.jsx("code",{children:"llista.remove(pos)"}),e.jsx("br",{}),e.jsx("code",{children:"llista.contains(element)"}),e.jsx("br",{}),e.jsx("code",{children:"llista.size()"})]})]}),e.jsx(m,{variant:"info",title:"Quan usar ArrayList?",children:e.jsxs("p",{children:["Usa ",e.jsx("strong",{children:"ArrayList"})," quan no sàpigues per avançat quants elements tindràs, o quan necessitis afegir i eliminar elements sovint. Si la mida és fixa i coneguda, un array normal pot ser suficient i una mica més eficient."]})})]})}const e1="_container_4hbij_1",t1="_title_4hbij_17",a1="_functionsGrid_4hbij_33",r1="_functionBox_4hbij_47",n1="_functionName_4hbij_75",i1="_functionDesc_4hbij_91",s1="_inputGroup_4hbij_105",l1="_input_4hbij_105",o1="_executeBtn_4hbij_165",c1="_output_4hbij_211",u1="_outputLabel_4hbij_237",d1="_outputValue_4hbij_247",p1="_outputEmpty_4hbij_257",se={container:e1,title:t1,functionsGrid:a1,functionBox:r1,functionName:n1,functionDesc:i1,inputGroup:s1,input:l1,executeBtn:o1,output:c1,outputLabel:u1,outputValue:d1,outputEmpty:p1};function m1(){const[t,a]=A.useState(""),[r,n]=A.useState(""),i=()=>{a("Hola Mon!")},s=()=>{n(String(Math.floor(Math.random()*100)))};return e.jsxs("div",{className:se.container,children:[e.jsx("div",{className:se.title,children:"Demo: Funcions sense Parametres"}),e.jsxs("div",{className:se.functionsGrid,children:[e.jsxs("div",{className:se.functionBox,children:[e.jsx("div",{className:se.functionName,children:"saludar()"}),e.jsx("div",{className:se.functionDesc,children:"Retorna un missatge de salutacio fix. No rep cap parametre."}),e.jsx("button",{className:se.executeBtn,onClick:i,children:"Executar saludar()"}),e.jsx("div",{className:se.output,style:{marginTop:12},children:t?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:se.outputLabel,children:"Resultat: "}),e.jsxs("span",{className:se.outputValue,children:['"',t,'"']})]}):e.jsx("span",{className:se.outputEmpty,children:"Prem el boto per executar..."})})]}),e.jsxs("div",{className:se.functionBox,children:[e.jsx("div",{className:se.functionName,children:"obtenirNumeroAleatori()"}),e.jsx("div",{className:se.functionDesc,children:"Genera i retorna un numero aleatori entre 0 i 99."}),e.jsx("button",{className:se.executeBtn,onClick:s,children:"Executar obtenirNumeroAleatori()"}),e.jsx("div",{className:se.output,style:{marginTop:12},children:r?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:se.outputLabel,children:"Resultat: "}),e.jsx("span",{className:se.outputValue,children:r})]}):e.jsx("span",{className:se.outputEmpty,children:"Prem el boto per executar..."})})]})]})]})}function h1(){const[t,a]=A.useState(""),[r,n]=A.useState(""),[i,s]=A.useState(""),[l,o]=A.useState(""),[c,u]=A.useState(""),h=()=>{const x=parseFloat(t),S=parseFloat(r);if(isNaN(x)||isNaN(S)){s("Introdueix dos numeros valids");return}s(String(x+S))},d=()=>{if(!l.trim()){u("Introdueix un nom");return}u(`Hola, ${l.trim()}! Benvingut/da!`)};return e.jsxs("div",{className:se.container,children:[e.jsx("div",{className:se.title,children:"Demo: Funcions amb Parametres"}),e.jsxs("div",{className:se.functionsGrid,children:[e.jsxs("div",{className:se.functionBox,children:[e.jsx("div",{className:se.functionName,children:"sumar(int a, int b)"}),e.jsx("div",{className:se.functionDesc,children:"Rep dos numeros com a parametres i retorna la seva suma."}),e.jsxs("div",{className:se.inputGroup,children:[e.jsx("input",{type:"number",className:se.input,placeholder:"a",value:t,onChange:x=>a(x.target.value)}),e.jsx("input",{type:"number",className:se.input,placeholder:"b",value:r,onChange:x=>n(x.target.value)}),e.jsx("button",{className:se.executeBtn,onClick:h,children:"Executar"})]}),e.jsx("div",{className:se.output,children:i?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:se.outputLabel,children:["sumar(",t,", ",r,") = "]}),e.jsx("span",{className:se.outputValue,children:i})]}):e.jsx("span",{className:se.outputEmpty,children:"Introdueix valors i executa..."})})]}),e.jsxs("div",{className:se.functionBox,children:[e.jsx("div",{className:se.functionName,children:"saludarPersona(String nom)"}),e.jsx("div",{className:se.functionDesc,children:"Rep un nom com a parametre i retorna un missatge personalitzat."}),e.jsxs("div",{className:se.inputGroup,children:[e.jsx("input",{type:"text",className:se.input,placeholder:"Nom",value:l,onChange:x=>o(x.target.value)}),e.jsx("button",{className:se.executeBtn,onClick:d,children:"Executar"})]}),e.jsx("div",{className:se.output,children:c?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:se.outputLabel,children:"Resultat: "}),e.jsxs("span",{className:se.outputValue,children:['"',c,'"']})]}):e.jsx("span",{className:se.outputEmpty,children:"Introdueix un nom i executa..."})})]})]})]})}function Th({mode:t="no-params"}){return t==="with-params"?e.jsx(h1,{}):e.jsx(m1,{})}const f1=`// Estructura general d'una funció sense paràmetres
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
}`;function j1(){return e.jsxs("div",{children:[e.jsx(y,{title:"Funcions sense Paràmetres"}),e.jsx(m,{variant:"info",title:"Què és una Funció?",children:e.jsxs("p",{children:["Una ",e.jsx("strong",{children:"funció"})," (o mètode) és un bloc de codi reutilitzable que realitza una tasca específica. Les funcions ",e.jsx("strong",{children:"sense paràmetres"})," no necessiten rebre cap dada externa per funcionar: fan la seva feina de manera autònoma."]})}),e.jsx(Th,{mode:"no-params"}),e.jsx(m,{variant:"explanation",title:"Avantatges de les funcions",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Reutilització:"})," es poden cridar tantes vegades com calgui."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Organització:"})," el codi queda més net i estructurat."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Manteniment:"})," si cal canviar la lògica, només es modifica en un lloc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Llegibilitat:"})," el nom de la funció descriu què fa."]})]})}),e.jsx(g,{code:f1,label:"Estructura d'una funció sense paràmetres",showLineNumbers:!0}),e.jsx(J,{headers:["Concepte","Descripció","Exemple"],rows:[{cells:["static","Permet cridar la funció sense crear un objecte","static void fer()"]},{cells:["Tipus de retorn","Indica què retorna la funció","int, String, void..."]},{cells:["void","La funció no retorna cap valor","static void mostrar()"]},{cells:["return","Retorna un valor i acaba la funció",'return "Hola";']}]}),e.jsx(g,{code:x1,label:"Exemple: Funció saludar()",showLineNumbers:!0}),e.jsx(m,{variant:"warning",title:"void vs tipus de retorn",children:e.jsxs("p",{children:["Si una funció és ",e.jsx("code",{children:"void"}),", no pot tenir ",e.jsx("code",{children:"return"})," amb valor (però pot tenir ",e.jsx("code",{children:"return;"})," per sortir abans). Si té un tipus de retorn (",e.jsx("code",{children:"int"}),", ",e.jsx("code",{children:"String"}),", etc.), ",e.jsx("strong",{children:"obligatòriament"})," ha de retornar un valor d'aquell tipus."]})}),e.jsx(g,{code:g1,label:"Exemple: Funcions sense paràmetres variades",showLineNumbers:!0})]})}const v1=`// Estructura general d'una funció amb paràmetres
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
}`;function S1(){return e.jsxs("div",{children:[e.jsx(y,{title:"Funcions amb Paràmetres"}),e.jsx(m,{variant:"info",title:"Paràmetres i Arguments",children:e.jsxs("p",{children:["Les funcions amb ",e.jsx("strong",{children:"paràmetres"})," reben dades d'entrada que poden utilitzar dins del seu cos. Els ",e.jsx("strong",{children:"paràmetres"})," es defineixen a la declaració de la funció, i els ",e.jsx("strong",{children:"arguments"})," són els valors concrets que es passen quan es crida la funció."]})}),e.jsx(Th,{mode:"with-params"}),e.jsx(g,{code:v1,label:"Estructura d'una funció amb paràmetres",showLineNumbers:!0}),e.jsx(J,{headers:["Concepte","Descripció","Exemple"],rows:[{cells:["Paràmetre","Variable declarada a la signatura","(int a, int b)"]},{cells:["Argument","Valor passat en la crida","sumar(5, 3)"]},{cells:["Pas per valor","Java copia el valor del primitiu","int, double, char..."]},{cells:["Pas per referència","Java copia la referència de l'objecte","String, arrays, objectes"]}]}),e.jsx(m,{variant:"explanation",title:"Diferència entre Paràmetre i Argument",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Paràmetre:"}),' és la variable a la definició de la funció. És com un "espai reservat".']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Argument:"})," és el valor real que enviem quan cridem la funció."]}),e.jsxs("li",{children:["Exemple: en ",e.jsx("code",{children:"static int sumar(int a, int b)"}),", ",e.jsx("code",{children:"a"})," i ",e.jsx("code",{children:"b"})," són paràmetres."]}),e.jsxs("li",{children:["Quan cridem ",e.jsx("code",{children:"sumar(5, 3)"}),", ",e.jsx("code",{children:"5"})," i ",e.jsx("code",{children:"3"})," són arguments."]})]})}),e.jsx(g,{code:b1,label:"Exemples bàsics de funcions amb paràmetres",showLineNumbers:!0}),e.jsx(m,{variant:"warning",title:"Ordre i tipus dels arguments",children:e.jsxs("p",{children:["Quan cridem una funció, els arguments han de coincidir en ",e.jsx("strong",{children:"nombre"}),",",e.jsx("strong",{children:" ordre"})," i ",e.jsx("strong",{children:"tipus"})," amb els paràmetres declarats. Si no, Java donarà un error de compilació."]})}),e.jsx(g,{code:y1,label:"Funcions amb múltiples paràmetres",showLineNumbers:!0})]})}const E1=`public class Exemples {
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
}`,w1=`static int valorAbsolut(int num) {
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
}`,L1=`public class AmbParametres {
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
}`,R1=`public class ExempleVarargs {
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
}`,T1=`public class Comptador {
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
}`,P1=`// BONS noms de mètodes: verb + nom, camelCase
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
public boolean check(String s) { ... }         // Massa genèric, paràmetre poc clar`;function N1(){return e.jsxs("div",{children:[e.jsx(y,{title:"Tipus de Funcions (Mètodes) en Java"}),e.jsx(m,{variant:"info",title:"Per què classificar les funcions?",children:e.jsxs("p",{children:["Les funcions (en Java es diuen ",e.jsx("strong",{children:"mètodes"}),") es poden classificar de diverses maneres: segons si ",e.jsx("strong",{children:"retornen un valor"})," o no, segons si reben ",e.jsx("strong",{children:"paràmetres"}),", i segons si són ",e.jsx("strong",{children:"estàtiques"})," o d'instància. Entendre aquestes classificacions ens ajuda a escriure codi més clar i organitzat."]})}),e.jsx(y,{title:"Classificació per Tipus de Retorn"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["La primera gran distinció és si la funció ",e.jsx("strong",{children:"retorna un valor"})," al codi que l'ha cridat, o si simplement ",e.jsx("strong",{children:"executa una acció"})," sense retornar res."]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"void - No retorna res (Procediment)",variant:"blue",children:[e.jsxs("p",{style:{marginBottom:"10px"},children:["Les funcions ",e.jsx("code",{children:"void"})," executen una acció (imprimir, modificar dades...) però ",e.jsx("strong",{children:"no retornen cap valor"}),". No pots guardar el seu resultat en una variable."]}),e.jsx(g,{code:`static void saludar() {
    System.out.println("Hola!");
    // No hi ha return amb valor
}

// Crida:
saludar(); // Imprimeix "Hola!"
// int x = saludar(); // ERROR!`})]}),e.jsxs(U,{title:"Amb retorn - Retorna un valor",variant:"good",children:[e.jsxs("p",{style:{marginBottom:"10px"},children:["Les funcions amb tipus de retorn (",e.jsx("code",{children:"int"}),", ",e.jsx("code",{children:"String"}),",",e.jsx("code",{children:" boolean"}),", ",e.jsx("code",{children:"double"}),"...) ",e.jsx("strong",{children:"retornen un valor"})," que es pot guardar en una variable."]}),e.jsx(g,{code:`static int sumar(int a, int b) {
    return a + b;
}

// Crida:
int resultat = sumar(5, 3);
System.out.println(resultat); // 8`})]})]}),e.jsx(g,{label:"Exemples de funcions void (procediments)",code:E1,showLineNumbers:!0}),e.jsx(g,{label:"Exemples de funcions amb retorn",code:C1,showLineNumbers:!0}),e.jsx(y,{title:"La Paraula Clau return"}),e.jsx(m,{variant:"info",title:"Com funciona return?",children:e.jsxs("p",{children:["La paraula clau ",e.jsx("code",{children:"return"})," fa dues coses: ",e.jsx("strong",{children:"1)"})," finalitza l'execució de la funció immediatament, i ",e.jsx("strong",{children:"2)"})," retorna el valor especificat al codi que ha cridat la funció. Després d'un ",e.jsx("code",{children:"return"}),", cap línia de codi dins la funció s'executarà."]})}),e.jsx(g,{label:"Comportament de return",code:w1,showLineNumbers:!0}),e.jsx(m,{variant:"warning",title:"Regles importants de return",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Una funció amb tipus de retorn (no void) ",e.jsx("strong",{children:"ha de tenir"})," un ",e.jsx("code",{children:"return"})," en tots els camins possibles."]}),e.jsxs("li",{children:["El valor retornat ha de ser del ",e.jsx("strong",{children:"mateix tipus"})," que el declarat (o compatible)."]}),e.jsxs("li",{children:["En funcions ",e.jsx("code",{children:"void"}),", pots usar ",e.jsx("code",{children:"return;"})," (sense valor) per sortir anticipadament."]}),e.jsxs("li",{children:["El codi després d'un ",e.jsx("code",{children:"return"})," és ",e.jsx("strong",{children:"inassolible"})," i dona error de compilació."]})]})}),e.jsx(y,{title:"Classificació per Paràmetres"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Una altra forma de classificar les funcions és segons si reben ",e.jsx("strong",{children:"dades d'entrada"})," (paràmetres) o no. Els paràmetres permeten que la funció treballi amb valors diferents cada cop que es crida."]})}),e.jsx(g,{label:"Funcions sense paràmetres",code:A1,showLineNumbers:!0}),e.jsx(g,{label:"Funcions amb paràmetres",code:L1,showLineNumbers:!0}),e.jsx(y,{title:"Paràmetres Variables (Varargs)"}),e.jsx(m,{variant:"info",title:"Què són els varargs?",children:e.jsxs("p",{children:["Java permet definir funcions que accepten un ",e.jsx("strong",{children:"nombre variable de paràmetres"})," del mateix tipus. S'utilitza la sintaxi ",e.jsx("code",{children:"tipus... nom"}),". Internament, Java tracta els varargs com un ",e.jsx("strong",{children:"array"}),"."]})}),e.jsx(g,{label:"Exemple de varargs (int... numeros)",code:R1,showLineNumbers:!0}),e.jsx(m,{variant:"warning",title:"Restriccions dels varargs",children:e.jsxs("p",{children:["Els varargs han de ser l'",e.jsx("strong",{children:"últim paràmetre"})," de la funció i només pot haver-n'hi ",e.jsx("strong",{children:"un"})," per funció. Per exemple:",e.jsx("code",{children:" static void exemple(String prefix, int... numeros)"})," és vàlid, però ",e.jsx("code",{children:"static void exemple(int... a, int... b)"})," ",e.jsx("strong",{children:"NO"})," ho és."]})}),e.jsx(y,{title:"Classificació per Accés: static vs Instància"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["En Java, els mètodes poden ser ",e.jsx("strong",{children:"estàtics"})," (pertanyen a la classe) o d'",e.jsx("strong",{children:"instància"})," (pertanyen a un objecte concret). Aquesta distinció és fonamental en la Programació Orientada a Objectes."]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Mètodes static",variant:"blue",children:[e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px",marginBottom:"10px"},children:[e.jsxs("li",{children:["Pertanyen a la ",e.jsx("strong",{children:"classe"}),", no a un objecte"]}),e.jsxs("li",{children:["Es criden amb ",e.jsx("code",{children:"NomClasse.mètode()"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No"})," poden accedir a atributs d'instància (no-static)"]}),e.jsx("li",{children:"Ideals per a funcions utilitat (càlculs, conversions...)"})]}),e.jsx(g,{code:`// Exemples de Java:
Math.sqrt(16);     // 4.0
Math.max(5, 3);    // 5
Integer.parseInt("42"); // 42`})]}),e.jsxs(U,{title:"Mètodes d'instància",variant:"good",children:[e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px",marginBottom:"10px"},children:[e.jsxs("li",{children:["Pertanyen a un ",e.jsx("strong",{children:"objecte"})," concret"]}),e.jsxs("li",{children:["Es criden amb ",e.jsx("code",{children:"objecte.mètode()"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Poden"})," accedir a atributs d'instància amb ",e.jsx("code",{children:"this"})]}),e.jsx("li",{children:"Ideals quan el mètode necessita l'estat de l'objecte"})]}),e.jsx(g,{code:`// Exemples:
String nom = "Hola";
nom.length();        // 4
nom.toUpperCase();   // "HOLA"
nom.charAt(0);       // 'H'`})]})]}),e.jsx(g,{label:"Exemple de mètodes static",code:M1,showLineNumbers:!0}),e.jsx(g,{label:"Exemple de mètodes d'instància",code:T1,showLineNumbers:!0}),e.jsx(m,{variant:"info",title:"Quan usar static vs instància?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Usa static"})," quan la funció no depengui de cap atribut d'objecte: funcions matemàtiques, utilitats, conversions, validacions pures."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Usa instància"})," quan la funció necessiti accedir o modificar les dades d'un objecte concret: getters, setters, mètodes que depenguin de l'estat."]}),e.jsxs("li",{children:["Als programes simples amb ",e.jsx("code",{children:"main"}),", solem usar ",e.jsx("code",{children:"static"})," perquè no creem objectes."]}),e.jsx("li",{children:"En POO, la majoria de mètodes són d'instància."})]})}),e.jsx(y,{title:"Nomenclatura: Funció vs Mètode vs Procediment"}),e.jsx(m,{variant:"explanation",title:"Per què tants noms?",children:e.jsxs("p",{children:["En el món de la programació s'utilitzen diferents termes per referir-se a blocs de codi reutilitzables. Depenent del llenguatge i del context, es fan servir noms diferents. En Java, el terme oficial és ",e.jsx("strong",{children:"mètode"}),", però és important conèixer la terminologia general."]})}),e.jsxs(me,{children:[e.jsxs(T,{title:"Funció",variant:"blue",children:[e.jsxs("p",{children:["Terme ",e.jsx("strong",{children:"general"})," de programació. És un bloc de codi que rep dades, les processa i ",e.jsx("strong",{children:"retorna un valor"}),"."]}),e.jsx("p",{style:{marginTop:"8px"},children:"Llenguatges: C, Python, JavaScript, etc."}),e.jsx(g,{code:`// Concepte de "funció"
static int sumar(int a, int b) {
    return a + b; // Retorna un valor
}`})]}),e.jsxs(T,{title:"Procediment",variant:"yellow",children:[e.jsxs("p",{children:["Terme general per a un bloc de codi que executa una acció però ",e.jsx("strong",{children:"NO retorna cap valor"})," (void)."]}),e.jsx("p",{style:{marginTop:"8px"},children:"Llenguatges: Pascal, Ada, Visual Basic (Sub)."}),e.jsx(g,{code:`// Concepte de "procediment"
static void mostrarMenu() {
    System.out.println("1. Jugar");
    System.out.println("2. Sortir");
    // No retorna res
}`})]}),e.jsxs(T,{title:"Mètode",variant:"green",children:[e.jsxs("p",{children:["El nom que Java utilitza per a ",e.jsx("strong",{children:"TOTES"})," les funcions i procediments dins d'una classe. Tant si retornen valor com si no."]}),e.jsx("p",{style:{marginTop:"8px"},children:"Llenguatges: Java, C#, Ruby, etc. (POO)"}),e.jsx(g,{code:`// En Java, TOT són "mètodes"
class Exemple {
    void saludar() { ... }   // Mètode
    int sumar() { ... }      // Mètode
}`})]})]}),e.jsx(m,{variant:"success",title:"Conclusió",children:e.jsxs("p",{children:["En Java, tant les funcions (que retornen valor) com els procediments (void) s'anomenen ",e.jsx("strong",{children:"mètodes"}),`, ja que sempre estan dins d'una classe. A la pràctica, molts programadors diuen "funció" de manera informal, i està perfectament bé. L'important és entendre que en Java, el terme tècnicament correcte és `,e.jsx("strong",{children:"mètode"}),"."]})}),e.jsx(y,{title:"Convencions per Nomenar Mètodes"}),e.jsx(m,{variant:"info",title:"Regles de nomenclatura en Java",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Utilitza ",e.jsx("strong",{children:"camelCase"}),": la primera paraula en minúscula, les següents amb majúscula inicial."]}),e.jsxs("li",{children:["Comença amb un ",e.jsx("strong",{children:"verb"})," que descrigui l'acció: ",e.jsx("code",{children:"calcular"}),", ",e.jsx("code",{children:"obtenir"}),", ",e.jsx("code",{children:"mostrar"}),", ",e.jsx("code",{children:"és"}),", ",e.jsx("code",{children:"té"}),"."]}),e.jsxs("li",{children:["Sigues ",e.jsx("strong",{children:"descriptiu"}),": el nom ha d'explicar què fa el mètode."]}),e.jsxs("li",{children:["Per booleans, usa prefixos com ",e.jsx("code",{children:"és"})," o ",e.jsx("code",{children:"té"}),": ",e.jsx("code",{children:"esValid()"}),", ",e.jsx("code",{children:"tePermisos()"}),"."]}),e.jsxs("li",{children:["Getters: ",e.jsx("code",{children:"getNom()"}),", ",e.jsx("code",{children:"getEdat()"}),". Setters: ",e.jsx("code",{children:"setNom()"}),", ",e.jsx("code",{children:"setEdat()"}),"."]})]})}),e.jsx(g,{label:"Bons i mals noms de mètodes",code:P1,showLineNumbers:!0}),e.jsx(y,{title:"Taula Resum de Tipus de Funcions"}),e.jsx(J,{headers:["Classificació","Tipus","Descripció","Exemple"],rows:[{group:"Per tipus de retorn"},{cells:["Retorn","void (Procediment)","No retorna cap valor","static void saludar() { ... }"]},{cells:["Retorn","Amb retorn (Funció)","Retorna un valor del tipus declarat","static int sumar(int a, int b) { return a + b; }"]},{group:"Per paràmetres"},{cells:["Paràmetres","Sense paràmetres","No rep cap dada d'entrada","static void saludar() { ... }"]},{cells:["Paràmetres","Amb paràmetres","Rep una o més dades d'entrada","static int sumar(int a, int b) { ... }"]},{cells:["Paràmetres","Varargs","Rep un nombre variable de paràmetres","static int sumar(int... nums) { ... }"]},{group:"Per accés (static vs instància)"},{cells:["Accés","static","Pertany a la classe, es crida amb NomClasse.mètode()","static double arrel(double n) { ... }"]},{cells:["Accés","Instància","Pertany a l'objecte, es crida amb objecte.mètode()","public void mostrar() { ... }"]},{group:"Per nomenclatura"},{cells:["Nom","Funció","Retorna un valor (terme general)","int sumar(int a, int b)"]},{cells:["Nom","Procediment","No retorna valor / void (terme general)","void mostrarMenu()"]},{cells:["Nom","Mètode","Nom oficial en Java per a tot","Qualsevol funció/procediment en Java"]}]}),e.jsx(m,{variant:"success",title:"Resum Final",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Les funcions ",e.jsx("code",{children:"void"})," executen accions sense retornar valor (procediments)."]}),e.jsxs("li",{children:["Les funcions amb tipus de retorn retornen un valor amb ",e.jsx("code",{children:"return"}),"."]}),e.jsx("li",{children:"Les funcions poden rebre 0, 1, o múltiples paràmetres (inclosos varargs)."}),e.jsxs("li",{children:["Els mètodes ",e.jsx("code",{children:"static"})," pertanyen a la classe; els d'instància pertanyen a l'objecte."]}),e.jsxs("li",{children:["En Java, tot són ",e.jsx("strong",{children:"mètodes"}),', però informalment diem "funció" o "procediment".']}),e.jsxs("li",{children:["Usa ",e.jsx("strong",{children:"camelCase"})," i comença els noms amb un ",e.jsx("strong",{children:"verb"})," descriptiu."]})]})})]})}const k1="_container_1pzke_1",q1="_title_1pzke_17",_1="_demosGrid_1pzke_33",O1="_demoBox_1pzke_45",I1="_demoTitle_1pzke_61",D1="_inputRow_1pzke_75",F1="_label_1pzke_89",z1="_input_1pzke_75",B1="_executeBtn_1pzke_139",U1="_result_1pzke_185",G1="_stepsContainer_1pzke_217",H1="_step_1pzke_217",$1="_stepVisible_1pzke_257",V1="_stepHighlight_1pzke_267",Q1="_sequence_1pzke_279",J1="_sequenceLabel_1pzke_301",W1="_placeholder_1pzke_315",we={container:k1,title:q1,demosGrid:_1,demoBox:O1,demoTitle:I1,inputRow:D1,label:F1,input:z1,executeBtn:B1,result:U1,stepsContainer:G1,step:H1,stepVisible:$1,stepHighlight:V1,sequence:Q1,sequenceLabel:J1,placeholder:W1};function K1(){const[t,a]=A.useState(""),[r,n]=A.useState(null),[i,s]=A.useState([]),[l,o]=A.useState(0),c=A.useRef([]),u=A.useCallback(()=>{c.current.forEach(S=>clearTimeout(S)),c.current=[]},[]);A.useEffect(()=>()=>u(),[u]);const h=S=>S<0?null:S===0||S===1?1:S*h(S-1),d=S=>{const j=[];if(S<=1)return j.push({text:`factorial(${S}) = ${S}`,isBase:!0}),j;for(let E=S;E>=2;E--)j.push({text:`factorial(${E}) = ${E} * factorial(${E-1})`,isBase:!1});j.push({text:"factorial(1) = 1  (cas base)",isBase:!0});let b=1;for(let E=2;E<=S;E++)b*=E,j.push({text:`factorial(${E}) = ${E} * ${b/E} = ${b}`,isBase:!1});return j},x=()=>{u(),o(0);const S=parseInt(t,10);if(isNaN(S)||S<0||S>12){n("Introdueix un numero entre 0 i 12"),s([]);return}const j=h(S);n(`${S}! = ${j}`);const b=d(S);s(b),b.forEach((E,f)=>{const p=setTimeout(()=>{o(v=>v+1)},(f+1)*300);c.current.push(p)})};return e.jsxs("div",{className:we.demoBox,children:[e.jsx("div",{className:we.demoTitle,children:"Factorial (n!)"}),e.jsxs("div",{className:we.inputRow,children:[e.jsx("span",{className:we.label,children:"n ="}),e.jsx("input",{type:"number",className:we.input,placeholder:"5",min:"0",max:"12",value:t,onChange:S=>a(S.target.value)}),e.jsx("button",{className:we.executeBtn,onClick:x,children:"Calcular"})]}),r&&e.jsx("div",{className:we.result,children:r}),i.length>0&&e.jsx("div",{className:we.stepsContainer,children:i.map((S,j)=>e.jsx("div",{className:`${we.step} ${j<l?we.stepVisible:""} ${S.isBase?we.stepHighlight:""}`,children:S.text},j))}),!r&&e.jsx("div",{className:we.placeholder,children:"Introdueix un valor i prem Calcular per veure els passos"})]})}function Y1(){const[t,a]=A.useState(""),[r,n]=A.useState(null),[i,s]=A.useState([]),l=u=>{if(u<=0)return 0;if(u===1)return 1;let h=0,d=1;for(let x=2;x<=u;x++){const S=h+d;h=d,d=S}return d},o=u=>{const h=[];for(let d=0;d<=u;d++)h.push(l(d));return h},c=()=>{const u=parseInt(t,10);if(isNaN(u)||u<0||u>20){n("Introdueix un numero entre 0 i 20"),s([]);return}const h=l(u);n(`fibonacci(${u}) = ${h}`),s(o(u))};return e.jsxs("div",{className:we.demoBox,children:[e.jsx("div",{className:we.demoTitle,children:"Fibonacci"}),e.jsxs("div",{className:we.inputRow,children:[e.jsx("span",{className:we.label,children:"Posicio n ="}),e.jsx("input",{type:"number",className:we.input,placeholder:"7",min:"0",max:"20",value:t,onChange:u=>a(u.target.value)}),e.jsx("button",{className:we.executeBtn,onClick:c,children:"Calcular"})]}),r&&e.jsx("div",{className:we.result,children:r}),i.length>0&&e.jsxs("div",{className:we.sequence,children:[e.jsx("span",{className:we.sequenceLabel,children:"Sequencia completa:"}),i.join(", ")]}),!r&&e.jsx("div",{className:we.placeholder,children:"Introdueix una posicio i prem Calcular"})]})}function X1(){return e.jsxs("div",{className:we.container,children:[e.jsx("div",{className:we.title,children:"Demo: Funcions Recursives"}),e.jsxs("div",{className:we.demosGrid,children:[e.jsx(K1,{}),e.jsx(Y1,{})]})]})}const Z1=`// Estructura general d'una funció recursiva
static tipusRetorn funcioRecursiva(parametres) {
    // 1. Cas base: condició de parada
    if (condicioParada) {
        return valorBase;
    }

    // 2. Cas recursiu: la funció es crida a si mateixa
    return funcioRecursiva(parametresModificats);
}`,eE=`public class Factorial {
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
}`,tE=`public class Fibonacci {
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
}`,aE=`public class SumaRecursiva {
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
}`;function rE(){return e.jsxs("div",{children:[e.jsx(y,{title:"Funcions Recursives"}),e.jsx(m,{variant:"info",title:"Què és la Recursivitat?",children:e.jsxs("p",{children:["La ",e.jsx("strong",{children:"recursivitat"})," és una tècnica on una funció es crida a si mateixa per resoldre un problema. Cada crida resol una part més petita del problema fins arribar a un ",e.jsx("strong",{children:"cas base"})," que atura la recursió."]})}),e.jsx(X1,{}),e.jsx(m,{variant:"explanation",title:"Els dos elements clau",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Cas base:"})," la condició que atura la recursió. Sense cas base, la funció es cridaria infinitament i provocaria un ",e.jsx("code",{children:"StackOverflowError"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Cas recursiu:"})," la funció es crida a si mateixa amb paràmetres més simples o més petits, acostant-se al cas base."]})]})}),e.jsx(g,{code:Z1,label:"Estructura d'una funció recursiva",showLineNumbers:!0}),e.jsx(J,{headers:["Concepte","Descripció","Importància"],rows:[{cells:["Cas base","Condició de parada de la recursió","Obligatori per evitar bucle infinit"]},{cells:["Cas recursiu","La funció es crida amb dades més simples","Ha de convergir cap al cas base"]},{cells:["Pila de crides","Cada crida s'apila fins al cas base","Limitat per la memòria de la pila"]},{cells:["StackOverflowError","Error si no hi ha cas base o no convergeix","Cal evitar-lo sempre"]}]}),e.jsx(m,{variant:"success",title:"Factorial (n!)",children:e.jsxs("p",{children:["El factorial és l'exemple clàssic de recursivitat: ",e.jsx("code",{children:"n! = n * (n-1)!"})," amb cas base ",e.jsx("code",{children:"0! = 1"}),"."]})}),e.jsx(g,{code:eE,label:"Exemple: Factorial recursiu",showLineNumbers:!0}),e.jsx(m,{variant:"success",title:"Fibonacci",children:e.jsxs("p",{children:["La seqüència de Fibonacci es defineix com: ",e.jsx("code",{children:"fib(n) = fib(n-1) + fib(n-2)"}),", amb casos base ",e.jsx("code",{children:"fib(0) = 0"})," i ",e.jsx("code",{children:"fib(1) = 1"}),"."]})}),e.jsx(g,{code:tE,label:"Exemple: Fibonacci recursiu",showLineNumbers:!0}),e.jsx(m,{variant:"warning",title:"Eficiència de la recursió",children:e.jsxs("p",{children:["La versió recursiva de Fibonacci és molt ineficient perquè recalcula els mateixos valors moltes vegades. Per a valors grans de ",e.jsx("code",{children:"n"}),", és preferible utilitzar un enfocament iteratiu o ",e.jsx("strong",{children:"memoització"}),"."]})}),e.jsx(g,{code:aE,label:"Més exemples: Suma i Potència recursius",showLineNumbers:!0})]})}const nE=`public class Calculadora {
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
}`,iE=`public class GestorNotes {
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
}`,sE=`public class JocEndevinar {
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
}`;function lE(){return e.jsxs("div",{children:[e.jsx(y,{title:"Cridar Funcions des del Main"}),e.jsx(m,{variant:"info",title:"El mètode main()",children:e.jsxs("p",{children:["El mètode ",e.jsx("code",{children:"public static void main(String[] args)"})," és el"," ",e.jsx("strong",{children:"punt d'entrada"})," de qualsevol programa Java. Des d'aquí cridem les nostres funcions per executar la lògica del programa. Les funcions han de ser"," ",e.jsx("code",{children:"static"})," per poder-les cridar des del ",e.jsx("code",{children:"main"})," sense crear objectes."]})}),e.jsx(m,{variant:"explanation",title:"Flux d'execució",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"1."})," El programa comença sempre al ",e.jsx("code",{children:"main()"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"2."}),` Quan es crida una funció, l'execució "salta" al cos de la funció.`]}),e.jsxs("li",{children:[e.jsx("strong",{children:"3."})," Un cop la funció acaba (amb ",e.jsx("code",{children:"return"})," o al final del bloc), l'execució torna al punt on es va cridar."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"4."})," El valor retornat es pot guardar en una variable o usar directament."]})]})}),e.jsx(m,{variant:"success",title:"Exemple 1: Calculadora",children:e.jsxs("p",{children:["Combina funcions sense paràmetres (menú) i amb paràmetres (operacions). El ",e.jsx("code",{children:"main"})," coordina el flux."]})}),e.jsx(g,{code:nE,label:"Exemple 1: Calculadora amb funcions",showLineNumbers:!0}),e.jsx(m,{variant:"success",title:"Exemple 2: Gestor de Notes",children:e.jsx("p",{children:"Mostra com encadenar crides a funcions: el resultat d'una funció es passa com a argument de la següent. Cada funció fa una tasca concreta."})}),e.jsx(g,{code:iE,label:"Exemple 2: Crides encadenades de funcions",showLineNumbers:!0}),e.jsx(m,{variant:"warning",title:"Bones pràctiques",children:e.jsxs("ul",{children:[e.jsxs("li",{children:["Cada funció ha de fer ",e.jsx("strong",{children:"una sola cosa"})," i fer-la bé."]}),e.jsxs("li",{children:["Dona noms ",e.jsx("strong",{children:"descriptius"})," a les funcions (verbs: calcular, obtenir, mostrar...)."]}),e.jsxs("li",{children:["El ",e.jsx("code",{children:"main"})," ha de ser ",e.jsx("strong",{children:"curt i clar"}),": coordina, no calcula."]}),e.jsx("li",{children:"Reutilitza funcions en lloc de copiar codi."})]})}),e.jsx(m,{variant:"success",title:"Exemple 3: Joc d'endevinar",children:e.jsx("p",{children:"Un exemple més complet que combina funcions sense paràmetres, amb paràmetres i recursivitat per crear un petit joc interactiu."})}),e.jsx(g,{code:sE,label:"Exemple 3: Combinant tots els tipus de funcions",showLineNumbers:!0})]})}const oE=`public class ResumComplet {
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
}`;function cE(){return e.jsxs("div",{children:[e.jsx(y,{title:"Resum Comparatiu"}),e.jsx(m,{variant:"info",title:"Vista general",children:e.jsx("p",{children:"Aquí tens un resum de tots els conceptes tractats en aquesta secció: arrays unidimensionals, arrays bidimensionals (matrius), funcions sense paràmetres, funcions amb paràmetres i funcions recursives."})}),e.jsxs(me,{children:[e.jsx(T,{title:"Arrays 1D",variant:"blue",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Emmagatzemen múltiples valors del mateix tipus"}),e.jsx("li",{children:"Mida fixa definida en la creació"}),e.jsx("li",{children:"Accés per índex (base 0)"}),e.jsx("li",{children:e.jsx("code",{children:"int[] nums = new int[5];"})}),e.jsxs("li",{children:["Recorregut amb ",e.jsx("code",{children:"for"})," o ",e.jsx("code",{children:"for-each"})]}),e.jsxs("li",{children:[e.jsx("code",{children:".length"})," per obtenir la mida"]})]})}),e.jsx(T,{title:"Arrays 2D (Matrius)",variant:"yellow",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Array d'arrays: files i columnes"}),e.jsxs("li",{children:["Accés amb doble índex: ",e.jsx("code",{children:"[fila][col]"})]}),e.jsx("li",{children:e.jsx("code",{children:"int[][] mat = new int[3][4];"})}),e.jsxs("li",{children:["Recorregut amb doble ",e.jsx("code",{children:"for"})]}),e.jsxs("li",{children:[e.jsx("code",{children:".length"})," = files, ",e.jsx("code",{children:"[0].length"})," = columnes"]}),e.jsx("li",{children:"Ús: taules de dades, taulers de joc"})]})}),e.jsx(T,{title:"Funcions sense Paràmetres",variant:"green",children:e.jsxs("ul",{children:[e.jsx("li",{children:"No reben cap dada d'entrada"}),e.jsxs("li",{children:["Poden retornar un valor o ser ",e.jsx("code",{children:"void"})]}),e.jsx("li",{children:e.jsx("code",{children:"static String saludar() {...}"})}),e.jsx("li",{children:"Ideals per accions autònomes"}),e.jsx("li",{children:"Exemples: mostrar menú, generar aleatori"}),e.jsxs("li",{children:["Es criden amb ",e.jsx("code",{children:"nomFunció()"})]})]})}),e.jsx(T,{title:"Funcions amb Paràmetres",variant:"pink",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Reben dades d'entrada (paràmetres)"}),e.jsx("li",{children:"Més flexibles i reutilitzables"}),e.jsx("li",{children:e.jsx("code",{children:"static int sumar(int a, int b) {...}"})}),e.jsx("li",{children:"Arguments han de coincidir en tipus i ordre"}),e.jsx("li",{children:"Poden rebre arrays i objectes"}),e.jsxs("li",{children:["Crida: ",e.jsx("code",{children:"sumar(5, 3)"})]})]})}),e.jsx(T,{title:"Funcions Recursives",variant:"gold",children:e.jsxs("ul",{children:[e.jsx("li",{children:"La funció es crida a si mateixa"}),e.jsxs("li",{children:["Necessiten un ",e.jsx("strong",{children:"cas base"})," obligatori"]}),e.jsxs("li",{children:["El ",e.jsx("strong",{children:"cas recursiu"})," ha de convergir"]}),e.jsx("li",{children:"Exemples: factorial, fibonacci, potència"}),e.jsxs("li",{children:["Perill: ",e.jsx("code",{children:"StackOverflowError"})," sense cas base"]}),e.jsx("li",{children:"Alternativa: versió iterativa"})]})})]}),e.jsx(m,{variant:"explanation",title:"Comparativa ràpida",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Arrays"})," són per ",e.jsx("em",{children:"emmagatzemar dades"}),", les"," ",e.jsx("strong",{children:"funcions"})," són per ",e.jsx("em",{children:"processar-les"}),"."]}),e.jsxs("li",{children:["Les funcions ",e.jsx("strong",{children:"sense paràmetres"})," són més simples però menys flexibles que les funcions ",e.jsx("strong",{children:"amb paràmetres"}),"."]}),e.jsxs("li",{children:["La ",e.jsx("strong",{children:"recursivitat"})," és elegant però pot ser menys eficient que un bucle iteratiu per a problemes grans."]}),e.jsxs("li",{children:["Combinar arrays amb funcions és la clau per escriure programes ",e.jsx("strong",{children:"modulars i nets"}),"."]})]})}),e.jsx(g,{code:oE,label:"Exemple integrador: tots els conceptes junts",showLineNumbers:!0})]})}function uE(){return e.jsxs("div",{children:[e.jsx(y,{title:"Introducció a la Programació Orientada a Objectes (POO)"}),e.jsx(m,{variant:"info",title:"Què és la POO?",children:e.jsxs("p",{children:["La ",e.jsx("strong",{children:"Programació Orientada a Objectes (POO)"})," és un paradigma de programació que organitza el codi al voltant d'",e.jsx("strong",{children:"objectes"})," en lloc de funcions i lògica seqüencial. Un objecte és una representació d'una entitat del món real que té",e.jsx("strong",{children:" propietats"})," (atributs) i ",e.jsx("strong",{children:"comportaments"})," (mètodes)."]})}),e.jsx(y,{title:"Programació Procedural vs POO"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Fins ara hem programat de forma ",e.jsx("strong",{children:"procedural"}),": un conjunt d'instruccions que s'executen de dalt a baix, una darrere l'altra. Funciona per a programes petits, però a mesura que el programa creix, es torna difícil de mantenir i organitzar."]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Programació Procedural",variant:"bad",children:[e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[e.jsx("li",{children:"Codi seqüencial, de dalt a baix"}),e.jsx("li",{children:"Dades i funcions separades"}),e.jsx("li",{children:"Difícil de reutilitzar"}),e.jsx("li",{children:"Difícil de mantenir en projectes grans"}),e.jsx("li",{children:"Tot està barrejat en un sol fitxer"})]}),e.jsx(g,{code:`// Tot en un sol lloc
String nomCotxe = "Toyota";
int kmCotxe = 50000;
System.out.println(nomCotxe);
// ... 500 linies mes ...`})]}),e.jsxs(U,{title:"Programació Orientada a Objectes",variant:"good",children:[e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[e.jsx("li",{children:"Codi organitzat en objectes"}),e.jsx("li",{children:"Dades i comportaments junts"}),e.jsx("li",{children:"Fàcil de reutilitzar"}),e.jsx("li",{children:"Fàcil de mantenir i escalar"}),e.jsx("li",{children:"Cada classe té la seva responsabilitat"})]}),e.jsx(g,{code:`// Organitzat en objectes
Cotxe toyota = new Cotxe("Toyota", 50000);
toyota.mostrarInfo();
// Clar, net, reutilitzable`})]})]}),e.jsx(y,{title:"Analogia: L'Edifici de La Salle"}),e.jsxs(m,{variant:"info",children:[e.jsxs("p",{children:["Imagina l'edifici de ",e.jsx("strong",{children:"La Salle"}),". L'edifici no és només un bloc de formigó; està organitzat en ",e.jsx("strong",{children:"plantes"}),", cada planta té ",e.jsx("strong",{children:"aules"}),", cada aula té",e.jsx("strong",{children:" cadires, taules, una pissarra"}),"... Cada element té les seves propietats i funcions."]}),e.jsxs("p",{style:{marginTop:"10px"},children:["En POO fem el mateix: en lloc de tenir tot el codi en un sol lloc, l'organitzem en",e.jsx("strong",{children:" classes"})," (els plànols) i creem ",e.jsx("strong",{children:"objectes"})," (les instàncies reals)."]})]}),e.jsx(g,{label:"L'edifici com a objectes",code:`// La classe es el planol
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
aulaJava.impartirClasse();`}),e.jsx(y,{title:"Els 4 Pilars de la POO"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["La POO es fonamenta en ",e.jsx("strong",{children:"4 pilars"})," fonamentals que fan que el codi sigui organitzat, segur, reutilitzable i flexible."]})}),e.jsxs(me,{children:[e.jsxs(T,{title:"Encapsulació",variant:"blue",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Amagar les dades internes"})," d'un objecte i controlar-ne l'accés mitjançant mètodes públics (getters i setters)."]}),e.jsx("p",{style:{marginTop:"8px"},children:"Com una càpsula de medicament: no veus el contingut, però funciona."}),e.jsx(g,{code:`private String nom;
public String getNom() {
    return nom;
}`})]}),e.jsxs(T,{title:"Herència",variant:"yellow",children:[e.jsxs("p",{children:["Una classe pot ",e.jsx("strong",{children:"heretar"})," atributs i mètodes d'una altra classe. Permet reutilitzar codi i crear jerarquies."]}),e.jsx("p",{style:{marginTop:"8px"},children:"Com un fill que hereta característiques dels pares."}),e.jsx(g,{code:`class Animal {
    void menjar() { ... }
}
class Gos extends Animal {
    void bordar() { ... }
}`})]}),e.jsxs(T,{title:"Polimorfisme",variant:"green",children:[e.jsxs("p",{children:["Un mateix mètode pot tenir ",e.jsx("strong",{children:"comportaments diferents"})," segons l'objecte que l'executa."]}),e.jsx("p",{style:{marginTop:"8px"},children:'Com el verb "parlar": un humà parla, un gos borda, un gat miola.'}),e.jsx(g,{code:`Animal a = new Gos();
a.ferSo(); // "Bup bup!"
Animal b = new Gat();
b.ferSo(); // "Miau!"`})]}),e.jsxs(T,{title:"Abstracció",variant:"pink",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Simplificar la complexitat"})," mostrant només el que és necessari i amagant els detalls interns d'implementació."]}),e.jsx("p",{style:{marginTop:"8px"},children:"Com conduir un cotxe: només uses el volant i pedals, no veus el motor."}),e.jsx(g,{code:`// No cal saber COM funciona
cotxe.arrencar();
cotxe.accelerar();
// Nomes cal saber QUE fa`})]})]}),e.jsx(m,{variant:"success",title:"Resum",children:e.jsx("p",{children:"La POO ens permet organitzar el codi de manera que reflecteixi el món real. Cada objecte té les seves dades i els seus comportaments, i els 4 pilars (encapsulació, herència, polimorfisme i abstracció) ens ajuden a crear codi net, segur, reutilitzable i fàcil de mantenir."})})]})}function dE(){return e.jsxs("div",{children:[e.jsx(y,{title:"Classe vs Objecte"}),e.jsx(m,{variant:"info",title:"Concepte fonamental",children:e.jsxs("p",{children:["La diferència entre ",e.jsx("strong",{children:"classe"})," i ",e.jsx("strong",{children:"objecte"})," és un dels conceptes més importants de la POO. Entendre-la bé és clau per dominar la programació orientada a objectes."]})}),e.jsx(y,{title:"Analogia: El Plànol i la Casa"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Imagina que vols construir una casa. Primer necessites un ",e.jsx("strong",{children:"plànol"})," (la classe) que descrigui com serà la casa: quantes habitacions tindrà, de quin color serà, quina superfície tindrà... Després, a partir d'aquest plànol, pots construir",e.jsx("strong",{children:" una o moltes cases"})," (els objectes). Cada casa pot tenir colors diferents, però totes segueixen el mateix plànol."]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"Classe (El Plànol)",variant:"blue",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[e.jsxs("li",{children:["És la ",e.jsx("strong",{children:"plantilla"})," o definició"]}),e.jsx("li",{children:"Descriu quins atributs i mètodes tindran els objectes"}),e.jsx("li",{children:"No ocupa espai en memòria (fins que es crea un objecte)"}),e.jsx("li",{children:"Es defineix un cop"}),e.jsxs("li",{children:["Utilitza la paraula clau ",e.jsx("code",{children:"class"})]})]})}),e.jsx(U,{title:"Objecte (La Casa)",variant:"good",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[e.jsxs("li",{children:["És una ",e.jsx("strong",{children:"instància"})," concreta de la classe"]}),e.jsx("li",{children:"Té valors reals per a cada atribut"}),e.jsx("li",{children:"Ocupa espai en memòria"}),e.jsx("li",{children:"Se'n poden crear tants com es vulgui"}),e.jsxs("li",{children:["Es crea amb la paraula clau ",e.jsx("code",{children:"new"})]})]})})]}),e.jsx(y,{title:"Exemple: La Classe Cotxe"}),e.jsx(m,{variant:"info",children:e.jsxs("p",{children:["Vegem un exemple concret amb una classe ",e.jsx("code",{children:"Cotxe"}),". La classe defineix que tot cotxe té una marca, un model, un color i quilòmetres. Després podem crear tants cotxes com vulguem."]})}),e.jsx(g,{label:"Definició de la classe Cotxe (el plànol)",showLineNumbers:!0,code:`public class Cotxe {
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
}`}),e.jsx(y,{title:"Creació d'Objectes (Instanciació)"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["A partir de la classe ",e.jsx("code",{children:"Cotxe"}),", podem crear múltiples objectes. Cada objecte és independent i té els seus propis valors. Crear un objecte s'anomena ",e.jsx("strong",{children:"instanciar"}),"."]})}),e.jsx(g,{label:"Crear objectes a partir de la classe",showLineNumbers:!0,code:`public class Main {
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
}`}),e.jsx(y,{title:"Resum Visual"}),e.jsxs(me,{children:[e.jsxs(T,{title:"Classe",variant:"blue",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Què és?"})," La plantilla / plànol"]}),e.jsxs("p",{style:{marginTop:"6px"},children:[e.jsx("strong",{children:"Paraula clau:"})," ",e.jsx("code",{children:"class"})]}),e.jsx("p",{style:{marginTop:"6px"},children:e.jsx("strong",{children:"Exemple:"})}),e.jsx(g,{code:"class Cotxe { ... }"})]}),e.jsxs(T,{title:"Objecte",variant:"yellow",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Què és?"})," Una instància real de la classe"]}),e.jsxs("p",{style:{marginTop:"6px"},children:[e.jsx("strong",{children:"Paraula clau:"})," ",e.jsx("code",{children:"new"})]}),e.jsx("p",{style:{marginTop:"6px"},children:e.jsx("strong",{children:"Exemple:"})}),e.jsx(g,{code:"Cotxe c = new Cotxe();"})]}),e.jsxs(T,{title:"Atributs",variant:"green",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Què són?"})," Les propietats de l'objecte"]}),e.jsxs("p",{style:{marginTop:"6px"},children:[e.jsx("strong",{children:"Exemples:"})," marca, color, km"]}),e.jsx("p",{style:{marginTop:"6px"},children:e.jsx("strong",{children:"Accés:"})}),e.jsx(g,{code:'cotxe1.marca = "Toyota";'})]}),e.jsxs(T,{title:"Mètodes",variant:"pink",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Què són?"})," Les accions que pot fer l'objecte"]}),e.jsxs("p",{style:{marginTop:"6px"},children:[e.jsx("strong",{children:"Exemples:"})," mostrarInfo(), conduir()"]}),e.jsx("p",{style:{marginTop:"6px"},children:e.jsx("strong",{children:"Crida:"})}),e.jsx(g,{code:"cotxe1.mostrarInfo();"})]})]}),e.jsx(m,{variant:"warning",title:"Recorda",children:e.jsxs("p",{children:["Una classe per si sola ",e.jsx("strong",{children:"no fa res"}),". És com tenir un plànol sense construir la casa. Has de crear objectes (",e.jsx("code",{children:"new"}),") per poder treballar amb les dades i cridar els mètodes."]})})]})}function pE(){return e.jsxs("div",{children:[e.jsx(y,{title:"Modificadors d'Accés i Encapsulació"}),e.jsx(m,{variant:"info",title:"Què són els modificadors d'accés?",children:e.jsxs("p",{children:["Els ",e.jsx("strong",{children:"modificadors d'accés"})," són paraules clau que controlen la ",e.jsx("strong",{children:"visibilitat"})," dels atributs i mètodes d'una classe. Determinen qui pot accedir a cada part del codi. Són fonamentals per aplicar l'",e.jsx("strong",{children:"encapsulació"}),", un dels 4 pilars de la POO."]})}),e.jsx(y,{title:"Tipus de Modificadors"}),e.jsx(J,{headers:["Modificador","Mateixa Classe","Mateix Paquet","Subclasse","Tothom"],rows:[{cells:["public","Sí","Sí","Sí","Sí"]},{cells:["protected","Sí","Sí","Sí","No"]},{cells:["(sense modificador)","Sí","Sí","No","No"]},{cells:["private","Sí","No","No","No"]}]}),e.jsxs(me,{children:[e.jsxs(T,{title:"public",variant:"green",children:[e.jsxs("p",{children:["Accessible des de ",e.jsx("strong",{children:"qualsevol lloc"})," del programa."]}),e.jsx(g,{code:`public String nom;
public void saludar() { ... }`})]}),e.jsxs(T,{title:"private",variant:"pink",children:[e.jsxs("p",{children:["Només accessible dins de la ",e.jsx("strong",{children:"mateixa classe"}),"."]}),e.jsx(g,{code:`private int edat;
private void calcular() { ... }`})]}),e.jsxs(T,{title:"protected",variant:"yellow",children:[e.jsxs("p",{children:["Accessible dins del ",e.jsx("strong",{children:"mateix paquet"})," i per ",e.jsx("strong",{children:"subclasses"}),"."]}),e.jsx(g,{code:`protected double salari;
protected void processar() { ... }`})]}),e.jsxs(T,{title:"(default)",variant:"blue",children:[e.jsxs("p",{children:["Sense paraula clau. Accessible dins del ",e.jsx("strong",{children:"mateix paquet"}),"."]}),e.jsx(g,{code:`String ciutat;
void mostrar() { ... }`})]})]}),e.jsx(y,{title:"Encapsulació: Per què private?"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["L'",e.jsx("strong",{children:"encapsulació"})," consisteix a declarar els atributs com a ",e.jsx("code",{children:"private"})," i proporcionar mètodes ",e.jsx("code",{children:"public"})," (getters i setters) per accedir-hi de forma controlada. Així protegim les dades internes de l'objecte i evitem que es modifiquin de forma incorrecta."]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"MALAMENT: Sense encapsulació",variant:"bad",children:[e.jsx("p",{children:"Atributs públics: qualsevol pot modificar-los sense control."}),e.jsx(g,{showLineNumbers:!0,code:`public class Persona {
    public String nom;
    public int edat; // Qualsevol pot posar -5!
}

// Des d'un altre lloc:
Persona p = new Persona();
p.edat = -50; // Error logic! No hi ha control
p.nom = "";   // Nom buit acceptat!`}),e.jsx(m,{variant:"error",children:e.jsx("p",{children:"No hi ha cap validació. Es poden assignar valors incorrectes."})})]}),e.jsxs(U,{title:"BÉ: Amb encapsulació",variant:"good",children:[e.jsx("p",{children:"Atributs privats amb getters/setters que validen les dades."}),e.jsx(g,{showLineNumbers:!0,code:`public class Persona {
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
}`}),e.jsx(m,{variant:"success",children:e.jsx("p",{children:"Les dades estan protegides i validades."})})]})]}),e.jsx(y,{title:"Getters i Setters"}),e.jsx(m,{variant:"info",children:e.jsxs("p",{children:["Els ",e.jsx("strong",{children:"getters"})," són mètodes que retornen el valor d'un atribut privat. Els ",e.jsx("strong",{children:"setters"})," són mètodes que permeten modificar el valor d'un atribut privat, habitualment amb validació."]})}),e.jsx(g,{label:"Exemple complet amb getters i setters",showLineNumbers:!0,code:`public class Alumne {
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
}`}),e.jsx(g,{label:"Ús des del main",code:`public class Main {
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
}`}),e.jsx(m,{variant:"success",title:"Convenció de noms",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Getter:"})," ",e.jsx("code",{children:"getAtribut()"})," - retorna el valor (per booleans: ",e.jsx("code",{children:"isAtribut()"}),")"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Setter:"})," ",e.jsx("code",{children:"setAtribut(valor)"})," - modifica el valor"]}),e.jsxs("li",{children:["Sempre comencen amb ",e.jsx("code",{children:"get"})," o ",e.jsx("code",{children:"set"})," seguit del nom de l'atribut amb la primera lletra en majúscula"]})]})})]})}function ms({code:t,language:a="java",label:r,defaultOpen:n=!1}){const[i,s]=A.useState(n);return e.jsxs("div",{style:{margin:"16px 0"},children:[e.jsx(it,{size:"small",variant:"secondary",onClick:()=>s(!i),children:i?"Amagar Codi":"Veure Codi"}),i&&e.jsx(g,{code:t,language:a,label:r})]})}function mE(){return e.jsxs("div",{children:[e.jsx(y,{title:"Constructors i la Paraula Clau this"}),e.jsx(m,{variant:"info",title:"Què és un constructor?",children:e.jsxs("p",{children:["Un ",e.jsx("strong",{children:"constructor"})," és un mètode especial que s'executa automàticament quan es crea un objecte amb ",e.jsx("code",{children:"new"}),". Serveix per ",e.jsx("strong",{children:"inicialitzar"})," els atributs de l'objecte amb valors inicials. El constructor té el ",e.jsx("strong",{children:"mateix nom que la classe"})," i ",e.jsx("strong",{children:"no té tipus de retorn"})," (ni tan sols ",e.jsx("code",{children:"void"}),")."]})}),e.jsx(y,{title:"Sintaxi del Constructor"}),e.jsx(g,{label:"Estructura bàsica d'un constructor",showLineNumbers:!0,code:`public class NomClasse {
    // Atributs
    private String atribut1;
    private int atribut2;

    // Constructor (mateix nom que la classe, sense tipus de retorn)
    public NomClasse(String atribut1, int atribut2) {
        this.atribut1 = atribut1;
        this.atribut2 = atribut2;
    }
}`}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Fixa't que el constructor ",e.jsx("strong",{children:"no té"})," ",e.jsx("code",{children:"void"})," ni cap altre tipus de retorn. Si hi poses ",e.jsx("code",{children:"void"}),", Java ho tractarà com un mètode normal, no com un constructor!"]})}),e.jsx(y,{title:"La Paraula Clau this"}),e.jsx(m,{variant:"info",children:e.jsxs("p",{children:["La paraula clau ",e.jsx("code",{children:"this"})," fa referència a l'",e.jsx("strong",{children:"objecte actual"}),". S'utilitza principalment quan el nom del paràmetre del constructor (o mètode) coincideix amb el nom de l'atribut de la classe."]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Sense this (problema)",variant:"bad",children:[e.jsx(g,{code:`public Cotxe(String marca) {
    marca = marca; // ERROR!
    // Assigna el parametre a si mateix
    // L'atribut NO es modifica
}`}),e.jsx(m,{variant:"error",children:e.jsx("p",{children:"Java no sap distingir entre l'atribut i el paràmetre. L'atribut queda sense valor."})})]}),e.jsxs(U,{title:"Amb this (correcte)",variant:"good",children:[e.jsx(g,{code:`public Cotxe(String marca) {
    this.marca = marca; // CORRECTE!
    // this.marca = atribut de la classe
    // marca = parametre del constructor
}`}),e.jsx(m,{variant:"success",children:e.jsxs("p",{children:[e.jsx("code",{children:"this.marca"})," es refereix a l'atribut de l'objecte. ",e.jsx("code",{children:"marca"})," és el paràmetre."]})})]})]}),e.jsx(y,{title:"Exemple Complet"}),e.jsx(g,{label:"Classe Cotxe amb constructor",showLineNumbers:!0,code:`public class Cotxe {
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
}`}),e.jsx(g,{label:"Crear objectes amb el constructor",code:`public class Main {
    public static void main(String[] args) {
        // Ara podem inicialitzar en UNA sola linia!
        Cotxe c1 = new Cotxe("Toyota", "Corolla", 15000);
        Cotxe c2 = new Cotxe("BMW", "Serie 3", 30000);

        c1.mostrarInfo(); // Toyota Corolla - 15000 km
        c2.mostrarInfo(); // BMW Serie 3 - 30000 km
    }
}`}),e.jsx(y,{title:"Sobrecàrrega de Constructors"}),e.jsx(m,{variant:"info",title:"Què és la sobrecàrrega?",children:e.jsxs("p",{children:["Una classe pot tenir ",e.jsx("strong",{children:"múltiples constructors"})," amb diferent nombre o tipus de paràmetres. Això s'anomena ",e.jsx("strong",{children:"sobrecàrrega de constructors"})," (constructor overloading). Java selecciona automàticament el constructor adequat segons els arguments que li passem."]})}),e.jsx(g,{label:"Sobrecàrrega de constructors",showLineNumbers:!0,code:`public class Cotxe {
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
}`}),e.jsx(g,{label:"Usar els diferents constructors",code:`Cotxe c1 = new Cotxe("Toyota", "Corolla", 15000); // Constructor 1
Cotxe c2 = new Cotxe("BMW", "Serie 3");             // Constructor 2
Cotxe c3 = new Cotxe();                             // Constructor 3`}),e.jsx(y,{title:"Errors Comuns"}),e.jsxs(me,{children:[e.jsxs(T,{title:"Posar void al constructor",variant:"pink",children:[e.jsxs("p",{children:["Si afegeixes ",e.jsx("code",{children:"void"}),", Java ho tracta com un mètode normal, no com un constructor."]}),e.jsx(g,{code:`// MALAMENT:
public void Cotxe(String marca) {
    this.marca = marca;
}
// Aixo NO es un constructor!`})]}),e.jsxs(T,{title:"No usar this",variant:"pink",children:[e.jsxs("p",{children:["Si el paràmetre té el mateix nom que l'atribut i no uses ",e.jsx("code",{children:"this"}),", l'atribut no es modifica."]}),e.jsx(g,{code:`// MALAMENT:
public Cotxe(String marca) {
    marca = marca; // No fa res!
}
// BE:
public Cotxe(String marca) {
    this.marca = marca;
}`})]}),e.jsxs(T,{title:"Nom diferent de la classe",variant:"pink",children:[e.jsxs("p",{children:["El constructor ha de tenir ",e.jsx("strong",{children:"exactament"})," el mateix nom que la classe."]}),e.jsx(g,{code:`// MALAMENT:
public class Cotxe {
    public cotxe() { } // minuscula!
}
// BE:
public class Cotxe {
    public Cotxe() { } // Correcte
}`})]}),e.jsxs(T,{title:"Constructor per defecte",variant:"yellow",children:[e.jsx("p",{children:"Si no defineixes cap constructor, Java en crea un de buit automàticament. Però si defineixes un constructor amb paràmetres, el buit desapareix."}),e.jsx(g,{code:`// Si tens:
public Cotxe(String marca) { ... }

// Aleshores AIXO ja no funciona:
Cotxe c = new Cotxe(); // ERROR!
// Has d'afegir el constructor buit`})]})]}),e.jsx(ms,{label:"Exemple complet: Classe Estudiant amb sobrecàrrega",code:`public class Estudiant {
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
}`}),e.jsx(m,{variant:"success",title:"Resum",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["El constructor inicialitza l'objecte quan es crea amb ",e.jsx("code",{children:"new"})]}),e.jsx("li",{children:"Té el mateix nom que la classe i no té tipus de retorn"}),e.jsxs("li",{children:[e.jsx("code",{children:"this"})," es refereix a l'objecte actual i diferencia atributs de paràmetres"]}),e.jsx("li",{children:"La sobrecàrrega permet múltiples constructors amb paràmetres diferents"})]})})]})}const hE=`// Classe PARE (superclasse)
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
}`,fE=`// Classe FILLA (subclasse) - hereta d'Animal
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
}`,xE=`public class Main {
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
}`,gE=`public class Animal {
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
// Constructor de Gos: Pastor Alemany`,jE=`public class Animal {
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
// Raca: Pastor Alemany`,vE=`public class Animal {
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
mia.ferSoroll();  // Mia fa: Miau!`,bE=`public class Animal {
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
}`,yE=`// ============ CLASSE PARE ============
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
}`,SE=`public class Main {
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
}`;function EE(){return e.jsxs("div",{children:[e.jsx(y,{title:"Herència en Java"}),e.jsx(m,{variant:"info",title:"Què és l'herència?",children:e.jsxs("p",{children:["L'",e.jsx("strong",{children:"herència"})," és un dels pilars fonamentals de la Programació Orientada a Objectes. Permet que una classe ",e.jsx("strong",{children:"filla"})," (subclasse) hereti els atributs i mètodes d'una classe ",e.jsx("strong",{children:"pare"})," (superclasse). D'aquesta manera, podem ",e.jsx("strong",{children:"reutilitzar codi"})," i crear jerarquies de classes organitzades."]})}),e.jsxs(m,{variant:"explanation",title:"Analogia del món real",children:[e.jsxs("p",{children:["Pensa en els animals. Tots els animals comparteixen comportaments comuns:",e.jsx("strong",{children:" menjar"}),", ",e.jsx("strong",{children:"dormir"}),", ",e.jsx("strong",{children:"moure's"}),"... Però cada tipus d'animal té comportaments propis: un gos pot ",e.jsx("strong",{children:"bordar"}),", un gat pot ",e.jsx("strong",{children:"miolar"}),", un ocell pot ",e.jsx("strong",{children:"volar"}),"."]}),e.jsxs("p",{style:{marginTop:"8px"},children:['En lloc de repetir "menjar" i "dormir" a cada classe (Gos, Gat, Ocell...), definim aquests comportaments comuns a la classe ',e.jsx("strong",{children:"Animal"})," i fem que cada animal en concret els ",e.jsx("strong",{children:"hereti"}),"."]})]}),e.jsx(y,{title:"Terminologia"}),e.jsx(J,{headers:["Terme","Altres noms","Descripció"],rows:[{cells:["Classe pare","Superclasse, classe base","La classe de la qual s'hereten atributs i mètodes"]},{cells:["Classe filla","Subclasse, classe derivada","La classe que hereta d'una altra i pot afegir funcionalitat pròpia"]},{cells:["extends","Paraula clau","S'utilitza per indicar que una classe hereta d'una altra"]},{cells:["super","Paraula clau","Permet accedir al constructor o mètodes de la classe pare"]},{cells:["@Override","Anotació","Indica que un mètode sobreescriu un mètode del pare"]}]}),e.jsx(y,{title:"Sintaxi Bàsica i Exemple"}),e.jsxs(m,{variant:"info",children:[e.jsxs("p",{children:["Per indicar que una classe hereta d'una altra, s'utilitza la paraula clau ",e.jsx("code",{children:"extends"}),":"]}),e.jsx("p",{style:{marginTop:"8px"},children:e.jsxs("code",{children:["public class Filla ",e.jsx("strong",{children:"extends"})," Pare ","{ ... }"]})})]}),e.jsx(g,{label:"Classe pare: Animal",code:hE,showLineNumbers:!0}),e.jsx(g,{label:"Classes filles: Gos i Gat",code:fE,showLineNumbers:!0}),e.jsx(g,{label:"Utilitzar l'herència",code:xE,showLineNumbers:!0}),e.jsx(m,{variant:"success",title:"Què ha passat?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"Gos"})," i ",e.jsx("code",{children:"Gat"})," hereten ",e.jsx("code",{children:"menjar()"}),", ",e.jsx("code",{children:"dormir()"})," i ",e.jsx("code",{children:"mostrarInfo()"})," d'Animal ",e.jsx("strong",{children:"sense haver de reescriure el codi"}),"."]}),e.jsxs("li",{children:["Cada subclasse pot tenir ",e.jsx("strong",{children:"mètodes propis"})," (",e.jsx("code",{children:"bordar()"}),", ",e.jsx("code",{children:"miolar()"}),") que no existeixen al pare."]}),e.jsxs("li",{children:["Un ",e.jsx("code",{children:"Gos"})," no pot usar ",e.jsx("code",{children:"miolar()"})," perquè és exclusiu de ",e.jsx("code",{children:"Gat"}),"."]})]})}),e.jsx(y,{title:"La Paraula Clau super"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["La paraula clau ",e.jsx("code",{children:"super"})," serveix per accedir als membres de la classe ",e.jsx("strong",{children:"pare"})," des de la classe filla. Té dos usos principals:"]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"super() - Cridar al constructor del pare",variant:"blue",children:[e.jsxs("p",{style:{marginBottom:"10px"},children:["S'utilitza dins del constructor de la classe filla per cridar al constructor de la classe pare. ",e.jsx("strong",{children:"Ha de ser la primera instrucció"})," del constructor."]}),e.jsx(g,{code:`public Gos(String nom, String raca) {
    super(nom);  // Crida Animal(String nom)
    this.raca = raca;
}`})]}),e.jsxs(U,{title:"super.mètode() - Cridar un mètode del pare",variant:"good",children:[e.jsxs("p",{style:{marginBottom:"10px"},children:["S'utilitza per cridar un mètode de la classe pare, especialment quan la classe filla l'ha ",e.jsx("strong",{children:"sobreescrit"})," (override)."]}),e.jsx(g,{code:`@Override
public void mostrarInfo() {
    super.mostrarInfo(); // Crida el del pare
    System.out.println("Raca: " + raca);
}`})]})]}),e.jsx(g,{label:"Exemple de super() en constructors",code:gE,showLineNumbers:!0}),e.jsx(g,{label:"Exemple de super.mètode()",code:jE,showLineNumbers:!0}),e.jsx(m,{variant:"warning",title:"Regles de super()",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"super()"})," ha de ser la ",e.jsx("strong",{children:"primera instrucció"})," del constructor de la classe filla."]}),e.jsxs("li",{children:["Si el pare no té un constructor sense paràmetres, la classe filla ",e.jsx("strong",{children:"ha de cridar"})," ",e.jsx("code",{children:"super(...)"})," amb els arguments corresponents."]}),e.jsxs("li",{children:["Si no escrius ",e.jsx("code",{children:"super()"}),", Java l'afegeix automàticament (només si el pare té constructor sense paràmetres)."]})]})}),e.jsx(y,{title:"Sobreescriptura de Mètodes (@Override)"}),e.jsx(m,{variant:"info",title:"Què és la sobreescriptura?",children:e.jsxs("p",{children:["La ",e.jsx("strong",{children:"sobreescriptura"})," (override) permet que una classe filla",e.jsx("strong",{children:" redefineixi"})," un mètode que ha heretat del pare. La classe filla proporciona la seva pròpia implementació del mètode, substituint la del pare. L'anotació ",e.jsx("code",{children:"@Override"})," no és obligatòria, però és molt",e.jsx("strong",{children:" recomanable"})," perquè ajuda a detectar errors."]})}),e.jsx(g,{label:"Exemple de sobreescriptura: ferSoroll()",code:vE,showLineNumbers:!0}),e.jsx(m,{variant:"explanation",title:"Per què @Override és important?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Si escrius ",e.jsx("code",{children:"@Override"})," i el mètode NO existeix al pare, Java et donarà un ",e.jsx("strong",{children:"error de compilació"}),". Això evita errors per noms mal escrits."]}),e.jsxs("li",{children:["Fa el codi més ",e.jsx("strong",{children:"llegible"}),": queda clar que el mètode ve del pare."]}),e.jsxs("li",{children:["El mètode sobreescrit ha de tenir la ",e.jsx("strong",{children:"mateixa signatura"})," (nom, paràmetres i tipus de retorn) que el del pare."]})]})}),e.jsx(y,{title:"El Modificador d'Accés protected"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Quan treballem amb herència, el modificador d'accés ",e.jsx("code",{children:"protected"})," és molt útil. Permet que els atributs i mètodes siguin accessibles des de la",e.jsx("strong",{children:" mateixa classe"}),", les ",e.jsx("strong",{children:"subclasses"})," i les classes del",e.jsx("strong",{children:" mateix paquet"}),", però no des de classes externes."]})}),e.jsx(J,{headers:["Modificador","Mateixa classe","Subclasse","Mateix paquet","Altres classes"],rows:[{cells:["private","Sí","No","No","No"]},{cells:["protected","Sí","Sí","Sí","No"]},{cells:["public","Sí","Sí","Sí","Sí"]}]}),e.jsx(g,{label:"Exemple d'accés protected en herència",code:bE,showLineNumbers:!0}),e.jsx(m,{variant:"info",title:"Quan usar protected?",children:e.jsxs("p",{children:["Usa ",e.jsx("code",{children:"protected"})," per als atributs que vols que les classes filles puguin accedir ",e.jsx("strong",{children:"directament"}),", sense necessitat de getters. Si vols més control i encapsulació, utilitza ",e.jsx("code",{children:"private"})," amb getters/setters ",e.jsx("code",{children:"public"})," o ",e.jsx("code",{children:"protected"}),"."]})}),e.jsx(y,{title:"Exemple Complet: Vehicle, Cotxe i Moto"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Vegem un exemple complet que combina tot el que hem après: herència,",e.jsx("code",{children:" super"}),", ",e.jsx("code",{children:"@Override"}),", atributs ",e.jsx("code",{children:"protected"}),", mètodes propis i mètodes heretats."]})}),e.jsx(g,{label:"Jerarquia completa: Vehicle → Cotxe, Moto",code:yE,showLineNumbers:!0}),e.jsx(g,{label:"Utilitzar la jerarquia de vehicles",code:SE,showLineNumbers:!0}),e.jsx(y,{title:"Regles Importants de l'Herència en Java"}),e.jsx(m,{variant:"warning",title:"Regles clau que has de recordar",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Herència simple:"})," Java només permet heretar d'UNA sola classe. No es pot fer ",e.jsx("code",{children:"class A extends B, C"}),". (Les ",e.jsx("em",{children:"interfaces"})," permeten una alternativa, però és un tema més avançat.)"]}),e.jsxs("li",{style:{marginTop:"8px"},children:[e.jsx("strong",{children:"Totes les classes hereten d'Object:"})," Si una classe no té",e.jsx("code",{children:" extends"}),", Java automàticament fa que hereti de la classe ",e.jsx("code",{children:"Object"}),". Per això totes les classes tenen mètodes com ",e.jsx("code",{children:"toString()"}),",",e.jsx("code",{children:" equals()"}),", etc."]}),e.jsxs("li",{style:{marginTop:"8px"},children:[e.jsx("strong",{children:"Classes final:"})," Si una classe es declara ",e.jsx("code",{children:"final"}),",",e.jsx("strong",{children:" no pot ser heretada"}),". Per exemple, ",e.jsxs("code",{children:["final class Utilitats ","{ ... }"]})," no es pot estendre."]})]})}),e.jsxs(me,{children:[e.jsx(T,{title:"Herència Simple",variant:"blue",children:e.jsx(g,{code:`// CORRECTE: una sola classe pare
class Gos extends Animal { }

// ERROR: multiples classes pare
class Gos extends Animal, Mascota { }
// Aixo NO es pot fer en Java!`})}),e.jsx(T,{title:"Totes hereten d'Object",variant:"yellow",children:e.jsx(g,{code:`// Aquestes dues declaracions son equivalents:
class Animal { }
class Animal extends Object { }

// Per aixo pots fer:
Animal a = new Animal();
a.toString();  // Heretat d'Object
a.equals(b);   // Heretat d'Object`})}),e.jsx(T,{title:"Classes final",variant:"green",children:e.jsx(g,{code:`// Aquesta classe NO es pot heretar
final class Constants {
    static final double PI = 3.14159;
}

// ERROR de compilacio!
class MesConstants extends Constants { }
// No es pot estendre una classe final`})})]}),e.jsx(m,{variant:"success",title:"Resum",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["L'herència permet que una classe filla hereti atributs i mètodes d'una classe pare amb ",e.jsx("code",{children:"extends"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"super()"})," crida al constructor del pare; ",e.jsx("code",{children:"super.mètode()"})," crida un mètode del pare."]}),e.jsxs("li",{children:[e.jsx("code",{children:"@Override"})," indica que la classe filla redefineix un mètode del pare."]}),e.jsxs("li",{children:[e.jsx("code",{children:"protected"})," fa que els atributs siguin accessibles des de les subclasses."]}),e.jsxs("li",{children:["Java només permet ",e.jsx("strong",{children:"herència simple"})," (un sol pare)."]}),e.jsxs("li",{children:["Totes les classes hereten implícitament de ",e.jsx("code",{children:"Object"}),"."]}),e.jsxs("li",{children:["Les classes ",e.jsx("code",{children:"final"})," no poden ser heretades."]})]})})]})}const CE=`public class Main {
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
}`,wE=`public class Main {
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
}`,AE=`public class Animal {
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
}`,LE=`// Tipus ESTATIC: Animal (el que diu la variable)
// Tipus DINAMIC: Gos (l'objecte REAL que hi ha dins)
Animal rex = new Gos("Rex");

// Java mira el tipus DINAMIC per decidir quin metode cridar
rex.ferSoroll();  // Rex fa: Bup bup!  (NO "soroll generic")

// El compilador mira el tipus ESTATIC per saber que es LEGAL
// rex.bordar();  // ERROR! Animal no te bordar()
//                   Tot i que l'objecte real es un Gos`,RE=`public class Main {
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
}`,ME=`import java.util.ArrayList;

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
}`,TE=`public class Main {
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
}`,PE=`Animal rex = new Gos("Rex");

// rex.bordar();  // ERROR! El tipus estatic es Animal, no te bordar()

// Primer comprovem que realment es un Gos
if (rex instanceof Gos) {
    Gos gosRex = (Gos) rex;   // DOWNCASTING: Animal -> Gos
    gosRex.bordar();           // Ara si! Rex fa: Bup bup!
}

// PERILL: si fem casting sense comprovar...
// Gat gatFals = (Gat) rex;   // ClassCastException! rex NO es un Gat`,NE=`// ============ CLASSES ============
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
}`,kE=`// ============ VETERINARI ============
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
}`,qE=`=== JORNADA DE REVISIONS ===

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

Total animals revisats: 4`,_E=`public class Calculadora {

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
calc.sumar(1, 2, 3);       // Crida sumar(int, int, int) -> 6`,OE=`public class Animal {
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
a.ferSoroll();  // "Bup bup!" (no "Soroll generic")`;function IE(){return e.jsxs("div",{children:[e.jsx(y,{title:"Polimorfisme en Java"}),e.jsx(m,{variant:"info",title:"Què és el polimorfisme?",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Polimorfisme"})," ve del grec: ",e.jsx("em",{children:"poli"})," (molts) + ",e.jsx("em",{children:"morphe"})," (forma). Significa que ",e.jsx("strong",{children:"un mateix mètode pot comportar-se de manera diferent"})," segons l'objecte que l'executa. És el tercer pilar de la POO, juntament amb l'encapsulació i l'herència."]})}),e.jsxs(m,{variant:"explanation",title:"Analogia del món real",children:[e.jsxs("p",{children:["Pensa en el botó ",e.jsx("strong",{children:'"Play"'})," del mòbil. El mateix botó fa coses diferents segons el context: a Spotify reprodueix música, a YouTube reprodueix un vídeo, a un podcast reprodueix àudio. El botó és el ",e.jsx("strong",{children:"mateix"})," (mateixa interfície), però el ",e.jsx("strong",{children:"comportament canvia"})," segons l'aplicació (l'objecte real)."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["En Java passa igual: pots cridar ",e.jsx("code",{children:"ferSoroll()"})," sobre qualsevol ",e.jsx("code",{children:"Animal"}),", i cada animal farà el ",e.jsx("strong",{children:"seu propi soroll"}),"."]})]}),e.jsx(y,{title:"El Problema sense Polimorfisme"}),e.jsx(m,{variant:"warning",title:"Sense polimorfisme: codi repetitiu i rígid",children:e.jsxs("p",{children:["Imagina que tenim les classes ",e.jsx("code",{children:"Gos"}),", ",e.jsx("code",{children:"Gat"})," i ",e.jsx("code",{children:"Ocell"})," que ja coneixem de l'herència. Sense polimorfisme, cada vegada que volem fer una acció amb diferents tipus d'animals, necessitem un mètode específic per a ",e.jsx("strong",{children:"cada tipus"}),":"]})}),e.jsx(g,{label:"Sense polimorfisme: un mètode per cada tipus",code:CE,showLineNumbers:!0}),e.jsx(m,{variant:"error",title:"Problemes d'aquest enfocament",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Si afegim un nou animal (Serp, Peix...), hem d'afegir un ",e.jsx("strong",{children:"nou mètode"})," cada vegada."]}),e.jsxs("li",{children:["Si tenim 20 tipus d'animals, necessitem ",e.jsx("strong",{children:"20 mètodes"})," gairebé iguals."]}),e.jsxs("li",{children:["El codi és ",e.jsx("strong",{children:"repetitiu, fràgil i difícil de mantenir"}),"."]})]})}),e.jsx(y,{title:"La Solució: Polimorfisme"}),e.jsx(m,{variant:"info",children:e.jsxs("p",{children:["Recordem les classes d'herència. Cada animal sobreescriu (",e.jsx("code",{children:"@Override"}),") el mètode ",e.jsx("code",{children:"ferSoroll()"}),":"]})}),e.jsx(g,{label:"Classes amb herència i @Override (ja les coneixem!)",code:AE,showLineNumbers:!0}),e.jsx(m,{variant:"success",title:"Ara ve la màgia del polimorfisme",children:e.jsxs("p",{children:["La clau: podem guardar un objecte ",e.jsx("code",{children:"Gos"})," dins d'una variable de tipus ",e.jsx("code",{children:"Animal"}),". Quan cridem ",e.jsx("code",{children:"ferSoroll()"}),", Java executarà el mètode del ",e.jsx("strong",{children:"Gos"}),", no el de l'Animal genèric."]})}),e.jsx(g,{label:"Amb polimorfisme: UN mètode per a TOTS",code:wE,showLineNumbers:!0}),e.jsx(m,{variant:"success",title:"Què ha canviat?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Un sol mètode"})," ",e.jsx("code",{children:"ferSoroll(Animal a)"})," serveix per a TOTS els animals."]}),e.jsxs("li",{children:["Si afegim un nou animal (",e.jsx("code",{children:"Serp"}),"), ",e.jsx("strong",{children:"no cal tocar"})," el mètode."]}),e.jsxs("li",{children:["Java decideix ",e.jsx("strong",{children:"automàticament"})," quin ",e.jsx("code",{children:"ferSoroll()"})," cridar segons l'objecte real."]})]})}),e.jsx(y,{title:"Tipus Estàtic vs Tipus Dinàmic"}),e.jsx(m,{variant:"explanation",title:"El concepte més important del polimorfisme",children:e.jsxs("p",{children:["Quan escrivim ",e.jsx("code",{children:'Animal rex = new Gos("Rex")'}),", la variable té",e.jsx("strong",{children:" dos tipus alhora"}),":"]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Tipus Estàtic (la variable)",variant:"blue",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Animal"}),' rex = new Gos("Rex");']}),e.jsxs("p",{style:{marginTop:"8px"},children:["El tipus que veu el ",e.jsx("strong",{children:"compilador"}),". Determina quins mètodes pots ",e.jsx("strong",{children:"cridar"})," (només els d'Animal)."]}),e.jsx("p",{style:{marginTop:"8px",fontStyle:"italic"},children:'"Què puc fer amb aquesta variable?"'})]}),e.jsxs(U,{title:"Tipus Dinàmic (l'objecte real)",variant:"good",children:[e.jsxs("p",{children:["Animal rex = new ",e.jsx("strong",{children:"Gos"}),'("Rex");']}),e.jsxs("p",{style:{marginTop:"8px"},children:["El tipus real de l'objecte a ",e.jsx("strong",{children:"memòria"}),". Determina quina",e.jsx("strong",{children:" versió"})," del mètode s'executa."]}),e.jsx("p",{style:{marginTop:"8px",fontStyle:"italic"},children:'"Com es comporta realment?"'})]})]}),e.jsx(g,{label:"Tipus estàtic vs dinàmic en acció",code:LE,showLineNumbers:!0}),e.jsx(m,{variant:"warning",title:"Regla d'or",children:e.jsxs("p",{children:["El ",e.jsx("strong",{children:"compilador"})," (tipus estàtic) decideix si el codi és ",e.jsx("strong",{children:"legal"}),".",e.jsx("br",{}),"La ",e.jsx("strong",{children:"JVM en execució"})," (tipus dinàmic) decideix quin mètode ",e.jsx("strong",{children:"s'executa"}),"."]})}),e.jsx(y,{title:"Polimorfisme amb Col·leccions"}),e.jsx(m,{variant:"info",title:"On brilla el polimorfisme",children:e.jsxs("p",{children:["La potència real del polimorfisme apareix quan treballem amb ",e.jsx("strong",{children:"col·leccions"}),". Un array o ArrayList de tipus ",e.jsx("code",{children:"Animal"})," pot contenir Gossos, Gats, Ocells...",e.jsx("strong",{children:" tots barrejats!"})]})}),e.jsx(g,{label:"Array polimòrfic",code:RE,showLineNumbers:!0}),e.jsx(g,{label:"ArrayList polimòrfic",code:ME,showLineNumbers:!0}),e.jsx(m,{variant:"success",title:"Per què és tan potent?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["El ",e.jsx("strong",{children:"mateix bucle"})," funciona per a qualsevol animal, ara i en el futur."]}),e.jsxs("li",{children:["Si demà creem una classe ",e.jsx("code",{children:"Serp extends Animal"}),", el bucle ",e.jsx("strong",{children:"ja funciona"})," sense canvis."]}),e.jsxs("li",{children:["Això es diu ",e.jsx("strong",{children:"codi obert a l'extensió, tancat a la modificació"})," (principi Open/Closed)."]})]})}),e.jsx(y,{title:"instanceof i Casting"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["De vegades necessitem saber el ",e.jsx("strong",{children:"tipus real"})," d'un objecte per accedir a mètodes que ",e.jsx("strong",{children:"no existeixen a la classe pare"}),". Per això tenim",e.jsx("code",{children:" instanceof"})," i el ",e.jsx("strong",{children:"casting"}),"."]})}),e.jsx(g,{label:"instanceof: comprovar el tipus real",code:TE,showLineNumbers:!0}),e.jsx(g,{label:"Downcasting: convertir al tipus real",code:PE,showLineNumbers:!0}),e.jsx(J,{headers:["Concepte","Direcció","Exemple","Risc"],rows:[{cells:["Upcasting","Fill → Pare",'Animal a = new Gos("Rex")',"Cap (automàtic)"]},{cells:["Downcasting","Pare → Fill","Gos g = (Gos) animal","ClassCastException si el tipus no coincideix"]}]}),e.jsx(m,{variant:"warning",title:"Regla important",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Sempre"})," comprova amb ",e.jsx("code",{children:"instanceof"})," abans de fer downcasting. Si no ho fas i el tipus no coincideix, el programa llançarà una",e.jsx("code",{children:" ClassCastException"})," en temps d'execució."]})}),e.jsx(y,{title:"Sobrecàrrega vs Sobreescriptura"}),e.jsx(m,{variant:"info",children:e.jsxs("p",{children:["Aquests dos conceptes es confonen sovint perquè els noms es semblen. Però són coses ",e.jsx("strong",{children:"molt diferents"}),":"]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Sobrecàrrega (Overload)",variant:"blue",children:[e.jsxs("p",{style:{marginBottom:"8px"},children:[e.jsx("strong",{children:"Mateixa classe"}),", mateix nom, ",e.jsx("strong",{children:"diferents paràmetres"}),". Es resol en temps de ",e.jsx("strong",{children:"compilació"}),"."]}),e.jsx(g,{code:`// 3 metodes amb el MATEIX nom
int sumar(int a, int b)
double sumar(double a, double b)
int sumar(int a, int b, int c)`})]}),e.jsxs(U,{title:"Sobreescriptura (Override)",variant:"good",children:[e.jsxs("p",{style:{marginBottom:"8px"},children:[e.jsx("strong",{children:"Classe filla"}),", mateix nom, ",e.jsx("strong",{children:"mateixos paràmetres"}),". Es resol en temps d'",e.jsx("strong",{children:"execució"})," (polimorfisme!)."]}),e.jsx(g,{code:`// Pare i fill: MATEIX metode
class Animal { void ferSoroll() }
class Gos extends Animal {
    @Override void ferSoroll()
}`})]})]}),e.jsx(J,{headers:["","Sobrecàrrega (Overload)","Sobreescriptura (Override)"],rows:[{cells:["On?","Mateixa classe","Classe filla"]},{cells:["Nom del mètode","Igual","Igual"]},{cells:["Paràmetres","Diferents","Iguals"]},{cells:["Quan es decideix","Compilació","Execució"]},{cells:["Anotació","Cap","@Override"]},{cells:["Relació amb herència","No en necessita","Requereix herència"]}]}),e.jsx(g,{label:"Exemple de sobrecàrrega",code:_E,showLineNumbers:!0}),e.jsx(g,{label:"Exemple de sobreescriptura",code:OE,showLineNumbers:!0}),e.jsx(y,{title:"Exemple Complet: Clínica Veterinària"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Vegem un exemple complet que combina tot el que hem après: polimorfisme, col·leccions, ",e.jsx("code",{children:"instanceof"})," i downcasting. Una clínica veterinària que pot revisar ",e.jsx("strong",{children:"qualsevol tipus d'animal"})," sense saber per avançat quin tipus serà."]})}),e.jsx(g,{label:"Classes: Animal, Gos i Gat",code:NE,showLineNumbers:!0}),e.jsx(g,{label:"Veterinari i Main: polimorfisme en acció",code:kE,showLineNumbers:!0}),e.jsx(g,{label:"Sortida del programa",code:qE}),e.jsx(m,{variant:"success",title:"Per què funciona?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["El ",e.jsx("code",{children:"Veterinari"})," treballa amb ",e.jsx("code",{children:"Animal"}),", sense saber si és un Gos o un Gat."]}),e.jsxs("li",{children:[e.jsx("code",{children:"descripcio()"})," i ",e.jsx("code",{children:"ferSoroll()"})," es comporten diferent per a cada animal (",e.jsx("strong",{children:"polimorfisme"}),")."]}),e.jsxs("li",{children:["Quan necessitem un mètode específic (",e.jsx("code",{children:"buscarPilota"}),", ",e.jsx("code",{children:"ronronejar"}),"), usem ",e.jsx("code",{children:"instanceof"})," + ",e.jsx("strong",{children:"downcasting"}),"."]}),e.jsxs("li",{children:["Si demà afegim una classe ",e.jsx("code",{children:"Conill"}),", el mètode ",e.jsx("code",{children:"revisarAnimal"})," ",e.jsx("strong",{children:"ja funciona"})," sense canvis!"]})]})}),e.jsx(y,{title:"Resum: Quan necessito polimorfisme?"}),e.jsx(m,{variant:"explanation",title:"Herència sola vs Polimorfisme: quina diferència hi ha?",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Amb ",e.jsx("strong",{children:"herència sola"}),", cada variable és del seu propi tipus. Gos és Gos, Gat és Gat. No es barregen:"]}),e.jsx(g,{code:`Gos rex = new Gos("Rex");      // Tipus Gos, objecte Gos
Gat mia = new Gat("Mia");      // Tipus Gat, objecte Gat
rex.dormir();                   // Heretat d'Animal. Aixo ja es herencia.`}),e.jsxs("p",{style:{marginTop:"12px"},children:["El ",e.jsx("strong",{children:"polimorfisme"})," apareix quan necessites ",e.jsx("strong",{children:"tractar objectes de tipus diferent com si fossin el mateix"}),". Usos típics:"]})]})}),e.jsx(m,{variant:"info",title:"Necessito polimorfisme quan...",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsx("p",{children:e.jsx("strong",{children:"Vull posar-los a la mateixa llista:"})}),e.jsx(g,{code:`// Gossos, gats i ocells junts en UNA sola llista
ArrayList<Animal> animals = new ArrayList<>();
animals.add(new Gos("Rex"));
animals.add(new Gat("Mia"));
animals.add(new Ocell("Piu"));`}),e.jsx("p",{style:{marginTop:"12px"},children:e.jsx("strong",{children:"Vull comptar-los, recorre'ls o fer algo amb tots sense importar el tipus:"})}),e.jsx(g,{code:`// Quants animals hi ha? M'es igual si son gossos o gats.
animals.size();  // 3

// Que facin soroll tots. Cada un fara el SEU.
for (Animal a : animals) {
    a.ferSoroll();
}`}),e.jsx("p",{style:{marginTop:"12px"},children:e.jsx("strong",{children:"Vull un mètode que accepti QUALSEVOL animal:"})}),e.jsx(g,{code:`// UN sol metode per a Gos, Gat, Ocell, Serp, el que sigui
public void revisar(Animal a) {
    a.ferSoroll();
    a.descripcio();
}
// Sense polimorfisme necessitaria: revisar(Gos g), revisar(Gat g)...`})]})}),e.jsx(m,{variant:"warning",title:"NO necessito polimorfisme quan...",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsx("p",{children:"Si mai barrejo tipus i cada variable és sempre del seu tipus concret, no cal polimorfisme. Només herència:"}),e.jsx(g,{code:`// Sempre treballo amb Gos com a Gos. Mai el barrego amb Gat.
Gos rex = new Gos("Rex");
rex.dormir();    // Heretat d'Animal (herencia)
rex.bordar();    // Propi de Gos

// Aixo funciona perfectament nomes amb herencia.
// No necessito polimorfisme.`})]})}),e.jsx(m,{variant:"success",title:"La clau per recordar-ho",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{style:{padding:"16px",background:"rgba(0,0,0,0.04)",borderRadius:"8px"},children:[e.jsx("strong",{children:"Herència"})," → Les classes filles ",e.jsx("strong",{children:"reutilitzen"})," codi del pare.",e.jsx("br",{}),e.jsx("strong",{children:"Polimorfisme"})," → El codi que ",e.jsx("strong",{children:"usa"})," aquestes classes pot tractar-les ",e.jsx("strong",{children:"totes igual"}),"."]}),e.jsxs("p",{style:{marginTop:"16px"},children:["El polimorfisme ",e.jsx("strong",{children:"no és una cosa separada"})," de l'herència. És una ",e.jsx("strong",{children:"conseqüència"}),": si tens herència i ",e.jsx("code",{children:"@Override"}),", el polimorfisme ja funciona. Només cal que facis servir el tipus del pare com a variable (",e.jsx("code",{children:"Animal a = new Gos()"}),") i Java fa la resta."]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"12px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Upcasting"})," (",e.jsx("code",{children:"Animal a = new Gos()"}),"): automàtic i segur."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Downcasting"})," (",e.jsx("code",{children:"Gos g = (Gos) animal"}),"): manual, comprova amb ",e.jsx("code",{children:"instanceof"})," primer."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Sobrecàrrega"})," (Overload): mateixa classe, diferent signatura → compilació."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Sobreescriptura"})," (Override): classe filla, mateixa signatura → execució."]})]})]})})]})}const DE=`public class Main {
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
}`,FE=`// La paraula 'abstract' impedeix que es pugui fer new Animal()
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
}`,zE=`public class Gos extends Animal {
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
// ERROR DE COMPILACIO! Java no ho permet.`,BE=`public class Main {
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
}`,UE=`public abstract class Animal {
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
}`,GE=`public class Gos extends Animal {
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
}`,HE=`// ============ CLASSE ABSTRACTA ============
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
}`,$E=`// ============ CERCLE ============
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
}`,VE=`public class Main {
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
}`,QE=`Figura de color Vermell
Area: 78.53981633974483
Perimetre: 31.41592653589793

Figura de color Blau
Area: 24.0
Perimetre: 20.0

Figura de color Verd
Area: 6.0
Perimetre: 12.0

Area total: 108.53981633974483`,JE=`com.veterinari/
  model/         <- Animal.java (abstracta), Gos.java, Gat.java
  controller/    <- Clinica.java
  view/          <- Menu.java
  main/          <- Main.java`,WE=`// ============ MODEL: Animal.java (abstracta) ============
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
}`,KE=`// ============ MODEL: Gos.java ============
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
}`,YE=`// ============ CONTROLLER: Clinica.java ============
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
}`,XE=`// ============ VIEW: Menu.java ============
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
}`,ZE=`// ============ MAIN: Main.java ============
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
}`;function eC(){return e.jsxs("div",{children:[e.jsx(y,{title:"Classes Abstractes en Java"}),e.jsx(m,{variant:"info",title:"On som?",children:e.jsxs("p",{children:["Fins ara hem après ",e.jsx("strong",{children:"herència"})," (reutilitzar codi del pare) i ",e.jsx("strong",{children:"polimorfisme"})," (tractar objectes fills com si fossin el pare). Ara veurem les ",e.jsx("strong",{children:"classes abstractes"}),", que completen la idea: classes que ",e.jsx("strong",{children:"no es poden instanciar"})," i que ",e.jsx("strong",{children:"obliguen"})," les filles a implementar certs mètodes."]})}),e.jsx(y,{title:"El Problema"}),e.jsx(m,{variant:"warning",title:"Alguna cosa no encaixa...",children:e.jsxs("p",{children:["Amb el que sabem d'herència i polimorfisme, podem crear objectes de la classe ",e.jsx("strong",{children:"pare"})," directament. Però... té sentit?"]})}),e.jsx(g,{label:"El problema: instanciar la classe pare",code:DE,showLineNumbers:!0}),e.jsx(m,{variant:"error",title:"Per què és un problema?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:['Un "Animal genèric" ',e.jsx("strong",{children:"no existeix"})," al món real. Existeixen gossos, gats, ocells... animals ",e.jsx("strong",{children:"concrets"}),"."]}),e.jsxs("li",{children:["El mètode ",e.jsx("code",{children:"ferSoroll()"}),' a la classe Animal diu "soroll genèric", que ',e.jsx("strong",{children:"no té sentit"}),"."]}),e.jsxs("li",{children:["Qualsevol programador podria fer ",e.jsx("code",{children:"new Animal()"})," per error i el programa compilaria sense problemes."]}),e.jsxs("li",{children:["Necessitem una manera de dir: ",e.jsx("strong",{children:'"Animal existeix com a concepte, però NO es pot crear directament"'}),"."]})]})}),e.jsx(y,{title:"La Solució: Classes Abstractes"}),e.jsxs(m,{variant:"success",title:"Què és una classe abstracta?",children:[e.jsxs("p",{children:["Una classe abstracta és una classe que ",e.jsx("strong",{children:"no es pot instanciar"})," (no pots fer ",e.jsx("code",{children:"new"}),"). Serveix com a ",e.jsx("strong",{children:"plantilla"})," per a les classes filles. Pot contenir:"]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Mètodes abstractes"}),": sense cos, les filles ",e.jsx("strong",{children:"estan obligades"})," a implementar-los."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mètodes normals"}),": amb cos, les filles els ",e.jsx("strong",{children:"hereten"})," com sempre."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Atributs"}),": funcionen igual que en qualsevol classe."]})]})]}),e.jsx(g,{label:"Classe abstracta Animal",code:FE,showLineNumbers:!0}),e.jsx(g,{label:"Les classes filles implementen el mètode abstracte",code:zE,showLineNumbers:!0}),e.jsx(g,{label:"Utilitzar-ho: el polimorfisme segueix funcionant!",code:BE,showLineNumbers:!0}),e.jsx(m,{variant:"success",title:"Què hem aconseguit?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Ningú"})," pot fer ",e.jsx("code",{children:"new Animal()"})," per error. Java ho impedeix."]}),e.jsxs("li",{children:["Cada filla ",e.jsx("strong",{children:"està obligada"})," a implementar ",e.jsx("code",{children:"ferSoroll()"}),". Si no ho fa, error de compilació."]}),e.jsxs("li",{children:["El ",e.jsx("strong",{children:"polimorfisme segueix funcionant"})," exactament igual: ",e.jsx("code",{children:'Animal rex = new Gos("Rex")'}),"."]})]})}),e.jsx(y,{title:"Mètodes Abstractes vs Mètodes Normals"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Una classe abstracta pot tenir ",e.jsx("strong",{children:"els dos tipus"})," de mètodes alhora. Aquesta és la seva gran avantatge respecte a altres mecanismes."]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Mètode Abstracte",variant:"blue",children:[e.jsxs("p",{style:{marginBottom:"8px"},children:[e.jsx("strong",{children:"No té cos"})," (acaba amb ",e.jsx("code",{children:";"}),"). La classe filla",e.jsx("strong",{children:" ha d'implementar-lo obligatòriament"}),"."]}),e.jsx(g,{code:`// Sense claus { }, acaba amb ;
public abstract void ferSoroll();
public abstract String getTipus();

// "Jo no se COM fer-ho,
//  pero les meves filles SI"`})]}),e.jsxs(U,{title:"Mètode Normal",variant:"good",children:[e.jsxs("p",{style:{marginBottom:"8px"},children:[e.jsx("strong",{children:"Té cos"})," (amb ",e.jsx("code",{children:"{ }"}),"). Les filles l'",e.jsx("strong",{children:"hereten"})," i poden fer ",e.jsx("code",{children:"@Override"})," si volen."]}),e.jsx(g,{code:`// Amb claus { }, te implementacio
public void dormir() {
    System.out.println(nom + " dorm.");
}

// "Jo SE com fer-ho, i les meves
//  filles ho hereten gratis"`})]})]}),e.jsx(g,{label:"Classe abstracta amb els dos tipus de mètodes",code:UE,showLineNumbers:!0}),e.jsx(g,{label:"La filla implementa els abstractes i hereta els normals",code:GE,showLineNumbers:!0}),e.jsx(m,{variant:"warning",title:"Regles dels mètodes abstractes",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Un mètode abstracte ",e.jsx("strong",{children:"no té cos"}),": acaba amb ",e.jsx("code",{children:";"})," en lloc de ",e.jsx("code",{children:"{ }"}),"."]}),e.jsxs("li",{children:["Si una classe té ",e.jsx("strong",{children:"almenys un"})," mètode abstracte, la classe ",e.jsx("strong",{children:"ha de ser abstracta"}),"."]}),e.jsxs("li",{children:["La classe filla ",e.jsx("strong",{children:"ha d'implementar TOTS"})," els mètodes abstractes del pare. Si no, la filla ",e.jsx("strong",{children:"també ha de ser abstracta"}),"."]}),e.jsxs("li",{children:["Els mètodes abstractes ",e.jsxs("strong",{children:["no poden ser ",e.jsx("code",{children:"private"})]})," (les filles han de poder veure'ls)."]})]})}),e.jsx(y,{title:"Exemple Complet: Figures Geomètriques"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:[`Les figures geomètriques són l'exemple perfecte de classes abstractes. Una "Figura" genèrica `,e.jsx("strong",{children:"no existeix"}),": existeixen cercles, rectangles i triangles. Totes les figures tenen àrea i perímetre, però",e.jsx("strong",{children:" cada una els calcula de forma diferent"}),"."]})}),e.jsx(g,{label:"Classe abstracta Figura",code:HE,showLineNumbers:!0}),e.jsx(m,{variant:"info",title:"Fixa't en el disseny",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"calcularArea()"})," i ",e.jsx("code",{children:"calcularPerimetre()"})," són ",e.jsx("strong",{children:"abstractes"}),": cada figura els calcula diferent."]}),e.jsxs("li",{children:[e.jsx("code",{children:"mostrarInfo()"})," és ",e.jsx("strong",{children:"normal"}),": mostra la info de la mateixa manera per a totes les figures. A dins, crida els mètodes abstractes!"]})]})}),e.jsx(g,{label:"Cercle, Rectangle i Triangle",code:$E,showLineNumbers:!0}),e.jsx(g,{label:"Main: polimorfisme amb figures",code:VE,showLineNumbers:!0}),e.jsx(g,{label:"Sortida del programa",code:QE}),e.jsx(m,{variant:"success",title:"Per què funciona tan bé?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"new Figura()"}),' no es pot fer: no existeix una "figura genèrica".']}),e.jsxs("li",{children:["Cada subclasse ",e.jsx("strong",{children:"està obligada"})," a implementar ",e.jsx("code",{children:"calcularArea()"})," i ",e.jsx("code",{children:"calcularPerimetre()"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"mostrarInfo()"})," funciona per a ",e.jsx("strong",{children:"totes"})," les figures gràcies al polimorfisme."]}),e.jsxs("li",{children:["Si demà afegim ",e.jsx("code",{children:"Pentagon"}),", només cal crear la classe i implementar els 2 mètodes. ",e.jsx("strong",{children:"Res més canvia."})]})]})}),e.jsx(y,{title:"Tot Junt: Herència + Polimorfisme + Abstracta dins de MVC"}),e.jsx(m,{variant:"explanation",title:"On va cada cosa?",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Ja sabeu com funciona ",e.jsx("strong",{children:"MVC"})," (Model-Vista-Controlador) i ara coneixeu herència, polimorfisme i classes abstractes. Però... ",e.jsx("strong",{children:"com encaixen junts?"})]}),e.jsxs("p",{style:{marginTop:"8px"},children:["MVC et diu ",e.jsx("strong",{children:"on posar"})," cada fitxer (en quina carpeta).",e.jsx("br",{}),"Herència/polimorfisme/abstracta et diuen ",e.jsx("strong",{children:"com es relacionen"})," les classes entre elles."]}),e.jsx("p",{style:{marginTop:"8px"},children:e.jsx("strong",{children:"No competeixen. Es complementen."})})]})}),e.jsx(J,{headers:["Concepte POO","On viu dins MVC","Per què"],rows:[{cells:["Classe abstracta + classes filles","Model","Representen les dades/entitats del domini (Animal, Gos, Gat...)"]},{cells:["Polimorfisme (ArrayList del tipus pare)","Controller","El controller treballa amb el tipus generic sense saber quin fill es"]},{cells:["Crear objectes concrets (new Gos)","Main o View","Algu ha de crear els objectes reals amb les dades de l'usuari"]}]}),e.jsx(m,{variant:"info",title:"Exemple: Clínica Veterinària amb MVC",children:e.jsxs("p",{children:["Vegem l'exemple de la clínica veterinària organitzat en MVC. Les ",e.jsx("strong",{children:"mateixes classes"})," que ja coneixem, però cadascuna al seu lloc:"]})}),e.jsx(g,{label:"Estructura de packages",code:JE}),e.jsx(g,{label:"MODEL: La classe abstracta i les filles",code:WE,showLineNumbers:!0}),e.jsx(g,{label:"MODEL: Les classes filles (Gos i Gat)",code:KE,showLineNumbers:!0}),e.jsx(m,{variant:"success",title:"Fixa't: el Model conté tota la POO",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"Animal"})," és ",e.jsx("strong",{children:"abstracta"})," (no existeix un animal genèric)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Gos"})," i ",e.jsx("code",{children:"Gat"})," ",e.jsx("strong",{children:"hereten"})," amb ",e.jsx("code",{children:"extends"})," i fan ",e.jsx("code",{children:"@Override"}),"."]}),e.jsxs("li",{children:["Herència, polimorfisme i abstracció ",e.jsx("strong",{children:"viuen dins del Model"}),"."]})]})}),e.jsx(g,{label:"CONTROLLER: Treballa amb el tipus pare (polimorfisme)",code:YE,showLineNumbers:!0}),e.jsx(m,{variant:"warning",title:"Fixa't: el Controller només coneix Animal",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:[e.jsx("code",{children:"Clinica"})," importa ",e.jsx("code",{children:"Animal"}),", ",e.jsx("strong",{children:"no"})," Gos ni Gat. L'",e.jsx("code",{children:"ArrayList<Animal>"})," pot contenir qualsevol fill. El mètode ",e.jsx("code",{children:"revisarTots()"})," crida",e.jsx("code",{children:" ferSoroll()"})," de cada animal ",e.jsx("strong",{children:"sense saber quin tipus és"}),". Això és polimorfisme pur."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Si demà afegim ",e.jsx("code",{children:"Ocell"}),", el Controller ",e.jsx("strong",{children:"no canvia ni una línia"}),"."]})]})}),e.jsx(g,{label:"VIEW: Mostra dades per consola",code:XE,showLineNumbers:!0}),e.jsx(g,{label:"MAIN: Crea objectes concrets i connecta les parts",code:ZE,showLineNumbers:!0}),e.jsx(m,{variant:"success",title:"Qui coneix quin tipus?",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsx(J,{headers:["Capa","Coneix Gos/Gat?","Per què"],rows:[{cells:["Model (Animal, Gos, Gat)","Sí","Son les propies classes. Es defineixen aqui."]},{cells:["Controller (Clinica)","NO","Nomes coneix Animal. Treballa amb el tipus pare."]},{cells:["View (Menu)","NO","Mostra les dades que rep. No li importa el tipus concret."]},{cells:["Main","Sí","Ha de crear objectes reals: new Gos(...), new Gat(...)."]}]}),e.jsxs("p",{style:{marginTop:"12px",padding:"12px",background:"rgba(0,0,0,0.04)",borderRadius:"8px"},children:["Aquesta separació és la ",e.jsx("strong",{children:"potència real"})," de combinar MVC amb polimorfisme: el Controller i la View ",e.jsx("strong",{children:"no saben ni els importa"})," si treballen amb un Gos, un Gat o un Ocell que encara no existeix. Tot funciona gràcies al tipus pare ",e.jsx("code",{children:"Animal"}),"."]})]})}),e.jsx(y,{title:"Errors Comuns dels Principiants"}),e.jsx(J,{headers:["Error","Què passa","Solució"],rows:[{cells:["Fer new d'una classe abstracta",'Error de compilació: "Cannot instantiate abstract class"',"Instancia una classe filla concreta: new Gos(), new Gat()"]},{cells:["No implementar tots els mètodes abstractes",'Error de compilació: "must implement abstract method"',"Implementa tots els mètodes abstractes del pare amb @Override"]},{cells:["Posar cos a un mètode abstracte",'Error de compilació: "abstract methods cannot have a body"',"Treu les claus { } i acaba amb ;"]},{cells:["Confondre abstract amb final",`abstract = "les filles han d'implementar". final = "ningú pot heretar"`,"Són oposats! Una classe no pot ser abstract i final alhora"]}]}),e.jsx(y,{title:"Resum: Herència, Polimorfisme i Classes Abstractes"}),e.jsx(m,{variant:"explanation",title:"Són tres coses diferents o són el mateix?",children:e.jsx("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:e.jsxs("p",{children:[e.jsx("strong",{children:"No són tres coses separades."})," Són ",e.jsx("strong",{children:"passos naturals d'un mateix camí"}),". Cada pas neix perquè l'anterior es queda curt. Vegem la història sencera:"]})})}),e.jsx(m,{variant:"info",title:'Pas 1: Herència — "No vull copiar codi"',children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Tens ",e.jsx("code",{children:"Gos"}),", ",e.jsx("code",{children:"Gat"})," i ",e.jsx("code",{children:"Ocell"}),". Les tres classes tenen ",e.jsx("code",{children:"nom"}),", ",e.jsx("code",{children:"edat"}),",",e.jsx("code",{children:" dormir()"}),"... El ",e.jsx("strong",{children:"mateix codi repetit"})," tres vegades."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Solució: crees ",e.jsx("code",{children:"Animal"})," amb el codi comú i les altres hereten amb ",e.jsx("code",{children:"extends"}),". ",e.jsx("strong",{children:"Ara el codi existeix UN sol cop."})]}),e.jsx(g,{code:`Gos rex = new Gos("Rex");
rex.dormir();  // Heretat d'Animal, no l'has hagut de reescriure`}),e.jsx("p",{style:{marginTop:"8px",fontStyle:"italic",opacity:.85},children:"Problema resolt. Pero al fer-ho, apareix un problema nou..."})]})}),e.jsx(m,{variant:"info",title:'Pas 2: Polimorfisme — "No vull un mètode per cada fill"',children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Ara vols posar tots els animals en una ",e.jsx("strong",{children:"mateixa llista"}),", o fer un mètode que accepti ",e.jsx("strong",{children:"qualsevol animal"}),". Sense polimorfisme, necessites un mètode per a Gos, un per a Gat, un per a Ocell..."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Però com que ja tens herència, Java et permet fer",e.jsx("code",{children:" Animal a = new Gos()"}),". Quan crides ",e.jsx("code",{children:"a.ferSoroll()"}),", Java executa el del Gos."]}),e.jsx(g,{code:`// Puc posar-los tots junts i tractar-los igual
ArrayList<Animal> animals = new ArrayList<>();
animals.add(new Gos("Rex"));
animals.add(new Gat("Mia"));

for (Animal a : animals) {
    a.ferSoroll();  // Cada un fa el SEU soroll
}`}),e.jsxs("p",{style:{marginTop:"8px"},children:[e.jsx("strong",{children:'El polimorfisme no és una cosa que "afegeixes". És una conseqüència natural de tenir herència + @Override.'})," Només cal que usis el tipus del pare com a variable."]}),e.jsx("p",{style:{marginTop:"8px",fontStyle:"italic",opacity:.85},children:"Genial, funciona. Pero ara apareix un altre problema..."})]})}),e.jsx(m,{variant:"info",title:'Pas 3: Classe Abstracta — "No puc escriure el codi al pare"',children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Tot funciona. Però mira el mètode ",e.jsx("code",{children:"ferSoroll()"})," de la classe ",e.jsx("code",{children:"Animal"}),". ",e.jsx("strong",{children:"Què hi poses dins?"})]}),e.jsx(g,{code:`public class Animal {
    public void ferSoroll() {
        System.out.println(???);
        // "Bup bup"? No, aixo es de Gos.
        // "Miau"? No, aixo es de Gat.
        // "Soroll generic"? Aixo no significa res.
        // NO HI HA RES CORRECTE que puguis escriure aqui.
    }
}`}),e.jsxs("p",{style:{marginTop:"8px"},children:["A més, algú podria fer ",e.jsx("code",{children:'new Animal("???")'})," per error. Un animal genèric no existeix al món real."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Solució: fas la classe i el mètode ",e.jsx("code",{children:"abstract"}),". Ara:"]}),e.jsx(g,{code:`public abstract class Animal {
    // No te cos. Cada fill l'HA D'IMPLEMENTAR.
    public abstract void ferSoroll();

    // Aquest SI te cos, perque TOTS dormen igual
    public void dormir() {
        System.out.println(nom + " dorm. Zzz...");
    }
}`}),e.jsxs("p",{style:{marginTop:"8px"},children:[e.jsx("strong",{children:"La classe abstracta no és una cosa nova. És una restricció que afegeixes a l'herència"}),' per dir: "aquesta classe no es pot instanciar, i els fills estan obligats a implementar certs mètodes".']})]})}),e.jsx(m,{variant:"warning",title:"Com decideixo què necessito? Tres preguntes.",children:e.jsx("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:e.jsx(J,{headers:["Pregunta","Si la resposta és SÍ...","Què fas"],rows:[{cells:["Les classes comparteixen codi?","Estàs copiant els mateixos atributs i mètodes","Herència (extends)"]},{cells:["Necessito barrejar-los o tractar-los igual?","Vull una llista de tots, o un mètode que accepti qualsevol","Polimorfisme (Animal a = new Gos())"]},{cells:["Puc escriure el codi del mètode al pare?","No hi ha res correcte que serveixi per a tots els fills","Mètode abstracte → classe abstracta"]}]})})}),e.jsx(m,{variant:"success",title:"Tot junt: un camí, tres passos",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["No són tres eines separades que tries d'un calaix. Són ",e.jsx("strong",{children:"capes d'una mateixa idea"})," que es construeixen l'una sobre l'altra:"]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Sense ",e.jsx("strong",{children:"herència"}),", no hi ha polimorfisme ni classes abstractes."]}),e.jsxs("li",{children:["Sense ",e.jsx("strong",{children:"@Override"}),", el polimorfisme no fa res útil."]}),e.jsxs("li",{children:["Sense la necessitat de ",e.jsx("strong",{children:"protegir el pare"}),", no calen classes abstractes."]})]}),e.jsxs("p",{style:{marginTop:"16px",padding:"16px",background:"rgba(0,0,0,0.04)",borderRadius:"8px"},children:[e.jsx("strong",{children:"Herència"}),' → "No vull copiar codi"',e.jsx("br",{}),e.jsx("strong",{children:"Polimorfisme"}),` → "Vull tractar-los a tots igual" (conseqüència de l'herència)`,e.jsx("br",{}),e.jsx("strong",{children:"Classe abstracta"}),` → "No puc escriure el codi al pare i no vull que l'instanciïn" (restricció sobre l'herència)`]}),e.jsx("p",{style:{marginTop:"16px"},children:"I per als mètodes, la regla és simple:"}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Puc escriure un cos que serveixi per a tots?"})," → Mètode ",e.jsx("strong",{children:"normal"})," (com ",e.jsx("code",{children:"dormir()"}),": tots dormen igual)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No puc, cada fill ho fa diferent?"})," → Mètode ",e.jsx("strong",{children:"abstracte"})," (com ",e.jsx("code",{children:"ferSoroll()"}),": cada animal sona diferent)."]})]})]})})]})}function tC(){return e.jsxs("div",{children:[e.jsx(y,{title:"Exemple Complet: Sistema de Biblioteca"}),e.jsx(m,{variant:"info",title:"Objectiu",children:e.jsxs("p",{children:["Crearem un sistema de gestió d'una biblioteca utilitzant els conceptes de POO que hem après: classes, objectes, constructors, encapsulació (getters/setters) i packages. El sistema tindrà tres classes: ",e.jsx("code",{children:"Llibre"}),", ",e.jsx("code",{children:"Autor"})," i ",e.jsx("code",{children:"Biblioteca"}),"."]})}),e.jsx(y,{title:"Estructura del Projecte"}),e.jsx(g,{label:"Organització en packages",language:"bash",code:`biblioteca/
  src/
    model/
      Llibre.java
      Autor.java
    gestio/
      Biblioteca.java
    app/
      Main.java`}),e.jsxs(me,{children:[e.jsxs(T,{title:"Classe Autor",variant:"blue",children:[e.jsx("p",{children:"Representa un autor amb nom i nacionalitat."}),e.jsxs("p",{style:{marginTop:"6px"},children:["Atributs: ",e.jsx("code",{children:"nom"}),", ",e.jsx("code",{children:"nacionalitat"})]})]}),e.jsxs(T,{title:"Classe Llibre",variant:"yellow",children:[e.jsx("p",{children:"Representa un llibre amb títol, autor, any i disponibilitat."}),e.jsxs("p",{style:{marginTop:"6px"},children:["Atributs: ",e.jsx("code",{children:"títol"}),", ",e.jsx("code",{children:"autor"}),", ",e.jsx("code",{children:"any"}),", ",e.jsx("code",{children:"disponible"})]})]}),e.jsxs(T,{title:"Classe Biblioteca",variant:"green",children:[e.jsx("p",{children:"Gestiona una col·lecció de llibres amb operacions CRUD."}),e.jsxs("p",{style:{marginTop:"6px"},children:["Mètodes: ",e.jsx("code",{children:"afegir"}),", ",e.jsx("code",{children:"buscar"}),", ",e.jsx("code",{children:"prestar"}),", ",e.jsx("code",{children:"retornar"})]})]}),e.jsx(T,{title:"Classe Main",variant:"pink",children:e.jsx("p",{children:"Punt d'entrada del programa per provar el sistema."})})]}),e.jsx(y,{title:"Classe Autor"}),e.jsx(g,{label:"model/Autor.java",showLineNumbers:!0,code:`package model;

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
}`}),e.jsx(y,{title:"Classe Llibre"}),e.jsx(g,{label:"model/Llibre.java",showLineNumbers:!0,code:`package model;

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
}`}),e.jsx(m,{variant:"explanation",title:"Composició",children:e.jsxs("p",{children:["Fixa't que la classe ",e.jsx("code",{children:"Llibre"})," té un atribut de tipus ",e.jsx("code",{children:"Autor"}),". Això s'anomena ",e.jsx("strong",{children:"composició"}),`: un objecte conté un altre objecte. És una relació "TÉ UN" (un llibre TÉ UN autor). Així evitem duplicar les dades de l'autor en cada llibre.`]})}),e.jsx(y,{title:"Classe Biblioteca"}),e.jsx(g,{label:"gestio/Biblioteca.java",showLineNumbers:!0,code:`package gestio;

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
}`}),e.jsx(y,{title:"Classe Main (Punt d'entrada)"}),e.jsx(g,{label:"app/Main.java",showLineNumbers:!0,code:`package app;

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
}`}),e.jsx(y,{title:"Sortida del Programa"}),e.jsx(ms,{label:"Resultat esperat a la consola",language:"bash",defaultOpen:!0,code:`Llibre afegit: Cent anys de solitud
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
Total: 3 llibres`}),e.jsx(y,{title:"Conceptes Aplicats"}),e.jsxs(me,{children:[e.jsx(T,{title:"Encapsulació",variant:"blue",children:e.jsxs("p",{children:["Tots els atributs són ",e.jsx("code",{children:"private"})," amb getters i setters."]})}),e.jsx(T,{title:"Constructors",variant:"yellow",children:e.jsxs("p",{children:["Cada classe té un constructor que inicialitza els atributs amb ",e.jsx("code",{children:"this"}),"."]})}),e.jsx(T,{title:"Composició",variant:"green",children:e.jsxs("p",{children:[e.jsx("code",{children:"Llibre"})," conté un objecte ",e.jsx("code",{children:"Autor"}),". ",e.jsx("code",{children:"Biblioteca"})," conté un array de ",e.jsx("code",{children:"Llibre"}),"."]})}),e.jsx(T,{title:"Packages",variant:"pink",children:e.jsxs("p",{children:["Classes organitzades en packages: ",e.jsx("code",{children:"model"}),", ",e.jsx("code",{children:"gestio"}),", ",e.jsx("code",{children:"app"}),"."]})})]}),e.jsx(m,{variant:"success",title:"Resum",children:e.jsx("p",{children:"Aquest exemple mostra com la POO ens permet crear un sistema complet i organitzat. Cada classe té una responsabilitat clara, les dades estan protegides amb encapsulació, i el codi està organitzat en packages. Així és com es programen les aplicacions reals."})})]})}const El=[{name:"src/",type:"folder",description:"Carpeta arrel del codi font. Conté tots els fitxers .java organitzats en packages."},{name:"  model/",type:"folder",description:"Package que conté les classes de dades (entitats). Representen els objectes del domini: Producte, Client, Comanda..."},{name:"    Producte.java",type:"file",description:"Classe que representa un producte amb atributs privats (nom, preu, estoc), constructor, getters i setters. És una classe de model pura, sense lògica de negoci."},{name:"    Client.java",type:"file",description:"Classe que representa un client amb nom, email i historial de compres. Encapsula totes les dades del client amb validació als setters."},{name:"  servei/",type:"folder",description:"Package que conté la lògica de negoci. Aquí és on es fan els càlculs, validacions i operacions complexes."},{name:"    GestorProductes.java",type:"file",description:"Classe que gestiona la col·lecció de productes: afegir, eliminar, buscar, calcular el valor total de l'inventari. Utilitza objectes de la classe Producte."},{name:"    GestorComandes.java",type:"file",description:"Classe que gestiona les comandes: crear comanda, afegir productes, calcular total, aplicar descomptes. Coordina Producte i Client."},{name:"  app/",type:"folder",description:"Package que conté el punt d'entrada de l'aplicació. Aquí és on està el main() que inicia el programa."},{name:"    Main.java",type:"file",description:"Classe principal amb el mètode main(). Crea objectes de les altres classes, els connecta i executa el programa. És el punt d'entrada."}];function aC(){const[t,a]=A.useState(null);return e.jsxs("div",{children:[e.jsx(y,{title:"Introducció a la Modularitat"}),e.jsx(m,{variant:"info",title:"Què és la modularitat?",children:e.jsxs("p",{children:["La ",e.jsx("strong",{children:"modularitat"})," és el principi de dividir un programa en parts més petites, independents i reutilitzables, anomenades ",e.jsx("strong",{children:"mòduls"}),". Cada mòdul té una responsabilitat concreta i ben definida. En Java, els mòduls són les ",e.jsx("strong",{children:"classes"})," organitzades en ",e.jsx("strong",{children:"packages"}),"."]})}),e.jsx(y,{title:"Analogia: La Ciutat"}),e.jsxs(m,{variant:"explanation",children:[e.jsxs("p",{children:["Imagina una ",e.jsx("strong",{children:"ciutat"}),". Una ciutat no és un sol edifici gegant on tot passa al mateix lloc. Està organitzada en zones: zona residencial, zona comercial, hospitals, escoles, parcs... Cada zona té la seva funció i són independents entre si, però es connecten mitjançant carrers i transport."]}),e.jsx("p",{style:{marginTop:"10px"},children:'Un programa modular funciona igual: cada classe és com una "zona" de la ciutat, amb una funció clara. Les classes es comuniquen entre si creant objectes i cridant mètodes, com els carrers que connecten les zones.'})]}),e.jsxs(me,{children:[e.jsx(T,{title:"Zona Residencial = Classe Model",variant:"blue",children:e.jsxs("p",{children:["On viuen les dades. Classes com ",e.jsx("code",{children:"Producte"}),", ",e.jsx("code",{children:"Client"})," que emmagatzemen informació."]})}),e.jsx(T,{title:"Zona Comercial = Classe Servei",variant:"yellow",children:e.jsxs("p",{children:["On passa la lògica de negoci. Classes com ",e.jsx("code",{children:"GestorProductes"})," que processen dades."]})}),e.jsx(T,{title:"Ajuntament = Classe Main",variant:"green",children:e.jsxs("p",{children:["El punt central que coordina tot. El ",e.jsx("code",{children:"main()"})," inicia i connecta les parts."]})}),e.jsx(T,{title:"Carrers = Objectes i Mètodes",variant:"pink",children:e.jsx("p",{children:"La comunicació entre mòduls. Crear objectes i cridar mètodes connecta les classes."})})]}),e.jsx(y,{title:"Per què codi modular?"}),e.jsxs(me,{children:[e.jsx(T,{title:"Fàcil de mantenir",variant:"blue",children:e.jsx("p",{children:"Si alguna cosa falla, saps exactament a quina classe mirar. No cal revisar 1000 línies de codi."})}),e.jsx(T,{title:"Reutilitzable",variant:"yellow",children:e.jsx("p",{children:"Una classe ben feta es pot reutilitzar en altres projectes. Escrius el codi un cop, l'uses moltes vegades."})}),e.jsx(T,{title:"Treball en equip",variant:"green",children:e.jsx("p",{children:"Cada persona pot treballar en una classe diferent sense interferir amb els altres."})}),e.jsx(T,{title:"Fàcil de testejar",variant:"pink",children:e.jsx("p",{children:"Pots provar cada classe per separat (tests unitaris) abans de juntar-ho tot."})})]}),e.jsx(y,{title:"Explorador d'Estructura de Projecte"}),e.jsx(m,{variant:"info",children:e.jsx("p",{children:"Fes clic a qualsevol fitxer o carpeta per veure la seva descripció i entendre la seva funció dins del projecte modular."})}),e.jsxs("div",{style:{display:"flex",gap:"20px",marginTop:"16px",flexWrap:"wrap"},children:[e.jsxs("div",{style:{flex:"1",minWidth:"280px",backgroundColor:"#1e2837",borderRadius:"8px",padding:"16px",fontFamily:"monospace",fontSize:"14px"},children:[e.jsx("div",{style:{color:"#ffd700",marginBottom:"12px",fontWeight:"bold"},children:"Estructura del Projecte"}),El.map((r,n)=>e.jsxs("div",{onClick:()=>a(n),style:{padding:"6px 8px",cursor:"pointer",borderRadius:"4px",color:t===n?"#ffd700":r.type==="folder"?"#90cdf4":"#e8eef5",backgroundColor:t===n?"rgba(255, 215, 0, 0.1)":"transparent",fontWeight:r.type==="folder"?"bold":"normal",transition:"background-color 0.2s"},onMouseOver:i=>{t!==n&&(i.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.05)")},onMouseOut:i=>{t!==n&&(i.currentTarget.style.backgroundColor="transparent")},children:[r.type==="folder"?"📁 ":"📄 ",r.name]},n))]}),e.jsx("div",{style:{flex:"1",minWidth:"280px",backgroundColor:"#f0f4f8",borderRadius:"8px",padding:"20px",border:"2px solid #d0dae6"},children:t!==null?e.jsxs(e.Fragment,{children:[e.jsx("h4",{style:{color:"#1a4d8f",marginBottom:"12px"},children:El[t].name.trim()}),e.jsx("p",{style:{color:"#4a5568",lineHeight:"1.6"},children:El[t].description})]}):e.jsx("p",{style:{color:"#a0aec0",fontStyle:"italic"},children:"Selecciona un fitxer o carpeta per veure la seva descripció."})})]}),e.jsx(y,{title:"Exemple Bàsic de Modularitat"}),e.jsx(g,{label:"Dues classes separades que col·laboren",showLineNumbers:!0,code:`// Fitxer: Salutador.java
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
}`}),e.jsx(m,{variant:"success",title:"Resum",children:e.jsx("p",{children:"La modularitat és dividir el programa en classes amb responsabilitats clares. Cada classe és un mòdul independent que es pot reutilitzar, testejar i mantenir per separat. Les classes es comuniquen creant objectes i cridant mètodes."})})]})}function rC(){return e.jsxs("div",{children:[e.jsx(y,{title:"El Problema del Codi Monolític"}),e.jsx(m,{variant:"warning",title:"Què és un programa monolític?",children:e.jsxs("p",{children:["Un programa ",e.jsx("strong",{children:"monolític"})," és aquell on ",e.jsx("strong",{children:"tot el codi"})," està en un sol fitxer o classe. Totes les variables, tota la lògica, totes les funcionalitats... tot barrejat en un únic ",e.jsx("code",{children:"main()"}),". Funciona per a programes petits, però es converteix en un problema seriós a mesura que el programa creix."]})}),e.jsx(y,{title:"Exemple: Tot en un sol fitxer"}),e.jsx(g,{label:"Programa monolític (MAL disseny)",showLineNumbers:!0,code:`public class MonoliticApp {
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
}`}),e.jsx(y,{title:"Monolític vs Modular"}),e.jsxs(oe,{children:[e.jsx(U,{title:"Programa Monolític",variant:"bad",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Tot en un sol fitxer:"})," variables, lògica, sortida... tot barrejat"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Difícil de llegir:"})," quan el programa creix, és impossible entendre-ho"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Difícil de mantenir:"})," un canvi pot trencar tot el programa"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No reutilitzable:"})," no pots reutilitzar parts del codi en altres projectes"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No testejable:"})," no pots provar una funcionalitat sense executar-ho tot"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Conflictes en equip:"})," dues persones no poden treballar al mateix fitxer sense conflictes"]})]})}),e.jsx(U,{title:"Programa Modular",variant:"good",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Classes separades:"})," cada classe té una responsabilitat"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Fàcil de llegir:"})," cada fitxer és curt i clar"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Fàcil de mantenir:"})," un canvi en una classe no afecta les altres"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reutilitzable:"})," pots usar les classes en altres projectes"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Testejable:"})," pots provar cada classe per separat"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Treball en equip:"})," cada persona treballa en una classe diferent"]})]})})]}),e.jsx(y,{title:"Problemes Concrets del Codi Monolític"}),e.jsxs(me,{children:[e.jsx(T,{title:"Efecte Espagueti",variant:"pink",children:e.jsx("p",{children:"El codi s'entrelliga com els espaguetis. Una variable definida a la línia 10 s'utilitza a la línia 200 i es modifica a la línia 450. Impossible de seguir."})}),e.jsx(T,{title:"Duplicació de Codi",variant:"pink",children:e.jsx("p",{children:"Sense mòduls, acabes copiant i enganxant el mateix codi en diversos llocs. Si has de canviar alguna cosa, l'has de canviar en tots els llocs."})}),e.jsx(T,{title:"Debugging Impossible",variant:"pink",children:e.jsx("p",{children:"Quan hi ha un error, has de revisar tot el fitxer. No pots aïllar el problema perquè tot està connectat. Un bug pot estar en qualsevol de les 1000 línies."})}),e.jsx(T,{title:"Escalabilitat Zero",variant:"pink",children:e.jsx("p",{children:"Afegir una nova funcionalitat significa modificar el fitxer monolític, amb el risc de trencar les funcionalitats existents."})})]}),e.jsx(y,{title:"La Solució: Dividir en Classes"}),e.jsxs(m,{variant:"success",children:[e.jsxs("p",{children:["La solució és ",e.jsx("strong",{children:"dividir el programa en classes"}),", on cada classe té una responsabilitat única i ben definida. Així aconseguim:"]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Separació de responsabilitats:"})," cada classe fa UNA cosa"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Encapsulació:"})," les dades estan protegides dins de cada classe"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reutilització:"})," les classes es poden usar en múltiples projectes"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mantenibilitat:"})," és fàcil trobar i corregir errors"]})]})]}),e.jsxs(oe,{children:[e.jsx(U,{title:"Monolític: 1 fitxer",variant:"bad",children:e.jsx(g,{language:"bash",code:`projecte/
  MonoliticApp.java  (500+ línies)`})}),e.jsx(U,{title:"Modular: múltiples classes",variant:"good",children:e.jsx(g,{language:"bash",code:`projecte/
  model/
    Producte.java     (30 línies)
  servei/
    GestorProductes.java (50 línies)
  app/
    Main.java         (20 línies)`})})]}),e.jsx(m,{variant:"info",title:"Recorda",children:e.jsxs("p",{children:["El primer pas per millorar el teu codi és ",e.jsx("strong",{children:"identificar les responsabilitats"})," del teu programa i crear una classe per a cadascuna. A la següent pàgina veurem com fer-ho pas a pas amb un exemple concret."]})})]})}function nC(){return e.jsxs("div",{children:[e.jsx(y,{title:"Packages: Organització del Codi"}),e.jsx(m,{variant:"info",title:"Què és un package?",children:e.jsxs("p",{children:["Un ",e.jsx("strong",{children:"package"})," és una carpeta que agrupa classes relacionades. És la manera que té Java d'organitzar el codi en projectes grans. Cada fitxer ",e.jsx("code",{children:".java"})," declara a quin package pertany, i per utilitzar classes d'un altre package cal importar-les."]})}),e.jsx(y,{title:"Estructura de Carpetes"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["L'estructura de carpetes del projecte ha de coincidir amb la declaració dels packages. Cada package és una carpeta, i cada classe és un fitxer",e.jsx("code",{children:".java"})," dins d'aquesta carpeta."]})}),e.jsx(g,{label:"Estructura de carpetes d'un projecte",language:"bash",code:`el-meu-projecte/
  src/
    utils/                          ← Package "utils"
      CalculsArrayReals.java
      Validador.java
    model/                          ← Package "model"
      Producte.java
      Client.java
    app/                            ← Package "app"
      Main.java`}),e.jsx(y,{title:"Declaració de Package"}),e.jsx(m,{variant:"warning",title:"Regla important",children:e.jsxs("p",{children:["La declaració ",e.jsx("code",{children:"package"})," ha de ser la ",e.jsx("strong",{children:"primera instrucció"})," del fitxer Java, abans de qualsevol ",e.jsx("code",{children:"import"})," o declaració de classe. El nom del package ha de coincidir exactament amb el nom de la carpeta."]})}),e.jsx(g,{label:"Declaració del package",showLineNumbers:!0,code:`// Fitxer: src/utils/CalculsArrayReals.java
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
}`}),e.jsx(y,{title:"Mètodes d'Importació"}),e.jsx(m,{variant:"info",children:e.jsxs("p",{children:["Per utilitzar una classe d'un altre package, hi ha ",e.jsx("strong",{children:"tres mètodes"})," d'importació. Cadascun té els seus avantatges."]})}),e.jsx(J,{headers:["Mètode","Sintaxi","Quan usar-lo"],rows:[{group:"Mètodes d'importació"},{cells:["Import explícit","import utils.CalculsArrayReals;","Quan uses una o poques classes concretes"]},{cells:["Import amb comodí (*)","import utils.*;","Quan uses moltes classes del mateix package"]},{cells:["Nom qualificat","utils.CalculsArrayReals c = new utils.CalculsArrayReals();","Per evitar ambigüitats o ús puntual"]}]}),e.jsxs(me,{children:[e.jsxs(T,{title:"Import Explícit",variant:"blue",children:[e.jsxs("p",{children:["Importa una classe concreta. És el mètode ",e.jsx("strong",{children:"recomanat"}),"."]}),e.jsx(g,{code:`package app;

import utils.CalculsArrayReals;
import model.Producte;

public class Main {
    public static void main(String[] args) {
        CalculsArrayReals c = new CalculsArrayReals();
        Producte p = new Producte();
    }
}`}),e.jsx(m,{variant:"success",children:e.jsx("p",{children:"Queda clar quines classes s'estan usant."})})]}),e.jsxs(T,{title:"Import amb Comodí (*)",variant:"yellow",children:[e.jsxs("p",{children:["Importa ",e.jsx("strong",{children:"totes"})," les classes d'un package."]}),e.jsx(g,{code:`package app;

import utils.*;    // Totes les classes de utils
import model.*;    // Totes les classes de model

public class Main {
    public static void main(String[] args) {
        CalculsArrayReals c = new CalculsArrayReals();
        Producte p = new Producte();
        Validador v = new Validador();
    }
}`}),e.jsx(m,{variant:"warning",children:e.jsx("p",{children:"Més còmode, però menys clar. No saps quines classes s'usen realment."})})]}),e.jsxs(T,{title:"Nom Qualificat",variant:"green",children:[e.jsxs("p",{children:["Usa el nom complet ",e.jsx("strong",{children:"sense import"}),"."]}),e.jsx(g,{code:`package app;

// Sense import!
public class Main {
    public static void main(String[] args) {
        utils.CalculsArrayReals c =
            new utils.CalculsArrayReals();
        model.Producte p =
            new model.Producte();
    }
}`}),e.jsx(m,{variant:"info",children:e.jsx("p",{children:"Útil quan dues classes de packages diferents tenen el mateix nom."})})]})]}),e.jsx(y,{title:"Convencions de Noms"}),e.jsx(J,{headers:["Regla","Exemple Correcte","Exemple Incorrecte"],rows:[{cells:["Tot en minúscules","package model;","package Model;"]},{cells:["Sense espais","package gestordades;","package gestor dades;"]},{cells:["Sense caràcters especials","package utils;","package utils-helpers;"]},{cells:["Noms descriptius","package controlador;","package ctrl;"]},{cells:["Domini invers (professional)","package com.lasalle.app;","package app.lasalle.com;"]}]}),e.jsx(m,{variant:"explanation",title:"Convenció del domini invers",children:e.jsxs("p",{children:["En projectes professionals, els packages comencen amb el ",e.jsx("strong",{children:"domini invers"})," de l'organització. Això evita conflictes de noms entre projectes de diferents empreses."]})}),e.jsx(g,{label:"Exemple amb domini invers",code:`// Projecte de La Salle
package com.lasalle.programacio.model;
package com.lasalle.programacio.vista;
package com.lasalle.programacio.controlador;

// Projecte de Google
package com.google.maps.model;
package com.google.maps.api;`}),e.jsx(y,{title:"Exemple Complet"}),e.jsxs(oe,{children:[e.jsx(U,{title:"Estructura del projecte",variant:"blue",children:e.jsx(g,{language:"bash",code:`projecte/
  src/
    utils/
      Matematiques.java
    app/
      Main.java`})}),e.jsx(U,{title:"Compilar i executar",variant:"blue",children:e.jsx(g,{language:"bash",code:`# Compilar
javac -d bin src/utils/Matematiques.java
javac -d bin -cp bin src/app/Main.java

# Executar
java -cp bin app.Main`})})]}),e.jsx(g,{label:"utils/Matematiques.java",showLineNumbers:!0,code:`package utils;

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
}`}),e.jsx(g,{label:"app/Main.java",showLineNumbers:!0,code:`package app;

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
}`}),e.jsx(m,{variant:"success",title:"Resum",children:e.jsxs("p",{children:["Els packages organitzen les classes en carpetes. Declara el package a la primera línia, utilitza ",e.jsx("code",{children:"import"})," per accedir a classes d'altres packages (preferiblement import explícit), i segueix les convencions de noms (tot en minúscules, domini invers en projectes professionals)."]})})]})}function iC(){return e.jsxs("div",{children:[e.jsx(y,{title:"Exemple Complet: Calculadora Modular"}),e.jsx(m,{variant:"info",title:"Objectiu",children:e.jsxs("p",{children:["Crearem una calculadora modular formada per ",e.jsx("strong",{children:"dues classes"}),": una classe ",e.jsx("code",{children:"Operacions"})," que conté els mètodes de càlcul (sumar, restar, multiplicar, dividir) i una classe ",e.jsx("code",{children:"Calculadora"})," amb el ",e.jsx("code",{children:"main()"}),"que la utilitza. Aplicarem tots els conceptes de modularitat apresos."]})}),e.jsx(y,{title:"Estructura del Projecte"}),e.jsx(g,{label:"Organització de fitxers",language:"bash",code:`calculadora/
  src/
    utils/
      Operacions.java       ← Classe amb els mètodes de càlcul
    app/
      Calculadora.java      ← Classe principal amb el main()`}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Operacions.java",variant:"blue",children:[e.jsxs("p",{children:["La classe ",e.jsx("strong",{children:"auxiliar"})," que conté tota la lògica de càlcul."]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsx("li",{children:e.jsx("code",{children:"sumar(a, b)"})}),e.jsx("li",{children:e.jsx("code",{children:"restar(a, b)"})}),e.jsx("li",{children:e.jsx("code",{children:"multiplicar(a, b)"})}),e.jsxs("li",{children:[e.jsx("code",{children:"dividir(a, b)"})," amb control de divisió per zero"]})]})]}),e.jsxs(U,{title:"Calculadora.java",variant:"blue",children:[e.jsxs("p",{children:["La classe ",e.jsx("strong",{children:"principal"})," que usa Operacions."]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Pas 1: Instancia ",e.jsx("code",{children:"Operacions"})]}),e.jsx("li",{children:"Pas 2: Crida els mètodes"}),e.jsx("li",{children:"Mostra els resultats"})]})]})]}),e.jsx(y,{title:"Classe Operacions"}),e.jsx(g,{label:"utils/Operacions.java",showLineNumbers:!0,code:`package utils;

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
}`}),e.jsx(m,{variant:"warning",title:"Control de divisió per zero",children:e.jsxs("p",{children:["El mètode ",e.jsx("code",{children:"dividir"})," comprova si el divisor és zero abans de fer la divisió. Si és zero, mostra un missatge d'error i retorna 0. Això evita l'error ",e.jsx("code",{children:"ArithmeticException"})," que es produiria en una divisió per zero amb enters, i el resultat ",e.jsx("code",{children:"Infinity"})," amb doubles."]})}),e.jsx(y,{title:"Classe Calculadora (Main)"}),e.jsx(g,{label:"app/Calculadora.java",showLineNumbers:!0,code:`package app;

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
}`}),e.jsx(y,{title:"Sortida del Programa"}),e.jsx(ms,{label:"Resultat esperat a la consola",language:"bash",defaultOpen:!0,code:`=== CALCULADORA ===
20.0 + 5.0 = 25.0
20.0 - 5.0 = 15.0
20.0 * 5.0 = 100.0
20.0 / 5.0 = 4.0

--- Prova divisio per zero ---
Error: No es pot dividir per zero!
Resultat: 0.0`}),e.jsx(y,{title:"Per què és millor que tot al main?"}),e.jsxs(oe,{children:[e.jsx(U,{title:"Tot al main (monolític)",variant:"bad",children:e.jsx(g,{code:`public static void main(String[] args) {
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
}`})}),e.jsx(U,{title:"Modular (classe separada)",variant:"good",children:e.jsx(g,{code:`public static void main(String[] args) {
    double a = 20, b = 5;

    // 1. Instanciar
    Operacions op = new Operacions();

    // 2. Cridar metodes
    System.out.println(op.sumar(a, b));
    System.out.println(op.restar(a, b));
    System.out.println(op.multiplicar(a, b));
    System.out.println(op.dividir(a, b));

    // Clar, net, reutilitzable!
}`})})]}),e.jsx(y,{title:"Conceptes Aplicats"}),e.jsxs(me,{children:[e.jsx(T,{title:"Modularitat",variant:"blue",children:e.jsx("p",{children:"El codi està dividit en dues classes amb responsabilitats clares i separades."})}),e.jsx(T,{title:"Packages",variant:"yellow",children:e.jsxs("p",{children:["Les classes estan organitzades en packages: ",e.jsx("code",{children:"utils"})," per als càlculs, ",e.jsx("code",{children:"app"})," per al main."]})}),e.jsx(T,{title:"Import",variant:"green",children:e.jsxs("p",{children:["S'utilitza ",e.jsx("code",{children:"import utils.Operacions;"})," per accedir a la classe auxiliar des d'un altre package."]})}),e.jsx(T,{title:"Control d'Errors",variant:"pink",children:e.jsxs("p",{children:["El mètode ",e.jsx("code",{children:"dividir"})," comprova la divisió per zero abans d'operar, evitant errors en temps d'execució."]})})]}),e.jsx(ms,{label:"Versió ampliada: més operacions",code:`package utils;

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
}`}),e.jsx(m,{variant:"success",title:"Resum",children:e.jsxs("p",{children:["Aquest exemple mostra com crear una calculadora modular amb dues classes.",e.jsx("code",{children:" Operacions"})," conté tota la lògica de càlcul amb control d'errors, i ",e.jsx("code",{children:"Calculadora"})," la utilitza seguint els 2 passos: instanciar i cridar mètodes. El codi és net, reutilitzable i fàcil d'ampliar."]})})]})}const sC=`// String es un OBJECTE, no un tipus primitiu
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
System.out.println(s1.length()); // 2 (es un String "42", no un numero)`,jC=`// Opcio 1: Operador + (senzill, per poques concatenacions)
String nom = "Anna";
int edat = 20;
String missatge = "Hola, " + nom + "! Tens " + edat + " anys.";

// Opcio 2: concat() (nomes Strings, no converteix altres tipus)
String salut = "Hola".concat(", ").concat(nom);

// Opcio 3: StringBuilder (EFICIENT per moltes concatenacions)
// Quan concatenem amb + dins d'un bucle, Java crea molts objectes temporals
// StringBuilder evita aquest problema`,vC=`// StringBuilder: MOLT mes eficient en bucles
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
}`;function SC(){return e.jsxs("div",{children:[e.jsx(y,{title:"La Classe String"}),e.jsxs(m,{variant:"info",title:"Què és String?",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"String"})," és una ",e.jsx("strong",{children:"classe"})," de Java, no un tipus primitiu. Representa una cadena de caràcters i és un dels objectes més utilitzats en programació."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"És un objecte:"}),' tot i que es pot crear amb literals ("text"), internament és un objecte de la classe ',e.jsx("code",{children:"java.lang.String"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"És immutable:"}),' un cop creat, el seu contingut NO es pot modificar. Qualsevol operació que "modifiqui" un String en realitat crea un objecte nou.']}),e.jsxs("li",{children:[e.jsx("strong",{children:"String Pool:"}),' Java manté un "pool" de Strings literals per reutilitzar objectes i estalviar memòria.']})]})]}),e.jsx(g,{code:sC,label:"String és un objecte immutable",showLineNumbers:!0}),e.jsx(y,{title:"Crear Strings"}),e.jsx(g,{code:lC,label:"Maneres de crear Strings",showLineNumbers:!0}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Literal (recomanat)",variant:"good",children:[e.jsx("p",{children:e.jsx("code",{children:'String s = "Hola";'})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Més eficient (reutilitza objectes del pool)"}),e.jsx("li",{children:"Forma habitual i recomanada"}),e.jsx("li",{children:"Java optimitza automàticament"})]})]}),e.jsxs(U,{title:"Constructor new",variant:"bad",children:[e.jsx("p",{children:e.jsx("code",{children:'String s = new String("Hola");'})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Crea sempre un objecte nou"}),e.jsx("li",{children:"No aprofita el String Pool"}),e.jsx("li",{children:"Gasta més memòria innecessàriament"})]})]})]}),e.jsx(y,{title:"Comparar Strings"}),e.jsxs(m,{variant:"error",title:"ERROR COMÚ: Usar == per comparar Strings",children:[e.jsxs("p",{children:["L'operador ",e.jsx("code",{children:"=="})," compara ",e.jsx("strong",{children:"referències"})," (adreces de memòria), NO el contingut dels Strings. Dos Strings poden contenir el mateix text però estar en posicions de memòria diferents, i ",e.jsx("code",{children:"=="})," diria ",e.jsx("code",{children:"false"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Sempre"})," utilitza ",e.jsx("code",{children:".equals()"})," o ",e.jsx("code",{children:".equalsIgnoreCase()"})," per comparar el contingut de Strings!"]})]}),e.jsx(g,{code:oC,label:"Per què == NO funciona per comparar contingut",showLineNumbers:!0}),e.jsx(g,{code:cC,label:"Comparació correcta amb .equals() i .equalsIgnoreCase()",showLineNumbers:!0}),e.jsx(J,{headers:["Mètode","Compara","Retorna","Exemple"],rows:[{cells:["==","Referències (memòria)","boolean",'"Hola" == "Hola" // depèn!']},{cells:[".equals()","Contingut exacte","boolean",'"Hola".equals("Hola") // true']},{cells:[".equalsIgnoreCase()","Contingut (ignora cas)","boolean",'"Hola".equalsIgnoreCase("hola") // true']},{cells:[".compareTo()","Ordre lexicogràfic","int (neg/0/pos)",'"Anna".compareTo("Marc") // negatiu']}]}),e.jsx(y,{title:"Mètodes de la Classe String"}),e.jsx(J,{headers:["Mètode","Descripció","Retorna","Exemple"],rows:[{group:"Longitud i Accés"},{cells:["length()","Nombre de caràcters","int",'"Hola".length() // 4']},{cells:["charAt(i)","Caràcter a la posició i","char",`"Hola".charAt(0) // 'H'`]},{cells:["isEmpty()","Comprova si està buit","boolean",'"".isEmpty() // true']},{group:"Cerca"},{cells:["indexOf(str)","Posició de la primera aparició","int (-1 si no trobat)",'"Hola".indexOf("la") // 2']},{cells:["lastIndexOf(str)","Posició de la última aparició","int (-1 si no trobat)",'"abab".lastIndexOf("ab") // 2']},{cells:["contains(str)","Conté el substring?","boolean",'"Hola".contains("ol") // true']},{cells:["startsWith(str)","Comença amb...?","boolean",'"Hola".startsWith("Ho") // true']},{cells:["endsWith(str)","Acaba amb...?","boolean",'"Hola".endsWith("la") // true']},{group:"Extracció"},{cells:["substring(inici)","Des de inici fins al final","String",'"Hola".substring(2) // "la"']},{cells:["substring(inici, fi)","Des de inici fins a fi (exclusiu)","String",'"Hola".substring(1,3) // "ol"']},{group:"Transformació"},{cells:["toUpperCase()","Converteix a majúscules","String",'"hola".toUpperCase() // "HOLA"']},{cells:["toLowerCase()","Converteix a minúscules","String",'"HOLA".toLowerCase() // "hola"']},{cells:["trim()","Elimina espais extrems","String",'"  hola  ".trim() // "hola"']},{cells:["replace(vell, nou)","Substitueix aparicions","String",'"hola".replace("o","0") // "h0la"']},{group:"Divisió i Conversió"},{cells:["split(regex)","Divideix en array","String[]",'"a,b,c".split(",") // ["a","b","c"]']},{cells:["toCharArray()","Converteix a array de chars","char[]",'"Hola".toCharArray()']},{cells:["concat(str)","Concatena amb un altre String","String",'"Hola".concat(" Mon") // "Hola Mon"']},{cells:["String.valueOf(x)","Converteix qualsevol valor a String","String",'String.valueOf(42) // "42"']}]}),e.jsx(y,{title:"Exemples Detallats"}),e.jsx(m,{variant:"explanation",title:"length() i charAt()",children:e.jsxs("p",{children:[e.jsx("code",{children:"length()"})," retorna el nombre total de caràcters. ",e.jsx("code",{children:"charAt(index)"})," retorna el caràcter a una posició concreta (començant des de 0)."]})}),e.jsx(g,{code:uC,label:"length() i charAt() - Longitud i accés per posició",showLineNumbers:!0}),e.jsx(g,{code:dC,label:"substring() - Extreure parts d'un String",showLineNumbers:!0}),e.jsx(g,{code:pC,label:"indexOf() i lastIndexOf() - Cercar dins d'un String",showLineNumbers:!0}),e.jsx(g,{code:mC,label:"contains(), startsWith(), endsWith() - Comprovacions",showLineNumbers:!0}),e.jsx(g,{code:hC,label:"toUpperCase(), toLowerCase(), trim(), isEmpty()",showLineNumbers:!0}),e.jsx(g,{code:fC,label:"replace() - Substituir text",showLineNumbers:!0}),e.jsx(g,{code:xC,label:"split() i toCharArray() - Dividir un String",showLineNumbers:!0}),e.jsx(g,{code:gC,label:"concat() i String.valueOf() - Concatenar i convertir",showLineNumbers:!0}),e.jsx(y,{title:"Concatenació de Strings"}),e.jsx(m,{variant:"info",title:"Tres maneres de concatenar",children:e.jsxs("p",{children:["Hi ha tres formes principals de concatenar Strings en Java. L'operador ",e.jsx("code",{children:"+"})," és el més comú, però ",e.jsx("strong",{children:"StringBuilder"})," és molt més eficient quan fas moltes concatenacions (especialment dins de bucles)."]})}),e.jsx(g,{code:jC,label:"Les tres opcions de concatenació",showLineNumbers:!0}),e.jsx(y,{title:"StringBuilder"}),e.jsx(m,{variant:"warning",title:"Quan usar StringBuilder?",children:e.jsxs("p",{children:["Utilitza ",e.jsx("strong",{children:"StringBuilder"})," sempre que necessitis concatenar Strings dins d'un ",e.jsx("strong",{children:"bucle"})," o quan facis moltes operacions de concatenació. Com que String és immutable, cada ",e.jsx("code",{children:"+"})," crea un objecte nou, cosa que és molt ineficient en bucles grans."]})}),e.jsx(g,{code:vC,label:"StringBuilder - Mètodes principals",showLineNumbers:!0}),e.jsxs(oe,{children:[e.jsx(U,{title:"Concatenació amb + en bucle",variant:"bad",children:e.jsx("p",{children:"Cada iteració crea un objecte String nou. Molt lent per bucles grans."})}),e.jsx(U,{title:"StringBuilder en bucle",variant:"good",children:e.jsx("p",{children:"Modifica el mateix objecte internament. Molt més ràpid i eficient."})})]}),e.jsx(g,{code:bC,label:"Comparació: + en bucle vs StringBuilder",showLineNumbers:!0}),e.jsx(y,{title:"Exemple Complet"}),e.jsx(m,{variant:"success",title:"Exemple pràctic: Analitzar una frase",children:e.jsx("p",{children:"Aquest exemple mostra com combinar diversos mètodes de String per analitzar i transformar una frase."})}),e.jsx(g,{code:yC,label:"Exemple complet: Analitzar i transformar text",showLineNumbers:!0}),e.jsx(y,{title:"Resum"}),e.jsxs(me,{children:[e.jsx(T,{title:"Immutabilitat",variant:"blue",children:e.jsx("p",{children:"Els Strings són immutables. Qualsevol modificació crea un objecte nou."})}),e.jsx(T,{title:"Comparació",variant:"blue",children:e.jsxs("p",{children:["Usa ",e.jsx("code",{children:".equals()"})," per comparar contingut. Mai ",e.jsx("code",{children:"=="})," per Strings."]})}),e.jsx(T,{title:"StringBuilder",variant:"blue",children:e.jsx("p",{children:"Utilitza StringBuilder per concatenacions en bucles. És molt més eficient."})}),e.jsx(T,{title:"Mètodes Útils",variant:"blue",children:e.jsx("p",{children:"String té més de 15 mètodes essencials: length, charAt, substring, indexOf, contains, replace, split, trim..."})})]})]})}const EC=`// Math es una classe utilitaria de java.lang
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
System.out.println("Nombre d'Euler: " + creixement); // 2.718281828459045`,wC=`// Math.abs(x) - Valor absolut (sempre positiu)
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
System.out.println("Hipotenusa: " + hipotenusa); // 5.0`,LC=`// Math.ceil(x) - Arrodoneix cap AMUNT (sostre)
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
System.out.println(tresDecimals); // 3.142`,RC=`// Math.random() - Retorna un double aleatori entre 0.0 (inclusiu) i 1.0 (exclusiu)
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
System.out.println("El numero " + numero + " te " + digits + " digits"); // 6`,TC=`// IMPORTANT: Les funcions trigonometriques treballen amb RADIANS, no graus!
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
System.out.println("Alcada aproximada: " + Math.round(alcada) + " metres"); // 87 metres`,PC=`public class ExempleMath {
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
}`;function NC(){return e.jsxs("div",{children:[e.jsx(y,{title:"La Classe Math"}),e.jsxs(m,{variant:"info",title:"Què és la classe Math?",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Math"})," és una ",e.jsx("strong",{children:"classe utilitària"})," de Java (",e.jsx("code",{children:"java.lang.Math"}),") que proporciona mètodes i constants per realitzar operacions matemàtiques."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Tots els mètodes són static:"})," es criden directament amb ",e.jsx("code",{children:"Math.mètode()"}),", sense crear cap objecte."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No s'instancia:"})," no es pot fer ",e.jsx("code",{children:"new Math()"}),". La classe té el constructor privat."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No cal import:"})," com que pertany a ",e.jsx("code",{children:"java.lang"}),", està disponible automàticament."]})]})]}),e.jsx(g,{code:EC,label:"Utilitzar la classe Math",showLineNumbers:!0}),e.jsx(y,{title:"Constants"}),e.jsx(J,{headers:["Constant","Valor","Descripció"],rows:[{cells:["Math.PI","3.141592653589793","El nombre Pi - relació entre circumferència i diàmetre"]},{cells:["Math.E","2.718281828459045","El nombre d'Euler - base del logaritme natural"]}]}),e.jsx(g,{code:CC,label:"Constants Math.PI i Math.E",showLineNumbers:!0}),e.jsx(y,{title:"Mètodes de la Classe Math"}),e.jsx(J,{headers:["Mètode","Descripció","Retorna","Exemple"],rows:[{group:"Valor Absolut i Comparació"},{cells:["Math.abs(x)","Valor absolut","int/double","Math.abs(-5) // 5"]},{cells:["Math.max(a, b)","El major dels dos valors","int/double","Math.max(3, 7) // 7"]},{cells:["Math.min(a, b)","El menor dels dos valors","int/double","Math.min(3, 7) // 3"]},{group:"Potències i Arrels"},{cells:["Math.pow(base, exp)","Potència (base^exp)","double","Math.pow(2, 3) // 8.0"]},{cells:["Math.sqrt(x)","Arrel quadrada","double","Math.sqrt(25) // 5.0"]},{cells:["Math.cbrt(x)","Arrel cúbica","double","Math.cbrt(27) // 3.0"]},{group:"Arrodoniment"},{cells:["Math.ceil(x)","Arrodoneix cap amunt (sostre)","double","Math.ceil(3.1) // 4.0"]},{cells:["Math.floor(x)","Arrodoneix cap avall (terra)","double","Math.floor(3.9) // 3.0"]},{cells:["Math.round(x)","Arrodoneix al més proper","long","Math.round(3.5) // 4"]},{group:"Aleatori"},{cells:["Math.random()","Nombre aleatori [0.0, 1.0)","double","Math.random() // 0.7423..."]},{group:"Logaritmes"},{cells:["Math.log(x)","Logaritme natural (base e)","double","Math.log(Math.E) // 1.0"]},{cells:["Math.log10(x)","Logaritme en base 10","double","Math.log10(100) // 2.0"]},{group:"Trigonometria (radians)"},{cells:["Math.sin(x)","Sinus","double","Math.sin(Math.PI/2) // 1.0"]},{cells:["Math.cos(x)","Cosinus","double","Math.cos(0) // 1.0"]},{cells:["Math.tan(x)","Tangent","double","Math.tan(Math.PI/4) // ~1.0"]},{cells:["Math.toRadians(x)","Graus a radians","double","Math.toRadians(180) // PI"]}]}),e.jsx(y,{title:"Exemples Detallats"}),e.jsx(m,{variant:"explanation",title:"abs(), max(), min()",children:e.jsxs("p",{children:[e.jsx("code",{children:"Math.abs()"})," retorna el valor absolut (sempre positiu).",e.jsx("code",{children:" Math.max()"})," i ",e.jsx("code",{children:"Math.min()"})," retornen el major i menor de dos valors. Es poden anidar per comparar més de dos valors."]})}),e.jsx(g,{code:wC,label:"abs(), max(), min() - Valor absolut i comparacions",showLineNumbers:!0}),e.jsx(g,{code:AC,label:"pow(), sqrt(), cbrt() - Potències i arrels",showLineNumbers:!0}),e.jsx(m,{variant:"warning",title:"Math.round() vs Math.ceil() vs Math.floor()",children:e.jsxs("p",{children:["No confonguis aquests tres mètodes! ",e.jsx("code",{children:"ceil()"})," sempre arrodoneix cap amunt,",e.jsx("code",{children:" floor()"})," sempre cap avall, i ",e.jsx("code",{children:"round()"})," al més proper. Amb nombres negatius el comportament pot ser confús: ",e.jsx("code",{children:"Math.floor(-2.3)"})," dona ",e.jsx("code",{children:"-3.0"}),", no ",e.jsx("code",{children:"-2.0"}),"!"]})}),e.jsx(g,{code:LC,label:"ceil(), floor(), round() - Arrodoniment",showLineNumbers:!0}),e.jsx(g,{code:RC,label:"Math.random() - Nombres aleatoris",showLineNumbers:!0}),e.jsxs(m,{variant:"success",title:"Fórmula per enters aleatoris en un rang",children:[e.jsxs("p",{children:["La fórmula per obtenir un enter aleatori entre ",e.jsx("code",{children:"min"})," i ",e.jsx("code",{children:"max"})," (ambdós inclusius) és:"]}),e.jsx("p",{children:e.jsx("code",{children:"int aleatori = (int)(Math.random() * (max - min + 1)) + min;"})})]}),e.jsx(g,{code:MC,label:"log(), log10() - Logaritmes",showLineNumbers:!0}),e.jsx(m,{variant:"warning",title:"Trigonometria: Radians, no Graus!",children:e.jsxs("p",{children:["Les funcions ",e.jsx("code",{children:"Math.sin()"}),", ",e.jsx("code",{children:"Math.cos()"})," i ",e.jsx("code",{children:"Math.tan()"})," esperen l'angle en ",e.jsx("strong",{children:"radians"}),", no en graus. Utilitza ",e.jsx("code",{children:"Math.toRadians(graus)"})," per convertir graus a radians abans de passar-los a aquestes funcions."]})}),e.jsx(g,{code:TC,label:"sin(), cos(), tan(), toRadians() - Trigonometria",showLineNumbers:!0}),e.jsx(y,{title:"Exemple Complet"}),e.jsx(m,{variant:"success",title:"Exemple pràctic: Càlculs amb Math",children:e.jsx("p",{children:"Un exemple que combina diversos mètodes de Math per fer càlculs de cercles, distàncies, simulació de daus i ajust de notes."})}),e.jsx(g,{code:PC,label:"Exemple complet amb múltiples mètodes de Math",showLineNumbers:!0}),e.jsx(y,{title:"Patrons Pràctics"}),e.jsx(J,{headers:["Patró","Codi","Resultat"],rows:[{cells:["Enter aleatori [1, 6]","(int)(Math.random() * 6) + 1","Dau: 1 a 6"]},{cells:["Enter aleatori [min, max]","(int)(Math.random() * (max-min+1)) + min","Rang personalitzat"]},{cells:["Arrodonir a 2 decimals","Math.round(x * 100.0) / 100.0","3.14159 -> 3.14"]},{cells:["Arrodonir a N decimals","Math.round(x * 10^N) / 10^N","Precisió variable"]},{cells:["Limitar un valor [min, max]","Math.max(min, Math.min(max, valor))","Clamp"]},{cells:["Distància entre 2 punts","Math.sqrt(pow(x2-x1,2) + pow(y2-y1,2))","Pitàgores"]},{cells:["Àrea del cercle","Math.PI * Math.pow(radi, 2)","Geometria"]}]}),e.jsx(y,{title:"Resum"}),e.jsxs(me,{children:[e.jsx(T,{title:"Classe Utilitària",variant:"blue",children:e.jsxs("p",{children:["Math és una classe static. No cal instanciar-la. Crida directament ",e.jsx("code",{children:"Math.mètode()"}),"."]})}),e.jsx(T,{title:"Arrodoniment",variant:"blue",children:e.jsxs("p",{children:[e.jsx("code",{children:"ceil"})," (amunt), ",e.jsx("code",{children:"floor"})," (avall), ",e.jsx("code",{children:"round"})," (més proper). Per N decimals: ",e.jsx("code",{children:"round(x * 10^N) / 10^N"}),"."]})}),e.jsx(T,{title:"Aleatoris",variant:"blue",children:e.jsxs("p",{children:[e.jsx("code",{children:"Math.random()"})," retorna [0.0, 1.0). Usa ",e.jsx("code",{children:"(int)(Math.random() * rang) + min"})," per enters."]})}),e.jsx(T,{title:"Trigonometria",variant:"blue",children:e.jsxs("p",{children:["Funcions trigonomètriques usen ",e.jsx("strong",{children:"radians"}),". Converteix amb ",e.jsx("code",{children:"Math.toRadians(graus)"}),"."]})})]})]})}const kC=`// Math.random() - Metode static de la classe Math
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
int valor = (int)(Math.random() * (max - min + 1)) + min; // 10 a 50`,qC=`// java.util.Random - Una classe completa per generar aleatoris
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
int valor = random.nextInt(max - min + 1) + min; // 10 a 50`,_C=`import java.util.Random;

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
}`;function GC(){return e.jsxs("div",{children:[e.jsx(y,{title:"Math.random() vs java.util.Random"}),e.jsx(m,{variant:"info",title:"Dues maneres de generar nombres aleatoris",children:e.jsxs("p",{children:["Java ofereix dues formes principals per generar nombres aleatoris: el mètode static ",e.jsx("code",{children:"Math.random()"})," i la classe ",e.jsx("code",{children:"java.util.Random"}),". Ambdues són vàlides, però tenen diferències importants en flexibilitat i ús."]})}),e.jsx(y,{title:"Math.random()"}),e.jsx(m,{variant:"explanation",title:"Com funciona Math.random()",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Mètode static"})," de la classe ",e.jsx("code",{children:"Math"})," - es crida directament sense crear cap objecte."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No cal import"})," - ",e.jsx("code",{children:"Math"})," pertany a ",e.jsx("code",{children:"java.lang"})," i està sempre disponible."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Retorna un ",e.jsx("code",{children:"double"})]})," entre ",e.jsx("code",{children:"0.0"})," (inclusiu) i ",e.jsx("code",{children:"1.0"})," (exclusiu)."]}),e.jsx("li",{children:"Per obtenir enters o rangs personalitzats, cal fer operacions matemàtiques addicionals."})]})}),e.jsx(g,{code:kC,label:"Math.random() - Ús bàsic i patrons",showLineNumbers:!0}),e.jsx(y,{title:"La Classe java.util.Random"}),e.jsx(m,{variant:"explanation",title:"Com funciona java.util.Random",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"És una classe"})," - cal ",e.jsx("code",{children:"import java.util.Random;"})," i crear un objecte amb ",e.jsx("code",{children:"new Random()"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Múltiples mètodes"})," - pot generar ",e.jsx("code",{children:"int"}),", ",e.jsx("code",{children:"double"}),", ",e.jsx("code",{children:"boolean"}),", ",e.jsx("code",{children:"long"})," directament."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"nextInt(bound)"})," - genera un enter entre 0 (inclusiu) i bound (exclusiu), més còmode que Math.random()."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Seedable"})," - es pot inicialitzar amb una seed per obtenir seqüències reproduïbles."]})]})}),e.jsx(g,{code:qC,label:"java.util.Random - Creació i ús bàsic",showLineNumbers:!0}),e.jsx(J,{headers:["Mètode","Retorna","Rang","Exemple"],rows:[{cells:["nextInt()","int","Qualsevol int","rng.nextInt() // -1238547921"]},{cells:["nextInt(bound)","int","0 a bound-1","rng.nextInt(6) // 0 a 5"]},{cells:["nextDouble()","double","0.0 a 0.999...","rng.nextDouble() // 0.7423..."]},{cells:["nextBoolean()","boolean","true o false","rng.nextBoolean() // true"]},{cells:["nextLong()","long","Qualsevol long","rng.nextLong()"]}]}),e.jsx(g,{code:_C,label:"Tots els mètodes de Random",showLineNumbers:!0}),e.jsx(y,{title:"Seed: Seqüències Reproduïbles"}),e.jsx(m,{variant:"info",title:"Què és una seed?",children:e.jsxs("p",{children:["Una ",e.jsx("strong",{children:"seed"})," és un valor inicial que determina la seqüència de nombres aleatoris. Si dos objectes ",e.jsx("code",{children:"Random"})," tenen la mateixa seed, generaran",e.jsx("strong",{children:" exactament la mateixa seqüència"}),". Això és molt útil per fer proves i depurar codi, ja que pots reproduir els mateixos resultats."]})}),e.jsx(g,{code:OC,label:"Seed per seqüències reproduïbles",showLineNumbers:!0}),e.jsx(y,{title:"Comparació Directa"}),e.jsxs(oe,{children:[e.jsx(U,{title:"Math.random()",variant:"blue",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Tipus:"})," Mètode static"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Import:"})," No cal"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Instanciar:"})," No cal"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Retorna:"})," Només double [0.0, 1.0)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Enters:"})," Cal cast manual ",e.jsx("code",{children:"(int)"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Boolean:"})," Cal ",e.jsx("code",{children:"< 0.5"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Seed:"})," No suportat"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ideal per:"})," Ús ràpid i senzill"]})]})}),e.jsx(U,{title:"java.util.Random",variant:"blue",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Tipus:"})," Classe completa"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Import:"})," ",e.jsx("code",{children:"import java.util.Random"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Instanciar:"})," ",e.jsx("code",{children:"new Random()"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Retorna:"})," int, double, boolean, long"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Enters:"})," Directe amb ",e.jsx("code",{children:"nextInt(bound)"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Boolean:"})," Directe amb ",e.jsx("code",{children:"nextBoolean()"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Seed:"})," Suportat (reproduïble)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ideal per:"})," Ús flexible i avançat"]})]})})]}),e.jsx(y,{title:"Quan Usar Cada Un?"}),e.jsxs(oe,{children:[e.jsx(U,{title:"Usa Math.random() quan...",variant:"good",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Necessites un random ràpid i senzill"}),e.jsx("li",{children:"No vols importar cap classe addicional"}),e.jsx("li",{children:"Només necessites un double aleatori"}),e.jsx("li",{children:"És un script petit o un exercici bàsic"}),e.jsx("li",{children:"No necessites reproduïbilitat"})]})}),e.jsx(U,{title:"Usa Random quan...",variant:"good",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Necessites generar enters directament"}),e.jsx("li",{children:"Necessites booleans aleatoris"}),e.jsx("li",{children:"Vols seqüències reproduïbles (seed)"}),e.jsx("li",{children:"Fas servir aleatoris en molts llocs del codi"}),e.jsx("li",{children:"El programa és més complex"})]})})]}),e.jsx(y,{title:"Exemples Comparatius"}),e.jsx(m,{variant:"explanation",title:"Mateixa tasca, dues solucions",children:e.jsxs("p",{children:["A continuació comparem com resoldre les mateixes tasques comunes amb ",e.jsx("code",{children:"Math.random()"})," i amb ",e.jsx("code",{children:"java.util.Random"}),"."]})}),e.jsx(g,{code:FC,label:"Enter aleatori en un rang",showLineNumbers:!0}),e.jsx(g,{code:zC,label:"Element aleatori d'un array",showLineNumbers:!0}),e.jsx(g,{code:BC,label:"Boolean aleatori",showLineNumbers:!0}),e.jsx(y,{title:"Patrons Comuns"}),e.jsx(g,{code:IC,label:"Patrons amb Math.random()",showLineNumbers:!0}),e.jsx(g,{code:DC,label:"Patrons amb java.util.Random",showLineNumbers:!0}),e.jsxs(m,{variant:"success",title:"Recomanació",children:[e.jsxs("p",{children:["Per a la majoria de programes, ",e.jsx("strong",{children:"java.util.Random"})," és la millor opció. És més llegible, més flexible, i ofereix mètodes directes per generar enters i booleans sense haver de fer operacions addicionals. A més, la possibilitat d'usar seeds la fa ideal per proves i depuració."]}),e.jsxs("p",{children:[e.jsx("code",{children:"Math.random()"})," és perfecte quan necessites un nombre aleatori ràpid en un context senzill i no vols importar cap classe."]})]}),e.jsx(y,{title:"Exemple Complet"}),e.jsx(m,{variant:"info",title:"Exemple pràctic amb java.util.Random",children:e.jsx("p",{children:"Un exemple complet que mostra diversos usos de nombres aleatoris: un joc, simulació de moneda, barreja d'array (shuffle) i generació de contrasenyes."})}),e.jsx(g,{code:UC,label:"Exemple complet: Joc, simulació, shuffle i contrasenyes",showLineNumbers:!0}),e.jsx(y,{title:"Resum"}),e.jsxs(me,{children:[e.jsx(T,{title:"Math.random()",variant:"blue",children:e.jsxs("p",{children:["Mètode static. Retorna double [0.0, 1.0). Ràpid i sense imports. Per enters: ",e.jsx("code",{children:"(int)(Math.random() * rang) + min"}),"."]})}),e.jsx(T,{title:"java.util.Random",variant:"blue",children:e.jsxs("p",{children:["Classe amb múltiples mètodes: ",e.jsx("code",{children:"nextInt()"}),", ",e.jsx("code",{children:"nextDouble()"}),", ",e.jsx("code",{children:"nextBoolean()"}),". Més flexible i llegible."]})}),e.jsx(T,{title:"Seed",variant:"blue",children:e.jsxs("p",{children:["Només ",e.jsx("code",{children:"Random"})," suporta seeds per seqüències reproduïbles. Útil per proves: ",e.jsx("code",{children:"new Random(42)"}),"."]})}),e.jsx(T,{title:"Recomanació",variant:"blue",children:e.jsxs("p",{children:["Prefereix ",e.jsx("code",{children:"java.util.Random"})," per projectes. Usa ",e.jsx("code",{children:"Math.random()"})," per coses ràpides i senzilles."]})})]})]})}function HC(){return e.jsxs("div",{children:[e.jsx(y,{title:"For-each: sintaxi simplificada per recórrer col·leccions"}),e.jsxs(m,{variant:"info",children:[e.jsxs("p",{children:["El bucle ",e.jsx("strong",{children:"for tradicional"})," és l'estàndard i el més utilitzat a Java, especialment per la seva similitud amb C, C++ i C#. És la base que has de dominar primer."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["El ",e.jsx("strong",{children:"for-each"})," (també anomenat ",e.jsx("em",{children:"enhanced for"}),") és una sintaxi simplificada que Java ofereix per recórrer arrays i col·leccions quan ",e.jsx("strong",{children:"no necessites l'índex"}),"."]})]}),e.jsx(m,{variant:"warning",title:"Prioritat: for tradicional",children:e.jsx("p",{children:"A nivell de DAM, el for tradicional és la prioritat. El for-each és un complement útil que simplifica el codi en certs casos, però no substitueix el for clàssic."})}),e.jsx(y,{title:"Sintaxi del for-each"}),e.jsx(g,{label:"Estructura general",code:`for (Tipus element : coleccio) {
    // codi que utilitza 'element'
}`}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Es llegeix com: ",e.jsx("strong",{children:'"per cada element de la col·lecció, fes..."'}),". El compilador s'encarrega internament de gestionar l'índex i l'accés als elements."]})}),e.jsx(y,{title:"Comparació: for tradicional vs for-each"}),e.jsxs(oe,{children:[e.jsxs(U,{title:"For tradicional (amb índex)",variant:"blue",children:[e.jsxs("p",{children:["Tens control total amb l'índex ",e.jsx("strong",{children:"i"}),"."]}),e.jsx(g,{code:`int[] nums = {10, 20, 30, 40, 50};

for (int i = 0; i < nums.length; i++) {
    System.out.println("Index " + i + ": " + nums[i]);
}`})]}),e.jsxs(U,{title:"For-each (sense índex)",variant:"good",children:[e.jsxs("p",{children:["Més net, però ",e.jsx("strong",{children:"no tens accés a l'índex"}),"."]}),e.jsx(g,{code:`int[] nums = {10, 20, 30, 40, 50};

for (int num : nums) {
    System.out.println(num);
}`})]})]}),e.jsx(y,{title:"Quan utilitzar cadascun?"}),e.jsxs(me,{children:[e.jsx(T,{title:"Utilitza for tradicional quan...",variant:"blue",children:e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsx("li",{children:"Necessites l'índex (saber en quina posició estàs)"}),e.jsx("li",{children:"Vols modificar els elements de l'array"}),e.jsx("li",{children:"Vols recórrer només una part de l'array"}),e.jsx("li",{children:"Necessites recórrer al revés (de final a inici)"}),e.jsx("li",{children:"Necessites comparar elements consecutius"})]})}),e.jsx(T,{title:"Utilitza for-each quan...",variant:"green",children:e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsx("li",{children:"Només necessites llegir tots els elements"}),e.jsx("li",{children:"No necessites saber la posició"}),e.jsx("li",{children:"Vols un codi més curt i llegible"}),e.jsx("li",{children:"Treballes amb col·leccions (ArrayList, etc.)"})]})})]}),e.jsx(y,{title:"Exemples amb diferents tipus"}),e.jsx(g,{label:"Array d'enters (int)",showLineNumbers:!0,code:`int[] notes = {7, 9, 5, 8, 6};
int suma = 0;

for (int nota : notes) {
    suma += nota;
}

double mitjana = (double) suma / notes.length;
System.out.println("Mitjana: " + mitjana);`}),e.jsx(g,{label:"Array de Strings",showLineNumbers:!0,code:`String[] noms = {"Anna", "Marc", "Laia", "Pol"};

for (String nom : noms) {
    System.out.println("Hola, " + nom + "!");
}
// Hola, Anna!
// Hola, Marc!
// Hola, Laia!
// Hola, Pol!`}),e.jsx(g,{label:"Array d'objectes",showLineNumbers:!0,code:`// Suposem que tenim una classe Alumne amb getNom() i getNota()
Alumne[] alumnes = {
    new Alumne("Anna", 8.5),
    new Alumne("Marc", 6.0),
    new Alumne("Laia", 9.2)
};

for (Alumne a : alumnes) {
    System.out.println(a.getNom() + " -> " + a.getNota());
}`}),e.jsx(y,{title:"Limitacions del for-each"}),e.jsx(m,{variant:"warning",title:"El for-each NO et dona l'índex",children:e.jsxs("p",{children:["Dins del for-each, ",e.jsx("strong",{children:"no tens cap variable d'índex"}),". Si necessites saber en quina posició estàs, has d'usar el for tradicional."]})}),e.jsx(m,{variant:"error",title:"No pots modificar l'array amb la variable del bucle",children:e.jsxs("p",{children:["La variable del for-each és una ",e.jsx("strong",{children:"còpia"})," del valor. Modificar-la no canvia l'array original."]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"Això NO funciona",variant:"bad",children:e.jsx(g,{code:`int[] nums = {1, 2, 3};

// Intent de duplicar cada valor
for (int num : nums) {
    num = num * 2; // Modifica la COPIA, no l'array!
}
// nums segueix sent {1, 2, 3}`})}),e.jsx(U,{title:"Això SÍ funciona",variant:"good",children:e.jsx(g,{code:`int[] nums = {1, 2, 3};

// Amb for tradicional pots modificar
for (int i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * 2; // Modifica l'array!
}
// nums ara es {2, 4, 6}`})})]}),e.jsx(y,{title:"For-each amb col·leccions (ArrayList)"}),e.jsx(m,{variant:"info",children:e.jsxs("p",{children:["El for-each funciona no només amb arrays, sinó també amb qualsevol col·lecció de Java com ",e.jsx("strong",{children:"ArrayList"}),". De fet, és on més brilla perquè l'alternativa amb for tradicional requereix usar ",e.jsx("code",{children:".get(i)"})," i ",e.jsx("code",{children:".size()"}),"."]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"ArrayList amb for tradicional",variant:"blue",children:e.jsx(g,{code:`ArrayList<String> fruites = new ArrayList<>();
fruites.add("Poma");
fruites.add("Platan");
fruites.add("Taronja");

for (int i = 0; i < fruites.size(); i++) {
    System.out.println(fruites.get(i));
}`})}),e.jsx(U,{title:"ArrayList amb for-each",variant:"good",children:e.jsx(g,{code:`ArrayList<String> fruites = new ArrayList<>();
fruites.add("Poma");
fruites.add("Platan");
fruites.add("Taronja");

for (String fruita : fruites) {
    System.out.println(fruita);
}`})})]}),e.jsx(y,{title:"Resum"}),e.jsx(J,{headers:["Característica","for tradicional","for-each"],rows:[{cells:["Accés a l'índex","Sí","No"]},{cells:["Modificar l'array","Sí","No (modifica còpia)"]},{cells:["Recórrer parcialment","Sí","No (sempre recorre tot)"]},{cells:["Recórrer al revés","Sí","No"]},{cells:["Llegibilitat","Correcta","Més neta i curta"]},{cells:["Funciona amb ArrayList","Sí (.get/.size)","Sí (directament)"]}]}),e.jsx(m,{variant:"success",title:"Consell",children:e.jsxs("p",{children:["Domina primer el ",e.jsx("strong",{children:"for tradicional"}),", que és el que trobaràs a la majoria d'exercicis i exàmens. Un cop el tinguis clar, el for-each et serà molt fàcil d'incorporar com a eina complementària."]})})]})}function $C(){return e.jsxs("div",{children:[e.jsx(y,{title:"Operador Ternari: if-else compacte en una línia"}),e.jsxs(m,{variant:"info",children:[e.jsxs("p",{children:["L'operador ternari és una forma ",e.jsx("strong",{children:"compacta"})," d'escriure un if-else senzill en una sola línia. És útil quan vols assignar un valor a una variable en funció d'una condició simple."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Recorda: el ",e.jsx("strong",{children:"if-else tradicional"})," segueix sent la forma estàndard i prioritària. L'operador ternari és un complement per a casos concrets."]})]}),e.jsx(y,{title:"Sintaxi"}),e.jsx(g,{label:"Estructura de l'operador ternari",code:"variable = condicio ? valorSiTrue : valorSiFalse;"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Es llegeix com: ",e.jsx("strong",{children:'"Si la condició és certa, agafa el primer valor; si no, agafa el segon."'})]})}),e.jsxs(T,{title:"Esquema mental",variant:"blue",children:[e.jsx("p",{children:"CONDICIÓ → si TRUE → valor A"}),e.jsx("p",{children:"CONDICIÓ → si FALSE → valor B"})]}),e.jsx(y,{title:"Comparació: if-else vs ternari"}),e.jsxs(oe,{children:[e.jsx(U,{title:"If-else tradicional (5+ línies)",variant:"blue",children:e.jsx(g,{code:`String resultat;

if (nota >= 5) {
    resultat = "Aprovat";
} else {
    resultat = "Suspes";
}`})}),e.jsx(U,{title:"Operador ternari (1 línia)",variant:"good",children:e.jsx(g,{code:'String resultat = (nota >= 5) ? "Aprovat" : "Suspes";'})})]}),e.jsx(m,{variant:"explanation",children:e.jsx("p",{children:"Ambdós codis fan exactament el mateix. La diferència és purament estètica: el ternari és més compacte, però el if-else és més explícit i fàcil de llegir per a qui comença."})}),e.jsx(y,{title:"Casos d'ús pràctics"}),e.jsx(g,{label:"1. Assignar una variable segons una condició",showLineNumbers:!0,code:`int edat = 20;
String tipus = (edat >= 18) ? "Adult" : "Menor";
System.out.println(tipus); // Adult`}),e.jsx(g,{label:"2. Retornar un valor des d'un mètode",showLineNumbers:!0,code:`public static String obtenirSalutacio(boolean esMati) {
    return esMati ? "Bon dia!" : "Bona tarda!";
}`}),e.jsx(g,{label:"3. Directament dins d'un println",showLineNumbers:!0,code:`int puntuacio = 85;
System.out.println("Resultat: " + (puntuacio >= 50 ? "PASSAT" : "FALLAT"));`}),e.jsx(g,{label:"4. Determinar el major de dos números",showLineNumbers:!0,code:`int a = 15, b = 23;
int major = (a > b) ? a : b;
System.out.println("El major es: " + major); // 23`}),e.jsx(g,{label:"5. Paritat d'un número",showLineNumbers:!0,code:`int numero = 7;
String paritat = (numero % 2 == 0) ? "Parell" : "Senar";
System.out.println(numero + " es " + paritat); // 7 es Senar`}),e.jsx(g,{label:"6. Valor absolut (sense Math.abs)",showLineNumbers:!0,code:`int valor = -42;
int absolut = (valor >= 0) ? valor : -valor;
System.out.println("Valor absolut: " + absolut); // 42`}),e.jsx(y,{title:"Ternari aniuat (existeix, però no el recomanem)"}),e.jsx(m,{variant:"warning",title:"Evita els ternaris aniuats",children:e.jsxs("p",{children:["Tècnicament és possible encadenar ternaris, però el resultat és un codi molt difícil de llegir i mantenir. ",e.jsx("strong",{children:"No ho recomanem."})]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"Ternari aniuat (difícil de llegir)",variant:"bad",children:e.jsx(g,{code:`// NO recomanat!
String categoria = (edat < 12) ? "Nen"
    : (edat < 18) ? "Adolescent"
    : (edat < 65) ? "Adult"
    : "Jubilat";`})}),e.jsx(U,{title:"If-else (molt més clar)",variant:"good",children:e.jsx(g,{code:`String categoria;

if (edat < 12) {
    categoria = "Nen";
} else if (edat < 18) {
    categoria = "Adolescent";
} else if (edat < 65) {
    categoria = "Adult";
} else {
    categoria = "Jubilat";
}`})})]}),e.jsx(y,{title:"Quan utilitzar i quan NO"}),e.jsxs(me,{children:[e.jsx(T,{title:"Utilitza l'operador ternari quan...",variant:"green",children:e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsx("li",{children:"La decisió és simple: una condició, dos valors possibles"}),e.jsx("li",{children:"Vols assignar un valor a una variable en una sola línia"}),e.jsx("li",{children:"Vols retornar un valor senzill des d'un mètode"}),e.jsx("li",{children:"El codi resultant segueix sent fàcil de llegir"})]})}),e.jsx(T,{title:"NO utilitzis l'operador ternari quan...",variant:"pink",children:e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsx("li",{children:"La lògica és complexa o té múltiples condicions"}),e.jsx("li",{children:"Necessites executar varies instruccions (no només retornar un valor)"}),e.jsx("li",{children:"Voldries aniuar ternaris dins d'altres ternaris"}),e.jsx("li",{children:"El codi es fa difícil d'entendre a primera vista"})]})})]}),e.jsx(y,{title:"Resum"}),e.jsx(J,{headers:["Característica","if-else","Operador ternari"],rows:[{cells:["Línies de codi","5+ línies","1 línia"]},{cells:["Llegibilitat","Molt clara","Clara si és simple"]},{cells:["Múltiples instruccions","Sí","No (només retorna un valor)"]},{cells:["Condicions complexes","Sí","No recomanat"]},{cells:["Aniuament","Fàcil de llegir","Molt confús"]},{cells:["Ús principal","Qualsevol decisió","Assignacions simples"]}]}),e.jsx(m,{variant:"success",title:"Consell",children:e.jsxs("p",{children:["Pensa en l'operador ternari com un ",e.jsx("strong",{children:"atall"}),": si el caminet curt és clar i segur, pren-lo. Si és fosc i ple de revolts (condicions complexes), millor el camí principal (if-else)."]})})]})}function VC(){return e.jsxs("div",{children:[e.jsx(y,{title:"var i altres funcionalitats modernes de Java"}),e.jsxs(m,{variant:"info",children:[e.jsxs("p",{children:["Java ha anat evolucionant amb noves versions que incorporen sintaxis més modernes i compactes. Aquí veurem algunes de les més útils: ",e.jsx("strong",{children:"var"}),","," ",e.jsx("strong",{children:"text blocks"}),", ",e.jsx("strong",{children:"switch expressions"})," i"," ",e.jsx("strong",{children:"records"}),"."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Totes aquestes funcionalitats són ",e.jsx("strong",{children:"complements"})," a la sintaxi tradicional, que segueix sent la prioritat a nivell acadèmic."]})]}),e.jsx(m,{variant:"warning",title:"Important per a estudiants de DAM",children:e.jsxs("p",{children:["Aquestes funcionalitats són ",e.jsx("strong",{children:'"nice to know"'})," (bo de saber). A nivell de DAM, centra't primer en la sintaxi tradicional que és la que apareixerà als exàmens i exercicis. Coneix-les per si les trobes en codi real o tutorials moderns."]})}),e.jsx(y,{title:"var: inferència de tipus local (Java 10+)"}),e.jsx(m,{variant:"info",children:e.jsxs("p",{children:["La paraula clau ",e.jsx("strong",{children:"var"})," permet declarar variables locals sense especificar explícitament el tipus. El compilador ",e.jsx("strong",{children:"dedueix"})," el tipus automàticament a partir del valor assignat."]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"Forma tradicional (tipus explícit)",variant:"blue",children:e.jsx(g,{code:`String nom = "Hola";
int edat = 25;
double preu = 19.99;
ArrayList<String> llista = new ArrayList<>();`})}),e.jsx(U,{title:"Amb var (tipus inferit)",variant:"good",children:e.jsx(g,{code:`var nom = "Hola";        // String
var edat = 25;           // int
var preu = 19.99;        // double
var llista = new ArrayList<String>();`})})]}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["En ambdós casos, el tipus és ",e.jsx("strong",{children:"exactament el mateix"}),". L'única diferència és que amb ",e.jsx("code",{children:"var"})," no l'escrius tu, el compilador el dedueix. Un cop assignat, el tipus queda fixat."]})}),e.jsx(m,{variant:"error",title:"var NO fa que Java sigui dinàmic!",children:e.jsxs("p",{children:["A diferència de Python o JavaScript, ",e.jsx("code",{children:"var"})," ",e.jsx("strong",{children:"no"})," converteix Java en un llenguatge de tipat dinàmic. El tipus es determina en temps de compilació i no pot canviar després."]})}),e.jsx(g,{label:"Això dona ERROR de compilació",code:`var x = 10;       // x es int
x = "hola";       // ERROR! No pots assignar String a un int`}),e.jsx(y,{title:"On es pot i on NO es pot usar var"}),e.jsxs(me,{children:[e.jsxs(T,{title:"SÍ es pot usar",variant:"green",children:[e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsx("li",{children:"Variables locals dins d'un mètode"}),e.jsx("li",{children:"Variables dins de bucles for"}),e.jsx("li",{children:"Variables dins de blocs try-with-resources"})]}),e.jsx(g,{code:`// Dins d'un metode
var resultat = calcular();

// Dins d'un for
for (var i = 0; i < 10; i++) { }

// Dins d'un for-each
for (var nom : llistaNoms) { }`})]}),e.jsxs(T,{title:"NO es pot usar",variant:"pink",children:[e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsx("li",{children:"Atributs de classe (camps/fields)"}),e.jsx("li",{children:"Paràmetres de mètodes"}),e.jsx("li",{children:"Tipus de retorn de mètodes"}),e.jsx("li",{children:"Sense valor inicial (el compilador no pot deduir)"})]}),e.jsx(g,{code:`// ERROR: camp de classe
class Persona {
    var nom = "Anna"; // NO COMPILA
}

// ERROR: parametre
public void saludar(var nom) { } // NO

// ERROR: retorn
public var getEdat() { } // NO

// ERROR: sense inicialitzar
var x; // NO COMPILA (quin tipus es?)`})]})]}),e.jsx(J,{headers:["Situació","Es pot usar var?"],rows:[{cells:["Variable local amb assignació","Sí"]},{cells:["Variable en bucle for/for-each","Sí"]},{cells:["Atribut de classe","No"]},{cells:["Paràmetre de mètode","No"]},{cells:["Tipus de retorn","No"]},{cells:["Sense valor inicial","No"]}]}),e.jsx(y,{title:"Quan usar var i quan no"}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Bon ús de var",variant:"good",children:[e.jsx("p",{children:"Quan el tipus és obvi pel context:"}),e.jsx(g,{code:`// El tipus es evident
var scanner = new Scanner(System.in);
var noms = new ArrayList<String>();
var resultat = "Aprovat";`})]}),e.jsxs(U,{title:"Mal ús de var",variant:"bad",children:[e.jsx("p",{children:"Quan el tipus no és clar i var confon:"}),e.jsx(g,{code:`// Quin tipus retorna? No es clar!
var dades = obtenirDades();
var resultat = processar(x, y);
var config = inicialitzar();`})]})]}),e.jsx(y,{title:"Text blocks: strings multilínia (Java 13+)"}),e.jsx(m,{variant:"info",children:e.jsxs("p",{children:["Els ",e.jsx("strong",{children:"text blocks"})," permeten escriure cadenes de text de múltiples línies sense haver de concatenar ni usar ",e.jsx("code",{children:"\\n"}),". S'utilitzen tres cometes dobles ",e.jsx("code",{children:'"""'})," per obrir i tancar."]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"Forma tradicional",variant:"blue",children:e.jsx(g,{code:`String json = "{\\n" +
    "  \\"nom\\": \\"Anna\\",\\n" +
    "  \\"edat\\": 25\\n" +
    "}";`})}),e.jsx(U,{title:"Amb text blocks",variant:"good",children:e.jsx(g,{code:`String json = """
    {
      "nom": "Anna",
      "edat": 25
    }
    """;`})})]}),e.jsx(g,{label:"Molt útil per a SQL, HTML, JSON...",showLineNumbers:!0,code:`// Consulta SQL multilinia
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
System.out.println(menu);`}),e.jsx(y,{title:"Switch expressions: switch que retorna valor (Java 14+)"}),e.jsx(m,{variant:"info",children:e.jsxs("p",{children:["Les ",e.jsx("strong",{children:"switch expressions"})," són una versió millorada del switch que pot retornar un valor directament, utilitza fletxes (",e.jsx("code",{children:"->"}),") en comptes de ",e.jsx("code",{children:"case/break"}),", i és més compacte."]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"Switch tradicional",variant:"blue",children:e.jsx(g,{code:`String nomDia;
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
}`})}),e.jsx(U,{title:"Switch expression",variant:"good",children:e.jsx(g,{code:`String nomDia = switch (dia) {
    case 1 -> "Dilluns";
    case 2 -> "Dimarts";
    case 3 -> "Dimecres";
    default -> "Desconegut";
};`})})]}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Avantatges del switch expression: no necessita ",e.jsx("code",{children:"break"})," (no hi ha fall-through accidental), pot retornar valors directament, i permet agrupar casos fàcilment."]})}),e.jsx(g,{label:"Agrupar múltiples casos",code:`String tipusDia = switch (dia) {
    case 1, 2, 3, 4, 5 -> "Laborable";
    case 6, 7           -> "Cap de setmana";
    default             -> "Invalid";
};`}),e.jsx(y,{title:"Records: classes de dades simplificades (Java 16+)"}),e.jsx(m,{variant:"info",children:e.jsxs("p",{children:["Els ",e.jsx("strong",{children:"records"})," són una forma molt compacta de crear classes que només serveixen per guardar dades (com un DTO). Java genera automàticament el constructor, getters, ",e.jsx("code",{children:"equals()"}),", ",e.jsx("code",{children:"hashCode()"})," i"," ",e.jsx("code",{children:"toString()"}),"."]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"Classe tradicional",variant:"blue",children:e.jsx(g,{code:`public class Punt {
    private final int x;
    private final int y;

    public Punt(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() { return x; }
    public int getY() { return y; }

    // + equals, hashCode, toString...
}`})}),e.jsx(U,{title:"Amb record",variant:"good",children:e.jsx(g,{code:`public record Punt(int x, int y) { }

// Ja inclou constructor, getters,
// equals, hashCode i toString!

// Us:
var p = new Punt(3, 5);
System.out.println(p.x()); // 3
System.out.println(p);     // Punt[x=3, y=5]`})})]}),e.jsx(m,{variant:"warning",title:"Limitacions dels records",children:e.jsxs("p",{children:["Els records són ",e.jsx("strong",{children:"immutables"})," (no tenen setters), no poden heretar d'altres classes, i els seus camps són finals. Són ideals per a dades simples, però no substitueixen les classes normals amb lògica complexa."]})}),e.jsx(y,{title:"Resum de funcionalitats modernes"}),e.jsx(J,{headers:["Funcionalitat","Versió de Java","Per a què serveix","Prioritat a DAM"],rows:[{cells:["var","Java 10+","Inferència de tipus en variables locals","Útil però no essencial"]},{cells:['Text blocks (""")',"Java 13+","Strings multilínia sense \\n","Bo de saber"]},{cells:["Switch expressions","Java 14+","Switch que retorna valor, sense break","Bo de saber"]},{cells:["Records","Java 16+","Classes de dades compactes","Avançat, bo de saber"]}]}),e.jsx(m,{variant:"success",title:"Consell final",children:e.jsxs("p",{children:["Totes aquestes funcionalitats fan el codi més curt i modern, però la base de Java ",e.jsx("strong",{children:"segueix sent la mateixa"}),". Aprendre la sintaxi tradicional primer et garanteix entendre qualsevol codi Java, sigui antic o modern. Aquestes eines modernes les aniràs incorporant naturalment a mesura que guanyis experiència."]})})]})}function QC(){return e.jsxs("div",{children:[e.jsx(y,{title:"Com es pica codi en equip"}),e.jsxs(m,{variant:"info",title:"Que veurem aqui?",children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"Anatomia d'un Projecte Real"})," heu vist COM es dissenya i estructura un projecte des de zero. Aqui veurem la part que falta:",e.jsx("strong",{children:" com es treballa dia a dia amb aquest codi"}),". Com fas servir Git quan sou 5 persones tocant el mateix projecte. Que passa quan obres un fitxer que no has escrit tu. Com trobes i arregles un bug. Com evites que el projecte es converteixi en un caos."]}),e.jsx("p",{style:{marginTop:"8px"},children:"Res de teoria abstracta: tot son situacions reals que viureu des del primer dia de feina."})]}),e.jsx(y,{title:"El teu primer dia: clonar i entendre el projecte"}),e.jsx(m,{variant:"explanation",title:"Arribes a una empresa, t'assignen un projecte. Ara que?",children:e.jsxs("p",{children:["Quan arribes a un equip, el projecte ja existeix. Pot tenir ",e.jsx("strong",{children:"milers de fitxers"})," ","escrits durant mesos o anys per persones que potser ja no hi treballen. El teu primer objectiu no es programar: es ",e.jsx("strong",{children:"entendre que hi ha"}),"."]})}),e.jsx(g,{label:"Pas 1: Clonar el projecte i fer-lo funcionar",showLineNumbers:!0,code:`# El teu company et passa el link del repositori
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
# NO perdis 4 hores intentant arreglar-ho sol el primer dia.`}),e.jsx(m,{variant:"info",title:"Que mires primer per entendre el projecte?",children:e.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"README.md"})," — Que fa l'aplicacio i com executar-la."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"L'estructura de carpetes"})," — Quins packages hi ha (model, service, controller...)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"El model/"})," — Les classes de dades et diuen de que VA l'aplicacio. Si veus ",e.jsx("code",{children:"Reserva.java"}),", ",e.jsx("code",{children:"Taula.java"}),", ",e.jsx("code",{children:"Client.java"}),"... ja saps que es un sistema de reserves."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Els tests"})," — Llegir els tests es la millor forma d'entendre que fa cada classe, perque mostren exemples reals d'us."]})]})}),e.jsx(y,{title:"Git en equip: el flux que seguiras cada dia"}),e.jsx(m,{variant:"explanation",title:"Per que branques?",children:e.jsxs("p",{children:[`Imagina que tu estas fent la funcionalitat de "crear reserves" i un company esta fent "gestionar el menu". Si els dos toqueu el mateix fitxer a la mateixa branca, quan un faci push, l'altre tindra conflictes. Les `,e.jsx("strong",{children:"branques"})," ","solucionen aixo: cada persona treballa en una copia independent del codi, i nomes es fusiona quan esta acabat i revisat."]})}),e.jsx(g,{label:"El cicle complet que repetiras amb cada tasca",showLineNumbers:!0,code:`# ──────────────────────────────────────────
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
# ...i repetir`}),e.jsx(m,{variant:"warning",title:"Errors tipics dels juniors amb Git",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Fer un sol commit gegant amb tots els canvis al final."})," Mal. Si alguna cosa va malament, no pots desfer nomes una part. Commits petits = control fi."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Treballar directament a ",e.jsx("code",{children:"main"})," o ",e.jsx("code",{children:"develop"}),"."]})," Mal. Si la lies, afectes a tothom. Sempre branca propia."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["No fer ",e.jsx("code",{children:"git pull"})," abans de crear una branca."]})," Mal. Estaras treballant sobre codi antic i tindras conflictes segur."]}),e.jsxs("li",{children:[e.jsx("strong",{children:'Commits amb missatges com "coses", "fix", "asd".'})," Mal. D'aqui 3 mesos ningu (ni tu) sabra que fan."]})]})}),e.jsx(y,{title:"Convencions de commits: tots parlem el mateix idioma"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["La majoria d'equips segueixen ",e.jsx("strong",{children:"Conventional Commits"}),": cada missatge comenca amb un prefix que indica el TIPUS de canvi. Aixi, llegint l'historial, saps immediatament que ha passat:"]})}),e.jsx(J,{headers:["Prefix","Quan s'usa","Exemple"],rows:[{cells:["feat:","Has afegit una funcionalitat nova","feat: afegir formulari de reserva"]},{cells:["fix:","Has corregit un bug","fix: corregir calcul del preu quan quantitat es 0"]},{cells:["test:","Has afegit o modificat tests","test: afegir tests per ServeiMenu"]},{cells:["refactor:","Has reorganitzat codi SENSE canviar el que fa","refactor: extreure metode privat buscarTaulaDisponible()"]},{cells:["docs:","Has tocat documentacio","docs: afegir instruccions d'instalacio al README"]},{cells:["chore:","Manteniment (dependencies, configuracio)","chore: actualitzar Spring Boot a 3.2"]}]}),e.jsx(g,{label:"Historial real d'un projecte (git log)",code:`a3f2c1d  feat: implementar cancelacio de reserves        (Marc, fa 2 hores)
b7e4a9f  test: afegir tests per cancelar()               (Marc, fa 2 hores)
c1d8f3e  fix: corregir NPE quan client no te email       (Anna, fa 5 hores)
d4a7b2c  feat: afegir endpoint GET /api/reserves          (Anna, fa 1 dia)
e8c3d6f  refactor: moure validacio al service             (Pau, fa 1 dia)
f2b5a9d  feat: crear classes model (Taula, Reserva...)    (Marc, fa 3 dies)

# Amb un cop d'ull saps QUI ha fet QUE i QUAN.
# Sense prefixos, seria: "coses", "fix", "mas cosas", "ok ya va"... un desastre.`}),e.jsx(y,{title:"Code Review: com es revisa codi de veritat"}),e.jsx(m,{variant:"explanation",title:"Per que ningu fusiona sense que un altre ho miri?",children:e.jsxs("p",{children:["Perque ",e.jsx("strong",{children:"tothom comet errors"}),`. Fins i tot els seniors. Un segon parell d'ulls detecta bugs, incoherencies i codi confus que l'autor no veu perque esta "massa a dins" del problema. A mes, la revisio fa que `,e.jsx("strong",{children:"tot l'equip conegui tot el codi"}),", no nomes la part que ha escrit cadascú."]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Comentari util",variant:"good",children:[e.jsx("p",{style:{marginTop:"8px",fontFamily:"monospace",fontSize:"0.85rem"},children:"Linia 42 de ServeiReserves.java:"}),e.jsxs("p",{style:{marginTop:"4px",fontFamily:"monospace",fontSize:"0.85rem"},children:['"Si ',e.jsx("code",{children:"persones"})," es 0 o negatiu, ",e.jsx("code",{children:"buscarTaulaDisponible()"})," ","retornara null i llançara RuntimeException amb un missatge confus. Millor validar al principi del metode amb un"," ",e.jsx("code",{children:"if (persones <= 0) throw new IllegalArgumentException(...)"}),'"']}),e.jsx("p",{style:{marginTop:"8px",fontSize:"0.85rem"},children:"Explica el problema, per que es un problema, i suggereix la solucio."})]}),e.jsxs(U,{title:"Comentari inutil",variant:"bad",children:[e.jsx("p",{style:{marginTop:"8px",fontFamily:"monospace",fontSize:"0.85rem"},children:'"Aixo esta malament."'}),e.jsx("p",{style:{marginTop:"12px",fontFamily:"monospace",fontSize:"0.85rem"},children:'"Jo ho faria diferent."'}),e.jsx("p",{style:{marginTop:"12px",fontSize:"0.85rem"},children:"No diu que esta malament, ni per que, ni com arreglar-ho."})]})]}),e.jsx(m,{variant:"info",title:"Que mira un revisor?",children:e.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Funciona?"})," El codi fa el que diu que fa? Hi ha casos que no contempla (null, llistes buides, numeros negatius)?"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Te tests?"})," Si has afegit un metode nou, on esta el test que el prova?"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"S'enten?"})," Si el revisor ha de llegir el metode 3 cops per entendre'l, es massa complicat. Cal simplificar o afegir un comentari."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Segueix les convencions?"})," Noms de variables, estructura de packages, estil de codi... l'equip te unes normes i tothom les segueix."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No trenca res existent?"})," Si has tocat un metode que altres parts del codi utilitzen, has comprovat que segueix funcionant?"]})]})}),e.jsx(m,{variant:"warning",title:"Consell important",children:e.jsxs("p",{children:["Quan et deixin 15 comentaris a la teva PR, ",e.jsx("strong",{children:"no ho agafis com un atac"}),". T'estan ajudant a millorar. Els millors devs son els que reben feedback, l'apliquen i aprenen. Si despres d'un mes les teves PRs tenen menys comentaris, vol dir que estas creixent."]})}),e.jsx(y,{title:"Debugging: com es troben i arreglen bugs"}),e.jsx(m,{variant:"explanation",title:"El 50% del temps d'un dev es debugging",children:e.jsxs("p",{children:["No exagero. Molta de la feina diaria es: alguna cosa no funciona, descobrir ",e.jsx("strong",{children:"per que"})," no funciona, i arreglar-ho. El proces es sempre el mateix:"]})}),e.jsx(J,{headers:["Pas","Que fas","Eines"],rows:[{cells:["1. Reproduir","Primer de tot: aconseguir que el bug passi al TEU ordinador. Si no el pots veure, no el pots arreglar. Segueix els passos exactes que descriuen el bug.","L'app executant-se localment"]},{cells:["2. Llegir l'error","EL 90% DELS ERRORS US DIUEN EXACTAMENT QUE PASSA. Llegiu el missatge sencer. Busqueu el nom del fitxer i el numero de linia. Aneu directament alli.","Consola, logs del servidor"]},{cells:["3. Aillar","Reduir el problema al minim. Si falla al fer una reserva, prova nomes la part del servei. Si el servei funciona, el problema es al controller. Divideix i venceras.","Tests unitaris, breakpoints"]},{cells:["4. Entendre",`ABANS d'arreglar, entendre PER QUE falla. Si nomes canvies codi fins que "funciona" sense entendre per que, probablement estas creant un bug nou.`,"Debugger de l'IDE, println temporal"]},{cells:["5. Arreglar + test","Primer escriu un test que REPRODUEIXI el bug (el test ha de fallar). Despres arregla el codi. El test ara ha de passar. Aixi el bug no tornara mai mes.","JUnit, l'IDE"]}]}),e.jsx(g,{label:"Exemple real: trobar i arreglar un bug",showLineNumbers:!0,code:`// BUG REPORTAT: "Quan un client fa una reserva per a 4 persones,
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
// "fix: usar potAcollir() per validar capacitat en buscar taula"`}),e.jsx(m,{variant:"info",title:"L'eina mes potent: el debugger de l'IDE",children:e.jsxs("p",{children:["IntelliJ i VS Code permeten posar ",e.jsx("strong",{children:"breakpoints"})," (punts de parada) al codi. Quan l'execucio arriba alli, s'atura i pots veure el valor de TOTES les variables en aquell moment. Es com congelar el temps i mirar per dins del programa. ",e.jsx("strong",{children:"Apreneu a usar-lo"}),": us estalviara hores."]})}),e.jsx(y,{title:"Llegir codi que no has escrit tu"}),e.jsx(m,{variant:"explanation",title:"La habilitat mes infravalorada",children:e.jsxs("p",{children:["A classe escriviu codi des de zero. A la feina, el 80% del temps llegireu codi que han escrit ALTRES PERSONES, fa mesos o anys. Codi que no te comentaris, que usa patrons que no coneixeu, amb noms de variables que no enteneu. I heu de ",e.jsx("strong",{children:"modificar-lo sense trencar res"}),". Aixo es la realitat."]})}),e.jsx(J,{headers:["Estrategia","Com funciona"],rows:[{cells:["1. Comenca pel test",'Si la classe te tests, llegeix-los PRIMER. Un test diu: "si creo una Taula amb capacitat 4 i faig potAcollir(3), retorna true". Millor que qualsevol documentacio.']},{cells:["2. Busca el punt d'entrada","Si has de tocar un servei, busca QUINES classes el criden. Aixo et diu en quin context s'utilitza. A IntelliJ: Ctrl+Click sobre el nom del metode per veure on s'usa."]},{cells:["3. Segueix el flux d'una peticio","Agafa una accio concreta (ex: crear reserva) i segueix-la des del Controller fins a la BD. Controller → Service → Repository. Aixi entens com flueix la informacio."]},{cells:["4. git blame: qui va escriure aixo?",'La comanda "git blame fitxer.java" et mostra qui va escriure cada linia i en quin commit. Si no entens alguna cosa, saps a qui preguntar.']},{cells:["5. NO canvïis codi que no entens","Si no entens per que una linia existeix, NO la borris. Potser sembla innecessaria pero cobreix un cas que no estàs veient. Pregunta primer."]}]}),e.jsx(g,{label:"git blame: saber qui va escriure cada linia",code:`$ git blame src/service/ServeiReserves.java

a3f2c1d (Marc    2026-01-15)  public Reserva ferReserva(Client client, Date data, int persones) {
a3f2c1d (Marc    2026-01-15)      Taula taula = buscarTaulaDisponible(data, persones);
c1d8f3e (Anna    2026-02-03)      if (taula == null) {
c1d8f3e (Anna    2026-02-03)          throw new RuntimeException("No hi ha taules disponibles");
c1d8f3e (Anna    2026-02-03)      }
a3f2c1d (Marc    2026-01-15)      Reserva reserva = new Reserva(client, taula, data, persones);
e8c3d6f (Pau     2026-02-10)      taula.ocupar();  // Afegit perque hi havia un bug de doble reserva

# Veus que la linia de taula.ocupar() la va afegir Pau el 10 de febrer.
# Si no entens per que, pots preguntar-li directament o mirar el commit e8c3d6f.`}),e.jsx(y,{title:"Manteniment: el codi creix i s'ha de cuidar"}),e.jsx(m,{variant:"explanation",title:"El codi es com un jardi",children:e.jsxs("p",{children:["Si ningu el cuida, creix descontrolat. Les males herbes (codi duplicat, funcions massa llargues, noms confusos) s'acumulen poc a poc fins que el projecte es inmantenible. Per aixo existeix el ",e.jsx("strong",{children:"refactoring"}),": canviar l'estructura del codi ",e.jsx("strong",{children:"sense canviar el que fa"})," per mantenir-lo net."]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"Codi que necessita refactoring",variant:"bad",children:e.jsx(g,{code:`// Metode de 80 linies que fa 5 coses
public void processarComanda(int taulaNum,
    String[] plats, int[] quantitats) {
  // Buscar taula... (20 linies)
  // Validar que els plats existeixen... (15 linies)
  // Calcular preu... (15 linies)
  // Guardar a BD... (15 linies)
  // Enviar confirmacio... (15 linies)
}`})}),e.jsx(U,{title:"Despres del refactoring",variant:"good",children:e.jsx(g,{code:`// Cada pas es un metode clar
public Comanda processarComanda(int taulaNum,
    String[] plats, int[] quantitats) {
  Taula taula = buscarTaula(taulaNum);
  List<Plat> platsValidats = validarPlats(plats);
  Comanda comanda = crearComanda(taula,
      platsValidats, quantitats);
  comandaRepo.save(comanda);
  return comanda;
}`})})]}),e.jsx(m,{variant:"info",title:"Quan es fa refactoring?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Quan toques codi existent"}),": si has de modificar un metode i es un embolic, primer el neteges, despres el modifiques."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Quan un metode fa mes d'una cosa"}),`: si necessites un comentari que diu "// ara fem X" enmig d'un metode, probablement X hauria de ser un metode separat.`]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Quan copies i enganxes codi"}),": si la mateixa logica apareix a 3 llocs, crea un metode i crida'l des dels 3 llocs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Regla del Boy Scout"}),`: "Deixa el codi mes net del que l'has trobat". Cada cop que toques un fitxer, millora'l una mica.`]})]})}),e.jsx(m,{variant:"warning",title:"Refactoring NOMES amb tests verds",children:e.jsxs("p",{children:["Mai refactoritzis codi que no te tests. Com sabras que no has trencat res? El proces es: ",e.jsx("strong",{children:"1)"})," comprova que els tests passen,",e.jsx("strong",{children:" 2)"})," refactoritza, ",e.jsx("strong",{children:"3)"})," torna a executar els tests. Si segueixen passant, el refactoring es correcte."]})}),e.jsx(y,{title:"Conflictes de Git: quan dos toquen el mateix"}),e.jsx(m,{variant:"explanation",title:"Els conflictes son normals, no son un error",children:e.jsxs("p",{children:["Si tu modifiques la linia 42 de ",e.jsx("code",{children:"ServeiReserves.java"})," a la teva branca, i un company modifica la ",e.jsx("strong",{children:"mateixa linia 42"})," a la seva branca i fusiona primer, quan tu intentis fusionar la teva, Git no sabra ",e.jsx("strong",{children:"quina versio es la bona"}),". Aixo es un ",e.jsx("strong",{children:"conflicte"}),". Passa constantment i es resol manualment."]})}),e.jsx(g,{label:"Com es veu un conflicte i com es resol",showLineNumbers:!0,code:`# Intentes fusionar la teva branca i Git et diu:
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
git commit -m "fix: resoldre conflicte en ServeiReserves"`}),e.jsxs(me,{children:[e.jsx(T,{title:"Evitar conflictes",variant:"blue",children:e.jsxs("ul",{style:{paddingLeft:"16px",marginTop:"4px"},children:[e.jsxs("li",{children:["Fer ",e.jsx("code",{children:"git pull"})," sovint per estar actualitzat"]}),e.jsx("li",{children:"Branques curtes (2-3 dies, no 2 setmanes)"}),e.jsx("li",{children:"Comunicar a l'equip quins fitxers toques"})]})}),e.jsx(T,{title:"Resoldre conflictes",variant:"yellow",children:e.jsxs("ul",{style:{paddingLeft:"16px",marginTop:"4px"},children:[e.jsx("li",{children:"Llegir les DUES versions amb calma"}),e.jsx("li",{children:"Entendre QUE volia fer cadascú"}),e.jsx("li",{children:"Si dubtes, parla amb el company"}),e.jsx("li",{children:"Executar tests despres de resoldre"})]})})]}),e.jsx(y,{title:"Del teu ordinador al servidor: entorns i desplegament"}),e.jsx(m,{variant:"explanation",title:"El codi passa per varies etapes abans d'arribar als usuaris",children:e.jsx("p",{children:"No es programa directament sobre el servidor que fan servir els clients. Hi ha etapes intermitges per assegurar que tot funciona:"})}),e.jsx(g,{label:"El viatge del codi",code:`El teu ordinador (LOCAL)
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
    MAI es toca directament. Tot arriba a traves de la pipeline.`}),e.jsx(m,{variant:"warning",title:"La regla sagrada",children:e.jsxs("p",{children:[e.jsx("strong",{children:"MAI es prova res directament a produccio."}),` Si un dev intenta "provar una coseta rapida" al servidor real i alguna cosa va malament, pot afectar milers d'usuaris. Per aixo existeix staging.`]})}),e.jsx(y,{title:"Coses que aprendras a la feina, no a classe"}),e.jsxs(me,{children:[e.jsx(T,{title:"Llegiràs mes codi que escriuràs",variant:"blue",children:e.jsx("p",{children:"En un projecte gran, el 80% del codi ja existeix. La teva feina es entendre'l i afegir-hi. Si un metode te 200 linies i nomes has de canviar 3, primer has d'entendre les 200."})}),e.jsx(T,{title:"La regla dels 30 minuts",variant:"yellow",children:e.jsxs("p",{children:["Si portes 30 minuts encallat amb el mateix error, ",e.jsx("strong",{children:"pregunta"}),`. Pero abans de preguntar: llegeix l'error, busca a Google, mira la documentacio. Despres pregunta amb context: "He provat X i Y, em dona Z. Alguna idea?"`]})}),e.jsx(T,{title:"El codi perfecte no existeix",variant:"green",children:e.jsxs("p",{children:["Hi ha codi que funciona, es llegible i te tests. Aixo es",e.jsx("strong",{children:" codi suficientment bo"}),". Buscar la perfeccio es una trampa: et bloqueja i no acabes res. Primer fes que funcioni, despres millora'l si cal."]})}),e.jsx(T,{title:"Les eines que has de dominar",variant:"pink",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Git"})," (de veritat, no nomes push/pull), el ",e.jsx("strong",{children:"debugger"})," de l'IDE,",e.jsx("strong",{children:" Ctrl+Click"})," per navegar pel codi,",e.jsx("strong",{children:" Ctrl+Shift+F"})," per buscar a tot el projecte. Dominar les eines multiplica la teva velocitat per 5."]})})]}),e.jsxs(m,{variant:"success",title:"Resum: el dia a dia picant codi",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"1."})," Fas ",e.jsx("code",{children:"git pull"})," per actualitzar-te."," ",e.jsx("strong",{children:"2."})," Crees una branca per la teva tasca."," ",e.jsx("strong",{children:"3."})," Programes i fas commits petits i clars."," ",e.jsx("strong",{children:"4."})," Obres una Pull Request."," ",e.jsx("strong",{children:"5."})," Un company revisa el teu codi i et dona feedback."," ",e.jsx("strong",{children:"6."})," Arregles el que calgui, es fusiona."," ",e.jsx("strong",{children:"7."})," La pipeline executa tests i desplega."," ",e.jsx("strong",{children:"8."})," Repeteixes amb la propera tasca."]}),e.jsxs("p",{style:{marginTop:"12px"},children:["Entremig: llegiràs codi d'altres, faras debugging, resoldras conflictes de Git, refactoritzaras codi vell, i aprendras cada dia. Tot el que heu apres (classes, funcions, encapsulacio, packages) son les eines que fareu servir per fer tot aixo. Ara ja sabeu ",e.jsx("strong",{children:"com s'utilitzen de veritat"}),"."]})]})]})}const JC=`// Fins ara: aplicacio de CONSOLA
// L'usuari interactua per terminal
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Escriu el teu nom:");
        String nom = sc.nextLine();
        System.out.println("Hola, " + nom + "!");
    }
}
// Nomes funciona al terminal. Nomes 1 usuari alhora.
// No te interficie grafica. No es pot compartir.`,WC=`// AMB SPRING BOOT: aplicacio WEB
// L'usuari interactua pel NAVEGADOR (Chrome, Firefox...)
@Controller
public class HolaController {

    @GetMapping("/hola")
    public String hola(Model model) {
        model.addAttribute("nom", "Mundo");
        return "hola";    // Retorna una pagina HTML
    }
}
// Funciona al navegador. Multiples usuaris alhora.
// Te interficie grafica (HTML/CSS). Es pot compartir.`,KC=`// Que passa quan escrius "localhost:8080/hola" al navegador?

// 1. El navegador ENVIA una PETICIO (Request) al servidor:
//    GET /hola HTTP/1.1
//    Host: localhost:8080

// 2. Spring Boot REP la peticio i busca quin metode
//    te @GetMapping("/hola")

// 3. El metode s'executa i retorna una pagina HTML

// 4. El navegador REP la RESPOSTA (Response) i la MOSTRA`,YC=`// MVC a CONSOLA (el que ja sabeu):
// View = Menu.java (System.out + Scanner)
// Controller = Clinica.java (logica)
// Model = Animal.java, Gos.java... (dades)

// El Menu mostra text per consola
System.out.println("1. Veure animals");
System.out.println("2. Afegir animal");`,XC=`// MVC a SPRING BOOT (el que aprendreu):
// View = hola.html (pagina HTML amb Thymeleaf)
// Controller = HolaController.java (@Controller)
// Model = Animal.java, Gos.java... (les MATEIXES classes!)

// El Controller retorna una pagina HTML
@GetMapping("/animals")
public String veure(Model model) {
    model.addAttribute("animals", clinica.getPacients());
    return "animals";  // -> animals.html
}`,ZC=`el-meu-projecte/
├── src/main/java/com/exemple/demo/
│   ├── DemoApplication.java          <- Punt d'entrada (el "Main")
│   ├── controller/
│   │   └── HolaController.java       <- Rep les peticions del navegador
│   └── model/
│       └── Animal.java               <- Les classes de sempre
├── src/main/resources/
│   ├── templates/
│   │   └── hola.html                 <- Les pagines HTML (la Vista)
│   ├── static/
│   │   └── css/style.css             <- Estils CSS
│   └── application.properties        <- Configuracio
└── pom.xml                           <- Dependencies (com un "package.json")`,ew=`// Que necessites instal·lat:

// 1. JDK 21 (el que useu habitualment!)
//    Comprova: java --version

// 2. Un IDE (qualsevol dels dos que ja useu):
//    - IntelliJ IDEA (Community Edition, gratuit)
//    - Visual Studio Code amb les extensions:
//        * Extension Pack for Java
//        * Spring Boot Extension Pack

// 3. Res mes! Spring Boot inclou el servidor web.
//    No cal instal·lar Apache, Tomcat, ni res.`;function tw(){return e.jsxs("div",{children:[e.jsx(y,{title:"Què és Spring Boot?"}),e.jsx(m,{variant:"info",title:"Primer de tot: què és una aplicació web?",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Fins ara, totes les vostres aplicacions funcionaven a la ",e.jsx("strong",{children:"consola"})," (terminal). L'usuari escriu text, el programa respon amb text. Funciona, però ningú usa aplicacions de consola al món real."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Una ",e.jsx("strong",{children:"aplicació web"})," (webapp) és un programa que funciona al",e.jsx("strong",{children:" navegador"})," (Chrome, Firefox, Edge...). L'usuari veu pàgines HTML amb botons, formularis i estils. És el que useu cada dia: Instagram, YouTube, Google, Amazon... tot són aplicacions web."]})]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"Aplicació de Consola (fins ara)",variant:"bad",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Funciona al ",e.jsx("strong",{children:"terminal"})]}),e.jsx("li",{children:"Interacció amb text (System.out + Scanner)"}),e.jsx("li",{children:"Només 1 usuari alhora"}),e.jsx("li",{children:"No es pot compartir fàcilment"}),e.jsx("li",{children:"No té interfície gràfica"})]})}),e.jsx(U,{title:"Aplicació Web (Spring Boot)",variant:"good",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Funciona al ",e.jsx("strong",{children:"navegador"})]}),e.jsx("li",{children:"Interacció amb HTML (botons, formularis, estils)"}),e.jsx("li",{children:"Múltiples usuaris alhora"}),e.jsx("li",{children:"Qualsevol persona amb internet hi pot accedir"}),e.jsx("li",{children:"Interfície gràfica completa (HTML + CSS)"})]})})]}),e.jsx(g,{label:"El que fèieu fins ara: aplicació de consola",code:JC,showLineNumbers:!0}),e.jsx(g,{label:"El que fareu ara: aplicació web amb Spring Boot",code:WC,showLineNumbers:!0}),e.jsx(y,{title:"Com Funciona una Aplicació Web?"}),e.jsx(m,{variant:"explanation",title:"El model Client-Servidor",children:e.jsx("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:e.jsxs("p",{children:["Una webapp té ",e.jsx("strong",{children:"dues parts"})," que es comuniquen:"]})})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Client (el navegador)",variant:"blue",children:[e.jsx("p",{style:{marginBottom:"8px"},children:"El que l'usuari veu i toca. Chrome, Firefox, Edge..."}),e.jsxs("ul",{style:{paddingLeft:"20px"},children:[e.jsxs("li",{children:["Mostra pàgines ",e.jsx("strong",{children:"HTML"})]}),e.jsxs("li",{children:["Aplica estils amb ",e.jsx("strong",{children:"CSS"})]}),e.jsxs("li",{children:["Envia ",e.jsx("strong",{children:"peticions"})," al servidor"]}),e.jsxs("li",{children:["Rep i mostra les ",e.jsx("strong",{children:"respostes"})]})]})]}),e.jsxs(U,{title:"Servidor (Spring Boot)",variant:"good",children:[e.jsx("p",{style:{marginBottom:"8px"},children:"El vostre programa Java que corre al servidor."}),e.jsxs("ul",{style:{paddingLeft:"20px"},children:[e.jsxs("li",{children:["Rep les ",e.jsx("strong",{children:"peticions"})," del navegador"]}),e.jsxs("li",{children:["Executa la ",e.jsx("strong",{children:"lògica"})," (Java)"]}),e.jsxs("li",{children:["Consulta la ",e.jsx("strong",{children:"base de dades"})," si cal"]}),e.jsxs("li",{children:["Retorna pàgines ",e.jsx("strong",{children:"HTML"})," al navegador"]})]})]})]}),e.jsx(m,{variant:"info",title:"El protocol HTTP: com es comuniquen",children:e.jsx("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:e.jsxs("p",{children:["Quan escrius una URL al navegador (com ",e.jsx("code",{children:"localhost:8080/hola"}),"), el navegador envia una ",e.jsx("strong",{children:"petició HTTP"})," al servidor. El servidor processa la petició i retorna una ",e.jsx("strong",{children:"resposta"})," (normalment una pàgina HTML)."]})})}),e.jsx(g,{label:"Què passa quan escrius una URL al navegador?",code:KC,showLineNumbers:!0}),e.jsx(J,{headers:["Mètode HTTP","Què fa","Exemple","En Spring Boot"],rows:[{cells:["GET","Demana informació (veure una pàgina)","Visitar /animals","@GetMapping"]},{cells:["POST","Envia informació (enviar un formulari)","Crear un animal nou","@PostMapping"]}]}),e.jsx(m,{variant:"warning",title:"No cal memoritzar HTTP ara",children:e.jsxs("p",{children:["De moment només necessiteu saber que el navegador ",e.jsx("strong",{children:"demana"})," (GET) i el servidor ",e.jsx("strong",{children:"respon"})," (HTML). La resta l'anirem veient a la pràctica."]})}),e.jsx(y,{title:"Què és Spring Boot exactament?"}),e.jsx(m,{variant:"success",title:"Spring Boot = Java per fer aplicacions web",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Spring Boot"})," és un ",e.jsx("em",{children:"framework"})," (conjunt d'eines i llibreries) que fa que crear aplicacions web amb Java sigui ",e.jsx("strong",{children:"ràpid i senzill"}),"."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Sense Spring Boot, crear una webapp amb Java requereix configurar desenes de fitxers XML, instal·lar un servidor web (Tomcat), gestionar dependències manualment... Spring Boot fa tot això ",e.jsx("strong",{children:"automàticament"}),"."]})]})}),e.jsx(J,{headers:["Sense Spring Boot","Amb Spring Boot"],rows:[{cells:["Configurar Tomcat manualment","Servidor web inclòs, arranca sol"]},{cells:["Desenes de fitxers XML de configuració","Quasi zero configuració"]},{cells:["Gestionar dependències a mà","pom.xml les gestiona automàticament"]},{cells:["Setmanes per tenir algo funcionant",'Minuts per tenir "Hola Món"']}]}),e.jsx(m,{variant:"explanation",title:"Per què Spring Boot i no un altre?",children:e.jsx("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:e.jsxs("p",{children:["Spring Boot és el framework ",e.jsx("strong",{children:"més utilitzat"})," del món Java. El trobareu a la gran majoria d'ofertes de feina de Java a Espanya i Europa. Aprendre Spring Boot és ",e.jsx("strong",{children:"directament aplicable"})," al món laboral."]})})}),e.jsx(y,{title:"MVC: Ja el Sabeu!"}),e.jsx(m,{variant:"success",title:"La bona notícia: ja coneixeu MVC",children:e.jsx("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:e.jsxs("p",{children:["Spring Boot utilitza el patró ",e.jsx("strong",{children:"MVC"})," que ja domineu. L'única diferència és ",e.jsx("strong",{children:"on es mostra"})," el resultat:"]})})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"MVC a Consola (el que ja sabeu)",variant:"blue",children:[e.jsx(g,{code:YC}),e.jsxs("p",{style:{marginTop:"8px"},children:["La ",e.jsx("strong",{children:"View"})," és una classe Java amb",e.jsx("code",{children:" System.out.println"})]})]}),e.jsxs(U,{title:"MVC a Spring Boot (el que aprendreu)",variant:"good",children:[e.jsx(g,{code:XC}),e.jsxs("p",{style:{marginTop:"8px"},children:["La ",e.jsx("strong",{children:"View"})," és un fitxer",e.jsx("code",{children:" .html"})," amb Thymeleaf"]})]})]}),e.jsx(J,{headers:["Capa MVC","A Consola (fins ara)","A Spring Boot (ara)"],rows:[{cells:["Model","Classes Java (Animal, Gos...)","Les MATEIXES classes Java!"]},{cells:["View (Vista)","Menu.java amb System.out","Fitxers .html amb Thymeleaf"]},{cells:["Controller","Classe Java que coordina","Classe Java amb @Controller"]},{cells:["On es veu","Al terminal","Al navegador"]}]}),e.jsx(m,{variant:"success",title:"El Model NO canvia!",children:e.jsx("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:e.jsxs("p",{children:["Les classes del Model (",e.jsx("code",{children:"Animal"}),", ",e.jsx("code",{children:"Gos"}),", ",e.jsx("code",{children:"Gat"}),"...) són ",e.jsx("strong",{children:"exactament les mateixes"}),". Herència, polimorfisme, classes abstractes... tot el que heu après serveix tal qual. L'únic que canvia és com es mostra la informació a l'usuari (HTML en lloc de System.out)."]})})}),e.jsx(y,{title:"Estructura d'un Projecte Spring Boot"}),e.jsx(m,{variant:"explanation",children:e.jsx("p",{children:"Un projecte Spring Boot segueix una estructura estàndard. No la heu de memoritzar, l'anireu aprenent a mesura que la useu:"})}),e.jsx(g,{label:"Estructura típica d'un projecte Spring Boot",code:ZC}),e.jsx(J,{headers:["Carpeta/Fitxer","Què és","Equivalent a consola"],rows:[{cells:["controller/","Classes que reben peticions HTTP","El Main que gestionava el flux"]},{cells:["model/","Classes de dades (Animal, Gos...)","Exactament el mateix!"]},{cells:["templates/","Pàgines HTML (la Vista)","Menu.java amb System.out"]},{cells:["static/css/","Estils CSS per fer-ho bonic","No existia a consola"]},{cells:["application.properties","Configuració (port, base de dades...)","No existia a consola"]},{cells:["pom.xml","Llista de dependències (llibreries)",'Com un "package.json"']}]}),e.jsx(y,{title:"Què Necessites Instal·lat?"}),e.jsx(g,{label:"Requisits",code:ew,showLineNumbers:!0}),e.jsxs(me,{children:[e.jsxs(T,{title:"JDK 21",variant:"blue",children:[e.jsxs("p",{children:["El que ja useu a classe. Si no, descarregueu-lo de ",e.jsx("strong",{children:"adoptium.net"}),"."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Comproveu amb: ",e.jsx("code",{children:"java --version"})]})]}),e.jsx(T,{title:"IntelliJ IDEA o VS Code",variant:"yellow",children:e.jsxs("p",{children:["Qualsevol dels dos serveix. ",e.jsx("strong",{children:"IntelliJ Community"})," (gratuït) o",e.jsx("strong",{children:" VS Code"})," amb ",e.jsx("em",{children:"Extension Pack for Java"})," + ",e.jsx("em",{children:"Spring Boot Extension Pack"}),"."]})}),e.jsxs(T,{title:"Spring Initializr",variant:"green",children:[e.jsxs("p",{children:["Web per crear projectes Spring Boot en 1 minut: ",e.jsx("strong",{children:"start.spring.io"})]}),e.jsx("p",{style:{marginTop:"8px"},children:"El farem servir a la pròxima secció."})]})]}),e.jsx(y,{title:"Resum"}),e.jsx(m,{variant:"success",title:"Què hem après?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Una ",e.jsx("strong",{children:"aplicació web"})," funciona al navegador, no al terminal."]}),e.jsxs("li",{children:["El ",e.jsx("strong",{children:"navegador"})," (client) envia peticions i el ",e.jsx("strong",{children:"servidor"})," (Spring Boot) respon amb HTML."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Spring Boot"})," és un framework Java que fa fàcil crear aplicacions web."]}),e.jsxs("li",{children:["Ja sabeu ",e.jsx("strong",{children:"MVC"}),": a Spring Boot és el mateix, però la Vista és HTML en lloc de System.out."]}),e.jsxs("li",{children:["El ",e.jsx("strong",{children:"Model no canvia"}),": les vostres classes Java serveixen tal qual."]}),e.jsx("li",{children:"Necessiteu: JDK 21, IntelliJ IDEA o VS Code, i Spring Initializr."})]})}),e.jsx(m,{variant:"info",title:"Següent pas",children:e.jsxs("p",{children:["A la pròxima secció crearem el ",e.jsx("strong",{children:"primer projecte Spring Boot"}),' i veureu "Hola Món" al navegador. Tot el que heu après fins ara (Java, POO, MVC) segueix sent útil. Només canvia on es mostra el resultat.']})})]})}const aw=`// A start.spring.io, configura aixo:
//
// Project:      Maven
// Language:     Java
// Spring Boot:  3.4.x (la ultima estable)
// Group:        com.exemple
// Artifact:     holamundo
// Name:         holamundo
// Packaging:    Jar
// Java:         21
//
// Dependencies (clica "ADD DEPENDENCIES"):
//   - Spring Web
//   - Thymeleaf
//
// Clica "GENERATE" -> descarrega un .zip`,rw=`// AQUEST FITXER JA EXISTEIX - NO EL TOQUEU
// src/main/java/com/exemple/holamundo/HolamundoApplication.java

package com.exemple.holamundo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication   // Aquesta anotacio ho configura TOT automatic
public class HolamundoApplication {

    public static void main(String[] args) {
        SpringApplication.run(HolamundoApplication.class, args);
        // Aixo arranca el servidor web. No cal tocar res aqui.
    }
}`,nw=`// CREA AQUEST FITXER NOU:
// src/main/java/com/exemple/holamundo/controller/HolaController.java

package com.exemple.holamundo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller   // Indica a Spring que aquesta classe rep peticions web
public class HolaController {

    @GetMapping("/")      // Quan el navegador visita "localhost:8080/"
    public String index() {
        return "index";   // Retorna la pagina "index.html"
    }

    @GetMapping("/hola")  // Quan el navegador visita "localhost:8080/hola"
    public String hola(Model model) {
        model.addAttribute("nom", "Mundo");
        model.addAttribute("missatge", "Benvingut a Spring Boot!");
        return "hola";    // Retorna la pagina "hola.html"
    }
}`,iw=`@Controller                    // 1. "Soc un controller, rep peticions"
public class HolaController {

    @GetMapping("/hola")         // 2. "Quan algú visiti /hola..."
    public String hola(Model model) {
        //                       // 3. El parametre "model" es una motxilla
        //                       //    on poses dades per a la pagina HTML

        model.addAttribute("nom", "Mundo");
        //                       // 4. Poses la dada "nom" amb valor "Mundo"
        //                       //    dins la motxilla

        return "hola";           // 5. Retornes el NOM del fitxer HTML
        //                       //    Spring busca templates/hola.html
    }
}`,sw=`<!-- CREA AQUEST FITXER:
     src/main/resources/templates/index.html -->

<!DOCTYPE html>
<html>
<head>
    <title>MusicApp</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            text-align: center;
        }
        h1 { color: #1E3A5F; }
        a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 30px;
            background: #1E3A5F;
            color: white;
            text-decoration: none;
            border-radius: 8px;
        }
        a:hover { background: #2C5282; }
    </style>
</head>
<body>
    <h1>Hola Mon!</h1>
    <p>La meva primera aplicacio web amb Spring Boot</p>
    <a href="/hola">Anar a la pagina hola</a>
</body>
</html>`,lw=`<!-- CREA AQUEST FITXER:
     src/main/resources/templates/hola.html -->

<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>Hola</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            text-align: center;
        }
        h1 { color: #2D8A4E; }
        .missatge {
            background: #E8F5E9;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
        }
        a {
            display: inline-block;
            margin-top: 20px;
            color: #1E3A5F;
        }
    </style>
</head>
<body>
    <!-- th:text = Thymeleaf: substitueix el text pel valor de "nom" -->
    <h1>Hola, <span th:text="\${nom}">Placeholder</span>!</h1>

    <!-- th:text amb "missatge" que hem posat al Controller -->
    <div class="missatge">
        <p th:text="\${missatge}">Missatge per defecte</p>
    </div>

    <a href="/">Tornar a l'inici</a>
</body>
</html>`,ow=`<!-- Thymeleaf: com passar dades de Java a HTML -->

<!-- 1. AL CONTROLLER (Java): poses dades al Model -->
model.addAttribute("nom", "Mundo");

<!-- 2. AL HTML: les mostres amb th:text -->
<h1>Hola, <span th:text="\${nom}">Placeholder</span>!</h1>

<!-- Resultat al navegador: -->
<h1>Hola, Mundo!</h1>

<!-- "Placeholder" desapareix i es substitueix per "Mundo" -->
<!-- \${nom} busca el valor de "nom" que has posat al Controller -->`,cw=`// ARRANCAR EL PROJECTE:

// Opcio 1: Des d'IntelliJ IDEA
// Clica el boto verd "Play" al costat de la classe HolamundoApplication
// (o obre la classe i prem Shift + F10)

// Opcio 2: Des de VS Code
// Obre HolamundoApplication.java i clica "Run" a sobre del metode main()
// (o usa la pestanya "Spring Boot Dashboard" que apareix amb l'extensio)

// Opcio 3: Des del terminal (funciona a qualsevol IDE)
// (a la carpeta del projecte)
./mvnw spring-boot:run        // Linux / Mac
mvnw.cmd spring-boot:run      // Windows

// Veureu algo com:
//   Tomcat started on port 8080
//   Started HolamundoApplication in 2.5 seconds

// OBRE EL NAVEGADOR i ves a:
//   http://localhost:8080
//   http://localhost:8080/hola`,uw=`holamundo/
├── src/main/java/com/exemple/holamundo/
│   ├── HolamundoApplication.java        <- JA EXISTEIX (no tocar)
│   └── controller/
│       └── HolaController.java          <- L'HEU CREAT VOSALTRES
├── src/main/resources/
│   └── templates/
│       ├── index.html                   <- L'HEU CREAT VOSALTRES
│       └── hola.html                    <- L'HEU CREAT VOSALTRES
└── pom.xml                              <- JA EXISTEIX (no tocar)`,dw=`// EXERCICI: Canvia el nom dinàmicament

// 1. Afegeix un nou metode al Controller:
@GetMapping("/saluda")
public String saluda(@RequestParam String nom, Model model) {
    model.addAttribute("nom", nom);
    model.addAttribute("missatge", "Has estat saludat per Spring Boot!");
    return "hola";    // Reutilitza la mateixa pagina hola.html
}

// 2. Prova al navegador:
//    http://localhost:8080/saluda?nom=Anna
//    http://localhost:8080/saluda?nom=Marc
//    http://localhost:8080/saluda?nom=ElTeuNom

// Fixa't: el ?nom=Anna de la URL arriba al parametre "nom" del metode!`,pw=`// @RequestParam: com rebre dades de la URL

@GetMapping("/saluda")
public String saluda(@RequestParam String nom, Model model) {
    //              |_______________|
    //              Agafa el valor de "nom" de la URL
    //              /saluda?nom=Anna  ->  nom = "Anna"

    model.addAttribute("nom", nom);
    return "hola";
}

// Si visites /saluda SENSE ?nom=..., dona error.
// Per evitar-ho, pots posar un valor per defecte:
@GetMapping("/saluda")
public String saluda(
    @RequestParam(defaultValue = "Anonymous") String nom,
    Model model) {
    model.addAttribute("nom", nom);
    return "hola";
}`;function mw(){return e.jsxs("div",{children:[e.jsx(y,{title:"Primer Projecte: Hola Món al Navegador"}),e.jsx(y,{title:"Pas 1: Crear el Projecte a start.spring.io"}),e.jsx(m,{variant:"info",title:"Spring Initializr: el creador de projectes",children:e.jsx("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:e.jsxs("p",{children:["Obre el navegador i ves a ",e.jsx("strong",{children:"start.spring.io"}),". Aquesta web crea l'esquelet del projecte amb tota la configuració feta. Només has de triar les opcions i descarregar el .zip."]})})}),e.jsx(g,{label:"Configuració a start.spring.io",code:aw}),e.jsx(J,{headers:["Camp","Valor","Per què"],rows:[{cells:["Project","Maven","Gestor de dependències (el més usat amb Spring)"]},{cells:["Language","Java","El que ja sabeu!"]},{cells:["Spring Boot","3.4.x","La versió estable més recent"]},{cells:["Group","com.exemple","Identifica la vostra organització (com el package)"]},{cells:["Artifact","holamundo","El nom del projecte"]},{cells:["Packaging","Jar","Format de distribució (el més senzill)"]},{cells:["Java","21","Versió de Java (la que useu habitualment a classe)"]}]}),e.jsx(m,{variant:"warning",title:"Dependencies: no us les oblideu!",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Cliqueu ",e.jsx("strong",{children:"ADD DEPENDENCIES"})," i afegiu:"]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Spring Web"})," — per crear aplicacions web (controllers, peticions HTTP)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Thymeleaf"})," — per crear pàgines HTML dinàmiques des de Java"]})]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Cliqueu ",e.jsx("strong",{children:"GENERATE"}),", descarregueu el .zip, descomprimiu-lo i obriu la carpeta amb el vostre IDE:"]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"IntelliJ IDEA"}),": File → Open → seleccioneu la carpeta del projecte."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"VS Code"}),": File → Open Folder → seleccioneu la carpeta del projecte. Assegureu-vos de tenir instal·lats ",e.jsx("em",{children:"Extension Pack for Java"})," i",e.jsx("em",{children:" Spring Boot Extension Pack"}),"."]})]})]})}),e.jsxs(m,{variant:"explanation",title:"Primera vegada amb l'IDE?",children:[e.jsx("p",{children:"Quan obriu el projecte per primera vegada, l'IDE descarregarà les dependències automàticament. Pot trigar 1-2 minuts. Espereu fins que la barra de progrés de baix desaparegui."}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"IntelliJ IDEA"}),': Si us demana "Trust Project", cliqueu que sí.']}),e.jsxs("li",{children:[e.jsx("strong",{children:"VS Code"}),": Accepteu la notificació per importar el projecte Maven."]})]})]}),e.jsx(y,{title:"Pas 2: Entendre el que ja existeix"}),e.jsx(m,{variant:"info",children:e.jsxs("p",{children:["Després de descomprimir, el projecte ja té fitxers creats. El més important és ",e.jsx("code",{children:"HolamundoApplication.java"}),", que és el punt d'entrada (com el ",e.jsx("code",{children:"Main"})," que ja coneixeu):"]})}),e.jsx(g,{label:"HolamundoApplication.java (generat automàticament)",code:rw,showLineNumbers:!0}),e.jsx(m,{variant:"explanation",title:"Què fa exactament @SpringBootApplication?",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Aquesta anotació ",e.jsx("strong",{children:"no és màgia"}),". És una combinació de tres anotacions que fan tres coses concretes:"]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"@ComponentScan"})," — Recorre totes les classes del package (",e.jsx("code",{children:"com.exemple.holamundo"}),") i subpackages buscant classes amb anotacions com ",e.jsx("code",{children:"@Controller"}),", ",e.jsx("code",{children:"@Service"}),",",e.jsx("code",{children:" @Repository"}),". Les registra perquè Spring les pugui usar.",e.jsx("br",{}),e.jsx("em",{children:"Per això cal que els Controllers estiguin dins del mateix package principal o subpackages."})]}),e.jsxs("li",{style:{marginTop:"6px"},children:[e.jsx("strong",{children:"@EnableAutoConfiguration"})," — Mira què hi ha al",e.jsx("code",{children:" pom.xml"})," (les dependències) i configura Spring en conseqüència. Heu afegit ",e.jsx("code",{children:"spring-boot-starter-web"}),"? Doncs arranca un servidor web. Heu afegit ",e.jsx("code",{children:"spring-boot-starter-thymeleaf"}),"? Doncs prepara Thymeleaf. Tot automàtic segons el que necessiteu."]}),e.jsxs("li",{style:{marginTop:"6px"},children:[e.jsx("strong",{children:"@SpringBootConfiguration"})," — Marca aquesta classe com a classe de configuració principal de l'aplicació."]})]})]})}),e.jsx(m,{variant:"info",title:"I el mètode main()?",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["És el ",e.jsx("code",{children:"main()"})," Java de tota la vida, el mateix que feieu a consola. La línia ",e.jsx("code",{children:"SpringApplication.run(HolamundoApplication.class, args)"})," fa tres coses:"]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsx("li",{children:"Llegeix les anotacions de la classe i aplica la configuració"}),e.jsxs("li",{children:["Arranca el ",e.jsx("strong",{children:"servidor web Tomcat"})," (que Spring porta incrustat)"]}),e.jsxs("li",{children:["Es queda escoltant al port ",e.jsx("strong",{children:"8080"})," peticions del navegador"]})]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Normalment ",e.jsx("strong",{children:"no caldrà que toqueu aquest fitxer"}),", però ara ja sabeu què fa cada línia. Res de màgia."]})]})}),e.jsx(y,{title:"Pas 3: Crear el Controller"}),e.jsx(m,{variant:"success",title:"El Controller: on arriben les peticions",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["El ",e.jsx("strong",{children:"Controller"})," és la classe que rep les peticions del navegador i decideix què retornar. És com el ",e.jsx("code",{children:"Menu.java"})," que fèieu a consola, però en lloc de ",e.jsx("code",{children:"System.out"}),", retorna pàgines HTML."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Creeu la carpeta ",e.jsx("code",{children:"controller/"})," dins del package principal i afegiu aquest fitxer:"]})]})}),e.jsx(g,{label:"HolaController.java (CREEU-LO VOSALTRES)",code:nw,showLineNumbers:!0}),e.jsx(m,{variant:"explanation",title:"Línia per línia: què fa cada cosa?",children:e.jsx("p",{children:"Desglossem el controller:"})}),e.jsx(g,{label:"El Controller explicat pas a pas",code:iw,showLineNumbers:!0}),e.jsx(J,{headers:["Element","Què fa","Equivalent a consola"],rows:[{cells:["@Controller",'Diu a Spring: "aquesta classe rep peticions"',"No tenia equivalent"]},{cells:['@GetMapping("/hola")',"Quan el navegador visita /hola, executa aquest mètode","case 1: del switch al Menu"]},{cells:["Model model",'Una "motxilla" per passar dades al HTML',"Les variables que passàveu a System.out"]},{cells:["model.addAttribute()","Posa una dada dins la motxilla","Preparar el text per mostrar"]},{cells:['return "hola"',"Retorna la pàgina templates/hola.html","El System.out que mostrava el resultat"]}]}),e.jsx(y,{title:"Pas 4: Crear les Pàgines HTML"}),e.jsx(m,{variant:"info",title:"Per què existeix Thymeleaf? El problema que soluciona",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Imaginem que volem mostrar un nom dinàmic a una pàgina HTML. ",e.jsx("strong",{children:"Sense Thymeleaf"}),", hauríem de construir l'HTML com un String dins del codi Java:"]}),e.jsx(g,{code:`// HORRIBLE: construir HTML com a String
@GetMapping("/hola")
public String hola() {
    String nom = "Mundo";
    return "<html><body>"
         + "<h1>Hola, " + nom + "!</h1>"
         + "<p>Benvingut!</p>"
         + "</body></html>";
}
// Problemes:
// - Codi Java barrejat amb HTML (ilegible)
// - No pots posar estils sense fer-ho encara mes lleig
// - Canviar el disseny implica tocar codi Java
// - Si afegeixes bucles o condicionals, es un infern`}),e.jsxs("p",{style:{marginTop:"12px"},children:[e.jsx("strong",{children:"Thymeleaf soluciona això"}),": escriviu HTML normal en fitxers",e.jsx("code",{children:" .html"})," separats, i afegiu uns atributs especials on voleu dades dinàmiques. El Controller passa les dades, Thymeleaf les posa al seu lloc.",e.jsx("strong",{children:"Separació neta entre lògica (Java) i presentació (HTML)."})]})]})}),e.jsx(m,{variant:"success",title:"Thymeleaf es redueix a 4 atributs",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["No us deixeu intimidar: ",e.jsx("strong",{children:"tot Thymeleaf es resumeix en pocs atributs"}),". Aquests són els que farem servir al curs:"]}),e.jsx(J,{headers:["Atribut","Què fa","Exemple"],rows:[{cells:['th:text="${var}"',"Posa el valor de la variable com a text",'<span th:text="${nom}">Mundo</span>']},{cells:['th:each="x : ${lista}"',"Bucle (com el for-each de Java)",'<li th:each="a : ${animals}" th:text="${a.nom}"></li>']},{cells:['th:if="${cond}"',"Mostra l'element només si la condició és certa",'<p th:if="${usuari != null}">Hola!</p>']},{cells:['th:href="@{/ruta}"',"Enllaç a una altra pàgina de l'app",'<a th:href="@{/animals}">Veure animals</a>']}]}),e.jsxs("p",{style:{marginTop:"12px"},children:[e.jsx("strong",{children:"És HTML normal!"})," Podeu escriure CSS i JavaScript com sempre. Thymeleaf només afegeix aquests atributs per a la part dinàmica. Fins i tot podeu obrir el fitxer ",e.jsx("code",{children:".html"})," al navegador directament (sense arrancar Spring) i veureu el disseny amb els valors per defecte."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Les pàgines HTML van a la carpeta ",e.jsx("code",{children:"src/main/resources/templates/"}),"."]})]})}),e.jsx(g,{label:"index.html — La pàgina d'inici",code:sw,showLineNumbers:!0}),e.jsx(g,{label:"hola.html — La pàgina amb dades dinàmiques",code:lw,showLineNumbers:!0}),e.jsx(m,{variant:"explanation",title:"Com funciona Thymeleaf?",children:e.jsx("p",{children:"La connexió entre Java i HTML:"})}),e.jsx(g,{label:"La connexió Controller → HTML",code:ow}),e.jsx(J,{headers:["Thymeleaf","Què fa","Exemple"],rows:[{cells:['th:text="${variable}"',"Substitueix el text pel valor de la variable",'<span th:text="${nom}"> → Mundo']},{cells:["${variable}","Accedeix al valor posat amb model.addAttribute()",'${nom} → el valor de "nom"']},{cells:['xmlns:th="..."',"Activa Thymeleaf al HTML (posar al tag <html>)","Necessari a cada pàgina"]}]}),e.jsx(y,{title:"Pas 5: Arrancar i Provar!"}),e.jsx(g,{label:"Com arrancar el projecte",code:cw}),e.jsx(m,{variant:"success",title:"Prova-ho!",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsx("p",{children:"Si tot ha anat bé, obre el navegador i visita:"}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"http://localhost:8080"})," → Veuràs la pàgina d'inici"]}),e.jsxs("li",{children:[e.jsx("code",{children:"http://localhost:8080/hola"}),' → Veuràs "Hola, Mundo!" amb el missatge']})]}),e.jsxs("p",{style:{marginTop:"12px",padding:"12px",background:"rgba(0,0,0,0.04)",borderRadius:"8px"},children:[e.jsx("strong",{children:"Felicitats!"})," Heu creat la vostra primera aplicació web. El navegador ha enviat una petició GET, Spring Boot ha executat el Controller, ha posat les dades al Model, i Thymeleaf ha generat la pàgina HTML. Tot el MVC en acció!"]})]})}),e.jsx(g,{label:"Estructura final del projecte",code:uw}),e.jsx(y,{title:"Pas 6: Exercici — Nom Dinàmic per URL"}),e.jsx(m,{variant:"info",title:"Ara et toca a tu!",children:e.jsxs("p",{children:[`Fins ara el nom "Mundo" estava fixe al codi. Ara farem que l'usuari pugui enviar el seu nom `,e.jsx("strong",{children:"des de la URL"}),", com fan les webs reals."]})}),e.jsx(g,{label:"Exercici: rebre el nom per URL",code:dw,showLineNumbers:!0}),e.jsx(g,{label:"@RequestParam explicat",code:pw,showLineNumbers:!0}),e.jsx(m,{variant:"success",title:"Prova-ho amb el teu nom!",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsx("p",{children:"Afegeix el mètode al Controller, reinicia l'aplicació i prova:"}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsx("li",{children:e.jsx("code",{children:"http://localhost:8080/saluda?nom=Anna"})}),e.jsx("li",{children:e.jsx("code",{children:"http://localhost:8080/saluda?nom=Marc"})}),e.jsx("li",{children:e.jsx("code",{children:"http://localhost:8080/saluda?nom=ElTeuNom"})})]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Canvia el ",e.jsx("code",{children:"?nom="})," i veuràs com la pàgina canvia! Això és una pàgina ",e.jsx("strong",{children:"dinàmica"}),": el contingut depèn de les dades que envia l'usuari."]})]})}),e.jsx(y,{title:"Errors Típics del Primer Projecte"}),e.jsx(J,{headers:["Error","Causa","Solució"],rows:[{cells:["Whitelabel Error Page (404)","Spring no troba la pàgina HTML","Comprova que el fitxer .html està a templates/ i que el return del controller coincideix amb el nom del fitxer (sense .html)"]},{cells:["El port 8080 ja està en ús","Una altra aplicació usa el port","Atura l'altra aplicació o canvia el port a application.properties: server.port=8081"]},{cells:["${nom} apareix literalment al HTML","Falta el xmlns:th de Thymeleaf al tag <html>",'Afegeix xmlns:th="http://www.thymeleaf.org" al tag <html>']},{cells:["El Controller no funciona","La classe no està dins del package principal","El Controller HA d'estar dins del package de HolamundoApplication o un sub-package (ex: controller/)"]},{cells:["Error de compilació amb imports","IntelliJ no reconeix les classes de Spring","Espereu que IntelliJ descarregui les dependències (barra de progrés inferior)"]}]}),e.jsx(y,{title:"Resum"}),e.jsxs(me,{children:[e.jsx(T,{title:"start.spring.io",variant:"blue",children:e.jsx("p",{children:"Crea el projecte amb Spring Web + Thymeleaf. Descarrega .zip i obre amb IntelliJ."})}),e.jsx(T,{title:"Controller",variant:"yellow",children:e.jsxs("p",{children:[e.jsx("code",{children:"@Controller"})," + ",e.jsx("code",{children:"@GetMapping"})," per rebre peticions del navegador i retornar pàgines HTML."]})}),e.jsx(T,{title:"Thymeleaf",variant:"green",children:e.jsxs("p",{children:[e.jsx("code",{children:'th:text="${variable}"'})," per mostrar dades de Java dins de l'HTML."]})}),e.jsx(T,{title:"Model",variant:"pink",children:e.jsxs("p",{children:[e.jsx("code",{children:'model.addAttribute("nom", valor)'})," per passar dades del Controller al HTML."]})})]}),e.jsx(m,{variant:"success",title:"Què hem aconseguit?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsx("li",{children:"Hem creat un projecte Spring Boot des de zero."}),e.jsx("li",{children:"Hem vist una pàgina web al navegador feta amb Java."}),e.jsx("li",{children:"Hem passat dades de Java a HTML amb Thymeleaf."}),e.jsxs("li",{children:["Hem rebut dades de l'usuari per URL amb ",e.jsx("code",{children:"@RequestParam"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Següent pas"}),": formularis HTML per enviar dades de veritat (POST)."]})]})})]})}const hw=`// A start.spring.io:
//
// Project:        Maven
// Language:       Java
// Spring Boot:    3.4.x
// Group:          com.exemple
// Artifact:       endevina-animal
// Name:           endevina-animal
// Packaging:      Jar
// Java:           21
// Configuration:  Properties     <- (en lloc de YAML: mes senzill per comencar)
//
// Dependencies:
//   - Spring Web       (per crear controllers i rebre peticions)
//   - Thymeleaf        (per les pagines HTML dinamiques)
//
// GENERATE -> descomprimir -> obrir amb IntelliJ / VS Code`,fw=`<!-- pom.xml (extracte): la "llista de la compra" del projecte -->
<!-- Initializr l'ha generat per nosaltres, no cal tocar-lo a ma -->

<dependencies>

    <!-- Spring Web: ens permet crear controllers i rebre peticions HTTP -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- Thymeleaf: motor de plantilles per generar HTML dinamic -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-thymeleaf</artifactId>
    </dependency>

</dependencies>`,xw=`# src/main/resources/application.properties

# Desactivem la cache de Thymeleaf durant el desenvolupament.
# Aixi, quan canviem un HTML i refresquem el navegador,
# veiem els canvis immediatament (sense reiniciar l'app).
spring.thymeleaf.cache=false`,gw=`// src/main/java/com/exemple/endevinaanimal/model/Animal.java

package com.exemple.endevinaanimal.model;

import java.util.ArrayList;

// Classe MODEL: representa les dades d'un animal del joc.
// Els objectes d'aquesta classe son el que el Controller passara a la View.
public class Animal {

    // Atributs privats (encapsulament): nomes s'hi accedeix via getters
    private String nom;                    // "Gos", "Gat"...
    private String imatge;                 // Nom del fitxer (ex: "gos.jpg")
    private ArrayList<String> pistes;      // 3 pistes per endevinar l'animal

    // Constructor: s'executa quan fem "new Animal(...)" al Controller
    public Animal(String nom, String imatge, ArrayList<String> pistes) {
        this.nom = nom;
        this.imatge = imatge;
        this.pistes = pistes;
    }

    // Getters: Thymeleaf crida aquests metodes automaticament
    // (p.ex. \${animal.nom} a l'HTML -> invoca getNom() aqui)
    public String getNom() { return nom; }
    public String getImatge() { return imatge; }
    public ArrayList<String> getPistes() { return pistes; }

    // Logica de domini: comprova si la resposta de l'usuari es correcta.
    // equalsIgnoreCase -> ignora majuscules/minuscules ("gos" == "GOS")
    // trim()           -> elimina espais al principi i al final
    public boolean encertada(String resposta) {
        return nom.equalsIgnoreCase(resposta.trim());
    }
}`,jw=`// Crea la carpeta:
// src/main/resources/static/images/

// Descarrega imatges dels animals (p.ex. de unsplash.com, pexels.com)
// o fes servir emojis com a placeholder. Noms suggerits:

// src/main/resources/static/images/gos.jpg
// src/main/resources/static/images/gat.jpg
// src/main/resources/static/images/elefant.jpg
// src/main/resources/static/images/girafa.jpg
// src/main/resources/static/images/lleo.jpg

// Important: Spring Boot serveix automaticament tot el que hi ha a
// /static/. Si poses una imatge a static/images/gos.jpg, sera
// accessible al navegador a: http://localhost:8080/images/gos.jpg`,vw=`<!-- AQUESTA es la linia que afegirem a cada HTML que creem.
     No la copieu encara, nomes entendre-la: -->

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet">

<!-- Que es? Un <link> que carrega el CSS de Bootstrap des d'internet.
     On va? Dins del <head> de cada pagina HTML que creem.

     En el nostre projecte, la inclourem:
       - Al Pas 6, dins del <head> de joc.html
       - Al Pas 7, dins del <head> de encertat.html

     No cal descarregar res. Amb aquesta linia, totes les classes
     CSS de Bootstrap ja estan disponibles a la pagina. -->`,bw=`<!-- ASI quedara el <head> de joc.html (al Pas 6): -->

<!DOCTYPE html>
<html lang="ca" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Endevina l'Animal</title>

    <!-- AQUI va la linia de Bootstrap: -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet">
    <!-- I a partir d'aqui, pots usar classes com btn btn-primary, card, etc. -->
</head>
<body>
    <!-- ... el contingut vindra al Pas 6 ... -->
</body>
</html>`,yw=`// src/main/java/com/exemple/endevinaanimal/controller/JocController.java

package com.exemple.endevinaanimal.controller;

import com.exemple.endevinaanimal.model.Animal;
import jakarta.servlet.http.HttpSession;                               // "caixa forta" per usuari entre peticions
import org.springframework.stereotype.Controller;                      // marca la classe com a Controller de Spring
import org.springframework.ui.Model;                                   // contenidor per enviar dades a la View
import org.springframework.web.bind.annotation.GetMapping;             // associa un metode a una URL GET
import org.springframework.web.bind.annotation.PostMapping;            // associa un metode a una URL POST
import org.springframework.web.bind.annotation.RequestParam;           // llegeix un parametre del formulari

import java.util.ArrayList;
import java.util.Random;

// @Controller -> Spring detecta aquesta classe a l'arrencada i gestiona
// les URLs declarades a sota amb @GetMapping / @PostMapping.
@Controller
public class JocController {

    // Array amb els animals disponibles (mida fixa: 5 animals)
    private final Animal[] animals = new Animal[5];
    private final Random random = new Random();     // per triar animal aleatori

    // Constructor: Spring el crida UN COP quan arrenca l'app.
    // Aqui omplim l'array amb els 5 animals i les seves pistes.
    public JocController() {
        ArrayList<String> pistesGos = new ArrayList<>();
        pistesGos.add("Te 4 potes");
        pistesGos.add("Fa bup bup");
        pistesGos.add("Es el millor amic de l'home");
        animals[0] = new Animal("Gos", "gos.jpg", pistesGos);

        ArrayList<String> pistesGat = new ArrayList<>();
        pistesGat.add("Te 4 potes");
        pistesGat.add("Fa miau");
        pistesGat.add("Li agrada dormir al sofa");
        animals[1] = new Animal("Gat", "gat.jpg", pistesGat);

        ArrayList<String> pistesElefant = new ArrayList<>();
        pistesElefant.add("Es molt gran");
        pistesElefant.add("Te una trompa llarga");
        pistesElefant.add("Viu a Africa i Asia");
        animals[2] = new Animal("Elefant", "elefant.jpg", pistesElefant);

        ArrayList<String> pistesGirafa = new ArrayList<>();
        pistesGirafa.add("Te el coll molt llarg");
        pistesGirafa.add("Menja fulles dels arbres");
        pistesGirafa.add("Viu a la sabana");
        animals[3] = new Animal("Girafa", "girafa.jpg", pistesGirafa);

        ArrayList<String> pistesLleo = new ArrayList<>();
        pistesLleo.add("Es el rei de la selva");
        pistesLleo.add("Rugeix molt fort");
        pistesLleo.add("Viu en manades");
        animals[4] = new Animal("Lleo", "lleo.jpg", pistesLleo);
    }

    // ===== PAGINA PRINCIPAL =====
    // @GetMapping("/") -> es crida quan l'usuari visita http://localhost:8080/
    // Spring injecta automaticament "sessio" i "model" als parametres.
    @GetMapping("/")
    public String inici(HttpSession sessio, Model model) {
        // getAttribute retorna Object generic -> cal fer CAST a Animal.
        // Si l'usuari entra per primera vegada, no hi ha res i retorna null.
        Animal actual = (Animal) sessio.getAttribute("animalActual");
        if (actual == null) {
            // Primera visita: triem un animal aleatori i l'inicialitzem a la sessio
            actual = animals[random.nextInt(animals.length)];
            sessio.setAttribute("animalActual", actual);
            sessio.setAttribute("intents", 0);
        }

        // Usem Integer (no int) perque getAttribute POT retornar null,
        // i el tipus primitiu "int" no admet null.
        Integer intents = (Integer) sessio.getAttribute("intents");
        Integer puntuacio = (Integer) sessio.getAttribute("puntuacio");
        if (puntuacio == null) puntuacio = 0;

        // Pistes progressives: Intent 0 -> 1 pista, Intent 1 -> 2, Intent 2+ -> totes
        int numPistes = Math.min(intents + 1, actual.getPistes().size());
        ArrayList<String> pistesVisibles = new ArrayList<>(
            actual.getPistes().subList(0, numPistes));

        // model.addAttribute -> deixem dades a la "caixa" que llegira la plantilla.
        // A joc.html, p.ex., \${animal.nom} llegira aquest "animal".
        model.addAttribute("animal", actual);
        model.addAttribute("intents", intents);
        model.addAttribute("pistesVisibles", pistesVisibles);
        model.addAttribute("puntuacio", puntuacio);

        // Retornem el NOM de la plantilla (sense extensio).
        // Spring buscara src/main/resources/templates/joc.html
        return "joc";
    }

    // ===== REBRE LA RESPOSTA =====
    // @PostMapping -> s'executa quan el formulari fa submit cap a /endevinar
    // @RequestParam String resposta -> llegeix el camp <input name="resposta"> del form
    @PostMapping("/endevinar")
    public String endevinar(@RequestParam String resposta,
                            HttpSession sessio,
                            Model model) {
        Animal actual = (Animal) sessio.getAttribute("animalActual");

        // Deleguem la comprovacio a la classe Animal (logica de domini al MODEL)
        if (actual.encertada(resposta)) {
            // Correcte: calculem punts. Menys intents = mes punts (minim 1).
            Integer intents = (Integer) sessio.getAttribute("intents");
            int punts = Math.max(10 - intents * 3, 1);

            Integer puntuacio = (Integer) sessio.getAttribute("puntuacio");
            if (puntuacio == null) puntuacio = 0;
            sessio.setAttribute("puntuacio", puntuacio + punts);

            model.addAttribute("animal", actual);
            model.addAttribute("puntsGuanyats", punts);
            model.addAttribute("puntuacio", puntuacio + punts);
            return "encertat";   // mostra templates/encertat.html
        } else {
            // Incorrecte: sumem un intent i recarreguem la pagina principal
            Integer intents = (Integer) sessio.getAttribute("intents");
            sessio.setAttribute("intents", intents + 1);
            sessio.setAttribute("ultimError", resposta);
            // "redirect:/" -> el navegador fa una nova peticio GET a "/"
            // (diferent de "return '/'" que renderitzaria la plantilla directament)
            return "redirect:/";
        }
    }

    // ===== SEGUENT ANIMAL =====
    // Netegem nomes les dades de la partida actual (la puntuacio es conserva)
    @GetMapping("/seguent")
    public String seguent(HttpSession sessio) {
        sessio.removeAttribute("animalActual");
        sessio.removeAttribute("intents");
        sessio.removeAttribute("ultimError");
        return "redirect:/";
    }

    // ===== REINICIAR EL JOC =====
    // invalidate() destrueix TOTA la sessio (incloent la puntuacio)
    @GetMapping("/reiniciar")
    public String reiniciar(HttpSession sessio) {
        sessio.invalidate();
        return "redirect:/";
    }
}`,Sw=`<!-- src/main/resources/templates/joc.html -->

<!DOCTYPE html>
<html lang="ca" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Endevina l'Animal</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet">
    <style>
        /* La imatge es difumina segons els intents:
           Intent 0 -> molt borrosa, Intent 3+ -> nitida */
        .animal-img {
            max-width: 400px;
            max-height: 400px;
            object-fit: cover;
            border-radius: 12px;
            transition: filter 0.5s;
        }
        .blur-0 { filter: blur(20px); }
        .blur-1 { filter: blur(12px); }
        .blur-2 { filter: blur(6px); }
        .blur-3 { filter: blur(0); }
    </style>
</head>
<body class="bg-light">
    <div class="container py-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="card shadow-lg">

                    <!-- Capcalera amb puntuacio -->
                    <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                        <h2 class="m-0">Endevina l'Animal</h2>
                        <span class="badge bg-warning text-dark fs-5">
                            Puntuacio:
                            <span th:text="\${puntuacio}">0</span>
                        </span>
                    </div>

                    <div class="card-body text-center">
                        <!-- Imatge difuminada segons intents -->
                        <img th:src="@{/images/{img}(img=\${animal.imatge})}"
                             th:classappend="'blur-' + \${intents}"
                             class="animal-img mb-4"
                             alt="Animal misterios">

                        <!-- Pistes (apareixen progressivament) -->
                        <div class="mb-4">
                            <h5 class="text-muted">Pistes:</h5>
                            <ul class="list-group">
                                <li class="list-group-item"
                                    th:each="pista : \${pistesVisibles}"
                                    th:text="\${pista}">Pista exemple</li>
                            </ul>
                        </div>

                        <!-- Formulari per endevinar -->
                        <form method="post" th:action="@{/endevinar}">
                            <div class="input-group input-group-lg">
                                <input type="text"
                                       name="resposta"
                                       class="form-control"
                                       placeholder="Quin animal es?"
                                       autofocus
                                       required>
                                <button type="submit" class="btn btn-primary">
                                    Endevinar
                                </button>
                            </div>
                        </form>

                        <!-- Comptador d'intents -->
                        <p class="mt-3 text-muted">
                            Intents fallits: <strong th:text="\${intents}">0</strong>
                        </p>

                        <!-- Boto per saltar-se aquest animal -->
                        <a th:href="@{/seguent}" class="btn btn-sm btn-outline-secondary">
                            Saltar aquest animal
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`,Ew=`<!-- src/main/resources/templates/encertat.html -->

<!DOCTYPE html>
<html lang="ca" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Correcte!</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet">
</head>
<body class="bg-light">
    <div class="container py-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="card shadow-lg text-center">
                    <div class="card-body p-5">

                        <h1 class="text-success display-4">Correcte!</h1>
                        <p class="lead">
                            Era un
                            <strong th:text="\${animal.nom}">Animal</strong>!
                        </p>

                        <!-- Imatge ja nitida -->
                        <img th:src="@{/images/{img}(img=\${animal.imatge})}"
                             class="img-fluid rounded my-3"
                             style="max-width: 300px;"
                             alt="Animal descobert">

                        <!-- Punts guanyats -->
                        <div class="alert alert-success fs-4">
                            +<span th:text="\${puntsGuanyats}">0</span> punts
                        </div>

                        <p class="fs-5">
                            Puntuacio total:
                            <strong th:text="\${puntuacio}">0</strong>
                        </p>

                        <!-- Botons -->
                        <div class="mt-4">
                            <a th:href="@{/seguent}" class="btn btn-primary btn-lg">
                                Seguent animal
                            </a>
                            <a th:href="@{/reiniciar}" class="btn btn-outline-secondary">
                                Reiniciar joc
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`,Cw=`endevina-animal/
├── src/main/java/com/exemple/endevinaanimal/
│   ├── EndevinaAnimalApplication.java   <- Ja existeix
│   ├── controller/
│   │   └── JocController.java            <- PAS 5
│   └── model/
│       └── Animal.java                   <- PAS 2
├── src/main/resources/
│   ├── static/
│   │   └── images/
│   │       ├── gos.jpg                   <- PAS 3
│   │       ├── gat.jpg
│   │       ├── elefant.jpg
│   │       ├── girafa.jpg
│   │       └── lleo.jpg
│   ├── templates/
│   │   ├── joc.html                      <- PAS 6
│   │   └── encertat.html                 <- PAS 7
│   └── application.properties
└── pom.xml`,ww=`// Que passa quan l'usuari escriu "Gos" i clica "Endevinar"?

// 1. NAVEGADOR: envia POST a /endevinar amb resposta=Gos
//
// 2. CONTROLLER (JocController.java): rep la peticio
//    - Recupera l'animal actual de la sessio
//    - Crida animal.encertada("Gos")   <- MODEL
//    - Si correcte: calcula punts, guarda puntuacio
//    - Retorna "encertat"               <- VIEW
//
// 3. SPRING: busca templates/encertat.html
//
// 4. THYMELEAF: omple la plantilla amb les dades del Model
//    (animal, puntsGuanyats, puntuacio)
//
// 5. NAVEGADOR: rep el HTML generat i el mostra

// Cada capa te la seva responsabilitat:
// MODEL     -> Animal.java (logica: encertada?)
// VIEW      -> encertat.html (com es mostra)
// CONTROLLER -> JocController.java (coordina)`,Aw=`// REPTE per al proxim dia (no cal fer-ho ara)
//
// Evolucionar el joc a "Endevina el Contingut":
//
// abstract class ContingutAdivinar {
//     private String nom;
//     private ArrayList<String> pistes;
//
//     public abstract String mostrarPista();  // Cada tipus diferent!
//
//     public boolean encertada(String resposta) {
//         return nom.equalsIgnoreCase(resposta.trim());
//     }
// }
//
// class Animal extends ContingutAdivinar {
//     // mostrarPista() -> retorna ruta d'imatge difuminada
// }
//
// class Canco extends ContingutAdivinar {
//     // mostrarPista() -> retorna fragment d'audio
// }
//
// class Pelicula extends ContingutAdivinar {
//     // mostrarPista() -> retorna fotograma d'una escena
// }
//
// Pagina principal amb 3 botons: [Animals] [Cancons] [Pel·licules]
// El Controller treballa amb ContingutAdivinar (polimorfisme pur!)`;function Lw(){return e.jsxs("div",{children:[e.jsx(y,{title:"Projecte: Endevina l'Animal"}),e.jsx(m,{variant:"info",title:"Què farem?",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Crearem un joc web ",e.jsx("strong",{children:"real"}),": el programa escull un animal aleatori, l'usuari veu una imatge ",e.jsx("strong",{children:"difuminada"})," i unes pistes, i ha d'endevinar quin animal és. Cada intent fallat fa la imatge una mica més nítida i desbloqueja una pista nova."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Al final tindreu una aplicació completa amb ",e.jsx("strong",{children:"Spring Boot + Thymeleaf + Bootstrap"}),", amb l'estructura MVC perfectament separada. Tot pas a pas."]})]})}),e.jsx(m,{variant:"explanation",title:"Què aprendreu en aquest projecte?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsx("li",{children:"Crear un projecte Spring Boot des de zero"}),e.jsxs("li",{children:["Servir ",e.jsx("strong",{children:"imatges estàtiques"})," (fitxers de la carpeta ",e.jsx("code",{children:"static/"}),")"]}),e.jsxs("li",{children:["Afegir ",e.jsx("strong",{children:"Bootstrap"})," amb una sola línia"]}),e.jsxs("li",{children:["Formularis HTML amb ",e.jsx("strong",{children:"POST"})]}),e.jsxs("li",{children:["Mantenir estat entre peticions amb ",e.jsx("strong",{children:"sessió"})," (",e.jsx("code",{children:"HttpSession"}),")"]}),e.jsxs("li",{children:["Usar ",e.jsx("code",{children:"th:each"}),", ",e.jsx("code",{children:"th:text"}),", ",e.jsx("code",{children:"th:src"})," i ",e.jsx("code",{children:"th:action"})," de Thymeleaf"]}),e.jsxs("li",{children:["Veure ",e.jsx("strong",{children:"MVC en acció"}),": Model / Controller / View separats"]})]})}),e.jsx(y,{title:"Abans de començar: Què és Maven?"}),e.jsx(m,{variant:"explanation",title:"Maven = la llista de la compra del projecte",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Quan descarregueu el projecte, dins veureu un fitxer anomenat",e.jsx("code",{children:" pom.xml"}),". És una peça clau i val la pena saber què és."]}),e.jsxs("p",{style:{marginTop:"8px"},children:[e.jsx("strong",{children:"Maven"})," és l'eina que gestiona el projecte Java. Imagineu-lo com una ",e.jsx("strong",{children:"llista de la compra"}),": el fitxer",e.jsx("code",{children:" pom.xml"})," diu quines llibreries necessita l'aplicació (Spring Web, Thymeleaf...) i com compilar-la. Maven llegeix la llista i descarrega automàticament tot el que fa falta d'internet."]}),e.jsxs("p",{style:{marginTop:"8px"},children:['Quan al pas següent marquem "Spring Web" i "Thymeleaf" a Spring Initializr, el que estem fent és ',e.jsx("strong",{children:"afegir entrades a aquesta llista"}),". No haureu de tocar ",e.jsx("code",{children:"pom.xml"})," a mà: Initializr el generarà per nosaltres."]})]})}),e.jsx(g,{label:"pom.xml — així queda la secció de dependències",code:fw}),e.jsx(m,{variant:"info",title:"Resumint",children:e.jsxs("p",{children:["Per a nosaltres, Maven i ",e.jsx("code",{children:"pom.xml"}),` són "la part que s'encarrega de les llibreries i de compilar". A la vida real hi ha molt més (plugins, fases, repositoris...), però de moment amb aquesta idea en tenim prou.`]})}),e.jsx(y,{title:"Pas 1: Crear el Projecte"}),e.jsx(m,{variant:"info",children:e.jsxs("p",{children:["Ves a ",e.jsx("strong",{children:"start.spring.io"})," i configura el projecte com es mostra. Les dependències són ",e.jsx("strong",{children:"Spring Web"})," (per rebre peticions) i",e.jsx("strong",{children:" Thymeleaf"})," (per les pàgines HTML)."]})}),e.jsx(g,{label:"Configuració a start.spring.io",code:hw}),e.jsx(m,{variant:"warning",title:"No necessitem dependència de sessió",children:e.jsxs("p",{children:[e.jsx("code",{children:"HttpSession"})," ve inclòs a ",e.jsx("strong",{children:"Spring Web"}),". No cal afegir res més. Ho veurem al Pas 5."]})}),e.jsx(y,{title:"Configuració inicial: application.properties"}),e.jsx(m,{variant:"explanation",title:"Un petit retoc abans de continuar",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Quan obriu el projecte a l'editor, dins de",e.jsx("code",{children:" src/main/resources/"})," hi ha un fitxer",e.jsx("code",{children:" application.properties"})," (de moment buit). És el lloc on configurem Spring: ports, bases de dades, idioma, etc. Per ara només hi afegirem ",e.jsx("strong",{children:"una línia"}),"."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Sense aquesta línia, quan als Pasos 6 i 7 modifiqueu els fitxers HTML i refresqueu el navegador... ",e.jsx("strong",{children:"no veureu els canvis!"}),"Thymeleaf guarda les plantilles en memòria i les reutilitza fins reiniciar l'aplicació. Frustrant."]})]})}),e.jsx(g,{label:"src/main/resources/application.properties",code:xw}),e.jsx(m,{variant:"info",title:"Què acabem de fer",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Hem dit a Thymeleaf: ",e.jsx("strong",{children:"no cachegis"})," les plantilles HTML. Cada cop que arribi una petició, torna a llegir el fitxer del disc. Així qualsevol canvi a l'HTML es veu immediatament en refrescar el navegador."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["A producció (quan l'app està en un servidor real) es deixa cachejar per millor rendiment, però ",e.jsx("strong",{children:"durant el desenvolupament"})," aquesta línia estalvia moltes frustracions."]})]})}),e.jsx(y,{title:"Pas 2: El Model — Classe Animal"}),e.jsx(m,{variant:"success",title:"Animal com a classe normal (sense abstracció)",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsx("p",{children:"Recordeu les tres preguntes de decisió? Apliquem-les:"}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Comparteixen codi Gos i Gat?"})," No n'hi ha, tots funcionen igual en aquest joc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Puc escriure el codi del mètode al pare?"})," Sí, ",e.jsx("code",{children:"encertada()"})," compara strings i funciona per a tots."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Té sentit fer ",e.jsx("code",{children:"new Animal(...)"}),"?"]})," Sí, un animal és un concepte concret aquí."]})]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Per tant, ",e.jsx("strong",{children:"Animal és una classe normal"}),". Res d'abstractes ni herència innecessària. ",e.jsx("em",{children:"(Al pròxim projecte ja ampliarem.)"})]})]})}),e.jsx(g,{label:"Animal.java",code:gw,showLineNumbers:!0}),e.jsx(m,{variant:"explanation",title:"Per què Animal té un mètode encertada()?",children:e.jsxs("p",{children:["Podríem comparar l'string al Controller, però és millor que la",e.jsx("strong",{children:" lògica del domini"})," (saber si una resposta és correcta) estigui al ",e.jsx("strong",{children:"Model"}),". El Controller coordina, el Model decideix. Això és bona separació MVC."]})}),e.jsx(y,{title:"Pas 3: Les Imatges (Static Resources)"}),e.jsx(m,{variant:"info",title:"Com serveix fitxers estàtics Spring Boot?",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Tot el que poseu a ",e.jsx("code",{children:"src/main/resources/static/"})," s'exposa",e.jsx("strong",{children:" automàticament"})," al navegador. No cal configurar res."]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"static/images/gos.jpg"})," → ",e.jsx("code",{children:"http://localhost:8080/images/gos.jpg"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"static/css/estils.css"})," → ",e.jsx("code",{children:"http://localhost:8080/css/estils.css"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"static/js/script.js"})," → ",e.jsx("code",{children:"http://localhost:8080/js/script.js"})]})]})]})}),e.jsx(g,{label:"Organització de les imatges",code:jw}),e.jsxs(m,{variant:"warning",title:"D'on trec les imatges?",children:[e.jsxs("p",{children:["Descarrega imatges gratuïtes de ",e.jsx("strong",{children:"unsplash.com"}),",",e.jsx("strong",{children:" pexels.com"})," o ",e.jsx("strong",{children:"pixabay.com"}),". Busca els noms dels animals (gos, gat, elefant...) i guarda-les com ",e.jsx("code",{children:".jpg"})," amb el nom que has posat al Controller."]}),e.jsxs("p",{style:{marginTop:"8px"},children:[e.jsx("strong",{children:"Alternativa ràpida:"})," usa emojis com a imatges (fes captura i guarda com .png). No queda tan professional però funciona per provar."]})]}),e.jsx(y,{title:"Pas 4: Conèixer Bootstrap (preparació per als Pas 6 i 7)"}),e.jsx(m,{variant:"warning",title:"Aquest pas és només teoria!",children:e.jsx("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:e.jsxs("p",{children:["En aquest pas ",e.jsx("strong",{children:"NO escriureu codi encara"}),". És un pas de preparació: aprendre què és Bootstrap i com l'afegirem. La línia de Bootstrap l'escriureu als Pas 6 i 7, quan creem els fitxers HTML."]})})}),e.jsx(m,{variant:"success",title:"Què és Bootstrap?",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Bootstrap"})," és un framework CSS amb classes predefinides: botons bonics, targetes (cards), grid responsive, formularis ben estilitzats... En lloc d'escriure CSS propi, només afegim classes als elements HTML i ja tenen estil professional."]}),e.jsxs("p",{style:{marginTop:"8px"},children:[e.jsx("strong",{children:"S'activa amb UNA sola línia"})," dins del ",e.jsx("code",{children:"<head>"}),"de cada pàgina HTML. Aquesta línia és un enllaç CDN: no cal descarregar res, carrega el CSS directament des d'internet."]})]})}),e.jsx(g,{label:"La línia que afegirem a cada HTML (NO la copieu encara!)",code:vw}),e.jsx(m,{variant:"info",title:"On anirà exactament?",children:e.jsxs("p",{children:["Sempre dins del ",e.jsx("code",{children:"<head>"})," de la pàgina HTML, abans de",e.jsx("code",{children:" </head>"}),". Per que vegeu com quedarà el context, aquí teniu l'estructura que tindrà ",e.jsx("code",{children:"joc.html"})," al Pas 6:"]})}),e.jsx(g,{label:"Previsualització: així quedarà el <head> de joc.html",code:bw}),e.jsx(m,{variant:"explanation",title:"Quines classes de Bootstrap farem servir?",children:e.jsx("p",{children:"Aquestes són les classes que veureu al codi dels Pas 6 i 7. No cal memoritzar-les, simplement saber que existeixen i què fan:"})}),e.jsx(J,{headers:["Classe Bootstrap","Què fa","On la veurem"],rows:[{cells:["container","Contenidor centrat amb marges automàtics",'<div class="container">']},{cells:["row + col-md-8","Sistema de 12 columnes (responsive)","Per centrar la targeta del joc"]},{cells:["card / card-body / card-header","Targeta amb ombra i estructura","Contenidor principal del joc"]},{cells:["btn btn-primary","Botó blau principal",'Botó "Endevinar"']},{cells:["btn btn-outline-secondary","Botó amb contorn",'Botó "Saltar"']},{cells:["form-control / input-group","Formularis amb estil","Camp d'entrada de la resposta"]},{cells:["bg-light / bg-primary","Colors de fons predefinits","Fons de la pàgina i capçalera"]},{cells:["text-center / text-success","Alineació i colors de text","Missatges d'encert"]},{cells:["shadow / shadow-lg","Ombres per donar profunditat","Efecte visual de la targeta"]},{cells:["badge bg-warning","Etiqueta destacada","Mostrar la puntuació"]}]}),e.jsxs(m,{variant:"info",title:"Thymeleaf i Bootstrap: no competeixen, col·laboren",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Thymeleaf"})," posa les dades dinàmiques (",e.jsx("code",{children:'th:text="${nom}"'}),") i ",e.jsx("strong",{children:"Bootstrap"})," fa que tot es vegi bonic (",e.jsx("code",{children:'class="btn btn-primary"'}),"). Es fan servir junts a la mateixa línia sense cap problema:"]}),e.jsx(g,{code:`<button type="submit" th:text="\${textBoto}" class="btn btn-primary">
    Endevinar
</button>
<!--      Thymeleaf (text dinamic)       Bootstrap (estil) -->`})]}),e.jsx(m,{variant:"success",title:"Al pròxim pas escriureu codi de veritat",children:e.jsxs("p",{children:["Ara ja sabeu què és Bootstrap i com s'activa. Als ",e.jsx("strong",{children:"Pas 6 i 7"})," crearem els fitxers HTML i allí veureu ",e.jsx("strong",{children:"la línia de Bootstrap al seu lloc"}),", dins del ",e.jsx("code",{children:"<head>"}),", amb tot el context."]})}),e.jsx(y,{title:"Pas 5: El Controller — La Lògica del Joc"}),e.jsx(m,{variant:"info",title:"Què ha de fer el Controller?",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("ul",{style:{paddingLeft:"20px"},children:[e.jsxs("li",{children:["Pàgina principal (",e.jsx("code",{children:"GET /"}),"): trie un animal i mostra el joc"]}),e.jsxs("li",{children:["Rebre resposta (",e.jsx("code",{children:"POST /endevinar"}),"): comprova si ha encertat"]}),e.jsxs("li",{children:["Següent animal (",e.jsx("code",{children:"GET /seguent"}),"): reinicia l'animal actual"]}),e.jsxs("li",{children:["Reiniciar tot (",e.jsx("code",{children:"GET /reiniciar"}),"): esborra la puntuació"]})]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Utilitzem ",e.jsx("strong",{children:e.jsx("code",{children:"HttpSession"})}),` per recordar l'animal actual, els intents i la puntuació entre peticions. La sessió és una "motxilla" associada al navegador de l'usuari.`]})]})}),e.jsx(g,{label:"JocController.java",code:yw,showLineNumbers:!0}),e.jsx(m,{variant:"explanation",title:"Què és HttpSession?",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["HTTP és un protocol ",e.jsx("strong",{children:"sense memòria"}),": cada petició és independent. Però nosaltres necessitem recordar coses (quin animal, quants intents...). La ",e.jsx("code",{children:"HttpSession"})," és una motxilla associada al navegador: tot el que hi guardes amb ",e.jsx("code",{children:"setAttribute()"})," ho pots recuperar a la pròxima petició amb ",e.jsx("code",{children:"getAttribute()"}),"."]}),e.jsx("p",{style:{marginTop:"8px"},children:"Cada usuari que entra a la web té la seva pròpia sessió. Així dos alumnes jugant alhora no es barregen les puntuacions."})]})}),e.jsx(J,{headers:["Anotació / Mètode","Què fa"],rows:[{cells:['@GetMapping("/")',"Rep peticions GET a /"]},{cells:['@PostMapping("/endevinar")',"Rep peticions POST a /endevinar (formulari)"]},{cells:["@RequestParam String resposta",'Agafa el camp "resposta" del formulari']},{cells:["sessio.setAttribute(clau, valor)","Guarda una dada a la sessió"]},{cells:["sessio.getAttribute(clau)","Recupera una dada de la sessió"]},{cells:['return "redirect:/"',"Redirigeix el navegador a una altra URL"]},{cells:["sessio.invalidate()","Esborra tota la sessió (reinici total)"]}]}),e.jsx(y,{title:"Pas 6: La Vista Principal — joc.html"}),e.jsx(m,{variant:"info",title:"La pàgina on l'usuari juga",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Crea aquest fitxer: ",e.jsx("code",{children:"src/main/resources/templates/joc.html"})]}),e.jsx("p",{style:{marginTop:"8px"},children:"Mostra la imatge difuminada (més nítida cada intent), la llista de pistes revelades i el formulari per escriure la resposta."})]})}),e.jsx(m,{variant:"warning",title:"Ara sí: aquí va la línia de Bootstrap",children:e.jsxs("p",{children:["Fixa't a la línia ",e.jsx("strong",{children:"7"})," del codi següent: aquesta és",e.jsx("strong",{children:" exactament la línia de Bootstrap"})," que t'hem explicat al Pas 4. Ara la veus al seu lloc real, dins del ",e.jsx("code",{children:"<head>"}),"del fitxer HTML."]})}),e.jsx(g,{label:"joc.html (copia-ho tal qual al teu projecte)",code:Sw,showLineNumbers:!0}),e.jsx(m,{variant:"explanation",title:"Els atributs Thymeleaf clau d'aquesta vista",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:'th:src="@{/images/{img}(img=${animal.imatge})}"'})," — construeix la URL de la imatge dinàmicament"]}),e.jsxs("li",{children:[e.jsx("code",{children:`th:classappend="'blur-' + \${intents}"`})," — afegeix una classe CSS segons els intents (blur-0, blur-1...)"]}),e.jsxs("li",{children:[e.jsx("code",{children:'th:each="pista : ${pistesVisibles}"'})," — recorre la llista de pistes (com un for-each de Java)"]}),e.jsxs("li",{children:[e.jsx("code",{children:'th:action="@{/endevinar}"'})," — URL a on el formulari envia el POST"]})]})}),e.jsx(m,{variant:"warning",title:"El CSS del difuminat",children:e.jsxs("p",{children:["Les classes ",e.jsx("code",{children:".blur-0"})," a ",e.jsx("code",{children:".blur-3"})," aplican un filtre CSS ",e.jsx("code",{children:"blur()"})," amb diferents intensitats. Thymeleaf posa la classe correcta segons els intents de l'usuari: al començar (",e.jsx("code",{children:"intents=0"}),") la imatge està molt borrosa, i es va aclarint amb cada fallada."]})}),e.jsx(y,{title:"Pas 7: La Vista d'Encert — encertat.html"}),e.jsx(m,{variant:"info",title:"Pàgina de celebració",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Crea aquest fitxer: ",e.jsx("code",{children:"src/main/resources/templates/encertat.html"})]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Quan l'usuari encerta, mostrem la imatge nítida, els punts guanyats i botons per continuar. ",e.jsx("strong",{children:"Reutilitzem la mateixa imatge"}),", però sense filtre de difuminat."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Fixa't que torna a incloure la línia de Bootstrap al",e.jsx("code",{children:" <head>"}),": és imprescindible a ",e.jsx("strong",{children:"cada fitxer HTML"})," del projecte."]})]})}),e.jsx(g,{label:"encertat.html (copia-ho tal qual al teu projecte)",code:Ew,showLineNumbers:!0}),e.jsx(y,{title:"Estructura Final del Projecte"}),e.jsx(g,{label:"Com ha de quedar el projecte",code:Cw}),e.jsx(y,{title:"El Flux MVC Visible"}),e.jsx(m,{variant:"success",title:"Vegem com interactuen les tres capes",children:e.jsx("p",{children:"Aquí es veu claríssim com Model, View i Controller col·laboren quan l'usuari envia una resposta:"})}),e.jsx(g,{label:"El viatge d'una resposta",code:ww}),e.jsx(J,{headers:["Capa MVC","Fitxer","Responsabilitat"],rows:[{cells:["Model","Animal.java","Representa les dades i la lògica del domini (encertada?)"]},{cells:["View","joc.html, encertat.html","Com es mostra la informació a l'usuari"]},{cells:["Controller","JocController.java","Rep peticions, coordina Model i View, gestiona la sessió"]}]}),e.jsx(y,{title:"Executar el Projecte"}),e.jsx(m,{variant:"success",title:"Prova-ho!",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsx("p",{children:"Arranca l'aplicació i obre:"}),e.jsx("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:e.jsx("li",{children:e.jsx("code",{children:"http://localhost:8080"})})}),e.jsx("p",{style:{marginTop:"8px"},children:'Veuràs un animal misteriós difuminat. Escriu el teu intent, prem "Endevinar" i veuràs com cada fallada revela una pista i desdifumina la imatge. Quan encertis, celebració i següent animal!'})]})}),e.jsx(y,{title:"Reptes: Amplia el Joc"}),e.jsxs(me,{children:[e.jsxs(T,{title:"Fàcil",variant:"blue",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Afegeix més animals"})," a l'array del Controller."]}),e.jsxs("p",{style:{marginTop:"8px",fontStyle:"italic"},children:["Amplia la mida de ",e.jsx("code",{children:"new Animal[5]"})," i afegeix un nou bloc amb ",e.jsx("code",{children:"ArrayList"})," de pistes al constructor."]})]}),e.jsx(T,{title:"Mitjà",variant:"yellow",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Pantalla d'error personalitzada"}),": si l'usuari falla, mostrar una pàgina de feedback específica amb quin animal era (en lloc de redirigir)."]})}),e.jsx(T,{title:"Avançat",variant:"green",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Rànking de puntuacions"}),": guardar el nom del jugador i la puntuació. Mostrar els 5 millors al final."]})})]}),e.jsx(y,{title:"Repte per al Pròxim Dia: Afegir POO de Veritat"}),e.jsx(m,{variant:"explanation",title:"De Animal a ContingutAdivinar",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Al pròxim dia evolucionarem el joc per incloure ",e.jsx("strong",{children:"herència, polimorfisme i classes abstractes"}),". El joc deixarà de ser només d'animals i passarà a oferir ",e.jsx("strong",{children:"3 modes"})," a la pàgina principal:",e.jsx("strong",{children:" Animals, Cançons i Pel·lícules"}),"."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Aquí sí que tindrà sentit crear una classe abstracta: cada tipus mostra la pista de manera ",e.jsx("strong",{children:"diferent"})," (imatge difuminada, fragment d'àudio, fotograma d'una escena)."]})]})}),e.jsx(g,{label:"El que farem al pròxim projecte",code:Aw}),e.jsx(m,{variant:"success",title:"Per què aquí SÍ té sentit abstraure?",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsx("p",{children:"Apliquem les tres preguntes una altra vegada:"}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Comparteixen codi?"})," Sí (nom, pistes, ",e.jsx("code",{children:"encertada()"}),")."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Puc escriure ",e.jsx("code",{children:"mostrarPista()"})," al pare?"]})," NO. Una imatge difuminada, un àudio i un fotograma són coses totalment diferents. ",e.jsx("strong",{children:"→ abstracte!"})]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Té sentit ",e.jsx("code",{children:"new ContingutAdivinar()"}),"?"]}),' NO. Un "contingut genèric" no existeix. ',e.jsx("strong",{children:"→ classe abstracta!"})]})]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Aquí ",e.jsx("strong",{children:"l'abstracció es justifica sola"}),". No és una decoració: és la resposta natural al problema."]})]})}),e.jsx(y,{title:"Resum"}),e.jsx(m,{variant:"success",title:"Què has construit?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Una ",e.jsx("strong",{children:"aplicació web completa"})," amb Spring Boot, Thymeleaf i Bootstrap."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"MVC real"}),": Animal (Model), joc.html + encertat.html (View), JocController (Controller)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Imatges estàtiques"})," servides automàticament des de ",e.jsx("code",{children:"static/"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Formularis POST"})," amb ",e.jsx("code",{children:"@RequestParam"})," i redirecció."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Estat entre peticions"})," amb ",e.jsx("code",{children:"HttpSession"})," (animal actual, intents, puntuació)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Efectes visuals"}),": difuminat progressiu de la imatge segons intents."]}),e.jsxs("li",{children:["El pròxim dia: ampliarem amb ",e.jsx("strong",{children:"herència i classes abstractes"})," fent que tinguin sentit de veritat."]})]})})]})}const Rw="_wrapper_1jc92_1",Mw="_title_1jc92_17",Tw="_diagram_1jc92_35",Cl={wrapper:Rw,title:Mw,diagram:Tw},Pw="/programacio-0485LIVE/diagrams/";function _e({src:t,title:a}){return e.jsxs("div",{className:Cl.wrapper,children:[a&&e.jsx("div",{className:Cl.title,children:a}),e.jsx("div",{className:Cl.diagram,children:e.jsx("img",{src:`${Pw}${t}.svg`,alt:a||"Diagrama"})})]})}function Nw(){return e.jsxs("div",{children:[e.jsx(y,{title:"Diagrames de Classes UML"}),e.jsxs(m,{variant:"explanation",title:"Que es un diagrama de classes?",children:[e.jsxs("p",{children:["Un ",e.jsx("strong",{children:"diagrama de classes"})," es una representacio visual de les classes d'un sistema, els seus ",e.jsx("strong",{children:"atributs"}),", ",e.jsx("strong",{children:"metodes"})," i les",e.jsx("strong",{children:" relacions"}),` entre elles. Es el "planol" d'un sistema orientat a objectes: abans de programar, dissenyem l'estructura del codi amb aquest diagrama.`]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Forma part de l'",e.jsx("strong",{children:"UML"})," (Unified Modeling Language), un estandard internacional per modelar sistemes de programari."]})]}),e.jsx(y,{title:"Elements d'un diagrama de classes"}),e.jsx(J,{headers:["Element","Representacio","Descripcio"],rows:[{group:"Classe"},{cells:["Nom de la classe","Seccio superior del rectangle","El nom de la classe, en majuscula inicial (ex: Animal)"]},{cells:["Atributs","Seccio central del rectangle","Les variables de la classe amb el seu tipus (ex: -nom: String)"]},{cells:["Metodes","Seccio inferior del rectangle","Les funcions de la classe amb parametres i retorn (ex: +getNom(): String)"]},{group:"Visibilitat"},{cells:["+ public","Signe +","Accessible des de qualsevol classe"]},{cells:["- private","Signe -","Accessible nomes dins de la mateixa classe"]},{cells:["# protected","Signe #","Accessible des de la mateixa classe i les subclasses"]},{group:"Relacions"},{cells:["Herencia","--|> (fletxa buida)",`Una classe filla hereta d'una classe pare ("es un")`]},{cells:["Composicio","*-- (diamant ple)",'Una classe conte una altra; si el contenidor desapareix, el contingut tambe ("te un" fort)']},{cells:["Agregacio","o-- (diamant buit)",'Una classe conte una altra, pero poden existir independentment ("te un" debil)']},{cells:["Associacio","-- (linia simple)",'Dues classes es relacionen ("usa")']},{cells:["Dependencia","..> (linia discontinua)","Una classe usa temporalment una altra"]}]}),e.jsx(y,{title:"Diagrama basic: una classe"}),e.jsx(m,{variant:"info",title:"Estructura d'una classe",children:e.jsxs("p",{children:["Cada classe es representa com un ",e.jsx("strong",{children:"rectangle dividit en tres seccions"}),": el nom a dalt, els atributs al mig i els metodes a baix. Els simbols ",e.jsx("code",{children:"+"}),",",e.jsx("code",{children:" -"})," i ",e.jsx("code",{children:"#"})," indiquen la visibilitat."]})}),e.jsx(_e,{src:"classes-animal",title:"Classe Animal"}),e.jsx(y,{title:"Relacions entre classes"}),e.jsx(m,{variant:"info",children:e.jsx("p",{children:"Les relacions entre classes son la part mes important d'un diagrama de classes. Indiquen com les classes interactuen entre elles i quines dependencies existeixen."})}),e.jsx(J,{headers:["Relacio","Simbol UML","Significat","Exemple"],rows:[{cells:["Herencia","<|--",'"es un"',"Gos extends Animal: un Gos ES UN Animal"]},{cells:["Composicio","*--",'"te un" (fort)',"Cotxe conte Motor: si el Cotxe desapareix, el Motor tambe"]},{cells:["Agregacio","o--",'"te un" (debil)',"Equip conte Jugadors: els Jugadors existeixen sense l'Equip"]},{cells:["Associacio","-->",'"usa"',"Professor ensenya Alumne: es relacionen pero son independents"]},{cells:["Dependencia","..>",'"usa temporalment"',"Un metode rep un objecte com a parametre"]}]}),e.jsx(y,{title:"Exemple: Herencia"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["La ",e.jsx("strong",{children:"herencia"})," es representa amb una fletxa buida que apunta de la classe filla cap a la classe pare. En aquest exemple, ",e.jsx("code",{children:"Gos"})," i ",e.jsx("code",{children:"Gat"})," hereten de ",e.jsx("code",{children:"Animal"}),". Les classes filles tenen els seus propis metodes (",e.jsx("code",{children:"bordar()"})," i ",e.jsx("code",{children:"miolar()"}),") a mes dels heretats."]})}),e.jsx(_e,{src:"classes-herencia",title:"Herencia: Animal, Gos i Gat"}),e.jsx(y,{title:"Exemple complet: Sistema de Biblioteca"}),e.jsxs(m,{variant:"explanation",children:[e.jsx("p",{children:"Aquest diagrama mostra el sistema de biblioteca que ja coneixem del curs. Fixa't en:"}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Composicio"})," (",e.jsx("code",{children:"*--"}),"): la Biblioteca ",e.jsx("em",{children:"conte"})," Llibres. Si la Biblioteca desapareix, els seus Llibres tambe."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Associacio"})," (",e.jsx("code",{children:"-->"}),"): cada Llibre ",e.jsx("em",{children:"esta escrit per"})," un Autor. L'Autor existeix independentment del Llibre."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Multiplicitat"}),": ",e.jsx("code",{children:'"1"'})," i ",e.jsx("code",{children:'"0..*"'})," indiquen quants objectes participen en la relacio (una Biblioteca te de 0 a molts Llibres)."]})]})]}),e.jsx(_e,{src:"classes-biblioteca",title:"Sistema de Biblioteca"}),e.jsx(y,{title:"Exemple avancat: Sistema RPG"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Un exemple mes complex d'un sistema de gestio de campanyes RPG (joc de rol). Fixa't en com combina ",e.jsx("strong",{children:"herencia"})," (Character amb PlayableCharacter i NonPlayableCharacter), ",e.jsx("strong",{children:"composicio"})," (Campaign conte Sessions),",e.jsx("strong",{children:" enumeracions"})," (Availability) i ",e.jsx("strong",{children:"multiples associacions"}),"."]})}),e.jsx(_e,{src:"classes-rpg",title:"Sistema de Campanyes RPG"}),e.jsx(y,{title:"Com llegir un diagrama de classes"}),e.jsxs(me,{children:[e.jsx(T,{title:"1. Llegeix de dalt a baix",variant:"blue",children:e.jsxs("p",{children:["Comenca per les classes mes ",e.jsx("strong",{children:"generals"})," (les pare) i baixa cap a les mes ",e.jsx("strong",{children:"especifiques"})," (les filles). Aixo et dona una visio general de la jerarquia."]})}),e.jsx(T,{title:"2. Segueix les fletxes",variant:"yellow",children:e.jsxs("p",{children:["Les fletxes indiquen les ",e.jsx("strong",{children:"relacions"})," entre classes. Fixa't en el tipus de fletxa (herencia, composicio, associacio) per entendre com es connecten."]})}),e.jsx(T,{title:"3. Comprova les multiplicitats",variant:"green",children:e.jsxs("p",{children:["Els numeros a les linies (",e.jsx("code",{children:"1"}),", ",e.jsx("code",{children:"0..*"}),", ",e.jsx("code",{children:"1..*"}),") indiquen ",e.jsx("strong",{children:"quants objectes"})," participen en cada relacio. Per exemple,",e.jsx("code",{children:" 1"})," a ",e.jsx("code",{children:"0..*"}),' vol dir "un a molts".']})}),e.jsx(T,{title:"4. Identifica la classe central",variant:"pink",children:e.jsxs("p",{children:["Busca la classe amb ",e.jsx("strong",{children:"mes relacions"}),": sol ser la classe principal del sistema. En l'exemple de la biblioteca, ",e.jsx("code",{children:"Biblioteca"})," es el nucli perque gestiona tot el sistema."]})})]}),e.jsx(m,{variant:"success",title:"Resum",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Un ",e.jsx("strong",{children:"diagrama de classes"})," es el planol visual d'un sistema orientat a objectes."]}),e.jsxs("li",{children:["Cada classe es representa amb un ",e.jsx("strong",{children:"rectangle"})," amb tres seccions: nom, atributs i metodes."]}),e.jsxs("li",{children:["La ",e.jsx("strong",{children:"visibilitat"})," s'indica amb ",e.jsx("code",{children:"+"})," (public), ",e.jsx("code",{children:"-"})," (private) i ",e.jsx("code",{children:"#"})," (protected)."]}),e.jsxs("li",{children:["Les ",e.jsx("strong",{children:"relacions"})," principals son: herencia, composicio, agregacio, associacio i dependencia."]}),e.jsxs("li",{children:["Les ",e.jsx("strong",{children:"multiplicitats"})," indiquen quants objectes participen en una relacio."]}),e.jsxs("li",{children:["Sempre es recomanable ",e.jsx("strong",{children:"dissenyar el diagrama abans de programar"}),"."]})]})})]})}const kw=`public class Salutador {
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
}`,qw=`public class Main {
    public static void main(String[] args) {
        // 1. Crear l'objecte Salutador
        Salutador s = new Salutador("catala");

        // 2. Cridar el metode saludar()
        String missatge = s.saludar("Maria");

        // 3. Mostrar el resultat
        System.out.println(missatge);
        // Sortida: Hola, Maria!
    }
}`;function _w(){return e.jsxs("div",{children:[e.jsx(y,{title:"Diagrames de Sequencia UML"}),e.jsxs(m,{variant:"explanation",title:"Que es un diagrama de sequencia?",children:[e.jsxs("p",{children:["Un ",e.jsx("strong",{children:"diagrama de sequencia"})," mostra l'",e.jsx("strong",{children:"ordre"})," de les interaccions entre objectes al llarg del temps. L'eix vertical representa el",e.jsx("strong",{children:" temps"})," (de dalt a baix) i l'eix horitzontal representa els",e.jsx("strong",{children:" objectes"})," que participen en la interaccio."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Mentre que el diagrama de classes mostra l'",e.jsx("em",{children:"estructura"})," (que hi ha), el diagrama de sequencia mostra el ",e.jsx("em",{children:"comportament"})," (que passa i en quin ordre)."]})]}),e.jsx(y,{title:"Elements d'un diagrama de sequencia"}),e.jsx(J,{headers:["Element","Representacio","Descripcio"],rows:[{cells:["Actor / Participant","Rectangle a la part superior","Un objecte o classe que participa en la interaccio"]},{cells:["Linia de vida (lifeline)","Linia vertical discontinua","Representa l'existencia de l'objecte al llarg del temps"]},{cells:["Missatge sincron","Fletxa continua (->>) ","Una crida a un metode que espera resposta"]},{cells:["Missatge de resposta","Fletxa discontinua (-->>)","El valor de retorn d'una crida"]},{cells:["Caixa d'activacio","Rectangle prim sobre la linia de vida","Indica que l'objecte esta executant una operacio"]},{cells:["Nota (note)","Rectangle amb cantonada doblegada","Comentari o aclariment sobre la interaccio"]},{cells:["Fragment alt/else","Rectangle amb etiqueta","Representa una estructura condicional (if/else)"]},{cells:["Fragment loop","Rectangle amb etiqueta loop","Representa un bucle (while/for)"]}]}),e.jsx(y,{title:"Exemple basic: Saludar"}),e.jsxs(m,{variant:"info",children:[e.jsxs("p",{children:["Aquest diagrama mostra la interaccio entre el ",e.jsx("code",{children:"Main"})," i un objecte",e.jsx("code",{children:" Salutador"}),". Llegeix-lo de dalt a baix per seguir l'ordre de les crides:"]}),e.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"Main"})," crea un nou ",e.jsx("code",{children:"Salutador"}),` amb l'idioma "catala"`]}),e.jsxs("li",{children:[e.jsx("code",{children:"Main"})," crida el metode ",e.jsx("code",{children:'saludar("Maria")'})]}),e.jsxs("li",{children:[e.jsx("code",{children:"Salutador"}),' retorna el text "Hola, Maria!"']}),e.jsxs("li",{children:[e.jsx("code",{children:"Main"})," imprimeix el resultat per consola"]})]})]}),e.jsx(_e,{src:"seq-saludar",title:"Diagrama de sequencia: Saludar"}),e.jsx(y,{title:"Exemple: Prestar un llibre"}),e.jsxs(m,{variant:"explanation",children:[e.jsx("p",{children:"Aquest diagrama mostra la sequencia d'interaccions quan es vol prestar un llibre de la biblioteca. Fixa't com:"}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["El ",e.jsx("code",{children:"Main"})," primer ",e.jsx("strong",{children:"busca"})," el llibre i despres el ",e.jsx("strong",{children:"presta"}),"."]}),e.jsxs("li",{children:["La ",e.jsx("code",{children:"Biblioteca"})," delega l'operacio de prestec al propi ",e.jsx("code",{children:"Llibre"}),"."]}),e.jsxs("li",{children:["El ",e.jsx("code",{children:"Llibre"})," actualitza el seu estat intern (",e.jsx("code",{children:"disponible = false"}),")."]}),e.jsxs("li",{children:["La ",e.jsx("strong",{children:"nota"})," al final aclareix l'estat final del sistema."]})]})]}),e.jsx(_e,{src:"seq-biblioteca",title:"Diagrama de sequencia: Prestar un llibre"}),e.jsx(y,{title:"Exemple amb condicionals (alt/else)"}),e.jsx(m,{variant:"info",children:e.jsxs("p",{children:["Els diagrames de sequencia tambe poden representar ",e.jsx("strong",{children:"decisions condicionals"})," amb els fragments ",e.jsx("code",{children:"alt"})," (alternativa) i ",e.jsx("code",{children:"else"}),". Funcionen com un",e.jsx("code",{children:" if/else"})," en Java: segons la condicio, s'executa un cami o un altre."]})}),e.jsx(_e,{src:"seq-condicional",title:"Diagrama de sequencia: Divisio amb control d'error"}),e.jsx(y,{title:"Exemple avancat: Sistema HydroFlow"}),e.jsxs(m,{variant:"explanation",children:[e.jsxs("p",{children:["Un exemple professional amb ",e.jsx("strong",{children:"activacions"})," (barres verticals que mostren quan un objecte esta treballant) i un fragment ",e.jsx("strong",{children:"loop"})," (bucle). L'operador demana reomplir el tanc, el sistema comprova el nivell d'aigua i repeteix l'operacio fins que arriba al minim."]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"activate/deactivate"}),": mostren quan un objecte esta processant una crida"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"loop"}),": repeteix el bloc mentre ",e.jsx("code",{children:"waterLevel < MIN"})]}),e.jsxs("li",{children:["Les ",e.jsx("strong",{children:"fletxes numerades"})," indiquen l'ordre temporal"]})]})]}),e.jsx(_e,{src:"seq-hydroflow",title:"Sistema HydroFlow (amb loop i activacions)"}),e.jsx(m,{variant:"warning",title:"Fragments comuns",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"alt / else"}),": condicional (if/else). Nomes s'executa un dels camins."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"loop"}),": repeticio (for/while). El bloc es repeteix mentre es compleixi la condicio."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"opt"}),": opcional (if sense else). El bloc s'executa nomes si es compleix la condicio."]})]})}),e.jsx(y,{title:"Relacio amb el codi Java"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Cada ",e.jsx("strong",{children:"fletxa"})," del diagrama de sequencia correspon a una ",e.jsx("strong",{children:"linia de codi"})," Java. Vegem com es tradueix l'exemple del Salutador:"]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"Codi Java",variant:"blue",children:e.jsx(g,{code:qw,showLineNumbers:!0})}),e.jsx(U,{title:"Correspondencia amb el diagrama",variant:"good",children:e.jsx(J,{headers:["Linia de codi","Fletxa al diagrama"],rows:[{cells:['new Salutador("catala")','Main ->> Salutador: new Salutador("catala")']},{cells:['s.saludar("Maria")','Main ->> Salutador: saludar("Maria")']},{cells:['return "Hola, Maria!"','Salutador -->> Main: "Hola, Maria!"']},{cells:["System.out.println()","Main ->> Main: System.out.println()"]}]})})]}),e.jsx(g,{label:"Classe Salutador completa",code:kw,showLineNumbers:!0}),e.jsx(y,{title:"Quan usar diagrames de sequencia?"}),e.jsxs(me,{children:[e.jsx(T,{title:"Depurar fluxos complexos",variant:"blue",children:e.jsxs("p",{children:["Quan un programa te moltes classes que interactuen entre elles, un diagrama de sequencia ajuda a ",e.jsx("strong",{children:"visualitzar l'ordre"})," de les crides i trobar errors de logica."]})}),e.jsx(T,{title:"Documentar APIs",variant:"yellow",children:e.jsxs("p",{children:["Quan dissenyes un sistema amb multiples components, els diagrames de sequencia documenten ",e.jsx("strong",{children:"com es comuniquen"})," entre ells i quines dades s'intercanvien."]})}),e.jsx(T,{title:"Entendre codi existent",variant:"green",children:e.jsxs("p",{children:["Quan arribes a un projecte nou, dibuixar un diagrama de sequencia t'ajuda a",e.jsx("strong",{children:" comprendre el flux"})," del programa sense haver de llegir tot el codi."]})}),e.jsx(T,{title:"Planificar noves funcionalitats",variant:"pink",children:e.jsxs("p",{children:["Abans de programar una nova funcionalitat, dibuixa el diagrama de sequencia per",e.jsx("strong",{children:" planificar"})," quins objectes necessites i com interactuaran."]})})]}),e.jsx(m,{variant:"success",title:"Resum",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Un ",e.jsx("strong",{children:"diagrama de sequencia"})," mostra l'ordre de les interaccions entre objectes al llarg del temps."]}),e.jsxs("li",{children:["L'eix ",e.jsx("strong",{children:"vertical"})," representa el temps i l'eix ",e.jsx("strong",{children:"horitzontal"})," els objectes participants."]}),e.jsxs("li",{children:["Les ",e.jsx("strong",{children:"fletxes continues"})," representen crides a metodes; les ",e.jsx("strong",{children:"fletxes discontinues"})," representen valors de retorn."]}),e.jsxs("li",{children:["Les ",e.jsx("strong",{children:"activacions"})," mostren quan un objecte esta processant una operacio."]}),e.jsxs("li",{children:["Els fragments ",e.jsx("code",{children:"alt/else"}),", ",e.jsx("code",{children:"loop"})," i ",e.jsx("code",{children:"opt"})," permeten representar ",e.jsx("strong",{children:"condicionals i bucles"}),"."]}),e.jsxs("li",{children:["Cada fletxa del diagrama correspon a una ",e.jsx("strong",{children:"linia de codi"})," Java."]})]})})]})}function Ow(){return e.jsxs("div",{children:[e.jsx(y,{title:"Diagrames de flux"}),e.jsxs(m,{variant:"info",title:"Que es un diagrama de flux?",children:[e.jsxs("p",{children:["Un ",e.jsx("strong",{children:"diagrama de flux"})," representa el ",e.jsx("strong",{children:"flux d'un algorisme"})," o proces pas a pas, de manera visual. Es una eina essencial per ",e.jsx("strong",{children:"planificar abans de programar"}),", ja que ens permet veure l'estructura logica del programa sense escriure codi."]}),e.jsx("p",{style:{marginTop:"8px"},children:"Cada forma geometrica representa un tipus d'accio diferent, i les fletxes indiquen l'ordre d'execucio."})]}),e.jsx(y,{title:"Simbols estandard"}),e.jsx(J,{headers:["Forma","Nom","Significat"],rows:[{cells:["Oval / Rectangle arrodonit","Inici / Fi","Marca el punt d'inici o de finalitzacio del flux"]},{cells:["Rectangle","Proces / Accio","Representa una instruccio o operacio (assignacio, calcul...)"]},{cells:["Rombe (Diamond)","Decisio / Condicio","Representa una pregunta amb dues sortides: Si o No"]},{cells:["Parallelogram","Entrada / Sortida","Llegir dades de l'usuari o mostrar resultats per pantalla"]},{cells:["Fletxa","Flux / Direccio","Indica l'ordre en que s'executen les accions"]}]}),e.jsx(y,{title:"Exemple: Nombre parell o senar"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Un flux senzill amb una ",e.jsx("strong",{children:"decisio"}),": llegim un numero i comprovem si es parell o senar mitjancant l'operador modul (%)."]})}),e.jsx(_e,{src:"flux-parell-senar",title:"Flux: Nombre parell o senar"}),e.jsx(y,{title:"Exemple: Bucle for"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Un bucle ",e.jsx("strong",{children:"for"})," es representa amb una decisio que torna enrere. Mentre la condicio es certa, es processa l'element i s'incrementa el comptador. Quan la condicio es falsa, el flux surt del bucle."]})}),e.jsx(_e,{src:"flux-bucle-for",title:"Flux: Bucle for sobre un array"}),e.jsx(y,{title:"Exemple: Calcul de nota final"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Un exemple mes complex amb ",e.jsx("strong",{children:"multiples decisions encadenades"}),". Primer calculem la mitjana de tres notes i despres avaluem el resultat amb condicions niuades."]})}),e.jsx(_e,{src:"flux-nota-final",title:"Flux: Calcul de nota final"}),e.jsx(y,{title:"Exemple avancat: Sistema de Login"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Un diagrama mes realista que combina ",e.jsx("strong",{children:"bucles"}),", ",e.jsx("strong",{children:"decisions niuades"})," i",e.jsx("strong",{children:" multiples camins"}),". El sistema demana credencials, verifica l'usuari i la contrasenya, i bloqueja el compte despres de 3 intents fallits."]})}),e.jsx(_e,{src:"flux-login",title:"Flux: Sistema de Login amb control d'intents"}),e.jsx(y,{title:"Del diagrama al codi"}),e.jsx(m,{variant:"info",title:"Cada forma te el seu equivalent en Java",children:e.jsx("p",{children:"La gran utilitat dels diagrames de flux es que es poden traduir directament a codi. Cada simbol del diagrama correspon a una estructura del llenguatge de programacio."})}),e.jsx(J,{headers:["Simbol del diagrama","Estructura en Java"],rows:[{cells:["Oval (Inici/Fi)","Inici i fi del metode main()"]},{cells:["Rectangle (Proces)","Instruccio o assignacio (variable = valor;)"]},{cells:["Rombe (Decisio)","Estructura condicional (if / else if / else)"]},{cells:["Parallelogram (Entrada)","Scanner per llegir dades (scanner.nextInt())"]},{cells:["Parallelogram (Sortida)","System.out.println() per mostrar resultats"]},{cells:["Fletxa que torna enrere","Bucle (for, while)"]}]}),e.jsx(g,{label:"Codi Java equivalent al diagrama de nota final",showLineNumbers:!0,code:`import java.util.Scanner;

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
}`}),e.jsx(y,{title:"Bones practiques"}),e.jsxs(me,{children:[e.jsx(T,{title:"Inici i Fi clars",variant:"blue",children:e.jsxs("p",{children:["Sempre comenca amb un simbol d'",e.jsx("strong",{children:"Inici"})," i acaba amb un simbol de ",e.jsx("strong",{children:"Fi"}),". Tot flux ha de tenir un principi i un final ben definits."]})}),e.jsx(T,{title:"Un sol flux d'entrada",variant:"yellow",children:e.jsxs("p",{children:["Cada simbol ha de tenir ",e.jsx("strong",{children:"un sol flux d'entrada"}),". Pot tenir multiples sortides (com les decisions), pero nomes una entrada."]})}),e.jsx(T,{title:"Decisions amb 2 sortides",variant:"green",children:e.jsxs("p",{children:["Les decisions (rombes) han de tenir ",e.jsx("strong",{children:"exactament 2 sortides"}),": una per ",e.jsx("strong",{children:"Si"})," i una per ",e.jsx("strong",{children:"No"}),". Si necessites mes opcions, encadena multiples decisions."]})}),e.jsx(T,{title:"Direccio consistent",variant:"pink",children:e.jsxs("p",{children:["El flux ha d'anar de ",e.jsx("strong",{children:"dalt a baix"})," i d'",e.jsx("strong",{children:"esquerra a dreta"}),". Aixo fa que el diagrama sigui intuitiu i facil de llegir."]})})]}),e.jsx(m,{variant:"success",title:"Resum",children:e.jsx("p",{children:"Els diagrames de flux son una eina fonamental per planificar algorismes abans d'escriure codi. Cada forma geometrica representa un tipus d'accio (proces, decisio, entrada/sortida) i les fletxes marquen l'ordre d'execucio. Aprendre a llegir-los i crear-los es el primer pas per pensar com un programador."})})]})}function Iw(){return e.jsxs("div",{children:[e.jsx(y,{title:"Diagrames de casos d'us"}),e.jsxs(m,{variant:"info",title:"Que es un diagrama de casos d'us?",children:[e.jsxs("p",{children:["Un ",e.jsx("strong",{children:"diagrama de casos d'us"})," mostra ",e.jsx("strong",{children:"QUE"})," fa un sistema des de la perspectiva de l'usuari. ",e.jsx("strong",{children:"No"})," mostra COM ho fa (aixo ho fan altres diagrames com els de flux o els de sequencia)."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Identifica els ",e.jsx("strong",{children:"actors"})," (qui utilitza el sistema) i les seves",e.jsx("strong",{children:" interaccions"})," amb les funcionalitats del sistema. Es el primer diagrama que es fa quan s'analitzen els requisits d'un projecte."]})]}),e.jsx(y,{title:"Elements d'un diagrama de casos d'us"}),e.jsx(J,{headers:["Element","Representacio","Descripcio"],rows:[{cells:["Actor","Figura de pal (stick figure)","Qui utilitza el sistema: persona, altre sistema o dispositiu"]},{cells:["Cas d'us","Oval / El·lipse","Una funcionalitat que el sistema ofereix a l'actor"]},{cells:["Sistema","Rectangle gran","El limit del sistema; els casos d'us van dins, els actors fora"]},{group:"Tipus de relacions"},{cells:["Associacio","Linia continua","Connecta un actor amb un cas d'us que utilitza"]},{cells:["<<include>>","Fletxa discontinua amb <<include>>","Un cas d'us SEMPRE inclou un altre (obligatori)"]},{cells:["<<extend>>","Fletxa discontinua amb <<extend>>","Un cas d'us OPCIONALMENT amplia un altre (condicional)"]}]}),e.jsx(y,{title:"Exemple: Sistema de Biblioteca"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Vegem un exemple complet amb dos actors (",e.jsx("strong",{children:"Bibliotecari"})," i ",e.jsx("strong",{children:"Alumne"}),"). Fixa't que ",e.jsx("strong",{children:"Buscar llibre"})," es un cas d'us compartit entre els dos actors, i que ",e.jsx("strong",{children:"Prestar llibre"})," inclou obligatoriament",e.jsx("strong",{children:" Verificar disponibilitat"}),"."]})}),e.jsx(_e,{src:"casosus-biblioteca",title:"Casos d'us: Sistema de Biblioteca"}),e.jsx(y,{title:"Exemple: Calculadora"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Un exemple mes senzill amb un sol actor i una relacio",e.jsx("strong",{children:" <<extend>>"}),": la divisio pot provocar un error si es divideix per zero, pero no sempre. Per tant es una extensio condicional."]})}),e.jsx(_e,{src:"casosus-calculadora",title:"Casos d'us: Calculadora"}),e.jsx(y,{title:"Exemple complet: Restaurant"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Un exemple mes realista amb ",e.jsx("strong",{children:"tres actors"})," (Client, Cambrer, Administrador) i multiples relacions. Observa com cada actor te funcionalitats propies i algunes son compartides. Aquest tipus de diagrama es el que es faria al comenar a analitzar un sistema de gestio de restaurant."]})}),e.jsx(_e,{src:"casosus-restaurant",title:"Casos d'us: Sistema de Reserves Restaurant"}),e.jsx(y,{title:"Include vs Extend"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Diferenciar ",e.jsx("strong",{children:"<<include>>"})," i",e.jsx("strong",{children:" <<extend>>"})," es un dels conceptes clau dels diagrames de casos d'us. Vegem-ne la comparacio:"]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"<<include>> (Inclusio)",variant:"good",children:[e.jsxs("p",{style:{marginTop:"8px"},children:["El cas d'us inclos s'executa ",e.jsx("strong",{children:"SEMPRE"}),". Es una relacio ",e.jsx("strong",{children:"obligatoria"}),"."]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Prestar llibre"})," inclou ",e.jsx("strong",{children:"Verificar disponibilitat"})]}),e.jsx("li",{children:"No es pot prestar un llibre sense verificar primer si esta disponible"}),e.jsx("li",{children:"La verificacio passa CADA vegada"})]}),e.jsx(g,{code:`// En codi seria com:
void prestarLlibre() {
    verificarDisponibilitat(); // SEMPRE
    // ... prestar el llibre
}`})]}),e.jsxs(U,{title:"<<extend>> (Extensio)",variant:"bad",children:[e.jsxs("p",{style:{marginTop:"8px"},children:["El cas d'us estes s'executa ",e.jsx("strong",{children:"OPCIONALMENT"}),", nomes si es compleix una condicio. Es una relacio ",e.jsx("strong",{children:"condicional"}),"."]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Dividir"})," pot estendre ",e.jsx("strong",{children:"Mostrar error"})]}),e.jsx("li",{children:"L'error nomes apareix si el divisor es zero"}),e.jsx("li",{children:"La majoria de vegades NO passa"})]}),e.jsx(g,{code:`// En codi seria com:
void dividir(int a, int b) {
    if (b == 0) {
        mostrarError(); // NOMES si b == 0
        return;
    }
    System.out.println(a / b);
}`})]})]}),e.jsx(y,{title:"Per a que serveixen?"}),e.jsxs(me,{children:[e.jsx(T,{title:"Entendre requisits",variant:"blue",children:e.jsxs("p",{children:["Permeten ",e.jsx("strong",{children:"entendre els requisits"})," del sistema abans de comencar a programar. Defineixen clarament que ha de fer el sistema i qui ho utilitza."]})}),e.jsx(T,{title:"Comunicar-se amb el client",variant:"yellow",children:e.jsxs("p",{children:["Son un ",e.jsx("strong",{children:"llenguatge visual"})," que tant els programadors com els clients poden entendre. Faciliten la comunicacio i eviten malentesos sobre les funcionalitats."]})}),e.jsx(T,{title:"Planificar funcionalitats",variant:"green",children:e.jsxs("p",{children:["Ajuden a ",e.jsx("strong",{children:"planificar les funcionalitats"})," del sistema de manera organitzada. Permeten prioritzar que es desenvolupa primer i distribuir la feina entre l'equip."]})}),e.jsx(T,{title:"Base per a altres diagrames UML",variant:"pink",children:e.jsxs("p",{children:["Son la ",e.jsx("strong",{children:"base per als altres diagrames UML"}),": diagrames de classes, de sequencia, d'activitats... Cada cas d'us es pot detallar amb diagrames mes especifics."]})})]}),e.jsx(m,{variant:"success",title:"Resum",children:e.jsxs("p",{children:["Els diagrames de casos d'us mostren ",e.jsx("strong",{children:"QUE"})," fa un sistema des de la perspectiva dels usuaris. Identifiquen actors, funcionalitats i les relacions entre ells (associacio, include i extend). Son el primer pas per analitzar i planificar un projecte de programari, i serveixen com a pont de comunicacio entre l'equip de desenvolupament i el client."]})})]})}function Dw(){return e.jsxs("div",{children:[e.jsx(y,{title:"Com es construeix un projecte real, pas a pas"}),e.jsx(m,{variant:"info",title:"Objectiu d'aquesta pagina",children:e.jsxs("p",{children:["No nomes veurem ",e.jsx("strong",{children:"QUE"})," te un projecte real, sino",e.jsx("strong",{children:" COM es planteja des de zero"}),": que es fa primer, per que cada package existeix, que fa cada classe i com flueix l'execucio. Seguirem l'exemple d'un ",e.jsx("strong",{children:"Sistema de Reserves de Restaurant"}),"."]})}),e.jsx(y,{title:"Pas 1: Analitzar els requisits"}),e.jsxs(m,{variant:"explanation",title:"Abans de programar: entendre el PROBLEMA",children:[e.jsxs("p",{children:["El primer que fa un equip professional ",e.jsx("strong",{children:"NO es obrir l'IDE"}),". Es seure amb el client (el propietari del restaurant) i preguntar:",e.jsx("strong",{children:" que necessita exactament?"})," Aixo s'anomena",e.jsx("strong",{children:" analisi de requisits"}),"."]}),e.jsx("p",{style:{marginTop:"8px"},children:"Sense aquest pas, construiries una casa sense planols. El resultat seria un desastre."})]}),e.jsxs(m,{variant:"info",title:"Preguntes que fem al client",children:[e.jsx("p",{children:e.jsx("strong",{children:"Funcionalitats basiques:"})}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[e.jsx("li",{children:"Els clients han de poder fer reserves per telefon o web?"}),e.jsx("li",{children:"El cambrer ha de poder veure les reserves del dia?"}),e.jsx("li",{children:"L'administrador ha de poder gestionar el menu i els plats?"}),e.jsx("li",{children:"S'ha de poder fer comandes i associar-les a una taula?"}),e.jsx("li",{children:"Cal generar factures o tiquets?"})]}),e.jsx("p",{style:{marginTop:"12px"},children:e.jsx("strong",{children:"Informacio que necessitem guardar:"})}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[e.jsx("li",{children:"Dades dels clients: nom, telefon, email"}),e.jsx("li",{children:"Dades de les taules: numero, capacitat, si esta disponible"}),e.jsx("li",{children:"Dades de les reserves: qui, quan, quantes persones"}),e.jsx("li",{children:"Dades del menu: plats, preus, categories"}),e.jsx("li",{children:"Dades de les comandes: quins plats ha demanat cada taula"})]})]}),e.jsxs(m,{variant:"explanation",title:"El resultat: una llista clara de funcionalitats",children:[e.jsxs("p",{children:["Despres de parlar amb el client, tenim una llista de ",e.jsx("strong",{children:"funcionalitats"})," (requisits):"]}),e.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsx("li",{children:"Crear, consultar i cancel·lar reserves"}),e.jsx("li",{children:"Veure taules disponibles per a una data i nombre de persones"}),e.jsx("li",{children:"Gestionar el menu (afegir, modificar, eliminar plats)"}),e.jsx("li",{children:"Crear comandes associades a una taula"}),e.jsx("li",{children:"Calcular el total d'una comanda"})]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Amb aixo ja sabem ",e.jsx("strong",{children:"QUE"})," hem de construir. Ara hem de decidir ",e.jsx("strong",{children:"COM"}),"."]})]}),e.jsx(y,{title:"Pas 2: Identificar les entitats (les dades)"}),e.jsxs(m,{variant:"explanation",title:"Quins 'objectes del mon real' te el nostre sistema?",children:[e.jsxs("p",{children:["Mirem la llista de requisits i subratllem els ",e.jsx("strong",{children:"substantius"}),": restaurant, ",e.jsx("strong",{children:"taula"}),", ",e.jsx("strong",{children:"client"}),", ",e.jsx("strong",{children:"reserva"}),", menu, ",e.jsx("strong",{children:"plat"}),", ",e.jsx("strong",{children:"comanda"}),". Cada substantiu es una",e.jsx("strong",{children:" classe candidata"})," per al nostre model."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Aquesta tecnica s'anomena ",e.jsx("strong",{children:"analisi de substantius"})," i es el que fan els arquitectes de programari com a primer pas de disseny."]})]}),e.jsx(J,{headers:["Classe","Que representa","Atributs principals","Per que existeix"],rows:[{cells:["Restaurant","El restaurant sencer","nom, adreca, List<Taula>, Menu","Es el contenidor principal. Encapsula tot el sistema."]},{cells:["Taula","Una taula fisica del restaurant","numero, capacitat, ocupada","Necessitem saber si una taula pot acollir X persones i si esta lliure."]},{cells:["Client","Una persona que fa una reserva","nom, telefon, email","Cal guardar qui ha fet cada reserva per poder contactar-lo."]},{cells:["Reserva","Una reserva concreta","client, taula, data, persones, confirmada","Es la relacio entre un client i una taula en una data."]},{cells:["Plat","Un plat del menu","nom, preu, categoria, disponible","Cal saber que es pot demanar i a quin preu."]},{cells:["Menu","La carta del restaurant","List<Plat>","Agrupa tots els plats i permet filtrar-los per categoria."]},{cells:["Comanda","El que ha demanat una taula","taula, List<LiniaComanda>, tancada","Associa els plats demanats a una taula concreta."]},{cells:["LiniaComanda","Un plat dins d'una comanda","plat, quantitat","Necessitem saber QUANTS de cada plat s'han demanat."]}]}),e.jsx(m,{variant:"info",title:"Per que LiniaComanda i no directament una llista de plats?",children:e.jsxs("p",{children:["Si una taula demana 3 amanides, no volem guardar el plat 3 vegades. Guardem una ",e.jsx("code",{children:"LiniaComanda"}),` amb el plat i la quantitat. Es el mateix concepte que una linia d'un tiquet de compra: "3x Amanida Cesar = 28.50€". Aixo es un bon exemple de `,e.jsx("strong",{children:"disseny pensat"}),": cada classe modela exactament la realitat."]})}),e.jsx(y,{title:"Pas 3: Dissenyar les relacions entre classes"}),e.jsx(m,{variant:"explanation",children:e.jsxs("p",{children:["Ara que tenim les classes, necessitem saber ",e.jsx("strong",{children:"com es relacionen"}),". Un Restaurant ",e.jsx("strong",{children:"te"})," taules (composicio). Una Reserva ",e.jsx("strong",{children:"referencia"}),"un Client i una Taula (associacio). Dibuixem el diagrama de classes:"]})}),e.jsx(_e,{src:"projecte-classes",title:"Diagrama de classes: Sistema Restaurant"}),e.jsx(m,{variant:"info",title:"Com llegir el diagrama",children:e.jsxs("p",{children:["La fletxa amb rombe negre (",e.jsx("strong",{children:"composicio"}),') vol dir que Restaurant "conte" taules: si el restaurant desapareix, les taules tambe. La fletxa simple (',e.jsx("strong",{children:"associacio"}),') vol dir que Reserva "referencia" un Client, pero el Client existeix independentment.']})}),e.jsx(y,{title:"Pas 4: Organitzar en packages (separacio per capes)"}),e.jsx(m,{variant:"explanation",title:"Per que no posem totes les classes juntes?",children:e.jsxs("p",{children:["Podriem posar les 8 classes en una sola carpeta i funcionaria. Pero quan el projecte creixi a 50, 100 o 200 classes, seria un ",e.jsx("strong",{children:"caos"}),". Per aixo separem el codi en ",e.jsx("strong",{children:"packages"})," (carpetes) segons la seva",e.jsx("strong",{children:" responsabilitat"}),". Cada package te una funcio molt clara."]})}),e.jsx(g,{label:"Estructura del codi font (src/main/java)",showLineNumbers:!0,code:`cat/lasalle/restaurant/
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
    └── ComandaController.java`}),e.jsx(J,{headers:["Package","Que conte","Per que existeix","Exemple de responsabilitat"],rows:[{cells:["model/","Classes de dades (entitats)","Definir COM son les dades del sistema. Nomes atributs, getters, setters, constructors.","Taula sap si esta ocupada o no, pero NO sap com guardar-se a una BD."]},{cells:["repository/","Classes d'acces a base de dades","Separar el COM es guarden les dades del QUE son. Si canvies de MySQL a PostgreSQL, nomes toques aqui.","ReservaRepository sap fer save(), findById(), delete() a la BD."]},{cells:["service/","Classes amb logica de negoci","Aqui van les REGLES del restaurant. Separar-les facilita testejar-les sense necessitar BD ni API.","ServeiReserves comprova si hi ha taula disponible ABANS de crear la reserva."]},{cells:["controller/","Classes que reben peticions",`Son el "punt d'entrada" del sistema. Reben peticions HTTP del frontend i deleguen al service.`,"ReservaController rep POST /api/reserves i crida a ServeiReserves."]}]}),e.jsx(m,{variant:"info",title:"La regla d'or: cada capa nomes parla amb la seguent",children:e.jsxs("p",{children:["El ",e.jsx("strong",{children:"Controller"})," crida al ",e.jsx("strong",{children:"Service"}),". El Service crida al ",e.jsx("strong",{children:"Repository"}),". El Repository accedeix a la ",e.jsx("strong",{children:"Base de Dades"}),".",e.jsx("strong",{children:" Mai al reves!"})," Un Repository no crida mai a un Controller. Un Model no crida mai a un Service. Aquesta disciplina es el que fa que el codi sigui ",e.jsx("strong",{children:"mantenible"})," quan el projecte creix."]})}),e.jsx(y,{title:"Pas 5: Implementar cada classe"}),e.jsxs(m,{variant:"explanation",title:"Ordre d'implementacio: de baix cap a dalt",children:[e.jsxs("p",{children:["Es comenca pel ",e.jsx("strong",{children:"model"})," (les dades) i es va pujant cap al",e.jsx("strong",{children:" controller"})," (el punt d'entrada). Per que? Perque cada capa",e.jsx("strong",{children:" depèn"})," de la inferior: no pots escriure el Service sense tenir el Model, i no pots escriure el Controller sense tenir el Service."]}),e.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Primer:"})," model/ (les classes de dades)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Segon:"})," repository/ (com guardar/recuperar les dades)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tercer:"})," service/ (les regles de negoci)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Quart:"})," controller/ (el punt d'entrada)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Cinque:"})," RestaurantApp.java (el main que arrenca tot)"]})]})]}),e.jsx(y,{title:"5a. El Model: les classes de dades"}),e.jsx(m,{variant:"info",title:"Que fa cada classe del model i PER QUE",children:e.jsxs("p",{children:['Cada classe del model representa un "objecte del mon real". Nomes te:',e.jsx("strong",{children:" atributs privats"}),", ",e.jsx("strong",{children:"constructor"}),",",e.jsx("strong",{children:" getters/setters"})," i algun metode de logica simple. El Model ",e.jsx("strong",{children:"no sap res"})," de base de dades, ni d'API, ni de pantalles. Nomes modela les dades."]})}),e.jsx(g,{label:"model/Taula.java — Representa una taula fisica",showLineNumbers:!0,code:`public class Taula {
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
}`}),e.jsx(m,{variant:"explanation",title:"Per que el numero no te setter?",children:e.jsxs("p",{children:["Fixa't que ",e.jsx("code",{children:"numero"})," no te ",e.jsx("code",{children:"setNumero()"}),". Una taula del restaurant sempre sera la taula 5 o la taula 12: el numero no canvia. Aixo es ",e.jsx("strong",{children:"disseny intencional"}),": si un atribut no ha de canviar, no li posem setter. Aixi cap part del codi pot canviar-lo per accident."]})}),e.jsx(g,{label:"model/Client.java — Una persona que fa una reserva",showLineNumbers:!0,code:`public class Client {
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
}`}),e.jsx(g,{label:"model/Reserva.java — La relacio entre client, taula i data",showLineNumbers:!0,code:`import java.util.Date;

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
}`}),e.jsx(g,{label:"model/Plat.java + model/LiniaComanda.java + model/Comanda.java",showLineNumbers:!0,code:`// --- Plat.java ---
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
}`}),e.jsx(y,{title:"5b. El Repository: acces a la base de dades"}),e.jsx(m,{variant:"info",title:"Per que un package separat per a la base de dades?",children:e.jsxs("p",{children:["Imagina que ara guardes les dades a ",e.jsx("strong",{children:"MySQL"})," i d'aqui un any vols canviar a ",e.jsx("strong",{children:"PostgreSQL"}),". Si l'acces a la BD esta repartit per tot el codi, hauries de tocar desenes de fitxers. Pero si esta tot dins de",e.jsx("code",{children:" repository/"}),", nomes toques ",e.jsx("strong",{children:"3 fitxers"}),". Aixo es el poder de la ",e.jsx("strong",{children:"separacio per capes"}),"."]})}),e.jsx(g,{label:"repository/ReservaRepository.java — CRUD de reserves",showLineNumbers:!0,code:`import java.util.List;

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
}`}),e.jsx(m,{variant:"explanation",title:"CRUD: les 4 operacions basiques",children:e.jsxs("p",{children:["Gairebe tots els repositorys fan les mateixes 4 operacions:",e.jsx("strong",{children:" C"}),"reate (save), ",e.jsx("strong",{children:"R"}),"ead (find),",e.jsx("strong",{children:" U"}),"pdate (save), ",e.jsx("strong",{children:"D"}),"elete (delete). Aixo s'anomena ",e.jsx("strong",{children:"CRUD"})," i es la base de qualsevol aplicacio que gestiona dades."]})}),e.jsx(y,{title:"5c. El Service: la logica de negoci"}),e.jsx(m,{variant:"info",title:"Per que les regles van al Service i NO al Model?",children:e.jsxs("p",{children:["El Model (",e.jsx("code",{children:"Taula.java"}),") sap si esta ocupada, pero ",e.jsx("strong",{children:"no decideix"})," ","quina taula assignar a una reserva. Aquesta ",e.jsx("strong",{children:"decisio"})," (buscar taula lliure amb prou capacitat, crear la reserva, guardar-la) es ",e.jsx("strong",{children:"logica de negoci"})," ","i va al Service. Aixi el Model es manté simple i reutilitzable."]})}),e.jsx(g,{label:"service/ServeiReserves.java — Les REGLES del negoci",showLineNumbers:!0,code:`public class ServeiReserves {
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
}`}),e.jsxs(m,{variant:"explanation",title:"Fixa't en el flux del metode ferReserva()",children:[e.jsxs("p",{children:["Cada pas te un ",e.jsx("strong",{children:"per que"}),":"]}),e.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Buscar taula:"})," No podem assignar una taula sense comprovar que existeix i esta lliure."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Validar:"})," Si no n'hi ha, llançar un error clar (no retornar null silenciosament)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Crear reserva + ocupar taula:"})," Les dues coses van juntes: si crees la reserva pero no ocupes la taula, una altra reserva podria agafar-la."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Guardar a BD:"})," Si no guardem, al reiniciar l'aplicacio es perdria tot."]})]})]}),e.jsx(y,{title:"5d. El Controller: el punt d'entrada"}),e.jsx(m,{variant:"info",title:"Que fa el Controller i per que existeix?",children:e.jsxs("p",{children:["El Controller es el ",e.jsx("strong",{children:"punt d'entrada"})," del sistema. Rep les peticions del frontend (web o app mobil), les ",e.jsx("strong",{children:"tradueix"})," a crides al Service, i retorna la resposta. El Controller ",e.jsx("strong",{children:"NO"})," conte logica de negoci: nomes fa de pont. Aixi, si demà vols canviar l'API REST per una interficie de consola, nomes toques el Controller."]})}),e.jsx(g,{label:"controller/ReservaController.java — Rep peticions HTTP",showLineNumbers:!0,code:`@RestController
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
}`}),e.jsx(y,{title:"Pas 6: El flux d'execucio complet"}),e.jsx(m,{variant:"explanation",title:"Que passa quan un client fa una reserva?",children:e.jsxs("p",{children:[`Seguim el cami complet des que l'usuari prem "Reservar" a l'app fins que rep la confirmacio. Cada capa fa la seva feina i `,e.jsx("strong",{children:"delega"}),"a la seguent."]})}),e.jsx(_e,{src:"projecte-seq-reserva",title:"Sequencia: Fer una reserva"}),e.jsx(J,{headers:["Pas","Que passa","Qui ho fa","Per que es fa aixi"],rows:[{cells:["1",`L'usuari prem "Reservar" a l'app`,"Frontend (React/Android)","L'app envia POST /api/reserves amb les dades del formulari"]},{cells:["2","El Controller rep la peticio HTTP","ReservaController","Tradueix el JSON a objectes Java i crida al Service"]},{cells:["3","El Service busca una taula disponible","ServeiReserves","Aplica les REGLES: prou capacitat? Esta lliure?"]},{cells:["4","El Service crea la reserva","ServeiReserves","Crea l'objecte Reserva i marca la taula com a ocupada"]},{cells:["5","El Repository guarda a la BD","ReservaRepository","Executa INSERT INTO reserves... per persistir les dades"]},{cells:["6","La resposta torna pel mateix cami","Controller → Frontend","El Controller retorna la Reserva creada com a JSON"]}]}),e.jsxs(m,{variant:"info",title:"Per que tantes capes? No seria mes facil fer-ho tot al Controller?",children:[e.jsx("p",{children:"Si. En un projecte petit, fer-ho tot al Controller funciona. Pero imagina que:"}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Vols fer reserves tambe per ",e.jsx("strong",{children:"consola"}),", no nomes per web → Nomes crees un nou Controller, el Service ja existeix."]}),e.jsxs("li",{children:["Vols canviar la ",e.jsx("strong",{children:"base de dades"})," de MySQL a PostgreSQL → Nomes toques el Repository."]}),e.jsxs("li",{children:["Vols afegir una ",e.jsx("strong",{children:"regla nova"})," (ex: maxim 2 reserves per client) → Nomes toques el Service."]}),e.jsxs("li",{children:["Vols fer ",e.jsx("strong",{children:"tests"})," de la logica sense necessitar BD ni servidor → Testeja el Service directament."]})]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Cada capa es pot ",e.jsx("strong",{children:"canviar o testejar independentment"}),". En un equip de 50 persones, aixo es ",e.jsx("strong",{children:"imprescindible"}),"."]})]}),e.jsx(y,{title:"Pas 7: La resta del projecte (no nomes codi)"}),e.jsx(m,{variant:"explanation",title:"Un projecte no es nomes Java",children:e.jsx("p",{children:"A mes del codi font, un projecte professional te fitxers de configuracio, documentacio, tests i pipelines. Vegem l'estructura completa:"})}),e.jsx(g,{label:"Estructura completa del projecte (TOTS els fitxers)",showLineNumbers:!0,code:`restaurant-app/
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
└── docs/                           # Documentacio extra`}),e.jsx(J,{headers:["Fitxer","Que fa","Per que es important"],rows:[{group:"Configuracio del projecte"},{cells:["pom.xml","Llista de dependencies (Spring Boot, JUnit, driver BD) i com compilar",'Sense aixo, el projecte no compila. Es com la "llista de la compra"']},{cells:[".gitignore","Diu a Git quins fitxers ignorar: /target, .class, .env","Evita pujar fitxers compilats o secrets al repositori"]},{cells:["README.md","Documentacio: que fa el projecte, com instal·lar-lo, com executar-lo","El primer que llegeix qualsevol persona que arriba al projecte"]},{cells:["LICENSE","Llicencia legal del codi (MIT, Apache 2.0...)","Sense llicencia, legalment ningu pot usar el codi"]},{group:"Desplegament"},{cells:["Dockerfile","Instruccions per empaquetar l'app en un contenidor","Permet executar l'app en qualsevol servidor sense instal·lar res"]},{cells:["docker-compose.yml","Orquestra app + base de dades junts",'Amb un sol "docker-compose up" tens tot funcionant']},{group:"CI/CD"},{cells:[".github/workflows/ci.yml","Cada cop que fas push, executa tests automaticament","Si algu puja codi que trenca els tests, el sistema ho detecta"]},{group:"Recursos"},{cells:["application.properties","Configuracio: URL de la BD, port del servidor","MAI es puja al repo amb contrasenyes reals"]},{cells:["schema.sql","Estructura de les taules SQL de la BD","Defineix les taules: reserves, clients, plats, comandes..."]}]}),e.jsx(y,{title:"Arquitectura completa: Frontend + Backend + BD"}),e.jsx(m,{variant:"info",children:e.jsx("p",{children:"El projecte Java (backend) es nomes una part. L'aplicacio completa te tres capes que es comuniquen per HTTP:"})}),e.jsx(_e,{src:"projecte-arquitectura",title:"Arquitectura d'una aplicacio real"}),e.jsx(J,{headers:["Capa","Tecnologies tipiques","Que fa"],rows:[{cells:["Frontend (web)","React, Angular, Vue, HTML/CSS","La interficie visual que l'usuari veu al navegador"]},{cells:["Frontend (mobil)","Android (Kotlin/Java), iOS (Swift)","L'app que l'usuari descarrega al telefon"]},{cells:["Backend (API)","Spring Boot (Java), Node.js, Django","Processa peticions, aplica regles de negoci, accedeix a la BD"]},{cells:["Base de Dades","PostgreSQL, MySQL, MongoDB","Emmagatzema dades permanentment"]}]}),e.jsx(y,{title:"Com treballen equips de centenars de programadors?"}),e.jsx(m,{variant:"explanation",title:"El problema: centenars de persones tocant el mateix codi",children:e.jsxs("p",{children:["Imagineu un projecte com ",e.jsx("strong",{children:"java-design-patterns"})," a GitHub (93.800+ estrelles, centenars de contribuidors). Com eviten que tot peti? La resposta te quatre pilars: ",e.jsx("strong",{children:"Git amb branques"}),",",e.jsx("strong",{children:" Pull Requests"}),", ",e.jsx("strong",{children:"tests automatics"})," i",e.jsx("strong",{children:" CI/CD"}),"."]})}),e.jsx(y,{title:"1. Git Branching: cada un treballa en la seva branca"}),e.jsx(m,{variant:"info",children:e.jsxs("p",{children:[e.jsx("strong",{children:"NINGU"})," treballa directament sobre ",e.jsx("code",{children:"main"}),". Cada programador crea una ",e.jsx("strong",{children:"branca"})," per a cada funcionalitat. Aixi, els canvis d'una persona no afecten els altres fins que es revisen i s'aproven."]})}),e.jsx(_e,{src:"projecte-gitflow",title:"Flux de treball amb branques Git"}),e.jsx(J,{headers:["Branca","Per a que serveix","Qui hi treballa"],rows:[{cells:["main","Codi estable, llest per produccio. MAI es toca directament.","Ningu directament. Nomes rep merges aprovats."]},{cells:["develop","Integracio de funcionalitats en desenvolupament.","Es on es fusionen les feature branches aprovades."]},{cells:["feature/reserves","Una funcionalitat concreta.","Un programador o petit equip (2-3 persones)."]},{cells:["hotfix/bug-123","Corregir un error urgent en produccio.","El programador assignat al bug."]}]}),e.jsx(y,{title:"2. Pull Requests: revisio obligatoria"}),e.jsxs(m,{variant:"explanation",title:"Com funciona una Pull Request (PR)?",children:[e.jsxs("p",{children:["Quan un programador acaba, ",e.jsx("strong",{children:"no fusiona directament"}),". Obre una ",e.jsx("strong",{children:"Pull Request"})," a GitHub:",e.jsx("em",{children:' "He acabat, podeu revisar els meus canvis?"'})]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Un o dos companys ",e.jsx("strong",{children:"revisen el codi"})," linia per linia, suggereixen millores i, si tot esta be, ",e.jsx("strong",{children:"aproven"})," la PR. Nomes llavors es pot fusionar."]})]}),e.jsxs(me,{children:[e.jsx(T,{title:"El revisor comprova:",variant:"blue",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[e.jsx("li",{children:"El codi segueix les convencions de l'equip?"}),e.jsx("li",{children:"Hi ha tests per la nova funcionalitat?"}),e.jsx("li",{children:"El codi es clar i facil de mantenir?"}),e.jsx("li",{children:"No introdueix bugs ni vulnerabilitats?"})]})}),e.jsx(T,{title:"Regles habituals:",variant:"yellow",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[e.jsx("li",{children:"Minim 1-2 aprovacions per fusionar"}),e.jsx("li",{children:"L'autor NO pot aprovar la seva propia PR"}),e.jsx("li",{children:"Tots els tests han de passar"}),e.jsxs("li",{children:["La branca ",e.jsx("code",{children:"main"})," esta protegida"]})]})})]}),e.jsx(y,{title:"3. Tests automatics: la xarxa de seguretat"}),e.jsx(g,{label:"Exemple: Test del ServeiReserves",showLineNumbers:!0,code:`class ServeiReservesTest {
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
}`}),e.jsx(J,{headers:["Tipus de test","Que prova","Exemple"],rows:[{cells:["Unitari","Una sola classe o metode, aillat","TaulaTest: comprova que potAcollir() funciona correctament"]},{cells:["Integracio","Multiples classes juntes","ServeiReservesTest: comprova que ferReserva() crea una reserva i ocupa la taula"]},{cells:["End-to-End","Tot el sistema, de frontend a BD","Simula un usuari fent una reserva des de l'app"]}]}),e.jsx(y,{title:"4. CI/CD: automatitzar tot el proces"}),e.jsxs(m,{variant:"explanation",title:"Que es CI/CD?",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"CI"})," (Continuous Integration): cada cop que algu fa push, automaticament s'executen els tests. Si falla algun, tothom ho sap immediatament."]}),e.jsxs("p",{style:{marginTop:"8px"},children:[e.jsx("strong",{children:"CD"})," (Continuous Deployment): si tots els tests passen, l'aplicacio es desplega automaticament al servidor."]})]}),e.jsx(_e,{src:"projecte-cicd",title:"Pipeline CI/CD"}),e.jsx(g,{label:".github/workflows/ci.yml (GitHub Actions)",showLineNumbers:!0,code:`name: CI Pipeline

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
        run: mvn package -DskipTests`}),e.jsx(y,{title:"Resum: els 7 passos per construir un projecte"}),e.jsxs(me,{children:[e.jsx(T,{title:"1. Requisits",variant:"blue",children:e.jsxs("p",{children:["Parlar amb el client. Entendre ",e.jsx("strong",{children:"QUE"})," necessita. Fer una llista de funcionalitats."]})}),e.jsx(T,{title:"2. Entitats",variant:"yellow",children:e.jsxs("p",{children:['Identificar els "objectes del mon real" (substantius) que seran les nostres ',e.jsx("strong",{children:"classes"}),"."]})}),e.jsx(T,{title:"3. Relacions",variant:"green",children:e.jsxs("p",{children:["Dibuixar el ",e.jsx("strong",{children:"diagrama de classes"}),": qui conte qui, qui referencia qui."]})}),e.jsx(T,{title:"4. Packages",variant:"pink",children:e.jsxs("p",{children:["Organitzar en capes: ",e.jsx("strong",{children:"model → repository → service → controller"}),". Cada capa te una responsabilitat."]})}),e.jsx(T,{title:"5. Implementar",variant:"blue",children:e.jsx("p",{children:"Codi de baix a dalt: primer Model, despres Repository, despres Service, finalment Controller."})}),e.jsx(T,{title:"6. Tests",variant:"yellow",children:e.jsxs("p",{children:["Escriure tests per cada capa. Verificar que les ",e.jsx("strong",{children:"regles de negoci"})," funcionen correctament."]})}),e.jsx(T,{title:"7. Configuracio",variant:"green",children:e.jsxs("p",{children:["Afegir pom.xml, README, .gitignore, Dockerfile, CI/CD. Preparar per a ",e.jsx("strong",{children:"produccio"}),"."]})})]}),e.jsx(y,{title:"Projectes de referencia a GitHub"}),e.jsxs(oe,{children:[e.jsxs(U,{title:"java-design-patterns",variant:"blue",children:[e.jsx("p",{style:{marginTop:"8px"},children:e.jsx("code",{children:"github.com/iluwatar/java-design-patterns"})}),e.jsxs("p",{style:{marginTop:"8px"},children:[e.jsx("strong",{children:"93.800+ estrelles"})," - 195+ patrons de disseny en Java, cadascun amb tests, diagrames UML i documentacio. Patrons rellevants:",e.jsx("strong",{children:" Facade"}),", ",e.jsx("strong",{children:"Observer"}),",",e.jsx("strong",{children:" Strategy"}),", ",e.jsx("strong",{children:"Builder"}),"."]})]}),e.jsxs(U,{title:"Spring PetClinic",variant:"good",children:[e.jsx("p",{style:{marginTop:"8px"},children:e.jsx("code",{children:"github.com/spring-projects/spring-petclinic"})}),e.jsxs("p",{style:{marginTop:"8px"},children:["L'exemple oficial de ",e.jsx("strong",{children:"Spring Boot"}),": MVC complet amb controllers, services, repositories, templates HTML i base de dades."]})]})]}),e.jsx(m,{variant:"success",title:"La idea clau",children:e.jsxs("p",{children:["Construir un projecte real no es comencar a programar directament. Es",e.jsx("strong",{children:" analitzar"})," (que necessitem?), ",e.jsx("strong",{children:"dissenyar"}),"(quines classes i com es relacionen?), ",e.jsx("strong",{children:"organitzar"})," (cada package amb la seva responsabilitat) i ",e.jsx("strong",{children:"implementar"})," de baix cap a dalt. La separacio en capes (model → repository → service → controller) es el que permet que 50 programadors treballin al mateix projecte sense trepitjar-se, que el codi sigui testejable i que qualsevol canvi futur sigui facil de fer."]})})]})}function Fw(){return e.jsxs("div",{children:[e.jsx(y,{title:"Introduccio al patro MVC"}),e.jsx(m,{variant:"explanation",title:"El problema: tot en un sol lloc",children:e.jsxs("p",{children:["Quan els projectes creixen, tenir-ho tot dins de ",e.jsx("code",{children:"main()"})," o en una sola classe es fa ",e.jsx("strong",{children:"ingobernable"}),". Ja ho hem vist a la seccio de modularitat: el codi monolitic es dificil de llegir, mantenir i ampliar. El patro",e.jsx("strong",{children:" MVC"})," porta la modularitzacio al seguent nivell, donant-nos una estructura clara per organitzar qualsevol aplicacio."]})}),e.jsx(m,{variant:"info",title:"Que es MVC?",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Model-View-Controller"})," es un ",e.jsx("strong",{children:"patro"})," (no una biblioteca, no un framework) per organitzar el codi en ",e.jsx("strong",{children:"3 responsabilitats"})," ben definides. Es l'estandard en el desenvolupament web, aplicacions mobils i aplicacions d'escriptori. Gairebe tots els frameworks moderns es basen en aquesta idea."]})}),e.jsx(y,{title:"Les 3 parts de MVC"}),e.jsxs(me,{children:[e.jsxs(T,{title:"Model",variant:"blue",children:["Les ",e.jsx("strong",{children:"dades"})," i la ",e.jsx("strong",{children:"logica de negoci"}),". Son les classes que ja coneixeu: ",e.jsx("code",{children:"Alumne"}),", ",e.jsx("code",{children:"Restaurant"}),",",e.jsx("code",{children:" Taula"}),"... El Model no sap res de la interficie: nomes gestiona dades i regles."]}),e.jsxs(T,{title:"View (Vista)",variant:"yellow",children:["El que ",e.jsx("strong",{children:"veu l'usuari"}),". En Java de consola:",e.jsx("code",{children:" System.out.println"}),". En web: HTML. En Android: XML layouts. La Vista ",e.jsx("strong",{children:"mostra dades"})," pero ",e.jsx("strong",{children:"no les processa"})," ni pren decisions."]}),e.jsxs(T,{title:"Controller",variant:"green",children:["El ",e.jsx("strong",{children:`"director d'orquestra"`}),". Rep les accions de l'usuari, demana dades al Model i diu a la Vista que ha de mostrar. Es el pont que connecta les dades amb la presentacio."]})]}),e.jsx(y,{title:"Analogia: un restaurant"}),e.jsxs(m,{variant:"explanation",title:"MVC es com un restaurant",children:[e.jsx("p",{children:"Imagineu un restaurant per entendre MVC:"}),e.jsxs("p",{style:{marginTop:"8px"},children:["El ",e.jsx("strong",{children:"client"})," (Usuari) demana al ",e.jsx("strong",{children:"cambrer"})," (Controller). El cambrer porta la comanda a la ",e.jsx("strong",{children:"cuina"})," (Model). La cuina prepara el plat (processa les dades). El cambrer porta el plat al client i el",e.jsx("strong",{children:" plat servit"})," (Vista) mostra el resultat."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["El client ",e.jsx("strong",{children:"MAI"})," va directament a la cuina. De la mateixa manera, l'usuari mai accedeix directament al Model: sempre passa pel Controller."]})]}),e.jsx(y,{title:"Diagrama visual del flux MVC"}),e.jsx(_e,{src:"mvc-flux",title:"Flux del patro MVC"}),e.jsx(y,{title:"MVC aplicat al Restaurant"}),e.jsx(m,{variant:"info",children:e.jsx("p",{children:"Vegem com s'aplica MVC al nostre projecte de restaurant. Cada capa te la seva responsabilitat i es comunica nomes amb les capes adjacents."})}),e.jsx(_e,{src:"mvc-restaurant",title:"MVC aplicat al Sistema de Restaurant"}),e.jsx(y,{title:"Exemple conceptual: Gestio de reserves"}),e.jsx(g,{code:`restaurant-app/
├── model/
│   ├── Restaurant.java          # Dades: taules[], menu
│   ├── Taula.java               # Dades: numero, capacitat, ocupada
│   └── Reserva.java             # Dades: client, data, persones
├── vista/
│   └── VistaConsola.java        # Mostra menu, resultats
└── controlador/
    └── ControladorReserves.java # Connecta model i vista`,label:"Estructura de carpetes amb MVC",showLineNumbers:!0}),e.jsx(m,{variant:"info",title:"El Controller: el director d'orquestra",children:e.jsxs("p",{children:["El Controlador rep l'accio de l'usuari (via la Vista), opera amb el Model i torna a la Vista per mostrar resultats. Fixa't que ",e.jsx("strong",{children:"mai"}),"fa ",e.jsx("code",{children:"System.out.println"})," directament: aixo es feina de la Vista."]})}),e.jsx(g,{code:`public class ControladorReserves {
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
}`,label:"Controlador de Reserves",showLineNumbers:!0}),e.jsx(y,{title:"On trobaras MVC?"}),e.jsx(m,{variant:"info",title:"MVC es a tot arreu",children:e.jsx("p",{children:"Practicament tots els frameworks moderns utilitzen MVC o una variant. Aqui teniu exemples reals:"})}),e.jsx(J,{headers:["Plataforma","Tecnologia","Com aplica MVC"],rows:[{cells:["Java Web","Spring MVC (Spring Boot)","Controllers reben peticions HTTP, Models son les entitats, Vistes son plantilles HTML"]},{cells:["Android","Activities + Layouts + ViewModel","XML layouts (Vista), Activities/ViewModel (Controller), classes de dades (Model)"]},{cells:["Web Frontend","React, Angular, Vue","Components (Vista), estat/stores (Model), gestors d'events (Controller)"]},{cells:["Desktop","JavaFX (FXML + Controller)","Fitxers FXML (Vista), classes Controller, classes de dades (Model)"]},{cells:["Jocs","Unity (C#)","Usa una variant de MVC per separar logica de joc, renderitzat i input"]}]}),e.jsx(y,{title:"Connexio amb el que heu apres"}),e.jsxs(m,{variant:"explanation",title:"Ja teniu les peces!",children:[e.jsxs("p",{children:["Tot el que heu apres fins ara (classes, objectes, encapsulacio, packages, modularitat) son els ",e.jsx("strong",{children:"blocs de construccio"})," de MVC:"]}),e.jsxs("p",{style:{marginTop:"8px"},children:["El ",e.jsx("strong",{children:"Model"})," son les vostres classes amb encapsulacio (atributs privats, getters, setters). Els ",e.jsx("strong",{children:"packages"})," son la separacio en carpetes. La ",e.jsx("strong",{children:"modularitat"})," es el principi que cada classe fa una sola cosa. MVC simplement ",e.jsx("strong",{children:"formalitza el patro"}),": us diu on posar cada peca."]})]}),e.jsxs(m,{variant:"success",title:"La idea clau",children:[e.jsxs("p",{children:["MVC es una ",e.jsx("strong",{children:"manera de pensar"})," sobre l'organitzacio del codi, no una eina nova que cal aprendre. Ja coneixeu les peces: classes, objectes, encapsulacio, packages. MVC simplement us diu ",e.jsx("strong",{children:"on posar-les"}),": les dades al Model, la presentacio a la Vista i la coordinacio al Controller."]}),e.jsx("p",{style:{marginTop:"8px"},children:"Quan comenceu a treballar amb frameworks com Spring Boot o JavaFX, veureu que tot segueix aquest patro. Si enteneu MVC, enteneu l'arquitectura de qualsevol aplicacio moderna."})]})]})}const zw="_quizContainer_6jjjs_1",Bw="_progressBar_6jjjs_6",Uw="_progressDot_6jjjs_12",Gw="_done_6jjjs_20",Hw="_correct_6jjjs_24",$w="_wrong_6jjjs_28",Vw="_active_6jjjs_32",Qw="_questionCard_6jjjs_37",Jw="_questionNumber_6jjjs_56",Ww="_questionType_6jjjs_65",Kw="_questionText_6jjjs_78",Yw="_codeContext_6jjjs_87",Xw="_codeGap_6jjjs_103",Zw="_options_6jjjs_113",eA="_option_6jjjs_113",tA="_disabled_6jjjs_136",aA="_selected_6jjjs_142",rA="_optionLetter_6jjjs_162",nA="_optionCode_6jjjs_192",iA="_optionText_6jjjs_199",sA="_feedback_6jjjs_204",lA="_fadeIn_6jjjs_1",oA="_feedbackTitle_6jjjs_225",cA="_navRow_6jjjs_231",uA="_nextBtn_6jjjs_237",dA="_results_6jjjs_255",pA="_scoreCircle_6jjjs_260",mA="_great_6jjjs_273",hA="_good_6jjjs_279",fA="_low_6jjjs_285",xA="_scoreNumber_6jjjs_291",gA="_scoreLabel_6jjjs_296",jA="_resultsTitle_6jjjs_304",vA="_resultsSubtitle_6jjjs_311",bA="_resultsSummary_6jjjs_317",yA="_statBox_6jjjs_324",SA="_statNumber_6jjjs_328",EA="_green_6jjjs_333",CA="_red_6jjjs_334",wA="_statLabel_6jjjs_336",AA="_retryBtn_6jjjs_343",ie={quizContainer:zw,progressBar:Bw,progressDot:Uw,done:Gw,correct:Hw,wrong:$w,active:Vw,questionCard:Qw,questionNumber:Jw,questionType:Ww,questionText:Kw,codeContext:Yw,codeGap:Xw,options:Zw,option:eA,disabled:tA,selected:aA,optionLetter:rA,optionCode:nA,optionText:iA,feedback:sA,fadeIn:lA,feedbackTitle:oA,navRow:cA,nextBtn:uA,results:dA,scoreCircle:pA,great:mA,good:hA,low:fA,scoreNumber:xA,scoreLabel:gA,resultsTitle:jA,resultsSubtitle:vA,resultsSummary:bA,statBox:yA,statNumber:SA,green:EA,red:CA,statLabel:wA,retryBtn:AA},LA=["A","B","C","D"];function RA({questions:t,onFinish:a}){const[r,n]=A.useState(0),[i,s]=A.useState(null),[l,o]=A.useState(!1),[c,u]=A.useState([]),h=t[r],d=i===(h==null?void 0:h.correctIndex),x=r>=t.length,S=A.useCallback(E=>{l||(s(E),o(!0),u(f=>[...f,E===h.correctIndex]))},[l,h]),j=A.useCallback(()=>{s(null),o(!1),n(E=>E+1)},[]),b=A.useCallback(()=>{n(0),s(null),o(!1),u([])},[]);if(x){const E=c.filter(Boolean).length,f=t.length,p=Math.round(E/f*100),v=p>=80?"great":p>=50?"good":"low",R=p>=80?"Molt be! Domines MVC!":p>=50?"Bon treball! Repassa els errors.":"Cal repassar una mica mes. Torna-ho a intentar!";return e.jsxs("div",{className:ie.results,children:[e.jsxs("div",{className:`${ie.scoreCircle} ${ie[v]}`,children:[e.jsxs("span",{className:ie.scoreNumber,children:[p,"%"]}),e.jsx("span",{className:ie.scoreLabel,children:"encerts"})]}),e.jsx("h2",{className:ie.resultsTitle,children:R}),e.jsxs("p",{className:ie.resultsSubtitle,children:["Has encertat ",E," de ",f," preguntes"]}),e.jsxs("div",{className:ie.resultsSummary,children:[e.jsxs("div",{className:ie.statBox,children:[e.jsx("div",{className:`${ie.statNumber} ${ie.green}`,children:E}),e.jsx("div",{className:ie.statLabel,children:"Correctes"})]}),e.jsxs("div",{className:ie.statBox,children:[e.jsx("div",{className:`${ie.statNumber} ${ie.red}`,children:f-E}),e.jsx("div",{className:ie.statLabel,children:"Incorrectes"})]})]}),e.jsx("button",{className:ie.retryBtn,onClick:b,children:"Torna a intentar-ho"})]})}return e.jsxs("div",{className:ie.quizContainer,children:[e.jsx("div",{className:ie.progressBar,children:t.map((E,f)=>{let p=ie.progressDot;return f<c.length?p+=` ${c[f]?ie.correct:ie.wrong}`:f===r&&(p+=` ${ie.active}`),e.jsx("div",{className:p},f)})}),e.jsxs("div",{className:`${ie.questionCard} ${l?d?ie.correct:ie.wrong:""}`,children:[e.jsxs("div",{className:ie.questionNumber,children:["Pregunta ",r+1," de ",t.length,e.jsx("span",{className:ie.questionType,children:h.type})]}),e.jsx("div",{className:ie.questionText,children:h.question}),h.code&&e.jsx("div",{className:ie.codeContext,children:e.jsx("pre",{dangerouslySetInnerHTML:{__html:h.code}})}),e.jsx("div",{className:ie.options,children:h.options.map((E,f)=>{let p=`${ie.option}`;return l?(p+=` ${ie.disabled}`,f===h.correctIndex?p+=` ${ie.correct}`:f===i&&(p+=` ${ie.wrong}`)):f===i&&(p+=` ${ie.selected}`),e.jsxs("button",{className:p,onClick:()=>S(f),children:[e.jsx("span",{className:ie.optionLetter,children:LA[f]}),e.jsx("span",{className:E.isCode?ie.optionCode:ie.optionText,children:E.text})]},f)})}),l&&e.jsxs("div",{className:`${ie.feedback} ${d?ie.correct:ie.wrong}`,children:[e.jsx("div",{className:ie.feedbackTitle,children:d?"Correcte!":"Incorrecte!"}),e.jsx("div",{children:h.explanation})]}),l&&e.jsx("div",{className:ie.navRow,children:e.jsx("button",{className:ie.nextBtn,onClick:j,children:r<t.length-1?"Seguent pregunta":"Veure resultats"})})]})]})}const MA=[{type:"On va?",question:"A quina capa MVC pertany aquest codi?",code:`<span style="color:#ffd700">public class</span> <span style="color:#e5c07b">Alumne</span> {
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
}`,options:[{text:"demanarOpcio() — la Vista no hauria de llegir input",isCode:!1},{text:"processarComanda() — la Vista esta fent feina del Controller",isCode:!1},{text:"El Scanner — no es pot usar a la Vista",isCode:!1},{text:"No hi ha cap error",isCode:!1}],correctIndex:1,explanation:"La Vista pot llegir input (demanarOpcio es correcte), pero processarComanda() pren decisions i opera amb el Model. Aixo es feina del Controller! La Vista nomes mostra i recull dades."}];function TA(){return e.jsxs("div",{children:[e.jsx(y,{title:"Quiz: Domines el patro MVC?"}),e.jsx(m,{variant:"info",title:"Com funciona?",children:e.jsx("p",{children:"12 preguntes amb fragments de codi reals. Has d'identificar a quina capa MVC pertany cada codi, completar fragments o trobar errors. Al final veuràs la teva puntuacio. A veure qui treu un 100%!"})}),e.jsx(RA,{questions:MA})]})}function PA(){return e.jsxs("article",{children:[e.jsx(m,{variant:"warning",title:"Material del professorat",children:"Aquesta pàgina conté exercicis i solucions. No és visible per als alumnes."}),e.jsx(y,{title:"Exercicis Pràctics - POO"}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 1: Gestió d'una Agenda"}),e.jsxs(m,{variant:"explanation",children:[e.jsx("p",{children:"Crea un programa orientat a objectes per gestionar una agenda de contactes."}),e.jsx("p",{style:{marginTop:"10px"},children:e.jsx("strong",{children:"Requisits:"})}),e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsxs("li",{children:["Classe ",e.jsx("code",{children:"Contacte"})," amb atributs: nom, telefon, email (tots privats)"]}),e.jsx("li",{children:"Constructor que inicialitzi tots els atributs"}),e.jsx("li",{children:"Getters i setters per a cada atribut"}),e.jsxs("li",{children:["Mètode ",e.jsx("code",{children:"mostrarInfo()"})," que imprimeixi les dades del contacte"]}),e.jsxs("li",{children:["Classe ",e.jsx("code",{children:"Agenda"})," amb un array de Contacte i mètodes per afegir, buscar i eliminar"]}),e.jsxs("li",{children:["Classe ",e.jsx("code",{children:"TestAgenda"})," amb el main per provar-ho"]})]})]}),e.jsx(g,{label:"Solució - Contacte.java",code:`public class Contacte {
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
}`}),e.jsx(g,{label:"Solució - Agenda.java",code:`public class Agenda {
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
}`})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 2: Sistema de Productes"}),e.jsxs(m,{variant:"explanation",children:[e.jsx("p",{children:"Crea un sistema de gestió de productes per a una botiga."}),e.jsx("p",{style:{marginTop:"10px"},children:e.jsx("strong",{children:"Requisits:"})}),e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsxs("li",{children:["Classe ",e.jsx("code",{children:"Producte"})," amb: nom, preu, quantitat (privats)"]}),e.jsx("li",{children:"Constructor amb tots els atributs"}),e.jsx("li",{children:"Getters i setters"}),e.jsxs("li",{children:["Mètode ",e.jsx("code",{children:"calcularValorTotal()"})," que retorni preu * quantitat"]}),e.jsxs("li",{children:["Classe ",e.jsx("code",{children:"Botiga"})," amb array de Producte i mètodes per afegir, buscar per nom, i calcular el valor total de l'inventari"]})]})]}),e.jsx(g,{label:"Solució - Producte.java",code:`public class Producte {
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
}`})]})]})}function NA(){return e.jsxs("article",{children:[e.jsx(m,{variant:"warning",title:"Material del professorat",children:"Aquesta pàgina conté exercicis i solucions. No és visible per als alumnes."}),e.jsx(y,{title:"Exercicis Pràctics - Modularitat"}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 1: Gestió de Text"}),e.jsxs(m,{variant:"explanation",children:[e.jsx("p",{children:e.jsx("strong",{children:"Estructura:"})}),e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"utilitats.text.AnalitzadorText"})," - Classe amb mètodes d'anàlisi"]}),e.jsxs("li",{children:[e.jsx("code",{children:"programa.GestorText"})," - Programa principal"]})]}),e.jsx("p",{style:{marginTop:"10px"},children:e.jsx("strong",{children:"Mètodes a implementar:"})}),e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"comptarVocals(String text)"})," → int"]}),e.jsxs("li",{children:[e.jsx("code",{children:"comptarConsonants(String text)"})," → int"]}),e.jsxs("li",{children:[e.jsx("code",{children:"invertir(String text)"})," → String"]}),e.jsxs("li",{children:[e.jsx("code",{children:"esPalindrom(String text)"})," → boolean"]})]})]}),e.jsx(g,{label:"Solució - AnalitzadorText.java",code:`package utilitats.text;

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
}`})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 2: Conversió d'Unitats"}),e.jsxs(m,{variant:"explanation",children:[e.jsx("p",{children:e.jsx("strong",{children:"Estructura:"})}),e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsx("li",{children:e.jsx("code",{children:"utilitats.conversions.Temperatura"})}),e.jsx("li",{children:e.jsx("code",{children:"utilitats.conversions.Distancia"})}),e.jsx("li",{children:e.jsx("code",{children:"utilitats.conversions.Pes"})}),e.jsxs("li",{children:[e.jsx("code",{children:"programa.Conversor"})," - Programa principal amb menú"]})]})]}),e.jsx(g,{label:"Solució - Temperatura.java",code:`package utilitats.conversions;

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
}`}),e.jsx(g,{label:"Solució - Distancia.java",code:`package utilitats.conversions;

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
}`})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 3: Gestió de Contactes"}),e.jsxs(m,{variant:"explanation",children:[e.jsx("p",{children:e.jsx("strong",{children:"Estructura:"})}),e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsx("li",{children:e.jsx("code",{children:"utilitats.contactes.GestorContactes"})}),e.jsxs("li",{children:[e.jsx("code",{children:"programa.Agenda"})," - Programa principal"]})]}),e.jsxs("p",{style:{marginTop:"10px"},children:[e.jsx("strong",{children:"Funcionalitats:"})," Afegir, buscar, eliminar, llistar contactes. Utilitza arrays paral·lels (noms[], telefons[])."]})]}),e.jsx(g,{label:"Solució - GestorContactes.java",code:`package utilitats.contactes;

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
}`}),e.jsx(m,{variant:"info",title:"Checklist de lliurament",children:e.jsxs("ol",{style:{paddingLeft:"20px"},children:[e.jsx("li",{children:"Estructura de packages correcta"}),e.jsx("li",{children:"Imports correctes entre packages"}),e.jsx("li",{children:"Tots els mètodes implementats"}),e.jsx("li",{children:"Programa principal funcional amb menú"}),e.jsx("li",{children:"Codi comentat"}),e.jsx("li",{children:"Proves amb dades d'exemple"}),e.jsx("li",{children:"Gestió bàsica d'errors"})]})})]})]})}function kA(){return e.jsxs("article",{children:[e.jsx(m,{variant:"warning",title:"Material del professorat",children:"Aquesta pàgina conté la plantilla d'examen i la solució completa del Paraulògic. No és visible per als alumnes."}),e.jsx(y,{title:"Examen: Paraulògic"}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Descripció de l'examen"}),e.jsxs(m,{variant:"explanation",children:[e.jsx("p",{children:"El Paraulògic és un joc de paraules on l'alumne ha d'implementar un programa Java que:"}),e.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px"},children:[e.jsx("li",{children:"Té 7 lletres disponibles, una d'elles és la lletra central"}),e.jsx("li",{children:"L'usuari introdueix paraules que han de complir regles específiques"}),e.jsx("li",{children:"Cada paraula vàlida suma punts segons la seva longitud"}),e.jsx("li",{children:"Si la paraula utilitza totes les 7 lletres és un TUTI (+10 punts extra)"})]})]}),e.jsx("h4",{style:{color:"#2563a8",margin:"20px 0 12px"},children:"Sistema de puntuació"}),e.jsx(J,{headers:["Longitud","Punts"],rows:[{cells:["3 lletres","1 punt"]},{cells:["4 lletres","2 punts"]},{cells:["5 lletres","5 punts"]},{cells:["6 lletres","6 punts"]},{cells:["7+ lletres","= longitud"]},{cells:["TUTI (totes 7)","+10 punts extra"]}]})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Mètodes obligatoris (capçalera donada)"}),e.jsxs(m,{variant:"info",title:"Capçaleres que han d'implementar",children:[e.jsx("p",{style:{fontFamily:"monospace",marginTop:"8px"},children:e.jsx("code",{children:"public boolean esParaulaValida(String paraula, char[] lletres, char letraC)"})}),e.jsx("p",{style:{marginTop:"8px"},children:"Retorna true si la paraula:"}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[e.jsx("li",{children:"Té 3+ lletres"}),e.jsx("li",{children:"Conté la lletra central"}),e.jsx("li",{children:"Només utilitza lletres del conjunt"})]}),e.jsx("p",{style:{fontFamily:"monospace",marginTop:"16px"},children:e.jsx("code",{children:"public int calcularPuntuacio(String paraula, char[] lletres)"})}),e.jsx("p",{style:{marginTop:"8px"},children:"Retorna els punts segons la taula + bonus TUTI."})]})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Plantilla per a l'alumne"}),e.jsx(g,{label:"Paraulogic.java - Plantilla alumne",code:`import java.util.Scanner;

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
}`})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Solució completa"}),e.jsx(g,{label:"Solució completa - Paraulogic.java",showLineNumbers:!0,code:`import java.util.Scanner;

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
}`})]})]})}const qA=Fv([{path:"/",element:e.jsx(Mb,{}),children:[{index:!0,element:e.jsx(Gb,{})},{path:"basics/tipus-de-dades",element:e.jsx(fS,{})},{path:"basics/operadors",element:e.jsx(TS,{})},{path:"basics/sintaxi",element:e.jsx(PS,{})},{path:"basics/condicionals",element:e.jsx(NS,{})},{path:"basics/switch",element:e.jsx(kS,{})},{path:"basics/bucles",element:e.jsx(qS,{})},{path:"basics/modificadors-acces",element:e.jsx(_S,{})},{path:"arrays/arrays-1d",element:e.jsx(ZS,{})},{path:"arrays/arrays-2d",element:e.jsx(g0,{})},{path:"arrays/arraylist",element:e.jsx(Z0,{})},{path:"funcions/sense-parametres",element:e.jsx(j1,{})},{path:"funcions/amb-parametres",element:e.jsx(S1,{})},{path:"funcions/tipus-de-funcions",element:e.jsx(N1,{})},{path:"funcions/recursives",element:e.jsx(rE,{})},{path:"funcions/cridar-des-de-main",element:e.jsx(lE,{})},{path:"funcions/resum",element:e.jsx(cE,{})},{path:"classes/introduccio",element:e.jsx(uE,{})},{path:"classes/classe-vs-objecte",element:e.jsx(dE,{})},{path:"classes/modificadors",element:e.jsx(pE,{})},{path:"classes/constructors-this",element:e.jsx(mE,{})},{path:"classes/herencia",element:e.jsx(EE,{})},{path:"classes/polimorfisme",element:e.jsx(IE,{})},{path:"classes/classes-abstractes",element:e.jsx(eC,{})},{path:"classes/exemple-biblioteca",element:e.jsx(tC,{})},{path:"modularitat/introduccio",element:e.jsx(aC,{})},{path:"modularitat/monolitic-vs-modular",element:e.jsx(rC,{})},{path:"modularitat/packages",element:e.jsx(nC,{})},{path:"modularitat/exemple-calculadora",element:e.jsx(iC,{})},{path:"string-math/classe-string",element:e.jsx(SC,{})},{path:"string-math/classe-math",element:e.jsx(NC,{})},{path:"string-math/random-vs-math-random",element:e.jsx(GC,{})},{path:"java-modern/for-each",element:e.jsx(HC,{})},{path:"java-modern/operador-ternari",element:e.jsx($C,{})},{path:"java-modern/var-i-altres",element:e.jsx(VC,{})},{path:"mon-professional/com-treballen-els-devs",element:e.jsx(QC,{})},{path:"spring-boot/que-es",element:e.jsx(tw,{})},{path:"spring-boot/primer-projecte",element:e.jsx(mw,{})},{path:"spring-boot/endevina-animal",element:e.jsx(Lw,{})},{path:"analisi-disseny/diagrames-classes",element:e.jsx(Nw,{})},{path:"analisi-disseny/diagrames-sequencia",element:e.jsx(_w,{})},{path:"analisi-disseny/diagrames-flux",element:e.jsx(Ow,{})},{path:"analisi-disseny/casos-dus",element:e.jsx(Iw,{})},{path:"analisi-disseny/projecte-real",element:e.jsx(Dw,{})},{path:"analisi-disseny/introduccio-mvc",element:e.jsx(Fw,{})},{path:"activitats/quiz-mvc",element:e.jsx(TA,{})},{path:"professor/exercicis-poo",element:e.jsx(PA,{})},{path:"professor/exercicis-modularitat",element:e.jsx(NA,{})},{path:"professor/paraulogic",element:e.jsx(kA,{})}]}]);function _A(){return e.jsx(Kv,{router:qA})}Gm(document.getElementById("root")).render(e.jsx(A.StrictMode,{children:e.jsx(_A,{})}));
