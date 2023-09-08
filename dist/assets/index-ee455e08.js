function sv(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function xh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Nh={exports:{}},Ho={},Oh={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var es=Symbol.for("react.element"),ov=Symbol.for("react.portal"),av=Symbol.for("react.fragment"),lv=Symbol.for("react.strict_mode"),uv=Symbol.for("react.profiler"),cv=Symbol.for("react.provider"),dv=Symbol.for("react.context"),fv=Symbol.for("react.forward_ref"),hv=Symbol.for("react.suspense"),pv=Symbol.for("react.memo"),mv=Symbol.for("react.lazy"),td=Symbol.iterator;function gv(t){return t===null||typeof t!="object"?null:(t=td&&t[td]||t["@@iterator"],typeof t=="function"?t:null)}var bh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dh=Object.assign,Lh={};function Dr(t,e,n){this.props=t,this.context=e,this.refs=Lh,this.updater=n||bh}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Dr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vh(){}Vh.prototype=Dr.prototype;function Iu(t,e,n){this.props=t,this.context=e,this.refs=Lh,this.updater=n||bh}var Eu=Iu.prototype=new Vh;Eu.constructor=Iu;Dh(Eu,Dr.prototype);Eu.isPureReactComponent=!0;var nd=Array.isArray,Mh=Object.prototype.hasOwnProperty,Su={current:null},jh={key:!0,ref:!0,__self:!0,__source:!0};function Uh(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Mh.call(e,r)&&!jh.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:es,type:t,key:s,ref:o,props:i,_owner:Su.current}}function yv(t,e){return{$$typeof:es,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Au(t){return typeof t=="object"&&t!==null&&t.$$typeof===es}function vv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rd=/\/+/g;function Ea(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vv(""+t.key):e.toString(36)}function Ls(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case es:case ov:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ea(o,0):r,nd(i)?(n="",t!=null&&(n=t.replace(rd,"$&/")+"/"),Ls(i,e,n,"",function(u){return u})):i!=null&&(Au(i)&&(i=yv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(rd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",nd(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ea(s,a);o+=Ls(s,e,n,l,i)}else if(l=gv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ea(s,a++),o+=Ls(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ds(t,e,n){if(t==null)return t;var r=[],i=0;return Ls(t,r,"","",function(s){return e.call(n,s,i++)}),r}function wv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pe={current:null},Vs={transition:null},_v={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:Vs,ReactCurrentOwner:Su};V.Children={map:ds,forEach:function(t,e,n){ds(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ds(t,function(){e++}),e},toArray:function(t){return ds(t,function(e){return e})||[]},only:function(t){if(!Au(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};V.Component=Dr;V.Fragment=av;V.Profiler=uv;V.PureComponent=Iu;V.StrictMode=lv;V.Suspense=hv;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_v;V.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Dh({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Su.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Mh.call(e,l)&&!jh.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:es,type:t.type,key:i,ref:s,props:r,_owner:o}};V.createContext=function(t){return t={$$typeof:dv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cv,_context:t},t.Consumer=t};V.createElement=Uh;V.createFactory=function(t){var e=Uh.bind(null,t);return e.type=t,e};V.createRef=function(){return{current:null}};V.forwardRef=function(t){return{$$typeof:fv,render:t}};V.isValidElement=Au;V.lazy=function(t){return{$$typeof:mv,_payload:{_status:-1,_result:t},_init:wv}};V.memo=function(t,e){return{$$typeof:pv,type:t,compare:e===void 0?null:e}};V.startTransition=function(t){var e=Vs.transition;Vs.transition={};try{t()}finally{Vs.transition=e}};V.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};V.useCallback=function(t,e){return Pe.current.useCallback(t,e)};V.useContext=function(t){return Pe.current.useContext(t)};V.useDebugValue=function(){};V.useDeferredValue=function(t){return Pe.current.useDeferredValue(t)};V.useEffect=function(t,e){return Pe.current.useEffect(t,e)};V.useId=function(){return Pe.current.useId()};V.useImperativeHandle=function(t,e,n){return Pe.current.useImperativeHandle(t,e,n)};V.useInsertionEffect=function(t,e){return Pe.current.useInsertionEffect(t,e)};V.useLayoutEffect=function(t,e){return Pe.current.useLayoutEffect(t,e)};V.useMemo=function(t,e){return Pe.current.useMemo(t,e)};V.useReducer=function(t,e,n){return Pe.current.useReducer(t,e,n)};V.useRef=function(t){return Pe.current.useRef(t)};V.useState=function(t){return Pe.current.useState(t)};V.useSyncExternalStore=function(t,e,n){return Pe.current.useSyncExternalStore(t,e,n)};V.useTransition=function(){return Pe.current.useTransition()};V.version="18.2.0";Oh.exports=V;var w=Oh.exports;const Fh=xh(w),Iv=sv({__proto__:null,default:Fh},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev=w,Sv=Symbol.for("react.element"),Av=Symbol.for("react.fragment"),Tv=Object.prototype.hasOwnProperty,kv=Ev.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pv={key:!0,ref:!0,__self:!0,__source:!0};function Bh(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Tv.call(e,r)&&!Pv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Sv,type:t,key:s,ref:o,props:i,_owner:kv.current}}Ho.Fragment=Av;Ho.jsx=Bh;Ho.jsxs=Bh;Nh.exports=Ho;var h=Nh.exports,dl={},zh={exports:{}},Ke={},Hh={exports:{}},Wh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,D){var L=C.length;C.push(D);e:for(;0<L;){var z=L-1>>>1,K=C[z];if(0<i(K,D))C[z]=D,C[L]=K,L=z;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var D=C[0],L=C.pop();if(L!==D){C[0]=L;e:for(var z=0,K=C.length,mt=K>>>1;z<mt;){var Re=2*(z+1)-1,kn=C[Re],Me=Re+1,Tt=C[Me];if(0>i(kn,L))Me<K&&0>i(Tt,kn)?(C[z]=Tt,C[Me]=L,z=Me):(C[z]=kn,C[Re]=L,z=Re);else if(Me<K&&0>i(Tt,L))C[z]=Tt,C[Me]=L,z=Me;else break e}}return D}function i(C,D){var L=C.sortIndex-D.sortIndex;return L!==0?L:C.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,m=3,y=!1,_=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=C)r(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function I(C){if(v=!1,g(C),!_)if(n(l)!==null)_=!0,zt(S);else{var D=n(u);D!==null&&Wr(I,D.startTime-C)}}function S(C,D){_=!1,v&&(v=!1,p(P),P=-1),y=!0;var L=m;try{for(g(D),f=n(l);f!==null&&(!(f.expirationTime>D)||C&&!Y());){var z=f.callback;if(typeof z=="function"){f.callback=null,m=f.priorityLevel;var K=z(f.expirationTime<=D);D=t.unstable_now(),typeof K=="function"?f.callback=K:f===n(l)&&r(l),g(D)}else r(l);f=n(l)}if(f!==null)var mt=!0;else{var Re=n(u);Re!==null&&Wr(I,Re.startTime-D),mt=!1}return mt}finally{f=null,m=L,y=!1}}var T=!1,k=null,P=-1,U=5,A=-1;function Y(){return!(t.unstable_now()-A<U)}function nt(){if(k!==null){var C=t.unstable_now();A=C;var D=!0;try{D=k(!0,C)}finally{D?rt():(T=!1,k=null)}}else T=!1}var rt;if(typeof d=="function")rt=function(){d(nt)};else if(typeof MessageChannel<"u"){var Hr=new MessageChannel,_a=Hr.port2;Hr.port1.onmessage=nt,rt=function(){_a.postMessage(null)}}else rt=function(){x(nt,0)};function zt(C){k=C,T||(T=!0,rt())}function Wr(C,D){P=x(function(){C(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){_||y||(_=!0,zt(S))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(m){case 1:case 2:case 3:var D=3;break;default:D=m}var L=m;m=D;try{return C()}finally{m=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,D){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var L=m;m=C;try{return D()}finally{m=L}},t.unstable_scheduleCallback=function(C,D,L){var z=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?z+L:z):L=z,C){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=L+K,C={id:c++,callback:D,priorityLevel:C,startTime:L,expirationTime:K,sortIndex:-1},L>z?(C.sortIndex=L,e(u,C),n(l)===null&&C===n(u)&&(v?(p(P),P=-1):v=!0,Wr(I,L-z))):(C.sortIndex=K,e(l,C),_||y||(_=!0,zt(S))),C},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(C){var D=m;return function(){var L=m;m=D;try{return C.apply(this,arguments)}finally{m=L}}}})(Wh);Hh.exports=Wh;var Cv=Hh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h=w,qe=Cv;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qh=new Set,ki={};function Gn(t,e){Sr(t,e),Sr(t+"Capture",e)}function Sr(t,e){for(ki[t]=e,t=0;t<e.length;t++)qh.add(e[t])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fl=Object.prototype.hasOwnProperty,Rv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,id={},sd={};function xv(t){return fl.call(sd,t)?!0:fl.call(id,t)?!1:Rv.test(t)?sd[t]=!0:(id[t]=!0,!1)}function Nv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ov(t,e,n,r){if(e===null||typeof e>"u"||Nv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ce(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ge[t]=new Ce(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ge[e]=new Ce(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ge[t]=new Ce(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ge[t]=new Ce(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ge[t]=new Ce(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ge[t]=new Ce(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ge[t]=new Ce(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ge[t]=new Ce(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ge[t]=new Ce(t,5,!1,t.toLowerCase(),null,!1,!1)});var Tu=/[\-:]([a-z])/g;function ku(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Tu,ku);ge[e]=new Ce(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Tu,ku);ge[e]=new Ce(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Tu,ku);ge[e]=new Ce(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ge[t]=new Ce(t,1,!1,t.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ge[t]=new Ce(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pu(t,e,n,r){var i=ge.hasOwnProperty(e)?ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ov(e,n,i,r)&&(n=null),r||i===null?xv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ft=$h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fs=Symbol.for("react.element"),nr=Symbol.for("react.portal"),rr=Symbol.for("react.fragment"),Cu=Symbol.for("react.strict_mode"),hl=Symbol.for("react.profiler"),Kh=Symbol.for("react.provider"),Gh=Symbol.for("react.context"),Ru=Symbol.for("react.forward_ref"),pl=Symbol.for("react.suspense"),ml=Symbol.for("react.suspense_list"),xu=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),Qh=Symbol.for("react.offscreen"),od=Symbol.iterator;function $r(t){return t===null||typeof t!="object"?null:(t=od&&t[od]||t["@@iterator"],typeof t=="function"?t:null)}var J=Object.assign,Sa;function ni(t){if(Sa===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sa=e&&e[1]||""}return`
`+Sa+t}var Aa=!1;function Ta(t,e){if(!t||Aa)return"";Aa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Aa=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ni(t):""}function bv(t){switch(t.tag){case 5:return ni(t.type);case 16:return ni("Lazy");case 13:return ni("Suspense");case 19:return ni("SuspenseList");case 0:case 2:case 15:return t=Ta(t.type,!1),t;case 11:return t=Ta(t.type.render,!1),t;case 1:return t=Ta(t.type,!0),t;default:return""}}function gl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rr:return"Fragment";case nr:return"Portal";case hl:return"Profiler";case Cu:return"StrictMode";case pl:return"Suspense";case ml:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gh:return(t.displayName||"Context")+".Consumer";case Kh:return(t._context.displayName||"Context")+".Provider";case Ru:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xu:return e=t.displayName||null,e!==null?e:gl(t.type)||"Memo";case $t:e=t._payload,t=t._init;try{return gl(t(e))}catch{}}return null}function Dv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gl(e);case 8:return e===Cu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jh(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Lv(t){var e=Jh(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function hs(t){t._valueTracker||(t._valueTracker=Lv(t))}function Yh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Jh(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ys(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yl(t,e){var n=e.checked;return J({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ad(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xh(t,e){e=e.checked,e!=null&&Pu(t,"checked",e,!1)}function vl(t,e){Xh(t,e);var n=vn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wl(t,e.type,n):e.hasOwnProperty("defaultValue")&&wl(t,e.type,vn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ld(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wl(t,e,n){(e!=="number"||Ys(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ri=Array.isArray;function mr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _l(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return J({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ud(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(ri(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vn(n)}}function Zh(t,e){var n=vn(e.value),r=vn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function cd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ep(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Il(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ep(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ps,tp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ps=ps||document.createElement("div"),ps.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ps.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Pi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vv=["Webkit","ms","Moz","O"];Object.keys(ui).forEach(function(t){Vv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ui[e]=ui[t]})});function np(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ui.hasOwnProperty(t)&&ui[t]?(""+e).trim():e+"px"}function rp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=np(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Mv=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function El(t,e){if(e){if(Mv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Sl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Al=null;function Nu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tl=null,gr=null,yr=null;function dd(t){if(t=rs(t)){if(typeof Tl!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Go(e),Tl(t.stateNode,t.type,e))}}function ip(t){gr?yr?yr.push(t):yr=[t]:gr=t}function sp(){if(gr){var t=gr,e=yr;if(yr=gr=null,dd(t),e)for(t=0;t<e.length;t++)dd(e[t])}}function op(t,e){return t(e)}function ap(){}var ka=!1;function lp(t,e,n){if(ka)return t(e,n);ka=!0;try{return op(t,e,n)}finally{ka=!1,(gr!==null||yr!==null)&&(ap(),sp())}}function Ci(t,e){var n=t.stateNode;if(n===null)return null;var r=Go(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var kl=!1;if(bt)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){kl=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{kl=!1}function jv(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ci=!1,Xs=null,Zs=!1,Pl=null,Uv={onError:function(t){ci=!0,Xs=t}};function Fv(t,e,n,r,i,s,o,a,l){ci=!1,Xs=null,jv.apply(Uv,arguments)}function Bv(t,e,n,r,i,s,o,a,l){if(Fv.apply(this,arguments),ci){if(ci){var u=Xs;ci=!1,Xs=null}else throw Error(E(198));Zs||(Zs=!0,Pl=u)}}function Qn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function up(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fd(t){if(Qn(t)!==t)throw Error(E(188))}function zv(t){var e=t.alternate;if(!e){if(e=Qn(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fd(i),t;if(s===r)return fd(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function cp(t){return t=zv(t),t!==null?dp(t):null}function dp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dp(t);if(e!==null)return e;t=t.sibling}return null}var fp=qe.unstable_scheduleCallback,hd=qe.unstable_cancelCallback,Hv=qe.unstable_shouldYield,Wv=qe.unstable_requestPaint,ee=qe.unstable_now,$v=qe.unstable_getCurrentPriorityLevel,Ou=qe.unstable_ImmediatePriority,hp=qe.unstable_UserBlockingPriority,eo=qe.unstable_NormalPriority,qv=qe.unstable_LowPriority,pp=qe.unstable_IdlePriority,Wo=null,Et=null;function Kv(t){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Wo,t,void 0,(t.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Jv,Gv=Math.log,Qv=Math.LN2;function Jv(t){return t>>>=0,t===0?32:31-(Gv(t)/Qv|0)|0}var ms=64,gs=4194304;function ii(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function to(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ii(a):(s&=o,s!==0&&(r=ii(s)))}else o=n&~i,o!==0?r=ii(o):s!==0&&(r=ii(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ut(e),i=1<<n,r|=t[n],e&=~i;return r}function Yv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ut(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Yv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Cl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mp(){var t=ms;return ms<<=1,!(ms&4194240)&&(ms=64),t}function Pa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ts(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ut(e),t[e]=n}function Zv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var B=0;function gp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yp,Du,vp,wp,_p,Rl=!1,ys=[],sn=null,on=null,an=null,Ri=new Map,xi=new Map,Gt=[],e0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pd(t,e){switch(t){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":Ri.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(e.pointerId)}}function Kr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=rs(e),e!==null&&Du(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function t0(t,e,n,r,i){switch(e){case"focusin":return sn=Kr(sn,t,e,n,r,i),!0;case"dragenter":return on=Kr(on,t,e,n,r,i),!0;case"mouseover":return an=Kr(an,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ri.set(s,Kr(Ri.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xi.set(s,Kr(xi.get(s)||null,t,e,n,r,i)),!0}return!1}function Ip(t){var e=xn(t.target);if(e!==null){var n=Qn(e);if(n!==null){if(e=n.tag,e===13){if(e=up(n),e!==null){t.blockedOn=e,_p(t.priority,function(){vp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ms(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Al=r,n.target.dispatchEvent(r),Al=null}else return e=rs(n),e!==null&&Du(e),t.blockedOn=n,!1;e.shift()}return!0}function md(t,e,n){Ms(t)&&n.delete(e)}function n0(){Rl=!1,sn!==null&&Ms(sn)&&(sn=null),on!==null&&Ms(on)&&(on=null),an!==null&&Ms(an)&&(an=null),Ri.forEach(md),xi.forEach(md)}function Gr(t,e){t.blockedOn===e&&(t.blockedOn=null,Rl||(Rl=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,n0)))}function Ni(t){function e(i){return Gr(i,t)}if(0<ys.length){Gr(ys[0],t);for(var n=1;n<ys.length;n++){var r=ys[n];r.blockedOn===t&&(r.blockedOn=null)}}for(sn!==null&&Gr(sn,t),on!==null&&Gr(on,t),an!==null&&Gr(an,t),Ri.forEach(e),xi.forEach(e),n=0;n<Gt.length;n++)r=Gt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gt.length&&(n=Gt[0],n.blockedOn===null);)Ip(n),n.blockedOn===null&&Gt.shift()}var vr=Ft.ReactCurrentBatchConfig,no=!0;function r0(t,e,n,r){var i=B,s=vr.transition;vr.transition=null;try{B=1,Lu(t,e,n,r)}finally{B=i,vr.transition=s}}function i0(t,e,n,r){var i=B,s=vr.transition;vr.transition=null;try{B=4,Lu(t,e,n,r)}finally{B=i,vr.transition=s}}function Lu(t,e,n,r){if(no){var i=xl(t,e,n,r);if(i===null)Ma(t,e,r,ro,n),pd(t,r);else if(t0(i,t,e,n,r))r.stopPropagation();else if(pd(t,r),e&4&&-1<e0.indexOf(t)){for(;i!==null;){var s=rs(i);if(s!==null&&yp(s),s=xl(t,e,n,r),s===null&&Ma(t,e,r,ro,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ma(t,e,r,null,n)}}var ro=null;function xl(t,e,n,r){if(ro=null,t=Nu(r),t=xn(t),t!==null)if(e=Qn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=up(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ro=t,null}function Ep(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($v()){case Ou:return 1;case hp:return 4;case eo:case qv:return 16;case pp:return 536870912;default:return 16}default:return 16}}var en=null,Vu=null,js=null;function Sp(){if(js)return js;var t,e=Vu,n=e.length,r,i="value"in en?en.value:en.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return js=i.slice(t,1<r?1-r:void 0)}function Us(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vs(){return!0}function gd(){return!1}function Ge(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vs:gd,this.isPropagationStopped=gd,this}return J(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vs)},persist:function(){},isPersistent:vs}),e}var Lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mu=Ge(Lr),ns=J({},Lr,{view:0,detail:0}),s0=Ge(ns),Ca,Ra,Qr,$o=J({},ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qr&&(Qr&&t.type==="mousemove"?(Ca=t.screenX-Qr.screenX,Ra=t.screenY-Qr.screenY):Ra=Ca=0,Qr=t),Ca)},movementY:function(t){return"movementY"in t?t.movementY:Ra}}),yd=Ge($o),o0=J({},$o,{dataTransfer:0}),a0=Ge(o0),l0=J({},ns,{relatedTarget:0}),xa=Ge(l0),u0=J({},Lr,{animationName:0,elapsedTime:0,pseudoElement:0}),c0=Ge(u0),d0=J({},Lr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),f0=Ge(d0),h0=J({},Lr,{data:0}),vd=Ge(h0),p0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=g0[t])?!!e[t]:!1}function ju(){return y0}var v0=J({},ns,{key:function(t){if(t.key){var e=p0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Us(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?m0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(t){return t.type==="keypress"?Us(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Us(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),w0=Ge(v0),_0=J({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=Ge(_0),I0=J({},ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),E0=Ge(I0),S0=J({},Lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),A0=Ge(S0),T0=J({},$o,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),k0=Ge(T0),P0=[9,13,27,32],Uu=bt&&"CompositionEvent"in window,di=null;bt&&"documentMode"in document&&(di=document.documentMode);var C0=bt&&"TextEvent"in window&&!di,Ap=bt&&(!Uu||di&&8<di&&11>=di),_d=String.fromCharCode(32),Id=!1;function Tp(t,e){switch(t){case"keyup":return P0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ir=!1;function R0(t,e){switch(t){case"compositionend":return kp(e);case"keypress":return e.which!==32?null:(Id=!0,_d);case"textInput":return t=e.data,t===_d&&Id?null:t;default:return null}}function x0(t,e){if(ir)return t==="compositionend"||!Uu&&Tp(t,e)?(t=Sp(),js=Vu=en=null,ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ap&&e.locale!=="ko"?null:e.data;default:return null}}var N0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!N0[t.type]:e==="textarea"}function Pp(t,e,n,r){ip(r),e=io(e,"onChange"),0<e.length&&(n=new Mu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fi=null,Oi=null;function O0(t){jp(t,0)}function qo(t){var e=ar(t);if(Yh(e))return t}function b0(t,e){if(t==="change")return e}var Cp=!1;if(bt){var Na;if(bt){var Oa="oninput"in document;if(!Oa){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),Oa=typeof Sd.oninput=="function"}Na=Oa}else Na=!1;Cp=Na&&(!document.documentMode||9<document.documentMode)}function Ad(){fi&&(fi.detachEvent("onpropertychange",Rp),Oi=fi=null)}function Rp(t){if(t.propertyName==="value"&&qo(Oi)){var e=[];Pp(e,Oi,t,Nu(t)),lp(O0,e)}}function D0(t,e,n){t==="focusin"?(Ad(),fi=e,Oi=n,fi.attachEvent("onpropertychange",Rp)):t==="focusout"&&Ad()}function L0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qo(Oi)}function V0(t,e){if(t==="click")return qo(e)}function M0(t,e){if(t==="input"||t==="change")return qo(e)}function j0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dt=typeof Object.is=="function"?Object.is:j0;function bi(t,e){if(dt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fl.call(e,i)||!dt(t[i],e[i]))return!1}return!0}function Td(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kd(t,e){var n=Td(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Td(n)}}function xp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Np(){for(var t=window,e=Ys();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ys(t.document)}return e}function Fu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function U0(t){var e=Np(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xp(n.ownerDocument.documentElement,n)){if(r!==null&&Fu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=kd(n,s);var o=kd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var F0=bt&&"documentMode"in document&&11>=document.documentMode,sr=null,Nl=null,hi=null,Ol=!1;function Pd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ol||sr==null||sr!==Ys(r)||(r=sr,"selectionStart"in r&&Fu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hi&&bi(hi,r)||(hi=r,r=io(Nl,"onSelect"),0<r.length&&(e=new Mu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=sr)))}function ws(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var or={animationend:ws("Animation","AnimationEnd"),animationiteration:ws("Animation","AnimationIteration"),animationstart:ws("Animation","AnimationStart"),transitionend:ws("Transition","TransitionEnd")},ba={},Op={};bt&&(Op=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function Ko(t){if(ba[t])return ba[t];if(!or[t])return t;var e=or[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Op)return ba[t]=e[n];return t}var bp=Ko("animationend"),Dp=Ko("animationiteration"),Lp=Ko("animationstart"),Vp=Ko("transitionend"),Mp=new Map,Cd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(t,e){Mp.set(t,e),Gn(e,[t])}for(var Da=0;Da<Cd.length;Da++){var La=Cd[Da],B0=La.toLowerCase(),z0=La[0].toUpperCase()+La.slice(1);In(B0,"on"+z0)}In(bp,"onAnimationEnd");In(Dp,"onAnimationIteration");In(Lp,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(Vp,"onTransitionEnd");Sr("onMouseEnter",["mouseout","mouseover"]);Sr("onMouseLeave",["mouseout","mouseover"]);Sr("onPointerEnter",["pointerout","pointerover"]);Sr("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H0=new Set("cancel close invalid load scroll toggle".split(" ").concat(si));function Rd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Bv(r,e,void 0,t),t.currentTarget=null}function jp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Rd(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Rd(i,a,u),s=l}}}if(Zs)throw t=Pl,Zs=!1,Pl=null,t}function W(t,e){var n=e[Ml];n===void 0&&(n=e[Ml]=new Set);var r=t+"__bubble";n.has(r)||(Up(e,t,2,!1),n.add(r))}function Va(t,e,n){var r=0;e&&(r|=4),Up(n,t,r,e)}var _s="_reactListening"+Math.random().toString(36).slice(2);function Di(t){if(!t[_s]){t[_s]=!0,qh.forEach(function(n){n!=="selectionchange"&&(H0.has(n)||Va(n,!1,t),Va(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_s]||(e[_s]=!0,Va("selectionchange",!1,e))}}function Up(t,e,n,r){switch(Ep(e)){case 1:var i=r0;break;case 4:i=i0;break;default:i=Lu}n=i.bind(null,e,n,t),i=void 0,!kl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ma(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=xn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}lp(function(){var u=s,c=Nu(n),f=[];e:{var m=Mp.get(t);if(m!==void 0){var y=Mu,_=t;switch(t){case"keypress":if(Us(n)===0)break e;case"keydown":case"keyup":y=w0;break;case"focusin":_="focus",y=xa;break;case"focusout":_="blur",y=xa;break;case"beforeblur":case"afterblur":y=xa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=a0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=E0;break;case bp:case Dp:case Lp:y=c0;break;case Vp:y=A0;break;case"scroll":y=s0;break;case"wheel":y=k0;break;case"copy":case"cut":case"paste":y=f0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=wd}var v=(e&4)!==0,x=!v&&t==="scroll",p=v?m!==null?m+"Capture":null:m;v=[];for(var d=u,g;d!==null;){g=d;var I=g.stateNode;if(g.tag===5&&I!==null&&(g=I,p!==null&&(I=Ci(d,p),I!=null&&v.push(Li(d,I,g)))),x)break;d=d.return}0<v.length&&(m=new y(m,_,null,n,c),f.push({event:m,listeners:v}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==Al&&(_=n.relatedTarget||n.fromElement)&&(xn(_)||_[Dt]))break e;if((y||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,y?(_=n.relatedTarget||n.toElement,y=u,_=_?xn(_):null,_!==null&&(x=Qn(_),_!==x||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=u),y!==_)){if(v=yd,I="onMouseLeave",p="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(v=wd,I="onPointerLeave",p="onPointerEnter",d="pointer"),x=y==null?m:ar(y),g=_==null?m:ar(_),m=new v(I,d+"leave",y,n,c),m.target=x,m.relatedTarget=g,I=null,xn(c)===u&&(v=new v(p,d+"enter",_,n,c),v.target=g,v.relatedTarget=x,I=v),x=I,y&&_)t:{for(v=y,p=_,d=0,g=v;g;g=Zn(g))d++;for(g=0,I=p;I;I=Zn(I))g++;for(;0<d-g;)v=Zn(v),d--;for(;0<g-d;)p=Zn(p),g--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break t;v=Zn(v),p=Zn(p)}v=null}else v=null;y!==null&&xd(f,m,y,v,!1),_!==null&&x!==null&&xd(f,x,_,v,!0)}}e:{if(m=u?ar(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var S=b0;else if(Ed(m))if(Cp)S=M0;else{S=L0;var T=D0}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=V0);if(S&&(S=S(t,u))){Pp(f,S,n,c);break e}T&&T(t,m,u),t==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&wl(m,"number",m.value)}switch(T=u?ar(u):window,t){case"focusin":(Ed(T)||T.contentEditable==="true")&&(sr=T,Nl=u,hi=null);break;case"focusout":hi=Nl=sr=null;break;case"mousedown":Ol=!0;break;case"contextmenu":case"mouseup":case"dragend":Ol=!1,Pd(f,n,c);break;case"selectionchange":if(F0)break;case"keydown":case"keyup":Pd(f,n,c)}var k;if(Uu)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ir?Tp(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Ap&&n.locale!=="ko"&&(ir||P!=="onCompositionStart"?P==="onCompositionEnd"&&ir&&(k=Sp()):(en=c,Vu="value"in en?en.value:en.textContent,ir=!0)),T=io(u,P),0<T.length&&(P=new vd(P,t,null,n,c),f.push({event:P,listeners:T}),k?P.data=k:(k=kp(n),k!==null&&(P.data=k)))),(k=C0?R0(t,n):x0(t,n))&&(u=io(u,"onBeforeInput"),0<u.length&&(c=new vd("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=k))}jp(f,e)})}function Li(t,e,n){return{instance:t,listener:e,currentTarget:n}}function io(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ci(t,n),s!=null&&r.unshift(Li(t,s,i)),s=Ci(t,e),s!=null&&r.push(Li(t,s,i))),t=t.return}return r}function Zn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xd(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ci(n,s),l!=null&&o.unshift(Li(n,l,a))):i||(l=Ci(n,s),l!=null&&o.push(Li(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var W0=/\r\n?/g,$0=/\u0000|\uFFFD/g;function Nd(t){return(typeof t=="string"?t:""+t).replace(W0,`
`).replace($0,"")}function Is(t,e,n){if(e=Nd(e),Nd(t)!==e&&n)throw Error(E(425))}function so(){}var bl=null,Dl=null;function Ll(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vl=typeof setTimeout=="function"?setTimeout:void 0,q0=typeof clearTimeout=="function"?clearTimeout:void 0,Od=typeof Promise=="function"?Promise:void 0,K0=typeof queueMicrotask=="function"?queueMicrotask:typeof Od<"u"?function(t){return Od.resolve(null).then(t).catch(G0)}:Vl;function G0(t){setTimeout(function(){throw t})}function ja(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ni(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ni(e)}function ln(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),wt="__reactFiber$"+Vr,Vi="__reactProps$"+Vr,Dt="__reactContainer$"+Vr,Ml="__reactEvents$"+Vr,Q0="__reactListeners$"+Vr,J0="__reactHandles$"+Vr;function xn(t){var e=t[wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dt]||n[wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bd(t);t!==null;){if(n=t[wt])return n;t=bd(t)}return e}t=n,n=t.parentNode}return null}function rs(t){return t=t[wt]||t[Dt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ar(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Go(t){return t[Vi]||null}var jl=[],lr=-1;function En(t){return{current:t}}function $(t){0>lr||(t.current=jl[lr],jl[lr]=null,lr--)}function H(t,e){lr++,jl[lr]=t.current,t.current=e}var wn={},Ie=En(wn),be=En(!1),Mn=wn;function Ar(t,e){var n=t.type.contextTypes;if(!n)return wn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function De(t){return t=t.childContextTypes,t!=null}function oo(){$(be),$(Ie)}function Dd(t,e,n){if(Ie.current!==wn)throw Error(E(168));H(Ie,e),H(be,n)}function Fp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,Dv(t)||"Unknown",i));return J({},n,r)}function ao(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wn,Mn=Ie.current,H(Ie,t),H(be,be.current),!0}function Ld(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=Fp(t,e,Mn),r.__reactInternalMemoizedMergedChildContext=t,$(be),$(Ie),H(Ie,t)):$(be),H(be,n)}var Pt=null,Qo=!1,Ua=!1;function Bp(t){Pt===null?Pt=[t]:Pt.push(t)}function Y0(t){Qo=!0,Bp(t)}function Sn(){if(!Ua&&Pt!==null){Ua=!0;var t=0,e=B;try{var n=Pt;for(B=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Pt=null,Qo=!1}catch(i){throw Pt!==null&&(Pt=Pt.slice(t+1)),fp(Ou,Sn),i}finally{B=e,Ua=!1}}return null}var ur=[],cr=0,lo=null,uo=0,Qe=[],Je=0,jn=null,Ct=1,Rt="";function Pn(t,e){ur[cr++]=uo,ur[cr++]=lo,lo=t,uo=e}function zp(t,e,n){Qe[Je++]=Ct,Qe[Je++]=Rt,Qe[Je++]=jn,jn=t;var r=Ct;t=Rt;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var s=32-ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ct=1<<32-ut(e)+i|n<<i|r,Rt=s+t}else Ct=1<<s|n<<i|r,Rt=t}function Bu(t){t.return!==null&&(Pn(t,1),zp(t,1,0))}function zu(t){for(;t===lo;)lo=ur[--cr],ur[cr]=null,uo=ur[--cr],ur[cr]=null;for(;t===jn;)jn=Qe[--Je],Qe[Je]=null,Rt=Qe[--Je],Qe[Je]=null,Ct=Qe[--Je],Qe[Je]=null}var Be=null,Fe=null,q=!1,lt=null;function Hp(t,e){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Be=t,Fe=ln(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Be=t,Fe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jn!==null?{id:Ct,overflow:Rt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Be=t,Fe=null,!0):!1;default:return!1}}function Ul(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fl(t){if(q){var e=Fe;if(e){var n=e;if(!Vd(t,e)){if(Ul(t))throw Error(E(418));e=ln(n.nextSibling);var r=Be;e&&Vd(t,e)?Hp(r,n):(t.flags=t.flags&-4097|2,q=!1,Be=t)}}else{if(Ul(t))throw Error(E(418));t.flags=t.flags&-4097|2,q=!1,Be=t}}}function Md(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Be=t}function Es(t){if(t!==Be)return!1;if(!q)return Md(t),q=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ll(t.type,t.memoizedProps)),e&&(e=Fe)){if(Ul(t))throw Wp(),Error(E(418));for(;e;)Hp(t,e),e=ln(e.nextSibling)}if(Md(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Fe=ln(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Fe=null}}else Fe=Be?ln(t.stateNode.nextSibling):null;return!0}function Wp(){for(var t=Fe;t;)t=ln(t.nextSibling)}function Tr(){Fe=Be=null,q=!1}function Hu(t){lt===null?lt=[t]:lt.push(t)}var X0=Ft.ReactCurrentBatchConfig;function ot(t,e){if(t&&t.defaultProps){e=J({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var co=En(null),fo=null,dr=null,Wu=null;function $u(){Wu=dr=fo=null}function qu(t){var e=co.current;$(co),t._currentValue=e}function Bl(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function wr(t,e){fo=t,Wu=dr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Oe=!0),t.firstContext=null)}function et(t){var e=t._currentValue;if(Wu!==t)if(t={context:t,memoizedValue:e,next:null},dr===null){if(fo===null)throw Error(E(308));dr=t,fo.dependencies={lanes:0,firstContext:t}}else dr=dr.next=t;return e}var Nn=null;function Ku(t){Nn===null?Nn=[t]:Nn.push(t)}function $p(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ku(e)):(n.next=i.next,i.next=n),e.interleaved=n,Lt(t,r)}function Lt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qt=!1;function Gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ot(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function un(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Lt(t,n)}return i=r.interleaved,i===null?(e.next=e,Ku(r)):(e.next=i.next,i.next=e),r.interleaved=e,Lt(t,n)}function Fs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bu(t,n)}}function jd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ho(t,e,n,r){var i=t.updateQueue;qt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var m=a.lane,y=a.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(m=e,y=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){f=_.call(y,f,m);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,m=typeof _=="function"?_.call(y,f,m):_,m==null)break e;f=J({},f,m);break e;case 2:qt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=f):c=c.next=y,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Fn|=o,t.lanes=o,t.memoizedState=f}}function Ud(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Kp=new $h.Component().refs;function zl(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:J({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jo={isMounted:function(t){return(t=t._reactInternals)?Qn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Te(),i=dn(t),s=Ot(r,i);s.payload=e,n!=null&&(s.callback=n),e=un(t,s,i),e!==null&&(ct(e,t,i,r),Fs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Te(),i=dn(t),s=Ot(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=un(t,s,i),e!==null&&(ct(e,t,i,r),Fs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Te(),r=dn(t),i=Ot(n,r);i.tag=2,e!=null&&(i.callback=e),e=un(t,i,r),e!==null&&(ct(e,t,r,n),Fs(e,t,r))}};function Fd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!bi(n,r)||!bi(i,s):!0}function Gp(t,e,n){var r=!1,i=wn,s=e.contextType;return typeof s=="object"&&s!==null?s=et(s):(i=De(e)?Mn:Ie.current,r=e.contextTypes,s=(r=r!=null)?Ar(t,i):wn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Jo.enqueueReplaceState(e,e.state,null)}function Hl(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Kp,Gu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=et(s):(s=De(e)?Mn:Ie.current,i.context=Ar(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zl(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Jo.enqueueReplaceState(i,i.state,null),ho(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Jr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Kp&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Ss(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zd(t){var e=t._init;return e(t._payload)}function Qp(t){function e(p,d){if(t){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function n(p,d){if(!t)return null;for(;d!==null;)e(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=fn(p,d),p.index=0,p.sibling=null,p}function s(p,d,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,d,g,I){return d===null||d.tag!==6?(d=qa(g,p.mode,I),d.return=p,d):(d=i(d,g),d.return=p,d)}function l(p,d,g,I){var S=g.type;return S===rr?c(p,d,g.props.children,I,g.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===$t&&zd(S)===d.type)?(I=i(d,g.props),I.ref=Jr(p,d,g),I.return=p,I):(I=qs(g.type,g.key,g.props,null,p.mode,I),I.ref=Jr(p,d,g),I.return=p,I)}function u(p,d,g,I){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Ka(g,p.mode,I),d.return=p,d):(d=i(d,g.children||[]),d.return=p,d)}function c(p,d,g,I,S){return d===null||d.tag!==7?(d=Ln(g,p.mode,I,S),d.return=p,d):(d=i(d,g),d.return=p,d)}function f(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=qa(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case fs:return g=qs(d.type,d.key,d.props,null,p.mode,g),g.ref=Jr(p,null,d),g.return=p,g;case nr:return d=Ka(d,p.mode,g),d.return=p,d;case $t:var I=d._init;return f(p,I(d._payload),g)}if(ri(d)||$r(d))return d=Ln(d,p.mode,g,null),d.return=p,d;Ss(p,d)}return null}function m(p,d,g,I){var S=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(p,d,""+g,I);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case fs:return g.key===S?l(p,d,g,I):null;case nr:return g.key===S?u(p,d,g,I):null;case $t:return S=g._init,m(p,d,S(g._payload),I)}if(ri(g)||$r(g))return S!==null?null:c(p,d,g,I,null);Ss(p,g)}return null}function y(p,d,g,I,S){if(typeof I=="string"&&I!==""||typeof I=="number")return p=p.get(g)||null,a(d,p,""+I,S);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case fs:return p=p.get(I.key===null?g:I.key)||null,l(d,p,I,S);case nr:return p=p.get(I.key===null?g:I.key)||null,u(d,p,I,S);case $t:var T=I._init;return y(p,d,g,T(I._payload),S)}if(ri(I)||$r(I))return p=p.get(g)||null,c(d,p,I,S,null);Ss(d,I)}return null}function _(p,d,g,I){for(var S=null,T=null,k=d,P=d=0,U=null;k!==null&&P<g.length;P++){k.index>P?(U=k,k=null):U=k.sibling;var A=m(p,k,g[P],I);if(A===null){k===null&&(k=U);break}t&&k&&A.alternate===null&&e(p,k),d=s(A,d,P),T===null?S=A:T.sibling=A,T=A,k=U}if(P===g.length)return n(p,k),q&&Pn(p,P),S;if(k===null){for(;P<g.length;P++)k=f(p,g[P],I),k!==null&&(d=s(k,d,P),T===null?S=k:T.sibling=k,T=k);return q&&Pn(p,P),S}for(k=r(p,k);P<g.length;P++)U=y(k,p,P,g[P],I),U!==null&&(t&&U.alternate!==null&&k.delete(U.key===null?P:U.key),d=s(U,d,P),T===null?S=U:T.sibling=U,T=U);return t&&k.forEach(function(Y){return e(p,Y)}),q&&Pn(p,P),S}function v(p,d,g,I){var S=$r(g);if(typeof S!="function")throw Error(E(150));if(g=S.call(g),g==null)throw Error(E(151));for(var T=S=null,k=d,P=d=0,U=null,A=g.next();k!==null&&!A.done;P++,A=g.next()){k.index>P?(U=k,k=null):U=k.sibling;var Y=m(p,k,A.value,I);if(Y===null){k===null&&(k=U);break}t&&k&&Y.alternate===null&&e(p,k),d=s(Y,d,P),T===null?S=Y:T.sibling=Y,T=Y,k=U}if(A.done)return n(p,k),q&&Pn(p,P),S;if(k===null){for(;!A.done;P++,A=g.next())A=f(p,A.value,I),A!==null&&(d=s(A,d,P),T===null?S=A:T.sibling=A,T=A);return q&&Pn(p,P),S}for(k=r(p,k);!A.done;P++,A=g.next())A=y(k,p,P,A.value,I),A!==null&&(t&&A.alternate!==null&&k.delete(A.key===null?P:A.key),d=s(A,d,P),T===null?S=A:T.sibling=A,T=A);return t&&k.forEach(function(nt){return e(p,nt)}),q&&Pn(p,P),S}function x(p,d,g,I){if(typeof g=="object"&&g!==null&&g.type===rr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case fs:e:{for(var S=g.key,T=d;T!==null;){if(T.key===S){if(S=g.type,S===rr){if(T.tag===7){n(p,T.sibling),d=i(T,g.props.children),d.return=p,p=d;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===$t&&zd(S)===T.type){n(p,T.sibling),d=i(T,g.props),d.ref=Jr(p,T,g),d.return=p,p=d;break e}n(p,T);break}else e(p,T);T=T.sibling}g.type===rr?(d=Ln(g.props.children,p.mode,I,g.key),d.return=p,p=d):(I=qs(g.type,g.key,g.props,null,p.mode,I),I.ref=Jr(p,d,g),I.return=p,p=I)}return o(p);case nr:e:{for(T=g.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(p,d.sibling),d=i(d,g.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else e(p,d);d=d.sibling}d=Ka(g,p.mode,I),d.return=p,p=d}return o(p);case $t:return T=g._init,x(p,d,T(g._payload),I)}if(ri(g))return _(p,d,g,I);if($r(g))return v(p,d,g,I);Ss(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,g),d.return=p,p=d):(n(p,d),d=qa(g,p.mode,I),d.return=p,p=d),o(p)):n(p,d)}return x}var kr=Qp(!0),Jp=Qp(!1),is={},St=En(is),Mi=En(is),ji=En(is);function On(t){if(t===is)throw Error(E(174));return t}function Qu(t,e){switch(H(ji,e),H(Mi,t),H(St,is),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Il(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Il(e,t)}$(St),H(St,e)}function Pr(){$(St),$(Mi),$(ji)}function Yp(t){On(ji.current);var e=On(St.current),n=Il(e,t.type);e!==n&&(H(Mi,t),H(St,n))}function Ju(t){Mi.current===t&&($(St),$(Mi))}var G=En(0);function po(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fa=[];function Yu(){for(var t=0;t<Fa.length;t++)Fa[t]._workInProgressVersionPrimary=null;Fa.length=0}var Bs=Ft.ReactCurrentDispatcher,Ba=Ft.ReactCurrentBatchConfig,Un=0,Q=null,ie=null,ue=null,mo=!1,pi=!1,Ui=0,Z0=0;function ye(){throw Error(E(321))}function Xu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dt(t[n],e[n]))return!1;return!0}function Zu(t,e,n,r,i,s){if(Un=s,Q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bs.current=t===null||t.memoizedState===null?rw:iw,t=n(r,i),pi){s=0;do{if(pi=!1,Ui=0,25<=s)throw Error(E(301));s+=1,ue=ie=null,e.updateQueue=null,Bs.current=sw,t=n(r,i)}while(pi)}if(Bs.current=go,e=ie!==null&&ie.next!==null,Un=0,ue=ie=Q=null,mo=!1,e)throw Error(E(300));return t}function ec(){var t=Ui!==0;return Ui=0,t}function yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Q.memoizedState=ue=t:ue=ue.next=t,ue}function tt(){if(ie===null){var t=Q.alternate;t=t!==null?t.memoizedState:null}else t=ie.next;var e=ue===null?Q.memoizedState:ue.next;if(e!==null)ue=e,ie=t;else{if(t===null)throw Error(E(310));ie=t,t={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ue===null?Q.memoizedState=ue=t:ue=ue.next=t}return ue}function Fi(t,e){return typeof e=="function"?e(t):e}function za(t){var e=tt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Un&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Q.lanes|=c,Fn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,dt(r,e.memoizedState)||(Oe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Q.lanes|=s,Fn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ha(t){var e=tt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);dt(s,e.memoizedState)||(Oe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Xp(){}function Zp(t,e){var n=Q,r=tt(),i=e(),s=!dt(r.memoizedState,i);if(s&&(r.memoizedState=i,Oe=!0),r=r.queue,tc(nm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Bi(9,tm.bind(null,n,r,i,e),void 0,null),ce===null)throw Error(E(349));Un&30||em(n,e,i)}return i}function em(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Q.updateQueue,e===null?(e={lastEffect:null,stores:null},Q.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tm(t,e,n,r){e.value=n,e.getSnapshot=r,rm(e)&&im(t)}function nm(t,e,n){return n(function(){rm(e)&&im(t)})}function rm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dt(t,n)}catch{return!0}}function im(t){var e=Lt(t,1);e!==null&&ct(e,t,1,-1)}function Hd(t){var e=yt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},e.queue=t,t=t.dispatch=nw.bind(null,Q,t),[e.memoizedState,t]}function Bi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Q.updateQueue,e===null?(e={lastEffect:null,stores:null},Q.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function sm(){return tt().memoizedState}function zs(t,e,n,r){var i=yt();Q.flags|=t,i.memoizedState=Bi(1|e,n,void 0,r===void 0?null:r)}function Yo(t,e,n,r){var i=tt();r=r===void 0?null:r;var s=void 0;if(ie!==null){var o=ie.memoizedState;if(s=o.destroy,r!==null&&Xu(r,o.deps)){i.memoizedState=Bi(e,n,s,r);return}}Q.flags|=t,i.memoizedState=Bi(1|e,n,s,r)}function Wd(t,e){return zs(8390656,8,t,e)}function tc(t,e){return Yo(2048,8,t,e)}function om(t,e){return Yo(4,2,t,e)}function am(t,e){return Yo(4,4,t,e)}function lm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function um(t,e,n){return n=n!=null?n.concat([t]):null,Yo(4,4,lm.bind(null,e,t),n)}function nc(){}function cm(t,e){var n=tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function dm(t,e){var n=tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function fm(t,e,n){return Un&21?(dt(n,e)||(n=mp(),Q.lanes|=n,Fn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Oe=!0),t.memoizedState=n)}function ew(t,e){var n=B;B=n!==0&&4>n?n:4,t(!0);var r=Ba.transition;Ba.transition={};try{t(!1),e()}finally{B=n,Ba.transition=r}}function hm(){return tt().memoizedState}function tw(t,e,n){var r=dn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pm(t))mm(e,n);else if(n=$p(t,e,n,r),n!==null){var i=Te();ct(n,t,r,i),gm(n,e,r)}}function nw(t,e,n){var r=dn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pm(t))mm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,dt(a,o)){var l=e.interleaved;l===null?(i.next=i,Ku(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=$p(t,e,i,r),n!==null&&(i=Te(),ct(n,t,r,i),gm(n,e,r))}}function pm(t){var e=t.alternate;return t===Q||e!==null&&e===Q}function mm(t,e){pi=mo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bu(t,n)}}var go={readContext:et,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},rw={readContext:et,useCallback:function(t,e){return yt().memoizedState=[t,e===void 0?null:e],t},useContext:et,useEffect:Wd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zs(4194308,4,lm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zs(4194308,4,t,e)},useInsertionEffect:function(t,e){return zs(4,2,t,e)},useMemo:function(t,e){var n=yt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=yt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=tw.bind(null,Q,t),[r.memoizedState,t]},useRef:function(t){var e=yt();return t={current:t},e.memoizedState=t},useState:Hd,useDebugValue:nc,useDeferredValue:function(t){return yt().memoizedState=t},useTransition:function(){var t=Hd(!1),e=t[0];return t=ew.bind(null,t[1]),yt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Q,i=yt();if(q){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),ce===null)throw Error(E(349));Un&30||em(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Wd(nm.bind(null,r,s,t),[t]),r.flags|=2048,Bi(9,tm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=yt(),e=ce.identifierPrefix;if(q){var n=Rt,r=Ct;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ui++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Z0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},iw={readContext:et,useCallback:cm,useContext:et,useEffect:tc,useImperativeHandle:um,useInsertionEffect:om,useLayoutEffect:am,useMemo:dm,useReducer:za,useRef:sm,useState:function(){return za(Fi)},useDebugValue:nc,useDeferredValue:function(t){var e=tt();return fm(e,ie.memoizedState,t)},useTransition:function(){var t=za(Fi)[0],e=tt().memoizedState;return[t,e]},useMutableSource:Xp,useSyncExternalStore:Zp,useId:hm,unstable_isNewReconciler:!1},sw={readContext:et,useCallback:cm,useContext:et,useEffect:tc,useImperativeHandle:um,useInsertionEffect:om,useLayoutEffect:am,useMemo:dm,useReducer:Ha,useRef:sm,useState:function(){return Ha(Fi)},useDebugValue:nc,useDeferredValue:function(t){var e=tt();return ie===null?e.memoizedState=t:fm(e,ie.memoizedState,t)},useTransition:function(){var t=Ha(Fi)[0],e=tt().memoizedState;return[t,e]},useMutableSource:Xp,useSyncExternalStore:Zp,useId:hm,unstable_isNewReconciler:!1};function Cr(t,e){try{var n="",r=e;do n+=bv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Wa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wl(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ow=typeof WeakMap=="function"?WeakMap:Map;function ym(t,e,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){vo||(vo=!0,eu=r),Wl(t,e)},n}function vm(t,e,n){n=Ot(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Wl(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wl(t,e),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function $d(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ow;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=_w.bind(null,t,e,n),e.then(t,t))}function qd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ot(-1,1),e.tag=2,un(n,e,1))),n.lanes|=1),t)}var aw=Ft.ReactCurrentOwner,Oe=!1;function Se(t,e,n,r){e.child=t===null?Jp(e,null,n,r):kr(e,t.child,n,r)}function Gd(t,e,n,r,i){n=n.render;var s=e.ref;return wr(e,i),r=Zu(t,e,n,r,s,i),n=ec(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vt(t,e,i)):(q&&n&&Bu(e),e.flags|=1,Se(t,e,r,i),e.child)}function Qd(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!cc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,wm(t,e,s,r,i)):(t=qs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:bi,n(o,r)&&t.ref===e.ref)return Vt(t,e,i)}return e.flags|=1,t=fn(s,r),t.ref=e.ref,t.return=e,e.child=t}function wm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(bi(s,r)&&t.ref===e.ref)if(Oe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Oe=!0);else return e.lanes=t.lanes,Vt(t,e,i)}return $l(t,e,n,r,i)}function _m(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(hr,je),je|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,H(hr,je),je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,H(hr,je),je|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,H(hr,je),je|=r;return Se(t,e,i,n),e.child}function Im(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $l(t,e,n,r,i){var s=De(n)?Mn:Ie.current;return s=Ar(e,s),wr(e,i),n=Zu(t,e,n,r,s,i),r=ec(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vt(t,e,i)):(q&&r&&Bu(e),e.flags|=1,Se(t,e,n,i),e.child)}function Jd(t,e,n,r,i){if(De(n)){var s=!0;ao(e)}else s=!1;if(wr(e,i),e.stateNode===null)Hs(t,e),Gp(e,n,r),Hl(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=et(u):(u=De(n)?Mn:Ie.current,u=Ar(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Bd(e,o,r,u),qt=!1;var m=e.memoizedState;o.state=m,ho(e,r,o,i),l=e.memoizedState,a!==r||m!==l||be.current||qt?(typeof c=="function"&&(zl(e,n,c,r),l=e.memoizedState),(a=qt||Fd(e,n,a,r,m,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,qp(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ot(e.type,a),o.props=u,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=et(l):(l=De(n)?Mn:Ie.current,l=Ar(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&Bd(e,o,r,l),qt=!1,m=e.memoizedState,o.state=m,ho(e,r,o,i);var _=e.memoizedState;a!==f||m!==_||be.current||qt?(typeof y=="function"&&(zl(e,n,y,r),_=e.memoizedState),(u=qt||Fd(e,n,u,r,m,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return ql(t,e,n,r,s,i)}function ql(t,e,n,r,i,s){Im(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ld(e,n,!1),Vt(t,e,s);r=e.stateNode,aw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=kr(e,t.child,null,s),e.child=kr(e,null,a,s)):Se(t,e,a,s),e.memoizedState=r.state,i&&Ld(e,n,!0),e.child}function Em(t){var e=t.stateNode;e.pendingContext?Dd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dd(t,e.context,!1),Qu(t,e.containerInfo)}function Yd(t,e,n,r,i){return Tr(),Hu(i),e.flags|=256,Se(t,e,n,r),e.child}var Kl={dehydrated:null,treeContext:null,retryLane:0};function Gl(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sm(t,e,n){var r=e.pendingProps,i=G.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),H(G,i&1),t===null)return Fl(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ea(o,r,0,null),t=Ln(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gl(n),e.memoizedState=Kl,t):rc(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return lw(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=fn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=fn(a,s):(s=Ln(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Gl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Kl,r}return s=t.child,t=s.sibling,r=fn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function rc(t,e){return e=ea({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function As(t,e,n,r){return r!==null&&Hu(r),kr(e,t.child,null,n),t=rc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Wa(Error(E(422))),As(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ea({mode:"visible",children:r.children},i,0,null),s=Ln(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&kr(e,t.child,null,o),e.child.memoizedState=Gl(o),e.memoizedState=Kl,s);if(!(e.mode&1))return As(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(E(419)),r=Wa(s,r,void 0),As(t,e,o,r)}if(a=(o&t.childLanes)!==0,Oe||a){if(r=ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Lt(t,i),ct(r,t,i,-1))}return uc(),r=Wa(Error(E(421))),As(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Iw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Fe=ln(i.nextSibling),Be=e,q=!0,lt=null,t!==null&&(Qe[Je++]=Ct,Qe[Je++]=Rt,Qe[Je++]=jn,Ct=t.id,Rt=t.overflow,jn=e),e=rc(e,r.children),e.flags|=4096,e)}function Xd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Bl(t.return,e,n)}function $a(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Am(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Se(t,e,r.children,n),r=G.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xd(t,n,e);else if(t.tag===19)Xd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(H(G,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&po(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$a(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&po(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$a(e,!0,n,null,s);break;case"together":$a(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=fn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uw(t,e,n){switch(e.tag){case 3:Em(e),Tr();break;case 5:Yp(e);break;case 1:De(e.type)&&ao(e);break;case 4:Qu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;H(co,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(H(G,G.current&1),e.flags|=128,null):n&e.child.childLanes?Sm(t,e,n):(H(G,G.current&1),t=Vt(t,e,n),t!==null?t.sibling:null);H(G,G.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Am(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(G,G.current),r)break;return null;case 22:case 23:return e.lanes=0,_m(t,e,n)}return Vt(t,e,n)}var Tm,Ql,km,Pm;Tm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ql=function(){};km=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,On(St.current);var s=null;switch(n){case"input":i=yl(t,i),r=yl(t,r),s=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),s=[];break;case"textarea":i=_l(t,i),r=_l(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=so)}El(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ki.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ki.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&W("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Pm=function(t,e,n,r){n!==r&&(e.flags|=4)};function Yr(t,e){if(!q)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ve(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function cw(t,e,n){var r=e.pendingProps;switch(zu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(e),null;case 1:return De(e.type)&&oo(),ve(e),null;case 3:return r=e.stateNode,Pr(),$(be),$(Ie),Yu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Es(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,lt!==null&&(ru(lt),lt=null))),Ql(t,e),ve(e),null;case 5:Ju(e);var i=On(ji.current);if(n=e.type,t!==null&&e.stateNode!=null)km(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return ve(e),null}if(t=On(St.current),Es(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[wt]=e,r[Vi]=s,t=(e.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<si.length;i++)W(si[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":ad(r,s),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},W("invalid",r);break;case"textarea":ud(r,s),W("invalid",r)}El(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Is(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Is(r.textContent,a,t),i=["children",""+a]):ki.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&W("scroll",r)}switch(n){case"input":hs(r),ld(r,s,!0);break;case"textarea":hs(r),cd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=so)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ep(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[wt]=e,t[Vi]=r,Tm(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sl(n,r),n){case"dialog":W("cancel",t),W("close",t),i=r;break;case"iframe":case"object":case"embed":W("load",t),i=r;break;case"video":case"audio":for(i=0;i<si.length;i++)W(si[i],t);i=r;break;case"source":W("error",t),i=r;break;case"img":case"image":case"link":W("error",t),W("load",t),i=r;break;case"details":W("toggle",t),i=r;break;case"input":ad(t,r),i=yl(t,r),W("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),W("invalid",t);break;case"textarea":ud(t,r),i=_l(t,r),W("invalid",t);break;default:i=r}El(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?rp(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tp(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pi(t,l):typeof l=="number"&&Pi(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ki.hasOwnProperty(s)?l!=null&&s==="onScroll"&&W("scroll",t):l!=null&&Pu(t,s,l,o))}switch(n){case"input":hs(t),ld(t,r,!1);break;case"textarea":hs(t),cd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?mr(t,!!r.multiple,s,!1):r.defaultValue!=null&&mr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=so)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ve(e),null;case 6:if(t&&e.stateNode!=null)Pm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=On(ji.current),On(St.current),Es(e)){if(r=e.stateNode,n=e.memoizedProps,r[wt]=e,(s=r.nodeValue!==n)&&(t=Be,t!==null))switch(t.tag){case 3:Is(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Is(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=e,e.stateNode=r}return ve(e),null;case 13:if($(G),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(q&&Fe!==null&&e.mode&1&&!(e.flags&128))Wp(),Tr(),e.flags|=98560,s=!1;else if(s=Es(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[wt]=e}else Tr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ve(e),s=!1}else lt!==null&&(ru(lt),lt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||G.current&1?ae===0&&(ae=3):uc())),e.updateQueue!==null&&(e.flags|=4),ve(e),null);case 4:return Pr(),Ql(t,e),t===null&&Di(e.stateNode.containerInfo),ve(e),null;case 10:return qu(e.type._context),ve(e),null;case 17:return De(e.type)&&oo(),ve(e),null;case 19:if($(G),s=e.memoizedState,s===null)return ve(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Yr(s,!1);else{if(ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=po(t),o!==null){for(e.flags|=128,Yr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return H(G,G.current&1|2),e.child}t=t.sibling}s.tail!==null&&ee()>Rr&&(e.flags|=128,r=!0,Yr(s,!1),e.lanes=4194304)}else{if(!r)if(t=po(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Yr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!q)return ve(e),null}else 2*ee()-s.renderingStartTime>Rr&&n!==1073741824&&(e.flags|=128,r=!0,Yr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ee(),e.sibling=null,n=G.current,H(G,r?n&1|2:n&1),e):(ve(e),null);case 22:case 23:return lc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?je&1073741824&&(ve(e),e.subtreeFlags&6&&(e.flags|=8192)):ve(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function dw(t,e){switch(zu(e),e.tag){case 1:return De(e.type)&&oo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Pr(),$(be),$(Ie),Yu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ju(e),null;case 13:if($(G),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Tr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return $(G),null;case 4:return Pr(),null;case 10:return qu(e.type._context),null;case 22:case 23:return lc(),null;case 24:return null;default:return null}}var Ts=!1,_e=!1,fw=typeof WeakSet=="function"?WeakSet:Set,R=null;function fr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(t,e,r)}else n.current=null}function Jl(t,e,n){try{n()}catch(r){X(t,e,r)}}var Zd=!1;function hw(t,e){if(bl=no,t=Np(),Fu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,m=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===t)break t;if(m===n&&++u===i&&(a=o),m===s&&++c===r&&(l=o),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dl={focusedElem:t,selectionRange:n},no=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,x=_.memoizedState,p=e.stateNode,d=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:ot(e.type,v),x);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(I){X(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return _=Zd,Zd=!1,_}function mi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Jl(e,n,s)}i=i.next}while(i!==r)}}function Xo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Yl(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cm(t){var e=t.alternate;e!==null&&(t.alternate=null,Cm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wt],delete e[Vi],delete e[Ml],delete e[Q0],delete e[J0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rm(t){return t.tag===5||t.tag===3||t.tag===4}function ef(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=so));else if(r!==4&&(t=t.child,t!==null))for(Xl(t,e,n),t=t.sibling;t!==null;)Xl(t,e,n),t=t.sibling}function Zl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Zl(t,e,n),t=t.sibling;t!==null;)Zl(t,e,n),t=t.sibling}var fe=null,at=!1;function Ht(t,e,n){for(n=n.child;n!==null;)xm(t,e,n),n=n.sibling}function xm(t,e,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Wo,n)}catch{}switch(n.tag){case 5:_e||fr(n,e);case 6:var r=fe,i=at;fe=null,Ht(t,e,n),fe=r,at=i,fe!==null&&(at?(t=fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(at?(t=fe,n=n.stateNode,t.nodeType===8?ja(t.parentNode,n):t.nodeType===1&&ja(t,n),Ni(t)):ja(fe,n.stateNode));break;case 4:r=fe,i=at,fe=n.stateNode.containerInfo,at=!0,Ht(t,e,n),fe=r,at=i;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jl(n,e,o),i=i.next}while(i!==r)}Ht(t,e,n);break;case 1:if(!_e&&(fr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,e,a)}Ht(t,e,n);break;case 21:Ht(t,e,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Ht(t,e,n),_e=r):Ht(t,e,n);break;default:Ht(t,e,n)}}function tf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fw),e.forEach(function(r){var i=Ew.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,at=!1;break e;case 3:fe=a.stateNode.containerInfo,at=!0;break e;case 4:fe=a.stateNode.containerInfo,at=!0;break e}a=a.return}if(fe===null)throw Error(E(160));xm(s,o,i),fe=null,at=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){X(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Nm(e,t),e=e.sibling}function Nm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(it(e,t),gt(t),r&4){try{mi(3,t,t.return),Xo(3,t)}catch(v){X(t,t.return,v)}try{mi(5,t,t.return)}catch(v){X(t,t.return,v)}}break;case 1:it(e,t),gt(t),r&512&&n!==null&&fr(n,n.return);break;case 5:if(it(e,t),gt(t),r&512&&n!==null&&fr(n,n.return),t.flags&32){var i=t.stateNode;try{Pi(i,"")}catch(v){X(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Xh(i,s),Sl(a,o);var u=Sl(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?rp(i,f):c==="dangerouslySetInnerHTML"?tp(i,f):c==="children"?Pi(i,f):Pu(i,c,f,u)}switch(a){case"input":vl(i,s);break;case"textarea":Zh(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?mr(i,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?mr(i,!!s.multiple,s.defaultValue,!0):mr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Vi]=s}catch(v){X(t,t.return,v)}}break;case 6:if(it(e,t),gt(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){X(t,t.return,v)}}break;case 3:if(it(e,t),gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ni(e.containerInfo)}catch(v){X(t,t.return,v)}break;case 4:it(e,t),gt(t);break;case 13:it(e,t),gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(oc=ee())),r&4&&tf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(_e=(u=_e)||c,it(e,t),_e=u):it(e,t),gt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(R=t,c=t.child;c!==null;){for(f=R=c;R!==null;){switch(m=R,y=m.child,m.tag){case 0:case 11:case 14:case 15:mi(4,m,m.return);break;case 1:fr(m,m.return);var _=m.stateNode;if(typeof _.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){X(r,n,v)}}break;case 5:fr(m,m.return);break;case 22:if(m.memoizedState!==null){rf(f);continue}}y!==null?(y.return=m,R=y):rf(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=np("display",o))}catch(v){X(t,t.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){X(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:it(e,t),gt(t),r&4&&tf(t);break;case 21:break;default:it(e,t),gt(t)}}function gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Rm(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pi(i,""),r.flags&=-33);var s=ef(t);Zl(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ef(t);Xl(t,a,o);break;default:throw Error(E(161))}}catch(l){X(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pw(t,e,n){R=t,Om(t)}function Om(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ts;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||_e;a=Ts;var u=_e;if(Ts=o,(_e=l)&&!u)for(R=i;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?sf(i):l!==null?(l.return=o,R=l):sf(i);for(;s!==null;)R=s,Om(s),s=s.sibling;R=i,Ts=a,_e=u}nf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):nf(t)}}function nf(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_e||Xo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_e)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ot(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ud(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ud(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ni(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}_e||e.flags&512&&Yl(e)}catch(m){X(e,e.return,m)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function rf(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function sf(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xo(4,e)}catch(l){X(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){X(e,i,l)}}var s=e.return;try{Yl(e)}catch(l){X(e,s,l)}break;case 5:var o=e.return;try{Yl(e)}catch(l){X(e,o,l)}}}catch(l){X(e,e.return,l)}if(e===t){R=null;break}var a=e.sibling;if(a!==null){a.return=e.return,R=a;break}R=e.return}}var mw=Math.ceil,yo=Ft.ReactCurrentDispatcher,ic=Ft.ReactCurrentOwner,Xe=Ft.ReactCurrentBatchConfig,j=0,ce=null,ne=null,me=0,je=0,hr=En(0),ae=0,zi=null,Fn=0,Zo=0,sc=0,gi=null,Ne=null,oc=0,Rr=1/0,kt=null,vo=!1,eu=null,cn=null,ks=!1,tn=null,wo=0,yi=0,tu=null,Ws=-1,$s=0;function Te(){return j&6?ee():Ws!==-1?Ws:Ws=ee()}function dn(t){return t.mode&1?j&2&&me!==0?me&-me:X0.transition!==null?($s===0&&($s=mp()),$s):(t=B,t!==0||(t=window.event,t=t===void 0?16:Ep(t.type)),t):1}function ct(t,e,n,r){if(50<yi)throw yi=0,tu=null,Error(E(185));ts(t,n,r),(!(j&2)||t!==ce)&&(t===ce&&(!(j&2)&&(Zo|=n),ae===4&&Qt(t,me)),Le(t,r),n===1&&j===0&&!(e.mode&1)&&(Rr=ee()+500,Qo&&Sn()))}function Le(t,e){var n=t.callbackNode;Xv(t,e);var r=to(t,t===ce?me:0);if(r===0)n!==null&&hd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&hd(n),e===1)t.tag===0?Y0(of.bind(null,t)):Bp(of.bind(null,t)),K0(function(){!(j&6)&&Sn()}),n=null;else{switch(gp(r)){case 1:n=Ou;break;case 4:n=hp;break;case 16:n=eo;break;case 536870912:n=pp;break;default:n=eo}n=Fm(n,bm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bm(t,e){if(Ws=-1,$s=0,j&6)throw Error(E(327));var n=t.callbackNode;if(_r()&&t.callbackNode!==n)return null;var r=to(t,t===ce?me:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=_o(t,r);else{e=r;var i=j;j|=2;var s=Lm();(ce!==t||me!==e)&&(kt=null,Rr=ee()+500,Dn(t,e));do try{vw();break}catch(a){Dm(t,a)}while(1);$u(),yo.current=s,j=i,ne!==null?e=0:(ce=null,me=0,e=ae)}if(e!==0){if(e===2&&(i=Cl(t),i!==0&&(r=i,e=nu(t,i))),e===1)throw n=zi,Dn(t,0),Qt(t,r),Le(t,ee()),n;if(e===6)Qt(t,r);else{if(i=t.current.alternate,!(r&30)&&!gw(i)&&(e=_o(t,r),e===2&&(s=Cl(t),s!==0&&(r=s,e=nu(t,s))),e===1))throw n=zi,Dn(t,0),Qt(t,r),Le(t,ee()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:Cn(t,Ne,kt);break;case 3:if(Qt(t,r),(r&130023424)===r&&(e=oc+500-ee(),10<e)){if(to(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Te(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Vl(Cn.bind(null,t,Ne,kt),e);break}Cn(t,Ne,kt);break;case 4:if(Qt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mw(r/1960))-r,10<r){t.timeoutHandle=Vl(Cn.bind(null,t,Ne,kt),r);break}Cn(t,Ne,kt);break;case 5:Cn(t,Ne,kt);break;default:throw Error(E(329))}}}return Le(t,ee()),t.callbackNode===n?bm.bind(null,t):null}function nu(t,e){var n=gi;return t.current.memoizedState.isDehydrated&&(Dn(t,e).flags|=256),t=_o(t,e),t!==2&&(e=Ne,Ne=n,e!==null&&ru(e)),t}function ru(t){Ne===null?Ne=t:Ne.push.apply(Ne,t)}function gw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qt(t,e){for(e&=~sc,e&=~Zo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ut(e),r=1<<n;t[n]=-1,e&=~r}}function of(t){if(j&6)throw Error(E(327));_r();var e=to(t,0);if(!(e&1))return Le(t,ee()),null;var n=_o(t,e);if(t.tag!==0&&n===2){var r=Cl(t);r!==0&&(e=r,n=nu(t,r))}if(n===1)throw n=zi,Dn(t,0),Qt(t,e),Le(t,ee()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cn(t,Ne,kt),Le(t,ee()),null}function ac(t,e){var n=j;j|=1;try{return t(e)}finally{j=n,j===0&&(Rr=ee()+500,Qo&&Sn())}}function Bn(t){tn!==null&&tn.tag===0&&!(j&6)&&_r();var e=j;j|=1;var n=Xe.transition,r=B;try{if(Xe.transition=null,B=1,t)return t()}finally{B=r,Xe.transition=n,j=e,!(j&6)&&Sn()}}function lc(){je=hr.current,$(hr)}function Dn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,q0(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(zu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oo();break;case 3:Pr(),$(be),$(Ie),Yu();break;case 5:Ju(r);break;case 4:Pr();break;case 13:$(G);break;case 19:$(G);break;case 10:qu(r.type._context);break;case 22:case 23:lc()}n=n.return}if(ce=t,ne=t=fn(t.current,null),me=je=e,ae=0,zi=null,sc=Zo=Fn=0,Ne=gi=null,Nn!==null){for(e=0;e<Nn.length;e++)if(n=Nn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nn=null}return t}function Dm(t,e){do{var n=ne;try{if($u(),Bs.current=go,mo){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}mo=!1}if(Un=0,ue=ie=Q=null,pi=!1,Ui=0,ic.current=null,n===null||n.return===null){ae=1,zi=e,ne=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=me,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=qd(o);if(y!==null){y.flags&=-257,Kd(y,o,a,s,e),y.mode&1&&$d(s,u,e),e=y,l=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){$d(s,u,e),uc();break e}l=Error(E(426))}}else if(q&&a.mode&1){var x=qd(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Kd(x,o,a,s,e),Hu(Cr(l,a));break e}}s=l=Cr(l,a),ae!==4&&(ae=2),gi===null?gi=[s]:gi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=ym(s,l,e);jd(s,p);break e;case 1:a=l;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(cn===null||!cn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var I=vm(s,a,e);jd(s,I);break e}}s=s.return}while(s!==null)}Mm(n)}catch(S){e=S,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(1)}function Lm(){var t=yo.current;return yo.current=go,t===null?go:t}function uc(){(ae===0||ae===3||ae===2)&&(ae=4),ce===null||!(Fn&268435455)&&!(Zo&268435455)||Qt(ce,me)}function _o(t,e){var n=j;j|=2;var r=Lm();(ce!==t||me!==e)&&(kt=null,Dn(t,e));do try{yw();break}catch(i){Dm(t,i)}while(1);if($u(),j=n,yo.current=r,ne!==null)throw Error(E(261));return ce=null,me=0,ae}function yw(){for(;ne!==null;)Vm(ne)}function vw(){for(;ne!==null&&!Hv();)Vm(ne)}function Vm(t){var e=Um(t.alternate,t,je);t.memoizedProps=t.pendingProps,e===null?Mm(t):ne=e,ic.current=null}function Mm(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dw(n,e),n!==null){n.flags&=32767,ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ae=6,ne=null;return}}else if(n=cw(n,e,je),n!==null){ne=n;return}if(e=e.sibling,e!==null){ne=e;return}ne=e=t}while(e!==null);ae===0&&(ae=5)}function Cn(t,e,n){var r=B,i=Xe.transition;try{Xe.transition=null,B=1,ww(t,e,n,r)}finally{Xe.transition=i,B=r}return null}function ww(t,e,n,r){do _r();while(tn!==null);if(j&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Zv(t,s),t===ce&&(ne=ce=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ks||(ks=!0,Fm(eo,function(){return _r(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xe.transition,Xe.transition=null;var o=B;B=1;var a=j;j|=4,ic.current=null,hw(t,n),Nm(n,t),U0(Dl),no=!!bl,Dl=bl=null,t.current=n,pw(n),Wv(),j=a,B=o,Xe.transition=s}else t.current=n;if(ks&&(ks=!1,tn=t,wo=i),s=t.pendingLanes,s===0&&(cn=null),Kv(n.stateNode),Le(t,ee()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vo)throw vo=!1,t=eu,eu=null,t;return wo&1&&t.tag!==0&&_r(),s=t.pendingLanes,s&1?t===tu?yi++:(yi=0,tu=t):yi=0,Sn(),null}function _r(){if(tn!==null){var t=gp(wo),e=Xe.transition,n=B;try{if(Xe.transition=null,B=16>t?16:t,tn===null)var r=!1;else{if(t=tn,tn=null,wo=0,j&6)throw Error(E(331));var i=j;for(j|=4,R=t.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:mi(8,c,s)}var f=c.child;if(f!==null)f.return=c,R=f;else for(;R!==null;){c=R;var m=c.sibling,y=c.return;if(Cm(c),c===u){R=null;break}if(m!==null){m.return=y,R=m;break}R=y}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:mi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,R=p;break e}R=s.return}}var d=t.current;for(R=d;R!==null;){o=R;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,R=g;else e:for(o=d;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xo(9,a)}}catch(S){X(a,a.return,S)}if(a===o){R=null;break e}var I=a.sibling;if(I!==null){I.return=a.return,R=I;break e}R=a.return}}if(j=i,Sn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Wo,t)}catch{}r=!0}return r}finally{B=n,Xe.transition=e}}return!1}function af(t,e,n){e=Cr(n,e),e=ym(t,e,1),t=un(t,e,1),e=Te(),t!==null&&(ts(t,1,e),Le(t,e))}function X(t,e,n){if(t.tag===3)af(t,t,n);else for(;e!==null;){if(e.tag===3){af(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){t=Cr(n,t),t=vm(e,t,1),e=un(e,t,1),t=Te(),e!==null&&(ts(e,1,t),Le(e,t));break}}e=e.return}}function _w(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Te(),t.pingedLanes|=t.suspendedLanes&n,ce===t&&(me&n)===n&&(ae===4||ae===3&&(me&130023424)===me&&500>ee()-oc?Dn(t,0):sc|=n),Le(t,e)}function jm(t,e){e===0&&(t.mode&1?(e=gs,gs<<=1,!(gs&130023424)&&(gs=4194304)):e=1);var n=Te();t=Lt(t,e),t!==null&&(ts(t,e,n),Le(t,n))}function Iw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jm(t,n)}function Ew(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),jm(t,n)}var Um;Um=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||be.current)Oe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Oe=!1,uw(t,e,n);Oe=!!(t.flags&131072)}else Oe=!1,q&&e.flags&1048576&&zp(e,uo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Hs(t,e),t=e.pendingProps;var i=Ar(e,Ie.current);wr(e,n),i=Zu(null,e,r,t,i,n);var s=ec();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,De(r)?(s=!0,ao(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gu(e),i.updater=Jo,e.stateNode=i,i._reactInternals=e,Hl(e,r,t,n),e=ql(null,e,r,!0,s,n)):(e.tag=0,q&&s&&Bu(e),Se(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Hs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Aw(r),t=ot(r,t),i){case 0:e=$l(null,e,r,t,n);break e;case 1:e=Jd(null,e,r,t,n);break e;case 11:e=Gd(null,e,r,t,n);break e;case 14:e=Qd(null,e,r,ot(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ot(r,i),$l(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ot(r,i),Jd(t,e,r,i,n);case 3:e:{if(Em(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,qp(t,e),ho(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Cr(Error(E(423)),e),e=Yd(t,e,r,n,i);break e}else if(r!==i){i=Cr(Error(E(424)),e),e=Yd(t,e,r,n,i);break e}else for(Fe=ln(e.stateNode.containerInfo.firstChild),Be=e,q=!0,lt=null,n=Jp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tr(),r===i){e=Vt(t,e,n);break e}Se(t,e,r,n)}e=e.child}return e;case 5:return Yp(e),t===null&&Fl(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ll(r,i)?o=null:s!==null&&Ll(r,s)&&(e.flags|=32),Im(t,e),Se(t,e,o,n),e.child;case 6:return t===null&&Fl(e),null;case 13:return Sm(t,e,n);case 4:return Qu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=kr(e,null,r,n):Se(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ot(r,i),Gd(t,e,r,i,n);case 7:return Se(t,e,e.pendingProps,n),e.child;case 8:return Se(t,e,e.pendingProps.children,n),e.child;case 12:return Se(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,H(co,r._currentValue),r._currentValue=o,s!==null)if(dt(s.value,o)){if(s.children===i.children&&!be.current){e=Vt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ot(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Bl(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Bl(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Se(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,wr(e,n),i=et(i),r=r(i),e.flags|=1,Se(t,e,r,n),e.child;case 14:return r=e.type,i=ot(r,e.pendingProps),i=ot(r.type,i),Qd(t,e,r,i,n);case 15:return wm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ot(r,i),Hs(t,e),e.tag=1,De(r)?(t=!0,ao(e)):t=!1,wr(e,n),Gp(e,r,i),Hl(e,r,i,n),ql(null,e,r,!0,t,n);case 19:return Am(t,e,n);case 22:return _m(t,e,n)}throw Error(E(156,e.tag))};function Fm(t,e){return fp(t,e)}function Sw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(t,e,n,r){return new Sw(t,e,n,r)}function cc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Aw(t){if(typeof t=="function")return cc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ru)return 11;if(t===xu)return 14}return 2}function fn(t,e){var n=t.alternate;return n===null?(n=Ye(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")cc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case rr:return Ln(n.children,i,s,e);case Cu:o=8,i|=8;break;case hl:return t=Ye(12,n,e,i|2),t.elementType=hl,t.lanes=s,t;case pl:return t=Ye(13,n,e,i),t.elementType=pl,t.lanes=s,t;case ml:return t=Ye(19,n,e,i),t.elementType=ml,t.lanes=s,t;case Qh:return ea(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Kh:o=10;break e;case Gh:o=9;break e;case Ru:o=11;break e;case xu:o=14;break e;case $t:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=Ye(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ln(t,e,n,r){return t=Ye(7,t,r,e),t.lanes=n,t}function ea(t,e,n,r){return t=Ye(22,t,r,e),t.elementType=Qh,t.lanes=n,t.stateNode={isHidden:!1},t}function qa(t,e,n){return t=Ye(6,t,null,e),t.lanes=n,t}function Ka(t,e,n){return e=Ye(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Tw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pa(0),this.expirationTimes=Pa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dc(t,e,n,r,i,s,o,a,l){return t=new Tw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ye(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gu(s),t}function kw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Bm(t){if(!t)return wn;t=t._reactInternals;e:{if(Qn(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(De(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(De(n))return Fp(t,n,e)}return e}function zm(t,e,n,r,i,s,o,a,l){return t=dc(n,r,!0,t,i,s,o,a,l),t.context=Bm(null),n=t.current,r=Te(),i=dn(n),s=Ot(r,i),s.callback=e??null,un(n,s,i),t.current.lanes=i,ts(t,i,r),Le(t,r),t}function ta(t,e,n,r){var i=e.current,s=Te(),o=dn(i);return n=Bm(n),e.context===null?e.context=n:e.pendingContext=n,e=Ot(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=un(i,e,o),t!==null&&(ct(t,i,o,s),Fs(t,i,o)),o}function Io(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function fc(t,e){lf(t,e),(t=t.alternate)&&lf(t,e)}function Pw(){return null}var Hm=typeof reportError=="function"?reportError:function(t){console.error(t)};function hc(t){this._internalRoot=t}na.prototype.render=hc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));ta(t,e,null,null)};na.prototype.unmount=hc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Bn(function(){ta(null,t,null,null)}),e[Dt]=null}};function na(t){this._internalRoot=t}na.prototype.unstable_scheduleHydration=function(t){if(t){var e=wp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gt.length&&e!==0&&e<Gt[n].priority;n++);Gt.splice(n,0,t),n===0&&Ip(t)}};function pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ra(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function uf(){}function Cw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Io(o);s.call(u)}}var o=zm(e,r,t,0,null,!1,!1,"",uf);return t._reactRootContainer=o,t[Dt]=o.current,Di(t.nodeType===8?t.parentNode:t),Bn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Io(l);a.call(u)}}var l=dc(t,0,!1,null,null,!1,!1,"",uf);return t._reactRootContainer=l,t[Dt]=l.current,Di(t.nodeType===8?t.parentNode:t),Bn(function(){ta(e,l,n,r)}),l}function ia(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Io(o);a.call(l)}}ta(e,o,t,i)}else o=Cw(n,e,t,i,r);return Io(o)}yp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ii(e.pendingLanes);n!==0&&(bu(e,n|1),Le(e,ee()),!(j&6)&&(Rr=ee()+500,Sn()))}break;case 13:Bn(function(){var r=Lt(t,1);if(r!==null){var i=Te();ct(r,t,1,i)}}),fc(t,1)}};Du=function(t){if(t.tag===13){var e=Lt(t,134217728);if(e!==null){var n=Te();ct(e,t,134217728,n)}fc(t,134217728)}};vp=function(t){if(t.tag===13){var e=dn(t),n=Lt(t,e);if(n!==null){var r=Te();ct(n,t,e,r)}fc(t,e)}};wp=function(){return B};_p=function(t,e){var n=B;try{return B=t,e()}finally{B=n}};Tl=function(t,e,n){switch(e){case"input":if(vl(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Go(r);if(!i)throw Error(E(90));Yh(r),vl(r,i)}}}break;case"textarea":Zh(t,n);break;case"select":e=n.value,e!=null&&mr(t,!!n.multiple,e,!1)}};op=ac;ap=Bn;var Rw={usingClientEntryPoint:!1,Events:[rs,ar,Go,ip,sp,ac]},Xr={findFiberByHostInstance:xn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},xw={bundleType:Xr.bundleType,version:Xr.version,rendererPackageName:Xr.rendererPackageName,rendererConfig:Xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cp(t),t===null?null:t.stateNode},findFiberByHostInstance:Xr.findFiberByHostInstance||Pw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ps=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ps.isDisabled&&Ps.supportsFiber)try{Wo=Ps.inject(xw),Et=Ps}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rw;Ke.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pc(e))throw Error(E(200));return kw(t,e,null,n)};Ke.createRoot=function(t,e){if(!pc(t))throw Error(E(299));var n=!1,r="",i=Hm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=dc(t,1,!1,null,null,n,!1,r,i),t[Dt]=e.current,Di(t.nodeType===8?t.parentNode:t),new hc(e)};Ke.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=cp(e),t=t===null?null:t.stateNode,t};Ke.flushSync=function(t){return Bn(t)};Ke.hydrate=function(t,e,n){if(!ra(e))throw Error(E(200));return ia(null,t,e,!0,n)};Ke.hydrateRoot=function(t,e,n){if(!pc(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Hm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zm(e,null,t,1,n??null,i,!1,s,o),t[Dt]=e.current,Di(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new na(e)};Ke.render=function(t,e,n){if(!ra(e))throw Error(E(200));return ia(null,t,e,!1,n)};Ke.unmountComponentAtNode=function(t){if(!ra(t))throw Error(E(40));return t._reactRootContainer?(Bn(function(){ia(null,null,t,!1,function(){t._reactRootContainer=null,t[Dt]=null})}),!0):!1};Ke.unstable_batchedUpdates=ac;Ke.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ra(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return ia(t,e,n,!1,r)};Ke.version="18.2.0-next-9e3b772b8-20220608";function Wm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wm)}catch(t){console.error(t)}}Wm(),zh.exports=Ke;var Nw=zh.exports,cf=Nw;dl.createRoot=cf.createRoot,dl.hydrateRoot=cf.hydrateRoot;const Ow="/assets/reqserv-2fce40ab.png",bw="/assets/search-333f67f0.png",$m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAACtCAYAAAANgcuAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAu6SURBVHgB7d3rcdtIEgfw1tV9P10Ei4vA6wgWjsDaCMyLwNoIJEVgbQTSRiA5AtIRWI4A2AisjaAX7RkUSS0BzPQ0ZkDq/6tC6UEQD3IaGMyTCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgdmehKzLzefdj1S0/dcu5//e3bnk6Ozvb0Ay6fdbdj/d+f89+f5tufy0BlNAlyk88rumWiozItrplPbK/O8v9AQQJCITdgDinRLINv62Q/VUEkEOX2H7mOJ8oUUTwsVUAAkxilx2J8T0lcbLLHsW6JAAD/5p4/YLiSCDUpHdH8WoCMDAYDP4Kr7nKV6TAruSopnhvCMDA2J3hZ9LRJs4PpPNMAAbGgkGb9/8vRWJXKrQiHQQDmJgjGP5D8a5I7xsBGJh6gM6lJr1HAjBQPBi6LNKKlA/dnee5moLA67OEO4P2wVngrgBmigaDf3CuSe+GAIyUvjOkPDij9SqYKh0MNen9QQCGigVD4oNz290V7gnAUMk7Q8qD8+8EYOzfVIDBg3OWUqSd9lkv22m15Ip1F1v7zdu+HtXOv+V4n/GsdViRYKC0B+f7Ob5Mn/ClPdZ7/1OW84n3SOJ68svnUnUePuFLC2NpF1bTRPazW19+yDG33fKZZi6M4G2X4V9o2+bt2S9fKOA73dnGG9r/btqd7czTBVny9KyzDth2w3o1GZLtsetQ9J3TyTbuOEMPPHY9Ai95vHtsjDW75zjr45Q+Kk3A/i9HtnHF4d9PY34ePFMwJGxXfCUjPN3POtUdzxAU7ILgim2C95CGDRMTx134Phw41zXrNGx14eT5gmHNeisy0G3nI+chCdasJx67brgN53HHiV1qOT4N7fWU7H5/4HQpWXL1ifTWI9vUdOvsNWSA47uyWkj+QrptfOD57gZDvnJaN96vHK/2771iO0EXpNxFqyvS21Ci7kO5SzwGrWtOuEN075WH43vSN6vXkgfVNesDQtNB7IJd9vKa7HzigCxT7mBIqVtIaofE7uq8onLkC4lOHD5haPqGW5Fjjr6zac7VqyittHHI5GeYLRh8ZFakk1ScOsOVRkszlI58iaWHw7nk+IdR7THLiI0rsidZ9OuxFeYIBikBqF4ulHZXSG2HVPLKukuKcVehK/t1a1qG2Kt1RTraO0qIj2MvzhEMcjLNgWVFOm1KRQrrR92YS8xFYY7sglbNxnU8BZyPnUOpGugYqX0WUu5IQmo3N93yp/+9r+XVZgN+JKqpAE/MVvY25Gpo5djleN8nbvOCwgsySmfthsScg8NplWNWkkbo8+eRUhz5cGj/7LJ+KWXgtwHHfcd6DQ9cAdnVWmt9p0DdutdsQ7YjFxD5zKWeRdJlw3rxRfS8jGBIyuuz+xC1HgK2v2adyZp01pXR96qJbad8t0F5erYJhnpg2xIYKRe5gxfYpYyOMSQ1i5TyMPab0TqHVGMv8rbRoMZkyZvvC7IhnTkfcHfdDGUl/fmlFKpUh/659GC44rT2PRXpPIUU5XbrPJFr/RlLHuR+Gnm9Ir3QRPKZdHIEgzybTWUlNZ97rzr0z6UHw6pbGtY3Z9AOdflnxLraQcz+N/JaynNSaCLRJibNIHGxvgT0FUkJhqPMJvUk/5mzriD4QXEmFSll6HAUPXyowiZgHfPzPJZgEKvMAQGH5bgzpFz11Y4pGIQExCXBqTNpoRzr2IJBXDGmrjppXVYv5pnNzBw10C0Nl2hIIu5rcLVkG3J3uCYAQ7MEQxfZ12Mr8LYVqbaphPRUu13y6BSg1lIhRbJJUobfLSvSj3/Uj5QAYKb0M8M16YvI3hOAoaLB4LM52mr1XM0C4JVYQmnSI+lMNWkAiLKEYEipYHlLAEaKB4PPKrWkUxGcmmJ1SEupdGtJB5Vvp6dY9vcYa6Dh9BXJ/iIYYImKlBSeejAcaw31ko+7pfn9ErCOeRb51IPhL1qusQTfklKGRow5PtOQYWkq0msP/fPUg0FbbBtzm1Y97Pkuo0Na0gvtb6ANmpbymOrdaN4CAcFwWBVyhWX9dFyjx5VY3Pz/wPW0iSlXx5t6qLtvwufeO3gOryEYNPlvCYSQftfavtlfAtbRdtj/yNNDxcidb0XxnjNP1fWjuy9vx02qfPZJhvGpSKcdau180sHgT1p7JbscuTJJWbgMIrwinUejdQ6RQF4PBYRPTJNTjZHtMaVYkTvefphS+T2ltGkz9MIxDC855kP35U6NEyRjL9Wk08+rsKH9O8wFJeS5Q66usk6375Z0V8CK3KgiG9rPbvUTN2qdwkT0g3fcYw+GqltkmMd3Q7c+n6g2pA8ISfQXZCdmYDRZN2UQhJrstGeFZjM1JOcweHcbyyZpy7pzF2fKle5yYp3UkfmstH40uyCJI99Zy/UZap/zQox2JhsLBm1eW/O+1JMfLRnxVzRtrzpLoSU9u2QIy9KVcPcxQZyoH/XcmlyIbsdWGAwGnw/XfAmaYEgdDWEy/96dT5/3L+VGk83w9RHaMV0ttAX2P8ddaPIcpkqTNAlb857UUorQoP2VygxQdTM1SMIYf1UuERBtt7zLPfCCvwBY3slvxp4VelPBEFvWvdHMveavmBvSC0rg8qV2i7SIzJllSgqEnr/Fv6N8NcAbcoHQUgH+Tm5x4TL5/H/guIkhKlLyZfcN61QUqXvPBc87wfiaZ5j2iV3F0z3Px2Qid9bPz7De2UZKmpDzqMkSuw+/Cdi5xQcoJx/7RSftl11QWMxE31tzhrnPeBsUDduQxCMJWFt/8vL4koNhZ1u3Ee83PY9DJyYfvNTIrnl/xpTGH2hKRc7Q/u4nTlj2W5ERv88Vu8CImTWn8e+55ELDXrJrrnDLcTMJfffry/tqMsaGweC39/L7aXaWB7+/mhKc0cL5EzynbYnR00SLT6v9yv6qnX3vJvSW3EN7e7bAUf3YXSQq/2e189IzbY+7pRmxm3NZ03ZLnjvfUQGLr4EuVeuZ2K6pKJ/QW4Io6PYJ4CEYDmD3IH/F+3lwyaeu6Iid6nnBTHi69Kxhwwf3XHKfFxs/QOeAO8M/yZdRjbwur635+CZMOdXzMoNg2OGzC1XAqrJOcr1KLqd6XtYQDPs+RqwbMpzJUpzqeZlCMOyLqTys6XiUOK+WjgyCAf6BX+lQ/wiGfVG1yUeUaFqKk2Pi88VBMOyLbVpxLImmpTgWJUot6bRUCIJhX2ww1ARDWtIpMge0QDDs+0Zx3tBxyF53kNBteEOFIBj2xTbMu1h6JZU/vtgm9g3Z2FC8Yo0jEQz7NhTHekylOdQUqbuqW2VVYrvX3i+xSfyrxfudlxbdliYEx/fi+0qGOLznYsNH2ObrpLGuf/Ei7w7sGufFuiVD7FrKTnXbbHgBgbD4nm65sW5g3rZb3i7tFi+JjOLHav01ZFgVxbHU5LKUfaGDfFaSHXs8gWErT5O/ksVmlUTKmKjm2PVbiCXn/WpbrcIBrG+Lr52vwZQyEMSiAhoWgN3dQatYQPjjvmO9mgBe4rSBuqQEp6KM2A0X07DeokvFoCDWPzv0Gs7Qt5jdIGhrTlcRwBB2A4OlatgNflWRAXZBKneBT5wWrLvwrEAoWp3ELvtQkw1parAhN8FhSyODkLEr1embUlTkptitKW0aqkNaKjjA8JIgGCb4K7rUys5Z5Ni++LuifN7mGKHwGCAYArCrYX6g0/Pb1Gw2rwka6gXwNbJLmRfOyg0CAdRYXxm3NNcEkIqPOyCk9GlFAFZ4/ll/5iBjqlYEYI1d8+g1L9+PmWwIYG7sKtQaXqY7xt0AcmJ3l5BniYbL6+c0qwigFN7OO9ZwfmsuOK/cKUCl20zYTfq4IjeQr3UTCtGSm6dbao8f0ZE+HYIhA94O11KT6/bYT55YTby1JT8hIbkukvJTEv8TEr89BMMCvMzfo9EcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALwqfwPu9k0O3n0Y2QAAAABJRU5ErkJggg==",df="/assets/docta-1ec713c3.jpg";/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hi(){return Hi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hi.apply(this,arguments)}var nn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nn||(nn={}));const ff="popstate";function Dw(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return iu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Eo(i)}return Vw(e,n,null,t)}function re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function mc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Lw(){return Math.random().toString(36).substr(2,8)}function hf(t,e){return{usr:t.state,key:t.key,idx:e}}function iu(t,e,n,r){return n===void 0&&(n=null),Hi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Mr(e):e,{state:n,key:e&&e.key||r||Lw()})}function Eo(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Mr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Vw(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=nn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Hi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=nn.Pop;let x=c(),p=x==null?null:x-u;u=x,l&&l({action:a,location:v.location,delta:p})}function m(x,p){a=nn.Push;let d=iu(v.location,x,p);n&&n(d,x),u=c()+1;let g=hf(d,u),I=v.createHref(d);try{o.pushState(g,"",I)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(I)}s&&l&&l({action:a,location:v.location,delta:1})}function y(x,p){a=nn.Replace;let d=iu(v.location,x,p);n&&n(d,x),u=c();let g=hf(d,u),I=v.createHref(d);o.replaceState(g,"",I),s&&l&&l({action:a,location:v.location,delta:0})}function _(x){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof x=="string"?x:Eo(x);return re(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let v={get action(){return a},get location(){return t(i,o)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ff,f),l=x,()=>{i.removeEventListener(ff,f),l=null}},createHref(x){return e(i,x)},createURL:_,encodeLocation(x){let p=_(x);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:y,go(x){return o.go(x)}};return v}var pf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(pf||(pf={}));function Mw(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Mr(e):e,i=gc(r.pathname||"/",n);if(i==null)return null;let s=qm(t);jw(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Kw(s[a],Jw(i));return o}function qm(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(re(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=hn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),qm(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:$w(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Km(s.path))i(s,o,l)}),e}function Km(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Km(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function jw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:qw(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Uw=/^:\w+$/,Fw=3,Bw=2,zw=1,Hw=10,Ww=-2,mf=t=>t==="*";function $w(t,e){let n=t.split("/"),r=n.length;return n.some(mf)&&(r+=Ww),e&&(r+=Bw),n.filter(i=>!mf(i)).reduce((i,s)=>i+(Uw.test(s)?Fw:s===""?zw:Hw),r)}function qw(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Kw(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Gw({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:hn([i,c.pathname]),pathnameBase:e_(hn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=hn([i,c.pathnameBase]))}return s}function Gw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Qw(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let m=a[f]||"";o=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}return u[c]=Yw(a[f]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Qw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),mc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Jw(t){try{return decodeURI(t)}catch(e){return mc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Yw(t,e){try{return decodeURIComponent(t)}catch(n){return mc(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function gc(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Xw(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Mr(t):t;return{pathname:n?n.startsWith("/")?n:Zw(n,e):e,search:t_(r),hash:n_(i)}}function Zw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ga(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Gm(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Qm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Mr(t):(i=Hi({},t),re(!i.pathname||!i.pathname.includes("?"),Ga("?","pathname","search",i)),re(!i.pathname||!i.pathname.includes("#"),Ga("#","pathname","hash",i)),re(!i.search||!i.search.includes("#"),Ga("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let f=e.length-1;if(o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=Xw(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const hn=t=>t.join("/").replace(/\/\/+/g,"/"),e_=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),t_=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,n_=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function r_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Jm=["post","put","patch","delete"];new Set(Jm);const i_=["get",...Jm];new Set(i_);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function So(){return So=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},So.apply(this,arguments)}const yc=w.createContext(null),s_=w.createContext(null),jr=w.createContext(null),sa=w.createContext(null),An=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Ym=w.createContext(null);function o_(t,e){let{relative:n}=e===void 0?{}:e;ss()||re(!1);let{basename:r,navigator:i}=w.useContext(jr),{hash:s,pathname:o,search:a}=Zm(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:hn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ss(){return w.useContext(sa)!=null}function os(){return ss()||re(!1),w.useContext(sa).location}function Xm(t){w.useContext(jr).static||w.useLayoutEffect(t)}function vc(){let{isDataRoute:t}=w.useContext(An);return t?I_():a_()}function a_(){ss()||re(!1);let t=w.useContext(yc),{basename:e,navigator:n}=w.useContext(jr),{matches:r}=w.useContext(An),{pathname:i}=os(),s=JSON.stringify(Gm(r).map(l=>l.pathnameBase)),o=w.useRef(!1);return Xm(()=>{o.current=!0}),w.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Qm(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:hn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const l_=w.createContext(null);function u_(t){let e=w.useContext(An).outlet;return e&&w.createElement(l_.Provider,{value:t},e)}function Zm(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=w.useContext(An),{pathname:i}=os(),s=JSON.stringify(Gm(r).map(o=>o.pathnameBase));return w.useMemo(()=>Qm(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function c_(t,e){return d_(t,e)}function d_(t,e,n){ss()||re(!1);let{navigator:r}=w.useContext(jr),{matches:i}=w.useContext(An),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=os(),u;if(e){var c;let v=typeof e=="string"?Mr(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||re(!1),u=v}else u=l;let f=u.pathname||"/",m=a==="/"?f:f.slice(a.length)||"/",y=Mw(t,{pathname:m}),_=g_(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:hn([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:hn([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&_?w.createElement(sa.Provider,{value:{location:So({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:nn.Pop}},_):_}function f_(){let t=__(),e=r_(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:i},n):null,s)}const h_=w.createElement(f_,null);class p_ extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?w.createElement(An.Provider,{value:this.props.routeContext},w.createElement(Ym.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function m_(t){let{routeContext:e,match:n,children:r}=t,i=w.useContext(yc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(An.Provider,{value:e},r)}function g_(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||re(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||h_);let m=e.concat(s.slice(0,u+1)),y=()=>{let _;return c?_=f:l.route.Component?_=w.createElement(l.route.Component,null):l.route.element?_=l.route.element:_=a,w.createElement(m_,{match:l,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?w.createElement(p_,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:y(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):y()},null)}var eg=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(eg||{}),Ao=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ao||{});function y_(t){let e=w.useContext(yc);return e||re(!1),e}function v_(t){let e=w.useContext(s_);return e||re(!1),e}function w_(t){let e=w.useContext(An);return e||re(!1),e}function tg(t){let e=w_(),n=e.matches[e.matches.length-1];return n.route.id||re(!1),n.route.id}function __(){var t;let e=w.useContext(Ym),n=v_(Ao.UseRouteError),r=tg(Ao.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function I_(){let{router:t}=y_(eg.UseNavigateStable),e=tg(Ao.UseNavigateStable),n=w.useRef(!1);return Xm(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,So({fromRouteId:e},s)))},[t,e])}function E_(t){return u_(t.context)}function st(t){re(!1)}function S_(t){let{basename:e="/",children:n=null,location:r,navigationType:i=nn.Pop,navigator:s,static:o=!1}=t;ss()&&re(!1);let a=e.replace(/^\/*/,"/"),l=w.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Mr(r));let{pathname:u="/",search:c="",hash:f="",state:m=null,key:y="default"}=r,_=w.useMemo(()=>{let v=gc(u,a);return v==null?null:{location:{pathname:v,search:c,hash:f,state:m,key:y},navigationType:i}},[a,u,c,f,m,y,i]);return _==null?null:w.createElement(jr.Provider,{value:l},w.createElement(sa.Provider,{children:n,value:_}))}function A_(t){let{children:e,location:n}=t;return c_(su(e),n)}new Promise(()=>{});function su(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(r,i)=>{if(!w.isValidElement(r))return;let s=[...e,i];if(r.type===w.Fragment){n.push.apply(n,su(r.props.children,s));return}r.type!==st&&re(!1),!r.props.index||!r.props.children||re(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=su(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ou(){return ou=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ou.apply(this,arguments)}function T_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function k_(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function P_(t,e){return t.button===0&&(!e||e==="_self")&&!k_(t)}const C_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],R_="startTransition",gf=Iv[R_];function x_(t){let{basename:e,children:n,future:r,window:i}=t,s=w.useRef();s.current==null&&(s.current=Dw({window:i,v5Compat:!0}));let o=s.current,[a,l]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=w.useCallback(f=>{u&&gf?gf(()=>l(f)):l(f)},[l,u]);return w.useLayoutEffect(()=>o.listen(c),[o,c]),w.createElement(S_,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const N_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",O_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vt=w.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,f=T_(e,C_),{basename:m}=w.useContext(jr),y,_=!1;if(typeof u=="string"&&O_.test(u)&&(y=u,N_))try{let d=new URL(window.location.href),g=u.startsWith("//")?new URL(d.protocol+u):new URL(u),I=gc(g.pathname,m);g.origin===d.origin&&I!=null?u=I+g.search+g.hash:_=!0}catch{}let v=o_(u,{relative:i}),x=b_(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(d){r&&r(d),d.defaultPrevented||x(d)}return w.createElement("a",ou({},f,{href:y||v,onClick:_||s?r:p,ref:n,target:l}))});var yf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(yf||(yf={}));var vf;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(vf||(vf={}));function b_(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=vc(),l=os(),u=Zm(t,{relative:o});return w.useCallback(c=>{if(P_(c,n)){c.preventDefault();let f=r!==void 0?r:Eo(l)===Eo(u);a(t,{replace:f,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const ng="/assets/budget-954e8633.png",rg="/assets/date-41afa211.png",ig="/assets/location-78db43e9.png",sg="/assets/media-f7ac3fd5.png",rn={budget:ng,date:rg,location:ig,media:sg},D_={HOME:{path:"home"},VIEW_KOOP:{path:"viewKoop"}},Ae={HOME:{path:"/",title:"Home"},MY_ACCOUNT:{path:"/my_acc",title:"My Account"},VIEW_KOOP:{path:"/view",title:"Koop"},SUBCRIPTION:{path:"/sub",title:"Subscription"},LOGIN:{path:"/login",title:"My Account"},LEGAL:{path:"/legal",title:"Koop"},INTRO:{path:"/intro",title:"Subscription"},TEST_REC:{path:"/test_rec",title:"Test Rect"}},wc=" max-w-[900px] overflow-hidden mx-auto min-h-[320pt]";function L_(t){var n;const e=(n=t==null?void 0:t.current)==null?void 0:n.value;return e===void 0?"":e}const er=L_;function V_({onLogoClick:t,small:e,user:n}){return h.jsxs("div",{className:"header bg-sky-500 flex flex-col",children:[h.jsxs("div",{className:`cont-logo  items-center flex
      
      ${e?" justify-around items-center ":"flex-col justify-center  "}
      
      
      `,children:[h.jsxs("div",{className:`self-end m-4 ${e?" flex-1 ":""}  `,children:[h.jsx(vt,{to:Ae.MY_ACCOUNT.path,children:h.jsx("img",{alt:"My Account",src:df,className:"rounded-full w-[30pt] mx-auto hover:outline cursor-pointer hover:outline-white  "})}),h.jsxs("div",{className:"text-center text-sm bg-white text-sky-500 rounded-lg w-fit mx-auto px-1 my-2 ",children:[h.jsx("div",{children:n.displayname}),h.jsxs("div",{children:[" ",n.phone]})]})]}),h.jsx(vt,{to:"/",children:h.jsx("img",{className:`cursor-pointer ${e?" flex-3 ":" -mt-[50pt] "}`,src:$m,width:e?160:100})}),h.jsx("p",{className:` p-2 text-center  transition-colors ease-in-out duration-150
          
          ${e?"text-sm flex-1 ":""}
          
          `,children:"100000 + of services and quick deals at your fingertips ..."})]}),h.jsx("div",{className:` gap-2 py-2 
      
      ${e?" h-[60pt] ":" h-[80pt] "}
      
      flex overflow-x-scroll w-[100vw]`,children:[...Array(20).fill(0)].map((r,i)=>h.jsx("div",{className:"bg-green-200  overflow-hidden min-w-[120pt] rounded-lg   ",children:h.jsx("img",{className:"w-[100%]  ",src:df})},i))})]})}function Cs({icon:t,text:e}){return h.jsxs("div",{className:"flex",children:[h.jsx("img",{src:t,width:20}),h.jsx("span",{children:e})]})}function M_({data:t,onKoopClicked:e}){const{date:n,budget:r,location:i,media:s}=t;return h.jsxs("div",{onClick:o=>e(t),className:"border-sky-100 md:w-[50%]  flex flex-col gap-2 cursor-pointer border my-2 p-2 rounded-lg hover:border-green-500 shadow-black/10  shadow-lg hover:bg-sky-slate-200",children:[h.jsxs("div",{className:" flex gap-2 text-sm  text-gray-400",children:[r&&h.jsx(Cs,{text:r+" $",icon:rn.budget}),n&&h.jsx(Cs,{text:n,icon:rn.date}),i&&h.jsx(Cs,{text:i,icon:rn.location}),s&&h.jsx(Cs,{text:"Media",icon:rn.media})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{children:t.text}),h.jsx("span",{className:"bg-green-700 text-xs p-1 rounded-lg text-white",children:"Exp. dans 22h"})]}),h.jsx("div",{className:"italic text-sm my-1 text-slate-400 ",children:"Posted by @DoctaRhyf"})]})]})}/**
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
 */const og=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},j_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ag={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(m=64)),r.push(n[c],n[f],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(og(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):j_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new U_;const m=s<<2|a>>4;if(r.push(m),u!==64){const y=a<<4&240|u>>2;if(r.push(y),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class U_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const F_=function(t){const e=og(t);return ag.encodeByteArray(e,!0)},To=function(t){return F_(t).replace(/\./g,"")},lg=function(t){try{return ag.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function B_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const z_=()=>B_().__FIREBASE_DEFAULTS__,H_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},W_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lg(t[1]);return e&&JSON.parse(e)},_c=()=>{try{return z_()||H_()||W_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ug=t=>{var e,n;return(n=(e=_c())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$_=t=>{const e=ug(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},cg=()=>{var t;return(t=_c())===null||t===void 0?void 0:t.config},dg=t=>{var e;return(e=_c())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class q_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function K_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[To(JSON.stringify(n)),To(JSON.stringify(o)),a].join(".")}/**
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function G_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function fg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Q_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J_(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hg(){try{return typeof indexedDB=="object"}catch{return!1}}function pg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Y_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const X_="FirebaseError";class ht extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=X_,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jn.prototype.create)}}class Jn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Z_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ht(i,a,r)}}function Z_(t,e){return t.replace(eI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const eI=/\{\$([^}]+)}/g;function tI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(wf(s)&&wf(o)){if(!Wi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function wf(t){return t!==null&&typeof t=="object"}/**
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
 */function Ur(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nI(t,e){const n=new rI(t,e);return n.subscribe.bind(n)}class rI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qa),i.error===void 0&&(i.error=Qa),i.complete===void 0&&(i.complete=Qa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qa(){}/**
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
 */const sI=1e3,oI=2,aI=4*60*60*1e3,lI=.5;function _f(t,e=sI,n=oI){const r=e*Math.pow(n,t),i=Math.round(lI*r*(Math.random()-.5)*2);return Math.min(aI,r+i)}/**
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
 */function ke(t){return t&&t._delegate?t._delegate:t}class ft{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rn="[DEFAULT]";/**
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
 */class uI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new q_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dI(e))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rn){return this.instances.has(e)}getOptions(e=Rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rn){return this.component?this.component.multipleInstances?e:Rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cI(t){return t===Rn?void 0:t}function dI(t){return t.instantiationMode==="EAGER"}/**
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
 */class fI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(F||(F={}));const hI={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},pI=F.INFO,mI={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},gI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=mI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oa{constructor(e){this.name=e,this._logLevel=pI,this._logHandler=gI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const yI=(t,e)=>e.some(n=>t instanceof n);let If,Ef;function vI(){return If||(If=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wI(){return Ef||(Ef=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mg=new WeakMap,au=new WeakMap,gg=new WeakMap,Ja=new WeakMap,Ic=new WeakMap;function _I(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mg.set(n,t)}).catch(()=>{}),Ic.set(e,t),e}function II(t){if(au.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});au.set(t,e)}let lu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return au.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function EI(t){lu=t(lu)}function SI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ya(this),e,...n);return gg.set(r,e.sort?e.sort():[e]),pn(r)}:wI().includes(t)?function(...e){return t.apply(Ya(this),e),pn(mg.get(this))}:function(...e){return pn(t.apply(Ya(this),e))}}function AI(t){return typeof t=="function"?SI(t):(t instanceof IDBTransaction&&II(t),yI(t,vI())?new Proxy(t,lu):t)}function pn(t){if(t instanceof IDBRequest)return _I(t);if(Ja.has(t))return Ja.get(t);const e=AI(t);return e!==t&&(Ja.set(t,e),Ic.set(e,t)),e}const Ya=t=>Ic.get(t);function TI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=pn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(pn(o.result),l.oldVersion,l.newVersion,pn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const kI=["get","getKey","getAll","getAllKeys","count"],PI=["put","add","delete","clear"],Xa=new Map;function Sf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xa.get(e))return Xa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=PI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Xa.set(e,s),s}EI(t=>({...t,get:(e,n,r)=>Sf(e,n)||t.get(e,n,r),has:(e,n)=>!!Sf(e,n)||t.has(e,n)}));/**
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
 */class CI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uu="@firebase/app",Af="0.9.18";/**
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
 */const zn=new oa("@firebase/app"),xI="@firebase/app-compat",NI="@firebase/analytics-compat",OI="@firebase/analytics",bI="@firebase/app-check-compat",DI="@firebase/app-check",LI="@firebase/auth",VI="@firebase/auth-compat",MI="@firebase/database",jI="@firebase/database-compat",UI="@firebase/functions",FI="@firebase/functions-compat",BI="@firebase/installations",zI="@firebase/installations-compat",HI="@firebase/messaging",WI="@firebase/messaging-compat",$I="@firebase/performance",qI="@firebase/performance-compat",KI="@firebase/remote-config",GI="@firebase/remote-config-compat",QI="@firebase/storage",JI="@firebase/storage-compat",YI="@firebase/firestore",XI="@firebase/firestore-compat",ZI="firebase",eE="10.3.1";/**
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
 */const cu="[DEFAULT]",tE={[uu]:"fire-core",[xI]:"fire-core-compat",[OI]:"fire-analytics",[NI]:"fire-analytics-compat",[DI]:"fire-app-check",[bI]:"fire-app-check-compat",[LI]:"fire-auth",[VI]:"fire-auth-compat",[MI]:"fire-rtdb",[jI]:"fire-rtdb-compat",[UI]:"fire-fn",[FI]:"fire-fn-compat",[BI]:"fire-iid",[zI]:"fire-iid-compat",[HI]:"fire-fcm",[WI]:"fire-fcm-compat",[$I]:"fire-perf",[qI]:"fire-perf-compat",[KI]:"fire-rc",[GI]:"fire-rc-compat",[QI]:"fire-gcs",[JI]:"fire-gcs-compat",[YI]:"fire-fst",[XI]:"fire-fst-compat","fire-js":"fire-js",[ZI]:"fire-js-all"};/**
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
 */const ko=new Map,du=new Map;function nE(t,e){try{t.container.addComponent(e)}catch(n){zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function At(t){const e=t.name;if(du.has(e))return zn.debug(`There were multiple attempts to register component ${e}.`),!1;du.set(e,t);for(const n of ko.values())nE(n,t);return!0}function Yn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const rE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mn=new Jn("app","Firebase",rE);/**
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
 */class iE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
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
 */const Fr=eE;function yg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mn.create("bad-app-name",{appName:String(i)});if(n||(n=cg()),!n)throw mn.create("no-options");const s=ko.get(i);if(s){if(Wi(n,s.options)&&Wi(r,s.config))return s;throw mn.create("duplicate-app",{appName:i})}const o=new fI(i);for(const l of du.values())o.addComponent(l);const a=new iE(n,r,o);return ko.set(i,a),a}function Ec(t=cu){const e=ko.get(t);if(!e&&t===cu&&cg())return yg();if(!e)throw mn.create("no-app",{appName:t});return e}function Ze(t,e,n){var r;let i=(r=tE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zn.warn(a.join(" "));return}At(new ft(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const sE="firebase-heartbeat-database",oE=1,$i="firebase-heartbeat-store";let Za=null;function vg(){return Za||(Za=TI(sE,oE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($i)}}}).catch(t=>{throw mn.create("idb-open",{originalErrorMessage:t.message})})),Za}async function aE(t){try{return await(await vg()).transaction($i).objectStore($i).get(wg(t))}catch(e){if(e instanceof ht)zn.warn(e.message);else{const n=mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zn.warn(n.message)}}}async function Tf(t,e){try{const r=(await vg()).transaction($i,"readwrite");await r.objectStore($i).put(e,wg(t)),await r.done}catch(n){if(n instanceof ht)zn.warn(n.message);else{const r=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(r.message)}}}function wg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const lE=1024,uE=30*24*60*60*1e3;class cE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=kf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=uE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=kf(),{heartbeatsToSend:n,unsentEntries:r}=dE(this._heartbeatsCache.heartbeats),i=To(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function kf(){return new Date().toISOString().substring(0,10)}function dE(t,e=lE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Pf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hg()?pg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await aE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Pf(t){return To(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function hE(t){At(new ft("platform-logger",e=>new CI(e),"PRIVATE")),At(new ft("heartbeat",e=>new cE(e),"PRIVATE")),Ze(uu,Af,t),Ze(uu,Af,"esm2017"),Ze("fire-js","")}hE("");/**
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
 */class xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xe.UNAUTHENTICATED=new xe(null),xe.GOOGLE_CREDENTIALS=new xe("google-credentials-uid"),xe.FIRST_PARTY=new xe("first-party-uid"),xe.MOCK_USER=new xe("mock-user");/**
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
 */let Br="10.3.1";/**
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
 */const xr=new oa("@firebase/firestore");function Po(t,...e){if(xr.logLevel<=F.DEBUG){const n=e.map(Ac);xr.debug(`Firestore (${Br}): ${t}`,...n)}}function Sc(t,...e){if(xr.logLevel<=F.ERROR){const n=e.map(Ac);xr.error(`Firestore (${Br}): ${t}`,...n)}}function _g(t,...e){if(xr.logLevel<=F.WARN){const n=e.map(Ac);xr.warn(`Firestore (${Br}): ${t}`,...n)}}function Ac(t){if(typeof t=="string")return t;try{/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${Br}) INTERNAL ASSERTION FAILED: `+t;throw Sc(e),new Error(e)}function _n(t,e){t||Z()}function aa(t,e){return t}/**
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
 */const Cf="ok",pE="cancelled",vi="unknown",b="invalid-argument",mE="deadline-exceeded",gE="not-found",yE="permission-denied",fu="unauthenticated",vE="resource-exhausted",Nr="failed-precondition",wE="aborted",_E="out-of-range",Ig="unimplemented",IE="internal",EE="unavailable";class O extends ht{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Eg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xe.UNAUTHENTICATED))}shutdown(){}}class AE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class TE{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(_n(typeof e.accessToken=="string"),new Eg(e.accessToken,new xe(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class kE{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=xe.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class PE{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new kE(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class CE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RE{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(_n(typeof e.token=="string"),new CE(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class xE{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class qi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qi&&e.projectId===this.projectId&&e.database===this.database}}class Ki{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ki.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ki?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class oe extends Ki{construct(e,n,r){return new oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(b,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const NE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends Ki{construct(e,n,r){return new Ue(e,n,r)}static isValidIdentifier(e){return NE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(b,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new O(b,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(b,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new O(b,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
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
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(oe.fromString(e))}static fromName(e){return new pe(oe.fromString(e).popFirst(5))}static empty(){return new pe(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new oe(e.slice()))}}/**
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
 */function Sg(t,e,n){if(!n)throw new O(b,`Function ${t}() cannot be called with an empty ${e}.`)}function Rf(t){if(!pe.isDocumentKey(t))throw new O(b,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xf(t){if(pe.isDocumentKey(t))throw new O(b,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function la(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function Tc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(b,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=la(t);throw new O(b,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ag(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */let Rs=null;function OE(){return Rs===null?Rs=function(){return 268435456+Math.round(2147483648*Math.random())}():Rs++,"0x"+Rs.toString(16)}/**
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
 */function bE(t){return t==null}function Co(t){return t===0&&1/t==-1/0}/**
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
 */const DE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Nf,M;function Of(t){if(t===void 0)return Sc("RPC_ERROR","HTTP error has no status"),vi;switch(t){case 200:return Cf;case 400:return Nr;case 401:return fu;case 403:return yE;case 404:return gE;case 409:return wE;case 416:return _E;case 429:return vE;case 499:return pE;case 500:return vi;case 501:return Ig;case 503:return EE;case 504:return mE;default:return t>=200&&t<300?Cf:t>=400&&t<500?Nr:t>=500&&t<600?IE:vi}}/**
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
 */(M=Nf||(Nf={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";class LE extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+n.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get P(){return!1}R(n,r,i,s,o){const a=OE(),l=this.I(n,r);Po("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(u,s,o),this.p(n,l,u,i).then(c=>(Po("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw _g("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}g(n,r,i,s,o,a){return this.R(n,r,i,s,o)}V(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Br}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}I(n,r){const i=DE[n];return`${this.m}/v1/${r}:${i}`}}{constructor(e,n){super(e),this.F=n}v(e,n){throw new Error("Not supported by FetchConnection")}async p(e,n,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.F(n,{method:"POST",headers:r,body:o})}catch(l){const u=l;throw new O(Of(u.status),"Request failed with error: "+u.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const u=(s=l==null?void 0:l.error)===null||s===void 0?void 0:s.message;throw new O(Of(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}/**
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
 */function VE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ME{static C(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=VE(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Tg(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */function bf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ua(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class jE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new jE("Invalid base64 string: "+s):s}}(e);return new Mt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const UE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hn(t){if(_n(!!t),typeof t=="string"){let e=0;const n=UE.exec(t);if(_n(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:se(t.seconds),nanos:se(t.nanos)}}function se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gi(t){return typeof t=="string"?Mt.fromBase64String(t):Mt.fromUint8Array(t)}/**
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
 */class ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(b,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(b,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(b,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(b,"Timestamp seconds out of range: "+e)}static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function kg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pg(t){const e=t.mapValue.fields.__previous_value__;return kg(e)?Pg(e):e}function Qi(t){const e=Hn(t.mapValue.fields.__local_write_time__.timestampValue);return new ze(e.seconds,e.nanos)}/**
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
 */const xs={fields:{__type__:{stringValue:"__max__"}}};function Wn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kg(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:Z()}function Ro(t,e){if(t===e)return!0;const n=Wn(t);if(n!==Wn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qi(t).isEqual(Qi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Hn(i.timestampValue),a=Hn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Gi(i.bytesValue).isEqual(Gi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return se(i.geoPointValue.latitude)===se(s.geoPointValue.latitude)&&se(i.geoPointValue.longitude)===se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return se(i.integerValue)===se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=se(i.doubleValue),a=se(s.doubleValue);return o===a?Co(o)===Co(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Tg(t.arrayValue.values||[],e.arrayValue.values||[],Ro);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(bf(o)!==bf(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ro(o[l],a[l])))return!1;return!0}(t,e);default:return Z()}}function Ji(t,e){return(t.values||[]).find(n=>Ro(n,e))!==void 0}function xo(t,e){if(t===e)return 0;const n=Wn(t),r=Wn(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=se(s.integerValue||s.doubleValue),l=se(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Df(t.timestampValue,e.timestampValue);case 4:return Df(Qi(t),Qi(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Gi(s),l=Gi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=le(a[u],l[u]);if(c!==0)return c}return le(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=le(se(s.latitude),se(o.latitude));return a!==0?a:le(se(s.longitude),se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=xo(a[u],l[u]);if(c)return c}return le(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===xs&&o===xs)return 0;if(s===xs)return 1;if(o===xs)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const m=le(l[f],c[f]);if(m!==0)return m;const y=xo(a[l[f]],u[c[f]]);if(y!==0)return y}return le(l.length,c.length)}(t.mapValue,e.mapValue);default:throw Z()}}function Df(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Hn(t),r=Hn(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function Lf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Cg(t){return!!t&&"arrayValue"in t}function Vf(t){return!!t&&"nullValue"in t}function Mf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function el(t){return!!t&&"mapValue"in t}function wi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ua(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=wi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wi(t.arrayValue.values[n]);return e}return Object.assign({},t)}class jf{constructor(e,n){this.position=e,this.inclusive=n}}/**
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
 */class Rg{}class pt extends Rg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new FE(e,n,r):n==="array-contains"?new HE(e,r):n==="in"?new WE(e,r):n==="not-in"?new $E(e,r):n==="array-contains-any"?new qE(e,r):new pt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new BE(e,r):new zE(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(xo(n,this.value)):n!==null&&Wn(this.value)===Wn(n)&&this.matchesComparison(xo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class as extends Rg{constructor(e,n){super(),this.filters=e,this.op=n,this.S=null}static create(e,n){return new as(e,n)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.S!==null||(this.S=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.S}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.N(n=>n.isInequality());return e!==null?e.field:null}N(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}class FE extends pt{constructor(e,n,r){super(e,n,r),this.key=pe.fromName(r.referenceValue)}matches(e){const n=pe.comparator(e.key,this.key);return this.matchesComparison(n)}}class BE extends pt{constructor(e,n){super(e,"in",n),this.keys=xg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zE extends pt{constructor(e,n){super(e,"not-in",n),this.keys=xg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>pe.fromName(r.referenceValue))}class HE extends pt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cg(n)&&Ji(n.arrayValue,this.value)}}class WE extends pt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ji(this.value.arrayValue,n)}}class $E extends pt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ji(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ji(this.value.arrayValue,n)}}class qE extends pt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ji(this.value.arrayValue,r))}}/**
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
 */class _i{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class we{constructor(e){this.timestamp=e}static fromTimestamp(e){return new we(e)}static min(){return new we(new ze(0,0))}static max(){return new we(new ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class No{constructor(e,n){this.comparator=e,this.root=n||he.EMPTY}insert(e,n){return new No(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,he.BLACK,null,null))}remove(e){return new No(this.comparator,this.root.remove(e,this.comparator).copy(null,null,he.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ns(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ns(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ns(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ns(this.root,e,this.comparator,!0)}}class Ns{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class he{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??he.RED,this.left=i??he.EMPTY,this.right=s??he.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new he(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return he.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return he.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}he.EMPTY=null,he.RED=!0,he.BLACK=!1;he.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new he(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Oo{constructor(e){this.comparator=e,this.data=new No(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Uf(this.data.getIterator())}getIteratorFrom(e){return new Uf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Oo)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Oo(this.comparator);return n.data=e,n}}class Uf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Yi{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new Yi([])}unionWith(e){let n=new Oo(Ue.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yi(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Tg(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!el(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wi(n)}setAll(e){let n=Ue.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=wi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());el(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ro(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];el(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ua(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _t(wi(this.value))}}/**
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
 */class Kt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Kt(e,0,we.min(),we.min(),we.min(),_t.empty(),0)}static newFoundDocument(e,n,r,i){return new Kt(e,1,n,we.min(),r,i,0)}static newNoDocument(e,n){return new Kt(e,2,n,we.min(),we.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new Kt(e,3,n,we.min(),we.min(),_t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class KE{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.O=null}}function Ff(t,e=null,n=[],r=[],i=null,s=null,o=null){return new KE(t,e,n,r,i,s,o)}/**
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
 */class kc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.q=null,this.B=null,this.$=null,this.startAt,this.endAt}}function Pc(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ca(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function GE(t){return t.collectionGroup!==null}function QE(t){const e=aa(t);if(e.q===null){e.q=[];const n=ca(e),r=Pc(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new _i(n)),e.q.push(new _i(Ue.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.q.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new _i(Ue.keyField(),s))}}}return e.q}function JE(t){const e=aa(t);return e.B||(e.B=YE(e,QE(t))),e.B}function YE(t,e){if(t.limitType==="F")return Ff(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new _i(i.field,s)});const n=t.endAt?new jf(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new jf(t.startAt.position,t.startAt.inclusive):null;return Ff(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function hu(t,e){e.getFirstInequalityField(),ca(t);const n=t.filters.concat([e]);return new kc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
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
 */function XE(t,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Co(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,i){if(r.useProto3Json){if(isNaN(i))return{doubleValue:"NaN"};if(i===1/0)return{doubleValue:"Infinity"};if(i===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Co(i)?"-0":i}}(t,e)}/**
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
 */class da{constructor(){this._=void 0}}class ZE extends da{}class eS extends da{constructor(e){super(),this.elements=e}}class tS extends da{constructor(e){super(),this.elements=e}}class nS extends da{constructor(e,n){super(),this.serializer=e,this.L=n}}class Ii{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ii}static exists(e){return new Ii(void 0,e)}static updateTime(e){return new Ii(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class fa{}class Ng extends fa{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Og extends fa{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class rS extends fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iS extends fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const sS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),oS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),aS=(()=>({and:"AND",or:"OR"}))();class lS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function pu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function cS(t,e){return pu(t,e.toTimestamp())}function Bf(t){return _n(!!t),we.fromTimestamp(function(n){const r=Hn(n);return new ze(r.seconds,r.nanos)}(t))}function Cc(t,e){return function(r){return new oe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function mu(t,e){return Cc(t.databaseId,e.path)}function dS(t,e){const n=function(i){const s=oe.fromString(i);return _n(Dg(s)),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new O(b,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(b,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new pe(function(i){return _n(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(n))}function zf(t,e){return Cc(t.databaseId,e)}function fS(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Hf(t,e,n){return{name:mu(t,e),fields:n.value.mapValue.fields}}function hS(t,e){let n;if(e instanceof Ng)n={update:Hf(t,e.key,e.value)};else if(e instanceof rS)n={delete:mu(t,e.key)};else if(e instanceof Og)n={update:Hf(t,e.key,e.data),updateMask:vS(e.fieldMask)};else{if(!(e instanceof iS))return Z();n={verify:mu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ZE)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof eS)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof tS)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof nS)return{fieldPath:o.field.canonicalString(),increment:a.L};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:cS(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function pS(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=zf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=zf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return bg(as.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:tr(f.field),direction:mS(f.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.useProto3Json||bE(u)?u:{value:u}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function mS(t){return sS[t]}function gS(t){return oS[t]}function yS(t){return aS[t]}function tr(t){return{fieldPath:t.canonicalString()}}function bg(t){return t instanceof pt?function(n){if(n.op==="=="){if(Mf(n.value))return{unaryFilter:{field:tr(n.field),op:"IS_NAN"}};if(Vf(n.value))return{unaryFilter:{field:tr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Mf(n.value))return{unaryFilter:{field:tr(n.field),op:"IS_NOT_NAN"}};if(Vf(n.value))return{unaryFilter:{field:tr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tr(n.field),op:gS(n.op),value:n.value}}}(t):t instanceof as?function(n){const r=n.getFilters().map(i=>bg(i));return r.length===1?r[0]:{compositeFilter:{op:yS(n.op),filters:r}}}(t):Z()}function vS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Dg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function Rc(t){return new lS(t,!0)}/**
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
 */class wS extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.X=!1}tt(){if(this.X)throw new O(Nr,"The client has already been terminated.")}R(e,n,r){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.R(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===fu&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(vi,i.toString())})}g(e,n,r,i){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.g(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===fu&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(vi,s.toString())})}terminate(){this.X=!0}}async function _S(t,e){const n=aa(t),r=fS(n.serializer)+"/documents",i={writes:e.map(s=>hS(n.serializer,s))};await n.R("Commit",r,i)}async function IS(t,e){const n=aa(t),r=pS(n.serializer,JE(e));return(await n.g("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(o,a,l){const u=dS(o,a.name),c=Bf(a.updateTime),f=a.createTime?Bf(a.createTime):we.min(),m=new _t({mapValue:{fields:a.fields}}),y=Kt.newFoundDocument(u,c,f,m);return l&&y.setHasCommittedMutations(),l?y.setHasCommittedMutations():y}(n.serializer,i.document,void 0))}/**
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
 */const Ei=new Map;function Lg(t){if(t._terminated)throw new O(Nr,"The client has already been terminated.");if(!Ei.has(t)){Po("ComponentProvider","Initializing Datastore");const e=function(s){return new LE(s,fetch.bind(null))}(function(s,o,a,l){return new xE(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Ag(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=Rc(t._databaseId),r=function(s,o,a,l){return new wS(s,o,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);Ei.set(t,r)}return Ei.get(t)}class Wf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(b,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(b,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,l){if(o===!0&&l===!0)throw new O(b,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ag((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(b,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(b,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(b,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}let ha=class{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(Nr,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(Nr,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new SE;switch(r.type){case"firstParty":return new PE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(b,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ei.get(n);r&&(Po("ComponentProvider","Removing Datastore"),Ei.delete(n),r.terminate())}(this),Promise.resolve()}};function ES(t,e){const n=typeof t=="object"?t:Ec(),r=typeof t=="string"?t:e||"(default)",i=Yn(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=$_("firestore");s&&SS(i,...s)}return i}function SS(t,e,n,r={}){var i;const s=(t=Tc(t,ha))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&_g("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=xe.MOCK_USER;else{a=K_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new O(b,"mockUserToken must contain 'sub' or 'user_id' field!");l=new xe(u)}t._authCredentials=new AE(new Eg(a,l))}}/**
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
 */class Xn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xn(this.firestore,e,this._query)}}class He{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}}class gn extends Xn{constructor(e,n,r){super(e,n,function(s){return new kc(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new pe(e))}withConverter(e){return new gn(this.firestore,e,this._path)}}function AS(t,e,...n){if(t=ke(t),Sg("collection","path",e),t instanceof ha){const r=oe.fromString(e,...n);return xf(r),new gn(t,null,r)}{if(!(t instanceof He||t instanceof gn))throw new O(b,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return xf(r),new gn(t.firestore,null,r)}}function TS(t,e,...n){if(t=ke(t),arguments.length===1&&(e=ME.C()),Sg("doc","path",e),t instanceof ha){const r=oe.fromString(e,...n);return Rf(r),new He(t,null,new pe(r))}{if(!(t instanceof He||t instanceof gn))throw new O(b,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return Rf(r),new He(t.firestore,t instanceof gn?t.converter:null,new pe(r))}}/**
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
 */class Or{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Or(Mt.fromBase64String(e))}catch(n){throw new O(b,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Or(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class xc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(b,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Vg{constructor(e){this._methodName=e}}/**
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
 */class Nc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(b,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(b,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */const kS=/^__.*__$/;class PS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Og(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ng(e,this.data,n,this.fieldTransforms)}}function Mg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Oc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.rt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get nt(){return this.settings.nt}it(e){return new Oc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}st(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.it({path:r,ot:!1});return i.ut(e),i}_t(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.it({path:r,ot:!1});return i.rt(),i}lt(e){return this.it({path:void 0,ot:!0})}ct(e){return bo(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.dt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}rt(){if(this.path)for(let e=0;e<this.path.length;e++)this.ut(this.path.get(e))}ut(e){if(e.length===0)throw this.ct("Document fields must not be empty");if(Mg(this.nt)&&kS.test(e))throw this.ct('Document fields cannot begin and end with "__"')}}class CS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Rc(e)}ft(e,n,r,i=!1){return new Oc({nt:e,methodName:n,dt:r,path:Ue.emptyPath(),ot:!1,ht:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jg(t){const e=t._freezeSettings(),n=Rc(t._databaseId);return new CS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function RS(t,e,n,r,i,s={}){const o=t.ft(s.merge||s.mergeFields?2:0,e,n,i);Bg("Data must be an object, but it was:",o,r);const a=Ug(r,o);let l,u;if(s.merge)l=new Yi(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const m=NS(e,f,n);if(!o.contains(m))throw new O(b,`Field '${m}' is specified in your field mask but missing from your input data.`);bS(c,m)||c.push(m)}l=new Yi(c),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new PS(new _t(a),l,u)}function xS(t,e,n,r=!1){return bc(n,t.ft(r?4:3,e))}function bc(t,e){if(Fg(t=ke(t)))return Bg("Unsupported field value:",e,t),Ug(t,e);if(t instanceof Vg)return function(r,i){if(!Mg(i.nt))throw i.ct(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ct(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ot&&e.nt!==4)throw e.ct("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=bc(a,i.lt(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return XE(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ze.fromDate(r);return{timestampValue:pu(i.serializer,s)}}if(r instanceof ze){const s=new ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pu(i.serializer,s)}}if(r instanceof Nc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Or)return{bytesValue:uS(i.serializer,r._byteString)};if(r instanceof He){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.ct(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Cc(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.ct(`Unsupported field value: ${la(r)}`)}(t,e)}function Ug(t,e){const n={};return function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ua(t,(r,i)=>{const s=bc(i,e.st(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Fg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof Nc||t instanceof Or||t instanceof He||t instanceof Vg)}function Bg(t,e,n){if(!Fg(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=la(n);throw r==="an object"?e.ct(t+" a custom object"):e.ct(t+" "+r)}}function NS(t,e,n){if((e=ke(e))instanceof xc)return e._internalPath;if(typeof e=="string")return zg(t,e);throw bo("Field path arguments must be of type string or ",t,!1,void 0,n)}const OS=new RegExp("[~\\*/\\[\\]]");function zg(t,e,n){if(e.search(OS)>=0)throw bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xc(...e.split("."))._internalPath}catch{throw bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bo(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new O(b,a+t+l)}function bS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class DS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Hg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Wg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Hg extends DS{data(){return super.data()}}class LS{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function Wg(t,e){return typeof e=="string"?zg(t,e):e instanceof xc?e._internalPath:e._delegate._internalPath}/**
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
 */class Dc{}class $g extends Dc{}function VS(t,e,...n){let r=[];e instanceof Dc&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Vc).length,a=s.filter(l=>l instanceof Lc).length;if(o>1||o>0&&a>0)throw new O(b,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Lc extends $g{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Lc(e,n,r)}_apply(e){const n=this._parse(e);return qg(e._query,n),new Xn(e.firestore,e.converter,hu(e._query,n))}_parse(e){const n=jg(e.firestore);return function(s,o,a,l,u,c,f){let m;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new O(b,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){qf(f,c);const y=[];for(const _ of f)y.push($f(l,s,_));m={arrayValue:{values:y}}}else m=$f(l,s,f)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||qf(f,c),m=xS(a,o,f,c==="in"||c==="not-in");return pt.create(u,c,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Vc extends Dc{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Vc(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:as.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)qg(o,l),o=hu(o,l)}(e._query,n),new Xn(e.firestore,e.converter,hu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Mc extends $g{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Mc(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new O(b,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new O(b,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new _i(s,o);return function(u,c){if(Pc(u)===null){const f=ca(u);f!==null&&Kg(u,f,c.field)}}(i,a),a}(e._query,this._field,this._direction);return new Xn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new kc(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function MS(t,e="asc"){const n=e,r=Wg("orderBy",t);return Mc._create(r,n)}function $f(t,e,n){if(typeof(n=ke(n))=="string"){if(n==="")throw new O(b,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!GE(e)&&n.indexOf("/")!==-1)throw new O(b,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(oe.fromString(n));if(!pe.isDocumentKey(r))throw new O(b,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Lf(t,new pe(r))}if(n instanceof He)return Lf(t,n._key);throw new O(b,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${la(n)}.`)}function qf(t,e){if(!Array.isArray(t)||t.length===0)throw new O(b,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qg(t,e){if(e.isInequality()){const r=ca(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new O(b,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Pc(t);s!==null&&Kg(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new O(b,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(b,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Kg(t,e,n){if(!n.isEqual(e))throw new O(b,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */function jS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class US extends class{convertValue(n,r="none"){switch(Wn(n)){case 0:return null;case 1:return n.booleanValue;case 2:return se(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,r);case 5:return n.stringValue;case 6:return this.convertBytes(Gi(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,r);case 10:return this.convertObject(n.mapValue,r);default:throw Z()}}convertObject(n,r){return this.convertObjectMap(n.fields,r)}convertObjectMap(n,r="none"){const i={};return ua(n,(s,o)=>{i[s]=this.convertValue(o,r)}),i}convertGeoPoint(n){return new Nc(se(n.latitude),se(n.longitude))}convertArray(n,r){return(n.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(n,r){switch(r){case"previous":const i=Pg(n);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(Qi(n));default:return null}}convertTimestamp(n){const r=Hn(n);return new ze(r.seconds,r.nanos)}convertDocumentKey(n,r){const i=oe.fromString(n);_n(Dg(i));const s=new qi(i.get(1),i.get(3)),o=new pe(i.popFirst(5));return s.isEqual(r)||Sc(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Or(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,n)}}function FS(t){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new O(Ig,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Tc(t,Xn))._query);const e=Lg(t.firestore),n=new US(t.firestore);return IS(e,t._query).then(r=>{const i=r.map(s=>new Hg(t.firestore,n,s.key,s,t.converter));return t._query.limitType==="L"&&i.reverse(),new LS(t,i)})}function BS(t,e,n){const r=jS((t=Tc(t,He)).converter,e,n),i=RS(jg(t.firestore),"setDoc",t._key,r,t.converter!==null,n);return _S(Lg(t.firestore),[i.toMutation(t._key,Ii.none())])}(function(){(function(n){Br=n})(`${Fr}_lite`),At(new ft("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new ha(new TE(e.getProvider("auth-internal")),new RE(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new O(b,'"projectId" not provided in firebase.initializeApp.');return new qi(a.options.projectId,l)}(i,n),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Ze("firestore-lite","4.1.3",""),Ze("firestore-lite","4.1.3","esm2017")})();let Os;const zS=new Uint8Array(16);function HS(){if(!Os&&(Os=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Os))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Os(zS)}const de=[];for(let t=0;t<256;++t)de.push((t+256).toString(16).slice(1));function WS(t,e=0){return(de[t[e+0]]+de[t[e+1]]+de[t[e+2]]+de[t[e+3]]+"-"+de[t[e+4]]+de[t[e+5]]+"-"+de[t[e+6]]+de[t[e+7]]+"-"+de[t[e+8]]+de[t[e+9]]+"-"+de[t[e+10]]+de[t[e+11]]+de[t[e+12]]+de[t[e+13]]+de[t[e+14]]+de[t[e+15]]).toLowerCase()}const $S=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Kf={randomUUID:$S};function qS(t,e,n){if(Kf.randomUUID&&!e&&!t)return Kf.randomUUID();t=t||{};const r=t.random||(t.rng||HS)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return WS(r)}var KS="firebase",GS="10.3.1";/**
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
 */Ze(KS,GS,"app");function jc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}/**
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
 */function Gf(t){return t!==void 0&&t.getResponse!==void 0}function Gg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QS=Gg,Qg=new Jn("auth","Firebase",Gg());/**
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
 */const Do=new oa("@firebase/auth");function JS(t,...e){Do.logLevel<=F.WARN&&Do.warn(`Auth (${Fr}): ${t}`,...e)}function Ks(t,...e){Do.logLevel<=F.ERROR&&Do.error(`Auth (${Fr}): ${t}`,...e)}/**
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
 */function jt(t,...e){throw Uc(t,...e)}function We(t,...e){return Uc(t,...e)}function YS(t,e,n){const r=Object.assign(Object.assign({},QS()),{[e]:n});return new Jn("auth","Firebase",r).create(e,{appName:t.name})}function Uc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qg.create(t,...e)}function N(t,e,...n){if(!t)throw Uc(e,...n)}function xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ks(e),new Error(e)}function Ut(t,e){t||xt(e)}/**
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
 */function gu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Jg(){return Qf()==="http:"||Qf()==="https:"}function Qf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function XS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jg()||fg()||"connection"in navigator)?navigator.onLine:!0}function ZS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ls{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ut(n>e,"Short delay should be less than long delay!"),this.isMobile=G_()||Q_()}get(){return XS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fc(t,e){Ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Yg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const eA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tA=new ls(3e4,6e4);function Tn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bt(t,e,n,r,i={}){return Xg(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ur(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Yg.fetch()(Zg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Xg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},eA),e);try{const i=new nA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw oi(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw oi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw oi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw oi(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw YS(t,c,u);jt(t,c)}}catch(i){if(i instanceof ht)throw i;jt(t,"network-request-failed",{message:String(i)})}}async function pa(t,e,n,r,i={}){const s=await Bt(t,e,n,r,i);return"mfaPendingCredential"in s&&jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Zg(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Fc(t.config,i):`${t.config.apiScheme}://${i}`}class nA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(We(this.auth,"network-request-failed")),tA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function oi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=We(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function rA(t){return(await Bt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */async function iA(t,e){return Bt(t,"POST","/v1/accounts:delete",e)}async function sA(t,e){return Bt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oA(t,e=!1){const n=ke(t),r=await n.getIdToken(e),i=Bc(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Si(tl(i.auth_time)),issuedAtTime:Si(tl(i.iat)),expirationTime:Si(tl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function tl(t){return Number(t)*1e3}function Bc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ks("JWT malformed, contained fewer than 3 sections"),null;try{const i=lg(n);return i?JSON.parse(i):(Ks("Failed to decode base64 JWT payload"),null)}catch(i){return Ks("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function aA(t){const e=Bc(t);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ht&&lA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class uA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ey{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Si(this.lastLoginAt),this.creationTime=Si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Xi(t,sA(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fA(s.providerUserInfo):[],a=dA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ey(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function cA(t){const e=ke(t);await Lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fA(t){return t.map(e=>{var{providerId:n}=e,r=jc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function hA(t,e){const n=await Xg(t,{},async()=>{const r=Ur({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Zg(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Yg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):aA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await hA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Zi;return r&&(N(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zi,this.toJSON())}_performRefresh(){return xt("not implemented")}}/**
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
 */function Wt(t,e){N(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=jc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ey(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Xi(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return oA(this,e)}reload(){return cA(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Lo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xi(this,iA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:I,isAnonymous:S,providerData:T,stsTokenManager:k}=n;N(g&&k,e,"internal-error");const P=Zi.fromJSON(this.name,k);N(typeof g=="string",e,"internal-error"),Wt(f,e.name),Wt(m,e.name),N(typeof I=="boolean",e,"internal-error"),N(typeof S=="boolean",e,"internal-error"),Wt(y,e.name),Wt(_,e.name),Wt(v,e.name),Wt(x,e.name),Wt(p,e.name),Wt(d,e.name);const U=new Vn({uid:g,auth:e,email:m,emailVerified:I,displayName:f,isAnonymous:S,photoURL:_,phoneNumber:y,tenantId:v,stsTokenManager:P,createdAt:p,lastLoginAt:d});return T&&Array.isArray(T)&&(U.providerData=T.map(A=>Object.assign({},A))),x&&(U._redirectEventId=x),U}static async _fromIdTokenResponse(e,n,r=!1){const i=new Zi;i.updateFromServerResponse(n);const s=new Vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Lo(s),s}}/**
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
 */const Jf=new Map;function Nt(t){Ut(t instanceof Function,"Expected a class definition");let e=Jf.get(t);return e?(Ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jf.set(t,e),e)}/**
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
 */class ty{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ty.type="NONE";const Yf=ty;/**
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
 */function Gs(t,e,n){return`firebase:${t}:${e}:${n}`}class Ir{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Gs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Gs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ir(Nt(Yf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Nt(Yf);const o=Gs(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=Vn._fromJSON(e,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ir(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ir(s,e,r))}}/**
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
 */function Xf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ny(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oy(e))return"Blackberry";if(ay(e))return"Webos";if(zc(e))return"Safari";if((e.includes("chrome/")||ry(e))&&!e.includes("edge/"))return"Chrome";if(sy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ny(t=Ee()){return/firefox\//i.test(t)}function zc(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ry(t=Ee()){return/crios\//i.test(t)}function iy(t=Ee()){return/iemobile/i.test(t)}function sy(t=Ee()){return/android/i.test(t)}function oy(t=Ee()){return/blackberry/i.test(t)}function ay(t=Ee()){return/webos/i.test(t)}function ma(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pA(t=Ee()){var e;return ma(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mA(){return J_()&&document.documentMode===10}function ly(t=Ee()){return ma(t)||sy(t)||ay(t)||oy(t)||/windows phone/i.test(t)||iy(t)}function gA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function uy(t,e=[]){let n;switch(t){case"Browser":n=Xf(Ee());break;case"Worker":n=`${Xf(Ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fr}/${r}`}/**
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
 */class yA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vA(t,e={}){return Bt(t,"GET","/v2/passwordPolicy",Tn(t,e))}/**
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
 */const wA=6;class _A{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class IA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zf(this),this.idTokenSubscription=new Zf(this),this.beforeStateQueue=new yA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ir.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ke(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vA(this),n=new _A(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nt(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Ir.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&JS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zr(t){return ke(t)}class Zf{constructor(e){this.auth=e,this.observer=null,this.addObserver=nI(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function EA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function cy(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=We("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",EA().appendChild(r)})}function dy(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function SA(t,e){const n=Yn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Wi(s,e??{}))return i;jt(i,"already-initialized")}return n.initialize({options:e})}function AA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function TA(t,e,n){const r=zr(t);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=fy(e),{host:o,port:a}=kA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||PA()}function fy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kA(t){const e=fy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:eh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:eh(o)}}}function eh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Hc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xt("not implemented")}_getIdTokenResponse(e){return xt("not implemented")}_linkToIdToken(e,n){return xt("not implemented")}_getReauthenticationResolver(e){return xt("not implemented")}}/**
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
 */async function Er(t,e){return pa(t,"POST","/v1/accounts:signInWithIdp",Tn(t,e))}/**
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
 */const CA="http://localhost";class $n extends Hc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=jc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new $n(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Er(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Er(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Er(e,n)}buildRequest(){const e={requestUri:CA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ur(n)}return e}}/**
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
 */async function RA(t,e){return Bt(t,"POST","/v1/accounts:sendVerificationCode",Tn(t,e))}async function xA(t,e){return pa(t,"POST","/v1/accounts:signInWithPhoneNumber",Tn(t,e))}async function NA(t,e){const n=await pa(t,"POST","/v1/accounts:signInWithPhoneNumber",Tn(t,e));if(n.temporaryProof)throw oi(t,"account-exists-with-different-credential",n);return n}const OA={USER_NOT_FOUND:"user-not-found"};async function bA(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return pa(t,"POST","/v1/accounts:signInWithPhoneNumber",Tn(t,n),OA)}/**
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
 */class Ai extends Hc{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ai({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ai({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return xA(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return NA(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return bA(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ai({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */class hy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class us extends hy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jt extends us{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jt.PROVIDER_ID="facebook.com";/**
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
 */class Yt extends us{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $n._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yt.credential(n,r)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
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
 */class Xt extends us{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com";Xt.PROVIDER_ID="github.com";/**
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
 */class Zt extends us{constructor(){super("twitter.com")}static credential(e,n){return $n._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.TWITTER_SIGN_IN_METHOD="twitter.com";Zt.PROVIDER_ID="twitter.com";/**
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
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Vn._fromIdTokenResponse(e,r,i),o=th(r);return new br({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=th(r);return new br({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function th(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Vo extends ht{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Vo(e,n,r,i)}}function py(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Vo._fromErrorAndOperation(t,s,e,r):s})}async function DA(t,e,n=!1){const r=await Xi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return br._forOperation(t,"link",r)}/**
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
 */async function LA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Xi(t,py(r,i,e,t),n);N(s.idToken,r,"internal-error");const o=Bc(s.idToken);N(o,r,"internal-error");const{sub:a}=o;return N(t.uid===a,r,"user-mismatch"),br._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),s}}/**
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
 */async function my(t,e,n=!1){const r="signIn",i=await py(t,r,e),s=await br._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function VA(t,e){return my(zr(t),e)}function MA(t,e,n,r){return ke(t).onIdTokenChanged(e,n,r)}function jA(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}/**
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
 */function UA(t,e){return Bt(t,"POST","/v2/accounts/mfaEnrollment:start",Tn(t,e))}const Mo="__sak";/**
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
 */class gy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mo,"1"),this.storage.removeItem(Mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function FA(){const t=Ee();return zc(t)||ma(t)}const BA=1e3,zA=10;class yy extends gy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=FA()&&gA(),this.fallbackToPolling=ly(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);mA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},BA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yy.type="LOCAL";const HA=yy;/**
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
 */class vy extends gy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vy.type="SESSION";const wy=vy;/**
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
 */function WA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ga{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ga(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await WA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ga.receivers=[];/**
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
 */function Wc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $A{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Wc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function te(){return window}function qA(t){te().location.href=t}/**
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
 */function $c(){return typeof te().WorkerGlobalScope<"u"&&typeof te().importScripts=="function"}async function KA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QA(){return $c()?self:null}/**
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
 */const _y="firebaseLocalStorageDb",JA=1,jo="firebaseLocalStorage",Iy="fbase_key";class cs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ya(t,e){return t.transaction([jo],e?"readwrite":"readonly").objectStore(jo)}function YA(){const t=indexedDB.deleteDatabase(_y);return new cs(t).toPromise()}function yu(){const t=indexedDB.open(_y,JA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jo,{keyPath:Iy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jo)?e(r):(r.close(),await YA(),e(await yu()))})})}async function nh(t,e,n){const r=ya(t,!0).put({[Iy]:e,value:n});return new cs(r).toPromise()}async function XA(t,e){const n=ya(t,!1).get(e),r=await new cs(n).toPromise();return r===void 0?null:r.value}function rh(t,e){const n=ya(t,!0).delete(e);return new cs(n).toPromise()}const ZA=800,e1=3;class Ey{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>e1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $c()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ga._getInstance(QA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KA(),!this.activeServiceWorker)return;this.sender=new $A(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yu();return await nh(e,Mo,"1"),await rh(e,Mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>nh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>XA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ya(i,!1).getAll();return new cs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ey.type="LOCAL";const t1=Ey;/**
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
 */function n1(t,e){return Bt(t,"POST","/v2/accounts/mfaSignIn:start",Tn(t,e))}/**
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
 */const r1=500,i1=6e4,bs=1e12;class s1{constructor(e){this.auth=e,this.counter=bs,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new o1(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||bs;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||bs;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||bs;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class o1{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;N(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=a1(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},i1)},r1))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function a1(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const nl=dy("rcb"),l1=new ls(3e4,6e4),u1="https://www.google.com/recaptcha/api.js?";class c1{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=te().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return N(d1(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Gf(te().grecaptcha)?Promise.resolve(te().grecaptcha):new Promise((r,i)=>{const s=te().setTimeout(()=>{i(We(e,"network-request-failed"))},l1.get());te()[nl]=()=>{te().clearTimeout(s),delete te()[nl];const a=te().grecaptcha;if(!a||!Gf(a)){i(We(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const f=l(u,c);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${u1}?${Ur({onload:nl,render:"explicit",hl:n})}`;cy(o).catch(()=>{clearTimeout(s),i(We(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=te().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function d1(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class f1{async load(e){return new s1(e)}clearedOneInstance(){}}/**
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
 */const Sy="recaptcha",h1={theme:"light",type:"image"};class p1{constructor(e,n,r=Object.assign({},h1)){this.parameters=r,this.type=Sy,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=zr(e),this.isInvisible=this.parameters.size==="invisible",N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;N(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new f1:new c1,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){N(!this.parameters.sitekey,this.auth,"argument-error"),N(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=te()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){N(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){N(Jg()&&!$c(),this.auth,"internal-error"),await m1(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await rA(this.auth);N(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return N(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function m1(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class g1{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ai._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function y1(t,e,n){const r=zr(t),i=await v1(r,e,ke(n));return new g1(i,s=>VA(r,s))}async function v1(t,e,n){var r;const i=await n.verify();try{N(typeof i=="string",t,"argument-error"),N(n.type===Sy,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return N(o.type==="enroll",t,"internal-error"),(await UA(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{N(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return N(a,t,"missing-multi-factor-info"),(await n1(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await RA(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}/**
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
 */function w1(t,e){return e?Nt(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qc extends Hc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Er(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Er(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Er(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _1(t){return my(t.auth,new qc(t),t.bypassAuthState)}function I1(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),LA(n,new qc(t),t.bypassAuthState)}async function E1(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),DA(n,new qc(t),t.bypassAuthState)}/**
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
 */class Ay{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _1;case"linkViaPopup":case"linkViaRedirect":return E1;case"reauthViaPopup":case"reauthViaRedirect":return I1;default:jt(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const S1=new ls(2e3,1e4);class pr extends Ay{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,pr.currentPopupAction&&pr.currentPopupAction.cancel(),pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=Wc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,S1.get())};e()}}pr.currentPopupAction=null;/**
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
 */const A1="pendingRedirect",Qs=new Map;class T1 extends Ay{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qs.get(this.auth._key());if(!e){try{const r=await k1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qs.set(this.auth._key(),e)}return this.bypassAuthState||Qs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function k1(t,e){const n=R1(e),r=C1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function P1(t,e){Qs.set(t._key(),e)}function C1(t){return Nt(t._redirectPersistence)}function R1(t){return Gs(A1,t.config.apiKey,t.name)}async function x1(t,e,n=!1){const r=zr(t),i=w1(r,e),o=await new T1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const N1=10*60*1e3;class O1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!b1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ty(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(We(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=N1&&this.cachedEventUids.clear(),this.cachedEventUids.has(ih(e))}saveEventToCache(e){this.cachedEventUids.add(ih(e)),this.lastProcessedEventTime=Date.now()}}function ih(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ty({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function b1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ty(t);default:return!1}}/**
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
 */async function D1(t,e={}){return Bt(t,"GET","/v1/projects",e)}/**
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
 */const L1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,V1=/^https?/;async function M1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await D1(t);for(const n of e)try{if(j1(n))return}catch{}jt(t,"unauthorized-domain")}function j1(t){const e=gu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!V1.test(n))return!1;if(L1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const U1=new ls(3e4,6e4);function sh(){const t=te().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function F1(t){return new Promise((e,n)=>{var r,i,s;function o(){sh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sh(),n(We(t,"network-request-failed"))},timeout:U1.get()})}if(!((i=(r=te().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=te().gapi)===null||s===void 0)&&s.load)o();else{const a=dy("iframefcb");return te()[a]=()=>{gapi.load?o():n(We(t,"network-request-failed"))},cy(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Js=null,e})}let Js=null;function B1(t){return Js=Js||F1(t),Js}/**
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
 */const z1=new ls(5e3,15e3),H1="__/auth/iframe",W1="emulator/auth/iframe",$1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},q1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function K1(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fc(e,W1):`https://${t.config.authDomain}/${H1}`,r={apiKey:e.apiKey,appName:t.name,v:Fr},i=q1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ur(r).slice(1)}`}async function G1(t){const e=await B1(t),n=te().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:K1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=We(t,"network-request-failed"),a=te().setTimeout(()=>{s(o)},z1.get());function l(){te().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Q1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},J1=500,Y1=600,X1="_blank",Z1="http://localhost";class oh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eT(t,e,n,r=J1,i=Y1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Q1),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ee().toLowerCase();n&&(a=ry(u)?X1:n),ny(u)&&(e=e||Z1,l.scrollbars="yes");const c=Object.entries(l).reduce((m,[y,_])=>`${m}${y}=${_},`,"");if(pA(u)&&a!=="_self")return tT(e||"",a),new oh(null);const f=window.open(e||"",a,c);N(f,t,"popup-blocked");try{f.focus()}catch{}return new oh(f)}function tT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const nT="__/auth/handler",rT="emulator/auth/handler",iT=encodeURIComponent("fac");async function ah(t,e,n,r,i,s){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fr,eventId:i};if(e instanceof hy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(s||{}))o[c]=f}if(e instanceof us){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${iT}=${encodeURIComponent(l)}`:"";return`${sT(t)}?${Ur(a).slice(1)}${u}`}function sT({config:t}){return t.emulator?Fc(t,rT):`https://${t.authDomain}/${nT}`}/**
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
 */const rl="webStorageSupport";class oT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wy,this._completeRedirectFn=x1,this._overrideRedirectResult=P1}async _openPopup(e,n,r,i){var s;Ut((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ah(e,n,r,gu(),i);return eT(e,o,Wc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ah(e,n,r,gu(),i);return qA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ut(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await G1(e),r=new O1(e);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rl,{type:rl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[rl];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=M1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ly()||zc()||ma()}}const aT=oT;var lh="@firebase/auth",uh="1.3.0";/**
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
 */class lT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cT(t){At(new ft("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uy(t)},u=new IA(r,i,s,l);return AA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),At(new ft("auth-internal",e=>{const n=zr(e.getProvider("auth").getImmediate());return(r=>new lT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(lh,uh,uT(t)),Ze(lh,uh,"esm2017")}/**
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
 */const dT=5*60,fT=dg("authIdTokenMaxAge")||dT;let ch=null;const hT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fT)return;const i=n==null?void 0:n.token;ch!==i&&(ch=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pT(t=Ec()){const e=Yn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=SA(t,{popupRedirectResolver:aT,persistence:[t1,HA,wy]}),r=dg("authTokenSyncURL");if(r){const s=hT(r);jA(n,s,()=>s(n.currentUser)),MA(n,o=>s(o))}const i=ug("auth");return i&&TA(n,`http://${i}`),n}cT("Browser");const mT=(t,e)=>e.some(n=>t instanceof n);let dh,fh;function gT(){return dh||(dh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yT(){return fh||(fh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ky=new WeakMap,vu=new WeakMap,Py=new WeakMap,il=new WeakMap,Kc=new WeakMap;function vT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ky.set(n,t)}).catch(()=>{}),Kc.set(e,t),e}function wT(t){if(vu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});vu.set(t,e)}let wu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Py.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _T(t){wu=t(wu)}function IT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sl(this),e,...n);return Py.set(r,e.sort?e.sort():[e]),yn(r)}:yT().includes(t)?function(...e){return t.apply(sl(this),e),yn(ky.get(this))}:function(...e){return yn(t.apply(sl(this),e))}}function ET(t){return typeof t=="function"?IT(t):(t instanceof IDBTransaction&&wT(t),mT(t,gT())?new Proxy(t,wu):t)}function yn(t){if(t instanceof IDBRequest)return vT(t);if(il.has(t))return il.get(t);const e=ET(t);return e!==t&&(il.set(t,e),Kc.set(e,t)),e}const sl=t=>Kc.get(t);function ST(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=yn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yn(o.result),l.oldVersion,l.newVersion,yn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const AT=["get","getKey","getAll","getAllKeys","count"],TT=["put","add","delete","clear"],ol=new Map;function hh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ol.get(e))return ol.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=TT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||AT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ol.set(e,s),s}_T(t=>({...t,get:(e,n,r)=>hh(e,n)||t.get(e,n,r),has:(e,n)=>!!hh(e,n)||t.has(e,n)}));const Cy="@firebase/installations",Gc="0.6.4";/**
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
 */const Ry=1e4,xy=`w:${Gc}`,Ny="FIS_v2",kT="https://firebaseinstallations.googleapis.com/v1",PT=60*60*1e3,CT="installations",RT="Installations";/**
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
 */const xT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qn=new Jn(CT,RT,xT);function Oy(t){return t instanceof ht&&t.code.includes("request-failed")}/**
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
 */function by({projectId:t}){return`${kT}/projects/${t}/installations`}function Dy(t){return{token:t.token,requestStatus:2,expiresIn:OT(t.expiresIn),creationTime:Date.now()}}async function Ly(t,e){const r=(await e.json()).error;return qn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Vy({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function NT(t,{refreshToken:e}){const n=Vy(t);return n.append("Authorization",bT(e)),n}async function My(t){const e=await t();return e.status>=500&&e.status<600?t():e}function OT(t){return Number(t.replace("s","000"))}function bT(t){return`${Ny} ${t}`}/**
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
 */async function DT({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=by(t),i=Vy(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Ny,appId:t.appId,sdkVersion:xy},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await My(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Dy(u.authToken)}}else throw await Ly("Create Installation",l)}/**
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
 */function jy(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function LT(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const VT=/^[cdef][\w-]{21}$/,_u="";function MT(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=jT(t);return VT.test(n)?n:_u}catch{return _u}}function jT(t){return LT(t).substr(0,22)}/**
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
 */function va(t){return`${t.appName}!${t.appId}`}/**
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
 */const Uy=new Map;function Fy(t,e){const n=va(t);By(n,e),UT(n,e)}function By(t,e){const n=Uy.get(t);if(n)for(const r of n)r(e)}function UT(t,e){const n=FT();n&&n.postMessage({key:t,fid:e}),BT()}let bn=null;function FT(){return!bn&&"BroadcastChannel"in self&&(bn=new BroadcastChannel("[Firebase] FID Change"),bn.onmessage=t=>{By(t.data.key,t.data.fid)}),bn}function BT(){Uy.size===0&&bn&&(bn.close(),bn=null)}/**
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
 */const zT="firebase-installations-database",HT=1,Kn="firebase-installations-store";let al=null;function Qc(){return al||(al=ST(zT,HT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Kn)}}})),al}async function Uo(t,e){const n=va(t),i=(await Qc()).transaction(Kn,"readwrite"),s=i.objectStore(Kn),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Fy(t,e.fid),e}async function zy(t){const e=va(t),r=(await Qc()).transaction(Kn,"readwrite");await r.objectStore(Kn).delete(e),await r.done}async function wa(t,e){const n=va(t),i=(await Qc()).transaction(Kn,"readwrite"),s=i.objectStore(Kn),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Fy(t,a.fid),a}/**
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
 */async function Jc(t){let e;const n=await wa(t.appConfig,r=>{const i=WT(r),s=$T(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===_u?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function WT(t){const e=t||{fid:MT(),registrationStatus:0};return Hy(e)}function $T(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(qn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=qT(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:KT(t)}:{installationEntry:e}}async function qT(t,e){try{const n=await DT(t,e);return Uo(t.appConfig,n)}catch(n){throw Oy(n)&&n.customData.serverCode===409?await zy(t.appConfig):await Uo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function KT(t){let e=await ph(t.appConfig);for(;e.registrationStatus===1;)await jy(100),e=await ph(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Jc(t);return r||n}return e}function ph(t){return wa(t,e=>{if(!e)throw qn.create("installation-not-found");return Hy(e)})}function Hy(t){return GT(t)?{fid:t.fid,registrationStatus:0}:t}function GT(t){return t.registrationStatus===1&&t.registrationTime+Ry<Date.now()}/**
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
 */async function QT({appConfig:t,heartbeatServiceProvider:e},n){const r=JT(t,n),i=NT(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:xy,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await My(()=>fetch(r,a));if(l.ok){const u=await l.json();return Dy(u)}else throw await Ly("Generate Auth Token",l)}function JT(t,{fid:e}){return`${by(t)}/${e}/authTokens:generate`}/**
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
 */async function Yc(t,e=!1){let n;const r=await wa(t.appConfig,s=>{if(!Wy(s))throw qn.create("not-registered");const o=s.authToken;if(!e&&ZT(o))return s;if(o.requestStatus===1)return n=YT(t,e),s;{if(!navigator.onLine)throw qn.create("app-offline");const a=tk(s);return n=XT(t,a),a}});return n?await n:r.authToken}async function YT(t,e){let n=await mh(t.appConfig);for(;n.authToken.requestStatus===1;)await jy(100),n=await mh(t.appConfig);const r=n.authToken;return r.requestStatus===0?Yc(t,e):r}function mh(t){return wa(t,e=>{if(!Wy(e))throw qn.create("not-registered");const n=e.authToken;return nk(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function XT(t,e){try{const n=await QT(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Uo(t.appConfig,r),n}catch(n){if(Oy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await zy(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Uo(t.appConfig,r)}throw n}}function Wy(t){return t!==void 0&&t.registrationStatus===2}function ZT(t){return t.requestStatus===2&&!ek(t)}function ek(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+PT}function tk(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function nk(t){return t.requestStatus===1&&t.requestTime+Ry<Date.now()}/**
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
 */async function rk(t){const e=t,{installationEntry:n,registrationPromise:r}=await Jc(e);return r?r.catch(console.error):Yc(e).catch(console.error),n.fid}/**
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
 */async function ik(t,e=!1){const n=t;return await sk(n),(await Yc(n,e)).token}async function sk(t){const{registrationPromise:e}=await Jc(t);e&&await e}/**
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
 */function ok(t){if(!t||!t.options)throw ll("App Configuration");if(!t.name)throw ll("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ll(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ll(t){return qn.create("missing-app-config-values",{valueName:t})}/**
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
 */const $y="installations",ak="installations-internal",lk=t=>{const e=t.getProvider("app").getImmediate(),n=ok(e),r=Yn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},uk=t=>{const e=t.getProvider("app").getImmediate(),n=Yn(e,$y).getImmediate();return{getId:()=>rk(n),getToken:i=>ik(n,i)}};function ck(){At(new ft($y,lk,"PUBLIC")),At(new ft(ak,uk,"PRIVATE"))}ck();Ze(Cy,Gc);Ze(Cy,Gc,"esm2017");/**
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
 */const Fo="analytics",dk="firebase_id",fk="origin",hk=60*1e3,pk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Xc="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ve=new oa("@firebase/analytics");/**
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
 */const mk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},$e=new Jn("analytics","Analytics",mk);/**
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
 */function gk(t){if(!t.startsWith(Xc)){const e=$e.create("invalid-gtag-resource",{gtagURL:t});return Ve.warn(e.message),""}return t}function qy(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function yk(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function vk(t,e){const n=yk("firebase-js-sdk-policy",{createScriptURL:gk}),r=document.createElement("script"),i=`${Xc}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function wk(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function _k(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await qy(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Ve.error(a)}t("config",i,s)}async function Ik(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await qy(n);for(const l of o){const u=a.find(f=>f.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Ve.error(s)}}function Ek(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await Ik(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await _k(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Ve.error(a)}}return i}function Sk(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Ek(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Ak(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Xc)&&n.src.includes(t))return n;return null}/**
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
 */const Tk=30,kk=1e3;class Pk{constructor(e={},n=kk){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ky=new Pk;function Ck(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Rk(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Ck(r)},s=pk.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw $e.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function xk(t,e=Ky,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw $e.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw $e.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new bk;return setTimeout(async()=>{a.abort()},n!==void 0?n:hk),Gy({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Gy(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Ky){var s;const{appId:o,measurementId:a}=t;try{await Nk(r,e)}catch(l){if(a)return Ve.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await Rk(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!Ok(u)){if(i.deleteThrottleMetadata(o),a)return Ve.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?_f(n,i.intervalMillis,Tk):_f(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,f),Ve.debug(`Calling attemptFetch again in ${c} millis`),Gy(t,f,r,i)}}function Nk(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r($e.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Ok(t){if(!(t instanceof ht)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class bk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Dk(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function Lk(){if(hg())try{await pg()}catch(t){return Ve.warn($e.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ve.warn($e.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Vk(t,e,n,r,i,s,o){var a;const l=xk(t);l.then(y=>{n[y.measurementId]=y.appId,t.options.measurementId&&y.measurementId!==t.options.measurementId&&Ve.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>Ve.error(y)),e.push(l);const u=Lk().then(y=>{if(y)return r.getId()}),[c,f]=await Promise.all([l,u]);Ak(s)||vk(s,c.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[fk]="firebase",m.update=!0,f!=null&&(m[dk]=f),i("config",c.measurementId,m),c.measurementId}/**
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
 */class Mk{constructor(e){this.app=e}_delete(){return delete Ti[this.app.options.appId],Promise.resolve()}}let Ti={},gh=[];const yh={};let ul="dataLayer",jk="gtag",vh,Qy,wh=!1;function Uk(){const t=[];if(fg()&&t.push("This is a browser extension environment."),Y_()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=$e.create("invalid-analytics-context",{errorInfo:e});Ve.warn(n.message)}}function Fk(t,e,n){Uk();const r=t.options.appId;if(!r)throw $e.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ve.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $e.create("no-api-key");if(Ti[r]!=null)throw $e.create("already-exists",{id:r});if(!wh){wk(ul);const{wrappedGtag:s,gtagCore:o}=Sk(Ti,gh,yh,ul,jk);Qy=s,vh=o,wh=!0}return Ti[r]=Vk(t,gh,yh,e,vh,ul,n),new Mk(t)}function Bk(t=Ec()){t=ke(t);const e=Yn(t,Fo);return e.isInitialized()?e.getImmediate():zk(t)}function zk(t,e={}){const n=Yn(t,Fo);if(n.isInitialized()){const i=n.getImmediate();if(Wi(e,n.getOptions()))return i;throw $e.create("already-initialized")}return n.initialize({options:e})}function Hk(t,e,n,r){t=ke(t),Dk(Qy,Ti[t.app.options.appId],e,n,r).catch(i=>Ve.error(i))}const _h="@firebase/analytics",Ih="0.10.0";function Wk(){At(new ft(Fo,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Fk(r,i,n)},"PUBLIC")),At(new ft("analytics-internal",t,"PRIVATE")),Ze(_h,Ih),Ze(_h,Ih,"esm2017");function t(e){try{const n=e.getProvider(Fo).getImmediate();return{logEvent:(r,i,s)=>Hk(n,r,i,s)}}catch(n){throw $e.create("interop-component-reg-failed",{reason:n})}}}Wk();const $k={apiKey:"AIzaSyBQjVHy5UrXMBYu5fFq0Atd1IOSsAO9_W4",authDomain:"kooop-399b4.firebaseapp.com",projectId:"kooop-399b4",storageBucket:"kooop-399b4.appspot.com",messagingSenderId:"861642362756",appId:"1:861642362756:web:c018549fb9a12228a517d1",measurementId:"G-5808DTTJXS"},Zc=yg($k);Bk(Zc);const Jy=ES(Zc);let qk=Jy;const Eh=pT(Zc);async function Kk(){const t=AS(Jy,"koops"),e=VS(t,MS("date","desc"));return(await FS(e)).docs.map(i=>i.data()).sort()}async function Gk(t){return t.id=qS(),await BS(TS(qk,COLLECTION_NAME.KOOPS,t.id),t)}function Yy(t){const e=localStorage.getItem("koopUser")||!1;return t?{phone:"0893092849",displayename:"docta rhyf"}:e?JSON.parse(e):!1}const Qk="/assets/error-fe6144de.png";function Jk({msg:t,error:e}){return h.jsx("div",{children:e&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"flex justify-center m-4 gap-4",children:h.jsx("img",{src:Qk,width:60})}),h.jsx("p",{className:"text-center",children:t})]})})}const Yk="/assets/progress-a09ed1b0.gif";function ai({icon:t,title:e}){return h.jsxs("div",{className:"text-sky-600 border-t py-2 flex items-center gap-2 mb-1",children:[h.jsx("img",{src:t,width:30}),h.jsx("span",{children:e})]})}function Ds({btnName:t,left:e,right:n,curPage:r,onThumbClick:i}){return h.jsx("div",{onClick:s=>{console.log(t,r,t===r)},className:` ${e?"rounded-l-lg ":""} ${n?" rounded-r-lg ":""} cursor-pointer px-1
     
     ${Number(r)===Number(t)?" text-white bg-sky-500 ":" text-sky-500 border-sky-500 "}

     hover:text-white hover:bg-sky-500 border 
     text-center  `,children:t})}function Xk({pagesCount:t=20}){const[e,n]=w.useState(1);function r(i){switch(console.log(i),i){case"PREV":n(e-1);break;case"NEXT":n(e+1);break;default:n(Number(e));break}}return h.jsxs("div",{className:"flex mx-auto justify-center items-center",children:[h.jsx(Ds,{btnName:"PREV",left:!0,onThumbClick:r}),[...Array(t)].slice(0,5).map((i,s)=>h.jsx(Ds,{btnName:Number(s)+1,curPage:Number(e),onThumbClick:r},s)),"...",h.jsx(Ds,{btnName:Number(t),curPage:Number(e),onThumbClick:r}),h.jsx(Ds,{btnName:"NEXT",right:!0,onThumbClick:r})]})}const Zk="shadow-lg shadow-black/20 p-2 border border-slate-300 rounded-lg mb-4";function eP({}){const[t,e]=w.useState(""),[n,r]=w.useState(!1),[i,s]=w.useState("s"),o=w.useRef(),a=w.useRef(),l=w.useRef(),u=[w.useRef(),w.useRef(),w.useRef()],[c,f]=w.useState(!1),[m,y]=w.useState([]),[_,v]=w.useState(!0),[x,p]=w.useState(!1);w.useEffect(()=>{d()},[]);async function d(){p(!1),v(!0);try{const A=await Kk();y(A),console.log(A),v(!1)}catch(A){p(A),p(A.toString())}finally{console.log("done"),v(!1)}}function g(A){s(A),console.log("cur mode ",i)}function I(A){f(A.target.checked)}function S(A){switch(i){case"s":T();break;case"p":U();break}}function T(){console.log("searchKoops")}const k=vc();function P(A){k(Ae.VIEW_KOOP.path,{state:{koop:A}})}async function U(){let A={text:t,budget:er(o),date:er(l),location:er(a),media:[er(u[0]),er(u[1]),er(u[2])]};console.log(A);const Y=await Gk(A);d(),console.log(Y)}return h.jsx("div",{className:wc,children:h.jsxs("main",{className:"p-4 ",children:[h.jsxs("section",{className:"sect-search",children:[h.jsxs("div",{className:"cont-search-mode",children:[h.jsx("button",{className:`${i==="s"?" bg-sky-500 text-white ":"  "} hover:bg-sky-500 hover:text-white  p-1 rounded-t-lg `,onClick:A=>g("s"),children:"Search"}),h.jsx("button",{className:`  ${i==="p"?" bg-sky-500 text-white ":""}  p-1 hover:bg-sky-500 hover:text-white rounded-t-lg`,onClick:A=>g("p"),children:"Post"})]}),h.jsxs("div",{className:` flex ${i==="p"?"rounded-lg":""} cont-search-input bg-sky-500 p-2 rounded-b-lg rounded-r-lg `,children:[h.jsx("input",{onChange:A=>e(A.target.value),onKeyUp:A=>{A.key==="Enter"&&S()},className:"h-[30px] outline-none px-1 flex-grow rounded-md ",type:"search",onFocus:A=>r(!0),onBlur:A=>r(!1),placeholder:` ${i==="s"?"search koops ...":"post new koop ..."} `}),h.jsx("span",{className:"h-[30px] w-[30px] hover:scale-125  cursor-pointer inline-block",children:h.jsx("img",{src:i==="s"?bw:Ow,onClick:A=>S(),width:20,className:"translate-x-[25%] translate-y-[25%] "})})]})]}),i==="p"&&h.jsxs("section",{className:"sect-koop-details",children:[h.jsxs("div",{children:[h.jsx("input",{type:"checkbox",checked:c,onChange:A=>I(A)}),"Add options"]}),c&&h.jsx(h.Fragment,{children:h.jsxs("div",{className:`cont-koop-det ${Zk} `,children:[h.jsxs("div",{className:"flex",children:[h.jsxs("div",{className:"option-card budget  ",children:[h.jsx(ai,{icon:rn.budget,title:"Budget"}),h.jsx("input",{ref:o,name:"budget",type:"number",placeholder:"ex: 450"})]}),h.jsxs("div",{className:"option-card date  ",children:[h.jsx(ai,{icon:rn.date,title:"Date"}),h.jsx("div",{children:h.jsx("input",{className:"w-[100%]",ref:l,name:"date",type:"date"})})]})]}),h.jsxs("div",{className:"option-card location  ",children:[h.jsx(ai,{icon:rn.location,title:"Location"}),h.jsx("div",{children:h.jsx("input",{className:"w-[100%]",ref:a,placeholder:"koop location ...",type:"text",name:"location_add"})})]}),h.jsxs("div",{className:"option-card media flex  flex-col",children:[h.jsx(ai,{icon:rn.media,title:"Media (photos/vids)"}),h.jsx("div",{className:"",children:[1,2,3].map((A,Y)=>h.jsx("input",{name:`file_${Y}`,ref:u[Y],type:"file"}))})]})]})})]}),_&&h.jsxs("div",{className:"flex justify-center items-center gap-8 p-2 m-2",children:[h.jsx("img",{src:Yk,width:60}),"Please wait ..."]}),h.jsx(Jk,{msg:x,error:x}),i==="s"&&h.jsxs("div",{children:[h.jsx("section",{className:"main-cont md:flex md:flex-wrap",children:m.map((A,Y)=>h.jsx(M_,{onKoopClicked:nt=>P(A),data:A},Y))}),h.jsx(Xk,{})]})]})})}function tP(){return h.jsx("div",{children:"Page Not Found"})}const nP="/assets/info-fc4fa1e5.png";function Zr({icon:t,title:e,children:n,small:r}){return h.jsxs("div",{children:[h.jsx(ai,{title:e,icon:t}),h.jsx("div",{className:"p-2",children:n})]})}function ei(t){const e={green:{bg:"bg-green-500",border:"border-green-500",text:"text-green-500",hover:{bg:"bg-green-600"}},yellow:{bg:"bg-yellow-500",border:"border-yellow-500",text:"text-yellow-500",hover:{bg:"bg-yellow-600"}},blue:{bg:"bg-blue-500",border:"border-blue-500",text:"text-blue-500",hover:{bg:"bg-blue-600"}},red:{bg:"bg-red-500",border:"border-red-500",text:"text-red-500",hover:{bg:"bg-red-600"}}};return`text-sm border ${e[t].border} p-1 ${e[t].text} rounded-lg hover:bg-green-500 hover:text-white`}function rP({onPageChange:t}){var o,a,l,u;const e=os(),n=vc(),[r,i]=w.useState({});w.useEffect(()=>{const c=e.state.koop;i(c),console.log("curKoop",c)},[]);function s(){console.log("current fav => ",r),alert("added to fav")}return h.jsxs("div",{className:`${wc} p-4 `,children:[h.jsxs("div",{className:"btns-cont p-2 flex flex-col md:flex-row gap-4",children:[h.jsx("button",{onClick:c=>n(Ae.HOME.path),className:ei("green"),children:"HOME"}),h.jsx("button",{className:ei("green"),children:"Contact Info"}),h.jsx("button",{onClick:c=>s(),className:ei("yellow"),children:"FAV"}),h.jsx("button",{className:ei("yellow"),children:"SHARE"}),h.jsx("button",{className:ei("yellow"),children:"REPORT"})]}),h.jsxs("div",{className:"flex flex-col md:flex-row",children:[h.jsxs("div",{className:"cont flex-1",children:[h.jsx(Zr,{title:"Description",icon:nP,children:h.jsx("p",{children:r.text})}),((o=r.budget)==null?void 0:o.length)>0&&h.jsx(Zr,{title:"Budjet",icon:ng,children:h.jsxs("p",{children:[r.budget," $"]})}),((a=r.date)==null?void 0:a.length)>0&&h.jsx(Zr,{title:"Date",icon:rg,children:h.jsx("p",{children:r.text})}),((l=r.location)==null?void 0:l.length)>0&&h.jsx(Zr,{title:"Location",icon:ig,children:h.jsx("p",{children:r.text})}),((u=r.media)==null?void 0:u.size)>0&&h.jsx(Zr,{title:"Media",icon:sg,children:h.jsx("p",{children:JSON.stringify(r.media)})})]}),h.jsx("div",{className:"ad-space md:w-[140px] bg-slate-400 min-h-[120pt] md:min-h-[240pt]",children:"ad-space"})]})]})}const iP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAyvSURBVHgBrVh9bFXlGX/e95xze28/6L39wNJCe4sVWBWoc0NQGTWbGk3Y1I1N47awxWUmy0Ix2f5a7PCfLftjYNxM9ocDXRZI5obaKZHFUYPoVDTFiWA77BUoUrDt5bb3+5zz7ve877kfgIoST/P2vOf9eJ7f+3y/V9BlPjttu18I0SeVWqeU6kM/iuEo3kRKJS0hEgoNY4d83x/e4LrDdBmP+DyLtwNArW1vQncAO6N6UFVRUUEX/yT+cT8UjZIbCVMxlUpQbd2wNz295d5cLvEZWX42gAaYM6gYWIDk4zay8EqASwDjDz5Ihe44US5Hydk0TT28hbrvvnvH8Xx+y71PP52gSzzyUgt2Oc6miO2MMzgfCFw0X5RAGhDVTWLeKo8Lyo6/T6m5NL3xwl5SySl9gFQms7EYje17/McbN16K/6dKcJftbJ0lMfC28uhdEJ4G9TTG69Fvk4KWYHsf3pEArLwALI+G413U9N0NNP3sP6mpbyXJWJRm9u8nLxSmhqVLqXP9Hdu6Nnxv8+cCyCp1bXv3PqL+Fz2X5pSRjI25MLbU4R0BsBYh6QpQWKsUzRfiPHWwihX+vvTb39HoWwcpl81S3y9/QaeHnqO2666lib3/orp16ygUDtN79903UpPJ3HwXUfJCLB+r4pTt7Nvqef3Puh7AiSqLE5ptWEoK+YpaANz1fBrD+xyajzlfKW2GShhzxDmopa2NOrviFHZ9qq+poXcPH6YIpNfY0UGiWKC63t6+jvt/svvjsFgXDvwJan3M9+78QBkGFVEr3RyAq8H3fHBm6fVAinFI7xz6DUCF8HLecc4BjLdwIY29/DKlXz5A76dTlH3ySUrlCnRs504KTU3TRw31lEul4t9waqJDZ8+8QOfxrXr+ajkb9wi1/R+Q3MUnUZp5GC0K5Cssm5YJRVdCko2SpQcHwhpZ5SD8nsL6/cKiWsytwaqY7+NbkgSNIg5ZQ2zDsG/Y+VKMD8nQ5ueyqW0XqXgnIgI2DP4bBHxtPYGqqOSd5l1PHI0l2cqlZp+o1RIUA5lmTC7Au+Qoej86Ht6dfpGisGULswjeNMs2jX3jMI+TMIkTyqcJHHSUaQhvcHs0Gi3hsisisgYPKz8+7fskqgRrekoTr8FHLRi0gGivsGkhf6NfB7VbiiWswByhJTAOxc4DCtwERCaVp2du5/8eJCpZQhAHeDIj4bIOvKgsFgaxbHNZgiw9EtbGN5VfVk21BVo6tsEp8G7Du1datAIirUe/UYP0tQpDWFt7nuWWQg6DE5VMUzq4MocwhyETX4V2tgF4TLSiYscZ9MD8XV9V1BNAVGQ8qRnzX8ZsL7Z0M0OcugHfjhLaaWz0X8f+uSoIMuhXgxIBflU+CHiyY4nyl15p2/ZABaBP/dOQAsc7EVBQpZMHzBdBap34aofkolJq+4pgnNXO6n0F+y3MxXGc+sDjy8CEuMAdK/AqHVE1y4DFJg3wL2T34zvuVqlGVi130LkCDPowH4cddUBKCmAaAMomYxIzAJaH4zwNu8oJjyKWo8FTcEijCgO6IqMAnRBV/Iz+pMESHULFZEub+vmzEQzqpUc5pqdtzgBlRu0g3oh3KAg15xg4fwujxDEQWQ6PbMTc8zhAOw7QXpIgxo59806axlp2hlQqRbGYcdLJybPU07OYJk5MwKstijXFKJmcodTZKbrj0EGyfWRSeOdK1kAYG5YAUhdiVhMGajmPotVyAObMoYz7sEQdBihNMhsBmBB7NqR5DU70lO8hX0G6JZti7+7pof8Wi9R52610GPO0bBmdaW6hkVyeYjfcQCOFAr2aTNJM23yaaGiko8LEVRyuH2FGxVmi7KVtGCugn0XLcwxj4hqocRSOSRzCr0ALYy6DNa9BMj/wPC2tPNoagF0POz6DkQyZOBipjVBHxyIKI82t+ur11NTUQs0tLVQbqSUUs7R6zWpyiy4tWboE0m2i+Y1REiNvwqHUSoncGTfqB0BIsMhE9QmMtXiBac5hvohvaBCOYbzuKXyvtR2q801oj6L9jHWC8WbseRTjP0Vs+8OfH6fFtY7eu3zF1ZROzxHH4ltu/Tq1trbQ6Q8naQ1A2raFgOLQgva2UvSAP5pSXWf3uDQSEsoYM3sqx6Y59KcxlNZVDYDivQeqbQWx+VCZKVSN30a0V7O0Fd0P50lj/EgiQUN/fIxqvCJAOHTkyFHKZjOUyWSotaWVcvkszcxMUwSVdz6fp+7F3ToceQxQlZ0cKlPGMVRQETPIHMCeRu842tkg+OzHGKv9RnxGtfSM1PlwMgi4vLuDKxkO5EwJjN/ZvZskJDw7O6d5tqHKOTkxQSVHn03NwRQ6IEXLZBZNDxecQIA0CsXeAjGz3RkpmMAwC0BcrO4HmK3wVgbfaoco6RZgd0qbQRbrCmgu6ORMAKF38G8WvWZpjpt49RWKQYqLFyNaotiYOHkykGSWGhrmUXNzc9nDdbgTIml9R1oP8AWIPXQPjOQqEDsOQJNKaXtkpjNgdBwqTfAYl/x4d0ASZwG4i8wVgNXO14GiBotYBjq/guGnsL9VmICeRtF6+969dFtjA3mpWRorFGlyJknd3V10CpKcg22yCbz1xkFadPB1RA511AbKEUXGUW60JO2FdyQgpYJOQVKHiRBilOuZUH4GoA6A4SQKzc0AwZ5co0ivd7HW1YeStB00/sf5OwhXObTrsb4ZEsvv2UOLoLJG2OixnqtoaF4jFRd1oqAQ1NHeTh+ePGVsWtAHtifUSzDIO1kF14HRUqj5kBOiYbdIJ8AgyzEycAQ7KONZqu8BTA4Ga3NdF4zl8H4bBzyIbDIE7+XKx0bjIJTF+gkw+hvEzUE+hr0dOGzb2Cj9HII5lhinE3izI3bgBihNOhyx4bEjJvcZo6wD7JtQFi2H1I5gcBiqzYDQWgRwjoMJbBsF4G9hvt14mgbHl6kZUHgCe0chPaec2BQyj6KzADiGxc+r4DrgkgZhkSluI9lTtAQS/BraamHKXlf5w/Je3PhxmKQudxSV8iBOr32TmhXf0AVdi697dEVD+tuhSmHKwf00Nj8BbznCtR2ZOMpGwcE6A+LZIB/7psYy0UJX4bg+4LBcECcgjJ2g8Xcc8AQ+1wObbVK2egTsBsvejH8FbL4SNjPuu/QRxg8QA/C1A6wCwd4gFHGmSKL/HIDtK5dr5gJlvNunR62Qdr6PdLYSOuOcRvaZBSpOqz0sSWVTCN8/REo8AFpvFAvDFAhBXzPDtjPDp4phpAubCsqojhV1CiJ/CBs/0BWNoG+jOJgCkaulyTQ7IZH9nhesNtWxVOYAGxDMHxIGONtiMYiTDhlt5XURYq4ST+L790VPe7zj+90JSFHf6p6Bfd8trRgor56CobYqlorQ8YxjYg1feDD+IohzzRgVlpZSHut2ob3m+1Qpb6lcqzHA5dg3hTVzwtz4QoHNTaOf1OFH6FiZBqcBCIFVXivFDoS0J6pIGSmesu3x/5CINsAWjqBNg8VNmPsKYt5uhJlDOt4pnYZCXFhgez64B1tBeVWCqn84wr8Qx8ngTjOPVcyhibOTjrNKX7RWYeyo/rWC6DZLJnJC3rw5+IHpvDp3BX5/GSOxlYJK2ieT+sKCiwhfS5NtTijzLlCQ3ogCb6w0Lrf4Slm5eONiBRouCR0zC4GjtADcAxBALyS9FEKJSOtHC3O5HaVddjXAt4m2zSMRLwjapBUBIjU6dZmwwbXh1djSBa5cTg3DgdJB9lnDsY4zCZlgneFyCwzzxMEcqRJmUCq/vOCixDGSE1sf6MZ8tkd65KoqcBcB5CdF/sByy1m5Xqn+JAjnA2ldz7/D4JQCjCZA/yCYlEJNBxitQ0sHv2xJzj5a35IKwlQ5Wezli9kM5vguzEUtX7rW4nDt+mA0ck2hMHAhnosA8vOwW7wr5Tj7JpXoO8Oqh7fO4581AikcA/FFCDVzBZP+GtEawATS14xrgisaNEcRZey2jlULiTaRiRRNkCz3u3SIEcPFYuQuU/Ke/wj6lOc3jrOtxadNTdIsHQOxw1DFMWUuO697ribQCSksQ2sL7i3sDPMhcQ06cCh2FYRRVOp8p0EeBth6rFmg1COr3OLAJ2H4VIBamo6z8XnfGxz1KX5OVf/qoMoEyjWlMBfwUi3HzsSA+U7TGEgthkV1WNQlRfI6klvuKea30RfwxKGtHXyBQcGgzPvihguVcqrHRDAmKnMhM7ctGvxy8EU/cYfkDjAZD5eAgvESy1ELpFTIBgqhRVlVgOGpugHcDMZ+/XmBXVLFn/R83w7373Jz/Qg/K/fVhOPCd+O2lFGOi4d8lZyGCmGrI88U3JembH8E1dcwXcbzf9DRnuwZ8lT2AAAAAElFTkSuQmCC",sP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjySURBVHgB7ZwLcFTVGcf/5967u9ndvN8xIIEhIgJhqIHC9AFMGW21VoqdEgEVLYx0gFo6rZLWqYA8Bkyd0cpDRQgDtIWhSJ2CvJQgcUpLwAihA5IMUajYhECI2fd99DtnsyHGwMa6ezeO9zdzs+fePZvd/e93v/M97i5DB+eBdBfwhAFMQHj7OlJL7/+FAqAycoDxP5eAIhocomERLDiNJNREEqpRCPSJMCBLnG40+oBRMlnPTFJpJiy6k64AAYnEeQIWPULajGd0ehmwuCESLG6KJVAULIGiYAkUBUugKFgCRaHPCdTXYg4FfQgtJwe20aMhDxkCluSA4Q9AO3MGanU12KefhhNHk0m4QNxijNJSpJaXwzF2LJQCShFZFyl0HcFz9biy4Jcw3nzTdJESGknrhYVwLV2GtJmPRJ8bDKJl7lzo69fDTBIiEH9CZfKPkbHhNcgZGb1+nNrcjObBgyG1tcEsTHfSRlIS7E8+iezXd34hcTgK91FTpsBMTBdImfEQMleu7NVcIxSCQT6oK7YRI2Ampgqkk8WkLVly0zmGqsJf+z5a5v8CTePGofn++6F7vdfvN9khmLqK2cumwVaQf8P7/adOoe3pp6Ht2QOJhOJwPdr+/Bek/+wxsa811MNMTBVIGVLc8x1kFm3rXoZn0TOQmpo+b9ZqKDxN0xDcv99Uszf1FAvuPwAjEPjMsUBDA5p/eB+8FOdwcbrDLchROlqMPQcPgtF8MzF1medPxL43Ca577oHu8yJw4AD0w4fDL+RG88dPQF7VIeh+P1ruvRf622/DTBJectWcLjjnzSUHZYf/xRchUUoRQaeQIO3IEbgo0m6p+AOCv/m16ctuQlMNvV8/ZJEFOQYNEvutlGYE5s0TY8PlQvIrrwhxvGQ1wWd+n5DMOmHZvG53IO31XZ3i8JhHI2sRY7cbjmefRcr06fC+8w6uTZ4MqctSbyYJE4hRYuoqvVOMhX+ZMwehbduAzEy4KiqQsWCBWN5byV91Pe3MJmGnmPNH93WOr1ASGtqwAfLEiUhZuQq2ogFofvgRaH/aCrlbJG02CbMgIxAMD0IUEKoa3Fu3InvXLuiXL+MqLfv6ls1gCRaHk7BVTMvKQlYVOejhw6CRf/Hu3QffurXQ3noLUh8QJkJi60G0abS8M6r19KnSZhcS+rr4+S0Fg+jLWF2NKFgCRcE0gYSjGz4cjsVLYIwcia8KpjlpgzoVqbRCuSjW8R39J65NGA/WLbMXUIoBav3Yhg1DYMuW3tWfb78dypgx0D74AMbRo4glcbWgzyhPNZ/QuXNiqF28QLGP2uNjJEo9cnbvQebq1dBT09AbkqkzkrVpE+yTJiHWxHQViwhi3HorpP79RVVQrzsN5mkX5QwvpQ/e9a9Bp7qPQsWvyGN4KVa6jZqFtKdL8vXax4ABdMQAu3hR7GruZDA+L+gH6uuvW2Acm2UxtSCNsvO0EydQ0NiIPOqG5pK5Z549C21wuJJo/+3vkPduNVIXLxL7XBjnmrW4hQTLP/oP5PDaEPXKIhRWH4Fzwa+EiPKs2chtPI+CEzXIr6tD+r+OiU5svImpQHJrK9T/fIwrTz2Fyz+diva/74a98BbKr8JdDDkjHZLN1jnf9eqrSPv5HPjfP4mWRx9Dy5QHwKjVHKH1uQoE9u+DPnAQ0letAqPa0RVy8v7qd5FUMgLOheWINzEViLW3w1s2FaE33hB+JnC8Rhy3U6+9p+RByc0Tt74dO6BWboS+Z7c4zSJ4qIBm7NsH5+OPQyFxPXv3IrBmNa4tXy66H+4Hy6AhvsTWB5HvSSGrcHNnKXXRnn05J2EfWSJu3T/4PpJO/xtMUcRmz8/vtSP/f4mZQPxzd9Nq4r7rLoTqG9C2YgVY8WBkLlyIL4vkcotb74GDUKmO3QnpLnd0POJF7CyIqoC2knDXs33jBqi87z5tOmJBkBy987vfgfbhhwiufkkci5yI8Y50Y/f/PR5oFy6Iob2kBHouNQhpVfuiaK3XOjupCgWMusOBwM6/UhhliCKbNvQO6NnZYNR1ZTNmiHmhpmZxa7uD7svIjGnkGzOBuJfxLF0KrbkZ7qlTkV37HjIXLRLNPs/GjZ8LVW74Jsi5t1dWisAyh4pmzvJyaNQPa63cBAfFRXk1x5Bzqg65FBJk0IqmcQE3byZRfeS0H0QqicmSkxGz9xXrVEPPy0NSWRkk7kAvXISPViaZ4iLxZGO+SZ/yUIRo36iqgkJ9LoliGZVazvrx453/g78giVIS5Rt3Qq2pgXG4KtwjGzsOSbxUqxtQ604huH379eIapRv2u++G4fMjRCsiYlRGsb6KEAWr3BEFS6Ao9BmB+up5HneBeAuZ99+l0tEwaMUxeCeVNnF1K9+KbwMrCRfQuLs10jNgDKd4qjAcIgjhRo0SbWoxJzW187iRm4t4E3cnbZs2DYGhw2BvvQpGOZl68iSkoiJoFPCxCRMhkWgSLctiZTt7BvJDD0NqaIBMXVff7NmQqETC/tskHqPS0m6nQltw2TIhjv2BnyC0dk1cLw2O/ylGbR1p5w6Enn+eYqTL0F/6IwxKFxhZBCsuhkq9sGDFc2JJ57Ug4/RpqC+vQ+jMWQQpn7N/69viKg+VgkeFgkOdevh6v/6QuTjbt8X9umlT2j7a1avikwhd+gRUDqOOqSYSWB5E8jfIy7FMDn9WxkcfdTxIE6atUZoRorTFoORUlWWwnFw4Zs2CxCuULS2IN3EXiFFQxwyEK4NGR1BHrWYe7ElUFZSoiMZsCkIUDPI3rVPgx6ViNFZorF/6GK7588Hy8qH+jVrTx45BLigQXVgZ8SfuPohLwjo2Ppa6HdMoyWUkmBTw9zhXlGS5Y/b5IPHLgul0U6jKqK1YbsrXEuJuQVIP467HZEpybzaXiyB37WykpMA4dMi072xYqUYUrEg6CpZAUbAEioIlUBQsgaJgCRQFS6AocIGqYNEjFIzWShQlHoZFj1C68wI7D6Q7gfdg/URXdxqpszdQGgi08h804wdgEaGxQ5Owky7oUIsOPkq7tfj6UkUaLOY/7lbQYTD/AyqrSBdOvBWaAAAAAElFTkSuQmCC",oP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAp4SURBVHgB7VwJcFXVGf7OvS8bgZgQSEgIZjGgCCOLGfZKgKDAoCxip2ht0Zkyg0O3YWrFFot1sNPplMUuQmUrgsAwI4tCAUdBbWQRmgAKWAymMoIgW1iSvHfvuX//c27eywPCewGb9+hwv8x5796zn+/+9z//+c/JE2gAEaXz1085lDaE2xGVHOYJIZYGI4T6YHIK+GsbhwJ4UKjmMISJqg4S9AU8cq5GNYdeJpMziS8mwcPVUCrHL5igCr7oCQ9NYbsiiODhujDgISI8gqLAIygKPIKiwCMoCjyCosAjKAp8iANcy4saVoIiUk6dWYj4PceYE+TwmJ09u4FZL8P0+yPm1Tymp4Fm/hbi7rsjUtlSiLklbR/YBwwqhbhQw+93c5oWsArykfDJAYjU1og1Yi5B4uAnTM4F0NRnQJ2LI2dW/O3eDXPlamDXHmBoKWKNGBPE+iRg89RgwJgwARhcGi07aOHfYLyxCsLyIx6IMUFCB+FIfrcj53STHSAumqcRcZnFooNwqa4GNtWjTV4ujKQkpik+TodbkiA1bWz5bDHePbwSA4vGYtCudcjP7BYXWbolCTpz+Tg+rFoL27Gw/chqfGSux9B7voc+qaPQKb1LTO2iW4sglhxJNtZW/gWX/RddjcVkWE4Amz9diq0Hl6NHx1KM6TkFHdOKVWKLS1VcTFSeyyBZOurqLl+TsuXQ37H7P29fM3BFFLHSrvzqPcx4ayzmbpuMkzVH0NKIkw1P2Pje63ht6a8QslPJwY7qTdiwfz6zEblbPiMBZ2pPIT0lBy2NmL9iSgrU8Csq3sH+LxNhyTpMfur3+OjLjXizci4vReyI5R2SaN8mH1MHv4LkxJa3rGNDUIOUnK85jcN7NqGvvhMwhA+79m3BkRX7IVPrg9uY16tE66ceOUMwsc90ZLXORSzQsgQxMZcun0P1sX9j/6fb8M+db6Nb5WeaIJEskHxXAhLzUyET6sILwWUqSJSrrwoy7sWg4jEo7fI4EysQKwOyRQkiodSJATORlxbpJroOLEGO3wZ9cAaJ3bjpQhtSmdROYqiMRX499NYJGchOL0R+RhcMbP8g8lKLkJwdG6kJR0xW865MuJ/OsqXAD59GzaaVONWrABety6itv+h2hpVzWkoaMltlITUpk6/bgrZ9AHz/SZhLFkE8NAKxRkx0kAj7VDOUuspIyUZ6hz7hKY3QXAr97Xx+BOLE8bityOJqKF7XzAuPpqC+iQ9Fnk86CuLjkw5+kBM9n89EPBG3V4zmzgGWL4ucRzF06LC+vq10kJ7RNmzQ1yFrp6CQ5/Y2oNPfQHx9ImQNuRZR/JxmcdNBigB5//1w1q3VfkPn5Vmgyr3Ai79x7xcuAPXsofOKOKrKOLTcaHYZUgJfN0zhaguovh7kr2eCWMbO1oBq6xpK8J+IjxTFfNvH2vwPYMxYmIGAJoYp0k9JtOHXS4W6WohzNZoUof94DZaaCuPjj2F07YqYg2INaZH1/HSykpLUHBYxSBU4n1y4iByKD+JyBM9Roz91AuL82ah5KSsbom27uGkh74xiFHiWdBR4BEXBTRNE7loBN4sbKUnNzNESuqLZlrTSVMqfjAA7tPwWKCmR/VxJ+oSGJsuyIUy+M3zaUyGi1aNsILZ5REDCaZUMkZisC12xkFdBafTaWkiDzcWUFPYmGmF1cU2cLi5egEjwgTidOD2YR6crc0HtntiS07mdBNXnG7CpmjPVSYdd6VvfIf/o0SQLC8np0IGcortIjh9P9rO/IKtfX44vJrtXb/JPnUqy6nMel2y6rkOHyB41kpziYnJyc3VddlEhWRMnktxfSVJKPaU7/BdYv46sBwaR5HzyznyS351A8tgxXY/K41+yhOyevUiq/nTsSLKkhOzVq9x0yeU3vkVW2TBy8vJI5uSQ7FxMcuQIstes4f41z3BoFkGqMWt4GbvMhWubhOwUdW+QFIKshjiL46y0NLKPVjVZl11ZQU5yiq7DviONJHee9zEooO5TU0mWl+t8gVUrdZxjGOS0bcd2UwpZpkmWGuTJkyT3Veg2A6oPjzxMTtlQkpmZZM+cSYriwIJXdV9Unx3DJJmQFLKt7FGj9QP4nxHEz51kWZlLwDOTybZt8pe/r404FWdP+zlZVj3Jyr0USLtDD9iePp1kE52wwgiyqqrIVuQf4MG2y3LjHn6EpN9PVu9emiBryhRuj/OcPaMfksoT+N0sslesYAKYsMce1RKupdyyyD5zmuxDB8lKT9cE1o8fQ84pJtSxyZ7yI5ckTVDzcMNK2kxsBdM0kdD/O6Bhg3Wcwa2aviSIHr2BsWPcpcO/eOE5fz4oLY1DG/e7Y0eImgu6jNICPmHCZN3i694TxrSfuYuLnTtA+ypgHP0C2hN05hTET34M49cvsJ5zy5kV+yDu6w5SmwFr3oQzaiToz/PYNXIIIiMD2LUTxvnzMFpxX19bCNE+Sy94hZGIG8XNuzuUQk1IvjoKPu6U6xAjrZBFgEel1+eswFlRuldNVJeX57o46gO8SK1lJe5uIBobt/CH0D5qXU6t19T5onu7A68vgzN7LsSH5RCbt/JDaA2a9wq7S066vcnOhqEIC3buJvAt/EEitCF4BcKjHhoJUV7SmGQmQDjBmYwlQTTMgGq3Y8dOnUfm8NMuKgJa8a7pxUvAnD9ClJY2+K/dJSy1StXNGxMeY4kdB8GOfbmIJWXOn0ALFkA88YQmk5Rf6dgx4M58t0E78q5tU2hRh5koLACKChrvVaioQNBzYS9eDFHSm1+pAxDL33AdaaNGwczrBGvgAJjr1oP+MBsiqwOc9DR+xVgaj30FwQOmyzUQeytAubksyUz8HemaFMfHZsawMqB9e+CbU4Ai8bnn4BytguD6blSQbpwgim6Qhe+LXh2vNhLdawHzpZdCabaKeXA4jBdm6P0x319fBR0/Dtq9G4L1WrBOfShv9hwIyf6jx1lSDOHqF7aH1MtsPD0Jxj2dIadNg5g5E+Ye1oWPTtDlncxMVz+i+WgWQeqVcJ78AUS/fnBKSpCgGlM6Ztw40H09QCV9eT4hrSfkiOGsFDNZIeeyAeDGNVmnGu6M512lzcabGPwAjIEDWWdkugRmZwFbWP9sfxe0cxdwiZ1n7TJgDhgA9B8ASmb9t3kzUF7Oipy9Ap06wTdkMMy+/dzyv3wWGD4UxFKDc+dA/fpqyXPUKdvsnNBGZjQ0azVP4XXxROme1VFoULlq8hSue4tnW5aSoH669pS8s49noH79tfcQ1VUg7rQI2/cK55NCjbsdUGnusU4RkiitldTpdCWZ+lS+uOIh6GfE/VMeSZXWuOMfYV8uDM2SoCuEQARfESA0H4WRoES+sVDkfzMQjhHxOJ1ooh7jqnQ9yCvaDE8XDcXNUA0tr4O+JZyMdJhlZbAtXtMlmbfqMdsQYu4wu/rkc/w2dJqHmD/A/zcHlOcwiwKPoCjwCIoCj6Ao8AiKAo+gKPAIigJF0HZ4uB4qFUHvw8P1ME8tNdQvLakfWSqAh3BU8+q/0OCP83wzBO5vdnlwUQ2XE1dJ6197Y7b48im4P5V3u2I7hxc59FKcqIj/An+ArgXZL2cjAAAAAElFTkSuQmCC",aP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAm+SURBVHgB7Zx7bBTHHce/u3u7dz7fOdgQ2zixhXGBhKpp1VpUiVqSSiFULZFS8SyPlpcCNKGPgEEpBQSChraR+KdVq1YVLaiiVJWoKCptKWpo1JKkDqQUGxTqmIfBgO17mHs/dvqbuTtz9p29vr0jTpz9orPvZmfndj77m9/vNzOLAUuWLFkaO0lDCxoaGuZJkvQkPoJijJ2+du3a8ewy29BKiqI8RRU34aOrQYBkWBpRFiADWYAMZAEykAXIQBYgA1mADGQBMpAFyEAWIAONa0As/a8Y2TCuJeXOxgvUuAQkMR3NExlmTwyiM+DAn3sUhBIKzOgDDEiiwaGnbIABhqYg6kjQZB3rm8LYOLUfCovTEoaC+T4X1r3zAO7GJdFqISoJIF3XoWkaXZ8kXoUokUggmUzmnMc7oiDFJSFTp9jI7TI6X2FJbJgawouNPthYItWOpOPxSh+emODAX3vsKFRFA1JVFWvWrMGCBQtQXl6OQuXz+XDw4EEcPnxYfJYEC4ZlDXEsq/fDTnB+2+XGL96zU/kwMYVxy9CxrimCF6b6CKw+pIIEhy0Fu1CXXTSg+fPno6WlBbJsLiDW1tZiz5496O3txcmTJwWEeTUhbH/EAxUx8G5tmRZBlNXg11cGWwCHqZPlyEhiy4wwVk+5S+ckBtVhdH5vQsMbHi0d0Qqz8KLCPK08Yvbs2abhDFwEnd/c3Jxqk+7+ZyYEoREc3pXUUNPxbG0I+qDbTzWpgkKFmwjO2ikeOieS07Yn6cDX35yEO9FUa4WqaAsKBoMohfhQ5eJdsOXph1NKIttbS9wnkX9Z2xTH+ileutN6zjmeRJmA0x60FeycMyrq1nPHeuDAATE8SqVU9wd3RnwiQGwADihaJfGdj0WxaXqvgJMNgFHJ7ZgDL56biAtBRfgnsyragtrb2zFnzhzMnTsXbrc75zi3jBUrVmDy5MkoVpLwItznMIpWUWxo8kKlUJ4tjul2zI4Xzk7E2/22DFKYVUnCPI9ER44cyW3cZsOWLVtQU1ODUojDsVES+HxTDN+Y5oVNT+TUuRUtw8ZzHI5qelhl674lihzO3r17Rfgv1olnrEAhIC2PxrCmkSxHwMkaVuSTfLpdwGkVcHQUYzkZ3RdAPLrt3r0bCxcuzJs48uOFJZSSANDySAxrGz0DSWD2cT/BWfFmNfkcuWRwuEoOiHd+586dWLJkSQ4Efuz69evCLxXmkxiaXEnMcHkoW84dVn0iWlXhQogcMis81xlJJV3ucDqd2LVrF1auXJkXDm3rYt26dfD7/ShUdkShiFCf1SaBuBUro2hVhTYK5WDmo9VwKpkFcZ+zdetWEbHyDR8OZ/ny5eK3KUlDQ7+UilbcIft5hp0UuZFIj1A6lQQQHzKbN28WAPLBuXr1qjjW1dWFUqmP8pyXyHLayRhVKZaKWBwOk5GgV5Jm9fx9sSoaELcc7pAXLVqUN1pxn7N69eqSwuFyqQn84FNeAUbkR5n7QlAiSYbj3W785L0ygsULxygPykSrxYsXD+uQly1bVhCc0WYuDimOens87zGeV2+kXCmiT8LPOx1FZUOmbZAD2LFjx7DRikMpBA5jqW6khkqRk18+waW1occqYgJWcW2ZkKIo2L59O1atWpXX53DLWb9+fV44fBhevnx5UBmH09PTI97zDt2M2GnmrhSXB9NleWJ8ya24bNoUoFmzZuWFwzvKHTK3HD5HG0779+9HX1/fwDmdnZ04evSo+Mwj0bHuMnRGy8WkU894GZb1ylc26LiMbgr/v7leVrQ1mvJBdXV1eR1yJpQbDSsOhE9w582bh3A4jFOnTsHr9aYOUji/EZGx6EwFnq52oFpLZ8VUztJJYGqvQh9Y/MjYSOb93YSKv99RcS0qj82uRltbGwKBAFwu10AZH1Z86XW0PocDOXTo0LDHPXEVv7vBL4/lmZGPnC1n9sIkU4usg2XK/i5duoRt27YJGHzBvbW1FUuXLkVHRwdKp3t2wdLz8nuvoZ8HvwBzq4f5ZDrMHzt2DCdOnBAL9Xy5Y7yqKA8Wj8fHNRwu6+EFA1mADFQyQMUvbg7X5j3XOxYyCYhhospodS+G5fVROJXSreBl9HhVFF+iDUSe6LkoIV74cABTXQnI7P2FZQqQy6bj95/zolKJYrpbxy+bA7SgxWAnRpUiLkqosjFUEDiZFrHKaf+qnLZpJohjTACtUBiVpWZKGtXh9cW2M69BP56fEsG+TwTR4GB4pjqCV2b6CVpM5Dg1lDza6Vwl/Z38ZjnlVOjnbVbaUrmTW2JihZHvs2mSuZVGU2H+Cw/GcbUf+OHlCsjU+defDGJVYxBfrtNx3iejk/aiprp0zJyQwL7/OrDrsRDeoq3fz1ZGsfeiG9+eHsBbfXY8XRtDy1knvvXxOMJxhtduKzhyw55+UCOJK9TOrKoI5lZH0RZw4QGC/NPmCHrDSUxyyDjSaUfLzBDa+hU85Ezg+212fHOGjiRNVP9xR8Oz9XG81OrCK5+8ix9fLsNZ/720c7QyZUE6E/Nl8ZAB3z+I0fyHg+rwx/HdC27a5pVBfYCdLnSyXYdO28O76OI9UYav1AXR6rHhRxc1eBMK5j8cojaS6I8mMbsmStZz75KO39TwXF0Ik6iNcx6GRjdDlRLBy20ughTHp8mi+qMR7GkrR60jga/Wh1GmJOGjLf3PV8dxulvCkvogHGStZ/1qwXBMA3qjjxbdy4GXpwfxvUeD6AoreDdgRyipiHXjrzXEcN5ro+kCBycNPAjHf57z2TGXLGfDjCQeVGO40O+EJyzhnFeju17GH/FJDzUZ/wuo0BQJp3sd4APqFn2Pi3aov0gW3FhB600hRUxm9fQ+fVu/hhu0q3HWq+L1O3acoTZXNgZw4paanrkVrpzHriorK5+hX0+MdFJYl3GKvtRNF3sjouBnHeW0YQd0R1R0RzVcvCuj2gmc6dXwbshGEGRcCWm0wK6hO8w3/2S841MwnTq5r53A0tKGnQb7qdsaLXKl7vOdmA2XAjac92t4myyuI6yindr5y20HppHfO3bTiX9TG91Rldq2CVh/omNMPEQl4289NjxUpuMpsqQ97W66eaOynn/RhsLJ7IKcsxobG18tzf8Xy3aKmUkj2QW95RZWX87wxy4V/+lXRvdYSlYV49qS8PTP1UVouCv4J1mzxIwBUb9fpeWaluyy+/gI3tDZd6qMP8Lyq2tqehhJeeoaNzeKropKf+h2jLL+8BqbZxSFk/9wyJpqGMgCZCALkIEsQAayABnIAmQgC5CBLEAGsgAZyAJkIAuQgXLmYrRT+pokSR+WqVJJxf88DixZsmTpA6T/Ax/aBPGX97nPAAAAAElFTkSuQmCC",ti=[{icon:sP,text:"Info",name:"info"},{icon:oP,text:"Favorites",name:"fav"},{icon:aP,text:"Subscription",name:"suv"}];function lP(){const[t,e]=w.useState(ti.name);return h.jsxs("div",{children:[h.jsxs("div",{className:"   bg-gradient-to-b text-white from-[#d138fb] to-[#8d3fff] header text-center min-h-[160pt] flex flex-col gap-2 p-4  ",children:[h.jsx(vt,{to:"/",children:h.jsx("img",{src:$m,width:40,className:"absolute  cursor-pointer "})}),h.jsx("img",{src:iP,className:"rounded-full mx-auto ",width:80}),h.jsx("div",{className:"displayname",children:"Displayname"}),h.jsx("div",{className:"text-sm",children:"email@server.com"})]}),h.jsx("div",{className:"menu max-w-[1100px]  shadow-md shadow-black/50 flex justify-around items-center min-h-[80pt] bg-white p-4 border  border-slate-200 rounded-md mx-8 md:mx-auto -mt-[20pt] ",children:ti.map((n,r)=>h.jsxs("div",{onClick:i=>e(n.name),className:"cursor-pointer group",children:[h.jsx("img",{className:"mx-auto",src:n.icon}),h.jsx("div",{className:"text-center text-gray-400 group-hover:text-black",children:n.text})]}))}),h.jsxs("div",{className:"sec-cont bg-red-500 p-4 max-w-[1100px] mx-auto",children:[ti[0].name===t&&h.jsx("div",{children:"Info"}),ti[1].name===t&&h.jsx("div",{children:"My Favs"}),ti[2].name===t&&h.jsx("div",{children:"My Sub"})]})]})}function uP(){return h.jsx("div",{className:"bg-slate-700  text-white min-h-[120pt]",children:"Footer"})}function Xy(){return h.jsxs("div",{className:"dbg-links ",children:[h.jsx("p",{children:"------ DEBUG MENU -----"}),h.jsxs("ul",{className:"flex gap-2 justify-center items-center",children:[h.jsx("li",{children:h.jsx(vt,{to:"/",children:"Home"})}),h.jsx("li",{children:h.jsx(vt,{to:Ae.MY_ACCOUNT.path,children:"My Account"})}),h.jsx("li",{children:h.jsx(vt,{to:Ae.LOGIN.path,children:"Login"})}),h.jsx("li",{children:h.jsx(vt,{to:Ae.LEGAL.path,children:"Legal"})}),h.jsx("li",{children:h.jsx(vt,{to:Ae.SUBCRIPTION.path,children:"Subscription"})}),h.jsx("li",{children:h.jsx(vt,{to:Ae.INTRO.path,children:"Intro"})}),h.jsx("li",{children:h.jsx(vt,{to:Ae.TEST_REC.path,children:"Test"})})]}),h.jsx("p",{children:"------ DEBUG MENU -----"})]})}const cP=()=>{const[t,e]=w.useState(!1);return w.useState(()=>{const n=Yy();e(n)},[]),h.jsxs(h.Fragment,{children:[h.jsx(Xy,{}),h.jsx(V_,{user:t}),h.jsx(E_,{}),h.jsx(uP,{})]})};function Sh(){const[t,e]=w.useState(!1),[n,r]=w.useState("+243893092849");w.useRef();const i=o=>{o.preventDefault();const a=()=>{window.recaptchaVerifier=new p1(Eh,"recaptcha-cont",{size:"invisible",callback:l=>{console.log(`da resp ==> 
`,l)}})};if(n.length>=12){e(!0),a();let l=window.recaptchaVerifier;y1(Eh,n,l).then(u=>{window.confirmationResult=u}).catch(u=>{console.log(u)})}},s=o=>{let a=o.target.value;a.length===6&&(console.log(a),window.confirmationResult.confirm(a).then(u=>{const c=u.user;console.log("user",c)}).catch(u=>{console.log("error => ",u)}))};return h.jsxs("div",{className:" ",children:[h.jsx(Xy,{}),h.jsx("div",{children:"Sign in with phone number"}),h.jsx("div",{children:"Phone number"}),h.jsx("input",{type:"tel",onChange:o=>r(o.target.value),value:n}),h.jsx("p",{children:"Please enter your phone number"}),t&&h.jsxs("div",{children:[h.jsx("div",{children:"OTP"}),h.jsx("input",{type:"text",maxLength:6,onChange:s})]}),!t&&h.jsx("button",{onClick:o=>i(o),children:"Request OTP"}),h.jsx("div",{id:"recaptcha-cont"})]})}function dP(){return h.jsx("div",{children:"Legal"})}function fP({data:t}){const{title:e,features:n,price:r,bg:i,text:s,outline:o,id:a}=t;function l(u){console.log(u)}return h.jsxs("div",{className:`border text-center p-4 m-2 mt-8 min-w-[30%] rounded-lg text-white ${i} `,children:[h.jsx("div",{className:`bg-white w-fit p-2 mx-auto ${s} min-w-[100pt] text-center rounded-lg -mt-8 outline ${o} `,children:e}),h.jsx("div",{className:"my-4 gap-2 flex flex-col",children:n.map((u,c)=>h.jsxs("div",{children:["• ",u]}))}),h.jsxs("div",{className:"text-[40pt]",children:[r," FC"]}),h.jsx("button",{onClick:u=>l(a),className:"border p-1 rounded-lg hover:bg-white/30",children:"BUY NOW"})]})}function hP(){const t=[{title:"Basic",features:["feature 1","feature 2","feature 3","feature 4"],price:5e3,bg:"bg-gradient-to-r from-blue-500 to-purple-500",text:"text-blue-500",outline:"outline-blue-500"},{title:"Standard",features:["feature 1","feature 2","feature 3","feature 4"],price:7500,bg:"bg-gradient-to-r from-orange-500 to-pink-500",text:"text-orange-500",outline:"outline-orange-500"},{title:"Premium",features:["feature 1","feature 2","feature 3","feature 4"],price:1e4,bg:"bg-gradient-to-r from-sky-500 to-blue-500",text:"text-purple-500",outline:"outline-purple-500"}];return h.jsx("div",{className:`  ${wc} md:flex justify-center items-center `,children:t.map((e,n)=>h.jsx(fP,{data:{...e,id:n}},n))})}function pP(){return h.jsx("div",{children:"Intro"})}function Bo(){return Bo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bo.apply(this,arguments)}function It(t){"@babel/helpers - typeof";return It=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},It(t)}function mP(t,e){if(It(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(It(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function gP(t){var e=mP(t,"string");return It(e)==="symbol"?e:String(e)}function yP(t,e,n){return e=gP(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ah(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function zo(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ah(Object(n),!0).forEach(function(r){yP(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ah(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function vP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Zy(t,e){if(t==null)return{};var n=vP(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var ev={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(ev);var wP=ev.exports;const tv=xh(wP);var nv={percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},rv=function(){var e=w.useRef([]),n=w.useRef(null);return w.useEffect(function(){var r=Date.now(),i=!1;e.current.forEach(function(s){if(s){i=!0;var o=s.style;o.transitionDuration=".3s, .3s, .3s, .06s",n.current&&r-n.current<100&&(o.transitionDuration="0s, 0s")}}),i&&(n.current=Date.now())}),e.current},_P=["className","percent","prefixCls","strokeColor","strokeLinecap","strokeWidth","style","trailColor","trailWidth","transition"],IP=function(e){var n=zo(zo({},nv),e),r=n.className,i=n.percent,s=n.prefixCls,o=n.strokeColor,a=n.strokeLinecap,l=n.strokeWidth,u=n.style,c=n.trailColor,f=n.trailWidth,m=n.transition,y=Zy(n,_P);delete y.gapPosition;var _=Array.isArray(i)?i:[i],v=Array.isArray(o)?o:[o],x=rv(),p=l/2,d=100-l/2,g="M ".concat(a==="round"?p:0,",").concat(p,`
         L `).concat(a==="round"?d:100,",").concat(p),I="0 0 100 ".concat(l),S=0;return w.createElement("svg",Bo({className:tv("".concat(s,"-line"),r),viewBox:I,preserveAspectRatio:"none",style:u},y),w.createElement("path",{className:"".concat(s,"-line-trail"),d:g,strokeLinecap:a,stroke:c,strokeWidth:f||l,fillOpacity:"0"}),_.map(function(T,k){var P=1;switch(a){case"round":P=1-l/100;break;case"square":P=1-l/2/100;break;default:P=1;break}var U={strokeDasharray:"".concat(T*P,"px, 100px"),strokeDashoffset:"-".concat(S,"px"),transition:m||"stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear"},A=v[k]||v[v.length-1];return S+=T,w.createElement("path",{key:k,className:"".concat(s,"-line-path"),d:g,strokeLinecap:a,stroke:A,strokeWidth:l,fillOpacity:"0",ref:function(nt){x[k]=nt},style:U})}))};function EP(t){if(Array.isArray(t))return t}function SP(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,s,o,a=[],l=!0,u=!1;try{if(s=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=s.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return a}}function Th(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function AP(t,e){if(t){if(typeof t=="string")return Th(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Th(t,e)}}function TP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kP(t,e){return EP(t)||SP(t,e)||AP(t,e)||TP()}function PP(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var kh=0,CP=PP();function RP(){var t;return CP?(t=kh,kh+=1):t="TEST_OR_SSR",t}const xP=function(t){var e=w.useState(),n=kP(e,2),r=n[0],i=n[1];return w.useEffect(function(){i("rc_progress_".concat(RP()))},[]),t||r};var Ph=function(e){var n=e.bg,r=e.children;return w.createElement("div",{style:{width:"100%",height:"100%",background:n}},r)};function Ch(t,e){return Object.keys(t).map(function(n){var r=parseFloat(n),i="".concat(Math.floor(r*e),"%");return"".concat(t[n]," ").concat(i)})}var NP=w.forwardRef(function(t,e){var n=t.prefixCls,r=t.color,i=t.gradientId,s=t.radius,o=t.style,a=t.ptg,l=t.strokeLinecap,u=t.strokeWidth,c=t.size,f=t.gapDegree,m=r&&It(r)==="object",y=m?"#FFF":void 0,_=c/2,v=w.createElement("circle",{className:"".concat(n,"-circle-path"),r:s,cx:_,cy:_,stroke:y,strokeLinecap:l,strokeWidth:u,opacity:a===0?0:1,style:o,ref:e});if(!m)return v;var x="".concat(i,"-conic"),p=f?"".concat(180+f/2,"deg"):"0deg",d=Ch(r,(360-f)/360),g=Ch(r,1),I="conic-gradient(from ".concat(p,", ").concat(d.join(", "),")"),S="linear-gradient(to ".concat(f?"bottom":"top",", ").concat(g.join(", "),")");return w.createElement(w.Fragment,null,w.createElement("mask",{id:x},v),w.createElement("foreignObject",{x:0,y:0,width:c,height:c,mask:"url(#".concat(x,")")},w.createElement(Ph,{bg:S},w.createElement(Ph,{bg:I}))))}),li=100,cl=function(e,n,r,i,s,o,a,l,u,c){var f=arguments.length>10&&arguments[10]!==void 0?arguments[10]:0,m=r/100*360*((360-o)/360),y=o===0?0:{bottom:0,top:180,left:90,right:-90}[a],_=(100-i)/100*n;u==="round"&&i!==100&&(_+=c/2,_>=n&&(_=n-.01));var v=li/2;return{stroke:typeof l=="string"?l:void 0,strokeDasharray:"".concat(n,"px ").concat(e),strokeDashoffset:_+f,transform:"rotate(".concat(s+m+y,"deg)"),transformOrigin:"".concat(v,"px ").concat(v,"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},OP=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function Rh(t){var e=t??[];return Array.isArray(e)?e:[e]}var bP=function(e){var n=zo(zo({},nv),e),r=n.id,i=n.prefixCls,s=n.steps,o=n.strokeWidth,a=n.trailWidth,l=n.gapDegree,u=l===void 0?0:l,c=n.gapPosition,f=n.trailColor,m=n.strokeLinecap,y=n.style,_=n.className,v=n.strokeColor,x=n.percent,p=Zy(n,OP),d=li/2,g=xP(r),I="".concat(g,"-gradient"),S=d-o/2,T=Math.PI*2*S,k=u>0?90+u/2:-90,P=T*((360-u)/360),U=It(s)==="object"?s:{count:s,space:2},A=U.count,Y=U.space,nt=Rh(x),rt=Rh(v),Hr=rt.find(function(z){return z&&It(z)==="object"}),_a=Hr&&It(Hr)==="object",zt=_a?"butt":m,Wr=cl(T,P,0,100,k,u,c,f,zt,o),C=rv(),D=function(){var K=0;return nt.map(function(mt,Re){var kn=rt[Re]||rt[rt.length-1],Me=cl(T,P,K,mt,k,u,c,kn,zt,o);return K+=mt,w.createElement(NP,{key:Re,color:kn,ptg:mt,radius:S,prefixCls:i,gradientId:I,style:Me,strokeLinecap:zt,strokeWidth:o,gapDegree:u,ref:function(Ia){C[Re]=Ia},size:li})}).reverse()},L=function(){var K=Math.round(A*(nt[0]/100)),mt=100/A,Re=0;return new Array(A).fill(null).map(function(kn,Me){var Tt=Me<=K-1?rt[0]:f,Ia=Tt&&It(Tt)==="object"?"url(#".concat(I,")"):void 0,ed=cl(T,P,Re,mt,k,u,c,Tt,"butt",o,Y);return Re+=(P-ed.strokeDashoffset+Y)*100/P,w.createElement("circle",{key:Me,className:"".concat(i,"-circle-path"),r:S,cx:d,cy:d,stroke:Ia,strokeWidth:o,opacity:1,style:ed,ref:function(iv){C[Me]=iv}})})};return w.createElement("svg",Bo({className:tv("".concat(i,"-circle"),_),viewBox:"0 0 ".concat(li," ").concat(li),style:y,id:r,role:"presentation"},p),!A&&w.createElement("circle",{className:"".concat(i,"-circle-trail"),r:S,cx:d,cy:d,stroke:f,strokeLinecap:zt,strokeWidth:a||o,style:Wr}),A?L():D())};function DP(){const[t,e]=w.useState(!1),[n,r]=w.useState(null),[i,s]=w.useState(null),o=w.useRef(null),a=w.useRef(null),l=()=>{navigator.mediaDevices.getUserMedia({audio:!0}).then(m=>{const y=new MediaRecorder(m),_=[];y.ondataavailable=v=>{v.data.size>0&&_.push(v.data)},y.onstop=()=>{const v=new Blob(_,{type:"audio/wav"});r(v),console.log(v.size+" bytes")},y.start(),e(!0),setTimeout(()=>{y.stop(),m.getTracks().forEach(v=>v.stop()),e(!1)},5e3)}).catch(m=>console.error("Error accessing microphone:",m))},u=()=>{if(n){const m=URL.createObjectURL(n);o.current.src=m,o.current.play()}},c=m=>{const y=m.target.files[0];y&&s(y)},f=()=>{if(i){const m=new FormData;m.append("audioFile",i),fetch("/your-upload-url",{method:"POST",body:m}).then(y=>{console.log("Upload successful:",y)}).catch(y=>{console.error("Upload error:",y)})}};return h.jsxs("div",{children:[h.jsx("button",{onClick:l,disabled:t,children:t?"Recording...":"Start Recording"}),h.jsx("button",{onClick:u,disabled:!n,children:"Play Audio"}),h.jsx("input",{type:"file",accept:"audio/*",onChange:c,ref:a}),h.jsx("button",{onClick:f,disabled:!i,children:"Upload Audio"}),h.jsx("audio",{ref:o,controls:!0}),h.jsxs(h.Fragment,{children:[h.jsx(IP,{percent:10,strokeWidth:4,strokeColor:"green"}),h.jsx(bP,{percent:10,strokeWidth:4,strokeColor:"#D3D3D3"})]})]})}function LP({}){return h.jsxs("div",{children:["cool",h.jsx(DP,{})]})}function VP(){w.useState(D_.HOME.path),w.useState({});const[t,e]=w.useState(!0);return w.useEffect(()=>{const n=Yy(!0);e(n)},[]),h.jsx(x_,{basename:"/kooop",children:h.jsxs(A_,{children:[h.jsxs(st,{path:"/",element:t?h.jsx(cP,{}):h.jsx(Sh,{}),children:[h.jsx(st,{index:!0,element:h.jsx(eP,{})}),h.jsx(st,{path:Ae.VIEW_KOOP.path,element:h.jsx(rP,{})}),h.jsx(st,{path:Ae.LEGAL.path,element:h.jsx(dP,{})}),h.jsx(st,{path:Ae.SUBCRIPTION.path,element:h.jsx(hP,{})}),h.jsx(st,{path:"*",element:h.jsx(tP,{})}),h.jsx(st,{path:Ae.TEST_REC.path,element:h.jsx(LP,{})})]}),h.jsx(st,{path:Ae.MY_ACCOUNT.path,element:h.jsx(lP,{})}),h.jsx(st,{path:"/intro",element:h.jsx(pP,{})}),h.jsx(st,{path:Ae.LOGIN.path,element:h.jsx(Sh,{})})]})})}dl.createRoot(document.getElementById("root")).render(h.jsx(Fh.StrictMode,{children:h.jsx(VP,{})}));
