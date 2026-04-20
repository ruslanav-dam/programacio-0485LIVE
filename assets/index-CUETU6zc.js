function Wh(t,r){for(var a=0;a<r.length;a++){const n=r[a];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(n,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();function Kh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Td={exports:{}},hs={},Nd={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zn=Symbol.for("react.element"),Yh=Symbol.for("react.portal"),Xh=Symbol.for("react.fragment"),Zh=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),tf=Symbol.for("react.provider"),rf=Symbol.for("react.context"),af=Symbol.for("react.forward_ref"),nf=Symbol.for("react.suspense"),sf=Symbol.for("react.memo"),lf=Symbol.for("react.lazy"),Bc=Symbol.iterator;function of(t){return t===null||typeof t!="object"?null:(t=Bc&&t[Bc]||t["@@iterator"],typeof t=="function"?t:null)}var kd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pd=Object.assign,_d={};function za(t,r,a){this.props=t,this.context=r,this.refs=_d,this.updater=a||kd}za.prototype.isReactComponent={};za.prototype.setState=function(t,r){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,r,"setState")};za.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qd(){}qd.prototype=za.prototype;function So(t,r,a){this.props=t,this.context=r,this.refs=_d,this.updater=a||kd}var Eo=So.prototype=new qd;Eo.constructor=So;Pd(Eo,za.prototype);Eo.isPureReactComponent=!0;var Uc=Array.isArray,Od=Object.prototype.hasOwnProperty,Co={current:null},Id={key:!0,ref:!0,__self:!0,__source:!0};function Dd(t,r,a){var n,i={},s=null,l=null;if(r!=null)for(n in r.ref!==void 0&&(l=r.ref),r.key!==void 0&&(s=""+r.key),r)Od.call(r,n)&&!Id.hasOwnProperty(n)&&(i[n]=r[n]);var o=arguments.length-2;if(o===1)i.children=a;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(n in o=t.defaultProps,o)i[n]===void 0&&(i[n]=o[n]);return{$$typeof:zn,type:t,key:s,ref:l,props:i,_owner:Co.current}}function cf(t,r){return{$$typeof:zn,type:t.type,key:r,ref:t.ref,props:t.props,_owner:t._owner}}function wo(t){return typeof t=="object"&&t!==null&&t.$$typeof===zn}function uf(t){var r={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return r[a]})}var Gc=/\/+/g;function zs(t,r){return typeof t=="object"&&t!==null&&t.key!=null?uf(""+t.key):r.toString(36)}function Ci(t,r,a,n,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case zn:case Yh:l=!0}}if(l)return l=t,i=i(l),t=n===""?"."+zs(l,0):n,Uc(i)?(a="",t!=null&&(a=t.replace(Gc,"$&/")+"/"),Ci(i,r,a,"",function(u){return u})):i!=null&&(wo(i)&&(i=cf(i,a+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Gc,"$&/")+"/")+t)),r.push(i)),1;if(l=0,n=n===""?".":n+":",Uc(t))for(var o=0;o<t.length;o++){s=t[o];var c=n+zs(s,o);l+=Ci(s,r,a,c,i)}else if(c=of(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=n+zs(s,o++),l+=Ci(s,r,a,c,i);else if(s==="object")throw r=String(t),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function ri(t,r,a){if(t==null)return t;var n=[],i=0;return Ci(t,n,"","",function(s){return r.call(a,s,i++)}),n}function df(t){if(t._status===-1){var r=t._result;r=r(),r.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=r)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},wi={transition:null},pf={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:wi,ReactCurrentOwner:Co};function Fd(){throw Error("act(...) is not supported in production builds of React.")}pe.Children={map:ri,forEach:function(t,r,a){ri(t,function(){r.apply(this,arguments)},a)},count:function(t){var r=0;return ri(t,function(){r++}),r},toArray:function(t){return ri(t,function(r){return r})||[]},only:function(t){if(!wo(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pe.Component=za;pe.Fragment=Xh;pe.Profiler=ef;pe.PureComponent=So;pe.StrictMode=Zh;pe.Suspense=nf;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pf;pe.act=Fd;pe.cloneElement=function(t,r,a){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=Pd({},t.props),i=t.key,s=t.ref,l=t._owner;if(r!=null){if(r.ref!==void 0&&(s=r.ref,l=Co.current),r.key!==void 0&&(i=""+r.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in r)Od.call(r,c)&&!Id.hasOwnProperty(c)&&(n[c]=r[c]===void 0&&o!==void 0?o[c]:r[c])}var c=arguments.length-2;if(c===1)n.children=a;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];n.children=o}return{$$typeof:zn,type:t.type,key:i,ref:s,props:n,_owner:l}};pe.createContext=function(t){return t={$$typeof:rf,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:tf,_context:t},t.Consumer=t};pe.createElement=Dd;pe.createFactory=function(t){var r=Dd.bind(null,t);return r.type=t,r};pe.createRef=function(){return{current:null}};pe.forwardRef=function(t){return{$$typeof:af,render:t}};pe.isValidElement=wo;pe.lazy=function(t){return{$$typeof:lf,_payload:{_status:-1,_result:t},_init:df}};pe.memo=function(t,r){return{$$typeof:sf,type:t,compare:r===void 0?null:r}};pe.startTransition=function(t){var r=wi.transition;wi.transition={};try{t()}finally{wi.transition=r}};pe.unstable_act=Fd;pe.useCallback=function(t,r){return lt.current.useCallback(t,r)};pe.useContext=function(t){return lt.current.useContext(t)};pe.useDebugValue=function(){};pe.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};pe.useEffect=function(t,r){return lt.current.useEffect(t,r)};pe.useId=function(){return lt.current.useId()};pe.useImperativeHandle=function(t,r,a){return lt.current.useImperativeHandle(t,r,a)};pe.useInsertionEffect=function(t,r){return lt.current.useInsertionEffect(t,r)};pe.useLayoutEffect=function(t,r){return lt.current.useLayoutEffect(t,r)};pe.useMemo=function(t,r){return lt.current.useMemo(t,r)};pe.useReducer=function(t,r,a){return lt.current.useReducer(t,r,a)};pe.useRef=function(t){return lt.current.useRef(t)};pe.useState=function(t){return lt.current.useState(t)};pe.useSyncExternalStore=function(t,r,a){return lt.current.useSyncExternalStore(t,r,a)};pe.useTransition=function(){return lt.current.useTransition()};pe.version="18.3.1";Nd.exports=pe;var A=Nd.exports;const mf=Kh(A),hf=Wh({__proto__:null,default:mf},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ff=A,xf=Symbol.for("react.element"),gf=Symbol.for("react.fragment"),vf=Object.prototype.hasOwnProperty,jf=ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bf={key:!0,ref:!0,__self:!0,__source:!0};function zd(t,r,a){var n,i={},s=null,l=null;a!==void 0&&(s=""+a),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(l=r.ref);for(n in r)vf.call(r,n)&&!bf.hasOwnProperty(n)&&(i[n]=r[n]);if(t&&t.defaultProps)for(n in r=t.defaultProps,r)i[n]===void 0&&(i[n]=r[n]);return{$$typeof:xf,type:t,key:s,ref:l,props:i,_owner:jf.current}}hs.Fragment=gf;hs.jsx=zd;hs.jsxs=zd;Td.exports=hs;var e=Td.exports,Bd={exports:{}},bt={},Ud={exports:{}},Gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function r(O,B){var G=O.length;O.push(B);e:for(;0<G;){var ae=G-1>>>1,de=O[ae];if(0<i(de,B))O[ae]=B,O[G]=de,G=ae;else break e}}function a(O){return O.length===0?null:O[0]}function n(O){if(O.length===0)return null;var B=O[0],G=O.pop();if(G!==B){O[0]=G;e:for(var ae=0,de=O.length,ye=de>>>1;ae<ye;){var Le=2*(ae+1)-1,Fe=O[Le],Ee=Le+1,$e=O[Ee];if(0>i(Fe,G))Ee<de&&0>i($e,Fe)?(O[ae]=$e,O[Ee]=G,ae=Ee):(O[ae]=Fe,O[Le]=G,ae=Le);else if(Ee<de&&0>i($e,G))O[ae]=$e,O[Ee]=G,ae=Ee;else break e}}return B}function i(O,B){var G=O.sortIndex-B.sortIndex;return G!==0?G:O.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,o=l.now();t.unstable_now=function(){return l.now()-o}}var c=[],u=[],m=1,d=null,x=3,y=!1,v=!1,b=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(O){for(var B=a(u);B!==null;){if(B.callback===null)n(u);else if(B.startTime<=O)n(u),B.sortIndex=B.expirationTime,r(c,B);else break;B=a(u)}}function R(O){if(b=!1,j(O),!v)if(a(c)!==null)v=!0,H(N);else{var B=a(u);B!==null&&re(R,B.startTime-O)}}function N(O,B){v=!1,b&&(b=!1,h(w),w=-1),y=!0;var G=x;try{for(j(B),d=a(c);d!==null&&(!(d.expirationTime>B)||O&&!le());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,x=d.priorityLevel;var de=ae(d.expirationTime<=B);B=t.unstable_now(),typeof de=="function"?d.callback=de:d===a(c)&&n(c),j(B)}else n(c);d=a(c)}if(d!==null)var ye=!0;else{var Le=a(u);Le!==null&&re(R,Le.startTime-B),ye=!1}return ye}finally{d=null,x=G,y=!1}}var P=!1,_=null,w=-1,$=5,F=-1;function le(){return!(t.unstable_now()-F<$)}function ee(){if(_!==null){var O=t.unstable_now();F=O;var B=!0;try{B=_(!0,O)}finally{B?ve():(P=!1,_=null)}}else P=!1}var ve;if(typeof p=="function")ve=function(){p(ee)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,q=te.port2;te.port1.onmessage=ee,ve=function(){q.postMessage(null)}}else ve=function(){E(ee,0)};function H(O){_=O,P||(P=!0,ve())}function re(O,B){w=E(function(){O(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,H(N))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_getFirstCallbackNode=function(){return a(c)},t.unstable_next=function(O){switch(x){case 1:case 2:case 3:var B=3;break;default:B=x}var G=x;x=B;try{return O()}finally{x=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var G=x;x=O;try{return B()}finally{x=G}},t.unstable_scheduleCallback=function(O,B,G){var ae=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ae+G:ae):G=ae,O){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=G+de,O={id:m++,callback:B,priorityLevel:O,startTime:G,expirationTime:de,sortIndex:-1},G>ae?(O.sortIndex=G,r(u,O),a(c)===null&&O===a(u)&&(b?(h(w),w=-1):b=!0,re(R,G-ae))):(O.sortIndex=de,r(c,O),v||y||(v=!0,H(N))),O},t.unstable_shouldYield=le,t.unstable_wrapCallback=function(O){var B=x;return function(){var G=x;x=B;try{return O.apply(this,arguments)}finally{x=G}}}})(Gd);Ud.exports=Gd;var yf=Ud.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf=A,jt=yf;function D(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hd=new Set,bn={};function na(t,r){Pa(t,r),Pa(t+"Capture",r)}function Pa(t,r){for(bn[t]=r,t=0;t<r.length;t++)Hd.add(r[t])}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wl=Object.prototype.hasOwnProperty,Ef=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hc={},$c={};function Cf(t){return wl.call($c,t)?!0:wl.call(Hc,t)?!1:Ef.test(t)?$c[t]=!0:(Hc[t]=!0,!1)}function wf(t,r,a,n){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Af(t,r,a,n){if(r===null||typeof r>"u"||wf(t,r,a,n))return!0;if(n)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function ot(t,r,a,n,i,s,l){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=s,this.removeEmptyString=l}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];Je[r]=new ot(r,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ao=/[\-:]([a-z])/g;function Lo(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(Ao,Lo);Je[r]=new ot(r,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(Ao,Lo);Je[r]=new ot(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(Ao,Lo);Je[r]=new ot(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new ot(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ro(t,r,a,n){var i=Je.hasOwnProperty(r)?Je[r]:null;(i!==null?i.type!==0:n||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Af(r,a,i,n)&&(a=null),n||i===null?Cf(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):i.mustUseProperty?t[i.propertyName]=a===null?i.type===3?!1:"":a:(r=i.attributeName,n=i.attributeNamespace,a===null?t.removeAttribute(r):(i=i.type,a=i===3||i===4&&a===!0?"":""+a,n?t.setAttributeNS(n,r,a):t.setAttribute(r,a))))}var mr=Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ai=Symbol.for("react.element"),ma=Symbol.for("react.portal"),ha=Symbol.for("react.fragment"),Mo=Symbol.for("react.strict_mode"),Al=Symbol.for("react.profiler"),$d=Symbol.for("react.provider"),Vd=Symbol.for("react.context"),To=Symbol.for("react.forward_ref"),Ll=Symbol.for("react.suspense"),Rl=Symbol.for("react.suspense_list"),No=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),Qd=Symbol.for("react.offscreen"),Vc=Symbol.iterator;function Va(t){return t===null||typeof t!="object"?null:(t=Vc&&t[Vc]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,Bs;function an(t){if(Bs===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);Bs=r&&r[1]||""}return`
`+Bs+t}var Us=!1;function Gs(t,r){if(!t||Us)return"";Us=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(u){var n=u}Reflect.construct(t,[],r)}else{try{r.call()}catch(u){n=u}t.call(r.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=n.stack.split(`
`),l=i.length-1,o=s.length-1;1<=l&&0<=o&&i[l]!==s[o];)o--;for(;1<=l&&0<=o;l--,o--)if(i[l]!==s[o]){if(l!==1||o!==1)do if(l--,o--,0>o||i[l]!==s[o]){var c=`
`+i[l].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=l&&0<=o);break}}}finally{Us=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?an(t):""}function Lf(t){switch(t.tag){case 5:return an(t.type);case 16:return an("Lazy");case 13:return an("Suspense");case 19:return an("SuspenseList");case 0:case 2:case 15:return t=Gs(t.type,!1),t;case 11:return t=Gs(t.type.render,!1),t;case 1:return t=Gs(t.type,!0),t;default:return""}}function Ml(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ha:return"Fragment";case ma:return"Portal";case Al:return"Profiler";case Mo:return"StrictMode";case Ll:return"Suspense";case Rl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Vd:return(t.displayName||"Context")+".Consumer";case $d:return(t._context.displayName||"Context")+".Provider";case To:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case No:return r=t.displayName||null,r!==null?r:Ml(t.type)||"Memo";case vr:r=t._payload,t=t._init;try{return Ml(t(r))}catch{}}return null}function Rf(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ml(r);case 8:return r===Mo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jd(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Mf(t){var r=Jd(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),n=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,s=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return i.call(this)},set:function(l){n=""+l,s.call(this,l)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function ni(t){t._valueTracker||(t._valueTracker=Mf(t))}function Wd(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),n="";return t&&(n=Jd(t)?t.checked?"true":"false":t.value),t=n,t!==a?(r.setValue(t),!0):!1}function Bi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tl(t,r){var a=r.checked;return ke({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Qc(t,r){var a=r.defaultValue==null?"":r.defaultValue,n=r.checked!=null?r.checked:r.defaultChecked;a=qr(r.value!=null?r.value:a),t._wrapperState={initialChecked:n,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Kd(t,r){r=r.checked,r!=null&&Ro(t,"checked",r,!1)}function Nl(t,r){Kd(t,r);var a=qr(r.value),n=r.type;if(a!=null)n==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?kl(t,r.type,a):r.hasOwnProperty("defaultValue")&&kl(t,r.type,qr(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Jc(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var n=r.type;if(!(n!=="submit"&&n!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function kl(t,r,a){(r!=="number"||Bi(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var nn=Array.isArray;function Aa(t,r,a,n){if(t=t.options,r){r={};for(var i=0;i<a.length;i++)r["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=r.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+qr(a),r=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}r!==null||t[i].disabled||(r=t[i])}r!==null&&(r.selected=!0)}}function Pl(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(D(91));return ke({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wc(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(D(92));if(nn(a)){if(1<a.length)throw Error(D(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:qr(a)}}function Yd(t,r){var a=qr(r.value),n=qr(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),n!=null&&(t.defaultValue=""+n)}function Kc(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Xd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _l(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Xd(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ii,Zd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,n,i){MSApp.execUnsafeLocalFunction(function(){return t(r,a,n,i)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(ii=ii||document.createElement("div"),ii.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ii.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function yn(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tf=["Webkit","ms","Moz","O"];Object.keys(un).forEach(function(t){Tf.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),un[r]=un[t]})});function ep(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||un.hasOwnProperty(t)&&un[t]?(""+r).trim():r+"px"}function tp(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var n=a.indexOf("--")===0,i=ep(a,r[a],n);a==="float"&&(a="cssFloat"),n?t.setProperty(a,i):t[a]=i}}var Nf=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ql(t,r){if(r){if(Nf[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(D(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(D(61))}if(r.style!=null&&typeof r.style!="object")throw Error(D(62))}}function Ol(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Il=null;function ko(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dl=null,La=null,Ra=null;function Yc(t){if(t=Gn(t)){if(typeof Dl!="function")throw Error(D(280));var r=t.stateNode;r&&(r=js(r),Dl(t.stateNode,t.type,r))}}function rp(t){La?Ra?Ra.push(t):Ra=[t]:La=t}function ap(){if(La){var t=La,r=Ra;if(Ra=La=null,Yc(t),r)for(t=0;t<r.length;t++)Yc(r[t])}}function np(t,r){return t(r)}function ip(){}var Hs=!1;function sp(t,r,a){if(Hs)return t(r,a);Hs=!0;try{return np(t,r,a)}finally{Hs=!1,(La!==null||Ra!==null)&&(ip(),ap())}}function Sn(t,r){var a=t.stateNode;if(a===null)return null;var n=js(a);if(n===null)return null;a=n[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(D(231,r,typeof a));return a}var Fl=!1;if(cr)try{var Qa={};Object.defineProperty(Qa,"passive",{get:function(){Fl=!0}}),window.addEventListener("test",Qa,Qa),window.removeEventListener("test",Qa,Qa)}catch{Fl=!1}function kf(t,r,a,n,i,s,l,o,c){var u=Array.prototype.slice.call(arguments,3);try{r.apply(a,u)}catch(m){this.onError(m)}}var dn=!1,Ui=null,Gi=!1,zl=null,Pf={onError:function(t){dn=!0,Ui=t}};function _f(t,r,a,n,i,s,l,o,c){dn=!1,Ui=null,kf.apply(Pf,arguments)}function qf(t,r,a,n,i,s,l,o,c){if(_f.apply(this,arguments),dn){if(dn){var u=Ui;dn=!1,Ui=null}else throw Error(D(198));Gi||(Gi=!0,zl=u)}}function ia(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function lp(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Xc(t){if(ia(t)!==t)throw Error(D(188))}function Of(t){var r=t.alternate;if(!r){if(r=ia(t),r===null)throw Error(D(188));return r!==t?null:t}for(var a=t,n=r;;){var i=a.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===a)return Xc(i),t;if(s===n)return Xc(i),r;s=s.sibling}throw Error(D(188))}if(a.return!==n.return)a=i,n=s;else{for(var l=!1,o=i.child;o;){if(o===a){l=!0,a=i,n=s;break}if(o===n){l=!0,n=i,a=s;break}o=o.sibling}if(!l){for(o=s.child;o;){if(o===a){l=!0,a=s,n=i;break}if(o===n){l=!0,n=s,a=i;break}o=o.sibling}if(!l)throw Error(D(189))}}if(a.alternate!==n)throw Error(D(190))}if(a.tag!==3)throw Error(D(188));return a.stateNode.current===a?t:r}function op(t){return t=Of(t),t!==null?cp(t):null}function cp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=cp(t);if(r!==null)return r;t=t.sibling}return null}var up=jt.unstable_scheduleCallback,Zc=jt.unstable_cancelCallback,If=jt.unstable_shouldYield,Df=jt.unstable_requestPaint,Oe=jt.unstable_now,Ff=jt.unstable_getCurrentPriorityLevel,Po=jt.unstable_ImmediatePriority,dp=jt.unstable_UserBlockingPriority,Hi=jt.unstable_NormalPriority,zf=jt.unstable_LowPriority,pp=jt.unstable_IdlePriority,fs=null,Qt=null;function Bf(t){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(fs,t,void 0,(t.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:Hf,Uf=Math.log,Gf=Math.LN2;function Hf(t){return t>>>=0,t===0?32:31-(Uf(t)/Gf|0)|0}var si=64,li=4194304;function sn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $i(t,r){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,s=t.pingedLanes,l=a&268435455;if(l!==0){var o=l&~i;o!==0?n=sn(o):(s&=l,s!==0&&(n=sn(s)))}else l=a&~i,l!==0?n=sn(l):s!==0&&(n=sn(s));if(n===0)return 0;if(r!==0&&r!==n&&!(r&i)&&(i=n&-n,s=r&-r,i>=s||i===16&&(s&4194240)!==0))return r;if(n&4&&(n|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=n;0<r;)a=31-Dt(r),i=1<<a,n|=t[a],r&=~i;return n}function $f(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vf(t,r){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var l=31-Dt(s),o=1<<l,c=i[l];c===-1?(!(o&a)||o&n)&&(i[l]=$f(o,r)):c<=r&&(t.expiredLanes|=o),s&=~o}}function Bl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mp(){var t=si;return si<<=1,!(si&4194240)&&(si=64),t}function $s(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function Bn(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Dt(r),t[r]=a}function Qf(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<a;){var i=31-Dt(a),s=1<<i;r[i]=0,n[i]=-1,t[i]=-1,a&=~s}}function _o(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var n=31-Dt(a),i=1<<n;i&r|t[n]&r&&(t[n]|=r),a&=~i}}var je=0;function hp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var fp,qo,xp,gp,vp,Ul=!1,oi=[],Lr=null,Rr=null,Mr=null,En=new Map,Cn=new Map,br=[],Jf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eu(t,r){switch(t){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":En.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(r.pointerId)}}function Ja(t,r,a,n,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:r,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},r!==null&&(r=Gn(r),r!==null&&qo(r)),t):(t.eventSystemFlags|=n,r=t.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),t)}function Wf(t,r,a,n,i){switch(r){case"focusin":return Lr=Ja(Lr,t,r,a,n,i),!0;case"dragenter":return Rr=Ja(Rr,t,r,a,n,i),!0;case"mouseover":return Mr=Ja(Mr,t,r,a,n,i),!0;case"pointerover":var s=i.pointerId;return En.set(s,Ja(En.get(s)||null,t,r,a,n,i)),!0;case"gotpointercapture":return s=i.pointerId,Cn.set(s,Ja(Cn.get(s)||null,t,r,a,n,i)),!0}return!1}function jp(t){var r=Qr(t.target);if(r!==null){var a=ia(r);if(a!==null){if(r=a.tag,r===13){if(r=lp(a),r!==null){t.blockedOn=r,vp(t.priority,function(){xp(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ai(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=Gl(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);Il=n,a.target.dispatchEvent(n),Il=null}else return r=Gn(a),r!==null&&qo(r),t.blockedOn=a,!1;r.shift()}return!0}function tu(t,r,a){Ai(t)&&a.delete(r)}function Kf(){Ul=!1,Lr!==null&&Ai(Lr)&&(Lr=null),Rr!==null&&Ai(Rr)&&(Rr=null),Mr!==null&&Ai(Mr)&&(Mr=null),En.forEach(tu),Cn.forEach(tu)}function Wa(t,r){t.blockedOn===r&&(t.blockedOn=null,Ul||(Ul=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,Kf)))}function wn(t){function r(i){return Wa(i,t)}if(0<oi.length){Wa(oi[0],t);for(var a=1;a<oi.length;a++){var n=oi[a];n.blockedOn===t&&(n.blockedOn=null)}}for(Lr!==null&&Wa(Lr,t),Rr!==null&&Wa(Rr,t),Mr!==null&&Wa(Mr,t),En.forEach(r),Cn.forEach(r),a=0;a<br.length;a++)n=br[a],n.blockedOn===t&&(n.blockedOn=null);for(;0<br.length&&(a=br[0],a.blockedOn===null);)jp(a),a.blockedOn===null&&br.shift()}var Ma=mr.ReactCurrentBatchConfig,Vi=!0;function Yf(t,r,a,n){var i=je,s=Ma.transition;Ma.transition=null;try{je=1,Oo(t,r,a,n)}finally{je=i,Ma.transition=s}}function Xf(t,r,a,n){var i=je,s=Ma.transition;Ma.transition=null;try{je=4,Oo(t,r,a,n)}finally{je=i,Ma.transition=s}}function Oo(t,r,a,n){if(Vi){var i=Gl(t,r,a,n);if(i===null)tl(t,r,n,Qi,a),eu(t,n);else if(Wf(i,t,r,a,n))n.stopPropagation();else if(eu(t,n),r&4&&-1<Jf.indexOf(t)){for(;i!==null;){var s=Gn(i);if(s!==null&&fp(s),s=Gl(t,r,a,n),s===null&&tl(t,r,n,Qi,a),s===i)break;i=s}i!==null&&n.stopPropagation()}else tl(t,r,n,null,a)}}var Qi=null;function Gl(t,r,a,n){if(Qi=null,t=ko(n),t=Qr(t),t!==null)if(r=ia(t),r===null)t=null;else if(a=r.tag,a===13){if(t=lp(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Qi=t,null}function bp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ff()){case Po:return 1;case dp:return 4;case Hi:case zf:return 16;case pp:return 536870912;default:return 16}default:return 16}}var Cr=null,Io=null,Li=null;function yp(){if(Li)return Li;var t,r=Io,a=r.length,n,i="value"in Cr?Cr.value:Cr.textContent,s=i.length;for(t=0;t<a&&r[t]===i[t];t++);var l=a-t;for(n=1;n<=l&&r[a-n]===i[s-n];n++);return Li=i.slice(t,1<n?1-n:void 0)}function Ri(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function ci(){return!0}function ru(){return!1}function yt(t){function r(a,n,i,s,l){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(a=t[o],this[o]=a?a(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ci:ru,this.isPropagationStopped=ru,this}return ke(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),r}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Do=yt(Ba),Un=ke({},Ba,{view:0,detail:0}),Zf=yt(Un),Vs,Qs,Ka,xs=ke({},Un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ka&&(Ka&&t.type==="mousemove"?(Vs=t.screenX-Ka.screenX,Qs=t.screenY-Ka.screenY):Qs=Vs=0,Ka=t),Vs)},movementY:function(t){return"movementY"in t?t.movementY:Qs}}),au=yt(xs),ex=ke({},xs,{dataTransfer:0}),tx=yt(ex),rx=ke({},Un,{relatedTarget:0}),Js=yt(rx),ax=ke({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),nx=yt(ax),ix=ke({},Ba,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sx=yt(ix),lx=ke({},Ba,{data:0}),nu=yt(lx),ox={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dx(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=ux[t])?!!r[t]:!1}function Fo(){return dx}var px=ke({},Un,{key:function(t){if(t.key){var r=ox[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Ri(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fo,charCode:function(t){return t.type==="keypress"?Ri(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ri(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mx=yt(px),hx=ke({},xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iu=yt(hx),fx=ke({},Un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fo}),xx=yt(fx),gx=ke({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),vx=yt(gx),jx=ke({},xs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bx=yt(jx),yx=[9,13,27,32],zo=cr&&"CompositionEvent"in window,pn=null;cr&&"documentMode"in document&&(pn=document.documentMode);var Sx=cr&&"TextEvent"in window&&!pn,Sp=cr&&(!zo||pn&&8<pn&&11>=pn),su=" ",lu=!1;function Ep(t,r){switch(t){case"keyup":return yx.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fa=!1;function Ex(t,r){switch(t){case"compositionend":return Cp(r);case"keypress":return r.which!==32?null:(lu=!0,su);case"textInput":return t=r.data,t===su&&lu?null:t;default:return null}}function Cx(t,r){if(fa)return t==="compositionend"||!zo&&Ep(t,r)?(t=yp(),Li=Io=Cr=null,fa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Sp&&r.locale!=="ko"?null:r.data;default:return null}}var wx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ou(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!wx[t.type]:r==="textarea"}function wp(t,r,a,n){rp(n),r=Ji(r,"onChange"),0<r.length&&(a=new Do("onChange","change",null,a,n),t.push({event:a,listeners:r}))}var mn=null,An=null;function Ax(t){Op(t,0)}function gs(t){var r=va(t);if(Wd(r))return t}function Lx(t,r){if(t==="change")return r}var Ap=!1;if(cr){var Ws;if(cr){var Ks="oninput"in document;if(!Ks){var cu=document.createElement("div");cu.setAttribute("oninput","return;"),Ks=typeof cu.oninput=="function"}Ws=Ks}else Ws=!1;Ap=Ws&&(!document.documentMode||9<document.documentMode)}function uu(){mn&&(mn.detachEvent("onpropertychange",Lp),An=mn=null)}function Lp(t){if(t.propertyName==="value"&&gs(An)){var r=[];wp(r,An,t,ko(t)),sp(Ax,r)}}function Rx(t,r,a){t==="focusin"?(uu(),mn=r,An=a,mn.attachEvent("onpropertychange",Lp)):t==="focusout"&&uu()}function Mx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gs(An)}function Tx(t,r){if(t==="click")return gs(r)}function Nx(t,r){if(t==="input"||t==="change")return gs(r)}function kx(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Bt=typeof Object.is=="function"?Object.is:kx;function Ln(t,r){if(Bt(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),n=Object.keys(r);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!wl.call(r,i)||!Bt(t[i],r[i]))return!1}return!0}function du(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pu(t,r){var a=du(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=r&&n>=r)return{node:a,offset:r-t};t=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=du(a)}}function Rp(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Rp(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Mp(){for(var t=window,r=Bi();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=Bi(t.document)}return r}function Bo(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Px(t){var r=Mp(),a=t.focusedElem,n=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&Rp(a.ownerDocument.documentElement,a)){if(n!==null&&Bo(a)){if(r=n.start,t=n.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var i=a.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!t.extend&&s>n&&(i=n,n=s,s=i),i=pu(a,s);var l=pu(a,n);i&&l&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),t.removeAllRanges(),s>n?(t.addRange(r),t.extend(l.node,l.offset)):(r.setEnd(l.node,l.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _x=cr&&"documentMode"in document&&11>=document.documentMode,xa=null,Hl=null,hn=null,$l=!1;function mu(t,r,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$l||xa==null||xa!==Bi(n)||(n=xa,"selectionStart"in n&&Bo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),hn&&Ln(hn,n)||(hn=n,n=Ji(Hl,"onSelect"),0<n.length&&(r=new Do("onSelect","select",null,r,a),t.push({event:r,listeners:n}),r.target=xa)))}function ui(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var ga={animationend:ui("Animation","AnimationEnd"),animationiteration:ui("Animation","AnimationIteration"),animationstart:ui("Animation","AnimationStart"),transitionend:ui("Transition","TransitionEnd")},Ys={},Tp={};cr&&(Tp=document.createElement("div").style,"AnimationEvent"in window||(delete ga.animationend.animation,delete ga.animationiteration.animation,delete ga.animationstart.animation),"TransitionEvent"in window||delete ga.transitionend.transition);function vs(t){if(Ys[t])return Ys[t];if(!ga[t])return t;var r=ga[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in Tp)return Ys[t]=r[a];return t}var Np=vs("animationend"),kp=vs("animationiteration"),Pp=vs("animationstart"),_p=vs("transitionend"),qp=new Map,hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,r){qp.set(t,r),na(r,[t])}for(var Xs=0;Xs<hu.length;Xs++){var Zs=hu[Xs],qx=Zs.toLowerCase(),Ox=Zs[0].toUpperCase()+Zs.slice(1);Ir(qx,"on"+Ox)}Ir(Np,"onAnimationEnd");Ir(kp,"onAnimationIteration");Ir(Pp,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(_p,"onTransitionEnd");Pa("onMouseEnter",["mouseout","mouseover"]);Pa("onMouseLeave",["mouseout","mouseover"]);Pa("onPointerEnter",["pointerout","pointerover"]);Pa("onPointerLeave",["pointerout","pointerover"]);na("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));na("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));na("onBeforeInput",["compositionend","keypress","textInput","paste"]);na("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));na("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));na("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ix=new Set("cancel close invalid load scroll toggle".split(" ").concat(ln));function fu(t,r,a){var n=t.type||"unknown-event";t.currentTarget=a,qf(n,r,void 0,t),t.currentTarget=null}function Op(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;e:{var s=void 0;if(r)for(var l=n.length-1;0<=l;l--){var o=n[l],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&i.isPropagationStopped())break e;fu(i,o,u),s=c}else for(l=0;l<n.length;l++){if(o=n[l],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&i.isPropagationStopped())break e;fu(i,o,u),s=c}}}if(Gi)throw t=zl,Gi=!1,zl=null,t}function Ce(t,r){var a=r[Kl];a===void 0&&(a=r[Kl]=new Set);var n=t+"__bubble";a.has(n)||(Ip(r,t,2,!1),a.add(n))}function el(t,r,a){var n=0;r&&(n|=4),Ip(a,t,n,r)}var di="_reactListening"+Math.random().toString(36).slice(2);function Rn(t){if(!t[di]){t[di]=!0,Hd.forEach(function(a){a!=="selectionchange"&&(Ix.has(a)||el(a,!1,t),el(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[di]||(r[di]=!0,el("selectionchange",!1,r))}}function Ip(t,r,a,n){switch(bp(r)){case 1:var i=Yf;break;case 4:i=Xf;break;default:i=Oo}a=i.bind(null,r,a,t),i=void 0,!Fl||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(r,a,{capture:!0,passive:i}):t.addEventListener(r,a,!0):i!==void 0?t.addEventListener(r,a,{passive:i}):t.addEventListener(r,a,!1)}function tl(t,r,a,n,i){var s=n;if(!(r&1)&&!(r&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var o=n.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(l===4)for(l=n.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;o!==null;){if(l=Qr(o),l===null)return;if(c=l.tag,c===5||c===6){n=s=l;continue e}o=o.parentNode}}n=n.return}sp(function(){var u=s,m=ko(a),d=[];e:{var x=qp.get(t);if(x!==void 0){var y=Do,v=t;switch(t){case"keypress":if(Ri(a)===0)break e;case"keydown":case"keyup":y=mx;break;case"focusin":v="focus",y=Js;break;case"focusout":v="blur",y=Js;break;case"beforeblur":case"afterblur":y=Js;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=xx;break;case Np:case kp:case Pp:y=nx;break;case _p:y=vx;break;case"scroll":y=Zf;break;case"wheel":y=bx;break;case"copy":case"cut":case"paste":y=sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=iu}var b=(r&4)!==0,E=!b&&t==="scroll",h=b?x!==null?x+"Capture":null:x;b=[];for(var p=u,j;p!==null;){j=p;var R=j.stateNode;if(j.tag===5&&R!==null&&(j=R,h!==null&&(R=Sn(p,h),R!=null&&b.push(Mn(p,R,j)))),E)break;p=p.return}0<b.length&&(x=new y(x,v,null,a,m),d.push({event:x,listeners:b}))}}if(!(r&7)){e:{if(x=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",x&&a!==Il&&(v=a.relatedTarget||a.fromElement)&&(Qr(v)||v[ur]))break e;if((y||x)&&(x=m.window===m?m:(x=m.ownerDocument)?x.defaultView||x.parentWindow:window,y?(v=a.relatedTarget||a.toElement,y=u,v=v?Qr(v):null,v!==null&&(E=ia(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(b=au,R="onMouseLeave",h="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(b=iu,R="onPointerLeave",h="onPointerEnter",p="pointer"),E=y==null?x:va(y),j=v==null?x:va(v),x=new b(R,p+"leave",y,a,m),x.target=E,x.relatedTarget=j,R=null,Qr(m)===u&&(b=new b(h,p+"enter",v,a,m),b.target=j,b.relatedTarget=E,R=b),E=R,y&&v)t:{for(b=y,h=v,p=0,j=b;j;j=ua(j))p++;for(j=0,R=h;R;R=ua(R))j++;for(;0<p-j;)b=ua(b),p--;for(;0<j-p;)h=ua(h),j--;for(;p--;){if(b===h||h!==null&&b===h.alternate)break t;b=ua(b),h=ua(h)}b=null}else b=null;y!==null&&xu(d,x,y,b,!1),v!==null&&E!==null&&xu(d,E,v,b,!0)}}e:{if(x=u?va(u):window,y=x.nodeName&&x.nodeName.toLowerCase(),y==="select"||y==="input"&&x.type==="file")var N=Lx;else if(ou(x))if(Ap)N=Nx;else{N=Mx;var P=Rx}else(y=x.nodeName)&&y.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(N=Tx);if(N&&(N=N(t,u))){wp(d,N,a,m);break e}P&&P(t,x,u),t==="focusout"&&(P=x._wrapperState)&&P.controlled&&x.type==="number"&&kl(x,"number",x.value)}switch(P=u?va(u):window,t){case"focusin":(ou(P)||P.contentEditable==="true")&&(xa=P,Hl=u,hn=null);break;case"focusout":hn=Hl=xa=null;break;case"mousedown":$l=!0;break;case"contextmenu":case"mouseup":case"dragend":$l=!1,mu(d,a,m);break;case"selectionchange":if(_x)break;case"keydown":case"keyup":mu(d,a,m)}var _;if(zo)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else fa?Ep(t,a)&&(w="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(w="onCompositionStart");w&&(Sp&&a.locale!=="ko"&&(fa||w!=="onCompositionStart"?w==="onCompositionEnd"&&fa&&(_=yp()):(Cr=m,Io="value"in Cr?Cr.value:Cr.textContent,fa=!0)),P=Ji(u,w),0<P.length&&(w=new nu(w,t,null,a,m),d.push({event:w,listeners:P}),_?w.data=_:(_=Cp(a),_!==null&&(w.data=_)))),(_=Sx?Ex(t,a):Cx(t,a))&&(u=Ji(u,"onBeforeInput"),0<u.length&&(m=new nu("onBeforeInput","beforeinput",null,a,m),d.push({event:m,listeners:u}),m.data=_))}Op(d,r)})}function Mn(t,r,a){return{instance:t,listener:r,currentTarget:a}}function Ji(t,r){for(var a=r+"Capture",n=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Sn(t,a),s!=null&&n.unshift(Mn(t,s,i)),s=Sn(t,r),s!=null&&n.push(Mn(t,s,i))),t=t.return}return n}function ua(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xu(t,r,a,n,i){for(var s=r._reactName,l=[];a!==null&&a!==n;){var o=a,c=o.alternate,u=o.stateNode;if(c!==null&&c===n)break;o.tag===5&&u!==null&&(o=u,i?(c=Sn(a,s),c!=null&&l.unshift(Mn(a,c,o))):i||(c=Sn(a,s),c!=null&&l.push(Mn(a,c,o)))),a=a.return}l.length!==0&&t.push({event:r,listeners:l})}var Dx=/\r\n?/g,Fx=/\u0000|\uFFFD/g;function gu(t){return(typeof t=="string"?t:""+t).replace(Dx,`
`).replace(Fx,"")}function pi(t,r,a){if(r=gu(r),gu(t)!==r&&a)throw Error(D(425))}function Wi(){}var Vl=null,Ql=null;function Jl(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Wl=typeof setTimeout=="function"?setTimeout:void 0,zx=typeof clearTimeout=="function"?clearTimeout:void 0,vu=typeof Promise=="function"?Promise:void 0,Bx=typeof queueMicrotask=="function"?queueMicrotask:typeof vu<"u"?function(t){return vu.resolve(null).then(t).catch(Ux)}:Wl;function Ux(t){setTimeout(function(){throw t})}function rl(t,r){var a=r,n=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(n===0){t.removeChild(i),wn(r);return}n--}else a!=="$"&&a!=="$?"&&a!=="$!"||n++;a=i}while(a);wn(r)}function Tr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function ju(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var Ua=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Ua,Tn="__reactProps$"+Ua,ur="__reactContainer$"+Ua,Kl="__reactEvents$"+Ua,Gx="__reactListeners$"+Ua,Hx="__reactHandles$"+Ua;function Qr(t){var r=t[Vt];if(r)return r;for(var a=t.parentNode;a;){if(r=a[ur]||a[Vt]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=ju(t);t!==null;){if(a=t[Vt])return a;t=ju(t)}return r}t=a,a=t.parentNode}return null}function Gn(t){return t=t[Vt]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function va(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function js(t){return t[Tn]||null}var Yl=[],ja=-1;function Dr(t){return{current:t}}function Ae(t){0>ja||(t.current=Yl[ja],Yl[ja]=null,ja--)}function Se(t,r){ja++,Yl[ja]=t.current,t.current=r}var Or={},tt=Dr(Or),dt=Dr(!1),Zr=Or;function _a(t,r){var a=t.type.contextTypes;if(!a)return Or;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===r)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in a)i[s]=r[s];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=i),i}function pt(t){return t=t.childContextTypes,t!=null}function Ki(){Ae(dt),Ae(tt)}function bu(t,r,a){if(tt.current!==Or)throw Error(D(168));Se(tt,r),Se(dt,a)}function Dp(t,r,a){var n=t.stateNode;if(r=r.childContextTypes,typeof n.getChildContext!="function")return a;n=n.getChildContext();for(var i in n)if(!(i in r))throw Error(D(108,Rf(t)||"Unknown",i));return ke({},a,n)}function Yi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Or,Zr=tt.current,Se(tt,t),Se(dt,dt.current),!0}function yu(t,r,a){var n=t.stateNode;if(!n)throw Error(D(169));a?(t=Dp(t,r,Zr),n.__reactInternalMemoizedMergedChildContext=t,Ae(dt),Ae(tt),Se(tt,t)):Ae(dt),Se(dt,a)}var ir=null,bs=!1,al=!1;function Fp(t){ir===null?ir=[t]:ir.push(t)}function $x(t){bs=!0,Fp(t)}function Fr(){if(!al&&ir!==null){al=!0;var t=0,r=je;try{var a=ir;for(je=1;t<a.length;t++){var n=a[t];do n=n(!0);while(n!==null)}ir=null,bs=!1}catch(i){throw ir!==null&&(ir=ir.slice(t+1)),up(Po,Fr),i}finally{je=r,al=!1}}return null}var ba=[],ya=0,Xi=null,Zi=0,Ct=[],wt=0,ea=null,sr=1,lr="";function $r(t,r){ba[ya++]=Zi,ba[ya++]=Xi,Xi=t,Zi=r}function zp(t,r,a){Ct[wt++]=sr,Ct[wt++]=lr,Ct[wt++]=ea,ea=t;var n=sr;t=lr;var i=32-Dt(n)-1;n&=~(1<<i),a+=1;var s=32-Dt(r)+i;if(30<s){var l=i-i%5;s=(n&(1<<l)-1).toString(32),n>>=l,i-=l,sr=1<<32-Dt(r)+i|a<<i|n,lr=s+t}else sr=1<<s|a<<i|n,lr=t}function Uo(t){t.return!==null&&($r(t,1),zp(t,1,0))}function Go(t){for(;t===Xi;)Xi=ba[--ya],ba[ya]=null,Zi=ba[--ya],ba[ya]=null;for(;t===ea;)ea=Ct[--wt],Ct[wt]=null,lr=Ct[--wt],Ct[wt]=null,sr=Ct[--wt],Ct[wt]=null}var vt=null,gt=null,Re=!1,It=null;function Bp(t,r){var a=At(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function Su(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,vt=t,gt=Tr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,vt=t,gt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=ea!==null?{id:sr,overflow:lr}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=At(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,vt=t,gt=null,!0):!1;default:return!1}}function Xl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zl(t){if(Re){var r=gt;if(r){var a=r;if(!Su(t,r)){if(Xl(t))throw Error(D(418));r=Tr(a.nextSibling);var n=vt;r&&Su(t,r)?Bp(n,a):(t.flags=t.flags&-4097|2,Re=!1,vt=t)}}else{if(Xl(t))throw Error(D(418));t.flags=t.flags&-4097|2,Re=!1,vt=t}}}function Eu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vt=t}function mi(t){if(t!==vt)return!1;if(!Re)return Eu(t),Re=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Jl(t.type,t.memoizedProps)),r&&(r=gt)){if(Xl(t))throw Up(),Error(D(418));for(;r;)Bp(t,r),r=Tr(r.nextSibling)}if(Eu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){gt=Tr(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}gt=null}}else gt=vt?Tr(t.stateNode.nextSibling):null;return!0}function Up(){for(var t=gt;t;)t=Tr(t.nextSibling)}function qa(){gt=vt=null,Re=!1}function Ho(t){It===null?It=[t]:It.push(t)}var Vx=mr.ReactCurrentBatchConfig;function Ya(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(D(309));var n=a.stateNode}if(!n)throw Error(D(147,t));var i=n,s=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(l){var o=i.refs;l===null?delete o[s]:o[s]=l},r._stringRef=s,r)}if(typeof t!="string")throw Error(D(284));if(!a._owner)throw Error(D(290,t))}return t}function hi(t,r){throw t=Object.prototype.toString.call(r),Error(D(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Cu(t){var r=t._init;return r(t._payload)}function Gp(t){function r(h,p){if(t){var j=h.deletions;j===null?(h.deletions=[p],h.flags|=16):j.push(p)}}function a(h,p){if(!t)return null;for(;p!==null;)r(h,p),p=p.sibling;return null}function n(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=_r(h,p),h.index=0,h.sibling=null,h}function s(h,p,j){return h.index=j,t?(j=h.alternate,j!==null?(j=j.index,j<p?(h.flags|=2,p):j):(h.flags|=2,p)):(h.flags|=1048576,p)}function l(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,p,j,R){return p===null||p.tag!==6?(p=ul(j,h.mode,R),p.return=h,p):(p=i(p,j),p.return=h,p)}function c(h,p,j,R){var N=j.type;return N===ha?m(h,p,j.props.children,R,j.key):p!==null&&(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===vr&&Cu(N)===p.type)?(R=i(p,j.props),R.ref=Ya(h,p,j),R.return=h,R):(R=qi(j.type,j.key,j.props,null,h.mode,R),R.ref=Ya(h,p,j),R.return=h,R)}function u(h,p,j,R){return p===null||p.tag!==4||p.stateNode.containerInfo!==j.containerInfo||p.stateNode.implementation!==j.implementation?(p=dl(j,h.mode,R),p.return=h,p):(p=i(p,j.children||[]),p.return=h,p)}function m(h,p,j,R,N){return p===null||p.tag!==7?(p=Xr(j,h.mode,R,N),p.return=h,p):(p=i(p,j),p.return=h,p)}function d(h,p,j){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ul(""+p,h.mode,j),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ai:return j=qi(p.type,p.key,p.props,null,h.mode,j),j.ref=Ya(h,null,p),j.return=h,j;case ma:return p=dl(p,h.mode,j),p.return=h,p;case vr:var R=p._init;return d(h,R(p._payload),j)}if(nn(p)||Va(p))return p=Xr(p,h.mode,j,null),p.return=h,p;hi(h,p)}return null}function x(h,p,j,R){var N=p!==null?p.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return N!==null?null:o(h,p,""+j,R);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ai:return j.key===N?c(h,p,j,R):null;case ma:return j.key===N?u(h,p,j,R):null;case vr:return N=j._init,x(h,p,N(j._payload),R)}if(nn(j)||Va(j))return N!==null?null:m(h,p,j,R,null);hi(h,j)}return null}function y(h,p,j,R,N){if(typeof R=="string"&&R!==""||typeof R=="number")return h=h.get(j)||null,o(p,h,""+R,N);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case ai:return h=h.get(R.key===null?j:R.key)||null,c(p,h,R,N);case ma:return h=h.get(R.key===null?j:R.key)||null,u(p,h,R,N);case vr:var P=R._init;return y(h,p,j,P(R._payload),N)}if(nn(R)||Va(R))return h=h.get(j)||null,m(p,h,R,N,null);hi(p,R)}return null}function v(h,p,j,R){for(var N=null,P=null,_=p,w=p=0,$=null;_!==null&&w<j.length;w++){_.index>w?($=_,_=null):$=_.sibling;var F=x(h,_,j[w],R);if(F===null){_===null&&(_=$);break}t&&_&&F.alternate===null&&r(h,_),p=s(F,p,w),P===null?N=F:P.sibling=F,P=F,_=$}if(w===j.length)return a(h,_),Re&&$r(h,w),N;if(_===null){for(;w<j.length;w++)_=d(h,j[w],R),_!==null&&(p=s(_,p,w),P===null?N=_:P.sibling=_,P=_);return Re&&$r(h,w),N}for(_=n(h,_);w<j.length;w++)$=y(_,h,w,j[w],R),$!==null&&(t&&$.alternate!==null&&_.delete($.key===null?w:$.key),p=s($,p,w),P===null?N=$:P.sibling=$,P=$);return t&&_.forEach(function(le){return r(h,le)}),Re&&$r(h,w),N}function b(h,p,j,R){var N=Va(j);if(typeof N!="function")throw Error(D(150));if(j=N.call(j),j==null)throw Error(D(151));for(var P=N=null,_=p,w=p=0,$=null,F=j.next();_!==null&&!F.done;w++,F=j.next()){_.index>w?($=_,_=null):$=_.sibling;var le=x(h,_,F.value,R);if(le===null){_===null&&(_=$);break}t&&_&&le.alternate===null&&r(h,_),p=s(le,p,w),P===null?N=le:P.sibling=le,P=le,_=$}if(F.done)return a(h,_),Re&&$r(h,w),N;if(_===null){for(;!F.done;w++,F=j.next())F=d(h,F.value,R),F!==null&&(p=s(F,p,w),P===null?N=F:P.sibling=F,P=F);return Re&&$r(h,w),N}for(_=n(h,_);!F.done;w++,F=j.next())F=y(_,h,w,F.value,R),F!==null&&(t&&F.alternate!==null&&_.delete(F.key===null?w:F.key),p=s(F,p,w),P===null?N=F:P.sibling=F,P=F);return t&&_.forEach(function(ee){return r(h,ee)}),Re&&$r(h,w),N}function E(h,p,j,R){if(typeof j=="object"&&j!==null&&j.type===ha&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case ai:e:{for(var N=j.key,P=p;P!==null;){if(P.key===N){if(N=j.type,N===ha){if(P.tag===7){a(h,P.sibling),p=i(P,j.props.children),p.return=h,h=p;break e}}else if(P.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===vr&&Cu(N)===P.type){a(h,P.sibling),p=i(P,j.props),p.ref=Ya(h,P,j),p.return=h,h=p;break e}a(h,P);break}else r(h,P);P=P.sibling}j.type===ha?(p=Xr(j.props.children,h.mode,R,j.key),p.return=h,h=p):(R=qi(j.type,j.key,j.props,null,h.mode,R),R.ref=Ya(h,p,j),R.return=h,h=R)}return l(h);case ma:e:{for(P=j.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===j.containerInfo&&p.stateNode.implementation===j.implementation){a(h,p.sibling),p=i(p,j.children||[]),p.return=h,h=p;break e}else{a(h,p);break}else r(h,p);p=p.sibling}p=dl(j,h.mode,R),p.return=h,h=p}return l(h);case vr:return P=j._init,E(h,p,P(j._payload),R)}if(nn(j))return v(h,p,j,R);if(Va(j))return b(h,p,j,R);hi(h,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,p!==null&&p.tag===6?(a(h,p.sibling),p=i(p,j),p.return=h,h=p):(a(h,p),p=ul(j,h.mode,R),p.return=h,h=p),l(h)):a(h,p)}return E}var Oa=Gp(!0),Hp=Gp(!1),es=Dr(null),ts=null,Sa=null,$o=null;function Vo(){$o=Sa=ts=null}function Qo(t){var r=es.current;Ae(es),t._currentValue=r}function eo(t,r,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,n!==null&&(n.childLanes|=r)):n!==null&&(n.childLanes&r)!==r&&(n.childLanes|=r),t===a)break;t=t.return}}function Ta(t,r){ts=t,$o=Sa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(ut=!0),t.firstContext=null)}function Rt(t){var r=t._currentValue;if($o!==t)if(t={context:t,memoizedValue:r,next:null},Sa===null){if(ts===null)throw Error(D(308));Sa=t,ts.dependencies={lanes:0,firstContext:t}}else Sa=Sa.next=t;return r}var Jr=null;function Jo(t){Jr===null?Jr=[t]:Jr.push(t)}function $p(t,r,a,n){var i=r.interleaved;return i===null?(a.next=a,Jo(r)):(a.next=i.next,i.next=a),r.interleaved=a,dr(t,n)}function dr(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var jr=!1;function Wo(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vp(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function or(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Nr(t,r,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,ge&2){var i=n.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),n.pending=r,dr(t,a)}return i=n.interleaved,i===null?(r.next=r,Jo(n)):(r.next=i.next,i.next=r),n.interleaved=r,dr(t,a)}function Mi(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var n=r.lanes;n&=t.pendingLanes,a|=n,r.lanes=a,_o(t,a)}}function wu(t,r){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var l={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};s===null?i=s=l:s=s.next=l,a=a.next}while(a!==null);s===null?i=s=r:s=s.next=r}else i=s=r;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function rs(t,r,a,n){var i=t.updateQueue;jr=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,u=c.next;c.next=null,l===null?s=u:l.next=u,l=c;var m=t.alternate;m!==null&&(m=m.updateQueue,o=m.lastBaseUpdate,o!==l&&(o===null?m.firstBaseUpdate=u:o.next=u,m.lastBaseUpdate=c))}if(s!==null){var d=i.baseState;l=0,m=u=c=null,o=s;do{var x=o.lane,y=o.eventTime;if((n&x)===x){m!==null&&(m=m.next={eventTime:y,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,b=o;switch(x=r,y=a,b.tag){case 1:if(v=b.payload,typeof v=="function"){d=v.call(y,d,x);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,x=typeof v=="function"?v.call(y,d,x):v,x==null)break e;d=ke({},d,x);break e;case 2:jr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,x=i.effects,x===null?i.effects=[o]:x.push(o))}else y={eventTime:y,lane:x,tag:o.tag,payload:o.payload,callback:o.callback,next:null},m===null?(u=m=y,c=d):m=m.next=y,l|=x;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;x=o,o=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);if(m===null&&(c=d),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=m,r=i.shared.interleaved,r!==null){i=r;do l|=i.lane,i=i.next;while(i!==r)}else s===null&&(i.shared.lanes=0);ra|=l,t.lanes=l,t.memoizedState=d}}function Au(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var n=t[r],i=n.callback;if(i!==null){if(n.callback=null,n=a,typeof i!="function")throw Error(D(191,i));i.call(n)}}}var Hn={},Jt=Dr(Hn),Nn=Dr(Hn),kn=Dr(Hn);function Wr(t){if(t===Hn)throw Error(D(174));return t}function Ko(t,r){switch(Se(kn,r),Se(Nn,t),Se(Jt,Hn),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:_l(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=_l(r,t)}Ae(Jt),Se(Jt,r)}function Ia(){Ae(Jt),Ae(Nn),Ae(kn)}function Qp(t){Wr(kn.current);var r=Wr(Jt.current),a=_l(r,t.type);r!==a&&(Se(Nn,t),Se(Jt,a))}function Yo(t){Nn.current===t&&(Ae(Jt),Ae(Nn))}var Te=Dr(0);function as(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var nl=[];function Xo(){for(var t=0;t<nl.length;t++)nl[t]._workInProgressVersionPrimary=null;nl.length=0}var Ti=mr.ReactCurrentDispatcher,il=mr.ReactCurrentBatchConfig,ta=0,Ne=null,ze=null,Ge=null,ns=!1,fn=!1,Pn=0,Qx=0;function Ye(){throw Error(D(321))}function Zo(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!Bt(t[a],r[a]))return!1;return!0}function ec(t,r,a,n,i,s){if(ta=s,Ne=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ti.current=t===null||t.memoizedState===null?Yx:Xx,t=a(n,i),fn){s=0;do{if(fn=!1,Pn=0,25<=s)throw Error(D(301));s+=1,Ge=ze=null,r.updateQueue=null,Ti.current=Zx,t=a(n,i)}while(fn)}if(Ti.current=is,r=ze!==null&&ze.next!==null,ta=0,Ge=ze=Ne=null,ns=!1,r)throw Error(D(300));return t}function tc(){var t=Pn!==0;return Pn=0,t}function $t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Ne.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function Mt(){if(ze===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var r=Ge===null?Ne.memoizedState:Ge.next;if(r!==null)Ge=r,ze=t;else{if(t===null)throw Error(D(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ge===null?Ne.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function _n(t,r){return typeof r=="function"?r(t):r}function sl(t){var r=Mt(),a=r.queue;if(a===null)throw Error(D(311));a.lastRenderedReducer=t;var n=ze,i=n.baseQueue,s=a.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}n.baseQueue=i=s,a.pending=null}if(i!==null){s=i.next,n=n.baseState;var o=l=null,c=null,u=s;do{var m=u.lane;if((ta&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:t(n,u.action);else{var d={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=d,l=n):c=c.next=d,Ne.lanes|=m,ra|=m}u=u.next}while(u!==null&&u!==s);c===null?l=n:c.next=o,Bt(n,r.memoizedState)||(ut=!0),r.memoizedState=n,r.baseState=l,r.baseQueue=c,a.lastRenderedState=n}if(t=a.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,ra|=s,i=i.next;while(i!==t)}else i===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function ll(t){var r=Mt(),a=r.queue;if(a===null)throw Error(D(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,s=r.memoizedState;if(i!==null){a.pending=null;var l=i=i.next;do s=t(s,l.action),l=l.next;while(l!==i);Bt(s,r.memoizedState)||(ut=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),a.lastRenderedState=s}return[s,n]}function Jp(){}function Wp(t,r){var a=Ne,n=Mt(),i=r(),s=!Bt(n.memoizedState,i);if(s&&(n.memoizedState=i,ut=!0),n=n.queue,rc(Xp.bind(null,a,n,t),[t]),n.getSnapshot!==r||s||Ge!==null&&Ge.memoizedState.tag&1){if(a.flags|=2048,qn(9,Yp.bind(null,a,n,i,r),void 0,null),He===null)throw Error(D(349));ta&30||Kp(a,r,i)}return i}function Kp(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=Ne.updateQueue,r===null?(r={lastEffect:null,stores:null},Ne.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function Yp(t,r,a,n){r.value=a,r.getSnapshot=n,Zp(r)&&em(t)}function Xp(t,r,a){return a(function(){Zp(r)&&em(t)})}function Zp(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!Bt(t,a)}catch{return!0}}function em(t){var r=dr(t,1);r!==null&&Ft(r,t,1,-1)}function Lu(t){var r=$t();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:t},r.queue=t,t=t.dispatch=Kx.bind(null,Ne,t),[r.memoizedState,t]}function qn(t,r,a,n){return t={tag:t,create:r,destroy:a,deps:n,next:null},r=Ne.updateQueue,r===null?(r={lastEffect:null,stores:null},Ne.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,r.lastEffect=t)),t}function tm(){return Mt().memoizedState}function Ni(t,r,a,n){var i=$t();Ne.flags|=t,i.memoizedState=qn(1|r,a,void 0,n===void 0?null:n)}function ys(t,r,a,n){var i=Mt();n=n===void 0?null:n;var s=void 0;if(ze!==null){var l=ze.memoizedState;if(s=l.destroy,n!==null&&Zo(n,l.deps)){i.memoizedState=qn(r,a,s,n);return}}Ne.flags|=t,i.memoizedState=qn(1|r,a,s,n)}function Ru(t,r){return Ni(8390656,8,t,r)}function rc(t,r){return ys(2048,8,t,r)}function rm(t,r){return ys(4,2,t,r)}function am(t,r){return ys(4,4,t,r)}function nm(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function im(t,r,a){return a=a!=null?a.concat([t]):null,ys(4,4,nm.bind(null,r,t),a)}function ac(){}function sm(t,r){var a=Mt();r=r===void 0?null:r;var n=a.memoizedState;return n!==null&&r!==null&&Zo(r,n[1])?n[0]:(a.memoizedState=[t,r],t)}function lm(t,r){var a=Mt();r=r===void 0?null:r;var n=a.memoizedState;return n!==null&&r!==null&&Zo(r,n[1])?n[0]:(t=t(),a.memoizedState=[t,r],t)}function om(t,r,a){return ta&21?(Bt(a,r)||(a=mp(),Ne.lanes|=a,ra|=a,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,ut=!0),t.memoizedState=a)}function Jx(t,r){var a=je;je=a!==0&&4>a?a:4,t(!0);var n=il.transition;il.transition={};try{t(!1),r()}finally{je=a,il.transition=n}}function cm(){return Mt().memoizedState}function Wx(t,r,a){var n=Pr(t);if(a={lane:n,action:a,hasEagerState:!1,eagerState:null,next:null},um(t))dm(r,a);else if(a=$p(t,r,a,n),a!==null){var i=st();Ft(a,t,n,i),pm(a,r,n)}}function Kx(t,r,a){var n=Pr(t),i={lane:n,action:a,hasEagerState:!1,eagerState:null,next:null};if(um(t))dm(r,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var l=r.lastRenderedState,o=s(l,a);if(i.hasEagerState=!0,i.eagerState=o,Bt(o,l)){var c=r.interleaved;c===null?(i.next=i,Jo(r)):(i.next=c.next,c.next=i),r.interleaved=i;return}}catch{}finally{}a=$p(t,r,i,n),a!==null&&(i=st(),Ft(a,t,n,i),pm(a,r,n))}}function um(t){var r=t.alternate;return t===Ne||r!==null&&r===Ne}function dm(t,r){fn=ns=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function pm(t,r,a){if(a&4194240){var n=r.lanes;n&=t.pendingLanes,a|=n,r.lanes=a,_o(t,a)}}var is={readContext:Rt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},Yx={readContext:Rt,useCallback:function(t,r){return $t().memoizedState=[t,r===void 0?null:r],t},useContext:Rt,useEffect:Ru,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,Ni(4194308,4,nm.bind(null,r,t),a)},useLayoutEffect:function(t,r){return Ni(4194308,4,t,r)},useInsertionEffect:function(t,r){return Ni(4,2,t,r)},useMemo:function(t,r){var a=$t();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var n=$t();return r=a!==void 0?a(r):r,n.memoizedState=n.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},n.queue=t,t=t.dispatch=Wx.bind(null,Ne,t),[n.memoizedState,t]},useRef:function(t){var r=$t();return t={current:t},r.memoizedState=t},useState:Lu,useDebugValue:ac,useDeferredValue:function(t){return $t().memoizedState=t},useTransition:function(){var t=Lu(!1),r=t[0];return t=Jx.bind(null,t[1]),$t().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var n=Ne,i=$t();if(Re){if(a===void 0)throw Error(D(407));a=a()}else{if(a=r(),He===null)throw Error(D(349));ta&30||Kp(n,r,a)}i.memoizedState=a;var s={value:a,getSnapshot:r};return i.queue=s,Ru(Xp.bind(null,n,s,t),[t]),n.flags|=2048,qn(9,Yp.bind(null,n,s,a,r),void 0,null),a},useId:function(){var t=$t(),r=He.identifierPrefix;if(Re){var a=lr,n=sr;a=(n&~(1<<32-Dt(n)-1)).toString(32)+a,r=":"+r+"R"+a,a=Pn++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Qx++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Xx={readContext:Rt,useCallback:sm,useContext:Rt,useEffect:rc,useImperativeHandle:im,useInsertionEffect:rm,useLayoutEffect:am,useMemo:lm,useReducer:sl,useRef:tm,useState:function(){return sl(_n)},useDebugValue:ac,useDeferredValue:function(t){var r=Mt();return om(r,ze.memoizedState,t)},useTransition:function(){var t=sl(_n)[0],r=Mt().memoizedState;return[t,r]},useMutableSource:Jp,useSyncExternalStore:Wp,useId:cm,unstable_isNewReconciler:!1},Zx={readContext:Rt,useCallback:sm,useContext:Rt,useEffect:rc,useImperativeHandle:im,useInsertionEffect:rm,useLayoutEffect:am,useMemo:lm,useReducer:ll,useRef:tm,useState:function(){return ll(_n)},useDebugValue:ac,useDeferredValue:function(t){var r=Mt();return ze===null?r.memoizedState=t:om(r,ze.memoizedState,t)},useTransition:function(){var t=ll(_n)[0],r=Mt().memoizedState;return[t,r]},useMutableSource:Jp,useSyncExternalStore:Wp,useId:cm,unstable_isNewReconciler:!1};function qt(t,r){if(t&&t.defaultProps){r=ke({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function to(t,r,a,n){r=t.memoizedState,a=a(n,r),a=a==null?r:ke({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ss={isMounted:function(t){return(t=t._reactInternals)?ia(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var n=st(),i=Pr(t),s=or(n,i);s.payload=r,a!=null&&(s.callback=a),r=Nr(t,s,i),r!==null&&(Ft(r,t,i,n),Mi(r,t,i))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var n=st(),i=Pr(t),s=or(n,i);s.tag=1,s.payload=r,a!=null&&(s.callback=a),r=Nr(t,s,i),r!==null&&(Ft(r,t,i,n),Mi(r,t,i))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=st(),n=Pr(t),i=or(a,n);i.tag=2,r!=null&&(i.callback=r),r=Nr(t,i,n),r!==null&&(Ft(r,t,n,a),Mi(r,t,n))}};function Mu(t,r,a,n,i,s,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,s,l):r.prototype&&r.prototype.isPureReactComponent?!Ln(a,n)||!Ln(i,s):!0}function mm(t,r,a){var n=!1,i=Or,s=r.contextType;return typeof s=="object"&&s!==null?s=Rt(s):(i=pt(r)?Zr:tt.current,n=r.contextTypes,s=(n=n!=null)?_a(t,i):Or),r=new r(a,s),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ss,t.stateNode=r,r._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),r}function Tu(t,r,a,n){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,n),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,n),r.state!==t&&Ss.enqueueReplaceState(r,r.state,null)}function ro(t,r,a,n){var i=t.stateNode;i.props=a,i.state=t.memoizedState,i.refs={},Wo(t);var s=r.contextType;typeof s=="object"&&s!==null?i.context=Rt(s):(s=pt(r)?Zr:tt.current,i.context=_a(t,s)),i.state=t.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(to(t,r,s,a),i.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Ss.enqueueReplaceState(i,i.state,null),rs(t,a,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Da(t,r){try{var a="",n=r;do a+=Lf(n),n=n.return;while(n);var i=a}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:r,stack:i,digest:null}}function ol(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function ao(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var eg=typeof WeakMap=="function"?WeakMap:Map;function hm(t,r,a){a=or(-1,a),a.tag=3,a.payload={element:null};var n=r.value;return a.callback=function(){ls||(ls=!0,ho=n),ao(t,r)},a}function fm(t,r,a){a=or(-1,a),a.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=r.value;a.payload=function(){return n(i)},a.callback=function(){ao(t,r)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(a.callback=function(){ao(t,r),typeof n!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var l=r.stack;this.componentDidCatch(r.value,{componentStack:l!==null?l:""})}),a}function Nu(t,r,a){var n=t.pingCache;if(n===null){n=t.pingCache=new eg;var i=new Set;n.set(r,i)}else i=n.get(r),i===void 0&&(i=new Set,n.set(r,i));i.has(a)||(i.add(a),t=hg.bind(null,t,r,a),r.then(t,t))}function ku(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Pu(t,r,a,n,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=or(-1,1),r.tag=2,Nr(a,r,1))),a.lanes|=1),t)}var tg=mr.ReactCurrentOwner,ut=!1;function nt(t,r,a,n){r.child=t===null?Hp(r,null,a,n):Oa(r,t.child,a,n)}function _u(t,r,a,n,i){a=a.render;var s=r.ref;return Ta(r,i),n=ec(t,r,a,n,s,i),a=tc(),t!==null&&!ut?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~i,pr(t,r,i)):(Re&&a&&Uo(r),r.flags|=1,nt(t,r,n,i),r.child)}function qu(t,r,a,n,i){if(t===null){var s=a.type;return typeof s=="function"&&!dc(s)&&s.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=s,xm(t,r,s,n,i)):(t=qi(a.type,null,n,r,r.mode,i),t.ref=r.ref,t.return=r,r.child=t)}if(s=t.child,!(t.lanes&i)){var l=s.memoizedProps;if(a=a.compare,a=a!==null?a:Ln,a(l,n)&&t.ref===r.ref)return pr(t,r,i)}return r.flags|=1,t=_r(s,n),t.ref=r.ref,t.return=r,r.child=t}function xm(t,r,a,n,i){if(t!==null){var s=t.memoizedProps;if(Ln(s,n)&&t.ref===r.ref)if(ut=!1,r.pendingProps=n=s,(t.lanes&i)!==0)t.flags&131072&&(ut=!0);else return r.lanes=t.lanes,pr(t,r,i)}return no(t,r,a,n,i)}function gm(t,r,a){var n=r.pendingProps,i=n.children,s=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(Ca,ft),ft|=a;else{if(!(a&1073741824))return t=s!==null?s.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Se(Ca,ft),ft|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:a,Se(Ca,ft),ft|=n}else s!==null?(n=s.baseLanes|a,r.memoizedState=null):n=a,Se(Ca,ft),ft|=n;return nt(t,r,i,a),r.child}function vm(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function no(t,r,a,n,i){var s=pt(a)?Zr:tt.current;return s=_a(r,s),Ta(r,i),a=ec(t,r,a,n,s,i),n=tc(),t!==null&&!ut?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~i,pr(t,r,i)):(Re&&n&&Uo(r),r.flags|=1,nt(t,r,a,i),r.child)}function Ou(t,r,a,n,i){if(pt(a)){var s=!0;Yi(r)}else s=!1;if(Ta(r,i),r.stateNode===null)ki(t,r),mm(r,a,n),ro(r,a,n,i),n=!0;else if(t===null){var l=r.stateNode,o=r.memoizedProps;l.props=o;var c=l.context,u=a.contextType;typeof u=="object"&&u!==null?u=Rt(u):(u=pt(a)?Zr:tt.current,u=_a(r,u));var m=a.getDerivedStateFromProps,d=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==n||c!==u)&&Tu(r,l,n,u),jr=!1;var x=r.memoizedState;l.state=x,rs(r,n,l,i),c=r.memoizedState,o!==n||x!==c||dt.current||jr?(typeof m=="function"&&(to(r,a,m,n),c=r.memoizedState),(o=jr||Mu(r,a,o,n,x,c,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=n,r.memoizedState=c),l.props=n,l.state=c,l.context=u,n=o):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),n=!1)}else{l=r.stateNode,Vp(t,r),o=r.memoizedProps,u=r.type===r.elementType?o:qt(r.type,o),l.props=u,d=r.pendingProps,x=l.context,c=a.contextType,typeof c=="object"&&c!==null?c=Rt(c):(c=pt(a)?Zr:tt.current,c=_a(r,c));var y=a.getDerivedStateFromProps;(m=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==d||x!==c)&&Tu(r,l,n,c),jr=!1,x=r.memoizedState,l.state=x,rs(r,n,l,i);var v=r.memoizedState;o!==d||x!==v||dt.current||jr?(typeof y=="function"&&(to(r,a,y,n),v=r.memoizedState),(u=jr||Mu(r,a,u,n,x,v,c)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,v,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,v,c)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===t.memoizedProps&&x===t.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&x===t.memoizedState||(r.flags|=1024),r.memoizedProps=n,r.memoizedState=v),l.props=n,l.state=v,l.context=c,n=u):(typeof l.componentDidUpdate!="function"||o===t.memoizedProps&&x===t.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&x===t.memoizedState||(r.flags|=1024),n=!1)}return io(t,r,a,n,s,i)}function io(t,r,a,n,i,s){vm(t,r);var l=(r.flags&128)!==0;if(!n&&!l)return i&&yu(r,a,!1),pr(t,r,s);n=r.stateNode,tg.current=r;var o=l&&typeof a.getDerivedStateFromError!="function"?null:n.render();return r.flags|=1,t!==null&&l?(r.child=Oa(r,t.child,null,s),r.child=Oa(r,null,o,s)):nt(t,r,o,s),r.memoizedState=n.state,i&&yu(r,a,!0),r.child}function jm(t){var r=t.stateNode;r.pendingContext?bu(t,r.pendingContext,r.pendingContext!==r.context):r.context&&bu(t,r.context,!1),Ko(t,r.containerInfo)}function Iu(t,r,a,n,i){return qa(),Ho(i),r.flags|=256,nt(t,r,a,n),r.child}var so={dehydrated:null,treeContext:null,retryLane:0};function lo(t){return{baseLanes:t,cachePool:null,transitions:null}}function bm(t,r,a){var n=r.pendingProps,i=Te.current,s=!1,l=(r.flags&128)!==0,o;if((o=l)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!==0),o?(s=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Se(Te,i&1),t===null)return Zl(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(l=n.children,t=n.fallback,s?(n=r.mode,s=r.child,l={mode:"hidden",children:l},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=ws(l,n,0,null),t=Xr(t,n,a,null),s.return=r,t.return=r,s.sibling=t,r.child=s,r.child.memoizedState=lo(a),r.memoizedState=so,t):nc(r,l));if(i=t.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return rg(t,r,l,n,o,i,a);if(s){s=n.fallback,l=r.mode,i=t.child,o=i.sibling;var c={mode:"hidden",children:n.children};return!(l&1)&&r.child!==i?(n=r.child,n.childLanes=0,n.pendingProps=c,r.deletions=null):(n=_r(i,c),n.subtreeFlags=i.subtreeFlags&14680064),o!==null?s=_r(o,s):(s=Xr(s,l,a,null),s.flags|=2),s.return=r,n.return=r,n.sibling=s,r.child=n,n=s,s=r.child,l=t.child.memoizedState,l=l===null?lo(a):{baseLanes:l.baseLanes|a,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=t.childLanes&~a,r.memoizedState=so,n}return s=t.child,t=s.sibling,n=_r(s,{mode:"visible",children:n.children}),!(r.mode&1)&&(n.lanes=a),n.return=r,n.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=n,r.memoizedState=null,n}function nc(t,r){return r=ws({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function fi(t,r,a,n){return n!==null&&Ho(n),Oa(r,t.child,null,a),t=nc(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function rg(t,r,a,n,i,s,l){if(a)return r.flags&256?(r.flags&=-257,n=ol(Error(D(422))),fi(t,r,l,n)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(s=n.fallback,i=r.mode,n=ws({mode:"visible",children:n.children},i,0,null),s=Xr(s,i,l,null),s.flags|=2,n.return=r,s.return=r,n.sibling=s,r.child=n,r.mode&1&&Oa(r,t.child,null,l),r.child.memoizedState=lo(l),r.memoizedState=so,s);if(!(r.mode&1))return fi(t,r,l,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var o=n.dgst;return n=o,s=Error(D(419)),n=ol(s,n,void 0),fi(t,r,l,n)}if(o=(l&t.childLanes)!==0,ut||o){if(n=He,n!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,dr(t,i),Ft(n,t,i,-1))}return uc(),n=ol(Error(D(421))),fi(t,r,l,n)}return i.data==="$?"?(r.flags|=128,r.child=t.child,r=fg.bind(null,t),i._reactRetry=r,null):(t=s.treeContext,gt=Tr(i.nextSibling),vt=r,Re=!0,It=null,t!==null&&(Ct[wt++]=sr,Ct[wt++]=lr,Ct[wt++]=ea,sr=t.id,lr=t.overflow,ea=r),r=nc(r,n.children),r.flags|=4096,r)}function Du(t,r,a){t.lanes|=r;var n=t.alternate;n!==null&&(n.lanes|=r),eo(t.return,r,a)}function cl(t,r,a,n,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=i)}function ym(t,r,a){var n=r.pendingProps,i=n.revealOrder,s=n.tail;if(nt(t,r,n.children,a),n=Te.current,n&2)n=n&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Du(t,a,r);else if(t.tag===19)Du(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(Se(Te,n),!(r.mode&1))r.memoizedState=null;else switch(i){case"forwards":for(a=r.child,i=null;a!==null;)t=a.alternate,t!==null&&as(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=r.child,r.child=null):(i=a.sibling,a.sibling=null),cl(r,!1,i,a,s);break;case"backwards":for(a=null,i=r.child,r.child=null;i!==null;){if(t=i.alternate,t!==null&&as(t)===null){r.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}cl(r,!0,a,null,s);break;case"together":cl(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ki(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function pr(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),ra|=r.lanes,!(a&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(D(153));if(r.child!==null){for(t=r.child,a=_r(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=_r(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function ag(t,r,a){switch(r.tag){case 3:jm(r),qa();break;case 5:Qp(r);break;case 1:pt(r.type)&&Yi(r);break;case 4:Ko(r,r.stateNode.containerInfo);break;case 10:var n=r.type._context,i=r.memoizedProps.value;Se(es,n._currentValue),n._currentValue=i;break;case 13:if(n=r.memoizedState,n!==null)return n.dehydrated!==null?(Se(Te,Te.current&1),r.flags|=128,null):a&r.child.childLanes?bm(t,r,a):(Se(Te,Te.current&1),t=pr(t,r,a),t!==null?t.sibling:null);Se(Te,Te.current&1);break;case 19:if(n=(a&r.childLanes)!==0,t.flags&128){if(n)return ym(t,r,a);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Te,Te.current),n)break;return null;case 22:case 23:return r.lanes=0,gm(t,r,a)}return pr(t,r,a)}var Sm,oo,Em,Cm;Sm=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};oo=function(){};Em=function(t,r,a,n){var i=t.memoizedProps;if(i!==n){t=r.stateNode,Wr(Jt.current);var s=null;switch(a){case"input":i=Tl(t,i),n=Tl(t,n),s=[];break;case"select":i=ke({},i,{value:void 0}),n=ke({},n,{value:void 0}),s=[];break;case"textarea":i=Pl(t,i),n=Pl(t,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Wi)}ql(a,n);var l;a=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(l in o)o.hasOwnProperty(l)&&(a||(a={}),a[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bn.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in n){var c=n[u];if(o=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(a||(a={}),a[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(a||(a={}),a[l]=c[l])}else a||(s||(s=[]),s.push(u,a)),a=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ce("scroll",t),s||o===c||(s=[])):(s=s||[]).push(u,c))}a&&(s=s||[]).push("style",a);var u=s;(r.updateQueue=u)&&(r.flags|=4)}};Cm=function(t,r,a,n){a!==n&&(r.flags|=4)};function Xa(t,r){if(!Re)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Xe(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(r)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,r}function ng(t,r,a){var n=r.pendingProps;switch(Go(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(r),null;case 1:return pt(r.type)&&Ki(),Xe(r),null;case 3:return n=r.stateNode,Ia(),Ae(dt),Ae(tt),Xo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(mi(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,It!==null&&(go(It),It=null))),oo(t,r),Xe(r),null;case 5:Yo(r);var i=Wr(kn.current);if(a=r.type,t!==null&&r.stateNode!=null)Em(t,r,a,n,i),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!n){if(r.stateNode===null)throw Error(D(166));return Xe(r),null}if(t=Wr(Jt.current),mi(r)){n=r.stateNode,a=r.type;var s=r.memoizedProps;switch(n[Vt]=r,n[Tn]=s,t=(r.mode&1)!==0,a){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(i=0;i<ln.length;i++)Ce(ln[i],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Qc(n,s),Ce("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},Ce("invalid",n);break;case"textarea":Wc(n,s),Ce("invalid",n)}ql(a,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var o=s[l];l==="children"?typeof o=="string"?n.textContent!==o&&(s.suppressHydrationWarning!==!0&&pi(n.textContent,o,t),i=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&pi(n.textContent,o,t),i=["children",""+o]):bn.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&Ce("scroll",n)}switch(a){case"input":ni(n),Jc(n,s,!0);break;case"textarea":ni(n),Kc(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Wi)}n=i,r.updateQueue=n,n!==null&&(r.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xd(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=l.createElement(a,{is:n.is}):(t=l.createElement(a),a==="select"&&(l=t,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):t=l.createElementNS(t,a),t[Vt]=r,t[Tn]=n,Sm(t,r,!1,!1),r.stateNode=t;e:{switch(l=Ol(a,n),a){case"dialog":Ce("cancel",t),Ce("close",t),i=n;break;case"iframe":case"object":case"embed":Ce("load",t),i=n;break;case"video":case"audio":for(i=0;i<ln.length;i++)Ce(ln[i],t);i=n;break;case"source":Ce("error",t),i=n;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),i=n;break;case"details":Ce("toggle",t),i=n;break;case"input":Qc(t,n),i=Tl(t,n),Ce("invalid",t);break;case"option":i=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=ke({},n,{value:void 0}),Ce("invalid",t);break;case"textarea":Wc(t,n),i=Pl(t,n),Ce("invalid",t);break;default:i=n}ql(a,i),o=i;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?tp(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Zd(t,c)):s==="children"?typeof c=="string"?(a!=="textarea"||c!=="")&&yn(t,c):typeof c=="number"&&yn(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bn.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Ce("scroll",t):c!=null&&Ro(t,s,c,l))}switch(a){case"input":ni(t),Jc(t,n,!1);break;case"textarea":ni(t),Kc(t);break;case"option":n.value!=null&&t.setAttribute("value",""+qr(n.value));break;case"select":t.multiple=!!n.multiple,s=n.value,s!=null?Aa(t,!!n.multiple,s,!1):n.defaultValue!=null&&Aa(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Wi)}switch(a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Xe(r),null;case 6:if(t&&r.stateNode!=null)Cm(t,r,t.memoizedProps,n);else{if(typeof n!="string"&&r.stateNode===null)throw Error(D(166));if(a=Wr(kn.current),Wr(Jt.current),mi(r)){if(n=r.stateNode,a=r.memoizedProps,n[Vt]=r,(s=n.nodeValue!==a)&&(t=vt,t!==null))switch(t.tag){case 3:pi(n.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pi(n.nodeValue,a,(t.mode&1)!==0)}s&&(r.flags|=4)}else n=(a.nodeType===9?a:a.ownerDocument).createTextNode(n),n[Vt]=r,r.stateNode=n}return Xe(r),null;case 13:if(Ae(Te),n=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&gt!==null&&r.mode&1&&!(r.flags&128))Up(),qa(),r.flags|=98560,s=!1;else if(s=mi(r),n!==null&&n.dehydrated!==null){if(t===null){if(!s)throw Error(D(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[Vt]=r}else qa(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Xe(r),s=!1}else It!==null&&(go(It),It=null),s=!0;if(!s)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(r.child.flags|=8192,r.mode&1&&(t===null||Te.current&1?Be===0&&(Be=3):uc())),r.updateQueue!==null&&(r.flags|=4),Xe(r),null);case 4:return Ia(),oo(t,r),t===null&&Rn(r.stateNode.containerInfo),Xe(r),null;case 10:return Qo(r.type._context),Xe(r),null;case 17:return pt(r.type)&&Ki(),Xe(r),null;case 19:if(Ae(Te),s=r.memoizedState,s===null)return Xe(r),null;if(n=(r.flags&128)!==0,l=s.rendering,l===null)if(n)Xa(s,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(l=as(t),l!==null){for(r.flags|=128,Xa(s,!1),n=l.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),r.subtreeFlags=0,n=a,a=r.child;a!==null;)s=a,t=n,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,t=l.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Se(Te,Te.current&1|2),r.child}t=t.sibling}s.tail!==null&&Oe()>Fa&&(r.flags|=128,n=!0,Xa(s,!1),r.lanes=4194304)}else{if(!n)if(t=as(l),t!==null){if(r.flags|=128,n=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Xa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Re)return Xe(r),null}else 2*Oe()-s.renderingStartTime>Fa&&a!==1073741824&&(r.flags|=128,n=!0,Xa(s,!1),r.lanes=4194304);s.isBackwards?(l.sibling=r.child,r.child=l):(a=s.last,a!==null?a.sibling=l:r.child=l,s.last=l)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=Oe(),r.sibling=null,a=Te.current,Se(Te,n?a&1|2:a&1),r):(Xe(r),null);case 22:case 23:return cc(),n=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(r.flags|=8192),n&&r.mode&1?ft&1073741824&&(Xe(r),r.subtreeFlags&6&&(r.flags|=8192)):Xe(r),null;case 24:return null;case 25:return null}throw Error(D(156,r.tag))}function ig(t,r){switch(Go(r),r.tag){case 1:return pt(r.type)&&Ki(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Ia(),Ae(dt),Ae(tt),Xo(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return Yo(r),null;case 13:if(Ae(Te),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(D(340));qa()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return Ae(Te),null;case 4:return Ia(),null;case 10:return Qo(r.type._context),null;case 22:case 23:return cc(),null;case 24:return null;default:return null}}var xi=!1,et=!1,sg=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Ea(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(n){_e(t,r,n)}else a.current=null}function co(t,r,a){try{a()}catch(n){_e(t,r,n)}}var Fu=!1;function lg(t,r){if(Vl=Vi,t=Mp(),Bo(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var l=0,o=-1,c=-1,u=0,m=0,d=t,x=null;t:for(;;){for(var y;d!==a||i!==0&&d.nodeType!==3||(o=l+i),d!==s||n!==0&&d.nodeType!==3||(c=l+n),d.nodeType===3&&(l+=d.nodeValue.length),(y=d.firstChild)!==null;)x=d,d=y;for(;;){if(d===t)break t;if(x===a&&++u===i&&(o=l),x===s&&++m===n&&(c=l),(y=d.nextSibling)!==null)break;d=x,x=d.parentNode}d=y}a=o===-1||c===-1?null:{start:o,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ql={focusedElem:t,selectionRange:a},Vi=!1,Q=r;Q!==null;)if(r=Q,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,Q=t;else for(;Q!==null;){r=Q;try{var v=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,E=v.memoizedState,h=r.stateNode,p=h.getSnapshotBeforeUpdate(r.elementType===r.type?b:qt(r.type,b),E);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var j=r.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(R){_e(r,r.return,R)}if(t=r.sibling,t!==null){t.return=r.return,Q=t;break}Q=r.return}return v=Fu,Fu=!1,v}function xn(t,r,a){var n=r.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&co(r,a,s)}i=i.next}while(i!==n)}}function Es(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var n=a.create;a.destroy=n()}a=a.next}while(a!==r)}}function uo(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function wm(t){var r=t.alternate;r!==null&&(t.alternate=null,wm(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Vt],delete r[Tn],delete r[Kl],delete r[Gx],delete r[Hx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Am(t){return t.tag===5||t.tag===3||t.tag===4}function zu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Am(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function po(t,r,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Wi));else if(n!==4&&(t=t.child,t!==null))for(po(t,r,a),t=t.sibling;t!==null;)po(t,r,a),t=t.sibling}function mo(t,r,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(mo(t,r,a),t=t.sibling;t!==null;)mo(t,r,a),t=t.sibling}var Ve=null,Ot=!1;function fr(t,r,a){for(a=a.child;a!==null;)Lm(t,r,a),a=a.sibling}function Lm(t,r,a){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(fs,a)}catch{}switch(a.tag){case 5:et||Ea(a,r);case 6:var n=Ve,i=Ot;Ve=null,fr(t,r,a),Ve=n,Ot=i,Ve!==null&&(Ot?(t=Ve,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Ve.removeChild(a.stateNode));break;case 18:Ve!==null&&(Ot?(t=Ve,a=a.stateNode,t.nodeType===8?rl(t.parentNode,a):t.nodeType===1&&rl(t,a),wn(t)):rl(Ve,a.stateNode));break;case 4:n=Ve,i=Ot,Ve=a.stateNode.containerInfo,Ot=!0,fr(t,r,a),Ve=n,Ot=i;break;case 0:case 11:case 14:case 15:if(!et&&(n=a.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&co(a,r,l),i=i.next}while(i!==n)}fr(t,r,a);break;case 1:if(!et&&(Ea(a,r),n=a.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=a.memoizedProps,n.state=a.memoizedState,n.componentWillUnmount()}catch(o){_e(a,r,o)}fr(t,r,a);break;case 21:fr(t,r,a);break;case 22:a.mode&1?(et=(n=et)||a.memoizedState!==null,fr(t,r,a),et=n):fr(t,r,a);break;default:fr(t,r,a)}}function Bu(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new sg),r.forEach(function(n){var i=xg.bind(null,t,n);a.has(n)||(a.add(n),n.then(i,i))})}}function Pt(t,r){var a=r.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n];try{var s=t,l=r,o=l;e:for(;o!==null;){switch(o.tag){case 5:Ve=o.stateNode,Ot=!1;break e;case 3:Ve=o.stateNode.containerInfo,Ot=!0;break e;case 4:Ve=o.stateNode.containerInfo,Ot=!0;break e}o=o.return}if(Ve===null)throw Error(D(160));Lm(s,l,i),Ve=null,Ot=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){_e(i,r,u)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Rm(r,t),r=r.sibling}function Rm(t,r){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pt(r,t),Gt(t),n&4){try{xn(3,t,t.return),Es(3,t)}catch(b){_e(t,t.return,b)}try{xn(5,t,t.return)}catch(b){_e(t,t.return,b)}}break;case 1:Pt(r,t),Gt(t),n&512&&a!==null&&Ea(a,a.return);break;case 5:if(Pt(r,t),Gt(t),n&512&&a!==null&&Ea(a,a.return),t.flags&32){var i=t.stateNode;try{yn(i,"")}catch(b){_e(t,t.return,b)}}if(n&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,l=a!==null?a.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Kd(i,s),Ol(o,l);var u=Ol(o,s);for(l=0;l<c.length;l+=2){var m=c[l],d=c[l+1];m==="style"?tp(i,d):m==="dangerouslySetInnerHTML"?Zd(i,d):m==="children"?yn(i,d):Ro(i,m,d,u)}switch(o){case"input":Nl(i,s);break;case"textarea":Yd(i,s);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Aa(i,!!s.multiple,y,!1):x!==!!s.multiple&&(s.defaultValue!=null?Aa(i,!!s.multiple,s.defaultValue,!0):Aa(i,!!s.multiple,s.multiple?[]:"",!1))}i[Tn]=s}catch(b){_e(t,t.return,b)}}break;case 6:if(Pt(r,t),Gt(t),n&4){if(t.stateNode===null)throw Error(D(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(b){_e(t,t.return,b)}}break;case 3:if(Pt(r,t),Gt(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{wn(r.containerInfo)}catch(b){_e(t,t.return,b)}break;case 4:Pt(r,t),Gt(t);break;case 13:Pt(r,t),Gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(lc=Oe())),n&4&&Bu(t);break;case 22:if(m=a!==null&&a.memoizedState!==null,t.mode&1?(et=(u=et)||m,Pt(r,t),et=u):Pt(r,t),Gt(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!m&&t.mode&1)for(Q=t,m=t.child;m!==null;){for(d=Q=m;Q!==null;){switch(x=Q,y=x.child,x.tag){case 0:case 11:case 14:case 15:xn(4,x,x.return);break;case 1:Ea(x,x.return);var v=x.stateNode;if(typeof v.componentWillUnmount=="function"){n=x,a=x.return;try{r=n,v.props=r.memoizedProps,v.state=r.memoizedState,v.componentWillUnmount()}catch(b){_e(n,a,b)}}break;case 5:Ea(x,x.return);break;case 22:if(x.memoizedState!==null){Gu(d);continue}}y!==null?(y.return=x,Q=y):Gu(d)}m=m.sibling}e:for(m=null,d=t;;){if(d.tag===5){if(m===null){m=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,c=d.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=ep("display",l))}catch(b){_e(t,t.return,b)}}}else if(d.tag===6){if(m===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(b){_e(t,t.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;m===d&&(m=null),d=d.return}m===d&&(m=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Pt(r,t),Gt(t),n&4&&Bu(t);break;case 21:break;default:Pt(r,t),Gt(t)}}function Gt(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if(Am(a)){var n=a;break e}a=a.return}throw Error(D(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(yn(i,""),n.flags&=-33);var s=zu(t);mo(t,s,i);break;case 3:case 4:var l=n.stateNode.containerInfo,o=zu(t);po(t,o,l);break;default:throw Error(D(161))}}catch(c){_e(t,t.return,c)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function og(t,r,a){Q=t,Mm(t)}function Mm(t,r,a){for(var n=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&n){var l=i.memoizedState!==null||xi;if(!l){var o=i.alternate,c=o!==null&&o.memoizedState!==null||et;o=xi;var u=et;if(xi=l,(et=c)&&!u)for(Q=i;Q!==null;)l=Q,c=l.child,l.tag===22&&l.memoizedState!==null?Hu(i):c!==null?(c.return=l,Q=c):Hu(i);for(;s!==null;)Q=s,Mm(s),s=s.sibling;Q=i,xi=o,et=u}Uu(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):Uu(t)}}function Uu(t){for(;Q!==null;){var r=Q;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:et||Es(5,r);break;case 1:var n=r.stateNode;if(r.flags&4&&!et)if(a===null)n.componentDidMount();else{var i=r.elementType===r.type?a.memoizedProps:qt(r.type,a.memoizedProps);n.componentDidUpdate(i,a.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&Au(r,s,n);break;case 3:var l=r.updateQueue;if(l!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Au(r,l,a)}break;case 5:var o=r.stateNode;if(a===null&&r.flags&4){a=o;var c=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&a.focus();break;case"img":c.src&&(a.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var u=r.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var d=m.dehydrated;d!==null&&wn(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}et||r.flags&512&&uo(r)}catch(x){_e(r,r.return,x)}}if(r===t){Q=null;break}if(a=r.sibling,a!==null){a.return=r.return,Q=a;break}Q=r.return}}function Gu(t){for(;Q!==null;){var r=Q;if(r===t){Q=null;break}var a=r.sibling;if(a!==null){a.return=r.return,Q=a;break}Q=r.return}}function Hu(t){for(;Q!==null;){var r=Q;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Es(4,r)}catch(c){_e(r,a,c)}break;case 1:var n=r.stateNode;if(typeof n.componentDidMount=="function"){var i=r.return;try{n.componentDidMount()}catch(c){_e(r,i,c)}}var s=r.return;try{uo(r)}catch(c){_e(r,s,c)}break;case 5:var l=r.return;try{uo(r)}catch(c){_e(r,l,c)}}}catch(c){_e(r,r.return,c)}if(r===t){Q=null;break}var o=r.sibling;if(o!==null){o.return=r.return,Q=o;break}Q=r.return}}var cg=Math.ceil,ss=mr.ReactCurrentDispatcher,ic=mr.ReactCurrentOwner,Lt=mr.ReactCurrentBatchConfig,ge=0,He=null,De=null,Qe=0,ft=0,Ca=Dr(0),Be=0,On=null,ra=0,Cs=0,sc=0,gn=null,ct=null,lc=0,Fa=1/0,nr=null,ls=!1,ho=null,kr=null,gi=!1,wr=null,os=0,vn=0,fo=null,Pi=-1,_i=0;function st(){return ge&6?Oe():Pi!==-1?Pi:Pi=Oe()}function Pr(t){return t.mode&1?ge&2&&Qe!==0?Qe&-Qe:Vx.transition!==null?(_i===0&&(_i=mp()),_i):(t=je,t!==0||(t=window.event,t=t===void 0?16:bp(t.type)),t):1}function Ft(t,r,a,n){if(50<vn)throw vn=0,fo=null,Error(D(185));Bn(t,a,n),(!(ge&2)||t!==He)&&(t===He&&(!(ge&2)&&(Cs|=a),Be===4&&yr(t,Qe)),mt(t,n),a===1&&ge===0&&!(r.mode&1)&&(Fa=Oe()+500,bs&&Fr()))}function mt(t,r){var a=t.callbackNode;Vf(t,r);var n=$i(t,t===He?Qe:0);if(n===0)a!==null&&Zc(a),t.callbackNode=null,t.callbackPriority=0;else if(r=n&-n,t.callbackPriority!==r){if(a!=null&&Zc(a),r===1)t.tag===0?$x($u.bind(null,t)):Fp($u.bind(null,t)),Bx(function(){!(ge&6)&&Fr()}),a=null;else{switch(hp(n)){case 1:a=Po;break;case 4:a=dp;break;case 16:a=Hi;break;case 536870912:a=pp;break;default:a=Hi}a=Im(a,Tm.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function Tm(t,r){if(Pi=-1,_i=0,ge&6)throw Error(D(327));var a=t.callbackNode;if(Na()&&t.callbackNode!==a)return null;var n=$i(t,t===He?Qe:0);if(n===0)return null;if(n&30||n&t.expiredLanes||r)r=cs(t,n);else{r=n;var i=ge;ge|=2;var s=km();(He!==t||Qe!==r)&&(nr=null,Fa=Oe()+500,Yr(t,r));do try{pg();break}catch(o){Nm(t,o)}while(!0);Vo(),ss.current=s,ge=i,De!==null?r=0:(He=null,Qe=0,r=Be)}if(r!==0){if(r===2&&(i=Bl(t),i!==0&&(n=i,r=xo(t,i))),r===1)throw a=On,Yr(t,0),yr(t,n),mt(t,Oe()),a;if(r===6)yr(t,n);else{if(i=t.current.alternate,!(n&30)&&!ug(i)&&(r=cs(t,n),r===2&&(s=Bl(t),s!==0&&(n=s,r=xo(t,s))),r===1))throw a=On,Yr(t,0),yr(t,n),mt(t,Oe()),a;switch(t.finishedWork=i,t.finishedLanes=n,r){case 0:case 1:throw Error(D(345));case 2:Vr(t,ct,nr);break;case 3:if(yr(t,n),(n&130023424)===n&&(r=lc+500-Oe(),10<r)){if($i(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){st(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Wl(Vr.bind(null,t,ct,nr),r);break}Vr(t,ct,nr);break;case 4:if(yr(t,n),(n&4194240)===n)break;for(r=t.eventTimes,i=-1;0<n;){var l=31-Dt(n);s=1<<l,l=r[l],l>i&&(i=l),n&=~s}if(n=i,n=Oe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*cg(n/1960))-n,10<n){t.timeoutHandle=Wl(Vr.bind(null,t,ct,nr),n);break}Vr(t,ct,nr);break;case 5:Vr(t,ct,nr);break;default:throw Error(D(329))}}}return mt(t,Oe()),t.callbackNode===a?Tm.bind(null,t):null}function xo(t,r){var a=gn;return t.current.memoizedState.isDehydrated&&(Yr(t,r).flags|=256),t=cs(t,r),t!==2&&(r=ct,ct=a,r!==null&&go(r)),t}function go(t){ct===null?ct=t:ct.push.apply(ct,t)}function ug(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var n=0;n<a.length;n++){var i=a[n],s=i.getSnapshot;i=i.value;try{if(!Bt(s(),i))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function yr(t,r){for(r&=~sc,r&=~Cs,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-Dt(r),n=1<<a;t[a]=-1,r&=~n}}function $u(t){if(ge&6)throw Error(D(327));Na();var r=$i(t,0);if(!(r&1))return mt(t,Oe()),null;var a=cs(t,r);if(t.tag!==0&&a===2){var n=Bl(t);n!==0&&(r=n,a=xo(t,n))}if(a===1)throw a=On,Yr(t,0),yr(t,r),mt(t,Oe()),a;if(a===6)throw Error(D(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Vr(t,ct,nr),mt(t,Oe()),null}function oc(t,r){var a=ge;ge|=1;try{return t(r)}finally{ge=a,ge===0&&(Fa=Oe()+500,bs&&Fr())}}function aa(t){wr!==null&&wr.tag===0&&!(ge&6)&&Na();var r=ge;ge|=1;var a=Lt.transition,n=je;try{if(Lt.transition=null,je=1,t)return t()}finally{je=n,Lt.transition=a,ge=r,!(ge&6)&&Fr()}}function cc(){ft=Ca.current,Ae(Ca)}function Yr(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,zx(a)),De!==null)for(a=De.return;a!==null;){var n=a;switch(Go(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ki();break;case 3:Ia(),Ae(dt),Ae(tt),Xo();break;case 5:Yo(n);break;case 4:Ia();break;case 13:Ae(Te);break;case 19:Ae(Te);break;case 10:Qo(n.type._context);break;case 22:case 23:cc()}a=a.return}if(He=t,De=t=_r(t.current,null),Qe=ft=r,Be=0,On=null,sc=Cs=ra=0,ct=gn=null,Jr!==null){for(r=0;r<Jr.length;r++)if(a=Jr[r],n=a.interleaved,n!==null){a.interleaved=null;var i=n.next,s=a.pending;if(s!==null){var l=s.next;s.next=i,n.next=l}a.pending=n}Jr=null}return t}function Nm(t,r){do{var a=De;try{if(Vo(),Ti.current=is,ns){for(var n=Ne.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}ns=!1}if(ta=0,Ge=ze=Ne=null,fn=!1,Pn=0,ic.current=null,a===null||a.return===null){Be=1,On=r,De=null;break}e:{var s=t,l=a.return,o=a,c=r;if(r=Qe,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=o,d=m.tag;if(!(m.mode&1)&&(d===0||d===11||d===15)){var x=m.alternate;x?(m.updateQueue=x.updateQueue,m.memoizedState=x.memoizedState,m.lanes=x.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=ku(l);if(y!==null){y.flags&=-257,Pu(y,l,o,s,r),y.mode&1&&Nu(s,u,r),r=y,c=u;var v=r.updateQueue;if(v===null){var b=new Set;b.add(c),r.updateQueue=b}else v.add(c);break e}else{if(!(r&1)){Nu(s,u,r),uc();break e}c=Error(D(426))}}else if(Re&&o.mode&1){var E=ku(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Pu(E,l,o,s,r),Ho(Da(c,o));break e}}s=c=Da(c,o),Be!==4&&(Be=2),gn===null?gn=[s]:gn.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var h=hm(s,c,r);wu(s,h);break e;case 1:o=c;var p=s.type,j=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(kr===null||!kr.has(j)))){s.flags|=65536,r&=-r,s.lanes|=r;var R=fm(s,o,r);wu(s,R);break e}}s=s.return}while(s!==null)}_m(a)}catch(N){r=N,De===a&&a!==null&&(De=a=a.return);continue}break}while(!0)}function km(){var t=ss.current;return ss.current=is,t===null?is:t}function uc(){(Be===0||Be===3||Be===2)&&(Be=4),He===null||!(ra&268435455)&&!(Cs&268435455)||yr(He,Qe)}function cs(t,r){var a=ge;ge|=2;var n=km();(He!==t||Qe!==r)&&(nr=null,Yr(t,r));do try{dg();break}catch(i){Nm(t,i)}while(!0);if(Vo(),ge=a,ss.current=n,De!==null)throw Error(D(261));return He=null,Qe=0,Be}function dg(){for(;De!==null;)Pm(De)}function pg(){for(;De!==null&&!If();)Pm(De)}function Pm(t){var r=Om(t.alternate,t,ft);t.memoizedProps=t.pendingProps,r===null?_m(t):De=r,ic.current=null}function _m(t){var r=t;do{var a=r.alternate;if(t=r.return,r.flags&32768){if(a=ig(a,r),a!==null){a.flags&=32767,De=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,De=null;return}}else if(a=ng(a,r,ft),a!==null){De=a;return}if(r=r.sibling,r!==null){De=r;return}De=r=t}while(r!==null);Be===0&&(Be=5)}function Vr(t,r,a){var n=je,i=Lt.transition;try{Lt.transition=null,je=1,mg(t,r,a,n)}finally{Lt.transition=i,je=n}return null}function mg(t,r,a,n){do Na();while(wr!==null);if(ge&6)throw Error(D(327));a=t.finishedWork;var i=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(D(177));t.callbackNode=null,t.callbackPriority=0;var s=a.lanes|a.childLanes;if(Qf(t,s),t===He&&(De=He=null,Qe=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||gi||(gi=!0,Im(Hi,function(){return Na(),null})),s=(a.flags&15990)!==0,a.subtreeFlags&15990||s){s=Lt.transition,Lt.transition=null;var l=je;je=1;var o=ge;ge|=4,ic.current=null,lg(t,a),Rm(a,t),Px(Ql),Vi=!!Vl,Ql=Vl=null,t.current=a,og(a),Df(),ge=o,je=l,Lt.transition=s}else t.current=a;if(gi&&(gi=!1,wr=t,os=i),s=t.pendingLanes,s===0&&(kr=null),Bf(a.stateNode),mt(t,Oe()),r!==null)for(n=t.onRecoverableError,a=0;a<r.length;a++)i=r[a],n(i.value,{componentStack:i.stack,digest:i.digest});if(ls)throw ls=!1,t=ho,ho=null,t;return os&1&&t.tag!==0&&Na(),s=t.pendingLanes,s&1?t===fo?vn++:(vn=0,fo=t):vn=0,Fr(),null}function Na(){if(wr!==null){var t=hp(os),r=Lt.transition,a=je;try{if(Lt.transition=null,je=16>t?16:t,wr===null)var n=!1;else{if(t=wr,wr=null,os=0,ge&6)throw Error(D(331));var i=ge;for(ge|=4,Q=t.current;Q!==null;){var s=Q,l=s.child;if(Q.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(Q=u;Q!==null;){var m=Q;switch(m.tag){case 0:case 11:case 15:xn(8,m,s)}var d=m.child;if(d!==null)d.return=m,Q=d;else for(;Q!==null;){m=Q;var x=m.sibling,y=m.return;if(wm(m),m===u){Q=null;break}if(x!==null){x.return=y,Q=x;break}Q=y}}}var v=s.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var E=b.sibling;b.sibling=null,b=E}while(b!==null)}}Q=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,Q=l;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xn(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Q=h;break e}Q=s.return}}var p=t.current;for(Q=p;Q!==null;){l=Q;var j=l.child;if(l.subtreeFlags&2064&&j!==null)j.return=l,Q=j;else e:for(l=p;Q!==null;){if(o=Q,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Es(9,o)}}catch(N){_e(o,o.return,N)}if(o===l){Q=null;break e}var R=o.sibling;if(R!==null){R.return=o.return,Q=R;break e}Q=o.return}}if(ge=i,Fr(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(fs,t)}catch{}n=!0}return n}finally{je=a,Lt.transition=r}}return!1}function Vu(t,r,a){r=Da(a,r),r=hm(t,r,1),t=Nr(t,r,1),r=st(),t!==null&&(Bn(t,1,r),mt(t,r))}function _e(t,r,a){if(t.tag===3)Vu(t,t,a);else for(;r!==null;){if(r.tag===3){Vu(r,t,a);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(kr===null||!kr.has(n))){t=Da(a,t),t=fm(r,t,1),r=Nr(r,t,1),t=st(),r!==null&&(Bn(r,1,t),mt(r,t));break}}r=r.return}}function hg(t,r,a){var n=t.pingCache;n!==null&&n.delete(r),r=st(),t.pingedLanes|=t.suspendedLanes&a,He===t&&(Qe&a)===a&&(Be===4||Be===3&&(Qe&130023424)===Qe&&500>Oe()-lc?Yr(t,0):sc|=a),mt(t,r)}function qm(t,r){r===0&&(t.mode&1?(r=li,li<<=1,!(li&130023424)&&(li=4194304)):r=1);var a=st();t=dr(t,r),t!==null&&(Bn(t,r,a),mt(t,a))}function fg(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),qm(t,a)}function xg(t,r){var a=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(D(314))}n!==null&&n.delete(r),qm(t,a)}var Om;Om=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||dt.current)ut=!0;else{if(!(t.lanes&a)&&!(r.flags&128))return ut=!1,ag(t,r,a);ut=!!(t.flags&131072)}else ut=!1,Re&&r.flags&1048576&&zp(r,Zi,r.index);switch(r.lanes=0,r.tag){case 2:var n=r.type;ki(t,r),t=r.pendingProps;var i=_a(r,tt.current);Ta(r,a),i=ec(null,r,n,t,i,a);var s=tc();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,pt(n)?(s=!0,Yi(r)):s=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wo(r),i.updater=Ss,r.stateNode=i,i._reactInternals=r,ro(r,n,t,a),r=io(null,r,n,!0,s,a)):(r.tag=0,Re&&s&&Uo(r),nt(null,r,i,a),r=r.child),r;case 16:n=r.elementType;e:{switch(ki(t,r),t=r.pendingProps,i=n._init,n=i(n._payload),r.type=n,i=r.tag=vg(n),t=qt(n,t),i){case 0:r=no(null,r,n,t,a);break e;case 1:r=Ou(null,r,n,t,a);break e;case 11:r=_u(null,r,n,t,a);break e;case 14:r=qu(null,r,n,qt(n.type,t),a);break e}throw Error(D(306,n,""))}return r;case 0:return n=r.type,i=r.pendingProps,i=r.elementType===n?i:qt(n,i),no(t,r,n,i,a);case 1:return n=r.type,i=r.pendingProps,i=r.elementType===n?i:qt(n,i),Ou(t,r,n,i,a);case 3:e:{if(jm(r),t===null)throw Error(D(387));n=r.pendingProps,s=r.memoizedState,i=s.element,Vp(t,r),rs(r,n,null,a);var l=r.memoizedState;if(n=l.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){i=Da(Error(D(423)),r),r=Iu(t,r,n,a,i);break e}else if(n!==i){i=Da(Error(D(424)),r),r=Iu(t,r,n,a,i);break e}else for(gt=Tr(r.stateNode.containerInfo.firstChild),vt=r,Re=!0,It=null,a=Hp(r,null,n,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(qa(),n===i){r=pr(t,r,a);break e}nt(t,r,n,a)}r=r.child}return r;case 5:return Qp(r),t===null&&Zl(r),n=r.type,i=r.pendingProps,s=t!==null?t.memoizedProps:null,l=i.children,Jl(n,i)?l=null:s!==null&&Jl(n,s)&&(r.flags|=32),vm(t,r),nt(t,r,l,a),r.child;case 6:return t===null&&Zl(r),null;case 13:return bm(t,r,a);case 4:return Ko(r,r.stateNode.containerInfo),n=r.pendingProps,t===null?r.child=Oa(r,null,n,a):nt(t,r,n,a),r.child;case 11:return n=r.type,i=r.pendingProps,i=r.elementType===n?i:qt(n,i),_u(t,r,n,i,a);case 7:return nt(t,r,r.pendingProps,a),r.child;case 8:return nt(t,r,r.pendingProps.children,a),r.child;case 12:return nt(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(n=r.type._context,i=r.pendingProps,s=r.memoizedProps,l=i.value,Se(es,n._currentValue),n._currentValue=l,s!==null)if(Bt(s.value,l)){if(s.children===i.children&&!dt.current){r=pr(t,r,a);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var o=s.dependencies;if(o!==null){l=s.child;for(var c=o.firstContext;c!==null;){if(c.context===n){if(s.tag===1){c=or(-1,a&-a),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}s.lanes|=a,c=s.alternate,c!==null&&(c.lanes|=a),eo(s.return,a,r),o.lanes|=a;break}c=c.next}}else if(s.tag===10)l=s.type===r.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(D(341));l.lanes|=a,o=l.alternate,o!==null&&(o.lanes|=a),eo(l,a,r),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===r){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}nt(t,r,i.children,a),r=r.child}return r;case 9:return i=r.type,n=r.pendingProps.children,Ta(r,a),i=Rt(i),n=n(i),r.flags|=1,nt(t,r,n,a),r.child;case 14:return n=r.type,i=qt(n,r.pendingProps),i=qt(n.type,i),qu(t,r,n,i,a);case 15:return xm(t,r,r.type,r.pendingProps,a);case 17:return n=r.type,i=r.pendingProps,i=r.elementType===n?i:qt(n,i),ki(t,r),r.tag=1,pt(n)?(t=!0,Yi(r)):t=!1,Ta(r,a),mm(r,n,i),ro(r,n,i,a),io(null,r,n,!0,t,a);case 19:return ym(t,r,a);case 22:return gm(t,r,a)}throw Error(D(156,r.tag))};function Im(t,r){return up(t,r)}function gg(t,r,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,r,a,n){return new gg(t,r,a,n)}function dc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vg(t){if(typeof t=="function")return dc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===To)return 11;if(t===No)return 14}return 2}function _r(t,r){var a=t.alternate;return a===null?(a=At(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function qi(t,r,a,n,i,s){var l=2;if(n=t,typeof t=="function")dc(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case ha:return Xr(a.children,i,s,r);case Mo:l=8,i|=8;break;case Al:return t=At(12,a,r,i|2),t.elementType=Al,t.lanes=s,t;case Ll:return t=At(13,a,r,i),t.elementType=Ll,t.lanes=s,t;case Rl:return t=At(19,a,r,i),t.elementType=Rl,t.lanes=s,t;case Qd:return ws(a,i,s,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $d:l=10;break e;case Vd:l=9;break e;case To:l=11;break e;case No:l=14;break e;case vr:l=16,n=null;break e}throw Error(D(130,t==null?t:typeof t,""))}return r=At(l,a,r,i),r.elementType=t,r.type=n,r.lanes=s,r}function Xr(t,r,a,n){return t=At(7,t,n,r),t.lanes=a,t}function ws(t,r,a,n){return t=At(22,t,n,r),t.elementType=Qd,t.lanes=a,t.stateNode={isHidden:!1},t}function ul(t,r,a){return t=At(6,t,null,r),t.lanes=a,t}function dl(t,r,a){return r=At(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function jg(t,r,a,n,i){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$s(0),this.expirationTimes=$s(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$s(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pc(t,r,a,n,i,s,l,o,c){return t=new jg(t,r,a,o,c),r===1?(r=1,s===!0&&(r|=8)):r=0,s=At(3,null,null,r),t.current=s,s.stateNode=t,s.memoizedState={element:n,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wo(s),t}function bg(t,r,a){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ma,key:n==null?null:""+n,children:t,containerInfo:r,implementation:a}}function Dm(t){if(!t)return Or;t=t._reactInternals;e:{if(ia(t)!==t||t.tag!==1)throw Error(D(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(pt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(D(171))}if(t.tag===1){var a=t.type;if(pt(a))return Dp(t,a,r)}return r}function Fm(t,r,a,n,i,s,l,o,c){return t=pc(a,n,!0,t,i,s,l,o,c),t.context=Dm(null),a=t.current,n=st(),i=Pr(a),s=or(n,i),s.callback=r??null,Nr(a,s,i),t.current.lanes=i,Bn(t,i,n),mt(t,n),t}function As(t,r,a,n){var i=r.current,s=st(),l=Pr(i);return a=Dm(a),r.context===null?r.context=a:r.pendingContext=a,r=or(s,l),r.payload={element:t},n=n===void 0?null:n,n!==null&&(r.callback=n),t=Nr(i,r,l),t!==null&&(Ft(t,i,l,s),Mi(t,i,l)),l}function us(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qu(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function mc(t,r){Qu(t,r),(t=t.alternate)&&Qu(t,r)}function yg(){return null}var zm=typeof reportError=="function"?reportError:function(t){console.error(t)};function hc(t){this._internalRoot=t}Ls.prototype.render=hc.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(D(409));As(t,r,null,null)};Ls.prototype.unmount=hc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;aa(function(){As(null,t,null,null)}),r[ur]=null}};function Ls(t){this._internalRoot=t}Ls.prototype.unstable_scheduleHydration=function(t){if(t){var r=gp();t={blockedOn:null,target:t,priority:r};for(var a=0;a<br.length&&r!==0&&r<br[a].priority;a++);br.splice(a,0,t),a===0&&jp(t)}};function fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ju(){}function Sg(t,r,a,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var u=us(l);s.call(u)}}var l=Fm(r,n,t,0,null,!1,!1,"",Ju);return t._reactRootContainer=l,t[ur]=l.current,Rn(t.nodeType===8?t.parentNode:t),aa(),l}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var o=n;n=function(){var u=us(c);o.call(u)}}var c=pc(t,0,!1,null,null,!1,!1,"",Ju);return t._reactRootContainer=c,t[ur]=c.current,Rn(t.nodeType===8?t.parentNode:t),aa(function(){As(r,c,a,n)}),c}function Ms(t,r,a,n,i){var s=a._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var o=i;i=function(){var c=us(l);o.call(c)}}As(r,l,t,i)}else l=Sg(a,r,t,i,n);return us(l)}fp=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=sn(r.pendingLanes);a!==0&&(_o(r,a|1),mt(r,Oe()),!(ge&6)&&(Fa=Oe()+500,Fr()))}break;case 13:aa(function(){var n=dr(t,1);if(n!==null){var i=st();Ft(n,t,1,i)}}),mc(t,1)}};qo=function(t){if(t.tag===13){var r=dr(t,134217728);if(r!==null){var a=st();Ft(r,t,134217728,a)}mc(t,134217728)}};xp=function(t){if(t.tag===13){var r=Pr(t),a=dr(t,r);if(a!==null){var n=st();Ft(a,t,r,n)}mc(t,r)}};gp=function(){return je};vp=function(t,r){var a=je;try{return je=t,r()}finally{je=a}};Dl=function(t,r,a){switch(r){case"input":if(Nl(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var n=a[r];if(n!==t&&n.form===t.form){var i=js(n);if(!i)throw Error(D(90));Wd(n),Nl(n,i)}}}break;case"textarea":Yd(t,a);break;case"select":r=a.value,r!=null&&Aa(t,!!a.multiple,r,!1)}};np=oc;ip=aa;var Eg={usingClientEntryPoint:!1,Events:[Gn,va,js,rp,ap,oc]},Za={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cg={bundleType:Za.bundleType,version:Za.version,rendererPackageName:Za.rendererPackageName,rendererConfig:Za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=op(t),t===null?null:t.stateNode},findFiberByHostInstance:Za.findFiberByHostInstance||yg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vi.isDisabled&&vi.supportsFiber)try{fs=vi.inject(Cg),Qt=vi}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eg;bt.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fc(r))throw Error(D(200));return bg(t,r,null,a)};bt.createRoot=function(t,r){if(!fc(t))throw Error(D(299));var a=!1,n="",i=zm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=pc(t,1,!1,null,null,a,!1,n,i),t[ur]=r.current,Rn(t.nodeType===8?t.parentNode:t),new hc(r)};bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(D(188)):(t=Object.keys(t).join(","),Error(D(268,t)));return t=op(r),t=t===null?null:t.stateNode,t};bt.flushSync=function(t){return aa(t)};bt.hydrate=function(t,r,a){if(!Rs(r))throw Error(D(200));return Ms(null,t,r,!0,a)};bt.hydrateRoot=function(t,r,a){if(!fc(t))throw Error(D(405));var n=a!=null&&a.hydratedSources||null,i=!1,s="",l=zm;if(a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onRecoverableError!==void 0&&(l=a.onRecoverableError)),r=Fm(r,null,t,1,a??null,i,!1,s,l),t[ur]=r.current,Rn(t),n)for(t=0;t<n.length;t++)a=n[t],i=a._getVersion,i=i(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,i]:r.mutableSourceEagerHydrationData.push(a,i);return new Ls(r)};bt.render=function(t,r,a){if(!Rs(r))throw Error(D(200));return Ms(null,t,r,!1,a)};bt.unmountComponentAtNode=function(t){if(!Rs(t))throw Error(D(40));return t._reactRootContainer?(aa(function(){Ms(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1};bt.unstable_batchedUpdates=oc;bt.unstable_renderSubtreeIntoContainer=function(t,r,a,n){if(!Rs(a))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return Ms(t,r,a,!1,n)};bt.version="18.3.1-next-f1338f8080-20240426";function Bm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bm)}catch(t){console.error(t)}}Bm(),Bd.exports=bt;var Um=Bd.exports,Gm,Wu=Um;Gm=Wu.createRoot,Wu.hydrateRoot;/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Hm=t=>{throw TypeError(t)},wg=(t,r,a)=>r.has(t)||Hm("Cannot "+a),pl=(t,r,a)=>(wg(t,r,"read from private field"),a?a.call(t):r.get(t)),Ag=(t,r,a)=>r.has(t)?Hm("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(t):r.set(t,a),Ku="popstate";function Yu(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function Lg(t={}){function r(i,s){let{pathname:l="/",search:o="",hash:c=""}=Yt(i.location.hash.substring(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),In("",{pathname:l,search:o,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function a(i,s){let l=i.document.querySelector("base"),o="";if(l&&l.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");o=u===-1?c:c.slice(0,u)}return o+"#"+(typeof s=="string"?s:Kt(s))}function n(i,s){Ie(i.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(s)})`)}return Mg(r,a,n,t)}function ue(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function Ie(t,r){if(!t){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Rg(){return Math.random().toString(36).substring(2,10)}function Xu(t,r){return{usr:t.state,key:t.key,idx:r,masked:t.unstable_mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function In(t,r,a=null,n,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof r=="string"?Yt(r):r,state:a,key:r&&r.key||n||Rg(),unstable_mask:i}}function Kt({pathname:t="/",search:r="",hash:a=""}){return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function Yt(t){let r={};if(t){let a=t.indexOf("#");a>=0&&(r.hash=t.substring(a),t=t.substring(0,a));let n=t.indexOf("?");n>=0&&(r.search=t.substring(n),t=t.substring(0,n)),t&&(r.pathname=t)}return r}function Mg(t,r,a,n={}){let{window:i=document.defaultView,v5Compat:s=!1}=n,l=i.history,o="POP",c=null,u=m();u==null&&(u=0,l.replaceState({...l.state,idx:u},""));function m(){return(l.state||{idx:null}).idx}function d(){o="POP";let E=m(),h=E==null?null:E-u;u=E,c&&c({action:o,location:b.location,delta:h})}function x(E,h){o="PUSH";let p=Yu(E)?E:In(b.location,E,h);a&&a(p,E),u=m()+1;let j=Xu(p,u),R=b.createHref(p.unstable_mask||p);try{l.pushState(j,"",R)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(R)}s&&c&&c({action:o,location:b.location,delta:1})}function y(E,h){o="REPLACE";let p=Yu(E)?E:In(b.location,E,h);a&&a(p,E),u=m();let j=Xu(p,u),R=b.createHref(p.unstable_mask||p);l.replaceState(j,"",R),s&&c&&c({action:o,location:b.location,delta:0})}function v(E){return $m(E)}let b={get action(){return o},get location(){return t(i,l)},listen(E){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Ku,d),c=E,()=>{i.removeEventListener(Ku,d),c=null}},createHref(E){return r(i,E)},createURL:v,encodeLocation(E){let h=v(E);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:x,replace:y,go(E){return l.go(E)}};return b}function $m(t,r=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),ue(a,"No window.location.(origin|href) available to create URL");let n=typeof t=="string"?t:Kt(t);return n=n.replace(/ $/,"%20"),!r&&n.startsWith("//")&&(n=a+n),new URL(n,a)}var on,Zu=class{constructor(t){if(Ag(this,on,new Map),t)for(let[r,a]of t)this.set(r,a)}get(t){if(pl(this,on).has(t))return pl(this,on).get(t);if(t.defaultValue!==void 0)return t.defaultValue;throw new Error("No value found for context")}set(t,r){pl(this,on).set(t,r)}};on=new WeakMap;var Tg=new Set(["lazy","caseSensitive","path","id","index","children"]);function Ng(t){return Tg.has(t)}var kg=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function Pg(t){return kg.has(t)}function _g(t){return t.index===!0}function Dn(t,r,a=[],n={},i=!1){return t.map((s,l)=>{let o=[...a,String(l)],c=typeof s.id=="string"?s.id:o.join("-");if(ue(s.index!==!0||!s.children,"Cannot specify children on an index route"),ue(i||!n[c],`Found a route id collision on id "${c}".  Route id's must be globally unique within Data Router usages`),_g(s)){let u={...s,id:c};return n[c]=ed(u,r(u)),u}else{let u={...s,id:c,children:void 0};return n[c]=ed(u,r(u)),s.children&&(u.children=Dn(s.children,r,o,n,i)),u}})}function ed(t,r){return Object.assign(t,{...r,...typeof r.lazy=="object"&&r.lazy!=null?{lazy:{...t.lazy,...r.lazy}}:{}})}function Sr(t,r,a="/"){return cn(t,r,a,!1)}function cn(t,r,a,n){let i=typeof r=="string"?Yt(r):r,s=Tt(i.pathname||"/",a);if(s==null)return null;let l=Vm(t);Og(l);let o=null;for(let c=0;o==null&&c<l.length;++c){let u=Qg(s);o=$g(l[c],u,n)}return o}function qg(t,r){let{route:a,pathname:n,params:i}=t;return{id:a.id,pathname:n,params:i,data:r[a.id],loaderData:r[a.id],handle:a.handle}}function Vm(t,r=[],a=[],n="",i=!1){let s=(l,o,c=i,u)=>{let m={relativePath:u===void 0?l.path||"":u,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(n)&&c)return;ue(m.relativePath.startsWith(n),`Absolute route path "${m.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(n.length)}let d=zt([n,m.relativePath]),x=a.concat(m);l.children&&l.children.length>0&&(ue(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),Vm(l.children,r,x,d,c)),!(l.path==null&&!l.index)&&r.push({path:d,score:Gg(d,l.index),routesMeta:x})};return t.forEach((l,o)=>{var c;if(l.path===""||!((c=l.path)!=null&&c.includes("?")))s(l,o);else for(let u of Qm(l.path))s(l,o,!0,u)}),r}function Qm(t){let r=t.split("/");if(r.length===0)return[];let[a,...n]=r,i=a.endsWith("?"),s=a.replace(/\?$/,"");if(n.length===0)return i?[s,""]:[s];let l=Qm(n.join("/")),o=[];return o.push(...l.map(c=>c===""?s:[s,c].join("/"))),i&&o.push(...l),o.map(c=>t.startsWith("/")&&c===""?"/":c)}function Og(t){t.sort((r,a)=>r.score!==a.score?a.score-r.score:Hg(r.routesMeta.map(n=>n.childrenIndex),a.routesMeta.map(n=>n.childrenIndex)))}var Ig=/^:[\w-]+$/,Dg=3,Fg=2,zg=1,Bg=10,Ug=-2,td=t=>t==="*";function Gg(t,r){let a=t.split("/"),n=a.length;return a.some(td)&&(n+=Ug),r&&(n+=Fg),a.filter(i=>!td(i)).reduce((i,s)=>i+(Ig.test(s)?Dg:s===""?zg:Bg),n)}function Hg(t,r){return t.length===r.length&&t.slice(0,-1).every((n,i)=>n===r[i])?t[t.length-1]-r[r.length-1]:0}function $g(t,r,a=!1){let{routesMeta:n}=t,i={},s="/",l=[];for(let o=0;o<n.length;++o){let c=n[o],u=o===n.length-1,m=s==="/"?r:r.slice(s.length)||"/",d=ds({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},m),x=c.route;if(!d&&u&&a&&!n[n.length-1].route.index&&(d=ds({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!d)return null;Object.assign(i,d.params),l.push({params:i,pathname:zt([s,d.pathname]),pathnameBase:Kg(zt([s,d.pathnameBase])),route:x}),d.pathnameBase!=="/"&&(s=zt([s,d.pathnameBase]))}return l}function ds(t,r){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[a,n]=Vg(t.path,t.caseSensitive,t.end),i=r.match(a);if(!i)return null;let s=i[0],l=s.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:n.reduce((u,{paramName:m,isOptional:d},x)=>{if(m==="*"){let v=o[x]||"";l=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const y=o[x];return d&&!y?u[m]=void 0:u[m]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:l,pattern:t}}function Vg(t,r=!1,a=!0){Ie(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let n=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c,u,m)=>{if(n.push({paramName:o,isOptional:c!=null}),c){let d=m.charAt(u+l.length);return d&&d!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(n.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,r?void 0:"i"),n]}function Qg(t){try{return t.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Ie(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),t}}function Tt(t,r){if(r==="/")return t;if(!t.toLowerCase().startsWith(r.toLowerCase()))return null;let a=r.endsWith("/")?r.length-1:r.length,n=t.charAt(a);return n&&n!=="/"?null:t.slice(a)||"/"}function Jg({basename:t,pathname:r}){return r==="/"?t:zt([t,r])}var Jm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xc=t=>Jm.test(t);function Wg(t,r="/"){let{pathname:a,search:n="",hash:i=""}=typeof t=="string"?Yt(t):t,s;return a?(a=a.replace(/\/\/+/g,"/"),a.startsWith("/")?s=rd(a.substring(1),"/"):s=rd(a,r)):s=r,{pathname:s,search:Yg(n),hash:Xg(i)}}function rd(t,r){let a=r.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?a.length>1&&a.pop():i!=="."&&a.push(i)}),a.length>1?a.join("/"):"/"}function ml(t,r,a,n){return`Cannot include a '${t}' character in a manually specified \`to.${r}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Wm(t){return t.filter((r,a)=>a===0||r.route.path&&r.route.path.length>0)}function gc(t){let r=Wm(t);return r.map((a,n)=>n===r.length-1?a.pathname:a.pathnameBase)}function Ts(t,r,a,n=!1){let i;typeof t=="string"?i=Yt(t):(i={...t},ue(!i.pathname||!i.pathname.includes("?"),ml("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),ml("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),ml("#","search","hash",i)));let s=t===""||i.pathname==="",l=s?"/":i.pathname,o;if(l==null)o=a;else{let d=r.length-1;if(!n&&l.startsWith("..")){let x=l.split("/");for(;x[0]==="..";)x.shift(),d-=1;i.pathname=x.join("/")}o=d>=0?r[d]:"/"}let c=Wg(i,o),u=l&&l!=="/"&&l.endsWith("/"),m=(s||l===".")&&a.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}var zt=t=>t.join("/").replace(/\/\/+/g,"/"),Kg=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Yg=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Xg=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,$n=class{constructor(t,r,a,n=!1){this.status=t,this.statusText=r||"",this.internal=n,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function Fn(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function Vn(t){return t.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Km=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ym(t,r){let a=t;if(typeof a!="string"||!Jm.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let n=a,i=!1;if(Km)try{let s=new URL(window.location.href),l=a.startsWith("//")?new URL(s.protocol+a):new URL(a),o=Tt(l.pathname,r);l.origin===s.origin&&o!=null?a=o+l.search+l.hash:i=!0}catch{Ie(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:n,isExternal:i,to:a}}var Ar=Symbol("Uninstrumented");function Zg(t,r){let a={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};t.forEach(i=>i({id:r.id,index:r.index,path:r.path,instrument(s){let l=Object.keys(a);for(let o of l)s[o]&&a[o].push(s[o])}}));let n={};if(typeof r.lazy=="function"&&a.lazy.length>0){let i=wa(a.lazy,r.lazy,()=>{});i&&(n.lazy=i)}if(typeof r.lazy=="object"){let i=r.lazy;["middleware","loader","action"].forEach(s=>{let l=i[s],o=a[`lazy.${s}`];if(typeof l=="function"&&o.length>0){let c=wa(o,l,()=>{});c&&(n.lazy=Object.assign(n.lazy||{},{[s]:c}))}})}return["loader","action"].forEach(i=>{let s=r[i];if(typeof s=="function"&&a[i].length>0){let l=s[Ar]??s,o=wa(a[i],l,(...c)=>ad(c[0]));o&&(i==="loader"&&l.hydrate===!0&&(o.hydrate=!0),o[Ar]=l,n[i]=o)}}),r.middleware&&r.middleware.length>0&&a.middleware.length>0&&(n.middleware=r.middleware.map(i=>{let s=i[Ar]??i,l=wa(a.middleware,s,(...o)=>ad(o[0]));return l?(l[Ar]=s,l):i})),n}function ev(t,r){let a={navigate:[],fetch:[]};if(r.forEach(n=>n({instrument(i){let s=Object.keys(i);for(let l of s)i[l]&&a[l].push(i[l])}})),a.navigate.length>0){let n=t.navigate[Ar]??t.navigate,i=wa(a.navigate,n,(...s)=>{let[l,o]=s;return{to:typeof l=="number"||typeof l=="string"?l:l?Kt(l):".",...nd(t,o??{})}});i&&(i[Ar]=n,t.navigate=i)}if(a.fetch.length>0){let n=t.fetch[Ar]??t.fetch,i=wa(a.fetch,n,(...s)=>{let[l,,o,c]=s;return{href:o??".",fetcherKey:l,...nd(t,c??{})}});i&&(i[Ar]=n,t.fetch=i)}return t}function wa(t,r,a){return t.length===0?null:async(...n)=>{let i=await Xm(t,a(...n),()=>r(...n),t.length-1);if(i.type==="error")throw i.value;return i.value}}async function Xm(t,r,a,n){let i=t[n],s;if(i){let l,o=async()=>(l?console.error("You cannot call instrumented handlers more than once"):l=Xm(t,r,a,n-1),s=await l,ue(s,"Expected a result"),s.type==="error"&&s.value instanceof Error?{status:"error",error:s.value}:{status:"success",error:void 0});try{await i(o,r)}catch(c){console.error("An instrumentation function threw an error:",c)}l||await o(),await l}else try{s={type:"success",value:await a()}}catch(l){s={type:"error",value:l}}return s||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function ad(t){let{request:r,context:a,params:n,unstable_pattern:i}=t;return{request:tv(r),params:{...n},unstable_pattern:i,context:rv(a)}}function nd(t,r){return{currentUrl:Kt(t.state.location),..."formMethod"in r?{formMethod:r.formMethod}:{},..."formEncType"in r?{formEncType:r.formEncType}:{},..."formData"in r?{formData:r.formData}:{},..."body"in r?{body:r.body}:{}}}function tv(t){return{method:t.method,url:t.url,headers:{get:(...r)=>t.headers.get(...r)}}}function rv(t){if(nv(t)){let r={...t};return Object.freeze(r),r}else return{get:r=>t.get(r)}}var av=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function nv(t){if(t===null||typeof t!="object")return!1;const r=Object.getPrototypeOf(t);return r===Object.prototype||r===null||Object.getOwnPropertyNames(r).sort().join("\0")===av}var Zm=["POST","PUT","PATCH","DELETE"],iv=new Set(Zm),sv=["GET",...Zm],lv=new Set(sv),eh=new Set([301,302,303,307,308]),ov=new Set([307,308]),hl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},cv={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},en={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},uv=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),th="remix-router-transitions",rh=Symbol("ResetLoaderData");function dv(t){const r=t.window?t.window:typeof window<"u"?window:void 0,a=typeof r<"u"&&typeof r.document<"u"&&typeof r.document.createElement<"u";ue(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let n=t.hydrationRouteProperties||[],i=t.mapRouteProperties||uv,s=i;if(t.unstable_instrumentations){let C=t.unstable_instrumentations;s=L=>({...i(L),...Zg(C.map(M=>M.route).filter(Boolean),L)})}let l={},o=Dn(t.routes,s,void 0,l),c,u=t.basename||"/";u.startsWith("/")||(u=`/${u}`);let m=t.dataStrategy||xv,d={...t.future},x=null,y=new Set,v=null,b=null,E=null,h=t.hydrationData!=null,p=Sr(o,t.history.location,u),j=!1,R=null,N,P;if(p==null&&!t.patchRoutesOnNavigation){let C=Et(404,{pathname:t.history.location.pathname}),{matches:L,route:M}=ji(o);N=!0,P=!N,p=L,R={[M.id]:C}}else if(p&&!t.hydrationData&&Yn(p,o,t.history.location.pathname).active&&(p=null),p)if(p.some(C=>C.route.lazy))N=!1,P=!N;else if(!p.some(C=>vc(C.route)))N=!0,P=!N;else{let C=t.hydrationData?t.hydrationData.loaderData:null,L=t.hydrationData?t.hydrationData.errors:null,M=p;if(L){let I=p.findIndex(z=>L[z.route.id]!==void 0);M=M.slice(0,I+1)}P=!1,N=M.every(I=>{let z=ah(I.route,C,L);return P=P||z.renderFallback,!z.shouldLoad})}else{N=!1,P=!N,p=[];let C=Yn(null,o,t.history.location.pathname);C.active&&C.matches&&(j=!0,p=C.matches)}let _,w={historyAction:t.history.action,location:t.history.location,matches:p,initialized:N,renderFallback:P,navigation:hl,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||R,fetchers:new Map,blockers:new Map},$="POP",F=null,le=!1,ee,ve=!1,te=new Map,q=null,H=!1,re=!1,O=new Set,B=new Map,G=0,ae=-1,de=new Map,ye=new Set,Le=new Map,Fe=new Map,Ee=new Set,$e=new Map,la,kt=null;function Nh(){if(x=t.history.listen(({action:C,location:L,delta:M})=>{if(la){la(),la=void 0;return}Ie($e.size===0||M!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let I=Oc({currentLocation:w.location,nextLocation:L,historyAction:C});if(I&&M!=null){let z=new Promise(K=>{la=K});t.history.go(M*-1),Kn(I,{state:"blocked",location:L,proceed(){Kn(I,{state:"proceeding",proceed:void 0,reset:void 0,location:L}),z.then(()=>t.history.go(M))},reset(){let K=new Map(w.blockers);K.set(I,en),We({blockers:K})}}),F==null||F.resolve(),F=null;return}return zr(C,L)}),a){_v(r,te);let C=()=>qv(r,te);r.addEventListener("pagehide",C),q=()=>r.removeEventListener("pagehide",C)}return w.initialized||zr("POP",w.location,{initialHydration:!0}),_}function kh(){x&&x(),q&&q(),y.clear(),ee&&ee.abort(),w.fetchers.forEach((C,L)=>Is(L)),w.blockers.forEach((C,L)=>qc(L))}function Ph(C){return y.add(C),()=>y.delete(C)}function We(C,L={}){C.matches&&(C.matches=C.matches.map(z=>{let K=l[z.route.id],X=z.route;return X.element!==K.element||X.errorElement!==K.errorElement||X.hydrateFallbackElement!==K.hydrateFallbackElement?{...z,route:K}:z})),w={...w,...C};let M=[],I=[];w.fetchers.forEach((z,K)=>{z.state==="idle"&&(Ee.has(K)?M.push(K):I.push(K))}),Ee.forEach(z=>{!w.fetchers.has(z)&&!B.has(z)&&M.push(z)}),[...y].forEach(z=>z(w,{deletedFetchers:M,newErrors:C.errors??null,viewTransitionOpts:L.viewTransitionOpts,flushSync:L.flushSync===!0})),M.forEach(z=>Is(z)),I.forEach(z=>w.fetchers.delete(z))}function oa(C,L,{flushSync:M}={}){var ne,Y;let I=w.actionData!=null&&w.navigation.formMethod!=null&&Ze(w.navigation.formMethod)&&w.navigation.state==="loading"&&((ne=C.state)==null?void 0:ne._isRedirect)!==!0,z;L.actionData?Object.keys(L.actionData).length>0?z=L.actionData:z=null:I?z=w.actionData:z=null;let K=L.loaderData?hd(w.loaderData,L.loaderData,L.matches||[],L.errors):w.loaderData,X=w.blockers;X.size>0&&(X=new Map(X),X.forEach((ce,he)=>X.set(he,en)));let W=H?!1:Dc(C,L.matches||w.matches),V=le===!0||w.navigation.formMethod!=null&&Ze(w.navigation.formMethod)&&((Y=C.state)==null?void 0:Y._isRedirect)!==!0;c&&(o=c,c=void 0),H||$==="POP"||($==="PUSH"?t.history.push(C,C.state):$==="REPLACE"&&t.history.replace(C,C.state));let Z;if($==="POP"){let ce=te.get(w.location.pathname);ce&&ce.has(C.pathname)?Z={currentLocation:w.location,nextLocation:C}:te.has(C.pathname)&&(Z={currentLocation:C,nextLocation:w.location})}else if(ve){let ce=te.get(w.location.pathname);ce?ce.add(C.pathname):(ce=new Set([C.pathname]),te.set(w.location.pathname,ce)),Z={currentLocation:w.location,nextLocation:C}}We({...L,actionData:z,loaderData:K,historyAction:$,location:C,initialized:!0,renderFallback:!1,navigation:hl,revalidation:"idle",restoreScrollPosition:W,preventScrollReset:V,blockers:X},{viewTransitionOpts:Z,flushSync:M===!0}),$="POP",le=!1,ve=!1,H=!1,re=!1,F==null||F.resolve(),F=null,kt==null||kt.resolve(),kt=null}async function Rc(C,L){if(F==null||F.resolve(),F=null,typeof C=="number"){F||(F=vd());let Me=F.promise;return t.history.go(C),Me}let M=vo(w.location,w.matches,u,C,L==null?void 0:L.fromRouteId,L==null?void 0:L.relative),{path:I,submission:z,error:K}=id(!1,M,L),X;L!=null&&L.unstable_mask&&(X={pathname:"",search:"",hash:"",...typeof L.unstable_mask=="string"?Yt(L.unstable_mask):{...w.location.unstable_mask,...L.unstable_mask}});let W=w.location,V=In(W,I,L&&L.state,void 0,X);V={...V,...t.history.encodeLocation(V)};let Z=L&&L.replace!=null?L.replace:void 0,ne="PUSH";Z===!0?ne="REPLACE":Z===!1||z!=null&&Ze(z.formMethod)&&z.formAction===w.location.pathname+w.location.search&&(ne="REPLACE");let Y=L&&"preventScrollReset"in L?L.preventScrollReset===!0:void 0,ce=(L&&L.flushSync)===!0,he=Oc({currentLocation:W,nextLocation:V,historyAction:ne});if(he){Kn(he,{state:"blocked",location:V,proceed(){Kn(he,{state:"proceeding",proceed:void 0,reset:void 0,location:V}),Rc(C,L)},reset(){let Me=new Map(w.blockers);Me.set(he,en),We({blockers:Me})}});return}await zr(ne,V,{submission:z,pendingError:K,preventScrollReset:Y,replace:L&&L.replace,enableViewTransition:L&&L.viewTransition,flushSync:ce,callSiteDefaultShouldRevalidate:L&&L.unstable_defaultShouldRevalidate})}function _h(){kt||(kt=vd()),Os(),We({revalidation:"loading"});let C=kt.promise;return w.navigation.state==="submitting"?C:w.navigation.state==="idle"?(zr(w.historyAction,w.location,{startUninterruptedRevalidation:!0}),C):(zr($||w.historyAction,w.navigation.location,{overrideNavigation:w.navigation,enableViewTransition:ve===!0}),C)}async function zr(C,L,M){ee&&ee.abort(),ee=null,$=C,H=(M&&M.startUninterruptedRevalidation)===!0,$h(w.location,w.matches),le=(M&&M.preventScrollReset)===!0,ve=(M&&M.enableViewTransition)===!0;let I=c||o,z=M&&M.overrideNavigation,K=M!=null&&M.initialHydration&&w.matches&&w.matches.length>0&&!j?w.matches:Sr(I,L,u),X=(M&&M.flushSync)===!0;if(K&&w.initialized&&!re&&Cv(w.location,L)&&!(M&&M.submission&&Ze(M.submission.formMethod))){oa(L,{matches:K},{flushSync:X});return}let W=Yn(K,I,L.pathname);if(W.active&&W.matches&&(K=W.matches),!K){let{error:Ue,notFoundMatches:rt,route:be}=Ds(L.pathname);oa(L,{matches:rt,loaderData:{},errors:{[be.id]:Ue}},{flushSync:X});return}ee=new AbortController;let V=pa(t.history,L,ee.signal,M&&M.submission),Z=t.getContext?await t.getContext():new Zu,ne;if(M&&M.pendingError)ne=[Er(K).route.id,{type:"error",error:M.pendingError}];else if(M&&M.submission&&Ze(M.submission.formMethod)){let Ue=await qh(V,L,M.submission,K,Z,W.active,M&&M.initialHydration===!0,{replace:M.replace,flushSync:X});if(Ue.shortCircuited)return;if(Ue.pendingActionResult){let[rt,be]=Ue.pendingActionResult;if(xt(be)&&Fn(be.error)&&be.error.status===404){ee=null,oa(L,{matches:Ue.matches,loaderData:{},errors:{[rt]:be.error}});return}}K=Ue.matches||K,ne=Ue.pendingActionResult,z=fl(L,M.submission),X=!1,W.active=!1,V=pa(t.history,V.url,V.signal)}let{shortCircuited:Y,matches:ce,loaderData:he,errors:Me}=await Oh(V,L,K,Z,W.active,z,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,X,ne,M&&M.callSiteDefaultShouldRevalidate);Y||(ee=null,oa(L,{matches:ce||K,...fd(ne),loaderData:he,errors:Me}))}async function qh(C,L,M,I,z,K,X,W={}){Os();let V=kv(L,M);if(We({navigation:V},{flushSync:W.flushSync===!0}),K){let Y=await Xn(I,L.pathname,C.signal);if(Y.type==="aborted")return{shortCircuited:!0};if(Y.type==="error"){if(Y.partialMatches.length===0){let{matches:he,route:Me}=ji(o);return{matches:he,pendingActionResult:[Me.id,{type:"error",error:Y.error}]}}let ce=Er(Y.partialMatches).route.id;return{matches:Y.partialMatches,pendingActionResult:[ce,{type:"error",error:Y.error}]}}else if(Y.matches)I=Y.matches;else{let{notFoundMatches:ce,error:he,route:Me}=Ds(L.pathname);return{matches:ce,pendingActionResult:[Me.id,{type:"error",error:he}]}}}let Z,ne=Oi(I,L);if(!ne.route.action&&!ne.route.lazy)Z={type:"error",error:Et(405,{method:C.method,pathname:L.pathname,routeId:ne.route.id})};else{let Y=ka(s,l,C,I,ne,X?[]:n,z),ce=await Ga(C,Y,z,null);if(Z=ce[ne.route.id],!Z){for(let he of I)if(ce[he.route.id]){Z=ce[he.route.id];break}}if(C.signal.aborted)return{shortCircuited:!0}}if(Kr(Z)){let Y;return W&&W.replace!=null?Y=W.replace:Y=dd(Z.response.headers.get("Location"),new URL(C.url),u,t.history)===w.location.pathname+w.location.search,await Br(C,Z,!0,{submission:M,replace:Y}),{shortCircuited:!0}}if(xt(Z)){let Y=Er(I,ne.route.id);return(W&&W.replace)!==!0&&($="PUSH"),{matches:I,pendingActionResult:[Y.route.id,Z,ne.route.id]}}return{matches:I,pendingActionResult:[ne.route.id,Z]}}async function Oh(C,L,M,I,z,K,X,W,V,Z,ne,Y,ce){let he=K||fl(L,X),Me=X||W||gd(he),Ue=!H&&!Z;if(z){if(Ue){let Ke=Mc(Y);We({navigation:he,...Ke!==void 0?{actionData:Ke}:{}},{flushSync:ne})}let xe=await Xn(M,L.pathname,C.signal);if(xe.type==="aborted")return{shortCircuited:!0};if(xe.type==="error"){if(xe.partialMatches.length===0){let{matches:ca,route:Hr}=ji(o);return{matches:ca,loaderData:{},errors:{[Hr.id]:xe.error}}}let Ke=Er(xe.partialMatches).route.id;return{matches:xe.partialMatches,loaderData:{},errors:{[Ke]:xe.error}}}else if(xe.matches)M=xe.matches;else{let{error:Ke,notFoundMatches:ca,route:Hr}=Ds(L.pathname);return{matches:ca,loaderData:{},errors:{[Hr.id]:Ke}}}}let rt=c||o,{dsMatches:be,revalidatingFetchers:St}=sd(C,I,s,l,t.history,w,M,Me,L,Z?[]:n,Z===!0,re,O,Ee,Le,ye,rt,u,t.patchRoutesOnNavigation!=null,Y,ce);if(ae=++G,!t.dataStrategy&&!be.some(xe=>xe.shouldLoad)&&!be.some(xe=>xe.route.middleware&&xe.route.middleware.length>0)&&St.length===0){let xe=Pc();return oa(L,{matches:M,loaderData:{},errors:Y&&xt(Y[1])?{[Y[0]]:Y[1].error}:null,...fd(Y),...xe?{fetchers:new Map(w.fetchers)}:{}},{flushSync:ne}),{shortCircuited:!0}}if(Ue){let xe={};if(!z){xe.navigation=he;let Ke=Mc(Y);Ke!==void 0&&(xe.actionData=Ke)}St.length>0&&(xe.fetchers=Ih(St)),We(xe,{flushSync:ne})}St.forEach(xe=>{rr(xe.key),xe.controller&&B.set(xe.key,xe.controller)});let Ur=()=>St.forEach(xe=>rr(xe.key));ee&&ee.signal.addEventListener("abort",Ur);let{loaderResults:Ha,fetcherResults:hr}=await Tc(be,St,C,I);if(C.signal.aborted)return{shortCircuited:!0};ee&&ee.signal.removeEventListener("abort",Ur),St.forEach(xe=>B.delete(xe.key));let Ut=bi(Ha);if(Ut)return await Br(C,Ut.result,!0,{replace:V}),{shortCircuited:!0};if(Ut=bi(hr),Ut)return ye.add(Ut.key),await Br(C,Ut.result,!0,{replace:V}),{shortCircuited:!0};let{loaderData:Fs,errors:$a}=md(w,M,Ha,Y,St,hr);Z&&w.errors&&($a={...w.errors,...$a});let Gr=Pc(),Zn=_c(ae),ei=Gr||Zn||St.length>0;return{matches:M,loaderData:Fs,errors:$a,...ei?{fetchers:new Map(w.fetchers)}:{}}}function Mc(C){if(C&&!xt(C[1]))return{[C[0]]:C[1].data};if(w.actionData)return Object.keys(w.actionData).length===0?null:w.actionData}function Ih(C){return C.forEach(L=>{let M=w.fetchers.get(L.key),I=tn(void 0,M?M.data:void 0);w.fetchers.set(L.key,I)}),new Map(w.fetchers)}async function Dh(C,L,M,I){rr(C);let z=(I&&I.flushSync)===!0,K=c||o,X=vo(w.location,w.matches,u,M,L,I==null?void 0:I.relative),W=Sr(K,X,u),V=Yn(W,K,X);if(V.active&&V.matches&&(W=V.matches),!W){tr(C,L,Et(404,{pathname:X}),{flushSync:z});return}let{path:Z,submission:ne,error:Y}=id(!0,X,I);if(Y){tr(C,L,Y,{flushSync:z});return}let ce=t.getContext?await t.getContext():new Zu,he=(I&&I.preventScrollReset)===!0;if(ne&&Ze(ne.formMethod)){await Fh(C,L,Z,W,ce,V.active,z,he,ne,I&&I.unstable_defaultShouldRevalidate);return}Le.set(C,{routeId:L,path:Z}),await zh(C,L,Z,W,ce,V.active,z,he,ne)}async function Fh(C,L,M,I,z,K,X,W,V,Z){Os(),Le.delete(C);let ne=w.fetchers.get(C);er(C,Pv(V,ne),{flushSync:X});let Y=new AbortController,ce=pa(t.history,M,Y.signal,V);if(K){let Pe=await Xn(I,new URL(ce.url).pathname,ce.signal,C);if(Pe.type==="aborted")return;if(Pe.type==="error"){tr(C,L,Pe.error,{flushSync:X});return}else if(Pe.matches)I=Pe.matches;else{tr(C,L,Et(404,{pathname:M}),{flushSync:X});return}}let he=Oi(I,M);if(!he.route.action&&!he.route.lazy){let Pe=Et(405,{method:V.formMethod,pathname:M,routeId:L});tr(C,L,Pe,{flushSync:X});return}B.set(C,Y);let Me=G,Ue=ka(s,l,ce,I,he,n,z),rt=await Ga(ce,Ue,z,C),be=rt[he.route.id];if(!be){for(let Pe of Ue)if(rt[Pe.route.id]){be=rt[Pe.route.id];break}}if(ce.signal.aborted){B.get(C)===Y&&B.delete(C);return}if(Ee.has(C)){if(Kr(be)||xt(be)){er(C,ar(void 0));return}}else{if(Kr(be))if(B.delete(C),ae>Me){er(C,ar(void 0));return}else return ye.add(C),er(C,tn(V)),Br(ce,be,!1,{fetcherSubmission:V,preventScrollReset:W});if(xt(be)){tr(C,L,be.error);return}}let St=w.navigation.location||w.location,Ur=pa(t.history,St,Y.signal),Ha=c||o,hr=w.navigation.state!=="idle"?Sr(Ha,w.navigation.location,u):w.matches;ue(hr,"Didn't find any matches after fetcher action");let Ut=++G;de.set(C,Ut);let Fs=tn(V,be.data);w.fetchers.set(C,Fs);let{dsMatches:$a,revalidatingFetchers:Gr}=sd(Ur,z,s,l,t.history,w,hr,V,St,n,!1,re,O,Ee,Le,ye,Ha,u,t.patchRoutesOnNavigation!=null,[he.route.id,be],Z);Gr.filter(Pe=>Pe.key!==C).forEach(Pe=>{let ti=Pe.key,zc=w.fetchers.get(ti),Jh=tn(void 0,zc?zc.data:void 0);w.fetchers.set(ti,Jh),rr(ti),Pe.controller&&B.set(ti,Pe.controller)}),We({fetchers:new Map(w.fetchers)});let Zn=()=>Gr.forEach(Pe=>rr(Pe.key));Y.signal.addEventListener("abort",Zn);let{loaderResults:ei,fetcherResults:xe}=await Tc($a,Gr,Ur,z);if(Y.signal.aborted)return;if(Y.signal.removeEventListener("abort",Zn),de.delete(C),B.delete(C),Gr.forEach(Pe=>B.delete(Pe.key)),w.fetchers.has(C)){let Pe=ar(be.data);w.fetchers.set(C,Pe)}let Ke=bi(ei);if(Ke)return Br(Ur,Ke.result,!1,{preventScrollReset:W});if(Ke=bi(xe),Ke)return ye.add(Ke.key),Br(Ur,Ke.result,!1,{preventScrollReset:W});let{loaderData:ca,errors:Hr}=md(w,hr,ei,void 0,Gr,xe);_c(Ut),w.navigation.state==="loading"&&Ut>ae?(ue($,"Expected pending action"),ee&&ee.abort(),oa(w.navigation.location,{matches:hr,loaderData:ca,errors:Hr,fetchers:new Map(w.fetchers)})):(We({errors:Hr,loaderData:hd(w.loaderData,ca,hr,Hr),fetchers:new Map(w.fetchers)}),re=!1)}async function zh(C,L,M,I,z,K,X,W,V){let Z=w.fetchers.get(C);er(C,tn(V,Z?Z.data:void 0),{flushSync:X});let ne=new AbortController,Y=pa(t.history,M,ne.signal);if(K){let be=await Xn(I,new URL(Y.url).pathname,Y.signal,C);if(be.type==="aborted")return;if(be.type==="error"){tr(C,L,be.error,{flushSync:X});return}else if(be.matches)I=be.matches;else{tr(C,L,Et(404,{pathname:M}),{flushSync:X});return}}let ce=Oi(I,M);B.set(C,ne);let he=G,Me=ka(s,l,Y,I,ce,n,z),rt=(await Ga(Y,Me,z,C))[ce.route.id];if(B.get(C)===ne&&B.delete(C),!Y.signal.aborted){if(Ee.has(C)){er(C,ar(void 0));return}if(Kr(rt))if(ae>he){er(C,ar(void 0));return}else{ye.add(C),await Br(Y,rt,!1,{preventScrollReset:W});return}if(xt(rt)){tr(C,L,rt.error);return}er(C,ar(rt.data))}}async function Br(C,L,M,{submission:I,fetcherSubmission:z,preventScrollReset:K,replace:X}={}){M||(F==null||F.resolve(),F=null),L.response.headers.has("X-Remix-Revalidate")&&(re=!0);let W=L.response.headers.get("Location");ue(W,"Expected a Location header on the redirect Response"),W=dd(W,new URL(C.url),u,t.history);let V=In(w.location,W,{_isRedirect:!0});if(a){let Me=!1;if(L.response.headers.has("X-Remix-Reload-Document"))Me=!0;else if(xc(W)){const Ue=$m(W,!0);Me=Ue.origin!==r.location.origin||Tt(Ue.pathname,u)==null}if(Me){X?r.location.replace(W):r.location.assign(W);return}}ee=null;let Z=X===!0||L.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:ne,formAction:Y,formEncType:ce}=w.navigation;!I&&!z&&ne&&Y&&ce&&(I=gd(w.navigation));let he=I||z;if(ov.has(L.response.status)&&he&&Ze(he.formMethod))await zr(Z,V,{submission:{...he,formAction:W},preventScrollReset:K||le,enableViewTransition:M?ve:void 0});else{let Me=fl(V,I);await zr(Z,V,{overrideNavigation:Me,fetcherSubmission:z,preventScrollReset:K||le,enableViewTransition:M?ve:void 0})}}async function Ga(C,L,M,I){var X;let z,K={};try{z=await vv(m,C,L,I,M,!1)}catch(W){return L.filter(V=>V.shouldLoad).forEach(V=>{K[V.route.id]={type:"error",error:W}}),K}if(C.signal.aborted)return K;if(!Ze(C.method))for(let W of L){if(((X=z[W.route.id])==null?void 0:X.type)==="error")break;!z.hasOwnProperty(W.route.id)&&!w.loaderData.hasOwnProperty(W.route.id)&&(!w.errors||!w.errors.hasOwnProperty(W.route.id))&&W.shouldCallHandler()&&(z[W.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${W.route.id}`)})}for(let[W,V]of Object.entries(z))if(Rv(V)){let Z=V.result;K[W]={type:"redirect",response:Sv(Z,C,W,L,u)}}else K[W]=await yv(V);return K}async function Tc(C,L,M,I){let z=Ga(M,C,I,null),K=Promise.all(L.map(async V=>{if(V.matches&&V.match&&V.request&&V.controller){let ne=(await Ga(V.request,V.matches,I,V.key))[V.match.route.id];return{[V.key]:ne}}else return Promise.resolve({[V.key]:{type:"error",error:Et(404,{pathname:V.path})}})})),X=await z,W=(await K).reduce((V,Z)=>Object.assign(V,Z),{});return{loaderResults:X,fetcherResults:W}}function Os(){re=!0,Le.forEach((C,L)=>{B.has(L)&&O.add(L),rr(L)})}function er(C,L,M={}){w.fetchers.set(C,L),We({fetchers:new Map(w.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function tr(C,L,M,I={}){let z=Er(w.matches,L);Is(C),We({errors:{[z.route.id]:M},fetchers:new Map(w.fetchers)},{flushSync:(I&&I.flushSync)===!0})}function Nc(C){return Fe.set(C,(Fe.get(C)||0)+1),Ee.has(C)&&Ee.delete(C),w.fetchers.get(C)||cv}function Bh(C,L){rr(C,L==null?void 0:L.reason),er(C,ar(null))}function Is(C){let L=w.fetchers.get(C);B.has(C)&&!(L&&L.state==="loading"&&de.has(C))&&rr(C),Le.delete(C),de.delete(C),ye.delete(C),Ee.delete(C),O.delete(C),w.fetchers.delete(C)}function Uh(C){let L=(Fe.get(C)||0)-1;L<=0?(Fe.delete(C),Ee.add(C)):Fe.set(C,L),We({fetchers:new Map(w.fetchers)})}function rr(C,L){let M=B.get(C);M&&(M.abort(L),B.delete(C))}function kc(C){for(let L of C){let M=Nc(L),I=ar(M.data);w.fetchers.set(L,I)}}function Pc(){let C=[],L=!1;for(let M of ye){let I=w.fetchers.get(M);ue(I,`Expected fetcher: ${M}`),I.state==="loading"&&(ye.delete(M),C.push(M),L=!0)}return kc(C),L}function _c(C){let L=[];for(let[M,I]of de)if(I<C){let z=w.fetchers.get(M);ue(z,`Expected fetcher: ${M}`),z.state==="loading"&&(rr(M),de.delete(M),L.push(M))}return kc(L),L.length>0}function Gh(C,L){let M=w.blockers.get(C)||en;return $e.get(C)!==L&&$e.set(C,L),M}function qc(C){w.blockers.delete(C),$e.delete(C)}function Kn(C,L){let M=w.blockers.get(C)||en;ue(M.state==="unblocked"&&L.state==="blocked"||M.state==="blocked"&&L.state==="blocked"||M.state==="blocked"&&L.state==="proceeding"||M.state==="blocked"&&L.state==="unblocked"||M.state==="proceeding"&&L.state==="unblocked",`Invalid blocker state transition: ${M.state} -> ${L.state}`);let I=new Map(w.blockers);I.set(C,L),We({blockers:I})}function Oc({currentLocation:C,nextLocation:L,historyAction:M}){if($e.size===0)return;$e.size>1&&Ie(!1,"A router only supports one blocker at a time");let I=Array.from($e.entries()),[z,K]=I[I.length-1],X=w.blockers.get(z);if(!(X&&X.state==="proceeding")&&K({currentLocation:C,nextLocation:L,historyAction:M}))return z}function Ds(C){let L=Et(404,{pathname:C}),M=c||o,{matches:I,route:z}=ji(M);return{notFoundMatches:I,route:z,error:L}}function Hh(C,L,M){if(v=C,E=L,b=M||null,!h&&w.navigation===hl){h=!0;let I=Dc(w.location,w.matches);I!=null&&We({restoreScrollPosition:I})}return()=>{v=null,E=null,b=null}}function Ic(C,L){return b&&b(C,L.map(I=>qg(I,w.loaderData)))||C.key}function $h(C,L){if(v&&E){let M=Ic(C,L);v[M]=E()}}function Dc(C,L){if(v){let M=Ic(C,L),I=v[M];if(typeof I=="number")return I}return null}function Yn(C,L,M){if(t.patchRoutesOnNavigation)if(C){if(Object.keys(C[0].params).length>0)return{active:!0,matches:cn(L,M,u,!0)}}else return{active:!0,matches:cn(L,M,u,!0)||[]};return{active:!1,matches:null}}async function Xn(C,L,M,I){if(!t.patchRoutesOnNavigation)return{type:"success",matches:C};let z=C;for(;;){let K=c==null,X=c||o,W=l;try{await t.patchRoutesOnNavigation({signal:M,path:L,matches:z,fetcherKey:I,patch:(ne,Y)=>{M.aborted||ld(ne,Y,X,W,s,!1)}})}catch(ne){return{type:"error",error:ne,partialMatches:z}}finally{K&&!M.aborted&&(o=[...o])}if(M.aborted)return{type:"aborted"};let V=Sr(X,L,u),Z=null;if(V){if(Object.keys(V[0].params).length===0)return{type:"success",matches:V};if(Z=cn(X,L,u,!0),!(Z&&z.length<Z.length&&Fc(z,Z.slice(0,z.length))))return{type:"success",matches:V}}if(Z||(Z=cn(X,L,u,!0)),!Z||Fc(z,Z))return{type:"success",matches:null};z=Z}}function Fc(C,L){return C.length===L.length&&C.every((M,I)=>M.route.id===L[I].route.id)}function Vh(C){l={},c=Dn(C,s,void 0,l)}function Qh(C,L,M=!1){let I=c==null;ld(C,L,c||o,l,s,M),I&&(o=[...o],We({}))}return _={get basename(){return u},get future(){return d},get state(){return w},get routes(){return o},get window(){return r},initialize:Nh,subscribe:Ph,enableScrollRestoration:Hh,navigate:Rc,fetch:Dh,revalidate:_h,createHref:C=>t.history.createHref(C),encodeLocation:C=>t.history.encodeLocation(C),getFetcher:Nc,resetFetcher:Bh,deleteFetcher:Uh,dispose:kh,getBlocker:Gh,deleteBlocker:qc,patchRoutes:Qh,_internalFetchControllers:B,_internalSetRoutes:Vh,_internalSetStateDoNotUseOrYouWillBreakYourApp(C){We(C)}},t.unstable_instrumentations&&(_=ev(_,t.unstable_instrumentations.map(C=>C.router).filter(Boolean))),_}function pv(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function vo(t,r,a,n,i,s){let l,o;if(i){l=[];for(let u of r)if(l.push(u),u.route.id===i){o=u;break}}else l=r,o=r[r.length-1];let c=Ts(n||".",gc(l),Tt(t.pathname,a)||t.pathname,s==="path");if(n==null&&(c.search=t.search,c.hash=t.hash),(n==null||n===""||n===".")&&o){let u=bc(c.search);if(o.route.index&&!u)c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index";else if(!o.route.index&&u){let m=new URLSearchParams(c.search),d=m.getAll("index");m.delete("index"),d.filter(y=>y).forEach(y=>m.append("index",y));let x=m.toString();c.search=x?`?${x}`:""}}return a!=="/"&&(c.pathname=Jg({basename:a,pathname:c.pathname})),Kt(c)}function id(t,r,a){if(!a||!pv(a))return{path:r};if(a.formMethod&&!Nv(a.formMethod))return{path:r,error:Et(405,{method:a.formMethod})};let n=()=>({path:r,error:Et(400,{type:"invalid-body"})}),s=(a.formMethod||"get").toUpperCase(),l=ch(r);if(a.body!==void 0){if(a.formEncType==="text/plain"){if(!Ze(s))return n();let d=typeof a.body=="string"?a.body:a.body instanceof FormData||a.body instanceof URLSearchParams?Array.from(a.body.entries()).reduce((x,[y,v])=>`${x}${y}=${v}
`,""):String(a.body);return{path:r,submission:{formMethod:s,formAction:l,formEncType:a.formEncType,formData:void 0,json:void 0,text:d}}}else if(a.formEncType==="application/json"){if(!Ze(s))return n();try{let d=typeof a.body=="string"?JSON.parse(a.body):a.body;return{path:r,submission:{formMethod:s,formAction:l,formEncType:a.formEncType,formData:void 0,json:d,text:void 0}}}catch{return n()}}}ue(typeof FormData=="function","FormData is not available in this environment");let o,c;if(a.formData)o=bo(a.formData),c=a.formData;else if(a.body instanceof FormData)o=bo(a.body),c=a.body;else if(a.body instanceof URLSearchParams)o=a.body,c=pd(o);else if(a.body==null)o=new URLSearchParams,c=new FormData;else try{o=new URLSearchParams(a.body),c=pd(o)}catch{return n()}let u={formMethod:s,formAction:l,formEncType:a&&a.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Ze(u.formMethod))return{path:r,submission:u};let m=Yt(r);return t&&m.search&&bc(m.search)&&o.append("index",""),m.search=`?${o}`,{path:Kt(m),submission:u}}function sd(t,r,a,n,i,s,l,o,c,u,m,d,x,y,v,b,E,h,p,j,R){var q;let N=j?xt(j[1])?j[1].error:j[1].data:void 0,P=i.createURL(s.location),_=i.createURL(c),w;if(m&&s.errors){let H=Object.keys(s.errors)[0];w=l.findIndex(re=>re.route.id===H)}else if(j&&xt(j[1])){let H=j[0];w=l.findIndex(re=>re.route.id===H)-1}let $=j?j[1].statusCode:void 0,F=$&&$>=400,le={currentUrl:P,currentParams:((q=s.matches[0])==null?void 0:q.params)||{},nextUrl:_,nextParams:l[0].params,...o,actionResult:N,actionStatus:$},ee=Vn(l),ve=l.map((H,re)=>{let{route:O}=H,B=null;if(w!=null&&re>w)B=!1;else if(O.lazy)B=!0;else if(!vc(O))B=!1;else if(m){let{shouldLoad:ye}=ah(O,s.loaderData,s.errors);B=ye}else mv(s.loaderData,s.matches[re],H)&&(B=!0);if(B!==null)return jo(a,n,t,ee,H,u,r,B);let G=!1;typeof R=="boolean"?G=R:F?G=!1:(d||P.pathname+P.search===_.pathname+_.search||P.search!==_.search||hv(s.matches[re],H))&&(G=!0);let ae={...le,defaultShouldRevalidate:G},de=jn(H,ae);return jo(a,n,t,ee,H,u,r,de,ae,R)}),te=[];return v.forEach((H,re)=>{if(m||!l.some(Fe=>Fe.route.id===H.routeId)||y.has(re))return;let O=s.fetchers.get(re),B=O&&O.state!=="idle"&&O.data===void 0,G=Sr(E,H.path,h);if(!G){if(p&&B)return;te.push({key:re,routeId:H.routeId,path:H.path,matches:null,match:null,request:null,controller:null});return}if(b.has(re))return;let ae=Oi(G,H.path),de=new AbortController,ye=pa(i,H.path,de.signal),Le=null;if(x.has(re))x.delete(re),Le=ka(a,n,ye,G,ae,u,r);else if(B)d&&(Le=ka(a,n,ye,G,ae,u,r));else{let Fe;typeof R=="boolean"?Fe=R:F?Fe=!1:Fe=d;let Ee={...le,defaultShouldRevalidate:Fe};jn(ae,Ee)&&(Le=ka(a,n,ye,G,ae,u,r,Ee))}Le&&te.push({key:re,routeId:H.routeId,path:H.path,matches:Le,match:ae,request:ye,controller:de})}),{dsMatches:ve,revalidatingFetchers:te}}function vc(t){return t.loader!=null||t.middleware!=null&&t.middleware.length>0}function ah(t,r,a){if(t.lazy)return{shouldLoad:!0,renderFallback:!0};if(!vc(t))return{shouldLoad:!1,renderFallback:!1};let n=r!=null&&t.id in r,i=a!=null&&a[t.id]!==void 0;if(!n&&i)return{shouldLoad:!1,renderFallback:!1};if(typeof t.loader=="function"&&t.loader.hydrate===!0)return{shouldLoad:!0,renderFallback:!n};let s=!n&&!i;return{shouldLoad:s,renderFallback:s}}function mv(t,r,a){let n=!r||a.route.id!==r.route.id,i=!t.hasOwnProperty(a.route.id);return n||i}function hv(t,r){let a=t.route.path;return t.pathname!==r.pathname||a!=null&&a.endsWith("*")&&t.params["*"]!==r.params["*"]}function jn(t,r){if(t.route.shouldRevalidate){let a=t.route.shouldRevalidate(r);if(typeof a=="boolean")return a}return r.defaultShouldRevalidate}function ld(t,r,a,n,i,s){let l;if(t){let u=n[t];ue(u,`No route found to patch children into: routeId = ${t}`),u.children||(u.children=[]),l=u.children}else l=a;let o=[],c=[];if(r.forEach(u=>{let m=l.find(d=>nh(u,d));m?c.push({existingRoute:m,newRoute:u}):o.push(u)}),o.length>0){let u=Dn(o,i,[t||"_","patch",String((l==null?void 0:l.length)||"0")],n);l.push(...u)}if(s&&c.length>0)for(let u=0;u<c.length;u++){let{existingRoute:m,newRoute:d}=c[u],x=m,[y]=Dn([d],i,[],{},!0);Object.assign(x,{element:y.element?y.element:x.element,errorElement:y.errorElement?y.errorElement:x.errorElement,hydrateFallbackElement:y.hydrateFallbackElement?y.hydrateFallbackElement:x.hydrateFallbackElement})}}function nh(t,r){var a;return"id"in t&&"id"in r&&t.id===r.id?!0:t.index===r.index&&t.path===r.path&&t.caseSensitive===r.caseSensitive?(!t.children||t.children.length===0)&&(!r.children||r.children.length===0)?!0:((a=t.children)==null?void 0:a.every((n,i)=>{var s;return(s=r.children)==null?void 0:s.some(l=>nh(n,l))}))??!1:!1}var od=new WeakMap,ih=({key:t,route:r,manifest:a,mapRouteProperties:n})=>{let i=a[r.id];if(ue(i,"No route found in manifest"),!i.lazy||typeof i.lazy!="object")return;let s=i.lazy[t];if(!s)return;let l=od.get(i);l||(l={},od.set(i,l));let o=l[t];if(o)return o;let c=(async()=>{let u=Ng(t),d=i[t]!==void 0&&t!=="hasErrorBoundary";if(u)Ie(!u,"Route property "+t+" is not a supported lazy route property. This property will be ignored."),l[t]=Promise.resolve();else if(d)Ie(!1,`Route "${i.id}" has a static property "${t}" defined. The lazy property will be ignored.`);else{let x=await s();x!=null&&(Object.assign(i,{[t]:x}),Object.assign(i,n(i)))}typeof i.lazy=="object"&&(i.lazy[t]=void 0,Object.values(i.lazy).every(x=>x===void 0)&&(i.lazy=void 0))})();return l[t]=c,c},cd=new WeakMap;function fv(t,r,a,n,i){let s=a[t.id];if(ue(s,"No route found in manifest"),!t.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof t.lazy=="function"){let m=cd.get(s);if(m)return{lazyRoutePromise:m,lazyHandlerPromise:m};let d=(async()=>{ue(typeof t.lazy=="function","No lazy route function found");let x=await t.lazy(),y={};for(let v in x){let b=x[v];if(b===void 0)continue;let E=Pg(v),p=s[v]!==void 0&&v!=="hasErrorBoundary";E?Ie(!E,"Route property "+v+" is not a supported property to be returned from a lazy route function. This property will be ignored."):p?Ie(!p,`Route "${s.id}" has a static property "${v}" defined but its lazy function is also returning a value for this property. The lazy route property "${v}" will be ignored.`):y[v]=b}Object.assign(s,y),Object.assign(s,{...n(s),lazy:void 0})})();return cd.set(s,d),d.catch(()=>{}),{lazyRoutePromise:d,lazyHandlerPromise:d}}let l=Object.keys(t.lazy),o=[],c;for(let m of l){if(i&&i.includes(m))continue;let d=ih({key:m,route:t,manifest:a,mapRouteProperties:n});d&&(o.push(d),m===r&&(c=d))}let u=o.length>0?Promise.all(o).then(()=>{}):void 0;return u==null||u.catch(()=>{}),c==null||c.catch(()=>{}),{lazyRoutePromise:u,lazyHandlerPromise:c}}async function ud(t){let r=t.matches.filter(i=>i.shouldLoad),a={};return(await Promise.all(r.map(i=>i.resolve()))).forEach((i,s)=>{a[r[s].route.id]=i}),a}async function xv(t){return t.matches.some(r=>r.route.middleware)?sh(t,()=>ud(t)):ud(t)}function sh(t,r){return gv(t,r,n=>{if(Tv(n))throw n;return n},Av,a);function a(n,i,s){if(s)return Promise.resolve(Object.assign(s.value,{[i]:{type:"error",result:n}}));{let{matches:l}=t,o=Math.min(Math.max(l.findIndex(u=>u.route.id===i),0),Math.max(l.findIndex(u=>u.shouldCallHandler()),0)),c=Er(l,l[o].route.id).route.id;return Promise.resolve({[c]:{type:"error",result:n}})}}}async function gv(t,r,a,n,i){let{matches:s,request:l,params:o,context:c,unstable_pattern:u}=t,m=s.flatMap(x=>x.route.middleware?x.route.middleware.map(y=>[x.route.id,y]):[]);return await lh({request:l,params:o,context:c,unstable_pattern:u},m,r,a,n,i)}async function lh(t,r,a,n,i,s,l=0){let{request:o}=t;if(o.signal.aborted)throw o.signal.reason??new Error(`Request aborted: ${o.method} ${o.url}`);let c=r[l];if(!c)return await a();let[u,m]=c,d,x=async()=>{if(d)throw new Error("You may only call `next()` once per middleware");try{return d={value:await lh(t,r,a,n,i,s,l+1)},d.value}catch(y){return d={value:await s(y,u,d)},d.value}};try{let y=await m(t,x),v=y!=null?n(y):void 0;return i(v)?v:d?v??d.value:(d={value:await x()},d.value)}catch(y){return await s(y,u,d)}}function oh(t,r,a,n,i){let s=ih({key:"middleware",route:n.route,manifest:r,mapRouteProperties:t}),l=fv(n.route,Ze(a.method)?"action":"loader",r,t,i);return{middleware:s,route:l.lazyRoutePromise,handler:l.lazyHandlerPromise}}function jo(t,r,a,n,i,s,l,o,c=null,u){let m=!1,d=oh(t,r,a,i,s);return{...i,_lazyPromises:d,shouldLoad:o,shouldRevalidateArgs:c,shouldCallHandler(x){return m=!0,c?typeof u=="boolean"?jn(i,{...c,defaultShouldRevalidate:u}):typeof x=="boolean"?jn(i,{...c,defaultShouldRevalidate:x}):jn(i,c):o},resolve(x){let{lazy:y,loader:v,middleware:b}=i.route,E=m||o||x&&!Ze(a.method)&&(y||v),h=b&&b.length>0&&!v&&!y;return E&&(Ze(a.method)||!h)?jv({request:a,unstable_pattern:n,match:i,lazyHandlerPromise:d==null?void 0:d.handler,lazyRoutePromise:d==null?void 0:d.route,handlerOverride:x,scopedContext:l}):Promise.resolve({type:"data",result:void 0})}}}function ka(t,r,a,n,i,s,l,o=null){return n.map(c=>c.route.id!==i.route.id?{...c,shouldLoad:!1,shouldRevalidateArgs:o,shouldCallHandler:()=>!1,_lazyPromises:oh(t,r,a,c,s),resolve:()=>Promise.resolve({type:"data",result:void 0})}:jo(t,r,a,Vn(n),c,s,l,!0,o))}async function vv(t,r,a,n,i,s){a.some(u=>{var m;return(m=u._lazyPromises)==null?void 0:m.middleware})&&await Promise.all(a.map(u=>{var m;return(m=u._lazyPromises)==null?void 0:m.middleware}));let l={request:r,unstable_pattern:Vn(a),params:a[0].params,context:i,matches:a},c=await t({...l,fetcherKey:n,runClientMiddleware:u=>{let m=l;return sh(m,()=>u({...m,fetcherKey:n,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(a.flatMap(u=>{var m,d;return[(m=u._lazyPromises)==null?void 0:m.handler,(d=u._lazyPromises)==null?void 0:d.route]}))}catch{}return c}async function jv({request:t,unstable_pattern:r,match:a,lazyHandlerPromise:n,lazyRoutePromise:i,handlerOverride:s,scopedContext:l}){let o,c,u=Ze(t.method),m=u?"action":"loader",d=x=>{let y,v=new Promise((h,p)=>y=p);c=()=>y(),t.signal.addEventListener("abort",c);let b=h=>typeof x!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${m}" [routeId: ${a.route.id}]`)):x({request:t,unstable_pattern:r,params:a.params,context:l},...h!==void 0?[h]:[]),E=(async()=>{try{return{type:"data",result:await(s?s(p=>b(p)):b())}}catch(h){return{type:"error",result:h}}})();return Promise.race([E,v])};try{let x=u?a.route.action:a.route.loader;if(n||i)if(x){let y,[v]=await Promise.all([d(x).catch(b=>{y=b}),n,i]);if(y!==void 0)throw y;o=v}else{await n;let y=u?a.route.action:a.route.loader;if(y)[o]=await Promise.all([d(y),i]);else if(m==="action"){let v=new URL(t.url),b=v.pathname+v.search;throw Et(405,{method:t.method,pathname:b,routeId:a.route.id})}else return{type:"data",result:void 0}}else if(x)o=await d(x);else{let y=new URL(t.url),v=y.pathname+y.search;throw Et(404,{pathname:v})}}catch(x){return{type:"error",result:x}}finally{c&&t.signal.removeEventListener("abort",c)}return o}async function bv(t){let r=t.headers.get("Content-Type");return r&&/\bapplication\/json\b/.test(r)?t.body==null?null:t.json():t.text()}async function yv(t){var n,i,s,l,o;let{result:r,type:a}=t;if(jc(r)){let c;try{c=await bv(r)}catch(u){return{type:"error",error:u}}return a==="error"?{type:"error",error:new $n(r.status,r.statusText,c),statusCode:r.status,headers:r.headers}:{type:"data",data:c,statusCode:r.status,headers:r.headers}}return a==="error"?xd(r)?r.data instanceof Error?{type:"error",error:r.data,statusCode:(n=r.init)==null?void 0:n.status,headers:(i=r.init)!=null&&i.headers?new Headers(r.init.headers):void 0}:{type:"error",error:wv(r),statusCode:Fn(r)?r.status:void 0,headers:(s=r.init)!=null&&s.headers?new Headers(r.init.headers):void 0}:{type:"error",error:r,statusCode:Fn(r)?r.status:void 0}:xd(r)?{type:"data",data:r.data,statusCode:(l=r.init)==null?void 0:l.status,headers:(o=r.init)!=null&&o.headers?new Headers(r.init.headers):void 0}:{type:"data",data:r}}function Sv(t,r,a,n,i){let s=t.headers.get("Location");if(ue(s,"Redirects returned/thrown from loaders/actions must have a Location header"),!xc(s)){let l=n.slice(0,n.findIndex(o=>o.route.id===a)+1);s=vo(new URL(r.url),l,i,s),t.headers.set("Location",s)}return t}function dd(t,r,a,n){let i=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(xc(t)){let s=t,l=s.startsWith("//")?new URL(r.protocol+s):new URL(s);if(i.includes(l.protocol))throw new Error("Invalid redirect location");let o=Tt(l.pathname,a)!=null;if(l.origin===r.origin&&o)return l.pathname+l.search+l.hash}try{let s=n.createURL(t);if(i.includes(s.protocol))throw new Error("Invalid redirect location")}catch{}return t}function pa(t,r,a,n){let i=t.createURL(ch(r)).toString(),s={signal:a};if(n&&Ze(n.formMethod)){let{formMethod:l,formEncType:o}=n;s.method=l.toUpperCase(),o==="application/json"?(s.headers=new Headers({"Content-Type":o}),s.body=JSON.stringify(n.json)):o==="text/plain"?s.body=n.text:o==="application/x-www-form-urlencoded"&&n.formData?s.body=bo(n.formData):s.body=n.formData}return new Request(i,s)}function bo(t){let r=new URLSearchParams;for(let[a,n]of t.entries())r.append(a,typeof n=="string"?n:n.name);return r}function pd(t){let r=new FormData;for(let[a,n]of t.entries())r.append(a,n);return r}function Ev(t,r,a,n=!1,i=!1){let s={},l=null,o,c=!1,u={},m=a&&xt(a[1])?a[1].error:void 0;return t.forEach(d=>{if(!(d.route.id in r))return;let x=d.route.id,y=r[x];if(ue(!Kr(y),"Cannot handle redirect results in processLoaderData"),xt(y)){let v=y.error;if(m!==void 0&&(v=m,m=void 0),l=l||{},i)l[x]=v;else{let b=Er(t,x);l[b.route.id]==null&&(l[b.route.id]=v)}n||(s[x]=rh),c||(c=!0,o=Fn(y.error)?y.error.status:500),y.headers&&(u[x]=y.headers)}else s[x]=y.data,y.statusCode&&y.statusCode!==200&&!c&&(o=y.statusCode),y.headers&&(u[x]=y.headers)}),m!==void 0&&a&&(l={[a[0]]:m},a[2]&&(s[a[2]]=void 0)),{loaderData:s,errors:l,statusCode:o||200,loaderHeaders:u}}function md(t,r,a,n,i,s){let{loaderData:l,errors:o}=Ev(r,a,n);return i.filter(c=>!c.matches||c.matches.some(u=>u.shouldLoad)).forEach(c=>{let{key:u,match:m,controller:d}=c;if(d&&d.signal.aborted)return;let x=s[u];if(ue(x,"Did not find corresponding fetcher result"),xt(x)){let y=Er(t.matches,m==null?void 0:m.route.id);o&&o[y.route.id]||(o={...o,[y.route.id]:x.error}),t.fetchers.delete(u)}else if(Kr(x))ue(!1,"Unhandled fetcher revalidation redirect");else{let y=ar(x.data);t.fetchers.set(u,y)}}),{loaderData:l,errors:o}}function hd(t,r,a,n){let i=Object.entries(r).filter(([,s])=>s!==rh).reduce((s,[l,o])=>(s[l]=o,s),{});for(let s of a){let l=s.route.id;if(!r.hasOwnProperty(l)&&t.hasOwnProperty(l)&&s.route.loader&&(i[l]=t[l]),n&&n.hasOwnProperty(l))break}return i}function fd(t){return t?xt(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Er(t,r){return(r?t.slice(0,t.findIndex(n=>n.route.id===r)+1):[...t]).reverse().find(n=>n.route.hasErrorBoundary===!0)||t[0]}function ji(t){let r=t.length===1?t[0]:t.find(a=>a.index||!a.path||a.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:r}],route:r}}function Et(t,{pathname:r,routeId:a,method:n,type:i,message:s}={}){let l="Unknown Server Error",o="Unknown @remix-run/router error";return t===400?(l="Bad Request",n&&r&&a?o=`You made a ${n} request to "${r}" but did not provide a \`loader\` for route "${a}", so there is no way to handle the request.`:i==="invalid-body"&&(o="Unable to encode submission body")):t===403?(l="Forbidden",o=`Route "${a}" does not match URL "${r}"`):t===404?(l="Not Found",o=`No route matches URL "${r}"`):t===405&&(l="Method Not Allowed",n&&r&&a?o=`You made a ${n.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${a}", so there is no way to handle the request.`:n&&(o=`Invalid request method "${n.toUpperCase()}"`)),new $n(t||500,l,new Error(o),!0)}function bi(t){let r=Object.entries(t);for(let a=r.length-1;a>=0;a--){let[n,i]=r[a];if(Kr(i))return{key:n,result:i}}}function ch(t){let r=typeof t=="string"?Yt(t):t;return Kt({...r,hash:""})}function Cv(t,r){return t.pathname!==r.pathname||t.search!==r.search?!1:t.hash===""?r.hash!=="":t.hash===r.hash?!0:r.hash!==""}function wv(t){var r,a;return new $n(((r=t.init)==null?void 0:r.status)??500,((a=t.init)==null?void 0:a.statusText)??"Internal Server Error",t.data)}function Av(t){return t!=null&&typeof t=="object"&&Object.entries(t).every(([r,a])=>typeof r=="string"&&Lv(a))}function Lv(t){return t!=null&&typeof t=="object"&&"type"in t&&"result"in t&&(t.type==="data"||t.type==="error")}function Rv(t){return jc(t.result)&&eh.has(t.result.status)}function xt(t){return t.type==="error"}function Kr(t){return(t&&t.type)==="redirect"}function xd(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function jc(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function Mv(t){return eh.has(t)}function Tv(t){return jc(t)&&Mv(t.status)&&t.headers.has("Location")}function Nv(t){return lv.has(t.toUpperCase())}function Ze(t){return iv.has(t.toUpperCase())}function bc(t){return new URLSearchParams(t).getAll("index").some(r=>r==="")}function Oi(t,r){let a=typeof r=="string"?Yt(r).search:r.search;if(t[t.length-1].route.index&&bc(a||""))return t[t.length-1];let n=Wm(t);return n[n.length-1]}function gd(t){let{formMethod:r,formAction:a,formEncType:n,text:i,formData:s,json:l}=t;if(!(!r||!a||!n)){if(i!=null)return{formMethod:r,formAction:a,formEncType:n,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:r,formAction:a,formEncType:n,formData:s,json:void 0,text:void 0};if(l!==void 0)return{formMethod:r,formAction:a,formEncType:n,formData:void 0,json:l,text:void 0}}}function fl(t,r){return r?{state:"loading",location:t,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function kv(t,r){return{state:"submitting",location:t,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}}function tn(t,r){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:r}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:r}}function Pv(t,r){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:r?r.data:void 0}}function ar(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function _v(t,r){try{let a=t.sessionStorage.getItem(th);if(a){let n=JSON.parse(a);for(let[i,s]of Object.entries(n||{}))s&&Array.isArray(s)&&r.set(i,new Set(s||[]))}}catch{}}function qv(t,r){if(r.size>0){let a={};for(let[n,i]of r)a[n]=[...i];try{t.sessionStorage.setItem(th,JSON.stringify(a))}catch(n){Ie(!1,`Failed to save applied view transitions in sessionStorage (${n}).`)}}}function vd(){let t,r,a=new Promise((n,i)=>{t=async s=>{n(s);try{await a}catch{}},r=async s=>{i(s);try{await a}catch{}}});return{promise:a,resolve:t,reject:r}}var sa=A.createContext(null);sa.displayName="DataRouter";var Qn=A.createContext(null);Qn.displayName="DataRouterState";var uh=A.createContext(!1);function Ov(){return A.useContext(uh)}var yc=A.createContext({isTransitioning:!1});yc.displayName="ViewTransition";var dh=A.createContext(new Map);dh.displayName="Fetchers";var Iv=A.createContext(null);Iv.displayName="Await";var Nt=A.createContext(null);Nt.displayName="Navigation";var Ns=A.createContext(null);Ns.displayName="Location";var Xt=A.createContext({outlet:null,matches:[],isDataRoute:!1});Xt.displayName="Route";var Sc=A.createContext(null);Sc.displayName="RouteError";var ph="REACT_ROUTER_ERROR",Dv="REDIRECT",Fv="ROUTE_ERROR_RESPONSE";function zv(t){if(t.startsWith(`${ph}:${Dv}:{`))try{let r=JSON.parse(t.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function Bv(t){if(t.startsWith(`${ph}:${Fv}:{`))try{let r=JSON.parse(t.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new $n(r.status,r.statusText,r.data)}catch{}}function Uv(t,{relative:r}={}){ue(Jn(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:n}=A.useContext(Nt),{hash:i,pathname:s,search:l}=Wn(t,{relative:r}),o=s;return a!=="/"&&(o=s==="/"?a:zt([a,s])),n.createHref({pathname:o,search:l,hash:i})}function Jn(){return A.useContext(Ns)!=null}function Zt(){return ue(Jn(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Ns).location}var mh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function hh(t){A.useContext(Nt).static||A.useLayoutEffect(t)}function Gv(){let{isDataRoute:t}=A.useContext(Xt);return t?nj():Hv()}function Hv(){ue(Jn(),"useNavigate() may be used only in the context of a <Router> component.");let t=A.useContext(sa),{basename:r,navigator:a}=A.useContext(Nt),{matches:n}=A.useContext(Xt),{pathname:i}=Zt(),s=JSON.stringify(gc(n)),l=A.useRef(!1);return hh(()=>{l.current=!0}),A.useCallback((c,u={})=>{if(Ie(l.current,mh),!l.current)return;if(typeof c=="number"){a.go(c);return}let m=Ts(c,JSON.parse(s),i,u.relative==="path");t==null&&r!=="/"&&(m.pathname=m.pathname==="/"?r:zt([r,m.pathname])),(u.replace?a.replace:a.push)(m,u.state,u)},[r,a,s,i,t])}var $v=A.createContext(null);function Vv(t){let r=A.useContext(Xt).outlet;return A.useMemo(()=>r&&A.createElement($v.Provider,{value:t},r),[r,t])}function Wn(t,{relative:r}={}){let{matches:a}=A.useContext(Xt),{pathname:n}=Zt(),i=JSON.stringify(gc(a));return A.useMemo(()=>Ts(t,JSON.parse(i),n,r==="path"),[t,i,n,r])}function Qv(t,r,a){ue(Jn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:n}=A.useContext(Nt),{matches:i}=A.useContext(Xt),s=i[i.length-1],l=s?s.params:{},o=s?s.pathname:"/",c=s?s.pathnameBase:"/",u=s&&s.route;{let E=u&&u.path||"";xh(o,!u||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let m=Zt(),d;d=m;let x=d.pathname||"/",y=x;if(c!=="/"){let E=c.replace(/^\//,"").split("/");y="/"+x.replace(/^\//,"").split("/").slice(E.length).join("/")}let v=Sr(t,{pathname:y});return Ie(u||v!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),Ie(v==null||v[v.length-1].route.element!==void 0||v[v.length-1].route.Component!==void 0||v[v.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Xv(v&&v.map(E=>Object.assign({},E,{params:Object.assign({},l,E.params),pathname:zt([c,n.encodeLocation?n.encodeLocation(E.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?c:zt([c,n.encodeLocation?n.encodeLocation(E.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathnameBase])})),i,a)}function Jv(){let t=aj(),r=Fn(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),a=t instanceof Error?t.stack:null,n="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:n},s={padding:"2px 4px",backgroundColor:n},l=null;return console.error("Error handled by React Router default ErrorBoundary:",t),l=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:s},"ErrorBoundary")," or"," ",A.createElement("code",{style:s},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},r),a?A.createElement("pre",{style:i},a):null,l)}var Wv=A.createElement(Jv,null),fh=class extends A.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){this.props.onError?this.props.onError(t,r):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const a=Bv(t.digest);a&&(t=a)}let r=t!==void 0?A.createElement(Xt.Provider,{value:this.props.routeContext},A.createElement(Sc.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?A.createElement(Kv,{error:t},r):r}};fh.contextType=uh;var xl=new WeakMap;function Kv({children:t,error:r}){let{basename:a}=A.useContext(Nt);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let n=zv(r.digest);if(n){let i=xl.get(r);if(i)throw i;let s=Ym(n.location,a);if(Km&&!xl.get(r))if(s.isExternal||n.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const l=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:n.replace}));throw xl.set(r,l),l}return A.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return t}function Yv({routeContext:t,match:r,children:a}){let n=A.useContext(sa);return n&&n.static&&n.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=r.route.id),A.createElement(Xt.Provider,{value:t},a)}function Xv(t,r=[],a){let n=a==null?void 0:a.state;if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(r.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,s=n==null?void 0:n.errors;if(s!=null){let m=i.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);ue(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,m+1))}let l=!1,o=-1;if(a&&n){l=n.renderFallback;for(let m=0;m<i.length;m++){let d=i[m];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(o=m),d.route.id){let{loaderData:x,errors:y}=n,v=d.route.loader&&!x.hasOwnProperty(d.route.id)&&(!y||y[d.route.id]===void 0);if(d.route.lazy||v){a.isStatic&&(l=!0),o>=0?i=i.slice(0,o+1):i=[i[0]];break}}}}let c=a==null?void 0:a.onError,u=n&&c?(m,d)=>{var x,y;c(m,{location:n.location,params:((y=(x=n.matches)==null?void 0:x[0])==null?void 0:y.params)??{},unstable_pattern:Vn(n.matches),errorInfo:d})}:void 0;return i.reduceRight((m,d,x)=>{let y,v=!1,b=null,E=null;n&&(y=s&&d.route.id?s[d.route.id]:void 0,b=d.route.errorElement||Wv,l&&(o<0&&x===0?(xh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):o===x&&(v=!0,E=d.route.hydrateFallbackElement||null)));let h=r.concat(i.slice(0,x+1)),p=()=>{let j;return y?j=b:v?j=E:d.route.Component?j=A.createElement(d.route.Component,null):d.route.element?j=d.route.element:j=m,A.createElement(Yv,{match:d,routeContext:{outlet:m,matches:h,isDataRoute:n!=null},children:j})};return n&&(d.route.ErrorBoundary||d.route.errorElement||x===0)?A.createElement(fh,{location:n.location,revalidation:n.revalidation,component:b,error:y,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:u}):p()},null)}function Ec(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zv(t){let r=A.useContext(sa);return ue(r,Ec(t)),r}function ej(t){let r=A.useContext(Qn);return ue(r,Ec(t)),r}function tj(t){let r=A.useContext(Xt);return ue(r,Ec(t)),r}function Cc(t){let r=tj(t),a=r.matches[r.matches.length-1];return ue(a.route.id,`${t} can only be used on routes that contain a unique "id"`),a.route.id}function rj(){return Cc("useRouteId")}function aj(){var n;let t=A.useContext(Sc),r=ej("useRouteError"),a=Cc("useRouteError");return t!==void 0?t:(n=r.errors)==null?void 0:n[a]}function nj(){let{router:t}=Zv("useNavigate"),r=Cc("useNavigate"),a=A.useRef(!1);return hh(()=>{a.current=!0}),A.useCallback(async(i,s={})=>{Ie(a.current,mh),a.current&&(typeof i=="number"?await t.navigate(i):await t.navigate(i,{fromRouteId:r,...s}))},[t,r])}var jd={};function xh(t,r,a){!r&&!jd[t]&&(jd[t]=!0,Ie(!1,a))}var bd={};function yd(t,r){!t&&!bd[r]&&(bd[r]=!0,console.warn(r))}var ij="useOptimistic",Sd=hf[ij],sj=()=>{};function lj(t){return Sd?Sd(t):[t,sj]}function oj(t){let r={hasErrorBoundary:t.hasErrorBoundary||t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&(t.element&&Ie(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(r,{element:A.createElement(t.Component),Component:void 0})),t.HydrateFallback&&(t.hydrateFallbackElement&&Ie(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(r,{hydrateFallbackElement:A.createElement(t.HydrateFallback),HydrateFallback:void 0})),t.ErrorBoundary&&(t.errorElement&&Ie(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(r,{errorElement:A.createElement(t.ErrorBoundary),ErrorBoundary:void 0})),r}var cj=["HydrateFallback","hydrateFallbackElement"],uj=class{constructor(){this.status="pending",this.promise=new Promise((t,r)=>{this.resolve=a=>{this.status==="pending"&&(this.status="resolved",t(a))},this.reject=a=>{this.status==="pending"&&(this.status="rejected",r(a))}})}};function dj({router:t,flushSync:r,onError:a,unstable_useTransitions:n}){n=Ov()||n;let[s,l]=A.useState(t.state),[o,c]=lj(s),[u,m]=A.useState(),[d,x]=A.useState({isTransitioning:!1}),[y,v]=A.useState(),[b,E]=A.useState(),[h,p]=A.useState(),j=A.useRef(new Map),R=A.useCallback((w,{deletedFetchers:$,newErrors:F,flushSync:le,viewTransitionOpts:ee})=>{F&&a&&Object.values(F).forEach(te=>{var q;return a(te,{location:w.location,params:((q=w.matches[0])==null?void 0:q.params)??{},unstable_pattern:Vn(w.matches)})}),w.fetchers.forEach((te,q)=>{te.data!==void 0&&j.current.set(q,te.data)}),$.forEach(te=>j.current.delete(te)),yd(le===!1||r!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let ve=t.window!=null&&t.window.document!=null&&typeof t.window.document.startViewTransition=="function";if(yd(ee==null||ve,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!ee||!ve){r&&le?r(()=>l(w)):n===!1?l(w):A.startTransition(()=>{n===!0&&c(te=>Ed(te,w)),l(w)});return}if(r&&le){r(()=>{b&&(y==null||y.resolve(),b.skipTransition()),x({isTransitioning:!0,flushSync:!0,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation})});let te=t.window.document.startViewTransition(()=>{r(()=>l(w))});te.finished.finally(()=>{r(()=>{v(void 0),E(void 0),m(void 0),x({isTransitioning:!1})})}),r(()=>E(te));return}b?(y==null||y.resolve(),b.skipTransition(),p({state:w,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation})):(m(w),x({isTransitioning:!0,flushSync:!1,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation}))},[t.window,r,b,y,n,c,a]);A.useLayoutEffect(()=>t.subscribe(R),[t,R]),A.useEffect(()=>{d.isTransitioning&&!d.flushSync&&v(new uj)},[d]),A.useEffect(()=>{if(y&&u&&t.window){let w=u,$=y.promise,F=t.window.document.startViewTransition(async()=>{n===!1?l(w):A.startTransition(()=>{n===!0&&c(le=>Ed(le,w)),l(w)}),await $});F.finished.finally(()=>{v(void 0),E(void 0),m(void 0),x({isTransitioning:!1})}),E(F)}},[u,y,t.window,n,c]),A.useEffect(()=>{y&&u&&o.location.key===u.location.key&&y.resolve()},[y,b,o.location,u]),A.useEffect(()=>{!d.isTransitioning&&h&&(m(h.state),x({isTransitioning:!0,flushSync:!1,currentLocation:h.currentLocation,nextLocation:h.nextLocation}),p(void 0))},[d.isTransitioning,h]);let N=A.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:w=>t.navigate(w),push:(w,$,F)=>t.navigate(w,{state:$,preventScrollReset:F==null?void 0:F.preventScrollReset}),replace:(w,$,F)=>t.navigate(w,{replace:!0,state:$,preventScrollReset:F==null?void 0:F.preventScrollReset})}),[t]),P=t.basename||"/",_=A.useMemo(()=>({router:t,navigator:N,static:!1,basename:P,onError:a}),[t,N,P,a]);return A.createElement(A.Fragment,null,A.createElement(sa.Provider,{value:_},A.createElement(Qn.Provider,{value:o},A.createElement(dh.Provider,{value:j.current},A.createElement(yc.Provider,{value:d},A.createElement(fj,{basename:P,location:o.location,navigationType:o.historyAction,navigator:N,unstable_useTransitions:n},A.createElement(pj,{routes:t.routes,future:t.future,state:o,isStatic:!1,onError:a})))))),null)}function Ed(t,r){return{...t,navigation:r.navigation.state!=="idle"?r.navigation:t.navigation,revalidation:r.revalidation!=="idle"?r.revalidation:t.revalidation,actionData:r.navigation.state!=="submitting"?r.actionData:t.actionData,fetchers:r.fetchers}}var pj=A.memo(mj);function mj({routes:t,future:r,state:a,isStatic:n,onError:i}){return Qv(t,void 0,{state:a,isStatic:n,onError:i})}function hj(t){return Vv(t.context)}function fj({basename:t="/",children:r=null,location:a,navigationType:n="POP",navigator:i,static:s=!1,unstable_useTransitions:l}){ue(!Jn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),c=A.useMemo(()=>({basename:o,navigator:i,static:s,unstable_useTransitions:l,future:{}}),[o,i,s,l]);typeof a=="string"&&(a=Yt(a));let{pathname:u="/",search:m="",hash:d="",state:x=null,key:y="default",unstable_mask:v}=a,b=A.useMemo(()=>{let E=Tt(u,o);return E==null?null:{location:{pathname:E,search:m,hash:d,state:x,key:y,unstable_mask:v},navigationType:n}},[o,u,m,d,x,y,n,v]);return Ie(b!=null,`<Router basename="${o}"> is not able to match the URL "${u}${m}${d}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:A.createElement(Nt.Provider,{value:c},A.createElement(Ns.Provider,{children:r,value:b}))}var Ii="get",Di="application/x-www-form-urlencoded";function ks(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function xj(t){return ks(t)&&t.tagName.toLowerCase()==="button"}function gj(t){return ks(t)&&t.tagName.toLowerCase()==="form"}function vj(t){return ks(t)&&t.tagName.toLowerCase()==="input"}function jj(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function bj(t,r){return t.button===0&&(!r||r==="_self")&&!jj(t)}var yi=null;function yj(){if(yi===null)try{new FormData(document.createElement("form"),0),yi=!1}catch{yi=!0}return yi}var Sj=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gl(t){return t!=null&&!Sj.has(t)?(Ie(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Di}"`),null):t}function Ej(t,r){let a,n,i,s,l;if(gj(t)){let o=t.getAttribute("action");n=o?Tt(o,r):null,a=t.getAttribute("method")||Ii,i=gl(t.getAttribute("enctype"))||Di,s=new FormData(t)}else if(xj(t)||vj(t)&&(t.type==="submit"||t.type==="image")){let o=t.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=t.getAttribute("formaction")||o.getAttribute("action");if(n=c?Tt(c,r):null,a=t.getAttribute("formmethod")||o.getAttribute("method")||Ii,i=gl(t.getAttribute("formenctype"))||gl(o.getAttribute("enctype"))||Di,s=new FormData(o,t),!yj()){let{name:u,type:m,value:d}=t;if(m==="image"){let x=u?`${u}.`:"";s.append(`${x}x`,"0"),s.append(`${x}y`,"0")}else u&&s.append(u,d)}}else{if(ks(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=Ii,n=null,i=Di,l=t}return s&&i==="text/plain"&&(l=s,s=void 0),{action:n,method:a.toLowerCase(),encType:i,formData:s,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function wc(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function Cj(t,r,a,n){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return a?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${n}`:i.pathname=`${i.pathname}.${n}`:i.pathname==="/"?i.pathname=`_root.${n}`:r&&Tt(i.pathname,r)==="/"?i.pathname=`${r.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function wj(t,r){if(t.id in r)return r[t.id];try{let a=await import(t.module);return r[t.id]=a,a}catch(a){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Aj(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Lj(t,r,a){let n=await Promise.all(t.map(async i=>{let s=r.routes[i.route.id];if(s){let l=await wj(s,a);return l.links?l.links():[]}return[]}));return Nj(n.flat(1).filter(Aj).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Cd(t,r,a,n,i,s){let l=(c,u)=>a[u]?c.route.id!==a[u].route.id:!0,o=(c,u)=>{var m;return a[u].pathname!==c.pathname||((m=a[u].route.path)==null?void 0:m.endsWith("*"))&&a[u].params["*"]!==c.params["*"]};return s==="assets"?r.filter((c,u)=>l(c,u)||o(c,u)):s==="data"?r.filter((c,u)=>{var d;let m=n.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(l(c,u)||o(c,u))return!0;if(c.route.shouldRevalidate){let x=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((d=a[0])==null?void 0:d.params)||{},nextUrl:new URL(t,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Rj(t,r,{includeHydrateFallback:a}={}){return Mj(t.map(n=>{let i=r.routes[n.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),a&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function Mj(t){return[...new Set(t)]}function Tj(t){let r={},a=Object.keys(t).sort();for(let n of a)r[n]=t[n];return r}function Nj(t,r){let a=new Set;return new Set(r),t.reduce((n,i)=>{let s=JSON.stringify(Tj(i));return a.has(s)||(a.add(s),n.push({key:s,link:i})),n},[])}function gh(){let t=A.useContext(sa);return wc(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function kj(){let t=A.useContext(Qn);return wc(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Ac=A.createContext(void 0);Ac.displayName="FrameworkContext";function vh(){let t=A.useContext(Ac);return wc(t,"You must render this element inside a <HydratedRouter> element"),t}function Pj(t,r){let a=A.useContext(Ac),[n,i]=A.useState(!1),[s,l]=A.useState(!1),{onFocus:o,onBlur:c,onMouseEnter:u,onMouseLeave:m,onTouchStart:d}=r,x=A.useRef(null);A.useEffect(()=>{if(t==="render"&&l(!0),t==="viewport"){let b=h=>{h.forEach(p=>{l(p.isIntersecting)})},E=new IntersectionObserver(b,{threshold:.5});return x.current&&E.observe(x.current),()=>{E.disconnect()}}},[t]),A.useEffect(()=>{if(n){let b=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(b)}}},[n]);let y=()=>{i(!0)},v=()=>{i(!1),l(!1)};return a?t!=="intent"?[s,x,{}]:[s,x,{onFocus:rn(o,y),onBlur:rn(c,v),onMouseEnter:rn(u,y),onMouseLeave:rn(m,v),onTouchStart:rn(d,y)}]:[!1,x,{}]}function rn(t,r){return a=>{t&&t(a),a.defaultPrevented||r(a)}}function _j({page:t,...r}){let{router:a}=gh(),n=A.useMemo(()=>Sr(a.routes,t,a.basename),[a.routes,t,a.basename]);return n?A.createElement(Oj,{page:t,matches:n,...r}):null}function qj(t){let{manifest:r,routeModules:a}=vh(),[n,i]=A.useState([]);return A.useEffect(()=>{let s=!1;return Lj(t,r,a).then(l=>{s||i(l)}),()=>{s=!0}},[t,r,a]),n}function Oj({page:t,matches:r,...a}){let n=Zt(),{future:i,manifest:s,routeModules:l}=vh(),{basename:o}=gh(),{loaderData:c,matches:u}=kj(),m=A.useMemo(()=>Cd(t,r,u,s,n,"data"),[t,r,u,s,n]),d=A.useMemo(()=>Cd(t,r,u,s,n,"assets"),[t,r,u,s,n]),x=A.useMemo(()=>{if(t===n.pathname+n.search+n.hash)return[];let b=new Set,E=!1;if(r.forEach(p=>{var R;let j=s.routes[p.route.id];!j||!j.hasLoader||(!m.some(N=>N.route.id===p.route.id)&&p.route.id in c&&((R=l[p.route.id])!=null&&R.shouldRevalidate)||j.hasClientLoader?E=!0:b.add(p.route.id))}),b.size===0)return[];let h=Cj(t,o,i.unstable_trailingSlashAwareDataRequests,"data");return E&&b.size>0&&h.searchParams.set("_routes",r.filter(p=>b.has(p.route.id)).map(p=>p.route.id).join(",")),[h.pathname+h.search]},[o,i.unstable_trailingSlashAwareDataRequests,c,n,s,m,r,t,l]),y=A.useMemo(()=>Rj(d,s),[d,s]),v=qj(d);return A.createElement(A.Fragment,null,x.map(b=>A.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...a})),y.map(b=>A.createElement("link",{key:b,rel:"modulepreload",href:b,...a})),v.map(({key:b,link:E})=>A.createElement("link",{key:b,nonce:a.nonce,...E,crossOrigin:E.crossOrigin??a.crossOrigin})))}function Ij(...t){return r=>{t.forEach(a=>{typeof a=="function"?a(r):a!=null&&(a.current=r)})}}var Dj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Dj&&(window.__reactRouterVersion="7.13.1")}catch{}function Fj(t,r){return dv({basename:r==null?void 0:r.basename,getContext:r==null?void 0:r.getContext,future:r==null?void 0:r.future,history:Lg({window:r==null?void 0:r.window}),hydrationData:zj(),routes:t,mapRouteProperties:oj,hydrationRouteProperties:cj,dataStrategy:r==null?void 0:r.dataStrategy,patchRoutesOnNavigation:r==null?void 0:r.patchRoutesOnNavigation,window:r==null?void 0:r.window,unstable_instrumentations:r==null?void 0:r.unstable_instrumentations}).initialize()}function zj(){let t=window==null?void 0:window.__staticRouterHydrationData;return t&&t.errors&&(t={...t,errors:Bj(t.errors)}),t}function Bj(t){if(!t)return null;let r=Object.entries(t),a={};for(let[n,i]of r)if(i&&i.__type==="RouteErrorResponse")a[n]=new $n(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let l=new s(i.message);l.stack="",a[n]=l}catch{}}if(a[n]==null){let s=new Error(i.message);s.stack="",a[n]=s}}else a[n]=i;return a}var jh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ps=A.forwardRef(function({onClick:r,discover:a="render",prefetch:n="none",relative:i,reloadDocument:s,replace:l,unstable_mask:o,state:c,target:u,to:m,preventScrollReset:d,viewTransition:x,unstable_defaultShouldRevalidate:y,...v},b){let{basename:E,navigator:h,unstable_useTransitions:p}=A.useContext(Nt),j=typeof m=="string"&&jh.test(m),R=Ym(m,E);m=R.to;let N=Uv(m,{relative:i}),P=Zt(),_=null;if(o){let q=Ts(o,[],P.unstable_mask?P.unstable_mask.pathname:"/",!0);E!=="/"&&(q.pathname=q.pathname==="/"?E:zt([E,q.pathname])),_=h.createHref(q)}let[w,$,F]=Pj(n,v),le=Hj(m,{replace:l,unstable_mask:o,state:c,target:u,preventScrollReset:d,relative:i,viewTransition:x,unstable_defaultShouldRevalidate:y,unstable_useTransitions:p});function ee(q){r&&r(q),q.defaultPrevented||le(q)}let ve=!(R.isExternal||s),te=A.createElement("a",{...v,...F,href:(ve?_:void 0)||R.absoluteURL||N,onClick:ve?ee:r,ref:Ij(b,$),target:u,"data-discover":!j&&a==="render"?"true":void 0});return w&&!j?A.createElement(A.Fragment,null,te,A.createElement(_j,{page:N})):te});Ps.displayName="Link";var bh=A.forwardRef(function({"aria-current":r="page",caseSensitive:a=!1,className:n="",end:i=!1,style:s,to:l,viewTransition:o,children:c,...u},m){let d=Wn(l,{relative:u.relative}),x=Zt(),y=A.useContext(Qn),{navigator:v,basename:b}=A.useContext(Nt),E=y!=null&&Wj(d)&&o===!0,h=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,p=x.pathname,j=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;a||(p=p.toLowerCase(),j=j?j.toLowerCase():null,h=h.toLowerCase()),j&&b&&(j=Tt(j,b)||j);const R=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let N=p===h||!i&&p.startsWith(h)&&p.charAt(R)==="/",P=j!=null&&(j===h||!i&&j.startsWith(h)&&j.charAt(h.length)==="/"),_={isActive:N,isPending:P,isTransitioning:E},w=N?r:void 0,$;typeof n=="function"?$=n(_):$=[n,N?"active":null,P?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let F=typeof s=="function"?s(_):s;return A.createElement(Ps,{...u,"aria-current":w,className:$,ref:m,style:F,to:l,viewTransition:o},typeof c=="function"?c(_):c)});bh.displayName="NavLink";var Uj=A.forwardRef(({discover:t="render",fetcherKey:r,navigate:a,reloadDocument:n,replace:i,state:s,method:l=Ii,action:o,onSubmit:c,relative:u,preventScrollReset:m,viewTransition:d,unstable_defaultShouldRevalidate:x,...y},v)=>{let{unstable_useTransitions:b}=A.useContext(Nt),E=Qj(),h=Jj(o,{relative:u}),p=l.toLowerCase()==="get"?"get":"post",j=typeof o=="string"&&jh.test(o),R=N=>{if(c&&c(N),N.defaultPrevented)return;N.preventDefault();let P=N.nativeEvent.submitter,_=(P==null?void 0:P.getAttribute("formmethod"))||l,w=()=>E(P||N.currentTarget,{fetcherKey:r,method:_,navigate:a,replace:i,state:s,relative:u,preventScrollReset:m,viewTransition:d,unstable_defaultShouldRevalidate:x});b&&a!==!1?A.startTransition(()=>w()):w()};return A.createElement("form",{ref:v,method:p,action:h,onSubmit:n?c:R,...y,"data-discover":!j&&t==="render"?"true":void 0})});Uj.displayName="Form";function Gj(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yh(t){let r=A.useContext(sa);return ue(r,Gj(t)),r}function Hj(t,{target:r,replace:a,unstable_mask:n,state:i,preventScrollReset:s,relative:l,viewTransition:o,unstable_defaultShouldRevalidate:c,unstable_useTransitions:u}={}){let m=Gv(),d=Zt(),x=Wn(t,{relative:l});return A.useCallback(y=>{if(bj(y,r)){y.preventDefault();let v=a!==void 0?a:Kt(d)===Kt(x),b=()=>m(t,{replace:v,unstable_mask:n,state:i,preventScrollReset:s,relative:l,viewTransition:o,unstable_defaultShouldRevalidate:c});u?A.startTransition(()=>b()):b()}},[d,m,x,a,n,i,r,t,s,l,o,c,u])}var $j=0,Vj=()=>`__${String(++$j)}__`;function Qj(){let{router:t}=yh("useSubmit"),{basename:r}=A.useContext(Nt),a=rj(),n=t.fetch,i=t.navigate;return A.useCallback(async(s,l={})=>{let{action:o,method:c,encType:u,formData:m,body:d}=Ej(s,r);if(l.navigate===!1){let x=l.fetcherKey||Vj();await n(x,a,l.action||o,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:m,body:d,formMethod:l.method||c,formEncType:l.encType||u,flushSync:l.flushSync})}else await i(l.action||o,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:m,body:d,formMethod:l.method||c,formEncType:l.encType||u,replace:l.replace,state:l.state,fromRouteId:a,flushSync:l.flushSync,viewTransition:l.viewTransition})},[n,i,r,a])}function Jj(t,{relative:r}={}){let{basename:a}=A.useContext(Nt),n=A.useContext(Xt);ue(n,"useFormAction must be used inside a RouteContext");let[i]=n.matches.slice(-1),s={...Wn(t||".",{relative:r})},l=Zt();if(t==null){s.search=l.search;let o=new URLSearchParams(s.search),c=o.getAll("index");if(c.some(m=>m==="")){o.delete("index"),c.filter(d=>d).forEach(d=>o.append("index",d));let m=o.toString();s.search=m?`?${m}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(s.pathname=s.pathname==="/"?a:zt([a,s.pathname])),Kt(s)}function Wj(t,{relative:r}={}){let a=A.useContext(yc);ue(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=yh("useViewTransitionState"),i=Wn(t,{relative:r});if(!a.isTransitioning)return!1;let s=Tt(a.currentLocation.pathname,n)||a.currentLocation.pathname,l=Tt(a.nextLocation.pathname,n)||a.nextLocation.pathname;return ds(i.pathname,l)!=null||ds(i.pathname,s)!=null}function Kj(t){return A.createElement(dj,{flushSync:Um.flushSync,...t})}const Yj="_header_18s0b_1",Xj="_left_18s0b_27",Zj="_collapseBtn_18s0b_39",eb="_logo_18s0b_79",tb="_logoIcon_18s0b_95",rb="_logoText_18s0b_121",ab="_logoSubtext_18s0b_133",nb="_hamburger_18s0b_145",xr={header:Yj,left:Xj,collapseBtn:Zj,logo:eb,logoIcon:tb,logoText:rb,logoSubtext:ab,hamburger:nb};function ib({onToggleSidebar:t,onCollapseSidebar:r,collapsed:a}){return e.jsxs("header",{className:xr.header,children:[e.jsxs("div",{className:xr.left,children:[e.jsx("button",{className:xr.collapseBtn,onClick:r,"aria-label":a?"Expandir menú":"Plegar menú",title:a?"Expandir menú":"Plegar menú",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:a?e.jsx("path",{d:"M6 3L12 9L6 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}):e.jsx("path",{d:"M12 3L6 9L12 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsxs(Ps,{to:"/",className:xr.logo,children:[e.jsx("div",{className:xr.logoIcon,children:"J"}),e.jsxs("div",{children:[e.jsx("div",{className:xr.logoText,children:"Programacio Java"}),e.jsx("div",{className:xr.logoSubtext,children:"DAM - La Salle Tarragona"})]})]})]}),e.jsx("button",{className:xr.hamburger,onClick:t,"aria-label":"Obrir menu",children:e.jsx("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:e.jsx("path",{d:"M3 6H19M3 11H19M3 16H19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]})}const vl=[{id:"basics",title:"Basics de Java",items:[{path:"/basics/tipus-de-dades",label:"Tipus de Dades"},{path:"/basics/operadors",label:"Operadors"},{path:"/basics/sintaxi",label:"Sintaxi de Java"},{path:"/basics/condicionals",label:"Condicionals"},{path:"/basics/switch",label:"Switch"},{path:"/basics/bucles",label:"Bucles"},{path:"/basics/modificadors-acces",label:"Modificadors d'Acces"}]},{id:"arrays",title:"Arrays",items:[{path:"/arrays/arrays-1d",label:"Arrays 1D"},{path:"/arrays/arrays-2d",label:"Arrays 2D (Matrius)"},{path:"/arrays/arraylist",label:"ArrayList"}]},{id:"funcions",title:"Funcions",items:[{path:"/funcions/sense-parametres",label:"Funcions sense paràmetres"},{path:"/funcions/amb-parametres",label:"Funcions amb paràmetres"},{path:"/funcions/tipus-de-funcions",label:"Tipus de funcions"},{path:"/funcions/recursives",label:"Funcions recursives"},{path:"/funcions/cridar-des-de-main",label:"Cridar des del Main"},{path:"/funcions/resum",label:"Resum comparatiu"}]},{id:"classes",title:"Classes i Objectes",items:[{path:"/classes/introduccio",label:"Introducció a la POO"},{path:"/classes/classe-vs-objecte",label:"Classe vs Objecte"},{path:"/classes/modificadors",label:"Modificadors i Encapsulació"},{path:"/classes/constructors-this",label:"Constructors i THIS"},{path:"/classes/herencia",label:"Herència"},{path:"/classes/polimorfisme",label:"Polimorfisme"},{path:"/classes/classes-abstractes",label:"Classes Abstractes"},{path:"/classes/exemple-biblioteca",label:"Exemple: Biblioteca"}]},{id:"modularitat",title:"Modularitat i Packages",items:[{path:"/modularitat/introduccio",label:"Introducció a la Modularitat"},{path:"/modularitat/monolitic-vs-modular",label:"Monolític vs Modular"},{path:"/modularitat/packages",label:"Packages: Organització"},{path:"/modularitat/exemple-calculadora",label:"Exemple: Calculadora"}]},{id:"string-math",title:"String i Math",items:[{path:"/string-math/classe-string",label:"Classe String"},{path:"/string-math/classe-math",label:"Classe Math"},{path:"/string-math/random-vs-math-random",label:"Random vs Math.random()"}]},{id:"java-modern",title:"Java Modern",items:[{path:"/java-modern/for-each",label:"For-each"},{path:"/java-modern/operador-ternari",label:"Operador ternari"},{path:"/java-modern/var-i-altres",label:"var i altres novetats"}]},{id:"mon-professional",title:"El Món Professional",items:[{path:"/mon-professional/com-treballen-els-devs",label:"Com treballen els Devs"}]},{id:"activitats",title:"Activitats",items:[{path:"/activitats/quiz-mvc",label:"Quiz: MVC"}]},{id:"spring-boot",title:"Spring Boot",items:[{path:"/spring-boot/que-es",label:"Què és Spring Boot?"},{path:"/spring-boot/primer-projecte",label:"Primer Projecte"}]},{id:"analisi-disseny",title:"Anàlisi i Disseny",items:[{path:"/analisi-disseny/diagrames-classes",label:"Diagrames de Classes"},{path:"/analisi-disseny/diagrames-sequencia",label:"Diagrames de Seqüència"},{path:"/analisi-disseny/diagrames-flux",label:"Diagrames de Flux"},{path:"/analisi-disseny/casos-dus",label:"Casos d'Ús"},{path:"/analisi-disseny/projecte-real",label:"Anatomia d'un Projecte Real"},{path:"/analisi-disseny/introduccio-mvc",label:"Introducció a MVC"}]}],sb="_overlay_acghx_1",lb="_sidebar_acghx_9",ob="_collapsed_acghx_39",cb="_sectionTitle_acghx_47",ub="_arrow_acghx_49",db="_items_acghx_51",pb="_sectionButton_acghx_65",mb="_sectionIcon_acghx_75",hb="_section_acghx_47",fb="_arrowOpen_acghx_173",xb="_itemsOpen_acghx_193",gb="_link_acghx_201",vb="_activeLink_acghx_233",jb="_overlayVisible_acghx_271",bb="_sidebarOpen_acghx_341",at={overlay:sb,sidebar:lb,collapsed:ob,sectionTitle:cb,arrow:ub,items:db,sectionButton:pb,sectionIcon:mb,section:hb,arrowOpen:fb,itemsOpen:xb,link:gb,activeLink:vb,overlayVisible:jb,sidebarOpen:bb},yb={basics:e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),e.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),arrays:e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]}),funcions:e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),classes:e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),e.jsx("path",{d:"M16 3L12 7L8 3"})]}),modularitat:e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),e.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),e.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),"string-math":e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"4 7 4 4 20 4 20 7"}),e.jsx("line",{x1:"9",y1:"20",x2:"15",y2:"20"}),e.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20"})]}),"java-modern":e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),"mon-professional":e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"analisi-disseny":e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"6",height:"6",rx:"1"}),e.jsx("rect",{x:"15",y:"3",width:"6",height:"6",rx:"1"}),e.jsx("rect",{x:"9",y:"15",width:"6",height:"6",rx:"1"}),e.jsx("line",{x1:"6",y1:"9",x2:"6",y2:"12"}),e.jsx("line",{x1:"6",y1:"12",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"12",x2:"12",y2:"15"}),e.jsx("line",{x1:"18",y1:"9",x2:"18",y2:"12"}),e.jsx("line",{x1:"18",y1:"12",x2:"12",y2:"12"})]})};function Sb({isOpen:t,collapsed:r,onClose:a,onExpand:n}){const i=Zt(),[s,l]=A.useState(()=>{const u=vl.find(m=>m.items.some(d=>i.pathname===d.path));return u?[u.id]:[vl[0].id]}),o=u=>{l(m=>m.includes(u)?m.filter(d=>d!==u):[...m,u])},c=[at.sidebar,t&&at.sidebarOpen,r&&at.collapsed].filter(Boolean).join(" ");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`${at.overlay} ${t?at.overlayVisible:""}`,onClick:a}),e.jsx("nav",{className:c,onMouseEnter:r?n:void 0,children:vl.map(u=>{const m=s.includes(u.id),d=yb[u.id];return e.jsxs("div",{className:at.section,children:[e.jsxs("button",{className:at.sectionButton,onClick:()=>o(u.id),title:r?u.title:void 0,children:[e.jsx("span",{className:at.sectionIcon,children:d}),e.jsx("span",{className:at.sectionTitle,children:u.title}),e.jsx("span",{className:`${at.arrow} ${m?at.arrowOpen:""}`,children:e.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",children:e.jsx("path",{d:"M3 1L7 5L3 9"})})})]}),e.jsx("div",{className:`${at.items} ${m?at.itemsOpen:""}`,children:u.items.map(x=>e.jsx(bh,{to:x.path,className:({isActive:y})=>`${at.link} ${y?at.activeLink:""}`,onClick:a,children:x.label},x.path))})]},u.id)})})]})}function Eb(){return e.jsx("footer",{style:{textAlign:"center",padding:"20px",color:"#718096",fontSize:"0.85em",borderTop:"1px solid #e2e8f0",marginTop:"40px"},children:"Recurs didàctic creat per a l'assignatura de Programació - La Salle Tarragona"})}function Cb(){const{pathname:t}=Zt();A.useEffect(()=>{window.scrollTo(0,0)},[t])}const wb="_layout_e2a8v_1",Ab="_body_e2a8v_13",Lb="_content_e2a8v_23",Rb="_contentInner_e2a8v_37",Si={layout:wb,body:Ab,content:Lb,contentInner:Rb};function Mb(){const[t,r]=A.useState(!1),[a,n]=A.useState(!1);return Cb(),e.jsxs("div",{className:Si.layout,children:[e.jsx(ib,{onToggleSidebar:()=>r(!t),onCollapseSidebar:()=>n(!a),collapsed:a}),e.jsxs("div",{className:Si.body,children:[e.jsx(Sb,{isOpen:t,collapsed:a,onClose:()=>r(!1),onExpand:()=>n(!1)}),e.jsx("main",{className:Si.content,children:e.jsxs("div",{className:Si.contentInner,children:[e.jsx(hj,{}),e.jsx(Eb,{})]})})]})]})}const Tb="_hero_ym8fg_1",Nb="_heroTitle_ym8fg_13",kb="_heroAccent_ym8fg_29",Pb="_heroSubtitle_ym8fg_41",_b="_sectionsGrid_ym8fg_53",qb="_sectionCard_ym8fg_65",Ob="_cardIcon_ym8fg_101",Ib="_cardTitle_ym8fg_125",Db="_cardDescription_ym8fg_139",Fb="_cardTopics_ym8fg_151",zb="_topic_ym8fg_165",_t={hero:Tb,heroTitle:Nb,heroAccent:kb,heroSubtitle:Pb,sectionsGrid:_b,sectionCard:qb,cardIcon:Ob,cardTitle:Ib,cardDescription:Db,cardTopics:Fb,topic:zb},Bb={basics:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),e.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),arrays:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]}),funcions:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),classes:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),e.jsx("path",{d:"M16 3L12 7L8 3"})]}),modularitat:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),e.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),e.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),"string-math":e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"4 7 4 4 20 4 20 7"}),e.jsx("line",{x1:"9",y1:"20",x2:"15",y2:"20"}),e.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20"})]}),"java-modern":e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),"analisi-disseny":e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"6",height:"6",rx:"1"}),e.jsx("rect",{x:"15",y:"3",width:"6",height:"6",rx:"1"}),e.jsx("rect",{x:"9",y:"15",width:"6",height:"6",rx:"1"}),e.jsx("line",{x1:"6",y1:"9",x2:"6",y2:"12"}),e.jsx("line",{x1:"6",y1:"12",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"12",x2:"12",y2:"15"}),e.jsx("line",{x1:"18",y1:"9",x2:"18",y2:"12"}),e.jsx("line",{x1:"18",y1:"12",x2:"12",y2:"12"})]})},Ub=[{id:"basics",title:"Basics de Java",description:"Fonaments del llenguatge: tipus de dades, operadors, condicionals, bucles i sintaxi bàsica.",path:"/basics/tipus-de-dades",topics:["Tipus de dades","Operadors","if/else","Bucles","Switch"]},{id:"arrays",title:"Arrays",description:"Arrays unidimensionals i bidimensionals amb exemples interactius.",path:"/arrays/arrays-1d",topics:["Arrays 1D","Matrius 2D"]},{id:"funcions",title:"Funcions",description:"Funcions amb i sense paràmetres, tipus, recursivitat i com cridar-les.",path:"/funcions/sense-parametres",topics:["Sense paràmetres","Amb paràmetres","Recursives","Tipus"]},{id:"classes",title:"Classes i Objectes",description:"POO: classes, objectes, encapsulació, constructors, herència.",path:"/classes/introduccio",topics:["Classes","Objectes","Constructors","Herència"]},{id:"modularitat",title:"Modularitat i Packages",description:"Organització del codi en múltiples classes i packages. Aplica tot el que s'ha après.",path:"/modularitat/introduccio",topics:["Monolític vs Modular","Packages","Imports"]},{id:"string-math",title:"String i Math",description:"Classes String i Math: tots els mètodes útils, Random vs Math.random().",path:"/string-math/classe-string",topics:["String","Math","Random"]},{id:"java-modern",title:"Java Modern",description:"Sintaxi moderna: for-each, operador ternari, var i altres novetats.",path:"/java-modern/for-each",topics:["for-each","Ternari","var"]},{id:"analisi-disseny",title:"Anàlisi i Disseny",description:"Diagrames UML, anàlisi de projectes reals i introducció a MVC.",path:"/analisi-disseny/diagrames-classes",topics:["UML","Projecte Real","MVC"]}];function Gb(){return e.jsxs("div",{children:[e.jsxs("div",{className:_t.hero,children:[e.jsxs("h1",{className:_t.heroTitle,children:["Programació ",e.jsx("span",{className:_t.heroAccent,children:"Java"})]}),e.jsx("p",{className:_t.heroSubtitle,children:"Recurs visual interactiu per a l'aprenentatge de programació - DAM"})]}),e.jsx("div",{className:_t.sectionsGrid,children:Ub.map(t=>e.jsxs(Ps,{to:t.path,className:_t.sectionCard,children:[e.jsx("div",{className:_t.cardIcon,children:Bb[t.id]}),e.jsx("h2",{className:_t.cardTitle,children:t.title}),e.jsx("p",{className:_t.cardDescription,children:t.description}),e.jsx("div",{className:_t.cardTopics,children:t.topics.map(r=>e.jsx("span",{className:_t.topic,children:r},r))})]},t.path))})]})}const Hb="_header_1pa55_1",$b="_title_1pa55_9",Vb="_accentLine_1pa55_29",jl={header:Hb,title:$b,accentLine:Vb};function S({title:t}){return e.jsxs("div",{className:jl.header,children:[e.jsx("h2",{className:jl.title,children:t}),e.jsx("div",{className:jl.accentLine})]})}function Sh(t){var r,a,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(r=0;r<i;r++)t[r]&&(a=Sh(t[r]))&&(n&&(n+=" "),n+=a)}else for(a in t)t[a]&&(n&&(n+=" "),n+=a);return n}function Eh(){for(var t,r,a=0,n="",i=arguments.length;a<i;a++)(t=arguments[a])&&(r=Sh(t))&&(n&&(n+=" "),n+=r);return n}var Qb=Object.create,_s=Object.defineProperty,Jb=Object.defineProperties,Wb=Object.getOwnPropertyDescriptor,Kb=Object.getOwnPropertyDescriptors,Ch=Object.getOwnPropertyNames,ps=Object.getOwnPropertySymbols,Yb=Object.getPrototypeOf,Lc=Object.prototype.hasOwnProperty,wh=Object.prototype.propertyIsEnumerable,wd=(t,r,a)=>r in t?_s(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,Wt=(t,r)=>{for(var a in r||(r={}))Lc.call(r,a)&&wd(t,a,r[a]);if(ps)for(var a of ps(r))wh.call(r,a)&&wd(t,a,r[a]);return t},qs=(t,r)=>Jb(t,Kb(r)),Ah=(t,r)=>{var a={};for(var n in t)Lc.call(t,n)&&r.indexOf(n)<0&&(a[n]=t[n]);if(t!=null&&ps)for(var n of ps(t))r.indexOf(n)<0&&wh.call(t,n)&&(a[n]=t[n]);return a},Xb=(t,r)=>function(){return r||(0,t[Ch(t)[0]])((r={exports:{}}).exports,r),r.exports},Zb=(t,r)=>{for(var a in r)_s(t,a,{get:r[a],enumerable:!0})},ey=(t,r,a,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of Ch(r))!Lc.call(t,i)&&i!==a&&_s(t,i,{get:()=>r[i],enumerable:!(n=Wb(r,i))||n.enumerable});return t},ty=(t,r,a)=>(a=t!=null?Qb(Yb(t)):{},ey(!t||!t.__esModule?_s(a,"default",{value:t,enumerable:!0}):a,t)),ry=Xb({"../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(t,r){var a=function(){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,s={},l={util:{encode:function v(b){return b instanceof o?new o(b.type,v(b.content),b.alias):Array.isArray(b)?b.map(v):b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(v){return Object.prototype.toString.call(v).slice(8,-1)},objId:function(v){return v.__id||Object.defineProperty(v,"__id",{value:++i}),v.__id},clone:function v(b,E){E=E||{};var h,p;switch(l.util.type(b)){case"Object":if(p=l.util.objId(b),E[p])return E[p];h={},E[p]=h;for(var j in b)b.hasOwnProperty(j)&&(h[j]=v(b[j],E));return h;case"Array":return p=l.util.objId(b),E[p]?E[p]:(h=[],E[p]=h,b.forEach(function(R,N){h[N]=v(R,E)}),h);default:return b}},getLanguage:function(v){for(;v;){var b=n.exec(v.className);if(b)return b[1].toLowerCase();v=v.parentElement}return"none"},setLanguage:function(v,b){v.className=v.className.replace(RegExp(n,"gi"),""),v.classList.add("language-"+b)},isActive:function(v,b,E){for(var h="no-"+b;v;){var p=v.classList;if(p.contains(b))return!0;if(p.contains(h))return!1;v=v.parentElement}return!!E}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(v,b){var E=l.util.clone(l.languages[v]);for(var h in b)E[h]=b[h];return E},insertBefore:function(v,b,E,h){h=h||l.languages;var p=h[v],j={};for(var R in p)if(p.hasOwnProperty(R)){if(R==b)for(var N in E)E.hasOwnProperty(N)&&(j[N]=E[N]);E.hasOwnProperty(R)||(j[R]=p[R])}var P=h[v];return h[v]=j,l.languages.DFS(l.languages,function(_,w){w===P&&_!=v&&(this[_]=j)}),j},DFS:function v(b,E,h,p){p=p||{};var j=l.util.objId;for(var R in b)if(b.hasOwnProperty(R)){E.call(b,R,b[R],h||R);var N=b[R],P=l.util.type(N);P==="Object"&&!p[j(N)]?(p[j(N)]=!0,v(N,E,null,p)):P==="Array"&&!p[j(N)]&&(p[j(N)]=!0,v(N,E,R,p))}}},plugins:{},highlight:function(v,b,E){var h={code:v,grammar:b,language:E};if(l.hooks.run("before-tokenize",h),!h.grammar)throw new Error('The language "'+h.language+'" has no grammar.');return h.tokens=l.tokenize(h.code,h.grammar),l.hooks.run("after-tokenize",h),o.stringify(l.util.encode(h.tokens),h.language)},tokenize:function(v,b){var E=b.rest;if(E){for(var h in E)b[h]=E[h];delete b.rest}var p=new m;return d(p,p.head,v),u(v,p,b,p.head,0),y(p)},hooks:{all:{},add:function(v,b){var E=l.hooks.all;E[v]=E[v]||[],E[v].push(b)},run:function(v,b){var E=l.hooks.all[v];if(!(!E||!E.length))for(var h=0,p;p=E[h++];)p(b)}},Token:o};function o(v,b,E,h){this.type=v,this.content=b,this.alias=E,this.length=(h||"").length|0}o.stringify=function v(b,E){if(typeof b=="string")return b;if(Array.isArray(b)){var h="";return b.forEach(function(P){h+=v(P,E)}),h}var p={type:b.type,content:v(b.content,E),tag:"span",classes:["token",b.type],attributes:{},language:E},j=b.alias;j&&(Array.isArray(j)?Array.prototype.push.apply(p.classes,j):p.classes.push(j)),l.hooks.run("wrap",p);var R="";for(var N in p.attributes)R+=" "+N+'="'+(p.attributes[N]||"").replace(/"/g,"&quot;")+'"';return"<"+p.tag+' class="'+p.classes.join(" ")+'"'+R+">"+p.content+"</"+p.tag+">"};function c(v,b,E,h){v.lastIndex=b;var p=v.exec(E);if(p&&h&&p[1]){var j=p[1].length;p.index+=j,p[0]=p[0].slice(j)}return p}function u(v,b,E,h,p,j){for(var R in E)if(!(!E.hasOwnProperty(R)||!E[R])){var N=E[R];N=Array.isArray(N)?N:[N];for(var P=0;P<N.length;++P){if(j&&j.cause==R+","+P)return;var _=N[P],w=_.inside,$=!!_.lookbehind,F=!!_.greedy,le=_.alias;if(F&&!_.pattern.global){var ee=_.pattern.toString().match(/[imsuy]*$/)[0];_.pattern=RegExp(_.pattern.source,ee+"g")}for(var ve=_.pattern||_,te=h.next,q=p;te!==b.tail&&!(j&&q>=j.reach);q+=te.value.length,te=te.next){var H=te.value;if(b.length>v.length)return;if(!(H instanceof o)){var re=1,O;if(F){if(O=c(ve,q,v,$),!O||O.index>=v.length)break;var de=O.index,B=O.index+O[0].length,G=q;for(G+=te.value.length;de>=G;)te=te.next,G+=te.value.length;if(G-=te.value.length,q=G,te.value instanceof o)continue;for(var ae=te;ae!==b.tail&&(G<B||typeof ae.value=="string");ae=ae.next)re++,G+=ae.value.length;re--,H=v.slice(q,G),O.index-=q}else if(O=c(ve,0,H,$),!O)continue;var de=O.index,ye=O[0],Le=H.slice(0,de),Fe=H.slice(de+ye.length),Ee=q+H.length;j&&Ee>j.reach&&(j.reach=Ee);var $e=te.prev;Le&&($e=d(b,$e,Le),q+=Le.length),x(b,$e,re);var la=new o(R,w?l.tokenize(ye,w):ye,le,ye);if(te=d(b,$e,la),Fe&&d(b,te,Fe),re>1){var kt={cause:R+","+P,reach:Ee};u(v,b,E,te.prev,q,kt),j&&kt.reach>j.reach&&(j.reach=kt.reach)}}}}}}function m(){var v={value:null,prev:null,next:null},b={value:null,prev:v,next:null};v.next=b,this.head=v,this.tail=b,this.length=0}function d(v,b,E){var h=b.next,p={value:E,prev:b,next:h};return b.next=p,h.prev=p,v.length++,p}function x(v,b,E){for(var h=b.next,p=0;p<E&&h!==v.tail;p++)h=h.next;b.next=h,h.prev=b,v.length-=p}function y(v){for(var b=[],E=v.head.next;E!==v.tail;)b.push(E.value),E=E.next;return b}return l}();r.exports=a,a.default=a}}),k=ty(ry());k.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},k.languages.markup.tag.inside["attr-value"].inside.entity=k.languages.markup.entity,k.languages.markup.doctype.inside["internal-subset"].inside=k.languages.markup,k.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(k.languages.markup.tag,"addInlined",{value:function(t,n){var a={},a=(a["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:k.languages[n]},a.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}}),n=(a["language-"+n]={pattern:/[\s\S]+/,inside:k.languages[n]},{});n[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:a},k.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(k.languages.markup.tag,"addAttribute",{value:function(t,r){k.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:k.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),k.languages.html=k.languages.markup,k.languages.mathml=k.languages.markup,k.languages.svg=k.languages.markup,k.languages.xml=k.languages.extend("markup",{}),k.languages.ssml=k.languages.xml,k.languages.atom=k.languages.xml,k.languages.rss=k.languages.xml,function(t){var r={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},a=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,n="(?:[^\\\\-]|"+a.source+")",n=RegExp(n+"-"+n),i={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};t.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:n,inside:{escape:a,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":r,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:a}},"special-escape":r,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":i}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:a,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":i}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}}(k),k.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},k.languages.javascript=k.languages.extend("clike",{"class-name":[k.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),k.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,k.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:k.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:k.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:k.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:k.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:k.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),k.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:k.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),k.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),k.languages.markup&&(k.languages.markup.tag.addInlined("script","javascript"),k.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),k.languages.js=k.languages.javascript,k.languages.actionscript=k.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),k.languages.actionscript["class-name"].alias="function",delete k.languages.actionscript.parameter,delete k.languages.actionscript["literal-property"],k.languages.markup&&k.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:k.languages.markup}}),function(t){var r=/#(?!\{).+/,a={pattern:/#\{[^}]+\}/,alias:"variable"};t.languages.coffeescript=t.languages.extend("javascript",{comment:r,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:a}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),t.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:r,interpolation:a}}}),t.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:t.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:a}}]}),t.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete t.languages.coffeescript["template-string"],t.languages.coffee=t.languages.coffeescript}(k),function(t){var r=t.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(r,"addSupport",{value:function(a,n){(a=typeof a=="string"?[a]:a).forEach(function(i){var s=function(d){d.inside||(d.inside={}),d.inside.rest=n},l="doc-comment";if(o=t.languages[i]){var o,c=o[l];if((c=c||(o=t.languages.insertBefore(i,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[l])instanceof RegExp&&(c=o[l]={pattern:c}),Array.isArray(c))for(var u=0,m=c.length;u<m;u++)c[u]instanceof RegExp&&(c[u]={pattern:c[u]}),s(c[u]);else s(c)}})}}),r.addSupport(["java","javascript","php"],r)}(k),function(t){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,r=(t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css,t.languages.markup);r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(k),function(t){var r=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,r=(t.languages.css.selector={pattern:t.languages.css.selector.pattern,lookbehind:!0,inside:r={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+r.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[r,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},t.languages.css.atrule.inside["selector-function-argument"].inside=r,t.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}}),{pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0}),a={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};t.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:r,number:a,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:r,number:a})}(k),function(t){var r=/[*&][^\s[\]{},]+/,a=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,n="(?:"+a.source+"(?:[ 	]+"+r.source+")?|"+r.source+"(?:[ 	]+"+a.source+")?)",i=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),s=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function l(o,c){c=(c||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return n}).replace(/<<value>>/g,function(){return o});return RegExp(u,c)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return n})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return n}).replace(/<<key>>/g,function(){return"(?:"+i+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:l(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:l(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:l(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:l(s),lookbehind:!0,greedy:!0},number:{pattern:l(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:a,important:r,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml}(k),function(t){var r=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function a(u){return u=u.replace(/<inner>/g,function(){return r}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+u+")")}var n=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,i=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return n}),s=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,l=(t.languages.markdown=t.languages.extend("markup",{}),t.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:t.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+i+s+"(?:"+i+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+i+s+")(?:"+i+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(n),inside:t.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+i+")"+s+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+i+"$"),inside:{"table-header":{pattern:RegExp(n),alias:"important",inside:t.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:a(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:a(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:a(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:a(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(u){["url","bold","italic","strike","code-snippet"].forEach(function(m){u!==m&&(t.languages.markdown[u].inside.content.inside[m]=t.languages.markdown[m])})}),t.hooks.add("after-tokenize",function(u){u.language!=="markdown"&&u.language!=="md"||function m(d){if(d&&typeof d!="string")for(var x=0,y=d.length;x<y;x++){var v,b=d[x];b.type!=="code"?m(b.content):(v=b.content[1],b=b.content[3],v&&b&&v.type==="code-language"&&b.type==="code-block"&&typeof v.content=="string"&&(v=v.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),v="language-"+(v=(/[a-z][\w-]*/i.exec(v)||[""])[0].toLowerCase()),b.alias?typeof b.alias=="string"?b.alias=[b.alias,v]:b.alias.push(v):b.alias=[v]))}}(u.tokens)}),t.hooks.add("wrap",function(u){if(u.type==="code-block"){for(var m="",d=0,x=u.classes.length;d<x;d++){var y=u.classes[d],y=/language-(.+)/.exec(y);if(y){m=y[1];break}}var v,b=t.languages[m];b?u.content=t.highlight(function(E){return E=E.replace(l,""),E=E.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(h,p){var j;return(p=p.toLowerCase())[0]==="#"?(j=p[1]==="x"?parseInt(p.slice(2),16):Number(p.slice(1)),c(j)):o[p]||h})}(u.content),b,m):m&&m!=="none"&&t.plugins.autoloader&&(v="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random()),u.attributes.id=v,t.plugins.autoloader.loadLanguages(m,function(){var E=document.getElementById(v);E&&(E.innerHTML=t.highlight(E.textContent,t.languages[m],m))}))}}),RegExp(t.languages.markup.tag.pattern.source,"gi")),o={amp:"&",lt:"<",gt:">",quot:'"'},c=String.fromCodePoint||String.fromCharCode;t.languages.md=t.languages.markdown}(k),k.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:k.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},k.hooks.add("after-tokenize",function(t){if(t.language==="graphql")for(var r=t.tokens.filter(function(v){return typeof v!="string"&&v.type!=="comment"&&v.type!=="scalar"}),a=0;a<r.length;){var n=r[a++];if(n.type==="keyword"&&n.content==="mutation"){var i=[];if(d(["definition-mutation","punctuation"])&&m(1).content==="("){a+=2;var s=x(/^\($/,/^\)$/);if(s===-1)continue;for(;a<s;a++){var l=m(0);l.type==="variable"&&(y(l,"variable-input"),i.push(l.content))}a=s+1}if(d(["punctuation","property-query"])&&m(0).content==="{"&&(a++,y(m(0),"property-mutation"),0<i.length)){var o=x(/^\{$/,/^\}$/);if(o!==-1)for(var c=a;c<o;c++){var u=r[c];u.type==="variable"&&0<=i.indexOf(u.content)&&y(u,"variable-input")}}}}function m(v){return r[a+v]}function d(v,b){b=b||0;for(var E=0;E<v.length;E++){var h=m(E+b);if(!h||h.type!==v[E])return}return 1}function x(v,b){for(var E=1,h=a;h<r.length;h++){var p=r[h],j=p.content;if(p.type==="punctuation"&&typeof j=="string"){if(v.test(j))E++;else if(b.test(j)&&--E===0)return h}}return-1}function y(v,b){var E=v.alias;E?Array.isArray(E)||(v.alias=E=[E]):v.alias=E=[],E.push(b)}}),k.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(t){var r=t.languages.javascript["template-string"],a=r.pattern.source,n=r.inside.interpolation,i=n.inside["interpolation-punctuation"],s=n.pattern.source;function l(d,x){if(t.languages[d])return{pattern:RegExp("((?:"+x+")\\s*)"+a),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:d}}}}function o(d,x,y){return d={code:d,grammar:x,language:y},t.hooks.run("before-tokenize",d),d.tokens=t.tokenize(d.code,d.grammar),t.hooks.run("after-tokenize",d),d.tokens}function c(d,x,y){var E=t.tokenize(d,{interpolation:{pattern:RegExp(s),lookbehind:!0}}),v=0,b={},E=o(E.map(function(p){if(typeof p=="string")return p;for(var j,R,p=p.content;d.indexOf((R=v++,j="___"+y.toUpperCase()+"_"+R+"___"))!==-1;);return b[j]=p,j}).join(""),x,y),h=Object.keys(b);return v=0,function p(j){for(var R=0;R<j.length;R++){if(v>=h.length)return;var N,P,_,w,$,F,le,ee=j[R];typeof ee=="string"||typeof ee.content=="string"?(N=h[v],(le=(F=typeof ee=="string"?ee:ee.content).indexOf(N))!==-1&&(++v,P=F.substring(0,le),$=b[N],_=void 0,(w={})["interpolation-punctuation"]=i,(w=t.tokenize($,w)).length===3&&((_=[1,1]).push.apply(_,o(w[1],t.languages.javascript,"javascript")),w.splice.apply(w,_)),_=new t.Token("interpolation",w,n.alias,$),w=F.substring(le+N.length),$=[],P&&$.push(P),$.push(_),w&&(p(F=[w]),$.push.apply($,F)),typeof ee=="string"?(j.splice.apply(j,[R,1].concat($)),R+=$.length-1):ee.content=$)):(le=ee.content,Array.isArray(le)?p(le):p([le]))}}(E),new t.Token(y,E,"language-"+y,d)}t.languages.javascript["template-string"]=[l("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),l("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),l("svg",/\bsvg/.source),l("markdown",/\b(?:markdown|md)/.source),l("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),l("sql",/\bsql/.source),r].filter(Boolean);var u={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function m(d){return typeof d=="string"?d:Array.isArray(d)?d.map(m).join(""):m(d.content)}t.hooks.add("after-tokenize",function(d){d.language in u&&function x(y){for(var v=0,b=y.length;v<b;v++){var E,h,p,j=y[v];typeof j!="string"&&(E=j.content,Array.isArray(E)?j.type==="template-string"?(j=E[1],E.length===3&&typeof j!="string"&&j.type==="embedded-code"&&(h=m(j),j=j.alias,j=Array.isArray(j)?j[0]:j,p=t.languages[j])&&(E[1]=c(h,p,j))):x(E):typeof E!="string"&&x([E]))}}(d.tokens)})}(k),function(t){t.languages.typescript=t.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),t.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete t.languages.typescript.parameter,delete t.languages.typescript["literal-property"];var r=t.languages.extend("typescript",{});delete r["class-name"],t.languages.typescript["class-name"].inside=r,t.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:r}}}}),t.languages.ts=t.languages.typescript}(k),function(t){var r=t.languages.javascript,a=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,n="(@(?:arg|argument|param|property)\\s+(?:"+a+"\\s+)?)";t.languages.jsdoc=t.languages.extend("javadoclike",{parameter:{pattern:RegExp(n+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),t.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(n+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:r,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return a})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+a),lookbehind:!0,inside:{string:r.string,number:r.number,boolean:r.boolean,keyword:t.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:r,alias:"language-javascript"}}}}),t.languages.javadoclike.addSupport("javascript",t.languages.jsdoc)}(k),function(t){t.languages.flow=t.languages.extend("javascript",{}),t.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:"class-name"}]}),t.languages.flow["function-variable"].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete t.languages.flow.parameter,t.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(t.languages.flow.keyword)||(t.languages.flow.keyword=[t.languages.flow.keyword]),t.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})}(k),k.languages.n4js=k.languages.extend("javascript",{keyword:/\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),k.languages.insertBefore("n4js","constant",{annotation:{pattern:/@+\w+/,alias:"operator"}}),k.languages.n4jsd=k.languages.n4js,function(t){function r(l,o){return RegExp(l.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),o)}t.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+t.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),t.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+t.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),t.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),t.languages.insertBefore("javascript","keyword",{imports:{pattern:r(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:t.languages.javascript},exports:{pattern:r(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:t.languages.javascript}}),t.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),t.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),t.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:r(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var a=["function","function-variable","method","method-variable","property-access"],n=0;n<a.length;n++){var s=a[n],i=t.languages.javascript[s],s=(i=t.util.type(i)==="RegExp"?t.languages.javascript[s]={pattern:i}:i).inside||{};(i.inside=s)["maybe-class-name"]=/^[A-Z][\s\S]*/}}(k),function(t){var r=t.util.clone(t.languages.javascript),a=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,n=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function s(c,u){return c=c.replace(/<S>/g,function(){return a}).replace(/<BRACES>/g,function(){return n}).replace(/<SPREAD>/g,function(){return i}),RegExp(c,u)}i=s(i).source,t.languages.jsx=t.languages.extend("markup",r),t.languages.jsx.tag.pattern=s(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=r.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:s(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:s(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);function l(c){for(var u=[],m=0;m<c.length;m++){var d=c[m],x=!1;typeof d!="string"&&(d.type==="tag"&&d.content[0]&&d.content[0].type==="tag"?d.content[0].content[0].content==="</"?0<u.length&&u[u.length-1].tagName===o(d.content[0].content[1])&&u.pop():d.content[d.content.length-1].content!=="/>"&&u.push({tagName:o(d.content[0].content[1]),openedBraces:0}):0<u.length&&d.type==="punctuation"&&d.content==="{"?u[u.length-1].openedBraces++:0<u.length&&0<u[u.length-1].openedBraces&&d.type==="punctuation"&&d.content==="}"?u[u.length-1].openedBraces--:x=!0),(x||typeof d=="string")&&0<u.length&&u[u.length-1].openedBraces===0&&(x=o(d),m<c.length-1&&(typeof c[m+1]=="string"||c[m+1].type==="plain-text")&&(x+=o(c[m+1]),c.splice(m+1,1)),0<m&&(typeof c[m-1]=="string"||c[m-1].type==="plain-text")&&(x=o(c[m-1])+x,c.splice(m-1,1),m--),c[m]=new t.Token("plain-text",x,null,x)),d.content&&typeof d.content!="string"&&l(d.content)}}var o=function(c){return c?typeof c=="string"?c:typeof c.content=="string"?c.content:c.content.map(o).join(""):""};t.hooks.add("after-tokenize",function(c){c.language!=="jsx"&&c.language!=="tsx"||l(c.tokens)})}(k),function(t){var r=t.util.clone(t.languages.typescript),r=(t.languages.tsx=t.languages.extend("jsx",r),delete t.languages.tsx.parameter,delete t.languages.tsx["literal-property"],t.languages.tsx.tag);r.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+r.pattern.source+")",r.pattern.flags),r.lookbehind=!0}(k),k.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(/(^|[^"#])/.source+"(?:"+/"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source+"|"+/"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source+")"+/(?!["#])/.source),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(/(^|[^"#])(#+)/.source+"(?:"+/"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source+"|"+/"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source+")\\2"),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp(/#/.source+"(?:"+/(?:elseif|if)\b/.source+"(?:[ 	]*"+/(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source+")+|"+/(?:else|endif)\b/.source+")"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},k.languages.swift["string-literal"].forEach(function(t){t.inside.interpolation.inside=k.languages.swift}),function(t){t.languages.kotlin=t.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete t.languages.kotlin["class-name"];var r={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:t.languages.kotlin}};t.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:r},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:r},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete t.languages.kotlin.string,t.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),t.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),t.languages.kt=t.languages.kotlin,t.languages.kts=t.languages.kotlin}(k),k.languages.c=k.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),k.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),k.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},k.languages.c.string],char:k.languages.c.char,comment:k.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:k.languages.c}}}}),k.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete k.languages.c.boolean,k.languages.objectivec=k.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete k.languages.objectivec["class-name"],k.languages.objc=k.languages.objectivec,k.languages.reason=k.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),k.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete k.languages.reason.function,function(t){for(var r=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,a=0;a<2;a++)r=r.replace(/<self>/g,function(){return r});r=r.replace(/<self>/g,function(){return/[^\s\S]/.source}),t.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+r),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},t.languages.rust["closure-params"].inside.rest=t.languages.rust,t.languages.rust.attribute.inside.string=t.languages.rust.string}(k),k.languages.go=k.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),k.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete k.languages.go["class-name"],function(t){var r=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,a=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return r.source});t.languages.cpp=t.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return r.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:r,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),t.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return a})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),t.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t.languages.cpp}}}}),t.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),t.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:t.languages.extend("cpp",{})}}),t.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},t.languages.cpp["base-clause"])}(k),k.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},k.languages.python["string-interpolation"].inside.interpolation.inside.rest=k.languages.python,k.languages.py=k.languages.python,k.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},k.languages.webmanifest=k.languages.json;var ay={};Zb(ay,{dracula:()=>iy,duotoneDark:()=>ly,duotoneLight:()=>cy,github:()=>dy,gruvboxMaterialDark:()=>zy,gruvboxMaterialLight:()=>Uy,jettwaveDark:()=>ky,jettwaveLight:()=>_y,nightOwl:()=>my,nightOwlLight:()=>fy,oceanicNext:()=>gy,okaidia:()=>jy,oneDark:()=>Oy,oneLight:()=>Dy,palenight:()=>yy,shadesOfPurple:()=>Ey,synthwave84:()=>wy,ultramin:()=>Ly,vsDark:()=>Lh,vsLight:()=>Ty});var ny={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},iy=ny,sy={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},ly=sy,oy={plain:{backgroundColor:"#faf8f5",color:"#728fcb"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#b6ad9a"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#063289"}},{types:["property","function"],style:{color:"#b29762"}},{types:["tag-id","selector","atrule-id"],style:{color:"#2d2006"}},{types:["attr-name"],style:{color:"#896724"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule"],style:{color:"#728fcb"}},{types:["placeholder","variable"],style:{color:"#93abdc"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#896724"}}]},cy=oy,uy={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},dy=uy,py={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]},my=py,hy={plain:{color:"#403f53",backgroundColor:"#FBFBFB"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(72, 118, 214)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(152, 159, 177)",fontStyle:"italic"}},{types:["string","builtin","char","constant","url"],style:{color:"rgb(72, 118, 214)"}},{types:["variable"],style:{color:"rgb(201, 103, 101)"}},{types:["number"],style:{color:"rgb(170, 9, 130)"}},{types:["punctuation"],style:{color:"rgb(153, 76, 195)"}},{types:["function","selector","doctype"],style:{color:"rgb(153, 76, 195)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(17, 17, 17)"}},{types:["tag"],style:{color:"rgb(153, 76, 195)"}},{types:["operator","property","keyword","namespace"],style:{color:"rgb(12, 150, 155)"}},{types:["boolean"],style:{color:"rgb(188, 84, 84)"}}]},fy=hy,ht={char:"#D8DEE9",comment:"#999999",keyword:"#c5a5c5",primitive:"#5a9bcf",string:"#8dc891",variable:"#d7deea",boolean:"#ff8b50",tag:"#fc929e",function:"#79b6f2",className:"#FAC863"},xy={plain:{backgroundColor:"#282c34",color:"#ffffff"},styles:[{types:["attr-name"],style:{color:ht.keyword}},{types:["attr-value"],style:{color:ht.string}},{types:["comment","block-comment","prolog","doctype","cdata","shebang"],style:{color:ht.comment}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:ht.primitive}},{types:["boolean"],style:{color:ht.boolean}},{types:["tag"],style:{color:ht.tag}},{types:["string"],style:{color:ht.string}},{types:["punctuation"],style:{color:ht.string}},{types:["selector","char","builtin","inserted"],style:{color:ht.char}},{types:["function"],style:{color:ht.function}},{types:["operator","entity","url","variable"],style:{color:ht.variable}},{types:["keyword"],style:{color:ht.keyword}},{types:["atrule","class-name"],style:{color:ht.className}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}}]},gy=xy,vy={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"#f92672",fontStyle:"italic"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"#8292a2",fontStyle:"italic"}},{types:["string","url"],style:{color:"#a6e22e"}},{types:["variable"],style:{color:"#f8f8f2"}},{types:["number"],style:{color:"#ae81ff"}},{types:["builtin","char","constant","function","class-name"],style:{color:"#e6db74"}},{types:["punctuation"],style:{color:"#f8f8f2"}},{types:["selector","doctype"],style:{color:"#a6e22e",fontStyle:"italic"}},{types:["tag","operator","keyword"],style:{color:"#66d9ef"}},{types:["boolean"],style:{color:"#ae81ff"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)",opacity:.7}},{types:["tag","property"],style:{color:"#f92672"}},{types:["attr-name"],style:{color:"#a6e22e !important"}},{types:["doctype"],style:{color:"#8292a2"}},{types:["rule"],style:{color:"#e6db74"}}]},jy=vy,by={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},yy=by,Sy={plain:{color:"#9EFEFF",backgroundColor:"#2D2A55"},styles:[{types:["changed"],style:{color:"rgb(255, 238, 128)"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)"}},{types:["comment"],style:{color:"rgb(179, 98, 255)",fontStyle:"italic"}},{types:["punctuation"],style:{color:"rgb(255, 255, 255)"}},{types:["constant"],style:{color:"rgb(255, 98, 140)"}},{types:["string","url"],style:{color:"rgb(165, 255, 144)"}},{types:["variable"],style:{color:"rgb(255, 238, 128)"}},{types:["number","boolean"],style:{color:"rgb(255, 98, 140)"}},{types:["attr-name"],style:{color:"rgb(255, 180, 84)"}},{types:["keyword","operator","property","namespace","tag","selector","doctype"],style:{color:"rgb(255, 157, 0)"}},{types:["builtin","char","constant","function","class-name"],style:{color:"rgb(250, 208, 0)"}}]},Ey=Sy,Cy={plain:{backgroundColor:"linear-gradient(to bottom, #2a2139 75%, #34294f)",backgroundImage:"#34294f",color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#495495",fontStyle:"italic"}},{types:["punctuation"],style:{color:"#ccc"}},{types:["tag","attr-name","namespace","number","unit","hexcode","deleted"],style:{color:"#e2777a"}},{types:["property","selector"],style:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"}},{types:["function-name"],style:{color:"#6196cc"}},{types:["boolean","selector-id","function"],style:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"}},{types:["class-name","maybe-class-name","builtin"],style:{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"}},{types:["constant","symbol"],style:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"}},{types:["important","atrule","keyword","selector-class"],style:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"}},{types:["string","char","attr-value","regex","variable"],style:{color:"#f87c32"}},{types:["parameter"],style:{fontStyle:"italic"}},{types:["entity","url"],style:{color:"#67cdcc"}},{types:["operator"],style:{color:"ffffffee"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["inserted"],style:{color:"green"}}]},wy=Cy,Ay={plain:{color:"#282a2e",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(197, 200, 198)"}},{types:["string","number","builtin","variable"],style:{color:"rgb(150, 152, 150)"}},{types:["class-name","function","tag","attr-name"],style:{color:"rgb(40, 42, 46)"}}]},Ly=Ay,Ry={plain:{color:"#9CDCFE",backgroundColor:"#1E1E1E"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"rgb(86, 156, 214)"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"rgb(206, 145, 120)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(212, 212, 212)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(220, 220, 170)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}}]},Lh=Ry,My={plain:{color:"#000000",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(0, 128, 0)"}},{types:["builtin"],style:{color:"rgb(0, 112, 193)"}},{types:["number","variable","inserted"],style:{color:"rgb(9, 134, 88)"}},{types:["operator"],style:{color:"rgb(0, 0, 0)"}},{types:["constant","char"],style:{color:"rgb(129, 31, 63)"}},{types:["tag"],style:{color:"rgb(128, 0, 0)"}},{types:["attr-name"],style:{color:"rgb(255, 0, 0)"}},{types:["deleted","string"],style:{color:"rgb(163, 21, 21)"}},{types:["changed","punctuation"],style:{color:"rgb(4, 81, 165)"}},{types:["function","keyword"],style:{color:"rgb(0, 0, 255)"}},{types:["class-name"],style:{color:"rgb(38, 127, 153)"}}]},Ty=My,Ny={plain:{color:"#f8fafc",backgroundColor:"#011627"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#569CD6"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#f8fafc"}},{types:["attr-name","variable"],style:{color:"#9CDCFE"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#cbd5e1"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#D4D4D4"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#7dd3fc"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},ky=Ny,Py={plain:{color:"#0f172a",backgroundColor:"#f1f5f9"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#0c4a6e"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#0f172a"}},{types:["attr-name","variable"],style:{color:"#0c4a6e"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#64748b"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#475569"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#0e7490"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},_y=Py,qy={plain:{backgroundColor:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(220, 10%, 40%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(220, 14%, 71%)"}},{types:["attr-name","class-name","maybe-class-name","boolean","constant","number","atrule"],style:{color:"hsl(29, 54%, 61%)"}},{types:["keyword"],style:{color:"hsl(286, 60%, 67%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(355, 65%, 65%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value"],style:{color:"hsl(95, 38%, 62%)"}},{types:["variable","operator","function"],style:{color:"hsl(207, 82%, 66%)"}},{types:["url"],style:{color:"hsl(187, 47%, 55%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(220, 14%, 71%)"}}]},Oy=qy,Iy={plain:{backgroundColor:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(230, 4%, 64%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(230, 8%, 24%)"}},{types:["attr-name","class-name","boolean","constant","number","atrule"],style:{color:"hsl(35, 99%, 36%)"}},{types:["keyword"],style:{color:"hsl(301, 63%, 40%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(5, 74%, 59%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value","punctuation"],style:{color:"hsl(119, 34%, 47%)"}},{types:["variable","operator","function"],style:{color:"hsl(221, 87%, 60%)"}},{types:["url"],style:{color:"hsl(198, 99%, 37%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(230, 8%, 24%)"}}]},Dy=Iy,Fy={plain:{color:"#ebdbb2",backgroundColor:"#292828"},styles:[{types:["imports","class-name","maybe-class-name","constant","doctype","builtin","function"],style:{color:"#d8a657"}},{types:["property-access"],style:{color:"#7daea3"}},{types:["tag"],style:{color:"#e78a4e"}},{types:["attr-name","char","url","regex"],style:{color:"#a9b665"}},{types:["attr-value","string"],style:{color:"#89b482"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#ea6962"}},{types:["entity","number","symbol"],style:{color:"#d3869b"}}]},zy=Fy,By={plain:{color:"#654735",backgroundColor:"#f9f5d7"},styles:[{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#af2528"}},{types:["imports","class-name","maybe-class-name","constant","doctype","builtin"],style:{color:"#b4730e"}},{types:["string","attr-value"],style:{color:"#477a5b"}},{types:["property-access"],style:{color:"#266b79"}},{types:["function","attr-name","char","url"],style:{color:"#72761e"}},{types:["tag"],style:{color:"#b94c07"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["entity","number","symbol"],style:{color:"#924f79"}}]},Uy=By,Gy=t=>A.useCallback(r=>{var a=r,{className:n,style:i,line:s}=a,l=Ah(a,["className","style","line"]);const o=qs(Wt({},l),{className:Eh("token-line",n)});return typeof t=="object"&&"plain"in t&&(o.style=t.plain),typeof i=="object"&&(o.style=Wt(Wt({},o.style||{}),i)),o},[t]),Hy=t=>{const r=A.useCallback(({types:a,empty:n})=>{if(t!=null){{if(a.length===1&&a[0]==="plain")return n!=null?{display:"inline-block"}:void 0;if(a.length===1&&n!=null)return t[a[0]]}return Object.assign(n!=null?{display:"inline-block"}:{},...a.map(i=>t[i]))}},[t]);return A.useCallback(a=>{var n=a,{token:i,className:s,style:l}=n,o=Ah(n,["token","className","style"]);const c=qs(Wt({},o),{className:Eh("token",...i.types,s),children:i.content,style:r(i)});return l!=null&&(c.style=Wt(Wt({},c.style||{}),l)),c},[r])},$y=/\r\n|\r|\n/,Ad=t=>{t.length===0?t.push({types:["plain"],content:`
`,empty:!0}):t.length===1&&t[0].content===""&&(t[0].content=`
`,t[0].empty=!0)},Ld=(t,r)=>{const a=t.length;return a>0&&t[a-1]===r?t:t.concat(r)},Vy=t=>{const r=[[]],a=[t],n=[0],i=[t.length];let s=0,l=0,o=[];const c=[o];for(;l>-1;){for(;(s=n[l]++)<i[l];){let u,m=r[l];const x=a[l][s];if(typeof x=="string"?(m=l>0?m:["plain"],u=x):(m=Ld(m,x.type),x.alias&&(m=Ld(m,x.alias)),u=x.content),typeof u!="string"){l++,r.push(m),a.push(u),n.push(0),i.push(u.length);continue}const y=u.split($y),v=y.length;o.push({types:m,content:y[0]});for(let b=1;b<v;b++)Ad(o),c.push(o=[]),o.push({types:m,content:y[b]})}l--,r.pop(),a.pop(),n.pop(),i.pop()}return Ad(o),c},Rd=Vy,Qy=({prism:t,code:r,grammar:a,language:n})=>A.useMemo(()=>{if(a==null)return Rd([r]);const i={code:r,grammar:a,language:n,tokens:[]};return t.hooks.run("before-tokenize",i),i.tokens=t.tokenize(r,a),t.hooks.run("after-tokenize",i),Rd(i.tokens)},[r,a,n,t]),Jy=(t,r)=>{const{plain:a}=t,n=t.styles.reduce((i,s)=>{const{languages:l,style:o}=s;return l&&!l.includes(r)||s.types.forEach(c=>{const u=Wt(Wt({},i[c]),o);i[c]=u}),i},{});return n.root=a,n.plain=qs(Wt({},a),{backgroundColor:void 0}),n},Wy=Jy,Ky=({children:t,language:r,code:a,theme:n,prism:i})=>{const s=r.toLowerCase(),l=Wy(n,s),o=Gy(l),c=Hy(l),u=i.languages[s],m=Qy({prism:i,language:s,code:a,grammar:u});return t({tokens:m,className:`prism-code language-${s}`,style:l!=null?l.root:{},getLineProps:o,getTokenProps:c})},Yy=t=>A.createElement(Ky,qs(Wt({},t),{prism:t.prism||k,theme:t.theme||Lh,code:t.code,language:t.language}));/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/const Xy="_wrapper_axajp_1",Zy="_pre_axajp_17",e0="_line_axajp_35",t0="_lineNumber_axajp_43",r0="_lineContent_axajp_61",a0="_label_axajp_69",da={wrapper:Xy,pre:Zy,line:e0,lineNumber:t0,lineContent:r0,label:a0},n0={plain:{color:"#e8eef5",backgroundColor:"#1e2837"},styles:[{types:["keyword","builtin","tag","boolean"],style:{color:"#ffd700",fontWeight:"bold"}},{types:["function","method"],style:{color:"#90cdf4"}},{types:["string","char"],style:{color:"#68d391"}},{types:["number"],style:{color:"#fc8181"}},{types:["comment"],style:{color:"#a0aec0",fontStyle:"italic"}},{types:["class-name"],style:{color:"#e5c07b"}},{types:["operator"],style:{color:"#e8eef5"}},{types:["punctuation"],style:{color:"#cbd5e0"}},{types:["annotation"],style:{color:"#ffd700"}}]};function g({code:t,language:r="java",showLineNumbers:a=!1,label:n}){return e.jsxs("div",{className:da.wrapper,children:[n&&e.jsx("div",{className:da.label,children:n}),e.jsx(Yy,{theme:n0,code:t.trim(),language:r,children:({style:i,tokens:s,getLineProps:l,getTokenProps:o})=>e.jsx("pre",{className:da.pre,style:i,children:s.map((c,u)=>e.jsxs("div",{...l({line:c}),className:da.line,children:[a&&e.jsx("span",{className:da.lineNumber,children:u+1}),e.jsx("span",{className:da.lineContent,children:c.map((m,d)=>e.jsx("span",{...o({token:m})},d))})]},u))})})]})}const i0="_box_ih0qt_1",s0="_title_ih0qt_17",l0="_info_ih0qt_31",o0="_warning_ih0qt_49",c0="_success_ih0qt_67",u0="_error_ih0qt_85",d0="_explanation_ih0qt_103",bl={box:i0,title:s0,info:l0,warning:o0,success:c0,error:u0,explanation:d0};function f({variant:t="info",title:r,children:a}){return e.jsxs("div",{className:`${bl.box} ${bl[t]}`,children:[r&&e.jsx("strong",{className:bl.title,children:r}),a]})}const p0="_tableWrapper_9u6ut_1",m0="_table_9u6ut_1",h0="_groupHeader_9u6ut_93",yl={tableWrapper:p0,table:m0,groupHeader:h0};function J({headers:t,rows:r}){return e.jsx("div",{className:yl.tableWrapper,children:e.jsxs("table",{className:yl.table,children:[e.jsx("thead",{children:e.jsx("tr",{children:t.map((a,n)=>e.jsx("th",{children:a},n))})}),e.jsx("tbody",{children:r.map((a,n)=>a.group?e.jsx("tr",{className:yl.groupHeader,children:e.jsx("td",{colSpan:t.length,children:a.group})},n):e.jsx("tr",{children:a.cells.map((i,s)=>e.jsx("td",{children:i},s))},n))})]})})}function f0(){return e.jsxs("div",{children:[e.jsx(S,{title:"Tipus de Dades"}),e.jsx(f,{variant:"info",title:"Fonaments",children:e.jsx("p",{children:"Els tipus de dades són la base, determinen com s'emmagatzemen i manipulen els valors. Java és un llenguatge fortament tipat que distingeix entre tipus primitius (dades simples) i tipus de referència (objectes complexos), com Strings, Arrays... Veurem només els que hem après fins ara."})}),e.jsx(J,{headers:["Nom","Paraula reservada","Sintaxi"],rows:[{group:"Primitius"},{cells:["Enter","int (32 bits)","0"]},{cells:["Flotant","float (32 bits)","3.14"]},{cells:["Flotant (double)","double (64 bits)","3.14"]},{cells:["Caràcter","char","'A'"]},{cells:["Booleà","boolean","true/false"]},{group:"Objectes"},{cells:["Cadena de text","String",'"Hola"']},{cells:["Array","tipus[]","{1, 2, 3}"]}]}),e.jsx(f,{variant:"warning",title:"Compte amb utilitzar char o String per números",children:e.jsx("p",{children:"Tot i que es permet, si el nostre objectiu és calcular, és millor utilitzar un tipus de dada dedicat als números. Si bé és cert que es poden convertir i així aconseguir els càlculs, no és una bona pràctica."})})]})}const x0="_grid_zd7lr_1",g0="_card_zd7lr_15",v0="_cardTitle_zd7lr_37",j0="_blue_zd7lr_53",b0="_good_zd7lr_81",y0="_bad_zd7lr_101",Fi={grid:x0,card:g0,cardTitle:v0,blue:j0,good:b0,bad:y0};function U({title:t,variant:r="blue",children:a}){return e.jsxs("div",{className:`${Fi.card} ${Fi[r]}`,children:[e.jsx("h3",{className:Fi.cardTitle,children:t}),a]})}function oe({children:t}){return e.jsx("div",{className:Fi.grid,children:t})}const S0="_grid_dh0in_1",E0="_card_dh0in_15",C0="_cardTitle_dh0in_41",w0="_blue_dh0in_55",A0="_yellow_dh0in_63",L0="_green_dh0in_71",R0="_pink_dh0in_79",M0="_gold_dh0in_87",zi={grid:S0,card:E0,cardTitle:C0,blue:w0,yellow:A0,green:L0,pink:R0,gold:M0};function T({title:t,variant:r="blue",children:a}){return e.jsxs("div",{className:`${zi.card} ${zi[r]}`,children:[e.jsx("h4",{className:zi.cardTitle,children:t}),a]})}function me({children:t}){return e.jsx("div",{className:zi.grid,children:t})}function T0(){return e.jsxs("div",{children:[e.jsx(S,{title:"Operadors"}),e.jsx(f,{variant:"info",children:e.jsx("p",{children:"Els operadors són símbols que permeten realitzar càlculs i comparacions en Java. Es divideixen en diverses categories: aritmètics (suma, resta), de comparació (major, menor, igual), lògics (&&, ||, !), d'assignació (=, +=). N'hi ha més però per ara això és el principal."})}),e.jsx(J,{headers:["Nom","Representació","Sintaxi"],rows:[{group:"Aritmètics"},{cells:["Suma","+","a + b"]},{cells:["Resta","-","a - b"]},{cells:["Multiplicació","*","a * b"]},{cells:["Divisió","/","a / b"]},{cells:["Mòdul (residu)","%","a % b"]},{cells:["Increment","++","a++ / ++a"]},{cells:["Decrement","--","a-- / --a"]},{group:"Comparació"},{cells:["Igual a","==","a == b"]},{cells:["Distint de","!=","a != b"]},{cells:["Major que",">","a > b"]},{cells:["Menor que","<","a < b"]},{cells:["Major o igual que",">=","a >= b"]},{cells:["Menor o igual que","<=","a <= b"]},{group:"Lògics"},{cells:["AND","&&","a && b"]},{cells:["OR","||","a || b"]},{cells:["NOT","!","!a"]},{group:"Assignació"},{cells:["Assignació","=","x = 5"]},{cells:["A. amb suma","+=","x += 3"]},{cells:["A. amb resta","-=","x -= 3"]},{cells:["A. amb multiplicació","*=","x *= 3"]},{cells:["A. amb divisió","/=","x /= 3"]}]}),e.jsx(S,{title:"Molt Important"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["L'operador ",e.jsx("strong",{children:"="})," serveix per assignar un valor a una variable, mentre que"," ",e.jsx("strong",{children:"=="})," s'usa per comparar si dos valors són iguals."]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Operador =",variant:"blue",children:[e.jsxs("p",{children:["Serveix per ",e.jsx("strong",{children:"assignar"})," un valor a una variable."]}),e.jsx(g,{code:"int x = 5;"})]}),e.jsxs(U,{title:"Operador ==",variant:"blue",children:[e.jsxs("p",{children:["S'usa per ",e.jsx("strong",{children:"comparar"})," si dos valors són iguals."]}),e.jsx(g,{code:"if (x == 5)"})]})]}),e.jsx(f,{variant:"info",children:e.jsxs("p",{children:["En el cas de tipus primitius (int, double, boolean, char, etc.), ",e.jsx("strong",{children:"=="})," compara directament el valor."]})}),e.jsxs(f,{variant:"warning",title:"Strings i objectes",children:[e.jsxs("p",{children:["Si es tracta de String (o altres objectes), en Java no s'ha d'usar == per comparar contingut, sinó ",e.jsx("strong",{children:"equals()"})," perquè:"]}),e.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px"},children:[e.jsx("li",{children:"== compara si les dues referències apunten al mateix objecte en memòria, no si el text és el mateix."}),e.jsx("li",{children:"equals() compara el contingut dels Strings (caràcter per caràcter)."})]})]}),e.jsx(S,{title:"Operadors Lògics"}),e.jsx(f,{variant:"info",children:e.jsx("p",{children:"Tenint això en ment, anem a explicar i donar exemples:"})}),e.jsx(g,{label:"Variables d'exemple",code:`boolean a = true;
boolean b = true;
int c = 2;
int d = 2;`}),e.jsxs(me,{children:[e.jsxs(T,{title:"AND (&&)",variant:"blue",children:[e.jsxs("p",{children:["Retorna TRUE únicament quan ",e.jsx("strong",{children:"AMBDUES"})," expressions/valors són TRUE"]}),e.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px",listStyle:"none"},children:[e.jsx("li",{children:"(a && b) → com ambdues són true, el resultat és true."}),e.jsx("li",{children:"(a && b) && (c == d) → com ambdues expressions són true, aleshores (true && true) → true."}),e.jsx("li",{children:"(a && b) && (c > d) → com l'expressió de la dreta és false, aleshores (true && false) → false."})]})]}),e.jsxs(T,{title:"OR (||)",variant:"yellow",children:[e.jsxs("p",{children:["Al contrari que el AND, retorna TRUE si ",e.jsx("strong",{children:"AL MENYS UNA"})," expressió té valor TRUE"]}),e.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px",listStyle:"none"},children:[e.jsx("li",{children:"(a || b) → com almenys una és true, el resultat és true."}),e.jsx("li",{children:"(a || false) → com a és true, el resultat és true."}),e.jsx("li",{children:"(false || false) → com cap és true, el resultat és false."}),e.jsx("li",{children:"(c == d || c > d) → (true || false) → true."})]})]}),e.jsx(T,{title:"NOT (!)",variant:"pink",children:e.jsx("p",{children:"Inverteix el valor d'una expressió booleana."})})]})]})}function N0(){return e.jsxs("div",{children:[e.jsx(S,{title:"Sintaxi de Java"}),e.jsx(f,{variant:"info",children:e.jsx("p",{children:"La sintaxi de Java és estructurada i orientada a objectes, heretada en gran part de C++. A continuació estan les estructures fonamentals del llenguatge: condicionals i bucles i, juntament amb la seva respectiva sintaxi per escriure codi clar i organitzat."})}),e.jsx(J,{headers:["Nom","Paraula reservada","Sintaxi"],rows:[{cells:["Variable","tipus","tipus variable = valor"]},{cells:["Constant","final","final tipus constant = valor"]},{cells:["Condicional if","if","if (condició) { }"]},{cells:["Condicional else if","else if","else if (altra_condició) { }"]},{cells:["Condicional else","else","else { }"]},{cells:["Bucle for","for","for (inicialització; condició; increment) { }"]},{cells:["Bucle for each","for","for (element : col·lecció) { }"]},{cells:["Bucle while","while","while (condició) { }"]},{cells:["Bucle do while","do while","do { } while (condició)"]},{cells:["Switch","switch","switch (variable) { case valor: }"]},{cells:["Mètode principal","main","public static void main (String[] args) { }"]},{cells:["Sentència break","break","break"]},{cells:["Sentència continue","continue","continue"]},{cells:["Retorn","return","return valor"]}]}),e.jsx(f,{variant:"explanation",title:"Extra",children:e.jsx("p",{children:"Un programa no és més que una seqüència d'instruccions que s'executen en ordre de dalt cap avall, llevat que utilitzem estructures que canvien aquest flux."})})]})}function k0(){return e.jsxs("div",{children:[e.jsx(S,{title:'Estructures condicionals → "fer preguntes"'}),e.jsx(f,{variant:"info",children:e.jsx("p",{children:"Utilitzem una estructura condicional quan el programa ha de prendre decisions."})}),e.jsxs(T,{title:"Exemple vida real",variant:"blue",children:[e.jsx("p",{children:"Si plou,"}),e.jsx("p",{children:"porto paraigua."}),e.jsx("p",{children:"Si no,"}),e.jsx("p",{children:"no me'l porto."})]}),e.jsxs(T,{title:"Esquema mental",variant:"yellow",children:[e.jsx("p",{children:"SI (condició és verdadera) → faig alguna cosa"}),e.jsx("p",{children:"SI NO → faig una altra cosa"})]}),e.jsx(g,{label:"En codi",code:`if (plou) {
    portoParagua();
} else {
    noElPorto();
}`}),e.jsx(S,{title:"Cas amb més d'una pregunta (else if)"}),e.jsxs(T,{title:"Esquema mental",variant:"green",children:[e.jsx("p",{children:"Si plou → paraigua"}),e.jsx("p",{children:"Si neva → abric"}),e.jsx("p",{children:"Si no → res especial"})]}),e.jsx(g,{label:"En codi",code:`if (plou) {
    portoParagua();
} else if (neva) {
    portoAbric();
} else {
    noFaigRes();
}`}),e.jsx(S,{title:"Cas on una pregunta depèn d'una altra"}),e.jsx(f,{variant:"explanation",children:e.jsx("p",{children:"A destacar aquí que el flux va en ordre, primer avalua la primera condició, després la següent, que no depèn de la primera, és a dir, en cas de necessitar que la primera pregunta sigui TRUE perquè avaluï la següent, estaríem parlant d'estructures niuades."})}),e.jsxs(T,{title:"Esquema mental niuat",variant:"pink",children:[e.jsx("p",{children:"Si plou →"}),e.jsx("p",{style:{marginLeft:"20px"},children:"Si tinc paraigua → porto paraigua"}),e.jsx("p",{style:{marginLeft:"20px"},children:"Si no → espero que deixi de ploure"}),e.jsx("p",{children:"Si no → no porto paraigua"})]}),e.jsx(g,{label:"En codi",code:`if (plou) {
    if (paragua) {
        portoParagua();
    } else {
        esperar();
    }
} else {
    noPortoParagua();
}`})]})}function P0(){return e.jsxs("div",{children:[e.jsx(S,{title:`Switch → "menú d'opcions"`}),e.jsx(f,{variant:"info",children:e.jsx("p",{children:"Utilitzem switch quan tenim diverses opcions possibles i només una pot ser la correcta."})}),e.jsxs(T,{title:"Exemple vida real",variant:"blue",children:[e.jsx("p",{children:"Entro a un restaurant i trio:"}),e.jsx("p",{children:"1 → Pizza"}),e.jsx("p",{children:"2 → Amanida"}),e.jsx("p",{children:"3 → Pasta"})]}),e.jsx(T,{title:"Esquema mental",variant:"yellow",children:e.jsx("p",{children:"SEGONS l'opció que triïs → executo una cosa o una altra"})}),e.jsx(g,{label:"En codi",code:`switch (opcio) {
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
}`}),e.jsx(f,{variant:"explanation",children:e.jsx("p",{children:"És com anar directe al gra: si coincideix l'opció, s'executa aquest bloc."})})]})}function _0(){return e.jsxs("div",{children:[e.jsx(S,{title:'Bucles → "repetir mentre alguna cosa sigui cert"'}),e.jsx(f,{variant:"info",children:e.jsx("p",{children:"Utilitzem estructures de repetició quan volem que el programa repeteixi alguna cosa moltes vegades, ja sigui per imprimir, buscar o recórrer."})}),e.jsx(f,{variant:"warning",title:"Si la condició és false des del principi, no entra mai al bucle!!!",children:e.jsx("p",{children:"Recorda que la condició controla l'entrada al bucle. Si ja és falsa abans de començar, el codi del bucle mai s'executarà."})}),e.jsx(S,{title:'while → "repeteix mentre es compleixi la condició"'}),e.jsx(f,{variant:"info",children:e.jsx("p",{children:"Mentre no introdueixi la contrasenya correcta, segueix preguntant."})}),e.jsxs(T,{title:"Esquema mental",variant:"blue",children:[e.jsx("p",{children:"MENTRE (condició sigui true) → repeteixo"}),e.jsx("p",{children:"Quan sigui false → surto del bucle"})]}),e.jsx(g,{label:"En codi",code:`while (!passwordCorrecta) {
    demanarPassword();
}`}),e.jsx(S,{title:'do while → "fes-ho almenys una vegada"'}),e.jsx(f,{variant:"info",children:e.jsx("p",{children:"Pregunto la contrasenya almenys una vegada."})}),e.jsx(T,{title:"Esquema mental",variant:"yellow",children:e.jsx("p",{children:"FAIG → comprovo → si segueix sent true → repeteixo"})}),e.jsx(g,{label:"En codi",code:`do {
    demanarPassword();
} while (!passwordCorrecta);`}),e.jsx(S,{title:'for → "repeteix un número fix de vegades"'}),e.jsx(f,{variant:"info",children:e.jsx("p",{children:"El bucle for s'utilitza quan saps exactament quantes vegades vols repetir alguna cosa. És especialment útil per recórrer col·leccions o fer un número determinat d'iteracions."})}),e.jsx(T,{title:"Esquema mental",variant:"green",children:e.jsx("p",{children:"PER (des d'un valor inicial; mentre es compleixi una condició; incrementant) → repeteixo"})}),e.jsx(g,{label:"En codi",code:`for (int i = 1; i <= 10; i++) {
    System.out.println(i);
}
// Imprimeix números de l'1 al 10`}),e.jsx(f,{variant:"explanation",children:e.jsx("p",{children:"El bucle for té tres parts separades per punt i coma: la inicialització (on comença), la condició (fins quan continua), i l'increment (com avança en cada iteració)."})}),e.jsxs(f,{variant:"info",title:"El valor TRUE controla tot",children:[e.jsx("p",{children:"Tant en condicions com en bucles:"}),e.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px"},children:[e.jsx("li",{children:"Si la condició és true → entra."}),e.jsx("li",{children:"Si la condició és false → no entra o surt."}),e.jsx("li",{children:"Si la condició és false des del principi, el programa salta aquesta estructura i segueix amb el següent o acaba."})]})]}),e.jsx(S,{title:"Resum"}),e.jsx(J,{headers:["Estructura","Per a què serveix","Exemple mental"],rows:[{cells:["if / else","Prendre decisions",'"Si passa això, faig això"']},{cells:["switch","Triar una opció entre diverses",`"Menú d'opcions"`]},{cells:["while","Repetir mentre alguna cosa sigui cert",'"Mentre no acabi, segueixo"']},{cells:["do while","Repetir almenys una vegada",'"Pregunto mínim una vegada"']},{cells:["for","Repetir un número fix de vegades",`"De l'1 al 10 faig això"`]}]})]})}function q0(){return e.jsxs("div",{children:[e.jsx(S,{title:"Modificadors d'accés"}),e.jsx(f,{variant:"info",children:e.jsx("p",{children:"Els modificadors d'accés controlen la visibilitat de classes, mètodes i atributs en Java. Determinen qui pot accedir a cada element del codi."})}),e.jsx(J,{headers:["Nom","Paraula reservada","Descripció"],rows:[{cells:["public","public","Accessible des de qualsevol altra classe en qualsevol paquet."]},{cells:["private","private","Accessible només des de la classe en la qual va ser declarat."]},{cells:["protected","protected","Accessible des del mateix paquet i subclasses."]},{cells:["default","(sense paraula)","Per defecte. Accessible per a les classes del mateix paquet."]}]}),e.jsxs(me,{children:[e.jsxs(T,{title:"public",variant:"green",children:[e.jsxs("p",{children:["Accessible des de ",e.jsx("strong",{children:"qualsevol lloc"}),"."]}),e.jsx(g,{code:"public int edat = 25;"})]}),e.jsxs(T,{title:"private",variant:"pink",children:[e.jsxs("p",{children:["Accessible només dins la ",e.jsx("strong",{children:"mateixa classe"}),"."]}),e.jsx(g,{code:'private String nom = "Joan";'})]}),e.jsxs(T,{title:"protected",variant:"yellow",children:[e.jsxs("p",{children:["Accessible dins el ",e.jsx("strong",{children:"paquet i subclasses"}),"."]}),e.jsx(g,{code:"protected double salari = 1500.0;"})]}),e.jsxs(T,{title:"default (sense paraula)",variant:"blue",children:[e.jsxs("p",{children:["Accessible només dins el ",e.jsx("strong",{children:"mateix paquet"}),"."]}),e.jsx(g,{code:"int comptador = 0;"})]})]})]})}const O0="_button_1snnp_1",I0="_secondary_1snnp_47",D0="_small_1snnp_67",Sl={button:O0,secondary:I0,small:D0};function it({children:t,onClick:r,variant:a,size:n,...i}){const s=[Sl.button,a==="secondary"&&Sl.secondary,n==="small"&&Sl.small].filter(Boolean).join(" ");return e.jsx("button",{className:s,onClick:r,...i,children:t})}const F0="_container_cd20o_1",z0="_title_cd20o_17",B0="_arrayContainer_cd20o_33",U0="_cell_cd20o_53",G0="_cellValue_cd20o_69",H0="_cellIndex_cd20o_115",$0="_controls_cd20o_131",V0="_info_cd20o_205",gr={container:F0,title:z0,arrayContainer:B0,cell:U0,cellValue:G0,cellIndex:H0,controls:$0,info:V0};function yo(){return Math.floor(Math.random()*100)}function Q0(t){return Array.from({length:t},()=>yo())}function J0(){const[t,r]=A.useState(()=>Q0(5)),a=()=>{r(s=>s.map(()=>yo()))},n=()=>{t.length<10&&r(s=>[...s,yo()])},i=()=>{t.length>1&&r(s=>s.slice(0,-1))};return e.jsxs("div",{className:gr.container,children:[e.jsx("div",{className:gr.title,children:"Array Interactiu 1D"}),e.jsx("div",{className:gr.arrayContainer,children:t.map((s,l)=>e.jsxs("div",{className:gr.cell,children:[e.jsx("div",{className:gr.cellValue,children:s}),e.jsxs("div",{className:gr.cellIndex,children:["[",l,"]"]})]},`${l}-${s}`))}),e.jsxs("div",{className:gr.controls,children:[e.jsx(it,{onClick:a,children:"Canviar Valors"}),e.jsx(it,{onClick:n,variant:"secondary",disabled:t.length>=10,children:"Afegir Element"}),e.jsx(it,{onClick:i,variant:"secondary",disabled:t.length<=1,children:"Eliminar Ultim"})]}),e.jsxs("div",{className:gr.info,children:["int[] array = new int[",t.length,"];   // Longitud: ",t.length]})]})}const W0=`// Declaracio d'un array d'enters
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
}`;function Z0(){return e.jsxs("div",{children:[e.jsx(S,{title:"Arrays Unidimensionals (1D)"}),e.jsx(f,{variant:"info",title:"Què és un Array?",children:e.jsxs("p",{children:["Un ",e.jsx("strong",{children:"array"})," és una estructura de dades que permet emmagatzemar múltiples valors del mateix tipus en una sola variable. Cada element té un",e.jsx("strong",{children:" índex"})," que comença en 0 i permet accedir directament a qualsevol posició."]})}),e.jsx(J0,{}),e.jsx(f,{variant:"explanation",title:"Característiques dels Arrays",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Mida fixa:"})," un cop creat, la mida no pot canviar."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Índex base 0:"})," el primer element és a la posició 0."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tipus homogeni:"})," tots els elements són del mateix tipus."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accés directe:"})," es pot accedir a qualsevol element pel seu índex en temps constant."]})]})}),e.jsx(g,{code:W0,label:"Declaració i inicialització",showLineNumbers:!0}),e.jsx(J,{headers:["Operació","Sintaxi","Exemple"],rows:[{cells:["Declarar buit","tipus[] nom = new tipus[mida]","int[] nums = new int[5]"]},{cells:["Declarar amb valors","tipus[] nom = {v1, v2, ...}","int[] nums = {1, 2, 3}"]},{cells:["Accedir element","nom[index]","nums[0] // primer element"]},{cells:["Modificar element","nom[index] = valor","nums[2] = 99"]},{cells:["Longitud","nom.length","nums.length // 3"]}]}),e.jsx(g,{code:K0,label:"Accés i modificació d'elements",showLineNumbers:!0}),e.jsx(f,{variant:"warning",title:"ArrayIndexOutOfBoundsException",children:e.jsxs("p",{children:["Si intentes accedir a un índex fora del rang (negatiu o major/igual que la longitud), Java llençarà una excepció ",e.jsx("code",{children:"ArrayIndexOutOfBoundsException"}),". Sempre comprova que l'índex estigui dins dels límits!"]})}),e.jsx(g,{code:Y0,label:"Recórrer un Array",showLineNumbers:!0}),e.jsx(f,{variant:"success",title:"Exemple complet: Temperatures",children:e.jsx("p",{children:"Un exemple pràctic que calcula la mitjana i el màxim d'un array de temperatures setmanals."})}),e.jsx(g,{code:X0,label:"Exemple: Càlcul de mitjana i màxim",showLineNumbers:!0})]})}const eS="_container_1u9g6_1",tS="_title_1u9g6_17",rS="_matrixWrapper_1u9g6_33",aS="_matrix_1u9g6_33",nS="_cell_1u9g6_57",iS="_cellActive_1u9g6_107",sS="_cellSelected_1u9g6_125",lS="_cellIndex_1u9g6_141",oS="_controls_1u9g6_157",cS="_info_1u9g6_171",Ht={container:eS,title:tS,matrixWrapper:rS,matrix:aS,cell:nS,cellActive:iS,cellSelected:sS,cellIndex:lS,controls:oS,info:cS},Rh=4,Mh=4;function uS(){return Math.floor(Math.random()*100)}function Md(){return Array.from({length:Rh},()=>Array.from({length:Mh},()=>uS()))}function dS(){const[t,r]=A.useState(()=>Md()),[a,n]=A.useState(new Set),[i,s]=A.useState(null),l=A.useRef([]),o=A.useCallback(()=>{l.current.forEach(d=>clearTimeout(d)),l.current=[]},[]),c=()=>{o(),n(new Set),s(null),r(Md())},u=()=>{o(),n(new Set),s(null);const d=Math.min(Rh,Mh);for(let x=0;x<d;x++){const y=setTimeout(()=>{n(v=>{const b=new Set(v);return b.add(`${x}-${x}`),b})},x*200);l.current.push(y)}},m=(d,x)=>{s(`${d}-${x}`)};return e.jsxs("div",{className:Ht.container,children:[e.jsx("div",{className:Ht.title,children:"Matriu Interactiva 4x4"}),e.jsx("div",{className:Ht.matrixWrapper,children:e.jsx("div",{className:Ht.matrix,children:t.map((d,x)=>d.map((y,v)=>{const b=`${x}-${v}`,E=a.has(b),h=i===b;let p=Ht.cell;return E&&(p+=` ${Ht.cellActive}`),h&&(p+=` ${Ht.cellSelected}`),e.jsxs("div",{className:p,onClick:()=>m(x,v),children:[e.jsx("span",{children:y}),e.jsxs("span",{className:Ht.cellIndex,children:["[",x,"][",v,"]"]})]},b)}))})}),e.jsxs("div",{className:Ht.controls,children:[e.jsx(it,{onClick:u,children:"Ressaltar Diagonal"}),e.jsx(it,{onClick:c,variant:"secondary",children:"Nous Valors"})]}),e.jsx("div",{className:Ht.info,children:i?`matriu[${i.replace("-","][")}] = ${t[parseInt(i.split("-")[0])][parseInt(i.split("-")[1])]}`:"int[][] matriu = new int[4][4];"})]})}const pS=`// Declaracio d'una matriu 3x4
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
}`;function gS(){return e.jsxs("div",{children:[e.jsx(S,{title:"Arrays Bidimensionals (Matrius)"}),e.jsx(f,{variant:"info",title:"Què és una Matriu?",children:e.jsxs("p",{children:["Una ",e.jsx("strong",{children:"matriu"})," (o array 2D) és un array d'arrays. Es pot pensar com una taula amb ",e.jsx("strong",{children:"files"})," i ",e.jsx("strong",{children:"columnes"}),". Cada element s'identifica amb dos índexos: ",e.jsx("code",{children:"[fila][columna]"}),"."]})}),e.jsx(dS,{}),e.jsx(f,{variant:"explanation",title:"Estructura d'una Matriu",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Files:"})," cada fila és un array independent."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Columnes:"})," cada posició dins d'una fila."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accés:"})," ",e.jsx("code",{children:"matriu[fila][columna]"})," per llegir o escriure."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mida:"})," ",e.jsx("code",{children:"matriu.length"})," dona el nombre de files, ",e.jsx("code",{children:"matriu[0].length"})," dona les columnes."]})]})}),e.jsx(g,{code:pS,label:"Declaració de matrius",showLineNumbers:!0}),e.jsx(J,{headers:["Operació","Sintaxi","Descripció"],rows:[{cells:["Declarar buida","tipus[][] nom = new tipus[files][cols]","Crea matriu amb zeros"]},{cells:["Declarar amb valors","tipus[][] nom = {{...}, {...}}","Inicialitza amb valors"]},{cells:["Accedir element","nom[fila][col]","Llegeix un valor concret"]},{cells:["Nombre files","nom.length","Retorna total de files"]},{cells:["Nombre columnes","nom[0].length","Retorna columnes de la fila 0"]}]}),e.jsx(g,{code:mS,label:"Accés i modificació d'elements",showLineNumbers:!0}),e.jsx(g,{code:hS,label:"Recorregut complet de la matriu",showLineNumbers:!0}),e.jsx(f,{variant:"success",title:"Diagonal principal",children:e.jsxs("p",{children:["En una matriu quadrada (NxN), la ",e.jsx("strong",{children:"diagonal principal"})," són els elements on l'índex de fila és igual a l'índex de columna: ",e.jsx("code",{children:"matriu[i][i]"}),"."]})}),e.jsx(g,{code:fS,label:"Recórrer la diagonal",showLineNumbers:!0}),e.jsx(f,{variant:"info",title:"Exemple pràctic: Notes d'alumnes",children:e.jsx("p",{children:"Un cas d'ús habitual és guardar les notes de diversos alumnes en diverses assignatures, on cada fila representa un alumne i cada columna una assignatura."})}),e.jsx(g,{code:xS,label:"Exemple: Mitjana per alumne",showLineNumbers:!0})]})}const vS="_container_1elsv_1",jS="_title_1elsv_9",bS="_subtitle_1elsv_17",yS="_listArea_1elsv_25",SS="_listContainer_1elsv_33",ES="_emptyMessage_1elsv_41",CS="_cell_1elsv_48",wS="_cellValue_1elsv_55",AS="_cellHighlight_1elsv_79",LS="_cellShifting_1elsv_86",RS="_cellIndex_1elsv_92",MS="_controlsGrid_1elsv_101",TS="_controlGroup_1elsv_108",NS="_controlLabel_1elsv_115",kS="_controlRow_1elsv_124",PS="_console_1elsv_156",_S="_consoleLine_1elsv_170",qS="_consoleCode_1elsv_174",OS="_consoleResult_1elsv_178",IS="_consoleError_1elsv_182",DS="_consolePlaceholder_1elsv_186",FS="_sizeBar_1elsv_192",zS="_sizeBarLabel_1elsv_205",BS="_sizeBarTrack_1elsv_210",US="_sizeBarFill_1elsv_218",fe={container:vS,title:jS,subtitle:bS,listArea:yS,listContainer:SS,emptyMessage:ES,cell:CS,cellValue:wS,cellHighlight:AS,cellShifting:LS,cellIndex:RS,controlsGrid:MS,controlGroup:TS,controlLabel:NS,controlRow:kS,console:PS,consoleLine:_S,consoleCode:qS,consoleResult:OS,consoleError:IS,consolePlaceholder:DS,sizeBar:FS,sizeBarLabel:zS,sizeBarTrack:BS,sizeBarFill:US},Ei=15;function GS(){const[t,r]=A.useState(["Hola","Món","Java"]),[a,n]=A.useState([]),[i,s]=A.useState(null),[l,o]=A.useState([]),c=A.useRef(null),u=A.useRef(null),m=A.useRef(null),d=A.useRef(null),x=A.useRef(null),y=A.useRef(null),v=A.useRef(null),b=A.useRef(null),E=A.useRef(null);A.useEffect(()=>{E.current&&(E.current.scrollTop=E.current.scrollHeight)},[a]);const h=A.useCallback((q,H,re=!1)=>{n(O=>[...O.slice(-25),{code:q,result:H,isError:re,id:Date.now()+Math.random()}])},[]),p=A.useCallback(q=>{s(q),setTimeout(()=>s(null),800)},[]),j=A.useCallback(q=>{o(q),setTimeout(()=>o([]),600)},[]),R=()=>{var H;const q=(H=c.current)==null?void 0:H.value.trim();if(q){if(t.length>=Ei){h(`llista.add("${q}")`,`Error: massa elements (max ${Ei} per la demo)`,!0);return}r(re=>[...re,q]),h(`llista.add("${q}")`,`// S'afegeix "${q}" al final → mida = ${t.length+1}`),p(t.length),c.current.value="",c.current.focus()}},N=()=>{var O,B;const q=parseInt((O=u.current)==null?void 0:O.value),H=(B=m.current)==null?void 0:B.value.trim();if(isNaN(q)||!H)return;if(q<0||q>t.length){h(`llista.add(${q}, "${H}")`,`IndexOutOfBoundsException: Index ${q} fora de rang [0..${t.length}]`,!0);return}if(t.length>=Ei){h(`llista.add(${q}, "${H}")`,`Error: massa elements (max ${Ei})`,!0);return}const re=[];for(let G=q;G<t.length;G++)re.push(G+1);r(G=>[...G.slice(0,q),H,...G.slice(q)]),h(`llista.add(${q}, "${H}")`,`// Insereix "${H}" a posició ${q} → els elements es desplacen`),p(q),j(re),u.current.value="",m.current.value=""},P=()=>{var O;const q=parseInt((O=d.current)==null?void 0:O.value);if(isNaN(q))return;if(q<0||q>=t.length){h(`llista.remove(${q})`,`IndexOutOfBoundsException: Index ${q} fora de rang [0..${t.length-1}]`,!0);return}const H=t[q],re=[];for(let B=q+1;B<t.length;B++)re.push(B-1);r(B=>B.filter((G,ae)=>ae!==q)),h(`llista.remove(${q})`,`// Elimina "${H}" de posició ${q} → retorna "${H}"`),j(re),d.current.value=""},_=()=>{var H;const q=parseInt((H=x.current)==null?void 0:H.value);if(!isNaN(q)){if(q<0||q>=t.length){h(`llista.get(${q})`,`IndexOutOfBoundsException: Index ${q} fora de rang [0..${t.length-1}]`,!0);return}h(`llista.get(${q})`,`→ "${t[q]}"`),p(q),x.current.value=""}},w=()=>{var O,B;const q=parseInt((O=y.current)==null?void 0:O.value),H=(B=v.current)==null?void 0:B.value.trim();if(isNaN(q)||!H)return;if(q<0||q>=t.length){h(`llista.set(${q}, "${H}")`,`IndexOutOfBoundsException: Index ${q} fora de rang [0..${t.length-1}]`,!0);return}const re=t[q];r(G=>G.map((ae,de)=>de===q?H:ae)),h(`llista.set(${q}, "${H}")`,`// Substitueix "${re}" per "${H}" → retorna "${re}"`),p(q),y.current.value="",v.current.value=""},$=()=>{var O;const q=(O=b.current)==null?void 0:O.value.trim();if(!q)return;const H=t.includes(q),re=t.indexOf(q);h(`llista.contains("${q}")`,`→ ${H}${H?` (trobat a posició ${re})`:""}`),H&&p(re),b.current.value=""},F=()=>{h("llista.size()",`→ ${t.length}`)},le=()=>{r([]),h("llista.clear()","// S'han eliminat tots els elements → mida = 0")},ee=()=>{r(["Hola","Món","Java"]),n([]),s(null),o([])},ve=q=>H=>{H.key==="Enter"&&q()},te=Math.max(10,Math.pow(2,Math.ceil(Math.log2(t.length||1)+.1)));return e.jsxs("div",{className:fe.container,children:[e.jsx("div",{className:fe.title,children:"Simulador Interactiu d'ArrayList"}),e.jsx("div",{className:fe.subtitle,children:"ArrayList<String> llista — Prova les operacions i observa el resultat!"}),e.jsx("div",{className:fe.listArea,children:t.length===0?e.jsx("div",{className:fe.emptyMessage,children:"[ ArrayList buit — afegeix elements! ]"}):e.jsx("div",{className:fe.listContainer,children:t.map((q,H)=>e.jsxs("div",{className:`${fe.cell} ${i===H?fe.cellHighlight:""} ${l.includes(H)?fe.cellShifting:""}`,children:[e.jsx("div",{className:fe.cellValue,children:`"${q}"`}),e.jsxs("div",{className:fe.cellIndex,children:["[",H,"]"]})]},`${H}-${q}-${t.length}`))})}),e.jsxs("div",{className:fe.sizeBar,children:[e.jsxs("span",{className:fe.sizeBarLabel,children:["size() = ",t.length]}),e.jsx("div",{className:fe.sizeBarTrack,children:e.jsx("div",{className:fe.sizeBarFill,style:{width:`${t.length/te*100}%`}})}),e.jsxs("span",{children:["capacitat interna ≈ ",te]})]}),e.jsxs("div",{className:fe.controlsGrid,children:[e.jsxs("div",{className:fe.controlGroup,children:[e.jsx("div",{className:fe.controlLabel,children:"Afegir elements"}),e.jsxs("div",{className:fe.controlRow,children:[e.jsx("input",{ref:c,placeholder:"valor",onKeyDown:ve(R)}),e.jsx(it,{onClick:R,variant:"secondary",children:"add()"})]}),e.jsxs("div",{className:fe.controlRow,style:{marginTop:6},children:[e.jsx("input",{ref:u,placeholder:"pos",style:{maxWidth:50}}),e.jsx("input",{ref:m,placeholder:"valor",onKeyDown:ve(N)}),e.jsx(it,{onClick:N,variant:"secondary",children:"add(i, v)"})]})]}),e.jsxs("div",{className:fe.controlGroup,children:[e.jsx("div",{className:fe.controlLabel,children:"Accedir i modificar"}),e.jsxs("div",{className:fe.controlRow,children:[e.jsx("input",{ref:x,placeholder:"pos",style:{maxWidth:50},onKeyDown:ve(_)}),e.jsx(it,{onClick:_,variant:"secondary",children:"get(i)"}),e.jsx("input",{ref:d,placeholder:"pos",style:{maxWidth:50},onKeyDown:ve(P)}),e.jsx(it,{onClick:P,variant:"secondary",children:"remove(i)"})]}),e.jsxs("div",{className:fe.controlRow,style:{marginTop:6},children:[e.jsx("input",{ref:y,placeholder:"pos",style:{maxWidth:50}}),e.jsx("input",{ref:v,placeholder:"nou valor",onKeyDown:ve(w)}),e.jsx(it,{onClick:w,variant:"secondary",children:"set(i, v)"})]})]}),e.jsxs("div",{className:fe.controlGroup,children:[e.jsx("div",{className:fe.controlLabel,children:"Cercar i utilitats"}),e.jsxs("div",{className:fe.controlRow,children:[e.jsx("input",{ref:b,placeholder:"valor",onKeyDown:ve($)}),e.jsx(it,{onClick:$,variant:"secondary",children:"contains()"})]}),e.jsxs("div",{className:fe.controlRow,style:{marginTop:6},children:[e.jsx(it,{onClick:F,variant:"secondary",children:"size()"}),e.jsx(it,{onClick:le,variant:"secondary",children:"clear()"}),e.jsx(it,{onClick:ee,children:"Reset"})]})]})]}),e.jsx("div",{className:fe.console,ref:E,children:a.length===0?e.jsx("div",{className:fe.consolePlaceholder,children:"// Fes clic als botons per veure el codi Java equivalent..."}):a.map(q=>e.jsxs("div",{className:fe.consoleLine,children:[e.jsx("span",{className:fe.consoleCode,children:q.code})," ",e.jsx("span",{className:q.isError?fe.consoleError:fe.consoleResult,children:q.result})]},q.id))})]})}const HS="import java.util.ArrayList;",$S=`// Crear un ArrayList de Strings
ArrayList<String> noms = new ArrayList<>();

// Crear un ArrayList d'enters (cal usar Integer, no int)
ArrayList<Integer> numeros = new ArrayList<>();

// Crear un ArrayList de decimals
ArrayList<Double> preus = new ArrayList<>();`,VS=`ArrayList<String> fruites = new ArrayList<>();

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
}`,JS=`// AMB ARRAY NORMAL: mida fixa, hem de saber quants alumnes hi ha
String[] alumnes = new String[30]; // I si en venen 31? 💥
int comptador = 0;
alumnes[comptador++] = "Anna";
alumnes[comptador++] = "Marc";
// Per eliminar un del mig... un malson de desplaçaments manuals`,WS=`// AMB ARRAYLIST: creix automàticament, molt més fàcil
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
}`;function ZS(){return e.jsxs("div",{children:[e.jsx(S,{title:"ArrayList: Llistes Dinàmiques"}),e.jsxs(f,{variant:"info",title:"Què és un ArrayList?",children:[e.jsxs("p",{children:["Un ",e.jsx("strong",{children:"ArrayList"})," és com un array, però ",e.jsx("strong",{children:"millor"}),": creix i s'encongeix automàticament quan afegeixes o elimines elements. No has de decidir la mida per avançat — simplement afegeixes el que necessitis."]}),e.jsx("p",{style:{marginTop:8},children:"Imagina't una llista de la compra: pots afegir productes, treure'ls quan els compres i no et cal saber per endavant quants en seran. Això és un ArrayList!"})]}),e.jsx(S,{title:"Array vs ArrayList: Quina diferència hi ha?"}),e.jsxs(me,{children:[e.jsx(T,{title:"Array (clàssic)",variant:"pink",children:e.jsxs("ul",{style:{margin:0,paddingLeft:18},children:[e.jsxs("li",{children:["Mida ",e.jsx("strong",{children:"fixa"})," — decidida al crear-lo"]}),e.jsx("li",{children:"No pot créixer ni encongir-se"}),e.jsx("li",{children:"Funciona amb tipus primitius (int, double...)"}),e.jsxs("li",{children:["Accés amb ",e.jsx("code",{children:"array[i]"})]}),e.jsxs("li",{children:["Longitud amb ",e.jsx("code",{children:".length"})]})]})}),e.jsx(T,{title:"ArrayList (dinàmic)",variant:"blue",children:e.jsxs("ul",{style:{margin:0,paddingLeft:18},children:[e.jsxs("li",{children:["Mida ",e.jsx("strong",{children:"flexible"})," — creix automàticament"]}),e.jsx("li",{children:"Afegir i eliminar quan vulguis"}),e.jsx("li",{children:"Només objectes (Integer, String, Double...)"}),e.jsxs("li",{children:["Accés amb ",e.jsx("code",{children:".get(i)"})]}),e.jsxs("li",{children:["Longitud amb ",e.jsx("code",{children:".size()"})]})]})})]}),e.jsxs(oe,{children:[e.jsx(U,{title:"Amb Array: rígid i complicat",variant:"bad",children:e.jsx(g,{code:JS,language:"java"})}),e.jsx(U,{title:"Amb ArrayList: flexible i senzill",variant:"good",children:e.jsx(g,{code:WS,language:"java"})})]}),e.jsx(S,{title:"Com crear un ArrayList"}),e.jsx(f,{variant:"warning",title:"Important: el import",children:e.jsx("p",{children:"Abans d'usar ArrayList, cal importar-lo a la part de dalt del fitxer:"})}),e.jsx(g,{code:HS,label:"Import necessari",language:"java"}),e.jsx(g,{code:$S,label:"Creació d'un ArrayList",language:"java",showLineNumbers:!0}),e.jsx(f,{variant:"explanation",title:"Tipus Wrapper: per què Integer i no int?",children:e.jsxs("p",{children:["ArrayList només pot guardar ",e.jsx("strong",{children:"objectes"}),", no tipus primitius. Per això existeixen les ",e.jsx("strong",{children:"classes Wrapper"}),': són la versió "objecte" dels tipus primitius. La bona notícia és que Java fa la conversió automàticament (',e.jsx("strong",{children:"autoboxing"}),")."]})}),e.jsx(J,{headers:["Tipus primitiu","Classe Wrapper","Exemple ArrayList"],rows:[{cells:["int","Integer","ArrayList<Integer>"]},{cells:["double","Double","ArrayList<Double>"]},{cells:["boolean","Boolean","ArrayList<Boolean>"]},{cells:["char","Character","ArrayList<Character>"]},{cells:["String","String (ja és objecte!)","ArrayList<String>"]}]}),e.jsx(g,{code:YS,label:"Tipus Wrapper i Autoboxing",language:"java",showLineNumbers:!0}),e.jsx(S,{title:"Operacions principals"}),e.jsx(J,{headers:["Mètode","Què fa","Retorna"],rows:[{cells:["add(element)","Afegeix al final de la llista","true"]},{cells:["add(index, element)","Insereix a la posició indicada","void"]},{cells:["get(index)","Obté l'element de la posició","L'element"]},{cells:["set(index, element)","Substitueix l'element de la posició","L'element antic"]},{cells:["remove(index)","Elimina l'element de la posició","L'element eliminat"]},{cells:["size()","Retorna quants elements hi ha","int"]},{cells:["contains(element)","Comprova si l'element hi és","boolean"]},{cells:["indexOf(element)","Retorna la posició de l'element (-1 si no hi és)","int"]},{cells:["isEmpty()","Comprova si la llista està buida","boolean"]},{cells:["clear()","Elimina tots els elements","void"]}]}),e.jsx(g,{code:VS,label:"Operacions bàsiques en acció",language:"java",showLineNumbers:!0}),e.jsx(S,{title:"Prova-ho tu!"}),e.jsx(f,{variant:"info",title:"Simulador interactiu",children:e.jsx("p",{children:"Utilitza el simulador de sota per provar totes les operacions d'un ArrayList. Escriu valors, fes clic als botons i observa com canvia la llista i el codi Java equivalent a la consola."})}),e.jsx(GS,{}),e.jsx(S,{title:"Recórrer un ArrayList"}),e.jsx(g,{code:QS,label:"Formes de recórrer",language:"java",showLineNumbers:!0}),e.jsx(f,{variant:"explanation",title:"Quina forma triar?",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"for clàssic:"})," quan necessites saber la posició (índex) de cada element."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"for-each:"})," quan només vols accedir al valor, sense l'índex. Més net i menys propensos a errors."]})]})}),e.jsx(S,{title:"Errors comuns"}),e.jsx(f,{variant:"error",title:"IndexOutOfBoundsException",children:e.jsxs("p",{children:["L'error més habitual! Passa quan intentes accedir a una posició que no existeix. Recorda: les posicions van de ",e.jsx("strong",{children:"0"})," a ",e.jsx("strong",{children:"size() - 1"}),"."]})}),e.jsx(g,{code:XS,label:"Com evitar errors d'índex",language:"java",showLineNumbers:!0}),e.jsx(S,{title:"Exemple complet: Llista de la Compra"}),e.jsx(f,{variant:"success",title:"Posant-ho tot junt",children:e.jsx("p",{children:"Un exemple pràctic que utilitza les operacions principals: afegir, eliminar, cercar i recórrer una llista."})}),e.jsx(g,{code:KS,label:"LlistaCompra.java",language:"java",showLineNumbers:!0}),e.jsx(S,{title:"Resum"}),e.jsxs(me,{children:[e.jsx(T,{title:"Crear",variant:"blue",children:e.jsx("code",{children:"ArrayList<Tipus> nom = new ArrayList<>();"})}),e.jsxs(T,{title:"Afegir",variant:"green",children:[e.jsx("code",{children:"llista.add(element)"}),e.jsx("br",{}),e.jsx("code",{children:"llista.add(pos, element)"})]}),e.jsxs(T,{title:"Accedir / Modificar",variant:"yellow",children:[e.jsx("code",{children:"llista.get(pos)"}),e.jsx("br",{}),e.jsx("code",{children:"llista.set(pos, element)"})]}),e.jsxs(T,{title:"Eliminar / Cercar",variant:"pink",children:[e.jsx("code",{children:"llista.remove(pos)"}),e.jsx("br",{}),e.jsx("code",{children:"llista.contains(element)"}),e.jsx("br",{}),e.jsx("code",{children:"llista.size()"})]})]}),e.jsx(f,{variant:"info",title:"Quan usar ArrayList?",children:e.jsxs("p",{children:["Usa ",e.jsx("strong",{children:"ArrayList"})," quan no sàpigues per avançat quants elements tindràs, o quan necessitis afegir i eliminar elements sovint. Si la mida és fixa i coneguda, un array normal pot ser suficient i una mica més eficient."]})})]})}const e1="_container_4hbij_1",t1="_title_4hbij_17",r1="_functionsGrid_4hbij_33",a1="_functionBox_4hbij_47",n1="_functionName_4hbij_75",i1="_functionDesc_4hbij_91",s1="_inputGroup_4hbij_105",l1="_input_4hbij_105",o1="_executeBtn_4hbij_165",c1="_output_4hbij_211",u1="_outputLabel_4hbij_237",d1="_outputValue_4hbij_247",p1="_outputEmpty_4hbij_257",se={container:e1,title:t1,functionsGrid:r1,functionBox:a1,functionName:n1,functionDesc:i1,inputGroup:s1,input:l1,executeBtn:o1,output:c1,outputLabel:u1,outputValue:d1,outputEmpty:p1};function m1(){const[t,r]=A.useState(""),[a,n]=A.useState(""),i=()=>{r("Hola Mon!")},s=()=>{n(String(Math.floor(Math.random()*100)))};return e.jsxs("div",{className:se.container,children:[e.jsx("div",{className:se.title,children:"Demo: Funcions sense Parametres"}),e.jsxs("div",{className:se.functionsGrid,children:[e.jsxs("div",{className:se.functionBox,children:[e.jsx("div",{className:se.functionName,children:"saludar()"}),e.jsx("div",{className:se.functionDesc,children:"Retorna un missatge de salutacio fix. No rep cap parametre."}),e.jsx("button",{className:se.executeBtn,onClick:i,children:"Executar saludar()"}),e.jsx("div",{className:se.output,style:{marginTop:12},children:t?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:se.outputLabel,children:"Resultat: "}),e.jsxs("span",{className:se.outputValue,children:['"',t,'"']})]}):e.jsx("span",{className:se.outputEmpty,children:"Prem el boto per executar..."})})]}),e.jsxs("div",{className:se.functionBox,children:[e.jsx("div",{className:se.functionName,children:"obtenirNumeroAleatori()"}),e.jsx("div",{className:se.functionDesc,children:"Genera i retorna un numero aleatori entre 0 i 99."}),e.jsx("button",{className:se.executeBtn,onClick:s,children:"Executar obtenirNumeroAleatori()"}),e.jsx("div",{className:se.output,style:{marginTop:12},children:a?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:se.outputLabel,children:"Resultat: "}),e.jsx("span",{className:se.outputValue,children:a})]}):e.jsx("span",{className:se.outputEmpty,children:"Prem el boto per executar..."})})]})]})]})}function h1(){const[t,r]=A.useState(""),[a,n]=A.useState(""),[i,s]=A.useState(""),[l,o]=A.useState(""),[c,u]=A.useState(""),m=()=>{const x=parseFloat(t),y=parseFloat(a);if(isNaN(x)||isNaN(y)){s("Introdueix dos numeros valids");return}s(String(x+y))},d=()=>{if(!l.trim()){u("Introdueix un nom");return}u(`Hola, ${l.trim()}! Benvingut/da!`)};return e.jsxs("div",{className:se.container,children:[e.jsx("div",{className:se.title,children:"Demo: Funcions amb Parametres"}),e.jsxs("div",{className:se.functionsGrid,children:[e.jsxs("div",{className:se.functionBox,children:[e.jsx("div",{className:se.functionName,children:"sumar(int a, int b)"}),e.jsx("div",{className:se.functionDesc,children:"Rep dos numeros com a parametres i retorna la seva suma."}),e.jsxs("div",{className:se.inputGroup,children:[e.jsx("input",{type:"number",className:se.input,placeholder:"a",value:t,onChange:x=>r(x.target.value)}),e.jsx("input",{type:"number",className:se.input,placeholder:"b",value:a,onChange:x=>n(x.target.value)}),e.jsx("button",{className:se.executeBtn,onClick:m,children:"Executar"})]}),e.jsx("div",{className:se.output,children:i?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:se.outputLabel,children:["sumar(",t,", ",a,") = "]}),e.jsx("span",{className:se.outputValue,children:i})]}):e.jsx("span",{className:se.outputEmpty,children:"Introdueix valors i executa..."})})]}),e.jsxs("div",{className:se.functionBox,children:[e.jsx("div",{className:se.functionName,children:"saludarPersona(String nom)"}),e.jsx("div",{className:se.functionDesc,children:"Rep un nom com a parametre i retorna un missatge personalitzat."}),e.jsxs("div",{className:se.inputGroup,children:[e.jsx("input",{type:"text",className:se.input,placeholder:"Nom",value:l,onChange:x=>o(x.target.value)}),e.jsx("button",{className:se.executeBtn,onClick:d,children:"Executar"})]}),e.jsx("div",{className:se.output,children:c?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:se.outputLabel,children:"Resultat: "}),e.jsxs("span",{className:se.outputValue,children:['"',c,'"']})]}):e.jsx("span",{className:se.outputEmpty,children:"Introdueix un nom i executa..."})})]})]})]})}function Th({mode:t="no-params"}){return t==="with-params"?e.jsx(h1,{}):e.jsx(m1,{})}const f1=`// Estructura general d'una funció sense paràmetres
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
}`;function v1(){return e.jsxs("div",{children:[e.jsx(S,{title:"Funcions sense Paràmetres"}),e.jsx(f,{variant:"info",title:"Què és una Funció?",children:e.jsxs("p",{children:["Una ",e.jsx("strong",{children:"funció"})," (o mètode) és un bloc de codi reutilitzable que realitza una tasca específica. Les funcions ",e.jsx("strong",{children:"sense paràmetres"})," no necessiten rebre cap dada externa per funcionar: fan la seva feina de manera autònoma."]})}),e.jsx(Th,{mode:"no-params"}),e.jsx(f,{variant:"explanation",title:"Avantatges de les funcions",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Reutilització:"})," es poden cridar tantes vegades com calgui."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Organització:"})," el codi queda més net i estructurat."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Manteniment:"})," si cal canviar la lògica, només es modifica en un lloc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Llegibilitat:"})," el nom de la funció descriu què fa."]})]})}),e.jsx(g,{code:f1,label:"Estructura d'una funció sense paràmetres",showLineNumbers:!0}),e.jsx(J,{headers:["Concepte","Descripció","Exemple"],rows:[{cells:["static","Permet cridar la funció sense crear un objecte","static void fer()"]},{cells:["Tipus de retorn","Indica què retorna la funció","int, String, void..."]},{cells:["void","La funció no retorna cap valor","static void mostrar()"]},{cells:["return","Retorna un valor i acaba la funció",'return "Hola";']}]}),e.jsx(g,{code:x1,label:"Exemple: Funció saludar()",showLineNumbers:!0}),e.jsx(f,{variant:"warning",title:"void vs tipus de retorn",children:e.jsxs("p",{children:["Si una funció és ",e.jsx("code",{children:"void"}),", no pot tenir ",e.jsx("code",{children:"return"})," amb valor (però pot tenir ",e.jsx("code",{children:"return;"})," per sortir abans). Si té un tipus de retorn (",e.jsx("code",{children:"int"}),", ",e.jsx("code",{children:"String"}),", etc.), ",e.jsx("strong",{children:"obligatòriament"})," ha de retornar un valor d'aquell tipus."]})}),e.jsx(g,{code:g1,label:"Exemple: Funcions sense paràmetres variades",showLineNumbers:!0})]})}const j1=`// Estructura general d'una funció amb paràmetres
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
}`;function S1(){return e.jsxs("div",{children:[e.jsx(S,{title:"Funcions amb Paràmetres"}),e.jsx(f,{variant:"info",title:"Paràmetres i Arguments",children:e.jsxs("p",{children:["Les funcions amb ",e.jsx("strong",{children:"paràmetres"})," reben dades d'entrada que poden utilitzar dins del seu cos. Els ",e.jsx("strong",{children:"paràmetres"})," es defineixen a la declaració de la funció, i els ",e.jsx("strong",{children:"arguments"})," són els valors concrets que es passen quan es crida la funció."]})}),e.jsx(Th,{mode:"with-params"}),e.jsx(g,{code:j1,label:"Estructura d'una funció amb paràmetres",showLineNumbers:!0}),e.jsx(J,{headers:["Concepte","Descripció","Exemple"],rows:[{cells:["Paràmetre","Variable declarada a la signatura","(int a, int b)"]},{cells:["Argument","Valor passat en la crida","sumar(5, 3)"]},{cells:["Pas per valor","Java copia el valor del primitiu","int, double, char..."]},{cells:["Pas per referència","Java copia la referència de l'objecte","String, arrays, objectes"]}]}),e.jsx(f,{variant:"explanation",title:"Diferència entre Paràmetre i Argument",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Paràmetre:"}),' és la variable a la definició de la funció. És com un "espai reservat".']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Argument:"})," és el valor real que enviem quan cridem la funció."]}),e.jsxs("li",{children:["Exemple: en ",e.jsx("code",{children:"static int sumar(int a, int b)"}),", ",e.jsx("code",{children:"a"})," i ",e.jsx("code",{children:"b"})," són paràmetres."]}),e.jsxs("li",{children:["Quan cridem ",e.jsx("code",{children:"sumar(5, 3)"}),", ",e.jsx("code",{children:"5"})," i ",e.jsx("code",{children:"3"})," són arguments."]})]})}),e.jsx(g,{code:b1,label:"Exemples bàsics de funcions amb paràmetres",showLineNumbers:!0}),e.jsx(f,{variant:"warning",title:"Ordre i tipus dels arguments",children:e.jsxs("p",{children:["Quan cridem una funció, els arguments han de coincidir en ",e.jsx("strong",{children:"nombre"}),",",e.jsx("strong",{children:" ordre"})," i ",e.jsx("strong",{children:"tipus"})," amb els paràmetres declarats. Si no, Java donarà un error de compilació."]})}),e.jsx(g,{code:y1,label:"Funcions amb múltiples paràmetres",showLineNumbers:!0})]})}const E1=`public class Exemples {
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
public boolean check(String s) { ... }         // Massa genèric, paràmetre poc clar`;function k1(){return e.jsxs("div",{children:[e.jsx(S,{title:"Tipus de Funcions (Mètodes) en Java"}),e.jsx(f,{variant:"info",title:"Per què classificar les funcions?",children:e.jsxs("p",{children:["Les funcions (en Java es diuen ",e.jsx("strong",{children:"mètodes"}),") es poden classificar de diverses maneres: segons si ",e.jsx("strong",{children:"retornen un valor"})," o no, segons si reben ",e.jsx("strong",{children:"paràmetres"}),", i segons si són ",e.jsx("strong",{children:"estàtiques"})," o d'instància. Entendre aquestes classificacions ens ajuda a escriure codi més clar i organitzat."]})}),e.jsx(S,{title:"Classificació per Tipus de Retorn"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["La primera gran distinció és si la funció ",e.jsx("strong",{children:"retorna un valor"})," al codi que l'ha cridat, o si simplement ",e.jsx("strong",{children:"executa una acció"})," sense retornar res."]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"void - No retorna res (Procediment)",variant:"blue",children:[e.jsxs("p",{style:{marginBottom:"10px"},children:["Les funcions ",e.jsx("code",{children:"void"})," executen una acció (imprimir, modificar dades...) però ",e.jsx("strong",{children:"no retornen cap valor"}),". No pots guardar el seu resultat en una variable."]}),e.jsx(g,{code:`static void saludar() {
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
System.out.println(resultat); // 8`})]})]}),e.jsx(g,{label:"Exemples de funcions void (procediments)",code:E1,showLineNumbers:!0}),e.jsx(g,{label:"Exemples de funcions amb retorn",code:C1,showLineNumbers:!0}),e.jsx(S,{title:"La Paraula Clau return"}),e.jsx(f,{variant:"info",title:"Com funciona return?",children:e.jsxs("p",{children:["La paraula clau ",e.jsx("code",{children:"return"})," fa dues coses: ",e.jsx("strong",{children:"1)"})," finalitza l'execució de la funció immediatament, i ",e.jsx("strong",{children:"2)"})," retorna el valor especificat al codi que ha cridat la funció. Després d'un ",e.jsx("code",{children:"return"}),", cap línia de codi dins la funció s'executarà."]})}),e.jsx(g,{label:"Comportament de return",code:w1,showLineNumbers:!0}),e.jsx(f,{variant:"warning",title:"Regles importants de return",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Una funció amb tipus de retorn (no void) ",e.jsx("strong",{children:"ha de tenir"})," un ",e.jsx("code",{children:"return"})," en tots els camins possibles."]}),e.jsxs("li",{children:["El valor retornat ha de ser del ",e.jsx("strong",{children:"mateix tipus"})," que el declarat (o compatible)."]}),e.jsxs("li",{children:["En funcions ",e.jsx("code",{children:"void"}),", pots usar ",e.jsx("code",{children:"return;"})," (sense valor) per sortir anticipadament."]}),e.jsxs("li",{children:["El codi després d'un ",e.jsx("code",{children:"return"})," és ",e.jsx("strong",{children:"inassolible"})," i dona error de compilació."]})]})}),e.jsx(S,{title:"Classificació per Paràmetres"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Una altra forma de classificar les funcions és segons si reben ",e.jsx("strong",{children:"dades d'entrada"})," (paràmetres) o no. Els paràmetres permeten que la funció treballi amb valors diferents cada cop que es crida."]})}),e.jsx(g,{label:"Funcions sense paràmetres",code:A1,showLineNumbers:!0}),e.jsx(g,{label:"Funcions amb paràmetres",code:L1,showLineNumbers:!0}),e.jsx(S,{title:"Paràmetres Variables (Varargs)"}),e.jsx(f,{variant:"info",title:"Què són els varargs?",children:e.jsxs("p",{children:["Java permet definir funcions que accepten un ",e.jsx("strong",{children:"nombre variable de paràmetres"})," del mateix tipus. S'utilitza la sintaxi ",e.jsx("code",{children:"tipus... nom"}),". Internament, Java tracta els varargs com un ",e.jsx("strong",{children:"array"}),"."]})}),e.jsx(g,{label:"Exemple de varargs (int... numeros)",code:R1,showLineNumbers:!0}),e.jsx(f,{variant:"warning",title:"Restriccions dels varargs",children:e.jsxs("p",{children:["Els varargs han de ser l'",e.jsx("strong",{children:"últim paràmetre"})," de la funció i només pot haver-n'hi ",e.jsx("strong",{children:"un"})," per funció. Per exemple:",e.jsx("code",{children:" static void exemple(String prefix, int... numeros)"})," és vàlid, però ",e.jsx("code",{children:"static void exemple(int... a, int... b)"})," ",e.jsx("strong",{children:"NO"})," ho és."]})}),e.jsx(S,{title:"Classificació per Accés: static vs Instància"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["En Java, els mètodes poden ser ",e.jsx("strong",{children:"estàtics"})," (pertanyen a la classe) o d'",e.jsx("strong",{children:"instància"})," (pertanyen a un objecte concret). Aquesta distinció és fonamental en la Programació Orientada a Objectes."]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Mètodes static",variant:"blue",children:[e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px",marginBottom:"10px"},children:[e.jsxs("li",{children:["Pertanyen a la ",e.jsx("strong",{children:"classe"}),", no a un objecte"]}),e.jsxs("li",{children:["Es criden amb ",e.jsx("code",{children:"NomClasse.mètode()"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No"})," poden accedir a atributs d'instància (no-static)"]}),e.jsx("li",{children:"Ideals per a funcions utilitat (càlculs, conversions...)"})]}),e.jsx(g,{code:`// Exemples de Java:
Math.sqrt(16);     // 4.0
Math.max(5, 3);    // 5
Integer.parseInt("42"); // 42`})]}),e.jsxs(U,{title:"Mètodes d'instància",variant:"good",children:[e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px",marginBottom:"10px"},children:[e.jsxs("li",{children:["Pertanyen a un ",e.jsx("strong",{children:"objecte"})," concret"]}),e.jsxs("li",{children:["Es criden amb ",e.jsx("code",{children:"objecte.mètode()"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Poden"})," accedir a atributs d'instància amb ",e.jsx("code",{children:"this"})]}),e.jsx("li",{children:"Ideals quan el mètode necessita l'estat de l'objecte"})]}),e.jsx(g,{code:`// Exemples:
String nom = "Hola";
nom.length();        // 4
nom.toUpperCase();   // "HOLA"
nom.charAt(0);       // 'H'`})]})]}),e.jsx(g,{label:"Exemple de mètodes static",code:M1,showLineNumbers:!0}),e.jsx(g,{label:"Exemple de mètodes d'instància",code:T1,showLineNumbers:!0}),e.jsx(f,{variant:"info",title:"Quan usar static vs instància?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Usa static"})," quan la funció no depengui de cap atribut d'objecte: funcions matemàtiques, utilitats, conversions, validacions pures."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Usa instància"})," quan la funció necessiti accedir o modificar les dades d'un objecte concret: getters, setters, mètodes que depenguin de l'estat."]}),e.jsxs("li",{children:["Als programes simples amb ",e.jsx("code",{children:"main"}),", solem usar ",e.jsx("code",{children:"static"})," perquè no creem objectes."]}),e.jsx("li",{children:"En POO, la majoria de mètodes són d'instància."})]})}),e.jsx(S,{title:"Nomenclatura: Funció vs Mètode vs Procediment"}),e.jsx(f,{variant:"explanation",title:"Per què tants noms?",children:e.jsxs("p",{children:["En el món de la programació s'utilitzen diferents termes per referir-se a blocs de codi reutilitzables. Depenent del llenguatge i del context, es fan servir noms diferents. En Java, el terme oficial és ",e.jsx("strong",{children:"mètode"}),", però és important conèixer la terminologia general."]})}),e.jsxs(me,{children:[e.jsxs(T,{title:"Funció",variant:"blue",children:[e.jsxs("p",{children:["Terme ",e.jsx("strong",{children:"general"})," de programació. És un bloc de codi que rep dades, les processa i ",e.jsx("strong",{children:"retorna un valor"}),"."]}),e.jsx("p",{style:{marginTop:"8px"},children:"Llenguatges: C, Python, JavaScript, etc."}),e.jsx(g,{code:`// Concepte de "funció"
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
}`})]})]}),e.jsx(f,{variant:"success",title:"Conclusió",children:e.jsxs("p",{children:["En Java, tant les funcions (que retornen valor) com els procediments (void) s'anomenen ",e.jsx("strong",{children:"mètodes"}),`, ja que sempre estan dins d'una classe. A la pràctica, molts programadors diuen "funció" de manera informal, i està perfectament bé. L'important és entendre que en Java, el terme tècnicament correcte és `,e.jsx("strong",{children:"mètode"}),"."]})}),e.jsx(S,{title:"Convencions per Nomenar Mètodes"}),e.jsx(f,{variant:"info",title:"Regles de nomenclatura en Java",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Utilitza ",e.jsx("strong",{children:"camelCase"}),": la primera paraula en minúscula, les següents amb majúscula inicial."]}),e.jsxs("li",{children:["Comença amb un ",e.jsx("strong",{children:"verb"})," que descrigui l'acció: ",e.jsx("code",{children:"calcular"}),", ",e.jsx("code",{children:"obtenir"}),", ",e.jsx("code",{children:"mostrar"}),", ",e.jsx("code",{children:"és"}),", ",e.jsx("code",{children:"té"}),"."]}),e.jsxs("li",{children:["Sigues ",e.jsx("strong",{children:"descriptiu"}),": el nom ha d'explicar què fa el mètode."]}),e.jsxs("li",{children:["Per booleans, usa prefixos com ",e.jsx("code",{children:"és"})," o ",e.jsx("code",{children:"té"}),": ",e.jsx("code",{children:"esValid()"}),", ",e.jsx("code",{children:"tePermisos()"}),"."]}),e.jsxs("li",{children:["Getters: ",e.jsx("code",{children:"getNom()"}),", ",e.jsx("code",{children:"getEdat()"}),". Setters: ",e.jsx("code",{children:"setNom()"}),", ",e.jsx("code",{children:"setEdat()"}),"."]})]})}),e.jsx(g,{label:"Bons i mals noms de mètodes",code:N1,showLineNumbers:!0}),e.jsx(S,{title:"Taula Resum de Tipus de Funcions"}),e.jsx(J,{headers:["Classificació","Tipus","Descripció","Exemple"],rows:[{group:"Per tipus de retorn"},{cells:["Retorn","void (Procediment)","No retorna cap valor","static void saludar() { ... }"]},{cells:["Retorn","Amb retorn (Funció)","Retorna un valor del tipus declarat","static int sumar(int a, int b) { return a + b; }"]},{group:"Per paràmetres"},{cells:["Paràmetres","Sense paràmetres","No rep cap dada d'entrada","static void saludar() { ... }"]},{cells:["Paràmetres","Amb paràmetres","Rep una o més dades d'entrada","static int sumar(int a, int b) { ... }"]},{cells:["Paràmetres","Varargs","Rep un nombre variable de paràmetres","static int sumar(int... nums) { ... }"]},{group:"Per accés (static vs instància)"},{cells:["Accés","static","Pertany a la classe, es crida amb NomClasse.mètode()","static double arrel(double n) { ... }"]},{cells:["Accés","Instància","Pertany a l'objecte, es crida amb objecte.mètode()","public void mostrar() { ... }"]},{group:"Per nomenclatura"},{cells:["Nom","Funció","Retorna un valor (terme general)","int sumar(int a, int b)"]},{cells:["Nom","Procediment","No retorna valor / void (terme general)","void mostrarMenu()"]},{cells:["Nom","Mètode","Nom oficial en Java per a tot","Qualsevol funció/procediment en Java"]}]}),e.jsx(f,{variant:"success",title:"Resum Final",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Les funcions ",e.jsx("code",{children:"void"})," executen accions sense retornar valor (procediments)."]}),e.jsxs("li",{children:["Les funcions amb tipus de retorn retornen un valor amb ",e.jsx("code",{children:"return"}),"."]}),e.jsx("li",{children:"Les funcions poden rebre 0, 1, o múltiples paràmetres (inclosos varargs)."}),e.jsxs("li",{children:["Els mètodes ",e.jsx("code",{children:"static"})," pertanyen a la classe; els d'instància pertanyen a l'objecte."]}),e.jsxs("li",{children:["En Java, tot són ",e.jsx("strong",{children:"mètodes"}),', però informalment diem "funció" o "procediment".']}),e.jsxs("li",{children:["Usa ",e.jsx("strong",{children:"camelCase"})," i comença els noms amb un ",e.jsx("strong",{children:"verb"})," descriptiu."]})]})})]})}const P1="_container_1pzke_1",_1="_title_1pzke_17",q1="_demosGrid_1pzke_33",O1="_demoBox_1pzke_45",I1="_demoTitle_1pzke_61",D1="_inputRow_1pzke_75",F1="_label_1pzke_89",z1="_input_1pzke_75",B1="_executeBtn_1pzke_139",U1="_result_1pzke_185",G1="_stepsContainer_1pzke_217",H1="_step_1pzke_217",$1="_stepVisible_1pzke_257",V1="_stepHighlight_1pzke_267",Q1="_sequence_1pzke_279",J1="_sequenceLabel_1pzke_301",W1="_placeholder_1pzke_315",we={container:P1,title:_1,demosGrid:q1,demoBox:O1,demoTitle:I1,inputRow:D1,label:F1,input:z1,executeBtn:B1,result:U1,stepsContainer:G1,step:H1,stepVisible:$1,stepHighlight:V1,sequence:Q1,sequenceLabel:J1,placeholder:W1};function K1(){const[t,r]=A.useState(""),[a,n]=A.useState(null),[i,s]=A.useState([]),[l,o]=A.useState(0),c=A.useRef([]),u=A.useCallback(()=>{c.current.forEach(y=>clearTimeout(y)),c.current=[]},[]);A.useEffect(()=>()=>u(),[u]);const m=y=>y<0?null:y===0||y===1?1:y*m(y-1),d=y=>{const v=[];if(y<=1)return v.push({text:`factorial(${y}) = ${y}`,isBase:!0}),v;for(let E=y;E>=2;E--)v.push({text:`factorial(${E}) = ${E} * factorial(${E-1})`,isBase:!1});v.push({text:"factorial(1) = 1  (cas base)",isBase:!0});let b=1;for(let E=2;E<=y;E++)b*=E,v.push({text:`factorial(${E}) = ${E} * ${b/E} = ${b}`,isBase:!1});return v},x=()=>{u(),o(0);const y=parseInt(t,10);if(isNaN(y)||y<0||y>12){n("Introdueix un numero entre 0 i 12"),s([]);return}const v=m(y);n(`${y}! = ${v}`);const b=d(y);s(b),b.forEach((E,h)=>{const p=setTimeout(()=>{o(j=>j+1)},(h+1)*300);c.current.push(p)})};return e.jsxs("div",{className:we.demoBox,children:[e.jsx("div",{className:we.demoTitle,children:"Factorial (n!)"}),e.jsxs("div",{className:we.inputRow,children:[e.jsx("span",{className:we.label,children:"n ="}),e.jsx("input",{type:"number",className:we.input,placeholder:"5",min:"0",max:"12",value:t,onChange:y=>r(y.target.value)}),e.jsx("button",{className:we.executeBtn,onClick:x,children:"Calcular"})]}),a&&e.jsx("div",{className:we.result,children:a}),i.length>0&&e.jsx("div",{className:we.stepsContainer,children:i.map((y,v)=>e.jsx("div",{className:`${we.step} ${v<l?we.stepVisible:""} ${y.isBase?we.stepHighlight:""}`,children:y.text},v))}),!a&&e.jsx("div",{className:we.placeholder,children:"Introdueix un valor i prem Calcular per veure els passos"})]})}function Y1(){const[t,r]=A.useState(""),[a,n]=A.useState(null),[i,s]=A.useState([]),l=u=>{if(u<=0)return 0;if(u===1)return 1;let m=0,d=1;for(let x=2;x<=u;x++){const y=m+d;m=d,d=y}return d},o=u=>{const m=[];for(let d=0;d<=u;d++)m.push(l(d));return m},c=()=>{const u=parseInt(t,10);if(isNaN(u)||u<0||u>20){n("Introdueix un numero entre 0 i 20"),s([]);return}const m=l(u);n(`fibonacci(${u}) = ${m}`),s(o(u))};return e.jsxs("div",{className:we.demoBox,children:[e.jsx("div",{className:we.demoTitle,children:"Fibonacci"}),e.jsxs("div",{className:we.inputRow,children:[e.jsx("span",{className:we.label,children:"Posicio n ="}),e.jsx("input",{type:"number",className:we.input,placeholder:"7",min:"0",max:"20",value:t,onChange:u=>r(u.target.value)}),e.jsx("button",{className:we.executeBtn,onClick:c,children:"Calcular"})]}),a&&e.jsx("div",{className:we.result,children:a}),i.length>0&&e.jsxs("div",{className:we.sequence,children:[e.jsx("span",{className:we.sequenceLabel,children:"Sequencia completa:"}),i.join(", ")]}),!a&&e.jsx("div",{className:we.placeholder,children:"Introdueix una posicio i prem Calcular"})]})}function X1(){return e.jsxs("div",{className:we.container,children:[e.jsx("div",{className:we.title,children:"Demo: Funcions Recursives"}),e.jsxs("div",{className:we.demosGrid,children:[e.jsx(K1,{}),e.jsx(Y1,{})]})]})}const Z1=`// Estructura general d'una funció recursiva
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
}`,rE=`public class SumaRecursiva {
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
}`;function aE(){return e.jsxs("div",{children:[e.jsx(S,{title:"Funcions Recursives"}),e.jsx(f,{variant:"info",title:"Què és la Recursivitat?",children:e.jsxs("p",{children:["La ",e.jsx("strong",{children:"recursivitat"})," és una tècnica on una funció es crida a si mateixa per resoldre un problema. Cada crida resol una part més petita del problema fins arribar a un ",e.jsx("strong",{children:"cas base"})," que atura la recursió."]})}),e.jsx(X1,{}),e.jsx(f,{variant:"explanation",title:"Els dos elements clau",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Cas base:"})," la condició que atura la recursió. Sense cas base, la funció es cridaria infinitament i provocaria un ",e.jsx("code",{children:"StackOverflowError"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Cas recursiu:"})," la funció es crida a si mateixa amb paràmetres més simples o més petits, acostant-se al cas base."]})]})}),e.jsx(g,{code:Z1,label:"Estructura d'una funció recursiva",showLineNumbers:!0}),e.jsx(J,{headers:["Concepte","Descripció","Importància"],rows:[{cells:["Cas base","Condició de parada de la recursió","Obligatori per evitar bucle infinit"]},{cells:["Cas recursiu","La funció es crida amb dades més simples","Ha de convergir cap al cas base"]},{cells:["Pila de crides","Cada crida s'apila fins al cas base","Limitat per la memòria de la pila"]},{cells:["StackOverflowError","Error si no hi ha cas base o no convergeix","Cal evitar-lo sempre"]}]}),e.jsx(f,{variant:"success",title:"Factorial (n!)",children:e.jsxs("p",{children:["El factorial és l'exemple clàssic de recursivitat: ",e.jsx("code",{children:"n! = n * (n-1)!"})," amb cas base ",e.jsx("code",{children:"0! = 1"}),"."]})}),e.jsx(g,{code:eE,label:"Exemple: Factorial recursiu",showLineNumbers:!0}),e.jsx(f,{variant:"success",title:"Fibonacci",children:e.jsxs("p",{children:["La seqüència de Fibonacci es defineix com: ",e.jsx("code",{children:"fib(n) = fib(n-1) + fib(n-2)"}),", amb casos base ",e.jsx("code",{children:"fib(0) = 0"})," i ",e.jsx("code",{children:"fib(1) = 1"}),"."]})}),e.jsx(g,{code:tE,label:"Exemple: Fibonacci recursiu",showLineNumbers:!0}),e.jsx(f,{variant:"warning",title:"Eficiència de la recursió",children:e.jsxs("p",{children:["La versió recursiva de Fibonacci és molt ineficient perquè recalcula els mateixos valors moltes vegades. Per a valors grans de ",e.jsx("code",{children:"n"}),", és preferible utilitzar un enfocament iteratiu o ",e.jsx("strong",{children:"memoització"}),"."]})}),e.jsx(g,{code:rE,label:"Més exemples: Suma i Potència recursius",showLineNumbers:!0})]})}const nE=`public class Calculadora {
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
}`;function lE(){return e.jsxs("div",{children:[e.jsx(S,{title:"Cridar Funcions des del Main"}),e.jsx(f,{variant:"info",title:"El mètode main()",children:e.jsxs("p",{children:["El mètode ",e.jsx("code",{children:"public static void main(String[] args)"})," és el"," ",e.jsx("strong",{children:"punt d'entrada"})," de qualsevol programa Java. Des d'aquí cridem les nostres funcions per executar la lògica del programa. Les funcions han de ser"," ",e.jsx("code",{children:"static"})," per poder-les cridar des del ",e.jsx("code",{children:"main"})," sense crear objectes."]})}),e.jsx(f,{variant:"explanation",title:"Flux d'execució",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"1."})," El programa comença sempre al ",e.jsx("code",{children:"main()"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"2."}),` Quan es crida una funció, l'execució "salta" al cos de la funció.`]}),e.jsxs("li",{children:[e.jsx("strong",{children:"3."})," Un cop la funció acaba (amb ",e.jsx("code",{children:"return"})," o al final del bloc), l'execució torna al punt on es va cridar."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"4."})," El valor retornat es pot guardar en una variable o usar directament."]})]})}),e.jsx(f,{variant:"success",title:"Exemple 1: Calculadora",children:e.jsxs("p",{children:["Combina funcions sense paràmetres (menú) i amb paràmetres (operacions). El ",e.jsx("code",{children:"main"})," coordina el flux."]})}),e.jsx(g,{code:nE,label:"Exemple 1: Calculadora amb funcions",showLineNumbers:!0}),e.jsx(f,{variant:"success",title:"Exemple 2: Gestor de Notes",children:e.jsx("p",{children:"Mostra com encadenar crides a funcions: el resultat d'una funció es passa com a argument de la següent. Cada funció fa una tasca concreta."})}),e.jsx(g,{code:iE,label:"Exemple 2: Crides encadenades de funcions",showLineNumbers:!0}),e.jsx(f,{variant:"warning",title:"Bones pràctiques",children:e.jsxs("ul",{children:[e.jsxs("li",{children:["Cada funció ha de fer ",e.jsx("strong",{children:"una sola cosa"})," i fer-la bé."]}),e.jsxs("li",{children:["Dona noms ",e.jsx("strong",{children:"descriptius"})," a les funcions (verbs: calcular, obtenir, mostrar...)."]}),e.jsxs("li",{children:["El ",e.jsx("code",{children:"main"})," ha de ser ",e.jsx("strong",{children:"curt i clar"}),": coordina, no calcula."]}),e.jsx("li",{children:"Reutilitza funcions en lloc de copiar codi."})]})}),e.jsx(f,{variant:"success",title:"Exemple 3: Joc d'endevinar",children:e.jsx("p",{children:"Un exemple més complet que combina funcions sense paràmetres, amb paràmetres i recursivitat per crear un petit joc interactiu."})}),e.jsx(g,{code:sE,label:"Exemple 3: Combinant tots els tipus de funcions",showLineNumbers:!0})]})}const oE=`public class ResumComplet {
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
}`;function cE(){return e.jsxs("div",{children:[e.jsx(S,{title:"Resum Comparatiu"}),e.jsx(f,{variant:"info",title:"Vista general",children:e.jsx("p",{children:"Aquí tens un resum de tots els conceptes tractats en aquesta secció: arrays unidimensionals, arrays bidimensionals (matrius), funcions sense paràmetres, funcions amb paràmetres i funcions recursives."})}),e.jsxs(me,{children:[e.jsx(T,{title:"Arrays 1D",variant:"blue",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Emmagatzemen múltiples valors del mateix tipus"}),e.jsx("li",{children:"Mida fixa definida en la creació"}),e.jsx("li",{children:"Accés per índex (base 0)"}),e.jsx("li",{children:e.jsx("code",{children:"int[] nums = new int[5];"})}),e.jsxs("li",{children:["Recorregut amb ",e.jsx("code",{children:"for"})," o ",e.jsx("code",{children:"for-each"})]}),e.jsxs("li",{children:[e.jsx("code",{children:".length"})," per obtenir la mida"]})]})}),e.jsx(T,{title:"Arrays 2D (Matrius)",variant:"yellow",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Array d'arrays: files i columnes"}),e.jsxs("li",{children:["Accés amb doble índex: ",e.jsx("code",{children:"[fila][col]"})]}),e.jsx("li",{children:e.jsx("code",{children:"int[][] mat = new int[3][4];"})}),e.jsxs("li",{children:["Recorregut amb doble ",e.jsx("code",{children:"for"})]}),e.jsxs("li",{children:[e.jsx("code",{children:".length"})," = files, ",e.jsx("code",{children:"[0].length"})," = columnes"]}),e.jsx("li",{children:"Ús: taules de dades, taulers de joc"})]})}),e.jsx(T,{title:"Funcions sense Paràmetres",variant:"green",children:e.jsxs("ul",{children:[e.jsx("li",{children:"No reben cap dada d'entrada"}),e.jsxs("li",{children:["Poden retornar un valor o ser ",e.jsx("code",{children:"void"})]}),e.jsx("li",{children:e.jsx("code",{children:"static String saludar() {...}"})}),e.jsx("li",{children:"Ideals per accions autònomes"}),e.jsx("li",{children:"Exemples: mostrar menú, generar aleatori"}),e.jsxs("li",{children:["Es criden amb ",e.jsx("code",{children:"nomFunció()"})]})]})}),e.jsx(T,{title:"Funcions amb Paràmetres",variant:"pink",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Reben dades d'entrada (paràmetres)"}),e.jsx("li",{children:"Més flexibles i reutilitzables"}),e.jsx("li",{children:e.jsx("code",{children:"static int sumar(int a, int b) {...}"})}),e.jsx("li",{children:"Arguments han de coincidir en tipus i ordre"}),e.jsx("li",{children:"Poden rebre arrays i objectes"}),e.jsxs("li",{children:["Crida: ",e.jsx("code",{children:"sumar(5, 3)"})]})]})}),e.jsx(T,{title:"Funcions Recursives",variant:"gold",children:e.jsxs("ul",{children:[e.jsx("li",{children:"La funció es crida a si mateixa"}),e.jsxs("li",{children:["Necessiten un ",e.jsx("strong",{children:"cas base"})," obligatori"]}),e.jsxs("li",{children:["El ",e.jsx("strong",{children:"cas recursiu"})," ha de convergir"]}),e.jsx("li",{children:"Exemples: factorial, fibonacci, potència"}),e.jsxs("li",{children:["Perill: ",e.jsx("code",{children:"StackOverflowError"})," sense cas base"]}),e.jsx("li",{children:"Alternativa: versió iterativa"})]})})]}),e.jsx(f,{variant:"explanation",title:"Comparativa ràpida",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Arrays"})," són per ",e.jsx("em",{children:"emmagatzemar dades"}),", les"," ",e.jsx("strong",{children:"funcions"})," són per ",e.jsx("em",{children:"processar-les"}),"."]}),e.jsxs("li",{children:["Les funcions ",e.jsx("strong",{children:"sense paràmetres"})," són més simples però menys flexibles que les funcions ",e.jsx("strong",{children:"amb paràmetres"}),"."]}),e.jsxs("li",{children:["La ",e.jsx("strong",{children:"recursivitat"})," és elegant però pot ser menys eficient que un bucle iteratiu per a problemes grans."]}),e.jsxs("li",{children:["Combinar arrays amb funcions és la clau per escriure programes ",e.jsx("strong",{children:"modulars i nets"}),"."]})]})}),e.jsx(g,{code:oE,label:"Exemple integrador: tots els conceptes junts",showLineNumbers:!0})]})}function uE(){return e.jsxs("div",{children:[e.jsx(S,{title:"Introducció a la Programació Orientada a Objectes (POO)"}),e.jsx(f,{variant:"info",title:"Què és la POO?",children:e.jsxs("p",{children:["La ",e.jsx("strong",{children:"Programació Orientada a Objectes (POO)"})," és un paradigma de programació que organitza el codi al voltant d'",e.jsx("strong",{children:"objectes"})," en lloc de funcions i lògica seqüencial. Un objecte és una representació d'una entitat del món real que té",e.jsx("strong",{children:" propietats"})," (atributs) i ",e.jsx("strong",{children:"comportaments"})," (mètodes)."]})}),e.jsx(S,{title:"Programació Procedural vs POO"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Fins ara hem programat de forma ",e.jsx("strong",{children:"procedural"}),": un conjunt d'instruccions que s'executen de dalt a baix, una darrere l'altra. Funciona per a programes petits, però a mesura que el programa creix, es torna difícil de mantenir i organitzar."]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Programació Procedural",variant:"bad",children:[e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[e.jsx("li",{children:"Codi seqüencial, de dalt a baix"}),e.jsx("li",{children:"Dades i funcions separades"}),e.jsx("li",{children:"Difícil de reutilitzar"}),e.jsx("li",{children:"Difícil de mantenir en projectes grans"}),e.jsx("li",{children:"Tot està barrejat en un sol fitxer"})]}),e.jsx(g,{code:`// Tot en un sol lloc
String nomCotxe = "Toyota";
int kmCotxe = 50000;
System.out.println(nomCotxe);
// ... 500 linies mes ...`})]}),e.jsxs(U,{title:"Programació Orientada a Objectes",variant:"good",children:[e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[e.jsx("li",{children:"Codi organitzat en objectes"}),e.jsx("li",{children:"Dades i comportaments junts"}),e.jsx("li",{children:"Fàcil de reutilitzar"}),e.jsx("li",{children:"Fàcil de mantenir i escalar"}),e.jsx("li",{children:"Cada classe té la seva responsabilitat"})]}),e.jsx(g,{code:`// Organitzat en objectes
Cotxe toyota = new Cotxe("Toyota", 50000);
toyota.mostrarInfo();
// Clar, net, reutilitzable`})]})]}),e.jsx(S,{title:"Analogia: L'Edifici de La Salle"}),e.jsxs(f,{variant:"info",children:[e.jsxs("p",{children:["Imagina l'edifici de ",e.jsx("strong",{children:"La Salle"}),". L'edifici no és només un bloc de formigó; està organitzat en ",e.jsx("strong",{children:"plantes"}),", cada planta té ",e.jsx("strong",{children:"aules"}),", cada aula té",e.jsx("strong",{children:" cadires, taules, una pissarra"}),"... Cada element té les seves propietats i funcions."]}),e.jsxs("p",{style:{marginTop:"10px"},children:["En POO fem el mateix: en lloc de tenir tot el codi en un sol lloc, l'organitzem en",e.jsx("strong",{children:" classes"})," (els plànols) i creem ",e.jsx("strong",{children:"objectes"})," (les instàncies reals)."]})]}),e.jsx(g,{label:"L'edifici com a objectes",code:`// La classe es el planol
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
aulaJava.impartirClasse();`}),e.jsx(S,{title:"Els 4 Pilars de la POO"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["La POO es fonamenta en ",e.jsx("strong",{children:"4 pilars"})," fonamentals que fan que el codi sigui organitzat, segur, reutilitzable i flexible."]})}),e.jsxs(me,{children:[e.jsxs(T,{title:"Encapsulació",variant:"blue",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Amagar les dades internes"})," d'un objecte i controlar-ne l'accés mitjançant mètodes públics (getters i setters)."]}),e.jsx("p",{style:{marginTop:"8px"},children:"Com una càpsula de medicament: no veus el contingut, però funciona."}),e.jsx(g,{code:`private String nom;
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
// Nomes cal saber QUE fa`})]})]}),e.jsx(f,{variant:"success",title:"Resum",children:e.jsx("p",{children:"La POO ens permet organitzar el codi de manera que reflecteixi el món real. Cada objecte té les seves dades i els seus comportaments, i els 4 pilars (encapsulació, herència, polimorfisme i abstracció) ens ajuden a crear codi net, segur, reutilitzable i fàcil de mantenir."})})]})}function dE(){return e.jsxs("div",{children:[e.jsx(S,{title:"Classe vs Objecte"}),e.jsx(f,{variant:"info",title:"Concepte fonamental",children:e.jsxs("p",{children:["La diferència entre ",e.jsx("strong",{children:"classe"})," i ",e.jsx("strong",{children:"objecte"})," és un dels conceptes més importants de la POO. Entendre-la bé és clau per dominar la programació orientada a objectes."]})}),e.jsx(S,{title:"Analogia: El Plànol i la Casa"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Imagina que vols construir una casa. Primer necessites un ",e.jsx("strong",{children:"plànol"})," (la classe) que descrigui com serà la casa: quantes habitacions tindrà, de quin color serà, quina superfície tindrà... Després, a partir d'aquest plànol, pots construir",e.jsx("strong",{children:" una o moltes cases"})," (els objectes). Cada casa pot tenir colors diferents, però totes segueixen el mateix plànol."]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"Classe (El Plànol)",variant:"blue",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[e.jsxs("li",{children:["És la ",e.jsx("strong",{children:"plantilla"})," o definició"]}),e.jsx("li",{children:"Descriu quins atributs i mètodes tindran els objectes"}),e.jsx("li",{children:"No ocupa espai en memòria (fins que es crea un objecte)"}),e.jsx("li",{children:"Es defineix un cop"}),e.jsxs("li",{children:["Utilitza la paraula clau ",e.jsx("code",{children:"class"})]})]})}),e.jsx(U,{title:"Objecte (La Casa)",variant:"good",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[e.jsxs("li",{children:["És una ",e.jsx("strong",{children:"instància"})," concreta de la classe"]}),e.jsx("li",{children:"Té valors reals per a cada atribut"}),e.jsx("li",{children:"Ocupa espai en memòria"}),e.jsx("li",{children:"Se'n poden crear tants com es vulgui"}),e.jsxs("li",{children:["Es crea amb la paraula clau ",e.jsx("code",{children:"new"})]})]})})]}),e.jsx(S,{title:"Exemple: La Classe Cotxe"}),e.jsx(f,{variant:"info",children:e.jsxs("p",{children:["Vegem un exemple concret amb una classe ",e.jsx("code",{children:"Cotxe"}),". La classe defineix que tot cotxe té una marca, un model, un color i quilòmetres. Després podem crear tants cotxes com vulguem."]})}),e.jsx(g,{label:"Definició de la classe Cotxe (el plànol)",showLineNumbers:!0,code:`public class Cotxe {
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
}`}),e.jsx(S,{title:"Creació d'Objectes (Instanciació)"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["A partir de la classe ",e.jsx("code",{children:"Cotxe"}),", podem crear múltiples objectes. Cada objecte és independent i té els seus propis valors. Crear un objecte s'anomena ",e.jsx("strong",{children:"instanciar"}),"."]})}),e.jsx(g,{label:"Crear objectes a partir de la classe",showLineNumbers:!0,code:`public class Main {
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
}`}),e.jsx(S,{title:"Resum Visual"}),e.jsxs(me,{children:[e.jsxs(T,{title:"Classe",variant:"blue",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Què és?"})," La plantilla / plànol"]}),e.jsxs("p",{style:{marginTop:"6px"},children:[e.jsx("strong",{children:"Paraula clau:"})," ",e.jsx("code",{children:"class"})]}),e.jsx("p",{style:{marginTop:"6px"},children:e.jsx("strong",{children:"Exemple:"})}),e.jsx(g,{code:"class Cotxe { ... }"})]}),e.jsxs(T,{title:"Objecte",variant:"yellow",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Què és?"})," Una instància real de la classe"]}),e.jsxs("p",{style:{marginTop:"6px"},children:[e.jsx("strong",{children:"Paraula clau:"})," ",e.jsx("code",{children:"new"})]}),e.jsx("p",{style:{marginTop:"6px"},children:e.jsx("strong",{children:"Exemple:"})}),e.jsx(g,{code:"Cotxe c = new Cotxe();"})]}),e.jsxs(T,{title:"Atributs",variant:"green",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Què són?"})," Les propietats de l'objecte"]}),e.jsxs("p",{style:{marginTop:"6px"},children:[e.jsx("strong",{children:"Exemples:"})," marca, color, km"]}),e.jsx("p",{style:{marginTop:"6px"},children:e.jsx("strong",{children:"Accés:"})}),e.jsx(g,{code:'cotxe1.marca = "Toyota";'})]}),e.jsxs(T,{title:"Mètodes",variant:"pink",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Què són?"})," Les accions que pot fer l'objecte"]}),e.jsxs("p",{style:{marginTop:"6px"},children:[e.jsx("strong",{children:"Exemples:"})," mostrarInfo(), conduir()"]}),e.jsx("p",{style:{marginTop:"6px"},children:e.jsx("strong",{children:"Crida:"})}),e.jsx(g,{code:"cotxe1.mostrarInfo();"})]})]}),e.jsx(f,{variant:"warning",title:"Recorda",children:e.jsxs("p",{children:["Una classe per si sola ",e.jsx("strong",{children:"no fa res"}),". És com tenir un plànol sense construir la casa. Has de crear objectes (",e.jsx("code",{children:"new"}),") per poder treballar amb les dades i cridar els mètodes."]})})]})}function pE(){return e.jsxs("div",{children:[e.jsx(S,{title:"Modificadors d'Accés i Encapsulació"}),e.jsx(f,{variant:"info",title:"Què són els modificadors d'accés?",children:e.jsxs("p",{children:["Els ",e.jsx("strong",{children:"modificadors d'accés"})," són paraules clau que controlen la ",e.jsx("strong",{children:"visibilitat"})," dels atributs i mètodes d'una classe. Determinen qui pot accedir a cada part del codi. Són fonamentals per aplicar l'",e.jsx("strong",{children:"encapsulació"}),", un dels 4 pilars de la POO."]})}),e.jsx(S,{title:"Tipus de Modificadors"}),e.jsx(J,{headers:["Modificador","Mateixa Classe","Mateix Paquet","Subclasse","Tothom"],rows:[{cells:["public","Sí","Sí","Sí","Sí"]},{cells:["protected","Sí","Sí","Sí","No"]},{cells:["(sense modificador)","Sí","Sí","No","No"]},{cells:["private","Sí","No","No","No"]}]}),e.jsxs(me,{children:[e.jsxs(T,{title:"public",variant:"green",children:[e.jsxs("p",{children:["Accessible des de ",e.jsx("strong",{children:"qualsevol lloc"})," del programa."]}),e.jsx(g,{code:`public String nom;
public void saludar() { ... }`})]}),e.jsxs(T,{title:"private",variant:"pink",children:[e.jsxs("p",{children:["Només accessible dins de la ",e.jsx("strong",{children:"mateixa classe"}),"."]}),e.jsx(g,{code:`private int edat;
private void calcular() { ... }`})]}),e.jsxs(T,{title:"protected",variant:"yellow",children:[e.jsxs("p",{children:["Accessible dins del ",e.jsx("strong",{children:"mateix paquet"})," i per ",e.jsx("strong",{children:"subclasses"}),"."]}),e.jsx(g,{code:`protected double salari;
protected void processar() { ... }`})]}),e.jsxs(T,{title:"(default)",variant:"blue",children:[e.jsxs("p",{children:["Sense paraula clau. Accessible dins del ",e.jsx("strong",{children:"mateix paquet"}),"."]}),e.jsx(g,{code:`String ciutat;
void mostrar() { ... }`})]})]}),e.jsx(S,{title:"Encapsulació: Per què private?"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["L'",e.jsx("strong",{children:"encapsulació"})," consisteix a declarar els atributs com a ",e.jsx("code",{children:"private"})," i proporcionar mètodes ",e.jsx("code",{children:"public"})," (getters i setters) per accedir-hi de forma controlada. Així protegim les dades internes de l'objecte i evitem que es modifiquin de forma incorrecta."]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"MALAMENT: Sense encapsulació",variant:"bad",children:[e.jsx("p",{children:"Atributs públics: qualsevol pot modificar-los sense control."}),e.jsx(g,{showLineNumbers:!0,code:`public class Persona {
    public String nom;
    public int edat; // Qualsevol pot posar -5!
}

// Des d'un altre lloc:
Persona p = new Persona();
p.edat = -50; // Error logic! No hi ha control
p.nom = "";   // Nom buit acceptat!`}),e.jsx(f,{variant:"error",children:e.jsx("p",{children:"No hi ha cap validació. Es poden assignar valors incorrectes."})})]}),e.jsxs(U,{title:"BÉ: Amb encapsulació",variant:"good",children:[e.jsx("p",{children:"Atributs privats amb getters/setters que validen les dades."}),e.jsx(g,{showLineNumbers:!0,code:`public class Persona {
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
}`}),e.jsx(f,{variant:"success",children:e.jsx("p",{children:"Les dades estan protegides i validades."})})]})]}),e.jsx(S,{title:"Getters i Setters"}),e.jsx(f,{variant:"info",children:e.jsxs("p",{children:["Els ",e.jsx("strong",{children:"getters"})," són mètodes que retornen el valor d'un atribut privat. Els ",e.jsx("strong",{children:"setters"})," són mètodes que permeten modificar el valor d'un atribut privat, habitualment amb validació."]})}),e.jsx(g,{label:"Exemple complet amb getters i setters",showLineNumbers:!0,code:`public class Alumne {
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
}`}),e.jsx(f,{variant:"success",title:"Convenció de noms",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Getter:"})," ",e.jsx("code",{children:"getAtribut()"})," - retorna el valor (per booleans: ",e.jsx("code",{children:"isAtribut()"}),")"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Setter:"})," ",e.jsx("code",{children:"setAtribut(valor)"})," - modifica el valor"]}),e.jsxs("li",{children:["Sempre comencen amb ",e.jsx("code",{children:"get"})," o ",e.jsx("code",{children:"set"})," seguit del nom de l'atribut amb la primera lletra en majúscula"]})]})})]})}function ms({code:t,language:r="java",label:a,defaultOpen:n=!1}){const[i,s]=A.useState(n);return e.jsxs("div",{style:{margin:"16px 0"},children:[e.jsx(it,{size:"small",variant:"secondary",onClick:()=>s(!i),children:i?"Amagar Codi":"Veure Codi"}),i&&e.jsx(g,{code:t,language:r,label:a})]})}function mE(){return e.jsxs("div",{children:[e.jsx(S,{title:"Constructors i la Paraula Clau this"}),e.jsx(f,{variant:"info",title:"Què és un constructor?",children:e.jsxs("p",{children:["Un ",e.jsx("strong",{children:"constructor"})," és un mètode especial que s'executa automàticament quan es crea un objecte amb ",e.jsx("code",{children:"new"}),". Serveix per ",e.jsx("strong",{children:"inicialitzar"})," els atributs de l'objecte amb valors inicials. El constructor té el ",e.jsx("strong",{children:"mateix nom que la classe"})," i ",e.jsx("strong",{children:"no té tipus de retorn"})," (ni tan sols ",e.jsx("code",{children:"void"}),")."]})}),e.jsx(S,{title:"Sintaxi del Constructor"}),e.jsx(g,{label:"Estructura bàsica d'un constructor",showLineNumbers:!0,code:`public class NomClasse {
    // Atributs
    private String atribut1;
    private int atribut2;

    // Constructor (mateix nom que la classe, sense tipus de retorn)
    public NomClasse(String atribut1, int atribut2) {
        this.atribut1 = atribut1;
        this.atribut2 = atribut2;
    }
}`}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Fixa't que el constructor ",e.jsx("strong",{children:"no té"})," ",e.jsx("code",{children:"void"})," ni cap altre tipus de retorn. Si hi poses ",e.jsx("code",{children:"void"}),", Java ho tractarà com un mètode normal, no com un constructor!"]})}),e.jsx(S,{title:"La Paraula Clau this"}),e.jsx(f,{variant:"info",children:e.jsxs("p",{children:["La paraula clau ",e.jsx("code",{children:"this"})," fa referència a l'",e.jsx("strong",{children:"objecte actual"}),". S'utilitza principalment quan el nom del paràmetre del constructor (o mètode) coincideix amb el nom de l'atribut de la classe."]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Sense this (problema)",variant:"bad",children:[e.jsx(g,{code:`public Cotxe(String marca) {
    marca = marca; // ERROR!
    // Assigna el parametre a si mateix
    // L'atribut NO es modifica
}`}),e.jsx(f,{variant:"error",children:e.jsx("p",{children:"Java no sap distingir entre l'atribut i el paràmetre. L'atribut queda sense valor."})})]}),e.jsxs(U,{title:"Amb this (correcte)",variant:"good",children:[e.jsx(g,{code:`public Cotxe(String marca) {
    this.marca = marca; // CORRECTE!
    // this.marca = atribut de la classe
    // marca = parametre del constructor
}`}),e.jsx(f,{variant:"success",children:e.jsxs("p",{children:[e.jsx("code",{children:"this.marca"})," es refereix a l'atribut de l'objecte. ",e.jsx("code",{children:"marca"})," és el paràmetre."]})})]})]}),e.jsx(S,{title:"Exemple Complet"}),e.jsx(g,{label:"Classe Cotxe amb constructor",showLineNumbers:!0,code:`public class Cotxe {
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
}`}),e.jsx(S,{title:"Sobrecàrrega de Constructors"}),e.jsx(f,{variant:"info",title:"Què és la sobrecàrrega?",children:e.jsxs("p",{children:["Una classe pot tenir ",e.jsx("strong",{children:"múltiples constructors"})," amb diferent nombre o tipus de paràmetres. Això s'anomena ",e.jsx("strong",{children:"sobrecàrrega de constructors"})," (constructor overloading). Java selecciona automàticament el constructor adequat segons els arguments que li passem."]})}),e.jsx(g,{label:"Sobrecàrrega de constructors",showLineNumbers:!0,code:`public class Cotxe {
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
Cotxe c3 = new Cotxe();                             // Constructor 3`}),e.jsx(S,{title:"Errors Comuns"}),e.jsxs(me,{children:[e.jsxs(T,{title:"Posar void al constructor",variant:"pink",children:[e.jsxs("p",{children:["Si afegeixes ",e.jsx("code",{children:"void"}),", Java ho tracta com un mètode normal, no com un constructor."]}),e.jsx(g,{code:`// MALAMENT:
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
}`}),e.jsx(f,{variant:"success",title:"Resum",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["El constructor inicialitza l'objecte quan es crea amb ",e.jsx("code",{children:"new"})]}),e.jsx("li",{children:"Té el mateix nom que la classe i no té tipus de retorn"}),e.jsxs("li",{children:[e.jsx("code",{children:"this"})," es refereix a l'objecte actual i diferencia atributs de paràmetres"]}),e.jsx("li",{children:"La sobrecàrrega permet múltiples constructors amb paràmetres diferents"})]})})]})}const hE=`// Classe PARE (superclasse)
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
// Constructor de Gos: Pastor Alemany`,vE=`public class Animal {
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
// Raca: Pastor Alemany`,jE=`public class Animal {
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
}`;function EE(){return e.jsxs("div",{children:[e.jsx(S,{title:"Herència en Java"}),e.jsx(f,{variant:"info",title:"Què és l'herència?",children:e.jsxs("p",{children:["L'",e.jsx("strong",{children:"herència"})," és un dels pilars fonamentals de la Programació Orientada a Objectes. Permet que una classe ",e.jsx("strong",{children:"filla"})," (subclasse) hereti els atributs i mètodes d'una classe ",e.jsx("strong",{children:"pare"})," (superclasse). D'aquesta manera, podem ",e.jsx("strong",{children:"reutilitzar codi"})," i crear jerarquies de classes organitzades."]})}),e.jsxs(f,{variant:"explanation",title:"Analogia del món real",children:[e.jsxs("p",{children:["Pensa en els animals. Tots els animals comparteixen comportaments comuns:",e.jsx("strong",{children:" menjar"}),", ",e.jsx("strong",{children:"dormir"}),", ",e.jsx("strong",{children:"moure's"}),"... Però cada tipus d'animal té comportaments propis: un gos pot ",e.jsx("strong",{children:"bordar"}),", un gat pot ",e.jsx("strong",{children:"miolar"}),", un ocell pot ",e.jsx("strong",{children:"volar"}),"."]}),e.jsxs("p",{style:{marginTop:"8px"},children:['En lloc de repetir "menjar" i "dormir" a cada classe (Gos, Gat, Ocell...), definim aquests comportaments comuns a la classe ',e.jsx("strong",{children:"Animal"})," i fem que cada animal en concret els ",e.jsx("strong",{children:"hereti"}),"."]})]}),e.jsx(S,{title:"Terminologia"}),e.jsx(J,{headers:["Terme","Altres noms","Descripció"],rows:[{cells:["Classe pare","Superclasse, classe base","La classe de la qual s'hereten atributs i mètodes"]},{cells:["Classe filla","Subclasse, classe derivada","La classe que hereta d'una altra i pot afegir funcionalitat pròpia"]},{cells:["extends","Paraula clau","S'utilitza per indicar que una classe hereta d'una altra"]},{cells:["super","Paraula clau","Permet accedir al constructor o mètodes de la classe pare"]},{cells:["@Override","Anotació","Indica que un mètode sobreescriu un mètode del pare"]}]}),e.jsx(S,{title:"Sintaxi Bàsica i Exemple"}),e.jsxs(f,{variant:"info",children:[e.jsxs("p",{children:["Per indicar que una classe hereta d'una altra, s'utilitza la paraula clau ",e.jsx("code",{children:"extends"}),":"]}),e.jsx("p",{style:{marginTop:"8px"},children:e.jsxs("code",{children:["public class Filla ",e.jsx("strong",{children:"extends"})," Pare ","{ ... }"]})})]}),e.jsx(g,{label:"Classe pare: Animal",code:hE,showLineNumbers:!0}),e.jsx(g,{label:"Classes filles: Gos i Gat",code:fE,showLineNumbers:!0}),e.jsx(g,{label:"Utilitzar l'herència",code:xE,showLineNumbers:!0}),e.jsx(f,{variant:"success",title:"Què ha passat?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"Gos"})," i ",e.jsx("code",{children:"Gat"})," hereten ",e.jsx("code",{children:"menjar()"}),", ",e.jsx("code",{children:"dormir()"})," i ",e.jsx("code",{children:"mostrarInfo()"})," d'Animal ",e.jsx("strong",{children:"sense haver de reescriure el codi"}),"."]}),e.jsxs("li",{children:["Cada subclasse pot tenir ",e.jsx("strong",{children:"mètodes propis"})," (",e.jsx("code",{children:"bordar()"}),", ",e.jsx("code",{children:"miolar()"}),") que no existeixen al pare."]}),e.jsxs("li",{children:["Un ",e.jsx("code",{children:"Gos"})," no pot usar ",e.jsx("code",{children:"miolar()"})," perquè és exclusiu de ",e.jsx("code",{children:"Gat"}),"."]})]})}),e.jsx(S,{title:"La Paraula Clau super"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["La paraula clau ",e.jsx("code",{children:"super"})," serveix per accedir als membres de la classe ",e.jsx("strong",{children:"pare"})," des de la classe filla. Té dos usos principals:"]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"super() - Cridar al constructor del pare",variant:"blue",children:[e.jsxs("p",{style:{marginBottom:"10px"},children:["S'utilitza dins del constructor de la classe filla per cridar al constructor de la classe pare. ",e.jsx("strong",{children:"Ha de ser la primera instrucció"})," del constructor."]}),e.jsx(g,{code:`public Gos(String nom, String raca) {
    super(nom);  // Crida Animal(String nom)
    this.raca = raca;
}`})]}),e.jsxs(U,{title:"super.mètode() - Cridar un mètode del pare",variant:"good",children:[e.jsxs("p",{style:{marginBottom:"10px"},children:["S'utilitza per cridar un mètode de la classe pare, especialment quan la classe filla l'ha ",e.jsx("strong",{children:"sobreescrit"})," (override)."]}),e.jsx(g,{code:`@Override
public void mostrarInfo() {
    super.mostrarInfo(); // Crida el del pare
    System.out.println("Raca: " + raca);
}`})]})]}),e.jsx(g,{label:"Exemple de super() en constructors",code:gE,showLineNumbers:!0}),e.jsx(g,{label:"Exemple de super.mètode()",code:vE,showLineNumbers:!0}),e.jsx(f,{variant:"warning",title:"Regles de super()",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"super()"})," ha de ser la ",e.jsx("strong",{children:"primera instrucció"})," del constructor de la classe filla."]}),e.jsxs("li",{children:["Si el pare no té un constructor sense paràmetres, la classe filla ",e.jsx("strong",{children:"ha de cridar"})," ",e.jsx("code",{children:"super(...)"})," amb els arguments corresponents."]}),e.jsxs("li",{children:["Si no escrius ",e.jsx("code",{children:"super()"}),", Java l'afegeix automàticament (només si el pare té constructor sense paràmetres)."]})]})}),e.jsx(S,{title:"Sobreescriptura de Mètodes (@Override)"}),e.jsx(f,{variant:"info",title:"Què és la sobreescriptura?",children:e.jsxs("p",{children:["La ",e.jsx("strong",{children:"sobreescriptura"})," (override) permet que una classe filla",e.jsx("strong",{children:" redefineixi"})," un mètode que ha heretat del pare. La classe filla proporciona la seva pròpia implementació del mètode, substituint la del pare. L'anotació ",e.jsx("code",{children:"@Override"})," no és obligatòria, però és molt",e.jsx("strong",{children:" recomanable"})," perquè ajuda a detectar errors."]})}),e.jsx(g,{label:"Exemple de sobreescriptura: ferSoroll()",code:jE,showLineNumbers:!0}),e.jsx(f,{variant:"explanation",title:"Per què @Override és important?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Si escrius ",e.jsx("code",{children:"@Override"})," i el mètode NO existeix al pare, Java et donarà un ",e.jsx("strong",{children:"error de compilació"}),". Això evita errors per noms mal escrits."]}),e.jsxs("li",{children:["Fa el codi més ",e.jsx("strong",{children:"llegible"}),": queda clar que el mètode ve del pare."]}),e.jsxs("li",{children:["El mètode sobreescrit ha de tenir la ",e.jsx("strong",{children:"mateixa signatura"})," (nom, paràmetres i tipus de retorn) que el del pare."]})]})}),e.jsx(S,{title:"El Modificador d'Accés protected"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Quan treballem amb herència, el modificador d'accés ",e.jsx("code",{children:"protected"})," és molt útil. Permet que els atributs i mètodes siguin accessibles des de la",e.jsx("strong",{children:" mateixa classe"}),", les ",e.jsx("strong",{children:"subclasses"})," i les classes del",e.jsx("strong",{children:" mateix paquet"}),", però no des de classes externes."]})}),e.jsx(J,{headers:["Modificador","Mateixa classe","Subclasse","Mateix paquet","Altres classes"],rows:[{cells:["private","Sí","No","No","No"]},{cells:["protected","Sí","Sí","Sí","No"]},{cells:["public","Sí","Sí","Sí","Sí"]}]}),e.jsx(g,{label:"Exemple d'accés protected en herència",code:bE,showLineNumbers:!0}),e.jsx(f,{variant:"info",title:"Quan usar protected?",children:e.jsxs("p",{children:["Usa ",e.jsx("code",{children:"protected"})," per als atributs que vols que les classes filles puguin accedir ",e.jsx("strong",{children:"directament"}),", sense necessitat de getters. Si vols més control i encapsulació, utilitza ",e.jsx("code",{children:"private"})," amb getters/setters ",e.jsx("code",{children:"public"})," o ",e.jsx("code",{children:"protected"}),"."]})}),e.jsx(S,{title:"Exemple Complet: Vehicle, Cotxe i Moto"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Vegem un exemple complet que combina tot el que hem après: herència,",e.jsx("code",{children:" super"}),", ",e.jsx("code",{children:"@Override"}),", atributs ",e.jsx("code",{children:"protected"}),", mètodes propis i mètodes heretats."]})}),e.jsx(g,{label:"Jerarquia completa: Vehicle → Cotxe, Moto",code:yE,showLineNumbers:!0}),e.jsx(g,{label:"Utilitzar la jerarquia de vehicles",code:SE,showLineNumbers:!0}),e.jsx(S,{title:"Regles Importants de l'Herència en Java"}),e.jsx(f,{variant:"warning",title:"Regles clau que has de recordar",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Herència simple:"})," Java només permet heretar d'UNA sola classe. No es pot fer ",e.jsx("code",{children:"class A extends B, C"}),". (Les ",e.jsx("em",{children:"interfaces"})," permeten una alternativa, però és un tema més avançat.)"]}),e.jsxs("li",{style:{marginTop:"8px"},children:[e.jsx("strong",{children:"Totes les classes hereten d'Object:"})," Si una classe no té",e.jsx("code",{children:" extends"}),", Java automàticament fa que hereti de la classe ",e.jsx("code",{children:"Object"}),". Per això totes les classes tenen mètodes com ",e.jsx("code",{children:"toString()"}),",",e.jsx("code",{children:" equals()"}),", etc."]}),e.jsxs("li",{style:{marginTop:"8px"},children:[e.jsx("strong",{children:"Classes final:"})," Si una classe es declara ",e.jsx("code",{children:"final"}),",",e.jsx("strong",{children:" no pot ser heretada"}),". Per exemple, ",e.jsxs("code",{children:["final class Utilitats ","{ ... }"]})," no es pot estendre."]})]})}),e.jsxs(me,{children:[e.jsx(T,{title:"Herència Simple",variant:"blue",children:e.jsx(g,{code:`// CORRECTE: una sola classe pare
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
// No es pot estendre una classe final`})})]}),e.jsx(f,{variant:"success",title:"Resum",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["L'herència permet que una classe filla hereti atributs i mètodes d'una classe pare amb ",e.jsx("code",{children:"extends"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"super()"})," crida al constructor del pare; ",e.jsx("code",{children:"super.mètode()"})," crida un mètode del pare."]}),e.jsxs("li",{children:[e.jsx("code",{children:"@Override"})," indica que la classe filla redefineix un mètode del pare."]}),e.jsxs("li",{children:[e.jsx("code",{children:"protected"})," fa que els atributs siguin accessibles des de les subclasses."]}),e.jsxs("li",{children:["Java només permet ",e.jsx("strong",{children:"herència simple"})," (un sol pare)."]}),e.jsxs("li",{children:["Totes les classes hereten implícitament de ",e.jsx("code",{children:"Object"}),"."]}),e.jsxs("li",{children:["Les classes ",e.jsx("code",{children:"final"})," no poden ser heretades."]})]})})]})}const CE=`public class Main {
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
}`,NE=`Animal rex = new Gos("Rex");

// rex.bordar();  // ERROR! El tipus estatic es Animal, no te bordar()

// Primer comprovem que realment es un Gos
if (rex instanceof Gos) {
    Gos gosRex = (Gos) rex;   // DOWNCASTING: Animal -> Gos
    gosRex.bordar();           // Ara si! Rex fa: Bup bup!
}

// PERILL: si fem casting sense comprovar...
// Gat gatFals = (Gat) rex;   // ClassCastException! rex NO es un Gat`,kE=`// ============ CLASSES ============
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
}`,PE=`// ============ VETERINARI ============
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
}`,_E=`=== JORNADA DE REVISIONS ===

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

Total animals revisats: 4`,qE=`public class Calculadora {

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
a.ferSoroll();  // "Bup bup!" (no "Soroll generic")`;function IE(){return e.jsxs("div",{children:[e.jsx(S,{title:"Polimorfisme en Java"}),e.jsx(f,{variant:"info",title:"Què és el polimorfisme?",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Polimorfisme"})," ve del grec: ",e.jsx("em",{children:"poli"})," (molts) + ",e.jsx("em",{children:"morphe"})," (forma). Significa que ",e.jsx("strong",{children:"un mateix mètode pot comportar-se de manera diferent"})," segons l'objecte que l'executa. És el tercer pilar de la POO, juntament amb l'encapsulació i l'herència."]})}),e.jsxs(f,{variant:"explanation",title:"Analogia del món real",children:[e.jsxs("p",{children:["Pensa en el botó ",e.jsx("strong",{children:'"Play"'})," del mòbil. El mateix botó fa coses diferents segons el context: a Spotify reprodueix música, a YouTube reprodueix un vídeo, a un podcast reprodueix àudio. El botó és el ",e.jsx("strong",{children:"mateix"})," (mateixa interfície), però el ",e.jsx("strong",{children:"comportament canvia"})," segons l'aplicació (l'objecte real)."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["En Java passa igual: pots cridar ",e.jsx("code",{children:"ferSoroll()"})," sobre qualsevol ",e.jsx("code",{children:"Animal"}),", i cada animal farà el ",e.jsx("strong",{children:"seu propi soroll"}),"."]})]}),e.jsx(S,{title:"El Problema sense Polimorfisme"}),e.jsx(f,{variant:"warning",title:"Sense polimorfisme: codi repetitiu i rígid",children:e.jsxs("p",{children:["Imagina que tenim les classes ",e.jsx("code",{children:"Gos"}),", ",e.jsx("code",{children:"Gat"})," i ",e.jsx("code",{children:"Ocell"})," que ja coneixem de l'herència. Sense polimorfisme, cada vegada que volem fer una acció amb diferents tipus d'animals, necessitem un mètode específic per a ",e.jsx("strong",{children:"cada tipus"}),":"]})}),e.jsx(g,{label:"Sense polimorfisme: un mètode per cada tipus",code:CE,showLineNumbers:!0}),e.jsx(f,{variant:"error",title:"Problemes d'aquest enfocament",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Si afegim un nou animal (Serp, Peix...), hem d'afegir un ",e.jsx("strong",{children:"nou mètode"})," cada vegada."]}),e.jsxs("li",{children:["Si tenim 20 tipus d'animals, necessitem ",e.jsx("strong",{children:"20 mètodes"})," gairebé iguals."]}),e.jsxs("li",{children:["El codi és ",e.jsx("strong",{children:"repetitiu, fràgil i difícil de mantenir"}),"."]})]})}),e.jsx(S,{title:"La Solució: Polimorfisme"}),e.jsx(f,{variant:"info",children:e.jsxs("p",{children:["Recordem les classes d'herència. Cada animal sobreescriu (",e.jsx("code",{children:"@Override"}),") el mètode ",e.jsx("code",{children:"ferSoroll()"}),":"]})}),e.jsx(g,{label:"Classes amb herència i @Override (ja les coneixem!)",code:AE,showLineNumbers:!0}),e.jsx(f,{variant:"success",title:"Ara ve la màgia del polimorfisme",children:e.jsxs("p",{children:["La clau: podem guardar un objecte ",e.jsx("code",{children:"Gos"})," dins d'una variable de tipus ",e.jsx("code",{children:"Animal"}),". Quan cridem ",e.jsx("code",{children:"ferSoroll()"}),", Java executarà el mètode del ",e.jsx("strong",{children:"Gos"}),", no el de l'Animal genèric."]})}),e.jsx(g,{label:"Amb polimorfisme: UN mètode per a TOTS",code:wE,showLineNumbers:!0}),e.jsx(f,{variant:"success",title:"Què ha canviat?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Un sol mètode"})," ",e.jsx("code",{children:"ferSoroll(Animal a)"})," serveix per a TOTS els animals."]}),e.jsxs("li",{children:["Si afegim un nou animal (",e.jsx("code",{children:"Serp"}),"), ",e.jsx("strong",{children:"no cal tocar"})," el mètode."]}),e.jsxs("li",{children:["Java decideix ",e.jsx("strong",{children:"automàticament"})," quin ",e.jsx("code",{children:"ferSoroll()"})," cridar segons l'objecte real."]})]})}),e.jsx(S,{title:"Tipus Estàtic vs Tipus Dinàmic"}),e.jsx(f,{variant:"explanation",title:"El concepte més important del polimorfisme",children:e.jsxs("p",{children:["Quan escrivim ",e.jsx("code",{children:'Animal rex = new Gos("Rex")'}),", la variable té",e.jsx("strong",{children:" dos tipus alhora"}),":"]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Tipus Estàtic (la variable)",variant:"blue",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Animal"}),' rex = new Gos("Rex");']}),e.jsxs("p",{style:{marginTop:"8px"},children:["El tipus que veu el ",e.jsx("strong",{children:"compilador"}),". Determina quins mètodes pots ",e.jsx("strong",{children:"cridar"})," (només els d'Animal)."]}),e.jsx("p",{style:{marginTop:"8px",fontStyle:"italic"},children:'"Què puc fer amb aquesta variable?"'})]}),e.jsxs(U,{title:"Tipus Dinàmic (l'objecte real)",variant:"good",children:[e.jsxs("p",{children:["Animal rex = new ",e.jsx("strong",{children:"Gos"}),'("Rex");']}),e.jsxs("p",{style:{marginTop:"8px"},children:["El tipus real de l'objecte a ",e.jsx("strong",{children:"memòria"}),". Determina quina",e.jsx("strong",{children:" versió"})," del mètode s'executa."]}),e.jsx("p",{style:{marginTop:"8px",fontStyle:"italic"},children:'"Com es comporta realment?"'})]})]}),e.jsx(g,{label:"Tipus estàtic vs dinàmic en acció",code:LE,showLineNumbers:!0}),e.jsx(f,{variant:"warning",title:"Regla d'or",children:e.jsxs("p",{children:["El ",e.jsx("strong",{children:"compilador"})," (tipus estàtic) decideix si el codi és ",e.jsx("strong",{children:"legal"}),".",e.jsx("br",{}),"La ",e.jsx("strong",{children:"JVM en execució"})," (tipus dinàmic) decideix quin mètode ",e.jsx("strong",{children:"s'executa"}),"."]})}),e.jsx(S,{title:"Polimorfisme amb Col·leccions"}),e.jsx(f,{variant:"info",title:"On brilla el polimorfisme",children:e.jsxs("p",{children:["La potència real del polimorfisme apareix quan treballem amb ",e.jsx("strong",{children:"col·leccions"}),". Un array o ArrayList de tipus ",e.jsx("code",{children:"Animal"})," pot contenir Gossos, Gats, Ocells...",e.jsx("strong",{children:" tots barrejats!"})]})}),e.jsx(g,{label:"Array polimòrfic",code:RE,showLineNumbers:!0}),e.jsx(g,{label:"ArrayList polimòrfic",code:ME,showLineNumbers:!0}),e.jsx(f,{variant:"success",title:"Per què és tan potent?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["El ",e.jsx("strong",{children:"mateix bucle"})," funciona per a qualsevol animal, ara i en el futur."]}),e.jsxs("li",{children:["Si demà creem una classe ",e.jsx("code",{children:"Serp extends Animal"}),", el bucle ",e.jsx("strong",{children:"ja funciona"})," sense canvis."]}),e.jsxs("li",{children:["Això es diu ",e.jsx("strong",{children:"codi obert a l'extensió, tancat a la modificació"})," (principi Open/Closed)."]})]})}),e.jsx(S,{title:"instanceof i Casting"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["De vegades necessitem saber el ",e.jsx("strong",{children:"tipus real"})," d'un objecte per accedir a mètodes que ",e.jsx("strong",{children:"no existeixen a la classe pare"}),". Per això tenim",e.jsx("code",{children:" instanceof"})," i el ",e.jsx("strong",{children:"casting"}),"."]})}),e.jsx(g,{label:"instanceof: comprovar el tipus real",code:TE,showLineNumbers:!0}),e.jsx(g,{label:"Downcasting: convertir al tipus real",code:NE,showLineNumbers:!0}),e.jsx(J,{headers:["Concepte","Direcció","Exemple","Risc"],rows:[{cells:["Upcasting","Fill → Pare",'Animal a = new Gos("Rex")',"Cap (automàtic)"]},{cells:["Downcasting","Pare → Fill","Gos g = (Gos) animal","ClassCastException si el tipus no coincideix"]}]}),e.jsx(f,{variant:"warning",title:"Regla important",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Sempre"})," comprova amb ",e.jsx("code",{children:"instanceof"})," abans de fer downcasting. Si no ho fas i el tipus no coincideix, el programa llançarà una",e.jsx("code",{children:" ClassCastException"})," en temps d'execució."]})}),e.jsx(S,{title:"Sobrecàrrega vs Sobreescriptura"}),e.jsx(f,{variant:"info",children:e.jsxs("p",{children:["Aquests dos conceptes es confonen sovint perquè els noms es semblen. Però són coses ",e.jsx("strong",{children:"molt diferents"}),":"]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Sobrecàrrega (Overload)",variant:"blue",children:[e.jsxs("p",{style:{marginBottom:"8px"},children:[e.jsx("strong",{children:"Mateixa classe"}),", mateix nom, ",e.jsx("strong",{children:"diferents paràmetres"}),". Es resol en temps de ",e.jsx("strong",{children:"compilació"}),"."]}),e.jsx(g,{code:`// 3 metodes amb el MATEIX nom
int sumar(int a, int b)
double sumar(double a, double b)
int sumar(int a, int b, int c)`})]}),e.jsxs(U,{title:"Sobreescriptura (Override)",variant:"good",children:[e.jsxs("p",{style:{marginBottom:"8px"},children:[e.jsx("strong",{children:"Classe filla"}),", mateix nom, ",e.jsx("strong",{children:"mateixos paràmetres"}),". Es resol en temps d'",e.jsx("strong",{children:"execució"})," (polimorfisme!)."]}),e.jsx(g,{code:`// Pare i fill: MATEIX metode
class Animal { void ferSoroll() }
class Gos extends Animal {
    @Override void ferSoroll()
}`})]})]}),e.jsx(J,{headers:["","Sobrecàrrega (Overload)","Sobreescriptura (Override)"],rows:[{cells:["On?","Mateixa classe","Classe filla"]},{cells:["Nom del mètode","Igual","Igual"]},{cells:["Paràmetres","Diferents","Iguals"]},{cells:["Quan es decideix","Compilació","Execució"]},{cells:["Anotació","Cap","@Override"]},{cells:["Relació amb herència","No en necessita","Requereix herència"]}]}),e.jsx(g,{label:"Exemple de sobrecàrrega",code:qE,showLineNumbers:!0}),e.jsx(g,{label:"Exemple de sobreescriptura",code:OE,showLineNumbers:!0}),e.jsx(S,{title:"Exemple Complet: Clínica Veterinària"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Vegem un exemple complet que combina tot el que hem après: polimorfisme, col·leccions, ",e.jsx("code",{children:"instanceof"})," i downcasting. Una clínica veterinària que pot revisar ",e.jsx("strong",{children:"qualsevol tipus d'animal"})," sense saber per avançat quin tipus serà."]})}),e.jsx(g,{label:"Classes: Animal, Gos i Gat",code:kE,showLineNumbers:!0}),e.jsx(g,{label:"Veterinari i Main: polimorfisme en acció",code:PE,showLineNumbers:!0}),e.jsx(g,{label:"Sortida del programa",code:_E}),e.jsx(f,{variant:"success",title:"Per què funciona?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["El ",e.jsx("code",{children:"Veterinari"})," treballa amb ",e.jsx("code",{children:"Animal"}),", sense saber si és un Gos o un Gat."]}),e.jsxs("li",{children:[e.jsx("code",{children:"descripcio()"})," i ",e.jsx("code",{children:"ferSoroll()"})," es comporten diferent per a cada animal (",e.jsx("strong",{children:"polimorfisme"}),")."]}),e.jsxs("li",{children:["Quan necessitem un mètode específic (",e.jsx("code",{children:"buscarPilota"}),", ",e.jsx("code",{children:"ronronejar"}),"), usem ",e.jsx("code",{children:"instanceof"})," + ",e.jsx("strong",{children:"downcasting"}),"."]}),e.jsxs("li",{children:["Si demà afegim una classe ",e.jsx("code",{children:"Conill"}),", el mètode ",e.jsx("code",{children:"revisarAnimal"})," ",e.jsx("strong",{children:"ja funciona"})," sense canvis!"]})]})}),e.jsx(S,{title:"Resum: Quan necessito polimorfisme?"}),e.jsx(f,{variant:"explanation",title:"Herència sola vs Polimorfisme: quina diferència hi ha?",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Amb ",e.jsx("strong",{children:"herència sola"}),", cada variable és del seu propi tipus. Gos és Gos, Gat és Gat. No es barregen:"]}),e.jsx(g,{code:`Gos rex = new Gos("Rex");      // Tipus Gos, objecte Gos
Gat mia = new Gat("Mia");      // Tipus Gat, objecte Gat
rex.dormir();                   // Heretat d'Animal. Aixo ja es herencia.`}),e.jsxs("p",{style:{marginTop:"12px"},children:["El ",e.jsx("strong",{children:"polimorfisme"})," apareix quan necessites ",e.jsx("strong",{children:"tractar objectes de tipus diferent com si fossin el mateix"}),". Usos típics:"]})]})}),e.jsx(f,{variant:"info",title:"Necessito polimorfisme quan...",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsx("p",{children:e.jsx("strong",{children:"Vull posar-los a la mateixa llista:"})}),e.jsx(g,{code:`// Gossos, gats i ocells junts en UNA sola llista
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
// Sense polimorfisme necessitaria: revisar(Gos g), revisar(Gat g)...`})]})}),e.jsx(f,{variant:"warning",title:"NO necessito polimorfisme quan...",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsx("p",{children:"Si mai barrejo tipus i cada variable és sempre del seu tipus concret, no cal polimorfisme. Només herència:"}),e.jsx(g,{code:`// Sempre treballo amb Gos com a Gos. Mai el barrego amb Gat.
Gos rex = new Gos("Rex");
rex.dormir();    // Heretat d'Animal (herencia)
rex.bordar();    // Propi de Gos

// Aixo funciona perfectament nomes amb herencia.
// No necessito polimorfisme.`})]})}),e.jsx(f,{variant:"success",title:"La clau per recordar-ho",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{style:{padding:"16px",background:"rgba(0,0,0,0.04)",borderRadius:"8px"},children:[e.jsx("strong",{children:"Herència"})," → Les classes filles ",e.jsx("strong",{children:"reutilitzen"})," codi del pare.",e.jsx("br",{}),e.jsx("strong",{children:"Polimorfisme"})," → El codi que ",e.jsx("strong",{children:"usa"})," aquestes classes pot tractar-les ",e.jsx("strong",{children:"totes igual"}),"."]}),e.jsxs("p",{style:{marginTop:"16px"},children:["El polimorfisme ",e.jsx("strong",{children:"no és una cosa separada"})," de l'herència. És una ",e.jsx("strong",{children:"conseqüència"}),": si tens herència i ",e.jsx("code",{children:"@Override"}),", el polimorfisme ja funciona. Només cal que facis servir el tipus del pare com a variable (",e.jsx("code",{children:"Animal a = new Gos()"}),") i Java fa la resta."]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"12px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Upcasting"})," (",e.jsx("code",{children:"Animal a = new Gos()"}),"): automàtic i segur."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Downcasting"})," (",e.jsx("code",{children:"Gos g = (Gos) animal"}),"): manual, comprova amb ",e.jsx("code",{children:"instanceof"})," primer."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Sobrecàrrega"})," (Overload): mateixa classe, diferent signatura → compilació."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Sobreescriptura"})," (Override): classe filla, mateixa signatura → execució."]})]})]})})]})}const DE=`public class Main {
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
}`;function eC(){return e.jsxs("div",{children:[e.jsx(S,{title:"Classes Abstractes en Java"}),e.jsx(f,{variant:"info",title:"On som?",children:e.jsxs("p",{children:["Fins ara hem après ",e.jsx("strong",{children:"herència"})," (reutilitzar codi del pare) i ",e.jsx("strong",{children:"polimorfisme"})," (tractar objectes fills com si fossin el pare). Ara veurem les ",e.jsx("strong",{children:"classes abstractes"}),", que completen la idea: classes que ",e.jsx("strong",{children:"no es poden instanciar"})," i que ",e.jsx("strong",{children:"obliguen"})," les filles a implementar certs mètodes."]})}),e.jsx(S,{title:"El Problema"}),e.jsx(f,{variant:"warning",title:"Alguna cosa no encaixa...",children:e.jsxs("p",{children:["Amb el que sabem d'herència i polimorfisme, podem crear objectes de la classe ",e.jsx("strong",{children:"pare"})," directament. Però... té sentit?"]})}),e.jsx(g,{label:"El problema: instanciar la classe pare",code:DE,showLineNumbers:!0}),e.jsx(f,{variant:"error",title:"Per què és un problema?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:['Un "Animal genèric" ',e.jsx("strong",{children:"no existeix"})," al món real. Existeixen gossos, gats, ocells... animals ",e.jsx("strong",{children:"concrets"}),"."]}),e.jsxs("li",{children:["El mètode ",e.jsx("code",{children:"ferSoroll()"}),' a la classe Animal diu "soroll genèric", que ',e.jsx("strong",{children:"no té sentit"}),"."]}),e.jsxs("li",{children:["Qualsevol programador podria fer ",e.jsx("code",{children:"new Animal()"})," per error i el programa compilaria sense problemes."]}),e.jsxs("li",{children:["Necessitem una manera de dir: ",e.jsx("strong",{children:'"Animal existeix com a concepte, però NO es pot crear directament"'}),"."]})]})}),e.jsx(S,{title:"La Solució: Classes Abstractes"}),e.jsxs(f,{variant:"success",title:"Què és una classe abstracta?",children:[e.jsxs("p",{children:["Una classe abstracta és una classe que ",e.jsx("strong",{children:"no es pot instanciar"})," (no pots fer ",e.jsx("code",{children:"new"}),"). Serveix com a ",e.jsx("strong",{children:"plantilla"})," per a les classes filles. Pot contenir:"]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Mètodes abstractes"}),": sense cos, les filles ",e.jsx("strong",{children:"estan obligades"})," a implementar-los."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mètodes normals"}),": amb cos, les filles els ",e.jsx("strong",{children:"hereten"})," com sempre."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Atributs"}),": funcionen igual que en qualsevol classe."]})]})]}),e.jsx(g,{label:"Classe abstracta Animal",code:FE,showLineNumbers:!0}),e.jsx(g,{label:"Les classes filles implementen el mètode abstracte",code:zE,showLineNumbers:!0}),e.jsx(g,{label:"Utilitzar-ho: el polimorfisme segueix funcionant!",code:BE,showLineNumbers:!0}),e.jsx(f,{variant:"success",title:"Què hem aconseguit?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Ningú"})," pot fer ",e.jsx("code",{children:"new Animal()"})," per error. Java ho impedeix."]}),e.jsxs("li",{children:["Cada filla ",e.jsx("strong",{children:"està obligada"})," a implementar ",e.jsx("code",{children:"ferSoroll()"}),". Si no ho fa, error de compilació."]}),e.jsxs("li",{children:["El ",e.jsx("strong",{children:"polimorfisme segueix funcionant"})," exactament igual: ",e.jsx("code",{children:'Animal rex = new Gos("Rex")'}),"."]})]})}),e.jsx(S,{title:"Mètodes Abstractes vs Mètodes Normals"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Una classe abstracta pot tenir ",e.jsx("strong",{children:"els dos tipus"})," de mètodes alhora. Aquesta és la seva gran avantatge respecte a altres mecanismes."]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Mètode Abstracte",variant:"blue",children:[e.jsxs("p",{style:{marginBottom:"8px"},children:[e.jsx("strong",{children:"No té cos"})," (acaba amb ",e.jsx("code",{children:";"}),"). La classe filla",e.jsx("strong",{children:" ha d'implementar-lo obligatòriament"}),"."]}),e.jsx(g,{code:`// Sense claus { }, acaba amb ;
public abstract void ferSoroll();
public abstract String getTipus();

// "Jo no se COM fer-ho,
//  pero les meves filles SI"`})]}),e.jsxs(U,{title:"Mètode Normal",variant:"good",children:[e.jsxs("p",{style:{marginBottom:"8px"},children:[e.jsx("strong",{children:"Té cos"})," (amb ",e.jsx("code",{children:"{ }"}),"). Les filles l'",e.jsx("strong",{children:"hereten"})," i poden fer ",e.jsx("code",{children:"@Override"})," si volen."]}),e.jsx(g,{code:`// Amb claus { }, te implementacio
public void dormir() {
    System.out.println(nom + " dorm.");
}

// "Jo SE com fer-ho, i les meves
//  filles ho hereten gratis"`})]})]}),e.jsx(g,{label:"Classe abstracta amb els dos tipus de mètodes",code:UE,showLineNumbers:!0}),e.jsx(g,{label:"La filla implementa els abstractes i hereta els normals",code:GE,showLineNumbers:!0}),e.jsx(f,{variant:"warning",title:"Regles dels mètodes abstractes",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Un mètode abstracte ",e.jsx("strong",{children:"no té cos"}),": acaba amb ",e.jsx("code",{children:";"})," en lloc de ",e.jsx("code",{children:"{ }"}),"."]}),e.jsxs("li",{children:["Si una classe té ",e.jsx("strong",{children:"almenys un"})," mètode abstracte, la classe ",e.jsx("strong",{children:"ha de ser abstracta"}),"."]}),e.jsxs("li",{children:["La classe filla ",e.jsx("strong",{children:"ha d'implementar TOTS"})," els mètodes abstractes del pare. Si no, la filla ",e.jsx("strong",{children:"també ha de ser abstracta"}),"."]}),e.jsxs("li",{children:["Els mètodes abstractes ",e.jsxs("strong",{children:["no poden ser ",e.jsx("code",{children:"private"})]})," (les filles han de poder veure'ls)."]})]})}),e.jsx(S,{title:"Exemple Complet: Figures Geomètriques"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:[`Les figures geomètriques són l'exemple perfecte de classes abstractes. Una "Figura" genèrica `,e.jsx("strong",{children:"no existeix"}),": existeixen cercles, rectangles i triangles. Totes les figures tenen àrea i perímetre, però",e.jsx("strong",{children:" cada una els calcula de forma diferent"}),"."]})}),e.jsx(g,{label:"Classe abstracta Figura",code:HE,showLineNumbers:!0}),e.jsx(f,{variant:"info",title:"Fixa't en el disseny",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"calcularArea()"})," i ",e.jsx("code",{children:"calcularPerimetre()"})," són ",e.jsx("strong",{children:"abstractes"}),": cada figura els calcula diferent."]}),e.jsxs("li",{children:[e.jsx("code",{children:"mostrarInfo()"})," és ",e.jsx("strong",{children:"normal"}),": mostra la info de la mateixa manera per a totes les figures. A dins, crida els mètodes abstractes!"]})]})}),e.jsx(g,{label:"Cercle, Rectangle i Triangle",code:$E,showLineNumbers:!0}),e.jsx(g,{label:"Main: polimorfisme amb figures",code:VE,showLineNumbers:!0}),e.jsx(g,{label:"Sortida del programa",code:QE}),e.jsx(f,{variant:"success",title:"Per què funciona tan bé?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"new Figura()"}),' no es pot fer: no existeix una "figura genèrica".']}),e.jsxs("li",{children:["Cada subclasse ",e.jsx("strong",{children:"està obligada"})," a implementar ",e.jsx("code",{children:"calcularArea()"})," i ",e.jsx("code",{children:"calcularPerimetre()"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"mostrarInfo()"})," funciona per a ",e.jsx("strong",{children:"totes"})," les figures gràcies al polimorfisme."]}),e.jsxs("li",{children:["Si demà afegim ",e.jsx("code",{children:"Pentagon"}),", només cal crear la classe i implementar els 2 mètodes. ",e.jsx("strong",{children:"Res més canvia."})]})]})}),e.jsx(S,{title:"Tot Junt: Herència + Polimorfisme + Abstracta dins de MVC"}),e.jsx(f,{variant:"explanation",title:"On va cada cosa?",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Ja sabeu com funciona ",e.jsx("strong",{children:"MVC"})," (Model-Vista-Controlador) i ara coneixeu herència, polimorfisme i classes abstractes. Però... ",e.jsx("strong",{children:"com encaixen junts?"})]}),e.jsxs("p",{style:{marginTop:"8px"},children:["MVC et diu ",e.jsx("strong",{children:"on posar"})," cada fitxer (en quina carpeta).",e.jsx("br",{}),"Herència/polimorfisme/abstracta et diuen ",e.jsx("strong",{children:"com es relacionen"})," les classes entre elles."]}),e.jsx("p",{style:{marginTop:"8px"},children:e.jsx("strong",{children:"No competeixen. Es complementen."})})]})}),e.jsx(J,{headers:["Concepte POO","On viu dins MVC","Per què"],rows:[{cells:["Classe abstracta + classes filles","Model","Representen les dades/entitats del domini (Animal, Gos, Gat...)"]},{cells:["Polimorfisme (ArrayList del tipus pare)","Controller","El controller treballa amb el tipus generic sense saber quin fill es"]},{cells:["Crear objectes concrets (new Gos)","Main o View","Algu ha de crear els objectes reals amb les dades de l'usuari"]}]}),e.jsx(f,{variant:"info",title:"Exemple: Clínica Veterinària amb MVC",children:e.jsxs("p",{children:["Vegem l'exemple de la clínica veterinària organitzat en MVC. Les ",e.jsx("strong",{children:"mateixes classes"})," que ja coneixem, però cadascuna al seu lloc:"]})}),e.jsx(g,{label:"Estructura de packages",code:JE}),e.jsx(g,{label:"MODEL: La classe abstracta i les filles",code:WE,showLineNumbers:!0}),e.jsx(g,{label:"MODEL: Les classes filles (Gos i Gat)",code:KE,showLineNumbers:!0}),e.jsx(f,{variant:"success",title:"Fixa't: el Model conté tota la POO",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"Animal"})," és ",e.jsx("strong",{children:"abstracta"})," (no existeix un animal genèric)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Gos"})," i ",e.jsx("code",{children:"Gat"})," ",e.jsx("strong",{children:"hereten"})," amb ",e.jsx("code",{children:"extends"})," i fan ",e.jsx("code",{children:"@Override"}),"."]}),e.jsxs("li",{children:["Herència, polimorfisme i abstracció ",e.jsx("strong",{children:"viuen dins del Model"}),"."]})]})}),e.jsx(g,{label:"CONTROLLER: Treballa amb el tipus pare (polimorfisme)",code:YE,showLineNumbers:!0}),e.jsx(f,{variant:"warning",title:"Fixa't: el Controller només coneix Animal",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:[e.jsx("code",{children:"Clinica"})," importa ",e.jsx("code",{children:"Animal"}),", ",e.jsx("strong",{children:"no"})," Gos ni Gat. L'",e.jsx("code",{children:"ArrayList<Animal>"})," pot contenir qualsevol fill. El mètode ",e.jsx("code",{children:"revisarTots()"})," crida",e.jsx("code",{children:" ferSoroll()"})," de cada animal ",e.jsx("strong",{children:"sense saber quin tipus és"}),". Això és polimorfisme pur."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Si demà afegim ",e.jsx("code",{children:"Ocell"}),", el Controller ",e.jsx("strong",{children:"no canvia ni una línia"}),"."]})]})}),e.jsx(g,{label:"VIEW: Mostra dades per consola",code:XE,showLineNumbers:!0}),e.jsx(g,{label:"MAIN: Crea objectes concrets i connecta les parts",code:ZE,showLineNumbers:!0}),e.jsx(f,{variant:"success",title:"Qui coneix quin tipus?",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsx(J,{headers:["Capa","Coneix Gos/Gat?","Per què"],rows:[{cells:["Model (Animal, Gos, Gat)","Sí","Son les propies classes. Es defineixen aqui."]},{cells:["Controller (Clinica)","NO","Nomes coneix Animal. Treballa amb el tipus pare."]},{cells:["View (Menu)","NO","Mostra les dades que rep. No li importa el tipus concret."]},{cells:["Main","Sí","Ha de crear objectes reals: new Gos(...), new Gat(...)."]}]}),e.jsxs("p",{style:{marginTop:"12px",padding:"12px",background:"rgba(0,0,0,0.04)",borderRadius:"8px"},children:["Aquesta separació és la ",e.jsx("strong",{children:"potència real"})," de combinar MVC amb polimorfisme: el Controller i la View ",e.jsx("strong",{children:"no saben ni els importa"})," si treballen amb un Gos, un Gat o un Ocell que encara no existeix. Tot funciona gràcies al tipus pare ",e.jsx("code",{children:"Animal"}),"."]})]})}),e.jsx(S,{title:"Errors Comuns dels Principiants"}),e.jsx(J,{headers:["Error","Què passa","Solució"],rows:[{cells:["Fer new d'una classe abstracta",'Error de compilació: "Cannot instantiate abstract class"',"Instancia una classe filla concreta: new Gos(), new Gat()"]},{cells:["No implementar tots els mètodes abstractes",'Error de compilació: "must implement abstract method"',"Implementa tots els mètodes abstractes del pare amb @Override"]},{cells:["Posar cos a un mètode abstracte",'Error de compilació: "abstract methods cannot have a body"',"Treu les claus { } i acaba amb ;"]},{cells:["Confondre abstract amb final",`abstract = "les filles han d'implementar". final = "ningú pot heretar"`,"Són oposats! Una classe no pot ser abstract i final alhora"]}]}),e.jsx(S,{title:"Resum: Herència, Polimorfisme i Classes Abstractes"}),e.jsx(f,{variant:"explanation",title:"Són tres coses diferents o són el mateix?",children:e.jsx("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:e.jsxs("p",{children:[e.jsx("strong",{children:"No són tres coses separades."})," Són ",e.jsx("strong",{children:"passos naturals d'un mateix camí"}),". Cada pas neix perquè l'anterior es queda curt. Vegem la història sencera:"]})})}),e.jsx(f,{variant:"info",title:'Pas 1: Herència — "No vull copiar codi"',children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Tens ",e.jsx("code",{children:"Gos"}),", ",e.jsx("code",{children:"Gat"})," i ",e.jsx("code",{children:"Ocell"}),". Les tres classes tenen ",e.jsx("code",{children:"nom"}),", ",e.jsx("code",{children:"edat"}),",",e.jsx("code",{children:" dormir()"}),"... El ",e.jsx("strong",{children:"mateix codi repetit"})," tres vegades."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Solució: crees ",e.jsx("code",{children:"Animal"})," amb el codi comú i les altres hereten amb ",e.jsx("code",{children:"extends"}),". ",e.jsx("strong",{children:"Ara el codi existeix UN sol cop."})]}),e.jsx(g,{code:`Gos rex = new Gos("Rex");
rex.dormir();  // Heretat d'Animal, no l'has hagut de reescriure`}),e.jsx("p",{style:{marginTop:"8px",fontStyle:"italic",opacity:.85},children:"Problema resolt. Pero al fer-ho, apareix un problema nou..."})]})}),e.jsx(f,{variant:"info",title:'Pas 2: Polimorfisme — "No vull un mètode per cada fill"',children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Ara vols posar tots els animals en una ",e.jsx("strong",{children:"mateixa llista"}),", o fer un mètode que accepti ",e.jsx("strong",{children:"qualsevol animal"}),". Sense polimorfisme, necessites un mètode per a Gos, un per a Gat, un per a Ocell..."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Però com que ja tens herència, Java et permet fer",e.jsx("code",{children:" Animal a = new Gos()"}),". Quan crides ",e.jsx("code",{children:"a.ferSoroll()"}),", Java executa el del Gos."]}),e.jsx(g,{code:`// Puc posar-los tots junts i tractar-los igual
ArrayList<Animal> animals = new ArrayList<>();
animals.add(new Gos("Rex"));
animals.add(new Gat("Mia"));

for (Animal a : animals) {
    a.ferSoroll();  // Cada un fa el SEU soroll
}`}),e.jsxs("p",{style:{marginTop:"8px"},children:[e.jsx("strong",{children:'El polimorfisme no és una cosa que "afegeixes". És una conseqüència natural de tenir herència + @Override.'})," Només cal que usis el tipus del pare com a variable."]}),e.jsx("p",{style:{marginTop:"8px",fontStyle:"italic",opacity:.85},children:"Genial, funciona. Pero ara apareix un altre problema..."})]})}),e.jsx(f,{variant:"info",title:'Pas 3: Classe Abstracta — "No puc escriure el codi al pare"',children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Tot funciona. Però mira el mètode ",e.jsx("code",{children:"ferSoroll()"})," de la classe ",e.jsx("code",{children:"Animal"}),". ",e.jsx("strong",{children:"Què hi poses dins?"})]}),e.jsx(g,{code:`public class Animal {
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
}`}),e.jsxs("p",{style:{marginTop:"8px"},children:[e.jsx("strong",{children:"La classe abstracta no és una cosa nova. És una restricció que afegeixes a l'herència"}),' per dir: "aquesta classe no es pot instanciar, i els fills estan obligats a implementar certs mètodes".']})]})}),e.jsx(f,{variant:"warning",title:"Com decideixo què necessito? Tres preguntes.",children:e.jsx("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:e.jsx(J,{headers:["Pregunta","Si la resposta és SÍ...","Què fas"],rows:[{cells:["Les classes comparteixen codi?","Estàs copiant els mateixos atributs i mètodes","Herència (extends)"]},{cells:["Necessito barrejar-los o tractar-los igual?","Vull una llista de tots, o un mètode que accepti qualsevol","Polimorfisme (Animal a = new Gos())"]},{cells:["Puc escriure el codi del mètode al pare?","No hi ha res correcte que serveixi per a tots els fills","Mètode abstracte → classe abstracta"]}]})})}),e.jsx(f,{variant:"success",title:"Tot junt: un camí, tres passos",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["No són tres eines separades que tries d'un calaix. Són ",e.jsx("strong",{children:"capes d'una mateixa idea"})," que es construeixen l'una sobre l'altra:"]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Sense ",e.jsx("strong",{children:"herència"}),", no hi ha polimorfisme ni classes abstractes."]}),e.jsxs("li",{children:["Sense ",e.jsx("strong",{children:"@Override"}),", el polimorfisme no fa res útil."]}),e.jsxs("li",{children:["Sense la necessitat de ",e.jsx("strong",{children:"protegir el pare"}),", no calen classes abstractes."]})]}),e.jsxs("p",{style:{marginTop:"16px",padding:"16px",background:"rgba(0,0,0,0.04)",borderRadius:"8px"},children:[e.jsx("strong",{children:"Herència"}),' → "No vull copiar codi"',e.jsx("br",{}),e.jsx("strong",{children:"Polimorfisme"}),` → "Vull tractar-los a tots igual" (conseqüència de l'herència)`,e.jsx("br",{}),e.jsx("strong",{children:"Classe abstracta"}),` → "No puc escriure el codi al pare i no vull que l'instanciïn" (restricció sobre l'herència)`]}),e.jsx("p",{style:{marginTop:"16px"},children:"I per als mètodes, la regla és simple:"}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Puc escriure un cos que serveixi per a tots?"})," → Mètode ",e.jsx("strong",{children:"normal"})," (com ",e.jsx("code",{children:"dormir()"}),": tots dormen igual)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No puc, cada fill ho fa diferent?"})," → Mètode ",e.jsx("strong",{children:"abstracte"})," (com ",e.jsx("code",{children:"ferSoroll()"}),": cada animal sona diferent)."]})]})]})})]})}function tC(){return e.jsxs("div",{children:[e.jsx(S,{title:"Exemple Complet: Sistema de Biblioteca"}),e.jsx(f,{variant:"info",title:"Objectiu",children:e.jsxs("p",{children:["Crearem un sistema de gestió d'una biblioteca utilitzant els conceptes de POO que hem après: classes, objectes, constructors, encapsulació (getters/setters) i packages. El sistema tindrà tres classes: ",e.jsx("code",{children:"Llibre"}),", ",e.jsx("code",{children:"Autor"})," i ",e.jsx("code",{children:"Biblioteca"}),"."]})}),e.jsx(S,{title:"Estructura del Projecte"}),e.jsx(g,{label:"Organització en packages",language:"bash",code:`biblioteca/
  src/
    model/
      Llibre.java
      Autor.java
    gestio/
      Biblioteca.java
    app/
      Main.java`}),e.jsxs(me,{children:[e.jsxs(T,{title:"Classe Autor",variant:"blue",children:[e.jsx("p",{children:"Representa un autor amb nom i nacionalitat."}),e.jsxs("p",{style:{marginTop:"6px"},children:["Atributs: ",e.jsx("code",{children:"nom"}),", ",e.jsx("code",{children:"nacionalitat"})]})]}),e.jsxs(T,{title:"Classe Llibre",variant:"yellow",children:[e.jsx("p",{children:"Representa un llibre amb títol, autor, any i disponibilitat."}),e.jsxs("p",{style:{marginTop:"6px"},children:["Atributs: ",e.jsx("code",{children:"títol"}),", ",e.jsx("code",{children:"autor"}),", ",e.jsx("code",{children:"any"}),", ",e.jsx("code",{children:"disponible"})]})]}),e.jsxs(T,{title:"Classe Biblioteca",variant:"green",children:[e.jsx("p",{children:"Gestiona una col·lecció de llibres amb operacions CRUD."}),e.jsxs("p",{style:{marginTop:"6px"},children:["Mètodes: ",e.jsx("code",{children:"afegir"}),", ",e.jsx("code",{children:"buscar"}),", ",e.jsx("code",{children:"prestar"}),", ",e.jsx("code",{children:"retornar"})]})]}),e.jsx(T,{title:"Classe Main",variant:"pink",children:e.jsx("p",{children:"Punt d'entrada del programa per provar el sistema."})})]}),e.jsx(S,{title:"Classe Autor"}),e.jsx(g,{label:"model/Autor.java",showLineNumbers:!0,code:`package model;

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
}`}),e.jsx(S,{title:"Classe Llibre"}),e.jsx(g,{label:"model/Llibre.java",showLineNumbers:!0,code:`package model;

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
}`}),e.jsx(f,{variant:"explanation",title:"Composició",children:e.jsxs("p",{children:["Fixa't que la classe ",e.jsx("code",{children:"Llibre"})," té un atribut de tipus ",e.jsx("code",{children:"Autor"}),". Això s'anomena ",e.jsx("strong",{children:"composició"}),`: un objecte conté un altre objecte. És una relació "TÉ UN" (un llibre TÉ UN autor). Així evitem duplicar les dades de l'autor en cada llibre.`]})}),e.jsx(S,{title:"Classe Biblioteca"}),e.jsx(g,{label:"gestio/Biblioteca.java",showLineNumbers:!0,code:`package gestio;

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
}`}),e.jsx(S,{title:"Classe Main (Punt d'entrada)"}),e.jsx(g,{label:"app/Main.java",showLineNumbers:!0,code:`package app;

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
}`}),e.jsx(S,{title:"Sortida del Programa"}),e.jsx(ms,{label:"Resultat esperat a la consola",language:"bash",defaultOpen:!0,code:`Llibre afegit: Cent anys de solitud
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
Total: 3 llibres`}),e.jsx(S,{title:"Conceptes Aplicats"}),e.jsxs(me,{children:[e.jsx(T,{title:"Encapsulació",variant:"blue",children:e.jsxs("p",{children:["Tots els atributs són ",e.jsx("code",{children:"private"})," amb getters i setters."]})}),e.jsx(T,{title:"Constructors",variant:"yellow",children:e.jsxs("p",{children:["Cada classe té un constructor que inicialitza els atributs amb ",e.jsx("code",{children:"this"}),"."]})}),e.jsx(T,{title:"Composició",variant:"green",children:e.jsxs("p",{children:[e.jsx("code",{children:"Llibre"})," conté un objecte ",e.jsx("code",{children:"Autor"}),". ",e.jsx("code",{children:"Biblioteca"})," conté un array de ",e.jsx("code",{children:"Llibre"}),"."]})}),e.jsx(T,{title:"Packages",variant:"pink",children:e.jsxs("p",{children:["Classes organitzades en packages: ",e.jsx("code",{children:"model"}),", ",e.jsx("code",{children:"gestio"}),", ",e.jsx("code",{children:"app"}),"."]})})]}),e.jsx(f,{variant:"success",title:"Resum",children:e.jsx("p",{children:"Aquest exemple mostra com la POO ens permet crear un sistema complet i organitzat. Cada classe té una responsabilitat clara, les dades estan protegides amb encapsulació, i el codi està organitzat en packages. Així és com es programen les aplicacions reals."})})]})}const El=[{name:"src/",type:"folder",description:"Carpeta arrel del codi font. Conté tots els fitxers .java organitzats en packages."},{name:"  model/",type:"folder",description:"Package que conté les classes de dades (entitats). Representen els objectes del domini: Producte, Client, Comanda..."},{name:"    Producte.java",type:"file",description:"Classe que representa un producte amb atributs privats (nom, preu, estoc), constructor, getters i setters. És una classe de model pura, sense lògica de negoci."},{name:"    Client.java",type:"file",description:"Classe que representa un client amb nom, email i historial de compres. Encapsula totes les dades del client amb validació als setters."},{name:"  servei/",type:"folder",description:"Package que conté la lògica de negoci. Aquí és on es fan els càlculs, validacions i operacions complexes."},{name:"    GestorProductes.java",type:"file",description:"Classe que gestiona la col·lecció de productes: afegir, eliminar, buscar, calcular el valor total de l'inventari. Utilitza objectes de la classe Producte."},{name:"    GestorComandes.java",type:"file",description:"Classe que gestiona les comandes: crear comanda, afegir productes, calcular total, aplicar descomptes. Coordina Producte i Client."},{name:"  app/",type:"folder",description:"Package que conté el punt d'entrada de l'aplicació. Aquí és on està el main() que inicia el programa."},{name:"    Main.java",type:"file",description:"Classe principal amb el mètode main(). Crea objectes de les altres classes, els connecta i executa el programa. És el punt d'entrada."}];function rC(){const[t,r]=A.useState(null);return e.jsxs("div",{children:[e.jsx(S,{title:"Introducció a la Modularitat"}),e.jsx(f,{variant:"info",title:"Què és la modularitat?",children:e.jsxs("p",{children:["La ",e.jsx("strong",{children:"modularitat"})," és el principi de dividir un programa en parts més petites, independents i reutilitzables, anomenades ",e.jsx("strong",{children:"mòduls"}),". Cada mòdul té una responsabilitat concreta i ben definida. En Java, els mòduls són les ",e.jsx("strong",{children:"classes"})," organitzades en ",e.jsx("strong",{children:"packages"}),"."]})}),e.jsx(S,{title:"Analogia: La Ciutat"}),e.jsxs(f,{variant:"explanation",children:[e.jsxs("p",{children:["Imagina una ",e.jsx("strong",{children:"ciutat"}),". Una ciutat no és un sol edifici gegant on tot passa al mateix lloc. Està organitzada en zones: zona residencial, zona comercial, hospitals, escoles, parcs... Cada zona té la seva funció i són independents entre si, però es connecten mitjançant carrers i transport."]}),e.jsx("p",{style:{marginTop:"10px"},children:'Un programa modular funciona igual: cada classe és com una "zona" de la ciutat, amb una funció clara. Les classes es comuniquen entre si creant objectes i cridant mètodes, com els carrers que connecten les zones.'})]}),e.jsxs(me,{children:[e.jsx(T,{title:"Zona Residencial = Classe Model",variant:"blue",children:e.jsxs("p",{children:["On viuen les dades. Classes com ",e.jsx("code",{children:"Producte"}),", ",e.jsx("code",{children:"Client"})," que emmagatzemen informació."]})}),e.jsx(T,{title:"Zona Comercial = Classe Servei",variant:"yellow",children:e.jsxs("p",{children:["On passa la lògica de negoci. Classes com ",e.jsx("code",{children:"GestorProductes"})," que processen dades."]})}),e.jsx(T,{title:"Ajuntament = Classe Main",variant:"green",children:e.jsxs("p",{children:["El punt central que coordina tot. El ",e.jsx("code",{children:"main()"})," inicia i connecta les parts."]})}),e.jsx(T,{title:"Carrers = Objectes i Mètodes",variant:"pink",children:e.jsx("p",{children:"La comunicació entre mòduls. Crear objectes i cridar mètodes connecta les classes."})})]}),e.jsx(S,{title:"Per què codi modular?"}),e.jsxs(me,{children:[e.jsx(T,{title:"Fàcil de mantenir",variant:"blue",children:e.jsx("p",{children:"Si alguna cosa falla, saps exactament a quina classe mirar. No cal revisar 1000 línies de codi."})}),e.jsx(T,{title:"Reutilitzable",variant:"yellow",children:e.jsx("p",{children:"Una classe ben feta es pot reutilitzar en altres projectes. Escrius el codi un cop, l'uses moltes vegades."})}),e.jsx(T,{title:"Treball en equip",variant:"green",children:e.jsx("p",{children:"Cada persona pot treballar en una classe diferent sense interferir amb els altres."})}),e.jsx(T,{title:"Fàcil de testejar",variant:"pink",children:e.jsx("p",{children:"Pots provar cada classe per separat (tests unitaris) abans de juntar-ho tot."})})]}),e.jsx(S,{title:"Explorador d'Estructura de Projecte"}),e.jsx(f,{variant:"info",children:e.jsx("p",{children:"Fes clic a qualsevol fitxer o carpeta per veure la seva descripció i entendre la seva funció dins del projecte modular."})}),e.jsxs("div",{style:{display:"flex",gap:"20px",marginTop:"16px",flexWrap:"wrap"},children:[e.jsxs("div",{style:{flex:"1",minWidth:"280px",backgroundColor:"#1e2837",borderRadius:"8px",padding:"16px",fontFamily:"monospace",fontSize:"14px"},children:[e.jsx("div",{style:{color:"#ffd700",marginBottom:"12px",fontWeight:"bold"},children:"Estructura del Projecte"}),El.map((a,n)=>e.jsxs("div",{onClick:()=>r(n),style:{padding:"6px 8px",cursor:"pointer",borderRadius:"4px",color:t===n?"#ffd700":a.type==="folder"?"#90cdf4":"#e8eef5",backgroundColor:t===n?"rgba(255, 215, 0, 0.1)":"transparent",fontWeight:a.type==="folder"?"bold":"normal",transition:"background-color 0.2s"},onMouseOver:i=>{t!==n&&(i.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.05)")},onMouseOut:i=>{t!==n&&(i.currentTarget.style.backgroundColor="transparent")},children:[a.type==="folder"?"📁 ":"📄 ",a.name]},n))]}),e.jsx("div",{style:{flex:"1",minWidth:"280px",backgroundColor:"#f0f4f8",borderRadius:"8px",padding:"20px",border:"2px solid #d0dae6"},children:t!==null?e.jsxs(e.Fragment,{children:[e.jsx("h4",{style:{color:"#1a4d8f",marginBottom:"12px"},children:El[t].name.trim()}),e.jsx("p",{style:{color:"#4a5568",lineHeight:"1.6"},children:El[t].description})]}):e.jsx("p",{style:{color:"#a0aec0",fontStyle:"italic"},children:"Selecciona un fitxer o carpeta per veure la seva descripció."})})]}),e.jsx(S,{title:"Exemple Bàsic de Modularitat"}),e.jsx(g,{label:"Dues classes separades que col·laboren",showLineNumbers:!0,code:`// Fitxer: Salutador.java
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
}`}),e.jsx(f,{variant:"success",title:"Resum",children:e.jsx("p",{children:"La modularitat és dividir el programa en classes amb responsabilitats clares. Cada classe és un mòdul independent que es pot reutilitzar, testejar i mantenir per separat. Les classes es comuniquen creant objectes i cridant mètodes."})})]})}function aC(){return e.jsxs("div",{children:[e.jsx(S,{title:"El Problema del Codi Monolític"}),e.jsx(f,{variant:"warning",title:"Què és un programa monolític?",children:e.jsxs("p",{children:["Un programa ",e.jsx("strong",{children:"monolític"})," és aquell on ",e.jsx("strong",{children:"tot el codi"})," està en un sol fitxer o classe. Totes les variables, tota la lògica, totes les funcionalitats... tot barrejat en un únic ",e.jsx("code",{children:"main()"}),". Funciona per a programes petits, però es converteix en un problema seriós a mesura que el programa creix."]})}),e.jsx(S,{title:"Exemple: Tot en un sol fitxer"}),e.jsx(g,{label:"Programa monolític (MAL disseny)",showLineNumbers:!0,code:`public class MonoliticApp {
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
}`}),e.jsx(S,{title:"Monolític vs Modular"}),e.jsxs(oe,{children:[e.jsx(U,{title:"Programa Monolític",variant:"bad",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Tot en un sol fitxer:"})," variables, lògica, sortida... tot barrejat"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Difícil de llegir:"})," quan el programa creix, és impossible entendre-ho"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Difícil de mantenir:"})," un canvi pot trencar tot el programa"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No reutilitzable:"})," no pots reutilitzar parts del codi en altres projectes"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No testejable:"})," no pots provar una funcionalitat sense executar-ho tot"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Conflictes en equip:"})," dues persones no poden treballar al mateix fitxer sense conflictes"]})]})}),e.jsx(U,{title:"Programa Modular",variant:"good",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Classes separades:"})," cada classe té una responsabilitat"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Fàcil de llegir:"})," cada fitxer és curt i clar"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Fàcil de mantenir:"})," un canvi en una classe no afecta les altres"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reutilitzable:"})," pots usar les classes en altres projectes"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Testejable:"})," pots provar cada classe per separat"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Treball en equip:"})," cada persona treballa en una classe diferent"]})]})})]}),e.jsx(S,{title:"Problemes Concrets del Codi Monolític"}),e.jsxs(me,{children:[e.jsx(T,{title:"Efecte Espagueti",variant:"pink",children:e.jsx("p",{children:"El codi s'entrelliga com els espaguetis. Una variable definida a la línia 10 s'utilitza a la línia 200 i es modifica a la línia 450. Impossible de seguir."})}),e.jsx(T,{title:"Duplicació de Codi",variant:"pink",children:e.jsx("p",{children:"Sense mòduls, acabes copiant i enganxant el mateix codi en diversos llocs. Si has de canviar alguna cosa, l'has de canviar en tots els llocs."})}),e.jsx(T,{title:"Debugging Impossible",variant:"pink",children:e.jsx("p",{children:"Quan hi ha un error, has de revisar tot el fitxer. No pots aïllar el problema perquè tot està connectat. Un bug pot estar en qualsevol de les 1000 línies."})}),e.jsx(T,{title:"Escalabilitat Zero",variant:"pink",children:e.jsx("p",{children:"Afegir una nova funcionalitat significa modificar el fitxer monolític, amb el risc de trencar les funcionalitats existents."})})]}),e.jsx(S,{title:"La Solució: Dividir en Classes"}),e.jsxs(f,{variant:"success",children:[e.jsxs("p",{children:["La solució és ",e.jsx("strong",{children:"dividir el programa en classes"}),", on cada classe té una responsabilitat única i ben definida. Així aconseguim:"]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Separació de responsabilitats:"})," cada classe fa UNA cosa"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Encapsulació:"})," les dades estan protegides dins de cada classe"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reutilització:"})," les classes es poden usar en múltiples projectes"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mantenibilitat:"})," és fàcil trobar i corregir errors"]})]})]}),e.jsxs(oe,{children:[e.jsx(U,{title:"Monolític: 1 fitxer",variant:"bad",children:e.jsx(g,{language:"bash",code:`projecte/
  MonoliticApp.java  (500+ línies)`})}),e.jsx(U,{title:"Modular: múltiples classes",variant:"good",children:e.jsx(g,{language:"bash",code:`projecte/
  model/
    Producte.java     (30 línies)
  servei/
    GestorProductes.java (50 línies)
  app/
    Main.java         (20 línies)`})})]}),e.jsx(f,{variant:"info",title:"Recorda",children:e.jsxs("p",{children:["El primer pas per millorar el teu codi és ",e.jsx("strong",{children:"identificar les responsabilitats"})," del teu programa i crear una classe per a cadascuna. A la següent pàgina veurem com fer-ho pas a pas amb un exemple concret."]})})]})}function nC(){return e.jsxs("div",{children:[e.jsx(S,{title:"Packages: Organització del Codi"}),e.jsx(f,{variant:"info",title:"Què és un package?",children:e.jsxs("p",{children:["Un ",e.jsx("strong",{children:"package"})," és una carpeta que agrupa classes relacionades. És la manera que té Java d'organitzar el codi en projectes grans. Cada fitxer ",e.jsx("code",{children:".java"})," declara a quin package pertany, i per utilitzar classes d'un altre package cal importar-les."]})}),e.jsx(S,{title:"Estructura de Carpetes"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["L'estructura de carpetes del projecte ha de coincidir amb la declaració dels packages. Cada package és una carpeta, i cada classe és un fitxer",e.jsx("code",{children:".java"})," dins d'aquesta carpeta."]})}),e.jsx(g,{label:"Estructura de carpetes d'un projecte",language:"bash",code:`el-meu-projecte/
  src/
    utils/                          ← Package "utils"
      CalculsArrayReals.java
      Validador.java
    model/                          ← Package "model"
      Producte.java
      Client.java
    app/                            ← Package "app"
      Main.java`}),e.jsx(S,{title:"Declaració de Package"}),e.jsx(f,{variant:"warning",title:"Regla important",children:e.jsxs("p",{children:["La declaració ",e.jsx("code",{children:"package"})," ha de ser la ",e.jsx("strong",{children:"primera instrucció"})," del fitxer Java, abans de qualsevol ",e.jsx("code",{children:"import"})," o declaració de classe. El nom del package ha de coincidir exactament amb el nom de la carpeta."]})}),e.jsx(g,{label:"Declaració del package",showLineNumbers:!0,code:`// Fitxer: src/utils/CalculsArrayReals.java
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
}`}),e.jsx(S,{title:"Mètodes d'Importació"}),e.jsx(f,{variant:"info",children:e.jsxs("p",{children:["Per utilitzar una classe d'un altre package, hi ha ",e.jsx("strong",{children:"tres mètodes"})," d'importació. Cadascun té els seus avantatges."]})}),e.jsx(J,{headers:["Mètode","Sintaxi","Quan usar-lo"],rows:[{group:"Mètodes d'importació"},{cells:["Import explícit","import utils.CalculsArrayReals;","Quan uses una o poques classes concretes"]},{cells:["Import amb comodí (*)","import utils.*;","Quan uses moltes classes del mateix package"]},{cells:["Nom qualificat","utils.CalculsArrayReals c = new utils.CalculsArrayReals();","Per evitar ambigüitats o ús puntual"]}]}),e.jsxs(me,{children:[e.jsxs(T,{title:"Import Explícit",variant:"blue",children:[e.jsxs("p",{children:["Importa una classe concreta. És el mètode ",e.jsx("strong",{children:"recomanat"}),"."]}),e.jsx(g,{code:`package app;

import utils.CalculsArrayReals;
import model.Producte;

public class Main {
    public static void main(String[] args) {
        CalculsArrayReals c = new CalculsArrayReals();
        Producte p = new Producte();
    }
}`}),e.jsx(f,{variant:"success",children:e.jsx("p",{children:"Queda clar quines classes s'estan usant."})})]}),e.jsxs(T,{title:"Import amb Comodí (*)",variant:"yellow",children:[e.jsxs("p",{children:["Importa ",e.jsx("strong",{children:"totes"})," les classes d'un package."]}),e.jsx(g,{code:`package app;

import utils.*;    // Totes les classes de utils
import model.*;    // Totes les classes de model

public class Main {
    public static void main(String[] args) {
        CalculsArrayReals c = new CalculsArrayReals();
        Producte p = new Producte();
        Validador v = new Validador();
    }
}`}),e.jsx(f,{variant:"warning",children:e.jsx("p",{children:"Més còmode, però menys clar. No saps quines classes s'usen realment."})})]}),e.jsxs(T,{title:"Nom Qualificat",variant:"green",children:[e.jsxs("p",{children:["Usa el nom complet ",e.jsx("strong",{children:"sense import"}),"."]}),e.jsx(g,{code:`package app;

// Sense import!
public class Main {
    public static void main(String[] args) {
        utils.CalculsArrayReals c =
            new utils.CalculsArrayReals();
        model.Producte p =
            new model.Producte();
    }
}`}),e.jsx(f,{variant:"info",children:e.jsx("p",{children:"Útil quan dues classes de packages diferents tenen el mateix nom."})})]})]}),e.jsx(S,{title:"Convencions de Noms"}),e.jsx(J,{headers:["Regla","Exemple Correcte","Exemple Incorrecte"],rows:[{cells:["Tot en minúscules","package model;","package Model;"]},{cells:["Sense espais","package gestordades;","package gestor dades;"]},{cells:["Sense caràcters especials","package utils;","package utils-helpers;"]},{cells:["Noms descriptius","package controlador;","package ctrl;"]},{cells:["Domini invers (professional)","package com.lasalle.app;","package app.lasalle.com;"]}]}),e.jsx(f,{variant:"explanation",title:"Convenció del domini invers",children:e.jsxs("p",{children:["En projectes professionals, els packages comencen amb el ",e.jsx("strong",{children:"domini invers"})," de l'organització. Això evita conflictes de noms entre projectes de diferents empreses."]})}),e.jsx(g,{label:"Exemple amb domini invers",code:`// Projecte de La Salle
package com.lasalle.programacio.model;
package com.lasalle.programacio.vista;
package com.lasalle.programacio.controlador;

// Projecte de Google
package com.google.maps.model;
package com.google.maps.api;`}),e.jsx(S,{title:"Exemple Complet"}),e.jsxs(oe,{children:[e.jsx(U,{title:"Estructura del projecte",variant:"blue",children:e.jsx(g,{language:"bash",code:`projecte/
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
}`}),e.jsx(f,{variant:"success",title:"Resum",children:e.jsxs("p",{children:["Els packages organitzen les classes en carpetes. Declara el package a la primera línia, utilitza ",e.jsx("code",{children:"import"})," per accedir a classes d'altres packages (preferiblement import explícit), i segueix les convencions de noms (tot en minúscules, domini invers en projectes professionals)."]})})]})}function iC(){return e.jsxs("div",{children:[e.jsx(S,{title:"Exemple Complet: Calculadora Modular"}),e.jsx(f,{variant:"info",title:"Objectiu",children:e.jsxs("p",{children:["Crearem una calculadora modular formada per ",e.jsx("strong",{children:"dues classes"}),": una classe ",e.jsx("code",{children:"Operacions"})," que conté els mètodes de càlcul (sumar, restar, multiplicar, dividir) i una classe ",e.jsx("code",{children:"Calculadora"})," amb el ",e.jsx("code",{children:"main()"}),"que la utilitza. Aplicarem tots els conceptes de modularitat apresos."]})}),e.jsx(S,{title:"Estructura del Projecte"}),e.jsx(g,{label:"Organització de fitxers",language:"bash",code:`calculadora/
  src/
    utils/
      Operacions.java       ← Classe amb els mètodes de càlcul
    app/
      Calculadora.java      ← Classe principal amb el main()`}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Operacions.java",variant:"blue",children:[e.jsxs("p",{children:["La classe ",e.jsx("strong",{children:"auxiliar"})," que conté tota la lògica de càlcul."]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsx("li",{children:e.jsx("code",{children:"sumar(a, b)"})}),e.jsx("li",{children:e.jsx("code",{children:"restar(a, b)"})}),e.jsx("li",{children:e.jsx("code",{children:"multiplicar(a, b)"})}),e.jsxs("li",{children:[e.jsx("code",{children:"dividir(a, b)"})," amb control de divisió per zero"]})]})]}),e.jsxs(U,{title:"Calculadora.java",variant:"blue",children:[e.jsxs("p",{children:["La classe ",e.jsx("strong",{children:"principal"})," que usa Operacions."]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Pas 1: Instancia ",e.jsx("code",{children:"Operacions"})]}),e.jsx("li",{children:"Pas 2: Crida els mètodes"}),e.jsx("li",{children:"Mostra els resultats"})]})]})]}),e.jsx(S,{title:"Classe Operacions"}),e.jsx(g,{label:"utils/Operacions.java",showLineNumbers:!0,code:`package utils;

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
}`}),e.jsx(f,{variant:"warning",title:"Control de divisió per zero",children:e.jsxs("p",{children:["El mètode ",e.jsx("code",{children:"dividir"})," comprova si el divisor és zero abans de fer la divisió. Si és zero, mostra un missatge d'error i retorna 0. Això evita l'error ",e.jsx("code",{children:"ArithmeticException"})," que es produiria en una divisió per zero amb enters, i el resultat ",e.jsx("code",{children:"Infinity"})," amb doubles."]})}),e.jsx(S,{title:"Classe Calculadora (Main)"}),e.jsx(g,{label:"app/Calculadora.java",showLineNumbers:!0,code:`package app;

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
}`}),e.jsx(S,{title:"Sortida del Programa"}),e.jsx(ms,{label:"Resultat esperat a la consola",language:"bash",defaultOpen:!0,code:`=== CALCULADORA ===
20.0 + 5.0 = 25.0
20.0 - 5.0 = 15.0
20.0 * 5.0 = 100.0
20.0 / 5.0 = 4.0

--- Prova divisio per zero ---
Error: No es pot dividir per zero!
Resultat: 0.0`}),e.jsx(S,{title:"Per què és millor que tot al main?"}),e.jsxs(oe,{children:[e.jsx(U,{title:"Tot al main (monolític)",variant:"bad",children:e.jsx(g,{code:`public static void main(String[] args) {
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
}`})})]}),e.jsx(S,{title:"Conceptes Aplicats"}),e.jsxs(me,{children:[e.jsx(T,{title:"Modularitat",variant:"blue",children:e.jsx("p",{children:"El codi està dividit en dues classes amb responsabilitats clares i separades."})}),e.jsx(T,{title:"Packages",variant:"yellow",children:e.jsxs("p",{children:["Les classes estan organitzades en packages: ",e.jsx("code",{children:"utils"})," per als càlculs, ",e.jsx("code",{children:"app"})," per al main."]})}),e.jsx(T,{title:"Import",variant:"green",children:e.jsxs("p",{children:["S'utilitza ",e.jsx("code",{children:"import utils.Operacions;"})," per accedir a la classe auxiliar des d'un altre package."]})}),e.jsx(T,{title:"Control d'Errors",variant:"pink",children:e.jsxs("p",{children:["El mètode ",e.jsx("code",{children:"dividir"})," comprova la divisió per zero abans d'operar, evitant errors en temps d'execució."]})})]}),e.jsx(ms,{label:"Versió ampliada: més operacions",code:`package utils;

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
}`}),e.jsx(f,{variant:"success",title:"Resum",children:e.jsxs("p",{children:["Aquest exemple mostra com crear una calculadora modular amb dues classes.",e.jsx("code",{children:" Operacions"})," conté tota la lògica de càlcul amb control d'errors, i ",e.jsx("code",{children:"Calculadora"})," la utilitza seguint els 2 passos: instanciar i cridar mètodes. El codi és net, reutilitzable i fàcil d'ampliar."]})})]})}const sC=`// String es un OBJECTE, no un tipus primitiu
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
}`;function SC(){return e.jsxs("div",{children:[e.jsx(S,{title:"La Classe String"}),e.jsxs(f,{variant:"info",title:"Què és String?",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"String"})," és una ",e.jsx("strong",{children:"classe"})," de Java, no un tipus primitiu. Representa una cadena de caràcters i és un dels objectes més utilitzats en programació."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"És un objecte:"}),' tot i que es pot crear amb literals ("text"), internament és un objecte de la classe ',e.jsx("code",{children:"java.lang.String"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"És immutable:"}),' un cop creat, el seu contingut NO es pot modificar. Qualsevol operació que "modifiqui" un String en realitat crea un objecte nou.']}),e.jsxs("li",{children:[e.jsx("strong",{children:"String Pool:"}),' Java manté un "pool" de Strings literals per reutilitzar objectes i estalviar memòria.']})]})]}),e.jsx(g,{code:sC,label:"String és un objecte immutable",showLineNumbers:!0}),e.jsx(S,{title:"Crear Strings"}),e.jsx(g,{code:lC,label:"Maneres de crear Strings",showLineNumbers:!0}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Literal (recomanat)",variant:"good",children:[e.jsx("p",{children:e.jsx("code",{children:'String s = "Hola";'})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Més eficient (reutilitza objectes del pool)"}),e.jsx("li",{children:"Forma habitual i recomanada"}),e.jsx("li",{children:"Java optimitza automàticament"})]})]}),e.jsxs(U,{title:"Constructor new",variant:"bad",children:[e.jsx("p",{children:e.jsx("code",{children:'String s = new String("Hola");'})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Crea sempre un objecte nou"}),e.jsx("li",{children:"No aprofita el String Pool"}),e.jsx("li",{children:"Gasta més memòria innecessàriament"})]})]})]}),e.jsx(S,{title:"Comparar Strings"}),e.jsxs(f,{variant:"error",title:"ERROR COMÚ: Usar == per comparar Strings",children:[e.jsxs("p",{children:["L'operador ",e.jsx("code",{children:"=="})," compara ",e.jsx("strong",{children:"referències"})," (adreces de memòria), NO el contingut dels Strings. Dos Strings poden contenir el mateix text però estar en posicions de memòria diferents, i ",e.jsx("code",{children:"=="})," diria ",e.jsx("code",{children:"false"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Sempre"})," utilitza ",e.jsx("code",{children:".equals()"})," o ",e.jsx("code",{children:".equalsIgnoreCase()"})," per comparar el contingut de Strings!"]})]}),e.jsx(g,{code:oC,label:"Per què == NO funciona per comparar contingut",showLineNumbers:!0}),e.jsx(g,{code:cC,label:"Comparació correcta amb .equals() i .equalsIgnoreCase()",showLineNumbers:!0}),e.jsx(J,{headers:["Mètode","Compara","Retorna","Exemple"],rows:[{cells:["==","Referències (memòria)","boolean",'"Hola" == "Hola" // depèn!']},{cells:[".equals()","Contingut exacte","boolean",'"Hola".equals("Hola") // true']},{cells:[".equalsIgnoreCase()","Contingut (ignora cas)","boolean",'"Hola".equalsIgnoreCase("hola") // true']},{cells:[".compareTo()","Ordre lexicogràfic","int (neg/0/pos)",'"Anna".compareTo("Marc") // negatiu']}]}),e.jsx(S,{title:"Mètodes de la Classe String"}),e.jsx(J,{headers:["Mètode","Descripció","Retorna","Exemple"],rows:[{group:"Longitud i Accés"},{cells:["length()","Nombre de caràcters","int",'"Hola".length() // 4']},{cells:["charAt(i)","Caràcter a la posició i","char",`"Hola".charAt(0) // 'H'`]},{cells:["isEmpty()","Comprova si està buit","boolean",'"".isEmpty() // true']},{group:"Cerca"},{cells:["indexOf(str)","Posició de la primera aparició","int (-1 si no trobat)",'"Hola".indexOf("la") // 2']},{cells:["lastIndexOf(str)","Posició de la última aparició","int (-1 si no trobat)",'"abab".lastIndexOf("ab") // 2']},{cells:["contains(str)","Conté el substring?","boolean",'"Hola".contains("ol") // true']},{cells:["startsWith(str)","Comença amb...?","boolean",'"Hola".startsWith("Ho") // true']},{cells:["endsWith(str)","Acaba amb...?","boolean",'"Hola".endsWith("la") // true']},{group:"Extracció"},{cells:["substring(inici)","Des de inici fins al final","String",'"Hola".substring(2) // "la"']},{cells:["substring(inici, fi)","Des de inici fins a fi (exclusiu)","String",'"Hola".substring(1,3) // "ol"']},{group:"Transformació"},{cells:["toUpperCase()","Converteix a majúscules","String",'"hola".toUpperCase() // "HOLA"']},{cells:["toLowerCase()","Converteix a minúscules","String",'"HOLA".toLowerCase() // "hola"']},{cells:["trim()","Elimina espais extrems","String",'"  hola  ".trim() // "hola"']},{cells:["replace(vell, nou)","Substitueix aparicions","String",'"hola".replace("o","0") // "h0la"']},{group:"Divisió i Conversió"},{cells:["split(regex)","Divideix en array","String[]",'"a,b,c".split(",") // ["a","b","c"]']},{cells:["toCharArray()","Converteix a array de chars","char[]",'"Hola".toCharArray()']},{cells:["concat(str)","Concatena amb un altre String","String",'"Hola".concat(" Mon") // "Hola Mon"']},{cells:["String.valueOf(x)","Converteix qualsevol valor a String","String",'String.valueOf(42) // "42"']}]}),e.jsx(S,{title:"Exemples Detallats"}),e.jsx(f,{variant:"explanation",title:"length() i charAt()",children:e.jsxs("p",{children:[e.jsx("code",{children:"length()"})," retorna el nombre total de caràcters. ",e.jsx("code",{children:"charAt(index)"})," retorna el caràcter a una posició concreta (començant des de 0)."]})}),e.jsx(g,{code:uC,label:"length() i charAt() - Longitud i accés per posició",showLineNumbers:!0}),e.jsx(g,{code:dC,label:"substring() - Extreure parts d'un String",showLineNumbers:!0}),e.jsx(g,{code:pC,label:"indexOf() i lastIndexOf() - Cercar dins d'un String",showLineNumbers:!0}),e.jsx(g,{code:mC,label:"contains(), startsWith(), endsWith() - Comprovacions",showLineNumbers:!0}),e.jsx(g,{code:hC,label:"toUpperCase(), toLowerCase(), trim(), isEmpty()",showLineNumbers:!0}),e.jsx(g,{code:fC,label:"replace() - Substituir text",showLineNumbers:!0}),e.jsx(g,{code:xC,label:"split() i toCharArray() - Dividir un String",showLineNumbers:!0}),e.jsx(g,{code:gC,label:"concat() i String.valueOf() - Concatenar i convertir",showLineNumbers:!0}),e.jsx(S,{title:"Concatenació de Strings"}),e.jsx(f,{variant:"info",title:"Tres maneres de concatenar",children:e.jsxs("p",{children:["Hi ha tres formes principals de concatenar Strings en Java. L'operador ",e.jsx("code",{children:"+"})," és el més comú, però ",e.jsx("strong",{children:"StringBuilder"})," és molt més eficient quan fas moltes concatenacions (especialment dins de bucles)."]})}),e.jsx(g,{code:vC,label:"Les tres opcions de concatenació",showLineNumbers:!0}),e.jsx(S,{title:"StringBuilder"}),e.jsx(f,{variant:"warning",title:"Quan usar StringBuilder?",children:e.jsxs("p",{children:["Utilitza ",e.jsx("strong",{children:"StringBuilder"})," sempre que necessitis concatenar Strings dins d'un ",e.jsx("strong",{children:"bucle"})," o quan facis moltes operacions de concatenació. Com que String és immutable, cada ",e.jsx("code",{children:"+"})," crea un objecte nou, cosa que és molt ineficient en bucles grans."]})}),e.jsx(g,{code:jC,label:"StringBuilder - Mètodes principals",showLineNumbers:!0}),e.jsxs(oe,{children:[e.jsx(U,{title:"Concatenació amb + en bucle",variant:"bad",children:e.jsx("p",{children:"Cada iteració crea un objecte String nou. Molt lent per bucles grans."})}),e.jsx(U,{title:"StringBuilder en bucle",variant:"good",children:e.jsx("p",{children:"Modifica el mateix objecte internament. Molt més ràpid i eficient."})})]}),e.jsx(g,{code:bC,label:"Comparació: + en bucle vs StringBuilder",showLineNumbers:!0}),e.jsx(S,{title:"Exemple Complet"}),e.jsx(f,{variant:"success",title:"Exemple pràctic: Analitzar una frase",children:e.jsx("p",{children:"Aquest exemple mostra com combinar diversos mètodes de String per analitzar i transformar una frase."})}),e.jsx(g,{code:yC,label:"Exemple complet: Analitzar i transformar text",showLineNumbers:!0}),e.jsx(S,{title:"Resum"}),e.jsxs(me,{children:[e.jsx(T,{title:"Immutabilitat",variant:"blue",children:e.jsx("p",{children:"Els Strings són immutables. Qualsevol modificació crea un objecte nou."})}),e.jsx(T,{title:"Comparació",variant:"blue",children:e.jsxs("p",{children:["Usa ",e.jsx("code",{children:".equals()"})," per comparar contingut. Mai ",e.jsx("code",{children:"=="})," per Strings."]})}),e.jsx(T,{title:"StringBuilder",variant:"blue",children:e.jsx("p",{children:"Utilitza StringBuilder per concatenacions en bucles. És molt més eficient."})}),e.jsx(T,{title:"Mètodes Útils",variant:"blue",children:e.jsx("p",{children:"String té més de 15 mètodes essencials: length, charAt, substring, indexOf, contains, replace, split, trim..."})})]})]})}const EC=`// Math es una classe utilitaria de java.lang
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
}`;function kC(){return e.jsxs("div",{children:[e.jsx(S,{title:"La Classe Math"}),e.jsxs(f,{variant:"info",title:"Què és la classe Math?",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Math"})," és una ",e.jsx("strong",{children:"classe utilitària"})," de Java (",e.jsx("code",{children:"java.lang.Math"}),") que proporciona mètodes i constants per realitzar operacions matemàtiques."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Tots els mètodes són static:"})," es criden directament amb ",e.jsx("code",{children:"Math.mètode()"}),", sense crear cap objecte."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No s'instancia:"})," no es pot fer ",e.jsx("code",{children:"new Math()"}),". La classe té el constructor privat."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No cal import:"})," com que pertany a ",e.jsx("code",{children:"java.lang"}),", està disponible automàticament."]})]})]}),e.jsx(g,{code:EC,label:"Utilitzar la classe Math",showLineNumbers:!0}),e.jsx(S,{title:"Constants"}),e.jsx(J,{headers:["Constant","Valor","Descripció"],rows:[{cells:["Math.PI","3.141592653589793","El nombre Pi - relació entre circumferència i diàmetre"]},{cells:["Math.E","2.718281828459045","El nombre d'Euler - base del logaritme natural"]}]}),e.jsx(g,{code:CC,label:"Constants Math.PI i Math.E",showLineNumbers:!0}),e.jsx(S,{title:"Mètodes de la Classe Math"}),e.jsx(J,{headers:["Mètode","Descripció","Retorna","Exemple"],rows:[{group:"Valor Absolut i Comparació"},{cells:["Math.abs(x)","Valor absolut","int/double","Math.abs(-5) // 5"]},{cells:["Math.max(a, b)","El major dels dos valors","int/double","Math.max(3, 7) // 7"]},{cells:["Math.min(a, b)","El menor dels dos valors","int/double","Math.min(3, 7) // 3"]},{group:"Potències i Arrels"},{cells:["Math.pow(base, exp)","Potència (base^exp)","double","Math.pow(2, 3) // 8.0"]},{cells:["Math.sqrt(x)","Arrel quadrada","double","Math.sqrt(25) // 5.0"]},{cells:["Math.cbrt(x)","Arrel cúbica","double","Math.cbrt(27) // 3.0"]},{group:"Arrodoniment"},{cells:["Math.ceil(x)","Arrodoneix cap amunt (sostre)","double","Math.ceil(3.1) // 4.0"]},{cells:["Math.floor(x)","Arrodoneix cap avall (terra)","double","Math.floor(3.9) // 3.0"]},{cells:["Math.round(x)","Arrodoneix al més proper","long","Math.round(3.5) // 4"]},{group:"Aleatori"},{cells:["Math.random()","Nombre aleatori [0.0, 1.0)","double","Math.random() // 0.7423..."]},{group:"Logaritmes"},{cells:["Math.log(x)","Logaritme natural (base e)","double","Math.log(Math.E) // 1.0"]},{cells:["Math.log10(x)","Logaritme en base 10","double","Math.log10(100) // 2.0"]},{group:"Trigonometria (radians)"},{cells:["Math.sin(x)","Sinus","double","Math.sin(Math.PI/2) // 1.0"]},{cells:["Math.cos(x)","Cosinus","double","Math.cos(0) // 1.0"]},{cells:["Math.tan(x)","Tangent","double","Math.tan(Math.PI/4) // ~1.0"]},{cells:["Math.toRadians(x)","Graus a radians","double","Math.toRadians(180) // PI"]}]}),e.jsx(S,{title:"Exemples Detallats"}),e.jsx(f,{variant:"explanation",title:"abs(), max(), min()",children:e.jsxs("p",{children:[e.jsx("code",{children:"Math.abs()"})," retorna el valor absolut (sempre positiu).",e.jsx("code",{children:" Math.max()"})," i ",e.jsx("code",{children:"Math.min()"})," retornen el major i menor de dos valors. Es poden anidar per comparar més de dos valors."]})}),e.jsx(g,{code:wC,label:"abs(), max(), min() - Valor absolut i comparacions",showLineNumbers:!0}),e.jsx(g,{code:AC,label:"pow(), sqrt(), cbrt() - Potències i arrels",showLineNumbers:!0}),e.jsx(f,{variant:"warning",title:"Math.round() vs Math.ceil() vs Math.floor()",children:e.jsxs("p",{children:["No confonguis aquests tres mètodes! ",e.jsx("code",{children:"ceil()"})," sempre arrodoneix cap amunt,",e.jsx("code",{children:" floor()"})," sempre cap avall, i ",e.jsx("code",{children:"round()"})," al més proper. Amb nombres negatius el comportament pot ser confús: ",e.jsx("code",{children:"Math.floor(-2.3)"})," dona ",e.jsx("code",{children:"-3.0"}),", no ",e.jsx("code",{children:"-2.0"}),"!"]})}),e.jsx(g,{code:LC,label:"ceil(), floor(), round() - Arrodoniment",showLineNumbers:!0}),e.jsx(g,{code:RC,label:"Math.random() - Nombres aleatoris",showLineNumbers:!0}),e.jsxs(f,{variant:"success",title:"Fórmula per enters aleatoris en un rang",children:[e.jsxs("p",{children:["La fórmula per obtenir un enter aleatori entre ",e.jsx("code",{children:"min"})," i ",e.jsx("code",{children:"max"})," (ambdós inclusius) és:"]}),e.jsx("p",{children:e.jsx("code",{children:"int aleatori = (int)(Math.random() * (max - min + 1)) + min;"})})]}),e.jsx(g,{code:MC,label:"log(), log10() - Logaritmes",showLineNumbers:!0}),e.jsx(f,{variant:"warning",title:"Trigonometria: Radians, no Graus!",children:e.jsxs("p",{children:["Les funcions ",e.jsx("code",{children:"Math.sin()"}),", ",e.jsx("code",{children:"Math.cos()"})," i ",e.jsx("code",{children:"Math.tan()"})," esperen l'angle en ",e.jsx("strong",{children:"radians"}),", no en graus. Utilitza ",e.jsx("code",{children:"Math.toRadians(graus)"})," per convertir graus a radians abans de passar-los a aquestes funcions."]})}),e.jsx(g,{code:TC,label:"sin(), cos(), tan(), toRadians() - Trigonometria",showLineNumbers:!0}),e.jsx(S,{title:"Exemple Complet"}),e.jsx(f,{variant:"success",title:"Exemple pràctic: Càlculs amb Math",children:e.jsx("p",{children:"Un exemple que combina diversos mètodes de Math per fer càlculs de cercles, distàncies, simulació de daus i ajust de notes."})}),e.jsx(g,{code:NC,label:"Exemple complet amb múltiples mètodes de Math",showLineNumbers:!0}),e.jsx(S,{title:"Patrons Pràctics"}),e.jsx(J,{headers:["Patró","Codi","Resultat"],rows:[{cells:["Enter aleatori [1, 6]","(int)(Math.random() * 6) + 1","Dau: 1 a 6"]},{cells:["Enter aleatori [min, max]","(int)(Math.random() * (max-min+1)) + min","Rang personalitzat"]},{cells:["Arrodonir a 2 decimals","Math.round(x * 100.0) / 100.0","3.14159 -> 3.14"]},{cells:["Arrodonir a N decimals","Math.round(x * 10^N) / 10^N","Precisió variable"]},{cells:["Limitar un valor [min, max]","Math.max(min, Math.min(max, valor))","Clamp"]},{cells:["Distància entre 2 punts","Math.sqrt(pow(x2-x1,2) + pow(y2-y1,2))","Pitàgores"]},{cells:["Àrea del cercle","Math.PI * Math.pow(radi, 2)","Geometria"]}]}),e.jsx(S,{title:"Resum"}),e.jsxs(me,{children:[e.jsx(T,{title:"Classe Utilitària",variant:"blue",children:e.jsxs("p",{children:["Math és una classe static. No cal instanciar-la. Crida directament ",e.jsx("code",{children:"Math.mètode()"}),"."]})}),e.jsx(T,{title:"Arrodoniment",variant:"blue",children:e.jsxs("p",{children:[e.jsx("code",{children:"ceil"})," (amunt), ",e.jsx("code",{children:"floor"})," (avall), ",e.jsx("code",{children:"round"})," (més proper). Per N decimals: ",e.jsx("code",{children:"round(x * 10^N) / 10^N"}),"."]})}),e.jsx(T,{title:"Aleatoris",variant:"blue",children:e.jsxs("p",{children:[e.jsx("code",{children:"Math.random()"})," retorna [0.0, 1.0). Usa ",e.jsx("code",{children:"(int)(Math.random() * rang) + min"})," per enters."]})}),e.jsx(T,{title:"Trigonometria",variant:"blue",children:e.jsxs("p",{children:["Funcions trigonomètriques usen ",e.jsx("strong",{children:"radians"}),". Converteix amb ",e.jsx("code",{children:"Math.toRadians(graus)"}),"."]})})]})]})}const PC=`// Math.random() - Metode static de la classe Math
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
}`;function GC(){return e.jsxs("div",{children:[e.jsx(S,{title:"Math.random() vs java.util.Random"}),e.jsx(f,{variant:"info",title:"Dues maneres de generar nombres aleatoris",children:e.jsxs("p",{children:["Java ofereix dues formes principals per generar nombres aleatoris: el mètode static ",e.jsx("code",{children:"Math.random()"})," i la classe ",e.jsx("code",{children:"java.util.Random"}),". Ambdues són vàlides, però tenen diferències importants en flexibilitat i ús."]})}),e.jsx(S,{title:"Math.random()"}),e.jsx(f,{variant:"explanation",title:"Com funciona Math.random()",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Mètode static"})," de la classe ",e.jsx("code",{children:"Math"})," - es crida directament sense crear cap objecte."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No cal import"})," - ",e.jsx("code",{children:"Math"})," pertany a ",e.jsx("code",{children:"java.lang"})," i està sempre disponible."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Retorna un ",e.jsx("code",{children:"double"})]})," entre ",e.jsx("code",{children:"0.0"})," (inclusiu) i ",e.jsx("code",{children:"1.0"})," (exclusiu)."]}),e.jsx("li",{children:"Per obtenir enters o rangs personalitzats, cal fer operacions matemàtiques addicionals."})]})}),e.jsx(g,{code:PC,label:"Math.random() - Ús bàsic i patrons",showLineNumbers:!0}),e.jsx(S,{title:"La Classe java.util.Random"}),e.jsx(f,{variant:"explanation",title:"Com funciona java.util.Random",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"És una classe"})," - cal ",e.jsx("code",{children:"import java.util.Random;"})," i crear un objecte amb ",e.jsx("code",{children:"new Random()"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Múltiples mètodes"})," - pot generar ",e.jsx("code",{children:"int"}),", ",e.jsx("code",{children:"double"}),", ",e.jsx("code",{children:"boolean"}),", ",e.jsx("code",{children:"long"})," directament."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"nextInt(bound)"})," - genera un enter entre 0 (inclusiu) i bound (exclusiu), més còmode que Math.random()."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Seedable"})," - es pot inicialitzar amb una seed per obtenir seqüències reproduïbles."]})]})}),e.jsx(g,{code:_C,label:"java.util.Random - Creació i ús bàsic",showLineNumbers:!0}),e.jsx(J,{headers:["Mètode","Retorna","Rang","Exemple"],rows:[{cells:["nextInt()","int","Qualsevol int","rng.nextInt() // -1238547921"]},{cells:["nextInt(bound)","int","0 a bound-1","rng.nextInt(6) // 0 a 5"]},{cells:["nextDouble()","double","0.0 a 0.999...","rng.nextDouble() // 0.7423..."]},{cells:["nextBoolean()","boolean","true o false","rng.nextBoolean() // true"]},{cells:["nextLong()","long","Qualsevol long","rng.nextLong()"]}]}),e.jsx(g,{code:qC,label:"Tots els mètodes de Random",showLineNumbers:!0}),e.jsx(S,{title:"Seed: Seqüències Reproduïbles"}),e.jsx(f,{variant:"info",title:"Què és una seed?",children:e.jsxs("p",{children:["Una ",e.jsx("strong",{children:"seed"})," és un valor inicial que determina la seqüència de nombres aleatoris. Si dos objectes ",e.jsx("code",{children:"Random"})," tenen la mateixa seed, generaran",e.jsx("strong",{children:" exactament la mateixa seqüència"}),". Això és molt útil per fer proves i depurar codi, ja que pots reproduir els mateixos resultats."]})}),e.jsx(g,{code:OC,label:"Seed per seqüències reproduïbles",showLineNumbers:!0}),e.jsx(S,{title:"Comparació Directa"}),e.jsxs(oe,{children:[e.jsx(U,{title:"Math.random()",variant:"blue",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Tipus:"})," Mètode static"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Import:"})," No cal"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Instanciar:"})," No cal"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Retorna:"})," Només double [0.0, 1.0)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Enters:"})," Cal cast manual ",e.jsx("code",{children:"(int)"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Boolean:"})," Cal ",e.jsx("code",{children:"< 0.5"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Seed:"})," No suportat"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ideal per:"})," Ús ràpid i senzill"]})]})}),e.jsx(U,{title:"java.util.Random",variant:"blue",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Tipus:"})," Classe completa"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Import:"})," ",e.jsx("code",{children:"import java.util.Random"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Instanciar:"})," ",e.jsx("code",{children:"new Random()"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Retorna:"})," int, double, boolean, long"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Enters:"})," Directe amb ",e.jsx("code",{children:"nextInt(bound)"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Boolean:"})," Directe amb ",e.jsx("code",{children:"nextBoolean()"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Seed:"})," Suportat (reproduïble)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ideal per:"})," Ús flexible i avançat"]})]})})]}),e.jsx(S,{title:"Quan Usar Cada Un?"}),e.jsxs(oe,{children:[e.jsx(U,{title:"Usa Math.random() quan...",variant:"good",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Necessites un random ràpid i senzill"}),e.jsx("li",{children:"No vols importar cap classe addicional"}),e.jsx("li",{children:"Només necessites un double aleatori"}),e.jsx("li",{children:"És un script petit o un exercici bàsic"}),e.jsx("li",{children:"No necessites reproduïbilitat"})]})}),e.jsx(U,{title:"Usa Random quan...",variant:"good",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Necessites generar enters directament"}),e.jsx("li",{children:"Necessites booleans aleatoris"}),e.jsx("li",{children:"Vols seqüències reproduïbles (seed)"}),e.jsx("li",{children:"Fas servir aleatoris en molts llocs del codi"}),e.jsx("li",{children:"El programa és més complex"})]})})]}),e.jsx(S,{title:"Exemples Comparatius"}),e.jsx(f,{variant:"explanation",title:"Mateixa tasca, dues solucions",children:e.jsxs("p",{children:["A continuació comparem com resoldre les mateixes tasques comunes amb ",e.jsx("code",{children:"Math.random()"})," i amb ",e.jsx("code",{children:"java.util.Random"}),"."]})}),e.jsx(g,{code:FC,label:"Enter aleatori en un rang",showLineNumbers:!0}),e.jsx(g,{code:zC,label:"Element aleatori d'un array",showLineNumbers:!0}),e.jsx(g,{code:BC,label:"Boolean aleatori",showLineNumbers:!0}),e.jsx(S,{title:"Patrons Comuns"}),e.jsx(g,{code:IC,label:"Patrons amb Math.random()",showLineNumbers:!0}),e.jsx(g,{code:DC,label:"Patrons amb java.util.Random",showLineNumbers:!0}),e.jsxs(f,{variant:"success",title:"Recomanació",children:[e.jsxs("p",{children:["Per a la majoria de programes, ",e.jsx("strong",{children:"java.util.Random"})," és la millor opció. És més llegible, més flexible, i ofereix mètodes directes per generar enters i booleans sense haver de fer operacions addicionals. A més, la possibilitat d'usar seeds la fa ideal per proves i depuració."]}),e.jsxs("p",{children:[e.jsx("code",{children:"Math.random()"})," és perfecte quan necessites un nombre aleatori ràpid en un context senzill i no vols importar cap classe."]})]}),e.jsx(S,{title:"Exemple Complet"}),e.jsx(f,{variant:"info",title:"Exemple pràctic amb java.util.Random",children:e.jsx("p",{children:"Un exemple complet que mostra diversos usos de nombres aleatoris: un joc, simulació de moneda, barreja d'array (shuffle) i generació de contrasenyes."})}),e.jsx(g,{code:UC,label:"Exemple complet: Joc, simulació, shuffle i contrasenyes",showLineNumbers:!0}),e.jsx(S,{title:"Resum"}),e.jsxs(me,{children:[e.jsx(T,{title:"Math.random()",variant:"blue",children:e.jsxs("p",{children:["Mètode static. Retorna double [0.0, 1.0). Ràpid i sense imports. Per enters: ",e.jsx("code",{children:"(int)(Math.random() * rang) + min"}),"."]})}),e.jsx(T,{title:"java.util.Random",variant:"blue",children:e.jsxs("p",{children:["Classe amb múltiples mètodes: ",e.jsx("code",{children:"nextInt()"}),", ",e.jsx("code",{children:"nextDouble()"}),", ",e.jsx("code",{children:"nextBoolean()"}),". Més flexible i llegible."]})}),e.jsx(T,{title:"Seed",variant:"blue",children:e.jsxs("p",{children:["Només ",e.jsx("code",{children:"Random"})," suporta seeds per seqüències reproduïbles. Útil per proves: ",e.jsx("code",{children:"new Random(42)"}),"."]})}),e.jsx(T,{title:"Recomanació",variant:"blue",children:e.jsxs("p",{children:["Prefereix ",e.jsx("code",{children:"java.util.Random"})," per projectes. Usa ",e.jsx("code",{children:"Math.random()"})," per coses ràpides i senzilles."]})})]})]})}function HC(){return e.jsxs("div",{children:[e.jsx(S,{title:"For-each: sintaxi simplificada per recórrer col·leccions"}),e.jsxs(f,{variant:"info",children:[e.jsxs("p",{children:["El bucle ",e.jsx("strong",{children:"for tradicional"})," és l'estàndard i el més utilitzat a Java, especialment per la seva similitud amb C, C++ i C#. És la base que has de dominar primer."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["El ",e.jsx("strong",{children:"for-each"})," (també anomenat ",e.jsx("em",{children:"enhanced for"}),") és una sintaxi simplificada que Java ofereix per recórrer arrays i col·leccions quan ",e.jsx("strong",{children:"no necessites l'índex"}),"."]})]}),e.jsx(f,{variant:"warning",title:"Prioritat: for tradicional",children:e.jsx("p",{children:"A nivell de DAM, el for tradicional és la prioritat. El for-each és un complement útil que simplifica el codi en certs casos, però no substitueix el for clàssic."})}),e.jsx(S,{title:"Sintaxi del for-each"}),e.jsx(g,{label:"Estructura general",code:`for (Tipus element : coleccio) {
    // codi que utilitza 'element'
}`}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Es llegeix com: ",e.jsx("strong",{children:'"per cada element de la col·lecció, fes..."'}),". El compilador s'encarrega internament de gestionar l'índex i l'accés als elements."]})}),e.jsx(S,{title:"Comparació: for tradicional vs for-each"}),e.jsxs(oe,{children:[e.jsxs(U,{title:"For tradicional (amb índex)",variant:"blue",children:[e.jsxs("p",{children:["Tens control total amb l'índex ",e.jsx("strong",{children:"i"}),"."]}),e.jsx(g,{code:`int[] nums = {10, 20, 30, 40, 50};

for (int i = 0; i < nums.length; i++) {
    System.out.println("Index " + i + ": " + nums[i]);
}`})]}),e.jsxs(U,{title:"For-each (sense índex)",variant:"good",children:[e.jsxs("p",{children:["Més net, però ",e.jsx("strong",{children:"no tens accés a l'índex"}),"."]}),e.jsx(g,{code:`int[] nums = {10, 20, 30, 40, 50};

for (int num : nums) {
    System.out.println(num);
}`})]})]}),e.jsx(S,{title:"Quan utilitzar cadascun?"}),e.jsxs(me,{children:[e.jsx(T,{title:"Utilitza for tradicional quan...",variant:"blue",children:e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsx("li",{children:"Necessites l'índex (saber en quina posició estàs)"}),e.jsx("li",{children:"Vols modificar els elements de l'array"}),e.jsx("li",{children:"Vols recórrer només una part de l'array"}),e.jsx("li",{children:"Necessites recórrer al revés (de final a inici)"}),e.jsx("li",{children:"Necessites comparar elements consecutius"})]})}),e.jsx(T,{title:"Utilitza for-each quan...",variant:"green",children:e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsx("li",{children:"Només necessites llegir tots els elements"}),e.jsx("li",{children:"No necessites saber la posició"}),e.jsx("li",{children:"Vols un codi més curt i llegible"}),e.jsx("li",{children:"Treballes amb col·leccions (ArrayList, etc.)"})]})})]}),e.jsx(S,{title:"Exemples amb diferents tipus"}),e.jsx(g,{label:"Array d'enters (int)",showLineNumbers:!0,code:`int[] notes = {7, 9, 5, 8, 6};
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
}`}),e.jsx(S,{title:"Limitacions del for-each"}),e.jsx(f,{variant:"warning",title:"El for-each NO et dona l'índex",children:e.jsxs("p",{children:["Dins del for-each, ",e.jsx("strong",{children:"no tens cap variable d'índex"}),". Si necessites saber en quina posició estàs, has d'usar el for tradicional."]})}),e.jsx(f,{variant:"error",title:"No pots modificar l'array amb la variable del bucle",children:e.jsxs("p",{children:["La variable del for-each és una ",e.jsx("strong",{children:"còpia"})," del valor. Modificar-la no canvia l'array original."]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"Això NO funciona",variant:"bad",children:e.jsx(g,{code:`int[] nums = {1, 2, 3};

// Intent de duplicar cada valor
for (int num : nums) {
    num = num * 2; // Modifica la COPIA, no l'array!
}
// nums segueix sent {1, 2, 3}`})}),e.jsx(U,{title:"Això SÍ funciona",variant:"good",children:e.jsx(g,{code:`int[] nums = {1, 2, 3};

// Amb for tradicional pots modificar
for (int i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * 2; // Modifica l'array!
}
// nums ara es {2, 4, 6}`})})]}),e.jsx(S,{title:"For-each amb col·leccions (ArrayList)"}),e.jsx(f,{variant:"info",children:e.jsxs("p",{children:["El for-each funciona no només amb arrays, sinó també amb qualsevol col·lecció de Java com ",e.jsx("strong",{children:"ArrayList"}),". De fet, és on més brilla perquè l'alternativa amb for tradicional requereix usar ",e.jsx("code",{children:".get(i)"})," i ",e.jsx("code",{children:".size()"}),"."]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"ArrayList amb for tradicional",variant:"blue",children:e.jsx(g,{code:`ArrayList<String> fruites = new ArrayList<>();
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
}`})})]}),e.jsx(S,{title:"Resum"}),e.jsx(J,{headers:["Característica","for tradicional","for-each"],rows:[{cells:["Accés a l'índex","Sí","No"]},{cells:["Modificar l'array","Sí","No (modifica còpia)"]},{cells:["Recórrer parcialment","Sí","No (sempre recorre tot)"]},{cells:["Recórrer al revés","Sí","No"]},{cells:["Llegibilitat","Correcta","Més neta i curta"]},{cells:["Funciona amb ArrayList","Sí (.get/.size)","Sí (directament)"]}]}),e.jsx(f,{variant:"success",title:"Consell",children:e.jsxs("p",{children:["Domina primer el ",e.jsx("strong",{children:"for tradicional"}),", que és el que trobaràs a la majoria d'exercicis i exàmens. Un cop el tinguis clar, el for-each et serà molt fàcil d'incorporar com a eina complementària."]})})]})}function $C(){return e.jsxs("div",{children:[e.jsx(S,{title:"Operador Ternari: if-else compacte en una línia"}),e.jsxs(f,{variant:"info",children:[e.jsxs("p",{children:["L'operador ternari és una forma ",e.jsx("strong",{children:"compacta"})," d'escriure un if-else senzill en una sola línia. És útil quan vols assignar un valor a una variable en funció d'una condició simple."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Recorda: el ",e.jsx("strong",{children:"if-else tradicional"})," segueix sent la forma estàndard i prioritària. L'operador ternari és un complement per a casos concrets."]})]}),e.jsx(S,{title:"Sintaxi"}),e.jsx(g,{label:"Estructura de l'operador ternari",code:"variable = condicio ? valorSiTrue : valorSiFalse;"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Es llegeix com: ",e.jsx("strong",{children:'"Si la condició és certa, agafa el primer valor; si no, agafa el segon."'})]})}),e.jsxs(T,{title:"Esquema mental",variant:"blue",children:[e.jsx("p",{children:"CONDICIÓ → si TRUE → valor A"}),e.jsx("p",{children:"CONDICIÓ → si FALSE → valor B"})]}),e.jsx(S,{title:"Comparació: if-else vs ternari"}),e.jsxs(oe,{children:[e.jsx(U,{title:"If-else tradicional (5+ línies)",variant:"blue",children:e.jsx(g,{code:`String resultat;

if (nota >= 5) {
    resultat = "Aprovat";
} else {
    resultat = "Suspes";
}`})}),e.jsx(U,{title:"Operador ternari (1 línia)",variant:"good",children:e.jsx(g,{code:'String resultat = (nota >= 5) ? "Aprovat" : "Suspes";'})})]}),e.jsx(f,{variant:"explanation",children:e.jsx("p",{children:"Ambdós codis fan exactament el mateix. La diferència és purament estètica: el ternari és més compacte, però el if-else és més explícit i fàcil de llegir per a qui comença."})}),e.jsx(S,{title:"Casos d'ús pràctics"}),e.jsx(g,{label:"1. Assignar una variable segons una condició",showLineNumbers:!0,code:`int edat = 20;
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
System.out.println("Valor absolut: " + absolut); // 42`}),e.jsx(S,{title:"Ternari aniuat (existeix, però no el recomanem)"}),e.jsx(f,{variant:"warning",title:"Evita els ternaris aniuats",children:e.jsxs("p",{children:["Tècnicament és possible encadenar ternaris, però el resultat és un codi molt difícil de llegir i mantenir. ",e.jsx("strong",{children:"No ho recomanem."})]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"Ternari aniuat (difícil de llegir)",variant:"bad",children:e.jsx(g,{code:`// NO recomanat!
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
}`})})]}),e.jsx(S,{title:"Quan utilitzar i quan NO"}),e.jsxs(me,{children:[e.jsx(T,{title:"Utilitza l'operador ternari quan...",variant:"green",children:e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsx("li",{children:"La decisió és simple: una condició, dos valors possibles"}),e.jsx("li",{children:"Vols assignar un valor a una variable en una sola línia"}),e.jsx("li",{children:"Vols retornar un valor senzill des d'un mètode"}),e.jsx("li",{children:"El codi resultant segueix sent fàcil de llegir"})]})}),e.jsx(T,{title:"NO utilitzis l'operador ternari quan...",variant:"pink",children:e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsx("li",{children:"La lògica és complexa o té múltiples condicions"}),e.jsx("li",{children:"Necessites executar varies instruccions (no només retornar un valor)"}),e.jsx("li",{children:"Voldries aniuar ternaris dins d'altres ternaris"}),e.jsx("li",{children:"El codi es fa difícil d'entendre a primera vista"})]})})]}),e.jsx(S,{title:"Resum"}),e.jsx(J,{headers:["Característica","if-else","Operador ternari"],rows:[{cells:["Línies de codi","5+ línies","1 línia"]},{cells:["Llegibilitat","Molt clara","Clara si és simple"]},{cells:["Múltiples instruccions","Sí","No (només retorna un valor)"]},{cells:["Condicions complexes","Sí","No recomanat"]},{cells:["Aniuament","Fàcil de llegir","Molt confús"]},{cells:["Ús principal","Qualsevol decisió","Assignacions simples"]}]}),e.jsx(f,{variant:"success",title:"Consell",children:e.jsxs("p",{children:["Pensa en l'operador ternari com un ",e.jsx("strong",{children:"atall"}),": si el caminet curt és clar i segur, pren-lo. Si és fosc i ple de revolts (condicions complexes), millor el camí principal (if-else)."]})})]})}function VC(){return e.jsxs("div",{children:[e.jsx(S,{title:"var i altres funcionalitats modernes de Java"}),e.jsxs(f,{variant:"info",children:[e.jsxs("p",{children:["Java ha anat evolucionant amb noves versions que incorporen sintaxis més modernes i compactes. Aquí veurem algunes de les més útils: ",e.jsx("strong",{children:"var"}),","," ",e.jsx("strong",{children:"text blocks"}),", ",e.jsx("strong",{children:"switch expressions"})," i"," ",e.jsx("strong",{children:"records"}),"."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Totes aquestes funcionalitats són ",e.jsx("strong",{children:"complements"})," a la sintaxi tradicional, que segueix sent la prioritat a nivell acadèmic."]})]}),e.jsx(f,{variant:"warning",title:"Important per a estudiants de DAM",children:e.jsxs("p",{children:["Aquestes funcionalitats són ",e.jsx("strong",{children:'"nice to know"'})," (bo de saber). A nivell de DAM, centra't primer en la sintaxi tradicional que és la que apareixerà als exàmens i exercicis. Coneix-les per si les trobes en codi real o tutorials moderns."]})}),e.jsx(S,{title:"var: inferència de tipus local (Java 10+)"}),e.jsx(f,{variant:"info",children:e.jsxs("p",{children:["La paraula clau ",e.jsx("strong",{children:"var"})," permet declarar variables locals sense especificar explícitament el tipus. El compilador ",e.jsx("strong",{children:"dedueix"})," el tipus automàticament a partir del valor assignat."]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"Forma tradicional (tipus explícit)",variant:"blue",children:e.jsx(g,{code:`String nom = "Hola";
int edat = 25;
double preu = 19.99;
ArrayList<String> llista = new ArrayList<>();`})}),e.jsx(U,{title:"Amb var (tipus inferit)",variant:"good",children:e.jsx(g,{code:`var nom = "Hola";        // String
var edat = 25;           // int
var preu = 19.99;        // double
var llista = new ArrayList<String>();`})})]}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["En ambdós casos, el tipus és ",e.jsx("strong",{children:"exactament el mateix"}),". L'única diferència és que amb ",e.jsx("code",{children:"var"})," no l'escrius tu, el compilador el dedueix. Un cop assignat, el tipus queda fixat."]})}),e.jsx(f,{variant:"error",title:"var NO fa que Java sigui dinàmic!",children:e.jsxs("p",{children:["A diferència de Python o JavaScript, ",e.jsx("code",{children:"var"})," ",e.jsx("strong",{children:"no"})," converteix Java en un llenguatge de tipat dinàmic. El tipus es determina en temps de compilació i no pot canviar després."]})}),e.jsx(g,{label:"Això dona ERROR de compilació",code:`var x = 10;       // x es int
x = "hola";       // ERROR! No pots assignar String a un int`}),e.jsx(S,{title:"On es pot i on NO es pot usar var"}),e.jsxs(me,{children:[e.jsxs(T,{title:"SÍ es pot usar",variant:"green",children:[e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsx("li",{children:"Variables locals dins d'un mètode"}),e.jsx("li",{children:"Variables dins de bucles for"}),e.jsx("li",{children:"Variables dins de blocs try-with-resources"})]}),e.jsx(g,{code:`// Dins d'un metode
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
var x; // NO COMPILA (quin tipus es?)`})]})]}),e.jsx(J,{headers:["Situació","Es pot usar var?"],rows:[{cells:["Variable local amb assignació","Sí"]},{cells:["Variable en bucle for/for-each","Sí"]},{cells:["Atribut de classe","No"]},{cells:["Paràmetre de mètode","No"]},{cells:["Tipus de retorn","No"]},{cells:["Sense valor inicial","No"]}]}),e.jsx(S,{title:"Quan usar var i quan no"}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Bon ús de var",variant:"good",children:[e.jsx("p",{children:"Quan el tipus és obvi pel context:"}),e.jsx(g,{code:`// El tipus es evident
var scanner = new Scanner(System.in);
var noms = new ArrayList<String>();
var resultat = "Aprovat";`})]}),e.jsxs(U,{title:"Mal ús de var",variant:"bad",children:[e.jsx("p",{children:"Quan el tipus no és clar i var confon:"}),e.jsx(g,{code:`// Quin tipus retorna? No es clar!
var dades = obtenirDades();
var resultat = processar(x, y);
var config = inicialitzar();`})]})]}),e.jsx(S,{title:"Text blocks: strings multilínia (Java 13+)"}),e.jsx(f,{variant:"info",children:e.jsxs("p",{children:["Els ",e.jsx("strong",{children:"text blocks"})," permeten escriure cadenes de text de múltiples línies sense haver de concatenar ni usar ",e.jsx("code",{children:"\\n"}),". S'utilitzen tres cometes dobles ",e.jsx("code",{children:'"""'})," per obrir i tancar."]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"Forma tradicional",variant:"blue",children:e.jsx(g,{code:`String json = "{\\n" +
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
System.out.println(menu);`}),e.jsx(S,{title:"Switch expressions: switch que retorna valor (Java 14+)"}),e.jsx(f,{variant:"info",children:e.jsxs("p",{children:["Les ",e.jsx("strong",{children:"switch expressions"})," són una versió millorada del switch que pot retornar un valor directament, utilitza fletxes (",e.jsx("code",{children:"->"}),") en comptes de ",e.jsx("code",{children:"case/break"}),", i és més compacte."]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"Switch tradicional",variant:"blue",children:e.jsx(g,{code:`String nomDia;
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
};`})})]}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Avantatges del switch expression: no necessita ",e.jsx("code",{children:"break"})," (no hi ha fall-through accidental), pot retornar valors directament, i permet agrupar casos fàcilment."]})}),e.jsx(g,{label:"Agrupar múltiples casos",code:`String tipusDia = switch (dia) {
    case 1, 2, 3, 4, 5 -> "Laborable";
    case 6, 7           -> "Cap de setmana";
    default             -> "Invalid";
};`}),e.jsx(S,{title:"Records: classes de dades simplificades (Java 16+)"}),e.jsx(f,{variant:"info",children:e.jsxs("p",{children:["Els ",e.jsx("strong",{children:"records"})," són una forma molt compacta de crear classes que només serveixen per guardar dades (com un DTO). Java genera automàticament el constructor, getters, ",e.jsx("code",{children:"equals()"}),", ",e.jsx("code",{children:"hashCode()"})," i"," ",e.jsx("code",{children:"toString()"}),"."]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"Classe tradicional",variant:"blue",children:e.jsx(g,{code:`public class Punt {
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
System.out.println(p);     // Punt[x=3, y=5]`})})]}),e.jsx(f,{variant:"warning",title:"Limitacions dels records",children:e.jsxs("p",{children:["Els records són ",e.jsx("strong",{children:"immutables"})," (no tenen setters), no poden heretar d'altres classes, i els seus camps són finals. Són ideals per a dades simples, però no substitueixen les classes normals amb lògica complexa."]})}),e.jsx(S,{title:"Resum de funcionalitats modernes"}),e.jsx(J,{headers:["Funcionalitat","Versió de Java","Per a què serveix","Prioritat a DAM"],rows:[{cells:["var","Java 10+","Inferència de tipus en variables locals","Útil però no essencial"]},{cells:['Text blocks (""")',"Java 13+","Strings multilínia sense \\n","Bo de saber"]},{cells:["Switch expressions","Java 14+","Switch que retorna valor, sense break","Bo de saber"]},{cells:["Records","Java 16+","Classes de dades compactes","Avançat, bo de saber"]}]}),e.jsx(f,{variant:"success",title:"Consell final",children:e.jsxs("p",{children:["Totes aquestes funcionalitats fan el codi més curt i modern, però la base de Java ",e.jsx("strong",{children:"segueix sent la mateixa"}),". Aprendre la sintaxi tradicional primer et garanteix entendre qualsevol codi Java, sigui antic o modern. Aquestes eines modernes les aniràs incorporant naturalment a mesura que guanyis experiència."]})})]})}function QC(){return e.jsxs("div",{children:[e.jsx(S,{title:"Com es pica codi en equip"}),e.jsxs(f,{variant:"info",title:"Que veurem aqui?",children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"Anatomia d'un Projecte Real"})," heu vist COM es dissenya i estructura un projecte des de zero. Aqui veurem la part que falta:",e.jsx("strong",{children:" com es treballa dia a dia amb aquest codi"}),". Com fas servir Git quan sou 5 persones tocant el mateix projecte. Que passa quan obres un fitxer que no has escrit tu. Com trobes i arregles un bug. Com evites que el projecte es converteixi en un caos."]}),e.jsx("p",{style:{marginTop:"8px"},children:"Res de teoria abstracta: tot son situacions reals que viureu des del primer dia de feina."})]}),e.jsx(S,{title:"El teu primer dia: clonar i entendre el projecte"}),e.jsx(f,{variant:"explanation",title:"Arribes a una empresa, t'assignen un projecte. Ara que?",children:e.jsxs("p",{children:["Quan arribes a un equip, el projecte ja existeix. Pot tenir ",e.jsx("strong",{children:"milers de fitxers"})," ","escrits durant mesos o anys per persones que potser ja no hi treballen. El teu primer objectiu no es programar: es ",e.jsx("strong",{children:"entendre que hi ha"}),"."]})}),e.jsx(g,{label:"Pas 1: Clonar el projecte i fer-lo funcionar",showLineNumbers:!0,code:`# El teu company et passa el link del repositori
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
# NO perdis 4 hores intentant arreglar-ho sol el primer dia.`}),e.jsx(f,{variant:"info",title:"Que mires primer per entendre el projecte?",children:e.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"README.md"})," — Que fa l'aplicacio i com executar-la."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"L'estructura de carpetes"})," — Quins packages hi ha (model, service, controller...)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"El model/"})," — Les classes de dades et diuen de que VA l'aplicacio. Si veus ",e.jsx("code",{children:"Reserva.java"}),", ",e.jsx("code",{children:"Taula.java"}),", ",e.jsx("code",{children:"Client.java"}),"... ja saps que es un sistema de reserves."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Els tests"})," — Llegir els tests es la millor forma d'entendre que fa cada classe, perque mostren exemples reals d'us."]})]})}),e.jsx(S,{title:"Git en equip: el flux que seguiras cada dia"}),e.jsx(f,{variant:"explanation",title:"Per que branques?",children:e.jsxs("p",{children:[`Imagina que tu estas fent la funcionalitat de "crear reserves" i un company esta fent "gestionar el menu". Si els dos toqueu el mateix fitxer a la mateixa branca, quan un faci push, l'altre tindra conflictes. Les `,e.jsx("strong",{children:"branques"})," ","solucionen aixo: cada persona treballa en una copia independent del codi, i nomes es fusiona quan esta acabat i revisat."]})}),e.jsx(g,{label:"El cicle complet que repetiras amb cada tasca",showLineNumbers:!0,code:`# ──────────────────────────────────────────
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
# ...i repetir`}),e.jsx(f,{variant:"warning",title:"Errors tipics dels juniors amb Git",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Fer un sol commit gegant amb tots els canvis al final."})," Mal. Si alguna cosa va malament, no pots desfer nomes una part. Commits petits = control fi."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Treballar directament a ",e.jsx("code",{children:"main"})," o ",e.jsx("code",{children:"develop"}),"."]})," Mal. Si la lies, afectes a tothom. Sempre branca propia."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["No fer ",e.jsx("code",{children:"git pull"})," abans de crear una branca."]})," Mal. Estaras treballant sobre codi antic i tindras conflictes segur."]}),e.jsxs("li",{children:[e.jsx("strong",{children:'Commits amb missatges com "coses", "fix", "asd".'})," Mal. D'aqui 3 mesos ningu (ni tu) sabra que fan."]})]})}),e.jsx(S,{title:"Convencions de commits: tots parlem el mateix idioma"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["La majoria d'equips segueixen ",e.jsx("strong",{children:"Conventional Commits"}),": cada missatge comenca amb un prefix que indica el TIPUS de canvi. Aixi, llegint l'historial, saps immediatament que ha passat:"]})}),e.jsx(J,{headers:["Prefix","Quan s'usa","Exemple"],rows:[{cells:["feat:","Has afegit una funcionalitat nova","feat: afegir formulari de reserva"]},{cells:["fix:","Has corregit un bug","fix: corregir calcul del preu quan quantitat es 0"]},{cells:["test:","Has afegit o modificat tests","test: afegir tests per ServeiMenu"]},{cells:["refactor:","Has reorganitzat codi SENSE canviar el que fa","refactor: extreure metode privat buscarTaulaDisponible()"]},{cells:["docs:","Has tocat documentacio","docs: afegir instruccions d'instalacio al README"]},{cells:["chore:","Manteniment (dependencies, configuracio)","chore: actualitzar Spring Boot a 3.2"]}]}),e.jsx(g,{label:"Historial real d'un projecte (git log)",code:`a3f2c1d  feat: implementar cancelacio de reserves        (Marc, fa 2 hores)
b7e4a9f  test: afegir tests per cancelar()               (Marc, fa 2 hores)
c1d8f3e  fix: corregir NPE quan client no te email       (Anna, fa 5 hores)
d4a7b2c  feat: afegir endpoint GET /api/reserves          (Anna, fa 1 dia)
e8c3d6f  refactor: moure validacio al service             (Pau, fa 1 dia)
f2b5a9d  feat: crear classes model (Taula, Reserva...)    (Marc, fa 3 dies)

# Amb un cop d'ull saps QUI ha fet QUE i QUAN.
# Sense prefixos, seria: "coses", "fix", "mas cosas", "ok ya va"... un desastre.`}),e.jsx(S,{title:"Code Review: com es revisa codi de veritat"}),e.jsx(f,{variant:"explanation",title:"Per que ningu fusiona sense que un altre ho miri?",children:e.jsxs("p",{children:["Perque ",e.jsx("strong",{children:"tothom comet errors"}),`. Fins i tot els seniors. Un segon parell d'ulls detecta bugs, incoherencies i codi confus que l'autor no veu perque esta "massa a dins" del problema. A mes, la revisio fa que `,e.jsx("strong",{children:"tot l'equip conegui tot el codi"}),", no nomes la part que ha escrit cadascú."]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Comentari util",variant:"good",children:[e.jsx("p",{style:{marginTop:"8px",fontFamily:"monospace",fontSize:"0.85rem"},children:"Linia 42 de ServeiReserves.java:"}),e.jsxs("p",{style:{marginTop:"4px",fontFamily:"monospace",fontSize:"0.85rem"},children:['"Si ',e.jsx("code",{children:"persones"})," es 0 o negatiu, ",e.jsx("code",{children:"buscarTaulaDisponible()"})," ","retornara null i llançara RuntimeException amb un missatge confus. Millor validar al principi del metode amb un"," ",e.jsx("code",{children:"if (persones <= 0) throw new IllegalArgumentException(...)"}),'"']}),e.jsx("p",{style:{marginTop:"8px",fontSize:"0.85rem"},children:"Explica el problema, per que es un problema, i suggereix la solucio."})]}),e.jsxs(U,{title:"Comentari inutil",variant:"bad",children:[e.jsx("p",{style:{marginTop:"8px",fontFamily:"monospace",fontSize:"0.85rem"},children:'"Aixo esta malament."'}),e.jsx("p",{style:{marginTop:"12px",fontFamily:"monospace",fontSize:"0.85rem"},children:'"Jo ho faria diferent."'}),e.jsx("p",{style:{marginTop:"12px",fontSize:"0.85rem"},children:"No diu que esta malament, ni per que, ni com arreglar-ho."})]})]}),e.jsx(f,{variant:"info",title:"Que mira un revisor?",children:e.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Funciona?"})," El codi fa el que diu que fa? Hi ha casos que no contempla (null, llistes buides, numeros negatius)?"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Te tests?"})," Si has afegit un metode nou, on esta el test que el prova?"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"S'enten?"})," Si el revisor ha de llegir el metode 3 cops per entendre'l, es massa complicat. Cal simplificar o afegir un comentari."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Segueix les convencions?"})," Noms de variables, estructura de packages, estil de codi... l'equip te unes normes i tothom les segueix."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No trenca res existent?"})," Si has tocat un metode que altres parts del codi utilitzen, has comprovat que segueix funcionant?"]})]})}),e.jsx(f,{variant:"warning",title:"Consell important",children:e.jsxs("p",{children:["Quan et deixin 15 comentaris a la teva PR, ",e.jsx("strong",{children:"no ho agafis com un atac"}),". T'estan ajudant a millorar. Els millors devs son els que reben feedback, l'apliquen i aprenen. Si despres d'un mes les teves PRs tenen menys comentaris, vol dir que estas creixent."]})}),e.jsx(S,{title:"Debugging: com es troben i arreglen bugs"}),e.jsx(f,{variant:"explanation",title:"El 50% del temps d'un dev es debugging",children:e.jsxs("p",{children:["No exagero. Molta de la feina diaria es: alguna cosa no funciona, descobrir ",e.jsx("strong",{children:"per que"})," no funciona, i arreglar-ho. El proces es sempre el mateix:"]})}),e.jsx(J,{headers:["Pas","Que fas","Eines"],rows:[{cells:["1. Reproduir","Primer de tot: aconseguir que el bug passi al TEU ordinador. Si no el pots veure, no el pots arreglar. Segueix els passos exactes que descriuen el bug.","L'app executant-se localment"]},{cells:["2. Llegir l'error","EL 90% DELS ERRORS US DIUEN EXACTAMENT QUE PASSA. Llegiu el missatge sencer. Busqueu el nom del fitxer i el numero de linia. Aneu directament alli.","Consola, logs del servidor"]},{cells:["3. Aillar","Reduir el problema al minim. Si falla al fer una reserva, prova nomes la part del servei. Si el servei funciona, el problema es al controller. Divideix i venceras.","Tests unitaris, breakpoints"]},{cells:["4. Entendre",`ABANS d'arreglar, entendre PER QUE falla. Si nomes canvies codi fins que "funciona" sense entendre per que, probablement estas creant un bug nou.`,"Debugger de l'IDE, println temporal"]},{cells:["5. Arreglar + test","Primer escriu un test que REPRODUEIXI el bug (el test ha de fallar). Despres arregla el codi. El test ara ha de passar. Aixi el bug no tornara mai mes.","JUnit, l'IDE"]}]}),e.jsx(g,{label:"Exemple real: trobar i arreglar un bug",showLineNumbers:!0,code:`// BUG REPORTAT: "Quan un client fa una reserva per a 4 persones,
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
// "fix: usar potAcollir() per validar capacitat en buscar taula"`}),e.jsx(f,{variant:"info",title:"L'eina mes potent: el debugger de l'IDE",children:e.jsxs("p",{children:["IntelliJ i VS Code permeten posar ",e.jsx("strong",{children:"breakpoints"})," (punts de parada) al codi. Quan l'execucio arriba alli, s'atura i pots veure el valor de TOTES les variables en aquell moment. Es com congelar el temps i mirar per dins del programa. ",e.jsx("strong",{children:"Apreneu a usar-lo"}),": us estalviara hores."]})}),e.jsx(S,{title:"Llegir codi que no has escrit tu"}),e.jsx(f,{variant:"explanation",title:"La habilitat mes infravalorada",children:e.jsxs("p",{children:["A classe escriviu codi des de zero. A la feina, el 80% del temps llegireu codi que han escrit ALTRES PERSONES, fa mesos o anys. Codi que no te comentaris, que usa patrons que no coneixeu, amb noms de variables que no enteneu. I heu de ",e.jsx("strong",{children:"modificar-lo sense trencar res"}),". Aixo es la realitat."]})}),e.jsx(J,{headers:["Estrategia","Com funciona"],rows:[{cells:["1. Comenca pel test",'Si la classe te tests, llegeix-los PRIMER. Un test diu: "si creo una Taula amb capacitat 4 i faig potAcollir(3), retorna true". Millor que qualsevol documentacio.']},{cells:["2. Busca el punt d'entrada","Si has de tocar un servei, busca QUINES classes el criden. Aixo et diu en quin context s'utilitza. A IntelliJ: Ctrl+Click sobre el nom del metode per veure on s'usa."]},{cells:["3. Segueix el flux d'una peticio","Agafa una accio concreta (ex: crear reserva) i segueix-la des del Controller fins a la BD. Controller → Service → Repository. Aixi entens com flueix la informacio."]},{cells:["4. git blame: qui va escriure aixo?",'La comanda "git blame fitxer.java" et mostra qui va escriure cada linia i en quin commit. Si no entens alguna cosa, saps a qui preguntar.']},{cells:["5. NO canvïis codi que no entens","Si no entens per que una linia existeix, NO la borris. Potser sembla innecessaria pero cobreix un cas que no estàs veient. Pregunta primer."]}]}),e.jsx(g,{label:"git blame: saber qui va escriure cada linia",code:`$ git blame src/service/ServeiReserves.java

a3f2c1d (Marc    2026-01-15)  public Reserva ferReserva(Client client, Date data, int persones) {
a3f2c1d (Marc    2026-01-15)      Taula taula = buscarTaulaDisponible(data, persones);
c1d8f3e (Anna    2026-02-03)      if (taula == null) {
c1d8f3e (Anna    2026-02-03)          throw new RuntimeException("No hi ha taules disponibles");
c1d8f3e (Anna    2026-02-03)      }
a3f2c1d (Marc    2026-01-15)      Reserva reserva = new Reserva(client, taula, data, persones);
e8c3d6f (Pau     2026-02-10)      taula.ocupar();  // Afegit perque hi havia un bug de doble reserva

# Veus que la linia de taula.ocupar() la va afegir Pau el 10 de febrer.
# Si no entens per que, pots preguntar-li directament o mirar el commit e8c3d6f.`}),e.jsx(S,{title:"Manteniment: el codi creix i s'ha de cuidar"}),e.jsx(f,{variant:"explanation",title:"El codi es com un jardi",children:e.jsxs("p",{children:["Si ningu el cuida, creix descontrolat. Les males herbes (codi duplicat, funcions massa llargues, noms confusos) s'acumulen poc a poc fins que el projecte es inmantenible. Per aixo existeix el ",e.jsx("strong",{children:"refactoring"}),": canviar l'estructura del codi ",e.jsx("strong",{children:"sense canviar el que fa"})," per mantenir-lo net."]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"Codi que necessita refactoring",variant:"bad",children:e.jsx(g,{code:`// Metode de 80 linies que fa 5 coses
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
}`})})]}),e.jsx(f,{variant:"info",title:"Quan es fa refactoring?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Quan toques codi existent"}),": si has de modificar un metode i es un embolic, primer el neteges, despres el modifiques."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Quan un metode fa mes d'una cosa"}),`: si necessites un comentari que diu "// ara fem X" enmig d'un metode, probablement X hauria de ser un metode separat.`]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Quan copies i enganxes codi"}),": si la mateixa logica apareix a 3 llocs, crea un metode i crida'l des dels 3 llocs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Regla del Boy Scout"}),`: "Deixa el codi mes net del que l'has trobat". Cada cop que toques un fitxer, millora'l una mica.`]})]})}),e.jsx(f,{variant:"warning",title:"Refactoring NOMES amb tests verds",children:e.jsxs("p",{children:["Mai refactoritzis codi que no te tests. Com sabras que no has trencat res? El proces es: ",e.jsx("strong",{children:"1)"})," comprova que els tests passen,",e.jsx("strong",{children:" 2)"})," refactoritza, ",e.jsx("strong",{children:"3)"})," torna a executar els tests. Si segueixen passant, el refactoring es correcte."]})}),e.jsx(S,{title:"Conflictes de Git: quan dos toquen el mateix"}),e.jsx(f,{variant:"explanation",title:"Els conflictes son normals, no son un error",children:e.jsxs("p",{children:["Si tu modifiques la linia 42 de ",e.jsx("code",{children:"ServeiReserves.java"})," a la teva branca, i un company modifica la ",e.jsx("strong",{children:"mateixa linia 42"})," a la seva branca i fusiona primer, quan tu intentis fusionar la teva, Git no sabra ",e.jsx("strong",{children:"quina versio es la bona"}),". Aixo es un ",e.jsx("strong",{children:"conflicte"}),". Passa constantment i es resol manualment."]})}),e.jsx(g,{label:"Com es veu un conflicte i com es resol",showLineNumbers:!0,code:`# Intentes fusionar la teva branca i Git et diu:
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
git commit -m "fix: resoldre conflicte en ServeiReserves"`}),e.jsxs(me,{children:[e.jsx(T,{title:"Evitar conflictes",variant:"blue",children:e.jsxs("ul",{style:{paddingLeft:"16px",marginTop:"4px"},children:[e.jsxs("li",{children:["Fer ",e.jsx("code",{children:"git pull"})," sovint per estar actualitzat"]}),e.jsx("li",{children:"Branques curtes (2-3 dies, no 2 setmanes)"}),e.jsx("li",{children:"Comunicar a l'equip quins fitxers toques"})]})}),e.jsx(T,{title:"Resoldre conflictes",variant:"yellow",children:e.jsxs("ul",{style:{paddingLeft:"16px",marginTop:"4px"},children:[e.jsx("li",{children:"Llegir les DUES versions amb calma"}),e.jsx("li",{children:"Entendre QUE volia fer cadascú"}),e.jsx("li",{children:"Si dubtes, parla amb el company"}),e.jsx("li",{children:"Executar tests despres de resoldre"})]})})]}),e.jsx(S,{title:"Del teu ordinador al servidor: entorns i desplegament"}),e.jsx(f,{variant:"explanation",title:"El codi passa per varies etapes abans d'arribar als usuaris",children:e.jsx("p",{children:"No es programa directament sobre el servidor que fan servir els clients. Hi ha etapes intermitges per assegurar que tot funciona:"})}),e.jsx(g,{label:"El viatge del codi",code:`El teu ordinador (LOCAL)
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
    MAI es toca directament. Tot arriba a traves de la pipeline.`}),e.jsx(f,{variant:"warning",title:"La regla sagrada",children:e.jsxs("p",{children:[e.jsx("strong",{children:"MAI es prova res directament a produccio."}),` Si un dev intenta "provar una coseta rapida" al servidor real i alguna cosa va malament, pot afectar milers d'usuaris. Per aixo existeix staging.`]})}),e.jsx(S,{title:"Coses que aprendras a la feina, no a classe"}),e.jsxs(me,{children:[e.jsx(T,{title:"Llegiràs mes codi que escriuràs",variant:"blue",children:e.jsx("p",{children:"En un projecte gran, el 80% del codi ja existeix. La teva feina es entendre'l i afegir-hi. Si un metode te 200 linies i nomes has de canviar 3, primer has d'entendre les 200."})}),e.jsx(T,{title:"La regla dels 30 minuts",variant:"yellow",children:e.jsxs("p",{children:["Si portes 30 minuts encallat amb el mateix error, ",e.jsx("strong",{children:"pregunta"}),`. Pero abans de preguntar: llegeix l'error, busca a Google, mira la documentacio. Despres pregunta amb context: "He provat X i Y, em dona Z. Alguna idea?"`]})}),e.jsx(T,{title:"El codi perfecte no existeix",variant:"green",children:e.jsxs("p",{children:["Hi ha codi que funciona, es llegible i te tests. Aixo es",e.jsx("strong",{children:" codi suficientment bo"}),". Buscar la perfeccio es una trampa: et bloqueja i no acabes res. Primer fes que funcioni, despres millora'l si cal."]})}),e.jsx(T,{title:"Les eines que has de dominar",variant:"pink",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Git"})," (de veritat, no nomes push/pull), el ",e.jsx("strong",{children:"debugger"})," de l'IDE,",e.jsx("strong",{children:" Ctrl+Click"})," per navegar pel codi,",e.jsx("strong",{children:" Ctrl+Shift+F"})," per buscar a tot el projecte. Dominar les eines multiplica la teva velocitat per 5."]})})]}),e.jsxs(f,{variant:"success",title:"Resum: el dia a dia picant codi",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"1."})," Fas ",e.jsx("code",{children:"git pull"})," per actualitzar-te."," ",e.jsx("strong",{children:"2."})," Crees una branca per la teva tasca."," ",e.jsx("strong",{children:"3."})," Programes i fas commits petits i clars."," ",e.jsx("strong",{children:"4."})," Obres una Pull Request."," ",e.jsx("strong",{children:"5."})," Un company revisa el teu codi i et dona feedback."," ",e.jsx("strong",{children:"6."})," Arregles el que calgui, es fusiona."," ",e.jsx("strong",{children:"7."})," La pipeline executa tests i desplega."," ",e.jsx("strong",{children:"8."})," Repeteixes amb la propera tasca."]}),e.jsxs("p",{style:{marginTop:"12px"},children:["Entremig: llegiràs codi d'altres, faras debugging, resoldras conflictes de Git, refactoritzaras codi vell, i aprendras cada dia. Tot el que heu apres (classes, funcions, encapsulacio, packages) son les eines que fareu servir per fer tot aixo. Ara ja sabeu ",e.jsx("strong",{children:"com s'utilitzen de veritat"}),"."]})]})]})}const JC=`// Fins ara: aplicacio de CONSOLA
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
//    No cal instal·lar Apache, Tomcat, ni res.`;function tw(){return e.jsxs("div",{children:[e.jsx(S,{title:"Què és Spring Boot?"}),e.jsx(f,{variant:"info",title:"Primer de tot: què és una aplicació web?",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Fins ara, totes les vostres aplicacions funcionaven a la ",e.jsx("strong",{children:"consola"})," (terminal). L'usuari escriu text, el programa respon amb text. Funciona, però ningú usa aplicacions de consola al món real."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Una ",e.jsx("strong",{children:"aplicació web"})," (webapp) és un programa que funciona al",e.jsx("strong",{children:" navegador"})," (Chrome, Firefox, Edge...). L'usuari veu pàgines HTML amb botons, formularis i estils. És el que useu cada dia: Instagram, YouTube, Google, Amazon... tot són aplicacions web."]})]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"Aplicació de Consola (fins ara)",variant:"bad",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Funciona al ",e.jsx("strong",{children:"terminal"})]}),e.jsx("li",{children:"Interacció amb text (System.out + Scanner)"}),e.jsx("li",{children:"Només 1 usuari alhora"}),e.jsx("li",{children:"No es pot compartir fàcilment"}),e.jsx("li",{children:"No té interfície gràfica"})]})}),e.jsx(U,{title:"Aplicació Web (Spring Boot)",variant:"good",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Funciona al ",e.jsx("strong",{children:"navegador"})]}),e.jsx("li",{children:"Interacció amb HTML (botons, formularis, estils)"}),e.jsx("li",{children:"Múltiples usuaris alhora"}),e.jsx("li",{children:"Qualsevol persona amb internet hi pot accedir"}),e.jsx("li",{children:"Interfície gràfica completa (HTML + CSS)"})]})})]}),e.jsx(g,{label:"El que fèieu fins ara: aplicació de consola",code:JC,showLineNumbers:!0}),e.jsx(g,{label:"El que fareu ara: aplicació web amb Spring Boot",code:WC,showLineNumbers:!0}),e.jsx(S,{title:"Com Funciona una Aplicació Web?"}),e.jsx(f,{variant:"explanation",title:"El model Client-Servidor",children:e.jsx("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:e.jsxs("p",{children:["Una webapp té ",e.jsx("strong",{children:"dues parts"})," que es comuniquen:"]})})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"Client (el navegador)",variant:"blue",children:[e.jsx("p",{style:{marginBottom:"8px"},children:"El que l'usuari veu i toca. Chrome, Firefox, Edge..."}),e.jsxs("ul",{style:{paddingLeft:"20px"},children:[e.jsxs("li",{children:["Mostra pàgines ",e.jsx("strong",{children:"HTML"})]}),e.jsxs("li",{children:["Aplica estils amb ",e.jsx("strong",{children:"CSS"})]}),e.jsxs("li",{children:["Envia ",e.jsx("strong",{children:"peticions"})," al servidor"]}),e.jsxs("li",{children:["Rep i mostra les ",e.jsx("strong",{children:"respostes"})]})]})]}),e.jsxs(U,{title:"Servidor (Spring Boot)",variant:"good",children:[e.jsx("p",{style:{marginBottom:"8px"},children:"El vostre programa Java que corre al servidor."}),e.jsxs("ul",{style:{paddingLeft:"20px"},children:[e.jsxs("li",{children:["Rep les ",e.jsx("strong",{children:"peticions"})," del navegador"]}),e.jsxs("li",{children:["Executa la ",e.jsx("strong",{children:"lògica"})," (Java)"]}),e.jsxs("li",{children:["Consulta la ",e.jsx("strong",{children:"base de dades"})," si cal"]}),e.jsxs("li",{children:["Retorna pàgines ",e.jsx("strong",{children:"HTML"})," al navegador"]})]})]})]}),e.jsx(f,{variant:"info",title:"El protocol HTTP: com es comuniquen",children:e.jsx("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:e.jsxs("p",{children:["Quan escrius una URL al navegador (com ",e.jsx("code",{children:"localhost:8080/hola"}),"), el navegador envia una ",e.jsx("strong",{children:"petició HTTP"})," al servidor. El servidor processa la petició i retorna una ",e.jsx("strong",{children:"resposta"})," (normalment una pàgina HTML)."]})})}),e.jsx(g,{label:"Què passa quan escrius una URL al navegador?",code:KC,showLineNumbers:!0}),e.jsx(J,{headers:["Mètode HTTP","Què fa","Exemple","En Spring Boot"],rows:[{cells:["GET","Demana informació (veure una pàgina)","Visitar /animals","@GetMapping"]},{cells:["POST","Envia informació (enviar un formulari)","Crear un animal nou","@PostMapping"]}]}),e.jsx(f,{variant:"warning",title:"No cal memoritzar HTTP ara",children:e.jsxs("p",{children:["De moment només necessiteu saber que el navegador ",e.jsx("strong",{children:"demana"})," (GET) i el servidor ",e.jsx("strong",{children:"respon"})," (HTML). La resta l'anirem veient a la pràctica."]})}),e.jsx(S,{title:"Què és Spring Boot exactament?"}),e.jsx(f,{variant:"success",title:"Spring Boot = Java per fer aplicacions web",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Spring Boot"})," és un ",e.jsx("em",{children:"framework"})," (conjunt d'eines i llibreries) que fa que crear aplicacions web amb Java sigui ",e.jsx("strong",{children:"ràpid i senzill"}),"."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Sense Spring Boot, crear una webapp amb Java requereix configurar desenes de fitxers XML, instal·lar un servidor web (Tomcat), gestionar dependències manualment... Spring Boot fa tot això ",e.jsx("strong",{children:"automàticament"}),"."]})]})}),e.jsx(J,{headers:["Sense Spring Boot","Amb Spring Boot"],rows:[{cells:["Configurar Tomcat manualment","Servidor web inclòs, arranca sol"]},{cells:["Desenes de fitxers XML de configuració","Quasi zero configuració"]},{cells:["Gestionar dependències a mà","pom.xml les gestiona automàticament"]},{cells:["Setmanes per tenir algo funcionant",'Minuts per tenir "Hola Món"']}]}),e.jsx(f,{variant:"explanation",title:"Per què Spring Boot i no un altre?",children:e.jsx("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:e.jsxs("p",{children:["Spring Boot és el framework ",e.jsx("strong",{children:"més utilitzat"})," del món Java. El trobareu a la gran majoria d'ofertes de feina de Java a Espanya i Europa. Aprendre Spring Boot és ",e.jsx("strong",{children:"directament aplicable"})," al món laboral."]})})}),e.jsx(S,{title:"MVC: Ja el Sabeu!"}),e.jsx(f,{variant:"success",title:"La bona notícia: ja coneixeu MVC",children:e.jsx("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:e.jsxs("p",{children:["Spring Boot utilitza el patró ",e.jsx("strong",{children:"MVC"})," que ja domineu. L'única diferència és ",e.jsx("strong",{children:"on es mostra"})," el resultat:"]})})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"MVC a Consola (el que ja sabeu)",variant:"blue",children:[e.jsx(g,{code:YC}),e.jsxs("p",{style:{marginTop:"8px"},children:["La ",e.jsx("strong",{children:"View"})," és una classe Java amb",e.jsx("code",{children:" System.out.println"})]})]}),e.jsxs(U,{title:"MVC a Spring Boot (el que aprendreu)",variant:"good",children:[e.jsx(g,{code:XC}),e.jsxs("p",{style:{marginTop:"8px"},children:["La ",e.jsx("strong",{children:"View"})," és un fitxer",e.jsx("code",{children:" .html"})," amb Thymeleaf"]})]})]}),e.jsx(J,{headers:["Capa MVC","A Consola (fins ara)","A Spring Boot (ara)"],rows:[{cells:["Model","Classes Java (Animal, Gos...)","Les MATEIXES classes Java!"]},{cells:["View (Vista)","Menu.java amb System.out","Fitxers .html amb Thymeleaf"]},{cells:["Controller","Classe Java que coordina","Classe Java amb @Controller"]},{cells:["On es veu","Al terminal","Al navegador"]}]}),e.jsx(f,{variant:"success",title:"El Model NO canvia!",children:e.jsx("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:e.jsxs("p",{children:["Les classes del Model (",e.jsx("code",{children:"Animal"}),", ",e.jsx("code",{children:"Gos"}),", ",e.jsx("code",{children:"Gat"}),"...) són ",e.jsx("strong",{children:"exactament les mateixes"}),". Herència, polimorfisme, classes abstractes... tot el que heu après serveix tal qual. L'únic que canvia és com es mostra la informació a l'usuari (HTML en lloc de System.out)."]})})}),e.jsx(S,{title:"Estructura d'un Projecte Spring Boot"}),e.jsx(f,{variant:"explanation",children:e.jsx("p",{children:"Un projecte Spring Boot segueix una estructura estàndard. No la heu de memoritzar, l'anireu aprenent a mesura que la useu:"})}),e.jsx(g,{label:"Estructura típica d'un projecte Spring Boot",code:ZC}),e.jsx(J,{headers:["Carpeta/Fitxer","Què és","Equivalent a consola"],rows:[{cells:["controller/","Classes que reben peticions HTTP","El Main que gestionava el flux"]},{cells:["model/","Classes de dades (Animal, Gos...)","Exactament el mateix!"]},{cells:["templates/","Pàgines HTML (la Vista)","Menu.java amb System.out"]},{cells:["static/css/","Estils CSS per fer-ho bonic","No existia a consola"]},{cells:["application.properties","Configuració (port, base de dades...)","No existia a consola"]},{cells:["pom.xml","Llista de dependències (llibreries)",'Com un "package.json"']}]}),e.jsx(S,{title:"Què Necessites Instal·lat?"}),e.jsx(g,{label:"Requisits",code:ew,showLineNumbers:!0}),e.jsxs(me,{children:[e.jsxs(T,{title:"JDK 21",variant:"blue",children:[e.jsxs("p",{children:["El que ja useu a classe. Si no, descarregueu-lo de ",e.jsx("strong",{children:"adoptium.net"}),"."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Comproveu amb: ",e.jsx("code",{children:"java --version"})]})]}),e.jsx(T,{title:"IntelliJ IDEA o VS Code",variant:"yellow",children:e.jsxs("p",{children:["Qualsevol dels dos serveix. ",e.jsx("strong",{children:"IntelliJ Community"})," (gratuït) o",e.jsx("strong",{children:" VS Code"})," amb ",e.jsx("em",{children:"Extension Pack for Java"})," + ",e.jsx("em",{children:"Spring Boot Extension Pack"}),"."]})}),e.jsxs(T,{title:"Spring Initializr",variant:"green",children:[e.jsxs("p",{children:["Web per crear projectes Spring Boot en 1 minut: ",e.jsx("strong",{children:"start.spring.io"})]}),e.jsx("p",{style:{marginTop:"8px"},children:"El farem servir a la pròxima secció."})]})]}),e.jsx(S,{title:"Resum"}),e.jsx(f,{variant:"success",title:"Què hem après?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Una ",e.jsx("strong",{children:"aplicació web"})," funciona al navegador, no al terminal."]}),e.jsxs("li",{children:["El ",e.jsx("strong",{children:"navegador"})," (client) envia peticions i el ",e.jsx("strong",{children:"servidor"})," (Spring Boot) respon amb HTML."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Spring Boot"})," és un framework Java que fa fàcil crear aplicacions web."]}),e.jsxs("li",{children:["Ja sabeu ",e.jsx("strong",{children:"MVC"}),": a Spring Boot és el mateix, però la Vista és HTML en lloc de System.out."]}),e.jsxs("li",{children:["El ",e.jsx("strong",{children:"Model no canvia"}),": les vostres classes Java serveixen tal qual."]}),e.jsx("li",{children:"Necessiteu: JDK 21, IntelliJ IDEA o VS Code, i Spring Initializr."})]})}),e.jsx(f,{variant:"info",title:"Següent pas",children:e.jsxs("p",{children:["A la pròxima secció crearem el ",e.jsx("strong",{children:"primer projecte Spring Boot"}),' i veureu "Hola Món" al navegador. Tot el que heu après fins ara (Java, POO, MVC) segueix sent útil. Només canvia on es mostra el resultat.']})})]})}const rw=`// A start.spring.io, configura aixo:
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
// Clica "GENERATE" -> descarrega un .zip`,aw=`// AQUEST FITXER JA EXISTEIX - NO EL TOQUEU
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
}`;function mw(){return e.jsxs("div",{children:[e.jsx(S,{title:"Primer Projecte: Hola Món al Navegador"}),e.jsx(S,{title:"Pas 1: Crear el Projecte a start.spring.io"}),e.jsx(f,{variant:"info",title:"Spring Initializr: el creador de projectes",children:e.jsx("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:e.jsxs("p",{children:["Obre el navegador i ves a ",e.jsx("strong",{children:"start.spring.io"}),". Aquesta web crea l'esquelet del projecte amb tota la configuració feta. Només has de triar les opcions i descarregar el .zip."]})})}),e.jsx(g,{label:"Configuració a start.spring.io",code:rw}),e.jsx(J,{headers:["Camp","Valor","Per què"],rows:[{cells:["Project","Maven","Gestor de dependències (el més usat amb Spring)"]},{cells:["Language","Java","El que ja sabeu!"]},{cells:["Spring Boot","3.4.x","La versió estable més recent"]},{cells:["Group","com.exemple","Identifica la vostra organització (com el package)"]},{cells:["Artifact","holamundo","El nom del projecte"]},{cells:["Packaging","Jar","Format de distribució (el més senzill)"]},{cells:["Java","21","Versió de Java (la que useu habitualment a classe)"]}]}),e.jsx(f,{variant:"warning",title:"Dependencies: no us les oblideu!",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Cliqueu ",e.jsx("strong",{children:"ADD DEPENDENCIES"})," i afegiu:"]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Spring Web"})," — per crear aplicacions web (controllers, peticions HTTP)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Thymeleaf"})," — per crear pàgines HTML dinàmiques des de Java"]})]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Cliqueu ",e.jsx("strong",{children:"GENERATE"}),", descarregueu el .zip, descomprimiu-lo i obriu la carpeta amb el vostre IDE:"]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"IntelliJ IDEA"}),": File → Open → seleccioneu la carpeta del projecte."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"VS Code"}),": File → Open Folder → seleccioneu la carpeta del projecte. Assegureu-vos de tenir instal·lats ",e.jsx("em",{children:"Extension Pack for Java"})," i",e.jsx("em",{children:" Spring Boot Extension Pack"}),"."]})]})]})}),e.jsxs(f,{variant:"explanation",title:"Primera vegada amb l'IDE?",children:[e.jsx("p",{children:"Quan obriu el projecte per primera vegada, l'IDE descarregarà les dependències automàticament. Pot trigar 1-2 minuts. Espereu fins que la barra de progrés de baix desaparegui."}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"IntelliJ IDEA"}),': Si us demana "Trust Project", cliqueu que sí.']}),e.jsxs("li",{children:[e.jsx("strong",{children:"VS Code"}),": Accepteu la notificació per importar el projecte Maven."]})]})]}),e.jsx(S,{title:"Pas 2: Entendre el que ja existeix"}),e.jsx(f,{variant:"info",children:e.jsxs("p",{children:["Després de descomprimir, el projecte ja té fitxers creats. El més important és ",e.jsx("code",{children:"HolamundoApplication.java"}),", que és el punt d'entrada (com el ",e.jsx("code",{children:"Main"})," que ja coneixeu):"]})}),e.jsx(g,{label:"HolamundoApplication.java (generat automàticament)",code:aw,showLineNumbers:!0}),e.jsx(f,{variant:"explanation",title:"Què fa exactament @SpringBootApplication?",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Aquesta anotació ",e.jsx("strong",{children:"no és màgia"}),". És una combinació de tres anotacions que fan tres coses concretes:"]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"@ComponentScan"})," — Recorre totes les classes del package (",e.jsx("code",{children:"com.exemple.holamundo"}),") i subpackages buscant classes amb anotacions com ",e.jsx("code",{children:"@Controller"}),", ",e.jsx("code",{children:"@Service"}),",",e.jsx("code",{children:" @Repository"}),". Les registra perquè Spring les pugui usar.",e.jsx("br",{}),e.jsx("em",{children:"Per això cal que els Controllers estiguin dins del mateix package principal o subpackages."})]}),e.jsxs("li",{style:{marginTop:"6px"},children:[e.jsx("strong",{children:"@EnableAutoConfiguration"})," — Mira què hi ha al",e.jsx("code",{children:" pom.xml"})," (les dependències) i configura Spring en conseqüència. Heu afegit ",e.jsx("code",{children:"spring-boot-starter-web"}),"? Doncs arranca un servidor web. Heu afegit ",e.jsx("code",{children:"spring-boot-starter-thymeleaf"}),"? Doncs prepara Thymeleaf. Tot automàtic segons el que necessiteu."]}),e.jsxs("li",{style:{marginTop:"6px"},children:[e.jsx("strong",{children:"@SpringBootConfiguration"})," — Marca aquesta classe com a classe de configuració principal de l'aplicació."]})]})]})}),e.jsx(f,{variant:"info",title:"I el mètode main()?",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["És el ",e.jsx("code",{children:"main()"})," Java de tota la vida, el mateix que feieu a consola. La línia ",e.jsx("code",{children:"SpringApplication.run(HolamundoApplication.class, args)"})," fa tres coses:"]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsx("li",{children:"Llegeix les anotacions de la classe i aplica la configuració"}),e.jsxs("li",{children:["Arranca el ",e.jsx("strong",{children:"servidor web Tomcat"})," (que Spring porta incrustat)"]}),e.jsxs("li",{children:["Es queda escoltant al port ",e.jsx("strong",{children:"8080"})," peticions del navegador"]})]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Normalment ",e.jsx("strong",{children:"no caldrà que toqueu aquest fitxer"}),", però ara ja sabeu què fa cada línia. Res de màgia."]})]})}),e.jsx(S,{title:"Pas 3: Crear el Controller"}),e.jsx(f,{variant:"success",title:"El Controller: on arriben les peticions",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["El ",e.jsx("strong",{children:"Controller"})," és la classe que rep les peticions del navegador i decideix què retornar. És com el ",e.jsx("code",{children:"Menu.java"})," que fèieu a consola, però en lloc de ",e.jsx("code",{children:"System.out"}),", retorna pàgines HTML."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Creeu la carpeta ",e.jsx("code",{children:"controller/"})," dins del package principal i afegiu aquest fitxer:"]})]})}),e.jsx(g,{label:"HolaController.java (CREEU-LO VOSALTRES)",code:nw,showLineNumbers:!0}),e.jsx(f,{variant:"explanation",title:"Línia per línia: què fa cada cosa?",children:e.jsx("p",{children:"Desglossem el controller:"})}),e.jsx(g,{label:"El Controller explicat pas a pas",code:iw,showLineNumbers:!0}),e.jsx(J,{headers:["Element","Què fa","Equivalent a consola"],rows:[{cells:["@Controller",'Diu a Spring: "aquesta classe rep peticions"',"No tenia equivalent"]},{cells:['@GetMapping("/hola")',"Quan el navegador visita /hola, executa aquest mètode","case 1: del switch al Menu"]},{cells:["Model model",'Una "motxilla" per passar dades al HTML',"Les variables que passàveu a System.out"]},{cells:["model.addAttribute()","Posa una dada dins la motxilla","Preparar el text per mostrar"]},{cells:['return "hola"',"Retorna la pàgina templates/hola.html","El System.out que mostrava el resultat"]}]}),e.jsx(S,{title:"Pas 4: Crear les Pàgines HTML"}),e.jsx(f,{variant:"info",title:"Per què existeix Thymeleaf? El problema que soluciona",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["Imaginem que volem mostrar un nom dinàmic a una pàgina HTML. ",e.jsx("strong",{children:"Sense Thymeleaf"}),", hauríem de construir l'HTML com un String dins del codi Java:"]}),e.jsx(g,{code:`// HORRIBLE: construir HTML com a String
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
// - Si afegeixes bucles o condicionals, es un infern`}),e.jsxs("p",{style:{marginTop:"12px"},children:[e.jsx("strong",{children:"Thymeleaf soluciona això"}),": escriviu HTML normal en fitxers",e.jsx("code",{children:" .html"})," separats, i afegiu uns atributs especials on voleu dades dinàmiques. El Controller passa les dades, Thymeleaf les posa al seu lloc.",e.jsx("strong",{children:"Separació neta entre lògica (Java) i presentació (HTML)."})]})]})}),e.jsx(f,{variant:"success",title:"Thymeleaf es redueix a 4 atributs",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsxs("p",{children:["No us deixeu intimidar: ",e.jsx("strong",{children:"tot Thymeleaf es resumeix en pocs atributs"}),". Aquests són els que farem servir al curs:"]}),e.jsx(J,{headers:["Atribut","Què fa","Exemple"],rows:[{cells:['th:text="${var}"',"Posa el valor de la variable com a text",'<span th:text="${nom}">Mundo</span>']},{cells:['th:each="x : ${lista}"',"Bucle (com el for-each de Java)",'<li th:each="a : ${animals}" th:text="${a.nom}"></li>']},{cells:['th:if="${cond}"',"Mostra l'element només si la condició és certa",'<p th:if="${usuari != null}">Hola!</p>']},{cells:['th:href="@{/ruta}"',"Enllaç a una altra pàgina de l'app",'<a th:href="@{/animals}">Veure animals</a>']}]}),e.jsxs("p",{style:{marginTop:"12px"},children:[e.jsx("strong",{children:"És HTML normal!"})," Podeu escriure CSS i JavaScript com sempre. Thymeleaf només afegeix aquests atributs per a la part dinàmica. Fins i tot podeu obrir el fitxer ",e.jsx("code",{children:".html"})," al navegador directament (sense arrancar Spring) i veureu el disseny amb els valors per defecte."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Les pàgines HTML van a la carpeta ",e.jsx("code",{children:"src/main/resources/templates/"}),"."]})]})}),e.jsx(g,{label:"index.html — La pàgina d'inici",code:sw,showLineNumbers:!0}),e.jsx(g,{label:"hola.html — La pàgina amb dades dinàmiques",code:lw,showLineNumbers:!0}),e.jsx(f,{variant:"explanation",title:"Com funciona Thymeleaf?",children:e.jsx("p",{children:"La connexió entre Java i HTML:"})}),e.jsx(g,{label:"La connexió Controller → HTML",code:ow}),e.jsx(J,{headers:["Thymeleaf","Què fa","Exemple"],rows:[{cells:['th:text="${variable}"',"Substitueix el text pel valor de la variable",'<span th:text="${nom}"> → Mundo']},{cells:["${variable}","Accedeix al valor posat amb model.addAttribute()",'${nom} → el valor de "nom"']},{cells:['xmlns:th="..."',"Activa Thymeleaf al HTML (posar al tag <html>)","Necessari a cada pàgina"]}]}),e.jsx(S,{title:"Pas 5: Arrancar i Provar!"}),e.jsx(g,{label:"Com arrancar el projecte",code:cw}),e.jsx(f,{variant:"success",title:"Prova-ho!",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsx("p",{children:"Si tot ha anat bé, obre el navegador i visita:"}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"http://localhost:8080"})," → Veuràs la pàgina d'inici"]}),e.jsxs("li",{children:[e.jsx("code",{children:"http://localhost:8080/hola"}),' → Veuràs "Hola, Mundo!" amb el missatge']})]}),e.jsxs("p",{style:{marginTop:"12px",padding:"12px",background:"rgba(0,0,0,0.04)",borderRadius:"8px"},children:[e.jsx("strong",{children:"Felicitats!"})," Heu creat la vostra primera aplicació web. El navegador ha enviat una petició GET, Spring Boot ha executat el Controller, ha posat les dades al Model, i Thymeleaf ha generat la pàgina HTML. Tot el MVC en acció!"]})]})}),e.jsx(g,{label:"Estructura final del projecte",code:uw}),e.jsx(S,{title:"Pas 6: Exercici — Nom Dinàmic per URL"}),e.jsx(f,{variant:"info",title:"Ara et toca a tu!",children:e.jsxs("p",{children:[`Fins ara el nom "Mundo" estava fixe al codi. Ara farem que l'usuari pugui enviar el seu nom `,e.jsx("strong",{children:"des de la URL"}),", com fan les webs reals."]})}),e.jsx(g,{label:"Exercici: rebre el nom per URL",code:dw,showLineNumbers:!0}),e.jsx(g,{label:"@RequestParam explicat",code:pw,showLineNumbers:!0}),e.jsx(f,{variant:"success",title:"Prova-ho amb el teu nom!",children:e.jsxs("div",{style:{fontSize:"1.05em",lineHeight:"1.9"},children:[e.jsx("p",{children:"Afegeix el mètode al Controller, reinicia l'aplicació i prova:"}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsx("li",{children:e.jsx("code",{children:"http://localhost:8080/saluda?nom=Anna"})}),e.jsx("li",{children:e.jsx("code",{children:"http://localhost:8080/saluda?nom=Marc"})}),e.jsx("li",{children:e.jsx("code",{children:"http://localhost:8080/saluda?nom=ElTeuNom"})})]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Canvia el ",e.jsx("code",{children:"?nom="})," i veuràs com la pàgina canvia! Això és una pàgina ",e.jsx("strong",{children:"dinàmica"}),": el contingut depèn de les dades que envia l'usuari."]})]})}),e.jsx(S,{title:"Errors Típics del Primer Projecte"}),e.jsx(J,{headers:["Error","Causa","Solució"],rows:[{cells:["Whitelabel Error Page (404)","Spring no troba la pàgina HTML","Comprova que el fitxer .html està a templates/ i que el return del controller coincideix amb el nom del fitxer (sense .html)"]},{cells:["El port 8080 ja està en ús","Una altra aplicació usa el port","Atura l'altra aplicació o canvia el port a application.properties: server.port=8081"]},{cells:["${nom} apareix literalment al HTML","Falta el xmlns:th de Thymeleaf al tag <html>",'Afegeix xmlns:th="http://www.thymeleaf.org" al tag <html>']},{cells:["El Controller no funciona","La classe no està dins del package principal","El Controller HA d'estar dins del package de HolamundoApplication o un sub-package (ex: controller/)"]},{cells:["Error de compilació amb imports","IntelliJ no reconeix les classes de Spring","Espereu que IntelliJ descarregui les dependències (barra de progrés inferior)"]}]}),e.jsx(S,{title:"Resum"}),e.jsxs(me,{children:[e.jsx(T,{title:"start.spring.io",variant:"blue",children:e.jsx("p",{children:"Crea el projecte amb Spring Web + Thymeleaf. Descarrega .zip i obre amb IntelliJ."})}),e.jsx(T,{title:"Controller",variant:"yellow",children:e.jsxs("p",{children:[e.jsx("code",{children:"@Controller"})," + ",e.jsx("code",{children:"@GetMapping"})," per rebre peticions del navegador i retornar pàgines HTML."]})}),e.jsx(T,{title:"Thymeleaf",variant:"green",children:e.jsxs("p",{children:[e.jsx("code",{children:'th:text="${variable}"'})," per mostrar dades de Java dins de l'HTML."]})}),e.jsx(T,{title:"Model",variant:"pink",children:e.jsxs("p",{children:[e.jsx("code",{children:'model.addAttribute("nom", valor)'})," per passar dades del Controller al HTML."]})})]}),e.jsx(f,{variant:"success",title:"Què hem aconseguit?",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsx("li",{children:"Hem creat un projecte Spring Boot des de zero."}),e.jsx("li",{children:"Hem vist una pàgina web al navegador feta amb Java."}),e.jsx("li",{children:"Hem passat dades de Java a HTML amb Thymeleaf."}),e.jsxs("li",{children:["Hem rebut dades de l'usuari per URL amb ",e.jsx("code",{children:"@RequestParam"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Següent pas"}),": formularis HTML per enviar dades de veritat (POST)."]})]})})]})}const hw="_wrapper_1jc92_1",fw="_title_1jc92_17",xw="_diagram_1jc92_35",Cl={wrapper:hw,title:fw,diagram:xw},gw="/programacio-0485LIVE/diagrams/";function qe({src:t,title:r}){return e.jsxs("div",{className:Cl.wrapper,children:[r&&e.jsx("div",{className:Cl.title,children:r}),e.jsx("div",{className:Cl.diagram,children:e.jsx("img",{src:`${gw}${t}.svg`,alt:r||"Diagrama"})})]})}function vw(){return e.jsxs("div",{children:[e.jsx(S,{title:"Diagrames de Classes UML"}),e.jsxs(f,{variant:"explanation",title:"Que es un diagrama de classes?",children:[e.jsxs("p",{children:["Un ",e.jsx("strong",{children:"diagrama de classes"})," es una representacio visual de les classes d'un sistema, els seus ",e.jsx("strong",{children:"atributs"}),", ",e.jsx("strong",{children:"metodes"})," i les",e.jsx("strong",{children:" relacions"}),` entre elles. Es el "planol" d'un sistema orientat a objectes: abans de programar, dissenyem l'estructura del codi amb aquest diagrama.`]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Forma part de l'",e.jsx("strong",{children:"UML"})," (Unified Modeling Language), un estandard internacional per modelar sistemes de programari."]})]}),e.jsx(S,{title:"Elements d'un diagrama de classes"}),e.jsx(J,{headers:["Element","Representacio","Descripcio"],rows:[{group:"Classe"},{cells:["Nom de la classe","Seccio superior del rectangle","El nom de la classe, en majuscula inicial (ex: Animal)"]},{cells:["Atributs","Seccio central del rectangle","Les variables de la classe amb el seu tipus (ex: -nom: String)"]},{cells:["Metodes","Seccio inferior del rectangle","Les funcions de la classe amb parametres i retorn (ex: +getNom(): String)"]},{group:"Visibilitat"},{cells:["+ public","Signe +","Accessible des de qualsevol classe"]},{cells:["- private","Signe -","Accessible nomes dins de la mateixa classe"]},{cells:["# protected","Signe #","Accessible des de la mateixa classe i les subclasses"]},{group:"Relacions"},{cells:["Herencia","--|> (fletxa buida)",`Una classe filla hereta d'una classe pare ("es un")`]},{cells:["Composicio","*-- (diamant ple)",'Una classe conte una altra; si el contenidor desapareix, el contingut tambe ("te un" fort)']},{cells:["Agregacio","o-- (diamant buit)",'Una classe conte una altra, pero poden existir independentment ("te un" debil)']},{cells:["Associacio","-- (linia simple)",'Dues classes es relacionen ("usa")']},{cells:["Dependencia","..> (linia discontinua)","Una classe usa temporalment una altra"]}]}),e.jsx(S,{title:"Diagrama basic: una classe"}),e.jsx(f,{variant:"info",title:"Estructura d'una classe",children:e.jsxs("p",{children:["Cada classe es representa com un ",e.jsx("strong",{children:"rectangle dividit en tres seccions"}),": el nom a dalt, els atributs al mig i els metodes a baix. Els simbols ",e.jsx("code",{children:"+"}),",",e.jsx("code",{children:" -"})," i ",e.jsx("code",{children:"#"})," indiquen la visibilitat."]})}),e.jsx(qe,{src:"classes-animal",title:"Classe Animal"}),e.jsx(S,{title:"Relacions entre classes"}),e.jsx(f,{variant:"info",children:e.jsx("p",{children:"Les relacions entre classes son la part mes important d'un diagrama de classes. Indiquen com les classes interactuen entre elles i quines dependencies existeixen."})}),e.jsx(J,{headers:["Relacio","Simbol UML","Significat","Exemple"],rows:[{cells:["Herencia","<|--",'"es un"',"Gos extends Animal: un Gos ES UN Animal"]},{cells:["Composicio","*--",'"te un" (fort)',"Cotxe conte Motor: si el Cotxe desapareix, el Motor tambe"]},{cells:["Agregacio","o--",'"te un" (debil)',"Equip conte Jugadors: els Jugadors existeixen sense l'Equip"]},{cells:["Associacio","-->",'"usa"',"Professor ensenya Alumne: es relacionen pero son independents"]},{cells:["Dependencia","..>",'"usa temporalment"',"Un metode rep un objecte com a parametre"]}]}),e.jsx(S,{title:"Exemple: Herencia"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["La ",e.jsx("strong",{children:"herencia"})," es representa amb una fletxa buida que apunta de la classe filla cap a la classe pare. En aquest exemple, ",e.jsx("code",{children:"Gos"})," i ",e.jsx("code",{children:"Gat"})," hereten de ",e.jsx("code",{children:"Animal"}),". Les classes filles tenen els seus propis metodes (",e.jsx("code",{children:"bordar()"})," i ",e.jsx("code",{children:"miolar()"}),") a mes dels heretats."]})}),e.jsx(qe,{src:"classes-herencia",title:"Herencia: Animal, Gos i Gat"}),e.jsx(S,{title:"Exemple complet: Sistema de Biblioteca"}),e.jsxs(f,{variant:"explanation",children:[e.jsx("p",{children:"Aquest diagrama mostra el sistema de biblioteca que ja coneixem del curs. Fixa't en:"}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Composicio"})," (",e.jsx("code",{children:"*--"}),"): la Biblioteca ",e.jsx("em",{children:"conte"})," Llibres. Si la Biblioteca desapareix, els seus Llibres tambe."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Associacio"})," (",e.jsx("code",{children:"-->"}),"): cada Llibre ",e.jsx("em",{children:"esta escrit per"})," un Autor. L'Autor existeix independentment del Llibre."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Multiplicitat"}),": ",e.jsx("code",{children:'"1"'})," i ",e.jsx("code",{children:'"0..*"'})," indiquen quants objectes participen en la relacio (una Biblioteca te de 0 a molts Llibres)."]})]})]}),e.jsx(qe,{src:"classes-biblioteca",title:"Sistema de Biblioteca"}),e.jsx(S,{title:"Exemple avancat: Sistema RPG"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Un exemple mes complex d'un sistema de gestio de campanyes RPG (joc de rol). Fixa't en com combina ",e.jsx("strong",{children:"herencia"})," (Character amb PlayableCharacter i NonPlayableCharacter), ",e.jsx("strong",{children:"composicio"})," (Campaign conte Sessions),",e.jsx("strong",{children:" enumeracions"})," (Availability) i ",e.jsx("strong",{children:"multiples associacions"}),"."]})}),e.jsx(qe,{src:"classes-rpg",title:"Sistema de Campanyes RPG"}),e.jsx(S,{title:"Com llegir un diagrama de classes"}),e.jsxs(me,{children:[e.jsx(T,{title:"1. Llegeix de dalt a baix",variant:"blue",children:e.jsxs("p",{children:["Comenca per les classes mes ",e.jsx("strong",{children:"generals"})," (les pare) i baixa cap a les mes ",e.jsx("strong",{children:"especifiques"})," (les filles). Aixo et dona una visio general de la jerarquia."]})}),e.jsx(T,{title:"2. Segueix les fletxes",variant:"yellow",children:e.jsxs("p",{children:["Les fletxes indiquen les ",e.jsx("strong",{children:"relacions"})," entre classes. Fixa't en el tipus de fletxa (herencia, composicio, associacio) per entendre com es connecten."]})}),e.jsx(T,{title:"3. Comprova les multiplicitats",variant:"green",children:e.jsxs("p",{children:["Els numeros a les linies (",e.jsx("code",{children:"1"}),", ",e.jsx("code",{children:"0..*"}),", ",e.jsx("code",{children:"1..*"}),") indiquen ",e.jsx("strong",{children:"quants objectes"})," participen en cada relacio. Per exemple,",e.jsx("code",{children:" 1"})," a ",e.jsx("code",{children:"0..*"}),' vol dir "un a molts".']})}),e.jsx(T,{title:"4. Identifica la classe central",variant:"pink",children:e.jsxs("p",{children:["Busca la classe amb ",e.jsx("strong",{children:"mes relacions"}),": sol ser la classe principal del sistema. En l'exemple de la biblioteca, ",e.jsx("code",{children:"Biblioteca"})," es el nucli perque gestiona tot el sistema."]})})]}),e.jsx(f,{variant:"success",title:"Resum",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Un ",e.jsx("strong",{children:"diagrama de classes"})," es el planol visual d'un sistema orientat a objectes."]}),e.jsxs("li",{children:["Cada classe es representa amb un ",e.jsx("strong",{children:"rectangle"})," amb tres seccions: nom, atributs i metodes."]}),e.jsxs("li",{children:["La ",e.jsx("strong",{children:"visibilitat"})," s'indica amb ",e.jsx("code",{children:"+"})," (public), ",e.jsx("code",{children:"-"})," (private) i ",e.jsx("code",{children:"#"})," (protected)."]}),e.jsxs("li",{children:["Les ",e.jsx("strong",{children:"relacions"})," principals son: herencia, composicio, agregacio, associacio i dependencia."]}),e.jsxs("li",{children:["Les ",e.jsx("strong",{children:"multiplicitats"})," indiquen quants objectes participen en una relacio."]}),e.jsxs("li",{children:["Sempre es recomanable ",e.jsx("strong",{children:"dissenyar el diagrama abans de programar"}),"."]})]})})]})}const jw=`public class Salutador {
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
}`,bw=`public class Main {
    public static void main(String[] args) {
        // 1. Crear l'objecte Salutador
        Salutador s = new Salutador("catala");

        // 2. Cridar el metode saludar()
        String missatge = s.saludar("Maria");

        // 3. Mostrar el resultat
        System.out.println(missatge);
        // Sortida: Hola, Maria!
    }
}`;function yw(){return e.jsxs("div",{children:[e.jsx(S,{title:"Diagrames de Sequencia UML"}),e.jsxs(f,{variant:"explanation",title:"Que es un diagrama de sequencia?",children:[e.jsxs("p",{children:["Un ",e.jsx("strong",{children:"diagrama de sequencia"})," mostra l'",e.jsx("strong",{children:"ordre"})," de les interaccions entre objectes al llarg del temps. L'eix vertical representa el",e.jsx("strong",{children:" temps"})," (de dalt a baix) i l'eix horitzontal representa els",e.jsx("strong",{children:" objectes"})," que participen en la interaccio."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Mentre que el diagrama de classes mostra l'",e.jsx("em",{children:"estructura"})," (que hi ha), el diagrama de sequencia mostra el ",e.jsx("em",{children:"comportament"})," (que passa i en quin ordre)."]})]}),e.jsx(S,{title:"Elements d'un diagrama de sequencia"}),e.jsx(J,{headers:["Element","Representacio","Descripcio"],rows:[{cells:["Actor / Participant","Rectangle a la part superior","Un objecte o classe que participa en la interaccio"]},{cells:["Linia de vida (lifeline)","Linia vertical discontinua","Representa l'existencia de l'objecte al llarg del temps"]},{cells:["Missatge sincron","Fletxa continua (->>) ","Una crida a un metode que espera resposta"]},{cells:["Missatge de resposta","Fletxa discontinua (-->>)","El valor de retorn d'una crida"]},{cells:["Caixa d'activacio","Rectangle prim sobre la linia de vida","Indica que l'objecte esta executant una operacio"]},{cells:["Nota (note)","Rectangle amb cantonada doblegada","Comentari o aclariment sobre la interaccio"]},{cells:["Fragment alt/else","Rectangle amb etiqueta","Representa una estructura condicional (if/else)"]},{cells:["Fragment loop","Rectangle amb etiqueta loop","Representa un bucle (while/for)"]}]}),e.jsx(S,{title:"Exemple basic: Saludar"}),e.jsxs(f,{variant:"info",children:[e.jsxs("p",{children:["Aquest diagrama mostra la interaccio entre el ",e.jsx("code",{children:"Main"})," i un objecte",e.jsx("code",{children:" Salutador"}),". Llegeix-lo de dalt a baix per seguir l'ordre de les crides:"]}),e.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"Main"})," crea un nou ",e.jsx("code",{children:"Salutador"}),` amb l'idioma "catala"`]}),e.jsxs("li",{children:[e.jsx("code",{children:"Main"})," crida el metode ",e.jsx("code",{children:'saludar("Maria")'})]}),e.jsxs("li",{children:[e.jsx("code",{children:"Salutador"}),' retorna el text "Hola, Maria!"']}),e.jsxs("li",{children:[e.jsx("code",{children:"Main"})," imprimeix el resultat per consola"]})]})]}),e.jsx(qe,{src:"seq-saludar",title:"Diagrama de sequencia: Saludar"}),e.jsx(S,{title:"Exemple: Prestar un llibre"}),e.jsxs(f,{variant:"explanation",children:[e.jsx("p",{children:"Aquest diagrama mostra la sequencia d'interaccions quan es vol prestar un llibre de la biblioteca. Fixa't com:"}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["El ",e.jsx("code",{children:"Main"})," primer ",e.jsx("strong",{children:"busca"})," el llibre i despres el ",e.jsx("strong",{children:"presta"}),"."]}),e.jsxs("li",{children:["La ",e.jsx("code",{children:"Biblioteca"})," delega l'operacio de prestec al propi ",e.jsx("code",{children:"Llibre"}),"."]}),e.jsxs("li",{children:["El ",e.jsx("code",{children:"Llibre"})," actualitza el seu estat intern (",e.jsx("code",{children:"disponible = false"}),")."]}),e.jsxs("li",{children:["La ",e.jsx("strong",{children:"nota"})," al final aclareix l'estat final del sistema."]})]})]}),e.jsx(qe,{src:"seq-biblioteca",title:"Diagrama de sequencia: Prestar un llibre"}),e.jsx(S,{title:"Exemple amb condicionals (alt/else)"}),e.jsx(f,{variant:"info",children:e.jsxs("p",{children:["Els diagrames de sequencia tambe poden representar ",e.jsx("strong",{children:"decisions condicionals"})," amb els fragments ",e.jsx("code",{children:"alt"})," (alternativa) i ",e.jsx("code",{children:"else"}),". Funcionen com un",e.jsx("code",{children:" if/else"})," en Java: segons la condicio, s'executa un cami o un altre."]})}),e.jsx(qe,{src:"seq-condicional",title:"Diagrama de sequencia: Divisio amb control d'error"}),e.jsx(S,{title:"Exemple avancat: Sistema HydroFlow"}),e.jsxs(f,{variant:"explanation",children:[e.jsxs("p",{children:["Un exemple professional amb ",e.jsx("strong",{children:"activacions"})," (barres verticals que mostren quan un objecte esta treballant) i un fragment ",e.jsx("strong",{children:"loop"})," (bucle). L'operador demana reomplir el tanc, el sistema comprova el nivell d'aigua i repeteix l'operacio fins que arriba al minim."]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"activate/deactivate"}),": mostren quan un objecte esta processant una crida"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"loop"}),": repeteix el bloc mentre ",e.jsx("code",{children:"waterLevel < MIN"})]}),e.jsxs("li",{children:["Les ",e.jsx("strong",{children:"fletxes numerades"})," indiquen l'ordre temporal"]})]})]}),e.jsx(qe,{src:"seq-hydroflow",title:"Sistema HydroFlow (amb loop i activacions)"}),e.jsx(f,{variant:"warning",title:"Fragments comuns",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"alt / else"}),": condicional (if/else). Nomes s'executa un dels camins."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"loop"}),": repeticio (for/while). El bloc es repeteix mentre es compleixi la condicio."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"opt"}),": opcional (if sense else). El bloc s'executa nomes si es compleix la condicio."]})]})}),e.jsx(S,{title:"Relacio amb el codi Java"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Cada ",e.jsx("strong",{children:"fletxa"})," del diagrama de sequencia correspon a una ",e.jsx("strong",{children:"linia de codi"})," Java. Vegem com es tradueix l'exemple del Salutador:"]})}),e.jsxs(oe,{children:[e.jsx(U,{title:"Codi Java",variant:"blue",children:e.jsx(g,{code:bw,showLineNumbers:!0})}),e.jsx(U,{title:"Correspondencia amb el diagrama",variant:"good",children:e.jsx(J,{headers:["Linia de codi","Fletxa al diagrama"],rows:[{cells:['new Salutador("catala")','Main ->> Salutador: new Salutador("catala")']},{cells:['s.saludar("Maria")','Main ->> Salutador: saludar("Maria")']},{cells:['return "Hola, Maria!"','Salutador -->> Main: "Hola, Maria!"']},{cells:["System.out.println()","Main ->> Main: System.out.println()"]}]})})]}),e.jsx(g,{label:"Classe Salutador completa",code:jw,showLineNumbers:!0}),e.jsx(S,{title:"Quan usar diagrames de sequencia?"}),e.jsxs(me,{children:[e.jsx(T,{title:"Depurar fluxos complexos",variant:"blue",children:e.jsxs("p",{children:["Quan un programa te moltes classes que interactuen entre elles, un diagrama de sequencia ajuda a ",e.jsx("strong",{children:"visualitzar l'ordre"})," de les crides i trobar errors de logica."]})}),e.jsx(T,{title:"Documentar APIs",variant:"yellow",children:e.jsxs("p",{children:["Quan dissenyes un sistema amb multiples components, els diagrames de sequencia documenten ",e.jsx("strong",{children:"com es comuniquen"})," entre ells i quines dades s'intercanvien."]})}),e.jsx(T,{title:"Entendre codi existent",variant:"green",children:e.jsxs("p",{children:["Quan arribes a un projecte nou, dibuixar un diagrama de sequencia t'ajuda a",e.jsx("strong",{children:" comprendre el flux"})," del programa sense haver de llegir tot el codi."]})}),e.jsx(T,{title:"Planificar noves funcionalitats",variant:"pink",children:e.jsxs("p",{children:["Abans de programar una nova funcionalitat, dibuixa el diagrama de sequencia per",e.jsx("strong",{children:" planificar"})," quins objectes necessites i com interactuaran."]})})]}),e.jsx(f,{variant:"success",title:"Resum",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Un ",e.jsx("strong",{children:"diagrama de sequencia"})," mostra l'ordre de les interaccions entre objectes al llarg del temps."]}),e.jsxs("li",{children:["L'eix ",e.jsx("strong",{children:"vertical"})," representa el temps i l'eix ",e.jsx("strong",{children:"horitzontal"})," els objectes participants."]}),e.jsxs("li",{children:["Les ",e.jsx("strong",{children:"fletxes continues"})," representen crides a metodes; les ",e.jsx("strong",{children:"fletxes discontinues"})," representen valors de retorn."]}),e.jsxs("li",{children:["Les ",e.jsx("strong",{children:"activacions"})," mostren quan un objecte esta processant una operacio."]}),e.jsxs("li",{children:["Els fragments ",e.jsx("code",{children:"alt/else"}),", ",e.jsx("code",{children:"loop"})," i ",e.jsx("code",{children:"opt"})," permeten representar ",e.jsx("strong",{children:"condicionals i bucles"}),"."]}),e.jsxs("li",{children:["Cada fletxa del diagrama correspon a una ",e.jsx("strong",{children:"linia de codi"})," Java."]})]})})]})}function Sw(){return e.jsxs("div",{children:[e.jsx(S,{title:"Diagrames de flux"}),e.jsxs(f,{variant:"info",title:"Que es un diagrama de flux?",children:[e.jsxs("p",{children:["Un ",e.jsx("strong",{children:"diagrama de flux"})," representa el ",e.jsx("strong",{children:"flux d'un algorisme"})," o proces pas a pas, de manera visual. Es una eina essencial per ",e.jsx("strong",{children:"planificar abans de programar"}),", ja que ens permet veure l'estructura logica del programa sense escriure codi."]}),e.jsx("p",{style:{marginTop:"8px"},children:"Cada forma geometrica representa un tipus d'accio diferent, i les fletxes indiquen l'ordre d'execucio."})]}),e.jsx(S,{title:"Simbols estandard"}),e.jsx(J,{headers:["Forma","Nom","Significat"],rows:[{cells:["Oval / Rectangle arrodonit","Inici / Fi","Marca el punt d'inici o de finalitzacio del flux"]},{cells:["Rectangle","Proces / Accio","Representa una instruccio o operacio (assignacio, calcul...)"]},{cells:["Rombe (Diamond)","Decisio / Condicio","Representa una pregunta amb dues sortides: Si o No"]},{cells:["Parallelogram","Entrada / Sortida","Llegir dades de l'usuari o mostrar resultats per pantalla"]},{cells:["Fletxa","Flux / Direccio","Indica l'ordre en que s'executen les accions"]}]}),e.jsx(S,{title:"Exemple: Nombre parell o senar"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Un flux senzill amb una ",e.jsx("strong",{children:"decisio"}),": llegim un numero i comprovem si es parell o senar mitjancant l'operador modul (%)."]})}),e.jsx(qe,{src:"flux-parell-senar",title:"Flux: Nombre parell o senar"}),e.jsx(S,{title:"Exemple: Bucle for"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Un bucle ",e.jsx("strong",{children:"for"})," es representa amb una decisio que torna enrere. Mentre la condicio es certa, es processa l'element i s'incrementa el comptador. Quan la condicio es falsa, el flux surt del bucle."]})}),e.jsx(qe,{src:"flux-bucle-for",title:"Flux: Bucle for sobre un array"}),e.jsx(S,{title:"Exemple: Calcul de nota final"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Un exemple mes complex amb ",e.jsx("strong",{children:"multiples decisions encadenades"}),". Primer calculem la mitjana de tres notes i despres avaluem el resultat amb condicions niuades."]})}),e.jsx(qe,{src:"flux-nota-final",title:"Flux: Calcul de nota final"}),e.jsx(S,{title:"Exemple avancat: Sistema de Login"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Un diagrama mes realista que combina ",e.jsx("strong",{children:"bucles"}),", ",e.jsx("strong",{children:"decisions niuades"})," i",e.jsx("strong",{children:" multiples camins"}),". El sistema demana credencials, verifica l'usuari i la contrasenya, i bloqueja el compte despres de 3 intents fallits."]})}),e.jsx(qe,{src:"flux-login",title:"Flux: Sistema de Login amb control d'intents"}),e.jsx(S,{title:"Del diagrama al codi"}),e.jsx(f,{variant:"info",title:"Cada forma te el seu equivalent en Java",children:e.jsx("p",{children:"La gran utilitat dels diagrames de flux es que es poden traduir directament a codi. Cada simbol del diagrama correspon a una estructura del llenguatge de programacio."})}),e.jsx(J,{headers:["Simbol del diagrama","Estructura en Java"],rows:[{cells:["Oval (Inici/Fi)","Inici i fi del metode main()"]},{cells:["Rectangle (Proces)","Instruccio o assignacio (variable = valor;)"]},{cells:["Rombe (Decisio)","Estructura condicional (if / else if / else)"]},{cells:["Parallelogram (Entrada)","Scanner per llegir dades (scanner.nextInt())"]},{cells:["Parallelogram (Sortida)","System.out.println() per mostrar resultats"]},{cells:["Fletxa que torna enrere","Bucle (for, while)"]}]}),e.jsx(g,{label:"Codi Java equivalent al diagrama de nota final",showLineNumbers:!0,code:`import java.util.Scanner;

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
}`}),e.jsx(S,{title:"Bones practiques"}),e.jsxs(me,{children:[e.jsx(T,{title:"Inici i Fi clars",variant:"blue",children:e.jsxs("p",{children:["Sempre comenca amb un simbol d'",e.jsx("strong",{children:"Inici"})," i acaba amb un simbol de ",e.jsx("strong",{children:"Fi"}),". Tot flux ha de tenir un principi i un final ben definits."]})}),e.jsx(T,{title:"Un sol flux d'entrada",variant:"yellow",children:e.jsxs("p",{children:["Cada simbol ha de tenir ",e.jsx("strong",{children:"un sol flux d'entrada"}),". Pot tenir multiples sortides (com les decisions), pero nomes una entrada."]})}),e.jsx(T,{title:"Decisions amb 2 sortides",variant:"green",children:e.jsxs("p",{children:["Les decisions (rombes) han de tenir ",e.jsx("strong",{children:"exactament 2 sortides"}),": una per ",e.jsx("strong",{children:"Si"})," i una per ",e.jsx("strong",{children:"No"}),". Si necessites mes opcions, encadena multiples decisions."]})}),e.jsx(T,{title:"Direccio consistent",variant:"pink",children:e.jsxs("p",{children:["El flux ha d'anar de ",e.jsx("strong",{children:"dalt a baix"})," i d'",e.jsx("strong",{children:"esquerra a dreta"}),". Aixo fa que el diagrama sigui intuitiu i facil de llegir."]})})]}),e.jsx(f,{variant:"success",title:"Resum",children:e.jsx("p",{children:"Els diagrames de flux son una eina fonamental per planificar algorismes abans d'escriure codi. Cada forma geometrica representa un tipus d'accio (proces, decisio, entrada/sortida) i les fletxes marquen l'ordre d'execucio. Aprendre a llegir-los i crear-los es el primer pas per pensar com un programador."})})]})}function Ew(){return e.jsxs("div",{children:[e.jsx(S,{title:"Diagrames de casos d'us"}),e.jsxs(f,{variant:"info",title:"Que es un diagrama de casos d'us?",children:[e.jsxs("p",{children:["Un ",e.jsx("strong",{children:"diagrama de casos d'us"})," mostra ",e.jsx("strong",{children:"QUE"})," fa un sistema des de la perspectiva de l'usuari. ",e.jsx("strong",{children:"No"})," mostra COM ho fa (aixo ho fan altres diagrames com els de flux o els de sequencia)."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Identifica els ",e.jsx("strong",{children:"actors"})," (qui utilitza el sistema) i les seves",e.jsx("strong",{children:" interaccions"})," amb les funcionalitats del sistema. Es el primer diagrama que es fa quan s'analitzen els requisits d'un projecte."]})]}),e.jsx(S,{title:"Elements d'un diagrama de casos d'us"}),e.jsx(J,{headers:["Element","Representacio","Descripcio"],rows:[{cells:["Actor","Figura de pal (stick figure)","Qui utilitza el sistema: persona, altre sistema o dispositiu"]},{cells:["Cas d'us","Oval / El·lipse","Una funcionalitat que el sistema ofereix a l'actor"]},{cells:["Sistema","Rectangle gran","El limit del sistema; els casos d'us van dins, els actors fora"]},{group:"Tipus de relacions"},{cells:["Associacio","Linia continua","Connecta un actor amb un cas d'us que utilitza"]},{cells:["<<include>>","Fletxa discontinua amb <<include>>","Un cas d'us SEMPRE inclou un altre (obligatori)"]},{cells:["<<extend>>","Fletxa discontinua amb <<extend>>","Un cas d'us OPCIONALMENT amplia un altre (condicional)"]}]}),e.jsx(S,{title:"Exemple: Sistema de Biblioteca"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Vegem un exemple complet amb dos actors (",e.jsx("strong",{children:"Bibliotecari"})," i ",e.jsx("strong",{children:"Alumne"}),"). Fixa't que ",e.jsx("strong",{children:"Buscar llibre"})," es un cas d'us compartit entre els dos actors, i que ",e.jsx("strong",{children:"Prestar llibre"})," inclou obligatoriament",e.jsx("strong",{children:" Verificar disponibilitat"}),"."]})}),e.jsx(qe,{src:"casosus-biblioteca",title:"Casos d'us: Sistema de Biblioteca"}),e.jsx(S,{title:"Exemple: Calculadora"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Un exemple mes senzill amb un sol actor i una relacio",e.jsx("strong",{children:" <<extend>>"}),": la divisio pot provocar un error si es divideix per zero, pero no sempre. Per tant es una extensio condicional."]})}),e.jsx(qe,{src:"casosus-calculadora",title:"Casos d'us: Calculadora"}),e.jsx(S,{title:"Exemple complet: Restaurant"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Un exemple mes realista amb ",e.jsx("strong",{children:"tres actors"})," (Client, Cambrer, Administrador) i multiples relacions. Observa com cada actor te funcionalitats propies i algunes son compartides. Aquest tipus de diagrama es el que es faria al comenar a analitzar un sistema de gestio de restaurant."]})}),e.jsx(qe,{src:"casosus-restaurant",title:"Casos d'us: Sistema de Reserves Restaurant"}),e.jsx(S,{title:"Include vs Extend"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Diferenciar ",e.jsx("strong",{children:"<<include>>"})," i",e.jsx("strong",{children:" <<extend>>"})," es un dels conceptes clau dels diagrames de casos d'us. Vegem-ne la comparacio:"]})}),e.jsxs(oe,{children:[e.jsxs(U,{title:"<<include>> (Inclusio)",variant:"good",children:[e.jsxs("p",{style:{marginTop:"8px"},children:["El cas d'us inclos s'executa ",e.jsx("strong",{children:"SEMPRE"}),". Es una relacio ",e.jsx("strong",{children:"obligatoria"}),"."]}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Prestar llibre"})," inclou ",e.jsx("strong",{children:"Verificar disponibilitat"})]}),e.jsx("li",{children:"No es pot prestar un llibre sense verificar primer si esta disponible"}),e.jsx("li",{children:"La verificacio passa CADA vegada"})]}),e.jsx(g,{code:`// En codi seria com:
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
}`})]})]}),e.jsx(S,{title:"Per a que serveixen?"}),e.jsxs(me,{children:[e.jsx(T,{title:"Entendre requisits",variant:"blue",children:e.jsxs("p",{children:["Permeten ",e.jsx("strong",{children:"entendre els requisits"})," del sistema abans de comencar a programar. Defineixen clarament que ha de fer el sistema i qui ho utilitza."]})}),e.jsx(T,{title:"Comunicar-se amb el client",variant:"yellow",children:e.jsxs("p",{children:["Son un ",e.jsx("strong",{children:"llenguatge visual"})," que tant els programadors com els clients poden entendre. Faciliten la comunicacio i eviten malentesos sobre les funcionalitats."]})}),e.jsx(T,{title:"Planificar funcionalitats",variant:"green",children:e.jsxs("p",{children:["Ajuden a ",e.jsx("strong",{children:"planificar les funcionalitats"})," del sistema de manera organitzada. Permeten prioritzar que es desenvolupa primer i distribuir la feina entre l'equip."]})}),e.jsx(T,{title:"Base per a altres diagrames UML",variant:"pink",children:e.jsxs("p",{children:["Son la ",e.jsx("strong",{children:"base per als altres diagrames UML"}),": diagrames de classes, de sequencia, d'activitats... Cada cas d'us es pot detallar amb diagrames mes especifics."]})})]}),e.jsx(f,{variant:"success",title:"Resum",children:e.jsxs("p",{children:["Els diagrames de casos d'us mostren ",e.jsx("strong",{children:"QUE"})," fa un sistema des de la perspectiva dels usuaris. Identifiquen actors, funcionalitats i les relacions entre ells (associacio, include i extend). Son el primer pas per analitzar i planificar un projecte de programari, i serveixen com a pont de comunicacio entre l'equip de desenvolupament i el client."]})})]})}function Cw(){return e.jsxs("div",{children:[e.jsx(S,{title:"Com es construeix un projecte real, pas a pas"}),e.jsx(f,{variant:"info",title:"Objectiu d'aquesta pagina",children:e.jsxs("p",{children:["No nomes veurem ",e.jsx("strong",{children:"QUE"})," te un projecte real, sino",e.jsx("strong",{children:" COM es planteja des de zero"}),": que es fa primer, per que cada package existeix, que fa cada classe i com flueix l'execucio. Seguirem l'exemple d'un ",e.jsx("strong",{children:"Sistema de Reserves de Restaurant"}),"."]})}),e.jsx(S,{title:"Pas 1: Analitzar els requisits"}),e.jsxs(f,{variant:"explanation",title:"Abans de programar: entendre el PROBLEMA",children:[e.jsxs("p",{children:["El primer que fa un equip professional ",e.jsx("strong",{children:"NO es obrir l'IDE"}),". Es seure amb el client (el propietari del restaurant) i preguntar:",e.jsx("strong",{children:" que necessita exactament?"})," Aixo s'anomena",e.jsx("strong",{children:" analisi de requisits"}),"."]}),e.jsx("p",{style:{marginTop:"8px"},children:"Sense aquest pas, construiries una casa sense planols. El resultat seria un desastre."})]}),e.jsxs(f,{variant:"info",title:"Preguntes que fem al client",children:[e.jsx("p",{children:e.jsx("strong",{children:"Funcionalitats basiques:"})}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[e.jsx("li",{children:"Els clients han de poder fer reserves per telefon o web?"}),e.jsx("li",{children:"El cambrer ha de poder veure les reserves del dia?"}),e.jsx("li",{children:"L'administrador ha de poder gestionar el menu i els plats?"}),e.jsx("li",{children:"S'ha de poder fer comandes i associar-les a una taula?"}),e.jsx("li",{children:"Cal generar factures o tiquets?"})]}),e.jsx("p",{style:{marginTop:"12px"},children:e.jsx("strong",{children:"Informacio que necessitem guardar:"})}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[e.jsx("li",{children:"Dades dels clients: nom, telefon, email"}),e.jsx("li",{children:"Dades de les taules: numero, capacitat, si esta disponible"}),e.jsx("li",{children:"Dades de les reserves: qui, quan, quantes persones"}),e.jsx("li",{children:"Dades del menu: plats, preus, categories"}),e.jsx("li",{children:"Dades de les comandes: quins plats ha demanat cada taula"})]})]}),e.jsxs(f,{variant:"explanation",title:"El resultat: una llista clara de funcionalitats",children:[e.jsxs("p",{children:["Despres de parlar amb el client, tenim una llista de ",e.jsx("strong",{children:"funcionalitats"})," (requisits):"]}),e.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsx("li",{children:"Crear, consultar i cancel·lar reserves"}),e.jsx("li",{children:"Veure taules disponibles per a una data i nombre de persones"}),e.jsx("li",{children:"Gestionar el menu (afegir, modificar, eliminar plats)"}),e.jsx("li",{children:"Crear comandes associades a una taula"}),e.jsx("li",{children:"Calcular el total d'una comanda"})]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Amb aixo ja sabem ",e.jsx("strong",{children:"QUE"})," hem de construir. Ara hem de decidir ",e.jsx("strong",{children:"COM"}),"."]})]}),e.jsx(S,{title:"Pas 2: Identificar les entitats (les dades)"}),e.jsxs(f,{variant:"explanation",title:"Quins 'objectes del mon real' te el nostre sistema?",children:[e.jsxs("p",{children:["Mirem la llista de requisits i subratllem els ",e.jsx("strong",{children:"substantius"}),": restaurant, ",e.jsx("strong",{children:"taula"}),", ",e.jsx("strong",{children:"client"}),", ",e.jsx("strong",{children:"reserva"}),", menu, ",e.jsx("strong",{children:"plat"}),", ",e.jsx("strong",{children:"comanda"}),". Cada substantiu es una",e.jsx("strong",{children:" classe candidata"})," per al nostre model."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Aquesta tecnica s'anomena ",e.jsx("strong",{children:"analisi de substantius"})," i es el que fan els arquitectes de programari com a primer pas de disseny."]})]}),e.jsx(J,{headers:["Classe","Que representa","Atributs principals","Per que existeix"],rows:[{cells:["Restaurant","El restaurant sencer","nom, adreca, List<Taula>, Menu","Es el contenidor principal. Encapsula tot el sistema."]},{cells:["Taula","Una taula fisica del restaurant","numero, capacitat, ocupada","Necessitem saber si una taula pot acollir X persones i si esta lliure."]},{cells:["Client","Una persona que fa una reserva","nom, telefon, email","Cal guardar qui ha fet cada reserva per poder contactar-lo."]},{cells:["Reserva","Una reserva concreta","client, taula, data, persones, confirmada","Es la relacio entre un client i una taula en una data."]},{cells:["Plat","Un plat del menu","nom, preu, categoria, disponible","Cal saber que es pot demanar i a quin preu."]},{cells:["Menu","La carta del restaurant","List<Plat>","Agrupa tots els plats i permet filtrar-los per categoria."]},{cells:["Comanda","El que ha demanat una taula","taula, List<LiniaComanda>, tancada","Associa els plats demanats a una taula concreta."]},{cells:["LiniaComanda","Un plat dins d'una comanda","plat, quantitat","Necessitem saber QUANTS de cada plat s'han demanat."]}]}),e.jsx(f,{variant:"info",title:"Per que LiniaComanda i no directament una llista de plats?",children:e.jsxs("p",{children:["Si una taula demana 3 amanides, no volem guardar el plat 3 vegades. Guardem una ",e.jsx("code",{children:"LiniaComanda"}),` amb el plat i la quantitat. Es el mateix concepte que una linia d'un tiquet de compra: "3x Amanida Cesar = 28.50€". Aixo es un bon exemple de `,e.jsx("strong",{children:"disseny pensat"}),": cada classe modela exactament la realitat."]})}),e.jsx(S,{title:"Pas 3: Dissenyar les relacions entre classes"}),e.jsx(f,{variant:"explanation",children:e.jsxs("p",{children:["Ara que tenim les classes, necessitem saber ",e.jsx("strong",{children:"com es relacionen"}),". Un Restaurant ",e.jsx("strong",{children:"te"})," taules (composicio). Una Reserva ",e.jsx("strong",{children:"referencia"}),"un Client i una Taula (associacio). Dibuixem el diagrama de classes:"]})}),e.jsx(qe,{src:"projecte-classes",title:"Diagrama de classes: Sistema Restaurant"}),e.jsx(f,{variant:"info",title:"Com llegir el diagrama",children:e.jsxs("p",{children:["La fletxa amb rombe negre (",e.jsx("strong",{children:"composicio"}),') vol dir que Restaurant "conte" taules: si el restaurant desapareix, les taules tambe. La fletxa simple (',e.jsx("strong",{children:"associacio"}),') vol dir que Reserva "referencia" un Client, pero el Client existeix independentment.']})}),e.jsx(S,{title:"Pas 4: Organitzar en packages (separacio per capes)"}),e.jsx(f,{variant:"explanation",title:"Per que no posem totes les classes juntes?",children:e.jsxs("p",{children:["Podriem posar les 8 classes en una sola carpeta i funcionaria. Pero quan el projecte creixi a 50, 100 o 200 classes, seria un ",e.jsx("strong",{children:"caos"}),". Per aixo separem el codi en ",e.jsx("strong",{children:"packages"})," (carpetes) segons la seva",e.jsx("strong",{children:" responsabilitat"}),". Cada package te una funcio molt clara."]})}),e.jsx(g,{label:"Estructura del codi font (src/main/java)",showLineNumbers:!0,code:`cat/lasalle/restaurant/
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
    └── ComandaController.java`}),e.jsx(J,{headers:["Package","Que conte","Per que existeix","Exemple de responsabilitat"],rows:[{cells:["model/","Classes de dades (entitats)","Definir COM son les dades del sistema. Nomes atributs, getters, setters, constructors.","Taula sap si esta ocupada o no, pero NO sap com guardar-se a una BD."]},{cells:["repository/","Classes d'acces a base de dades","Separar el COM es guarden les dades del QUE son. Si canvies de MySQL a PostgreSQL, nomes toques aqui.","ReservaRepository sap fer save(), findById(), delete() a la BD."]},{cells:["service/","Classes amb logica de negoci","Aqui van les REGLES del restaurant. Separar-les facilita testejar-les sense necessitar BD ni API.","ServeiReserves comprova si hi ha taula disponible ABANS de crear la reserva."]},{cells:["controller/","Classes que reben peticions",`Son el "punt d'entrada" del sistema. Reben peticions HTTP del frontend i deleguen al service.`,"ReservaController rep POST /api/reserves i crida a ServeiReserves."]}]}),e.jsx(f,{variant:"info",title:"La regla d'or: cada capa nomes parla amb la seguent",children:e.jsxs("p",{children:["El ",e.jsx("strong",{children:"Controller"})," crida al ",e.jsx("strong",{children:"Service"}),". El Service crida al ",e.jsx("strong",{children:"Repository"}),". El Repository accedeix a la ",e.jsx("strong",{children:"Base de Dades"}),".",e.jsx("strong",{children:" Mai al reves!"})," Un Repository no crida mai a un Controller. Un Model no crida mai a un Service. Aquesta disciplina es el que fa que el codi sigui ",e.jsx("strong",{children:"mantenible"})," quan el projecte creix."]})}),e.jsx(S,{title:"Pas 5: Implementar cada classe"}),e.jsxs(f,{variant:"explanation",title:"Ordre d'implementacio: de baix cap a dalt",children:[e.jsxs("p",{children:["Es comenca pel ",e.jsx("strong",{children:"model"})," (les dades) i es va pujant cap al",e.jsx("strong",{children:" controller"})," (el punt d'entrada). Per que? Perque cada capa",e.jsx("strong",{children:" depèn"})," de la inferior: no pots escriure el Service sense tenir el Model, i no pots escriure el Controller sense tenir el Service."]}),e.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Primer:"})," model/ (les classes de dades)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Segon:"})," repository/ (com guardar/recuperar les dades)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tercer:"})," service/ (les regles de negoci)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Quart:"})," controller/ (el punt d'entrada)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Cinque:"})," RestaurantApp.java (el main que arrenca tot)"]})]})]}),e.jsx(S,{title:"5a. El Model: les classes de dades"}),e.jsx(f,{variant:"info",title:"Que fa cada classe del model i PER QUE",children:e.jsxs("p",{children:['Cada classe del model representa un "objecte del mon real". Nomes te:',e.jsx("strong",{children:" atributs privats"}),", ",e.jsx("strong",{children:"constructor"}),",",e.jsx("strong",{children:" getters/setters"})," i algun metode de logica simple. El Model ",e.jsx("strong",{children:"no sap res"})," de base de dades, ni d'API, ni de pantalles. Nomes modela les dades."]})}),e.jsx(g,{label:"model/Taula.java — Representa una taula fisica",showLineNumbers:!0,code:`public class Taula {
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
}`}),e.jsx(f,{variant:"explanation",title:"Per que el numero no te setter?",children:e.jsxs("p",{children:["Fixa't que ",e.jsx("code",{children:"numero"})," no te ",e.jsx("code",{children:"setNumero()"}),". Una taula del restaurant sempre sera la taula 5 o la taula 12: el numero no canvia. Aixo es ",e.jsx("strong",{children:"disseny intencional"}),": si un atribut no ha de canviar, no li posem setter. Aixi cap part del codi pot canviar-lo per accident."]})}),e.jsx(g,{label:"model/Client.java — Una persona que fa una reserva",showLineNumbers:!0,code:`public class Client {
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
}`}),e.jsx(S,{title:"5b. El Repository: acces a la base de dades"}),e.jsx(f,{variant:"info",title:"Per que un package separat per a la base de dades?",children:e.jsxs("p",{children:["Imagina que ara guardes les dades a ",e.jsx("strong",{children:"MySQL"})," i d'aqui un any vols canviar a ",e.jsx("strong",{children:"PostgreSQL"}),". Si l'acces a la BD esta repartit per tot el codi, hauries de tocar desenes de fitxers. Pero si esta tot dins de",e.jsx("code",{children:" repository/"}),", nomes toques ",e.jsx("strong",{children:"3 fitxers"}),". Aixo es el poder de la ",e.jsx("strong",{children:"separacio per capes"}),"."]})}),e.jsx(g,{label:"repository/ReservaRepository.java — CRUD de reserves",showLineNumbers:!0,code:`import java.util.List;

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
}`}),e.jsx(f,{variant:"explanation",title:"CRUD: les 4 operacions basiques",children:e.jsxs("p",{children:["Gairebe tots els repositorys fan les mateixes 4 operacions:",e.jsx("strong",{children:" C"}),"reate (save), ",e.jsx("strong",{children:"R"}),"ead (find),",e.jsx("strong",{children:" U"}),"pdate (save), ",e.jsx("strong",{children:"D"}),"elete (delete). Aixo s'anomena ",e.jsx("strong",{children:"CRUD"})," i es la base de qualsevol aplicacio que gestiona dades."]})}),e.jsx(S,{title:"5c. El Service: la logica de negoci"}),e.jsx(f,{variant:"info",title:"Per que les regles van al Service i NO al Model?",children:e.jsxs("p",{children:["El Model (",e.jsx("code",{children:"Taula.java"}),") sap si esta ocupada, pero ",e.jsx("strong",{children:"no decideix"})," ","quina taula assignar a una reserva. Aquesta ",e.jsx("strong",{children:"decisio"})," (buscar taula lliure amb prou capacitat, crear la reserva, guardar-la) es ",e.jsx("strong",{children:"logica de negoci"})," ","i va al Service. Aixi el Model es manté simple i reutilitzable."]})}),e.jsx(g,{label:"service/ServeiReserves.java — Les REGLES del negoci",showLineNumbers:!0,code:`public class ServeiReserves {
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
}`}),e.jsxs(f,{variant:"explanation",title:"Fixa't en el flux del metode ferReserva()",children:[e.jsxs("p",{children:["Cada pas te un ",e.jsx("strong",{children:"per que"}),":"]}),e.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Buscar taula:"})," No podem assignar una taula sense comprovar que existeix i esta lliure."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Validar:"})," Si no n'hi ha, llançar un error clar (no retornar null silenciosament)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Crear reserva + ocupar taula:"})," Les dues coses van juntes: si crees la reserva pero no ocupes la taula, una altra reserva podria agafar-la."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Guardar a BD:"})," Si no guardem, al reiniciar l'aplicacio es perdria tot."]})]})]}),e.jsx(S,{title:"5d. El Controller: el punt d'entrada"}),e.jsx(f,{variant:"info",title:"Que fa el Controller i per que existeix?",children:e.jsxs("p",{children:["El Controller es el ",e.jsx("strong",{children:"punt d'entrada"})," del sistema. Rep les peticions del frontend (web o app mobil), les ",e.jsx("strong",{children:"tradueix"})," a crides al Service, i retorna la resposta. El Controller ",e.jsx("strong",{children:"NO"})," conte logica de negoci: nomes fa de pont. Aixi, si demà vols canviar l'API REST per una interficie de consola, nomes toques el Controller."]})}),e.jsx(g,{label:"controller/ReservaController.java — Rep peticions HTTP",showLineNumbers:!0,code:`@RestController
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
}`}),e.jsx(S,{title:"Pas 6: El flux d'execucio complet"}),e.jsx(f,{variant:"explanation",title:"Que passa quan un client fa una reserva?",children:e.jsxs("p",{children:[`Seguim el cami complet des que l'usuari prem "Reservar" a l'app fins que rep la confirmacio. Cada capa fa la seva feina i `,e.jsx("strong",{children:"delega"}),"a la seguent."]})}),e.jsx(qe,{src:"projecte-seq-reserva",title:"Sequencia: Fer una reserva"}),e.jsx(J,{headers:["Pas","Que passa","Qui ho fa","Per que es fa aixi"],rows:[{cells:["1",`L'usuari prem "Reservar" a l'app`,"Frontend (React/Android)","L'app envia POST /api/reserves amb les dades del formulari"]},{cells:["2","El Controller rep la peticio HTTP","ReservaController","Tradueix el JSON a objectes Java i crida al Service"]},{cells:["3","El Service busca una taula disponible","ServeiReserves","Aplica les REGLES: prou capacitat? Esta lliure?"]},{cells:["4","El Service crea la reserva","ServeiReserves","Crea l'objecte Reserva i marca la taula com a ocupada"]},{cells:["5","El Repository guarda a la BD","ReservaRepository","Executa INSERT INTO reserves... per persistir les dades"]},{cells:["6","La resposta torna pel mateix cami","Controller → Frontend","El Controller retorna la Reserva creada com a JSON"]}]}),e.jsxs(f,{variant:"info",title:"Per que tantes capes? No seria mes facil fer-ho tot al Controller?",children:[e.jsx("p",{children:"Si. En un projecte petit, fer-ho tot al Controller funciona. Pero imagina que:"}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[e.jsxs("li",{children:["Vols fer reserves tambe per ",e.jsx("strong",{children:"consola"}),", no nomes per web → Nomes crees un nou Controller, el Service ja existeix."]}),e.jsxs("li",{children:["Vols canviar la ",e.jsx("strong",{children:"base de dades"})," de MySQL a PostgreSQL → Nomes toques el Repository."]}),e.jsxs("li",{children:["Vols afegir una ",e.jsx("strong",{children:"regla nova"})," (ex: maxim 2 reserves per client) → Nomes toques el Service."]}),e.jsxs("li",{children:["Vols fer ",e.jsx("strong",{children:"tests"})," de la logica sense necessitar BD ni servidor → Testeja el Service directament."]})]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Cada capa es pot ",e.jsx("strong",{children:"canviar o testejar independentment"}),". En un equip de 50 persones, aixo es ",e.jsx("strong",{children:"imprescindible"}),"."]})]}),e.jsx(S,{title:"Pas 7: La resta del projecte (no nomes codi)"}),e.jsx(f,{variant:"explanation",title:"Un projecte no es nomes Java",children:e.jsx("p",{children:"A mes del codi font, un projecte professional te fitxers de configuracio, documentacio, tests i pipelines. Vegem l'estructura completa:"})}),e.jsx(g,{label:"Estructura completa del projecte (TOTS els fitxers)",showLineNumbers:!0,code:`restaurant-app/
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
└── docs/                           # Documentacio extra`}),e.jsx(J,{headers:["Fitxer","Que fa","Per que es important"],rows:[{group:"Configuracio del projecte"},{cells:["pom.xml","Llista de dependencies (Spring Boot, JUnit, driver BD) i com compilar",'Sense aixo, el projecte no compila. Es com la "llista de la compra"']},{cells:[".gitignore","Diu a Git quins fitxers ignorar: /target, .class, .env","Evita pujar fitxers compilats o secrets al repositori"]},{cells:["README.md","Documentacio: que fa el projecte, com instal·lar-lo, com executar-lo","El primer que llegeix qualsevol persona que arriba al projecte"]},{cells:["LICENSE","Llicencia legal del codi (MIT, Apache 2.0...)","Sense llicencia, legalment ningu pot usar el codi"]},{group:"Desplegament"},{cells:["Dockerfile","Instruccions per empaquetar l'app en un contenidor","Permet executar l'app en qualsevol servidor sense instal·lar res"]},{cells:["docker-compose.yml","Orquestra app + base de dades junts",'Amb un sol "docker-compose up" tens tot funcionant']},{group:"CI/CD"},{cells:[".github/workflows/ci.yml","Cada cop que fas push, executa tests automaticament","Si algu puja codi que trenca els tests, el sistema ho detecta"]},{group:"Recursos"},{cells:["application.properties","Configuracio: URL de la BD, port del servidor","MAI es puja al repo amb contrasenyes reals"]},{cells:["schema.sql","Estructura de les taules SQL de la BD","Defineix les taules: reserves, clients, plats, comandes..."]}]}),e.jsx(S,{title:"Arquitectura completa: Frontend + Backend + BD"}),e.jsx(f,{variant:"info",children:e.jsx("p",{children:"El projecte Java (backend) es nomes una part. L'aplicacio completa te tres capes que es comuniquen per HTTP:"})}),e.jsx(qe,{src:"projecte-arquitectura",title:"Arquitectura d'una aplicacio real"}),e.jsx(J,{headers:["Capa","Tecnologies tipiques","Que fa"],rows:[{cells:["Frontend (web)","React, Angular, Vue, HTML/CSS","La interficie visual que l'usuari veu al navegador"]},{cells:["Frontend (mobil)","Android (Kotlin/Java), iOS (Swift)","L'app que l'usuari descarrega al telefon"]},{cells:["Backend (API)","Spring Boot (Java), Node.js, Django","Processa peticions, aplica regles de negoci, accedeix a la BD"]},{cells:["Base de Dades","PostgreSQL, MySQL, MongoDB","Emmagatzema dades permanentment"]}]}),e.jsx(S,{title:"Com treballen equips de centenars de programadors?"}),e.jsx(f,{variant:"explanation",title:"El problema: centenars de persones tocant el mateix codi",children:e.jsxs("p",{children:["Imagineu un projecte com ",e.jsx("strong",{children:"java-design-patterns"})," a GitHub (93.800+ estrelles, centenars de contribuidors). Com eviten que tot peti? La resposta te quatre pilars: ",e.jsx("strong",{children:"Git amb branques"}),",",e.jsx("strong",{children:" Pull Requests"}),", ",e.jsx("strong",{children:"tests automatics"})," i",e.jsx("strong",{children:" CI/CD"}),"."]})}),e.jsx(S,{title:"1. Git Branching: cada un treballa en la seva branca"}),e.jsx(f,{variant:"info",children:e.jsxs("p",{children:[e.jsx("strong",{children:"NINGU"})," treballa directament sobre ",e.jsx("code",{children:"main"}),". Cada programador crea una ",e.jsx("strong",{children:"branca"})," per a cada funcionalitat. Aixi, els canvis d'una persona no afecten els altres fins que es revisen i s'aproven."]})}),e.jsx(qe,{src:"projecte-gitflow",title:"Flux de treball amb branques Git"}),e.jsx(J,{headers:["Branca","Per a que serveix","Qui hi treballa"],rows:[{cells:["main","Codi estable, llest per produccio. MAI es toca directament.","Ningu directament. Nomes rep merges aprovats."]},{cells:["develop","Integracio de funcionalitats en desenvolupament.","Es on es fusionen les feature branches aprovades."]},{cells:["feature/reserves","Una funcionalitat concreta.","Un programador o petit equip (2-3 persones)."]},{cells:["hotfix/bug-123","Corregir un error urgent en produccio.","El programador assignat al bug."]}]}),e.jsx(S,{title:"2. Pull Requests: revisio obligatoria"}),e.jsxs(f,{variant:"explanation",title:"Com funciona una Pull Request (PR)?",children:[e.jsxs("p",{children:["Quan un programador acaba, ",e.jsx("strong",{children:"no fusiona directament"}),". Obre una ",e.jsx("strong",{children:"Pull Request"})," a GitHub:",e.jsx("em",{children:' "He acabat, podeu revisar els meus canvis?"'})]}),e.jsxs("p",{style:{marginTop:"8px"},children:["Un o dos companys ",e.jsx("strong",{children:"revisen el codi"})," linia per linia, suggereixen millores i, si tot esta be, ",e.jsx("strong",{children:"aproven"})," la PR. Nomes llavors es pot fusionar."]})]}),e.jsxs(me,{children:[e.jsx(T,{title:"El revisor comprova:",variant:"blue",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[e.jsx("li",{children:"El codi segueix les convencions de l'equip?"}),e.jsx("li",{children:"Hi ha tests per la nova funcionalitat?"}),e.jsx("li",{children:"El codi es clar i facil de mantenir?"}),e.jsx("li",{children:"No introdueix bugs ni vulnerabilitats?"})]})}),e.jsx(T,{title:"Regles habituals:",variant:"yellow",children:e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[e.jsx("li",{children:"Minim 1-2 aprovacions per fusionar"}),e.jsx("li",{children:"L'autor NO pot aprovar la seva propia PR"}),e.jsx("li",{children:"Tots els tests han de passar"}),e.jsxs("li",{children:["La branca ",e.jsx("code",{children:"main"})," esta protegida"]})]})})]}),e.jsx(S,{title:"3. Tests automatics: la xarxa de seguretat"}),e.jsx(g,{label:"Exemple: Test del ServeiReserves",showLineNumbers:!0,code:`class ServeiReservesTest {
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
}`}),e.jsx(J,{headers:["Tipus de test","Que prova","Exemple"],rows:[{cells:["Unitari","Una sola classe o metode, aillat","TaulaTest: comprova que potAcollir() funciona correctament"]},{cells:["Integracio","Multiples classes juntes","ServeiReservesTest: comprova que ferReserva() crea una reserva i ocupa la taula"]},{cells:["End-to-End","Tot el sistema, de frontend a BD","Simula un usuari fent una reserva des de l'app"]}]}),e.jsx(S,{title:"4. CI/CD: automatitzar tot el proces"}),e.jsxs(f,{variant:"explanation",title:"Que es CI/CD?",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"CI"})," (Continuous Integration): cada cop que algu fa push, automaticament s'executen els tests. Si falla algun, tothom ho sap immediatament."]}),e.jsxs("p",{style:{marginTop:"8px"},children:[e.jsx("strong",{children:"CD"})," (Continuous Deployment): si tots els tests passen, l'aplicacio es desplega automaticament al servidor."]})]}),e.jsx(qe,{src:"projecte-cicd",title:"Pipeline CI/CD"}),e.jsx(g,{label:".github/workflows/ci.yml (GitHub Actions)",showLineNumbers:!0,code:`name: CI Pipeline

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
        run: mvn package -DskipTests`}),e.jsx(S,{title:"Resum: els 7 passos per construir un projecte"}),e.jsxs(me,{children:[e.jsx(T,{title:"1. Requisits",variant:"blue",children:e.jsxs("p",{children:["Parlar amb el client. Entendre ",e.jsx("strong",{children:"QUE"})," necessita. Fer una llista de funcionalitats."]})}),e.jsx(T,{title:"2. Entitats",variant:"yellow",children:e.jsxs("p",{children:['Identificar els "objectes del mon real" (substantius) que seran les nostres ',e.jsx("strong",{children:"classes"}),"."]})}),e.jsx(T,{title:"3. Relacions",variant:"green",children:e.jsxs("p",{children:["Dibuixar el ",e.jsx("strong",{children:"diagrama de classes"}),": qui conte qui, qui referencia qui."]})}),e.jsx(T,{title:"4. Packages",variant:"pink",children:e.jsxs("p",{children:["Organitzar en capes: ",e.jsx("strong",{children:"model → repository → service → controller"}),". Cada capa te una responsabilitat."]})}),e.jsx(T,{title:"5. Implementar",variant:"blue",children:e.jsx("p",{children:"Codi de baix a dalt: primer Model, despres Repository, despres Service, finalment Controller."})}),e.jsx(T,{title:"6. Tests",variant:"yellow",children:e.jsxs("p",{children:["Escriure tests per cada capa. Verificar que les ",e.jsx("strong",{children:"regles de negoci"})," funcionen correctament."]})}),e.jsx(T,{title:"7. Configuracio",variant:"green",children:e.jsxs("p",{children:["Afegir pom.xml, README, .gitignore, Dockerfile, CI/CD. Preparar per a ",e.jsx("strong",{children:"produccio"}),"."]})})]}),e.jsx(S,{title:"Projectes de referencia a GitHub"}),e.jsxs(oe,{children:[e.jsxs(U,{title:"java-design-patterns",variant:"blue",children:[e.jsx("p",{style:{marginTop:"8px"},children:e.jsx("code",{children:"github.com/iluwatar/java-design-patterns"})}),e.jsxs("p",{style:{marginTop:"8px"},children:[e.jsx("strong",{children:"93.800+ estrelles"})," - 195+ patrons de disseny en Java, cadascun amb tests, diagrames UML i documentacio. Patrons rellevants:",e.jsx("strong",{children:" Facade"}),", ",e.jsx("strong",{children:"Observer"}),",",e.jsx("strong",{children:" Strategy"}),", ",e.jsx("strong",{children:"Builder"}),"."]})]}),e.jsxs(U,{title:"Spring PetClinic",variant:"good",children:[e.jsx("p",{style:{marginTop:"8px"},children:e.jsx("code",{children:"github.com/spring-projects/spring-petclinic"})}),e.jsxs("p",{style:{marginTop:"8px"},children:["L'exemple oficial de ",e.jsx("strong",{children:"Spring Boot"}),": MVC complet amb controllers, services, repositories, templates HTML i base de dades."]})]})]}),e.jsx(f,{variant:"success",title:"La idea clau",children:e.jsxs("p",{children:["Construir un projecte real no es comencar a programar directament. Es",e.jsx("strong",{children:" analitzar"})," (que necessitem?), ",e.jsx("strong",{children:"dissenyar"}),"(quines classes i com es relacionen?), ",e.jsx("strong",{children:"organitzar"})," (cada package amb la seva responsabilitat) i ",e.jsx("strong",{children:"implementar"})," de baix cap a dalt. La separacio en capes (model → repository → service → controller) es el que permet que 50 programadors treballin al mateix projecte sense trepitjar-se, que el codi sigui testejable i que qualsevol canvi futur sigui facil de fer."]})})]})}function ww(){return e.jsxs("div",{children:[e.jsx(S,{title:"Introduccio al patro MVC"}),e.jsx(f,{variant:"explanation",title:"El problema: tot en un sol lloc",children:e.jsxs("p",{children:["Quan els projectes creixen, tenir-ho tot dins de ",e.jsx("code",{children:"main()"})," o en una sola classe es fa ",e.jsx("strong",{children:"ingobernable"}),". Ja ho hem vist a la seccio de modularitat: el codi monolitic es dificil de llegir, mantenir i ampliar. El patro",e.jsx("strong",{children:" MVC"})," porta la modularitzacio al seguent nivell, donant-nos una estructura clara per organitzar qualsevol aplicacio."]})}),e.jsx(f,{variant:"info",title:"Que es MVC?",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Model-View-Controller"})," es un ",e.jsx("strong",{children:"patro"})," (no una biblioteca, no un framework) per organitzar el codi en ",e.jsx("strong",{children:"3 responsabilitats"})," ben definides. Es l'estandard en el desenvolupament web, aplicacions mobils i aplicacions d'escriptori. Gairebe tots els frameworks moderns es basen en aquesta idea."]})}),e.jsx(S,{title:"Les 3 parts de MVC"}),e.jsxs(me,{children:[e.jsxs(T,{title:"Model",variant:"blue",children:["Les ",e.jsx("strong",{children:"dades"})," i la ",e.jsx("strong",{children:"logica de negoci"}),". Son les classes que ja coneixeu: ",e.jsx("code",{children:"Alumne"}),", ",e.jsx("code",{children:"Restaurant"}),",",e.jsx("code",{children:" Taula"}),"... El Model no sap res de la interficie: nomes gestiona dades i regles."]}),e.jsxs(T,{title:"View (Vista)",variant:"yellow",children:["El que ",e.jsx("strong",{children:"veu l'usuari"}),". En Java de consola:",e.jsx("code",{children:" System.out.println"}),". En web: HTML. En Android: XML layouts. La Vista ",e.jsx("strong",{children:"mostra dades"})," pero ",e.jsx("strong",{children:"no les processa"})," ni pren decisions."]}),e.jsxs(T,{title:"Controller",variant:"green",children:["El ",e.jsx("strong",{children:`"director d'orquestra"`}),". Rep les accions de l'usuari, demana dades al Model i diu a la Vista que ha de mostrar. Es el pont que connecta les dades amb la presentacio."]})]}),e.jsx(S,{title:"Analogia: un restaurant"}),e.jsxs(f,{variant:"explanation",title:"MVC es com un restaurant",children:[e.jsx("p",{children:"Imagineu un restaurant per entendre MVC:"}),e.jsxs("p",{style:{marginTop:"8px"},children:["El ",e.jsx("strong",{children:"client"})," (Usuari) demana al ",e.jsx("strong",{children:"cambrer"})," (Controller). El cambrer porta la comanda a la ",e.jsx("strong",{children:"cuina"})," (Model). La cuina prepara el plat (processa les dades). El cambrer porta el plat al client i el",e.jsx("strong",{children:" plat servit"})," (Vista) mostra el resultat."]}),e.jsxs("p",{style:{marginTop:"8px"},children:["El client ",e.jsx("strong",{children:"MAI"})," va directament a la cuina. De la mateixa manera, l'usuari mai accedeix directament al Model: sempre passa pel Controller."]})]}),e.jsx(S,{title:"Diagrama visual del flux MVC"}),e.jsx(qe,{src:"mvc-flux",title:"Flux del patro MVC"}),e.jsx(S,{title:"MVC aplicat al Restaurant"}),e.jsx(f,{variant:"info",children:e.jsx("p",{children:"Vegem com s'aplica MVC al nostre projecte de restaurant. Cada capa te la seva responsabilitat i es comunica nomes amb les capes adjacents."})}),e.jsx(qe,{src:"mvc-restaurant",title:"MVC aplicat al Sistema de Restaurant"}),e.jsx(S,{title:"Exemple conceptual: Gestio de reserves"}),e.jsx(g,{code:`restaurant-app/
├── model/
│   ├── Restaurant.java          # Dades: taules[], menu
│   ├── Taula.java               # Dades: numero, capacitat, ocupada
│   └── Reserva.java             # Dades: client, data, persones
├── vista/
│   └── VistaConsola.java        # Mostra menu, resultats
└── controlador/
    └── ControladorReserves.java # Connecta model i vista`,label:"Estructura de carpetes amb MVC",showLineNumbers:!0}),e.jsx(f,{variant:"info",title:"El Controller: el director d'orquestra",children:e.jsxs("p",{children:["El Controlador rep l'accio de l'usuari (via la Vista), opera amb el Model i torna a la Vista per mostrar resultats. Fixa't que ",e.jsx("strong",{children:"mai"}),"fa ",e.jsx("code",{children:"System.out.println"})," directament: aixo es feina de la Vista."]})}),e.jsx(g,{code:`public class ControladorReserves {
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
}`,label:"Controlador de Reserves",showLineNumbers:!0}),e.jsx(S,{title:"On trobaras MVC?"}),e.jsx(f,{variant:"info",title:"MVC es a tot arreu",children:e.jsx("p",{children:"Practicament tots els frameworks moderns utilitzen MVC o una variant. Aqui teniu exemples reals:"})}),e.jsx(J,{headers:["Plataforma","Tecnologia","Com aplica MVC"],rows:[{cells:["Java Web","Spring MVC (Spring Boot)","Controllers reben peticions HTTP, Models son les entitats, Vistes son plantilles HTML"]},{cells:["Android","Activities + Layouts + ViewModel","XML layouts (Vista), Activities/ViewModel (Controller), classes de dades (Model)"]},{cells:["Web Frontend","React, Angular, Vue","Components (Vista), estat/stores (Model), gestors d'events (Controller)"]},{cells:["Desktop","JavaFX (FXML + Controller)","Fitxers FXML (Vista), classes Controller, classes de dades (Model)"]},{cells:["Jocs","Unity (C#)","Usa una variant de MVC per separar logica de joc, renderitzat i input"]}]}),e.jsx(S,{title:"Connexio amb el que heu apres"}),e.jsxs(f,{variant:"explanation",title:"Ja teniu les peces!",children:[e.jsxs("p",{children:["Tot el que heu apres fins ara (classes, objectes, encapsulacio, packages, modularitat) son els ",e.jsx("strong",{children:"blocs de construccio"})," de MVC:"]}),e.jsxs("p",{style:{marginTop:"8px"},children:["El ",e.jsx("strong",{children:"Model"})," son les vostres classes amb encapsulacio (atributs privats, getters, setters). Els ",e.jsx("strong",{children:"packages"})," son la separacio en carpetes. La ",e.jsx("strong",{children:"modularitat"})," es el principi que cada classe fa una sola cosa. MVC simplement ",e.jsx("strong",{children:"formalitza el patro"}),": us diu on posar cada peca."]})]}),e.jsxs(f,{variant:"success",title:"La idea clau",children:[e.jsxs("p",{children:["MVC es una ",e.jsx("strong",{children:"manera de pensar"})," sobre l'organitzacio del codi, no una eina nova que cal aprendre. Ja coneixeu les peces: classes, objectes, encapsulacio, packages. MVC simplement us diu ",e.jsx("strong",{children:"on posar-les"}),": les dades al Model, la presentacio a la Vista i la coordinacio al Controller."]}),e.jsx("p",{style:{marginTop:"8px"},children:"Quan comenceu a treballar amb frameworks com Spring Boot o JavaFX, veureu que tot segueix aquest patro. Si enteneu MVC, enteneu l'arquitectura de qualsevol aplicacio moderna."})]})]})}const Aw="_quizContainer_6jjjs_1",Lw="_progressBar_6jjjs_6",Rw="_progressDot_6jjjs_12",Mw="_done_6jjjs_20",Tw="_correct_6jjjs_24",Nw="_wrong_6jjjs_28",kw="_active_6jjjs_32",Pw="_questionCard_6jjjs_37",_w="_questionNumber_6jjjs_56",qw="_questionType_6jjjs_65",Ow="_questionText_6jjjs_78",Iw="_codeContext_6jjjs_87",Dw="_codeGap_6jjjs_103",Fw="_options_6jjjs_113",zw="_option_6jjjs_113",Bw="_disabled_6jjjs_136",Uw="_selected_6jjjs_142",Gw="_optionLetter_6jjjs_162",Hw="_optionCode_6jjjs_192",$w="_optionText_6jjjs_199",Vw="_feedback_6jjjs_204",Qw="_fadeIn_6jjjs_1",Jw="_feedbackTitle_6jjjs_225",Ww="_navRow_6jjjs_231",Kw="_nextBtn_6jjjs_237",Yw="_results_6jjjs_255",Xw="_scoreCircle_6jjjs_260",Zw="_great_6jjjs_273",eA="_good_6jjjs_279",tA="_low_6jjjs_285",rA="_scoreNumber_6jjjs_291",aA="_scoreLabel_6jjjs_296",nA="_resultsTitle_6jjjs_304",iA="_resultsSubtitle_6jjjs_311",sA="_resultsSummary_6jjjs_317",lA="_statBox_6jjjs_324",oA="_statNumber_6jjjs_328",cA="_green_6jjjs_333",uA="_red_6jjjs_334",dA="_statLabel_6jjjs_336",pA="_retryBtn_6jjjs_343",ie={quizContainer:Aw,progressBar:Lw,progressDot:Rw,done:Mw,correct:Tw,wrong:Nw,active:kw,questionCard:Pw,questionNumber:_w,questionType:qw,questionText:Ow,codeContext:Iw,codeGap:Dw,options:Fw,option:zw,disabled:Bw,selected:Uw,optionLetter:Gw,optionCode:Hw,optionText:$w,feedback:Vw,fadeIn:Qw,feedbackTitle:Jw,navRow:Ww,nextBtn:Kw,results:Yw,scoreCircle:Xw,great:Zw,good:eA,low:tA,scoreNumber:rA,scoreLabel:aA,resultsTitle:nA,resultsSubtitle:iA,resultsSummary:sA,statBox:lA,statNumber:oA,green:cA,red:uA,statLabel:dA,retryBtn:pA},mA=["A","B","C","D"];function hA({questions:t,onFinish:r}){const[a,n]=A.useState(0),[i,s]=A.useState(null),[l,o]=A.useState(!1),[c,u]=A.useState([]),m=t[a],d=i===(m==null?void 0:m.correctIndex),x=a>=t.length,y=A.useCallback(E=>{l||(s(E),o(!0),u(h=>[...h,E===m.correctIndex]))},[l,m]),v=A.useCallback(()=>{s(null),o(!1),n(E=>E+1)},[]),b=A.useCallback(()=>{n(0),s(null),o(!1),u([])},[]);if(x){const E=c.filter(Boolean).length,h=t.length,p=Math.round(E/h*100),j=p>=80?"great":p>=50?"good":"low",R=p>=80?"Molt be! Domines MVC!":p>=50?"Bon treball! Repassa els errors.":"Cal repassar una mica mes. Torna-ho a intentar!";return e.jsxs("div",{className:ie.results,children:[e.jsxs("div",{className:`${ie.scoreCircle} ${ie[j]}`,children:[e.jsxs("span",{className:ie.scoreNumber,children:[p,"%"]}),e.jsx("span",{className:ie.scoreLabel,children:"encerts"})]}),e.jsx("h2",{className:ie.resultsTitle,children:R}),e.jsxs("p",{className:ie.resultsSubtitle,children:["Has encertat ",E," de ",h," preguntes"]}),e.jsxs("div",{className:ie.resultsSummary,children:[e.jsxs("div",{className:ie.statBox,children:[e.jsx("div",{className:`${ie.statNumber} ${ie.green}`,children:E}),e.jsx("div",{className:ie.statLabel,children:"Correctes"})]}),e.jsxs("div",{className:ie.statBox,children:[e.jsx("div",{className:`${ie.statNumber} ${ie.red}`,children:h-E}),e.jsx("div",{className:ie.statLabel,children:"Incorrectes"})]})]}),e.jsx("button",{className:ie.retryBtn,onClick:b,children:"Torna a intentar-ho"})]})}return e.jsxs("div",{className:ie.quizContainer,children:[e.jsx("div",{className:ie.progressBar,children:t.map((E,h)=>{let p=ie.progressDot;return h<c.length?p+=` ${c[h]?ie.correct:ie.wrong}`:h===a&&(p+=` ${ie.active}`),e.jsx("div",{className:p},h)})}),e.jsxs("div",{className:`${ie.questionCard} ${l?d?ie.correct:ie.wrong:""}`,children:[e.jsxs("div",{className:ie.questionNumber,children:["Pregunta ",a+1," de ",t.length,e.jsx("span",{className:ie.questionType,children:m.type})]}),e.jsx("div",{className:ie.questionText,children:m.question}),m.code&&e.jsx("div",{className:ie.codeContext,children:e.jsx("pre",{dangerouslySetInnerHTML:{__html:m.code}})}),e.jsx("div",{className:ie.options,children:m.options.map((E,h)=>{let p=`${ie.option}`;return l?(p+=` ${ie.disabled}`,h===m.correctIndex?p+=` ${ie.correct}`:h===i&&(p+=` ${ie.wrong}`)):h===i&&(p+=` ${ie.selected}`),e.jsxs("button",{className:p,onClick:()=>y(h),children:[e.jsx("span",{className:ie.optionLetter,children:mA[h]}),e.jsx("span",{className:E.isCode?ie.optionCode:ie.optionText,children:E.text})]},h)})}),l&&e.jsxs("div",{className:`${ie.feedback} ${d?ie.correct:ie.wrong}`,children:[e.jsx("div",{className:ie.feedbackTitle,children:d?"Correcte!":"Incorrecte!"}),e.jsx("div",{children:m.explanation})]}),l&&e.jsx("div",{className:ie.navRow,children:e.jsx("button",{className:ie.nextBtn,onClick:v,children:a<t.length-1?"Seguent pregunta":"Veure resultats"})})]})]})}const fA=[{type:"On va?",question:"A quina capa MVC pertany aquest codi?",code:`<span style="color:#ffd700">public class</span> <span style="color:#e5c07b">Alumne</span> {
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
}`,options:[{text:"demanarOpcio() — la Vista no hauria de llegir input",isCode:!1},{text:"processarComanda() — la Vista esta fent feina del Controller",isCode:!1},{text:"El Scanner — no es pot usar a la Vista",isCode:!1},{text:"No hi ha cap error",isCode:!1}],correctIndex:1,explanation:"La Vista pot llegir input (demanarOpcio es correcte), pero processarComanda() pren decisions i opera amb el Model. Aixo es feina del Controller! La Vista nomes mostra i recull dades."}];function xA(){return e.jsxs("div",{children:[e.jsx(S,{title:"Quiz: Domines el patro MVC?"}),e.jsx(f,{variant:"info",title:"Com funciona?",children:e.jsx("p",{children:"12 preguntes amb fragments de codi reals. Has d'identificar a quina capa MVC pertany cada codi, completar fragments o trobar errors. Al final veuràs la teva puntuacio. A veure qui treu un 100%!"})}),e.jsx(hA,{questions:fA})]})}function gA(){return e.jsxs("article",{children:[e.jsx(f,{variant:"warning",title:"Material del professorat",children:"Aquesta pàgina conté exercicis i solucions. No és visible per als alumnes."}),e.jsx(S,{title:"Exercicis Pràctics - POO"}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 1: Gestió d'una Agenda"}),e.jsxs(f,{variant:"explanation",children:[e.jsx("p",{children:"Crea un programa orientat a objectes per gestionar una agenda de contactes."}),e.jsx("p",{style:{marginTop:"10px"},children:e.jsx("strong",{children:"Requisits:"})}),e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsxs("li",{children:["Classe ",e.jsx("code",{children:"Contacte"})," amb atributs: nom, telefon, email (tots privats)"]}),e.jsx("li",{children:"Constructor que inicialitzi tots els atributs"}),e.jsx("li",{children:"Getters i setters per a cada atribut"}),e.jsxs("li",{children:["Mètode ",e.jsx("code",{children:"mostrarInfo()"})," que imprimeixi les dades del contacte"]}),e.jsxs("li",{children:["Classe ",e.jsx("code",{children:"Agenda"})," amb un array de Contacte i mètodes per afegir, buscar i eliminar"]}),e.jsxs("li",{children:["Classe ",e.jsx("code",{children:"TestAgenda"})," amb el main per provar-ho"]})]})]}),e.jsx(g,{label:"Solució - Contacte.java",code:`public class Contacte {
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
}`})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 2: Sistema de Productes"}),e.jsxs(f,{variant:"explanation",children:[e.jsx("p",{children:"Crea un sistema de gestió de productes per a una botiga."}),e.jsx("p",{style:{marginTop:"10px"},children:e.jsx("strong",{children:"Requisits:"})}),e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsxs("li",{children:["Classe ",e.jsx("code",{children:"Producte"})," amb: nom, preu, quantitat (privats)"]}),e.jsx("li",{children:"Constructor amb tots els atributs"}),e.jsx("li",{children:"Getters i setters"}),e.jsxs("li",{children:["Mètode ",e.jsx("code",{children:"calcularValorTotal()"})," que retorni preu * quantitat"]}),e.jsxs("li",{children:["Classe ",e.jsx("code",{children:"Botiga"})," amb array de Producte i mètodes per afegir, buscar per nom, i calcular el valor total de l'inventari"]})]})]}),e.jsx(g,{label:"Solució - Producte.java",code:`public class Producte {
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
}`})]})]})}function vA(){return e.jsxs("article",{children:[e.jsx(f,{variant:"warning",title:"Material del professorat",children:"Aquesta pàgina conté exercicis i solucions. No és visible per als alumnes."}),e.jsx(S,{title:"Exercicis Pràctics - Modularitat"}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 1: Gestió de Text"}),e.jsxs(f,{variant:"explanation",children:[e.jsx("p",{children:e.jsx("strong",{children:"Estructura:"})}),e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"utilitats.text.AnalitzadorText"})," - Classe amb mètodes d'anàlisi"]}),e.jsxs("li",{children:[e.jsx("code",{children:"programa.GestorText"})," - Programa principal"]})]}),e.jsx("p",{style:{marginTop:"10px"},children:e.jsx("strong",{children:"Mètodes a implementar:"})}),e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"comptarVocals(String text)"})," → int"]}),e.jsxs("li",{children:[e.jsx("code",{children:"comptarConsonants(String text)"})," → int"]}),e.jsxs("li",{children:[e.jsx("code",{children:"invertir(String text)"})," → String"]}),e.jsxs("li",{children:[e.jsx("code",{children:"esPalindrom(String text)"})," → boolean"]})]})]}),e.jsx(g,{label:"Solució - AnalitzadorText.java",code:`package utilitats.text;

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
}`})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 2: Conversió d'Unitats"}),e.jsxs(f,{variant:"explanation",children:[e.jsx("p",{children:e.jsx("strong",{children:"Estructura:"})}),e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsx("li",{children:e.jsx("code",{children:"utilitats.conversions.Temperatura"})}),e.jsx("li",{children:e.jsx("code",{children:"utilitats.conversions.Distancia"})}),e.jsx("li",{children:e.jsx("code",{children:"utilitats.conversions.Pes"})}),e.jsxs("li",{children:[e.jsx("code",{children:"programa.Conversor"})," - Programa principal amb menú"]})]})]}),e.jsx(g,{label:"Solució - Temperatura.java",code:`package utilitats.conversions;

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
}`})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 3: Gestió de Contactes"}),e.jsxs(f,{variant:"explanation",children:[e.jsx("p",{children:e.jsx("strong",{children:"Estructura:"})}),e.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[e.jsx("li",{children:e.jsx("code",{children:"utilitats.contactes.GestorContactes"})}),e.jsxs("li",{children:[e.jsx("code",{children:"programa.Agenda"})," - Programa principal"]})]}),e.jsxs("p",{style:{marginTop:"10px"},children:[e.jsx("strong",{children:"Funcionalitats:"})," Afegir, buscar, eliminar, llistar contactes. Utilitza arrays paral·lels (noms[], telefons[])."]})]}),e.jsx(g,{label:"Solució - GestorContactes.java",code:`package utilitats.contactes;

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
}`}),e.jsx(f,{variant:"info",title:"Checklist de lliurament",children:e.jsxs("ol",{style:{paddingLeft:"20px"},children:[e.jsx("li",{children:"Estructura de packages correcta"}),e.jsx("li",{children:"Imports correctes entre packages"}),e.jsx("li",{children:"Tots els mètodes implementats"}),e.jsx("li",{children:"Programa principal funcional amb menú"}),e.jsx("li",{children:"Codi comentat"}),e.jsx("li",{children:"Proves amb dades d'exemple"}),e.jsx("li",{children:"Gestió bàsica d'errors"})]})})]})]})}function jA(){return e.jsxs("article",{children:[e.jsx(f,{variant:"warning",title:"Material del professorat",children:"Aquesta pàgina conté la plantilla d'examen i la solució completa del Paraulògic. No és visible per als alumnes."}),e.jsx(S,{title:"Examen: Paraulògic"}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Descripció de l'examen"}),e.jsxs(f,{variant:"explanation",children:[e.jsx("p",{children:"El Paraulògic és un joc de paraules on l'alumne ha d'implementar un programa Java que:"}),e.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px"},children:[e.jsx("li",{children:"Té 7 lletres disponibles, una d'elles és la lletra central"}),e.jsx("li",{children:"L'usuari introdueix paraules que han de complir regles específiques"}),e.jsx("li",{children:"Cada paraula vàlida suma punts segons la seva longitud"}),e.jsx("li",{children:"Si la paraula utilitza totes les 7 lletres és un TUTI (+10 punts extra)"})]})]}),e.jsx("h4",{style:{color:"#2563a8",margin:"20px 0 12px"},children:"Sistema de puntuació"}),e.jsx(J,{headers:["Longitud","Punts"],rows:[{cells:["3 lletres","1 punt"]},{cells:["4 lletres","2 punts"]},{cells:["5 lletres","5 punts"]},{cells:["6 lletres","6 punts"]},{cells:["7+ lletres","= longitud"]},{cells:["TUTI (totes 7)","+10 punts extra"]}]})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Mètodes obligatoris (capçalera donada)"}),e.jsxs(f,{variant:"info",title:"Capçaleres que han d'implementar",children:[e.jsx("p",{style:{fontFamily:"monospace",marginTop:"8px"},children:e.jsx("code",{children:"public boolean esParaulaValida(String paraula, char[] lletres, char letraC)"})}),e.jsx("p",{style:{marginTop:"8px"},children:"Retorna true si la paraula:"}),e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[e.jsx("li",{children:"Té 3+ lletres"}),e.jsx("li",{children:"Conté la lletra central"}),e.jsx("li",{children:"Només utilitza lletres del conjunt"})]}),e.jsx("p",{style:{fontFamily:"monospace",marginTop:"16px"},children:e.jsx("code",{children:"public int calcularPuntuacio(String paraula, char[] lletres)"})}),e.jsx("p",{style:{marginTop:"8px"},children:"Retorna els punts segons la taula + bonus TUTI."})]})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Plantilla per a l'alumne"}),e.jsx(g,{label:"Paraulogic.java - Plantilla alumne",code:`import java.util.Scanner;

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
}`})]})]})}const bA=Fj([{path:"/",element:e.jsx(Mb,{}),children:[{index:!0,element:e.jsx(Gb,{})},{path:"basics/tipus-de-dades",element:e.jsx(f0,{})},{path:"basics/operadors",element:e.jsx(T0,{})},{path:"basics/sintaxi",element:e.jsx(N0,{})},{path:"basics/condicionals",element:e.jsx(k0,{})},{path:"basics/switch",element:e.jsx(P0,{})},{path:"basics/bucles",element:e.jsx(_0,{})},{path:"basics/modificadors-acces",element:e.jsx(q0,{})},{path:"arrays/arrays-1d",element:e.jsx(Z0,{})},{path:"arrays/arrays-2d",element:e.jsx(gS,{})},{path:"arrays/arraylist",element:e.jsx(ZS,{})},{path:"funcions/sense-parametres",element:e.jsx(v1,{})},{path:"funcions/amb-parametres",element:e.jsx(S1,{})},{path:"funcions/tipus-de-funcions",element:e.jsx(k1,{})},{path:"funcions/recursives",element:e.jsx(aE,{})},{path:"funcions/cridar-des-de-main",element:e.jsx(lE,{})},{path:"funcions/resum",element:e.jsx(cE,{})},{path:"classes/introduccio",element:e.jsx(uE,{})},{path:"classes/classe-vs-objecte",element:e.jsx(dE,{})},{path:"classes/modificadors",element:e.jsx(pE,{})},{path:"classes/constructors-this",element:e.jsx(mE,{})},{path:"classes/herencia",element:e.jsx(EE,{})},{path:"classes/polimorfisme",element:e.jsx(IE,{})},{path:"classes/classes-abstractes",element:e.jsx(eC,{})},{path:"classes/exemple-biblioteca",element:e.jsx(tC,{})},{path:"modularitat/introduccio",element:e.jsx(rC,{})},{path:"modularitat/monolitic-vs-modular",element:e.jsx(aC,{})},{path:"modularitat/packages",element:e.jsx(nC,{})},{path:"modularitat/exemple-calculadora",element:e.jsx(iC,{})},{path:"string-math/classe-string",element:e.jsx(SC,{})},{path:"string-math/classe-math",element:e.jsx(kC,{})},{path:"string-math/random-vs-math-random",element:e.jsx(GC,{})},{path:"java-modern/for-each",element:e.jsx(HC,{})},{path:"java-modern/operador-ternari",element:e.jsx($C,{})},{path:"java-modern/var-i-altres",element:e.jsx(VC,{})},{path:"mon-professional/com-treballen-els-devs",element:e.jsx(QC,{})},{path:"spring-boot/que-es",element:e.jsx(tw,{})},{path:"spring-boot/primer-projecte",element:e.jsx(mw,{})},{path:"analisi-disseny/diagrames-classes",element:e.jsx(vw,{})},{path:"analisi-disseny/diagrames-sequencia",element:e.jsx(yw,{})},{path:"analisi-disseny/diagrames-flux",element:e.jsx(Sw,{})},{path:"analisi-disseny/casos-dus",element:e.jsx(Ew,{})},{path:"analisi-disseny/projecte-real",element:e.jsx(Cw,{})},{path:"analisi-disseny/introduccio-mvc",element:e.jsx(ww,{})},{path:"activitats/quiz-mvc",element:e.jsx(xA,{})},{path:"professor/exercicis-poo",element:e.jsx(gA,{})},{path:"professor/exercicis-modularitat",element:e.jsx(vA,{})},{path:"professor/paraulogic",element:e.jsx(jA,{})}]}]);function yA(){return e.jsx(Kj,{router:bA})}Gm(document.getElementById("root")).render(e.jsx(A.StrictMode,{children:e.jsx(yA,{})}));
