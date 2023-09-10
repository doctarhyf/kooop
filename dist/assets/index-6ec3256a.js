function qv(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function $v(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zh={exports:{}},ta={},ep={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ls=Symbol.for("react.element"),Gv=Symbol.for("react.portal"),Kv=Symbol.for("react.fragment"),Qv=Symbol.for("react.strict_mode"),Jv=Symbol.for("react.profiler"),Xv=Symbol.for("react.provider"),Yv=Symbol.for("react.context"),Zv=Symbol.for("react.forward_ref"),e0=Symbol.for("react.suspense"),t0=Symbol.for("react.memo"),n0=Symbol.for("react.lazy"),Sd=Symbol.iterator;function r0(t){return t===null||typeof t!="object"?null:(t=Sd&&t[Sd]||t["@@iterator"],typeof t=="function"?t:null)}var tp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},np=Object.assign,rp={};function zr(t,e,n){this.props=t,this.context=e,this.refs=rp,this.updater=n||tp}zr.prototype.isReactComponent={};zr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ip(){}ip.prototype=zr.prototype;function ju(t,e,n){this.props=t,this.context=e,this.refs=rp,this.updater=n||tp}var Bu=ju.prototype=new ip;Bu.constructor=ju;np(Bu,zr.prototype);Bu.isPureReactComponent=!0;var Td=Array.isArray,sp=Object.prototype.hasOwnProperty,zu={current:null},op={key:!0,ref:!0,__self:!0,__source:!0};function ap(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sp.call(e,r)&&!op.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ls,type:t,key:s,ref:o,props:i,_owner:zu.current}}function i0(t,e){return{$$typeof:ls,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hu(t){return typeof t=="object"&&t!==null&&t.$$typeof===ls}function s0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kd=/\/+/g;function Va(t,e){return typeof t=="object"&&t!==null&&t.key!=null?s0(""+t.key):e.toString(36)}function Ks(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ls:case Gv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Va(o,0):r,Td(i)?(n="",t!=null&&(n=t.replace(kd,"$&/")+"/"),Ks(i,e,n,"",function(u){return u})):i!=null&&(Hu(i)&&(i=i0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(kd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Td(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Va(s,a);o+=Ks(s,e,n,l,i)}else if(l=r0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Va(s,a++),o+=Ks(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Is(t,e,n){if(t==null)return t;var r=[],i=0;return Ks(t,r,"","",function(s){return e.call(n,s,i++)}),r}function o0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xe={current:null},Qs={transition:null},a0={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Qs,ReactCurrentOwner:zu};U.Children={map:Is,forEach:function(t,e,n){Is(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Is(t,function(){e++}),e},toArray:function(t){return Is(t,function(e){return e})||[]},only:function(t){if(!Hu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=zr;U.Fragment=Kv;U.Profiler=Jv;U.PureComponent=ju;U.StrictMode=Qv;U.Suspense=e0;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a0;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=np({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=zu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)sp.call(e,l)&&!op.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ls,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:Yv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Xv,_context:t},t.Consumer=t};U.createElement=ap;U.createFactory=function(t){var e=ap.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:Zv,render:t}};U.isValidElement=Hu;U.lazy=function(t){return{$$typeof:n0,_payload:{_status:-1,_result:t},_init:o0}};U.memo=function(t,e){return{$$typeof:t0,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=Qs.transition;Qs.transition={};try{t()}finally{Qs.transition=e}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(t,e){return xe.current.useCallback(t,e)};U.useContext=function(t){return xe.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return xe.current.useDeferredValue(t)};U.useEffect=function(t,e){return xe.current.useEffect(t,e)};U.useId=function(){return xe.current.useId()};U.useImperativeHandle=function(t,e,n){return xe.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return xe.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return xe.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return xe.current.useMemo(t,e)};U.useReducer=function(t,e,n){return xe.current.useReducer(t,e,n)};U.useRef=function(t){return xe.current.useRef(t)};U.useState=function(t){return xe.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return xe.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return xe.current.useTransition()};U.version="18.2.0";ep.exports=U;var E=ep.exports;const lp=$v(E),l0=qv({__proto__:null,default:lp},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0=E,c0=Symbol.for("react.element"),d0=Symbol.for("react.fragment"),f0=Object.prototype.hasOwnProperty,h0=u0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p0={key:!0,ref:!0,__self:!0,__source:!0};function up(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)f0.call(e,r)&&!p0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:c0,type:t,key:s,ref:o,props:i,_owner:h0.current}}ta.Fragment=d0;ta.jsx=up;ta.jsxs=up;Zh.exports=ta;var p=Zh.exports,Cl={},cp={exports:{}},Xe={},dp={exports:{}},fp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,D){var L=C.length;C.push(D);e:for(;0<L;){var Z=L-1>>>1,ce=C[Z];if(0<i(ce,D))C[Z]=D,C[L]=ce,L=Z;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var D=C[0],L=C.pop();if(L!==D){C[0]=L;e:for(var Z=0,ce=C.length,ws=ce>>>1;Z<ws;){var Rn=2*(Z+1)-1,Ma=C[Rn],Pn=Rn+1,Es=C[Pn];if(0>i(Ma,L))Pn<ce&&0>i(Es,Ma)?(C[Z]=Es,C[Pn]=L,Z=Pn):(C[Z]=Ma,C[Rn]=L,Z=Rn);else if(Pn<ce&&0>i(Es,L))C[Z]=Es,C[Pn]=L,Z=Pn;else break e}}return D}function i(C,D){var L=C.sortIndex-D.sortIndex;return L!==0?L:C.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,y=!1,v=!1,w=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=C)r(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function _(C){if(w=!1,g(C),!v)if(n(l)!==null)v=!0,La(S);else{var D=n(u);D!==null&&Ua(_,D.startTime-C)}}function S(C,D){v=!1,w&&(w=!1,m(x),x=-1),y=!0;var L=h;try{for(g(D),f=n(l);f!==null&&(!(f.expirationTime>D)||C&&!ue());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,h=f.priorityLevel;var ce=Z(f.expirationTime<=D);D=t.unstable_now(),typeof ce=="function"?f.callback=ce:f===n(l)&&r(l),g(D)}else r(l);f=n(l)}if(f!==null)var ws=!0;else{var Rn=n(u);Rn!==null&&Ua(_,Rn.startTime-D),ws=!1}return ws}finally{f=null,h=L,y=!1}}var A=!1,k=null,x=-1,F=5,R=-1;function ue(){return!(t.unstable_now()-R<F)}function sr(){if(k!==null){var C=t.unstable_now();R=C;var D=!0;try{D=k(!0,C)}finally{D?Xr():(A=!1,k=null)}}else A=!1}var Xr;if(typeof d=="function")Xr=function(){d(sr)};else if(typeof MessageChannel<"u"){var Ad=new MessageChannel,Wv=Ad.port2;Ad.port1.onmessage=sr,Xr=function(){Wv.postMessage(null)}}else Xr=function(){T(sr,0)};function La(C){k=C,A||(A=!0,Xr())}function Ua(C,D){x=T(function(){C(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,La(S))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var L=h;h=D;try{return C()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,D){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var L=h;h=C;try{return D()}finally{h=L}},t.unstable_scheduleCallback=function(C,D,L){var Z=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Z+L:Z):L=Z,C){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=L+ce,C={id:c++,callback:D,priorityLevel:C,startTime:L,expirationTime:ce,sortIndex:-1},L>Z?(C.sortIndex=L,e(u,C),n(l)===null&&C===n(u)&&(w?(m(x),x=-1):w=!0,Ua(_,L-Z))):(C.sortIndex=ce,e(l,C),v||y||(v=!0,La(S))),C},t.unstable_shouldYield=ue,t.unstable_wrapCallback=function(C){var D=h;return function(){var L=h;h=D;try{return C.apply(this,arguments)}finally{h=L}}}})(fp);dp.exports=fp;var m0=dp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp=E,Je=m0;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pp=new Set,Di={};function Zn(t,e){Nr(t,e),Nr(t+"Capture",e)}function Nr(t,e){for(Di[t]=e,t=0;t<e.length;t++)pp.add(e[t])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xl=Object.prototype.hasOwnProperty,g0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rd={},Pd={};function y0(t){return xl.call(Pd,t)?!0:xl.call(Rd,t)?!1:g0.test(t)?Pd[t]=!0:(Rd[t]=!0,!1)}function v0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _0(t,e,n,r){if(e===null||typeof e>"u"||v0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ne(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_e[t]=new Ne(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_e[e]=new Ne(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_e[t]=new Ne(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_e[t]=new Ne(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_e[t]=new Ne(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_e[t]=new Ne(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_e[t]=new Ne(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_e[t]=new Ne(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_e[t]=new Ne(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wu=/[\-:]([a-z])/g;function qu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wu,qu);_e[e]=new Ne(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wu,qu);_e[e]=new Ne(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wu,qu);_e[e]=new Ne(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_e[t]=new Ne(t,1,!1,t.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_e[t]=new Ne(t,1,!1,t.toLowerCase(),null,!0,!0)});function $u(t,e,n,r){var i=_e.hasOwnProperty(e)?_e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_0(e,n,i,r)&&(n=null),r||i===null?y0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jt=hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,As=Symbol.for("react.element"),cr=Symbol.for("react.portal"),dr=Symbol.for("react.fragment"),Gu=Symbol.for("react.strict_mode"),Nl=Symbol.for("react.profiler"),mp=Symbol.for("react.provider"),gp=Symbol.for("react.context"),Ku=Symbol.for("react.forward_ref"),Ol=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),Qu=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),yp=Symbol.for("react.offscreen"),Cd=Symbol.iterator;function Yr(t){return t===null||typeof t!="object"?null:(t=Cd&&t[Cd]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Object.assign,Fa;function ci(t){if(Fa===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fa=e&&e[1]||""}return`
`+Fa+t}var ja=!1;function Ba(t,e){if(!t||ja)return"";ja=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ja=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ci(t):""}function w0(t){switch(t.tag){case 5:return ci(t.type);case 16:return ci("Lazy");case 13:return ci("Suspense");case 19:return ci("SuspenseList");case 0:case 2:case 15:return t=Ba(t.type,!1),t;case 11:return t=Ba(t.type.render,!1),t;case 1:return t=Ba(t.type,!0),t;default:return""}}function Dl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case dr:return"Fragment";case cr:return"Portal";case Nl:return"Profiler";case Gu:return"StrictMode";case Ol:return"Suspense";case bl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gp:return(t.displayName||"Context")+".Consumer";case mp:return(t._context.displayName||"Context")+".Provider";case Ku:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qu:return e=t.displayName||null,e!==null?e:Dl(t.type)||"Memo";case Wt:e=t._payload,t=t._init;try{return Dl(t(e))}catch{}}return null}function E0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dl(e);case 8:return e===Gu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function I0(t){var e=vp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ss(t){t._valueTracker||(t._valueTracker=I0(t))}function _p(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=vp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function co(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ll(t,e){var n=e.checked;return Q({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wp(t,e){e=e.checked,e!=null&&$u(t,"checked",e,!1)}function Ul(t,e){wp(t,e);var n=vn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ml(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ml(t,e.type,vn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ml(t,e,n){(e!=="number"||co(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var di=Array.isArray;function Ar(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Vl(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return Q({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Od(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(di(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vn(n)}}function Ep(t,e){var n=vn(e.value),r=vn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function bd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ip(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ip(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ts,Ap=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ts=Ts||document.createElement("div"),Ts.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ts.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Li(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A0=["Webkit","ms","Moz","O"];Object.keys(gi).forEach(function(t){A0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),gi[e]=gi[t]})});function Sp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||gi.hasOwnProperty(t)&&gi[t]?(""+e).trim():e+"px"}function Tp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var S0=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jl(t,e){if(e){if(S0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Bl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zl=null;function Ju(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hl=null,Sr=null,Tr=null;function Dd(t){if(t=ds(t)){if(typeof Hl!="function")throw Error(I(280));var e=t.stateNode;e&&(e=oa(e),Hl(t.stateNode,t.type,e))}}function kp(t){Sr?Tr?Tr.push(t):Tr=[t]:Sr=t}function Rp(){if(Sr){var t=Sr,e=Tr;if(Tr=Sr=null,Dd(t),e)for(t=0;t<e.length;t++)Dd(e[t])}}function Pp(t,e){return t(e)}function Cp(){}var za=!1;function xp(t,e,n){if(za)return t(e,n);za=!0;try{return Pp(t,e,n)}finally{za=!1,(Sr!==null||Tr!==null)&&(Cp(),Rp())}}function Ui(t,e){var n=t.stateNode;if(n===null)return null;var r=oa(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Wl=!1;if(bt)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){Wl=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Wl=!1}function T0(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var yi=!1,fo=null,ho=!1,ql=null,k0={onError:function(t){yi=!0,fo=t}};function R0(t,e,n,r,i,s,o,a,l){yi=!1,fo=null,T0.apply(k0,arguments)}function P0(t,e,n,r,i,s,o,a,l){if(R0.apply(this,arguments),yi){if(yi){var u=fo;yi=!1,fo=null}else throw Error(I(198));ho||(ho=!0,ql=u)}}function er(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Np(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ld(t){if(er(t)!==t)throw Error(I(188))}function C0(t){var e=t.alternate;if(!e){if(e=er(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ld(i),t;if(s===r)return Ld(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function Op(t){return t=C0(t),t!==null?bp(t):null}function bp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bp(t);if(e!==null)return e;t=t.sibling}return null}var Dp=Je.unstable_scheduleCallback,Ud=Je.unstable_cancelCallback,x0=Je.unstable_shouldYield,N0=Je.unstable_requestPaint,ee=Je.unstable_now,O0=Je.unstable_getCurrentPriorityLevel,Xu=Je.unstable_ImmediatePriority,Lp=Je.unstable_UserBlockingPriority,po=Je.unstable_NormalPriority,b0=Je.unstable_LowPriority,Up=Je.unstable_IdlePriority,na=null,At=null;function D0(t){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(na,t,void 0,(t.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:M0,L0=Math.log,U0=Math.LN2;function M0(t){return t>>>=0,t===0?32:31-(L0(t)/U0|0)|0}var ks=64,Rs=4194304;function fi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=fi(a):(s&=o,s!==0&&(r=fi(s)))}else o=n&~i,o!==0?r=fi(o):s!==0&&(r=fi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ft(e),i=1<<n,r|=t[n],e&=~i;return r}function V0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function F0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ft(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=V0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function $l(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mp(){var t=ks;return ks<<=1,!(ks&4194240)&&(ks=64),t}function Ha(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function us(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ft(e),t[e]=n}function j0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Yu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var B=0;function Vp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Fp,Zu,jp,Bp,zp,Gl=!1,Ps=[],sn=null,on=null,an=null,Mi=new Map,Vi=new Map,Gt=[],B0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Md(t,e){switch(t){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":Mi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(e.pointerId)}}function ei(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ds(e),e!==null&&Zu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function z0(t,e,n,r,i){switch(e){case"focusin":return sn=ei(sn,t,e,n,r,i),!0;case"dragenter":return on=ei(on,t,e,n,r,i),!0;case"mouseover":return an=ei(an,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Mi.set(s,ei(Mi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Vi.set(s,ei(Vi.get(s)||null,t,e,n,r,i)),!0}return!1}function Hp(t){var e=bn(t.target);if(e!==null){var n=er(e);if(n!==null){if(e=n.tag,e===13){if(e=Np(n),e!==null){t.blockedOn=e,zp(t.priority,function(){jp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Js(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);zl=r,n.target.dispatchEvent(r),zl=null}else return e=ds(n),e!==null&&Zu(e),t.blockedOn=n,!1;e.shift()}return!0}function Vd(t,e,n){Js(t)&&n.delete(e)}function H0(){Gl=!1,sn!==null&&Js(sn)&&(sn=null),on!==null&&Js(on)&&(on=null),an!==null&&Js(an)&&(an=null),Mi.forEach(Vd),Vi.forEach(Vd)}function ti(t,e){t.blockedOn===e&&(t.blockedOn=null,Gl||(Gl=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,H0)))}function Fi(t){function e(i){return ti(i,t)}if(0<Ps.length){ti(Ps[0],t);for(var n=1;n<Ps.length;n++){var r=Ps[n];r.blockedOn===t&&(r.blockedOn=null)}}for(sn!==null&&ti(sn,t),on!==null&&ti(on,t),an!==null&&ti(an,t),Mi.forEach(e),Vi.forEach(e),n=0;n<Gt.length;n++)r=Gt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gt.length&&(n=Gt[0],n.blockedOn===null);)Hp(n),n.blockedOn===null&&Gt.shift()}var kr=jt.ReactCurrentBatchConfig,go=!0;function W0(t,e,n,r){var i=B,s=kr.transition;kr.transition=null;try{B=1,ec(t,e,n,r)}finally{B=i,kr.transition=s}}function q0(t,e,n,r){var i=B,s=kr.transition;kr.transition=null;try{B=4,ec(t,e,n,r)}finally{B=i,kr.transition=s}}function ec(t,e,n,r){if(go){var i=Kl(t,e,n,r);if(i===null)Za(t,e,r,yo,n),Md(t,r);else if(z0(i,t,e,n,r))r.stopPropagation();else if(Md(t,r),e&4&&-1<B0.indexOf(t)){for(;i!==null;){var s=ds(i);if(s!==null&&Fp(s),s=Kl(t,e,n,r),s===null&&Za(t,e,r,yo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Za(t,e,r,null,n)}}var yo=null;function Kl(t,e,n,r){if(yo=null,t=Ju(r),t=bn(t),t!==null)if(e=er(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Np(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yo=t,null}function Wp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(O0()){case Xu:return 1;case Lp:return 4;case po:case b0:return 16;case Up:return 536870912;default:return 16}default:return 16}}var en=null,tc=null,Xs=null;function qp(){if(Xs)return Xs;var t,e=tc,n=e.length,r,i="value"in en?en.value:en.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Xs=i.slice(t,1<r?1-r:void 0)}function Ys(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cs(){return!0}function Fd(){return!1}function Ye(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Cs:Fd,this.isPropagationStopped=Fd,this}return Q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cs)},persist:function(){},isPersistent:Cs}),e}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nc=Ye(Hr),cs=Q({},Hr,{view:0,detail:0}),$0=Ye(cs),Wa,qa,ni,ra=Q({},cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ni&&(ni&&t.type==="mousemove"?(Wa=t.screenX-ni.screenX,qa=t.screenY-ni.screenY):qa=Wa=0,ni=t),Wa)},movementY:function(t){return"movementY"in t?t.movementY:qa}}),jd=Ye(ra),G0=Q({},ra,{dataTransfer:0}),K0=Ye(G0),Q0=Q({},cs,{relatedTarget:0}),$a=Ye(Q0),J0=Q({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),X0=Ye(J0),Y0=Q({},Hr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Z0=Ye(Y0),e_=Q({},Hr,{data:0}),Bd=Ye(e_),t_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=r_[t])?!!e[t]:!1}function rc(){return i_}var s_=Q({},cs,{key:function(t){if(t.key){var e=t_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ys(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?n_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rc,charCode:function(t){return t.type==="keypress"?Ys(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ys(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),o_=Ye(s_),a_=Q({},ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zd=Ye(a_),l_=Q({},cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rc}),u_=Ye(l_),c_=Q({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),d_=Ye(c_),f_=Q({},ra,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),h_=Ye(f_),p_=[9,13,27,32],ic=bt&&"CompositionEvent"in window,vi=null;bt&&"documentMode"in document&&(vi=document.documentMode);var m_=bt&&"TextEvent"in window&&!vi,$p=bt&&(!ic||vi&&8<vi&&11>=vi),Hd=String.fromCharCode(32),Wd=!1;function Gp(t,e){switch(t){case"keyup":return p_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fr=!1;function g_(t,e){switch(t){case"compositionend":return Kp(e);case"keypress":return e.which!==32?null:(Wd=!0,Hd);case"textInput":return t=e.data,t===Hd&&Wd?null:t;default:return null}}function y_(t,e){if(fr)return t==="compositionend"||!ic&&Gp(t,e)?(t=qp(),Xs=tc=en=null,fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $p&&e.locale!=="ko"?null:e.data;default:return null}}var v_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!v_[t.type]:e==="textarea"}function Qp(t,e,n,r){kp(r),e=vo(e,"onChange"),0<e.length&&(n=new nc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var _i=null,ji=null;function __(t){om(t,0)}function ia(t){var e=mr(t);if(_p(e))return t}function w_(t,e){if(t==="change")return e}var Jp=!1;if(bt){var Ga;if(bt){var Ka="oninput"in document;if(!Ka){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),Ka=typeof $d.oninput=="function"}Ga=Ka}else Ga=!1;Jp=Ga&&(!document.documentMode||9<document.documentMode)}function Gd(){_i&&(_i.detachEvent("onpropertychange",Xp),ji=_i=null)}function Xp(t){if(t.propertyName==="value"&&ia(ji)){var e=[];Qp(e,ji,t,Ju(t)),xp(__,e)}}function E_(t,e,n){t==="focusin"?(Gd(),_i=e,ji=n,_i.attachEvent("onpropertychange",Xp)):t==="focusout"&&Gd()}function I_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ia(ji)}function A_(t,e){if(t==="click")return ia(e)}function S_(t,e){if(t==="input"||t==="change")return ia(e)}function T_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pt=typeof Object.is=="function"?Object.is:T_;function Bi(t,e){if(pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xl.call(e,i)||!pt(t[i],e[i]))return!1}return!0}function Kd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qd(t,e){var n=Kd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kd(n)}}function Yp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zp(){for(var t=window,e=co();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=co(t.document)}return e}function sc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function k_(t){var e=Zp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Yp(n.ownerDocument.documentElement,n)){if(r!==null&&sc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Qd(n,s);var o=Qd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var R_=bt&&"documentMode"in document&&11>=document.documentMode,hr=null,Ql=null,wi=null,Jl=!1;function Jd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jl||hr==null||hr!==co(r)||(r=hr,"selectionStart"in r&&sc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wi&&Bi(wi,r)||(wi=r,r=vo(Ql,"onSelect"),0<r.length&&(e=new nc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=hr)))}function xs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var pr={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionend:xs("Transition","TransitionEnd")},Qa={},em={};bt&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function sa(t){if(Qa[t])return Qa[t];if(!pr[t])return t;var e=pr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in em)return Qa[t]=e[n];return t}var tm=sa("animationend"),nm=sa("animationiteration"),rm=sa("animationstart"),im=sa("transitionend"),sm=new Map,Xd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(t,e){sm.set(t,e),Zn(e,[t])}for(var Ja=0;Ja<Xd.length;Ja++){var Xa=Xd[Ja],P_=Xa.toLowerCase(),C_=Xa[0].toUpperCase()+Xa.slice(1);En(P_,"on"+C_)}En(tm,"onAnimationEnd");En(nm,"onAnimationIteration");En(rm,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(im,"onTransitionEnd");Nr("onMouseEnter",["mouseout","mouseover"]);Nr("onMouseLeave",["mouseout","mouseover"]);Nr("onPointerEnter",["pointerout","pointerover"]);Nr("onPointerLeave",["pointerout","pointerover"]);Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x_=new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));function Yd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,P0(r,e,void 0,t),t.currentTarget=null}function om(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Yd(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Yd(i,a,u),s=l}}}if(ho)throw t=ql,ho=!1,ql=null,t}function H(t,e){var n=e[tu];n===void 0&&(n=e[tu]=new Set);var r=t+"__bubble";n.has(r)||(am(e,t,2,!1),n.add(r))}function Ya(t,e,n){var r=0;e&&(r|=4),am(n,t,r,e)}var Ns="_reactListening"+Math.random().toString(36).slice(2);function zi(t){if(!t[Ns]){t[Ns]=!0,pp.forEach(function(n){n!=="selectionchange"&&(x_.has(n)||Ya(n,!1,t),Ya(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ns]||(e[Ns]=!0,Ya("selectionchange",!1,e))}}function am(t,e,n,r){switch(Wp(e)){case 1:var i=W0;break;case 4:i=q0;break;default:i=ec}n=i.bind(null,e,n,t),i=void 0,!Wl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Za(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=bn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}xp(function(){var u=s,c=Ju(n),f=[];e:{var h=sm.get(t);if(h!==void 0){var y=nc,v=t;switch(t){case"keypress":if(Ys(n)===0)break e;case"keydown":case"keyup":y=o_;break;case"focusin":v="focus",y=$a;break;case"focusout":v="blur",y=$a;break;case"beforeblur":case"afterblur":y=$a;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=K0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=u_;break;case tm:case nm:case rm:y=X0;break;case im:y=d_;break;case"scroll":y=$0;break;case"wheel":y=h_;break;case"copy":case"cut":case"paste":y=Z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=zd}var w=(e&4)!==0,T=!w&&t==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var d=u,g;d!==null;){g=d;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,m!==null&&(_=Ui(d,m),_!=null&&w.push(Hi(d,_,g)))),T)break;d=d.return}0<w.length&&(h=new y(h,v,null,n,c),f.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",h&&n!==zl&&(v=n.relatedTarget||n.fromElement)&&(bn(v)||v[Dt]))break e;if((y||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?bn(v):null,v!==null&&(T=er(v),v!==T||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=jd,_="onMouseLeave",m="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(w=zd,_="onPointerLeave",m="onPointerEnter",d="pointer"),T=y==null?h:mr(y),g=v==null?h:mr(v),h=new w(_,d+"leave",y,n,c),h.target=T,h.relatedTarget=g,_=null,bn(c)===u&&(w=new w(m,d+"enter",v,n,c),w.target=g,w.relatedTarget=T,_=w),T=_,y&&v)t:{for(w=y,m=v,d=0,g=w;g;g=or(g))d++;for(g=0,_=m;_;_=or(_))g++;for(;0<d-g;)w=or(w),d--;for(;0<g-d;)m=or(m),g--;for(;d--;){if(w===m||m!==null&&w===m.alternate)break t;w=or(w),m=or(m)}w=null}else w=null;y!==null&&Zd(f,h,y,w,!1),v!==null&&T!==null&&Zd(f,T,v,w,!0)}}e:{if(h=u?mr(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var S=w_;else if(qd(h))if(Jp)S=S_;else{S=I_;var A=E_}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=A_);if(S&&(S=S(t,u))){Qp(f,S,n,c);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Ml(h,"number",h.value)}switch(A=u?mr(u):window,t){case"focusin":(qd(A)||A.contentEditable==="true")&&(hr=A,Ql=u,wi=null);break;case"focusout":wi=Ql=hr=null;break;case"mousedown":Jl=!0;break;case"contextmenu":case"mouseup":case"dragend":Jl=!1,Jd(f,n,c);break;case"selectionchange":if(R_)break;case"keydown":case"keyup":Jd(f,n,c)}var k;if(ic)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else fr?Gp(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&($p&&n.locale!=="ko"&&(fr||x!=="onCompositionStart"?x==="onCompositionEnd"&&fr&&(k=qp()):(en=c,tc="value"in en?en.value:en.textContent,fr=!0)),A=vo(u,x),0<A.length&&(x=new Bd(x,t,null,n,c),f.push({event:x,listeners:A}),k?x.data=k:(k=Kp(n),k!==null&&(x.data=k)))),(k=m_?g_(t,n):y_(t,n))&&(u=vo(u,"onBeforeInput"),0<u.length&&(c=new Bd("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=k))}om(f,e)})}function Hi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ui(t,n),s!=null&&r.unshift(Hi(t,s,i)),s=Ui(t,e),s!=null&&r.push(Hi(t,s,i))),t=t.return}return r}function or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zd(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ui(n,s),l!=null&&o.unshift(Hi(n,l,a))):i||(l=Ui(n,s),l!=null&&o.push(Hi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var N_=/\r\n?/g,O_=/\u0000|\uFFFD/g;function ef(t){return(typeof t=="string"?t:""+t).replace(N_,`
`).replace(O_,"")}function Os(t,e,n){if(e=ef(e),ef(t)!==e&&n)throw Error(I(425))}function _o(){}var Xl=null,Yl=null;function Zl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var eu=typeof setTimeout=="function"?setTimeout:void 0,b_=typeof clearTimeout=="function"?clearTimeout:void 0,tf=typeof Promise=="function"?Promise:void 0,D_=typeof queueMicrotask=="function"?queueMicrotask:typeof tf<"u"?function(t){return tf.resolve(null).then(t).catch(L_)}:eu;function L_(t){setTimeout(function(){throw t})}function el(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Fi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fi(e)}function ln(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function nf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Wr=Math.random().toString(36).slice(2),wt="__reactFiber$"+Wr,Wi="__reactProps$"+Wr,Dt="__reactContainer$"+Wr,tu="__reactEvents$"+Wr,U_="__reactListeners$"+Wr,M_="__reactHandles$"+Wr;function bn(t){var e=t[wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dt]||n[wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=nf(t);t!==null;){if(n=t[wt])return n;t=nf(t)}return e}t=n,n=t.parentNode}return null}function ds(t){return t=t[wt]||t[Dt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function mr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function oa(t){return t[Wi]||null}var nu=[],gr=-1;function In(t){return{current:t}}function W(t){0>gr||(t.current=nu[gr],nu[gr]=null,gr--)}function z(t,e){gr++,nu[gr]=t.current,t.current=e}var _n={},Se=In(_n),Ue=In(!1),Bn=_n;function Or(t,e){var n=t.type.contextTypes;if(!n)return _n;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Me(t){return t=t.childContextTypes,t!=null}function wo(){W(Ue),W(Se)}function rf(t,e,n){if(Se.current!==_n)throw Error(I(168));z(Se,e),z(Ue,n)}function lm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,E0(t)||"Unknown",i));return Q({},n,r)}function Eo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_n,Bn=Se.current,z(Se,t),z(Ue,Ue.current),!0}function sf(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=lm(t,e,Bn),r.__reactInternalMemoizedMergedChildContext=t,W(Ue),W(Se),z(Se,t)):W(Ue),z(Ue,n)}var kt=null,aa=!1,tl=!1;function um(t){kt===null?kt=[t]:kt.push(t)}function V_(t){aa=!0,um(t)}function An(){if(!tl&&kt!==null){tl=!0;var t=0,e=B;try{var n=kt;for(B=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kt=null,aa=!1}catch(i){throw kt!==null&&(kt=kt.slice(t+1)),Dp(Xu,An),i}finally{B=e,tl=!1}}return null}var yr=[],vr=0,Io=null,Ao=0,Ze=[],et=0,zn=null,Rt=1,Pt="";function Cn(t,e){yr[vr++]=Ao,yr[vr++]=Io,Io=t,Ao=e}function cm(t,e,n){Ze[et++]=Rt,Ze[et++]=Pt,Ze[et++]=zn,zn=t;var r=Rt;t=Pt;var i=32-ft(r)-1;r&=~(1<<i),n+=1;var s=32-ft(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rt=1<<32-ft(e)+i|n<<i|r,Pt=s+t}else Rt=1<<s|n<<i|r,Pt=t}function oc(t){t.return!==null&&(Cn(t,1),cm(t,1,0))}function ac(t){for(;t===Io;)Io=yr[--vr],yr[vr]=null,Ao=yr[--vr],yr[vr]=null;for(;t===zn;)zn=Ze[--et],Ze[et]=null,Pt=Ze[--et],Ze[et]=null,Rt=Ze[--et],Ze[et]=null}var qe=null,He=null,$=!1,dt=null;function dm(t,e){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function of(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,qe=t,He=ln(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,qe=t,He=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zn!==null?{id:Rt,overflow:Pt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,qe=t,He=null,!0):!1;default:return!1}}function ru(t){return(t.mode&1)!==0&&(t.flags&128)===0}function iu(t){if($){var e=He;if(e){var n=e;if(!of(t,e)){if(ru(t))throw Error(I(418));e=ln(n.nextSibling);var r=qe;e&&of(t,e)?dm(r,n):(t.flags=t.flags&-4097|2,$=!1,qe=t)}}else{if(ru(t))throw Error(I(418));t.flags=t.flags&-4097|2,$=!1,qe=t}}}function af(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;qe=t}function bs(t){if(t!==qe)return!1;if(!$)return af(t),$=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zl(t.type,t.memoizedProps)),e&&(e=He)){if(ru(t))throw fm(),Error(I(418));for(;e;)dm(t,e),e=ln(e.nextSibling)}if(af(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){He=ln(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}He=null}}else He=qe?ln(t.stateNode.nextSibling):null;return!0}function fm(){for(var t=He;t;)t=ln(t.nextSibling)}function br(){He=qe=null,$=!1}function lc(t){dt===null?dt=[t]:dt.push(t)}var F_=jt.ReactCurrentBatchConfig;function ut(t,e){if(t&&t.defaultProps){e=Q({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var So=In(null),To=null,_r=null,uc=null;function cc(){uc=_r=To=null}function dc(t){var e=So.current;W(So),t._currentValue=e}function su(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Rr(t,e){To=t,uc=_r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Le=!0),t.firstContext=null)}function rt(t){var e=t._currentValue;if(uc!==t)if(t={context:t,memoizedValue:e,next:null},_r===null){if(To===null)throw Error(I(308));_r=t,To.dependencies={lanes:0,firstContext:t}}else _r=_r.next=t;return e}var Dn=null;function fc(t){Dn===null?Dn=[t]:Dn.push(t)}function hm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,fc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Lt(t,r)}function Lt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qt=!1;function hc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function un(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Lt(t,n)}return i=r.interleaved,i===null?(e.next=e,fc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Lt(t,n)}function Zs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yu(t,n)}}function lf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ko(t,e,n,r){var i=t.updateQueue;qt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,y=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(h=e,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(y,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(y,f,h):v,h==null)break e;f=Q({},f,h);break e;case 2:qt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=f):c=c.next=y,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Wn|=o,t.lanes=o,t.memoizedState=f}}function uf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var mm=new hp.Component().refs;function ou(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Q({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var la={isMounted:function(t){return(t=t._reactInternals)?er(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ce(),i=dn(t),s=Nt(r,i);s.payload=e,n!=null&&(s.callback=n),e=un(t,s,i),e!==null&&(ht(e,t,i,r),Zs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ce(),i=dn(t),s=Nt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=un(t,s,i),e!==null&&(ht(e,t,i,r),Zs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ce(),r=dn(t),i=Nt(n,r);i.tag=2,e!=null&&(i.callback=e),e=un(t,i,r),e!==null&&(ht(e,t,r,n),Zs(e,t,r))}};function cf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Bi(n,r)||!Bi(i,s):!0}function gm(t,e,n){var r=!1,i=_n,s=e.contextType;return typeof s=="object"&&s!==null?s=rt(s):(i=Me(e)?Bn:Se.current,r=e.contextTypes,s=(r=r!=null)?Or(t,i):_n),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=la,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function df(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&la.enqueueReplaceState(e,e.state,null)}function au(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=mm,hc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=rt(s):(s=Me(e)?Bn:Se.current,i.context=Or(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ou(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&la.enqueueReplaceState(i,i.state,null),ko(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ri(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===mm&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function Ds(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ff(t){var e=t._init;return e(t._payload)}function ym(t){function e(m,d){if(t){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function n(m,d){if(!t)return null;for(;d!==null;)e(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=fn(m,d),m.index=0,m.sibling=null,m}function s(m,d,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=2,d):g):(m.flags|=2,d)):(m.flags|=1048576,d)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,d,g,_){return d===null||d.tag!==6?(d=ll(g,m.mode,_),d.return=m,d):(d=i(d,g),d.return=m,d)}function l(m,d,g,_){var S=g.type;return S===dr?c(m,d,g.props.children,_,g.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Wt&&ff(S)===d.type)?(_=i(d,g.props),_.ref=ri(m,d,g),_.return=m,_):(_=so(g.type,g.key,g.props,null,m.mode,_),_.ref=ri(m,d,g),_.return=m,_)}function u(m,d,g,_){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=ul(g,m.mode,_),d.return=m,d):(d=i(d,g.children||[]),d.return=m,d)}function c(m,d,g,_,S){return d===null||d.tag!==7?(d=Vn(g,m.mode,_,S),d.return=m,d):(d=i(d,g),d.return=m,d)}function f(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ll(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case As:return g=so(d.type,d.key,d.props,null,m.mode,g),g.ref=ri(m,null,d),g.return=m,g;case cr:return d=ul(d,m.mode,g),d.return=m,d;case Wt:var _=d._init;return f(m,_(d._payload),g)}if(di(d)||Yr(d))return d=Vn(d,m.mode,g,null),d.return=m,d;Ds(m,d)}return null}function h(m,d,g,_){var S=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(m,d,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case As:return g.key===S?l(m,d,g,_):null;case cr:return g.key===S?u(m,d,g,_):null;case Wt:return S=g._init,h(m,d,S(g._payload),_)}if(di(g)||Yr(g))return S!==null?null:c(m,d,g,_,null);Ds(m,g)}return null}function y(m,d,g,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(g)||null,a(d,m,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case As:return m=m.get(_.key===null?g:_.key)||null,l(d,m,_,S);case cr:return m=m.get(_.key===null?g:_.key)||null,u(d,m,_,S);case Wt:var A=_._init;return y(m,d,g,A(_._payload),S)}if(di(_)||Yr(_))return m=m.get(g)||null,c(d,m,_,S,null);Ds(d,_)}return null}function v(m,d,g,_){for(var S=null,A=null,k=d,x=d=0,F=null;k!==null&&x<g.length;x++){k.index>x?(F=k,k=null):F=k.sibling;var R=h(m,k,g[x],_);if(R===null){k===null&&(k=F);break}t&&k&&R.alternate===null&&e(m,k),d=s(R,d,x),A===null?S=R:A.sibling=R,A=R,k=F}if(x===g.length)return n(m,k),$&&Cn(m,x),S;if(k===null){for(;x<g.length;x++)k=f(m,g[x],_),k!==null&&(d=s(k,d,x),A===null?S=k:A.sibling=k,A=k);return $&&Cn(m,x),S}for(k=r(m,k);x<g.length;x++)F=y(k,m,x,g[x],_),F!==null&&(t&&F.alternate!==null&&k.delete(F.key===null?x:F.key),d=s(F,d,x),A===null?S=F:A.sibling=F,A=F);return t&&k.forEach(function(ue){return e(m,ue)}),$&&Cn(m,x),S}function w(m,d,g,_){var S=Yr(g);if(typeof S!="function")throw Error(I(150));if(g=S.call(g),g==null)throw Error(I(151));for(var A=S=null,k=d,x=d=0,F=null,R=g.next();k!==null&&!R.done;x++,R=g.next()){k.index>x?(F=k,k=null):F=k.sibling;var ue=h(m,k,R.value,_);if(ue===null){k===null&&(k=F);break}t&&k&&ue.alternate===null&&e(m,k),d=s(ue,d,x),A===null?S=ue:A.sibling=ue,A=ue,k=F}if(R.done)return n(m,k),$&&Cn(m,x),S;if(k===null){for(;!R.done;x++,R=g.next())R=f(m,R.value,_),R!==null&&(d=s(R,d,x),A===null?S=R:A.sibling=R,A=R);return $&&Cn(m,x),S}for(k=r(m,k);!R.done;x++,R=g.next())R=y(k,m,x,R.value,_),R!==null&&(t&&R.alternate!==null&&k.delete(R.key===null?x:R.key),d=s(R,d,x),A===null?S=R:A.sibling=R,A=R);return t&&k.forEach(function(sr){return e(m,sr)}),$&&Cn(m,x),S}function T(m,d,g,_){if(typeof g=="object"&&g!==null&&g.type===dr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case As:e:{for(var S=g.key,A=d;A!==null;){if(A.key===S){if(S=g.type,S===dr){if(A.tag===7){n(m,A.sibling),d=i(A,g.props.children),d.return=m,m=d;break e}}else if(A.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Wt&&ff(S)===A.type){n(m,A.sibling),d=i(A,g.props),d.ref=ri(m,A,g),d.return=m,m=d;break e}n(m,A);break}else e(m,A);A=A.sibling}g.type===dr?(d=Vn(g.props.children,m.mode,_,g.key),d.return=m,m=d):(_=so(g.type,g.key,g.props,null,m.mode,_),_.ref=ri(m,d,g),_.return=m,m=_)}return o(m);case cr:e:{for(A=g.key;d!==null;){if(d.key===A)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(m,d.sibling),d=i(d,g.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else e(m,d);d=d.sibling}d=ul(g,m.mode,_),d.return=m,m=d}return o(m);case Wt:return A=g._init,T(m,d,A(g._payload),_)}if(di(g))return v(m,d,g,_);if(Yr(g))return w(m,d,g,_);Ds(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,g),d.return=m,m=d):(n(m,d),d=ll(g,m.mode,_),d.return=m,m=d),o(m)):n(m,d)}return T}var Dr=ym(!0),vm=ym(!1),fs={},St=In(fs),qi=In(fs),$i=In(fs);function Ln(t){if(t===fs)throw Error(I(174));return t}function pc(t,e){switch(z($i,e),z(qi,t),z(St,fs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fl(e,t)}W(St),z(St,e)}function Lr(){W(St),W(qi),W($i)}function _m(t){Ln($i.current);var e=Ln(St.current),n=Fl(e,t.type);e!==n&&(z(qi,t),z(St,n))}function mc(t){qi.current===t&&(W(St),W(qi))}var G=In(0);function Ro(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nl=[];function gc(){for(var t=0;t<nl.length;t++)nl[t]._workInProgressVersionPrimary=null;nl.length=0}var eo=jt.ReactCurrentDispatcher,rl=jt.ReactCurrentBatchConfig,Hn=0,K=null,se=null,fe=null,Po=!1,Ei=!1,Gi=0,j_=0;function we(){throw Error(I(321))}function yc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pt(t[n],e[n]))return!1;return!0}function vc(t,e,n,r,i,s){if(Hn=s,K=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,eo.current=t===null||t.memoizedState===null?W_:q_,t=n(r,i),Ei){s=0;do{if(Ei=!1,Gi=0,25<=s)throw Error(I(301));s+=1,fe=se=null,e.updateQueue=null,eo.current=$_,t=n(r,i)}while(Ei)}if(eo.current=Co,e=se!==null&&se.next!==null,Hn=0,fe=se=K=null,Po=!1,e)throw Error(I(300));return t}function _c(){var t=Gi!==0;return Gi=0,t}function vt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?K.memoizedState=fe=t:fe=fe.next=t,fe}function it(){if(se===null){var t=K.alternate;t=t!==null?t.memoizedState:null}else t=se.next;var e=fe===null?K.memoizedState:fe.next;if(e!==null)fe=e,se=t;else{if(t===null)throw Error(I(310));se=t,t={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},fe===null?K.memoizedState=fe=t:fe=fe.next=t}return fe}function Ki(t,e){return typeof e=="function"?e(t):e}function il(t){var e=it(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=se,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Hn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,K.lanes|=c,Wn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,pt(r,e.memoizedState)||(Le=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,K.lanes|=s,Wn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sl(t){var e=it(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);pt(s,e.memoizedState)||(Le=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function wm(){}function Em(t,e){var n=K,r=it(),i=e(),s=!pt(r.memoizedState,i);if(s&&(r.memoizedState=i,Le=!0),r=r.queue,wc(Sm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,Qi(9,Am.bind(null,n,r,i,e),void 0,null),he===null)throw Error(I(349));Hn&30||Im(n,e,i)}return i}function Im(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=K.updateQueue,e===null?(e={lastEffect:null,stores:null},K.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Am(t,e,n,r){e.value=n,e.getSnapshot=r,Tm(e)&&km(t)}function Sm(t,e,n){return n(function(){Tm(e)&&km(t)})}function Tm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pt(t,n)}catch{return!0}}function km(t){var e=Lt(t,1);e!==null&&ht(e,t,1,-1)}function hf(t){var e=vt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:t},e.queue=t,t=t.dispatch=H_.bind(null,K,t),[e.memoizedState,t]}function Qi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=K.updateQueue,e===null?(e={lastEffect:null,stores:null},K.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Rm(){return it().memoizedState}function to(t,e,n,r){var i=vt();K.flags|=t,i.memoizedState=Qi(1|e,n,void 0,r===void 0?null:r)}function ua(t,e,n,r){var i=it();r=r===void 0?null:r;var s=void 0;if(se!==null){var o=se.memoizedState;if(s=o.destroy,r!==null&&yc(r,o.deps)){i.memoizedState=Qi(e,n,s,r);return}}K.flags|=t,i.memoizedState=Qi(1|e,n,s,r)}function pf(t,e){return to(8390656,8,t,e)}function wc(t,e){return ua(2048,8,t,e)}function Pm(t,e){return ua(4,2,t,e)}function Cm(t,e){return ua(4,4,t,e)}function xm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Nm(t,e,n){return n=n!=null?n.concat([t]):null,ua(4,4,xm.bind(null,e,t),n)}function Ec(){}function Om(t,e){var n=it();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function bm(t,e){var n=it();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Dm(t,e,n){return Hn&21?(pt(n,e)||(n=Mp(),K.lanes|=n,Wn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Le=!0),t.memoizedState=n)}function B_(t,e){var n=B;B=n!==0&&4>n?n:4,t(!0);var r=rl.transition;rl.transition={};try{t(!1),e()}finally{B=n,rl.transition=r}}function Lm(){return it().memoizedState}function z_(t,e,n){var r=dn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Um(t))Mm(e,n);else if(n=hm(t,e,n,r),n!==null){var i=Ce();ht(n,t,r,i),Vm(n,e,r)}}function H_(t,e,n){var r=dn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Um(t))Mm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,pt(a,o)){var l=e.interleaved;l===null?(i.next=i,fc(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=hm(t,e,i,r),n!==null&&(i=Ce(),ht(n,t,r,i),Vm(n,e,r))}}function Um(t){var e=t.alternate;return t===K||e!==null&&e===K}function Mm(t,e){Ei=Po=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Vm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yu(t,n)}}var Co={readContext:rt,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},W_={readContext:rt,useCallback:function(t,e){return vt().memoizedState=[t,e===void 0?null:e],t},useContext:rt,useEffect:pf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,to(4194308,4,xm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return to(4194308,4,t,e)},useInsertionEffect:function(t,e){return to(4,2,t,e)},useMemo:function(t,e){var n=vt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=vt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=z_.bind(null,K,t),[r.memoizedState,t]},useRef:function(t){var e=vt();return t={current:t},e.memoizedState=t},useState:hf,useDebugValue:Ec,useDeferredValue:function(t){return vt().memoizedState=t},useTransition:function(){var t=hf(!1),e=t[0];return t=B_.bind(null,t[1]),vt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=K,i=vt();if($){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),he===null)throw Error(I(349));Hn&30||Im(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,pf(Sm.bind(null,r,s,t),[t]),r.flags|=2048,Qi(9,Am.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=vt(),e=he.identifierPrefix;if($){var n=Pt,r=Rt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Gi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=j_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},q_={readContext:rt,useCallback:Om,useContext:rt,useEffect:wc,useImperativeHandle:Nm,useInsertionEffect:Pm,useLayoutEffect:Cm,useMemo:bm,useReducer:il,useRef:Rm,useState:function(){return il(Ki)},useDebugValue:Ec,useDeferredValue:function(t){var e=it();return Dm(e,se.memoizedState,t)},useTransition:function(){var t=il(Ki)[0],e=it().memoizedState;return[t,e]},useMutableSource:wm,useSyncExternalStore:Em,useId:Lm,unstable_isNewReconciler:!1},$_={readContext:rt,useCallback:Om,useContext:rt,useEffect:wc,useImperativeHandle:Nm,useInsertionEffect:Pm,useLayoutEffect:Cm,useMemo:bm,useReducer:sl,useRef:Rm,useState:function(){return sl(Ki)},useDebugValue:Ec,useDeferredValue:function(t){var e=it();return se===null?e.memoizedState=t:Dm(e,se.memoizedState,t)},useTransition:function(){var t=sl(Ki)[0],e=it().memoizedState;return[t,e]},useMutableSource:wm,useSyncExternalStore:Em,useId:Lm,unstable_isNewReconciler:!1};function Ur(t,e){try{var n="",r=e;do n+=w0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ol(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var G_=typeof WeakMap=="function"?WeakMap:Map;function Fm(t,e,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){No||(No=!0,vu=r),lu(t,e)},n}function jm(t,e,n){n=Nt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){lu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lu(t,e),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new G_;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=aw.bind(null,t,e,n),e.then(t,t))}function gf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nt(-1,1),e.tag=2,un(n,e,1))),n.lanes|=1),t)}var K_=jt.ReactCurrentOwner,Le=!1;function Re(t,e,n,r){e.child=t===null?vm(e,null,n,r):Dr(e,t.child,n,r)}function vf(t,e,n,r,i){n=n.render;var s=e.ref;return Rr(e,i),r=vc(t,e,n,r,s,i),n=_c(),t!==null&&!Le?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ut(t,e,i)):($&&n&&oc(e),e.flags|=1,Re(t,e,r,i),e.child)}function _f(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Cc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Bm(t,e,s,r,i)):(t=so(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bi,n(o,r)&&t.ref===e.ref)return Ut(t,e,i)}return e.flags|=1,t=fn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Bm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Bi(s,r)&&t.ref===e.ref)if(Le=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Le=!0);else return e.lanes=t.lanes,Ut(t,e,i)}return uu(t,e,n,r,i)}function zm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(Er,Be),Be|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,z(Er,Be),Be|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,z(Er,Be),Be|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,z(Er,Be),Be|=r;return Re(t,e,i,n),e.child}function Hm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function uu(t,e,n,r,i){var s=Me(n)?Bn:Se.current;return s=Or(e,s),Rr(e,i),n=vc(t,e,n,r,s,i),r=_c(),t!==null&&!Le?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ut(t,e,i)):($&&r&&oc(e),e.flags|=1,Re(t,e,n,i),e.child)}function wf(t,e,n,r,i){if(Me(n)){var s=!0;Eo(e)}else s=!1;if(Rr(e,i),e.stateNode===null)no(t,e),gm(e,n,r),au(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=rt(u):(u=Me(n)?Bn:Se.current,u=Or(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&df(e,o,r,u),qt=!1;var h=e.memoizedState;o.state=h,ko(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Ue.current||qt?(typeof c=="function"&&(ou(e,n,c,r),l=e.memoizedState),(a=qt||cf(e,n,a,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,pm(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ut(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=rt(l):(l=Me(n)?Bn:Se.current,l=Or(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&df(e,o,r,l),qt=!1,h=e.memoizedState,o.state=h,ko(e,r,o,i);var v=e.memoizedState;a!==f||h!==v||Ue.current||qt?(typeof y=="function"&&(ou(e,n,y,r),v=e.memoizedState),(u=qt||cf(e,n,u,r,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return cu(t,e,n,r,s,i)}function cu(t,e,n,r,i,s){Hm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&sf(e,n,!1),Ut(t,e,s);r=e.stateNode,K_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Dr(e,t.child,null,s),e.child=Dr(e,null,a,s)):Re(t,e,a,s),e.memoizedState=r.state,i&&sf(e,n,!0),e.child}function Wm(t){var e=t.stateNode;e.pendingContext?rf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rf(t,e.context,!1),pc(t,e.containerInfo)}function Ef(t,e,n,r,i){return br(),lc(i),e.flags|=256,Re(t,e,n,r),e.child}var du={dehydrated:null,treeContext:null,retryLane:0};function fu(t){return{baseLanes:t,cachePool:null,transitions:null}}function qm(t,e,n){var r=e.pendingProps,i=G.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),z(G,i&1),t===null)return iu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fa(o,r,0,null),t=Vn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fu(n),e.memoizedState=du,t):Ic(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Q_(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=fn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=fn(a,s):(s=Vn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?fu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=du,r}return s=t.child,t=s.sibling,r=fn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ic(t,e){return e=fa({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ls(t,e,n,r){return r!==null&&lc(r),Dr(e,t.child,null,n),t=Ic(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Q_(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ol(Error(I(422))),Ls(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=fa({mode:"visible",children:r.children},i,0,null),s=Vn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Dr(e,t.child,null,o),e.child.memoizedState=fu(o),e.memoizedState=du,s);if(!(e.mode&1))return Ls(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=ol(s,r,void 0),Ls(t,e,o,r)}if(a=(o&t.childLanes)!==0,Le||a){if(r=he,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Lt(t,i),ht(r,t,i,-1))}return Pc(),r=ol(Error(I(421))),Ls(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=lw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,He=ln(i.nextSibling),qe=e,$=!0,dt=null,t!==null&&(Ze[et++]=Rt,Ze[et++]=Pt,Ze[et++]=zn,Rt=t.id,Pt=t.overflow,zn=e),e=Ic(e,r.children),e.flags|=4096,e)}function If(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),su(t.return,e,n)}function al(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function $m(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Re(t,e,r.children,n),r=G.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&If(t,n,e);else if(t.tag===19)If(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(z(G,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ro(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),al(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ro(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}al(e,!0,n,null,s);break;case"together":al(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function no(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ut(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=fn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function J_(t,e,n){switch(e.tag){case 3:Wm(e),br();break;case 5:_m(e);break;case 1:Me(e.type)&&Eo(e);break;case 4:pc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;z(So,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(z(G,G.current&1),e.flags|=128,null):n&e.child.childLanes?qm(t,e,n):(z(G,G.current&1),t=Ut(t,e,n),t!==null?t.sibling:null);z(G,G.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return $m(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(G,G.current),r)break;return null;case 22:case 23:return e.lanes=0,zm(t,e,n)}return Ut(t,e,n)}var Gm,hu,Km,Qm;Gm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hu=function(){};Km=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ln(St.current);var s=null;switch(n){case"input":i=Ll(t,i),r=Ll(t,r),s=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),s=[];break;case"textarea":i=Vl(t,i),r=Vl(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_o)}jl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Di.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Di.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Qm=function(t,e,n,r){n!==r&&(e.flags|=4)};function ii(t,e){if(!$)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ee(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function X_(t,e,n){var r=e.pendingProps;switch(ac(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(e),null;case 1:return Me(e.type)&&wo(),Ee(e),null;case 3:return r=e.stateNode,Lr(),W(Ue),W(Se),gc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(bs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dt!==null&&(Eu(dt),dt=null))),hu(t,e),Ee(e),null;case 5:mc(e);var i=Ln($i.current);if(n=e.type,t!==null&&e.stateNode!=null)Km(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return Ee(e),null}if(t=Ln(St.current),bs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[wt]=e,r[Wi]=s,t=(e.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<hi.length;i++)H(hi[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":xd(r,s),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},H("invalid",r);break;case"textarea":Od(r,s),H("invalid",r)}jl(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Os(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Os(r.textContent,a,t),i=["children",""+a]):Di.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":Ss(r),Nd(r,s,!0);break;case"textarea":Ss(r),bd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_o)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ip(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[wt]=e,t[Wi]=r,Gm(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bl(n,r),n){case"dialog":H("cancel",t),H("close",t),i=r;break;case"iframe":case"object":case"embed":H("load",t),i=r;break;case"video":case"audio":for(i=0;i<hi.length;i++)H(hi[i],t);i=r;break;case"source":H("error",t),i=r;break;case"img":case"image":case"link":H("error",t),H("load",t),i=r;break;case"details":H("toggle",t),i=r;break;case"input":xd(t,r),i=Ll(t,r),H("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),H("invalid",t);break;case"textarea":Od(t,r),i=Vl(t,r),H("invalid",t);break;default:i=r}jl(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Tp(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ap(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Li(t,l):typeof l=="number"&&Li(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Di.hasOwnProperty(s)?l!=null&&s==="onScroll"&&H("scroll",t):l!=null&&$u(t,s,l,o))}switch(n){case"input":Ss(t),Nd(t,r,!1);break;case"textarea":Ss(t),bd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ar(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ar(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_o)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ee(e),null;case 6:if(t&&e.stateNode!=null)Qm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=Ln($i.current),Ln(St.current),bs(e)){if(r=e.stateNode,n=e.memoizedProps,r[wt]=e,(s=r.nodeValue!==n)&&(t=qe,t!==null))switch(t.tag){case 3:Os(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Os(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=e,e.stateNode=r}return Ee(e),null;case 13:if(W(G),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($&&He!==null&&e.mode&1&&!(e.flags&128))fm(),br(),e.flags|=98560,s=!1;else if(s=bs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[wt]=e}else br(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ee(e),s=!1}else dt!==null&&(Eu(dt),dt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||G.current&1?le===0&&(le=3):Pc())),e.updateQueue!==null&&(e.flags|=4),Ee(e),null);case 4:return Lr(),hu(t,e),t===null&&zi(e.stateNode.containerInfo),Ee(e),null;case 10:return dc(e.type._context),Ee(e),null;case 17:return Me(e.type)&&wo(),Ee(e),null;case 19:if(W(G),s=e.memoizedState,s===null)return Ee(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ii(s,!1);else{if(le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ro(t),o!==null){for(e.flags|=128,ii(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return z(G,G.current&1|2),e.child}t=t.sibling}s.tail!==null&&ee()>Mr&&(e.flags|=128,r=!0,ii(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ro(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ii(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$)return Ee(e),null}else 2*ee()-s.renderingStartTime>Mr&&n!==1073741824&&(e.flags|=128,r=!0,ii(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ee(),e.sibling=null,n=G.current,z(G,r?n&1|2:n&1),e):(Ee(e),null);case 22:case 23:return Rc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Be&1073741824&&(Ee(e),e.subtreeFlags&6&&(e.flags|=8192)):Ee(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function Y_(t,e){switch(ac(e),e.tag){case 1:return Me(e.type)&&wo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Lr(),W(Ue),W(Se),gc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mc(e),null;case 13:if(W(G),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));br()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return W(G),null;case 4:return Lr(),null;case 10:return dc(e.type._context),null;case 22:case 23:return Rc(),null;case 24:return null;default:return null}}var Us=!1,Ae=!1,Z_=typeof WeakSet=="function"?WeakSet:Set,P=null;function wr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(t,e,r)}else n.current=null}function pu(t,e,n){try{n()}catch(r){X(t,e,r)}}var Af=!1;function ew(t,e){if(Xl=go,t=Zp(),sc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)h=f,f=y;for(;;){if(f===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(y=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yl={focusedElem:t,selectionRange:n},go=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,T=v.memoizedState,m=e.stateNode,d=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:ut(e.type,w),T);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(_){X(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return v=Af,Af=!1,v}function Ii(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&pu(e,n,s)}i=i.next}while(i!==r)}}function ca(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function mu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jm(t){var e=t.alternate;e!==null&&(t.alternate=null,Jm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wt],delete e[Wi],delete e[tu],delete e[U_],delete e[M_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xm(t){return t.tag===5||t.tag===3||t.tag===4}function Sf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_o));else if(r!==4&&(t=t.child,t!==null))for(gu(t,e,n),t=t.sibling;t!==null;)gu(t,e,n),t=t.sibling}function yu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(yu(t,e,n),t=t.sibling;t!==null;)yu(t,e,n),t=t.sibling}var me=null,ct=!1;function zt(t,e,n){for(n=n.child;n!==null;)Ym(t,e,n),n=n.sibling}function Ym(t,e,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(na,n)}catch{}switch(n.tag){case 5:Ae||wr(n,e);case 6:var r=me,i=ct;me=null,zt(t,e,n),me=r,ct=i,me!==null&&(ct?(t=me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(ct?(t=me,n=n.stateNode,t.nodeType===8?el(t.parentNode,n):t.nodeType===1&&el(t,n),Fi(t)):el(me,n.stateNode));break;case 4:r=me,i=ct,me=n.stateNode.containerInfo,ct=!0,zt(t,e,n),me=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&pu(n,e,o),i=i.next}while(i!==r)}zt(t,e,n);break;case 1:if(!Ae&&(wr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,e,a)}zt(t,e,n);break;case 21:zt(t,e,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,zt(t,e,n),Ae=r):zt(t,e,n);break;default:zt(t,e,n)}}function Tf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Z_),e.forEach(function(r){var i=uw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function at(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:me=a.stateNode,ct=!1;break e;case 3:me=a.stateNode.containerInfo,ct=!0;break e;case 4:me=a.stateNode.containerInfo,ct=!0;break e}a=a.return}if(me===null)throw Error(I(160));Ym(s,o,i),me=null,ct=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){X(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Zm(e,t),e=e.sibling}function Zm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(at(e,t),yt(t),r&4){try{Ii(3,t,t.return),ca(3,t)}catch(w){X(t,t.return,w)}try{Ii(5,t,t.return)}catch(w){X(t,t.return,w)}}break;case 1:at(e,t),yt(t),r&512&&n!==null&&wr(n,n.return);break;case 5:if(at(e,t),yt(t),r&512&&n!==null&&wr(n,n.return),t.flags&32){var i=t.stateNode;try{Li(i,"")}catch(w){X(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&wp(i,s),Bl(a,o);var u=Bl(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Tp(i,f):c==="dangerouslySetInnerHTML"?Ap(i,f):c==="children"?Li(i,f):$u(i,c,f,u)}switch(a){case"input":Ul(i,s);break;case"textarea":Ep(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Ar(i,!!s.multiple,y,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ar(i,!!s.multiple,s.defaultValue,!0):Ar(i,!!s.multiple,s.multiple?[]:"",!1))}i[Wi]=s}catch(w){X(t,t.return,w)}}break;case 6:if(at(e,t),yt(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){X(t,t.return,w)}}break;case 3:if(at(e,t),yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fi(e.containerInfo)}catch(w){X(t,t.return,w)}break;case 4:at(e,t),yt(t);break;case 13:at(e,t),yt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Tc=ee())),r&4&&Tf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ae=(u=Ae)||c,at(e,t),Ae=u):at(e,t),yt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(P=t,c=t.child;c!==null;){for(f=P=c;P!==null;){switch(h=P,y=h.child,h.tag){case 0:case 11:case 14:case 15:Ii(4,h,h.return);break;case 1:wr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){X(r,n,w)}}break;case 5:wr(h,h.return);break;case 22:if(h.memoizedState!==null){Rf(f);continue}}y!==null?(y.return=h,P=y):Rf(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Sp("display",o))}catch(w){X(t,t.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){X(t,t.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:at(e,t),yt(t),r&4&&Tf(t);break;case 21:break;default:at(e,t),yt(t)}}function yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Xm(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Li(i,""),r.flags&=-33);var s=Sf(t);yu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Sf(t);gu(t,a,o);break;default:throw Error(I(161))}}catch(l){X(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tw(t,e,n){P=t,eg(t)}function eg(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Us;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ae;a=Us;var u=Ae;if(Us=o,(Ae=l)&&!u)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?Pf(i):l!==null?(l.return=o,P=l):Pf(i);for(;s!==null;)P=s,eg(s),s=s.sibling;P=i,Us=a,Ae=u}kf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):kf(t)}}function kf(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ae||ca(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&uf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}uf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Fi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Ae||e.flags&512&&mu(e)}catch(h){X(e,e.return,h)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function Rf(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function Pf(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ca(4,e)}catch(l){X(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){X(e,i,l)}}var s=e.return;try{mu(e)}catch(l){X(e,s,l)}break;case 5:var o=e.return;try{mu(e)}catch(l){X(e,o,l)}}}catch(l){X(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var nw=Math.ceil,xo=jt.ReactCurrentDispatcher,Ac=jt.ReactCurrentOwner,nt=jt.ReactCurrentBatchConfig,V=0,he=null,ne=null,ve=0,Be=0,Er=In(0),le=0,Ji=null,Wn=0,da=0,Sc=0,Ai=null,De=null,Tc=0,Mr=1/0,Tt=null,No=!1,vu=null,cn=null,Ms=!1,tn=null,Oo=0,Si=0,_u=null,ro=-1,io=0;function Ce(){return V&6?ee():ro!==-1?ro:ro=ee()}function dn(t){return t.mode&1?V&2&&ve!==0?ve&-ve:F_.transition!==null?(io===0&&(io=Mp()),io):(t=B,t!==0||(t=window.event,t=t===void 0?16:Wp(t.type)),t):1}function ht(t,e,n,r){if(50<Si)throw Si=0,_u=null,Error(I(185));us(t,n,r),(!(V&2)||t!==he)&&(t===he&&(!(V&2)&&(da|=n),le===4&&Kt(t,ve)),Ve(t,r),n===1&&V===0&&!(e.mode&1)&&(Mr=ee()+500,aa&&An()))}function Ve(t,e){var n=t.callbackNode;F0(t,e);var r=mo(t,t===he?ve:0);if(r===0)n!==null&&Ud(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ud(n),e===1)t.tag===0?V_(Cf.bind(null,t)):um(Cf.bind(null,t)),D_(function(){!(V&6)&&An()}),n=null;else{switch(Vp(r)){case 1:n=Xu;break;case 4:n=Lp;break;case 16:n=po;break;case 536870912:n=Up;break;default:n=po}n=lg(n,tg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tg(t,e){if(ro=-1,io=0,V&6)throw Error(I(327));var n=t.callbackNode;if(Pr()&&t.callbackNode!==n)return null;var r=mo(t,t===he?ve:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=bo(t,r);else{e=r;var i=V;V|=2;var s=rg();(he!==t||ve!==e)&&(Tt=null,Mr=ee()+500,Mn(t,e));do try{sw();break}catch(a){ng(t,a)}while(1);cc(),xo.current=s,V=i,ne!==null?e=0:(he=null,ve=0,e=le)}if(e!==0){if(e===2&&(i=$l(t),i!==0&&(r=i,e=wu(t,i))),e===1)throw n=Ji,Mn(t,0),Kt(t,r),Ve(t,ee()),n;if(e===6)Kt(t,r);else{if(i=t.current.alternate,!(r&30)&&!rw(i)&&(e=bo(t,r),e===2&&(s=$l(t),s!==0&&(r=s,e=wu(t,s))),e===1))throw n=Ji,Mn(t,0),Kt(t,r),Ve(t,ee()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:xn(t,De,Tt);break;case 3:if(Kt(t,r),(r&130023424)===r&&(e=Tc+500-ee(),10<e)){if(mo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ce(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=eu(xn.bind(null,t,De,Tt),e);break}xn(t,De,Tt);break;case 4:if(Kt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ft(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nw(r/1960))-r,10<r){t.timeoutHandle=eu(xn.bind(null,t,De,Tt),r);break}xn(t,De,Tt);break;case 5:xn(t,De,Tt);break;default:throw Error(I(329))}}}return Ve(t,ee()),t.callbackNode===n?tg.bind(null,t):null}function wu(t,e){var n=Ai;return t.current.memoizedState.isDehydrated&&(Mn(t,e).flags|=256),t=bo(t,e),t!==2&&(e=De,De=n,e!==null&&Eu(e)),t}function Eu(t){De===null?De=t:De.push.apply(De,t)}function rw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kt(t,e){for(e&=~Sc,e&=~da,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ft(e),r=1<<n;t[n]=-1,e&=~r}}function Cf(t){if(V&6)throw Error(I(327));Pr();var e=mo(t,0);if(!(e&1))return Ve(t,ee()),null;var n=bo(t,e);if(t.tag!==0&&n===2){var r=$l(t);r!==0&&(e=r,n=wu(t,r))}if(n===1)throw n=Ji,Mn(t,0),Kt(t,e),Ve(t,ee()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xn(t,De,Tt),Ve(t,ee()),null}function kc(t,e){var n=V;V|=1;try{return t(e)}finally{V=n,V===0&&(Mr=ee()+500,aa&&An())}}function qn(t){tn!==null&&tn.tag===0&&!(V&6)&&Pr();var e=V;V|=1;var n=nt.transition,r=B;try{if(nt.transition=null,B=1,t)return t()}finally{B=r,nt.transition=n,V=e,!(V&6)&&An()}}function Rc(){Be=Er.current,W(Er)}function Mn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,b_(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(ac(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wo();break;case 3:Lr(),W(Ue),W(Se),gc();break;case 5:mc(r);break;case 4:Lr();break;case 13:W(G);break;case 19:W(G);break;case 10:dc(r.type._context);break;case 22:case 23:Rc()}n=n.return}if(he=t,ne=t=fn(t.current,null),ve=Be=e,le=0,Ji=null,Sc=da=Wn=0,De=Ai=null,Dn!==null){for(e=0;e<Dn.length;e++)if(n=Dn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Dn=null}return t}function ng(t,e){do{var n=ne;try{if(cc(),eo.current=Co,Po){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Po=!1}if(Hn=0,fe=se=K=null,Ei=!1,Gi=0,Ac.current=null,n===null||n.return===null){le=1,Ji=e,ne=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ve,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=gf(o);if(y!==null){y.flags&=-257,yf(y,o,a,s,e),y.mode&1&&mf(s,u,e),e=y,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){mf(s,u,e),Pc();break e}l=Error(I(426))}}else if($&&a.mode&1){var T=gf(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),yf(T,o,a,s,e),lc(Ur(l,a));break e}}s=l=Ur(l,a),le!==4&&(le=2),Ai===null?Ai=[s]:Ai.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Fm(s,l,e);lf(s,m);break e;case 1:a=l;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(cn===null||!cn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=jm(s,a,e);lf(s,_);break e}}s=s.return}while(s!==null)}sg(n)}catch(S){e=S,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(1)}function rg(){var t=xo.current;return xo.current=Co,t===null?Co:t}function Pc(){(le===0||le===3||le===2)&&(le=4),he===null||!(Wn&268435455)&&!(da&268435455)||Kt(he,ve)}function bo(t,e){var n=V;V|=2;var r=rg();(he!==t||ve!==e)&&(Tt=null,Mn(t,e));do try{iw();break}catch(i){ng(t,i)}while(1);if(cc(),V=n,xo.current=r,ne!==null)throw Error(I(261));return he=null,ve=0,le}function iw(){for(;ne!==null;)ig(ne)}function sw(){for(;ne!==null&&!x0();)ig(ne)}function ig(t){var e=ag(t.alternate,t,Be);t.memoizedProps=t.pendingProps,e===null?sg(t):ne=e,Ac.current=null}function sg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Y_(n,e),n!==null){n.flags&=32767,ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{le=6,ne=null;return}}else if(n=X_(n,e,Be),n!==null){ne=n;return}if(e=e.sibling,e!==null){ne=e;return}ne=e=t}while(e!==null);le===0&&(le=5)}function xn(t,e,n){var r=B,i=nt.transition;try{nt.transition=null,B=1,ow(t,e,n,r)}finally{nt.transition=i,B=r}return null}function ow(t,e,n,r){do Pr();while(tn!==null);if(V&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(j0(t,s),t===he&&(ne=he=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ms||(Ms=!0,lg(po,function(){return Pr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=nt.transition,nt.transition=null;var o=B;B=1;var a=V;V|=4,Ac.current=null,ew(t,n),Zm(n,t),k_(Yl),go=!!Xl,Yl=Xl=null,t.current=n,tw(n),N0(),V=a,B=o,nt.transition=s}else t.current=n;if(Ms&&(Ms=!1,tn=t,Oo=i),s=t.pendingLanes,s===0&&(cn=null),D0(n.stateNode),Ve(t,ee()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(No)throw No=!1,t=vu,vu=null,t;return Oo&1&&t.tag!==0&&Pr(),s=t.pendingLanes,s&1?t===_u?Si++:(Si=0,_u=t):Si=0,An(),null}function Pr(){if(tn!==null){var t=Vp(Oo),e=nt.transition,n=B;try{if(nt.transition=null,B=16>t?16:t,tn===null)var r=!1;else{if(t=tn,tn=null,Oo=0,V&6)throw Error(I(331));var i=V;for(V|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:Ii(8,c,s)}var f=c.child;if(f!==null)f.return=c,P=f;else for(;P!==null;){c=P;var h=c.sibling,y=c.return;if(Jm(c),c===u){P=null;break}if(h!==null){h.return=y,P=h;break}P=y}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var T=w.sibling;w.sibling=null,w=T}while(w!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ii(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,P=m;break e}P=s.return}}var d=t.current;for(P=d;P!==null;){o=P;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,P=g;else e:for(o=d;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ca(9,a)}}catch(S){X(a,a.return,S)}if(a===o){P=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,P=_;break e}P=a.return}}if(V=i,An(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(na,t)}catch{}r=!0}return r}finally{B=n,nt.transition=e}}return!1}function xf(t,e,n){e=Ur(n,e),e=Fm(t,e,1),t=un(t,e,1),e=Ce(),t!==null&&(us(t,1,e),Ve(t,e))}function X(t,e,n){if(t.tag===3)xf(t,t,n);else for(;e!==null;){if(e.tag===3){xf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){t=Ur(n,t),t=jm(e,t,1),e=un(e,t,1),t=Ce(),e!==null&&(us(e,1,t),Ve(e,t));break}}e=e.return}}function aw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ce(),t.pingedLanes|=t.suspendedLanes&n,he===t&&(ve&n)===n&&(le===4||le===3&&(ve&130023424)===ve&&500>ee()-Tc?Mn(t,0):Sc|=n),Ve(t,e)}function og(t,e){e===0&&(t.mode&1?(e=Rs,Rs<<=1,!(Rs&130023424)&&(Rs=4194304)):e=1);var n=Ce();t=Lt(t,e),t!==null&&(us(t,e,n),Ve(t,n))}function lw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),og(t,n)}function uw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),og(t,n)}var ag;ag=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ue.current)Le=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Le=!1,J_(t,e,n);Le=!!(t.flags&131072)}else Le=!1,$&&e.flags&1048576&&cm(e,Ao,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;no(t,e),t=e.pendingProps;var i=Or(e,Se.current);Rr(e,n),i=vc(null,e,r,t,i,n);var s=_c();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Me(r)?(s=!0,Eo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hc(e),i.updater=la,e.stateNode=i,i._reactInternals=e,au(e,r,t,n),e=cu(null,e,r,!0,s,n)):(e.tag=0,$&&s&&oc(e),Re(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(no(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=dw(r),t=ut(r,t),i){case 0:e=uu(null,e,r,t,n);break e;case 1:e=wf(null,e,r,t,n);break e;case 11:e=vf(null,e,r,t,n);break e;case 14:e=_f(null,e,r,ut(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),uu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),wf(t,e,r,i,n);case 3:e:{if(Wm(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,pm(t,e),ko(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ur(Error(I(423)),e),e=Ef(t,e,r,n,i);break e}else if(r!==i){i=Ur(Error(I(424)),e),e=Ef(t,e,r,n,i);break e}else for(He=ln(e.stateNode.containerInfo.firstChild),qe=e,$=!0,dt=null,n=vm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),r===i){e=Ut(t,e,n);break e}Re(t,e,r,n)}e=e.child}return e;case 5:return _m(e),t===null&&iu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Zl(r,i)?o=null:s!==null&&Zl(r,s)&&(e.flags|=32),Hm(t,e),Re(t,e,o,n),e.child;case 6:return t===null&&iu(e),null;case 13:return qm(t,e,n);case 4:return pc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Dr(e,null,r,n):Re(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),vf(t,e,r,i,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,z(So,r._currentValue),r._currentValue=o,s!==null)if(pt(s.value,o)){if(s.children===i.children&&!Ue.current){e=Ut(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Nt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),su(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),su(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Re(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Rr(e,n),i=rt(i),r=r(i),e.flags|=1,Re(t,e,r,n),e.child;case 14:return r=e.type,i=ut(r,e.pendingProps),i=ut(r.type,i),_f(t,e,r,i,n);case 15:return Bm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),no(t,e),e.tag=1,Me(r)?(t=!0,Eo(e)):t=!1,Rr(e,n),gm(e,r,i),au(e,r,i,n),cu(null,e,r,!0,t,n);case 19:return $m(t,e,n);case 22:return zm(t,e,n)}throw Error(I(156,e.tag))};function lg(t,e){return Dp(t,e)}function cw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(t,e,n,r){return new cw(t,e,n,r)}function Cc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dw(t){if(typeof t=="function")return Cc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ku)return 11;if(t===Qu)return 14}return 2}function fn(t,e){var n=t.alternate;return n===null?(n=tt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function so(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Cc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case dr:return Vn(n.children,i,s,e);case Gu:o=8,i|=8;break;case Nl:return t=tt(12,n,e,i|2),t.elementType=Nl,t.lanes=s,t;case Ol:return t=tt(13,n,e,i),t.elementType=Ol,t.lanes=s,t;case bl:return t=tt(19,n,e,i),t.elementType=bl,t.lanes=s,t;case yp:return fa(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mp:o=10;break e;case gp:o=9;break e;case Ku:o=11;break e;case Qu:o=14;break e;case Wt:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=tt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Vn(t,e,n,r){return t=tt(7,t,r,e),t.lanes=n,t}function fa(t,e,n,r){return t=tt(22,t,r,e),t.elementType=yp,t.lanes=n,t.stateNode={isHidden:!1},t}function ll(t,e,n){return t=tt(6,t,null,e),t.lanes=n,t}function ul(t,e,n){return e=tt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ha(0),this.expirationTimes=Ha(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ha(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xc(t,e,n,r,i,s,o,a,l){return t=new fw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hc(s),t}function hw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ug(t){if(!t)return _n;t=t._reactInternals;e:{if(er(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Me(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(Me(n))return lm(t,n,e)}return e}function cg(t,e,n,r,i,s,o,a,l){return t=xc(n,r,!0,t,i,s,o,a,l),t.context=ug(null),n=t.current,r=Ce(),i=dn(n),s=Nt(r,i),s.callback=e??null,un(n,s,i),t.current.lanes=i,us(t,i,r),Ve(t,r),t}function ha(t,e,n,r){var i=e.current,s=Ce(),o=dn(i);return n=ug(n),e.context===null?e.context=n:e.pendingContext=n,e=Nt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=un(i,e,o),t!==null&&(ht(t,i,o,s),Zs(t,i,o)),o}function Do(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Nf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nc(t,e){Nf(t,e),(t=t.alternate)&&Nf(t,e)}function pw(){return null}var dg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Oc(t){this._internalRoot=t}pa.prototype.render=Oc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));ha(t,e,null,null)};pa.prototype.unmount=Oc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qn(function(){ha(null,t,null,null)}),e[Dt]=null}};function pa(t){this._internalRoot=t}pa.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gt.length&&e!==0&&e<Gt[n].priority;n++);Gt.splice(n,0,t),n===0&&Hp(t)}};function bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ma(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Of(){}function mw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Do(o);s.call(u)}}var o=cg(e,r,t,0,null,!1,!1,"",Of);return t._reactRootContainer=o,t[Dt]=o.current,zi(t.nodeType===8?t.parentNode:t),qn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Do(l);a.call(u)}}var l=xc(t,0,!1,null,null,!1,!1,"",Of);return t._reactRootContainer=l,t[Dt]=l.current,zi(t.nodeType===8?t.parentNode:t),qn(function(){ha(e,l,n,r)}),l}function ga(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Do(o);a.call(l)}}ha(e,o,t,i)}else o=mw(n,e,t,i,r);return Do(o)}Fp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fi(e.pendingLanes);n!==0&&(Yu(e,n|1),Ve(e,ee()),!(V&6)&&(Mr=ee()+500,An()))}break;case 13:qn(function(){var r=Lt(t,1);if(r!==null){var i=Ce();ht(r,t,1,i)}}),Nc(t,1)}};Zu=function(t){if(t.tag===13){var e=Lt(t,134217728);if(e!==null){var n=Ce();ht(e,t,134217728,n)}Nc(t,134217728)}};jp=function(t){if(t.tag===13){var e=dn(t),n=Lt(t,e);if(n!==null){var r=Ce();ht(n,t,e,r)}Nc(t,e)}};Bp=function(){return B};zp=function(t,e){var n=B;try{return B=t,e()}finally{B=n}};Hl=function(t,e,n){switch(e){case"input":if(Ul(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=oa(r);if(!i)throw Error(I(90));_p(r),Ul(r,i)}}}break;case"textarea":Ep(t,n);break;case"select":e=n.value,e!=null&&Ar(t,!!n.multiple,e,!1)}};Pp=kc;Cp=qn;var gw={usingClientEntryPoint:!1,Events:[ds,mr,oa,kp,Rp,kc]},si={findFiberByHostInstance:bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},yw={bundleType:si.bundleType,version:si.version,rendererPackageName:si.rendererPackageName,rendererConfig:si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Op(t),t===null?null:t.stateNode},findFiberByHostInstance:si.findFiberByHostInstance||pw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vs.isDisabled&&Vs.supportsFiber)try{na=Vs.inject(yw),At=Vs}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gw;Xe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bc(e))throw Error(I(200));return hw(t,e,null,n)};Xe.createRoot=function(t,e){if(!bc(t))throw Error(I(299));var n=!1,r="",i=dg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=xc(t,1,!1,null,null,n,!1,r,i),t[Dt]=e.current,zi(t.nodeType===8?t.parentNode:t),new Oc(e)};Xe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=Op(e),t=t===null?null:t.stateNode,t};Xe.flushSync=function(t){return qn(t)};Xe.hydrate=function(t,e,n){if(!ma(e))throw Error(I(200));return ga(null,t,e,!0,n)};Xe.hydrateRoot=function(t,e,n){if(!bc(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=dg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=cg(e,null,t,1,n??null,i,!1,s,o),t[Dt]=e.current,zi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new pa(e)};Xe.render=function(t,e,n){if(!ma(e))throw Error(I(200));return ga(null,t,e,!1,n)};Xe.unmountComponentAtNode=function(t){if(!ma(t))throw Error(I(40));return t._reactRootContainer?(qn(function(){ga(null,null,t,!1,function(){t._reactRootContainer=null,t[Dt]=null})}),!0):!1};Xe.unstable_batchedUpdates=kc;Xe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ma(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return ga(t,e,n,!1,r)};Xe.version="18.2.0-next-9e3b772b8-20220608";function fg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fg)}catch(t){console.error(t)}}fg(),cp.exports=Xe;var vw=cp.exports,bf=vw;Cl.createRoot=bf.createRoot,Cl.hydrateRoot=bf.hydrateRoot;const _w="/kooop/assets/reqserv-2fce40ab.png",ww="/kooop/assets/search-333f67f0.png",hg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAACtCAYAAAANgcuAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAu6SURBVHgB7d3rcdtIEgfw1tV9P10Ei4vA6wgWjsDaCMyLwNoIJEVgbQTSRiA5AtIRWI4A2AisjaAX7RkUSS0BzPQ0ZkDq/6tC6UEQD3IaGMyTCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgdmehKzLzefdj1S0/dcu5//e3bnk6Ozvb0Ay6fdbdj/d+f89+f5tufy0BlNAlyk88rumWiozItrplPbK/O8v9AQQJCITdgDinRLINv62Q/VUEkEOX2H7mOJ8oUUTwsVUAAkxilx2J8T0lcbLLHsW6JAAD/5p4/YLiSCDUpHdH8WoCMDAYDP4Kr7nKV6TAruSopnhvCMDA2J3hZ9LRJs4PpPNMAAbGgkGb9/8vRWJXKrQiHQQDmJgjGP5D8a5I7xsBGJh6gM6lJr1HAjBQPBi6LNKKlA/dnee5moLA67OEO4P2wVngrgBmigaDf3CuSe+GAIyUvjOkPDij9SqYKh0MNen9QQCGigVD4oNz290V7gnAUMk7Q8qD8+8EYOzfVIDBg3OWUqSd9lkv22m15Ip1F1v7zdu+HtXOv+V4n/GsdViRYKC0B+f7Ob5Mn/ClPdZ7/1OW84n3SOJ68svnUnUePuFLC2NpF1bTRPazW19+yDG33fKZZi6M4G2X4V9o2+bt2S9fKOA73dnGG9r/btqd7czTBVny9KyzDth2w3o1GZLtsetQ9J3TyTbuOEMPPHY9Ai95vHtsjDW75zjr45Q+Kk3A/i9HtnHF4d9PY34ePFMwJGxXfCUjPN3POtUdzxAU7ILgim2C95CGDRMTx134Phw41zXrNGx14eT5gmHNeisy0G3nI+chCdasJx67brgN53HHiV1qOT4N7fWU7H5/4HQpWXL1ifTWI9vUdOvsNWSA47uyWkj+QrptfOD57gZDvnJaN96vHK/2771iO0EXpNxFqyvS21Ci7kO5SzwGrWtOuEN075WH43vSN6vXkgfVNesDQtNB7IJd9vKa7HzigCxT7mBIqVtIaofE7uq8onLkC4lOHD5haPqGW5Fjjr6zac7VqyittHHI5GeYLRh8ZFakk1ScOsOVRkszlI58iaWHw7nk+IdR7THLiI0rsidZ9OuxFeYIBikBqF4ulHZXSG2HVPLKukuKcVehK/t1a1qG2Kt1RTraO0qIj2MvzhEMcjLNgWVFOm1KRQrrR92YS8xFYY7sglbNxnU8BZyPnUOpGugYqX0WUu5IQmo3N93yp/+9r+XVZgN+JKqpAE/MVvY25Gpo5djleN8nbvOCwgsySmfthsScg8NplWNWkkbo8+eRUhz5cGj/7LJ+KWXgtwHHfcd6DQ9cAdnVWmt9p0DdutdsQ7YjFxD5zKWeRdJlw3rxRfS8jGBIyuuz+xC1HgK2v2adyZp01pXR96qJbad8t0F5erYJhnpg2xIYKRe5gxfYpYyOMSQ1i5TyMPab0TqHVGMv8rbRoMZkyZvvC7IhnTkfcHfdDGUl/fmlFKpUh/659GC44rT2PRXpPIUU5XbrPJFr/RlLHuR+Gnm9Ir3QRPKZdHIEgzybTWUlNZ97rzr0z6UHw6pbGtY3Z9AOdflnxLraQcz+N/JaynNSaCLRJibNIHGxvgT0FUkJhqPMJvUk/5mzriD4QXEmFSll6HAUPXyowiZgHfPzPJZgEKvMAQGH5bgzpFz11Y4pGIQExCXBqTNpoRzr2IJBXDGmrjppXVYv5pnNzBw10C0Nl2hIIu5rcLVkG3J3uCYAQ7MEQxfZ12Mr8LYVqbaphPRUu13y6BSg1lIhRbJJUobfLSvSj3/Uj5QAYKb0M8M16YvI3hOAoaLB4LM52mr1XM0C4JVYQmnSI+lMNWkAiLKEYEipYHlLAEaKB4PPKrWkUxGcmmJ1SEupdGtJB5Vvp6dY9vcYa6Dh9BXJ/iIYYImKlBSeejAcaw31ko+7pfn9ErCOeRb51IPhL1qusQTfklKGRow5PtOQYWkq0msP/fPUg0FbbBtzm1Y97Pkuo0Na0gvtb6ANmpbymOrdaN4CAcFwWBVyhWX9dFyjx5VY3Pz/wPW0iSlXx5t6qLtvwufeO3gOryEYNPlvCYSQftfavtlfAtbRdtj/yNNDxcidb0XxnjNP1fWjuy9vx02qfPZJhvGpSKcdau180sHgT1p7JbscuTJJWbgMIrwinUejdQ6RQF4PBYRPTJNTjZHtMaVYkTvefphS+T2ltGkz9MIxDC855kP35U6NEyRjL9Wk08+rsKH9O8wFJeS5Q66usk6375Z0V8CK3KgiG9rPbvUTN2qdwkT0g3fcYw+GqltkmMd3Q7c+n6g2pA8ISfQXZCdmYDRZN2UQhJrstGeFZjM1JOcweHcbyyZpy7pzF2fKle5yYp3UkfmstH40uyCJI99Zy/UZap/zQox2JhsLBm1eW/O+1JMfLRnxVzRtrzpLoSU9u2QIy9KVcPcxQZyoH/XcmlyIbsdWGAwGnw/XfAmaYEgdDWEy/96dT5/3L+VGk83w9RHaMV0ttAX2P8ddaPIcpkqTNAlb857UUorQoP2VygxQdTM1SMIYf1UuERBtt7zLPfCCvwBY3slvxp4VelPBEFvWvdHMveavmBvSC0rg8qV2i7SIzJllSgqEnr/Fv6N8NcAbcoHQUgH+Tm5x4TL5/H/guIkhKlLyZfcN61QUqXvPBc87wfiaZ5j2iV3F0z3Px2Qid9bPz7De2UZKmpDzqMkSuw+/Cdi5xQcoJx/7RSftl11QWMxE31tzhrnPeBsUDduQxCMJWFt/8vL4koNhZ1u3Ee83PY9DJyYfvNTIrnl/xpTGH2hKRc7Q/u4nTlj2W5ERv88Vu8CImTWn8e+55ELDXrJrrnDLcTMJfffry/tqMsaGweC39/L7aXaWB7+/mhKc0cL5EzynbYnR00SLT6v9yv6qnX3vJvSW3EN7e7bAUf3YXSQq/2e189IzbY+7pRmxm3NZ03ZLnjvfUQGLr4EuVeuZ2K6pKJ/QW4Io6PYJ4CEYDmD3IH/F+3lwyaeu6Iid6nnBTHi69Kxhwwf3XHKfFxs/QOeAO8M/yZdRjbwur635+CZMOdXzMoNg2OGzC1XAqrJOcr1KLqd6XtYQDPs+RqwbMpzJUpzqeZlCMOyLqTys6XiUOK+WjgyCAf6BX+lQ/wiGfVG1yUeUaFqKk2Pi88VBMOyLbVpxLImmpTgWJUot6bRUCIJhX2ww1ARDWtIpMge0QDDs+0Zx3tBxyF53kNBteEOFIBj2xTbMu1h6JZU/vtgm9g3Z2FC8Yo0jEQz7NhTHekylOdQUqbuqW2VVYrvX3i+xSfyrxfudlxbdliYEx/fi+0qGOLznYsNH2ObrpLGuf/Ei7w7sGufFuiVD7FrKTnXbbHgBgbD4nm65sW5g3rZb3i7tFi+JjOLHav01ZFgVxbHU5LKUfaGDfFaSHXs8gWErT5O/ksVmlUTKmKjm2PVbiCXn/WpbrcIBrG+Lr52vwZQyEMSiAhoWgN3dQatYQPjjvmO9mgBe4rSBuqQEp6KM2A0X07DeokvFoCDWPzv0Gs7Qt5jdIGhrTlcRwBB2A4OlatgNflWRAXZBKneBT5wWrLvwrEAoWp3ELvtQkw1parAhN8FhSyODkLEr1embUlTkptitKW0aqkNaKjjA8JIgGCb4K7rUys5Z5Ni++LuifN7mGKHwGCAYArCrYX6g0/Pb1Gw2rwka6gXwNbJLmRfOyg0CAdRYXxm3NNcEkIqPOyCk9GlFAFZ4/ll/5iBjqlYEYI1d8+g1L9+PmWwIYG7sKtQaXqY7xt0AcmJ3l5BniYbL6+c0qwigFN7OO9ZwfmsuOK/cKUCl20zYTfq4IjeQr3UTCtGSm6dbao8f0ZE+HYIhA94O11KT6/bYT55YTby1JT8hIbkukvJTEv8TEr89BMMCvMzfo9EcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALwqfwPu9k0O3n0Y2QAAAABJRU5ErkJggg==",Df="/kooop/assets/docta-1ec713c3.jpg";/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xi(){return Xi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xi.apply(this,arguments)}var nn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nn||(nn={}));const Lf="popstate";function Ew(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Iu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Lo(i)}return Aw(e,n,null,t)}function re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Dc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Iw(){return Math.random().toString(36).substr(2,8)}function Uf(t,e){return{usr:t.state,key:t.key,idx:e}}function Iu(t,e,n,r){return n===void 0&&(n=null),Xi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?qr(e):e,{state:n,key:e&&e.key||r||Iw()})}function Lo(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function qr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Aw(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=nn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Xi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=nn.Pop;let T=c(),m=T==null?null:T-u;u=T,l&&l({action:a,location:w.location,delta:m})}function h(T,m){a=nn.Push;let d=Iu(w.location,T,m);n&&n(d,T),u=c()+1;let g=Uf(d,u),_=w.createHref(d);try{o.pushState(g,"",_)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(_)}s&&l&&l({action:a,location:w.location,delta:1})}function y(T,m){a=nn.Replace;let d=Iu(w.location,T,m);n&&n(d,T),u=c();let g=Uf(d,u),_=w.createHref(d);o.replaceState(g,"",_),s&&l&&l({action:a,location:w.location,delta:0})}function v(T){let m=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof T=="string"?T:Lo(T);return re(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let w={get action(){return a},get location(){return t(i,o)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Lf,f),l=T,()=>{i.removeEventListener(Lf,f),l=null}},createHref(T){return e(i,T)},createURL:v,encodeLocation(T){let m=v(T);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:y,go(T){return o.go(T)}};return w}var Mf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Mf||(Mf={}));function Sw(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?qr(e):e,i=Lc(r.pathname||"/",n);if(i==null)return null;let s=pg(t);Tw(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Dw(s[a],Mw(i));return o}function pg(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(re(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=hn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),pg(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Ow(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of mg(s.path))i(s,o,l)}),e}function mg(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=mg(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Tw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:bw(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const kw=/^:\w+$/,Rw=3,Pw=2,Cw=1,xw=10,Nw=-2,Vf=t=>t==="*";function Ow(t,e){let n=t.split("/"),r=n.length;return n.some(Vf)&&(r+=Nw),e&&(r+=Pw),n.filter(i=>!Vf(i)).reduce((i,s)=>i+(kw.test(s)?Rw:s===""?Cw:xw),r)}function bw(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Dw(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Lw({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:hn([i,c.pathname]),pathnameBase:Bw(hn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=hn([i,c.pathnameBase]))}return s}function Lw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Uw(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=a[f]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=Vw(a[f]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Uw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Dc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Mw(t){try{return decodeURI(t)}catch(e){return Dc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Vw(t,e){try{return decodeURIComponent(t)}catch(n){return Dc(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Lc(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Fw(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?qr(t):t;return{pathname:n?n.startsWith("/")?n:jw(n,e):e,search:zw(r),hash:Hw(i)}}function jw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function cl(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gg(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function yg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=qr(t):(i=Xi({},t),re(!i.pathname||!i.pathname.includes("?"),cl("?","pathname","search",i)),re(!i.pathname||!i.pathname.includes("#"),cl("#","pathname","hash",i)),re(!i.search||!i.search.includes("#"),cl("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let f=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?e[f]:"/"}let l=Fw(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const hn=t=>t.join("/").replace(/\/\/+/g,"/"),Bw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),zw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Hw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Ww(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const vg=["post","put","patch","delete"];new Set(vg);const qw=["get",...vg];new Set(qw);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uo(){return Uo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Uo.apply(this,arguments)}const Uc=E.createContext(null),$w=E.createContext(null),$r=E.createContext(null),ya=E.createContext(null),Sn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),_g=E.createContext(null);function Gw(t,e){let{relative:n}=e===void 0?{}:e;hs()||re(!1);let{basename:r,navigator:i}=E.useContext($r),{hash:s,pathname:o,search:a}=Eg(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:hn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function hs(){return E.useContext(ya)!=null}function ps(){return hs()||re(!1),E.useContext(ya).location}function wg(t){E.useContext($r).static||E.useLayoutEffect(t)}function Mc(){let{isDataRoute:t}=E.useContext(Sn);return t?lE():Kw()}function Kw(){hs()||re(!1);let t=E.useContext(Uc),{basename:e,navigator:n}=E.useContext($r),{matches:r}=E.useContext(Sn),{pathname:i}=ps(),s=JSON.stringify(gg(r).map(l=>l.pathnameBase)),o=E.useRef(!1);return wg(()=>{o.current=!0}),E.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=yg(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:hn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const Qw=E.createContext(null);function Jw(t){let e=E.useContext(Sn).outlet;return e&&E.createElement(Qw.Provider,{value:t},e)}function Eg(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=E.useContext(Sn),{pathname:i}=ps(),s=JSON.stringify(gg(r).map(o=>o.pathnameBase));return E.useMemo(()=>yg(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Xw(t,e){return Yw(t,e)}function Yw(t,e,n){hs()||re(!1);let{navigator:r}=E.useContext($r),{matches:i}=E.useContext(Sn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=ps(),u;if(e){var c;let w=typeof e=="string"?qr(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||re(!1),u=w}else u=l;let f=u.pathname||"/",h=a==="/"?f:f.slice(a.length)||"/",y=Sw(t,{pathname:h}),v=rE(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:hn([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:hn([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&v?E.createElement(ya.Provider,{value:{location:Uo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:nn.Pop}},v):v}function Zw(){let t=aE(),e=Ww(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,s)}const eE=E.createElement(Zw,null);class tE extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?E.createElement(Sn.Provider,{value:this.props.routeContext},E.createElement(_g.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nE(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(Uc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Sn.Provider,{value:e},r)}function rE(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||re(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||eE);let h=e.concat(s.slice(0,u+1)),y=()=>{let v;return c?v=f:l.route.Component?v=E.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,E.createElement(nE,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?E.createElement(tE,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:y(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):y()},null)}var Ig=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Ig||{}),Mo=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Mo||{});function iE(t){let e=E.useContext(Uc);return e||re(!1),e}function sE(t){let e=E.useContext($w);return e||re(!1),e}function oE(t){let e=E.useContext(Sn);return e||re(!1),e}function Ag(t){let e=oE(),n=e.matches[e.matches.length-1];return n.route.id||re(!1),n.route.id}function aE(){var t;let e=E.useContext(_g),n=sE(Mo.UseRouteError),r=Ag(Mo.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function lE(){let{router:t}=iE(Ig.UseNavigateStable),e=Ag(Mo.UseNavigateStable),n=E.useRef(!1);return wg(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Uo({fromRouteId:e},s)))},[t,e])}function uE(t){return Jw(t.context)}function lt(t){re(!1)}function cE(t){let{basename:e="/",children:n=null,location:r,navigationType:i=nn.Pop,navigator:s,static:o=!1}=t;hs()&&re(!1);let a=e.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=qr(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:y="default"}=r,v=E.useMemo(()=>{let w=Lc(u,a);return w==null?null:{location:{pathname:w,search:c,hash:f,state:h,key:y},navigationType:i}},[a,u,c,f,h,y,i]);return v==null?null:E.createElement($r.Provider,{value:l},E.createElement(ya.Provider,{children:n,value:v}))}function dE(t){let{children:e,location:n}=t;return Xw(Au(e),n)}new Promise(()=>{});function Au(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,Au(r.props.children,s));return}r.type!==lt&&re(!1),!r.props.index||!r.props.children||re(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Au(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Su(){return Su=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Su.apply(this,arguments)}function fE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function hE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function pE(t,e){return t.button===0&&(!e||e==="_self")&&!hE(t)}const mE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],gE="startTransition",Ff=l0[gE];function yE(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=Ew({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=E.useCallback(f=>{u&&Ff?Ff(()=>l(f)):l(f)},[l,u]);return E.useLayoutEffect(()=>o.listen(c),[o,c]),E.createElement(cE,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const vE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_E=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_t=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,f=fE(e,mE),{basename:h}=E.useContext($r),y,v=!1;if(typeof u=="string"&&_E.test(u)&&(y=u,vE))try{let d=new URL(window.location.href),g=u.startsWith("//")?new URL(d.protocol+u):new URL(u),_=Lc(g.pathname,h);g.origin===d.origin&&_!=null?u=_+g.search+g.hash:v=!0}catch{}let w=Gw(u,{relative:i}),T=wE(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(d){r&&r(d),d.defaultPrevented||T(d)}return E.createElement("a",Su({},f,{href:y||w,onClick:v||s?r:m,ref:n,target:l}))});var jf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(jf||(jf={}));var Bf;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Bf||(Bf={}));function wE(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Mc(),l=ps(),u=Eg(t,{relative:o});return E.useCallback(c=>{if(pE(c,n)){c.preventDefault();let f=r!==void 0?r:Lo(l)===Lo(u);a(t,{replace:f,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const Sg="/kooop/assets/budget-954e8633.png",Tg="/kooop/assets/date-41afa211.png",kg="/kooop/assets/location-78db43e9.png",Rg="/kooop/assets/media-f7ac3fd5.png";function EE(){var t=new Date().toISOString().replace(/[-:.]/g,""),e=(""+Math.random()).substring(2,8),n=t+e;return n}const rn={budget:Sg,date:Tg,location:kg,media:Rg},IE={HOME:{path:"home"},VIEW_KOOP:{path:"viewKoop"}},Pe={HOME:{path:"/",title:"Home"},MY_ACCOUNT:{path:"/my_acc",title:"My Account"},VIEW_KOOP:{path:"/view",title:"Koop"},SUBCRIPTION:{path:"/sub",title:"Subscription"},LOGIN:{path:"/login",title:"My Account"},LEGAL:{path:"/legal",title:"Koop"},INTRO:{path:"/intro",title:"Subscription"},TEST_REC:{path:"/test_rec",title:"Test Rect"}},Vc=" max-w-[900px] overflow-hidden mx-auto min-h-[320pt]";function AE(t){var n;const e=(n=t==null?void 0:t.current)==null?void 0:n.value;return e===void 0?"":e}const ar=AE;function SE({onLogoClick:t,small:e,user:n}){return p.jsxs("div",{className:"header bg-sky-500 flex flex-col",children:[p.jsxs("div",{className:`cont-logo  items-center flex
      
      ${e?" justify-around items-center ":"flex-col justify-center  "}
      
      
      `,children:[p.jsxs("div",{className:`self-end m-4 ${e?" flex-1 ":""}  `,children:[p.jsx(_t,{to:Pe.MY_ACCOUNT.path,children:p.jsx("img",{alt:"My Account",src:Df,className:"rounded-full w-[30pt] mx-auto hover:outline cursor-pointer hover:outline-white  "})}),p.jsxs("div",{className:"text-center text-sm bg-white text-sky-500 rounded-lg w-fit mx-auto px-1 my-2 ",children:[p.jsx("div",{children:n.displayname}),p.jsxs("div",{children:[" ",n.phone]})]})]}),p.jsx(_t,{to:"/",children:p.jsx("img",{className:`cursor-pointer ${e?" flex-3 ":" -mt-[50pt] "}`,src:hg,width:e?160:100})}),p.jsx("p",{className:` p-2 text-center  transition-colors ease-in-out duration-150
          
          ${e?"text-sm flex-1 ":""}
          
          `,children:"100000 + of services and quick deals at your fingertips ..."})]}),p.jsx("div",{className:` gap-2 py-2 
      
      ${e?" h-[60pt] ":" h-[80pt] "}
      
      flex overflow-x-scroll w-[100vw]`,children:[...Array(20).fill(0)].map((r,i)=>p.jsx("div",{className:"bg-green-200  overflow-hidden min-w-[120pt] rounded-lg   ",children:p.jsx("img",{className:"w-[100%]  ",src:Df})},i))})]})}function Fs({icon:t,text:e}){return p.jsxs("div",{className:"flex",children:[p.jsx("img",{src:t,width:20}),p.jsx("span",{children:e})]})}function TE({data:t,onKoopClicked:e}){const{date:n,budget:r,location:i,media:s}=t;return p.jsxs("div",{onClick:o=>e(t),className:"border-sky-100 md:w-[50%]  flex flex-col gap-2 cursor-pointer border my-2 p-2 rounded-lg hover:border-green-500 shadow-black/10  shadow-lg hover:bg-sky-slate-200",children:[p.jsxs("div",{className:" flex gap-2 text-sm  text-gray-400",children:[r&&p.jsx(Fs,{text:r+" $",icon:rn.budget}),n&&p.jsx(Fs,{text:n,icon:rn.date}),i&&p.jsx(Fs,{text:i,icon:rn.location}),s&&p.jsx(Fs,{text:"Media",icon:rn.media})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between",children:[p.jsx("span",{children:t.text}),p.jsx("span",{className:"bg-green-700 text-xs p-1 rounded-lg text-white",children:"Exp. dans 22h"})]}),p.jsx("div",{className:"italic text-sm my-1 text-slate-400 ",children:"Posted by @DoctaRhyf"})]})]})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Cg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(h=64)),r.push(n[c],n[f],n[h],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new RE;const h=s<<2|a>>4;if(r.push(h),u!==64){const y=a<<4&240|u>>2;if(r.push(y),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class RE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const PE=function(t){const e=Pg(t);return Cg.encodeByteArray(e,!0)},Vo=function(t){return PE(t).replace(/\./g,"")},xg=function(t){try{return Cg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=()=>CE().__FIREBASE_DEFAULTS__,NE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},OE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xg(t[1]);return e&&JSON.parse(e)},va=()=>{try{return xE()||NE()||OE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ng=t=>{var e,n;return(n=(e=va())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Og=t=>{const e=Ng(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bg=()=>{var t;return(t=va())===null||t===void 0?void 0:t.config},Dg=t=>{var e;return(e=va())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Vo(JSON.stringify(n)),Vo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function DE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function LE(){var t;const e=(t=va())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ug(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function UE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ME(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Mg(){try{return typeof indexedDB=="object"}catch{return!1}}function Vg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function VE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="FirebaseError";class ot extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FE,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tr.prototype.create)}}class tr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?jE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ot(i,a,r)}}function jE(t,e){return t.replace(BE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const BE=/\{\$([^}]+)}/g;function zE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(zf(s)&&zf(o)){if(!Yi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function HE(t,e){const n=new WE(t,e);return n.subscribe.bind(n)}class WE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=dl),i.error===void 0&&(i.error=dl),i.complete===void 0&&(i.complete=dl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function dl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=1e3,GE=2,KE=4*60*60*1e3,QE=.5;function Hf(t,e=$E,n=GE){const r=e*Math.pow(n,t),i=Math.round(QE*r*(Math.random()-.5)*2);return Math.min(KE,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t){return t&&t._delegate?t._delegate:t}class st{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YE(e))try{this.getOrInitializeService({instanceIdentifier:Nn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nn){return this.instances.has(e)}getOptions(e=Nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nn){return this.component?this.component.multipleInstances?e:Nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XE(t){return t===Nn?void 0:t}function YE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new JE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(j||(j={}));const eI={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},tI=j.INFO,nI={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},rI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=nI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _a{constructor(e){this.name=e,this._logLevel=tI,this._logHandler=rI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const iI=(t,e)=>e.some(n=>t instanceof n);let Wf,qf;function sI(){return Wf||(Wf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oI(){return qf||(qf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fg=new WeakMap,Tu=new WeakMap,jg=new WeakMap,fl=new WeakMap,Fc=new WeakMap;function aI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fg.set(n,t)}).catch(()=>{}),Fc.set(e,t),e}function lI(t){if(Tu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Tu.set(t,e)}let ku={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uI(t){ku=t(ku)}function cI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hl(this),e,...n);return jg.set(r,e.sort?e.sort():[e]),pn(r)}:oI().includes(t)?function(...e){return t.apply(hl(this),e),pn(Fg.get(this))}:function(...e){return pn(t.apply(hl(this),e))}}function dI(t){return typeof t=="function"?cI(t):(t instanceof IDBTransaction&&lI(t),iI(t,sI())?new Proxy(t,ku):t)}function pn(t){if(t instanceof IDBRequest)return aI(t);if(fl.has(t))return fl.get(t);const e=dI(t);return e!==t&&(fl.set(t,e),Fc.set(e,t)),e}const hl=t=>Fc.get(t);function fI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=pn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(pn(o.result),l.oldVersion,l.newVersion,pn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const hI=["get","getKey","getAll","getAllKeys","count"],pI=["put","add","delete","clear"],pl=new Map;function $f(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pl.get(e))return pl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=pI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return pl.set(e,s),s}uI(t=>({...t,get:(e,n,r)=>$f(e,n)||t.get(e,n,r),has:(e,n)=>!!$f(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ru="@firebase/app",Gf="0.9.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new _a("@firebase/app"),yI="@firebase/app-compat",vI="@firebase/analytics-compat",_I="@firebase/analytics",wI="@firebase/app-check-compat",EI="@firebase/app-check",II="@firebase/auth",AI="@firebase/auth-compat",SI="@firebase/database",TI="@firebase/database-compat",kI="@firebase/functions",RI="@firebase/functions-compat",PI="@firebase/installations",CI="@firebase/installations-compat",xI="@firebase/messaging",NI="@firebase/messaging-compat",OI="@firebase/performance",bI="@firebase/performance-compat",DI="@firebase/remote-config",LI="@firebase/remote-config-compat",UI="@firebase/storage",MI="@firebase/storage-compat",VI="@firebase/firestore",FI="@firebase/firestore-compat",jI="firebase",BI="10.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="[DEFAULT]",zI={[Ru]:"fire-core",[yI]:"fire-core-compat",[_I]:"fire-analytics",[vI]:"fire-analytics-compat",[EI]:"fire-app-check",[wI]:"fire-app-check-compat",[II]:"fire-auth",[AI]:"fire-auth-compat",[SI]:"fire-rtdb",[TI]:"fire-rtdb-compat",[kI]:"fire-fn",[RI]:"fire-fn-compat",[PI]:"fire-iid",[CI]:"fire-iid-compat",[xI]:"fire-fcm",[NI]:"fire-fcm-compat",[OI]:"fire-perf",[bI]:"fire-perf-compat",[DI]:"fire-rc",[LI]:"fire-rc-compat",[UI]:"fire-gcs",[MI]:"fire-gcs-compat",[VI]:"fire-fst",[FI]:"fire-fst-compat","fire-js":"fire-js",[jI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new Map,Cu=new Map;function HI(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mt(t){const e=t.name;if(Cu.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;Cu.set(e,t);for(const n of Fo.values())HI(n,t);return!0}function Tn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mn=new tr("app","Firebase",WI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=BI;function Bg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mn.create("bad-app-name",{appName:String(i)});if(n||(n=bg()),!n)throw mn.create("no-options");const s=Fo.get(i);if(s){if(Yi(n,s.options)&&Yi(r,s.config))return s;throw mn.create("duplicate-app",{appName:i})}const o=new ZE(i);for(const l of Cu.values())o.addComponent(l);const a=new qI(n,r,o);return Fo.set(i,a),a}function wa(t=Pu){const e=Fo.get(t);if(!e&&t===Pu&&bg())return Bg();if(!e)throw mn.create("no-app",{appName:t});return e}function Fe(t,e,n){var r;let i=(r=zI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(a.join(" "));return}mt(new st(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="firebase-heartbeat-database",GI=1,Zi="firebase-heartbeat-store";let ml=null;function zg(){return ml||(ml=fI($I,GI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zi)}}}).catch(t=>{throw mn.create("idb-open",{originalErrorMessage:t.message})})),ml}async function KI(t){try{return await(await zg()).transaction(Zi).objectStore(Zi).get(Hg(t))}catch(e){if(e instanceof ot)$n.warn(e.message);else{const n=mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function Kf(t,e){try{const r=(await zg()).transaction(Zi,"readwrite");await r.objectStore(Zi).put(e,Hg(t)),await r.done}catch(n){if(n instanceof ot)$n.warn(n.message);else{const r=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function Hg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=1024,JI=30*24*60*60*1e3;class XI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Qf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=JI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qf(),{heartbeatsToSend:n,unsentEntries:r}=YI(this._heartbeatsCache.heartbeats),i=Vo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Qf(){return new Date().toISOString().substring(0,10)}function YI(t,e=QI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mg()?Vg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await KI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Jf(t){return Vo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(t){mt(new st("platform-logger",e=>new mI(e),"PRIVATE")),mt(new st("heartbeat",e=>new XI(e),"PRIVATE")),Fe(Ru,Gf,t),Fe(Ru,Gf,"esm2017"),Fe("fire-js","")}eA("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kr="10.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new _a("@firebase/firestore");function jo(t,...e){if(Vr.logLevel<=j.DEBUG){const n=e.map(Bc);Vr.debug(`Firestore (${Kr}): ${t}`,...n)}}function jc(t,...e){if(Vr.logLevel<=j.ERROR){const n=e.map(Bc);Vr.error(`Firestore (${Kr}): ${t}`,...n)}}function Wg(t,...e){if(Vr.logLevel<=j.WARN){const n=e.map(Bc);Vr.warn(`Firestore (${Kr}): ${t}`,...n)}}function Bc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Kr}) INTERNAL ASSERTION FAILED: `+t;throw jc(e),new Error(e)}function wn(t,e){t||Y()}function Ea(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="ok",tA="cancelled",Ti="unknown",b="invalid-argument",nA="deadline-exceeded",rA="not-found",iA="permission-denied",xu="unauthenticated",sA="resource-exhausted",Fr="failed-precondition",oA="aborted",aA="out-of-range",qg="unimplemented",lA="internal",uA="unavailable";class O extends ot{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Oe.UNAUTHENTICATED))}shutdown(){}}class dA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fA{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(wn(typeof e.accessToken=="string"),new $g(e.accessToken,new Oe(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class hA{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class pA{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new hA(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gA{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(wn(typeof e.token=="string"),new mA(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class es{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new es("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof es&&e.projectId===this.projectId&&e.database===this.database}}class ts{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ts.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ts?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ae extends ts{construct(e,n,r){return new ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(b,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ae(n)}static emptyPath(){return new ae([])}}const vA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends ts{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return vA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(b,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new O(b,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(b,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new O(b,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(ae.fromString(e))}static fromName(e){return new ye(ae.fromString(e).popFirst(5))}static empty(){return new ye(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new ae(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t,e,n){if(!n)throw new O(b,`Function ${t}() cannot be called with an empty ${e}.`)}function Yf(t){if(!ye.isDocumentKey(t))throw new O(b,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zf(t){if(ye.isDocumentKey(t))throw new O(b,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ia(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function zc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(b,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ia(t);throw new O(b,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js=null;function _A(){return js===null?js=function(){return 268435456+Math.round(2147483648*Math.random())}():js++,"0x"+js.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t){return t==null}function Bo(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var eh,M;function th(t){if(t===void 0)return jc("RPC_ERROR","HTTP error has no status"),Ti;switch(t){case 200:return Xf;case 400:return Fr;case 401:return xu;case 403:return iA;case 404:return rA;case 409:return oA;case 416:return aA;case 429:return sA;case 499:return tA;case 500:return Ti;case 501:return qg;case 503:return uA;case 504:return nA;default:return t>=200&&t<300?Xf:t>=400&&t<500?Fr:t>=500&&t<600?lA:Ti}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(M=eh||(eh={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";class IA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+n.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get P(){return!1}R(n,r,i,s,o){const a=_A(),l=this.I(n,r);jo("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(u,s,o),this.p(n,l,u,i).then(c=>(jo("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Wg("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}g(n,r,i,s,o,a){return this.R(n,r,i,s,o)}V(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Kr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}I(n,r){const i=EA[n];return`${this.m}/v1/${r}:${i}`}}{constructor(e,n){super(e),this.F=n}v(e,n){throw new Error("Not supported by FetchConnection")}async p(e,n,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.F(n,{method:"POST",headers:r,body:o})}catch(l){const u=l;throw new O(th(u.status),"Request failed with error: "+u.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const u=(s=l==null?void 0:l.error)===null||s===void 0?void 0:s.message;throw new O(th(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{static C(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=AA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function Qg(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Aa(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new TA("Invalid base64 string: "+s):s}}(e);return new Mt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const kA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gn(t){if(wn(!!t),typeof t=="string"){let e=0;const n=kA.exec(t);if(wn(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(t.seconds),nanos:oe(t.nanos)}}function oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ns(t){return typeof t=="string"?Mt.fromBase64String(t):Mt.fromUint8Array(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(b,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(b,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(b,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(b,"Timestamp seconds out of range: "+e)}static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new $e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xg(t){const e=t.mapValue.fields.__previous_value__;return Jg(e)?Xg(e):e}function rs(t){const e=Gn(t.mapValue.fields.__local_write_time__.timestampValue);return new $e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs={fields:{__type__:{stringValue:"__max__"}}};function Kn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jg(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:Y()}function zo(t,e){if(t===e)return!0;const n=Kn(t);if(n!==Kn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return rs(t).isEqual(rs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Gn(i.timestampValue),a=Gn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ns(i.bytesValue).isEqual(ns(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return oe(i.geoPointValue.latitude)===oe(s.geoPointValue.latitude)&&oe(i.geoPointValue.longitude)===oe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return oe(i.integerValue)===oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=oe(i.doubleValue),a=oe(s.doubleValue);return o===a?Bo(o)===Bo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Qg(t.arrayValue.values||[],e.arrayValue.values||[],zo);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(nh(o)!==nh(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!zo(o[l],a[l])))return!1;return!0}(t,e);default:return Y()}}function is(t,e){return(t.values||[]).find(n=>zo(n,e))!==void 0}function Ho(t,e){if(t===e)return 0;const n=Kn(t),r=Kn(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=oe(s.integerValue||s.doubleValue),l=oe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return rh(t.timestampValue,e.timestampValue);case 4:return rh(rs(t),rs(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ns(s),l=ns(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=de(a[u],l[u]);if(c!==0)return c}return de(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=de(oe(s.latitude),oe(o.latitude));return a!==0?a:de(oe(s.longitude),oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Ho(a[u],l[u]);if(c)return c}return de(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Bs&&o===Bs)return 0;if(s===Bs)return 1;if(o===Bs)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const h=de(l[f],c[f]);if(h!==0)return h;const y=Ho(a[l[f]],u[c[f]]);if(y!==0)return y}return de(l.length,c.length)}(t.mapValue,e.mapValue);default:throw Y()}}function rh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Gn(t),r=Gn(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function ih(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Yg(t){return!!t&&"arrayValue"in t}function sh(t){return!!t&&"nullValue"in t}function oh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gl(t){return!!t&&"mapValue"in t}function ki(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Aa(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ki(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ki(t.arrayValue.values[n]);return e}return Object.assign({},t)}class ah{constructor(e,n){this.position=e,this.inclusive=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{}class gt extends Zg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new RA(e,n,r):n==="array-contains"?new xA(e,r):n==="in"?new NA(e,r):n==="not-in"?new OA(e,r):n==="array-contains-any"?new bA(e,r):new gt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new PA(e,r):new CA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ho(n,this.value)):n!==null&&Kn(this.value)===Kn(n)&&this.matchesComparison(Ho(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ms extends Zg{constructor(e,n){super(),this.filters=e,this.op=n,this.S=null}static create(e,n){return new ms(e,n)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.S!==null||(this.S=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.S}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.N(n=>n.isInequality());return e!==null?e.field:null}N(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}class RA extends gt{constructor(e,n,r){super(e,n,r),this.key=ye.fromName(r.referenceValue)}matches(e){const n=ye.comparator(e.key,this.key);return this.matchesComparison(n)}}class PA extends gt{constructor(e,n){super(e,"in",n),this.keys=ey("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class CA extends gt{constructor(e,n){super(e,"not-in",n),this.keys=ey("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ey(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ye.fromName(r.referenceValue))}class xA extends gt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yg(n)&&is(n.arrayValue,this.value)}}class NA extends gt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&is(this.value.arrayValue,n)}}class OA extends gt{constructor(e,n){super(e,"not-in",n)}matches(e){if(is(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!is(this.value.arrayValue,n)}}class bA extends gt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>is(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new $e(0,0))}static max(){return new Ie(new $e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this.comparator=e,this.root=n||ge.EMPTY}insert(e,n){return new Wo(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ge.BLACK,null,null))}remove(e){return new Wo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zs(this.root,e,this.comparator,!1)}getReverseIterator(){return new zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zs(this.root,e,this.comparator,!0)}}class zs{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ge.RED,this.left=i??ge.EMPTY,this.right=s??ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}ge.EMPTY=null,ge.RED=!0,ge.BLACK=!1;ge.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this.comparator=e,this.data=new Wo(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new lh(this.data.getIterator())}getIteratorFrom(e){return new lh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qo)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qo(this.comparator);return n.data=e,n}}class lh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new ss([])}unionWith(e){let n=new qo(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ss(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qg(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!gl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ki(n)}setAll(e){let n=ze.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ki(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());gl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return zo(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];gl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Aa(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Et(ki(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $t(e,0,Ie.min(),Ie.min(),Ie.min(),Et.empty(),0)}static newFoundDocument(e,n,r,i){return new $t(e,1,n,Ie.min(),r,i,0)}static newNoDocument(e,n){return new $t(e,2,n,Ie.min(),Ie.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new $t(e,3,n,Ie.min(),Ie.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.O=null}}function uh(t,e=null,n=[],r=[],i=null,s=null,o=null){return new DA(t,e,n,r,i,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.q=null,this.B=null,this.$=null,this.startAt,this.endAt}}function Wc(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Sa(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function LA(t){return t.collectionGroup!==null}function UA(t){const e=Ea(t);if(e.q===null){e.q=[];const n=Sa(e),r=Wc(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new Ri(n)),e.q.push(new Ri(ze.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.q.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new Ri(ze.keyField(),s))}}}return e.q}function MA(t){const e=Ea(t);return e.B||(e.B=VA(e,UA(t))),e.B}function VA(t,e){if(t.limitType==="F")return uh(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ri(i.field,s)});const n=t.endAt?new ah(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ah(t.startAt.position,t.startAt.inclusive):null;return uh(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nu(t,e){e.getFirstInequalityField(),Sa(t);const n=t.filters.concat([e]);return new Hc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Bo(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,i){if(r.useProto3Json){if(isNaN(i))return{doubleValue:"NaN"};if(i===1/0)return{doubleValue:"Infinity"};if(i===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bo(i)?"-0":i}}(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(){this._=void 0}}class jA extends Ta{}class BA extends Ta{constructor(e){super(),this.elements=e}}class zA extends Ta{constructor(e){super(),this.elements=e}}class HA extends Ta{constructor(e,n){super(),this.serializer=e,this.L=n}}class Pi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pi}static exists(e){return new Pi(void 0,e)}static updateTime(e){return new Pi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class ka{}class ty extends ka{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ny extends ka{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class WA extends ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qA extends ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),GA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),KA=(()=>({and:"AND",or:"OR"}))();class QA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ou(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function JA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function XA(t,e){return Ou(t,e.toTimestamp())}function ch(t){return wn(!!t),Ie.fromTimestamp(function(n){const r=Gn(n);return new $e(r.seconds,r.nanos)}(t))}function qc(t,e){return function(r){return new ae(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function bu(t,e){return qc(t.databaseId,e.path)}function YA(t,e){const n=function(i){const s=ae.fromString(i);return wn(iy(s)),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new O(b,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(b,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ye(function(i){return wn(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(n))}function dh(t,e){return qc(t.databaseId,e)}function ZA(t){return new ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fh(t,e,n){return{name:bu(t,e),fields:n.value.mapValue.fields}}function eS(t,e){let n;if(e instanceof ty)n={update:fh(t,e.key,e.value)};else if(e instanceof WA)n={delete:bu(t,e.key)};else if(e instanceof ny)n={update:fh(t,e.key,e.data),updateMask:sS(e.fieldMask)};else{if(!(e instanceof qA))return Y();n={verify:bu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof jA)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof BA)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof zA)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof HA)return{fieldPath:o.field.canonicalString(),increment:a.L};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:XA(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function tS(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=dh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=dh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return ry(ms.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:ur(f.field),direction:nS(f.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.useProto3Json||wA(u)?u:{value:u}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function nS(t){return $A[t]}function rS(t){return GA[t]}function iS(t){return KA[t]}function ur(t){return{fieldPath:t.canonicalString()}}function ry(t){return t instanceof gt?function(n){if(n.op==="=="){if(oh(n.value))return{unaryFilter:{field:ur(n.field),op:"IS_NAN"}};if(sh(n.value))return{unaryFilter:{field:ur(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(oh(n.value))return{unaryFilter:{field:ur(n.field),op:"IS_NOT_NAN"}};if(sh(n.value))return{unaryFilter:{field:ur(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ur(n.field),op:rS(n.op),value:n.value}}}(t):t instanceof ms?function(n){const r=n.getFilters().map(i=>ry(i));return r.length===1?r[0]:{compositeFilter:{op:iS(n.op),filters:r}}}(t):Y()}function sS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function iy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(t){return new QA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.X=!1}tt(){if(this.X)throw new O(Fr,"The client has already been terminated.")}R(e,n,r){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.R(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===xu&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(Ti,i.toString())})}g(e,n,r,i){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.g(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===xu&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(Ti,s.toString())})}terminate(){this.X=!0}}async function aS(t,e){const n=Ea(t),r=ZA(n.serializer)+"/documents",i={writes:e.map(s=>eS(n.serializer,s))};await n.R("Commit",r,i)}async function lS(t,e){const n=Ea(t),r=tS(n.serializer,MA(e));return(await n.g("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(o,a,l){const u=YA(o,a.name),c=ch(a.updateTime),f=a.createTime?ch(a.createTime):Ie.min(),h=new Et({mapValue:{fields:a.fields}}),y=$t.newFoundDocument(u,c,f,h);return l&&y.setHasCommittedMutations(),l?y.setHasCommittedMutations():y}(n.serializer,i.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Map;function sy(t){if(t._terminated)throw new O(Fr,"The client has already been terminated.");if(!Ci.has(t)){jo("ComponentProvider","Initializing Datastore");const e=function(s){return new IA(s,fetch.bind(null))}(function(s,o,a,l){return new yA(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Kg(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=$c(t._databaseId),r=function(s,o,a,l){return new oS(s,o,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);Ci.set(t,r)}return Ci.get(t)}class hh{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(b,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(b,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,l){if(o===!0&&l===!0)throw new O(b,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(b,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(b,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(b,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}let Ra=class{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(Fr,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(Fr,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cA;switch(r.type){case"firstParty":return new pA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(b,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ci.get(n);r&&(jo("ComponentProvider","Removing Datastore"),Ci.delete(n),r.terminate())}(this),Promise.resolve()}};function uS(t,e){const n=typeof t=="object"?t:wa(),r=typeof t=="string"?t:e||"(default)",i=Tn(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=Og("firestore");s&&cS(i,...s)}return i}function cS(t,e,n,r={}){var i;const s=(t=zc(t,Ra))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Wg("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Oe.MOCK_USER;else{a=Lg(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new O(b,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Oe(u)}t._authCredentials=new dA(new $g(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rr(this.firestore,e,this._query)}}class Ge{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}}class gn extends rr{constructor(e,n,r){super(e,n,function(s){return new Hc(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new ye(e))}withConverter(e){return new gn(this.firestore,e,this._path)}}function dS(t,e,...n){if(t=ie(t),Gg("collection","path",e),t instanceof Ra){const r=ae.fromString(e,...n);return Zf(r),new gn(t,null,r)}{if(!(t instanceof Ge||t instanceof gn))throw new O(b,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return Zf(r),new gn(t.firestore,null,r)}}function fS(t,e,...n){if(t=ie(t),arguments.length===1&&(e=SA.C()),Gg("doc","path",e),t instanceof Ra){const r=ae.fromString(e,...n);return Yf(r),new Ge(t,null,new ye(r))}{if(!(t instanceof Ge||t instanceof gn))throw new O(b,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return Yf(r),new Ge(t.firestore,t instanceof gn?t.converter:null,new ye(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jr(Mt.fromBase64String(e))}catch(n){throw new O(b,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new jr(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(b,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(b,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(b,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=/^__.*__$/;class pS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ny(e,this.data,this.fieldMask,n,this.fieldTransforms):new ty(e,this.data,n,this.fieldTransforms)}}function ay(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Qc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.rt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get nt(){return this.settings.nt}it(e){return new Qc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}st(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.it({path:r,ot:!1});return i.ut(e),i}_t(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.it({path:r,ot:!1});return i.rt(),i}lt(e){return this.it({path:void 0,ot:!0})}ct(e){return $o(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.dt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}rt(){if(this.path)for(let e=0;e<this.path.length;e++)this.ut(this.path.get(e))}ut(e){if(e.length===0)throw this.ct("Document fields must not be empty");if(ay(this.nt)&&hS.test(e))throw this.ct('Document fields cannot begin and end with "__"')}}class mS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||$c(e)}ft(e,n,r,i=!1){return new Qc({nt:e,methodName:n,dt:r,path:ze.emptyPath(),ot:!1,ht:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ly(t){const e=t._freezeSettings(),n=$c(t._databaseId);return new mS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gS(t,e,n,r,i,s={}){const o=t.ft(s.merge||s.mergeFields?2:0,e,n,i);dy("Data must be an object, but it was:",o,r);const a=uy(r,o);let l,u;if(s.merge)l=new ss(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const h=vS(e,f,n);if(!o.contains(h))throw new O(b,`Field '${h}' is specified in your field mask but missing from your input data.`);wS(c,h)||c.push(h)}l=new ss(c),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new pS(new Et(a),l,u)}function yS(t,e,n,r=!1){return Jc(n,t.ft(r?4:3,e))}function Jc(t,e){if(cy(t=ie(t)))return dy("Unsupported field value:",e,t),uy(t,e);if(t instanceof oy)return function(r,i){if(!ay(i.nt))throw i.ct(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ct(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ot&&e.nt!==4)throw e.ct("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Jc(a,i.lt(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return FA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=$e.fromDate(r);return{timestampValue:Ou(i.serializer,s)}}if(r instanceof $e){const s=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ou(i.serializer,s)}}if(r instanceof Kc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof jr)return{bytesValue:JA(i.serializer,r._byteString)};if(r instanceof Ge){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.ct(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:qc(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.ct(`Unsupported field value: ${Ia(r)}`)}(t,e)}function uy(t,e){const n={};return function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Aa(t,(r,i)=>{const s=Jc(i,e.st(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function cy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof Kc||t instanceof jr||t instanceof Ge||t instanceof oy)}function dy(t,e,n){if(!cy(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ia(n);throw r==="an object"?e.ct(t+" a custom object"):e.ct(t+" "+r)}}function vS(t,e,n){if((e=ie(e))instanceof Gc)return e._internalPath;if(typeof e=="string")return fy(t,e);throw $o("Field path arguments must be of type string or ",t,!1,void 0,n)}const _S=new RegExp("[~\\*/\\[\\]]");function fy(t,e,n){if(e.search(_S)>=0)throw $o(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gc(...e.split("."))._internalPath}catch{throw $o(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $o(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new O(b,a+t+l)}function wS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(py("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hy extends ES{data(){return super.data()}}class IS{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function py(t,e){return typeof e=="string"?fy(t,e):e instanceof Gc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{}class my extends Xc{}function AS(t,e,...n){let r=[];e instanceof Xc&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Zc).length,a=s.filter(l=>l instanceof Yc).length;if(o>1||o>0&&a>0)throw new O(b,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Yc extends my{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Yc(e,n,r)}_apply(e){const n=this._parse(e);return gy(e._query,n),new rr(e.firestore,e.converter,Nu(e._query,n))}_parse(e){const n=ly(e.firestore);return function(s,o,a,l,u,c,f){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new O(b,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){mh(f,c);const y=[];for(const v of f)y.push(ph(l,s,v));h={arrayValue:{values:y}}}else h=ph(l,s,f)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||mh(f,c),h=yS(a,o,f,c==="in"||c==="not-in");return gt.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Zc extends Xc{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Zc(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ms.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)gy(o,l),o=Nu(o,l)}(e._query,n),new rr(e.firestore,e.converter,Nu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ed extends my{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ed(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new O(b,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new O(b,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Ri(s,o);return function(u,c){if(Wc(u)===null){const f=Sa(u);f!==null&&yy(u,f,c.field)}}(i,a),a}(e._query,this._field,this._direction);return new rr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Hc(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function SS(t,e="asc"){const n=e,r=py("orderBy",t);return ed._create(r,n)}function ph(t,e,n){if(typeof(n=ie(n))=="string"){if(n==="")throw new O(b,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!LA(e)&&n.indexOf("/")!==-1)throw new O(b,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ae.fromString(n));if(!ye.isDocumentKey(r))throw new O(b,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ih(t,new ye(r))}if(n instanceof Ge)return ih(t,n._key);throw new O(b,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ia(n)}.`)}function mh(t,e){if(!Array.isArray(t)||t.length===0)throw new O(b,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gy(t,e){if(e.isInequality()){const r=Sa(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new O(b,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Wc(t);s!==null&&yy(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new O(b,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(b,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function yy(t,e,n){if(!n.isEqual(e))throw new O(b,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class kS extends class{convertValue(n,r="none"){switch(Kn(n)){case 0:return null;case 1:return n.booleanValue;case 2:return oe(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,r);case 5:return n.stringValue;case 6:return this.convertBytes(ns(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,r);case 10:return this.convertObject(n.mapValue,r);default:throw Y()}}convertObject(n,r){return this.convertObjectMap(n.fields,r)}convertObjectMap(n,r="none"){const i={};return Aa(n,(s,o)=>{i[s]=this.convertValue(o,r)}),i}convertGeoPoint(n){return new Kc(oe(n.latitude),oe(n.longitude))}convertArray(n,r){return(n.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(n,r){switch(r){case"previous":const i=Xg(n);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(rs(n));default:return null}}convertTimestamp(n){const r=Gn(n);return new $e(r.seconds,r.nanos)}convertDocumentKey(n,r){const i=ae.fromString(n);wn(iy(i));const s=new es(i.get(1),i.get(3)),o=new ye(i.popFirst(5));return s.isEqual(r)||jc(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new jr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}function RS(t){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new O(qg,"limitToLast() queries require specifying at least one orderBy() clause")})((t=zc(t,rr))._query);const e=sy(t.firestore),n=new kS(t.firestore);return lS(e,t._query).then(r=>{const i=r.map(s=>new hy(t.firestore,n,s.key,s,t.converter));return t._query.limitType==="L"&&i.reverse(),new IS(t,i)})}function PS(t,e,n){const r=TS((t=zc(t,Ge)).converter,e,n),i=gS(ly(t.firestore),"setDoc",t._key,r,t.converter!==null,n);return aS(sy(t.firestore),[i.toMutation(t._key,Pi.none())])}(function(){(function(n){Kr=n})(`${nr}_lite`),mt(new st("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Ra(new fA(e.getProvider("auth-internal")),new gA(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new O(b,'"projectId" not provided in firebase.initializeApp.');return new es(a.options.projectId,l)}(i,n),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Fe("firestore-lite","4.1.3",""),Fe("firestore-lite","4.1.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy="firebasestorage.googleapis.com",_y="storageBucket",CS=2*60*1e3,xS=10*60*1e3,NS=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J extends ot{constructor(e,n,r=0){super(yl(e),`Firebase Storage: ${n} (${yl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,J.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var q;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(q||(q={}));function yl(t){return"storage/"+t}function td(){const t="An unknown error occurred, please check the error payload for server response.";return new J(q.UNKNOWN,t)}function OS(t){return new J(q.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function bS(t){return new J(q.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function DS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new J(q.UNAUTHENTICATED,t)}function LS(){return new J(q.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function US(t){return new J(q.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function wy(){return new J(q.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ey(){return new J(q.CANCELED,"User canceled the upload/download.")}function MS(t){return new J(q.INVALID_URL,"Invalid URL '"+t+"'.")}function VS(t){return new J(q.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function FS(){return new J(q.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+_y+"' property when initializing the app?")}function Iy(){return new J(q.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function jS(){return new J(q.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function BS(){return new J(q.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function zS(t){return new J(q.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Du(t){return new J(q.INVALID_ARGUMENT,t)}function Ay(){return new J(q.APP_DELETED,"The Firebase app was deleted.")}function HS(t){return new J(q.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function xi(t,e){return new J(q.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function oi(t){throw new J(q.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=We.makeFromUrl(e,n)}catch{return new We(e,"")}if(r.path==="")return r;throw VS(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",y=new RegExp(`^https?://${f}/${c}/b/${i}/o${h}`,"i"),v={bucket:1,path:3},w=n===vy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",m=new RegExp(`^https?://${w}/${i}/${T}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:y,indices:v,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<g.length;_++){const S=g[_],A=S.regex.exec(e);if(A){const k=A[S.indices.bucket];let x=A[S.indices.path];x||(x=""),r=new We(k,x),S.postModify(r);break}}if(r==null)throw MS(e);return r}}class WS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...T){u||(u=!0,e.apply(null,T))}function f(T){i=setTimeout(()=>{i=null,t(y,l())},T)}function h(){s&&clearTimeout(s)}function y(T,...m){if(u){h();return}if(T){h(),c.call(null,T,...m);return}if(l()||o){h(),c.call(null,T,...m);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,f(g)}let v=!1;function w(T){v||(v=!0,h(),!u&&(i!==null?(T||(a=2),clearTimeout(i),f(0)):T||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function $S(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(t){return t!==void 0}function KS(t){return typeof t=="function"}function QS(t){return typeof t=="object"&&!Array.isArray(t)}function Pa(t){return typeof t=="string"||t instanceof String}function gh(t){return nd()&&t instanceof Blob}function nd(){return typeof Blob<"u"&&!LE()}function yh(t,e,n,r){if(r<e)throw Du(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Du(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Sy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Fn||(Fn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n,r,i,s,o,a,l,u,c,f,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=f,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,v)=>{this.resolve_=y,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Hs(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Fn.NO_ERROR,l=s.getStatus();if(!a||Ty(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Fn.ABORT;r(!1,new Hs(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Hs(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());GS(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=td();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Ay():Ey();o(l)}else{const l=wy();o(l)}};this.canceled_?n(!1,new Hs(!1,null,!0)):this.backoffId_=qS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$S(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Hs{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function XS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function YS(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ZS(t,e){e&&(t["X-Firebase-GMPID"]=e)}function eT(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function tT(t,e,n,r,i,s,o=!0){const a=Sy(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return ZS(u,e),XS(u,n),YS(u,s),eT(u,r),new JS(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function rT(...t){const e=nT();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(nd())return new Blob(t);throw new J(q.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function iT(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(t){if(typeof atob>"u")throw zS("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class vl{constructor(e,n){this.data=e,this.contentType=n||null}}function oT(t,e){switch(t){case It.RAW:return new vl(ky(e));case It.BASE64:case It.BASE64URL:return new vl(Ry(t,e));case It.DATA_URL:return new vl(lT(e),uT(e))}throw td()}function ky(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function aT(t){let e;try{e=decodeURIComponent(t)}catch{throw xi(It.DATA_URL,"Malformed data URL.")}return ky(e)}function Ry(t,e){switch(t){case It.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw xi(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case It.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw xi(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=sT(e)}catch(i){throw i.message.includes("polyfill")?i:xi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Py{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw xi(It.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=cT(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function lT(t){const e=new Py(t);return e.base64?Ry(It.BASE64,e.rest):aT(e.rest)}function uT(t){return new Py(t).contentType}function cT(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n){let r=0,i="";gh(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(gh(this.data_)){const r=this.data_,i=iT(r,e,n);return i===null?null:new Qt(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Qt(r,!0)}}static getBlob(...e){if(nd()){const n=e.map(r=>r instanceof Qt?r.data_:r);return new Qt(rT.apply(null,n))}else{const n=e.map(o=>Pa(o)?oT(It.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Qt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(t){let e;try{e=JSON.parse(t)}catch{return null}return QS(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function fT(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function xy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(t,e){return e}class ke{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||hT}}let Ws=null;function pT(t){return!Pa(t)||t.length<2?t:xy(t)}function Ny(){if(Ws)return Ws;const t=[];t.push(new ke("bucket")),t.push(new ke("generation")),t.push(new ke("metageneration")),t.push(new ke("name","fullPath",!0));function e(s,o){return pT(o)}const n=new ke("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ke("size");return i.xform=r,t.push(i),t.push(new ke("timeCreated")),t.push(new ke("updated")),t.push(new ke("md5Hash",null,!0)),t.push(new ke("cacheControl",null,!0)),t.push(new ke("contentDisposition",null,!0)),t.push(new ke("contentEncoding",null,!0)),t.push(new ke("contentLanguage",null,!0)),t.push(new ke("contentType",null,!0)),t.push(new ke("metadata","customMetadata",!0)),Ws=t,Ws}function mT(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new We(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function gT(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return mT(r,t),r}function Oy(t,e,n){const r=Cy(e);return r===null?null:gT(t,r,n)}function yT(t,e,n,r){const i=Cy(e);if(i===null||!Pa(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,f=t.fullPath,h="/b/"+o(c)+"/o/"+o(f),y=Qr(h,n,r),v=Sy({alt:"media",token:u});return y+v})[0]}function by(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class ir{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){if(!t)throw td()}function rd(t,e){function n(r,i){const s=Oy(t,i,e);return Ot(s!==null),s}return n}function vT(t,e){function n(r,i){const s=Oy(t,i,e);return Ot(s!==null),yT(s,i,t.host,t._protocol)}return n}function gs(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=LS():i=DS():n.getStatus()===402?i=bS(t.bucket):n.getStatus()===403?i=US(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function id(t){const e=gs(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=OS(t.path)),s.serverResponse=i.serverResponse,s}return n}function _T(t,e,n){const r=e.fullServerUrl(),i=Qr(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ir(i,s,rd(t,n),o);return a.errorHandler=id(e),a}function wT(t,e,n){const r=e.fullServerUrl(),i=Qr(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ir(i,s,vT(t,n),o);return a.errorHandler=id(e),a}function ET(t,e){const n=e.fullServerUrl(),r=Qr(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new ir(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=id(e),a}function IT(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Dy(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=IT(null,e)),r}function AT(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let _=0;_<2;_++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=Dy(e,r,i),c=by(u,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+l+"--",y=Qt.getBlob(f,r,h);if(y===null)throw Iy();const v={name:u.fullPath},w=Qr(s,t.host,t._protocol),T="POST",m=t.maxUploadRetryTime,d=new ir(w,T,rd(t,n),m);return d.urlParams=v,d.headers=o,d.body=y.uploadData(),d.errorHandler=gs(e),d}class Go{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function sd(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Ot(!1)}return Ot(!!n&&(e||["active"]).indexOf(n)!==-1),n}function ST(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=Dy(e,r,i),a={name:o.fullPath},l=Qr(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=by(o,n),h=t.maxUploadRetryTime;function y(w){sd(w);let T;try{T=w.getResponseHeader("X-Goog-Upload-URL")}catch{Ot(!1)}return Ot(Pa(T)),T}const v=new ir(l,u,y,h);return v.urlParams=a,v.headers=c,v.body=f,v.errorHandler=gs(e),v}function TT(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=sd(u,["active","final"]);let f=null;try{f=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Ot(!1)}f||Ot(!1);const h=Number(f);return Ot(!isNaN(h)),new Go(h,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new ir(n,o,s,a);return l.headers=i,l.errorHandler=gs(e),l}const vh=256*1024;function kT(t,e,n,r,i,s,o,a){const l=new Go(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw jS();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const f=l.current,h=f+c;let y="";c===0?y="finalize":u===c?y="upload, finalize":y="upload";const v={"X-Goog-Upload-Command":y,"X-Goog-Upload-Offset":`${l.current}`},w=r.slice(f,h);if(w===null)throw Iy();function T(_,S){const A=sd(_,["active","final"]),k=l.current+c,x=r.size();let F;return A==="final"?F=rd(e,s)(_,S):F=null,new Go(k,x,A==="final",F)}const m="POST",d=e.maxUploadRetryTime,g=new ir(n,m,T,d);return g.headers=v,g.body=w.uploadData(),g.progressCallback=a||null,g.errorHandler=gs(t),g}const be={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function _l(t){switch(t){case"running":case"pausing":case"canceling":return be.RUNNING;case"paused":return be.PAUSED;case"success":return be.SUCCESS;case"canceled":return be.CANCELED;case"error":return be.ERROR;default:return be.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n,r){if(KS(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class PT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Fn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Fn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Fn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw oi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw oi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw oi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw oi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw oi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class CT extends PT{initXhr(){this.xhr_.responseType="text"}}function On(){return new CT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Ny(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(q.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(Ty(i.status,[]))if(s)i=wy();else{this.sleepTime=Math.max(this.sleepTime*2,NS),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(q.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=ST(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,On,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=TT(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,On,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=vh*this._chunkMultiplier,n=new Go(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=kT(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,On,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){vh*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=_T(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,On,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=AT(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,On,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Ey(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=_l(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new RT(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(_l(this._state)){case be.SUCCESS:lr(this._resolve.bind(null,this.snapshot))();break;case be.CANCELED:case be.ERROR:const n=this._reject;lr(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(_l(this._state)){case be.RUNNING:case be.PAUSED:e.next&&lr(e.next.bind(e,this.snapshot))();break;case be.SUCCESS:e.complete&&lr(e.complete.bind(e))();break;case be.CANCELED:case be.ERROR:e.error&&lr(e.error.bind(e,this._error))();break;default:e.error&&lr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n){this._service=e,n instanceof We?this._location=n:this._location=We.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Qn(e,n)}get root(){const e=new We(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xy(this._location.path)}get storage(){return this._service}get parent(){const e=dT(this._location.path);if(e===null)return null;const n=new We(this._location.bucket,e);return new Qn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw HS(e)}}function NT(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new xT(t,new Qt(e),n)}function OT(t){t._throwIfRoot("getDownloadURL");const e=wT(t.storage,t._location,Ny());return t.storage.makeRequestWithTokens(e,On).then(n=>{if(n===null)throw BS();return n})}function bT(t){t._throwIfRoot("deleteObject");const e=ET(t.storage,t._location);return t.storage.makeRequestWithTokens(e,On)}function DT(t,e){const n=fT(t._location.path,e),r=new We(t._location.bucket,n);return new Qn(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(t){return/^[A-Za-z]+:\/\//.test(t)}function UT(t,e){return new Qn(t,e)}function Ly(t,e){if(t instanceof od){const n=t;if(n._bucket==null)throw FS();const r=new Qn(n,n._bucket);return e!=null?Ly(r,e):r}else return e!==void 0?DT(t,e):t}function MT(t,e){if(e&&LT(e)){if(t instanceof od)return UT(t,e);throw Du("To use ref(service, url), the first argument must be a Storage instance.")}else return Ly(t,e)}function _h(t,e){const n=e==null?void 0:e[_y];return n==null?null:We.makeFromBucketSpec(n,t)}function VT(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Lg(i,t.app.options.projectId))}class od{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=vy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CS,this._maxUploadRetryTime=xS,this._requests=new Set,i!=null?this._bucket=We.makeFromBucketSpec(i,this._host):this._bucket=_h(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=We.makeFromBucketSpec(this._url,e):this._bucket=_h(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){yh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){yh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qn(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new WS(Ay());{const o=tT(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const wh="@firebase/storage",Eh="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy="storage";function FT(t,e,n){return t=ie(t),NT(t,e,n)}function jT(t){return t=ie(t),OT(t)}function BT(t){return t=ie(t),bT(t)}function My(t,e){return t=ie(t),MT(t,e)}function Vy(t=wa(),e){t=ie(t);const r=Tn(t,Uy).getImmediate({identifier:e}),i=Og("storage");return i&&zT(r,...i),r}function zT(t,e,n,r={}){VT(t,e,n,r)}function HT(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new od(n,r,i,e,nr)}function WT(){mt(new st(Uy,HT,"PUBLIC").setMultipleInstances(!0)),Fe(wh,Eh,""),Fe(wh,Eh,"esm2017")}WT();let qs;const qT=new Uint8Array(16);function $T(){if(!qs&&(qs=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!qs))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return qs(qT)}const pe=[];for(let t=0;t<256;++t)pe.push((t+256).toString(16).slice(1));function GT(t,e=0){return(pe[t[e+0]]+pe[t[e+1]]+pe[t[e+2]]+pe[t[e+3]]+"-"+pe[t[e+4]]+pe[t[e+5]]+"-"+pe[t[e+6]]+pe[t[e+7]]+"-"+pe[t[e+8]]+pe[t[e+9]]+"-"+pe[t[e+10]]+pe[t[e+11]]+pe[t[e+12]]+pe[t[e+13]]+pe[t[e+14]]+pe[t[e+15]]).toLowerCase()}const KT=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ih={randomUUID:KT};function QT(t,e,n){if(Ih.randomUUID&&!e&&!t)return Ih.randomUUID();t=t||{};const r=t.random||(t.rng||$T)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return GT(r)}var JT="firebase",XT="10.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fe(JT,XT,"app");function ad(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(t){return t!==void 0&&t.getResponse!==void 0}function Fy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YT=Fy,jy=new tr("auth","Firebase",Fy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new _a("@firebase/auth");function ZT(t,...e){Ko.logLevel<=j.WARN&&Ko.warn(`Auth (${nr}): ${t}`,...e)}function oo(t,...e){Ko.logLevel<=j.ERROR&&Ko.error(`Auth (${nr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,...e){throw ld(t,...e)}function Ke(t,...e){return ld(t,...e)}function e1(t,e,n){const r=Object.assign(Object.assign({},YT()),{[e]:n});return new tr("auth","Firebase",r).create(e,{appName:t.name})}function ld(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return jy.create(t,...e)}function N(t,e,...n){if(!t)throw ld(e,...n)}function Ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw oo(e),new Error(e)}function Ft(t,e){t||Ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function By(){return Sh()==="http:"||Sh()==="https:"}function Sh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(By()||Ug()||"connection"in navigator)?navigator.onLine:!0}function n1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ft(n>e,"Short delay should be less than long delay!"),this.isMobile=DE()||UE()}get(){return t1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t,e){Ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=new ys(3e4,6e4);function kn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bt(t,e,n,r,i={}){return Hy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Gr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),zy.fetch()(Wy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Hy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},r1),e);try{const i=new s1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pi(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw pi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw pi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw pi(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw e1(t,c,u);Vt(t,c)}}catch(i){if(i instanceof ot)throw i;Vt(t,"network-request-failed",{message:String(i)})}}async function Ca(t,e,n,r,i={}){const s=await Bt(t,e,n,r,i);return"mfaPendingCredential"in s&&Vt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Wy(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ud(t.config,i):`${t.config.apiScheme}://${i}`}class s1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),i1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ke(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(t){return(await Bt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(t,e){return Bt(t,"POST","/v1/accounts:delete",e)}async function l1(t,e){return Bt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function u1(t,e=!1){const n=ie(t),r=await n.getIdToken(e),i=cd(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ni(wl(i.auth_time)),issuedAtTime:Ni(wl(i.iat)),expirationTime:Ni(wl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function wl(t){return Number(t)*1e3}function cd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return oo("JWT malformed, contained fewer than 3 sections"),null;try{const i=xg(n);return i?JSON.parse(i):(oo("Failed to decode base64 JWT payload"),null)}catch(i){return oo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function c1(t){const e=cd(t);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ot&&d1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function d1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ni(this.lastLoginAt),this.creationTime=Ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await os(t,l1(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?m1(s.providerUserInfo):[],a=p1(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new qy(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function h1(t){const e=ie(t);await Qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function p1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function m1(t){return t.map(e=>{var{providerId:n}=e,r=ad(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g1(t,e){const n=await Hy(t,{},async()=>{const r=Gr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Wy(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):c1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await g1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new as;return r&&(N(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new as,this.toJSON())}_performRefresh(){return Ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,e){N(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ad(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new f1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new qy(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await os(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return u1(this,e)}reload(){return h1(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await os(this,a1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:_,isAnonymous:S,providerData:A,stsTokenManager:k}=n;N(g&&k,e,"internal-error");const x=as.fromJSON(this.name,k);N(typeof g=="string",e,"internal-error"),Ht(f,e.name),Ht(h,e.name),N(typeof _=="boolean",e,"internal-error"),N(typeof S=="boolean",e,"internal-error"),Ht(y,e.name),Ht(v,e.name),Ht(w,e.name),Ht(T,e.name),Ht(m,e.name),Ht(d,e.name);const F=new jn({uid:g,auth:e,email:h,emailVerified:_,displayName:f,isAnonymous:S,photoURL:v,phoneNumber:y,tenantId:w,stsTokenManager:x,createdAt:m,lastLoginAt:d});return A&&Array.isArray(A)&&(F.providerData=A.map(R=>Object.assign({},R))),T&&(F._redirectEventId=T),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new as;i.updateFromServerResponse(n);const s=new jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Qo(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=new Map;function xt(t){Ft(t instanceof Function,"Expected a class definition");let e=Th.get(t);return e?(Ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Th.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$y.type="NONE";const kh=$y;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t,e,n){return`firebase:${t}:${e}:${n}`}class Cr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ao(this.userKey,i.apiKey,s),this.fullPersistenceKey=ao("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Cr(xt(kh),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||xt(kh);const o=ao(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=jn._fromJSON(e,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Cr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Cr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xy(e))return"Blackberry";if(Yy(e))return"Webos";if(dd(e))return"Safari";if((e.includes("chrome/")||Ky(e))&&!e.includes("edge/"))return"Chrome";if(Jy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gy(t=Te()){return/firefox\//i.test(t)}function dd(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ky(t=Te()){return/crios\//i.test(t)}function Qy(t=Te()){return/iemobile/i.test(t)}function Jy(t=Te()){return/android/i.test(t)}function Xy(t=Te()){return/blackberry/i.test(t)}function Yy(t=Te()){return/webos/i.test(t)}function xa(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function y1(t=Te()){var e;return xa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function v1(){return ME()&&document.documentMode===10}function Zy(t=Te()){return xa(t)||Jy(t)||Yy(t)||Xy(t)||/windows phone/i.test(t)||Qy(t)}function _1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(t,e=[]){let n;switch(t){case"Browser":n=Rh(Te());break;case"Worker":n=`${Rh(Te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E1(t,e={}){return Bt(t,"GET","/v2/passwordPolicy",kn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1=6;class A1{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:I1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ph(this),this.idTokenSubscription=new Ph(this),this.beforeStateQueue=new w1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Cr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=n1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ie(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await E1(this),n=new A1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new tr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xt(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Cr.create(this,[xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ev(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ZT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jr(t){return ie(t)}class Ph{constructor(e){this.auth=e,this.observer=null,this.addObserver=HE(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function tv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ke("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",T1().appendChild(r)})}function nv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(t,e){const n=Tn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yi(s,e??{}))return i;Vt(i,"already-initialized")}return n.initialize({options:e})}function R1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function P1(t,e,n){const r=Jr(t);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=rv(e),{host:o,port:a}=C1(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||x1()}function rv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function C1(t){const e=rv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ch(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ch(o)}}}function Ch(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function x1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ct("not implemented")}_getIdTokenResponse(e){return Ct("not implemented")}_linkToIdToken(e,n){return Ct("not implemented")}_getReauthenticationResolver(e){return Ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(t,e){return Ca(t,"POST","/v1/accounts:signInWithIdp",kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1="http://localhost";class Jn extends fd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ad(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Jn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xr(e,n)}buildRequest(){const e={requestUri:N1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(t,e){return Bt(t,"POST","/v1/accounts:sendVerificationCode",kn(t,e))}async function b1(t,e){return Ca(t,"POST","/v1/accounts:signInWithPhoneNumber",kn(t,e))}async function D1(t,e){const n=await Ca(t,"POST","/v1/accounts:signInWithPhoneNumber",kn(t,e));if(n.temporaryProof)throw pi(t,"account-exists-with-different-credential",n);return n}const L1={USER_NOT_FOUND:"user-not-found"};async function U1(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ca(t,"POST","/v1/accounts:signInWithPhoneNumber",kn(t,n),L1)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends fd{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Oi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Oi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return b1(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return D1(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return U1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Oi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends iv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends vs{constructor(){super("facebook.com")}static credential(e){return Jn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends vs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xt.credential(n,r)}catch{return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com";Xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends vs{constructor(){super("github.com")}static credential(e){return Jn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com";Yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends vs{constructor(){super("twitter.com")}static credential(e,n){return Jn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.TWITTER_SIGN_IN_METHOD="twitter.com";Zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jn._fromIdTokenResponse(e,r,i),o=xh(r);return new Br({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xh(r);return new Br({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends ot{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Jo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Jo(e,n,r,i)}}function sv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Jo._fromErrorAndOperation(t,s,e,r):s})}async function M1(t,e,n=!1){const r=await os(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Br._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V1(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await os(t,sv(r,i,e,t),n);N(s.idToken,r,"internal-error");const o=cd(s.idToken);N(o,r,"internal-error");const{sub:a}=o;return N(t.uid===a,r,"user-mismatch"),Br._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ov(t,e,n=!1){const r="signIn",i=await sv(t,r,e),s=await Br._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function F1(t,e){return ov(Jr(t),e)}function j1(t,e,n,r){return ie(t).onIdTokenChanged(e,n,r)}function B1(t,e,n){return ie(t).beforeAuthStateChanged(e,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(t,e){return Bt(t,"POST","/v2/accounts/mfaEnrollment:start",kn(t,e))}const Xo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xo,"1"),this.storage.removeItem(Xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(){const t=Te();return dd(t)||xa(t)}const W1=1e3,q1=10;class lv extends av{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=H1()&&_1(),this.fallbackToPolling=Zy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);v1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,q1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},W1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lv.type="LOCAL";const $1=lv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv extends av{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uv.type="SESSION";const cv=uv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Na(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await G1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Na.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=hd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(){return window}function Q1(t){te().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(){return typeof te().WorkerGlobalScope<"u"&&typeof te().importScripts=="function"}async function J1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function X1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Y1(){return pd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="firebaseLocalStorageDb",Z1=1,Yo="firebaseLocalStorage",fv="fbase_key";class _s{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oa(t,e){return t.transaction([Yo],e?"readwrite":"readonly").objectStore(Yo)}function ek(){const t=indexedDB.deleteDatabase(dv);return new _s(t).toPromise()}function Uu(){const t=indexedDB.open(dv,Z1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yo,{keyPath:fv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yo)?e(r):(r.close(),await ek(),e(await Uu()))})})}async function Nh(t,e,n){const r=Oa(t,!0).put({[fv]:e,value:n});return new _s(r).toPromise()}async function tk(t,e){const n=Oa(t,!1).get(e),r=await new _s(n).toPromise();return r===void 0?null:r.value}function Oh(t,e){const n=Oa(t,!0).delete(e);return new _s(n).toPromise()}const nk=800,rk=3;class hv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance(Y1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await J1(),!this.activeServiceWorker)return;this.sender=new K1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||X1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uu();return await Nh(e,Xo,"1"),await Oh(e,Xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Oh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Oa(i,!1).getAll();return new _s(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hv.type="LOCAL";const ik=hv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t,e){return Bt(t,"POST","/v2/accounts/mfaSignIn:start",kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=500,ak=6e4,$s=1e12;class lk{constructor(e){this.auth=e,this.counter=$s,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new uk(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||$s;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||$s;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||$s;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class uk{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;N(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=ck(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},ak)},ok))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function ck(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=nv("rcb"),dk=new ys(3e4,6e4),fk="https://www.google.com/recaptcha/api.js?";class hk{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=te().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return N(pk(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Ah(te().grecaptcha)?Promise.resolve(te().grecaptcha):new Promise((r,i)=>{const s=te().setTimeout(()=>{i(Ke(e,"network-request-failed"))},dk.get());te()[El]=()=>{te().clearTimeout(s),delete te()[El];const a=te().grecaptcha;if(!a||!Ah(a)){i(Ke(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const f=l(u,c);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${fk}?${Gr({onload:El,render:"explicit",hl:n})}`;tv(o).catch(()=>{clearTimeout(s),i(Ke(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=te().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function pk(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class mk{async load(e){return new lk(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv="recaptcha",gk={theme:"light",type:"image"};class yk{constructor(e,n,r=Object.assign({},gk)){this.parameters=r,this.type=pv,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Jr(e),this.isInvisible=this.parameters.size==="invisible",N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;N(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new mk:new hk,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){N(!this.parameters.sitekey,this.auth,"argument-error"),N(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=te()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){N(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){N(By()&&!pd(),this.auth,"internal-error"),await vk(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await o1(this.auth);N(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return N(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function vk(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Oi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function wk(t,e,n){const r=Jr(t),i=await Ek(r,e,ie(n));return new _k(i,s=>F1(r,s))}async function Ek(t,e,n){var r;const i=await n.verify();try{N(typeof i=="string",t,"argument-error"),N(n.type===pv,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return N(o.type==="enroll",t,"internal-error"),(await z1(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{N(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return N(a,t,"missing-multi-factor-info"),(await sk(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await O1(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(t,e){return e?xt(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md extends fd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ak(t){return ov(t.auth,new md(t),t.bypassAuthState)}function Sk(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),V1(n,new md(t),t.bypassAuthState)}async function Tk(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),M1(n,new md(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ak;case"linkViaPopup":case"linkViaRedirect":return Tk;case"reauthViaPopup":case"reauthViaRedirect":return Sk;default:Vt(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=new ys(2e3,1e4);class Ir extends mv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ir.currentPopupAction&&Ir.currentPopupAction.cancel(),Ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const e=hd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kk.get())};e()}}Ir.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk="pendingRedirect",lo=new Map;class Pk extends mv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=lo.get(this.auth._key());if(!e){try{const r=await Ck(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}lo.set(this.auth._key(),e)}return this.bypassAuthState||lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ck(t,e){const n=Ok(e),r=Nk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function xk(t,e){lo.set(t._key(),e)}function Nk(t){return xt(t._redirectPersistence)}function Ok(t){return ao(Rk,t.config.apiKey,t.name)}async function bk(t,e,n=!1){const r=Jr(t),i=Ik(r,e),o=await new Pk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=10*60*1e3;class Lk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Uk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dk&&this.cachedEventUids.clear(),this.cachedEventUids.has(bh(e))}saveEventToCache(e){this.cachedEventUids.add(bh(e)),this.lastProcessedEventTime=Date.now()}}function bh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Uk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mk(t,e={}){return Bt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fk=/^https?/;async function jk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Mk(t);for(const n of e)try{if(Bk(n))return}catch{}Vt(t,"unauthorized-domain")}function Bk(t){const e=Lu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Fk.test(n))return!1;if(Vk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=new ys(3e4,6e4);function Dh(){const t=te().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Hk(t){return new Promise((e,n)=>{var r,i,s;function o(){Dh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dh(),n(Ke(t,"network-request-failed"))},timeout:zk.get()})}if(!((i=(r=te().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=te().gapi)===null||s===void 0)&&s.load)o();else{const a=nv("iframefcb");return te()[a]=()=>{gapi.load?o():n(Ke(t,"network-request-failed"))},tv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw uo=null,e})}let uo=null;function Wk(t){return uo=uo||Hk(t),uo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=new ys(5e3,15e3),$k="__/auth/iframe",Gk="emulator/auth/iframe",Kk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jk(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ud(e,Gk):`https://${t.config.authDomain}/${$k}`,r={apiKey:e.apiKey,appName:t.name,v:nr},i=Qk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Gr(r).slice(1)}`}async function Xk(t){const e=await Wk(t),n=te().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:Jk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(t,"network-request-failed"),a=te().setTimeout(()=>{s(o)},qk.get());function l(){te().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zk=500,eR=600,tR="_blank",nR="http://localhost";class Lh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rR(t,e,n,r=Zk,i=eR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Yk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Te().toLowerCase();n&&(a=Ky(u)?tR:n),Gy(u)&&(e=e||nR,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[y,v])=>`${h}${y}=${v},`,"");if(y1(u)&&a!=="_self")return iR(e||"",a),new Lh(null);const f=window.open(e||"",a,c);N(f,t,"popup-blocked");try{f.focus()}catch{}return new Lh(f)}function iR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="__/auth/handler",oR="emulator/auth/handler",aR=encodeURIComponent("fac");async function Uh(t,e,n,r,i,s){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:nr,eventId:i};if(e instanceof iv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(s||{}))o[c]=f}if(e instanceof vs){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${aR}=${encodeURIComponent(l)}`:"";return`${lR(t)}?${Gr(a).slice(1)}${u}`}function lR({config:t}){return t.emulator?ud(t,oR):`https://${t.authDomain}/${sR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="webStorageSupport";class uR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cv,this._completeRedirectFn=bk,this._overrideRedirectResult=xk}async _openPopup(e,n,r,i){var s;Ft((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Uh(e,n,r,Lu(),i);return rR(e,o,hd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Uh(e,n,r,Lu(),i);return Q1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ft(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Xk(e),r=new Lk(e);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Il,{type:Il},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Il];o!==void 0&&n(!!o),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zy()||dd()||xa()}}const cR=uR;var Mh="@firebase/auth",Vh="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hR(t){mt(new st("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ev(t)},u=new S1(r,i,s,l);return R1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),mt(new st("auth-internal",e=>{const n=Jr(e.getProvider("auth").getImmediate());return(r=>new dR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fe(Mh,Vh,fR(t)),Fe(Mh,Vh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=5*60,mR=Dg("authIdTokenMaxAge")||pR;let Fh=null;const gR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mR)return;const i=n==null?void 0:n.token;Fh!==i&&(Fh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yR(t=wa()){const e=Tn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=k1(t,{popupRedirectResolver:cR,persistence:[ik,$1,cv]}),r=Dg("authTokenSyncURL");if(r){const s=gR(r);B1(n,s,()=>s(n.currentUser)),j1(n,o=>s(o))}const i=Ng("auth");return i&&P1(n,`http://${i}`),n}hR("Browser");const vR=(t,e)=>e.some(n=>t instanceof n);let jh,Bh;function _R(){return jh||(jh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wR(){return Bh||(Bh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yv=new WeakMap,Mu=new WeakMap,vv=new WeakMap,Al=new WeakMap,gd=new WeakMap;function ER(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yv.set(n,t)}).catch(()=>{}),gd.set(e,t),e}function IR(t){if(Mu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Mu.set(t,e)}let Vu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AR(t){Vu=t(Vu)}function SR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sl(this),e,...n);return vv.set(r,e.sort?e.sort():[e]),yn(r)}:wR().includes(t)?function(...e){return t.apply(Sl(this),e),yn(yv.get(this))}:function(...e){return yn(t.apply(Sl(this),e))}}function TR(t){return typeof t=="function"?SR(t):(t instanceof IDBTransaction&&IR(t),vR(t,_R())?new Proxy(t,Vu):t)}function yn(t){if(t instanceof IDBRequest)return ER(t);if(Al.has(t))return Al.get(t);const e=TR(t);return e!==t&&(Al.set(t,e),gd.set(e,t)),e}const Sl=t=>gd.get(t);function kR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=yn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yn(o.result),l.oldVersion,l.newVersion,yn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const RR=["get","getKey","getAll","getAllKeys","count"],PR=["put","add","delete","clear"],Tl=new Map;function zh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tl.get(e))return Tl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=PR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||RR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Tl.set(e,s),s}AR(t=>({...t,get:(e,n,r)=>zh(e,n)||t.get(e,n,r),has:(e,n)=>!!zh(e,n)||t.has(e,n)}));const _v="@firebase/installations",yd="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=1e4,Ev=`w:${yd}`,Iv="FIS_v2",CR="https://firebaseinstallations.googleapis.com/v1",xR=60*60*1e3,NR="installations",OR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Xn=new tr(NR,OR,bR);function Av(t){return t instanceof ot&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv({projectId:t}){return`${CR}/projects/${t}/installations`}function Tv(t){return{token:t.token,requestStatus:2,expiresIn:LR(t.expiresIn),creationTime:Date.now()}}async function kv(t,e){const r=(await e.json()).error;return Xn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Rv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function DR(t,{refreshToken:e}){const n=Rv(t);return n.append("Authorization",UR(e)),n}async function Pv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function LR(t){return Number(t.replace("s","000"))}function UR(t){return`${Iv} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Sv(t),i=Rv(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Iv,appId:t.appId,sdkVersion:Ev},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Pv(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Tv(u.authToken)}}else throw await kv("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=/^[cdef][\w-]{21}$/,Fu="";function jR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=BR(t);return FR.test(n)?n:Fu}catch{return Fu}}function BR(t){return VR(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=new Map;function Nv(t,e){const n=ba(t);Ov(n,e),zR(n,e)}function Ov(t,e){const n=xv.get(t);if(n)for(const r of n)r(e)}function zR(t,e){const n=HR();n&&n.postMessage({key:t,fid:e}),WR()}let Un=null;function HR(){return!Un&&"BroadcastChannel"in self&&(Un=new BroadcastChannel("[Firebase] FID Change"),Un.onmessage=t=>{Ov(t.data.key,t.data.fid)}),Un}function WR(){xv.size===0&&Un&&(Un.close(),Un=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR="firebase-installations-database",$R=1,Yn="firebase-installations-store";let kl=null;function vd(){return kl||(kl=kR(qR,$R,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yn)}}})),kl}async function Zo(t,e){const n=ba(t),i=(await vd()).transaction(Yn,"readwrite"),s=i.objectStore(Yn),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Nv(t,e.fid),e}async function bv(t){const e=ba(t),r=(await vd()).transaction(Yn,"readwrite");await r.objectStore(Yn).delete(e),await r.done}async function Da(t,e){const n=ba(t),i=(await vd()).transaction(Yn,"readwrite"),s=i.objectStore(Yn),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Nv(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _d(t){let e;const n=await Da(t.appConfig,r=>{const i=GR(r),s=KR(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Fu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function GR(t){const e=t||{fid:jR(),registrationStatus:0};return Dv(e)}function KR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Xn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=QR(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:JR(t)}:{installationEntry:e}}async function QR(t,e){try{const n=await MR(t,e);return Zo(t.appConfig,n)}catch(n){throw Av(n)&&n.customData.serverCode===409?await bv(t.appConfig):await Zo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function JR(t){let e=await Hh(t.appConfig);for(;e.registrationStatus===1;)await Cv(100),e=await Hh(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await _d(t);return r||n}return e}function Hh(t){return Da(t,e=>{if(!e)throw Xn.create("installation-not-found");return Dv(e)})}function Dv(t){return XR(t)?{fid:t.fid,registrationStatus:0}:t}function XR(t){return t.registrationStatus===1&&t.registrationTime+wv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR({appConfig:t,heartbeatServiceProvider:e},n){const r=ZR(t,n),i=DR(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Ev,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Pv(()=>fetch(r,a));if(l.ok){const u=await l.json();return Tv(u)}else throw await kv("Generate Auth Token",l)}function ZR(t,{fid:e}){return`${Sv(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wd(t,e=!1){let n;const r=await Da(t.appConfig,s=>{if(!Lv(s))throw Xn.create("not-registered");const o=s.authToken;if(!e&&nP(o))return s;if(o.requestStatus===1)return n=eP(t,e),s;{if(!navigator.onLine)throw Xn.create("app-offline");const a=iP(s);return n=tP(t,a),a}});return n?await n:r.authToken}async function eP(t,e){let n=await Wh(t.appConfig);for(;n.authToken.requestStatus===1;)await Cv(100),n=await Wh(t.appConfig);const r=n.authToken;return r.requestStatus===0?wd(t,e):r}function Wh(t){return Da(t,e=>{if(!Lv(e))throw Xn.create("not-registered");const n=e.authToken;return sP(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function tP(t,e){try{const n=await YR(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Zo(t.appConfig,r),n}catch(n){if(Av(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await bv(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Zo(t.appConfig,r)}throw n}}function Lv(t){return t!==void 0&&t.registrationStatus===2}function nP(t){return t.requestStatus===2&&!rP(t)}function rP(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+xR}function iP(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function sP(t){return t.requestStatus===1&&t.requestTime+wv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oP(t){const e=t,{installationEntry:n,registrationPromise:r}=await _d(e);return r?r.catch(console.error):wd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aP(t,e=!1){const n=t;return await lP(n),(await wd(n,e)).token}async function lP(t){const{registrationPromise:e}=await _d(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(t){if(!t||!t.options)throw Rl("App Configuration");if(!t.name)throw Rl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Rl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Rl(t){return Xn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv="installations",cP="installations-internal",dP=t=>{const e=t.getProvider("app").getImmediate(),n=uP(e),r=Tn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},fP=t=>{const e=t.getProvider("app").getImmediate(),n=Tn(e,Uv).getImmediate();return{getId:()=>oP(n),getToken:i=>aP(n,i)}};function hP(){mt(new st(Uv,dP,"PUBLIC")),mt(new st(cP,fP,"PRIVATE"))}hP();Fe(_v,yd);Fe(_v,yd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="analytics",pP="firebase_id",mP="origin",gP=60*1e3,yP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ed="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=new _a("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Qe=new tr("analytics","Analytics",vP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t){if(!t.startsWith(Ed)){const e=Qe.create("invalid-gtag-resource",{gtagURL:t});return je.warn(e.message),""}return t}function Mv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function wP(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function EP(t,e){const n=wP("firebase-js-sdk-policy",{createScriptURL:_P}),r=document.createElement("script"),i=`${Ed}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function IP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function AP(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await Mv(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){je.error(a)}t("config",i,s)}async function SP(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Mv(n);for(const l of o){const u=a.find(f=>f.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){je.error(s)}}function TP(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await SP(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await AP(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){je.error(a)}}return i}function kP(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=TP(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function RP(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ed)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=30,CP=1e3;class xP{constructor(e={},n=CP){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Vv=new xP;function NP(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function OP(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:NP(r)},s=yP.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Qe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function bP(t,e=Vv,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Qe.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Qe.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new UP;return setTimeout(async()=>{a.abort()},n!==void 0?n:gP),Fv({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Fv(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Vv){var s;const{appId:o,measurementId:a}=t;try{await DP(r,e)}catch(l){if(a)return je.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await OP(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!LP(u)){if(i.deleteThrottleMetadata(o),a)return je.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Hf(n,i.intervalMillis,PP):Hf(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,f),je.debug(`Calling attemptFetch again in ${c} millis`),Fv(t,f,r,i)}}function DP(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Qe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function LP(t){if(!(t instanceof ot)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class UP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function MP(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(){if(Mg())try{await Vg()}catch(t){return je.warn(Qe.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return je.warn(Qe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function FP(t,e,n,r,i,s,o){var a;const l=bP(t);l.then(y=>{n[y.measurementId]=y.appId,t.options.measurementId&&y.measurementId!==t.options.measurementId&&je.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>je.error(y)),e.push(l);const u=VP().then(y=>{if(y)return r.getId()}),[c,f]=await Promise.all([l,u]);RP(s)||EP(s,c.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[mP]="firebase",h.update=!0,f!=null&&(h[pP]=f),i("config",c.measurementId,h),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e){this.app=e}_delete(){return delete bi[this.app.options.appId],Promise.resolve()}}let bi={},qh=[];const $h={};let Pl="dataLayer",BP="gtag",Gh,jv,Kh=!1;function zP(){const t=[];if(Ug()&&t.push("This is a browser extension environment."),VE()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Qe.create("invalid-analytics-context",{errorInfo:e});je.warn(n.message)}}function HP(t,e,n){zP();const r=t.options.appId;if(!r)throw Qe.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)je.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qe.create("no-api-key");if(bi[r]!=null)throw Qe.create("already-exists",{id:r});if(!Kh){IP(Pl);const{wrappedGtag:s,gtagCore:o}=kP(bi,qh,$h,Pl,BP);jv=s,Gh=o,Kh=!0}return bi[r]=FP(t,qh,$h,e,Gh,Pl,n),new jP(t)}function WP(t=wa()){t=ie(t);const e=Tn(t,ea);return e.isInitialized()?e.getImmediate():qP(t)}function qP(t,e={}){const n=Tn(t,ea);if(n.isInitialized()){const i=n.getImmediate();if(Yi(e,n.getOptions()))return i;throw Qe.create("already-initialized")}return n.initialize({options:e})}function $P(t,e,n,r){t=ie(t),MP(jv,bi[t.app.options.appId],e,n,r).catch(i=>je.error(i))}const Qh="@firebase/analytics",Jh="0.10.0";function GP(){mt(new st(ea,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return HP(r,i,n)},"PUBLIC")),mt(new st("analytics-internal",t,"PRIVATE")),Fe(Qh,Jh),Fe(Qh,Jh,"esm2017");function t(e){try{const n=e.getProvider(ea).getImmediate();return{logEvent:(r,i,s)=>$P(n,r,i,s)}}catch(n){throw Qe.create("interop-component-reg-failed",{reason:n})}}}GP();const KP={apiKey:"AIzaSyBQjVHy5UrXMBYu5fFq0Atd1IOSsAO9_W4",authDomain:"kooop-399b4.firebaseapp.com",projectId:"kooop-399b4",storageBucket:"kooop-399b4.appspot.com",messagingSenderId:"861642362756",appId:"1:861642362756:web:c018549fb9a12228a517d1",measurementId:"G-5808DTTJXS"},Id=Bg(KP);WP(Id);const Bv=uS(Id);let QP=Bv;const Xh=yR(Id);async function JP(){const t=dS(Bv,"koops"),e=AS(t,SS("date","desc"));return(await RS(e)).docs.map(i=>i.data()).sort()}async function XP(t){return t.id=QT(),await PS(fS(QP,COLLECTION_NAME.KOOPS,t.id),t)}function zv(t){const e=localStorage.getItem("koopUser")||!1;return t?{phone:"0893092849",displayename:"docta rhyf"}:e?JSON.parse(e):!1}async function YP(t,e,n,r){if(t===void 0){console.log("file undefined ...",t);return}const i=Vy(),{type:s,name:o}=t,a=o.split(".")[o.split(".").length-1],l=`${EE()}.${a}`,u="images/"+l,c={contentType:s};if(!s.includes("image")){n("Please select an image file");return}const f=My(i,u),h=FT(f,t,c);console.log(`Uploading start ...
New file name : `,l),h.on("state_changed",y=>{const v=y.bytesTransferred/y.totalBytes*100;switch(e(v),y.state){}},y=>{switch(n(y),y.code){}},()=>{jT(h.snapshot.ref).then(y=>{r({downloadURL:y,storageFilePath:u})})})}async function ZP(t,e,n){const r=Vy(),i=My(r,t);BT(i).then(()=>{e()}).catch(s=>{n(s)})}const eC="/kooop/assets/error-fe6144de.png";function tC({msg:t,error:e}){return p.jsx("div",{children:e&&p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"flex justify-center m-4 gap-4",children:p.jsx("img",{src:eC,width:60})}),p.jsx("p",{className:"text-center",children:t})]})})}const nC="/kooop/assets/progress-a09ed1b0.gif";function mi({icon:t,title:e}){return p.jsxs("div",{className:"text-sky-600 border-t py-2 flex items-center gap-2 mb-1",children:[p.jsx("img",{src:t,width:30}),p.jsx("span",{children:e})]})}function Gs({btnName:t,left:e,right:n,curPage:r,onThumbClick:i}){return p.jsx("div",{onClick:s=>{console.log(t,r,t===r)},className:` ${e?"rounded-l-lg ":""} ${n?" rounded-r-lg ":""} cursor-pointer px-1
     
     ${Number(r)===Number(t)?" text-white bg-sky-500 ":" text-sky-500 border-sky-500 "}

     hover:text-white hover:bg-sky-500 border 
     text-center  `,children:t})}function rC({pagesCount:t=20}){const[e,n]=E.useState(1);function r(i){switch(console.log(i),i){case"PREV":n(e-1);break;case"NEXT":n(e+1);break;default:n(Number(e));break}}return p.jsxs("div",{className:"flex mx-auto justify-center items-center",children:[p.jsx(Gs,{btnName:"PREV",left:!0,onThumbClick:r}),[...Array(t)].slice(0,5).map((i,s)=>p.jsx(Gs,{btnName:Number(s)+1,curPage:Number(e),onThumbClick:r},s)),"...",p.jsx(Gs,{btnName:Number(t),curPage:Number(e),onThumbClick:r}),p.jsx(Gs,{btnName:"NEXT",right:!0,onThumbClick:r})]})}const iC="shadow-lg shadow-black/20 p-2 border border-slate-300 rounded-lg mb-4";function sC({}){const[t,e]=E.useState(""),[n,r]=E.useState(!1),[i,s]=E.useState("s"),o=E.useRef(),a=E.useRef(),l=E.useRef(),u=[E.useRef(),E.useRef(),E.useRef()],[c,f]=E.useState(!1),[h,y]=E.useState([]),[v,w]=E.useState(!0),[T,m]=E.useState(!1);E.useEffect(()=>{d()},[]);async function d(){m(!1),w(!0);try{const R=await JP();y(R),console.log(R),w(!1)}catch(R){m(R),m(R.toString())}finally{console.log("done"),w(!1)}}function g(R){s(R),console.log("cur mode ",i)}function _(R){f(R.target.checked)}function S(R){switch(i){case"s":A();break;case"p":F();break}}function A(){console.log("searchKoops")}const k=Mc();function x(R){k(Pe.VIEW_KOOP.path,{state:{koop:R}})}async function F(){let R={text:t,budget:ar(o),date:ar(l),location:ar(a),media:[ar(u[0]),ar(u[1]),ar(u[2])]};console.log(R);const ue=await XP(R);d(),console.log(ue)}return p.jsx("div",{className:Vc,children:p.jsxs("main",{className:"p-4 ",children:[p.jsxs("section",{className:"sect-search",children:[p.jsxs("div",{className:"cont-search-mode",children:[p.jsx("button",{className:`${i==="s"?" bg-sky-500 text-white ":"  "} hover:bg-sky-500 hover:text-white  p-1 rounded-t-lg `,onClick:R=>g("s"),children:"Search"}),p.jsx("button",{className:`  ${i==="p"?" bg-sky-500 text-white ":""}  p-1 hover:bg-sky-500 hover:text-white rounded-t-lg`,onClick:R=>g("p"),children:"Post"})]}),p.jsxs("div",{className:` flex ${i==="p"?"rounded-lg":""} cont-search-input bg-sky-500 p-2 rounded-b-lg rounded-r-lg `,children:[p.jsx("input",{onChange:R=>e(R.target.value),onKeyUp:R=>{R.key==="Enter"&&S()},className:"h-[30px] outline-none px-1 flex-grow rounded-md ",type:"search",onFocus:R=>r(!0),onBlur:R=>r(!1),placeholder:` ${i==="s"?"search koops ...":"post new koop ..."} `}),p.jsx("span",{className:"h-[30px] w-[30px] hover:scale-125  cursor-pointer inline-block",children:p.jsx("img",{src:i==="s"?ww:_w,onClick:R=>S(),width:20,className:"translate-x-[25%] translate-y-[25%] "})})]})]}),i==="p"&&p.jsxs("section",{className:"sect-koop-details",children:[p.jsxs("div",{children:[p.jsx("input",{type:"checkbox",checked:c,onChange:R=>_(R)}),"Add options"]}),c&&p.jsx(p.Fragment,{children:p.jsxs("div",{className:`cont-koop-det ${iC} `,children:[p.jsxs("div",{className:"flex",children:[p.jsxs("div",{className:"option-card budget  ",children:[p.jsx(mi,{icon:rn.budget,title:"Budget"}),p.jsx("input",{ref:o,name:"budget",type:"number",placeholder:"ex: 450"})]}),p.jsxs("div",{className:"option-card date  ",children:[p.jsx(mi,{icon:rn.date,title:"Date"}),p.jsx("div",{children:p.jsx("input",{className:"w-[100%]",ref:l,name:"date",type:"date"})})]})]}),p.jsxs("div",{className:"option-card location  ",children:[p.jsx(mi,{icon:rn.location,title:"Location"}),p.jsx("div",{children:p.jsx("input",{className:"w-[100%]",ref:a,placeholder:"koop location ...",type:"text",name:"location_add"})})]}),p.jsxs("div",{className:"option-card media flex  flex-col",children:[p.jsx(mi,{icon:rn.media,title:"Media (photos/vids)"}),p.jsx("div",{className:"",children:[1,2,3].map((R,ue)=>p.jsx("input",{name:`file_${ue}`,ref:u[ue],type:"file"}))})]})]})})]}),v&&p.jsxs("div",{className:"flex justify-center items-center gap-8 p-2 m-2",children:[p.jsx("img",{src:nC,width:60}),"Please wait ..."]}),p.jsx(tC,{msg:T,error:T}),i==="s"&&p.jsxs("div",{children:[p.jsx("section",{className:"main-cont md:flex md:flex-wrap",children:h.map((R,ue)=>p.jsx(TE,{onKoopClicked:sr=>x(R),data:R},ue))}),p.jsx(rC,{})]})]})})}function oC(){return p.jsx("div",{children:"Page Not Found"})}const aC="/kooop/assets/info-fc4fa1e5.png";function ai({icon:t,title:e,children:n,small:r}){return p.jsxs("div",{children:[p.jsx(mi,{title:e,icon:t}),p.jsx("div",{className:"p-2",children:n})]})}function li(t){const e={green:{bg:"bg-green-500",border:"border-green-500",text:"text-green-500",hover:{bg:"bg-green-600"}},yellow:{bg:"bg-yellow-500",border:"border-yellow-500",text:"text-yellow-500",hover:{bg:"bg-yellow-600"}},blue:{bg:"bg-blue-500",border:"border-blue-500",text:"text-blue-500",hover:{bg:"bg-blue-600"}},red:{bg:"bg-red-500",border:"border-red-500",text:"text-red-500",hover:{bg:"bg-red-600"}}};return`text-sm border ${e[t].border} p-1 ${e[t].text} rounded-lg hover:bg-green-500 hover:text-white`}function lC({onPageChange:t}){var o,a,l,u;const e=ps(),n=Mc(),[r,i]=E.useState({});E.useEffect(()=>{const c=e.state.koop;i(c),console.log("curKoop",c)},[]);function s(){console.log("current fav => ",r),alert("added to fav")}return p.jsxs("div",{className:`${Vc} p-4 `,children:[p.jsxs("div",{className:"btns-cont p-2 flex flex-col md:flex-row gap-4",children:[p.jsx("button",{onClick:c=>n(Pe.HOME.path),className:li("green"),children:"HOME"}),p.jsx("button",{className:li("green"),children:"Contact Info"}),p.jsx("button",{onClick:c=>s(),className:li("yellow"),children:"FAV"}),p.jsx("button",{className:li("yellow"),children:"SHARE"}),p.jsx("button",{className:li("yellow"),children:"REPORT"})]}),p.jsxs("div",{className:"flex flex-col md:flex-row",children:[p.jsxs("div",{className:"cont flex-1",children:[p.jsx(ai,{title:"Description",icon:aC,children:p.jsx("p",{children:r.text})}),((o=r.budget)==null?void 0:o.length)>0&&p.jsx(ai,{title:"Budjet",icon:Sg,children:p.jsxs("p",{children:[r.budget," $"]})}),((a=r.date)==null?void 0:a.length)>0&&p.jsx(ai,{title:"Date",icon:Tg,children:p.jsx("p",{children:r.text})}),((l=r.location)==null?void 0:l.length)>0&&p.jsx(ai,{title:"Location",icon:kg,children:p.jsx("p",{children:r.text})}),((u=r.media)==null?void 0:u.size)>0&&p.jsx(ai,{title:"Media",icon:Rg,children:p.jsx("p",{children:JSON.stringify(r.media)})})]}),p.jsx("div",{className:"ad-space md:w-[140px] bg-slate-400 min-h-[120pt] md:min-h-[240pt]",children:"ad-space"})]})]})}const uC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAyvSURBVHgBrVh9bFXlGX/e95xze28/6L39wNJCe4sVWBWoc0NQGTWbGk3Y1I1N47awxWUmy0Ix2f5a7PCfLftjYNxM9ocDXRZI5obaKZHFUYPoVDTFiWA77BUoUrDt5bb3+5zz7ve877kfgIoST/P2vOf9eJ7f+3y/V9BlPjttu18I0SeVWqeU6kM/iuEo3kRKJS0hEgoNY4d83x/e4LrDdBmP+DyLtwNArW1vQncAO6N6UFVRUUEX/yT+cT8UjZIbCVMxlUpQbd2wNz295d5cLvEZWX42gAaYM6gYWIDk4zay8EqASwDjDz5Ihe44US5Hydk0TT28hbrvvnvH8Xx+y71PP52gSzzyUgt2Oc6miO2MMzgfCFw0X5RAGhDVTWLeKo8Lyo6/T6m5NL3xwl5SySl9gFQms7EYje17/McbN16K/6dKcJftbJ0lMfC28uhdEJ4G9TTG69Fvk4KWYHsf3pEArLwALI+G413U9N0NNP3sP6mpbyXJWJRm9u8nLxSmhqVLqXP9Hdu6Nnxv8+cCyCp1bXv3PqL+Fz2X5pSRjI25MLbU4R0BsBYh6QpQWKsUzRfiPHWwihX+vvTb39HoWwcpl81S3y9/QaeHnqO2666lib3/orp16ygUDtN79903UpPJ3HwXUfJCLB+r4pTt7Nvqef3Puh7AiSqLE5ptWEoK+YpaANz1fBrD+xyajzlfKW2GShhzxDmopa2NOrviFHZ9qq+poXcPH6YIpNfY0UGiWKC63t6+jvt/svvjsFgXDvwJan3M9+78QBkGFVEr3RyAq8H3fHBm6fVAinFI7xz6DUCF8HLecc4BjLdwIY29/DKlXz5A76dTlH3ySUrlCnRs504KTU3TRw31lEul4t9waqJDZ8+8QOfxrXr+ajkb9wi1/R+Q3MUnUZp5GC0K5Cssm5YJRVdCko2SpQcHwhpZ5SD8nsL6/cKiWsytwaqY7+NbkgSNIg5ZQ2zDsG/Y+VKMD8nQ5ueyqW0XqXgnIgI2DP4bBHxtPYGqqOSd5l1PHI0l2cqlZp+o1RIUA5lmTC7Au+Qoej86Ht6dfpGisGULswjeNMs2jX3jMI+TMIkTyqcJHHSUaQhvcHs0Gi3hsisisgYPKz8+7fskqgRrekoTr8FHLRi0gGivsGkhf6NfB7VbiiWswByhJTAOxc4DCtwERCaVp2du5/8eJCpZQhAHeDIj4bIOvKgsFgaxbHNZgiw9EtbGN5VfVk21BVo6tsEp8G7Du1datAIirUe/UYP0tQpDWFt7nuWWQg6DE5VMUzq4MocwhyETX4V2tgF4TLSiYscZ9MD8XV9V1BNAVGQ8qRnzX8ZsL7Z0M0OcugHfjhLaaWz0X8f+uSoIMuhXgxIBflU+CHiyY4nyl15p2/ZABaBP/dOQAsc7EVBQpZMHzBdBap34aofkolJq+4pgnNXO6n0F+y3MxXGc+sDjy8CEuMAdK/AqHVE1y4DFJg3wL2T34zvuVqlGVi130LkCDPowH4cddUBKCmAaAMomYxIzAJaH4zwNu8oJjyKWo8FTcEijCgO6IqMAnRBV/Iz+pMESHULFZEub+vmzEQzqpUc5pqdtzgBlRu0g3oh3KAg15xg4fwujxDEQWQ6PbMTc8zhAOw7QXpIgxo59806axlp2hlQqRbGYcdLJybPU07OYJk5MwKstijXFKJmcodTZKbrj0EGyfWRSeOdK1kAYG5YAUhdiVhMGajmPotVyAObMoYz7sEQdBihNMhsBmBB7NqR5DU70lO8hX0G6JZti7+7pof8Wi9R52610GPO0bBmdaW6hkVyeYjfcQCOFAr2aTNJM23yaaGiko8LEVRyuH2FGxVmi7KVtGCugn0XLcwxj4hqocRSOSRzCr0ALYy6DNa9BMj/wPC2tPNoagF0POz6DkQyZOBipjVBHxyIKI82t+ur11NTUQs0tLVQbqSUUs7R6zWpyiy4tWboE0m2i+Y1REiNvwqHUSoncGTfqB0BIsMhE9QmMtXiBac5hvohvaBCOYbzuKXyvtR2q801oj6L9jHWC8WbseRTjP0Vs+8OfH6fFtY7eu3zF1ZROzxHH4ltu/Tq1trbQ6Q8naQ1A2raFgOLQgva2UvSAP5pSXWf3uDQSEsoYM3sqx6Y59KcxlNZVDYDivQeqbQWx+VCZKVSN30a0V7O0Fd0P50lj/EgiQUN/fIxqvCJAOHTkyFHKZjOUyWSotaWVcvkszcxMUwSVdz6fp+7F3ToceQxQlZ0cKlPGMVRQETPIHMCeRu842tkg+OzHGKv9RnxGtfSM1PlwMgi4vLuDKxkO5EwJjN/ZvZskJDw7O6d5tqHKOTkxQSVHn03NwRQ6IEXLZBZNDxecQIA0CsXeAjGz3RkpmMAwC0BcrO4HmK3wVgbfaoco6RZgd0qbQRbrCmgu6ORMAKF38G8WvWZpjpt49RWKQYqLFyNaotiYOHkykGSWGhrmUXNzc9nDdbgTIml9R1oP8AWIPXQPjOQqEDsOQJNKaXtkpjNgdBwqTfAYl/x4d0ASZwG4i8wVgNXO14GiBotYBjq/guGnsL9VmICeRtF6+969dFtjA3mpWRorFGlyJknd3V10CpKcg22yCbz1xkFadPB1RA511AbKEUXGUW60JO2FdyQgpYJOQVKHiRBilOuZUH4GoA6A4SQKzc0AwZ5co0ivd7HW1YeStB00/sf5OwhXObTrsb4ZEsvv2UOLoLJG2OixnqtoaF4jFRd1oqAQ1NHeTh+ePGVsWtAHtifUSzDIO1kF14HRUqj5kBOiYbdIJ8AgyzEycAQ7KONZqu8BTA4Ga3NdF4zl8H4bBzyIbDIE7+XKx0bjIJTF+gkw+hvEzUE+hr0dOGzb2Cj9HII5lhinE3izI3bgBihNOhyx4bEjJvcZo6wD7JtQFi2H1I5gcBiqzYDQWgRwjoMJbBsF4G9hvt14mgbHl6kZUHgCe0chPaec2BQyj6KzADiGxc+r4DrgkgZhkSluI9lTtAQS/BraamHKXlf5w/Je3PhxmKQudxSV8iBOr32TmhXf0AVdi697dEVD+tuhSmHKwf00Nj8BbznCtR2ZOMpGwcE6A+LZIB/7psYy0UJX4bg+4LBcECcgjJ2g8Xcc8AQ+1wObbVK2egTsBsvejH8FbL4SNjPuu/QRxg8QA/C1A6wCwd4gFHGmSKL/HIDtK5dr5gJlvNunR62Qdr6PdLYSOuOcRvaZBSpOqz0sSWVTCN8/REo8AFpvFAvDFAhBXzPDtjPDp4phpAubCsqojhV1CiJ/CBs/0BWNoG+jOJgCkaulyTQ7IZH9nhesNtWxVOYAGxDMHxIGONtiMYiTDhlt5XURYq4ST+L790VPe7zj+90JSFHf6p6Bfd8trRgor56CobYqlorQ8YxjYg1feDD+IohzzRgVlpZSHut2ob3m+1Qpb6lcqzHA5dg3hTVzwtz4QoHNTaOf1OFH6FiZBqcBCIFVXivFDoS0J6pIGSmesu3x/5CINsAWjqBNg8VNmPsKYt5uhJlDOt4pnYZCXFhgez64B1tBeVWCqn84wr8Qx8ngTjOPVcyhibOTjrNKX7RWYeyo/rWC6DZLJnJC3rw5+IHpvDp3BX5/GSOxlYJK2ieT+sKCiwhfS5NtTijzLlCQ3ogCb6w0Lrf4Slm5eONiBRouCR0zC4GjtADcAxBALyS9FEKJSOtHC3O5HaVddjXAt4m2zSMRLwjapBUBIjU6dZmwwbXh1djSBa5cTg3DgdJB9lnDsY4zCZlgneFyCwzzxMEcqRJmUCq/vOCixDGSE1sf6MZ8tkd65KoqcBcB5CdF/sByy1m5Xqn+JAjnA2ldz7/D4JQCjCZA/yCYlEJNBxitQ0sHv2xJzj5a35IKwlQ5Wezli9kM5vguzEUtX7rW4nDt+mA0ck2hMHAhnosA8vOwW7wr5Tj7JpXoO8Oqh7fO4581AikcA/FFCDVzBZP+GtEawATS14xrgisaNEcRZey2jlULiTaRiRRNkCz3u3SIEcPFYuQuU/Ke/wj6lOc3jrOtxadNTdIsHQOxw1DFMWUuO697ribQCSksQ2sL7i3sDPMhcQ06cCh2FYRRVOp8p0EeBth6rFmg1COr3OLAJ2H4VIBamo6z8XnfGxz1KX5OVf/qoMoEyjWlMBfwUi3HzsSA+U7TGEgthkV1WNQlRfI6klvuKea30RfwxKGtHXyBQcGgzPvihguVcqrHRDAmKnMhM7ctGvxy8EU/cYfkDjAZD5eAgvESy1ELpFTIBgqhRVlVgOGpugHcDMZ+/XmBXVLFn/R83w7373Jz/Qg/K/fVhOPCd+O2lFGOi4d8lZyGCmGrI88U3JembH8E1dcwXcbzf9DRnuwZ8lT2AAAAAElFTkSuQmCC",cC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjySURBVHgB7ZwLcFTVGcf/5967u9ndvN8xIIEhIgJhqIHC9AFMGW21VoqdEgEVLYx0gFo6rZLWqYA8Bkyd0cpDRQgDtIWhSJ2CvJQgcUpLwAihA5IMUajYhECI2fd99DtnsyHGwMa6ezeO9zdzs+fePZvd/e93v/M97i5DB+eBdBfwhAFMQHj7OlJL7/+FAqAycoDxP5eAIhocomERLDiNJNREEqpRCPSJMCBLnG40+oBRMlnPTFJpJiy6k64AAYnEeQIWPULajGd0ehmwuCESLG6KJVAULIGiYAkUBUugKFgCRaHPCdTXYg4FfQgtJwe20aMhDxkCluSA4Q9AO3MGanU12KefhhNHk0m4QNxijNJSpJaXwzF2LJQCShFZFyl0HcFz9biy4Jcw3nzTdJESGknrhYVwLV2GtJmPRJ8bDKJl7lzo69fDTBIiEH9CZfKPkbHhNcgZGb1+nNrcjObBgyG1tcEsTHfSRlIS7E8+iezXd34hcTgK91FTpsBMTBdImfEQMleu7NVcIxSCQT6oK7YRI2Ampgqkk8WkLVly0zmGqsJf+z5a5v8CTePGofn++6F7vdfvN9khmLqK2cumwVaQf8P7/adOoe3pp6Ht2QOJhOJwPdr+/Bek/+wxsa811MNMTBVIGVLc8x1kFm3rXoZn0TOQmpo+b9ZqKDxN0xDcv99Uszf1FAvuPwAjEPjMsUBDA5p/eB+8FOdwcbrDLchROlqMPQcPgtF8MzF1medPxL43Ca577oHu8yJw4AD0w4fDL+RG88dPQF7VIeh+P1ruvRf622/DTBJectWcLjjnzSUHZYf/xRchUUoRQaeQIO3IEbgo0m6p+AOCv/m16ctuQlMNvV8/ZJEFOQYNEvutlGYE5s0TY8PlQvIrrwhxvGQ1wWd+n5DMOmHZvG53IO31XZ3i8JhHI2sRY7cbjmefRcr06fC+8w6uTZ4MqctSbyYJE4hRYuoqvVOMhX+ZMwehbduAzEy4KiqQsWCBWN5byV91Pe3MJmGnmPNH93WOr1ASGtqwAfLEiUhZuQq2ogFofvgRaH/aCrlbJG02CbMgIxAMD0IUEKoa3Fu3InvXLuiXL+MqLfv6ls1gCRaHk7BVTMvKQlYVOejhw6CRf/Hu3QffurXQ3noLUh8QJkJi60G0abS8M6r19KnSZhcS+rr4+S0Fg+jLWF2NKFgCRcE0gYSjGz4cjsVLYIwcia8KpjlpgzoVqbRCuSjW8R39J65NGA/WLbMXUIoBav3Yhg1DYMuW3tWfb78dypgx0D74AMbRo4glcbWgzyhPNZ/QuXNiqF28QLGP2uNjJEo9cnbvQebq1dBT09AbkqkzkrVpE+yTJiHWxHQViwhi3HorpP79RVVQrzsN5mkX5QwvpQ/e9a9Bp7qPQsWvyGN4KVa6jZqFtKdL8vXax4ABdMQAu3hR7GruZDA+L+gH6uuvW2Acm2UxtSCNsvO0EydQ0NiIPOqG5pK5Z549C21wuJJo/+3vkPduNVIXLxL7XBjnmrW4hQTLP/oP5PDaEPXKIhRWH4Fzwa+EiPKs2chtPI+CEzXIr6tD+r+OiU5svImpQHJrK9T/fIwrTz2Fyz+diva/74a98BbKr8JdDDkjHZLN1jnf9eqrSPv5HPjfP4mWRx9Dy5QHwKjVHKH1uQoE9u+DPnAQ0letAqPa0RVy8v7qd5FUMgLOheWINzEViLW3w1s2FaE33hB+JnC8Rhy3U6+9p+RByc0Tt74dO6BWboS+Z7c4zSJ4qIBm7NsH5+OPQyFxPXv3IrBmNa4tXy66H+4Hy6AhvsTWB5HvSSGrcHNnKXXRnn05J2EfWSJu3T/4PpJO/xtMUcRmz8/vtSP/f4mZQPxzd9Nq4r7rLoTqG9C2YgVY8WBkLlyIL4vkcotb74GDUKmO3QnpLnd0POJF7CyIqoC2knDXs33jBqi87z5tOmJBkBy987vfgfbhhwiufkkci5yI8Y50Y/f/PR5oFy6Iob2kBHouNQhpVfuiaK3XOjupCgWMusOBwM6/UhhliCKbNvQO6NnZYNR1ZTNmiHmhpmZxa7uD7svIjGnkGzOBuJfxLF0KrbkZ7qlTkV37HjIXLRLNPs/GjZ8LVW74Jsi5t1dWisAyh4pmzvJyaNQPa63cBAfFRXk1x5Bzqg65FBJk0IqmcQE3byZRfeS0H0QqicmSkxGz9xXrVEPPy0NSWRkk7kAvXISPViaZ4iLxZGO+SZ/yUIRo36iqgkJ9LoliGZVazvrx453/g78giVIS5Rt3Qq2pgXG4KtwjGzsOSbxUqxtQ604huH379eIapRv2u++G4fMjRCsiYlRGsb6KEAWr3BEFS6Ao9BmB+up5HneBeAuZ99+l0tEwaMUxeCeVNnF1K9+KbwMrCRfQuLs10jNgDKd4qjAcIgjhRo0SbWoxJzW187iRm4t4E3cnbZs2DYGhw2BvvQpGOZl68iSkoiJoFPCxCRMhkWgSLctiZTt7BvJDD0NqaIBMXVff7NmQqETC/tskHqPS0m6nQltw2TIhjv2BnyC0dk1cLw2O/ylGbR1p5w6Enn+eYqTL0F/6IwxKFxhZBCsuhkq9sGDFc2JJ57Ug4/RpqC+vQ+jMWQQpn7N/69viKg+VgkeFgkOdevh6v/6QuTjbt8X9umlT2j7a1avikwhd+gRUDqOOqSYSWB5E8jfIy7FMDn9WxkcfdTxIE6atUZoRorTFoORUlWWwnFw4Zs2CxCuULS2IN3EXiFFQxwyEK4NGR1BHrWYe7ElUFZSoiMZsCkIUDPI3rVPgx6ViNFZorF/6GK7588Hy8qH+jVrTx45BLigQXVgZ8SfuPohLwjo2Ppa6HdMoyWUkmBTw9zhXlGS5Y/b5IPHLgul0U6jKqK1YbsrXEuJuQVIP467HZEpybzaXiyB37WykpMA4dMi072xYqUYUrEg6CpZAUbAEioIlUBQsgaJgCRQFS6AocIGqYNEjFIzWShQlHoZFj1C68wI7D6Q7gfdg/URXdxqpszdQGgi08h804wdgEaGxQ5Owky7oUIsOPkq7tfj6UkUaLOY/7lbQYTD/AyqrSBdOvBWaAAAAAElFTkSuQmCC",dC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAp4SURBVHgB7VwJcFXVGf7OvS8bgZgQSEgIZjGgCCOLGfZKgKDAoCxip2ht0Zkyg0O3YWrFFot1sNPplMUuQmUrgsAwI4tCAUdBbWQRmgAKWAymMoIgW1iSvHfvuX//c27eywPCewGb9+hwv8x5796zn+/+9z//+c/JE2gAEaXz1085lDaE2xGVHOYJIZYGI4T6YHIK+GsbhwJ4UKjmMISJqg4S9AU8cq5GNYdeJpMziS8mwcPVUCrHL5igCr7oCQ9NYbsiiODhujDgISI8gqLAIygKPIKiwCMoCjyCosAjKAp8iANcy4saVoIiUk6dWYj4PceYE+TwmJ09u4FZL8P0+yPm1Tymp4Fm/hbi7rsjUtlSiLklbR/YBwwqhbhQw+93c5oWsArykfDJAYjU1og1Yi5B4uAnTM4F0NRnQJ2LI2dW/O3eDXPlamDXHmBoKWKNGBPE+iRg89RgwJgwARhcGi07aOHfYLyxCsLyIx6IMUFCB+FIfrcj53STHSAumqcRcZnFooNwqa4GNtWjTV4ujKQkpik+TodbkiA1bWz5bDHePbwSA4vGYtCudcjP7BYXWbolCTpz+Tg+rFoL27Gw/chqfGSux9B7voc+qaPQKb1LTO2iW4sglhxJNtZW/gWX/RddjcVkWE4Amz9diq0Hl6NHx1KM6TkFHdOKVWKLS1VcTFSeyyBZOurqLl+TsuXQ37H7P29fM3BFFLHSrvzqPcx4ayzmbpuMkzVH0NKIkw1P2Pje63ht6a8QslPJwY7qTdiwfz6zEblbPiMBZ2pPIT0lBy2NmL9iSgrU8Csq3sH+LxNhyTpMfur3+OjLjXizci4vReyI5R2SaN8mH1MHv4LkxJa3rGNDUIOUnK85jcN7NqGvvhMwhA+79m3BkRX7IVPrg9uY16tE66ceOUMwsc90ZLXORSzQsgQxMZcun0P1sX9j/6fb8M+db6Nb5WeaIJEskHxXAhLzUyET6sILwWUqSJSrrwoy7sWg4jEo7fI4EysQKwOyRQkiodSJATORlxbpJroOLEGO3wZ9cAaJ3bjpQhtSmdROYqiMRX499NYJGchOL0R+RhcMbP8g8lKLkJwdG6kJR0xW865MuJ/OsqXAD59GzaaVONWrABety6itv+h2hpVzWkoaMltlITUpk6/bgrZ9AHz/SZhLFkE8NAKxRkx0kAj7VDOUuspIyUZ6hz7hKY3QXAr97Xx+BOLE8bityOJqKF7XzAuPpqC+iQ9Fnk86CuLjkw5+kBM9n89EPBG3V4zmzgGWL4ucRzF06LC+vq10kJ7RNmzQ1yFrp6CQ5/Y2oNPfQHx9ImQNuRZR/JxmcdNBigB5//1w1q3VfkPn5Vmgyr3Ai79x7xcuAPXsofOKOKrKOLTcaHYZUgJfN0zhaguovh7kr2eCWMbO1oBq6xpK8J+IjxTFfNvH2vwPYMxYmIGAJoYp0k9JtOHXS4W6WohzNZoUof94DZaaCuPjj2F07YqYg2INaZH1/HSykpLUHBYxSBU4n1y4iByKD+JyBM9Roz91AuL82ah5KSsbom27uGkh74xiFHiWdBR4BEXBTRNE7loBN4sbKUnNzNESuqLZlrTSVMqfjAA7tPwWKCmR/VxJ+oSGJsuyIUy+M3zaUyGi1aNsILZ5REDCaZUMkZisC12xkFdBafTaWkiDzcWUFPYmGmF1cU2cLi5egEjwgTidOD2YR6crc0HtntiS07mdBNXnG7CpmjPVSYdd6VvfIf/o0SQLC8np0IGcortIjh9P9rO/IKtfX44vJrtXb/JPnUqy6nMel2y6rkOHyB41kpziYnJyc3VddlEhWRMnktxfSVJKPaU7/BdYv46sBwaR5HzyznyS351A8tgxXY/K41+yhOyevUiq/nTsSLKkhOzVq9x0yeU3vkVW2TBy8vJI5uSQ7FxMcuQIstes4f41z3BoFkGqMWt4GbvMhWubhOwUdW+QFIKshjiL46y0NLKPVjVZl11ZQU5yiq7DviONJHee9zEooO5TU0mWl+t8gVUrdZxjGOS0bcd2UwpZpkmWGuTJkyT3Veg2A6oPjzxMTtlQkpmZZM+cSYriwIJXdV9Unx3DJJmQFLKt7FGj9QP4nxHEz51kWZlLwDOTybZt8pe/r404FWdP+zlZVj3Jyr0USLtDD9iePp1kE52wwgiyqqrIVuQf4MG2y3LjHn6EpN9PVu9emiBryhRuj/OcPaMfksoT+N0sslesYAKYsMce1RKupdyyyD5zmuxDB8lKT9cE1o8fQ84pJtSxyZ7yI5ckTVDzcMNK2kxsBdM0kdD/O6Bhg3Wcwa2aviSIHr2BsWPcpcO/eOE5fz4oLY1DG/e7Y0eImgu6jNICPmHCZN3i694TxrSfuYuLnTtA+ypgHP0C2hN05hTET34M49cvsJ5zy5kV+yDu6w5SmwFr3oQzaiToz/PYNXIIIiMD2LUTxvnzMFpxX19bCNE+Sy94hZGIG8XNuzuUQk1IvjoKPu6U6xAjrZBFgEel1+eswFlRuldNVJeX57o46gO8SK1lJe5uIBobt/CH0D5qXU6t19T5onu7A68vgzN7LsSH5RCbt/JDaA2a9wq7S066vcnOhqEIC3buJvAt/EEitCF4BcKjHhoJUV7SmGQmQDjBmYwlQTTMgGq3Y8dOnUfm8NMuKgJa8a7pxUvAnD9ClJY2+K/dJSy1StXNGxMeY4kdB8GOfbmIJWXOn0ALFkA88YQmk5Rf6dgx4M58t0E78q5tU2hRh5koLACKChrvVaioQNBzYS9eDFHSm1+pAxDL33AdaaNGwczrBGvgAJjr1oP+MBsiqwOc9DR+xVgaj30FwQOmyzUQeytAubksyUz8HemaFMfHZsawMqB9e+CbU4Ai8bnn4BytguD6blSQbpwgim6Qhe+LXh2vNhLdawHzpZdCabaKeXA4jBdm6P0x319fBR0/Dtq9G4L1WrBOfShv9hwIyf6jx1lSDOHqF7aH1MtsPD0Jxj2dIadNg5g5E+Ye1oWPTtDlncxMVz+i+WgWQeqVcJ78AUS/fnBKSpCgGlM6Ztw40H09QCV9eT4hrSfkiOGsFDNZIeeyAeDGNVmnGu6M512lzcabGPwAjIEDWWdkugRmZwFbWP9sfxe0cxdwiZ1n7TJgDhgA9B8ASmb9t3kzUF7Oipy9Ap06wTdkMMy+/dzyv3wWGD4UxFKDc+dA/fpqyXPUKdvsnNBGZjQ0azVP4XXxROme1VFoULlq8hSue4tnW5aSoH669pS8s49noH79tfcQ1VUg7rQI2/cK55NCjbsdUGnusU4RkiitldTpdCWZ+lS+uOIh6GfE/VMeSZXWuOMfYV8uDM2SoCuEQARfESA0H4WRoES+sVDkfzMQjhHxOJ1ooh7jqnQ9yCvaDE8XDcXNUA0tr4O+JZyMdJhlZbAtXtMlmbfqMdsQYu4wu/rkc/w2dJqHmD/A/zcHlOcwiwKPoCjwCIoCj6Ao8AiKAo+gKPAIigJF0HZ4uB4qFUHvw8P1ME8tNdQvLakfWSqAh3BU8+q/0OCP83wzBO5vdnlwUQ2XE1dJ6197Y7b48im4P5V3u2I7hxc59FKcqIj/An+ArgXZL2cjAAAAAElFTkSuQmCC",fC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAm+SURBVHgB7Zx7bBTHHce/u3u7dz7fOdgQ2zixhXGBhKpp1VpUiVqSSiFULZFS8SyPlpcCNKGPgEEpBQSChraR+KdVq1YVLaiiVJWoKCptKWpo1JKkDqQUGxTqmIfBgO17mHs/dvqbuTtz9p29vr0jTpz9orPvZmfndj77m9/vNzOLAUuWLFkaO0lDCxoaGuZJkvQkPoJijJ2+du3a8ewy29BKiqI8RRU34aOrQYBkWBpRFiADWYAMZAEykAXIQBYgA1mADGQBMpAFyEAWIAONa0As/a8Y2TCuJeXOxgvUuAQkMR3NExlmTwyiM+DAn3sUhBIKzOgDDEiiwaGnbIABhqYg6kjQZB3rm8LYOLUfCovTEoaC+T4X1r3zAO7GJdFqISoJIF3XoWkaXZ8kXoUokUggmUzmnMc7oiDFJSFTp9jI7TI6X2FJbJgawouNPthYItWOpOPxSh+emODAX3vsKFRFA1JVFWvWrMGCBQtQXl6OQuXz+XDw4EEcPnxYfJYEC4ZlDXEsq/fDTnB+2+XGL96zU/kwMYVxy9CxrimCF6b6CKw+pIIEhy0Fu1CXXTSg+fPno6WlBbJsLiDW1tZiz5496O3txcmTJwWEeTUhbH/EAxUx8G5tmRZBlNXg11cGWwCHqZPlyEhiy4wwVk+5S+ckBtVhdH5vQsMbHi0d0Qqz8KLCPK08Yvbs2abhDFwEnd/c3Jxqk+7+ZyYEoREc3pXUUNPxbG0I+qDbTzWpgkKFmwjO2ikeOieS07Yn6cDX35yEO9FUa4WqaAsKBoMohfhQ5eJdsOXph1NKIttbS9wnkX9Z2xTH+ileutN6zjmeRJmA0x60FeycMyrq1nPHeuDAATE8SqVU9wd3RnwiQGwADihaJfGdj0WxaXqvgJMNgFHJ7ZgDL56biAtBRfgnsyragtrb2zFnzhzMnTsXbrc75zi3jBUrVmDy5MkoVpLwItznMIpWUWxo8kKlUJ4tjul2zI4Xzk7E2/22DFKYVUnCPI9ER44cyW3cZsOWLVtQU1ODUojDsVES+HxTDN+Y5oVNT+TUuRUtw8ZzHI5qelhl674lihzO3r17Rfgv1olnrEAhIC2PxrCmkSxHwMkaVuSTfLpdwGkVcHQUYzkZ3RdAPLrt3r0bCxcuzJs48uOFJZSSANDySAxrGz0DSWD2cT/BWfFmNfkcuWRwuEoOiHd+586dWLJkSQ4Efuz69evCLxXmkxiaXEnMcHkoW84dVn0iWlXhQogcMis81xlJJV3ucDqd2LVrF1auXJkXDm3rYt26dfD7/ShUdkShiFCf1SaBuBUro2hVhTYK5WDmo9VwKpkFcZ+zdetWEbHyDR8OZ/ny5eK3KUlDQ7+UilbcIft5hp0UuZFIj1A6lQQQHzKbN28WAPLBuXr1qjjW1dWFUqmP8pyXyHLayRhVKZaKWBwOk5GgV5Jm9fx9sSoaELcc7pAXLVqUN1pxn7N69eqSwuFyqQn84FNeAUbkR5n7QlAiSYbj3W785L0ygsULxygPykSrxYsXD+uQly1bVhCc0WYuDimOens87zGeV2+kXCmiT8LPOx1FZUOmbZAD2LFjx7DRikMpBA5jqW6khkqRk18+waW1occqYgJWcW2ZkKIo2L59O1atWpXX53DLWb9+fV44fBhevnx5UBmH09PTI97zDt2M2GnmrhSXB9NleWJ8ya24bNoUoFmzZuWFwzvKHTK3HD5HG0779+9HX1/fwDmdnZ04evSo+Mwj0bHuMnRGy8WkU894GZb1ylc26LiMbgr/v7leVrQ1mvJBdXV1eR1yJpQbDSsOhE9w582bh3A4jFOnTsHr9aYOUji/EZGx6EwFnq52oFpLZ8VUztJJYGqvQh9Y/MjYSOb93YSKv99RcS0qj82uRltbGwKBAFwu10AZH1Z86XW0PocDOXTo0LDHPXEVv7vBL4/lmZGPnC1n9sIkU4usg2XK/i5duoRt27YJGHzBvbW1FUuXLkVHRwdKp3t2wdLz8nuvoZ8HvwBzq4f5ZDrMHzt2DCdOnBAL9Xy5Y7yqKA8Wj8fHNRwu6+EFA1mADFQyQMUvbg7X5j3XOxYyCYhhospodS+G5fVROJXSreBl9HhVFF+iDUSe6LkoIV74cABTXQnI7P2FZQqQy6bj95/zolKJYrpbxy+bA7SgxWAnRpUiLkqosjFUEDiZFrHKaf+qnLZpJohjTACtUBiVpWZKGtXh9cW2M69BP56fEsG+TwTR4GB4pjqCV2b6CVpM5Dg1lDza6Vwl/Z38ZjnlVOjnbVbaUrmTW2JihZHvs2mSuZVGU2H+Cw/GcbUf+OHlCsjU+defDGJVYxBfrtNx3iejk/aiprp0zJyQwL7/OrDrsRDeoq3fz1ZGsfeiG9+eHsBbfXY8XRtDy1knvvXxOMJxhtduKzhyw55+UCOJK9TOrKoI5lZH0RZw4QGC/NPmCHrDSUxyyDjSaUfLzBDa+hU85Ezg+212fHOGjiRNVP9xR8Oz9XG81OrCK5+8ix9fLsNZ/720c7QyZUE6E/Nl8ZAB3z+I0fyHg+rwx/HdC27a5pVBfYCdLnSyXYdO28O76OI9UYav1AXR6rHhRxc1eBMK5j8cojaS6I8mMbsmStZz75KO39TwXF0Ik6iNcx6GRjdDlRLBy20ughTHp8mi+qMR7GkrR60jga/Wh1GmJOGjLf3PV8dxulvCkvogHGStZ/1qwXBMA3qjjxbdy4GXpwfxvUeD6AoreDdgRyipiHXjrzXEcN5ro+kCBycNPAjHf57z2TGXLGfDjCQeVGO40O+EJyzhnFeju17GH/FJDzUZ/wuo0BQJp3sd4APqFn2Pi3aov0gW3FhB600hRUxm9fQ+fVu/hhu0q3HWq+L1O3acoTZXNgZw4paanrkVrpzHriorK5+hX0+MdFJYl3GKvtRNF3sjouBnHeW0YQd0R1R0RzVcvCuj2gmc6dXwbshGEGRcCWm0wK6hO8w3/2S841MwnTq5r53A0tKGnQb7qdsaLXKl7vOdmA2XAjac92t4myyuI6yindr5y20HppHfO3bTiX9TG91Rldq2CVh/omNMPEQl4289NjxUpuMpsqQ97W66eaOynn/RhsLJ7IKcsxobG18tzf8Xy3aKmUkj2QW95RZWX87wxy4V/+lXRvdYSlYV49qS8PTP1UVouCv4J1mzxIwBUb9fpeWaluyy+/gI3tDZd6qMP8Lyq2tqehhJeeoaNzeKropKf+h2jLL+8BqbZxSFk/9wyJpqGMgCZCALkIEsQAayABnIAmQgC5CBLEAGsgAZyAJkIAuQgXLmYrRT+pokSR+WqVJJxf88DixZsmTpA6T/Ax/aBPGX97nPAAAAAElFTkSuQmCC",ui=[{icon:cC,text:"Info",name:"info"},{icon:dC,text:"Favorites",name:"fav"},{icon:fC,text:"Subscription",name:"suv"}];function hC(){const[t,e]=E.useState(ui.name);return p.jsxs("div",{children:[p.jsxs("div",{className:"   bg-gradient-to-b text-white from-[#d138fb] to-[#8d3fff] header text-center min-h-[160pt] flex flex-col gap-2 p-4  ",children:[p.jsx(_t,{to:"/",children:p.jsx("img",{src:hg,width:40,className:"absolute  cursor-pointer "})}),p.jsx("img",{src:uC,className:"rounded-full mx-auto ",width:80}),p.jsx("div",{className:"displayname",children:"Displayname"}),p.jsx("div",{className:"text-sm",children:"email@server.com"})]}),p.jsx("div",{className:"menu max-w-[1100px]  shadow-md shadow-black/50 flex justify-around items-center min-h-[80pt] bg-white p-4 border  border-slate-200 rounded-md mx-8 md:mx-auto -mt-[20pt] ",children:ui.map((n,r)=>p.jsxs("div",{onClick:i=>e(n.name),className:"cursor-pointer group",children:[p.jsx("img",{className:"mx-auto",src:n.icon}),p.jsx("div",{className:"text-center text-gray-400 group-hover:text-black",children:n.text})]}))}),p.jsxs("div",{className:"sec-cont bg-red-500 p-4 max-w-[1100px] mx-auto",children:[ui[0].name===t&&p.jsx("div",{children:"Info"}),ui[1].name===t&&p.jsx("div",{children:"My Favs"}),ui[2].name===t&&p.jsx("div",{children:"My Sub"})]})]})}function pC(){return p.jsx("div",{className:"bg-slate-700  text-white min-h-[120pt]",children:"Footer"})}function Hv(){return p.jsxs("div",{className:"dbg-links ",children:[p.jsx("p",{children:"------ DEBUG MENU -----"}),p.jsxs("ul",{className:"flex gap-2 justify-center items-center",children:[p.jsx("li",{children:p.jsx(_t,{to:"/",children:"Home"})}),p.jsx("li",{children:p.jsx(_t,{to:Pe.MY_ACCOUNT.path,children:"My Account"})}),p.jsx("li",{children:p.jsx(_t,{to:Pe.LOGIN.path,children:"Login"})}),p.jsx("li",{children:p.jsx(_t,{to:Pe.LEGAL.path,children:"Legal"})}),p.jsx("li",{children:p.jsx(_t,{to:Pe.SUBCRIPTION.path,children:"Subscription"})}),p.jsx("li",{children:p.jsx(_t,{to:Pe.INTRO.path,children:"Intro"})}),p.jsx("li",{children:p.jsx(_t,{to:Pe.TEST_REC.path,children:"Test"})})]}),p.jsx("p",{children:"------ DEBUG MENU -----"})]})}const mC=()=>{const[t,e]=E.useState(!1);return E.useState(()=>{const n=zv();e(n)},[]),p.jsxs(p.Fragment,{children:[p.jsx(Hv,{}),p.jsx(SE,{user:t}),p.jsx(uE,{}),p.jsx(pC,{})]})};function Yh(){const[t,e]=E.useState(!1),[n,r]=E.useState("+243893092849");E.useRef();const i=o=>{o.preventDefault();const a=()=>{window.recaptchaVerifier=new yk(Xh,"recaptcha-cont",{size:"invisible",callback:l=>{console.log(`da resp ==> 
`,l)}})};if(n.length>=12){e(!0),a();let l=window.recaptchaVerifier;wk(Xh,n,l).then(u=>{window.confirmationResult=u}).catch(u=>{console.log(u)})}},s=o=>{let a=o.target.value;a.length===6&&(console.log(a),window.confirmationResult.confirm(a).then(u=>{const c=u.user;console.log("user",c)}).catch(u=>{console.log("error => ",u)}))};return p.jsxs("div",{className:" ",children:[p.jsx(Hv,{}),p.jsx("div",{children:"Sign in with phone number"}),p.jsx("div",{children:"Phone number"}),p.jsx("input",{type:"tel",onChange:o=>r(o.target.value),value:n}),p.jsx("p",{children:"Please enter your phone number"}),t&&p.jsxs("div",{children:[p.jsx("div",{children:"OTP"}),p.jsx("input",{type:"text",maxLength:6,onChange:s})]}),!t&&p.jsx("button",{onClick:o=>i(o),children:"Request OTP"}),p.jsx("div",{id:"recaptcha-cont"})]})}function gC(){return p.jsx("div",{children:"Legal"})}function yC({data:t}){const{title:e,features:n,price:r,bg:i,text:s,outline:o,id:a}=t;function l(u){console.log(u)}return p.jsxs("div",{className:`border text-center p-4 m-2 mt-8 min-w-[30%] rounded-lg text-white ${i} `,children:[p.jsx("div",{className:`bg-white w-fit p-2 mx-auto ${s} min-w-[100pt] text-center rounded-lg -mt-8 outline ${o} `,children:e}),p.jsx("div",{className:"my-4 gap-2 flex flex-col",children:n.map((u,c)=>p.jsxs("div",{children:["• ",u]}))}),p.jsxs("div",{className:"text-[40pt]",children:[r," FC"]}),p.jsx("button",{onClick:u=>l(a),className:"border p-1 rounded-lg hover:bg-white/30",children:"BUY NOW"})]})}function vC(){const t=[{title:"Basic",features:["feature 1","feature 2","feature 3","feature 4"],price:5e3,bg:"bg-gradient-to-r from-blue-500 to-purple-500",text:"text-blue-500",outline:"outline-blue-500"},{title:"Standard",features:["feature 1","feature 2","feature 3","feature 4"],price:7500,bg:"bg-gradient-to-r from-orange-500 to-pink-500",text:"text-orange-500",outline:"outline-orange-500"},{title:"Premium",features:["feature 1","feature 2","feature 3","feature 4"],price:1e4,bg:"bg-gradient-to-r from-sky-500 to-blue-500",text:"text-purple-500",outline:"outline-purple-500"}];return p.jsx("div",{className:`  ${Vc} md:flex justify-center items-center `,children:t.map((e,n)=>p.jsx(yC,{data:{...e,id:n}},n))})}function _C(){return p.jsx("div",{children:"Intro"})}var wC={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(wC);function EC({auto:t,id:e,notifyUploadDone:n}){const[r,i]=E.useState(),[s,o]=E.useState(0),[a,l]=E.useState(!1),[u,c]=E.useState(!1),[f,h]=E.useState();function y(A){const k=A.target.files[0];i(k),console.log(A),t&&v()}function v(){console.log("startUpload"),h(void 0),c(!0),o(0),YP(r,w,T,m),l(!1)}function w(A){console.log("onProgress - pct : ",A),o(A)}function T(A){console.log("onError",A),c(!1),h(void 0)}function m(A){c(!1),l(!0),h(A.storageFilePath),n({...A,id:e})}function d(){alert("File deleted!"),console.log("File deleted!")}function g(A){console.log("onFileDeleteError",A)}async function _(A){const k=await ZP(f,d,g);console.log("Res delete : ",k),h(void 0),l(!1),i(void 0),console.log(A)}async function S(A){r!==void 0&&v()}return p.jsxs("div",{className:"flex flex-col",children:[p.jsx("input",{className:` ${a?"hidden":""} `,type:"file",onChange:y}),p.jsx("div",{className:` ${a?"":"hidden"} `,children:p.jsx("button",{onClick:A=>_(A),children:"RE-UPLOAD"})}),p.jsx("progress",{className:` ${u?"":"hidden"} `,value:s,max:100}),t||p.jsx("button",{onClick:S,children:"Upload File"})]})}function IC({notifyUploadDone:t,count:e=3}){return p.jsx("div",{children:[...Array(e)].fill(0).map((n,r)=>p.jsx(EC,{auto:!0,id:r,notifyUploadDone:t}))})}function AC({}){function t(e){console.log(`notifyUploadDone ${JSON.stringify(e)}`)}return p.jsx("div",{children:p.jsx(IC,{notifyUploadDone:t})})}function SC(){E.useState(IE.HOME.path),E.useState({});const[t,e]=E.useState(!0);return E.useEffect(()=>{const n=zv(!0);e(n)},[]),p.jsx(yE,{basename:"/kooop",children:p.jsxs(dE,{children:[p.jsxs(lt,{path:"/",element:t?p.jsx(mC,{}):p.jsx(Yh,{}),children:[p.jsx(lt,{index:!0,element:p.jsx(sC,{})}),p.jsx(lt,{path:Pe.VIEW_KOOP.path,element:p.jsx(lC,{})}),p.jsx(lt,{path:Pe.LEGAL.path,element:p.jsx(gC,{})}),p.jsx(lt,{path:Pe.SUBCRIPTION.path,element:p.jsx(vC,{})}),p.jsx(lt,{path:"*",element:p.jsx(oC,{})}),p.jsx(lt,{path:Pe.TEST_REC.path,element:p.jsx(AC,{})})]}),p.jsx(lt,{path:Pe.MY_ACCOUNT.path,element:p.jsx(hC,{})}),p.jsx(lt,{path:"/intro",element:p.jsx(_C,{})}),p.jsx(lt,{path:Pe.LOGIN.path,element:p.jsx(Yh,{})})]})})}Cl.createRoot(document.getElementById("root")).render(p.jsx(lp.StrictMode,{children:p.jsx(SC,{})}));
