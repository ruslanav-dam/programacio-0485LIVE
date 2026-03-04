function Vf(e,t){for(var n=0;n<t.length;n++){const a=t[n];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(a,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Gf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cd={exports:{}},ul={},kd={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),Wf=Symbol.for("react.portal"),Jf=Symbol.for("react.fragment"),Qf=Symbol.for("react.strict_mode"),Yf=Symbol.for("react.profiler"),Kf=Symbol.for("react.provider"),Zf=Symbol.for("react.context"),Xf=Symbol.for("react.forward_ref"),eh=Symbol.for("react.suspense"),th=Symbol.for("react.memo"),rh=Symbol.for("react.lazy"),Oc=Symbol.iterator;function nh(e){return e===null||typeof e!="object"?null:(e=Oc&&e[Oc]||e["@@iterator"],typeof e=="function"?e:null)}var Rd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ld=Object.assign,Ad={};function Dn(e,t,n){this.props=e,this.context=t,this.refs=Ad,this.updater=n||Rd}Dn.prototype.isReactComponent={};Dn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Md(){}Md.prototype=Dn.prototype;function go(e,t,n){this.props=e,this.context=t,this.refs=Ad,this.updater=n||Rd}var xo=go.prototype=new Md;xo.constructor=go;Ld(xo,Dn.prototype);xo.isPureReactComponent=!0;var Ic=Array.isArray,_d=Object.prototype.hasOwnProperty,vo={current:null},Nd={key:!0,ref:!0,__self:!0,__source:!0};function Pd(e,t,n){var a,i={},l=null,s=null;if(t!=null)for(a in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)_d.call(t,a)&&!Nd.hasOwnProperty(a)&&(i[a]=t[a]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(a in o=e.defaultProps,o)i[a]===void 0&&(i[a]=o[a]);return{$$typeof:Fa,type:e,key:l,ref:s,props:i,_owner:vo.current}}function ah(e,t){return{$$typeof:Fa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function yo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fa}function ih(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fc=/\/+/g;function Il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ih(""+e.key):t.toString(36)}function bi(e,t,n,a,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Fa:case Wf:s=!0}}if(s)return s=e,i=i(s),e=a===""?"."+Il(s,0):a,Ic(i)?(n="",e!=null&&(n=e.replace(Fc,"$&/")+"/"),bi(i,t,n,"",function(u){return u})):i!=null&&(yo(i)&&(i=ah(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Fc,"$&/")+"/")+e)),t.push(i)),1;if(s=0,a=a===""?".":a+":",Ic(e))for(var o=0;o<e.length;o++){l=e[o];var c=a+Il(l,o);s+=bi(l,t,n,c,i)}else if(c=nh(e),typeof c=="function")for(e=c.call(e),o=0;!(l=e.next()).done;)l=l.value,c=a+Il(l,o++),s+=bi(l,t,n,c,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Xa(e,t,n){if(e==null)return e;var a=[],i=0;return bi(e,a,"","",function(l){return t.call(n,l,i++)}),a}function lh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var nt={current:null},ji={transition:null},sh={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:ji,ReactCurrentOwner:vo};function Td(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Xa,forEach:function(e,t,n){Xa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xa(e,function(){t++}),t},toArray:function(e){return Xa(e,function(t){return t})||[]},only:function(e){if(!yo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=Dn;ie.Fragment=Jf;ie.Profiler=Yf;ie.PureComponent=go;ie.StrictMode=Qf;ie.Suspense=eh;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sh;ie.act=Td;ie.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Ld({},e.props),i=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=vo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)_d.call(t,c)&&!Nd.hasOwnProperty(c)&&(a[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)a.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];a.children=o}return{$$typeof:Fa,type:e.type,key:i,ref:l,props:a,_owner:s}};ie.createContext=function(e){return e={$$typeof:Zf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kf,_context:e},e.Consumer=e};ie.createElement=Pd;ie.createFactory=function(e){var t=Pd.bind(null,e);return t.type=e,t};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:Xf,render:e}};ie.isValidElement=yo;ie.lazy=function(e){return{$$typeof:rh,_payload:{_status:-1,_result:e},_init:lh}};ie.memo=function(e,t){return{$$typeof:th,type:e,compare:t===void 0?null:t}};ie.startTransition=function(e){var t=ji.transition;ji.transition={};try{e()}finally{ji.transition=t}};ie.unstable_act=Td;ie.useCallback=function(e,t){return nt.current.useCallback(e,t)};ie.useContext=function(e){return nt.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return nt.current.useDeferredValue(e)};ie.useEffect=function(e,t){return nt.current.useEffect(e,t)};ie.useId=function(){return nt.current.useId()};ie.useImperativeHandle=function(e,t,n){return nt.current.useImperativeHandle(e,t,n)};ie.useInsertionEffect=function(e,t){return nt.current.useInsertionEffect(e,t)};ie.useLayoutEffect=function(e,t){return nt.current.useLayoutEffect(e,t)};ie.useMemo=function(e,t){return nt.current.useMemo(e,t)};ie.useReducer=function(e,t,n){return nt.current.useReducer(e,t,n)};ie.useRef=function(e){return nt.current.useRef(e)};ie.useState=function(e){return nt.current.useState(e)};ie.useSyncExternalStore=function(e,t,n){return nt.current.useSyncExternalStore(e,t,n)};ie.useTransition=function(){return nt.current.useTransition()};ie.version="18.3.1";kd.exports=ie;var C=kd.exports;const oh=Gf(C),ch=Vf({__proto__:null,default:oh},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh=C,dh=Symbol.for("react.element"),ph=Symbol.for("react.fragment"),mh=Object.prototype.hasOwnProperty,fh=uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hh={key:!0,ref:!0,__self:!0,__source:!0};function Od(e,t,n){var a,i={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(a in t)mh.call(t,a)&&!hh.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)i[a]===void 0&&(i[a]=t[a]);return{$$typeof:dh,type:e,key:l,ref:s,props:i,_owner:fh.current}}ul.Fragment=ph;ul.jsx=Od;ul.jsxs=Od;Cd.exports=ul;var r=Cd.exports,Id={exports:{}},gt={},Fd={exports:{}},Dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,B){var U=I.length;I.push(B);e:for(;0<U;){var te=U-1>>>1,se=I[te];if(0<i(se,B))I[te]=B,I[U]=se,U=te;else break e}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var B=I[0],U=I.pop();if(U!==B){I[0]=U;e:for(var te=0,se=I.length,xe=se>>>1;te<xe;){var we=2*(te+1)-1,Ie=I[we],ye=we+1,Ue=I[ye];if(0>i(Ie,U))ye<se&&0>i(Ue,Ie)?(I[te]=Ue,I[ye]=U,te=ye):(I[te]=Ie,I[we]=U,te=we);else if(ye<se&&0>i(Ue,U))I[te]=Ue,I[ye]=U,te=ye;else break e}}return B}function i(I,B){var U=I.sortIndex-B.sortIndex;return U!==0?U:I.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var c=[],u=[],m=1,d=null,f=3,y=!1,g=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var B=n(u);B!==null;){if(B.callback===null)a(u);else if(B.startTime<=I)a(u),B.sortIndex=B.expirationTime,t(c,B);else break;B=n(u)}}function R(I){if(v=!1,x(I),!g)if(n(c)!==null)g=!0,le(M);else{var B=n(u);B!==null&&pe(R,B.startTime-I)}}function M(I,B){g=!1,v&&(v=!1,h(S),S=-1),y=!0;var U=f;try{for(x(B),d=n(c);d!==null&&(!(d.expirationTime>B)||I&&!re());){var te=d.callback;if(typeof te=="function"){d.callback=null,f=d.priorityLevel;var se=te(d.expirationTime<=B);B=e.unstable_now(),typeof se=="function"?d.callback=se:d===n(c)&&a(c),x(B)}else a(c);d=n(c)}if(d!==null)var xe=!0;else{var we=n(u);we!==null&&pe(R,we.startTime-B),xe=!1}return xe}finally{d=null,f=U,y=!1}}var N=!1,P=null,S=-1,H=5,z=-1;function re(){return!(e.unstable_now()-z<H)}function K(){if(P!==null){var I=e.unstable_now();z=I;var B=!0;try{B=P(!0,I)}finally{B?Ce():(N=!1,P=null)}}else N=!1}var Ce;if(typeof p=="function")Ce=function(){p(K)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,ce=Z.port2;Z.port1.onmessage=K,Ce=function(){ce.postMessage(null)}}else Ce=function(){b(K,0)};function le(I){P=I,N||(N=!0,Ce())}function pe(I,B){S=b(function(){I(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,le(M))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(I){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var U=f;f=B;try{return I()}finally{f=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,B){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var U=f;f=I;try{return B()}finally{f=U}},e.unstable_scheduleCallback=function(I,B,U){var te=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?te+U:te):U=te,I){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=U+se,I={id:m++,callback:B,priorityLevel:I,startTime:U,expirationTime:se,sortIndex:-1},U>te?(I.sortIndex=U,t(u,I),n(c)===null&&I===n(u)&&(v?(h(S),S=-1):v=!0,pe(R,U-te))):(I.sortIndex=se,t(c,I),g||y||(g=!0,le(M))),I},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(I){var B=f;return function(){var U=f;f=B;try{return I.apply(this,arguments)}finally{f=U}}}})(Dd);Fd.exports=Dd;var gh=Fd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh=C,ht=gh;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zd=new Set,xa={};function en(e,t){_n(e,t),_n(e+"Capture",t)}function _n(e,t){for(xa[e]=t,e=0;e<t.length;e++)zd.add(t[e])}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ys=Object.prototype.hasOwnProperty,vh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dc={},zc={};function yh(e){return ys.call(zc,e)?!0:ys.call(Dc,e)?!1:vh.test(e)?zc[e]=!0:(Dc[e]=!0,!1)}function bh(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function jh(e,t,n,a){if(t===null||typeof t>"u"||bh(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function at(e,t,n,a,i,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ve[e]=new at(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ve[t]=new at(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ve[e]=new at(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ve[e]=new at(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ve[e]=new at(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ve[e]=new at(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ve[e]=new at(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ve[e]=new at(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ve[e]=new at(e,5,!1,e.toLowerCase(),null,!1,!1)});var bo=/[\-:]([a-z])/g;function jo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bo,jo);Ve[t]=new at(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bo,jo);Ve[t]=new at(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bo,jo);Ve[t]=new at(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ve[e]=new at(e,1,!1,e.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ve[e]=new at(e,1,!1,e.toLowerCase(),null,!0,!0)});function So(e,t,n,a){var i=Ve.hasOwnProperty(t)?Ve[t]:null;(i!==null?i.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(jh(t,n,i,a)&&(n=null),a||i===null?yh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,a=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var cr=xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ei=Symbol.for("react.element"),un=Symbol.for("react.portal"),dn=Symbol.for("react.fragment"),wo=Symbol.for("react.strict_mode"),bs=Symbol.for("react.profiler"),Bd=Symbol.for("react.provider"),qd=Symbol.for("react.context"),Eo=Symbol.for("react.forward_ref"),js=Symbol.for("react.suspense"),Ss=Symbol.for("react.suspense_list"),Co=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),Ud=Symbol.for("react.offscreen"),Bc=Symbol.iterator;function Hn(e){return e===null||typeof e!="object"?null:(e=Bc&&e[Bc]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Object.assign,Fl;function ta(e){if(Fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||""}return`
`+Fl+e}var Dl=!1;function zl(e,t){if(!e||Dl)return"";Dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var a=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){a=u}e.call(t.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=a.stack.split(`
`),s=i.length-1,o=l.length-1;1<=s&&0<=o&&i[s]!==l[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==l[o]){if(s!==1||o!==1)do if(s--,o--,0>o||i[s]!==l[o]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=o);break}}}finally{Dl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ta(e):""}function Sh(e){switch(e.tag){case 5:return ta(e.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 2:case 15:return e=zl(e.type,!1),e;case 11:return e=zl(e.type.render,!1),e;case 1:return e=zl(e.type,!0),e;default:return""}}function ws(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dn:return"Fragment";case un:return"Portal";case bs:return"Profiler";case wo:return"StrictMode";case js:return"Suspense";case Ss:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qd:return(e.displayName||"Context")+".Consumer";case Bd:return(e._context.displayName||"Context")+".Provider";case Eo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Co:return t=e.displayName||null,t!==null?t:ws(e.type)||"Memo";case fr:t=e._payload,e=e._init;try{return ws(e(t))}catch{}}return null}function wh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ws(t);case 8:return t===wo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _r(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $d(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Eh(e){var t=$d(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ti(e){e._valueTracker||(e._valueTracker=Eh(e))}function Hd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=$d(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Es(e,t){var n=t.checked;return Ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qc(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=_r(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vd(e,t){t=t.checked,t!=null&&So(e,"checked",t,!1)}function Cs(e,t){Vd(e,t);var n=_r(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ks(e,t.type,n):t.hasOwnProperty("defaultValue")&&ks(e,t.type,_r(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Uc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ks(e,t,n){(t!=="number"||Fi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ra=Array.isArray;function wn(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+_r(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Rs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return Ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $c(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(ra(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_r(n)}}function Gd(e,t){var n=_r(t.value),a=_r(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function Hc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ls(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ri,Jd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ri=ri||document.createElement("div"),ri.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ri.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function va(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ch=["Webkit","ms","Moz","O"];Object.keys(sa).forEach(function(e){Ch.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),sa[t]=sa[e]})});function Qd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||sa.hasOwnProperty(e)&&sa[e]?(""+t).trim():t+"px"}function Yd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,i=Qd(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,i):e[n]=i}}var kh=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function As(e,t){if(t){if(kh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function Ms(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _s=null;function ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ns=null,En=null,Cn=null;function Vc(e){if(e=Ba(e)){if(typeof Ns!="function")throw Error(O(280));var t=e.stateNode;t&&(t=hl(t),Ns(e.stateNode,e.type,t))}}function Kd(e){En?Cn?Cn.push(e):Cn=[e]:En=e}function Zd(){if(En){var e=En,t=Cn;if(Cn=En=null,Vc(e),t)for(e=0;e<t.length;e++)Vc(t[e])}}function Xd(e,t){return e(t)}function ep(){}var Bl=!1;function tp(e,t,n){if(Bl)return e(t,n);Bl=!0;try{return Xd(e,t,n)}finally{Bl=!1,(En!==null||Cn!==null)&&(ep(),Zd())}}function ya(e,t){var n=e.stateNode;if(n===null)return null;var a=hl(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var Ps=!1;if(ir)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){Ps=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{Ps=!1}function Rh(e,t,n,a,i,l,s,o,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var oa=!1,Di=null,zi=!1,Ts=null,Lh={onError:function(e){oa=!0,Di=e}};function Ah(e,t,n,a,i,l,s,o,c){oa=!1,Di=null,Rh.apply(Lh,arguments)}function Mh(e,t,n,a,i,l,s,o,c){if(Ah.apply(this,arguments),oa){if(oa){var u=Di;oa=!1,Di=null}else throw Error(O(198));zi||(zi=!0,Ts=u)}}function tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gc(e){if(tn(e)!==e)throw Error(O(188))}function _h(e){var t=e.alternate;if(!t){if(t=tn(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Gc(i),e;if(l===a)return Gc(i),t;l=l.sibling}throw Error(O(188))}if(n.return!==a.return)n=i,a=l;else{for(var s=!1,o=i.child;o;){if(o===n){s=!0,n=i,a=l;break}if(o===a){s=!0,a=i,n=l;break}o=o.sibling}if(!s){for(o=l.child;o;){if(o===n){s=!0,n=l,a=i;break}if(o===a){s=!0,a=l,n=i;break}o=o.sibling}if(!s)throw Error(O(189))}}if(n.alternate!==a)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function np(e){return e=_h(e),e!==null?ap(e):null}function ap(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ap(e);if(t!==null)return t;e=e.sibling}return null}var ip=ht.unstable_scheduleCallback,Wc=ht.unstable_cancelCallback,Nh=ht.unstable_shouldYield,Ph=ht.unstable_requestPaint,Pe=ht.unstable_now,Th=ht.unstable_getCurrentPriorityLevel,Ro=ht.unstable_ImmediatePriority,lp=ht.unstable_UserBlockingPriority,Bi=ht.unstable_NormalPriority,Oh=ht.unstable_LowPriority,sp=ht.unstable_IdlePriority,dl=null,$t=null;function Ih(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(dl,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:zh,Fh=Math.log,Dh=Math.LN2;function zh(e){return e>>>=0,e===0?32:31-(Fh(e)/Dh|0)|0}var ni=64,ai=4194304;function na(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qi(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,i=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var o=s&~i;o!==0?a=na(o):(l&=s,l!==0&&(a=na(l)))}else s=n&~i,s!==0?a=na(s):l!==0&&(a=na(l));if(a===0)return 0;if(t!==0&&t!==a&&!(t&i)&&(i=a&-a,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(a&4&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-Tt(t),i=1<<n,a|=e[n],t&=~i;return a}function Bh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-Tt(l),o=1<<s,c=i[s];c===-1?(!(o&n)||o&a)&&(i[s]=Bh(o,t)):c<=t&&(e.expiredLanes|=o),l&=~o}}function Os(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function op(){var e=ni;return ni<<=1,!(ni&4194240)&&(ni=64),e}function ql(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Da(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=n}function Uh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Tt(n),l=1<<i;t[i]=0,a[i]=-1,e[i]=-1,n&=~l}}function Lo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Tt(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}var me=0;function cp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var up,Ao,dp,pp,mp,Is=!1,ii=[],wr=null,Er=null,Cr=null,ba=new Map,ja=new Map,gr=[],$h="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jc(e,t){switch(e){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":ba.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ja.delete(t.pointerId)}}function Gn(e,t,n,a,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Ba(t),t!==null&&Ao(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Hh(e,t,n,a,i){switch(t){case"focusin":return wr=Gn(wr,e,t,n,a,i),!0;case"dragenter":return Er=Gn(Er,e,t,n,a,i),!0;case"mouseover":return Cr=Gn(Cr,e,t,n,a,i),!0;case"pointerover":var l=i.pointerId;return ba.set(l,Gn(ba.get(l)||null,e,t,n,a,i)),!0;case"gotpointercapture":return l=i.pointerId,ja.set(l,Gn(ja.get(l)||null,e,t,n,a,i)),!0}return!1}function fp(e){var t=$r(e.target);if(t!==null){var n=tn(t);if(n!==null){if(t=n.tag,t===13){if(t=rp(n),t!==null){e.blockedOn=t,mp(e.priority,function(){dp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Si(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);_s=a,n.target.dispatchEvent(a),_s=null}else return t=Ba(n),t!==null&&Ao(t),e.blockedOn=n,!1;t.shift()}return!0}function Qc(e,t,n){Si(e)&&n.delete(t)}function Vh(){Is=!1,wr!==null&&Si(wr)&&(wr=null),Er!==null&&Si(Er)&&(Er=null),Cr!==null&&Si(Cr)&&(Cr=null),ba.forEach(Qc),ja.forEach(Qc)}function Wn(e,t){e.blockedOn===t&&(e.blockedOn=null,Is||(Is=!0,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,Vh)))}function Sa(e){function t(i){return Wn(i,e)}if(0<ii.length){Wn(ii[0],e);for(var n=1;n<ii.length;n++){var a=ii[n];a.blockedOn===e&&(a.blockedOn=null)}}for(wr!==null&&Wn(wr,e),Er!==null&&Wn(Er,e),Cr!==null&&Wn(Cr,e),ba.forEach(t),ja.forEach(t),n=0;n<gr.length;n++)a=gr[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<gr.length&&(n=gr[0],n.blockedOn===null);)fp(n),n.blockedOn===null&&gr.shift()}var kn=cr.ReactCurrentBatchConfig,Ui=!0;function Gh(e,t,n,a){var i=me,l=kn.transition;kn.transition=null;try{me=1,Mo(e,t,n,a)}finally{me=i,kn.transition=l}}function Wh(e,t,n,a){var i=me,l=kn.transition;kn.transition=null;try{me=4,Mo(e,t,n,a)}finally{me=i,kn.transition=l}}function Mo(e,t,n,a){if(Ui){var i=Fs(e,t,n,a);if(i===null)Kl(e,t,a,$i,n),Jc(e,a);else if(Hh(i,e,t,n,a))a.stopPropagation();else if(Jc(e,a),t&4&&-1<$h.indexOf(e)){for(;i!==null;){var l=Ba(i);if(l!==null&&up(l),l=Fs(e,t,n,a),l===null&&Kl(e,t,a,$i,n),l===i)break;i=l}i!==null&&a.stopPropagation()}else Kl(e,t,a,null,n)}}var $i=null;function Fs(e,t,n,a){if($i=null,e=ko(a),e=$r(e),e!==null)if(t=tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $i=e,null}function hp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Th()){case Ro:return 1;case lp:return 4;case Bi:case Oh:return 16;case sp:return 536870912;default:return 16}default:return 16}}var br=null,_o=null,wi=null;function gp(){if(wi)return wi;var e,t=_o,n=t.length,a,i="value"in br?br.value:br.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(a=1;a<=s&&t[n-a]===i[l-a];a++);return wi=i.slice(e,1<a?1-a:void 0)}function Ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function li(){return!0}function Yc(){return!1}function xt(e){function t(n,a,i,l,s){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?li:Yc,this.isPropagationStopped=Yc,this}return Ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},No=xt(zn),za=Ae({},zn,{view:0,detail:0}),Jh=xt(za),Ul,$l,Jn,pl=Ae({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Po,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(Ul=e.screenX-Jn.screenX,$l=e.screenY-Jn.screenY):$l=Ul=0,Jn=e),Ul)},movementY:function(e){return"movementY"in e?e.movementY:$l}}),Kc=xt(pl),Qh=Ae({},pl,{dataTransfer:0}),Yh=xt(Qh),Kh=Ae({},za,{relatedTarget:0}),Hl=xt(Kh),Zh=Ae({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Xh=xt(Zh),eg=Ae({},zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tg=xt(eg),rg=Ae({},zn,{data:0}),Zc=xt(rg),ng={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ag={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ig={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ig[e])?!!t[e]:!1}function Po(){return lg}var sg=Ae({},za,{key:function(e){if(e.key){var t=ng[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ag[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Po,charCode:function(e){return e.type==="keypress"?Ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),og=xt(sg),cg=Ae({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xc=xt(cg),ug=Ae({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Po}),dg=xt(ug),pg=Ae({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),mg=xt(pg),fg=Ae({},pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hg=xt(fg),gg=[9,13,27,32],To=ir&&"CompositionEvent"in window,ca=null;ir&&"documentMode"in document&&(ca=document.documentMode);var xg=ir&&"TextEvent"in window&&!ca,xp=ir&&(!To||ca&&8<ca&&11>=ca),eu=" ",tu=!1;function vp(e,t){switch(e){case"keyup":return gg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function vg(e,t){switch(e){case"compositionend":return yp(t);case"keypress":return t.which!==32?null:(tu=!0,eu);case"textInput":return e=t.data,e===eu&&tu?null:e;default:return null}}function yg(e,t){if(pn)return e==="compositionend"||!To&&vp(e,t)?(e=gp(),wi=_o=br=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xp&&t.locale!=="ko"?null:t.data;default:return null}}var bg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bg[e.type]:t==="textarea"}function bp(e,t,n,a){Kd(a),t=Hi(t,"onChange"),0<t.length&&(n=new No("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var ua=null,wa=null;function jg(e){_p(e,0)}function ml(e){var t=hn(e);if(Hd(t))return e}function Sg(e,t){if(e==="change")return t}var jp=!1;if(ir){var Vl;if(ir){var Gl="oninput"in document;if(!Gl){var nu=document.createElement("div");nu.setAttribute("oninput","return;"),Gl=typeof nu.oninput=="function"}Vl=Gl}else Vl=!1;jp=Vl&&(!document.documentMode||9<document.documentMode)}function au(){ua&&(ua.detachEvent("onpropertychange",Sp),wa=ua=null)}function Sp(e){if(e.propertyName==="value"&&ml(wa)){var t=[];bp(t,wa,e,ko(e)),tp(jg,t)}}function wg(e,t,n){e==="focusin"?(au(),ua=t,wa=n,ua.attachEvent("onpropertychange",Sp)):e==="focusout"&&au()}function Eg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ml(wa)}function Cg(e,t){if(e==="click")return ml(t)}function kg(e,t){if(e==="input"||e==="change")return ml(t)}function Rg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:Rg;function Ea(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!ys.call(t,i)||!Ft(e[i],t[i]))return!1}return!0}function iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lu(e,t){var n=iu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iu(n)}}function wp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ep(){for(var e=window,t=Fi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fi(e.document)}return t}function Oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lg(e){var t=Ep(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wp(n.ownerDocument.documentElement,n)){if(a!==null&&Oo(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(a.start,i);a=a.end===void 0?l:Math.min(a.end,i),!e.extend&&l>a&&(i=a,a=l,l=i),i=lu(n,l);var s=lu(n,a);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>a?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ag=ir&&"documentMode"in document&&11>=document.documentMode,mn=null,Ds=null,da=null,zs=!1;function su(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zs||mn==null||mn!==Fi(a)||(a=mn,"selectionStart"in a&&Oo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),da&&Ea(da,a)||(da=a,a=Hi(Ds,"onSelect"),0<a.length&&(t=new No("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=mn)))}function si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fn={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionend:si("Transition","TransitionEnd")},Wl={},Cp={};ir&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function fl(e){if(Wl[e])return Wl[e];if(!fn[e])return e;var t=fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cp)return Wl[e]=t[n];return e}var kp=fl("animationend"),Rp=fl("animationiteration"),Lp=fl("animationstart"),Ap=fl("transitionend"),Mp=new Map,ou="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(e,t){Mp.set(e,t),en(t,[e])}for(var Jl=0;Jl<ou.length;Jl++){var Ql=ou[Jl],Mg=Ql.toLowerCase(),_g=Ql[0].toUpperCase()+Ql.slice(1);Pr(Mg,"on"+_g)}Pr(kp,"onAnimationEnd");Pr(Rp,"onAnimationIteration");Pr(Lp,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(Ap,"onTransitionEnd");_n("onMouseEnter",["mouseout","mouseover"]);_n("onMouseLeave",["mouseout","mouseover"]);_n("onPointerEnter",["pointerout","pointerover"]);_n("onPointerLeave",["pointerout","pointerover"]);en("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));en("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));en("onBeforeInput",["compositionend","keypress","textInput","paste"]);en("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));en("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));en("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ng=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function cu(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,Mh(a,t,void 0,e),e.currentTarget=null}function _p(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var l=void 0;if(t)for(var s=a.length-1;0<=s;s--){var o=a[s],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==l&&i.isPropagationStopped())break e;cu(i,o,u),l=c}else for(s=0;s<a.length;s++){if(o=a[s],c=o.instance,u=o.currentTarget,o=o.listener,c!==l&&i.isPropagationStopped())break e;cu(i,o,u),l=c}}}if(zi)throw e=Ts,zi=!1,Ts=null,e}function be(e,t){var n=t[Hs];n===void 0&&(n=t[Hs]=new Set);var a=e+"__bubble";n.has(a)||(Np(t,e,2,!1),n.add(a))}function Yl(e,t,n){var a=0;t&&(a|=4),Np(n,e,a,t)}var oi="_reactListening"+Math.random().toString(36).slice(2);function Ca(e){if(!e[oi]){e[oi]=!0,zd.forEach(function(n){n!=="selectionchange"&&(Ng.has(n)||Yl(n,!1,e),Yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oi]||(t[oi]=!0,Yl("selectionchange",!1,t))}}function Np(e,t,n,a){switch(hp(t)){case 1:var i=Gh;break;case 4:i=Wh;break;default:i=Mo}n=i.bind(null,t,n,e),i=void 0,!Ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Kl(e,t,n,a,i){var l=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var o=a.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(s===4)for(s=a.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;o!==null;){if(s=$r(o),s===null)return;if(c=s.tag,c===5||c===6){a=l=s;continue e}o=o.parentNode}}a=a.return}tp(function(){var u=l,m=ko(n),d=[];e:{var f=Mp.get(e);if(f!==void 0){var y=No,g=e;switch(e){case"keypress":if(Ei(n)===0)break e;case"keydown":case"keyup":y=og;break;case"focusin":g="focus",y=Hl;break;case"focusout":g="blur",y=Hl;break;case"beforeblur":case"afterblur":y=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Yh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=dg;break;case kp:case Rp:case Lp:y=Xh;break;case Ap:y=mg;break;case"scroll":y=Jh;break;case"wheel":y=hg;break;case"copy":case"cut":case"paste":y=tg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Xc}var v=(t&4)!==0,b=!v&&e==="scroll",h=v?f!==null?f+"Capture":null:f;v=[];for(var p=u,x;p!==null;){x=p;var R=x.stateNode;if(x.tag===5&&R!==null&&(x=R,h!==null&&(R=ya(p,h),R!=null&&v.push(ka(p,R,x)))),b)break;p=p.return}0<v.length&&(f=new y(f,g,null,n,m),d.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==_s&&(g=n.relatedTarget||n.fromElement)&&($r(g)||g[lr]))break e;if((y||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?$r(g):null,g!==null&&(b=tn(g),g!==b||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(v=Kc,R="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=Xc,R="onPointerLeave",h="onPointerEnter",p="pointer"),b=y==null?f:hn(y),x=g==null?f:hn(g),f=new v(R,p+"leave",y,n,m),f.target=b,f.relatedTarget=x,R=null,$r(m)===u&&(v=new v(h,p+"enter",g,n,m),v.target=x,v.relatedTarget=b,R=v),b=R,y&&g)t:{for(v=y,h=g,p=0,x=v;x;x=sn(x))p++;for(x=0,R=h;R;R=sn(R))x++;for(;0<p-x;)v=sn(v),p--;for(;0<x-p;)h=sn(h),x--;for(;p--;){if(v===h||h!==null&&v===h.alternate)break t;v=sn(v),h=sn(h)}v=null}else v=null;y!==null&&uu(d,f,y,v,!1),g!==null&&b!==null&&uu(d,b,g,v,!0)}}e:{if(f=u?hn(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var M=Sg;else if(ru(f))if(jp)M=kg;else{M=Eg;var N=wg}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(M=Cg);if(M&&(M=M(e,u))){bp(d,M,n,m);break e}N&&N(e,f,u),e==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&ks(f,"number",f.value)}switch(N=u?hn(u):window,e){case"focusin":(ru(N)||N.contentEditable==="true")&&(mn=N,Ds=u,da=null);break;case"focusout":da=Ds=mn=null;break;case"mousedown":zs=!0;break;case"contextmenu":case"mouseup":case"dragend":zs=!1,su(d,n,m);break;case"selectionchange":if(Ag)break;case"keydown":case"keyup":su(d,n,m)}var P;if(To)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else pn?vp(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(xp&&n.locale!=="ko"&&(pn||S!=="onCompositionStart"?S==="onCompositionEnd"&&pn&&(P=gp()):(br=m,_o="value"in br?br.value:br.textContent,pn=!0)),N=Hi(u,S),0<N.length&&(S=new Zc(S,e,null,n,m),d.push({event:S,listeners:N}),P?S.data=P:(P=yp(n),P!==null&&(S.data=P)))),(P=xg?vg(e,n):yg(e,n))&&(u=Hi(u,"onBeforeInput"),0<u.length&&(m=new Zc("onBeforeInput","beforeinput",null,n,m),d.push({event:m,listeners:u}),m.data=P))}_p(d,t)})}function ka(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hi(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=ya(e,n),l!=null&&a.unshift(ka(e,l,i)),l=ya(e,t),l!=null&&a.push(ka(e,l,i))),e=e.return}return a}function sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uu(e,t,n,a,i){for(var l=t._reactName,s=[];n!==null&&n!==a;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===a)break;o.tag===5&&u!==null&&(o=u,i?(c=ya(n,l),c!=null&&s.unshift(ka(n,c,o))):i||(c=ya(n,l),c!=null&&s.push(ka(n,c,o)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Pg=/\r\n?/g,Tg=/\u0000|\uFFFD/g;function du(e){return(typeof e=="string"?e:""+e).replace(Pg,`
`).replace(Tg,"")}function ci(e,t,n){if(t=du(t),du(e)!==t&&n)throw Error(O(425))}function Vi(){}var Bs=null,qs=null;function Us(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $s=typeof setTimeout=="function"?setTimeout:void 0,Og=typeof clearTimeout=="function"?clearTimeout:void 0,pu=typeof Promise=="function"?Promise:void 0,Ig=typeof queueMicrotask=="function"?queueMicrotask:typeof pu<"u"?function(e){return pu.resolve(null).then(e).catch(Fg)}:$s;function Fg(e){setTimeout(function(){throw e})}function Zl(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(a===0){e.removeChild(i),Sa(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=i}while(n);Sa(t)}function kr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function mu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Bn=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Bn,Ra="__reactProps$"+Bn,lr="__reactContainer$"+Bn,Hs="__reactEvents$"+Bn,Dg="__reactListeners$"+Bn,zg="__reactHandles$"+Bn;function $r(e){var t=e[Ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lr]||n[Ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mu(e);e!==null;){if(n=e[Ut])return n;e=mu(e)}return t}e=n,n=e.parentNode}return null}function Ba(e){return e=e[Ut]||e[lr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function hl(e){return e[Ra]||null}var Vs=[],gn=-1;function Tr(e){return{current:e}}function Se(e){0>gn||(e.current=Vs[gn],Vs[gn]=null,gn--)}function ve(e,t){gn++,Vs[gn]=e.current,e.current=t}var Nr={},Ze=Tr(Nr),st=Tr(!1),Qr=Nr;function Nn(e,t){var n=e.type.contextTypes;if(!n)return Nr;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ot(e){return e=e.childContextTypes,e!=null}function Gi(){Se(st),Se(Ze)}function fu(e,t,n){if(Ze.current!==Nr)throw Error(O(168));ve(Ze,t),ve(st,n)}function Pp(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var i in a)if(!(i in t))throw Error(O(108,wh(e)||"Unknown",i));return Ae({},n,a)}function Wi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nr,Qr=Ze.current,ve(Ze,e),ve(st,st.current),!0}function hu(e,t,n){var a=e.stateNode;if(!a)throw Error(O(169));n?(e=Pp(e,t,Qr),a.__reactInternalMemoizedMergedChildContext=e,Se(st),Se(Ze),ve(Ze,e)):Se(st),ve(st,n)}var tr=null,gl=!1,Xl=!1;function Tp(e){tr===null?tr=[e]:tr.push(e)}function Bg(e){gl=!0,Tp(e)}function Or(){if(!Xl&&tr!==null){Xl=!0;var e=0,t=me;try{var n=tr;for(me=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}tr=null,gl=!1}catch(i){throw tr!==null&&(tr=tr.slice(e+1)),ip(Ro,Or),i}finally{me=t,Xl=!1}}return null}var xn=[],vn=0,Ji=null,Qi=0,bt=[],jt=0,Yr=null,rr=1,nr="";function qr(e,t){xn[vn++]=Qi,xn[vn++]=Ji,Ji=e,Qi=t}function Op(e,t,n){bt[jt++]=rr,bt[jt++]=nr,bt[jt++]=Yr,Yr=e;var a=rr;e=nr;var i=32-Tt(a)-1;a&=~(1<<i),n+=1;var l=32-Tt(t)+i;if(30<l){var s=i-i%5;l=(a&(1<<s)-1).toString(32),a>>=s,i-=s,rr=1<<32-Tt(t)+i|n<<i|a,nr=l+e}else rr=1<<l|n<<i|a,nr=e}function Io(e){e.return!==null&&(qr(e,1),Op(e,1,0))}function Fo(e){for(;e===Ji;)Ji=xn[--vn],xn[vn]=null,Qi=xn[--vn],xn[vn]=null;for(;e===Yr;)Yr=bt[--jt],bt[jt]=null,nr=bt[--jt],bt[jt]=null,rr=bt[--jt],bt[jt]=null}var ft=null,mt=null,Ee=!1,Pt=null;function Ip(e,t){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ft=e,mt=kr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ft=e,mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yr!==null?{id:rr,overflow:nr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ft=e,mt=null,!0):!1;default:return!1}}function Gs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ws(e){if(Ee){var t=mt;if(t){var n=t;if(!gu(e,t)){if(Gs(e))throw Error(O(418));t=kr(n.nextSibling);var a=ft;t&&gu(e,t)?Ip(a,n):(e.flags=e.flags&-4097|2,Ee=!1,ft=e)}}else{if(Gs(e))throw Error(O(418));e.flags=e.flags&-4097|2,Ee=!1,ft=e}}}function xu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ft=e}function ui(e){if(e!==ft)return!1;if(!Ee)return xu(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Us(e.type,e.memoizedProps)),t&&(t=mt)){if(Gs(e))throw Fp(),Error(O(418));for(;t;)Ip(e,t),t=kr(t.nextSibling)}if(xu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){mt=kr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}mt=null}}else mt=ft?kr(e.stateNode.nextSibling):null;return!0}function Fp(){for(var e=mt;e;)e=kr(e.nextSibling)}function Pn(){mt=ft=null,Ee=!1}function Do(e){Pt===null?Pt=[e]:Pt.push(e)}var qg=cr.ReactCurrentBatchConfig;function Qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var a=n.stateNode}if(!a)throw Error(O(147,e));var i=a,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var o=i.refs;s===null?delete o[l]:o[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function di(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vu(e){var t=e._init;return t(e._payload)}function Dp(e){function t(h,p){if(e){var x=h.deletions;x===null?(h.deletions=[p],h.flags|=16):x.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function a(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=Mr(h,p),h.index=0,h.sibling=null,h}function l(h,p,x){return h.index=x,e?(x=h.alternate,x!==null?(x=x.index,x<p?(h.flags|=2,p):x):(h.flags|=2,p)):(h.flags|=1048576,p)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function o(h,p,x,R){return p===null||p.tag!==6?(p=ls(x,h.mode,R),p.return=h,p):(p=i(p,x),p.return=h,p)}function c(h,p,x,R){var M=x.type;return M===dn?m(h,p,x.props.children,R,x.key):p!==null&&(p.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===fr&&vu(M)===p.type)?(R=i(p,x.props),R.ref=Qn(h,p,x),R.return=h,R):(R=_i(x.type,x.key,x.props,null,h.mode,R),R.ref=Qn(h,p,x),R.return=h,R)}function u(h,p,x,R){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=ss(x,h.mode,R),p.return=h,p):(p=i(p,x.children||[]),p.return=h,p)}function m(h,p,x,R,M){return p===null||p.tag!==7?(p=Jr(x,h.mode,R,M),p.return=h,p):(p=i(p,x),p.return=h,p)}function d(h,p,x){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ls(""+p,h.mode,x),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ei:return x=_i(p.type,p.key,p.props,null,h.mode,x),x.ref=Qn(h,null,p),x.return=h,x;case un:return p=ss(p,h.mode,x),p.return=h,p;case fr:var R=p._init;return d(h,R(p._payload),x)}if(ra(p)||Hn(p))return p=Jr(p,h.mode,x,null),p.return=h,p;di(h,p)}return null}function f(h,p,x,R){var M=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return M!==null?null:o(h,p,""+x,R);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ei:return x.key===M?c(h,p,x,R):null;case un:return x.key===M?u(h,p,x,R):null;case fr:return M=x._init,f(h,p,M(x._payload),R)}if(ra(x)||Hn(x))return M!==null?null:m(h,p,x,R,null);di(h,x)}return null}function y(h,p,x,R,M){if(typeof R=="string"&&R!==""||typeof R=="number")return h=h.get(x)||null,o(p,h,""+R,M);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case ei:return h=h.get(R.key===null?x:R.key)||null,c(p,h,R,M);case un:return h=h.get(R.key===null?x:R.key)||null,u(p,h,R,M);case fr:var N=R._init;return y(h,p,x,N(R._payload),M)}if(ra(R)||Hn(R))return h=h.get(x)||null,m(p,h,R,M,null);di(p,R)}return null}function g(h,p,x,R){for(var M=null,N=null,P=p,S=p=0,H=null;P!==null&&S<x.length;S++){P.index>S?(H=P,P=null):H=P.sibling;var z=f(h,P,x[S],R);if(z===null){P===null&&(P=H);break}e&&P&&z.alternate===null&&t(h,P),p=l(z,p,S),N===null?M=z:N.sibling=z,N=z,P=H}if(S===x.length)return n(h,P),Ee&&qr(h,S),M;if(P===null){for(;S<x.length;S++)P=d(h,x[S],R),P!==null&&(p=l(P,p,S),N===null?M=P:N.sibling=P,N=P);return Ee&&qr(h,S),M}for(P=a(h,P);S<x.length;S++)H=y(P,h,S,x[S],R),H!==null&&(e&&H.alternate!==null&&P.delete(H.key===null?S:H.key),p=l(H,p,S),N===null?M=H:N.sibling=H,N=H);return e&&P.forEach(function(re){return t(h,re)}),Ee&&qr(h,S),M}function v(h,p,x,R){var M=Hn(x);if(typeof M!="function")throw Error(O(150));if(x=M.call(x),x==null)throw Error(O(151));for(var N=M=null,P=p,S=p=0,H=null,z=x.next();P!==null&&!z.done;S++,z=x.next()){P.index>S?(H=P,P=null):H=P.sibling;var re=f(h,P,z.value,R);if(re===null){P===null&&(P=H);break}e&&P&&re.alternate===null&&t(h,P),p=l(re,p,S),N===null?M=re:N.sibling=re,N=re,P=H}if(z.done)return n(h,P),Ee&&qr(h,S),M;if(P===null){for(;!z.done;S++,z=x.next())z=d(h,z.value,R),z!==null&&(p=l(z,p,S),N===null?M=z:N.sibling=z,N=z);return Ee&&qr(h,S),M}for(P=a(h,P);!z.done;S++,z=x.next())z=y(P,h,S,z.value,R),z!==null&&(e&&z.alternate!==null&&P.delete(z.key===null?S:z.key),p=l(z,p,S),N===null?M=z:N.sibling=z,N=z);return e&&P.forEach(function(K){return t(h,K)}),Ee&&qr(h,S),M}function b(h,p,x,R){if(typeof x=="object"&&x!==null&&x.type===dn&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ei:e:{for(var M=x.key,N=p;N!==null;){if(N.key===M){if(M=x.type,M===dn){if(N.tag===7){n(h,N.sibling),p=i(N,x.props.children),p.return=h,h=p;break e}}else if(N.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===fr&&vu(M)===N.type){n(h,N.sibling),p=i(N,x.props),p.ref=Qn(h,N,x),p.return=h,h=p;break e}n(h,N);break}else t(h,N);N=N.sibling}x.type===dn?(p=Jr(x.props.children,h.mode,R,x.key),p.return=h,h=p):(R=_i(x.type,x.key,x.props,null,h.mode,R),R.ref=Qn(h,p,x),R.return=h,h=R)}return s(h);case un:e:{for(N=x.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){n(h,p.sibling),p=i(p,x.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=ss(x,h.mode,R),p.return=h,h=p}return s(h);case fr:return N=x._init,b(h,p,N(x._payload),R)}if(ra(x))return g(h,p,x,R);if(Hn(x))return v(h,p,x,R);di(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,x),p.return=h,h=p):(n(h,p),p=ls(x,h.mode,R),p.return=h,h=p),s(h)):n(h,p)}return b}var Tn=Dp(!0),zp=Dp(!1),Yi=Tr(null),Ki=null,yn=null,zo=null;function Bo(){zo=yn=Ki=null}function qo(e){var t=Yi.current;Se(Yi),e._currentValue=t}function Js(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Rn(e,t){Ki=e,zo=yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(lt=!0),e.firstContext=null)}function Et(e){var t=e._currentValue;if(zo!==e)if(e={context:e,memoizedValue:t,next:null},yn===null){if(Ki===null)throw Error(O(308));yn=e,Ki.dependencies={lanes:0,firstContext:e}}else yn=yn.next=e;return t}var Hr=null;function Uo(e){Hr===null?Hr=[e]:Hr.push(e)}function Bp(e,t,n,a){var i=t.interleaved;return i===null?(n.next=n,Uo(t)):(n.next=i.next,i.next=n),t.interleaved=n,sr(e,a)}function sr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var hr=!1;function $o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ar(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rr(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,de&2){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,sr(e,n)}return i=a.interleaved,i===null?(t.next=t,Uo(a)):(t.next=i.next,i.next=t),a.interleaved=t,sr(e,n)}function Ci(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Lo(e,n)}}function yu(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zi(e,t,n,a){var i=e.updateQueue;hr=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,u=c.next;c.next=null,s===null?l=u:s.next=u,s=c;var m=e.alternate;m!==null&&(m=m.updateQueue,o=m.lastBaseUpdate,o!==s&&(o===null?m.firstBaseUpdate=u:o.next=u,m.lastBaseUpdate=c))}if(l!==null){var d=i.baseState;s=0,m=u=c=null,o=l;do{var f=o.lane,y=o.eventTime;if((a&f)===f){m!==null&&(m=m.next={eventTime:y,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=e,v=o;switch(f=t,y=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(y,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(y,d,f):g,f==null)break e;d=Ae({},d,f);break e;case 2:hr=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[o]:f.push(o))}else y={eventTime:y,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},m===null?(u=m=y,c=d):m=m.next=y,s|=f;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;f=o,o=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(m===null&&(c=d),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Zr|=s,e.lanes=s,e.memoizedState=d}}function bu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],i=a.callback;if(i!==null){if(a.callback=null,a=n,typeof i!="function")throw Error(O(191,i));i.call(a)}}}var qa={},Ht=Tr(qa),La=Tr(qa),Aa=Tr(qa);function Vr(e){if(e===qa)throw Error(O(174));return e}function Ho(e,t){switch(ve(Aa,t),ve(La,e),ve(Ht,qa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ls(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ls(t,e)}Se(Ht),ve(Ht,t)}function On(){Se(Ht),Se(La),Se(Aa)}function Up(e){Vr(Aa.current);var t=Vr(Ht.current),n=Ls(t,e.type);t!==n&&(ve(La,e),ve(Ht,n))}function Vo(e){La.current===e&&(Se(Ht),Se(La))}var Re=Tr(0);function Xi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var es=[];function Go(){for(var e=0;e<es.length;e++)es[e]._workInProgressVersionPrimary=null;es.length=0}var ki=cr.ReactCurrentDispatcher,ts=cr.ReactCurrentBatchConfig,Kr=0,Le=null,Fe=null,Be=null,el=!1,pa=!1,Ma=0,Ug=0;function Je(){throw Error(O(321))}function Wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ft(e[n],t[n]))return!1;return!0}function Jo(e,t,n,a,i,l){if(Kr=l,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ki.current=e===null||e.memoizedState===null?Gg:Wg,e=n(a,i),pa){l=0;do{if(pa=!1,Ma=0,25<=l)throw Error(O(301));l+=1,Be=Fe=null,t.updateQueue=null,ki.current=Jg,e=n(a,i)}while(pa)}if(ki.current=tl,t=Fe!==null&&Fe.next!==null,Kr=0,Be=Fe=Le=null,el=!1,t)throw Error(O(300));return e}function Qo(){var e=Ma!==0;return Ma=0,e}function qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Le.memoizedState=Be=e:Be=Be.next=e,Be}function Ct(){if(Fe===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=Be===null?Le.memoizedState:Be.next;if(t!==null)Be=t,Fe=e;else{if(e===null)throw Error(O(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Be===null?Le.memoizedState=Be=e:Be=Be.next=e}return Be}function _a(e,t){return typeof t=="function"?t(e):t}function rs(e){var t=Ct(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var a=Fe,i=a.baseQueue,l=n.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}a.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,a=a.baseState;var o=s=null,c=null,u=l;do{var m=u.lane;if((Kr&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var d={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=d,s=a):c=c.next=d,Le.lanes|=m,Zr|=m}u=u.next}while(u!==null&&u!==l);c===null?s=a:c.next=o,Ft(a,t.memoizedState)||(lt=!0),t.memoizedState=a,t.baseState=s,t.baseQueue=c,n.lastRenderedState=a}if(e=n.interleaved,e!==null){i=e;do l=i.lane,Le.lanes|=l,Zr|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ns(e){var t=Ct(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);Ft(l,t.memoizedState)||(lt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,a]}function $p(){}function Hp(e,t){var n=Le,a=Ct(),i=t(),l=!Ft(a.memoizedState,i);if(l&&(a.memoizedState=i,lt=!0),a=a.queue,Yo(Wp.bind(null,n,a,e),[e]),a.getSnapshot!==t||l||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Na(9,Gp.bind(null,n,a,i,t),void 0,null),qe===null)throw Error(O(349));Kr&30||Vp(n,t,i)}return i}function Vp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gp(e,t,n,a){t.value=n,t.getSnapshot=a,Jp(t)&&Qp(e)}function Wp(e,t,n){return n(function(){Jp(t)&&Qp(e)})}function Jp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ft(e,n)}catch{return!0}}function Qp(e){var t=sr(e,1);t!==null&&Ot(t,e,1,-1)}function ju(e){var t=qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:e},t.queue=e,e=e.dispatch=Vg.bind(null,Le,e),[t.memoizedState,e]}function Na(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function Yp(){return Ct().memoizedState}function Ri(e,t,n,a){var i=qt();Le.flags|=e,i.memoizedState=Na(1|t,n,void 0,a===void 0?null:a)}function xl(e,t,n,a){var i=Ct();a=a===void 0?null:a;var l=void 0;if(Fe!==null){var s=Fe.memoizedState;if(l=s.destroy,a!==null&&Wo(a,s.deps)){i.memoizedState=Na(t,n,l,a);return}}Le.flags|=e,i.memoizedState=Na(1|t,n,l,a)}function Su(e,t){return Ri(8390656,8,e,t)}function Yo(e,t){return xl(2048,8,e,t)}function Kp(e,t){return xl(4,2,e,t)}function Zp(e,t){return xl(4,4,e,t)}function Xp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function em(e,t,n){return n=n!=null?n.concat([e]):null,xl(4,4,Xp.bind(null,t,e),n)}function Ko(){}function tm(e,t){var n=Ct();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Wo(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function rm(e,t){var n=Ct();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Wo(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function nm(e,t,n){return Kr&21?(Ft(n,t)||(n=op(),Le.lanes|=n,Zr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n)}function $g(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var a=ts.transition;ts.transition={};try{e(!1),t()}finally{me=n,ts.transition=a}}function am(){return Ct().memoizedState}function Hg(e,t,n){var a=Ar(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},im(e))lm(t,n);else if(n=Bp(e,t,n,a),n!==null){var i=rt();Ot(n,e,a,i),sm(n,t,a)}}function Vg(e,t,n){var a=Ar(e),i={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(im(e))lm(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,o=l(s,n);if(i.hasEagerState=!0,i.eagerState=o,Ft(o,s)){var c=t.interleaved;c===null?(i.next=i,Uo(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Bp(e,t,i,a),n!==null&&(i=rt(),Ot(n,e,a,i),sm(n,t,a))}}function im(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function lm(e,t){pa=el=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sm(e,t,n){if(n&4194240){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Lo(e,n)}}var tl={readContext:Et,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},Gg={readContext:Et,useCallback:function(e,t){return qt().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:Su,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ri(4194308,4,Xp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ri(4,2,e,t)},useMemo:function(e,t){var n=qt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=qt();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Hg.bind(null,Le,e),[a.memoizedState,e]},useRef:function(e){var t=qt();return e={current:e},t.memoizedState=e},useState:ju,useDebugValue:Ko,useDeferredValue:function(e){return qt().memoizedState=e},useTransition:function(){var e=ju(!1),t=e[0];return e=$g.bind(null,e[1]),qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=Le,i=qt();if(Ee){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),qe===null)throw Error(O(349));Kr&30||Vp(a,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Su(Wp.bind(null,a,l,e),[e]),a.flags|=2048,Na(9,Gp.bind(null,a,l,n,t),void 0,null),n},useId:function(){var e=qt(),t=qe.identifierPrefix;if(Ee){var n=nr,a=rr;n=(a&~(1<<32-Tt(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ma++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ug++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wg={readContext:Et,useCallback:tm,useContext:Et,useEffect:Yo,useImperativeHandle:em,useInsertionEffect:Kp,useLayoutEffect:Zp,useMemo:rm,useReducer:rs,useRef:Yp,useState:function(){return rs(_a)},useDebugValue:Ko,useDeferredValue:function(e){var t=Ct();return nm(t,Fe.memoizedState,e)},useTransition:function(){var e=rs(_a)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:$p,useSyncExternalStore:Hp,useId:am,unstable_isNewReconciler:!1},Jg={readContext:Et,useCallback:tm,useContext:Et,useEffect:Yo,useImperativeHandle:em,useInsertionEffect:Kp,useLayoutEffect:Zp,useMemo:rm,useReducer:ns,useRef:Yp,useState:function(){return ns(_a)},useDebugValue:Ko,useDeferredValue:function(e){var t=Ct();return Fe===null?t.memoizedState=e:nm(t,Fe.memoizedState,e)},useTransition:function(){var e=ns(_a)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:$p,useSyncExternalStore:Hp,useId:am,unstable_isNewReconciler:!1};function _t(e,t){if(e&&e.defaultProps){t=Ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qs(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:Ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vl={isMounted:function(e){return(e=e._reactInternals)?tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=rt(),i=Ar(e),l=ar(a,i);l.payload=t,n!=null&&(l.callback=n),t=Rr(e,l,i),t!==null&&(Ot(t,e,i,a),Ci(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=rt(),i=Ar(e),l=ar(a,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Rr(e,l,i),t!==null&&(Ot(t,e,i,a),Ci(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rt(),a=Ar(e),i=ar(n,a);i.tag=2,t!=null&&(i.callback=t),t=Rr(e,i,a),t!==null&&(Ot(t,e,a,n),Ci(t,e,a))}};function wu(e,t,n,a,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,s):t.prototype&&t.prototype.isPureReactComponent?!Ea(n,a)||!Ea(i,l):!0}function om(e,t,n){var a=!1,i=Nr,l=t.contextType;return typeof l=="object"&&l!==null?l=Et(l):(i=ot(t)?Qr:Ze.current,a=t.contextTypes,l=(a=a!=null)?Nn(e,i):Nr),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vl,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Eu(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&vl.enqueueReplaceState(t,t.state,null)}function Ys(e,t,n,a){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},$o(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Et(l):(l=ot(t)?Qr:Ze.current,i.context=Nn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Qs(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&vl.enqueueReplaceState(i,i.state,null),Zi(e,n,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function In(e,t){try{var n="",a=t;do n+=Sh(a),a=a.return;while(a);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function as(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ks(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qg=typeof WeakMap=="function"?WeakMap:Map;function cm(e,t,n){n=ar(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){nl||(nl=!0,so=a),Ks(e,t)},n}function um(e,t,n){n=ar(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=t.value;n.payload=function(){return a(i)},n.callback=function(){Ks(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ks(e,t),typeof a!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Cu(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Qg;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(i.add(n),e=cx.bind(null,e,t,n),t.then(e,e))}function ku(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ru(e,t,n,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ar(-1,1),t.tag=2,Rr(n,t,1))),n.lanes|=1),e)}var Yg=cr.ReactCurrentOwner,lt=!1;function tt(e,t,n,a){t.child=e===null?zp(t,null,n,a):Tn(t,e.child,n,a)}function Lu(e,t,n,a,i){n=n.render;var l=t.ref;return Rn(t,i),a=Jo(e,t,n,a,l,i),n=Qo(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,or(e,t,i)):(Ee&&n&&Io(t),t.flags|=1,tt(e,t,a,i),t.child)}function Au(e,t,n,a,i){if(e===null){var l=n.type;return typeof l=="function"&&!ic(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,dm(e,t,l,a,i)):(e=_i(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:Ea,n(s,a)&&e.ref===t.ref)return or(e,t,i)}return t.flags|=1,e=Mr(l,a),e.ref=t.ref,e.return=t,t.child=e}function dm(e,t,n,a,i){if(e!==null){var l=e.memoizedProps;if(Ea(l,a)&&e.ref===t.ref)if(lt=!1,t.pendingProps=a=l,(e.lanes&i)!==0)e.flags&131072&&(lt=!0);else return t.lanes=e.lanes,or(e,t,i)}return Zs(e,t,n,a,i)}function pm(e,t,n){var a=t.pendingProps,i=a.children,l=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(jn,dt),dt|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(jn,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=l!==null?l.baseLanes:n,ve(jn,dt),dt|=a}else l!==null?(a=l.baseLanes|n,t.memoizedState=null):a=n,ve(jn,dt),dt|=a;return tt(e,t,i,n),t.child}function mm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zs(e,t,n,a,i){var l=ot(n)?Qr:Ze.current;return l=Nn(t,l),Rn(t,i),n=Jo(e,t,n,a,l,i),a=Qo(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,or(e,t,i)):(Ee&&a&&Io(t),t.flags|=1,tt(e,t,n,i),t.child)}function Mu(e,t,n,a,i){if(ot(n)){var l=!0;Wi(t)}else l=!1;if(Rn(t,i),t.stateNode===null)Li(e,t),om(t,n,a),Ys(t,n,a,i),a=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Et(u):(u=ot(n)?Qr:Ze.current,u=Nn(t,u));var m=n.getDerivedStateFromProps,d=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==a||c!==u)&&Eu(t,s,a,u),hr=!1;var f=t.memoizedState;s.state=f,Zi(t,a,s,i),c=t.memoizedState,o!==a||f!==c||st.current||hr?(typeof m=="function"&&(Qs(t,n,m,a),c=t.memoizedState),(o=hr||wu(t,n,o,a,f,c,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=c),s.props=a,s.state=c,s.context=u,a=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,qp(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:_t(t.type,o),s.props=u,d=t.pendingProps,f=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Et(c):(c=ot(n)?Qr:Ze.current,c=Nn(t,c));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==d||f!==c)&&Eu(t,s,a,c),hr=!1,f=t.memoizedState,s.state=f,Zi(t,a,s,i);var g=t.memoizedState;o!==d||f!==g||st.current||hr?(typeof y=="function"&&(Qs(t,n,y,a),g=t.memoizedState),(u=hr||wu(t,n,u,a,f,g,c)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,g,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,g,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=g),s.props=a,s.state=g,s.context=c,a=u):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),a=!1)}return Xs(e,t,n,a,l,i)}function Xs(e,t,n,a,i,l){mm(e,t);var s=(t.flags&128)!==0;if(!a&&!s)return i&&hu(t,n,!1),or(e,t,l);a=t.stateNode,Yg.current=t;var o=s&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&s?(t.child=Tn(t,e.child,null,l),t.child=Tn(t,null,o,l)):tt(e,t,o,l),t.memoizedState=a.state,i&&hu(t,n,!0),t.child}function fm(e){var t=e.stateNode;t.pendingContext?fu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fu(e,t.context,!1),Ho(e,t.containerInfo)}function _u(e,t,n,a,i){return Pn(),Do(i),t.flags|=256,tt(e,t,n,a),t.child}var eo={dehydrated:null,treeContext:null,retryLane:0};function to(e){return{baseLanes:e,cachePool:null,transitions:null}}function hm(e,t,n){var a=t.pendingProps,i=Re.current,l=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(Re,i&1),e===null)return Ws(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},!(a&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=jl(s,a,0,null),e=Jr(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=to(n),t.memoizedState=eo,e):Zo(t,s));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Kg(e,t,s,a,o,i,n);if(l){l=a.fallback,s=t.mode,i=e.child,o=i.sibling;var c={mode:"hidden",children:a.children};return!(s&1)&&t.child!==i?(a=t.child,a.childLanes=0,a.pendingProps=c,t.deletions=null):(a=Mr(i,c),a.subtreeFlags=i.subtreeFlags&14680064),o!==null?l=Mr(o,l):(l=Jr(l,s,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=e.child.memoizedState,s=s===null?to(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=eo,a}return l=e.child,e=l.sibling,a=Mr(l,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Zo(e,t){return t=jl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function pi(e,t,n,a){return a!==null&&Do(a),Tn(t,e.child,null,n),e=Zo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kg(e,t,n,a,i,l,s){if(n)return t.flags&256?(t.flags&=-257,a=as(Error(O(422))),pi(e,t,s,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=a.fallback,i=t.mode,a=jl({mode:"visible",children:a.children},i,0,null),l=Jr(l,i,s,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,t.mode&1&&Tn(t,e.child,null,s),t.child.memoizedState=to(s),t.memoizedState=eo,l);if(!(t.mode&1))return pi(e,t,s,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var o=a.dgst;return a=o,l=Error(O(419)),a=as(l,a,void 0),pi(e,t,s,a)}if(o=(s&e.childLanes)!==0,lt||o){if(a=qe,a!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|s)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,sr(e,i),Ot(a,e,i,-1))}return ac(),a=as(Error(O(421))),pi(e,t,s,a)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ux.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,mt=kr(i.nextSibling),ft=t,Ee=!0,Pt=null,e!==null&&(bt[jt++]=rr,bt[jt++]=nr,bt[jt++]=Yr,rr=e.id,nr=e.overflow,Yr=t),t=Zo(t,a.children),t.flags|=4096,t)}function Nu(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Js(e.return,t,n)}function is(e,t,n,a,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=n,l.tailMode=i)}function gm(e,t,n){var a=t.pendingProps,i=a.revealOrder,l=a.tail;if(tt(e,t,a.children,n),a=Re.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nu(e,n,t);else if(e.tag===19)Nu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ve(Re,a),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Xi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),is(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}is(t,!0,n,null,l);break;case"together":is(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Li(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function or(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=Mr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zg(e,t,n){switch(t.tag){case 3:fm(t),Pn();break;case 5:Up(t);break;case 1:ot(t.type)&&Wi(t);break;case 4:Ho(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,i=t.memoizedProps.value;ve(Yi,a._currentValue),a._currentValue=i;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(ve(Re,Re.current&1),t.flags|=128,null):n&t.child.childLanes?hm(e,t,n):(ve(Re,Re.current&1),e=or(e,t,n),e!==null?e.sibling:null);ve(Re,Re.current&1);break;case 19:if(a=(n&t.childLanes)!==0,e.flags&128){if(a)return gm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Re,Re.current),a)break;return null;case 22:case 23:return t.lanes=0,pm(e,t,n)}return or(e,t,n)}var xm,ro,vm,ym;xm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ro=function(){};vm=function(e,t,n,a){var i=e.memoizedProps;if(i!==a){e=t.stateNode,Vr(Ht.current);var l=null;switch(n){case"input":i=Es(e,i),a=Es(e,a),l=[];break;case"select":i=Ae({},i,{value:void 0}),a=Ae({},a,{value:void 0}),l=[];break;case"textarea":i=Rs(e,i),a=Rs(e,a),l=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Vi)}As(n,a);var s;n=null;for(u in i)if(!a.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xa.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in a){var c=a[u];if(o=i!=null?i[u]:void 0,a.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&o[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(l||(l=[]),l.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(l=l||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xa.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&be("scroll",e),l||o===c||(l=[])):(l=l||[]).push(u,c))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};ym=function(e,t,n,a){n!==a&&(t.flags|=4)};function Yn(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Xg(e,t,n){var a=t.pendingProps;switch(Fo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return ot(t.type)&&Gi(),Qe(t),null;case 3:return a=t.stateNode,On(),Se(st),Se(Ze),Go(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ui(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(uo(Pt),Pt=null))),ro(e,t),Qe(t),null;case 5:Vo(t);var i=Vr(Aa.current);if(n=t.type,e!==null&&t.stateNode!=null)vm(e,t,n,a,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(O(166));return Qe(t),null}if(e=Vr(Ht.current),ui(t)){a=t.stateNode,n=t.type;var l=t.memoizedProps;switch(a[Ut]=t,a[Ra]=l,e=(t.mode&1)!==0,n){case"dialog":be("cancel",a),be("close",a);break;case"iframe":case"object":case"embed":be("load",a);break;case"video":case"audio":for(i=0;i<aa.length;i++)be(aa[i],a);break;case"source":be("error",a);break;case"img":case"image":case"link":be("error",a),be("load",a);break;case"details":be("toggle",a);break;case"input":qc(a,l),be("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!l.multiple},be("invalid",a);break;case"textarea":$c(a,l),be("invalid",a)}As(n,l),i=null;for(var s in l)if(l.hasOwnProperty(s)){var o=l[s];s==="children"?typeof o=="string"?a.textContent!==o&&(l.suppressHydrationWarning!==!0&&ci(a.textContent,o,e),i=["children",o]):typeof o=="number"&&a.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&ci(a.textContent,o,e),i=["children",""+o]):xa.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&be("scroll",a)}switch(n){case"input":ti(a),Uc(a,l,!0);break;case"textarea":ti(a),Hc(a);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(a.onclick=Vi)}a=i,t.updateQueue=a,a!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=s.createElement(n,{is:a.is}):(e=s.createElement(n),n==="select"&&(s=e,a.multiple?s.multiple=!0:a.size&&(s.size=a.size))):e=s.createElementNS(e,n),e[Ut]=t,e[Ra]=a,xm(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ms(n,a),n){case"dialog":be("cancel",e),be("close",e),i=a;break;case"iframe":case"object":case"embed":be("load",e),i=a;break;case"video":case"audio":for(i=0;i<aa.length;i++)be(aa[i],e);i=a;break;case"source":be("error",e),i=a;break;case"img":case"image":case"link":be("error",e),be("load",e),i=a;break;case"details":be("toggle",e),i=a;break;case"input":qc(e,a),i=Es(e,a),be("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=Ae({},a,{value:void 0}),be("invalid",e);break;case"textarea":$c(e,a),i=Rs(e,a),be("invalid",e);break;default:i=a}As(n,i),o=i;for(l in o)if(o.hasOwnProperty(l)){var c=o[l];l==="style"?Yd(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Jd(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&va(e,c):typeof c=="number"&&va(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(xa.hasOwnProperty(l)?c!=null&&l==="onScroll"&&be("scroll",e):c!=null&&So(e,l,c,s))}switch(n){case"input":ti(e),Uc(e,a,!1);break;case"textarea":ti(e),Hc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+_r(a.value));break;case"select":e.multiple=!!a.multiple,l=a.value,l!=null?wn(e,!!a.multiple,l,!1):a.defaultValue!=null&&wn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vi)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)ym(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(O(166));if(n=Vr(Aa.current),Vr(Ht.current),ui(t)){if(a=t.stateNode,n=t.memoizedProps,a[Ut]=t,(l=a.nodeValue!==n)&&(e=ft,e!==null))switch(e.tag){case 3:ci(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ci(a.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Ut]=t,t.stateNode=a}return Qe(t),null;case 13:if(Se(Re),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&mt!==null&&t.mode&1&&!(t.flags&128))Fp(),Pn(),t.flags|=98560,l=!1;else if(l=ui(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(O(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(O(317));l[Ut]=t}else Pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Qe(t),l=!1}else Pt!==null&&(uo(Pt),Pt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||Re.current&1?De===0&&(De=3):ac())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return On(),ro(e,t),e===null&&Ca(t.stateNode.containerInfo),Qe(t),null;case 10:return qo(t.type._context),Qe(t),null;case 17:return ot(t.type)&&Gi(),Qe(t),null;case 19:if(Se(Re),l=t.memoizedState,l===null)return Qe(t),null;if(a=(t.flags&128)!==0,s=l.rendering,s===null)if(a)Yn(l,!1);else{if(De!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Xi(e),s!==null){for(t.flags|=128,Yn(l,!1),a=s.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)l=n,e=a,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(Re,Re.current&1|2),t.child}e=e.sibling}l.tail!==null&&Pe()>Fn&&(t.flags|=128,a=!0,Yn(l,!1),t.lanes=4194304)}else{if(!a)if(e=Xi(s),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Yn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!Ee)return Qe(t),null}else 2*Pe()-l.renderingStartTime>Fn&&n!==1073741824&&(t.flags|=128,a=!0,Yn(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Pe(),t.sibling=null,n=Re.current,ve(Re,a?n&1|2:n&1),t):(Qe(t),null);case 22:case 23:return nc(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?dt&1073741824&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function ex(e,t){switch(Fo(t),t.tag){case 1:return ot(t.type)&&Gi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(),Se(st),Se(Ze),Go(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vo(t),null;case 13:if(Se(Re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));Pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Re),null;case 4:return On(),null;case 10:return qo(t.type._context),null;case 22:case 23:return nc(),null;case 24:return null;default:return null}}var mi=!1,Ke=!1,tx=typeof WeakSet=="function"?WeakSet:Set,$=null;function bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){_e(e,t,a)}else n.current=null}function no(e,t,n){try{n()}catch(a){_e(e,t,a)}}var Pu=!1;function rx(e,t){if(Bs=Ui,e=Ep(),Oo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,o=-1,c=-1,u=0,m=0,d=e,f=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(o=s+i),d!==l||a!==0&&d.nodeType!==3||(c=s+a),d.nodeType===3&&(s+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===e)break t;if(f===n&&++u===i&&(o=s),f===l&&++m===a&&(c=s),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(qs={focusedElem:e,selectionRange:n},Ui=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,b=g.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:_t(t.type,v),b);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(R){_e(t,t.return,R)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return g=Pu,Pu=!1,g}function ma(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&no(t,n,l)}i=i.next}while(i!==a)}}function yl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function ao(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bm(e){var t=e.alternate;t!==null&&(e.alternate=null,bm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ut],delete t[Ra],delete t[Hs],delete t[Dg],delete t[zg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jm(e){return e.tag===5||e.tag===3||e.tag===4}function Tu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function io(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vi));else if(a!==4&&(e=e.child,e!==null))for(io(e,t,n),e=e.sibling;e!==null;)io(e,t,n),e=e.sibling}function lo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(lo(e,t,n),e=e.sibling;e!==null;)lo(e,t,n),e=e.sibling}var $e=null,Nt=!1;function dr(e,t,n){for(n=n.child;n!==null;)Sm(e,t,n),n=n.sibling}function Sm(e,t,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(dl,n)}catch{}switch(n.tag){case 5:Ke||bn(n,t);case 6:var a=$e,i=Nt;$e=null,dr(e,t,n),$e=a,Nt=i,$e!==null&&(Nt?(e=$e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Nt?(e=$e,n=n.stateNode,e.nodeType===8?Zl(e.parentNode,n):e.nodeType===1&&Zl(e,n),Sa(e)):Zl($e,n.stateNode));break;case 4:a=$e,i=Nt,$e=n.stateNode.containerInfo,Nt=!0,dr(e,t,n),$e=a,Nt=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var l=i,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&no(n,t,s),i=i.next}while(i!==a)}dr(e,t,n);break;case 1:if(!Ke&&(bn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(o){_e(n,t,o)}dr(e,t,n);break;case 21:dr(e,t,n);break;case 22:n.mode&1?(Ke=(a=Ke)||n.memoizedState!==null,dr(e,t,n),Ke=a):dr(e,t,n);break;default:dr(e,t,n)}}function Ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tx),t.forEach(function(a){var i=dx.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}}function At(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];try{var l=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:$e=o.stateNode,Nt=!1;break e;case 3:$e=o.stateNode.containerInfo,Nt=!0;break e;case 4:$e=o.stateNode.containerInfo,Nt=!0;break e}o=o.return}if($e===null)throw Error(O(160));Sm(l,s,i),$e=null,Nt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){_e(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wm(t,e),t=t.sibling}function wm(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(At(t,e),zt(e),a&4){try{ma(3,e,e.return),yl(3,e)}catch(v){_e(e,e.return,v)}try{ma(5,e,e.return)}catch(v){_e(e,e.return,v)}}break;case 1:At(t,e),zt(e),a&512&&n!==null&&bn(n,n.return);break;case 5:if(At(t,e),zt(e),a&512&&n!==null&&bn(n,n.return),e.flags&32){var i=e.stateNode;try{va(i,"")}catch(v){_e(e,e.return,v)}}if(a&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&Vd(i,l),Ms(o,s);var u=Ms(o,l);for(s=0;s<c.length;s+=2){var m=c[s],d=c[s+1];m==="style"?Yd(i,d):m==="dangerouslySetInnerHTML"?Jd(i,d):m==="children"?va(i,d):So(i,m,d,u)}switch(o){case"input":Cs(i,l);break;case"textarea":Gd(i,l);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?wn(i,!!l.multiple,y,!1):f!==!!l.multiple&&(l.defaultValue!=null?wn(i,!!l.multiple,l.defaultValue,!0):wn(i,!!l.multiple,l.multiple?[]:"",!1))}i[Ra]=l}catch(v){_e(e,e.return,v)}}break;case 6:if(At(t,e),zt(e),a&4){if(e.stateNode===null)throw Error(O(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(v){_e(e,e.return,v)}}break;case 3:if(At(t,e),zt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Sa(t.containerInfo)}catch(v){_e(e,e.return,v)}break;case 4:At(t,e),zt(e);break;case 13:At(t,e),zt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(tc=Pe())),a&4&&Ou(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Ke=(u=Ke)||m,At(t,e),Ke=u):At(t,e),zt(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for($=e,m=e.child;m!==null;){for(d=$=m;$!==null;){switch(f=$,y=f.child,f.tag){case 0:case 11:case 14:case 15:ma(4,f,f.return);break;case 1:bn(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){a=f,n=f.return;try{t=a,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){_e(a,n,v)}}break;case 5:bn(f,f.return);break;case 22:if(f.memoizedState!==null){Fu(d);continue}}y!==null?(y.return=f,$=y):Fu(d)}m=m.sibling}e:for(m=null,d=e;;){if(d.tag===5){if(m===null){m=d;try{i=d.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=d.stateNode,c=d.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Qd("display",s))}catch(v){_e(e,e.return,v)}}}else if(d.tag===6){if(m===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){_e(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;m===d&&(m=null),d=d.return}m===d&&(m=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:At(t,e),zt(e),a&4&&Ou(e);break;case 21:break;default:At(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jm(n)){var a=n;break e}n=n.return}throw Error(O(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(va(i,""),a.flags&=-33);var l=Tu(e);lo(e,l,i);break;case 3:case 4:var s=a.stateNode.containerInfo,o=Tu(e);io(e,o,s);break;default:throw Error(O(161))}}catch(c){_e(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nx(e,t,n){$=e,Em(e)}function Em(e,t,n){for(var a=(e.mode&1)!==0;$!==null;){var i=$,l=i.child;if(i.tag===22&&a){var s=i.memoizedState!==null||mi;if(!s){var o=i.alternate,c=o!==null&&o.memoizedState!==null||Ke;o=mi;var u=Ke;if(mi=s,(Ke=c)&&!u)for($=i;$!==null;)s=$,c=s.child,s.tag===22&&s.memoizedState!==null?Du(i):c!==null?(c.return=s,$=c):Du(i);for(;l!==null;)$=l,Em(l),l=l.sibling;$=i,mi=o,Ke=u}Iu(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,$=l):Iu(e)}}function Iu(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ke||yl(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Ke)if(n===null)a.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:_t(t.type,n.memoizedProps);a.componentDidUpdate(i,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&bu(t,l,a);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bu(t,s,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var d=m.dehydrated;d!==null&&Sa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Ke||t.flags&512&&ao(t)}catch(f){_e(t,t.return,f)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Fu(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Du(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yl(4,t)}catch(c){_e(t,n,c)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var i=t.return;try{a.componentDidMount()}catch(c){_e(t,i,c)}}var l=t.return;try{ao(t)}catch(c){_e(t,l,c)}break;case 5:var s=t.return;try{ao(t)}catch(c){_e(t,s,c)}}}catch(c){_e(t,t.return,c)}if(t===e){$=null;break}var o=t.sibling;if(o!==null){o.return=t.return,$=o;break}$=t.return}}var ax=Math.ceil,rl=cr.ReactCurrentDispatcher,Xo=cr.ReactCurrentOwner,wt=cr.ReactCurrentBatchConfig,de=0,qe=null,Oe=null,He=0,dt=0,jn=Tr(0),De=0,Pa=null,Zr=0,bl=0,ec=0,fa=null,it=null,tc=0,Fn=1/0,er=null,nl=!1,so=null,Lr=null,fi=!1,jr=null,al=0,ha=0,oo=null,Ai=-1,Mi=0;function rt(){return de&6?Pe():Ai!==-1?Ai:Ai=Pe()}function Ar(e){return e.mode&1?de&2&&He!==0?He&-He:qg.transition!==null?(Mi===0&&(Mi=op()),Mi):(e=me,e!==0||(e=window.event,e=e===void 0?16:hp(e.type)),e):1}function Ot(e,t,n,a){if(50<ha)throw ha=0,oo=null,Error(O(185));Da(e,n,a),(!(de&2)||e!==qe)&&(e===qe&&(!(de&2)&&(bl|=n),De===4&&xr(e,He)),ct(e,a),n===1&&de===0&&!(t.mode&1)&&(Fn=Pe()+500,gl&&Or()))}function ct(e,t){var n=e.callbackNode;qh(e,t);var a=qi(e,e===qe?He:0);if(a===0)n!==null&&Wc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&Wc(n),t===1)e.tag===0?Bg(zu.bind(null,e)):Tp(zu.bind(null,e)),Ig(function(){!(de&6)&&Or()}),n=null;else{switch(cp(a)){case 1:n=Ro;break;case 4:n=lp;break;case 16:n=Bi;break;case 536870912:n=sp;break;default:n=Bi}n=Nm(n,Cm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cm(e,t){if(Ai=-1,Mi=0,de&6)throw Error(O(327));var n=e.callbackNode;if(Ln()&&e.callbackNode!==n)return null;var a=qi(e,e===qe?He:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=il(e,a);else{t=a;var i=de;de|=2;var l=Rm();(qe!==e||He!==t)&&(er=null,Fn=Pe()+500,Wr(e,t));do try{sx();break}catch(o){km(e,o)}while(!0);Bo(),rl.current=l,de=i,Oe!==null?t=0:(qe=null,He=0,t=De)}if(t!==0){if(t===2&&(i=Os(e),i!==0&&(a=i,t=co(e,i))),t===1)throw n=Pa,Wr(e,0),xr(e,a),ct(e,Pe()),n;if(t===6)xr(e,a);else{if(i=e.current.alternate,!(a&30)&&!ix(i)&&(t=il(e,a),t===2&&(l=Os(e),l!==0&&(a=l,t=co(e,l))),t===1))throw n=Pa,Wr(e,0),xr(e,a),ct(e,Pe()),n;switch(e.finishedWork=i,e.finishedLanes=a,t){case 0:case 1:throw Error(O(345));case 2:Ur(e,it,er);break;case 3:if(xr(e,a),(a&130023424)===a&&(t=tc+500-Pe(),10<t)){if(qi(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){rt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$s(Ur.bind(null,e,it,er),t);break}Ur(e,it,er);break;case 4:if(xr(e,a),(a&4194240)===a)break;for(t=e.eventTimes,i=-1;0<a;){var s=31-Tt(a);l=1<<s,s=t[s],s>i&&(i=s),a&=~l}if(a=i,a=Pe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*ax(a/1960))-a,10<a){e.timeoutHandle=$s(Ur.bind(null,e,it,er),a);break}Ur(e,it,er);break;case 5:Ur(e,it,er);break;default:throw Error(O(329))}}}return ct(e,Pe()),e.callbackNode===n?Cm.bind(null,e):null}function co(e,t){var n=fa;return e.current.memoizedState.isDehydrated&&(Wr(e,t).flags|=256),e=il(e,t),e!==2&&(t=it,it=n,t!==null&&uo(t)),e}function uo(e){it===null?it=e:it.push.apply(it,e)}function ix(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var i=n[a],l=i.getSnapshot;i=i.value;try{if(!Ft(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xr(e,t){for(t&=~ec,t&=~bl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tt(t),a=1<<n;e[n]=-1,t&=~a}}function zu(e){if(de&6)throw Error(O(327));Ln();var t=qi(e,0);if(!(t&1))return ct(e,Pe()),null;var n=il(e,t);if(e.tag!==0&&n===2){var a=Os(e);a!==0&&(t=a,n=co(e,a))}if(n===1)throw n=Pa,Wr(e,0),xr(e,t),ct(e,Pe()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ur(e,it,er),ct(e,Pe()),null}function rc(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(Fn=Pe()+500,gl&&Or())}}function Xr(e){jr!==null&&jr.tag===0&&!(de&6)&&Ln();var t=de;de|=1;var n=wt.transition,a=me;try{if(wt.transition=null,me=1,e)return e()}finally{me=a,wt.transition=n,de=t,!(de&6)&&Or()}}function nc(){dt=jn.current,Se(jn)}function Wr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Og(n)),Oe!==null)for(n=Oe.return;n!==null;){var a=n;switch(Fo(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Gi();break;case 3:On(),Se(st),Se(Ze),Go();break;case 5:Vo(a);break;case 4:On();break;case 13:Se(Re);break;case 19:Se(Re);break;case 10:qo(a.type._context);break;case 22:case 23:nc()}n=n.return}if(qe=e,Oe=e=Mr(e.current,null),He=dt=t,De=0,Pa=null,ec=bl=Zr=0,it=fa=null,Hr!==null){for(t=0;t<Hr.length;t++)if(n=Hr[t],a=n.interleaved,a!==null){n.interleaved=null;var i=a.next,l=n.pending;if(l!==null){var s=l.next;l.next=i,a.next=s}n.pending=a}Hr=null}return e}function km(e,t){do{var n=Oe;try{if(Bo(),ki.current=tl,el){for(var a=Le.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}el=!1}if(Kr=0,Be=Fe=Le=null,pa=!1,Ma=0,Xo.current=null,n===null||n.return===null){De=1,Pa=t,Oe=null;break}e:{var l=e,s=n.return,o=n,c=t;if(t=He,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=o,d=m.tag;if(!(m.mode&1)&&(d===0||d===11||d===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=ku(s);if(y!==null){y.flags&=-257,Ru(y,s,o,l,t),y.mode&1&&Cu(l,u,t),t=y,c=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(c),t.updateQueue=v}else g.add(c);break e}else{if(!(t&1)){Cu(l,u,t),ac();break e}c=Error(O(426))}}else if(Ee&&o.mode&1){var b=ku(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Ru(b,s,o,l,t),Do(In(c,o));break e}}l=c=In(c,o),De!==4&&(De=2),fa===null?fa=[l]:fa.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var h=cm(l,c,t);yu(l,h);break e;case 1:o=c;var p=l.type,x=l.stateNode;if(!(l.flags&128)&&(typeof p.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Lr===null||!Lr.has(x)))){l.flags|=65536,t&=-t,l.lanes|=t;var R=um(l,o,t);yu(l,R);break e}}l=l.return}while(l!==null)}Am(n)}catch(M){t=M,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function Rm(){var e=rl.current;return rl.current=tl,e===null?tl:e}function ac(){(De===0||De===3||De===2)&&(De=4),qe===null||!(Zr&268435455)&&!(bl&268435455)||xr(qe,He)}function il(e,t){var n=de;de|=2;var a=Rm();(qe!==e||He!==t)&&(er=null,Wr(e,t));do try{lx();break}catch(i){km(e,i)}while(!0);if(Bo(),de=n,rl.current=a,Oe!==null)throw Error(O(261));return qe=null,He=0,De}function lx(){for(;Oe!==null;)Lm(Oe)}function sx(){for(;Oe!==null&&!Nh();)Lm(Oe)}function Lm(e){var t=_m(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?Am(e):Oe=t,Xo.current=null}function Am(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ex(n,t),n!==null){n.flags&=32767,Oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Oe=null;return}}else if(n=Xg(n,t,dt),n!==null){Oe=n;return}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);De===0&&(De=5)}function Ur(e,t,n){var a=me,i=wt.transition;try{wt.transition=null,me=1,ox(e,t,n,a)}finally{wt.transition=i,me=a}return null}function ox(e,t,n,a){do Ln();while(jr!==null);if(de&6)throw Error(O(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Uh(e,l),e===qe&&(Oe=qe=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fi||(fi=!0,Nm(Bi,function(){return Ln(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=wt.transition,wt.transition=null;var s=me;me=1;var o=de;de|=4,Xo.current=null,rx(e,n),wm(n,e),Lg(qs),Ui=!!Bs,qs=Bs=null,e.current=n,nx(n),Ph(),de=o,me=s,wt.transition=l}else e.current=n;if(fi&&(fi=!1,jr=e,al=i),l=e.pendingLanes,l===0&&(Lr=null),Ih(n.stateNode),ct(e,Pe()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],a(i.value,{componentStack:i.stack,digest:i.digest});if(nl)throw nl=!1,e=so,so=null,e;return al&1&&e.tag!==0&&Ln(),l=e.pendingLanes,l&1?e===oo?ha++:(ha=0,oo=e):ha=0,Or(),null}function Ln(){if(jr!==null){var e=cp(al),t=wt.transition,n=me;try{if(wt.transition=null,me=16>e?16:e,jr===null)var a=!1;else{if(e=jr,jr=null,al=0,de&6)throw Error(O(331));var i=de;for(de|=4,$=e.current;$!==null;){var l=$,s=l.child;if($.flags&16){var o=l.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for($=u;$!==null;){var m=$;switch(m.tag){case 0:case 11:case 15:ma(8,m,l)}var d=m.child;if(d!==null)d.return=m,$=d;else for(;$!==null;){m=$;var f=m.sibling,y=m.return;if(bm(m),m===u){$=null;break}if(f!==null){f.return=y,$=f;break}$=y}}}var g=l.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}$=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,$=s;else e:for(;$!==null;){if(l=$,l.flags&2048)switch(l.tag){case 0:case 11:case 15:ma(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,$=h;break e}$=l.return}}var p=e.current;for($=p;$!==null;){s=$;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,$=x;else e:for(s=p;$!==null;){if(o=$,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:yl(9,o)}}catch(M){_e(o,o.return,M)}if(o===s){$=null;break e}var R=o.sibling;if(R!==null){R.return=o.return,$=R;break e}$=o.return}}if(de=i,Or(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(dl,e)}catch{}a=!0}return a}finally{me=n,wt.transition=t}}return!1}function Bu(e,t,n){t=In(n,t),t=cm(e,t,1),e=Rr(e,t,1),t=rt(),e!==null&&(Da(e,1,t),ct(e,t))}function _e(e,t,n){if(e.tag===3)Bu(e,e,n);else for(;t!==null;){if(t.tag===3){Bu(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Lr===null||!Lr.has(a))){e=In(n,e),e=um(t,e,1),t=Rr(t,e,1),e=rt(),t!==null&&(Da(t,1,e),ct(t,e));break}}t=t.return}}function cx(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=rt(),e.pingedLanes|=e.suspendedLanes&n,qe===e&&(He&n)===n&&(De===4||De===3&&(He&130023424)===He&&500>Pe()-tc?Wr(e,0):ec|=n),ct(e,t)}function Mm(e,t){t===0&&(e.mode&1?(t=ai,ai<<=1,!(ai&130023424)&&(ai=4194304)):t=1);var n=rt();e=sr(e,t),e!==null&&(Da(e,t,n),ct(e,n))}function ux(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mm(e,n)}function dx(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(O(314))}a!==null&&a.delete(t),Mm(e,n)}var _m;_m=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)lt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return lt=!1,Zg(e,t,n);lt=!!(e.flags&131072)}else lt=!1,Ee&&t.flags&1048576&&Op(t,Qi,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Li(e,t),e=t.pendingProps;var i=Nn(t,Ze.current);Rn(t,n),i=Jo(null,t,a,e,i,n);var l=Qo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(a)?(l=!0,Wi(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$o(t),i.updater=vl,t.stateNode=i,i._reactInternals=t,Ys(t,a,e,n),t=Xs(null,t,a,!0,l,n)):(t.tag=0,Ee&&l&&Io(t),tt(null,t,i,n),t=t.child),t;case 16:a=t.elementType;e:{switch(Li(e,t),e=t.pendingProps,i=a._init,a=i(a._payload),t.type=a,i=t.tag=mx(a),e=_t(a,e),i){case 0:t=Zs(null,t,a,e,n);break e;case 1:t=Mu(null,t,a,e,n);break e;case 11:t=Lu(null,t,a,e,n);break e;case 14:t=Au(null,t,a,_t(a.type,e),n);break e}throw Error(O(306,a,""))}return t;case 0:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:_t(a,i),Zs(e,t,a,i,n);case 1:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:_t(a,i),Mu(e,t,a,i,n);case 3:e:{if(fm(t),e===null)throw Error(O(387));a=t.pendingProps,l=t.memoizedState,i=l.element,qp(e,t),Zi(t,a,null,n);var s=t.memoizedState;if(a=s.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=In(Error(O(423)),t),t=_u(e,t,a,n,i);break e}else if(a!==i){i=In(Error(O(424)),t),t=_u(e,t,a,n,i);break e}else for(mt=kr(t.stateNode.containerInfo.firstChild),ft=t,Ee=!0,Pt=null,n=zp(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pn(),a===i){t=or(e,t,n);break e}tt(e,t,a,n)}t=t.child}return t;case 5:return Up(t),e===null&&Ws(t),a=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,s=i.children,Us(a,i)?s=null:l!==null&&Us(a,l)&&(t.flags|=32),mm(e,t),tt(e,t,s,n),t.child;case 6:return e===null&&Ws(t),null;case 13:return hm(e,t,n);case 4:return Ho(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Tn(t,null,a,n):tt(e,t,a,n),t.child;case 11:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:_t(a,i),Lu(e,t,a,i,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,i=t.pendingProps,l=t.memoizedProps,s=i.value,ve(Yi,a._currentValue),a._currentValue=s,l!==null)if(Ft(l.value,s)){if(l.children===i.children&&!st.current){t=or(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var o=l.dependencies;if(o!==null){s=l.child;for(var c=o.firstContext;c!==null;){if(c.context===a){if(l.tag===1){c=ar(-1,n&-n),c.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Js(l.return,n,t),o.lanes|=n;break}c=c.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(O(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Js(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}tt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,a=t.pendingProps.children,Rn(t,n),i=Et(i),a=a(i),t.flags|=1,tt(e,t,a,n),t.child;case 14:return a=t.type,i=_t(a,t.pendingProps),i=_t(a.type,i),Au(e,t,a,i,n);case 15:return dm(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:_t(a,i),Li(e,t),t.tag=1,ot(a)?(e=!0,Wi(t)):e=!1,Rn(t,n),om(t,a,i),Ys(t,a,i,n),Xs(null,t,a,!0,e,n);case 19:return gm(e,t,n);case 22:return pm(e,t,n)}throw Error(O(156,t.tag))};function Nm(e,t){return ip(e,t)}function px(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,a){return new px(e,t,n,a)}function ic(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mx(e){if(typeof e=="function")return ic(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Eo)return 11;if(e===Co)return 14}return 2}function Mr(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _i(e,t,n,a,i,l){var s=2;if(a=e,typeof e=="function")ic(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case dn:return Jr(n.children,i,l,t);case wo:s=8,i|=8;break;case bs:return e=St(12,n,t,i|2),e.elementType=bs,e.lanes=l,e;case js:return e=St(13,n,t,i),e.elementType=js,e.lanes=l,e;case Ss:return e=St(19,n,t,i),e.elementType=Ss,e.lanes=l,e;case Ud:return jl(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bd:s=10;break e;case qd:s=9;break e;case Eo:s=11;break e;case Co:s=14;break e;case fr:s=16,a=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=St(s,n,t,i),t.elementType=e,t.type=a,t.lanes=l,t}function Jr(e,t,n,a){return e=St(7,e,a,t),e.lanes=n,e}function jl(e,t,n,a){return e=St(22,e,a,t),e.elementType=Ud,e.lanes=n,e.stateNode={isHidden:!1},e}function ls(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function ss(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fx(e,t,n,a,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ql(0),this.expirationTimes=ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ql(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lc(e,t,n,a,i,l,s,o,c){return e=new fx(e,t,n,o,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=St(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$o(l),e}function hx(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:un,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function Pm(e){if(!e)return Nr;e=e._reactInternals;e:{if(tn(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(ot(n))return Pp(e,n,t)}return t}function Tm(e,t,n,a,i,l,s,o,c){return e=lc(n,a,!0,e,i,l,s,o,c),e.context=Pm(null),n=e.current,a=rt(),i=Ar(n),l=ar(a,i),l.callback=t??null,Rr(n,l,i),e.current.lanes=i,Da(e,i,a),ct(e,a),e}function Sl(e,t,n,a){var i=t.current,l=rt(),s=Ar(i);return n=Pm(n),t.context===null?t.context=n:t.pendingContext=n,t=ar(l,s),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Rr(i,t,s),e!==null&&(Ot(e,i,s,l),Ci(e,i,s)),s}function ll(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sc(e,t){qu(e,t),(e=e.alternate)&&qu(e,t)}function gx(){return null}var Om=typeof reportError=="function"?reportError:function(e){console.error(e)};function oc(e){this._internalRoot=e}wl.prototype.render=oc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));Sl(e,t,null,null)};wl.prototype.unmount=oc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xr(function(){Sl(null,e,null,null)}),t[lr]=null}};function wl(e){this._internalRoot=e}wl.prototype.unstable_scheduleHydration=function(e){if(e){var t=pp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gr.length&&t!==0&&t<gr[n].priority;n++);gr.splice(n,0,e),n===0&&fp(e)}};function cc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function El(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uu(){}function xx(e,t,n,a,i){if(i){if(typeof a=="function"){var l=a;a=function(){var u=ll(s);l.call(u)}}var s=Tm(t,a,e,0,null,!1,!1,"",Uu);return e._reactRootContainer=s,e[lr]=s.current,Ca(e.nodeType===8?e.parentNode:e),Xr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var o=a;a=function(){var u=ll(c);o.call(u)}}var c=lc(e,0,!1,null,null,!1,!1,"",Uu);return e._reactRootContainer=c,e[lr]=c.current,Ca(e.nodeType===8?e.parentNode:e),Xr(function(){Sl(t,c,n,a)}),c}function Cl(e,t,n,a,i){var l=n._reactRootContainer;if(l){var s=l;if(typeof i=="function"){var o=i;i=function(){var c=ll(s);o.call(c)}}Sl(t,s,e,i)}else s=xx(n,t,e,i,a);return ll(s)}up=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=na(t.pendingLanes);n!==0&&(Lo(t,n|1),ct(t,Pe()),!(de&6)&&(Fn=Pe()+500,Or()))}break;case 13:Xr(function(){var a=sr(e,1);if(a!==null){var i=rt();Ot(a,e,1,i)}}),sc(e,1)}};Ao=function(e){if(e.tag===13){var t=sr(e,134217728);if(t!==null){var n=rt();Ot(t,e,134217728,n)}sc(e,134217728)}};dp=function(e){if(e.tag===13){var t=Ar(e),n=sr(e,t);if(n!==null){var a=rt();Ot(n,e,t,a)}sc(e,t)}};pp=function(){return me};mp=function(e,t){var n=me;try{return me=e,t()}finally{me=n}};Ns=function(e,t,n){switch(t){case"input":if(Cs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=hl(a);if(!i)throw Error(O(90));Hd(a),Cs(a,i)}}}break;case"textarea":Gd(e,n);break;case"select":t=n.value,t!=null&&wn(e,!!n.multiple,t,!1)}};Xd=rc;ep=Xr;var vx={usingClientEntryPoint:!1,Events:[Ba,hn,hl,Kd,Zd,rc]},Kn={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yx={bundleType:Kn.bundleType,version:Kn.version,rendererPackageName:Kn.rendererPackageName,rendererConfig:Kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=np(e),e===null?null:e.stateNode},findFiberByHostInstance:Kn.findFiberByHostInstance||gx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hi.isDisabled&&hi.supportsFiber)try{dl=hi.inject(yx),$t=hi}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vx;gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cc(t))throw Error(O(200));return hx(e,t,null,n)};gt.createRoot=function(e,t){if(!cc(e))throw Error(O(299));var n=!1,a="",i=Om;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=lc(e,1,!1,null,null,n,!1,a,i),e[lr]=t.current,Ca(e.nodeType===8?e.parentNode:e),new oc(t)};gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=np(t),e=e===null?null:e.stateNode,e};gt.flushSync=function(e){return Xr(e)};gt.hydrate=function(e,t,n){if(!El(t))throw Error(O(200));return Cl(null,e,t,!0,n)};gt.hydrateRoot=function(e,t,n){if(!cc(e))throw Error(O(405));var a=n!=null&&n.hydratedSources||null,i=!1,l="",s=Om;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Tm(t,null,e,1,n??null,i,!1,l,s),e[lr]=t.current,Ca(e),a)for(e=0;e<a.length;e++)n=a[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new wl(t)};gt.render=function(e,t,n){if(!El(t))throw Error(O(200));return Cl(null,e,t,!1,n)};gt.unmountComponentAtNode=function(e){if(!El(e))throw Error(O(40));return e._reactRootContainer?(Xr(function(){Cl(null,null,e,!1,function(){e._reactRootContainer=null,e[lr]=null})}),!0):!1};gt.unstable_batchedUpdates=rc;gt.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!El(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return Cl(e,t,n,!1,a)};gt.version="18.3.1-next-f1338f8080-20240426";function Im(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Im)}catch(e){console.error(e)}}Im(),Id.exports=gt;var Fm=Id.exports,Dm,$u=Fm;Dm=$u.createRoot,$u.hydrateRoot;/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var zm=e=>{throw TypeError(e)},bx=(e,t,n)=>t.has(e)||zm("Cannot "+n),os=(e,t,n)=>(bx(e,t,"read from private field"),n?n.call(e):t.get(e)),jx=(e,t,n)=>t.has(e)?zm("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Hu="popstate";function Vu(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function Sx(e={}){function t(i,l){let{pathname:s="/",search:o="",hash:c=""}=Wt(i.location.hash.substring(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),Ta("",{pathname:s,search:o,hash:c},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(i,l){let s=i.document.querySelector("base"),o="";if(s&&s.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");o=u===-1?c:c.slice(0,u)}return o+"#"+(typeof l=="string"?l:Gt(l))}function a(i,l){Te(i.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return Ex(t,n,a,e)}function ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Te(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function wx(){return Math.random().toString(36).substring(2,10)}function Gu(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Ta(e,t,n=null,a,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Wt(t):t,state:n,key:t&&t.key||a||wx(),unstable_mask:i}}function Gt({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Wt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function Ex(e,t,n,a={}){let{window:i=document.defaultView,v5Compat:l=!1}=a,s=i.history,o="POP",c=null,u=m();u==null&&(u=0,s.replaceState({...s.state,idx:u},""));function m(){return(s.state||{idx:null}).idx}function d(){o="POP";let b=m(),h=b==null?null:b-u;u=b,c&&c({action:o,location:v.location,delta:h})}function f(b,h){o="PUSH";let p=Vu(b)?b:Ta(v.location,b,h);n&&n(p,b),u=m()+1;let x=Gu(p,u),R=v.createHref(p.unstable_mask||p);try{s.pushState(x,"",R)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(R)}l&&c&&c({action:o,location:v.location,delta:1})}function y(b,h){o="REPLACE";let p=Vu(b)?b:Ta(v.location,b,h);n&&n(p,b),u=m();let x=Gu(p,u),R=v.createHref(p.unstable_mask||p);s.replaceState(x,"",R),l&&c&&c({action:o,location:v.location,delta:0})}function g(b){return Bm(b)}let v={get action(){return o},get location(){return e(i,s)},listen(b){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Hu,d),c=b,()=>{i.removeEventListener(Hu,d),c=null}},createHref(b){return t(i,b)},createURL:g,encodeLocation(b){let h=g(b);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:y,go(b){return s.go(b)}};return v}function Bm(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ae(n,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:Gt(e);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=n+a),new URL(a,n)}var ia,Wu=class{constructor(e){if(jx(this,ia,new Map),e)for(let[t,n]of e)this.set(t,n)}get(e){if(os(this,ia).has(e))return os(this,ia).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,t){os(this,ia).set(e,t)}};ia=new WeakMap;var Cx=new Set(["lazy","caseSensitive","path","id","index","children"]);function kx(e){return Cx.has(e)}var Rx=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function Lx(e){return Rx.has(e)}function Ax(e){return e.index===!0}function Oa(e,t,n=[],a={},i=!1){return e.map((l,s)=>{let o=[...n,String(s)],c=typeof l.id=="string"?l.id:o.join("-");if(ae(l.index!==!0||!l.children,"Cannot specify children on an index route"),ae(i||!a[c],`Found a route id collision on id "${c}".  Route id's must be globally unique within Data Router usages`),Ax(l)){let u={...l,id:c};return a[c]=Ju(u,t(u)),u}else{let u={...l,id:c,children:void 0};return a[c]=Ju(u,t(u)),l.children&&(u.children=Oa(l.children,t,o,a,i)),u}})}function Ju(e,t){return Object.assign(e,{...t,...typeof t.lazy=="object"&&t.lazy!=null?{lazy:{...e.lazy,...t.lazy}}:{}})}function vr(e,t,n="/"){return la(e,t,n,!1)}function la(e,t,n,a){let i=typeof t=="string"?Wt(t):t,l=kt(i.pathname||"/",n);if(l==null)return null;let s=qm(e);_x(s);let o=null;for(let c=0;o==null&&c<s.length;++c){let u=Ux(l);o=Bx(s[c],u,a)}return o}function Mx(e,t){let{route:n,pathname:a,params:i}=e;return{id:n.id,pathname:a,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function qm(e,t=[],n=[],a="",i=!1){let l=(s,o,c=i,u)=>{let m={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(a)&&c)return;ae(m.relativePath.startsWith(a),`Absolute route path "${m.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(a.length)}let d=It([a,m.relativePath]),f=n.concat(m);s.children&&s.children.length>0&&(ae(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),qm(s.children,t,f,d,c)),!(s.path==null&&!s.index)&&t.push({path:d,score:Dx(d,s.index),routesMeta:f})};return e.forEach((s,o)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))l(s,o);else for(let u of Um(s.path))l(s,o,!0,u)}),t}function Um(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(a.length===0)return i?[l,""]:[l];let s=Um(a.join("/")),o=[];return o.push(...s.map(c=>c===""?l:[l,c].join("/"))),i&&o.push(...s),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function _x(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:zx(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var Nx=/^:[\w-]+$/,Px=3,Tx=2,Ox=1,Ix=10,Fx=-2,Qu=e=>e==="*";function Dx(e,t){let n=e.split("/"),a=n.length;return n.some(Qu)&&(a+=Fx),t&&(a+=Tx),n.filter(i=>!Qu(i)).reduce((i,l)=>i+(Nx.test(l)?Px:l===""?Ox:Ix),a)}function zx(e,t){return e.length===t.length&&e.slice(0,-1).every((a,i)=>a===t[i])?e[e.length-1]-t[t.length-1]:0}function Bx(e,t,n=!1){let{routesMeta:a}=e,i={},l="/",s=[];for(let o=0;o<a.length;++o){let c=a[o],u=o===a.length-1,m=l==="/"?t:t.slice(l.length)||"/",d=sl({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},m),f=c.route;if(!d&&u&&n&&!a[a.length-1].route.index&&(d=sl({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:It([l,d.pathname]),pathnameBase:Vx(It([l,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(l=It([l,d.pathnameBase]))}return s}function sl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=qx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],s=l.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:a.reduce((u,{paramName:m,isOptional:d},f)=>{if(m==="*"){let g=o[f]||"";s=l.slice(0,l.length-g.length).replace(/(.)\/+$/,"$1")}const y=o[f];return d&&!y?u[m]=void 0:u[m]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:s,pattern:e}}function qx(e,t=!1,n=!0){Te(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,c,u,m)=>{if(a.push({paramName:o,isOptional:c!=null}),c){let d=m.charAt(u+s.length);return d&&d!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),a]}function Ux(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Te(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function kt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function $x({basename:e,pathname:t}){return t==="/"?e:It([e,t])}var $m=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uc=e=>$m.test(e);function Hx(e,t="/"){let{pathname:n,search:a="",hash:i=""}=typeof e=="string"?Wt(e):e,l;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?l=Yu(n.substring(1),"/"):l=Yu(n,t)):l=t,{pathname:l,search:Gx(a),hash:Wx(i)}}function Yu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function cs(e,t,n,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Hm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function dc(e){let t=Hm(e);return t.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase)}function kl(e,t,n,a=!1){let i;typeof e=="string"?i=Wt(e):(i={...e},ae(!i.pathname||!i.pathname.includes("?"),cs("?","pathname","search",i)),ae(!i.pathname||!i.pathname.includes("#"),cs("#","pathname","hash",i)),ae(!i.search||!i.search.includes("#"),cs("#","search","hash",i)));let l=e===""||i.pathname==="",s=l?"/":i.pathname,o;if(s==null)o=n;else{let d=t.length-1;if(!a&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}o=d>=0?t[d]:"/"}let c=Hx(i,o),u=s&&s!=="/"&&s.endsWith("/"),m=(l||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}var It=e=>e.join("/").replace(/\/\/+/g,"/"),Vx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Gx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Wx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Ua=class{constructor(e,t,n,a=!1){this.status=e,this.statusText=t||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ia(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function $a(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Vm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Gm(e,t){let n=e;if(typeof n!="string"||!$m.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let a=n,i=!1;if(Vm)try{let l=new URL(window.location.href),s=n.startsWith("//")?new URL(l.protocol+n):new URL(n),o=kt(s.pathname,t);s.origin===l.origin&&o!=null?n=o+s.search+s.hash:i=!0}catch{Te(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:i,to:n}}var Sr=Symbol("Uninstrumented");function Jx(e,t){let n={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};e.forEach(i=>i({id:t.id,index:t.index,path:t.path,instrument(l){let s=Object.keys(n);for(let o of s)l[o]&&n[o].push(l[o])}}));let a={};if(typeof t.lazy=="function"&&n.lazy.length>0){let i=Sn(n.lazy,t.lazy,()=>{});i&&(a.lazy=i)}if(typeof t.lazy=="object"){let i=t.lazy;["middleware","loader","action"].forEach(l=>{let s=i[l],o=n[`lazy.${l}`];if(typeof s=="function"&&o.length>0){let c=Sn(o,s,()=>{});c&&(a.lazy=Object.assign(a.lazy||{},{[l]:c}))}})}return["loader","action"].forEach(i=>{let l=t[i];if(typeof l=="function"&&n[i].length>0){let s=l[Sr]??l,o=Sn(n[i],s,(...c)=>Ku(c[0]));o&&(i==="loader"&&s.hydrate===!0&&(o.hydrate=!0),o[Sr]=s,a[i]=o)}}),t.middleware&&t.middleware.length>0&&n.middleware.length>0&&(a.middleware=t.middleware.map(i=>{let l=i[Sr]??i,s=Sn(n.middleware,l,(...o)=>Ku(o[0]));return s?(s[Sr]=l,s):i})),a}function Qx(e,t){let n={navigate:[],fetch:[]};if(t.forEach(a=>a({instrument(i){let l=Object.keys(i);for(let s of l)i[s]&&n[s].push(i[s])}})),n.navigate.length>0){let a=e.navigate[Sr]??e.navigate,i=Sn(n.navigate,a,(...l)=>{let[s,o]=l;return{to:typeof s=="number"||typeof s=="string"?s:s?Gt(s):".",...Zu(e,o??{})}});i&&(i[Sr]=a,e.navigate=i)}if(n.fetch.length>0){let a=e.fetch[Sr]??e.fetch,i=Sn(n.fetch,a,(...l)=>{let[s,,o,c]=l;return{href:o??".",fetcherKey:s,...Zu(e,c??{})}});i&&(i[Sr]=a,e.fetch=i)}return e}function Sn(e,t,n){return e.length===0?null:async(...a)=>{let i=await Wm(e,n(...a),()=>t(...a),e.length-1);if(i.type==="error")throw i.value;return i.value}}async function Wm(e,t,n,a){let i=e[a],l;if(i){let s,o=async()=>(s?console.error("You cannot call instrumented handlers more than once"):s=Wm(e,t,n,a-1),l=await s,ae(l,"Expected a result"),l.type==="error"&&l.value instanceof Error?{status:"error",error:l.value}:{status:"success",error:void 0});try{await i(o,t)}catch(c){console.error("An instrumentation function threw an error:",c)}s||await o(),await s}else try{l={type:"success",value:await n()}}catch(s){l={type:"error",value:s}}return l||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function Ku(e){let{request:t,context:n,params:a,unstable_pattern:i}=e;return{request:Yx(t),params:{...a},unstable_pattern:i,context:Kx(n)}}function Zu(e,t){return{currentUrl:Gt(e.state.location),..."formMethod"in t?{formMethod:t.formMethod}:{},..."formEncType"in t?{formEncType:t.formEncType}:{},..."formData"in t?{formData:t.formData}:{},..."body"in t?{body:t.body}:{}}}function Yx(e){return{method:e.method,url:e.url,headers:{get:(...t)=>e.headers.get(...t)}}}function Kx(e){if(Xx(e)){let t={...e};return Object.freeze(t),t}else return{get:t=>e.get(t)}}var Zx=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xx(e){if(e===null||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null||Object.getOwnPropertyNames(t).sort().join("\0")===Zx}var Jm=["POST","PUT","PATCH","DELETE"],ev=new Set(Jm),tv=["GET",...Jm],rv=new Set(tv),Qm=new Set([301,302,303,307,308]),nv=new Set([307,308]),us={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},av={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Zn={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},iv=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Ym="remix-router-transitions",Km=Symbol("ResetLoaderData");function lv(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u";ae(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a=e.hydrationRouteProperties||[],i=e.mapRouteProperties||iv,l=i;if(e.unstable_instrumentations){let j=e.unstable_instrumentations;l=E=>({...i(E),...Jx(j.map(L=>L.route).filter(Boolean),E)})}let s={},o=Oa(e.routes,l,void 0,s),c,u=e.basename||"/";u.startsWith("/")||(u=`/${u}`);let m=e.dataStrategy||dv,d={...e.future},f=null,y=new Set,g=null,v=null,b=null,h=e.hydrationData!=null,p=vr(o,e.history.location,u),x=!1,R=null,M,N;if(p==null&&!e.patchRoutesOnNavigation){let j=yt(404,{pathname:e.history.location.pathname}),{matches:E,route:L}=gi(o);M=!0,N=!M,p=E,R={[L.id]:j}}else if(p&&!e.hydrationData&&Ja(p,o,e.history.location.pathname).active&&(p=null),p)if(p.some(j=>j.route.lazy))M=!1,N=!M;else if(!p.some(j=>pc(j.route)))M=!0,N=!M;else{let j=e.hydrationData?e.hydrationData.loaderData:null,E=e.hydrationData?e.hydrationData.errors:null,L=p;if(E){let T=p.findIndex(D=>E[D.route.id]!==void 0);L=L.slice(0,T+1)}N=!1,M=L.every(T=>{let D=Zm(T.route,j,E);return N=N||D.renderFallback,!D.shouldLoad})}else{M=!1,N=!M,p=[];let j=Ja(null,o,e.history.location.pathname);j.active&&j.matches&&(x=!0,p=j.matches)}let P,S={historyAction:e.history.action,location:e.history.location,matches:p,initialized:M,renderFallback:N,navigation:us,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||R,fetchers:new Map,blockers:new Map},H="POP",z=null,re=!1,K,Ce=!1,Z=new Map,ce=null,le=!1,pe=!1,I=new Set,B=new Map,U=0,te=-1,se=new Map,xe=new Set,we=new Map,Ie=new Map,ye=new Set,Ue=new Map,nn,Lt=null;function Rf(){if(f=e.history.listen(({action:j,location:E,delta:L})=>{if(nn){nn(),nn=void 0;return}Te(Ue.size===0||L!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let T=Mc({currentLocation:S.location,nextLocation:E,historyAction:j});if(T&&L!=null){let D=new Promise(G=>{nn=G});e.history.go(L*-1),Wa(T,{state:"blocked",location:E,proceed(){Wa(T,{state:"proceeding",proceed:void 0,reset:void 0,location:E}),D.then(()=>e.history.go(L))},reset(){let G=new Map(S.blockers);G.set(T,Zn),Ge({blockers:G})}}),z==null||z.resolve(),z=null;return}return Ir(j,E)}),n){Av(t,Z);let j=()=>Mv(t,Z);t.addEventListener("pagehide",j),ce=()=>t.removeEventListener("pagehide",j)}return S.initialized||Ir("POP",S.location,{initialHydration:!0}),P}function Lf(){f&&f(),ce&&ce(),y.clear(),K&&K.abort(),S.fetchers.forEach((j,E)=>Pl(E)),S.blockers.forEach((j,E)=>Ac(E))}function Af(j){return y.add(j),()=>y.delete(j)}function Ge(j,E={}){j.matches&&(j.matches=j.matches.map(D=>{let G=s[D.route.id],J=D.route;return J.element!==G.element||J.errorElement!==G.errorElement||J.hydrateFallbackElement!==G.hydrateFallbackElement?{...D,route:G}:D})),S={...S,...j};let L=[],T=[];S.fetchers.forEach((D,G)=>{D.state==="idle"&&(ye.has(G)?L.push(G):T.push(G))}),ye.forEach(D=>{!S.fetchers.has(D)&&!B.has(D)&&L.push(D)}),[...y].forEach(D=>D(S,{deletedFetchers:L,newErrors:j.errors??null,viewTransitionOpts:E.viewTransitionOpts,flushSync:E.flushSync===!0})),L.forEach(D=>Pl(D)),T.forEach(D=>S.fetchers.delete(D))}function an(j,E,{flushSync:L}={}){var X,W;let T=S.actionData!=null&&S.navigation.formMethod!=null&&Ye(S.navigation.formMethod)&&S.navigation.state==="loading"&&((X=j.state)==null?void 0:X._isRedirect)!==!0,D;E.actionData?Object.keys(E.actionData).length>0?D=E.actionData:D=null:T?D=S.actionData:D=null;let G=E.loaderData?od(S.loaderData,E.loaderData,E.matches||[],E.errors):S.loaderData,J=S.blockers;J.size>0&&(J=new Map(J),J.forEach((ne,oe)=>J.set(oe,Zn)));let V=le?!1:Nc(j,E.matches||S.matches),q=re===!0||S.navigation.formMethod!=null&&Ye(S.navigation.formMethod)&&((W=j.state)==null?void 0:W._isRedirect)!==!0;c&&(o=c,c=void 0),le||H==="POP"||(H==="PUSH"?e.history.push(j,j.state):H==="REPLACE"&&e.history.replace(j,j.state));let Y;if(H==="POP"){let ne=Z.get(S.location.pathname);ne&&ne.has(j.pathname)?Y={currentLocation:S.location,nextLocation:j}:Z.has(j.pathname)&&(Y={currentLocation:j,nextLocation:S.location})}else if(Ce){let ne=Z.get(S.location.pathname);ne?ne.add(j.pathname):(ne=new Set([j.pathname]),Z.set(S.location.pathname,ne)),Y={currentLocation:S.location,nextLocation:j}}Ge({...E,actionData:D,loaderData:G,historyAction:H,location:j,initialized:!0,renderFallback:!1,navigation:us,revalidation:"idle",restoreScrollPosition:V,preventScrollReset:q,blockers:J},{viewTransitionOpts:Y,flushSync:L===!0}),H="POP",re=!1,Ce=!1,le=!1,pe=!1,z==null||z.resolve(),z=null,Lt==null||Lt.resolve(),Lt=null}async function Sc(j,E){if(z==null||z.resolve(),z=null,typeof j=="number"){z||(z=pd());let ke=z.promise;return e.history.go(j),ke}let L=po(S.location,S.matches,u,j,E==null?void 0:E.fromRouteId,E==null?void 0:E.relative),{path:T,submission:D,error:G}=Xu(!1,L,E),J;E!=null&&E.unstable_mask&&(J={pathname:"",search:"",hash:"",...typeof E.unstable_mask=="string"?Wt(E.unstable_mask):{...S.location.unstable_mask,...E.unstable_mask}});let V=S.location,q=Ta(V,T,E&&E.state,void 0,J);q={...q,...e.history.encodeLocation(q)};let Y=E&&E.replace!=null?E.replace:void 0,X="PUSH";Y===!0?X="REPLACE":Y===!1||D!=null&&Ye(D.formMethod)&&D.formAction===S.location.pathname+S.location.search&&(X="REPLACE");let W=E&&"preventScrollReset"in E?E.preventScrollReset===!0:void 0,ne=(E&&E.flushSync)===!0,oe=Mc({currentLocation:V,nextLocation:q,historyAction:X});if(oe){Wa(oe,{state:"blocked",location:q,proceed(){Wa(oe,{state:"proceeding",proceed:void 0,reset:void 0,location:q}),Sc(j,E)},reset(){let ke=new Map(S.blockers);ke.set(oe,Zn),Ge({blockers:ke})}});return}await Ir(X,q,{submission:D,pendingError:G,preventScrollReset:W,replace:E&&E.replace,enableViewTransition:E&&E.viewTransition,flushSync:ne,callSiteDefaultShouldRevalidate:E&&E.unstable_defaultShouldRevalidate})}function Mf(){Lt||(Lt=pd()),Nl(),Ge({revalidation:"loading"});let j=Lt.promise;return S.navigation.state==="submitting"?j:S.navigation.state==="idle"?(Ir(S.historyAction,S.location,{startUninterruptedRevalidation:!0}),j):(Ir(H||S.historyAction,S.navigation.location,{overrideNavigation:S.navigation,enableViewTransition:Ce===!0}),j)}async function Ir(j,E,L){K&&K.abort(),K=null,H=j,le=(L&&L.startUninterruptedRevalidation)===!0,qf(S.location,S.matches),re=(L&&L.preventScrollReset)===!0,Ce=(L&&L.enableViewTransition)===!0;let T=c||o,D=L&&L.overrideNavigation,G=L!=null&&L.initialHydration&&S.matches&&S.matches.length>0&&!x?S.matches:vr(T,E,u),J=(L&&L.flushSync)===!0;if(G&&S.initialized&&!pe&&yv(S.location,E)&&!(L&&L.submission&&Ye(L.submission.formMethod))){an(E,{matches:G},{flushSync:J});return}let V=Ja(G,T,E.pathname);if(V.active&&V.matches&&(G=V.matches),!G){let{error:ze,notFoundMatches:Xe,route:fe}=Tl(E.pathname);an(E,{matches:Xe,loaderData:{},errors:{[fe.id]:ze}},{flushSync:J});return}K=new AbortController;let q=cn(e.history,E,K.signal,L&&L.submission),Y=e.getContext?await e.getContext():new Wu,X;if(L&&L.pendingError)X=[yr(G).route.id,{type:"error",error:L.pendingError}];else if(L&&L.submission&&Ye(L.submission.formMethod)){let ze=await _f(q,E,L.submission,G,Y,V.active,L&&L.initialHydration===!0,{replace:L.replace,flushSync:J});if(ze.shortCircuited)return;if(ze.pendingActionResult){let[Xe,fe]=ze.pendingActionResult;if(pt(fe)&&Ia(fe.error)&&fe.error.status===404){K=null,an(E,{matches:ze.matches,loaderData:{},errors:{[Xe]:fe.error}});return}}G=ze.matches||G,X=ze.pendingActionResult,D=ds(E,L.submission),J=!1,V.active=!1,q=cn(e.history,q.url,q.signal)}let{shortCircuited:W,matches:ne,loaderData:oe,errors:ke}=await Nf(q,E,G,Y,V.active,D,L&&L.submission,L&&L.fetcherSubmission,L&&L.replace,L&&L.initialHydration===!0,J,X,L&&L.callSiteDefaultShouldRevalidate);W||(K=null,an(E,{matches:ne||G,...cd(X),loaderData:oe,errors:ke}))}async function _f(j,E,L,T,D,G,J,V={}){Nl();let q=Rv(E,L);if(Ge({navigation:q},{flushSync:V.flushSync===!0}),G){let W=await Qa(T,E.pathname,j.signal);if(W.type==="aborted")return{shortCircuited:!0};if(W.type==="error"){if(W.partialMatches.length===0){let{matches:oe,route:ke}=gi(o);return{matches:oe,pendingActionResult:[ke.id,{type:"error",error:W.error}]}}let ne=yr(W.partialMatches).route.id;return{matches:W.partialMatches,pendingActionResult:[ne,{type:"error",error:W.error}]}}else if(W.matches)T=W.matches;else{let{notFoundMatches:ne,error:oe,route:ke}=Tl(E.pathname);return{matches:ne,pendingActionResult:[ke.id,{type:"error",error:oe}]}}}let Y,X=Ni(T,E);if(!X.route.action&&!X.route.lazy)Y={type:"error",error:yt(405,{method:j.method,pathname:E.pathname,routeId:X.route.id})};else{let W=An(l,s,j,T,X,J?[]:a,D),ne=await qn(j,W,D,null);if(Y=ne[X.route.id],!Y){for(let oe of T)if(ne[oe.route.id]){Y=ne[oe.route.id];break}}if(j.signal.aborted)return{shortCircuited:!0}}if(Gr(Y)){let W;return V&&V.replace!=null?W=V.replace:W=id(Y.response.headers.get("Location"),new URL(j.url),u,e.history)===S.location.pathname+S.location.search,await Fr(j,Y,!0,{submission:L,replace:W}),{shortCircuited:!0}}if(pt(Y)){let W=yr(T,X.route.id);return(V&&V.replace)!==!0&&(H="PUSH"),{matches:T,pendingActionResult:[W.route.id,Y,X.route.id]}}return{matches:T,pendingActionResult:[X.route.id,Y]}}async function Nf(j,E,L,T,D,G,J,V,q,Y,X,W,ne){let oe=G||ds(E,J),ke=J||V||dd(oe),ze=!le&&!Y;if(D){if(ze){let We=wc(W);Ge({navigation:oe,...We!==void 0?{actionData:We}:{}},{flushSync:X})}let ue=await Qa(L,E.pathname,j.signal);if(ue.type==="aborted")return{shortCircuited:!0};if(ue.type==="error"){if(ue.partialMatches.length===0){let{matches:ln,route:Br}=gi(o);return{matches:ln,loaderData:{},errors:{[Br.id]:ue.error}}}let We=yr(ue.partialMatches).route.id;return{matches:ue.partialMatches,loaderData:{},errors:{[We]:ue.error}}}else if(ue.matches)L=ue.matches;else{let{error:We,notFoundMatches:ln,route:Br}=Tl(E.pathname);return{matches:ln,loaderData:{},errors:{[Br.id]:We}}}}let Xe=c||o,{dsMatches:fe,revalidatingFetchers:vt}=ed(j,T,l,s,e.history,S,L,ke,E,Y?[]:a,Y===!0,pe,I,ye,we,xe,Xe,u,e.patchRoutesOnNavigation!=null,W,ne);if(te=++U,!e.dataStrategy&&!fe.some(ue=>ue.shouldLoad)&&!fe.some(ue=>ue.route.middleware&&ue.route.middleware.length>0)&&vt.length===0){let ue=Rc();return an(E,{matches:L,loaderData:{},errors:W&&pt(W[1])?{[W[0]]:W[1].error}:null,...cd(W),...ue?{fetchers:new Map(S.fetchers)}:{}},{flushSync:X}),{shortCircuited:!0}}if(ze){let ue={};if(!D){ue.navigation=oe;let We=wc(W);We!==void 0&&(ue.actionData=We)}vt.length>0&&(ue.fetchers=Pf(vt)),Ge(ue,{flushSync:X})}vt.forEach(ue=>{Zt(ue.key),ue.controller&&B.set(ue.key,ue.controller)});let Dr=()=>vt.forEach(ue=>Zt(ue.key));K&&K.signal.addEventListener("abort",Dr);let{loaderResults:Un,fetcherResults:ur}=await Ec(fe,vt,j,T);if(j.signal.aborted)return{shortCircuited:!0};K&&K.signal.removeEventListener("abort",Dr),vt.forEach(ue=>B.delete(ue.key));let Dt=xi(Un);if(Dt)return await Fr(j,Dt.result,!0,{replace:q}),{shortCircuited:!0};if(Dt=xi(ur),Dt)return xe.add(Dt.key),await Fr(j,Dt.result,!0,{replace:q}),{shortCircuited:!0};let{loaderData:Ol,errors:$n}=sd(S,L,Un,W,vt,ur);Y&&S.errors&&($n={...S.errors,...$n});let zr=Rc(),Ya=Lc(te),Ka=zr||Ya||vt.length>0;return{matches:L,loaderData:Ol,errors:$n,...Ka?{fetchers:new Map(S.fetchers)}:{}}}function wc(j){if(j&&!pt(j[1]))return{[j[0]]:j[1].data};if(S.actionData)return Object.keys(S.actionData).length===0?null:S.actionData}function Pf(j){return j.forEach(E=>{let L=S.fetchers.get(E.key),T=Xn(void 0,L?L.data:void 0);S.fetchers.set(E.key,T)}),new Map(S.fetchers)}async function Tf(j,E,L,T){Zt(j);let D=(T&&T.flushSync)===!0,G=c||o,J=po(S.location,S.matches,u,L,E,T==null?void 0:T.relative),V=vr(G,J,u),q=Ja(V,G,J);if(q.active&&q.matches&&(V=q.matches),!V){Kt(j,E,yt(404,{pathname:J}),{flushSync:D});return}let{path:Y,submission:X,error:W}=Xu(!0,J,T);if(W){Kt(j,E,W,{flushSync:D});return}let ne=e.getContext?await e.getContext():new Wu,oe=(T&&T.preventScrollReset)===!0;if(X&&Ye(X.formMethod)){await Of(j,E,Y,V,ne,q.active,D,oe,X,T&&T.unstable_defaultShouldRevalidate);return}we.set(j,{routeId:E,path:Y}),await If(j,E,Y,V,ne,q.active,D,oe,X)}async function Of(j,E,L,T,D,G,J,V,q,Y){Nl(),we.delete(j);let X=S.fetchers.get(j);Yt(j,Lv(q,X),{flushSync:J});let W=new AbortController,ne=cn(e.history,L,W.signal,q);if(G){let Me=await Qa(T,new URL(ne.url).pathname,ne.signal,j);if(Me.type==="aborted")return;if(Me.type==="error"){Kt(j,E,Me.error,{flushSync:J});return}else if(Me.matches)T=Me.matches;else{Kt(j,E,yt(404,{pathname:L}),{flushSync:J});return}}let oe=Ni(T,L);if(!oe.route.action&&!oe.route.lazy){let Me=yt(405,{method:q.formMethod,pathname:L,routeId:E});Kt(j,E,Me,{flushSync:J});return}B.set(j,W);let ke=U,ze=An(l,s,ne,T,oe,a,D),Xe=await qn(ne,ze,D,j),fe=Xe[oe.route.id];if(!fe){for(let Me of ze)if(Xe[Me.route.id]){fe=Xe[Me.route.id];break}}if(ne.signal.aborted){B.get(j)===W&&B.delete(j);return}if(ye.has(j)){if(Gr(fe)||pt(fe)){Yt(j,Xt(void 0));return}}else{if(Gr(fe))if(B.delete(j),te>ke){Yt(j,Xt(void 0));return}else return xe.add(j),Yt(j,Xn(q)),Fr(ne,fe,!1,{fetcherSubmission:q,preventScrollReset:V});if(pt(fe)){Kt(j,E,fe.error);return}}let vt=S.navigation.location||S.location,Dr=cn(e.history,vt,W.signal),Un=c||o,ur=S.navigation.state!=="idle"?vr(Un,S.navigation.location,u):S.matches;ae(ur,"Didn't find any matches after fetcher action");let Dt=++U;se.set(j,Dt);let Ol=Xn(q,fe.data);S.fetchers.set(j,Ol);let{dsMatches:$n,revalidatingFetchers:zr}=ed(Dr,D,l,s,e.history,S,ur,q,vt,a,!1,pe,I,ye,we,xe,Un,u,e.patchRoutesOnNavigation!=null,[oe.route.id,fe],Y);zr.filter(Me=>Me.key!==j).forEach(Me=>{let Za=Me.key,Tc=S.fetchers.get(Za),Hf=Xn(void 0,Tc?Tc.data:void 0);S.fetchers.set(Za,Hf),Zt(Za),Me.controller&&B.set(Za,Me.controller)}),Ge({fetchers:new Map(S.fetchers)});let Ya=()=>zr.forEach(Me=>Zt(Me.key));W.signal.addEventListener("abort",Ya);let{loaderResults:Ka,fetcherResults:ue}=await Ec($n,zr,Dr,D);if(W.signal.aborted)return;if(W.signal.removeEventListener("abort",Ya),se.delete(j),B.delete(j),zr.forEach(Me=>B.delete(Me.key)),S.fetchers.has(j)){let Me=Xt(fe.data);S.fetchers.set(j,Me)}let We=xi(Ka);if(We)return Fr(Dr,We.result,!1,{preventScrollReset:V});if(We=xi(ue),We)return xe.add(We.key),Fr(Dr,We.result,!1,{preventScrollReset:V});let{loaderData:ln,errors:Br}=sd(S,ur,Ka,void 0,zr,ue);Lc(Dt),S.navigation.state==="loading"&&Dt>te?(ae(H,"Expected pending action"),K&&K.abort(),an(S.navigation.location,{matches:ur,loaderData:ln,errors:Br,fetchers:new Map(S.fetchers)})):(Ge({errors:Br,loaderData:od(S.loaderData,ln,ur,Br),fetchers:new Map(S.fetchers)}),pe=!1)}async function If(j,E,L,T,D,G,J,V,q){let Y=S.fetchers.get(j);Yt(j,Xn(q,Y?Y.data:void 0),{flushSync:J});let X=new AbortController,W=cn(e.history,L,X.signal);if(G){let fe=await Qa(T,new URL(W.url).pathname,W.signal,j);if(fe.type==="aborted")return;if(fe.type==="error"){Kt(j,E,fe.error,{flushSync:J});return}else if(fe.matches)T=fe.matches;else{Kt(j,E,yt(404,{pathname:L}),{flushSync:J});return}}let ne=Ni(T,L);B.set(j,X);let oe=U,ke=An(l,s,W,T,ne,a,D),Xe=(await qn(W,ke,D,j))[ne.route.id];if(B.get(j)===X&&B.delete(j),!W.signal.aborted){if(ye.has(j)){Yt(j,Xt(void 0));return}if(Gr(Xe))if(te>oe){Yt(j,Xt(void 0));return}else{xe.add(j),await Fr(W,Xe,!1,{preventScrollReset:V});return}if(pt(Xe)){Kt(j,E,Xe.error);return}Yt(j,Xt(Xe.data))}}async function Fr(j,E,L,{submission:T,fetcherSubmission:D,preventScrollReset:G,replace:J}={}){L||(z==null||z.resolve(),z=null),E.response.headers.has("X-Remix-Revalidate")&&(pe=!0);let V=E.response.headers.get("Location");ae(V,"Expected a Location header on the redirect Response"),V=id(V,new URL(j.url),u,e.history);let q=Ta(S.location,V,{_isRedirect:!0});if(n){let ke=!1;if(E.response.headers.has("X-Remix-Reload-Document"))ke=!0;else if(uc(V)){const ze=Bm(V,!0);ke=ze.origin!==t.location.origin||kt(ze.pathname,u)==null}if(ke){J?t.location.replace(V):t.location.assign(V);return}}K=null;let Y=J===!0||E.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:X,formAction:W,formEncType:ne}=S.navigation;!T&&!D&&X&&W&&ne&&(T=dd(S.navigation));let oe=T||D;if(nv.has(E.response.status)&&oe&&Ye(oe.formMethod))await Ir(Y,q,{submission:{...oe,formAction:V},preventScrollReset:G||re,enableViewTransition:L?Ce:void 0});else{let ke=ds(q,T);await Ir(Y,q,{overrideNavigation:ke,fetcherSubmission:D,preventScrollReset:G||re,enableViewTransition:L?Ce:void 0})}}async function qn(j,E,L,T){var J;let D,G={};try{D=await mv(m,j,E,T,L,!1)}catch(V){return E.filter(q=>q.shouldLoad).forEach(q=>{G[q.route.id]={type:"error",error:V}}),G}if(j.signal.aborted)return G;if(!Ye(j.method))for(let V of E){if(((J=D[V.route.id])==null?void 0:J.type)==="error")break;!D.hasOwnProperty(V.route.id)&&!S.loaderData.hasOwnProperty(V.route.id)&&(!S.errors||!S.errors.hasOwnProperty(V.route.id))&&V.shouldCallHandler()&&(D[V.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${V.route.id}`)})}for(let[V,q]of Object.entries(D))if(wv(q)){let Y=q.result;G[V]={type:"redirect",response:xv(Y,j,V,E,u)}}else G[V]=await gv(q);return G}async function Ec(j,E,L,T){let D=qn(L,j,T,null),G=Promise.all(E.map(async q=>{if(q.matches&&q.match&&q.request&&q.controller){let X=(await qn(q.request,q.matches,T,q.key))[q.match.route.id];return{[q.key]:X}}else return Promise.resolve({[q.key]:{type:"error",error:yt(404,{pathname:q.path})}})})),J=await D,V=(await G).reduce((q,Y)=>Object.assign(q,Y),{});return{loaderResults:J,fetcherResults:V}}function Nl(){pe=!0,we.forEach((j,E)=>{B.has(E)&&I.add(E),Zt(E)})}function Yt(j,E,L={}){S.fetchers.set(j,E),Ge({fetchers:new Map(S.fetchers)},{flushSync:(L&&L.flushSync)===!0})}function Kt(j,E,L,T={}){let D=yr(S.matches,E);Pl(j),Ge({errors:{[D.route.id]:L},fetchers:new Map(S.fetchers)},{flushSync:(T&&T.flushSync)===!0})}function Cc(j){return Ie.set(j,(Ie.get(j)||0)+1),ye.has(j)&&ye.delete(j),S.fetchers.get(j)||av}function Ff(j,E){Zt(j,E==null?void 0:E.reason),Yt(j,Xt(null))}function Pl(j){let E=S.fetchers.get(j);B.has(j)&&!(E&&E.state==="loading"&&se.has(j))&&Zt(j),we.delete(j),se.delete(j),xe.delete(j),ye.delete(j),I.delete(j),S.fetchers.delete(j)}function Df(j){let E=(Ie.get(j)||0)-1;E<=0?(Ie.delete(j),ye.add(j)):Ie.set(j,E),Ge({fetchers:new Map(S.fetchers)})}function Zt(j,E){let L=B.get(j);L&&(L.abort(E),B.delete(j))}function kc(j){for(let E of j){let L=Cc(E),T=Xt(L.data);S.fetchers.set(E,T)}}function Rc(){let j=[],E=!1;for(let L of xe){let T=S.fetchers.get(L);ae(T,`Expected fetcher: ${L}`),T.state==="loading"&&(xe.delete(L),j.push(L),E=!0)}return kc(j),E}function Lc(j){let E=[];for(let[L,T]of se)if(T<j){let D=S.fetchers.get(L);ae(D,`Expected fetcher: ${L}`),D.state==="loading"&&(Zt(L),se.delete(L),E.push(L))}return kc(E),E.length>0}function zf(j,E){let L=S.blockers.get(j)||Zn;return Ue.get(j)!==E&&Ue.set(j,E),L}function Ac(j){S.blockers.delete(j),Ue.delete(j)}function Wa(j,E){let L=S.blockers.get(j)||Zn;ae(L.state==="unblocked"&&E.state==="blocked"||L.state==="blocked"&&E.state==="blocked"||L.state==="blocked"&&E.state==="proceeding"||L.state==="blocked"&&E.state==="unblocked"||L.state==="proceeding"&&E.state==="unblocked",`Invalid blocker state transition: ${L.state} -> ${E.state}`);let T=new Map(S.blockers);T.set(j,E),Ge({blockers:T})}function Mc({currentLocation:j,nextLocation:E,historyAction:L}){if(Ue.size===0)return;Ue.size>1&&Te(!1,"A router only supports one blocker at a time");let T=Array.from(Ue.entries()),[D,G]=T[T.length-1],J=S.blockers.get(D);if(!(J&&J.state==="proceeding")&&G({currentLocation:j,nextLocation:E,historyAction:L}))return D}function Tl(j){let E=yt(404,{pathname:j}),L=c||o,{matches:T,route:D}=gi(L);return{notFoundMatches:T,route:D,error:E}}function Bf(j,E,L){if(g=j,b=E,v=L||null,!h&&S.navigation===us){h=!0;let T=Nc(S.location,S.matches);T!=null&&Ge({restoreScrollPosition:T})}return()=>{g=null,b=null,v=null}}function _c(j,E){return v&&v(j,E.map(T=>Mx(T,S.loaderData)))||j.key}function qf(j,E){if(g&&b){let L=_c(j,E);g[L]=b()}}function Nc(j,E){if(g){let L=_c(j,E),T=g[L];if(typeof T=="number")return T}return null}function Ja(j,E,L){if(e.patchRoutesOnNavigation)if(j){if(Object.keys(j[0].params).length>0)return{active:!0,matches:la(E,L,u,!0)}}else return{active:!0,matches:la(E,L,u,!0)||[]};return{active:!1,matches:null}}async function Qa(j,E,L,T){if(!e.patchRoutesOnNavigation)return{type:"success",matches:j};let D=j;for(;;){let G=c==null,J=c||o,V=s;try{await e.patchRoutesOnNavigation({signal:L,path:E,matches:D,fetcherKey:T,patch:(X,W)=>{L.aborted||td(X,W,J,V,l,!1)}})}catch(X){return{type:"error",error:X,partialMatches:D}}finally{G&&!L.aborted&&(o=[...o])}if(L.aborted)return{type:"aborted"};let q=vr(J,E,u),Y=null;if(q){if(Object.keys(q[0].params).length===0)return{type:"success",matches:q};if(Y=la(J,E,u,!0),!(Y&&D.length<Y.length&&Pc(D,Y.slice(0,D.length))))return{type:"success",matches:q}}if(Y||(Y=la(J,E,u,!0)),!Y||Pc(D,Y))return{type:"success",matches:null};D=Y}}function Pc(j,E){return j.length===E.length&&j.every((L,T)=>L.route.id===E[T].route.id)}function Uf(j){s={},c=Oa(j,l,void 0,s)}function $f(j,E,L=!1){let T=c==null;td(j,E,c||o,s,l,L),T&&(o=[...o],Ge({}))}return P={get basename(){return u},get future(){return d},get state(){return S},get routes(){return o},get window(){return t},initialize:Rf,subscribe:Af,enableScrollRestoration:Bf,navigate:Sc,fetch:Tf,revalidate:Mf,createHref:j=>e.history.createHref(j),encodeLocation:j=>e.history.encodeLocation(j),getFetcher:Cc,resetFetcher:Ff,deleteFetcher:Df,dispose:Lf,getBlocker:zf,deleteBlocker:Ac,patchRoutes:$f,_internalFetchControllers:B,_internalSetRoutes:Uf,_internalSetStateDoNotUseOrYouWillBreakYourApp(j){Ge(j)}},e.unstable_instrumentations&&(P=Qx(P,e.unstable_instrumentations.map(j=>j.router).filter(Boolean))),P}function sv(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function po(e,t,n,a,i,l){let s,o;if(i){s=[];for(let u of t)if(s.push(u),u.route.id===i){o=u;break}}else s=t,o=t[t.length-1];let c=kl(a||".",dc(s),kt(e.pathname,n)||e.pathname,l==="path");if(a==null&&(c.search=e.search,c.hash=e.hash),(a==null||a===""||a===".")&&o){let u=fc(c.search);if(o.route.index&&!u)c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index";else if(!o.route.index&&u){let m=new URLSearchParams(c.search),d=m.getAll("index");m.delete("index"),d.filter(y=>y).forEach(y=>m.append("index",y));let f=m.toString();c.search=f?`?${f}`:""}}return n!=="/"&&(c.pathname=$x({basename:n,pathname:c.pathname})),Gt(c)}function Xu(e,t,n){if(!n||!sv(n))return{path:t};if(n.formMethod&&!kv(n.formMethod))return{path:t,error:yt(405,{method:n.formMethod})};let a=()=>({path:t,error:yt(400,{type:"invalid-body"})}),l=(n.formMethod||"get").toUpperCase(),s=af(t);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!Ye(l))return a();let d=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((f,[y,g])=>`${f}${y}=${g}
`,""):String(n.body);return{path:t,submission:{formMethod:l,formAction:s,formEncType:n.formEncType,formData:void 0,json:void 0,text:d}}}else if(n.formEncType==="application/json"){if(!Ye(l))return a();try{let d=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:t,submission:{formMethod:l,formAction:s,formEncType:n.formEncType,formData:void 0,json:d,text:void 0}}}catch{return a()}}}ae(typeof FormData=="function","FormData is not available in this environment");let o,c;if(n.formData)o=fo(n.formData),c=n.formData;else if(n.body instanceof FormData)o=fo(n.body),c=n.body;else if(n.body instanceof URLSearchParams)o=n.body,c=ld(o);else if(n.body==null)o=new URLSearchParams,c=new FormData;else try{o=new URLSearchParams(n.body),c=ld(o)}catch{return a()}let u={formMethod:l,formAction:s,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Ye(u.formMethod))return{path:t,submission:u};let m=Wt(t);return e&&m.search&&fc(m.search)&&o.append("index",""),m.search=`?${o}`,{path:Gt(m),submission:u}}function ed(e,t,n,a,i,l,s,o,c,u,m,d,f,y,g,v,b,h,p,x,R){var ce;let M=x?pt(x[1])?x[1].error:x[1].data:void 0,N=i.createURL(l.location),P=i.createURL(c),S;if(m&&l.errors){let le=Object.keys(l.errors)[0];S=s.findIndex(pe=>pe.route.id===le)}else if(x&&pt(x[1])){let le=x[0];S=s.findIndex(pe=>pe.route.id===le)-1}let H=x?x[1].statusCode:void 0,z=H&&H>=400,re={currentUrl:N,currentParams:((ce=l.matches[0])==null?void 0:ce.params)||{},nextUrl:P,nextParams:s[0].params,...o,actionResult:M,actionStatus:H},K=$a(s),Ce=s.map((le,pe)=>{let{route:I}=le,B=null;if(S!=null&&pe>S)B=!1;else if(I.lazy)B=!0;else if(!pc(I))B=!1;else if(m){let{shouldLoad:xe}=Zm(I,l.loaderData,l.errors);B=xe}else ov(l.loaderData,l.matches[pe],le)&&(B=!0);if(B!==null)return mo(n,a,e,K,le,u,t,B);let U=!1;typeof R=="boolean"?U=R:z?U=!1:(d||N.pathname+N.search===P.pathname+P.search||N.search!==P.search||cv(l.matches[pe],le))&&(U=!0);let te={...re,defaultShouldRevalidate:U},se=ga(le,te);return mo(n,a,e,K,le,u,t,se,te,R)}),Z=[];return g.forEach((le,pe)=>{if(m||!s.some(Ie=>Ie.route.id===le.routeId)||y.has(pe))return;let I=l.fetchers.get(pe),B=I&&I.state!=="idle"&&I.data===void 0,U=vr(b,le.path,h);if(!U){if(p&&B)return;Z.push({key:pe,routeId:le.routeId,path:le.path,matches:null,match:null,request:null,controller:null});return}if(v.has(pe))return;let te=Ni(U,le.path),se=new AbortController,xe=cn(i,le.path,se.signal),we=null;if(f.has(pe))f.delete(pe),we=An(n,a,xe,U,te,u,t);else if(B)d&&(we=An(n,a,xe,U,te,u,t));else{let Ie;typeof R=="boolean"?Ie=R:z?Ie=!1:Ie=d;let ye={...re,defaultShouldRevalidate:Ie};ga(te,ye)&&(we=An(n,a,xe,U,te,u,t,ye))}we&&Z.push({key:pe,routeId:le.routeId,path:le.path,matches:we,match:te,request:xe,controller:se})}),{dsMatches:Ce,revalidatingFetchers:Z}}function pc(e){return e.loader!=null||e.middleware!=null&&e.middleware.length>0}function Zm(e,t,n){if(e.lazy)return{shouldLoad:!0,renderFallback:!0};if(!pc(e))return{shouldLoad:!1,renderFallback:!1};let a=t!=null&&e.id in t,i=n!=null&&n[e.id]!==void 0;if(!a&&i)return{shouldLoad:!1,renderFallback:!1};if(typeof e.loader=="function"&&e.loader.hydrate===!0)return{shouldLoad:!0,renderFallback:!a};let l=!a&&!i;return{shouldLoad:l,renderFallback:l}}function ov(e,t,n){let a=!t||n.route.id!==t.route.id,i=!e.hasOwnProperty(n.route.id);return a||i}function cv(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function ga(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function td(e,t,n,a,i,l){let s;if(e){let u=a[e];ae(u,`No route found to patch children into: routeId = ${e}`),u.children||(u.children=[]),s=u.children}else s=n;let o=[],c=[];if(t.forEach(u=>{let m=s.find(d=>Xm(u,d));m?c.push({existingRoute:m,newRoute:u}):o.push(u)}),o.length>0){let u=Oa(o,i,[e||"_","patch",String((s==null?void 0:s.length)||"0")],a);s.push(...u)}if(l&&c.length>0)for(let u=0;u<c.length;u++){let{existingRoute:m,newRoute:d}=c[u],f=m,[y]=Oa([d],i,[],{},!0);Object.assign(f,{element:y.element?y.element:f.element,errorElement:y.errorElement?y.errorElement:f.errorElement,hydrateFallbackElement:y.hydrateFallbackElement?y.hydrateFallbackElement:f.hydrateFallbackElement})}}function Xm(e,t){var n;return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:((n=e.children)==null?void 0:n.every((a,i)=>{var l;return(l=t.children)==null?void 0:l.some(s=>Xm(a,s))}))??!1:!1}var rd=new WeakMap,ef=({key:e,route:t,manifest:n,mapRouteProperties:a})=>{let i=n[t.id];if(ae(i,"No route found in manifest"),!i.lazy||typeof i.lazy!="object")return;let l=i.lazy[e];if(!l)return;let s=rd.get(i);s||(s={},rd.set(i,s));let o=s[e];if(o)return o;let c=(async()=>{let u=kx(e),d=i[e]!==void 0&&e!=="hasErrorBoundary";if(u)Te(!u,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),s[e]=Promise.resolve();else if(d)Te(!1,`Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let f=await l();f!=null&&(Object.assign(i,{[e]:f}),Object.assign(i,a(i)))}typeof i.lazy=="object"&&(i.lazy[e]=void 0,Object.values(i.lazy).every(f=>f===void 0)&&(i.lazy=void 0))})();return s[e]=c,c},nd=new WeakMap;function uv(e,t,n,a,i){let l=n[e.id];if(ae(l,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let m=nd.get(l);if(m)return{lazyRoutePromise:m,lazyHandlerPromise:m};let d=(async()=>{ae(typeof e.lazy=="function","No lazy route function found");let f=await e.lazy(),y={};for(let g in f){let v=f[g];if(v===void 0)continue;let b=Lx(g),p=l[g]!==void 0&&g!=="hasErrorBoundary";b?Te(!b,"Route property "+g+" is not a supported property to be returned from a lazy route function. This property will be ignored."):p?Te(!p,`Route "${l.id}" has a static property "${g}" defined but its lazy function is also returning a value for this property. The lazy route property "${g}" will be ignored.`):y[g]=v}Object.assign(l,y),Object.assign(l,{...a(l),lazy:void 0})})();return nd.set(l,d),d.catch(()=>{}),{lazyRoutePromise:d,lazyHandlerPromise:d}}let s=Object.keys(e.lazy),o=[],c;for(let m of s){if(i&&i.includes(m))continue;let d=ef({key:m,route:e,manifest:n,mapRouteProperties:a});d&&(o.push(d),m===t&&(c=d))}let u=o.length>0?Promise.all(o).then(()=>{}):void 0;return u==null||u.catch(()=>{}),c==null||c.catch(()=>{}),{lazyRoutePromise:u,lazyHandlerPromise:c}}async function ad(e){let t=e.matches.filter(i=>i.shouldLoad),n={};return(await Promise.all(t.map(i=>i.resolve()))).forEach((i,l)=>{n[t[l].route.id]=i}),n}async function dv(e){return e.matches.some(t=>t.route.middleware)?tf(e,()=>ad(e)):ad(e)}function tf(e,t){return pv(e,t,a=>{if(Cv(a))throw a;return a},jv,n);function n(a,i,l){if(l)return Promise.resolve(Object.assign(l.value,{[i]:{type:"error",result:a}}));{let{matches:s}=e,o=Math.min(Math.max(s.findIndex(u=>u.route.id===i),0),Math.max(s.findIndex(u=>u.shouldCallHandler()),0)),c=yr(s,s[o].route.id).route.id;return Promise.resolve({[c]:{type:"error",result:a}})}}}async function pv(e,t,n,a,i){let{matches:l,request:s,params:o,context:c,unstable_pattern:u}=e,m=l.flatMap(f=>f.route.middleware?f.route.middleware.map(y=>[f.route.id,y]):[]);return await rf({request:s,params:o,context:c,unstable_pattern:u},m,t,n,a,i)}async function rf(e,t,n,a,i,l,s=0){let{request:o}=e;if(o.signal.aborted)throw o.signal.reason??new Error(`Request aborted: ${o.method} ${o.url}`);let c=t[s];if(!c)return await n();let[u,m]=c,d,f=async()=>{if(d)throw new Error("You may only call `next()` once per middleware");try{return d={value:await rf(e,t,n,a,i,l,s+1)},d.value}catch(y){return d={value:await l(y,u,d)},d.value}};try{let y=await m(e,f),g=y!=null?a(y):void 0;return i(g)?g:d?g??d.value:(d={value:await f()},d.value)}catch(y){return await l(y,u,d)}}function nf(e,t,n,a,i){let l=ef({key:"middleware",route:a.route,manifest:t,mapRouteProperties:e}),s=uv(a.route,Ye(n.method)?"action":"loader",t,e,i);return{middleware:l,route:s.lazyRoutePromise,handler:s.lazyHandlerPromise}}function mo(e,t,n,a,i,l,s,o,c=null,u){let m=!1,d=nf(e,t,n,i,l);return{...i,_lazyPromises:d,shouldLoad:o,shouldRevalidateArgs:c,shouldCallHandler(f){return m=!0,c?typeof u=="boolean"?ga(i,{...c,defaultShouldRevalidate:u}):typeof f=="boolean"?ga(i,{...c,defaultShouldRevalidate:f}):ga(i,c):o},resolve(f){let{lazy:y,loader:g,middleware:v}=i.route,b=m||o||f&&!Ye(n.method)&&(y||g),h=v&&v.length>0&&!g&&!y;return b&&(Ye(n.method)||!h)?fv({request:n,unstable_pattern:a,match:i,lazyHandlerPromise:d==null?void 0:d.handler,lazyRoutePromise:d==null?void 0:d.route,handlerOverride:f,scopedContext:s}):Promise.resolve({type:"data",result:void 0})}}}function An(e,t,n,a,i,l,s,o=null){return a.map(c=>c.route.id!==i.route.id?{...c,shouldLoad:!1,shouldRevalidateArgs:o,shouldCallHandler:()=>!1,_lazyPromises:nf(e,t,n,c,l),resolve:()=>Promise.resolve({type:"data",result:void 0})}:mo(e,t,n,$a(a),c,l,s,!0,o))}async function mv(e,t,n,a,i,l){n.some(u=>{var m;return(m=u._lazyPromises)==null?void 0:m.middleware})&&await Promise.all(n.map(u=>{var m;return(m=u._lazyPromises)==null?void 0:m.middleware}));let s={request:t,unstable_pattern:$a(n),params:n[0].params,context:i,matches:n},c=await e({...s,fetcherKey:a,runClientMiddleware:u=>{let m=s;return tf(m,()=>u({...m,fetcherKey:a,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(n.flatMap(u=>{var m,d;return[(m=u._lazyPromises)==null?void 0:m.handler,(d=u._lazyPromises)==null?void 0:d.route]}))}catch{}return c}async function fv({request:e,unstable_pattern:t,match:n,lazyHandlerPromise:a,lazyRoutePromise:i,handlerOverride:l,scopedContext:s}){let o,c,u=Ye(e.method),m=u?"action":"loader",d=f=>{let y,g=new Promise((h,p)=>y=p);c=()=>y(),e.signal.addEventListener("abort",c);let v=h=>typeof f!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${m}" [routeId: ${n.route.id}]`)):f({request:e,unstable_pattern:t,params:n.params,context:s},...h!==void 0?[h]:[]),b=(async()=>{try{return{type:"data",result:await(l?l(p=>v(p)):v())}}catch(h){return{type:"error",result:h}}})();return Promise.race([b,g])};try{let f=u?n.route.action:n.route.loader;if(a||i)if(f){let y,[g]=await Promise.all([d(f).catch(v=>{y=v}),a,i]);if(y!==void 0)throw y;o=g}else{await a;let y=u?n.route.action:n.route.loader;if(y)[o]=await Promise.all([d(y),i]);else if(m==="action"){let g=new URL(e.url),v=g.pathname+g.search;throw yt(405,{method:e.method,pathname:v,routeId:n.route.id})}else return{type:"data",result:void 0}}else if(f)o=await d(f);else{let y=new URL(e.url),g=y.pathname+y.search;throw yt(404,{pathname:g})}}catch(f){return{type:"error",result:f}}finally{c&&e.signal.removeEventListener("abort",c)}return o}async function hv(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}async function gv(e){var a,i,l,s,o;let{result:t,type:n}=e;if(mc(t)){let c;try{c=await hv(t)}catch(u){return{type:"error",error:u}}return n==="error"?{type:"error",error:new Ua(t.status,t.statusText,c),statusCode:t.status,headers:t.headers}:{type:"data",data:c,statusCode:t.status,headers:t.headers}}return n==="error"?ud(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:(a=t.init)==null?void 0:a.status,headers:(i=t.init)!=null&&i.headers?new Headers(t.init.headers):void 0}:{type:"error",error:bv(t),statusCode:Ia(t)?t.status:void 0,headers:(l=t.init)!=null&&l.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:Ia(t)?t.status:void 0}:ud(t)?{type:"data",data:t.data,statusCode:(s=t.init)==null?void 0:s.status,headers:(o=t.init)!=null&&o.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function xv(e,t,n,a,i){let l=e.headers.get("Location");if(ae(l,"Redirects returned/thrown from loaders/actions must have a Location header"),!uc(l)){let s=a.slice(0,a.findIndex(o=>o.route.id===n)+1);l=po(new URL(t.url),s,i,l),e.headers.set("Location",l)}return e}function id(e,t,n,a){let i=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(uc(e)){let l=e,s=l.startsWith("//")?new URL(t.protocol+l):new URL(l);if(i.includes(s.protocol))throw new Error("Invalid redirect location");let o=kt(s.pathname,n)!=null;if(s.origin===t.origin&&o)return s.pathname+s.search+s.hash}try{let l=a.createURL(e);if(i.includes(l.protocol))throw new Error("Invalid redirect location")}catch{}return e}function cn(e,t,n,a){let i=e.createURL(af(t)).toString(),l={signal:n};if(a&&Ye(a.formMethod)){let{formMethod:s,formEncType:o}=a;l.method=s.toUpperCase(),o==="application/json"?(l.headers=new Headers({"Content-Type":o}),l.body=JSON.stringify(a.json)):o==="text/plain"?l.body=a.text:o==="application/x-www-form-urlencoded"&&a.formData?l.body=fo(a.formData):l.body=a.formData}return new Request(i,l)}function fo(e){let t=new URLSearchParams;for(let[n,a]of e.entries())t.append(n,typeof a=="string"?a:a.name);return t}function ld(e){let t=new FormData;for(let[n,a]of e.entries())t.append(n,a);return t}function vv(e,t,n,a=!1,i=!1){let l={},s=null,o,c=!1,u={},m=n&&pt(n[1])?n[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in t))return;let f=d.route.id,y=t[f];if(ae(!Gr(y),"Cannot handle redirect results in processLoaderData"),pt(y)){let g=y.error;if(m!==void 0&&(g=m,m=void 0),s=s||{},i)s[f]=g;else{let v=yr(e,f);s[v.route.id]==null&&(s[v.route.id]=g)}a||(l[f]=Km),c||(c=!0,o=Ia(y.error)?y.error.status:500),y.headers&&(u[f]=y.headers)}else l[f]=y.data,y.statusCode&&y.statusCode!==200&&!c&&(o=y.statusCode),y.headers&&(u[f]=y.headers)}),m!==void 0&&n&&(s={[n[0]]:m},n[2]&&(l[n[2]]=void 0)),{loaderData:l,errors:s,statusCode:o||200,loaderHeaders:u}}function sd(e,t,n,a,i,l){let{loaderData:s,errors:o}=vv(t,n,a);return i.filter(c=>!c.matches||c.matches.some(u=>u.shouldLoad)).forEach(c=>{let{key:u,match:m,controller:d}=c;if(d&&d.signal.aborted)return;let f=l[u];if(ae(f,"Did not find corresponding fetcher result"),pt(f)){let y=yr(e.matches,m==null?void 0:m.route.id);o&&o[y.route.id]||(o={...o,[y.route.id]:f.error}),e.fetchers.delete(u)}else if(Gr(f))ae(!1,"Unhandled fetcher revalidation redirect");else{let y=Xt(f.data);e.fetchers.set(u,y)}}),{loaderData:s,errors:o}}function od(e,t,n,a){let i=Object.entries(t).filter(([,l])=>l!==Km).reduce((l,[s,o])=>(l[s]=o,l),{});for(let l of n){let s=l.route.id;if(!t.hasOwnProperty(s)&&e.hasOwnProperty(s)&&l.route.loader&&(i[s]=e[s]),a&&a.hasOwnProperty(s))break}return i}function cd(e){return e?pt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function yr(e,t){return(t?e.slice(0,e.findIndex(a=>a.route.id===t)+1):[...e]).reverse().find(a=>a.route.hasErrorBoundary===!0)||e[0]}function gi(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function yt(e,{pathname:t,routeId:n,method:a,type:i,message:l}={}){let s="Unknown Server Error",o="Unknown @remix-run/router error";return e===400?(s="Bad Request",a&&t&&n?o=`You made a ${a} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:i==="invalid-body"&&(o="Unable to encode submission body")):e===403?(s="Forbidden",o=`Route "${n}" does not match URL "${t}"`):e===404?(s="Not Found",o=`No route matches URL "${t}"`):e===405&&(s="Method Not Allowed",a&&t&&n?o=`You made a ${a.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:a&&(o=`Invalid request method "${a.toUpperCase()}"`)),new Ua(e||500,s,new Error(o),!0)}function xi(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[a,i]=t[n];if(Gr(i))return{key:a,result:i}}}function af(e){let t=typeof e=="string"?Wt(e):e;return Gt({...t,hash:""})}function yv(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function bv(e){var t,n;return new Ua(((t=e.init)==null?void 0:t.status)??500,((n=e.init)==null?void 0:n.statusText)??"Internal Server Error",e.data)}function jv(e){return e!=null&&typeof e=="object"&&Object.entries(e).every(([t,n])=>typeof t=="string"&&Sv(n))}function Sv(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function wv(e){return mc(e.result)&&Qm.has(e.result.status)}function pt(e){return e.type==="error"}function Gr(e){return(e&&e.type)==="redirect"}function ud(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function mc(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Ev(e){return Qm.has(e)}function Cv(e){return mc(e)&&Ev(e.status)&&e.headers.has("Location")}function kv(e){return rv.has(e.toUpperCase())}function Ye(e){return ev.has(e.toUpperCase())}function fc(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Ni(e,t){let n=typeof t=="string"?Wt(t).search:t.search;if(e[e.length-1].route.index&&fc(n||""))return e[e.length-1];let a=Hm(e);return a[a.length-1]}function dd(e){let{formMethod:t,formAction:n,formEncType:a,text:i,formData:l,json:s}=e;if(!(!t||!n||!a)){if(i!=null)return{formMethod:t,formAction:n,formEncType:a,formData:void 0,json:void 0,text:i};if(l!=null)return{formMethod:t,formAction:n,formEncType:a,formData:l,json:void 0,text:void 0};if(s!==void 0)return{formMethod:t,formAction:n,formEncType:a,formData:void 0,json:s,text:void 0}}}function ds(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Rv(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Xn(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Lv(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Xt(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Av(e,t){try{let n=e.sessionStorage.getItem(Ym);if(n){let a=JSON.parse(n);for(let[i,l]of Object.entries(a||{}))l&&Array.isArray(l)&&t.set(i,new Set(l||[]))}}catch{}}function Mv(e,t){if(t.size>0){let n={};for(let[a,i]of t)n[a]=[...i];try{e.sessionStorage.setItem(Ym,JSON.stringify(n))}catch(a){Te(!1,`Failed to save applied view transitions in sessionStorage (${a}).`)}}}function pd(){let e,t,n=new Promise((a,i)=>{e=async l=>{a(l);try{await n}catch{}},t=async l=>{i(l);try{await n}catch{}}});return{promise:n,resolve:e,reject:t}}var rn=C.createContext(null);rn.displayName="DataRouter";var Ha=C.createContext(null);Ha.displayName="DataRouterState";var lf=C.createContext(!1);function _v(){return C.useContext(lf)}var hc=C.createContext({isTransitioning:!1});hc.displayName="ViewTransition";var sf=C.createContext(new Map);sf.displayName="Fetchers";var Nv=C.createContext(null);Nv.displayName="Await";var Rt=C.createContext(null);Rt.displayName="Navigation";var Rl=C.createContext(null);Rl.displayName="Location";var Jt=C.createContext({outlet:null,matches:[],isDataRoute:!1});Jt.displayName="Route";var gc=C.createContext(null);gc.displayName="RouteError";var of="REACT_ROUTER_ERROR",Pv="REDIRECT",Tv="ROUTE_ERROR_RESPONSE";function Ov(e){if(e.startsWith(`${of}:${Pv}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Iv(e){if(e.startsWith(`${of}:${Tv}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Ua(t.status,t.statusText,t.data)}catch{}}function Fv(e,{relative:t}={}){ae(Va(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=C.useContext(Rt),{hash:i,pathname:l,search:s}=Ga(e,{relative:t}),o=l;return n!=="/"&&(o=l==="/"?n:It([n,l])),a.createHref({pathname:o,search:s,hash:i})}function Va(){return C.useContext(Rl)!=null}function Qt(){return ae(Va(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Rl).location}var cf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function uf(e){C.useContext(Rt).static||C.useLayoutEffect(e)}function Dv(){let{isDataRoute:e}=C.useContext(Jt);return e?Xv():zv()}function zv(){ae(Va(),"useNavigate() may be used only in the context of a <Router> component.");let e=C.useContext(rn),{basename:t,navigator:n}=C.useContext(Rt),{matches:a}=C.useContext(Jt),{pathname:i}=Qt(),l=JSON.stringify(dc(a)),s=C.useRef(!1);return uf(()=>{s.current=!0}),C.useCallback((c,u={})=>{if(Te(s.current,cf),!s.current)return;if(typeof c=="number"){n.go(c);return}let m=kl(c,JSON.parse(l),i,u.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:It([t,m.pathname])),(u.replace?n.replace:n.push)(m,u.state,u)},[t,n,l,i,e])}var Bv=C.createContext(null);function qv(e){let t=C.useContext(Jt).outlet;return C.useMemo(()=>t&&C.createElement(Bv.Provider,{value:e},t),[t,e])}function Ga(e,{relative:t}={}){let{matches:n}=C.useContext(Jt),{pathname:a}=Qt(),i=JSON.stringify(dc(n));return C.useMemo(()=>kl(e,JSON.parse(i),a,t==="path"),[e,i,a,t])}function Uv(e,t,n){ae(Va(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=C.useContext(Rt),{matches:i}=C.useContext(Jt),l=i[i.length-1],s=l?l.params:{},o=l?l.pathname:"/",c=l?l.pathnameBase:"/",u=l&&l.route;{let b=u&&u.path||"";pf(o,!u||b.endsWith("*")||b.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${b}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${b}"> to <Route path="${b==="/"?"*":`${b}/*`}">.`)}let m=Qt(),d;d=m;let f=d.pathname||"/",y=f;if(c!=="/"){let b=c.replace(/^\//,"").split("/");y="/"+f.replace(/^\//,"").split("/").slice(b.length).join("/")}let g=vr(e,{pathname:y});return Te(u||g!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),Te(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Wv(g&&g.map(b=>Object.assign({},b,{params:Object.assign({},s,b.params),pathname:It([c,a.encodeLocation?a.encodeLocation(b.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:It([c,a.encodeLocation?a.encodeLocation(b.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:b.pathnameBase])})),i,n)}function $v(){let e=Zv(),t=Ia(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:l},"ErrorBoundary")," or"," ",C.createElement("code",{style:l},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,s)}var Hv=C.createElement($v,null),df=class extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=Iv(e.digest);n&&(e=n)}let t=e!==void 0?C.createElement(Jt.Provider,{value:this.props.routeContext},C.createElement(gc.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?C.createElement(Vv,{error:e},t):t}};df.contextType=lf;var ps=new WeakMap;function Vv({children:e,error:t}){let{basename:n}=C.useContext(Rt);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let a=Ov(t.digest);if(a){let i=ps.get(t);if(i)throw i;let l=Gm(a.location,n);if(Vm&&!ps.get(t))if(l.isExternal||a.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const s=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:a.replace}));throw ps.set(t,s),s}return C.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return e}function Gv({routeContext:e,match:t,children:n}){let a=C.useContext(rn);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),C.createElement(Jt.Provider,{value:e},n)}function Wv(e,t=[],n){let a=n==null?void 0:n.state;if(e==null){if(!a)return null;if(a.errors)e=a.matches;else if(t.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let i=e,l=a==null?void 0:a.errors;if(l!=null){let m=i.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);ae(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),i=i.slice(0,Math.min(i.length,m+1))}let s=!1,o=-1;if(n&&a){s=a.renderFallback;for(let m=0;m<i.length;m++){let d=i[m];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(o=m),d.route.id){let{loaderData:f,errors:y}=a,g=d.route.loader&&!f.hasOwnProperty(d.route.id)&&(!y||y[d.route.id]===void 0);if(d.route.lazy||g){n.isStatic&&(s=!0),o>=0?i=i.slice(0,o+1):i=[i[0]];break}}}}let c=n==null?void 0:n.onError,u=a&&c?(m,d)=>{var f,y;c(m,{location:a.location,params:((y=(f=a.matches)==null?void 0:f[0])==null?void 0:y.params)??{},unstable_pattern:$a(a.matches),errorInfo:d})}:void 0;return i.reduceRight((m,d,f)=>{let y,g=!1,v=null,b=null;a&&(y=l&&d.route.id?l[d.route.id]:void 0,v=d.route.errorElement||Hv,s&&(o<0&&f===0?(pf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),g=!0,b=null):o===f&&(g=!0,b=d.route.hydrateFallbackElement||null)));let h=t.concat(i.slice(0,f+1)),p=()=>{let x;return y?x=v:g?x=b:d.route.Component?x=C.createElement(d.route.Component,null):d.route.element?x=d.route.element:x=m,C.createElement(Gv,{match:d,routeContext:{outlet:m,matches:h,isDataRoute:a!=null},children:x})};return a&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?C.createElement(df,{location:a.location,revalidation:a.revalidation,component:v,error:y,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:u}):p()},null)}function xc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jv(e){let t=C.useContext(rn);return ae(t,xc(e)),t}function Qv(e){let t=C.useContext(Ha);return ae(t,xc(e)),t}function Yv(e){let t=C.useContext(Jt);return ae(t,xc(e)),t}function vc(e){let t=Yv(e),n=t.matches[t.matches.length-1];return ae(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Kv(){return vc("useRouteId")}function Zv(){var a;let e=C.useContext(gc),t=Qv("useRouteError"),n=vc("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[n]}function Xv(){let{router:e}=Jv("useNavigate"),t=vc("useNavigate"),n=C.useRef(!1);return uf(()=>{n.current=!0}),C.useCallback(async(i,l={})=>{Te(n.current,cf),n.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:t,...l}))},[e,t])}var md={};function pf(e,t,n){!t&&!md[e]&&(md[e]=!0,Te(!1,n))}var fd={};function hd(e,t){!e&&!fd[t]&&(fd[t]=!0,console.warn(t))}var ey="useOptimistic",gd=ch[ey],ty=()=>{};function ry(e){return gd?gd(e):[e,ty]}function ny(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&Te(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:C.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&Te(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:C.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&Te(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:C.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}var ay=["HydrateFallback","hydrateFallbackElement"],iy=class{constructor(){this.status="pending",this.promise=new Promise((e,t)=>{this.resolve=n=>{this.status==="pending"&&(this.status="resolved",e(n))},this.reject=n=>{this.status==="pending"&&(this.status="rejected",t(n))}})}};function ly({router:e,flushSync:t,onError:n,unstable_useTransitions:a}){a=_v()||a;let[l,s]=C.useState(e.state),[o,c]=ry(l),[u,m]=C.useState(),[d,f]=C.useState({isTransitioning:!1}),[y,g]=C.useState(),[v,b]=C.useState(),[h,p]=C.useState(),x=C.useRef(new Map),R=C.useCallback((S,{deletedFetchers:H,newErrors:z,flushSync:re,viewTransitionOpts:K})=>{z&&n&&Object.values(z).forEach(Z=>{var ce;return n(Z,{location:S.location,params:((ce=S.matches[0])==null?void 0:ce.params)??{},unstable_pattern:$a(S.matches)})}),S.fetchers.forEach((Z,ce)=>{Z.data!==void 0&&x.current.set(ce,Z.data)}),H.forEach(Z=>x.current.delete(Z)),hd(re===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let Ce=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(hd(K==null||Ce,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!K||!Ce){t&&re?t(()=>s(S)):a===!1?s(S):C.startTransition(()=>{a===!0&&c(Z=>xd(Z,S)),s(S)});return}if(t&&re){t(()=>{v&&(y==null||y.resolve(),v.skipTransition()),f({isTransitioning:!0,flushSync:!0,currentLocation:K.currentLocation,nextLocation:K.nextLocation})});let Z=e.window.document.startViewTransition(()=>{t(()=>s(S))});Z.finished.finally(()=>{t(()=>{g(void 0),b(void 0),m(void 0),f({isTransitioning:!1})})}),t(()=>b(Z));return}v?(y==null||y.resolve(),v.skipTransition(),p({state:S,currentLocation:K.currentLocation,nextLocation:K.nextLocation})):(m(S),f({isTransitioning:!0,flushSync:!1,currentLocation:K.currentLocation,nextLocation:K.nextLocation}))},[e.window,t,v,y,a,c,n]);C.useLayoutEffect(()=>e.subscribe(R),[e,R]),C.useEffect(()=>{d.isTransitioning&&!d.flushSync&&g(new iy)},[d]),C.useEffect(()=>{if(y&&u&&e.window){let S=u,H=y.promise,z=e.window.document.startViewTransition(async()=>{a===!1?s(S):C.startTransition(()=>{a===!0&&c(re=>xd(re,S)),s(S)}),await H});z.finished.finally(()=>{g(void 0),b(void 0),m(void 0),f({isTransitioning:!1})}),b(z)}},[u,y,e.window,a,c]),C.useEffect(()=>{y&&u&&o.location.key===u.location.key&&y.resolve()},[y,v,o.location,u]),C.useEffect(()=>{!d.isTransitioning&&h&&(m(h.state),f({isTransitioning:!0,flushSync:!1,currentLocation:h.currentLocation,nextLocation:h.nextLocation}),p(void 0))},[d.isTransitioning,h]);let M=C.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:S=>e.navigate(S),push:(S,H,z)=>e.navigate(S,{state:H,preventScrollReset:z==null?void 0:z.preventScrollReset}),replace:(S,H,z)=>e.navigate(S,{replace:!0,state:H,preventScrollReset:z==null?void 0:z.preventScrollReset})}),[e]),N=e.basename||"/",P=C.useMemo(()=>({router:e,navigator:M,static:!1,basename:N,onError:n}),[e,M,N,n]);return C.createElement(C.Fragment,null,C.createElement(rn.Provider,{value:P},C.createElement(Ha.Provider,{value:o},C.createElement(sf.Provider,{value:x.current},C.createElement(hc.Provider,{value:d},C.createElement(uy,{basename:N,location:o.location,navigationType:o.historyAction,navigator:M,unstable_useTransitions:a},C.createElement(sy,{routes:e.routes,future:e.future,state:o,isStatic:!1,onError:n})))))),null)}function xd(e,t){return{...e,navigation:t.navigation.state!=="idle"?t.navigation:e.navigation,revalidation:t.revalidation!=="idle"?t.revalidation:e.revalidation,actionData:t.navigation.state!=="submitting"?t.actionData:e.actionData,fetchers:t.fetchers}}var sy=C.memo(oy);function oy({routes:e,future:t,state:n,isStatic:a,onError:i}){return Uv(e,void 0,{state:n,isStatic:a,onError:i})}function cy(e){return qv(e.context)}function uy({basename:e="/",children:t=null,location:n,navigationType:a="POP",navigator:i,static:l=!1,unstable_useTransitions:s}){ae(!Va(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),c=C.useMemo(()=>({basename:o,navigator:i,static:l,unstable_useTransitions:s,future:{}}),[o,i,l,s]);typeof n=="string"&&(n=Wt(n));let{pathname:u="/",search:m="",hash:d="",state:f=null,key:y="default",unstable_mask:g}=n,v=C.useMemo(()=>{let b=kt(u,o);return b==null?null:{location:{pathname:b,search:m,hash:d,state:f,key:y,unstable_mask:g},navigationType:a}},[o,u,m,d,f,y,a,g]);return Te(v!=null,`<Router basename="${o}"> is not able to match the URL "${u}${m}${d}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:C.createElement(Rt.Provider,{value:c},C.createElement(Rl.Provider,{children:t,value:v}))}var Pi="get",Ti="application/x-www-form-urlencoded";function Ll(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function dy(e){return Ll(e)&&e.tagName.toLowerCase()==="button"}function py(e){return Ll(e)&&e.tagName.toLowerCase()==="form"}function my(e){return Ll(e)&&e.tagName.toLowerCase()==="input"}function fy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function hy(e,t){return e.button===0&&(!t||t==="_self")&&!fy(e)}var vi=null;function gy(){if(vi===null)try{new FormData(document.createElement("form"),0),vi=!1}catch{vi=!0}return vi}var xy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ms(e){return e!=null&&!xy.has(e)?(Te(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ti}"`),null):e}function vy(e,t){let n,a,i,l,s;if(py(e)){let o=e.getAttribute("action");a=o?kt(o,t):null,n=e.getAttribute("method")||Pi,i=ms(e.getAttribute("enctype"))||Ti,l=new FormData(e)}else if(dy(e)||my(e)&&(e.type==="submit"||e.type==="image")){let o=e.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||o.getAttribute("action");if(a=c?kt(c,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||Pi,i=ms(e.getAttribute("formenctype"))||ms(o.getAttribute("enctype"))||Ti,l=new FormData(o,e),!gy()){let{name:u,type:m,value:d}=e;if(m==="image"){let f=u?`${u}.`:"";l.append(`${f}x`,"0"),l.append(`${f}y`,"0")}else u&&l.append(u,d)}}else{if(Ll(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Pi,a=null,i=Ti,s=e}return l&&i==="text/plain"&&(s=l,l=void 0),{action:a,method:n.toLowerCase(),encType:i,formData:l,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function yc(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function yy(e,t,n,a){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${a}`:i.pathname=`${i.pathname}.${a}`:i.pathname==="/"?i.pathname=`_root.${a}`:t&&kt(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${a}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${a}`,i}async function by(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jy(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Sy(e,t,n){let a=await Promise.all(e.map(async i=>{let l=t.routes[i.route.id];if(l){let s=await by(l,n);return s.links?s.links():[]}return[]}));return ky(a.flat(1).filter(jy).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function vd(e,t,n,a,i,l){let s=(c,u)=>n[u]?c.route.id!==n[u].route.id:!0,o=(c,u)=>{var m;return n[u].pathname!==c.pathname||((m=n[u].route.path)==null?void 0:m.endsWith("*"))&&n[u].params["*"]!==c.params["*"]};return l==="assets"?t.filter((c,u)=>s(c,u)||o(c,u)):l==="data"?t.filter((c,u)=>{var d;let m=a.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(s(c,u)||o(c,u))return!0;if(c.route.shouldRevalidate){let f=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function wy(e,t,{includeHydrateFallback:n}={}){return Ey(e.map(a=>{let i=t.routes[a.route.id];if(!i)return[];let l=[i.module];return i.clientActionModule&&(l=l.concat(i.clientActionModule)),i.clientLoaderModule&&(l=l.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(l=l.concat(i.hydrateFallbackModule)),i.imports&&(l=l.concat(i.imports)),l}).flat(1))}function Ey(e){return[...new Set(e)]}function Cy(e){let t={},n=Object.keys(e).sort();for(let a of n)t[a]=e[a];return t}function ky(e,t){let n=new Set;return new Set(t),e.reduce((a,i)=>{let l=JSON.stringify(Cy(i));return n.has(l)||(n.add(l),a.push({key:l,link:i})),a},[])}function mf(){let e=C.useContext(rn);return yc(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Ry(){let e=C.useContext(Ha);return yc(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var bc=C.createContext(void 0);bc.displayName="FrameworkContext";function ff(){let e=C.useContext(bc);return yc(e,"You must render this element inside a <HydratedRouter> element"),e}function Ly(e,t){let n=C.useContext(bc),[a,i]=C.useState(!1),[l,s]=C.useState(!1),{onFocus:o,onBlur:c,onMouseEnter:u,onMouseLeave:m,onTouchStart:d}=t,f=C.useRef(null);C.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let v=h=>{h.forEach(p=>{s(p.isIntersecting)})},b=new IntersectionObserver(v,{threshold:.5});return f.current&&b.observe(f.current),()=>{b.disconnect()}}},[e]),C.useEffect(()=>{if(a){let v=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(v)}}},[a]);let y=()=>{i(!0)},g=()=>{i(!1),s(!1)};return n?e!=="intent"?[l,f,{}]:[l,f,{onFocus:ea(o,y),onBlur:ea(c,g),onMouseEnter:ea(u,y),onMouseLeave:ea(m,g),onTouchStart:ea(d,y)}]:[!1,f,{}]}function ea(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Ay({page:e,...t}){let{router:n}=mf(),a=C.useMemo(()=>vr(n.routes,e,n.basename),[n.routes,e,n.basename]);return a?C.createElement(_y,{page:e,matches:a,...t}):null}function My(e){let{manifest:t,routeModules:n}=ff(),[a,i]=C.useState([]);return C.useEffect(()=>{let l=!1;return Sy(e,t,n).then(s=>{l||i(s)}),()=>{l=!0}},[e,t,n]),a}function _y({page:e,matches:t,...n}){let a=Qt(),{future:i,manifest:l,routeModules:s}=ff(),{basename:o}=mf(),{loaderData:c,matches:u}=Ry(),m=C.useMemo(()=>vd(e,t,u,l,a,"data"),[e,t,u,l,a]),d=C.useMemo(()=>vd(e,t,u,l,a,"assets"),[e,t,u,l,a]),f=C.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let v=new Set,b=!1;if(t.forEach(p=>{var R;let x=l.routes[p.route.id];!x||!x.hasLoader||(!m.some(M=>M.route.id===p.route.id)&&p.route.id in c&&((R=s[p.route.id])!=null&&R.shouldRevalidate)||x.hasClientLoader?b=!0:v.add(p.route.id))}),v.size===0)return[];let h=yy(e,o,i.unstable_trailingSlashAwareDataRequests,"data");return b&&v.size>0&&h.searchParams.set("_routes",t.filter(p=>v.has(p.route.id)).map(p=>p.route.id).join(",")),[h.pathname+h.search]},[o,i.unstable_trailingSlashAwareDataRequests,c,a,l,m,t,e,s]),y=C.useMemo(()=>wy(d,l),[d,l]),g=My(d);return C.createElement(C.Fragment,null,f.map(v=>C.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),y.map(v=>C.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),g.map(({key:v,link:b})=>C.createElement("link",{key:v,nonce:n.nonce,...b,crossOrigin:b.crossOrigin??n.crossOrigin})))}function Ny(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Py=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Py&&(window.__reactRouterVersion="7.13.1")}catch{}function Ty(e,t){return lv({basename:t==null?void 0:t.basename,getContext:t==null?void 0:t.getContext,future:t==null?void 0:t.future,history:Sx({window:t==null?void 0:t.window}),hydrationData:Oy(),routes:e,mapRouteProperties:ny,hydrationRouteProperties:ay,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window,unstable_instrumentations:t==null?void 0:t.unstable_instrumentations}).initialize()}function Oy(){let e=window==null?void 0:window.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:Iy(e.errors)}),e}function Iy(e){if(!e)return null;let t=Object.entries(e),n={};for(let[a,i]of t)if(i&&i.__type==="RouteErrorResponse")n[a]=new Ua(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let l=window[i.__subType];if(typeof l=="function")try{let s=new l(i.message);s.stack="",n[a]=s}catch{}}if(n[a]==null){let l=new Error(i.message);l.stack="",n[a]=l}}else n[a]=i;return n}var hf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Al=C.forwardRef(function({onClick:t,discover:n="render",prefetch:a="none",relative:i,reloadDocument:l,replace:s,unstable_mask:o,state:c,target:u,to:m,preventScrollReset:d,viewTransition:f,unstable_defaultShouldRevalidate:y,...g},v){let{basename:b,navigator:h,unstable_useTransitions:p}=C.useContext(Rt),x=typeof m=="string"&&hf.test(m),R=Gm(m,b);m=R.to;let M=Fv(m,{relative:i}),N=Qt(),P=null;if(o){let ce=kl(o,[],N.unstable_mask?N.unstable_mask.pathname:"/",!0);b!=="/"&&(ce.pathname=ce.pathname==="/"?b:It([b,ce.pathname])),P=h.createHref(ce)}let[S,H,z]=Ly(a,g),re=zy(m,{replace:s,unstable_mask:o,state:c,target:u,preventScrollReset:d,relative:i,viewTransition:f,unstable_defaultShouldRevalidate:y,unstable_useTransitions:p});function K(ce){t&&t(ce),ce.defaultPrevented||re(ce)}let Ce=!(R.isExternal||l),Z=C.createElement("a",{...g,...z,href:(Ce?P:void 0)||R.absoluteURL||M,onClick:Ce?K:t,ref:Ny(v,H),target:u,"data-discover":!x&&n==="render"?"true":void 0});return S&&!x?C.createElement(C.Fragment,null,Z,C.createElement(Ay,{page:M})):Z});Al.displayName="Link";var gf=C.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:a="",end:i=!1,style:l,to:s,viewTransition:o,children:c,...u},m){let d=Ga(s,{relative:u.relative}),f=Qt(),y=C.useContext(Ha),{navigator:g,basename:v}=C.useContext(Rt),b=y!=null&&Hy(d)&&o===!0,h=g.encodeLocation?g.encodeLocation(d).pathname:d.pathname,p=f.pathname,x=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(p=p.toLowerCase(),x=x?x.toLowerCase():null,h=h.toLowerCase()),x&&v&&(x=kt(x,v)||x);const R=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let M=p===h||!i&&p.startsWith(h)&&p.charAt(R)==="/",N=x!=null&&(x===h||!i&&x.startsWith(h)&&x.charAt(h.length)==="/"),P={isActive:M,isPending:N,isTransitioning:b},S=M?t:void 0,H;typeof a=="function"?H=a(P):H=[a,M?"active":null,N?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let z=typeof l=="function"?l(P):l;return C.createElement(Al,{...u,"aria-current":S,className:H,ref:m,style:z,to:s,viewTransition:o},typeof c=="function"?c(P):c)});gf.displayName="NavLink";var Fy=C.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:i,state:l,method:s=Pi,action:o,onSubmit:c,relative:u,preventScrollReset:m,viewTransition:d,unstable_defaultShouldRevalidate:f,...y},g)=>{let{unstable_useTransitions:v}=C.useContext(Rt),b=Uy(),h=$y(o,{relative:u}),p=s.toLowerCase()==="get"?"get":"post",x=typeof o=="string"&&hf.test(o),R=M=>{if(c&&c(M),M.defaultPrevented)return;M.preventDefault();let N=M.nativeEvent.submitter,P=(N==null?void 0:N.getAttribute("formmethod"))||s,S=()=>b(N||M.currentTarget,{fetcherKey:t,method:P,navigate:n,replace:i,state:l,relative:u,preventScrollReset:m,viewTransition:d,unstable_defaultShouldRevalidate:f});v&&n!==!1?C.startTransition(()=>S()):S()};return C.createElement("form",{ref:g,method:p,action:h,onSubmit:a?c:R,...y,"data-discover":!x&&e==="render"?"true":void 0})});Fy.displayName="Form";function Dy(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xf(e){let t=C.useContext(rn);return ae(t,Dy(e)),t}function zy(e,{target:t,replace:n,unstable_mask:a,state:i,preventScrollReset:l,relative:s,viewTransition:o,unstable_defaultShouldRevalidate:c,unstable_useTransitions:u}={}){let m=Dv(),d=Qt(),f=Ga(e,{relative:s});return C.useCallback(y=>{if(hy(y,t)){y.preventDefault();let g=n!==void 0?n:Gt(d)===Gt(f),v=()=>m(e,{replace:g,unstable_mask:a,state:i,preventScrollReset:l,relative:s,viewTransition:o,unstable_defaultShouldRevalidate:c});u?C.startTransition(()=>v()):v()}},[d,m,f,n,a,i,t,e,l,s,o,c,u])}var By=0,qy=()=>`__${String(++By)}__`;function Uy(){let{router:e}=xf("useSubmit"),{basename:t}=C.useContext(Rt),n=Kv(),a=e.fetch,i=e.navigate;return C.useCallback(async(l,s={})=>{let{action:o,method:c,encType:u,formData:m,body:d}=vy(l,t);if(s.navigate===!1){let f=s.fetcherKey||qy();await a(f,n,s.action||o,{unstable_defaultShouldRevalidate:s.unstable_defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:m,body:d,formMethod:s.method||c,formEncType:s.encType||u,flushSync:s.flushSync})}else await i(s.action||o,{unstable_defaultShouldRevalidate:s.unstable_defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:m,body:d,formMethod:s.method||c,formEncType:s.encType||u,replace:s.replace,state:s.state,fromRouteId:n,flushSync:s.flushSync,viewTransition:s.viewTransition})},[a,i,t,n])}function $y(e,{relative:t}={}){let{basename:n}=C.useContext(Rt),a=C.useContext(Jt);ae(a,"useFormAction must be used inside a RouteContext");let[i]=a.matches.slice(-1),l={...Ga(e||".",{relative:t})},s=Qt();if(e==null){l.search=s.search;let o=new URLSearchParams(l.search),c=o.getAll("index");if(c.some(m=>m==="")){o.delete("index"),c.filter(d=>d).forEach(d=>o.append("index",d));let m=o.toString();l.search=m?`?${m}`:""}}return(!e||e===".")&&i.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:It([n,l.pathname])),Gt(l)}function Hy(e,{relative:t}={}){let n=C.useContext(hc);ae(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=xf("useViewTransitionState"),i=Ga(e,{relative:t});if(!n.isTransitioning)return!1;let l=kt(n.currentLocation.pathname,a)||n.currentLocation.pathname,s=kt(n.nextLocation.pathname,a)||n.nextLocation.pathname;return sl(i.pathname,s)!=null||sl(i.pathname,l)!=null}function Vy(e){return C.createElement(ly,{flushSync:Fm.flushSync,...e})}const Gy="_header_18s0b_1",Wy="_left_18s0b_27",Jy="_collapseBtn_18s0b_39",Qy="_logo_18s0b_79",Yy="_logoIcon_18s0b_95",Ky="_logoText_18s0b_121",Zy="_logoSubtext_18s0b_133",Xy="_hamburger_18s0b_145",pr={header:Gy,left:Wy,collapseBtn:Jy,logo:Qy,logoIcon:Yy,logoText:Ky,logoSubtext:Zy,hamburger:Xy};function eb({onToggleSidebar:e,onCollapseSidebar:t,collapsed:n}){return r.jsxs("header",{className:pr.header,children:[r.jsxs("div",{className:pr.left,children:[r.jsx("button",{className:pr.collapseBtn,onClick:t,"aria-label":n?"Expandir menú":"Plegar menú",title:n?"Expandir menú":"Plegar menú",children:r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:n?r.jsx("path",{d:"M6 3L12 9L6 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}):r.jsx("path",{d:"M12 3L6 9L12 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),r.jsxs(Al,{to:"/",className:pr.logo,children:[r.jsx("div",{className:pr.logoIcon,children:"J"}),r.jsxs("div",{children:[r.jsx("div",{className:pr.logoText,children:"Programacio Java"}),r.jsx("div",{className:pr.logoSubtext,children:"DAM - La Salle Tarragona"})]})]})]}),r.jsx("button",{className:pr.hamburger,onClick:e,"aria-label":"Obrir menu",children:r.jsx("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:r.jsx("path",{d:"M3 6H19M3 11H19M3 16H19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]})}const fs=[{id:"basics",title:"Basics de Java",items:[{path:"/basics/tipus-de-dades",label:"Tipus de Dades"},{path:"/basics/operadors",label:"Operadors"},{path:"/basics/sintaxi",label:"Sintaxi de Java"},{path:"/basics/condicionals",label:"Condicionals"},{path:"/basics/switch",label:"Switch"},{path:"/basics/bucles",label:"Bucles"},{path:"/basics/modificadors-acces",label:"Modificadors d'Acces"}]},{id:"arrays",title:"Arrays",items:[{path:"/arrays/arrays-1d",label:"Arrays 1D"},{path:"/arrays/arrays-2d",label:"Arrays 2D (Matrius)"}]},{id:"funcions",title:"Funcions",items:[{path:"/funcions/sense-parametres",label:"Funcions sense paràmetres"},{path:"/funcions/amb-parametres",label:"Funcions amb paràmetres"},{path:"/funcions/tipus-de-funcions",label:"Tipus de funcions"},{path:"/funcions/recursives",label:"Funcions recursives"},{path:"/funcions/cridar-des-de-main",label:"Cridar des del Main"},{path:"/funcions/resum",label:"Resum comparatiu"}]},{id:"classes",title:"Classes i Objectes",items:[{path:"/classes/introduccio",label:"Introducció a la POO"},{path:"/classes/classe-vs-objecte",label:"Classe vs Objecte"},{path:"/classes/modificadors",label:"Modificadors i Encapsulació"},{path:"/classes/constructors-this",label:"Constructors i THIS"},{path:"/classes/herencia",label:"Herència"},{path:"/classes/exemple-biblioteca",label:"Exemple: Biblioteca"}]},{id:"modularitat",title:"Modularitat i Packages",items:[{path:"/modularitat/introduccio",label:"Introducció a la Modularitat"},{path:"/modularitat/monolitic-vs-modular",label:"Monolític vs Modular"},{path:"/modularitat/packages",label:"Packages: Organització"},{path:"/modularitat/exemple-calculadora",label:"Exemple: Calculadora"}]},{id:"string-math",title:"String i Math",items:[{path:"/string-math/classe-string",label:"Classe String"},{path:"/string-math/classe-math",label:"Classe Math"},{path:"/string-math/random-vs-math-random",label:"Random vs Math.random()"}]},{id:"java-modern",title:"Java Modern",items:[{path:"/java-modern/for-each",label:"For-each"},{path:"/java-modern/operador-ternari",label:"Operador ternari"},{path:"/java-modern/var-i-altres",label:"var i altres novetats"}]}],tb="_overlay_acghx_1",rb="_sidebar_acghx_9",nb="_collapsed_acghx_39",ab="_sectionTitle_acghx_47",ib="_arrow_acghx_49",lb="_items_acghx_51",sb="_sectionButton_acghx_65",ob="_sectionIcon_acghx_75",cb="_section_acghx_47",ub="_arrowOpen_acghx_173",db="_itemsOpen_acghx_193",pb="_link_acghx_201",mb="_activeLink_acghx_233",fb="_overlayVisible_acghx_271",hb="_sidebarOpen_acghx_341",et={overlay:tb,sidebar:rb,collapsed:nb,sectionTitle:ab,arrow:ib,items:lb,sectionButton:sb,sectionIcon:ob,section:cb,arrowOpen:ub,itemsOpen:db,link:pb,activeLink:mb,overlayVisible:fb,sidebarOpen:hb},gb={basics:r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),r.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),arrays:r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),r.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),r.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),r.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]}),funcions:r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"12",cy:"12",r:"3"}),r.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),classes:r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),r.jsx("path",{d:"M16 3L12 7L8 3"})]}),modularitat:r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),r.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),r.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),"string-math":r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("polyline",{points:"4 7 4 4 20 4 20 7"}),r.jsx("line",{x1:"9",y1:"20",x2:"15",y2:"20"}),r.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20"})]}),"java-modern":r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})};function xb({isOpen:e,collapsed:t,onClose:n,onExpand:a}){const i=Qt(),[l,s]=C.useState(()=>{const u=fs.find(m=>m.items.some(d=>i.pathname===d.path));return u?[u.id]:[fs[0].id]}),o=u=>{s(m=>m.includes(u)?m.filter(d=>d!==u):[...m,u])},c=[et.sidebar,e&&et.sidebarOpen,t&&et.collapsed].filter(Boolean).join(" ");return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:`${et.overlay} ${e?et.overlayVisible:""}`,onClick:n}),r.jsx("nav",{className:c,onMouseEnter:t?a:void 0,children:fs.map(u=>{const m=l.includes(u.id),d=gb[u.id];return r.jsxs("div",{className:et.section,children:[r.jsxs("button",{className:et.sectionButton,onClick:()=>o(u.id),title:t?u.title:void 0,children:[r.jsx("span",{className:et.sectionIcon,children:d}),r.jsx("span",{className:et.sectionTitle,children:u.title}),r.jsx("span",{className:`${et.arrow} ${m?et.arrowOpen:""}`,children:r.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",children:r.jsx("path",{d:"M3 1L7 5L3 9"})})})]}),r.jsx("div",{className:`${et.items} ${m?et.itemsOpen:""}`,children:u.items.map(f=>r.jsx(gf,{to:f.path,className:({isActive:y})=>`${et.link} ${y?et.activeLink:""}`,onClick:n,children:f.label},f.path))})]},u.id)})})]})}function vb(){return r.jsx("footer",{style:{textAlign:"center",padding:"20px",color:"#718096",fontSize:"0.85em",borderTop:"1px solid #e2e8f0",marginTop:"40px"},children:"Recurs didàctic creat per a l'assignatura de Programació - La Salle Tarragona"})}function yb(){const{pathname:e}=Qt();C.useEffect(()=>{window.scrollTo(0,0)},[e])}const bb="_layout_e2a8v_1",jb="_body_e2a8v_13",Sb="_content_e2a8v_23",wb="_contentInner_e2a8v_37",yi={layout:bb,body:jb,content:Sb,contentInner:wb};function Eb(){const[e,t]=C.useState(!1),[n,a]=C.useState(!1);return yb(),r.jsxs("div",{className:yi.layout,children:[r.jsx(eb,{onToggleSidebar:()=>t(!e),onCollapseSidebar:()=>a(!n),collapsed:n}),r.jsxs("div",{className:yi.body,children:[r.jsx(xb,{isOpen:e,collapsed:n,onClose:()=>t(!1),onExpand:()=>a(!1)}),r.jsx("main",{className:yi.content,children:r.jsxs("div",{className:yi.contentInner,children:[r.jsx(cy,{}),r.jsx(vb,{})]})})]})]})}const Cb="_hero_ym8fg_1",kb="_heroTitle_ym8fg_13",Rb="_heroAccent_ym8fg_29",Lb="_heroSubtitle_ym8fg_41",Ab="_sectionsGrid_ym8fg_53",Mb="_sectionCard_ym8fg_65",_b="_cardIcon_ym8fg_101",Nb="_cardTitle_ym8fg_125",Pb="_cardDescription_ym8fg_139",Tb="_cardTopics_ym8fg_151",Ob="_topic_ym8fg_165",Mt={hero:Cb,heroTitle:kb,heroAccent:Rb,heroSubtitle:Lb,sectionsGrid:Ab,sectionCard:Mb,cardIcon:_b,cardTitle:Nb,cardDescription:Pb,cardTopics:Tb,topic:Ob},Ib={basics:r.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),r.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),arrays:r.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),r.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),r.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),r.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]}),funcions:r.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"12",cy:"12",r:"3"}),r.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),classes:r.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),r.jsx("path",{d:"M16 3L12 7L8 3"})]}),modularitat:r.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),r.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),r.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),"string-math":r.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("polyline",{points:"4 7 4 4 20 4 20 7"}),r.jsx("line",{x1:"9",y1:"20",x2:"15",y2:"20"}),r.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20"})]}),"java-modern":r.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})},Fb=[{id:"basics",title:"Basics de Java",description:"Fonaments del llenguatge: tipus de dades, operadors, condicionals, bucles i sintaxi bàsica.",path:"/basics/tipus-de-dades",topics:["Tipus de dades","Operadors","if/else","Bucles","Switch"]},{id:"arrays",title:"Arrays",description:"Arrays unidimensionals i bidimensionals amb exemples interactius.",path:"/arrays/arrays-1d",topics:["Arrays 1D","Matrius 2D"]},{id:"funcions",title:"Funcions",description:"Funcions amb i sense paràmetres, tipus, recursivitat i com cridar-les.",path:"/funcions/sense-parametres",topics:["Sense paràmetres","Amb paràmetres","Recursives","Tipus"]},{id:"classes",title:"Classes i Objectes",description:"POO: classes, objectes, encapsulació, constructors, herència.",path:"/classes/introduccio",topics:["Classes","Objectes","Constructors","Herència"]},{id:"modularitat",title:"Modularitat i Packages",description:"Organització del codi en múltiples classes i packages. Aplica tot el que s'ha après.",path:"/modularitat/introduccio",topics:["Monolític vs Modular","Packages","Imports"]},{id:"string-math",title:"String i Math",description:"Classes String i Math: tots els mètodes útils, Random vs Math.random().",path:"/string-math/classe-string",topics:["String","Math","Random"]},{id:"java-modern",title:"Java Modern",description:"Sintaxi moderna: for-each, operador ternari, var i altres novetats.",path:"/java-modern/for-each",topics:["for-each","Ternari","var"]}];function Db(){return r.jsxs("div",{children:[r.jsxs("div",{className:Mt.hero,children:[r.jsxs("h1",{className:Mt.heroTitle,children:["Programació ",r.jsx("span",{className:Mt.heroAccent,children:"Java"})]}),r.jsx("p",{className:Mt.heroSubtitle,children:"Recurs visual interactiu per a l'aprenentatge de programació - DAM"})]}),r.jsx("div",{className:Mt.sectionsGrid,children:Fb.map(e=>r.jsxs(Al,{to:e.path,className:Mt.sectionCard,children:[r.jsx("div",{className:Mt.cardIcon,children:Ib[e.id]}),r.jsx("h2",{className:Mt.cardTitle,children:e.title}),r.jsx("p",{className:Mt.cardDescription,children:e.description}),r.jsx("div",{className:Mt.cardTopics,children:e.topics.map(t=>r.jsx("span",{className:Mt.topic,children:t},t))})]},e.path))})]})}const zb="_header_1pa55_1",Bb="_title_1pa55_9",qb="_accentLine_1pa55_29",hs={header:zb,title:Bb,accentLine:qb};function A({title:e}){return r.jsxs("div",{className:hs.header,children:[r.jsx("h2",{className:hs.title,children:e}),r.jsx("div",{className:hs.accentLine})]})}function vf(e){var t,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=vf(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function yf(){for(var e,t,n=0,a="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=vf(e))&&(a&&(a+=" "),a+=t);return a}var Ub=Object.create,Ml=Object.defineProperty,$b=Object.defineProperties,Hb=Object.getOwnPropertyDescriptor,Vb=Object.getOwnPropertyDescriptors,bf=Object.getOwnPropertyNames,ol=Object.getOwnPropertySymbols,Gb=Object.getPrototypeOf,jc=Object.prototype.hasOwnProperty,jf=Object.prototype.propertyIsEnumerable,yd=(e,t,n)=>t in e?Ml(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Vt=(e,t)=>{for(var n in t||(t={}))jc.call(t,n)&&yd(e,n,t[n]);if(ol)for(var n of ol(t))jf.call(t,n)&&yd(e,n,t[n]);return e},_l=(e,t)=>$b(e,Vb(t)),Sf=(e,t)=>{var n={};for(var a in e)jc.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&ol)for(var a of ol(e))t.indexOf(a)<0&&jf.call(e,a)&&(n[a]=e[a]);return n},Wb=(e,t)=>function(){return t||(0,e[bf(e)[0]])((t={exports:{}}).exports,t),t.exports},Jb=(e,t)=>{for(var n in t)Ml(e,n,{get:t[n],enumerable:!0})},Qb=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of bf(t))!jc.call(e,i)&&i!==n&&Ml(e,i,{get:()=>t[i],enumerable:!(a=Hb(t,i))||a.enumerable});return e},Yb=(e,t,n)=>(n=e!=null?Ub(Gb(e)):{},Qb(!e||!e.__esModule?Ml(n,"default",{value:e,enumerable:!0}):n,e)),Kb=Wb({"../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(e,t){var n=function(){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,l={},s={util:{encode:function g(v){return v instanceof o?new o(v.type,g(v.content),v.alias):Array.isArray(v)?v.map(g):v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++i}),g.__id},clone:function g(v,b){b=b||{};var h,p;switch(s.util.type(v)){case"Object":if(p=s.util.objId(v),b[p])return b[p];h={},b[p]=h;for(var x in v)v.hasOwnProperty(x)&&(h[x]=g(v[x],b));return h;case"Array":return p=s.util.objId(v),b[p]?b[p]:(h=[],b[p]=h,v.forEach(function(R,M){h[M]=g(R,b)}),h);default:return v}},getLanguage:function(g){for(;g;){var v=a.exec(g.className);if(v)return v[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,v){g.className=g.className.replace(RegExp(a,"gi"),""),g.classList.add("language-"+v)},isActive:function(g,v,b){for(var h="no-"+v;g;){var p=g.classList;if(p.contains(v))return!0;if(p.contains(h))return!1;g=g.parentElement}return!!b}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(g,v){var b=s.util.clone(s.languages[g]);for(var h in v)b[h]=v[h];return b},insertBefore:function(g,v,b,h){h=h||s.languages;var p=h[g],x={};for(var R in p)if(p.hasOwnProperty(R)){if(R==v)for(var M in b)b.hasOwnProperty(M)&&(x[M]=b[M]);b.hasOwnProperty(R)||(x[R]=p[R])}var N=h[g];return h[g]=x,s.languages.DFS(s.languages,function(P,S){S===N&&P!=g&&(this[P]=x)}),x},DFS:function g(v,b,h,p){p=p||{};var x=s.util.objId;for(var R in v)if(v.hasOwnProperty(R)){b.call(v,R,v[R],h||R);var M=v[R],N=s.util.type(M);N==="Object"&&!p[x(M)]?(p[x(M)]=!0,g(M,b,null,p)):N==="Array"&&!p[x(M)]&&(p[x(M)]=!0,g(M,b,R,p))}}},plugins:{},highlight:function(g,v,b){var h={code:g,grammar:v,language:b};if(s.hooks.run("before-tokenize",h),!h.grammar)throw new Error('The language "'+h.language+'" has no grammar.');return h.tokens=s.tokenize(h.code,h.grammar),s.hooks.run("after-tokenize",h),o.stringify(s.util.encode(h.tokens),h.language)},tokenize:function(g,v){var b=v.rest;if(b){for(var h in b)v[h]=b[h];delete v.rest}var p=new m;return d(p,p.head,g),u(g,p,v,p.head,0),y(p)},hooks:{all:{},add:function(g,v){var b=s.hooks.all;b[g]=b[g]||[],b[g].push(v)},run:function(g,v){var b=s.hooks.all[g];if(!(!b||!b.length))for(var h=0,p;p=b[h++];)p(v)}},Token:o};function o(g,v,b,h){this.type=g,this.content=v,this.alias=b,this.length=(h||"").length|0}o.stringify=function g(v,b){if(typeof v=="string")return v;if(Array.isArray(v)){var h="";return v.forEach(function(N){h+=g(N,b)}),h}var p={type:v.type,content:g(v.content,b),tag:"span",classes:["token",v.type],attributes:{},language:b},x=v.alias;x&&(Array.isArray(x)?Array.prototype.push.apply(p.classes,x):p.classes.push(x)),s.hooks.run("wrap",p);var R="";for(var M in p.attributes)R+=" "+M+'="'+(p.attributes[M]||"").replace(/"/g,"&quot;")+'"';return"<"+p.tag+' class="'+p.classes.join(" ")+'"'+R+">"+p.content+"</"+p.tag+">"};function c(g,v,b,h){g.lastIndex=v;var p=g.exec(b);if(p&&h&&p[1]){var x=p[1].length;p.index+=x,p[0]=p[0].slice(x)}return p}function u(g,v,b,h,p,x){for(var R in b)if(!(!b.hasOwnProperty(R)||!b[R])){var M=b[R];M=Array.isArray(M)?M:[M];for(var N=0;N<M.length;++N){if(x&&x.cause==R+","+N)return;var P=M[N],S=P.inside,H=!!P.lookbehind,z=!!P.greedy,re=P.alias;if(z&&!P.pattern.global){var K=P.pattern.toString().match(/[imsuy]*$/)[0];P.pattern=RegExp(P.pattern.source,K+"g")}for(var Ce=P.pattern||P,Z=h.next,ce=p;Z!==v.tail&&!(x&&ce>=x.reach);ce+=Z.value.length,Z=Z.next){var le=Z.value;if(v.length>g.length)return;if(!(le instanceof o)){var pe=1,I;if(z){if(I=c(Ce,ce,g,H),!I||I.index>=g.length)break;var se=I.index,B=I.index+I[0].length,U=ce;for(U+=Z.value.length;se>=U;)Z=Z.next,U+=Z.value.length;if(U-=Z.value.length,ce=U,Z.value instanceof o)continue;for(var te=Z;te!==v.tail&&(U<B||typeof te.value=="string");te=te.next)pe++,U+=te.value.length;pe--,le=g.slice(ce,U),I.index-=ce}else if(I=c(Ce,0,le,H),!I)continue;var se=I.index,xe=I[0],we=le.slice(0,se),Ie=le.slice(se+xe.length),ye=ce+le.length;x&&ye>x.reach&&(x.reach=ye);var Ue=Z.prev;we&&(Ue=d(v,Ue,we),ce+=we.length),f(v,Ue,pe);var nn=new o(R,S?s.tokenize(xe,S):xe,re,xe);if(Z=d(v,Ue,nn),Ie&&d(v,Z,Ie),pe>1){var Lt={cause:R+","+N,reach:ye};u(g,v,b,Z.prev,ce,Lt),x&&Lt.reach>x.reach&&(x.reach=Lt.reach)}}}}}}function m(){var g={value:null,prev:null,next:null},v={value:null,prev:g,next:null};g.next=v,this.head=g,this.tail=v,this.length=0}function d(g,v,b){var h=v.next,p={value:b,prev:v,next:h};return v.next=p,h.prev=p,g.length++,p}function f(g,v,b){for(var h=v.next,p=0;p<b&&h!==g.tail;p++)h=h.next;v.next=h,h.prev=v,g.length-=p}function y(g){for(var v=[],b=g.head.next;b!==g.tail;)v.push(b.value),b=b.next;return v}return s}();t.exports=n,n.default=n}}),_=Yb(Kb());_.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},_.languages.markup.tag.inside["attr-value"].inside.entity=_.languages.markup.entity,_.languages.markup.doctype.inside["internal-subset"].inside=_.languages.markup,_.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(_.languages.markup.tag,"addInlined",{value:function(e,a){var n={},n=(n["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:_.languages[a]},n.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}}),a=(n["language-"+a]={pattern:/[\s\S]+/,inside:_.languages[a]},{});a[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:n},_.languages.insertBefore("markup","cdata",a)}}),Object.defineProperty(_.languages.markup.tag,"addAttribute",{value:function(e,t){_.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:_.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),_.languages.html=_.languages.markup,_.languages.mathml=_.languages.markup,_.languages.svg=_.languages.markup,_.languages.xml=_.languages.extend("markup",{}),_.languages.ssml=_.languages.xml,_.languages.atom=_.languages.xml,_.languages.rss=_.languages.xml,function(e){var t={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},n=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,a="(?:[^\\\\-]|"+n.source+")",a=RegExp(a+"-"+a),i={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};e.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:a,inside:{escape:n,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":t,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:n}},"special-escape":t,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":i}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:n,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":i}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}}(_),_.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},_.languages.javascript=_.languages.extend("clike",{"class-name":[_.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),_.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,_.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:_.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:_.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:_.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:_.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:_.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),_.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:_.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),_.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),_.languages.markup&&(_.languages.markup.tag.addInlined("script","javascript"),_.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),_.languages.js=_.languages.javascript,_.languages.actionscript=_.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),_.languages.actionscript["class-name"].alias="function",delete _.languages.actionscript.parameter,delete _.languages.actionscript["literal-property"],_.languages.markup&&_.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:_.languages.markup}}),function(e){var t=/#(?!\{).+/,n={pattern:/#\{[^}]+\}/,alias:"variable"};e.languages.coffeescript=e.languages.extend("javascript",{comment:t,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:n}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),e.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:t,interpolation:n}}}),e.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:e.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:n}}]}),e.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete e.languages.coffeescript["template-string"],e.languages.coffee=e.languages.coffeescript}(_),function(e){var t=e.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(t,"addSupport",{value:function(n,a){(n=typeof n=="string"?[n]:n).forEach(function(i){var l=function(d){d.inside||(d.inside={}),d.inside.rest=a},s="doc-comment";if(o=e.languages[i]){var o,c=o[s];if((c=c||(o=e.languages.insertBefore(i,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[s])instanceof RegExp&&(c=o[s]={pattern:c}),Array.isArray(c))for(var u=0,m=c.length;u<m;u++)c[u]instanceof RegExp&&(c[u]={pattern:c[u]}),l(c[u]);else l(c)}})}}),t.addSupport(["java","javascript","php"],t)}(_),function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,t=(e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css,e.languages.markup);t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}(_),function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,t=(e.languages.css.selector={pattern:e.languages.css.selector.pattern,lookbehind:!0,inside:t={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+t.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[t,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},e.languages.css.atrule.inside["selector-function-argument"].inside=t,e.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}}),{pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0}),n={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};e.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:t,number:n,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:t,number:n})}(_),function(e){var t=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+n.source+"(?:[ 	]+"+t.source+")?|"+t.source+"(?:[ 	]+"+n.source+")?)",i=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),l=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function s(o,c){c=(c||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return o});return RegExp(u,c)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+i+"|"+l+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:s(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:s(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:s(l),lookbehind:!0,greedy:!0},number:{pattern:s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:n,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml}(_),function(e){var t=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function n(u){return u=u.replace(/<inner>/g,function(){return t}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+u+")")}var a=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,i=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return a}),l=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,s=(e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+i+l+"(?:"+i+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+i+l+")(?:"+i+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(a),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+i+")"+l+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+i+"$"),inside:{"table-header":{pattern:RegExp(a),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:n(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(u){["url","bold","italic","strike","code-snippet"].forEach(function(m){u!==m&&(e.languages.markdown[u].inside.content.inside[m]=e.languages.markdown[m])})}),e.hooks.add("after-tokenize",function(u){u.language!=="markdown"&&u.language!=="md"||function m(d){if(d&&typeof d!="string")for(var f=0,y=d.length;f<y;f++){var g,v=d[f];v.type!=="code"?m(v.content):(g=v.content[1],v=v.content[3],g&&v&&g.type==="code-language"&&v.type==="code-block"&&typeof g.content=="string"&&(g=g.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),g="language-"+(g=(/[a-z][\w-]*/i.exec(g)||[""])[0].toLowerCase()),v.alias?typeof v.alias=="string"?v.alias=[v.alias,g]:v.alias.push(g):v.alias=[g]))}}(u.tokens)}),e.hooks.add("wrap",function(u){if(u.type==="code-block"){for(var m="",d=0,f=u.classes.length;d<f;d++){var y=u.classes[d],y=/language-(.+)/.exec(y);if(y){m=y[1];break}}var g,v=e.languages[m];v?u.content=e.highlight(function(b){return b=b.replace(s,""),b=b.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(h,p){var x;return(p=p.toLowerCase())[0]==="#"?(x=p[1]==="x"?parseInt(p.slice(2),16):Number(p.slice(1)),c(x)):o[p]||h})}(u.content),v,m):m&&m!=="none"&&e.plugins.autoloader&&(g="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random()),u.attributes.id=g,e.plugins.autoloader.loadLanguages(m,function(){var b=document.getElementById(g);b&&(b.innerHTML=e.highlight(b.textContent,e.languages[m],m))}))}}),RegExp(e.languages.markup.tag.pattern.source,"gi")),o={amp:"&",lt:"<",gt:">",quot:'"'},c=String.fromCodePoint||String.fromCharCode;e.languages.md=e.languages.markdown}(_),_.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:_.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},_.hooks.add("after-tokenize",function(e){if(e.language==="graphql")for(var t=e.tokens.filter(function(g){return typeof g!="string"&&g.type!=="comment"&&g.type!=="scalar"}),n=0;n<t.length;){var a=t[n++];if(a.type==="keyword"&&a.content==="mutation"){var i=[];if(d(["definition-mutation","punctuation"])&&m(1).content==="("){n+=2;var l=f(/^\($/,/^\)$/);if(l===-1)continue;for(;n<l;n++){var s=m(0);s.type==="variable"&&(y(s,"variable-input"),i.push(s.content))}n=l+1}if(d(["punctuation","property-query"])&&m(0).content==="{"&&(n++,y(m(0),"property-mutation"),0<i.length)){var o=f(/^\{$/,/^\}$/);if(o!==-1)for(var c=n;c<o;c++){var u=t[c];u.type==="variable"&&0<=i.indexOf(u.content)&&y(u,"variable-input")}}}}function m(g){return t[n+g]}function d(g,v){v=v||0;for(var b=0;b<g.length;b++){var h=m(b+v);if(!h||h.type!==g[b])return}return 1}function f(g,v){for(var b=1,h=n;h<t.length;h++){var p=t[h],x=p.content;if(p.type==="punctuation"&&typeof x=="string"){if(g.test(x))b++;else if(v.test(x)&&--b===0)return h}}return-1}function y(g,v){var b=g.alias;b?Array.isArray(b)||(g.alias=b=[b]):g.alias=b=[],b.push(v)}}),_.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(e){var t=e.languages.javascript["template-string"],n=t.pattern.source,a=t.inside.interpolation,i=a.inside["interpolation-punctuation"],l=a.pattern.source;function s(d,f){if(e.languages[d])return{pattern:RegExp("((?:"+f+")\\s*)"+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:d}}}}function o(d,f,y){return d={code:d,grammar:f,language:y},e.hooks.run("before-tokenize",d),d.tokens=e.tokenize(d.code,d.grammar),e.hooks.run("after-tokenize",d),d.tokens}function c(d,f,y){var b=e.tokenize(d,{interpolation:{pattern:RegExp(l),lookbehind:!0}}),g=0,v={},b=o(b.map(function(p){if(typeof p=="string")return p;for(var x,R,p=p.content;d.indexOf((R=g++,x="___"+y.toUpperCase()+"_"+R+"___"))!==-1;);return v[x]=p,x}).join(""),f,y),h=Object.keys(v);return g=0,function p(x){for(var R=0;R<x.length;R++){if(g>=h.length)return;var M,N,P,S,H,z,re,K=x[R];typeof K=="string"||typeof K.content=="string"?(M=h[g],(re=(z=typeof K=="string"?K:K.content).indexOf(M))!==-1&&(++g,N=z.substring(0,re),H=v[M],P=void 0,(S={})["interpolation-punctuation"]=i,(S=e.tokenize(H,S)).length===3&&((P=[1,1]).push.apply(P,o(S[1],e.languages.javascript,"javascript")),S.splice.apply(S,P)),P=new e.Token("interpolation",S,a.alias,H),S=z.substring(re+M.length),H=[],N&&H.push(N),H.push(P),S&&(p(z=[S]),H.push.apply(H,z)),typeof K=="string"?(x.splice.apply(x,[R,1].concat(H)),R+=H.length-1):K.content=H)):(re=K.content,Array.isArray(re)?p(re):p([re]))}}(b),new e.Token(y,b,"language-"+y,d)}e.languages.javascript["template-string"]=[s("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),s("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),s("svg",/\bsvg/.source),s("markdown",/\b(?:markdown|md)/.source),s("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),s("sql",/\bsql/.source),t].filter(Boolean);var u={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function m(d){return typeof d=="string"?d:Array.isArray(d)?d.map(m).join(""):m(d.content)}e.hooks.add("after-tokenize",function(d){d.language in u&&function f(y){for(var g=0,v=y.length;g<v;g++){var b,h,p,x=y[g];typeof x!="string"&&(b=x.content,Array.isArray(b)?x.type==="template-string"?(x=b[1],b.length===3&&typeof x!="string"&&x.type==="embedded-code"&&(h=m(x),x=x.alias,x=Array.isArray(x)?x[0]:x,p=e.languages[x])&&(b[1]=c(h,p,x))):f(b):typeof b!="string"&&f([b]))}}(d.tokens)})}(_),function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript}(_),function(e){var t=e.languages.javascript,n=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,a="(@(?:arg|argument|param|property)\\s+(?:"+n+"\\s+)?)";e.languages.jsdoc=e.languages.extend("javadoclike",{parameter:{pattern:RegExp(a+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),e.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(a+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:t,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return n})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+n),lookbehind:!0,inside:{string:t.string,number:t.number,boolean:t.boolean,keyword:e.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:t,alias:"language-javascript"}}}}),e.languages.javadoclike.addSupport("javascript",e.languages.jsdoc)}(_),function(e){e.languages.flow=e.languages.extend("javascript",{}),e.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:"class-name"}]}),e.languages.flow["function-variable"].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete e.languages.flow.parameter,e.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(e.languages.flow.keyword)||(e.languages.flow.keyword=[e.languages.flow.keyword]),e.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})}(_),_.languages.n4js=_.languages.extend("javascript",{keyword:/\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),_.languages.insertBefore("n4js","constant",{annotation:{pattern:/@+\w+/,alias:"operator"}}),_.languages.n4jsd=_.languages.n4js,function(e){function t(s,o){return RegExp(s.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),o)}e.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+e.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),e.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+e.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),e.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),e.languages.insertBefore("javascript","keyword",{imports:{pattern:t(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:e.languages.javascript},exports:{pattern:t(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:e.languages.javascript}}),e.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),e.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),e.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:t(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var n=["function","function-variable","method","method-variable","property-access"],a=0;a<n.length;a++){var l=n[a],i=e.languages.javascript[l],l=(i=e.util.type(i)==="RegExp"?e.languages.javascript[l]={pattern:i}:i).inside||{};(i.inside=l)["maybe-class-name"]=/^[A-Z][\s\S]*/}}(_),function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function l(c,u){return c=c.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return i}),RegExp(c,u)}i=l(i).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=l(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:l(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:l(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);function s(c){for(var u=[],m=0;m<c.length;m++){var d=c[m],f=!1;typeof d!="string"&&(d.type==="tag"&&d.content[0]&&d.content[0].type==="tag"?d.content[0].content[0].content==="</"?0<u.length&&u[u.length-1].tagName===o(d.content[0].content[1])&&u.pop():d.content[d.content.length-1].content!=="/>"&&u.push({tagName:o(d.content[0].content[1]),openedBraces:0}):0<u.length&&d.type==="punctuation"&&d.content==="{"?u[u.length-1].openedBraces++:0<u.length&&0<u[u.length-1].openedBraces&&d.type==="punctuation"&&d.content==="}"?u[u.length-1].openedBraces--:f=!0),(f||typeof d=="string")&&0<u.length&&u[u.length-1].openedBraces===0&&(f=o(d),m<c.length-1&&(typeof c[m+1]=="string"||c[m+1].type==="plain-text")&&(f+=o(c[m+1]),c.splice(m+1,1)),0<m&&(typeof c[m-1]=="string"||c[m-1].type==="plain-text")&&(f=o(c[m-1])+f,c.splice(m-1,1),m--),c[m]=new e.Token("plain-text",f,null,f)),d.content&&typeof d.content!="string"&&s(d.content)}}var o=function(c){return c?typeof c=="string"?c:typeof c.content=="string"?c.content:c.content.map(o).join(""):""};e.hooks.add("after-tokenize",function(c){c.language!=="jsx"&&c.language!=="tsx"||s(c.tokens)})}(_),function(e){var t=e.util.clone(e.languages.typescript),t=(e.languages.tsx=e.languages.extend("jsx",t),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"],e.languages.tsx.tag);t.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+t.pattern.source+")",t.pattern.flags),t.lookbehind=!0}(_),_.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(/(^|[^"#])/.source+"(?:"+/"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source+"|"+/"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source+")"+/(?!["#])/.source),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(/(^|[^"#])(#+)/.source+"(?:"+/"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source+"|"+/"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source+")\\2"),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp(/#/.source+"(?:"+/(?:elseif|if)\b/.source+"(?:[ 	]*"+/(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source+")+|"+/(?:else|endif)\b/.source+")"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},_.languages.swift["string-literal"].forEach(function(e){e.inside.interpolation.inside=_.languages.swift}),function(e){e.languages.kotlin=e.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete e.languages.kotlin["class-name"];var t={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:e.languages.kotlin}};e.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:t},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:t},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete e.languages.kotlin.string,e.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),e.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),e.languages.kt=e.languages.kotlin,e.languages.kts=e.languages.kotlin}(_),_.languages.c=_.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),_.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),_.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},_.languages.c.string],char:_.languages.c.char,comment:_.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:_.languages.c}}}}),_.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete _.languages.c.boolean,_.languages.objectivec=_.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete _.languages.objectivec["class-name"],_.languages.objc=_.languages.objectivec,_.languages.reason=_.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),_.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete _.languages.reason.function,function(e){for(var t=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,n=0;n<2;n++)t=t.replace(/<self>/g,function(){return t});t=t.replace(/<self>/g,function(){return/[^\s\S]/.source}),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+t),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string}(_),_.languages.go=_.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),_.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete _.languages.go["class-name"],function(e){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return t.source});e.languages.cpp=e.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return n})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),e.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e.languages.cpp}}}}),e.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),e.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend("cpp",{})}}),e.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp["base-clause"])}(_),_.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},_.languages.python["string-interpolation"].inside.interpolation.inside.rest=_.languages.python,_.languages.py=_.languages.python,_.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},_.languages.webmanifest=_.languages.json;var Zb={};Jb(Zb,{dracula:()=>ej,duotoneDark:()=>rj,duotoneLight:()=>aj,github:()=>lj,gruvboxMaterialDark:()=>Oj,gruvboxMaterialLight:()=>Fj,jettwaveDark:()=>Rj,jettwaveLight:()=>Aj,nightOwl:()=>oj,nightOwlLight:()=>uj,oceanicNext:()=>pj,okaidia:()=>fj,oneDark:()=>_j,oneLight:()=>Pj,palenight:()=>gj,shadesOfPurple:()=>vj,synthwave84:()=>bj,ultramin:()=>Sj,vsDark:()=>wf,vsLight:()=>Cj});var Xb={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},ej=Xb,tj={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},rj=tj,nj={plain:{backgroundColor:"#faf8f5",color:"#728fcb"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#b6ad9a"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#063289"}},{types:["property","function"],style:{color:"#b29762"}},{types:["tag-id","selector","atrule-id"],style:{color:"#2d2006"}},{types:["attr-name"],style:{color:"#896724"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule"],style:{color:"#728fcb"}},{types:["placeholder","variable"],style:{color:"#93abdc"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#896724"}}]},aj=nj,ij={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},lj=ij,sj={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]},oj=sj,cj={plain:{color:"#403f53",backgroundColor:"#FBFBFB"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(72, 118, 214)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(152, 159, 177)",fontStyle:"italic"}},{types:["string","builtin","char","constant","url"],style:{color:"rgb(72, 118, 214)"}},{types:["variable"],style:{color:"rgb(201, 103, 101)"}},{types:["number"],style:{color:"rgb(170, 9, 130)"}},{types:["punctuation"],style:{color:"rgb(153, 76, 195)"}},{types:["function","selector","doctype"],style:{color:"rgb(153, 76, 195)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(17, 17, 17)"}},{types:["tag"],style:{color:"rgb(153, 76, 195)"}},{types:["operator","property","keyword","namespace"],style:{color:"rgb(12, 150, 155)"}},{types:["boolean"],style:{color:"rgb(188, 84, 84)"}}]},uj=cj,ut={char:"#D8DEE9",comment:"#999999",keyword:"#c5a5c5",primitive:"#5a9bcf",string:"#8dc891",variable:"#d7deea",boolean:"#ff8b50",tag:"#fc929e",function:"#79b6f2",className:"#FAC863"},dj={plain:{backgroundColor:"#282c34",color:"#ffffff"},styles:[{types:["attr-name"],style:{color:ut.keyword}},{types:["attr-value"],style:{color:ut.string}},{types:["comment","block-comment","prolog","doctype","cdata","shebang"],style:{color:ut.comment}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:ut.primitive}},{types:["boolean"],style:{color:ut.boolean}},{types:["tag"],style:{color:ut.tag}},{types:["string"],style:{color:ut.string}},{types:["punctuation"],style:{color:ut.string}},{types:["selector","char","builtin","inserted"],style:{color:ut.char}},{types:["function"],style:{color:ut.function}},{types:["operator","entity","url","variable"],style:{color:ut.variable}},{types:["keyword"],style:{color:ut.keyword}},{types:["atrule","class-name"],style:{color:ut.className}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}}]},pj=dj,mj={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"#f92672",fontStyle:"italic"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"#8292a2",fontStyle:"italic"}},{types:["string","url"],style:{color:"#a6e22e"}},{types:["variable"],style:{color:"#f8f8f2"}},{types:["number"],style:{color:"#ae81ff"}},{types:["builtin","char","constant","function","class-name"],style:{color:"#e6db74"}},{types:["punctuation"],style:{color:"#f8f8f2"}},{types:["selector","doctype"],style:{color:"#a6e22e",fontStyle:"italic"}},{types:["tag","operator","keyword"],style:{color:"#66d9ef"}},{types:["boolean"],style:{color:"#ae81ff"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)",opacity:.7}},{types:["tag","property"],style:{color:"#f92672"}},{types:["attr-name"],style:{color:"#a6e22e !important"}},{types:["doctype"],style:{color:"#8292a2"}},{types:["rule"],style:{color:"#e6db74"}}]},fj=mj,hj={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},gj=hj,xj={plain:{color:"#9EFEFF",backgroundColor:"#2D2A55"},styles:[{types:["changed"],style:{color:"rgb(255, 238, 128)"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)"}},{types:["comment"],style:{color:"rgb(179, 98, 255)",fontStyle:"italic"}},{types:["punctuation"],style:{color:"rgb(255, 255, 255)"}},{types:["constant"],style:{color:"rgb(255, 98, 140)"}},{types:["string","url"],style:{color:"rgb(165, 255, 144)"}},{types:["variable"],style:{color:"rgb(255, 238, 128)"}},{types:["number","boolean"],style:{color:"rgb(255, 98, 140)"}},{types:["attr-name"],style:{color:"rgb(255, 180, 84)"}},{types:["keyword","operator","property","namespace","tag","selector","doctype"],style:{color:"rgb(255, 157, 0)"}},{types:["builtin","char","constant","function","class-name"],style:{color:"rgb(250, 208, 0)"}}]},vj=xj,yj={plain:{backgroundColor:"linear-gradient(to bottom, #2a2139 75%, #34294f)",backgroundImage:"#34294f",color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#495495",fontStyle:"italic"}},{types:["punctuation"],style:{color:"#ccc"}},{types:["tag","attr-name","namespace","number","unit","hexcode","deleted"],style:{color:"#e2777a"}},{types:["property","selector"],style:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"}},{types:["function-name"],style:{color:"#6196cc"}},{types:["boolean","selector-id","function"],style:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"}},{types:["class-name","maybe-class-name","builtin"],style:{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"}},{types:["constant","symbol"],style:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"}},{types:["important","atrule","keyword","selector-class"],style:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"}},{types:["string","char","attr-value","regex","variable"],style:{color:"#f87c32"}},{types:["parameter"],style:{fontStyle:"italic"}},{types:["entity","url"],style:{color:"#67cdcc"}},{types:["operator"],style:{color:"ffffffee"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["inserted"],style:{color:"green"}}]},bj=yj,jj={plain:{color:"#282a2e",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(197, 200, 198)"}},{types:["string","number","builtin","variable"],style:{color:"rgb(150, 152, 150)"}},{types:["class-name","function","tag","attr-name"],style:{color:"rgb(40, 42, 46)"}}]},Sj=jj,wj={plain:{color:"#9CDCFE",backgroundColor:"#1E1E1E"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"rgb(86, 156, 214)"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"rgb(206, 145, 120)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(212, 212, 212)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(220, 220, 170)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}}]},wf=wj,Ej={plain:{color:"#000000",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(0, 128, 0)"}},{types:["builtin"],style:{color:"rgb(0, 112, 193)"}},{types:["number","variable","inserted"],style:{color:"rgb(9, 134, 88)"}},{types:["operator"],style:{color:"rgb(0, 0, 0)"}},{types:["constant","char"],style:{color:"rgb(129, 31, 63)"}},{types:["tag"],style:{color:"rgb(128, 0, 0)"}},{types:["attr-name"],style:{color:"rgb(255, 0, 0)"}},{types:["deleted","string"],style:{color:"rgb(163, 21, 21)"}},{types:["changed","punctuation"],style:{color:"rgb(4, 81, 165)"}},{types:["function","keyword"],style:{color:"rgb(0, 0, 255)"}},{types:["class-name"],style:{color:"rgb(38, 127, 153)"}}]},Cj=Ej,kj={plain:{color:"#f8fafc",backgroundColor:"#011627"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#569CD6"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#f8fafc"}},{types:["attr-name","variable"],style:{color:"#9CDCFE"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#cbd5e1"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#D4D4D4"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#7dd3fc"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},Rj=kj,Lj={plain:{color:"#0f172a",backgroundColor:"#f1f5f9"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#0c4a6e"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#0f172a"}},{types:["attr-name","variable"],style:{color:"#0c4a6e"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#64748b"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#475569"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#0e7490"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},Aj=Lj,Mj={plain:{backgroundColor:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(220, 10%, 40%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(220, 14%, 71%)"}},{types:["attr-name","class-name","maybe-class-name","boolean","constant","number","atrule"],style:{color:"hsl(29, 54%, 61%)"}},{types:["keyword"],style:{color:"hsl(286, 60%, 67%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(355, 65%, 65%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value"],style:{color:"hsl(95, 38%, 62%)"}},{types:["variable","operator","function"],style:{color:"hsl(207, 82%, 66%)"}},{types:["url"],style:{color:"hsl(187, 47%, 55%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(220, 14%, 71%)"}}]},_j=Mj,Nj={plain:{backgroundColor:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(230, 4%, 64%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(230, 8%, 24%)"}},{types:["attr-name","class-name","boolean","constant","number","atrule"],style:{color:"hsl(35, 99%, 36%)"}},{types:["keyword"],style:{color:"hsl(301, 63%, 40%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(5, 74%, 59%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value","punctuation"],style:{color:"hsl(119, 34%, 47%)"}},{types:["variable","operator","function"],style:{color:"hsl(221, 87%, 60%)"}},{types:["url"],style:{color:"hsl(198, 99%, 37%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(230, 8%, 24%)"}}]},Pj=Nj,Tj={plain:{color:"#ebdbb2",backgroundColor:"#292828"},styles:[{types:["imports","class-name","maybe-class-name","constant","doctype","builtin","function"],style:{color:"#d8a657"}},{types:["property-access"],style:{color:"#7daea3"}},{types:["tag"],style:{color:"#e78a4e"}},{types:["attr-name","char","url","regex"],style:{color:"#a9b665"}},{types:["attr-value","string"],style:{color:"#89b482"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#ea6962"}},{types:["entity","number","symbol"],style:{color:"#d3869b"}}]},Oj=Tj,Ij={plain:{color:"#654735",backgroundColor:"#f9f5d7"},styles:[{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#af2528"}},{types:["imports","class-name","maybe-class-name","constant","doctype","builtin"],style:{color:"#b4730e"}},{types:["string","attr-value"],style:{color:"#477a5b"}},{types:["property-access"],style:{color:"#266b79"}},{types:["function","attr-name","char","url"],style:{color:"#72761e"}},{types:["tag"],style:{color:"#b94c07"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["entity","number","symbol"],style:{color:"#924f79"}}]},Fj=Ij,Dj=e=>C.useCallback(t=>{var n=t,{className:a,style:i,line:l}=n,s=Sf(n,["className","style","line"]);const o=_l(Vt({},s),{className:yf("token-line",a)});return typeof e=="object"&&"plain"in e&&(o.style=e.plain),typeof i=="object"&&(o.style=Vt(Vt({},o.style||{}),i)),o},[e]),zj=e=>{const t=C.useCallback(({types:n,empty:a})=>{if(e!=null){{if(n.length===1&&n[0]==="plain")return a!=null?{display:"inline-block"}:void 0;if(n.length===1&&a!=null)return e[n[0]]}return Object.assign(a!=null?{display:"inline-block"}:{},...n.map(i=>e[i]))}},[e]);return C.useCallback(n=>{var a=n,{token:i,className:l,style:s}=a,o=Sf(a,["token","className","style"]);const c=_l(Vt({},o),{className:yf("token",...i.types,l),children:i.content,style:t(i)});return s!=null&&(c.style=Vt(Vt({},c.style||{}),s)),c},[t])},Bj=/\r\n|\r|\n/,bd=e=>{e.length===0?e.push({types:["plain"],content:`
`,empty:!0}):e.length===1&&e[0].content===""&&(e[0].content=`
`,e[0].empty=!0)},jd=(e,t)=>{const n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},qj=e=>{const t=[[]],n=[e],a=[0],i=[e.length];let l=0,s=0,o=[];const c=[o];for(;s>-1;){for(;(l=a[s]++)<i[s];){let u,m=t[s];const f=n[s][l];if(typeof f=="string"?(m=s>0?m:["plain"],u=f):(m=jd(m,f.type),f.alias&&(m=jd(m,f.alias)),u=f.content),typeof u!="string"){s++,t.push(m),n.push(u),a.push(0),i.push(u.length);continue}const y=u.split(Bj),g=y.length;o.push({types:m,content:y[0]});for(let v=1;v<g;v++)bd(o),c.push(o=[]),o.push({types:m,content:y[v]})}s--,t.pop(),n.pop(),a.pop(),i.pop()}return bd(o),c},Sd=qj,Uj=({prism:e,code:t,grammar:n,language:a})=>C.useMemo(()=>{if(n==null)return Sd([t]);const i={code:t,grammar:n,language:a,tokens:[]};return e.hooks.run("before-tokenize",i),i.tokens=e.tokenize(t,n),e.hooks.run("after-tokenize",i),Sd(i.tokens)},[t,n,a,e]),$j=(e,t)=>{const{plain:n}=e,a=e.styles.reduce((i,l)=>{const{languages:s,style:o}=l;return s&&!s.includes(t)||l.types.forEach(c=>{const u=Vt(Vt({},i[c]),o);i[c]=u}),i},{});return a.root=n,a.plain=_l(Vt({},n),{backgroundColor:void 0}),a},Hj=$j,Vj=({children:e,language:t,code:n,theme:a,prism:i})=>{const l=t.toLowerCase(),s=Hj(a,l),o=Dj(s),c=zj(s),u=i.languages[l],m=Uj({prism:i,language:l,code:n,grammar:u});return e({tokens:m,className:`prism-code language-${l}`,style:s!=null?s.root:{},getLineProps:o,getTokenProps:c})},Gj=e=>C.createElement(Vj,_l(Vt({},e),{prism:e.prism||_,theme:e.theme||wf,code:e.code,language:e.language}));/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/const Wj="_wrapper_axajp_1",Jj="_pre_axajp_17",Qj="_line_axajp_35",Yj="_lineNumber_axajp_43",Kj="_lineContent_axajp_61",Zj="_label_axajp_69",on={wrapper:Wj,pre:Jj,line:Qj,lineNumber:Yj,lineContent:Kj,label:Zj},Xj={plain:{color:"#e8eef5",backgroundColor:"#1e2837"},styles:[{types:["keyword","builtin","tag","boolean"],style:{color:"#ffd700",fontWeight:"bold"}},{types:["function","method"],style:{color:"#90cdf4"}},{types:["string","char"],style:{color:"#68d391"}},{types:["number"],style:{color:"#fc8181"}},{types:["comment"],style:{color:"#a0aec0",fontStyle:"italic"}},{types:["class-name"],style:{color:"#e5c07b"}},{types:["operator"],style:{color:"#e8eef5"}},{types:["punctuation"],style:{color:"#cbd5e0"}},{types:["annotation"],style:{color:"#ffd700"}}]};function w({code:e,language:t="java",showLineNumbers:n=!1,label:a}){return r.jsxs("div",{className:on.wrapper,children:[a&&r.jsx("div",{className:on.label,children:a}),r.jsx(Gj,{theme:Xj,code:e.trim(),language:t,children:({style:i,tokens:l,getLineProps:s,getTokenProps:o})=>r.jsx("pre",{className:on.pre,style:i,children:l.map((c,u)=>r.jsxs("div",{...s({line:c}),className:on.line,children:[n&&r.jsx("span",{className:on.lineNumber,children:u+1}),r.jsx("span",{className:on.lineContent,children:c.map((m,d)=>r.jsx("span",{...o({token:m})},d))})]},u))})})]})}const e0="_box_ih0qt_1",t0="_title_ih0qt_17",r0="_info_ih0qt_31",n0="_warning_ih0qt_49",a0="_success_ih0qt_67",i0="_error_ih0qt_85",l0="_explanation_ih0qt_103",gs={box:e0,title:t0,info:r0,warning:n0,success:a0,error:i0,explanation:l0};function k({variant:e="info",title:t,children:n}){return r.jsxs("div",{className:`${gs.box} ${gs[e]}`,children:[t&&r.jsx("strong",{className:gs.title,children:t}),n]})}const s0="_table_1ewkr_1",o0="_groupHeader_1ewkr_79",wd={table:s0,groupHeader:o0};function ge({headers:e,rows:t}){return r.jsxs("table",{className:wd.table,children:[r.jsx("thead",{children:r.jsx("tr",{children:e.map((n,a)=>r.jsx("th",{children:n},a))})}),r.jsx("tbody",{children:t.map((n,a)=>n.group?r.jsx("tr",{className:wd.groupHeader,children:r.jsx("td",{colSpan:e.length,children:n.group})},a):r.jsx("tr",{children:n.cells.map((i,l)=>r.jsx("td",{children:i},l))},a))})]})}function c0(){return r.jsxs("div",{children:[r.jsx(A,{title:"Tipus de Dades"}),r.jsx(k,{variant:"info",title:"Fonaments",children:r.jsx("p",{children:"Els tipus de dades són la base, determinen com s'emmagatzemen i manipulen els valors. Java és un llenguatge fortament tipat que distingeix entre tipus primitius (dades simples) i tipus de referència (objectes complexos), com Strings, Arrays... Veurem només els que hem après fins ara."})}),r.jsx(ge,{headers:["Nom","Paraula reservada","Sintaxi"],rows:[{group:"Primitius"},{cells:["Enter","int (32 bits)","0"]},{cells:["Flotant","float (32 bits)","3.14"]},{cells:["Flotant (double)","double (64 bits)","3.14"]},{cells:["Caràcter","char","'A'"]},{cells:["Booleà","boolean","true/false"]},{group:"Objectes"},{cells:["Cadena de text","String",'"Hola"']},{cells:["Array","tipus[]","{1, 2, 3}"]}]}),r.jsx(k,{variant:"warning",title:"Compte amb utilitzar char o String per números",children:r.jsx("p",{children:"Tot i que es permet, si el nostre objectiu és calcular, és millor utilitzar un tipus de dada dedicat als números. Si bé és cert que es poden convertir i així aconseguir els càlculs, no és una bona pràctica."})})]})}const u0="_grid_vw4xf_1",d0="_card_vw4xf_15",p0="_cardTitle_vw4xf_37",m0="_blue_vw4xf_53",f0="_good_vw4xf_71",h0="_bad_vw4xf_91",Oi={grid:u0,card:d0,cardTitle:p0,blue:m0,good:f0,bad:h0};function Q({title:e,variant:t="blue",children:n}){return r.jsxs("div",{className:`${Oi.card} ${Oi[t]}`,children:[r.jsx("h3",{className:Oi.cardTitle,children:e}),n]})}function he({children:e}){return r.jsx("div",{className:Oi.grid,children:e})}const g0="_grid_dh0in_1",x0="_card_dh0in_15",v0="_cardTitle_dh0in_41",y0="_blue_dh0in_55",b0="_yellow_dh0in_63",j0="_green_dh0in_71",S0="_pink_dh0in_79",w0="_gold_dh0in_87",Ii={grid:g0,card:x0,cardTitle:v0,blue:y0,yellow:b0,green:j0,pink:S0,gold:w0};function F({title:e,variant:t="blue",children:n}){return r.jsxs("div",{className:`${Ii.card} ${Ii[t]}`,children:[r.jsx("h4",{className:Ii.cardTitle,children:e}),n]})}function Ne({children:e}){return r.jsx("div",{className:Ii.grid,children:e})}function E0(){return r.jsxs("div",{children:[r.jsx(A,{title:"Operadors"}),r.jsx(k,{variant:"info",children:r.jsx("p",{children:"Els operadors són símbols que permeten realitzar càlculs i comparacions en Java. Es divideixen en diverses categories: aritmètics (suma, resta), de comparació (major, menor, igual), lògics (&&, ||, !), d'assignació (=, +=). N'hi ha més però per ara això és el principal."})}),r.jsx(ge,{headers:["Nom","Representació","Sintaxi"],rows:[{group:"Aritmètics"},{cells:["Suma","+","a + b"]},{cells:["Resta","-","a - b"]},{cells:["Multiplicació","*","a * b"]},{cells:["Divisió","/","a / b"]},{cells:["Mòdul (residu)","%","a % b"]},{cells:["Increment","++","a++ / ++a"]},{cells:["Decrement","--","a-- / --a"]},{group:"Comparació"},{cells:["Igual a","==","a == b"]},{cells:["Distint de","!=","a != b"]},{cells:["Major que",">","a > b"]},{cells:["Menor que","<","a < b"]},{cells:["Major o igual que",">=","a >= b"]},{cells:["Menor o igual que","<=","a <= b"]},{group:"Lògics"},{cells:["AND","&&","a && b"]},{cells:["OR","||","a || b"]},{cells:["NOT","!","!a"]},{group:"Assignació"},{cells:["Assignació","=","x = 5"]},{cells:["A. amb suma","+=","x += 3"]},{cells:["A. amb resta","-=","x -= 3"]},{cells:["A. amb multiplicació","*=","x *= 3"]},{cells:["A. amb divisió","/=","x /= 3"]}]}),r.jsx(A,{title:"Molt Important"}),r.jsx(k,{variant:"explanation",children:r.jsxs("p",{children:["L'operador ",r.jsx("strong",{children:"="})," serveix per assignar un valor a una variable, mentre que"," ",r.jsx("strong",{children:"=="})," s'usa per comparar si dos valors són iguals."]})}),r.jsxs(he,{children:[r.jsxs(Q,{title:"Operador =",variant:"blue",children:[r.jsxs("p",{children:["Serveix per ",r.jsx("strong",{children:"assignar"})," un valor a una variable."]}),r.jsx(w,{code:"int x = 5;"})]}),r.jsxs(Q,{title:"Operador ==",variant:"blue",children:[r.jsxs("p",{children:["S'usa per ",r.jsx("strong",{children:"comparar"})," si dos valors són iguals."]}),r.jsx(w,{code:"if (x == 5)"})]})]}),r.jsx(k,{variant:"info",children:r.jsxs("p",{children:["En el cas de tipus primitius (int, double, boolean, char, etc.), ",r.jsx("strong",{children:"=="})," compara directament el valor."]})}),r.jsxs(k,{variant:"warning",title:"Strings i objectes",children:[r.jsxs("p",{children:["Si es tracta de String (o altres objectes), en Java no s'ha d'usar == per comparar contingut, sinó ",r.jsx("strong",{children:"equals()"})," perquè:"]}),r.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px"},children:[r.jsx("li",{children:"== compara si les dues referències apunten al mateix objecte en memòria, no si el text és el mateix."}),r.jsx("li",{children:"equals() compara el contingut dels Strings (caràcter per caràcter)."})]})]}),r.jsx(A,{title:"Operadors Lògics"}),r.jsx(k,{variant:"info",children:r.jsx("p",{children:"Tenint això en ment, anem a explicar i donar exemples:"})}),r.jsx(w,{label:"Variables d'exemple",code:`boolean a = true;
boolean b = true;
int c = 2;
int d = 2;`}),r.jsxs(Ne,{children:[r.jsxs(F,{title:"AND (&&)",variant:"blue",children:[r.jsxs("p",{children:["Retorna TRUE únicament quan ",r.jsx("strong",{children:"AMBDUES"})," expressions/valors són TRUE"]}),r.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px",listStyle:"none"},children:[r.jsx("li",{children:"(a && b) → com ambdues són true, el resultat és true."}),r.jsx("li",{children:"(a && b) && (c == d) → com ambdues expressions són true, aleshores (true && true) → true."}),r.jsx("li",{children:"(a && b) && (c > d) → com l'expressió de la dreta és false, aleshores (true && false) → false."})]})]}),r.jsxs(F,{title:"OR (||)",variant:"yellow",children:[r.jsxs("p",{children:["Al contrari que el AND, retorna TRUE si ",r.jsx("strong",{children:"AL MENYS UNA"})," expressió té valor TRUE"]}),r.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px",listStyle:"none"},children:[r.jsx("li",{children:"(a || b) → com almenys una és true, el resultat és true."}),r.jsx("li",{children:"(a || false) → com a és true, el resultat és true."}),r.jsx("li",{children:"(false || false) → com cap és true, el resultat és false."}),r.jsx("li",{children:"(c == d || c > d) → (true || false) → true."})]})]}),r.jsx(F,{title:"NOT (!)",variant:"pink",children:r.jsx("p",{children:"Inverteix el valor d'una expressió booleana."})})]})]})}function C0(){return r.jsxs("div",{children:[r.jsx(A,{title:"Sintaxi de Java"}),r.jsx(k,{variant:"info",children:r.jsx("p",{children:"La sintaxi de Java és estructurada i orientada a objectes, heretada en gran part de C++. A continuació estan les estructures fonamentals del llenguatge: condicionals i bucles i, juntament amb la seva respectiva sintaxi per escriure codi clar i organitzat."})}),r.jsx(ge,{headers:["Nom","Paraula reservada","Sintaxi"],rows:[{cells:["Variable","tipus","tipus variable = valor"]},{cells:["Constant","final","final tipus constant = valor"]},{cells:["Condicional if","if","if (condició) { }"]},{cells:["Condicional else if","else if","else if (altra_condició) { }"]},{cells:["Condicional else","else","else { }"]},{cells:["Bucle for","for","for (inicialització; condició; increment) { }"]},{cells:["Bucle for each","for","for (element : col·lecció) { }"]},{cells:["Bucle while","while","while (condició) { }"]},{cells:["Bucle do while","do while","do { } while (condició)"]},{cells:["Switch","switch","switch (variable) { case valor: }"]},{cells:["Mètode principal","main","public static void main (String[] args) { }"]},{cells:["Sentència break","break","break"]},{cells:["Sentència continue","continue","continue"]},{cells:["Retorn","return","return valor"]}]}),r.jsx(k,{variant:"explanation",title:"Extra",children:r.jsx("p",{children:"Un programa no és més que una seqüència d'instruccions que s'executen en ordre de dalt cap avall, llevat que utilitzem estructures que canvien aquest flux."})})]})}function k0(){return r.jsxs("div",{children:[r.jsx(A,{title:'Estructures condicionals → "fer preguntes"'}),r.jsx(k,{variant:"info",children:r.jsx("p",{children:"Utilitzem una estructura condicional quan el programa ha de prendre decisions."})}),r.jsxs(F,{title:"Exemple vida real",variant:"blue",children:[r.jsx("p",{children:"Si plou,"}),r.jsx("p",{children:"porto paraigua."}),r.jsx("p",{children:"Si no,"}),r.jsx("p",{children:"no me'l porto."})]}),r.jsxs(F,{title:"Esquema mental",variant:"yellow",children:[r.jsx("p",{children:"SI (condició és verdadera) → faig alguna cosa"}),r.jsx("p",{children:"SI NO → faig una altra cosa"})]}),r.jsx(w,{label:"En codi",code:`if (plou) {
    portoParagua();
} else {
    noElPorto();
}`}),r.jsx(A,{title:"Cas amb més d'una pregunta (else if)"}),r.jsxs(F,{title:"Esquema mental",variant:"green",children:[r.jsx("p",{children:"Si plou → paraigua"}),r.jsx("p",{children:"Si neva → abric"}),r.jsx("p",{children:"Si no → res especial"})]}),r.jsx(w,{label:"En codi",code:`if (plou) {
    portoParagua();
} else if (neva) {
    portoAbric();
} else {
    noFaigRes();
}`}),r.jsx(A,{title:"Cas on una pregunta depèn d'una altra"}),r.jsx(k,{variant:"explanation",children:r.jsx("p",{children:"A destacar aquí que el flux va en ordre, primer avalua la primera condició, després la següent, que no depèn de la primera, és a dir, en cas de necessitar que la primera pregunta sigui TRUE perquè avaluï la següent, estaríem parlant d'estructures niuades."})}),r.jsxs(F,{title:"Esquema mental niuat",variant:"pink",children:[r.jsx("p",{children:"Si plou →"}),r.jsx("p",{style:{marginLeft:"20px"},children:"Si tinc paraigua → porto paraigua"}),r.jsx("p",{style:{marginLeft:"20px"},children:"Si no → espero que deixi de ploure"}),r.jsx("p",{children:"Si no → no porto paraigua"})]}),r.jsx(w,{label:"En codi",code:`if (plou) {
    if (paragua) {
        portoParagua();
    } else {
        esperar();
    }
} else {
    noPortoParagua();
}`})]})}function R0(){return r.jsxs("div",{children:[r.jsx(A,{title:`Switch → "menú d'opcions"`}),r.jsx(k,{variant:"info",children:r.jsx("p",{children:"Utilitzem switch quan tenim diverses opcions possibles i només una pot ser la correcta."})}),r.jsxs(F,{title:"Exemple vida real",variant:"blue",children:[r.jsx("p",{children:"Entro a un restaurant i trio:"}),r.jsx("p",{children:"1 → Pizza"}),r.jsx("p",{children:"2 → Amanida"}),r.jsx("p",{children:"3 → Pasta"})]}),r.jsx(F,{title:"Esquema mental",variant:"yellow",children:r.jsx("p",{children:"SEGONS l'opció que triïs → executo una cosa o una altra"})}),r.jsx(w,{label:"En codi",code:`switch (opcio) {
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
}`}),r.jsx(k,{variant:"explanation",children:r.jsx("p",{children:"És com anar directe al gra: si coincideix l'opció, s'executa aquest bloc."})})]})}function L0(){return r.jsxs("div",{children:[r.jsx(A,{title:'Bucles → "repetir mentre alguna cosa sigui cert"'}),r.jsx(k,{variant:"info",children:r.jsx("p",{children:"Utilitzem estructures de repetició quan volem que el programa repeteixi alguna cosa moltes vegades, ja sigui per imprimir, buscar o recórrer."})}),r.jsx(k,{variant:"warning",title:"Si la condició és false des del principi, no entra mai al bucle!!!",children:r.jsx("p",{children:"Recorda que la condició controla l'entrada al bucle. Si ja és falsa abans de començar, el codi del bucle mai s'executarà."})}),r.jsx(A,{title:'while → "repeteix mentre es compleixi la condició"'}),r.jsx(k,{variant:"info",children:r.jsx("p",{children:"Mentre no introdueixi la contrasenya correcta, segueix preguntant."})}),r.jsxs(F,{title:"Esquema mental",variant:"blue",children:[r.jsx("p",{children:"MENTRE (condició sigui true) → repeteixo"}),r.jsx("p",{children:"Quan sigui false → surto del bucle"})]}),r.jsx(w,{label:"En codi",code:`while (!passwordCorrecta) {
    demanarPassword();
}`}),r.jsx(A,{title:'do while → "fes-ho almenys una vegada"'}),r.jsx(k,{variant:"info",children:r.jsx("p",{children:"Pregunto la contrasenya almenys una vegada."})}),r.jsx(F,{title:"Esquema mental",variant:"yellow",children:r.jsx("p",{children:"FAIG → comprovo → si segueix sent true → repeteixo"})}),r.jsx(w,{label:"En codi",code:`do {
    demanarPassword();
} while (!passwordCorrecta);`}),r.jsx(A,{title:'for → "repeteix un número fix de vegades"'}),r.jsx(k,{variant:"info",children:r.jsx("p",{children:"El bucle for s'utilitza quan saps exactament quantes vegades vols repetir alguna cosa. És especialment útil per recórrer col·leccions o fer un número determinat d'iteracions."})}),r.jsx(F,{title:"Esquema mental",variant:"green",children:r.jsx("p",{children:"PER (des d'un valor inicial; mentre es compleixi una condició; incrementant) → repeteixo"})}),r.jsx(w,{label:"En codi",code:`for (int i = 1; i <= 10; i++) {
    System.out.println(i);
}
// Imprimeix números de l'1 al 10`}),r.jsx(k,{variant:"explanation",children:r.jsx("p",{children:"El bucle for té tres parts separades per punt i coma: la inicialització (on comença), la condició (fins quan continua), i l'increment (com avança en cada iteració)."})}),r.jsxs(k,{variant:"info",title:"El valor TRUE controla tot",children:[r.jsx("p",{children:"Tant en condicions com en bucles:"}),r.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px"},children:[r.jsx("li",{children:"Si la condició és true → entra."}),r.jsx("li",{children:"Si la condició és false → no entra o surt."}),r.jsx("li",{children:"Si la condició és false des del principi, el programa salta aquesta estructura i segueix amb el següent o acaba."})]})]}),r.jsx(A,{title:"Resum"}),r.jsx(ge,{headers:["Estructura","Per a què serveix","Exemple mental"],rows:[{cells:["if / else","Prendre decisions",'"Si passa això, faig això"']},{cells:["switch","Triar una opció entre diverses",`"Menú d'opcions"`]},{cells:["while","Repetir mentre alguna cosa sigui cert",'"Mentre no acabi, segueixo"']},{cells:["do while","Repetir almenys una vegada",'"Pregunto mínim una vegada"']},{cells:["for","Repetir un número fix de vegades",`"De l'1 al 10 faig això"`]}]})]})}function A0(){return r.jsxs("div",{children:[r.jsx(A,{title:"Modificadors d'accés"}),r.jsx(k,{variant:"info",children:r.jsx("p",{children:"Els modificadors d'accés controlen la visibilitat de classes, mètodes i atributs en Java. Determinen qui pot accedir a cada element del codi."})}),r.jsx(ge,{headers:["Nom","Paraula reservada","Descripció"],rows:[{cells:["public","public","Accessible des de qualsevol altra classe en qualsevol paquet."]},{cells:["private","private","Accessible només des de la classe en la qual va ser declarat."]},{cells:["protected","protected","Accessible des del mateix paquet i subclasses."]},{cells:["default","(sense paraula)","Per defecte. Accessible per a les classes del mateix paquet."]}]}),r.jsxs(Ne,{children:[r.jsxs(F,{title:"public",variant:"green",children:[r.jsxs("p",{children:["Accessible des de ",r.jsx("strong",{children:"qualsevol lloc"}),"."]}),r.jsx(w,{code:"public int edat = 25;"})]}),r.jsxs(F,{title:"private",variant:"pink",children:[r.jsxs("p",{children:["Accessible només dins la ",r.jsx("strong",{children:"mateixa classe"}),"."]}),r.jsx(w,{code:'private String nom = "Joan";'})]}),r.jsxs(F,{title:"protected",variant:"yellow",children:[r.jsxs("p",{children:["Accessible dins el ",r.jsx("strong",{children:"paquet i subclasses"}),"."]}),r.jsx(w,{code:"protected double salari = 1500.0;"})]}),r.jsxs(F,{title:"default (sense paraula)",variant:"blue",children:[r.jsxs("p",{children:["Accessible només dins el ",r.jsx("strong",{children:"mateix paquet"}),"."]}),r.jsx(w,{code:"int comptador = 0;"})]})]})]})}const M0="_button_1snnp_1",_0="_secondary_1snnp_47",N0="_small_1snnp_67",xs={button:M0,secondary:_0,small:N0};function Mn({children:e,onClick:t,variant:n,size:a,...i}){const l=[xs.button,n==="secondary"&&xs.secondary,a==="small"&&xs.small].filter(Boolean).join(" ");return r.jsx("button",{className:l,onClick:t,...i,children:e})}const P0="_container_cd20o_1",T0="_title_cd20o_17",O0="_arrayContainer_cd20o_33",I0="_cell_cd20o_53",F0="_cellValue_cd20o_69",D0="_cellIndex_cd20o_115",z0="_controls_cd20o_131",B0="_info_cd20o_205",mr={container:P0,title:T0,arrayContainer:O0,cell:I0,cellValue:F0,cellIndex:D0,controls:z0,info:B0};function ho(){return Math.floor(Math.random()*100)}function q0(e){return Array.from({length:e},()=>ho())}function U0(){const[e,t]=C.useState(()=>q0(5)),n=()=>{t(l=>l.map(()=>ho()))},a=()=>{e.length<10&&t(l=>[...l,ho()])},i=()=>{e.length>1&&t(l=>l.slice(0,-1))};return r.jsxs("div",{className:mr.container,children:[r.jsx("div",{className:mr.title,children:"Array Interactiu 1D"}),r.jsx("div",{className:mr.arrayContainer,children:e.map((l,s)=>r.jsxs("div",{className:mr.cell,children:[r.jsx("div",{className:mr.cellValue,children:l}),r.jsxs("div",{className:mr.cellIndex,children:["[",s,"]"]})]},`${s}-${l}`))}),r.jsxs("div",{className:mr.controls,children:[r.jsx(Mn,{onClick:n,children:"Canviar Valors"}),r.jsx(Mn,{onClick:a,variant:"secondary",disabled:e.length>=10,children:"Afegir Element"}),r.jsx(Mn,{onClick:i,variant:"secondary",disabled:e.length<=1,children:"Eliminar Ultim"})]}),r.jsxs("div",{className:mr.info,children:["int[] array = new int[",e.length,"];   // Longitud: ",e.length]})]})}const $0=`// Declaracio d'un array d'enters
int[] numeros = new int[5];

// Declaracio amb valors inicials
int[] notes = {7, 9, 5, 8, 6};

// Declaracio de Strings
String[] noms = {"Anna", "Marc", "Laia"};`,H0=`int[] notes = {7, 9, 5, 8, 6};

// Accedir a un element (index comenca en 0)
System.out.println(notes[0]); // 7
System.out.println(notes[2]); // 5

// Modificar un element
notes[1] = 10;
System.out.println(notes[1]); // 10

// Longitud de l'array
System.out.println(notes.length); // 5`,V0=`int[] numeros = {10, 20, 30, 40, 50};

// Recorregut amb for classic
for (int i = 0; i < numeros.length; i++) {
    System.out.println("Index " + i + ": " + numeros[i]);
}

// Recorregut amb for-each
for (int num : numeros) {
    System.out.println("Valor: " + num);
}`,G0=`public class ExempleArrays {
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
}`;function W0(){return r.jsxs("div",{children:[r.jsx(A,{title:"Arrays Unidimensionals (1D)"}),r.jsx(k,{variant:"info",title:"Què és un Array?",children:r.jsxs("p",{children:["Un ",r.jsx("strong",{children:"array"})," és una estructura de dades que permet emmagatzemar múltiples valors del mateix tipus en una sola variable. Cada element té un",r.jsx("strong",{children:" índex"})," que comença en 0 i permet accedir directament a qualsevol posició."]})}),r.jsx(U0,{}),r.jsx(k,{variant:"explanation",title:"Característiques dels Arrays",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Mida fixa:"})," un cop creat, la mida no pot canviar."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Índex base 0:"})," el primer element és a la posició 0."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Tipus homogeni:"})," tots els elements són del mateix tipus."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Accés directe:"})," es pot accedir a qualsevol element pel seu índex en temps constant."]})]})}),r.jsx(w,{code:$0,label:"Declaració i inicialització",showLineNumbers:!0}),r.jsx(ge,{headers:["Operació","Sintaxi","Exemple"],rows:[{cells:["Declarar buit","tipus[] nom = new tipus[mida]","int[] nums = new int[5]"]},{cells:["Declarar amb valors","tipus[] nom = {v1, v2, ...}","int[] nums = {1, 2, 3}"]},{cells:["Accedir element","nom[index]","nums[0] // primer element"]},{cells:["Modificar element","nom[index] = valor","nums[2] = 99"]},{cells:["Longitud","nom.length","nums.length // 3"]}]}),r.jsx(w,{code:H0,label:"Accés i modificació d'elements",showLineNumbers:!0}),r.jsx(k,{variant:"warning",title:"ArrayIndexOutOfBoundsException",children:r.jsxs("p",{children:["Si intentes accedir a un índex fora del rang (negatiu o major/igual que la longitud), Java llençarà una excepció ",r.jsx("code",{children:"ArrayIndexOutOfBoundsException"}),". Sempre comprova que l'índex estigui dins dels límits!"]})}),r.jsx(w,{code:V0,label:"Recórrer un Array",showLineNumbers:!0}),r.jsx(k,{variant:"success",title:"Exemple complet: Temperatures",children:r.jsx("p",{children:"Un exemple pràctic que calcula la mitjana i el màxim d'un array de temperatures setmanals."})}),r.jsx(w,{code:G0,label:"Exemple: Càlcul de mitjana i màxim",showLineNumbers:!0})]})}const J0="_container_1u9g6_1",Q0="_title_1u9g6_17",Y0="_matrixWrapper_1u9g6_33",K0="_matrix_1u9g6_33",Z0="_cell_1u9g6_57",X0="_cellActive_1u9g6_107",eS="_cellSelected_1u9g6_125",tS="_cellIndex_1u9g6_141",rS="_controls_1u9g6_157",nS="_info_1u9g6_171",Bt={container:J0,title:Q0,matrixWrapper:Y0,matrix:K0,cell:Z0,cellActive:X0,cellSelected:eS,cellIndex:tS,controls:rS,info:nS},Ef=4,Cf=4;function aS(){return Math.floor(Math.random()*100)}function Ed(){return Array.from({length:Ef},()=>Array.from({length:Cf},()=>aS()))}function iS(){const[e,t]=C.useState(()=>Ed()),[n,a]=C.useState(new Set),[i,l]=C.useState(null),s=C.useRef([]),o=C.useCallback(()=>{s.current.forEach(d=>clearTimeout(d)),s.current=[]},[]),c=()=>{o(),a(new Set),l(null),t(Ed())},u=()=>{o(),a(new Set),l(null);const d=Math.min(Ef,Cf);for(let f=0;f<d;f++){const y=setTimeout(()=>{a(g=>{const v=new Set(g);return v.add(`${f}-${f}`),v})},f*200);s.current.push(y)}},m=(d,f)=>{l(`${d}-${f}`)};return r.jsxs("div",{className:Bt.container,children:[r.jsx("div",{className:Bt.title,children:"Matriu Interactiva 4x4"}),r.jsx("div",{className:Bt.matrixWrapper,children:r.jsx("div",{className:Bt.matrix,children:e.map((d,f)=>d.map((y,g)=>{const v=`${f}-${g}`,b=n.has(v),h=i===v;let p=Bt.cell;return b&&(p+=` ${Bt.cellActive}`),h&&(p+=` ${Bt.cellSelected}`),r.jsxs("div",{className:p,onClick:()=>m(f,g),children:[r.jsx("span",{children:y}),r.jsxs("span",{className:Bt.cellIndex,children:["[",f,"][",g,"]"]})]},v)}))})}),r.jsxs("div",{className:Bt.controls,children:[r.jsx(Mn,{onClick:u,children:"Ressaltar Diagonal"}),r.jsx(Mn,{onClick:c,variant:"secondary",children:"Nous Valors"})]}),r.jsx("div",{className:Bt.info,children:i?`matriu[${i.replace("-","][")}] = ${e[parseInt(i.split("-")[0])][parseInt(i.split("-")[1])]}`:"int[][] matriu = new int[4][4];"})]})}const lS=`// Declaracio d'una matriu 3x4
int[][] matriu = new int[3][4];

// Declaracio amb valors inicials
int[][] notes = {
    {7, 8, 9},    // Fila 0
    {6, 5, 8},    // Fila 1
    {9, 7, 10}    // Fila 2
};`,sS=`int[][] matriu = {
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
System.out.println("Columnes: " + matriu[0].length);   // 3`,oS=`int[][] matriu = {
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
}`,cS=`// Recorrer la diagonal principal
// (nomes si la matriu es quadrada)
for (int i = 0; i < matriu.length; i++) {
    System.out.println("Diagonal[" + i + "]: " + matriu[i][i]);
}`,uS=`public class ExempleMatriu {
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
}`;function dS(){return r.jsxs("div",{children:[r.jsx(A,{title:"Arrays Bidimensionals (Matrius)"}),r.jsx(k,{variant:"info",title:"Què és una Matriu?",children:r.jsxs("p",{children:["Una ",r.jsx("strong",{children:"matriu"})," (o array 2D) és un array d'arrays. Es pot pensar com una taula amb ",r.jsx("strong",{children:"files"})," i ",r.jsx("strong",{children:"columnes"}),". Cada element s'identifica amb dos índexos: ",r.jsx("code",{children:"[fila][columna]"}),"."]})}),r.jsx(iS,{}),r.jsx(k,{variant:"explanation",title:"Estructura d'una Matriu",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Files:"})," cada fila és un array independent."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Columnes:"})," cada posició dins d'una fila."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Accés:"})," ",r.jsx("code",{children:"matriu[fila][columna]"})," per llegir o escriure."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Mida:"})," ",r.jsx("code",{children:"matriu.length"})," dona el nombre de files, ",r.jsx("code",{children:"matriu[0].length"})," dona les columnes."]})]})}),r.jsx(w,{code:lS,label:"Declaració de matrius",showLineNumbers:!0}),r.jsx(ge,{headers:["Operació","Sintaxi","Descripció"],rows:[{cells:["Declarar buida","tipus[][] nom = new tipus[files][cols]","Crea matriu amb zeros"]},{cells:["Declarar amb valors","tipus[][] nom = {{...}, {...}}","Inicialitza amb valors"]},{cells:["Accedir element","nom[fila][col]","Llegeix un valor concret"]},{cells:["Nombre files","nom.length","Retorna total de files"]},{cells:["Nombre columnes","nom[0].length","Retorna columnes de la fila 0"]}]}),r.jsx(w,{code:sS,label:"Accés i modificació d'elements",showLineNumbers:!0}),r.jsx(w,{code:oS,label:"Recorregut complet de la matriu",showLineNumbers:!0}),r.jsx(k,{variant:"success",title:"Diagonal principal",children:r.jsxs("p",{children:["En una matriu quadrada (NxN), la ",r.jsx("strong",{children:"diagonal principal"})," són els elements on l'índex de fila és igual a l'índex de columna: ",r.jsx("code",{children:"matriu[i][i]"}),"."]})}),r.jsx(w,{code:cS,label:"Recórrer la diagonal",showLineNumbers:!0}),r.jsx(k,{variant:"info",title:"Exemple pràctic: Notes d'alumnes",children:r.jsx("p",{children:"Un cas d'ús habitual és guardar les notes de diversos alumnes en diverses assignatures, on cada fila representa un alumne i cada columna una assignatura."})}),r.jsx(w,{code:uS,label:"Exemple: Mitjana per alumne",showLineNumbers:!0})]})}const pS="_container_4hbij_1",mS="_title_4hbij_17",fS="_functionsGrid_4hbij_33",hS="_functionBox_4hbij_47",gS="_functionName_4hbij_75",xS="_functionDesc_4hbij_91",vS="_inputGroup_4hbij_105",yS="_input_4hbij_105",bS="_executeBtn_4hbij_165",jS="_output_4hbij_211",SS="_outputLabel_4hbij_237",wS="_outputValue_4hbij_247",ES="_outputEmpty_4hbij_257",ee={container:pS,title:mS,functionsGrid:fS,functionBox:hS,functionName:gS,functionDesc:xS,inputGroup:vS,input:yS,executeBtn:bS,output:jS,outputLabel:SS,outputValue:wS,outputEmpty:ES};function CS(){const[e,t]=C.useState(""),[n,a]=C.useState(""),i=()=>{t("Hola Mon!")},l=()=>{a(String(Math.floor(Math.random()*100)))};return r.jsxs("div",{className:ee.container,children:[r.jsx("div",{className:ee.title,children:"Demo: Funcions sense Parametres"}),r.jsxs("div",{className:ee.functionsGrid,children:[r.jsxs("div",{className:ee.functionBox,children:[r.jsx("div",{className:ee.functionName,children:"saludar()"}),r.jsx("div",{className:ee.functionDesc,children:"Retorna un missatge de salutacio fix. No rep cap parametre."}),r.jsx("button",{className:ee.executeBtn,onClick:i,children:"Executar saludar()"}),r.jsx("div",{className:ee.output,style:{marginTop:12},children:e?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:ee.outputLabel,children:"Resultat: "}),r.jsxs("span",{className:ee.outputValue,children:['"',e,'"']})]}):r.jsx("span",{className:ee.outputEmpty,children:"Prem el boto per executar..."})})]}),r.jsxs("div",{className:ee.functionBox,children:[r.jsx("div",{className:ee.functionName,children:"obtenirNumeroAleatori()"}),r.jsx("div",{className:ee.functionDesc,children:"Genera i retorna un numero aleatori entre 0 i 99."}),r.jsx("button",{className:ee.executeBtn,onClick:l,children:"Executar obtenirNumeroAleatori()"}),r.jsx("div",{className:ee.output,style:{marginTop:12},children:n?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:ee.outputLabel,children:"Resultat: "}),r.jsx("span",{className:ee.outputValue,children:n})]}):r.jsx("span",{className:ee.outputEmpty,children:"Prem el boto per executar..."})})]})]})]})}function kS(){const[e,t]=C.useState(""),[n,a]=C.useState(""),[i,l]=C.useState(""),[s,o]=C.useState(""),[c,u]=C.useState(""),m=()=>{const f=parseFloat(e),y=parseFloat(n);if(isNaN(f)||isNaN(y)){l("Introdueix dos numeros valids");return}l(String(f+y))},d=()=>{if(!s.trim()){u("Introdueix un nom");return}u(`Hola, ${s.trim()}! Benvingut/da!`)};return r.jsxs("div",{className:ee.container,children:[r.jsx("div",{className:ee.title,children:"Demo: Funcions amb Parametres"}),r.jsxs("div",{className:ee.functionsGrid,children:[r.jsxs("div",{className:ee.functionBox,children:[r.jsx("div",{className:ee.functionName,children:"sumar(int a, int b)"}),r.jsx("div",{className:ee.functionDesc,children:"Rep dos numeros com a parametres i retorna la seva suma."}),r.jsxs("div",{className:ee.inputGroup,children:[r.jsx("input",{type:"number",className:ee.input,placeholder:"a",value:e,onChange:f=>t(f.target.value)}),r.jsx("input",{type:"number",className:ee.input,placeholder:"b",value:n,onChange:f=>a(f.target.value)}),r.jsx("button",{className:ee.executeBtn,onClick:m,children:"Executar"})]}),r.jsx("div",{className:ee.output,children:i?r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:ee.outputLabel,children:["sumar(",e,", ",n,") = "]}),r.jsx("span",{className:ee.outputValue,children:i})]}):r.jsx("span",{className:ee.outputEmpty,children:"Introdueix valors i executa..."})})]}),r.jsxs("div",{className:ee.functionBox,children:[r.jsx("div",{className:ee.functionName,children:"saludarPersona(String nom)"}),r.jsx("div",{className:ee.functionDesc,children:"Rep un nom com a parametre i retorna un missatge personalitzat."}),r.jsxs("div",{className:ee.inputGroup,children:[r.jsx("input",{type:"text",className:ee.input,placeholder:"Nom",value:s,onChange:f=>o(f.target.value)}),r.jsx("button",{className:ee.executeBtn,onClick:d,children:"Executar"})]}),r.jsx("div",{className:ee.output,children:c?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:ee.outputLabel,children:"Resultat: "}),r.jsxs("span",{className:ee.outputValue,children:['"',c,'"']})]}):r.jsx("span",{className:ee.outputEmpty,children:"Introdueix un nom i executa..."})})]})]})]})}function kf({mode:e="no-params"}){return e==="with-params"?r.jsx(kS,{}):r.jsx(CS,{})}const RS=`// Estructura general d'una funció sense paràmetres
static tipusRetorn nomFuncio() {
    // Cos de la funció
    return valor; // Si el tipus no és void
}

// Funció que no retorna res (void)
static void nomFuncio() {
    // Accions
}`,LS=`public class Funcions {
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
}`,AS=`public class GeneradorAleatori {
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
}`;function MS(){return r.jsxs("div",{children:[r.jsx(A,{title:"Funcions sense Paràmetres"}),r.jsx(k,{variant:"info",title:"Què és una Funció?",children:r.jsxs("p",{children:["Una ",r.jsx("strong",{children:"funció"})," (o mètode) és un bloc de codi reutilitzable que realitza una tasca específica. Les funcions ",r.jsx("strong",{children:"sense paràmetres"})," no necessiten rebre cap dada externa per funcionar: fan la seva feina de manera autònoma."]})}),r.jsx(kf,{mode:"no-params"}),r.jsx(k,{variant:"explanation",title:"Avantatges de les funcions",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Reutilització:"})," es poden cridar tantes vegades com calgui."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Organització:"})," el codi queda més net i estructurat."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Manteniment:"})," si cal canviar la lògica, només es modifica en un lloc."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Llegibilitat:"})," el nom de la funció descriu què fa."]})]})}),r.jsx(w,{code:RS,label:"Estructura d'una funció sense paràmetres",showLineNumbers:!0}),r.jsx(ge,{headers:["Concepte","Descripció","Exemple"],rows:[{cells:["static","Permet cridar la funció sense crear un objecte","static void fer()"]},{cells:["Tipus de retorn","Indica què retorna la funció","int, String, void..."]},{cells:["void","La funció no retorna cap valor","static void mostrar()"]},{cells:["return","Retorna un valor i acaba la funció",'return "Hola";']}]}),r.jsx(w,{code:LS,label:"Exemple: Funció saludar()",showLineNumbers:!0}),r.jsx(k,{variant:"warning",title:"void vs tipus de retorn",children:r.jsxs("p",{children:["Si una funció és ",r.jsx("code",{children:"void"}),", no pot tenir ",r.jsx("code",{children:"return"})," amb valor (però pot tenir ",r.jsx("code",{children:"return;"})," per sortir abans). Si té un tipus de retorn (",r.jsx("code",{children:"int"}),", ",r.jsx("code",{children:"String"}),", etc.), ",r.jsx("strong",{children:"obligatòriament"})," ha de retornar un valor d'aquell tipus."]})}),r.jsx(w,{code:AS,label:"Exemple: Funcions sense paràmetres variades",showLineNumbers:!0})]})}const _S=`// Estructura general d'una funció amb paràmetres
static tipusRetorn nomFuncio(tipus param1, tipus param2) {
    // Cos de la funció - utilitza param1 i param2
    return valor;
}

// Exemple concret
static int sumar(int a, int b) {
    return a + b;
}`,NS=`public class OperacionsMatematiques {
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
}`,PS=`public class FuncionsAvancades {
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
}`;function TS(){return r.jsxs("div",{children:[r.jsx(A,{title:"Funcions amb Paràmetres"}),r.jsx(k,{variant:"info",title:"Paràmetres i Arguments",children:r.jsxs("p",{children:["Les funcions amb ",r.jsx("strong",{children:"paràmetres"})," reben dades d'entrada que poden utilitzar dins del seu cos. Els ",r.jsx("strong",{children:"paràmetres"})," es defineixen a la declaració de la funció, i els ",r.jsx("strong",{children:"arguments"})," són els valors concrets que es passen quan es crida la funció."]})}),r.jsx(kf,{mode:"with-params"}),r.jsx(w,{code:_S,label:"Estructura d'una funció amb paràmetres",showLineNumbers:!0}),r.jsx(ge,{headers:["Concepte","Descripció","Exemple"],rows:[{cells:["Paràmetre","Variable declarada a la signatura","(int a, int b)"]},{cells:["Argument","Valor passat en la crida","sumar(5, 3)"]},{cells:["Pas per valor","Java copia el valor del primitiu","int, double, char..."]},{cells:["Pas per referència","Java copia la referència de l'objecte","String, arrays, objectes"]}]}),r.jsx(k,{variant:"explanation",title:"Diferència entre Paràmetre i Argument",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Paràmetre:"}),' és la variable a la definició de la funció. És com un "espai reservat".']}),r.jsxs("li",{children:[r.jsx("strong",{children:"Argument:"})," és el valor real que enviem quan cridem la funció."]}),r.jsxs("li",{children:["Exemple: en ",r.jsx("code",{children:"static int sumar(int a, int b)"}),", ",r.jsx("code",{children:"a"})," i ",r.jsx("code",{children:"b"})," són paràmetres."]}),r.jsxs("li",{children:["Quan cridem ",r.jsx("code",{children:"sumar(5, 3)"}),", ",r.jsx("code",{children:"5"})," i ",r.jsx("code",{children:"3"})," són arguments."]})]})}),r.jsx(w,{code:NS,label:"Exemples bàsics de funcions amb paràmetres",showLineNumbers:!0}),r.jsx(k,{variant:"warning",title:"Ordre i tipus dels arguments",children:r.jsxs("p",{children:["Quan cridem una funció, els arguments han de coincidir en ",r.jsx("strong",{children:"nombre"}),",",r.jsx("strong",{children:" ordre"})," i ",r.jsx("strong",{children:"tipus"})," amb els paràmetres declarats. Si no, Java donarà un error de compilació."]})}),r.jsx(w,{code:PS,label:"Funcions amb múltiples paràmetres",showLineNumbers:!0})]})}const OS=`public class Exemples {
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
}`,IS=`public class FuncionsAmbRetorn {
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
}`,FS=`static int valorAbsolut(int num) {
    if (num < 0) {
        return -num;    // Surt de la funció i retorna -num
    }
    return num;         // Surt de la funció i retorna num
}

// ATENCIÓ: després d'un return, el codi NO s'executa
static int exemple() {
    return 42;
    // System.out.println("Això mai s'executarà"); // ERROR de compilació!
}`,DS=`public class SenseParametres {
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
}`,zS=`public class AmbParametres {
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
}`,BS=`public class ExempleVarargs {
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
}`,qS=`public class Calculadora {
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
}`,US=`public class Comptador {
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
}`,$S=`// BONS noms de mètodes: verb + nom, camelCase
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
public boolean check(String s) { ... }         // Massa genèric, paràmetre poc clar`;function HS(){return r.jsxs("div",{children:[r.jsx(A,{title:"Tipus de Funcions (Mètodes) en Java"}),r.jsx(k,{variant:"info",title:"Per què classificar les funcions?",children:r.jsxs("p",{children:["Les funcions (en Java es diuen ",r.jsx("strong",{children:"mètodes"}),") es poden classificar de diverses maneres: segons si ",r.jsx("strong",{children:"retornen un valor"})," o no, segons si reben ",r.jsx("strong",{children:"paràmetres"}),", i segons si són ",r.jsx("strong",{children:"estàtiques"})," o d'instància. Entendre aquestes classificacions ens ajuda a escriure codi més clar i organitzat."]})}),r.jsx(A,{title:"Classificació per Tipus de Retorn"}),r.jsx(k,{variant:"explanation",children:r.jsxs("p",{children:["La primera gran distinció és si la funció ",r.jsx("strong",{children:"retorna un valor"})," al codi que l'ha cridat, o si simplement ",r.jsx("strong",{children:"executa una acció"})," sense retornar res."]})}),r.jsxs(he,{children:[r.jsxs(Q,{title:"void - No retorna res (Procediment)",variant:"blue",children:[r.jsxs("p",{style:{marginBottom:"10px"},children:["Les funcions ",r.jsx("code",{children:"void"})," executen una acció (imprimir, modificar dades...) però ",r.jsx("strong",{children:"no retornen cap valor"}),". No pots guardar el seu resultat en una variable."]}),r.jsx(w,{code:`static void saludar() {
    System.out.println("Hola!");
    // No hi ha return amb valor
}

// Crida:
saludar(); // Imprimeix "Hola!"
// int x = saludar(); // ERROR!`})]}),r.jsxs(Q,{title:"Amb retorn - Retorna un valor",variant:"good",children:[r.jsxs("p",{style:{marginBottom:"10px"},children:["Les funcions amb tipus de retorn (",r.jsx("code",{children:"int"}),", ",r.jsx("code",{children:"String"}),",",r.jsx("code",{children:" boolean"}),", ",r.jsx("code",{children:"double"}),"...) ",r.jsx("strong",{children:"retornen un valor"})," que es pot guardar en una variable."]}),r.jsx(w,{code:`static int sumar(int a, int b) {
    return a + b;
}

// Crida:
int resultat = sumar(5, 3);
System.out.println(resultat); // 8`})]})]}),r.jsx(w,{label:"Exemples de funcions void (procediments)",code:OS,showLineNumbers:!0}),r.jsx(w,{label:"Exemples de funcions amb retorn",code:IS,showLineNumbers:!0}),r.jsx(A,{title:"La Paraula Clau return"}),r.jsx(k,{variant:"info",title:"Com funciona return?",children:r.jsxs("p",{children:["La paraula clau ",r.jsx("code",{children:"return"})," fa dues coses: ",r.jsx("strong",{children:"1)"})," finalitza l'execució de la funció immediatament, i ",r.jsx("strong",{children:"2)"})," retorna el valor especificat al codi que ha cridat la funció. Després d'un ",r.jsx("code",{children:"return"}),", cap línia de codi dins la funció s'executarà."]})}),r.jsx(w,{label:"Comportament de return",code:FS,showLineNumbers:!0}),r.jsx(k,{variant:"warning",title:"Regles importants de return",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:["Una funció amb tipus de retorn (no void) ",r.jsx("strong",{children:"ha de tenir"})," un ",r.jsx("code",{children:"return"})," en tots els camins possibles."]}),r.jsxs("li",{children:["El valor retornat ha de ser del ",r.jsx("strong",{children:"mateix tipus"})," que el declarat (o compatible)."]}),r.jsxs("li",{children:["En funcions ",r.jsx("code",{children:"void"}),", pots usar ",r.jsx("code",{children:"return;"})," (sense valor) per sortir anticipadament."]}),r.jsxs("li",{children:["El codi després d'un ",r.jsx("code",{children:"return"})," és ",r.jsx("strong",{children:"inassolible"})," i dona error de compilació."]})]})}),r.jsx(A,{title:"Classificació per Paràmetres"}),r.jsx(k,{variant:"explanation",children:r.jsxs("p",{children:["Una altra forma de classificar les funcions és segons si reben ",r.jsx("strong",{children:"dades d'entrada"})," (paràmetres) o no. Els paràmetres permeten que la funció treballi amb valors diferents cada cop que es crida."]})}),r.jsx(w,{label:"Funcions sense paràmetres",code:DS,showLineNumbers:!0}),r.jsx(w,{label:"Funcions amb paràmetres",code:zS,showLineNumbers:!0}),r.jsx(A,{title:"Paràmetres Variables (Varargs)"}),r.jsx(k,{variant:"info",title:"Què són els varargs?",children:r.jsxs("p",{children:["Java permet definir funcions que accepten un ",r.jsx("strong",{children:"nombre variable de paràmetres"})," del mateix tipus. S'utilitza la sintaxi ",r.jsx("code",{children:"tipus... nom"}),". Internament, Java tracta els varargs com un ",r.jsx("strong",{children:"array"}),"."]})}),r.jsx(w,{label:"Exemple de varargs (int... numeros)",code:BS,showLineNumbers:!0}),r.jsx(k,{variant:"warning",title:"Restriccions dels varargs",children:r.jsxs("p",{children:["Els varargs han de ser l'",r.jsx("strong",{children:"últim paràmetre"})," de la funció i només pot haver-n'hi ",r.jsx("strong",{children:"un"})," per funció. Per exemple:",r.jsx("code",{children:" static void exemple(String prefix, int... numeros)"})," és vàlid, però ",r.jsx("code",{children:"static void exemple(int... a, int... b)"})," ",r.jsx("strong",{children:"NO"})," ho és."]})}),r.jsx(A,{title:"Classificació per Accés: static vs Instància"}),r.jsx(k,{variant:"explanation",children:r.jsxs("p",{children:["En Java, els mètodes poden ser ",r.jsx("strong",{children:"estàtics"})," (pertanyen a la classe) o d'",r.jsx("strong",{children:"instància"})," (pertanyen a un objecte concret). Aquesta distinció és fonamental en la Programació Orientada a Objectes."]})}),r.jsxs(he,{children:[r.jsxs(Q,{title:"Mètodes static",variant:"blue",children:[r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px",marginBottom:"10px"},children:[r.jsxs("li",{children:["Pertanyen a la ",r.jsx("strong",{children:"classe"}),", no a un objecte"]}),r.jsxs("li",{children:["Es criden amb ",r.jsx("code",{children:"NomClasse.mètode()"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"No"})," poden accedir a atributs d'instància (no-static)"]}),r.jsx("li",{children:"Ideals per a funcions utilitat (càlculs, conversions...)"})]}),r.jsx(w,{code:`// Exemples de Java:
Math.sqrt(16);     // 4.0
Math.max(5, 3);    // 5
Integer.parseInt("42"); // 42`})]}),r.jsxs(Q,{title:"Mètodes d'instància",variant:"good",children:[r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px",marginBottom:"10px"},children:[r.jsxs("li",{children:["Pertanyen a un ",r.jsx("strong",{children:"objecte"})," concret"]}),r.jsxs("li",{children:["Es criden amb ",r.jsx("code",{children:"objecte.mètode()"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Poden"})," accedir a atributs d'instància amb ",r.jsx("code",{children:"this"})]}),r.jsx("li",{children:"Ideals quan el mètode necessita l'estat de l'objecte"})]}),r.jsx(w,{code:`// Exemples:
String nom = "Hola";
nom.length();        // 4
nom.toUpperCase();   // "HOLA"
nom.charAt(0);       // 'H'`})]})]}),r.jsx(w,{label:"Exemple de mètodes static",code:qS,showLineNumbers:!0}),r.jsx(w,{label:"Exemple de mètodes d'instància",code:US,showLineNumbers:!0}),r.jsx(k,{variant:"info",title:"Quan usar static vs instància?",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Usa static"})," quan la funció no depengui de cap atribut d'objecte: funcions matemàtiques, utilitats, conversions, validacions pures."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Usa instància"})," quan la funció necessiti accedir o modificar les dades d'un objecte concret: getters, setters, mètodes que depenguin de l'estat."]}),r.jsxs("li",{children:["Als programes simples amb ",r.jsx("code",{children:"main"}),", solem usar ",r.jsx("code",{children:"static"})," perquè no creem objectes."]}),r.jsx("li",{children:"En POO, la majoria de mètodes són d'instància."})]})}),r.jsx(A,{title:"Nomenclatura: Funció vs Mètode vs Procediment"}),r.jsx(k,{variant:"explanation",title:"Per què tants noms?",children:r.jsxs("p",{children:["En el món de la programació s'utilitzen diferents termes per referir-se a blocs de codi reutilitzables. Depenent del llenguatge i del context, es fan servir noms diferents. En Java, el terme oficial és ",r.jsx("strong",{children:"mètode"}),", però és important conèixer la terminologia general."]})}),r.jsxs(Ne,{children:[r.jsxs(F,{title:"Funció",variant:"blue",children:[r.jsxs("p",{children:["Terme ",r.jsx("strong",{children:"general"})," de programació. És un bloc de codi que rep dades, les processa i ",r.jsx("strong",{children:"retorna un valor"}),"."]}),r.jsx("p",{style:{marginTop:"8px"},children:"Llenguatges: C, Python, JavaScript, etc."}),r.jsx(w,{code:`// Concepte de "funció"
static int sumar(int a, int b) {
    return a + b; // Retorna un valor
}`})]}),r.jsxs(F,{title:"Procediment",variant:"yellow",children:[r.jsxs("p",{children:["Terme general per a un bloc de codi que executa una acció però ",r.jsx("strong",{children:"NO retorna cap valor"})," (void)."]}),r.jsx("p",{style:{marginTop:"8px"},children:"Llenguatges: Pascal, Ada, Visual Basic (Sub)."}),r.jsx(w,{code:`// Concepte de "procediment"
static void mostrarMenu() {
    System.out.println("1. Jugar");
    System.out.println("2. Sortir");
    // No retorna res
}`})]}),r.jsxs(F,{title:"Mètode",variant:"green",children:[r.jsxs("p",{children:["El nom que Java utilitza per a ",r.jsx("strong",{children:"TOTES"})," les funcions i procediments dins d'una classe. Tant si retornen valor com si no."]}),r.jsx("p",{style:{marginTop:"8px"},children:"Llenguatges: Java, C#, Ruby, etc. (POO)"}),r.jsx(w,{code:`// En Java, TOT són "mètodes"
class Exemple {
    void saludar() { ... }   // Mètode
    int sumar() { ... }      // Mètode
}`})]})]}),r.jsx(k,{variant:"success",title:"Conclusió",children:r.jsxs("p",{children:["En Java, tant les funcions (que retornen valor) com els procediments (void) s'anomenen ",r.jsx("strong",{children:"mètodes"}),`, ja que sempre estan dins d'una classe. A la pràctica, molts programadors diuen "funció" de manera informal, i està perfectament bé. L'important és entendre que en Java, el terme tècnicament correcte és `,r.jsx("strong",{children:"mètode"}),"."]})}),r.jsx(A,{title:"Convencions per Nomenar Mètodes"}),r.jsx(k,{variant:"info",title:"Regles de nomenclatura en Java",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:["Utilitza ",r.jsx("strong",{children:"camelCase"}),": la primera paraula en minúscula, les següents amb majúscula inicial."]}),r.jsxs("li",{children:["Comença amb un ",r.jsx("strong",{children:"verb"})," que descrigui l'acció: ",r.jsx("code",{children:"calcular"}),", ",r.jsx("code",{children:"obtenir"}),", ",r.jsx("code",{children:"mostrar"}),", ",r.jsx("code",{children:"és"}),", ",r.jsx("code",{children:"té"}),"."]}),r.jsxs("li",{children:["Sigues ",r.jsx("strong",{children:"descriptiu"}),": el nom ha d'explicar què fa el mètode."]}),r.jsxs("li",{children:["Per booleans, usa prefixos com ",r.jsx("code",{children:"és"})," o ",r.jsx("code",{children:"té"}),": ",r.jsx("code",{children:"esValid()"}),", ",r.jsx("code",{children:"tePermisos()"}),"."]}),r.jsxs("li",{children:["Getters: ",r.jsx("code",{children:"getNom()"}),", ",r.jsx("code",{children:"getEdat()"}),". Setters: ",r.jsx("code",{children:"setNom()"}),", ",r.jsx("code",{children:"setEdat()"}),"."]})]})}),r.jsx(w,{label:"Bons i mals noms de mètodes",code:$S,showLineNumbers:!0}),r.jsx(A,{title:"Taula Resum de Tipus de Funcions"}),r.jsx(ge,{headers:["Classificació","Tipus","Descripció","Exemple"],rows:[{group:"Per tipus de retorn"},{cells:["Retorn","void (Procediment)","No retorna cap valor","static void saludar() { ... }"]},{cells:["Retorn","Amb retorn (Funció)","Retorna un valor del tipus declarat","static int sumar(int a, int b) { return a + b; }"]},{group:"Per paràmetres"},{cells:["Paràmetres","Sense paràmetres","No rep cap dada d'entrada","static void saludar() { ... }"]},{cells:["Paràmetres","Amb paràmetres","Rep una o més dades d'entrada","static int sumar(int a, int b) { ... }"]},{cells:["Paràmetres","Varargs","Rep un nombre variable de paràmetres","static int sumar(int... nums) { ... }"]},{group:"Per accés (static vs instància)"},{cells:["Accés","static","Pertany a la classe, es crida amb NomClasse.mètode()","static double arrel(double n) { ... }"]},{cells:["Accés","Instància","Pertany a l'objecte, es crida amb objecte.mètode()","public void mostrar() { ... }"]},{group:"Per nomenclatura"},{cells:["Nom","Funció","Retorna un valor (terme general)","int sumar(int a, int b)"]},{cells:["Nom","Procediment","No retorna valor / void (terme general)","void mostrarMenu()"]},{cells:["Nom","Mètode","Nom oficial en Java per a tot","Qualsevol funció/procediment en Java"]}]}),r.jsx(k,{variant:"success",title:"Resum Final",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:["Les funcions ",r.jsx("code",{children:"void"})," executen accions sense retornar valor (procediments)."]}),r.jsxs("li",{children:["Les funcions amb tipus de retorn retornen un valor amb ",r.jsx("code",{children:"return"}),"."]}),r.jsx("li",{children:"Les funcions poden rebre 0, 1, o múltiples paràmetres (inclosos varargs)."}),r.jsxs("li",{children:["Els mètodes ",r.jsx("code",{children:"static"})," pertanyen a la classe; els d'instància pertanyen a l'objecte."]}),r.jsxs("li",{children:["En Java, tot són ",r.jsx("strong",{children:"mètodes"}),', però informalment diem "funció" o "procediment".']}),r.jsxs("li",{children:["Usa ",r.jsx("strong",{children:"camelCase"})," i comença els noms amb un ",r.jsx("strong",{children:"verb"})," descriptiu."]})]})})]})}const VS="_container_1pzke_1",GS="_title_1pzke_17",WS="_demosGrid_1pzke_33",JS="_demoBox_1pzke_45",QS="_demoTitle_1pzke_61",YS="_inputRow_1pzke_75",KS="_label_1pzke_89",ZS="_input_1pzke_75",XS="_executeBtn_1pzke_139",e1="_result_1pzke_185",t1="_stepsContainer_1pzke_217",r1="_step_1pzke_217",n1="_stepVisible_1pzke_257",a1="_stepHighlight_1pzke_267",i1="_sequence_1pzke_279",l1="_sequenceLabel_1pzke_301",s1="_placeholder_1pzke_315",je={container:VS,title:GS,demosGrid:WS,demoBox:JS,demoTitle:QS,inputRow:YS,label:KS,input:ZS,executeBtn:XS,result:e1,stepsContainer:t1,step:r1,stepVisible:n1,stepHighlight:a1,sequence:i1,sequenceLabel:l1,placeholder:s1};function o1(){const[e,t]=C.useState(""),[n,a]=C.useState(null),[i,l]=C.useState([]),[s,o]=C.useState(0),c=C.useRef([]),u=C.useCallback(()=>{c.current.forEach(y=>clearTimeout(y)),c.current=[]},[]);C.useEffect(()=>()=>u(),[u]);const m=y=>y<0?null:y===0||y===1?1:y*m(y-1),d=y=>{const g=[];if(y<=1)return g.push({text:`factorial(${y}) = ${y}`,isBase:!0}),g;for(let b=y;b>=2;b--)g.push({text:`factorial(${b}) = ${b} * factorial(${b-1})`,isBase:!1});g.push({text:"factorial(1) = 1  (cas base)",isBase:!0});let v=1;for(let b=2;b<=y;b++)v*=b,g.push({text:`factorial(${b}) = ${b} * ${v/b} = ${v}`,isBase:!1});return g},f=()=>{u(),o(0);const y=parseInt(e,10);if(isNaN(y)||y<0||y>12){a("Introdueix un numero entre 0 i 12"),l([]);return}const g=m(y);a(`${y}! = ${g}`);const v=d(y);l(v),v.forEach((b,h)=>{const p=setTimeout(()=>{o(x=>x+1)},(h+1)*300);c.current.push(p)})};return r.jsxs("div",{className:je.demoBox,children:[r.jsx("div",{className:je.demoTitle,children:"Factorial (n!)"}),r.jsxs("div",{className:je.inputRow,children:[r.jsx("span",{className:je.label,children:"n ="}),r.jsx("input",{type:"number",className:je.input,placeholder:"5",min:"0",max:"12",value:e,onChange:y=>t(y.target.value)}),r.jsx("button",{className:je.executeBtn,onClick:f,children:"Calcular"})]}),n&&r.jsx("div",{className:je.result,children:n}),i.length>0&&r.jsx("div",{className:je.stepsContainer,children:i.map((y,g)=>r.jsx("div",{className:`${je.step} ${g<s?je.stepVisible:""} ${y.isBase?je.stepHighlight:""}`,children:y.text},g))}),!n&&r.jsx("div",{className:je.placeholder,children:"Introdueix un valor i prem Calcular per veure els passos"})]})}function c1(){const[e,t]=C.useState(""),[n,a]=C.useState(null),[i,l]=C.useState([]),s=u=>{if(u<=0)return 0;if(u===1)return 1;let m=0,d=1;for(let f=2;f<=u;f++){const y=m+d;m=d,d=y}return d},o=u=>{const m=[];for(let d=0;d<=u;d++)m.push(s(d));return m},c=()=>{const u=parseInt(e,10);if(isNaN(u)||u<0||u>20){a("Introdueix un numero entre 0 i 20"),l([]);return}const m=s(u);a(`fibonacci(${u}) = ${m}`),l(o(u))};return r.jsxs("div",{className:je.demoBox,children:[r.jsx("div",{className:je.demoTitle,children:"Fibonacci"}),r.jsxs("div",{className:je.inputRow,children:[r.jsx("span",{className:je.label,children:"Posicio n ="}),r.jsx("input",{type:"number",className:je.input,placeholder:"7",min:"0",max:"20",value:e,onChange:u=>t(u.target.value)}),r.jsx("button",{className:je.executeBtn,onClick:c,children:"Calcular"})]}),n&&r.jsx("div",{className:je.result,children:n}),i.length>0&&r.jsxs("div",{className:je.sequence,children:[r.jsx("span",{className:je.sequenceLabel,children:"Sequencia completa:"}),i.join(", ")]}),!n&&r.jsx("div",{className:je.placeholder,children:"Introdueix una posicio i prem Calcular"})]})}function u1(){return r.jsxs("div",{className:je.container,children:[r.jsx("div",{className:je.title,children:"Demo: Funcions Recursives"}),r.jsxs("div",{className:je.demosGrid,children:[r.jsx(o1,{}),r.jsx(c1,{})]})]})}const d1=`// Estructura general d'una funció recursiva
static tipusRetorn funcioRecursiva(parametres) {
    // 1. Cas base: condició de parada
    if (condicioParada) {
        return valorBase;
    }

    // 2. Cas recursiu: la funció es crida a si mateixa
    return funcioRecursiva(parametresModificats);
}`,p1=`public class Factorial {
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
}`,m1=`public class Fibonacci {
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
}`,f1=`public class SumaRecursiva {
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
}`;function h1(){return r.jsxs("div",{children:[r.jsx(A,{title:"Funcions Recursives"}),r.jsx(k,{variant:"info",title:"Què és la Recursivitat?",children:r.jsxs("p",{children:["La ",r.jsx("strong",{children:"recursivitat"})," és una tècnica on una funció es crida a si mateixa per resoldre un problema. Cada crida resol una part més petita del problema fins arribar a un ",r.jsx("strong",{children:"cas base"})," que atura la recursió."]})}),r.jsx(u1,{}),r.jsx(k,{variant:"explanation",title:"Els dos elements clau",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Cas base:"})," la condició que atura la recursió. Sense cas base, la funció es cridaria infinitament i provocaria un ",r.jsx("code",{children:"StackOverflowError"}),"."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Cas recursiu:"})," la funció es crida a si mateixa amb paràmetres més simples o més petits, acostant-se al cas base."]})]})}),r.jsx(w,{code:d1,label:"Estructura d'una funció recursiva",showLineNumbers:!0}),r.jsx(ge,{headers:["Concepte","Descripció","Importància"],rows:[{cells:["Cas base","Condició de parada de la recursió","Obligatori per evitar bucle infinit"]},{cells:["Cas recursiu","La funció es crida amb dades més simples","Ha de convergir cap al cas base"]},{cells:["Pila de crides","Cada crida s'apila fins al cas base","Limitat per la memòria de la pila"]},{cells:["StackOverflowError","Error si no hi ha cas base o no convergeix","Cal evitar-lo sempre"]}]}),r.jsx(k,{variant:"success",title:"Factorial (n!)",children:r.jsxs("p",{children:["El factorial és l'exemple clàssic de recursivitat: ",r.jsx("code",{children:"n! = n * (n-1)!"})," amb cas base ",r.jsx("code",{children:"0! = 1"}),"."]})}),r.jsx(w,{code:p1,label:"Exemple: Factorial recursiu",showLineNumbers:!0}),r.jsx(k,{variant:"success",title:"Fibonacci",children:r.jsxs("p",{children:["La seqüència de Fibonacci es defineix com: ",r.jsx("code",{children:"fib(n) = fib(n-1) + fib(n-2)"}),", amb casos base ",r.jsx("code",{children:"fib(0) = 0"})," i ",r.jsx("code",{children:"fib(1) = 1"}),"."]})}),r.jsx(w,{code:m1,label:"Exemple: Fibonacci recursiu",showLineNumbers:!0}),r.jsx(k,{variant:"warning",title:"Eficiència de la recursió",children:r.jsxs("p",{children:["La versió recursiva de Fibonacci és molt ineficient perquè recalcula els mateixos valors moltes vegades. Per a valors grans de ",r.jsx("code",{children:"n"}),", és preferible utilitzar un enfocament iteratiu o ",r.jsx("strong",{children:"memoització"}),"."]})}),r.jsx(w,{code:f1,label:"Més exemples: Suma i Potència recursius",showLineNumbers:!0})]})}const g1=`public class Calculadora {
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
}`,x1=`public class GestorNotes {
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
}`,v1=`public class JocEndevinar {
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
}`;function y1(){return r.jsxs("div",{children:[r.jsx(A,{title:"Cridar Funcions des del Main"}),r.jsx(k,{variant:"info",title:"El mètode main()",children:r.jsxs("p",{children:["El mètode ",r.jsx("code",{children:"public static void main(String[] args)"})," és el"," ",r.jsx("strong",{children:"punt d'entrada"})," de qualsevol programa Java. Des d'aquí cridem les nostres funcions per executar la lògica del programa. Les funcions han de ser"," ",r.jsx("code",{children:"static"})," per poder-les cridar des del ",r.jsx("code",{children:"main"})," sense crear objectes."]})}),r.jsx(k,{variant:"explanation",title:"Flux d'execució",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"1."})," El programa comença sempre al ",r.jsx("code",{children:"main()"}),"."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"2."}),` Quan es crida una funció, l'execució "salta" al cos de la funció.`]}),r.jsxs("li",{children:[r.jsx("strong",{children:"3."})," Un cop la funció acaba (amb ",r.jsx("code",{children:"return"})," o al final del bloc), l'execució torna al punt on es va cridar."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"4."})," El valor retornat es pot guardar en una variable o usar directament."]})]})}),r.jsx(k,{variant:"success",title:"Exemple 1: Calculadora",children:r.jsxs("p",{children:["Combina funcions sense paràmetres (menú) i amb paràmetres (operacions). El ",r.jsx("code",{children:"main"})," coordina el flux."]})}),r.jsx(w,{code:g1,label:"Exemple 1: Calculadora amb funcions",showLineNumbers:!0}),r.jsx(k,{variant:"success",title:"Exemple 2: Gestor de Notes",children:r.jsx("p",{children:"Mostra com encadenar crides a funcions: el resultat d'una funció es passa com a argument de la següent. Cada funció fa una tasca concreta."})}),r.jsx(w,{code:x1,label:"Exemple 2: Crides encadenades de funcions",showLineNumbers:!0}),r.jsx(k,{variant:"warning",title:"Bones pràctiques",children:r.jsxs("ul",{children:[r.jsxs("li",{children:["Cada funció ha de fer ",r.jsx("strong",{children:"una sola cosa"})," i fer-la bé."]}),r.jsxs("li",{children:["Dona noms ",r.jsx("strong",{children:"descriptius"})," a les funcions (verbs: calcular, obtenir, mostrar...)."]}),r.jsxs("li",{children:["El ",r.jsx("code",{children:"main"})," ha de ser ",r.jsx("strong",{children:"curt i clar"}),": coordina, no calcula."]}),r.jsx("li",{children:"Reutilitza funcions en lloc de copiar codi."})]})}),r.jsx(k,{variant:"success",title:"Exemple 3: Joc d'endevinar",children:r.jsx("p",{children:"Un exemple més complet que combina funcions sense paràmetres, amb paràmetres i recursivitat per crear un petit joc interactiu."})}),r.jsx(w,{code:v1,label:"Exemple 3: Combinant tots els tipus de funcions",showLineNumbers:!0})]})}const b1=`public class ResumComplet {
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
}`;function j1(){return r.jsxs("div",{children:[r.jsx(A,{title:"Resum Comparatiu"}),r.jsx(k,{variant:"info",title:"Vista general",children:r.jsx("p",{children:"Aquí tens un resum de tots els conceptes tractats en aquesta secció: arrays unidimensionals, arrays bidimensionals (matrius), funcions sense paràmetres, funcions amb paràmetres i funcions recursives."})}),r.jsxs(Ne,{children:[r.jsx(F,{title:"Arrays 1D",variant:"blue",children:r.jsxs("ul",{children:[r.jsx("li",{children:"Emmagatzemen múltiples valors del mateix tipus"}),r.jsx("li",{children:"Mida fixa definida en la creació"}),r.jsx("li",{children:"Accés per índex (base 0)"}),r.jsx("li",{children:r.jsx("code",{children:"int[] nums = new int[5];"})}),r.jsxs("li",{children:["Recorregut amb ",r.jsx("code",{children:"for"})," o ",r.jsx("code",{children:"for-each"})]}),r.jsxs("li",{children:[r.jsx("code",{children:".length"})," per obtenir la mida"]})]})}),r.jsx(F,{title:"Arrays 2D (Matrius)",variant:"yellow",children:r.jsxs("ul",{children:[r.jsx("li",{children:"Array d'arrays: files i columnes"}),r.jsxs("li",{children:["Accés amb doble índex: ",r.jsx("code",{children:"[fila][col]"})]}),r.jsx("li",{children:r.jsx("code",{children:"int[][] mat = new int[3][4];"})}),r.jsxs("li",{children:["Recorregut amb doble ",r.jsx("code",{children:"for"})]}),r.jsxs("li",{children:[r.jsx("code",{children:".length"})," = files, ",r.jsx("code",{children:"[0].length"})," = columnes"]}),r.jsx("li",{children:"Ús: taules de dades, taulers de joc"})]})}),r.jsx(F,{title:"Funcions sense Paràmetres",variant:"green",children:r.jsxs("ul",{children:[r.jsx("li",{children:"No reben cap dada d'entrada"}),r.jsxs("li",{children:["Poden retornar un valor o ser ",r.jsx("code",{children:"void"})]}),r.jsx("li",{children:r.jsx("code",{children:"static String saludar() {...}"})}),r.jsx("li",{children:"Ideals per accions autònomes"}),r.jsx("li",{children:"Exemples: mostrar menú, generar aleatori"}),r.jsxs("li",{children:["Es criden amb ",r.jsx("code",{children:"nomFunció()"})]})]})}),r.jsx(F,{title:"Funcions amb Paràmetres",variant:"pink",children:r.jsxs("ul",{children:[r.jsx("li",{children:"Reben dades d'entrada (paràmetres)"}),r.jsx("li",{children:"Més flexibles i reutilitzables"}),r.jsx("li",{children:r.jsx("code",{children:"static int sumar(int a, int b) {...}"})}),r.jsx("li",{children:"Arguments han de coincidir en tipus i ordre"}),r.jsx("li",{children:"Poden rebre arrays i objectes"}),r.jsxs("li",{children:["Crida: ",r.jsx("code",{children:"sumar(5, 3)"})]})]})}),r.jsx(F,{title:"Funcions Recursives",variant:"gold",children:r.jsxs("ul",{children:[r.jsx("li",{children:"La funció es crida a si mateixa"}),r.jsxs("li",{children:["Necessiten un ",r.jsx("strong",{children:"cas base"})," obligatori"]}),r.jsxs("li",{children:["El ",r.jsx("strong",{children:"cas recursiu"})," ha de convergir"]}),r.jsx("li",{children:"Exemples: factorial, fibonacci, potència"}),r.jsxs("li",{children:["Perill: ",r.jsx("code",{children:"StackOverflowError"})," sense cas base"]}),r.jsx("li",{children:"Alternativa: versió iterativa"})]})})]}),r.jsx(k,{variant:"explanation",title:"Comparativa ràpida",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Arrays"})," són per ",r.jsx("em",{children:"emmagatzemar dades"}),", les"," ",r.jsx("strong",{children:"funcions"})," són per ",r.jsx("em",{children:"processar-les"}),"."]}),r.jsxs("li",{children:["Les funcions ",r.jsx("strong",{children:"sense paràmetres"})," són més simples però menys flexibles que les funcions ",r.jsx("strong",{children:"amb paràmetres"}),"."]}),r.jsxs("li",{children:["La ",r.jsx("strong",{children:"recursivitat"})," és elegant però pot ser menys eficient que un bucle iteratiu per a problemes grans."]}),r.jsxs("li",{children:["Combinar arrays amb funcions és la clau per escriure programes ",r.jsx("strong",{children:"modulars i nets"}),"."]})]})}),r.jsx(w,{code:b1,label:"Exemple integrador: tots els conceptes junts",showLineNumbers:!0})]})}function S1(){return r.jsxs("div",{children:[r.jsx(A,{title:"Introducció a la Programació Orientada a Objectes (POO)"}),r.jsx(k,{variant:"info",title:"Què és la POO?",children:r.jsxs("p",{children:["La ",r.jsx("strong",{children:"Programació Orientada a Objectes (POO)"})," és un paradigma de programació que organitza el codi al voltant d'",r.jsx("strong",{children:"objectes"})," en lloc de funcions i lògica seqüencial. Un objecte és una representació d'una entitat del món real que té",r.jsx("strong",{children:" propietats"})," (atributs) i ",r.jsx("strong",{children:"comportaments"})," (mètodes)."]})}),r.jsx(A,{title:"Programació Procedural vs POO"}),r.jsx(k,{variant:"explanation",children:r.jsxs("p",{children:["Fins ara hem programat de forma ",r.jsx("strong",{children:"procedural"}),": un conjunt d'instruccions que s'executen de dalt a baix, una darrere l'altra. Funciona per a programes petits, però a mesura que el programa creix, es torna difícil de mantenir i organitzar."]})}),r.jsxs(he,{children:[r.jsxs(Q,{title:"Programació Procedural",variant:"bad",children:[r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[r.jsx("li",{children:"Codi seqüencial, de dalt a baix"}),r.jsx("li",{children:"Dades i funcions separades"}),r.jsx("li",{children:"Difícil de reutilitzar"}),r.jsx("li",{children:"Difícil de mantenir en projectes grans"}),r.jsx("li",{children:"Tot està barrejat en un sol fitxer"})]}),r.jsx(w,{code:`// Tot en un sol lloc
String nomCotxe = "Toyota";
int kmCotxe = 50000;
System.out.println(nomCotxe);
// ... 500 linies mes ...`})]}),r.jsxs(Q,{title:"Programació Orientada a Objectes",variant:"good",children:[r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[r.jsx("li",{children:"Codi organitzat en objectes"}),r.jsx("li",{children:"Dades i comportaments junts"}),r.jsx("li",{children:"Fàcil de reutilitzar"}),r.jsx("li",{children:"Fàcil de mantenir i escalar"}),r.jsx("li",{children:"Cada classe té la seva responsabilitat"})]}),r.jsx(w,{code:`// Organitzat en objectes
Cotxe toyota = new Cotxe("Toyota", 50000);
toyota.mostrarInfo();
// Clar, net, reutilitzable`})]})]}),r.jsx(A,{title:"Analogia: L'Edifici de La Salle"}),r.jsxs(k,{variant:"info",children:[r.jsxs("p",{children:["Imagina l'edifici de ",r.jsx("strong",{children:"La Salle"}),". L'edifici no és només un bloc de formigó; està organitzat en ",r.jsx("strong",{children:"plantes"}),", cada planta té ",r.jsx("strong",{children:"aules"}),", cada aula té",r.jsx("strong",{children:" cadires, taules, una pissarra"}),"... Cada element té les seves propietats i funcions."]}),r.jsxs("p",{style:{marginTop:"10px"},children:["En POO fem el mateix: en lloc de tenir tot el codi en un sol lloc, l'organitzem en",r.jsx("strong",{children:" classes"})," (els plànols) i creem ",r.jsx("strong",{children:"objectes"})," (les instàncies reals)."]})]}),r.jsx(w,{label:"L'edifici com a objectes",code:`// La classe es el planol
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
aulaJava.impartirClasse();`}),r.jsx(A,{title:"Els 4 Pilars de la POO"}),r.jsx(k,{variant:"explanation",children:r.jsxs("p",{children:["La POO es fonamenta en ",r.jsx("strong",{children:"4 pilars"})," fonamentals que fan que el codi sigui organitzat, segur, reutilitzable i flexible."]})}),r.jsxs(Ne,{children:[r.jsxs(F,{title:"Encapsulació",variant:"blue",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Amagar les dades internes"})," d'un objecte i controlar-ne l'accés mitjançant mètodes públics (getters i setters)."]}),r.jsx("p",{style:{marginTop:"8px"},children:"Com una càpsula de medicament: no veus el contingut, però funciona."}),r.jsx(w,{code:`private String nom;
public String getNom() {
    return nom;
}`})]}),r.jsxs(F,{title:"Herència",variant:"yellow",children:[r.jsxs("p",{children:["Una classe pot ",r.jsx("strong",{children:"heretar"})," atributs i mètodes d'una altra classe. Permet reutilitzar codi i crear jerarquies."]}),r.jsx("p",{style:{marginTop:"8px"},children:"Com un fill que hereta característiques dels pares."}),r.jsx(w,{code:`class Animal {
    void menjar() { ... }
}
class Gos extends Animal {
    void bordar() { ... }
}`})]}),r.jsxs(F,{title:"Polimorfisme",variant:"green",children:[r.jsxs("p",{children:["Un mateix mètode pot tenir ",r.jsx("strong",{children:"comportaments diferents"})," segons l'objecte que l'executa."]}),r.jsx("p",{style:{marginTop:"8px"},children:'Com el verb "parlar": un humà parla, un gos borda, un gat miola.'}),r.jsx(w,{code:`Animal a = new Gos();
a.ferSo(); // "Bup bup!"
Animal b = new Gat();
b.ferSo(); // "Miau!"`})]}),r.jsxs(F,{title:"Abstracció",variant:"pink",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Simplificar la complexitat"})," mostrant només el que és necessari i amagant els detalls interns d'implementació."]}),r.jsx("p",{style:{marginTop:"8px"},children:"Com conduir un cotxe: només uses el volant i pedals, no veus el motor."}),r.jsx(w,{code:`// No cal saber COM funciona
cotxe.arrencar();
cotxe.accelerar();
// Nomes cal saber QUE fa`})]})]}),r.jsx(k,{variant:"success",title:"Resum",children:r.jsx("p",{children:"La POO ens permet organitzar el codi de manera que reflecteixi el món real. Cada objecte té les seves dades i els seus comportaments, i els 4 pilars (encapsulació, herència, polimorfisme i abstracció) ens ajuden a crear codi net, segur, reutilitzable i fàcil de mantenir."})})]})}function w1(){return r.jsxs("div",{children:[r.jsx(A,{title:"Classe vs Objecte"}),r.jsx(k,{variant:"info",title:"Concepte fonamental",children:r.jsxs("p",{children:["La diferència entre ",r.jsx("strong",{children:"classe"})," i ",r.jsx("strong",{children:"objecte"})," és un dels conceptes més importants de la POO. Entendre-la bé és clau per dominar la programació orientada a objectes."]})}),r.jsx(A,{title:"Analogia: El Plànol i la Casa"}),r.jsx(k,{variant:"explanation",children:r.jsxs("p",{children:["Imagina que vols construir una casa. Primer necessites un ",r.jsx("strong",{children:"plànol"})," (la classe) que descrigui com serà la casa: quantes habitacions tindrà, de quin color serà, quina superfície tindrà... Després, a partir d'aquest plànol, pots construir",r.jsx("strong",{children:" una o moltes cases"})," (els objectes). Cada casa pot tenir colors diferents, però totes segueixen el mateix plànol."]})}),r.jsxs(he,{children:[r.jsx(Q,{title:"Classe (El Plànol)",variant:"blue",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[r.jsxs("li",{children:["És la ",r.jsx("strong",{children:"plantilla"})," o definició"]}),r.jsx("li",{children:"Descriu quins atributs i mètodes tindran els objectes"}),r.jsx("li",{children:"No ocupa espai en memòria (fins que es crea un objecte)"}),r.jsx("li",{children:"Es defineix un cop"}),r.jsxs("li",{children:["Utilitza la paraula clau ",r.jsx("code",{children:"class"})]})]})}),r.jsx(Q,{title:"Objecte (La Casa)",variant:"good",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[r.jsxs("li",{children:["És una ",r.jsx("strong",{children:"instància"})," concreta de la classe"]}),r.jsx("li",{children:"Té valors reals per a cada atribut"}),r.jsx("li",{children:"Ocupa espai en memòria"}),r.jsx("li",{children:"Se'n poden crear tants com es vulgui"}),r.jsxs("li",{children:["Es crea amb la paraula clau ",r.jsx("code",{children:"new"})]})]})})]}),r.jsx(A,{title:"Exemple: La Classe Cotxe"}),r.jsx(k,{variant:"info",children:r.jsxs("p",{children:["Vegem un exemple concret amb una classe ",r.jsx("code",{children:"Cotxe"}),". La classe defineix que tot cotxe té una marca, un model, un color i quilòmetres. Després podem crear tants cotxes com vulguem."]})}),r.jsx(w,{label:"Definició de la classe Cotxe (el plànol)",showLineNumbers:!0,code:`public class Cotxe {
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
}`}),r.jsx(A,{title:"Creació d'Objectes (Instanciació)"}),r.jsx(k,{variant:"explanation",children:r.jsxs("p",{children:["A partir de la classe ",r.jsx("code",{children:"Cotxe"}),", podem crear múltiples objectes. Cada objecte és independent i té els seus propis valors. Crear un objecte s'anomena ",r.jsx("strong",{children:"instanciar"}),"."]})}),r.jsx(w,{label:"Crear objectes a partir de la classe",showLineNumbers:!0,code:`public class Main {
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
}`}),r.jsx(A,{title:"Resum Visual"}),r.jsxs(Ne,{children:[r.jsxs(F,{title:"Classe",variant:"blue",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Què és?"})," La plantilla / plànol"]}),r.jsxs("p",{style:{marginTop:"6px"},children:[r.jsx("strong",{children:"Paraula clau:"})," ",r.jsx("code",{children:"class"})]}),r.jsx("p",{style:{marginTop:"6px"},children:r.jsx("strong",{children:"Exemple:"})}),r.jsx(w,{code:"class Cotxe { ... }"})]}),r.jsxs(F,{title:"Objecte",variant:"yellow",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Què és?"})," Una instància real de la classe"]}),r.jsxs("p",{style:{marginTop:"6px"},children:[r.jsx("strong",{children:"Paraula clau:"})," ",r.jsx("code",{children:"new"})]}),r.jsx("p",{style:{marginTop:"6px"},children:r.jsx("strong",{children:"Exemple:"})}),r.jsx(w,{code:"Cotxe c = new Cotxe();"})]}),r.jsxs(F,{title:"Atributs",variant:"green",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Què són?"})," Les propietats de l'objecte"]}),r.jsxs("p",{style:{marginTop:"6px"},children:[r.jsx("strong",{children:"Exemples:"})," marca, color, km"]}),r.jsx("p",{style:{marginTop:"6px"},children:r.jsx("strong",{children:"Accés:"})}),r.jsx(w,{code:'cotxe1.marca = "Toyota";'})]}),r.jsxs(F,{title:"Mètodes",variant:"pink",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Què són?"})," Les accions que pot fer l'objecte"]}),r.jsxs("p",{style:{marginTop:"6px"},children:[r.jsx("strong",{children:"Exemples:"})," mostrarInfo(), conduir()"]}),r.jsx("p",{style:{marginTop:"6px"},children:r.jsx("strong",{children:"Crida:"})}),r.jsx(w,{code:"cotxe1.mostrarInfo();"})]})]}),r.jsx(k,{variant:"warning",title:"Recorda",children:r.jsxs("p",{children:["Una classe per si sola ",r.jsx("strong",{children:"no fa res"}),". És com tenir un plànol sense construir la casa. Has de crear objectes (",r.jsx("code",{children:"new"}),") per poder treballar amb les dades i cridar els mètodes."]})})]})}function E1(){return r.jsxs("div",{children:[r.jsx(A,{title:"Modificadors d'Accés i Encapsulació"}),r.jsx(k,{variant:"info",title:"Què són els modificadors d'accés?",children:r.jsxs("p",{children:["Els ",r.jsx("strong",{children:"modificadors d'accés"})," són paraules clau que controlen la ",r.jsx("strong",{children:"visibilitat"})," dels atributs i mètodes d'una classe. Determinen qui pot accedir a cada part del codi. Són fonamentals per aplicar l'",r.jsx("strong",{children:"encapsulació"}),", un dels 4 pilars de la POO."]})}),r.jsx(A,{title:"Tipus de Modificadors"}),r.jsx(ge,{headers:["Modificador","Mateixa Classe","Mateix Paquet","Subclasse","Tothom"],rows:[{cells:["public","Sí","Sí","Sí","Sí"]},{cells:["protected","Sí","Sí","Sí","No"]},{cells:["(sense modificador)","Sí","Sí","No","No"]},{cells:["private","Sí","No","No","No"]}]}),r.jsxs(Ne,{children:[r.jsxs(F,{title:"public",variant:"green",children:[r.jsxs("p",{children:["Accessible des de ",r.jsx("strong",{children:"qualsevol lloc"})," del programa."]}),r.jsx(w,{code:`public String nom;
public void saludar() { ... }`})]}),r.jsxs(F,{title:"private",variant:"pink",children:[r.jsxs("p",{children:["Només accessible dins de la ",r.jsx("strong",{children:"mateixa classe"}),"."]}),r.jsx(w,{code:`private int edat;
private void calcular() { ... }`})]}),r.jsxs(F,{title:"protected",variant:"yellow",children:[r.jsxs("p",{children:["Accessible dins del ",r.jsx("strong",{children:"mateix paquet"})," i per ",r.jsx("strong",{children:"subclasses"}),"."]}),r.jsx(w,{code:`protected double salari;
protected void processar() { ... }`})]}),r.jsxs(F,{title:"(default)",variant:"blue",children:[r.jsxs("p",{children:["Sense paraula clau. Accessible dins del ",r.jsx("strong",{children:"mateix paquet"}),"."]}),r.jsx(w,{code:`String ciutat;
void mostrar() { ... }`})]})]}),r.jsx(A,{title:"Encapsulació: Per què private?"}),r.jsx(k,{variant:"explanation",children:r.jsxs("p",{children:["L'",r.jsx("strong",{children:"encapsulació"})," consisteix a declarar els atributs com a ",r.jsx("code",{children:"private"})," i proporcionar mètodes ",r.jsx("code",{children:"public"})," (getters i setters) per accedir-hi de forma controlada. Així protegim les dades internes de l'objecte i evitem que es modifiquin de forma incorrecta."]})}),r.jsxs(he,{children:[r.jsxs(Q,{title:"MALAMENT: Sense encapsulació",variant:"bad",children:[r.jsx("p",{children:"Atributs públics: qualsevol pot modificar-los sense control."}),r.jsx(w,{showLineNumbers:!0,code:`public class Persona {
    public String nom;
    public int edat; // Qualsevol pot posar -5!
}

// Des d'un altre lloc:
Persona p = new Persona();
p.edat = -50; // Error logic! No hi ha control
p.nom = "";   // Nom buit acceptat!`}),r.jsx(k,{variant:"error",children:r.jsx("p",{children:"No hi ha cap validació. Es poden assignar valors incorrectes."})})]}),r.jsxs(Q,{title:"BÉ: Amb encapsulació",variant:"good",children:[r.jsx("p",{children:"Atributs privats amb getters/setters que validen les dades."}),r.jsx(w,{showLineNumbers:!0,code:`public class Persona {
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
}`}),r.jsx(k,{variant:"success",children:r.jsx("p",{children:"Les dades estan protegides i validades."})})]})]}),r.jsx(A,{title:"Getters i Setters"}),r.jsx(k,{variant:"info",children:r.jsxs("p",{children:["Els ",r.jsx("strong",{children:"getters"})," són mètodes que retornen el valor d'un atribut privat. Els ",r.jsx("strong",{children:"setters"})," són mètodes que permeten modificar el valor d'un atribut privat, habitualment amb validació."]})}),r.jsx(w,{label:"Exemple complet amb getters i setters",showLineNumbers:!0,code:`public class Alumne {
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
}`}),r.jsx(w,{label:"Ús des del main",code:`public class Main {
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
}`}),r.jsx(k,{variant:"success",title:"Convenció de noms",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Getter:"})," ",r.jsx("code",{children:"getAtribut()"})," - retorna el valor (per booleans: ",r.jsx("code",{children:"isAtribut()"}),")"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Setter:"})," ",r.jsx("code",{children:"setAtribut(valor)"})," - modifica el valor"]}),r.jsxs("li",{children:["Sempre comencen amb ",r.jsx("code",{children:"get"})," o ",r.jsx("code",{children:"set"})," seguit del nom de l'atribut amb la primera lletra en majúscula"]})]})})]})}function cl({code:e,language:t="java",label:n,defaultOpen:a=!1}){const[i,l]=C.useState(a);return r.jsxs("div",{style:{margin:"16px 0"},children:[r.jsx(Mn,{size:"small",variant:"secondary",onClick:()=>l(!i),children:i?"Amagar Codi":"Veure Codi"}),i&&r.jsx(w,{code:e,language:t,label:n})]})}function C1(){return r.jsxs("div",{children:[r.jsx(A,{title:"Constructors i la Paraula Clau this"}),r.jsx(k,{variant:"info",title:"Què és un constructor?",children:r.jsxs("p",{children:["Un ",r.jsx("strong",{children:"constructor"})," és un mètode especial que s'executa automàticament quan es crea un objecte amb ",r.jsx("code",{children:"new"}),". Serveix per ",r.jsx("strong",{children:"inicialitzar"})," els atributs de l'objecte amb valors inicials. El constructor té el ",r.jsx("strong",{children:"mateix nom que la classe"})," i ",r.jsx("strong",{children:"no té tipus de retorn"})," (ni tan sols ",r.jsx("code",{children:"void"}),")."]})}),r.jsx(A,{title:"Sintaxi del Constructor"}),r.jsx(w,{label:"Estructura bàsica d'un constructor",showLineNumbers:!0,code:`public class NomClasse {
    // Atributs
    private String atribut1;
    private int atribut2;

    // Constructor (mateix nom que la classe, sense tipus de retorn)
    public NomClasse(String atribut1, int atribut2) {
        this.atribut1 = atribut1;
        this.atribut2 = atribut2;
    }
}`}),r.jsx(k,{variant:"explanation",children:r.jsxs("p",{children:["Fixa't que el constructor ",r.jsx("strong",{children:"no té"})," ",r.jsx("code",{children:"void"})," ni cap altre tipus de retorn. Si hi poses ",r.jsx("code",{children:"void"}),", Java ho tractarà com un mètode normal, no com un constructor!"]})}),r.jsx(A,{title:"La Paraula Clau this"}),r.jsx(k,{variant:"info",children:r.jsxs("p",{children:["La paraula clau ",r.jsx("code",{children:"this"})," fa referència a l'",r.jsx("strong",{children:"objecte actual"}),". S'utilitza principalment quan el nom del paràmetre del constructor (o mètode) coincideix amb el nom de l'atribut de la classe."]})}),r.jsxs(he,{children:[r.jsxs(Q,{title:"Sense this (problema)",variant:"bad",children:[r.jsx(w,{code:`public Cotxe(String marca) {
    marca = marca; // ERROR!
    // Assigna el parametre a si mateix
    // L'atribut NO es modifica
}`}),r.jsx(k,{variant:"error",children:r.jsx("p",{children:"Java no sap distingir entre l'atribut i el paràmetre. L'atribut queda sense valor."})})]}),r.jsxs(Q,{title:"Amb this (correcte)",variant:"good",children:[r.jsx(w,{code:`public Cotxe(String marca) {
    this.marca = marca; // CORRECTE!
    // this.marca = atribut de la classe
    // marca = parametre del constructor
}`}),r.jsx(k,{variant:"success",children:r.jsxs("p",{children:[r.jsx("code",{children:"this.marca"})," es refereix a l'atribut de l'objecte. ",r.jsx("code",{children:"marca"})," és el paràmetre."]})})]})]}),r.jsx(A,{title:"Exemple Complet"}),r.jsx(w,{label:"Classe Cotxe amb constructor",showLineNumbers:!0,code:`public class Cotxe {
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
}`}),r.jsx(w,{label:"Crear objectes amb el constructor",code:`public class Main {
    public static void main(String[] args) {
        // Ara podem inicialitzar en UNA sola linia!
        Cotxe c1 = new Cotxe("Toyota", "Corolla", 15000);
        Cotxe c2 = new Cotxe("BMW", "Serie 3", 30000);

        c1.mostrarInfo(); // Toyota Corolla - 15000 km
        c2.mostrarInfo(); // BMW Serie 3 - 30000 km
    }
}`}),r.jsx(A,{title:"Sobrecàrrega de Constructors"}),r.jsx(k,{variant:"info",title:"Què és la sobrecàrrega?",children:r.jsxs("p",{children:["Una classe pot tenir ",r.jsx("strong",{children:"múltiples constructors"})," amb diferent nombre o tipus de paràmetres. Això s'anomena ",r.jsx("strong",{children:"sobrecàrrega de constructors"})," (constructor overloading). Java selecciona automàticament el constructor adequat segons els arguments que li passem."]})}),r.jsx(w,{label:"Sobrecàrrega de constructors",showLineNumbers:!0,code:`public class Cotxe {
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
}`}),r.jsx(w,{label:"Usar els diferents constructors",code:`Cotxe c1 = new Cotxe("Toyota", "Corolla", 15000); // Constructor 1
Cotxe c2 = new Cotxe("BMW", "Serie 3");             // Constructor 2
Cotxe c3 = new Cotxe();                             // Constructor 3`}),r.jsx(A,{title:"Errors Comuns"}),r.jsxs(Ne,{children:[r.jsxs(F,{title:"Posar void al constructor",variant:"pink",children:[r.jsxs("p",{children:["Si afegeixes ",r.jsx("code",{children:"void"}),", Java ho tracta com un mètode normal, no com un constructor."]}),r.jsx(w,{code:`// MALAMENT:
public void Cotxe(String marca) {
    this.marca = marca;
}
// Aixo NO es un constructor!`})]}),r.jsxs(F,{title:"No usar this",variant:"pink",children:[r.jsxs("p",{children:["Si el paràmetre té el mateix nom que l'atribut i no uses ",r.jsx("code",{children:"this"}),", l'atribut no es modifica."]}),r.jsx(w,{code:`// MALAMENT:
public Cotxe(String marca) {
    marca = marca; // No fa res!
}
// BE:
public Cotxe(String marca) {
    this.marca = marca;
}`})]}),r.jsxs(F,{title:"Nom diferent de la classe",variant:"pink",children:[r.jsxs("p",{children:["El constructor ha de tenir ",r.jsx("strong",{children:"exactament"})," el mateix nom que la classe."]}),r.jsx(w,{code:`// MALAMENT:
public class Cotxe {
    public cotxe() { } // minuscula!
}
// BE:
public class Cotxe {
    public Cotxe() { } // Correcte
}`})]}),r.jsxs(F,{title:"Constructor per defecte",variant:"yellow",children:[r.jsx("p",{children:"Si no defineixes cap constructor, Java en crea un de buit automàticament. Però si defineixes un constructor amb paràmetres, el buit desapareix."}),r.jsx(w,{code:`// Si tens:
public Cotxe(String marca) { ... }

// Aleshores AIXO ja no funciona:
Cotxe c = new Cotxe(); // ERROR!
// Has d'afegir el constructor buit`})]})]}),r.jsx(cl,{label:"Exemple complet: Classe Estudiant amb sobrecàrrega",code:`public class Estudiant {
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
}`}),r.jsx(k,{variant:"success",title:"Resum",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:["El constructor inicialitza l'objecte quan es crea amb ",r.jsx("code",{children:"new"})]}),r.jsx("li",{children:"Té el mateix nom que la classe i no té tipus de retorn"}),r.jsxs("li",{children:[r.jsx("code",{children:"this"})," es refereix a l'objecte actual i diferencia atributs de paràmetres"]}),r.jsx("li",{children:"La sobrecàrrega permet múltiples constructors amb paràmetres diferents"})]})})]})}const k1=`// Classe PARE (superclasse)
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
}`,R1=`// Classe FILLA (subclasse) - hereta d'Animal
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
}`,L1=`public class Main {
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
}`,A1=`public class Animal {
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
// Constructor de Gos: Pastor Alemany`,M1=`public class Animal {
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
mia.ferSoroll();  // Mia fa: Miau!`,N1=`public class Animal {
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
}`,P1=`// ============ CLASSE PARE ============
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
}`,T1=`public class Main {
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
}`;function O1(){return r.jsxs("div",{children:[r.jsx(A,{title:"Herència en Java"}),r.jsx(k,{variant:"info",title:"Què és l'herència?",children:r.jsxs("p",{children:["L'",r.jsx("strong",{children:"herència"})," és un dels pilars fonamentals de la Programació Orientada a Objectes. Permet que una classe ",r.jsx("strong",{children:"filla"})," (subclasse) hereti els atributs i mètodes d'una classe ",r.jsx("strong",{children:"pare"})," (superclasse). D'aquesta manera, podem ",r.jsx("strong",{children:"reutilitzar codi"})," i crear jerarquies de classes organitzades."]})}),r.jsxs(k,{variant:"explanation",title:"Analogia del món real",children:[r.jsxs("p",{children:["Pensa en els animals. Tots els animals comparteixen comportaments comuns:",r.jsx("strong",{children:" menjar"}),", ",r.jsx("strong",{children:"dormir"}),", ",r.jsx("strong",{children:"moure's"}),"... Però cada tipus d'animal té comportaments propis: un gos pot ",r.jsx("strong",{children:"bordar"}),", un gat pot ",r.jsx("strong",{children:"miolar"}),", un ocell pot ",r.jsx("strong",{children:"volar"}),"."]}),r.jsxs("p",{style:{marginTop:"8px"},children:['En lloc de repetir "menjar" i "dormir" a cada classe (Gos, Gat, Ocell...), definim aquests comportaments comuns a la classe ',r.jsx("strong",{children:"Animal"})," i fem que cada animal en concret els ",r.jsx("strong",{children:"hereti"}),"."]})]}),r.jsx(A,{title:"Terminologia"}),r.jsx(ge,{headers:["Terme","Altres noms","Descripció"],rows:[{cells:["Classe pare","Superclasse, classe base","La classe de la qual s'hereten atributs i mètodes"]},{cells:["Classe filla","Subclasse, classe derivada","La classe que hereta d'una altra i pot afegir funcionalitat pròpia"]},{cells:["extends","Paraula clau","S'utilitza per indicar que una classe hereta d'una altra"]},{cells:["super","Paraula clau","Permet accedir al constructor o mètodes de la classe pare"]},{cells:["@Override","Anotació","Indica que un mètode sobreescriu un mètode del pare"]}]}),r.jsx(A,{title:"Sintaxi Bàsica i Exemple"}),r.jsxs(k,{variant:"info",children:[r.jsxs("p",{children:["Per indicar que una classe hereta d'una altra, s'utilitza la paraula clau ",r.jsx("code",{children:"extends"}),":"]}),r.jsx("p",{style:{marginTop:"8px"},children:r.jsxs("code",{children:["public class Filla ",r.jsx("strong",{children:"extends"})," Pare ","{ ... }"]})})]}),r.jsx(w,{label:"Classe pare: Animal",code:k1,showLineNumbers:!0}),r.jsx(w,{label:"Classes filles: Gos i Gat",code:R1,showLineNumbers:!0}),r.jsx(w,{label:"Utilitzar l'herència",code:L1,showLineNumbers:!0}),r.jsx(k,{variant:"success",title:"Què ha passat?",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:[r.jsx("code",{children:"Gos"})," i ",r.jsx("code",{children:"Gat"})," hereten ",r.jsx("code",{children:"menjar()"}),", ",r.jsx("code",{children:"dormir()"})," i ",r.jsx("code",{children:"mostrarInfo()"})," d'Animal ",r.jsx("strong",{children:"sense haver de reescriure el codi"}),"."]}),r.jsxs("li",{children:["Cada subclasse pot tenir ",r.jsx("strong",{children:"mètodes propis"})," (",r.jsx("code",{children:"bordar()"}),", ",r.jsx("code",{children:"miolar()"}),") que no existeixen al pare."]}),r.jsxs("li",{children:["Un ",r.jsx("code",{children:"Gos"})," no pot usar ",r.jsx("code",{children:"miolar()"})," perquè és exclusiu de ",r.jsx("code",{children:"Gat"}),"."]})]})}),r.jsx(A,{title:"La Paraula Clau super"}),r.jsx(k,{variant:"explanation",children:r.jsxs("p",{children:["La paraula clau ",r.jsx("code",{children:"super"})," serveix per accedir als membres de la classe ",r.jsx("strong",{children:"pare"})," des de la classe filla. Té dos usos principals:"]})}),r.jsxs(he,{children:[r.jsxs(Q,{title:"super() - Cridar al constructor del pare",variant:"blue",children:[r.jsxs("p",{style:{marginBottom:"10px"},children:["S'utilitza dins del constructor de la classe filla per cridar al constructor de la classe pare. ",r.jsx("strong",{children:"Ha de ser la primera instrucció"})," del constructor."]}),r.jsx(w,{code:`public Gos(String nom, String raca) {
    super(nom);  // Crida Animal(String nom)
    this.raca = raca;
}`})]}),r.jsxs(Q,{title:"super.mètode() - Cridar un mètode del pare",variant:"good",children:[r.jsxs("p",{style:{marginBottom:"10px"},children:["S'utilitza per cridar un mètode de la classe pare, especialment quan la classe filla l'ha ",r.jsx("strong",{children:"sobreescrit"})," (override)."]}),r.jsx(w,{code:`@Override
public void mostrarInfo() {
    super.mostrarInfo(); // Crida el del pare
    System.out.println("Raca: " + raca);
}`})]})]}),r.jsx(w,{label:"Exemple de super() en constructors",code:A1,showLineNumbers:!0}),r.jsx(w,{label:"Exemple de super.mètode()",code:M1,showLineNumbers:!0}),r.jsx(k,{variant:"warning",title:"Regles de super()",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:[r.jsx("code",{children:"super()"})," ha de ser la ",r.jsx("strong",{children:"primera instrucció"})," del constructor de la classe filla."]}),r.jsxs("li",{children:["Si el pare no té un constructor sense paràmetres, la classe filla ",r.jsx("strong",{children:"ha de cridar"})," ",r.jsx("code",{children:"super(...)"})," amb els arguments corresponents."]}),r.jsxs("li",{children:["Si no escrius ",r.jsx("code",{children:"super()"}),", Java l'afegeix automàticament (només si el pare té constructor sense paràmetres)."]})]})}),r.jsx(A,{title:"Sobreescriptura de Mètodes (@Override)"}),r.jsx(k,{variant:"info",title:"Què és la sobreescriptura?",children:r.jsxs("p",{children:["La ",r.jsx("strong",{children:"sobreescriptura"})," (override) permet que una classe filla",r.jsx("strong",{children:" redefineixi"})," un mètode que ha heretat del pare. La classe filla proporciona la seva pròpia implementació del mètode, substituint la del pare. L'anotació ",r.jsx("code",{children:"@Override"})," no és obligatòria, però és molt",r.jsx("strong",{children:" recomanable"})," perquè ajuda a detectar errors."]})}),r.jsx(w,{label:"Exemple de sobreescriptura: ferSoroll()",code:_1,showLineNumbers:!0}),r.jsx(k,{variant:"explanation",title:"Per què @Override és important?",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:["Si escrius ",r.jsx("code",{children:"@Override"})," i el mètode NO existeix al pare, Java et donarà un ",r.jsx("strong",{children:"error de compilació"}),". Això evita errors per noms mal escrits."]}),r.jsxs("li",{children:["Fa el codi més ",r.jsx("strong",{children:"llegible"}),": queda clar que el mètode ve del pare."]}),r.jsxs("li",{children:["El mètode sobreescrit ha de tenir la ",r.jsx("strong",{children:"mateixa signatura"})," (nom, paràmetres i tipus de retorn) que el del pare."]})]})}),r.jsx(A,{title:"El Modificador d'Accés protected"}),r.jsx(k,{variant:"explanation",children:r.jsxs("p",{children:["Quan treballem amb herència, el modificador d'accés ",r.jsx("code",{children:"protected"})," és molt útil. Permet que els atributs i mètodes siguin accessibles des de la",r.jsx("strong",{children:" mateixa classe"}),", les ",r.jsx("strong",{children:"subclasses"})," i les classes del",r.jsx("strong",{children:" mateix paquet"}),", però no des de classes externes."]})}),r.jsx(ge,{headers:["Modificador","Mateixa classe","Subclasse","Mateix paquet","Altres classes"],rows:[{cells:["private","Sí","No","No","No"]},{cells:["protected","Sí","Sí","Sí","No"]},{cells:["public","Sí","Sí","Sí","Sí"]}]}),r.jsx(w,{label:"Exemple d'accés protected en herència",code:N1,showLineNumbers:!0}),r.jsx(k,{variant:"info",title:"Quan usar protected?",children:r.jsxs("p",{children:["Usa ",r.jsx("code",{children:"protected"})," per als atributs que vols que les classes filles puguin accedir ",r.jsx("strong",{children:"directament"}),", sense necessitat de getters. Si vols més control i encapsulació, utilitza ",r.jsx("code",{children:"private"})," amb getters/setters ",r.jsx("code",{children:"public"})," o ",r.jsx("code",{children:"protected"}),"."]})}),r.jsx(A,{title:"Exemple Complet: Vehicle, Cotxe i Moto"}),r.jsx(k,{variant:"explanation",children:r.jsxs("p",{children:["Vegem un exemple complet que combina tot el que hem après: herència,",r.jsx("code",{children:" super"}),", ",r.jsx("code",{children:"@Override"}),", atributs ",r.jsx("code",{children:"protected"}),", mètodes propis i mètodes heretats."]})}),r.jsx(w,{label:"Jerarquia completa: Vehicle → Cotxe, Moto",code:P1,showLineNumbers:!0}),r.jsx(w,{label:"Utilitzar la jerarquia de vehicles",code:T1,showLineNumbers:!0}),r.jsx(A,{title:"Regles Importants de l'Herència en Java"}),r.jsx(k,{variant:"warning",title:"Regles clau que has de recordar",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Herència simple:"})," Java només permet heretar d'UNA sola classe. No es pot fer ",r.jsx("code",{children:"class A extends B, C"}),". (Les ",r.jsx("em",{children:"interfaces"})," permeten una alternativa, però és un tema més avançat.)"]}),r.jsxs("li",{style:{marginTop:"8px"},children:[r.jsx("strong",{children:"Totes les classes hereten d'Object:"})," Si una classe no té",r.jsx("code",{children:" extends"}),", Java automàticament fa que hereti de la classe ",r.jsx("code",{children:"Object"}),". Per això totes les classes tenen mètodes com ",r.jsx("code",{children:"toString()"}),",",r.jsx("code",{children:" equals()"}),", etc."]}),r.jsxs("li",{style:{marginTop:"8px"},children:[r.jsx("strong",{children:"Classes final:"})," Si una classe es declara ",r.jsx("code",{children:"final"}),",",r.jsx("strong",{children:" no pot ser heretada"}),". Per exemple, ",r.jsxs("code",{children:["final class Utilitats ","{ ... }"]})," no es pot estendre."]})]})}),r.jsxs(Ne,{children:[r.jsx(F,{title:"Herència Simple",variant:"blue",children:r.jsx(w,{code:`// CORRECTE: una sola classe pare
class Gos extends Animal { }

// ERROR: multiples classes pare
class Gos extends Animal, Mascota { }
// Aixo NO es pot fer en Java!`})}),r.jsx(F,{title:"Totes hereten d'Object",variant:"yellow",children:r.jsx(w,{code:`// Aquestes dues declaracions son equivalents:
class Animal { }
class Animal extends Object { }

// Per aixo pots fer:
Animal a = new Animal();
a.toString();  // Heretat d'Object
a.equals(b);   // Heretat d'Object`})}),r.jsx(F,{title:"Classes final",variant:"green",children:r.jsx(w,{code:`// Aquesta classe NO es pot heretar
final class Constants {
    static final double PI = 3.14159;
}

// ERROR de compilacio!
class MesConstants extends Constants { }
// No es pot estendre una classe final`})})]}),r.jsx(k,{variant:"success",title:"Resum",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:["L'herència permet que una classe filla hereti atributs i mètodes d'una classe pare amb ",r.jsx("code",{children:"extends"}),"."]}),r.jsxs("li",{children:[r.jsx("code",{children:"super()"})," crida al constructor del pare; ",r.jsx("code",{children:"super.mètode()"})," crida un mètode del pare."]}),r.jsxs("li",{children:[r.jsx("code",{children:"@Override"})," indica que la classe filla redefineix un mètode del pare."]}),r.jsxs("li",{children:[r.jsx("code",{children:"protected"})," fa que els atributs siguin accessibles des de les subclasses."]}),r.jsxs("li",{children:["Java només permet ",r.jsx("strong",{children:"herència simple"})," (un sol pare)."]}),r.jsxs("li",{children:["Totes les classes hereten implícitament de ",r.jsx("code",{children:"Object"}),"."]}),r.jsxs("li",{children:["Les classes ",r.jsx("code",{children:"final"})," no poden ser heretades."]})]})})]})}function I1(){return r.jsxs("div",{children:[r.jsx(A,{title:"Exemple Complet: Sistema de Biblioteca"}),r.jsx(k,{variant:"info",title:"Objectiu",children:r.jsxs("p",{children:["Crearem un sistema de gestió d'una biblioteca utilitzant els conceptes de POO que hem après: classes, objectes, constructors, encapsulació (getters/setters) i packages. El sistema tindrà tres classes: ",r.jsx("code",{children:"Llibre"}),", ",r.jsx("code",{children:"Autor"})," i ",r.jsx("code",{children:"Biblioteca"}),"."]})}),r.jsx(A,{title:"Estructura del Projecte"}),r.jsx(w,{label:"Organització en packages",language:"bash",code:`biblioteca/
  src/
    model/
      Llibre.java
      Autor.java
    gestio/
      Biblioteca.java
    app/
      Main.java`}),r.jsxs(Ne,{children:[r.jsxs(F,{title:"Classe Autor",variant:"blue",children:[r.jsx("p",{children:"Representa un autor amb nom i nacionalitat."}),r.jsxs("p",{style:{marginTop:"6px"},children:["Atributs: ",r.jsx("code",{children:"nom"}),", ",r.jsx("code",{children:"nacionalitat"})]})]}),r.jsxs(F,{title:"Classe Llibre",variant:"yellow",children:[r.jsx("p",{children:"Representa un llibre amb títol, autor, any i disponibilitat."}),r.jsxs("p",{style:{marginTop:"6px"},children:["Atributs: ",r.jsx("code",{children:"títol"}),", ",r.jsx("code",{children:"autor"}),", ",r.jsx("code",{children:"any"}),", ",r.jsx("code",{children:"disponible"})]})]}),r.jsxs(F,{title:"Classe Biblioteca",variant:"green",children:[r.jsx("p",{children:"Gestiona una col·lecció de llibres amb operacions CRUD."}),r.jsxs("p",{style:{marginTop:"6px"},children:["Mètodes: ",r.jsx("code",{children:"afegir"}),", ",r.jsx("code",{children:"buscar"}),", ",r.jsx("code",{children:"prestar"}),", ",r.jsx("code",{children:"retornar"})]})]}),r.jsx(F,{title:"Classe Main",variant:"pink",children:r.jsx("p",{children:"Punt d'entrada del programa per provar el sistema."})})]}),r.jsx(A,{title:"Classe Autor"}),r.jsx(w,{label:"model/Autor.java",showLineNumbers:!0,code:`package model;

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
}`}),r.jsx(A,{title:"Classe Llibre"}),r.jsx(w,{label:"model/Llibre.java",showLineNumbers:!0,code:`package model;

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
}`}),r.jsx(k,{variant:"explanation",title:"Composició",children:r.jsxs("p",{children:["Fixa't que la classe ",r.jsx("code",{children:"Llibre"})," té un atribut de tipus ",r.jsx("code",{children:"Autor"}),". Això s'anomena ",r.jsx("strong",{children:"composició"}),`: un objecte conté un altre objecte. És una relació "TÉ UN" (un llibre TÉ UN autor). Així evitem duplicar les dades de l'autor en cada llibre.`]})}),r.jsx(A,{title:"Classe Biblioteca"}),r.jsx(w,{label:"gestio/Biblioteca.java",showLineNumbers:!0,code:`package gestio;

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
}`}),r.jsx(A,{title:"Classe Main (Punt d'entrada)"}),r.jsx(w,{label:"app/Main.java",showLineNumbers:!0,code:`package app;

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
}`}),r.jsx(A,{title:"Sortida del Programa"}),r.jsx(cl,{label:"Resultat esperat a la consola",language:"bash",defaultOpen:!0,code:`Llibre afegit: Cent anys de solitud
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
Total: 3 llibres`}),r.jsx(A,{title:"Conceptes Aplicats"}),r.jsxs(Ne,{children:[r.jsx(F,{title:"Encapsulació",variant:"blue",children:r.jsxs("p",{children:["Tots els atributs són ",r.jsx("code",{children:"private"})," amb getters i setters."]})}),r.jsx(F,{title:"Constructors",variant:"yellow",children:r.jsxs("p",{children:["Cada classe té un constructor que inicialitza els atributs amb ",r.jsx("code",{children:"this"}),"."]})}),r.jsx(F,{title:"Composició",variant:"green",children:r.jsxs("p",{children:[r.jsx("code",{children:"Llibre"})," conté un objecte ",r.jsx("code",{children:"Autor"}),". ",r.jsx("code",{children:"Biblioteca"})," conté un array de ",r.jsx("code",{children:"Llibre"}),"."]})}),r.jsx(F,{title:"Packages",variant:"pink",children:r.jsxs("p",{children:["Classes organitzades en packages: ",r.jsx("code",{children:"model"}),", ",r.jsx("code",{children:"gestio"}),", ",r.jsx("code",{children:"app"}),"."]})})]}),r.jsx(k,{variant:"success",title:"Resum",children:r.jsx("p",{children:"Aquest exemple mostra com la POO ens permet crear un sistema complet i organitzat. Cada classe té una responsabilitat clara, les dades estan protegides amb encapsulació, i el codi està organitzat en packages. Així és com es programen les aplicacions reals."})})]})}const vs=[{name:"src/",type:"folder",description:"Carpeta arrel del codi font. Conté tots els fitxers .java organitzats en packages."},{name:"  model/",type:"folder",description:"Package que conté les classes de dades (entitats). Representen els objectes del domini: Producte, Client, Comanda..."},{name:"    Producte.java",type:"file",description:"Classe que representa un producte amb atributs privats (nom, preu, estoc), constructor, getters i setters. És una classe de model pura, sense lògica de negoci."},{name:"    Client.java",type:"file",description:"Classe que representa un client amb nom, email i historial de compres. Encapsula totes les dades del client amb validació als setters."},{name:"  servei/",type:"folder",description:"Package que conté la lògica de negoci. Aquí és on es fan els càlculs, validacions i operacions complexes."},{name:"    GestorProductes.java",type:"file",description:"Classe que gestiona la col·lecció de productes: afegir, eliminar, buscar, calcular el valor total de l'inventari. Utilitza objectes de la classe Producte."},{name:"    GestorComandes.java",type:"file",description:"Classe que gestiona les comandes: crear comanda, afegir productes, calcular total, aplicar descomptes. Coordina Producte i Client."},{name:"  app/",type:"folder",description:"Package que conté el punt d'entrada de l'aplicació. Aquí és on està el main() que inicia el programa."},{name:"    Main.java",type:"file",description:"Classe principal amb el mètode main(). Crea objectes de les altres classes, els connecta i executa el programa. És el punt d'entrada."}];function F1(){const[e,t]=C.useState(null);return r.jsxs("div",{children:[r.jsx(A,{title:"Introducció a la Modularitat"}),r.jsx(k,{variant:"info",title:"Què és la modularitat?",children:r.jsxs("p",{children:["La ",r.jsx("strong",{children:"modularitat"})," és el principi de dividir un programa en parts més petites, independents i reutilitzables, anomenades ",r.jsx("strong",{children:"mòduls"}),". Cada mòdul té una responsabilitat concreta i ben definida. En Java, els mòduls són les ",r.jsx("strong",{children:"classes"})," organitzades en ",r.jsx("strong",{children:"packages"}),"."]})}),r.jsx(A,{title:"Analogia: La Ciutat"}),r.jsxs(k,{variant:"explanation",children:[r.jsxs("p",{children:["Imagina una ",r.jsx("strong",{children:"ciutat"}),". Una ciutat no és un sol edifici gegant on tot passa al mateix lloc. Està organitzada en zones: zona residencial, zona comercial, hospitals, escoles, parcs... Cada zona té la seva funció i són independents entre si, però es connecten mitjançant carrers i transport."]}),r.jsx("p",{style:{marginTop:"10px"},children:'Un programa modular funciona igual: cada classe és com una "zona" de la ciutat, amb una funció clara. Les classes es comuniquen entre si creant objectes i cridant mètodes, com els carrers que connecten les zones.'})]}),r.jsxs(Ne,{children:[r.jsx(F,{title:"Zona Residencial = Classe Model",variant:"blue",children:r.jsxs("p",{children:["On viuen les dades. Classes com ",r.jsx("code",{children:"Producte"}),", ",r.jsx("code",{children:"Client"})," que emmagatzemen informació."]})}),r.jsx(F,{title:"Zona Comercial = Classe Servei",variant:"yellow",children:r.jsxs("p",{children:["On passa la lògica de negoci. Classes com ",r.jsx("code",{children:"GestorProductes"})," que processen dades."]})}),r.jsx(F,{title:"Ajuntament = Classe Main",variant:"green",children:r.jsxs("p",{children:["El punt central que coordina tot. El ",r.jsx("code",{children:"main()"})," inicia i connecta les parts."]})}),r.jsx(F,{title:"Carrers = Objectes i Mètodes",variant:"pink",children:r.jsx("p",{children:"La comunicació entre mòduls. Crear objectes i cridar mètodes connecta les classes."})})]}),r.jsx(A,{title:"Per què codi modular?"}),r.jsxs(Ne,{children:[r.jsx(F,{title:"Fàcil de mantenir",variant:"blue",children:r.jsx("p",{children:"Si alguna cosa falla, saps exactament a quina classe mirar. No cal revisar 1000 línies de codi."})}),r.jsx(F,{title:"Reutilitzable",variant:"yellow",children:r.jsx("p",{children:"Una classe ben feta es pot reutilitzar en altres projectes. Escrius el codi un cop, l'uses moltes vegades."})}),r.jsx(F,{title:"Treball en equip",variant:"green",children:r.jsx("p",{children:"Cada persona pot treballar en una classe diferent sense interferir amb els altres."})}),r.jsx(F,{title:"Fàcil de testejar",variant:"pink",children:r.jsx("p",{children:"Pots provar cada classe per separat (tests unitaris) abans de juntar-ho tot."})})]}),r.jsx(A,{title:"Explorador d'Estructura de Projecte"}),r.jsx(k,{variant:"info",children:r.jsx("p",{children:"Fes clic a qualsevol fitxer o carpeta per veure la seva descripció i entendre la seva funció dins del projecte modular."})}),r.jsxs("div",{style:{display:"flex",gap:"20px",marginTop:"16px",flexWrap:"wrap"},children:[r.jsxs("div",{style:{flex:"1",minWidth:"280px",backgroundColor:"#1e2837",borderRadius:"8px",padding:"16px",fontFamily:"monospace",fontSize:"14px"},children:[r.jsx("div",{style:{color:"#ffd700",marginBottom:"12px",fontWeight:"bold"},children:"Estructura del Projecte"}),vs.map((n,a)=>r.jsxs("div",{onClick:()=>t(a),style:{padding:"6px 8px",cursor:"pointer",borderRadius:"4px",color:e===a?"#ffd700":n.type==="folder"?"#90cdf4":"#e8eef5",backgroundColor:e===a?"rgba(255, 215, 0, 0.1)":"transparent",fontWeight:n.type==="folder"?"bold":"normal",transition:"background-color 0.2s"},onMouseOver:i=>{e!==a&&(i.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.05)")},onMouseOut:i=>{e!==a&&(i.currentTarget.style.backgroundColor="transparent")},children:[n.type==="folder"?"📁 ":"📄 ",n.name]},a))]}),r.jsx("div",{style:{flex:"1",minWidth:"280px",backgroundColor:"#f0f4f8",borderRadius:"8px",padding:"20px",border:"2px solid #d0dae6"},children:e!==null?r.jsxs(r.Fragment,{children:[r.jsx("h4",{style:{color:"#1a4d8f",marginBottom:"12px"},children:vs[e].name.trim()}),r.jsx("p",{style:{color:"#4a5568",lineHeight:"1.6"},children:vs[e].description})]}):r.jsx("p",{style:{color:"#a0aec0",fontStyle:"italic"},children:"Selecciona un fitxer o carpeta per veure la seva descripció."})})]}),r.jsx(A,{title:"Exemple Bàsic de Modularitat"}),r.jsx(w,{label:"Dues classes separades que col·laboren",showLineNumbers:!0,code:`// Fitxer: Salutador.java
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
}`}),r.jsx(k,{variant:"success",title:"Resum",children:r.jsx("p",{children:"La modularitat és dividir el programa en classes amb responsabilitats clares. Cada classe és un mòdul independent que es pot reutilitzar, testejar i mantenir per separat. Les classes es comuniquen creant objectes i cridant mètodes."})})]})}function D1(){return r.jsxs("div",{children:[r.jsx(A,{title:"El Problema del Codi Monolític"}),r.jsx(k,{variant:"warning",title:"Què és un programa monolític?",children:r.jsxs("p",{children:["Un programa ",r.jsx("strong",{children:"monolític"})," és aquell on ",r.jsx("strong",{children:"tot el codi"})," està en un sol fitxer o classe. Totes les variables, tota la lògica, totes les funcionalitats... tot barrejat en un únic ",r.jsx("code",{children:"main()"}),". Funciona per a programes petits, però es converteix en un problema seriós a mesura que el programa creix."]})}),r.jsx(A,{title:"Exemple: Tot en un sol fitxer"}),r.jsx(w,{label:"Programa monolític (MAL disseny)",showLineNumbers:!0,code:`public class MonoliticApp {
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
}`}),r.jsx(A,{title:"Monolític vs Modular"}),r.jsxs(he,{children:[r.jsx(Q,{title:"Programa Monolític",variant:"bad",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Tot en un sol fitxer:"})," variables, lògica, sortida... tot barrejat"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Difícil de llegir:"})," quan el programa creix, és impossible entendre-ho"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Difícil de mantenir:"})," un canvi pot trencar tot el programa"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"No reutilitzable:"})," no pots reutilitzar parts del codi en altres projectes"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"No testejable:"})," no pots provar una funcionalitat sense executar-ho tot"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Conflictes en equip:"})," dues persones no poden treballar al mateix fitxer sense conflictes"]})]})}),r.jsx(Q,{title:"Programa Modular",variant:"good",children:r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Classes separades:"})," cada classe té una responsabilitat"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Fàcil de llegir:"})," cada fitxer és curt i clar"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Fàcil de mantenir:"})," un canvi en una classe no afecta les altres"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Reutilitzable:"})," pots usar les classes en altres projectes"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Testejable:"})," pots provar cada classe per separat"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Treball en equip:"})," cada persona treballa en una classe diferent"]})]})})]}),r.jsx(A,{title:"Problemes Concrets del Codi Monolític"}),r.jsxs(Ne,{children:[r.jsx(F,{title:"Efecte Espagueti",variant:"pink",children:r.jsx("p",{children:"El codi s'entrelliga com els espaguetis. Una variable definida a la línia 10 s'utilitza a la línia 200 i es modifica a la línia 450. Impossible de seguir."})}),r.jsx(F,{title:"Duplicació de Codi",variant:"pink",children:r.jsx("p",{children:"Sense mòduls, acabes copiant i enganxant el mateix codi en diversos llocs. Si has de canviar alguna cosa, l'has de canviar en tots els llocs."})}),r.jsx(F,{title:"Debugging Impossible",variant:"pink",children:r.jsx("p",{children:"Quan hi ha un error, has de revisar tot el fitxer. No pots aïllar el problema perquè tot està connectat. Un bug pot estar en qualsevol de les 1000 línies."})}),r.jsx(F,{title:"Escalabilitat Zero",variant:"pink",children:r.jsx("p",{children:"Afegir una nova funcionalitat significa modificar el fitxer monolític, amb el risc de trencar les funcionalitats existents."})})]}),r.jsx(A,{title:"La Solució: Dividir en Classes"}),r.jsxs(k,{variant:"success",children:[r.jsxs("p",{children:["La solució és ",r.jsx("strong",{children:"dividir el programa en classes"}),", on cada classe té una responsabilitat única i ben definida. Així aconseguim:"]}),r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Separació de responsabilitats:"})," cada classe fa UNA cosa"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Encapsulació:"})," les dades estan protegides dins de cada classe"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Reutilització:"})," les classes es poden usar en múltiples projectes"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Mantenibilitat:"})," és fàcil trobar i corregir errors"]})]})]}),r.jsxs(he,{children:[r.jsx(Q,{title:"Monolític: 1 fitxer",variant:"bad",children:r.jsx(w,{language:"bash",code:`projecte/
  MonoliticApp.java  (500+ línies)`})}),r.jsx(Q,{title:"Modular: múltiples classes",variant:"good",children:r.jsx(w,{language:"bash",code:`projecte/
  model/
    Producte.java     (30 línies)
  servei/
    GestorProductes.java (50 línies)
  app/
    Main.java         (20 línies)`})})]}),r.jsx(k,{variant:"info",title:"Recorda",children:r.jsxs("p",{children:["El primer pas per millorar el teu codi és ",r.jsx("strong",{children:"identificar les responsabilitats"})," del teu programa i crear una classe per a cadascuna. A la següent pàgina veurem com fer-ho pas a pas amb un exemple concret."]})})]})}function z1(){return r.jsxs("div",{children:[r.jsx(A,{title:"Packages: Organització del Codi"}),r.jsx(k,{variant:"info",title:"Què és un package?",children:r.jsxs("p",{children:["Un ",r.jsx("strong",{children:"package"})," és una carpeta que agrupa classes relacionades. És la manera que té Java d'organitzar el codi en projectes grans. Cada fitxer ",r.jsx("code",{children:".java"})," declara a quin package pertany, i per utilitzar classes d'un altre package cal importar-les."]})}),r.jsx(A,{title:"Estructura de Carpetes"}),r.jsx(k,{variant:"explanation",children:r.jsxs("p",{children:["L'estructura de carpetes del projecte ha de coincidir amb la declaració dels packages. Cada package és una carpeta, i cada classe és un fitxer",r.jsx("code",{children:".java"})," dins d'aquesta carpeta."]})}),r.jsx(w,{label:"Estructura de carpetes d'un projecte",language:"bash",code:`el-meu-projecte/
  src/
    utils/                          ← Package "utils"
      CalculsArrayReals.java
      Validador.java
    model/                          ← Package "model"
      Producte.java
      Client.java
    app/                            ← Package "app"
      Main.java`}),r.jsx(A,{title:"Declaració de Package"}),r.jsx(k,{variant:"warning",title:"Regla important",children:r.jsxs("p",{children:["La declaració ",r.jsx("code",{children:"package"})," ha de ser la ",r.jsx("strong",{children:"primera instrucció"})," del fitxer Java, abans de qualsevol ",r.jsx("code",{children:"import"})," o declaració de classe. El nom del package ha de coincidir exactament amb el nom de la carpeta."]})}),r.jsx(w,{label:"Declaració del package",showLineNumbers:!0,code:`// Fitxer: src/utils/CalculsArrayReals.java
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
}`}),r.jsx(A,{title:"Mètodes d'Importació"}),r.jsx(k,{variant:"info",children:r.jsxs("p",{children:["Per utilitzar una classe d'un altre package, hi ha ",r.jsx("strong",{children:"tres mètodes"})," d'importació. Cadascun té els seus avantatges."]})}),r.jsx(ge,{headers:["Mètode","Sintaxi","Quan usar-lo"],rows:[{group:"Mètodes d'importació"},{cells:["Import explícit","import utils.CalculsArrayReals;","Quan uses una o poques classes concretes"]},{cells:["Import amb comodí (*)","import utils.*;","Quan uses moltes classes del mateix package"]},{cells:["Nom qualificat","utils.CalculsArrayReals c = new utils.CalculsArrayReals();","Per evitar ambigüitats o ús puntual"]}]}),r.jsxs(Ne,{children:[r.jsxs(F,{title:"Import Explícit",variant:"blue",children:[r.jsxs("p",{children:["Importa una classe concreta. És el mètode ",r.jsx("strong",{children:"recomanat"}),"."]}),r.jsx(w,{code:`package app;

import utils.CalculsArrayReals;
import model.Producte;

public class Main {
    public static void main(String[] args) {
        CalculsArrayReals c = new CalculsArrayReals();
        Producte p = new Producte();
    }
}`}),r.jsx(k,{variant:"success",children:r.jsx("p",{children:"Queda clar quines classes s'estan usant."})})]}),r.jsxs(F,{title:"Import amb Comodí (*)",variant:"yellow",children:[r.jsxs("p",{children:["Importa ",r.jsx("strong",{children:"totes"})," les classes d'un package."]}),r.jsx(w,{code:`package app;

import utils.*;    // Totes les classes de utils
import model.*;    // Totes les classes de model

public class Main {
    public static void main(String[] args) {
        CalculsArrayReals c = new CalculsArrayReals();
        Producte p = new Producte();
        Validador v = new Validador();
    }
}`}),r.jsx(k,{variant:"warning",children:r.jsx("p",{children:"Més còmode, però menys clar. No saps quines classes s'usen realment."})})]}),r.jsxs(F,{title:"Nom Qualificat",variant:"green",children:[r.jsxs("p",{children:["Usa el nom complet ",r.jsx("strong",{children:"sense import"}),"."]}),r.jsx(w,{code:`package app;

// Sense import!
public class Main {
    public static void main(String[] args) {
        utils.CalculsArrayReals c =
            new utils.CalculsArrayReals();
        model.Producte p =
            new model.Producte();
    }
}`}),r.jsx(k,{variant:"info",children:r.jsx("p",{children:"Útil quan dues classes de packages diferents tenen el mateix nom."})})]})]}),r.jsx(A,{title:"Convencions de Noms"}),r.jsx(ge,{headers:["Regla","Exemple Correcte","Exemple Incorrecte"],rows:[{cells:["Tot en minúscules","package model;","package Model;"]},{cells:["Sense espais","package gestordades;","package gestor dades;"]},{cells:["Sense caràcters especials","package utils;","package utils-helpers;"]},{cells:["Noms descriptius","package controlador;","package ctrl;"]},{cells:["Domini invers (professional)","package com.lasalle.app;","package app.lasalle.com;"]}]}),r.jsx(k,{variant:"explanation",title:"Convenció del domini invers",children:r.jsxs("p",{children:["En projectes professionals, els packages comencen amb el ",r.jsx("strong",{children:"domini invers"})," de l'organització. Això evita conflictes de noms entre projectes de diferents empreses."]})}),r.jsx(w,{label:"Exemple amb domini invers",code:`// Projecte de La Salle
package com.lasalle.programacio.model;
package com.lasalle.programacio.vista;
package com.lasalle.programacio.controlador;

// Projecte de Google
package com.google.maps.model;
package com.google.maps.api;`}),r.jsx(A,{title:"Exemple Complet"}),r.jsxs(he,{children:[r.jsx(Q,{title:"Estructura del projecte",variant:"blue",children:r.jsx(w,{language:"bash",code:`projecte/
  src/
    utils/
      Matematiques.java
    app/
      Main.java`})}),r.jsx(Q,{title:"Compilar i executar",variant:"blue",children:r.jsx(w,{language:"bash",code:`# Compilar
javac -d bin src/utils/Matematiques.java
javac -d bin -cp bin src/app/Main.java

# Executar
java -cp bin app.Main`})})]}),r.jsx(w,{label:"utils/Matematiques.java",showLineNumbers:!0,code:`package utils;

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
}`}),r.jsx(w,{label:"app/Main.java",showLineNumbers:!0,code:`package app;

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
}`}),r.jsx(k,{variant:"success",title:"Resum",children:r.jsxs("p",{children:["Els packages organitzen les classes en carpetes. Declara el package a la primera línia, utilitza ",r.jsx("code",{children:"import"})," per accedir a classes d'altres packages (preferiblement import explícit), i segueix les convencions de noms (tot en minúscules, domini invers en projectes professionals)."]})})]})}function B1(){return r.jsxs("div",{children:[r.jsx(A,{title:"Exemple Complet: Calculadora Modular"}),r.jsx(k,{variant:"info",title:"Objectiu",children:r.jsxs("p",{children:["Crearem una calculadora modular formada per ",r.jsx("strong",{children:"dues classes"}),": una classe ",r.jsx("code",{children:"Operacions"})," que conté els mètodes de càlcul (sumar, restar, multiplicar, dividir) i una classe ",r.jsx("code",{children:"Calculadora"})," amb el ",r.jsx("code",{children:"main()"}),"que la utilitza. Aplicarem tots els conceptes de modularitat apresos."]})}),r.jsx(A,{title:"Estructura del Projecte"}),r.jsx(w,{label:"Organització de fitxers",language:"bash",code:`calculadora/
  src/
    utils/
      Operacions.java       ← Classe amb els mètodes de càlcul
    app/
      Calculadora.java      ← Classe principal amb el main()`}),r.jsxs(he,{children:[r.jsxs(Q,{title:"Operacions.java",variant:"blue",children:[r.jsxs("p",{children:["La classe ",r.jsx("strong",{children:"auxiliar"})," que conté tota la lògica de càlcul."]}),r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsx("li",{children:r.jsx("code",{children:"sumar(a, b)"})}),r.jsx("li",{children:r.jsx("code",{children:"restar(a, b)"})}),r.jsx("li",{children:r.jsx("code",{children:"multiplicar(a, b)"})}),r.jsxs("li",{children:[r.jsx("code",{children:"dividir(a, b)"})," amb control de divisió per zero"]})]})]}),r.jsxs(Q,{title:"Calculadora.java",variant:"blue",children:[r.jsxs("p",{children:["La classe ",r.jsx("strong",{children:"principal"})," que usa Operacions."]}),r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[r.jsxs("li",{children:["Pas 1: Instancia ",r.jsx("code",{children:"Operacions"})]}),r.jsx("li",{children:"Pas 2: Crida els mètodes"}),r.jsx("li",{children:"Mostra els resultats"})]})]})]}),r.jsx(A,{title:"Classe Operacions"}),r.jsx(w,{label:"utils/Operacions.java",showLineNumbers:!0,code:`package utils;

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
}`}),r.jsx(k,{variant:"warning",title:"Control de divisió per zero",children:r.jsxs("p",{children:["El mètode ",r.jsx("code",{children:"dividir"})," comprova si el divisor és zero abans de fer la divisió. Si és zero, mostra un missatge d'error i retorna 0. Això evita l'error ",r.jsx("code",{children:"ArithmeticException"})," que es produiria en una divisió per zero amb enters, i el resultat ",r.jsx("code",{children:"Infinity"})," amb doubles."]})}),r.jsx(A,{title:"Classe Calculadora (Main)"}),r.jsx(w,{label:"app/Calculadora.java",showLineNumbers:!0,code:`package app;

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
}`}),r.jsx(A,{title:"Sortida del Programa"}),r.jsx(cl,{label:"Resultat esperat a la consola",language:"bash",defaultOpen:!0,code:`=== CALCULADORA ===
20.0 + 5.0 = 25.0
20.0 - 5.0 = 15.0
20.0 * 5.0 = 100.0
20.0 / 5.0 = 4.0

--- Prova divisio per zero ---
Error: No es pot dividir per zero!
Resultat: 0.0`}),r.jsx(A,{title:"Per què és millor que tot al main?"}),r.jsxs(he,{children:[r.jsx(Q,{title:"Tot al main (monolític)",variant:"bad",children:r.jsx(w,{code:`public static void main(String[] args) {
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
}`})}),r.jsx(Q,{title:"Modular (classe separada)",variant:"good",children:r.jsx(w,{code:`public static void main(String[] args) {
    double a = 20, b = 5;

    // 1. Instanciar
    Operacions op = new Operacions();

    // 2. Cridar metodes
    System.out.println(op.sumar(a, b));
    System.out.println(op.restar(a, b));
    System.out.println(op.multiplicar(a, b));
    System.out.println(op.dividir(a, b));

    // Clar, net, reutilitzable!
}`})})]}),r.jsx(A,{title:"Conceptes Aplicats"}),r.jsxs(Ne,{children:[r.jsx(F,{title:"Modularitat",variant:"blue",children:r.jsx("p",{children:"El codi està dividit en dues classes amb responsabilitats clares i separades."})}),r.jsx(F,{title:"Packages",variant:"yellow",children:r.jsxs("p",{children:["Les classes estan organitzades en packages: ",r.jsx("code",{children:"utils"})," per als càlculs, ",r.jsx("code",{children:"app"})," per al main."]})}),r.jsx(F,{title:"Import",variant:"green",children:r.jsxs("p",{children:["S'utilitza ",r.jsx("code",{children:"import utils.Operacions;"})," per accedir a la classe auxiliar des d'un altre package."]})}),r.jsx(F,{title:"Control d'Errors",variant:"pink",children:r.jsxs("p",{children:["El mètode ",r.jsx("code",{children:"dividir"})," comprova la divisió per zero abans d'operar, evitant errors en temps d'execució."]})})]}),r.jsx(cl,{label:"Versió ampliada: més operacions",code:`package utils;

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
}`}),r.jsx(k,{variant:"success",title:"Resum",children:r.jsxs("p",{children:["Aquest exemple mostra com crear una calculadora modular amb dues classes.",r.jsx("code",{children:" Operacions"})," conté tota la lògica de càlcul amb control d'errors, i ",r.jsx("code",{children:"Calculadora"})," la utilitza seguint els 2 passos: instanciar i cridar mètodes. El codi és net, reutilitzable i fàcil d'ampliar."]})})]})}const q1=`// String es un OBJECTE, no un tipus primitiu
String salutacio = "Hola, mon!";

// Internament, Java gestiona String com un objecte immutable
// Cada vegada que "modifiquem" un String, es crea un objecte NOU
String original = "Hola";
String modificat = original.toUpperCase(); // Crea un nou objecte "HOLA"
System.out.println(original);   // "Hola" - no ha canviat!
System.out.println(modificat);  // "HOLA" - objecte nou`,U1=`// Forma 1: Literal (RECOMANADA)
// Java reutilitza objectes del "String Pool"
String nom1 = "Anna";
String nom2 = "Anna"; // Reutilitza el mateix objecte del pool

// Forma 2: Amb constructor new
// Crea SEMPRE un objecte nou a memoria (heap)
String nom3 = new String("Anna"); // Objecte diferent!
String nom4 = new String("Anna"); // Un altre objecte diferent!

// Forma 3: A partir d'un array de chars
char[] lletres = {'J', 'a', 'v', 'a'};
String paraula = new String(lletres); // "Java"`,$1=`String a = "Hola";
String b = "Hola";
String c = new String("Hola");

// == compara REFERENCIES (adreces de memoria), NO contingut!
System.out.println(a == b); // true  (mateix objecte al pool)
System.out.println(a == c); // FALSE! (objectes diferents a memoria)

// Aixo es un ERROR molt comu en Java!
// Encara que a i c contenen "Hola", == diu false
// perque apunten a posicions de memoria diferents`,H1=`String a = "Hola";
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
System.out.println("Anna".compareTo("Anna"));  // 0 (iguals)`,V1=`String text = "Programacio";

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
// P r o g r a m a c i o`,G1=`String frase = "Bon dia, Java!";

// substring(inici) - des de l'index fins al final
System.out.println(frase.substring(9));    // "Java!"

// substring(inici, fi) - des de inici fins a fi (sense incloure fi)
System.out.println(frase.substring(0, 7)); // "Bon dia"
System.out.println(frase.substring(4, 7)); // "dia"

// Exemple practic: extreure extensio d'un fitxer
String arxiu = "document.pdf";
String extensio = arxiu.substring(arxiu.lastIndexOf(".") + 1);
System.out.println(extensio); // "pdf"`,W1=`String text = "Java es genial, Java es potent";

// indexOf(str) - primera aparicio
System.out.println(text.indexOf("Java"));    // 0
System.out.println(text.indexOf("es"));      // 5
System.out.println(text.indexOf("Python"));  // -1 (no trobat)

// indexOf(str, fromIndex) - cerca des d'una posicio
System.out.println(text.indexOf("Java", 1)); // 16

// lastIndexOf(str) - ultima aparicio
System.out.println(text.lastIndexOf("Java")); // 16
System.out.println(text.lastIndexOf("es"));   // 21`,J1=`String url = "https://www.exemple.cat/pagina";

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
System.out.println("Email valid: " + valid); // true`,Q1=`// toUpperCase() - convertir a majuscules
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
System.out.println(net); // "barcelona"`,Y1=`String frase = "Java es dificil, Java es avorrit";

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
System.out.println(net); // "12345678A"`,K1=`// split(regex) - divideix el String en un array
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
System.out.println("Vocals: " + vocals); // 5`,Z1=`// concat(str) - concatena dos Strings
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
System.out.println(s1.length()); // 2 (es un String "42", no un numero)`,X1=`// Opcio 1: Operador + (senzill, per poques concatenacions)
String nom = "Anna";
int edat = 20;
String missatge = "Hola, " + nom + "! Tens " + edat + " anys.";

// Opcio 2: concat() (nomes Strings, no converteix altres tipus)
String salut = "Hola".concat(", ").concat(nom);

// Opcio 3: StringBuilder (EFICIENT per moltes concatenacions)
// Quan concatenem amb + dins d'un bucle, Java crea molts objectes temporals
// StringBuilder evita aquest problema`,ew=`// StringBuilder: MOLT mes eficient en bucles
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
System.out.println(sb2.length()); // 4`,tw=`// MAL: Concatenacio amb + en un bucle (crea molts objectes!)
String resultat = "";
for (int i = 0; i < 1000; i++) {
    resultat += i + ", "; // Cada iteracio crea un objecte String NOU
}

// BE: StringBuilder en un bucle (eficient!)
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i).append(", ");
}
String resultat2 = sb.toString(); // Nomes crea un String al final`,rw=`public class ExempleStrings {
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
}`;function nw(){return r.jsxs("div",{children:[r.jsx(A,{title:"La Classe String"}),r.jsxs(k,{variant:"info",title:"Què és String?",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"String"})," és una ",r.jsx("strong",{children:"classe"})," de Java, no un tipus primitiu. Representa una cadena de caràcters i és un dels objectes més utilitzats en programació."]}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"És un objecte:"}),' tot i que es pot crear amb literals ("text"), internament és un objecte de la classe ',r.jsx("code",{children:"java.lang.String"}),"."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"És immutable:"}),' un cop creat, el seu contingut NO es pot modificar. Qualsevol operació que "modifiqui" un String en realitat crea un objecte nou.']}),r.jsxs("li",{children:[r.jsx("strong",{children:"String Pool:"}),' Java manté un "pool" de Strings literals per reutilitzar objectes i estalviar memòria.']})]})]}),r.jsx(w,{code:q1,label:"String és un objecte immutable",showLineNumbers:!0}),r.jsx(A,{title:"Crear Strings"}),r.jsx(w,{code:U1,label:"Maneres de crear Strings",showLineNumbers:!0}),r.jsxs(he,{children:[r.jsxs(Q,{title:"Literal (recomanat)",variant:"good",children:[r.jsx("p",{children:r.jsx("code",{children:'String s = "Hola";'})}),r.jsxs("ul",{children:[r.jsx("li",{children:"Més eficient (reutilitza objectes del pool)"}),r.jsx("li",{children:"Forma habitual i recomanada"}),r.jsx("li",{children:"Java optimitza automàticament"})]})]}),r.jsxs(Q,{title:"Constructor new",variant:"bad",children:[r.jsx("p",{children:r.jsx("code",{children:'String s = new String("Hola");'})}),r.jsxs("ul",{children:[r.jsx("li",{children:"Crea sempre un objecte nou"}),r.jsx("li",{children:"No aprofita el String Pool"}),r.jsx("li",{children:"Gasta més memòria innecessàriament"})]})]})]}),r.jsx(A,{title:"Comparar Strings"}),r.jsxs(k,{variant:"error",title:"ERROR COMÚ: Usar == per comparar Strings",children:[r.jsxs("p",{children:["L'operador ",r.jsx("code",{children:"=="})," compara ",r.jsx("strong",{children:"referències"})," (adreces de memòria), NO el contingut dels Strings. Dos Strings poden contenir el mateix text però estar en posicions de memòria diferents, i ",r.jsx("code",{children:"=="})," diria ",r.jsx("code",{children:"false"}),"."]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Sempre"})," utilitza ",r.jsx("code",{children:".equals()"})," o ",r.jsx("code",{children:".equalsIgnoreCase()"})," per comparar el contingut de Strings!"]})]}),r.jsx(w,{code:$1,label:"Per què == NO funciona per comparar contingut",showLineNumbers:!0}),r.jsx(w,{code:H1,label:"Comparació correcta amb .equals() i .equalsIgnoreCase()",showLineNumbers:!0}),r.jsx(ge,{headers:["Mètode","Compara","Retorna","Exemple"],rows:[{cells:["==","Referències (memòria)","boolean",'"Hola" == "Hola" // depèn!']},{cells:[".equals()","Contingut exacte","boolean",'"Hola".equals("Hola") // true']},{cells:[".equalsIgnoreCase()","Contingut (ignora cas)","boolean",'"Hola".equalsIgnoreCase("hola") // true']},{cells:[".compareTo()","Ordre lexicogràfic","int (neg/0/pos)",'"Anna".compareTo("Marc") // negatiu']}]}),r.jsx(A,{title:"Mètodes de la Classe String"}),r.jsx(ge,{headers:["Mètode","Descripció","Retorna","Exemple"],rows:[{group:"Longitud i Accés"},{cells:["length()","Nombre de caràcters","int",'"Hola".length() // 4']},{cells:["charAt(i)","Caràcter a la posició i","char",`"Hola".charAt(0) // 'H'`]},{cells:["isEmpty()","Comprova si està buit","boolean",'"".isEmpty() // true']},{group:"Cerca"},{cells:["indexOf(str)","Posició de la primera aparició","int (-1 si no trobat)",'"Hola".indexOf("la") // 2']},{cells:["lastIndexOf(str)","Posició de la última aparició","int (-1 si no trobat)",'"abab".lastIndexOf("ab") // 2']},{cells:["contains(str)","Conté el substring?","boolean",'"Hola".contains("ol") // true']},{cells:["startsWith(str)","Comença amb...?","boolean",'"Hola".startsWith("Ho") // true']},{cells:["endsWith(str)","Acaba amb...?","boolean",'"Hola".endsWith("la") // true']},{group:"Extracció"},{cells:["substring(inici)","Des de inici fins al final","String",'"Hola".substring(2) // "la"']},{cells:["substring(inici, fi)","Des de inici fins a fi (exclusiu)","String",'"Hola".substring(1,3) // "ol"']},{group:"Transformació"},{cells:["toUpperCase()","Converteix a majúscules","String",'"hola".toUpperCase() // "HOLA"']},{cells:["toLowerCase()","Converteix a minúscules","String",'"HOLA".toLowerCase() // "hola"']},{cells:["trim()","Elimina espais extrems","String",'"  hola  ".trim() // "hola"']},{cells:["replace(vell, nou)","Substitueix aparicions","String",'"hola".replace("o","0") // "h0la"']},{group:"Divisió i Conversió"},{cells:["split(regex)","Divideix en array","String[]",'"a,b,c".split(",") // ["a","b","c"]']},{cells:["toCharArray()","Converteix a array de chars","char[]",'"Hola".toCharArray()']},{cells:["concat(str)","Concatena amb un altre String","String",'"Hola".concat(" Mon") // "Hola Mon"']},{cells:["String.valueOf(x)","Converteix qualsevol valor a String","String",'String.valueOf(42) // "42"']}]}),r.jsx(A,{title:"Exemples Detallats"}),r.jsx(k,{variant:"explanation",title:"length() i charAt()",children:r.jsxs("p",{children:[r.jsx("code",{children:"length()"})," retorna el nombre total de caràcters. ",r.jsx("code",{children:"charAt(index)"})," retorna el caràcter a una posició concreta (començant des de 0)."]})}),r.jsx(w,{code:V1,label:"length() i charAt() - Longitud i accés per posició",showLineNumbers:!0}),r.jsx(w,{code:G1,label:"substring() - Extreure parts d'un String",showLineNumbers:!0}),r.jsx(w,{code:W1,label:"indexOf() i lastIndexOf() - Cercar dins d'un String",showLineNumbers:!0}),r.jsx(w,{code:J1,label:"contains(), startsWith(), endsWith() - Comprovacions",showLineNumbers:!0}),r.jsx(w,{code:Q1,label:"toUpperCase(), toLowerCase(), trim(), isEmpty()",showLineNumbers:!0}),r.jsx(w,{code:Y1,label:"replace() - Substituir text",showLineNumbers:!0}),r.jsx(w,{code:K1,label:"split() i toCharArray() - Dividir un String",showLineNumbers:!0}),r.jsx(w,{code:Z1,label:"concat() i String.valueOf() - Concatenar i convertir",showLineNumbers:!0}),r.jsx(A,{title:"Concatenació de Strings"}),r.jsx(k,{variant:"info",title:"Tres maneres de concatenar",children:r.jsxs("p",{children:["Hi ha tres formes principals de concatenar Strings en Java. L'operador ",r.jsx("code",{children:"+"})," és el més comú, però ",r.jsx("strong",{children:"StringBuilder"})," és molt més eficient quan fas moltes concatenacions (especialment dins de bucles)."]})}),r.jsx(w,{code:X1,label:"Les tres opcions de concatenació",showLineNumbers:!0}),r.jsx(A,{title:"StringBuilder"}),r.jsx(k,{variant:"warning",title:"Quan usar StringBuilder?",children:r.jsxs("p",{children:["Utilitza ",r.jsx("strong",{children:"StringBuilder"})," sempre que necessitis concatenar Strings dins d'un ",r.jsx("strong",{children:"bucle"})," o quan facis moltes operacions de concatenació. Com que String és immutable, cada ",r.jsx("code",{children:"+"})," crea un objecte nou, cosa que és molt ineficient en bucles grans."]})}),r.jsx(w,{code:ew,label:"StringBuilder - Mètodes principals",showLineNumbers:!0}),r.jsxs(he,{children:[r.jsx(Q,{title:"Concatenació amb + en bucle",variant:"bad",children:r.jsx("p",{children:"Cada iteració crea un objecte String nou. Molt lent per bucles grans."})}),r.jsx(Q,{title:"StringBuilder en bucle",variant:"good",children:r.jsx("p",{children:"Modifica el mateix objecte internament. Molt més ràpid i eficient."})})]}),r.jsx(w,{code:tw,label:"Comparació: + en bucle vs StringBuilder",showLineNumbers:!0}),r.jsx(A,{title:"Exemple Complet"}),r.jsx(k,{variant:"success",title:"Exemple pràctic: Analitzar una frase",children:r.jsx("p",{children:"Aquest exemple mostra com combinar diversos mètodes de String per analitzar i transformar una frase."})}),r.jsx(w,{code:rw,label:"Exemple complet: Analitzar i transformar text",showLineNumbers:!0}),r.jsx(A,{title:"Resum"}),r.jsxs(Ne,{children:[r.jsx(F,{title:"Immutabilitat",variant:"blue",children:r.jsx("p",{children:"Els Strings són immutables. Qualsevol modificació crea un objecte nou."})}),r.jsx(F,{title:"Comparació",variant:"blue",children:r.jsxs("p",{children:["Usa ",r.jsx("code",{children:".equals()"})," per comparar contingut. Mai ",r.jsx("code",{children:"=="})," per Strings."]})}),r.jsx(F,{title:"StringBuilder",variant:"blue",children:r.jsx("p",{children:"Utilitza StringBuilder per concatenacions en bucles. És molt més eficient."})}),r.jsx(F,{title:"Mètodes Útils",variant:"blue",children:r.jsx("p",{children:"String té més de 15 mètodes essencials: length, charAt, substring, indexOf, contains, replace, split, trim..."})})]})]})}const aw=`// Math es una classe utilitaria de java.lang
// TOTS els seus metodes son STATIC - no cal crear cap objecte
// No es pot instanciar: Math m = new Math(); // ERROR!

// S'utilitza directament amb el nom de la classe:
double resultat = Math.sqrt(25);      // 5.0
int maxim = Math.max(10, 20);         // 20
double aleatori = Math.random();       // 0.0 a 0.999...`,iw=`// Math.PI - El nombre Pi (3.141592653589793)
double perimetreCircle = 2 * Math.PI * 5; // Perimetre d'un cercle de radi 5
System.out.println("Perimetre: " + perimetreCircle); // 31.41592653589793

double areaCircle = Math.PI * Math.pow(5, 2); // Area d'un cercle de radi 5
System.out.println("Area: " + areaCircle); // 78.53981633974483

// Math.E - El nombre d'Euler (2.718281828459045)
double creixement = Math.E;
System.out.println("Nombre d'Euler: " + creixement); // 2.718281828459045`,lw=`// Math.abs(x) - Valor absolut (sempre positiu)
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
System.out.println("Maxim de tres: " + maxim); // 42`,sw=`// Math.pow(base, exponent) - Potencia
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
System.out.println("Hipotenusa: " + hipotenusa); // 5.0`,ow=`// Math.ceil(x) - Arrodoneix cap AMUNT (sostre)
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
System.out.println(tresDecimals); // 3.142`,cw=`// Math.random() - Retorna un double aleatori entre 0.0 (inclusiu) i 1.0 (exclusiu)
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
}`,uw=`// Math.log(x) - Logaritme natural (base e)
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
System.out.println("El numero " + numero + " te " + digits + " digits"); // 6`,dw=`// IMPORTANT: Les funcions trigonometriques treballen amb RADIANS, no graus!
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
System.out.println("Alcada aproximada: " + Math.round(alcada) + " metres"); // 87 metres`,pw=`public class ExempleMath {
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
}`;function mw(){return r.jsxs("div",{children:[r.jsx(A,{title:"La Classe Math"}),r.jsxs(k,{variant:"info",title:"Què és la classe Math?",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Math"})," és una ",r.jsx("strong",{children:"classe utilitària"})," de Java (",r.jsx("code",{children:"java.lang.Math"}),") que proporciona mètodes i constants per realitzar operacions matemàtiques."]}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Tots els mètodes són static:"})," es criden directament amb ",r.jsx("code",{children:"Math.mètode()"}),", sense crear cap objecte."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"No s'instancia:"})," no es pot fer ",r.jsx("code",{children:"new Math()"}),". La classe té el constructor privat."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"No cal import:"})," com que pertany a ",r.jsx("code",{children:"java.lang"}),", està disponible automàticament."]})]})]}),r.jsx(w,{code:aw,label:"Utilitzar la classe Math",showLineNumbers:!0}),r.jsx(A,{title:"Constants"}),r.jsx(ge,{headers:["Constant","Valor","Descripció"],rows:[{cells:["Math.PI","3.141592653589793","El nombre Pi - relació entre circumferència i diàmetre"]},{cells:["Math.E","2.718281828459045","El nombre d'Euler - base del logaritme natural"]}]}),r.jsx(w,{code:iw,label:"Constants Math.PI i Math.E",showLineNumbers:!0}),r.jsx(A,{title:"Mètodes de la Classe Math"}),r.jsx(ge,{headers:["Mètode","Descripció","Retorna","Exemple"],rows:[{group:"Valor Absolut i Comparació"},{cells:["Math.abs(x)","Valor absolut","int/double","Math.abs(-5) // 5"]},{cells:["Math.max(a, b)","El major dels dos valors","int/double","Math.max(3, 7) // 7"]},{cells:["Math.min(a, b)","El menor dels dos valors","int/double","Math.min(3, 7) // 3"]},{group:"Potències i Arrels"},{cells:["Math.pow(base, exp)","Potència (base^exp)","double","Math.pow(2, 3) // 8.0"]},{cells:["Math.sqrt(x)","Arrel quadrada","double","Math.sqrt(25) // 5.0"]},{cells:["Math.cbrt(x)","Arrel cúbica","double","Math.cbrt(27) // 3.0"]},{group:"Arrodoniment"},{cells:["Math.ceil(x)","Arrodoneix cap amunt (sostre)","double","Math.ceil(3.1) // 4.0"]},{cells:["Math.floor(x)","Arrodoneix cap avall (terra)","double","Math.floor(3.9) // 3.0"]},{cells:["Math.round(x)","Arrodoneix al més proper","long","Math.round(3.5) // 4"]},{group:"Aleatori"},{cells:["Math.random()","Nombre aleatori [0.0, 1.0)","double","Math.random() // 0.7423..."]},{group:"Logaritmes"},{cells:["Math.log(x)","Logaritme natural (base e)","double","Math.log(Math.E) // 1.0"]},{cells:["Math.log10(x)","Logaritme en base 10","double","Math.log10(100) // 2.0"]},{group:"Trigonometria (radians)"},{cells:["Math.sin(x)","Sinus","double","Math.sin(Math.PI/2) // 1.0"]},{cells:["Math.cos(x)","Cosinus","double","Math.cos(0) // 1.0"]},{cells:["Math.tan(x)","Tangent","double","Math.tan(Math.PI/4) // ~1.0"]},{cells:["Math.toRadians(x)","Graus a radians","double","Math.toRadians(180) // PI"]}]}),r.jsx(A,{title:"Exemples Detallats"}),r.jsx(k,{variant:"explanation",title:"abs(), max(), min()",children:r.jsxs("p",{children:[r.jsx("code",{children:"Math.abs()"})," retorna el valor absolut (sempre positiu).",r.jsx("code",{children:" Math.max()"})," i ",r.jsx("code",{children:"Math.min()"})," retornen el major i menor de dos valors. Es poden anidar per comparar més de dos valors."]})}),r.jsx(w,{code:lw,label:"abs(), max(), min() - Valor absolut i comparacions",showLineNumbers:!0}),r.jsx(w,{code:sw,label:"pow(), sqrt(), cbrt() - Potències i arrels",showLineNumbers:!0}),r.jsx(k,{variant:"warning",title:"Math.round() vs Math.ceil() vs Math.floor()",children:r.jsxs("p",{children:["No confonguis aquests tres mètodes! ",r.jsx("code",{children:"ceil()"})," sempre arrodoneix cap amunt,",r.jsx("code",{children:" floor()"})," sempre cap avall, i ",r.jsx("code",{children:"round()"})," al més proper. Amb nombres negatius el comportament pot ser confús: ",r.jsx("code",{children:"Math.floor(-2.3)"})," dona ",r.jsx("code",{children:"-3.0"}),", no ",r.jsx("code",{children:"-2.0"}),"!"]})}),r.jsx(w,{code:ow,label:"ceil(), floor(), round() - Arrodoniment",showLineNumbers:!0}),r.jsx(w,{code:cw,label:"Math.random() - Nombres aleatoris",showLineNumbers:!0}),r.jsxs(k,{variant:"success",title:"Fórmula per enters aleatoris en un rang",children:[r.jsxs("p",{children:["La fórmula per obtenir un enter aleatori entre ",r.jsx("code",{children:"min"})," i ",r.jsx("code",{children:"max"})," (ambdós inclusius) és:"]}),r.jsx("p",{children:r.jsx("code",{children:"int aleatori = (int)(Math.random() * (max - min + 1)) + min;"})})]}),r.jsx(w,{code:uw,label:"log(), log10() - Logaritmes",showLineNumbers:!0}),r.jsx(k,{variant:"warning",title:"Trigonometria: Radians, no Graus!",children:r.jsxs("p",{children:["Les funcions ",r.jsx("code",{children:"Math.sin()"}),", ",r.jsx("code",{children:"Math.cos()"})," i ",r.jsx("code",{children:"Math.tan()"})," esperen l'angle en ",r.jsx("strong",{children:"radians"}),", no en graus. Utilitza ",r.jsx("code",{children:"Math.toRadians(graus)"})," per convertir graus a radians abans de passar-los a aquestes funcions."]})}),r.jsx(w,{code:dw,label:"sin(), cos(), tan(), toRadians() - Trigonometria",showLineNumbers:!0}),r.jsx(A,{title:"Exemple Complet"}),r.jsx(k,{variant:"success",title:"Exemple pràctic: Càlculs amb Math",children:r.jsx("p",{children:"Un exemple que combina diversos mètodes de Math per fer càlculs de cercles, distàncies, simulació de daus i ajust de notes."})}),r.jsx(w,{code:pw,label:"Exemple complet amb múltiples mètodes de Math",showLineNumbers:!0}),r.jsx(A,{title:"Patrons Pràctics"}),r.jsx(ge,{headers:["Patró","Codi","Resultat"],rows:[{cells:["Enter aleatori [1, 6]","(int)(Math.random() * 6) + 1","Dau: 1 a 6"]},{cells:["Enter aleatori [min, max]","(int)(Math.random() * (max-min+1)) + min","Rang personalitzat"]},{cells:["Arrodonir a 2 decimals","Math.round(x * 100.0) / 100.0","3.14159 -> 3.14"]},{cells:["Arrodonir a N decimals","Math.round(x * 10^N) / 10^N","Precisió variable"]},{cells:["Limitar un valor [min, max]","Math.max(min, Math.min(max, valor))","Clamp"]},{cells:["Distància entre 2 punts","Math.sqrt(pow(x2-x1,2) + pow(y2-y1,2))","Pitàgores"]},{cells:["Àrea del cercle","Math.PI * Math.pow(radi, 2)","Geometria"]}]}),r.jsx(A,{title:"Resum"}),r.jsxs(Ne,{children:[r.jsx(F,{title:"Classe Utilitària",variant:"blue",children:r.jsxs("p",{children:["Math és una classe static. No cal instanciar-la. Crida directament ",r.jsx("code",{children:"Math.mètode()"}),"."]})}),r.jsx(F,{title:"Arrodoniment",variant:"blue",children:r.jsxs("p",{children:[r.jsx("code",{children:"ceil"})," (amunt), ",r.jsx("code",{children:"floor"})," (avall), ",r.jsx("code",{children:"round"})," (més proper). Per N decimals: ",r.jsx("code",{children:"round(x * 10^N) / 10^N"}),"."]})}),r.jsx(F,{title:"Aleatoris",variant:"blue",children:r.jsxs("p",{children:[r.jsx("code",{children:"Math.random()"})," retorna [0.0, 1.0). Usa ",r.jsx("code",{children:"(int)(Math.random() * rang) + min"})," per enters."]})}),r.jsx(F,{title:"Trigonometria",variant:"blue",children:r.jsxs("p",{children:["Funcions trigonomètriques usen ",r.jsx("strong",{children:"radians"}),". Converteix amb ",r.jsx("code",{children:"Math.toRadians(graus)"}),"."]})})]})]})}const fw=`// Math.random() - Metode static de la classe Math
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
int valor = (int)(Math.random() * (max - min + 1)) + min; // 10 a 50`,hw=`// java.util.Random - Una classe completa per generar aleatoris
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
int valor = random.nextInt(max - min + 1) + min; // 10 a 50`,gw=`import java.util.Random;

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
System.out.println("Long aleatori: " + numGran);`,xw=`import java.util.Random;

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
System.out.println(rng3.nextInt(100)); // Diferent cada vegada`,vw=`// === PATRONS AMB Math.random() ===

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
System.out.println("Event (30%): " + event);`,yw=`// === PATRONS AMB java.util.Random ===
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
}`,bw=`// OBJECTIU: Enter aleatori entre 1 i 100

// Amb Math.random()
int num1 = (int)(Math.random() * 100) + 1;

// Amb Random
Random rng = new Random();
int num2 = rng.nextInt(100) + 1;

// Ambdos fan el MATEIX, pero Random es mes net i llegible`,jw=`// OBJECTIU: Element aleatori d'un array

String[] noms = {"Anna", "Marc", "Laia", "Pere", "Sofia"};

// Amb Math.random()
String nom1 = noms[(int)(Math.random() * noms.length)];

// Amb Random
Random rng = new Random();
String nom2 = noms[rng.nextInt(noms.length)];`,Sw=`// OBJECTIU: Valor boolean aleatori

// Amb Math.random()
boolean b1 = Math.random() < 0.5;

// Amb Random - MOLT MES DIRECTE
Random rng = new Random();
boolean b2 = rng.nextBoolean();`,ww=`import java.util.Random;

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
}`;function Ew(){return r.jsxs("div",{children:[r.jsx(A,{title:"Math.random() vs java.util.Random"}),r.jsx(k,{variant:"info",title:"Dues maneres de generar nombres aleatoris",children:r.jsxs("p",{children:["Java ofereix dues formes principals per generar nombres aleatoris: el mètode static ",r.jsx("code",{children:"Math.random()"})," i la classe ",r.jsx("code",{children:"java.util.Random"}),". Ambdues són vàlides, però tenen diferències importants en flexibilitat i ús."]})}),r.jsx(A,{title:"Math.random()"}),r.jsx(k,{variant:"explanation",title:"Com funciona Math.random()",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Mètode static"})," de la classe ",r.jsx("code",{children:"Math"})," - es crida directament sense crear cap objecte."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"No cal import"})," - ",r.jsx("code",{children:"Math"})," pertany a ",r.jsx("code",{children:"java.lang"})," i està sempre disponible."]}),r.jsxs("li",{children:[r.jsxs("strong",{children:["Retorna un ",r.jsx("code",{children:"double"})]})," entre ",r.jsx("code",{children:"0.0"})," (inclusiu) i ",r.jsx("code",{children:"1.0"})," (exclusiu)."]}),r.jsx("li",{children:"Per obtenir enters o rangs personalitzats, cal fer operacions matemàtiques addicionals."})]})}),r.jsx(w,{code:fw,label:"Math.random() - Ús bàsic i patrons",showLineNumbers:!0}),r.jsx(A,{title:"La Classe java.util.Random"}),r.jsx(k,{variant:"explanation",title:"Com funciona java.util.Random",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"És una classe"})," - cal ",r.jsx("code",{children:"import java.util.Random;"})," i crear un objecte amb ",r.jsx("code",{children:"new Random()"}),"."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Múltiples mètodes"})," - pot generar ",r.jsx("code",{children:"int"}),", ",r.jsx("code",{children:"double"}),", ",r.jsx("code",{children:"boolean"}),", ",r.jsx("code",{children:"long"})," directament."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"nextInt(bound)"})," - genera un enter entre 0 (inclusiu) i bound (exclusiu), més còmode que Math.random()."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Seedable"})," - es pot inicialitzar amb una seed per obtenir seqüències reproduïbles."]})]})}),r.jsx(w,{code:hw,label:"java.util.Random - Creació i ús bàsic",showLineNumbers:!0}),r.jsx(ge,{headers:["Mètode","Retorna","Rang","Exemple"],rows:[{cells:["nextInt()","int","Qualsevol int","rng.nextInt() // -1238547921"]},{cells:["nextInt(bound)","int","0 a bound-1","rng.nextInt(6) // 0 a 5"]},{cells:["nextDouble()","double","0.0 a 0.999...","rng.nextDouble() // 0.7423..."]},{cells:["nextBoolean()","boolean","true o false","rng.nextBoolean() // true"]},{cells:["nextLong()","long","Qualsevol long","rng.nextLong()"]}]}),r.jsx(w,{code:gw,label:"Tots els mètodes de Random",showLineNumbers:!0}),r.jsx(A,{title:"Seed: Seqüències Reproduïbles"}),r.jsx(k,{variant:"info",title:"Què és una seed?",children:r.jsxs("p",{children:["Una ",r.jsx("strong",{children:"seed"})," és un valor inicial que determina la seqüència de nombres aleatoris. Si dos objectes ",r.jsx("code",{children:"Random"})," tenen la mateixa seed, generaran",r.jsx("strong",{children:" exactament la mateixa seqüència"}),". Això és molt útil per fer proves i depurar codi, ja que pots reproduir els mateixos resultats."]})}),r.jsx(w,{code:xw,label:"Seed per seqüències reproduïbles",showLineNumbers:!0}),r.jsx(A,{title:"Comparació Directa"}),r.jsxs(he,{children:[r.jsx(Q,{title:"Math.random()",variant:"blue",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Tipus:"})," Mètode static"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Import:"})," No cal"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Instanciar:"})," No cal"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Retorna:"})," Només double [0.0, 1.0)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Enters:"})," Cal cast manual ",r.jsx("code",{children:"(int)"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Boolean:"})," Cal ",r.jsx("code",{children:"< 0.5"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Seed:"})," No suportat"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Ideal per:"})," Ús ràpid i senzill"]})]})}),r.jsx(Q,{title:"java.util.Random",variant:"blue",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Tipus:"})," Classe completa"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Import:"})," ",r.jsx("code",{children:"import java.util.Random"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Instanciar:"})," ",r.jsx("code",{children:"new Random()"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Retorna:"})," int, double, boolean, long"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Enters:"})," Directe amb ",r.jsx("code",{children:"nextInt(bound)"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Boolean:"})," Directe amb ",r.jsx("code",{children:"nextBoolean()"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Seed:"})," Suportat (reproduïble)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Ideal per:"})," Ús flexible i avançat"]})]})})]}),r.jsx(A,{title:"Quan Usar Cada Un?"}),r.jsxs(he,{children:[r.jsx(Q,{title:"Usa Math.random() quan...",variant:"good",children:r.jsxs("ul",{children:[r.jsx("li",{children:"Necessites un random ràpid i senzill"}),r.jsx("li",{children:"No vols importar cap classe addicional"}),r.jsx("li",{children:"Només necessites un double aleatori"}),r.jsx("li",{children:"És un script petit o un exercici bàsic"}),r.jsx("li",{children:"No necessites reproduïbilitat"})]})}),r.jsx(Q,{title:"Usa Random quan...",variant:"good",children:r.jsxs("ul",{children:[r.jsx("li",{children:"Necessites generar enters directament"}),r.jsx("li",{children:"Necessites booleans aleatoris"}),r.jsx("li",{children:"Vols seqüències reproduïbles (seed)"}),r.jsx("li",{children:"Fas servir aleatoris en molts llocs del codi"}),r.jsx("li",{children:"El programa és més complex"})]})})]}),r.jsx(A,{title:"Exemples Comparatius"}),r.jsx(k,{variant:"explanation",title:"Mateixa tasca, dues solucions",children:r.jsxs("p",{children:["A continuació comparem com resoldre les mateixes tasques comunes amb ",r.jsx("code",{children:"Math.random()"})," i amb ",r.jsx("code",{children:"java.util.Random"}),"."]})}),r.jsx(w,{code:bw,label:"Enter aleatori en un rang",showLineNumbers:!0}),r.jsx(w,{code:jw,label:"Element aleatori d'un array",showLineNumbers:!0}),r.jsx(w,{code:Sw,label:"Boolean aleatori",showLineNumbers:!0}),r.jsx(A,{title:"Patrons Comuns"}),r.jsx(w,{code:vw,label:"Patrons amb Math.random()",showLineNumbers:!0}),r.jsx(w,{code:yw,label:"Patrons amb java.util.Random",showLineNumbers:!0}),r.jsxs(k,{variant:"success",title:"Recomanació",children:[r.jsxs("p",{children:["Per a la majoria de programes, ",r.jsx("strong",{children:"java.util.Random"})," és la millor opció. És més llegible, més flexible, i ofereix mètodes directes per generar enters i booleans sense haver de fer operacions addicionals. A més, la possibilitat d'usar seeds la fa ideal per proves i depuració."]}),r.jsxs("p",{children:[r.jsx("code",{children:"Math.random()"})," és perfecte quan necessites un nombre aleatori ràpid en un context senzill i no vols importar cap classe."]})]}),r.jsx(A,{title:"Exemple Complet"}),r.jsx(k,{variant:"info",title:"Exemple pràctic amb java.util.Random",children:r.jsx("p",{children:"Un exemple complet que mostra diversos usos de nombres aleatoris: un joc, simulació de moneda, barreja d'array (shuffle) i generació de contrasenyes."})}),r.jsx(w,{code:ww,label:"Exemple complet: Joc, simulació, shuffle i contrasenyes",showLineNumbers:!0}),r.jsx(A,{title:"Resum"}),r.jsxs(Ne,{children:[r.jsx(F,{title:"Math.random()",variant:"blue",children:r.jsxs("p",{children:["Mètode static. Retorna double [0.0, 1.0). Ràpid i sense imports. Per enters: ",r.jsx("code",{children:"(int)(Math.random() * rang) + min"}),"."]})}),r.jsx(F,{title:"java.util.Random",variant:"blue",children:r.jsxs("p",{children:["Classe amb múltiples mètodes: ",r.jsx("code",{children:"nextInt()"}),", ",r.jsx("code",{children:"nextDouble()"}),", ",r.jsx("code",{children:"nextBoolean()"}),". Més flexible i llegible."]})}),r.jsx(F,{title:"Seed",variant:"blue",children:r.jsxs("p",{children:["Només ",r.jsx("code",{children:"Random"})," suporta seeds per seqüències reproduïbles. Útil per proves: ",r.jsx("code",{children:"new Random(42)"}),"."]})}),r.jsx(F,{title:"Recomanació",variant:"blue",children:r.jsxs("p",{children:["Prefereix ",r.jsx("code",{children:"java.util.Random"})," per projectes. Usa ",r.jsx("code",{children:"Math.random()"})," per coses ràpides i senzilles."]})})]})]})}function Cw(){return r.jsxs("div",{children:[r.jsx(A,{title:"For-each: sintaxi simplificada per recórrer col·leccions"}),r.jsxs(k,{variant:"info",children:[r.jsxs("p",{children:["El bucle ",r.jsx("strong",{children:"for tradicional"})," és l'estàndard i el més utilitzat a Java, especialment per la seva similitud amb C, C++ i C#. És la base que has de dominar primer."]}),r.jsxs("p",{style:{marginTop:"8px"},children:["El ",r.jsx("strong",{children:"for-each"})," (també anomenat ",r.jsx("em",{children:"enhanced for"}),") és una sintaxi simplificada que Java ofereix per recórrer arrays i col·leccions quan ",r.jsx("strong",{children:"no necessites l'índex"}),"."]})]}),r.jsx(k,{variant:"warning",title:"Prioritat: for tradicional",children:r.jsx("p",{children:"A nivell de DAM, el for tradicional és la prioritat. El for-each és un complement útil que simplifica el codi en certs casos, però no substitueix el for clàssic."})}),r.jsx(A,{title:"Sintaxi del for-each"}),r.jsx(w,{label:"Estructura general",code:`for (Tipus element : coleccio) {
    // codi que utilitza 'element'
}`}),r.jsx(k,{variant:"explanation",children:r.jsxs("p",{children:["Es llegeix com: ",r.jsx("strong",{children:'"per cada element de la col·lecció, fes..."'}),". El compilador s'encarrega internament de gestionar l'índex i l'accés als elements."]})}),r.jsx(A,{title:"Comparació: for tradicional vs for-each"}),r.jsxs(he,{children:[r.jsxs(Q,{title:"For tradicional (amb índex)",variant:"blue",children:[r.jsxs("p",{children:["Tens control total amb l'índex ",r.jsx("strong",{children:"i"}),"."]}),r.jsx(w,{code:`int[] nums = {10, 20, 30, 40, 50};

for (int i = 0; i < nums.length; i++) {
    System.out.println("Index " + i + ": " + nums[i]);
}`})]}),r.jsxs(Q,{title:"For-each (sense índex)",variant:"good",children:[r.jsxs("p",{children:["Més net, però ",r.jsx("strong",{children:"no tens accés a l'índex"}),"."]}),r.jsx(w,{code:`int[] nums = {10, 20, 30, 40, 50};

for (int num : nums) {
    System.out.println(num);
}`})]})]}),r.jsx(A,{title:"Quan utilitzar cadascun?"}),r.jsxs(Ne,{children:[r.jsx(F,{title:"Utilitza for tradicional quan...",variant:"blue",children:r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsx("li",{children:"Necessites l'índex (saber en quina posició estàs)"}),r.jsx("li",{children:"Vols modificar els elements de l'array"}),r.jsx("li",{children:"Vols recórrer només una part de l'array"}),r.jsx("li",{children:"Necessites recórrer al revés (de final a inici)"}),r.jsx("li",{children:"Necessites comparar elements consecutius"})]})}),r.jsx(F,{title:"Utilitza for-each quan...",variant:"green",children:r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsx("li",{children:"Només necessites llegir tots els elements"}),r.jsx("li",{children:"No necessites saber la posició"}),r.jsx("li",{children:"Vols un codi més curt i llegible"}),r.jsx("li",{children:"Treballes amb col·leccions (ArrayList, etc.)"})]})})]}),r.jsx(A,{title:"Exemples amb diferents tipus"}),r.jsx(w,{label:"Array d'enters (int)",showLineNumbers:!0,code:`int[] notes = {7, 9, 5, 8, 6};
int suma = 0;

for (int nota : notes) {
    suma += nota;
}

double mitjana = (double) suma / notes.length;
System.out.println("Mitjana: " + mitjana);`}),r.jsx(w,{label:"Array de Strings",showLineNumbers:!0,code:`String[] noms = {"Anna", "Marc", "Laia", "Pol"};

for (String nom : noms) {
    System.out.println("Hola, " + nom + "!");
}
// Hola, Anna!
// Hola, Marc!
// Hola, Laia!
// Hola, Pol!`}),r.jsx(w,{label:"Array d'objectes",showLineNumbers:!0,code:`// Suposem que tenim una classe Alumne amb getNom() i getNota()
Alumne[] alumnes = {
    new Alumne("Anna", 8.5),
    new Alumne("Marc", 6.0),
    new Alumne("Laia", 9.2)
};

for (Alumne a : alumnes) {
    System.out.println(a.getNom() + " -> " + a.getNota());
}`}),r.jsx(A,{title:"Limitacions del for-each"}),r.jsx(k,{variant:"warning",title:"El for-each NO et dona l'índex",children:r.jsxs("p",{children:["Dins del for-each, ",r.jsx("strong",{children:"no tens cap variable d'índex"}),". Si necessites saber en quina posició estàs, has d'usar el for tradicional."]})}),r.jsx(k,{variant:"error",title:"No pots modificar l'array amb la variable del bucle",children:r.jsxs("p",{children:["La variable del for-each és una ",r.jsx("strong",{children:"còpia"})," del valor. Modificar-la no canvia l'array original."]})}),r.jsxs(he,{children:[r.jsx(Q,{title:"Això NO funciona",variant:"bad",children:r.jsx(w,{code:`int[] nums = {1, 2, 3};

// Intent de duplicar cada valor
for (int num : nums) {
    num = num * 2; // Modifica la COPIA, no l'array!
}
// nums segueix sent {1, 2, 3}`})}),r.jsx(Q,{title:"Això SÍ funciona",variant:"good",children:r.jsx(w,{code:`int[] nums = {1, 2, 3};

// Amb for tradicional pots modificar
for (int i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * 2; // Modifica l'array!
}
// nums ara es {2, 4, 6}`})})]}),r.jsx(A,{title:"For-each amb col·leccions (ArrayList)"}),r.jsx(k,{variant:"info",children:r.jsxs("p",{children:["El for-each funciona no només amb arrays, sinó també amb qualsevol col·lecció de Java com ",r.jsx("strong",{children:"ArrayList"}),". De fet, és on més brilla perquè l'alternativa amb for tradicional requereix usar ",r.jsx("code",{children:".get(i)"})," i ",r.jsx("code",{children:".size()"}),"."]})}),r.jsxs(he,{children:[r.jsx(Q,{title:"ArrayList amb for tradicional",variant:"blue",children:r.jsx(w,{code:`ArrayList<String> fruites = new ArrayList<>();
fruites.add("Poma");
fruites.add("Platan");
fruites.add("Taronja");

for (int i = 0; i < fruites.size(); i++) {
    System.out.println(fruites.get(i));
}`})}),r.jsx(Q,{title:"ArrayList amb for-each",variant:"good",children:r.jsx(w,{code:`ArrayList<String> fruites = new ArrayList<>();
fruites.add("Poma");
fruites.add("Platan");
fruites.add("Taronja");

for (String fruita : fruites) {
    System.out.println(fruita);
}`})})]}),r.jsx(A,{title:"Resum"}),r.jsx(ge,{headers:["Característica","for tradicional","for-each"],rows:[{cells:["Accés a l'índex","Sí","No"]},{cells:["Modificar l'array","Sí","No (modifica còpia)"]},{cells:["Recórrer parcialment","Sí","No (sempre recorre tot)"]},{cells:["Recórrer al revés","Sí","No"]},{cells:["Llegibilitat","Correcta","Més neta i curta"]},{cells:["Funciona amb ArrayList","Sí (.get/.size)","Sí (directament)"]}]}),r.jsx(k,{variant:"success",title:"Consell",children:r.jsxs("p",{children:["Domina primer el ",r.jsx("strong",{children:"for tradicional"}),", que és el que trobaràs a la majoria d'exercicis i exàmens. Un cop el tinguis clar, el for-each et serà molt fàcil d'incorporar com a eina complementària."]})})]})}function kw(){return r.jsxs("div",{children:[r.jsx(A,{title:"Operador Ternari: if-else compacte en una línia"}),r.jsxs(k,{variant:"info",children:[r.jsxs("p",{children:["L'operador ternari és una forma ",r.jsx("strong",{children:"compacta"})," d'escriure un if-else senzill en una sola línia. És útil quan vols assignar un valor a una variable en funció d'una condició simple."]}),r.jsxs("p",{style:{marginTop:"8px"},children:["Recorda: el ",r.jsx("strong",{children:"if-else tradicional"})," segueix sent la forma estàndard i prioritària. L'operador ternari és un complement per a casos concrets."]})]}),r.jsx(A,{title:"Sintaxi"}),r.jsx(w,{label:"Estructura de l'operador ternari",code:"variable = condicio ? valorSiTrue : valorSiFalse;"}),r.jsx(k,{variant:"explanation",children:r.jsxs("p",{children:["Es llegeix com: ",r.jsx("strong",{children:'"Si la condició és certa, agafa el primer valor; si no, agafa el segon."'})]})}),r.jsxs(F,{title:"Esquema mental",variant:"blue",children:[r.jsx("p",{children:"CONDICIÓ → si TRUE → valor A"}),r.jsx("p",{children:"CONDICIÓ → si FALSE → valor B"})]}),r.jsx(A,{title:"Comparació: if-else vs ternari"}),r.jsxs(he,{children:[r.jsx(Q,{title:"If-else tradicional (5+ línies)",variant:"blue",children:r.jsx(w,{code:`String resultat;

if (nota >= 5) {
    resultat = "Aprovat";
} else {
    resultat = "Suspes";
}`})}),r.jsx(Q,{title:"Operador ternari (1 línia)",variant:"good",children:r.jsx(w,{code:'String resultat = (nota >= 5) ? "Aprovat" : "Suspes";'})})]}),r.jsx(k,{variant:"explanation",children:r.jsx("p",{children:"Ambdós codis fan exactament el mateix. La diferència és purament estètica: el ternari és més compacte, però el if-else és més explícit i fàcil de llegir per a qui comença."})}),r.jsx(A,{title:"Casos d'ús pràctics"}),r.jsx(w,{label:"1. Assignar una variable segons una condició",showLineNumbers:!0,code:`int edat = 20;
String tipus = (edat >= 18) ? "Adult" : "Menor";
System.out.println(tipus); // Adult`}),r.jsx(w,{label:"2. Retornar un valor des d'un mètode",showLineNumbers:!0,code:`public static String obtenirSalutacio(boolean esMati) {
    return esMati ? "Bon dia!" : "Bona tarda!";
}`}),r.jsx(w,{label:"3. Directament dins d'un println",showLineNumbers:!0,code:`int puntuacio = 85;
System.out.println("Resultat: " + (puntuacio >= 50 ? "PASSAT" : "FALLAT"));`}),r.jsx(w,{label:"4. Determinar el major de dos números",showLineNumbers:!0,code:`int a = 15, b = 23;
int major = (a > b) ? a : b;
System.out.println("El major es: " + major); // 23`}),r.jsx(w,{label:"5. Paritat d'un número",showLineNumbers:!0,code:`int numero = 7;
String paritat = (numero % 2 == 0) ? "Parell" : "Senar";
System.out.println(numero + " es " + paritat); // 7 es Senar`}),r.jsx(w,{label:"6. Valor absolut (sense Math.abs)",showLineNumbers:!0,code:`int valor = -42;
int absolut = (valor >= 0) ? valor : -valor;
System.out.println("Valor absolut: " + absolut); // 42`}),r.jsx(A,{title:"Ternari aniuat (existeix, però no el recomanem)"}),r.jsx(k,{variant:"warning",title:"Evita els ternaris aniuats",children:r.jsxs("p",{children:["Tècnicament és possible encadenar ternaris, però el resultat és un codi molt difícil de llegir i mantenir. ",r.jsx("strong",{children:"No ho recomanem."})]})}),r.jsxs(he,{children:[r.jsx(Q,{title:"Ternari aniuat (difícil de llegir)",variant:"bad",children:r.jsx(w,{code:`// NO recomanat!
String categoria = (edat < 12) ? "Nen"
    : (edat < 18) ? "Adolescent"
    : (edat < 65) ? "Adult"
    : "Jubilat";`})}),r.jsx(Q,{title:"If-else (molt més clar)",variant:"good",children:r.jsx(w,{code:`String categoria;

if (edat < 12) {
    categoria = "Nen";
} else if (edat < 18) {
    categoria = "Adolescent";
} else if (edat < 65) {
    categoria = "Adult";
} else {
    categoria = "Jubilat";
}`})})]}),r.jsx(A,{title:"Quan utilitzar i quan NO"}),r.jsxs(Ne,{children:[r.jsx(F,{title:"Utilitza l'operador ternari quan...",variant:"green",children:r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsx("li",{children:"La decisió és simple: una condició, dos valors possibles"}),r.jsx("li",{children:"Vols assignar un valor a una variable en una sola línia"}),r.jsx("li",{children:"Vols retornar un valor senzill des d'un mètode"}),r.jsx("li",{children:"El codi resultant segueix sent fàcil de llegir"})]})}),r.jsx(F,{title:"NO utilitzis l'operador ternari quan...",variant:"pink",children:r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsx("li",{children:"La lògica és complexa o té múltiples condicions"}),r.jsx("li",{children:"Necessites executar varies instruccions (no només retornar un valor)"}),r.jsx("li",{children:"Voldries aniuar ternaris dins d'altres ternaris"}),r.jsx("li",{children:"El codi es fa difícil d'entendre a primera vista"})]})})]}),r.jsx(A,{title:"Resum"}),r.jsx(ge,{headers:["Característica","if-else","Operador ternari"],rows:[{cells:["Línies de codi","5+ línies","1 línia"]},{cells:["Llegibilitat","Molt clara","Clara si és simple"]},{cells:["Múltiples instruccions","Sí","No (només retorna un valor)"]},{cells:["Condicions complexes","Sí","No recomanat"]},{cells:["Aniuament","Fàcil de llegir","Molt confús"]},{cells:["Ús principal","Qualsevol decisió","Assignacions simples"]}]}),r.jsx(k,{variant:"success",title:"Consell",children:r.jsxs("p",{children:["Pensa en l'operador ternari com un ",r.jsx("strong",{children:"atall"}),": si el caminet curt és clar i segur, pren-lo. Si és fosc i ple de revolts (condicions complexes), millor el camí principal (if-else)."]})})]})}function Rw(){return r.jsxs("div",{children:[r.jsx(A,{title:"var i altres funcionalitats modernes de Java"}),r.jsxs(k,{variant:"info",children:[r.jsxs("p",{children:["Java ha anat evolucionant amb noves versions que incorporen sintaxis més modernes i compactes. Aquí veurem algunes de les més útils: ",r.jsx("strong",{children:"var"}),","," ",r.jsx("strong",{children:"text blocks"}),", ",r.jsx("strong",{children:"switch expressions"})," i"," ",r.jsx("strong",{children:"records"}),"."]}),r.jsxs("p",{style:{marginTop:"8px"},children:["Totes aquestes funcionalitats són ",r.jsx("strong",{children:"complements"})," a la sintaxi tradicional, que segueix sent la prioritat a nivell acadèmic."]})]}),r.jsx(k,{variant:"warning",title:"Important per a estudiants de DAM",children:r.jsxs("p",{children:["Aquestes funcionalitats són ",r.jsx("strong",{children:'"nice to know"'})," (bo de saber). A nivell de DAM, centra't primer en la sintaxi tradicional que és la que apareixerà als exàmens i exercicis. Coneix-les per si les trobes en codi real o tutorials moderns."]})}),r.jsx(A,{title:"var: inferència de tipus local (Java 10+)"}),r.jsx(k,{variant:"info",children:r.jsxs("p",{children:["La paraula clau ",r.jsx("strong",{children:"var"})," permet declarar variables locals sense especificar explícitament el tipus. El compilador ",r.jsx("strong",{children:"dedueix"})," el tipus automàticament a partir del valor assignat."]})}),r.jsxs(he,{children:[r.jsx(Q,{title:"Forma tradicional (tipus explícit)",variant:"blue",children:r.jsx(w,{code:`String nom = "Hola";
int edat = 25;
double preu = 19.99;
ArrayList<String> llista = new ArrayList<>();`})}),r.jsx(Q,{title:"Amb var (tipus inferit)",variant:"good",children:r.jsx(w,{code:`var nom = "Hola";        // String
var edat = 25;           // int
var preu = 19.99;        // double
var llista = new ArrayList<String>();`})})]}),r.jsx(k,{variant:"explanation",children:r.jsxs("p",{children:["En ambdós casos, el tipus és ",r.jsx("strong",{children:"exactament el mateix"}),". L'única diferència és que amb ",r.jsx("code",{children:"var"})," no l'escrius tu, el compilador el dedueix. Un cop assignat, el tipus queda fixat."]})}),r.jsx(k,{variant:"error",title:"var NO fa que Java sigui dinàmic!",children:r.jsxs("p",{children:["A diferència de Python o JavaScript, ",r.jsx("code",{children:"var"})," ",r.jsx("strong",{children:"no"})," converteix Java en un llenguatge de tipat dinàmic. El tipus es determina en temps de compilació i no pot canviar després."]})}),r.jsx(w,{label:"Això dona ERROR de compilació",code:`var x = 10;       // x es int
x = "hola";       // ERROR! No pots assignar String a un int`}),r.jsx(A,{title:"On es pot i on NO es pot usar var"}),r.jsxs(Ne,{children:[r.jsxs(F,{title:"SÍ es pot usar",variant:"green",children:[r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsx("li",{children:"Variables locals dins d'un mètode"}),r.jsx("li",{children:"Variables dins de bucles for"}),r.jsx("li",{children:"Variables dins de blocs try-with-resources"})]}),r.jsx(w,{code:`// Dins d'un metode
var resultat = calcular();

// Dins d'un for
for (var i = 0; i < 10; i++) { }

// Dins d'un for-each
for (var nom : llistaNoms) { }`})]}),r.jsxs(F,{title:"NO es pot usar",variant:"pink",children:[r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsx("li",{children:"Atributs de classe (camps/fields)"}),r.jsx("li",{children:"Paràmetres de mètodes"}),r.jsx("li",{children:"Tipus de retorn de mètodes"}),r.jsx("li",{children:"Sense valor inicial (el compilador no pot deduir)"})]}),r.jsx(w,{code:`// ERROR: camp de classe
class Persona {
    var nom = "Anna"; // NO COMPILA
}

// ERROR: parametre
public void saludar(var nom) { } // NO

// ERROR: retorn
public var getEdat() { } // NO

// ERROR: sense inicialitzar
var x; // NO COMPILA (quin tipus es?)`})]})]}),r.jsx(ge,{headers:["Situació","Es pot usar var?"],rows:[{cells:["Variable local amb assignació","Sí"]},{cells:["Variable en bucle for/for-each","Sí"]},{cells:["Atribut de classe","No"]},{cells:["Paràmetre de mètode","No"]},{cells:["Tipus de retorn","No"]},{cells:["Sense valor inicial","No"]}]}),r.jsx(A,{title:"Quan usar var i quan no"}),r.jsxs(he,{children:[r.jsxs(Q,{title:"Bon ús de var",variant:"good",children:[r.jsx("p",{children:"Quan el tipus és obvi pel context:"}),r.jsx(w,{code:`// El tipus es evident
var scanner = new Scanner(System.in);
var noms = new ArrayList<String>();
var resultat = "Aprovat";`})]}),r.jsxs(Q,{title:"Mal ús de var",variant:"bad",children:[r.jsx("p",{children:"Quan el tipus no és clar i var confon:"}),r.jsx(w,{code:`// Quin tipus retorna? No es clar!
var dades = obtenirDades();
var resultat = processar(x, y);
var config = inicialitzar();`})]})]}),r.jsx(A,{title:"Text blocks: strings multilínia (Java 13+)"}),r.jsx(k,{variant:"info",children:r.jsxs("p",{children:["Els ",r.jsx("strong",{children:"text blocks"})," permeten escriure cadenes de text de múltiples línies sense haver de concatenar ni usar ",r.jsx("code",{children:"\\n"}),". S'utilitzen tres cometes dobles ",r.jsx("code",{children:'"""'})," per obrir i tancar."]})}),r.jsxs(he,{children:[r.jsx(Q,{title:"Forma tradicional",variant:"blue",children:r.jsx(w,{code:`String json = "{\\n" +
    "  \\"nom\\": \\"Anna\\",\\n" +
    "  \\"edat\\": 25\\n" +
    "}";`})}),r.jsx(Q,{title:"Amb text blocks",variant:"good",children:r.jsx(w,{code:`String json = """
    {
      "nom": "Anna",
      "edat": 25
    }
    """;`})})]}),r.jsx(w,{label:"Molt útil per a SQL, HTML, JSON...",showLineNumbers:!0,code:`// Consulta SQL multilinia
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
System.out.println(menu);`}),r.jsx(A,{title:"Switch expressions: switch que retorna valor (Java 14+)"}),r.jsx(k,{variant:"info",children:r.jsxs("p",{children:["Les ",r.jsx("strong",{children:"switch expressions"})," són una versió millorada del switch que pot retornar un valor directament, utilitza fletxes (",r.jsx("code",{children:"->"}),") en comptes de ",r.jsx("code",{children:"case/break"}),", i és més compacte."]})}),r.jsxs(he,{children:[r.jsx(Q,{title:"Switch tradicional",variant:"blue",children:r.jsx(w,{code:`String nomDia;
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
}`})}),r.jsx(Q,{title:"Switch expression",variant:"good",children:r.jsx(w,{code:`String nomDia = switch (dia) {
    case 1 -> "Dilluns";
    case 2 -> "Dimarts";
    case 3 -> "Dimecres";
    default -> "Desconegut";
};`})})]}),r.jsx(k,{variant:"explanation",children:r.jsxs("p",{children:["Avantatges del switch expression: no necessita ",r.jsx("code",{children:"break"})," (no hi ha fall-through accidental), pot retornar valors directament, i permet agrupar casos fàcilment."]})}),r.jsx(w,{label:"Agrupar múltiples casos",code:`String tipusDia = switch (dia) {
    case 1, 2, 3, 4, 5 -> "Laborable";
    case 6, 7           -> "Cap de setmana";
    default             -> "Invalid";
};`}),r.jsx(A,{title:"Records: classes de dades simplificades (Java 16+)"}),r.jsx(k,{variant:"info",children:r.jsxs("p",{children:["Els ",r.jsx("strong",{children:"records"})," són una forma molt compacta de crear classes que només serveixen per guardar dades (com un DTO). Java genera automàticament el constructor, getters, ",r.jsx("code",{children:"equals()"}),", ",r.jsx("code",{children:"hashCode()"})," i"," ",r.jsx("code",{children:"toString()"}),"."]})}),r.jsxs(he,{children:[r.jsx(Q,{title:"Classe tradicional",variant:"blue",children:r.jsx(w,{code:`public class Punt {
    private final int x;
    private final int y;

    public Punt(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() { return x; }
    public int getY() { return y; }

    // + equals, hashCode, toString...
}`})}),r.jsx(Q,{title:"Amb record",variant:"good",children:r.jsx(w,{code:`public record Punt(int x, int y) { }

// Ja inclou constructor, getters,
// equals, hashCode i toString!

// Us:
var p = new Punt(3, 5);
System.out.println(p.x()); // 3
System.out.println(p);     // Punt[x=3, y=5]`})})]}),r.jsx(k,{variant:"warning",title:"Limitacions dels records",children:r.jsxs("p",{children:["Els records són ",r.jsx("strong",{children:"immutables"})," (no tenen setters), no poden heretar d'altres classes, i els seus camps són finals. Són ideals per a dades simples, però no substitueixen les classes normals amb lògica complexa."]})}),r.jsx(A,{title:"Resum de funcionalitats modernes"}),r.jsx(ge,{headers:["Funcionalitat","Versió de Java","Per a què serveix","Prioritat a DAM"],rows:[{cells:["var","Java 10+","Inferència de tipus en variables locals","Útil però no essencial"]},{cells:['Text blocks (""")',"Java 13+","Strings multilínia sense \\n","Bo de saber"]},{cells:["Switch expressions","Java 14+","Switch que retorna valor, sense break","Bo de saber"]},{cells:["Records","Java 16+","Classes de dades compactes","Avançat, bo de saber"]}]}),r.jsx(k,{variant:"success",title:"Consell final",children:r.jsxs("p",{children:["Totes aquestes funcionalitats fan el codi més curt i modern, però la base de Java ",r.jsx("strong",{children:"segueix sent la mateixa"}),". Aprendre la sintaxi tradicional primer et garanteix entendre qualsevol codi Java, sigui antic o modern. Aquestes eines modernes les aniràs incorporant naturalment a mesura que guanyis experiència."]})})]})}function Lw(){return r.jsxs("article",{children:[r.jsx(k,{variant:"warning",title:"Material del professorat",children:"Aquesta pàgina conté exercicis i solucions. No és visible per als alumnes."}),r.jsx(A,{title:"Exercicis Pràctics - POO"}),r.jsxs("section",{style:{marginBottom:"40px"},children:[r.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 1: Gestió d'una Agenda"}),r.jsxs(k,{variant:"explanation",children:[r.jsx("p",{children:"Crea un programa orientat a objectes per gestionar una agenda de contactes."}),r.jsx("p",{style:{marginTop:"10px"},children:r.jsx("strong",{children:"Requisits:"})}),r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsxs("li",{children:["Classe ",r.jsx("code",{children:"Contacte"})," amb atributs: nom, telefon, email (tots privats)"]}),r.jsx("li",{children:"Constructor que inicialitzi tots els atributs"}),r.jsx("li",{children:"Getters i setters per a cada atribut"}),r.jsxs("li",{children:["Mètode ",r.jsx("code",{children:"mostrarInfo()"})," que imprimeixi les dades del contacte"]}),r.jsxs("li",{children:["Classe ",r.jsx("code",{children:"Agenda"})," amb un array de Contacte i mètodes per afegir, buscar i eliminar"]}),r.jsxs("li",{children:["Classe ",r.jsx("code",{children:"TestAgenda"})," amb el main per provar-ho"]})]})]}),r.jsx(w,{label:"Solució - Contacte.java",code:`public class Contacte {
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
}`}),r.jsx(w,{label:"Solució - Agenda.java",code:`public class Agenda {
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
}`})]}),r.jsxs("section",{style:{marginBottom:"40px"},children:[r.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 2: Sistema de Productes"}),r.jsxs(k,{variant:"explanation",children:[r.jsx("p",{children:"Crea un sistema de gestió de productes per a una botiga."}),r.jsx("p",{style:{marginTop:"10px"},children:r.jsx("strong",{children:"Requisits:"})}),r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsxs("li",{children:["Classe ",r.jsx("code",{children:"Producte"})," amb: nom, preu, quantitat (privats)"]}),r.jsx("li",{children:"Constructor amb tots els atributs"}),r.jsx("li",{children:"Getters i setters"}),r.jsxs("li",{children:["Mètode ",r.jsx("code",{children:"calcularValorTotal()"})," que retorni preu * quantitat"]}),r.jsxs("li",{children:["Classe ",r.jsx("code",{children:"Botiga"})," amb array de Producte i mètodes per afegir, buscar per nom, i calcular el valor total de l'inventari"]})]})]}),r.jsx(w,{label:"Solució - Producte.java",code:`public class Producte {
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
}`})]})]})}function Aw(){return r.jsxs("article",{children:[r.jsx(k,{variant:"warning",title:"Material del professorat",children:"Aquesta pàgina conté exercicis i solucions. No és visible per als alumnes."}),r.jsx(A,{title:"Exercicis Pràctics - Modularitat"}),r.jsxs("section",{style:{marginBottom:"40px"},children:[r.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 1: Gestió de Text"}),r.jsxs(k,{variant:"explanation",children:[r.jsx("p",{children:r.jsx("strong",{children:"Estructura:"})}),r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsxs("li",{children:[r.jsx("code",{children:"utilitats.text.AnalitzadorText"})," - Classe amb mètodes d'anàlisi"]}),r.jsxs("li",{children:[r.jsx("code",{children:"programa.GestorText"})," - Programa principal"]})]}),r.jsx("p",{style:{marginTop:"10px"},children:r.jsx("strong",{children:"Mètodes a implementar:"})}),r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsxs("li",{children:[r.jsx("code",{children:"comptarVocals(String text)"})," → int"]}),r.jsxs("li",{children:[r.jsx("code",{children:"comptarConsonants(String text)"})," → int"]}),r.jsxs("li",{children:[r.jsx("code",{children:"invertir(String text)"})," → String"]}),r.jsxs("li",{children:[r.jsx("code",{children:"esPalindrom(String text)"})," → boolean"]})]})]}),r.jsx(w,{label:"Solució - AnalitzadorText.java",code:`package utilitats.text;

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
}`})]}),r.jsxs("section",{style:{marginBottom:"40px"},children:[r.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 2: Conversió d'Unitats"}),r.jsxs(k,{variant:"explanation",children:[r.jsx("p",{children:r.jsx("strong",{children:"Estructura:"})}),r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsx("li",{children:r.jsx("code",{children:"utilitats.conversions.Temperatura"})}),r.jsx("li",{children:r.jsx("code",{children:"utilitats.conversions.Distancia"})}),r.jsx("li",{children:r.jsx("code",{children:"utilitats.conversions.Pes"})}),r.jsxs("li",{children:[r.jsx("code",{children:"programa.Conversor"})," - Programa principal amb menú"]})]})]}),r.jsx(w,{label:"Solució - Temperatura.java",code:`package utilitats.conversions;

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
}`}),r.jsx(w,{label:"Solució - Distancia.java",code:`package utilitats.conversions;

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
}`})]}),r.jsxs("section",{style:{marginBottom:"40px"},children:[r.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 3: Gestió de Contactes"}),r.jsxs(k,{variant:"explanation",children:[r.jsx("p",{children:r.jsx("strong",{children:"Estructura:"})}),r.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[r.jsx("li",{children:r.jsx("code",{children:"utilitats.contactes.GestorContactes"})}),r.jsxs("li",{children:[r.jsx("code",{children:"programa.Agenda"})," - Programa principal"]})]}),r.jsxs("p",{style:{marginTop:"10px"},children:[r.jsx("strong",{children:"Funcionalitats:"})," Afegir, buscar, eliminar, llistar contactes. Utilitza arrays paral·lels (noms[], telefons[])."]})]}),r.jsx(w,{label:"Solució - GestorContactes.java",code:`package utilitats.contactes;

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
}`}),r.jsx(k,{variant:"info",title:"Checklist de lliurament",children:r.jsxs("ol",{style:{paddingLeft:"20px"},children:[r.jsx("li",{children:"Estructura de packages correcta"}),r.jsx("li",{children:"Imports correctes entre packages"}),r.jsx("li",{children:"Tots els mètodes implementats"}),r.jsx("li",{children:"Programa principal funcional amb menú"}),r.jsx("li",{children:"Codi comentat"}),r.jsx("li",{children:"Proves amb dades d'exemple"}),r.jsx("li",{children:"Gestió bàsica d'errors"})]})})]})]})}function Mw(){return r.jsxs("article",{children:[r.jsx(k,{variant:"warning",title:"Material del professorat",children:"Aquesta pàgina conté la plantilla d'examen i la solució completa del Paraulògic. No és visible per als alumnes."}),r.jsx(A,{title:"Examen: Paraulògic"}),r.jsxs("section",{style:{marginBottom:"40px"},children:[r.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Descripció de l'examen"}),r.jsxs(k,{variant:"explanation",children:[r.jsx("p",{children:"El Paraulògic és un joc de paraules on l'alumne ha d'implementar un programa Java que:"}),r.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px"},children:[r.jsx("li",{children:"Té 7 lletres disponibles, una d'elles és la lletra central"}),r.jsx("li",{children:"L'usuari introdueix paraules que han de complir regles específiques"}),r.jsx("li",{children:"Cada paraula vàlida suma punts segons la seva longitud"}),r.jsx("li",{children:"Si la paraula utilitza totes les 7 lletres és un TUTI (+10 punts extra)"})]})]}),r.jsx("h4",{style:{color:"#2563a8",margin:"20px 0 12px"},children:"Sistema de puntuació"}),r.jsx(ge,{headers:["Longitud","Punts"],rows:[{cells:["3 lletres","1 punt"]},{cells:["4 lletres","2 punts"]},{cells:["5 lletres","5 punts"]},{cells:["6 lletres","6 punts"]},{cells:["7+ lletres","= longitud"]},{cells:["TUTI (totes 7)","+10 punts extra"]}]})]}),r.jsxs("section",{style:{marginBottom:"40px"},children:[r.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Mètodes obligatoris (capçalera donada)"}),r.jsxs(k,{variant:"info",title:"Capçaleres que han d'implementar",children:[r.jsx("p",{style:{fontFamily:"monospace",marginTop:"8px"},children:r.jsx("code",{children:"public boolean esParaulaValida(String paraula, char[] lletres, char letraC)"})}),r.jsx("p",{style:{marginTop:"8px"},children:"Retorna true si la paraula:"}),r.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[r.jsx("li",{children:"Té 3+ lletres"}),r.jsx("li",{children:"Conté la lletra central"}),r.jsx("li",{children:"Només utilitza lletres del conjunt"})]}),r.jsx("p",{style:{fontFamily:"monospace",marginTop:"16px"},children:r.jsx("code",{children:"public int calcularPuntuacio(String paraula, char[] lletres)"})}),r.jsx("p",{style:{marginTop:"8px"},children:"Retorna els punts segons la taula + bonus TUTI."})]})]}),r.jsxs("section",{style:{marginBottom:"40px"},children:[r.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Plantilla per a l'alumne"}),r.jsx(w,{label:"Paraulogic.java - Plantilla alumne",code:`import java.util.Scanner;

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
}`})]}),r.jsxs("section",{style:{marginBottom:"40px"},children:[r.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Solució completa"}),r.jsx(w,{label:"Solució completa - Paraulogic.java",showLineNumbers:!0,code:`import java.util.Scanner;

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
}`})]})]})}const _w=Ty([{path:"/",element:r.jsx(Eb,{}),children:[{index:!0,element:r.jsx(Db,{})},{path:"basics/tipus-de-dades",element:r.jsx(c0,{})},{path:"basics/operadors",element:r.jsx(E0,{})},{path:"basics/sintaxi",element:r.jsx(C0,{})},{path:"basics/condicionals",element:r.jsx(k0,{})},{path:"basics/switch",element:r.jsx(R0,{})},{path:"basics/bucles",element:r.jsx(L0,{})},{path:"basics/modificadors-acces",element:r.jsx(A0,{})},{path:"arrays/arrays-1d",element:r.jsx(W0,{})},{path:"arrays/arrays-2d",element:r.jsx(dS,{})},{path:"funcions/sense-parametres",element:r.jsx(MS,{})},{path:"funcions/amb-parametres",element:r.jsx(TS,{})},{path:"funcions/tipus-de-funcions",element:r.jsx(HS,{})},{path:"funcions/recursives",element:r.jsx(h1,{})},{path:"funcions/cridar-des-de-main",element:r.jsx(y1,{})},{path:"funcions/resum",element:r.jsx(j1,{})},{path:"classes/introduccio",element:r.jsx(S1,{})},{path:"classes/classe-vs-objecte",element:r.jsx(w1,{})},{path:"classes/modificadors",element:r.jsx(E1,{})},{path:"classes/constructors-this",element:r.jsx(C1,{})},{path:"classes/herencia",element:r.jsx(O1,{})},{path:"classes/exemple-biblioteca",element:r.jsx(I1,{})},{path:"modularitat/introduccio",element:r.jsx(F1,{})},{path:"modularitat/monolitic-vs-modular",element:r.jsx(D1,{})},{path:"modularitat/packages",element:r.jsx(z1,{})},{path:"modularitat/exemple-calculadora",element:r.jsx(B1,{})},{path:"string-math/classe-string",element:r.jsx(nw,{})},{path:"string-math/classe-math",element:r.jsx(mw,{})},{path:"string-math/random-vs-math-random",element:r.jsx(Ew,{})},{path:"java-modern/for-each",element:r.jsx(Cw,{})},{path:"java-modern/operador-ternari",element:r.jsx(kw,{})},{path:"java-modern/var-i-altres",element:r.jsx(Rw,{})},{path:"professor/exercicis-poo",element:r.jsx(Lw,{})},{path:"professor/exercicis-modularitat",element:r.jsx(Aw,{})},{path:"professor/paraulogic",element:r.jsx(Mw,{})}]}]);function Nw(){return r.jsx(Vy,{router:_w})}Dm(document.getElementById("root")).render(r.jsx(C.StrictMode,{children:r.jsx(Nw,{})}));
