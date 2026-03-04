function Wf(e,t){for(var n=0;n<t.length;n++){const a=t[n];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(a,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Jf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rd={exports:{}},ds={},Ld={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),Qf=Symbol.for("react.portal"),Kf=Symbol.for("react.fragment"),Yf=Symbol.for("react.strict_mode"),Zf=Symbol.for("react.profiler"),Xf=Symbol.for("react.provider"),eh=Symbol.for("react.context"),th=Symbol.for("react.forward_ref"),rh=Symbol.for("react.suspense"),nh=Symbol.for("react.memo"),ah=Symbol.for("react.lazy"),Ic=Symbol.iterator;function ih(e){return e===null||typeof e!="object"?null:(e=Ic&&e[Ic]||e["@@iterator"],typeof e=="function"?e:null)}var Ad={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Md=Object.assign,Nd={};function qn(e,t,n){this.props=e,this.context=t,this.refs=Nd,this.updater=n||Ad}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pd(){}Pd.prototype=qn.prototype;function vo(e,t,n){this.props=e,this.context=t,this.refs=Nd,this.updater=n||Ad}var jo=vo.prototype=new Pd;jo.constructor=vo;Md(jo,qn.prototype);jo.isPureReactComponent=!0;var Fc=Array.isArray,_d=Object.prototype.hasOwnProperty,yo={current:null},Td={key:!0,ref:!0,__self:!0,__source:!0};function Od(e,t,n){var a,i={},s=null,l=null;if(t!=null)for(a in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)_d.call(t,a)&&!Td.hasOwnProperty(a)&&(i[a]=t[a]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(a in o=e.defaultProps,o)i[a]===void 0&&(i[a]=o[a]);return{$$typeof:Fa,type:e,key:s,ref:l,props:i,_owner:yo.current}}function sh(e,t){return{$$typeof:Fa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fa}function lh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var qc=/\/+/g;function Is(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lh(""+e.key):t.toString(36)}function bi(e,t,n,a,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Fa:case Qf:l=!0}}if(l)return l=e,i=i(l),e=a===""?"."+Is(l,0):a,Fc(i)?(n="",e!=null&&(n=e.replace(qc,"$&/")+"/"),bi(i,t,n,"",function(u){return u})):i!=null&&(bo(i)&&(i=sh(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(qc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,a=a===""?".":a+":",Fc(e))for(var o=0;o<e.length;o++){s=e[o];var c=a+Is(s,o);l+=bi(s,t,n,c,i)}else if(c=ih(e),typeof c=="function")for(e=c.call(e),o=0;!(s=e.next()).done;)s=s.value,c=a+Is(s,o++),l+=bi(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ei(e,t,n){if(e==null)return e;var a=[],i=0;return bi(e,a,"","",function(s){return t.call(n,s,i++)}),a}function oh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var at={current:null},Si={transition:null},ch={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:Si,ReactCurrentOwner:yo};function Dd(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:ei,forEach:function(e,t,n){ei(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ei(e,function(){t++}),t},toArray:function(e){return ei(e,function(t){return t})||[]},only:function(e){if(!bo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};se.Component=qn;se.Fragment=Kf;se.Profiler=Zf;se.PureComponent=vo;se.StrictMode=Yf;se.Suspense=rh;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ch;se.act=Dd;se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Md({},e.props),i=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=yo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)_d.call(t,c)&&!Td.hasOwnProperty(c)&&(a[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)a.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];a.children=o}return{$$typeof:Fa,type:e.type,key:i,ref:s,props:a,_owner:l}};se.createContext=function(e){return e={$$typeof:eh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xf,_context:e},e.Consumer=e};se.createElement=Od;se.createFactory=function(e){var t=Od.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:th,render:e}};se.isValidElement=bo;se.lazy=function(e){return{$$typeof:ah,_payload:{_status:-1,_result:e},_init:oh}};se.memo=function(e,t){return{$$typeof:nh,type:e,compare:t===void 0?null:t}};se.startTransition=function(e){var t=Si.transition;Si.transition={};try{e()}finally{Si.transition=t}};se.unstable_act=Dd;se.useCallback=function(e,t){return at.current.useCallback(e,t)};se.useContext=function(e){return at.current.useContext(e)};se.useDebugValue=function(){};se.useDeferredValue=function(e){return at.current.useDeferredValue(e)};se.useEffect=function(e,t){return at.current.useEffect(e,t)};se.useId=function(){return at.current.useId()};se.useImperativeHandle=function(e,t,n){return at.current.useImperativeHandle(e,t,n)};se.useInsertionEffect=function(e,t){return at.current.useInsertionEffect(e,t)};se.useLayoutEffect=function(e,t){return at.current.useLayoutEffect(e,t)};se.useMemo=function(e,t){return at.current.useMemo(e,t)};se.useReducer=function(e,t,n){return at.current.useReducer(e,t,n)};se.useRef=function(e){return at.current.useRef(e)};se.useState=function(e){return at.current.useState(e)};se.useSyncExternalStore=function(e,t,n){return at.current.useSyncExternalStore(e,t,n)};se.useTransition=function(){return at.current.useTransition()};se.version="18.3.1";Ld.exports=se;var R=Ld.exports;const uh=Jf(R),dh=Wf({__proto__:null,default:uh},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ph=R,mh=Symbol.for("react.element"),fh=Symbol.for("react.fragment"),hh=Object.prototype.hasOwnProperty,gh=ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xh={key:!0,ref:!0,__self:!0,__source:!0};function Id(e,t,n){var a,i={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(a in t)hh.call(t,a)&&!xh.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)i[a]===void 0&&(i[a]=t[a]);return{$$typeof:mh,type:e,key:s,ref:l,props:i,_owner:gh.current}}ds.Fragment=fh;ds.jsx=Id;ds.jsxs=Id;Rd.exports=ds;var r=Rd.exports,Fd={exports:{}},xt={},qd={exports:{}},zd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,z){var U=I.length;I.push(z);e:for(;0<U;){var te=U-1>>>1,oe=I[te];if(0<i(oe,z))I[te]=z,I[U]=oe,U=te;else break e}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var z=I[0],U=I.pop();if(U!==z){I[0]=U;e:for(var te=0,oe=I.length,ve=oe>>>1;te<ve;){var Ee=2*(te+1)-1,Ie=I[Ee],ye=Ee+1,$e=I[ye];if(0>i(Ie,U))ye<oe&&0>i($e,Ie)?(I[te]=$e,I[ye]=U,te=ye):(I[te]=Ie,I[Ee]=U,te=Ee);else if(ye<oe&&0>i($e,U))I[te]=$e,I[ye]=U,te=ye;else break e}}return z}function i(I,z){var U=I.sortIndex-z.sortIndex;return U!==0?U:I.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var c=[],u=[],m=1,d=null,f=3,j=!1,g=!1,v=!1,y=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var z=n(u);z!==null;){if(z.callback===null)a(u);else if(z.startTime<=I)a(u),z.sortIndex=z.expirationTime,t(c,z);else break;z=n(u)}}function L(I){if(v=!1,x(I),!g)if(n(c)!==null)g=!0,le(M);else{var z=n(u);z!==null&&me(L,z.startTime-I)}}function M(I,z){g=!1,v&&(v=!1,h(w),w=-1),j=!0;var U=f;try{for(x(z),d=n(c);d!==null&&(!(d.expirationTime>z)||I&&!ne());){var te=d.callback;if(typeof te=="function"){d.callback=null,f=d.priorityLevel;var oe=te(d.expirationTime<=z);z=e.unstable_now(),typeof oe=="function"?d.callback=oe:d===n(c)&&a(c),x(z)}else a(c);d=n(c)}if(d!==null)var ve=!0;else{var Ee=n(u);Ee!==null&&me(L,Ee.startTime-z),ve=!1}return ve}finally{d=null,f=U,j=!1}}var _=!1,T=null,w=-1,H=5,q=-1;function ne(){return!(e.unstable_now()-q<H)}function Y(){if(T!==null){var I=e.unstable_now();q=I;var z=!0;try{z=T(!0,I)}finally{z?ke():(_=!1,T=null)}}else _=!1}var ke;if(typeof p=="function")ke=function(){p(Y)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,ue=Z.port2;Z.port1.onmessage=Y,ke=function(){ue.postMessage(null)}}else ke=function(){y(Y,0)};function le(I){T=I,_||(_=!0,ke())}function me(I,z){w=y(function(){I(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){g||j||(g=!0,le(M))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(I){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var U=f;f=z;try{return I()}finally{f=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var U=f;f=I;try{return z()}finally{f=U}},e.unstable_scheduleCallback=function(I,z,U){var te=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?te+U:te):U=te,I){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=U+oe,I={id:m++,callback:z,priorityLevel:I,startTime:U,expirationTime:oe,sortIndex:-1},U>te?(I.sortIndex=U,t(u,I),n(c)===null&&I===n(u)&&(v?(h(w),w=-1):v=!0,me(L,U-te))):(I.sortIndex=oe,t(c,I),g||j||(g=!0,le(M))),I},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(I){var z=f;return function(){var U=f;f=z;try{return I.apply(this,arguments)}finally{f=U}}}})(zd);qd.exports=zd;var vh=qd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jh=R,gt=vh;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bd=new Set,va={};function tn(e,t){Pn(e,t),Pn(e+"Capture",t)}function Pn(e,t){for(va[e]=t,e=0;e<t.length;e++)Bd.add(t[e])}var sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bl=Object.prototype.hasOwnProperty,yh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zc={},Bc={};function bh(e){return bl.call(Bc,e)?!0:bl.call(zc,e)?!1:yh.test(e)?Bc[e]=!0:(zc[e]=!0,!1)}function Sh(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wh(e,t,n,a){if(t===null||typeof t>"u"||Sh(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function it(e,t,n,a,i,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ge[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ge[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ge[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ge[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ge[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ge[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ge[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ge[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ge[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var So=/[\-:]([a-z])/g;function wo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(So,wo);Ge[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(So,wo);Ge[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(So,wo);Ge[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ge[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ge[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});function Eo(e,t,n,a){var i=Ge.hasOwnProperty(t)?Ge[t]:null;(i!==null?i.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wh(t,n,i,a)&&(n=null),a||i===null?bh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,a=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var ur=jh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ti=Symbol.for("react.element"),dn=Symbol.for("react.portal"),pn=Symbol.for("react.fragment"),Co=Symbol.for("react.strict_mode"),Sl=Symbol.for("react.profiler"),Ud=Symbol.for("react.provider"),$d=Symbol.for("react.context"),ko=Symbol.for("react.forward_ref"),wl=Symbol.for("react.suspense"),El=Symbol.for("react.suspense_list"),Ro=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),Hd=Symbol.for("react.offscreen"),Uc=Symbol.iterator;function Vn(e){return e===null||typeof e!="object"?null:(e=Uc&&e[Uc]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Object.assign,Fs;function ra(e){if(Fs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fs=t&&t[1]||""}return`
`+Fs+e}var qs=!1;function zs(e,t){if(!e||qs)return"";qs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var a=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){a=u}e.call(t.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=a.stack.split(`
`),l=i.length-1,o=s.length-1;1<=l&&0<=o&&i[l]!==s[o];)o--;for(;1<=l&&0<=o;l--,o--)if(i[l]!==s[o]){if(l!==1||o!==1)do if(l--,o--,0>o||i[l]!==s[o]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=o);break}}}finally{qs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ra(e):""}function Eh(e){switch(e.tag){case 5:return ra(e.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 2:case 15:return e=zs(e.type,!1),e;case 11:return e=zs(e.type.render,!1),e;case 1:return e=zs(e.type,!0),e;default:return""}}function Cl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pn:return"Fragment";case dn:return"Portal";case Sl:return"Profiler";case Co:return"StrictMode";case wl:return"Suspense";case El:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $d:return(e.displayName||"Context")+".Consumer";case Ud:return(e._context.displayName||"Context")+".Provider";case ko:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ro:return t=e.displayName||null,t!==null?t:Cl(e.type)||"Memo";case hr:t=e._payload,e=e._init;try{return Cl(e(t))}catch{}}return null}function Ch(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cl(t);case 8:return t===Co?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kh(e){var t=Vd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){a=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(l){a=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ri(e){e._valueTracker||(e._valueTracker=kh(e))}function Gd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Vd(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kl(e,t){var n=t.checked;return Me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $c(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=Pr(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wd(e,t){t=t.checked,t!=null&&Eo(e,"checked",t,!1)}function Rl(e,t){Wd(e,t);var n=Pr(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ll(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ll(e,t.type,Pr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ll(e,t,n){(t!=="number"||Fi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var na=Array.isArray;function En(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Pr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Al(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return Me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(na(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pr(n)}}function Jd(e,t){var n=Pr(t.value),a=Pr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function Gc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ml(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ni,Kd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ni=ni||document.createElement("div"),ni.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ni.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ja(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rh=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(e){Rh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),oa[t]=oa[e]})});function Yd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||oa.hasOwnProperty(e)&&oa[e]?(""+t).trim():t+"px"}function Zd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,i=Yd(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,i):e[n]=i}}var Lh=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nl(e,t){if(t){if(Lh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Pl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _l=null;function Lo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tl=null,Cn=null,kn=null;function Wc(e){if(e=Ba(e)){if(typeof Tl!="function")throw Error(D(280));var t=e.stateNode;t&&(t=gs(t),Tl(e.stateNode,e.type,t))}}function Xd(e){Cn?kn?kn.push(e):kn=[e]:Cn=e}function ep(){if(Cn){var e=Cn,t=kn;if(kn=Cn=null,Wc(e),t)for(e=0;e<t.length;e++)Wc(t[e])}}function tp(e,t){return e(t)}function rp(){}var Bs=!1;function np(e,t,n){if(Bs)return e(t,n);Bs=!0;try{return tp(e,t,n)}finally{Bs=!1,(Cn!==null||kn!==null)&&(rp(),ep())}}function ya(e,t){var n=e.stateNode;if(n===null)return null;var a=gs(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var Ol=!1;if(sr)try{var Gn={};Object.defineProperty(Gn,"passive",{get:function(){Ol=!0}}),window.addEventListener("test",Gn,Gn),window.removeEventListener("test",Gn,Gn)}catch{Ol=!1}function Ah(e,t,n,a,i,s,l,o,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var ca=!1,qi=null,zi=!1,Dl=null,Mh={onError:function(e){ca=!0,qi=e}};function Nh(e,t,n,a,i,s,l,o,c){ca=!1,qi=null,Ah.apply(Mh,arguments)}function Ph(e,t,n,a,i,s,l,o,c){if(Nh.apply(this,arguments),ca){if(ca){var u=qi;ca=!1,qi=null}else throw Error(D(198));zi||(zi=!0,Dl=u)}}function rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ap(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jc(e){if(rn(e)!==e)throw Error(D(188))}function _h(e){var t=e.alternate;if(!t){if(t=rn(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Jc(i),e;if(s===a)return Jc(i),t;s=s.sibling}throw Error(D(188))}if(n.return!==a.return)n=i,a=s;else{for(var l=!1,o=i.child;o;){if(o===n){l=!0,n=i,a=s;break}if(o===a){l=!0,a=i,n=s;break}o=o.sibling}if(!l){for(o=s.child;o;){if(o===n){l=!0,n=s,a=i;break}if(o===a){l=!0,a=s,n=i;break}o=o.sibling}if(!l)throw Error(D(189))}}if(n.alternate!==a)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function ip(e){return e=_h(e),e!==null?sp(e):null}function sp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sp(e);if(t!==null)return t;e=e.sibling}return null}var lp=gt.unstable_scheduleCallback,Qc=gt.unstable_cancelCallback,Th=gt.unstable_shouldYield,Oh=gt.unstable_requestPaint,Te=gt.unstable_now,Dh=gt.unstable_getCurrentPriorityLevel,Ao=gt.unstable_ImmediatePriority,op=gt.unstable_UserBlockingPriority,Bi=gt.unstable_NormalPriority,Ih=gt.unstable_LowPriority,cp=gt.unstable_IdlePriority,ps=null,Ht=null;function Fh(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(ps,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:Bh,qh=Math.log,zh=Math.LN2;function Bh(e){return e>>>=0,e===0?32:31-(qh(e)/zh|0)|0}var ai=64,ii=4194304;function aa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ui(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var o=l&~i;o!==0?a=aa(o):(s&=l,s!==0&&(a=aa(s)))}else l=n&~i,l!==0?a=aa(l):s!==0&&(a=aa(s));if(a===0)return 0;if(t!==0&&t!==a&&!(t&i)&&(i=a&-a,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(a&4&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-Ot(t),i=1<<n,a|=e[n],t&=~i;return a}function Uh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $h(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-Ot(s),o=1<<l,c=i[l];c===-1?(!(o&n)||o&a)&&(i[l]=Uh(o,t)):c<=t&&(e.expiredLanes|=o),s&=~o}}function Il(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function up(){var e=ai;return ai<<=1,!(ai&4194240)&&(ai=64),e}function Us(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function Hh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),s=1<<i;t[i]=0,a[i]=-1,e[i]=-1,n&=~s}}function Mo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Ot(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}var he=0;function dp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pp,No,mp,fp,hp,Fl=!1,si=[],Er=null,Cr=null,kr=null,ba=new Map,Sa=new Map,xr=[],Vh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kc(e,t){switch(e){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":kr=null;break;case"pointerover":case"pointerout":ba.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(t.pointerId)}}function Wn(e,t,n,a,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Ba(t),t!==null&&No(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Gh(e,t,n,a,i){switch(t){case"focusin":return Er=Wn(Er,e,t,n,a,i),!0;case"dragenter":return Cr=Wn(Cr,e,t,n,a,i),!0;case"mouseover":return kr=Wn(kr,e,t,n,a,i),!0;case"pointerover":var s=i.pointerId;return ba.set(s,Wn(ba.get(s)||null,e,t,n,a,i)),!0;case"gotpointercapture":return s=i.pointerId,Sa.set(s,Wn(Sa.get(s)||null,e,t,n,a,i)),!0}return!1}function gp(e){var t=Hr(e.target);if(t!==null){var n=rn(t);if(n!==null){if(t=n.tag,t===13){if(t=ap(n),t!==null){e.blockedOn=t,hp(e.priority,function(){mp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ql(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);_l=a,n.target.dispatchEvent(a),_l=null}else return t=Ba(n),t!==null&&No(t),e.blockedOn=n,!1;t.shift()}return!0}function Yc(e,t,n){wi(e)&&n.delete(t)}function Wh(){Fl=!1,Er!==null&&wi(Er)&&(Er=null),Cr!==null&&wi(Cr)&&(Cr=null),kr!==null&&wi(kr)&&(kr=null),ba.forEach(Yc),Sa.forEach(Yc)}function Jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Fl||(Fl=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,Wh)))}function wa(e){function t(i){return Jn(i,e)}if(0<si.length){Jn(si[0],e);for(var n=1;n<si.length;n++){var a=si[n];a.blockedOn===e&&(a.blockedOn=null)}}for(Er!==null&&Jn(Er,e),Cr!==null&&Jn(Cr,e),kr!==null&&Jn(kr,e),ba.forEach(t),Sa.forEach(t),n=0;n<xr.length;n++)a=xr[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<xr.length&&(n=xr[0],n.blockedOn===null);)gp(n),n.blockedOn===null&&xr.shift()}var Rn=ur.ReactCurrentBatchConfig,$i=!0;function Jh(e,t,n,a){var i=he,s=Rn.transition;Rn.transition=null;try{he=1,Po(e,t,n,a)}finally{he=i,Rn.transition=s}}function Qh(e,t,n,a){var i=he,s=Rn.transition;Rn.transition=null;try{he=4,Po(e,t,n,a)}finally{he=i,Rn.transition=s}}function Po(e,t,n,a){if($i){var i=ql(e,t,n,a);if(i===null)Zs(e,t,a,Hi,n),Kc(e,a);else if(Gh(i,e,t,n,a))a.stopPropagation();else if(Kc(e,a),t&4&&-1<Vh.indexOf(e)){for(;i!==null;){var s=Ba(i);if(s!==null&&pp(s),s=ql(e,t,n,a),s===null&&Zs(e,t,a,Hi,n),s===i)break;i=s}i!==null&&a.stopPropagation()}else Zs(e,t,a,null,n)}}var Hi=null;function ql(e,t,n,a){if(Hi=null,e=Lo(a),e=Hr(e),e!==null)if(t=rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ap(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Hi=e,null}function xp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dh()){case Ao:return 1;case op:return 4;case Bi:case Ih:return 16;case cp:return 536870912;default:return 16}default:return 16}}var br=null,_o=null,Ei=null;function vp(){if(Ei)return Ei;var e,t=_o,n=t.length,a,i="value"in br?br.value:br.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(a=1;a<=l&&t[n-a]===i[s-a];a++);return Ei=i.slice(e,1<a?1-a:void 0)}function Ci(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function li(){return!0}function Zc(){return!1}function vt(e){function t(n,a,i,s,l){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?li:Zc,this.isPropagationStopped=Zc,this}return Me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},To=vt(zn),za=Me({},zn,{view:0,detail:0}),Kh=vt(za),$s,Hs,Qn,ms=Me({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qn&&(Qn&&e.type==="mousemove"?($s=e.screenX-Qn.screenX,Hs=e.screenY-Qn.screenY):Hs=$s=0,Qn=e),$s)},movementY:function(e){return"movementY"in e?e.movementY:Hs}}),Xc=vt(ms),Yh=Me({},ms,{dataTransfer:0}),Zh=vt(Yh),Xh=Me({},za,{relatedTarget:0}),Vs=vt(Xh),eg=Me({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),tg=vt(eg),rg=Me({},zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ng=vt(rg),ag=Me({},zn,{data:0}),eu=vt(ag),ig={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function og(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lg[e])?!!t[e]:!1}function Oo(){return og}var cg=Me({},za,{key:function(e){if(e.key){var t=ig[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ci(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oo,charCode:function(e){return e.type==="keypress"?Ci(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ci(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ug=vt(cg),dg=Me({},ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=vt(dg),pg=Me({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oo}),mg=vt(pg),fg=Me({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),hg=vt(fg),gg=Me({},ms,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xg=vt(gg),vg=[9,13,27,32],Do=sr&&"CompositionEvent"in window,ua=null;sr&&"documentMode"in document&&(ua=document.documentMode);var jg=sr&&"TextEvent"in window&&!ua,jp=sr&&(!Do||ua&&8<ua&&11>=ua),ru=" ",nu=!1;function yp(e,t){switch(e){case"keyup":return vg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function yg(e,t){switch(e){case"compositionend":return bp(t);case"keypress":return t.which!==32?null:(nu=!0,ru);case"textInput":return e=t.data,e===ru&&nu?null:e;default:return null}}function bg(e,t){if(mn)return e==="compositionend"||!Do&&yp(e,t)?(e=vp(),Ei=_o=br=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jp&&t.locale!=="ko"?null:t.data;default:return null}}var Sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sg[e.type]:t==="textarea"}function Sp(e,t,n,a){Xd(a),t=Vi(t,"onChange"),0<t.length&&(n=new To("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var da=null,Ea=null;function wg(e){_p(e,0)}function fs(e){var t=gn(e);if(Gd(t))return e}function Eg(e,t){if(e==="change")return t}var wp=!1;if(sr){var Gs;if(sr){var Ws="oninput"in document;if(!Ws){var iu=document.createElement("div");iu.setAttribute("oninput","return;"),Ws=typeof iu.oninput=="function"}Gs=Ws}else Gs=!1;wp=Gs&&(!document.documentMode||9<document.documentMode)}function su(){da&&(da.detachEvent("onpropertychange",Ep),Ea=da=null)}function Ep(e){if(e.propertyName==="value"&&fs(Ea)){var t=[];Sp(t,Ea,e,Lo(e)),np(wg,t)}}function Cg(e,t,n){e==="focusin"?(su(),da=t,Ea=n,da.attachEvent("onpropertychange",Ep)):e==="focusout"&&su()}function kg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fs(Ea)}function Rg(e,t){if(e==="click")return fs(t)}function Lg(e,t){if(e==="input"||e==="change")return fs(t)}function Ag(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:Ag;function Ca(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!bl.call(t,i)||!Ft(e[i],t[i]))return!1}return!0}function lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,t){var n=lu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lu(n)}}function Cp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kp(){for(var e=window,t=Fi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fi(e.document)}return t}function Io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mg(e){var t=kp(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Cp(n.ownerDocument.documentElement,n)){if(a!==null&&Io(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(a.start,i);a=a.end===void 0?s:Math.min(a.end,i),!e.extend&&s>a&&(i=a,a=s,s=i),i=ou(n,s);var l=ou(n,a);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>a?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ng=sr&&"documentMode"in document&&11>=document.documentMode,fn=null,zl=null,pa=null,Bl=!1;function cu(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bl||fn==null||fn!==Fi(a)||(a=fn,"selectionStart"in a&&Io(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),pa&&Ca(pa,a)||(pa=a,a=Vi(zl,"onSelect"),0<a.length&&(t=new To("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=fn)))}function oi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hn={animationend:oi("Animation","AnimationEnd"),animationiteration:oi("Animation","AnimationIteration"),animationstart:oi("Animation","AnimationStart"),transitionend:oi("Transition","TransitionEnd")},Js={},Rp={};sr&&(Rp=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function hs(e){if(Js[e])return Js[e];if(!hn[e])return e;var t=hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rp)return Js[e]=t[n];return e}var Lp=hs("animationend"),Ap=hs("animationiteration"),Mp=hs("animationstart"),Np=hs("transitionend"),Pp=new Map,uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(e,t){Pp.set(e,t),tn(t,[e])}for(var Qs=0;Qs<uu.length;Qs++){var Ks=uu[Qs],Pg=Ks.toLowerCase(),_g=Ks[0].toUpperCase()+Ks.slice(1);Tr(Pg,"on"+_g)}Tr(Lp,"onAnimationEnd");Tr(Ap,"onAnimationIteration");Tr(Mp,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(Np,"onTransitionEnd");Pn("onMouseEnter",["mouseout","mouseover"]);Pn("onMouseLeave",["mouseout","mouseover"]);Pn("onPointerEnter",["pointerout","pointerover"]);Pn("onPointerLeave",["pointerout","pointerover"]);tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function du(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,Ph(a,t,void 0,e),e.currentTarget=null}function _p(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var l=a.length-1;0<=l;l--){var o=a[l],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&i.isPropagationStopped())break e;du(i,o,u),s=c}else for(l=0;l<a.length;l++){if(o=a[l],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&i.isPropagationStopped())break e;du(i,o,u),s=c}}}if(zi)throw e=Dl,zi=!1,Dl=null,e}function be(e,t){var n=t[Gl];n===void 0&&(n=t[Gl]=new Set);var a=e+"__bubble";n.has(a)||(Tp(t,e,2,!1),n.add(a))}function Ys(e,t,n){var a=0;t&&(a|=4),Tp(n,e,a,t)}var ci="_reactListening"+Math.random().toString(36).slice(2);function ka(e){if(!e[ci]){e[ci]=!0,Bd.forEach(function(n){n!=="selectionchange"&&(Tg.has(n)||Ys(n,!1,e),Ys(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ci]||(t[ci]=!0,Ys("selectionchange",!1,t))}}function Tp(e,t,n,a){switch(xp(t)){case 1:var i=Jh;break;case 4:i=Qh;break;default:i=Po}n=i.bind(null,t,n,e),i=void 0,!Ol||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Zs(e,t,n,a,i){var s=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var l=a.tag;if(l===3||l===4){var o=a.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(l===4)for(l=a.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;o!==null;){if(l=Hr(o),l===null)return;if(c=l.tag,c===5||c===6){a=s=l;continue e}o=o.parentNode}}a=a.return}np(function(){var u=s,m=Lo(n),d=[];e:{var f=Pp.get(e);if(f!==void 0){var j=To,g=e;switch(e){case"keypress":if(Ci(n)===0)break e;case"keydown":case"keyup":j=ug;break;case"focusin":g="focus",j=Vs;break;case"focusout":g="blur",j=Vs;break;case"beforeblur":case"afterblur":j=Vs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Zh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=mg;break;case Lp:case Ap:case Mp:j=tg;break;case Np:j=hg;break;case"scroll":j=Kh;break;case"wheel":j=xg;break;case"copy":case"cut":case"paste":j=ng;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=tu}var v=(t&4)!==0,y=!v&&e==="scroll",h=v?f!==null?f+"Capture":null:f;v=[];for(var p=u,x;p!==null;){x=p;var L=x.stateNode;if(x.tag===5&&L!==null&&(x=L,h!==null&&(L=ya(p,h),L!=null&&v.push(Ra(p,L,x)))),y)break;p=p.return}0<v.length&&(f=new j(f,g,null,n,m),d.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",f&&n!==_l&&(g=n.relatedTarget||n.fromElement)&&(Hr(g)||g[lr]))break e;if((j||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,j?(g=n.relatedTarget||n.toElement,j=u,g=g?Hr(g):null,g!==null&&(y=rn(g),g!==y||g.tag!==5&&g.tag!==6)&&(g=null)):(j=null,g=u),j!==g)){if(v=Xc,L="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=tu,L="onPointerLeave",h="onPointerEnter",p="pointer"),y=j==null?f:gn(j),x=g==null?f:gn(g),f=new v(L,p+"leave",j,n,m),f.target=y,f.relatedTarget=x,L=null,Hr(m)===u&&(v=new v(h,p+"enter",g,n,m),v.target=x,v.relatedTarget=y,L=v),y=L,j&&g)t:{for(v=j,h=g,p=0,x=v;x;x=on(x))p++;for(x=0,L=h;L;L=on(L))x++;for(;0<p-x;)v=on(v),p--;for(;0<x-p;)h=on(h),x--;for(;p--;){if(v===h||h!==null&&v===h.alternate)break t;v=on(v),h=on(h)}v=null}else v=null;j!==null&&pu(d,f,j,v,!1),g!==null&&y!==null&&pu(d,y,g,v,!0)}}e:{if(f=u?gn(u):window,j=f.nodeName&&f.nodeName.toLowerCase(),j==="select"||j==="input"&&f.type==="file")var M=Eg;else if(au(f))if(wp)M=Lg;else{M=kg;var _=Cg}else(j=f.nodeName)&&j.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(M=Rg);if(M&&(M=M(e,u))){Sp(d,M,n,m);break e}_&&_(e,f,u),e==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&Ll(f,"number",f.value)}switch(_=u?gn(u):window,e){case"focusin":(au(_)||_.contentEditable==="true")&&(fn=_,zl=u,pa=null);break;case"focusout":pa=zl=fn=null;break;case"mousedown":Bl=!0;break;case"contextmenu":case"mouseup":case"dragend":Bl=!1,cu(d,n,m);break;case"selectionchange":if(Ng)break;case"keydown":case"keyup":cu(d,n,m)}var T;if(Do)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else mn?yp(e,n)&&(w="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(jp&&n.locale!=="ko"&&(mn||w!=="onCompositionStart"?w==="onCompositionEnd"&&mn&&(T=vp()):(br=m,_o="value"in br?br.value:br.textContent,mn=!0)),_=Vi(u,w),0<_.length&&(w=new eu(w,e,null,n,m),d.push({event:w,listeners:_}),T?w.data=T:(T=bp(n),T!==null&&(w.data=T)))),(T=jg?yg(e,n):bg(e,n))&&(u=Vi(u,"onBeforeInput"),0<u.length&&(m=new eu("onBeforeInput","beforeinput",null,n,m),d.push({event:m,listeners:u}),m.data=T))}_p(d,t)})}function Ra(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vi(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ya(e,n),s!=null&&a.unshift(Ra(e,s,i)),s=ya(e,t),s!=null&&a.push(Ra(e,s,i))),e=e.return}return a}function on(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pu(e,t,n,a,i){for(var s=t._reactName,l=[];n!==null&&n!==a;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===a)break;o.tag===5&&u!==null&&(o=u,i?(c=ya(n,s),c!=null&&l.unshift(Ra(n,c,o))):i||(c=ya(n,s),c!=null&&l.push(Ra(n,c,o)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Og=/\r\n?/g,Dg=/\u0000|\uFFFD/g;function mu(e){return(typeof e=="string"?e:""+e).replace(Og,`
`).replace(Dg,"")}function ui(e,t,n){if(t=mu(t),mu(e)!==t&&n)throw Error(D(425))}function Gi(){}var Ul=null,$l=null;function Hl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vl=typeof setTimeout=="function"?setTimeout:void 0,Ig=typeof clearTimeout=="function"?clearTimeout:void 0,fu=typeof Promise=="function"?Promise:void 0,Fg=typeof queueMicrotask=="function"?queueMicrotask:typeof fu<"u"?function(e){return fu.resolve(null).then(e).catch(qg)}:Vl;function qg(e){setTimeout(function(){throw e})}function Xs(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(a===0){e.removeChild(i),wa(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=i}while(n);wa(t)}function Rr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Bn=Math.random().toString(36).slice(2),$t="__reactFiber$"+Bn,La="__reactProps$"+Bn,lr="__reactContainer$"+Bn,Gl="__reactEvents$"+Bn,zg="__reactListeners$"+Bn,Bg="__reactHandles$"+Bn;function Hr(e){var t=e[$t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lr]||n[$t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hu(e);e!==null;){if(n=e[$t])return n;e=hu(e)}return t}e=n,n=e.parentNode}return null}function Ba(e){return e=e[$t]||e[lr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function gs(e){return e[La]||null}var Wl=[],xn=-1;function Or(e){return{current:e}}function we(e){0>xn||(e.current=Wl[xn],Wl[xn]=null,xn--)}function je(e,t){xn++,Wl[xn]=e.current,e.current=t}var _r={},Xe=Or(_r),ot=Or(!1),Kr=_r;function _n(e,t){var n=e.type.contextTypes;if(!n)return _r;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ct(e){return e=e.childContextTypes,e!=null}function Wi(){we(ot),we(Xe)}function gu(e,t,n){if(Xe.current!==_r)throw Error(D(168));je(Xe,t),je(ot,n)}function Op(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var i in a)if(!(i in t))throw Error(D(108,Ch(e)||"Unknown",i));return Me({},n,a)}function Ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_r,Kr=Xe.current,je(Xe,e),je(ot,ot.current),!0}function xu(e,t,n){var a=e.stateNode;if(!a)throw Error(D(169));n?(e=Op(e,t,Kr),a.__reactInternalMemoizedMergedChildContext=e,we(ot),we(Xe),je(Xe,e)):we(ot),je(ot,n)}var rr=null,xs=!1,el=!1;function Dp(e){rr===null?rr=[e]:rr.push(e)}function Ug(e){xs=!0,Dp(e)}function Dr(){if(!el&&rr!==null){el=!0;var e=0,t=he;try{var n=rr;for(he=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}rr=null,xs=!1}catch(i){throw rr!==null&&(rr=rr.slice(e+1)),lp(Ao,Dr),i}finally{he=t,el=!1}}return null}var vn=[],jn=0,Qi=null,Ki=0,bt=[],St=0,Yr=null,nr=1,ar="";function Ur(e,t){vn[jn++]=Ki,vn[jn++]=Qi,Qi=e,Ki=t}function Ip(e,t,n){bt[St++]=nr,bt[St++]=ar,bt[St++]=Yr,Yr=e;var a=nr;e=ar;var i=32-Ot(a)-1;a&=~(1<<i),n+=1;var s=32-Ot(t)+i;if(30<s){var l=i-i%5;s=(a&(1<<l)-1).toString(32),a>>=l,i-=l,nr=1<<32-Ot(t)+i|n<<i|a,ar=s+e}else nr=1<<s|n<<i|a,ar=e}function Fo(e){e.return!==null&&(Ur(e,1),Ip(e,1,0))}function qo(e){for(;e===Qi;)Qi=vn[--jn],vn[jn]=null,Ki=vn[--jn],vn[jn]=null;for(;e===Yr;)Yr=bt[--St],bt[St]=null,ar=bt[--St],bt[St]=null,nr=bt[--St],bt[St]=null}var ht=null,ft=null,Ce=!1,Tt=null;function Fp(e,t){var n=wt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,ft=Rr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yr!==null?{id:nr,overflow:ar}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=wt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,ft=null,!0):!1;default:return!1}}function Jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ql(e){if(Ce){var t=ft;if(t){var n=t;if(!vu(e,t)){if(Jl(e))throw Error(D(418));t=Rr(n.nextSibling);var a=ht;t&&vu(e,t)?Fp(a,n):(e.flags=e.flags&-4097|2,Ce=!1,ht=e)}}else{if(Jl(e))throw Error(D(418));e.flags=e.flags&-4097|2,Ce=!1,ht=e}}}function ju(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function di(e){if(e!==ht)return!1;if(!Ce)return ju(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hl(e.type,e.memoizedProps)),t&&(t=ft)){if(Jl(e))throw qp(),Error(D(418));for(;t;)Fp(e,t),t=Rr(t.nextSibling)}if(ju(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=Rr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=ht?Rr(e.stateNode.nextSibling):null;return!0}function qp(){for(var e=ft;e;)e=Rr(e.nextSibling)}function Tn(){ft=ht=null,Ce=!1}function zo(e){Tt===null?Tt=[e]:Tt.push(e)}var $g=ur.ReactCurrentBatchConfig;function Kn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var a=n.stateNode}if(!a)throw Error(D(147,e));var i=a,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var o=i.refs;l===null?delete o[s]:o[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function pi(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yu(e){var t=e._init;return t(e._payload)}function zp(e){function t(h,p){if(e){var x=h.deletions;x===null?(h.deletions=[p],h.flags|=16):x.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function a(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=Nr(h,p),h.index=0,h.sibling=null,h}function s(h,p,x){return h.index=x,e?(x=h.alternate,x!==null?(x=x.index,x<p?(h.flags|=2,p):x):(h.flags|=2,p)):(h.flags|=1048576,p)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function o(h,p,x,L){return p===null||p.tag!==6?(p=ll(x,h.mode,L),p.return=h,p):(p=i(p,x),p.return=h,p)}function c(h,p,x,L){var M=x.type;return M===pn?m(h,p,x.props.children,L,x.key):p!==null&&(p.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===hr&&yu(M)===p.type)?(L=i(p,x.props),L.ref=Kn(h,p,x),L.return=h,L):(L=Pi(x.type,x.key,x.props,null,h.mode,L),L.ref=Kn(h,p,x),L.return=h,L)}function u(h,p,x,L){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=ol(x,h.mode,L),p.return=h,p):(p=i(p,x.children||[]),p.return=h,p)}function m(h,p,x,L,M){return p===null||p.tag!==7?(p=Qr(x,h.mode,L,M),p.return=h,p):(p=i(p,x),p.return=h,p)}function d(h,p,x){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ll(""+p,h.mode,x),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ti:return x=Pi(p.type,p.key,p.props,null,h.mode,x),x.ref=Kn(h,null,p),x.return=h,x;case dn:return p=ol(p,h.mode,x),p.return=h,p;case hr:var L=p._init;return d(h,L(p._payload),x)}if(na(p)||Vn(p))return p=Qr(p,h.mode,x,null),p.return=h,p;pi(h,p)}return null}function f(h,p,x,L){var M=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return M!==null?null:o(h,p,""+x,L);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ti:return x.key===M?c(h,p,x,L):null;case dn:return x.key===M?u(h,p,x,L):null;case hr:return M=x._init,f(h,p,M(x._payload),L)}if(na(x)||Vn(x))return M!==null?null:m(h,p,x,L,null);pi(h,x)}return null}function j(h,p,x,L,M){if(typeof L=="string"&&L!==""||typeof L=="number")return h=h.get(x)||null,o(p,h,""+L,M);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ti:return h=h.get(L.key===null?x:L.key)||null,c(p,h,L,M);case dn:return h=h.get(L.key===null?x:L.key)||null,u(p,h,L,M);case hr:var _=L._init;return j(h,p,x,_(L._payload),M)}if(na(L)||Vn(L))return h=h.get(x)||null,m(p,h,L,M,null);pi(p,L)}return null}function g(h,p,x,L){for(var M=null,_=null,T=p,w=p=0,H=null;T!==null&&w<x.length;w++){T.index>w?(H=T,T=null):H=T.sibling;var q=f(h,T,x[w],L);if(q===null){T===null&&(T=H);break}e&&T&&q.alternate===null&&t(h,T),p=s(q,p,w),_===null?M=q:_.sibling=q,_=q,T=H}if(w===x.length)return n(h,T),Ce&&Ur(h,w),M;if(T===null){for(;w<x.length;w++)T=d(h,x[w],L),T!==null&&(p=s(T,p,w),_===null?M=T:_.sibling=T,_=T);return Ce&&Ur(h,w),M}for(T=a(h,T);w<x.length;w++)H=j(T,h,w,x[w],L),H!==null&&(e&&H.alternate!==null&&T.delete(H.key===null?w:H.key),p=s(H,p,w),_===null?M=H:_.sibling=H,_=H);return e&&T.forEach(function(ne){return t(h,ne)}),Ce&&Ur(h,w),M}function v(h,p,x,L){var M=Vn(x);if(typeof M!="function")throw Error(D(150));if(x=M.call(x),x==null)throw Error(D(151));for(var _=M=null,T=p,w=p=0,H=null,q=x.next();T!==null&&!q.done;w++,q=x.next()){T.index>w?(H=T,T=null):H=T.sibling;var ne=f(h,T,q.value,L);if(ne===null){T===null&&(T=H);break}e&&T&&ne.alternate===null&&t(h,T),p=s(ne,p,w),_===null?M=ne:_.sibling=ne,_=ne,T=H}if(q.done)return n(h,T),Ce&&Ur(h,w),M;if(T===null){for(;!q.done;w++,q=x.next())q=d(h,q.value,L),q!==null&&(p=s(q,p,w),_===null?M=q:_.sibling=q,_=q);return Ce&&Ur(h,w),M}for(T=a(h,T);!q.done;w++,q=x.next())q=j(T,h,w,q.value,L),q!==null&&(e&&q.alternate!==null&&T.delete(q.key===null?w:q.key),p=s(q,p,w),_===null?M=q:_.sibling=q,_=q);return e&&T.forEach(function(Y){return t(h,Y)}),Ce&&Ur(h,w),M}function y(h,p,x,L){if(typeof x=="object"&&x!==null&&x.type===pn&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ti:e:{for(var M=x.key,_=p;_!==null;){if(_.key===M){if(M=x.type,M===pn){if(_.tag===7){n(h,_.sibling),p=i(_,x.props.children),p.return=h,h=p;break e}}else if(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===hr&&yu(M)===_.type){n(h,_.sibling),p=i(_,x.props),p.ref=Kn(h,_,x),p.return=h,h=p;break e}n(h,_);break}else t(h,_);_=_.sibling}x.type===pn?(p=Qr(x.props.children,h.mode,L,x.key),p.return=h,h=p):(L=Pi(x.type,x.key,x.props,null,h.mode,L),L.ref=Kn(h,p,x),L.return=h,h=L)}return l(h);case dn:e:{for(_=x.key;p!==null;){if(p.key===_)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){n(h,p.sibling),p=i(p,x.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=ol(x,h.mode,L),p.return=h,h=p}return l(h);case hr:return _=x._init,y(h,p,_(x._payload),L)}if(na(x))return g(h,p,x,L);if(Vn(x))return v(h,p,x,L);pi(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,x),p.return=h,h=p):(n(h,p),p=ll(x,h.mode,L),p.return=h,h=p),l(h)):n(h,p)}return y}var On=zp(!0),Bp=zp(!1),Yi=Or(null),Zi=null,yn=null,Bo=null;function Uo(){Bo=yn=Zi=null}function $o(e){var t=Yi.current;we(Yi),e._currentValue=t}function Kl(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Ln(e,t){Zi=e,Bo=yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(lt=!0),e.firstContext=null)}function Ct(e){var t=e._currentValue;if(Bo!==e)if(e={context:e,memoizedValue:t,next:null},yn===null){if(Zi===null)throw Error(D(308));yn=e,Zi.dependencies={lanes:0,firstContext:e}}else yn=yn.next=e;return t}var Vr=null;function Ho(e){Vr===null?Vr=[e]:Vr.push(e)}function Up(e,t,n,a){var i=t.interleaved;return i===null?(n.next=n,Ho(t)):(n.next=i.next,i.next=n),t.interleaved=n,or(e,a)}function or(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gr=!1;function Vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $p(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ir(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Lr(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,pe&2){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,or(e,n)}return i=a.interleaved,i===null?(t.next=t,Ho(a)):(t.next=i.next,i.next=t),a.interleaved=t,or(e,n)}function ki(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Mo(e,n)}}function bu(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xi(e,t,n,a){var i=e.updateQueue;gr=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,u=c.next;c.next=null,l===null?s=u:l.next=u,l=c;var m=e.alternate;m!==null&&(m=m.updateQueue,o=m.lastBaseUpdate,o!==l&&(o===null?m.firstBaseUpdate=u:o.next=u,m.lastBaseUpdate=c))}if(s!==null){var d=i.baseState;l=0,m=u=c=null,o=s;do{var f=o.lane,j=o.eventTime;if((a&f)===f){m!==null&&(m=m.next={eventTime:j,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=e,v=o;switch(f=t,j=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(j,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(j,d,f):g,f==null)break e;d=Me({},d,f);break e;case 2:gr=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[o]:f.push(o))}else j={eventTime:j,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},m===null?(u=m=j,c=d):m=m.next=j,l|=f;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;f=o,o=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(m===null&&(c=d),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Xr|=l,e.lanes=l,e.memoizedState=d}}function Su(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],i=a.callback;if(i!==null){if(a.callback=null,a=n,typeof i!="function")throw Error(D(191,i));i.call(a)}}}var Ua={},Vt=Or(Ua),Aa=Or(Ua),Ma=Or(Ua);function Gr(e){if(e===Ua)throw Error(D(174));return e}function Go(e,t){switch(je(Ma,t),je(Aa,e),je(Vt,Ua),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ml(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ml(t,e)}we(Vt),je(Vt,t)}function Dn(){we(Vt),we(Aa),we(Ma)}function Hp(e){Gr(Ma.current);var t=Gr(Vt.current),n=Ml(t,e.type);t!==n&&(je(Aa,e),je(Vt,n))}function Wo(e){Aa.current===e&&(we(Vt),we(Aa))}var Le=Or(0);function es(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var tl=[];function Jo(){for(var e=0;e<tl.length;e++)tl[e]._workInProgressVersionPrimary=null;tl.length=0}var Ri=ur.ReactCurrentDispatcher,rl=ur.ReactCurrentBatchConfig,Zr=0,Ae=null,Fe=null,Be=null,ts=!1,ma=!1,Na=0,Hg=0;function Qe(){throw Error(D(321))}function Qo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ft(e[n],t[n]))return!1;return!0}function Ko(e,t,n,a,i,s){if(Zr=s,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ri.current=e===null||e.memoizedState===null?Jg:Qg,e=n(a,i),ma){s=0;do{if(ma=!1,Na=0,25<=s)throw Error(D(301));s+=1,Be=Fe=null,t.updateQueue=null,Ri.current=Kg,e=n(a,i)}while(ma)}if(Ri.current=rs,t=Fe!==null&&Fe.next!==null,Zr=0,Be=Fe=Ae=null,ts=!1,t)throw Error(D(300));return e}function Yo(){var e=Na!==0;return Na=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ae.memoizedState=Be=e:Be=Be.next=e,Be}function kt(){if(Fe===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=Be===null?Ae.memoizedState:Be.next;if(t!==null)Be=t,Fe=e;else{if(e===null)throw Error(D(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Be===null?Ae.memoizedState=Be=e:Be=Be.next=e}return Be}function Pa(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=kt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var a=Fe,i=a.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}a.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,a=a.baseState;var o=l=null,c=null,u=s;do{var m=u.lane;if((Zr&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var d={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=d,l=a):c=c.next=d,Ae.lanes|=m,Xr|=m}u=u.next}while(u!==null&&u!==s);c===null?l=a:c.next=o,Ft(a,t.memoizedState)||(lt=!0),t.memoizedState=a,t.baseState=l,t.baseQueue=c,n.lastRenderedState=a}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Ae.lanes|=s,Xr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function al(e){var t=kt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);Ft(s,t.memoizedState)||(lt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function Vp(){}function Gp(e,t){var n=Ae,a=kt(),i=t(),s=!Ft(a.memoizedState,i);if(s&&(a.memoizedState=i,lt=!0),a=a.queue,Zo(Qp.bind(null,n,a,e),[e]),a.getSnapshot!==t||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,_a(9,Jp.bind(null,n,a,i,t),void 0,null),Ue===null)throw Error(D(349));Zr&30||Wp(n,t,i)}return i}function Wp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jp(e,t,n,a){t.value=n,t.getSnapshot=a,Kp(t)&&Yp(e)}function Qp(e,t,n){return n(function(){Kp(t)&&Yp(e)})}function Kp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ft(e,n)}catch{return!0}}function Yp(e){var t=or(e,1);t!==null&&Dt(t,e,1,-1)}function wu(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:e},t.queue=e,e=e.dispatch=Wg.bind(null,Ae,e),[t.memoizedState,e]}function _a(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function Zp(){return kt().memoizedState}function Li(e,t,n,a){var i=Ut();Ae.flags|=e,i.memoizedState=_a(1|t,n,void 0,a===void 0?null:a)}function vs(e,t,n,a){var i=kt();a=a===void 0?null:a;var s=void 0;if(Fe!==null){var l=Fe.memoizedState;if(s=l.destroy,a!==null&&Qo(a,l.deps)){i.memoizedState=_a(t,n,s,a);return}}Ae.flags|=e,i.memoizedState=_a(1|t,n,s,a)}function Eu(e,t){return Li(8390656,8,e,t)}function Zo(e,t){return vs(2048,8,e,t)}function Xp(e,t){return vs(4,2,e,t)}function em(e,t){return vs(4,4,e,t)}function tm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rm(e,t,n){return n=n!=null?n.concat([e]):null,vs(4,4,tm.bind(null,t,e),n)}function Xo(){}function nm(e,t){var n=kt();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Qo(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function am(e,t){var n=kt();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Qo(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function im(e,t,n){return Zr&21?(Ft(n,t)||(n=up(),Ae.lanes|=n,Xr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n)}function Vg(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var a=rl.transition;rl.transition={};try{e(!1),t()}finally{he=n,rl.transition=a}}function sm(){return kt().memoizedState}function Gg(e,t,n){var a=Mr(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},lm(e))om(t,n);else if(n=Up(e,t,n,a),n!==null){var i=nt();Dt(n,e,a,i),cm(n,t,a)}}function Wg(e,t,n){var a=Mr(e),i={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(lm(e))om(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,o=s(l,n);if(i.hasEagerState=!0,i.eagerState=o,Ft(o,l)){var c=t.interleaved;c===null?(i.next=i,Ho(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Up(e,t,i,a),n!==null&&(i=nt(),Dt(n,e,a,i),cm(n,t,a))}}function lm(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function om(e,t){ma=ts=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cm(e,t,n){if(n&4194240){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Mo(e,n)}}var rs={readContext:Ct,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},Jg={readContext:Ct,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:Eu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Li(4194308,4,tm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Li(4194308,4,e,t)},useInsertionEffect:function(e,t){return Li(4,2,e,t)},useMemo:function(e,t){var n=Ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=Ut();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Gg.bind(null,Ae,e),[a.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:wu,useDebugValue:Xo,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=wu(!1),t=e[0];return e=Vg.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=Ae,i=Ut();if(Ce){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),Ue===null)throw Error(D(349));Zr&30||Wp(a,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Eu(Qp.bind(null,a,s,e),[e]),a.flags|=2048,_a(9,Jp.bind(null,a,s,n,t),void 0,null),n},useId:function(){var e=Ut(),t=Ue.identifierPrefix;if(Ce){var n=ar,a=nr;n=(a&~(1<<32-Ot(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=Na++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Hg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qg={readContext:Ct,useCallback:nm,useContext:Ct,useEffect:Zo,useImperativeHandle:rm,useInsertionEffect:Xp,useLayoutEffect:em,useMemo:am,useReducer:nl,useRef:Zp,useState:function(){return nl(Pa)},useDebugValue:Xo,useDeferredValue:function(e){var t=kt();return im(t,Fe.memoizedState,e)},useTransition:function(){var e=nl(Pa)[0],t=kt().memoizedState;return[e,t]},useMutableSource:Vp,useSyncExternalStore:Gp,useId:sm,unstable_isNewReconciler:!1},Kg={readContext:Ct,useCallback:nm,useContext:Ct,useEffect:Zo,useImperativeHandle:rm,useInsertionEffect:Xp,useLayoutEffect:em,useMemo:am,useReducer:al,useRef:Zp,useState:function(){return al(Pa)},useDebugValue:Xo,useDeferredValue:function(e){var t=kt();return Fe===null?t.memoizedState=e:im(t,Fe.memoizedState,e)},useTransition:function(){var e=al(Pa)[0],t=kt().memoizedState;return[e,t]},useMutableSource:Vp,useSyncExternalStore:Gp,useId:sm,unstable_isNewReconciler:!1};function Pt(e,t){if(e&&e.defaultProps){t=Me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Yl(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:Me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var js={isMounted:function(e){return(e=e._reactInternals)?rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=nt(),i=Mr(e),s=ir(a,i);s.payload=t,n!=null&&(s.callback=n),t=Lr(e,s,i),t!==null&&(Dt(t,e,i,a),ki(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=nt(),i=Mr(e),s=ir(a,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Lr(e,s,i),t!==null&&(Dt(t,e,i,a),ki(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),a=Mr(e),i=ir(n,a);i.tag=2,t!=null&&(i.callback=t),t=Lr(e,i,a),t!==null&&(Dt(t,e,a,n),ki(t,e,a))}};function Cu(e,t,n,a,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,l):t.prototype&&t.prototype.isPureReactComponent?!Ca(n,a)||!Ca(i,s):!0}function um(e,t,n){var a=!1,i=_r,s=t.contextType;return typeof s=="object"&&s!==null?s=Ct(s):(i=ct(t)?Kr:Xe.current,a=t.contextTypes,s=(a=a!=null)?_n(e,i):_r),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=js,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ku(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&js.enqueueReplaceState(t,t.state,null)}function Zl(e,t,n,a){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Vo(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ct(s):(s=ct(t)?Kr:Xe.current,i.context=_n(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Yl(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&js.enqueueReplaceState(i,i.state,null),Xi(e,n,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function In(e,t){try{var n="",a=t;do n+=Eh(a),a=a.return;while(a);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function il(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Yg=typeof WeakMap=="function"?WeakMap:Map;function dm(e,t,n){n=ir(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){as||(as=!0,co=a),Xl(e,t)},n}function pm(e,t,n){n=ir(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=t.value;n.payload=function(){return a(i)},n.callback=function(){Xl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xl(e,t),typeof a!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ru(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Yg;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(i.add(n),e=dx.bind(null,e,t,n),t.then(e,e))}function Lu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Au(e,t,n,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ir(-1,1),t.tag=2,Lr(n,t,1))),n.lanes|=1),e)}var Zg=ur.ReactCurrentOwner,lt=!1;function rt(e,t,n,a){t.child=e===null?Bp(t,null,n,a):On(t,e.child,n,a)}function Mu(e,t,n,a,i){n=n.render;var s=t.ref;return Ln(t,i),a=Ko(e,t,n,a,s,i),n=Yo(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cr(e,t,i)):(Ce&&n&&Fo(t),t.flags|=1,rt(e,t,a,i),t.child)}function Nu(e,t,n,a,i){if(e===null){var s=n.type;return typeof s=="function"&&!lc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,mm(e,t,s,a,i)):(e=Pi(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ca,n(l,a)&&e.ref===t.ref)return cr(e,t,i)}return t.flags|=1,e=Nr(s,a),e.ref=t.ref,e.return=t,t.child=e}function mm(e,t,n,a,i){if(e!==null){var s=e.memoizedProps;if(Ca(s,a)&&e.ref===t.ref)if(lt=!1,t.pendingProps=a=s,(e.lanes&i)!==0)e.flags&131072&&(lt=!0);else return t.lanes=e.lanes,cr(e,t,i)}return eo(e,t,n,a,i)}function fm(e,t,n){var a=t.pendingProps,i=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(Sn,pt),pt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,je(Sn,pt),pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=s!==null?s.baseLanes:n,je(Sn,pt),pt|=a}else s!==null?(a=s.baseLanes|n,t.memoizedState=null):a=n,je(Sn,pt),pt|=a;return rt(e,t,i,n),t.child}function hm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function eo(e,t,n,a,i){var s=ct(n)?Kr:Xe.current;return s=_n(t,s),Ln(t,i),n=Ko(e,t,n,a,s,i),a=Yo(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cr(e,t,i)):(Ce&&a&&Fo(t),t.flags|=1,rt(e,t,n,i),t.child)}function Pu(e,t,n,a,i){if(ct(n)){var s=!0;Ji(t)}else s=!1;if(Ln(t,i),t.stateNode===null)Ai(e,t),um(t,n,a),Zl(t,n,a,i),a=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var c=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ct(u):(u=ct(n)?Kr:Xe.current,u=_n(t,u));var m=n.getDerivedStateFromProps,d=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==a||c!==u)&&ku(t,l,a,u),gr=!1;var f=t.memoizedState;l.state=f,Xi(t,a,l,i),c=t.memoizedState,o!==a||f!==c||ot.current||gr?(typeof m=="function"&&(Yl(t,n,m,a),c=t.memoizedState),(o=gr||Cu(t,n,o,a,f,c,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=c),l.props=a,l.state=c,l.context=u,a=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{l=t.stateNode,$p(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:Pt(t.type,o),l.props=u,d=t.pendingProps,f=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ct(c):(c=ct(n)?Kr:Xe.current,c=_n(t,c));var j=n.getDerivedStateFromProps;(m=typeof j=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==d||f!==c)&&ku(t,l,a,c),gr=!1,f=t.memoizedState,l.state=f,Xi(t,a,l,i);var g=t.memoizedState;o!==d||f!==g||ot.current||gr?(typeof j=="function"&&(Yl(t,n,j,a),g=t.memoizedState),(u=gr||Cu(t,n,u,a,f,g,c)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,g,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,g,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=g),l.props=a,l.state=g,l.context=c,a=u):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),a=!1)}return to(e,t,n,a,s,i)}function to(e,t,n,a,i,s){hm(e,t);var l=(t.flags&128)!==0;if(!a&&!l)return i&&xu(t,n,!1),cr(e,t,s);a=t.stateNode,Zg.current=t;var o=l&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&l?(t.child=On(t,e.child,null,s),t.child=On(t,null,o,s)):rt(e,t,o,s),t.memoizedState=a.state,i&&xu(t,n,!0),t.child}function gm(e){var t=e.stateNode;t.pendingContext?gu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gu(e,t.context,!1),Go(e,t.containerInfo)}function _u(e,t,n,a,i){return Tn(),zo(i),t.flags|=256,rt(e,t,n,a),t.child}var ro={dehydrated:null,treeContext:null,retryLane:0};function no(e){return{baseLanes:e,cachePool:null,transitions:null}}function xm(e,t,n){var a=t.pendingProps,i=Le.current,s=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),je(Le,i&1),e===null)return Ql(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=a.children,e=a.fallback,s?(a=t.mode,s=t.child,l={mode:"hidden",children:l},!(a&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Ss(l,a,0,null),e=Qr(e,a,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=no(n),t.memoizedState=ro,e):ec(t,l));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Xg(e,t,l,a,o,i,n);if(s){s=a.fallback,l=t.mode,i=e.child,o=i.sibling;var c={mode:"hidden",children:a.children};return!(l&1)&&t.child!==i?(a=t.child,a.childLanes=0,a.pendingProps=c,t.deletions=null):(a=Nr(i,c),a.subtreeFlags=i.subtreeFlags&14680064),o!==null?s=Nr(o,s):(s=Qr(s,l,n,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,a=s,s=t.child,l=e.child.memoizedState,l=l===null?no(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=ro,a}return s=e.child,e=s.sibling,a=Nr(s,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function ec(e,t){return t=Ss({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mi(e,t,n,a){return a!==null&&zo(a),On(t,e.child,null,n),e=ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xg(e,t,n,a,i,s,l){if(n)return t.flags&256?(t.flags&=-257,a=il(Error(D(422))),mi(e,t,l,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=a.fallback,i=t.mode,a=Ss({mode:"visible",children:a.children},i,0,null),s=Qr(s,i,l,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,t.mode&1&&On(t,e.child,null,l),t.child.memoizedState=no(l),t.memoizedState=ro,s);if(!(t.mode&1))return mi(e,t,l,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var o=a.dgst;return a=o,s=Error(D(419)),a=il(s,a,void 0),mi(e,t,l,a)}if(o=(l&e.childLanes)!==0,lt||o){if(a=Ue,a!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,or(e,i),Dt(a,e,i,-1))}return sc(),a=il(Error(D(421))),mi(e,t,l,a)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=px.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ft=Rr(i.nextSibling),ht=t,Ce=!0,Tt=null,e!==null&&(bt[St++]=nr,bt[St++]=ar,bt[St++]=Yr,nr=e.id,ar=e.overflow,Yr=t),t=ec(t,a.children),t.flags|=4096,t)}function Tu(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Kl(e.return,t,n)}function sl(e,t,n,a,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=i)}function vm(e,t,n){var a=t.pendingProps,i=a.revealOrder,s=a.tail;if(rt(e,t,a.children,n),a=Le.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tu(e,n,t);else if(e.tag===19)Tu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(je(Le,a),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&es(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&es(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sl(t,!0,n,null,s);break;case"together":sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ai(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function cr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=Nr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ex(e,t,n){switch(t.tag){case 3:gm(t),Tn();break;case 5:Hp(t);break;case 1:ct(t.type)&&Ji(t);break;case 4:Go(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,i=t.memoizedProps.value;je(Yi,a._currentValue),a._currentValue=i;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(je(Le,Le.current&1),t.flags|=128,null):n&t.child.childLanes?xm(e,t,n):(je(Le,Le.current&1),e=cr(e,t,n),e!==null?e.sibling:null);je(Le,Le.current&1);break;case 19:if(a=(n&t.childLanes)!==0,e.flags&128){if(a)return vm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je(Le,Le.current),a)break;return null;case 22:case 23:return t.lanes=0,fm(e,t,n)}return cr(e,t,n)}var jm,ao,ym,bm;jm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ao=function(){};ym=function(e,t,n,a){var i=e.memoizedProps;if(i!==a){e=t.stateNode,Gr(Vt.current);var s=null;switch(n){case"input":i=kl(e,i),a=kl(e,a),s=[];break;case"select":i=Me({},i,{value:void 0}),a=Me({},a,{value:void 0}),s=[];break;case"textarea":i=Al(e,i),a=Al(e,a),s=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Gi)}Nl(n,a);var l;n=null;for(u in i)if(!a.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(l in o)o.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(va.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in a){var c=a[u];if(o=i!=null?i[u]:void 0,a.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(va.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&be("scroll",e),s||o===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};bm=function(e,t,n,a){n!==a&&(t.flags|=4)};function Yn(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function tx(e,t,n){var a=t.pendingProps;switch(qo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return ct(t.type)&&Wi(),Ke(t),null;case 3:return a=t.stateNode,Dn(),we(ot),we(Xe),Jo(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(di(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Tt!==null&&(mo(Tt),Tt=null))),ao(e,t),Ke(t),null;case 5:Wo(t);var i=Gr(Ma.current);if(n=t.type,e!==null&&t.stateNode!=null)ym(e,t,n,a,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(D(166));return Ke(t),null}if(e=Gr(Vt.current),di(t)){a=t.stateNode,n=t.type;var s=t.memoizedProps;switch(a[$t]=t,a[La]=s,e=(t.mode&1)!==0,n){case"dialog":be("cancel",a),be("close",a);break;case"iframe":case"object":case"embed":be("load",a);break;case"video":case"audio":for(i=0;i<ia.length;i++)be(ia[i],a);break;case"source":be("error",a);break;case"img":case"image":case"link":be("error",a),be("load",a);break;case"details":be("toggle",a);break;case"input":$c(a,s),be("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},be("invalid",a);break;case"textarea":Vc(a,s),be("invalid",a)}Nl(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var o=s[l];l==="children"?typeof o=="string"?a.textContent!==o&&(s.suppressHydrationWarning!==!0&&ui(a.textContent,o,e),i=["children",o]):typeof o=="number"&&a.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ui(a.textContent,o,e),i=["children",""+o]):va.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&be("scroll",a)}switch(n){case"input":ri(a),Hc(a,s,!0);break;case"textarea":ri(a),Gc(a);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(a.onclick=Gi)}a=i,t.updateQueue=a,a!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=l.createElement(n,{is:a.is}):(e=l.createElement(n),n==="select"&&(l=e,a.multiple?l.multiple=!0:a.size&&(l.size=a.size))):e=l.createElementNS(e,n),e[$t]=t,e[La]=a,jm(e,t,!1,!1),t.stateNode=e;e:{switch(l=Pl(n,a),n){case"dialog":be("cancel",e),be("close",e),i=a;break;case"iframe":case"object":case"embed":be("load",e),i=a;break;case"video":case"audio":for(i=0;i<ia.length;i++)be(ia[i],e);i=a;break;case"source":be("error",e),i=a;break;case"img":case"image":case"link":be("error",e),be("load",e),i=a;break;case"details":be("toggle",e),i=a;break;case"input":$c(e,a),i=kl(e,a),be("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=Me({},a,{value:void 0}),be("invalid",e);break;case"textarea":Vc(e,a),i=Al(e,a),be("invalid",e);break;default:i=a}Nl(n,i),o=i;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?Zd(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Kd(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ja(e,c):typeof c=="number"&&ja(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(va.hasOwnProperty(s)?c!=null&&s==="onScroll"&&be("scroll",e):c!=null&&Eo(e,s,c,l))}switch(n){case"input":ri(e),Hc(e,a,!1);break;case"textarea":ri(e),Gc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Pr(a.value));break;case"select":e.multiple=!!a.multiple,s=a.value,s!=null?En(e,!!a.multiple,s,!1):a.defaultValue!=null&&En(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Gi)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)bm(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(D(166));if(n=Gr(Ma.current),Gr(Vt.current),di(t)){if(a=t.stateNode,n=t.memoizedProps,a[$t]=t,(s=a.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:ui(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ui(a.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[$t]=t,t.stateNode=a}return Ke(t),null;case 13:if(we(Le),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&ft!==null&&t.mode&1&&!(t.flags&128))qp(),Tn(),t.flags|=98560,s=!1;else if(s=di(t),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(D(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[$t]=t}else Tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ke(t),s=!1}else Tt!==null&&(mo(Tt),Tt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||Le.current&1?qe===0&&(qe=3):sc())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return Dn(),ao(e,t),e===null&&ka(t.stateNode.containerInfo),Ke(t),null;case 10:return $o(t.type._context),Ke(t),null;case 17:return ct(t.type)&&Wi(),Ke(t),null;case 19:if(we(Le),s=t.memoizedState,s===null)return Ke(t),null;if(a=(t.flags&128)!==0,l=s.rendering,l===null)if(a)Yn(s,!1);else{if(qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=es(e),l!==null){for(t.flags|=128,Yn(s,!1),a=l.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)s=n,e=a,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return je(Le,Le.current&1|2),t.child}e=e.sibling}s.tail!==null&&Te()>Fn&&(t.flags|=128,a=!0,Yn(s,!1),t.lanes=4194304)}else{if(!a)if(e=es(l),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Yn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Ce)return Ke(t),null}else 2*Te()-s.renderingStartTime>Fn&&n!==1073741824&&(t.flags|=128,a=!0,Yn(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Te(),t.sibling=null,n=Le.current,je(Le,a?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return ic(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?pt&1073741824&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function rx(e,t){switch(qo(t),t.tag){case 1:return ct(t.type)&&Wi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dn(),we(ot),we(Xe),Jo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wo(t),null;case 13:if(we(Le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));Tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Le),null;case 4:return Dn(),null;case 10:return $o(t.type._context),null;case 22:case 23:return ic(),null;case 24:return null;default:return null}}var fi=!1,Ze=!1,nx=typeof WeakSet=="function"?WeakSet:Set,$=null;function bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){Pe(e,t,a)}else n.current=null}function io(e,t,n){try{n()}catch(a){Pe(e,t,a)}}var Ou=!1;function ax(e,t){if(Ul=$i,e=kp(),Io(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,o=-1,c=-1,u=0,m=0,d=e,f=null;t:for(;;){for(var j;d!==n||i!==0&&d.nodeType!==3||(o=l+i),d!==s||a!==0&&d.nodeType!==3||(c=l+a),d.nodeType===3&&(l+=d.nodeValue.length),(j=d.firstChild)!==null;)f=d,d=j;for(;;){if(d===e)break t;if(f===n&&++u===i&&(o=l),f===s&&++m===a&&(c=l),(j=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=j}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for($l={focusedElem:e,selectionRange:n},$i=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,y=g.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:Pt(t.type,v),y);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(L){Pe(t,t.return,L)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return g=Ou,Ou=!1,g}function fa(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&io(t,n,s)}i=i.next}while(i!==a)}}function ys(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function so(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sm(e){var t=e.alternate;t!==null&&(e.alternate=null,Sm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[La],delete t[Gl],delete t[zg],delete t[Bg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wm(e){return e.tag===5||e.tag===3||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gi));else if(a!==4&&(e=e.child,e!==null))for(lo(e,t,n),e=e.sibling;e!==null;)lo(e,t,n),e=e.sibling}function oo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(oo(e,t,n),e=e.sibling;e!==null;)oo(e,t,n),e=e.sibling}var He=null,_t=!1;function pr(e,t,n){for(n=n.child;n!==null;)Em(e,t,n),n=n.sibling}function Em(e,t,n){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(ps,n)}catch{}switch(n.tag){case 5:Ze||bn(n,t);case 6:var a=He,i=_t;He=null,pr(e,t,n),He=a,_t=i,He!==null&&(_t?(e=He,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(_t?(e=He,n=n.stateNode,e.nodeType===8?Xs(e.parentNode,n):e.nodeType===1&&Xs(e,n),wa(e)):Xs(He,n.stateNode));break;case 4:a=He,i=_t,He=n.stateNode.containerInfo,_t=!0,pr(e,t,n),He=a,_t=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&io(n,t,l),i=i.next}while(i!==a)}pr(e,t,n);break;case 1:if(!Ze&&(bn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(o){Pe(n,t,o)}pr(e,t,n);break;case 21:pr(e,t,n);break;case 22:n.mode&1?(Ze=(a=Ze)||n.memoizedState!==null,pr(e,t,n),Ze=a):pr(e,t,n);break;default:pr(e,t,n)}}function Iu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new nx),t.forEach(function(a){var i=mx.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}}function Mt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];try{var s=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:He=o.stateNode,_t=!1;break e;case 3:He=o.stateNode.containerInfo,_t=!0;break e;case 4:He=o.stateNode.containerInfo,_t=!0;break e}o=o.return}if(He===null)throw Error(D(160));Em(s,l,i),He=null,_t=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Pe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cm(t,e),t=t.sibling}function Cm(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),zt(e),a&4){try{fa(3,e,e.return),ys(3,e)}catch(v){Pe(e,e.return,v)}try{fa(5,e,e.return)}catch(v){Pe(e,e.return,v)}}break;case 1:Mt(t,e),zt(e),a&512&&n!==null&&bn(n,n.return);break;case 5:if(Mt(t,e),zt(e),a&512&&n!==null&&bn(n,n.return),e.flags&32){var i=e.stateNode;try{ja(i,"")}catch(v){Pe(e,e.return,v)}}if(a&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Wd(i,s),Pl(o,l);var u=Pl(o,s);for(l=0;l<c.length;l+=2){var m=c[l],d=c[l+1];m==="style"?Zd(i,d):m==="dangerouslySetInnerHTML"?Kd(i,d):m==="children"?ja(i,d):Eo(i,m,d,u)}switch(o){case"input":Rl(i,s);break;case"textarea":Jd(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var j=s.value;j!=null?En(i,!!s.multiple,j,!1):f!==!!s.multiple&&(s.defaultValue!=null?En(i,!!s.multiple,s.defaultValue,!0):En(i,!!s.multiple,s.multiple?[]:"",!1))}i[La]=s}catch(v){Pe(e,e.return,v)}}break;case 6:if(Mt(t,e),zt(e),a&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Pe(e,e.return,v)}}break;case 3:if(Mt(t,e),zt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{wa(t.containerInfo)}catch(v){Pe(e,e.return,v)}break;case 4:Mt(t,e),zt(e);break;case 13:Mt(t,e),zt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(nc=Te())),a&4&&Iu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Ze=(u=Ze)||m,Mt(t,e),Ze=u):Mt(t,e),zt(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for($=e,m=e.child;m!==null;){for(d=$=m;$!==null;){switch(f=$,j=f.child,f.tag){case 0:case 11:case 14:case 15:fa(4,f,f.return);break;case 1:bn(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){a=f,n=f.return;try{t=a,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){Pe(a,n,v)}}break;case 5:bn(f,f.return);break;case 22:if(f.memoizedState!==null){qu(d);continue}}j!==null?(j.return=f,$=j):qu(d)}m=m.sibling}e:for(m=null,d=e;;){if(d.tag===5){if(m===null){m=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,c=d.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Yd("display",l))}catch(v){Pe(e,e.return,v)}}}else if(d.tag===6){if(m===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Pe(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;m===d&&(m=null),d=d.return}m===d&&(m=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Mt(t,e),zt(e),a&4&&Iu(e);break;case 21:break;default:Mt(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wm(n)){var a=n;break e}n=n.return}throw Error(D(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(ja(i,""),a.flags&=-33);var s=Du(e);oo(e,s,i);break;case 3:case 4:var l=a.stateNode.containerInfo,o=Du(e);lo(e,o,l);break;default:throw Error(D(161))}}catch(c){Pe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ix(e,t,n){$=e,km(e)}function km(e,t,n){for(var a=(e.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&a){var l=i.memoizedState!==null||fi;if(!l){var o=i.alternate,c=o!==null&&o.memoizedState!==null||Ze;o=fi;var u=Ze;if(fi=l,(Ze=c)&&!u)for($=i;$!==null;)l=$,c=l.child,l.tag===22&&l.memoizedState!==null?zu(i):c!==null?(c.return=l,$=c):zu(i);for(;s!==null;)$=s,km(s),s=s.sibling;$=i,fi=o,Ze=u}Fu(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Fu(e)}}function Fu(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ze||ys(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Ze)if(n===null)a.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);a.componentDidUpdate(i,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Su(t,s,a);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Su(t,l,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var d=m.dehydrated;d!==null&&wa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Ze||t.flags&512&&so(t)}catch(f){Pe(t,t.return,f)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function qu(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function zu(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ys(4,t)}catch(c){Pe(t,n,c)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var i=t.return;try{a.componentDidMount()}catch(c){Pe(t,i,c)}}var s=t.return;try{so(t)}catch(c){Pe(t,s,c)}break;case 5:var l=t.return;try{so(t)}catch(c){Pe(t,l,c)}}}catch(c){Pe(t,t.return,c)}if(t===e){$=null;break}var o=t.sibling;if(o!==null){o.return=t.return,$=o;break}$=t.return}}var sx=Math.ceil,ns=ur.ReactCurrentDispatcher,tc=ur.ReactCurrentOwner,Et=ur.ReactCurrentBatchConfig,pe=0,Ue=null,De=null,Ve=0,pt=0,Sn=Or(0),qe=0,Ta=null,Xr=0,bs=0,rc=0,ha=null,st=null,nc=0,Fn=1/0,tr=null,as=!1,co=null,Ar=null,hi=!1,Sr=null,is=0,ga=0,uo=null,Mi=-1,Ni=0;function nt(){return pe&6?Te():Mi!==-1?Mi:Mi=Te()}function Mr(e){return e.mode&1?pe&2&&Ve!==0?Ve&-Ve:$g.transition!==null?(Ni===0&&(Ni=up()),Ni):(e=he,e!==0||(e=window.event,e=e===void 0?16:xp(e.type)),e):1}function Dt(e,t,n,a){if(50<ga)throw ga=0,uo=null,Error(D(185));qa(e,n,a),(!(pe&2)||e!==Ue)&&(e===Ue&&(!(pe&2)&&(bs|=n),qe===4&&vr(e,Ve)),ut(e,a),n===1&&pe===0&&!(t.mode&1)&&(Fn=Te()+500,xs&&Dr()))}function ut(e,t){var n=e.callbackNode;$h(e,t);var a=Ui(e,e===Ue?Ve:0);if(a===0)n!==null&&Qc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&Qc(n),t===1)e.tag===0?Ug(Bu.bind(null,e)):Dp(Bu.bind(null,e)),Fg(function(){!(pe&6)&&Dr()}),n=null;else{switch(dp(a)){case 1:n=Ao;break;case 4:n=op;break;case 16:n=Bi;break;case 536870912:n=cp;break;default:n=Bi}n=Tm(n,Rm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Rm(e,t){if(Mi=-1,Ni=0,pe&6)throw Error(D(327));var n=e.callbackNode;if(An()&&e.callbackNode!==n)return null;var a=Ui(e,e===Ue?Ve:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=ss(e,a);else{t=a;var i=pe;pe|=2;var s=Am();(Ue!==e||Ve!==t)&&(tr=null,Fn=Te()+500,Jr(e,t));do try{cx();break}catch(o){Lm(e,o)}while(!0);Uo(),ns.current=s,pe=i,De!==null?t=0:(Ue=null,Ve=0,t=qe)}if(t!==0){if(t===2&&(i=Il(e),i!==0&&(a=i,t=po(e,i))),t===1)throw n=Ta,Jr(e,0),vr(e,a),ut(e,Te()),n;if(t===6)vr(e,a);else{if(i=e.current.alternate,!(a&30)&&!lx(i)&&(t=ss(e,a),t===2&&(s=Il(e),s!==0&&(a=s,t=po(e,s))),t===1))throw n=Ta,Jr(e,0),vr(e,a),ut(e,Te()),n;switch(e.finishedWork=i,e.finishedLanes=a,t){case 0:case 1:throw Error(D(345));case 2:$r(e,st,tr);break;case 3:if(vr(e,a),(a&130023424)===a&&(t=nc+500-Te(),10<t)){if(Ui(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){nt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Vl($r.bind(null,e,st,tr),t);break}$r(e,st,tr);break;case 4:if(vr(e,a),(a&4194240)===a)break;for(t=e.eventTimes,i=-1;0<a;){var l=31-Ot(a);s=1<<l,l=t[l],l>i&&(i=l),a&=~s}if(a=i,a=Te()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*sx(a/1960))-a,10<a){e.timeoutHandle=Vl($r.bind(null,e,st,tr),a);break}$r(e,st,tr);break;case 5:$r(e,st,tr);break;default:throw Error(D(329))}}}return ut(e,Te()),e.callbackNode===n?Rm.bind(null,e):null}function po(e,t){var n=ha;return e.current.memoizedState.isDehydrated&&(Jr(e,t).flags|=256),e=ss(e,t),e!==2&&(t=st,st=n,t!==null&&mo(t)),e}function mo(e){st===null?st=e:st.push.apply(st,e)}function lx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var i=n[a],s=i.getSnapshot;i=i.value;try{if(!Ft(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vr(e,t){for(t&=~rc,t&=~bs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),a=1<<n;e[n]=-1,t&=~a}}function Bu(e){if(pe&6)throw Error(D(327));An();var t=Ui(e,0);if(!(t&1))return ut(e,Te()),null;var n=ss(e,t);if(e.tag!==0&&n===2){var a=Il(e);a!==0&&(t=a,n=po(e,a))}if(n===1)throw n=Ta,Jr(e,0),vr(e,t),ut(e,Te()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$r(e,st,tr),ut(e,Te()),null}function ac(e,t){var n=pe;pe|=1;try{return e(t)}finally{pe=n,pe===0&&(Fn=Te()+500,xs&&Dr())}}function en(e){Sr!==null&&Sr.tag===0&&!(pe&6)&&An();var t=pe;pe|=1;var n=Et.transition,a=he;try{if(Et.transition=null,he=1,e)return e()}finally{he=a,Et.transition=n,pe=t,!(pe&6)&&Dr()}}function ic(){pt=Sn.current,we(Sn)}function Jr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ig(n)),De!==null)for(n=De.return;n!==null;){var a=n;switch(qo(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Wi();break;case 3:Dn(),we(ot),we(Xe),Jo();break;case 5:Wo(a);break;case 4:Dn();break;case 13:we(Le);break;case 19:we(Le);break;case 10:$o(a.type._context);break;case 22:case 23:ic()}n=n.return}if(Ue=e,De=e=Nr(e.current,null),Ve=pt=t,qe=0,Ta=null,rc=bs=Xr=0,st=ha=null,Vr!==null){for(t=0;t<Vr.length;t++)if(n=Vr[t],a=n.interleaved,a!==null){n.interleaved=null;var i=a.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,a.next=l}n.pending=a}Vr=null}return e}function Lm(e,t){do{var n=De;try{if(Uo(),Ri.current=rs,ts){for(var a=Ae.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}ts=!1}if(Zr=0,Be=Fe=Ae=null,ma=!1,Na=0,tc.current=null,n===null||n.return===null){qe=1,Ta=t,De=null;break}e:{var s=e,l=n.return,o=n,c=t;if(t=Ve,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=o,d=m.tag;if(!(m.mode&1)&&(d===0||d===11||d===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var j=Lu(l);if(j!==null){j.flags&=-257,Au(j,l,o,s,t),j.mode&1&&Ru(s,u,t),t=j,c=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(c),t.updateQueue=v}else g.add(c);break e}else{if(!(t&1)){Ru(s,u,t),sc();break e}c=Error(D(426))}}else if(Ce&&o.mode&1){var y=Lu(l);if(y!==null){!(y.flags&65536)&&(y.flags|=256),Au(y,l,o,s,t),zo(In(c,o));break e}}s=c=In(c,o),qe!==4&&(qe=2),ha===null?ha=[s]:ha.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=dm(s,c,t);bu(s,h);break e;case 1:o=c;var p=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ar===null||!Ar.has(x)))){s.flags|=65536,t&=-t,s.lanes|=t;var L=pm(s,o,t);bu(s,L);break e}}s=s.return}while(s!==null)}Nm(n)}catch(M){t=M,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function Am(){var e=ns.current;return ns.current=rs,e===null?rs:e}function sc(){(qe===0||qe===3||qe===2)&&(qe=4),Ue===null||!(Xr&268435455)&&!(bs&268435455)||vr(Ue,Ve)}function ss(e,t){var n=pe;pe|=2;var a=Am();(Ue!==e||Ve!==t)&&(tr=null,Jr(e,t));do try{ox();break}catch(i){Lm(e,i)}while(!0);if(Uo(),pe=n,ns.current=a,De!==null)throw Error(D(261));return Ue=null,Ve=0,qe}function ox(){for(;De!==null;)Mm(De)}function cx(){for(;De!==null&&!Th();)Mm(De)}function Mm(e){var t=_m(e.alternate,e,pt);e.memoizedProps=e.pendingProps,t===null?Nm(e):De=t,tc.current=null}function Nm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=rx(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{qe=6,De=null;return}}else if(n=tx(n,t,pt),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);qe===0&&(qe=5)}function $r(e,t,n){var a=he,i=Et.transition;try{Et.transition=null,he=1,ux(e,t,n,a)}finally{Et.transition=i,he=a}return null}function ux(e,t,n,a){do An();while(Sr!==null);if(pe&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Hh(e,s),e===Ue&&(De=Ue=null,Ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hi||(hi=!0,Tm(Bi,function(){return An(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Et.transition,Et.transition=null;var l=he;he=1;var o=pe;pe|=4,tc.current=null,ax(e,n),Cm(n,e),Mg($l),$i=!!Ul,$l=Ul=null,e.current=n,ix(n),Oh(),pe=o,he=l,Et.transition=s}else e.current=n;if(hi&&(hi=!1,Sr=e,is=i),s=e.pendingLanes,s===0&&(Ar=null),Fh(n.stateNode),ut(e,Te()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],a(i.value,{componentStack:i.stack,digest:i.digest});if(as)throw as=!1,e=co,co=null,e;return is&1&&e.tag!==0&&An(),s=e.pendingLanes,s&1?e===uo?ga++:(ga=0,uo=e):ga=0,Dr(),null}function An(){if(Sr!==null){var e=dp(is),t=Et.transition,n=he;try{if(Et.transition=null,he=16>e?16:e,Sr===null)var a=!1;else{if(e=Sr,Sr=null,is=0,pe&6)throw Error(D(331));var i=pe;for(pe|=4,$=e.current;$!==null;){var s=$,l=s.child;if($.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for($=u;$!==null;){var m=$;switch(m.tag){case 0:case 11:case 15:fa(8,m,s)}var d=m.child;if(d!==null)d.return=m,$=d;else for(;$!==null;){m=$;var f=m.sibling,j=m.return;if(Sm(m),m===u){$=null;break}if(f!==null){f.return=j,$=f;break}$=j}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var y=v.sibling;v.sibling=null,v=y}while(v!==null)}}$=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,$=l;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,$=h;break e}$=s.return}}var p=e.current;for($=p;$!==null;){l=$;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,$=x;else e:for(l=p;$!==null;){if(o=$,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ys(9,o)}}catch(M){Pe(o,o.return,M)}if(o===l){$=null;break e}var L=o.sibling;if(L!==null){L.return=o.return,$=L;break e}$=o.return}}if(pe=i,Dr(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(ps,e)}catch{}a=!0}return a}finally{he=n,Et.transition=t}}return!1}function Uu(e,t,n){t=In(n,t),t=dm(e,t,1),e=Lr(e,t,1),t=nt(),e!==null&&(qa(e,1,t),ut(e,t))}function Pe(e,t,n){if(e.tag===3)Uu(e,e,n);else for(;t!==null;){if(t.tag===3){Uu(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ar===null||!Ar.has(a))){e=In(n,e),e=pm(t,e,1),t=Lr(t,e,1),e=nt(),t!==null&&(qa(t,1,e),ut(t,e));break}}t=t.return}}function dx(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,Ue===e&&(Ve&n)===n&&(qe===4||qe===3&&(Ve&130023424)===Ve&&500>Te()-nc?Jr(e,0):rc|=n),ut(e,t)}function Pm(e,t){t===0&&(e.mode&1?(t=ii,ii<<=1,!(ii&130023424)&&(ii=4194304)):t=1);var n=nt();e=or(e,t),e!==null&&(qa(e,t,n),ut(e,n))}function px(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pm(e,n)}function mx(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(D(314))}a!==null&&a.delete(t),Pm(e,n)}var _m;_m=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ot.current)lt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return lt=!1,ex(e,t,n);lt=!!(e.flags&131072)}else lt=!1,Ce&&t.flags&1048576&&Ip(t,Ki,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Ai(e,t),e=t.pendingProps;var i=_n(t,Xe.current);Ln(t,n),i=Ko(null,t,a,e,i,n);var s=Yo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(a)?(s=!0,Ji(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vo(t),i.updater=js,t.stateNode=i,i._reactInternals=t,Zl(t,a,e,n),t=to(null,t,a,!0,s,n)):(t.tag=0,Ce&&s&&Fo(t),rt(null,t,i,n),t=t.child),t;case 16:a=t.elementType;e:{switch(Ai(e,t),e=t.pendingProps,i=a._init,a=i(a._payload),t.type=a,i=t.tag=hx(a),e=Pt(a,e),i){case 0:t=eo(null,t,a,e,n);break e;case 1:t=Pu(null,t,a,e,n);break e;case 11:t=Mu(null,t,a,e,n);break e;case 14:t=Nu(null,t,a,Pt(a.type,e),n);break e}throw Error(D(306,a,""))}return t;case 0:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Pt(a,i),eo(e,t,a,i,n);case 1:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Pt(a,i),Pu(e,t,a,i,n);case 3:e:{if(gm(t),e===null)throw Error(D(387));a=t.pendingProps,s=t.memoizedState,i=s.element,$p(e,t),Xi(t,a,null,n);var l=t.memoizedState;if(a=l.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=In(Error(D(423)),t),t=_u(e,t,a,n,i);break e}else if(a!==i){i=In(Error(D(424)),t),t=_u(e,t,a,n,i);break e}else for(ft=Rr(t.stateNode.containerInfo.firstChild),ht=t,Ce=!0,Tt=null,n=Bp(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tn(),a===i){t=cr(e,t,n);break e}rt(e,t,a,n)}t=t.child}return t;case 5:return Hp(t),e===null&&Ql(t),a=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,Hl(a,i)?l=null:s!==null&&Hl(a,s)&&(t.flags|=32),hm(e,t),rt(e,t,l,n),t.child;case 6:return e===null&&Ql(t),null;case 13:return xm(e,t,n);case 4:return Go(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=On(t,null,a,n):rt(e,t,a,n),t.child;case 11:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Pt(a,i),Mu(e,t,a,i,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,i=t.pendingProps,s=t.memoizedProps,l=i.value,je(Yi,a._currentValue),a._currentValue=l,s!==null)if(Ft(s.value,l)){if(s.children===i.children&&!ot.current){t=cr(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var o=s.dependencies;if(o!==null){l=s.child;for(var c=o.firstContext;c!==null;){if(c.context===a){if(s.tag===1){c=ir(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Kl(s.return,n,t),o.lanes|=n;break}c=c.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(D(341));l.lanes|=n,o=l.alternate,o!==null&&(o.lanes|=n),Kl(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}rt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,a=t.pendingProps.children,Ln(t,n),i=Ct(i),a=a(i),t.flags|=1,rt(e,t,a,n),t.child;case 14:return a=t.type,i=Pt(a,t.pendingProps),i=Pt(a.type,i),Nu(e,t,a,i,n);case 15:return mm(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Pt(a,i),Ai(e,t),t.tag=1,ct(a)?(e=!0,Ji(t)):e=!1,Ln(t,n),um(t,a,i),Zl(t,a,i,n),to(null,t,a,!0,e,n);case 19:return vm(e,t,n);case 22:return fm(e,t,n)}throw Error(D(156,t.tag))};function Tm(e,t){return lp(e,t)}function fx(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,n,a){return new fx(e,t,n,a)}function lc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hx(e){if(typeof e=="function")return lc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ko)return 11;if(e===Ro)return 14}return 2}function Nr(e,t){var n=e.alternate;return n===null?(n=wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pi(e,t,n,a,i,s){var l=2;if(a=e,typeof e=="function")lc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case pn:return Qr(n.children,i,s,t);case Co:l=8,i|=8;break;case Sl:return e=wt(12,n,t,i|2),e.elementType=Sl,e.lanes=s,e;case wl:return e=wt(13,n,t,i),e.elementType=wl,e.lanes=s,e;case El:return e=wt(19,n,t,i),e.elementType=El,e.lanes=s,e;case Hd:return Ss(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ud:l=10;break e;case $d:l=9;break e;case ko:l=11;break e;case Ro:l=14;break e;case hr:l=16,a=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=wt(l,n,t,i),t.elementType=e,t.type=a,t.lanes=s,t}function Qr(e,t,n,a){return e=wt(7,e,a,t),e.lanes=n,e}function Ss(e,t,n,a){return e=wt(22,e,a,t),e.elementType=Hd,e.lanes=n,e.stateNode={isHidden:!1},e}function ll(e,t,n){return e=wt(6,e,null,t),e.lanes=n,e}function ol(e,t,n){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gx(e,t,n,a,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Us(0),this.expirationTimes=Us(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Us(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function oc(e,t,n,a,i,s,l,o,c){return e=new gx(e,t,n,o,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=wt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vo(s),e}function xx(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dn,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function Om(e){if(!e)return _r;e=e._reactInternals;e:{if(rn(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(ct(n))return Op(e,n,t)}return t}function Dm(e,t,n,a,i,s,l,o,c){return e=oc(n,a,!0,e,i,s,l,o,c),e.context=Om(null),n=e.current,a=nt(),i=Mr(n),s=ir(a,i),s.callback=t??null,Lr(n,s,i),e.current.lanes=i,qa(e,i,a),ut(e,a),e}function ws(e,t,n,a){var i=t.current,s=nt(),l=Mr(i);return n=Om(n),t.context===null?t.context=n:t.pendingContext=n,t=ir(s,l),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Lr(i,t,l),e!==null&&(Dt(e,i,l,s),ki(e,i,l)),l}function ls(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $u(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cc(e,t){$u(e,t),(e=e.alternate)&&$u(e,t)}function vx(){return null}var Im=typeof reportError=="function"?reportError:function(e){console.error(e)};function uc(e){this._internalRoot=e}Es.prototype.render=uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));ws(e,t,null,null)};Es.prototype.unmount=uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;en(function(){ws(null,e,null,null)}),t[lr]=null}};function Es(e){this._internalRoot=e}Es.prototype.unstable_scheduleHydration=function(e){if(e){var t=fp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xr.length&&t!==0&&t<xr[n].priority;n++);xr.splice(n,0,e),n===0&&gp(e)}};function dc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hu(){}function jx(e,t,n,a,i){if(i){if(typeof a=="function"){var s=a;a=function(){var u=ls(l);s.call(u)}}var l=Dm(t,a,e,0,null,!1,!1,"",Hu);return e._reactRootContainer=l,e[lr]=l.current,ka(e.nodeType===8?e.parentNode:e),en(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var o=a;a=function(){var u=ls(c);o.call(u)}}var c=oc(e,0,!1,null,null,!1,!1,"",Hu);return e._reactRootContainer=c,e[lr]=c.current,ka(e.nodeType===8?e.parentNode:e),en(function(){ws(t,c,n,a)}),c}function ks(e,t,n,a,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var o=i;i=function(){var c=ls(l);o.call(c)}}ws(t,l,e,i)}else l=jx(n,t,e,i,a);return ls(l)}pp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=aa(t.pendingLanes);n!==0&&(Mo(t,n|1),ut(t,Te()),!(pe&6)&&(Fn=Te()+500,Dr()))}break;case 13:en(function(){var a=or(e,1);if(a!==null){var i=nt();Dt(a,e,1,i)}}),cc(e,1)}};No=function(e){if(e.tag===13){var t=or(e,134217728);if(t!==null){var n=nt();Dt(t,e,134217728,n)}cc(e,134217728)}};mp=function(e){if(e.tag===13){var t=Mr(e),n=or(e,t);if(n!==null){var a=nt();Dt(n,e,t,a)}cc(e,t)}};fp=function(){return he};hp=function(e,t){var n=he;try{return he=e,t()}finally{he=n}};Tl=function(e,t,n){switch(t){case"input":if(Rl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=gs(a);if(!i)throw Error(D(90));Gd(a),Rl(a,i)}}}break;case"textarea":Jd(e,n);break;case"select":t=n.value,t!=null&&En(e,!!n.multiple,t,!1)}};tp=ac;rp=en;var yx={usingClientEntryPoint:!1,Events:[Ba,gn,gs,Xd,ep,ac]},Zn={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bx={bundleType:Zn.bundleType,version:Zn.version,rendererPackageName:Zn.rendererPackageName,rendererConfig:Zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ur.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ip(e),e===null?null:e.stateNode},findFiberByHostInstance:Zn.findFiberByHostInstance||vx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gi.isDisabled&&gi.supportsFiber)try{ps=gi.inject(bx),Ht=gi}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yx;xt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dc(t))throw Error(D(200));return xx(e,t,null,n)};xt.createRoot=function(e,t){if(!dc(e))throw Error(D(299));var n=!1,a="",i=Im;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=oc(e,1,!1,null,null,n,!1,a,i),e[lr]=t.current,ka(e.nodeType===8?e.parentNode:e),new uc(t)};xt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=ip(t),e=e===null?null:e.stateNode,e};xt.flushSync=function(e){return en(e)};xt.hydrate=function(e,t,n){if(!Cs(t))throw Error(D(200));return ks(null,e,t,!0,n)};xt.hydrateRoot=function(e,t,n){if(!dc(e))throw Error(D(405));var a=n!=null&&n.hydratedSources||null,i=!1,s="",l=Im;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Dm(t,null,e,1,n??null,i,!1,s,l),e[lr]=t.current,ka(e),a)for(e=0;e<a.length;e++)n=a[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Es(t)};xt.render=function(e,t,n){if(!Cs(t))throw Error(D(200));return ks(null,e,t,!1,n)};xt.unmountComponentAtNode=function(e){if(!Cs(e))throw Error(D(40));return e._reactRootContainer?(en(function(){ks(null,null,e,!1,function(){e._reactRootContainer=null,e[lr]=null})}),!0):!1};xt.unstable_batchedUpdates=ac;xt.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!Cs(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return ks(e,t,n,!1,a)};xt.version="18.3.1-next-f1338f8080-20240426";function Fm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fm)}catch(e){console.error(e)}}Fm(),Fd.exports=xt;var qm=Fd.exports,zm,Vu=qm;zm=Vu.createRoot,Vu.hydrateRoot;/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Bm=e=>{throw TypeError(e)},Sx=(e,t,n)=>t.has(e)||Bm("Cannot "+n),cl=(e,t,n)=>(Sx(e,t,"read from private field"),n?n.call(e):t.get(e)),wx=(e,t,n)=>t.has(e)?Bm("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Gu="popstate";function Wu(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function Ex(e={}){function t(i,s){let{pathname:l="/",search:o="",hash:c=""}=Jt(i.location.hash.substring(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Oa("",{pathname:l,search:o,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let l=i.document.querySelector("base"),o="";if(l&&l.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");o=u===-1?c:c.slice(0,u)}return o+"#"+(typeof s=="string"?s:Wt(s))}function a(i,s){Oe(i.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(s)})`)}return kx(t,n,a,e)}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Oe(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Cx(){return Math.random().toString(36).substring(2,10)}function Ju(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Oa(e,t,n=null,a,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Jt(t):t,state:n,key:t&&t.key||a||Cx(),unstable_mask:i}}function Wt({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Jt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function kx(e,t,n,a={}){let{window:i=document.defaultView,v5Compat:s=!1}=a,l=i.history,o="POP",c=null,u=m();u==null&&(u=0,l.replaceState({...l.state,idx:u},""));function m(){return(l.state||{idx:null}).idx}function d(){o="POP";let y=m(),h=y==null?null:y-u;u=y,c&&c({action:o,location:v.location,delta:h})}function f(y,h){o="PUSH";let p=Wu(y)?y:Oa(v.location,y,h);n&&n(p,y),u=m()+1;let x=Ju(p,u),L=v.createHref(p.unstable_mask||p);try{l.pushState(x,"",L)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(L)}s&&c&&c({action:o,location:v.location,delta:1})}function j(y,h){o="REPLACE";let p=Wu(y)?y:Oa(v.location,y,h);n&&n(p,y),u=m();let x=Ju(p,u),L=v.createHref(p.unstable_mask||p);l.replaceState(x,"",L),s&&c&&c({action:o,location:v.location,delta:0})}function g(y){return Um(y)}let v={get action(){return o},get location(){return e(i,l)},listen(y){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Gu,d),c=y,()=>{i.removeEventListener(Gu,d),c=null}},createHref(y){return t(i,y)},createURL:g,encodeLocation(y){let h=g(y);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:j,go(y){return l.go(y)}};return v}function Um(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ie(n,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:Wt(e);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=n+a),new URL(a,n)}var sa,Qu=class{constructor(e){if(wx(this,sa,new Map),e)for(let[t,n]of e)this.set(t,n)}get(e){if(cl(this,sa).has(e))return cl(this,sa).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,t){cl(this,sa).set(e,t)}};sa=new WeakMap;var Rx=new Set(["lazy","caseSensitive","path","id","index","children"]);function Lx(e){return Rx.has(e)}var Ax=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function Mx(e){return Ax.has(e)}function Nx(e){return e.index===!0}function Da(e,t,n=[],a={},i=!1){return e.map((s,l)=>{let o=[...n,String(l)],c=typeof s.id=="string"?s.id:o.join("-");if(ie(s.index!==!0||!s.children,"Cannot specify children on an index route"),ie(i||!a[c],`Found a route id collision on id "${c}".  Route id's must be globally unique within Data Router usages`),Nx(s)){let u={...s,id:c};return a[c]=Ku(u,t(u)),u}else{let u={...s,id:c,children:void 0};return a[c]=Ku(u,t(u)),s.children&&(u.children=Da(s.children,t,o,a,i)),u}})}function Ku(e,t){return Object.assign(e,{...t,...typeof t.lazy=="object"&&t.lazy!=null?{lazy:{...e.lazy,...t.lazy}}:{}})}function jr(e,t,n="/"){return la(e,t,n,!1)}function la(e,t,n,a){let i=typeof t=="string"?Jt(t):t,s=Rt(i.pathname||"/",n);if(s==null)return null;let l=$m(e);_x(l);let o=null;for(let c=0;o==null&&c<l.length;++c){let u=Hx(s);o=Ux(l[c],u,a)}return o}function Px(e,t){let{route:n,pathname:a,params:i}=e;return{id:n.id,pathname:a,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function $m(e,t=[],n=[],a="",i=!1){let s=(l,o,c=i,u)=>{let m={relativePath:u===void 0?l.path||"":u,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(a)&&c)return;ie(m.relativePath.startsWith(a),`Absolute route path "${m.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(a.length)}let d=It([a,m.relativePath]),f=n.concat(m);l.children&&l.children.length>0&&(ie(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),$m(l.children,t,f,d,c)),!(l.path==null&&!l.index)&&t.push({path:d,score:zx(d,l.index),routesMeta:f})};return e.forEach((l,o)=>{var c;if(l.path===""||!((c=l.path)!=null&&c.includes("?")))s(l,o);else for(let u of Hm(l.path))s(l,o,!0,u)}),t}function Hm(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(a.length===0)return i?[s,""]:[s];let l=Hm(a.join("/")),o=[];return o.push(...l.map(c=>c===""?s:[s,c].join("/"))),i&&o.push(...l),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function _x(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Bx(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var Tx=/^:[\w-]+$/,Ox=3,Dx=2,Ix=1,Fx=10,qx=-2,Yu=e=>e==="*";function zx(e,t){let n=e.split("/"),a=n.length;return n.some(Yu)&&(a+=qx),t&&(a+=Dx),n.filter(i=>!Yu(i)).reduce((i,s)=>i+(Tx.test(s)?Ox:s===""?Ix:Fx),a)}function Bx(e,t){return e.length===t.length&&e.slice(0,-1).every((a,i)=>a===t[i])?e[e.length-1]-t[t.length-1]:0}function Ux(e,t,n=!1){let{routesMeta:a}=e,i={},s="/",l=[];for(let o=0;o<a.length;++o){let c=a[o],u=o===a.length-1,m=s==="/"?t:t.slice(s.length)||"/",d=os({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},m),f=c.route;if(!d&&u&&n&&!a[a.length-1].route.index&&(d=os({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!d)return null;Object.assign(i,d.params),l.push({params:i,pathname:It([s,d.pathname]),pathnameBase:Wx(It([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=It([s,d.pathnameBase]))}return l}function os(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=$x(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],l=s.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:a.reduce((u,{paramName:m,isOptional:d},f)=>{if(m==="*"){let g=o[f]||"";l=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}const j=o[f];return d&&!j?u[m]=void 0:u[m]=(j||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:l,pattern:e}}function $x(e,t=!1,n=!0){Oe(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c,u,m)=>{if(a.push({paramName:o,isOptional:c!=null}),c){let d=m.charAt(u+l.length);return d&&d!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),a]}function Hx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Oe(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Rt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function Vx({basename:e,pathname:t}){return t==="/"?e:It([e,t])}var Vm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pc=e=>Vm.test(e);function Gx(e,t="/"){let{pathname:n,search:a="",hash:i=""}=typeof e=="string"?Jt(e):e,s;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?s=Zu(n.substring(1),"/"):s=Zu(n,t)):s=t,{pathname:s,search:Jx(a),hash:Qx(i)}}function Zu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ul(e,t,n,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Gm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function mc(e){let t=Gm(e);return t.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase)}function Rs(e,t,n,a=!1){let i;typeof e=="string"?i=Jt(e):(i={...e},ie(!i.pathname||!i.pathname.includes("?"),ul("?","pathname","search",i)),ie(!i.pathname||!i.pathname.includes("#"),ul("#","pathname","hash",i)),ie(!i.search||!i.search.includes("#"),ul("#","search","hash",i)));let s=e===""||i.pathname==="",l=s?"/":i.pathname,o;if(l==null)o=n;else{let d=t.length-1;if(!a&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}o=d>=0?t[d]:"/"}let c=Gx(i,o),u=l&&l!=="/"&&l.endsWith("/"),m=(s||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}var It=e=>e.join("/").replace(/\/\/+/g,"/"),Wx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Jx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Qx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,$a=class{constructor(e,t,n,a=!1){this.status=e,this.statusText=t||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ia(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Ha(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Wm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Jm(e,t){let n=e;if(typeof n!="string"||!Vm.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let a=n,i=!1;if(Wm)try{let s=new URL(window.location.href),l=n.startsWith("//")?new URL(s.protocol+n):new URL(n),o=Rt(l.pathname,t);l.origin===s.origin&&o!=null?n=o+l.search+l.hash:i=!0}catch{Oe(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:i,to:n}}var wr=Symbol("Uninstrumented");function Kx(e,t){let n={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};e.forEach(i=>i({id:t.id,index:t.index,path:t.path,instrument(s){let l=Object.keys(n);for(let o of l)s[o]&&n[o].push(s[o])}}));let a={};if(typeof t.lazy=="function"&&n.lazy.length>0){let i=wn(n.lazy,t.lazy,()=>{});i&&(a.lazy=i)}if(typeof t.lazy=="object"){let i=t.lazy;["middleware","loader","action"].forEach(s=>{let l=i[s],o=n[`lazy.${s}`];if(typeof l=="function"&&o.length>0){let c=wn(o,l,()=>{});c&&(a.lazy=Object.assign(a.lazy||{},{[s]:c}))}})}return["loader","action"].forEach(i=>{let s=t[i];if(typeof s=="function"&&n[i].length>0){let l=s[wr]??s,o=wn(n[i],l,(...c)=>Xu(c[0]));o&&(i==="loader"&&l.hydrate===!0&&(o.hydrate=!0),o[wr]=l,a[i]=o)}}),t.middleware&&t.middleware.length>0&&n.middleware.length>0&&(a.middleware=t.middleware.map(i=>{let s=i[wr]??i,l=wn(n.middleware,s,(...o)=>Xu(o[0]));return l?(l[wr]=s,l):i})),a}function Yx(e,t){let n={navigate:[],fetch:[]};if(t.forEach(a=>a({instrument(i){let s=Object.keys(i);for(let l of s)i[l]&&n[l].push(i[l])}})),n.navigate.length>0){let a=e.navigate[wr]??e.navigate,i=wn(n.navigate,a,(...s)=>{let[l,o]=s;return{to:typeof l=="number"||typeof l=="string"?l:l?Wt(l):".",...ed(e,o??{})}});i&&(i[wr]=a,e.navigate=i)}if(n.fetch.length>0){let a=e.fetch[wr]??e.fetch,i=wn(n.fetch,a,(...s)=>{let[l,,o,c]=s;return{href:o??".",fetcherKey:l,...ed(e,c??{})}});i&&(i[wr]=a,e.fetch=i)}return e}function wn(e,t,n){return e.length===0?null:async(...a)=>{let i=await Qm(e,n(...a),()=>t(...a),e.length-1);if(i.type==="error")throw i.value;return i.value}}async function Qm(e,t,n,a){let i=e[a],s;if(i){let l,o=async()=>(l?console.error("You cannot call instrumented handlers more than once"):l=Qm(e,t,n,a-1),s=await l,ie(s,"Expected a result"),s.type==="error"&&s.value instanceof Error?{status:"error",error:s.value}:{status:"success",error:void 0});try{await i(o,t)}catch(c){console.error("An instrumentation function threw an error:",c)}l||await o(),await l}else try{s={type:"success",value:await n()}}catch(l){s={type:"error",value:l}}return s||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function Xu(e){let{request:t,context:n,params:a,unstable_pattern:i}=e;return{request:Zx(t),params:{...a},unstable_pattern:i,context:Xx(n)}}function ed(e,t){return{currentUrl:Wt(e.state.location),..."formMethod"in t?{formMethod:t.formMethod}:{},..."formEncType"in t?{formEncType:t.formEncType}:{},..."formData"in t?{formData:t.formData}:{},..."body"in t?{body:t.body}:{}}}function Zx(e){return{method:e.method,url:e.url,headers:{get:(...t)=>e.headers.get(...t)}}}function Xx(e){if(tv(e)){let t={...e};return Object.freeze(t),t}else return{get:t=>e.get(t)}}var ev=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function tv(e){if(e===null||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null||Object.getOwnPropertyNames(t).sort().join("\0")===ev}var Km=["POST","PUT","PATCH","DELETE"],rv=new Set(Km),nv=["GET",...Km],av=new Set(nv),Ym=new Set([301,302,303,307,308]),iv=new Set([307,308]),dl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},sv={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Xn={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},lv=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Zm="remix-router-transitions",Xm=Symbol("ResetLoaderData");function ov(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u";ie(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a=e.hydrationRouteProperties||[],i=e.mapRouteProperties||lv,s=i;if(e.unstable_instrumentations){let b=e.unstable_instrumentations;s=k=>({...i(k),...Kx(b.map(A=>A.route).filter(Boolean),k)})}let l={},o=Da(e.routes,s,void 0,l),c,u=e.basename||"/";u.startsWith("/")||(u=`/${u}`);let m=e.dataStrategy||mv,d={...e.future},f=null,j=new Set,g=null,v=null,y=null,h=e.hydrationData!=null,p=jr(o,e.history.location,u),x=!1,L=null,M,_;if(p==null&&!e.patchRoutesOnNavigation){let b=yt(404,{pathname:e.history.location.pathname}),{matches:k,route:A}=xi(o);M=!0,_=!M,p=k,L={[A.id]:b}}else if(p&&!e.hydrationData&&Qa(p,o,e.history.location.pathname).active&&(p=null),p)if(p.some(b=>b.route.lazy))M=!1,_=!M;else if(!p.some(b=>fc(b.route)))M=!0,_=!M;else{let b=e.hydrationData?e.hydrationData.loaderData:null,k=e.hydrationData?e.hydrationData.errors:null,A=p;if(k){let O=p.findIndex(F=>k[F.route.id]!==void 0);A=A.slice(0,O+1)}_=!1,M=A.every(O=>{let F=ef(O.route,b,k);return _=_||F.renderFallback,!F.shouldLoad})}else{M=!1,_=!M,p=[];let b=Qa(null,o,e.history.location.pathname);b.active&&b.matches&&(x=!0,p=b.matches)}let T,w={historyAction:e.history.action,location:e.history.location,matches:p,initialized:M,renderFallback:_,navigation:dl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||L,fetchers:new Map,blockers:new Map},H="POP",q=null,ne=!1,Y,ke=!1,Z=new Map,ue=null,le=!1,me=!1,I=new Set,z=new Map,U=0,te=-1,oe=new Map,ve=new Set,Ee=new Map,Ie=new Map,ye=new Set,$e=new Map,an,At=null;function Af(){if(f=e.history.listen(({action:b,location:k,delta:A})=>{if(an){an(),an=void 0;return}Oe($e.size===0||A!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let O=Pc({currentLocation:w.location,nextLocation:k,historyAction:b});if(O&&A!=null){let F=new Promise(W=>{an=W});e.history.go(A*-1),Ja(O,{state:"blocked",location:k,proceed(){Ja(O,{state:"proceeding",proceed:void 0,reset:void 0,location:k}),F.then(()=>e.history.go(A))},reset(){let W=new Map(w.blockers);W.set(O,Xn),We({blockers:W})}}),q==null||q.resolve(),q=null;return}return Ir(b,k)}),n){Nv(t,Z);let b=()=>Pv(t,Z);t.addEventListener("pagehide",b),ue=()=>t.removeEventListener("pagehide",b)}return w.initialized||Ir("POP",w.location,{initialHydration:!0}),T}function Mf(){f&&f(),ue&&ue(),j.clear(),Y&&Y.abort(),w.fetchers.forEach((b,k)=>Ts(k)),w.blockers.forEach((b,k)=>Nc(k))}function Nf(b){return j.add(b),()=>j.delete(b)}function We(b,k={}){b.matches&&(b.matches=b.matches.map(F=>{let W=l[F.route.id],Q=F.route;return Q.element!==W.element||Q.errorElement!==W.errorElement||Q.hydrateFallbackElement!==W.hydrateFallbackElement?{...F,route:W}:F})),w={...w,...b};let A=[],O=[];w.fetchers.forEach((F,W)=>{F.state==="idle"&&(ye.has(W)?A.push(W):O.push(W))}),ye.forEach(F=>{!w.fetchers.has(F)&&!z.has(F)&&A.push(F)}),[...j].forEach(F=>F(w,{deletedFetchers:A,newErrors:b.errors??null,viewTransitionOpts:k.viewTransitionOpts,flushSync:k.flushSync===!0})),A.forEach(F=>Ts(F)),O.forEach(F=>w.fetchers.delete(F))}function sn(b,k,{flushSync:A}={}){var X,J;let O=w.actionData!=null&&w.navigation.formMethod!=null&&Ye(w.navigation.formMethod)&&w.navigation.state==="loading"&&((X=b.state)==null?void 0:X._isRedirect)!==!0,F;k.actionData?Object.keys(k.actionData).length>0?F=k.actionData:F=null:O?F=w.actionData:F=null;let W=k.loaderData?ud(w.loaderData,k.loaderData,k.matches||[],k.errors):w.loaderData,Q=w.blockers;Q.size>0&&(Q=new Map(Q),Q.forEach((ae,ce)=>Q.set(ce,Xn)));let V=le?!1:Tc(b,k.matches||w.matches),B=ne===!0||w.navigation.formMethod!=null&&Ye(w.navigation.formMethod)&&((J=b.state)==null?void 0:J._isRedirect)!==!0;c&&(o=c,c=void 0),le||H==="POP"||(H==="PUSH"?e.history.push(b,b.state):H==="REPLACE"&&e.history.replace(b,b.state));let K;if(H==="POP"){let ae=Z.get(w.location.pathname);ae&&ae.has(b.pathname)?K={currentLocation:w.location,nextLocation:b}:Z.has(b.pathname)&&(K={currentLocation:b,nextLocation:w.location})}else if(ke){let ae=Z.get(w.location.pathname);ae?ae.add(b.pathname):(ae=new Set([b.pathname]),Z.set(w.location.pathname,ae)),K={currentLocation:w.location,nextLocation:b}}We({...k,actionData:F,loaderData:W,historyAction:H,location:b,initialized:!0,renderFallback:!1,navigation:dl,revalidation:"idle",restoreScrollPosition:V,preventScrollReset:B,blockers:Q},{viewTransitionOpts:K,flushSync:A===!0}),H="POP",ne=!1,ke=!1,le=!1,me=!1,q==null||q.resolve(),q=null,At==null||At.resolve(),At=null}async function Ec(b,k){if(q==null||q.resolve(),q=null,typeof b=="number"){q||(q=fd());let Re=q.promise;return e.history.go(b),Re}let A=fo(w.location,w.matches,u,b,k==null?void 0:k.fromRouteId,k==null?void 0:k.relative),{path:O,submission:F,error:W}=td(!1,A,k),Q;k!=null&&k.unstable_mask&&(Q={pathname:"",search:"",hash:"",...typeof k.unstable_mask=="string"?Jt(k.unstable_mask):{...w.location.unstable_mask,...k.unstable_mask}});let V=w.location,B=Oa(V,O,k&&k.state,void 0,Q);B={...B,...e.history.encodeLocation(B)};let K=k&&k.replace!=null?k.replace:void 0,X="PUSH";K===!0?X="REPLACE":K===!1||F!=null&&Ye(F.formMethod)&&F.formAction===w.location.pathname+w.location.search&&(X="REPLACE");let J=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,ae=(k&&k.flushSync)===!0,ce=Pc({currentLocation:V,nextLocation:B,historyAction:X});if(ce){Ja(ce,{state:"blocked",location:B,proceed(){Ja(ce,{state:"proceeding",proceed:void 0,reset:void 0,location:B}),Ec(b,k)},reset(){let Re=new Map(w.blockers);Re.set(ce,Xn),We({blockers:Re})}});return}await Ir(X,B,{submission:F,pendingError:W,preventScrollReset:J,replace:k&&k.replace,enableViewTransition:k&&k.viewTransition,flushSync:ae,callSiteDefaultShouldRevalidate:k&&k.unstable_defaultShouldRevalidate})}function Pf(){At||(At=fd()),_s(),We({revalidation:"loading"});let b=At.promise;return w.navigation.state==="submitting"?b:w.navigation.state==="idle"?(Ir(w.historyAction,w.location,{startUninterruptedRevalidation:!0}),b):(Ir(H||w.historyAction,w.navigation.location,{overrideNavigation:w.navigation,enableViewTransition:ke===!0}),b)}async function Ir(b,k,A){Y&&Y.abort(),Y=null,H=b,le=(A&&A.startUninterruptedRevalidation)===!0,$f(w.location,w.matches),ne=(A&&A.preventScrollReset)===!0,ke=(A&&A.enableViewTransition)===!0;let O=c||o,F=A&&A.overrideNavigation,W=A!=null&&A.initialHydration&&w.matches&&w.matches.length>0&&!x?w.matches:jr(O,k,u),Q=(A&&A.flushSync)===!0;if(W&&w.initialized&&!me&&bv(w.location,k)&&!(A&&A.submission&&Ye(A.submission.formMethod))){sn(k,{matches:W},{flushSync:Q});return}let V=Qa(W,O,k.pathname);if(V.active&&V.matches&&(W=V.matches),!W){let{error:ze,notFoundMatches:et,route:xe}=Os(k.pathname);sn(k,{matches:et,loaderData:{},errors:{[xe.id]:ze}},{flushSync:Q});return}Y=new AbortController;let B=un(e.history,k,Y.signal,A&&A.submission),K=e.getContext?await e.getContext():new Qu,X;if(A&&A.pendingError)X=[yr(W).route.id,{type:"error",error:A.pendingError}];else if(A&&A.submission&&Ye(A.submission.formMethod)){let ze=await _f(B,k,A.submission,W,K,V.active,A&&A.initialHydration===!0,{replace:A.replace,flushSync:Q});if(ze.shortCircuited)return;if(ze.pendingActionResult){let[et,xe]=ze.pendingActionResult;if(mt(xe)&&Ia(xe.error)&&xe.error.status===404){Y=null,sn(k,{matches:ze.matches,loaderData:{},errors:{[et]:xe.error}});return}}W=ze.matches||W,X=ze.pendingActionResult,F=pl(k,A.submission),Q=!1,V.active=!1,B=un(e.history,B.url,B.signal)}let{shortCircuited:J,matches:ae,loaderData:ce,errors:Re}=await Tf(B,k,W,K,V.active,F,A&&A.submission,A&&A.fetcherSubmission,A&&A.replace,A&&A.initialHydration===!0,Q,X,A&&A.callSiteDefaultShouldRevalidate);J||(Y=null,sn(k,{matches:ae||W,...dd(X),loaderData:ce,errors:Re}))}async function _f(b,k,A,O,F,W,Q,V={}){_s();let B=Av(k,A);if(We({navigation:B},{flushSync:V.flushSync===!0}),W){let J=await Ka(O,k.pathname,b.signal);if(J.type==="aborted")return{shortCircuited:!0};if(J.type==="error"){if(J.partialMatches.length===0){let{matches:ce,route:Re}=xi(o);return{matches:ce,pendingActionResult:[Re.id,{type:"error",error:J.error}]}}let ae=yr(J.partialMatches).route.id;return{matches:J.partialMatches,pendingActionResult:[ae,{type:"error",error:J.error}]}}else if(J.matches)O=J.matches;else{let{notFoundMatches:ae,error:ce,route:Re}=Os(k.pathname);return{matches:ae,pendingActionResult:[Re.id,{type:"error",error:ce}]}}}let K,X=_i(O,k);if(!X.route.action&&!X.route.lazy)K={type:"error",error:yt(405,{method:b.method,pathname:k.pathname,routeId:X.route.id})};else{let J=Mn(s,l,b,O,X,Q?[]:a,F),ae=await Un(b,J,F,null);if(K=ae[X.route.id],!K){for(let ce of O)if(ae[ce.route.id]){K=ae[ce.route.id];break}}if(b.signal.aborted)return{shortCircuited:!0}}if(Wr(K)){let J;return V&&V.replace!=null?J=V.replace:J=ld(K.response.headers.get("Location"),new URL(b.url),u,e.history)===w.location.pathname+w.location.search,await Fr(b,K,!0,{submission:A,replace:J}),{shortCircuited:!0}}if(mt(K)){let J=yr(O,X.route.id);return(V&&V.replace)!==!0&&(H="PUSH"),{matches:O,pendingActionResult:[J.route.id,K,X.route.id]}}return{matches:O,pendingActionResult:[X.route.id,K]}}async function Tf(b,k,A,O,F,W,Q,V,B,K,X,J,ae){let ce=W||pl(k,Q),Re=Q||V||md(ce),ze=!le&&!K;if(F){if(ze){let Je=Cc(J);We({navigation:ce,...Je!==void 0?{actionData:Je}:{}},{flushSync:X})}let de=await Ka(A,k.pathname,b.signal);if(de.type==="aborted")return{shortCircuited:!0};if(de.type==="error"){if(de.partialMatches.length===0){let{matches:ln,route:Br}=xi(o);return{matches:ln,loaderData:{},errors:{[Br.id]:de.error}}}let Je=yr(de.partialMatches).route.id;return{matches:de.partialMatches,loaderData:{},errors:{[Je]:de.error}}}else if(de.matches)A=de.matches;else{let{error:Je,notFoundMatches:ln,route:Br}=Os(k.pathname);return{matches:ln,loaderData:{},errors:{[Br.id]:Je}}}}let et=c||o,{dsMatches:xe,revalidatingFetchers:jt}=rd(b,O,s,l,e.history,w,A,Re,k,K?[]:a,K===!0,me,I,ye,Ee,ve,et,u,e.patchRoutesOnNavigation!=null,J,ae);if(te=++U,!e.dataStrategy&&!xe.some(de=>de.shouldLoad)&&!xe.some(de=>de.route.middleware&&de.route.middleware.length>0)&&jt.length===0){let de=Ac();return sn(k,{matches:A,loaderData:{},errors:J&&mt(J[1])?{[J[0]]:J[1].error}:null,...dd(J),...de?{fetchers:new Map(w.fetchers)}:{}},{flushSync:X}),{shortCircuited:!0}}if(ze){let de={};if(!F){de.navigation=ce;let Je=Cc(J);Je!==void 0&&(de.actionData=Je)}jt.length>0&&(de.fetchers=Of(jt)),We(de,{flushSync:X})}jt.forEach(de=>{Xt(de.key),de.controller&&z.set(de.key,de.controller)});let qr=()=>jt.forEach(de=>Xt(de.key));Y&&Y.signal.addEventListener("abort",qr);let{loaderResults:$n,fetcherResults:dr}=await kc(xe,jt,b,O);if(b.signal.aborted)return{shortCircuited:!0};Y&&Y.signal.removeEventListener("abort",qr),jt.forEach(de=>z.delete(de.key));let qt=vi($n);if(qt)return await Fr(b,qt.result,!0,{replace:B}),{shortCircuited:!0};if(qt=vi(dr),qt)return ve.add(qt.key),await Fr(b,qt.result,!0,{replace:B}),{shortCircuited:!0};let{loaderData:Ds,errors:Hn}=cd(w,A,$n,J,jt,dr);K&&w.errors&&(Hn={...w.errors,...Hn});let zr=Ac(),Ya=Mc(te),Za=zr||Ya||jt.length>0;return{matches:A,loaderData:Ds,errors:Hn,...Za?{fetchers:new Map(w.fetchers)}:{}}}function Cc(b){if(b&&!mt(b[1]))return{[b[0]]:b[1].data};if(w.actionData)return Object.keys(w.actionData).length===0?null:w.actionData}function Of(b){return b.forEach(k=>{let A=w.fetchers.get(k.key),O=ea(void 0,A?A.data:void 0);w.fetchers.set(k.key,O)}),new Map(w.fetchers)}async function Df(b,k,A,O){Xt(b);let F=(O&&O.flushSync)===!0,W=c||o,Q=fo(w.location,w.matches,u,A,k,O==null?void 0:O.relative),V=jr(W,Q,u),B=Qa(V,W,Q);if(B.active&&B.matches&&(V=B.matches),!V){Zt(b,k,yt(404,{pathname:Q}),{flushSync:F});return}let{path:K,submission:X,error:J}=td(!0,Q,O);if(J){Zt(b,k,J,{flushSync:F});return}let ae=e.getContext?await e.getContext():new Qu,ce=(O&&O.preventScrollReset)===!0;if(X&&Ye(X.formMethod)){await If(b,k,K,V,ae,B.active,F,ce,X,O&&O.unstable_defaultShouldRevalidate);return}Ee.set(b,{routeId:k,path:K}),await Ff(b,k,K,V,ae,B.active,F,ce,X)}async function If(b,k,A,O,F,W,Q,V,B,K){_s(),Ee.delete(b);let X=w.fetchers.get(b);Yt(b,Mv(B,X),{flushSync:Q});let J=new AbortController,ae=un(e.history,A,J.signal,B);if(W){let Ne=await Ka(O,new URL(ae.url).pathname,ae.signal,b);if(Ne.type==="aborted")return;if(Ne.type==="error"){Zt(b,k,Ne.error,{flushSync:Q});return}else if(Ne.matches)O=Ne.matches;else{Zt(b,k,yt(404,{pathname:A}),{flushSync:Q});return}}let ce=_i(O,A);if(!ce.route.action&&!ce.route.lazy){let Ne=yt(405,{method:B.formMethod,pathname:A,routeId:k});Zt(b,k,Ne,{flushSync:Q});return}z.set(b,J);let Re=U,ze=Mn(s,l,ae,O,ce,a,F),et=await Un(ae,ze,F,b),xe=et[ce.route.id];if(!xe){for(let Ne of ze)if(et[Ne.route.id]){xe=et[Ne.route.id];break}}if(ae.signal.aborted){z.get(b)===J&&z.delete(b);return}if(ye.has(b)){if(Wr(xe)||mt(xe)){Yt(b,er(void 0));return}}else{if(Wr(xe))if(z.delete(b),te>Re){Yt(b,er(void 0));return}else return ve.add(b),Yt(b,ea(B)),Fr(ae,xe,!1,{fetcherSubmission:B,preventScrollReset:V});if(mt(xe)){Zt(b,k,xe.error);return}}let jt=w.navigation.location||w.location,qr=un(e.history,jt,J.signal),$n=c||o,dr=w.navigation.state!=="idle"?jr($n,w.navigation.location,u):w.matches;ie(dr,"Didn't find any matches after fetcher action");let qt=++U;oe.set(b,qt);let Ds=ea(B,xe.data);w.fetchers.set(b,Ds);let{dsMatches:Hn,revalidatingFetchers:zr}=rd(qr,F,s,l,e.history,w,dr,B,jt,a,!1,me,I,ye,Ee,ve,$n,u,e.patchRoutesOnNavigation!=null,[ce.route.id,xe],K);zr.filter(Ne=>Ne.key!==b).forEach(Ne=>{let Xa=Ne.key,Dc=w.fetchers.get(Xa),Gf=ea(void 0,Dc?Dc.data:void 0);w.fetchers.set(Xa,Gf),Xt(Xa),Ne.controller&&z.set(Xa,Ne.controller)}),We({fetchers:new Map(w.fetchers)});let Ya=()=>zr.forEach(Ne=>Xt(Ne.key));J.signal.addEventListener("abort",Ya);let{loaderResults:Za,fetcherResults:de}=await kc(Hn,zr,qr,F);if(J.signal.aborted)return;if(J.signal.removeEventListener("abort",Ya),oe.delete(b),z.delete(b),zr.forEach(Ne=>z.delete(Ne.key)),w.fetchers.has(b)){let Ne=er(xe.data);w.fetchers.set(b,Ne)}let Je=vi(Za);if(Je)return Fr(qr,Je.result,!1,{preventScrollReset:V});if(Je=vi(de),Je)return ve.add(Je.key),Fr(qr,Je.result,!1,{preventScrollReset:V});let{loaderData:ln,errors:Br}=cd(w,dr,Za,void 0,zr,de);Mc(qt),w.navigation.state==="loading"&&qt>te?(ie(H,"Expected pending action"),Y&&Y.abort(),sn(w.navigation.location,{matches:dr,loaderData:ln,errors:Br,fetchers:new Map(w.fetchers)})):(We({errors:Br,loaderData:ud(w.loaderData,ln,dr,Br),fetchers:new Map(w.fetchers)}),me=!1)}async function Ff(b,k,A,O,F,W,Q,V,B){let K=w.fetchers.get(b);Yt(b,ea(B,K?K.data:void 0),{flushSync:Q});let X=new AbortController,J=un(e.history,A,X.signal);if(W){let xe=await Ka(O,new URL(J.url).pathname,J.signal,b);if(xe.type==="aborted")return;if(xe.type==="error"){Zt(b,k,xe.error,{flushSync:Q});return}else if(xe.matches)O=xe.matches;else{Zt(b,k,yt(404,{pathname:A}),{flushSync:Q});return}}let ae=_i(O,A);z.set(b,X);let ce=U,Re=Mn(s,l,J,O,ae,a,F),et=(await Un(J,Re,F,b))[ae.route.id];if(z.get(b)===X&&z.delete(b),!J.signal.aborted){if(ye.has(b)){Yt(b,er(void 0));return}if(Wr(et))if(te>ce){Yt(b,er(void 0));return}else{ve.add(b),await Fr(J,et,!1,{preventScrollReset:V});return}if(mt(et)){Zt(b,k,et.error);return}Yt(b,er(et.data))}}async function Fr(b,k,A,{submission:O,fetcherSubmission:F,preventScrollReset:W,replace:Q}={}){A||(q==null||q.resolve(),q=null),k.response.headers.has("X-Remix-Revalidate")&&(me=!0);let V=k.response.headers.get("Location");ie(V,"Expected a Location header on the redirect Response"),V=ld(V,new URL(b.url),u,e.history);let B=Oa(w.location,V,{_isRedirect:!0});if(n){let Re=!1;if(k.response.headers.has("X-Remix-Reload-Document"))Re=!0;else if(pc(V)){const ze=Um(V,!0);Re=ze.origin!==t.location.origin||Rt(ze.pathname,u)==null}if(Re){Q?t.location.replace(V):t.location.assign(V);return}}Y=null;let K=Q===!0||k.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:X,formAction:J,formEncType:ae}=w.navigation;!O&&!F&&X&&J&&ae&&(O=md(w.navigation));let ce=O||F;if(iv.has(k.response.status)&&ce&&Ye(ce.formMethod))await Ir(K,B,{submission:{...ce,formAction:V},preventScrollReset:W||ne,enableViewTransition:A?ke:void 0});else{let Re=pl(B,O);await Ir(K,B,{overrideNavigation:Re,fetcherSubmission:F,preventScrollReset:W||ne,enableViewTransition:A?ke:void 0})}}async function Un(b,k,A,O){var Q;let F,W={};try{F=await hv(m,b,k,O,A,!1)}catch(V){return k.filter(B=>B.shouldLoad).forEach(B=>{W[B.route.id]={type:"error",error:V}}),W}if(b.signal.aborted)return W;if(!Ye(b.method))for(let V of k){if(((Q=F[V.route.id])==null?void 0:Q.type)==="error")break;!F.hasOwnProperty(V.route.id)&&!w.loaderData.hasOwnProperty(V.route.id)&&(!w.errors||!w.errors.hasOwnProperty(V.route.id))&&V.shouldCallHandler()&&(F[V.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${V.route.id}`)})}for(let[V,B]of Object.entries(F))if(Cv(B)){let K=B.result;W[V]={type:"redirect",response:jv(K,b,V,k,u)}}else W[V]=await vv(B);return W}async function kc(b,k,A,O){let F=Un(A,b,O,null),W=Promise.all(k.map(async B=>{if(B.matches&&B.match&&B.request&&B.controller){let X=(await Un(B.request,B.matches,O,B.key))[B.match.route.id];return{[B.key]:X}}else return Promise.resolve({[B.key]:{type:"error",error:yt(404,{pathname:B.path})}})})),Q=await F,V=(await W).reduce((B,K)=>Object.assign(B,K),{});return{loaderResults:Q,fetcherResults:V}}function _s(){me=!0,Ee.forEach((b,k)=>{z.has(k)&&I.add(k),Xt(k)})}function Yt(b,k,A={}){w.fetchers.set(b,k),We({fetchers:new Map(w.fetchers)},{flushSync:(A&&A.flushSync)===!0})}function Zt(b,k,A,O={}){let F=yr(w.matches,k);Ts(b),We({errors:{[F.route.id]:A},fetchers:new Map(w.fetchers)},{flushSync:(O&&O.flushSync)===!0})}function Rc(b){return Ie.set(b,(Ie.get(b)||0)+1),ye.has(b)&&ye.delete(b),w.fetchers.get(b)||sv}function qf(b,k){Xt(b,k==null?void 0:k.reason),Yt(b,er(null))}function Ts(b){let k=w.fetchers.get(b);z.has(b)&&!(k&&k.state==="loading"&&oe.has(b))&&Xt(b),Ee.delete(b),oe.delete(b),ve.delete(b),ye.delete(b),I.delete(b),w.fetchers.delete(b)}function zf(b){let k=(Ie.get(b)||0)-1;k<=0?(Ie.delete(b),ye.add(b)):Ie.set(b,k),We({fetchers:new Map(w.fetchers)})}function Xt(b,k){let A=z.get(b);A&&(A.abort(k),z.delete(b))}function Lc(b){for(let k of b){let A=Rc(k),O=er(A.data);w.fetchers.set(k,O)}}function Ac(){let b=[],k=!1;for(let A of ve){let O=w.fetchers.get(A);ie(O,`Expected fetcher: ${A}`),O.state==="loading"&&(ve.delete(A),b.push(A),k=!0)}return Lc(b),k}function Mc(b){let k=[];for(let[A,O]of oe)if(O<b){let F=w.fetchers.get(A);ie(F,`Expected fetcher: ${A}`),F.state==="loading"&&(Xt(A),oe.delete(A),k.push(A))}return Lc(k),k.length>0}function Bf(b,k){let A=w.blockers.get(b)||Xn;return $e.get(b)!==k&&$e.set(b,k),A}function Nc(b){w.blockers.delete(b),$e.delete(b)}function Ja(b,k){let A=w.blockers.get(b)||Xn;ie(A.state==="unblocked"&&k.state==="blocked"||A.state==="blocked"&&k.state==="blocked"||A.state==="blocked"&&k.state==="proceeding"||A.state==="blocked"&&k.state==="unblocked"||A.state==="proceeding"&&k.state==="unblocked",`Invalid blocker state transition: ${A.state} -> ${k.state}`);let O=new Map(w.blockers);O.set(b,k),We({blockers:O})}function Pc({currentLocation:b,nextLocation:k,historyAction:A}){if($e.size===0)return;$e.size>1&&Oe(!1,"A router only supports one blocker at a time");let O=Array.from($e.entries()),[F,W]=O[O.length-1],Q=w.blockers.get(F);if(!(Q&&Q.state==="proceeding")&&W({currentLocation:b,nextLocation:k,historyAction:A}))return F}function Os(b){let k=yt(404,{pathname:b}),A=c||o,{matches:O,route:F}=xi(A);return{notFoundMatches:O,route:F,error:k}}function Uf(b,k,A){if(g=b,y=k,v=A||null,!h&&w.navigation===dl){h=!0;let O=Tc(w.location,w.matches);O!=null&&We({restoreScrollPosition:O})}return()=>{g=null,y=null,v=null}}function _c(b,k){return v&&v(b,k.map(O=>Px(O,w.loaderData)))||b.key}function $f(b,k){if(g&&y){let A=_c(b,k);g[A]=y()}}function Tc(b,k){if(g){let A=_c(b,k),O=g[A];if(typeof O=="number")return O}return null}function Qa(b,k,A){if(e.patchRoutesOnNavigation)if(b){if(Object.keys(b[0].params).length>0)return{active:!0,matches:la(k,A,u,!0)}}else return{active:!0,matches:la(k,A,u,!0)||[]};return{active:!1,matches:null}}async function Ka(b,k,A,O){if(!e.patchRoutesOnNavigation)return{type:"success",matches:b};let F=b;for(;;){let W=c==null,Q=c||o,V=l;try{await e.patchRoutesOnNavigation({signal:A,path:k,matches:F,fetcherKey:O,patch:(X,J)=>{A.aborted||nd(X,J,Q,V,s,!1)}})}catch(X){return{type:"error",error:X,partialMatches:F}}finally{W&&!A.aborted&&(o=[...o])}if(A.aborted)return{type:"aborted"};let B=jr(Q,k,u),K=null;if(B){if(Object.keys(B[0].params).length===0)return{type:"success",matches:B};if(K=la(Q,k,u,!0),!(K&&F.length<K.length&&Oc(F,K.slice(0,F.length))))return{type:"success",matches:B}}if(K||(K=la(Q,k,u,!0)),!K||Oc(F,K))return{type:"success",matches:null};F=K}}function Oc(b,k){return b.length===k.length&&b.every((A,O)=>A.route.id===k[O].route.id)}function Hf(b){l={},c=Da(b,s,void 0,l)}function Vf(b,k,A=!1){let O=c==null;nd(b,k,c||o,l,s,A),O&&(o=[...o],We({}))}return T={get basename(){return u},get future(){return d},get state(){return w},get routes(){return o},get window(){return t},initialize:Af,subscribe:Nf,enableScrollRestoration:Uf,navigate:Ec,fetch:Df,revalidate:Pf,createHref:b=>e.history.createHref(b),encodeLocation:b=>e.history.encodeLocation(b),getFetcher:Rc,resetFetcher:qf,deleteFetcher:zf,dispose:Mf,getBlocker:Bf,deleteBlocker:Nc,patchRoutes:Vf,_internalFetchControllers:z,_internalSetRoutes:Hf,_internalSetStateDoNotUseOrYouWillBreakYourApp(b){We(b)}},e.unstable_instrumentations&&(T=Yx(T,e.unstable_instrumentations.map(b=>b.router).filter(Boolean))),T}function cv(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function fo(e,t,n,a,i,s){let l,o;if(i){l=[];for(let u of t)if(l.push(u),u.route.id===i){o=u;break}}else l=t,o=t[t.length-1];let c=Rs(a||".",mc(l),Rt(e.pathname,n)||e.pathname,s==="path");if(a==null&&(c.search=e.search,c.hash=e.hash),(a==null||a===""||a===".")&&o){let u=gc(c.search);if(o.route.index&&!u)c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index";else if(!o.route.index&&u){let m=new URLSearchParams(c.search),d=m.getAll("index");m.delete("index"),d.filter(j=>j).forEach(j=>m.append("index",j));let f=m.toString();c.search=f?`?${f}`:""}}return n!=="/"&&(c.pathname=Vx({basename:n,pathname:c.pathname})),Wt(c)}function td(e,t,n){if(!n||!cv(n))return{path:t};if(n.formMethod&&!Lv(n.formMethod))return{path:t,error:yt(405,{method:n.formMethod})};let a=()=>({path:t,error:yt(400,{type:"invalid-body"})}),s=(n.formMethod||"get").toUpperCase(),l=lf(t);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!Ye(s))return a();let d=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((f,[j,g])=>`${f}${j}=${g}
`,""):String(n.body);return{path:t,submission:{formMethod:s,formAction:l,formEncType:n.formEncType,formData:void 0,json:void 0,text:d}}}else if(n.formEncType==="application/json"){if(!Ye(s))return a();try{let d=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:t,submission:{formMethod:s,formAction:l,formEncType:n.formEncType,formData:void 0,json:d,text:void 0}}}catch{return a()}}}ie(typeof FormData=="function","FormData is not available in this environment");let o,c;if(n.formData)o=go(n.formData),c=n.formData;else if(n.body instanceof FormData)o=go(n.body),c=n.body;else if(n.body instanceof URLSearchParams)o=n.body,c=od(o);else if(n.body==null)o=new URLSearchParams,c=new FormData;else try{o=new URLSearchParams(n.body),c=od(o)}catch{return a()}let u={formMethod:s,formAction:l,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Ye(u.formMethod))return{path:t,submission:u};let m=Jt(t);return e&&m.search&&gc(m.search)&&o.append("index",""),m.search=`?${o}`,{path:Wt(m),submission:u}}function rd(e,t,n,a,i,s,l,o,c,u,m,d,f,j,g,v,y,h,p,x,L){var ue;let M=x?mt(x[1])?x[1].error:x[1].data:void 0,_=i.createURL(s.location),T=i.createURL(c),w;if(m&&s.errors){let le=Object.keys(s.errors)[0];w=l.findIndex(me=>me.route.id===le)}else if(x&&mt(x[1])){let le=x[0];w=l.findIndex(me=>me.route.id===le)-1}let H=x?x[1].statusCode:void 0,q=H&&H>=400,ne={currentUrl:_,currentParams:((ue=s.matches[0])==null?void 0:ue.params)||{},nextUrl:T,nextParams:l[0].params,...o,actionResult:M,actionStatus:H},Y=Ha(l),ke=l.map((le,me)=>{let{route:I}=le,z=null;if(w!=null&&me>w)z=!1;else if(I.lazy)z=!0;else if(!fc(I))z=!1;else if(m){let{shouldLoad:ve}=ef(I,s.loaderData,s.errors);z=ve}else uv(s.loaderData,s.matches[me],le)&&(z=!0);if(z!==null)return ho(n,a,e,Y,le,u,t,z);let U=!1;typeof L=="boolean"?U=L:q?U=!1:(d||_.pathname+_.search===T.pathname+T.search||_.search!==T.search||dv(s.matches[me],le))&&(U=!0);let te={...ne,defaultShouldRevalidate:U},oe=xa(le,te);return ho(n,a,e,Y,le,u,t,oe,te,L)}),Z=[];return g.forEach((le,me)=>{if(m||!l.some(Ie=>Ie.route.id===le.routeId)||j.has(me))return;let I=s.fetchers.get(me),z=I&&I.state!=="idle"&&I.data===void 0,U=jr(y,le.path,h);if(!U){if(p&&z)return;Z.push({key:me,routeId:le.routeId,path:le.path,matches:null,match:null,request:null,controller:null});return}if(v.has(me))return;let te=_i(U,le.path),oe=new AbortController,ve=un(i,le.path,oe.signal),Ee=null;if(f.has(me))f.delete(me),Ee=Mn(n,a,ve,U,te,u,t);else if(z)d&&(Ee=Mn(n,a,ve,U,te,u,t));else{let Ie;typeof L=="boolean"?Ie=L:q?Ie=!1:Ie=d;let ye={...ne,defaultShouldRevalidate:Ie};xa(te,ye)&&(Ee=Mn(n,a,ve,U,te,u,t,ye))}Ee&&Z.push({key:me,routeId:le.routeId,path:le.path,matches:Ee,match:te,request:ve,controller:oe})}),{dsMatches:ke,revalidatingFetchers:Z}}function fc(e){return e.loader!=null||e.middleware!=null&&e.middleware.length>0}function ef(e,t,n){if(e.lazy)return{shouldLoad:!0,renderFallback:!0};if(!fc(e))return{shouldLoad:!1,renderFallback:!1};let a=t!=null&&e.id in t,i=n!=null&&n[e.id]!==void 0;if(!a&&i)return{shouldLoad:!1,renderFallback:!1};if(typeof e.loader=="function"&&e.loader.hydrate===!0)return{shouldLoad:!0,renderFallback:!a};let s=!a&&!i;return{shouldLoad:s,renderFallback:s}}function uv(e,t,n){let a=!t||n.route.id!==t.route.id,i=!e.hasOwnProperty(n.route.id);return a||i}function dv(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function xa(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function nd(e,t,n,a,i,s){let l;if(e){let u=a[e];ie(u,`No route found to patch children into: routeId = ${e}`),u.children||(u.children=[]),l=u.children}else l=n;let o=[],c=[];if(t.forEach(u=>{let m=l.find(d=>tf(u,d));m?c.push({existingRoute:m,newRoute:u}):o.push(u)}),o.length>0){let u=Da(o,i,[e||"_","patch",String((l==null?void 0:l.length)||"0")],a);l.push(...u)}if(s&&c.length>0)for(let u=0;u<c.length;u++){let{existingRoute:m,newRoute:d}=c[u],f=m,[j]=Da([d],i,[],{},!0);Object.assign(f,{element:j.element?j.element:f.element,errorElement:j.errorElement?j.errorElement:f.errorElement,hydrateFallbackElement:j.hydrateFallbackElement?j.hydrateFallbackElement:f.hydrateFallbackElement})}}function tf(e,t){var n;return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:((n=e.children)==null?void 0:n.every((a,i)=>{var s;return(s=t.children)==null?void 0:s.some(l=>tf(a,l))}))??!1:!1}var ad=new WeakMap,rf=({key:e,route:t,manifest:n,mapRouteProperties:a})=>{let i=n[t.id];if(ie(i,"No route found in manifest"),!i.lazy||typeof i.lazy!="object")return;let s=i.lazy[e];if(!s)return;let l=ad.get(i);l||(l={},ad.set(i,l));let o=l[e];if(o)return o;let c=(async()=>{let u=Lx(e),d=i[e]!==void 0&&e!=="hasErrorBoundary";if(u)Oe(!u,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),l[e]=Promise.resolve();else if(d)Oe(!1,`Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let f=await s();f!=null&&(Object.assign(i,{[e]:f}),Object.assign(i,a(i)))}typeof i.lazy=="object"&&(i.lazy[e]=void 0,Object.values(i.lazy).every(f=>f===void 0)&&(i.lazy=void 0))})();return l[e]=c,c},id=new WeakMap;function pv(e,t,n,a,i){let s=n[e.id];if(ie(s,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let m=id.get(s);if(m)return{lazyRoutePromise:m,lazyHandlerPromise:m};let d=(async()=>{ie(typeof e.lazy=="function","No lazy route function found");let f=await e.lazy(),j={};for(let g in f){let v=f[g];if(v===void 0)continue;let y=Mx(g),p=s[g]!==void 0&&g!=="hasErrorBoundary";y?Oe(!y,"Route property "+g+" is not a supported property to be returned from a lazy route function. This property will be ignored."):p?Oe(!p,`Route "${s.id}" has a static property "${g}" defined but its lazy function is also returning a value for this property. The lazy route property "${g}" will be ignored.`):j[g]=v}Object.assign(s,j),Object.assign(s,{...a(s),lazy:void 0})})();return id.set(s,d),d.catch(()=>{}),{lazyRoutePromise:d,lazyHandlerPromise:d}}let l=Object.keys(e.lazy),o=[],c;for(let m of l){if(i&&i.includes(m))continue;let d=rf({key:m,route:e,manifest:n,mapRouteProperties:a});d&&(o.push(d),m===t&&(c=d))}let u=o.length>0?Promise.all(o).then(()=>{}):void 0;return u==null||u.catch(()=>{}),c==null||c.catch(()=>{}),{lazyRoutePromise:u,lazyHandlerPromise:c}}async function sd(e){let t=e.matches.filter(i=>i.shouldLoad),n={};return(await Promise.all(t.map(i=>i.resolve()))).forEach((i,s)=>{n[t[s].route.id]=i}),n}async function mv(e){return e.matches.some(t=>t.route.middleware)?nf(e,()=>sd(e)):sd(e)}function nf(e,t){return fv(e,t,a=>{if(Rv(a))throw a;return a},wv,n);function n(a,i,s){if(s)return Promise.resolve(Object.assign(s.value,{[i]:{type:"error",result:a}}));{let{matches:l}=e,o=Math.min(Math.max(l.findIndex(u=>u.route.id===i),0),Math.max(l.findIndex(u=>u.shouldCallHandler()),0)),c=yr(l,l[o].route.id).route.id;return Promise.resolve({[c]:{type:"error",result:a}})}}}async function fv(e,t,n,a,i){let{matches:s,request:l,params:o,context:c,unstable_pattern:u}=e,m=s.flatMap(f=>f.route.middleware?f.route.middleware.map(j=>[f.route.id,j]):[]);return await af({request:l,params:o,context:c,unstable_pattern:u},m,t,n,a,i)}async function af(e,t,n,a,i,s,l=0){let{request:o}=e;if(o.signal.aborted)throw o.signal.reason??new Error(`Request aborted: ${o.method} ${o.url}`);let c=t[l];if(!c)return await n();let[u,m]=c,d,f=async()=>{if(d)throw new Error("You may only call `next()` once per middleware");try{return d={value:await af(e,t,n,a,i,s,l+1)},d.value}catch(j){return d={value:await s(j,u,d)},d.value}};try{let j=await m(e,f),g=j!=null?a(j):void 0;return i(g)?g:d?g??d.value:(d={value:await f()},d.value)}catch(j){return await s(j,u,d)}}function sf(e,t,n,a,i){let s=rf({key:"middleware",route:a.route,manifest:t,mapRouteProperties:e}),l=pv(a.route,Ye(n.method)?"action":"loader",t,e,i);return{middleware:s,route:l.lazyRoutePromise,handler:l.lazyHandlerPromise}}function ho(e,t,n,a,i,s,l,o,c=null,u){let m=!1,d=sf(e,t,n,i,s);return{...i,_lazyPromises:d,shouldLoad:o,shouldRevalidateArgs:c,shouldCallHandler(f){return m=!0,c?typeof u=="boolean"?xa(i,{...c,defaultShouldRevalidate:u}):typeof f=="boolean"?xa(i,{...c,defaultShouldRevalidate:f}):xa(i,c):o},resolve(f){let{lazy:j,loader:g,middleware:v}=i.route,y=m||o||f&&!Ye(n.method)&&(j||g),h=v&&v.length>0&&!g&&!j;return y&&(Ye(n.method)||!h)?gv({request:n,unstable_pattern:a,match:i,lazyHandlerPromise:d==null?void 0:d.handler,lazyRoutePromise:d==null?void 0:d.route,handlerOverride:f,scopedContext:l}):Promise.resolve({type:"data",result:void 0})}}}function Mn(e,t,n,a,i,s,l,o=null){return a.map(c=>c.route.id!==i.route.id?{...c,shouldLoad:!1,shouldRevalidateArgs:o,shouldCallHandler:()=>!1,_lazyPromises:sf(e,t,n,c,s),resolve:()=>Promise.resolve({type:"data",result:void 0})}:ho(e,t,n,Ha(a),c,s,l,!0,o))}async function hv(e,t,n,a,i,s){n.some(u=>{var m;return(m=u._lazyPromises)==null?void 0:m.middleware})&&await Promise.all(n.map(u=>{var m;return(m=u._lazyPromises)==null?void 0:m.middleware}));let l={request:t,unstable_pattern:Ha(n),params:n[0].params,context:i,matches:n},c=await e({...l,fetcherKey:a,runClientMiddleware:u=>{let m=l;return nf(m,()=>u({...m,fetcherKey:a,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(n.flatMap(u=>{var m,d;return[(m=u._lazyPromises)==null?void 0:m.handler,(d=u._lazyPromises)==null?void 0:d.route]}))}catch{}return c}async function gv({request:e,unstable_pattern:t,match:n,lazyHandlerPromise:a,lazyRoutePromise:i,handlerOverride:s,scopedContext:l}){let o,c,u=Ye(e.method),m=u?"action":"loader",d=f=>{let j,g=new Promise((h,p)=>j=p);c=()=>j(),e.signal.addEventListener("abort",c);let v=h=>typeof f!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${m}" [routeId: ${n.route.id}]`)):f({request:e,unstable_pattern:t,params:n.params,context:l},...h!==void 0?[h]:[]),y=(async()=>{try{return{type:"data",result:await(s?s(p=>v(p)):v())}}catch(h){return{type:"error",result:h}}})();return Promise.race([y,g])};try{let f=u?n.route.action:n.route.loader;if(a||i)if(f){let j,[g]=await Promise.all([d(f).catch(v=>{j=v}),a,i]);if(j!==void 0)throw j;o=g}else{await a;let j=u?n.route.action:n.route.loader;if(j)[o]=await Promise.all([d(j),i]);else if(m==="action"){let g=new URL(e.url),v=g.pathname+g.search;throw yt(405,{method:e.method,pathname:v,routeId:n.route.id})}else return{type:"data",result:void 0}}else if(f)o=await d(f);else{let j=new URL(e.url),g=j.pathname+j.search;throw yt(404,{pathname:g})}}catch(f){return{type:"error",result:f}}finally{c&&e.signal.removeEventListener("abort",c)}return o}async function xv(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}async function vv(e){var a,i,s,l,o;let{result:t,type:n}=e;if(hc(t)){let c;try{c=await xv(t)}catch(u){return{type:"error",error:u}}return n==="error"?{type:"error",error:new $a(t.status,t.statusText,c),statusCode:t.status,headers:t.headers}:{type:"data",data:c,statusCode:t.status,headers:t.headers}}return n==="error"?pd(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:(a=t.init)==null?void 0:a.status,headers:(i=t.init)!=null&&i.headers?new Headers(t.init.headers):void 0}:{type:"error",error:Sv(t),statusCode:Ia(t)?t.status:void 0,headers:(s=t.init)!=null&&s.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:Ia(t)?t.status:void 0}:pd(t)?{type:"data",data:t.data,statusCode:(l=t.init)==null?void 0:l.status,headers:(o=t.init)!=null&&o.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function jv(e,t,n,a,i){let s=e.headers.get("Location");if(ie(s,"Redirects returned/thrown from loaders/actions must have a Location header"),!pc(s)){let l=a.slice(0,a.findIndex(o=>o.route.id===n)+1);s=fo(new URL(t.url),l,i,s),e.headers.set("Location",s)}return e}function ld(e,t,n,a){let i=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(pc(e)){let s=e,l=s.startsWith("//")?new URL(t.protocol+s):new URL(s);if(i.includes(l.protocol))throw new Error("Invalid redirect location");let o=Rt(l.pathname,n)!=null;if(l.origin===t.origin&&o)return l.pathname+l.search+l.hash}try{let s=a.createURL(e);if(i.includes(s.protocol))throw new Error("Invalid redirect location")}catch{}return e}function un(e,t,n,a){let i=e.createURL(lf(t)).toString(),s={signal:n};if(a&&Ye(a.formMethod)){let{formMethod:l,formEncType:o}=a;s.method=l.toUpperCase(),o==="application/json"?(s.headers=new Headers({"Content-Type":o}),s.body=JSON.stringify(a.json)):o==="text/plain"?s.body=a.text:o==="application/x-www-form-urlencoded"&&a.formData?s.body=go(a.formData):s.body=a.formData}return new Request(i,s)}function go(e){let t=new URLSearchParams;for(let[n,a]of e.entries())t.append(n,typeof a=="string"?a:a.name);return t}function od(e){let t=new FormData;for(let[n,a]of e.entries())t.append(n,a);return t}function yv(e,t,n,a=!1,i=!1){let s={},l=null,o,c=!1,u={},m=n&&mt(n[1])?n[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in t))return;let f=d.route.id,j=t[f];if(ie(!Wr(j),"Cannot handle redirect results in processLoaderData"),mt(j)){let g=j.error;if(m!==void 0&&(g=m,m=void 0),l=l||{},i)l[f]=g;else{let v=yr(e,f);l[v.route.id]==null&&(l[v.route.id]=g)}a||(s[f]=Xm),c||(c=!0,o=Ia(j.error)?j.error.status:500),j.headers&&(u[f]=j.headers)}else s[f]=j.data,j.statusCode&&j.statusCode!==200&&!c&&(o=j.statusCode),j.headers&&(u[f]=j.headers)}),m!==void 0&&n&&(l={[n[0]]:m},n[2]&&(s[n[2]]=void 0)),{loaderData:s,errors:l,statusCode:o||200,loaderHeaders:u}}function cd(e,t,n,a,i,s){let{loaderData:l,errors:o}=yv(t,n,a);return i.filter(c=>!c.matches||c.matches.some(u=>u.shouldLoad)).forEach(c=>{let{key:u,match:m,controller:d}=c;if(d&&d.signal.aborted)return;let f=s[u];if(ie(f,"Did not find corresponding fetcher result"),mt(f)){let j=yr(e.matches,m==null?void 0:m.route.id);o&&o[j.route.id]||(o={...o,[j.route.id]:f.error}),e.fetchers.delete(u)}else if(Wr(f))ie(!1,"Unhandled fetcher revalidation redirect");else{let j=er(f.data);e.fetchers.set(u,j)}}),{loaderData:l,errors:o}}function ud(e,t,n,a){let i=Object.entries(t).filter(([,s])=>s!==Xm).reduce((s,[l,o])=>(s[l]=o,s),{});for(let s of n){let l=s.route.id;if(!t.hasOwnProperty(l)&&e.hasOwnProperty(l)&&s.route.loader&&(i[l]=e[l]),a&&a.hasOwnProperty(l))break}return i}function dd(e){return e?mt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function yr(e,t){return(t?e.slice(0,e.findIndex(a=>a.route.id===t)+1):[...e]).reverse().find(a=>a.route.hasErrorBoundary===!0)||e[0]}function xi(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function yt(e,{pathname:t,routeId:n,method:a,type:i,message:s}={}){let l="Unknown Server Error",o="Unknown @remix-run/router error";return e===400?(l="Bad Request",a&&t&&n?o=`You made a ${a} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:i==="invalid-body"&&(o="Unable to encode submission body")):e===403?(l="Forbidden",o=`Route "${n}" does not match URL "${t}"`):e===404?(l="Not Found",o=`No route matches URL "${t}"`):e===405&&(l="Method Not Allowed",a&&t&&n?o=`You made a ${a.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:a&&(o=`Invalid request method "${a.toUpperCase()}"`)),new $a(e||500,l,new Error(o),!0)}function vi(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[a,i]=t[n];if(Wr(i))return{key:a,result:i}}}function lf(e){let t=typeof e=="string"?Jt(e):e;return Wt({...t,hash:""})}function bv(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Sv(e){var t,n;return new $a(((t=e.init)==null?void 0:t.status)??500,((n=e.init)==null?void 0:n.statusText)??"Internal Server Error",e.data)}function wv(e){return e!=null&&typeof e=="object"&&Object.entries(e).every(([t,n])=>typeof t=="string"&&Ev(n))}function Ev(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function Cv(e){return hc(e.result)&&Ym.has(e.result.status)}function mt(e){return e.type==="error"}function Wr(e){return(e&&e.type)==="redirect"}function pd(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function hc(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function kv(e){return Ym.has(e)}function Rv(e){return hc(e)&&kv(e.status)&&e.headers.has("Location")}function Lv(e){return av.has(e.toUpperCase())}function Ye(e){return rv.has(e.toUpperCase())}function gc(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function _i(e,t){let n=typeof t=="string"?Jt(t).search:t.search;if(e[e.length-1].route.index&&gc(n||""))return e[e.length-1];let a=Gm(e);return a[a.length-1]}function md(e){let{formMethod:t,formAction:n,formEncType:a,text:i,formData:s,json:l}=e;if(!(!t||!n||!a)){if(i!=null)return{formMethod:t,formAction:n,formEncType:a,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:t,formAction:n,formEncType:a,formData:s,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:a,formData:void 0,json:l,text:void 0}}}function pl(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Av(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ea(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Mv(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function er(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Nv(e,t){try{let n=e.sessionStorage.getItem(Zm);if(n){let a=JSON.parse(n);for(let[i,s]of Object.entries(a||{}))s&&Array.isArray(s)&&t.set(i,new Set(s||[]))}}catch{}}function Pv(e,t){if(t.size>0){let n={};for(let[a,i]of t)n[a]=[...i];try{e.sessionStorage.setItem(Zm,JSON.stringify(n))}catch(a){Oe(!1,`Failed to save applied view transitions in sessionStorage (${a}).`)}}}function fd(){let e,t,n=new Promise((a,i)=>{e=async s=>{a(s);try{await n}catch{}},t=async s=>{i(s);try{await n}catch{}}});return{promise:n,resolve:e,reject:t}}var nn=R.createContext(null);nn.displayName="DataRouter";var Va=R.createContext(null);Va.displayName="DataRouterState";var of=R.createContext(!1);function _v(){return R.useContext(of)}var xc=R.createContext({isTransitioning:!1});xc.displayName="ViewTransition";var cf=R.createContext(new Map);cf.displayName="Fetchers";var Tv=R.createContext(null);Tv.displayName="Await";var Lt=R.createContext(null);Lt.displayName="Navigation";var Ls=R.createContext(null);Ls.displayName="Location";var Qt=R.createContext({outlet:null,matches:[],isDataRoute:!1});Qt.displayName="Route";var vc=R.createContext(null);vc.displayName="RouteError";var uf="REACT_ROUTER_ERROR",Ov="REDIRECT",Dv="ROUTE_ERROR_RESPONSE";function Iv(e){if(e.startsWith(`${uf}:${Ov}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Fv(e){if(e.startsWith(`${uf}:${Dv}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new $a(t.status,t.statusText,t.data)}catch{}}function qv(e,{relative:t}={}){ie(Ga(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=R.useContext(Lt),{hash:i,pathname:s,search:l}=Wa(e,{relative:t}),o=s;return n!=="/"&&(o=s==="/"?n:It([n,s])),a.createHref({pathname:o,search:l,hash:i})}function Ga(){return R.useContext(Ls)!=null}function Kt(){return ie(Ga(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Ls).location}var df="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function pf(e){R.useContext(Lt).static||R.useLayoutEffect(e)}function zv(){let{isDataRoute:e}=R.useContext(Qt);return e?tj():Bv()}function Bv(){ie(Ga(),"useNavigate() may be used only in the context of a <Router> component.");let e=R.useContext(nn),{basename:t,navigator:n}=R.useContext(Lt),{matches:a}=R.useContext(Qt),{pathname:i}=Kt(),s=JSON.stringify(mc(a)),l=R.useRef(!1);return pf(()=>{l.current=!0}),R.useCallback((c,u={})=>{if(Oe(l.current,df),!l.current)return;if(typeof c=="number"){n.go(c);return}let m=Rs(c,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:It([t,m.pathname])),(u.replace?n.replace:n.push)(m,u.state,u)},[t,n,s,i,e])}var Uv=R.createContext(null);function $v(e){let t=R.useContext(Qt).outlet;return R.useMemo(()=>t&&R.createElement(Uv.Provider,{value:e},t),[t,e])}function Wa(e,{relative:t}={}){let{matches:n}=R.useContext(Qt),{pathname:a}=Kt(),i=JSON.stringify(mc(n));return R.useMemo(()=>Rs(e,JSON.parse(i),a,t==="path"),[e,i,a,t])}function Hv(e,t,n){ie(Ga(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=R.useContext(Lt),{matches:i}=R.useContext(Qt),s=i[i.length-1],l=s?s.params:{},o=s?s.pathname:"/",c=s?s.pathnameBase:"/",u=s&&s.route;{let y=u&&u.path||"";ff(o,!u||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let m=Kt(),d;d=m;let f=d.pathname||"/",j=f;if(c!=="/"){let y=c.replace(/^\//,"").split("/");j="/"+f.replace(/^\//,"").split("/").slice(y.length).join("/")}let g=jr(e,{pathname:j});return Oe(u||g!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),Oe(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Qv(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:It([c,a.encodeLocation?a.encodeLocation(y.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?c:It([c,a.encodeLocation?a.encodeLocation(y.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),i,n)}function Vv(){let e=ej(),t=Ia(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:a},s={padding:"2px 4px",backgroundColor:a},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:s},"ErrorBoundary")," or"," ",R.createElement("code",{style:s},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.createElement("pre",{style:i},n):null,l)}var Gv=R.createElement(Vv,null),mf=class extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=Fv(e.digest);n&&(e=n)}let t=e!==void 0?R.createElement(Qt.Provider,{value:this.props.routeContext},R.createElement(vc.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?R.createElement(Wv,{error:e},t):t}};mf.contextType=of;var ml=new WeakMap;function Wv({children:e,error:t}){let{basename:n}=R.useContext(Lt);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let a=Iv(t.digest);if(a){let i=ml.get(t);if(i)throw i;let s=Jm(a.location,n);if(Wm&&!ml.get(t))if(s.isExternal||a.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const l=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:a.replace}));throw ml.set(t,l),l}return R.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return e}function Jv({routeContext:e,match:t,children:n}){let a=R.useContext(nn);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),R.createElement(Qt.Provider,{value:e},n)}function Qv(e,t=[],n){let a=n==null?void 0:n.state;if(e==null){if(!a)return null;if(a.errors)e=a.matches;else if(t.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let i=e,s=a==null?void 0:a.errors;if(s!=null){let m=i.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);ie(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,m+1))}let l=!1,o=-1;if(n&&a){l=a.renderFallback;for(let m=0;m<i.length;m++){let d=i[m];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(o=m),d.route.id){let{loaderData:f,errors:j}=a,g=d.route.loader&&!f.hasOwnProperty(d.route.id)&&(!j||j[d.route.id]===void 0);if(d.route.lazy||g){n.isStatic&&(l=!0),o>=0?i=i.slice(0,o+1):i=[i[0]];break}}}}let c=n==null?void 0:n.onError,u=a&&c?(m,d)=>{var f,j;c(m,{location:a.location,params:((j=(f=a.matches)==null?void 0:f[0])==null?void 0:j.params)??{},unstable_pattern:Ha(a.matches),errorInfo:d})}:void 0;return i.reduceRight((m,d,f)=>{let j,g=!1,v=null,y=null;a&&(j=s&&d.route.id?s[d.route.id]:void 0,v=d.route.errorElement||Gv,l&&(o<0&&f===0?(ff("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),g=!0,y=null):o===f&&(g=!0,y=d.route.hydrateFallbackElement||null)));let h=t.concat(i.slice(0,f+1)),p=()=>{let x;return j?x=v:g?x=y:d.route.Component?x=R.createElement(d.route.Component,null):d.route.element?x=d.route.element:x=m,R.createElement(Jv,{match:d,routeContext:{outlet:m,matches:h,isDataRoute:a!=null},children:x})};return a&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?R.createElement(mf,{location:a.location,revalidation:a.revalidation,component:v,error:j,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:u}):p()},null)}function jc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kv(e){let t=R.useContext(nn);return ie(t,jc(e)),t}function Yv(e){let t=R.useContext(Va);return ie(t,jc(e)),t}function Zv(e){let t=R.useContext(Qt);return ie(t,jc(e)),t}function yc(e){let t=Zv(e),n=t.matches[t.matches.length-1];return ie(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Xv(){return yc("useRouteId")}function ej(){var a;let e=R.useContext(vc),t=Yv("useRouteError"),n=yc("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[n]}function tj(){let{router:e}=Kv("useNavigate"),t=yc("useNavigate"),n=R.useRef(!1);return pf(()=>{n.current=!0}),R.useCallback(async(i,s={})=>{Oe(n.current,df),n.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:t,...s}))},[e,t])}var hd={};function ff(e,t,n){!t&&!hd[e]&&(hd[e]=!0,Oe(!1,n))}var gd={};function xd(e,t){!e&&!gd[t]&&(gd[t]=!0,console.warn(t))}var rj="useOptimistic",vd=dh[rj],nj=()=>{};function aj(e){return vd?vd(e):[e,nj]}function ij(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&Oe(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:R.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&Oe(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:R.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&Oe(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:R.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}var sj=["HydrateFallback","hydrateFallbackElement"],lj=class{constructor(){this.status="pending",this.promise=new Promise((e,t)=>{this.resolve=n=>{this.status==="pending"&&(this.status="resolved",e(n))},this.reject=n=>{this.status==="pending"&&(this.status="rejected",t(n))}})}};function oj({router:e,flushSync:t,onError:n,unstable_useTransitions:a}){a=_v()||a;let[s,l]=R.useState(e.state),[o,c]=aj(s),[u,m]=R.useState(),[d,f]=R.useState({isTransitioning:!1}),[j,g]=R.useState(),[v,y]=R.useState(),[h,p]=R.useState(),x=R.useRef(new Map),L=R.useCallback((w,{deletedFetchers:H,newErrors:q,flushSync:ne,viewTransitionOpts:Y})=>{q&&n&&Object.values(q).forEach(Z=>{var ue;return n(Z,{location:w.location,params:((ue=w.matches[0])==null?void 0:ue.params)??{},unstable_pattern:Ha(w.matches)})}),w.fetchers.forEach((Z,ue)=>{Z.data!==void 0&&x.current.set(ue,Z.data)}),H.forEach(Z=>x.current.delete(Z)),xd(ne===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let ke=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(xd(Y==null||ke,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!Y||!ke){t&&ne?t(()=>l(w)):a===!1?l(w):R.startTransition(()=>{a===!0&&c(Z=>jd(Z,w)),l(w)});return}if(t&&ne){t(()=>{v&&(j==null||j.resolve(),v.skipTransition()),f({isTransitioning:!0,flushSync:!0,currentLocation:Y.currentLocation,nextLocation:Y.nextLocation})});let Z=e.window.document.startViewTransition(()=>{t(()=>l(w))});Z.finished.finally(()=>{t(()=>{g(void 0),y(void 0),m(void 0),f({isTransitioning:!1})})}),t(()=>y(Z));return}v?(j==null||j.resolve(),v.skipTransition(),p({state:w,currentLocation:Y.currentLocation,nextLocation:Y.nextLocation})):(m(w),f({isTransitioning:!0,flushSync:!1,currentLocation:Y.currentLocation,nextLocation:Y.nextLocation}))},[e.window,t,v,j,a,c,n]);R.useLayoutEffect(()=>e.subscribe(L),[e,L]),R.useEffect(()=>{d.isTransitioning&&!d.flushSync&&g(new lj)},[d]),R.useEffect(()=>{if(j&&u&&e.window){let w=u,H=j.promise,q=e.window.document.startViewTransition(async()=>{a===!1?l(w):R.startTransition(()=>{a===!0&&c(ne=>jd(ne,w)),l(w)}),await H});q.finished.finally(()=>{g(void 0),y(void 0),m(void 0),f({isTransitioning:!1})}),y(q)}},[u,j,e.window,a,c]),R.useEffect(()=>{j&&u&&o.location.key===u.location.key&&j.resolve()},[j,v,o.location,u]),R.useEffect(()=>{!d.isTransitioning&&h&&(m(h.state),f({isTransitioning:!0,flushSync:!1,currentLocation:h.currentLocation,nextLocation:h.nextLocation}),p(void 0))},[d.isTransitioning,h]);let M=R.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:w=>e.navigate(w),push:(w,H,q)=>e.navigate(w,{state:H,preventScrollReset:q==null?void 0:q.preventScrollReset}),replace:(w,H,q)=>e.navigate(w,{replace:!0,state:H,preventScrollReset:q==null?void 0:q.preventScrollReset})}),[e]),_=e.basename||"/",T=R.useMemo(()=>({router:e,navigator:M,static:!1,basename:_,onError:n}),[e,M,_,n]);return R.createElement(R.Fragment,null,R.createElement(nn.Provider,{value:T},R.createElement(Va.Provider,{value:o},R.createElement(cf.Provider,{value:x.current},R.createElement(xc.Provider,{value:d},R.createElement(pj,{basename:_,location:o.location,navigationType:o.historyAction,navigator:M,unstable_useTransitions:a},R.createElement(cj,{routes:e.routes,future:e.future,state:o,isStatic:!1,onError:n})))))),null)}function jd(e,t){return{...e,navigation:t.navigation.state!=="idle"?t.navigation:e.navigation,revalidation:t.revalidation!=="idle"?t.revalidation:e.revalidation,actionData:t.navigation.state!=="submitting"?t.actionData:e.actionData,fetchers:t.fetchers}}var cj=R.memo(uj);function uj({routes:e,future:t,state:n,isStatic:a,onError:i}){return Hv(e,void 0,{state:n,isStatic:a,onError:i})}function dj(e){return $v(e.context)}function pj({basename:e="/",children:t=null,location:n,navigationType:a="POP",navigator:i,static:s=!1,unstable_useTransitions:l}){ie(!Ga(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),c=R.useMemo(()=>({basename:o,navigator:i,static:s,unstable_useTransitions:l,future:{}}),[o,i,s,l]);typeof n=="string"&&(n=Jt(n));let{pathname:u="/",search:m="",hash:d="",state:f=null,key:j="default",unstable_mask:g}=n,v=R.useMemo(()=>{let y=Rt(u,o);return y==null?null:{location:{pathname:y,search:m,hash:d,state:f,key:j,unstable_mask:g},navigationType:a}},[o,u,m,d,f,j,a,g]);return Oe(v!=null,`<Router basename="${o}"> is not able to match the URL "${u}${m}${d}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:R.createElement(Lt.Provider,{value:c},R.createElement(Ls.Provider,{children:t,value:v}))}var Ti="get",Oi="application/x-www-form-urlencoded";function As(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function mj(e){return As(e)&&e.tagName.toLowerCase()==="button"}function fj(e){return As(e)&&e.tagName.toLowerCase()==="form"}function hj(e){return As(e)&&e.tagName.toLowerCase()==="input"}function gj(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xj(e,t){return e.button===0&&(!t||t==="_self")&&!gj(e)}var ji=null;function vj(){if(ji===null)try{new FormData(document.createElement("form"),0),ji=!1}catch{ji=!0}return ji}var jj=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function fl(e){return e!=null&&!jj.has(e)?(Oe(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Oi}"`),null):e}function yj(e,t){let n,a,i,s,l;if(fj(e)){let o=e.getAttribute("action");a=o?Rt(o,t):null,n=e.getAttribute("method")||Ti,i=fl(e.getAttribute("enctype"))||Oi,s=new FormData(e)}else if(mj(e)||hj(e)&&(e.type==="submit"||e.type==="image")){let o=e.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||o.getAttribute("action");if(a=c?Rt(c,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||Ti,i=fl(e.getAttribute("formenctype"))||fl(o.getAttribute("enctype"))||Oi,s=new FormData(o,e),!vj()){let{name:u,type:m,value:d}=e;if(m==="image"){let f=u?`${u}.`:"";s.append(`${f}x`,"0"),s.append(`${f}y`,"0")}else u&&s.append(u,d)}}else{if(As(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ti,a=null,i=Oi,l=e}return s&&i==="text/plain"&&(l=s,s=void 0),{action:a,method:n.toLowerCase(),encType:i,formData:s,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function bc(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bj(e,t,n,a){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${a}`:i.pathname=`${i.pathname}.${a}`:i.pathname==="/"?i.pathname=`_root.${a}`:t&&Rt(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${a}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${a}`,i}async function Sj(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function wj(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Ej(e,t,n){let a=await Promise.all(e.map(async i=>{let s=t.routes[i.route.id];if(s){let l=await Sj(s,n);return l.links?l.links():[]}return[]}));return Lj(a.flat(1).filter(wj).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function yd(e,t,n,a,i,s){let l=(c,u)=>n[u]?c.route.id!==n[u].route.id:!0,o=(c,u)=>{var m;return n[u].pathname!==c.pathname||((m=n[u].route.path)==null?void 0:m.endsWith("*"))&&n[u].params["*"]!==c.params["*"]};return s==="assets"?t.filter((c,u)=>l(c,u)||o(c,u)):s==="data"?t.filter((c,u)=>{var d;let m=a.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(l(c,u)||o(c,u))return!0;if(c.route.shouldRevalidate){let f=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function Cj(e,t,{includeHydrateFallback:n}={}){return kj(e.map(a=>{let i=t.routes[a.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function kj(e){return[...new Set(e)]}function Rj(e){let t={},n=Object.keys(e).sort();for(let a of n)t[a]=e[a];return t}function Lj(e,t){let n=new Set;return new Set(t),e.reduce((a,i)=>{let s=JSON.stringify(Rj(i));return n.has(s)||(n.add(s),a.push({key:s,link:i})),a},[])}function hf(){let e=R.useContext(nn);return bc(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Aj(){let e=R.useContext(Va);return bc(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Sc=R.createContext(void 0);Sc.displayName="FrameworkContext";function gf(){let e=R.useContext(Sc);return bc(e,"You must render this element inside a <HydratedRouter> element"),e}function Mj(e,t){let n=R.useContext(Sc),[a,i]=R.useState(!1),[s,l]=R.useState(!1),{onFocus:o,onBlur:c,onMouseEnter:u,onMouseLeave:m,onTouchStart:d}=t,f=R.useRef(null);R.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let v=h=>{h.forEach(p=>{l(p.isIntersecting)})},y=new IntersectionObserver(v,{threshold:.5});return f.current&&y.observe(f.current),()=>{y.disconnect()}}},[e]),R.useEffect(()=>{if(a){let v=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(v)}}},[a]);let j=()=>{i(!0)},g=()=>{i(!1),l(!1)};return n?e!=="intent"?[s,f,{}]:[s,f,{onFocus:ta(o,j),onBlur:ta(c,g),onMouseEnter:ta(u,j),onMouseLeave:ta(m,g),onTouchStart:ta(d,j)}]:[!1,f,{}]}function ta(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Nj({page:e,...t}){let{router:n}=hf(),a=R.useMemo(()=>jr(n.routes,e,n.basename),[n.routes,e,n.basename]);return a?R.createElement(_j,{page:e,matches:a,...t}):null}function Pj(e){let{manifest:t,routeModules:n}=gf(),[a,i]=R.useState([]);return R.useEffect(()=>{let s=!1;return Ej(e,t,n).then(l=>{s||i(l)}),()=>{s=!0}},[e,t,n]),a}function _j({page:e,matches:t,...n}){let a=Kt(),{future:i,manifest:s,routeModules:l}=gf(),{basename:o}=hf(),{loaderData:c,matches:u}=Aj(),m=R.useMemo(()=>yd(e,t,u,s,a,"data"),[e,t,u,s,a]),d=R.useMemo(()=>yd(e,t,u,s,a,"assets"),[e,t,u,s,a]),f=R.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let v=new Set,y=!1;if(t.forEach(p=>{var L;let x=s.routes[p.route.id];!x||!x.hasLoader||(!m.some(M=>M.route.id===p.route.id)&&p.route.id in c&&((L=l[p.route.id])!=null&&L.shouldRevalidate)||x.hasClientLoader?y=!0:v.add(p.route.id))}),v.size===0)return[];let h=bj(e,o,i.unstable_trailingSlashAwareDataRequests,"data");return y&&v.size>0&&h.searchParams.set("_routes",t.filter(p=>v.has(p.route.id)).map(p=>p.route.id).join(",")),[h.pathname+h.search]},[o,i.unstable_trailingSlashAwareDataRequests,c,a,s,m,t,e,l]),j=R.useMemo(()=>Cj(d,s),[d,s]),g=Pj(d);return R.createElement(R.Fragment,null,f.map(v=>R.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),j.map(v=>R.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),g.map(({key:v,link:y})=>R.createElement("link",{key:v,nonce:n.nonce,...y,crossOrigin:y.crossOrigin??n.crossOrigin})))}function Tj(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Oj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Oj&&(window.__reactRouterVersion="7.13.1")}catch{}function Dj(e,t){return ov({basename:t==null?void 0:t.basename,getContext:t==null?void 0:t.getContext,future:t==null?void 0:t.future,history:Ex({window:t==null?void 0:t.window}),hydrationData:Ij(),routes:e,mapRouteProperties:ij,hydrationRouteProperties:sj,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window,unstable_instrumentations:t==null?void 0:t.unstable_instrumentations}).initialize()}function Ij(){let e=window==null?void 0:window.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:Fj(e.errors)}),e}function Fj(e){if(!e)return null;let t=Object.entries(e),n={};for(let[a,i]of t)if(i&&i.__type==="RouteErrorResponse")n[a]=new $a(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let l=new s(i.message);l.stack="",n[a]=l}catch{}}if(n[a]==null){let s=new Error(i.message);s.stack="",n[a]=s}}else n[a]=i;return n}var xf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ms=R.forwardRef(function({onClick:t,discover:n="render",prefetch:a="none",relative:i,reloadDocument:s,replace:l,unstable_mask:o,state:c,target:u,to:m,preventScrollReset:d,viewTransition:f,unstable_defaultShouldRevalidate:j,...g},v){let{basename:y,navigator:h,unstable_useTransitions:p}=R.useContext(Lt),x=typeof m=="string"&&xf.test(m),L=Jm(m,y);m=L.to;let M=qv(m,{relative:i}),_=Kt(),T=null;if(o){let ue=Rs(o,[],_.unstable_mask?_.unstable_mask.pathname:"/",!0);y!=="/"&&(ue.pathname=ue.pathname==="/"?y:It([y,ue.pathname])),T=h.createHref(ue)}let[w,H,q]=Mj(a,g),ne=Bj(m,{replace:l,unstable_mask:o,state:c,target:u,preventScrollReset:d,relative:i,viewTransition:f,unstable_defaultShouldRevalidate:j,unstable_useTransitions:p});function Y(ue){t&&t(ue),ue.defaultPrevented||ne(ue)}let ke=!(L.isExternal||s),Z=R.createElement("a",{...g,...q,href:(ke?T:void 0)||L.absoluteURL||M,onClick:ke?Y:t,ref:Tj(v,H),target:u,"data-discover":!x&&n==="render"?"true":void 0});return w&&!x?R.createElement(R.Fragment,null,Z,R.createElement(Nj,{page:M})):Z});Ms.displayName="Link";var vf=R.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:a="",end:i=!1,style:s,to:l,viewTransition:o,children:c,...u},m){let d=Wa(l,{relative:u.relative}),f=Kt(),j=R.useContext(Va),{navigator:g,basename:v}=R.useContext(Lt),y=j!=null&&Gj(d)&&o===!0,h=g.encodeLocation?g.encodeLocation(d).pathname:d.pathname,p=f.pathname,x=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;n||(p=p.toLowerCase(),x=x?x.toLowerCase():null,h=h.toLowerCase()),x&&v&&(x=Rt(x,v)||x);const L=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let M=p===h||!i&&p.startsWith(h)&&p.charAt(L)==="/",_=x!=null&&(x===h||!i&&x.startsWith(h)&&x.charAt(h.length)==="/"),T={isActive:M,isPending:_,isTransitioning:y},w=M?t:void 0,H;typeof a=="function"?H=a(T):H=[a,M?"active":null,_?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let q=typeof s=="function"?s(T):s;return R.createElement(Ms,{...u,"aria-current":w,className:H,ref:m,style:q,to:l,viewTransition:o},typeof c=="function"?c(T):c)});vf.displayName="NavLink";var qj=R.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:i,state:s,method:l=Ti,action:o,onSubmit:c,relative:u,preventScrollReset:m,viewTransition:d,unstable_defaultShouldRevalidate:f,...j},g)=>{let{unstable_useTransitions:v}=R.useContext(Lt),y=Hj(),h=Vj(o,{relative:u}),p=l.toLowerCase()==="get"?"get":"post",x=typeof o=="string"&&xf.test(o),L=M=>{if(c&&c(M),M.defaultPrevented)return;M.preventDefault();let _=M.nativeEvent.submitter,T=(_==null?void 0:_.getAttribute("formmethod"))||l,w=()=>y(_||M.currentTarget,{fetcherKey:t,method:T,navigate:n,replace:i,state:s,relative:u,preventScrollReset:m,viewTransition:d,unstable_defaultShouldRevalidate:f});v&&n!==!1?R.startTransition(()=>w()):w()};return R.createElement("form",{ref:g,method:p,action:h,onSubmit:a?c:L,...j,"data-discover":!x&&e==="render"?"true":void 0})});qj.displayName="Form";function zj(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jf(e){let t=R.useContext(nn);return ie(t,zj(e)),t}function Bj(e,{target:t,replace:n,unstable_mask:a,state:i,preventScrollReset:s,relative:l,viewTransition:o,unstable_defaultShouldRevalidate:c,unstable_useTransitions:u}={}){let m=zv(),d=Kt(),f=Wa(e,{relative:l});return R.useCallback(j=>{if(xj(j,t)){j.preventDefault();let g=n!==void 0?n:Wt(d)===Wt(f),v=()=>m(e,{replace:g,unstable_mask:a,state:i,preventScrollReset:s,relative:l,viewTransition:o,unstable_defaultShouldRevalidate:c});u?R.startTransition(()=>v()):v()}},[d,m,f,n,a,i,t,e,s,l,o,c,u])}var Uj=0,$j=()=>`__${String(++Uj)}__`;function Hj(){let{router:e}=jf("useSubmit"),{basename:t}=R.useContext(Lt),n=Xv(),a=e.fetch,i=e.navigate;return R.useCallback(async(s,l={})=>{let{action:o,method:c,encType:u,formData:m,body:d}=yj(s,t);if(l.navigate===!1){let f=l.fetcherKey||$j();await a(f,n,l.action||o,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:m,body:d,formMethod:l.method||c,formEncType:l.encType||u,flushSync:l.flushSync})}else await i(l.action||o,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:m,body:d,formMethod:l.method||c,formEncType:l.encType||u,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[a,i,t,n])}function Vj(e,{relative:t}={}){let{basename:n}=R.useContext(Lt),a=R.useContext(Qt);ie(a,"useFormAction must be used inside a RouteContext");let[i]=a.matches.slice(-1),s={...Wa(e||".",{relative:t})},l=Kt();if(e==null){s.search=l.search;let o=new URLSearchParams(s.search),c=o.getAll("index");if(c.some(m=>m==="")){o.delete("index"),c.filter(d=>d).forEach(d=>o.append("index",d));let m=o.toString();s.search=m?`?${m}`:""}}return(!e||e===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:It([n,s.pathname])),Wt(s)}function Gj(e,{relative:t}={}){let n=R.useContext(xc);ie(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=jf("useViewTransitionState"),i=Wa(e,{relative:t});if(!n.isTransitioning)return!1;let s=Rt(n.currentLocation.pathname,a)||n.currentLocation.pathname,l=Rt(n.nextLocation.pathname,a)||n.nextLocation.pathname;return os(i.pathname,l)!=null||os(i.pathname,s)!=null}function Wj(e){return R.createElement(oj,{flushSync:qm.flushSync,...e})}const Jj="_header_18s0b_1",Qj="_left_18s0b_27",Kj="_collapseBtn_18s0b_39",Yj="_logo_18s0b_79",Zj="_logoIcon_18s0b_95",Xj="_logoText_18s0b_121",ey="_logoSubtext_18s0b_133",ty="_hamburger_18s0b_145",mr={header:Jj,left:Qj,collapseBtn:Kj,logo:Yj,logoIcon:Zj,logoText:Xj,logoSubtext:ey,hamburger:ty};function ry({onToggleSidebar:e,onCollapseSidebar:t,collapsed:n}){return r.jsxs("header",{className:mr.header,children:[r.jsxs("div",{className:mr.left,children:[r.jsx("button",{className:mr.collapseBtn,onClick:t,"aria-label":n?"Expandir menú":"Plegar menú",title:n?"Expandir menú":"Plegar menú",children:r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:n?r.jsx("path",{d:"M6 3L12 9L6 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}):r.jsx("path",{d:"M12 3L6 9L12 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),r.jsxs(Ms,{to:"/",className:mr.logo,children:[r.jsx("div",{className:mr.logoIcon,children:"J"}),r.jsxs("div",{children:[r.jsx("div",{className:mr.logoText,children:"Programacio Java"}),r.jsx("div",{className:mr.logoSubtext,children:"DAM - La Salle Tarragona"})]})]})]}),r.jsx("button",{className:mr.hamburger,onClick:e,"aria-label":"Obrir menu",children:r.jsx("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:r.jsx("path",{d:"M3 6H19M3 11H19M3 16H19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]})}const hl=[{id:"basics",title:"Basics de Java",items:[{path:"/basics/tipus-de-dades",label:"Tipus de Dades"},{path:"/basics/operadors",label:"Operadors"},{path:"/basics/sintaxi",label:"Sintaxi de Java"},{path:"/basics/condicionals",label:"Condicionals"},{path:"/basics/switch",label:"Switch"},{path:"/basics/bucles",label:"Bucles"},{path:"/basics/modificadors-acces",label:"Modificadors d'Acces"}]},{id:"arrays",title:"Arrays",items:[{path:"/arrays/arrays-1d",label:"Arrays 1D"},{path:"/arrays/arrays-2d",label:"Arrays 2D (Matrius)"}]},{id:"funcions",title:"Funcions",items:[{path:"/funcions/sense-parametres",label:"Funcions sense paràmetres"},{path:"/funcions/amb-parametres",label:"Funcions amb paràmetres"},{path:"/funcions/tipus-de-funcions",label:"Tipus de funcions"},{path:"/funcions/recursives",label:"Funcions recursives"},{path:"/funcions/cridar-des-de-main",label:"Cridar des del Main"},{path:"/funcions/resum",label:"Resum comparatiu"}]},{id:"classes",title:"Classes i Objectes",items:[{path:"/classes/introduccio",label:"Introducció a la POO"},{path:"/classes/classe-vs-objecte",label:"Classe vs Objecte"},{path:"/classes/modificadors",label:"Modificadors i Encapsulació"},{path:"/classes/constructors-this",label:"Constructors i THIS"},{path:"/classes/herencia",label:"Herència"},{path:"/classes/exemple-biblioteca",label:"Exemple: Biblioteca"}]},{id:"modularitat",title:"Modularitat i Packages",items:[{path:"/modularitat/introduccio",label:"Introducció a la Modularitat"},{path:"/modularitat/monolitic-vs-modular",label:"Monolític vs Modular"},{path:"/modularitat/packages",label:"Packages: Organització"},{path:"/modularitat/exemple-calculadora",label:"Exemple: Calculadora"}]},{id:"string-math",title:"String i Math",items:[{path:"/string-math/classe-string",label:"Classe String"},{path:"/string-math/classe-math",label:"Classe Math"},{path:"/string-math/random-vs-math-random",label:"Random vs Math.random()"}]},{id:"java-modern",title:"Java Modern",items:[{path:"/java-modern/for-each",label:"For-each"},{path:"/java-modern/operador-ternari",label:"Operador ternari"},{path:"/java-modern/var-i-altres",label:"var i altres novetats"}]},{id:"analisi-disseny",title:"Anàlisi i Disseny",items:[{path:"/analisi-disseny/diagrames-classes",label:"Diagrames de Classes"},{path:"/analisi-disseny/diagrames-sequencia",label:"Diagrames de Seqüència"},{path:"/analisi-disseny/diagrames-flux",label:"Diagrames de Flux"},{path:"/analisi-disseny/casos-dus",label:"Casos d'Ús"},{path:"/analisi-disseny/projecte-real",label:"Anatomia d'un Projecte Real"},{path:"/analisi-disseny/introduccio-mvc",label:"Introducció a MVC"}]}],ny="_overlay_acghx_1",ay="_sidebar_acghx_9",iy="_collapsed_acghx_39",sy="_sectionTitle_acghx_47",ly="_arrow_acghx_49",oy="_items_acghx_51",cy="_sectionButton_acghx_65",uy="_sectionIcon_acghx_75",dy="_section_acghx_47",py="_arrowOpen_acghx_173",my="_itemsOpen_acghx_193",fy="_link_acghx_201",hy="_activeLink_acghx_233",gy="_overlayVisible_acghx_271",xy="_sidebarOpen_acghx_341",tt={overlay:ny,sidebar:ay,collapsed:iy,sectionTitle:sy,arrow:ly,items:oy,sectionButton:cy,sectionIcon:uy,section:dy,arrowOpen:py,itemsOpen:my,link:fy,activeLink:hy,overlayVisible:gy,sidebarOpen:xy},vy={basics:r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),r.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),arrays:r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),r.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),r.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),r.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]}),funcions:r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"12",cy:"12",r:"3"}),r.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),classes:r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),r.jsx("path",{d:"M16 3L12 7L8 3"})]}),modularitat:r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),r.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),r.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),"string-math":r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("polyline",{points:"4 7 4 4 20 4 20 7"}),r.jsx("line",{x1:"9",y1:"20",x2:"15",y2:"20"}),r.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20"})]}),"java-modern":r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),"analisi-disseny":r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"3",y:"3",width:"6",height:"6",rx:"1"}),r.jsx("rect",{x:"15",y:"3",width:"6",height:"6",rx:"1"}),r.jsx("rect",{x:"9",y:"15",width:"6",height:"6",rx:"1"}),r.jsx("line",{x1:"6",y1:"9",x2:"6",y2:"12"}),r.jsx("line",{x1:"6",y1:"12",x2:"12",y2:"12"}),r.jsx("line",{x1:"12",y1:"12",x2:"12",y2:"15"}),r.jsx("line",{x1:"18",y1:"9",x2:"18",y2:"12"}),r.jsx("line",{x1:"18",y1:"12",x2:"12",y2:"12"})]})};function jy({isOpen:e,collapsed:t,onClose:n,onExpand:a}){const i=Kt(),[s,l]=R.useState(()=>{const u=hl.find(m=>m.items.some(d=>i.pathname===d.path));return u?[u.id]:[hl[0].id]}),o=u=>{l(m=>m.includes(u)?m.filter(d=>d!==u):[...m,u])},c=[tt.sidebar,e&&tt.sidebarOpen,t&&tt.collapsed].filter(Boolean).join(" ");return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:`${tt.overlay} ${e?tt.overlayVisible:""}`,onClick:n}),r.jsx("nav",{className:c,onMouseEnter:t?a:void 0,children:hl.map(u=>{const m=s.includes(u.id),d=vy[u.id];return r.jsxs("div",{className:tt.section,children:[r.jsxs("button",{className:tt.sectionButton,onClick:()=>o(u.id),title:t?u.title:void 0,children:[r.jsx("span",{className:tt.sectionIcon,children:d}),r.jsx("span",{className:tt.sectionTitle,children:u.title}),r.jsx("span",{className:`${tt.arrow} ${m?tt.arrowOpen:""}`,children:r.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",children:r.jsx("path",{d:"M3 1L7 5L3 9"})})})]}),r.jsx("div",{className:`${tt.items} ${m?tt.itemsOpen:""}`,children:u.items.map(f=>r.jsx(vf,{to:f.path,className:({isActive:j})=>`${tt.link} ${j?tt.activeLink:""}`,onClick:n,children:f.label},f.path))})]},u.id)})})]})}function yy(){return r.jsx("footer",{style:{textAlign:"center",padding:"20px",color:"#718096",fontSize:"0.85em",borderTop:"1px solid #e2e8f0",marginTop:"40px"},children:"Recurs didàctic creat per a l'assignatura de Programació - La Salle Tarragona"})}function by(){const{pathname:e}=Kt();R.useEffect(()=>{window.scrollTo(0,0)},[e])}const Sy="_layout_e2a8v_1",wy="_body_e2a8v_13",Ey="_content_e2a8v_23",Cy="_contentInner_e2a8v_37",yi={layout:Sy,body:wy,content:Ey,contentInner:Cy};function ky(){const[e,t]=R.useState(!1),[n,a]=R.useState(!1);return by(),r.jsxs("div",{className:yi.layout,children:[r.jsx(ry,{onToggleSidebar:()=>t(!e),onCollapseSidebar:()=>a(!n),collapsed:n}),r.jsxs("div",{className:yi.body,children:[r.jsx(jy,{isOpen:e,collapsed:n,onClose:()=>t(!1),onExpand:()=>a(!1)}),r.jsx("main",{className:yi.content,children:r.jsxs("div",{className:yi.contentInner,children:[r.jsx(dj,{}),r.jsx(yy,{})]})})]})]})}const Ry="_hero_ym8fg_1",Ly="_heroTitle_ym8fg_13",Ay="_heroAccent_ym8fg_29",My="_heroSubtitle_ym8fg_41",Ny="_sectionsGrid_ym8fg_53",Py="_sectionCard_ym8fg_65",_y="_cardIcon_ym8fg_101",Ty="_cardTitle_ym8fg_125",Oy="_cardDescription_ym8fg_139",Dy="_cardTopics_ym8fg_151",Iy="_topic_ym8fg_165",Nt={hero:Ry,heroTitle:Ly,heroAccent:Ay,heroSubtitle:My,sectionsGrid:Ny,sectionCard:Py,cardIcon:_y,cardTitle:Ty,cardDescription:Oy,cardTopics:Dy,topic:Iy},Fy={basics:r.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),r.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),arrays:r.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),r.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),r.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),r.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]}),funcions:r.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"12",cy:"12",r:"3"}),r.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),classes:r.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),r.jsx("path",{d:"M16 3L12 7L8 3"})]}),modularitat:r.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),r.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),r.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),"string-math":r.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("polyline",{points:"4 7 4 4 20 4 20 7"}),r.jsx("line",{x1:"9",y1:"20",x2:"15",y2:"20"}),r.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20"})]}),"java-modern":r.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),"analisi-disseny":r.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"3",y:"3",width:"6",height:"6",rx:"1"}),r.jsx("rect",{x:"15",y:"3",width:"6",height:"6",rx:"1"}),r.jsx("rect",{x:"9",y:"15",width:"6",height:"6",rx:"1"}),r.jsx("line",{x1:"6",y1:"9",x2:"6",y2:"12"}),r.jsx("line",{x1:"6",y1:"12",x2:"12",y2:"12"}),r.jsx("line",{x1:"12",y1:"12",x2:"12",y2:"15"}),r.jsx("line",{x1:"18",y1:"9",x2:"18",y2:"12"}),r.jsx("line",{x1:"18",y1:"12",x2:"12",y2:"12"})]})},qy=[{id:"basics",title:"Basics de Java",description:"Fonaments del llenguatge: tipus de dades, operadors, condicionals, bucles i sintaxi bàsica.",path:"/basics/tipus-de-dades",topics:["Tipus de dades","Operadors","if/else","Bucles","Switch"]},{id:"arrays",title:"Arrays",description:"Arrays unidimensionals i bidimensionals amb exemples interactius.",path:"/arrays/arrays-1d",topics:["Arrays 1D","Matrius 2D"]},{id:"funcions",title:"Funcions",description:"Funcions amb i sense paràmetres, tipus, recursivitat i com cridar-les.",path:"/funcions/sense-parametres",topics:["Sense paràmetres","Amb paràmetres","Recursives","Tipus"]},{id:"classes",title:"Classes i Objectes",description:"POO: classes, objectes, encapsulació, constructors, herència.",path:"/classes/introduccio",topics:["Classes","Objectes","Constructors","Herència"]},{id:"modularitat",title:"Modularitat i Packages",description:"Organització del codi en múltiples classes i packages. Aplica tot el que s'ha après.",path:"/modularitat/introduccio",topics:["Monolític vs Modular","Packages","Imports"]},{id:"string-math",title:"String i Math",description:"Classes String i Math: tots els mètodes útils, Random vs Math.random().",path:"/string-math/classe-string",topics:["String","Math","Random"]},{id:"java-modern",title:"Java Modern",description:"Sintaxi moderna: for-each, operador ternari, var i altres novetats.",path:"/java-modern/for-each",topics:["for-each","Ternari","var"]},{id:"analisi-disseny",title:"Anàlisi i Disseny",description:"Diagrames UML, anàlisi de projectes reals i introducció a MVC.",path:"/analisi-disseny/diagrames-classes",topics:["UML","Projecte Real","MVC"]}];function zy(){return r.jsxs("div",{children:[r.jsxs("div",{className:Nt.hero,children:[r.jsxs("h1",{className:Nt.heroTitle,children:["Programació ",r.jsx("span",{className:Nt.heroAccent,children:"Java"})]}),r.jsx("p",{className:Nt.heroSubtitle,children:"Recurs visual interactiu per a l'aprenentatge de programació - DAM"})]}),r.jsx("div",{className:Nt.sectionsGrid,children:qy.map(e=>r.jsxs(Ms,{to:e.path,className:Nt.sectionCard,children:[r.jsx("div",{className:Nt.cardIcon,children:Fy[e.id]}),r.jsx("h2",{className:Nt.cardTitle,children:e.title}),r.jsx("p",{className:Nt.cardDescription,children:e.description}),r.jsx("div",{className:Nt.cardTopics,children:e.topics.map(t=>r.jsx("span",{className:Nt.topic,children:t},t))})]},e.path))})]})}const By="_header_1pa55_1",Uy="_title_1pa55_9",$y="_accentLine_1pa55_29",gl={header:By,title:Uy,accentLine:$y};function C({title:e}){return r.jsxs("div",{className:gl.header,children:[r.jsx("h2",{className:gl.title,children:e}),r.jsx("div",{className:gl.accentLine})]})}function yf(e){var t,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=yf(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function bf(){for(var e,t,n=0,a="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=yf(e))&&(a&&(a+=" "),a+=t);return a}var Hy=Object.create,Ns=Object.defineProperty,Vy=Object.defineProperties,Gy=Object.getOwnPropertyDescriptor,Wy=Object.getOwnPropertyDescriptors,Sf=Object.getOwnPropertyNames,cs=Object.getOwnPropertySymbols,Jy=Object.getPrototypeOf,wc=Object.prototype.hasOwnProperty,wf=Object.prototype.propertyIsEnumerable,bd=(e,t,n)=>t in e?Ns(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Gt=(e,t)=>{for(var n in t||(t={}))wc.call(t,n)&&bd(e,n,t[n]);if(cs)for(var n of cs(t))wf.call(t,n)&&bd(e,n,t[n]);return e},Ps=(e,t)=>Vy(e,Wy(t)),Ef=(e,t)=>{var n={};for(var a in e)wc.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&cs)for(var a of cs(e))t.indexOf(a)<0&&wf.call(e,a)&&(n[a]=e[a]);return n},Qy=(e,t)=>function(){return t||(0,e[Sf(e)[0]])((t={exports:{}}).exports,t),t.exports},Ky=(e,t)=>{for(var n in t)Ns(e,n,{get:t[n],enumerable:!0})},Yy=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Sf(t))!wc.call(e,i)&&i!==n&&Ns(e,i,{get:()=>t[i],enumerable:!(a=Gy(t,i))||a.enumerable});return e},Zy=(e,t,n)=>(n=e!=null?Hy(Jy(e)):{},Yy(!e||!e.__esModule?Ns(n,"default",{value:e,enumerable:!0}):n,e)),Xy=Qy({"../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(e,t){var n=function(){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,s={},l={util:{encode:function g(v){return v instanceof o?new o(v.type,g(v.content),v.alias):Array.isArray(v)?v.map(g):v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++i}),g.__id},clone:function g(v,y){y=y||{};var h,p;switch(l.util.type(v)){case"Object":if(p=l.util.objId(v),y[p])return y[p];h={},y[p]=h;for(var x in v)v.hasOwnProperty(x)&&(h[x]=g(v[x],y));return h;case"Array":return p=l.util.objId(v),y[p]?y[p]:(h=[],y[p]=h,v.forEach(function(L,M){h[M]=g(L,y)}),h);default:return v}},getLanguage:function(g){for(;g;){var v=a.exec(g.className);if(v)return v[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,v){g.className=g.className.replace(RegExp(a,"gi"),""),g.classList.add("language-"+v)},isActive:function(g,v,y){for(var h="no-"+v;g;){var p=g.classList;if(p.contains(v))return!0;if(p.contains(h))return!1;g=g.parentElement}return!!y}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(g,v){var y=l.util.clone(l.languages[g]);for(var h in v)y[h]=v[h];return y},insertBefore:function(g,v,y,h){h=h||l.languages;var p=h[g],x={};for(var L in p)if(p.hasOwnProperty(L)){if(L==v)for(var M in y)y.hasOwnProperty(M)&&(x[M]=y[M]);y.hasOwnProperty(L)||(x[L]=p[L])}var _=h[g];return h[g]=x,l.languages.DFS(l.languages,function(T,w){w===_&&T!=g&&(this[T]=x)}),x},DFS:function g(v,y,h,p){p=p||{};var x=l.util.objId;for(var L in v)if(v.hasOwnProperty(L)){y.call(v,L,v[L],h||L);var M=v[L],_=l.util.type(M);_==="Object"&&!p[x(M)]?(p[x(M)]=!0,g(M,y,null,p)):_==="Array"&&!p[x(M)]&&(p[x(M)]=!0,g(M,y,L,p))}}},plugins:{},highlight:function(g,v,y){var h={code:g,grammar:v,language:y};if(l.hooks.run("before-tokenize",h),!h.grammar)throw new Error('The language "'+h.language+'" has no grammar.');return h.tokens=l.tokenize(h.code,h.grammar),l.hooks.run("after-tokenize",h),o.stringify(l.util.encode(h.tokens),h.language)},tokenize:function(g,v){var y=v.rest;if(y){for(var h in y)v[h]=y[h];delete v.rest}var p=new m;return d(p,p.head,g),u(g,p,v,p.head,0),j(p)},hooks:{all:{},add:function(g,v){var y=l.hooks.all;y[g]=y[g]||[],y[g].push(v)},run:function(g,v){var y=l.hooks.all[g];if(!(!y||!y.length))for(var h=0,p;p=y[h++];)p(v)}},Token:o};function o(g,v,y,h){this.type=g,this.content=v,this.alias=y,this.length=(h||"").length|0}o.stringify=function g(v,y){if(typeof v=="string")return v;if(Array.isArray(v)){var h="";return v.forEach(function(_){h+=g(_,y)}),h}var p={type:v.type,content:g(v.content,y),tag:"span",classes:["token",v.type],attributes:{},language:y},x=v.alias;x&&(Array.isArray(x)?Array.prototype.push.apply(p.classes,x):p.classes.push(x)),l.hooks.run("wrap",p);var L="";for(var M in p.attributes)L+=" "+M+'="'+(p.attributes[M]||"").replace(/"/g,"&quot;")+'"';return"<"+p.tag+' class="'+p.classes.join(" ")+'"'+L+">"+p.content+"</"+p.tag+">"};function c(g,v,y,h){g.lastIndex=v;var p=g.exec(y);if(p&&h&&p[1]){var x=p[1].length;p.index+=x,p[0]=p[0].slice(x)}return p}function u(g,v,y,h,p,x){for(var L in y)if(!(!y.hasOwnProperty(L)||!y[L])){var M=y[L];M=Array.isArray(M)?M:[M];for(var _=0;_<M.length;++_){if(x&&x.cause==L+","+_)return;var T=M[_],w=T.inside,H=!!T.lookbehind,q=!!T.greedy,ne=T.alias;if(q&&!T.pattern.global){var Y=T.pattern.toString().match(/[imsuy]*$/)[0];T.pattern=RegExp(T.pattern.source,Y+"g")}for(var ke=T.pattern||T,Z=h.next,ue=p;Z!==v.tail&&!(x&&ue>=x.reach);ue+=Z.value.length,Z=Z.next){var le=Z.value;if(v.length>g.length)return;if(!(le instanceof o)){var me=1,I;if(q){if(I=c(ke,ue,g,H),!I||I.index>=g.length)break;var oe=I.index,z=I.index+I[0].length,U=ue;for(U+=Z.value.length;oe>=U;)Z=Z.next,U+=Z.value.length;if(U-=Z.value.length,ue=U,Z.value instanceof o)continue;for(var te=Z;te!==v.tail&&(U<z||typeof te.value=="string");te=te.next)me++,U+=te.value.length;me--,le=g.slice(ue,U),I.index-=ue}else if(I=c(ke,0,le,H),!I)continue;var oe=I.index,ve=I[0],Ee=le.slice(0,oe),Ie=le.slice(oe+ve.length),ye=ue+le.length;x&&ye>x.reach&&(x.reach=ye);var $e=Z.prev;Ee&&($e=d(v,$e,Ee),ue+=Ee.length),f(v,$e,me);var an=new o(L,w?l.tokenize(ve,w):ve,ne,ve);if(Z=d(v,$e,an),Ie&&d(v,Z,Ie),me>1){var At={cause:L+","+_,reach:ye};u(g,v,y,Z.prev,ue,At),x&&At.reach>x.reach&&(x.reach=At.reach)}}}}}}function m(){var g={value:null,prev:null,next:null},v={value:null,prev:g,next:null};g.next=v,this.head=g,this.tail=v,this.length=0}function d(g,v,y){var h=v.next,p={value:y,prev:v,next:h};return v.next=p,h.prev=p,g.length++,p}function f(g,v,y){for(var h=v.next,p=0;p<y&&h!==g.tail;p++)h=h.next;v.next=h,h.prev=v,g.length-=p}function j(g){for(var v=[],y=g.head.next;y!==g.tail;)v.push(y.value),y=y.next;return v}return l}();t.exports=n,n.default=n}}),N=Zy(Xy());N.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},N.languages.markup.tag.inside["attr-value"].inside.entity=N.languages.markup.entity,N.languages.markup.doctype.inside["internal-subset"].inside=N.languages.markup,N.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(N.languages.markup.tag,"addInlined",{value:function(e,a){var n={},n=(n["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:N.languages[a]},n.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}}),a=(n["language-"+a]={pattern:/[\s\S]+/,inside:N.languages[a]},{});a[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:n},N.languages.insertBefore("markup","cdata",a)}}),Object.defineProperty(N.languages.markup.tag,"addAttribute",{value:function(e,t){N.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:N.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),N.languages.html=N.languages.markup,N.languages.mathml=N.languages.markup,N.languages.svg=N.languages.markup,N.languages.xml=N.languages.extend("markup",{}),N.languages.ssml=N.languages.xml,N.languages.atom=N.languages.xml,N.languages.rss=N.languages.xml,function(e){var t={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},n=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,a="(?:[^\\\\-]|"+n.source+")",a=RegExp(a+"-"+a),i={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};e.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:a,inside:{escape:n,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":t,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:n}},"special-escape":t,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":i}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:n,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":i}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}}(N),N.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},N.languages.javascript=N.languages.extend("clike",{"class-name":[N.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),N.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,N.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:N.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:N.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:N.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:N.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:N.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),N.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:N.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),N.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),N.languages.markup&&(N.languages.markup.tag.addInlined("script","javascript"),N.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),N.languages.js=N.languages.javascript,N.languages.actionscript=N.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),N.languages.actionscript["class-name"].alias="function",delete N.languages.actionscript.parameter,delete N.languages.actionscript["literal-property"],N.languages.markup&&N.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:N.languages.markup}}),function(e){var t=/#(?!\{).+/,n={pattern:/#\{[^}]+\}/,alias:"variable"};e.languages.coffeescript=e.languages.extend("javascript",{comment:t,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:n}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),e.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:t,interpolation:n}}}),e.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:e.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:n}}]}),e.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete e.languages.coffeescript["template-string"],e.languages.coffee=e.languages.coffeescript}(N),function(e){var t=e.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(t,"addSupport",{value:function(n,a){(n=typeof n=="string"?[n]:n).forEach(function(i){var s=function(d){d.inside||(d.inside={}),d.inside.rest=a},l="doc-comment";if(o=e.languages[i]){var o,c=o[l];if((c=c||(o=e.languages.insertBefore(i,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[l])instanceof RegExp&&(c=o[l]={pattern:c}),Array.isArray(c))for(var u=0,m=c.length;u<m;u++)c[u]instanceof RegExp&&(c[u]={pattern:c[u]}),s(c[u]);else s(c)}})}}),t.addSupport(["java","javascript","php"],t)}(N),function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,t=(e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css,e.languages.markup);t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}(N),function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,t=(e.languages.css.selector={pattern:e.languages.css.selector.pattern,lookbehind:!0,inside:t={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+t.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[t,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},e.languages.css.atrule.inside["selector-function-argument"].inside=t,e.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}}),{pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0}),n={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};e.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:t,number:n,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:t,number:n})}(N),function(e){var t=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+n.source+"(?:[ 	]+"+t.source+")?|"+t.source+"(?:[ 	]+"+n.source+")?)",i=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),s=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function l(o,c){c=(c||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return o});return RegExp(u,c)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+i+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:l(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:l(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:l(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:l(s),lookbehind:!0,greedy:!0},number:{pattern:l(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:n,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml}(N),function(e){var t=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function n(u){return u=u.replace(/<inner>/g,function(){return t}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+u+")")}var a=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,i=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return a}),s=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,l=(e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+i+s+"(?:"+i+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+i+s+")(?:"+i+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(a),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+i+")"+s+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+i+"$"),inside:{"table-header":{pattern:RegExp(a),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:n(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(u){["url","bold","italic","strike","code-snippet"].forEach(function(m){u!==m&&(e.languages.markdown[u].inside.content.inside[m]=e.languages.markdown[m])})}),e.hooks.add("after-tokenize",function(u){u.language!=="markdown"&&u.language!=="md"||function m(d){if(d&&typeof d!="string")for(var f=0,j=d.length;f<j;f++){var g,v=d[f];v.type!=="code"?m(v.content):(g=v.content[1],v=v.content[3],g&&v&&g.type==="code-language"&&v.type==="code-block"&&typeof g.content=="string"&&(g=g.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),g="language-"+(g=(/[a-z][\w-]*/i.exec(g)||[""])[0].toLowerCase()),v.alias?typeof v.alias=="string"?v.alias=[v.alias,g]:v.alias.push(g):v.alias=[g]))}}(u.tokens)}),e.hooks.add("wrap",function(u){if(u.type==="code-block"){for(var m="",d=0,f=u.classes.length;d<f;d++){var j=u.classes[d],j=/language-(.+)/.exec(j);if(j){m=j[1];break}}var g,v=e.languages[m];v?u.content=e.highlight(function(y){return y=y.replace(l,""),y=y.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(h,p){var x;return(p=p.toLowerCase())[0]==="#"?(x=p[1]==="x"?parseInt(p.slice(2),16):Number(p.slice(1)),c(x)):o[p]||h})}(u.content),v,m):m&&m!=="none"&&e.plugins.autoloader&&(g="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random()),u.attributes.id=g,e.plugins.autoloader.loadLanguages(m,function(){var y=document.getElementById(g);y&&(y.innerHTML=e.highlight(y.textContent,e.languages[m],m))}))}}),RegExp(e.languages.markup.tag.pattern.source,"gi")),o={amp:"&",lt:"<",gt:">",quot:'"'},c=String.fromCodePoint||String.fromCharCode;e.languages.md=e.languages.markdown}(N),N.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:N.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},N.hooks.add("after-tokenize",function(e){if(e.language==="graphql")for(var t=e.tokens.filter(function(g){return typeof g!="string"&&g.type!=="comment"&&g.type!=="scalar"}),n=0;n<t.length;){var a=t[n++];if(a.type==="keyword"&&a.content==="mutation"){var i=[];if(d(["definition-mutation","punctuation"])&&m(1).content==="("){n+=2;var s=f(/^\($/,/^\)$/);if(s===-1)continue;for(;n<s;n++){var l=m(0);l.type==="variable"&&(j(l,"variable-input"),i.push(l.content))}n=s+1}if(d(["punctuation","property-query"])&&m(0).content==="{"&&(n++,j(m(0),"property-mutation"),0<i.length)){var o=f(/^\{$/,/^\}$/);if(o!==-1)for(var c=n;c<o;c++){var u=t[c];u.type==="variable"&&0<=i.indexOf(u.content)&&j(u,"variable-input")}}}}function m(g){return t[n+g]}function d(g,v){v=v||0;for(var y=0;y<g.length;y++){var h=m(y+v);if(!h||h.type!==g[y])return}return 1}function f(g,v){for(var y=1,h=n;h<t.length;h++){var p=t[h],x=p.content;if(p.type==="punctuation"&&typeof x=="string"){if(g.test(x))y++;else if(v.test(x)&&--y===0)return h}}return-1}function j(g,v){var y=g.alias;y?Array.isArray(y)||(g.alias=y=[y]):g.alias=y=[],y.push(v)}}),N.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(e){var t=e.languages.javascript["template-string"],n=t.pattern.source,a=t.inside.interpolation,i=a.inside["interpolation-punctuation"],s=a.pattern.source;function l(d,f){if(e.languages[d])return{pattern:RegExp("((?:"+f+")\\s*)"+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:d}}}}function o(d,f,j){return d={code:d,grammar:f,language:j},e.hooks.run("before-tokenize",d),d.tokens=e.tokenize(d.code,d.grammar),e.hooks.run("after-tokenize",d),d.tokens}function c(d,f,j){var y=e.tokenize(d,{interpolation:{pattern:RegExp(s),lookbehind:!0}}),g=0,v={},y=o(y.map(function(p){if(typeof p=="string")return p;for(var x,L,p=p.content;d.indexOf((L=g++,x="___"+j.toUpperCase()+"_"+L+"___"))!==-1;);return v[x]=p,x}).join(""),f,j),h=Object.keys(v);return g=0,function p(x){for(var L=0;L<x.length;L++){if(g>=h.length)return;var M,_,T,w,H,q,ne,Y=x[L];typeof Y=="string"||typeof Y.content=="string"?(M=h[g],(ne=(q=typeof Y=="string"?Y:Y.content).indexOf(M))!==-1&&(++g,_=q.substring(0,ne),H=v[M],T=void 0,(w={})["interpolation-punctuation"]=i,(w=e.tokenize(H,w)).length===3&&((T=[1,1]).push.apply(T,o(w[1],e.languages.javascript,"javascript")),w.splice.apply(w,T)),T=new e.Token("interpolation",w,a.alias,H),w=q.substring(ne+M.length),H=[],_&&H.push(_),H.push(T),w&&(p(q=[w]),H.push.apply(H,q)),typeof Y=="string"?(x.splice.apply(x,[L,1].concat(H)),L+=H.length-1):Y.content=H)):(ne=Y.content,Array.isArray(ne)?p(ne):p([ne]))}}(y),new e.Token(j,y,"language-"+j,d)}e.languages.javascript["template-string"]=[l("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),l("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),l("svg",/\bsvg/.source),l("markdown",/\b(?:markdown|md)/.source),l("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),l("sql",/\bsql/.source),t].filter(Boolean);var u={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function m(d){return typeof d=="string"?d:Array.isArray(d)?d.map(m).join(""):m(d.content)}e.hooks.add("after-tokenize",function(d){d.language in u&&function f(j){for(var g=0,v=j.length;g<v;g++){var y,h,p,x=j[g];typeof x!="string"&&(y=x.content,Array.isArray(y)?x.type==="template-string"?(x=y[1],y.length===3&&typeof x!="string"&&x.type==="embedded-code"&&(h=m(x),x=x.alias,x=Array.isArray(x)?x[0]:x,p=e.languages[x])&&(y[1]=c(h,p,x))):f(y):typeof y!="string"&&f([y]))}}(d.tokens)})}(N),function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript}(N),function(e){var t=e.languages.javascript,n=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,a="(@(?:arg|argument|param|property)\\s+(?:"+n+"\\s+)?)";e.languages.jsdoc=e.languages.extend("javadoclike",{parameter:{pattern:RegExp(a+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),e.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(a+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:t,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return n})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+n),lookbehind:!0,inside:{string:t.string,number:t.number,boolean:t.boolean,keyword:e.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:t,alias:"language-javascript"}}}}),e.languages.javadoclike.addSupport("javascript",e.languages.jsdoc)}(N),function(e){e.languages.flow=e.languages.extend("javascript",{}),e.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:"class-name"}]}),e.languages.flow["function-variable"].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete e.languages.flow.parameter,e.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(e.languages.flow.keyword)||(e.languages.flow.keyword=[e.languages.flow.keyword]),e.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})}(N),N.languages.n4js=N.languages.extend("javascript",{keyword:/\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),N.languages.insertBefore("n4js","constant",{annotation:{pattern:/@+\w+/,alias:"operator"}}),N.languages.n4jsd=N.languages.n4js,function(e){function t(l,o){return RegExp(l.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),o)}e.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+e.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),e.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+e.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),e.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),e.languages.insertBefore("javascript","keyword",{imports:{pattern:t(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:e.languages.javascript},exports:{pattern:t(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:e.languages.javascript}}),e.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),e.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),e.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:t(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var n=["function","function-variable","method","method-variable","property-access"],a=0;a<n.length;a++){var s=n[a],i=e.languages.javascript[s],s=(i=e.util.type(i)==="RegExp"?e.languages.javascript[s]={pattern:i}:i).inside||{};(i.inside=s)["maybe-class-name"]=/^[A-Z][\s\S]*/}}(N),function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function s(c,u){return c=c.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return i}),RegExp(c,u)}i=s(i).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=s(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:s(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:s(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);function l(c){for(var u=[],m=0;m<c.length;m++){var d=c[m],f=!1;typeof d!="string"&&(d.type==="tag"&&d.content[0]&&d.content[0].type==="tag"?d.content[0].content[0].content==="</"?0<u.length&&u[u.length-1].tagName===o(d.content[0].content[1])&&u.pop():d.content[d.content.length-1].content!=="/>"&&u.push({tagName:o(d.content[0].content[1]),openedBraces:0}):0<u.length&&d.type==="punctuation"&&d.content==="{"?u[u.length-1].openedBraces++:0<u.length&&0<u[u.length-1].openedBraces&&d.type==="punctuation"&&d.content==="}"?u[u.length-1].openedBraces--:f=!0),(f||typeof d=="string")&&0<u.length&&u[u.length-1].openedBraces===0&&(f=o(d),m<c.length-1&&(typeof c[m+1]=="string"||c[m+1].type==="plain-text")&&(f+=o(c[m+1]),c.splice(m+1,1)),0<m&&(typeof c[m-1]=="string"||c[m-1].type==="plain-text")&&(f=o(c[m-1])+f,c.splice(m-1,1),m--),c[m]=new e.Token("plain-text",f,null,f)),d.content&&typeof d.content!="string"&&l(d.content)}}var o=function(c){return c?typeof c=="string"?c:typeof c.content=="string"?c.content:c.content.map(o).join(""):""};e.hooks.add("after-tokenize",function(c){c.language!=="jsx"&&c.language!=="tsx"||l(c.tokens)})}(N),function(e){var t=e.util.clone(e.languages.typescript),t=(e.languages.tsx=e.languages.extend("jsx",t),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"],e.languages.tsx.tag);t.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+t.pattern.source+")",t.pattern.flags),t.lookbehind=!0}(N),N.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(/(^|[^"#])/.source+"(?:"+/"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source+"|"+/"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source+")"+/(?!["#])/.source),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(/(^|[^"#])(#+)/.source+"(?:"+/"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source+"|"+/"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source+")\\2"),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp(/#/.source+"(?:"+/(?:elseif|if)\b/.source+"(?:[ 	]*"+/(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source+")+|"+/(?:else|endif)\b/.source+")"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},N.languages.swift["string-literal"].forEach(function(e){e.inside.interpolation.inside=N.languages.swift}),function(e){e.languages.kotlin=e.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete e.languages.kotlin["class-name"];var t={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:e.languages.kotlin}};e.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:t},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:t},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete e.languages.kotlin.string,e.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),e.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),e.languages.kt=e.languages.kotlin,e.languages.kts=e.languages.kotlin}(N),N.languages.c=N.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),N.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),N.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},N.languages.c.string],char:N.languages.c.char,comment:N.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:N.languages.c}}}}),N.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete N.languages.c.boolean,N.languages.objectivec=N.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete N.languages.objectivec["class-name"],N.languages.objc=N.languages.objectivec,N.languages.reason=N.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),N.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete N.languages.reason.function,function(e){for(var t=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,n=0;n<2;n++)t=t.replace(/<self>/g,function(){return t});t=t.replace(/<self>/g,function(){return/[^\s\S]/.source}),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+t),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string}(N),N.languages.go=N.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),N.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete N.languages.go["class-name"],function(e){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return t.source});e.languages.cpp=e.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return n})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),e.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e.languages.cpp}}}}),e.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),e.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend("cpp",{})}}),e.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp["base-clause"])}(N),N.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},N.languages.python["string-interpolation"].inside.interpolation.inside.rest=N.languages.python,N.languages.py=N.languages.python,N.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},N.languages.webmanifest=N.languages.json;var eb={};Ky(eb,{dracula:()=>rb,duotoneDark:()=>ab,duotoneLight:()=>sb,github:()=>ob,gruvboxMaterialDark:()=>Ib,gruvboxMaterialLight:()=>qb,jettwaveDark:()=>Ab,jettwaveLight:()=>Nb,nightOwl:()=>ub,nightOwlLight:()=>pb,oceanicNext:()=>fb,okaidia:()=>gb,oneDark:()=>_b,oneLight:()=>Ob,palenight:()=>vb,shadesOfPurple:()=>yb,synthwave84:()=>Sb,ultramin:()=>Eb,vsDark:()=>Cf,vsLight:()=>Rb});var tb={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},rb=tb,nb={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},ab=nb,ib={plain:{backgroundColor:"#faf8f5",color:"#728fcb"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#b6ad9a"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#063289"}},{types:["property","function"],style:{color:"#b29762"}},{types:["tag-id","selector","atrule-id"],style:{color:"#2d2006"}},{types:["attr-name"],style:{color:"#896724"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule"],style:{color:"#728fcb"}},{types:["placeholder","variable"],style:{color:"#93abdc"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#896724"}}]},sb=ib,lb={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},ob=lb,cb={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]},ub=cb,db={plain:{color:"#403f53",backgroundColor:"#FBFBFB"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(72, 118, 214)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(152, 159, 177)",fontStyle:"italic"}},{types:["string","builtin","char","constant","url"],style:{color:"rgb(72, 118, 214)"}},{types:["variable"],style:{color:"rgb(201, 103, 101)"}},{types:["number"],style:{color:"rgb(170, 9, 130)"}},{types:["punctuation"],style:{color:"rgb(153, 76, 195)"}},{types:["function","selector","doctype"],style:{color:"rgb(153, 76, 195)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(17, 17, 17)"}},{types:["tag"],style:{color:"rgb(153, 76, 195)"}},{types:["operator","property","keyword","namespace"],style:{color:"rgb(12, 150, 155)"}},{types:["boolean"],style:{color:"rgb(188, 84, 84)"}}]},pb=db,dt={char:"#D8DEE9",comment:"#999999",keyword:"#c5a5c5",primitive:"#5a9bcf",string:"#8dc891",variable:"#d7deea",boolean:"#ff8b50",tag:"#fc929e",function:"#79b6f2",className:"#FAC863"},mb={plain:{backgroundColor:"#282c34",color:"#ffffff"},styles:[{types:["attr-name"],style:{color:dt.keyword}},{types:["attr-value"],style:{color:dt.string}},{types:["comment","block-comment","prolog","doctype","cdata","shebang"],style:{color:dt.comment}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:dt.primitive}},{types:["boolean"],style:{color:dt.boolean}},{types:["tag"],style:{color:dt.tag}},{types:["string"],style:{color:dt.string}},{types:["punctuation"],style:{color:dt.string}},{types:["selector","char","builtin","inserted"],style:{color:dt.char}},{types:["function"],style:{color:dt.function}},{types:["operator","entity","url","variable"],style:{color:dt.variable}},{types:["keyword"],style:{color:dt.keyword}},{types:["atrule","class-name"],style:{color:dt.className}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}}]},fb=mb,hb={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"#f92672",fontStyle:"italic"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"#8292a2",fontStyle:"italic"}},{types:["string","url"],style:{color:"#a6e22e"}},{types:["variable"],style:{color:"#f8f8f2"}},{types:["number"],style:{color:"#ae81ff"}},{types:["builtin","char","constant","function","class-name"],style:{color:"#e6db74"}},{types:["punctuation"],style:{color:"#f8f8f2"}},{types:["selector","doctype"],style:{color:"#a6e22e",fontStyle:"italic"}},{types:["tag","operator","keyword"],style:{color:"#66d9ef"}},{types:["boolean"],style:{color:"#ae81ff"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)",opacity:.7}},{types:["tag","property"],style:{color:"#f92672"}},{types:["attr-name"],style:{color:"#a6e22e !important"}},{types:["doctype"],style:{color:"#8292a2"}},{types:["rule"],style:{color:"#e6db74"}}]},gb=hb,xb={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},vb=xb,jb={plain:{color:"#9EFEFF",backgroundColor:"#2D2A55"},styles:[{types:["changed"],style:{color:"rgb(255, 238, 128)"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)"}},{types:["comment"],style:{color:"rgb(179, 98, 255)",fontStyle:"italic"}},{types:["punctuation"],style:{color:"rgb(255, 255, 255)"}},{types:["constant"],style:{color:"rgb(255, 98, 140)"}},{types:["string","url"],style:{color:"rgb(165, 255, 144)"}},{types:["variable"],style:{color:"rgb(255, 238, 128)"}},{types:["number","boolean"],style:{color:"rgb(255, 98, 140)"}},{types:["attr-name"],style:{color:"rgb(255, 180, 84)"}},{types:["keyword","operator","property","namespace","tag","selector","doctype"],style:{color:"rgb(255, 157, 0)"}},{types:["builtin","char","constant","function","class-name"],style:{color:"rgb(250, 208, 0)"}}]},yb=jb,bb={plain:{backgroundColor:"linear-gradient(to bottom, #2a2139 75%, #34294f)",backgroundImage:"#34294f",color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#495495",fontStyle:"italic"}},{types:["punctuation"],style:{color:"#ccc"}},{types:["tag","attr-name","namespace","number","unit","hexcode","deleted"],style:{color:"#e2777a"}},{types:["property","selector"],style:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"}},{types:["function-name"],style:{color:"#6196cc"}},{types:["boolean","selector-id","function"],style:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"}},{types:["class-name","maybe-class-name","builtin"],style:{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"}},{types:["constant","symbol"],style:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"}},{types:["important","atrule","keyword","selector-class"],style:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"}},{types:["string","char","attr-value","regex","variable"],style:{color:"#f87c32"}},{types:["parameter"],style:{fontStyle:"italic"}},{types:["entity","url"],style:{color:"#67cdcc"}},{types:["operator"],style:{color:"ffffffee"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["inserted"],style:{color:"green"}}]},Sb=bb,wb={plain:{color:"#282a2e",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(197, 200, 198)"}},{types:["string","number","builtin","variable"],style:{color:"rgb(150, 152, 150)"}},{types:["class-name","function","tag","attr-name"],style:{color:"rgb(40, 42, 46)"}}]},Eb=wb,Cb={plain:{color:"#9CDCFE",backgroundColor:"#1E1E1E"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"rgb(86, 156, 214)"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"rgb(206, 145, 120)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(212, 212, 212)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(220, 220, 170)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}}]},Cf=Cb,kb={plain:{color:"#000000",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(0, 128, 0)"}},{types:["builtin"],style:{color:"rgb(0, 112, 193)"}},{types:["number","variable","inserted"],style:{color:"rgb(9, 134, 88)"}},{types:["operator"],style:{color:"rgb(0, 0, 0)"}},{types:["constant","char"],style:{color:"rgb(129, 31, 63)"}},{types:["tag"],style:{color:"rgb(128, 0, 0)"}},{types:["attr-name"],style:{color:"rgb(255, 0, 0)"}},{types:["deleted","string"],style:{color:"rgb(163, 21, 21)"}},{types:["changed","punctuation"],style:{color:"rgb(4, 81, 165)"}},{types:["function","keyword"],style:{color:"rgb(0, 0, 255)"}},{types:["class-name"],style:{color:"rgb(38, 127, 153)"}}]},Rb=kb,Lb={plain:{color:"#f8fafc",backgroundColor:"#011627"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#569CD6"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#f8fafc"}},{types:["attr-name","variable"],style:{color:"#9CDCFE"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#cbd5e1"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#D4D4D4"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#7dd3fc"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},Ab=Lb,Mb={plain:{color:"#0f172a",backgroundColor:"#f1f5f9"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#0c4a6e"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#0f172a"}},{types:["attr-name","variable"],style:{color:"#0c4a6e"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#64748b"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#475569"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#0e7490"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},Nb=Mb,Pb={plain:{backgroundColor:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(220, 10%, 40%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(220, 14%, 71%)"}},{types:["attr-name","class-name","maybe-class-name","boolean","constant","number","atrule"],style:{color:"hsl(29, 54%, 61%)"}},{types:["keyword"],style:{color:"hsl(286, 60%, 67%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(355, 65%, 65%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value"],style:{color:"hsl(95, 38%, 62%)"}},{types:["variable","operator","function"],style:{color:"hsl(207, 82%, 66%)"}},{types:["url"],style:{color:"hsl(187, 47%, 55%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(220, 14%, 71%)"}}]},_b=Pb,Tb={plain:{backgroundColor:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(230, 4%, 64%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(230, 8%, 24%)"}},{types:["attr-name","class-name","boolean","constant","number","atrule"],style:{color:"hsl(35, 99%, 36%)"}},{types:["keyword"],style:{color:"hsl(301, 63%, 40%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(5, 74%, 59%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value","punctuation"],style:{color:"hsl(119, 34%, 47%)"}},{types:["variable","operator","function"],style:{color:"hsl(221, 87%, 60%)"}},{types:["url"],style:{color:"hsl(198, 99%, 37%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(230, 8%, 24%)"}}]},Ob=Tb,Db={plain:{color:"#ebdbb2",backgroundColor:"#292828"},styles:[{types:["imports","class-name","maybe-class-name","constant","doctype","builtin","function"],style:{color:"#d8a657"}},{types:["property-access"],style:{color:"#7daea3"}},{types:["tag"],style:{color:"#e78a4e"}},{types:["attr-name","char","url","regex"],style:{color:"#a9b665"}},{types:["attr-value","string"],style:{color:"#89b482"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#ea6962"}},{types:["entity","number","symbol"],style:{color:"#d3869b"}}]},Ib=Db,Fb={plain:{color:"#654735",backgroundColor:"#f9f5d7"},styles:[{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#af2528"}},{types:["imports","class-name","maybe-class-name","constant","doctype","builtin"],style:{color:"#b4730e"}},{types:["string","attr-value"],style:{color:"#477a5b"}},{types:["property-access"],style:{color:"#266b79"}},{types:["function","attr-name","char","url"],style:{color:"#72761e"}},{types:["tag"],style:{color:"#b94c07"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["entity","number","symbol"],style:{color:"#924f79"}}]},qb=Fb,zb=e=>R.useCallback(t=>{var n=t,{className:a,style:i,line:s}=n,l=Ef(n,["className","style","line"]);const o=Ps(Gt({},l),{className:bf("token-line",a)});return typeof e=="object"&&"plain"in e&&(o.style=e.plain),typeof i=="object"&&(o.style=Gt(Gt({},o.style||{}),i)),o},[e]),Bb=e=>{const t=R.useCallback(({types:n,empty:a})=>{if(e!=null){{if(n.length===1&&n[0]==="plain")return a!=null?{display:"inline-block"}:void 0;if(n.length===1&&a!=null)return e[n[0]]}return Object.assign(a!=null?{display:"inline-block"}:{},...n.map(i=>e[i]))}},[e]);return R.useCallback(n=>{var a=n,{token:i,className:s,style:l}=a,o=Ef(a,["token","className","style"]);const c=Ps(Gt({},o),{className:bf("token",...i.types,s),children:i.content,style:t(i)});return l!=null&&(c.style=Gt(Gt({},c.style||{}),l)),c},[t])},Ub=/\r\n|\r|\n/,Sd=e=>{e.length===0?e.push({types:["plain"],content:`
`,empty:!0}):e.length===1&&e[0].content===""&&(e[0].content=`
`,e[0].empty=!0)},wd=(e,t)=>{const n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},$b=e=>{const t=[[]],n=[e],a=[0],i=[e.length];let s=0,l=0,o=[];const c=[o];for(;l>-1;){for(;(s=a[l]++)<i[l];){let u,m=t[l];const f=n[l][s];if(typeof f=="string"?(m=l>0?m:["plain"],u=f):(m=wd(m,f.type),f.alias&&(m=wd(m,f.alias)),u=f.content),typeof u!="string"){l++,t.push(m),n.push(u),a.push(0),i.push(u.length);continue}const j=u.split(Ub),g=j.length;o.push({types:m,content:j[0]});for(let v=1;v<g;v++)Sd(o),c.push(o=[]),o.push({types:m,content:j[v]})}l--,t.pop(),n.pop(),a.pop(),i.pop()}return Sd(o),c},Ed=$b,Hb=({prism:e,code:t,grammar:n,language:a})=>R.useMemo(()=>{if(n==null)return Ed([t]);const i={code:t,grammar:n,language:a,tokens:[]};return e.hooks.run("before-tokenize",i),i.tokens=e.tokenize(t,n),e.hooks.run("after-tokenize",i),Ed(i.tokens)},[t,n,a,e]),Vb=(e,t)=>{const{plain:n}=e,a=e.styles.reduce((i,s)=>{const{languages:l,style:o}=s;return l&&!l.includes(t)||s.types.forEach(c=>{const u=Gt(Gt({},i[c]),o);i[c]=u}),i},{});return a.root=n,a.plain=Ps(Gt({},n),{backgroundColor:void 0}),a},Gb=Vb,Wb=({children:e,language:t,code:n,theme:a,prism:i})=>{const s=t.toLowerCase(),l=Gb(a,s),o=zb(l),c=Bb(l),u=i.languages[s],m=Hb({prism:i,language:s,code:n,grammar:u});return e({tokens:m,className:`prism-code language-${s}`,style:l!=null?l.root:{},getLineProps:o,getTokenProps:c})},Jb=e=>R.createElement(Wb,Ps(Gt({},e),{prism:e.prism||N,theme:e.theme||Cf,code:e.code,language:e.language}));/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/const Qb="_wrapper_axajp_1",Kb="_pre_axajp_17",Yb="_line_axajp_35",Zb="_lineNumber_axajp_43",Xb="_lineContent_axajp_61",e0="_label_axajp_69",cn={wrapper:Qb,pre:Kb,line:Yb,lineNumber:Zb,lineContent:Xb,label:e0},t0={plain:{color:"#e8eef5",backgroundColor:"#1e2837"},styles:[{types:["keyword","builtin","tag","boolean"],style:{color:"#ffd700",fontWeight:"bold"}},{types:["function","method"],style:{color:"#90cdf4"}},{types:["string","char"],style:{color:"#68d391"}},{types:["number"],style:{color:"#fc8181"}},{types:["comment"],style:{color:"#a0aec0",fontStyle:"italic"}},{types:["class-name"],style:{color:"#e5c07b"}},{types:["operator"],style:{color:"#e8eef5"}},{types:["punctuation"],style:{color:"#cbd5e0"}},{types:["annotation"],style:{color:"#ffd700"}}]};function E({code:e,language:t="java",showLineNumbers:n=!1,label:a}){return r.jsxs("div",{className:cn.wrapper,children:[a&&r.jsx("div",{className:cn.label,children:a}),r.jsx(Jb,{theme:t0,code:e.trim(),language:t,children:({style:i,tokens:s,getLineProps:l,getTokenProps:o})=>r.jsx("pre",{className:cn.pre,style:i,children:s.map((c,u)=>r.jsxs("div",{...l({line:c}),className:cn.line,children:[n&&r.jsx("span",{className:cn.lineNumber,children:u+1}),r.jsx("span",{className:cn.lineContent,children:c.map((m,d)=>r.jsx("span",{...o({token:m})},d))})]},u))})})]})}const r0="_box_ih0qt_1",n0="_title_ih0qt_17",a0="_info_ih0qt_31",i0="_warning_ih0qt_49",s0="_success_ih0qt_67",l0="_error_ih0qt_85",o0="_explanation_ih0qt_103",xl={box:r0,title:n0,info:a0,warning:i0,success:s0,error:l0,explanation:o0};function S({variant:e="info",title:t,children:n}){return r.jsxs("div",{className:`${xl.box} ${xl[e]}`,children:[t&&r.jsx("strong",{className:xl.title,children:t}),n]})}const c0="_table_1ewkr_1",u0="_groupHeader_1ewkr_79",Cd={table:c0,groupHeader:u0};function re({headers:e,rows:t}){return r.jsxs("table",{className:Cd.table,children:[r.jsx("thead",{children:r.jsx("tr",{children:e.map((n,a)=>r.jsx("th",{children:n},a))})}),r.jsx("tbody",{children:t.map((n,a)=>n.group?r.jsx("tr",{className:Cd.groupHeader,children:r.jsx("td",{colSpan:e.length,children:n.group})},a):r.jsx("tr",{children:n.cells.map((i,s)=>r.jsx("td",{children:i},s))},a))})]})}function d0(){return r.jsxs("div",{children:[r.jsx(C,{title:"Tipus de Dades"}),r.jsx(S,{variant:"info",title:"Fonaments",children:r.jsx("p",{children:"Els tipus de dades són la base, determinen com s'emmagatzemen i manipulen els valors. Java és un llenguatge fortament tipat que distingeix entre tipus primitius (dades simples) i tipus de referència (objectes complexos), com Strings, Arrays... Veurem només els que hem après fins ara."})}),r.jsx(re,{headers:["Nom","Paraula reservada","Sintaxi"],rows:[{group:"Primitius"},{cells:["Enter","int (32 bits)","0"]},{cells:["Flotant","float (32 bits)","3.14"]},{cells:["Flotant (double)","double (64 bits)","3.14"]},{cells:["Caràcter","char","'A'"]},{cells:["Booleà","boolean","true/false"]},{group:"Objectes"},{cells:["Cadena de text","String",'"Hola"']},{cells:["Array","tipus[]","{1, 2, 3}"]}]}),r.jsx(S,{variant:"warning",title:"Compte amb utilitzar char o String per números",children:r.jsx("p",{children:"Tot i que es permet, si el nostre objectiu és calcular, és millor utilitzar un tipus de dada dedicat als números. Si bé és cert que es poden convertir i així aconseguir els càlculs, no és una bona pràctica."})})]})}const p0="_grid_zd7lr_1",m0="_card_zd7lr_15",f0="_cardTitle_zd7lr_37",h0="_blue_zd7lr_53",g0="_good_zd7lr_81",x0="_bad_zd7lr_101",Di={grid:p0,card:m0,cardTitle:f0,blue:h0,good:g0,bad:x0};function G({title:e,variant:t="blue",children:n}){return r.jsxs("div",{className:`${Di.card} ${Di[t]}`,children:[r.jsx("h3",{className:Di.cardTitle,children:e}),n]})}function fe({children:e}){return r.jsx("div",{className:Di.grid,children:e})}const v0="_grid_dh0in_1",j0="_card_dh0in_15",y0="_cardTitle_dh0in_41",b0="_blue_dh0in_55",S0="_yellow_dh0in_63",w0="_green_dh0in_71",E0="_pink_dh0in_79",C0="_gold_dh0in_87",Ii={grid:v0,card:j0,cardTitle:y0,blue:b0,yellow:S0,green:w0,pink:E0,gold:C0};function P({title:e,variant:t="blue",children:n}){return r.jsxs("div",{className:`${Ii.card} ${Ii[t]}`,children:[r.jsx("h4",{className:Ii.cardTitle,children:e}),n]})}function ge({children:e}){return r.jsx("div",{className:Ii.grid,children:e})}function k0(){return r.jsxs("div",{children:[r.jsx(C,{title:"Operadors"}),r.jsx(S,{variant:"info",children:r.jsx("p",{children:"Els operadors són símbols que permeten realitzar càlculs i comparacions en Java. Es divideixen en diverses categories: aritmètics (suma, resta), de comparació (major, menor, igual), lògics (&&, ||, !), d'assignació (=, +=). N'hi ha més però per ara això és el principal."})}),r.jsx(re,{headers:["Nom","Representació","Sintaxi"],rows:[{group:"Aritmètics"},{cells:["Suma","+","a + b"]},{cells:["Resta","-","a - b"]},{cells:["Multiplicació","*","a * b"]},{cells:["Divisió","/","a / b"]},{cells:["Mòdul (residu)","%","a % b"]},{cells:["Increment","++","a++ / ++a"]},{cells:["Decrement","--","a-- / --a"]},{group:"Comparació"},{cells:["Igual a","==","a == b"]},{cells:["Distint de","!=","a != b"]},{cells:["Major que",">","a > b"]},{cells:["Menor que","<","a < b"]},{cells:["Major o igual que",">=","a >= b"]},{cells:["Menor o igual que","<=","a <= b"]},{group:"Lògics"},{cells:["AND","&&","a && b"]},{cells:["OR","||","a || b"]},{cells:["NOT","!","!a"]},{group:"Assignació"},{cells:["Assignació","=","x = 5"]},{cells:["A. amb suma","+=","x += 3"]},{cells:["A. amb resta","-=","x -= 3"]},{cells:["A. amb multiplicació","*=","x *= 3"]},{cells:["A. amb divisió","/=","x /= 3"]}]}),r.jsx(C,{title:"Molt Important"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["L'operador ",r.jsx("strong",{children:"="})," serveix per assignar un valor a una variable, mentre que"," ",r.jsx("strong",{children:"=="})," s'usa per comparar si dos valors són iguals."]})}),r.jsxs(fe,{children:[r.jsxs(G,{title:"Operador =",variant:"blue",children:[r.jsxs("p",{children:["Serveix per ",r.jsx("strong",{children:"assignar"})," un valor a una variable."]}),r.jsx(E,{code:"int x = 5;"})]}),r.jsxs(G,{title:"Operador ==",variant:"blue",children:[r.jsxs("p",{children:["S'usa per ",r.jsx("strong",{children:"comparar"})," si dos valors són iguals."]}),r.jsx(E,{code:"if (x == 5)"})]})]}),r.jsx(S,{variant:"info",children:r.jsxs("p",{children:["En el cas de tipus primitius (int, double, boolean, char, etc.), ",r.jsx("strong",{children:"=="})," compara directament el valor."]})}),r.jsxs(S,{variant:"warning",title:"Strings i objectes",children:[r.jsxs("p",{children:["Si es tracta de String (o altres objectes), en Java no s'ha d'usar == per comparar contingut, sinó ",r.jsx("strong",{children:"equals()"})," perquè:"]}),r.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px"},children:[r.jsx("li",{children:"== compara si les dues referències apunten al mateix objecte en memòria, no si el text és el mateix."}),r.jsx("li",{children:"equals() compara el contingut dels Strings (caràcter per caràcter)."})]})]}),r.jsx(C,{title:"Operadors Lògics"}),r.jsx(S,{variant:"info",children:r.jsx("p",{children:"Tenint això en ment, anem a explicar i donar exemples:"})}),r.jsx(E,{label:"Variables d'exemple",code:`boolean a = true;
boolean b = true;
int c = 2;
int d = 2;`}),r.jsxs(ge,{children:[r.jsxs(P,{title:"AND (&&)",variant:"blue",children:[r.jsxs("p",{children:["Retorna TRUE únicament quan ",r.jsx("strong",{children:"AMBDUES"})," expressions/valors són TRUE"]}),r.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px",listStyle:"none"},children:[r.jsx("li",{children:"(a && b) → com ambdues són true, el resultat és true."}),r.jsx("li",{children:"(a && b) && (c == d) → com ambdues expressions són true, aleshores (true && true) → true."}),r.jsx("li",{children:"(a && b) && (c > d) → com l'expressió de la dreta és false, aleshores (true && false) → false."})]})]}),r.jsxs(P,{title:"OR (||)",variant:"yellow",children:[r.jsxs("p",{children:["Al contrari que el AND, retorna TRUE si ",r.jsx("strong",{children:"AL MENYS UNA"})," expressió té valor TRUE"]}),r.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px",listStyle:"none"},children:[r.jsx("li",{children:"(a || b) → com almenys una és true, el resultat és true."}),r.jsx("li",{children:"(a || false) → com a és true, el resultat és true."}),r.jsx("li",{children:"(false || false) → com cap és true, el resultat és false."}),r.jsx("li",{children:"(c == d || c > d) → (true || false) → true."})]})]}),r.jsx(P,{title:"NOT (!)",variant:"pink",children:r.jsx("p",{children:"Inverteix el valor d'una expressió booleana."})})]})]})}function R0(){return r.jsxs("div",{children:[r.jsx(C,{title:"Sintaxi de Java"}),r.jsx(S,{variant:"info",children:r.jsx("p",{children:"La sintaxi de Java és estructurada i orientada a objectes, heretada en gran part de C++. A continuació estan les estructures fonamentals del llenguatge: condicionals i bucles i, juntament amb la seva respectiva sintaxi per escriure codi clar i organitzat."})}),r.jsx(re,{headers:["Nom","Paraula reservada","Sintaxi"],rows:[{cells:["Variable","tipus","tipus variable = valor"]},{cells:["Constant","final","final tipus constant = valor"]},{cells:["Condicional if","if","if (condició) { }"]},{cells:["Condicional else if","else if","else if (altra_condició) { }"]},{cells:["Condicional else","else","else { }"]},{cells:["Bucle for","for","for (inicialització; condició; increment) { }"]},{cells:["Bucle for each","for","for (element : col·lecció) { }"]},{cells:["Bucle while","while","while (condició) { }"]},{cells:["Bucle do while","do while","do { } while (condició)"]},{cells:["Switch","switch","switch (variable) { case valor: }"]},{cells:["Mètode principal","main","public static void main (String[] args) { }"]},{cells:["Sentència break","break","break"]},{cells:["Sentència continue","continue","continue"]},{cells:["Retorn","return","return valor"]}]}),r.jsx(S,{variant:"explanation",title:"Extra",children:r.jsx("p",{children:"Un programa no és més que una seqüència d'instruccions que s'executen en ordre de dalt cap avall, llevat que utilitzem estructures que canvien aquest flux."})})]})}function L0(){return r.jsxs("div",{children:[r.jsx(C,{title:'Estructures condicionals → "fer preguntes"'}),r.jsx(S,{variant:"info",children:r.jsx("p",{children:"Utilitzem una estructura condicional quan el programa ha de prendre decisions."})}),r.jsxs(P,{title:"Exemple vida real",variant:"blue",children:[r.jsx("p",{children:"Si plou,"}),r.jsx("p",{children:"porto paraigua."}),r.jsx("p",{children:"Si no,"}),r.jsx("p",{children:"no me'l porto."})]}),r.jsxs(P,{title:"Esquema mental",variant:"yellow",children:[r.jsx("p",{children:"SI (condició és verdadera) → faig alguna cosa"}),r.jsx("p",{children:"SI NO → faig una altra cosa"})]}),r.jsx(E,{label:"En codi",code:`if (plou) {
    portoParagua();
} else {
    noElPorto();
}`}),r.jsx(C,{title:"Cas amb més d'una pregunta (else if)"}),r.jsxs(P,{title:"Esquema mental",variant:"green",children:[r.jsx("p",{children:"Si plou → paraigua"}),r.jsx("p",{children:"Si neva → abric"}),r.jsx("p",{children:"Si no → res especial"})]}),r.jsx(E,{label:"En codi",code:`if (plou) {
    portoParagua();
} else if (neva) {
    portoAbric();
} else {
    noFaigRes();
}`}),r.jsx(C,{title:"Cas on una pregunta depèn d'una altra"}),r.jsx(S,{variant:"explanation",children:r.jsx("p",{children:"A destacar aquí que el flux va en ordre, primer avalua la primera condició, després la següent, que no depèn de la primera, és a dir, en cas de necessitar que la primera pregunta sigui TRUE perquè avaluï la següent, estaríem parlant d'estructures niuades."})}),r.jsxs(P,{title:"Esquema mental niuat",variant:"pink",children:[r.jsx("p",{children:"Si plou →"}),r.jsx("p",{style:{marginLeft:"20px"},children:"Si tinc paraigua → porto paraigua"}),r.jsx("p",{style:{marginLeft:"20px"},children:"Si no → espero que deixi de ploure"}),r.jsx("p",{children:"Si no → no porto paraigua"})]}),r.jsx(E,{label:"En codi",code:`if (plou) {
    if (paragua) {
        portoParagua();
    } else {
        esperar();
    }
} else {
    noPortoParagua();
}`})]})}function A0(){return r.jsxs("div",{children:[r.jsx(C,{title:`Switch → "menú d'opcions"`}),r.jsx(S,{variant:"info",children:r.jsx("p",{children:"Utilitzem switch quan tenim diverses opcions possibles i només una pot ser la correcta."})}),r.jsxs(P,{title:"Exemple vida real",variant:"blue",children:[r.jsx("p",{children:"Entro a un restaurant i trio:"}),r.jsx("p",{children:"1 → Pizza"}),r.jsx("p",{children:"2 → Amanida"}),r.jsx("p",{children:"3 → Pasta"})]}),r.jsx(P,{title:"Esquema mental",variant:"yellow",children:r.jsx("p",{children:"SEGONS l'opció que triïs → executo una cosa o una altra"})}),r.jsx(E,{label:"En codi",code:`switch (opcio) {
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
}`}),r.jsx(S,{variant:"explanation",children:r.jsx("p",{children:"És com anar directe al gra: si coincideix l'opció, s'executa aquest bloc."})})]})}function M0(){return r.jsxs("div",{children:[r.jsx(C,{title:'Bucles → "repetir mentre alguna cosa sigui cert"'}),r.jsx(S,{variant:"info",children:r.jsx("p",{children:"Utilitzem estructures de repetició quan volem que el programa repeteixi alguna cosa moltes vegades, ja sigui per imprimir, buscar o recórrer."})}),r.jsx(S,{variant:"warning",title:"Si la condició és false des del principi, no entra mai al bucle!!!",children:r.jsx("p",{children:"Recorda que la condició controla l'entrada al bucle. Si ja és falsa abans de començar, el codi del bucle mai s'executarà."})}),r.jsx(C,{title:'while → "repeteix mentre es compleixi la condició"'}),r.jsx(S,{variant:"info",children:r.jsx("p",{children:"Mentre no introdueixi la contrasenya correcta, segueix preguntant."})}),r.jsxs(P,{title:"Esquema mental",variant:"blue",children:[r.jsx("p",{children:"MENTRE (condició sigui true) → repeteixo"}),r.jsx("p",{children:"Quan sigui false → surto del bucle"})]}),r.jsx(E,{label:"En codi",code:`while (!passwordCorrecta) {
    demanarPassword();
}`}),r.jsx(C,{title:'do while → "fes-ho almenys una vegada"'}),r.jsx(S,{variant:"info",children:r.jsx("p",{children:"Pregunto la contrasenya almenys una vegada."})}),r.jsx(P,{title:"Esquema mental",variant:"yellow",children:r.jsx("p",{children:"FAIG → comprovo → si segueix sent true → repeteixo"})}),r.jsx(E,{label:"En codi",code:`do {
    demanarPassword();
} while (!passwordCorrecta);`}),r.jsx(C,{title:'for → "repeteix un número fix de vegades"'}),r.jsx(S,{variant:"info",children:r.jsx("p",{children:"El bucle for s'utilitza quan saps exactament quantes vegades vols repetir alguna cosa. És especialment útil per recórrer col·leccions o fer un número determinat d'iteracions."})}),r.jsx(P,{title:"Esquema mental",variant:"green",children:r.jsx("p",{children:"PER (des d'un valor inicial; mentre es compleixi una condició; incrementant) → repeteixo"})}),r.jsx(E,{label:"En codi",code:`for (int i = 1; i <= 10; i++) {
    System.out.println(i);
}
// Imprimeix números de l'1 al 10`}),r.jsx(S,{variant:"explanation",children:r.jsx("p",{children:"El bucle for té tres parts separades per punt i coma: la inicialització (on comença), la condició (fins quan continua), i l'increment (com avança en cada iteració)."})}),r.jsxs(S,{variant:"info",title:"El valor TRUE controla tot",children:[r.jsx("p",{children:"Tant en condicions com en bucles:"}),r.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px"},children:[r.jsx("li",{children:"Si la condició és true → entra."}),r.jsx("li",{children:"Si la condició és false → no entra o surt."}),r.jsx("li",{children:"Si la condició és false des del principi, el programa salta aquesta estructura i segueix amb el següent o acaba."})]})]}),r.jsx(C,{title:"Resum"}),r.jsx(re,{headers:["Estructura","Per a què serveix","Exemple mental"],rows:[{cells:["if / else","Prendre decisions",'"Si passa això, faig això"']},{cells:["switch","Triar una opció entre diverses",`"Menú d'opcions"`]},{cells:["while","Repetir mentre alguna cosa sigui cert",'"Mentre no acabi, segueixo"']},{cells:["do while","Repetir almenys una vegada",'"Pregunto mínim una vegada"']},{cells:["for","Repetir un número fix de vegades",`"De l'1 al 10 faig això"`]}]})]})}function N0(){return r.jsxs("div",{children:[r.jsx(C,{title:"Modificadors d'accés"}),r.jsx(S,{variant:"info",children:r.jsx("p",{children:"Els modificadors d'accés controlen la visibilitat de classes, mètodes i atributs en Java. Determinen qui pot accedir a cada element del codi."})}),r.jsx(re,{headers:["Nom","Paraula reservada","Descripció"],rows:[{cells:["public","public","Accessible des de qualsevol altra classe en qualsevol paquet."]},{cells:["private","private","Accessible només des de la classe en la qual va ser declarat."]},{cells:["protected","protected","Accessible des del mateix paquet i subclasses."]},{cells:["default","(sense paraula)","Per defecte. Accessible per a les classes del mateix paquet."]}]}),r.jsxs(ge,{children:[r.jsxs(P,{title:"public",variant:"green",children:[r.jsxs("p",{children:["Accessible des de ",r.jsx("strong",{children:"qualsevol lloc"}),"."]}),r.jsx(E,{code:"public int edat = 25;"})]}),r.jsxs(P,{title:"private",variant:"pink",children:[r.jsxs("p",{children:["Accessible només dins la ",r.jsx("strong",{children:"mateixa classe"}),"."]}),r.jsx(E,{code:'private String nom = "Joan";'})]}),r.jsxs(P,{title:"protected",variant:"yellow",children:[r.jsxs("p",{children:["Accessible dins el ",r.jsx("strong",{children:"paquet i subclasses"}),"."]}),r.jsx(E,{code:"protected double salari = 1500.0;"})]}),r.jsxs(P,{title:"default (sense paraula)",variant:"blue",children:[r.jsxs("p",{children:["Accessible només dins el ",r.jsx("strong",{children:"mateix paquet"}),"."]}),r.jsx(E,{code:"int comptador = 0;"})]})]})]})}const P0="_button_1snnp_1",_0="_secondary_1snnp_47",T0="_small_1snnp_67",vl={button:P0,secondary:_0,small:T0};function Nn({children:e,onClick:t,variant:n,size:a,...i}){const s=[vl.button,n==="secondary"&&vl.secondary,a==="small"&&vl.small].filter(Boolean).join(" ");return r.jsx("button",{className:s,onClick:t,...i,children:e})}const O0="_container_cd20o_1",D0="_title_cd20o_17",I0="_arrayContainer_cd20o_33",F0="_cell_cd20o_53",q0="_cellValue_cd20o_69",z0="_cellIndex_cd20o_115",B0="_controls_cd20o_131",U0="_info_cd20o_205",fr={container:O0,title:D0,arrayContainer:I0,cell:F0,cellValue:q0,cellIndex:z0,controls:B0,info:U0};function xo(){return Math.floor(Math.random()*100)}function $0(e){return Array.from({length:e},()=>xo())}function H0(){const[e,t]=R.useState(()=>$0(5)),n=()=>{t(s=>s.map(()=>xo()))},a=()=>{e.length<10&&t(s=>[...s,xo()])},i=()=>{e.length>1&&t(s=>s.slice(0,-1))};return r.jsxs("div",{className:fr.container,children:[r.jsx("div",{className:fr.title,children:"Array Interactiu 1D"}),r.jsx("div",{className:fr.arrayContainer,children:e.map((s,l)=>r.jsxs("div",{className:fr.cell,children:[r.jsx("div",{className:fr.cellValue,children:s}),r.jsxs("div",{className:fr.cellIndex,children:["[",l,"]"]})]},`${l}-${s}`))}),r.jsxs("div",{className:fr.controls,children:[r.jsx(Nn,{onClick:n,children:"Canviar Valors"}),r.jsx(Nn,{onClick:a,variant:"secondary",disabled:e.length>=10,children:"Afegir Element"}),r.jsx(Nn,{onClick:i,variant:"secondary",disabled:e.length<=1,children:"Eliminar Ultim"})]}),r.jsxs("div",{className:fr.info,children:["int[] array = new int[",e.length,"];   // Longitud: ",e.length]})]})}const V0=`// Declaracio d'un array d'enters
int[] numeros = new int[5];

// Declaracio amb valors inicials
int[] notes = {7, 9, 5, 8, 6};

// Declaracio de Strings
String[] noms = {"Anna", "Marc", "Laia"};`,G0=`int[] notes = {7, 9, 5, 8, 6};

// Accedir a un element (index comenca en 0)
System.out.println(notes[0]); // 7
System.out.println(notes[2]); // 5

// Modificar un element
notes[1] = 10;
System.out.println(notes[1]); // 10

// Longitud de l'array
System.out.println(notes.length); // 5`,W0=`int[] numeros = {10, 20, 30, 40, 50};

// Recorregut amb for classic
for (int i = 0; i < numeros.length; i++) {
    System.out.println("Index " + i + ": " + numeros[i]);
}

// Recorregut amb for-each
for (int num : numeros) {
    System.out.println("Valor: " + num);
}`,J0=`public class ExempleArrays {
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
}`;function Q0(){return r.jsxs("div",{children:[r.jsx(C,{title:"Arrays Unidimensionals (1D)"}),r.jsx(S,{variant:"info",title:"Què és un Array?",children:r.jsxs("p",{children:["Un ",r.jsx("strong",{children:"array"})," és una estructura de dades que permet emmagatzemar múltiples valors del mateix tipus en una sola variable. Cada element té un",r.jsx("strong",{children:" índex"})," que comença en 0 i permet accedir directament a qualsevol posició."]})}),r.jsx(H0,{}),r.jsx(S,{variant:"explanation",title:"Característiques dels Arrays",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Mida fixa:"})," un cop creat, la mida no pot canviar."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Índex base 0:"})," el primer element és a la posició 0."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Tipus homogeni:"})," tots els elements són del mateix tipus."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Accés directe:"})," es pot accedir a qualsevol element pel seu índex en temps constant."]})]})}),r.jsx(E,{code:V0,label:"Declaració i inicialització",showLineNumbers:!0}),r.jsx(re,{headers:["Operació","Sintaxi","Exemple"],rows:[{cells:["Declarar buit","tipus[] nom = new tipus[mida]","int[] nums = new int[5]"]},{cells:["Declarar amb valors","tipus[] nom = {v1, v2, ...}","int[] nums = {1, 2, 3}"]},{cells:["Accedir element","nom[index]","nums[0] // primer element"]},{cells:["Modificar element","nom[index] = valor","nums[2] = 99"]},{cells:["Longitud","nom.length","nums.length // 3"]}]}),r.jsx(E,{code:G0,label:"Accés i modificació d'elements",showLineNumbers:!0}),r.jsx(S,{variant:"warning",title:"ArrayIndexOutOfBoundsException",children:r.jsxs("p",{children:["Si intentes accedir a un índex fora del rang (negatiu o major/igual que la longitud), Java llençarà una excepció ",r.jsx("code",{children:"ArrayIndexOutOfBoundsException"}),". Sempre comprova que l'índex estigui dins dels límits!"]})}),r.jsx(E,{code:W0,label:"Recórrer un Array",showLineNumbers:!0}),r.jsx(S,{variant:"success",title:"Exemple complet: Temperatures",children:r.jsx("p",{children:"Un exemple pràctic que calcula la mitjana i el màxim d'un array de temperatures setmanals."})}),r.jsx(E,{code:J0,label:"Exemple: Càlcul de mitjana i màxim",showLineNumbers:!0})]})}const K0="_container_1u9g6_1",Y0="_title_1u9g6_17",Z0="_matrixWrapper_1u9g6_33",X0="_matrix_1u9g6_33",eS="_cell_1u9g6_57",tS="_cellActive_1u9g6_107",rS="_cellSelected_1u9g6_125",nS="_cellIndex_1u9g6_141",aS="_controls_1u9g6_157",iS="_info_1u9g6_171",Bt={container:K0,title:Y0,matrixWrapper:Z0,matrix:X0,cell:eS,cellActive:tS,cellSelected:rS,cellIndex:nS,controls:aS,info:iS},kf=4,Rf=4;function sS(){return Math.floor(Math.random()*100)}function kd(){return Array.from({length:kf},()=>Array.from({length:Rf},()=>sS()))}function lS(){const[e,t]=R.useState(()=>kd()),[n,a]=R.useState(new Set),[i,s]=R.useState(null),l=R.useRef([]),o=R.useCallback(()=>{l.current.forEach(d=>clearTimeout(d)),l.current=[]},[]),c=()=>{o(),a(new Set),s(null),t(kd())},u=()=>{o(),a(new Set),s(null);const d=Math.min(kf,Rf);for(let f=0;f<d;f++){const j=setTimeout(()=>{a(g=>{const v=new Set(g);return v.add(`${f}-${f}`),v})},f*200);l.current.push(j)}},m=(d,f)=>{s(`${d}-${f}`)};return r.jsxs("div",{className:Bt.container,children:[r.jsx("div",{className:Bt.title,children:"Matriu Interactiva 4x4"}),r.jsx("div",{className:Bt.matrixWrapper,children:r.jsx("div",{className:Bt.matrix,children:e.map((d,f)=>d.map((j,g)=>{const v=`${f}-${g}`,y=n.has(v),h=i===v;let p=Bt.cell;return y&&(p+=` ${Bt.cellActive}`),h&&(p+=` ${Bt.cellSelected}`),r.jsxs("div",{className:p,onClick:()=>m(f,g),children:[r.jsx("span",{children:j}),r.jsxs("span",{className:Bt.cellIndex,children:["[",f,"][",g,"]"]})]},v)}))})}),r.jsxs("div",{className:Bt.controls,children:[r.jsx(Nn,{onClick:u,children:"Ressaltar Diagonal"}),r.jsx(Nn,{onClick:c,variant:"secondary",children:"Nous Valors"})]}),r.jsx("div",{className:Bt.info,children:i?`matriu[${i.replace("-","][")}] = ${e[parseInt(i.split("-")[0])][parseInt(i.split("-")[1])]}`:"int[][] matriu = new int[4][4];"})]})}const oS=`// Declaracio d'una matriu 3x4
int[][] matriu = new int[3][4];

// Declaracio amb valors inicials
int[][] notes = {
    {7, 8, 9},    // Fila 0
    {6, 5, 8},    // Fila 1
    {9, 7, 10}    // Fila 2
};`,cS=`int[][] matriu = {
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
System.out.println("Columnes: " + matriu[0].length);   // 3`,uS=`int[][] matriu = {
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
}`,dS=`// Recorrer la diagonal principal
// (nomes si la matriu es quadrada)
for (int i = 0; i < matriu.length; i++) {
    System.out.println("Diagonal[" + i + "]: " + matriu[i][i]);
}`,pS=`public class ExempleMatriu {
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
}`;function mS(){return r.jsxs("div",{children:[r.jsx(C,{title:"Arrays Bidimensionals (Matrius)"}),r.jsx(S,{variant:"info",title:"Què és una Matriu?",children:r.jsxs("p",{children:["Una ",r.jsx("strong",{children:"matriu"})," (o array 2D) és un array d'arrays. Es pot pensar com una taula amb ",r.jsx("strong",{children:"files"})," i ",r.jsx("strong",{children:"columnes"}),". Cada element s'identifica amb dos índexos: ",r.jsx("code",{children:"[fila][columna]"}),"."]})}),r.jsx(lS,{}),r.jsx(S,{variant:"explanation",title:"Estructura d'una Matriu",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Files:"})," cada fila és un array independent."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Columnes:"})," cada posició dins d'una fila."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Accés:"})," ",r.jsx("code",{children:"matriu[fila][columna]"})," per llegir o escriure."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Mida:"})," ",r.jsx("code",{children:"matriu.length"})," dona el nombre de files, ",r.jsx("code",{children:"matriu[0].length"})," dona les columnes."]})]})}),r.jsx(E,{code:oS,label:"Declaració de matrius",showLineNumbers:!0}),r.jsx(re,{headers:["Operació","Sintaxi","Descripció"],rows:[{cells:["Declarar buida","tipus[][] nom = new tipus[files][cols]","Crea matriu amb zeros"]},{cells:["Declarar amb valors","tipus[][] nom = {{...}, {...}}","Inicialitza amb valors"]},{cells:["Accedir element","nom[fila][col]","Llegeix un valor concret"]},{cells:["Nombre files","nom.length","Retorna total de files"]},{cells:["Nombre columnes","nom[0].length","Retorna columnes de la fila 0"]}]}),r.jsx(E,{code:cS,label:"Accés i modificació d'elements",showLineNumbers:!0}),r.jsx(E,{code:uS,label:"Recorregut complet de la matriu",showLineNumbers:!0}),r.jsx(S,{variant:"success",title:"Diagonal principal",children:r.jsxs("p",{children:["En una matriu quadrada (NxN), la ",r.jsx("strong",{children:"diagonal principal"})," són els elements on l'índex de fila és igual a l'índex de columna: ",r.jsx("code",{children:"matriu[i][i]"}),"."]})}),r.jsx(E,{code:dS,label:"Recórrer la diagonal",showLineNumbers:!0}),r.jsx(S,{variant:"info",title:"Exemple pràctic: Notes d'alumnes",children:r.jsx("p",{children:"Un cas d'ús habitual és guardar les notes de diversos alumnes en diverses assignatures, on cada fila representa un alumne i cada columna una assignatura."})}),r.jsx(E,{code:pS,label:"Exemple: Mitjana per alumne",showLineNumbers:!0})]})}const fS="_container_4hbij_1",hS="_title_4hbij_17",gS="_functionsGrid_4hbij_33",xS="_functionBox_4hbij_47",vS="_functionName_4hbij_75",jS="_functionDesc_4hbij_91",yS="_inputGroup_4hbij_105",bS="_input_4hbij_105",SS="_executeBtn_4hbij_165",wS="_output_4hbij_211",ES="_outputLabel_4hbij_237",CS="_outputValue_4hbij_247",kS="_outputEmpty_4hbij_257",ee={container:fS,title:hS,functionsGrid:gS,functionBox:xS,functionName:vS,functionDesc:jS,inputGroup:yS,input:bS,executeBtn:SS,output:wS,outputLabel:ES,outputValue:CS,outputEmpty:kS};function RS(){const[e,t]=R.useState(""),[n,a]=R.useState(""),i=()=>{t("Hola Mon!")},s=()=>{a(String(Math.floor(Math.random()*100)))};return r.jsxs("div",{className:ee.container,children:[r.jsx("div",{className:ee.title,children:"Demo: Funcions sense Parametres"}),r.jsxs("div",{className:ee.functionsGrid,children:[r.jsxs("div",{className:ee.functionBox,children:[r.jsx("div",{className:ee.functionName,children:"saludar()"}),r.jsx("div",{className:ee.functionDesc,children:"Retorna un missatge de salutacio fix. No rep cap parametre."}),r.jsx("button",{className:ee.executeBtn,onClick:i,children:"Executar saludar()"}),r.jsx("div",{className:ee.output,style:{marginTop:12},children:e?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:ee.outputLabel,children:"Resultat: "}),r.jsxs("span",{className:ee.outputValue,children:['"',e,'"']})]}):r.jsx("span",{className:ee.outputEmpty,children:"Prem el boto per executar..."})})]}),r.jsxs("div",{className:ee.functionBox,children:[r.jsx("div",{className:ee.functionName,children:"obtenirNumeroAleatori()"}),r.jsx("div",{className:ee.functionDesc,children:"Genera i retorna un numero aleatori entre 0 i 99."}),r.jsx("button",{className:ee.executeBtn,onClick:s,children:"Executar obtenirNumeroAleatori()"}),r.jsx("div",{className:ee.output,style:{marginTop:12},children:n?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:ee.outputLabel,children:"Resultat: "}),r.jsx("span",{className:ee.outputValue,children:n})]}):r.jsx("span",{className:ee.outputEmpty,children:"Prem el boto per executar..."})})]})]})]})}function LS(){const[e,t]=R.useState(""),[n,a]=R.useState(""),[i,s]=R.useState(""),[l,o]=R.useState(""),[c,u]=R.useState(""),m=()=>{const f=parseFloat(e),j=parseFloat(n);if(isNaN(f)||isNaN(j)){s("Introdueix dos numeros valids");return}s(String(f+j))},d=()=>{if(!l.trim()){u("Introdueix un nom");return}u(`Hola, ${l.trim()}! Benvingut/da!`)};return r.jsxs("div",{className:ee.container,children:[r.jsx("div",{className:ee.title,children:"Demo: Funcions amb Parametres"}),r.jsxs("div",{className:ee.functionsGrid,children:[r.jsxs("div",{className:ee.functionBox,children:[r.jsx("div",{className:ee.functionName,children:"sumar(int a, int b)"}),r.jsx("div",{className:ee.functionDesc,children:"Rep dos numeros com a parametres i retorna la seva suma."}),r.jsxs("div",{className:ee.inputGroup,children:[r.jsx("input",{type:"number",className:ee.input,placeholder:"a",value:e,onChange:f=>t(f.target.value)}),r.jsx("input",{type:"number",className:ee.input,placeholder:"b",value:n,onChange:f=>a(f.target.value)}),r.jsx("button",{className:ee.executeBtn,onClick:m,children:"Executar"})]}),r.jsx("div",{className:ee.output,children:i?r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:ee.outputLabel,children:["sumar(",e,", ",n,") = "]}),r.jsx("span",{className:ee.outputValue,children:i})]}):r.jsx("span",{className:ee.outputEmpty,children:"Introdueix valors i executa..."})})]}),r.jsxs("div",{className:ee.functionBox,children:[r.jsx("div",{className:ee.functionName,children:"saludarPersona(String nom)"}),r.jsx("div",{className:ee.functionDesc,children:"Rep un nom com a parametre i retorna un missatge personalitzat."}),r.jsxs("div",{className:ee.inputGroup,children:[r.jsx("input",{type:"text",className:ee.input,placeholder:"Nom",value:l,onChange:f=>o(f.target.value)}),r.jsx("button",{className:ee.executeBtn,onClick:d,children:"Executar"})]}),r.jsx("div",{className:ee.output,children:c?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:ee.outputLabel,children:"Resultat: "}),r.jsxs("span",{className:ee.outputValue,children:['"',c,'"']})]}):r.jsx("span",{className:ee.outputEmpty,children:"Introdueix un nom i executa..."})})]})]})]})}function Lf({mode:e="no-params"}){return e==="with-params"?r.jsx(LS,{}):r.jsx(RS,{})}const AS=`// Estructura general d'una funció sense paràmetres
static tipusRetorn nomFuncio() {
    // Cos de la funció
    return valor; // Si el tipus no és void
}

// Funció que no retorna res (void)
static void nomFuncio() {
    // Accions
}`,MS=`public class Funcions {
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
}`,NS=`public class GeneradorAleatori {
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
}`;function PS(){return r.jsxs("div",{children:[r.jsx(C,{title:"Funcions sense Paràmetres"}),r.jsx(S,{variant:"info",title:"Què és una Funció?",children:r.jsxs("p",{children:["Una ",r.jsx("strong",{children:"funció"})," (o mètode) és un bloc de codi reutilitzable que realitza una tasca específica. Les funcions ",r.jsx("strong",{children:"sense paràmetres"})," no necessiten rebre cap dada externa per funcionar: fan la seva feina de manera autònoma."]})}),r.jsx(Lf,{mode:"no-params"}),r.jsx(S,{variant:"explanation",title:"Avantatges de les funcions",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Reutilització:"})," es poden cridar tantes vegades com calgui."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Organització:"})," el codi queda més net i estructurat."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Manteniment:"})," si cal canviar la lògica, només es modifica en un lloc."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Llegibilitat:"})," el nom de la funció descriu què fa."]})]})}),r.jsx(E,{code:AS,label:"Estructura d'una funció sense paràmetres",showLineNumbers:!0}),r.jsx(re,{headers:["Concepte","Descripció","Exemple"],rows:[{cells:["static","Permet cridar la funció sense crear un objecte","static void fer()"]},{cells:["Tipus de retorn","Indica què retorna la funció","int, String, void..."]},{cells:["void","La funció no retorna cap valor","static void mostrar()"]},{cells:["return","Retorna un valor i acaba la funció",'return "Hola";']}]}),r.jsx(E,{code:MS,label:"Exemple: Funció saludar()",showLineNumbers:!0}),r.jsx(S,{variant:"warning",title:"void vs tipus de retorn",children:r.jsxs("p",{children:["Si una funció és ",r.jsx("code",{children:"void"}),", no pot tenir ",r.jsx("code",{children:"return"})," amb valor (però pot tenir ",r.jsx("code",{children:"return;"})," per sortir abans). Si té un tipus de retorn (",r.jsx("code",{children:"int"}),", ",r.jsx("code",{children:"String"}),", etc.), ",r.jsx("strong",{children:"obligatòriament"})," ha de retornar un valor d'aquell tipus."]})}),r.jsx(E,{code:NS,label:"Exemple: Funcions sense paràmetres variades",showLineNumbers:!0})]})}const _S=`// Estructura general d'una funció amb paràmetres
static tipusRetorn nomFuncio(tipus param1, tipus param2) {
    // Cos de la funció - utilitza param1 i param2
    return valor;
}

// Exemple concret
static int sumar(int a, int b) {
    return a + b;
}`,TS=`public class OperacionsMatematiques {
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
}`,OS=`public class FuncionsAvancades {
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
}`;function DS(){return r.jsxs("div",{children:[r.jsx(C,{title:"Funcions amb Paràmetres"}),r.jsx(S,{variant:"info",title:"Paràmetres i Arguments",children:r.jsxs("p",{children:["Les funcions amb ",r.jsx("strong",{children:"paràmetres"})," reben dades d'entrada que poden utilitzar dins del seu cos. Els ",r.jsx("strong",{children:"paràmetres"})," es defineixen a la declaració de la funció, i els ",r.jsx("strong",{children:"arguments"})," són els valors concrets que es passen quan es crida la funció."]})}),r.jsx(Lf,{mode:"with-params"}),r.jsx(E,{code:_S,label:"Estructura d'una funció amb paràmetres",showLineNumbers:!0}),r.jsx(re,{headers:["Concepte","Descripció","Exemple"],rows:[{cells:["Paràmetre","Variable declarada a la signatura","(int a, int b)"]},{cells:["Argument","Valor passat en la crida","sumar(5, 3)"]},{cells:["Pas per valor","Java copia el valor del primitiu","int, double, char..."]},{cells:["Pas per referència","Java copia la referència de l'objecte","String, arrays, objectes"]}]}),r.jsx(S,{variant:"explanation",title:"Diferència entre Paràmetre i Argument",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Paràmetre:"}),' és la variable a la definició de la funció. És com un "espai reservat".']}),r.jsxs("li",{children:[r.jsx("strong",{children:"Argument:"})," és el valor real que enviem quan cridem la funció."]}),r.jsxs("li",{children:["Exemple: en ",r.jsx("code",{children:"static int sumar(int a, int b)"}),", ",r.jsx("code",{children:"a"})," i ",r.jsx("code",{children:"b"})," són paràmetres."]}),r.jsxs("li",{children:["Quan cridem ",r.jsx("code",{children:"sumar(5, 3)"}),", ",r.jsx("code",{children:"5"})," i ",r.jsx("code",{children:"3"})," són arguments."]})]})}),r.jsx(E,{code:TS,label:"Exemples bàsics de funcions amb paràmetres",showLineNumbers:!0}),r.jsx(S,{variant:"warning",title:"Ordre i tipus dels arguments",children:r.jsxs("p",{children:["Quan cridem una funció, els arguments han de coincidir en ",r.jsx("strong",{children:"nombre"}),",",r.jsx("strong",{children:" ordre"})," i ",r.jsx("strong",{children:"tipus"})," amb els paràmetres declarats. Si no, Java donarà un error de compilació."]})}),r.jsx(E,{code:OS,label:"Funcions amb múltiples paràmetres",showLineNumbers:!0})]})}const IS=`public class Exemples {
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
}`,FS=`public class FuncionsAmbRetorn {
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
}`,qS=`static int valorAbsolut(int num) {
    if (num < 0) {
        return -num;    // Surt de la funció i retorna -num
    }
    return num;         // Surt de la funció i retorna num
}

// ATENCIÓ: després d'un return, el codi NO s'executa
static int exemple() {
    return 42;
    // System.out.println("Això mai s'executarà"); // ERROR de compilació!
}`,zS=`public class SenseParametres {
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
}`,BS=`public class AmbParametres {
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
}`,US=`public class ExempleVarargs {
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
}`,$S=`public class Calculadora {
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
}`,HS=`public class Comptador {
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
}`,VS=`// BONS noms de mètodes: verb + nom, camelCase
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
public boolean check(String s) { ... }         // Massa genèric, paràmetre poc clar`;function GS(){return r.jsxs("div",{children:[r.jsx(C,{title:"Tipus de Funcions (Mètodes) en Java"}),r.jsx(S,{variant:"info",title:"Per què classificar les funcions?",children:r.jsxs("p",{children:["Les funcions (en Java es diuen ",r.jsx("strong",{children:"mètodes"}),") es poden classificar de diverses maneres: segons si ",r.jsx("strong",{children:"retornen un valor"})," o no, segons si reben ",r.jsx("strong",{children:"paràmetres"}),", i segons si són ",r.jsx("strong",{children:"estàtiques"})," o d'instància. Entendre aquestes classificacions ens ajuda a escriure codi més clar i organitzat."]})}),r.jsx(C,{title:"Classificació per Tipus de Retorn"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["La primera gran distinció és si la funció ",r.jsx("strong",{children:"retorna un valor"})," al codi que l'ha cridat, o si simplement ",r.jsx("strong",{children:"executa una acció"})," sense retornar res."]})}),r.jsxs(fe,{children:[r.jsxs(G,{title:"void - No retorna res (Procediment)",variant:"blue",children:[r.jsxs("p",{style:{marginBottom:"10px"},children:["Les funcions ",r.jsx("code",{children:"void"})," executen una acció (imprimir, modificar dades...) però ",r.jsx("strong",{children:"no retornen cap valor"}),". No pots guardar el seu resultat en una variable."]}),r.jsx(E,{code:`static void saludar() {
    System.out.println("Hola!");
    // No hi ha return amb valor
}

// Crida:
saludar(); // Imprimeix "Hola!"
// int x = saludar(); // ERROR!`})]}),r.jsxs(G,{title:"Amb retorn - Retorna un valor",variant:"good",children:[r.jsxs("p",{style:{marginBottom:"10px"},children:["Les funcions amb tipus de retorn (",r.jsx("code",{children:"int"}),", ",r.jsx("code",{children:"String"}),",",r.jsx("code",{children:" boolean"}),", ",r.jsx("code",{children:"double"}),"...) ",r.jsx("strong",{children:"retornen un valor"})," que es pot guardar en una variable."]}),r.jsx(E,{code:`static int sumar(int a, int b) {
    return a + b;
}

// Crida:
int resultat = sumar(5, 3);
System.out.println(resultat); // 8`})]})]}),r.jsx(E,{label:"Exemples de funcions void (procediments)",code:IS,showLineNumbers:!0}),r.jsx(E,{label:"Exemples de funcions amb retorn",code:FS,showLineNumbers:!0}),r.jsx(C,{title:"La Paraula Clau return"}),r.jsx(S,{variant:"info",title:"Com funciona return?",children:r.jsxs("p",{children:["La paraula clau ",r.jsx("code",{children:"return"})," fa dues coses: ",r.jsx("strong",{children:"1)"})," finalitza l'execució de la funció immediatament, i ",r.jsx("strong",{children:"2)"})," retorna el valor especificat al codi que ha cridat la funció. Després d'un ",r.jsx("code",{children:"return"}),", cap línia de codi dins la funció s'executarà."]})}),r.jsx(E,{label:"Comportament de return",code:qS,showLineNumbers:!0}),r.jsx(S,{variant:"warning",title:"Regles importants de return",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:["Una funció amb tipus de retorn (no void) ",r.jsx("strong",{children:"ha de tenir"})," un ",r.jsx("code",{children:"return"})," en tots els camins possibles."]}),r.jsxs("li",{children:["El valor retornat ha de ser del ",r.jsx("strong",{children:"mateix tipus"})," que el declarat (o compatible)."]}),r.jsxs("li",{children:["En funcions ",r.jsx("code",{children:"void"}),", pots usar ",r.jsx("code",{children:"return;"})," (sense valor) per sortir anticipadament."]}),r.jsxs("li",{children:["El codi després d'un ",r.jsx("code",{children:"return"})," és ",r.jsx("strong",{children:"inassolible"})," i dona error de compilació."]})]})}),r.jsx(C,{title:"Classificació per Paràmetres"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["Una altra forma de classificar les funcions és segons si reben ",r.jsx("strong",{children:"dades d'entrada"})," (paràmetres) o no. Els paràmetres permeten que la funció treballi amb valors diferents cada cop que es crida."]})}),r.jsx(E,{label:"Funcions sense paràmetres",code:zS,showLineNumbers:!0}),r.jsx(E,{label:"Funcions amb paràmetres",code:BS,showLineNumbers:!0}),r.jsx(C,{title:"Paràmetres Variables (Varargs)"}),r.jsx(S,{variant:"info",title:"Què són els varargs?",children:r.jsxs("p",{children:["Java permet definir funcions que accepten un ",r.jsx("strong",{children:"nombre variable de paràmetres"})," del mateix tipus. S'utilitza la sintaxi ",r.jsx("code",{children:"tipus... nom"}),". Internament, Java tracta els varargs com un ",r.jsx("strong",{children:"array"}),"."]})}),r.jsx(E,{label:"Exemple de varargs (int... numeros)",code:US,showLineNumbers:!0}),r.jsx(S,{variant:"warning",title:"Restriccions dels varargs",children:r.jsxs("p",{children:["Els varargs han de ser l'",r.jsx("strong",{children:"últim paràmetre"})," de la funció i només pot haver-n'hi ",r.jsx("strong",{children:"un"})," per funció. Per exemple:",r.jsx("code",{children:" static void exemple(String prefix, int... numeros)"})," és vàlid, però ",r.jsx("code",{children:"static void exemple(int... a, int... b)"})," ",r.jsx("strong",{children:"NO"})," ho és."]})}),r.jsx(C,{title:"Classificació per Accés: static vs Instància"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["En Java, els mètodes poden ser ",r.jsx("strong",{children:"estàtics"})," (pertanyen a la classe) o d'",r.jsx("strong",{children:"instància"})," (pertanyen a un objecte concret). Aquesta distinció és fonamental en la Programació Orientada a Objectes."]})}),r.jsxs(fe,{children:[r.jsxs(G,{title:"Mètodes static",variant:"blue",children:[r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px",marginBottom:"10px"},children:[r.jsxs("li",{children:["Pertanyen a la ",r.jsx("strong",{children:"classe"}),", no a un objecte"]}),r.jsxs("li",{children:["Es criden amb ",r.jsx("code",{children:"NomClasse.mètode()"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"No"})," poden accedir a atributs d'instància (no-static)"]}),r.jsx("li",{children:"Ideals per a funcions utilitat (càlculs, conversions...)"})]}),r.jsx(E,{code:`// Exemples de Java:
Math.sqrt(16);     // 4.0
Math.max(5, 3);    // 5
Integer.parseInt("42"); // 42`})]}),r.jsxs(G,{title:"Mètodes d'instància",variant:"good",children:[r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px",marginBottom:"10px"},children:[r.jsxs("li",{children:["Pertanyen a un ",r.jsx("strong",{children:"objecte"})," concret"]}),r.jsxs("li",{children:["Es criden amb ",r.jsx("code",{children:"objecte.mètode()"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Poden"})," accedir a atributs d'instància amb ",r.jsx("code",{children:"this"})]}),r.jsx("li",{children:"Ideals quan el mètode necessita l'estat de l'objecte"})]}),r.jsx(E,{code:`// Exemples:
String nom = "Hola";
nom.length();        // 4
nom.toUpperCase();   // "HOLA"
nom.charAt(0);       // 'H'`})]})]}),r.jsx(E,{label:"Exemple de mètodes static",code:$S,showLineNumbers:!0}),r.jsx(E,{label:"Exemple de mètodes d'instància",code:HS,showLineNumbers:!0}),r.jsx(S,{variant:"info",title:"Quan usar static vs instància?",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Usa static"})," quan la funció no depengui de cap atribut d'objecte: funcions matemàtiques, utilitats, conversions, validacions pures."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Usa instància"})," quan la funció necessiti accedir o modificar les dades d'un objecte concret: getters, setters, mètodes que depenguin de l'estat."]}),r.jsxs("li",{children:["Als programes simples amb ",r.jsx("code",{children:"main"}),", solem usar ",r.jsx("code",{children:"static"})," perquè no creem objectes."]}),r.jsx("li",{children:"En POO, la majoria de mètodes són d'instància."})]})}),r.jsx(C,{title:"Nomenclatura: Funció vs Mètode vs Procediment"}),r.jsx(S,{variant:"explanation",title:"Per què tants noms?",children:r.jsxs("p",{children:["En el món de la programació s'utilitzen diferents termes per referir-se a blocs de codi reutilitzables. Depenent del llenguatge i del context, es fan servir noms diferents. En Java, el terme oficial és ",r.jsx("strong",{children:"mètode"}),", però és important conèixer la terminologia general."]})}),r.jsxs(ge,{children:[r.jsxs(P,{title:"Funció",variant:"blue",children:[r.jsxs("p",{children:["Terme ",r.jsx("strong",{children:"general"})," de programació. És un bloc de codi que rep dades, les processa i ",r.jsx("strong",{children:"retorna un valor"}),"."]}),r.jsx("p",{style:{marginTop:"8px"},children:"Llenguatges: C, Python, JavaScript, etc."}),r.jsx(E,{code:`// Concepte de "funció"
static int sumar(int a, int b) {
    return a + b; // Retorna un valor
}`})]}),r.jsxs(P,{title:"Procediment",variant:"yellow",children:[r.jsxs("p",{children:["Terme general per a un bloc de codi que executa una acció però ",r.jsx("strong",{children:"NO retorna cap valor"})," (void)."]}),r.jsx("p",{style:{marginTop:"8px"},children:"Llenguatges: Pascal, Ada, Visual Basic (Sub)."}),r.jsx(E,{code:`// Concepte de "procediment"
static void mostrarMenu() {
    System.out.println("1. Jugar");
    System.out.println("2. Sortir");
    // No retorna res
}`})]}),r.jsxs(P,{title:"Mètode",variant:"green",children:[r.jsxs("p",{children:["El nom que Java utilitza per a ",r.jsx("strong",{children:"TOTES"})," les funcions i procediments dins d'una classe. Tant si retornen valor com si no."]}),r.jsx("p",{style:{marginTop:"8px"},children:"Llenguatges: Java, C#, Ruby, etc. (POO)"}),r.jsx(E,{code:`// En Java, TOT són "mètodes"
class Exemple {
    void saludar() { ... }   // Mètode
    int sumar() { ... }      // Mètode
}`})]})]}),r.jsx(S,{variant:"success",title:"Conclusió",children:r.jsxs("p",{children:["En Java, tant les funcions (que retornen valor) com els procediments (void) s'anomenen ",r.jsx("strong",{children:"mètodes"}),`, ja que sempre estan dins d'una classe. A la pràctica, molts programadors diuen "funció" de manera informal, i està perfectament bé. L'important és entendre que en Java, el terme tècnicament correcte és `,r.jsx("strong",{children:"mètode"}),"."]})}),r.jsx(C,{title:"Convencions per Nomenar Mètodes"}),r.jsx(S,{variant:"info",title:"Regles de nomenclatura en Java",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:["Utilitza ",r.jsx("strong",{children:"camelCase"}),": la primera paraula en minúscula, les següents amb majúscula inicial."]}),r.jsxs("li",{children:["Comença amb un ",r.jsx("strong",{children:"verb"})," que descrigui l'acció: ",r.jsx("code",{children:"calcular"}),", ",r.jsx("code",{children:"obtenir"}),", ",r.jsx("code",{children:"mostrar"}),", ",r.jsx("code",{children:"és"}),", ",r.jsx("code",{children:"té"}),"."]}),r.jsxs("li",{children:["Sigues ",r.jsx("strong",{children:"descriptiu"}),": el nom ha d'explicar què fa el mètode."]}),r.jsxs("li",{children:["Per booleans, usa prefixos com ",r.jsx("code",{children:"és"})," o ",r.jsx("code",{children:"té"}),": ",r.jsx("code",{children:"esValid()"}),", ",r.jsx("code",{children:"tePermisos()"}),"."]}),r.jsxs("li",{children:["Getters: ",r.jsx("code",{children:"getNom()"}),", ",r.jsx("code",{children:"getEdat()"}),". Setters: ",r.jsx("code",{children:"setNom()"}),", ",r.jsx("code",{children:"setEdat()"}),"."]})]})}),r.jsx(E,{label:"Bons i mals noms de mètodes",code:VS,showLineNumbers:!0}),r.jsx(C,{title:"Taula Resum de Tipus de Funcions"}),r.jsx(re,{headers:["Classificació","Tipus","Descripció","Exemple"],rows:[{group:"Per tipus de retorn"},{cells:["Retorn","void (Procediment)","No retorna cap valor","static void saludar() { ... }"]},{cells:["Retorn","Amb retorn (Funció)","Retorna un valor del tipus declarat","static int sumar(int a, int b) { return a + b; }"]},{group:"Per paràmetres"},{cells:["Paràmetres","Sense paràmetres","No rep cap dada d'entrada","static void saludar() { ... }"]},{cells:["Paràmetres","Amb paràmetres","Rep una o més dades d'entrada","static int sumar(int a, int b) { ... }"]},{cells:["Paràmetres","Varargs","Rep un nombre variable de paràmetres","static int sumar(int... nums) { ... }"]},{group:"Per accés (static vs instància)"},{cells:["Accés","static","Pertany a la classe, es crida amb NomClasse.mètode()","static double arrel(double n) { ... }"]},{cells:["Accés","Instància","Pertany a l'objecte, es crida amb objecte.mètode()","public void mostrar() { ... }"]},{group:"Per nomenclatura"},{cells:["Nom","Funció","Retorna un valor (terme general)","int sumar(int a, int b)"]},{cells:["Nom","Procediment","No retorna valor / void (terme general)","void mostrarMenu()"]},{cells:["Nom","Mètode","Nom oficial en Java per a tot","Qualsevol funció/procediment en Java"]}]}),r.jsx(S,{variant:"success",title:"Resum Final",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:["Les funcions ",r.jsx("code",{children:"void"})," executen accions sense retornar valor (procediments)."]}),r.jsxs("li",{children:["Les funcions amb tipus de retorn retornen un valor amb ",r.jsx("code",{children:"return"}),"."]}),r.jsx("li",{children:"Les funcions poden rebre 0, 1, o múltiples paràmetres (inclosos varargs)."}),r.jsxs("li",{children:["Els mètodes ",r.jsx("code",{children:"static"})," pertanyen a la classe; els d'instància pertanyen a l'objecte."]}),r.jsxs("li",{children:["En Java, tot són ",r.jsx("strong",{children:"mètodes"}),', però informalment diem "funció" o "procediment".']}),r.jsxs("li",{children:["Usa ",r.jsx("strong",{children:"camelCase"})," i comença els noms amb un ",r.jsx("strong",{children:"verb"})," descriptiu."]})]})})]})}const WS="_container_1pzke_1",JS="_title_1pzke_17",QS="_demosGrid_1pzke_33",KS="_demoBox_1pzke_45",YS="_demoTitle_1pzke_61",ZS="_inputRow_1pzke_75",XS="_label_1pzke_89",e1="_input_1pzke_75",t1="_executeBtn_1pzke_139",r1="_result_1pzke_185",n1="_stepsContainer_1pzke_217",a1="_step_1pzke_217",i1="_stepVisible_1pzke_257",s1="_stepHighlight_1pzke_267",l1="_sequence_1pzke_279",o1="_sequenceLabel_1pzke_301",c1="_placeholder_1pzke_315",Se={container:WS,title:JS,demosGrid:QS,demoBox:KS,demoTitle:YS,inputRow:ZS,label:XS,input:e1,executeBtn:t1,result:r1,stepsContainer:n1,step:a1,stepVisible:i1,stepHighlight:s1,sequence:l1,sequenceLabel:o1,placeholder:c1};function u1(){const[e,t]=R.useState(""),[n,a]=R.useState(null),[i,s]=R.useState([]),[l,o]=R.useState(0),c=R.useRef([]),u=R.useCallback(()=>{c.current.forEach(j=>clearTimeout(j)),c.current=[]},[]);R.useEffect(()=>()=>u(),[u]);const m=j=>j<0?null:j===0||j===1?1:j*m(j-1),d=j=>{const g=[];if(j<=1)return g.push({text:`factorial(${j}) = ${j}`,isBase:!0}),g;for(let y=j;y>=2;y--)g.push({text:`factorial(${y}) = ${y} * factorial(${y-1})`,isBase:!1});g.push({text:"factorial(1) = 1  (cas base)",isBase:!0});let v=1;for(let y=2;y<=j;y++)v*=y,g.push({text:`factorial(${y}) = ${y} * ${v/y} = ${v}`,isBase:!1});return g},f=()=>{u(),o(0);const j=parseInt(e,10);if(isNaN(j)||j<0||j>12){a("Introdueix un numero entre 0 i 12"),s([]);return}const g=m(j);a(`${j}! = ${g}`);const v=d(j);s(v),v.forEach((y,h)=>{const p=setTimeout(()=>{o(x=>x+1)},(h+1)*300);c.current.push(p)})};return r.jsxs("div",{className:Se.demoBox,children:[r.jsx("div",{className:Se.demoTitle,children:"Factorial (n!)"}),r.jsxs("div",{className:Se.inputRow,children:[r.jsx("span",{className:Se.label,children:"n ="}),r.jsx("input",{type:"number",className:Se.input,placeholder:"5",min:"0",max:"12",value:e,onChange:j=>t(j.target.value)}),r.jsx("button",{className:Se.executeBtn,onClick:f,children:"Calcular"})]}),n&&r.jsx("div",{className:Se.result,children:n}),i.length>0&&r.jsx("div",{className:Se.stepsContainer,children:i.map((j,g)=>r.jsx("div",{className:`${Se.step} ${g<l?Se.stepVisible:""} ${j.isBase?Se.stepHighlight:""}`,children:j.text},g))}),!n&&r.jsx("div",{className:Se.placeholder,children:"Introdueix un valor i prem Calcular per veure els passos"})]})}function d1(){const[e,t]=R.useState(""),[n,a]=R.useState(null),[i,s]=R.useState([]),l=u=>{if(u<=0)return 0;if(u===1)return 1;let m=0,d=1;for(let f=2;f<=u;f++){const j=m+d;m=d,d=j}return d},o=u=>{const m=[];for(let d=0;d<=u;d++)m.push(l(d));return m},c=()=>{const u=parseInt(e,10);if(isNaN(u)||u<0||u>20){a("Introdueix un numero entre 0 i 20"),s([]);return}const m=l(u);a(`fibonacci(${u}) = ${m}`),s(o(u))};return r.jsxs("div",{className:Se.demoBox,children:[r.jsx("div",{className:Se.demoTitle,children:"Fibonacci"}),r.jsxs("div",{className:Se.inputRow,children:[r.jsx("span",{className:Se.label,children:"Posicio n ="}),r.jsx("input",{type:"number",className:Se.input,placeholder:"7",min:"0",max:"20",value:e,onChange:u=>t(u.target.value)}),r.jsx("button",{className:Se.executeBtn,onClick:c,children:"Calcular"})]}),n&&r.jsx("div",{className:Se.result,children:n}),i.length>0&&r.jsxs("div",{className:Se.sequence,children:[r.jsx("span",{className:Se.sequenceLabel,children:"Sequencia completa:"}),i.join(", ")]}),!n&&r.jsx("div",{className:Se.placeholder,children:"Introdueix una posicio i prem Calcular"})]})}function p1(){return r.jsxs("div",{className:Se.container,children:[r.jsx("div",{className:Se.title,children:"Demo: Funcions Recursives"}),r.jsxs("div",{className:Se.demosGrid,children:[r.jsx(u1,{}),r.jsx(d1,{})]})]})}const m1=`// Estructura general d'una funció recursiva
static tipusRetorn funcioRecursiva(parametres) {
    // 1. Cas base: condició de parada
    if (condicioParada) {
        return valorBase;
    }

    // 2. Cas recursiu: la funció es crida a si mateixa
    return funcioRecursiva(parametresModificats);
}`,f1=`public class Factorial {
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
}`,h1=`public class Fibonacci {
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
}`,g1=`public class SumaRecursiva {
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
}`;function x1(){return r.jsxs("div",{children:[r.jsx(C,{title:"Funcions Recursives"}),r.jsx(S,{variant:"info",title:"Què és la Recursivitat?",children:r.jsxs("p",{children:["La ",r.jsx("strong",{children:"recursivitat"})," és una tècnica on una funció es crida a si mateixa per resoldre un problema. Cada crida resol una part més petita del problema fins arribar a un ",r.jsx("strong",{children:"cas base"})," que atura la recursió."]})}),r.jsx(p1,{}),r.jsx(S,{variant:"explanation",title:"Els dos elements clau",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Cas base:"})," la condició que atura la recursió. Sense cas base, la funció es cridaria infinitament i provocaria un ",r.jsx("code",{children:"StackOverflowError"}),"."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Cas recursiu:"})," la funció es crida a si mateixa amb paràmetres més simples o més petits, acostant-se al cas base."]})]})}),r.jsx(E,{code:m1,label:"Estructura d'una funció recursiva",showLineNumbers:!0}),r.jsx(re,{headers:["Concepte","Descripció","Importància"],rows:[{cells:["Cas base","Condició de parada de la recursió","Obligatori per evitar bucle infinit"]},{cells:["Cas recursiu","La funció es crida amb dades més simples","Ha de convergir cap al cas base"]},{cells:["Pila de crides","Cada crida s'apila fins al cas base","Limitat per la memòria de la pila"]},{cells:["StackOverflowError","Error si no hi ha cas base o no convergeix","Cal evitar-lo sempre"]}]}),r.jsx(S,{variant:"success",title:"Factorial (n!)",children:r.jsxs("p",{children:["El factorial és l'exemple clàssic de recursivitat: ",r.jsx("code",{children:"n! = n * (n-1)!"})," amb cas base ",r.jsx("code",{children:"0! = 1"}),"."]})}),r.jsx(E,{code:f1,label:"Exemple: Factorial recursiu",showLineNumbers:!0}),r.jsx(S,{variant:"success",title:"Fibonacci",children:r.jsxs("p",{children:["La seqüència de Fibonacci es defineix com: ",r.jsx("code",{children:"fib(n) = fib(n-1) + fib(n-2)"}),", amb casos base ",r.jsx("code",{children:"fib(0) = 0"})," i ",r.jsx("code",{children:"fib(1) = 1"}),"."]})}),r.jsx(E,{code:h1,label:"Exemple: Fibonacci recursiu",showLineNumbers:!0}),r.jsx(S,{variant:"warning",title:"Eficiència de la recursió",children:r.jsxs("p",{children:["La versió recursiva de Fibonacci és molt ineficient perquè recalcula els mateixos valors moltes vegades. Per a valors grans de ",r.jsx("code",{children:"n"}),", és preferible utilitzar un enfocament iteratiu o ",r.jsx("strong",{children:"memoització"}),"."]})}),r.jsx(E,{code:g1,label:"Més exemples: Suma i Potència recursius",showLineNumbers:!0})]})}const v1=`public class Calculadora {
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
}`,j1=`public class GestorNotes {
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
}`,y1=`public class JocEndevinar {
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
}`;function b1(){return r.jsxs("div",{children:[r.jsx(C,{title:"Cridar Funcions des del Main"}),r.jsx(S,{variant:"info",title:"El mètode main()",children:r.jsxs("p",{children:["El mètode ",r.jsx("code",{children:"public static void main(String[] args)"})," és el"," ",r.jsx("strong",{children:"punt d'entrada"})," de qualsevol programa Java. Des d'aquí cridem les nostres funcions per executar la lògica del programa. Les funcions han de ser"," ",r.jsx("code",{children:"static"})," per poder-les cridar des del ",r.jsx("code",{children:"main"})," sense crear objectes."]})}),r.jsx(S,{variant:"explanation",title:"Flux d'execució",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"1."})," El programa comença sempre al ",r.jsx("code",{children:"main()"}),"."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"2."}),` Quan es crida una funció, l'execució "salta" al cos de la funció.`]}),r.jsxs("li",{children:[r.jsx("strong",{children:"3."})," Un cop la funció acaba (amb ",r.jsx("code",{children:"return"})," o al final del bloc), l'execució torna al punt on es va cridar."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"4."})," El valor retornat es pot guardar en una variable o usar directament."]})]})}),r.jsx(S,{variant:"success",title:"Exemple 1: Calculadora",children:r.jsxs("p",{children:["Combina funcions sense paràmetres (menú) i amb paràmetres (operacions). El ",r.jsx("code",{children:"main"})," coordina el flux."]})}),r.jsx(E,{code:v1,label:"Exemple 1: Calculadora amb funcions",showLineNumbers:!0}),r.jsx(S,{variant:"success",title:"Exemple 2: Gestor de Notes",children:r.jsx("p",{children:"Mostra com encadenar crides a funcions: el resultat d'una funció es passa com a argument de la següent. Cada funció fa una tasca concreta."})}),r.jsx(E,{code:j1,label:"Exemple 2: Crides encadenades de funcions",showLineNumbers:!0}),r.jsx(S,{variant:"warning",title:"Bones pràctiques",children:r.jsxs("ul",{children:[r.jsxs("li",{children:["Cada funció ha de fer ",r.jsx("strong",{children:"una sola cosa"})," i fer-la bé."]}),r.jsxs("li",{children:["Dona noms ",r.jsx("strong",{children:"descriptius"})," a les funcions (verbs: calcular, obtenir, mostrar...)."]}),r.jsxs("li",{children:["El ",r.jsx("code",{children:"main"})," ha de ser ",r.jsx("strong",{children:"curt i clar"}),": coordina, no calcula."]}),r.jsx("li",{children:"Reutilitza funcions en lloc de copiar codi."})]})}),r.jsx(S,{variant:"success",title:"Exemple 3: Joc d'endevinar",children:r.jsx("p",{children:"Un exemple més complet que combina funcions sense paràmetres, amb paràmetres i recursivitat per crear un petit joc interactiu."})}),r.jsx(E,{code:y1,label:"Exemple 3: Combinant tots els tipus de funcions",showLineNumbers:!0})]})}const S1=`public class ResumComplet {
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
}`;function w1(){return r.jsxs("div",{children:[r.jsx(C,{title:"Resum Comparatiu"}),r.jsx(S,{variant:"info",title:"Vista general",children:r.jsx("p",{children:"Aquí tens un resum de tots els conceptes tractats en aquesta secció: arrays unidimensionals, arrays bidimensionals (matrius), funcions sense paràmetres, funcions amb paràmetres i funcions recursives."})}),r.jsxs(ge,{children:[r.jsx(P,{title:"Arrays 1D",variant:"blue",children:r.jsxs("ul",{children:[r.jsx("li",{children:"Emmagatzemen múltiples valors del mateix tipus"}),r.jsx("li",{children:"Mida fixa definida en la creació"}),r.jsx("li",{children:"Accés per índex (base 0)"}),r.jsx("li",{children:r.jsx("code",{children:"int[] nums = new int[5];"})}),r.jsxs("li",{children:["Recorregut amb ",r.jsx("code",{children:"for"})," o ",r.jsx("code",{children:"for-each"})]}),r.jsxs("li",{children:[r.jsx("code",{children:".length"})," per obtenir la mida"]})]})}),r.jsx(P,{title:"Arrays 2D (Matrius)",variant:"yellow",children:r.jsxs("ul",{children:[r.jsx("li",{children:"Array d'arrays: files i columnes"}),r.jsxs("li",{children:["Accés amb doble índex: ",r.jsx("code",{children:"[fila][col]"})]}),r.jsx("li",{children:r.jsx("code",{children:"int[][] mat = new int[3][4];"})}),r.jsxs("li",{children:["Recorregut amb doble ",r.jsx("code",{children:"for"})]}),r.jsxs("li",{children:[r.jsx("code",{children:".length"})," = files, ",r.jsx("code",{children:"[0].length"})," = columnes"]}),r.jsx("li",{children:"Ús: taules de dades, taulers de joc"})]})}),r.jsx(P,{title:"Funcions sense Paràmetres",variant:"green",children:r.jsxs("ul",{children:[r.jsx("li",{children:"No reben cap dada d'entrada"}),r.jsxs("li",{children:["Poden retornar un valor o ser ",r.jsx("code",{children:"void"})]}),r.jsx("li",{children:r.jsx("code",{children:"static String saludar() {...}"})}),r.jsx("li",{children:"Ideals per accions autònomes"}),r.jsx("li",{children:"Exemples: mostrar menú, generar aleatori"}),r.jsxs("li",{children:["Es criden amb ",r.jsx("code",{children:"nomFunció()"})]})]})}),r.jsx(P,{title:"Funcions amb Paràmetres",variant:"pink",children:r.jsxs("ul",{children:[r.jsx("li",{children:"Reben dades d'entrada (paràmetres)"}),r.jsx("li",{children:"Més flexibles i reutilitzables"}),r.jsx("li",{children:r.jsx("code",{children:"static int sumar(int a, int b) {...}"})}),r.jsx("li",{children:"Arguments han de coincidir en tipus i ordre"}),r.jsx("li",{children:"Poden rebre arrays i objectes"}),r.jsxs("li",{children:["Crida: ",r.jsx("code",{children:"sumar(5, 3)"})]})]})}),r.jsx(P,{title:"Funcions Recursives",variant:"gold",children:r.jsxs("ul",{children:[r.jsx("li",{children:"La funció es crida a si mateixa"}),r.jsxs("li",{children:["Necessiten un ",r.jsx("strong",{children:"cas base"})," obligatori"]}),r.jsxs("li",{children:["El ",r.jsx("strong",{children:"cas recursiu"})," ha de convergir"]}),r.jsx("li",{children:"Exemples: factorial, fibonacci, potència"}),r.jsxs("li",{children:["Perill: ",r.jsx("code",{children:"StackOverflowError"})," sense cas base"]}),r.jsx("li",{children:"Alternativa: versió iterativa"})]})})]}),r.jsx(S,{variant:"explanation",title:"Comparativa ràpida",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Arrays"})," són per ",r.jsx("em",{children:"emmagatzemar dades"}),", les"," ",r.jsx("strong",{children:"funcions"})," són per ",r.jsx("em",{children:"processar-les"}),"."]}),r.jsxs("li",{children:["Les funcions ",r.jsx("strong",{children:"sense paràmetres"})," són més simples però menys flexibles que les funcions ",r.jsx("strong",{children:"amb paràmetres"}),"."]}),r.jsxs("li",{children:["La ",r.jsx("strong",{children:"recursivitat"})," és elegant però pot ser menys eficient que un bucle iteratiu per a problemes grans."]}),r.jsxs("li",{children:["Combinar arrays amb funcions és la clau per escriure programes ",r.jsx("strong",{children:"modulars i nets"}),"."]})]})}),r.jsx(E,{code:S1,label:"Exemple integrador: tots els conceptes junts",showLineNumbers:!0})]})}function E1(){return r.jsxs("div",{children:[r.jsx(C,{title:"Introducció a la Programació Orientada a Objectes (POO)"}),r.jsx(S,{variant:"info",title:"Què és la POO?",children:r.jsxs("p",{children:["La ",r.jsx("strong",{children:"Programació Orientada a Objectes (POO)"})," és un paradigma de programació que organitza el codi al voltant d'",r.jsx("strong",{children:"objectes"})," en lloc de funcions i lògica seqüencial. Un objecte és una representació d'una entitat del món real que té",r.jsx("strong",{children:" propietats"})," (atributs) i ",r.jsx("strong",{children:"comportaments"})," (mètodes)."]})}),r.jsx(C,{title:"Programació Procedural vs POO"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["Fins ara hem programat de forma ",r.jsx("strong",{children:"procedural"}),": un conjunt d'instruccions que s'executen de dalt a baix, una darrere l'altra. Funciona per a programes petits, però a mesura que el programa creix, es torna difícil de mantenir i organitzar."]})}),r.jsxs(fe,{children:[r.jsxs(G,{title:"Programació Procedural",variant:"bad",children:[r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[r.jsx("li",{children:"Codi seqüencial, de dalt a baix"}),r.jsx("li",{children:"Dades i funcions separades"}),r.jsx("li",{children:"Difícil de reutilitzar"}),r.jsx("li",{children:"Difícil de mantenir en projectes grans"}),r.jsx("li",{children:"Tot està barrejat en un sol fitxer"})]}),r.jsx(E,{code:`// Tot en un sol lloc
String nomCotxe = "Toyota";
int kmCotxe = 50000;
System.out.println(nomCotxe);
// ... 500 linies mes ...`})]}),r.jsxs(G,{title:"Programació Orientada a Objectes",variant:"good",children:[r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[r.jsx("li",{children:"Codi organitzat en objectes"}),r.jsx("li",{children:"Dades i comportaments junts"}),r.jsx("li",{children:"Fàcil de reutilitzar"}),r.jsx("li",{children:"Fàcil de mantenir i escalar"}),r.jsx("li",{children:"Cada classe té la seva responsabilitat"})]}),r.jsx(E,{code:`// Organitzat en objectes
Cotxe toyota = new Cotxe("Toyota", 50000);
toyota.mostrarInfo();
// Clar, net, reutilitzable`})]})]}),r.jsx(C,{title:"Analogia: L'Edifici de La Salle"}),r.jsxs(S,{variant:"info",children:[r.jsxs("p",{children:["Imagina l'edifici de ",r.jsx("strong",{children:"La Salle"}),". L'edifici no és només un bloc de formigó; està organitzat en ",r.jsx("strong",{children:"plantes"}),", cada planta té ",r.jsx("strong",{children:"aules"}),", cada aula té",r.jsx("strong",{children:" cadires, taules, una pissarra"}),"... Cada element té les seves propietats i funcions."]}),r.jsxs("p",{style:{marginTop:"10px"},children:["En POO fem el mateix: en lloc de tenir tot el codi en un sol lloc, l'organitzem en",r.jsx("strong",{children:" classes"})," (els plànols) i creem ",r.jsx("strong",{children:"objectes"})," (les instàncies reals)."]})]}),r.jsx(E,{label:"L'edifici com a objectes",code:`// La classe es el planol
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
aulaJava.impartirClasse();`}),r.jsx(C,{title:"Els 4 Pilars de la POO"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["La POO es fonamenta en ",r.jsx("strong",{children:"4 pilars"})," fonamentals que fan que el codi sigui organitzat, segur, reutilitzable i flexible."]})}),r.jsxs(ge,{children:[r.jsxs(P,{title:"Encapsulació",variant:"blue",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Amagar les dades internes"})," d'un objecte i controlar-ne l'accés mitjançant mètodes públics (getters i setters)."]}),r.jsx("p",{style:{marginTop:"8px"},children:"Com una càpsula de medicament: no veus el contingut, però funciona."}),r.jsx(E,{code:`private String nom;
public String getNom() {
    return nom;
}`})]}),r.jsxs(P,{title:"Herència",variant:"yellow",children:[r.jsxs("p",{children:["Una classe pot ",r.jsx("strong",{children:"heretar"})," atributs i mètodes d'una altra classe. Permet reutilitzar codi i crear jerarquies."]}),r.jsx("p",{style:{marginTop:"8px"},children:"Com un fill que hereta característiques dels pares."}),r.jsx(E,{code:`class Animal {
    void menjar() { ... }
}
class Gos extends Animal {
    void bordar() { ... }
}`})]}),r.jsxs(P,{title:"Polimorfisme",variant:"green",children:[r.jsxs("p",{children:["Un mateix mètode pot tenir ",r.jsx("strong",{children:"comportaments diferents"})," segons l'objecte que l'executa."]}),r.jsx("p",{style:{marginTop:"8px"},children:'Com el verb "parlar": un humà parla, un gos borda, un gat miola.'}),r.jsx(E,{code:`Animal a = new Gos();
a.ferSo(); // "Bup bup!"
Animal b = new Gat();
b.ferSo(); // "Miau!"`})]}),r.jsxs(P,{title:"Abstracció",variant:"pink",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Simplificar la complexitat"})," mostrant només el que és necessari i amagant els detalls interns d'implementació."]}),r.jsx("p",{style:{marginTop:"8px"},children:"Com conduir un cotxe: només uses el volant i pedals, no veus el motor."}),r.jsx(E,{code:`// No cal saber COM funciona
cotxe.arrencar();
cotxe.accelerar();
// Nomes cal saber QUE fa`})]})]}),r.jsx(S,{variant:"success",title:"Resum",children:r.jsx("p",{children:"La POO ens permet organitzar el codi de manera que reflecteixi el món real. Cada objecte té les seves dades i els seus comportaments, i els 4 pilars (encapsulació, herència, polimorfisme i abstracció) ens ajuden a crear codi net, segur, reutilitzable i fàcil de mantenir."})})]})}function C1(){return r.jsxs("div",{children:[r.jsx(C,{title:"Classe vs Objecte"}),r.jsx(S,{variant:"info",title:"Concepte fonamental",children:r.jsxs("p",{children:["La diferència entre ",r.jsx("strong",{children:"classe"})," i ",r.jsx("strong",{children:"objecte"})," és un dels conceptes més importants de la POO. Entendre-la bé és clau per dominar la programació orientada a objectes."]})}),r.jsx(C,{title:"Analogia: El Plànol i la Casa"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["Imagina que vols construir una casa. Primer necessites un ",r.jsx("strong",{children:"plànol"})," (la classe) que descrigui com serà la casa: quantes habitacions tindrà, de quin color serà, quina superfície tindrà... Després, a partir d'aquest plànol, pots construir",r.jsx("strong",{children:" una o moltes cases"})," (els objectes). Cada casa pot tenir colors diferents, però totes segueixen el mateix plànol."]})}),r.jsxs(fe,{children:[r.jsx(G,{title:"Classe (El Plànol)",variant:"blue",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[r.jsxs("li",{children:["És la ",r.jsx("strong",{children:"plantilla"})," o definició"]}),r.jsx("li",{children:"Descriu quins atributs i mètodes tindran els objectes"}),r.jsx("li",{children:"No ocupa espai en memòria (fins que es crea un objecte)"}),r.jsx("li",{children:"Es defineix un cop"}),r.jsxs("li",{children:["Utilitza la paraula clau ",r.jsx("code",{children:"class"})]})]})}),r.jsx(G,{title:"Objecte (La Casa)",variant:"good",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[r.jsxs("li",{children:["És una ",r.jsx("strong",{children:"instància"})," concreta de la classe"]}),r.jsx("li",{children:"Té valors reals per a cada atribut"}),r.jsx("li",{children:"Ocupa espai en memòria"}),r.jsx("li",{children:"Se'n poden crear tants com es vulgui"}),r.jsxs("li",{children:["Es crea amb la paraula clau ",r.jsx("code",{children:"new"})]})]})})]}),r.jsx(C,{title:"Exemple: La Classe Cotxe"}),r.jsx(S,{variant:"info",children:r.jsxs("p",{children:["Vegem un exemple concret amb una classe ",r.jsx("code",{children:"Cotxe"}),". La classe defineix que tot cotxe té una marca, un model, un color i quilòmetres. Després podem crear tants cotxes com vulguem."]})}),r.jsx(E,{label:"Definició de la classe Cotxe (el plànol)",showLineNumbers:!0,code:`public class Cotxe {
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
}`}),r.jsx(C,{title:"Creació d'Objectes (Instanciació)"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["A partir de la classe ",r.jsx("code",{children:"Cotxe"}),", podem crear múltiples objectes. Cada objecte és independent i té els seus propis valors. Crear un objecte s'anomena ",r.jsx("strong",{children:"instanciar"}),"."]})}),r.jsx(E,{label:"Crear objectes a partir de la classe",showLineNumbers:!0,code:`public class Main {
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
}`}),r.jsx(C,{title:"Resum Visual"}),r.jsxs(ge,{children:[r.jsxs(P,{title:"Classe",variant:"blue",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Què és?"})," La plantilla / plànol"]}),r.jsxs("p",{style:{marginTop:"6px"},children:[r.jsx("strong",{children:"Paraula clau:"})," ",r.jsx("code",{children:"class"})]}),r.jsx("p",{style:{marginTop:"6px"},children:r.jsx("strong",{children:"Exemple:"})}),r.jsx(E,{code:"class Cotxe { ... }"})]}),r.jsxs(P,{title:"Objecte",variant:"yellow",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Què és?"})," Una instància real de la classe"]}),r.jsxs("p",{style:{marginTop:"6px"},children:[r.jsx("strong",{children:"Paraula clau:"})," ",r.jsx("code",{children:"new"})]}),r.jsx("p",{style:{marginTop:"6px"},children:r.jsx("strong",{children:"Exemple:"})}),r.jsx(E,{code:"Cotxe c = new Cotxe();"})]}),r.jsxs(P,{title:"Atributs",variant:"green",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Què són?"})," Les propietats de l'objecte"]}),r.jsxs("p",{style:{marginTop:"6px"},children:[r.jsx("strong",{children:"Exemples:"})," marca, color, km"]}),r.jsx("p",{style:{marginTop:"6px"},children:r.jsx("strong",{children:"Accés:"})}),r.jsx(E,{code:'cotxe1.marca = "Toyota";'})]}),r.jsxs(P,{title:"Mètodes",variant:"pink",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Què són?"})," Les accions que pot fer l'objecte"]}),r.jsxs("p",{style:{marginTop:"6px"},children:[r.jsx("strong",{children:"Exemples:"})," mostrarInfo(), conduir()"]}),r.jsx("p",{style:{marginTop:"6px"},children:r.jsx("strong",{children:"Crida:"})}),r.jsx(E,{code:"cotxe1.mostrarInfo();"})]})]}),r.jsx(S,{variant:"warning",title:"Recorda",children:r.jsxs("p",{children:["Una classe per si sola ",r.jsx("strong",{children:"no fa res"}),". És com tenir un plànol sense construir la casa. Has de crear objectes (",r.jsx("code",{children:"new"}),") per poder treballar amb les dades i cridar els mètodes."]})})]})}function k1(){return r.jsxs("div",{children:[r.jsx(C,{title:"Modificadors d'Accés i Encapsulació"}),r.jsx(S,{variant:"info",title:"Què són els modificadors d'accés?",children:r.jsxs("p",{children:["Els ",r.jsx("strong",{children:"modificadors d'accés"})," són paraules clau que controlen la ",r.jsx("strong",{children:"visibilitat"})," dels atributs i mètodes d'una classe. Determinen qui pot accedir a cada part del codi. Són fonamentals per aplicar l'",r.jsx("strong",{children:"encapsulació"}),", un dels 4 pilars de la POO."]})}),r.jsx(C,{title:"Tipus de Modificadors"}),r.jsx(re,{headers:["Modificador","Mateixa Classe","Mateix Paquet","Subclasse","Tothom"],rows:[{cells:["public","Sí","Sí","Sí","Sí"]},{cells:["protected","Sí","Sí","Sí","No"]},{cells:["(sense modificador)","Sí","Sí","No","No"]},{cells:["private","Sí","No","No","No"]}]}),r.jsxs(ge,{children:[r.jsxs(P,{title:"public",variant:"green",children:[r.jsxs("p",{children:["Accessible des de ",r.jsx("strong",{children:"qualsevol lloc"})," del programa."]}),r.jsx(E,{code:`public String nom;
public void saludar() { ... }`})]}),r.jsxs(P,{title:"private",variant:"pink",children:[r.jsxs("p",{children:["Només accessible dins de la ",r.jsx("strong",{children:"mateixa classe"}),"."]}),r.jsx(E,{code:`private int edat;
private void calcular() { ... }`})]}),r.jsxs(P,{title:"protected",variant:"yellow",children:[r.jsxs("p",{children:["Accessible dins del ",r.jsx("strong",{children:"mateix paquet"})," i per ",r.jsx("strong",{children:"subclasses"}),"."]}),r.jsx(E,{code:`protected double salari;
protected void processar() { ... }`})]}),r.jsxs(P,{title:"(default)",variant:"blue",children:[r.jsxs("p",{children:["Sense paraula clau. Accessible dins del ",r.jsx("strong",{children:"mateix paquet"}),"."]}),r.jsx(E,{code:`String ciutat;
void mostrar() { ... }`})]})]}),r.jsx(C,{title:"Encapsulació: Per què private?"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["L'",r.jsx("strong",{children:"encapsulació"})," consisteix a declarar els atributs com a ",r.jsx("code",{children:"private"})," i proporcionar mètodes ",r.jsx("code",{children:"public"})," (getters i setters) per accedir-hi de forma controlada. Així protegim les dades internes de l'objecte i evitem que es modifiquin de forma incorrecta."]})}),r.jsxs(fe,{children:[r.jsxs(G,{title:"MALAMENT: Sense encapsulació",variant:"bad",children:[r.jsx("p",{children:"Atributs públics: qualsevol pot modificar-los sense control."}),r.jsx(E,{showLineNumbers:!0,code:`public class Persona {
    public String nom;
    public int edat; // Qualsevol pot posar -5!
}

// Des d'un altre lloc:
Persona p = new Persona();
p.edat = -50; // Error logic! No hi ha control
p.nom = "";   // Nom buit acceptat!`}),r.jsx(S,{variant:"error",children:r.jsx("p",{children:"No hi ha cap validació. Es poden assignar valors incorrectes."})})]}),r.jsxs(G,{title:"BÉ: Amb encapsulació",variant:"good",children:[r.jsx("p",{children:"Atributs privats amb getters/setters que validen les dades."}),r.jsx(E,{showLineNumbers:!0,code:`public class Persona {
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
}`}),r.jsx(S,{variant:"success",children:r.jsx("p",{children:"Les dades estan protegides i validades."})})]})]}),r.jsx(C,{title:"Getters i Setters"}),r.jsx(S,{variant:"info",children:r.jsxs("p",{children:["Els ",r.jsx("strong",{children:"getters"})," són mètodes que retornen el valor d'un atribut privat. Els ",r.jsx("strong",{children:"setters"})," són mètodes que permeten modificar el valor d'un atribut privat, habitualment amb validació."]})}),r.jsx(E,{label:"Exemple complet amb getters i setters",showLineNumbers:!0,code:`public class Alumne {
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
}`}),r.jsx(E,{label:"Ús des del main",code:`public class Main {
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
}`}),r.jsx(S,{variant:"success",title:"Convenció de noms",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Getter:"})," ",r.jsx("code",{children:"getAtribut()"})," - retorna el valor (per booleans: ",r.jsx("code",{children:"isAtribut()"}),")"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Setter:"})," ",r.jsx("code",{children:"setAtribut(valor)"})," - modifica el valor"]}),r.jsxs("li",{children:["Sempre comencen amb ",r.jsx("code",{children:"get"})," o ",r.jsx("code",{children:"set"})," seguit del nom de l'atribut amb la primera lletra en majúscula"]})]})})]})}function us({code:e,language:t="java",label:n,defaultOpen:a=!1}){const[i,s]=R.useState(a);return r.jsxs("div",{style:{margin:"16px 0"},children:[r.jsx(Nn,{size:"small",variant:"secondary",onClick:()=>s(!i),children:i?"Amagar Codi":"Veure Codi"}),i&&r.jsx(E,{code:e,language:t,label:n})]})}function R1(){return r.jsxs("div",{children:[r.jsx(C,{title:"Constructors i la Paraula Clau this"}),r.jsx(S,{variant:"info",title:"Què és un constructor?",children:r.jsxs("p",{children:["Un ",r.jsx("strong",{children:"constructor"})," és un mètode especial que s'executa automàticament quan es crea un objecte amb ",r.jsx("code",{children:"new"}),". Serveix per ",r.jsx("strong",{children:"inicialitzar"})," els atributs de l'objecte amb valors inicials. El constructor té el ",r.jsx("strong",{children:"mateix nom que la classe"})," i ",r.jsx("strong",{children:"no té tipus de retorn"})," (ni tan sols ",r.jsx("code",{children:"void"}),")."]})}),r.jsx(C,{title:"Sintaxi del Constructor"}),r.jsx(E,{label:"Estructura bàsica d'un constructor",showLineNumbers:!0,code:`public class NomClasse {
    // Atributs
    private String atribut1;
    private int atribut2;

    // Constructor (mateix nom que la classe, sense tipus de retorn)
    public NomClasse(String atribut1, int atribut2) {
        this.atribut1 = atribut1;
        this.atribut2 = atribut2;
    }
}`}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["Fixa't que el constructor ",r.jsx("strong",{children:"no té"})," ",r.jsx("code",{children:"void"})," ni cap altre tipus de retorn. Si hi poses ",r.jsx("code",{children:"void"}),", Java ho tractarà com un mètode normal, no com un constructor!"]})}),r.jsx(C,{title:"La Paraula Clau this"}),r.jsx(S,{variant:"info",children:r.jsxs("p",{children:["La paraula clau ",r.jsx("code",{children:"this"})," fa referència a l'",r.jsx("strong",{children:"objecte actual"}),". S'utilitza principalment quan el nom del paràmetre del constructor (o mètode) coincideix amb el nom de l'atribut de la classe."]})}),r.jsxs(fe,{children:[r.jsxs(G,{title:"Sense this (problema)",variant:"bad",children:[r.jsx(E,{code:`public Cotxe(String marca) {
    marca = marca; // ERROR!
    // Assigna el parametre a si mateix
    // L'atribut NO es modifica
}`}),r.jsx(S,{variant:"error",children:r.jsx("p",{children:"Java no sap distingir entre l'atribut i el paràmetre. L'atribut queda sense valor."})})]}),r.jsxs(G,{title:"Amb this (correcte)",variant:"good",children:[r.jsx(E,{code:`public Cotxe(String marca) {
    this.marca = marca; // CORRECTE!
    // this.marca = atribut de la classe
    // marca = parametre del constructor
}`}),r.jsx(S,{variant:"success",children:r.jsxs("p",{children:[r.jsx("code",{children:"this.marca"})," es refereix a l'atribut de l'objecte. ",r.jsx("code",{children:"marca"})," és el paràmetre."]})})]})]}),r.jsx(C,{title:"Exemple Complet"}),r.jsx(E,{label:"Classe Cotxe amb constructor",showLineNumbers:!0,code:`public class Cotxe {
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
}`}),r.jsx(E,{label:"Crear objectes amb el constructor",code:`public class Main {
    public static void main(String[] args) {
        // Ara podem inicialitzar en UNA sola linia!
        Cotxe c1 = new Cotxe("Toyota", "Corolla", 15000);
        Cotxe c2 = new Cotxe("BMW", "Serie 3", 30000);

        c1.mostrarInfo(); // Toyota Corolla - 15000 km
        c2.mostrarInfo(); // BMW Serie 3 - 30000 km
    }
}`}),r.jsx(C,{title:"Sobrecàrrega de Constructors"}),r.jsx(S,{variant:"info",title:"Què és la sobrecàrrega?",children:r.jsxs("p",{children:["Una classe pot tenir ",r.jsx("strong",{children:"múltiples constructors"})," amb diferent nombre o tipus de paràmetres. Això s'anomena ",r.jsx("strong",{children:"sobrecàrrega de constructors"})," (constructor overloading). Java selecciona automàticament el constructor adequat segons els arguments que li passem."]})}),r.jsx(E,{label:"Sobrecàrrega de constructors",showLineNumbers:!0,code:`public class Cotxe {
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
}`}),r.jsx(E,{label:"Usar els diferents constructors",code:`Cotxe c1 = new Cotxe("Toyota", "Corolla", 15000); // Constructor 1
Cotxe c2 = new Cotxe("BMW", "Serie 3");             // Constructor 2
Cotxe c3 = new Cotxe();                             // Constructor 3`}),r.jsx(C,{title:"Errors Comuns"}),r.jsxs(ge,{children:[r.jsxs(P,{title:"Posar void al constructor",variant:"pink",children:[r.jsxs("p",{children:["Si afegeixes ",r.jsx("code",{children:"void"}),", Java ho tracta com un mètode normal, no com un constructor."]}),r.jsx(E,{code:`// MALAMENT:
public void Cotxe(String marca) {
    this.marca = marca;
}
// Aixo NO es un constructor!`})]}),r.jsxs(P,{title:"No usar this",variant:"pink",children:[r.jsxs("p",{children:["Si el paràmetre té el mateix nom que l'atribut i no uses ",r.jsx("code",{children:"this"}),", l'atribut no es modifica."]}),r.jsx(E,{code:`// MALAMENT:
public Cotxe(String marca) {
    marca = marca; // No fa res!
}
// BE:
public Cotxe(String marca) {
    this.marca = marca;
}`})]}),r.jsxs(P,{title:"Nom diferent de la classe",variant:"pink",children:[r.jsxs("p",{children:["El constructor ha de tenir ",r.jsx("strong",{children:"exactament"})," el mateix nom que la classe."]}),r.jsx(E,{code:`// MALAMENT:
public class Cotxe {
    public cotxe() { } // minuscula!
}
// BE:
public class Cotxe {
    public Cotxe() { } // Correcte
}`})]}),r.jsxs(P,{title:"Constructor per defecte",variant:"yellow",children:[r.jsx("p",{children:"Si no defineixes cap constructor, Java en crea un de buit automàticament. Però si defineixes un constructor amb paràmetres, el buit desapareix."}),r.jsx(E,{code:`// Si tens:
public Cotxe(String marca) { ... }

// Aleshores AIXO ja no funciona:
Cotxe c = new Cotxe(); // ERROR!
// Has d'afegir el constructor buit`})]})]}),r.jsx(us,{label:"Exemple complet: Classe Estudiant amb sobrecàrrega",code:`public class Estudiant {
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
}`}),r.jsx(S,{variant:"success",title:"Resum",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:["El constructor inicialitza l'objecte quan es crea amb ",r.jsx("code",{children:"new"})]}),r.jsx("li",{children:"Té el mateix nom que la classe i no té tipus de retorn"}),r.jsxs("li",{children:[r.jsx("code",{children:"this"})," es refereix a l'objecte actual i diferencia atributs de paràmetres"]}),r.jsx("li",{children:"La sobrecàrrega permet múltiples constructors amb paràmetres diferents"})]})})]})}const L1=`// Classe PARE (superclasse)
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
}`,A1=`// Classe FILLA (subclasse) - hereta d'Animal
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
}`,M1=`public class Main {
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
}`,N1=`public class Animal {
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
// Constructor de Gos: Pastor Alemany`,P1=`public class Animal {
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
// Raca: Pastor Alemany`,_1=`public class Animal {
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
mia.ferSoroll();  // Mia fa: Miau!`,T1=`public class Animal {
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
}`,O1=`// ============ CLASSE PARE ============
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
}`,D1=`public class Main {
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
}`;function I1(){return r.jsxs("div",{children:[r.jsx(C,{title:"Herència en Java"}),r.jsx(S,{variant:"info",title:"Què és l'herència?",children:r.jsxs("p",{children:["L'",r.jsx("strong",{children:"herència"})," és un dels pilars fonamentals de la Programació Orientada a Objectes. Permet que una classe ",r.jsx("strong",{children:"filla"})," (subclasse) hereti els atributs i mètodes d'una classe ",r.jsx("strong",{children:"pare"})," (superclasse). D'aquesta manera, podem ",r.jsx("strong",{children:"reutilitzar codi"})," i crear jerarquies de classes organitzades."]})}),r.jsxs(S,{variant:"explanation",title:"Analogia del món real",children:[r.jsxs("p",{children:["Pensa en els animals. Tots els animals comparteixen comportaments comuns:",r.jsx("strong",{children:" menjar"}),", ",r.jsx("strong",{children:"dormir"}),", ",r.jsx("strong",{children:"moure's"}),"... Però cada tipus d'animal té comportaments propis: un gos pot ",r.jsx("strong",{children:"bordar"}),", un gat pot ",r.jsx("strong",{children:"miolar"}),", un ocell pot ",r.jsx("strong",{children:"volar"}),"."]}),r.jsxs("p",{style:{marginTop:"8px"},children:['En lloc de repetir "menjar" i "dormir" a cada classe (Gos, Gat, Ocell...), definim aquests comportaments comuns a la classe ',r.jsx("strong",{children:"Animal"})," i fem que cada animal en concret els ",r.jsx("strong",{children:"hereti"}),"."]})]}),r.jsx(C,{title:"Terminologia"}),r.jsx(re,{headers:["Terme","Altres noms","Descripció"],rows:[{cells:["Classe pare","Superclasse, classe base","La classe de la qual s'hereten atributs i mètodes"]},{cells:["Classe filla","Subclasse, classe derivada","La classe que hereta d'una altra i pot afegir funcionalitat pròpia"]},{cells:["extends","Paraula clau","S'utilitza per indicar que una classe hereta d'una altra"]},{cells:["super","Paraula clau","Permet accedir al constructor o mètodes de la classe pare"]},{cells:["@Override","Anotació","Indica que un mètode sobreescriu un mètode del pare"]}]}),r.jsx(C,{title:"Sintaxi Bàsica i Exemple"}),r.jsxs(S,{variant:"info",children:[r.jsxs("p",{children:["Per indicar que una classe hereta d'una altra, s'utilitza la paraula clau ",r.jsx("code",{children:"extends"}),":"]}),r.jsx("p",{style:{marginTop:"8px"},children:r.jsxs("code",{children:["public class Filla ",r.jsx("strong",{children:"extends"})," Pare ","{ ... }"]})})]}),r.jsx(E,{label:"Classe pare: Animal",code:L1,showLineNumbers:!0}),r.jsx(E,{label:"Classes filles: Gos i Gat",code:A1,showLineNumbers:!0}),r.jsx(E,{label:"Utilitzar l'herència",code:M1,showLineNumbers:!0}),r.jsx(S,{variant:"success",title:"Què ha passat?",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:[r.jsx("code",{children:"Gos"})," i ",r.jsx("code",{children:"Gat"})," hereten ",r.jsx("code",{children:"menjar()"}),", ",r.jsx("code",{children:"dormir()"})," i ",r.jsx("code",{children:"mostrarInfo()"})," d'Animal ",r.jsx("strong",{children:"sense haver de reescriure el codi"}),"."]}),r.jsxs("li",{children:["Cada subclasse pot tenir ",r.jsx("strong",{children:"mètodes propis"})," (",r.jsx("code",{children:"bordar()"}),", ",r.jsx("code",{children:"miolar()"}),") que no existeixen al pare."]}),r.jsxs("li",{children:["Un ",r.jsx("code",{children:"Gos"})," no pot usar ",r.jsx("code",{children:"miolar()"})," perquè és exclusiu de ",r.jsx("code",{children:"Gat"}),"."]})]})}),r.jsx(C,{title:"La Paraula Clau super"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["La paraula clau ",r.jsx("code",{children:"super"})," serveix per accedir als membres de la classe ",r.jsx("strong",{children:"pare"})," des de la classe filla. Té dos usos principals:"]})}),r.jsxs(fe,{children:[r.jsxs(G,{title:"super() - Cridar al constructor del pare",variant:"blue",children:[r.jsxs("p",{style:{marginBottom:"10px"},children:["S'utilitza dins del constructor de la classe filla per cridar al constructor de la classe pare. ",r.jsx("strong",{children:"Ha de ser la primera instrucció"})," del constructor."]}),r.jsx(E,{code:`public Gos(String nom, String raca) {
    super(nom);  // Crida Animal(String nom)
    this.raca = raca;
}`})]}),r.jsxs(G,{title:"super.mètode() - Cridar un mètode del pare",variant:"good",children:[r.jsxs("p",{style:{marginBottom:"10px"},children:["S'utilitza per cridar un mètode de la classe pare, especialment quan la classe filla l'ha ",r.jsx("strong",{children:"sobreescrit"})," (override)."]}),r.jsx(E,{code:`@Override
public void mostrarInfo() {
    super.mostrarInfo(); // Crida el del pare
    System.out.println("Raca: " + raca);
}`})]})]}),r.jsx(E,{label:"Exemple de super() en constructors",code:N1,showLineNumbers:!0}),r.jsx(E,{label:"Exemple de super.mètode()",code:P1,showLineNumbers:!0}),r.jsx(S,{variant:"warning",title:"Regles de super()",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:[r.jsx("code",{children:"super()"})," ha de ser la ",r.jsx("strong",{children:"primera instrucció"})," del constructor de la classe filla."]}),r.jsxs("li",{children:["Si el pare no té un constructor sense paràmetres, la classe filla ",r.jsx("strong",{children:"ha de cridar"})," ",r.jsx("code",{children:"super(...)"})," amb els arguments corresponents."]}),r.jsxs("li",{children:["Si no escrius ",r.jsx("code",{children:"super()"}),", Java l'afegeix automàticament (només si el pare té constructor sense paràmetres)."]})]})}),r.jsx(C,{title:"Sobreescriptura de Mètodes (@Override)"}),r.jsx(S,{variant:"info",title:"Què és la sobreescriptura?",children:r.jsxs("p",{children:["La ",r.jsx("strong",{children:"sobreescriptura"})," (override) permet que una classe filla",r.jsx("strong",{children:" redefineixi"})," un mètode que ha heretat del pare. La classe filla proporciona la seva pròpia implementació del mètode, substituint la del pare. L'anotació ",r.jsx("code",{children:"@Override"})," no és obligatòria, però és molt",r.jsx("strong",{children:" recomanable"})," perquè ajuda a detectar errors."]})}),r.jsx(E,{label:"Exemple de sobreescriptura: ferSoroll()",code:_1,showLineNumbers:!0}),r.jsx(S,{variant:"explanation",title:"Per què @Override és important?",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:["Si escrius ",r.jsx("code",{children:"@Override"})," i el mètode NO existeix al pare, Java et donarà un ",r.jsx("strong",{children:"error de compilació"}),". Això evita errors per noms mal escrits."]}),r.jsxs("li",{children:["Fa el codi més ",r.jsx("strong",{children:"llegible"}),": queda clar que el mètode ve del pare."]}),r.jsxs("li",{children:["El mètode sobreescrit ha de tenir la ",r.jsx("strong",{children:"mateixa signatura"})," (nom, paràmetres i tipus de retorn) que el del pare."]})]})}),r.jsx(C,{title:"El Modificador d'Accés protected"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["Quan treballem amb herència, el modificador d'accés ",r.jsx("code",{children:"protected"})," és molt útil. Permet que els atributs i mètodes siguin accessibles des de la",r.jsx("strong",{children:" mateixa classe"}),", les ",r.jsx("strong",{children:"subclasses"})," i les classes del",r.jsx("strong",{children:" mateix paquet"}),", però no des de classes externes."]})}),r.jsx(re,{headers:["Modificador","Mateixa classe","Subclasse","Mateix paquet","Altres classes"],rows:[{cells:["private","Sí","No","No","No"]},{cells:["protected","Sí","Sí","Sí","No"]},{cells:["public","Sí","Sí","Sí","Sí"]}]}),r.jsx(E,{label:"Exemple d'accés protected en herència",code:T1,showLineNumbers:!0}),r.jsx(S,{variant:"info",title:"Quan usar protected?",children:r.jsxs("p",{children:["Usa ",r.jsx("code",{children:"protected"})," per als atributs que vols que les classes filles puguin accedir ",r.jsx("strong",{children:"directament"}),", sense necessitat de getters. Si vols més control i encapsulació, utilitza ",r.jsx("code",{children:"private"})," amb getters/setters ",r.jsx("code",{children:"public"})," o ",r.jsx("code",{children:"protected"}),"."]})}),r.jsx(C,{title:"Exemple Complet: Vehicle, Cotxe i Moto"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["Vegem un exemple complet que combina tot el que hem après: herència,",r.jsx("code",{children:" super"}),", ",r.jsx("code",{children:"@Override"}),", atributs ",r.jsx("code",{children:"protected"}),", mètodes propis i mètodes heretats."]})}),r.jsx(E,{label:"Jerarquia completa: Vehicle → Cotxe, Moto",code:O1,showLineNumbers:!0}),r.jsx(E,{label:"Utilitzar la jerarquia de vehicles",code:D1,showLineNumbers:!0}),r.jsx(C,{title:"Regles Importants de l'Herència en Java"}),r.jsx(S,{variant:"warning",title:"Regles clau que has de recordar",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Herència simple:"})," Java només permet heretar d'UNA sola classe. No es pot fer ",r.jsx("code",{children:"class A extends B, C"}),". (Les ",r.jsx("em",{children:"interfaces"})," permeten una alternativa, però és un tema més avançat.)"]}),r.jsxs("li",{style:{marginTop:"8px"},children:[r.jsx("strong",{children:"Totes les classes hereten d'Object:"})," Si una classe no té",r.jsx("code",{children:" extends"}),", Java automàticament fa que hereti de la classe ",r.jsx("code",{children:"Object"}),". Per això totes les classes tenen mètodes com ",r.jsx("code",{children:"toString()"}),",",r.jsx("code",{children:" equals()"}),", etc."]}),r.jsxs("li",{style:{marginTop:"8px"},children:[r.jsx("strong",{children:"Classes final:"})," Si una classe es declara ",r.jsx("code",{children:"final"}),",",r.jsx("strong",{children:" no pot ser heretada"}),". Per exemple, ",r.jsxs("code",{children:["final class Utilitats ","{ ... }"]})," no es pot estendre."]})]})}),r.jsxs(ge,{children:[r.jsx(P,{title:"Herència Simple",variant:"blue",children:r.jsx(E,{code:`// CORRECTE: una sola classe pare
class Gos extends Animal { }

// ERROR: multiples classes pare
class Gos extends Animal, Mascota { }
// Aixo NO es pot fer en Java!`})}),r.jsx(P,{title:"Totes hereten d'Object",variant:"yellow",children:r.jsx(E,{code:`// Aquestes dues declaracions son equivalents:
class Animal { }
class Animal extends Object { }

// Per aixo pots fer:
Animal a = new Animal();
a.toString();  // Heretat d'Object
a.equals(b);   // Heretat d'Object`})}),r.jsx(P,{title:"Classes final",variant:"green",children:r.jsx(E,{code:`// Aquesta classe NO es pot heretar
final class Constants {
    static final double PI = 3.14159;
}

// ERROR de compilacio!
class MesConstants extends Constants { }
// No es pot estendre una classe final`})})]}),r.jsx(S,{variant:"success",title:"Resum",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:["L'herència permet que una classe filla hereti atributs i mètodes d'una classe pare amb ",r.jsx("code",{children:"extends"}),"."]}),r.jsxs("li",{children:[r.jsx("code",{children:"super()"})," crida al constructor del pare; ",r.jsx("code",{children:"super.mètode()"})," crida un mètode del pare."]}),r.jsxs("li",{children:[r.jsx("code",{children:"@Override"})," indica que la classe filla redefineix un mètode del pare."]}),r.jsxs("li",{children:[r.jsx("code",{children:"protected"})," fa que els atributs siguin accessibles des de les subclasses."]}),r.jsxs("li",{children:["Java només permet ",r.jsx("strong",{children:"herència simple"})," (un sol pare)."]}),r.jsxs("li",{children:["Totes les classes hereten implícitament de ",r.jsx("code",{children:"Object"}),"."]}),r.jsxs("li",{children:["Les classes ",r.jsx("code",{children:"final"})," no poden ser heretades."]})]})})]})}function F1(){return r.jsxs("div",{children:[r.jsx(C,{title:"Exemple Complet: Sistema de Biblioteca"}),r.jsx(S,{variant:"info",title:"Objectiu",children:r.jsxs("p",{children:["Crearem un sistema de gestió d'una biblioteca utilitzant els conceptes de POO que hem après: classes, objectes, constructors, encapsulació (getters/setters) i packages. El sistema tindrà tres classes: ",r.jsx("code",{children:"Llibre"}),", ",r.jsx("code",{children:"Autor"})," i ",r.jsx("code",{children:"Biblioteca"}),"."]})}),r.jsx(C,{title:"Estructura del Projecte"}),r.jsx(E,{label:"Organització en packages",language:"bash",code:`biblioteca/
  src/
    model/
      Llibre.java
      Autor.java
    gestio/
      Biblioteca.java
    app/
      Main.java`}),r.jsxs(ge,{children:[r.jsxs(P,{title:"Classe Autor",variant:"blue",children:[r.jsx("p",{children:"Representa un autor amb nom i nacionalitat."}),r.jsxs("p",{style:{marginTop:"6px"},children:["Atributs: ",r.jsx("code",{children:"nom"}),", ",r.jsx("code",{children:"nacionalitat"})]})]}),r.jsxs(P,{title:"Classe Llibre",variant:"yellow",children:[r.jsx("p",{children:"Representa un llibre amb títol, autor, any i disponibilitat."}),r.jsxs("p",{style:{marginTop:"6px"},children:["Atributs: ",r.jsx("code",{children:"títol"}),", ",r.jsx("code",{children:"autor"}),", ",r.jsx("code",{children:"any"}),", ",r.jsx("code",{children:"disponible"})]})]}),r.jsxs(P,{title:"Classe Biblioteca",variant:"green",children:[r.jsx("p",{children:"Gestiona una col·lecció de llibres amb operacions CRUD."}),r.jsxs("p",{style:{marginTop:"6px"},children:["Mètodes: ",r.jsx("code",{children:"afegir"}),", ",r.jsx("code",{children:"buscar"}),", ",r.jsx("code",{children:"prestar"}),", ",r.jsx("code",{children:"retornar"})]})]}),r.jsx(P,{title:"Classe Main",variant:"pink",children:r.jsx("p",{children:"Punt d'entrada del programa per provar el sistema."})})]}),r.jsx(C,{title:"Classe Autor"}),r.jsx(E,{label:"model/Autor.java",showLineNumbers:!0,code:`package model;

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
}`}),r.jsx(C,{title:"Classe Llibre"}),r.jsx(E,{label:"model/Llibre.java",showLineNumbers:!0,code:`package model;

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
}`}),r.jsx(S,{variant:"explanation",title:"Composició",children:r.jsxs("p",{children:["Fixa't que la classe ",r.jsx("code",{children:"Llibre"})," té un atribut de tipus ",r.jsx("code",{children:"Autor"}),". Això s'anomena ",r.jsx("strong",{children:"composició"}),`: un objecte conté un altre objecte. És una relació "TÉ UN" (un llibre TÉ UN autor). Així evitem duplicar les dades de l'autor en cada llibre.`]})}),r.jsx(C,{title:"Classe Biblioteca"}),r.jsx(E,{label:"gestio/Biblioteca.java",showLineNumbers:!0,code:`package gestio;

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
}`}),r.jsx(C,{title:"Classe Main (Punt d'entrada)"}),r.jsx(E,{label:"app/Main.java",showLineNumbers:!0,code:`package app;

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
}`}),r.jsx(C,{title:"Sortida del Programa"}),r.jsx(us,{label:"Resultat esperat a la consola",language:"bash",defaultOpen:!0,code:`Llibre afegit: Cent anys de solitud
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
Total: 3 llibres`}),r.jsx(C,{title:"Conceptes Aplicats"}),r.jsxs(ge,{children:[r.jsx(P,{title:"Encapsulació",variant:"blue",children:r.jsxs("p",{children:["Tots els atributs són ",r.jsx("code",{children:"private"})," amb getters i setters."]})}),r.jsx(P,{title:"Constructors",variant:"yellow",children:r.jsxs("p",{children:["Cada classe té un constructor que inicialitza els atributs amb ",r.jsx("code",{children:"this"}),"."]})}),r.jsx(P,{title:"Composició",variant:"green",children:r.jsxs("p",{children:[r.jsx("code",{children:"Llibre"})," conté un objecte ",r.jsx("code",{children:"Autor"}),". ",r.jsx("code",{children:"Biblioteca"})," conté un array de ",r.jsx("code",{children:"Llibre"}),"."]})}),r.jsx(P,{title:"Packages",variant:"pink",children:r.jsxs("p",{children:["Classes organitzades en packages: ",r.jsx("code",{children:"model"}),", ",r.jsx("code",{children:"gestio"}),", ",r.jsx("code",{children:"app"}),"."]})})]}),r.jsx(S,{variant:"success",title:"Resum",children:r.jsx("p",{children:"Aquest exemple mostra com la POO ens permet crear un sistema complet i organitzat. Cada classe té una responsabilitat clara, les dades estan protegides amb encapsulació, i el codi està organitzat en packages. Així és com es programen les aplicacions reals."})})]})}const jl=[{name:"src/",type:"folder",description:"Carpeta arrel del codi font. Conté tots els fitxers .java organitzats en packages."},{name:"  model/",type:"folder",description:"Package que conté les classes de dades (entitats). Representen els objectes del domini: Producte, Client, Comanda..."},{name:"    Producte.java",type:"file",description:"Classe que representa un producte amb atributs privats (nom, preu, estoc), constructor, getters i setters. És una classe de model pura, sense lògica de negoci."},{name:"    Client.java",type:"file",description:"Classe que representa un client amb nom, email i historial de compres. Encapsula totes les dades del client amb validació als setters."},{name:"  servei/",type:"folder",description:"Package que conté la lògica de negoci. Aquí és on es fan els càlculs, validacions i operacions complexes."},{name:"    GestorProductes.java",type:"file",description:"Classe que gestiona la col·lecció de productes: afegir, eliminar, buscar, calcular el valor total de l'inventari. Utilitza objectes de la classe Producte."},{name:"    GestorComandes.java",type:"file",description:"Classe que gestiona les comandes: crear comanda, afegir productes, calcular total, aplicar descomptes. Coordina Producte i Client."},{name:"  app/",type:"folder",description:"Package que conté el punt d'entrada de l'aplicació. Aquí és on està el main() que inicia el programa."},{name:"    Main.java",type:"file",description:"Classe principal amb el mètode main(). Crea objectes de les altres classes, els connecta i executa el programa. És el punt d'entrada."}];function q1(){const[e,t]=R.useState(null);return r.jsxs("div",{children:[r.jsx(C,{title:"Introducció a la Modularitat"}),r.jsx(S,{variant:"info",title:"Què és la modularitat?",children:r.jsxs("p",{children:["La ",r.jsx("strong",{children:"modularitat"})," és el principi de dividir un programa en parts més petites, independents i reutilitzables, anomenades ",r.jsx("strong",{children:"mòduls"}),". Cada mòdul té una responsabilitat concreta i ben definida. En Java, els mòduls són les ",r.jsx("strong",{children:"classes"})," organitzades en ",r.jsx("strong",{children:"packages"}),"."]})}),r.jsx(C,{title:"Analogia: La Ciutat"}),r.jsxs(S,{variant:"explanation",children:[r.jsxs("p",{children:["Imagina una ",r.jsx("strong",{children:"ciutat"}),". Una ciutat no és un sol edifici gegant on tot passa al mateix lloc. Està organitzada en zones: zona residencial, zona comercial, hospitals, escoles, parcs... Cada zona té la seva funció i són independents entre si, però es connecten mitjançant carrers i transport."]}),r.jsx("p",{style:{marginTop:"10px"},children:'Un programa modular funciona igual: cada classe és com una "zona" de la ciutat, amb una funció clara. Les classes es comuniquen entre si creant objectes i cridant mètodes, com els carrers que connecten les zones.'})]}),r.jsxs(ge,{children:[r.jsx(P,{title:"Zona Residencial = Classe Model",variant:"blue",children:r.jsxs("p",{children:["On viuen les dades. Classes com ",r.jsx("code",{children:"Producte"}),", ",r.jsx("code",{children:"Client"})," que emmagatzemen informació."]})}),r.jsx(P,{title:"Zona Comercial = Classe Servei",variant:"yellow",children:r.jsxs("p",{children:["On passa la lògica de negoci. Classes com ",r.jsx("code",{children:"GestorProductes"})," que processen dades."]})}),r.jsx(P,{title:"Ajuntament = Classe Main",variant:"green",children:r.jsxs("p",{children:["El punt central que coordina tot. El ",r.jsx("code",{children:"main()"})," inicia i connecta les parts."]})}),r.jsx(P,{title:"Carrers = Objectes i Mètodes",variant:"pink",children:r.jsx("p",{children:"La comunicació entre mòduls. Crear objectes i cridar mètodes connecta les classes."})})]}),r.jsx(C,{title:"Per què codi modular?"}),r.jsxs(ge,{children:[r.jsx(P,{title:"Fàcil de mantenir",variant:"blue",children:r.jsx("p",{children:"Si alguna cosa falla, saps exactament a quina classe mirar. No cal revisar 1000 línies de codi."})}),r.jsx(P,{title:"Reutilitzable",variant:"yellow",children:r.jsx("p",{children:"Una classe ben feta es pot reutilitzar en altres projectes. Escrius el codi un cop, l'uses moltes vegades."})}),r.jsx(P,{title:"Treball en equip",variant:"green",children:r.jsx("p",{children:"Cada persona pot treballar en una classe diferent sense interferir amb els altres."})}),r.jsx(P,{title:"Fàcil de testejar",variant:"pink",children:r.jsx("p",{children:"Pots provar cada classe per separat (tests unitaris) abans de juntar-ho tot."})})]}),r.jsx(C,{title:"Explorador d'Estructura de Projecte"}),r.jsx(S,{variant:"info",children:r.jsx("p",{children:"Fes clic a qualsevol fitxer o carpeta per veure la seva descripció i entendre la seva funció dins del projecte modular."})}),r.jsxs("div",{style:{display:"flex",gap:"20px",marginTop:"16px",flexWrap:"wrap"},children:[r.jsxs("div",{style:{flex:"1",minWidth:"280px",backgroundColor:"#1e2837",borderRadius:"8px",padding:"16px",fontFamily:"monospace",fontSize:"14px"},children:[r.jsx("div",{style:{color:"#ffd700",marginBottom:"12px",fontWeight:"bold"},children:"Estructura del Projecte"}),jl.map((n,a)=>r.jsxs("div",{onClick:()=>t(a),style:{padding:"6px 8px",cursor:"pointer",borderRadius:"4px",color:e===a?"#ffd700":n.type==="folder"?"#90cdf4":"#e8eef5",backgroundColor:e===a?"rgba(255, 215, 0, 0.1)":"transparent",fontWeight:n.type==="folder"?"bold":"normal",transition:"background-color 0.2s"},onMouseOver:i=>{e!==a&&(i.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.05)")},onMouseOut:i=>{e!==a&&(i.currentTarget.style.backgroundColor="transparent")},children:[n.type==="folder"?"📁 ":"📄 ",n.name]},a))]}),r.jsx("div",{style:{flex:"1",minWidth:"280px",backgroundColor:"#f0f4f8",borderRadius:"8px",padding:"20px",border:"2px solid #d0dae6"},children:e!==null?r.jsxs(r.Fragment,{children:[r.jsx("h4",{style:{color:"#1a4d8f",marginBottom:"12px"},children:jl[e].name.trim()}),r.jsx("p",{style:{color:"#4a5568",lineHeight:"1.6"},children:jl[e].description})]}):r.jsx("p",{style:{color:"#a0aec0",fontStyle:"italic"},children:"Selecciona un fitxer o carpeta per veure la seva descripció."})})]}),r.jsx(C,{title:"Exemple Bàsic de Modularitat"}),r.jsx(E,{label:"Dues classes separades que col·laboren",showLineNumbers:!0,code:`// Fitxer: Salutador.java
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
}`}),r.jsx(S,{variant:"success",title:"Resum",children:r.jsx("p",{children:"La modularitat és dividir el programa en classes amb responsabilitats clares. Cada classe és un mòdul independent que es pot reutilitzar, testejar i mantenir per separat. Les classes es comuniquen creant objectes i cridant mètodes."})})]})}function z1(){return r.jsxs("div",{children:[r.jsx(C,{title:"El Problema del Codi Monolític"}),r.jsx(S,{variant:"warning",title:"Què és un programa monolític?",children:r.jsxs("p",{children:["Un programa ",r.jsx("strong",{children:"monolític"})," és aquell on ",r.jsx("strong",{children:"tot el codi"})," està en un sol fitxer o classe. Totes les variables, tota la lògica, totes les funcionalitats... tot barrejat en un únic ",r.jsx("code",{children:"main()"}),". Funciona per a programes petits, però es converteix en un problema seriós a mesura que el programa creix."]})}),r.jsx(C,{title:"Exemple: Tot en un sol fitxer"}),r.jsx(E,{label:"Programa monolític (MAL disseny)",showLineNumbers:!0,code:`public class MonoliticApp {
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
}`}),r.jsx(C,{title:"Monolític vs Modular"}),r.jsxs(fe,{children:[r.jsx(G,{title:"Programa Monolític",variant:"bad",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Tot en un sol fitxer:"})," variables, lògica, sortida... tot barrejat"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Difícil de llegir:"})," quan el programa creix, és impossible entendre-ho"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Difícil de mantenir:"})," un canvi pot trencar tot el programa"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"No reutilitzable:"})," no pots reutilitzar parts del codi en altres projectes"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"No testejable:"})," no pots provar una funcionalitat sense executar-ho tot"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Conflictes en equip:"})," dues persones no poden treballar al mateix fitxer sense conflictes"]})]})}),r.jsx(G,{title:"Programa Modular",variant:"good",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Classes separades:"})," cada classe té una responsabilitat"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Fàcil de llegir:"})," cada fitxer és curt i clar"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Fàcil de mantenir:"})," un canvi en una classe no afecta les altres"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Reutilitzable:"})," pots usar les classes en altres projectes"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Testejable:"})," pots provar cada classe per separat"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Treball en equip:"})," cada persona treballa en una classe diferent"]})]})})]}),r.jsx(C,{title:"Problemes Concrets del Codi Monolític"}),r.jsxs(ge,{children:[r.jsx(P,{title:"Efecte Espagueti",variant:"pink",children:r.jsx("p",{children:"El codi s'entrelliga com els espaguetis. Una variable definida a la línia 10 s'utilitza a la línia 200 i es modifica a la línia 450. Impossible de seguir."})}),r.jsx(P,{title:"Duplicació de Codi",variant:"pink",children:r.jsx("p",{children:"Sense mòduls, acabes copiant i enganxant el mateix codi en diversos llocs. Si has de canviar alguna cosa, l'has de canviar en tots els llocs."})}),r.jsx(P,{title:"Debugging Impossible",variant:"pink",children:r.jsx("p",{children:"Quan hi ha un error, has de revisar tot el fitxer. No pots aïllar el problema perquè tot està connectat. Un bug pot estar en qualsevol de les 1000 línies."})}),r.jsx(P,{title:"Escalabilitat Zero",variant:"pink",children:r.jsx("p",{children:"Afegir una nova funcionalitat significa modificar el fitxer monolític, amb el risc de trencar les funcionalitats existents."})})]}),r.jsx(C,{title:"La Solució: Dividir en Classes"}),r.jsxs(S,{variant:"success",children:[r.jsxs("p",{children:["La solució és ",r.jsx("strong",{children:"dividir el programa en classes"}),", on cada classe té una responsabilitat única i ben definida. Així aconseguim:"]}),r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Separació de responsabilitats:"})," cada classe fa UNA cosa"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Encapsulació:"})," les dades estan protegides dins de cada classe"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Reutilització:"})," les classes es poden usar en múltiples projectes"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Mantenibilitat:"})," és fàcil trobar i corregir errors"]})]})]}),r.jsxs(fe,{children:[r.jsx(G,{title:"Monolític: 1 fitxer",variant:"bad",children:r.jsx(E,{language:"bash",code:`projecte/
  MonoliticApp.java  (500+ línies)`})}),r.jsx(G,{title:"Modular: múltiples classes",variant:"good",children:r.jsx(E,{language:"bash",code:`projecte/
  model/
    Producte.java     (30 línies)
  servei/
    GestorProductes.java (50 línies)
  app/
    Main.java         (20 línies)`})})]}),r.jsx(S,{variant:"info",title:"Recorda",children:r.jsxs("p",{children:["El primer pas per millorar el teu codi és ",r.jsx("strong",{children:"identificar les responsabilitats"})," del teu programa i crear una classe per a cadascuna. A la següent pàgina veurem com fer-ho pas a pas amb un exemple concret."]})})]})}function B1(){return r.jsxs("div",{children:[r.jsx(C,{title:"Packages: Organització del Codi"}),r.jsx(S,{variant:"info",title:"Què és un package?",children:r.jsxs("p",{children:["Un ",r.jsx("strong",{children:"package"})," és una carpeta que agrupa classes relacionades. És la manera que té Java d'organitzar el codi en projectes grans. Cada fitxer ",r.jsx("code",{children:".java"})," declara a quin package pertany, i per utilitzar classes d'un altre package cal importar-les."]})}),r.jsx(C,{title:"Estructura de Carpetes"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["L'estructura de carpetes del projecte ha de coincidir amb la declaració dels packages. Cada package és una carpeta, i cada classe és un fitxer",r.jsx("code",{children:".java"})," dins d'aquesta carpeta."]})}),r.jsx(E,{label:"Estructura de carpetes d'un projecte",language:"bash",code:`el-meu-projecte/
  src/
    utils/                          ← Package "utils"
      CalculsArrayReals.java
      Validador.java
    model/                          ← Package "model"
      Producte.java
      Client.java
    app/                            ← Package "app"
      Main.java`}),r.jsx(C,{title:"Declaració de Package"}),r.jsx(S,{variant:"warning",title:"Regla important",children:r.jsxs("p",{children:["La declaració ",r.jsx("code",{children:"package"})," ha de ser la ",r.jsx("strong",{children:"primera instrucció"})," del fitxer Java, abans de qualsevol ",r.jsx("code",{children:"import"})," o declaració de classe. El nom del package ha de coincidir exactament amb el nom de la carpeta."]})}),r.jsx(E,{label:"Declaració del package",showLineNumbers:!0,code:`// Fitxer: src/utils/CalculsArrayReals.java
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
}`}),r.jsx(C,{title:"Mètodes d'Importació"}),r.jsx(S,{variant:"info",children:r.jsxs("p",{children:["Per utilitzar una classe d'un altre package, hi ha ",r.jsx("strong",{children:"tres mètodes"})," d'importació. Cadascun té els seus avantatges."]})}),r.jsx(re,{headers:["Mètode","Sintaxi","Quan usar-lo"],rows:[{group:"Mètodes d'importació"},{cells:["Import explícit","import utils.CalculsArrayReals;","Quan uses una o poques classes concretes"]},{cells:["Import amb comodí (*)","import utils.*;","Quan uses moltes classes del mateix package"]},{cells:["Nom qualificat","utils.CalculsArrayReals c = new utils.CalculsArrayReals();","Per evitar ambigüitats o ús puntual"]}]}),r.jsxs(ge,{children:[r.jsxs(P,{title:"Import Explícit",variant:"blue",children:[r.jsxs("p",{children:["Importa una classe concreta. És el mètode ",r.jsx("strong",{children:"recomanat"}),"."]}),r.jsx(E,{code:`package app;

import utils.CalculsArrayReals;
import model.Producte;

public class Main {
    public static void main(String[] args) {
        CalculsArrayReals c = new CalculsArrayReals();
        Producte p = new Producte();
    }
}`}),r.jsx(S,{variant:"success",children:r.jsx("p",{children:"Queda clar quines classes s'estan usant."})})]}),r.jsxs(P,{title:"Import amb Comodí (*)",variant:"yellow",children:[r.jsxs("p",{children:["Importa ",r.jsx("strong",{children:"totes"})," les classes d'un package."]}),r.jsx(E,{code:`package app;

import utils.*;    // Totes les classes de utils
import model.*;    // Totes les classes de model

public class Main {
    public static void main(String[] args) {
        CalculsArrayReals c = new CalculsArrayReals();
        Producte p = new Producte();
        Validador v = new Validador();
    }
}`}),r.jsx(S,{variant:"warning",children:r.jsx("p",{children:"Més còmode, però menys clar. No saps quines classes s'usen realment."})})]}),r.jsxs(P,{title:"Nom Qualificat",variant:"green",children:[r.jsxs("p",{children:["Usa el nom complet ",r.jsx("strong",{children:"sense import"}),"."]}),r.jsx(E,{code:`package app;

// Sense import!
public class Main {
    public static void main(String[] args) {
        utils.CalculsArrayReals c =
            new utils.CalculsArrayReals();
        model.Producte p =
            new model.Producte();
    }
}`}),r.jsx(S,{variant:"info",children:r.jsx("p",{children:"Útil quan dues classes de packages diferents tenen el mateix nom."})})]})]}),r.jsx(C,{title:"Convencions de Noms"}),r.jsx(re,{headers:["Regla","Exemple Correcte","Exemple Incorrecte"],rows:[{cells:["Tot en minúscules","package model;","package Model;"]},{cells:["Sense espais","package gestordades;","package gestor dades;"]},{cells:["Sense caràcters especials","package utils;","package utils-helpers;"]},{cells:["Noms descriptius","package controlador;","package ctrl;"]},{cells:["Domini invers (professional)","package com.lasalle.app;","package app.lasalle.com;"]}]}),r.jsx(S,{variant:"explanation",title:"Convenció del domini invers",children:r.jsxs("p",{children:["En projectes professionals, els packages comencen amb el ",r.jsx("strong",{children:"domini invers"})," de l'organització. Això evita conflictes de noms entre projectes de diferents empreses."]})}),r.jsx(E,{label:"Exemple amb domini invers",code:`// Projecte de La Salle
package com.lasalle.programacio.model;
package com.lasalle.programacio.vista;
package com.lasalle.programacio.controlador;

// Projecte de Google
package com.google.maps.model;
package com.google.maps.api;`}),r.jsx(C,{title:"Exemple Complet"}),r.jsxs(fe,{children:[r.jsx(G,{title:"Estructura del projecte",variant:"blue",children:r.jsx(E,{language:"bash",code:`projecte/
  src/
    utils/
      Matematiques.java
    app/
      Main.java`})}),r.jsx(G,{title:"Compilar i executar",variant:"blue",children:r.jsx(E,{language:"bash",code:`# Compilar
javac -d bin src/utils/Matematiques.java
javac -d bin -cp bin src/app/Main.java

# Executar
java -cp bin app.Main`})})]}),r.jsx(E,{label:"utils/Matematiques.java",showLineNumbers:!0,code:`package utils;

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
}`}),r.jsx(E,{label:"app/Main.java",showLineNumbers:!0,code:`package app;

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
}`}),r.jsx(S,{variant:"success",title:"Resum",children:r.jsxs("p",{children:["Els packages organitzen les classes en carpetes. Declara el package a la primera línia, utilitza ",r.jsx("code",{children:"import"})," per accedir a classes d'altres packages (preferiblement import explícit), i segueix les convencions de noms (tot en minúscules, domini invers en projectes professionals)."]})})]})}function U1(){return r.jsxs("div",{children:[r.jsx(C,{title:"Exemple Complet: Calculadora Modular"}),r.jsx(S,{variant:"info",title:"Objectiu",children:r.jsxs("p",{children:["Crearem una calculadora modular formada per ",r.jsx("strong",{children:"dues classes"}),": una classe ",r.jsx("code",{children:"Operacions"})," que conté els mètodes de càlcul (sumar, restar, multiplicar, dividir) i una classe ",r.jsx("code",{children:"Calculadora"})," amb el ",r.jsx("code",{children:"main()"}),"que la utilitza. Aplicarem tots els conceptes de modularitat apresos."]})}),r.jsx(C,{title:"Estructura del Projecte"}),r.jsx(E,{label:"Organització de fitxers",language:"bash",code:`calculadora/
  src/
    utils/
      Operacions.java       ← Classe amb els mètodes de càlcul
    app/
      Calculadora.java      ← Classe principal amb el main()`}),r.jsxs(fe,{children:[r.jsxs(G,{title:"Operacions.java",variant:"blue",children:[r.jsxs("p",{children:["La classe ",r.jsx("strong",{children:"auxiliar"})," que conté tota la lògica de càlcul."]}),r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsx("li",{children:r.jsx("code",{children:"sumar(a, b)"})}),r.jsx("li",{children:r.jsx("code",{children:"restar(a, b)"})}),r.jsx("li",{children:r.jsx("code",{children:"multiplicar(a, b)"})}),r.jsxs("li",{children:[r.jsx("code",{children:"dividir(a, b)"})," amb control de divisió per zero"]})]})]}),r.jsxs(G,{title:"Calculadora.java",variant:"blue",children:[r.jsxs("p",{children:["La classe ",r.jsx("strong",{children:"principal"})," que usa Operacions."]}),r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:["Pas 1: Instancia ",r.jsx("code",{children:"Operacions"})]}),r.jsx("li",{children:"Pas 2: Crida els mètodes"}),r.jsx("li",{children:"Mostra els resultats"})]})]})]}),r.jsx(C,{title:"Classe Operacions"}),r.jsx(E,{label:"utils/Operacions.java",showLineNumbers:!0,code:`package utils;

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
}`}),r.jsx(S,{variant:"warning",title:"Control de divisió per zero",children:r.jsxs("p",{children:["El mètode ",r.jsx("code",{children:"dividir"})," comprova si el divisor és zero abans de fer la divisió. Si és zero, mostra un missatge d'error i retorna 0. Això evita l'error ",r.jsx("code",{children:"ArithmeticException"})," que es produiria en una divisió per zero amb enters, i el resultat ",r.jsx("code",{children:"Infinity"})," amb doubles."]})}),r.jsx(C,{title:"Classe Calculadora (Main)"}),r.jsx(E,{label:"app/Calculadora.java",showLineNumbers:!0,code:`package app;

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
}`}),r.jsx(C,{title:"Sortida del Programa"}),r.jsx(us,{label:"Resultat esperat a la consola",language:"bash",defaultOpen:!0,code:`=== CALCULADORA ===
20.0 + 5.0 = 25.0
20.0 - 5.0 = 15.0
20.0 * 5.0 = 100.0
20.0 / 5.0 = 4.0

--- Prova divisio per zero ---
Error: No es pot dividir per zero!
Resultat: 0.0`}),r.jsx(C,{title:"Per què és millor que tot al main?"}),r.jsxs(fe,{children:[r.jsx(G,{title:"Tot al main (monolític)",variant:"bad",children:r.jsx(E,{code:`public static void main(String[] args) {
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
}`})}),r.jsx(G,{title:"Modular (classe separada)",variant:"good",children:r.jsx(E,{code:`public static void main(String[] args) {
    double a = 20, b = 5;

    // 1. Instanciar
    Operacions op = new Operacions();

    // 2. Cridar metodes
    System.out.println(op.sumar(a, b));
    System.out.println(op.restar(a, b));
    System.out.println(op.multiplicar(a, b));
    System.out.println(op.dividir(a, b));

    // Clar, net, reutilitzable!
}`})})]}),r.jsx(C,{title:"Conceptes Aplicats"}),r.jsxs(ge,{children:[r.jsx(P,{title:"Modularitat",variant:"blue",children:r.jsx("p",{children:"El codi està dividit en dues classes amb responsabilitats clares i separades."})}),r.jsx(P,{title:"Packages",variant:"yellow",children:r.jsxs("p",{children:["Les classes estan organitzades en packages: ",r.jsx("code",{children:"utils"})," per als càlculs, ",r.jsx("code",{children:"app"})," per al main."]})}),r.jsx(P,{title:"Import",variant:"green",children:r.jsxs("p",{children:["S'utilitza ",r.jsx("code",{children:"import utils.Operacions;"})," per accedir a la classe auxiliar des d'un altre package."]})}),r.jsx(P,{title:"Control d'Errors",variant:"pink",children:r.jsxs("p",{children:["El mètode ",r.jsx("code",{children:"dividir"})," comprova la divisió per zero abans d'operar, evitant errors en temps d'execució."]})})]}),r.jsx(us,{label:"Versió ampliada: més operacions",code:`package utils;

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
}`}),r.jsx(S,{variant:"success",title:"Resum",children:r.jsxs("p",{children:["Aquest exemple mostra com crear una calculadora modular amb dues classes.",r.jsx("code",{children:" Operacions"})," conté tota la lògica de càlcul amb control d'errors, i ",r.jsx("code",{children:"Calculadora"})," la utilitza seguint els 2 passos: instanciar i cridar mètodes. El codi és net, reutilitzable i fàcil d'ampliar."]})})]})}const $1=`// String es un OBJECTE, no un tipus primitiu
String salutacio = "Hola, mon!";

// Internament, Java gestiona String com un objecte immutable
// Cada vegada que "modifiquem" un String, es crea un objecte NOU
String original = "Hola";
String modificat = original.toUpperCase(); // Crea un nou objecte "HOLA"
System.out.println(original);   // "Hola" - no ha canviat!
System.out.println(modificat);  // "HOLA" - objecte nou`,H1=`// Forma 1: Literal (RECOMANADA)
// Java reutilitza objectes del "String Pool"
String nom1 = "Anna";
String nom2 = "Anna"; // Reutilitza el mateix objecte del pool

// Forma 2: Amb constructor new
// Crea SEMPRE un objecte nou a memoria (heap)
String nom3 = new String("Anna"); // Objecte diferent!
String nom4 = new String("Anna"); // Un altre objecte diferent!

// Forma 3: A partir d'un array de chars
char[] lletres = {'J', 'a', 'v', 'a'};
String paraula = new String(lletres); // "Java"`,V1=`String a = "Hola";
String b = "Hola";
String c = new String("Hola");

// == compara REFERENCIES (adreces de memoria), NO contingut!
System.out.println(a == b); // true  (mateix objecte al pool)
System.out.println(a == c); // FALSE! (objectes diferents a memoria)

// Aixo es un ERROR molt comu en Java!
// Encara que a i c contenen "Hola", == diu false
// perque apunten a posicions de memoria diferents`,G1=`String a = "Hola";
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
System.out.println("Anna".compareTo("Anna"));  // 0 (iguals)`,W1=`String text = "Programacio";

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
// P r o g r a m a c i o`,J1=`String frase = "Bon dia, Java!";

// substring(inici) - des de l'index fins al final
System.out.println(frase.substring(9));    // "Java!"

// substring(inici, fi) - des de inici fins a fi (sense incloure fi)
System.out.println(frase.substring(0, 7)); // "Bon dia"
System.out.println(frase.substring(4, 7)); // "dia"

// Exemple practic: extreure extensio d'un fitxer
String arxiu = "document.pdf";
String extensio = arxiu.substring(arxiu.lastIndexOf(".") + 1);
System.out.println(extensio); // "pdf"`,Q1=`String text = "Java es genial, Java es potent";

// indexOf(str) - primera aparicio
System.out.println(text.indexOf("Java"));    // 0
System.out.println(text.indexOf("es"));      // 5
System.out.println(text.indexOf("Python"));  // -1 (no trobat)

// indexOf(str, fromIndex) - cerca des d'una posicio
System.out.println(text.indexOf("Java", 1)); // 16

// lastIndexOf(str) - ultima aparicio
System.out.println(text.lastIndexOf("Java")); // 16
System.out.println(text.lastIndexOf("es"));   // 21`,K1=`String url = "https://www.exemple.cat/pagina";

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
System.out.println("Email valid: " + valid); // true`,Y1=`// toUpperCase() - convertir a majuscules
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
System.out.println(net); // "barcelona"`,Z1=`String frase = "Java es dificil, Java es avorrit";

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
System.out.println(net); // "12345678A"`,X1=`// split(regex) - divideix el String en un array
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
System.out.println("Vocals: " + vocals); // 5`,ew=`// concat(str) - concatena dos Strings
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
System.out.println(s1.length()); // 2 (es un String "42", no un numero)`,tw=`// Opcio 1: Operador + (senzill, per poques concatenacions)
String nom = "Anna";
int edat = 20;
String missatge = "Hola, " + nom + "! Tens " + edat + " anys.";

// Opcio 2: concat() (nomes Strings, no converteix altres tipus)
String salut = "Hola".concat(", ").concat(nom);

// Opcio 3: StringBuilder (EFICIENT per moltes concatenacions)
// Quan concatenem amb + dins d'un bucle, Java crea molts objectes temporals
// StringBuilder evita aquest problema`,rw=`// StringBuilder: MOLT mes eficient en bucles
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
System.out.println(sb2.length()); // 4`,nw=`// MAL: Concatenacio amb + en un bucle (crea molts objectes!)
String resultat = "";
for (int i = 0; i < 1000; i++) {
    resultat += i + ", "; // Cada iteracio crea un objecte String NOU
}

// BE: StringBuilder en un bucle (eficient!)
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i).append(", ");
}
String resultat2 = sb.toString(); // Nomes crea un String al final`,aw=`public class ExempleStrings {
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
}`;function iw(){return r.jsxs("div",{children:[r.jsx(C,{title:"La Classe String"}),r.jsxs(S,{variant:"info",title:"Què és String?",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"String"})," és una ",r.jsx("strong",{children:"classe"})," de Java, no un tipus primitiu. Representa una cadena de caràcters i és un dels objectes més utilitzats en programació."]}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"És un objecte:"}),' tot i que es pot crear amb literals ("text"), internament és un objecte de la classe ',r.jsx("code",{children:"java.lang.String"}),"."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"És immutable:"}),' un cop creat, el seu contingut NO es pot modificar. Qualsevol operació que "modifiqui" un String en realitat crea un objecte nou.']}),r.jsxs("li",{children:[r.jsx("strong",{children:"String Pool:"}),' Java manté un "pool" de Strings literals per reutilitzar objectes i estalviar memòria.']})]})]}),r.jsx(E,{code:$1,label:"String és un objecte immutable",showLineNumbers:!0}),r.jsx(C,{title:"Crear Strings"}),r.jsx(E,{code:H1,label:"Maneres de crear Strings",showLineNumbers:!0}),r.jsxs(fe,{children:[r.jsxs(G,{title:"Literal (recomanat)",variant:"good",children:[r.jsx("p",{children:r.jsx("code",{children:'String s = "Hola";'})}),r.jsxs("ul",{children:[r.jsx("li",{children:"Més eficient (reutilitza objectes del pool)"}),r.jsx("li",{children:"Forma habitual i recomanada"}),r.jsx("li",{children:"Java optimitza automàticament"})]})]}),r.jsxs(G,{title:"Constructor new",variant:"bad",children:[r.jsx("p",{children:r.jsx("code",{children:'String s = new String("Hola");'})}),r.jsxs("ul",{children:[r.jsx("li",{children:"Crea sempre un objecte nou"}),r.jsx("li",{children:"No aprofita el String Pool"}),r.jsx("li",{children:"Gasta més memòria innecessàriament"})]})]})]}),r.jsx(C,{title:"Comparar Strings"}),r.jsxs(S,{variant:"error",title:"ERROR COMÚ: Usar == per comparar Strings",children:[r.jsxs("p",{children:["L'operador ",r.jsx("code",{children:"=="})," compara ",r.jsx("strong",{children:"referències"})," (adreces de memòria), NO el contingut dels Strings. Dos Strings poden contenir el mateix text però estar en posicions de memòria diferents, i ",r.jsx("code",{children:"=="})," diria ",r.jsx("code",{children:"false"}),"."]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Sempre"})," utilitza ",r.jsx("code",{children:".equals()"})," o ",r.jsx("code",{children:".equalsIgnoreCase()"})," per comparar el contingut de Strings!"]})]}),r.jsx(E,{code:V1,label:"Per què == NO funciona per comparar contingut",showLineNumbers:!0}),r.jsx(E,{code:G1,label:"Comparació correcta amb .equals() i .equalsIgnoreCase()",showLineNumbers:!0}),r.jsx(re,{headers:["Mètode","Compara","Retorna","Exemple"],rows:[{cells:["==","Referències (memòria)","boolean",'"Hola" == "Hola" // depèn!']},{cells:[".equals()","Contingut exacte","boolean",'"Hola".equals("Hola") // true']},{cells:[".equalsIgnoreCase()","Contingut (ignora cas)","boolean",'"Hola".equalsIgnoreCase("hola") // true']},{cells:[".compareTo()","Ordre lexicogràfic","int (neg/0/pos)",'"Anna".compareTo("Marc") // negatiu']}]}),r.jsx(C,{title:"Mètodes de la Classe String"}),r.jsx(re,{headers:["Mètode","Descripció","Retorna","Exemple"],rows:[{group:"Longitud i Accés"},{cells:["length()","Nombre de caràcters","int",'"Hola".length() // 4']},{cells:["charAt(i)","Caràcter a la posició i","char",`"Hola".charAt(0) // 'H'`]},{cells:["isEmpty()","Comprova si està buit","boolean",'"".isEmpty() // true']},{group:"Cerca"},{cells:["indexOf(str)","Posició de la primera aparició","int (-1 si no trobat)",'"Hola".indexOf("la") // 2']},{cells:["lastIndexOf(str)","Posició de la última aparició","int (-1 si no trobat)",'"abab".lastIndexOf("ab") // 2']},{cells:["contains(str)","Conté el substring?","boolean",'"Hola".contains("ol") // true']},{cells:["startsWith(str)","Comença amb...?","boolean",'"Hola".startsWith("Ho") // true']},{cells:["endsWith(str)","Acaba amb...?","boolean",'"Hola".endsWith("la") // true']},{group:"Extracció"},{cells:["substring(inici)","Des de inici fins al final","String",'"Hola".substring(2) // "la"']},{cells:["substring(inici, fi)","Des de inici fins a fi (exclusiu)","String",'"Hola".substring(1,3) // "ol"']},{group:"Transformació"},{cells:["toUpperCase()","Converteix a majúscules","String",'"hola".toUpperCase() // "HOLA"']},{cells:["toLowerCase()","Converteix a minúscules","String",'"HOLA".toLowerCase() // "hola"']},{cells:["trim()","Elimina espais extrems","String",'"  hola  ".trim() // "hola"']},{cells:["replace(vell, nou)","Substitueix aparicions","String",'"hola".replace("o","0") // "h0la"']},{group:"Divisió i Conversió"},{cells:["split(regex)","Divideix en array","String[]",'"a,b,c".split(",") // ["a","b","c"]']},{cells:["toCharArray()","Converteix a array de chars","char[]",'"Hola".toCharArray()']},{cells:["concat(str)","Concatena amb un altre String","String",'"Hola".concat(" Mon") // "Hola Mon"']},{cells:["String.valueOf(x)","Converteix qualsevol valor a String","String",'String.valueOf(42) // "42"']}]}),r.jsx(C,{title:"Exemples Detallats"}),r.jsx(S,{variant:"explanation",title:"length() i charAt()",children:r.jsxs("p",{children:[r.jsx("code",{children:"length()"})," retorna el nombre total de caràcters. ",r.jsx("code",{children:"charAt(index)"})," retorna el caràcter a una posició concreta (començant des de 0)."]})}),r.jsx(E,{code:W1,label:"length() i charAt() - Longitud i accés per posició",showLineNumbers:!0}),r.jsx(E,{code:J1,label:"substring() - Extreure parts d'un String",showLineNumbers:!0}),r.jsx(E,{code:Q1,label:"indexOf() i lastIndexOf() - Cercar dins d'un String",showLineNumbers:!0}),r.jsx(E,{code:K1,label:"contains(), startsWith(), endsWith() - Comprovacions",showLineNumbers:!0}),r.jsx(E,{code:Y1,label:"toUpperCase(), toLowerCase(), trim(), isEmpty()",showLineNumbers:!0}),r.jsx(E,{code:Z1,label:"replace() - Substituir text",showLineNumbers:!0}),r.jsx(E,{code:X1,label:"split() i toCharArray() - Dividir un String",showLineNumbers:!0}),r.jsx(E,{code:ew,label:"concat() i String.valueOf() - Concatenar i convertir",showLineNumbers:!0}),r.jsx(C,{title:"Concatenació de Strings"}),r.jsx(S,{variant:"info",title:"Tres maneres de concatenar",children:r.jsxs("p",{children:["Hi ha tres formes principals de concatenar Strings en Java. L'operador ",r.jsx("code",{children:"+"})," és el més comú, però ",r.jsx("strong",{children:"StringBuilder"})," és molt més eficient quan fas moltes concatenacions (especialment dins de bucles)."]})}),r.jsx(E,{code:tw,label:"Les tres opcions de concatenació",showLineNumbers:!0}),r.jsx(C,{title:"StringBuilder"}),r.jsx(S,{variant:"warning",title:"Quan usar StringBuilder?",children:r.jsxs("p",{children:["Utilitza ",r.jsx("strong",{children:"StringBuilder"})," sempre que necessitis concatenar Strings dins d'un ",r.jsx("strong",{children:"bucle"})," o quan facis moltes operacions de concatenació. Com que String és immutable, cada ",r.jsx("code",{children:"+"})," crea un objecte nou, cosa que és molt ineficient en bucles grans."]})}),r.jsx(E,{code:rw,label:"StringBuilder - Mètodes principals",showLineNumbers:!0}),r.jsxs(fe,{children:[r.jsx(G,{title:"Concatenació amb + en bucle",variant:"bad",children:r.jsx("p",{children:"Cada iteració crea un objecte String nou. Molt lent per bucles grans."})}),r.jsx(G,{title:"StringBuilder en bucle",variant:"good",children:r.jsx("p",{children:"Modifica el mateix objecte internament. Molt més ràpid i eficient."})})]}),r.jsx(E,{code:nw,label:"Comparació: + en bucle vs StringBuilder",showLineNumbers:!0}),r.jsx(C,{title:"Exemple Complet"}),r.jsx(S,{variant:"success",title:"Exemple pràctic: Analitzar una frase",children:r.jsx("p",{children:"Aquest exemple mostra com combinar diversos mètodes de String per analitzar i transformar una frase."})}),r.jsx(E,{code:aw,label:"Exemple complet: Analitzar i transformar text",showLineNumbers:!0}),r.jsx(C,{title:"Resum"}),r.jsxs(ge,{children:[r.jsx(P,{title:"Immutabilitat",variant:"blue",children:r.jsx("p",{children:"Els Strings són immutables. Qualsevol modificació crea un objecte nou."})}),r.jsx(P,{title:"Comparació",variant:"blue",children:r.jsxs("p",{children:["Usa ",r.jsx("code",{children:".equals()"})," per comparar contingut. Mai ",r.jsx("code",{children:"=="})," per Strings."]})}),r.jsx(P,{title:"StringBuilder",variant:"blue",children:r.jsx("p",{children:"Utilitza StringBuilder per concatenacions en bucles. És molt més eficient."})}),r.jsx(P,{title:"Mètodes Útils",variant:"blue",children:r.jsx("p",{children:"String té més de 15 mètodes essencials: length, charAt, substring, indexOf, contains, replace, split, trim..."})})]})]})}const sw=`// Math es una classe utilitaria de java.lang
// TOTS els seus metodes son STATIC - no cal crear cap objecte
// No es pot instanciar: Math m = new Math(); // ERROR!

// S'utilitza directament amb el nom de la classe:
double resultat = Math.sqrt(25);      // 5.0
int maxim = Math.max(10, 20);         // 20
double aleatori = Math.random();       // 0.0 a 0.999...`,lw=`// Math.PI - El nombre Pi (3.141592653589793)
double perimetreCircle = 2 * Math.PI * 5; // Perimetre d'un cercle de radi 5
System.out.println("Perimetre: " + perimetreCircle); // 31.41592653589793

double areaCircle = Math.PI * Math.pow(5, 2); // Area d'un cercle de radi 5
System.out.println("Area: " + areaCircle); // 78.53981633974483

// Math.E - El nombre d'Euler (2.718281828459045)
double creixement = Math.E;
System.out.println("Nombre d'Euler: " + creixement); // 2.718281828459045`,ow=`// Math.abs(x) - Valor absolut (sempre positiu)
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
System.out.println("Maxim de tres: " + maxim); // 42`,cw=`// Math.pow(base, exponent) - Potencia
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
System.out.println("Hipotenusa: " + hipotenusa); // 5.0`,uw=`// Math.ceil(x) - Arrodoneix cap AMUNT (sostre)
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
System.out.println(tresDecimals); // 3.142`,dw=`// Math.random() - Retorna un double aleatori entre 0.0 (inclusiu) i 1.0 (exclusiu)
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
}`,pw=`// Math.log(x) - Logaritme natural (base e)
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
System.out.println("El numero " + numero + " te " + digits + " digits"); // 6`,mw=`// IMPORTANT: Les funcions trigonometriques treballen amb RADIANS, no graus!
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
System.out.println("Alcada aproximada: " + Math.round(alcada) + " metres"); // 87 metres`,fw=`public class ExempleMath {
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
}`;function hw(){return r.jsxs("div",{children:[r.jsx(C,{title:"La Classe Math"}),r.jsxs(S,{variant:"info",title:"Què és la classe Math?",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Math"})," és una ",r.jsx("strong",{children:"classe utilitària"})," de Java (",r.jsx("code",{children:"java.lang.Math"}),") que proporciona mètodes i constants per realitzar operacions matemàtiques."]}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Tots els mètodes són static:"})," es criden directament amb ",r.jsx("code",{children:"Math.mètode()"}),", sense crear cap objecte."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"No s'instancia:"})," no es pot fer ",r.jsx("code",{children:"new Math()"}),". La classe té el constructor privat."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"No cal import:"})," com que pertany a ",r.jsx("code",{children:"java.lang"}),", està disponible automàticament."]})]})]}),r.jsx(E,{code:sw,label:"Utilitzar la classe Math",showLineNumbers:!0}),r.jsx(C,{title:"Constants"}),r.jsx(re,{headers:["Constant","Valor","Descripció"],rows:[{cells:["Math.PI","3.141592653589793","El nombre Pi - relació entre circumferència i diàmetre"]},{cells:["Math.E","2.718281828459045","El nombre d'Euler - base del logaritme natural"]}]}),r.jsx(E,{code:lw,label:"Constants Math.PI i Math.E",showLineNumbers:!0}),r.jsx(C,{title:"Mètodes de la Classe Math"}),r.jsx(re,{headers:["Mètode","Descripció","Retorna","Exemple"],rows:[{group:"Valor Absolut i Comparació"},{cells:["Math.abs(x)","Valor absolut","int/double","Math.abs(-5) // 5"]},{cells:["Math.max(a, b)","El major dels dos valors","int/double","Math.max(3, 7) // 7"]},{cells:["Math.min(a, b)","El menor dels dos valors","int/double","Math.min(3, 7) // 3"]},{group:"Potències i Arrels"},{cells:["Math.pow(base, exp)","Potència (base^exp)","double","Math.pow(2, 3) // 8.0"]},{cells:["Math.sqrt(x)","Arrel quadrada","double","Math.sqrt(25) // 5.0"]},{cells:["Math.cbrt(x)","Arrel cúbica","double","Math.cbrt(27) // 3.0"]},{group:"Arrodoniment"},{cells:["Math.ceil(x)","Arrodoneix cap amunt (sostre)","double","Math.ceil(3.1) // 4.0"]},{cells:["Math.floor(x)","Arrodoneix cap avall (terra)","double","Math.floor(3.9) // 3.0"]},{cells:["Math.round(x)","Arrodoneix al més proper","long","Math.round(3.5) // 4"]},{group:"Aleatori"},{cells:["Math.random()","Nombre aleatori [0.0, 1.0)","double","Math.random() // 0.7423..."]},{group:"Logaritmes"},{cells:["Math.log(x)","Logaritme natural (base e)","double","Math.log(Math.E) // 1.0"]},{cells:["Math.log10(x)","Logaritme en base 10","double","Math.log10(100) // 2.0"]},{group:"Trigonometria (radians)"},{cells:["Math.sin(x)","Sinus","double","Math.sin(Math.PI/2) // 1.0"]},{cells:["Math.cos(x)","Cosinus","double","Math.cos(0) // 1.0"]},{cells:["Math.tan(x)","Tangent","double","Math.tan(Math.PI/4) // ~1.0"]},{cells:["Math.toRadians(x)","Graus a radians","double","Math.toRadians(180) // PI"]}]}),r.jsx(C,{title:"Exemples Detallats"}),r.jsx(S,{variant:"explanation",title:"abs(), max(), min()",children:r.jsxs("p",{children:[r.jsx("code",{children:"Math.abs()"})," retorna el valor absolut (sempre positiu).",r.jsx("code",{children:" Math.max()"})," i ",r.jsx("code",{children:"Math.min()"})," retornen el major i menor de dos valors. Es poden anidar per comparar més de dos valors."]})}),r.jsx(E,{code:ow,label:"abs(), max(), min() - Valor absolut i comparacions",showLineNumbers:!0}),r.jsx(E,{code:cw,label:"pow(), sqrt(), cbrt() - Potències i arrels",showLineNumbers:!0}),r.jsx(S,{variant:"warning",title:"Math.round() vs Math.ceil() vs Math.floor()",children:r.jsxs("p",{children:["No confonguis aquests tres mètodes! ",r.jsx("code",{children:"ceil()"})," sempre arrodoneix cap amunt,",r.jsx("code",{children:" floor()"})," sempre cap avall, i ",r.jsx("code",{children:"round()"})," al més proper. Amb nombres negatius el comportament pot ser confús: ",r.jsx("code",{children:"Math.floor(-2.3)"})," dona ",r.jsx("code",{children:"-3.0"}),", no ",r.jsx("code",{children:"-2.0"}),"!"]})}),r.jsx(E,{code:uw,label:"ceil(), floor(), round() - Arrodoniment",showLineNumbers:!0}),r.jsx(E,{code:dw,label:"Math.random() - Nombres aleatoris",showLineNumbers:!0}),r.jsxs(S,{variant:"success",title:"Fórmula per enters aleatoris en un rang",children:[r.jsxs("p",{children:["La fórmula per obtenir un enter aleatori entre ",r.jsx("code",{children:"min"})," i ",r.jsx("code",{children:"max"})," (ambdós inclusius) és:"]}),r.jsx("p",{children:r.jsx("code",{children:"int aleatori = (int)(Math.random() * (max - min + 1)) + min;"})})]}),r.jsx(E,{code:pw,label:"log(), log10() - Logaritmes",showLineNumbers:!0}),r.jsx(S,{variant:"warning",title:"Trigonometria: Radians, no Graus!",children:r.jsxs("p",{children:["Les funcions ",r.jsx("code",{children:"Math.sin()"}),", ",r.jsx("code",{children:"Math.cos()"})," i ",r.jsx("code",{children:"Math.tan()"})," esperen l'angle en ",r.jsx("strong",{children:"radians"}),", no en graus. Utilitza ",r.jsx("code",{children:"Math.toRadians(graus)"})," per convertir graus a radians abans de passar-los a aquestes funcions."]})}),r.jsx(E,{code:mw,label:"sin(), cos(), tan(), toRadians() - Trigonometria",showLineNumbers:!0}),r.jsx(C,{title:"Exemple Complet"}),r.jsx(S,{variant:"success",title:"Exemple pràctic: Càlculs amb Math",children:r.jsx("p",{children:"Un exemple que combina diversos mètodes de Math per fer càlculs de cercles, distàncies, simulació de daus i ajust de notes."})}),r.jsx(E,{code:fw,label:"Exemple complet amb múltiples mètodes de Math",showLineNumbers:!0}),r.jsx(C,{title:"Patrons Pràctics"}),r.jsx(re,{headers:["Patró","Codi","Resultat"],rows:[{cells:["Enter aleatori [1, 6]","(int)(Math.random() * 6) + 1","Dau: 1 a 6"]},{cells:["Enter aleatori [min, max]","(int)(Math.random() * (max-min+1)) + min","Rang personalitzat"]},{cells:["Arrodonir a 2 decimals","Math.round(x * 100.0) / 100.0","3.14159 -> 3.14"]},{cells:["Arrodonir a N decimals","Math.round(x * 10^N) / 10^N","Precisió variable"]},{cells:["Limitar un valor [min, max]","Math.max(min, Math.min(max, valor))","Clamp"]},{cells:["Distància entre 2 punts","Math.sqrt(pow(x2-x1,2) + pow(y2-y1,2))","Pitàgores"]},{cells:["Àrea del cercle","Math.PI * Math.pow(radi, 2)","Geometria"]}]}),r.jsx(C,{title:"Resum"}),r.jsxs(ge,{children:[r.jsx(P,{title:"Classe Utilitària",variant:"blue",children:r.jsxs("p",{children:["Math és una classe static. No cal instanciar-la. Crida directament ",r.jsx("code",{children:"Math.mètode()"}),"."]})}),r.jsx(P,{title:"Arrodoniment",variant:"blue",children:r.jsxs("p",{children:[r.jsx("code",{children:"ceil"})," (amunt), ",r.jsx("code",{children:"floor"})," (avall), ",r.jsx("code",{children:"round"})," (més proper). Per N decimals: ",r.jsx("code",{children:"round(x * 10^N) / 10^N"}),"."]})}),r.jsx(P,{title:"Aleatoris",variant:"blue",children:r.jsxs("p",{children:[r.jsx("code",{children:"Math.random()"})," retorna [0.0, 1.0). Usa ",r.jsx("code",{children:"(int)(Math.random() * rang) + min"})," per enters."]})}),r.jsx(P,{title:"Trigonometria",variant:"blue",children:r.jsxs("p",{children:["Funcions trigonomètriques usen ",r.jsx("strong",{children:"radians"}),". Converteix amb ",r.jsx("code",{children:"Math.toRadians(graus)"}),"."]})})]})]})}const gw=`// Math.random() - Metode static de la classe Math
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
int valor = (int)(Math.random() * (max - min + 1)) + min; // 10 a 50`,xw=`// java.util.Random - Una classe completa per generar aleatoris
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
int valor = random.nextInt(max - min + 1) + min; // 10 a 50`,vw=`import java.util.Random;

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
System.out.println("Long aleatori: " + numGran);`,jw=`import java.util.Random;

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
System.out.println(rng3.nextInt(100)); // Diferent cada vegada`,yw=`// === PATRONS AMB Math.random() ===

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
System.out.println("Event (30%): " + event);`,bw=`// === PATRONS AMB java.util.Random ===
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
}`,Sw=`// OBJECTIU: Enter aleatori entre 1 i 100

// Amb Math.random()
int num1 = (int)(Math.random() * 100) + 1;

// Amb Random
Random rng = new Random();
int num2 = rng.nextInt(100) + 1;

// Ambdos fan el MATEIX, pero Random es mes net i llegible`,ww=`// OBJECTIU: Element aleatori d'un array

String[] noms = {"Anna", "Marc", "Laia", "Pere", "Sofia"};

// Amb Math.random()
String nom1 = noms[(int)(Math.random() * noms.length)];

// Amb Random
Random rng = new Random();
String nom2 = noms[rng.nextInt(noms.length)];`,Ew=`// OBJECTIU: Valor boolean aleatori

// Amb Math.random()
boolean b1 = Math.random() < 0.5;

// Amb Random - MOLT MES DIRECTE
Random rng = new Random();
boolean b2 = rng.nextBoolean();`,Cw=`import java.util.Random;

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
}`;function kw(){return r.jsxs("div",{children:[r.jsx(C,{title:"Math.random() vs java.util.Random"}),r.jsx(S,{variant:"info",title:"Dues maneres de generar nombres aleatoris",children:r.jsxs("p",{children:["Java ofereix dues formes principals per generar nombres aleatoris: el mètode static ",r.jsx("code",{children:"Math.random()"})," i la classe ",r.jsx("code",{children:"java.util.Random"}),". Ambdues són vàlides, però tenen diferències importants en flexibilitat i ús."]})}),r.jsx(C,{title:"Math.random()"}),r.jsx(S,{variant:"explanation",title:"Com funciona Math.random()",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Mètode static"})," de la classe ",r.jsx("code",{children:"Math"})," - es crida directament sense crear cap objecte."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"No cal import"})," - ",r.jsx("code",{children:"Math"})," pertany a ",r.jsx("code",{children:"java.lang"})," i està sempre disponible."]}),r.jsxs("li",{children:[r.jsxs("strong",{children:["Retorna un ",r.jsx("code",{children:"double"})]})," entre ",r.jsx("code",{children:"0.0"})," (inclusiu) i ",r.jsx("code",{children:"1.0"})," (exclusiu)."]}),r.jsx("li",{children:"Per obtenir enters o rangs personalitzats, cal fer operacions matemàtiques addicionals."})]})}),r.jsx(E,{code:gw,label:"Math.random() - Ús bàsic i patrons",showLineNumbers:!0}),r.jsx(C,{title:"La Classe java.util.Random"}),r.jsx(S,{variant:"explanation",title:"Com funciona java.util.Random",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"És una classe"})," - cal ",r.jsx("code",{children:"import java.util.Random;"})," i crear un objecte amb ",r.jsx("code",{children:"new Random()"}),"."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Múltiples mètodes"})," - pot generar ",r.jsx("code",{children:"int"}),", ",r.jsx("code",{children:"double"}),", ",r.jsx("code",{children:"boolean"}),", ",r.jsx("code",{children:"long"})," directament."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"nextInt(bound)"})," - genera un enter entre 0 (inclusiu) i bound (exclusiu), més còmode que Math.random()."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Seedable"})," - es pot inicialitzar amb una seed per obtenir seqüències reproduïbles."]})]})}),r.jsx(E,{code:xw,label:"java.util.Random - Creació i ús bàsic",showLineNumbers:!0}),r.jsx(re,{headers:["Mètode","Retorna","Rang","Exemple"],rows:[{cells:["nextInt()","int","Qualsevol int","rng.nextInt() // -1238547921"]},{cells:["nextInt(bound)","int","0 a bound-1","rng.nextInt(6) // 0 a 5"]},{cells:["nextDouble()","double","0.0 a 0.999...","rng.nextDouble() // 0.7423..."]},{cells:["nextBoolean()","boolean","true o false","rng.nextBoolean() // true"]},{cells:["nextLong()","long","Qualsevol long","rng.nextLong()"]}]}),r.jsx(E,{code:vw,label:"Tots els mètodes de Random",showLineNumbers:!0}),r.jsx(C,{title:"Seed: Seqüències Reproduïbles"}),r.jsx(S,{variant:"info",title:"Què és una seed?",children:r.jsxs("p",{children:["Una ",r.jsx("strong",{children:"seed"})," és un valor inicial que determina la seqüència de nombres aleatoris. Si dos objectes ",r.jsx("code",{children:"Random"})," tenen la mateixa seed, generaran",r.jsx("strong",{children:" exactament la mateixa seqüència"}),". Això és molt útil per fer proves i depurar codi, ja que pots reproduir els mateixos resultats."]})}),r.jsx(E,{code:jw,label:"Seed per seqüències reproduïbles",showLineNumbers:!0}),r.jsx(C,{title:"Comparació Directa"}),r.jsxs(fe,{children:[r.jsx(G,{title:"Math.random()",variant:"blue",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Tipus:"})," Mètode static"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Import:"})," No cal"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Instanciar:"})," No cal"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Retorna:"})," Només double [0.0, 1.0)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Enters:"})," Cal cast manual ",r.jsx("code",{children:"(int)"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Boolean:"})," Cal ",r.jsx("code",{children:"< 0.5"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Seed:"})," No suportat"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Ideal per:"})," Ús ràpid i senzill"]})]})}),r.jsx(G,{title:"java.util.Random",variant:"blue",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Tipus:"})," Classe completa"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Import:"})," ",r.jsx("code",{children:"import java.util.Random"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Instanciar:"})," ",r.jsx("code",{children:"new Random()"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Retorna:"})," int, double, boolean, long"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Enters:"})," Directe amb ",r.jsx("code",{children:"nextInt(bound)"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Boolean:"})," Directe amb ",r.jsx("code",{children:"nextBoolean()"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Seed:"})," Suportat (reproduïble)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Ideal per:"})," Ús flexible i avançat"]})]})})]}),r.jsx(C,{title:"Quan Usar Cada Un?"}),r.jsxs(fe,{children:[r.jsx(G,{title:"Usa Math.random() quan...",variant:"good",children:r.jsxs("ul",{children:[r.jsx("li",{children:"Necessites un random ràpid i senzill"}),r.jsx("li",{children:"No vols importar cap classe addicional"}),r.jsx("li",{children:"Només necessites un double aleatori"}),r.jsx("li",{children:"És un script petit o un exercici bàsic"}),r.jsx("li",{children:"No necessites reproduïbilitat"})]})}),r.jsx(G,{title:"Usa Random quan...",variant:"good",children:r.jsxs("ul",{children:[r.jsx("li",{children:"Necessites generar enters directament"}),r.jsx("li",{children:"Necessites booleans aleatoris"}),r.jsx("li",{children:"Vols seqüències reproduïbles (seed)"}),r.jsx("li",{children:"Fas servir aleatoris en molts llocs del codi"}),r.jsx("li",{children:"El programa és més complex"})]})})]}),r.jsx(C,{title:"Exemples Comparatius"}),r.jsx(S,{variant:"explanation",title:"Mateixa tasca, dues solucions",children:r.jsxs("p",{children:["A continuació comparem com resoldre les mateixes tasques comunes amb ",r.jsx("code",{children:"Math.random()"})," i amb ",r.jsx("code",{children:"java.util.Random"}),"."]})}),r.jsx(E,{code:Sw,label:"Enter aleatori en un rang",showLineNumbers:!0}),r.jsx(E,{code:ww,label:"Element aleatori d'un array",showLineNumbers:!0}),r.jsx(E,{code:Ew,label:"Boolean aleatori",showLineNumbers:!0}),r.jsx(C,{title:"Patrons Comuns"}),r.jsx(E,{code:yw,label:"Patrons amb Math.random()",showLineNumbers:!0}),r.jsx(E,{code:bw,label:"Patrons amb java.util.Random",showLineNumbers:!0}),r.jsxs(S,{variant:"success",title:"Recomanació",children:[r.jsxs("p",{children:["Per a la majoria de programes, ",r.jsx("strong",{children:"java.util.Random"})," és la millor opció. És més llegible, més flexible, i ofereix mètodes directes per generar enters i booleans sense haver de fer operacions addicionals. A més, la possibilitat d'usar seeds la fa ideal per proves i depuració."]}),r.jsxs("p",{children:[r.jsx("code",{children:"Math.random()"})," és perfecte quan necessites un nombre aleatori ràpid en un context senzill i no vols importar cap classe."]})]}),r.jsx(C,{title:"Exemple Complet"}),r.jsx(S,{variant:"info",title:"Exemple pràctic amb java.util.Random",children:r.jsx("p",{children:"Un exemple complet que mostra diversos usos de nombres aleatoris: un joc, simulació de moneda, barreja d'array (shuffle) i generació de contrasenyes."})}),r.jsx(E,{code:Cw,label:"Exemple complet: Joc, simulació, shuffle i contrasenyes",showLineNumbers:!0}),r.jsx(C,{title:"Resum"}),r.jsxs(ge,{children:[r.jsx(P,{title:"Math.random()",variant:"blue",children:r.jsxs("p",{children:["Mètode static. Retorna double [0.0, 1.0). Ràpid i sense imports. Per enters: ",r.jsx("code",{children:"(int)(Math.random() * rang) + min"}),"."]})}),r.jsx(P,{title:"java.util.Random",variant:"blue",children:r.jsxs("p",{children:["Classe amb múltiples mètodes: ",r.jsx("code",{children:"nextInt()"}),", ",r.jsx("code",{children:"nextDouble()"}),", ",r.jsx("code",{children:"nextBoolean()"}),". Més flexible i llegible."]})}),r.jsx(P,{title:"Seed",variant:"blue",children:r.jsxs("p",{children:["Només ",r.jsx("code",{children:"Random"})," suporta seeds per seqüències reproduïbles. Útil per proves: ",r.jsx("code",{children:"new Random(42)"}),"."]})}),r.jsx(P,{title:"Recomanació",variant:"blue",children:r.jsxs("p",{children:["Prefereix ",r.jsx("code",{children:"java.util.Random"})," per projectes. Usa ",r.jsx("code",{children:"Math.random()"})," per coses ràpides i senzilles."]})})]})]})}function Rw(){return r.jsxs("div",{children:[r.jsx(C,{title:"For-each: sintaxi simplificada per recórrer col·leccions"}),r.jsxs(S,{variant:"info",children:[r.jsxs("p",{children:["El bucle ",r.jsx("strong",{children:"for tradicional"})," és l'estàndard i el més utilitzat a Java, especialment per la seva similitud amb C, C++ i C#. És la base que has de dominar primer."]}),r.jsxs("p",{style:{marginTop:"8px"},children:["El ",r.jsx("strong",{children:"for-each"})," (també anomenat ",r.jsx("em",{children:"enhanced for"}),") és una sintaxi simplificada que Java ofereix per recórrer arrays i col·leccions quan ",r.jsx("strong",{children:"no necessites l'índex"}),"."]})]}),r.jsx(S,{variant:"warning",title:"Prioritat: for tradicional",children:r.jsx("p",{children:"A nivell de DAM, el for tradicional és la prioritat. El for-each és un complement útil que simplifica el codi en certs casos, però no substitueix el for clàssic."})}),r.jsx(C,{title:"Sintaxi del for-each"}),r.jsx(E,{label:"Estructura general",code:`for (Tipus element : coleccio) {
    // codi que utilitza 'element'
}`}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["Es llegeix com: ",r.jsx("strong",{children:'"per cada element de la col·lecció, fes..."'}),". El compilador s'encarrega internament de gestionar l'índex i l'accés als elements."]})}),r.jsx(C,{title:"Comparació: for tradicional vs for-each"}),r.jsxs(fe,{children:[r.jsxs(G,{title:"For tradicional (amb índex)",variant:"blue",children:[r.jsxs("p",{children:["Tens control total amb l'índex ",r.jsx("strong",{children:"i"}),"."]}),r.jsx(E,{code:`int[] nums = {10, 20, 30, 40, 50};

for (int i = 0; i < nums.length; i++) {
    System.out.println("Index " + i + ": " + nums[i]);
}`})]}),r.jsxs(G,{title:"For-each (sense índex)",variant:"good",children:[r.jsxs("p",{children:["Més net, però ",r.jsx("strong",{children:"no tens accés a l'índex"}),"."]}),r.jsx(E,{code:`int[] nums = {10, 20, 30, 40, 50};

for (int num : nums) {
    System.out.println(num);
}`})]})]}),r.jsx(C,{title:"Quan utilitzar cadascun?"}),r.jsxs(ge,{children:[r.jsx(P,{title:"Utilitza for tradicional quan...",variant:"blue",children:r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsx("li",{children:"Necessites l'índex (saber en quina posició estàs)"}),r.jsx("li",{children:"Vols modificar els elements de l'array"}),r.jsx("li",{children:"Vols recórrer només una part de l'array"}),r.jsx("li",{children:"Necessites recórrer al revés (de final a inici)"}),r.jsx("li",{children:"Necessites comparar elements consecutius"})]})}),r.jsx(P,{title:"Utilitza for-each quan...",variant:"green",children:r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsx("li",{children:"Només necessites llegir tots els elements"}),r.jsx("li",{children:"No necessites saber la posició"}),r.jsx("li",{children:"Vols un codi més curt i llegible"}),r.jsx("li",{children:"Treballes amb col·leccions (ArrayList, etc.)"})]})})]}),r.jsx(C,{title:"Exemples amb diferents tipus"}),r.jsx(E,{label:"Array d'enters (int)",showLineNumbers:!0,code:`int[] notes = {7, 9, 5, 8, 6};
int suma = 0;

for (int nota : notes) {
    suma += nota;
}

double mitjana = (double) suma / notes.length;
System.out.println("Mitjana: " + mitjana);`}),r.jsx(E,{label:"Array de Strings",showLineNumbers:!0,code:`String[] noms = {"Anna", "Marc", "Laia", "Pol"};

for (String nom : noms) {
    System.out.println("Hola, " + nom + "!");
}
// Hola, Anna!
// Hola, Marc!
// Hola, Laia!
// Hola, Pol!`}),r.jsx(E,{label:"Array d'objectes",showLineNumbers:!0,code:`// Suposem que tenim una classe Alumne amb getNom() i getNota()
Alumne[] alumnes = {
    new Alumne("Anna", 8.5),
    new Alumne("Marc", 6.0),
    new Alumne("Laia", 9.2)
};

for (Alumne a : alumnes) {
    System.out.println(a.getNom() + " -> " + a.getNota());
}`}),r.jsx(C,{title:"Limitacions del for-each"}),r.jsx(S,{variant:"warning",title:"El for-each NO et dona l'índex",children:r.jsxs("p",{children:["Dins del for-each, ",r.jsx("strong",{children:"no tens cap variable d'índex"}),". Si necessites saber en quina posició estàs, has d'usar el for tradicional."]})}),r.jsx(S,{variant:"error",title:"No pots modificar l'array amb la variable del bucle",children:r.jsxs("p",{children:["La variable del for-each és una ",r.jsx("strong",{children:"còpia"})," del valor. Modificar-la no canvia l'array original."]})}),r.jsxs(fe,{children:[r.jsx(G,{title:"Això NO funciona",variant:"bad",children:r.jsx(E,{code:`int[] nums = {1, 2, 3};

// Intent de duplicar cada valor
for (int num : nums) {
    num = num * 2; // Modifica la COPIA, no l'array!
}
// nums segueix sent {1, 2, 3}`})}),r.jsx(G,{title:"Això SÍ funciona",variant:"good",children:r.jsx(E,{code:`int[] nums = {1, 2, 3};

// Amb for tradicional pots modificar
for (int i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * 2; // Modifica l'array!
}
// nums ara es {2, 4, 6}`})})]}),r.jsx(C,{title:"For-each amb col·leccions (ArrayList)"}),r.jsx(S,{variant:"info",children:r.jsxs("p",{children:["El for-each funciona no només amb arrays, sinó també amb qualsevol col·lecció de Java com ",r.jsx("strong",{children:"ArrayList"}),". De fet, és on més brilla perquè l'alternativa amb for tradicional requereix usar ",r.jsx("code",{children:".get(i)"})," i ",r.jsx("code",{children:".size()"}),"."]})}),r.jsxs(fe,{children:[r.jsx(G,{title:"ArrayList amb for tradicional",variant:"blue",children:r.jsx(E,{code:`ArrayList<String> fruites = new ArrayList<>();
fruites.add("Poma");
fruites.add("Platan");
fruites.add("Taronja");

for (int i = 0; i < fruites.size(); i++) {
    System.out.println(fruites.get(i));
}`})}),r.jsx(G,{title:"ArrayList amb for-each",variant:"good",children:r.jsx(E,{code:`ArrayList<String> fruites = new ArrayList<>();
fruites.add("Poma");
fruites.add("Platan");
fruites.add("Taronja");

for (String fruita : fruites) {
    System.out.println(fruita);
}`})})]}),r.jsx(C,{title:"Resum"}),r.jsx(re,{headers:["Característica","for tradicional","for-each"],rows:[{cells:["Accés a l'índex","Sí","No"]},{cells:["Modificar l'array","Sí","No (modifica còpia)"]},{cells:["Recórrer parcialment","Sí","No (sempre recorre tot)"]},{cells:["Recórrer al revés","Sí","No"]},{cells:["Llegibilitat","Correcta","Més neta i curta"]},{cells:["Funciona amb ArrayList","Sí (.get/.size)","Sí (directament)"]}]}),r.jsx(S,{variant:"success",title:"Consell",children:r.jsxs("p",{children:["Domina primer el ",r.jsx("strong",{children:"for tradicional"}),", que és el que trobaràs a la majoria d'exercicis i exàmens. Un cop el tinguis clar, el for-each et serà molt fàcil d'incorporar com a eina complementària."]})})]})}function Lw(){return r.jsxs("div",{children:[r.jsx(C,{title:"Operador Ternari: if-else compacte en una línia"}),r.jsxs(S,{variant:"info",children:[r.jsxs("p",{children:["L'operador ternari és una forma ",r.jsx("strong",{children:"compacta"})," d'escriure un if-else senzill en una sola línia. És útil quan vols assignar un valor a una variable en funció d'una condició simple."]}),r.jsxs("p",{style:{marginTop:"8px"},children:["Recorda: el ",r.jsx("strong",{children:"if-else tradicional"})," segueix sent la forma estàndard i prioritària. L'operador ternari és un complement per a casos concrets."]})]}),r.jsx(C,{title:"Sintaxi"}),r.jsx(E,{label:"Estructura de l'operador ternari",code:"variable = condicio ? valorSiTrue : valorSiFalse;"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["Es llegeix com: ",r.jsx("strong",{children:'"Si la condició és certa, agafa el primer valor; si no, agafa el segon."'})]})}),r.jsxs(P,{title:"Esquema mental",variant:"blue",children:[r.jsx("p",{children:"CONDICIÓ → si TRUE → valor A"}),r.jsx("p",{children:"CONDICIÓ → si FALSE → valor B"})]}),r.jsx(C,{title:"Comparació: if-else vs ternari"}),r.jsxs(fe,{children:[r.jsx(G,{title:"If-else tradicional (5+ línies)",variant:"blue",children:r.jsx(E,{code:`String resultat;

if (nota >= 5) {
    resultat = "Aprovat";
} else {
    resultat = "Suspes";
}`})}),r.jsx(G,{title:"Operador ternari (1 línia)",variant:"good",children:r.jsx(E,{code:'String resultat = (nota >= 5) ? "Aprovat" : "Suspes";'})})]}),r.jsx(S,{variant:"explanation",children:r.jsx("p",{children:"Ambdós codis fan exactament el mateix. La diferència és purament estètica: el ternari és més compacte, però el if-else és més explícit i fàcil de llegir per a qui comença."})}),r.jsx(C,{title:"Casos d'ús pràctics"}),r.jsx(E,{label:"1. Assignar una variable segons una condició",showLineNumbers:!0,code:`int edat = 20;
String tipus = (edat >= 18) ? "Adult" : "Menor";
System.out.println(tipus); // Adult`}),r.jsx(E,{label:"2. Retornar un valor des d'un mètode",showLineNumbers:!0,code:`public static String obtenirSalutacio(boolean esMati) {
    return esMati ? "Bon dia!" : "Bona tarda!";
}`}),r.jsx(E,{label:"3. Directament dins d'un println",showLineNumbers:!0,code:`int puntuacio = 85;
System.out.println("Resultat: " + (puntuacio >= 50 ? "PASSAT" : "FALLAT"));`}),r.jsx(E,{label:"4. Determinar el major de dos números",showLineNumbers:!0,code:`int a = 15, b = 23;
int major = (a > b) ? a : b;
System.out.println("El major es: " + major); // 23`}),r.jsx(E,{label:"5. Paritat d'un número",showLineNumbers:!0,code:`int numero = 7;
String paritat = (numero % 2 == 0) ? "Parell" : "Senar";
System.out.println(numero + " es " + paritat); // 7 es Senar`}),r.jsx(E,{label:"6. Valor absolut (sense Math.abs)",showLineNumbers:!0,code:`int valor = -42;
int absolut = (valor >= 0) ? valor : -valor;
System.out.println("Valor absolut: " + absolut); // 42`}),r.jsx(C,{title:"Ternari aniuat (existeix, però no el recomanem)"}),r.jsx(S,{variant:"warning",title:"Evita els ternaris aniuats",children:r.jsxs("p",{children:["Tècnicament és possible encadenar ternaris, però el resultat és un codi molt difícil de llegir i mantenir. ",r.jsx("strong",{children:"No ho recomanem."})]})}),r.jsxs(fe,{children:[r.jsx(G,{title:"Ternari aniuat (difícil de llegir)",variant:"bad",children:r.jsx(E,{code:`// NO recomanat!
String categoria = (edat < 12) ? "Nen"
    : (edat < 18) ? "Adolescent"
    : (edat < 65) ? "Adult"
    : "Jubilat";`})}),r.jsx(G,{title:"If-else (molt més clar)",variant:"good",children:r.jsx(E,{code:`String categoria;

if (edat < 12) {
    categoria = "Nen";
} else if (edat < 18) {
    categoria = "Adolescent";
} else if (edat < 65) {
    categoria = "Adult";
} else {
    categoria = "Jubilat";
}`})})]}),r.jsx(C,{title:"Quan utilitzar i quan NO"}),r.jsxs(ge,{children:[r.jsx(P,{title:"Utilitza l'operador ternari quan...",variant:"green",children:r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsx("li",{children:"La decisió és simple: una condició, dos valors possibles"}),r.jsx("li",{children:"Vols assignar un valor a una variable en una sola línia"}),r.jsx("li",{children:"Vols retornar un valor senzill des d'un mètode"}),r.jsx("li",{children:"El codi resultant segueix sent fàcil de llegir"})]})}),r.jsx(P,{title:"NO utilitzis l'operador ternari quan...",variant:"pink",children:r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsx("li",{children:"La lògica és complexa o té múltiples condicions"}),r.jsx("li",{children:"Necessites executar varies instruccions (no només retornar un valor)"}),r.jsx("li",{children:"Voldries aniuar ternaris dins d'altres ternaris"}),r.jsx("li",{children:"El codi es fa difícil d'entendre a primera vista"})]})})]}),r.jsx(C,{title:"Resum"}),r.jsx(re,{headers:["Característica","if-else","Operador ternari"],rows:[{cells:["Línies de codi","5+ línies","1 línia"]},{cells:["Llegibilitat","Molt clara","Clara si és simple"]},{cells:["Múltiples instruccions","Sí","No (només retorna un valor)"]},{cells:["Condicions complexes","Sí","No recomanat"]},{cells:["Aniuament","Fàcil de llegir","Molt confús"]},{cells:["Ús principal","Qualsevol decisió","Assignacions simples"]}]}),r.jsx(S,{variant:"success",title:"Consell",children:r.jsxs("p",{children:["Pensa en l'operador ternari com un ",r.jsx("strong",{children:"atall"}),": si el caminet curt és clar i segur, pren-lo. Si és fosc i ple de revolts (condicions complexes), millor el camí principal (if-else)."]})})]})}function Aw(){return r.jsxs("div",{children:[r.jsx(C,{title:"var i altres funcionalitats modernes de Java"}),r.jsxs(S,{variant:"info",children:[r.jsxs("p",{children:["Java ha anat evolucionant amb noves versions que incorporen sintaxis més modernes i compactes. Aquí veurem algunes de les més útils: ",r.jsx("strong",{children:"var"}),","," ",r.jsx("strong",{children:"text blocks"}),", ",r.jsx("strong",{children:"switch expressions"})," i"," ",r.jsx("strong",{children:"records"}),"."]}),r.jsxs("p",{style:{marginTop:"8px"},children:["Totes aquestes funcionalitats són ",r.jsx("strong",{children:"complements"})," a la sintaxi tradicional, que segueix sent la prioritat a nivell acadèmic."]})]}),r.jsx(S,{variant:"warning",title:"Important per a estudiants de DAM",children:r.jsxs("p",{children:["Aquestes funcionalitats són ",r.jsx("strong",{children:'"nice to know"'})," (bo de saber). A nivell de DAM, centra't primer en la sintaxi tradicional que és la que apareixerà als exàmens i exercicis. Coneix-les per si les trobes en codi real o tutorials moderns."]})}),r.jsx(C,{title:"var: inferència de tipus local (Java 10+)"}),r.jsx(S,{variant:"info",children:r.jsxs("p",{children:["La paraula clau ",r.jsx("strong",{children:"var"})," permet declarar variables locals sense especificar explícitament el tipus. El compilador ",r.jsx("strong",{children:"dedueix"})," el tipus automàticament a partir del valor assignat."]})}),r.jsxs(fe,{children:[r.jsx(G,{title:"Forma tradicional (tipus explícit)",variant:"blue",children:r.jsx(E,{code:`String nom = "Hola";
int edat = 25;
double preu = 19.99;
ArrayList<String> llista = new ArrayList<>();`})}),r.jsx(G,{title:"Amb var (tipus inferit)",variant:"good",children:r.jsx(E,{code:`var nom = "Hola";        // String
var edat = 25;           // int
var preu = 19.99;        // double
var llista = new ArrayList<String>();`})})]}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["En ambdós casos, el tipus és ",r.jsx("strong",{children:"exactament el mateix"}),". L'única diferència és que amb ",r.jsx("code",{children:"var"})," no l'escrius tu, el compilador el dedueix. Un cop assignat, el tipus queda fixat."]})}),r.jsx(S,{variant:"error",title:"var NO fa que Java sigui dinàmic!",children:r.jsxs("p",{children:["A diferència de Python o JavaScript, ",r.jsx("code",{children:"var"})," ",r.jsx("strong",{children:"no"})," converteix Java en un llenguatge de tipat dinàmic. El tipus es determina en temps de compilació i no pot canviar després."]})}),r.jsx(E,{label:"Això dona ERROR de compilació",code:`var x = 10;       // x es int
x = "hola";       // ERROR! No pots assignar String a un int`}),r.jsx(C,{title:"On es pot i on NO es pot usar var"}),r.jsxs(ge,{children:[r.jsxs(P,{title:"SÍ es pot usar",variant:"green",children:[r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsx("li",{children:"Variables locals dins d'un mètode"}),r.jsx("li",{children:"Variables dins de bucles for"}),r.jsx("li",{children:"Variables dins de blocs try-with-resources"})]}),r.jsx(E,{code:`// Dins d'un metode
var resultat = calcular();

// Dins d'un for
for (var i = 0; i < 10; i++) { }

// Dins d'un for-each
for (var nom : llistaNoms) { }`})]}),r.jsxs(P,{title:"NO es pot usar",variant:"pink",children:[r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsx("li",{children:"Atributs de classe (camps/fields)"}),r.jsx("li",{children:"Paràmetres de mètodes"}),r.jsx("li",{children:"Tipus de retorn de mètodes"}),r.jsx("li",{children:"Sense valor inicial (el compilador no pot deduir)"})]}),r.jsx(E,{code:`// ERROR: camp de classe
class Persona {
    var nom = "Anna"; // NO COMPILA
}

// ERROR: parametre
public void saludar(var nom) { } // NO

// ERROR: retorn
public var getEdat() { } // NO

// ERROR: sense inicialitzar
var x; // NO COMPILA (quin tipus es?)`})]})]}),r.jsx(re,{headers:["Situació","Es pot usar var?"],rows:[{cells:["Variable local amb assignació","Sí"]},{cells:["Variable en bucle for/for-each","Sí"]},{cells:["Atribut de classe","No"]},{cells:["Paràmetre de mètode","No"]},{cells:["Tipus de retorn","No"]},{cells:["Sense valor inicial","No"]}]}),r.jsx(C,{title:"Quan usar var i quan no"}),r.jsxs(fe,{children:[r.jsxs(G,{title:"Bon ús de var",variant:"good",children:[r.jsx("p",{children:"Quan el tipus és obvi pel context:"}),r.jsx(E,{code:`// El tipus es evident
var scanner = new Scanner(System.in);
var noms = new ArrayList<String>();
var resultat = "Aprovat";`})]}),r.jsxs(G,{title:"Mal ús de var",variant:"bad",children:[r.jsx("p",{children:"Quan el tipus no és clar i var confon:"}),r.jsx(E,{code:`// Quin tipus retorna? No es clar!
var dades = obtenirDades();
var resultat = processar(x, y);
var config = inicialitzar();`})]})]}),r.jsx(C,{title:"Text blocks: strings multilínia (Java 13+)"}),r.jsx(S,{variant:"info",children:r.jsxs("p",{children:["Els ",r.jsx("strong",{children:"text blocks"})," permeten escriure cadenes de text de múltiples línies sense haver de concatenar ni usar ",r.jsx("code",{children:"\\n"}),". S'utilitzen tres cometes dobles ",r.jsx("code",{children:'"""'})," per obrir i tancar."]})}),r.jsxs(fe,{children:[r.jsx(G,{title:"Forma tradicional",variant:"blue",children:r.jsx(E,{code:`String json = "{\\n" +
    "  \\"nom\\": \\"Anna\\",\\n" +
    "  \\"edat\\": 25\\n" +
    "}";`})}),r.jsx(G,{title:"Amb text blocks",variant:"good",children:r.jsx(E,{code:`String json = """
    {
      "nom": "Anna",
      "edat": 25
    }
    """;`})})]}),r.jsx(E,{label:"Molt útil per a SQL, HTML, JSON...",showLineNumbers:!0,code:`// Consulta SQL multilinia
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
System.out.println(menu);`}),r.jsx(C,{title:"Switch expressions: switch que retorna valor (Java 14+)"}),r.jsx(S,{variant:"info",children:r.jsxs("p",{children:["Les ",r.jsx("strong",{children:"switch expressions"})," són una versió millorada del switch que pot retornar un valor directament, utilitza fletxes (",r.jsx("code",{children:"->"}),") en comptes de ",r.jsx("code",{children:"case/break"}),", i és més compacte."]})}),r.jsxs(fe,{children:[r.jsx(G,{title:"Switch tradicional",variant:"blue",children:r.jsx(E,{code:`String nomDia;
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
}`})}),r.jsx(G,{title:"Switch expression",variant:"good",children:r.jsx(E,{code:`String nomDia = switch (dia) {
    case 1 -> "Dilluns";
    case 2 -> "Dimarts";
    case 3 -> "Dimecres";
    default -> "Desconegut";
};`})})]}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["Avantatges del switch expression: no necessita ",r.jsx("code",{children:"break"})," (no hi ha fall-through accidental), pot retornar valors directament, i permet agrupar casos fàcilment."]})}),r.jsx(E,{label:"Agrupar múltiples casos",code:`String tipusDia = switch (dia) {
    case 1, 2, 3, 4, 5 -> "Laborable";
    case 6, 7           -> "Cap de setmana";
    default             -> "Invalid";
};`}),r.jsx(C,{title:"Records: classes de dades simplificades (Java 16+)"}),r.jsx(S,{variant:"info",children:r.jsxs("p",{children:["Els ",r.jsx("strong",{children:"records"})," són una forma molt compacta de crear classes que només serveixen per guardar dades (com un DTO). Java genera automàticament el constructor, getters, ",r.jsx("code",{children:"equals()"}),", ",r.jsx("code",{children:"hashCode()"})," i"," ",r.jsx("code",{children:"toString()"}),"."]})}),r.jsxs(fe,{children:[r.jsx(G,{title:"Classe tradicional",variant:"blue",children:r.jsx(E,{code:`public class Punt {
    private final int x;
    private final int y;

    public Punt(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() { return x; }
    public int getY() { return y; }

    // + equals, hashCode, toString...
}`})}),r.jsx(G,{title:"Amb record",variant:"good",children:r.jsx(E,{code:`public record Punt(int x, int y) { }

// Ja inclou constructor, getters,
// equals, hashCode i toString!

// Us:
var p = new Punt(3, 5);
System.out.println(p.x()); // 3
System.out.println(p);     // Punt[x=3, y=5]`})})]}),r.jsx(S,{variant:"warning",title:"Limitacions dels records",children:r.jsxs("p",{children:["Els records són ",r.jsx("strong",{children:"immutables"})," (no tenen setters), no poden heretar d'altres classes, i els seus camps són finals. Són ideals per a dades simples, però no substitueixen les classes normals amb lògica complexa."]})}),r.jsx(C,{title:"Resum de funcionalitats modernes"}),r.jsx(re,{headers:["Funcionalitat","Versió de Java","Per a què serveix","Prioritat a DAM"],rows:[{cells:["var","Java 10+","Inferència de tipus en variables locals","Útil però no essencial"]},{cells:['Text blocks (""")',"Java 13+","Strings multilínia sense \\n","Bo de saber"]},{cells:["Switch expressions","Java 14+","Switch que retorna valor, sense break","Bo de saber"]},{cells:["Records","Java 16+","Classes de dades compactes","Avançat, bo de saber"]}]}),r.jsx(S,{variant:"success",title:"Consell final",children:r.jsxs("p",{children:["Totes aquestes funcionalitats fan el codi més curt i modern, però la base de Java ",r.jsx("strong",{children:"segueix sent la mateixa"}),". Aprendre la sintaxi tradicional primer et garanteix entendre qualsevol codi Java, sigui antic o modern. Aquestes eines modernes les aniràs incorporant naturalment a mesura que guanyis experiència."]})})]})}const Mw="_wrapper_1jc92_1",Nw="_title_1jc92_17",Pw="_diagram_1jc92_35",yl={wrapper:Mw,title:Nw,diagram:Pw},_w="/programacio-0485LIVE/diagrams/";function _e({src:e,title:t}){return r.jsxs("div",{className:yl.wrapper,children:[t&&r.jsx("div",{className:yl.title,children:t}),r.jsx("div",{className:yl.diagram,children:r.jsx("img",{src:`${_w}${e}.svg`,alt:t||"Diagrama"})})]})}function Tw(){return r.jsxs("div",{children:[r.jsx(C,{title:"Diagrames de Classes UML"}),r.jsxs(S,{variant:"explanation",title:"Que es un diagrama de classes?",children:[r.jsxs("p",{children:["Un ",r.jsx("strong",{children:"diagrama de classes"})," es una representacio visual de les classes d'un sistema, els seus ",r.jsx("strong",{children:"atributs"}),", ",r.jsx("strong",{children:"metodes"})," i les",r.jsx("strong",{children:" relacions"}),` entre elles. Es el "planol" d'un sistema orientat a objectes: abans de programar, dissenyem l'estructura del codi amb aquest diagrama.`]}),r.jsxs("p",{style:{marginTop:"8px"},children:["Forma part de l'",r.jsx("strong",{children:"UML"})," (Unified Modeling Language), un estandard internacional per modelar sistemes de programari."]})]}),r.jsx(C,{title:"Elements d'un diagrama de classes"}),r.jsx(re,{headers:["Element","Representacio","Descripcio"],rows:[{group:"Classe"},{cells:["Nom de la classe","Seccio superior del rectangle","El nom de la classe, en majuscula inicial (ex: Animal)"]},{cells:["Atributs","Seccio central del rectangle","Les variables de la classe amb el seu tipus (ex: -nom: String)"]},{cells:["Metodes","Seccio inferior del rectangle","Les funcions de la classe amb parametres i retorn (ex: +getNom(): String)"]},{group:"Visibilitat"},{cells:["+ public","Signe +","Accessible des de qualsevol classe"]},{cells:["- private","Signe -","Accessible nomes dins de la mateixa classe"]},{cells:["# protected","Signe #","Accessible des de la mateixa classe i les subclasses"]},{group:"Relacions"},{cells:["Herencia","--|> (fletxa buida)",`Una classe filla hereta d'una classe pare ("es un")`]},{cells:["Composicio","*-- (diamant ple)",'Una classe conte una altra; si el contenidor desapareix, el contingut tambe ("te un" fort)']},{cells:["Agregacio","o-- (diamant buit)",'Una classe conte una altra, pero poden existir independentment ("te un" debil)']},{cells:["Associacio","-- (linia simple)",'Dues classes es relacionen ("usa")']},{cells:["Dependencia","..> (linia discontinua)","Una classe usa temporalment una altra"]}]}),r.jsx(C,{title:"Diagrama basic: una classe"}),r.jsx(S,{variant:"info",title:"Estructura d'una classe",children:r.jsxs("p",{children:["Cada classe es representa com un ",r.jsx("strong",{children:"rectangle dividit en tres seccions"}),": el nom a dalt, els atributs al mig i els metodes a baix. Els simbols ",r.jsx("code",{children:"+"}),",",r.jsx("code",{children:" -"})," i ",r.jsx("code",{children:"#"})," indiquen la visibilitat."]})}),r.jsx(_e,{src:"classes-animal",title:"Classe Animal"}),r.jsx(C,{title:"Relacions entre classes"}),r.jsx(S,{variant:"info",children:r.jsx("p",{children:"Les relacions entre classes son la part mes important d'un diagrama de classes. Indiquen com les classes interactuen entre elles i quines dependencies existeixen."})}),r.jsx(re,{headers:["Relacio","Simbol UML","Significat","Exemple"],rows:[{cells:["Herencia","<|--",'"es un"',"Gos extends Animal: un Gos ES UN Animal"]},{cells:["Composicio","*--",'"te un" (fort)',"Cotxe conte Motor: si el Cotxe desapareix, el Motor tambe"]},{cells:["Agregacio","o--",'"te un" (debil)',"Equip conte Jugadors: els Jugadors existeixen sense l'Equip"]},{cells:["Associacio","-->",'"usa"',"Professor ensenya Alumne: es relacionen pero son independents"]},{cells:["Dependencia","..>",'"usa temporalment"',"Un metode rep un objecte com a parametre"]}]}),r.jsx(C,{title:"Exemple: Herencia"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["La ",r.jsx("strong",{children:"herencia"})," es representa amb una fletxa buida que apunta de la classe filla cap a la classe pare. En aquest exemple, ",r.jsx("code",{children:"Gos"})," i ",r.jsx("code",{children:"Gat"})," hereten de ",r.jsx("code",{children:"Animal"}),". Les classes filles tenen els seus propis metodes (",r.jsx("code",{children:"bordar()"})," i ",r.jsx("code",{children:"miolar()"}),") a mes dels heretats."]})}),r.jsx(_e,{src:"classes-herencia",title:"Herencia: Animal, Gos i Gat"}),r.jsx(C,{title:"Exemple complet: Sistema de Biblioteca"}),r.jsxs(S,{variant:"explanation",children:[r.jsx("p",{children:"Aquest diagrama mostra el sistema de biblioteca que ja coneixem del curs. Fixa't en:"}),r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Composicio"})," (",r.jsx("code",{children:"*--"}),"): la Biblioteca ",r.jsx("em",{children:"conte"})," Llibres. Si la Biblioteca desapareix, els seus Llibres tambe."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Associacio"})," (",r.jsx("code",{children:"-->"}),"): cada Llibre ",r.jsx("em",{children:"esta escrit per"})," un Autor. L'Autor existeix independentment del Llibre."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Multiplicitat"}),": ",r.jsx("code",{children:'"1"'})," i ",r.jsx("code",{children:'"0..*"'})," indiquen quants objectes participen en la relacio (una Biblioteca te de 0 a molts Llibres)."]})]})]}),r.jsx(_e,{src:"classes-biblioteca",title:"Sistema de Biblioteca"}),r.jsx(C,{title:"Exemple avancat: Sistema RPG"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["Un exemple mes complex d'un sistema de gestio de campanyes RPG (joc de rol). Fixa't en com combina ",r.jsx("strong",{children:"herencia"})," (Character amb PlayableCharacter i NonPlayableCharacter), ",r.jsx("strong",{children:"composicio"})," (Campaign conte Sessions),",r.jsx("strong",{children:" enumeracions"})," (Availability) i ",r.jsx("strong",{children:"multiples associacions"}),"."]})}),r.jsx(_e,{src:"classes-rpg",title:"Sistema de Campanyes RPG"}),r.jsx(C,{title:"Com llegir un diagrama de classes"}),r.jsxs(ge,{children:[r.jsx(P,{title:"1. Llegeix de dalt a baix",variant:"blue",children:r.jsxs("p",{children:["Comenca per les classes mes ",r.jsx("strong",{children:"generals"})," (les pare) i baixa cap a les mes ",r.jsx("strong",{children:"especifiques"})," (les filles). Aixo et dona una visio general de la jerarquia."]})}),r.jsx(P,{title:"2. Segueix les fletxes",variant:"yellow",children:r.jsxs("p",{children:["Les fletxes indiquen les ",r.jsx("strong",{children:"relacions"})," entre classes. Fixa't en el tipus de fletxa (herencia, composicio, associacio) per entendre com es connecten."]})}),r.jsx(P,{title:"3. Comprova les multiplicitats",variant:"green",children:r.jsxs("p",{children:["Els numeros a les linies (",r.jsx("code",{children:"1"}),", ",r.jsx("code",{children:"0..*"}),", ",r.jsx("code",{children:"1..*"}),") indiquen ",r.jsx("strong",{children:"quants objectes"})," participen en cada relacio. Per exemple,",r.jsx("code",{children:" 1"})," a ",r.jsx("code",{children:"0..*"}),' vol dir "un a molts".']})}),r.jsx(P,{title:"4. Identifica la classe central",variant:"pink",children:r.jsxs("p",{children:["Busca la classe amb ",r.jsx("strong",{children:"mes relacions"}),": sol ser la classe principal del sistema. En l'exemple de la biblioteca, ",r.jsx("code",{children:"Biblioteca"})," es el nucli perque gestiona tot el sistema."]})})]}),r.jsx(S,{variant:"success",title:"Resum",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:["Un ",r.jsx("strong",{children:"diagrama de classes"})," es el planol visual d'un sistema orientat a objectes."]}),r.jsxs("li",{children:["Cada classe es representa amb un ",r.jsx("strong",{children:"rectangle"})," amb tres seccions: nom, atributs i metodes."]}),r.jsxs("li",{children:["La ",r.jsx("strong",{children:"visibilitat"})," s'indica amb ",r.jsx("code",{children:"+"})," (public), ",r.jsx("code",{children:"-"})," (private) i ",r.jsx("code",{children:"#"})," (protected)."]}),r.jsxs("li",{children:["Les ",r.jsx("strong",{children:"relacions"})," principals son: herencia, composicio, agregacio, associacio i dependencia."]}),r.jsxs("li",{children:["Les ",r.jsx("strong",{children:"multiplicitats"})," indiquen quants objectes participen en una relacio."]}),r.jsxs("li",{children:["Sempre es recomanable ",r.jsx("strong",{children:"dissenyar el diagrama abans de programar"}),"."]})]})})]})}const Ow=`public class Salutador {
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
}`,Dw=`public class Main {
    public static void main(String[] args) {
        // 1. Crear l'objecte Salutador
        Salutador s = new Salutador("catala");

        // 2. Cridar el metode saludar()
        String missatge = s.saludar("Maria");

        // 3. Mostrar el resultat
        System.out.println(missatge);
        // Sortida: Hola, Maria!
    }
}`;function Iw(){return r.jsxs("div",{children:[r.jsx(C,{title:"Diagrames de Sequencia UML"}),r.jsxs(S,{variant:"explanation",title:"Que es un diagrama de sequencia?",children:[r.jsxs("p",{children:["Un ",r.jsx("strong",{children:"diagrama de sequencia"})," mostra l'",r.jsx("strong",{children:"ordre"})," de les interaccions entre objectes al llarg del temps. L'eix vertical representa el",r.jsx("strong",{children:" temps"})," (de dalt a baix) i l'eix horitzontal representa els",r.jsx("strong",{children:" objectes"})," que participen en la interaccio."]}),r.jsxs("p",{style:{marginTop:"8px"},children:["Mentre que el diagrama de classes mostra l'",r.jsx("em",{children:"estructura"})," (que hi ha), el diagrama de sequencia mostra el ",r.jsx("em",{children:"comportament"})," (que passa i en quin ordre)."]})]}),r.jsx(C,{title:"Elements d'un diagrama de sequencia"}),r.jsx(re,{headers:["Element","Representacio","Descripcio"],rows:[{cells:["Actor / Participant","Rectangle a la part superior","Un objecte o classe que participa en la interaccio"]},{cells:["Linia de vida (lifeline)","Linia vertical discontinua","Representa l'existencia de l'objecte al llarg del temps"]},{cells:["Missatge sincron","Fletxa continua (->>) ","Una crida a un metode que espera resposta"]},{cells:["Missatge de resposta","Fletxa discontinua (-->>)","El valor de retorn d'una crida"]},{cells:["Caixa d'activacio","Rectangle prim sobre la linia de vida","Indica que l'objecte esta executant una operacio"]},{cells:["Nota (note)","Rectangle amb cantonada doblegada","Comentari o aclariment sobre la interaccio"]},{cells:["Fragment alt/else","Rectangle amb etiqueta","Representa una estructura condicional (if/else)"]},{cells:["Fragment loop","Rectangle amb etiqueta loop","Representa un bucle (while/for)"]}]}),r.jsx(C,{title:"Exemple basic: Saludar"}),r.jsxs(S,{variant:"info",children:[r.jsxs("p",{children:["Aquest diagrama mostra la interaccio entre el ",r.jsx("code",{children:"Main"})," i un objecte",r.jsx("code",{children:" Salutador"}),". Llegeix-lo de dalt a baix per seguir l'ordre de les crides:"]}),r.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:[r.jsx("code",{children:"Main"})," crea un nou ",r.jsx("code",{children:"Salutador"}),` amb l'idioma "catala"`]}),r.jsxs("li",{children:[r.jsx("code",{children:"Main"})," crida el metode ",r.jsx("code",{children:'saludar("Maria")'})]}),r.jsxs("li",{children:[r.jsx("code",{children:"Salutador"}),' retorna el text "Hola, Maria!"']}),r.jsxs("li",{children:[r.jsx("code",{children:"Main"})," imprimeix el resultat per consola"]})]})]}),r.jsx(_e,{src:"seq-saludar",title:"Diagrama de sequencia: Saludar"}),r.jsx(C,{title:"Exemple: Prestar un llibre"}),r.jsxs(S,{variant:"explanation",children:[r.jsx("p",{children:"Aquest diagrama mostra la sequencia d'interaccions quan es vol prestar un llibre de la biblioteca. Fixa't com:"}),r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:["El ",r.jsx("code",{children:"Main"})," primer ",r.jsx("strong",{children:"busca"})," el llibre i despres el ",r.jsx("strong",{children:"presta"}),"."]}),r.jsxs("li",{children:["La ",r.jsx("code",{children:"Biblioteca"})," delega l'operacio de prestec al propi ",r.jsx("code",{children:"Llibre"}),"."]}),r.jsxs("li",{children:["El ",r.jsx("code",{children:"Llibre"})," actualitza el seu estat intern (",r.jsx("code",{children:"disponible = false"}),")."]}),r.jsxs("li",{children:["La ",r.jsx("strong",{children:"nota"})," al final aclareix l'estat final del sistema."]})]})]}),r.jsx(_e,{src:"seq-biblioteca",title:"Diagrama de sequencia: Prestar un llibre"}),r.jsx(C,{title:"Exemple amb condicionals (alt/else)"}),r.jsx(S,{variant:"info",children:r.jsxs("p",{children:["Els diagrames de sequencia tambe poden representar ",r.jsx("strong",{children:"decisions condicionals"})," amb els fragments ",r.jsx("code",{children:"alt"})," (alternativa) i ",r.jsx("code",{children:"else"}),". Funcionen com un",r.jsx("code",{children:" if/else"})," en Java: segons la condicio, s'executa un cami o un altre."]})}),r.jsx(_e,{src:"seq-condicional",title:"Diagrama de sequencia: Divisio amb control d'error"}),r.jsx(C,{title:"Exemple avancat: Sistema HydroFlow"}),r.jsxs(S,{variant:"explanation",children:[r.jsxs("p",{children:["Un exemple professional amb ",r.jsx("strong",{children:"activacions"})," (barres verticals que mostren quan un objecte esta treballant) i un fragment ",r.jsx("strong",{children:"loop"})," (bucle). L'operador demana reomplir el tanc, el sistema comprova el nivell d'aigua i repeteix l'operacio fins que arriba al minim."]}),r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:[r.jsx("strong",{children:"activate/deactivate"}),": mostren quan un objecte esta processant una crida"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"loop"}),": repeteix el bloc mentre ",r.jsx("code",{children:"waterLevel < MIN"})]}),r.jsxs("li",{children:["Les ",r.jsx("strong",{children:"fletxes numerades"})," indiquen l'ordre temporal"]})]})]}),r.jsx(_e,{src:"seq-hydroflow",title:"Sistema HydroFlow (amb loop i activacions)"}),r.jsx(S,{variant:"warning",title:"Fragments comuns",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:[r.jsx("strong",{children:"alt / else"}),": condicional (if/else). Nomes s'executa un dels camins."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"loop"}),": repeticio (for/while). El bloc es repeteix mentre es compleixi la condicio."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"opt"}),": opcional (if sense else). El bloc s'executa nomes si es compleix la condicio."]})]})}),r.jsx(C,{title:"Relacio amb el codi Java"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["Cada ",r.jsx("strong",{children:"fletxa"})," del diagrama de sequencia correspon a una ",r.jsx("strong",{children:"linia de codi"})," Java. Vegem com es tradueix l'exemple del Salutador:"]})}),r.jsxs(fe,{children:[r.jsx(G,{title:"Codi Java",variant:"blue",children:r.jsx(E,{code:Dw,showLineNumbers:!0})}),r.jsx(G,{title:"Correspondencia amb el diagrama",variant:"good",children:r.jsx(re,{headers:["Linia de codi","Fletxa al diagrama"],rows:[{cells:['new Salutador("catala")','Main ->> Salutador: new Salutador("catala")']},{cells:['s.saludar("Maria")','Main ->> Salutador: saludar("Maria")']},{cells:['return "Hola, Maria!"','Salutador -->> Main: "Hola, Maria!"']},{cells:["System.out.println()","Main ->> Main: System.out.println()"]}]})})]}),r.jsx(E,{label:"Classe Salutador completa",code:Ow,showLineNumbers:!0}),r.jsx(C,{title:"Quan usar diagrames de sequencia?"}),r.jsxs(ge,{children:[r.jsx(P,{title:"Depurar fluxos complexos",variant:"blue",children:r.jsxs("p",{children:["Quan un programa te moltes classes que interactuen entre elles, un diagrama de sequencia ajuda a ",r.jsx("strong",{children:"visualitzar l'ordre"})," de les crides i trobar errors de logica."]})}),r.jsx(P,{title:"Documentar APIs",variant:"yellow",children:r.jsxs("p",{children:["Quan dissenyes un sistema amb multiples components, els diagrames de sequencia documenten ",r.jsx("strong",{children:"com es comuniquen"})," entre ells i quines dades s'intercanvien."]})}),r.jsx(P,{title:"Entendre codi existent",variant:"green",children:r.jsxs("p",{children:["Quan arribes a un projecte nou, dibuixar un diagrama de sequencia t'ajuda a",r.jsx("strong",{children:" comprendre el flux"})," del programa sense haver de llegir tot el codi."]})}),r.jsx(P,{title:"Planificar noves funcionalitats",variant:"pink",children:r.jsxs("p",{children:["Abans de programar una nova funcionalitat, dibuixa el diagrama de sequencia per",r.jsx("strong",{children:" planificar"})," quins objectes necessites i com interactuaran."]})})]}),r.jsx(S,{variant:"success",title:"Resum",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:["Un ",r.jsx("strong",{children:"diagrama de sequencia"})," mostra l'ordre de les interaccions entre objectes al llarg del temps."]}),r.jsxs("li",{children:["L'eix ",r.jsx("strong",{children:"vertical"})," representa el temps i l'eix ",r.jsx("strong",{children:"horitzontal"})," els objectes participants."]}),r.jsxs("li",{children:["Les ",r.jsx("strong",{children:"fletxes continues"})," representen crides a metodes; les ",r.jsx("strong",{children:"fletxes discontinues"})," representen valors de retorn."]}),r.jsxs("li",{children:["Les ",r.jsx("strong",{children:"activacions"})," mostren quan un objecte esta processant una operacio."]}),r.jsxs("li",{children:["Els fragments ",r.jsx("code",{children:"alt/else"}),", ",r.jsx("code",{children:"loop"})," i ",r.jsx("code",{children:"opt"})," permeten representar ",r.jsx("strong",{children:"condicionals i bucles"}),"."]}),r.jsxs("li",{children:["Cada fletxa del diagrama correspon a una ",r.jsx("strong",{children:"linia de codi"})," Java."]})]})})]})}function Fw(){return r.jsxs("div",{children:[r.jsx(C,{title:"Diagrames de flux"}),r.jsxs(S,{variant:"info",title:"Que es un diagrama de flux?",children:[r.jsxs("p",{children:["Un ",r.jsx("strong",{children:"diagrama de flux"})," representa el ",r.jsx("strong",{children:"flux d'un algorisme"})," o proces pas a pas, de manera visual. Es una eina essencial per ",r.jsx("strong",{children:"planificar abans de programar"}),", ja que ens permet veure l'estructura logica del programa sense escriure codi."]}),r.jsx("p",{style:{marginTop:"8px"},children:"Cada forma geometrica representa un tipus d'accio diferent, i les fletxes indiquen l'ordre d'execucio."})]}),r.jsx(C,{title:"Simbols estandard"}),r.jsx(re,{headers:["Forma","Nom","Significat"],rows:[{cells:["Oval / Rectangle arrodonit","Inici / Fi","Marca el punt d'inici o de finalitzacio del flux"]},{cells:["Rectangle","Proces / Accio","Representa una instruccio o operacio (assignacio, calcul...)"]},{cells:["Rombe (Diamond)","Decisio / Condicio","Representa una pregunta amb dues sortides: Si o No"]},{cells:["Parallelogram","Entrada / Sortida","Llegir dades de l'usuari o mostrar resultats per pantalla"]},{cells:["Fletxa","Flux / Direccio","Indica l'ordre en que s'executen les accions"]}]}),r.jsx(C,{title:"Exemple: Nombre parell o senar"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["Un flux senzill amb una ",r.jsx("strong",{children:"decisio"}),": llegim un numero i comprovem si es parell o senar mitjancant l'operador modul (%)."]})}),r.jsx(_e,{src:"flux-parell-senar",title:"Flux: Nombre parell o senar"}),r.jsx(C,{title:"Exemple: Bucle for"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["Un bucle ",r.jsx("strong",{children:"for"})," es representa amb una decisio que torna enrere. Mentre la condicio es certa, es processa l'element i s'incrementa el comptador. Quan la condicio es falsa, el flux surt del bucle."]})}),r.jsx(_e,{src:"flux-bucle-for",title:"Flux: Bucle for sobre un array"}),r.jsx(C,{title:"Exemple: Calcul de nota final"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["Un exemple mes complex amb ",r.jsx("strong",{children:"multiples decisions encadenades"}),". Primer calculem la mitjana de tres notes i despres avaluem el resultat amb condicions niuades."]})}),r.jsx(_e,{src:"flux-nota-final",title:"Flux: Calcul de nota final"}),r.jsx(C,{title:"Exemple avancat: Sistema de Login"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["Un diagrama mes realista que combina ",r.jsx("strong",{children:"bucles"}),", ",r.jsx("strong",{children:"decisions niuades"})," i",r.jsx("strong",{children:" multiples camins"}),". El sistema demana credencials, verifica l'usuari i la contrasenya, i bloqueja el compte despres de 3 intents fallits."]})}),r.jsx(_e,{src:"flux-login",title:"Flux: Sistema de Login amb control d'intents"}),r.jsx(C,{title:"Del diagrama al codi"}),r.jsx(S,{variant:"info",title:"Cada forma te el seu equivalent en Java",children:r.jsx("p",{children:"La gran utilitat dels diagrames de flux es que es poden traduir directament a codi. Cada simbol del diagrama correspon a una estructura del llenguatge de programacio."})}),r.jsx(re,{headers:["Simbol del diagrama","Estructura en Java"],rows:[{cells:["Oval (Inici/Fi)","Inici i fi del metode main()"]},{cells:["Rectangle (Proces)","Instruccio o assignacio (variable = valor;)"]},{cells:["Rombe (Decisio)","Estructura condicional (if / else if / else)"]},{cells:["Parallelogram (Entrada)","Scanner per llegir dades (scanner.nextInt())"]},{cells:["Parallelogram (Sortida)","System.out.println() per mostrar resultats"]},{cells:["Fletxa que torna enrere","Bucle (for, while)"]}]}),r.jsx(E,{label:"Codi Java equivalent al diagrama de nota final",showLineNumbers:!0,code:`import java.util.Scanner;

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
}`}),r.jsx(C,{title:"Bones practiques"}),r.jsxs(ge,{children:[r.jsx(P,{title:"Inici i Fi clars",variant:"blue",children:r.jsxs("p",{children:["Sempre comenca amb un simbol d'",r.jsx("strong",{children:"Inici"})," i acaba amb un simbol de ",r.jsx("strong",{children:"Fi"}),". Tot flux ha de tenir un principi i un final ben definits."]})}),r.jsx(P,{title:"Un sol flux d'entrada",variant:"yellow",children:r.jsxs("p",{children:["Cada simbol ha de tenir ",r.jsx("strong",{children:"un sol flux d'entrada"}),". Pot tenir multiples sortides (com les decisions), pero nomes una entrada."]})}),r.jsx(P,{title:"Decisions amb 2 sortides",variant:"green",children:r.jsxs("p",{children:["Les decisions (rombes) han de tenir ",r.jsx("strong",{children:"exactament 2 sortides"}),": una per ",r.jsx("strong",{children:"Si"})," i una per ",r.jsx("strong",{children:"No"}),". Si necessites mes opcions, encadena multiples decisions."]})}),r.jsx(P,{title:"Direccio consistent",variant:"pink",children:r.jsxs("p",{children:["El flux ha d'anar de ",r.jsx("strong",{children:"dalt a baix"})," i d'",r.jsx("strong",{children:"esquerra a dreta"}),". Aixo fa que el diagrama sigui intuitiu i facil de llegir."]})})]}),r.jsx(S,{variant:"success",title:"Resum",children:r.jsx("p",{children:"Els diagrames de flux son una eina fonamental per planificar algorismes abans d'escriure codi. Cada forma geometrica representa un tipus d'accio (proces, decisio, entrada/sortida) i les fletxes marquen l'ordre d'execucio. Aprendre a llegir-los i crear-los es el primer pas per pensar com un programador."})})]})}function qw(){return r.jsxs("div",{children:[r.jsx(C,{title:"Diagrames de casos d'us"}),r.jsxs(S,{variant:"info",title:"Que es un diagrama de casos d'us?",children:[r.jsxs("p",{children:["Un ",r.jsx("strong",{children:"diagrama de casos d'us"})," mostra ",r.jsx("strong",{children:"QUE"})," fa un sistema des de la perspectiva de l'usuari. ",r.jsx("strong",{children:"No"})," mostra COM ho fa (aixo ho fan altres diagrames com els de flux o els de sequencia)."]}),r.jsxs("p",{style:{marginTop:"8px"},children:["Identifica els ",r.jsx("strong",{children:"actors"})," (qui utilitza el sistema) i les seves",r.jsx("strong",{children:" interaccions"})," amb les funcionalitats del sistema. Es el primer diagrama que es fa quan s'analitzen els requisits d'un projecte."]})]}),r.jsx(C,{title:"Elements d'un diagrama de casos d'us"}),r.jsx(re,{headers:["Element","Representacio","Descripcio"],rows:[{cells:["Actor","Figura de pal (stick figure)","Qui utilitza el sistema: persona, altre sistema o dispositiu"]},{cells:["Cas d'us","Oval / El·lipse","Una funcionalitat que el sistema ofereix a l'actor"]},{cells:["Sistema","Rectangle gran","El limit del sistema; els casos d'us van dins, els actors fora"]},{group:"Tipus de relacions"},{cells:["Associacio","Linia continua","Connecta un actor amb un cas d'us que utilitza"]},{cells:["<<include>>","Fletxa discontinua amb <<include>>","Un cas d'us SEMPRE inclou un altre (obligatori)"]},{cells:["<<extend>>","Fletxa discontinua amb <<extend>>","Un cas d'us OPCIONALMENT amplia un altre (condicional)"]}]}),r.jsx(C,{title:"Exemple: Sistema de Biblioteca"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["Vegem un exemple complet amb dos actors (",r.jsx("strong",{children:"Bibliotecari"})," i ",r.jsx("strong",{children:"Alumne"}),"). Fixa't que ",r.jsx("strong",{children:"Buscar llibre"})," es un cas d'us compartit entre els dos actors, i que ",r.jsx("strong",{children:"Prestar llibre"})," inclou obligatoriament",r.jsx("strong",{children:" Verificar disponibilitat"}),"."]})}),r.jsx(_e,{src:"casosus-biblioteca",title:"Casos d'us: Sistema de Biblioteca"}),r.jsx(C,{title:"Exemple: Calculadora"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["Un exemple mes senzill amb un sol actor i una relacio",r.jsx("strong",{children:" <<extend>>"}),": la divisio pot provocar un error si es divideix per zero, pero no sempre. Per tant es una extensio condicional."]})}),r.jsx(_e,{src:"casosus-calculadora",title:"Casos d'us: Calculadora"}),r.jsx(C,{title:"Exemple complet: Restaurant"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["Un exemple mes realista amb ",r.jsx("strong",{children:"tres actors"})," (Client, Cambrer, Administrador) i multiples relacions. Observa com cada actor te funcionalitats propies i algunes son compartides. Aquest tipus de diagrama es el que es faria al comenar a analitzar un sistema de gestio de restaurant."]})}),r.jsx(_e,{src:"casosus-restaurant",title:"Casos d'us: Sistema de Reserves Restaurant"}),r.jsx(C,{title:"Include vs Extend"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["Diferenciar ",r.jsx("strong",{children:"<<include>>"})," i",r.jsx("strong",{children:" <<extend>>"})," es un dels conceptes clau dels diagrames de casos d'us. Vegem-ne la comparacio:"]})}),r.jsxs(fe,{children:[r.jsxs(G,{title:"<<include>> (Inclusio)",variant:"good",children:[r.jsxs("p",{style:{marginTop:"8px"},children:["El cas d'us inclos s'executa ",r.jsx("strong",{children:"SEMPRE"}),". Es una relacio ",r.jsx("strong",{children:"obligatoria"}),"."]}),r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Prestar llibre"})," inclou ",r.jsx("strong",{children:"Verificar disponibilitat"})]}),r.jsx("li",{children:"No es pot prestar un llibre sense verificar primer si esta disponible"}),r.jsx("li",{children:"La verificacio passa CADA vegada"})]}),r.jsx(E,{code:`// En codi seria com:
void prestarLlibre() {
    verificarDisponibilitat(); // SEMPRE
    // ... prestar el llibre
}`})]}),r.jsxs(G,{title:"<<extend>> (Extensio)",variant:"bad",children:[r.jsxs("p",{style:{marginTop:"8px"},children:["El cas d'us estes s'executa ",r.jsx("strong",{children:"OPCIONALMENT"}),", nomes si es compleix una condicio. Es una relacio ",r.jsx("strong",{children:"condicional"}),"."]}),r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Dividir"})," pot estendre ",r.jsx("strong",{children:"Mostrar error"})]}),r.jsx("li",{children:"L'error nomes apareix si el divisor es zero"}),r.jsx("li",{children:"La majoria de vegades NO passa"})]}),r.jsx(E,{code:`// En codi seria com:
void dividir(int a, int b) {
    if (b == 0) {
        mostrarError(); // NOMES si b == 0
        return;
    }
    System.out.println(a / b);
}`})]})]}),r.jsx(C,{title:"Per a que serveixen?"}),r.jsxs(ge,{children:[r.jsx(P,{title:"Entendre requisits",variant:"blue",children:r.jsxs("p",{children:["Permeten ",r.jsx("strong",{children:"entendre els requisits"})," del sistema abans de comencar a programar. Defineixen clarament que ha de fer el sistema i qui ho utilitza."]})}),r.jsx(P,{title:"Comunicar-se amb el client",variant:"yellow",children:r.jsxs("p",{children:["Son un ",r.jsx("strong",{children:"llenguatge visual"})," que tant els programadors com els clients poden entendre. Faciliten la comunicacio i eviten malentesos sobre les funcionalitats."]})}),r.jsx(P,{title:"Planificar funcionalitats",variant:"green",children:r.jsxs("p",{children:["Ajuden a ",r.jsx("strong",{children:"planificar les funcionalitats"})," del sistema de manera organitzada. Permeten prioritzar que es desenvolupa primer i distribuir la feina entre l'equip."]})}),r.jsx(P,{title:"Base per a altres diagrames UML",variant:"pink",children:r.jsxs("p",{children:["Son la ",r.jsx("strong",{children:"base per als altres diagrames UML"}),": diagrames de classes, de sequencia, d'activitats... Cada cas d'us es pot detallar amb diagrames mes especifics."]})})]}),r.jsx(S,{variant:"success",title:"Resum",children:r.jsxs("p",{children:["Els diagrames de casos d'us mostren ",r.jsx("strong",{children:"QUE"})," fa un sistema des de la perspectiva dels usuaris. Identifiquen actors, funcionalitats i les relacions entre ells (associacio, include i extend). Son el primer pas per analitzar i planificar un projecte de programari, i serveixen com a pont de comunicacio entre l'equip de desenvolupament i el client."]})})]})}function zw(){return r.jsxs("div",{children:[r.jsx(C,{title:"Anatomia d'un projecte Java real"}),r.jsx(S,{variant:"info",title:"Per que estudiar projectes reals?",children:r.jsxs("p",{children:["Saber programar classes i funcions es nomes una part del treball. Al mon real, un projecte de programari te ",r.jsx("strong",{children:"desenes de fitxers"})," amb funcions molt diferents: configuracio, tests, documentacio, base de dades, desplegament... Entendre ",r.jsx("strong",{children:"que fa cada fitxer i per que existeix"})," es el que diferencia un estudiant d'un professional."]})}),r.jsx(C,{title:"Estructura completa d'un projecte"}),r.jsx(S,{variant:"explanation",title:"No nomes hi ha codi dins src/",children:r.jsxs("p",{children:["Quan obriu un projecte Java professional a GitHub, trobareu molts mes fitxers que nomes el codi font. Cada fitxer te una funcio essencial. Vegem el nostre",r.jsx("strong",{children:" Sistema de Restaurant"})," com a exemple complet:"]})}),r.jsx(E,{label:"Estructura completa del projecte (TOTS els fitxers)",showLineNumbers:!0,code:`restaurant-app/
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
├── pom.xml                        # Configuracio Maven (dependencies)
│
├── src/
│   ├── main/
│   │   ├── java/cat/lasalle/restaurant/
│   │   │   ├── RestaurantApp.java          # Punt d'entrada (main)
│   │   │   │
│   │   │   ├── model/                      # DADES (classes de domini)
│   │   │   │   ├── Restaurant.java
│   │   │   │   ├── Taula.java
│   │   │   │   ├── Client.java
│   │   │   │   ├── Reserva.java
│   │   │   │   ├── Menu.java
│   │   │   │   ├── Plat.java
│   │   │   │   ├── Comanda.java
│   │   │   │   └── LiniaComanda.java
│   │   │   │
│   │   │   ├── repository/                 # ACCES A BASE DE DADES
│   │   │   │   ├── ReservaRepository.java  # CRUD reserves
│   │   │   │   ├── ClientRepository.java   # CRUD clients
│   │   │   │   └── PlatRepository.java     # CRUD plats
│   │   │   │
│   │   │   ├── service/                    # LOGICA DE NEGOCI
│   │   │   │   ├── ServeiReserves.java     # Crear, confirmar, cancelar
│   │   │   │   ├── ServeiComandes.java     # Gestionar comandes
│   │   │   │   └── ServeiMenu.java         # Filtrar plats, preus
│   │   │   │
│   │   │   └── controller/                 # API REST (punts d'entrada)
│   │   │       ├── ReservaController.java  # /api/reserves
│   │   │       ├── MenuController.java     # /api/menu
│   │   │       └── ComandaController.java  # /api/comandes
│   │   │
│   │   └── resources/
│   │       ├── application.properties      # Configuracio (BD, port...)
│   │       └── schema.sql                  # Estructura de la BD
│   │
│   └── test/java/cat/lasalle/restaurant/   # TESTS AUTOMATICS
│       ├── model/
│       │   ├── TaulaTest.java
│       │   └── ReservaTest.java
│       ├── service/
│       │   └── ServeiReservesTest.java
│       └── controller/
│           └── ReservaControllerTest.java
│
└── docs/                          # Documentacio addicional
    ├── diagrames-uml/
    └── api-reference.md`}),r.jsx(C,{title:"Que fa cada fitxer?"}),r.jsx(re,{headers:["Fitxer","Que fa","Per que es important"],rows:[{group:"Arrel del projecte"},{cells:["pom.xml","Defineix dependencies (Spring Boot, JUnit, driver BD), versions i com compilar",'Sense aixo, el projecte no compila. Es com la "llista de la compra" del projecte']},{cells:[".gitignore","Diu a Git quins fitxers ignorar: /target, .class, .env, IDE configs","Evita pujar fitxers compilats, secrets o configuracions locals al repositori"]},{cells:["README.md","Documentacio: que fa el projecte, com instal·lar-lo, com executar-lo","El primer que llegeix qualsevol persona que arriba al projecte"]},{cells:["Dockerfile","Instruccions per empaquetar l'app en un contenidor Docker","Permet executar l'app en qualsevol servidor sense instal·lar res"]},{cells:["docker-compose.yml","Orquestra multiples contenidors: l'app + la base de dades",'Amb un sol "docker-compose up" tens tot funcionant']},{cells:["LICENSE","Llicencia legal del codi (MIT, Apache 2.0, GPL...)","Defineix qui pot usar el codi i com. Sense llicencia, legalment ningu pot usar-lo"]},{group:"Configuracio CI/CD"},{cells:[".github/workflows/ci.yml","Pipeline automatica: cada cop que fas push, executa tests","Si algu puja codi que trenca els tests, el sistema ho detecta automaticament"]},{group:"Codi font (src/main)"},{cells:["model/","Classes de domini: les dades del sistema (Taula, Reserva, Client...)","Son les classes que heu apres: atributs privats, getters, setters, constructors"]},{cells:["repository/","Acces a la base de dades: guardar, buscar, eliminar registres","Separa la logica de BD del resta del codi. Si canvies de MySQL a PostgreSQL, nomes toques aqui"]},{cells:["service/",'Logica de negoci: regles com "no es pot reservar si no hi ha taules"',"Aqui van les regles del negoci, NO als controllers ni als models"]},{cells:["controller/","Punts d'entrada de l'API: reben peticions HTTP i retornen respostes","Son el pont entre el frontend (web/app) i la logica del backend"]},{cells:["resources/application.properties","Configuracio: URL de la BD, port del servidor, credencials","MAI es puja al repositori amb contrasenyes reals (es posa al .gitignore)"]},{group:"Tests (src/test)"},{cells:["*Test.java","Tests automatics que verifiquen que cada classe funciona correctament","Cada cop que modifiques codi, els tests et diuen si has trencat alguna cosa"]}]}),r.jsx(C,{title:"Diagrama de classes: el planol del sistema"}),r.jsx(S,{variant:"explanation",children:r.jsxs("p",{children:["Abans de programar, dissenyem l'estructura. Fixa't en les relacions:",r.jsx("strong",{children:" composicio"})," (Restaurant conte Taules) i ",r.jsx("strong",{children:"associacio"}),"(Reserva referencia un Client)."]})}),r.jsx(_e,{src:"projecte-classes",title:"Diagrama de classes: Sistema Restaurant"}),r.jsx(C,{title:"Sequencia: fer una reserva"}),r.jsx(_e,{src:"projecte-seq-reserva",title:"Sequencia: Fer una reserva"}),r.jsx(E,{label:"Codi Java del metode ferReserva()",showLineNumbers:!0,code:`public class ServeiReserves {
    private ReservaRepository reservaRepo;

    public Reserva ferReserva(Client client, Date data, int persones) {
        // 1. Buscar taula disponible
        Taula taula = getTaulaDisponible(data, persones);
        if (taula == null) {
            throw new RuntimeException("No hi ha taules disponibles");
        }

        // 2. Crear la reserva
        Reserva reserva = new Reserva(client, taula, data, persones);
        taula.ocupar();

        // 3. Guardar a la base de dades
        reservaRepo.save(reserva);

        return reserva;
    }
}`}),r.jsx(C,{title:"Arquitectura: com encaixen les peces"}),r.jsx(S,{variant:"info",title:"Frontend + Backend + Base de Dades",children:r.jsxs("p",{children:["Un projecte real no es nomes Java. Normalment te tres capes: el ",r.jsx("strong",{children:"frontend"})," (el que veu l'usuari), el ",r.jsx("strong",{children:"backend"}),"(la logica en Java) i la ",r.jsx("strong",{children:"base de dades"})," (on es guarden les dades permanentment). El backend exposa una ",r.jsx("strong",{children:"API REST"})," que el frontend consumeix."]})}),r.jsx(_e,{src:"projecte-arquitectura",title:"Arquitectura d'una aplicacio real"}),r.jsx(re,{headers:["Capa","Tecnologies tipiques","Que fa"],rows:[{cells:["Frontend (web)","React, Angular, Vue, HTML/CSS","La interficie visual que l'usuari veu al navegador o al mobil"]},{cells:["Frontend (mobil)","Android (Kotlin/Java), iOS (Swift), Flutter","L'app que l'usuari descarrega al telefon"]},{cells:["Backend (API)","Spring Boot (Java), Node.js, Django (Python)","Processa peticions, aplica regles de negoci, accedeix a la BD"]},{cells:["Base de Dades","PostgreSQL, MySQL, MongoDB","Emmagatzema dades de forma permanent (clients, reserves, plats...)"]}]}),r.jsx(S,{variant:"explanation",title:"Com es comuniquen?",children:r.jsxs("p",{children:["El frontend envia peticions ",r.jsx("strong",{children:"HTTP"})," a l'API del backend. Per exemple, quan un client vol fer una reserva des de l'app, l'app envia un",r.jsx("code",{children:" POST /api/reserves"})," amb les dades. El backend processa la peticio, guarda a la BD i retorna la confirmacio. Aixo es el que fan els",r.jsx("strong",{children:" controllers"})," al nostre projecte."]})}),r.jsx(E,{label:"Exemple: Controller que rep peticions HTTP",showLineNumbers:!0,code:`@RestController
@RequestMapping("/api/reserves")
public class ReservaController {
    private ServeiReserves serveiReserves;

    // POST /api/reserves  (crear nova reserva)
    @PostMapping
    public Reserva crearReserva(@RequestBody ReservaRequest request) {
        Client client = new Client(request.getNom(), request.getTelefon(), "");
        return serveiReserves.ferReserva(
            client, request.getData(), request.getPersones()
        );
    }

    // GET /api/reserves  (llistar totes les reserves)
    @GetMapping
    public List<Reserva> llistarReserves() {
        return serveiReserves.getReserves();
    }

    // DELETE /api/reserves/5  (cancelar reserva amb id=5)
    @DeleteMapping("/{id}")
    public void cancelarReserva(@PathVariable int id) {
        serveiReserves.cancelar(id);
    }
}`}),r.jsx(C,{title:"Com treballen equips de centenars de programadors?"}),r.jsx(S,{variant:"explanation",title:"El problema: centenars de persones tocant el mateix codi",children:r.jsxs("p",{children:["Imagineu un projecte com ",r.jsx("strong",{children:"java-design-patterns"})," a GitHub (93.800+ estrelles, centenars de contribuidors) o una empresa com Google amb milers de programadors. Com eviten que tot peti? Com protegeixen el codi? La resposta te quatre pilars: ",r.jsx("strong",{children:"Git amb branques"}),",",r.jsx("strong",{children:" Pull Requests"}),", ",r.jsx("strong",{children:"tests automatics"})," i",r.jsx("strong",{children:" CI/CD"}),"."]})}),r.jsx(C,{title:"1. Git Branching: cada un treballa en la seva branca"}),r.jsx(S,{variant:"info",children:r.jsxs("p",{children:[r.jsx("strong",{children:"NINGU"})," treballa directament sobre la branca ",r.jsx("code",{children:"main"}),". Cada programador crea una ",r.jsx("strong",{children:"branca"})," (branch) propia per a cada funcionalitat. Aixi, els canvis d'una persona no afecten el treball dels altres fins que es revisen i s'aproven."]})}),r.jsx(_e,{src:"projecte-gitflow",title:"Flux de treball amb branques Git"}),r.jsx(re,{headers:["Branca","Per a que serveix","Qui hi treballa"],rows:[{cells:["main","Codi estable, llest per produccio. MAI es toca directament.","Ningu directament. Nomes rep merges aprovats."]},{cells:["develop","Integracio de totes les funcionalitats en desenvolupament.","Es on es fusionen les feature branches un cop aprovades."]},{cells:["feature/reserves","Una funcionalitat concreta (les reserves del restaurant).","Un programador o un petit equip (2-3 persones)."]},{cells:["feature/menu","Una altra funcionalitat (el menu de plats).","Un altre programador, en parallel."]},{cells:["hotfix/bug-123","Corregir un error urgent en produccio.","El programador assignat al bug."]}]}),r.jsx(C,{title:"2. Pull Requests: revisio de codi obligatoria"}),r.jsxs(S,{variant:"explanation",title:"Com funciona una Pull Request (PR)?",children:[r.jsxs("p",{children:["Quan un programador acaba la seva funcionalitat, ",r.jsx("strong",{children:"no la fusiona directament"}),". Obre una ",r.jsx("strong",{children:"Pull Request"})," (PR) a GitHub, que es basicamente dir:",r.jsx("em",{children:' "He acabat, podeu revisar els meus canvis?"'})]}),r.jsxs("p",{style:{marginTop:"8px"},children:["Un o dos companys ",r.jsx("strong",{children:"revisen el codi"})," linia per linia, deixen comentaris, suggereixen millores i, si tot esta be, ",r.jsx("strong",{children:"aproven"})," la PR. Nomes quan esta aprovada es pot fusionar a ",r.jsx("code",{children:"develop"}),"."]})]}),r.jsxs(ge,{children:[r.jsx(P,{title:"El revisor comprova:",variant:"blue",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[r.jsx("li",{children:"El codi segueix les convencions de l'equip?"}),r.jsx("li",{children:"Hi ha tests per la nova funcionalitat?"}),r.jsx("li",{children:"El codi es clar i facil de mantenir?"}),r.jsx("li",{children:"No introdueix bugs ni vulnerabilitats?"})]})}),r.jsx(P,{title:"Regles habituals:",variant:"yellow",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[r.jsx("li",{children:"Minim 1-2 aprovacions per fusionar"}),r.jsx("li",{children:"L'autor NO pot aprovar la seva propia PR"}),r.jsx("li",{children:"Tots els tests han de passar"}),r.jsxs("li",{children:["La branca ",r.jsx("code",{children:"main"})," esta ",r.jsx("strong",{children:"protegida"})]})]})})]}),r.jsx(C,{title:"3. Tests automatics: la xarxa de seguretat"}),r.jsx(S,{variant:"info",children:r.jsxs("p",{children:["Cada classe del projecte te tests associats. Cada cop que algu modifica codi, els tests es poden executar automaticament per verificar que ",r.jsx("strong",{children:"res no s'ha trencat"}),". Si un test falla, el canvi no es pot fusionar."]})}),r.jsx(E,{label:"Exemple: Test de la classe Taula",showLineNumbers:!0,code:`import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class TaulaTest {
    @Test
    void taulaNovaEstaDisponible() {
        Taula t = new Taula(1, 4);
        assertTrue(t.isDisponible(new Date()));
    }

    @Test
    void taulaOcupadaNoEstaDisponible() {
        Taula t = new Taula(1, 4);
        t.ocupar();
        assertFalse(t.isDisponible(new Date()));
    }

    @Test
    void alliberarTaulaLaFaDisponible() {
        Taula t = new Taula(1, 4);
        t.ocupar();
        t.alliberar();
        assertTrue(t.isDisponible(new Date()));
    }
}`}),r.jsx(re,{headers:["Tipus de test","Que prova","Exemple"],rows:[{cells:["Unitari","Una sola classe o metode, aillat","TaulaTest: comprova que ocupar() i alliberar() funcionen"]},{cells:["Integracio","Multiples classes treballant juntes","ServeiReservesTest: comprova que ferReserva() crea una reserva a la BD"]},{cells:["End-to-End (E2E)","Tot el sistema, de frontend a BD","Simula un usuari fent una reserva des de l'app"]}]}),r.jsx(C,{title:"4. CI/CD: automatitzar tot el proces"}),r.jsxs(S,{variant:"explanation",title:"Que es CI/CD?",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"CI"})," (Continuous Integration): cada cop que algu fa push, automaticament s'executen els tests. Si algun test falla, tothom ho sap immediatament."]}),r.jsxs("p",{style:{marginTop:"8px"},children:[r.jsx("strong",{children:"CD"})," (Continuous Deployment): si tots els tests passen, l'aplicacio es desplega automaticament al servidor. Sense intervencio humana."]})]}),r.jsx(_e,{src:"projecte-cicd",title:"Pipeline CI/CD"}),r.jsx(E,{label:"Exemple: fitxer .github/workflows/ci.yml (GitHub Actions)",showLineNumbers:!0,code:`name: CI Pipeline

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
        run: mvn package -DskipTests`}),r.jsx(C,{title:"Bones practiques professionals"}),r.jsxs(ge,{children:[r.jsx(P,{title:"Una classe = una responsabilitat",variant:"blue",children:r.jsxs("p",{children:[r.jsx("code",{children:"Taula.java"})," nomes gestiona l'estat d'una taula.",r.jsx("code",{children:" ServeiReserves.java"})," nomes la logica de reserves. Cap classe fa mes d'una cosa. Aixo facilita trobar errors i modificar codi sense trencar res."]})}),r.jsx(P,{title:"Noms descriptius",variant:"yellow",children:r.jsxs("p",{children:[r.jsx("code",{children:"ferReserva()"})," es millor que ",r.jsx("code",{children:"f()"}),".",r.jsx("code",{children:" ServeiComandes"})," es millor que ",r.jsx("code",{children:"SC"}),". Qualsevol persona que llegeixi el codi ha d'entendre que fa sense llegir la implementacio."]})}),r.jsx(P,{title:"Tests per tot",variant:"green",children:r.jsxs("p",{children:["No es publica codi sense tests. El ratio habitual a la industria es ",r.jsx("strong",{children:"70-80% de cobertura"}),": un de cada quatre linies de codi te un test que la verifica."]})}),r.jsx(P,{title:"Documentar decisions",variant:"pink",children:r.jsxs("p",{children:["El ",r.jsx("code",{children:"README.md"})," explica com instal·lar i executar. Els comentaris al codi expliquen el ",r.jsx("strong",{children:"per que"}),", no el que (el codi ja diu el que). Les PRs documenten els canvis."]})})]}),r.jsx(C,{title:"Projectes de referencia a GitHub"}),r.jsx(S,{variant:"info",title:"Aprendre dels millors",children:r.jsx("p",{children:"A GitHub hi ha milers de projectes Java de codi obert. Exploreu-los per veure com els professionals apliquen tot el que hem explicat."})}),r.jsxs(fe,{children:[r.jsxs(G,{title:"java-design-patterns",variant:"blue",children:[r.jsx("p",{style:{marginTop:"8px"},children:r.jsx("code",{children:"github.com/iluwatar/java-design-patterns"})}),r.jsxs("p",{style:{marginTop:"8px"},children:[r.jsx("strong",{children:"93.800+ estrelles"})," - La millor referencia per aprendre patrons de disseny en Java. Mes de 195 patrons implementats, cadascun amb el seu propi modul, tests, diagrames UML i documentacio. Organitzat amb Maven, cada patro es un submodul independent."]}),r.jsxs("p",{style:{marginTop:"8px"},children:["Patrons rellevants: ",r.jsx("strong",{children:"Facade"})," (una classe simple que amaga complexitat), ",r.jsx("strong",{children:"Observer"})," (notificar canvis),",r.jsx("strong",{children:" Strategy"})," (canviar algoritme), ",r.jsx("strong",{children:"Builder"}),"(crear objectes pas a pas)."]})]}),r.jsxs(G,{title:"Spring PetClinic",variant:"good",children:[r.jsx("p",{style:{marginTop:"8px"},children:r.jsx("code",{children:"github.com/spring-projects/spring-petclinic"})}),r.jsxs("p",{style:{marginTop:"8px"},children:["L'exemple oficial de ",r.jsx("strong",{children:"Spring Boot"}),", el framework Java mes popular per a aplicacions web. Una clinica veterinaria amb MVC complet: controllers, services, repositories, templates HTML, base de dades. Perfecte per veure com es fa una app web Java real."]})]})]}),r.jsx(S,{variant:"success",title:"Resum",children:r.jsxs("p",{children:["Un projecte Java real es ",r.jsx("strong",{children:"molt mes que codi"}),". Inclou configuracio (pom.xml), documentacio (README), tests, pipeline CI/CD, Dockerfile i una estructura clara de carpetes. Els equips professionals treballen amb",r.jsx("strong",{children:" branques Git"}),", ",r.jsx("strong",{children:"Pull Requests"})," amb revisions obligatories, ",r.jsx("strong",{children:"tests automatics"})," i ",r.jsx("strong",{children:"CI/CD"})," per garantir que el codi sempre funciona. Tot el que heu apres (classes, encapsulacio, modularitat) es la base sobre la qual es construeix tot aixo."]})})]})}function Bw(){return r.jsxs("div",{children:[r.jsx(C,{title:"Introduccio al patro MVC"}),r.jsx(S,{variant:"explanation",title:"El problema: tot en un sol lloc",children:r.jsxs("p",{children:["Quan els projectes creixen, tenir-ho tot dins de ",r.jsx("code",{children:"main()"})," o en una sola classe es fa ",r.jsx("strong",{children:"ingobernable"}),". Ja ho hem vist a la seccio de modularitat: el codi monolitic es dificil de llegir, mantenir i ampliar. El patro",r.jsx("strong",{children:" MVC"})," porta la modularitzacio al seguent nivell, donant-nos una estructura clara per organitzar qualsevol aplicacio."]})}),r.jsx(S,{variant:"info",title:"Que es MVC?",children:r.jsxs("p",{children:[r.jsx("strong",{children:"Model-View-Controller"})," es un ",r.jsx("strong",{children:"patro"})," (no una biblioteca, no un framework) per organitzar el codi en ",r.jsx("strong",{children:"3 responsabilitats"})," ben definides. Es l'estandard en el desenvolupament web, aplicacions mobils i aplicacions d'escriptori. Gairebe tots els frameworks moderns es basen en aquesta idea."]})}),r.jsx(C,{title:"Les 3 parts de MVC"}),r.jsxs(ge,{children:[r.jsxs(P,{title:"Model",variant:"blue",children:["Les ",r.jsx("strong",{children:"dades"})," i la ",r.jsx("strong",{children:"logica de negoci"}),". Son les classes que ja coneixeu: ",r.jsx("code",{children:"Alumne"}),", ",r.jsx("code",{children:"Restaurant"}),",",r.jsx("code",{children:" Taula"}),"... El Model no sap res de la interficie: nomes gestiona dades i regles."]}),r.jsxs(P,{title:"View (Vista)",variant:"yellow",children:["El que ",r.jsx("strong",{children:"veu l'usuari"}),". En Java de consola:",r.jsx("code",{children:" System.out.println"}),". En web: HTML. En Android: XML layouts. La Vista ",r.jsx("strong",{children:"mostra dades"})," pero ",r.jsx("strong",{children:"no les processa"})," ni pren decisions."]}),r.jsxs(P,{title:"Controller",variant:"green",children:["El ",r.jsx("strong",{children:`"director d'orquestra"`}),". Rep les accions de l'usuari, demana dades al Model i diu a la Vista que ha de mostrar. Es el pont que connecta les dades amb la presentacio."]})]}),r.jsx(C,{title:"Analogia: un restaurant"}),r.jsxs(S,{variant:"explanation",title:"MVC es com un restaurant",children:[r.jsx("p",{children:"Imagineu un restaurant per entendre MVC:"}),r.jsxs("p",{style:{marginTop:"8px"},children:["El ",r.jsx("strong",{children:"client"})," (Usuari) demana al ",r.jsx("strong",{children:"cambrer"})," (Controller). El cambrer porta la comanda a la ",r.jsx("strong",{children:"cuina"})," (Model). La cuina prepara el plat (processa les dades). El cambrer porta el plat al client i el",r.jsx("strong",{children:" plat servit"})," (Vista) mostra el resultat."]}),r.jsxs("p",{style:{marginTop:"8px"},children:["El client ",r.jsx("strong",{children:"MAI"})," va directament a la cuina. De la mateixa manera, l'usuari mai accedeix directament al Model: sempre passa pel Controller."]})]}),r.jsx(C,{title:"Diagrama visual del flux MVC"}),r.jsx(_e,{src:"mvc-flux",title:"Flux del patro MVC"}),r.jsx(C,{title:"MVC aplicat al Restaurant"}),r.jsx(S,{variant:"info",children:r.jsx("p",{children:"Vegem com s'aplica MVC al nostre projecte de restaurant. Cada capa te la seva responsabilitat i es comunica nomes amb les capes adjacents."})}),r.jsx(_e,{src:"mvc-restaurant",title:"MVC aplicat al Sistema de Restaurant"}),r.jsx(C,{title:"Exemple conceptual: Gestio de reserves"}),r.jsx(E,{code:`restaurant-app/
├── model/
│   ├── Restaurant.java          # Dades: taules[], menu
│   ├── Taula.java               # Dades: numero, capacitat, ocupada
│   └── Reserva.java             # Dades: client, data, persones
├── vista/
│   └── VistaConsola.java        # Mostra menu, resultats
└── controlador/
    └── ControladorReserves.java # Connecta model i vista`,label:"Estructura de carpetes amb MVC",showLineNumbers:!0}),r.jsx(S,{variant:"info",title:"El Controller: el director d'orquestra",children:r.jsxs("p",{children:["El Controlador rep l'accio de l'usuari (via la Vista), opera amb el Model i torna a la Vista per mostrar resultats. Fixa't que ",r.jsx("strong",{children:"mai"}),"fa ",r.jsx("code",{children:"System.out.println"})," directament: aixo es feina de la Vista."]})}),r.jsx(E,{code:`public class ControladorReserves {
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
}`,label:"Controlador de Reserves",showLineNumbers:!0}),r.jsx(C,{title:"On trobaras MVC?"}),r.jsx(S,{variant:"info",title:"MVC es a tot arreu",children:r.jsx("p",{children:"Practicament tots els frameworks moderns utilitzen MVC o una variant. Aqui teniu exemples reals:"})}),r.jsx(re,{headers:["Plataforma","Tecnologia","Com aplica MVC"],rows:[{cells:["Java Web","Spring MVC (Spring Boot)","Controllers reben peticions HTTP, Models son les entitats, Vistes son plantilles HTML"]},{cells:["Android","Activities + Layouts + ViewModel","XML layouts (Vista), Activities/ViewModel (Controller), classes de dades (Model)"]},{cells:["Web Frontend","React, Angular, Vue","Components (Vista), estat/stores (Model), gestors d'events (Controller)"]},{cells:["Desktop","JavaFX (FXML + Controller)","Fitxers FXML (Vista), classes Controller, classes de dades (Model)"]},{cells:["Jocs","Unity (C#)","Usa una variant de MVC per separar logica de joc, renderitzat i input"]}]}),r.jsx(C,{title:"Connexio amb el que heu apres"}),r.jsxs(S,{variant:"explanation",title:"Ja teniu les peces!",children:[r.jsxs("p",{children:["Tot el que heu apres fins ara (classes, objectes, encapsulacio, packages, modularitat) son els ",r.jsx("strong",{children:"blocs de construccio"})," de MVC:"]}),r.jsxs("p",{style:{marginTop:"8px"},children:["El ",r.jsx("strong",{children:"Model"})," son les vostres classes amb encapsulacio (atributs privats, getters, setters). Els ",r.jsx("strong",{children:"packages"})," son la separacio en carpetes. La ",r.jsx("strong",{children:"modularitat"})," es el principi que cada classe fa una sola cosa. MVC simplement ",r.jsx("strong",{children:"formalitza el patro"}),": us diu on posar cada peca."]})]}),r.jsxs(S,{variant:"success",title:"La idea clau",children:[r.jsxs("p",{children:["MVC es una ",r.jsx("strong",{children:"manera de pensar"})," sobre l'organitzacio del codi, no una eina nova que cal aprendre. Ja coneixeu les peces: classes, objectes, encapsulacio, packages. MVC simplement us diu ",r.jsx("strong",{children:"on posar-les"}),": les dades al Model, la presentacio a la Vista i la coordinacio al Controller."]}),r.jsx("p",{style:{marginTop:"8px"},children:"Quan comenceu a treballar amb frameworks com Spring Boot o JavaFX, veureu que tot segueix aquest patro. Si enteneu MVC, enteneu l'arquitectura de qualsevol aplicacio moderna."})]})]})}function Uw(){return r.jsxs("article",{children:[r.jsx(S,{variant:"warning",title:"Material del professorat",children:"Aquesta pàgina conté exercicis i solucions. No és visible per als alumnes."}),r.jsx(C,{title:"Exercicis Pràctics - POO"}),r.jsxs("section",{style:{marginBottom:"40px"},children:[r.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 1: Gestió d'una Agenda"}),r.jsxs(S,{variant:"explanation",children:[r.jsx("p",{children:"Crea un programa orientat a objectes per gestionar una agenda de contactes."}),r.jsx("p",{style:{marginTop:"10px"},children:r.jsx("strong",{children:"Requisits:"})}),r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsxs("li",{children:["Classe ",r.jsx("code",{children:"Contacte"})," amb atributs: nom, telefon, email (tots privats)"]}),r.jsx("li",{children:"Constructor que inicialitzi tots els atributs"}),r.jsx("li",{children:"Getters i setters per a cada atribut"}),r.jsxs("li",{children:["Mètode ",r.jsx("code",{children:"mostrarInfo()"})," que imprimeixi les dades del contacte"]}),r.jsxs("li",{children:["Classe ",r.jsx("code",{children:"Agenda"})," amb un array de Contacte i mètodes per afegir, buscar i eliminar"]}),r.jsxs("li",{children:["Classe ",r.jsx("code",{children:"TestAgenda"})," amb el main per provar-ho"]})]})]}),r.jsx(E,{label:"Solució - Contacte.java",code:`public class Contacte {
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
}`}),r.jsx(E,{label:"Solució - Agenda.java",code:`public class Agenda {
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
}`})]}),r.jsxs("section",{style:{marginBottom:"40px"},children:[r.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 2: Sistema de Productes"}),r.jsxs(S,{variant:"explanation",children:[r.jsx("p",{children:"Crea un sistema de gestió de productes per a una botiga."}),r.jsx("p",{style:{marginTop:"10px"},children:r.jsx("strong",{children:"Requisits:"})}),r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsxs("li",{children:["Classe ",r.jsx("code",{children:"Producte"})," amb: nom, preu, quantitat (privats)"]}),r.jsx("li",{children:"Constructor amb tots els atributs"}),r.jsx("li",{children:"Getters i setters"}),r.jsxs("li",{children:["Mètode ",r.jsx("code",{children:"calcularValorTotal()"})," que retorni preu * quantitat"]}),r.jsxs("li",{children:["Classe ",r.jsx("code",{children:"Botiga"})," amb array de Producte i mètodes per afegir, buscar per nom, i calcular el valor total de l'inventari"]})]})]}),r.jsx(E,{label:"Solució - Producte.java",code:`public class Producte {
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
}`})]})]})}function $w(){return r.jsxs("article",{children:[r.jsx(S,{variant:"warning",title:"Material del professorat",children:"Aquesta pàgina conté exercicis i solucions. No és visible per als alumnes."}),r.jsx(C,{title:"Exercicis Pràctics - Modularitat"}),r.jsxs("section",{style:{marginBottom:"40px"},children:[r.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 1: Gestió de Text"}),r.jsxs(S,{variant:"explanation",children:[r.jsx("p",{children:r.jsx("strong",{children:"Estructura:"})}),r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsxs("li",{children:[r.jsx("code",{children:"utilitats.text.AnalitzadorText"})," - Classe amb mètodes d'anàlisi"]}),r.jsxs("li",{children:[r.jsx("code",{children:"programa.GestorText"})," - Programa principal"]})]}),r.jsx("p",{style:{marginTop:"10px"},children:r.jsx("strong",{children:"Mètodes a implementar:"})}),r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsxs("li",{children:[r.jsx("code",{children:"comptarVocals(String text)"})," → int"]}),r.jsxs("li",{children:[r.jsx("code",{children:"comptarConsonants(String text)"})," → int"]}),r.jsxs("li",{children:[r.jsx("code",{children:"invertir(String text)"})," → String"]}),r.jsxs("li",{children:[r.jsx("code",{children:"esPalindrom(String text)"})," → boolean"]})]})]}),r.jsx(E,{label:"Solució - AnalitzadorText.java",code:`package utilitats.text;

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
}`})]}),r.jsxs("section",{style:{marginBottom:"40px"},children:[r.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 2: Conversió d'Unitats"}),r.jsxs(S,{variant:"explanation",children:[r.jsx("p",{children:r.jsx("strong",{children:"Estructura:"})}),r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsx("li",{children:r.jsx("code",{children:"utilitats.conversions.Temperatura"})}),r.jsx("li",{children:r.jsx("code",{children:"utilitats.conversions.Distancia"})}),r.jsx("li",{children:r.jsx("code",{children:"utilitats.conversions.Pes"})}),r.jsxs("li",{children:[r.jsx("code",{children:"programa.Conversor"})," - Programa principal amb menú"]})]})]}),r.jsx(E,{label:"Solució - Temperatura.java",code:`package utilitats.conversions;

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
}`}),r.jsx(E,{label:"Solució - Distancia.java",code:`package utilitats.conversions;

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
}`})]}),r.jsxs("section",{style:{marginBottom:"40px"},children:[r.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 3: Gestió de Contactes"}),r.jsxs(S,{variant:"explanation",children:[r.jsx("p",{children:r.jsx("strong",{children:"Estructura:"})}),r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsx("li",{children:r.jsx("code",{children:"utilitats.contactes.GestorContactes"})}),r.jsxs("li",{children:[r.jsx("code",{children:"programa.Agenda"})," - Programa principal"]})]}),r.jsxs("p",{style:{marginTop:"10px"},children:[r.jsx("strong",{children:"Funcionalitats:"})," Afegir, buscar, eliminar, llistar contactes. Utilitza arrays paral·lels (noms[], telefons[])."]})]}),r.jsx(E,{label:"Solució - GestorContactes.java",code:`package utilitats.contactes;

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
}`}),r.jsx(S,{variant:"info",title:"Checklist de lliurament",children:r.jsxs("ol",{style:{paddingLeft:"20px"},children:[r.jsx("li",{children:"Estructura de packages correcta"}),r.jsx("li",{children:"Imports correctes entre packages"}),r.jsx("li",{children:"Tots els mètodes implementats"}),r.jsx("li",{children:"Programa principal funcional amb menú"}),r.jsx("li",{children:"Codi comentat"}),r.jsx("li",{children:"Proves amb dades d'exemple"}),r.jsx("li",{children:"Gestió bàsica d'errors"})]})})]})]})}function Hw(){return r.jsxs("article",{children:[r.jsx(S,{variant:"warning",title:"Material del professorat",children:"Aquesta pàgina conté la plantilla d'examen i la solució completa del Paraulògic. No és visible per als alumnes."}),r.jsx(C,{title:"Examen: Paraulògic"}),r.jsxs("section",{style:{marginBottom:"40px"},children:[r.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Descripció de l'examen"}),r.jsxs(S,{variant:"explanation",children:[r.jsx("p",{children:"El Paraulògic és un joc de paraules on l'alumne ha d'implementar un programa Java que:"}),r.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px"},children:[r.jsx("li",{children:"Té 7 lletres disponibles, una d'elles és la lletra central"}),r.jsx("li",{children:"L'usuari introdueix paraules que han de complir regles específiques"}),r.jsx("li",{children:"Cada paraula vàlida suma punts segons la seva longitud"}),r.jsx("li",{children:"Si la paraula utilitza totes les 7 lletres és un TUTI (+10 punts extra)"})]})]}),r.jsx("h4",{style:{color:"#2563a8",margin:"20px 0 12px"},children:"Sistema de puntuació"}),r.jsx(re,{headers:["Longitud","Punts"],rows:[{cells:["3 lletres","1 punt"]},{cells:["4 lletres","2 punts"]},{cells:["5 lletres","5 punts"]},{cells:["6 lletres","6 punts"]},{cells:["7+ lletres","= longitud"]},{cells:["TUTI (totes 7)","+10 punts extra"]}]})]}),r.jsxs("section",{style:{marginBottom:"40px"},children:[r.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Mètodes obligatoris (capçalera donada)"}),r.jsxs(S,{variant:"info",title:"Capçaleres que han d'implementar",children:[r.jsx("p",{style:{fontFamily:"monospace",marginTop:"8px"},children:r.jsx("code",{children:"public boolean esParaulaValida(String paraula, char[] lletres, char letraC)"})}),r.jsx("p",{style:{marginTop:"8px"},children:"Retorna true si la paraula:"}),r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[r.jsx("li",{children:"Té 3+ lletres"}),r.jsx("li",{children:"Conté la lletra central"}),r.jsx("li",{children:"Només utilitza lletres del conjunt"})]}),r.jsx("p",{style:{fontFamily:"monospace",marginTop:"16px"},children:r.jsx("code",{children:"public int calcularPuntuacio(String paraula, char[] lletres)"})}),r.jsx("p",{style:{marginTop:"8px"},children:"Retorna els punts segons la taula + bonus TUTI."})]})]}),r.jsxs("section",{style:{marginBottom:"40px"},children:[r.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Plantilla per a l'alumne"}),r.jsx(E,{label:"Paraulogic.java - Plantilla alumne",code:`import java.util.Scanner;

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
}`})]}),r.jsxs("section",{style:{marginBottom:"40px"},children:[r.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Solució completa"}),r.jsx(E,{label:"Solució completa - Paraulogic.java",showLineNumbers:!0,code:`import java.util.Scanner;

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
}`})]})]})}const Vw=Dj([{path:"/",element:r.jsx(ky,{}),children:[{index:!0,element:r.jsx(zy,{})},{path:"basics/tipus-de-dades",element:r.jsx(d0,{})},{path:"basics/operadors",element:r.jsx(k0,{})},{path:"basics/sintaxi",element:r.jsx(R0,{})},{path:"basics/condicionals",element:r.jsx(L0,{})},{path:"basics/switch",element:r.jsx(A0,{})},{path:"basics/bucles",element:r.jsx(M0,{})},{path:"basics/modificadors-acces",element:r.jsx(N0,{})},{path:"arrays/arrays-1d",element:r.jsx(Q0,{})},{path:"arrays/arrays-2d",element:r.jsx(mS,{})},{path:"funcions/sense-parametres",element:r.jsx(PS,{})},{path:"funcions/amb-parametres",element:r.jsx(DS,{})},{path:"funcions/tipus-de-funcions",element:r.jsx(GS,{})},{path:"funcions/recursives",element:r.jsx(x1,{})},{path:"funcions/cridar-des-de-main",element:r.jsx(b1,{})},{path:"funcions/resum",element:r.jsx(w1,{})},{path:"classes/introduccio",element:r.jsx(E1,{})},{path:"classes/classe-vs-objecte",element:r.jsx(C1,{})},{path:"classes/modificadors",element:r.jsx(k1,{})},{path:"classes/constructors-this",element:r.jsx(R1,{})},{path:"classes/herencia",element:r.jsx(I1,{})},{path:"classes/exemple-biblioteca",element:r.jsx(F1,{})},{path:"modularitat/introduccio",element:r.jsx(q1,{})},{path:"modularitat/monolitic-vs-modular",element:r.jsx(z1,{})},{path:"modularitat/packages",element:r.jsx(B1,{})},{path:"modularitat/exemple-calculadora",element:r.jsx(U1,{})},{path:"string-math/classe-string",element:r.jsx(iw,{})},{path:"string-math/classe-math",element:r.jsx(hw,{})},{path:"string-math/random-vs-math-random",element:r.jsx(kw,{})},{path:"java-modern/for-each",element:r.jsx(Rw,{})},{path:"java-modern/operador-ternari",element:r.jsx(Lw,{})},{path:"java-modern/var-i-altres",element:r.jsx(Aw,{})},{path:"analisi-disseny/diagrames-classes",element:r.jsx(Tw,{})},{path:"analisi-disseny/diagrames-sequencia",element:r.jsx(Iw,{})},{path:"analisi-disseny/diagrames-flux",element:r.jsx(Fw,{})},{path:"analisi-disseny/casos-dus",element:r.jsx(qw,{})},{path:"analisi-disseny/projecte-real",element:r.jsx(zw,{})},{path:"analisi-disseny/introduccio-mvc",element:r.jsx(Bw,{})},{path:"professor/exercicis-poo",element:r.jsx(Uw,{})},{path:"professor/exercicis-modularitat",element:r.jsx($w,{})},{path:"professor/paraulogic",element:r.jsx(Hw,{})}]}]);function Gw(){return r.jsx(Wj,{router:Vw})}zm(document.getElementById("root")).render(r.jsx(R.StrictMode,{children:r.jsx(Gw,{})}));
