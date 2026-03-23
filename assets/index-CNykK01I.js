function Qh(e,r){for(var n=0;n<r.length;n++){const a=r[n];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(a,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Jh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kd={exports:{}},ms={},Md={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),Kh=Symbol.for("react.portal"),Yh=Symbol.for("react.fragment"),Xh=Symbol.for("react.strict_mode"),Zh=Symbol.for("react.profiler"),ef=Symbol.for("react.provider"),tf=Symbol.for("react.context"),rf=Symbol.for("react.forward_ref"),nf=Symbol.for("react.suspense"),af=Symbol.for("react.memo"),sf=Symbol.for("react.lazy"),zc=Symbol.iterator;function lf(e){return e===null||typeof e!="object"?null:(e=zc&&e[zc]||e["@@iterator"],typeof e=="function"?e:null)}var Nd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pd=Object.assign,Td={};function zn(e,r,n){this.props=e,this.context=r,this.refs=Td,this.updater=n||Nd}zn.prototype.isReactComponent={};zn.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _d(){}_d.prototype=zn.prototype;function yo(e,r,n){this.props=e,this.context=r,this.refs=Td,this.updater=n||Nd}var So=yo.prototype=new _d;So.constructor=yo;Pd(So,zn.prototype);So.isPureReactComponent=!0;var Bc=Array.isArray,Od=Object.prototype.hasOwnProperty,wo={current:null},Dd={key:!0,ref:!0,__self:!0,__source:!0};function qd(e,r,n){var a,i={},s=null,l=null;if(r!=null)for(a in r.ref!==void 0&&(l=r.ref),r.key!==void 0&&(s=""+r.key),r)Od.call(r,a)&&!Dd.hasOwnProperty(a)&&(i[a]=r[a]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(a in o=e.defaultProps,o)i[a]===void 0&&(i[a]=o[a]);return{$$typeof:Fa,type:e,key:s,ref:l,props:i,_owner:wo.current}}function of(e,r){return{$$typeof:Fa,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function Eo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fa}function cf(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var Uc=/\/+/g;function Fs(e,r){return typeof e=="object"&&e!==null&&e.key!=null?cf(""+e.key):r.toString(36)}function wi(e,r,n,a,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Fa:case Kh:l=!0}}if(l)return l=e,i=i(l),e=a===""?"."+Fs(l,0):a,Bc(i)?(n="",e!=null&&(n=e.replace(Uc,"$&/")+"/"),wi(i,r,n,"",function(u){return u})):i!=null&&(Eo(i)&&(i=of(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Uc,"$&/")+"/")+e)),r.push(i)),1;if(l=0,a=a===""?".":a+":",Bc(e))for(var o=0;o<e.length;o++){s=e[o];var c=a+Fs(s,o);l+=wi(s,r,n,c,i)}else if(c=lf(e),typeof c=="function")for(e=c.call(e),o=0;!(s=e.next()).done;)s=s.value,c=a+Fs(s,o++),l+=wi(s,r,n,c,i);else if(s==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function ti(e,r,n){if(e==null)return e;var a=[],i=0;return wi(e,a,"","",function(s){return r.call(n,s,i++)}),a}function uf(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var st={current:null},Ei={transition:null},df={ReactCurrentDispatcher:st,ReactCurrentBatchConfig:Ei,ReactCurrentOwner:wo};function Id(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:ti,forEach:function(e,r,n){ti(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return ti(e,function(){r++}),r},toArray:function(e){return ti(e,function(r){return r})||[]},only:function(e){if(!Eo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ue.Component=zn;ue.Fragment=Yh;ue.Profiler=Zh;ue.PureComponent=yo;ue.StrictMode=Xh;ue.Suspense=nf;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=df;ue.act=Id;ue.cloneElement=function(e,r,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Pd({},e.props),i=e.key,s=e.ref,l=e._owner;if(r!=null){if(r.ref!==void 0&&(s=r.ref,l=wo.current),r.key!==void 0&&(i=""+r.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in r)Od.call(r,c)&&!Dd.hasOwnProperty(c)&&(a[c]=r[c]===void 0&&o!==void 0?o[c]:r[c])}var c=arguments.length-2;if(c===1)a.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];a.children=o}return{$$typeof:Fa,type:e.type,key:i,ref:s,props:a,_owner:l}};ue.createContext=function(e){return e={$$typeof:tf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ef,_context:e},e.Consumer=e};ue.createElement=qd;ue.createFactory=function(e){var r=qd.bind(null,e);return r.type=e,r};ue.createRef=function(){return{current:null}};ue.forwardRef=function(e){return{$$typeof:rf,render:e}};ue.isValidElement=Eo;ue.lazy=function(e){return{$$typeof:sf,_payload:{_status:-1,_result:e},_init:uf}};ue.memo=function(e,r){return{$$typeof:af,type:e,compare:r===void 0?null:r}};ue.startTransition=function(e){var r=Ei.transition;Ei.transition={};try{e()}finally{Ei.transition=r}};ue.unstable_act=Id;ue.useCallback=function(e,r){return st.current.useCallback(e,r)};ue.useContext=function(e){return st.current.useContext(e)};ue.useDebugValue=function(){};ue.useDeferredValue=function(e){return st.current.useDeferredValue(e)};ue.useEffect=function(e,r){return st.current.useEffect(e,r)};ue.useId=function(){return st.current.useId()};ue.useImperativeHandle=function(e,r,n){return st.current.useImperativeHandle(e,r,n)};ue.useInsertionEffect=function(e,r){return st.current.useInsertionEffect(e,r)};ue.useLayoutEffect=function(e,r){return st.current.useLayoutEffect(e,r)};ue.useMemo=function(e,r){return st.current.useMemo(e,r)};ue.useReducer=function(e,r,n){return st.current.useReducer(e,r,n)};ue.useRef=function(e){return st.current.useRef(e)};ue.useState=function(e){return st.current.useState(e)};ue.useSyncExternalStore=function(e,r,n){return st.current.useSyncExternalStore(e,r,n)};ue.useTransition=function(){return st.current.useTransition()};ue.version="18.3.1";Md.exports=ue;var R=Md.exports;const pf=Jh(R),mf=Qh({__proto__:null,default:pf},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf=R,ff=Symbol.for("react.element"),gf=Symbol.for("react.fragment"),xf=Object.prototype.hasOwnProperty,vf=hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jf={key:!0,ref:!0,__self:!0,__source:!0};function Fd(e,r,n){var a,i={},s=null,l=null;n!==void 0&&(s=""+n),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(l=r.ref);for(a in r)xf.call(r,a)&&!jf.hasOwnProperty(a)&&(i[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps,r)i[a]===void 0&&(i[a]=r[a]);return{$$typeof:ff,type:e,key:s,ref:l,props:i,_owner:vf.current}}ms.Fragment=gf;ms.jsx=Fd;ms.jsxs=Fd;kd.exports=ms;var t=kd.exports,zd={exports:{}},jt={},Bd={exports:{}},Ud={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(D,B){var U=D.length;D.push(B);e:for(;0<U;){var ne=U-1>>>1,ce=D[ne];if(0<i(ce,B))D[ne]=B,D[U]=ce,U=ne;else break e}}function n(D){return D.length===0?null:D[0]}function a(D){if(D.length===0)return null;var B=D[0],U=D.pop();if(U!==B){D[0]=U;e:for(var ne=0,ce=D.length,be=ce>>>1;ne<be;){var Re=2*(ne+1)-1,Ie=D[Re],Se=Re+1,He=D[Se];if(0>i(Ie,U))Se<ce&&0>i(He,Ie)?(D[ne]=He,D[Se]=U,ne=Se):(D[ne]=Ie,D[Re]=U,ne=Re);else if(Se<ce&&0>i(He,U))D[ne]=He,D[Se]=U,ne=Se;else break e}}return B}function i(D,B){var U=D.sortIndex-B.sortIndex;return U!==0?U:D.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var c=[],u=[],m=1,d=null,f=3,j=!1,g=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var B=n(u);B!==null;){if(B.callback===null)a(u);else if(B.startTime<=D)a(u),B.sortIndex=B.expirationTime,r(c,B);else break;B=n(u)}}function A(D){if(v=!1,x(D),!g)if(n(c)!==null)g=!0,$(M);else{var B=n(u);B!==null&&te(A,B.startTime-D)}}function M(D,B){g=!1,v&&(v=!1,h(E),E=-1),j=!0;var U=f;try{for(x(B),d=n(c);d!==null&&(!(d.expirationTime>B)||D&&!se());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var ce=ne(d.expirationTime<=B);B=e.unstable_now(),typeof ce=="function"?d.callback=ce:d===n(c)&&a(c),x(B)}else a(c);d=n(c)}if(d!==null)var be=!0;else{var Re=n(u);Re!==null&&te(A,Re.startTime-B),be=!1}return be}finally{d=null,f=U,j=!1}}var T=!1,_=null,E=-1,H=5,F=-1;function se(){return!(e.unstable_now()-F<H)}function Z(){if(_!==null){var D=e.unstable_now();F=D;var B=!0;try{B=_(!0,D)}finally{B?xe():(T=!1,_=null)}}else T=!1}var xe;if(typeof p=="function")xe=function(){p(Z)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,O=ee.port2;ee.port1.onmessage=Z,xe=function(){O.postMessage(null)}}else xe=function(){S(Z,0)};function $(D){_=D,T||(T=!0,xe())}function te(D,B){E=S(function(){D(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){g||j||(g=!0,$(M))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(D){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var U=f;f=B;try{return D()}finally{f=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,B){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var U=f;f=D;try{return B()}finally{f=U}},e.unstable_scheduleCallback=function(D,B,U){var ne=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ne+U:ne):U=ne,D){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=U+ce,D={id:m++,callback:B,priorityLevel:D,startTime:U,expirationTime:ce,sortIndex:-1},U>ne?(D.sortIndex=U,r(u,D),n(c)===null&&D===n(u)&&(v?(h(E),E=-1):v=!0,te(A,U-ne))):(D.sortIndex=ce,r(c,D),g||j||(g=!0,$(M))),D},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(D){var B=f;return function(){var U=f;f=B;try{return D.apply(this,arguments)}finally{f=U}}}})(Ud);Bd.exports=Ud;var bf=Bd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf=R,vt=bf;function I(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $d=new Set,ja={};function nn(e,r){Tn(e,r),Tn(e+"Capture",r)}function Tn(e,r){for(ja[e]=r,e=0;e<r.length;e++)$d.add(r[e])}var or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),El=Object.prototype.hasOwnProperty,Sf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$c={},Hc={};function wf(e){return El.call(Hc,e)?!0:El.call($c,e)?!1:Sf.test(e)?Hc[e]=!0:($c[e]=!0,!1)}function Ef(e,r,n,a){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cf(e,r,n,a){if(r===null||typeof r>"u"||Ef(e,r,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function lt(e,r,n,a,i,s,l){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=s,this.removeEmptyString=l}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){We[e]=new lt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];We[r]=new lt(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){We[e]=new lt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){We[e]=new lt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){We[e]=new lt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){We[e]=new lt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){We[e]=new lt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){We[e]=new lt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){We[e]=new lt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Co=/[\-:]([a-z])/g;function Ro(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(Co,Ro);We[r]=new lt(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(Co,Ro);We[r]=new lt(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(Co,Ro);We[r]=new lt(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){We[e]=new lt(e,1,!1,e.toLowerCase(),null,!1,!1)});We.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){We[e]=new lt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Lo(e,r,n,a){var i=We.hasOwnProperty(r)?We[r]:null;(i!==null?i.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Cf(r,n,i,a)&&(n=null),a||i===null?wf(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(r=i.attributeName,a=i.attributeNamespace,n===null?e.removeAttribute(r):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,a?e.setAttributeNS(a,r,n):e.setAttribute(r,n))))}var pr=yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ri=Symbol.for("react.element"),mn=Symbol.for("react.portal"),hn=Symbol.for("react.fragment"),Ao=Symbol.for("react.strict_mode"),Cl=Symbol.for("react.profiler"),Hd=Symbol.for("react.provider"),Vd=Symbol.for("react.context"),ko=Symbol.for("react.forward_ref"),Rl=Symbol.for("react.suspense"),Ll=Symbol.for("react.suspense_list"),Mo=Symbol.for("react.memo"),xr=Symbol.for("react.lazy"),Gd=Symbol.for("react.offscreen"),Vc=Symbol.iterator;function Gn(e){return e===null||typeof e!="object"?null:(e=Vc&&e[Vc]||e["@@iterator"],typeof e=="function"?e:null)}var Ne=Object.assign,zs;function na(e){if(zs===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);zs=r&&r[1]||""}return`
`+zs+e}var Bs=!1;function Us(e,r){if(!e||Bs)return"";Bs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(u){var a=u}Reflect.construct(e,[],r)}else{try{r.call()}catch(u){a=u}e.call(r.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=a.stack.split(`
`),l=i.length-1,o=s.length-1;1<=l&&0<=o&&i[l]!==s[o];)o--;for(;1<=l&&0<=o;l--,o--)if(i[l]!==s[o]){if(l!==1||o!==1)do if(l--,o--,0>o||i[l]!==s[o]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=o);break}}}finally{Bs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?na(e):""}function Rf(e){switch(e.tag){case 5:return na(e.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return e=Us(e.type,!1),e;case 11:return e=Us(e.type.render,!1),e;case 1:return e=Us(e.type,!0),e;default:return""}}function Al(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hn:return"Fragment";case mn:return"Portal";case Cl:return"Profiler";case Ao:return"StrictMode";case Rl:return"Suspense";case Ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vd:return(e.displayName||"Context")+".Consumer";case Hd:return(e._context.displayName||"Context")+".Provider";case ko:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Mo:return r=e.displayName||null,r!==null?r:Al(e.type)||"Memo";case xr:r=e._payload,e=e._init;try{return Al(e(r))}catch{}}return null}function Lf(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Al(r);case 8:return r===Ao?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function _r(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wd(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Af(e){var r=Wd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),a=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(l){a=""+l,s.call(this,l)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(l){a=""+l},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function ni(e){e._valueTracker||(e._valueTracker=Af(e))}function Qd(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),a="";return e&&(a=Wd(e)?e.checked?"true":"false":e.value),e=a,e!==n?(r.setValue(e),!0):!1}function zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kl(e,r){var n=r.checked;return Ne({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gc(e,r){var n=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;n=_r(r.value!=null?r.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Jd(e,r){r=r.checked,r!=null&&Lo(e,"checked",r,!1)}function Ml(e,r){Jd(e,r);var n=_r(r.value),a=r.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Nl(e,r.type,n):r.hasOwnProperty("defaultValue")&&Nl(e,r.type,_r(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Wc(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Nl(e,r,n){(r!=="number"||zi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var aa=Array.isArray;function Rn(e,r,n,a){if(e=e.options,r){r={};for(var i=0;i<n.length;i++)r["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=r.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+_r(n),r=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function Pl(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(I(91));return Ne({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qc(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(I(92));if(aa(n)){if(1<n.length)throw Error(I(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:_r(n)}}function Kd(e,r){var n=_r(r.value),a=_r(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function Jc(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Yd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tl(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Yd(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ai,Xd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,a,i){MSApp.execUnsafeLocalFunction(function(){return e(r,n,a,i)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(ai=ai||document.createElement("div"),ai.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ai.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function ba(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kf=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(e){kf.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),ca[r]=ca[e]})});function Zd(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||ca.hasOwnProperty(e)&&ca[e]?(""+r).trim():r+"px"}function ep(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var a=n.indexOf("--")===0,i=Zd(n,r[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,i):e[n]=i}}var Mf=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _l(e,r){if(r){if(Mf[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(I(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(I(61))}if(r.style!=null&&typeof r.style!="object")throw Error(I(62))}}function Ol(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dl=null;function No(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ql=null,Ln=null,An=null;function Kc(e){if(e=Ua(e)){if(typeof ql!="function")throw Error(I(280));var r=e.stateNode;r&&(r=vs(r),ql(e.stateNode,e.type,r))}}function tp(e){Ln?An?An.push(e):An=[e]:Ln=e}function rp(){if(Ln){var e=Ln,r=An;if(An=Ln=null,Kc(e),r)for(e=0;e<r.length;e++)Kc(r[e])}}function np(e,r){return e(r)}function ap(){}var $s=!1;function ip(e,r,n){if($s)return e(r,n);$s=!0;try{return np(e,r,n)}finally{$s=!1,(Ln!==null||An!==null)&&(ap(),rp())}}function ya(e,r){var n=e.stateNode;if(n===null)return null;var a=vs(n);if(a===null)return null;n=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,r,typeof n));return n}var Il=!1;if(or)try{var Wn={};Object.defineProperty(Wn,"passive",{get:function(){Il=!0}}),window.addEventListener("test",Wn,Wn),window.removeEventListener("test",Wn,Wn)}catch{Il=!1}function Nf(e,r,n,a,i,s,l,o,c){var u=Array.prototype.slice.call(arguments,3);try{r.apply(n,u)}catch(m){this.onError(m)}}var ua=!1,Bi=null,Ui=!1,Fl=null,Pf={onError:function(e){ua=!0,Bi=e}};function Tf(e,r,n,a,i,s,l,o,c){ua=!1,Bi=null,Nf.apply(Pf,arguments)}function _f(e,r,n,a,i,s,l,o,c){if(Tf.apply(this,arguments),ua){if(ua){var u=Bi;ua=!1,Bi=null}else throw Error(I(198));Ui||(Ui=!0,Fl=u)}}function an(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function sp(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Yc(e){if(an(e)!==e)throw Error(I(188))}function Of(e){var r=e.alternate;if(!r){if(r=an(e),r===null)throw Error(I(188));return r!==e?null:e}for(var n=e,a=r;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Yc(i),e;if(s===a)return Yc(i),r;s=s.sibling}throw Error(I(188))}if(n.return!==a.return)n=i,a=s;else{for(var l=!1,o=i.child;o;){if(o===n){l=!0,n=i,a=s;break}if(o===a){l=!0,a=i,n=s;break}o=o.sibling}if(!l){for(o=s.child;o;){if(o===n){l=!0,n=s,a=i;break}if(o===a){l=!0,a=s,n=i;break}o=o.sibling}if(!l)throw Error(I(189))}}if(n.alternate!==a)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:r}function lp(e){return e=Of(e),e!==null?op(e):null}function op(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=op(e);if(r!==null)return r;e=e.sibling}return null}var cp=vt.unstable_scheduleCallback,Xc=vt.unstable_cancelCallback,Df=vt.unstable_shouldYield,qf=vt.unstable_requestPaint,Oe=vt.unstable_now,If=vt.unstable_getCurrentPriorityLevel,Po=vt.unstable_ImmediatePriority,up=vt.unstable_UserBlockingPriority,$i=vt.unstable_NormalPriority,Ff=vt.unstable_LowPriority,dp=vt.unstable_IdlePriority,hs=null,Gt=null;function zf(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(hs,e,void 0,(e.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:$f,Bf=Math.log,Uf=Math.LN2;function $f(e){return e>>>=0,e===0?32:31-(Bf(e)/Uf|0)|0}var ii=64,si=4194304;function ia(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hi(e,r){var n=e.pendingLanes;if(n===0)return 0;var a=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var o=l&~i;o!==0?a=ia(o):(s&=l,s!==0&&(a=ia(s)))}else l=n&~i,l!==0?a=ia(l):s!==0&&(a=ia(s));if(a===0)return 0;if(r!==0&&r!==a&&!(r&i)&&(i=a&-a,s=r&-r,i>=s||i===16&&(s&4194240)!==0))return r;if(a&4&&(a|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=a;0<r;)n=31-qt(r),i=1<<n,a|=e[n],r&=~i;return a}function Hf(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vf(e,r){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-qt(s),o=1<<l,c=i[l];c===-1?(!(o&n)||o&a)&&(i[l]=Hf(o,r)):c<=r&&(e.expiredLanes|=o),s&=~o}}function zl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pp(){var e=ii;return ii<<=1,!(ii&4194240)&&(ii=64),e}function Hs(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function za(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-qt(r),e[r]=n}function Gf(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-qt(n),s=1<<i;r[i]=0,a[i]=-1,e[i]=-1,n&=~s}}function To(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var a=31-qt(n),i=1<<a;i&r|e[a]&r&&(e[a]|=r),n&=~i}}var ve=0;function mp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hp,_o,fp,gp,xp,Bl=!1,li=[],Rr=null,Lr=null,Ar=null,Sa=new Map,wa=new Map,jr=[],Wf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zc(e,r){switch(e){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":Sa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(r.pointerId)}}function Qn(e,r,n,a,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:r,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},r!==null&&(r=Ua(r),r!==null&&_o(r)),e):(e.eventSystemFlags|=a,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function Qf(e,r,n,a,i){switch(r){case"focusin":return Rr=Qn(Rr,e,r,n,a,i),!0;case"dragenter":return Lr=Qn(Lr,e,r,n,a,i),!0;case"mouseover":return Ar=Qn(Ar,e,r,n,a,i),!0;case"pointerover":var s=i.pointerId;return Sa.set(s,Qn(Sa.get(s)||null,e,r,n,a,i)),!0;case"gotpointercapture":return s=i.pointerId,wa.set(s,Qn(wa.get(s)||null,e,r,n,a,i)),!0}return!1}function vp(e){var r=Gr(e.target);if(r!==null){var n=an(r);if(n!==null){if(r=n.tag,r===13){if(r=sp(n),r!==null){e.blockedOn=r,xp(e.priority,function(){fp(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ci(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=Ul(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Dl=a,n.target.dispatchEvent(a),Dl=null}else return r=Ua(n),r!==null&&_o(r),e.blockedOn=n,!1;r.shift()}return!0}function eu(e,r,n){Ci(e)&&n.delete(r)}function Jf(){Bl=!1,Rr!==null&&Ci(Rr)&&(Rr=null),Lr!==null&&Ci(Lr)&&(Lr=null),Ar!==null&&Ci(Ar)&&(Ar=null),Sa.forEach(eu),wa.forEach(eu)}function Jn(e,r){e.blockedOn===r&&(e.blockedOn=null,Bl||(Bl=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,Jf)))}function Ea(e){function r(i){return Jn(i,e)}if(0<li.length){Jn(li[0],e);for(var n=1;n<li.length;n++){var a=li[n];a.blockedOn===e&&(a.blockedOn=null)}}for(Rr!==null&&Jn(Rr,e),Lr!==null&&Jn(Lr,e),Ar!==null&&Jn(Ar,e),Sa.forEach(r),wa.forEach(r),n=0;n<jr.length;n++)a=jr[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<jr.length&&(n=jr[0],n.blockedOn===null);)vp(n),n.blockedOn===null&&jr.shift()}var kn=pr.ReactCurrentBatchConfig,Vi=!0;function Kf(e,r,n,a){var i=ve,s=kn.transition;kn.transition=null;try{ve=1,Oo(e,r,n,a)}finally{ve=i,kn.transition=s}}function Yf(e,r,n,a){var i=ve,s=kn.transition;kn.transition=null;try{ve=4,Oo(e,r,n,a)}finally{ve=i,kn.transition=s}}function Oo(e,r,n,a){if(Vi){var i=Ul(e,r,n,a);if(i===null)el(e,r,a,Gi,n),Zc(e,a);else if(Qf(i,e,r,n,a))a.stopPropagation();else if(Zc(e,a),r&4&&-1<Wf.indexOf(e)){for(;i!==null;){var s=Ua(i);if(s!==null&&hp(s),s=Ul(e,r,n,a),s===null&&el(e,r,a,Gi,n),s===i)break;i=s}i!==null&&a.stopPropagation()}else el(e,r,a,null,n)}}var Gi=null;function Ul(e,r,n,a){if(Gi=null,e=No(a),e=Gr(e),e!==null)if(r=an(e),r===null)e=null;else if(n=r.tag,n===13){if(e=sp(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Gi=e,null}function jp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(If()){case Po:return 1;case up:return 4;case $i:case Ff:return 16;case dp:return 536870912;default:return 16}default:return 16}}var wr=null,Do=null,Ri=null;function bp(){if(Ri)return Ri;var e,r=Do,n=r.length,a,i="value"in wr?wr.value:wr.textContent,s=i.length;for(e=0;e<n&&r[e]===i[e];e++);var l=n-e;for(a=1;a<=l&&r[n-a]===i[s-a];a++);return Ri=i.slice(e,1<a?1-a:void 0)}function Li(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function oi(){return!0}function tu(){return!1}function bt(e){function r(n,a,i,s,l){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oi:tu,this.isPropagationStopped=tu,this}return Ne(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oi)},persist:function(){},isPersistent:oi}),r}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=bt(Bn),Ba=Ne({},Bn,{view:0,detail:0}),Xf=bt(Ba),Vs,Gs,Kn,fs=Ne({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Io,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kn&&(Kn&&e.type==="mousemove"?(Vs=e.screenX-Kn.screenX,Gs=e.screenY-Kn.screenY):Gs=Vs=0,Kn=e),Vs)},movementY:function(e){return"movementY"in e?e.movementY:Gs}}),ru=bt(fs),Zf=Ne({},fs,{dataTransfer:0}),eg=bt(Zf),tg=Ne({},Ba,{relatedTarget:0}),Ws=bt(tg),rg=Ne({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0}),ng=bt(rg),ag=Ne({},Bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ig=bt(ag),sg=Ne({},Bn,{data:0}),nu=bt(sg),lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ug(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=cg[e])?!!r[e]:!1}function Io(){return ug}var dg=Ne({},Ba,{key:function(e){if(e.key){var r=lg[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?og[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Io,charCode:function(e){return e.type==="keypress"?Li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pg=bt(dg),mg=Ne({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),au=bt(mg),hg=Ne({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Io}),fg=bt(hg),gg=Ne({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),xg=bt(gg),vg=Ne({},fs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jg=bt(vg),bg=[9,13,27,32],Fo=or&&"CompositionEvent"in window,da=null;or&&"documentMode"in document&&(da=document.documentMode);var yg=or&&"TextEvent"in window&&!da,yp=or&&(!Fo||da&&8<da&&11>=da),iu=" ",su=!1;function Sp(e,r){switch(e){case"keyup":return bg.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function Sg(e,r){switch(e){case"compositionend":return wp(r);case"keypress":return r.which!==32?null:(su=!0,iu);case"textInput":return e=r.data,e===iu&&su?null:e;default:return null}}function wg(e,r){if(fn)return e==="compositionend"||!Fo&&Sp(e,r)?(e=bp(),Ri=Do=wr=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return yp&&r.locale!=="ko"?null:r.data;default:return null}}var Eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lu(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Eg[e.type]:r==="textarea"}function Ep(e,r,n,a){tp(a),r=Wi(r,"onChange"),0<r.length&&(n=new qo("onChange","change",null,n,a),e.push({event:n,listeners:r}))}var pa=null,Ca=null;function Cg(e){Op(e,0)}function gs(e){var r=vn(e);if(Qd(r))return e}function Rg(e,r){if(e==="change")return r}var Cp=!1;if(or){var Qs;if(or){var Js="oninput"in document;if(!Js){var ou=document.createElement("div");ou.setAttribute("oninput","return;"),Js=typeof ou.oninput=="function"}Qs=Js}else Qs=!1;Cp=Qs&&(!document.documentMode||9<document.documentMode)}function cu(){pa&&(pa.detachEvent("onpropertychange",Rp),Ca=pa=null)}function Rp(e){if(e.propertyName==="value"&&gs(Ca)){var r=[];Ep(r,Ca,e,No(e)),ip(Cg,r)}}function Lg(e,r,n){e==="focusin"?(cu(),pa=r,Ca=n,pa.attachEvent("onpropertychange",Rp)):e==="focusout"&&cu()}function Ag(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gs(Ca)}function kg(e,r){if(e==="click")return gs(r)}function Mg(e,r){if(e==="input"||e==="change")return gs(r)}function Ng(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var zt=typeof Object.is=="function"?Object.is:Ng;function Ra(e,r){if(zt(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),a=Object.keys(r);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!El.call(r,i)||!zt(e[i],r[i]))return!1}return!0}function uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function du(e,r){var n=uu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=r&&a>=r)return{node:n,offset:r-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uu(n)}}function Lp(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Lp(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Ap(){for(var e=window,r=zi();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=zi(e.document)}return r}function zo(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Pg(e){var r=Ap(),n=e.focusedElem,a=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Lp(n.ownerDocument.documentElement,n)){if(a!==null&&zo(n)){if(r=a.start,e=a.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(a.start,i);a=a.end===void 0?s:Math.min(a.end,i),!e.extend&&s>a&&(i=a,a=s,s=i),i=du(n,s);var l=du(n,a);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),s>a?(e.addRange(r),e.extend(l.node,l.offset)):(r.setEnd(l.node,l.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tg=or&&"documentMode"in document&&11>=document.documentMode,gn=null,$l=null,ma=null,Hl=!1;function pu(e,r,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hl||gn==null||gn!==zi(a)||(a=gn,"selectionStart"in a&&zo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ma&&Ra(ma,a)||(ma=a,a=Wi($l,"onSelect"),0<a.length&&(r=new qo("onSelect","select",null,r,n),e.push({event:r,listeners:a}),r.target=gn)))}function ci(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var xn={animationend:ci("Animation","AnimationEnd"),animationiteration:ci("Animation","AnimationIteration"),animationstart:ci("Animation","AnimationStart"),transitionend:ci("Transition","TransitionEnd")},Ks={},kp={};or&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function xs(e){if(Ks[e])return Ks[e];if(!xn[e])return e;var r=xn[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in kp)return Ks[e]=r[n];return e}var Mp=xs("animationend"),Np=xs("animationiteration"),Pp=xs("animationstart"),Tp=xs("transitionend"),_p=new Map,mu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(e,r){_p.set(e,r),nn(r,[e])}for(var Ys=0;Ys<mu.length;Ys++){var Xs=mu[Ys],_g=Xs.toLowerCase(),Og=Xs[0].toUpperCase()+Xs.slice(1);Dr(_g,"on"+Og)}Dr(Mp,"onAnimationEnd");Dr(Np,"onAnimationIteration");Dr(Pp,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(Tp,"onTransitionEnd");Tn("onMouseEnter",["mouseout","mouseover"]);Tn("onMouseLeave",["mouseout","mouseover"]);Tn("onPointerEnter",["pointerout","pointerover"]);Tn("onPointerLeave",["pointerout","pointerover"]);nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dg=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function hu(e,r,n){var a=e.type||"unknown-event";e.currentTarget=n,_f(a,r,void 0,e),e.currentTarget=null}function Op(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var s=void 0;if(r)for(var l=a.length-1;0<=l;l--){var o=a[l],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&i.isPropagationStopped())break e;hu(i,o,u),s=c}else for(l=0;l<a.length;l++){if(o=a[l],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&i.isPropagationStopped())break e;hu(i,o,u),s=c}}}if(Ui)throw e=Fl,Ui=!1,Fl=null,e}function we(e,r){var n=r[Jl];n===void 0&&(n=r[Jl]=new Set);var a=e+"__bubble";n.has(a)||(Dp(r,e,2,!1),n.add(a))}function Zs(e,r,n){var a=0;r&&(a|=4),Dp(n,e,a,r)}var ui="_reactListening"+Math.random().toString(36).slice(2);function La(e){if(!e[ui]){e[ui]=!0,$d.forEach(function(n){n!=="selectionchange"&&(Dg.has(n)||Zs(n,!1,e),Zs(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[ui]||(r[ui]=!0,Zs("selectionchange",!1,r))}}function Dp(e,r,n,a){switch(jp(r)){case 1:var i=Kf;break;case 4:i=Yf;break;default:i=Oo}n=i.bind(null,r,n,e),i=void 0,!Il||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(r,n,{capture:!0,passive:i}):e.addEventListener(r,n,!0):i!==void 0?e.addEventListener(r,n,{passive:i}):e.addEventListener(r,n,!1)}function el(e,r,n,a,i){var s=a;if(!(r&1)&&!(r&2)&&a!==null)e:for(;;){if(a===null)return;var l=a.tag;if(l===3||l===4){var o=a.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(l===4)for(l=a.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;o!==null;){if(l=Gr(o),l===null)return;if(c=l.tag,c===5||c===6){a=s=l;continue e}o=o.parentNode}}a=a.return}ip(function(){var u=s,m=No(n),d=[];e:{var f=_p.get(e);if(f!==void 0){var j=qo,g=e;switch(e){case"keypress":if(Li(n)===0)break e;case"keydown":case"keyup":j=pg;break;case"focusin":g="focus",j=Ws;break;case"focusout":g="blur",j=Ws;break;case"beforeblur":case"afterblur":j=Ws;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=fg;break;case Mp:case Np:case Pp:j=ng;break;case Tp:j=xg;break;case"scroll":j=Xf;break;case"wheel":j=jg;break;case"copy":case"cut":case"paste":j=ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=au}var v=(r&4)!==0,S=!v&&e==="scroll",h=v?f!==null?f+"Capture":null:f;v=[];for(var p=u,x;p!==null;){x=p;var A=x.stateNode;if(x.tag===5&&A!==null&&(x=A,h!==null&&(A=ya(p,h),A!=null&&v.push(Aa(p,A,x)))),S)break;p=p.return}0<v.length&&(f=new j(f,g,null,n,m),d.push({event:f,listeners:v}))}}if(!(r&7)){e:{if(f=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",f&&n!==Dl&&(g=n.relatedTarget||n.fromElement)&&(Gr(g)||g[cr]))break e;if((j||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,j?(g=n.relatedTarget||n.toElement,j=u,g=g?Gr(g):null,g!==null&&(S=an(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(j=null,g=u),j!==g)){if(v=ru,A="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=au,A="onPointerLeave",h="onPointerEnter",p="pointer"),S=j==null?f:vn(j),x=g==null?f:vn(g),f=new v(A,p+"leave",j,n,m),f.target=S,f.relatedTarget=x,A=null,Gr(m)===u&&(v=new v(h,p+"enter",g,n,m),v.target=x,v.relatedTarget=S,A=v),S=A,j&&g)t:{for(v=j,h=g,p=0,x=v;x;x=un(x))p++;for(x=0,A=h;A;A=un(A))x++;for(;0<p-x;)v=un(v),p--;for(;0<x-p;)h=un(h),x--;for(;p--;){if(v===h||h!==null&&v===h.alternate)break t;v=un(v),h=un(h)}v=null}else v=null;j!==null&&fu(d,f,j,v,!1),g!==null&&S!==null&&fu(d,S,g,v,!0)}}e:{if(f=u?vn(u):window,j=f.nodeName&&f.nodeName.toLowerCase(),j==="select"||j==="input"&&f.type==="file")var M=Rg;else if(lu(f))if(Cp)M=Mg;else{M=Ag;var T=Lg}else(j=f.nodeName)&&j.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(M=kg);if(M&&(M=M(e,u))){Ep(d,M,n,m);break e}T&&T(e,f,u),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Nl(f,"number",f.value)}switch(T=u?vn(u):window,e){case"focusin":(lu(T)||T.contentEditable==="true")&&(gn=T,$l=u,ma=null);break;case"focusout":ma=$l=gn=null;break;case"mousedown":Hl=!0;break;case"contextmenu":case"mouseup":case"dragend":Hl=!1,pu(d,n,m);break;case"selectionchange":if(Tg)break;case"keydown":case"keyup":pu(d,n,m)}var _;if(Fo)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else fn?Sp(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(yp&&n.locale!=="ko"&&(fn||E!=="onCompositionStart"?E==="onCompositionEnd"&&fn&&(_=bp()):(wr=m,Do="value"in wr?wr.value:wr.textContent,fn=!0)),T=Wi(u,E),0<T.length&&(E=new nu(E,e,null,n,m),d.push({event:E,listeners:T}),_?E.data=_:(_=wp(n),_!==null&&(E.data=_)))),(_=yg?Sg(e,n):wg(e,n))&&(u=Wi(u,"onBeforeInput"),0<u.length&&(m=new nu("onBeforeInput","beforeinput",null,n,m),d.push({event:m,listeners:u}),m.data=_))}Op(d,r)})}function Aa(e,r,n){return{instance:e,listener:r,currentTarget:n}}function Wi(e,r){for(var n=r+"Capture",a=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ya(e,n),s!=null&&a.unshift(Aa(e,s,i)),s=ya(e,r),s!=null&&a.push(Aa(e,s,i))),e=e.return}return a}function un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fu(e,r,n,a,i){for(var s=r._reactName,l=[];n!==null&&n!==a;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===a)break;o.tag===5&&u!==null&&(o=u,i?(c=ya(n,s),c!=null&&l.unshift(Aa(n,c,o))):i||(c=ya(n,s),c!=null&&l.push(Aa(n,c,o)))),n=n.return}l.length!==0&&e.push({event:r,listeners:l})}var qg=/\r\n?/g,Ig=/\u0000|\uFFFD/g;function gu(e){return(typeof e=="string"?e:""+e).replace(qg,`
`).replace(Ig,"")}function di(e,r,n){if(r=gu(r),gu(e)!==r&&n)throw Error(I(425))}function Qi(){}var Vl=null,Gl=null;function Wl(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ql=typeof setTimeout=="function"?setTimeout:void 0,Fg=typeof clearTimeout=="function"?clearTimeout:void 0,xu=typeof Promise=="function"?Promise:void 0,zg=typeof queueMicrotask=="function"?queueMicrotask:typeof xu<"u"?function(e){return xu.resolve(null).then(e).catch(Bg)}:Ql;function Bg(e){setTimeout(function(){throw e})}function tl(e,r){var n=r,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(a===0){e.removeChild(i),Ea(r);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=i}while(n);Ea(r)}function kr(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function vu(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var Un=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Un,ka="__reactProps$"+Un,cr="__reactContainer$"+Un,Jl="__reactEvents$"+Un,Ug="__reactListeners$"+Un,$g="__reactHandles$"+Un;function Gr(e){var r=e[Vt];if(r)return r;for(var n=e.parentNode;n;){if(r=n[cr]||n[Vt]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=vu(e);e!==null;){if(n=e[Vt])return n;e=vu(e)}return r}e=n,n=e.parentNode}return null}function Ua(e){return e=e[Vt]||e[cr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function vs(e){return e[ka]||null}var Kl=[],jn=-1;function qr(e){return{current:e}}function Ce(e){0>jn||(e.current=Kl[jn],Kl[jn]=null,jn--)}function ye(e,r){jn++,Kl[jn]=e.current,e.current=r}var Or={},et=qr(Or),ut=qr(!1),Xr=Or;function _n(e,r){var n=e.type.contextTypes;if(!n)return Or;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=r[s];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function dt(e){return e=e.childContextTypes,e!=null}function Ji(){Ce(ut),Ce(et)}function ju(e,r,n){if(et.current!==Or)throw Error(I(168));ye(et,r),ye(ut,n)}function qp(e,r,n){var a=e.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var i in a)if(!(i in r))throw Error(I(108,Lf(e)||"Unknown",i));return Ne({},n,a)}function Ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Or,Xr=et.current,ye(et,e),ye(ut,ut.current),!0}function bu(e,r,n){var a=e.stateNode;if(!a)throw Error(I(169));n?(e=qp(e,r,Xr),a.__reactInternalMemoizedMergedChildContext=e,Ce(ut),Ce(et),ye(et,e)):Ce(ut),ye(ut,n)}var ar=null,js=!1,rl=!1;function Ip(e){ar===null?ar=[e]:ar.push(e)}function Hg(e){js=!0,Ip(e)}function Ir(){if(!rl&&ar!==null){rl=!0;var e=0,r=ve;try{var n=ar;for(ve=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}ar=null,js=!1}catch(i){throw ar!==null&&(ar=ar.slice(e+1)),cp(Po,Ir),i}finally{ve=r,rl=!1}}return null}var bn=[],yn=0,Yi=null,Xi=0,wt=[],Et=0,Zr=null,ir=1,sr="";function Hr(e,r){bn[yn++]=Xi,bn[yn++]=Yi,Yi=e,Xi=r}function Fp(e,r,n){wt[Et++]=ir,wt[Et++]=sr,wt[Et++]=Zr,Zr=e;var a=ir;e=sr;var i=32-qt(a)-1;a&=~(1<<i),n+=1;var s=32-qt(r)+i;if(30<s){var l=i-i%5;s=(a&(1<<l)-1).toString(32),a>>=l,i-=l,ir=1<<32-qt(r)+i|n<<i|a,sr=s+e}else ir=1<<s|n<<i|a,sr=e}function Bo(e){e.return!==null&&(Hr(e,1),Fp(e,1,0))}function Uo(e){for(;e===Yi;)Yi=bn[--yn],bn[yn]=null,Xi=bn[--yn],bn[yn]=null;for(;e===Zr;)Zr=wt[--Et],wt[Et]=null,sr=wt[--Et],wt[Et]=null,ir=wt[--Et],wt[Et]=null}var xt=null,gt=null,Le=!1,Dt=null;function zp(e,r){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function yu(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,xt=e,gt=kr(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,xt=e,gt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=Zr!==null?{id:ir,overflow:sr}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,xt=e,gt=null,!0):!1;default:return!1}}function Yl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xl(e){if(Le){var r=gt;if(r){var n=r;if(!yu(e,r)){if(Yl(e))throw Error(I(418));r=kr(n.nextSibling);var a=xt;r&&yu(e,r)?zp(a,n):(e.flags=e.flags&-4097|2,Le=!1,xt=e)}}else{if(Yl(e))throw Error(I(418));e.flags=e.flags&-4097|2,Le=!1,xt=e}}}function Su(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xt=e}function pi(e){if(e!==xt)return!1;if(!Le)return Su(e),Le=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Wl(e.type,e.memoizedProps)),r&&(r=gt)){if(Yl(e))throw Bp(),Error(I(418));for(;r;)zp(e,r),r=kr(r.nextSibling)}if(Su(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){gt=kr(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}gt=null}}else gt=xt?kr(e.stateNode.nextSibling):null;return!0}function Bp(){for(var e=gt;e;)e=kr(e.nextSibling)}function On(){gt=xt=null,Le=!1}function $o(e){Dt===null?Dt=[e]:Dt.push(e)}var Vg=pr.ReactCurrentBatchConfig;function Yn(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var a=n.stateNode}if(!a)throw Error(I(147,e));var i=a,s=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(l){var o=i.refs;l===null?delete o[s]:o[s]=l},r._stringRef=s,r)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function mi(e,r){throw e=Object.prototype.toString.call(r),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function wu(e){var r=e._init;return r(e._payload)}function Up(e){function r(h,p){if(e){var x=h.deletions;x===null?(h.deletions=[p],h.flags|=16):x.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)r(h,p),p=p.sibling;return null}function a(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=Tr(h,p),h.index=0,h.sibling=null,h}function s(h,p,x){return h.index=x,e?(x=h.alternate,x!==null?(x=x.index,x<p?(h.flags|=2,p):x):(h.flags|=2,p)):(h.flags|=1048576,p)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function o(h,p,x,A){return p===null||p.tag!==6?(p=cl(x,h.mode,A),p.return=h,p):(p=i(p,x),p.return=h,p)}function c(h,p,x,A){var M=x.type;return M===hn?m(h,p,x.props.children,A,x.key):p!==null&&(p.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===xr&&wu(M)===p.type)?(A=i(p,x.props),A.ref=Yn(h,p,x),A.return=h,A):(A=_i(x.type,x.key,x.props,null,h.mode,A),A.ref=Yn(h,p,x),A.return=h,A)}function u(h,p,x,A){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=ul(x,h.mode,A),p.return=h,p):(p=i(p,x.children||[]),p.return=h,p)}function m(h,p,x,A,M){return p===null||p.tag!==7?(p=Yr(x,h.mode,A,M),p.return=h,p):(p=i(p,x),p.return=h,p)}function d(h,p,x){if(typeof p=="string"&&p!==""||typeof p=="number")return p=cl(""+p,h.mode,x),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ri:return x=_i(p.type,p.key,p.props,null,h.mode,x),x.ref=Yn(h,null,p),x.return=h,x;case mn:return p=ul(p,h.mode,x),p.return=h,p;case xr:var A=p._init;return d(h,A(p._payload),x)}if(aa(p)||Gn(p))return p=Yr(p,h.mode,x,null),p.return=h,p;mi(h,p)}return null}function f(h,p,x,A){var M=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return M!==null?null:o(h,p,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ri:return x.key===M?c(h,p,x,A):null;case mn:return x.key===M?u(h,p,x,A):null;case xr:return M=x._init,f(h,p,M(x._payload),A)}if(aa(x)||Gn(x))return M!==null?null:m(h,p,x,A,null);mi(h,x)}return null}function j(h,p,x,A,M){if(typeof A=="string"&&A!==""||typeof A=="number")return h=h.get(x)||null,o(p,h,""+A,M);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ri:return h=h.get(A.key===null?x:A.key)||null,c(p,h,A,M);case mn:return h=h.get(A.key===null?x:A.key)||null,u(p,h,A,M);case xr:var T=A._init;return j(h,p,x,T(A._payload),M)}if(aa(A)||Gn(A))return h=h.get(x)||null,m(p,h,A,M,null);mi(p,A)}return null}function g(h,p,x,A){for(var M=null,T=null,_=p,E=p=0,H=null;_!==null&&E<x.length;E++){_.index>E?(H=_,_=null):H=_.sibling;var F=f(h,_,x[E],A);if(F===null){_===null&&(_=H);break}e&&_&&F.alternate===null&&r(h,_),p=s(F,p,E),T===null?M=F:T.sibling=F,T=F,_=H}if(E===x.length)return n(h,_),Le&&Hr(h,E),M;if(_===null){for(;E<x.length;E++)_=d(h,x[E],A),_!==null&&(p=s(_,p,E),T===null?M=_:T.sibling=_,T=_);return Le&&Hr(h,E),M}for(_=a(h,_);E<x.length;E++)H=j(_,h,E,x[E],A),H!==null&&(e&&H.alternate!==null&&_.delete(H.key===null?E:H.key),p=s(H,p,E),T===null?M=H:T.sibling=H,T=H);return e&&_.forEach(function(se){return r(h,se)}),Le&&Hr(h,E),M}function v(h,p,x,A){var M=Gn(x);if(typeof M!="function")throw Error(I(150));if(x=M.call(x),x==null)throw Error(I(151));for(var T=M=null,_=p,E=p=0,H=null,F=x.next();_!==null&&!F.done;E++,F=x.next()){_.index>E?(H=_,_=null):H=_.sibling;var se=f(h,_,F.value,A);if(se===null){_===null&&(_=H);break}e&&_&&se.alternate===null&&r(h,_),p=s(se,p,E),T===null?M=se:T.sibling=se,T=se,_=H}if(F.done)return n(h,_),Le&&Hr(h,E),M;if(_===null){for(;!F.done;E++,F=x.next())F=d(h,F.value,A),F!==null&&(p=s(F,p,E),T===null?M=F:T.sibling=F,T=F);return Le&&Hr(h,E),M}for(_=a(h,_);!F.done;E++,F=x.next())F=j(_,h,E,F.value,A),F!==null&&(e&&F.alternate!==null&&_.delete(F.key===null?E:F.key),p=s(F,p,E),T===null?M=F:T.sibling=F,T=F);return e&&_.forEach(function(Z){return r(h,Z)}),Le&&Hr(h,E),M}function S(h,p,x,A){if(typeof x=="object"&&x!==null&&x.type===hn&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ri:e:{for(var M=x.key,T=p;T!==null;){if(T.key===M){if(M=x.type,M===hn){if(T.tag===7){n(h,T.sibling),p=i(T,x.props.children),p.return=h,h=p;break e}}else if(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===xr&&wu(M)===T.type){n(h,T.sibling),p=i(T,x.props),p.ref=Yn(h,T,x),p.return=h,h=p;break e}n(h,T);break}else r(h,T);T=T.sibling}x.type===hn?(p=Yr(x.props.children,h.mode,A,x.key),p.return=h,h=p):(A=_i(x.type,x.key,x.props,null,h.mode,A),A.ref=Yn(h,p,x),A.return=h,h=A)}return l(h);case mn:e:{for(T=x.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){n(h,p.sibling),p=i(p,x.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else r(h,p);p=p.sibling}p=ul(x,h.mode,A),p.return=h,h=p}return l(h);case xr:return T=x._init,S(h,p,T(x._payload),A)}if(aa(x))return g(h,p,x,A);if(Gn(x))return v(h,p,x,A);mi(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,x),p.return=h,h=p):(n(h,p),p=cl(x,h.mode,A),p.return=h,h=p),l(h)):n(h,p)}return S}var Dn=Up(!0),$p=Up(!1),Zi=qr(null),es=null,Sn=null,Ho=null;function Vo(){Ho=Sn=es=null}function Go(e){var r=Zi.current;Ce(Zi),e._currentValue=r}function Zl(e,r,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),e===n)break;e=e.return}}function Mn(e,r){es=e,Ho=Sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(ct=!0),e.firstContext=null)}function Lt(e){var r=e._currentValue;if(Ho!==e)if(e={context:e,memoizedValue:r,next:null},Sn===null){if(es===null)throw Error(I(308));Sn=e,es.dependencies={lanes:0,firstContext:e}}else Sn=Sn.next=e;return r}var Wr=null;function Wo(e){Wr===null?Wr=[e]:Wr.push(e)}function Hp(e,r,n,a){var i=r.interleaved;return i===null?(n.next=n,Wo(r)):(n.next=i.next,i.next=n),r.interleaved=n,ur(e,a)}function ur(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vr=!1;function Qo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vp(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function Mr(e,r,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,he&2){var i=a.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),a.pending=r,ur(e,n)}return i=a.interleaved,i===null?(r.next=r,Wo(a)):(r.next=i.next,i.next=r),a.interleaved=r,ur(e,n)}function Ai(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var a=r.lanes;a&=e.pendingLanes,n|=a,r.lanes=n,To(e,n)}}function Eu(e,r){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=r:s=s.next=r}else i=s=r;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function ts(e,r,n,a){var i=e.updateQueue;vr=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,u=c.next;c.next=null,l===null?s=u:l.next=u,l=c;var m=e.alternate;m!==null&&(m=m.updateQueue,o=m.lastBaseUpdate,o!==l&&(o===null?m.firstBaseUpdate=u:o.next=u,m.lastBaseUpdate=c))}if(s!==null){var d=i.baseState;l=0,m=u=c=null,o=s;do{var f=o.lane,j=o.eventTime;if((a&f)===f){m!==null&&(m=m.next={eventTime:j,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=e,v=o;switch(f=r,j=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(j,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(j,d,f):g,f==null)break e;d=Ne({},d,f);break e;case 2:vr=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[o]:f.push(o))}else j={eventTime:j,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},m===null?(u=m=j,c=d):m=m.next=j,l|=f;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;f=o,o=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(m===null&&(c=d),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=m,r=i.shared.interleaved,r!==null){i=r;do l|=i.lane,i=i.next;while(i!==r)}else s===null&&(i.shared.lanes=0);tn|=l,e.lanes=l,e.memoizedState=d}}function Cu(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var a=e[r],i=a.callback;if(i!==null){if(a.callback=null,a=n,typeof i!="function")throw Error(I(191,i));i.call(a)}}}var $a={},Wt=qr($a),Ma=qr($a),Na=qr($a);function Qr(e){if(e===$a)throw Error(I(174));return e}function Jo(e,r){switch(ye(Na,r),ye(Ma,e),ye(Wt,$a),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Tl(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Tl(r,e)}Ce(Wt),ye(Wt,r)}function qn(){Ce(Wt),Ce(Ma),Ce(Na)}function Gp(e){Qr(Na.current);var r=Qr(Wt.current),n=Tl(r,e.type);r!==n&&(ye(Ma,e),ye(Wt,n))}function Ko(e){Ma.current===e&&(Ce(Wt),Ce(Ma))}var ke=qr(0);function rs(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var nl=[];function Yo(){for(var e=0;e<nl.length;e++)nl[e]._workInProgressVersionPrimary=null;nl.length=0}var ki=pr.ReactCurrentDispatcher,al=pr.ReactCurrentBatchConfig,en=0,Me=null,Fe=null,Ue=null,ns=!1,ha=!1,Pa=0,Gg=0;function Ke(){throw Error(I(321))}function Xo(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!zt(e[n],r[n]))return!1;return!0}function Zo(e,r,n,a,i,s){if(en=s,Me=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ki.current=e===null||e.memoizedState===null?Kg:Yg,e=n(a,i),ha){s=0;do{if(ha=!1,Pa=0,25<=s)throw Error(I(301));s+=1,Ue=Fe=null,r.updateQueue=null,ki.current=Xg,e=n(a,i)}while(ha)}if(ki.current=as,r=Fe!==null&&Fe.next!==null,en=0,Ue=Fe=Me=null,ns=!1,r)throw Error(I(300));return e}function ec(){var e=Pa!==0;return Pa=0,e}function Ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Me.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function At(){if(Fe===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var r=Ue===null?Me.memoizedState:Ue.next;if(r!==null)Ue=r,Fe=e;else{if(e===null)throw Error(I(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Ue===null?Me.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Ta(e,r){return typeof r=="function"?r(e):r}function il(e){var r=At(),n=r.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var a=Fe,i=a.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}a.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,a=a.baseState;var o=l=null,c=null,u=s;do{var m=u.lane;if((en&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var d={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=d,l=a):c=c.next=d,Me.lanes|=m,tn|=m}u=u.next}while(u!==null&&u!==s);c===null?l=a:c.next=o,zt(a,r.memoizedState)||(ct=!0),r.memoizedState=a,r.baseState=l,r.baseQueue=c,n.lastRenderedState=a}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Me.lanes|=s,tn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function sl(e){var r=At(),n=r.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,s=r.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);zt(s,r.memoizedState)||(ct=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),n.lastRenderedState=s}return[s,a]}function Wp(){}function Qp(e,r){var n=Me,a=At(),i=r(),s=!zt(a.memoizedState,i);if(s&&(a.memoizedState=i,ct=!0),a=a.queue,tc(Yp.bind(null,n,a,e),[e]),a.getSnapshot!==r||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,_a(9,Kp.bind(null,n,a,i,r),void 0,null),$e===null)throw Error(I(349));en&30||Jp(n,r,i)}return i}function Jp(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=Me.updateQueue,r===null?(r={lastEffect:null,stores:null},Me.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function Kp(e,r,n,a){r.value=n,r.getSnapshot=a,Xp(r)&&Zp(e)}function Yp(e,r,n){return n(function(){Xp(r)&&Zp(e)})}function Xp(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!zt(e,n)}catch{return!0}}function Zp(e){var r=ur(e,1);r!==null&&It(r,e,1,-1)}function Ru(e){var r=Ht();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:e},r.queue=e,e=e.dispatch=Jg.bind(null,Me,e),[r.memoizedState,e]}function _a(e,r,n,a){return e={tag:e,create:r,destroy:n,deps:a,next:null},r=Me.updateQueue,r===null?(r={lastEffect:null,stores:null},Me.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,r.lastEffect=e)),e}function em(){return At().memoizedState}function Mi(e,r,n,a){var i=Ht();Me.flags|=e,i.memoizedState=_a(1|r,n,void 0,a===void 0?null:a)}function bs(e,r,n,a){var i=At();a=a===void 0?null:a;var s=void 0;if(Fe!==null){var l=Fe.memoizedState;if(s=l.destroy,a!==null&&Xo(a,l.deps)){i.memoizedState=_a(r,n,s,a);return}}Me.flags|=e,i.memoizedState=_a(1|r,n,s,a)}function Lu(e,r){return Mi(8390656,8,e,r)}function tc(e,r){return bs(2048,8,e,r)}function tm(e,r){return bs(4,2,e,r)}function rm(e,r){return bs(4,4,e,r)}function nm(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function am(e,r,n){return n=n!=null?n.concat([e]):null,bs(4,4,nm.bind(null,r,e),n)}function rc(){}function im(e,r){var n=At();r=r===void 0?null:r;var a=n.memoizedState;return a!==null&&r!==null&&Xo(r,a[1])?a[0]:(n.memoizedState=[e,r],e)}function sm(e,r){var n=At();r=r===void 0?null:r;var a=n.memoizedState;return a!==null&&r!==null&&Xo(r,a[1])?a[0]:(e=e(),n.memoizedState=[e,r],e)}function lm(e,r,n){return en&21?(zt(n,r)||(n=pp(),Me.lanes|=n,tn|=n,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,ct=!0),e.memoizedState=n)}function Wg(e,r){var n=ve;ve=n!==0&&4>n?n:4,e(!0);var a=al.transition;al.transition={};try{e(!1),r()}finally{ve=n,al.transition=a}}function om(){return At().memoizedState}function Qg(e,r,n){var a=Pr(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},cm(e))um(r,n);else if(n=Hp(e,r,n,a),n!==null){var i=it();It(n,e,a,i),dm(n,r,a)}}function Jg(e,r,n){var a=Pr(e),i={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(cm(e))um(r,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var l=r.lastRenderedState,o=s(l,n);if(i.hasEagerState=!0,i.eagerState=o,zt(o,l)){var c=r.interleaved;c===null?(i.next=i,Wo(r)):(i.next=c.next,c.next=i),r.interleaved=i;return}}catch{}finally{}n=Hp(e,r,i,a),n!==null&&(i=it(),It(n,e,a,i),dm(n,r,a))}}function cm(e){var r=e.alternate;return e===Me||r!==null&&r===Me}function um(e,r){ha=ns=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function dm(e,r,n){if(n&4194240){var a=r.lanes;a&=e.pendingLanes,n|=a,r.lanes=n,To(e,n)}}var as={readContext:Lt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},Kg={readContext:Lt,useCallback:function(e,r){return Ht().memoizedState=[e,r===void 0?null:r],e},useContext:Lt,useEffect:Lu,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,Mi(4194308,4,nm.bind(null,r,e),n)},useLayoutEffect:function(e,r){return Mi(4194308,4,e,r)},useInsertionEffect:function(e,r){return Mi(4,2,e,r)},useMemo:function(e,r){var n=Ht();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var a=Ht();return r=n!==void 0?n(r):r,a.memoizedState=a.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=Qg.bind(null,Me,e),[a.memoizedState,e]},useRef:function(e){var r=Ht();return e={current:e},r.memoizedState=e},useState:Ru,useDebugValue:rc,useDeferredValue:function(e){return Ht().memoizedState=e},useTransition:function(){var e=Ru(!1),r=e[0];return e=Wg.bind(null,e[1]),Ht().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var a=Me,i=Ht();if(Le){if(n===void 0)throw Error(I(407));n=n()}else{if(n=r(),$e===null)throw Error(I(349));en&30||Jp(a,r,n)}i.memoizedState=n;var s={value:n,getSnapshot:r};return i.queue=s,Lu(Yp.bind(null,a,s,e),[e]),a.flags|=2048,_a(9,Kp.bind(null,a,s,n,r),void 0,null),n},useId:function(){var e=Ht(),r=$e.identifierPrefix;if(Le){var n=sr,a=ir;n=(a&~(1<<32-qt(a)-1)).toString(32)+n,r=":"+r+"R"+n,n=Pa++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=Gg++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Yg={readContext:Lt,useCallback:im,useContext:Lt,useEffect:tc,useImperativeHandle:am,useInsertionEffect:tm,useLayoutEffect:rm,useMemo:sm,useReducer:il,useRef:em,useState:function(){return il(Ta)},useDebugValue:rc,useDeferredValue:function(e){var r=At();return lm(r,Fe.memoizedState,e)},useTransition:function(){var e=il(Ta)[0],r=At().memoizedState;return[e,r]},useMutableSource:Wp,useSyncExternalStore:Qp,useId:om,unstable_isNewReconciler:!1},Xg={readContext:Lt,useCallback:im,useContext:Lt,useEffect:tc,useImperativeHandle:am,useInsertionEffect:tm,useLayoutEffect:rm,useMemo:sm,useReducer:sl,useRef:em,useState:function(){return sl(Ta)},useDebugValue:rc,useDeferredValue:function(e){var r=At();return Fe===null?r.memoizedState=e:lm(r,Fe.memoizedState,e)},useTransition:function(){var e=sl(Ta)[0],r=At().memoizedState;return[e,r]},useMutableSource:Wp,useSyncExternalStore:Qp,useId:om,unstable_isNewReconciler:!1};function _t(e,r){if(e&&e.defaultProps){r=Ne({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function eo(e,r,n,a){r=e.memoizedState,n=n(a,r),n=n==null?r:Ne({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ys={isMounted:function(e){return(e=e._reactInternals)?an(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var a=it(),i=Pr(e),s=lr(a,i);s.payload=r,n!=null&&(s.callback=n),r=Mr(e,s,i),r!==null&&(It(r,e,i,a),Ai(r,e,i))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var a=it(),i=Pr(e),s=lr(a,i);s.tag=1,s.payload=r,n!=null&&(s.callback=n),r=Mr(e,s,i),r!==null&&(It(r,e,i,a),Ai(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=it(),a=Pr(e),i=lr(n,a);i.tag=2,r!=null&&(i.callback=r),r=Mr(e,i,a),r!==null&&(It(r,e,a,n),Ai(r,e,a))}};function Au(e,r,n,a,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,l):r.prototype&&r.prototype.isPureReactComponent?!Ra(n,a)||!Ra(i,s):!0}function pm(e,r,n){var a=!1,i=Or,s=r.contextType;return typeof s=="object"&&s!==null?s=Lt(s):(i=dt(r)?Xr:et.current,a=r.contextTypes,s=(a=a!=null)?_n(e,i):Or),r=new r(n,s),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ys,e.stateNode=r,r._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),r}function ku(e,r,n,a){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,a),r.state!==e&&ys.enqueueReplaceState(r,r.state,null)}function to(e,r,n,a){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Qo(e);var s=r.contextType;typeof s=="object"&&s!==null?i.context=Lt(s):(s=dt(r)?Xr:et.current,i.context=_n(e,s)),i.state=e.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(eo(e,r,s,n),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&ys.enqueueReplaceState(i,i.state,null),ts(e,n,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function In(e,r){try{var n="",a=r;do n+=Rf(a),a=a.return;while(a);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:r,stack:i,digest:null}}function ll(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function ro(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Zg=typeof WeakMap=="function"?WeakMap:Map;function mm(e,r,n){n=lr(-1,n),n.tag=3,n.payload={element:null};var a=r.value;return n.callback=function(){ss||(ss=!0,mo=a),ro(e,r)},n}function hm(e,r,n){n=lr(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=r.value;n.payload=function(){return a(i)},n.callback=function(){ro(e,r)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ro(e,r),typeof a!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var l=r.stack;this.componentDidCatch(r.value,{componentStack:l!==null?l:""})}),n}function Mu(e,r,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Zg;var i=new Set;a.set(r,i)}else i=a.get(r),i===void 0&&(i=new Set,a.set(r,i));i.has(n)||(i.add(n),e=mx.bind(null,e,r,n),r.then(e,e))}function Nu(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Pu(e,r,n,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=lr(-1,1),r.tag=2,Mr(n,r,1))),n.lanes|=1),e)}var ex=pr.ReactCurrentOwner,ct=!1;function nt(e,r,n,a){r.child=e===null?$p(r,null,n,a):Dn(r,e.child,n,a)}function Tu(e,r,n,a,i){n=n.render;var s=r.ref;return Mn(r,i),a=Zo(e,r,n,a,s,i),n=ec(),e!==null&&!ct?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,dr(e,r,i)):(Le&&n&&Bo(r),r.flags|=1,nt(e,r,a,i),r.child)}function _u(e,r,n,a,i){if(e===null){var s=n.type;return typeof s=="function"&&!uc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=s,fm(e,r,s,a,i)):(e=_i(n.type,null,a,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ra,n(l,a)&&e.ref===r.ref)return dr(e,r,i)}return r.flags|=1,e=Tr(s,a),e.ref=r.ref,e.return=r,r.child=e}function fm(e,r,n,a,i){if(e!==null){var s=e.memoizedProps;if(Ra(s,a)&&e.ref===r.ref)if(ct=!1,r.pendingProps=a=s,(e.lanes&i)!==0)e.flags&131072&&(ct=!0);else return r.lanes=e.lanes,dr(e,r,i)}return no(e,r,n,a,i)}function gm(e,r,n){var a=r.pendingProps,i=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(En,ht),ht|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,ye(En,ht),ht|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=s!==null?s.baseLanes:n,ye(En,ht),ht|=a}else s!==null?(a=s.baseLanes|n,r.memoizedState=null):a=n,ye(En,ht),ht|=a;return nt(e,r,i,n),r.child}function xm(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function no(e,r,n,a,i){var s=dt(n)?Xr:et.current;return s=_n(r,s),Mn(r,i),n=Zo(e,r,n,a,s,i),a=ec(),e!==null&&!ct?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,dr(e,r,i)):(Le&&a&&Bo(r),r.flags|=1,nt(e,r,n,i),r.child)}function Ou(e,r,n,a,i){if(dt(n)){var s=!0;Ki(r)}else s=!1;if(Mn(r,i),r.stateNode===null)Ni(e,r),pm(r,n,a),to(r,n,a,i),a=!0;else if(e===null){var l=r.stateNode,o=r.memoizedProps;l.props=o;var c=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Lt(u):(u=dt(n)?Xr:et.current,u=_n(r,u));var m=n.getDerivedStateFromProps,d=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==a||c!==u)&&ku(r,l,a,u),vr=!1;var f=r.memoizedState;l.state=f,ts(r,a,l,i),c=r.memoizedState,o!==a||f!==c||ut.current||vr?(typeof m=="function"&&(eo(r,n,m,a),c=r.memoizedState),(o=vr||Au(r,n,o,a,f,c,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=c),l.props=a,l.state=c,l.context=u,a=o):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{l=r.stateNode,Vp(e,r),o=r.memoizedProps,u=r.type===r.elementType?o:_t(r.type,o),l.props=u,d=r.pendingProps,f=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Lt(c):(c=dt(n)?Xr:et.current,c=_n(r,c));var j=n.getDerivedStateFromProps;(m=typeof j=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==d||f!==c)&&ku(r,l,a,c),vr=!1,f=r.memoizedState,l.state=f,ts(r,a,l,i);var g=r.memoizedState;o!==d||f!==g||ut.current||vr?(typeof j=="function"&&(eo(r,n,j,a),g=r.memoizedState),(u=vr||Au(r,n,u,a,f,g,c)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,g,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,g,c)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=g),l.props=a,l.state=g,l.context=c,a=u):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(r.flags|=1024),a=!1)}return ao(e,r,n,a,s,i)}function ao(e,r,n,a,i,s){xm(e,r);var l=(r.flags&128)!==0;if(!a&&!l)return i&&bu(r,n,!1),dr(e,r,s);a=r.stateNode,ex.current=r;var o=l&&typeof n.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,e!==null&&l?(r.child=Dn(r,e.child,null,s),r.child=Dn(r,null,o,s)):nt(e,r,o,s),r.memoizedState=a.state,i&&bu(r,n,!0),r.child}function vm(e){var r=e.stateNode;r.pendingContext?ju(e,r.pendingContext,r.pendingContext!==r.context):r.context&&ju(e,r.context,!1),Jo(e,r.containerInfo)}function Du(e,r,n,a,i){return On(),$o(i),r.flags|=256,nt(e,r,n,a),r.child}var io={dehydrated:null,treeContext:null,retryLane:0};function so(e){return{baseLanes:e,cachePool:null,transitions:null}}function jm(e,r,n){var a=r.pendingProps,i=ke.current,s=!1,l=(r.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(s=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ye(ke,i&1),e===null)return Xl(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(l=a.children,e=a.fallback,s?(a=r.mode,s=r.child,l={mode:"hidden",children:l},!(a&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Es(l,a,0,null),e=Yr(e,a,n,null),s.return=r,e.return=r,s.sibling=e,r.child=s,r.child.memoizedState=so(n),r.memoizedState=io,e):nc(r,l));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return tx(e,r,l,a,o,i,n);if(s){s=a.fallback,l=r.mode,i=e.child,o=i.sibling;var c={mode:"hidden",children:a.children};return!(l&1)&&r.child!==i?(a=r.child,a.childLanes=0,a.pendingProps=c,r.deletions=null):(a=Tr(i,c),a.subtreeFlags=i.subtreeFlags&14680064),o!==null?s=Tr(o,s):(s=Yr(s,l,n,null),s.flags|=2),s.return=r,a.return=r,a.sibling=s,r.child=a,a=s,s=r.child,l=e.child.memoizedState,l=l===null?so(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,r.memoizedState=io,a}return s=e.child,e=s.sibling,a=Tr(s,{mode:"visible",children:a.children}),!(r.mode&1)&&(a.lanes=n),a.return=r,a.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=a,r.memoizedState=null,a}function nc(e,r){return r=Es({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function hi(e,r,n,a){return a!==null&&$o(a),Dn(r,e.child,null,n),e=nc(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function tx(e,r,n,a,i,s,l){if(n)return r.flags&256?(r.flags&=-257,a=ll(Error(I(422))),hi(e,r,l,a)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(s=a.fallback,i=r.mode,a=Es({mode:"visible",children:a.children},i,0,null),s=Yr(s,i,l,null),s.flags|=2,a.return=r,s.return=r,a.sibling=s,r.child=a,r.mode&1&&Dn(r,e.child,null,l),r.child.memoizedState=so(l),r.memoizedState=io,s);if(!(r.mode&1))return hi(e,r,l,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var o=a.dgst;return a=o,s=Error(I(419)),a=ll(s,a,void 0),hi(e,r,l,a)}if(o=(l&e.childLanes)!==0,ct||o){if(a=$e,a!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ur(e,i),It(a,e,i,-1))}return cc(),a=ll(Error(I(421))),hi(e,r,l,a)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=hx.bind(null,e),i._reactRetry=r,null):(e=s.treeContext,gt=kr(i.nextSibling),xt=r,Le=!0,Dt=null,e!==null&&(wt[Et++]=ir,wt[Et++]=sr,wt[Et++]=Zr,ir=e.id,sr=e.overflow,Zr=r),r=nc(r,a.children),r.flags|=4096,r)}function qu(e,r,n){e.lanes|=r;var a=e.alternate;a!==null&&(a.lanes|=r),Zl(e.return,r,n)}function ol(e,r,n,a,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=i)}function bm(e,r,n){var a=r.pendingProps,i=a.revealOrder,s=a.tail;if(nt(e,r,a.children,n),a=ke.current,a&2)a=a&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qu(e,n,r);else if(e.tag===19)qu(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ye(ke,a),!(r.mode&1))r.memoizedState=null;else switch(i){case"forwards":for(n=r.child,i=null;n!==null;)e=n.alternate,e!==null&&rs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=r.child,r.child=null):(i=n.sibling,n.sibling=null),ol(r,!1,i,n,s);break;case"backwards":for(n=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&rs(e)===null){r.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ol(r,!0,n,null,s);break;case"together":ol(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ni(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function dr(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),tn|=r.lanes,!(n&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(I(153));if(r.child!==null){for(e=r.child,n=Tr(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=Tr(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function rx(e,r,n){switch(r.tag){case 3:vm(r),On();break;case 5:Gp(r);break;case 1:dt(r.type)&&Ki(r);break;case 4:Jo(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,i=r.memoizedProps.value;ye(Zi,a._currentValue),a._currentValue=i;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(ye(ke,ke.current&1),r.flags|=128,null):n&r.child.childLanes?jm(e,r,n):(ye(ke,ke.current&1),e=dr(e,r,n),e!==null?e.sibling:null);ye(ke,ke.current&1);break;case 19:if(a=(n&r.childLanes)!==0,e.flags&128){if(a)return bm(e,r,n);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(ke,ke.current),a)break;return null;case 22:case 23:return r.lanes=0,gm(e,r,n)}return dr(e,r,n)}var ym,lo,Sm,wm;ym=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lo=function(){};Sm=function(e,r,n,a){var i=e.memoizedProps;if(i!==a){e=r.stateNode,Qr(Wt.current);var s=null;switch(n){case"input":i=kl(e,i),a=kl(e,a),s=[];break;case"select":i=Ne({},i,{value:void 0}),a=Ne({},a,{value:void 0}),s=[];break;case"textarea":i=Pl(e,i),a=Pl(e,a),s=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Qi)}_l(n,a);var l;n=null;for(u in i)if(!a.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(l in o)o.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ja.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in a){var c=a[u];if(o=i!=null?i[u]:void 0,a.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ja.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&we("scroll",e),s||o===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(r.updateQueue=u)&&(r.flags|=4)}};wm=function(e,r,n,a){n!==a&&(r.flags|=4)};function Xn(e,r){if(!Le)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ye(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(r)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,r}function nx(e,r,n){var a=r.pendingProps;switch(Uo(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(r),null;case 1:return dt(r.type)&&Ji(),Ye(r),null;case 3:return a=r.stateNode,qn(),Ce(ut),Ce(et),Yo(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(pi(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Dt!==null&&(go(Dt),Dt=null))),lo(e,r),Ye(r),null;case 5:Ko(r);var i=Qr(Na.current);if(n=r.type,e!==null&&r.stateNode!=null)Sm(e,r,n,a,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(I(166));return Ye(r),null}if(e=Qr(Wt.current),pi(r)){a=r.stateNode,n=r.type;var s=r.memoizedProps;switch(a[Vt]=r,a[ka]=s,e=(r.mode&1)!==0,n){case"dialog":we("cancel",a),we("close",a);break;case"iframe":case"object":case"embed":we("load",a);break;case"video":case"audio":for(i=0;i<sa.length;i++)we(sa[i],a);break;case"source":we("error",a);break;case"img":case"image":case"link":we("error",a),we("load",a);break;case"details":we("toggle",a);break;case"input":Gc(a,s),we("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},we("invalid",a);break;case"textarea":Qc(a,s),we("invalid",a)}_l(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var o=s[l];l==="children"?typeof o=="string"?a.textContent!==o&&(s.suppressHydrationWarning!==!0&&di(a.textContent,o,e),i=["children",o]):typeof o=="number"&&a.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&di(a.textContent,o,e),i=["children",""+o]):ja.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&we("scroll",a)}switch(n){case"input":ni(a),Wc(a,s,!0);break;case"textarea":ni(a),Jc(a);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(a.onclick=Qi)}a=i,r.updateQueue=a,a!==null&&(r.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=l.createElement(n,{is:a.is}):(e=l.createElement(n),n==="select"&&(l=e,a.multiple?l.multiple=!0:a.size&&(l.size=a.size))):e=l.createElementNS(e,n),e[Vt]=r,e[ka]=a,ym(e,r,!1,!1),r.stateNode=e;e:{switch(l=Ol(n,a),n){case"dialog":we("cancel",e),we("close",e),i=a;break;case"iframe":case"object":case"embed":we("load",e),i=a;break;case"video":case"audio":for(i=0;i<sa.length;i++)we(sa[i],e);i=a;break;case"source":we("error",e),i=a;break;case"img":case"image":case"link":we("error",e),we("load",e),i=a;break;case"details":we("toggle",e),i=a;break;case"input":Gc(e,a),i=kl(e,a),we("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=Ne({},a,{value:void 0}),we("invalid",e);break;case"textarea":Qc(e,a),i=Pl(e,a),we("invalid",e);break;default:i=a}_l(n,i),o=i;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?ep(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Xd(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ba(e,c):typeof c=="number"&&ba(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ja.hasOwnProperty(s)?c!=null&&s==="onScroll"&&we("scroll",e):c!=null&&Lo(e,s,c,l))}switch(n){case"input":ni(e),Wc(e,a,!1);break;case"textarea":ni(e),Jc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+_r(a.value));break;case"select":e.multiple=!!a.multiple,s=a.value,s!=null?Rn(e,!!a.multiple,s,!1):a.defaultValue!=null&&Rn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qi)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ye(r),null;case 6:if(e&&r.stateNode!=null)wm(e,r,e.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(I(166));if(n=Qr(Na.current),Qr(Wt.current),pi(r)){if(a=r.stateNode,n=r.memoizedProps,a[Vt]=r,(s=a.nodeValue!==n)&&(e=xt,e!==null))switch(e.tag){case 3:di(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&di(a.nodeValue,n,(e.mode&1)!==0)}s&&(r.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Vt]=r,r.stateNode=a}return Ye(r),null;case 13:if(Ce(ke),a=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&gt!==null&&r.mode&1&&!(r.flags&128))Bp(),On(),r.flags|=98560,s=!1;else if(s=pi(r),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(I(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[Vt]=r}else On(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Ye(r),s=!1}else Dt!==null&&(go(Dt),Dt=null),s=!0;if(!s)return r.flags&65536?r:null}return r.flags&128?(r.lanes=n,r):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(r.child.flags|=8192,r.mode&1&&(e===null||ke.current&1?ze===0&&(ze=3):cc())),r.updateQueue!==null&&(r.flags|=4),Ye(r),null);case 4:return qn(),lo(e,r),e===null&&La(r.stateNode.containerInfo),Ye(r),null;case 10:return Go(r.type._context),Ye(r),null;case 17:return dt(r.type)&&Ji(),Ye(r),null;case 19:if(Ce(ke),s=r.memoizedState,s===null)return Ye(r),null;if(a=(r.flags&128)!==0,l=s.rendering,l===null)if(a)Xn(s,!1);else{if(ze!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(l=rs(e),l!==null){for(r.flags|=128,Xn(s,!1),a=l.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=n,n=r.child;n!==null;)s=n,e=a,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ye(ke,ke.current&1|2),r.child}e=e.sibling}s.tail!==null&&Oe()>Fn&&(r.flags|=128,a=!0,Xn(s,!1),r.lanes=4194304)}else{if(!a)if(e=rs(l),e!==null){if(r.flags|=128,a=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),Xn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Le)return Ye(r),null}else 2*Oe()-s.renderingStartTime>Fn&&n!==1073741824&&(r.flags|=128,a=!0,Xn(s,!1),r.lanes=4194304);s.isBackwards?(l.sibling=r.child,r.child=l):(n=s.last,n!==null?n.sibling=l:r.child=l,s.last=l)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=Oe(),r.sibling=null,n=ke.current,ye(ke,a?n&1|2:n&1),r):(Ye(r),null);case 22:case 23:return oc(),a=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(r.flags|=8192),a&&r.mode&1?ht&1073741824&&(Ye(r),r.subtreeFlags&6&&(r.flags|=8192)):Ye(r),null;case 24:return null;case 25:return null}throw Error(I(156,r.tag))}function ax(e,r){switch(Uo(r),r.tag){case 1:return dt(r.type)&&Ji(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return qn(),Ce(ut),Ce(et),Yo(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return Ko(r),null;case 13:if(Ce(ke),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(I(340));On()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Ce(ke),null;case 4:return qn(),null;case 10:return Go(r.type._context),null;case 22:case 23:return oc(),null;case 24:return null;default:return null}}var fi=!1,Ze=!1,ix=typeof WeakSet=="function"?WeakSet:Set,G=null;function wn(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){Te(e,r,a)}else n.current=null}function oo(e,r,n){try{n()}catch(a){Te(e,r,a)}}var Iu=!1;function sx(e,r){if(Vl=Vi,e=Ap(),zo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,o=-1,c=-1,u=0,m=0,d=e,f=null;t:for(;;){for(var j;d!==n||i!==0&&d.nodeType!==3||(o=l+i),d!==s||a!==0&&d.nodeType!==3||(c=l+a),d.nodeType===3&&(l+=d.nodeValue.length),(j=d.firstChild)!==null;)f=d,d=j;for(;;){if(d===e)break t;if(f===n&&++u===i&&(o=l),f===s&&++m===a&&(c=l),(j=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=j}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gl={focusedElem:e,selectionRange:n},Vi=!1,G=r;G!==null;)if(r=G,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,G=e;else for(;G!==null;){r=G;try{var g=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,S=g.memoizedState,h=r.stateNode,p=h.getSnapshotBeforeUpdate(r.elementType===r.type?v:_t(r.type,v),S);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var x=r.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(A){Te(r,r.return,A)}if(e=r.sibling,e!==null){e.return=r.return,G=e;break}G=r.return}return g=Iu,Iu=!1,g}function fa(e,r,n){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&oo(r,n,s)}i=i.next}while(i!==a)}}function Ss(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==r)}}function co(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Em(e){var r=e.alternate;r!==null&&(e.alternate=null,Em(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Vt],delete r[ka],delete r[Jl],delete r[Ug],delete r[$g])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cm(e){return e.tag===5||e.tag===3||e.tag===4}function Fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uo(e,r,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Qi));else if(a!==4&&(e=e.child,e!==null))for(uo(e,r,n),e=e.sibling;e!==null;)uo(e,r,n),e=e.sibling}function po(e,r,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(po(e,r,n),e=e.sibling;e!==null;)po(e,r,n),e=e.sibling}var Ve=null,Ot=!1;function hr(e,r,n){for(n=n.child;n!==null;)Rm(e,r,n),n=n.sibling}function Rm(e,r,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(hs,n)}catch{}switch(n.tag){case 5:Ze||wn(n,r);case 6:var a=Ve,i=Ot;Ve=null,hr(e,r,n),Ve=a,Ot=i,Ve!==null&&(Ot?(e=Ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Ot?(e=Ve,n=n.stateNode,e.nodeType===8?tl(e.parentNode,n):e.nodeType===1&&tl(e,n),Ea(e)):tl(Ve,n.stateNode));break;case 4:a=Ve,i=Ot,Ve=n.stateNode.containerInfo,Ot=!0,hr(e,r,n),Ve=a,Ot=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&oo(n,r,l),i=i.next}while(i!==a)}hr(e,r,n);break;case 1:if(!Ze&&(wn(n,r),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(o){Te(n,r,o)}hr(e,r,n);break;case 21:hr(e,r,n);break;case 22:n.mode&1?(Ze=(a=Ze)||n.memoizedState!==null,hr(e,r,n),Ze=a):hr(e,r,n);break;default:hr(e,r,n)}}function zu(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ix),r.forEach(function(a){var i=fx.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}}function Pt(e,r){var n=r.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];try{var s=e,l=r,o=l;e:for(;o!==null;){switch(o.tag){case 5:Ve=o.stateNode,Ot=!1;break e;case 3:Ve=o.stateNode.containerInfo,Ot=!0;break e;case 4:Ve=o.stateNode.containerInfo,Ot=!0;break e}o=o.return}if(Ve===null)throw Error(I(160));Rm(s,l,i),Ve=null,Ot=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Te(i,r,u)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Lm(r,e),r=r.sibling}function Lm(e,r){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pt(r,e),Ut(e),a&4){try{fa(3,e,e.return),Ss(3,e)}catch(v){Te(e,e.return,v)}try{fa(5,e,e.return)}catch(v){Te(e,e.return,v)}}break;case 1:Pt(r,e),Ut(e),a&512&&n!==null&&wn(n,n.return);break;case 5:if(Pt(r,e),Ut(e),a&512&&n!==null&&wn(n,n.return),e.flags&32){var i=e.stateNode;try{ba(i,"")}catch(v){Te(e,e.return,v)}}if(a&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Jd(i,s),Ol(o,l);var u=Ol(o,s);for(l=0;l<c.length;l+=2){var m=c[l],d=c[l+1];m==="style"?ep(i,d):m==="dangerouslySetInnerHTML"?Xd(i,d):m==="children"?ba(i,d):Lo(i,m,d,u)}switch(o){case"input":Ml(i,s);break;case"textarea":Kd(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var j=s.value;j!=null?Rn(i,!!s.multiple,j,!1):f!==!!s.multiple&&(s.defaultValue!=null?Rn(i,!!s.multiple,s.defaultValue,!0):Rn(i,!!s.multiple,s.multiple?[]:"",!1))}i[ka]=s}catch(v){Te(e,e.return,v)}}break;case 6:if(Pt(r,e),Ut(e),a&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Te(e,e.return,v)}}break;case 3:if(Pt(r,e),Ut(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Ea(r.containerInfo)}catch(v){Te(e,e.return,v)}break;case 4:Pt(r,e),Ut(e);break;case 13:Pt(r,e),Ut(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(sc=Oe())),a&4&&zu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Ze=(u=Ze)||m,Pt(r,e),Ze=u):Pt(r,e),Ut(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(G=e,m=e.child;m!==null;){for(d=G=m;G!==null;){switch(f=G,j=f.child,f.tag){case 0:case 11:case 14:case 15:fa(4,f,f.return);break;case 1:wn(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){a=f,n=f.return;try{r=a,g.props=r.memoizedProps,g.state=r.memoizedState,g.componentWillUnmount()}catch(v){Te(a,n,v)}}break;case 5:wn(f,f.return);break;case 22:if(f.memoizedState!==null){Uu(d);continue}}j!==null?(j.return=f,G=j):Uu(d)}m=m.sibling}e:for(m=null,d=e;;){if(d.tag===5){if(m===null){m=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,c=d.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Zd("display",l))}catch(v){Te(e,e.return,v)}}}else if(d.tag===6){if(m===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Te(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;m===d&&(m=null),d=d.return}m===d&&(m=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Pt(r,e),Ut(e),a&4&&zu(e);break;case 21:break;default:Pt(r,e),Ut(e)}}function Ut(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(Cm(n)){var a=n;break e}n=n.return}throw Error(I(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(ba(i,""),a.flags&=-33);var s=Fu(e);po(e,s,i);break;case 3:case 4:var l=a.stateNode.containerInfo,o=Fu(e);uo(e,o,l);break;default:throw Error(I(161))}}catch(c){Te(e,e.return,c)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function lx(e,r,n){G=e,Am(e)}function Am(e,r,n){for(var a=(e.mode&1)!==0;G!==null;){var i=G,s=i.child;if(i.tag===22&&a){var l=i.memoizedState!==null||fi;if(!l){var o=i.alternate,c=o!==null&&o.memoizedState!==null||Ze;o=fi;var u=Ze;if(fi=l,(Ze=c)&&!u)for(G=i;G!==null;)l=G,c=l.child,l.tag===22&&l.memoizedState!==null?$u(i):c!==null?(c.return=l,G=c):$u(i);for(;s!==null;)G=s,Am(s),s=s.sibling;G=i,fi=o,Ze=u}Bu(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,G=s):Bu(e)}}function Bu(e){for(;G!==null;){var r=G;if(r.flags&8772){var n=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Ze||Ss(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!Ze)if(n===null)a.componentDidMount();else{var i=r.elementType===r.type?n.memoizedProps:_t(r.type,n.memoizedProps);a.componentDidUpdate(i,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&Cu(r,s,a);break;case 3:var l=r.updateQueue;if(l!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}Cu(r,l,n)}break;case 5:var o=r.stateNode;if(n===null&&r.flags&4){n=o;var c=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var u=r.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var d=m.dehydrated;d!==null&&Ea(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Ze||r.flags&512&&co(r)}catch(f){Te(r,r.return,f)}}if(r===e){G=null;break}if(n=r.sibling,n!==null){n.return=r.return,G=n;break}G=r.return}}function Uu(e){for(;G!==null;){var r=G;if(r===e){G=null;break}var n=r.sibling;if(n!==null){n.return=r.return,G=n;break}G=r.return}}function $u(e){for(;G!==null;){var r=G;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{Ss(4,r)}catch(c){Te(r,n,c)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var i=r.return;try{a.componentDidMount()}catch(c){Te(r,i,c)}}var s=r.return;try{co(r)}catch(c){Te(r,s,c)}break;case 5:var l=r.return;try{co(r)}catch(c){Te(r,l,c)}}}catch(c){Te(r,r.return,c)}if(r===e){G=null;break}var o=r.sibling;if(o!==null){o.return=r.return,G=o;break}G=r.return}}var ox=Math.ceil,is=pr.ReactCurrentDispatcher,ac=pr.ReactCurrentOwner,Rt=pr.ReactCurrentBatchConfig,he=0,$e=null,qe=null,Ge=0,ht=0,En=qr(0),ze=0,Oa=null,tn=0,ws=0,ic=0,ga=null,ot=null,sc=0,Fn=1/0,nr=null,ss=!1,mo=null,Nr=null,gi=!1,Er=null,ls=0,xa=0,ho=null,Pi=-1,Ti=0;function it(){return he&6?Oe():Pi!==-1?Pi:Pi=Oe()}function Pr(e){return e.mode&1?he&2&&Ge!==0?Ge&-Ge:Vg.transition!==null?(Ti===0&&(Ti=pp()),Ti):(e=ve,e!==0||(e=window.event,e=e===void 0?16:jp(e.type)),e):1}function It(e,r,n,a){if(50<xa)throw xa=0,ho=null,Error(I(185));za(e,n,a),(!(he&2)||e!==$e)&&(e===$e&&(!(he&2)&&(ws|=n),ze===4&&br(e,Ge)),pt(e,a),n===1&&he===0&&!(r.mode&1)&&(Fn=Oe()+500,js&&Ir()))}function pt(e,r){var n=e.callbackNode;Vf(e,r);var a=Hi(e,e===$e?Ge:0);if(a===0)n!==null&&Xc(n),e.callbackNode=null,e.callbackPriority=0;else if(r=a&-a,e.callbackPriority!==r){if(n!=null&&Xc(n),r===1)e.tag===0?Hg(Hu.bind(null,e)):Ip(Hu.bind(null,e)),zg(function(){!(he&6)&&Ir()}),n=null;else{switch(mp(a)){case 1:n=Po;break;case 4:n=up;break;case 16:n=$i;break;case 536870912:n=dp;break;default:n=$i}n=Dm(n,km.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function km(e,r){if(Pi=-1,Ti=0,he&6)throw Error(I(327));var n=e.callbackNode;if(Nn()&&e.callbackNode!==n)return null;var a=Hi(e,e===$e?Ge:0);if(a===0)return null;if(a&30||a&e.expiredLanes||r)r=os(e,a);else{r=a;var i=he;he|=2;var s=Nm();($e!==e||Ge!==r)&&(nr=null,Fn=Oe()+500,Kr(e,r));do try{dx();break}catch(o){Mm(e,o)}while(!0);Vo(),is.current=s,he=i,qe!==null?r=0:($e=null,Ge=0,r=ze)}if(r!==0){if(r===2&&(i=zl(e),i!==0&&(a=i,r=fo(e,i))),r===1)throw n=Oa,Kr(e,0),br(e,a),pt(e,Oe()),n;if(r===6)br(e,a);else{if(i=e.current.alternate,!(a&30)&&!cx(i)&&(r=os(e,a),r===2&&(s=zl(e),s!==0&&(a=s,r=fo(e,s))),r===1))throw n=Oa,Kr(e,0),br(e,a),pt(e,Oe()),n;switch(e.finishedWork=i,e.finishedLanes=a,r){case 0:case 1:throw Error(I(345));case 2:Vr(e,ot,nr);break;case 3:if(br(e,a),(a&130023424)===a&&(r=sc+500-Oe(),10<r)){if(Hi(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){it(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ql(Vr.bind(null,e,ot,nr),r);break}Vr(e,ot,nr);break;case 4:if(br(e,a),(a&4194240)===a)break;for(r=e.eventTimes,i=-1;0<a;){var l=31-qt(a);s=1<<l,l=r[l],l>i&&(i=l),a&=~s}if(a=i,a=Oe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*ox(a/1960))-a,10<a){e.timeoutHandle=Ql(Vr.bind(null,e,ot,nr),a);break}Vr(e,ot,nr);break;case 5:Vr(e,ot,nr);break;default:throw Error(I(329))}}}return pt(e,Oe()),e.callbackNode===n?km.bind(null,e):null}function fo(e,r){var n=ga;return e.current.memoizedState.isDehydrated&&(Kr(e,r).flags|=256),e=os(e,r),e!==2&&(r=ot,ot=n,r!==null&&go(r)),e}function go(e){ot===null?ot=e:ot.push.apply(ot,e)}function cx(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var i=n[a],s=i.getSnapshot;i=i.value;try{if(!zt(s(),i))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function br(e,r){for(r&=~ic,r&=~ws,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-qt(r),a=1<<n;e[n]=-1,r&=~a}}function Hu(e){if(he&6)throw Error(I(327));Nn();var r=Hi(e,0);if(!(r&1))return pt(e,Oe()),null;var n=os(e,r);if(e.tag!==0&&n===2){var a=zl(e);a!==0&&(r=a,n=fo(e,a))}if(n===1)throw n=Oa,Kr(e,0),br(e,r),pt(e,Oe()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Vr(e,ot,nr),pt(e,Oe()),null}function lc(e,r){var n=he;he|=1;try{return e(r)}finally{he=n,he===0&&(Fn=Oe()+500,js&&Ir())}}function rn(e){Er!==null&&Er.tag===0&&!(he&6)&&Nn();var r=he;he|=1;var n=Rt.transition,a=ve;try{if(Rt.transition=null,ve=1,e)return e()}finally{ve=a,Rt.transition=n,he=r,!(he&6)&&Ir()}}function oc(){ht=En.current,Ce(En)}function Kr(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Fg(n)),qe!==null)for(n=qe.return;n!==null;){var a=n;switch(Uo(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ji();break;case 3:qn(),Ce(ut),Ce(et),Yo();break;case 5:Ko(a);break;case 4:qn();break;case 13:Ce(ke);break;case 19:Ce(ke);break;case 10:Go(a.type._context);break;case 22:case 23:oc()}n=n.return}if($e=e,qe=e=Tr(e.current,null),Ge=ht=r,ze=0,Oa=null,ic=ws=tn=0,ot=ga=null,Wr!==null){for(r=0;r<Wr.length;r++)if(n=Wr[r],a=n.interleaved,a!==null){n.interleaved=null;var i=a.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,a.next=l}n.pending=a}Wr=null}return e}function Mm(e,r){do{var n=qe;try{if(Vo(),ki.current=as,ns){for(var a=Me.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}ns=!1}if(en=0,Ue=Fe=Me=null,ha=!1,Pa=0,ac.current=null,n===null||n.return===null){ze=1,Oa=r,qe=null;break}e:{var s=e,l=n.return,o=n,c=r;if(r=Ge,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=o,d=m.tag;if(!(m.mode&1)&&(d===0||d===11||d===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var j=Nu(l);if(j!==null){j.flags&=-257,Pu(j,l,o,s,r),j.mode&1&&Mu(s,u,r),r=j,c=u;var g=r.updateQueue;if(g===null){var v=new Set;v.add(c),r.updateQueue=v}else g.add(c);break e}else{if(!(r&1)){Mu(s,u,r),cc();break e}c=Error(I(426))}}else if(Le&&o.mode&1){var S=Nu(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Pu(S,l,o,s,r),$o(In(c,o));break e}}s=c=In(c,o),ze!==4&&(ze=2),ga===null?ga=[s]:ga.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var h=mm(s,c,r);Eu(s,h);break e;case 1:o=c;var p=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Nr===null||!Nr.has(x)))){s.flags|=65536,r&=-r,s.lanes|=r;var A=hm(s,o,r);Eu(s,A);break e}}s=s.return}while(s!==null)}Tm(n)}catch(M){r=M,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(!0)}function Nm(){var e=is.current;return is.current=as,e===null?as:e}function cc(){(ze===0||ze===3||ze===2)&&(ze=4),$e===null||!(tn&268435455)&&!(ws&268435455)||br($e,Ge)}function os(e,r){var n=he;he|=2;var a=Nm();($e!==e||Ge!==r)&&(nr=null,Kr(e,r));do try{ux();break}catch(i){Mm(e,i)}while(!0);if(Vo(),he=n,is.current=a,qe!==null)throw Error(I(261));return $e=null,Ge=0,ze}function ux(){for(;qe!==null;)Pm(qe)}function dx(){for(;qe!==null&&!Df();)Pm(qe)}function Pm(e){var r=Om(e.alternate,e,ht);e.memoizedProps=e.pendingProps,r===null?Tm(e):qe=r,ac.current=null}function Tm(e){var r=e;do{var n=r.alternate;if(e=r.return,r.flags&32768){if(n=ax(n,r),n!==null){n.flags&=32767,qe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,qe=null;return}}else if(n=nx(n,r,ht),n!==null){qe=n;return}if(r=r.sibling,r!==null){qe=r;return}qe=r=e}while(r!==null);ze===0&&(ze=5)}function Vr(e,r,n){var a=ve,i=Rt.transition;try{Rt.transition=null,ve=1,px(e,r,n,a)}finally{Rt.transition=i,ve=a}return null}function px(e,r,n,a){do Nn();while(Er!==null);if(he&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Gf(e,s),e===$e&&(qe=$e=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gi||(gi=!0,Dm($i,function(){return Nn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rt.transition,Rt.transition=null;var l=ve;ve=1;var o=he;he|=4,ac.current=null,sx(e,n),Lm(n,e),Pg(Gl),Vi=!!Vl,Gl=Vl=null,e.current=n,lx(n),qf(),he=o,ve=l,Rt.transition=s}else e.current=n;if(gi&&(gi=!1,Er=e,ls=i),s=e.pendingLanes,s===0&&(Nr=null),zf(n.stateNode),pt(e,Oe()),r!==null)for(a=e.onRecoverableError,n=0;n<r.length;n++)i=r[n],a(i.value,{componentStack:i.stack,digest:i.digest});if(ss)throw ss=!1,e=mo,mo=null,e;return ls&1&&e.tag!==0&&Nn(),s=e.pendingLanes,s&1?e===ho?xa++:(xa=0,ho=e):xa=0,Ir(),null}function Nn(){if(Er!==null){var e=mp(ls),r=Rt.transition,n=ve;try{if(Rt.transition=null,ve=16>e?16:e,Er===null)var a=!1;else{if(e=Er,Er=null,ls=0,he&6)throw Error(I(331));var i=he;for(he|=4,G=e.current;G!==null;){var s=G,l=s.child;if(G.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(G=u;G!==null;){var m=G;switch(m.tag){case 0:case 11:case 15:fa(8,m,s)}var d=m.child;if(d!==null)d.return=m,G=d;else for(;G!==null;){m=G;var f=m.sibling,j=m.return;if(Em(m),m===u){G=null;break}if(f!==null){f.return=j,G=f;break}G=j}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}G=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,G=l;else e:for(;G!==null;){if(s=G,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,G=h;break e}G=s.return}}var p=e.current;for(G=p;G!==null;){l=G;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,G=x;else e:for(l=p;G!==null;){if(o=G,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ss(9,o)}}catch(M){Te(o,o.return,M)}if(o===l){G=null;break e}var A=o.sibling;if(A!==null){A.return=o.return,G=A;break e}G=o.return}}if(he=i,Ir(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(hs,e)}catch{}a=!0}return a}finally{ve=n,Rt.transition=r}}return!1}function Vu(e,r,n){r=In(n,r),r=mm(e,r,1),e=Mr(e,r,1),r=it(),e!==null&&(za(e,1,r),pt(e,r))}function Te(e,r,n){if(e.tag===3)Vu(e,e,n);else for(;r!==null;){if(r.tag===3){Vu(r,e,n);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Nr===null||!Nr.has(a))){e=In(n,e),e=hm(r,e,1),r=Mr(r,e,1),e=it(),r!==null&&(za(r,1,e),pt(r,e));break}}r=r.return}}function mx(e,r,n){var a=e.pingCache;a!==null&&a.delete(r),r=it(),e.pingedLanes|=e.suspendedLanes&n,$e===e&&(Ge&n)===n&&(ze===4||ze===3&&(Ge&130023424)===Ge&&500>Oe()-sc?Kr(e,0):ic|=n),pt(e,r)}function _m(e,r){r===0&&(e.mode&1?(r=si,si<<=1,!(si&130023424)&&(si=4194304)):r=1);var n=it();e=ur(e,r),e!==null&&(za(e,r,n),pt(e,n))}function hx(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),_m(e,n)}function fx(e,r){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(I(314))}a!==null&&a.delete(r),_m(e,n)}var Om;Om=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||ut.current)ct=!0;else{if(!(e.lanes&n)&&!(r.flags&128))return ct=!1,rx(e,r,n);ct=!!(e.flags&131072)}else ct=!1,Le&&r.flags&1048576&&Fp(r,Xi,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;Ni(e,r),e=r.pendingProps;var i=_n(r,et.current);Mn(r,n),i=Zo(null,r,a,e,i,n);var s=ec();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,dt(a)?(s=!0,Ki(r)):s=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qo(r),i.updater=ys,r.stateNode=i,i._reactInternals=r,to(r,a,e,n),r=ao(null,r,a,!0,s,n)):(r.tag=0,Le&&s&&Bo(r),nt(null,r,i,n),r=r.child),r;case 16:a=r.elementType;e:{switch(Ni(e,r),e=r.pendingProps,i=a._init,a=i(a._payload),r.type=a,i=r.tag=xx(a),e=_t(a,e),i){case 0:r=no(null,r,a,e,n);break e;case 1:r=Ou(null,r,a,e,n);break e;case 11:r=Tu(null,r,a,e,n);break e;case 14:r=_u(null,r,a,_t(a.type,e),n);break e}throw Error(I(306,a,""))}return r;case 0:return a=r.type,i=r.pendingProps,i=r.elementType===a?i:_t(a,i),no(e,r,a,i,n);case 1:return a=r.type,i=r.pendingProps,i=r.elementType===a?i:_t(a,i),Ou(e,r,a,i,n);case 3:e:{if(vm(r),e===null)throw Error(I(387));a=r.pendingProps,s=r.memoizedState,i=s.element,Vp(e,r),ts(r,a,null,n);var l=r.memoizedState;if(a=l.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){i=In(Error(I(423)),r),r=Du(e,r,a,n,i);break e}else if(a!==i){i=In(Error(I(424)),r),r=Du(e,r,a,n,i);break e}else for(gt=kr(r.stateNode.containerInfo.firstChild),xt=r,Le=!0,Dt=null,n=$p(r,null,a,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(On(),a===i){r=dr(e,r,n);break e}nt(e,r,a,n)}r=r.child}return r;case 5:return Gp(r),e===null&&Xl(r),a=r.type,i=r.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,Wl(a,i)?l=null:s!==null&&Wl(a,s)&&(r.flags|=32),xm(e,r),nt(e,r,l,n),r.child;case 6:return e===null&&Xl(r),null;case 13:return jm(e,r,n);case 4:return Jo(r,r.stateNode.containerInfo),a=r.pendingProps,e===null?r.child=Dn(r,null,a,n):nt(e,r,a,n),r.child;case 11:return a=r.type,i=r.pendingProps,i=r.elementType===a?i:_t(a,i),Tu(e,r,a,i,n);case 7:return nt(e,r,r.pendingProps,n),r.child;case 8:return nt(e,r,r.pendingProps.children,n),r.child;case 12:return nt(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(a=r.type._context,i=r.pendingProps,s=r.memoizedProps,l=i.value,ye(Zi,a._currentValue),a._currentValue=l,s!==null)if(zt(s.value,l)){if(s.children===i.children&&!ut.current){r=dr(e,r,n);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var o=s.dependencies;if(o!==null){l=s.child;for(var c=o.firstContext;c!==null;){if(c.context===a){if(s.tag===1){c=lr(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Zl(s.return,n,r),o.lanes|=n;break}c=c.next}}else if(s.tag===10)l=s.type===r.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(I(341));l.lanes|=n,o=l.alternate,o!==null&&(o.lanes|=n),Zl(l,n,r),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===r){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}nt(e,r,i.children,n),r=r.child}return r;case 9:return i=r.type,a=r.pendingProps.children,Mn(r,n),i=Lt(i),a=a(i),r.flags|=1,nt(e,r,a,n),r.child;case 14:return a=r.type,i=_t(a,r.pendingProps),i=_t(a.type,i),_u(e,r,a,i,n);case 15:return fm(e,r,r.type,r.pendingProps,n);case 17:return a=r.type,i=r.pendingProps,i=r.elementType===a?i:_t(a,i),Ni(e,r),r.tag=1,dt(a)?(e=!0,Ki(r)):e=!1,Mn(r,n),pm(r,a,i),to(r,a,i,n),ao(null,r,a,!0,e,n);case 19:return bm(e,r,n);case 22:return gm(e,r,n)}throw Error(I(156,r.tag))};function Dm(e,r){return cp(e,r)}function gx(e,r,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,r,n,a){return new gx(e,r,n,a)}function uc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xx(e){if(typeof e=="function")return uc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ko)return 11;if(e===Mo)return 14}return 2}function Tr(e,r){var n=e.alternate;return n===null?(n=Ct(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _i(e,r,n,a,i,s){var l=2;if(a=e,typeof e=="function")uc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case hn:return Yr(n.children,i,s,r);case Ao:l=8,i|=8;break;case Cl:return e=Ct(12,n,r,i|2),e.elementType=Cl,e.lanes=s,e;case Rl:return e=Ct(13,n,r,i),e.elementType=Rl,e.lanes=s,e;case Ll:return e=Ct(19,n,r,i),e.elementType=Ll,e.lanes=s,e;case Gd:return Es(n,i,s,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hd:l=10;break e;case Vd:l=9;break e;case ko:l=11;break e;case Mo:l=14;break e;case xr:l=16,a=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return r=Ct(l,n,r,i),r.elementType=e,r.type=a,r.lanes=s,r}function Yr(e,r,n,a){return e=Ct(7,e,a,r),e.lanes=n,e}function Es(e,r,n,a){return e=Ct(22,e,a,r),e.elementType=Gd,e.lanes=n,e.stateNode={isHidden:!1},e}function cl(e,r,n){return e=Ct(6,e,null,r),e.lanes=n,e}function ul(e,r,n){return r=Ct(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function vx(e,r,n,a,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hs(0),this.expirationTimes=Hs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hs(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dc(e,r,n,a,i,s,l,o,c){return e=new vx(e,r,n,o,c),r===1?(r=1,s===!0&&(r|=8)):r=0,s=Ct(3,null,null,r),e.current=s,s.stateNode=e,s.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qo(s),e}function jx(e,r,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mn,key:a==null?null:""+a,children:e,containerInfo:r,implementation:n}}function qm(e){if(!e)return Or;e=e._reactInternals;e:{if(an(e)!==e||e.tag!==1)throw Error(I(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(dt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(dt(n))return qp(e,n,r)}return r}function Im(e,r,n,a,i,s,l,o,c){return e=dc(n,a,!0,e,i,s,l,o,c),e.context=qm(null),n=e.current,a=it(),i=Pr(n),s=lr(a,i),s.callback=r??null,Mr(n,s,i),e.current.lanes=i,za(e,i,a),pt(e,a),e}function Cs(e,r,n,a){var i=r.current,s=it(),l=Pr(i);return n=qm(n),r.context===null?r.context=n:r.pendingContext=n,r=lr(s,l),r.payload={element:e},a=a===void 0?null:a,a!==null&&(r.callback=a),e=Mr(i,r,l),e!==null&&(It(e,i,l,s),Ai(e,i,l)),l}function cs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gu(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function pc(e,r){Gu(e,r),(e=e.alternate)&&Gu(e,r)}function bx(){return null}var Fm=typeof reportError=="function"?reportError:function(e){console.error(e)};function mc(e){this._internalRoot=e}Rs.prototype.render=mc.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(I(409));Cs(e,r,null,null)};Rs.prototype.unmount=mc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;rn(function(){Cs(null,e,null,null)}),r[cr]=null}};function Rs(e){this._internalRoot=e}Rs.prototype.unstable_scheduleHydration=function(e){if(e){var r=gp();e={blockedOn:null,target:e,priority:r};for(var n=0;n<jr.length&&r!==0&&r<jr[n].priority;n++);jr.splice(n,0,e),n===0&&vp(e)}};function hc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wu(){}function yx(e,r,n,a,i){if(i){if(typeof a=="function"){var s=a;a=function(){var u=cs(l);s.call(u)}}var l=Im(r,a,e,0,null,!1,!1,"",Wu);return e._reactRootContainer=l,e[cr]=l.current,La(e.nodeType===8?e.parentNode:e),rn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var o=a;a=function(){var u=cs(c);o.call(u)}}var c=dc(e,0,!1,null,null,!1,!1,"",Wu);return e._reactRootContainer=c,e[cr]=c.current,La(e.nodeType===8?e.parentNode:e),rn(function(){Cs(r,c,n,a)}),c}function As(e,r,n,a,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var o=i;i=function(){var c=cs(l);o.call(c)}}Cs(r,l,e,i)}else l=yx(n,r,e,i,a);return cs(l)}hp=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=ia(r.pendingLanes);n!==0&&(To(r,n|1),pt(r,Oe()),!(he&6)&&(Fn=Oe()+500,Ir()))}break;case 13:rn(function(){var a=ur(e,1);if(a!==null){var i=it();It(a,e,1,i)}}),pc(e,1)}};_o=function(e){if(e.tag===13){var r=ur(e,134217728);if(r!==null){var n=it();It(r,e,134217728,n)}pc(e,134217728)}};fp=function(e){if(e.tag===13){var r=Pr(e),n=ur(e,r);if(n!==null){var a=it();It(n,e,r,a)}pc(e,r)}};gp=function(){return ve};xp=function(e,r){var n=ve;try{return ve=e,r()}finally{ve=n}};ql=function(e,r,n){switch(r){case"input":if(Ml(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var a=n[r];if(a!==e&&a.form===e.form){var i=vs(a);if(!i)throw Error(I(90));Qd(a),Ml(a,i)}}}break;case"textarea":Kd(e,n);break;case"select":r=n.value,r!=null&&Rn(e,!!n.multiple,r,!1)}};np=lc;ap=rn;var Sx={usingClientEntryPoint:!1,Events:[Ua,vn,vs,tp,rp,lc]},Zn={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wx={bundleType:Zn.bundleType,version:Zn.version,rendererPackageName:Zn.rendererPackageName,rendererConfig:Zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lp(e),e===null?null:e.stateNode},findFiberByHostInstance:Zn.findFiberByHostInstance||bx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xi.isDisabled&&xi.supportsFiber)try{hs=xi.inject(wx),Gt=xi}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sx;jt.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hc(r))throw Error(I(200));return jx(e,r,null,n)};jt.createRoot=function(e,r){if(!hc(e))throw Error(I(299));var n=!1,a="",i=Fm;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=dc(e,1,!1,null,null,n,!1,a,i),e[cr]=r.current,La(e.nodeType===8?e.parentNode:e),new mc(r)};jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=lp(r),e=e===null?null:e.stateNode,e};jt.flushSync=function(e){return rn(e)};jt.hydrate=function(e,r,n){if(!Ls(r))throw Error(I(200));return As(null,e,r,!0,n)};jt.hydrateRoot=function(e,r,n){if(!hc(e))throw Error(I(405));var a=n!=null&&n.hydratedSources||null,i=!1,s="",l=Fm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),r=Im(r,null,e,1,n??null,i,!1,s,l),e[cr]=r.current,La(e),a)for(e=0;e<a.length;e++)n=a[e],i=n._getVersion,i=i(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,i]:r.mutableSourceEagerHydrationData.push(n,i);return new Rs(r)};jt.render=function(e,r,n){if(!Ls(r))throw Error(I(200));return As(null,e,r,!1,n)};jt.unmountComponentAtNode=function(e){if(!Ls(e))throw Error(I(40));return e._reactRootContainer?(rn(function(){As(null,null,e,!1,function(){e._reactRootContainer=null,e[cr]=null})}),!0):!1};jt.unstable_batchedUpdates=lc;jt.unstable_renderSubtreeIntoContainer=function(e,r,n,a){if(!Ls(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return As(e,r,n,!1,a)};jt.version="18.3.1-next-f1338f8080-20240426";function zm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zm)}catch(e){console.error(e)}}zm(),zd.exports=jt;var Bm=zd.exports,Um,Qu=Bm;Um=Qu.createRoot,Qu.hydrateRoot;/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var $m=e=>{throw TypeError(e)},Ex=(e,r,n)=>r.has(e)||$m("Cannot "+n),dl=(e,r,n)=>(Ex(e,r,"read from private field"),n?n.call(e):r.get(e)),Cx=(e,r,n)=>r.has(e)?$m("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,n),Ju="popstate";function Ku(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function Rx(e={}){function r(i,s){let{pathname:l="/",search:o="",hash:c=""}=Kt(i.location.hash.substring(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Da("",{pathname:l,search:o,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let l=i.document.querySelector("base"),o="";if(l&&l.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");o=u===-1?c:c.slice(0,u)}return o+"#"+(typeof s=="string"?s:Jt(s))}function a(i,s){De(i.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(s)})`)}return Ax(r,n,a,e)}function oe(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function De(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Lx(){return Math.random().toString(36).substring(2,10)}function Yu(e,r){return{usr:e.state,key:e.key,idx:r,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Da(e,r,n=null,a,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof r=="string"?Kt(r):r,state:n,key:r&&r.key||a||Lx(),unstable_mask:i}}function Jt({pathname:e="/",search:r="",hash:n=""}){return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Kt(e){let r={};if(e){let n=e.indexOf("#");n>=0&&(r.hash=e.substring(n),e=e.substring(0,n));let a=e.indexOf("?");a>=0&&(r.search=e.substring(a),e=e.substring(0,a)),e&&(r.pathname=e)}return r}function Ax(e,r,n,a={}){let{window:i=document.defaultView,v5Compat:s=!1}=a,l=i.history,o="POP",c=null,u=m();u==null&&(u=0,l.replaceState({...l.state,idx:u},""));function m(){return(l.state||{idx:null}).idx}function d(){o="POP";let S=m(),h=S==null?null:S-u;u=S,c&&c({action:o,location:v.location,delta:h})}function f(S,h){o="PUSH";let p=Ku(S)?S:Da(v.location,S,h);n&&n(p,S),u=m()+1;let x=Yu(p,u),A=v.createHref(p.unstable_mask||p);try{l.pushState(x,"",A)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(A)}s&&c&&c({action:o,location:v.location,delta:1})}function j(S,h){o="REPLACE";let p=Ku(S)?S:Da(v.location,S,h);n&&n(p,S),u=m();let x=Yu(p,u),A=v.createHref(p.unstable_mask||p);l.replaceState(x,"",A),s&&c&&c({action:o,location:v.location,delta:0})}function g(S){return Hm(S)}let v={get action(){return o},get location(){return e(i,l)},listen(S){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Ju,d),c=S,()=>{i.removeEventListener(Ju,d),c=null}},createHref(S){return r(i,S)},createURL:g,encodeLocation(S){let h=g(S);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:j,go(S){return l.go(S)}};return v}function Hm(e,r=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),oe(n,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:Jt(e);return a=a.replace(/ $/,"%20"),!r&&a.startsWith("//")&&(a=n+a),new URL(a,n)}var la,Xu=class{constructor(e){if(Cx(this,la,new Map),e)for(let[r,n]of e)this.set(r,n)}get(e){if(dl(this,la).has(e))return dl(this,la).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,r){dl(this,la).set(e,r)}};la=new WeakMap;var kx=new Set(["lazy","caseSensitive","path","id","index","children"]);function Mx(e){return kx.has(e)}var Nx=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function Px(e){return Nx.has(e)}function Tx(e){return e.index===!0}function qa(e,r,n=[],a={},i=!1){return e.map((s,l)=>{let o=[...n,String(l)],c=typeof s.id=="string"?s.id:o.join("-");if(oe(s.index!==!0||!s.children,"Cannot specify children on an index route"),oe(i||!a[c],`Found a route id collision on id "${c}".  Route id's must be globally unique within Data Router usages`),Tx(s)){let u={...s,id:c};return a[c]=Zu(u,r(u)),u}else{let u={...s,id:c,children:void 0};return a[c]=Zu(u,r(u)),s.children&&(u.children=qa(s.children,r,o,a,i)),u}})}function Zu(e,r){return Object.assign(e,{...r,...typeof r.lazy=="object"&&r.lazy!=null?{lazy:{...e.lazy,...r.lazy}}:{}})}function yr(e,r,n="/"){return oa(e,r,n,!1)}function oa(e,r,n,a){let i=typeof r=="string"?Kt(r):r,s=kt(i.pathname||"/",n);if(s==null)return null;let l=Vm(e);Ox(l);let o=null;for(let c=0;o==null&&c<l.length;++c){let u=Gx(s);o=Hx(l[c],u,a)}return o}function _x(e,r){let{route:n,pathname:a,params:i}=e;return{id:n.id,pathname:a,params:i,data:r[n.id],loaderData:r[n.id],handle:n.handle}}function Vm(e,r=[],n=[],a="",i=!1){let s=(l,o,c=i,u)=>{let m={relativePath:u===void 0?l.path||"":u,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(a)&&c)return;oe(m.relativePath.startsWith(a),`Absolute route path "${m.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(a.length)}let d=Ft([a,m.relativePath]),f=n.concat(m);l.children&&l.children.length>0&&(oe(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),Vm(l.children,r,f,d,c)),!(l.path==null&&!l.index)&&r.push({path:d,score:Ux(d,l.index),routesMeta:f})};return e.forEach((l,o)=>{var c;if(l.path===""||!((c=l.path)!=null&&c.includes("?")))s(l,o);else for(let u of Gm(l.path))s(l,o,!0,u)}),r}function Gm(e){let r=e.split("/");if(r.length===0)return[];let[n,...a]=r,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(a.length===0)return i?[s,""]:[s];let l=Gm(a.join("/")),o=[];return o.push(...l.map(c=>c===""?s:[s,c].join("/"))),i&&o.push(...l),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function Ox(e){e.sort((r,n)=>r.score!==n.score?n.score-r.score:$x(r.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var Dx=/^:[\w-]+$/,qx=3,Ix=2,Fx=1,zx=10,Bx=-2,ed=e=>e==="*";function Ux(e,r){let n=e.split("/"),a=n.length;return n.some(ed)&&(a+=Bx),r&&(a+=Ix),n.filter(i=>!ed(i)).reduce((i,s)=>i+(Dx.test(s)?qx:s===""?Fx:zx),a)}function $x(e,r){return e.length===r.length&&e.slice(0,-1).every((a,i)=>a===r[i])?e[e.length-1]-r[r.length-1]:0}function Hx(e,r,n=!1){let{routesMeta:a}=e,i={},s="/",l=[];for(let o=0;o<a.length;++o){let c=a[o],u=o===a.length-1,m=s==="/"?r:r.slice(s.length)||"/",d=us({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},m),f=c.route;if(!d&&u&&n&&!a[a.length-1].route.index&&(d=us({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!d)return null;Object.assign(i,d.params),l.push({params:i,pathname:Ft([s,d.pathname]),pathnameBase:Jx(Ft([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=Ft([s,d.pathnameBase]))}return l}function us(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=Vx(e.path,e.caseSensitive,e.end),i=r.match(n);if(!i)return null;let s=i[0],l=s.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:a.reduce((u,{paramName:m,isOptional:d},f)=>{if(m==="*"){let g=o[f]||"";l=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}const j=o[f];return d&&!j?u[m]=void 0:u[m]=(j||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:l,pattern:e}}function Vx(e,r=!1,n=!0){De(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c,u,m)=>{if(a.push({paramName:o,isOptional:c!=null}),c){let d=m.charAt(u+l.length);return d&&d!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,r?void 0:"i"),a]}function Gx(e){try{return e.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return De(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),e}}function kt(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let n=r.endsWith("/")?r.length-1:r.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function Wx({basename:e,pathname:r}){return r==="/"?e:Ft([e,r])}var Wm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fc=e=>Wm.test(e);function Qx(e,r="/"){let{pathname:n,search:a="",hash:i=""}=typeof e=="string"?Kt(e):e,s;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?s=td(n.substring(1),"/"):s=td(n,r)):s=r,{pathname:s,search:Kx(a),hash:Yx(i)}}function td(e,r){let n=r.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function pl(e,r,n,a){return`Cannot include a '${e}' character in a manually specified \`to.${r}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Qm(e){return e.filter((r,n)=>n===0||r.route.path&&r.route.path.length>0)}function gc(e){let r=Qm(e);return r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase)}function ks(e,r,n,a=!1){let i;typeof e=="string"?i=Kt(e):(i={...e},oe(!i.pathname||!i.pathname.includes("?"),pl("?","pathname","search",i)),oe(!i.pathname||!i.pathname.includes("#"),pl("#","pathname","hash",i)),oe(!i.search||!i.search.includes("#"),pl("#","search","hash",i)));let s=e===""||i.pathname==="",l=s?"/":i.pathname,o;if(l==null)o=n;else{let d=r.length-1;if(!a&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}o=d>=0?r[d]:"/"}let c=Qx(i,o),u=l&&l!=="/"&&l.endsWith("/"),m=(s||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}var Ft=e=>e.join("/").replace(/\/\/+/g,"/"),Jx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Kx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Yx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Ha=class{constructor(e,r,n,a=!1){this.status=e,this.statusText=r||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ia(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Va(e){return e.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Jm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Km(e,r){let n=e;if(typeof n!="string"||!Wm.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let a=n,i=!1;if(Jm)try{let s=new URL(window.location.href),l=n.startsWith("//")?new URL(s.protocol+n):new URL(n),o=kt(l.pathname,r);l.origin===s.origin&&o!=null?n=o+l.search+l.hash:i=!0}catch{De(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:i,to:n}}var Cr=Symbol("Uninstrumented");function Xx(e,r){let n={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};e.forEach(i=>i({id:r.id,index:r.index,path:r.path,instrument(s){let l=Object.keys(n);for(let o of l)s[o]&&n[o].push(s[o])}}));let a={};if(typeof r.lazy=="function"&&n.lazy.length>0){let i=Cn(n.lazy,r.lazy,()=>{});i&&(a.lazy=i)}if(typeof r.lazy=="object"){let i=r.lazy;["middleware","loader","action"].forEach(s=>{let l=i[s],o=n[`lazy.${s}`];if(typeof l=="function"&&o.length>0){let c=Cn(o,l,()=>{});c&&(a.lazy=Object.assign(a.lazy||{},{[s]:c}))}})}return["loader","action"].forEach(i=>{let s=r[i];if(typeof s=="function"&&n[i].length>0){let l=s[Cr]??s,o=Cn(n[i],l,(...c)=>rd(c[0]));o&&(i==="loader"&&l.hydrate===!0&&(o.hydrate=!0),o[Cr]=l,a[i]=o)}}),r.middleware&&r.middleware.length>0&&n.middleware.length>0&&(a.middleware=r.middleware.map(i=>{let s=i[Cr]??i,l=Cn(n.middleware,s,(...o)=>rd(o[0]));return l?(l[Cr]=s,l):i})),a}function Zx(e,r){let n={navigate:[],fetch:[]};if(r.forEach(a=>a({instrument(i){let s=Object.keys(i);for(let l of s)i[l]&&n[l].push(i[l])}})),n.navigate.length>0){let a=e.navigate[Cr]??e.navigate,i=Cn(n.navigate,a,(...s)=>{let[l,o]=s;return{to:typeof l=="number"||typeof l=="string"?l:l?Jt(l):".",...nd(e,o??{})}});i&&(i[Cr]=a,e.navigate=i)}if(n.fetch.length>0){let a=e.fetch[Cr]??e.fetch,i=Cn(n.fetch,a,(...s)=>{let[l,,o,c]=s;return{href:o??".",fetcherKey:l,...nd(e,c??{})}});i&&(i[Cr]=a,e.fetch=i)}return e}function Cn(e,r,n){return e.length===0?null:async(...a)=>{let i=await Ym(e,n(...a),()=>r(...a),e.length-1);if(i.type==="error")throw i.value;return i.value}}async function Ym(e,r,n,a){let i=e[a],s;if(i){let l,o=async()=>(l?console.error("You cannot call instrumented handlers more than once"):l=Ym(e,r,n,a-1),s=await l,oe(s,"Expected a result"),s.type==="error"&&s.value instanceof Error?{status:"error",error:s.value}:{status:"success",error:void 0});try{await i(o,r)}catch(c){console.error("An instrumentation function threw an error:",c)}l||await o(),await l}else try{s={type:"success",value:await n()}}catch(l){s={type:"error",value:l}}return s||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function rd(e){let{request:r,context:n,params:a,unstable_pattern:i}=e;return{request:ev(r),params:{...a},unstable_pattern:i,context:tv(n)}}function nd(e,r){return{currentUrl:Jt(e.state.location),..."formMethod"in r?{formMethod:r.formMethod}:{},..."formEncType"in r?{formEncType:r.formEncType}:{},..."formData"in r?{formData:r.formData}:{},..."body"in r?{body:r.body}:{}}}function ev(e){return{method:e.method,url:e.url,headers:{get:(...r)=>e.headers.get(...r)}}}function tv(e){if(nv(e)){let r={...e};return Object.freeze(r),r}else return{get:r=>e.get(r)}}var rv=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function nv(e){if(e===null||typeof e!="object")return!1;const r=Object.getPrototypeOf(e);return r===Object.prototype||r===null||Object.getOwnPropertyNames(r).sort().join("\0")===rv}var Xm=["POST","PUT","PATCH","DELETE"],av=new Set(Xm),iv=["GET",...Xm],sv=new Set(iv),Zm=new Set([301,302,303,307,308]),lv=new Set([307,308]),ml={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ov={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ea={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},cv=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),eh="remix-router-transitions",th=Symbol("ResetLoaderData");function uv(e){const r=e.window?e.window:typeof window<"u"?window:void 0,n=typeof r<"u"&&typeof r.document<"u"&&typeof r.document.createElement<"u";oe(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a=e.hydrationRouteProperties||[],i=e.mapRouteProperties||cv,s=i;if(e.unstable_instrumentations){let w=e.unstable_instrumentations;s=L=>({...i(L),...Xx(w.map(k=>k.route).filter(Boolean),L)})}let l={},o=qa(e.routes,s,void 0,l),c,u=e.basename||"/";u.startsWith("/")||(u=`/${u}`);let m=e.dataStrategy||fv,d={...e.future},f=null,j=new Set,g=null,v=null,S=null,h=e.hydrationData!=null,p=yr(o,e.history.location,u),x=!1,A=null,M,T;if(p==null&&!e.patchRoutesOnNavigation){let w=St(404,{pathname:e.history.location.pathname}),{matches:L,route:k}=vi(o);M=!0,T=!M,p=L,A={[k.id]:w}}else if(p&&!e.hydrationData&&Ka(p,o,e.history.location.pathname).active&&(p=null),p)if(p.some(w=>w.route.lazy))M=!1,T=!M;else if(!p.some(w=>xc(w.route)))M=!0,T=!M;else{let w=e.hydrationData?e.hydrationData.loaderData:null,L=e.hydrationData?e.hydrationData.errors:null,k=p;if(L){let q=p.findIndex(z=>L[z.route.id]!==void 0);k=k.slice(0,q+1)}T=!1,M=k.every(q=>{let z=rh(q.route,w,L);return T=T||z.renderFallback,!z.shouldLoad})}else{M=!1,T=!M,p=[];let w=Ka(null,o,e.history.location.pathname);w.active&&w.matches&&(x=!0,p=w.matches)}let _,E={historyAction:e.history.action,location:e.history.location,matches:p,initialized:M,renderFallback:T,navigation:ml,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||A,fetchers:new Map,blockers:new Map},H="POP",F=null,se=!1,Z,xe=!1,ee=new Map,O=null,$=!1,te=!1,D=new Set,B=new Map,U=0,ne=-1,ce=new Map,be=new Set,Re=new Map,Ie=new Map,Se=new Set,He=new Map,ln,Nt=null;function Mh(){if(f=e.history.listen(({action:w,location:L,delta:k})=>{if(ln){ln(),ln=void 0;return}De(He.size===0||k!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let q=Oc({currentLocation:E.location,nextLocation:L,historyAction:w});if(q&&k!=null){let z=new Promise(J=>{ln=J});e.history.go(k*-1),Ja(q,{state:"blocked",location:L,proceed(){Ja(q,{state:"proceeding",proceed:void 0,reset:void 0,location:L}),z.then(()=>e.history.go(k))},reset(){let J=new Map(E.blockers);J.set(q,ea),Qe({blockers:J})}}),F==null||F.resolve(),F=null;return}return Fr(w,L)}),n){Tv(r,ee);let w=()=>_v(r,ee);r.addEventListener("pagehide",w),O=()=>r.removeEventListener("pagehide",w)}return E.initialized||Fr("POP",E.location,{initialHydration:!0}),_}function Nh(){f&&f(),O&&O(),j.clear(),Z&&Z.abort(),E.fetchers.forEach((w,L)=>Ds(L)),E.blockers.forEach((w,L)=>_c(L))}function Ph(w){return j.add(w),()=>j.delete(w)}function Qe(w,L={}){w.matches&&(w.matches=w.matches.map(z=>{let J=l[z.route.id],Y=z.route;return Y.element!==J.element||Y.errorElement!==J.errorElement||Y.hydrateFallbackElement!==J.hydrateFallbackElement?{...z,route:J}:z})),E={...E,...w};let k=[],q=[];E.fetchers.forEach((z,J)=>{z.state==="idle"&&(Se.has(J)?k.push(J):q.push(J))}),Se.forEach(z=>{!E.fetchers.has(z)&&!B.has(z)&&k.push(z)}),[...j].forEach(z=>z(E,{deletedFetchers:k,newErrors:w.errors??null,viewTransitionOpts:L.viewTransitionOpts,flushSync:L.flushSync===!0})),k.forEach(z=>Ds(z)),q.forEach(z=>E.fetchers.delete(z))}function on(w,L,{flushSync:k}={}){var ae,K;let q=E.actionData!=null&&E.navigation.formMethod!=null&&Xe(E.navigation.formMethod)&&E.navigation.state==="loading"&&((ae=w.state)==null?void 0:ae._isRedirect)!==!0,z;L.actionData?Object.keys(L.actionData).length>0?z=L.actionData:z=null:q?z=E.actionData:z=null;let J=L.loaderData?md(E.loaderData,L.loaderData,L.matches||[],L.errors):E.loaderData,Y=E.blockers;Y.size>0&&(Y=new Map(Y),Y.forEach((le,de)=>Y.set(de,ea)));let Q=$?!1:qc(w,L.matches||E.matches),V=se===!0||E.navigation.formMethod!=null&&Xe(E.navigation.formMethod)&&((K=w.state)==null?void 0:K._isRedirect)!==!0;c&&(o=c,c=void 0),$||H==="POP"||(H==="PUSH"?e.history.push(w,w.state):H==="REPLACE"&&e.history.replace(w,w.state));let X;if(H==="POP"){let le=ee.get(E.location.pathname);le&&le.has(w.pathname)?X={currentLocation:E.location,nextLocation:w}:ee.has(w.pathname)&&(X={currentLocation:w,nextLocation:E.location})}else if(xe){let le=ee.get(E.location.pathname);le?le.add(w.pathname):(le=new Set([w.pathname]),ee.set(E.location.pathname,le)),X={currentLocation:E.location,nextLocation:w}}Qe({...L,actionData:z,loaderData:J,historyAction:H,location:w,initialized:!0,renderFallback:!1,navigation:ml,revalidation:"idle",restoreScrollPosition:Q,preventScrollReset:V,blockers:Y},{viewTransitionOpts:X,flushSync:k===!0}),H="POP",se=!1,xe=!1,$=!1,te=!1,F==null||F.resolve(),F=null,Nt==null||Nt.resolve(),Nt=null}async function Lc(w,L){if(F==null||F.resolve(),F=null,typeof w=="number"){F||(F=xd());let Ae=F.promise;return e.history.go(w),Ae}let k=xo(E.location,E.matches,u,w,L==null?void 0:L.fromRouteId,L==null?void 0:L.relative),{path:q,submission:z,error:J}=ad(!1,k,L),Y;L!=null&&L.unstable_mask&&(Y={pathname:"",search:"",hash:"",...typeof L.unstable_mask=="string"?Kt(L.unstable_mask):{...E.location.unstable_mask,...L.unstable_mask}});let Q=E.location,V=Da(Q,q,L&&L.state,void 0,Y);V={...V,...e.history.encodeLocation(V)};let X=L&&L.replace!=null?L.replace:void 0,ae="PUSH";X===!0?ae="REPLACE":X===!1||z!=null&&Xe(z.formMethod)&&z.formAction===E.location.pathname+E.location.search&&(ae="REPLACE");let K=L&&"preventScrollReset"in L?L.preventScrollReset===!0:void 0,le=(L&&L.flushSync)===!0,de=Oc({currentLocation:Q,nextLocation:V,historyAction:ae});if(de){Ja(de,{state:"blocked",location:V,proceed(){Ja(de,{state:"proceeding",proceed:void 0,reset:void 0,location:V}),Lc(w,L)},reset(){let Ae=new Map(E.blockers);Ae.set(de,ea),Qe({blockers:Ae})}});return}await Fr(ae,V,{submission:z,pendingError:J,preventScrollReset:K,replace:L&&L.replace,enableViewTransition:L&&L.viewTransition,flushSync:le,callSiteDefaultShouldRevalidate:L&&L.unstable_defaultShouldRevalidate})}function Th(){Nt||(Nt=xd()),Os(),Qe({revalidation:"loading"});let w=Nt.promise;return E.navigation.state==="submitting"?w:E.navigation.state==="idle"?(Fr(E.historyAction,E.location,{startUninterruptedRevalidation:!0}),w):(Fr(H||E.historyAction,E.navigation.location,{overrideNavigation:E.navigation,enableViewTransition:xe===!0}),w)}async function Fr(w,L,k){Z&&Z.abort(),Z=null,H=w,$=(k&&k.startUninterruptedRevalidation)===!0,Hh(E.location,E.matches),se=(k&&k.preventScrollReset)===!0,xe=(k&&k.enableViewTransition)===!0;let q=c||o,z=k&&k.overrideNavigation,J=k!=null&&k.initialHydration&&E.matches&&E.matches.length>0&&!x?E.matches:yr(q,L,u),Y=(k&&k.flushSync)===!0;if(J&&E.initialized&&!te&&wv(E.location,L)&&!(k&&k.submission&&Xe(k.submission.formMethod))){on(L,{matches:J},{flushSync:Y});return}let Q=Ka(J,q,L.pathname);if(Q.active&&Q.matches&&(J=Q.matches),!J){let{error:Be,notFoundMatches:tt,route:je}=qs(L.pathname);on(L,{matches:tt,loaderData:{},errors:{[je.id]:Be}},{flushSync:Y});return}Z=new AbortController;let V=pn(e.history,L,Z.signal,k&&k.submission),X=e.getContext?await e.getContext():new Xu,ae;if(k&&k.pendingError)ae=[Sr(J).route.id,{type:"error",error:k.pendingError}];else if(k&&k.submission&&Xe(k.submission.formMethod)){let Be=await _h(V,L,k.submission,J,X,Q.active,k&&k.initialHydration===!0,{replace:k.replace,flushSync:Y});if(Be.shortCircuited)return;if(Be.pendingActionResult){let[tt,je]=Be.pendingActionResult;if(ft(je)&&Ia(je.error)&&je.error.status===404){Z=null,on(L,{matches:Be.matches,loaderData:{},errors:{[tt]:je.error}});return}}J=Be.matches||J,ae=Be.pendingActionResult,z=hl(L,k.submission),Y=!1,Q.active=!1,V=pn(e.history,V.url,V.signal)}let{shortCircuited:K,matches:le,loaderData:de,errors:Ae}=await Oh(V,L,J,X,Q.active,z,k&&k.submission,k&&k.fetcherSubmission,k&&k.replace,k&&k.initialHydration===!0,Y,ae,k&&k.callSiteDefaultShouldRevalidate);K||(Z=null,on(L,{matches:le||J,...hd(ae),loaderData:de,errors:Ae}))}async function _h(w,L,k,q,z,J,Y,Q={}){Os();let V=Nv(L,k);if(Qe({navigation:V},{flushSync:Q.flushSync===!0}),J){let K=await Ya(q,L.pathname,w.signal);if(K.type==="aborted")return{shortCircuited:!0};if(K.type==="error"){if(K.partialMatches.length===0){let{matches:de,route:Ae}=vi(o);return{matches:de,pendingActionResult:[Ae.id,{type:"error",error:K.error}]}}let le=Sr(K.partialMatches).route.id;return{matches:K.partialMatches,pendingActionResult:[le,{type:"error",error:K.error}]}}else if(K.matches)q=K.matches;else{let{notFoundMatches:le,error:de,route:Ae}=qs(L.pathname);return{matches:le,pendingActionResult:[Ae.id,{type:"error",error:de}]}}}let X,ae=Oi(q,L);if(!ae.route.action&&!ae.route.lazy)X={type:"error",error:St(405,{method:w.method,pathname:L.pathname,routeId:ae.route.id})};else{let K=Pn(s,l,w,q,ae,Y?[]:a,z),le=await $n(w,K,z,null);if(X=le[ae.route.id],!X){for(let de of q)if(le[de.route.id]){X=le[de.route.id];break}}if(w.signal.aborted)return{shortCircuited:!0}}if(Jr(X)){let K;return Q&&Q.replace!=null?K=Q.replace:K=ud(X.response.headers.get("Location"),new URL(w.url),u,e.history)===E.location.pathname+E.location.search,await zr(w,X,!0,{submission:k,replace:K}),{shortCircuited:!0}}if(ft(X)){let K=Sr(q,ae.route.id);return(Q&&Q.replace)!==!0&&(H="PUSH"),{matches:q,pendingActionResult:[K.route.id,X,ae.route.id]}}return{matches:q,pendingActionResult:[ae.route.id,X]}}async function Oh(w,L,k,q,z,J,Y,Q,V,X,ae,K,le){let de=J||hl(L,Y),Ae=Y||Q||gd(de),Be=!$&&!X;if(z){if(Be){let Je=Ac(K);Qe({navigation:de,...Je!==void 0?{actionData:Je}:{}},{flushSync:ae})}let me=await Ya(k,L.pathname,w.signal);if(me.type==="aborted")return{shortCircuited:!0};if(me.type==="error"){if(me.partialMatches.length===0){let{matches:cn,route:$r}=vi(o);return{matches:cn,loaderData:{},errors:{[$r.id]:me.error}}}let Je=Sr(me.partialMatches).route.id;return{matches:me.partialMatches,loaderData:{},errors:{[Je]:me.error}}}else if(me.matches)k=me.matches;else{let{error:Je,notFoundMatches:cn,route:$r}=qs(L.pathname);return{matches:cn,loaderData:{},errors:{[$r.id]:Je}}}}let tt=c||o,{dsMatches:je,revalidatingFetchers:yt}=id(w,q,s,l,e.history,E,k,Ae,L,X?[]:a,X===!0,te,D,Se,Re,be,tt,u,e.patchRoutesOnNavigation!=null,K,le);if(ne=++U,!e.dataStrategy&&!je.some(me=>me.shouldLoad)&&!je.some(me=>me.route.middleware&&me.route.middleware.length>0)&&yt.length===0){let me=Pc();return on(L,{matches:k,loaderData:{},errors:K&&ft(K[1])?{[K[0]]:K[1].error}:null,...hd(K),...me?{fetchers:new Map(E.fetchers)}:{}},{flushSync:ae}),{shortCircuited:!0}}if(Be){let me={};if(!z){me.navigation=de;let Je=Ac(K);Je!==void 0&&(me.actionData=Je)}yt.length>0&&(me.fetchers=Dh(yt)),Qe(me,{flushSync:ae})}yt.forEach(me=>{tr(me.key),me.controller&&B.set(me.key,me.controller)});let Br=()=>yt.forEach(me=>tr(me.key));Z&&Z.signal.addEventListener("abort",Br);let{loaderResults:Hn,fetcherResults:mr}=await kc(je,yt,w,q);if(w.signal.aborted)return{shortCircuited:!0};Z&&Z.signal.removeEventListener("abort",Br),yt.forEach(me=>B.delete(me.key));let Bt=ji(Hn);if(Bt)return await zr(w,Bt.result,!0,{replace:V}),{shortCircuited:!0};if(Bt=ji(mr),Bt)return be.add(Bt.key),await zr(w,Bt.result,!0,{replace:V}),{shortCircuited:!0};let{loaderData:Is,errors:Vn}=pd(E,k,Hn,K,yt,mr);X&&E.errors&&(Vn={...E.errors,...Vn});let Ur=Pc(),Xa=Tc(ne),Za=Ur||Xa||yt.length>0;return{matches:k,loaderData:Is,errors:Vn,...Za?{fetchers:new Map(E.fetchers)}:{}}}function Ac(w){if(w&&!ft(w[1]))return{[w[0]]:w[1].data};if(E.actionData)return Object.keys(E.actionData).length===0?null:E.actionData}function Dh(w){return w.forEach(L=>{let k=E.fetchers.get(L.key),q=ta(void 0,k?k.data:void 0);E.fetchers.set(L.key,q)}),new Map(E.fetchers)}async function qh(w,L,k,q){tr(w);let z=(q&&q.flushSync)===!0,J=c||o,Y=xo(E.location,E.matches,u,k,L,q==null?void 0:q.relative),Q=yr(J,Y,u),V=Ka(Q,J,Y);if(V.active&&V.matches&&(Q=V.matches),!Q){er(w,L,St(404,{pathname:Y}),{flushSync:z});return}let{path:X,submission:ae,error:K}=ad(!0,Y,q);if(K){er(w,L,K,{flushSync:z});return}let le=e.getContext?await e.getContext():new Xu,de=(q&&q.preventScrollReset)===!0;if(ae&&Xe(ae.formMethod)){await Ih(w,L,X,Q,le,V.active,z,de,ae,q&&q.unstable_defaultShouldRevalidate);return}Re.set(w,{routeId:L,path:X}),await Fh(w,L,X,Q,le,V.active,z,de,ae)}async function Ih(w,L,k,q,z,J,Y,Q,V,X){Os(),Re.delete(w);let ae=E.fetchers.get(w);Zt(w,Pv(V,ae),{flushSync:Y});let K=new AbortController,le=pn(e.history,k,K.signal,V);if(J){let Pe=await Ya(q,new URL(le.url).pathname,le.signal,w);if(Pe.type==="aborted")return;if(Pe.type==="error"){er(w,L,Pe.error,{flushSync:Y});return}else if(Pe.matches)q=Pe.matches;else{er(w,L,St(404,{pathname:k}),{flushSync:Y});return}}let de=Oi(q,k);if(!de.route.action&&!de.route.lazy){let Pe=St(405,{method:V.formMethod,pathname:k,routeId:L});er(w,L,Pe,{flushSync:Y});return}B.set(w,K);let Ae=U,Be=Pn(s,l,le,q,de,a,z),tt=await $n(le,Be,z,w),je=tt[de.route.id];if(!je){for(let Pe of Be)if(tt[Pe.route.id]){je=tt[Pe.route.id];break}}if(le.signal.aborted){B.get(w)===K&&B.delete(w);return}if(Se.has(w)){if(Jr(je)||ft(je)){Zt(w,rr(void 0));return}}else{if(Jr(je))if(B.delete(w),ne>Ae){Zt(w,rr(void 0));return}else return be.add(w),Zt(w,ta(V)),zr(le,je,!1,{fetcherSubmission:V,preventScrollReset:Q});if(ft(je)){er(w,L,je.error);return}}let yt=E.navigation.location||E.location,Br=pn(e.history,yt,K.signal),Hn=c||o,mr=E.navigation.state!=="idle"?yr(Hn,E.navigation.location,u):E.matches;oe(mr,"Didn't find any matches after fetcher action");let Bt=++U;ce.set(w,Bt);let Is=ta(V,je.data);E.fetchers.set(w,Is);let{dsMatches:Vn,revalidatingFetchers:Ur}=id(Br,z,s,l,e.history,E,mr,V,yt,a,!1,te,D,Se,Re,be,Hn,u,e.patchRoutesOnNavigation!=null,[de.route.id,je],X);Ur.filter(Pe=>Pe.key!==w).forEach(Pe=>{let ei=Pe.key,Fc=E.fetchers.get(ei),Wh=ta(void 0,Fc?Fc.data:void 0);E.fetchers.set(ei,Wh),tr(ei),Pe.controller&&B.set(ei,Pe.controller)}),Qe({fetchers:new Map(E.fetchers)});let Xa=()=>Ur.forEach(Pe=>tr(Pe.key));K.signal.addEventListener("abort",Xa);let{loaderResults:Za,fetcherResults:me}=await kc(Vn,Ur,Br,z);if(K.signal.aborted)return;if(K.signal.removeEventListener("abort",Xa),ce.delete(w),B.delete(w),Ur.forEach(Pe=>B.delete(Pe.key)),E.fetchers.has(w)){let Pe=rr(je.data);E.fetchers.set(w,Pe)}let Je=ji(Za);if(Je)return zr(Br,Je.result,!1,{preventScrollReset:Q});if(Je=ji(me),Je)return be.add(Je.key),zr(Br,Je.result,!1,{preventScrollReset:Q});let{loaderData:cn,errors:$r}=pd(E,mr,Za,void 0,Ur,me);Tc(Bt),E.navigation.state==="loading"&&Bt>ne?(oe(H,"Expected pending action"),Z&&Z.abort(),on(E.navigation.location,{matches:mr,loaderData:cn,errors:$r,fetchers:new Map(E.fetchers)})):(Qe({errors:$r,loaderData:md(E.loaderData,cn,mr,$r),fetchers:new Map(E.fetchers)}),te=!1)}async function Fh(w,L,k,q,z,J,Y,Q,V){let X=E.fetchers.get(w);Zt(w,ta(V,X?X.data:void 0),{flushSync:Y});let ae=new AbortController,K=pn(e.history,k,ae.signal);if(J){let je=await Ya(q,new URL(K.url).pathname,K.signal,w);if(je.type==="aborted")return;if(je.type==="error"){er(w,L,je.error,{flushSync:Y});return}else if(je.matches)q=je.matches;else{er(w,L,St(404,{pathname:k}),{flushSync:Y});return}}let le=Oi(q,k);B.set(w,ae);let de=U,Ae=Pn(s,l,K,q,le,a,z),tt=(await $n(K,Ae,z,w))[le.route.id];if(B.get(w)===ae&&B.delete(w),!K.signal.aborted){if(Se.has(w)){Zt(w,rr(void 0));return}if(Jr(tt))if(ne>de){Zt(w,rr(void 0));return}else{be.add(w),await zr(K,tt,!1,{preventScrollReset:Q});return}if(ft(tt)){er(w,L,tt.error);return}Zt(w,rr(tt.data))}}async function zr(w,L,k,{submission:q,fetcherSubmission:z,preventScrollReset:J,replace:Y}={}){k||(F==null||F.resolve(),F=null),L.response.headers.has("X-Remix-Revalidate")&&(te=!0);let Q=L.response.headers.get("Location");oe(Q,"Expected a Location header on the redirect Response"),Q=ud(Q,new URL(w.url),u,e.history);let V=Da(E.location,Q,{_isRedirect:!0});if(n){let Ae=!1;if(L.response.headers.has("X-Remix-Reload-Document"))Ae=!0;else if(fc(Q)){const Be=Hm(Q,!0);Ae=Be.origin!==r.location.origin||kt(Be.pathname,u)==null}if(Ae){Y?r.location.replace(Q):r.location.assign(Q);return}}Z=null;let X=Y===!0||L.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:ae,formAction:K,formEncType:le}=E.navigation;!q&&!z&&ae&&K&&le&&(q=gd(E.navigation));let de=q||z;if(lv.has(L.response.status)&&de&&Xe(de.formMethod))await Fr(X,V,{submission:{...de,formAction:Q},preventScrollReset:J||se,enableViewTransition:k?xe:void 0});else{let Ae=hl(V,q);await Fr(X,V,{overrideNavigation:Ae,fetcherSubmission:z,preventScrollReset:J||se,enableViewTransition:k?xe:void 0})}}async function $n(w,L,k,q){var Y;let z,J={};try{z=await xv(m,w,L,q,k,!1)}catch(Q){return L.filter(V=>V.shouldLoad).forEach(V=>{J[V.route.id]={type:"error",error:Q}}),J}if(w.signal.aborted)return J;if(!Xe(w.method))for(let Q of L){if(((Y=z[Q.route.id])==null?void 0:Y.type)==="error")break;!z.hasOwnProperty(Q.route.id)&&!E.loaderData.hasOwnProperty(Q.route.id)&&(!E.errors||!E.errors.hasOwnProperty(Q.route.id))&&Q.shouldCallHandler()&&(z[Q.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${Q.route.id}`)})}for(let[Q,V]of Object.entries(z))if(Lv(V)){let X=V.result;J[Q]={type:"redirect",response:yv(X,w,Q,L,u)}}else J[Q]=await bv(V);return J}async function kc(w,L,k,q){let z=$n(k,w,q,null),J=Promise.all(L.map(async V=>{if(V.matches&&V.match&&V.request&&V.controller){let ae=(await $n(V.request,V.matches,q,V.key))[V.match.route.id];return{[V.key]:ae}}else return Promise.resolve({[V.key]:{type:"error",error:St(404,{pathname:V.path})}})})),Y=await z,Q=(await J).reduce((V,X)=>Object.assign(V,X),{});return{loaderResults:Y,fetcherResults:Q}}function Os(){te=!0,Re.forEach((w,L)=>{B.has(L)&&D.add(L),tr(L)})}function Zt(w,L,k={}){E.fetchers.set(w,L),Qe({fetchers:new Map(E.fetchers)},{flushSync:(k&&k.flushSync)===!0})}function er(w,L,k,q={}){let z=Sr(E.matches,L);Ds(w),Qe({errors:{[z.route.id]:k},fetchers:new Map(E.fetchers)},{flushSync:(q&&q.flushSync)===!0})}function Mc(w){return Ie.set(w,(Ie.get(w)||0)+1),Se.has(w)&&Se.delete(w),E.fetchers.get(w)||ov}function zh(w,L){tr(w,L==null?void 0:L.reason),Zt(w,rr(null))}function Ds(w){let L=E.fetchers.get(w);B.has(w)&&!(L&&L.state==="loading"&&ce.has(w))&&tr(w),Re.delete(w),ce.delete(w),be.delete(w),Se.delete(w),D.delete(w),E.fetchers.delete(w)}function Bh(w){let L=(Ie.get(w)||0)-1;L<=0?(Ie.delete(w),Se.add(w)):Ie.set(w,L),Qe({fetchers:new Map(E.fetchers)})}function tr(w,L){let k=B.get(w);k&&(k.abort(L),B.delete(w))}function Nc(w){for(let L of w){let k=Mc(L),q=rr(k.data);E.fetchers.set(L,q)}}function Pc(){let w=[],L=!1;for(let k of be){let q=E.fetchers.get(k);oe(q,`Expected fetcher: ${k}`),q.state==="loading"&&(be.delete(k),w.push(k),L=!0)}return Nc(w),L}function Tc(w){let L=[];for(let[k,q]of ce)if(q<w){let z=E.fetchers.get(k);oe(z,`Expected fetcher: ${k}`),z.state==="loading"&&(tr(k),ce.delete(k),L.push(k))}return Nc(L),L.length>0}function Uh(w,L){let k=E.blockers.get(w)||ea;return He.get(w)!==L&&He.set(w,L),k}function _c(w){E.blockers.delete(w),He.delete(w)}function Ja(w,L){let k=E.blockers.get(w)||ea;oe(k.state==="unblocked"&&L.state==="blocked"||k.state==="blocked"&&L.state==="blocked"||k.state==="blocked"&&L.state==="proceeding"||k.state==="blocked"&&L.state==="unblocked"||k.state==="proceeding"&&L.state==="unblocked",`Invalid blocker state transition: ${k.state} -> ${L.state}`);let q=new Map(E.blockers);q.set(w,L),Qe({blockers:q})}function Oc({currentLocation:w,nextLocation:L,historyAction:k}){if(He.size===0)return;He.size>1&&De(!1,"A router only supports one blocker at a time");let q=Array.from(He.entries()),[z,J]=q[q.length-1],Y=E.blockers.get(z);if(!(Y&&Y.state==="proceeding")&&J({currentLocation:w,nextLocation:L,historyAction:k}))return z}function qs(w){let L=St(404,{pathname:w}),k=c||o,{matches:q,route:z}=vi(k);return{notFoundMatches:q,route:z,error:L}}function $h(w,L,k){if(g=w,S=L,v=k||null,!h&&E.navigation===ml){h=!0;let q=qc(E.location,E.matches);q!=null&&Qe({restoreScrollPosition:q})}return()=>{g=null,S=null,v=null}}function Dc(w,L){return v&&v(w,L.map(q=>_x(q,E.loaderData)))||w.key}function Hh(w,L){if(g&&S){let k=Dc(w,L);g[k]=S()}}function qc(w,L){if(g){let k=Dc(w,L),q=g[k];if(typeof q=="number")return q}return null}function Ka(w,L,k){if(e.patchRoutesOnNavigation)if(w){if(Object.keys(w[0].params).length>0)return{active:!0,matches:oa(L,k,u,!0)}}else return{active:!0,matches:oa(L,k,u,!0)||[]};return{active:!1,matches:null}}async function Ya(w,L,k,q){if(!e.patchRoutesOnNavigation)return{type:"success",matches:w};let z=w;for(;;){let J=c==null,Y=c||o,Q=l;try{await e.patchRoutesOnNavigation({signal:k,path:L,matches:z,fetcherKey:q,patch:(ae,K)=>{k.aborted||sd(ae,K,Y,Q,s,!1)}})}catch(ae){return{type:"error",error:ae,partialMatches:z}}finally{J&&!k.aborted&&(o=[...o])}if(k.aborted)return{type:"aborted"};let V=yr(Y,L,u),X=null;if(V){if(Object.keys(V[0].params).length===0)return{type:"success",matches:V};if(X=oa(Y,L,u,!0),!(X&&z.length<X.length&&Ic(z,X.slice(0,z.length))))return{type:"success",matches:V}}if(X||(X=oa(Y,L,u,!0)),!X||Ic(z,X))return{type:"success",matches:null};z=X}}function Ic(w,L){return w.length===L.length&&w.every((k,q)=>k.route.id===L[q].route.id)}function Vh(w){l={},c=qa(w,s,void 0,l)}function Gh(w,L,k=!1){let q=c==null;sd(w,L,c||o,l,s,k),q&&(o=[...o],Qe({}))}return _={get basename(){return u},get future(){return d},get state(){return E},get routes(){return o},get window(){return r},initialize:Mh,subscribe:Ph,enableScrollRestoration:$h,navigate:Lc,fetch:qh,revalidate:Th,createHref:w=>e.history.createHref(w),encodeLocation:w=>e.history.encodeLocation(w),getFetcher:Mc,resetFetcher:zh,deleteFetcher:Bh,dispose:Nh,getBlocker:Uh,deleteBlocker:_c,patchRoutes:Gh,_internalFetchControllers:B,_internalSetRoutes:Vh,_internalSetStateDoNotUseOrYouWillBreakYourApp(w){Qe(w)}},e.unstable_instrumentations&&(_=Zx(_,e.unstable_instrumentations.map(w=>w.router).filter(Boolean))),_}function dv(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function xo(e,r,n,a,i,s){let l,o;if(i){l=[];for(let u of r)if(l.push(u),u.route.id===i){o=u;break}}else l=r,o=r[r.length-1];let c=ks(a||".",gc(l),kt(e.pathname,n)||e.pathname,s==="path");if(a==null&&(c.search=e.search,c.hash=e.hash),(a==null||a===""||a===".")&&o){let u=jc(c.search);if(o.route.index&&!u)c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index";else if(!o.route.index&&u){let m=new URLSearchParams(c.search),d=m.getAll("index");m.delete("index"),d.filter(j=>j).forEach(j=>m.append("index",j));let f=m.toString();c.search=f?`?${f}`:""}}return n!=="/"&&(c.pathname=Wx({basename:n,pathname:c.pathname})),Jt(c)}function ad(e,r,n){if(!n||!dv(n))return{path:r};if(n.formMethod&&!Mv(n.formMethod))return{path:r,error:St(405,{method:n.formMethod})};let a=()=>({path:r,error:St(400,{type:"invalid-body"})}),s=(n.formMethod||"get").toUpperCase(),l=oh(r);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!Xe(s))return a();let d=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((f,[j,g])=>`${f}${j}=${g}
`,""):String(n.body);return{path:r,submission:{formMethod:s,formAction:l,formEncType:n.formEncType,formData:void 0,json:void 0,text:d}}}else if(n.formEncType==="application/json"){if(!Xe(s))return a();try{let d=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:r,submission:{formMethod:s,formAction:l,formEncType:n.formEncType,formData:void 0,json:d,text:void 0}}}catch{return a()}}}oe(typeof FormData=="function","FormData is not available in this environment");let o,c;if(n.formData)o=jo(n.formData),c=n.formData;else if(n.body instanceof FormData)o=jo(n.body),c=n.body;else if(n.body instanceof URLSearchParams)o=n.body,c=dd(o);else if(n.body==null)o=new URLSearchParams,c=new FormData;else try{o=new URLSearchParams(n.body),c=dd(o)}catch{return a()}let u={formMethod:s,formAction:l,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Xe(u.formMethod))return{path:r,submission:u};let m=Kt(r);return e&&m.search&&jc(m.search)&&o.append("index",""),m.search=`?${o}`,{path:Jt(m),submission:u}}function id(e,r,n,a,i,s,l,o,c,u,m,d,f,j,g,v,S,h,p,x,A){var O;let M=x?ft(x[1])?x[1].error:x[1].data:void 0,T=i.createURL(s.location),_=i.createURL(c),E;if(m&&s.errors){let $=Object.keys(s.errors)[0];E=l.findIndex(te=>te.route.id===$)}else if(x&&ft(x[1])){let $=x[0];E=l.findIndex(te=>te.route.id===$)-1}let H=x?x[1].statusCode:void 0,F=H&&H>=400,se={currentUrl:T,currentParams:((O=s.matches[0])==null?void 0:O.params)||{},nextUrl:_,nextParams:l[0].params,...o,actionResult:M,actionStatus:H},Z=Va(l),xe=l.map(($,te)=>{let{route:D}=$,B=null;if(E!=null&&te>E)B=!1;else if(D.lazy)B=!0;else if(!xc(D))B=!1;else if(m){let{shouldLoad:be}=rh(D,s.loaderData,s.errors);B=be}else pv(s.loaderData,s.matches[te],$)&&(B=!0);if(B!==null)return vo(n,a,e,Z,$,u,r,B);let U=!1;typeof A=="boolean"?U=A:F?U=!1:(d||T.pathname+T.search===_.pathname+_.search||T.search!==_.search||mv(s.matches[te],$))&&(U=!0);let ne={...se,defaultShouldRevalidate:U},ce=va($,ne);return vo(n,a,e,Z,$,u,r,ce,ne,A)}),ee=[];return g.forEach(($,te)=>{if(m||!l.some(Ie=>Ie.route.id===$.routeId)||j.has(te))return;let D=s.fetchers.get(te),B=D&&D.state!=="idle"&&D.data===void 0,U=yr(S,$.path,h);if(!U){if(p&&B)return;ee.push({key:te,routeId:$.routeId,path:$.path,matches:null,match:null,request:null,controller:null});return}if(v.has(te))return;let ne=Oi(U,$.path),ce=new AbortController,be=pn(i,$.path,ce.signal),Re=null;if(f.has(te))f.delete(te),Re=Pn(n,a,be,U,ne,u,r);else if(B)d&&(Re=Pn(n,a,be,U,ne,u,r));else{let Ie;typeof A=="boolean"?Ie=A:F?Ie=!1:Ie=d;let Se={...se,defaultShouldRevalidate:Ie};va(ne,Se)&&(Re=Pn(n,a,be,U,ne,u,r,Se))}Re&&ee.push({key:te,routeId:$.routeId,path:$.path,matches:Re,match:ne,request:be,controller:ce})}),{dsMatches:xe,revalidatingFetchers:ee}}function xc(e){return e.loader!=null||e.middleware!=null&&e.middleware.length>0}function rh(e,r,n){if(e.lazy)return{shouldLoad:!0,renderFallback:!0};if(!xc(e))return{shouldLoad:!1,renderFallback:!1};let a=r!=null&&e.id in r,i=n!=null&&n[e.id]!==void 0;if(!a&&i)return{shouldLoad:!1,renderFallback:!1};if(typeof e.loader=="function"&&e.loader.hydrate===!0)return{shouldLoad:!0,renderFallback:!a};let s=!a&&!i;return{shouldLoad:s,renderFallback:s}}function pv(e,r,n){let a=!r||n.route.id!==r.route.id,i=!e.hasOwnProperty(n.route.id);return a||i}function mv(e,r){let n=e.route.path;return e.pathname!==r.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==r.params["*"]}function va(e,r){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(r);if(typeof n=="boolean")return n}return r.defaultShouldRevalidate}function sd(e,r,n,a,i,s){let l;if(e){let u=a[e];oe(u,`No route found to patch children into: routeId = ${e}`),u.children||(u.children=[]),l=u.children}else l=n;let o=[],c=[];if(r.forEach(u=>{let m=l.find(d=>nh(u,d));m?c.push({existingRoute:m,newRoute:u}):o.push(u)}),o.length>0){let u=qa(o,i,[e||"_","patch",String((l==null?void 0:l.length)||"0")],a);l.push(...u)}if(s&&c.length>0)for(let u=0;u<c.length;u++){let{existingRoute:m,newRoute:d}=c[u],f=m,[j]=qa([d],i,[],{},!0);Object.assign(f,{element:j.element?j.element:f.element,errorElement:j.errorElement?j.errorElement:f.errorElement,hydrateFallbackElement:j.hydrateFallbackElement?j.hydrateFallbackElement:f.hydrateFallbackElement})}}function nh(e,r){var n;return"id"in e&&"id"in r&&e.id===r.id?!0:e.index===r.index&&e.path===r.path&&e.caseSensitive===r.caseSensitive?(!e.children||e.children.length===0)&&(!r.children||r.children.length===0)?!0:((n=e.children)==null?void 0:n.every((a,i)=>{var s;return(s=r.children)==null?void 0:s.some(l=>nh(a,l))}))??!1:!1}var ld=new WeakMap,ah=({key:e,route:r,manifest:n,mapRouteProperties:a})=>{let i=n[r.id];if(oe(i,"No route found in manifest"),!i.lazy||typeof i.lazy!="object")return;let s=i.lazy[e];if(!s)return;let l=ld.get(i);l||(l={},ld.set(i,l));let o=l[e];if(o)return o;let c=(async()=>{let u=Mx(e),d=i[e]!==void 0&&e!=="hasErrorBoundary";if(u)De(!u,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),l[e]=Promise.resolve();else if(d)De(!1,`Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let f=await s();f!=null&&(Object.assign(i,{[e]:f}),Object.assign(i,a(i)))}typeof i.lazy=="object"&&(i.lazy[e]=void 0,Object.values(i.lazy).every(f=>f===void 0)&&(i.lazy=void 0))})();return l[e]=c,c},od=new WeakMap;function hv(e,r,n,a,i){let s=n[e.id];if(oe(s,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let m=od.get(s);if(m)return{lazyRoutePromise:m,lazyHandlerPromise:m};let d=(async()=>{oe(typeof e.lazy=="function","No lazy route function found");let f=await e.lazy(),j={};for(let g in f){let v=f[g];if(v===void 0)continue;let S=Px(g),p=s[g]!==void 0&&g!=="hasErrorBoundary";S?De(!S,"Route property "+g+" is not a supported property to be returned from a lazy route function. This property will be ignored."):p?De(!p,`Route "${s.id}" has a static property "${g}" defined but its lazy function is also returning a value for this property. The lazy route property "${g}" will be ignored.`):j[g]=v}Object.assign(s,j),Object.assign(s,{...a(s),lazy:void 0})})();return od.set(s,d),d.catch(()=>{}),{lazyRoutePromise:d,lazyHandlerPromise:d}}let l=Object.keys(e.lazy),o=[],c;for(let m of l){if(i&&i.includes(m))continue;let d=ah({key:m,route:e,manifest:n,mapRouteProperties:a});d&&(o.push(d),m===r&&(c=d))}let u=o.length>0?Promise.all(o).then(()=>{}):void 0;return u==null||u.catch(()=>{}),c==null||c.catch(()=>{}),{lazyRoutePromise:u,lazyHandlerPromise:c}}async function cd(e){let r=e.matches.filter(i=>i.shouldLoad),n={};return(await Promise.all(r.map(i=>i.resolve()))).forEach((i,s)=>{n[r[s].route.id]=i}),n}async function fv(e){return e.matches.some(r=>r.route.middleware)?ih(e,()=>cd(e)):cd(e)}function ih(e,r){return gv(e,r,a=>{if(kv(a))throw a;return a},Cv,n);function n(a,i,s){if(s)return Promise.resolve(Object.assign(s.value,{[i]:{type:"error",result:a}}));{let{matches:l}=e,o=Math.min(Math.max(l.findIndex(u=>u.route.id===i),0),Math.max(l.findIndex(u=>u.shouldCallHandler()),0)),c=Sr(l,l[o].route.id).route.id;return Promise.resolve({[c]:{type:"error",result:a}})}}}async function gv(e,r,n,a,i){let{matches:s,request:l,params:o,context:c,unstable_pattern:u}=e,m=s.flatMap(f=>f.route.middleware?f.route.middleware.map(j=>[f.route.id,j]):[]);return await sh({request:l,params:o,context:c,unstable_pattern:u},m,r,n,a,i)}async function sh(e,r,n,a,i,s,l=0){let{request:o}=e;if(o.signal.aborted)throw o.signal.reason??new Error(`Request aborted: ${o.method} ${o.url}`);let c=r[l];if(!c)return await n();let[u,m]=c,d,f=async()=>{if(d)throw new Error("You may only call `next()` once per middleware");try{return d={value:await sh(e,r,n,a,i,s,l+1)},d.value}catch(j){return d={value:await s(j,u,d)},d.value}};try{let j=await m(e,f),g=j!=null?a(j):void 0;return i(g)?g:d?g??d.value:(d={value:await f()},d.value)}catch(j){return await s(j,u,d)}}function lh(e,r,n,a,i){let s=ah({key:"middleware",route:a.route,manifest:r,mapRouteProperties:e}),l=hv(a.route,Xe(n.method)?"action":"loader",r,e,i);return{middleware:s,route:l.lazyRoutePromise,handler:l.lazyHandlerPromise}}function vo(e,r,n,a,i,s,l,o,c=null,u){let m=!1,d=lh(e,r,n,i,s);return{...i,_lazyPromises:d,shouldLoad:o,shouldRevalidateArgs:c,shouldCallHandler(f){return m=!0,c?typeof u=="boolean"?va(i,{...c,defaultShouldRevalidate:u}):typeof f=="boolean"?va(i,{...c,defaultShouldRevalidate:f}):va(i,c):o},resolve(f){let{lazy:j,loader:g,middleware:v}=i.route,S=m||o||f&&!Xe(n.method)&&(j||g),h=v&&v.length>0&&!g&&!j;return S&&(Xe(n.method)||!h)?vv({request:n,unstable_pattern:a,match:i,lazyHandlerPromise:d==null?void 0:d.handler,lazyRoutePromise:d==null?void 0:d.route,handlerOverride:f,scopedContext:l}):Promise.resolve({type:"data",result:void 0})}}}function Pn(e,r,n,a,i,s,l,o=null){return a.map(c=>c.route.id!==i.route.id?{...c,shouldLoad:!1,shouldRevalidateArgs:o,shouldCallHandler:()=>!1,_lazyPromises:lh(e,r,n,c,s),resolve:()=>Promise.resolve({type:"data",result:void 0})}:vo(e,r,n,Va(a),c,s,l,!0,o))}async function xv(e,r,n,a,i,s){n.some(u=>{var m;return(m=u._lazyPromises)==null?void 0:m.middleware})&&await Promise.all(n.map(u=>{var m;return(m=u._lazyPromises)==null?void 0:m.middleware}));let l={request:r,unstable_pattern:Va(n),params:n[0].params,context:i,matches:n},c=await e({...l,fetcherKey:a,runClientMiddleware:u=>{let m=l;return ih(m,()=>u({...m,fetcherKey:a,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(n.flatMap(u=>{var m,d;return[(m=u._lazyPromises)==null?void 0:m.handler,(d=u._lazyPromises)==null?void 0:d.route]}))}catch{}return c}async function vv({request:e,unstable_pattern:r,match:n,lazyHandlerPromise:a,lazyRoutePromise:i,handlerOverride:s,scopedContext:l}){let o,c,u=Xe(e.method),m=u?"action":"loader",d=f=>{let j,g=new Promise((h,p)=>j=p);c=()=>j(),e.signal.addEventListener("abort",c);let v=h=>typeof f!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${m}" [routeId: ${n.route.id}]`)):f({request:e,unstable_pattern:r,params:n.params,context:l},...h!==void 0?[h]:[]),S=(async()=>{try{return{type:"data",result:await(s?s(p=>v(p)):v())}}catch(h){return{type:"error",result:h}}})();return Promise.race([S,g])};try{let f=u?n.route.action:n.route.loader;if(a||i)if(f){let j,[g]=await Promise.all([d(f).catch(v=>{j=v}),a,i]);if(j!==void 0)throw j;o=g}else{await a;let j=u?n.route.action:n.route.loader;if(j)[o]=await Promise.all([d(j),i]);else if(m==="action"){let g=new URL(e.url),v=g.pathname+g.search;throw St(405,{method:e.method,pathname:v,routeId:n.route.id})}else return{type:"data",result:void 0}}else if(f)o=await d(f);else{let j=new URL(e.url),g=j.pathname+j.search;throw St(404,{pathname:g})}}catch(f){return{type:"error",result:f}}finally{c&&e.signal.removeEventListener("abort",c)}return o}async function jv(e){let r=e.headers.get("Content-Type");return r&&/\bapplication\/json\b/.test(r)?e.body==null?null:e.json():e.text()}async function bv(e){var a,i,s,l,o;let{result:r,type:n}=e;if(vc(r)){let c;try{c=await jv(r)}catch(u){return{type:"error",error:u}}return n==="error"?{type:"error",error:new Ha(r.status,r.statusText,c),statusCode:r.status,headers:r.headers}:{type:"data",data:c,statusCode:r.status,headers:r.headers}}return n==="error"?fd(r)?r.data instanceof Error?{type:"error",error:r.data,statusCode:(a=r.init)==null?void 0:a.status,headers:(i=r.init)!=null&&i.headers?new Headers(r.init.headers):void 0}:{type:"error",error:Ev(r),statusCode:Ia(r)?r.status:void 0,headers:(s=r.init)!=null&&s.headers?new Headers(r.init.headers):void 0}:{type:"error",error:r,statusCode:Ia(r)?r.status:void 0}:fd(r)?{type:"data",data:r.data,statusCode:(l=r.init)==null?void 0:l.status,headers:(o=r.init)!=null&&o.headers?new Headers(r.init.headers):void 0}:{type:"data",data:r}}function yv(e,r,n,a,i){let s=e.headers.get("Location");if(oe(s,"Redirects returned/thrown from loaders/actions must have a Location header"),!fc(s)){let l=a.slice(0,a.findIndex(o=>o.route.id===n)+1);s=xo(new URL(r.url),l,i,s),e.headers.set("Location",s)}return e}function ud(e,r,n,a){let i=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(fc(e)){let s=e,l=s.startsWith("//")?new URL(r.protocol+s):new URL(s);if(i.includes(l.protocol))throw new Error("Invalid redirect location");let o=kt(l.pathname,n)!=null;if(l.origin===r.origin&&o)return l.pathname+l.search+l.hash}try{let s=a.createURL(e);if(i.includes(s.protocol))throw new Error("Invalid redirect location")}catch{}return e}function pn(e,r,n,a){let i=e.createURL(oh(r)).toString(),s={signal:n};if(a&&Xe(a.formMethod)){let{formMethod:l,formEncType:o}=a;s.method=l.toUpperCase(),o==="application/json"?(s.headers=new Headers({"Content-Type":o}),s.body=JSON.stringify(a.json)):o==="text/plain"?s.body=a.text:o==="application/x-www-form-urlencoded"&&a.formData?s.body=jo(a.formData):s.body=a.formData}return new Request(i,s)}function jo(e){let r=new URLSearchParams;for(let[n,a]of e.entries())r.append(n,typeof a=="string"?a:a.name);return r}function dd(e){let r=new FormData;for(let[n,a]of e.entries())r.append(n,a);return r}function Sv(e,r,n,a=!1,i=!1){let s={},l=null,o,c=!1,u={},m=n&&ft(n[1])?n[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in r))return;let f=d.route.id,j=r[f];if(oe(!Jr(j),"Cannot handle redirect results in processLoaderData"),ft(j)){let g=j.error;if(m!==void 0&&(g=m,m=void 0),l=l||{},i)l[f]=g;else{let v=Sr(e,f);l[v.route.id]==null&&(l[v.route.id]=g)}a||(s[f]=th),c||(c=!0,o=Ia(j.error)?j.error.status:500),j.headers&&(u[f]=j.headers)}else s[f]=j.data,j.statusCode&&j.statusCode!==200&&!c&&(o=j.statusCode),j.headers&&(u[f]=j.headers)}),m!==void 0&&n&&(l={[n[0]]:m},n[2]&&(s[n[2]]=void 0)),{loaderData:s,errors:l,statusCode:o||200,loaderHeaders:u}}function pd(e,r,n,a,i,s){let{loaderData:l,errors:o}=Sv(r,n,a);return i.filter(c=>!c.matches||c.matches.some(u=>u.shouldLoad)).forEach(c=>{let{key:u,match:m,controller:d}=c;if(d&&d.signal.aborted)return;let f=s[u];if(oe(f,"Did not find corresponding fetcher result"),ft(f)){let j=Sr(e.matches,m==null?void 0:m.route.id);o&&o[j.route.id]||(o={...o,[j.route.id]:f.error}),e.fetchers.delete(u)}else if(Jr(f))oe(!1,"Unhandled fetcher revalidation redirect");else{let j=rr(f.data);e.fetchers.set(u,j)}}),{loaderData:l,errors:o}}function md(e,r,n,a){let i=Object.entries(r).filter(([,s])=>s!==th).reduce((s,[l,o])=>(s[l]=o,s),{});for(let s of n){let l=s.route.id;if(!r.hasOwnProperty(l)&&e.hasOwnProperty(l)&&s.route.loader&&(i[l]=e[l]),a&&a.hasOwnProperty(l))break}return i}function hd(e){return e?ft(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Sr(e,r){return(r?e.slice(0,e.findIndex(a=>a.route.id===r)+1):[...e]).reverse().find(a=>a.route.hasErrorBoundary===!0)||e[0]}function vi(e){let r=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:r}],route:r}}function St(e,{pathname:r,routeId:n,method:a,type:i,message:s}={}){let l="Unknown Server Error",o="Unknown @remix-run/router error";return e===400?(l="Bad Request",a&&r&&n?o=`You made a ${a} request to "${r}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:i==="invalid-body"&&(o="Unable to encode submission body")):e===403?(l="Forbidden",o=`Route "${n}" does not match URL "${r}"`):e===404?(l="Not Found",o=`No route matches URL "${r}"`):e===405&&(l="Method Not Allowed",a&&r&&n?o=`You made a ${a.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:a&&(o=`Invalid request method "${a.toUpperCase()}"`)),new Ha(e||500,l,new Error(o),!0)}function ji(e){let r=Object.entries(e);for(let n=r.length-1;n>=0;n--){let[a,i]=r[n];if(Jr(i))return{key:a,result:i}}}function oh(e){let r=typeof e=="string"?Kt(e):e;return Jt({...r,hash:""})}function wv(e,r){return e.pathname!==r.pathname||e.search!==r.search?!1:e.hash===""?r.hash!=="":e.hash===r.hash?!0:r.hash!==""}function Ev(e){var r,n;return new Ha(((r=e.init)==null?void 0:r.status)??500,((n=e.init)==null?void 0:n.statusText)??"Internal Server Error",e.data)}function Cv(e){return e!=null&&typeof e=="object"&&Object.entries(e).every(([r,n])=>typeof r=="string"&&Rv(n))}function Rv(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function Lv(e){return vc(e.result)&&Zm.has(e.result.status)}function ft(e){return e.type==="error"}function Jr(e){return(e&&e.type)==="redirect"}function fd(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function vc(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Av(e){return Zm.has(e)}function kv(e){return vc(e)&&Av(e.status)&&e.headers.has("Location")}function Mv(e){return sv.has(e.toUpperCase())}function Xe(e){return av.has(e.toUpperCase())}function jc(e){return new URLSearchParams(e).getAll("index").some(r=>r==="")}function Oi(e,r){let n=typeof r=="string"?Kt(r).search:r.search;if(e[e.length-1].route.index&&jc(n||""))return e[e.length-1];let a=Qm(e);return a[a.length-1]}function gd(e){let{formMethod:r,formAction:n,formEncType:a,text:i,formData:s,json:l}=e;if(!(!r||!n||!a)){if(i!=null)return{formMethod:r,formAction:n,formEncType:a,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:r,formAction:n,formEncType:a,formData:s,json:void 0,text:void 0};if(l!==void 0)return{formMethod:r,formAction:n,formEncType:a,formData:void 0,json:l,text:void 0}}}function hl(e,r){return r?{state:"loading",location:e,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Nv(e,r){return{state:"submitting",location:e,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}}function ta(e,r){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:r}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:r}}function Pv(e,r){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:r?r.data:void 0}}function rr(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Tv(e,r){try{let n=e.sessionStorage.getItem(eh);if(n){let a=JSON.parse(n);for(let[i,s]of Object.entries(a||{}))s&&Array.isArray(s)&&r.set(i,new Set(s||[]))}}catch{}}function _v(e,r){if(r.size>0){let n={};for(let[a,i]of r)n[a]=[...i];try{e.sessionStorage.setItem(eh,JSON.stringify(n))}catch(a){De(!1,`Failed to save applied view transitions in sessionStorage (${a}).`)}}}function xd(){let e,r,n=new Promise((a,i)=>{e=async s=>{a(s);try{await n}catch{}},r=async s=>{i(s);try{await n}catch{}}});return{promise:n,resolve:e,reject:r}}var sn=R.createContext(null);sn.displayName="DataRouter";var Ga=R.createContext(null);Ga.displayName="DataRouterState";var ch=R.createContext(!1);function Ov(){return R.useContext(ch)}var bc=R.createContext({isTransitioning:!1});bc.displayName="ViewTransition";var uh=R.createContext(new Map);uh.displayName="Fetchers";var Dv=R.createContext(null);Dv.displayName="Await";var Mt=R.createContext(null);Mt.displayName="Navigation";var Ms=R.createContext(null);Ms.displayName="Location";var Yt=R.createContext({outlet:null,matches:[],isDataRoute:!1});Yt.displayName="Route";var yc=R.createContext(null);yc.displayName="RouteError";var dh="REACT_ROUTER_ERROR",qv="REDIRECT",Iv="ROUTE_ERROR_RESPONSE";function Fv(e){if(e.startsWith(`${dh}:${qv}:{`))try{let r=JSON.parse(e.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function zv(e){if(e.startsWith(`${dh}:${Iv}:{`))try{let r=JSON.parse(e.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new Ha(r.status,r.statusText,r.data)}catch{}}function Bv(e,{relative:r}={}){oe(Wa(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=R.useContext(Mt),{hash:i,pathname:s,search:l}=Qa(e,{relative:r}),o=s;return n!=="/"&&(o=s==="/"?n:Ft([n,s])),a.createHref({pathname:o,search:l,hash:i})}function Wa(){return R.useContext(Ms)!=null}function Xt(){return oe(Wa(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Ms).location}var ph="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function mh(e){R.useContext(Mt).static||R.useLayoutEffect(e)}function Uv(){let{isDataRoute:e}=R.useContext(Yt);return e?nj():$v()}function $v(){oe(Wa(),"useNavigate() may be used only in the context of a <Router> component.");let e=R.useContext(sn),{basename:r,navigator:n}=R.useContext(Mt),{matches:a}=R.useContext(Yt),{pathname:i}=Xt(),s=JSON.stringify(gc(a)),l=R.useRef(!1);return mh(()=>{l.current=!0}),R.useCallback((c,u={})=>{if(De(l.current,ph),!l.current)return;if(typeof c=="number"){n.go(c);return}let m=ks(c,JSON.parse(s),i,u.relative==="path");e==null&&r!=="/"&&(m.pathname=m.pathname==="/"?r:Ft([r,m.pathname])),(u.replace?n.replace:n.push)(m,u.state,u)},[r,n,s,i,e])}var Hv=R.createContext(null);function Vv(e){let r=R.useContext(Yt).outlet;return R.useMemo(()=>r&&R.createElement(Hv.Provider,{value:e},r),[r,e])}function Qa(e,{relative:r}={}){let{matches:n}=R.useContext(Yt),{pathname:a}=Xt(),i=JSON.stringify(gc(n));return R.useMemo(()=>ks(e,JSON.parse(i),a,r==="path"),[e,i,a,r])}function Gv(e,r,n){oe(Wa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=R.useContext(Mt),{matches:i}=R.useContext(Yt),s=i[i.length-1],l=s?s.params:{},o=s?s.pathname:"/",c=s?s.pathnameBase:"/",u=s&&s.route;{let S=u&&u.path||"";fh(o,!u||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let m=Xt(),d;d=m;let f=d.pathname||"/",j=f;if(c!=="/"){let S=c.replace(/^\//,"").split("/");j="/"+f.replace(/^\//,"").split("/").slice(S.length).join("/")}let g=yr(e,{pathname:j});return De(u||g!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),De(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Yv(g&&g.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:Ft([c,a.encodeLocation?a.encodeLocation(S.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:Ft([c,a.encodeLocation?a.encodeLocation(S.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),i,n)}function Wv(){let e=rj(),r=Ia(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:a},s={padding:"2px 4px",backgroundColor:a},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:s},"ErrorBoundary")," or"," ",R.createElement("code",{style:s},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},r),n?R.createElement("pre",{style:i},n):null,l)}var Qv=R.createElement(Wv,null),hh=class extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){this.props.onError?this.props.onError(e,r):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=zv(e.digest);n&&(e=n)}let r=e!==void 0?R.createElement(Yt.Provider,{value:this.props.routeContext},R.createElement(yc.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?R.createElement(Jv,{error:e},r):r}};hh.contextType=ch;var fl=new WeakMap;function Jv({children:e,error:r}){let{basename:n}=R.useContext(Mt);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let a=Fv(r.digest);if(a){let i=fl.get(r);if(i)throw i;let s=Km(a.location,n);if(Jm&&!fl.get(r))if(s.isExternal||a.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const l=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:a.replace}));throw fl.set(r,l),l}return R.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return e}function Kv({routeContext:e,match:r,children:n}){let a=R.useContext(sn);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),R.createElement(Yt.Provider,{value:e},n)}function Yv(e,r=[],n){let a=n==null?void 0:n.state;if(e==null){if(!a)return null;if(a.errors)e=a.matches;else if(r.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let i=e,s=a==null?void 0:a.errors;if(s!=null){let m=i.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);oe(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,m+1))}let l=!1,o=-1;if(n&&a){l=a.renderFallback;for(let m=0;m<i.length;m++){let d=i[m];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(o=m),d.route.id){let{loaderData:f,errors:j}=a,g=d.route.loader&&!f.hasOwnProperty(d.route.id)&&(!j||j[d.route.id]===void 0);if(d.route.lazy||g){n.isStatic&&(l=!0),o>=0?i=i.slice(0,o+1):i=[i[0]];break}}}}let c=n==null?void 0:n.onError,u=a&&c?(m,d)=>{var f,j;c(m,{location:a.location,params:((j=(f=a.matches)==null?void 0:f[0])==null?void 0:j.params)??{},unstable_pattern:Va(a.matches),errorInfo:d})}:void 0;return i.reduceRight((m,d,f)=>{let j,g=!1,v=null,S=null;a&&(j=s&&d.route.id?s[d.route.id]:void 0,v=d.route.errorElement||Qv,l&&(o<0&&f===0?(fh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),g=!0,S=null):o===f&&(g=!0,S=d.route.hydrateFallbackElement||null)));let h=r.concat(i.slice(0,f+1)),p=()=>{let x;return j?x=v:g?x=S:d.route.Component?x=R.createElement(d.route.Component,null):d.route.element?x=d.route.element:x=m,R.createElement(Kv,{match:d,routeContext:{outlet:m,matches:h,isDataRoute:a!=null},children:x})};return a&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?R.createElement(hh,{location:a.location,revalidation:a.revalidation,component:v,error:j,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:u}):p()},null)}function Sc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xv(e){let r=R.useContext(sn);return oe(r,Sc(e)),r}function Zv(e){let r=R.useContext(Ga);return oe(r,Sc(e)),r}function ej(e){let r=R.useContext(Yt);return oe(r,Sc(e)),r}function wc(e){let r=ej(e),n=r.matches[r.matches.length-1];return oe(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function tj(){return wc("useRouteId")}function rj(){var a;let e=R.useContext(yc),r=Zv("useRouteError"),n=wc("useRouteError");return e!==void 0?e:(a=r.errors)==null?void 0:a[n]}function nj(){let{router:e}=Xv("useNavigate"),r=wc("useNavigate"),n=R.useRef(!1);return mh(()=>{n.current=!0}),R.useCallback(async(i,s={})=>{De(n.current,ph),n.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:r,...s}))},[e,r])}var vd={};function fh(e,r,n){!r&&!vd[e]&&(vd[e]=!0,De(!1,n))}var jd={};function bd(e,r){!e&&!jd[r]&&(jd[r]=!0,console.warn(r))}var aj="useOptimistic",yd=mf[aj],ij=()=>{};function sj(e){return yd?yd(e):[e,ij]}function lj(e){let r={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&De(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(r,{element:R.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&De(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(r,{hydrateFallbackElement:R.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&De(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(r,{errorElement:R.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),r}var oj=["HydrateFallback","hydrateFallbackElement"],cj=class{constructor(){this.status="pending",this.promise=new Promise((e,r)=>{this.resolve=n=>{this.status==="pending"&&(this.status="resolved",e(n))},this.reject=n=>{this.status==="pending"&&(this.status="rejected",r(n))}})}};function uj({router:e,flushSync:r,onError:n,unstable_useTransitions:a}){a=Ov()||a;let[s,l]=R.useState(e.state),[o,c]=sj(s),[u,m]=R.useState(),[d,f]=R.useState({isTransitioning:!1}),[j,g]=R.useState(),[v,S]=R.useState(),[h,p]=R.useState(),x=R.useRef(new Map),A=R.useCallback((E,{deletedFetchers:H,newErrors:F,flushSync:se,viewTransitionOpts:Z})=>{F&&n&&Object.values(F).forEach(ee=>{var O;return n(ee,{location:E.location,params:((O=E.matches[0])==null?void 0:O.params)??{},unstable_pattern:Va(E.matches)})}),E.fetchers.forEach((ee,O)=>{ee.data!==void 0&&x.current.set(O,ee.data)}),H.forEach(ee=>x.current.delete(ee)),bd(se===!1||r!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let xe=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(bd(Z==null||xe,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!Z||!xe){r&&se?r(()=>l(E)):a===!1?l(E):R.startTransition(()=>{a===!0&&c(ee=>Sd(ee,E)),l(E)});return}if(r&&se){r(()=>{v&&(j==null||j.resolve(),v.skipTransition()),f({isTransitioning:!0,flushSync:!0,currentLocation:Z.currentLocation,nextLocation:Z.nextLocation})});let ee=e.window.document.startViewTransition(()=>{r(()=>l(E))});ee.finished.finally(()=>{r(()=>{g(void 0),S(void 0),m(void 0),f({isTransitioning:!1})})}),r(()=>S(ee));return}v?(j==null||j.resolve(),v.skipTransition(),p({state:E,currentLocation:Z.currentLocation,nextLocation:Z.nextLocation})):(m(E),f({isTransitioning:!0,flushSync:!1,currentLocation:Z.currentLocation,nextLocation:Z.nextLocation}))},[e.window,r,v,j,a,c,n]);R.useLayoutEffect(()=>e.subscribe(A),[e,A]),R.useEffect(()=>{d.isTransitioning&&!d.flushSync&&g(new cj)},[d]),R.useEffect(()=>{if(j&&u&&e.window){let E=u,H=j.promise,F=e.window.document.startViewTransition(async()=>{a===!1?l(E):R.startTransition(()=>{a===!0&&c(se=>Sd(se,E)),l(E)}),await H});F.finished.finally(()=>{g(void 0),S(void 0),m(void 0),f({isTransitioning:!1})}),S(F)}},[u,j,e.window,a,c]),R.useEffect(()=>{j&&u&&o.location.key===u.location.key&&j.resolve()},[j,v,o.location,u]),R.useEffect(()=>{!d.isTransitioning&&h&&(m(h.state),f({isTransitioning:!0,flushSync:!1,currentLocation:h.currentLocation,nextLocation:h.nextLocation}),p(void 0))},[d.isTransitioning,h]);let M=R.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:E=>e.navigate(E),push:(E,H,F)=>e.navigate(E,{state:H,preventScrollReset:F==null?void 0:F.preventScrollReset}),replace:(E,H,F)=>e.navigate(E,{replace:!0,state:H,preventScrollReset:F==null?void 0:F.preventScrollReset})}),[e]),T=e.basename||"/",_=R.useMemo(()=>({router:e,navigator:M,static:!1,basename:T,onError:n}),[e,M,T,n]);return R.createElement(R.Fragment,null,R.createElement(sn.Provider,{value:_},R.createElement(Ga.Provider,{value:o},R.createElement(uh.Provider,{value:x.current},R.createElement(bc.Provider,{value:d},R.createElement(hj,{basename:T,location:o.location,navigationType:o.historyAction,navigator:M,unstable_useTransitions:a},R.createElement(dj,{routes:e.routes,future:e.future,state:o,isStatic:!1,onError:n})))))),null)}function Sd(e,r){return{...e,navigation:r.navigation.state!=="idle"?r.navigation:e.navigation,revalidation:r.revalidation!=="idle"?r.revalidation:e.revalidation,actionData:r.navigation.state!=="submitting"?r.actionData:e.actionData,fetchers:r.fetchers}}var dj=R.memo(pj);function pj({routes:e,future:r,state:n,isStatic:a,onError:i}){return Gv(e,void 0,{state:n,isStatic:a,onError:i})}function mj(e){return Vv(e.context)}function hj({basename:e="/",children:r=null,location:n,navigationType:a="POP",navigator:i,static:s=!1,unstable_useTransitions:l}){oe(!Wa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),c=R.useMemo(()=>({basename:o,navigator:i,static:s,unstable_useTransitions:l,future:{}}),[o,i,s,l]);typeof n=="string"&&(n=Kt(n));let{pathname:u="/",search:m="",hash:d="",state:f=null,key:j="default",unstable_mask:g}=n,v=R.useMemo(()=>{let S=kt(u,o);return S==null?null:{location:{pathname:S,search:m,hash:d,state:f,key:j,unstable_mask:g},navigationType:a}},[o,u,m,d,f,j,a,g]);return De(v!=null,`<Router basename="${o}"> is not able to match the URL "${u}${m}${d}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:R.createElement(Mt.Provider,{value:c},R.createElement(Ms.Provider,{children:r,value:v}))}var Di="get",qi="application/x-www-form-urlencoded";function Ns(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function fj(e){return Ns(e)&&e.tagName.toLowerCase()==="button"}function gj(e){return Ns(e)&&e.tagName.toLowerCase()==="form"}function xj(e){return Ns(e)&&e.tagName.toLowerCase()==="input"}function vj(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function jj(e,r){return e.button===0&&(!r||r==="_self")&&!vj(e)}var bi=null;function bj(){if(bi===null)try{new FormData(document.createElement("form"),0),bi=!1}catch{bi=!0}return bi}var yj=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gl(e){return e!=null&&!yj.has(e)?(De(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qi}"`),null):e}function Sj(e,r){let n,a,i,s,l;if(gj(e)){let o=e.getAttribute("action");a=o?kt(o,r):null,n=e.getAttribute("method")||Di,i=gl(e.getAttribute("enctype"))||qi,s=new FormData(e)}else if(fj(e)||xj(e)&&(e.type==="submit"||e.type==="image")){let o=e.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||o.getAttribute("action");if(a=c?kt(c,r):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||Di,i=gl(e.getAttribute("formenctype"))||gl(o.getAttribute("enctype"))||qi,s=new FormData(o,e),!bj()){let{name:u,type:m,value:d}=e;if(m==="image"){let f=u?`${u}.`:"";s.append(`${f}x`,"0"),s.append(`${f}y`,"0")}else u&&s.append(u,d)}}else{if(Ns(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Di,a=null,i=qi,l=e}return s&&i==="text/plain"&&(l=s,s=void 0),{action:a,method:n.toLowerCase(),encType:i,formData:s,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ec(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function wj(e,r,n,a){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${a}`:i.pathname=`${i.pathname}.${a}`:i.pathname==="/"?i.pathname=`_root.${a}`:r&&kt(i.pathname,r)==="/"?i.pathname=`${r.replace(/\/$/,"")}/_root.${a}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${a}`,i}async function Ej(e,r){if(e.id in r)return r[e.id];try{let n=await import(e.module);return r[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Cj(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Rj(e,r,n){let a=await Promise.all(e.map(async i=>{let s=r.routes[i.route.id];if(s){let l=await Ej(s,n);return l.links?l.links():[]}return[]}));return Mj(a.flat(1).filter(Cj).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function wd(e,r,n,a,i,s){let l=(c,u)=>n[u]?c.route.id!==n[u].route.id:!0,o=(c,u)=>{var m;return n[u].pathname!==c.pathname||((m=n[u].route.path)==null?void 0:m.endsWith("*"))&&n[u].params["*"]!==c.params["*"]};return s==="assets"?r.filter((c,u)=>l(c,u)||o(c,u)):s==="data"?r.filter((c,u)=>{var d;let m=a.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(l(c,u)||o(c,u))return!0;if(c.route.shouldRevalidate){let f=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function Lj(e,r,{includeHydrateFallback:n}={}){return Aj(e.map(a=>{let i=r.routes[a.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function Aj(e){return[...new Set(e)]}function kj(e){let r={},n=Object.keys(e).sort();for(let a of n)r[a]=e[a];return r}function Mj(e,r){let n=new Set;return new Set(r),e.reduce((a,i)=>{let s=JSON.stringify(kj(i));return n.has(s)||(n.add(s),a.push({key:s,link:i})),a},[])}function gh(){let e=R.useContext(sn);return Ec(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Nj(){let e=R.useContext(Ga);return Ec(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Cc=R.createContext(void 0);Cc.displayName="FrameworkContext";function xh(){let e=R.useContext(Cc);return Ec(e,"You must render this element inside a <HydratedRouter> element"),e}function Pj(e,r){let n=R.useContext(Cc),[a,i]=R.useState(!1),[s,l]=R.useState(!1),{onFocus:o,onBlur:c,onMouseEnter:u,onMouseLeave:m,onTouchStart:d}=r,f=R.useRef(null);R.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let v=h=>{h.forEach(p=>{l(p.isIntersecting)})},S=new IntersectionObserver(v,{threshold:.5});return f.current&&S.observe(f.current),()=>{S.disconnect()}}},[e]),R.useEffect(()=>{if(a){let v=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(v)}}},[a]);let j=()=>{i(!0)},g=()=>{i(!1),l(!1)};return n?e!=="intent"?[s,f,{}]:[s,f,{onFocus:ra(o,j),onBlur:ra(c,g),onMouseEnter:ra(u,j),onMouseLeave:ra(m,g),onTouchStart:ra(d,j)}]:[!1,f,{}]}function ra(e,r){return n=>{e&&e(n),n.defaultPrevented||r(n)}}function Tj({page:e,...r}){let{router:n}=gh(),a=R.useMemo(()=>yr(n.routes,e,n.basename),[n.routes,e,n.basename]);return a?R.createElement(Oj,{page:e,matches:a,...r}):null}function _j(e){let{manifest:r,routeModules:n}=xh(),[a,i]=R.useState([]);return R.useEffect(()=>{let s=!1;return Rj(e,r,n).then(l=>{s||i(l)}),()=>{s=!0}},[e,r,n]),a}function Oj({page:e,matches:r,...n}){let a=Xt(),{future:i,manifest:s,routeModules:l}=xh(),{basename:o}=gh(),{loaderData:c,matches:u}=Nj(),m=R.useMemo(()=>wd(e,r,u,s,a,"data"),[e,r,u,s,a]),d=R.useMemo(()=>wd(e,r,u,s,a,"assets"),[e,r,u,s,a]),f=R.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let v=new Set,S=!1;if(r.forEach(p=>{var A;let x=s.routes[p.route.id];!x||!x.hasLoader||(!m.some(M=>M.route.id===p.route.id)&&p.route.id in c&&((A=l[p.route.id])!=null&&A.shouldRevalidate)||x.hasClientLoader?S=!0:v.add(p.route.id))}),v.size===0)return[];let h=wj(e,o,i.unstable_trailingSlashAwareDataRequests,"data");return S&&v.size>0&&h.searchParams.set("_routes",r.filter(p=>v.has(p.route.id)).map(p=>p.route.id).join(",")),[h.pathname+h.search]},[o,i.unstable_trailingSlashAwareDataRequests,c,a,s,m,r,e,l]),j=R.useMemo(()=>Lj(d,s),[d,s]),g=_j(d);return R.createElement(R.Fragment,null,f.map(v=>R.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),j.map(v=>R.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),g.map(({key:v,link:S})=>R.createElement("link",{key:v,nonce:n.nonce,...S,crossOrigin:S.crossOrigin??n.crossOrigin})))}function Dj(...e){return r=>{e.forEach(n=>{typeof n=="function"?n(r):n!=null&&(n.current=r)})}}var qj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qj&&(window.__reactRouterVersion="7.13.1")}catch{}function Ij(e,r){return uv({basename:r==null?void 0:r.basename,getContext:r==null?void 0:r.getContext,future:r==null?void 0:r.future,history:Rx({window:r==null?void 0:r.window}),hydrationData:Fj(),routes:e,mapRouteProperties:lj,hydrationRouteProperties:oj,dataStrategy:r==null?void 0:r.dataStrategy,patchRoutesOnNavigation:r==null?void 0:r.patchRoutesOnNavigation,window:r==null?void 0:r.window,unstable_instrumentations:r==null?void 0:r.unstable_instrumentations}).initialize()}function Fj(){let e=window==null?void 0:window.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:zj(e.errors)}),e}function zj(e){if(!e)return null;let r=Object.entries(e),n={};for(let[a,i]of r)if(i&&i.__type==="RouteErrorResponse")n[a]=new Ha(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let l=new s(i.message);l.stack="",n[a]=l}catch{}}if(n[a]==null){let s=new Error(i.message);s.stack="",n[a]=s}}else n[a]=i;return n}var vh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ps=R.forwardRef(function({onClick:r,discover:n="render",prefetch:a="none",relative:i,reloadDocument:s,replace:l,unstable_mask:o,state:c,target:u,to:m,preventScrollReset:d,viewTransition:f,unstable_defaultShouldRevalidate:j,...g},v){let{basename:S,navigator:h,unstable_useTransitions:p}=R.useContext(Mt),x=typeof m=="string"&&vh.test(m),A=Km(m,S);m=A.to;let M=Bv(m,{relative:i}),T=Xt(),_=null;if(o){let O=ks(o,[],T.unstable_mask?T.unstable_mask.pathname:"/",!0);S!=="/"&&(O.pathname=O.pathname==="/"?S:Ft([S,O.pathname])),_=h.createHref(O)}let[E,H,F]=Pj(a,g),se=$j(m,{replace:l,unstable_mask:o,state:c,target:u,preventScrollReset:d,relative:i,viewTransition:f,unstable_defaultShouldRevalidate:j,unstable_useTransitions:p});function Z(O){r&&r(O),O.defaultPrevented||se(O)}let xe=!(A.isExternal||s),ee=R.createElement("a",{...g,...F,href:(xe?_:void 0)||A.absoluteURL||M,onClick:xe?Z:r,ref:Dj(v,H),target:u,"data-discover":!x&&n==="render"?"true":void 0});return E&&!x?R.createElement(R.Fragment,null,ee,R.createElement(Tj,{page:M})):ee});Ps.displayName="Link";var jh=R.forwardRef(function({"aria-current":r="page",caseSensitive:n=!1,className:a="",end:i=!1,style:s,to:l,viewTransition:o,children:c,...u},m){let d=Qa(l,{relative:u.relative}),f=Xt(),j=R.useContext(Ga),{navigator:g,basename:v}=R.useContext(Mt),S=j!=null&&Qj(d)&&o===!0,h=g.encodeLocation?g.encodeLocation(d).pathname:d.pathname,p=f.pathname,x=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;n||(p=p.toLowerCase(),x=x?x.toLowerCase():null,h=h.toLowerCase()),x&&v&&(x=kt(x,v)||x);const A=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let M=p===h||!i&&p.startsWith(h)&&p.charAt(A)==="/",T=x!=null&&(x===h||!i&&x.startsWith(h)&&x.charAt(h.length)==="/"),_={isActive:M,isPending:T,isTransitioning:S},E=M?r:void 0,H;typeof a=="function"?H=a(_):H=[a,M?"active":null,T?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let F=typeof s=="function"?s(_):s;return R.createElement(Ps,{...u,"aria-current":E,className:H,ref:m,style:F,to:l,viewTransition:o},typeof c=="function"?c(_):c)});jh.displayName="NavLink";var Bj=R.forwardRef(({discover:e="render",fetcherKey:r,navigate:n,reloadDocument:a,replace:i,state:s,method:l=Di,action:o,onSubmit:c,relative:u,preventScrollReset:m,viewTransition:d,unstable_defaultShouldRevalidate:f,...j},g)=>{let{unstable_useTransitions:v}=R.useContext(Mt),S=Gj(),h=Wj(o,{relative:u}),p=l.toLowerCase()==="get"?"get":"post",x=typeof o=="string"&&vh.test(o),A=M=>{if(c&&c(M),M.defaultPrevented)return;M.preventDefault();let T=M.nativeEvent.submitter,_=(T==null?void 0:T.getAttribute("formmethod"))||l,E=()=>S(T||M.currentTarget,{fetcherKey:r,method:_,navigate:n,replace:i,state:s,relative:u,preventScrollReset:m,viewTransition:d,unstable_defaultShouldRevalidate:f});v&&n!==!1?R.startTransition(()=>E()):E()};return R.createElement("form",{ref:g,method:p,action:h,onSubmit:a?c:A,...j,"data-discover":!x&&e==="render"?"true":void 0})});Bj.displayName="Form";function Uj(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bh(e){let r=R.useContext(sn);return oe(r,Uj(e)),r}function $j(e,{target:r,replace:n,unstable_mask:a,state:i,preventScrollReset:s,relative:l,viewTransition:o,unstable_defaultShouldRevalidate:c,unstable_useTransitions:u}={}){let m=Uv(),d=Xt(),f=Qa(e,{relative:l});return R.useCallback(j=>{if(jj(j,r)){j.preventDefault();let g=n!==void 0?n:Jt(d)===Jt(f),v=()=>m(e,{replace:g,unstable_mask:a,state:i,preventScrollReset:s,relative:l,viewTransition:o,unstable_defaultShouldRevalidate:c});u?R.startTransition(()=>v()):v()}},[d,m,f,n,a,i,r,e,s,l,o,c,u])}var Hj=0,Vj=()=>`__${String(++Hj)}__`;function Gj(){let{router:e}=bh("useSubmit"),{basename:r}=R.useContext(Mt),n=tj(),a=e.fetch,i=e.navigate;return R.useCallback(async(s,l={})=>{let{action:o,method:c,encType:u,formData:m,body:d}=Sj(s,r);if(l.navigate===!1){let f=l.fetcherKey||Vj();await a(f,n,l.action||o,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:m,body:d,formMethod:l.method||c,formEncType:l.encType||u,flushSync:l.flushSync})}else await i(l.action||o,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:m,body:d,formMethod:l.method||c,formEncType:l.encType||u,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[a,i,r,n])}function Wj(e,{relative:r}={}){let{basename:n}=R.useContext(Mt),a=R.useContext(Yt);oe(a,"useFormAction must be used inside a RouteContext");let[i]=a.matches.slice(-1),s={...Qa(e||".",{relative:r})},l=Xt();if(e==null){s.search=l.search;let o=new URLSearchParams(s.search),c=o.getAll("index");if(c.some(m=>m==="")){o.delete("index"),c.filter(d=>d).forEach(d=>o.append("index",d));let m=o.toString();s.search=m?`?${m}`:""}}return(!e||e===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:Ft([n,s.pathname])),Jt(s)}function Qj(e,{relative:r}={}){let n=R.useContext(bc);oe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=bh("useViewTransitionState"),i=Qa(e,{relative:r});if(!n.isTransitioning)return!1;let s=kt(n.currentLocation.pathname,a)||n.currentLocation.pathname,l=kt(n.nextLocation.pathname,a)||n.nextLocation.pathname;return us(i.pathname,l)!=null||us(i.pathname,s)!=null}function Jj(e){return R.createElement(uj,{flushSync:Bm.flushSync,...e})}const Kj="_header_18s0b_1",Yj="_left_18s0b_27",Xj="_collapseBtn_18s0b_39",Zj="_logo_18s0b_79",eb="_logoIcon_18s0b_95",tb="_logoText_18s0b_121",rb="_logoSubtext_18s0b_133",nb="_hamburger_18s0b_145",fr={header:Kj,left:Yj,collapseBtn:Xj,logo:Zj,logoIcon:eb,logoText:tb,logoSubtext:rb,hamburger:nb};function ab({onToggleSidebar:e,onCollapseSidebar:r,collapsed:n}){return t.jsxs("header",{className:fr.header,children:[t.jsxs("div",{className:fr.left,children:[t.jsx("button",{className:fr.collapseBtn,onClick:r,"aria-label":n?"Expandir menú":"Plegar menú",title:n?"Expandir menú":"Plegar menú",children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:n?t.jsx("path",{d:"M6 3L12 9L6 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}):t.jsx("path",{d:"M12 3L6 9L12 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),t.jsxs(Ps,{to:"/",className:fr.logo,children:[t.jsx("div",{className:fr.logoIcon,children:"J"}),t.jsxs("div",{children:[t.jsx("div",{className:fr.logoText,children:"Programacio Java"}),t.jsx("div",{className:fr.logoSubtext,children:"DAM - La Salle Tarragona"})]})]})]}),t.jsx("button",{className:fr.hamburger,onClick:e,"aria-label":"Obrir menu",children:t.jsx("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:t.jsx("path",{d:"M3 6H19M3 11H19M3 16H19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]})}const xl=[{id:"basics",title:"Basics de Java",items:[{path:"/basics/tipus-de-dades",label:"Tipus de Dades"},{path:"/basics/operadors",label:"Operadors"},{path:"/basics/sintaxi",label:"Sintaxi de Java"},{path:"/basics/condicionals",label:"Condicionals"},{path:"/basics/switch",label:"Switch"},{path:"/basics/bucles",label:"Bucles"},{path:"/basics/modificadors-acces",label:"Modificadors d'Acces"}]},{id:"arrays",title:"Arrays",items:[{path:"/arrays/arrays-1d",label:"Arrays 1D"},{path:"/arrays/arrays-2d",label:"Arrays 2D (Matrius)"},{path:"/arrays/arraylist",label:"ArrayList"}]},{id:"funcions",title:"Funcions",items:[{path:"/funcions/sense-parametres",label:"Funcions sense paràmetres"},{path:"/funcions/amb-parametres",label:"Funcions amb paràmetres"},{path:"/funcions/tipus-de-funcions",label:"Tipus de funcions"},{path:"/funcions/recursives",label:"Funcions recursives"},{path:"/funcions/cridar-des-de-main",label:"Cridar des del Main"},{path:"/funcions/resum",label:"Resum comparatiu"}]},{id:"classes",title:"Classes i Objectes",items:[{path:"/classes/introduccio",label:"Introducció a la POO"},{path:"/classes/classe-vs-objecte",label:"Classe vs Objecte"},{path:"/classes/modificadors",label:"Modificadors i Encapsulació"},{path:"/classes/constructors-this",label:"Constructors i THIS"},{path:"/classes/herencia",label:"Herència"},{path:"/classes/exemple-biblioteca",label:"Exemple: Biblioteca"}]},{id:"modularitat",title:"Modularitat i Packages",items:[{path:"/modularitat/introduccio",label:"Introducció a la Modularitat"},{path:"/modularitat/monolitic-vs-modular",label:"Monolític vs Modular"},{path:"/modularitat/packages",label:"Packages: Organització"},{path:"/modularitat/exemple-calculadora",label:"Exemple: Calculadora"}]},{id:"string-math",title:"String i Math",items:[{path:"/string-math/classe-string",label:"Classe String"},{path:"/string-math/classe-math",label:"Classe Math"},{path:"/string-math/random-vs-math-random",label:"Random vs Math.random()"}]},{id:"java-modern",title:"Java Modern",items:[{path:"/java-modern/for-each",label:"For-each"},{path:"/java-modern/operador-ternari",label:"Operador ternari"},{path:"/java-modern/var-i-altres",label:"var i altres novetats"}]},{id:"mon-professional",title:"El Món Professional",items:[{path:"/mon-professional/com-treballen-els-devs",label:"Com treballen els Devs"}]},{id:"analisi-disseny",title:"Anàlisi i Disseny",items:[{path:"/analisi-disseny/diagrames-classes",label:"Diagrames de Classes"},{path:"/analisi-disseny/diagrames-sequencia",label:"Diagrames de Seqüència"},{path:"/analisi-disseny/diagrames-flux",label:"Diagrames de Flux"},{path:"/analisi-disseny/casos-dus",label:"Casos d'Ús"},{path:"/analisi-disseny/projecte-real",label:"Anatomia d'un Projecte Real"},{path:"/analisi-disseny/introduccio-mvc",label:"Introducció a MVC"}]}],ib="_overlay_acghx_1",sb="_sidebar_acghx_9",lb="_collapsed_acghx_39",ob="_sectionTitle_acghx_47",cb="_arrow_acghx_49",ub="_items_acghx_51",db="_sectionButton_acghx_65",pb="_sectionIcon_acghx_75",mb="_section_acghx_47",hb="_arrowOpen_acghx_173",fb="_itemsOpen_acghx_193",gb="_link_acghx_201",xb="_activeLink_acghx_233",vb="_overlayVisible_acghx_271",jb="_sidebarOpen_acghx_341",rt={overlay:ib,sidebar:sb,collapsed:lb,sectionTitle:ob,arrow:cb,items:ub,sectionButton:db,sectionIcon:pb,section:mb,arrowOpen:hb,itemsOpen:fb,link:gb,activeLink:xb,overlayVisible:vb,sidebarOpen:jb},bb={basics:t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),t.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),arrays:t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),t.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),t.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),t.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]}),funcions:t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"12",cy:"12",r:"3"}),t.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),classes:t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),t.jsx("path",{d:"M16 3L12 7L8 3"})]}),modularitat:t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),t.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),t.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),"string-math":t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("polyline",{points:"4 7 4 4 20 4 20 7"}),t.jsx("line",{x1:"9",y1:"20",x2:"15",y2:"20"}),t.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20"})]}),"java-modern":t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),"mon-professional":t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),t.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"analisi-disseny":t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"3",y:"3",width:"6",height:"6",rx:"1"}),t.jsx("rect",{x:"15",y:"3",width:"6",height:"6",rx:"1"}),t.jsx("rect",{x:"9",y:"15",width:"6",height:"6",rx:"1"}),t.jsx("line",{x1:"6",y1:"9",x2:"6",y2:"12"}),t.jsx("line",{x1:"6",y1:"12",x2:"12",y2:"12"}),t.jsx("line",{x1:"12",y1:"12",x2:"12",y2:"15"}),t.jsx("line",{x1:"18",y1:"9",x2:"18",y2:"12"}),t.jsx("line",{x1:"18",y1:"12",x2:"12",y2:"12"})]})};function yb({isOpen:e,collapsed:r,onClose:n,onExpand:a}){const i=Xt(),[s,l]=R.useState(()=>{const u=xl.find(m=>m.items.some(d=>i.pathname===d.path));return u?[u.id]:[xl[0].id]}),o=u=>{l(m=>m.includes(u)?m.filter(d=>d!==u):[...m,u])},c=[rt.sidebar,e&&rt.sidebarOpen,r&&rt.collapsed].filter(Boolean).join(" ");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:`${rt.overlay} ${e?rt.overlayVisible:""}`,onClick:n}),t.jsx("nav",{className:c,onMouseEnter:r?a:void 0,children:xl.map(u=>{const m=s.includes(u.id),d=bb[u.id];return t.jsxs("div",{className:rt.section,children:[t.jsxs("button",{className:rt.sectionButton,onClick:()=>o(u.id),title:r?u.title:void 0,children:[t.jsx("span",{className:rt.sectionIcon,children:d}),t.jsx("span",{className:rt.sectionTitle,children:u.title}),t.jsx("span",{className:`${rt.arrow} ${m?rt.arrowOpen:""}`,children:t.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",children:t.jsx("path",{d:"M3 1L7 5L3 9"})})})]}),t.jsx("div",{className:`${rt.items} ${m?rt.itemsOpen:""}`,children:u.items.map(f=>t.jsx(jh,{to:f.path,className:({isActive:j})=>`${rt.link} ${j?rt.activeLink:""}`,onClick:n,children:f.label},f.path))})]},u.id)})})]})}function Sb(){return t.jsx("footer",{style:{textAlign:"center",padding:"20px",color:"#718096",fontSize:"0.85em",borderTop:"1px solid #e2e8f0",marginTop:"40px"},children:"Recurs didàctic creat per a l'assignatura de Programació - La Salle Tarragona"})}function wb(){const{pathname:e}=Xt();R.useEffect(()=>{window.scrollTo(0,0)},[e])}const Eb="_layout_e2a8v_1",Cb="_body_e2a8v_13",Rb="_content_e2a8v_23",Lb="_contentInner_e2a8v_37",yi={layout:Eb,body:Cb,content:Rb,contentInner:Lb};function Ab(){const[e,r]=R.useState(!1),[n,a]=R.useState(!1);return wb(),t.jsxs("div",{className:yi.layout,children:[t.jsx(ab,{onToggleSidebar:()=>r(!e),onCollapseSidebar:()=>a(!n),collapsed:n}),t.jsxs("div",{className:yi.body,children:[t.jsx(yb,{isOpen:e,collapsed:n,onClose:()=>r(!1),onExpand:()=>a(!1)}),t.jsx("main",{className:yi.content,children:t.jsxs("div",{className:yi.contentInner,children:[t.jsx(mj,{}),t.jsx(Sb,{})]})})]})]})}const kb="_hero_ym8fg_1",Mb="_heroTitle_ym8fg_13",Nb="_heroAccent_ym8fg_29",Pb="_heroSubtitle_ym8fg_41",Tb="_sectionsGrid_ym8fg_53",_b="_sectionCard_ym8fg_65",Ob="_cardIcon_ym8fg_101",Db="_cardTitle_ym8fg_125",qb="_cardDescription_ym8fg_139",Ib="_cardTopics_ym8fg_151",Fb="_topic_ym8fg_165",Tt={hero:kb,heroTitle:Mb,heroAccent:Nb,heroSubtitle:Pb,sectionsGrid:Tb,sectionCard:_b,cardIcon:Ob,cardTitle:Db,cardDescription:qb,cardTopics:Ib,topic:Fb},zb={basics:t.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),t.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),arrays:t.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),t.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),t.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),t.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]}),funcions:t.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"12",cy:"12",r:"3"}),t.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),classes:t.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),t.jsx("path",{d:"M16 3L12 7L8 3"})]}),modularitat:t.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),t.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),t.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),"string-math":t.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("polyline",{points:"4 7 4 4 20 4 20 7"}),t.jsx("line",{x1:"9",y1:"20",x2:"15",y2:"20"}),t.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20"})]}),"java-modern":t.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),"analisi-disseny":t.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"3",y:"3",width:"6",height:"6",rx:"1"}),t.jsx("rect",{x:"15",y:"3",width:"6",height:"6",rx:"1"}),t.jsx("rect",{x:"9",y:"15",width:"6",height:"6",rx:"1"}),t.jsx("line",{x1:"6",y1:"9",x2:"6",y2:"12"}),t.jsx("line",{x1:"6",y1:"12",x2:"12",y2:"12"}),t.jsx("line",{x1:"12",y1:"12",x2:"12",y2:"15"}),t.jsx("line",{x1:"18",y1:"9",x2:"18",y2:"12"}),t.jsx("line",{x1:"18",y1:"12",x2:"12",y2:"12"})]})},Bb=[{id:"basics",title:"Basics de Java",description:"Fonaments del llenguatge: tipus de dades, operadors, condicionals, bucles i sintaxi bàsica.",path:"/basics/tipus-de-dades",topics:["Tipus de dades","Operadors","if/else","Bucles","Switch"]},{id:"arrays",title:"Arrays",description:"Arrays unidimensionals i bidimensionals amb exemples interactius.",path:"/arrays/arrays-1d",topics:["Arrays 1D","Matrius 2D"]},{id:"funcions",title:"Funcions",description:"Funcions amb i sense paràmetres, tipus, recursivitat i com cridar-les.",path:"/funcions/sense-parametres",topics:["Sense paràmetres","Amb paràmetres","Recursives","Tipus"]},{id:"classes",title:"Classes i Objectes",description:"POO: classes, objectes, encapsulació, constructors, herència.",path:"/classes/introduccio",topics:["Classes","Objectes","Constructors","Herència"]},{id:"modularitat",title:"Modularitat i Packages",description:"Organització del codi en múltiples classes i packages. Aplica tot el que s'ha après.",path:"/modularitat/introduccio",topics:["Monolític vs Modular","Packages","Imports"]},{id:"string-math",title:"String i Math",description:"Classes String i Math: tots els mètodes útils, Random vs Math.random().",path:"/string-math/classe-string",topics:["String","Math","Random"]},{id:"java-modern",title:"Java Modern",description:"Sintaxi moderna: for-each, operador ternari, var i altres novetats.",path:"/java-modern/for-each",topics:["for-each","Ternari","var"]},{id:"analisi-disseny",title:"Anàlisi i Disseny",description:"Diagrames UML, anàlisi de projectes reals i introducció a MVC.",path:"/analisi-disseny/diagrames-classes",topics:["UML","Projecte Real","MVC"]}];function Ub(){return t.jsxs("div",{children:[t.jsxs("div",{className:Tt.hero,children:[t.jsxs("h1",{className:Tt.heroTitle,children:["Programació ",t.jsx("span",{className:Tt.heroAccent,children:"Java"})]}),t.jsx("p",{className:Tt.heroSubtitle,children:"Recurs visual interactiu per a l'aprenentatge de programació - DAM"})]}),t.jsx("div",{className:Tt.sectionsGrid,children:Bb.map(e=>t.jsxs(Ps,{to:e.path,className:Tt.sectionCard,children:[t.jsx("div",{className:Tt.cardIcon,children:zb[e.id]}),t.jsx("h2",{className:Tt.cardTitle,children:e.title}),t.jsx("p",{className:Tt.cardDescription,children:e.description}),t.jsx("div",{className:Tt.cardTopics,children:e.topics.map(r=>t.jsx("span",{className:Tt.topic,children:r},r))})]},e.path))})]})}const $b="_header_1pa55_1",Hb="_title_1pa55_9",Vb="_accentLine_1pa55_29",vl={header:$b,title:Hb,accentLine:Vb};function C({title:e}){return t.jsxs("div",{className:vl.header,children:[t.jsx("h2",{className:vl.title,children:e}),t.jsx("div",{className:vl.accentLine})]})}function yh(e){var r,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(r=0;r<i;r++)e[r]&&(n=yh(e[r]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function Sh(){for(var e,r,n=0,a="",i=arguments.length;n<i;n++)(e=arguments[n])&&(r=yh(e))&&(a&&(a+=" "),a+=r);return a}var Gb=Object.create,Ts=Object.defineProperty,Wb=Object.defineProperties,Qb=Object.getOwnPropertyDescriptor,Jb=Object.getOwnPropertyDescriptors,wh=Object.getOwnPropertyNames,ds=Object.getOwnPropertySymbols,Kb=Object.getPrototypeOf,Rc=Object.prototype.hasOwnProperty,Eh=Object.prototype.propertyIsEnumerable,Ed=(e,r,n)=>r in e?Ts(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,Qt=(e,r)=>{for(var n in r||(r={}))Rc.call(r,n)&&Ed(e,n,r[n]);if(ds)for(var n of ds(r))Eh.call(r,n)&&Ed(e,n,r[n]);return e},_s=(e,r)=>Wb(e,Jb(r)),Ch=(e,r)=>{var n={};for(var a in e)Rc.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&ds)for(var a of ds(e))r.indexOf(a)<0&&Eh.call(e,a)&&(n[a]=e[a]);return n},Yb=(e,r)=>function(){return r||(0,e[wh(e)[0]])((r={exports:{}}).exports,r),r.exports},Xb=(e,r)=>{for(var n in r)Ts(e,n,{get:r[n],enumerable:!0})},Zb=(e,r,n,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of wh(r))!Rc.call(e,i)&&i!==n&&Ts(e,i,{get:()=>r[i],enumerable:!(a=Qb(r,i))||a.enumerable});return e},ey=(e,r,n)=>(n=e!=null?Gb(Kb(e)):{},Zb(!e||!e.__esModule?Ts(n,"default",{value:e,enumerable:!0}):n,e)),ty=Yb({"../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(e,r){var n=function(){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,s={},l={util:{encode:function g(v){return v instanceof o?new o(v.type,g(v.content),v.alias):Array.isArray(v)?v.map(g):v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++i}),g.__id},clone:function g(v,S){S=S||{};var h,p;switch(l.util.type(v)){case"Object":if(p=l.util.objId(v),S[p])return S[p];h={},S[p]=h;for(var x in v)v.hasOwnProperty(x)&&(h[x]=g(v[x],S));return h;case"Array":return p=l.util.objId(v),S[p]?S[p]:(h=[],S[p]=h,v.forEach(function(A,M){h[M]=g(A,S)}),h);default:return v}},getLanguage:function(g){for(;g;){var v=a.exec(g.className);if(v)return v[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,v){g.className=g.className.replace(RegExp(a,"gi"),""),g.classList.add("language-"+v)},isActive:function(g,v,S){for(var h="no-"+v;g;){var p=g.classList;if(p.contains(v))return!0;if(p.contains(h))return!1;g=g.parentElement}return!!S}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(g,v){var S=l.util.clone(l.languages[g]);for(var h in v)S[h]=v[h];return S},insertBefore:function(g,v,S,h){h=h||l.languages;var p=h[g],x={};for(var A in p)if(p.hasOwnProperty(A)){if(A==v)for(var M in S)S.hasOwnProperty(M)&&(x[M]=S[M]);S.hasOwnProperty(A)||(x[A]=p[A])}var T=h[g];return h[g]=x,l.languages.DFS(l.languages,function(_,E){E===T&&_!=g&&(this[_]=x)}),x},DFS:function g(v,S,h,p){p=p||{};var x=l.util.objId;for(var A in v)if(v.hasOwnProperty(A)){S.call(v,A,v[A],h||A);var M=v[A],T=l.util.type(M);T==="Object"&&!p[x(M)]?(p[x(M)]=!0,g(M,S,null,p)):T==="Array"&&!p[x(M)]&&(p[x(M)]=!0,g(M,S,A,p))}}},plugins:{},highlight:function(g,v,S){var h={code:g,grammar:v,language:S};if(l.hooks.run("before-tokenize",h),!h.grammar)throw new Error('The language "'+h.language+'" has no grammar.');return h.tokens=l.tokenize(h.code,h.grammar),l.hooks.run("after-tokenize",h),o.stringify(l.util.encode(h.tokens),h.language)},tokenize:function(g,v){var S=v.rest;if(S){for(var h in S)v[h]=S[h];delete v.rest}var p=new m;return d(p,p.head,g),u(g,p,v,p.head,0),j(p)},hooks:{all:{},add:function(g,v){var S=l.hooks.all;S[g]=S[g]||[],S[g].push(v)},run:function(g,v){var S=l.hooks.all[g];if(!(!S||!S.length))for(var h=0,p;p=S[h++];)p(v)}},Token:o};function o(g,v,S,h){this.type=g,this.content=v,this.alias=S,this.length=(h||"").length|0}o.stringify=function g(v,S){if(typeof v=="string")return v;if(Array.isArray(v)){var h="";return v.forEach(function(T){h+=g(T,S)}),h}var p={type:v.type,content:g(v.content,S),tag:"span",classes:["token",v.type],attributes:{},language:S},x=v.alias;x&&(Array.isArray(x)?Array.prototype.push.apply(p.classes,x):p.classes.push(x)),l.hooks.run("wrap",p);var A="";for(var M in p.attributes)A+=" "+M+'="'+(p.attributes[M]||"").replace(/"/g,"&quot;")+'"';return"<"+p.tag+' class="'+p.classes.join(" ")+'"'+A+">"+p.content+"</"+p.tag+">"};function c(g,v,S,h){g.lastIndex=v;var p=g.exec(S);if(p&&h&&p[1]){var x=p[1].length;p.index+=x,p[0]=p[0].slice(x)}return p}function u(g,v,S,h,p,x){for(var A in S)if(!(!S.hasOwnProperty(A)||!S[A])){var M=S[A];M=Array.isArray(M)?M:[M];for(var T=0;T<M.length;++T){if(x&&x.cause==A+","+T)return;var _=M[T],E=_.inside,H=!!_.lookbehind,F=!!_.greedy,se=_.alias;if(F&&!_.pattern.global){var Z=_.pattern.toString().match(/[imsuy]*$/)[0];_.pattern=RegExp(_.pattern.source,Z+"g")}for(var xe=_.pattern||_,ee=h.next,O=p;ee!==v.tail&&!(x&&O>=x.reach);O+=ee.value.length,ee=ee.next){var $=ee.value;if(v.length>g.length)return;if(!($ instanceof o)){var te=1,D;if(F){if(D=c(xe,O,g,H),!D||D.index>=g.length)break;var ce=D.index,B=D.index+D[0].length,U=O;for(U+=ee.value.length;ce>=U;)ee=ee.next,U+=ee.value.length;if(U-=ee.value.length,O=U,ee.value instanceof o)continue;for(var ne=ee;ne!==v.tail&&(U<B||typeof ne.value=="string");ne=ne.next)te++,U+=ne.value.length;te--,$=g.slice(O,U),D.index-=O}else if(D=c(xe,0,$,H),!D)continue;var ce=D.index,be=D[0],Re=$.slice(0,ce),Ie=$.slice(ce+be.length),Se=O+$.length;x&&Se>x.reach&&(x.reach=Se);var He=ee.prev;Re&&(He=d(v,He,Re),O+=Re.length),f(v,He,te);var ln=new o(A,E?l.tokenize(be,E):be,se,be);if(ee=d(v,He,ln),Ie&&d(v,ee,Ie),te>1){var Nt={cause:A+","+T,reach:Se};u(g,v,S,ee.prev,O,Nt),x&&Nt.reach>x.reach&&(x.reach=Nt.reach)}}}}}}function m(){var g={value:null,prev:null,next:null},v={value:null,prev:g,next:null};g.next=v,this.head=g,this.tail=v,this.length=0}function d(g,v,S){var h=v.next,p={value:S,prev:v,next:h};return v.next=p,h.prev=p,g.length++,p}function f(g,v,S){for(var h=v.next,p=0;p<S&&h!==g.tail;p++)h=h.next;v.next=h,h.prev=v,g.length-=p}function j(g){for(var v=[],S=g.head.next;S!==g.tail;)v.push(S.value),S=S.next;return v}return l}();r.exports=n,n.default=n}}),P=ey(ty());P.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},P.languages.markup.tag.inside["attr-value"].inside.entity=P.languages.markup.entity,P.languages.markup.doctype.inside["internal-subset"].inside=P.languages.markup,P.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(P.languages.markup.tag,"addInlined",{value:function(e,a){var n={},n=(n["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:P.languages[a]},n.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}}),a=(n["language-"+a]={pattern:/[\s\S]+/,inside:P.languages[a]},{});a[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:n},P.languages.insertBefore("markup","cdata",a)}}),Object.defineProperty(P.languages.markup.tag,"addAttribute",{value:function(e,r){P.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:P.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),P.languages.html=P.languages.markup,P.languages.mathml=P.languages.markup,P.languages.svg=P.languages.markup,P.languages.xml=P.languages.extend("markup",{}),P.languages.ssml=P.languages.xml,P.languages.atom=P.languages.xml,P.languages.rss=P.languages.xml,function(e){var r={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},n=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,a="(?:[^\\\\-]|"+n.source+")",a=RegExp(a+"-"+a),i={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};e.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:a,inside:{escape:n,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":r,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:n}},"special-escape":r,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":i}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:n,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":i}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}}(P),P.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},P.languages.javascript=P.languages.extend("clike",{"class-name":[P.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),P.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,P.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:P.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:P.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:P.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:P.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:P.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),P.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:P.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),P.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),P.languages.markup&&(P.languages.markup.tag.addInlined("script","javascript"),P.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),P.languages.js=P.languages.javascript,P.languages.actionscript=P.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),P.languages.actionscript["class-name"].alias="function",delete P.languages.actionscript.parameter,delete P.languages.actionscript["literal-property"],P.languages.markup&&P.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:P.languages.markup}}),function(e){var r=/#(?!\{).+/,n={pattern:/#\{[^}]+\}/,alias:"variable"};e.languages.coffeescript=e.languages.extend("javascript",{comment:r,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:n}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),e.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:r,interpolation:n}}}),e.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:e.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:n}}]}),e.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete e.languages.coffeescript["template-string"],e.languages.coffee=e.languages.coffeescript}(P),function(e){var r=e.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(r,"addSupport",{value:function(n,a){(n=typeof n=="string"?[n]:n).forEach(function(i){var s=function(d){d.inside||(d.inside={}),d.inside.rest=a},l="doc-comment";if(o=e.languages[i]){var o,c=o[l];if((c=c||(o=e.languages.insertBefore(i,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[l])instanceof RegExp&&(c=o[l]={pattern:c}),Array.isArray(c))for(var u=0,m=c.length;u<m;u++)c[u]instanceof RegExp&&(c[u]={pattern:c[u]}),s(c[u]);else s(c)}})}}),r.addSupport(["java","javascript","php"],r)}(P),function(e){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,r=(e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css,e.languages.markup);r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(P),function(e){var r=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,r=(e.languages.css.selector={pattern:e.languages.css.selector.pattern,lookbehind:!0,inside:r={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+r.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[r,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},e.languages.css.atrule.inside["selector-function-argument"].inside=r,e.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}}),{pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0}),n={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};e.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:r,number:n,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:r,number:n})}(P),function(e){var r=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+n.source+"(?:[ 	]+"+r.source+")?|"+r.source+"(?:[ 	]+"+n.source+")?)",i=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),s=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function l(o,c){c=(c||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return o});return RegExp(u,c)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+i+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:l(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:l(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:l(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:l(s),lookbehind:!0,greedy:!0},number:{pattern:l(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:n,important:r,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml}(P),function(e){var r=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function n(u){return u=u.replace(/<inner>/g,function(){return r}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+u+")")}var a=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,i=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return a}),s=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,l=(e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+i+s+"(?:"+i+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+i+s+")(?:"+i+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(a),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+i+")"+s+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+i+"$"),inside:{"table-header":{pattern:RegExp(a),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:n(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(u){["url","bold","italic","strike","code-snippet"].forEach(function(m){u!==m&&(e.languages.markdown[u].inside.content.inside[m]=e.languages.markdown[m])})}),e.hooks.add("after-tokenize",function(u){u.language!=="markdown"&&u.language!=="md"||function m(d){if(d&&typeof d!="string")for(var f=0,j=d.length;f<j;f++){var g,v=d[f];v.type!=="code"?m(v.content):(g=v.content[1],v=v.content[3],g&&v&&g.type==="code-language"&&v.type==="code-block"&&typeof g.content=="string"&&(g=g.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),g="language-"+(g=(/[a-z][\w-]*/i.exec(g)||[""])[0].toLowerCase()),v.alias?typeof v.alias=="string"?v.alias=[v.alias,g]:v.alias.push(g):v.alias=[g]))}}(u.tokens)}),e.hooks.add("wrap",function(u){if(u.type==="code-block"){for(var m="",d=0,f=u.classes.length;d<f;d++){var j=u.classes[d],j=/language-(.+)/.exec(j);if(j){m=j[1];break}}var g,v=e.languages[m];v?u.content=e.highlight(function(S){return S=S.replace(l,""),S=S.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(h,p){var x;return(p=p.toLowerCase())[0]==="#"?(x=p[1]==="x"?parseInt(p.slice(2),16):Number(p.slice(1)),c(x)):o[p]||h})}(u.content),v,m):m&&m!=="none"&&e.plugins.autoloader&&(g="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random()),u.attributes.id=g,e.plugins.autoloader.loadLanguages(m,function(){var S=document.getElementById(g);S&&(S.innerHTML=e.highlight(S.textContent,e.languages[m],m))}))}}),RegExp(e.languages.markup.tag.pattern.source,"gi")),o={amp:"&",lt:"<",gt:">",quot:'"'},c=String.fromCodePoint||String.fromCharCode;e.languages.md=e.languages.markdown}(P),P.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:P.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},P.hooks.add("after-tokenize",function(e){if(e.language==="graphql")for(var r=e.tokens.filter(function(g){return typeof g!="string"&&g.type!=="comment"&&g.type!=="scalar"}),n=0;n<r.length;){var a=r[n++];if(a.type==="keyword"&&a.content==="mutation"){var i=[];if(d(["definition-mutation","punctuation"])&&m(1).content==="("){n+=2;var s=f(/^\($/,/^\)$/);if(s===-1)continue;for(;n<s;n++){var l=m(0);l.type==="variable"&&(j(l,"variable-input"),i.push(l.content))}n=s+1}if(d(["punctuation","property-query"])&&m(0).content==="{"&&(n++,j(m(0),"property-mutation"),0<i.length)){var o=f(/^\{$/,/^\}$/);if(o!==-1)for(var c=n;c<o;c++){var u=r[c];u.type==="variable"&&0<=i.indexOf(u.content)&&j(u,"variable-input")}}}}function m(g){return r[n+g]}function d(g,v){v=v||0;for(var S=0;S<g.length;S++){var h=m(S+v);if(!h||h.type!==g[S])return}return 1}function f(g,v){for(var S=1,h=n;h<r.length;h++){var p=r[h],x=p.content;if(p.type==="punctuation"&&typeof x=="string"){if(g.test(x))S++;else if(v.test(x)&&--S===0)return h}}return-1}function j(g,v){var S=g.alias;S?Array.isArray(S)||(g.alias=S=[S]):g.alias=S=[],S.push(v)}}),P.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(e){var r=e.languages.javascript["template-string"],n=r.pattern.source,a=r.inside.interpolation,i=a.inside["interpolation-punctuation"],s=a.pattern.source;function l(d,f){if(e.languages[d])return{pattern:RegExp("((?:"+f+")\\s*)"+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:d}}}}function o(d,f,j){return d={code:d,grammar:f,language:j},e.hooks.run("before-tokenize",d),d.tokens=e.tokenize(d.code,d.grammar),e.hooks.run("after-tokenize",d),d.tokens}function c(d,f,j){var S=e.tokenize(d,{interpolation:{pattern:RegExp(s),lookbehind:!0}}),g=0,v={},S=o(S.map(function(p){if(typeof p=="string")return p;for(var x,A,p=p.content;d.indexOf((A=g++,x="___"+j.toUpperCase()+"_"+A+"___"))!==-1;);return v[x]=p,x}).join(""),f,j),h=Object.keys(v);return g=0,function p(x){for(var A=0;A<x.length;A++){if(g>=h.length)return;var M,T,_,E,H,F,se,Z=x[A];typeof Z=="string"||typeof Z.content=="string"?(M=h[g],(se=(F=typeof Z=="string"?Z:Z.content).indexOf(M))!==-1&&(++g,T=F.substring(0,se),H=v[M],_=void 0,(E={})["interpolation-punctuation"]=i,(E=e.tokenize(H,E)).length===3&&((_=[1,1]).push.apply(_,o(E[1],e.languages.javascript,"javascript")),E.splice.apply(E,_)),_=new e.Token("interpolation",E,a.alias,H),E=F.substring(se+M.length),H=[],T&&H.push(T),H.push(_),E&&(p(F=[E]),H.push.apply(H,F)),typeof Z=="string"?(x.splice.apply(x,[A,1].concat(H)),A+=H.length-1):Z.content=H)):(se=Z.content,Array.isArray(se)?p(se):p([se]))}}(S),new e.Token(j,S,"language-"+j,d)}e.languages.javascript["template-string"]=[l("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),l("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),l("svg",/\bsvg/.source),l("markdown",/\b(?:markdown|md)/.source),l("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),l("sql",/\bsql/.source),r].filter(Boolean);var u={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function m(d){return typeof d=="string"?d:Array.isArray(d)?d.map(m).join(""):m(d.content)}e.hooks.add("after-tokenize",function(d){d.language in u&&function f(j){for(var g=0,v=j.length;g<v;g++){var S,h,p,x=j[g];typeof x!="string"&&(S=x.content,Array.isArray(S)?x.type==="template-string"?(x=S[1],S.length===3&&typeof x!="string"&&x.type==="embedded-code"&&(h=m(x),x=x.alias,x=Array.isArray(x)?x[0]:x,p=e.languages[x])&&(S[1]=c(h,p,x))):f(S):typeof S!="string"&&f([S]))}}(d.tokens)})}(P),function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var r=e.languages.extend("typescript",{});delete r["class-name"],e.languages.typescript["class-name"].inside=r,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:r}}}}),e.languages.ts=e.languages.typescript}(P),function(e){var r=e.languages.javascript,n=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,a="(@(?:arg|argument|param|property)\\s+(?:"+n+"\\s+)?)";e.languages.jsdoc=e.languages.extend("javadoclike",{parameter:{pattern:RegExp(a+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),e.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(a+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:r,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return n})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+n),lookbehind:!0,inside:{string:r.string,number:r.number,boolean:r.boolean,keyword:e.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:r,alias:"language-javascript"}}}}),e.languages.javadoclike.addSupport("javascript",e.languages.jsdoc)}(P),function(e){e.languages.flow=e.languages.extend("javascript",{}),e.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:"class-name"}]}),e.languages.flow["function-variable"].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete e.languages.flow.parameter,e.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(e.languages.flow.keyword)||(e.languages.flow.keyword=[e.languages.flow.keyword]),e.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})}(P),P.languages.n4js=P.languages.extend("javascript",{keyword:/\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),P.languages.insertBefore("n4js","constant",{annotation:{pattern:/@+\w+/,alias:"operator"}}),P.languages.n4jsd=P.languages.n4js,function(e){function r(l,o){return RegExp(l.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),o)}e.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+e.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),e.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+e.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),e.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),e.languages.insertBefore("javascript","keyword",{imports:{pattern:r(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:e.languages.javascript},exports:{pattern:r(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:e.languages.javascript}}),e.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),e.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),e.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:r(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var n=["function","function-variable","method","method-variable","property-access"],a=0;a<n.length;a++){var s=n[a],i=e.languages.javascript[s],s=(i=e.util.type(i)==="RegExp"?e.languages.javascript[s]={pattern:i}:i).inside||{};(i.inside=s)["maybe-class-name"]=/^[A-Z][\s\S]*/}}(P),function(e){var r=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function s(c,u){return c=c.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return i}),RegExp(c,u)}i=s(i).source,e.languages.jsx=e.languages.extend("markup",r),e.languages.jsx.tag.pattern=s(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=r.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:s(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:s(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);function l(c){for(var u=[],m=0;m<c.length;m++){var d=c[m],f=!1;typeof d!="string"&&(d.type==="tag"&&d.content[0]&&d.content[0].type==="tag"?d.content[0].content[0].content==="</"?0<u.length&&u[u.length-1].tagName===o(d.content[0].content[1])&&u.pop():d.content[d.content.length-1].content!=="/>"&&u.push({tagName:o(d.content[0].content[1]),openedBraces:0}):0<u.length&&d.type==="punctuation"&&d.content==="{"?u[u.length-1].openedBraces++:0<u.length&&0<u[u.length-1].openedBraces&&d.type==="punctuation"&&d.content==="}"?u[u.length-1].openedBraces--:f=!0),(f||typeof d=="string")&&0<u.length&&u[u.length-1].openedBraces===0&&(f=o(d),m<c.length-1&&(typeof c[m+1]=="string"||c[m+1].type==="plain-text")&&(f+=o(c[m+1]),c.splice(m+1,1)),0<m&&(typeof c[m-1]=="string"||c[m-1].type==="plain-text")&&(f=o(c[m-1])+f,c.splice(m-1,1),m--),c[m]=new e.Token("plain-text",f,null,f)),d.content&&typeof d.content!="string"&&l(d.content)}}var o=function(c){return c?typeof c=="string"?c:typeof c.content=="string"?c.content:c.content.map(o).join(""):""};e.hooks.add("after-tokenize",function(c){c.language!=="jsx"&&c.language!=="tsx"||l(c.tokens)})}(P),function(e){var r=e.util.clone(e.languages.typescript),r=(e.languages.tsx=e.languages.extend("jsx",r),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"],e.languages.tsx.tag);r.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+r.pattern.source+")",r.pattern.flags),r.lookbehind=!0}(P),P.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(/(^|[^"#])/.source+"(?:"+/"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source+"|"+/"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source+")"+/(?!["#])/.source),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(/(^|[^"#])(#+)/.source+"(?:"+/"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source+"|"+/"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source+")\\2"),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp(/#/.source+"(?:"+/(?:elseif|if)\b/.source+"(?:[ 	]*"+/(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source+")+|"+/(?:else|endif)\b/.source+")"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},P.languages.swift["string-literal"].forEach(function(e){e.inside.interpolation.inside=P.languages.swift}),function(e){e.languages.kotlin=e.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete e.languages.kotlin["class-name"];var r={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:e.languages.kotlin}};e.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:r},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:r},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete e.languages.kotlin.string,e.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),e.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),e.languages.kt=e.languages.kotlin,e.languages.kts=e.languages.kotlin}(P),P.languages.c=P.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),P.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),P.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},P.languages.c.string],char:P.languages.c.char,comment:P.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:P.languages.c}}}}),P.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete P.languages.c.boolean,P.languages.objectivec=P.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete P.languages.objectivec["class-name"],P.languages.objc=P.languages.objectivec,P.languages.reason=P.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),P.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete P.languages.reason.function,function(e){for(var r=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,n=0;n<2;n++)r=r.replace(/<self>/g,function(){return r});r=r.replace(/<self>/g,function(){return/[^\s\S]/.source}),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+r),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string}(P),P.languages.go=P.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),P.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete P.languages.go["class-name"],function(e){var r=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return r.source});e.languages.cpp=e.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return r.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:r,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return n})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),e.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e.languages.cpp}}}}),e.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),e.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend("cpp",{})}}),e.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp["base-clause"])}(P),P.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},P.languages.python["string-interpolation"].inside.interpolation.inside.rest=P.languages.python,P.languages.py=P.languages.python,P.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},P.languages.webmanifest=P.languages.json;var ry={};Xb(ry,{dracula:()=>ay,duotoneDark:()=>sy,duotoneLight:()=>oy,github:()=>uy,gruvboxMaterialDark:()=>Fy,gruvboxMaterialLight:()=>By,jettwaveDark:()=>Ny,jettwaveLight:()=>Ty,nightOwl:()=>py,nightOwlLight:()=>hy,oceanicNext:()=>gy,okaidia:()=>vy,oneDark:()=>Oy,oneLight:()=>qy,palenight:()=>by,shadesOfPurple:()=>Sy,synthwave84:()=>Ey,ultramin:()=>Ry,vsDark:()=>Rh,vsLight:()=>ky});var ny={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},ay=ny,iy={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},sy=iy,ly={plain:{backgroundColor:"#faf8f5",color:"#728fcb"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#b6ad9a"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#063289"}},{types:["property","function"],style:{color:"#b29762"}},{types:["tag-id","selector","atrule-id"],style:{color:"#2d2006"}},{types:["attr-name"],style:{color:"#896724"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule"],style:{color:"#728fcb"}},{types:["placeholder","variable"],style:{color:"#93abdc"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#896724"}}]},oy=ly,cy={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},uy=cy,dy={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]},py=dy,my={plain:{color:"#403f53",backgroundColor:"#FBFBFB"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(72, 118, 214)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(152, 159, 177)",fontStyle:"italic"}},{types:["string","builtin","char","constant","url"],style:{color:"rgb(72, 118, 214)"}},{types:["variable"],style:{color:"rgb(201, 103, 101)"}},{types:["number"],style:{color:"rgb(170, 9, 130)"}},{types:["punctuation"],style:{color:"rgb(153, 76, 195)"}},{types:["function","selector","doctype"],style:{color:"rgb(153, 76, 195)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(17, 17, 17)"}},{types:["tag"],style:{color:"rgb(153, 76, 195)"}},{types:["operator","property","keyword","namespace"],style:{color:"rgb(12, 150, 155)"}},{types:["boolean"],style:{color:"rgb(188, 84, 84)"}}]},hy=my,mt={char:"#D8DEE9",comment:"#999999",keyword:"#c5a5c5",primitive:"#5a9bcf",string:"#8dc891",variable:"#d7deea",boolean:"#ff8b50",tag:"#fc929e",function:"#79b6f2",className:"#FAC863"},fy={plain:{backgroundColor:"#282c34",color:"#ffffff"},styles:[{types:["attr-name"],style:{color:mt.keyword}},{types:["attr-value"],style:{color:mt.string}},{types:["comment","block-comment","prolog","doctype","cdata","shebang"],style:{color:mt.comment}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:mt.primitive}},{types:["boolean"],style:{color:mt.boolean}},{types:["tag"],style:{color:mt.tag}},{types:["string"],style:{color:mt.string}},{types:["punctuation"],style:{color:mt.string}},{types:["selector","char","builtin","inserted"],style:{color:mt.char}},{types:["function"],style:{color:mt.function}},{types:["operator","entity","url","variable"],style:{color:mt.variable}},{types:["keyword"],style:{color:mt.keyword}},{types:["atrule","class-name"],style:{color:mt.className}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}}]},gy=fy,xy={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"#f92672",fontStyle:"italic"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"#8292a2",fontStyle:"italic"}},{types:["string","url"],style:{color:"#a6e22e"}},{types:["variable"],style:{color:"#f8f8f2"}},{types:["number"],style:{color:"#ae81ff"}},{types:["builtin","char","constant","function","class-name"],style:{color:"#e6db74"}},{types:["punctuation"],style:{color:"#f8f8f2"}},{types:["selector","doctype"],style:{color:"#a6e22e",fontStyle:"italic"}},{types:["tag","operator","keyword"],style:{color:"#66d9ef"}},{types:["boolean"],style:{color:"#ae81ff"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)",opacity:.7}},{types:["tag","property"],style:{color:"#f92672"}},{types:["attr-name"],style:{color:"#a6e22e !important"}},{types:["doctype"],style:{color:"#8292a2"}},{types:["rule"],style:{color:"#e6db74"}}]},vy=xy,jy={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},by=jy,yy={plain:{color:"#9EFEFF",backgroundColor:"#2D2A55"},styles:[{types:["changed"],style:{color:"rgb(255, 238, 128)"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)"}},{types:["comment"],style:{color:"rgb(179, 98, 255)",fontStyle:"italic"}},{types:["punctuation"],style:{color:"rgb(255, 255, 255)"}},{types:["constant"],style:{color:"rgb(255, 98, 140)"}},{types:["string","url"],style:{color:"rgb(165, 255, 144)"}},{types:["variable"],style:{color:"rgb(255, 238, 128)"}},{types:["number","boolean"],style:{color:"rgb(255, 98, 140)"}},{types:["attr-name"],style:{color:"rgb(255, 180, 84)"}},{types:["keyword","operator","property","namespace","tag","selector","doctype"],style:{color:"rgb(255, 157, 0)"}},{types:["builtin","char","constant","function","class-name"],style:{color:"rgb(250, 208, 0)"}}]},Sy=yy,wy={plain:{backgroundColor:"linear-gradient(to bottom, #2a2139 75%, #34294f)",backgroundImage:"#34294f",color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#495495",fontStyle:"italic"}},{types:["punctuation"],style:{color:"#ccc"}},{types:["tag","attr-name","namespace","number","unit","hexcode","deleted"],style:{color:"#e2777a"}},{types:["property","selector"],style:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"}},{types:["function-name"],style:{color:"#6196cc"}},{types:["boolean","selector-id","function"],style:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"}},{types:["class-name","maybe-class-name","builtin"],style:{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"}},{types:["constant","symbol"],style:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"}},{types:["important","atrule","keyword","selector-class"],style:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"}},{types:["string","char","attr-value","regex","variable"],style:{color:"#f87c32"}},{types:["parameter"],style:{fontStyle:"italic"}},{types:["entity","url"],style:{color:"#67cdcc"}},{types:["operator"],style:{color:"ffffffee"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["inserted"],style:{color:"green"}}]},Ey=wy,Cy={plain:{color:"#282a2e",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(197, 200, 198)"}},{types:["string","number","builtin","variable"],style:{color:"rgb(150, 152, 150)"}},{types:["class-name","function","tag","attr-name"],style:{color:"rgb(40, 42, 46)"}}]},Ry=Cy,Ly={plain:{color:"#9CDCFE",backgroundColor:"#1E1E1E"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"rgb(86, 156, 214)"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"rgb(206, 145, 120)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(212, 212, 212)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(220, 220, 170)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}}]},Rh=Ly,Ay={plain:{color:"#000000",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(0, 128, 0)"}},{types:["builtin"],style:{color:"rgb(0, 112, 193)"}},{types:["number","variable","inserted"],style:{color:"rgb(9, 134, 88)"}},{types:["operator"],style:{color:"rgb(0, 0, 0)"}},{types:["constant","char"],style:{color:"rgb(129, 31, 63)"}},{types:["tag"],style:{color:"rgb(128, 0, 0)"}},{types:["attr-name"],style:{color:"rgb(255, 0, 0)"}},{types:["deleted","string"],style:{color:"rgb(163, 21, 21)"}},{types:["changed","punctuation"],style:{color:"rgb(4, 81, 165)"}},{types:["function","keyword"],style:{color:"rgb(0, 0, 255)"}},{types:["class-name"],style:{color:"rgb(38, 127, 153)"}}]},ky=Ay,My={plain:{color:"#f8fafc",backgroundColor:"#011627"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#569CD6"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#f8fafc"}},{types:["attr-name","variable"],style:{color:"#9CDCFE"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#cbd5e1"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#D4D4D4"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#7dd3fc"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},Ny=My,Py={plain:{color:"#0f172a",backgroundColor:"#f1f5f9"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#0c4a6e"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#0f172a"}},{types:["attr-name","variable"],style:{color:"#0c4a6e"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#64748b"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#475569"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#0e7490"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},Ty=Py,_y={plain:{backgroundColor:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(220, 10%, 40%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(220, 14%, 71%)"}},{types:["attr-name","class-name","maybe-class-name","boolean","constant","number","atrule"],style:{color:"hsl(29, 54%, 61%)"}},{types:["keyword"],style:{color:"hsl(286, 60%, 67%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(355, 65%, 65%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value"],style:{color:"hsl(95, 38%, 62%)"}},{types:["variable","operator","function"],style:{color:"hsl(207, 82%, 66%)"}},{types:["url"],style:{color:"hsl(187, 47%, 55%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(220, 14%, 71%)"}}]},Oy=_y,Dy={plain:{backgroundColor:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(230, 4%, 64%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(230, 8%, 24%)"}},{types:["attr-name","class-name","boolean","constant","number","atrule"],style:{color:"hsl(35, 99%, 36%)"}},{types:["keyword"],style:{color:"hsl(301, 63%, 40%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(5, 74%, 59%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value","punctuation"],style:{color:"hsl(119, 34%, 47%)"}},{types:["variable","operator","function"],style:{color:"hsl(221, 87%, 60%)"}},{types:["url"],style:{color:"hsl(198, 99%, 37%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(230, 8%, 24%)"}}]},qy=Dy,Iy={plain:{color:"#ebdbb2",backgroundColor:"#292828"},styles:[{types:["imports","class-name","maybe-class-name","constant","doctype","builtin","function"],style:{color:"#d8a657"}},{types:["property-access"],style:{color:"#7daea3"}},{types:["tag"],style:{color:"#e78a4e"}},{types:["attr-name","char","url","regex"],style:{color:"#a9b665"}},{types:["attr-value","string"],style:{color:"#89b482"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#ea6962"}},{types:["entity","number","symbol"],style:{color:"#d3869b"}}]},Fy=Iy,zy={plain:{color:"#654735",backgroundColor:"#f9f5d7"},styles:[{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#af2528"}},{types:["imports","class-name","maybe-class-name","constant","doctype","builtin"],style:{color:"#b4730e"}},{types:["string","attr-value"],style:{color:"#477a5b"}},{types:["property-access"],style:{color:"#266b79"}},{types:["function","attr-name","char","url"],style:{color:"#72761e"}},{types:["tag"],style:{color:"#b94c07"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["entity","number","symbol"],style:{color:"#924f79"}}]},By=zy,Uy=e=>R.useCallback(r=>{var n=r,{className:a,style:i,line:s}=n,l=Ch(n,["className","style","line"]);const o=_s(Qt({},l),{className:Sh("token-line",a)});return typeof e=="object"&&"plain"in e&&(o.style=e.plain),typeof i=="object"&&(o.style=Qt(Qt({},o.style||{}),i)),o},[e]),$y=e=>{const r=R.useCallback(({types:n,empty:a})=>{if(e!=null){{if(n.length===1&&n[0]==="plain")return a!=null?{display:"inline-block"}:void 0;if(n.length===1&&a!=null)return e[n[0]]}return Object.assign(a!=null?{display:"inline-block"}:{},...n.map(i=>e[i]))}},[e]);return R.useCallback(n=>{var a=n,{token:i,className:s,style:l}=a,o=Ch(a,["token","className","style"]);const c=_s(Qt({},o),{className:Sh("token",...i.types,s),children:i.content,style:r(i)});return l!=null&&(c.style=Qt(Qt({},c.style||{}),l)),c},[r])},Hy=/\r\n|\r|\n/,Cd=e=>{e.length===0?e.push({types:["plain"],content:`
`,empty:!0}):e.length===1&&e[0].content===""&&(e[0].content=`
`,e[0].empty=!0)},Rd=(e,r)=>{const n=e.length;return n>0&&e[n-1]===r?e:e.concat(r)},Vy=e=>{const r=[[]],n=[e],a=[0],i=[e.length];let s=0,l=0,o=[];const c=[o];for(;l>-1;){for(;(s=a[l]++)<i[l];){let u,m=r[l];const f=n[l][s];if(typeof f=="string"?(m=l>0?m:["plain"],u=f):(m=Rd(m,f.type),f.alias&&(m=Rd(m,f.alias)),u=f.content),typeof u!="string"){l++,r.push(m),n.push(u),a.push(0),i.push(u.length);continue}const j=u.split(Hy),g=j.length;o.push({types:m,content:j[0]});for(let v=1;v<g;v++)Cd(o),c.push(o=[]),o.push({types:m,content:j[v]})}l--,r.pop(),n.pop(),a.pop(),i.pop()}return Cd(o),c},Ld=Vy,Gy=({prism:e,code:r,grammar:n,language:a})=>R.useMemo(()=>{if(n==null)return Ld([r]);const i={code:r,grammar:n,language:a,tokens:[]};return e.hooks.run("before-tokenize",i),i.tokens=e.tokenize(r,n),e.hooks.run("after-tokenize",i),Ld(i.tokens)},[r,n,a,e]),Wy=(e,r)=>{const{plain:n}=e,a=e.styles.reduce((i,s)=>{const{languages:l,style:o}=s;return l&&!l.includes(r)||s.types.forEach(c=>{const u=Qt(Qt({},i[c]),o);i[c]=u}),i},{});return a.root=n,a.plain=_s(Qt({},n),{backgroundColor:void 0}),a},Qy=Wy,Jy=({children:e,language:r,code:n,theme:a,prism:i})=>{const s=r.toLowerCase(),l=Qy(a,s),o=Uy(l),c=$y(l),u=i.languages[s],m=Gy({prism:i,language:s,code:n,grammar:u});return e({tokens:m,className:`prism-code language-${s}`,style:l!=null?l.root:{},getLineProps:o,getTokenProps:c})},Ky=e=>R.createElement(Jy,_s(Qt({},e),{prism:e.prism||P,theme:e.theme||Rh,code:e.code,language:e.language}));/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/const Yy="_wrapper_axajp_1",Xy="_pre_axajp_17",Zy="_line_axajp_35",e0="_lineNumber_axajp_43",t0="_lineContent_axajp_61",r0="_label_axajp_69",dn={wrapper:Yy,pre:Xy,line:Zy,lineNumber:e0,lineContent:t0,label:r0},n0={plain:{color:"#e8eef5",backgroundColor:"#1e2837"},styles:[{types:["keyword","builtin","tag","boolean"],style:{color:"#ffd700",fontWeight:"bold"}},{types:["function","method"],style:{color:"#90cdf4"}},{types:["string","char"],style:{color:"#68d391"}},{types:["number"],style:{color:"#fc8181"}},{types:["comment"],style:{color:"#a0aec0",fontStyle:"italic"}},{types:["class-name"],style:{color:"#e5c07b"}},{types:["operator"],style:{color:"#e8eef5"}},{types:["punctuation"],style:{color:"#cbd5e0"}},{types:["annotation"],style:{color:"#ffd700"}}]};function y({code:e,language:r="java",showLineNumbers:n=!1,label:a}){return t.jsxs("div",{className:dn.wrapper,children:[a&&t.jsx("div",{className:dn.label,children:a}),t.jsx(Ky,{theme:n0,code:e.trim(),language:r,children:({style:i,tokens:s,getLineProps:l,getTokenProps:o})=>t.jsx("pre",{className:dn.pre,style:i,children:s.map((c,u)=>t.jsxs("div",{...l({line:c}),className:dn.line,children:[n&&t.jsx("span",{className:dn.lineNumber,children:u+1}),t.jsx("span",{className:dn.lineContent,children:c.map((m,d)=>t.jsx("span",{...o({token:m})},d))})]},u))})})]})}const a0="_box_ih0qt_1",i0="_title_ih0qt_17",s0="_info_ih0qt_31",l0="_warning_ih0qt_49",o0="_success_ih0qt_67",c0="_error_ih0qt_85",u0="_explanation_ih0qt_103",jl={box:a0,title:i0,info:s0,warning:l0,success:o0,error:c0,explanation:u0};function b({variant:e="info",title:r,children:n}){return t.jsxs("div",{className:`${jl.box} ${jl[e]}`,children:[r&&t.jsx("strong",{className:jl.title,children:r}),n]})}const d0="_tableWrapper_9u6ut_1",p0="_table_9u6ut_1",m0="_groupHeader_9u6ut_93",bl={tableWrapper:d0,table:p0,groupHeader:m0};function re({headers:e,rows:r}){return t.jsx("div",{className:bl.tableWrapper,children:t.jsxs("table",{className:bl.table,children:[t.jsx("thead",{children:t.jsx("tr",{children:e.map((n,a)=>t.jsx("th",{children:n},a))})}),t.jsx("tbody",{children:r.map((n,a)=>n.group?t.jsx("tr",{className:bl.groupHeader,children:t.jsx("td",{colSpan:e.length,children:n.group})},a):t.jsx("tr",{children:n.cells.map((i,s)=>t.jsx("td",{children:i},s))},a))})]})})}function h0(){return t.jsxs("div",{children:[t.jsx(C,{title:"Tipus de Dades"}),t.jsx(b,{variant:"info",title:"Fonaments",children:t.jsx("p",{children:"Els tipus de dades són la base, determinen com s'emmagatzemen i manipulen els valors. Java és un llenguatge fortament tipat que distingeix entre tipus primitius (dades simples) i tipus de referència (objectes complexos), com Strings, Arrays... Veurem només els que hem après fins ara."})}),t.jsx(re,{headers:["Nom","Paraula reservada","Sintaxi"],rows:[{group:"Primitius"},{cells:["Enter","int (32 bits)","0"]},{cells:["Flotant","float (32 bits)","3.14"]},{cells:["Flotant (double)","double (64 bits)","3.14"]},{cells:["Caràcter","char","'A'"]},{cells:["Booleà","boolean","true/false"]},{group:"Objectes"},{cells:["Cadena de text","String",'"Hola"']},{cells:["Array","tipus[]","{1, 2, 3}"]}]}),t.jsx(b,{variant:"warning",title:"Compte amb utilitzar char o String per números",children:t.jsx("p",{children:"Tot i que es permet, si el nostre objectiu és calcular, és millor utilitzar un tipus de dada dedicat als números. Si bé és cert que es poden convertir i així aconseguir els càlculs, no és una bona pràctica."})})]})}const f0="_grid_zd7lr_1",g0="_card_zd7lr_15",x0="_cardTitle_zd7lr_37",v0="_blue_zd7lr_53",j0="_good_zd7lr_81",b0="_bad_zd7lr_101",Ii={grid:f0,card:g0,cardTitle:x0,blue:v0,good:j0,bad:b0};function W({title:e,variant:r="blue",children:n}){return t.jsxs("div",{className:`${Ii.card} ${Ii[r]}`,children:[t.jsx("h3",{className:Ii.cardTitle,children:e}),n]})}function fe({children:e}){return t.jsx("div",{className:Ii.grid,children:e})}const y0="_grid_dh0in_1",S0="_card_dh0in_15",w0="_cardTitle_dh0in_41",E0="_blue_dh0in_55",C0="_yellow_dh0in_63",R0="_green_dh0in_71",L0="_pink_dh0in_79",A0="_gold_dh0in_87",Fi={grid:y0,card:S0,cardTitle:w0,blue:E0,yellow:C0,green:R0,pink:L0,gold:A0};function N({title:e,variant:r="blue",children:n}){return t.jsxs("div",{className:`${Fi.card} ${Fi[r]}`,children:[t.jsx("h4",{className:Fi.cardTitle,children:e}),n]})}function ge({children:e}){return t.jsx("div",{className:Fi.grid,children:e})}function k0(){return t.jsxs("div",{children:[t.jsx(C,{title:"Operadors"}),t.jsx(b,{variant:"info",children:t.jsx("p",{children:"Els operadors són símbols que permeten realitzar càlculs i comparacions en Java. Es divideixen en diverses categories: aritmètics (suma, resta), de comparació (major, menor, igual), lògics (&&, ||, !), d'assignació (=, +=). N'hi ha més però per ara això és el principal."})}),t.jsx(re,{headers:["Nom","Representació","Sintaxi"],rows:[{group:"Aritmètics"},{cells:["Suma","+","a + b"]},{cells:["Resta","-","a - b"]},{cells:["Multiplicació","*","a * b"]},{cells:["Divisió","/","a / b"]},{cells:["Mòdul (residu)","%","a % b"]},{cells:["Increment","++","a++ / ++a"]},{cells:["Decrement","--","a-- / --a"]},{group:"Comparació"},{cells:["Igual a","==","a == b"]},{cells:["Distint de","!=","a != b"]},{cells:["Major que",">","a > b"]},{cells:["Menor que","<","a < b"]},{cells:["Major o igual que",">=","a >= b"]},{cells:["Menor o igual que","<=","a <= b"]},{group:"Lògics"},{cells:["AND","&&","a && b"]},{cells:["OR","||","a || b"]},{cells:["NOT","!","!a"]},{group:"Assignació"},{cells:["Assignació","=","x = 5"]},{cells:["A. amb suma","+=","x += 3"]},{cells:["A. amb resta","-=","x -= 3"]},{cells:["A. amb multiplicació","*=","x *= 3"]},{cells:["A. amb divisió","/=","x /= 3"]}]}),t.jsx(C,{title:"Molt Important"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["L'operador ",t.jsx("strong",{children:"="})," serveix per assignar un valor a una variable, mentre que"," ",t.jsx("strong",{children:"=="})," s'usa per comparar si dos valors són iguals."]})}),t.jsxs(fe,{children:[t.jsxs(W,{title:"Operador =",variant:"blue",children:[t.jsxs("p",{children:["Serveix per ",t.jsx("strong",{children:"assignar"})," un valor a una variable."]}),t.jsx(y,{code:"int x = 5;"})]}),t.jsxs(W,{title:"Operador ==",variant:"blue",children:[t.jsxs("p",{children:["S'usa per ",t.jsx("strong",{children:"comparar"})," si dos valors són iguals."]}),t.jsx(y,{code:"if (x == 5)"})]})]}),t.jsx(b,{variant:"info",children:t.jsxs("p",{children:["En el cas de tipus primitius (int, double, boolean, char, etc.), ",t.jsx("strong",{children:"=="})," compara directament el valor."]})}),t.jsxs(b,{variant:"warning",title:"Strings i objectes",children:[t.jsxs("p",{children:["Si es tracta de String (o altres objectes), en Java no s'ha d'usar == per comparar contingut, sinó ",t.jsx("strong",{children:"equals()"})," perquè:"]}),t.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px"},children:[t.jsx("li",{children:"== compara si les dues referències apunten al mateix objecte en memòria, no si el text és el mateix."}),t.jsx("li",{children:"equals() compara el contingut dels Strings (caràcter per caràcter)."})]})]}),t.jsx(C,{title:"Operadors Lògics"}),t.jsx(b,{variant:"info",children:t.jsx("p",{children:"Tenint això en ment, anem a explicar i donar exemples:"})}),t.jsx(y,{label:"Variables d'exemple",code:`boolean a = true;
boolean b = true;
int c = 2;
int d = 2;`}),t.jsxs(ge,{children:[t.jsxs(N,{title:"AND (&&)",variant:"blue",children:[t.jsxs("p",{children:["Retorna TRUE únicament quan ",t.jsx("strong",{children:"AMBDUES"})," expressions/valors són TRUE"]}),t.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px",listStyle:"none"},children:[t.jsx("li",{children:"(a && b) → com ambdues són true, el resultat és true."}),t.jsx("li",{children:"(a && b) && (c == d) → com ambdues expressions són true, aleshores (true && true) → true."}),t.jsx("li",{children:"(a && b) && (c > d) → com l'expressió de la dreta és false, aleshores (true && false) → false."})]})]}),t.jsxs(N,{title:"OR (||)",variant:"yellow",children:[t.jsxs("p",{children:["Al contrari que el AND, retorna TRUE si ",t.jsx("strong",{children:"AL MENYS UNA"})," expressió té valor TRUE"]}),t.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px",listStyle:"none"},children:[t.jsx("li",{children:"(a || b) → com almenys una és true, el resultat és true."}),t.jsx("li",{children:"(a || false) → com a és true, el resultat és true."}),t.jsx("li",{children:"(false || false) → com cap és true, el resultat és false."}),t.jsx("li",{children:"(c == d || c > d) → (true || false) → true."})]})]}),t.jsx(N,{title:"NOT (!)",variant:"pink",children:t.jsx("p",{children:"Inverteix el valor d'una expressió booleana."})})]})]})}function M0(){return t.jsxs("div",{children:[t.jsx(C,{title:"Sintaxi de Java"}),t.jsx(b,{variant:"info",children:t.jsx("p",{children:"La sintaxi de Java és estructurada i orientada a objectes, heretada en gran part de C++. A continuació estan les estructures fonamentals del llenguatge: condicionals i bucles i, juntament amb la seva respectiva sintaxi per escriure codi clar i organitzat."})}),t.jsx(re,{headers:["Nom","Paraula reservada","Sintaxi"],rows:[{cells:["Variable","tipus","tipus variable = valor"]},{cells:["Constant","final","final tipus constant = valor"]},{cells:["Condicional if","if","if (condició) { }"]},{cells:["Condicional else if","else if","else if (altra_condició) { }"]},{cells:["Condicional else","else","else { }"]},{cells:["Bucle for","for","for (inicialització; condició; increment) { }"]},{cells:["Bucle for each","for","for (element : col·lecció) { }"]},{cells:["Bucle while","while","while (condició) { }"]},{cells:["Bucle do while","do while","do { } while (condició)"]},{cells:["Switch","switch","switch (variable) { case valor: }"]},{cells:["Mètode principal","main","public static void main (String[] args) { }"]},{cells:["Sentència break","break","break"]},{cells:["Sentència continue","continue","continue"]},{cells:["Retorn","return","return valor"]}]}),t.jsx(b,{variant:"explanation",title:"Extra",children:t.jsx("p",{children:"Un programa no és més que una seqüència d'instruccions que s'executen en ordre de dalt cap avall, llevat que utilitzem estructures que canvien aquest flux."})})]})}function N0(){return t.jsxs("div",{children:[t.jsx(C,{title:'Estructures condicionals → "fer preguntes"'}),t.jsx(b,{variant:"info",children:t.jsx("p",{children:"Utilitzem una estructura condicional quan el programa ha de prendre decisions."})}),t.jsxs(N,{title:"Exemple vida real",variant:"blue",children:[t.jsx("p",{children:"Si plou,"}),t.jsx("p",{children:"porto paraigua."}),t.jsx("p",{children:"Si no,"}),t.jsx("p",{children:"no me'l porto."})]}),t.jsxs(N,{title:"Esquema mental",variant:"yellow",children:[t.jsx("p",{children:"SI (condició és verdadera) → faig alguna cosa"}),t.jsx("p",{children:"SI NO → faig una altra cosa"})]}),t.jsx(y,{label:"En codi",code:`if (plou) {
    portoParagua();
} else {
    noElPorto();
}`}),t.jsx(C,{title:"Cas amb més d'una pregunta (else if)"}),t.jsxs(N,{title:"Esquema mental",variant:"green",children:[t.jsx("p",{children:"Si plou → paraigua"}),t.jsx("p",{children:"Si neva → abric"}),t.jsx("p",{children:"Si no → res especial"})]}),t.jsx(y,{label:"En codi",code:`if (plou) {
    portoParagua();
} else if (neva) {
    portoAbric();
} else {
    noFaigRes();
}`}),t.jsx(C,{title:"Cas on una pregunta depèn d'una altra"}),t.jsx(b,{variant:"explanation",children:t.jsx("p",{children:"A destacar aquí que el flux va en ordre, primer avalua la primera condició, després la següent, que no depèn de la primera, és a dir, en cas de necessitar que la primera pregunta sigui TRUE perquè avaluï la següent, estaríem parlant d'estructures niuades."})}),t.jsxs(N,{title:"Esquema mental niuat",variant:"pink",children:[t.jsx("p",{children:"Si plou →"}),t.jsx("p",{style:{marginLeft:"20px"},children:"Si tinc paraigua → porto paraigua"}),t.jsx("p",{style:{marginLeft:"20px"},children:"Si no → espero que deixi de ploure"}),t.jsx("p",{children:"Si no → no porto paraigua"})]}),t.jsx(y,{label:"En codi",code:`if (plou) {
    if (paragua) {
        portoParagua();
    } else {
        esperar();
    }
} else {
    noPortoParagua();
}`})]})}function P0(){return t.jsxs("div",{children:[t.jsx(C,{title:`Switch → "menú d'opcions"`}),t.jsx(b,{variant:"info",children:t.jsx("p",{children:"Utilitzem switch quan tenim diverses opcions possibles i només una pot ser la correcta."})}),t.jsxs(N,{title:"Exemple vida real",variant:"blue",children:[t.jsx("p",{children:"Entro a un restaurant i trio:"}),t.jsx("p",{children:"1 → Pizza"}),t.jsx("p",{children:"2 → Amanida"}),t.jsx("p",{children:"3 → Pasta"})]}),t.jsx(N,{title:"Esquema mental",variant:"yellow",children:t.jsx("p",{children:"SEGONS l'opció que triïs → executo una cosa o una altra"})}),t.jsx(y,{label:"En codi",code:`switch (opcio) {
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
}`}),t.jsx(b,{variant:"explanation",children:t.jsx("p",{children:"És com anar directe al gra: si coincideix l'opció, s'executa aquest bloc."})})]})}function T0(){return t.jsxs("div",{children:[t.jsx(C,{title:'Bucles → "repetir mentre alguna cosa sigui cert"'}),t.jsx(b,{variant:"info",children:t.jsx("p",{children:"Utilitzem estructures de repetició quan volem que el programa repeteixi alguna cosa moltes vegades, ja sigui per imprimir, buscar o recórrer."})}),t.jsx(b,{variant:"warning",title:"Si la condició és false des del principi, no entra mai al bucle!!!",children:t.jsx("p",{children:"Recorda que la condició controla l'entrada al bucle. Si ja és falsa abans de començar, el codi del bucle mai s'executarà."})}),t.jsx(C,{title:'while → "repeteix mentre es compleixi la condició"'}),t.jsx(b,{variant:"info",children:t.jsx("p",{children:"Mentre no introdueixi la contrasenya correcta, segueix preguntant."})}),t.jsxs(N,{title:"Esquema mental",variant:"blue",children:[t.jsx("p",{children:"MENTRE (condició sigui true) → repeteixo"}),t.jsx("p",{children:"Quan sigui false → surto del bucle"})]}),t.jsx(y,{label:"En codi",code:`while (!passwordCorrecta) {
    demanarPassword();
}`}),t.jsx(C,{title:'do while → "fes-ho almenys una vegada"'}),t.jsx(b,{variant:"info",children:t.jsx("p",{children:"Pregunto la contrasenya almenys una vegada."})}),t.jsx(N,{title:"Esquema mental",variant:"yellow",children:t.jsx("p",{children:"FAIG → comprovo → si segueix sent true → repeteixo"})}),t.jsx(y,{label:"En codi",code:`do {
    demanarPassword();
} while (!passwordCorrecta);`}),t.jsx(C,{title:'for → "repeteix un número fix de vegades"'}),t.jsx(b,{variant:"info",children:t.jsx("p",{children:"El bucle for s'utilitza quan saps exactament quantes vegades vols repetir alguna cosa. És especialment útil per recórrer col·leccions o fer un número determinat d'iteracions."})}),t.jsx(N,{title:"Esquema mental",variant:"green",children:t.jsx("p",{children:"PER (des d'un valor inicial; mentre es compleixi una condició; incrementant) → repeteixo"})}),t.jsx(y,{label:"En codi",code:`for (int i = 1; i <= 10; i++) {
    System.out.println(i);
}
// Imprimeix números de l'1 al 10`}),t.jsx(b,{variant:"explanation",children:t.jsx("p",{children:"El bucle for té tres parts separades per punt i coma: la inicialització (on comença), la condició (fins quan continua), i l'increment (com avança en cada iteració)."})}),t.jsxs(b,{variant:"info",title:"El valor TRUE controla tot",children:[t.jsx("p",{children:"Tant en condicions com en bucles:"}),t.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px"},children:[t.jsx("li",{children:"Si la condició és true → entra."}),t.jsx("li",{children:"Si la condició és false → no entra o surt."}),t.jsx("li",{children:"Si la condició és false des del principi, el programa salta aquesta estructura i segueix amb el següent o acaba."})]})]}),t.jsx(C,{title:"Resum"}),t.jsx(re,{headers:["Estructura","Per a què serveix","Exemple mental"],rows:[{cells:["if / else","Prendre decisions",'"Si passa això, faig això"']},{cells:["switch","Triar una opció entre diverses",`"Menú d'opcions"`]},{cells:["while","Repetir mentre alguna cosa sigui cert",'"Mentre no acabi, segueixo"']},{cells:["do while","Repetir almenys una vegada",'"Pregunto mínim una vegada"']},{cells:["for","Repetir un número fix de vegades",`"De l'1 al 10 faig això"`]}]})]})}function _0(){return t.jsxs("div",{children:[t.jsx(C,{title:"Modificadors d'accés"}),t.jsx(b,{variant:"info",children:t.jsx("p",{children:"Els modificadors d'accés controlen la visibilitat de classes, mètodes i atributs en Java. Determinen qui pot accedir a cada element del codi."})}),t.jsx(re,{headers:["Nom","Paraula reservada","Descripció"],rows:[{cells:["public","public","Accessible des de qualsevol altra classe en qualsevol paquet."]},{cells:["private","private","Accessible només des de la classe en la qual va ser declarat."]},{cells:["protected","protected","Accessible des del mateix paquet i subclasses."]},{cells:["default","(sense paraula)","Per defecte. Accessible per a les classes del mateix paquet."]}]}),t.jsxs(ge,{children:[t.jsxs(N,{title:"public",variant:"green",children:[t.jsxs("p",{children:["Accessible des de ",t.jsx("strong",{children:"qualsevol lloc"}),"."]}),t.jsx(y,{code:"public int edat = 25;"})]}),t.jsxs(N,{title:"private",variant:"pink",children:[t.jsxs("p",{children:["Accessible només dins la ",t.jsx("strong",{children:"mateixa classe"}),"."]}),t.jsx(y,{code:'private String nom = "Joan";'})]}),t.jsxs(N,{title:"protected",variant:"yellow",children:[t.jsxs("p",{children:["Accessible dins el ",t.jsx("strong",{children:"paquet i subclasses"}),"."]}),t.jsx(y,{code:"protected double salari = 1500.0;"})]}),t.jsxs(N,{title:"default (sense paraula)",variant:"blue",children:[t.jsxs("p",{children:["Accessible només dins el ",t.jsx("strong",{children:"mateix paquet"}),"."]}),t.jsx(y,{code:"int comptador = 0;"})]})]})]})}const O0="_button_1snnp_1",D0="_secondary_1snnp_47",q0="_small_1snnp_67",yl={button:O0,secondary:D0,small:q0};function at({children:e,onClick:r,variant:n,size:a,...i}){const s=[yl.button,n==="secondary"&&yl.secondary,a==="small"&&yl.small].filter(Boolean).join(" ");return t.jsx("button",{className:s,onClick:r,...i,children:e})}const I0="_container_cd20o_1",F0="_title_cd20o_17",z0="_arrayContainer_cd20o_33",B0="_cell_cd20o_53",U0="_cellValue_cd20o_69",$0="_cellIndex_cd20o_115",H0="_controls_cd20o_131",V0="_info_cd20o_205",gr={container:I0,title:F0,arrayContainer:z0,cell:B0,cellValue:U0,cellIndex:$0,controls:H0,info:V0};function bo(){return Math.floor(Math.random()*100)}function G0(e){return Array.from({length:e},()=>bo())}function W0(){const[e,r]=R.useState(()=>G0(5)),n=()=>{r(s=>s.map(()=>bo()))},a=()=>{e.length<10&&r(s=>[...s,bo()])},i=()=>{e.length>1&&r(s=>s.slice(0,-1))};return t.jsxs("div",{className:gr.container,children:[t.jsx("div",{className:gr.title,children:"Array Interactiu 1D"}),t.jsx("div",{className:gr.arrayContainer,children:e.map((s,l)=>t.jsxs("div",{className:gr.cell,children:[t.jsx("div",{className:gr.cellValue,children:s}),t.jsxs("div",{className:gr.cellIndex,children:["[",l,"]"]})]},`${l}-${s}`))}),t.jsxs("div",{className:gr.controls,children:[t.jsx(at,{onClick:n,children:"Canviar Valors"}),t.jsx(at,{onClick:a,variant:"secondary",disabled:e.length>=10,children:"Afegir Element"}),t.jsx(at,{onClick:i,variant:"secondary",disabled:e.length<=1,children:"Eliminar Ultim"})]}),t.jsxs("div",{className:gr.info,children:["int[] array = new int[",e.length,"];   // Longitud: ",e.length]})]})}const Q0=`// Declaracio d'un array d'enters
int[] numeros = new int[5];

// Declaracio amb valors inicials
int[] notes = {7, 9, 5, 8, 6};

// Declaracio de Strings
String[] noms = {"Anna", "Marc", "Laia"};`,J0=`int[] notes = {7, 9, 5, 8, 6};

// Accedir a un element (index comenca en 0)
System.out.println(notes[0]); // 7
System.out.println(notes[2]); // 5

// Modificar un element
notes[1] = 10;
System.out.println(notes[1]); // 10

// Longitud de l'array
System.out.println(notes.length); // 5`,K0=`int[] numeros = {10, 20, 30, 40, 50};

// Recorregut amb for classic
for (int i = 0; i < numeros.length; i++) {
    System.out.println("Index " + i + ": " + numeros[i]);
}

// Recorregut amb for-each
for (int num : numeros) {
    System.out.println("Valor: " + num);
}`,Y0=`public class ExempleArrays {
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
}`;function X0(){return t.jsxs("div",{children:[t.jsx(C,{title:"Arrays Unidimensionals (1D)"}),t.jsx(b,{variant:"info",title:"Què és un Array?",children:t.jsxs("p",{children:["Un ",t.jsx("strong",{children:"array"})," és una estructura de dades que permet emmagatzemar múltiples valors del mateix tipus en una sola variable. Cada element té un",t.jsx("strong",{children:" índex"})," que comença en 0 i permet accedir directament a qualsevol posició."]})}),t.jsx(W0,{}),t.jsx(b,{variant:"explanation",title:"Característiques dels Arrays",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Mida fixa:"})," un cop creat, la mida no pot canviar."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Índex base 0:"})," el primer element és a la posició 0."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Tipus homogeni:"})," tots els elements són del mateix tipus."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Accés directe:"})," es pot accedir a qualsevol element pel seu índex en temps constant."]})]})}),t.jsx(y,{code:Q0,label:"Declaració i inicialització",showLineNumbers:!0}),t.jsx(re,{headers:["Operació","Sintaxi","Exemple"],rows:[{cells:["Declarar buit","tipus[] nom = new tipus[mida]","int[] nums = new int[5]"]},{cells:["Declarar amb valors","tipus[] nom = {v1, v2, ...}","int[] nums = {1, 2, 3}"]},{cells:["Accedir element","nom[index]","nums[0] // primer element"]},{cells:["Modificar element","nom[index] = valor","nums[2] = 99"]},{cells:["Longitud","nom.length","nums.length // 3"]}]}),t.jsx(y,{code:J0,label:"Accés i modificació d'elements",showLineNumbers:!0}),t.jsx(b,{variant:"warning",title:"ArrayIndexOutOfBoundsException",children:t.jsxs("p",{children:["Si intentes accedir a un índex fora del rang (negatiu o major/igual que la longitud), Java llençarà una excepció ",t.jsx("code",{children:"ArrayIndexOutOfBoundsException"}),". Sempre comprova que l'índex estigui dins dels límits!"]})}),t.jsx(y,{code:K0,label:"Recórrer un Array",showLineNumbers:!0}),t.jsx(b,{variant:"success",title:"Exemple complet: Temperatures",children:t.jsx("p",{children:"Un exemple pràctic que calcula la mitjana i el màxim d'un array de temperatures setmanals."})}),t.jsx(y,{code:Y0,label:"Exemple: Càlcul de mitjana i màxim",showLineNumbers:!0})]})}const Z0="_container_1u9g6_1",eS="_title_1u9g6_17",tS="_matrixWrapper_1u9g6_33",rS="_matrix_1u9g6_33",nS="_cell_1u9g6_57",aS="_cellActive_1u9g6_107",iS="_cellSelected_1u9g6_125",sS="_cellIndex_1u9g6_141",lS="_controls_1u9g6_157",oS="_info_1u9g6_171",$t={container:Z0,title:eS,matrixWrapper:tS,matrix:rS,cell:nS,cellActive:aS,cellSelected:iS,cellIndex:sS,controls:lS,info:oS},Lh=4,Ah=4;function cS(){return Math.floor(Math.random()*100)}function Ad(){return Array.from({length:Lh},()=>Array.from({length:Ah},()=>cS()))}function uS(){const[e,r]=R.useState(()=>Ad()),[n,a]=R.useState(new Set),[i,s]=R.useState(null),l=R.useRef([]),o=R.useCallback(()=>{l.current.forEach(d=>clearTimeout(d)),l.current=[]},[]),c=()=>{o(),a(new Set),s(null),r(Ad())},u=()=>{o(),a(new Set),s(null);const d=Math.min(Lh,Ah);for(let f=0;f<d;f++){const j=setTimeout(()=>{a(g=>{const v=new Set(g);return v.add(`${f}-${f}`),v})},f*200);l.current.push(j)}},m=(d,f)=>{s(`${d}-${f}`)};return t.jsxs("div",{className:$t.container,children:[t.jsx("div",{className:$t.title,children:"Matriu Interactiva 4x4"}),t.jsx("div",{className:$t.matrixWrapper,children:t.jsx("div",{className:$t.matrix,children:e.map((d,f)=>d.map((j,g)=>{const v=`${f}-${g}`,S=n.has(v),h=i===v;let p=$t.cell;return S&&(p+=` ${$t.cellActive}`),h&&(p+=` ${$t.cellSelected}`),t.jsxs("div",{className:p,onClick:()=>m(f,g),children:[t.jsx("span",{children:j}),t.jsxs("span",{className:$t.cellIndex,children:["[",f,"][",g,"]"]})]},v)}))})}),t.jsxs("div",{className:$t.controls,children:[t.jsx(at,{onClick:u,children:"Ressaltar Diagonal"}),t.jsx(at,{onClick:c,variant:"secondary",children:"Nous Valors"})]}),t.jsx("div",{className:$t.info,children:i?`matriu[${i.replace("-","][")}] = ${e[parseInt(i.split("-")[0])][parseInt(i.split("-")[1])]}`:"int[][] matriu = new int[4][4];"})]})}const dS=`// Declaracio d'una matriu 3x4
int[][] matriu = new int[3][4];

// Declaracio amb valors inicials
int[][] notes = {
    {7, 8, 9},    // Fila 0
    {6, 5, 8},    // Fila 1
    {9, 7, 10}    // Fila 2
};`,pS=`int[][] matriu = {
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
System.out.println("Columnes: " + matriu[0].length);   // 3`,mS=`int[][] matriu = {
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
}`,hS=`// Recorrer la diagonal principal
// (nomes si la matriu es quadrada)
for (int i = 0; i < matriu.length; i++) {
    System.out.println("Diagonal[" + i + "]: " + matriu[i][i]);
}`,fS=`public class ExempleMatriu {
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
}`;function gS(){return t.jsxs("div",{children:[t.jsx(C,{title:"Arrays Bidimensionals (Matrius)"}),t.jsx(b,{variant:"info",title:"Què és una Matriu?",children:t.jsxs("p",{children:["Una ",t.jsx("strong",{children:"matriu"})," (o array 2D) és un array d'arrays. Es pot pensar com una taula amb ",t.jsx("strong",{children:"files"})," i ",t.jsx("strong",{children:"columnes"}),". Cada element s'identifica amb dos índexos: ",t.jsx("code",{children:"[fila][columna]"}),"."]})}),t.jsx(uS,{}),t.jsx(b,{variant:"explanation",title:"Estructura d'una Matriu",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Files:"})," cada fila és un array independent."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Columnes:"})," cada posició dins d'una fila."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Accés:"})," ",t.jsx("code",{children:"matriu[fila][columna]"})," per llegir o escriure."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Mida:"})," ",t.jsx("code",{children:"matriu.length"})," dona el nombre de files, ",t.jsx("code",{children:"matriu[0].length"})," dona les columnes."]})]})}),t.jsx(y,{code:dS,label:"Declaració de matrius",showLineNumbers:!0}),t.jsx(re,{headers:["Operació","Sintaxi","Descripció"],rows:[{cells:["Declarar buida","tipus[][] nom = new tipus[files][cols]","Crea matriu amb zeros"]},{cells:["Declarar amb valors","tipus[][] nom = {{...}, {...}}","Inicialitza amb valors"]},{cells:["Accedir element","nom[fila][col]","Llegeix un valor concret"]},{cells:["Nombre files","nom.length","Retorna total de files"]},{cells:["Nombre columnes","nom[0].length","Retorna columnes de la fila 0"]}]}),t.jsx(y,{code:pS,label:"Accés i modificació d'elements",showLineNumbers:!0}),t.jsx(y,{code:mS,label:"Recorregut complet de la matriu",showLineNumbers:!0}),t.jsx(b,{variant:"success",title:"Diagonal principal",children:t.jsxs("p",{children:["En una matriu quadrada (NxN), la ",t.jsx("strong",{children:"diagonal principal"})," són els elements on l'índex de fila és igual a l'índex de columna: ",t.jsx("code",{children:"matriu[i][i]"}),"."]})}),t.jsx(y,{code:hS,label:"Recórrer la diagonal",showLineNumbers:!0}),t.jsx(b,{variant:"info",title:"Exemple pràctic: Notes d'alumnes",children:t.jsx("p",{children:"Un cas d'ús habitual és guardar les notes de diversos alumnes en diverses assignatures, on cada fila representa un alumne i cada columna una assignatura."})}),t.jsx(y,{code:fS,label:"Exemple: Mitjana per alumne",showLineNumbers:!0})]})}const xS="_container_1elsv_1",vS="_title_1elsv_9",jS="_subtitle_1elsv_17",bS="_listArea_1elsv_25",yS="_listContainer_1elsv_33",SS="_emptyMessage_1elsv_41",wS="_cell_1elsv_48",ES="_cellValue_1elsv_55",CS="_cellHighlight_1elsv_79",RS="_cellShifting_1elsv_86",LS="_cellIndex_1elsv_92",AS="_controlsGrid_1elsv_101",kS="_controlGroup_1elsv_108",MS="_controlLabel_1elsv_115",NS="_controlRow_1elsv_124",PS="_console_1elsv_156",TS="_consoleLine_1elsv_170",_S="_consoleCode_1elsv_174",OS="_consoleResult_1elsv_178",DS="_consoleError_1elsv_182",qS="_consolePlaceholder_1elsv_186",IS="_sizeBar_1elsv_192",FS="_sizeBarLabel_1elsv_205",zS="_sizeBarTrack_1elsv_210",BS="_sizeBarFill_1elsv_218",pe={container:xS,title:vS,subtitle:jS,listArea:bS,listContainer:yS,emptyMessage:SS,cell:wS,cellValue:ES,cellHighlight:CS,cellShifting:RS,cellIndex:LS,controlsGrid:AS,controlGroup:kS,controlLabel:MS,controlRow:NS,console:PS,consoleLine:TS,consoleCode:_S,consoleResult:OS,consoleError:DS,consolePlaceholder:qS,sizeBar:IS,sizeBarLabel:FS,sizeBarTrack:zS,sizeBarFill:BS},Si=15;function US(){const[e,r]=R.useState(["Hola","Món","Java"]),[n,a]=R.useState([]),[i,s]=R.useState(null),[l,o]=R.useState([]),c=R.useRef(null),u=R.useRef(null),m=R.useRef(null),d=R.useRef(null),f=R.useRef(null),j=R.useRef(null),g=R.useRef(null),v=R.useRef(null),S=R.useRef(null);R.useEffect(()=>{S.current&&(S.current.scrollTop=S.current.scrollHeight)},[n]);const h=R.useCallback((O,$,te=!1)=>{a(D=>[...D.slice(-25),{code:O,result:$,isError:te,id:Date.now()+Math.random()}])},[]),p=R.useCallback(O=>{s(O),setTimeout(()=>s(null),800)},[]),x=R.useCallback(O=>{o(O),setTimeout(()=>o([]),600)},[]),A=()=>{var $;const O=($=c.current)==null?void 0:$.value.trim();if(O){if(e.length>=Si){h(`llista.add("${O}")`,`Error: massa elements (max ${Si} per la demo)`,!0);return}r(te=>[...te,O]),h(`llista.add("${O}")`,`// S'afegeix "${O}" al final → mida = ${e.length+1}`),p(e.length),c.current.value="",c.current.focus()}},M=()=>{var D,B;const O=parseInt((D=u.current)==null?void 0:D.value),$=(B=m.current)==null?void 0:B.value.trim();if(isNaN(O)||!$)return;if(O<0||O>e.length){h(`llista.add(${O}, "${$}")`,`IndexOutOfBoundsException: Index ${O} fora de rang [0..${e.length}]`,!0);return}if(e.length>=Si){h(`llista.add(${O}, "${$}")`,`Error: massa elements (max ${Si})`,!0);return}const te=[];for(let U=O;U<e.length;U++)te.push(U+1);r(U=>[...U.slice(0,O),$,...U.slice(O)]),h(`llista.add(${O}, "${$}")`,`// Insereix "${$}" a posició ${O} → els elements es desplacen`),p(O),x(te),u.current.value="",m.current.value=""},T=()=>{var D;const O=parseInt((D=d.current)==null?void 0:D.value);if(isNaN(O))return;if(O<0||O>=e.length){h(`llista.remove(${O})`,`IndexOutOfBoundsException: Index ${O} fora de rang [0..${e.length-1}]`,!0);return}const $=e[O],te=[];for(let B=O+1;B<e.length;B++)te.push(B-1);r(B=>B.filter((U,ne)=>ne!==O)),h(`llista.remove(${O})`,`// Elimina "${$}" de posició ${O} → retorna "${$}"`),x(te),d.current.value=""},_=()=>{var $;const O=parseInt(($=f.current)==null?void 0:$.value);if(!isNaN(O)){if(O<0||O>=e.length){h(`llista.get(${O})`,`IndexOutOfBoundsException: Index ${O} fora de rang [0..${e.length-1}]`,!0);return}h(`llista.get(${O})`,`→ "${e[O]}"`),p(O),f.current.value=""}},E=()=>{var D,B;const O=parseInt((D=j.current)==null?void 0:D.value),$=(B=g.current)==null?void 0:B.value.trim();if(isNaN(O)||!$)return;if(O<0||O>=e.length){h(`llista.set(${O}, "${$}")`,`IndexOutOfBoundsException: Index ${O} fora de rang [0..${e.length-1}]`,!0);return}const te=e[O];r(U=>U.map((ne,ce)=>ce===O?$:ne)),h(`llista.set(${O}, "${$}")`,`// Substitueix "${te}" per "${$}" → retorna "${te}"`),p(O),j.current.value="",g.current.value=""},H=()=>{var D;const O=(D=v.current)==null?void 0:D.value.trim();if(!O)return;const $=e.includes(O),te=e.indexOf(O);h(`llista.contains("${O}")`,`→ ${$}${$?` (trobat a posició ${te})`:""}`),$&&p(te),v.current.value=""},F=()=>{h("llista.size()",`→ ${e.length}`)},se=()=>{r([]),h("llista.clear()","// S'han eliminat tots els elements → mida = 0")},Z=()=>{r(["Hola","Món","Java"]),a([]),s(null),o([])},xe=O=>$=>{$.key==="Enter"&&O()},ee=Math.max(10,Math.pow(2,Math.ceil(Math.log2(e.length||1)+.1)));return t.jsxs("div",{className:pe.container,children:[t.jsx("div",{className:pe.title,children:"Simulador Interactiu d'ArrayList"}),t.jsx("div",{className:pe.subtitle,children:"ArrayList<String> llista — Prova les operacions i observa el resultat!"}),t.jsx("div",{className:pe.listArea,children:e.length===0?t.jsx("div",{className:pe.emptyMessage,children:"[ ArrayList buit — afegeix elements! ]"}):t.jsx("div",{className:pe.listContainer,children:e.map((O,$)=>t.jsxs("div",{className:`${pe.cell} ${i===$?pe.cellHighlight:""} ${l.includes($)?pe.cellShifting:""}`,children:[t.jsx("div",{className:pe.cellValue,children:`"${O}"`}),t.jsxs("div",{className:pe.cellIndex,children:["[",$,"]"]})]},`${$}-${O}-${e.length}`))})}),t.jsxs("div",{className:pe.sizeBar,children:[t.jsxs("span",{className:pe.sizeBarLabel,children:["size() = ",e.length]}),t.jsx("div",{className:pe.sizeBarTrack,children:t.jsx("div",{className:pe.sizeBarFill,style:{width:`${e.length/ee*100}%`}})}),t.jsxs("span",{children:["capacitat interna ≈ ",ee]})]}),t.jsxs("div",{className:pe.controlsGrid,children:[t.jsxs("div",{className:pe.controlGroup,children:[t.jsx("div",{className:pe.controlLabel,children:"Afegir elements"}),t.jsxs("div",{className:pe.controlRow,children:[t.jsx("input",{ref:c,placeholder:"valor",onKeyDown:xe(A)}),t.jsx(at,{onClick:A,variant:"secondary",children:"add()"})]}),t.jsxs("div",{className:pe.controlRow,style:{marginTop:6},children:[t.jsx("input",{ref:u,placeholder:"pos",style:{maxWidth:50}}),t.jsx("input",{ref:m,placeholder:"valor",onKeyDown:xe(M)}),t.jsx(at,{onClick:M,variant:"secondary",children:"add(i, v)"})]})]}),t.jsxs("div",{className:pe.controlGroup,children:[t.jsx("div",{className:pe.controlLabel,children:"Accedir i modificar"}),t.jsxs("div",{className:pe.controlRow,children:[t.jsx("input",{ref:f,placeholder:"pos",style:{maxWidth:50},onKeyDown:xe(_)}),t.jsx(at,{onClick:_,variant:"secondary",children:"get(i)"}),t.jsx("input",{ref:d,placeholder:"pos",style:{maxWidth:50},onKeyDown:xe(T)}),t.jsx(at,{onClick:T,variant:"secondary",children:"remove(i)"})]}),t.jsxs("div",{className:pe.controlRow,style:{marginTop:6},children:[t.jsx("input",{ref:j,placeholder:"pos",style:{maxWidth:50}}),t.jsx("input",{ref:g,placeholder:"nou valor",onKeyDown:xe(E)}),t.jsx(at,{onClick:E,variant:"secondary",children:"set(i, v)"})]})]}),t.jsxs("div",{className:pe.controlGroup,children:[t.jsx("div",{className:pe.controlLabel,children:"Cercar i utilitats"}),t.jsxs("div",{className:pe.controlRow,children:[t.jsx("input",{ref:v,placeholder:"valor",onKeyDown:xe(H)}),t.jsx(at,{onClick:H,variant:"secondary",children:"contains()"})]}),t.jsxs("div",{className:pe.controlRow,style:{marginTop:6},children:[t.jsx(at,{onClick:F,variant:"secondary",children:"size()"}),t.jsx(at,{onClick:se,variant:"secondary",children:"clear()"}),t.jsx(at,{onClick:Z,children:"Reset"})]})]})]}),t.jsx("div",{className:pe.console,ref:S,children:n.length===0?t.jsx("div",{className:pe.consolePlaceholder,children:"// Fes clic als botons per veure el codi Java equivalent..."}):n.map(O=>t.jsxs("div",{className:pe.consoleLine,children:[t.jsx("span",{className:pe.consoleCode,children:O.code})," ",t.jsx("span",{className:O.isError?pe.consoleError:pe.consoleResult,children:O.result})]},O.id))})]})}const $S="import java.util.ArrayList;",HS=`// Crear un ArrayList de Strings
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
int mida = fruites.size(); // 3`,GS=`ArrayList<String> noms = new ArrayList<>();
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
// Per eliminar un del mig... un malson de desplaçaments manuals`,QS=`// AMB ARRAYLIST: creix automàticament, molt més fàcil
ArrayList<String> alumnes = new ArrayList<>();
alumnes.add("Anna");
alumnes.add("Marc");
alumnes.add("Laia");
alumnes.remove(1); // Elimina "Marc" fàcilment
// Mida s'ajusta sola: alumnes.size() → 2`,JS=`import java.util.ArrayList;

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
}`,KS=`// ❌ NO funciona: els tipus primitius no es poden usar directament
// ArrayList<int> numeros = new ArrayList<>();

// ✅ Cal usar les classes Wrapper
ArrayList<Integer> numeros = new ArrayList<>();
ArrayList<Double>  decimals = new ArrayList<>();
ArrayList<Boolean> flags = new ArrayList<>();
ArrayList<Character> lletres = new ArrayList<>();

// Java fa la conversió automàtica (autoboxing)
numeros.add(42);        // int → Integer automàticament
int valor = numeros.get(0); // Integer → int automàticament`,YS=`ArrayList<String> llista = new ArrayList<>();
llista.add("A");
llista.add("B");

// ❌ ERROR: IndexOutOfBoundsException
// String x = llista.get(5);   // Només hi ha posicions 0 i 1!
// llista.remove(10);           // No existeix posició 10!

// ✅ CORRECTE: sempre comprova amb size()
if (2 < llista.size()) {
    String x = llista.get(2);
}`;function XS(){return t.jsxs("div",{children:[t.jsx(C,{title:"ArrayList: Llistes Dinàmiques"}),t.jsxs(b,{variant:"info",title:"Què és un ArrayList?",children:[t.jsxs("p",{children:["Un ",t.jsx("strong",{children:"ArrayList"})," és com un array, però ",t.jsx("strong",{children:"millor"}),": creix i s'encongeix automàticament quan afegeixes o elimines elements. No has de decidir la mida per avançat — simplement afegeixes el que necessitis."]}),t.jsx("p",{style:{marginTop:8},children:"Imagina't una llista de la compra: pots afegir productes, treure'ls quan els compres i no et cal saber per endavant quants en seran. Això és un ArrayList!"})]}),t.jsx(C,{title:"Array vs ArrayList: Quina diferència hi ha?"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Array (clàssic)",variant:"pink",children:t.jsxs("ul",{style:{margin:0,paddingLeft:18},children:[t.jsxs("li",{children:["Mida ",t.jsx("strong",{children:"fixa"})," — decidida al crear-lo"]}),t.jsx("li",{children:"No pot créixer ni encongir-se"}),t.jsx("li",{children:"Funciona amb tipus primitius (int, double...)"}),t.jsxs("li",{children:["Accés amb ",t.jsx("code",{children:"array[i]"})]}),t.jsxs("li",{children:["Longitud amb ",t.jsx("code",{children:".length"})]})]})}),t.jsx(N,{title:"ArrayList (dinàmic)",variant:"blue",children:t.jsxs("ul",{style:{margin:0,paddingLeft:18},children:[t.jsxs("li",{children:["Mida ",t.jsx("strong",{children:"flexible"})," — creix automàticament"]}),t.jsx("li",{children:"Afegir i eliminar quan vulguis"}),t.jsx("li",{children:"Només objectes (Integer, String, Double...)"}),t.jsxs("li",{children:["Accés amb ",t.jsx("code",{children:".get(i)"})]}),t.jsxs("li",{children:["Longitud amb ",t.jsx("code",{children:".size()"})]})]})})]}),t.jsxs(fe,{children:[t.jsx(W,{title:"Amb Array: rígid i complicat",variant:"bad",children:t.jsx(y,{code:WS,language:"java"})}),t.jsx(W,{title:"Amb ArrayList: flexible i senzill",variant:"good",children:t.jsx(y,{code:QS,language:"java"})})]}),t.jsx(C,{title:"Com crear un ArrayList"}),t.jsx(b,{variant:"warning",title:"Important: el import",children:t.jsx("p",{children:"Abans d'usar ArrayList, cal importar-lo a la part de dalt del fitxer:"})}),t.jsx(y,{code:$S,label:"Import necessari",language:"java"}),t.jsx(y,{code:HS,label:"Creació d'un ArrayList",language:"java",showLineNumbers:!0}),t.jsx(b,{variant:"explanation",title:"Tipus Wrapper: per què Integer i no int?",children:t.jsxs("p",{children:["ArrayList només pot guardar ",t.jsx("strong",{children:"objectes"}),", no tipus primitius. Per això existeixen les ",t.jsx("strong",{children:"classes Wrapper"}),': són la versió "objecte" dels tipus primitius. La bona notícia és que Java fa la conversió automàticament (',t.jsx("strong",{children:"autoboxing"}),")."]})}),t.jsx(re,{headers:["Tipus primitiu","Classe Wrapper","Exemple ArrayList"],rows:[{cells:["int","Integer","ArrayList<Integer>"]},{cells:["double","Double","ArrayList<Double>"]},{cells:["boolean","Boolean","ArrayList<Boolean>"]},{cells:["char","Character","ArrayList<Character>"]},{cells:["String","String (ja és objecte!)","ArrayList<String>"]}]}),t.jsx(y,{code:KS,label:"Tipus Wrapper i Autoboxing",language:"java",showLineNumbers:!0}),t.jsx(C,{title:"Operacions principals"}),t.jsx(re,{headers:["Mètode","Què fa","Retorna"],rows:[{cells:["add(element)","Afegeix al final de la llista","true"]},{cells:["add(index, element)","Insereix a la posició indicada","void"]},{cells:["get(index)","Obté l'element de la posició","L'element"]},{cells:["set(index, element)","Substitueix l'element de la posició","L'element antic"]},{cells:["remove(index)","Elimina l'element de la posició","L'element eliminat"]},{cells:["size()","Retorna quants elements hi ha","int"]},{cells:["contains(element)","Comprova si l'element hi és","boolean"]},{cells:["indexOf(element)","Retorna la posició de l'element (-1 si no hi és)","int"]},{cells:["isEmpty()","Comprova si la llista està buida","boolean"]},{cells:["clear()","Elimina tots els elements","void"]}]}),t.jsx(y,{code:VS,label:"Operacions bàsiques en acció",language:"java",showLineNumbers:!0}),t.jsx(C,{title:"Prova-ho tu!"}),t.jsx(b,{variant:"info",title:"Simulador interactiu",children:t.jsx("p",{children:"Utilitza el simulador de sota per provar totes les operacions d'un ArrayList. Escriu valors, fes clic als botons i observa com canvia la llista i el codi Java equivalent a la consola."})}),t.jsx(US,{}),t.jsx(C,{title:"Recórrer un ArrayList"}),t.jsx(y,{code:GS,label:"Formes de recórrer",language:"java",showLineNumbers:!0}),t.jsx(b,{variant:"explanation",title:"Quina forma triar?",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"for clàssic:"})," quan necessites saber la posició (índex) de cada element."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"for-each:"})," quan només vols accedir al valor, sense l'índex. Més net i menys propensos a errors."]})]})}),t.jsx(C,{title:"Errors comuns"}),t.jsx(b,{variant:"error",title:"IndexOutOfBoundsException",children:t.jsxs("p",{children:["L'error més habitual! Passa quan intentes accedir a una posició que no existeix. Recorda: les posicions van de ",t.jsx("strong",{children:"0"})," a ",t.jsx("strong",{children:"size() - 1"}),"."]})}),t.jsx(y,{code:YS,label:"Com evitar errors d'índex",language:"java",showLineNumbers:!0}),t.jsx(C,{title:"Exemple complet: Llista de la Compra"}),t.jsx(b,{variant:"success",title:"Posant-ho tot junt",children:t.jsx("p",{children:"Un exemple pràctic que utilitza les operacions principals: afegir, eliminar, cercar i recórrer una llista."})}),t.jsx(y,{code:JS,label:"LlistaCompra.java",language:"java",showLineNumbers:!0}),t.jsx(C,{title:"Resum"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Crear",variant:"blue",children:t.jsx("code",{children:"ArrayList<Tipus> nom = new ArrayList<>();"})}),t.jsxs(N,{title:"Afegir",variant:"green",children:[t.jsx("code",{children:"llista.add(element)"}),t.jsx("br",{}),t.jsx("code",{children:"llista.add(pos, element)"})]}),t.jsxs(N,{title:"Accedir / Modificar",variant:"yellow",children:[t.jsx("code",{children:"llista.get(pos)"}),t.jsx("br",{}),t.jsx("code",{children:"llista.set(pos, element)"})]}),t.jsxs(N,{title:"Eliminar / Cercar",variant:"pink",children:[t.jsx("code",{children:"llista.remove(pos)"}),t.jsx("br",{}),t.jsx("code",{children:"llista.contains(element)"}),t.jsx("br",{}),t.jsx("code",{children:"llista.size()"})]})]}),t.jsx(b,{variant:"info",title:"Quan usar ArrayList?",children:t.jsxs("p",{children:["Usa ",t.jsx("strong",{children:"ArrayList"})," quan no sàpigues per avançat quants elements tindràs, o quan necessitis afegir i eliminar elements sovint. Si la mida és fixa i coneguda, un array normal pot ser suficient i una mica més eficient."]})})]})}const ZS="_container_4hbij_1",e1="_title_4hbij_17",t1="_functionsGrid_4hbij_33",r1="_functionBox_4hbij_47",n1="_functionName_4hbij_75",a1="_functionDesc_4hbij_91",i1="_inputGroup_4hbij_105",s1="_input_4hbij_105",l1="_executeBtn_4hbij_165",o1="_output_4hbij_211",c1="_outputLabel_4hbij_237",u1="_outputValue_4hbij_247",d1="_outputEmpty_4hbij_257",ie={container:ZS,title:e1,functionsGrid:t1,functionBox:r1,functionName:n1,functionDesc:a1,inputGroup:i1,input:s1,executeBtn:l1,output:o1,outputLabel:c1,outputValue:u1,outputEmpty:d1};function p1(){const[e,r]=R.useState(""),[n,a]=R.useState(""),i=()=>{r("Hola Mon!")},s=()=>{a(String(Math.floor(Math.random()*100)))};return t.jsxs("div",{className:ie.container,children:[t.jsx("div",{className:ie.title,children:"Demo: Funcions sense Parametres"}),t.jsxs("div",{className:ie.functionsGrid,children:[t.jsxs("div",{className:ie.functionBox,children:[t.jsx("div",{className:ie.functionName,children:"saludar()"}),t.jsx("div",{className:ie.functionDesc,children:"Retorna un missatge de salutacio fix. No rep cap parametre."}),t.jsx("button",{className:ie.executeBtn,onClick:i,children:"Executar saludar()"}),t.jsx("div",{className:ie.output,style:{marginTop:12},children:e?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:ie.outputLabel,children:"Resultat: "}),t.jsxs("span",{className:ie.outputValue,children:['"',e,'"']})]}):t.jsx("span",{className:ie.outputEmpty,children:"Prem el boto per executar..."})})]}),t.jsxs("div",{className:ie.functionBox,children:[t.jsx("div",{className:ie.functionName,children:"obtenirNumeroAleatori()"}),t.jsx("div",{className:ie.functionDesc,children:"Genera i retorna un numero aleatori entre 0 i 99."}),t.jsx("button",{className:ie.executeBtn,onClick:s,children:"Executar obtenirNumeroAleatori()"}),t.jsx("div",{className:ie.output,style:{marginTop:12},children:n?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:ie.outputLabel,children:"Resultat: "}),t.jsx("span",{className:ie.outputValue,children:n})]}):t.jsx("span",{className:ie.outputEmpty,children:"Prem el boto per executar..."})})]})]})]})}function m1(){const[e,r]=R.useState(""),[n,a]=R.useState(""),[i,s]=R.useState(""),[l,o]=R.useState(""),[c,u]=R.useState(""),m=()=>{const f=parseFloat(e),j=parseFloat(n);if(isNaN(f)||isNaN(j)){s("Introdueix dos numeros valids");return}s(String(f+j))},d=()=>{if(!l.trim()){u("Introdueix un nom");return}u(`Hola, ${l.trim()}! Benvingut/da!`)};return t.jsxs("div",{className:ie.container,children:[t.jsx("div",{className:ie.title,children:"Demo: Funcions amb Parametres"}),t.jsxs("div",{className:ie.functionsGrid,children:[t.jsxs("div",{className:ie.functionBox,children:[t.jsx("div",{className:ie.functionName,children:"sumar(int a, int b)"}),t.jsx("div",{className:ie.functionDesc,children:"Rep dos numeros com a parametres i retorna la seva suma."}),t.jsxs("div",{className:ie.inputGroup,children:[t.jsx("input",{type:"number",className:ie.input,placeholder:"a",value:e,onChange:f=>r(f.target.value)}),t.jsx("input",{type:"number",className:ie.input,placeholder:"b",value:n,onChange:f=>a(f.target.value)}),t.jsx("button",{className:ie.executeBtn,onClick:m,children:"Executar"})]}),t.jsx("div",{className:ie.output,children:i?t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:ie.outputLabel,children:["sumar(",e,", ",n,") = "]}),t.jsx("span",{className:ie.outputValue,children:i})]}):t.jsx("span",{className:ie.outputEmpty,children:"Introdueix valors i executa..."})})]}),t.jsxs("div",{className:ie.functionBox,children:[t.jsx("div",{className:ie.functionName,children:"saludarPersona(String nom)"}),t.jsx("div",{className:ie.functionDesc,children:"Rep un nom com a parametre i retorna un missatge personalitzat."}),t.jsxs("div",{className:ie.inputGroup,children:[t.jsx("input",{type:"text",className:ie.input,placeholder:"Nom",value:l,onChange:f=>o(f.target.value)}),t.jsx("button",{className:ie.executeBtn,onClick:d,children:"Executar"})]}),t.jsx("div",{className:ie.output,children:c?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:ie.outputLabel,children:"Resultat: "}),t.jsxs("span",{className:ie.outputValue,children:['"',c,'"']})]}):t.jsx("span",{className:ie.outputEmpty,children:"Introdueix un nom i executa..."})})]})]})]})}function kh({mode:e="no-params"}){return e==="with-params"?t.jsx(m1,{}):t.jsx(p1,{})}const h1=`// Estructura general d'una funció sense paràmetres
static tipusRetorn nomFuncio() {
    // Cos de la funció
    return valor; // Si el tipus no és void
}

// Funció que no retorna res (void)
static void nomFuncio() {
    // Accions
}`,f1=`public class Funcions {
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
}`;function x1(){return t.jsxs("div",{children:[t.jsx(C,{title:"Funcions sense Paràmetres"}),t.jsx(b,{variant:"info",title:"Què és una Funció?",children:t.jsxs("p",{children:["Una ",t.jsx("strong",{children:"funció"})," (o mètode) és un bloc de codi reutilitzable que realitza una tasca específica. Les funcions ",t.jsx("strong",{children:"sense paràmetres"})," no necessiten rebre cap dada externa per funcionar: fan la seva feina de manera autònoma."]})}),t.jsx(kh,{mode:"no-params"}),t.jsx(b,{variant:"explanation",title:"Avantatges de les funcions",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Reutilització:"})," es poden cridar tantes vegades com calgui."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Organització:"})," el codi queda més net i estructurat."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Manteniment:"})," si cal canviar la lògica, només es modifica en un lloc."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Llegibilitat:"})," el nom de la funció descriu què fa."]})]})}),t.jsx(y,{code:h1,label:"Estructura d'una funció sense paràmetres",showLineNumbers:!0}),t.jsx(re,{headers:["Concepte","Descripció","Exemple"],rows:[{cells:["static","Permet cridar la funció sense crear un objecte","static void fer()"]},{cells:["Tipus de retorn","Indica què retorna la funció","int, String, void..."]},{cells:["void","La funció no retorna cap valor","static void mostrar()"]},{cells:["return","Retorna un valor i acaba la funció",'return "Hola";']}]}),t.jsx(y,{code:f1,label:"Exemple: Funció saludar()",showLineNumbers:!0}),t.jsx(b,{variant:"warning",title:"void vs tipus de retorn",children:t.jsxs("p",{children:["Si una funció és ",t.jsx("code",{children:"void"}),", no pot tenir ",t.jsx("code",{children:"return"})," amb valor (però pot tenir ",t.jsx("code",{children:"return;"})," per sortir abans). Si té un tipus de retorn (",t.jsx("code",{children:"int"}),", ",t.jsx("code",{children:"String"}),", etc.), ",t.jsx("strong",{children:"obligatòriament"})," ha de retornar un valor d'aquell tipus."]})}),t.jsx(y,{code:g1,label:"Exemple: Funcions sense paràmetres variades",showLineNumbers:!0})]})}const v1=`// Estructura general d'una funció amb paràmetres
static tipusRetorn nomFuncio(tipus param1, tipus param2) {
    // Cos de la funció - utilitza param1 i param2
    return valor;
}

// Exemple concret
static int sumar(int a, int b) {
    return a + b;
}`,j1=`public class OperacionsMatematiques {
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
}`,b1=`public class FuncionsAvancades {
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
}`;function y1(){return t.jsxs("div",{children:[t.jsx(C,{title:"Funcions amb Paràmetres"}),t.jsx(b,{variant:"info",title:"Paràmetres i Arguments",children:t.jsxs("p",{children:["Les funcions amb ",t.jsx("strong",{children:"paràmetres"})," reben dades d'entrada que poden utilitzar dins del seu cos. Els ",t.jsx("strong",{children:"paràmetres"})," es defineixen a la declaració de la funció, i els ",t.jsx("strong",{children:"arguments"})," són els valors concrets que es passen quan es crida la funció."]})}),t.jsx(kh,{mode:"with-params"}),t.jsx(y,{code:v1,label:"Estructura d'una funció amb paràmetres",showLineNumbers:!0}),t.jsx(re,{headers:["Concepte","Descripció","Exemple"],rows:[{cells:["Paràmetre","Variable declarada a la signatura","(int a, int b)"]},{cells:["Argument","Valor passat en la crida","sumar(5, 3)"]},{cells:["Pas per valor","Java copia el valor del primitiu","int, double, char..."]},{cells:["Pas per referència","Java copia la referència de l'objecte","String, arrays, objectes"]}]}),t.jsx(b,{variant:"explanation",title:"Diferència entre Paràmetre i Argument",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Paràmetre:"}),' és la variable a la definició de la funció. És com un "espai reservat".']}),t.jsxs("li",{children:[t.jsx("strong",{children:"Argument:"})," és el valor real que enviem quan cridem la funció."]}),t.jsxs("li",{children:["Exemple: en ",t.jsx("code",{children:"static int sumar(int a, int b)"}),", ",t.jsx("code",{children:"a"})," i ",t.jsx("code",{children:"b"})," són paràmetres."]}),t.jsxs("li",{children:["Quan cridem ",t.jsx("code",{children:"sumar(5, 3)"}),", ",t.jsx("code",{children:"5"})," i ",t.jsx("code",{children:"3"})," són arguments."]})]})}),t.jsx(y,{code:j1,label:"Exemples bàsics de funcions amb paràmetres",showLineNumbers:!0}),t.jsx(b,{variant:"warning",title:"Ordre i tipus dels arguments",children:t.jsxs("p",{children:["Quan cridem una funció, els arguments han de coincidir en ",t.jsx("strong",{children:"nombre"}),",",t.jsx("strong",{children:" ordre"})," i ",t.jsx("strong",{children:"tipus"})," amb els paràmetres declarats. Si no, Java donarà un error de compilació."]})}),t.jsx(y,{code:b1,label:"Funcions amb múltiples paràmetres",showLineNumbers:!0})]})}const S1=`public class Exemples {
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
}`,w1=`public class FuncionsAmbRetorn {
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
}`,C1=`public class SenseParametres {
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
}`,A1=`public class Calculadora {
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
}`,M1=`// BONS noms de mètodes: verb + nom, camelCase
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
public boolean check(String s) { ... }         // Massa genèric, paràmetre poc clar`;function N1(){return t.jsxs("div",{children:[t.jsx(C,{title:"Tipus de Funcions (Mètodes) en Java"}),t.jsx(b,{variant:"info",title:"Per què classificar les funcions?",children:t.jsxs("p",{children:["Les funcions (en Java es diuen ",t.jsx("strong",{children:"mètodes"}),") es poden classificar de diverses maneres: segons si ",t.jsx("strong",{children:"retornen un valor"})," o no, segons si reben ",t.jsx("strong",{children:"paràmetres"}),", i segons si són ",t.jsx("strong",{children:"estàtiques"})," o d'instància. Entendre aquestes classificacions ens ajuda a escriure codi més clar i organitzat."]})}),t.jsx(C,{title:"Classificació per Tipus de Retorn"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["La primera gran distinció és si la funció ",t.jsx("strong",{children:"retorna un valor"})," al codi que l'ha cridat, o si simplement ",t.jsx("strong",{children:"executa una acció"})," sense retornar res."]})}),t.jsxs(fe,{children:[t.jsxs(W,{title:"void - No retorna res (Procediment)",variant:"blue",children:[t.jsxs("p",{style:{marginBottom:"10px"},children:["Les funcions ",t.jsx("code",{children:"void"})," executen una acció (imprimir, modificar dades...) però ",t.jsx("strong",{children:"no retornen cap valor"}),". No pots guardar el seu resultat en una variable."]}),t.jsx(y,{code:`static void saludar() {
    System.out.println("Hola!");
    // No hi ha return amb valor
}

// Crida:
saludar(); // Imprimeix "Hola!"
// int x = saludar(); // ERROR!`})]}),t.jsxs(W,{title:"Amb retorn - Retorna un valor",variant:"good",children:[t.jsxs("p",{style:{marginBottom:"10px"},children:["Les funcions amb tipus de retorn (",t.jsx("code",{children:"int"}),", ",t.jsx("code",{children:"String"}),",",t.jsx("code",{children:" boolean"}),", ",t.jsx("code",{children:"double"}),"...) ",t.jsx("strong",{children:"retornen un valor"})," que es pot guardar en una variable."]}),t.jsx(y,{code:`static int sumar(int a, int b) {
    return a + b;
}

// Crida:
int resultat = sumar(5, 3);
System.out.println(resultat); // 8`})]})]}),t.jsx(y,{label:"Exemples de funcions void (procediments)",code:S1,showLineNumbers:!0}),t.jsx(y,{label:"Exemples de funcions amb retorn",code:w1,showLineNumbers:!0}),t.jsx(C,{title:"La Paraula Clau return"}),t.jsx(b,{variant:"info",title:"Com funciona return?",children:t.jsxs("p",{children:["La paraula clau ",t.jsx("code",{children:"return"})," fa dues coses: ",t.jsx("strong",{children:"1)"})," finalitza l'execució de la funció immediatament, i ",t.jsx("strong",{children:"2)"})," retorna el valor especificat al codi que ha cridat la funció. Després d'un ",t.jsx("code",{children:"return"}),", cap línia de codi dins la funció s'executarà."]})}),t.jsx(y,{label:"Comportament de return",code:E1,showLineNumbers:!0}),t.jsx(b,{variant:"warning",title:"Regles importants de return",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["Una funció amb tipus de retorn (no void) ",t.jsx("strong",{children:"ha de tenir"})," un ",t.jsx("code",{children:"return"})," en tots els camins possibles."]}),t.jsxs("li",{children:["El valor retornat ha de ser del ",t.jsx("strong",{children:"mateix tipus"})," que el declarat (o compatible)."]}),t.jsxs("li",{children:["En funcions ",t.jsx("code",{children:"void"}),", pots usar ",t.jsx("code",{children:"return;"})," (sense valor) per sortir anticipadament."]}),t.jsxs("li",{children:["El codi després d'un ",t.jsx("code",{children:"return"})," és ",t.jsx("strong",{children:"inassolible"})," i dona error de compilació."]})]})}),t.jsx(C,{title:"Classificació per Paràmetres"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["Una altra forma de classificar les funcions és segons si reben ",t.jsx("strong",{children:"dades d'entrada"})," (paràmetres) o no. Els paràmetres permeten que la funció treballi amb valors diferents cada cop que es crida."]})}),t.jsx(y,{label:"Funcions sense paràmetres",code:C1,showLineNumbers:!0}),t.jsx(y,{label:"Funcions amb paràmetres",code:R1,showLineNumbers:!0}),t.jsx(C,{title:"Paràmetres Variables (Varargs)"}),t.jsx(b,{variant:"info",title:"Què són els varargs?",children:t.jsxs("p",{children:["Java permet definir funcions que accepten un ",t.jsx("strong",{children:"nombre variable de paràmetres"})," del mateix tipus. S'utilitza la sintaxi ",t.jsx("code",{children:"tipus... nom"}),". Internament, Java tracta els varargs com un ",t.jsx("strong",{children:"array"}),"."]})}),t.jsx(y,{label:"Exemple de varargs (int... numeros)",code:L1,showLineNumbers:!0}),t.jsx(b,{variant:"warning",title:"Restriccions dels varargs",children:t.jsxs("p",{children:["Els varargs han de ser l'",t.jsx("strong",{children:"últim paràmetre"})," de la funció i només pot haver-n'hi ",t.jsx("strong",{children:"un"})," per funció. Per exemple:",t.jsx("code",{children:" static void exemple(String prefix, int... numeros)"})," és vàlid, però ",t.jsx("code",{children:"static void exemple(int... a, int... b)"})," ",t.jsx("strong",{children:"NO"})," ho és."]})}),t.jsx(C,{title:"Classificació per Accés: static vs Instància"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["En Java, els mètodes poden ser ",t.jsx("strong",{children:"estàtics"})," (pertanyen a la classe) o d'",t.jsx("strong",{children:"instància"})," (pertanyen a un objecte concret). Aquesta distinció és fonamental en la Programació Orientada a Objectes."]})}),t.jsxs(fe,{children:[t.jsxs(W,{title:"Mètodes static",variant:"blue",children:[t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px",marginBottom:"10px"},children:[t.jsxs("li",{children:["Pertanyen a la ",t.jsx("strong",{children:"classe"}),", no a un objecte"]}),t.jsxs("li",{children:["Es criden amb ",t.jsx("code",{children:"NomClasse.mètode()"})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"No"})," poden accedir a atributs d'instància (no-static)"]}),t.jsx("li",{children:"Ideals per a funcions utilitat (càlculs, conversions...)"})]}),t.jsx(y,{code:`// Exemples de Java:
Math.sqrt(16);     // 4.0
Math.max(5, 3);    // 5
Integer.parseInt("42"); // 42`})]}),t.jsxs(W,{title:"Mètodes d'instància",variant:"good",children:[t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px",marginBottom:"10px"},children:[t.jsxs("li",{children:["Pertanyen a un ",t.jsx("strong",{children:"objecte"})," concret"]}),t.jsxs("li",{children:["Es criden amb ",t.jsx("code",{children:"objecte.mètode()"})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Poden"})," accedir a atributs d'instància amb ",t.jsx("code",{children:"this"})]}),t.jsx("li",{children:"Ideals quan el mètode necessita l'estat de l'objecte"})]}),t.jsx(y,{code:`// Exemples:
String nom = "Hola";
nom.length();        // 4
nom.toUpperCase();   // "HOLA"
nom.charAt(0);       // 'H'`})]})]}),t.jsx(y,{label:"Exemple de mètodes static",code:A1,showLineNumbers:!0}),t.jsx(y,{label:"Exemple de mètodes d'instància",code:k1,showLineNumbers:!0}),t.jsx(b,{variant:"info",title:"Quan usar static vs instància?",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Usa static"})," quan la funció no depengui de cap atribut d'objecte: funcions matemàtiques, utilitats, conversions, validacions pures."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Usa instància"})," quan la funció necessiti accedir o modificar les dades d'un objecte concret: getters, setters, mètodes que depenguin de l'estat."]}),t.jsxs("li",{children:["Als programes simples amb ",t.jsx("code",{children:"main"}),", solem usar ",t.jsx("code",{children:"static"})," perquè no creem objectes."]}),t.jsx("li",{children:"En POO, la majoria de mètodes són d'instància."})]})}),t.jsx(C,{title:"Nomenclatura: Funció vs Mètode vs Procediment"}),t.jsx(b,{variant:"explanation",title:"Per què tants noms?",children:t.jsxs("p",{children:["En el món de la programació s'utilitzen diferents termes per referir-se a blocs de codi reutilitzables. Depenent del llenguatge i del context, es fan servir noms diferents. En Java, el terme oficial és ",t.jsx("strong",{children:"mètode"}),", però és important conèixer la terminologia general."]})}),t.jsxs(ge,{children:[t.jsxs(N,{title:"Funció",variant:"blue",children:[t.jsxs("p",{children:["Terme ",t.jsx("strong",{children:"general"})," de programació. És un bloc de codi que rep dades, les processa i ",t.jsx("strong",{children:"retorna un valor"}),"."]}),t.jsx("p",{style:{marginTop:"8px"},children:"Llenguatges: C, Python, JavaScript, etc."}),t.jsx(y,{code:`// Concepte de "funció"
static int sumar(int a, int b) {
    return a + b; // Retorna un valor
}`})]}),t.jsxs(N,{title:"Procediment",variant:"yellow",children:[t.jsxs("p",{children:["Terme general per a un bloc de codi que executa una acció però ",t.jsx("strong",{children:"NO retorna cap valor"})," (void)."]}),t.jsx("p",{style:{marginTop:"8px"},children:"Llenguatges: Pascal, Ada, Visual Basic (Sub)."}),t.jsx(y,{code:`// Concepte de "procediment"
static void mostrarMenu() {
    System.out.println("1. Jugar");
    System.out.println("2. Sortir");
    // No retorna res
}`})]}),t.jsxs(N,{title:"Mètode",variant:"green",children:[t.jsxs("p",{children:["El nom que Java utilitza per a ",t.jsx("strong",{children:"TOTES"})," les funcions i procediments dins d'una classe. Tant si retornen valor com si no."]}),t.jsx("p",{style:{marginTop:"8px"},children:"Llenguatges: Java, C#, Ruby, etc. (POO)"}),t.jsx(y,{code:`// En Java, TOT són "mètodes"
class Exemple {
    void saludar() { ... }   // Mètode
    int sumar() { ... }      // Mètode
}`})]})]}),t.jsx(b,{variant:"success",title:"Conclusió",children:t.jsxs("p",{children:["En Java, tant les funcions (que retornen valor) com els procediments (void) s'anomenen ",t.jsx("strong",{children:"mètodes"}),`, ja que sempre estan dins d'una classe. A la pràctica, molts programadors diuen "funció" de manera informal, i està perfectament bé. L'important és entendre que en Java, el terme tècnicament correcte és `,t.jsx("strong",{children:"mètode"}),"."]})}),t.jsx(C,{title:"Convencions per Nomenar Mètodes"}),t.jsx(b,{variant:"info",title:"Regles de nomenclatura en Java",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["Utilitza ",t.jsx("strong",{children:"camelCase"}),": la primera paraula en minúscula, les següents amb majúscula inicial."]}),t.jsxs("li",{children:["Comença amb un ",t.jsx("strong",{children:"verb"})," que descrigui l'acció: ",t.jsx("code",{children:"calcular"}),", ",t.jsx("code",{children:"obtenir"}),", ",t.jsx("code",{children:"mostrar"}),", ",t.jsx("code",{children:"és"}),", ",t.jsx("code",{children:"té"}),"."]}),t.jsxs("li",{children:["Sigues ",t.jsx("strong",{children:"descriptiu"}),": el nom ha d'explicar què fa el mètode."]}),t.jsxs("li",{children:["Per booleans, usa prefixos com ",t.jsx("code",{children:"és"})," o ",t.jsx("code",{children:"té"}),": ",t.jsx("code",{children:"esValid()"}),", ",t.jsx("code",{children:"tePermisos()"}),"."]}),t.jsxs("li",{children:["Getters: ",t.jsx("code",{children:"getNom()"}),", ",t.jsx("code",{children:"getEdat()"}),". Setters: ",t.jsx("code",{children:"setNom()"}),", ",t.jsx("code",{children:"setEdat()"}),"."]})]})}),t.jsx(y,{label:"Bons i mals noms de mètodes",code:M1,showLineNumbers:!0}),t.jsx(C,{title:"Taula Resum de Tipus de Funcions"}),t.jsx(re,{headers:["Classificació","Tipus","Descripció","Exemple"],rows:[{group:"Per tipus de retorn"},{cells:["Retorn","void (Procediment)","No retorna cap valor","static void saludar() { ... }"]},{cells:["Retorn","Amb retorn (Funció)","Retorna un valor del tipus declarat","static int sumar(int a, int b) { return a + b; }"]},{group:"Per paràmetres"},{cells:["Paràmetres","Sense paràmetres","No rep cap dada d'entrada","static void saludar() { ... }"]},{cells:["Paràmetres","Amb paràmetres","Rep una o més dades d'entrada","static int sumar(int a, int b) { ... }"]},{cells:["Paràmetres","Varargs","Rep un nombre variable de paràmetres","static int sumar(int... nums) { ... }"]},{group:"Per accés (static vs instància)"},{cells:["Accés","static","Pertany a la classe, es crida amb NomClasse.mètode()","static double arrel(double n) { ... }"]},{cells:["Accés","Instància","Pertany a l'objecte, es crida amb objecte.mètode()","public void mostrar() { ... }"]},{group:"Per nomenclatura"},{cells:["Nom","Funció","Retorna un valor (terme general)","int sumar(int a, int b)"]},{cells:["Nom","Procediment","No retorna valor / void (terme general)","void mostrarMenu()"]},{cells:["Nom","Mètode","Nom oficial en Java per a tot","Qualsevol funció/procediment en Java"]}]}),t.jsx(b,{variant:"success",title:"Resum Final",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["Les funcions ",t.jsx("code",{children:"void"})," executen accions sense retornar valor (procediments)."]}),t.jsxs("li",{children:["Les funcions amb tipus de retorn retornen un valor amb ",t.jsx("code",{children:"return"}),"."]}),t.jsx("li",{children:"Les funcions poden rebre 0, 1, o múltiples paràmetres (inclosos varargs)."}),t.jsxs("li",{children:["Els mètodes ",t.jsx("code",{children:"static"})," pertanyen a la classe; els d'instància pertanyen a l'objecte."]}),t.jsxs("li",{children:["En Java, tot són ",t.jsx("strong",{children:"mètodes"}),', però informalment diem "funció" o "procediment".']}),t.jsxs("li",{children:["Usa ",t.jsx("strong",{children:"camelCase"})," i comença els noms amb un ",t.jsx("strong",{children:"verb"})," descriptiu."]})]})})]})}const P1="_container_1pzke_1",T1="_title_1pzke_17",_1="_demosGrid_1pzke_33",O1="_demoBox_1pzke_45",D1="_demoTitle_1pzke_61",q1="_inputRow_1pzke_75",I1="_label_1pzke_89",F1="_input_1pzke_75",z1="_executeBtn_1pzke_139",B1="_result_1pzke_185",U1="_stepsContainer_1pzke_217",$1="_step_1pzke_217",H1="_stepVisible_1pzke_257",V1="_stepHighlight_1pzke_267",G1="_sequence_1pzke_279",W1="_sequenceLabel_1pzke_301",Q1="_placeholder_1pzke_315",Ee={container:P1,title:T1,demosGrid:_1,demoBox:O1,demoTitle:D1,inputRow:q1,label:I1,input:F1,executeBtn:z1,result:B1,stepsContainer:U1,step:$1,stepVisible:H1,stepHighlight:V1,sequence:G1,sequenceLabel:W1,placeholder:Q1};function J1(){const[e,r]=R.useState(""),[n,a]=R.useState(null),[i,s]=R.useState([]),[l,o]=R.useState(0),c=R.useRef([]),u=R.useCallback(()=>{c.current.forEach(j=>clearTimeout(j)),c.current=[]},[]);R.useEffect(()=>()=>u(),[u]);const m=j=>j<0?null:j===0||j===1?1:j*m(j-1),d=j=>{const g=[];if(j<=1)return g.push({text:`factorial(${j}) = ${j}`,isBase:!0}),g;for(let S=j;S>=2;S--)g.push({text:`factorial(${S}) = ${S} * factorial(${S-1})`,isBase:!1});g.push({text:"factorial(1) = 1  (cas base)",isBase:!0});let v=1;for(let S=2;S<=j;S++)v*=S,g.push({text:`factorial(${S}) = ${S} * ${v/S} = ${v}`,isBase:!1});return g},f=()=>{u(),o(0);const j=parseInt(e,10);if(isNaN(j)||j<0||j>12){a("Introdueix un numero entre 0 i 12"),s([]);return}const g=m(j);a(`${j}! = ${g}`);const v=d(j);s(v),v.forEach((S,h)=>{const p=setTimeout(()=>{o(x=>x+1)},(h+1)*300);c.current.push(p)})};return t.jsxs("div",{className:Ee.demoBox,children:[t.jsx("div",{className:Ee.demoTitle,children:"Factorial (n!)"}),t.jsxs("div",{className:Ee.inputRow,children:[t.jsx("span",{className:Ee.label,children:"n ="}),t.jsx("input",{type:"number",className:Ee.input,placeholder:"5",min:"0",max:"12",value:e,onChange:j=>r(j.target.value)}),t.jsx("button",{className:Ee.executeBtn,onClick:f,children:"Calcular"})]}),n&&t.jsx("div",{className:Ee.result,children:n}),i.length>0&&t.jsx("div",{className:Ee.stepsContainer,children:i.map((j,g)=>t.jsx("div",{className:`${Ee.step} ${g<l?Ee.stepVisible:""} ${j.isBase?Ee.stepHighlight:""}`,children:j.text},g))}),!n&&t.jsx("div",{className:Ee.placeholder,children:"Introdueix un valor i prem Calcular per veure els passos"})]})}function K1(){const[e,r]=R.useState(""),[n,a]=R.useState(null),[i,s]=R.useState([]),l=u=>{if(u<=0)return 0;if(u===1)return 1;let m=0,d=1;for(let f=2;f<=u;f++){const j=m+d;m=d,d=j}return d},o=u=>{const m=[];for(let d=0;d<=u;d++)m.push(l(d));return m},c=()=>{const u=parseInt(e,10);if(isNaN(u)||u<0||u>20){a("Introdueix un numero entre 0 i 20"),s([]);return}const m=l(u);a(`fibonacci(${u}) = ${m}`),s(o(u))};return t.jsxs("div",{className:Ee.demoBox,children:[t.jsx("div",{className:Ee.demoTitle,children:"Fibonacci"}),t.jsxs("div",{className:Ee.inputRow,children:[t.jsx("span",{className:Ee.label,children:"Posicio n ="}),t.jsx("input",{type:"number",className:Ee.input,placeholder:"7",min:"0",max:"20",value:e,onChange:u=>r(u.target.value)}),t.jsx("button",{className:Ee.executeBtn,onClick:c,children:"Calcular"})]}),n&&t.jsx("div",{className:Ee.result,children:n}),i.length>0&&t.jsxs("div",{className:Ee.sequence,children:[t.jsx("span",{className:Ee.sequenceLabel,children:"Sequencia completa:"}),i.join(", ")]}),!n&&t.jsx("div",{className:Ee.placeholder,children:"Introdueix una posicio i prem Calcular"})]})}function Y1(){return t.jsxs("div",{className:Ee.container,children:[t.jsx("div",{className:Ee.title,children:"Demo: Funcions Recursives"}),t.jsxs("div",{className:Ee.demosGrid,children:[t.jsx(J1,{}),t.jsx(K1,{})]})]})}const X1=`// Estructura general d'una funció recursiva
static tipusRetorn funcioRecursiva(parametres) {
    // 1. Cas base: condició de parada
    if (condicioParada) {
        return valorBase;
    }

    // 2. Cas recursiu: la funció es crida a si mateixa
    return funcioRecursiva(parametresModificats);
}`,Z1=`public class Factorial {
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
}`,ew=`public class Fibonacci {
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
}`,tw=`public class SumaRecursiva {
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
}`;function rw(){return t.jsxs("div",{children:[t.jsx(C,{title:"Funcions Recursives"}),t.jsx(b,{variant:"info",title:"Què és la Recursivitat?",children:t.jsxs("p",{children:["La ",t.jsx("strong",{children:"recursivitat"})," és una tècnica on una funció es crida a si mateixa per resoldre un problema. Cada crida resol una part més petita del problema fins arribar a un ",t.jsx("strong",{children:"cas base"})," que atura la recursió."]})}),t.jsx(Y1,{}),t.jsx(b,{variant:"explanation",title:"Els dos elements clau",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Cas base:"})," la condició que atura la recursió. Sense cas base, la funció es cridaria infinitament i provocaria un ",t.jsx("code",{children:"StackOverflowError"}),"."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Cas recursiu:"})," la funció es crida a si mateixa amb paràmetres més simples o més petits, acostant-se al cas base."]})]})}),t.jsx(y,{code:X1,label:"Estructura d'una funció recursiva",showLineNumbers:!0}),t.jsx(re,{headers:["Concepte","Descripció","Importància"],rows:[{cells:["Cas base","Condició de parada de la recursió","Obligatori per evitar bucle infinit"]},{cells:["Cas recursiu","La funció es crida amb dades més simples","Ha de convergir cap al cas base"]},{cells:["Pila de crides","Cada crida s'apila fins al cas base","Limitat per la memòria de la pila"]},{cells:["StackOverflowError","Error si no hi ha cas base o no convergeix","Cal evitar-lo sempre"]}]}),t.jsx(b,{variant:"success",title:"Factorial (n!)",children:t.jsxs("p",{children:["El factorial és l'exemple clàssic de recursivitat: ",t.jsx("code",{children:"n! = n * (n-1)!"})," amb cas base ",t.jsx("code",{children:"0! = 1"}),"."]})}),t.jsx(y,{code:Z1,label:"Exemple: Factorial recursiu",showLineNumbers:!0}),t.jsx(b,{variant:"success",title:"Fibonacci",children:t.jsxs("p",{children:["La seqüència de Fibonacci es defineix com: ",t.jsx("code",{children:"fib(n) = fib(n-1) + fib(n-2)"}),", amb casos base ",t.jsx("code",{children:"fib(0) = 0"})," i ",t.jsx("code",{children:"fib(1) = 1"}),"."]})}),t.jsx(y,{code:ew,label:"Exemple: Fibonacci recursiu",showLineNumbers:!0}),t.jsx(b,{variant:"warning",title:"Eficiència de la recursió",children:t.jsxs("p",{children:["La versió recursiva de Fibonacci és molt ineficient perquè recalcula els mateixos valors moltes vegades. Per a valors grans de ",t.jsx("code",{children:"n"}),", és preferible utilitzar un enfocament iteratiu o ",t.jsx("strong",{children:"memoització"}),"."]})}),t.jsx(y,{code:tw,label:"Més exemples: Suma i Potència recursius",showLineNumbers:!0})]})}const nw=`public class Calculadora {
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
}`,aw=`public class GestorNotes {
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
}`,iw=`public class JocEndevinar {
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
}`;function sw(){return t.jsxs("div",{children:[t.jsx(C,{title:"Cridar Funcions des del Main"}),t.jsx(b,{variant:"info",title:"El mètode main()",children:t.jsxs("p",{children:["El mètode ",t.jsx("code",{children:"public static void main(String[] args)"})," és el"," ",t.jsx("strong",{children:"punt d'entrada"})," de qualsevol programa Java. Des d'aquí cridem les nostres funcions per executar la lògica del programa. Les funcions han de ser"," ",t.jsx("code",{children:"static"})," per poder-les cridar des del ",t.jsx("code",{children:"main"})," sense crear objectes."]})}),t.jsx(b,{variant:"explanation",title:"Flux d'execució",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"1."})," El programa comença sempre al ",t.jsx("code",{children:"main()"}),"."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"2."}),` Quan es crida una funció, l'execució "salta" al cos de la funció.`]}),t.jsxs("li",{children:[t.jsx("strong",{children:"3."})," Un cop la funció acaba (amb ",t.jsx("code",{children:"return"})," o al final del bloc), l'execució torna al punt on es va cridar."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"4."})," El valor retornat es pot guardar en una variable o usar directament."]})]})}),t.jsx(b,{variant:"success",title:"Exemple 1: Calculadora",children:t.jsxs("p",{children:["Combina funcions sense paràmetres (menú) i amb paràmetres (operacions). El ",t.jsx("code",{children:"main"})," coordina el flux."]})}),t.jsx(y,{code:nw,label:"Exemple 1: Calculadora amb funcions",showLineNumbers:!0}),t.jsx(b,{variant:"success",title:"Exemple 2: Gestor de Notes",children:t.jsx("p",{children:"Mostra com encadenar crides a funcions: el resultat d'una funció es passa com a argument de la següent. Cada funció fa una tasca concreta."})}),t.jsx(y,{code:aw,label:"Exemple 2: Crides encadenades de funcions",showLineNumbers:!0}),t.jsx(b,{variant:"warning",title:"Bones pràctiques",children:t.jsxs("ul",{children:[t.jsxs("li",{children:["Cada funció ha de fer ",t.jsx("strong",{children:"una sola cosa"})," i fer-la bé."]}),t.jsxs("li",{children:["Dona noms ",t.jsx("strong",{children:"descriptius"})," a les funcions (verbs: calcular, obtenir, mostrar...)."]}),t.jsxs("li",{children:["El ",t.jsx("code",{children:"main"})," ha de ser ",t.jsx("strong",{children:"curt i clar"}),": coordina, no calcula."]}),t.jsx("li",{children:"Reutilitza funcions en lloc de copiar codi."})]})}),t.jsx(b,{variant:"success",title:"Exemple 3: Joc d'endevinar",children:t.jsx("p",{children:"Un exemple més complet que combina funcions sense paràmetres, amb paràmetres i recursivitat per crear un petit joc interactiu."})}),t.jsx(y,{code:iw,label:"Exemple 3: Combinant tots els tipus de funcions",showLineNumbers:!0})]})}const lw=`public class ResumComplet {
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
}`;function ow(){return t.jsxs("div",{children:[t.jsx(C,{title:"Resum Comparatiu"}),t.jsx(b,{variant:"info",title:"Vista general",children:t.jsx("p",{children:"Aquí tens un resum de tots els conceptes tractats en aquesta secció: arrays unidimensionals, arrays bidimensionals (matrius), funcions sense paràmetres, funcions amb paràmetres i funcions recursives."})}),t.jsxs(ge,{children:[t.jsx(N,{title:"Arrays 1D",variant:"blue",children:t.jsxs("ul",{children:[t.jsx("li",{children:"Emmagatzemen múltiples valors del mateix tipus"}),t.jsx("li",{children:"Mida fixa definida en la creació"}),t.jsx("li",{children:"Accés per índex (base 0)"}),t.jsx("li",{children:t.jsx("code",{children:"int[] nums = new int[5];"})}),t.jsxs("li",{children:["Recorregut amb ",t.jsx("code",{children:"for"})," o ",t.jsx("code",{children:"for-each"})]}),t.jsxs("li",{children:[t.jsx("code",{children:".length"})," per obtenir la mida"]})]})}),t.jsx(N,{title:"Arrays 2D (Matrius)",variant:"yellow",children:t.jsxs("ul",{children:[t.jsx("li",{children:"Array d'arrays: files i columnes"}),t.jsxs("li",{children:["Accés amb doble índex: ",t.jsx("code",{children:"[fila][col]"})]}),t.jsx("li",{children:t.jsx("code",{children:"int[][] mat = new int[3][4];"})}),t.jsxs("li",{children:["Recorregut amb doble ",t.jsx("code",{children:"for"})]}),t.jsxs("li",{children:[t.jsx("code",{children:".length"})," = files, ",t.jsx("code",{children:"[0].length"})," = columnes"]}),t.jsx("li",{children:"Ús: taules de dades, taulers de joc"})]})}),t.jsx(N,{title:"Funcions sense Paràmetres",variant:"green",children:t.jsxs("ul",{children:[t.jsx("li",{children:"No reben cap dada d'entrada"}),t.jsxs("li",{children:["Poden retornar un valor o ser ",t.jsx("code",{children:"void"})]}),t.jsx("li",{children:t.jsx("code",{children:"static String saludar() {...}"})}),t.jsx("li",{children:"Ideals per accions autònomes"}),t.jsx("li",{children:"Exemples: mostrar menú, generar aleatori"}),t.jsxs("li",{children:["Es criden amb ",t.jsx("code",{children:"nomFunció()"})]})]})}),t.jsx(N,{title:"Funcions amb Paràmetres",variant:"pink",children:t.jsxs("ul",{children:[t.jsx("li",{children:"Reben dades d'entrada (paràmetres)"}),t.jsx("li",{children:"Més flexibles i reutilitzables"}),t.jsx("li",{children:t.jsx("code",{children:"static int sumar(int a, int b) {...}"})}),t.jsx("li",{children:"Arguments han de coincidir en tipus i ordre"}),t.jsx("li",{children:"Poden rebre arrays i objectes"}),t.jsxs("li",{children:["Crida: ",t.jsx("code",{children:"sumar(5, 3)"})]})]})}),t.jsx(N,{title:"Funcions Recursives",variant:"gold",children:t.jsxs("ul",{children:[t.jsx("li",{children:"La funció es crida a si mateixa"}),t.jsxs("li",{children:["Necessiten un ",t.jsx("strong",{children:"cas base"})," obligatori"]}),t.jsxs("li",{children:["El ",t.jsx("strong",{children:"cas recursiu"})," ha de convergir"]}),t.jsx("li",{children:"Exemples: factorial, fibonacci, potència"}),t.jsxs("li",{children:["Perill: ",t.jsx("code",{children:"StackOverflowError"})," sense cas base"]}),t.jsx("li",{children:"Alternativa: versió iterativa"})]})})]}),t.jsx(b,{variant:"explanation",title:"Comparativa ràpida",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Arrays"})," són per ",t.jsx("em",{children:"emmagatzemar dades"}),", les"," ",t.jsx("strong",{children:"funcions"})," són per ",t.jsx("em",{children:"processar-les"}),"."]}),t.jsxs("li",{children:["Les funcions ",t.jsx("strong",{children:"sense paràmetres"})," són més simples però menys flexibles que les funcions ",t.jsx("strong",{children:"amb paràmetres"}),"."]}),t.jsxs("li",{children:["La ",t.jsx("strong",{children:"recursivitat"})," és elegant però pot ser menys eficient que un bucle iteratiu per a problemes grans."]}),t.jsxs("li",{children:["Combinar arrays amb funcions és la clau per escriure programes ",t.jsx("strong",{children:"modulars i nets"}),"."]})]})}),t.jsx(y,{code:lw,label:"Exemple integrador: tots els conceptes junts",showLineNumbers:!0})]})}function cw(){return t.jsxs("div",{children:[t.jsx(C,{title:"Introducció a la Programació Orientada a Objectes (POO)"}),t.jsx(b,{variant:"info",title:"Què és la POO?",children:t.jsxs("p",{children:["La ",t.jsx("strong",{children:"Programació Orientada a Objectes (POO)"})," és un paradigma de programació que organitza el codi al voltant d'",t.jsx("strong",{children:"objectes"})," en lloc de funcions i lògica seqüencial. Un objecte és una representació d'una entitat del món real que té",t.jsx("strong",{children:" propietats"})," (atributs) i ",t.jsx("strong",{children:"comportaments"})," (mètodes)."]})}),t.jsx(C,{title:"Programació Procedural vs POO"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["Fins ara hem programat de forma ",t.jsx("strong",{children:"procedural"}),": un conjunt d'instruccions que s'executen de dalt a baix, una darrere l'altra. Funciona per a programes petits, però a mesura que el programa creix, es torna difícil de mantenir i organitzar."]})}),t.jsxs(fe,{children:[t.jsxs(W,{title:"Programació Procedural",variant:"bad",children:[t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[t.jsx("li",{children:"Codi seqüencial, de dalt a baix"}),t.jsx("li",{children:"Dades i funcions separades"}),t.jsx("li",{children:"Difícil de reutilitzar"}),t.jsx("li",{children:"Difícil de mantenir en projectes grans"}),t.jsx("li",{children:"Tot està barrejat en un sol fitxer"})]}),t.jsx(y,{code:`// Tot en un sol lloc
String nomCotxe = "Toyota";
int kmCotxe = 50000;
System.out.println(nomCotxe);
// ... 500 linies mes ...`})]}),t.jsxs(W,{title:"Programació Orientada a Objectes",variant:"good",children:[t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[t.jsx("li",{children:"Codi organitzat en objectes"}),t.jsx("li",{children:"Dades i comportaments junts"}),t.jsx("li",{children:"Fàcil de reutilitzar"}),t.jsx("li",{children:"Fàcil de mantenir i escalar"}),t.jsx("li",{children:"Cada classe té la seva responsabilitat"})]}),t.jsx(y,{code:`// Organitzat en objectes
Cotxe toyota = new Cotxe("Toyota", 50000);
toyota.mostrarInfo();
// Clar, net, reutilitzable`})]})]}),t.jsx(C,{title:"Analogia: L'Edifici de La Salle"}),t.jsxs(b,{variant:"info",children:[t.jsxs("p",{children:["Imagina l'edifici de ",t.jsx("strong",{children:"La Salle"}),". L'edifici no és només un bloc de formigó; està organitzat en ",t.jsx("strong",{children:"plantes"}),", cada planta té ",t.jsx("strong",{children:"aules"}),", cada aula té",t.jsx("strong",{children:" cadires, taules, una pissarra"}),"... Cada element té les seves propietats i funcions."]}),t.jsxs("p",{style:{marginTop:"10px"},children:["En POO fem el mateix: en lloc de tenir tot el codi en un sol lloc, l'organitzem en",t.jsx("strong",{children:" classes"})," (els plànols) i creem ",t.jsx("strong",{children:"objectes"})," (les instàncies reals)."]})]}),t.jsx(y,{label:"L'edifici com a objectes",code:`// La classe es el planol
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
aulaJava.impartirClasse();`}),t.jsx(C,{title:"Els 4 Pilars de la POO"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["La POO es fonamenta en ",t.jsx("strong",{children:"4 pilars"})," fonamentals que fan que el codi sigui organitzat, segur, reutilitzable i flexible."]})}),t.jsxs(ge,{children:[t.jsxs(N,{title:"Encapsulació",variant:"blue",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Amagar les dades internes"})," d'un objecte i controlar-ne l'accés mitjançant mètodes públics (getters i setters)."]}),t.jsx("p",{style:{marginTop:"8px"},children:"Com una càpsula de medicament: no veus el contingut, però funciona."}),t.jsx(y,{code:`private String nom;
public String getNom() {
    return nom;
}`})]}),t.jsxs(N,{title:"Herència",variant:"yellow",children:[t.jsxs("p",{children:["Una classe pot ",t.jsx("strong",{children:"heretar"})," atributs i mètodes d'una altra classe. Permet reutilitzar codi i crear jerarquies."]}),t.jsx("p",{style:{marginTop:"8px"},children:"Com un fill que hereta característiques dels pares."}),t.jsx(y,{code:`class Animal {
    void menjar() { ... }
}
class Gos extends Animal {
    void bordar() { ... }
}`})]}),t.jsxs(N,{title:"Polimorfisme",variant:"green",children:[t.jsxs("p",{children:["Un mateix mètode pot tenir ",t.jsx("strong",{children:"comportaments diferents"})," segons l'objecte que l'executa."]}),t.jsx("p",{style:{marginTop:"8px"},children:'Com el verb "parlar": un humà parla, un gos borda, un gat miola.'}),t.jsx(y,{code:`Animal a = new Gos();
a.ferSo(); // "Bup bup!"
Animal b = new Gat();
b.ferSo(); // "Miau!"`})]}),t.jsxs(N,{title:"Abstracció",variant:"pink",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Simplificar la complexitat"})," mostrant només el que és necessari i amagant els detalls interns d'implementació."]}),t.jsx("p",{style:{marginTop:"8px"},children:"Com conduir un cotxe: només uses el volant i pedals, no veus el motor."}),t.jsx(y,{code:`// No cal saber COM funciona
cotxe.arrencar();
cotxe.accelerar();
// Nomes cal saber QUE fa`})]})]}),t.jsx(b,{variant:"success",title:"Resum",children:t.jsx("p",{children:"La POO ens permet organitzar el codi de manera que reflecteixi el món real. Cada objecte té les seves dades i els seus comportaments, i els 4 pilars (encapsulació, herència, polimorfisme i abstracció) ens ajuden a crear codi net, segur, reutilitzable i fàcil de mantenir."})})]})}function uw(){return t.jsxs("div",{children:[t.jsx(C,{title:"Classe vs Objecte"}),t.jsx(b,{variant:"info",title:"Concepte fonamental",children:t.jsxs("p",{children:["La diferència entre ",t.jsx("strong",{children:"classe"})," i ",t.jsx("strong",{children:"objecte"})," és un dels conceptes més importants de la POO. Entendre-la bé és clau per dominar la programació orientada a objectes."]})}),t.jsx(C,{title:"Analogia: El Plànol i la Casa"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["Imagina que vols construir una casa. Primer necessites un ",t.jsx("strong",{children:"plànol"})," (la classe) que descrigui com serà la casa: quantes habitacions tindrà, de quin color serà, quina superfície tindrà... Després, a partir d'aquest plànol, pots construir",t.jsx("strong",{children:" una o moltes cases"})," (els objectes). Cada casa pot tenir colors diferents, però totes segueixen el mateix plànol."]})}),t.jsxs(fe,{children:[t.jsx(W,{title:"Classe (El Plànol)",variant:"blue",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[t.jsxs("li",{children:["És la ",t.jsx("strong",{children:"plantilla"})," o definició"]}),t.jsx("li",{children:"Descriu quins atributs i mètodes tindran els objectes"}),t.jsx("li",{children:"No ocupa espai en memòria (fins que es crea un objecte)"}),t.jsx("li",{children:"Es defineix un cop"}),t.jsxs("li",{children:["Utilitza la paraula clau ",t.jsx("code",{children:"class"})]})]})}),t.jsx(W,{title:"Objecte (La Casa)",variant:"good",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[t.jsxs("li",{children:["És una ",t.jsx("strong",{children:"instància"})," concreta de la classe"]}),t.jsx("li",{children:"Té valors reals per a cada atribut"}),t.jsx("li",{children:"Ocupa espai en memòria"}),t.jsx("li",{children:"Se'n poden crear tants com es vulgui"}),t.jsxs("li",{children:["Es crea amb la paraula clau ",t.jsx("code",{children:"new"})]})]})})]}),t.jsx(C,{title:"Exemple: La Classe Cotxe"}),t.jsx(b,{variant:"info",children:t.jsxs("p",{children:["Vegem un exemple concret amb una classe ",t.jsx("code",{children:"Cotxe"}),". La classe defineix que tot cotxe té una marca, un model, un color i quilòmetres. Després podem crear tants cotxes com vulguem."]})}),t.jsx(y,{label:"Definició de la classe Cotxe (el plànol)",showLineNumbers:!0,code:`public class Cotxe {
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
}`}),t.jsx(C,{title:"Creació d'Objectes (Instanciació)"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["A partir de la classe ",t.jsx("code",{children:"Cotxe"}),", podem crear múltiples objectes. Cada objecte és independent i té els seus propis valors. Crear un objecte s'anomena ",t.jsx("strong",{children:"instanciar"}),"."]})}),t.jsx(y,{label:"Crear objectes a partir de la classe",showLineNumbers:!0,code:`public class Main {
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
}`}),t.jsx(C,{title:"Resum Visual"}),t.jsxs(ge,{children:[t.jsxs(N,{title:"Classe",variant:"blue",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Què és?"})," La plantilla / plànol"]}),t.jsxs("p",{style:{marginTop:"6px"},children:[t.jsx("strong",{children:"Paraula clau:"})," ",t.jsx("code",{children:"class"})]}),t.jsx("p",{style:{marginTop:"6px"},children:t.jsx("strong",{children:"Exemple:"})}),t.jsx(y,{code:"class Cotxe { ... }"})]}),t.jsxs(N,{title:"Objecte",variant:"yellow",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Què és?"})," Una instància real de la classe"]}),t.jsxs("p",{style:{marginTop:"6px"},children:[t.jsx("strong",{children:"Paraula clau:"})," ",t.jsx("code",{children:"new"})]}),t.jsx("p",{style:{marginTop:"6px"},children:t.jsx("strong",{children:"Exemple:"})}),t.jsx(y,{code:"Cotxe c = new Cotxe();"})]}),t.jsxs(N,{title:"Atributs",variant:"green",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Què són?"})," Les propietats de l'objecte"]}),t.jsxs("p",{style:{marginTop:"6px"},children:[t.jsx("strong",{children:"Exemples:"})," marca, color, km"]}),t.jsx("p",{style:{marginTop:"6px"},children:t.jsx("strong",{children:"Accés:"})}),t.jsx(y,{code:'cotxe1.marca = "Toyota";'})]}),t.jsxs(N,{title:"Mètodes",variant:"pink",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Què són?"})," Les accions que pot fer l'objecte"]}),t.jsxs("p",{style:{marginTop:"6px"},children:[t.jsx("strong",{children:"Exemples:"})," mostrarInfo(), conduir()"]}),t.jsx("p",{style:{marginTop:"6px"},children:t.jsx("strong",{children:"Crida:"})}),t.jsx(y,{code:"cotxe1.mostrarInfo();"})]})]}),t.jsx(b,{variant:"warning",title:"Recorda",children:t.jsxs("p",{children:["Una classe per si sola ",t.jsx("strong",{children:"no fa res"}),". És com tenir un plànol sense construir la casa. Has de crear objectes (",t.jsx("code",{children:"new"}),") per poder treballar amb les dades i cridar els mètodes."]})})]})}function dw(){return t.jsxs("div",{children:[t.jsx(C,{title:"Modificadors d'Accés i Encapsulació"}),t.jsx(b,{variant:"info",title:"Què són els modificadors d'accés?",children:t.jsxs("p",{children:["Els ",t.jsx("strong",{children:"modificadors d'accés"})," són paraules clau que controlen la ",t.jsx("strong",{children:"visibilitat"})," dels atributs i mètodes d'una classe. Determinen qui pot accedir a cada part del codi. Són fonamentals per aplicar l'",t.jsx("strong",{children:"encapsulació"}),", un dels 4 pilars de la POO."]})}),t.jsx(C,{title:"Tipus de Modificadors"}),t.jsx(re,{headers:["Modificador","Mateixa Classe","Mateix Paquet","Subclasse","Tothom"],rows:[{cells:["public","Sí","Sí","Sí","Sí"]},{cells:["protected","Sí","Sí","Sí","No"]},{cells:["(sense modificador)","Sí","Sí","No","No"]},{cells:["private","Sí","No","No","No"]}]}),t.jsxs(ge,{children:[t.jsxs(N,{title:"public",variant:"green",children:[t.jsxs("p",{children:["Accessible des de ",t.jsx("strong",{children:"qualsevol lloc"})," del programa."]}),t.jsx(y,{code:`public String nom;
public void saludar() { ... }`})]}),t.jsxs(N,{title:"private",variant:"pink",children:[t.jsxs("p",{children:["Només accessible dins de la ",t.jsx("strong",{children:"mateixa classe"}),"."]}),t.jsx(y,{code:`private int edat;
private void calcular() { ... }`})]}),t.jsxs(N,{title:"protected",variant:"yellow",children:[t.jsxs("p",{children:["Accessible dins del ",t.jsx("strong",{children:"mateix paquet"})," i per ",t.jsx("strong",{children:"subclasses"}),"."]}),t.jsx(y,{code:`protected double salari;
protected void processar() { ... }`})]}),t.jsxs(N,{title:"(default)",variant:"blue",children:[t.jsxs("p",{children:["Sense paraula clau. Accessible dins del ",t.jsx("strong",{children:"mateix paquet"}),"."]}),t.jsx(y,{code:`String ciutat;
void mostrar() { ... }`})]})]}),t.jsx(C,{title:"Encapsulació: Per què private?"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["L'",t.jsx("strong",{children:"encapsulació"})," consisteix a declarar els atributs com a ",t.jsx("code",{children:"private"})," i proporcionar mètodes ",t.jsx("code",{children:"public"})," (getters i setters) per accedir-hi de forma controlada. Així protegim les dades internes de l'objecte i evitem que es modifiquin de forma incorrecta."]})}),t.jsxs(fe,{children:[t.jsxs(W,{title:"MALAMENT: Sense encapsulació",variant:"bad",children:[t.jsx("p",{children:"Atributs públics: qualsevol pot modificar-los sense control."}),t.jsx(y,{showLineNumbers:!0,code:`public class Persona {
    public String nom;
    public int edat; // Qualsevol pot posar -5!
}

// Des d'un altre lloc:
Persona p = new Persona();
p.edat = -50; // Error logic! No hi ha control
p.nom = "";   // Nom buit acceptat!`}),t.jsx(b,{variant:"error",children:t.jsx("p",{children:"No hi ha cap validació. Es poden assignar valors incorrectes."})})]}),t.jsxs(W,{title:"BÉ: Amb encapsulació",variant:"good",children:[t.jsx("p",{children:"Atributs privats amb getters/setters que validen les dades."}),t.jsx(y,{showLineNumbers:!0,code:`public class Persona {
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
}`}),t.jsx(b,{variant:"success",children:t.jsx("p",{children:"Les dades estan protegides i validades."})})]})]}),t.jsx(C,{title:"Getters i Setters"}),t.jsx(b,{variant:"info",children:t.jsxs("p",{children:["Els ",t.jsx("strong",{children:"getters"})," són mètodes que retornen el valor d'un atribut privat. Els ",t.jsx("strong",{children:"setters"})," són mètodes que permeten modificar el valor d'un atribut privat, habitualment amb validació."]})}),t.jsx(y,{label:"Exemple complet amb getters i setters",showLineNumbers:!0,code:`public class Alumne {
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
}`}),t.jsx(y,{label:"Ús des del main",code:`public class Main {
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
}`}),t.jsx(b,{variant:"success",title:"Convenció de noms",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Getter:"})," ",t.jsx("code",{children:"getAtribut()"})," - retorna el valor (per booleans: ",t.jsx("code",{children:"isAtribut()"}),")"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Setter:"})," ",t.jsx("code",{children:"setAtribut(valor)"})," - modifica el valor"]}),t.jsxs("li",{children:["Sempre comencen amb ",t.jsx("code",{children:"get"})," o ",t.jsx("code",{children:"set"})," seguit del nom de l'atribut amb la primera lletra en majúscula"]})]})})]})}function ps({code:e,language:r="java",label:n,defaultOpen:a=!1}){const[i,s]=R.useState(a);return t.jsxs("div",{style:{margin:"16px 0"},children:[t.jsx(at,{size:"small",variant:"secondary",onClick:()=>s(!i),children:i?"Amagar Codi":"Veure Codi"}),i&&t.jsx(y,{code:e,language:r,label:n})]})}function pw(){return t.jsxs("div",{children:[t.jsx(C,{title:"Constructors i la Paraula Clau this"}),t.jsx(b,{variant:"info",title:"Què és un constructor?",children:t.jsxs("p",{children:["Un ",t.jsx("strong",{children:"constructor"})," és un mètode especial que s'executa automàticament quan es crea un objecte amb ",t.jsx("code",{children:"new"}),". Serveix per ",t.jsx("strong",{children:"inicialitzar"})," els atributs de l'objecte amb valors inicials. El constructor té el ",t.jsx("strong",{children:"mateix nom que la classe"})," i ",t.jsx("strong",{children:"no té tipus de retorn"})," (ni tan sols ",t.jsx("code",{children:"void"}),")."]})}),t.jsx(C,{title:"Sintaxi del Constructor"}),t.jsx(y,{label:"Estructura bàsica d'un constructor",showLineNumbers:!0,code:`public class NomClasse {
    // Atributs
    private String atribut1;
    private int atribut2;

    // Constructor (mateix nom que la classe, sense tipus de retorn)
    public NomClasse(String atribut1, int atribut2) {
        this.atribut1 = atribut1;
        this.atribut2 = atribut2;
    }
}`}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["Fixa't que el constructor ",t.jsx("strong",{children:"no té"})," ",t.jsx("code",{children:"void"})," ni cap altre tipus de retorn. Si hi poses ",t.jsx("code",{children:"void"}),", Java ho tractarà com un mètode normal, no com un constructor!"]})}),t.jsx(C,{title:"La Paraula Clau this"}),t.jsx(b,{variant:"info",children:t.jsxs("p",{children:["La paraula clau ",t.jsx("code",{children:"this"})," fa referència a l'",t.jsx("strong",{children:"objecte actual"}),". S'utilitza principalment quan el nom del paràmetre del constructor (o mètode) coincideix amb el nom de l'atribut de la classe."]})}),t.jsxs(fe,{children:[t.jsxs(W,{title:"Sense this (problema)",variant:"bad",children:[t.jsx(y,{code:`public Cotxe(String marca) {
    marca = marca; // ERROR!
    // Assigna el parametre a si mateix
    // L'atribut NO es modifica
}`}),t.jsx(b,{variant:"error",children:t.jsx("p",{children:"Java no sap distingir entre l'atribut i el paràmetre. L'atribut queda sense valor."})})]}),t.jsxs(W,{title:"Amb this (correcte)",variant:"good",children:[t.jsx(y,{code:`public Cotxe(String marca) {
    this.marca = marca; // CORRECTE!
    // this.marca = atribut de la classe
    // marca = parametre del constructor
}`}),t.jsx(b,{variant:"success",children:t.jsxs("p",{children:[t.jsx("code",{children:"this.marca"})," es refereix a l'atribut de l'objecte. ",t.jsx("code",{children:"marca"})," és el paràmetre."]})})]})]}),t.jsx(C,{title:"Exemple Complet"}),t.jsx(y,{label:"Classe Cotxe amb constructor",showLineNumbers:!0,code:`public class Cotxe {
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
}`}),t.jsx(y,{label:"Crear objectes amb el constructor",code:`public class Main {
    public static void main(String[] args) {
        // Ara podem inicialitzar en UNA sola linia!
        Cotxe c1 = new Cotxe("Toyota", "Corolla", 15000);
        Cotxe c2 = new Cotxe("BMW", "Serie 3", 30000);

        c1.mostrarInfo(); // Toyota Corolla - 15000 km
        c2.mostrarInfo(); // BMW Serie 3 - 30000 km
    }
}`}),t.jsx(C,{title:"Sobrecàrrega de Constructors"}),t.jsx(b,{variant:"info",title:"Què és la sobrecàrrega?",children:t.jsxs("p",{children:["Una classe pot tenir ",t.jsx("strong",{children:"múltiples constructors"})," amb diferent nombre o tipus de paràmetres. Això s'anomena ",t.jsx("strong",{children:"sobrecàrrega de constructors"})," (constructor overloading). Java selecciona automàticament el constructor adequat segons els arguments que li passem."]})}),t.jsx(y,{label:"Sobrecàrrega de constructors",showLineNumbers:!0,code:`public class Cotxe {
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
}`}),t.jsx(y,{label:"Usar els diferents constructors",code:`Cotxe c1 = new Cotxe("Toyota", "Corolla", 15000); // Constructor 1
Cotxe c2 = new Cotxe("BMW", "Serie 3");             // Constructor 2
Cotxe c3 = new Cotxe();                             // Constructor 3`}),t.jsx(C,{title:"Errors Comuns"}),t.jsxs(ge,{children:[t.jsxs(N,{title:"Posar void al constructor",variant:"pink",children:[t.jsxs("p",{children:["Si afegeixes ",t.jsx("code",{children:"void"}),", Java ho tracta com un mètode normal, no com un constructor."]}),t.jsx(y,{code:`// MALAMENT:
public void Cotxe(String marca) {
    this.marca = marca;
}
// Aixo NO es un constructor!`})]}),t.jsxs(N,{title:"No usar this",variant:"pink",children:[t.jsxs("p",{children:["Si el paràmetre té el mateix nom que l'atribut i no uses ",t.jsx("code",{children:"this"}),", l'atribut no es modifica."]}),t.jsx(y,{code:`// MALAMENT:
public Cotxe(String marca) {
    marca = marca; // No fa res!
}
// BE:
public Cotxe(String marca) {
    this.marca = marca;
}`})]}),t.jsxs(N,{title:"Nom diferent de la classe",variant:"pink",children:[t.jsxs("p",{children:["El constructor ha de tenir ",t.jsx("strong",{children:"exactament"})," el mateix nom que la classe."]}),t.jsx(y,{code:`// MALAMENT:
public class Cotxe {
    public cotxe() { } // minuscula!
}
// BE:
public class Cotxe {
    public Cotxe() { } // Correcte
}`})]}),t.jsxs(N,{title:"Constructor per defecte",variant:"yellow",children:[t.jsx("p",{children:"Si no defineixes cap constructor, Java en crea un de buit automàticament. Però si defineixes un constructor amb paràmetres, el buit desapareix."}),t.jsx(y,{code:`// Si tens:
public Cotxe(String marca) { ... }

// Aleshores AIXO ja no funciona:
Cotxe c = new Cotxe(); // ERROR!
// Has d'afegir el constructor buit`})]})]}),t.jsx(ps,{label:"Exemple complet: Classe Estudiant amb sobrecàrrega",code:`public class Estudiant {
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
}`}),t.jsx(b,{variant:"success",title:"Resum",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["El constructor inicialitza l'objecte quan es crea amb ",t.jsx("code",{children:"new"})]}),t.jsx("li",{children:"Té el mateix nom que la classe i no té tipus de retorn"}),t.jsxs("li",{children:[t.jsx("code",{children:"this"})," es refereix a l'objecte actual i diferencia atributs de paràmetres"]}),t.jsx("li",{children:"La sobrecàrrega permet múltiples constructors amb paràmetres diferents"})]})})]})}const mw=`// Classe PARE (superclasse)
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
}`,hw=`// Classe FILLA (subclasse) - hereta d'Animal
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
}`,fw=`public class Main {
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
// Constructor de Gos: Pastor Alemany`,xw=`public class Animal {
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
// Raca: Pastor Alemany`,vw=`public class Animal {
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
mia.ferSoroll();  // Mia fa: Miau!`,jw=`public class Animal {
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
}`,bw=`// ============ CLASSE PARE ============
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
}`,yw=`public class Main {
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
}`;function Sw(){return t.jsxs("div",{children:[t.jsx(C,{title:"Herència en Java"}),t.jsx(b,{variant:"info",title:"Què és l'herència?",children:t.jsxs("p",{children:["L'",t.jsx("strong",{children:"herència"})," és un dels pilars fonamentals de la Programació Orientada a Objectes. Permet que una classe ",t.jsx("strong",{children:"filla"})," (subclasse) hereti els atributs i mètodes d'una classe ",t.jsx("strong",{children:"pare"})," (superclasse). D'aquesta manera, podem ",t.jsx("strong",{children:"reutilitzar codi"})," i crear jerarquies de classes organitzades."]})}),t.jsxs(b,{variant:"explanation",title:"Analogia del món real",children:[t.jsxs("p",{children:["Pensa en els animals. Tots els animals comparteixen comportaments comuns:",t.jsx("strong",{children:" menjar"}),", ",t.jsx("strong",{children:"dormir"}),", ",t.jsx("strong",{children:"moure's"}),"... Però cada tipus d'animal té comportaments propis: un gos pot ",t.jsx("strong",{children:"bordar"}),", un gat pot ",t.jsx("strong",{children:"miolar"}),", un ocell pot ",t.jsx("strong",{children:"volar"}),"."]}),t.jsxs("p",{style:{marginTop:"8px"},children:['En lloc de repetir "menjar" i "dormir" a cada classe (Gos, Gat, Ocell...), definim aquests comportaments comuns a la classe ',t.jsx("strong",{children:"Animal"})," i fem que cada animal en concret els ",t.jsx("strong",{children:"hereti"}),"."]})]}),t.jsx(C,{title:"Terminologia"}),t.jsx(re,{headers:["Terme","Altres noms","Descripció"],rows:[{cells:["Classe pare","Superclasse, classe base","La classe de la qual s'hereten atributs i mètodes"]},{cells:["Classe filla","Subclasse, classe derivada","La classe que hereta d'una altra i pot afegir funcionalitat pròpia"]},{cells:["extends","Paraula clau","S'utilitza per indicar que una classe hereta d'una altra"]},{cells:["super","Paraula clau","Permet accedir al constructor o mètodes de la classe pare"]},{cells:["@Override","Anotació","Indica que un mètode sobreescriu un mètode del pare"]}]}),t.jsx(C,{title:"Sintaxi Bàsica i Exemple"}),t.jsxs(b,{variant:"info",children:[t.jsxs("p",{children:["Per indicar que una classe hereta d'una altra, s'utilitza la paraula clau ",t.jsx("code",{children:"extends"}),":"]}),t.jsx("p",{style:{marginTop:"8px"},children:t.jsxs("code",{children:["public class Filla ",t.jsx("strong",{children:"extends"})," Pare ","{ ... }"]})})]}),t.jsx(y,{label:"Classe pare: Animal",code:mw,showLineNumbers:!0}),t.jsx(y,{label:"Classes filles: Gos i Gat",code:hw,showLineNumbers:!0}),t.jsx(y,{label:"Utilitzar l'herència",code:fw,showLineNumbers:!0}),t.jsx(b,{variant:"success",title:"Què ha passat?",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("code",{children:"Gos"})," i ",t.jsx("code",{children:"Gat"})," hereten ",t.jsx("code",{children:"menjar()"}),", ",t.jsx("code",{children:"dormir()"})," i ",t.jsx("code",{children:"mostrarInfo()"})," d'Animal ",t.jsx("strong",{children:"sense haver de reescriure el codi"}),"."]}),t.jsxs("li",{children:["Cada subclasse pot tenir ",t.jsx("strong",{children:"mètodes propis"})," (",t.jsx("code",{children:"bordar()"}),", ",t.jsx("code",{children:"miolar()"}),") que no existeixen al pare."]}),t.jsxs("li",{children:["Un ",t.jsx("code",{children:"Gos"})," no pot usar ",t.jsx("code",{children:"miolar()"})," perquè és exclusiu de ",t.jsx("code",{children:"Gat"}),"."]})]})}),t.jsx(C,{title:"La Paraula Clau super"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["La paraula clau ",t.jsx("code",{children:"super"})," serveix per accedir als membres de la classe ",t.jsx("strong",{children:"pare"})," des de la classe filla. Té dos usos principals:"]})}),t.jsxs(fe,{children:[t.jsxs(W,{title:"super() - Cridar al constructor del pare",variant:"blue",children:[t.jsxs("p",{style:{marginBottom:"10px"},children:["S'utilitza dins del constructor de la classe filla per cridar al constructor de la classe pare. ",t.jsx("strong",{children:"Ha de ser la primera instrucció"})," del constructor."]}),t.jsx(y,{code:`public Gos(String nom, String raca) {
    super(nom);  // Crida Animal(String nom)
    this.raca = raca;
}`})]}),t.jsxs(W,{title:"super.mètode() - Cridar un mètode del pare",variant:"good",children:[t.jsxs("p",{style:{marginBottom:"10px"},children:["S'utilitza per cridar un mètode de la classe pare, especialment quan la classe filla l'ha ",t.jsx("strong",{children:"sobreescrit"})," (override)."]}),t.jsx(y,{code:`@Override
public void mostrarInfo() {
    super.mostrarInfo(); // Crida el del pare
    System.out.println("Raca: " + raca);
}`})]})]}),t.jsx(y,{label:"Exemple de super() en constructors",code:gw,showLineNumbers:!0}),t.jsx(y,{label:"Exemple de super.mètode()",code:xw,showLineNumbers:!0}),t.jsx(b,{variant:"warning",title:"Regles de super()",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("code",{children:"super()"})," ha de ser la ",t.jsx("strong",{children:"primera instrucció"})," del constructor de la classe filla."]}),t.jsxs("li",{children:["Si el pare no té un constructor sense paràmetres, la classe filla ",t.jsx("strong",{children:"ha de cridar"})," ",t.jsx("code",{children:"super(...)"})," amb els arguments corresponents."]}),t.jsxs("li",{children:["Si no escrius ",t.jsx("code",{children:"super()"}),", Java l'afegeix automàticament (només si el pare té constructor sense paràmetres)."]})]})}),t.jsx(C,{title:"Sobreescriptura de Mètodes (@Override)"}),t.jsx(b,{variant:"info",title:"Què és la sobreescriptura?",children:t.jsxs("p",{children:["La ",t.jsx("strong",{children:"sobreescriptura"})," (override) permet que una classe filla",t.jsx("strong",{children:" redefineixi"})," un mètode que ha heretat del pare. La classe filla proporciona la seva pròpia implementació del mètode, substituint la del pare. L'anotació ",t.jsx("code",{children:"@Override"})," no és obligatòria, però és molt",t.jsx("strong",{children:" recomanable"})," perquè ajuda a detectar errors."]})}),t.jsx(y,{label:"Exemple de sobreescriptura: ferSoroll()",code:vw,showLineNumbers:!0}),t.jsx(b,{variant:"explanation",title:"Per què @Override és important?",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["Si escrius ",t.jsx("code",{children:"@Override"})," i el mètode NO existeix al pare, Java et donarà un ",t.jsx("strong",{children:"error de compilació"}),". Això evita errors per noms mal escrits."]}),t.jsxs("li",{children:["Fa el codi més ",t.jsx("strong",{children:"llegible"}),": queda clar que el mètode ve del pare."]}),t.jsxs("li",{children:["El mètode sobreescrit ha de tenir la ",t.jsx("strong",{children:"mateixa signatura"})," (nom, paràmetres i tipus de retorn) que el del pare."]})]})}),t.jsx(C,{title:"El Modificador d'Accés protected"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["Quan treballem amb herència, el modificador d'accés ",t.jsx("code",{children:"protected"})," és molt útil. Permet que els atributs i mètodes siguin accessibles des de la",t.jsx("strong",{children:" mateixa classe"}),", les ",t.jsx("strong",{children:"subclasses"})," i les classes del",t.jsx("strong",{children:" mateix paquet"}),", però no des de classes externes."]})}),t.jsx(re,{headers:["Modificador","Mateixa classe","Subclasse","Mateix paquet","Altres classes"],rows:[{cells:["private","Sí","No","No","No"]},{cells:["protected","Sí","Sí","Sí","No"]},{cells:["public","Sí","Sí","Sí","Sí"]}]}),t.jsx(y,{label:"Exemple d'accés protected en herència",code:jw,showLineNumbers:!0}),t.jsx(b,{variant:"info",title:"Quan usar protected?",children:t.jsxs("p",{children:["Usa ",t.jsx("code",{children:"protected"})," per als atributs que vols que les classes filles puguin accedir ",t.jsx("strong",{children:"directament"}),", sense necessitat de getters. Si vols més control i encapsulació, utilitza ",t.jsx("code",{children:"private"})," amb getters/setters ",t.jsx("code",{children:"public"})," o ",t.jsx("code",{children:"protected"}),"."]})}),t.jsx(C,{title:"Exemple Complet: Vehicle, Cotxe i Moto"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["Vegem un exemple complet que combina tot el que hem après: herència,",t.jsx("code",{children:" super"}),", ",t.jsx("code",{children:"@Override"}),", atributs ",t.jsx("code",{children:"protected"}),", mètodes propis i mètodes heretats."]})}),t.jsx(y,{label:"Jerarquia completa: Vehicle → Cotxe, Moto",code:bw,showLineNumbers:!0}),t.jsx(y,{label:"Utilitzar la jerarquia de vehicles",code:yw,showLineNumbers:!0}),t.jsx(C,{title:"Regles Importants de l'Herència en Java"}),t.jsx(b,{variant:"warning",title:"Regles clau que has de recordar",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Herència simple:"})," Java només permet heretar d'UNA sola classe. No es pot fer ",t.jsx("code",{children:"class A extends B, C"}),". (Les ",t.jsx("em",{children:"interfaces"})," permeten una alternativa, però és un tema més avançat.)"]}),t.jsxs("li",{style:{marginTop:"8px"},children:[t.jsx("strong",{children:"Totes les classes hereten d'Object:"})," Si una classe no té",t.jsx("code",{children:" extends"}),", Java automàticament fa que hereti de la classe ",t.jsx("code",{children:"Object"}),". Per això totes les classes tenen mètodes com ",t.jsx("code",{children:"toString()"}),",",t.jsx("code",{children:" equals()"}),", etc."]}),t.jsxs("li",{style:{marginTop:"8px"},children:[t.jsx("strong",{children:"Classes final:"})," Si una classe es declara ",t.jsx("code",{children:"final"}),",",t.jsx("strong",{children:" no pot ser heretada"}),". Per exemple, ",t.jsxs("code",{children:["final class Utilitats ","{ ... }"]})," no es pot estendre."]})]})}),t.jsxs(ge,{children:[t.jsx(N,{title:"Herència Simple",variant:"blue",children:t.jsx(y,{code:`// CORRECTE: una sola classe pare
class Gos extends Animal { }

// ERROR: multiples classes pare
class Gos extends Animal, Mascota { }
// Aixo NO es pot fer en Java!`})}),t.jsx(N,{title:"Totes hereten d'Object",variant:"yellow",children:t.jsx(y,{code:`// Aquestes dues declaracions son equivalents:
class Animal { }
class Animal extends Object { }

// Per aixo pots fer:
Animal a = new Animal();
a.toString();  // Heretat d'Object
a.equals(b);   // Heretat d'Object`})}),t.jsx(N,{title:"Classes final",variant:"green",children:t.jsx(y,{code:`// Aquesta classe NO es pot heretar
final class Constants {
    static final double PI = 3.14159;
}

// ERROR de compilacio!
class MesConstants extends Constants { }
// No es pot estendre una classe final`})})]}),t.jsx(b,{variant:"success",title:"Resum",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["L'herència permet que una classe filla hereti atributs i mètodes d'una classe pare amb ",t.jsx("code",{children:"extends"}),"."]}),t.jsxs("li",{children:[t.jsx("code",{children:"super()"})," crida al constructor del pare; ",t.jsx("code",{children:"super.mètode()"})," crida un mètode del pare."]}),t.jsxs("li",{children:[t.jsx("code",{children:"@Override"})," indica que la classe filla redefineix un mètode del pare."]}),t.jsxs("li",{children:[t.jsx("code",{children:"protected"})," fa que els atributs siguin accessibles des de les subclasses."]}),t.jsxs("li",{children:["Java només permet ",t.jsx("strong",{children:"herència simple"})," (un sol pare)."]}),t.jsxs("li",{children:["Totes les classes hereten implícitament de ",t.jsx("code",{children:"Object"}),"."]}),t.jsxs("li",{children:["Les classes ",t.jsx("code",{children:"final"})," no poden ser heretades."]})]})})]})}function ww(){return t.jsxs("div",{children:[t.jsx(C,{title:"Exemple Complet: Sistema de Biblioteca"}),t.jsx(b,{variant:"info",title:"Objectiu",children:t.jsxs("p",{children:["Crearem un sistema de gestió d'una biblioteca utilitzant els conceptes de POO que hem après: classes, objectes, constructors, encapsulació (getters/setters) i packages. El sistema tindrà tres classes: ",t.jsx("code",{children:"Llibre"}),", ",t.jsx("code",{children:"Autor"})," i ",t.jsx("code",{children:"Biblioteca"}),"."]})}),t.jsx(C,{title:"Estructura del Projecte"}),t.jsx(y,{label:"Organització en packages",language:"bash",code:`biblioteca/
  src/
    model/
      Llibre.java
      Autor.java
    gestio/
      Biblioteca.java
    app/
      Main.java`}),t.jsxs(ge,{children:[t.jsxs(N,{title:"Classe Autor",variant:"blue",children:[t.jsx("p",{children:"Representa un autor amb nom i nacionalitat."}),t.jsxs("p",{style:{marginTop:"6px"},children:["Atributs: ",t.jsx("code",{children:"nom"}),", ",t.jsx("code",{children:"nacionalitat"})]})]}),t.jsxs(N,{title:"Classe Llibre",variant:"yellow",children:[t.jsx("p",{children:"Representa un llibre amb títol, autor, any i disponibilitat."}),t.jsxs("p",{style:{marginTop:"6px"},children:["Atributs: ",t.jsx("code",{children:"títol"}),", ",t.jsx("code",{children:"autor"}),", ",t.jsx("code",{children:"any"}),", ",t.jsx("code",{children:"disponible"})]})]}),t.jsxs(N,{title:"Classe Biblioteca",variant:"green",children:[t.jsx("p",{children:"Gestiona una col·lecció de llibres amb operacions CRUD."}),t.jsxs("p",{style:{marginTop:"6px"},children:["Mètodes: ",t.jsx("code",{children:"afegir"}),", ",t.jsx("code",{children:"buscar"}),", ",t.jsx("code",{children:"prestar"}),", ",t.jsx("code",{children:"retornar"})]})]}),t.jsx(N,{title:"Classe Main",variant:"pink",children:t.jsx("p",{children:"Punt d'entrada del programa per provar el sistema."})})]}),t.jsx(C,{title:"Classe Autor"}),t.jsx(y,{label:"model/Autor.java",showLineNumbers:!0,code:`package model;

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
}`}),t.jsx(C,{title:"Classe Llibre"}),t.jsx(y,{label:"model/Llibre.java",showLineNumbers:!0,code:`package model;

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
}`}),t.jsx(b,{variant:"explanation",title:"Composició",children:t.jsxs("p",{children:["Fixa't que la classe ",t.jsx("code",{children:"Llibre"})," té un atribut de tipus ",t.jsx("code",{children:"Autor"}),". Això s'anomena ",t.jsx("strong",{children:"composició"}),`: un objecte conté un altre objecte. És una relació "TÉ UN" (un llibre TÉ UN autor). Així evitem duplicar les dades de l'autor en cada llibre.`]})}),t.jsx(C,{title:"Classe Biblioteca"}),t.jsx(y,{label:"gestio/Biblioteca.java",showLineNumbers:!0,code:`package gestio;

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
}`}),t.jsx(C,{title:"Classe Main (Punt d'entrada)"}),t.jsx(y,{label:"app/Main.java",showLineNumbers:!0,code:`package app;

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
}`}),t.jsx(C,{title:"Sortida del Programa"}),t.jsx(ps,{label:"Resultat esperat a la consola",language:"bash",defaultOpen:!0,code:`Llibre afegit: Cent anys de solitud
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
Total: 3 llibres`}),t.jsx(C,{title:"Conceptes Aplicats"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Encapsulació",variant:"blue",children:t.jsxs("p",{children:["Tots els atributs són ",t.jsx("code",{children:"private"})," amb getters i setters."]})}),t.jsx(N,{title:"Constructors",variant:"yellow",children:t.jsxs("p",{children:["Cada classe té un constructor que inicialitza els atributs amb ",t.jsx("code",{children:"this"}),"."]})}),t.jsx(N,{title:"Composició",variant:"green",children:t.jsxs("p",{children:[t.jsx("code",{children:"Llibre"})," conté un objecte ",t.jsx("code",{children:"Autor"}),". ",t.jsx("code",{children:"Biblioteca"})," conté un array de ",t.jsx("code",{children:"Llibre"}),"."]})}),t.jsx(N,{title:"Packages",variant:"pink",children:t.jsxs("p",{children:["Classes organitzades en packages: ",t.jsx("code",{children:"model"}),", ",t.jsx("code",{children:"gestio"}),", ",t.jsx("code",{children:"app"}),"."]})})]}),t.jsx(b,{variant:"success",title:"Resum",children:t.jsx("p",{children:"Aquest exemple mostra com la POO ens permet crear un sistema complet i organitzat. Cada classe té una responsabilitat clara, les dades estan protegides amb encapsulació, i el codi està organitzat en packages. Així és com es programen les aplicacions reals."})})]})}const Sl=[{name:"src/",type:"folder",description:"Carpeta arrel del codi font. Conté tots els fitxers .java organitzats en packages."},{name:"  model/",type:"folder",description:"Package que conté les classes de dades (entitats). Representen els objectes del domini: Producte, Client, Comanda..."},{name:"    Producte.java",type:"file",description:"Classe que representa un producte amb atributs privats (nom, preu, estoc), constructor, getters i setters. És una classe de model pura, sense lògica de negoci."},{name:"    Client.java",type:"file",description:"Classe que representa un client amb nom, email i historial de compres. Encapsula totes les dades del client amb validació als setters."},{name:"  servei/",type:"folder",description:"Package que conté la lògica de negoci. Aquí és on es fan els càlculs, validacions i operacions complexes."},{name:"    GestorProductes.java",type:"file",description:"Classe que gestiona la col·lecció de productes: afegir, eliminar, buscar, calcular el valor total de l'inventari. Utilitza objectes de la classe Producte."},{name:"    GestorComandes.java",type:"file",description:"Classe que gestiona les comandes: crear comanda, afegir productes, calcular total, aplicar descomptes. Coordina Producte i Client."},{name:"  app/",type:"folder",description:"Package que conté el punt d'entrada de l'aplicació. Aquí és on està el main() que inicia el programa."},{name:"    Main.java",type:"file",description:"Classe principal amb el mètode main(). Crea objectes de les altres classes, els connecta i executa el programa. És el punt d'entrada."}];function Ew(){const[e,r]=R.useState(null);return t.jsxs("div",{children:[t.jsx(C,{title:"Introducció a la Modularitat"}),t.jsx(b,{variant:"info",title:"Què és la modularitat?",children:t.jsxs("p",{children:["La ",t.jsx("strong",{children:"modularitat"})," és el principi de dividir un programa en parts més petites, independents i reutilitzables, anomenades ",t.jsx("strong",{children:"mòduls"}),". Cada mòdul té una responsabilitat concreta i ben definida. En Java, els mòduls són les ",t.jsx("strong",{children:"classes"})," organitzades en ",t.jsx("strong",{children:"packages"}),"."]})}),t.jsx(C,{title:"Analogia: La Ciutat"}),t.jsxs(b,{variant:"explanation",children:[t.jsxs("p",{children:["Imagina una ",t.jsx("strong",{children:"ciutat"}),". Una ciutat no és un sol edifici gegant on tot passa al mateix lloc. Està organitzada en zones: zona residencial, zona comercial, hospitals, escoles, parcs... Cada zona té la seva funció i són independents entre si, però es connecten mitjançant carrers i transport."]}),t.jsx("p",{style:{marginTop:"10px"},children:'Un programa modular funciona igual: cada classe és com una "zona" de la ciutat, amb una funció clara. Les classes es comuniquen entre si creant objectes i cridant mètodes, com els carrers que connecten les zones.'})]}),t.jsxs(ge,{children:[t.jsx(N,{title:"Zona Residencial = Classe Model",variant:"blue",children:t.jsxs("p",{children:["On viuen les dades. Classes com ",t.jsx("code",{children:"Producte"}),", ",t.jsx("code",{children:"Client"})," que emmagatzemen informació."]})}),t.jsx(N,{title:"Zona Comercial = Classe Servei",variant:"yellow",children:t.jsxs("p",{children:["On passa la lògica de negoci. Classes com ",t.jsx("code",{children:"GestorProductes"})," que processen dades."]})}),t.jsx(N,{title:"Ajuntament = Classe Main",variant:"green",children:t.jsxs("p",{children:["El punt central que coordina tot. El ",t.jsx("code",{children:"main()"})," inicia i connecta les parts."]})}),t.jsx(N,{title:"Carrers = Objectes i Mètodes",variant:"pink",children:t.jsx("p",{children:"La comunicació entre mòduls. Crear objectes i cridar mètodes connecta les classes."})})]}),t.jsx(C,{title:"Per què codi modular?"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Fàcil de mantenir",variant:"blue",children:t.jsx("p",{children:"Si alguna cosa falla, saps exactament a quina classe mirar. No cal revisar 1000 línies de codi."})}),t.jsx(N,{title:"Reutilitzable",variant:"yellow",children:t.jsx("p",{children:"Una classe ben feta es pot reutilitzar en altres projectes. Escrius el codi un cop, l'uses moltes vegades."})}),t.jsx(N,{title:"Treball en equip",variant:"green",children:t.jsx("p",{children:"Cada persona pot treballar en una classe diferent sense interferir amb els altres."})}),t.jsx(N,{title:"Fàcil de testejar",variant:"pink",children:t.jsx("p",{children:"Pots provar cada classe per separat (tests unitaris) abans de juntar-ho tot."})})]}),t.jsx(C,{title:"Explorador d'Estructura de Projecte"}),t.jsx(b,{variant:"info",children:t.jsx("p",{children:"Fes clic a qualsevol fitxer o carpeta per veure la seva descripció i entendre la seva funció dins del projecte modular."})}),t.jsxs("div",{style:{display:"flex",gap:"20px",marginTop:"16px",flexWrap:"wrap"},children:[t.jsxs("div",{style:{flex:"1",minWidth:"280px",backgroundColor:"#1e2837",borderRadius:"8px",padding:"16px",fontFamily:"monospace",fontSize:"14px"},children:[t.jsx("div",{style:{color:"#ffd700",marginBottom:"12px",fontWeight:"bold"},children:"Estructura del Projecte"}),Sl.map((n,a)=>t.jsxs("div",{onClick:()=>r(a),style:{padding:"6px 8px",cursor:"pointer",borderRadius:"4px",color:e===a?"#ffd700":n.type==="folder"?"#90cdf4":"#e8eef5",backgroundColor:e===a?"rgba(255, 215, 0, 0.1)":"transparent",fontWeight:n.type==="folder"?"bold":"normal",transition:"background-color 0.2s"},onMouseOver:i=>{e!==a&&(i.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.05)")},onMouseOut:i=>{e!==a&&(i.currentTarget.style.backgroundColor="transparent")},children:[n.type==="folder"?"📁 ":"📄 ",n.name]},a))]}),t.jsx("div",{style:{flex:"1",minWidth:"280px",backgroundColor:"#f0f4f8",borderRadius:"8px",padding:"20px",border:"2px solid #d0dae6"},children:e!==null?t.jsxs(t.Fragment,{children:[t.jsx("h4",{style:{color:"#1a4d8f",marginBottom:"12px"},children:Sl[e].name.trim()}),t.jsx("p",{style:{color:"#4a5568",lineHeight:"1.6"},children:Sl[e].description})]}):t.jsx("p",{style:{color:"#a0aec0",fontStyle:"italic"},children:"Selecciona un fitxer o carpeta per veure la seva descripció."})})]}),t.jsx(C,{title:"Exemple Bàsic de Modularitat"}),t.jsx(y,{label:"Dues classes separades que col·laboren",showLineNumbers:!0,code:`// Fitxer: Salutador.java
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
}`}),t.jsx(b,{variant:"success",title:"Resum",children:t.jsx("p",{children:"La modularitat és dividir el programa en classes amb responsabilitats clares. Cada classe és un mòdul independent que es pot reutilitzar, testejar i mantenir per separat. Les classes es comuniquen creant objectes i cridant mètodes."})})]})}function Cw(){return t.jsxs("div",{children:[t.jsx(C,{title:"El Problema del Codi Monolític"}),t.jsx(b,{variant:"warning",title:"Què és un programa monolític?",children:t.jsxs("p",{children:["Un programa ",t.jsx("strong",{children:"monolític"})," és aquell on ",t.jsx("strong",{children:"tot el codi"})," està en un sol fitxer o classe. Totes les variables, tota la lògica, totes les funcionalitats... tot barrejat en un únic ",t.jsx("code",{children:"main()"}),". Funciona per a programes petits, però es converteix en un problema seriós a mesura que el programa creix."]})}),t.jsx(C,{title:"Exemple: Tot en un sol fitxer"}),t.jsx(y,{label:"Programa monolític (MAL disseny)",showLineNumbers:!0,code:`public class MonoliticApp {
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
}`}),t.jsx(C,{title:"Monolític vs Modular"}),t.jsxs(fe,{children:[t.jsx(W,{title:"Programa Monolític",variant:"bad",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Tot en un sol fitxer:"})," variables, lògica, sortida... tot barrejat"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Difícil de llegir:"})," quan el programa creix, és impossible entendre-ho"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Difícil de mantenir:"})," un canvi pot trencar tot el programa"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"No reutilitzable:"})," no pots reutilitzar parts del codi en altres projectes"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"No testejable:"})," no pots provar una funcionalitat sense executar-ho tot"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Conflictes en equip:"})," dues persones no poden treballar al mateix fitxer sense conflictes"]})]})}),t.jsx(W,{title:"Programa Modular",variant:"good",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Classes separades:"})," cada classe té una responsabilitat"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Fàcil de llegir:"})," cada fitxer és curt i clar"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Fàcil de mantenir:"})," un canvi en una classe no afecta les altres"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Reutilitzable:"})," pots usar les classes en altres projectes"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Testejable:"})," pots provar cada classe per separat"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Treball en equip:"})," cada persona treballa en una classe diferent"]})]})})]}),t.jsx(C,{title:"Problemes Concrets del Codi Monolític"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Efecte Espagueti",variant:"pink",children:t.jsx("p",{children:"El codi s'entrelliga com els espaguetis. Una variable definida a la línia 10 s'utilitza a la línia 200 i es modifica a la línia 450. Impossible de seguir."})}),t.jsx(N,{title:"Duplicació de Codi",variant:"pink",children:t.jsx("p",{children:"Sense mòduls, acabes copiant i enganxant el mateix codi en diversos llocs. Si has de canviar alguna cosa, l'has de canviar en tots els llocs."})}),t.jsx(N,{title:"Debugging Impossible",variant:"pink",children:t.jsx("p",{children:"Quan hi ha un error, has de revisar tot el fitxer. No pots aïllar el problema perquè tot està connectat. Un bug pot estar en qualsevol de les 1000 línies."})}),t.jsx(N,{title:"Escalabilitat Zero",variant:"pink",children:t.jsx("p",{children:"Afegir una nova funcionalitat significa modificar el fitxer monolític, amb el risc de trencar les funcionalitats existents."})})]}),t.jsx(C,{title:"La Solució: Dividir en Classes"}),t.jsxs(b,{variant:"success",children:[t.jsxs("p",{children:["La solució és ",t.jsx("strong",{children:"dividir el programa en classes"}),", on cada classe té una responsabilitat única i ben definida. Així aconseguim:"]}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Separació de responsabilitats:"})," cada classe fa UNA cosa"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Encapsulació:"})," les dades estan protegides dins de cada classe"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Reutilització:"})," les classes es poden usar en múltiples projectes"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Mantenibilitat:"})," és fàcil trobar i corregir errors"]})]})]}),t.jsxs(fe,{children:[t.jsx(W,{title:"Monolític: 1 fitxer",variant:"bad",children:t.jsx(y,{language:"bash",code:`projecte/
  MonoliticApp.java  (500+ línies)`})}),t.jsx(W,{title:"Modular: múltiples classes",variant:"good",children:t.jsx(y,{language:"bash",code:`projecte/
  model/
    Producte.java     (30 línies)
  servei/
    GestorProductes.java (50 línies)
  app/
    Main.java         (20 línies)`})})]}),t.jsx(b,{variant:"info",title:"Recorda",children:t.jsxs("p",{children:["El primer pas per millorar el teu codi és ",t.jsx("strong",{children:"identificar les responsabilitats"})," del teu programa i crear una classe per a cadascuna. A la següent pàgina veurem com fer-ho pas a pas amb un exemple concret."]})})]})}function Rw(){return t.jsxs("div",{children:[t.jsx(C,{title:"Packages: Organització del Codi"}),t.jsx(b,{variant:"info",title:"Què és un package?",children:t.jsxs("p",{children:["Un ",t.jsx("strong",{children:"package"})," és una carpeta que agrupa classes relacionades. És la manera que té Java d'organitzar el codi en projectes grans. Cada fitxer ",t.jsx("code",{children:".java"})," declara a quin package pertany, i per utilitzar classes d'un altre package cal importar-les."]})}),t.jsx(C,{title:"Estructura de Carpetes"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["L'estructura de carpetes del projecte ha de coincidir amb la declaració dels packages. Cada package és una carpeta, i cada classe és un fitxer",t.jsx("code",{children:".java"})," dins d'aquesta carpeta."]})}),t.jsx(y,{label:"Estructura de carpetes d'un projecte",language:"bash",code:`el-meu-projecte/
  src/
    utils/                          ← Package "utils"
      CalculsArrayReals.java
      Validador.java
    model/                          ← Package "model"
      Producte.java
      Client.java
    app/                            ← Package "app"
      Main.java`}),t.jsx(C,{title:"Declaració de Package"}),t.jsx(b,{variant:"warning",title:"Regla important",children:t.jsxs("p",{children:["La declaració ",t.jsx("code",{children:"package"})," ha de ser la ",t.jsx("strong",{children:"primera instrucció"})," del fitxer Java, abans de qualsevol ",t.jsx("code",{children:"import"})," o declaració de classe. El nom del package ha de coincidir exactament amb el nom de la carpeta."]})}),t.jsx(y,{label:"Declaració del package",showLineNumbers:!0,code:`// Fitxer: src/utils/CalculsArrayReals.java
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
}`}),t.jsx(C,{title:"Mètodes d'Importació"}),t.jsx(b,{variant:"info",children:t.jsxs("p",{children:["Per utilitzar una classe d'un altre package, hi ha ",t.jsx("strong",{children:"tres mètodes"})," d'importació. Cadascun té els seus avantatges."]})}),t.jsx(re,{headers:["Mètode","Sintaxi","Quan usar-lo"],rows:[{group:"Mètodes d'importació"},{cells:["Import explícit","import utils.CalculsArrayReals;","Quan uses una o poques classes concretes"]},{cells:["Import amb comodí (*)","import utils.*;","Quan uses moltes classes del mateix package"]},{cells:["Nom qualificat","utils.CalculsArrayReals c = new utils.CalculsArrayReals();","Per evitar ambigüitats o ús puntual"]}]}),t.jsxs(ge,{children:[t.jsxs(N,{title:"Import Explícit",variant:"blue",children:[t.jsxs("p",{children:["Importa una classe concreta. És el mètode ",t.jsx("strong",{children:"recomanat"}),"."]}),t.jsx(y,{code:`package app;

import utils.CalculsArrayReals;
import model.Producte;

public class Main {
    public static void main(String[] args) {
        CalculsArrayReals c = new CalculsArrayReals();
        Producte p = new Producte();
    }
}`}),t.jsx(b,{variant:"success",children:t.jsx("p",{children:"Queda clar quines classes s'estan usant."})})]}),t.jsxs(N,{title:"Import amb Comodí (*)",variant:"yellow",children:[t.jsxs("p",{children:["Importa ",t.jsx("strong",{children:"totes"})," les classes d'un package."]}),t.jsx(y,{code:`package app;

import utils.*;    // Totes les classes de utils
import model.*;    // Totes les classes de model

public class Main {
    public static void main(String[] args) {
        CalculsArrayReals c = new CalculsArrayReals();
        Producte p = new Producte();
        Validador v = new Validador();
    }
}`}),t.jsx(b,{variant:"warning",children:t.jsx("p",{children:"Més còmode, però menys clar. No saps quines classes s'usen realment."})})]}),t.jsxs(N,{title:"Nom Qualificat",variant:"green",children:[t.jsxs("p",{children:["Usa el nom complet ",t.jsx("strong",{children:"sense import"}),"."]}),t.jsx(y,{code:`package app;

// Sense import!
public class Main {
    public static void main(String[] args) {
        utils.CalculsArrayReals c =
            new utils.CalculsArrayReals();
        model.Producte p =
            new model.Producte();
    }
}`}),t.jsx(b,{variant:"info",children:t.jsx("p",{children:"Útil quan dues classes de packages diferents tenen el mateix nom."})})]})]}),t.jsx(C,{title:"Convencions de Noms"}),t.jsx(re,{headers:["Regla","Exemple Correcte","Exemple Incorrecte"],rows:[{cells:["Tot en minúscules","package model;","package Model;"]},{cells:["Sense espais","package gestordades;","package gestor dades;"]},{cells:["Sense caràcters especials","package utils;","package utils-helpers;"]},{cells:["Noms descriptius","package controlador;","package ctrl;"]},{cells:["Domini invers (professional)","package com.lasalle.app;","package app.lasalle.com;"]}]}),t.jsx(b,{variant:"explanation",title:"Convenció del domini invers",children:t.jsxs("p",{children:["En projectes professionals, els packages comencen amb el ",t.jsx("strong",{children:"domini invers"})," de l'organització. Això evita conflictes de noms entre projectes de diferents empreses."]})}),t.jsx(y,{label:"Exemple amb domini invers",code:`// Projecte de La Salle
package com.lasalle.programacio.model;
package com.lasalle.programacio.vista;
package com.lasalle.programacio.controlador;

// Projecte de Google
package com.google.maps.model;
package com.google.maps.api;`}),t.jsx(C,{title:"Exemple Complet"}),t.jsxs(fe,{children:[t.jsx(W,{title:"Estructura del projecte",variant:"blue",children:t.jsx(y,{language:"bash",code:`projecte/
  src/
    utils/
      Matematiques.java
    app/
      Main.java`})}),t.jsx(W,{title:"Compilar i executar",variant:"blue",children:t.jsx(y,{language:"bash",code:`# Compilar
javac -d bin src/utils/Matematiques.java
javac -d bin -cp bin src/app/Main.java

# Executar
java -cp bin app.Main`})})]}),t.jsx(y,{label:"utils/Matematiques.java",showLineNumbers:!0,code:`package utils;

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
}`}),t.jsx(y,{label:"app/Main.java",showLineNumbers:!0,code:`package app;

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
}`}),t.jsx(b,{variant:"success",title:"Resum",children:t.jsxs("p",{children:["Els packages organitzen les classes en carpetes. Declara el package a la primera línia, utilitza ",t.jsx("code",{children:"import"})," per accedir a classes d'altres packages (preferiblement import explícit), i segueix les convencions de noms (tot en minúscules, domini invers en projectes professionals)."]})})]})}function Lw(){return t.jsxs("div",{children:[t.jsx(C,{title:"Exemple Complet: Calculadora Modular"}),t.jsx(b,{variant:"info",title:"Objectiu",children:t.jsxs("p",{children:["Crearem una calculadora modular formada per ",t.jsx("strong",{children:"dues classes"}),": una classe ",t.jsx("code",{children:"Operacions"})," que conté els mètodes de càlcul (sumar, restar, multiplicar, dividir) i una classe ",t.jsx("code",{children:"Calculadora"})," amb el ",t.jsx("code",{children:"main()"}),"que la utilitza. Aplicarem tots els conceptes de modularitat apresos."]})}),t.jsx(C,{title:"Estructura del Projecte"}),t.jsx(y,{label:"Organització de fitxers",language:"bash",code:`calculadora/
  src/
    utils/
      Operacions.java       ← Classe amb els mètodes de càlcul
    app/
      Calculadora.java      ← Classe principal amb el main()`}),t.jsxs(fe,{children:[t.jsxs(W,{title:"Operacions.java",variant:"blue",children:[t.jsxs("p",{children:["La classe ",t.jsx("strong",{children:"auxiliar"})," que conté tota la lògica de càlcul."]}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsx("li",{children:t.jsx("code",{children:"sumar(a, b)"})}),t.jsx("li",{children:t.jsx("code",{children:"restar(a, b)"})}),t.jsx("li",{children:t.jsx("code",{children:"multiplicar(a, b)"})}),t.jsxs("li",{children:[t.jsx("code",{children:"dividir(a, b)"})," amb control de divisió per zero"]})]})]}),t.jsxs(W,{title:"Calculadora.java",variant:"blue",children:[t.jsxs("p",{children:["La classe ",t.jsx("strong",{children:"principal"})," que usa Operacions."]}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["Pas 1: Instancia ",t.jsx("code",{children:"Operacions"})]}),t.jsx("li",{children:"Pas 2: Crida els mètodes"}),t.jsx("li",{children:"Mostra els resultats"})]})]})]}),t.jsx(C,{title:"Classe Operacions"}),t.jsx(y,{label:"utils/Operacions.java",showLineNumbers:!0,code:`package utils;

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
}`}),t.jsx(b,{variant:"warning",title:"Control de divisió per zero",children:t.jsxs("p",{children:["El mètode ",t.jsx("code",{children:"dividir"})," comprova si el divisor és zero abans de fer la divisió. Si és zero, mostra un missatge d'error i retorna 0. Això evita l'error ",t.jsx("code",{children:"ArithmeticException"})," que es produiria en una divisió per zero amb enters, i el resultat ",t.jsx("code",{children:"Infinity"})," amb doubles."]})}),t.jsx(C,{title:"Classe Calculadora (Main)"}),t.jsx(y,{label:"app/Calculadora.java",showLineNumbers:!0,code:`package app;

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
}`}),t.jsx(C,{title:"Sortida del Programa"}),t.jsx(ps,{label:"Resultat esperat a la consola",language:"bash",defaultOpen:!0,code:`=== CALCULADORA ===
20.0 + 5.0 = 25.0
20.0 - 5.0 = 15.0
20.0 * 5.0 = 100.0
20.0 / 5.0 = 4.0

--- Prova divisio per zero ---
Error: No es pot dividir per zero!
Resultat: 0.0`}),t.jsx(C,{title:"Per què és millor que tot al main?"}),t.jsxs(fe,{children:[t.jsx(W,{title:"Tot al main (monolític)",variant:"bad",children:t.jsx(y,{code:`public static void main(String[] args) {
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
}`})}),t.jsx(W,{title:"Modular (classe separada)",variant:"good",children:t.jsx(y,{code:`public static void main(String[] args) {
    double a = 20, b = 5;

    // 1. Instanciar
    Operacions op = new Operacions();

    // 2. Cridar metodes
    System.out.println(op.sumar(a, b));
    System.out.println(op.restar(a, b));
    System.out.println(op.multiplicar(a, b));
    System.out.println(op.dividir(a, b));

    // Clar, net, reutilitzable!
}`})})]}),t.jsx(C,{title:"Conceptes Aplicats"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Modularitat",variant:"blue",children:t.jsx("p",{children:"El codi està dividit en dues classes amb responsabilitats clares i separades."})}),t.jsx(N,{title:"Packages",variant:"yellow",children:t.jsxs("p",{children:["Les classes estan organitzades en packages: ",t.jsx("code",{children:"utils"})," per als càlculs, ",t.jsx("code",{children:"app"})," per al main."]})}),t.jsx(N,{title:"Import",variant:"green",children:t.jsxs("p",{children:["S'utilitza ",t.jsx("code",{children:"import utils.Operacions;"})," per accedir a la classe auxiliar des d'un altre package."]})}),t.jsx(N,{title:"Control d'Errors",variant:"pink",children:t.jsxs("p",{children:["El mètode ",t.jsx("code",{children:"dividir"})," comprova la divisió per zero abans d'operar, evitant errors en temps d'execució."]})})]}),t.jsx(ps,{label:"Versió ampliada: més operacions",code:`package utils;

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
}`}),t.jsx(b,{variant:"success",title:"Resum",children:t.jsxs("p",{children:["Aquest exemple mostra com crear una calculadora modular amb dues classes.",t.jsx("code",{children:" Operacions"})," conté tota la lògica de càlcul amb control d'errors, i ",t.jsx("code",{children:"Calculadora"})," la utilitza seguint els 2 passos: instanciar i cridar mètodes. El codi és net, reutilitzable i fàcil d'ampliar."]})})]})}const Aw=`// String es un OBJECTE, no un tipus primitiu
String salutacio = "Hola, mon!";

// Internament, Java gestiona String com un objecte immutable
// Cada vegada que "modifiquem" un String, es crea un objecte NOU
String original = "Hola";
String modificat = original.toUpperCase(); // Crea un nou objecte "HOLA"
System.out.println(original);   // "Hola" - no ha canviat!
System.out.println(modificat);  // "HOLA" - objecte nou`,kw=`// Forma 1: Literal (RECOMANADA)
// Java reutilitza objectes del "String Pool"
String nom1 = "Anna";
String nom2 = "Anna"; // Reutilitza el mateix objecte del pool

// Forma 2: Amb constructor new
// Crea SEMPRE un objecte nou a memoria (heap)
String nom3 = new String("Anna"); // Objecte diferent!
String nom4 = new String("Anna"); // Un altre objecte diferent!

// Forma 3: A partir d'un array de chars
char[] lletres = {'J', 'a', 'v', 'a'};
String paraula = new String(lletres); // "Java"`,Mw=`String a = "Hola";
String b = "Hola";
String c = new String("Hola");

// == compara REFERENCIES (adreces de memoria), NO contingut!
System.out.println(a == b); // true  (mateix objecte al pool)
System.out.println(a == c); // FALSE! (objectes diferents a memoria)

// Aixo es un ERROR molt comu en Java!
// Encara que a i c contenen "Hola", == diu false
// perque apunten a posicions de memoria diferents`,Nw=`String a = "Hola";
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
System.out.println("Anna".compareTo("Anna"));  // 0 (iguals)`,Pw=`String text = "Programacio";

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
// P r o g r a m a c i o`,Tw=`String frase = "Bon dia, Java!";

// substring(inici) - des de l'index fins al final
System.out.println(frase.substring(9));    // "Java!"

// substring(inici, fi) - des de inici fins a fi (sense incloure fi)
System.out.println(frase.substring(0, 7)); // "Bon dia"
System.out.println(frase.substring(4, 7)); // "dia"

// Exemple practic: extreure extensio d'un fitxer
String arxiu = "document.pdf";
String extensio = arxiu.substring(arxiu.lastIndexOf(".") + 1);
System.out.println(extensio); // "pdf"`,_w=`String text = "Java es genial, Java es potent";

// indexOf(str) - primera aparicio
System.out.println(text.indexOf("Java"));    // 0
System.out.println(text.indexOf("es"));      // 5
System.out.println(text.indexOf("Python"));  // -1 (no trobat)

// indexOf(str, fromIndex) - cerca des d'una posicio
System.out.println(text.indexOf("Java", 1)); // 16

// lastIndexOf(str) - ultima aparicio
System.out.println(text.lastIndexOf("Java")); // 16
System.out.println(text.lastIndexOf("es"));   // 21`,Ow=`String url = "https://www.exemple.cat/pagina";

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
System.out.println("Email valid: " + valid); // true`,Dw=`// toUpperCase() - convertir a majuscules
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
System.out.println(net); // "barcelona"`,qw=`String frase = "Java es dificil, Java es avorrit";

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
System.out.println(net); // "12345678A"`,Iw=`// split(regex) - divideix el String en un array
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
System.out.println("Vocals: " + vocals); // 5`,Fw=`// concat(str) - concatena dos Strings
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
System.out.println(s1.length()); // 2 (es un String "42", no un numero)`,zw=`// Opcio 1: Operador + (senzill, per poques concatenacions)
String nom = "Anna";
int edat = 20;
String missatge = "Hola, " + nom + "! Tens " + edat + " anys.";

// Opcio 2: concat() (nomes Strings, no converteix altres tipus)
String salut = "Hola".concat(", ").concat(nom);

// Opcio 3: StringBuilder (EFICIENT per moltes concatenacions)
// Quan concatenem amb + dins d'un bucle, Java crea molts objectes temporals
// StringBuilder evita aquest problema`,Bw=`// StringBuilder: MOLT mes eficient en bucles
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
System.out.println(sb2.length()); // 4`,Uw=`// MAL: Concatenacio amb + en un bucle (crea molts objectes!)
String resultat = "";
for (int i = 0; i < 1000; i++) {
    resultat += i + ", "; // Cada iteracio crea un objecte String NOU
}

// BE: StringBuilder en un bucle (eficient!)
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i).append(", ");
}
String resultat2 = sb.toString(); // Nomes crea un String al final`,$w=`public class ExempleStrings {
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
}`;function Hw(){return t.jsxs("div",{children:[t.jsx(C,{title:"La Classe String"}),t.jsxs(b,{variant:"info",title:"Què és String?",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"String"})," és una ",t.jsx("strong",{children:"classe"})," de Java, no un tipus primitiu. Representa una cadena de caràcters i és un dels objectes més utilitzats en programació."]}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"És un objecte:"}),' tot i que es pot crear amb literals ("text"), internament és un objecte de la classe ',t.jsx("code",{children:"java.lang.String"}),"."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"És immutable:"}),' un cop creat, el seu contingut NO es pot modificar. Qualsevol operació que "modifiqui" un String en realitat crea un objecte nou.']}),t.jsxs("li",{children:[t.jsx("strong",{children:"String Pool:"}),' Java manté un "pool" de Strings literals per reutilitzar objectes i estalviar memòria.']})]})]}),t.jsx(y,{code:Aw,label:"String és un objecte immutable",showLineNumbers:!0}),t.jsx(C,{title:"Crear Strings"}),t.jsx(y,{code:kw,label:"Maneres de crear Strings",showLineNumbers:!0}),t.jsxs(fe,{children:[t.jsxs(W,{title:"Literal (recomanat)",variant:"good",children:[t.jsx("p",{children:t.jsx("code",{children:'String s = "Hola";'})}),t.jsxs("ul",{children:[t.jsx("li",{children:"Més eficient (reutilitza objectes del pool)"}),t.jsx("li",{children:"Forma habitual i recomanada"}),t.jsx("li",{children:"Java optimitza automàticament"})]})]}),t.jsxs(W,{title:"Constructor new",variant:"bad",children:[t.jsx("p",{children:t.jsx("code",{children:'String s = new String("Hola");'})}),t.jsxs("ul",{children:[t.jsx("li",{children:"Crea sempre un objecte nou"}),t.jsx("li",{children:"No aprofita el String Pool"}),t.jsx("li",{children:"Gasta més memòria innecessàriament"})]})]})]}),t.jsx(C,{title:"Comparar Strings"}),t.jsxs(b,{variant:"error",title:"ERROR COMÚ: Usar == per comparar Strings",children:[t.jsxs("p",{children:["L'operador ",t.jsx("code",{children:"=="})," compara ",t.jsx("strong",{children:"referències"})," (adreces de memòria), NO el contingut dels Strings. Dos Strings poden contenir el mateix text però estar en posicions de memòria diferents, i ",t.jsx("code",{children:"=="})," diria ",t.jsx("code",{children:"false"}),"."]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Sempre"})," utilitza ",t.jsx("code",{children:".equals()"})," o ",t.jsx("code",{children:".equalsIgnoreCase()"})," per comparar el contingut de Strings!"]})]}),t.jsx(y,{code:Mw,label:"Per què == NO funciona per comparar contingut",showLineNumbers:!0}),t.jsx(y,{code:Nw,label:"Comparació correcta amb .equals() i .equalsIgnoreCase()",showLineNumbers:!0}),t.jsx(re,{headers:["Mètode","Compara","Retorna","Exemple"],rows:[{cells:["==","Referències (memòria)","boolean",'"Hola" == "Hola" // depèn!']},{cells:[".equals()","Contingut exacte","boolean",'"Hola".equals("Hola") // true']},{cells:[".equalsIgnoreCase()","Contingut (ignora cas)","boolean",'"Hola".equalsIgnoreCase("hola") // true']},{cells:[".compareTo()","Ordre lexicogràfic","int (neg/0/pos)",'"Anna".compareTo("Marc") // negatiu']}]}),t.jsx(C,{title:"Mètodes de la Classe String"}),t.jsx(re,{headers:["Mètode","Descripció","Retorna","Exemple"],rows:[{group:"Longitud i Accés"},{cells:["length()","Nombre de caràcters","int",'"Hola".length() // 4']},{cells:["charAt(i)","Caràcter a la posició i","char",`"Hola".charAt(0) // 'H'`]},{cells:["isEmpty()","Comprova si està buit","boolean",'"".isEmpty() // true']},{group:"Cerca"},{cells:["indexOf(str)","Posició de la primera aparició","int (-1 si no trobat)",'"Hola".indexOf("la") // 2']},{cells:["lastIndexOf(str)","Posició de la última aparició","int (-1 si no trobat)",'"abab".lastIndexOf("ab") // 2']},{cells:["contains(str)","Conté el substring?","boolean",'"Hola".contains("ol") // true']},{cells:["startsWith(str)","Comença amb...?","boolean",'"Hola".startsWith("Ho") // true']},{cells:["endsWith(str)","Acaba amb...?","boolean",'"Hola".endsWith("la") // true']},{group:"Extracció"},{cells:["substring(inici)","Des de inici fins al final","String",'"Hola".substring(2) // "la"']},{cells:["substring(inici, fi)","Des de inici fins a fi (exclusiu)","String",'"Hola".substring(1,3) // "ol"']},{group:"Transformació"},{cells:["toUpperCase()","Converteix a majúscules","String",'"hola".toUpperCase() // "HOLA"']},{cells:["toLowerCase()","Converteix a minúscules","String",'"HOLA".toLowerCase() // "hola"']},{cells:["trim()","Elimina espais extrems","String",'"  hola  ".trim() // "hola"']},{cells:["replace(vell, nou)","Substitueix aparicions","String",'"hola".replace("o","0") // "h0la"']},{group:"Divisió i Conversió"},{cells:["split(regex)","Divideix en array","String[]",'"a,b,c".split(",") // ["a","b","c"]']},{cells:["toCharArray()","Converteix a array de chars","char[]",'"Hola".toCharArray()']},{cells:["concat(str)","Concatena amb un altre String","String",'"Hola".concat(" Mon") // "Hola Mon"']},{cells:["String.valueOf(x)","Converteix qualsevol valor a String","String",'String.valueOf(42) // "42"']}]}),t.jsx(C,{title:"Exemples Detallats"}),t.jsx(b,{variant:"explanation",title:"length() i charAt()",children:t.jsxs("p",{children:[t.jsx("code",{children:"length()"})," retorna el nombre total de caràcters. ",t.jsx("code",{children:"charAt(index)"})," retorna el caràcter a una posició concreta (començant des de 0)."]})}),t.jsx(y,{code:Pw,label:"length() i charAt() - Longitud i accés per posició",showLineNumbers:!0}),t.jsx(y,{code:Tw,label:"substring() - Extreure parts d'un String",showLineNumbers:!0}),t.jsx(y,{code:_w,label:"indexOf() i lastIndexOf() - Cercar dins d'un String",showLineNumbers:!0}),t.jsx(y,{code:Ow,label:"contains(), startsWith(), endsWith() - Comprovacions",showLineNumbers:!0}),t.jsx(y,{code:Dw,label:"toUpperCase(), toLowerCase(), trim(), isEmpty()",showLineNumbers:!0}),t.jsx(y,{code:qw,label:"replace() - Substituir text",showLineNumbers:!0}),t.jsx(y,{code:Iw,label:"split() i toCharArray() - Dividir un String",showLineNumbers:!0}),t.jsx(y,{code:Fw,label:"concat() i String.valueOf() - Concatenar i convertir",showLineNumbers:!0}),t.jsx(C,{title:"Concatenació de Strings"}),t.jsx(b,{variant:"info",title:"Tres maneres de concatenar",children:t.jsxs("p",{children:["Hi ha tres formes principals de concatenar Strings en Java. L'operador ",t.jsx("code",{children:"+"})," és el més comú, però ",t.jsx("strong",{children:"StringBuilder"})," és molt més eficient quan fas moltes concatenacions (especialment dins de bucles)."]})}),t.jsx(y,{code:zw,label:"Les tres opcions de concatenació",showLineNumbers:!0}),t.jsx(C,{title:"StringBuilder"}),t.jsx(b,{variant:"warning",title:"Quan usar StringBuilder?",children:t.jsxs("p",{children:["Utilitza ",t.jsx("strong",{children:"StringBuilder"})," sempre que necessitis concatenar Strings dins d'un ",t.jsx("strong",{children:"bucle"})," o quan facis moltes operacions de concatenació. Com que String és immutable, cada ",t.jsx("code",{children:"+"})," crea un objecte nou, cosa que és molt ineficient en bucles grans."]})}),t.jsx(y,{code:Bw,label:"StringBuilder - Mètodes principals",showLineNumbers:!0}),t.jsxs(fe,{children:[t.jsx(W,{title:"Concatenació amb + en bucle",variant:"bad",children:t.jsx("p",{children:"Cada iteració crea un objecte String nou. Molt lent per bucles grans."})}),t.jsx(W,{title:"StringBuilder en bucle",variant:"good",children:t.jsx("p",{children:"Modifica el mateix objecte internament. Molt més ràpid i eficient."})})]}),t.jsx(y,{code:Uw,label:"Comparació: + en bucle vs StringBuilder",showLineNumbers:!0}),t.jsx(C,{title:"Exemple Complet"}),t.jsx(b,{variant:"success",title:"Exemple pràctic: Analitzar una frase",children:t.jsx("p",{children:"Aquest exemple mostra com combinar diversos mètodes de String per analitzar i transformar una frase."})}),t.jsx(y,{code:$w,label:"Exemple complet: Analitzar i transformar text",showLineNumbers:!0}),t.jsx(C,{title:"Resum"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Immutabilitat",variant:"blue",children:t.jsx("p",{children:"Els Strings són immutables. Qualsevol modificació crea un objecte nou."})}),t.jsx(N,{title:"Comparació",variant:"blue",children:t.jsxs("p",{children:["Usa ",t.jsx("code",{children:".equals()"})," per comparar contingut. Mai ",t.jsx("code",{children:"=="})," per Strings."]})}),t.jsx(N,{title:"StringBuilder",variant:"blue",children:t.jsx("p",{children:"Utilitza StringBuilder per concatenacions en bucles. És molt més eficient."})}),t.jsx(N,{title:"Mètodes Útils",variant:"blue",children:t.jsx("p",{children:"String té més de 15 mètodes essencials: length, charAt, substring, indexOf, contains, replace, split, trim..."})})]})]})}const Vw=`// Math es una classe utilitaria de java.lang
// TOTS els seus metodes son STATIC - no cal crear cap objecte
// No es pot instanciar: Math m = new Math(); // ERROR!

// S'utilitza directament amb el nom de la classe:
double resultat = Math.sqrt(25);      // 5.0
int maxim = Math.max(10, 20);         // 20
double aleatori = Math.random();       // 0.0 a 0.999...`,Gw=`// Math.PI - El nombre Pi (3.141592653589793)
double perimetreCircle = 2 * Math.PI * 5; // Perimetre d'un cercle de radi 5
System.out.println("Perimetre: " + perimetreCircle); // 31.41592653589793

double areaCircle = Math.PI * Math.pow(5, 2); // Area d'un cercle de radi 5
System.out.println("Area: " + areaCircle); // 78.53981633974483

// Math.E - El nombre d'Euler (2.718281828459045)
double creixement = Math.E;
System.out.println("Nombre d'Euler: " + creixement); // 2.718281828459045`,Ww=`// Math.abs(x) - Valor absolut (sempre positiu)
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
System.out.println("Maxim de tres: " + maxim); // 42`,Qw=`// Math.pow(base, exponent) - Potencia
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
System.out.println("Hipotenusa: " + hipotenusa); // 5.0`,Jw=`// Math.ceil(x) - Arrodoneix cap AMUNT (sostre)
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
System.out.println(tresDecimals); // 3.142`,Kw=`// Math.random() - Retorna un double aleatori entre 0.0 (inclusiu) i 1.0 (exclusiu)
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
}`,Yw=`// Math.log(x) - Logaritme natural (base e)
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
System.out.println("El numero " + numero + " te " + digits + " digits"); // 6`,Xw=`// IMPORTANT: Les funcions trigonometriques treballen amb RADIANS, no graus!
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
System.out.println("Alcada aproximada: " + Math.round(alcada) + " metres"); // 87 metres`,Zw=`public class ExempleMath {
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
}`;function eE(){return t.jsxs("div",{children:[t.jsx(C,{title:"La Classe Math"}),t.jsxs(b,{variant:"info",title:"Què és la classe Math?",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Math"})," és una ",t.jsx("strong",{children:"classe utilitària"})," de Java (",t.jsx("code",{children:"java.lang.Math"}),") que proporciona mètodes i constants per realitzar operacions matemàtiques."]}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Tots els mètodes són static:"})," es criden directament amb ",t.jsx("code",{children:"Math.mètode()"}),", sense crear cap objecte."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"No s'instancia:"})," no es pot fer ",t.jsx("code",{children:"new Math()"}),". La classe té el constructor privat."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"No cal import:"})," com que pertany a ",t.jsx("code",{children:"java.lang"}),", està disponible automàticament."]})]})]}),t.jsx(y,{code:Vw,label:"Utilitzar la classe Math",showLineNumbers:!0}),t.jsx(C,{title:"Constants"}),t.jsx(re,{headers:["Constant","Valor","Descripció"],rows:[{cells:["Math.PI","3.141592653589793","El nombre Pi - relació entre circumferència i diàmetre"]},{cells:["Math.E","2.718281828459045","El nombre d'Euler - base del logaritme natural"]}]}),t.jsx(y,{code:Gw,label:"Constants Math.PI i Math.E",showLineNumbers:!0}),t.jsx(C,{title:"Mètodes de la Classe Math"}),t.jsx(re,{headers:["Mètode","Descripció","Retorna","Exemple"],rows:[{group:"Valor Absolut i Comparació"},{cells:["Math.abs(x)","Valor absolut","int/double","Math.abs(-5) // 5"]},{cells:["Math.max(a, b)","El major dels dos valors","int/double","Math.max(3, 7) // 7"]},{cells:["Math.min(a, b)","El menor dels dos valors","int/double","Math.min(3, 7) // 3"]},{group:"Potències i Arrels"},{cells:["Math.pow(base, exp)","Potència (base^exp)","double","Math.pow(2, 3) // 8.0"]},{cells:["Math.sqrt(x)","Arrel quadrada","double","Math.sqrt(25) // 5.0"]},{cells:["Math.cbrt(x)","Arrel cúbica","double","Math.cbrt(27) // 3.0"]},{group:"Arrodoniment"},{cells:["Math.ceil(x)","Arrodoneix cap amunt (sostre)","double","Math.ceil(3.1) // 4.0"]},{cells:["Math.floor(x)","Arrodoneix cap avall (terra)","double","Math.floor(3.9) // 3.0"]},{cells:["Math.round(x)","Arrodoneix al més proper","long","Math.round(3.5) // 4"]},{group:"Aleatori"},{cells:["Math.random()","Nombre aleatori [0.0, 1.0)","double","Math.random() // 0.7423..."]},{group:"Logaritmes"},{cells:["Math.log(x)","Logaritme natural (base e)","double","Math.log(Math.E) // 1.0"]},{cells:["Math.log10(x)","Logaritme en base 10","double","Math.log10(100) // 2.0"]},{group:"Trigonometria (radians)"},{cells:["Math.sin(x)","Sinus","double","Math.sin(Math.PI/2) // 1.0"]},{cells:["Math.cos(x)","Cosinus","double","Math.cos(0) // 1.0"]},{cells:["Math.tan(x)","Tangent","double","Math.tan(Math.PI/4) // ~1.0"]},{cells:["Math.toRadians(x)","Graus a radians","double","Math.toRadians(180) // PI"]}]}),t.jsx(C,{title:"Exemples Detallats"}),t.jsx(b,{variant:"explanation",title:"abs(), max(), min()",children:t.jsxs("p",{children:[t.jsx("code",{children:"Math.abs()"})," retorna el valor absolut (sempre positiu).",t.jsx("code",{children:" Math.max()"})," i ",t.jsx("code",{children:"Math.min()"})," retornen el major i menor de dos valors. Es poden anidar per comparar més de dos valors."]})}),t.jsx(y,{code:Ww,label:"abs(), max(), min() - Valor absolut i comparacions",showLineNumbers:!0}),t.jsx(y,{code:Qw,label:"pow(), sqrt(), cbrt() - Potències i arrels",showLineNumbers:!0}),t.jsx(b,{variant:"warning",title:"Math.round() vs Math.ceil() vs Math.floor()",children:t.jsxs("p",{children:["No confonguis aquests tres mètodes! ",t.jsx("code",{children:"ceil()"})," sempre arrodoneix cap amunt,",t.jsx("code",{children:" floor()"})," sempre cap avall, i ",t.jsx("code",{children:"round()"})," al més proper. Amb nombres negatius el comportament pot ser confús: ",t.jsx("code",{children:"Math.floor(-2.3)"})," dona ",t.jsx("code",{children:"-3.0"}),", no ",t.jsx("code",{children:"-2.0"}),"!"]})}),t.jsx(y,{code:Jw,label:"ceil(), floor(), round() - Arrodoniment",showLineNumbers:!0}),t.jsx(y,{code:Kw,label:"Math.random() - Nombres aleatoris",showLineNumbers:!0}),t.jsxs(b,{variant:"success",title:"Fórmula per enters aleatoris en un rang",children:[t.jsxs("p",{children:["La fórmula per obtenir un enter aleatori entre ",t.jsx("code",{children:"min"})," i ",t.jsx("code",{children:"max"})," (ambdós inclusius) és:"]}),t.jsx("p",{children:t.jsx("code",{children:"int aleatori = (int)(Math.random() * (max - min + 1)) + min;"})})]}),t.jsx(y,{code:Yw,label:"log(), log10() - Logaritmes",showLineNumbers:!0}),t.jsx(b,{variant:"warning",title:"Trigonometria: Radians, no Graus!",children:t.jsxs("p",{children:["Les funcions ",t.jsx("code",{children:"Math.sin()"}),", ",t.jsx("code",{children:"Math.cos()"})," i ",t.jsx("code",{children:"Math.tan()"})," esperen l'angle en ",t.jsx("strong",{children:"radians"}),", no en graus. Utilitza ",t.jsx("code",{children:"Math.toRadians(graus)"})," per convertir graus a radians abans de passar-los a aquestes funcions."]})}),t.jsx(y,{code:Xw,label:"sin(), cos(), tan(), toRadians() - Trigonometria",showLineNumbers:!0}),t.jsx(C,{title:"Exemple Complet"}),t.jsx(b,{variant:"success",title:"Exemple pràctic: Càlculs amb Math",children:t.jsx("p",{children:"Un exemple que combina diversos mètodes de Math per fer càlculs de cercles, distàncies, simulació de daus i ajust de notes."})}),t.jsx(y,{code:Zw,label:"Exemple complet amb múltiples mètodes de Math",showLineNumbers:!0}),t.jsx(C,{title:"Patrons Pràctics"}),t.jsx(re,{headers:["Patró","Codi","Resultat"],rows:[{cells:["Enter aleatori [1, 6]","(int)(Math.random() * 6) + 1","Dau: 1 a 6"]},{cells:["Enter aleatori [min, max]","(int)(Math.random() * (max-min+1)) + min","Rang personalitzat"]},{cells:["Arrodonir a 2 decimals","Math.round(x * 100.0) / 100.0","3.14159 -> 3.14"]},{cells:["Arrodonir a N decimals","Math.round(x * 10^N) / 10^N","Precisió variable"]},{cells:["Limitar un valor [min, max]","Math.max(min, Math.min(max, valor))","Clamp"]},{cells:["Distància entre 2 punts","Math.sqrt(pow(x2-x1,2) + pow(y2-y1,2))","Pitàgores"]},{cells:["Àrea del cercle","Math.PI * Math.pow(radi, 2)","Geometria"]}]}),t.jsx(C,{title:"Resum"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Classe Utilitària",variant:"blue",children:t.jsxs("p",{children:["Math és una classe static. No cal instanciar-la. Crida directament ",t.jsx("code",{children:"Math.mètode()"}),"."]})}),t.jsx(N,{title:"Arrodoniment",variant:"blue",children:t.jsxs("p",{children:[t.jsx("code",{children:"ceil"})," (amunt), ",t.jsx("code",{children:"floor"})," (avall), ",t.jsx("code",{children:"round"})," (més proper). Per N decimals: ",t.jsx("code",{children:"round(x * 10^N) / 10^N"}),"."]})}),t.jsx(N,{title:"Aleatoris",variant:"blue",children:t.jsxs("p",{children:[t.jsx("code",{children:"Math.random()"})," retorna [0.0, 1.0). Usa ",t.jsx("code",{children:"(int)(Math.random() * rang) + min"})," per enters."]})}),t.jsx(N,{title:"Trigonometria",variant:"blue",children:t.jsxs("p",{children:["Funcions trigonomètriques usen ",t.jsx("strong",{children:"radians"}),". Converteix amb ",t.jsx("code",{children:"Math.toRadians(graus)"}),"."]})})]})]})}const tE=`// Math.random() - Metode static de la classe Math
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
int valor = (int)(Math.random() * (max - min + 1)) + min; // 10 a 50`,rE=`// java.util.Random - Una classe completa per generar aleatoris
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
int valor = random.nextInt(max - min + 1) + min; // 10 a 50`,nE=`import java.util.Random;

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
System.out.println("Long aleatori: " + numGran);`,aE=`import java.util.Random;

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
System.out.println(rng3.nextInt(100)); // Diferent cada vegada`,iE=`// === PATRONS AMB Math.random() ===

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
System.out.println("Event (30%): " + event);`,sE=`// === PATRONS AMB java.util.Random ===
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
}`,lE=`// OBJECTIU: Enter aleatori entre 1 i 100

// Amb Math.random()
int num1 = (int)(Math.random() * 100) + 1;

// Amb Random
Random rng = new Random();
int num2 = rng.nextInt(100) + 1;

// Ambdos fan el MATEIX, pero Random es mes net i llegible`,oE=`// OBJECTIU: Element aleatori d'un array

String[] noms = {"Anna", "Marc", "Laia", "Pere", "Sofia"};

// Amb Math.random()
String nom1 = noms[(int)(Math.random() * noms.length)];

// Amb Random
Random rng = new Random();
String nom2 = noms[rng.nextInt(noms.length)];`,cE=`// OBJECTIU: Valor boolean aleatori

// Amb Math.random()
boolean b1 = Math.random() < 0.5;

// Amb Random - MOLT MES DIRECTE
Random rng = new Random();
boolean b2 = rng.nextBoolean();`,uE=`import java.util.Random;

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
}`;function dE(){return t.jsxs("div",{children:[t.jsx(C,{title:"Math.random() vs java.util.Random"}),t.jsx(b,{variant:"info",title:"Dues maneres de generar nombres aleatoris",children:t.jsxs("p",{children:["Java ofereix dues formes principals per generar nombres aleatoris: el mètode static ",t.jsx("code",{children:"Math.random()"})," i la classe ",t.jsx("code",{children:"java.util.Random"}),". Ambdues són vàlides, però tenen diferències importants en flexibilitat i ús."]})}),t.jsx(C,{title:"Math.random()"}),t.jsx(b,{variant:"explanation",title:"Com funciona Math.random()",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Mètode static"})," de la classe ",t.jsx("code",{children:"Math"})," - es crida directament sense crear cap objecte."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"No cal import"})," - ",t.jsx("code",{children:"Math"})," pertany a ",t.jsx("code",{children:"java.lang"})," i està sempre disponible."]}),t.jsxs("li",{children:[t.jsxs("strong",{children:["Retorna un ",t.jsx("code",{children:"double"})]})," entre ",t.jsx("code",{children:"0.0"})," (inclusiu) i ",t.jsx("code",{children:"1.0"})," (exclusiu)."]}),t.jsx("li",{children:"Per obtenir enters o rangs personalitzats, cal fer operacions matemàtiques addicionals."})]})}),t.jsx(y,{code:tE,label:"Math.random() - Ús bàsic i patrons",showLineNumbers:!0}),t.jsx(C,{title:"La Classe java.util.Random"}),t.jsx(b,{variant:"explanation",title:"Com funciona java.util.Random",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"És una classe"})," - cal ",t.jsx("code",{children:"import java.util.Random;"})," i crear un objecte amb ",t.jsx("code",{children:"new Random()"}),"."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Múltiples mètodes"})," - pot generar ",t.jsx("code",{children:"int"}),", ",t.jsx("code",{children:"double"}),", ",t.jsx("code",{children:"boolean"}),", ",t.jsx("code",{children:"long"})," directament."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"nextInt(bound)"})," - genera un enter entre 0 (inclusiu) i bound (exclusiu), més còmode que Math.random()."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Seedable"})," - es pot inicialitzar amb una seed per obtenir seqüències reproduïbles."]})]})}),t.jsx(y,{code:rE,label:"java.util.Random - Creació i ús bàsic",showLineNumbers:!0}),t.jsx(re,{headers:["Mètode","Retorna","Rang","Exemple"],rows:[{cells:["nextInt()","int","Qualsevol int","rng.nextInt() // -1238547921"]},{cells:["nextInt(bound)","int","0 a bound-1","rng.nextInt(6) // 0 a 5"]},{cells:["nextDouble()","double","0.0 a 0.999...","rng.nextDouble() // 0.7423..."]},{cells:["nextBoolean()","boolean","true o false","rng.nextBoolean() // true"]},{cells:["nextLong()","long","Qualsevol long","rng.nextLong()"]}]}),t.jsx(y,{code:nE,label:"Tots els mètodes de Random",showLineNumbers:!0}),t.jsx(C,{title:"Seed: Seqüències Reproduïbles"}),t.jsx(b,{variant:"info",title:"Què és una seed?",children:t.jsxs("p",{children:["Una ",t.jsx("strong",{children:"seed"})," és un valor inicial que determina la seqüència de nombres aleatoris. Si dos objectes ",t.jsx("code",{children:"Random"})," tenen la mateixa seed, generaran",t.jsx("strong",{children:" exactament la mateixa seqüència"}),". Això és molt útil per fer proves i depurar codi, ja que pots reproduir els mateixos resultats."]})}),t.jsx(y,{code:aE,label:"Seed per seqüències reproduïbles",showLineNumbers:!0}),t.jsx(C,{title:"Comparació Directa"}),t.jsxs(fe,{children:[t.jsx(W,{title:"Math.random()",variant:"blue",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Tipus:"})," Mètode static"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Import:"})," No cal"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Instanciar:"})," No cal"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Retorna:"})," Només double [0.0, 1.0)"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Enters:"})," Cal cast manual ",t.jsx("code",{children:"(int)"})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Boolean:"})," Cal ",t.jsx("code",{children:"< 0.5"})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Seed:"})," No suportat"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Ideal per:"})," Ús ràpid i senzill"]})]})}),t.jsx(W,{title:"java.util.Random",variant:"blue",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Tipus:"})," Classe completa"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Import:"})," ",t.jsx("code",{children:"import java.util.Random"})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Instanciar:"})," ",t.jsx("code",{children:"new Random()"})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Retorna:"})," int, double, boolean, long"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Enters:"})," Directe amb ",t.jsx("code",{children:"nextInt(bound)"})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Boolean:"})," Directe amb ",t.jsx("code",{children:"nextBoolean()"})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Seed:"})," Suportat (reproduïble)"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Ideal per:"})," Ús flexible i avançat"]})]})})]}),t.jsx(C,{title:"Quan Usar Cada Un?"}),t.jsxs(fe,{children:[t.jsx(W,{title:"Usa Math.random() quan...",variant:"good",children:t.jsxs("ul",{children:[t.jsx("li",{children:"Necessites un random ràpid i senzill"}),t.jsx("li",{children:"No vols importar cap classe addicional"}),t.jsx("li",{children:"Només necessites un double aleatori"}),t.jsx("li",{children:"És un script petit o un exercici bàsic"}),t.jsx("li",{children:"No necessites reproduïbilitat"})]})}),t.jsx(W,{title:"Usa Random quan...",variant:"good",children:t.jsxs("ul",{children:[t.jsx("li",{children:"Necessites generar enters directament"}),t.jsx("li",{children:"Necessites booleans aleatoris"}),t.jsx("li",{children:"Vols seqüències reproduïbles (seed)"}),t.jsx("li",{children:"Fas servir aleatoris en molts llocs del codi"}),t.jsx("li",{children:"El programa és més complex"})]})})]}),t.jsx(C,{title:"Exemples Comparatius"}),t.jsx(b,{variant:"explanation",title:"Mateixa tasca, dues solucions",children:t.jsxs("p",{children:["A continuació comparem com resoldre les mateixes tasques comunes amb ",t.jsx("code",{children:"Math.random()"})," i amb ",t.jsx("code",{children:"java.util.Random"}),"."]})}),t.jsx(y,{code:lE,label:"Enter aleatori en un rang",showLineNumbers:!0}),t.jsx(y,{code:oE,label:"Element aleatori d'un array",showLineNumbers:!0}),t.jsx(y,{code:cE,label:"Boolean aleatori",showLineNumbers:!0}),t.jsx(C,{title:"Patrons Comuns"}),t.jsx(y,{code:iE,label:"Patrons amb Math.random()",showLineNumbers:!0}),t.jsx(y,{code:sE,label:"Patrons amb java.util.Random",showLineNumbers:!0}),t.jsxs(b,{variant:"success",title:"Recomanació",children:[t.jsxs("p",{children:["Per a la majoria de programes, ",t.jsx("strong",{children:"java.util.Random"})," és la millor opció. És més llegible, més flexible, i ofereix mètodes directes per generar enters i booleans sense haver de fer operacions addicionals. A més, la possibilitat d'usar seeds la fa ideal per proves i depuració."]}),t.jsxs("p",{children:[t.jsx("code",{children:"Math.random()"})," és perfecte quan necessites un nombre aleatori ràpid en un context senzill i no vols importar cap classe."]})]}),t.jsx(C,{title:"Exemple Complet"}),t.jsx(b,{variant:"info",title:"Exemple pràctic amb java.util.Random",children:t.jsx("p",{children:"Un exemple complet que mostra diversos usos de nombres aleatoris: un joc, simulació de moneda, barreja d'array (shuffle) i generació de contrasenyes."})}),t.jsx(y,{code:uE,label:"Exemple complet: Joc, simulació, shuffle i contrasenyes",showLineNumbers:!0}),t.jsx(C,{title:"Resum"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Math.random()",variant:"blue",children:t.jsxs("p",{children:["Mètode static. Retorna double [0.0, 1.0). Ràpid i sense imports. Per enters: ",t.jsx("code",{children:"(int)(Math.random() * rang) + min"}),"."]})}),t.jsx(N,{title:"java.util.Random",variant:"blue",children:t.jsxs("p",{children:["Classe amb múltiples mètodes: ",t.jsx("code",{children:"nextInt()"}),", ",t.jsx("code",{children:"nextDouble()"}),", ",t.jsx("code",{children:"nextBoolean()"}),". Més flexible i llegible."]})}),t.jsx(N,{title:"Seed",variant:"blue",children:t.jsxs("p",{children:["Només ",t.jsx("code",{children:"Random"})," suporta seeds per seqüències reproduïbles. Útil per proves: ",t.jsx("code",{children:"new Random(42)"}),"."]})}),t.jsx(N,{title:"Recomanació",variant:"blue",children:t.jsxs("p",{children:["Prefereix ",t.jsx("code",{children:"java.util.Random"})," per projectes. Usa ",t.jsx("code",{children:"Math.random()"})," per coses ràpides i senzilles."]})})]})]})}function pE(){return t.jsxs("div",{children:[t.jsx(C,{title:"For-each: sintaxi simplificada per recórrer col·leccions"}),t.jsxs(b,{variant:"info",children:[t.jsxs("p",{children:["El bucle ",t.jsx("strong",{children:"for tradicional"})," és l'estàndard i el més utilitzat a Java, especialment per la seva similitud amb C, C++ i C#. És la base que has de dominar primer."]}),t.jsxs("p",{style:{marginTop:"8px"},children:["El ",t.jsx("strong",{children:"for-each"})," (també anomenat ",t.jsx("em",{children:"enhanced for"}),") és una sintaxi simplificada que Java ofereix per recórrer arrays i col·leccions quan ",t.jsx("strong",{children:"no necessites l'índex"}),"."]})]}),t.jsx(b,{variant:"warning",title:"Prioritat: for tradicional",children:t.jsx("p",{children:"A nivell de DAM, el for tradicional és la prioritat. El for-each és un complement útil que simplifica el codi en certs casos, però no substitueix el for clàssic."})}),t.jsx(C,{title:"Sintaxi del for-each"}),t.jsx(y,{label:"Estructura general",code:`for (Tipus element : coleccio) {
    // codi que utilitza 'element'
}`}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["Es llegeix com: ",t.jsx("strong",{children:'"per cada element de la col·lecció, fes..."'}),". El compilador s'encarrega internament de gestionar l'índex i l'accés als elements."]})}),t.jsx(C,{title:"Comparació: for tradicional vs for-each"}),t.jsxs(fe,{children:[t.jsxs(W,{title:"For tradicional (amb índex)",variant:"blue",children:[t.jsxs("p",{children:["Tens control total amb l'índex ",t.jsx("strong",{children:"i"}),"."]}),t.jsx(y,{code:`int[] nums = {10, 20, 30, 40, 50};

for (int i = 0; i < nums.length; i++) {
    System.out.println("Index " + i + ": " + nums[i]);
}`})]}),t.jsxs(W,{title:"For-each (sense índex)",variant:"good",children:[t.jsxs("p",{children:["Més net, però ",t.jsx("strong",{children:"no tens accés a l'índex"}),"."]}),t.jsx(y,{code:`int[] nums = {10, 20, 30, 40, 50};

for (int num : nums) {
    System.out.println(num);
}`})]})]}),t.jsx(C,{title:"Quan utilitzar cadascun?"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Utilitza for tradicional quan...",variant:"blue",children:t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsx("li",{children:"Necessites l'índex (saber en quina posició estàs)"}),t.jsx("li",{children:"Vols modificar els elements de l'array"}),t.jsx("li",{children:"Vols recórrer només una part de l'array"}),t.jsx("li",{children:"Necessites recórrer al revés (de final a inici)"}),t.jsx("li",{children:"Necessites comparar elements consecutius"})]})}),t.jsx(N,{title:"Utilitza for-each quan...",variant:"green",children:t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsx("li",{children:"Només necessites llegir tots els elements"}),t.jsx("li",{children:"No necessites saber la posició"}),t.jsx("li",{children:"Vols un codi més curt i llegible"}),t.jsx("li",{children:"Treballes amb col·leccions (ArrayList, etc.)"})]})})]}),t.jsx(C,{title:"Exemples amb diferents tipus"}),t.jsx(y,{label:"Array d'enters (int)",showLineNumbers:!0,code:`int[] notes = {7, 9, 5, 8, 6};
int suma = 0;

for (int nota : notes) {
    suma += nota;
}

double mitjana = (double) suma / notes.length;
System.out.println("Mitjana: " + mitjana);`}),t.jsx(y,{label:"Array de Strings",showLineNumbers:!0,code:`String[] noms = {"Anna", "Marc", "Laia", "Pol"};

for (String nom : noms) {
    System.out.println("Hola, " + nom + "!");
}
// Hola, Anna!
// Hola, Marc!
// Hola, Laia!
// Hola, Pol!`}),t.jsx(y,{label:"Array d'objectes",showLineNumbers:!0,code:`// Suposem que tenim una classe Alumne amb getNom() i getNota()
Alumne[] alumnes = {
    new Alumne("Anna", 8.5),
    new Alumne("Marc", 6.0),
    new Alumne("Laia", 9.2)
};

for (Alumne a : alumnes) {
    System.out.println(a.getNom() + " -> " + a.getNota());
}`}),t.jsx(C,{title:"Limitacions del for-each"}),t.jsx(b,{variant:"warning",title:"El for-each NO et dona l'índex",children:t.jsxs("p",{children:["Dins del for-each, ",t.jsx("strong",{children:"no tens cap variable d'índex"}),". Si necessites saber en quina posició estàs, has d'usar el for tradicional."]})}),t.jsx(b,{variant:"error",title:"No pots modificar l'array amb la variable del bucle",children:t.jsxs("p",{children:["La variable del for-each és una ",t.jsx("strong",{children:"còpia"})," del valor. Modificar-la no canvia l'array original."]})}),t.jsxs(fe,{children:[t.jsx(W,{title:"Això NO funciona",variant:"bad",children:t.jsx(y,{code:`int[] nums = {1, 2, 3};

// Intent de duplicar cada valor
for (int num : nums) {
    num = num * 2; // Modifica la COPIA, no l'array!
}
// nums segueix sent {1, 2, 3}`})}),t.jsx(W,{title:"Això SÍ funciona",variant:"good",children:t.jsx(y,{code:`int[] nums = {1, 2, 3};

// Amb for tradicional pots modificar
for (int i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * 2; // Modifica l'array!
}
// nums ara es {2, 4, 6}`})})]}),t.jsx(C,{title:"For-each amb col·leccions (ArrayList)"}),t.jsx(b,{variant:"info",children:t.jsxs("p",{children:["El for-each funciona no només amb arrays, sinó també amb qualsevol col·lecció de Java com ",t.jsx("strong",{children:"ArrayList"}),". De fet, és on més brilla perquè l'alternativa amb for tradicional requereix usar ",t.jsx("code",{children:".get(i)"})," i ",t.jsx("code",{children:".size()"}),"."]})}),t.jsxs(fe,{children:[t.jsx(W,{title:"ArrayList amb for tradicional",variant:"blue",children:t.jsx(y,{code:`ArrayList<String> fruites = new ArrayList<>();
fruites.add("Poma");
fruites.add("Platan");
fruites.add("Taronja");

for (int i = 0; i < fruites.size(); i++) {
    System.out.println(fruites.get(i));
}`})}),t.jsx(W,{title:"ArrayList amb for-each",variant:"good",children:t.jsx(y,{code:`ArrayList<String> fruites = new ArrayList<>();
fruites.add("Poma");
fruites.add("Platan");
fruites.add("Taronja");

for (String fruita : fruites) {
    System.out.println(fruita);
}`})})]}),t.jsx(C,{title:"Resum"}),t.jsx(re,{headers:["Característica","for tradicional","for-each"],rows:[{cells:["Accés a l'índex","Sí","No"]},{cells:["Modificar l'array","Sí","No (modifica còpia)"]},{cells:["Recórrer parcialment","Sí","No (sempre recorre tot)"]},{cells:["Recórrer al revés","Sí","No"]},{cells:["Llegibilitat","Correcta","Més neta i curta"]},{cells:["Funciona amb ArrayList","Sí (.get/.size)","Sí (directament)"]}]}),t.jsx(b,{variant:"success",title:"Consell",children:t.jsxs("p",{children:["Domina primer el ",t.jsx("strong",{children:"for tradicional"}),", que és el que trobaràs a la majoria d'exercicis i exàmens. Un cop el tinguis clar, el for-each et serà molt fàcil d'incorporar com a eina complementària."]})})]})}function mE(){return t.jsxs("div",{children:[t.jsx(C,{title:"Operador Ternari: if-else compacte en una línia"}),t.jsxs(b,{variant:"info",children:[t.jsxs("p",{children:["L'operador ternari és una forma ",t.jsx("strong",{children:"compacta"})," d'escriure un if-else senzill en una sola línia. És útil quan vols assignar un valor a una variable en funció d'una condició simple."]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Recorda: el ",t.jsx("strong",{children:"if-else tradicional"})," segueix sent la forma estàndard i prioritària. L'operador ternari és un complement per a casos concrets."]})]}),t.jsx(C,{title:"Sintaxi"}),t.jsx(y,{label:"Estructura de l'operador ternari",code:"variable = condicio ? valorSiTrue : valorSiFalse;"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["Es llegeix com: ",t.jsx("strong",{children:'"Si la condició és certa, agafa el primer valor; si no, agafa el segon."'})]})}),t.jsxs(N,{title:"Esquema mental",variant:"blue",children:[t.jsx("p",{children:"CONDICIÓ → si TRUE → valor A"}),t.jsx("p",{children:"CONDICIÓ → si FALSE → valor B"})]}),t.jsx(C,{title:"Comparació: if-else vs ternari"}),t.jsxs(fe,{children:[t.jsx(W,{title:"If-else tradicional (5+ línies)",variant:"blue",children:t.jsx(y,{code:`String resultat;

if (nota >= 5) {
    resultat = "Aprovat";
} else {
    resultat = "Suspes";
}`})}),t.jsx(W,{title:"Operador ternari (1 línia)",variant:"good",children:t.jsx(y,{code:'String resultat = (nota >= 5) ? "Aprovat" : "Suspes";'})})]}),t.jsx(b,{variant:"explanation",children:t.jsx("p",{children:"Ambdós codis fan exactament el mateix. La diferència és purament estètica: el ternari és més compacte, però el if-else és més explícit i fàcil de llegir per a qui comença."})}),t.jsx(C,{title:"Casos d'ús pràctics"}),t.jsx(y,{label:"1. Assignar una variable segons una condició",showLineNumbers:!0,code:`int edat = 20;
String tipus = (edat >= 18) ? "Adult" : "Menor";
System.out.println(tipus); // Adult`}),t.jsx(y,{label:"2. Retornar un valor des d'un mètode",showLineNumbers:!0,code:`public static String obtenirSalutacio(boolean esMati) {
    return esMati ? "Bon dia!" : "Bona tarda!";
}`}),t.jsx(y,{label:"3. Directament dins d'un println",showLineNumbers:!0,code:`int puntuacio = 85;
System.out.println("Resultat: " + (puntuacio >= 50 ? "PASSAT" : "FALLAT"));`}),t.jsx(y,{label:"4. Determinar el major de dos números",showLineNumbers:!0,code:`int a = 15, b = 23;
int major = (a > b) ? a : b;
System.out.println("El major es: " + major); // 23`}),t.jsx(y,{label:"5. Paritat d'un número",showLineNumbers:!0,code:`int numero = 7;
String paritat = (numero % 2 == 0) ? "Parell" : "Senar";
System.out.println(numero + " es " + paritat); // 7 es Senar`}),t.jsx(y,{label:"6. Valor absolut (sense Math.abs)",showLineNumbers:!0,code:`int valor = -42;
int absolut = (valor >= 0) ? valor : -valor;
System.out.println("Valor absolut: " + absolut); // 42`}),t.jsx(C,{title:"Ternari aniuat (existeix, però no el recomanem)"}),t.jsx(b,{variant:"warning",title:"Evita els ternaris aniuats",children:t.jsxs("p",{children:["Tècnicament és possible encadenar ternaris, però el resultat és un codi molt difícil de llegir i mantenir. ",t.jsx("strong",{children:"No ho recomanem."})]})}),t.jsxs(fe,{children:[t.jsx(W,{title:"Ternari aniuat (difícil de llegir)",variant:"bad",children:t.jsx(y,{code:`// NO recomanat!
String categoria = (edat < 12) ? "Nen"
    : (edat < 18) ? "Adolescent"
    : (edat < 65) ? "Adult"
    : "Jubilat";`})}),t.jsx(W,{title:"If-else (molt més clar)",variant:"good",children:t.jsx(y,{code:`String categoria;

if (edat < 12) {
    categoria = "Nen";
} else if (edat < 18) {
    categoria = "Adolescent";
} else if (edat < 65) {
    categoria = "Adult";
} else {
    categoria = "Jubilat";
}`})})]}),t.jsx(C,{title:"Quan utilitzar i quan NO"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Utilitza l'operador ternari quan...",variant:"green",children:t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsx("li",{children:"La decisió és simple: una condició, dos valors possibles"}),t.jsx("li",{children:"Vols assignar un valor a una variable en una sola línia"}),t.jsx("li",{children:"Vols retornar un valor senzill des d'un mètode"}),t.jsx("li",{children:"El codi resultant segueix sent fàcil de llegir"})]})}),t.jsx(N,{title:"NO utilitzis l'operador ternari quan...",variant:"pink",children:t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsx("li",{children:"La lògica és complexa o té múltiples condicions"}),t.jsx("li",{children:"Necessites executar varies instruccions (no només retornar un valor)"}),t.jsx("li",{children:"Voldries aniuar ternaris dins d'altres ternaris"}),t.jsx("li",{children:"El codi es fa difícil d'entendre a primera vista"})]})})]}),t.jsx(C,{title:"Resum"}),t.jsx(re,{headers:["Característica","if-else","Operador ternari"],rows:[{cells:["Línies de codi","5+ línies","1 línia"]},{cells:["Llegibilitat","Molt clara","Clara si és simple"]},{cells:["Múltiples instruccions","Sí","No (només retorna un valor)"]},{cells:["Condicions complexes","Sí","No recomanat"]},{cells:["Aniuament","Fàcil de llegir","Molt confús"]},{cells:["Ús principal","Qualsevol decisió","Assignacions simples"]}]}),t.jsx(b,{variant:"success",title:"Consell",children:t.jsxs("p",{children:["Pensa en l'operador ternari com un ",t.jsx("strong",{children:"atall"}),": si el caminet curt és clar i segur, pren-lo. Si és fosc i ple de revolts (condicions complexes), millor el camí principal (if-else)."]})})]})}function hE(){return t.jsxs("div",{children:[t.jsx(C,{title:"var i altres funcionalitats modernes de Java"}),t.jsxs(b,{variant:"info",children:[t.jsxs("p",{children:["Java ha anat evolucionant amb noves versions que incorporen sintaxis més modernes i compactes. Aquí veurem algunes de les més útils: ",t.jsx("strong",{children:"var"}),","," ",t.jsx("strong",{children:"text blocks"}),", ",t.jsx("strong",{children:"switch expressions"})," i"," ",t.jsx("strong",{children:"records"}),"."]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Totes aquestes funcionalitats són ",t.jsx("strong",{children:"complements"})," a la sintaxi tradicional, que segueix sent la prioritat a nivell acadèmic."]})]}),t.jsx(b,{variant:"warning",title:"Important per a estudiants de DAM",children:t.jsxs("p",{children:["Aquestes funcionalitats són ",t.jsx("strong",{children:'"nice to know"'})," (bo de saber). A nivell de DAM, centra't primer en la sintaxi tradicional que és la que apareixerà als exàmens i exercicis. Coneix-les per si les trobes en codi real o tutorials moderns."]})}),t.jsx(C,{title:"var: inferència de tipus local (Java 10+)"}),t.jsx(b,{variant:"info",children:t.jsxs("p",{children:["La paraula clau ",t.jsx("strong",{children:"var"})," permet declarar variables locals sense especificar explícitament el tipus. El compilador ",t.jsx("strong",{children:"dedueix"})," el tipus automàticament a partir del valor assignat."]})}),t.jsxs(fe,{children:[t.jsx(W,{title:"Forma tradicional (tipus explícit)",variant:"blue",children:t.jsx(y,{code:`String nom = "Hola";
int edat = 25;
double preu = 19.99;
ArrayList<String> llista = new ArrayList<>();`})}),t.jsx(W,{title:"Amb var (tipus inferit)",variant:"good",children:t.jsx(y,{code:`var nom = "Hola";        // String
var edat = 25;           // int
var preu = 19.99;        // double
var llista = new ArrayList<String>();`})})]}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["En ambdós casos, el tipus és ",t.jsx("strong",{children:"exactament el mateix"}),". L'única diferència és que amb ",t.jsx("code",{children:"var"})," no l'escrius tu, el compilador el dedueix. Un cop assignat, el tipus queda fixat."]})}),t.jsx(b,{variant:"error",title:"var NO fa que Java sigui dinàmic!",children:t.jsxs("p",{children:["A diferència de Python o JavaScript, ",t.jsx("code",{children:"var"})," ",t.jsx("strong",{children:"no"})," converteix Java en un llenguatge de tipat dinàmic. El tipus es determina en temps de compilació i no pot canviar després."]})}),t.jsx(y,{label:"Això dona ERROR de compilació",code:`var x = 10;       // x es int
x = "hola";       // ERROR! No pots assignar String a un int`}),t.jsx(C,{title:"On es pot i on NO es pot usar var"}),t.jsxs(ge,{children:[t.jsxs(N,{title:"SÍ es pot usar",variant:"green",children:[t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsx("li",{children:"Variables locals dins d'un mètode"}),t.jsx("li",{children:"Variables dins de bucles for"}),t.jsx("li",{children:"Variables dins de blocs try-with-resources"})]}),t.jsx(y,{code:`// Dins d'un metode
var resultat = calcular();

// Dins d'un for
for (var i = 0; i < 10; i++) { }

// Dins d'un for-each
for (var nom : llistaNoms) { }`})]}),t.jsxs(N,{title:"NO es pot usar",variant:"pink",children:[t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsx("li",{children:"Atributs de classe (camps/fields)"}),t.jsx("li",{children:"Paràmetres de mètodes"}),t.jsx("li",{children:"Tipus de retorn de mètodes"}),t.jsx("li",{children:"Sense valor inicial (el compilador no pot deduir)"})]}),t.jsx(y,{code:`// ERROR: camp de classe
class Persona {
    var nom = "Anna"; // NO COMPILA
}

// ERROR: parametre
public void saludar(var nom) { } // NO

// ERROR: retorn
public var getEdat() { } // NO

// ERROR: sense inicialitzar
var x; // NO COMPILA (quin tipus es?)`})]})]}),t.jsx(re,{headers:["Situació","Es pot usar var?"],rows:[{cells:["Variable local amb assignació","Sí"]},{cells:["Variable en bucle for/for-each","Sí"]},{cells:["Atribut de classe","No"]},{cells:["Paràmetre de mètode","No"]},{cells:["Tipus de retorn","No"]},{cells:["Sense valor inicial","No"]}]}),t.jsx(C,{title:"Quan usar var i quan no"}),t.jsxs(fe,{children:[t.jsxs(W,{title:"Bon ús de var",variant:"good",children:[t.jsx("p",{children:"Quan el tipus és obvi pel context:"}),t.jsx(y,{code:`// El tipus es evident
var scanner = new Scanner(System.in);
var noms = new ArrayList<String>();
var resultat = "Aprovat";`})]}),t.jsxs(W,{title:"Mal ús de var",variant:"bad",children:[t.jsx("p",{children:"Quan el tipus no és clar i var confon:"}),t.jsx(y,{code:`// Quin tipus retorna? No es clar!
var dades = obtenirDades();
var resultat = processar(x, y);
var config = inicialitzar();`})]})]}),t.jsx(C,{title:"Text blocks: strings multilínia (Java 13+)"}),t.jsx(b,{variant:"info",children:t.jsxs("p",{children:["Els ",t.jsx("strong",{children:"text blocks"})," permeten escriure cadenes de text de múltiples línies sense haver de concatenar ni usar ",t.jsx("code",{children:"\\n"}),". S'utilitzen tres cometes dobles ",t.jsx("code",{children:'"""'})," per obrir i tancar."]})}),t.jsxs(fe,{children:[t.jsx(W,{title:"Forma tradicional",variant:"blue",children:t.jsx(y,{code:`String json = "{\\n" +
    "  \\"nom\\": \\"Anna\\",\\n" +
    "  \\"edat\\": 25\\n" +
    "}";`})}),t.jsx(W,{title:"Amb text blocks",variant:"good",children:t.jsx(y,{code:`String json = """
    {
      "nom": "Anna",
      "edat": 25
    }
    """;`})})]}),t.jsx(y,{label:"Molt útil per a SQL, HTML, JSON...",showLineNumbers:!0,code:`// Consulta SQL multilinia
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
System.out.println(menu);`}),t.jsx(C,{title:"Switch expressions: switch que retorna valor (Java 14+)"}),t.jsx(b,{variant:"info",children:t.jsxs("p",{children:["Les ",t.jsx("strong",{children:"switch expressions"})," són una versió millorada del switch que pot retornar un valor directament, utilitza fletxes (",t.jsx("code",{children:"->"}),") en comptes de ",t.jsx("code",{children:"case/break"}),", i és més compacte."]})}),t.jsxs(fe,{children:[t.jsx(W,{title:"Switch tradicional",variant:"blue",children:t.jsx(y,{code:`String nomDia;
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
}`})}),t.jsx(W,{title:"Switch expression",variant:"good",children:t.jsx(y,{code:`String nomDia = switch (dia) {
    case 1 -> "Dilluns";
    case 2 -> "Dimarts";
    case 3 -> "Dimecres";
    default -> "Desconegut";
};`})})]}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["Avantatges del switch expression: no necessita ",t.jsx("code",{children:"break"})," (no hi ha fall-through accidental), pot retornar valors directament, i permet agrupar casos fàcilment."]})}),t.jsx(y,{label:"Agrupar múltiples casos",code:`String tipusDia = switch (dia) {
    case 1, 2, 3, 4, 5 -> "Laborable";
    case 6, 7           -> "Cap de setmana";
    default             -> "Invalid";
};`}),t.jsx(C,{title:"Records: classes de dades simplificades (Java 16+)"}),t.jsx(b,{variant:"info",children:t.jsxs("p",{children:["Els ",t.jsx("strong",{children:"records"})," són una forma molt compacta de crear classes que només serveixen per guardar dades (com un DTO). Java genera automàticament el constructor, getters, ",t.jsx("code",{children:"equals()"}),", ",t.jsx("code",{children:"hashCode()"})," i"," ",t.jsx("code",{children:"toString()"}),"."]})}),t.jsxs(fe,{children:[t.jsx(W,{title:"Classe tradicional",variant:"blue",children:t.jsx(y,{code:`public class Punt {
    private final int x;
    private final int y;

    public Punt(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() { return x; }
    public int getY() { return y; }

    // + equals, hashCode, toString...
}`})}),t.jsx(W,{title:"Amb record",variant:"good",children:t.jsx(y,{code:`public record Punt(int x, int y) { }

// Ja inclou constructor, getters,
// equals, hashCode i toString!

// Us:
var p = new Punt(3, 5);
System.out.println(p.x()); // 3
System.out.println(p);     // Punt[x=3, y=5]`})})]}),t.jsx(b,{variant:"warning",title:"Limitacions dels records",children:t.jsxs("p",{children:["Els records són ",t.jsx("strong",{children:"immutables"})," (no tenen setters), no poden heretar d'altres classes, i els seus camps són finals. Són ideals per a dades simples, però no substitueixen les classes normals amb lògica complexa."]})}),t.jsx(C,{title:"Resum de funcionalitats modernes"}),t.jsx(re,{headers:["Funcionalitat","Versió de Java","Per a què serveix","Prioritat a DAM"],rows:[{cells:["var","Java 10+","Inferència de tipus en variables locals","Útil però no essencial"]},{cells:['Text blocks (""")',"Java 13+","Strings multilínia sense \\n","Bo de saber"]},{cells:["Switch expressions","Java 14+","Switch que retorna valor, sense break","Bo de saber"]},{cells:["Records","Java 16+","Classes de dades compactes","Avançat, bo de saber"]}]}),t.jsx(b,{variant:"success",title:"Consell final",children:t.jsxs("p",{children:["Totes aquestes funcionalitats fan el codi més curt i modern, però la base de Java ",t.jsx("strong",{children:"segueix sent la mateixa"}),". Aprendre la sintaxi tradicional primer et garanteix entendre qualsevol codi Java, sigui antic o modern. Aquestes eines modernes les aniràs incorporant naturalment a mesura que guanyis experiència."]})})]})}function fE(){return t.jsxs("div",{children:[t.jsx(C,{title:"Com es pica codi en equip"}),t.jsxs(b,{variant:"info",title:"Que veurem aqui?",children:[t.jsxs("p",{children:["A ",t.jsx("strong",{children:"Anatomia d'un Projecte Real"})," heu vist COM es dissenya i estructura un projecte des de zero. Aqui veurem la part que falta:",t.jsx("strong",{children:" com es treballa dia a dia amb aquest codi"}),". Com fas servir Git quan sou 5 persones tocant el mateix projecte. Que passa quan obres un fitxer que no has escrit tu. Com trobes i arregles un bug. Com evites que el projecte es converteixi en un caos."]}),t.jsx("p",{style:{marginTop:"8px"},children:"Res de teoria abstracta: tot son situacions reals que viureu des del primer dia de feina."})]}),t.jsx(C,{title:"El teu primer dia: clonar i entendre el projecte"}),t.jsx(b,{variant:"explanation",title:"Arribes a una empresa, t'assignen un projecte. Ara que?",children:t.jsxs("p",{children:["Quan arribes a un equip, el projecte ja existeix. Pot tenir ",t.jsx("strong",{children:"milers de fitxers"})," ","escrits durant mesos o anys per persones que potser ja no hi treballen. El teu primer objectiu no es programar: es ",t.jsx("strong",{children:"entendre que hi ha"}),"."]})}),t.jsx(y,{label:"Pas 1: Clonar el projecte i fer-lo funcionar",showLineNumbers:!0,code:`# El teu company et passa el link del repositori
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
# NO perdis 4 hores intentant arreglar-ho sol el primer dia.`}),t.jsx(b,{variant:"info",title:"Que mires primer per entendre el projecte?",children:t.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"README.md"})," — Que fa l'aplicacio i com executar-la."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"L'estructura de carpetes"})," — Quins packages hi ha (model, service, controller...)."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"El model/"})," — Les classes de dades et diuen de que VA l'aplicacio. Si veus ",t.jsx("code",{children:"Reserva.java"}),", ",t.jsx("code",{children:"Taula.java"}),", ",t.jsx("code",{children:"Client.java"}),"... ja saps que es un sistema de reserves."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Els tests"})," — Llegir els tests es la millor forma d'entendre que fa cada classe, perque mostren exemples reals d'us."]})]})}),t.jsx(C,{title:"Git en equip: el flux que seguiras cada dia"}),t.jsx(b,{variant:"explanation",title:"Per que branques?",children:t.jsxs("p",{children:[`Imagina que tu estas fent la funcionalitat de "crear reserves" i un company esta fent "gestionar el menu". Si els dos toqueu el mateix fitxer a la mateixa branca, quan un faci push, l'altre tindra conflictes. Les `,t.jsx("strong",{children:"branques"})," ","solucionen aixo: cada persona treballa en una copia independent del codi, i nomes es fusiona quan esta acabat i revisat."]})}),t.jsx(y,{label:"El cicle complet que repetiras amb cada tasca",showLineNumbers:!0,code:`# ──────────────────────────────────────────
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
# ...i repetir`}),t.jsx(b,{variant:"warning",title:"Errors tipics dels juniors amb Git",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Fer un sol commit gegant amb tots els canvis al final."})," Mal. Si alguna cosa va malament, no pots desfer nomes una part. Commits petits = control fi."]}),t.jsxs("li",{children:[t.jsxs("strong",{children:["Treballar directament a ",t.jsx("code",{children:"main"})," o ",t.jsx("code",{children:"develop"}),"."]})," Mal. Si la lies, afectes a tothom. Sempre branca propia."]}),t.jsxs("li",{children:[t.jsxs("strong",{children:["No fer ",t.jsx("code",{children:"git pull"})," abans de crear una branca."]})," Mal. Estaras treballant sobre codi antic i tindras conflictes segur."]}),t.jsxs("li",{children:[t.jsx("strong",{children:'Commits amb missatges com "coses", "fix", "asd".'})," Mal. D'aqui 3 mesos ningu (ni tu) sabra que fan."]})]})}),t.jsx(C,{title:"Convencions de commits: tots parlem el mateix idioma"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["La majoria d'equips segueixen ",t.jsx("strong",{children:"Conventional Commits"}),": cada missatge comenca amb un prefix que indica el TIPUS de canvi. Aixi, llegint l'historial, saps immediatament que ha passat:"]})}),t.jsx(re,{headers:["Prefix","Quan s'usa","Exemple"],rows:[{cells:["feat:","Has afegit una funcionalitat nova","feat: afegir formulari de reserva"]},{cells:["fix:","Has corregit un bug","fix: corregir calcul del preu quan quantitat es 0"]},{cells:["test:","Has afegit o modificat tests","test: afegir tests per ServeiMenu"]},{cells:["refactor:","Has reorganitzat codi SENSE canviar el que fa","refactor: extreure metode privat buscarTaulaDisponible()"]},{cells:["docs:","Has tocat documentacio","docs: afegir instruccions d'instalacio al README"]},{cells:["chore:","Manteniment (dependencies, configuracio)","chore: actualitzar Spring Boot a 3.2"]}]}),t.jsx(y,{label:"Historial real d'un projecte (git log)",code:`a3f2c1d  feat: implementar cancelacio de reserves        (Marc, fa 2 hores)
b7e4a9f  test: afegir tests per cancelar()               (Marc, fa 2 hores)
c1d8f3e  fix: corregir NPE quan client no te email       (Anna, fa 5 hores)
d4a7b2c  feat: afegir endpoint GET /api/reserves          (Anna, fa 1 dia)
e8c3d6f  refactor: moure validacio al service             (Pau, fa 1 dia)
f2b5a9d  feat: crear classes model (Taula, Reserva...)    (Marc, fa 3 dies)

# Amb un cop d'ull saps QUI ha fet QUE i QUAN.
# Sense prefixos, seria: "coses", "fix", "mas cosas", "ok ya va"... un desastre.`}),t.jsx(C,{title:"Code Review: com es revisa codi de veritat"}),t.jsx(b,{variant:"explanation",title:"Per que ningu fusiona sense que un altre ho miri?",children:t.jsxs("p",{children:["Perque ",t.jsx("strong",{children:"tothom comet errors"}),`. Fins i tot els seniors. Un segon parell d'ulls detecta bugs, incoherencies i codi confus que l'autor no veu perque esta "massa a dins" del problema. A mes, la revisio fa que `,t.jsx("strong",{children:"tot l'equip conegui tot el codi"}),", no nomes la part que ha escrit cadascú."]})}),t.jsxs(fe,{children:[t.jsxs(W,{title:"Comentari util",variant:"good",children:[t.jsx("p",{style:{marginTop:"8px",fontFamily:"monospace",fontSize:"0.85rem"},children:"Linia 42 de ServeiReserves.java:"}),t.jsxs("p",{style:{marginTop:"4px",fontFamily:"monospace",fontSize:"0.85rem"},children:['"Si ',t.jsx("code",{children:"persones"})," es 0 o negatiu, ",t.jsx("code",{children:"buscarTaulaDisponible()"})," ","retornara null i llançara RuntimeException amb un missatge confus. Millor validar al principi del metode amb un"," ",t.jsx("code",{children:"if (persones <= 0) throw new IllegalArgumentException(...)"}),'"']}),t.jsx("p",{style:{marginTop:"8px",fontSize:"0.85rem"},children:"Explica el problema, per que es un problema, i suggereix la solucio."})]}),t.jsxs(W,{title:"Comentari inutil",variant:"bad",children:[t.jsx("p",{style:{marginTop:"8px",fontFamily:"monospace",fontSize:"0.85rem"},children:'"Aixo esta malament."'}),t.jsx("p",{style:{marginTop:"12px",fontFamily:"monospace",fontSize:"0.85rem"},children:'"Jo ho faria diferent."'}),t.jsx("p",{style:{marginTop:"12px",fontSize:"0.85rem"},children:"No diu que esta malament, ni per que, ni com arreglar-ho."})]})]}),t.jsx(b,{variant:"info",title:"Que mira un revisor?",children:t.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Funciona?"})," El codi fa el que diu que fa? Hi ha casos que no contempla (null, llistes buides, numeros negatius)?"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Te tests?"})," Si has afegit un metode nou, on esta el test que el prova?"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"S'enten?"})," Si el revisor ha de llegir el metode 3 cops per entendre'l, es massa complicat. Cal simplificar o afegir un comentari."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Segueix les convencions?"})," Noms de variables, estructura de packages, estil de codi... l'equip te unes normes i tothom les segueix."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"No trenca res existent?"})," Si has tocat un metode que altres parts del codi utilitzen, has comprovat que segueix funcionant?"]})]})}),t.jsx(b,{variant:"warning",title:"Consell important",children:t.jsxs("p",{children:["Quan et deixin 15 comentaris a la teva PR, ",t.jsx("strong",{children:"no ho agafis com un atac"}),". T'estan ajudant a millorar. Els millors devs son els que reben feedback, l'apliquen i aprenen. Si despres d'un mes les teves PRs tenen menys comentaris, vol dir que estas creixent."]})}),t.jsx(C,{title:"Debugging: com es troben i arreglen bugs"}),t.jsx(b,{variant:"explanation",title:"El 50% del temps d'un dev es debugging",children:t.jsxs("p",{children:["No exagero. Molta de la feina diaria es: alguna cosa no funciona, descobrir ",t.jsx("strong",{children:"per que"})," no funciona, i arreglar-ho. El proces es sempre el mateix:"]})}),t.jsx(re,{headers:["Pas","Que fas","Eines"],rows:[{cells:["1. Reproduir","Primer de tot: aconseguir que el bug passi al TEU ordinador. Si no el pots veure, no el pots arreglar. Segueix els passos exactes que descriuen el bug.","L'app executant-se localment"]},{cells:["2. Llegir l'error","EL 90% DELS ERRORS US DIUEN EXACTAMENT QUE PASSA. Llegiu el missatge sencer. Busqueu el nom del fitxer i el numero de linia. Aneu directament alli.","Consola, logs del servidor"]},{cells:["3. Aillar","Reduir el problema al minim. Si falla al fer una reserva, prova nomes la part del servei. Si el servei funciona, el problema es al controller. Divideix i venceras.","Tests unitaris, breakpoints"]},{cells:["4. Entendre",`ABANS d'arreglar, entendre PER QUE falla. Si nomes canvies codi fins que "funciona" sense entendre per que, probablement estas creant un bug nou.`,"Debugger de l'IDE, println temporal"]},{cells:["5. Arreglar + test","Primer escriu un test que REPRODUEIXI el bug (el test ha de fallar). Despres arregla el codi. El test ara ha de passar. Aixi el bug no tornara mai mes.","JUnit, l'IDE"]}]}),t.jsx(y,{label:"Exemple real: trobar i arreglar un bug",showLineNumbers:!0,code:`// BUG REPORTAT: "Quan un client fa una reserva per a 4 persones,
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
// "fix: usar potAcollir() per validar capacitat en buscar taula"`}),t.jsx(b,{variant:"info",title:"L'eina mes potent: el debugger de l'IDE",children:t.jsxs("p",{children:["IntelliJ i VS Code permeten posar ",t.jsx("strong",{children:"breakpoints"})," (punts de parada) al codi. Quan l'execucio arriba alli, s'atura i pots veure el valor de TOTES les variables en aquell moment. Es com congelar el temps i mirar per dins del programa. ",t.jsx("strong",{children:"Apreneu a usar-lo"}),": us estalviara hores."]})}),t.jsx(C,{title:"Llegir codi que no has escrit tu"}),t.jsx(b,{variant:"explanation",title:"La habilitat mes infravalorada",children:t.jsxs("p",{children:["A classe escriviu codi des de zero. A la feina, el 80% del temps llegireu codi que han escrit ALTRES PERSONES, fa mesos o anys. Codi que no te comentaris, que usa patrons que no coneixeu, amb noms de variables que no enteneu. I heu de ",t.jsx("strong",{children:"modificar-lo sense trencar res"}),". Aixo es la realitat."]})}),t.jsx(re,{headers:["Estrategia","Com funciona"],rows:[{cells:["1. Comenca pel test",'Si la classe te tests, llegeix-los PRIMER. Un test diu: "si creo una Taula amb capacitat 4 i faig potAcollir(3), retorna true". Millor que qualsevol documentacio.']},{cells:["2. Busca el punt d'entrada","Si has de tocar un servei, busca QUINES classes el criden. Aixo et diu en quin context s'utilitza. A IntelliJ: Ctrl+Click sobre el nom del metode per veure on s'usa."]},{cells:["3. Segueix el flux d'una peticio","Agafa una accio concreta (ex: crear reserva) i segueix-la des del Controller fins a la BD. Controller → Service → Repository. Aixi entens com flueix la informacio."]},{cells:["4. git blame: qui va escriure aixo?",'La comanda "git blame fitxer.java" et mostra qui va escriure cada linia i en quin commit. Si no entens alguna cosa, saps a qui preguntar.']},{cells:["5. NO canvïis codi que no entens","Si no entens per que una linia existeix, NO la borris. Potser sembla innecessaria pero cobreix un cas que no estàs veient. Pregunta primer."]}]}),t.jsx(y,{label:"git blame: saber qui va escriure cada linia",code:`$ git blame src/service/ServeiReserves.java

a3f2c1d (Marc    2026-01-15)  public Reserva ferReserva(Client client, Date data, int persones) {
a3f2c1d (Marc    2026-01-15)      Taula taula = buscarTaulaDisponible(data, persones);
c1d8f3e (Anna    2026-02-03)      if (taula == null) {
c1d8f3e (Anna    2026-02-03)          throw new RuntimeException("No hi ha taules disponibles");
c1d8f3e (Anna    2026-02-03)      }
a3f2c1d (Marc    2026-01-15)      Reserva reserva = new Reserva(client, taula, data, persones);
e8c3d6f (Pau     2026-02-10)      taula.ocupar();  // Afegit perque hi havia un bug de doble reserva

# Veus que la linia de taula.ocupar() la va afegir Pau el 10 de febrer.
# Si no entens per que, pots preguntar-li directament o mirar el commit e8c3d6f.`}),t.jsx(C,{title:"Manteniment: el codi creix i s'ha de cuidar"}),t.jsx(b,{variant:"explanation",title:"El codi es com un jardi",children:t.jsxs("p",{children:["Si ningu el cuida, creix descontrolat. Les males herbes (codi duplicat, funcions massa llargues, noms confusos) s'acumulen poc a poc fins que el projecte es inmantenible. Per aixo existeix el ",t.jsx("strong",{children:"refactoring"}),": canviar l'estructura del codi ",t.jsx("strong",{children:"sense canviar el que fa"})," per mantenir-lo net."]})}),t.jsxs(fe,{children:[t.jsx(W,{title:"Codi que necessita refactoring",variant:"bad",children:t.jsx(y,{code:`// Metode de 80 linies que fa 5 coses
public void processarComanda(int taulaNum,
    String[] plats, int[] quantitats) {
  // Buscar taula... (20 linies)
  // Validar que els plats existeixen... (15 linies)
  // Calcular preu... (15 linies)
  // Guardar a BD... (15 linies)
  // Enviar confirmacio... (15 linies)
}`})}),t.jsx(W,{title:"Despres del refactoring",variant:"good",children:t.jsx(y,{code:`// Cada pas es un metode clar
public Comanda processarComanda(int taulaNum,
    String[] plats, int[] quantitats) {
  Taula taula = buscarTaula(taulaNum);
  List<Plat> platsValidats = validarPlats(plats);
  Comanda comanda = crearComanda(taula,
      platsValidats, quantitats);
  comandaRepo.save(comanda);
  return comanda;
}`})})]}),t.jsx(b,{variant:"info",title:"Quan es fa refactoring?",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Quan toques codi existent"}),": si has de modificar un metode i es un embolic, primer el neteges, despres el modifiques."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Quan un metode fa mes d'una cosa"}),`: si necessites un comentari que diu "// ara fem X" enmig d'un metode, probablement X hauria de ser un metode separat.`]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Quan copies i enganxes codi"}),": si la mateixa logica apareix a 3 llocs, crea un metode i crida'l des dels 3 llocs."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Regla del Boy Scout"}),`: "Deixa el codi mes net del que l'has trobat". Cada cop que toques un fitxer, millora'l una mica.`]})]})}),t.jsx(b,{variant:"warning",title:"Refactoring NOMES amb tests verds",children:t.jsxs("p",{children:["Mai refactoritzis codi que no te tests. Com sabras que no has trencat res? El proces es: ",t.jsx("strong",{children:"1)"})," comprova que els tests passen,",t.jsx("strong",{children:" 2)"})," refactoritza, ",t.jsx("strong",{children:"3)"})," torna a executar els tests. Si segueixen passant, el refactoring es correcte."]})}),t.jsx(C,{title:"Conflictes de Git: quan dos toquen el mateix"}),t.jsx(b,{variant:"explanation",title:"Els conflictes son normals, no son un error",children:t.jsxs("p",{children:["Si tu modifiques la linia 42 de ",t.jsx("code",{children:"ServeiReserves.java"})," a la teva branca, i un company modifica la ",t.jsx("strong",{children:"mateixa linia 42"})," a la seva branca i fusiona primer, quan tu intentis fusionar la teva, Git no sabra ",t.jsx("strong",{children:"quina versio es la bona"}),". Aixo es un ",t.jsx("strong",{children:"conflicte"}),". Passa constantment i es resol manualment."]})}),t.jsx(y,{label:"Com es veu un conflicte i com es resol",showLineNumbers:!0,code:`# Intentes fusionar la teva branca i Git et diu:
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
git commit -m "fix: resoldre conflicte en ServeiReserves"`}),t.jsxs(ge,{children:[t.jsx(N,{title:"Evitar conflictes",variant:"blue",children:t.jsxs("ul",{style:{paddingLeft:"16px",marginTop:"4px"},children:[t.jsxs("li",{children:["Fer ",t.jsx("code",{children:"git pull"})," sovint per estar actualitzat"]}),t.jsx("li",{children:"Branques curtes (2-3 dies, no 2 setmanes)"}),t.jsx("li",{children:"Comunicar a l'equip quins fitxers toques"})]})}),t.jsx(N,{title:"Resoldre conflictes",variant:"yellow",children:t.jsxs("ul",{style:{paddingLeft:"16px",marginTop:"4px"},children:[t.jsx("li",{children:"Llegir les DUES versions amb calma"}),t.jsx("li",{children:"Entendre QUE volia fer cadascú"}),t.jsx("li",{children:"Si dubtes, parla amb el company"}),t.jsx("li",{children:"Executar tests despres de resoldre"})]})})]}),t.jsx(C,{title:"Del teu ordinador al servidor: entorns i desplegament"}),t.jsx(b,{variant:"explanation",title:"El codi passa per varies etapes abans d'arribar als usuaris",children:t.jsx("p",{children:"No es programa directament sobre el servidor que fan servir els clients. Hi ha etapes intermitges per assegurar que tot funciona:"})}),t.jsx(y,{label:"El viatge del codi",code:`El teu ordinador (LOCAL)
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
    MAI es toca directament. Tot arriba a traves de la pipeline.`}),t.jsx(b,{variant:"warning",title:"La regla sagrada",children:t.jsxs("p",{children:[t.jsx("strong",{children:"MAI es prova res directament a produccio."}),` Si un dev intenta "provar una coseta rapida" al servidor real i alguna cosa va malament, pot afectar milers d'usuaris. Per aixo existeix staging.`]})}),t.jsx(C,{title:"Coses que aprendras a la feina, no a classe"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Llegiràs mes codi que escriuràs",variant:"blue",children:t.jsx("p",{children:"En un projecte gran, el 80% del codi ja existeix. La teva feina es entendre'l i afegir-hi. Si un metode te 200 linies i nomes has de canviar 3, primer has d'entendre les 200."})}),t.jsx(N,{title:"La regla dels 30 minuts",variant:"yellow",children:t.jsxs("p",{children:["Si portes 30 minuts encallat amb el mateix error, ",t.jsx("strong",{children:"pregunta"}),`. Pero abans de preguntar: llegeix l'error, busca a Google, mira la documentacio. Despres pregunta amb context: "He provat X i Y, em dona Z. Alguna idea?"`]})}),t.jsx(N,{title:"El codi perfecte no existeix",variant:"green",children:t.jsxs("p",{children:["Hi ha codi que funciona, es llegible i te tests. Aixo es",t.jsx("strong",{children:" codi suficientment bo"}),". Buscar la perfeccio es una trampa: et bloqueja i no acabes res. Primer fes que funcioni, despres millora'l si cal."]})}),t.jsx(N,{title:"Les eines que has de dominar",variant:"pink",children:t.jsxs("p",{children:[t.jsx("strong",{children:"Git"})," (de veritat, no nomes push/pull), el ",t.jsx("strong",{children:"debugger"})," de l'IDE,",t.jsx("strong",{children:" Ctrl+Click"})," per navegar pel codi,",t.jsx("strong",{children:" Ctrl+Shift+F"})," per buscar a tot el projecte. Dominar les eines multiplica la teva velocitat per 5."]})})]}),t.jsxs(b,{variant:"success",title:"Resum: el dia a dia picant codi",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"1."})," Fas ",t.jsx("code",{children:"git pull"})," per actualitzar-te."," ",t.jsx("strong",{children:"2."})," Crees una branca per la teva tasca."," ",t.jsx("strong",{children:"3."})," Programes i fas commits petits i clars."," ",t.jsx("strong",{children:"4."})," Obres una Pull Request."," ",t.jsx("strong",{children:"5."})," Un company revisa el teu codi i et dona feedback."," ",t.jsx("strong",{children:"6."})," Arregles el que calgui, es fusiona."," ",t.jsx("strong",{children:"7."})," La pipeline executa tests i desplega."," ",t.jsx("strong",{children:"8."})," Repeteixes amb la propera tasca."]}),t.jsxs("p",{style:{marginTop:"12px"},children:["Entremig: llegiràs codi d'altres, faras debugging, resoldras conflictes de Git, refactoritzaras codi vell, i aprendras cada dia. Tot el que heu apres (classes, funcions, encapsulacio, packages) son les eines que fareu servir per fer tot aixo. Ara ja sabeu ",t.jsx("strong",{children:"com s'utilitzen de veritat"}),"."]})]})]})}const gE="_wrapper_1jc92_1",xE="_title_1jc92_17",vE="_diagram_1jc92_35",wl={wrapper:gE,title:xE,diagram:vE},jE="/programacio-0485LIVE/diagrams/";function _e({src:e,title:r}){return t.jsxs("div",{className:wl.wrapper,children:[r&&t.jsx("div",{className:wl.title,children:r}),t.jsx("div",{className:wl.diagram,children:t.jsx("img",{src:`${jE}${e}.svg`,alt:r||"Diagrama"})})]})}function bE(){return t.jsxs("div",{children:[t.jsx(C,{title:"Diagrames de Classes UML"}),t.jsxs(b,{variant:"explanation",title:"Que es un diagrama de classes?",children:[t.jsxs("p",{children:["Un ",t.jsx("strong",{children:"diagrama de classes"})," es una representacio visual de les classes d'un sistema, els seus ",t.jsx("strong",{children:"atributs"}),", ",t.jsx("strong",{children:"metodes"})," i les",t.jsx("strong",{children:" relacions"}),` entre elles. Es el "planol" d'un sistema orientat a objectes: abans de programar, dissenyem l'estructura del codi amb aquest diagrama.`]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Forma part de l'",t.jsx("strong",{children:"UML"})," (Unified Modeling Language), un estandard internacional per modelar sistemes de programari."]})]}),t.jsx(C,{title:"Elements d'un diagrama de classes"}),t.jsx(re,{headers:["Element","Representacio","Descripcio"],rows:[{group:"Classe"},{cells:["Nom de la classe","Seccio superior del rectangle","El nom de la classe, en majuscula inicial (ex: Animal)"]},{cells:["Atributs","Seccio central del rectangle","Les variables de la classe amb el seu tipus (ex: -nom: String)"]},{cells:["Metodes","Seccio inferior del rectangle","Les funcions de la classe amb parametres i retorn (ex: +getNom(): String)"]},{group:"Visibilitat"},{cells:["+ public","Signe +","Accessible des de qualsevol classe"]},{cells:["- private","Signe -","Accessible nomes dins de la mateixa classe"]},{cells:["# protected","Signe #","Accessible des de la mateixa classe i les subclasses"]},{group:"Relacions"},{cells:["Herencia","--|> (fletxa buida)",`Una classe filla hereta d'una classe pare ("es un")`]},{cells:["Composicio","*-- (diamant ple)",'Una classe conte una altra; si el contenidor desapareix, el contingut tambe ("te un" fort)']},{cells:["Agregacio","o-- (diamant buit)",'Una classe conte una altra, pero poden existir independentment ("te un" debil)']},{cells:["Associacio","-- (linia simple)",'Dues classes es relacionen ("usa")']},{cells:["Dependencia","..> (linia discontinua)","Una classe usa temporalment una altra"]}]}),t.jsx(C,{title:"Diagrama basic: una classe"}),t.jsx(b,{variant:"info",title:"Estructura d'una classe",children:t.jsxs("p",{children:["Cada classe es representa com un ",t.jsx("strong",{children:"rectangle dividit en tres seccions"}),": el nom a dalt, els atributs al mig i els metodes a baix. Els simbols ",t.jsx("code",{children:"+"}),",",t.jsx("code",{children:" -"})," i ",t.jsx("code",{children:"#"})," indiquen la visibilitat."]})}),t.jsx(_e,{src:"classes-animal",title:"Classe Animal"}),t.jsx(C,{title:"Relacions entre classes"}),t.jsx(b,{variant:"info",children:t.jsx("p",{children:"Les relacions entre classes son la part mes important d'un diagrama de classes. Indiquen com les classes interactuen entre elles i quines dependencies existeixen."})}),t.jsx(re,{headers:["Relacio","Simbol UML","Significat","Exemple"],rows:[{cells:["Herencia","<|--",'"es un"',"Gos extends Animal: un Gos ES UN Animal"]},{cells:["Composicio","*--",'"te un" (fort)',"Cotxe conte Motor: si el Cotxe desapareix, el Motor tambe"]},{cells:["Agregacio","o--",'"te un" (debil)',"Equip conte Jugadors: els Jugadors existeixen sense l'Equip"]},{cells:["Associacio","-->",'"usa"',"Professor ensenya Alumne: es relacionen pero son independents"]},{cells:["Dependencia","..>",'"usa temporalment"',"Un metode rep un objecte com a parametre"]}]}),t.jsx(C,{title:"Exemple: Herencia"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["La ",t.jsx("strong",{children:"herencia"})," es representa amb una fletxa buida que apunta de la classe filla cap a la classe pare. En aquest exemple, ",t.jsx("code",{children:"Gos"})," i ",t.jsx("code",{children:"Gat"})," hereten de ",t.jsx("code",{children:"Animal"}),". Les classes filles tenen els seus propis metodes (",t.jsx("code",{children:"bordar()"})," i ",t.jsx("code",{children:"miolar()"}),") a mes dels heretats."]})}),t.jsx(_e,{src:"classes-herencia",title:"Herencia: Animal, Gos i Gat"}),t.jsx(C,{title:"Exemple complet: Sistema de Biblioteca"}),t.jsxs(b,{variant:"explanation",children:[t.jsx("p",{children:"Aquest diagrama mostra el sistema de biblioteca que ja coneixem del curs. Fixa't en:"}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Composicio"})," (",t.jsx("code",{children:"*--"}),"): la Biblioteca ",t.jsx("em",{children:"conte"})," Llibres. Si la Biblioteca desapareix, els seus Llibres tambe."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Associacio"})," (",t.jsx("code",{children:"-->"}),"): cada Llibre ",t.jsx("em",{children:"esta escrit per"})," un Autor. L'Autor existeix independentment del Llibre."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Multiplicitat"}),": ",t.jsx("code",{children:'"1"'})," i ",t.jsx("code",{children:'"0..*"'})," indiquen quants objectes participen en la relacio (una Biblioteca te de 0 a molts Llibres)."]})]})]}),t.jsx(_e,{src:"classes-biblioteca",title:"Sistema de Biblioteca"}),t.jsx(C,{title:"Exemple avancat: Sistema RPG"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["Un exemple mes complex d'un sistema de gestio de campanyes RPG (joc de rol). Fixa't en com combina ",t.jsx("strong",{children:"herencia"})," (Character amb PlayableCharacter i NonPlayableCharacter), ",t.jsx("strong",{children:"composicio"})," (Campaign conte Sessions),",t.jsx("strong",{children:" enumeracions"})," (Availability) i ",t.jsx("strong",{children:"multiples associacions"}),"."]})}),t.jsx(_e,{src:"classes-rpg",title:"Sistema de Campanyes RPG"}),t.jsx(C,{title:"Com llegir un diagrama de classes"}),t.jsxs(ge,{children:[t.jsx(N,{title:"1. Llegeix de dalt a baix",variant:"blue",children:t.jsxs("p",{children:["Comenca per les classes mes ",t.jsx("strong",{children:"generals"})," (les pare) i baixa cap a les mes ",t.jsx("strong",{children:"especifiques"})," (les filles). Aixo et dona una visio general de la jerarquia."]})}),t.jsx(N,{title:"2. Segueix les fletxes",variant:"yellow",children:t.jsxs("p",{children:["Les fletxes indiquen les ",t.jsx("strong",{children:"relacions"})," entre classes. Fixa't en el tipus de fletxa (herencia, composicio, associacio) per entendre com es connecten."]})}),t.jsx(N,{title:"3. Comprova les multiplicitats",variant:"green",children:t.jsxs("p",{children:["Els numeros a les linies (",t.jsx("code",{children:"1"}),", ",t.jsx("code",{children:"0..*"}),", ",t.jsx("code",{children:"1..*"}),") indiquen ",t.jsx("strong",{children:"quants objectes"})," participen en cada relacio. Per exemple,",t.jsx("code",{children:" 1"})," a ",t.jsx("code",{children:"0..*"}),' vol dir "un a molts".']})}),t.jsx(N,{title:"4. Identifica la classe central",variant:"pink",children:t.jsxs("p",{children:["Busca la classe amb ",t.jsx("strong",{children:"mes relacions"}),": sol ser la classe principal del sistema. En l'exemple de la biblioteca, ",t.jsx("code",{children:"Biblioteca"})," es el nucli perque gestiona tot el sistema."]})})]}),t.jsx(b,{variant:"success",title:"Resum",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["Un ",t.jsx("strong",{children:"diagrama de classes"})," es el planol visual d'un sistema orientat a objectes."]}),t.jsxs("li",{children:["Cada classe es representa amb un ",t.jsx("strong",{children:"rectangle"})," amb tres seccions: nom, atributs i metodes."]}),t.jsxs("li",{children:["La ",t.jsx("strong",{children:"visibilitat"})," s'indica amb ",t.jsx("code",{children:"+"})," (public), ",t.jsx("code",{children:"-"})," (private) i ",t.jsx("code",{children:"#"})," (protected)."]}),t.jsxs("li",{children:["Les ",t.jsx("strong",{children:"relacions"})," principals son: herencia, composicio, agregacio, associacio i dependencia."]}),t.jsxs("li",{children:["Les ",t.jsx("strong",{children:"multiplicitats"})," indiquen quants objectes participen en una relacio."]}),t.jsxs("li",{children:["Sempre es recomanable ",t.jsx("strong",{children:"dissenyar el diagrama abans de programar"}),"."]})]})})]})}const yE=`public class Salutador {
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
}`,SE=`public class Main {
    public static void main(String[] args) {
        // 1. Crear l'objecte Salutador
        Salutador s = new Salutador("catala");

        // 2. Cridar el metode saludar()
        String missatge = s.saludar("Maria");

        // 3. Mostrar el resultat
        System.out.println(missatge);
        // Sortida: Hola, Maria!
    }
}`;function wE(){return t.jsxs("div",{children:[t.jsx(C,{title:"Diagrames de Sequencia UML"}),t.jsxs(b,{variant:"explanation",title:"Que es un diagrama de sequencia?",children:[t.jsxs("p",{children:["Un ",t.jsx("strong",{children:"diagrama de sequencia"})," mostra l'",t.jsx("strong",{children:"ordre"})," de les interaccions entre objectes al llarg del temps. L'eix vertical representa el",t.jsx("strong",{children:" temps"})," (de dalt a baix) i l'eix horitzontal representa els",t.jsx("strong",{children:" objectes"})," que participen en la interaccio."]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Mentre que el diagrama de classes mostra l'",t.jsx("em",{children:"estructura"})," (que hi ha), el diagrama de sequencia mostra el ",t.jsx("em",{children:"comportament"})," (que passa i en quin ordre)."]})]}),t.jsx(C,{title:"Elements d'un diagrama de sequencia"}),t.jsx(re,{headers:["Element","Representacio","Descripcio"],rows:[{cells:["Actor / Participant","Rectangle a la part superior","Un objecte o classe que participa en la interaccio"]},{cells:["Linia de vida (lifeline)","Linia vertical discontinua","Representa l'existencia de l'objecte al llarg del temps"]},{cells:["Missatge sincron","Fletxa continua (->>) ","Una crida a un metode que espera resposta"]},{cells:["Missatge de resposta","Fletxa discontinua (-->>)","El valor de retorn d'una crida"]},{cells:["Caixa d'activacio","Rectangle prim sobre la linia de vida","Indica que l'objecte esta executant una operacio"]},{cells:["Nota (note)","Rectangle amb cantonada doblegada","Comentari o aclariment sobre la interaccio"]},{cells:["Fragment alt/else","Rectangle amb etiqueta","Representa una estructura condicional (if/else)"]},{cells:["Fragment loop","Rectangle amb etiqueta loop","Representa un bucle (while/for)"]}]}),t.jsx(C,{title:"Exemple basic: Saludar"}),t.jsxs(b,{variant:"info",children:[t.jsxs("p",{children:["Aquest diagrama mostra la interaccio entre el ",t.jsx("code",{children:"Main"})," i un objecte",t.jsx("code",{children:" Salutador"}),". Llegeix-lo de dalt a baix per seguir l'ordre de les crides:"]}),t.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("code",{children:"Main"})," crea un nou ",t.jsx("code",{children:"Salutador"}),` amb l'idioma "catala"`]}),t.jsxs("li",{children:[t.jsx("code",{children:"Main"})," crida el metode ",t.jsx("code",{children:'saludar("Maria")'})]}),t.jsxs("li",{children:[t.jsx("code",{children:"Salutador"}),' retorna el text "Hola, Maria!"']}),t.jsxs("li",{children:[t.jsx("code",{children:"Main"})," imprimeix el resultat per consola"]})]})]}),t.jsx(_e,{src:"seq-saludar",title:"Diagrama de sequencia: Saludar"}),t.jsx(C,{title:"Exemple: Prestar un llibre"}),t.jsxs(b,{variant:"explanation",children:[t.jsx("p",{children:"Aquest diagrama mostra la sequencia d'interaccions quan es vol prestar un llibre de la biblioteca. Fixa't com:"}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["El ",t.jsx("code",{children:"Main"})," primer ",t.jsx("strong",{children:"busca"})," el llibre i despres el ",t.jsx("strong",{children:"presta"}),"."]}),t.jsxs("li",{children:["La ",t.jsx("code",{children:"Biblioteca"})," delega l'operacio de prestec al propi ",t.jsx("code",{children:"Llibre"}),"."]}),t.jsxs("li",{children:["El ",t.jsx("code",{children:"Llibre"})," actualitza el seu estat intern (",t.jsx("code",{children:"disponible = false"}),")."]}),t.jsxs("li",{children:["La ",t.jsx("strong",{children:"nota"})," al final aclareix l'estat final del sistema."]})]})]}),t.jsx(_e,{src:"seq-biblioteca",title:"Diagrama de sequencia: Prestar un llibre"}),t.jsx(C,{title:"Exemple amb condicionals (alt/else)"}),t.jsx(b,{variant:"info",children:t.jsxs("p",{children:["Els diagrames de sequencia tambe poden representar ",t.jsx("strong",{children:"decisions condicionals"})," amb els fragments ",t.jsx("code",{children:"alt"})," (alternativa) i ",t.jsx("code",{children:"else"}),". Funcionen com un",t.jsx("code",{children:" if/else"})," en Java: segons la condicio, s'executa un cami o un altre."]})}),t.jsx(_e,{src:"seq-condicional",title:"Diagrama de sequencia: Divisio amb control d'error"}),t.jsx(C,{title:"Exemple avancat: Sistema HydroFlow"}),t.jsxs(b,{variant:"explanation",children:[t.jsxs("p",{children:["Un exemple professional amb ",t.jsx("strong",{children:"activacions"})," (barres verticals que mostren quan un objecte esta treballant) i un fragment ",t.jsx("strong",{children:"loop"})," (bucle). L'operador demana reomplir el tanc, el sistema comprova el nivell d'aigua i repeteix l'operacio fins que arriba al minim."]}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"activate/deactivate"}),": mostren quan un objecte esta processant una crida"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"loop"}),": repeteix el bloc mentre ",t.jsx("code",{children:"waterLevel < MIN"})]}),t.jsxs("li",{children:["Les ",t.jsx("strong",{children:"fletxes numerades"})," indiquen l'ordre temporal"]})]})]}),t.jsx(_e,{src:"seq-hydroflow",title:"Sistema HydroFlow (amb loop i activacions)"}),t.jsx(b,{variant:"warning",title:"Fragments comuns",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"alt / else"}),": condicional (if/else). Nomes s'executa un dels camins."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"loop"}),": repeticio (for/while). El bloc es repeteix mentre es compleixi la condicio."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"opt"}),": opcional (if sense else). El bloc s'executa nomes si es compleix la condicio."]})]})}),t.jsx(C,{title:"Relacio amb el codi Java"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["Cada ",t.jsx("strong",{children:"fletxa"})," del diagrama de sequencia correspon a una ",t.jsx("strong",{children:"linia de codi"})," Java. Vegem com es tradueix l'exemple del Salutador:"]})}),t.jsxs(fe,{children:[t.jsx(W,{title:"Codi Java",variant:"blue",children:t.jsx(y,{code:SE,showLineNumbers:!0})}),t.jsx(W,{title:"Correspondencia amb el diagrama",variant:"good",children:t.jsx(re,{headers:["Linia de codi","Fletxa al diagrama"],rows:[{cells:['new Salutador("catala")','Main ->> Salutador: new Salutador("catala")']},{cells:['s.saludar("Maria")','Main ->> Salutador: saludar("Maria")']},{cells:['return "Hola, Maria!"','Salutador -->> Main: "Hola, Maria!"']},{cells:["System.out.println()","Main ->> Main: System.out.println()"]}]})})]}),t.jsx(y,{label:"Classe Salutador completa",code:yE,showLineNumbers:!0}),t.jsx(C,{title:"Quan usar diagrames de sequencia?"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Depurar fluxos complexos",variant:"blue",children:t.jsxs("p",{children:["Quan un programa te moltes classes que interactuen entre elles, un diagrama de sequencia ajuda a ",t.jsx("strong",{children:"visualitzar l'ordre"})," de les crides i trobar errors de logica."]})}),t.jsx(N,{title:"Documentar APIs",variant:"yellow",children:t.jsxs("p",{children:["Quan dissenyes un sistema amb multiples components, els diagrames de sequencia documenten ",t.jsx("strong",{children:"com es comuniquen"})," entre ells i quines dades s'intercanvien."]})}),t.jsx(N,{title:"Entendre codi existent",variant:"green",children:t.jsxs("p",{children:["Quan arribes a un projecte nou, dibuixar un diagrama de sequencia t'ajuda a",t.jsx("strong",{children:" comprendre el flux"})," del programa sense haver de llegir tot el codi."]})}),t.jsx(N,{title:"Planificar noves funcionalitats",variant:"pink",children:t.jsxs("p",{children:["Abans de programar una nova funcionalitat, dibuixa el diagrama de sequencia per",t.jsx("strong",{children:" planificar"})," quins objectes necessites i com interactuaran."]})})]}),t.jsx(b,{variant:"success",title:"Resum",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["Un ",t.jsx("strong",{children:"diagrama de sequencia"})," mostra l'ordre de les interaccions entre objectes al llarg del temps."]}),t.jsxs("li",{children:["L'eix ",t.jsx("strong",{children:"vertical"})," representa el temps i l'eix ",t.jsx("strong",{children:"horitzontal"})," els objectes participants."]}),t.jsxs("li",{children:["Les ",t.jsx("strong",{children:"fletxes continues"})," representen crides a metodes; les ",t.jsx("strong",{children:"fletxes discontinues"})," representen valors de retorn."]}),t.jsxs("li",{children:["Les ",t.jsx("strong",{children:"activacions"})," mostren quan un objecte esta processant una operacio."]}),t.jsxs("li",{children:["Els fragments ",t.jsx("code",{children:"alt/else"}),", ",t.jsx("code",{children:"loop"})," i ",t.jsx("code",{children:"opt"})," permeten representar ",t.jsx("strong",{children:"condicionals i bucles"}),"."]}),t.jsxs("li",{children:["Cada fletxa del diagrama correspon a una ",t.jsx("strong",{children:"linia de codi"})," Java."]})]})})]})}function EE(){return t.jsxs("div",{children:[t.jsx(C,{title:"Diagrames de flux"}),t.jsxs(b,{variant:"info",title:"Que es un diagrama de flux?",children:[t.jsxs("p",{children:["Un ",t.jsx("strong",{children:"diagrama de flux"})," representa el ",t.jsx("strong",{children:"flux d'un algorisme"})," o proces pas a pas, de manera visual. Es una eina essencial per ",t.jsx("strong",{children:"planificar abans de programar"}),", ja que ens permet veure l'estructura logica del programa sense escriure codi."]}),t.jsx("p",{style:{marginTop:"8px"},children:"Cada forma geometrica representa un tipus d'accio diferent, i les fletxes indiquen l'ordre d'execucio."})]}),t.jsx(C,{title:"Simbols estandard"}),t.jsx(re,{headers:["Forma","Nom","Significat"],rows:[{cells:["Oval / Rectangle arrodonit","Inici / Fi","Marca el punt d'inici o de finalitzacio del flux"]},{cells:["Rectangle","Proces / Accio","Representa una instruccio o operacio (assignacio, calcul...)"]},{cells:["Rombe (Diamond)","Decisio / Condicio","Representa una pregunta amb dues sortides: Si o No"]},{cells:["Parallelogram","Entrada / Sortida","Llegir dades de l'usuari o mostrar resultats per pantalla"]},{cells:["Fletxa","Flux / Direccio","Indica l'ordre en que s'executen les accions"]}]}),t.jsx(C,{title:"Exemple: Nombre parell o senar"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["Un flux senzill amb una ",t.jsx("strong",{children:"decisio"}),": llegim un numero i comprovem si es parell o senar mitjancant l'operador modul (%)."]})}),t.jsx(_e,{src:"flux-parell-senar",title:"Flux: Nombre parell o senar"}),t.jsx(C,{title:"Exemple: Bucle for"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["Un bucle ",t.jsx("strong",{children:"for"})," es representa amb una decisio que torna enrere. Mentre la condicio es certa, es processa l'element i s'incrementa el comptador. Quan la condicio es falsa, el flux surt del bucle."]})}),t.jsx(_e,{src:"flux-bucle-for",title:"Flux: Bucle for sobre un array"}),t.jsx(C,{title:"Exemple: Calcul de nota final"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["Un exemple mes complex amb ",t.jsx("strong",{children:"multiples decisions encadenades"}),". Primer calculem la mitjana de tres notes i despres avaluem el resultat amb condicions niuades."]})}),t.jsx(_e,{src:"flux-nota-final",title:"Flux: Calcul de nota final"}),t.jsx(C,{title:"Exemple avancat: Sistema de Login"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["Un diagrama mes realista que combina ",t.jsx("strong",{children:"bucles"}),", ",t.jsx("strong",{children:"decisions niuades"})," i",t.jsx("strong",{children:" multiples camins"}),". El sistema demana credencials, verifica l'usuari i la contrasenya, i bloqueja el compte despres de 3 intents fallits."]})}),t.jsx(_e,{src:"flux-login",title:"Flux: Sistema de Login amb control d'intents"}),t.jsx(C,{title:"Del diagrama al codi"}),t.jsx(b,{variant:"info",title:"Cada forma te el seu equivalent en Java",children:t.jsx("p",{children:"La gran utilitat dels diagrames de flux es que es poden traduir directament a codi. Cada simbol del diagrama correspon a una estructura del llenguatge de programacio."})}),t.jsx(re,{headers:["Simbol del diagrama","Estructura en Java"],rows:[{cells:["Oval (Inici/Fi)","Inici i fi del metode main()"]},{cells:["Rectangle (Proces)","Instruccio o assignacio (variable = valor;)"]},{cells:["Rombe (Decisio)","Estructura condicional (if / else if / else)"]},{cells:["Parallelogram (Entrada)","Scanner per llegir dades (scanner.nextInt())"]},{cells:["Parallelogram (Sortida)","System.out.println() per mostrar resultats"]},{cells:["Fletxa que torna enrere","Bucle (for, while)"]}]}),t.jsx(y,{label:"Codi Java equivalent al diagrama de nota final",showLineNumbers:!0,code:`import java.util.Scanner;

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
}`}),t.jsx(C,{title:"Bones practiques"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Inici i Fi clars",variant:"blue",children:t.jsxs("p",{children:["Sempre comenca amb un simbol d'",t.jsx("strong",{children:"Inici"})," i acaba amb un simbol de ",t.jsx("strong",{children:"Fi"}),". Tot flux ha de tenir un principi i un final ben definits."]})}),t.jsx(N,{title:"Un sol flux d'entrada",variant:"yellow",children:t.jsxs("p",{children:["Cada simbol ha de tenir ",t.jsx("strong",{children:"un sol flux d'entrada"}),". Pot tenir multiples sortides (com les decisions), pero nomes una entrada."]})}),t.jsx(N,{title:"Decisions amb 2 sortides",variant:"green",children:t.jsxs("p",{children:["Les decisions (rombes) han de tenir ",t.jsx("strong",{children:"exactament 2 sortides"}),": una per ",t.jsx("strong",{children:"Si"})," i una per ",t.jsx("strong",{children:"No"}),". Si necessites mes opcions, encadena multiples decisions."]})}),t.jsx(N,{title:"Direccio consistent",variant:"pink",children:t.jsxs("p",{children:["El flux ha d'anar de ",t.jsx("strong",{children:"dalt a baix"})," i d'",t.jsx("strong",{children:"esquerra a dreta"}),". Aixo fa que el diagrama sigui intuitiu i facil de llegir."]})})]}),t.jsx(b,{variant:"success",title:"Resum",children:t.jsx("p",{children:"Els diagrames de flux son una eina fonamental per planificar algorismes abans d'escriure codi. Cada forma geometrica representa un tipus d'accio (proces, decisio, entrada/sortida) i les fletxes marquen l'ordre d'execucio. Aprendre a llegir-los i crear-los es el primer pas per pensar com un programador."})})]})}function CE(){return t.jsxs("div",{children:[t.jsx(C,{title:"Diagrames de casos d'us"}),t.jsxs(b,{variant:"info",title:"Que es un diagrama de casos d'us?",children:[t.jsxs("p",{children:["Un ",t.jsx("strong",{children:"diagrama de casos d'us"})," mostra ",t.jsx("strong",{children:"QUE"})," fa un sistema des de la perspectiva de l'usuari. ",t.jsx("strong",{children:"No"})," mostra COM ho fa (aixo ho fan altres diagrames com els de flux o els de sequencia)."]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Identifica els ",t.jsx("strong",{children:"actors"})," (qui utilitza el sistema) i les seves",t.jsx("strong",{children:" interaccions"})," amb les funcionalitats del sistema. Es el primer diagrama que es fa quan s'analitzen els requisits d'un projecte."]})]}),t.jsx(C,{title:"Elements d'un diagrama de casos d'us"}),t.jsx(re,{headers:["Element","Representacio","Descripcio"],rows:[{cells:["Actor","Figura de pal (stick figure)","Qui utilitza el sistema: persona, altre sistema o dispositiu"]},{cells:["Cas d'us","Oval / El·lipse","Una funcionalitat que el sistema ofereix a l'actor"]},{cells:["Sistema","Rectangle gran","El limit del sistema; els casos d'us van dins, els actors fora"]},{group:"Tipus de relacions"},{cells:["Associacio","Linia continua","Connecta un actor amb un cas d'us que utilitza"]},{cells:["<<include>>","Fletxa discontinua amb <<include>>","Un cas d'us SEMPRE inclou un altre (obligatori)"]},{cells:["<<extend>>","Fletxa discontinua amb <<extend>>","Un cas d'us OPCIONALMENT amplia un altre (condicional)"]}]}),t.jsx(C,{title:"Exemple: Sistema de Biblioteca"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["Vegem un exemple complet amb dos actors (",t.jsx("strong",{children:"Bibliotecari"})," i ",t.jsx("strong",{children:"Alumne"}),"). Fixa't que ",t.jsx("strong",{children:"Buscar llibre"})," es un cas d'us compartit entre els dos actors, i que ",t.jsx("strong",{children:"Prestar llibre"})," inclou obligatoriament",t.jsx("strong",{children:" Verificar disponibilitat"}),"."]})}),t.jsx(_e,{src:"casosus-biblioteca",title:"Casos d'us: Sistema de Biblioteca"}),t.jsx(C,{title:"Exemple: Calculadora"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["Un exemple mes senzill amb un sol actor i una relacio",t.jsx("strong",{children:" <<extend>>"}),": la divisio pot provocar un error si es divideix per zero, pero no sempre. Per tant es una extensio condicional."]})}),t.jsx(_e,{src:"casosus-calculadora",title:"Casos d'us: Calculadora"}),t.jsx(C,{title:"Exemple complet: Restaurant"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["Un exemple mes realista amb ",t.jsx("strong",{children:"tres actors"})," (Client, Cambrer, Administrador) i multiples relacions. Observa com cada actor te funcionalitats propies i algunes son compartides. Aquest tipus de diagrama es el que es faria al comenar a analitzar un sistema de gestio de restaurant."]})}),t.jsx(_e,{src:"casosus-restaurant",title:"Casos d'us: Sistema de Reserves Restaurant"}),t.jsx(C,{title:"Include vs Extend"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["Diferenciar ",t.jsx("strong",{children:"<<include>>"})," i",t.jsx("strong",{children:" <<extend>>"})," es un dels conceptes clau dels diagrames de casos d'us. Vegem-ne la comparacio:"]})}),t.jsxs(fe,{children:[t.jsxs(W,{title:"<<include>> (Inclusio)",variant:"good",children:[t.jsxs("p",{style:{marginTop:"8px"},children:["El cas d'us inclos s'executa ",t.jsx("strong",{children:"SEMPRE"}),". Es una relacio ",t.jsx("strong",{children:"obligatoria"}),"."]}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Prestar llibre"})," inclou ",t.jsx("strong",{children:"Verificar disponibilitat"})]}),t.jsx("li",{children:"No es pot prestar un llibre sense verificar primer si esta disponible"}),t.jsx("li",{children:"La verificacio passa CADA vegada"})]}),t.jsx(y,{code:`// En codi seria com:
void prestarLlibre() {
    verificarDisponibilitat(); // SEMPRE
    // ... prestar el llibre
}`})]}),t.jsxs(W,{title:"<<extend>> (Extensio)",variant:"bad",children:[t.jsxs("p",{style:{marginTop:"8px"},children:["El cas d'us estes s'executa ",t.jsx("strong",{children:"OPCIONALMENT"}),", nomes si es compleix una condicio. Es una relacio ",t.jsx("strong",{children:"condicional"}),"."]}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Dividir"})," pot estendre ",t.jsx("strong",{children:"Mostrar error"})]}),t.jsx("li",{children:"L'error nomes apareix si el divisor es zero"}),t.jsx("li",{children:"La majoria de vegades NO passa"})]}),t.jsx(y,{code:`// En codi seria com:
void dividir(int a, int b) {
    if (b == 0) {
        mostrarError(); // NOMES si b == 0
        return;
    }
    System.out.println(a / b);
}`})]})]}),t.jsx(C,{title:"Per a que serveixen?"}),t.jsxs(ge,{children:[t.jsx(N,{title:"Entendre requisits",variant:"blue",children:t.jsxs("p",{children:["Permeten ",t.jsx("strong",{children:"entendre els requisits"})," del sistema abans de comencar a programar. Defineixen clarament que ha de fer el sistema i qui ho utilitza."]})}),t.jsx(N,{title:"Comunicar-se amb el client",variant:"yellow",children:t.jsxs("p",{children:["Son un ",t.jsx("strong",{children:"llenguatge visual"})," que tant els programadors com els clients poden entendre. Faciliten la comunicacio i eviten malentesos sobre les funcionalitats."]})}),t.jsx(N,{title:"Planificar funcionalitats",variant:"green",children:t.jsxs("p",{children:["Ajuden a ",t.jsx("strong",{children:"planificar les funcionalitats"})," del sistema de manera organitzada. Permeten prioritzar que es desenvolupa primer i distribuir la feina entre l'equip."]})}),t.jsx(N,{title:"Base per a altres diagrames UML",variant:"pink",children:t.jsxs("p",{children:["Son la ",t.jsx("strong",{children:"base per als altres diagrames UML"}),": diagrames de classes, de sequencia, d'activitats... Cada cas d'us es pot detallar amb diagrames mes especifics."]})})]}),t.jsx(b,{variant:"success",title:"Resum",children:t.jsxs("p",{children:["Els diagrames de casos d'us mostren ",t.jsx("strong",{children:"QUE"})," fa un sistema des de la perspectiva dels usuaris. Identifiquen actors, funcionalitats i les relacions entre ells (associacio, include i extend). Son el primer pas per analitzar i planificar un projecte de programari, i serveixen com a pont de comunicacio entre l'equip de desenvolupament i el client."]})})]})}function RE(){return t.jsxs("div",{children:[t.jsx(C,{title:"Com es construeix un projecte real, pas a pas"}),t.jsx(b,{variant:"info",title:"Objectiu d'aquesta pagina",children:t.jsxs("p",{children:["No nomes veurem ",t.jsx("strong",{children:"QUE"})," te un projecte real, sino",t.jsx("strong",{children:" COM es planteja des de zero"}),": que es fa primer, per que cada package existeix, que fa cada classe i com flueix l'execucio. Seguirem l'exemple d'un ",t.jsx("strong",{children:"Sistema de Reserves de Restaurant"}),"."]})}),t.jsx(C,{title:"Pas 1: Analitzar els requisits"}),t.jsxs(b,{variant:"explanation",title:"Abans de programar: entendre el PROBLEMA",children:[t.jsxs("p",{children:["El primer que fa un equip professional ",t.jsx("strong",{children:"NO es obrir l'IDE"}),". Es seure amb el client (el propietari del restaurant) i preguntar:",t.jsx("strong",{children:" que necessita exactament?"})," Aixo s'anomena",t.jsx("strong",{children:" analisi de requisits"}),"."]}),t.jsx("p",{style:{marginTop:"8px"},children:"Sense aquest pas, construiries una casa sense planols. El resultat seria un desastre."})]}),t.jsxs(b,{variant:"info",title:"Preguntes que fem al client",children:[t.jsx("p",{children:t.jsx("strong",{children:"Funcionalitats basiques:"})}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[t.jsx("li",{children:"Els clients han de poder fer reserves per telefon o web?"}),t.jsx("li",{children:"El cambrer ha de poder veure les reserves del dia?"}),t.jsx("li",{children:"L'administrador ha de poder gestionar el menu i els plats?"}),t.jsx("li",{children:"S'ha de poder fer comandes i associar-les a una taula?"}),t.jsx("li",{children:"Cal generar factures o tiquets?"})]}),t.jsx("p",{style:{marginTop:"12px"},children:t.jsx("strong",{children:"Informacio que necessitem guardar:"})}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[t.jsx("li",{children:"Dades dels clients: nom, telefon, email"}),t.jsx("li",{children:"Dades de les taules: numero, capacitat, si esta disponible"}),t.jsx("li",{children:"Dades de les reserves: qui, quan, quantes persones"}),t.jsx("li",{children:"Dades del menu: plats, preus, categories"}),t.jsx("li",{children:"Dades de les comandes: quins plats ha demanat cada taula"})]})]}),t.jsxs(b,{variant:"explanation",title:"El resultat: una llista clara de funcionalitats",children:[t.jsxs("p",{children:["Despres de parlar amb el client, tenim una llista de ",t.jsx("strong",{children:"funcionalitats"})," (requisits):"]}),t.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsx("li",{children:"Crear, consultar i cancel·lar reserves"}),t.jsx("li",{children:"Veure taules disponibles per a una data i nombre de persones"}),t.jsx("li",{children:"Gestionar el menu (afegir, modificar, eliminar plats)"}),t.jsx("li",{children:"Crear comandes associades a una taula"}),t.jsx("li",{children:"Calcular el total d'una comanda"})]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Amb aixo ja sabem ",t.jsx("strong",{children:"QUE"})," hem de construir. Ara hem de decidir ",t.jsx("strong",{children:"COM"}),"."]})]}),t.jsx(C,{title:"Pas 2: Identificar les entitats (les dades)"}),t.jsxs(b,{variant:"explanation",title:"Quins 'objectes del mon real' te el nostre sistema?",children:[t.jsxs("p",{children:["Mirem la llista de requisits i subratllem els ",t.jsx("strong",{children:"substantius"}),": restaurant, ",t.jsx("strong",{children:"taula"}),", ",t.jsx("strong",{children:"client"}),", ",t.jsx("strong",{children:"reserva"}),", menu, ",t.jsx("strong",{children:"plat"}),", ",t.jsx("strong",{children:"comanda"}),". Cada substantiu es una",t.jsx("strong",{children:" classe candidata"})," per al nostre model."]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Aquesta tecnica s'anomena ",t.jsx("strong",{children:"analisi de substantius"})," i es el que fan els arquitectes de programari com a primer pas de disseny."]})]}),t.jsx(re,{headers:["Classe","Que representa","Atributs principals","Per que existeix"],rows:[{cells:["Restaurant","El restaurant sencer","nom, adreca, List<Taula>, Menu","Es el contenidor principal. Encapsula tot el sistema."]},{cells:["Taula","Una taula fisica del restaurant","numero, capacitat, ocupada","Necessitem saber si una taula pot acollir X persones i si esta lliure."]},{cells:["Client","Una persona que fa una reserva","nom, telefon, email","Cal guardar qui ha fet cada reserva per poder contactar-lo."]},{cells:["Reserva","Una reserva concreta","client, taula, data, persones, confirmada","Es la relacio entre un client i una taula en una data."]},{cells:["Plat","Un plat del menu","nom, preu, categoria, disponible","Cal saber que es pot demanar i a quin preu."]},{cells:["Menu","La carta del restaurant","List<Plat>","Agrupa tots els plats i permet filtrar-los per categoria."]},{cells:["Comanda","El que ha demanat una taula","taula, List<LiniaComanda>, tancada","Associa els plats demanats a una taula concreta."]},{cells:["LiniaComanda","Un plat dins d'una comanda","plat, quantitat","Necessitem saber QUANTS de cada plat s'han demanat."]}]}),t.jsx(b,{variant:"info",title:"Per que LiniaComanda i no directament una llista de plats?",children:t.jsxs("p",{children:["Si una taula demana 3 amanides, no volem guardar el plat 3 vegades. Guardem una ",t.jsx("code",{children:"LiniaComanda"}),` amb el plat i la quantitat. Es el mateix concepte que una linia d'un tiquet de compra: "3x Amanida Cesar = 28.50€". Aixo es un bon exemple de `,t.jsx("strong",{children:"disseny pensat"}),": cada classe modela exactament la realitat."]})}),t.jsx(C,{title:"Pas 3: Dissenyar les relacions entre classes"}),t.jsx(b,{variant:"explanation",children:t.jsxs("p",{children:["Ara que tenim les classes, necessitem saber ",t.jsx("strong",{children:"com es relacionen"}),". Un Restaurant ",t.jsx("strong",{children:"te"})," taules (composicio). Una Reserva ",t.jsx("strong",{children:"referencia"}),"un Client i una Taula (associacio). Dibuixem el diagrama de classes:"]})}),t.jsx(_e,{src:"projecte-classes",title:"Diagrama de classes: Sistema Restaurant"}),t.jsx(b,{variant:"info",title:"Com llegir el diagrama",children:t.jsxs("p",{children:["La fletxa amb rombe negre (",t.jsx("strong",{children:"composicio"}),') vol dir que Restaurant "conte" taules: si el restaurant desapareix, les taules tambe. La fletxa simple (',t.jsx("strong",{children:"associacio"}),') vol dir que Reserva "referencia" un Client, pero el Client existeix independentment.']})}),t.jsx(C,{title:"Pas 4: Organitzar en packages (separacio per capes)"}),t.jsx(b,{variant:"explanation",title:"Per que no posem totes les classes juntes?",children:t.jsxs("p",{children:["Podriem posar les 8 classes en una sola carpeta i funcionaria. Pero quan el projecte creixi a 50, 100 o 200 classes, seria un ",t.jsx("strong",{children:"caos"}),". Per aixo separem el codi en ",t.jsx("strong",{children:"packages"})," (carpetes) segons la seva",t.jsx("strong",{children:" responsabilitat"}),". Cada package te una funcio molt clara."]})}),t.jsx(y,{label:"Estructura del codi font (src/main/java)",showLineNumbers:!0,code:`cat/lasalle/restaurant/
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
    └── ComandaController.java`}),t.jsx(re,{headers:["Package","Que conte","Per que existeix","Exemple de responsabilitat"],rows:[{cells:["model/","Classes de dades (entitats)","Definir COM son les dades del sistema. Nomes atributs, getters, setters, constructors.","Taula sap si esta ocupada o no, pero NO sap com guardar-se a una BD."]},{cells:["repository/","Classes d'acces a base de dades","Separar el COM es guarden les dades del QUE son. Si canvies de MySQL a PostgreSQL, nomes toques aqui.","ReservaRepository sap fer save(), findById(), delete() a la BD."]},{cells:["service/","Classes amb logica de negoci","Aqui van les REGLES del restaurant. Separar-les facilita testejar-les sense necessitar BD ni API.","ServeiReserves comprova si hi ha taula disponible ABANS de crear la reserva."]},{cells:["controller/","Classes que reben peticions",`Son el "punt d'entrada" del sistema. Reben peticions HTTP del frontend i deleguen al service.`,"ReservaController rep POST /api/reserves i crida a ServeiReserves."]}]}),t.jsx(b,{variant:"info",title:"La regla d'or: cada capa nomes parla amb la seguent",children:t.jsxs("p",{children:["El ",t.jsx("strong",{children:"Controller"})," crida al ",t.jsx("strong",{children:"Service"}),". El Service crida al ",t.jsx("strong",{children:"Repository"}),". El Repository accedeix a la ",t.jsx("strong",{children:"Base de Dades"}),".",t.jsx("strong",{children:" Mai al reves!"})," Un Repository no crida mai a un Controller. Un Model no crida mai a un Service. Aquesta disciplina es el que fa que el codi sigui ",t.jsx("strong",{children:"mantenible"})," quan el projecte creix."]})}),t.jsx(C,{title:"Pas 5: Implementar cada classe"}),t.jsxs(b,{variant:"explanation",title:"Ordre d'implementacio: de baix cap a dalt",children:[t.jsxs("p",{children:["Es comenca pel ",t.jsx("strong",{children:"model"})," (les dades) i es va pujant cap al",t.jsx("strong",{children:" controller"})," (el punt d'entrada). Per que? Perque cada capa",t.jsx("strong",{children:" depèn"})," de la inferior: no pots escriure el Service sense tenir el Model, i no pots escriure el Controller sense tenir el Service."]}),t.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Primer:"})," model/ (les classes de dades)"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Segon:"})," repository/ (com guardar/recuperar les dades)"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Tercer:"})," service/ (les regles de negoci)"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Quart:"})," controller/ (el punt d'entrada)"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Cinque:"})," RestaurantApp.java (el main que arrenca tot)"]})]})]}),t.jsx(C,{title:"5a. El Model: les classes de dades"}),t.jsx(b,{variant:"info",title:"Que fa cada classe del model i PER QUE",children:t.jsxs("p",{children:['Cada classe del model representa un "objecte del mon real". Nomes te:',t.jsx("strong",{children:" atributs privats"}),", ",t.jsx("strong",{children:"constructor"}),",",t.jsx("strong",{children:" getters/setters"})," i algun metode de logica simple. El Model ",t.jsx("strong",{children:"no sap res"})," de base de dades, ni d'API, ni de pantalles. Nomes modela les dades."]})}),t.jsx(y,{label:"model/Taula.java — Representa una taula fisica",showLineNumbers:!0,code:`public class Taula {
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
}`}),t.jsx(b,{variant:"explanation",title:"Per que el numero no te setter?",children:t.jsxs("p",{children:["Fixa't que ",t.jsx("code",{children:"numero"})," no te ",t.jsx("code",{children:"setNumero()"}),". Una taula del restaurant sempre sera la taula 5 o la taula 12: el numero no canvia. Aixo es ",t.jsx("strong",{children:"disseny intencional"}),": si un atribut no ha de canviar, no li posem setter. Aixi cap part del codi pot canviar-lo per accident."]})}),t.jsx(y,{label:"model/Client.java — Una persona que fa una reserva",showLineNumbers:!0,code:`public class Client {
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
}`}),t.jsx(y,{label:"model/Reserva.java — La relacio entre client, taula i data",showLineNumbers:!0,code:`import java.util.Date;

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
}`}),t.jsx(y,{label:"model/Plat.java + model/LiniaComanda.java + model/Comanda.java",showLineNumbers:!0,code:`// --- Plat.java ---
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
}`}),t.jsx(C,{title:"5b. El Repository: acces a la base de dades"}),t.jsx(b,{variant:"info",title:"Per que un package separat per a la base de dades?",children:t.jsxs("p",{children:["Imagina que ara guardes les dades a ",t.jsx("strong",{children:"MySQL"})," i d'aqui un any vols canviar a ",t.jsx("strong",{children:"PostgreSQL"}),". Si l'acces a la BD esta repartit per tot el codi, hauries de tocar desenes de fitxers. Pero si esta tot dins de",t.jsx("code",{children:" repository/"}),", nomes toques ",t.jsx("strong",{children:"3 fitxers"}),". Aixo es el poder de la ",t.jsx("strong",{children:"separacio per capes"}),"."]})}),t.jsx(y,{label:"repository/ReservaRepository.java — CRUD de reserves",showLineNumbers:!0,code:`import java.util.List;

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
}`}),t.jsx(b,{variant:"explanation",title:"CRUD: les 4 operacions basiques",children:t.jsxs("p",{children:["Gairebe tots els repositorys fan les mateixes 4 operacions:",t.jsx("strong",{children:" C"}),"reate (save), ",t.jsx("strong",{children:"R"}),"ead (find),",t.jsx("strong",{children:" U"}),"pdate (save), ",t.jsx("strong",{children:"D"}),"elete (delete). Aixo s'anomena ",t.jsx("strong",{children:"CRUD"})," i es la base de qualsevol aplicacio que gestiona dades."]})}),t.jsx(C,{title:"5c. El Service: la logica de negoci"}),t.jsx(b,{variant:"info",title:"Per que les regles van al Service i NO al Model?",children:t.jsxs("p",{children:["El Model (",t.jsx("code",{children:"Taula.java"}),") sap si esta ocupada, pero ",t.jsx("strong",{children:"no decideix"})," ","quina taula assignar a una reserva. Aquesta ",t.jsx("strong",{children:"decisio"})," (buscar taula lliure amb prou capacitat, crear la reserva, guardar-la) es ",t.jsx("strong",{children:"logica de negoci"})," ","i va al Service. Aixi el Model es manté simple i reutilitzable."]})}),t.jsx(y,{label:"service/ServeiReserves.java — Les REGLES del negoci",showLineNumbers:!0,code:`public class ServeiReserves {
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
}`}),t.jsxs(b,{variant:"explanation",title:"Fixa't en el flux del metode ferReserva()",children:[t.jsxs("p",{children:["Cada pas te un ",t.jsx("strong",{children:"per que"}),":"]}),t.jsxs("ol",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Buscar taula:"})," No podem assignar una taula sense comprovar que existeix i esta lliure."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Validar:"})," Si no n'hi ha, llançar un error clar (no retornar null silenciosament)."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Crear reserva + ocupar taula:"})," Les dues coses van juntes: si crees la reserva pero no ocupes la taula, una altra reserva podria agafar-la."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Guardar a BD:"})," Si no guardem, al reiniciar l'aplicacio es perdria tot."]})]})]}),t.jsx(C,{title:"5d. El Controller: el punt d'entrada"}),t.jsx(b,{variant:"info",title:"Que fa el Controller i per que existeix?",children:t.jsxs("p",{children:["El Controller es el ",t.jsx("strong",{children:"punt d'entrada"})," del sistema. Rep les peticions del frontend (web o app mobil), les ",t.jsx("strong",{children:"tradueix"})," a crides al Service, i retorna la resposta. El Controller ",t.jsx("strong",{children:"NO"})," conte logica de negoci: nomes fa de pont. Aixi, si demà vols canviar l'API REST per una interficie de consola, nomes toques el Controller."]})}),t.jsx(y,{label:"controller/ReservaController.java — Rep peticions HTTP",showLineNumbers:!0,code:`@RestController
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
}`}),t.jsx(C,{title:"Pas 6: El flux d'execucio complet"}),t.jsx(b,{variant:"explanation",title:"Que passa quan un client fa una reserva?",children:t.jsxs("p",{children:[`Seguim el cami complet des que l'usuari prem "Reservar" a l'app fins que rep la confirmacio. Cada capa fa la seva feina i `,t.jsx("strong",{children:"delega"}),"a la seguent."]})}),t.jsx(_e,{src:"projecte-seq-reserva",title:"Sequencia: Fer una reserva"}),t.jsx(re,{headers:["Pas","Que passa","Qui ho fa","Per que es fa aixi"],rows:[{cells:["1",`L'usuari prem "Reservar" a l'app`,"Frontend (React/Android)","L'app envia POST /api/reserves amb les dades del formulari"]},{cells:["2","El Controller rep la peticio HTTP","ReservaController","Tradueix el JSON a objectes Java i crida al Service"]},{cells:["3","El Service busca una taula disponible","ServeiReserves","Aplica les REGLES: prou capacitat? Esta lliure?"]},{cells:["4","El Service crea la reserva","ServeiReserves","Crea l'objecte Reserva i marca la taula com a ocupada"]},{cells:["5","El Repository guarda a la BD","ReservaRepository","Executa INSERT INTO reserves... per persistir les dades"]},{cells:["6","La resposta torna pel mateix cami","Controller → Frontend","El Controller retorna la Reserva creada com a JSON"]}]}),t.jsxs(b,{variant:"info",title:"Per que tantes capes? No seria mes facil fer-ho tot al Controller?",children:[t.jsx("p",{children:"Si. En un projecte petit, fer-ho tot al Controller funciona. Pero imagina que:"}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px"},children:[t.jsxs("li",{children:["Vols fer reserves tambe per ",t.jsx("strong",{children:"consola"}),", no nomes per web → Nomes crees un nou Controller, el Service ja existeix."]}),t.jsxs("li",{children:["Vols canviar la ",t.jsx("strong",{children:"base de dades"})," de MySQL a PostgreSQL → Nomes toques el Repository."]}),t.jsxs("li",{children:["Vols afegir una ",t.jsx("strong",{children:"regla nova"})," (ex: maxim 2 reserves per client) → Nomes toques el Service."]}),t.jsxs("li",{children:["Vols fer ",t.jsx("strong",{children:"tests"})," de la logica sense necessitar BD ni servidor → Testeja el Service directament."]})]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Cada capa es pot ",t.jsx("strong",{children:"canviar o testejar independentment"}),". En un equip de 50 persones, aixo es ",t.jsx("strong",{children:"imprescindible"}),"."]})]}),t.jsx(C,{title:"Pas 7: La resta del projecte (no nomes codi)"}),t.jsx(b,{variant:"explanation",title:"Un projecte no es nomes Java",children:t.jsx("p",{children:"A mes del codi font, un projecte professional te fitxers de configuracio, documentacio, tests i pipelines. Vegem l'estructura completa:"})}),t.jsx(y,{label:"Estructura completa del projecte (TOTS els fitxers)",showLineNumbers:!0,code:`restaurant-app/
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
└── docs/                           # Documentacio extra`}),t.jsx(re,{headers:["Fitxer","Que fa","Per que es important"],rows:[{group:"Configuracio del projecte"},{cells:["pom.xml","Llista de dependencies (Spring Boot, JUnit, driver BD) i com compilar",'Sense aixo, el projecte no compila. Es com la "llista de la compra"']},{cells:[".gitignore","Diu a Git quins fitxers ignorar: /target, .class, .env","Evita pujar fitxers compilats o secrets al repositori"]},{cells:["README.md","Documentacio: que fa el projecte, com instal·lar-lo, com executar-lo","El primer que llegeix qualsevol persona que arriba al projecte"]},{cells:["LICENSE","Llicencia legal del codi (MIT, Apache 2.0...)","Sense llicencia, legalment ningu pot usar el codi"]},{group:"Desplegament"},{cells:["Dockerfile","Instruccions per empaquetar l'app en un contenidor","Permet executar l'app en qualsevol servidor sense instal·lar res"]},{cells:["docker-compose.yml","Orquestra app + base de dades junts",'Amb un sol "docker-compose up" tens tot funcionant']},{group:"CI/CD"},{cells:[".github/workflows/ci.yml","Cada cop que fas push, executa tests automaticament","Si algu puja codi que trenca els tests, el sistema ho detecta"]},{group:"Recursos"},{cells:["application.properties","Configuracio: URL de la BD, port del servidor","MAI es puja al repo amb contrasenyes reals"]},{cells:["schema.sql","Estructura de les taules SQL de la BD","Defineix les taules: reserves, clients, plats, comandes..."]}]}),t.jsx(C,{title:"Arquitectura completa: Frontend + Backend + BD"}),t.jsx(b,{variant:"info",children:t.jsx("p",{children:"El projecte Java (backend) es nomes una part. L'aplicacio completa te tres capes que es comuniquen per HTTP:"})}),t.jsx(_e,{src:"projecte-arquitectura",title:"Arquitectura d'una aplicacio real"}),t.jsx(re,{headers:["Capa","Tecnologies tipiques","Que fa"],rows:[{cells:["Frontend (web)","React, Angular, Vue, HTML/CSS","La interficie visual que l'usuari veu al navegador"]},{cells:["Frontend (mobil)","Android (Kotlin/Java), iOS (Swift)","L'app que l'usuari descarrega al telefon"]},{cells:["Backend (API)","Spring Boot (Java), Node.js, Django","Processa peticions, aplica regles de negoci, accedeix a la BD"]},{cells:["Base de Dades","PostgreSQL, MySQL, MongoDB","Emmagatzema dades permanentment"]}]}),t.jsx(C,{title:"Com treballen equips de centenars de programadors?"}),t.jsx(b,{variant:"explanation",title:"El problema: centenars de persones tocant el mateix codi",children:t.jsxs("p",{children:["Imagineu un projecte com ",t.jsx("strong",{children:"java-design-patterns"})," a GitHub (93.800+ estrelles, centenars de contribuidors). Com eviten que tot peti? La resposta te quatre pilars: ",t.jsx("strong",{children:"Git amb branques"}),",",t.jsx("strong",{children:" Pull Requests"}),", ",t.jsx("strong",{children:"tests automatics"})," i",t.jsx("strong",{children:" CI/CD"}),"."]})}),t.jsx(C,{title:"1. Git Branching: cada un treballa en la seva branca"}),t.jsx(b,{variant:"info",children:t.jsxs("p",{children:[t.jsx("strong",{children:"NINGU"})," treballa directament sobre ",t.jsx("code",{children:"main"}),". Cada programador crea una ",t.jsx("strong",{children:"branca"})," per a cada funcionalitat. Aixi, els canvis d'una persona no afecten els altres fins que es revisen i s'aproven."]})}),t.jsx(_e,{src:"projecte-gitflow",title:"Flux de treball amb branques Git"}),t.jsx(re,{headers:["Branca","Per a que serveix","Qui hi treballa"],rows:[{cells:["main","Codi estable, llest per produccio. MAI es toca directament.","Ningu directament. Nomes rep merges aprovats."]},{cells:["develop","Integracio de funcionalitats en desenvolupament.","Es on es fusionen les feature branches aprovades."]},{cells:["feature/reserves","Una funcionalitat concreta.","Un programador o petit equip (2-3 persones)."]},{cells:["hotfix/bug-123","Corregir un error urgent en produccio.","El programador assignat al bug."]}]}),t.jsx(C,{title:"2. Pull Requests: revisio obligatoria"}),t.jsxs(b,{variant:"explanation",title:"Com funciona una Pull Request (PR)?",children:[t.jsxs("p",{children:["Quan un programador acaba, ",t.jsx("strong",{children:"no fusiona directament"}),". Obre una ",t.jsx("strong",{children:"Pull Request"})," a GitHub:",t.jsx("em",{children:' "He acabat, podeu revisar els meus canvis?"'})]}),t.jsxs("p",{style:{marginTop:"8px"},children:["Un o dos companys ",t.jsx("strong",{children:"revisen el codi"})," linia per linia, suggereixen millores i, si tot esta be, ",t.jsx("strong",{children:"aproven"})," la PR. Nomes llavors es pot fusionar."]})]}),t.jsxs(ge,{children:[t.jsx(N,{title:"El revisor comprova:",variant:"blue",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[t.jsx("li",{children:"El codi segueix les convencions de l'equip?"}),t.jsx("li",{children:"Hi ha tests per la nova funcionalitat?"}),t.jsx("li",{children:"El codi es clar i facil de mantenir?"}),t.jsx("li",{children:"No introdueix bugs ni vulnerabilitats?"})]})}),t.jsx(N,{title:"Regles habituals:",variant:"yellow",children:t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[t.jsx("li",{children:"Minim 1-2 aprovacions per fusionar"}),t.jsx("li",{children:"L'autor NO pot aprovar la seva propia PR"}),t.jsx("li",{children:"Tots els tests han de passar"}),t.jsxs("li",{children:["La branca ",t.jsx("code",{children:"main"})," esta protegida"]})]})})]}),t.jsx(C,{title:"3. Tests automatics: la xarxa de seguretat"}),t.jsx(y,{label:"Exemple: Test del ServeiReserves",showLineNumbers:!0,code:`class ServeiReservesTest {
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
}`}),t.jsx(re,{headers:["Tipus de test","Que prova","Exemple"],rows:[{cells:["Unitari","Una sola classe o metode, aillat","TaulaTest: comprova que potAcollir() funciona correctament"]},{cells:["Integracio","Multiples classes juntes","ServeiReservesTest: comprova que ferReserva() crea una reserva i ocupa la taula"]},{cells:["End-to-End","Tot el sistema, de frontend a BD","Simula un usuari fent una reserva des de l'app"]}]}),t.jsx(C,{title:"4. CI/CD: automatitzar tot el proces"}),t.jsxs(b,{variant:"explanation",title:"Que es CI/CD?",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"CI"})," (Continuous Integration): cada cop que algu fa push, automaticament s'executen els tests. Si falla algun, tothom ho sap immediatament."]}),t.jsxs("p",{style:{marginTop:"8px"},children:[t.jsx("strong",{children:"CD"})," (Continuous Deployment): si tots els tests passen, l'aplicacio es desplega automaticament al servidor."]})]}),t.jsx(_e,{src:"projecte-cicd",title:"Pipeline CI/CD"}),t.jsx(y,{label:".github/workflows/ci.yml (GitHub Actions)",showLineNumbers:!0,code:`name: CI Pipeline

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
        run: mvn package -DskipTests`}),t.jsx(C,{title:"Resum: els 7 passos per construir un projecte"}),t.jsxs(ge,{children:[t.jsx(N,{title:"1. Requisits",variant:"blue",children:t.jsxs("p",{children:["Parlar amb el client. Entendre ",t.jsx("strong",{children:"QUE"})," necessita. Fer una llista de funcionalitats."]})}),t.jsx(N,{title:"2. Entitats",variant:"yellow",children:t.jsxs("p",{children:['Identificar els "objectes del mon real" (substantius) que seran les nostres ',t.jsx("strong",{children:"classes"}),"."]})}),t.jsx(N,{title:"3. Relacions",variant:"green",children:t.jsxs("p",{children:["Dibuixar el ",t.jsx("strong",{children:"diagrama de classes"}),": qui conte qui, qui referencia qui."]})}),t.jsx(N,{title:"4. Packages",variant:"pink",children:t.jsxs("p",{children:["Organitzar en capes: ",t.jsx("strong",{children:"model → repository → service → controller"}),". Cada capa te una responsabilitat."]})}),t.jsx(N,{title:"5. Implementar",variant:"blue",children:t.jsx("p",{children:"Codi de baix a dalt: primer Model, despres Repository, despres Service, finalment Controller."})}),t.jsx(N,{title:"6. Tests",variant:"yellow",children:t.jsxs("p",{children:["Escriure tests per cada capa. Verificar que les ",t.jsx("strong",{children:"regles de negoci"})," funcionen correctament."]})}),t.jsx(N,{title:"7. Configuracio",variant:"green",children:t.jsxs("p",{children:["Afegir pom.xml, README, .gitignore, Dockerfile, CI/CD. Preparar per a ",t.jsx("strong",{children:"produccio"}),"."]})})]}),t.jsx(C,{title:"Projectes de referencia a GitHub"}),t.jsxs(fe,{children:[t.jsxs(W,{title:"java-design-patterns",variant:"blue",children:[t.jsx("p",{style:{marginTop:"8px"},children:t.jsx("code",{children:"github.com/iluwatar/java-design-patterns"})}),t.jsxs("p",{style:{marginTop:"8px"},children:[t.jsx("strong",{children:"93.800+ estrelles"})," - 195+ patrons de disseny en Java, cadascun amb tests, diagrames UML i documentacio. Patrons rellevants:",t.jsx("strong",{children:" Facade"}),", ",t.jsx("strong",{children:"Observer"}),",",t.jsx("strong",{children:" Strategy"}),", ",t.jsx("strong",{children:"Builder"}),"."]})]}),t.jsxs(W,{title:"Spring PetClinic",variant:"good",children:[t.jsx("p",{style:{marginTop:"8px"},children:t.jsx("code",{children:"github.com/spring-projects/spring-petclinic"})}),t.jsxs("p",{style:{marginTop:"8px"},children:["L'exemple oficial de ",t.jsx("strong",{children:"Spring Boot"}),": MVC complet amb controllers, services, repositories, templates HTML i base de dades."]})]})]}),t.jsx(b,{variant:"success",title:"La idea clau",children:t.jsxs("p",{children:["Construir un projecte real no es comencar a programar directament. Es",t.jsx("strong",{children:" analitzar"})," (que necessitem?), ",t.jsx("strong",{children:"dissenyar"}),"(quines classes i com es relacionen?), ",t.jsx("strong",{children:"organitzar"})," (cada package amb la seva responsabilitat) i ",t.jsx("strong",{children:"implementar"})," de baix cap a dalt. La separacio en capes (model → repository → service → controller) es el que permet que 50 programadors treballin al mateix projecte sense trepitjar-se, que el codi sigui testejable i que qualsevol canvi futur sigui facil de fer."]})})]})}function LE(){return t.jsxs("div",{children:[t.jsx(C,{title:"Introduccio al patro MVC"}),t.jsx(b,{variant:"explanation",title:"El problema: tot en un sol lloc",children:t.jsxs("p",{children:["Quan els projectes creixen, tenir-ho tot dins de ",t.jsx("code",{children:"main()"})," o en una sola classe es fa ",t.jsx("strong",{children:"ingobernable"}),". Ja ho hem vist a la seccio de modularitat: el codi monolitic es dificil de llegir, mantenir i ampliar. El patro",t.jsx("strong",{children:" MVC"})," porta la modularitzacio al seguent nivell, donant-nos una estructura clara per organitzar qualsevol aplicacio."]})}),t.jsx(b,{variant:"info",title:"Que es MVC?",children:t.jsxs("p",{children:[t.jsx("strong",{children:"Model-View-Controller"})," es un ",t.jsx("strong",{children:"patro"})," (no una biblioteca, no un framework) per organitzar el codi en ",t.jsx("strong",{children:"3 responsabilitats"})," ben definides. Es l'estandard en el desenvolupament web, aplicacions mobils i aplicacions d'escriptori. Gairebe tots els frameworks moderns es basen en aquesta idea."]})}),t.jsx(C,{title:"Les 3 parts de MVC"}),t.jsxs(ge,{children:[t.jsxs(N,{title:"Model",variant:"blue",children:["Les ",t.jsx("strong",{children:"dades"})," i la ",t.jsx("strong",{children:"logica de negoci"}),". Son les classes que ja coneixeu: ",t.jsx("code",{children:"Alumne"}),", ",t.jsx("code",{children:"Restaurant"}),",",t.jsx("code",{children:" Taula"}),"... El Model no sap res de la interficie: nomes gestiona dades i regles."]}),t.jsxs(N,{title:"View (Vista)",variant:"yellow",children:["El que ",t.jsx("strong",{children:"veu l'usuari"}),". En Java de consola:",t.jsx("code",{children:" System.out.println"}),". En web: HTML. En Android: XML layouts. La Vista ",t.jsx("strong",{children:"mostra dades"})," pero ",t.jsx("strong",{children:"no les processa"})," ni pren decisions."]}),t.jsxs(N,{title:"Controller",variant:"green",children:["El ",t.jsx("strong",{children:`"director d'orquestra"`}),". Rep les accions de l'usuari, demana dades al Model i diu a la Vista que ha de mostrar. Es el pont que connecta les dades amb la presentacio."]})]}),t.jsx(C,{title:"Analogia: un restaurant"}),t.jsxs(b,{variant:"explanation",title:"MVC es com un restaurant",children:[t.jsx("p",{children:"Imagineu un restaurant per entendre MVC:"}),t.jsxs("p",{style:{marginTop:"8px"},children:["El ",t.jsx("strong",{children:"client"})," (Usuari) demana al ",t.jsx("strong",{children:"cambrer"})," (Controller). El cambrer porta la comanda a la ",t.jsx("strong",{children:"cuina"})," (Model). La cuina prepara el plat (processa les dades). El cambrer porta el plat al client i el",t.jsx("strong",{children:" plat servit"})," (Vista) mostra el resultat."]}),t.jsxs("p",{style:{marginTop:"8px"},children:["El client ",t.jsx("strong",{children:"MAI"})," va directament a la cuina. De la mateixa manera, l'usuari mai accedeix directament al Model: sempre passa pel Controller."]})]}),t.jsx(C,{title:"Diagrama visual del flux MVC"}),t.jsx(_e,{src:"mvc-flux",title:"Flux del patro MVC"}),t.jsx(C,{title:"MVC aplicat al Restaurant"}),t.jsx(b,{variant:"info",children:t.jsx("p",{children:"Vegem com s'aplica MVC al nostre projecte de restaurant. Cada capa te la seva responsabilitat i es comunica nomes amb les capes adjacents."})}),t.jsx(_e,{src:"mvc-restaurant",title:"MVC aplicat al Sistema de Restaurant"}),t.jsx(C,{title:"Exemple conceptual: Gestio de reserves"}),t.jsx(y,{code:`restaurant-app/
├── model/
│   ├── Restaurant.java          # Dades: taules[], menu
│   ├── Taula.java               # Dades: numero, capacitat, ocupada
│   └── Reserva.java             # Dades: client, data, persones
├── vista/
│   └── VistaConsola.java        # Mostra menu, resultats
└── controlador/
    └── ControladorReserves.java # Connecta model i vista`,label:"Estructura de carpetes amb MVC",showLineNumbers:!0}),t.jsx(b,{variant:"info",title:"El Controller: el director d'orquestra",children:t.jsxs("p",{children:["El Controlador rep l'accio de l'usuari (via la Vista), opera amb el Model i torna a la Vista per mostrar resultats. Fixa't que ",t.jsx("strong",{children:"mai"}),"fa ",t.jsx("code",{children:"System.out.println"})," directament: aixo es feina de la Vista."]})}),t.jsx(y,{code:`public class ControladorReserves {
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
}`,label:"Controlador de Reserves",showLineNumbers:!0}),t.jsx(C,{title:"On trobaras MVC?"}),t.jsx(b,{variant:"info",title:"MVC es a tot arreu",children:t.jsx("p",{children:"Practicament tots els frameworks moderns utilitzen MVC o una variant. Aqui teniu exemples reals:"})}),t.jsx(re,{headers:["Plataforma","Tecnologia","Com aplica MVC"],rows:[{cells:["Java Web","Spring MVC (Spring Boot)","Controllers reben peticions HTTP, Models son les entitats, Vistes son plantilles HTML"]},{cells:["Android","Activities + Layouts + ViewModel","XML layouts (Vista), Activities/ViewModel (Controller), classes de dades (Model)"]},{cells:["Web Frontend","React, Angular, Vue","Components (Vista), estat/stores (Model), gestors d'events (Controller)"]},{cells:["Desktop","JavaFX (FXML + Controller)","Fitxers FXML (Vista), classes Controller, classes de dades (Model)"]},{cells:["Jocs","Unity (C#)","Usa una variant de MVC per separar logica de joc, renderitzat i input"]}]}),t.jsx(C,{title:"Connexio amb el que heu apres"}),t.jsxs(b,{variant:"explanation",title:"Ja teniu les peces!",children:[t.jsxs("p",{children:["Tot el que heu apres fins ara (classes, objectes, encapsulacio, packages, modularitat) son els ",t.jsx("strong",{children:"blocs de construccio"})," de MVC:"]}),t.jsxs("p",{style:{marginTop:"8px"},children:["El ",t.jsx("strong",{children:"Model"})," son les vostres classes amb encapsulacio (atributs privats, getters, setters). Els ",t.jsx("strong",{children:"packages"})," son la separacio en carpetes. La ",t.jsx("strong",{children:"modularitat"})," es el principi que cada classe fa una sola cosa. MVC simplement ",t.jsx("strong",{children:"formalitza el patro"}),": us diu on posar cada peca."]})]}),t.jsxs(b,{variant:"success",title:"La idea clau",children:[t.jsxs("p",{children:["MVC es una ",t.jsx("strong",{children:"manera de pensar"})," sobre l'organitzacio del codi, no una eina nova que cal aprendre. Ja coneixeu les peces: classes, objectes, encapsulacio, packages. MVC simplement us diu ",t.jsx("strong",{children:"on posar-les"}),": les dades al Model, la presentacio a la Vista i la coordinacio al Controller."]}),t.jsx("p",{style:{marginTop:"8px"},children:"Quan comenceu a treballar amb frameworks com Spring Boot o JavaFX, veureu que tot segueix aquest patro. Si enteneu MVC, enteneu l'arquitectura de qualsevol aplicacio moderna."})]})]})}function AE(){return t.jsxs("article",{children:[t.jsx(b,{variant:"warning",title:"Material del professorat",children:"Aquesta pàgina conté exercicis i solucions. No és visible per als alumnes."}),t.jsx(C,{title:"Exercicis Pràctics - POO"}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 1: Gestió d'una Agenda"}),t.jsxs(b,{variant:"explanation",children:[t.jsx("p",{children:"Crea un programa orientat a objectes per gestionar una agenda de contactes."}),t.jsx("p",{style:{marginTop:"10px"},children:t.jsx("strong",{children:"Requisits:"})}),t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsxs("li",{children:["Classe ",t.jsx("code",{children:"Contacte"})," amb atributs: nom, telefon, email (tots privats)"]}),t.jsx("li",{children:"Constructor que inicialitzi tots els atributs"}),t.jsx("li",{children:"Getters i setters per a cada atribut"}),t.jsxs("li",{children:["Mètode ",t.jsx("code",{children:"mostrarInfo()"})," que imprimeixi les dades del contacte"]}),t.jsxs("li",{children:["Classe ",t.jsx("code",{children:"Agenda"})," amb un array de Contacte i mètodes per afegir, buscar i eliminar"]}),t.jsxs("li",{children:["Classe ",t.jsx("code",{children:"TestAgenda"})," amb el main per provar-ho"]})]})]}),t.jsx(y,{label:"Solució - Contacte.java",code:`public class Contacte {
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
}`}),t.jsx(y,{label:"Solució - Agenda.java",code:`public class Agenda {
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
}`})]}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 2: Sistema de Productes"}),t.jsxs(b,{variant:"explanation",children:[t.jsx("p",{children:"Crea un sistema de gestió de productes per a una botiga."}),t.jsx("p",{style:{marginTop:"10px"},children:t.jsx("strong",{children:"Requisits:"})}),t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsxs("li",{children:["Classe ",t.jsx("code",{children:"Producte"})," amb: nom, preu, quantitat (privats)"]}),t.jsx("li",{children:"Constructor amb tots els atributs"}),t.jsx("li",{children:"Getters i setters"}),t.jsxs("li",{children:["Mètode ",t.jsx("code",{children:"calcularValorTotal()"})," que retorni preu * quantitat"]}),t.jsxs("li",{children:["Classe ",t.jsx("code",{children:"Botiga"})," amb array de Producte i mètodes per afegir, buscar per nom, i calcular el valor total de l'inventari"]})]})]}),t.jsx(y,{label:"Solució - Producte.java",code:`public class Producte {
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
}`})]})]})}function kE(){return t.jsxs("article",{children:[t.jsx(b,{variant:"warning",title:"Material del professorat",children:"Aquesta pàgina conté exercicis i solucions. No és visible per als alumnes."}),t.jsx(C,{title:"Exercicis Pràctics - Modularitat"}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 1: Gestió de Text"}),t.jsxs(b,{variant:"explanation",children:[t.jsx("p",{children:t.jsx("strong",{children:"Estructura:"})}),t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsxs("li",{children:[t.jsx("code",{children:"utilitats.text.AnalitzadorText"})," - Classe amb mètodes d'anàlisi"]}),t.jsxs("li",{children:[t.jsx("code",{children:"programa.GestorText"})," - Programa principal"]})]}),t.jsx("p",{style:{marginTop:"10px"},children:t.jsx("strong",{children:"Mètodes a implementar:"})}),t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsxs("li",{children:[t.jsx("code",{children:"comptarVocals(String text)"})," → int"]}),t.jsxs("li",{children:[t.jsx("code",{children:"comptarConsonants(String text)"})," → int"]}),t.jsxs("li",{children:[t.jsx("code",{children:"invertir(String text)"})," → String"]}),t.jsxs("li",{children:[t.jsx("code",{children:"esPalindrom(String text)"})," → boolean"]})]})]}),t.jsx(y,{label:"Solució - AnalitzadorText.java",code:`package utilitats.text;

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
}`})]}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 2: Conversió d'Unitats"}),t.jsxs(b,{variant:"explanation",children:[t.jsx("p",{children:t.jsx("strong",{children:"Estructura:"})}),t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsx("li",{children:t.jsx("code",{children:"utilitats.conversions.Temperatura"})}),t.jsx("li",{children:t.jsx("code",{children:"utilitats.conversions.Distancia"})}),t.jsx("li",{children:t.jsx("code",{children:"utilitats.conversions.Pes"})}),t.jsxs("li",{children:[t.jsx("code",{children:"programa.Conversor"})," - Programa principal amb menú"]})]})]}),t.jsx(y,{label:"Solució - Temperatura.java",code:`package utilitats.conversions;

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
}`}),t.jsx(y,{label:"Solució - Distancia.java",code:`package utilitats.conversions;

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
}`})]}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Exercici 3: Gestió de Contactes"}),t.jsxs(b,{variant:"explanation",children:[t.jsx("p",{children:t.jsx("strong",{children:"Estructura:"})}),t.jsxs("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:[t.jsx("li",{children:t.jsx("code",{children:"utilitats.contactes.GestorContactes"})}),t.jsxs("li",{children:[t.jsx("code",{children:"programa.Agenda"})," - Programa principal"]})]}),t.jsxs("p",{style:{marginTop:"10px"},children:[t.jsx("strong",{children:"Funcionalitats:"})," Afegir, buscar, eliminar, llistar contactes. Utilitza arrays paral·lels (noms[], telefons[])."]})]}),t.jsx(y,{label:"Solució - GestorContactes.java",code:`package utilitats.contactes;

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
}`}),t.jsx(b,{variant:"info",title:"Checklist de lliurament",children:t.jsxs("ol",{style:{paddingLeft:"20px"},children:[t.jsx("li",{children:"Estructura de packages correcta"}),t.jsx("li",{children:"Imports correctes entre packages"}),t.jsx("li",{children:"Tots els mètodes implementats"}),t.jsx("li",{children:"Programa principal funcional amb menú"}),t.jsx("li",{children:"Codi comentat"}),t.jsx("li",{children:"Proves amb dades d'exemple"}),t.jsx("li",{children:"Gestió bàsica d'errors"})]})})]})]})}function ME(){return t.jsxs("article",{children:[t.jsx(b,{variant:"warning",title:"Material del professorat",children:"Aquesta pàgina conté la plantilla d'examen i la solució completa del Paraulògic. No és visible per als alumnes."}),t.jsx(C,{title:"Examen: Paraulògic"}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Descripció de l'examen"}),t.jsxs(b,{variant:"explanation",children:[t.jsx("p",{children:"El Paraulògic és un joc de paraules on l'alumne ha d'implementar un programa Java que:"}),t.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px"},children:[t.jsx("li",{children:"Té 7 lletres disponibles, una d'elles és la lletra central"}),t.jsx("li",{children:"L'usuari introdueix paraules que han de complir regles específiques"}),t.jsx("li",{children:"Cada paraula vàlida suma punts segons la seva longitud"}),t.jsx("li",{children:"Si la paraula utilitza totes les 7 lletres és un TUTI (+10 punts extra)"})]})]}),t.jsx("h4",{style:{color:"#2563a8",margin:"20px 0 12px"},children:"Sistema de puntuació"}),t.jsx(re,{headers:["Longitud","Punts"],rows:[{cells:["3 lletres","1 punt"]},{cells:["4 lletres","2 punts"]},{cells:["5 lletres","5 punts"]},{cells:["6 lletres","6 punts"]},{cells:["7+ lletres","= longitud"]},{cells:["TUTI (totes 7)","+10 punts extra"]}]})]}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Mètodes obligatoris (capçalera donada)"}),t.jsxs(b,{variant:"info",title:"Capçaleres que han d'implementar",children:[t.jsx("p",{style:{fontFamily:"monospace",marginTop:"8px"},children:t.jsx("code",{children:"public boolean esParaulaValida(String paraula, char[] lletres, char letraC)"})}),t.jsx("p",{style:{marginTop:"8px"},children:"Retorna true si la paraula:"}),t.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"4px"},children:[t.jsx("li",{children:"Té 3+ lletres"}),t.jsx("li",{children:"Conté la lletra central"}),t.jsx("li",{children:"Només utilitza lletres del conjunt"})]}),t.jsx("p",{style:{fontFamily:"monospace",marginTop:"16px"},children:t.jsx("code",{children:"public int calcularPuntuacio(String paraula, char[] lletres)"})}),t.jsx("p",{style:{marginTop:"8px"},children:"Retorna els punts segons la taula + bonus TUTI."})]})]}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Plantilla per a l'alumne"}),t.jsx(y,{label:"Paraulogic.java - Plantilla alumne",code:`import java.util.Scanner;

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
}`})]}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{color:"#1a4d8f",marginBottom:"16px"},children:"Solució completa"}),t.jsx(y,{label:"Solució completa - Paraulogic.java",showLineNumbers:!0,code:`import java.util.Scanner;

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
}`})]})]})}const NE=Ij([{path:"/",element:t.jsx(Ab,{}),children:[{index:!0,element:t.jsx(Ub,{})},{path:"basics/tipus-de-dades",element:t.jsx(h0,{})},{path:"basics/operadors",element:t.jsx(k0,{})},{path:"basics/sintaxi",element:t.jsx(M0,{})},{path:"basics/condicionals",element:t.jsx(N0,{})},{path:"basics/switch",element:t.jsx(P0,{})},{path:"basics/bucles",element:t.jsx(T0,{})},{path:"basics/modificadors-acces",element:t.jsx(_0,{})},{path:"arrays/arrays-1d",element:t.jsx(X0,{})},{path:"arrays/arrays-2d",element:t.jsx(gS,{})},{path:"arrays/arraylist",element:t.jsx(XS,{})},{path:"funcions/sense-parametres",element:t.jsx(x1,{})},{path:"funcions/amb-parametres",element:t.jsx(y1,{})},{path:"funcions/tipus-de-funcions",element:t.jsx(N1,{})},{path:"funcions/recursives",element:t.jsx(rw,{})},{path:"funcions/cridar-des-de-main",element:t.jsx(sw,{})},{path:"funcions/resum",element:t.jsx(ow,{})},{path:"classes/introduccio",element:t.jsx(cw,{})},{path:"classes/classe-vs-objecte",element:t.jsx(uw,{})},{path:"classes/modificadors",element:t.jsx(dw,{})},{path:"classes/constructors-this",element:t.jsx(pw,{})},{path:"classes/herencia",element:t.jsx(Sw,{})},{path:"classes/exemple-biblioteca",element:t.jsx(ww,{})},{path:"modularitat/introduccio",element:t.jsx(Ew,{})},{path:"modularitat/monolitic-vs-modular",element:t.jsx(Cw,{})},{path:"modularitat/packages",element:t.jsx(Rw,{})},{path:"modularitat/exemple-calculadora",element:t.jsx(Lw,{})},{path:"string-math/classe-string",element:t.jsx(Hw,{})},{path:"string-math/classe-math",element:t.jsx(eE,{})},{path:"string-math/random-vs-math-random",element:t.jsx(dE,{})},{path:"java-modern/for-each",element:t.jsx(pE,{})},{path:"java-modern/operador-ternari",element:t.jsx(mE,{})},{path:"java-modern/var-i-altres",element:t.jsx(hE,{})},{path:"mon-professional/com-treballen-els-devs",element:t.jsx(fE,{})},{path:"analisi-disseny/diagrames-classes",element:t.jsx(bE,{})},{path:"analisi-disseny/diagrames-sequencia",element:t.jsx(wE,{})},{path:"analisi-disseny/diagrames-flux",element:t.jsx(EE,{})},{path:"analisi-disseny/casos-dus",element:t.jsx(CE,{})},{path:"analisi-disseny/projecte-real",element:t.jsx(RE,{})},{path:"analisi-disseny/introduccio-mvc",element:t.jsx(LE,{})},{path:"professor/exercicis-poo",element:t.jsx(AE,{})},{path:"professor/exercicis-modularitat",element:t.jsx(kE,{})},{path:"professor/paraulogic",element:t.jsx(ME,{})}]}]);function PE(){return t.jsx(Jj,{router:NE})}Um(document.getElementById("root")).render(t.jsx(R.StrictMode,{children:t.jsx(PE,{})}));
