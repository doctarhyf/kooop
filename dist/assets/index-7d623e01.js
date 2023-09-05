function jy(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Fy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var gh={exports:{}},bo={},yh={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qi=Symbol.for("react.element"),By=Symbol.for("react.portal"),zy=Symbol.for("react.fragment"),Hy=Symbol.for("react.strict_mode"),Wy=Symbol.for("react.profiler"),$y=Symbol.for("react.provider"),qy=Symbol.for("react.context"),Ky=Symbol.for("react.forward_ref"),Gy=Symbol.for("react.suspense"),Qy=Symbol.for("react.memo"),Jy=Symbol.for("react.lazy"),Kc=Symbol.iterator;function Yy(t){return t===null||typeof t!="object"?null:(t=Kc&&t[Kc]||t["@@iterator"],typeof t=="function"?t:null)}var vh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wh=Object.assign,_h={};function Rr(t,e,n){this.props=t,this.context=e,this.refs=_h,this.updater=n||vh}Rr.prototype.isReactComponent={};Rr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Rr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ih(){}Ih.prototype=Rr.prototype;function hu(t,e,n){this.props=t,this.context=e,this.refs=_h,this.updater=n||vh}var pu=hu.prototype=new Ih;pu.constructor=hu;wh(pu,Rr.prototype);pu.isPureReactComponent=!0;var Gc=Array.isArray,Eh=Object.prototype.hasOwnProperty,mu={current:null},Ah={key:!0,ref:!0,__self:!0,__source:!0};function Sh(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Eh.call(e,r)&&!Ah.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:qi,type:t,key:s,ref:o,props:i,_owner:mu.current}}function Xy(t,e){return{$$typeof:qi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gu(t){return typeof t=="object"&&t!==null&&t.$$typeof===qi}function Zy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qc=/\/+/g;function ma(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Zy(""+t.key):e.toString(36)}function Cs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case qi:case By:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ma(o,0):r,Gc(i)?(n="",t!=null&&(n=t.replace(Qc,"$&/")+"/"),Cs(i,e,n,"",function(u){return u})):i!=null&&(gu(i)&&(i=Xy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Qc,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Gc(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ma(s,a);o+=Cs(s,e,n,l,i)}else if(l=Yy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ma(s,a++),o+=Cs(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ss(t,e,n){if(t==null)return t;var r=[],i=0;return Cs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ev(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ke={current:null},xs={transition:null},tv={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:xs,ReactCurrentOwner:mu};V.Children={map:ss,forEach:function(t,e,n){ss(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ss(t,function(){e++}),e},toArray:function(t){return ss(t,function(e){return e})||[]},only:function(t){if(!gu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};V.Component=Rr;V.Fragment=zy;V.Profiler=Wy;V.PureComponent=hu;V.StrictMode=Hy;V.Suspense=Gy;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tv;V.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=wh({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Eh.call(e,l)&&!Ah.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:qi,type:t.type,key:i,ref:s,props:r,_owner:o}};V.createContext=function(t){return t={$$typeof:qy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$y,_context:t},t.Consumer=t};V.createElement=Sh;V.createFactory=function(t){var e=Sh.bind(null,t);return e.type=t,e};V.createRef=function(){return{current:null}};V.forwardRef=function(t){return{$$typeof:Ky,render:t}};V.isValidElement=gu;V.lazy=function(t){return{$$typeof:Jy,_payload:{_status:-1,_result:t},_init:ev}};V.memo=function(t,e){return{$$typeof:Qy,type:t,compare:e===void 0?null:e}};V.startTransition=function(t){var e=xs.transition;xs.transition={};try{t()}finally{xs.transition=e}};V.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};V.useCallback=function(t,e){return ke.current.useCallback(t,e)};V.useContext=function(t){return ke.current.useContext(t)};V.useDebugValue=function(){};V.useDeferredValue=function(t){return ke.current.useDeferredValue(t)};V.useEffect=function(t,e){return ke.current.useEffect(t,e)};V.useId=function(){return ke.current.useId()};V.useImperativeHandle=function(t,e,n){return ke.current.useImperativeHandle(t,e,n)};V.useInsertionEffect=function(t,e){return ke.current.useInsertionEffect(t,e)};V.useLayoutEffect=function(t,e){return ke.current.useLayoutEffect(t,e)};V.useMemo=function(t,e){return ke.current.useMemo(t,e)};V.useReducer=function(t,e,n){return ke.current.useReducer(t,e,n)};V.useRef=function(t){return ke.current.useRef(t)};V.useState=function(t){return ke.current.useState(t)};V.useSyncExternalStore=function(t,e,n){return ke.current.useSyncExternalStore(t,e,n)};V.useTransition=function(){return ke.current.useTransition()};V.version="18.2.0";yh.exports=V;var E=yh.exports;const Th=Fy(E),nv=jy({__proto__:null,default:Th},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv=E,iv=Symbol.for("react.element"),sv=Symbol.for("react.fragment"),ov=Object.prototype.hasOwnProperty,av=rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lv={key:!0,ref:!0,__self:!0,__source:!0};function kh(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ov.call(e,r)&&!lv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:iv,type:t,key:s,ref:o,props:i,_owner:av.current}}bo.Fragment=sv;bo.jsx=kh;bo.jsxs=kh;gh.exports=bo;var p=gh.exports,rl={},Ph={exports:{}},$e={},Rh={exports:{}},Ch={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,L){var b=k.length;k.push(L);e:for(;0<b;){var Y=b-1>>>1,ae=k[Y];if(0<i(ae,L))k[Y]=L,k[b]=ae,b=Y;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var L=k[0],b=k.pop();if(b!==L){k[0]=b;e:for(var Y=0,ae=k.length,rs=ae>>>1;Y<rs;){var vn=2*(Y+1)-1,pa=k[vn],wn=vn+1,is=k[wn];if(0>i(pa,b))wn<ae&&0>i(is,pa)?(k[Y]=is,k[wn]=b,Y=wn):(k[Y]=pa,k[vn]=b,Y=vn);else if(wn<ae&&0>i(is,b))k[Y]=is,k[wn]=b,Y=wn;else break e}}return L}function i(k,L){var b=k.sortIndex-L.sortIndex;return b!==0?b:k.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,g=3,y=!1,w=!1,_=!1,N=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(k){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=k)r(u),L.sortIndex=L.expirationTime,e(l,L);else break;L=n(u)}}function v(k){if(_=!1,m(k),!w)if(n(l)!==null)w=!0,fa(A);else{var L=n(u);L!==null&&ha(v,L.startTime-k)}}function A(k,L){w=!1,_&&(_=!1,h(x),x=-1),y=!0;var b=g;try{for(m(L),f=n(l);f!==null&&(!(f.expirationTime>L)||k&&!oe());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,g=f.priorityLevel;var ae=Y(f.expirationTime<=L);L=t.unstable_now(),typeof ae=="function"?f.callback=ae:f===n(l)&&r(l),m(L)}else r(l);f=n(l)}if(f!==null)var rs=!0;else{var vn=n(u);vn!==null&&ha(v,vn.startTime-L),rs=!1}return rs}finally{f=null,g=b,y=!1}}var P=!1,R=null,x=-1,B=5,S=-1;function oe(){return!(t.unstable_now()-S<B)}function qn(){if(R!==null){var k=t.unstable_now();S=k;var L=!0;try{L=R(!0,k)}finally{L?Mr():(P=!1,R=null)}}else P=!1}var Mr;if(typeof d=="function")Mr=function(){d(qn)};else if(typeof MessageChannel<"u"){var qc=new MessageChannel,Uy=qc.port2;qc.port1.onmessage=qn,Mr=function(){Uy.postMessage(null)}}else Mr=function(){N(qn,0)};function fa(k){R=k,P||(P=!0,Mr())}function ha(k,L){x=N(function(){k(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){w||y||(w=!0,fa(A))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var b=g;g=L;try{return k()}finally{g=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,L){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var b=g;g=k;try{return L()}finally{g=b}},t.unstable_scheduleCallback=function(k,L,b){var Y=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?Y+b:Y):b=Y,k){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=b+ae,k={id:c++,callback:L,priorityLevel:k,startTime:b,expirationTime:ae,sortIndex:-1},b>Y?(k.sortIndex=b,e(u,k),n(l)===null&&k===n(u)&&(_?(h(x),x=-1):_=!0,ha(v,b-Y))):(k.sortIndex=ae,e(l,k),w||y||(w=!0,fa(A))),k},t.unstable_shouldYield=oe,t.unstable_wrapCallback=function(k){var L=g;return function(){var b=g;g=L;try{return k.apply(this,arguments)}finally{g=b}}}})(Ch);Rh.exports=Ch;var uv=Rh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh=E,We=uv;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nh=new Set,vi={};function Bn(t,e){yr(t,e),yr(t+"Capture",e)}function yr(t,e){for(vi[t]=e,t=0;t<e.length;t++)Nh.add(e[t])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),il=Object.prototype.hasOwnProperty,cv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jc={},Yc={};function dv(t){return il.call(Yc,t)?!0:il.call(Jc,t)?!1:cv.test(t)?Yc[t]=!0:(Jc[t]=!0,!1)}function fv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hv(t,e,n,r){if(e===null||typeof e>"u"||fv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ge[t]=new Pe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ge[e]=new Pe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ge[t]=new Pe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ge[t]=new Pe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ge[t]=new Pe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ge[t]=new Pe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ge[t]=new Pe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ge[t]=new Pe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ge[t]=new Pe(t,5,!1,t.toLowerCase(),null,!1,!1)});var yu=/[\-:]([a-z])/g;function vu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yu,vu);ge[e]=new Pe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yu,vu);ge[e]=new Pe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yu,vu);ge[e]=new Pe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ge[t]=new Pe(t,1,!1,t.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ge[t]=new Pe(t,1,!1,t.toLowerCase(),null,!0,!0)});function wu(t,e,n,r){var i=ge.hasOwnProperty(e)?ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hv(e,n,i,r)&&(n=null),r||i===null?dv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dt=xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,os=Symbol.for("react.element"),Jn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),_u=Symbol.for("react.strict_mode"),sl=Symbol.for("react.profiler"),Oh=Symbol.for("react.provider"),Dh=Symbol.for("react.context"),Iu=Symbol.for("react.forward_ref"),ol=Symbol.for("react.suspense"),al=Symbol.for("react.suspense_list"),Eu=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),Lh=Symbol.for("react.offscreen"),Xc=Symbol.iterator;function Ur(t){return t===null||typeof t!="object"?null:(t=Xc&&t[Xc]||t["@@iterator"],typeof t=="function"?t:null)}var G=Object.assign,ga;function Qr(t){if(ga===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ga=e&&e[1]||""}return`
`+ga+t}var ya=!1;function va(t,e){if(!t||ya)return"";ya=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ya=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qr(t):""}function pv(t){switch(t.tag){case 5:return Qr(t.type);case 16:return Qr("Lazy");case 13:return Qr("Suspense");case 19:return Qr("SuspenseList");case 0:case 2:case 15:return t=va(t.type,!1),t;case 11:return t=va(t.type.render,!1),t;case 1:return t=va(t.type,!0),t;default:return""}}function ll(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yn:return"Fragment";case Jn:return"Portal";case sl:return"Profiler";case _u:return"StrictMode";case ol:return"Suspense";case al:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dh:return(t.displayName||"Context")+".Consumer";case Oh:return(t._context.displayName||"Context")+".Provider";case Iu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Eu:return e=t.displayName||null,e!==null?e:ll(t.type)||"Memo";case Mt:e=t._payload,t=t._init;try{return ll(t(e))}catch{}}return null}function mv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ll(e);case 8:return e===_u?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bh(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gv(t){var e=bh(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function as(t){t._valueTracker||(t._valueTracker=gv(t))}function Vh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=bh(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $s(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ul(t,e){var n=e.checked;return G({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=cn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Mh(t,e){e=e.checked,e!=null&&wu(t,"checked",e,!1)}function cl(t,e){Mh(t,e);var n=cn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dl(t,e.type,n):e.hasOwnProperty("defaultValue")&&dl(t,e.type,cn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ed(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function dl(t,e,n){(e!=="number"||$s(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Jr=Array.isArray;function ur(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+cn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function fl(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return G({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function td(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(Jr(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cn(n)}}function Uh(t,e){var n=cn(e.value),r=cn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function nd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jh(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ls,Fh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ls=ls||document.createElement("div"),ls.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ls.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yv=["Webkit","ms","Moz","O"];Object.keys(ti).forEach(function(t){yv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ti[e]=ti[t]})});function Bh(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ti.hasOwnProperty(t)&&ti[t]?(""+e).trim():e+"px"}function zh(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Bh(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var vv=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pl(t,e){if(e){if(vv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function ml(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gl=null;function Au(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yl=null,cr=null,dr=null;function rd(t){if(t=Qi(t)){if(typeof yl!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Fo(e),yl(t.stateNode,t.type,e))}}function Hh(t){cr?dr?dr.push(t):dr=[t]:cr=t}function Wh(){if(cr){var t=cr,e=dr;if(dr=cr=null,rd(t),e)for(t=0;t<e.length;t++)rd(e[t])}}function $h(t,e){return t(e)}function qh(){}var wa=!1;function Kh(t,e,n){if(wa)return t(e,n);wa=!0;try{return $h(t,e,n)}finally{wa=!1,(cr!==null||dr!==null)&&(qh(),Wh())}}function _i(t,e){var n=t.stateNode;if(n===null)return null;var r=Fo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var vl=!1;if(kt)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){vl=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{vl=!1}function wv(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ni=!1,qs=null,Ks=!1,wl=null,_v={onError:function(t){ni=!0,qs=t}};function Iv(t,e,n,r,i,s,o,a,l){ni=!1,qs=null,wv.apply(_v,arguments)}function Ev(t,e,n,r,i,s,o,a,l){if(Iv.apply(this,arguments),ni){if(ni){var u=qs;ni=!1,qs=null}else throw Error(I(198));Ks||(Ks=!0,wl=u)}}function zn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gh(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function id(t){if(zn(t)!==t)throw Error(I(188))}function Av(t){var e=t.alternate;if(!e){if(e=zn(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return id(i),t;if(s===r)return id(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function Qh(t){return t=Av(t),t!==null?Jh(t):null}function Jh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jh(t);if(e!==null)return e;t=t.sibling}return null}var Yh=We.unstable_scheduleCallback,sd=We.unstable_cancelCallback,Sv=We.unstable_shouldYield,Tv=We.unstable_requestPaint,X=We.unstable_now,kv=We.unstable_getCurrentPriorityLevel,Su=We.unstable_ImmediatePriority,Xh=We.unstable_UserBlockingPriority,Gs=We.unstable_NormalPriority,Pv=We.unstable_LowPriority,Zh=We.unstable_IdlePriority,Vo=null,mt=null;function Rv(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Vo,t,void 0,(t.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:Nv,Cv=Math.log,xv=Math.LN2;function Nv(t){return t>>>=0,t===0?32:31-(Cv(t)/xv|0)|0}var us=64,cs=4194304;function Yr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qs(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Yr(a):(s&=o,s!==0&&(r=Yr(s)))}else o=n&~i,o!==0?r=Yr(o):s!==0&&(r=Yr(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-it(e),i=1<<n,r|=t[n],e&=~i;return r}function Ov(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-it(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Ov(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _l(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ep(){var t=us;return us<<=1,!(us&4194240)&&(us=64),t}function _a(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ki(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-it(e),t[e]=n}function Lv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-it(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Tu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-it(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var F=0;function tp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var np,ku,rp,ip,sp,Il=!1,ds=[],Jt=null,Yt=null,Xt=null,Ii=new Map,Ei=new Map,Ft=[],bv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function od(t,e){switch(t){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Ii.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(e.pointerId)}}function Fr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Qi(e),e!==null&&ku(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Vv(t,e,n,r,i){switch(e){case"focusin":return Jt=Fr(Jt,t,e,n,r,i),!0;case"dragenter":return Yt=Fr(Yt,t,e,n,r,i),!0;case"mouseover":return Xt=Fr(Xt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ii.set(s,Fr(Ii.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ei.set(s,Fr(Ei.get(s)||null,t,e,n,r,i)),!0}return!1}function op(t){var e=An(t.target);if(e!==null){var n=zn(e);if(n!==null){if(e=n.tag,e===13){if(e=Gh(n),e!==null){t.blockedOn=e,sp(t.priority,function(){rp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ns(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=El(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);gl=r,n.target.dispatchEvent(r),gl=null}else return e=Qi(n),e!==null&&ku(e),t.blockedOn=n,!1;e.shift()}return!0}function ad(t,e,n){Ns(t)&&n.delete(e)}function Mv(){Il=!1,Jt!==null&&Ns(Jt)&&(Jt=null),Yt!==null&&Ns(Yt)&&(Yt=null),Xt!==null&&Ns(Xt)&&(Xt=null),Ii.forEach(ad),Ei.forEach(ad)}function Br(t,e){t.blockedOn===e&&(t.blockedOn=null,Il||(Il=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,Mv)))}function Ai(t){function e(i){return Br(i,t)}if(0<ds.length){Br(ds[0],t);for(var n=1;n<ds.length;n++){var r=ds[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jt!==null&&Br(Jt,t),Yt!==null&&Br(Yt,t),Xt!==null&&Br(Xt,t),Ii.forEach(e),Ei.forEach(e),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)op(n),n.blockedOn===null&&Ft.shift()}var fr=Dt.ReactCurrentBatchConfig,Js=!0;function Uv(t,e,n,r){var i=F,s=fr.transition;fr.transition=null;try{F=1,Pu(t,e,n,r)}finally{F=i,fr.transition=s}}function jv(t,e,n,r){var i=F,s=fr.transition;fr.transition=null;try{F=4,Pu(t,e,n,r)}finally{F=i,fr.transition=s}}function Pu(t,e,n,r){if(Js){var i=El(t,e,n,r);if(i===null)xa(t,e,r,Ys,n),od(t,r);else if(Vv(i,t,e,n,r))r.stopPropagation();else if(od(t,r),e&4&&-1<bv.indexOf(t)){for(;i!==null;){var s=Qi(i);if(s!==null&&np(s),s=El(t,e,n,r),s===null&&xa(t,e,r,Ys,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else xa(t,e,r,null,n)}}var Ys=null;function El(t,e,n,r){if(Ys=null,t=Au(r),t=An(t),t!==null)if(e=zn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Gh(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ys=t,null}function ap(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kv()){case Su:return 1;case Xh:return 4;case Gs:case Pv:return 16;case Zh:return 536870912;default:return 16}default:return 16}}var qt=null,Ru=null,Os=null;function lp(){if(Os)return Os;var t,e=Ru,n=e.length,r,i="value"in qt?qt.value:qt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Os=i.slice(t,1<r?1-r:void 0)}function Ds(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fs(){return!0}function ld(){return!1}function qe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fs:ld,this.isPropagationStopped=ld,this}return G(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fs)},persist:function(){},isPersistent:fs}),e}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cu=qe(Cr),Gi=G({},Cr,{view:0,detail:0}),Fv=qe(Gi),Ia,Ea,zr,Mo=G({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zr&&(zr&&t.type==="mousemove"?(Ia=t.screenX-zr.screenX,Ea=t.screenY-zr.screenY):Ea=Ia=0,zr=t),Ia)},movementY:function(t){return"movementY"in t?t.movementY:Ea}}),ud=qe(Mo),Bv=G({},Mo,{dataTransfer:0}),zv=qe(Bv),Hv=G({},Gi,{relatedTarget:0}),Aa=qe(Hv),Wv=G({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),$v=qe(Wv),qv=G({},Cr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kv=qe(qv),Gv=G({},Cr,{data:0}),cd=qe(Gv),Qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Yv[t])?!!e[t]:!1}function xu(){return Xv}var Zv=G({},Gi,{key:function(t){if(t.key){var e=Qv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ds(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(t){return t.type==="keypress"?Ds(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ds(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),e0=qe(Zv),t0=G({},Mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dd=qe(t0),n0=G({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),r0=qe(n0),i0=G({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),s0=qe(i0),o0=G({},Mo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),a0=qe(o0),l0=[9,13,27,32],Nu=kt&&"CompositionEvent"in window,ri=null;kt&&"documentMode"in document&&(ri=document.documentMode);var u0=kt&&"TextEvent"in window&&!ri,up=kt&&(!Nu||ri&&8<ri&&11>=ri),fd=String.fromCharCode(32),hd=!1;function cp(t,e){switch(t){case"keyup":return l0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xn=!1;function c0(t,e){switch(t){case"compositionend":return dp(e);case"keypress":return e.which!==32?null:(hd=!0,fd);case"textInput":return t=e.data,t===fd&&hd?null:t;default:return null}}function d0(t,e){if(Xn)return t==="compositionend"||!Nu&&cp(t,e)?(t=lp(),Os=Ru=qt=null,Xn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return up&&e.locale!=="ko"?null:e.data;default:return null}}var f0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!f0[t.type]:e==="textarea"}function fp(t,e,n,r){Hh(r),e=Xs(e,"onChange"),0<e.length&&(n=new Cu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ii=null,Si=null;function h0(t){Ap(t,0)}function Uo(t){var e=tr(t);if(Vh(e))return t}function p0(t,e){if(t==="change")return e}var hp=!1;if(kt){var Sa;if(kt){var Ta="oninput"in document;if(!Ta){var md=document.createElement("div");md.setAttribute("oninput","return;"),Ta=typeof md.oninput=="function"}Sa=Ta}else Sa=!1;hp=Sa&&(!document.documentMode||9<document.documentMode)}function gd(){ii&&(ii.detachEvent("onpropertychange",pp),Si=ii=null)}function pp(t){if(t.propertyName==="value"&&Uo(Si)){var e=[];fp(e,Si,t,Au(t)),Kh(h0,e)}}function m0(t,e,n){t==="focusin"?(gd(),ii=e,Si=n,ii.attachEvent("onpropertychange",pp)):t==="focusout"&&gd()}function g0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uo(Si)}function y0(t,e){if(t==="click")return Uo(e)}function v0(t,e){if(t==="input"||t==="change")return Uo(e)}function w0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ot=typeof Object.is=="function"?Object.is:w0;function Ti(t,e){if(ot(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!il.call(e,i)||!ot(t[i],e[i]))return!1}return!0}function yd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vd(t,e){var n=yd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yd(n)}}function mp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?mp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gp(){for(var t=window,e=$s();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$s(t.document)}return e}function Ou(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _0(t){var e=gp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&mp(n.ownerDocument.documentElement,n)){if(r!==null&&Ou(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=vd(n,s);var o=vd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var I0=kt&&"documentMode"in document&&11>=document.documentMode,Zn=null,Al=null,si=null,Sl=!1;function wd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sl||Zn==null||Zn!==$s(r)||(r=Zn,"selectionStart"in r&&Ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),si&&Ti(si,r)||(si=r,r=Xs(Al,"onSelect"),0<r.length&&(e=new Cu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zn)))}function hs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var er={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},ka={},yp={};kt&&(yp=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function jo(t){if(ka[t])return ka[t];if(!er[t])return t;var e=er[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yp)return ka[t]=e[n];return t}var vp=jo("animationend"),wp=jo("animationiteration"),_p=jo("animationstart"),Ip=jo("transitionend"),Ep=new Map,_d="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(t,e){Ep.set(t,e),Bn(e,[t])}for(var Pa=0;Pa<_d.length;Pa++){var Ra=_d[Pa],E0=Ra.toLowerCase(),A0=Ra[0].toUpperCase()+Ra.slice(1);hn(E0,"on"+A0)}hn(vp,"onAnimationEnd");hn(wp,"onAnimationIteration");hn(_p,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(Ip,"onTransitionEnd");yr("onMouseEnter",["mouseout","mouseover"]);yr("onMouseLeave",["mouseout","mouseover"]);yr("onPointerEnter",["pointerout","pointerover"]);yr("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));function Id(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ev(r,e,void 0,t),t.currentTarget=null}function Ap(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Id(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Id(i,a,u),s=l}}}if(Ks)throw t=wl,Ks=!1,wl=null,t}function H(t,e){var n=e[Cl];n===void 0&&(n=e[Cl]=new Set);var r=t+"__bubble";n.has(r)||(Sp(e,t,2,!1),n.add(r))}function Ca(t,e,n){var r=0;e&&(r|=4),Sp(n,t,r,e)}var ps="_reactListening"+Math.random().toString(36).slice(2);function ki(t){if(!t[ps]){t[ps]=!0,Nh.forEach(function(n){n!=="selectionchange"&&(S0.has(n)||Ca(n,!1,t),Ca(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ps]||(e[ps]=!0,Ca("selectionchange",!1,e))}}function Sp(t,e,n,r){switch(ap(e)){case 1:var i=Uv;break;case 4:i=jv;break;default:i=Pu}n=i.bind(null,e,n,t),i=void 0,!vl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function xa(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=An(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Kh(function(){var u=s,c=Au(n),f=[];e:{var g=Ep.get(t);if(g!==void 0){var y=Cu,w=t;switch(t){case"keypress":if(Ds(n)===0)break e;case"keydown":case"keyup":y=e0;break;case"focusin":w="focus",y=Aa;break;case"focusout":w="blur",y=Aa;break;case"beforeblur":case"afterblur":y=Aa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=zv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=r0;break;case vp:case wp:case _p:y=$v;break;case Ip:y=s0;break;case"scroll":y=Fv;break;case"wheel":y=a0;break;case"copy":case"cut":case"paste":y=Kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=dd}var _=(e&4)!==0,N=!_&&t==="scroll",h=_?g!==null?g+"Capture":null:g;_=[];for(var d=u,m;d!==null;){m=d;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,h!==null&&(v=_i(d,h),v!=null&&_.push(Pi(d,v,m)))),N)break;d=d.return}0<_.length&&(g=new y(g,w,null,n,c),f.push({event:g,listeners:_}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",g&&n!==gl&&(w=n.relatedTarget||n.fromElement)&&(An(w)||w[Pt]))break e;if((y||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?An(w):null,w!==null&&(N=zn(w),w!==N||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(_=ud,v="onMouseLeave",h="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(_=dd,v="onPointerLeave",h="onPointerEnter",d="pointer"),N=y==null?g:tr(y),m=w==null?g:tr(w),g=new _(v,d+"leave",y,n,c),g.target=N,g.relatedTarget=m,v=null,An(c)===u&&(_=new _(h,d+"enter",w,n,c),_.target=m,_.relatedTarget=N,v=_),N=v,y&&w)t:{for(_=y,h=w,d=0,m=_;m;m=Kn(m))d++;for(m=0,v=h;v;v=Kn(v))m++;for(;0<d-m;)_=Kn(_),d--;for(;0<m-d;)h=Kn(h),m--;for(;d--;){if(_===h||h!==null&&_===h.alternate)break t;_=Kn(_),h=Kn(h)}_=null}else _=null;y!==null&&Ed(f,g,y,_,!1),w!==null&&N!==null&&Ed(f,N,w,_,!0)}}e:{if(g=u?tr(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var A=p0;else if(pd(g))if(hp)A=v0;else{A=g0;var P=m0}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(A=y0);if(A&&(A=A(t,u))){fp(f,A,n,c);break e}P&&P(t,g,u),t==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&dl(g,"number",g.value)}switch(P=u?tr(u):window,t){case"focusin":(pd(P)||P.contentEditable==="true")&&(Zn=P,Al=u,si=null);break;case"focusout":si=Al=Zn=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,wd(f,n,c);break;case"selectionchange":if(I0)break;case"keydown":case"keyup":wd(f,n,c)}var R;if(Nu)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Xn?cp(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(up&&n.locale!=="ko"&&(Xn||x!=="onCompositionStart"?x==="onCompositionEnd"&&Xn&&(R=lp()):(qt=c,Ru="value"in qt?qt.value:qt.textContent,Xn=!0)),P=Xs(u,x),0<P.length&&(x=new cd(x,t,null,n,c),f.push({event:x,listeners:P}),R?x.data=R:(R=dp(n),R!==null&&(x.data=R)))),(R=u0?c0(t,n):d0(t,n))&&(u=Xs(u,"onBeforeInput"),0<u.length&&(c=new cd("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=R))}Ap(f,e)})}function Pi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xs(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=_i(t,n),s!=null&&r.unshift(Pi(t,s,i)),s=_i(t,e),s!=null&&r.push(Pi(t,s,i))),t=t.return}return r}function Kn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ed(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=_i(n,s),l!=null&&o.unshift(Pi(n,l,a))):i||(l=_i(n,s),l!=null&&o.push(Pi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var T0=/\r\n?/g,k0=/\u0000|\uFFFD/g;function Ad(t){return(typeof t=="string"?t:""+t).replace(T0,`
`).replace(k0,"")}function ms(t,e,n){if(e=Ad(e),Ad(t)!==e&&n)throw Error(I(425))}function Zs(){}var Tl=null,kl=null;function Pl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rl=typeof setTimeout=="function"?setTimeout:void 0,P0=typeof clearTimeout=="function"?clearTimeout:void 0,Sd=typeof Promise=="function"?Promise:void 0,R0=typeof queueMicrotask=="function"?queueMicrotask:typeof Sd<"u"?function(t){return Sd.resolve(null).then(t).catch(C0)}:Rl;function C0(t){setTimeout(function(){throw t})}function Na(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ai(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ai(e)}function Zt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Td(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xr=Math.random().toString(36).slice(2),ht="__reactFiber$"+xr,Ri="__reactProps$"+xr,Pt="__reactContainer$"+xr,Cl="__reactEvents$"+xr,x0="__reactListeners$"+xr,N0="__reactHandles$"+xr;function An(t){var e=t[ht];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pt]||n[ht]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Td(t);t!==null;){if(n=t[ht])return n;t=Td(t)}return e}t=n,n=t.parentNode}return null}function Qi(t){return t=t[ht]||t[Pt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function tr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Fo(t){return t[Ri]||null}var xl=[],nr=-1;function pn(t){return{current:t}}function W(t){0>nr||(t.current=xl[nr],xl[nr]=null,nr--)}function z(t,e){nr++,xl[nr]=t.current,t.current=e}var dn={},Ie=pn(dn),Ne=pn(!1),xn=dn;function vr(t,e){var n=t.type.contextTypes;if(!n)return dn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Oe(t){return t=t.childContextTypes,t!=null}function eo(){W(Ne),W(Ie)}function kd(t,e,n){if(Ie.current!==dn)throw Error(I(168));z(Ie,e),z(Ne,n)}function Tp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,mv(t)||"Unknown",i));return G({},n,r)}function to(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dn,xn=Ie.current,z(Ie,t),z(Ne,Ne.current),!0}function Pd(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=Tp(t,e,xn),r.__reactInternalMemoizedMergedChildContext=t,W(Ne),W(Ie),z(Ie,t)):W(Ne),z(Ne,n)}var wt=null,Bo=!1,Oa=!1;function kp(t){wt===null?wt=[t]:wt.push(t)}function O0(t){Bo=!0,kp(t)}function mn(){if(!Oa&&wt!==null){Oa=!0;var t=0,e=F;try{var n=wt;for(F=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wt=null,Bo=!1}catch(i){throw wt!==null&&(wt=wt.slice(t+1)),Yh(Su,mn),i}finally{F=e,Oa=!1}}return null}var rr=[],ir=0,no=null,ro=0,Ke=[],Ge=0,Nn=null,It=1,Et="";function _n(t,e){rr[ir++]=ro,rr[ir++]=no,no=t,ro=e}function Pp(t,e,n){Ke[Ge++]=It,Ke[Ge++]=Et,Ke[Ge++]=Nn,Nn=t;var r=It;t=Et;var i=32-it(r)-1;r&=~(1<<i),n+=1;var s=32-it(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,It=1<<32-it(e)+i|n<<i|r,Et=s+t}else It=1<<s|n<<i|r,Et=t}function Du(t){t.return!==null&&(_n(t,1),Pp(t,1,0))}function Lu(t){for(;t===no;)no=rr[--ir],rr[ir]=null,ro=rr[--ir],rr[ir]=null;for(;t===Nn;)Nn=Ke[--Ge],Ke[Ge]=null,Et=Ke[--Ge],Ke[Ge]=null,It=Ke[--Ge],Ke[Ge]=null}var je=null,Ue=null,$=!1,rt=null;function Rp(t,e){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,je=t,Ue=Zt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,je=t,Ue=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nn!==null?{id:It,overflow:Et}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,je=t,Ue=null,!0):!1;default:return!1}}function Nl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ol(t){if($){var e=Ue;if(e){var n=e;if(!Rd(t,e)){if(Nl(t))throw Error(I(418));e=Zt(n.nextSibling);var r=je;e&&Rd(t,e)?Rp(r,n):(t.flags=t.flags&-4097|2,$=!1,je=t)}}else{if(Nl(t))throw Error(I(418));t.flags=t.flags&-4097|2,$=!1,je=t}}}function Cd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;je=t}function gs(t){if(t!==je)return!1;if(!$)return Cd(t),$=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pl(t.type,t.memoizedProps)),e&&(e=Ue)){if(Nl(t))throw Cp(),Error(I(418));for(;e;)Rp(t,e),e=Zt(e.nextSibling)}if(Cd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ue=Zt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ue=null}}else Ue=je?Zt(t.stateNode.nextSibling):null;return!0}function Cp(){for(var t=Ue;t;)t=Zt(t.nextSibling)}function wr(){Ue=je=null,$=!1}function bu(t){rt===null?rt=[t]:rt.push(t)}var D0=Dt.ReactCurrentBatchConfig;function tt(t,e){if(t&&t.defaultProps){e=G({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var io=pn(null),so=null,sr=null,Vu=null;function Mu(){Vu=sr=so=null}function Uu(t){var e=io.current;W(io),t._currentValue=e}function Dl(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function hr(t,e){so=t,Vu=sr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xe=!0),t.firstContext=null)}function Xe(t){var e=t._currentValue;if(Vu!==t)if(t={context:t,memoizedValue:e,next:null},sr===null){if(so===null)throw Error(I(308));sr=t,so.dependencies={lanes:0,firstContext:t}}else sr=sr.next=t;return e}var Sn=null;function ju(t){Sn===null?Sn=[t]:Sn.push(t)}function xp(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ju(e)):(n.next=i.next,i.next=n),e.interleaved=n,Rt(t,r)}function Rt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Fu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Np(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function en(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Rt(t,n)}return i=r.interleaved,i===null?(e.next=e,ju(r)):(e.next=i.next,i.next=e),r.interleaved=e,Rt(t,n)}function Ls(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tu(t,n)}}function xd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function oo(t,e,n,r){var i=t.updateQueue;Ut=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var g=a.lane,y=a.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,_=a;switch(g=e,y=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){f=w.call(y,f,g);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,g=typeof w=="function"?w.call(y,f,g):w,g==null)break e;f=G({},f,g);break e;case 2:Ut=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=f):c=c.next=y,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Dn|=o,t.lanes=o,t.memoizedState=f}}function Nd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Op=new xh.Component().refs;function Ll(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:G({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zo={isMounted:function(t){return(t=t._reactInternals)?zn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Se(),i=nn(t),s=Tt(r,i);s.payload=e,n!=null&&(s.callback=n),e=en(t,s,i),e!==null&&(st(e,t,i,r),Ls(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Se(),i=nn(t),s=Tt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=en(t,s,i),e!==null&&(st(e,t,i,r),Ls(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Se(),r=nn(t),i=Tt(n,r);i.tag=2,e!=null&&(i.callback=e),e=en(t,i,r),e!==null&&(st(e,t,r,n),Ls(e,t,r))}};function Od(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ti(n,r)||!Ti(i,s):!0}function Dp(t,e,n){var r=!1,i=dn,s=e.contextType;return typeof s=="object"&&s!==null?s=Xe(s):(i=Oe(e)?xn:Ie.current,r=e.contextTypes,s=(r=r!=null)?vr(t,i):dn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&zo.enqueueReplaceState(e,e.state,null)}function bl(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Op,Fu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Xe(s):(s=Oe(e)?xn:Ie.current,i.context=vr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ll(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&zo.enqueueReplaceState(i,i.state,null),oo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Hr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Op&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function ys(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ld(t){var e=t._init;return e(t._payload)}function Lp(t){function e(h,d){if(t){var m=h.deletions;m===null?(h.deletions=[d],h.flags|=16):m.push(d)}}function n(h,d){if(!t)return null;for(;d!==null;)e(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=rn(h,d),h.index=0,h.sibling=null,h}function s(h,d,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<d?(h.flags|=2,d):m):(h.flags|=2,d)):(h.flags|=1048576,d)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,d,m,v){return d===null||d.tag!==6?(d=ja(m,h.mode,v),d.return=h,d):(d=i(d,m),d.return=h,d)}function l(h,d,m,v){var A=m.type;return A===Yn?c(h,d,m.props.children,v,m.key):d!==null&&(d.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Mt&&Ld(A)===d.type)?(v=i(d,m.props),v.ref=Hr(h,d,m),v.return=h,v):(v=Fs(m.type,m.key,m.props,null,h.mode,v),v.ref=Hr(h,d,m),v.return=h,v)}function u(h,d,m,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Fa(m,h.mode,v),d.return=h,d):(d=i(d,m.children||[]),d.return=h,d)}function c(h,d,m,v,A){return d===null||d.tag!==7?(d=Rn(m,h.mode,v,A),d.return=h,d):(d=i(d,m),d.return=h,d)}function f(h,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ja(""+d,h.mode,m),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case os:return m=Fs(d.type,d.key,d.props,null,h.mode,m),m.ref=Hr(h,null,d),m.return=h,m;case Jn:return d=Fa(d,h.mode,m),d.return=h,d;case Mt:var v=d._init;return f(h,v(d._payload),m)}if(Jr(d)||Ur(d))return d=Rn(d,h.mode,m,null),d.return=h,d;ys(h,d)}return null}function g(h,d,m,v){var A=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return A!==null?null:a(h,d,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case os:return m.key===A?l(h,d,m,v):null;case Jn:return m.key===A?u(h,d,m,v):null;case Mt:return A=m._init,g(h,d,A(m._payload),v)}if(Jr(m)||Ur(m))return A!==null?null:c(h,d,m,v,null);ys(h,m)}return null}function y(h,d,m,v,A){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(m)||null,a(d,h,""+v,A);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case os:return h=h.get(v.key===null?m:v.key)||null,l(d,h,v,A);case Jn:return h=h.get(v.key===null?m:v.key)||null,u(d,h,v,A);case Mt:var P=v._init;return y(h,d,m,P(v._payload),A)}if(Jr(v)||Ur(v))return h=h.get(m)||null,c(d,h,v,A,null);ys(d,v)}return null}function w(h,d,m,v){for(var A=null,P=null,R=d,x=d=0,B=null;R!==null&&x<m.length;x++){R.index>x?(B=R,R=null):B=R.sibling;var S=g(h,R,m[x],v);if(S===null){R===null&&(R=B);break}t&&R&&S.alternate===null&&e(h,R),d=s(S,d,x),P===null?A=S:P.sibling=S,P=S,R=B}if(x===m.length)return n(h,R),$&&_n(h,x),A;if(R===null){for(;x<m.length;x++)R=f(h,m[x],v),R!==null&&(d=s(R,d,x),P===null?A=R:P.sibling=R,P=R);return $&&_n(h,x),A}for(R=r(h,R);x<m.length;x++)B=y(R,h,x,m[x],v),B!==null&&(t&&B.alternate!==null&&R.delete(B.key===null?x:B.key),d=s(B,d,x),P===null?A=B:P.sibling=B,P=B);return t&&R.forEach(function(oe){return e(h,oe)}),$&&_n(h,x),A}function _(h,d,m,v){var A=Ur(m);if(typeof A!="function")throw Error(I(150));if(m=A.call(m),m==null)throw Error(I(151));for(var P=A=null,R=d,x=d=0,B=null,S=m.next();R!==null&&!S.done;x++,S=m.next()){R.index>x?(B=R,R=null):B=R.sibling;var oe=g(h,R,S.value,v);if(oe===null){R===null&&(R=B);break}t&&R&&oe.alternate===null&&e(h,R),d=s(oe,d,x),P===null?A=oe:P.sibling=oe,P=oe,R=B}if(S.done)return n(h,R),$&&_n(h,x),A;if(R===null){for(;!S.done;x++,S=m.next())S=f(h,S.value,v),S!==null&&(d=s(S,d,x),P===null?A=S:P.sibling=S,P=S);return $&&_n(h,x),A}for(R=r(h,R);!S.done;x++,S=m.next())S=y(R,h,x,S.value,v),S!==null&&(t&&S.alternate!==null&&R.delete(S.key===null?x:S.key),d=s(S,d,x),P===null?A=S:P.sibling=S,P=S);return t&&R.forEach(function(qn){return e(h,qn)}),$&&_n(h,x),A}function N(h,d,m,v){if(typeof m=="object"&&m!==null&&m.type===Yn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case os:e:{for(var A=m.key,P=d;P!==null;){if(P.key===A){if(A=m.type,A===Yn){if(P.tag===7){n(h,P.sibling),d=i(P,m.props.children),d.return=h,h=d;break e}}else if(P.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Mt&&Ld(A)===P.type){n(h,P.sibling),d=i(P,m.props),d.ref=Hr(h,P,m),d.return=h,h=d;break e}n(h,P);break}else e(h,P);P=P.sibling}m.type===Yn?(d=Rn(m.props.children,h.mode,v,m.key),d.return=h,h=d):(v=Fs(m.type,m.key,m.props,null,h.mode,v),v.ref=Hr(h,d,m),v.return=h,h=v)}return o(h);case Jn:e:{for(P=m.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(h,d.sibling),d=i(d,m.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else e(h,d);d=d.sibling}d=Fa(m,h.mode,v),d.return=h,h=d}return o(h);case Mt:return P=m._init,N(h,d,P(m._payload),v)}if(Jr(m))return w(h,d,m,v);if(Ur(m))return _(h,d,m,v);ys(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,m),d.return=h,h=d):(n(h,d),d=ja(m,h.mode,v),d.return=h,h=d),o(h)):n(h,d)}return N}var _r=Lp(!0),bp=Lp(!1),Ji={},gt=pn(Ji),Ci=pn(Ji),xi=pn(Ji);function Tn(t){if(t===Ji)throw Error(I(174));return t}function Bu(t,e){switch(z(xi,e),z(Ci,t),z(gt,Ji),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hl(e,t)}W(gt),z(gt,e)}function Ir(){W(gt),W(Ci),W(xi)}function Vp(t){Tn(xi.current);var e=Tn(gt.current),n=hl(e,t.type);e!==n&&(z(Ci,t),z(gt,n))}function zu(t){Ci.current===t&&(W(gt),W(Ci))}var q=pn(0);function ao(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Da=[];function Hu(){for(var t=0;t<Da.length;t++)Da[t]._workInProgressVersionPrimary=null;Da.length=0}var bs=Dt.ReactCurrentDispatcher,La=Dt.ReactCurrentBatchConfig,On=0,K=null,ne=null,ue=null,lo=!1,oi=!1,Ni=0,L0=0;function ye(){throw Error(I(321))}function Wu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ot(t[n],e[n]))return!1;return!0}function $u(t,e,n,r,i,s){if(On=s,K=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,bs.current=t===null||t.memoizedState===null?U0:j0,t=n(r,i),oi){s=0;do{if(oi=!1,Ni=0,25<=s)throw Error(I(301));s+=1,ue=ne=null,e.updateQueue=null,bs.current=F0,t=n(r,i)}while(oi)}if(bs.current=uo,e=ne!==null&&ne.next!==null,On=0,ue=ne=K=null,lo=!1,e)throw Error(I(300));return t}function qu(){var t=Ni!==0;return Ni=0,t}function ft(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?K.memoizedState=ue=t:ue=ue.next=t,ue}function Ze(){if(ne===null){var t=K.alternate;t=t!==null?t.memoizedState:null}else t=ne.next;var e=ue===null?K.memoizedState:ue.next;if(e!==null)ue=e,ne=t;else{if(t===null)throw Error(I(310));ne=t,t={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ue===null?K.memoizedState=ue=t:ue=ue.next=t}return ue}function Oi(t,e){return typeof e=="function"?e(t):e}function ba(t){var e=Ze(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((On&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,K.lanes|=c,Dn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,ot(r,e.memoizedState)||(xe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,K.lanes|=s,Dn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Va(t){var e=Ze(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ot(s,e.memoizedState)||(xe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Mp(){}function Up(t,e){var n=K,r=Ze(),i=e(),s=!ot(r.memoizedState,i);if(s&&(r.memoizedState=i,xe=!0),r=r.queue,Ku(Bp.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Di(9,Fp.bind(null,n,r,i,e),void 0,null),ce===null)throw Error(I(349));On&30||jp(n,e,i)}return i}function jp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=K.updateQueue,e===null?(e={lastEffect:null,stores:null},K.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Fp(t,e,n,r){e.value=n,e.getSnapshot=r,zp(e)&&Hp(t)}function Bp(t,e,n){return n(function(){zp(e)&&Hp(t)})}function zp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ot(t,n)}catch{return!0}}function Hp(t){var e=Rt(t,1);e!==null&&st(e,t,1,-1)}function bd(t){var e=ft();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:t},e.queue=t,t=t.dispatch=M0.bind(null,K,t),[e.memoizedState,t]}function Di(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=K.updateQueue,e===null?(e={lastEffect:null,stores:null},K.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Wp(){return Ze().memoizedState}function Vs(t,e,n,r){var i=ft();K.flags|=t,i.memoizedState=Di(1|e,n,void 0,r===void 0?null:r)}function Ho(t,e,n,r){var i=Ze();r=r===void 0?null:r;var s=void 0;if(ne!==null){var o=ne.memoizedState;if(s=o.destroy,r!==null&&Wu(r,o.deps)){i.memoizedState=Di(e,n,s,r);return}}K.flags|=t,i.memoizedState=Di(1|e,n,s,r)}function Vd(t,e){return Vs(8390656,8,t,e)}function Ku(t,e){return Ho(2048,8,t,e)}function $p(t,e){return Ho(4,2,t,e)}function qp(t,e){return Ho(4,4,t,e)}function Kp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gp(t,e,n){return n=n!=null?n.concat([t]):null,Ho(4,4,Kp.bind(null,e,t),n)}function Gu(){}function Qp(t,e){var n=Ze();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Jp(t,e){var n=Ze();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Yp(t,e,n){return On&21?(ot(n,e)||(n=ep(),K.lanes|=n,Dn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xe=!0),t.memoizedState=n)}function b0(t,e){var n=F;F=n!==0&&4>n?n:4,t(!0);var r=La.transition;La.transition={};try{t(!1),e()}finally{F=n,La.transition=r}}function Xp(){return Ze().memoizedState}function V0(t,e,n){var r=nn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zp(t))em(e,n);else if(n=xp(t,e,n,r),n!==null){var i=Se();st(n,t,r,i),tm(n,e,r)}}function M0(t,e,n){var r=nn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zp(t))em(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ot(a,o)){var l=e.interleaved;l===null?(i.next=i,ju(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=xp(t,e,i,r),n!==null&&(i=Se(),st(n,t,r,i),tm(n,e,r))}}function Zp(t){var e=t.alternate;return t===K||e!==null&&e===K}function em(t,e){oi=lo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function tm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tu(t,n)}}var uo={readContext:Xe,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},U0={readContext:Xe,useCallback:function(t,e){return ft().memoizedState=[t,e===void 0?null:e],t},useContext:Xe,useEffect:Vd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vs(4194308,4,Kp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vs(4,2,t,e)},useMemo:function(t,e){var n=ft();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ft();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=V0.bind(null,K,t),[r.memoizedState,t]},useRef:function(t){var e=ft();return t={current:t},e.memoizedState=t},useState:bd,useDebugValue:Gu,useDeferredValue:function(t){return ft().memoizedState=t},useTransition:function(){var t=bd(!1),e=t[0];return t=b0.bind(null,t[1]),ft().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=K,i=ft();if($){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),ce===null)throw Error(I(349));On&30||jp(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Vd(Bp.bind(null,r,s,t),[t]),r.flags|=2048,Di(9,Fp.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ft(),e=ce.identifierPrefix;if($){var n=Et,r=It;n=(r&~(1<<32-it(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ni++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=L0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},j0={readContext:Xe,useCallback:Qp,useContext:Xe,useEffect:Ku,useImperativeHandle:Gp,useInsertionEffect:$p,useLayoutEffect:qp,useMemo:Jp,useReducer:ba,useRef:Wp,useState:function(){return ba(Oi)},useDebugValue:Gu,useDeferredValue:function(t){var e=Ze();return Yp(e,ne.memoizedState,t)},useTransition:function(){var t=ba(Oi)[0],e=Ze().memoizedState;return[t,e]},useMutableSource:Mp,useSyncExternalStore:Up,useId:Xp,unstable_isNewReconciler:!1},F0={readContext:Xe,useCallback:Qp,useContext:Xe,useEffect:Ku,useImperativeHandle:Gp,useInsertionEffect:$p,useLayoutEffect:qp,useMemo:Jp,useReducer:Va,useRef:Wp,useState:function(){return Va(Oi)},useDebugValue:Gu,useDeferredValue:function(t){var e=Ze();return ne===null?e.memoizedState=t:Yp(e,ne.memoizedState,t)},useTransition:function(){var t=Va(Oi)[0],e=Ze().memoizedState;return[t,e]},useMutableSource:Mp,useSyncExternalStore:Up,useId:Xp,unstable_isNewReconciler:!1};function Er(t,e){try{var n="",r=e;do n+=pv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ma(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vl(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var B0=typeof WeakMap=="function"?WeakMap:Map;function nm(t,e,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fo||(fo=!0,ql=r),Vl(t,e)},n}function rm(t,e,n){n=Tt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Vl(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vl(t,e),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Md(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new B0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tw.bind(null,t,e,n),e.then(t,t))}function Ud(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tt(-1,1),e.tag=2,en(n,e,1))),n.lanes|=1),t)}var z0=Dt.ReactCurrentOwner,xe=!1;function Ae(t,e,n,r){e.child=t===null?bp(e,null,n,r):_r(e,t.child,n,r)}function Fd(t,e,n,r,i){n=n.render;var s=e.ref;return hr(e,i),r=$u(t,e,n,r,s,i),n=qu(),t!==null&&!xe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ct(t,e,i)):($&&n&&Du(e),e.flags|=1,Ae(t,e,r,i),e.child)}function Bd(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!nc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,im(t,e,s,r,i)):(t=Fs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ti,n(o,r)&&t.ref===e.ref)return Ct(t,e,i)}return e.flags|=1,t=rn(s,r),t.ref=e.ref,t.return=e,e.child=t}function im(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ti(s,r)&&t.ref===e.ref)if(xe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(xe=!0);else return e.lanes=t.lanes,Ct(t,e,i)}return Ml(t,e,n,r,i)}function sm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(ar,be),be|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,z(ar,be),be|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,z(ar,be),be|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,z(ar,be),be|=r;return Ae(t,e,i,n),e.child}function om(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ml(t,e,n,r,i){var s=Oe(n)?xn:Ie.current;return s=vr(e,s),hr(e,i),n=$u(t,e,n,r,s,i),r=qu(),t!==null&&!xe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ct(t,e,i)):($&&r&&Du(e),e.flags|=1,Ae(t,e,n,i),e.child)}function zd(t,e,n,r,i){if(Oe(n)){var s=!0;to(e)}else s=!1;if(hr(e,i),e.stateNode===null)Ms(t,e),Dp(e,n,r),bl(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xe(u):(u=Oe(n)?xn:Ie.current,u=vr(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Dd(e,o,r,u),Ut=!1;var g=e.memoizedState;o.state=g,oo(e,r,o,i),l=e.memoizedState,a!==r||g!==l||Ne.current||Ut?(typeof c=="function"&&(Ll(e,n,c,r),l=e.memoizedState),(a=Ut||Od(e,n,a,r,g,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Np(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:tt(e.type,a),o.props=u,f=e.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xe(l):(l=Oe(n)?xn:Ie.current,l=vr(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||g!==l)&&Dd(e,o,r,l),Ut=!1,g=e.memoizedState,o.state=g,oo(e,r,o,i);var w=e.memoizedState;a!==f||g!==w||Ne.current||Ut?(typeof y=="function"&&(Ll(e,n,y,r),w=e.memoizedState),(u=Ut||Od(e,n,u,r,g,w,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Ul(t,e,n,r,s,i)}function Ul(t,e,n,r,i,s){om(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Pd(e,n,!1),Ct(t,e,s);r=e.stateNode,z0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=_r(e,t.child,null,s),e.child=_r(e,null,a,s)):Ae(t,e,a,s),e.memoizedState=r.state,i&&Pd(e,n,!0),e.child}function am(t){var e=t.stateNode;e.pendingContext?kd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&kd(t,e.context,!1),Bu(t,e.containerInfo)}function Hd(t,e,n,r,i){return wr(),bu(i),e.flags|=256,Ae(t,e,n,r),e.child}var jl={dehydrated:null,treeContext:null,retryLane:0};function Fl(t){return{baseLanes:t,cachePool:null,transitions:null}}function lm(t,e,n){var r=e.pendingProps,i=q.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),z(q,i&1),t===null)return Ol(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=qo(o,r,0,null),t=Rn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fl(n),e.memoizedState=jl,t):Qu(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return H0(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=rn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=rn(a,s):(s=Rn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Fl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=jl,r}return s=t.child,t=s.sibling,r=rn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Qu(t,e){return e=qo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vs(t,e,n,r){return r!==null&&bu(r),_r(e,t.child,null,n),t=Qu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function H0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ma(Error(I(422))),vs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=qo({mode:"visible",children:r.children},i,0,null),s=Rn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&_r(e,t.child,null,o),e.child.memoizedState=Fl(o),e.memoizedState=jl,s);if(!(e.mode&1))return vs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=Ma(s,r,void 0),vs(t,e,o,r)}if(a=(o&t.childLanes)!==0,xe||a){if(r=ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Rt(t,i),st(r,t,i,-1))}return tc(),r=Ma(Error(I(421))),vs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=nw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ue=Zt(i.nextSibling),je=e,$=!0,rt=null,t!==null&&(Ke[Ge++]=It,Ke[Ge++]=Et,Ke[Ge++]=Nn,It=t.id,Et=t.overflow,Nn=e),e=Qu(e,r.children),e.flags|=4096,e)}function Wd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Dl(t.return,e,n)}function Ua(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function um(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ae(t,e,r.children,n),r=q.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wd(t,n,e);else if(t.tag===19)Wd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(z(q,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ao(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ua(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ao(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ua(e,!0,n,null,s);break;case"together":Ua(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ms(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ct(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=rn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function W0(t,e,n){switch(e.tag){case 3:am(e),wr();break;case 5:Vp(e);break;case 1:Oe(e.type)&&to(e);break;case 4:Bu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;z(io,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(z(q,q.current&1),e.flags|=128,null):n&e.child.childLanes?lm(t,e,n):(z(q,q.current&1),t=Ct(t,e,n),t!==null?t.sibling:null);z(q,q.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return um(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(q,q.current),r)break;return null;case 22:case 23:return e.lanes=0,sm(t,e,n)}return Ct(t,e,n)}var cm,Bl,dm,fm;cm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bl=function(){};dm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Tn(gt.current);var s=null;switch(n){case"input":i=ul(t,i),r=ul(t,r),s=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),s=[];break;case"textarea":i=fl(t,i),r=fl(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Zs)}pl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};fm=function(t,e,n,r){n!==r&&(e.flags|=4)};function Wr(t,e){if(!$)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ve(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $0(t,e,n){var r=e.pendingProps;switch(Lu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(e),null;case 1:return Oe(e.type)&&eo(),ve(e),null;case 3:return r=e.stateNode,Ir(),W(Ne),W(Ie),Hu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(gs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rt!==null&&(Ql(rt),rt=null))),Bl(t,e),ve(e),null;case 5:zu(e);var i=Tn(xi.current);if(n=e.type,t!==null&&e.stateNode!=null)dm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return ve(e),null}if(t=Tn(gt.current),gs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ht]=e,r[Ri]=s,t=(e.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Xr.length;i++)H(Xr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Zc(r,s),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},H("invalid",r);break;case"textarea":td(r,s),H("invalid",r)}pl(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ms(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ms(r.textContent,a,t),i=["children",""+a]):vi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":as(r),ed(r,s,!0);break;case"textarea":as(r),nd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Zs)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jh(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ht]=e,t[Ri]=r,cm(t,e,!1,!1),e.stateNode=t;e:{switch(o=ml(n,r),n){case"dialog":H("cancel",t),H("close",t),i=r;break;case"iframe":case"object":case"embed":H("load",t),i=r;break;case"video":case"audio":for(i=0;i<Xr.length;i++)H(Xr[i],t);i=r;break;case"source":H("error",t),i=r;break;case"img":case"image":case"link":H("error",t),H("load",t),i=r;break;case"details":H("toggle",t),i=r;break;case"input":Zc(t,r),i=ul(t,r),H("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),H("invalid",t);break;case"textarea":td(t,r),i=fl(t,r),H("invalid",t);break;default:i=r}pl(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?zh(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Fh(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wi(t,l):typeof l=="number"&&wi(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&H("scroll",t):l!=null&&wu(t,s,l,o))}switch(n){case"input":as(t),ed(t,r,!1);break;case"textarea":as(t),nd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+cn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ur(t,!!r.multiple,s,!1):r.defaultValue!=null&&ur(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Zs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ve(e),null;case 6:if(t&&e.stateNode!=null)fm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=Tn(xi.current),Tn(gt.current),gs(e)){if(r=e.stateNode,n=e.memoizedProps,r[ht]=e,(s=r.nodeValue!==n)&&(t=je,t!==null))switch(t.tag){case 3:ms(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ms(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=e,e.stateNode=r}return ve(e),null;case 13:if(W(q),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($&&Ue!==null&&e.mode&1&&!(e.flags&128))Cp(),wr(),e.flags|=98560,s=!1;else if(s=gs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[ht]=e}else wr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ve(e),s=!1}else rt!==null&&(Ql(rt),rt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||q.current&1?se===0&&(se=3):tc())),e.updateQueue!==null&&(e.flags|=4),ve(e),null);case 4:return Ir(),Bl(t,e),t===null&&ki(e.stateNode.containerInfo),ve(e),null;case 10:return Uu(e.type._context),ve(e),null;case 17:return Oe(e.type)&&eo(),ve(e),null;case 19:if(W(q),s=e.memoizedState,s===null)return ve(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Wr(s,!1);else{if(se!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ao(t),o!==null){for(e.flags|=128,Wr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return z(q,q.current&1|2),e.child}t=t.sibling}s.tail!==null&&X()>Ar&&(e.flags|=128,r=!0,Wr(s,!1),e.lanes=4194304)}else{if(!r)if(t=ao(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Wr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$)return ve(e),null}else 2*X()-s.renderingStartTime>Ar&&n!==1073741824&&(e.flags|=128,r=!0,Wr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=X(),e.sibling=null,n=q.current,z(q,r?n&1|2:n&1),e):(ve(e),null);case 22:case 23:return ec(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?be&1073741824&&(ve(e),e.subtreeFlags&6&&(e.flags|=8192)):ve(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function q0(t,e){switch(Lu(e),e.tag){case 1:return Oe(e.type)&&eo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ir(),W(Ne),W(Ie),Hu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zu(e),null;case 13:if(W(q),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));wr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return W(q),null;case 4:return Ir(),null;case 10:return Uu(e.type._context),null;case 22:case 23:return ec(),null;case 24:return null;default:return null}}var ws=!1,_e=!1,K0=typeof WeakSet=="function"?WeakSet:Set,T=null;function or(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(t,e,r)}else n.current=null}function zl(t,e,n){try{n()}catch(r){Q(t,e,r)}}var $d=!1;function G0(t,e){if(Tl=Js,t=gp(),Ou(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,g=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)g=f,f=y;for(;;){if(f===t)break t;if(g===n&&++u===i&&(a=o),g===s&&++c===r&&(l=o),(y=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(kl={focusedElem:t,selectionRange:n},Js=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,N=w.memoizedState,h=e.stateNode,d=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:tt(e.type,_),N);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(v){Q(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return w=$d,$d=!1,w}function ai(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&zl(e,n,s)}i=i.next}while(i!==r)}}function Wo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Hl(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function hm(t){var e=t.alternate;e!==null&&(t.alternate=null,hm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ht],delete e[Ri],delete e[Cl],delete e[x0],delete e[N0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pm(t){return t.tag===5||t.tag===3||t.tag===4}function qd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zs));else if(r!==4&&(t=t.child,t!==null))for(Wl(t,e,n),t=t.sibling;t!==null;)Wl(t,e,n),t=t.sibling}function $l(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($l(t,e,n),t=t.sibling;t!==null;)$l(t,e,n),t=t.sibling}var fe=null,nt=!1;function bt(t,e,n){for(n=n.child;n!==null;)mm(t,e,n),n=n.sibling}function mm(t,e,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Vo,n)}catch{}switch(n.tag){case 5:_e||or(n,e);case 6:var r=fe,i=nt;fe=null,bt(t,e,n),fe=r,nt=i,fe!==null&&(nt?(t=fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(nt?(t=fe,n=n.stateNode,t.nodeType===8?Na(t.parentNode,n):t.nodeType===1&&Na(t,n),Ai(t)):Na(fe,n.stateNode));break;case 4:r=fe,i=nt,fe=n.stateNode.containerInfo,nt=!0,bt(t,e,n),fe=r,nt=i;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zl(n,e,o),i=i.next}while(i!==r)}bt(t,e,n);break;case 1:if(!_e&&(or(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,e,a)}bt(t,e,n);break;case 21:bt(t,e,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,bt(t,e,n),_e=r):bt(t,e,n);break;default:bt(t,e,n)}}function Kd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new K0),e.forEach(function(r){var i=rw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,nt=!1;break e;case 3:fe=a.stateNode.containerInfo,nt=!0;break e;case 4:fe=a.stateNode.containerInfo,nt=!0;break e}a=a.return}if(fe===null)throw Error(I(160));mm(s,o,i),fe=null,nt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Q(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gm(e,t),e=e.sibling}function gm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(et(e,t),ct(t),r&4){try{ai(3,t,t.return),Wo(3,t)}catch(_){Q(t,t.return,_)}try{ai(5,t,t.return)}catch(_){Q(t,t.return,_)}}break;case 1:et(e,t),ct(t),r&512&&n!==null&&or(n,n.return);break;case 5:if(et(e,t),ct(t),r&512&&n!==null&&or(n,n.return),t.flags&32){var i=t.stateNode;try{wi(i,"")}catch(_){Q(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Mh(i,s),ml(a,o);var u=ml(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?zh(i,f):c==="dangerouslySetInnerHTML"?Fh(i,f):c==="children"?wi(i,f):wu(i,c,f,u)}switch(a){case"input":cl(i,s);break;case"textarea":Uh(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?ur(i,!!s.multiple,y,!1):g!==!!s.multiple&&(s.defaultValue!=null?ur(i,!!s.multiple,s.defaultValue,!0):ur(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ri]=s}catch(_){Q(t,t.return,_)}}break;case 6:if(et(e,t),ct(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Q(t,t.return,_)}}break;case 3:if(et(e,t),ct(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ai(e.containerInfo)}catch(_){Q(t,t.return,_)}break;case 4:et(e,t),ct(t);break;case 13:et(e,t),ct(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Xu=X())),r&4&&Kd(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(_e=(u=_e)||c,et(e,t),_e=u):et(e,t),ct(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(T=t,c=t.child;c!==null;){for(f=T=c;T!==null;){switch(g=T,y=g.child,g.tag){case 0:case 11:case 14:case 15:ai(4,g,g.return);break;case 1:or(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(_){Q(r,n,_)}}break;case 5:or(g,g.return);break;case 22:if(g.memoizedState!==null){Qd(f);continue}}y!==null?(y.return=g,T=y):Qd(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Bh("display",o))}catch(_){Q(t,t.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){Q(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:et(e,t),ct(t),r&4&&Kd(t);break;case 21:break;default:et(e,t),ct(t)}}function ct(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(pm(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wi(i,""),r.flags&=-33);var s=qd(t);$l(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=qd(t);Wl(t,a,o);break;default:throw Error(I(161))}}catch(l){Q(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Q0(t,e,n){T=t,ym(t)}function ym(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ws;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||_e;a=ws;var u=_e;if(ws=o,(_e=l)&&!u)for(T=i;T!==null;)o=T,l=o.child,o.tag===22&&o.memoizedState!==null?Jd(i):l!==null?(l.return=o,T=l):Jd(i);for(;s!==null;)T=s,ym(s),s=s.sibling;T=i,ws=a,_e=u}Gd(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):Gd(t)}}function Gd(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_e||Wo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_e)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Nd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Nd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ai(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}_e||e.flags&512&&Hl(e)}catch(g){Q(e,e.return,g)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function Qd(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function Jd(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wo(4,e)}catch(l){Q(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Q(e,i,l)}}var s=e.return;try{Hl(e)}catch(l){Q(e,s,l)}break;case 5:var o=e.return;try{Hl(e)}catch(l){Q(e,o,l)}}}catch(l){Q(e,e.return,l)}if(e===t){T=null;break}var a=e.sibling;if(a!==null){a.return=e.return,T=a;break}T=e.return}}var J0=Math.ceil,co=Dt.ReactCurrentDispatcher,Ju=Dt.ReactCurrentOwner,Je=Dt.ReactCurrentBatchConfig,U=0,ce=null,ee=null,me=0,be=0,ar=pn(0),se=0,Li=null,Dn=0,$o=0,Yu=0,li=null,Ce=null,Xu=0,Ar=1/0,vt=null,fo=!1,ql=null,tn=null,_s=!1,Kt=null,ho=0,ui=0,Kl=null,Us=-1,js=0;function Se(){return U&6?X():Us!==-1?Us:Us=X()}function nn(t){return t.mode&1?U&2&&me!==0?me&-me:D0.transition!==null?(js===0&&(js=ep()),js):(t=F,t!==0||(t=window.event,t=t===void 0?16:ap(t.type)),t):1}function st(t,e,n,r){if(50<ui)throw ui=0,Kl=null,Error(I(185));Ki(t,n,r),(!(U&2)||t!==ce)&&(t===ce&&(!(U&2)&&($o|=n),se===4&&Bt(t,me)),De(t,r),n===1&&U===0&&!(e.mode&1)&&(Ar=X()+500,Bo&&mn()))}function De(t,e){var n=t.callbackNode;Dv(t,e);var r=Qs(t,t===ce?me:0);if(r===0)n!==null&&sd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&sd(n),e===1)t.tag===0?O0(Yd.bind(null,t)):kp(Yd.bind(null,t)),R0(function(){!(U&6)&&mn()}),n=null;else{switch(tp(r)){case 1:n=Su;break;case 4:n=Xh;break;case 16:n=Gs;break;case 536870912:n=Zh;break;default:n=Gs}n=Tm(n,vm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function vm(t,e){if(Us=-1,js=0,U&6)throw Error(I(327));var n=t.callbackNode;if(pr()&&t.callbackNode!==n)return null;var r=Qs(t,t===ce?me:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=po(t,r);else{e=r;var i=U;U|=2;var s=_m();(ce!==t||me!==e)&&(vt=null,Ar=X()+500,Pn(t,e));do try{Z0();break}catch(a){wm(t,a)}while(1);Mu(),co.current=s,U=i,ee!==null?e=0:(ce=null,me=0,e=se)}if(e!==0){if(e===2&&(i=_l(t),i!==0&&(r=i,e=Gl(t,i))),e===1)throw n=Li,Pn(t,0),Bt(t,r),De(t,X()),n;if(e===6)Bt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Y0(i)&&(e=po(t,r),e===2&&(s=_l(t),s!==0&&(r=s,e=Gl(t,s))),e===1))throw n=Li,Pn(t,0),Bt(t,r),De(t,X()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:In(t,Ce,vt);break;case 3:if(Bt(t,r),(r&130023424)===r&&(e=Xu+500-X(),10<e)){if(Qs(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Se(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Rl(In.bind(null,t,Ce,vt),e);break}In(t,Ce,vt);break;case 4:if(Bt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-it(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*J0(r/1960))-r,10<r){t.timeoutHandle=Rl(In.bind(null,t,Ce,vt),r);break}In(t,Ce,vt);break;case 5:In(t,Ce,vt);break;default:throw Error(I(329))}}}return De(t,X()),t.callbackNode===n?vm.bind(null,t):null}function Gl(t,e){var n=li;return t.current.memoizedState.isDehydrated&&(Pn(t,e).flags|=256),t=po(t,e),t!==2&&(e=Ce,Ce=n,e!==null&&Ql(e)),t}function Ql(t){Ce===null?Ce=t:Ce.push.apply(Ce,t)}function Y0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ot(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bt(t,e){for(e&=~Yu,e&=~$o,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-it(e),r=1<<n;t[n]=-1,e&=~r}}function Yd(t){if(U&6)throw Error(I(327));pr();var e=Qs(t,0);if(!(e&1))return De(t,X()),null;var n=po(t,e);if(t.tag!==0&&n===2){var r=_l(t);r!==0&&(e=r,n=Gl(t,r))}if(n===1)throw n=Li,Pn(t,0),Bt(t,e),De(t,X()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,In(t,Ce,vt),De(t,X()),null}function Zu(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(Ar=X()+500,Bo&&mn())}}function Ln(t){Kt!==null&&Kt.tag===0&&!(U&6)&&pr();var e=U;U|=1;var n=Je.transition,r=F;try{if(Je.transition=null,F=1,t)return t()}finally{F=r,Je.transition=n,U=e,!(U&6)&&mn()}}function ec(){be=ar.current,W(ar)}function Pn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,P0(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&eo();break;case 3:Ir(),W(Ne),W(Ie),Hu();break;case 5:zu(r);break;case 4:Ir();break;case 13:W(q);break;case 19:W(q);break;case 10:Uu(r.type._context);break;case 22:case 23:ec()}n=n.return}if(ce=t,ee=t=rn(t.current,null),me=be=e,se=0,Li=null,Yu=$o=Dn=0,Ce=li=null,Sn!==null){for(e=0;e<Sn.length;e++)if(n=Sn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Sn=null}return t}function wm(t,e){do{var n=ee;try{if(Mu(),bs.current=uo,lo){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}lo=!1}if(On=0,ue=ne=K=null,oi=!1,Ni=0,Ju.current=null,n===null||n.return===null){se=1,Li=e,ee=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=me,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Ud(o);if(y!==null){y.flags&=-257,jd(y,o,a,s,e),y.mode&1&&Md(s,u,e),e=y,l=u;var w=e.updateQueue;if(w===null){var _=new Set;_.add(l),e.updateQueue=_}else w.add(l);break e}else{if(!(e&1)){Md(s,u,e),tc();break e}l=Error(I(426))}}else if($&&a.mode&1){var N=Ud(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),jd(N,o,a,s,e),bu(Er(l,a));break e}}s=l=Er(l,a),se!==4&&(se=2),li===null?li=[s]:li.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=nm(s,l,e);xd(s,h);break e;case 1:a=l;var d=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(tn===null||!tn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=rm(s,a,e);xd(s,v);break e}}s=s.return}while(s!==null)}Em(n)}catch(A){e=A,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function _m(){var t=co.current;return co.current=uo,t===null?uo:t}function tc(){(se===0||se===3||se===2)&&(se=4),ce===null||!(Dn&268435455)&&!($o&268435455)||Bt(ce,me)}function po(t,e){var n=U;U|=2;var r=_m();(ce!==t||me!==e)&&(vt=null,Pn(t,e));do try{X0();break}catch(i){wm(t,i)}while(1);if(Mu(),U=n,co.current=r,ee!==null)throw Error(I(261));return ce=null,me=0,se}function X0(){for(;ee!==null;)Im(ee)}function Z0(){for(;ee!==null&&!Sv();)Im(ee)}function Im(t){var e=Sm(t.alternate,t,be);t.memoizedProps=t.pendingProps,e===null?Em(t):ee=e,Ju.current=null}function Em(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=q0(n,e),n!==null){n.flags&=32767,ee=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{se=6,ee=null;return}}else if(n=$0(n,e,be),n!==null){ee=n;return}if(e=e.sibling,e!==null){ee=e;return}ee=e=t}while(e!==null);se===0&&(se=5)}function In(t,e,n){var r=F,i=Je.transition;try{Je.transition=null,F=1,ew(t,e,n,r)}finally{Je.transition=i,F=r}return null}function ew(t,e,n,r){do pr();while(Kt!==null);if(U&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Lv(t,s),t===ce&&(ee=ce=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_s||(_s=!0,Tm(Gs,function(){return pr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Je.transition,Je.transition=null;var o=F;F=1;var a=U;U|=4,Ju.current=null,G0(t,n),gm(n,t),_0(kl),Js=!!Tl,kl=Tl=null,t.current=n,Q0(n),Tv(),U=a,F=o,Je.transition=s}else t.current=n;if(_s&&(_s=!1,Kt=t,ho=i),s=t.pendingLanes,s===0&&(tn=null),Rv(n.stateNode),De(t,X()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fo)throw fo=!1,t=ql,ql=null,t;return ho&1&&t.tag!==0&&pr(),s=t.pendingLanes,s&1?t===Kl?ui++:(ui=0,Kl=t):ui=0,mn(),null}function pr(){if(Kt!==null){var t=tp(ho),e=Je.transition,n=F;try{if(Je.transition=null,F=16>t?16:t,Kt===null)var r=!1;else{if(t=Kt,Kt=null,ho=0,U&6)throw Error(I(331));var i=U;for(U|=4,T=t.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:ai(8,c,s)}var f=c.child;if(f!==null)f.return=c,T=f;else for(;T!==null;){c=T;var g=c.sibling,y=c.return;if(hm(c),c===u){T=null;break}if(g!==null){g.return=y,T=g;break}T=y}}}var w=s.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var N=_.sibling;_.sibling=null,_=N}while(_!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ai(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,T=h;break e}T=s.return}}var d=t.current;for(T=d;T!==null;){o=T;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,T=m;else e:for(o=d;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Wo(9,a)}}catch(A){Q(a,a.return,A)}if(a===o){T=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,T=v;break e}T=a.return}}if(U=i,mn(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Vo,t)}catch{}r=!0}return r}finally{F=n,Je.transition=e}}return!1}function Xd(t,e,n){e=Er(n,e),e=nm(t,e,1),t=en(t,e,1),e=Se(),t!==null&&(Ki(t,1,e),De(t,e))}function Q(t,e,n){if(t.tag===3)Xd(t,t,n);else for(;e!==null;){if(e.tag===3){Xd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){t=Er(n,t),t=rm(e,t,1),e=en(e,t,1),t=Se(),e!==null&&(Ki(e,1,t),De(e,t));break}}e=e.return}}function tw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Se(),t.pingedLanes|=t.suspendedLanes&n,ce===t&&(me&n)===n&&(se===4||se===3&&(me&130023424)===me&&500>X()-Xu?Pn(t,0):Yu|=n),De(t,e)}function Am(t,e){e===0&&(t.mode&1?(e=cs,cs<<=1,!(cs&130023424)&&(cs=4194304)):e=1);var n=Se();t=Rt(t,e),t!==null&&(Ki(t,e,n),De(t,n))}function nw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Am(t,n)}function rw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Am(t,n)}var Sm;Sm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ne.current)xe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xe=!1,W0(t,e,n);xe=!!(t.flags&131072)}else xe=!1,$&&e.flags&1048576&&Pp(e,ro,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ms(t,e),t=e.pendingProps;var i=vr(e,Ie.current);hr(e,n),i=$u(null,e,r,t,i,n);var s=qu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Oe(r)?(s=!0,to(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fu(e),i.updater=zo,e.stateNode=i,i._reactInternals=e,bl(e,r,t,n),e=Ul(null,e,r,!0,s,n)):(e.tag=0,$&&s&&Du(e),Ae(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ms(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sw(r),t=tt(r,t),i){case 0:e=Ml(null,e,r,t,n);break e;case 1:e=zd(null,e,r,t,n);break e;case 11:e=Fd(null,e,r,t,n);break e;case 14:e=Bd(null,e,r,tt(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Ml(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),zd(t,e,r,i,n);case 3:e:{if(am(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Np(t,e),oo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Er(Error(I(423)),e),e=Hd(t,e,r,n,i);break e}else if(r!==i){i=Er(Error(I(424)),e),e=Hd(t,e,r,n,i);break e}else for(Ue=Zt(e.stateNode.containerInfo.firstChild),je=e,$=!0,rt=null,n=bp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wr(),r===i){e=Ct(t,e,n);break e}Ae(t,e,r,n)}e=e.child}return e;case 5:return Vp(e),t===null&&Ol(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Pl(r,i)?o=null:s!==null&&Pl(r,s)&&(e.flags|=32),om(t,e),Ae(t,e,o,n),e.child;case 6:return t===null&&Ol(e),null;case 13:return lm(t,e,n);case 4:return Bu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=_r(e,null,r,n):Ae(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Fd(t,e,r,i,n);case 7:return Ae(t,e,e.pendingProps,n),e.child;case 8:return Ae(t,e,e.pendingProps.children,n),e.child;case 12:return Ae(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,z(io,r._currentValue),r._currentValue=o,s!==null)if(ot(s.value,o)){if(s.children===i.children&&!Ne.current){e=Ct(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Tt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Dl(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Dl(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ae(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,hr(e,n),i=Xe(i),r=r(i),e.flags|=1,Ae(t,e,r,n),e.child;case 14:return r=e.type,i=tt(r,e.pendingProps),i=tt(r.type,i),Bd(t,e,r,i,n);case 15:return im(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Ms(t,e),e.tag=1,Oe(r)?(t=!0,to(e)):t=!1,hr(e,n),Dp(e,r,i),bl(e,r,i,n),Ul(null,e,r,!0,t,n);case 19:return um(t,e,n);case 22:return sm(t,e,n)}throw Error(I(156,e.tag))};function Tm(t,e){return Yh(t,e)}function iw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(t,e,n,r){return new iw(t,e,n,r)}function nc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sw(t){if(typeof t=="function")return nc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Iu)return 11;if(t===Eu)return 14}return 2}function rn(t,e){var n=t.alternate;return n===null?(n=Qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")nc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Yn:return Rn(n.children,i,s,e);case _u:o=8,i|=8;break;case sl:return t=Qe(12,n,e,i|2),t.elementType=sl,t.lanes=s,t;case ol:return t=Qe(13,n,e,i),t.elementType=ol,t.lanes=s,t;case al:return t=Qe(19,n,e,i),t.elementType=al,t.lanes=s,t;case Lh:return qo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Oh:o=10;break e;case Dh:o=9;break e;case Iu:o=11;break e;case Eu:o=14;break e;case Mt:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=Qe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Rn(t,e,n,r){return t=Qe(7,t,r,e),t.lanes=n,t}function qo(t,e,n,r){return t=Qe(22,t,r,e),t.elementType=Lh,t.lanes=n,t.stateNode={isHidden:!1},t}function ja(t,e,n){return t=Qe(6,t,null,e),t.lanes=n,t}function Fa(t,e,n){return e=Qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ow(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_a(0),this.expirationTimes=_a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rc(t,e,n,r,i,s,o,a,l){return t=new ow(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fu(s),t}function aw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function km(t){if(!t)return dn;t=t._reactInternals;e:{if(zn(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Oe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(Oe(n))return Tp(t,n,e)}return e}function Pm(t,e,n,r,i,s,o,a,l){return t=rc(n,r,!0,t,i,s,o,a,l),t.context=km(null),n=t.current,r=Se(),i=nn(n),s=Tt(r,i),s.callback=e??null,en(n,s,i),t.current.lanes=i,Ki(t,i,r),De(t,r),t}function Ko(t,e,n,r){var i=e.current,s=Se(),o=nn(i);return n=km(n),e.context===null?e.context=n:e.pendingContext=n,e=Tt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=en(i,e,o),t!==null&&(st(t,i,o,s),Ls(t,i,o)),o}function mo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ic(t,e){Zd(t,e),(t=t.alternate)&&Zd(t,e)}function lw(){return null}var Rm=typeof reportError=="function"?reportError:function(t){console.error(t)};function sc(t){this._internalRoot=t}Go.prototype.render=sc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Ko(t,e,null,null)};Go.prototype.unmount=sc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ln(function(){Ko(null,t,null,null)}),e[Pt]=null}};function Go(t){this._internalRoot=t}Go.prototype.unstable_scheduleHydration=function(t){if(t){var e=ip();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ft.length&&e!==0&&e<Ft[n].priority;n++);Ft.splice(n,0,t),n===0&&op(t)}};function oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ef(){}function uw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=mo(o);s.call(u)}}var o=Pm(e,r,t,0,null,!1,!1,"",ef);return t._reactRootContainer=o,t[Pt]=o.current,ki(t.nodeType===8?t.parentNode:t),Ln(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=mo(l);a.call(u)}}var l=rc(t,0,!1,null,null,!1,!1,"",ef);return t._reactRootContainer=l,t[Pt]=l.current,ki(t.nodeType===8?t.parentNode:t),Ln(function(){Ko(e,l,n,r)}),l}function Jo(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=mo(o);a.call(l)}}Ko(e,o,t,i)}else o=uw(n,e,t,i,r);return mo(o)}np=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Yr(e.pendingLanes);n!==0&&(Tu(e,n|1),De(e,X()),!(U&6)&&(Ar=X()+500,mn()))}break;case 13:Ln(function(){var r=Rt(t,1);if(r!==null){var i=Se();st(r,t,1,i)}}),ic(t,1)}};ku=function(t){if(t.tag===13){var e=Rt(t,134217728);if(e!==null){var n=Se();st(e,t,134217728,n)}ic(t,134217728)}};rp=function(t){if(t.tag===13){var e=nn(t),n=Rt(t,e);if(n!==null){var r=Se();st(n,t,e,r)}ic(t,e)}};ip=function(){return F};sp=function(t,e){var n=F;try{return F=t,e()}finally{F=n}};yl=function(t,e,n){switch(e){case"input":if(cl(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Fo(r);if(!i)throw Error(I(90));Vh(r),cl(r,i)}}}break;case"textarea":Uh(t,n);break;case"select":e=n.value,e!=null&&ur(t,!!n.multiple,e,!1)}};$h=Zu;qh=Ln;var cw={usingClientEntryPoint:!1,Events:[Qi,tr,Fo,Hh,Wh,Zu]},$r={findFiberByHostInstance:An,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},dw={bundleType:$r.bundleType,version:$r.version,rendererPackageName:$r.rendererPackageName,rendererConfig:$r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qh(t),t===null?null:t.stateNode},findFiberByHostInstance:$r.findFiberByHostInstance||lw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Is.isDisabled&&Is.supportsFiber)try{Vo=Is.inject(dw),mt=Is}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cw;$e.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oc(e))throw Error(I(200));return aw(t,e,null,n)};$e.createRoot=function(t,e){if(!oc(t))throw Error(I(299));var n=!1,r="",i=Rm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=rc(t,1,!1,null,null,n,!1,r,i),t[Pt]=e.current,ki(t.nodeType===8?t.parentNode:t),new sc(e)};$e.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=Qh(e),t=t===null?null:t.stateNode,t};$e.flushSync=function(t){return Ln(t)};$e.hydrate=function(t,e,n){if(!Qo(e))throw Error(I(200));return Jo(null,t,e,!0,n)};$e.hydrateRoot=function(t,e,n){if(!oc(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Rm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Pm(e,null,t,1,n??null,i,!1,s,o),t[Pt]=e.current,ki(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Go(e)};$e.render=function(t,e,n){if(!Qo(e))throw Error(I(200));return Jo(null,t,e,!1,n)};$e.unmountComponentAtNode=function(t){if(!Qo(t))throw Error(I(40));return t._reactRootContainer?(Ln(function(){Jo(null,null,t,!1,function(){t._reactRootContainer=null,t[Pt]=null})}),!0):!1};$e.unstable_batchedUpdates=Zu;$e.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Qo(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Jo(t,e,n,!1,r)};$e.version="18.2.0-next-9e3b772b8-20220608";function Cm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cm)}catch(t){console.error(t)}}Cm(),Ph.exports=$e;var fw=Ph.exports,tf=fw;rl.createRoot=tf.createRoot,rl.hydrateRoot=tf.hydrateRoot;const hw="/kooop/assets/reqserv-2fce40ab.png",pw="/kooop/assets/search-333f67f0.png",xm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAACtCAYAAAANgcuAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAu6SURBVHgB7d3rcdtIEgfw1tV9P10Ei4vA6wgWjsDaCMyLwNoIJEVgbQTSRiA5AtIRWI4A2AisjaAX7RkUSS0BzPQ0ZkDq/6tC6UEQD3IaGMyTCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgdmehKzLzefdj1S0/dcu5//e3bnk6Ozvb0Ay6fdbdj/d+f89+f5tufy0BlNAlyk88rumWiozItrplPbK/O8v9AQQJCITdgDinRLINv62Q/VUEkEOX2H7mOJ8oUUTwsVUAAkxilx2J8T0lcbLLHsW6JAAD/5p4/YLiSCDUpHdH8WoCMDAYDP4Kr7nKV6TAruSopnhvCMDA2J3hZ9LRJs4PpPNMAAbGgkGb9/8vRWJXKrQiHQQDmJgjGP5D8a5I7xsBGJh6gM6lJr1HAjBQPBi6LNKKlA/dnee5moLA67OEO4P2wVngrgBmigaDf3CuSe+GAIyUvjOkPDij9SqYKh0MNen9QQCGigVD4oNz290V7gnAUMk7Q8qD8+8EYOzfVIDBg3OWUqSd9lkv22m15Ip1F1v7zdu+HtXOv+V4n/GsdViRYKC0B+f7Ob5Mn/ClPdZ7/1OW84n3SOJ68svnUnUePuFLC2NpF1bTRPazW19+yDG33fKZZi6M4G2X4V9o2+bt2S9fKOA73dnGG9r/btqd7czTBVny9KyzDth2w3o1GZLtsetQ9J3TyTbuOEMPPHY9Ai95vHtsjDW75zjr45Q+Kk3A/i9HtnHF4d9PY34ePFMwJGxXfCUjPN3POtUdzxAU7ILgim2C95CGDRMTx134Phw41zXrNGx14eT5gmHNeisy0G3nI+chCdasJx67brgN53HHiV1qOT4N7fWU7H5/4HQpWXL1ifTWI9vUdOvsNWSA47uyWkj+QrptfOD57gZDvnJaN96vHK/2771iO0EXpNxFqyvS21Ci7kO5SzwGrWtOuEN075WH43vSN6vXkgfVNesDQtNB7IJd9vKa7HzigCxT7mBIqVtIaofE7uq8onLkC4lOHD5haPqGW5Fjjr6zac7VqyittHHI5GeYLRh8ZFakk1ScOsOVRkszlI58iaWHw7nk+IdR7THLiI0rsidZ9OuxFeYIBikBqF4ulHZXSG2HVPLKukuKcVehK/t1a1qG2Kt1RTraO0qIj2MvzhEMcjLNgWVFOm1KRQrrR92YS8xFYY7sglbNxnU8BZyPnUOpGugYqX0WUu5IQmo3N93yp/+9r+XVZgN+JKqpAE/MVvY25Gpo5djleN8nbvOCwgsySmfthsScg8NplWNWkkbo8+eRUhz5cGj/7LJ+KWXgtwHHfcd6DQ9cAdnVWmt9p0DdutdsQ7YjFxD5zKWeRdJlw3rxRfS8jGBIyuuz+xC1HgK2v2adyZp01pXR96qJbad8t0F5erYJhnpg2xIYKRe5gxfYpYyOMSQ1i5TyMPab0TqHVGMv8rbRoMZkyZvvC7IhnTkfcHfdDGUl/fmlFKpUh/659GC44rT2PRXpPIUU5XbrPJFr/RlLHuR+Gnm9Ir3QRPKZdHIEgzybTWUlNZ97rzr0z6UHw6pbGtY3Z9AOdflnxLraQcz+N/JaynNSaCLRJibNIHGxvgT0FUkJhqPMJvUk/5mzriD4QXEmFSll6HAUPXyowiZgHfPzPJZgEKvMAQGH5bgzpFz11Y4pGIQExCXBqTNpoRzr2IJBXDGmrjppXVYv5pnNzBw10C0Nl2hIIu5rcLVkG3J3uCYAQ7MEQxfZ12Mr8LYVqbaphPRUu13y6BSg1lIhRbJJUobfLSvSj3/Uj5QAYKb0M8M16YvI3hOAoaLB4LM52mr1XM0C4JVYQmnSI+lMNWkAiLKEYEipYHlLAEaKB4PPKrWkUxGcmmJ1SEupdGtJB5Vvp6dY9vcYa6Dh9BXJ/iIYYImKlBSeejAcaw31ko+7pfn9ErCOeRb51IPhL1qusQTfklKGRow5PtOQYWkq0msP/fPUg0FbbBtzm1Y97Pkuo0Na0gvtb6ANmpbymOrdaN4CAcFwWBVyhWX9dFyjx5VY3Pz/wPW0iSlXx5t6qLtvwufeO3gOryEYNPlvCYSQftfavtlfAtbRdtj/yNNDxcidb0XxnjNP1fWjuy9vx02qfPZJhvGpSKcdau180sHgT1p7JbscuTJJWbgMIrwinUejdQ6RQF4PBYRPTJNTjZHtMaVYkTvefphS+T2ltGkz9MIxDC855kP35U6NEyRjL9Wk08+rsKH9O8wFJeS5Q66usk6375Z0V8CK3KgiG9rPbvUTN2qdwkT0g3fcYw+GqltkmMd3Q7c+n6g2pA8ISfQXZCdmYDRZN2UQhJrstGeFZjM1JOcweHcbyyZpy7pzF2fKle5yYp3UkfmstH40uyCJI99Zy/UZap/zQox2JhsLBm1eW/O+1JMfLRnxVzRtrzpLoSU9u2QIy9KVcPcxQZyoH/XcmlyIbsdWGAwGnw/XfAmaYEgdDWEy/96dT5/3L+VGk83w9RHaMV0ttAX2P8ddaPIcpkqTNAlb857UUorQoP2VygxQdTM1SMIYf1UuERBtt7zLPfCCvwBY3slvxp4VelPBEFvWvdHMveavmBvSC0rg8qV2i7SIzJllSgqEnr/Fv6N8NcAbcoHQUgH+Tm5x4TL5/H/guIkhKlLyZfcN61QUqXvPBc87wfiaZ5j2iV3F0z3Px2Qid9bPz7De2UZKmpDzqMkSuw+/Cdi5xQcoJx/7RSftl11QWMxE31tzhrnPeBsUDduQxCMJWFt/8vL4koNhZ1u3Ee83PY9DJyYfvNTIrnl/xpTGH2hKRc7Q/u4nTlj2W5ERv88Vu8CImTWn8e+55ELDXrJrrnDLcTMJfffry/tqMsaGweC39/L7aXaWB7+/mhKc0cL5EzynbYnR00SLT6v9yv6qnX3vJvSW3EN7e7bAUf3YXSQq/2e189IzbY+7pRmxm3NZ03ZLnjvfUQGLr4EuVeuZ2K6pKJ/QW4Io6PYJ4CEYDmD3IH/F+3lwyaeu6Iid6nnBTHi69Kxhwwf3XHKfFxs/QOeAO8M/yZdRjbwur635+CZMOdXzMoNg2OGzC1XAqrJOcr1KLqd6XtYQDPs+RqwbMpzJUpzqeZlCMOyLqTys6XiUOK+WjgyCAf6BX+lQ/wiGfVG1yUeUaFqKk2Pi88VBMOyLbVpxLImmpTgWJUot6bRUCIJhX2ww1ARDWtIpMge0QDDs+0Zx3tBxyF53kNBteEOFIBj2xTbMu1h6JZU/vtgm9g3Z2FC8Yo0jEQz7NhTHekylOdQUqbuqW2VVYrvX3i+xSfyrxfudlxbdliYEx/fi+0qGOLznYsNH2ObrpLGuf/Ei7w7sGufFuiVD7FrKTnXbbHgBgbD4nm65sW5g3rZb3i7tFi+JjOLHav01ZFgVxbHU5LKUfaGDfFaSHXs8gWErT5O/ksVmlUTKmKjm2PVbiCXn/WpbrcIBrG+Lr52vwZQyEMSiAhoWgN3dQatYQPjjvmO9mgBe4rSBuqQEp6KM2A0X07DeokvFoCDWPzv0Gs7Qt5jdIGhrTlcRwBB2A4OlatgNflWRAXZBKneBT5wWrLvwrEAoWp3ELvtQkw1parAhN8FhSyODkLEr1embUlTkptitKW0aqkNaKjjA8JIgGCb4K7rUys5Z5Ni++LuifN7mGKHwGCAYArCrYX6g0/Pb1Gw2rwka6gXwNbJLmRfOyg0CAdRYXxm3NNcEkIqPOyCk9GlFAFZ4/ll/5iBjqlYEYI1d8+g1L9+PmWwIYG7sKtQaXqY7xt0AcmJ3l5BniYbL6+c0qwigFN7OO9ZwfmsuOK/cKUCl20zYTfq4IjeQr3UTCtGSm6dbao8f0ZE+HYIhA94O11KT6/bYT55YTby1JT8hIbkukvJTEv8TEr89BMMCvMzfo9EcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALwqfwPu9k0O3n0Y2QAAAABJRU5ErkJggg==",nf="/kooop/assets/docta-1ec713c3.jpg";/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bi(){return bi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bi.apply(this,arguments)}var Gt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gt||(Gt={}));const rf="popstate";function mw(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Jl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:go(i)}return yw(e,n,null,t)}function te(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ac(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gw(){return Math.random().toString(36).substr(2,8)}function sf(t,e){return{usr:t.state,key:t.key,idx:e}}function Jl(t,e,n,r){return n===void 0&&(n=null),bi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Nr(e):e,{state:n,key:e&&e.key||r||gw()})}function go(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Nr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function yw(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Gt.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(bi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=Gt.Pop;let N=c(),h=N==null?null:N-u;u=N,l&&l({action:a,location:_.location,delta:h})}function g(N,h){a=Gt.Push;let d=Jl(_.location,N,h);n&&n(d,N),u=c()+1;let m=sf(d,u),v=_.createHref(d);try{o.pushState(m,"",v)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(v)}s&&l&&l({action:a,location:_.location,delta:1})}function y(N,h){a=Gt.Replace;let d=Jl(_.location,N,h);n&&n(d,N),u=c();let m=sf(d,u),v=_.createHref(d);o.replaceState(m,"",v),s&&l&&l({action:a,location:_.location,delta:0})}function w(N){let h=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof N=="string"?N:go(N);return te(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let _={get action(){return a},get location(){return t(i,o)},listen(N){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(rf,f),l=N,()=>{i.removeEventListener(rf,f),l=null}},createHref(N){return e(i,N)},createURL:w,encodeLocation(N){let h=w(N);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:y,go(N){return o.go(N)}};return _}var of;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(of||(of={}));function vw(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Nr(e):e,i=lc(r.pathname||"/",n);if(i==null)return null;let s=Nm(t);ww(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Rw(s[a],Nw(i));return o}function Nm(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=sn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(te(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Nm(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:kw(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Om(s.path))i(s,o,l)}),e}function Om(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Om(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function ww(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Pw(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const _w=/^:\w+$/,Iw=3,Ew=2,Aw=1,Sw=10,Tw=-2,af=t=>t==="*";function kw(t,e){let n=t.split("/"),r=n.length;return n.some(af)&&(r+=Tw),e&&(r+=Ew),n.filter(i=>!af(i)).reduce((i,s)=>i+(_w.test(s)?Iw:s===""?Aw:Sw),r)}function Pw(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Rw(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Cw({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:sn([i,c.pathname]),pathnameBase:bw(sn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=sn([i,c.pathnameBase]))}return s}function Cw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=xw(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let g=a[f]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}return u[c]=Ow(a[f]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function xw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ac(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Nw(t){try{return decodeURI(t)}catch(e){return ac(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ow(t,e){try{return decodeURIComponent(t)}catch(n){return ac(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function lc(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Dw(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Nr(t):t;return{pathname:n?n.startsWith("/")?n:Lw(n,e):e,search:Vw(r),hash:Mw(i)}}function Lw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ba(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Dm(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Lm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Nr(t):(i=bi({},t),te(!i.pathname||!i.pathname.includes("?"),Ba("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),Ba("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),Ba("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let f=e.length-1;if(o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}a=f>=0?e[f]:"/"}let l=Dw(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const sn=t=>t.join("/").replace(/\/\/+/g,"/"),bw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Vw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Mw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Uw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const bm=["post","put","patch","delete"];new Set(bm);const jw=["get",...bm];new Set(jw);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yo(){return yo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yo.apply(this,arguments)}const uc=E.createContext(null),Fw=E.createContext(null),Or=E.createContext(null),Yo=E.createContext(null),gn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Vm=E.createContext(null);function Bw(t,e){let{relative:n}=e===void 0?{}:e;Yi()||te(!1);let{basename:r,navigator:i}=E.useContext(Or),{hash:s,pathname:o,search:a}=Um(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:sn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Yi(){return E.useContext(Yo)!=null}function Xi(){return Yi()||te(!1),E.useContext(Yo).location}function Mm(t){E.useContext(Or).static||E.useLayoutEffect(t)}function cc(){let{isDataRoute:t}=E.useContext(gn);return t?n_():zw()}function zw(){Yi()||te(!1);let t=E.useContext(uc),{basename:e,navigator:n}=E.useContext(Or),{matches:r}=E.useContext(gn),{pathname:i}=Xi(),s=JSON.stringify(Dm(r).map(l=>l.pathnameBase)),o=E.useRef(!1);return Mm(()=>{o.current=!0}),E.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Lm(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:sn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const Hw=E.createContext(null);function Ww(t){let e=E.useContext(gn).outlet;return e&&E.createElement(Hw.Provider,{value:t},e)}function Um(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=E.useContext(gn),{pathname:i}=Xi(),s=JSON.stringify(Dm(r).map(o=>o.pathnameBase));return E.useMemo(()=>Lm(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function $w(t,e){return qw(t,e)}function qw(t,e,n){Yi()||te(!1);let{navigator:r}=E.useContext(Or),{matches:i}=E.useContext(gn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Xi(),u;if(e){var c;let _=typeof e=="string"?Nr(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||te(!1),u=_}else u=l;let f=u.pathname||"/",g=a==="/"?f:f.slice(a.length)||"/",y=vw(t,{pathname:g}),w=Yw(y&&y.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:sn([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:sn([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&w?E.createElement(Yo.Provider,{value:{location:yo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Gt.Pop}},w):w}function Kw(){let t=t_(),e=Uw(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,s)}const Gw=E.createElement(Kw,null);class Qw extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?E.createElement(gn.Provider,{value:this.props.routeContext},E.createElement(Vm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Jw(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(uc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(gn.Provider,{value:e},r)}function Yw(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||te(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||Gw);let g=e.concat(s.slice(0,u+1)),y=()=>{let w;return c?w=f:l.route.Component?w=E.createElement(l.route.Component,null):l.route.element?w=l.route.element:w=a,E.createElement(Jw,{match:l,routeContext:{outlet:a,matches:g,isDataRoute:n!=null},children:w})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?E.createElement(Qw,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var jm=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(jm||{}),vo=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(vo||{});function Xw(t){let e=E.useContext(uc);return e||te(!1),e}function Zw(t){let e=E.useContext(Fw);return e||te(!1),e}function e_(t){let e=E.useContext(gn);return e||te(!1),e}function Fm(t){let e=e_(),n=e.matches[e.matches.length-1];return n.route.id||te(!1),n.route.id}function t_(){var t;let e=E.useContext(Vm),n=Zw(vo.UseRouteError),r=Fm(vo.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function n_(){let{router:t}=Xw(jm.UseNavigateStable),e=Fm(vo.UseNavigateStable),n=E.useRef(!1);return Mm(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,yo({fromRouteId:e},s)))},[t,e])}function r_(t){return Ww(t.context)}function dt(t){te(!1)}function i_(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Gt.Pop,navigator:s,static:o=!1}=t;Yi()&&te(!1);let a=e.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Nr(r));let{pathname:u="/",search:c="",hash:f="",state:g=null,key:y="default"}=r,w=E.useMemo(()=>{let _=lc(u,a);return _==null?null:{location:{pathname:_,search:c,hash:f,state:g,key:y},navigationType:i}},[a,u,c,f,g,y,i]);return w==null?null:E.createElement(Or.Provider,{value:l},E.createElement(Yo.Provider,{children:n,value:w}))}function s_(t){let{children:e,location:n}=t;return $w(Yl(e),n)}new Promise(()=>{});function Yl(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,Yl(r.props.children,s));return}r.type!==dt&&te(!1),!r.props.index||!r.props.children||te(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Yl(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xl(){return Xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xl.apply(this,arguments)}function o_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function a_(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function l_(t,e){return t.button===0&&(!e||e==="_self")&&!a_(t)}const u_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],c_="startTransition",lf=nv[c_];function d_(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=mw({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=E.useCallback(f=>{u&&lf?lf(()=>l(f)):l(f)},[l,u]);return E.useLayoutEffect(()=>o.listen(c),[o,c]),E.createElement(i_,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const f_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",h_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_t=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,f=o_(e,u_),{basename:g}=E.useContext(Or),y,w=!1;if(typeof u=="string"&&h_.test(u)&&(y=u,f_))try{let d=new URL(window.location.href),m=u.startsWith("//")?new URL(d.protocol+u):new URL(u),v=lc(m.pathname,g);m.origin===d.origin&&v!=null?u=v+m.search+m.hash:w=!0}catch{}let _=Bw(u,{relative:i}),N=p_(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function h(d){r&&r(d),d.defaultPrevented||N(d)}return E.createElement("a",Xl({},f,{href:y||_,onClick:w||s?r:h,ref:n,target:l}))});var uf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(uf||(uf={}));var cf;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(cf||(cf={}));function p_(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=cc(),l=Xi(),u=Um(t,{relative:o});return E.useCallback(c=>{if(l_(c,n)){c.preventDefault();let f=r!==void 0?r:go(l)===go(u);a(t,{replace:f,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const Bm="/kooop/assets/budget-954e8633.png",zm="/kooop/assets/date-41afa211.png",Hm="/kooop/assets/location-78db43e9.png",Wm="/kooop/assets/media-f7ac3fd5.png",Qt={budget:Bm,date:zm,location:Hm,media:Wm},m_={HOME:{path:"home"},VIEW_KOOP:{path:"viewKoop"}},Ve={HOME:{path:"/",title:"Home"},MY_ACCOUNT:{path:"/my_acc",title:"My Account"},VIEW_KOOP:{path:"/view",title:"Koop"},SUBCRIPTION:{path:"/sub",title:"Subscription"},LOGIN:{path:"/login",title:"My Account"},LEGAL:{path:"/legal",title:"Koop"},INTRO:{path:"/intro",title:"Subscription"}},dc=" max-w-[900px] overflow-hidden mx-auto min-h-[320pt]";function g_(t){var n;const e=(n=t==null?void 0:t.current)==null?void 0:n.value;return e===void 0?"":e}const Gn=g_;function y_({onLogoClick:t,small:e,user:n}){return p.jsxs("div",{className:"header bg-sky-500 flex flex-col",children:[p.jsxs("div",{className:`cont-logo  items-center flex
      
      ${e?" justify-around items-center ":"flex-col justify-center  "}
      
      
      `,children:[p.jsxs("div",{className:`self-end m-4 ${e?" flex-1 ":""}  `,children:[p.jsx(_t,{to:Ve.MY_ACCOUNT.path,children:p.jsx("img",{alt:"My Account",src:nf,className:"rounded-full w-[30pt] mx-auto hover:outline cursor-pointer hover:outline-white  "})}),p.jsxs("div",{className:"text-center text-sm bg-white text-sky-500 rounded-lg w-fit mx-auto px-1 my-2 ",children:[p.jsx("div",{children:n.displayname}),p.jsxs("div",{children:[" ",n.phone]})]})]}),p.jsx(_t,{to:"/",children:p.jsx("img",{className:`cursor-pointer ${e?" flex-3 ":" -mt-[50pt] "}`,src:xm,width:e?160:100})}),p.jsx("p",{className:` p-2 text-center  transition-colors ease-in-out duration-150
          
          ${e?"text-sm flex-1 ":""}
          
          `,children:"100000 + of services and quick deals at your fingertips ..."})]}),p.jsx("div",{className:` gap-2 py-2 
      
      ${e?" h-[60pt] ":" h-[80pt] "}
      
      flex overflow-x-scroll w-[100vw]`,children:[...Array(20).fill(0)].map((r,i)=>p.jsx("div",{className:"bg-green-200  overflow-hidden min-w-[120pt] rounded-lg   ",children:p.jsx("img",{className:"w-[100%]  ",src:nf})},i))})]})}function Es({icon:t,text:e}){return p.jsxs("div",{className:"flex",children:[p.jsx("img",{src:t,width:20}),p.jsx("span",{children:e})]})}function v_({data:t,onKoopClicked:e}){const{date:n,budget:r,location:i,media:s}=t;return p.jsxs("div",{onClick:o=>e(t),className:"border-sky-100 md:w-[50%]  flex flex-col gap-2 cursor-pointer border my-2 p-2 rounded-lg hover:border-green-500 shadow-black/10  shadow-lg hover:bg-sky-slate-200",children:[p.jsxs("div",{className:" flex gap-2 text-sm  text-gray-400",children:[r&&p.jsx(Es,{text:r+" $",icon:Qt.budget}),n&&p.jsx(Es,{text:n,icon:Qt.date}),i&&p.jsx(Es,{text:i,icon:Qt.location}),s&&p.jsx(Es,{text:"Media",icon:Qt.media})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between",children:[p.jsx("span",{children:t.text}),p.jsx("span",{className:"bg-green-700 text-xs p-1 rounded-lg text-white",children:"Exp. dans 22h"})]}),p.jsx("div",{className:"italic text-sm my-1 text-slate-400 ",children:"Posted by @DoctaRhyf"})]})]})}/**
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
 */const $m=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},w_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let g=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(g=64)),r.push(n[c],n[f],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($m(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):w_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new __;const g=s<<2|a>>4;if(r.push(g),u!==64){const y=a<<4&240|u>>2;if(r.push(y),f!==64){const w=u<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class __ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const I_=function(t){const e=$m(t);return qm.encodeByteArray(e,!0)},wo=function(t){return I_(t).replace(/\./g,"")},Km=function(t){try{return qm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function E_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const A_=()=>E_().__FIREBASE_DEFAULTS__,S_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},T_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Km(t[1]);return e&&JSON.parse(e)},fc=()=>{try{return A_()||S_()||T_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gm=t=>{var e,n;return(n=(e=fc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},k_=t=>{const e=Gm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Qm=()=>{var t;return(t=fc())===null||t===void 0?void 0:t.config},Jm=t=>{var e;return(e=fc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class P_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function R_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[wo(JSON.stringify(n)),wo(JSON.stringify(o)),a].join(".")}/**
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function C_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function Ym(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function x_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function N_(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Xm(){try{return typeof indexedDB=="object"}catch{return!1}}function Zm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function O_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const D_="FirebaseError";class lt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=D_,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hn.prototype.create)}}class Hn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?L_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new lt(i,a,r)}}function L_(t,e){return t.replace(b_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const b_=/\{\$([^}]+)}/g;function V_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(df(s)&&df(o)){if(!Vi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function df(t){return t!==null&&typeof t=="object"}/**
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
 */function Dr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function M_(t,e){const n=new U_(t,e);return n.subscribe.bind(n)}class U_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");j_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=za),i.error===void 0&&(i.error=za),i.complete===void 0&&(i.complete=za);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function j_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function za(){}/**
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
 */const F_=1e3,B_=2,z_=4*60*60*1e3,H_=.5;function ff(t,e=F_,n=B_){const r=e*Math.pow(n,t),i=Math.round(H_*r*(Math.random()-.5)*2);return Math.min(z_,r+i)}/**
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
 */function Te(t){return t&&t._delegate?t._delegate:t}class at{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const En="[DEFAULT]";/**
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
 */class W_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new P_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(q_(e))try{this.getOrInitializeService({instanceIdentifier:En})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=En){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=En){return this.instances.has(e)}getOptions(e=En){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=En){return this.component?this.component.multipleInstances?e:En:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $_(t){return t===En?void 0:t}function q_(t){return t.instantiationMode==="EAGER"}/**
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
 */class K_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new W_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(j||(j={}));const G_={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Q_=j.INFO,J_={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Y_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=J_[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xo{constructor(e){this.name=e,this._logLevel=Q_,this._logHandler=Y_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?G_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const X_=(t,e)=>e.some(n=>t instanceof n);let hf,pf;function Z_(){return hf||(hf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eI(){return pf||(pf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eg=new WeakMap,Zl=new WeakMap,tg=new WeakMap,Ha=new WeakMap,hc=new WeakMap;function tI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(on(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&eg.set(n,t)}).catch(()=>{}),hc.set(e,t),e}function nI(t){if(Zl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Zl.set(t,e)}let eu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rI(t){eu=t(eu)}function iI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wa(this),e,...n);return tg.set(r,e.sort?e.sort():[e]),on(r)}:eI().includes(t)?function(...e){return t.apply(Wa(this),e),on(eg.get(this))}:function(...e){return on(t.apply(Wa(this),e))}}function sI(t){return typeof t=="function"?iI(t):(t instanceof IDBTransaction&&nI(t),X_(t,Z_())?new Proxy(t,eu):t)}function on(t){if(t instanceof IDBRequest)return tI(t);if(Ha.has(t))return Ha.get(t);const e=sI(t);return e!==t&&(Ha.set(t,e),hc.set(e,t)),e}const Wa=t=>hc.get(t);function oI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=on(o);return r&&o.addEventListener("upgradeneeded",l=>{r(on(o.result),l.oldVersion,l.newVersion,on(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const aI=["get","getKey","getAll","getAllKeys","count"],lI=["put","add","delete","clear"],$a=new Map;function mf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($a.get(e))return $a.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=lI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||aI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return $a.set(e,s),s}rI(t=>({...t,get:(e,n,r)=>mf(e,n)||t.get(e,n,r),has:(e,n)=>!!mf(e,n)||t.has(e,n)}));/**
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
 */class uI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tu="@firebase/app",gf="0.9.18";/**
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
 */const bn=new Xo("@firebase/app"),dI="@firebase/app-compat",fI="@firebase/analytics-compat",hI="@firebase/analytics",pI="@firebase/app-check-compat",mI="@firebase/app-check",gI="@firebase/auth",yI="@firebase/auth-compat",vI="@firebase/database",wI="@firebase/database-compat",_I="@firebase/functions",II="@firebase/functions-compat",EI="@firebase/installations",AI="@firebase/installations-compat",SI="@firebase/messaging",TI="@firebase/messaging-compat",kI="@firebase/performance",PI="@firebase/performance-compat",RI="@firebase/remote-config",CI="@firebase/remote-config-compat",xI="@firebase/storage",NI="@firebase/storage-compat",OI="@firebase/firestore",DI="@firebase/firestore-compat",LI="firebase",bI="10.3.1";/**
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
 */const nu="[DEFAULT]",VI={[tu]:"fire-core",[dI]:"fire-core-compat",[hI]:"fire-analytics",[fI]:"fire-analytics-compat",[mI]:"fire-app-check",[pI]:"fire-app-check-compat",[gI]:"fire-auth",[yI]:"fire-auth-compat",[vI]:"fire-rtdb",[wI]:"fire-rtdb-compat",[_I]:"fire-fn",[II]:"fire-fn-compat",[EI]:"fire-iid",[AI]:"fire-iid-compat",[SI]:"fire-fcm",[TI]:"fire-fcm-compat",[kI]:"fire-perf",[PI]:"fire-perf-compat",[RI]:"fire-rc",[CI]:"fire-rc-compat",[xI]:"fire-gcs",[NI]:"fire-gcs-compat",[OI]:"fire-fst",[DI]:"fire-fst-compat","fire-js":"fire-js",[LI]:"fire-js-all"};/**
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
 */const _o=new Map,ru=new Map;function MI(t,e){try{t.container.addComponent(e)}catch(n){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yt(t){const e=t.name;if(ru.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;ru.set(e,t);for(const n of _o.values())MI(n,t);return!0}function Wn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const UI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},an=new Hn("app","Firebase",UI);/**
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
 */class jI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new at("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
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
 */const Lr=bI;function ng(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:nu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});if(n||(n=Qm()),!n)throw an.create("no-options");const s=_o.get(i);if(s){if(Vi(n,s.options)&&Vi(r,s.config))return s;throw an.create("duplicate-app",{appName:i})}const o=new K_(i);for(const l of ru.values())o.addComponent(l);const a=new jI(n,r,o);return _o.set(i,a),a}function pc(t=nu){const e=_o.get(t);if(!e&&t===nu&&Qm())return ng();if(!e)throw an.create("no-app",{appName:t});return e}function Ye(t,e,n){var r;let i=(r=VI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(a.join(" "));return}yt(new at(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const FI="firebase-heartbeat-database",BI=1,Mi="firebase-heartbeat-store";let qa=null;function rg(){return qa||(qa=oI(FI,BI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Mi)}}}).catch(t=>{throw an.create("idb-open",{originalErrorMessage:t.message})})),qa}async function zI(t){try{return await(await rg()).transaction(Mi).objectStore(Mi).get(ig(t))}catch(e){if(e instanceof lt)bn.warn(e.message);else{const n=an.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(n.message)}}}async function yf(t,e){try{const r=(await rg()).transaction(Mi,"readwrite");await r.objectStore(Mi).put(e,ig(t)),await r.done}catch(n){if(n instanceof lt)bn.warn(n.message);else{const r=an.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(r.message)}}}function ig(t){return`${t.name}!${t.options.appId}`}/**
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
 */const HI=1024,WI=30*24*60*60*1e3;class $I{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=vf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=WI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vf(),{heartbeatsToSend:n,unsentEntries:r}=qI(this._heartbeatsCache.heartbeats),i=wo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function vf(){return new Date().toISOString().substring(0,10)}function qI(t,e=HI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xm()?Zm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wf(t){return wo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function GI(t){yt(new at("platform-logger",e=>new uI(e),"PRIVATE")),yt(new at("heartbeat",e=>new $I(e),"PRIVATE")),Ye(tu,gf,t),Ye(tu,gf,"esm2017"),Ye("fire-js","")}GI("");/**
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
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
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
 */let br="10.3.1";/**
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
 */const Sr=new Xo("@firebase/firestore");function Io(t,...e){if(Sr.logLevel<=j.DEBUG){const n=e.map(gc);Sr.debug(`Firestore (${br}): ${t}`,...n)}}function mc(t,...e){if(Sr.logLevel<=j.ERROR){const n=e.map(gc);Sr.error(`Firestore (${br}): ${t}`,...n)}}function sg(t,...e){if(Sr.logLevel<=j.WARN){const n=e.map(gc);Sr.warn(`Firestore (${br}): ${t}`,...n)}}function gc(t){if(typeof t=="string")return t;try{/**
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${br}) INTERNAL ASSERTION FAILED: `+t;throw mc(e),new Error(e)}function fn(t,e){t||J()}function Zo(t,e){return t}/**
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
 */const _f="ok",QI="cancelled",ci="unknown",D="invalid-argument",JI="deadline-exceeded",YI="not-found",XI="permission-denied",iu="unauthenticated",ZI="resource-exhausted",Tr="failed-precondition",eE="aborted",tE="out-of-range",og="unimplemented",nE="internal",rE="unavailable";class O extends lt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ag{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Re.UNAUTHENTICATED))}shutdown(){}}class sE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class oE{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(fn(typeof e.accessToken=="string"),new ag(e.accessToken,new Re(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class aE{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class lE{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new aE(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(Re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cE{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(fn(typeof e.token=="string"),new uE(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class dE{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ui{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ui("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ui&&e.projectId===this.projectId&&e.database===this.database}}class ji{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ji.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ji?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ie extends ji{construct(e,n,r){return new ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(D,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const fE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends ji{construct(e,n,r){return new Me(e,n,r)}static isValidIdentifier(e){return fE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Me(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(D,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new O(D,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(D,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new O(D,"Unterminated ` in path: "+e);return new Me(n)}static emptyPath(){return new Me([])}}/**
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
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(ie.fromString(e))}static fromName(e){return new pe(ie.fromString(e).popFirst(5))}static empty(){return new pe(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new ie(e.slice()))}}/**
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
 */function lg(t,e,n){if(!n)throw new O(D,`Function ${t}() cannot be called with an empty ${e}.`)}function If(t){if(!pe.isDocumentKey(t))throw new O(D,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ef(t){if(pe.isDocumentKey(t))throw new O(D,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ea(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function yc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(D,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ea(t);throw new O(D,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function ug(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */let As=null;function hE(){return As===null?As=function(){return 268435456+Math.round(2147483648*Math.random())}():As++,"0x"+As.toString(16)}/**
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
 */function pE(t){return t==null}function Eo(t){return t===0&&1/t==-1/0}/**
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
 */const mE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Af,M;function Sf(t){if(t===void 0)return mc("RPC_ERROR","HTTP error has no status"),ci;switch(t){case 200:return _f;case 400:return Tr;case 401:return iu;case 403:return XI;case 404:return YI;case 409:return eE;case 416:return tE;case 429:return ZI;case 499:return QI;case 500:return ci;case 501:return og;case 503:return rE;case 504:return JI;default:return t>=200&&t<300?_f:t>=400&&t<500?Tr:t>=500&&t<600?nE:ci}}/**
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
 */(M=Af||(Af={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";class gE extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+n.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get P(){return!1}R(n,r,i,s,o){const a=hE(),l=this.I(n,r);Io("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(u,s,o),this.p(n,l,u,i).then(c=>(Io("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw sg("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}g(n,r,i,s,o,a){return this.R(n,r,i,s,o)}V(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+br}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}I(n,r){const i=mE[n];return`${this.m}/v1/${r}:${i}`}}{constructor(e,n){super(e),this.F=n}v(e,n){throw new Error("Not supported by FetchConnection")}async p(e,n,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.F(n,{method:"POST",headers:r,body:o})}catch(l){const u=l;throw new O(Sf(u.status),"Request failed with error: "+u.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const u=(s=l==null?void 0:l.error)===null||s===void 0?void 0:s.message;throw new O(Sf(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}/**
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
 */function yE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class vE{static C(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=yE(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function cg(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */function Tf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ta(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class wE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new wE("Invalid base64 string: "+s):s}}(e);return new xt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const _E=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vn(t){if(fn(!!t),typeof t=="string"){let e=0;const n=_E.exec(t);if(fn(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:re(t.seconds),nanos:re(t.nanos)}}function re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fi(t){return typeof t=="string"?xt.fromBase64String(t):xt.fromUint8Array(t)}/**
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
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(D,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(D,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(D,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(D,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function dg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function fg(t){const e=t.mapValue.fields.__previous_value__;return dg(e)?fg(e):e}function Bi(t){const e=Vn(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
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
 */const Ss={fields:{__type__:{stringValue:"__max__"}}};function Mn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?dg(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:J()}function Ao(t,e){if(t===e)return!0;const n=Mn(t);if(n!==Mn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Bi(t).isEqual(Bi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Vn(i.timestampValue),a=Vn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fi(i.bytesValue).isEqual(Fi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return re(i.geoPointValue.latitude)===re(s.geoPointValue.latitude)&&re(i.geoPointValue.longitude)===re(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return re(i.integerValue)===re(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=re(i.doubleValue),a=re(s.doubleValue);return o===a?Eo(o)===Eo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return cg(t.arrayValue.values||[],e.arrayValue.values||[],Ao);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Tf(o)!==Tf(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ao(o[l],a[l])))return!1;return!0}(t,e);default:return J()}}function zi(t,e){return(t.values||[]).find(n=>Ao(n,e))!==void 0}function So(t,e){if(t===e)return 0;const n=Mn(t),r=Mn(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=re(s.integerValue||s.doubleValue),l=re(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return kf(t.timestampValue,e.timestampValue);case 4:return kf(Bi(t),Bi(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Fi(s),l=Fi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=le(a[u],l[u]);if(c!==0)return c}return le(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=le(re(s.latitude),re(o.latitude));return a!==0?a:le(re(s.longitude),re(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=So(a[u],l[u]);if(c)return c}return le(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ss&&o===Ss)return 0;if(s===Ss)return 1;if(o===Ss)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const g=le(l[f],c[f]);if(g!==0)return g;const y=So(a[l[f]],u[c[f]]);if(y!==0)return y}return le(l.length,c.length)}(t.mapValue,e.mapValue);default:throw J()}}function kf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Vn(t),r=Vn(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function Pf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function hg(t){return!!t&&"arrayValue"in t}function Rf(t){return!!t&&"nullValue"in t}function Cf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ka(t){return!!t&&"mapValue"in t}function di(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ta(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=di(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=di(t.arrayValue.values[n]);return e}return Object.assign({},t)}class xf{constructor(e,n){this.position=e,this.inclusive=n}}/**
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
 */class pg{}class ut extends pg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new IE(e,n,r):n==="array-contains"?new SE(e,r):n==="in"?new TE(e,r):n==="not-in"?new kE(e,r):n==="array-contains-any"?new PE(e,r):new ut(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new EE(e,r):new AE(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(So(n,this.value)):n!==null&&Mn(this.value)===Mn(n)&&this.matchesComparison(So(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Zi extends pg{constructor(e,n){super(),this.filters=e,this.op=n,this.S=null}static create(e,n){return new Zi(e,n)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.S!==null||(this.S=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.S}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.N(n=>n.isInequality());return e!==null?e.field:null}N(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}class IE extends ut{constructor(e,n,r){super(e,n,r),this.key=pe.fromName(r.referenceValue)}matches(e){const n=pe.comparator(e.key,this.key);return this.matchesComparison(n)}}class EE extends ut{constructor(e,n){super(e,"in",n),this.keys=mg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class AE extends ut{constructor(e,n){super(e,"not-in",n),this.keys=mg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>pe.fromName(r.referenceValue))}class SE extends ut{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hg(n)&&zi(n.arrayValue,this.value)}}class TE extends ut{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&zi(this.value.arrayValue,n)}}class kE extends ut{constructor(e,n){super(e,"not-in",n)}matches(e){if(zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!zi(this.value.arrayValue,n)}}class PE extends ut{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>zi(this.value.arrayValue,r))}}/**
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
 */class fi{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class we{constructor(e){this.timestamp=e}static fromTimestamp(e){return new we(e)}static min(){return new we(new Fe(0,0))}static max(){return new we(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class To{constructor(e,n){this.comparator=e,this.root=n||he.EMPTY}insert(e,n){return new To(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,he.BLACK,null,null))}remove(e){return new To(this.comparator,this.root.remove(e,this.comparator).copy(null,null,he.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ts(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ts(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ts(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ts(this.root,e,this.comparator,!0)}}class Ts{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class he{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??he.RED,this.left=i??he.EMPTY,this.right=s??he.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new he(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return he.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return he.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}he.EMPTY=null,he.RED=!0,he.BLACK=!1;he.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new he(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ko{constructor(e){this.comparator=e,this.data=new To(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Nf(this.data.getIterator())}getIteratorFrom(e){return new Nf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ko)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ko(this.comparator);return n.data=e,n}}class Nf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Hi{constructor(e){this.fields=e,e.sort(Me.comparator)}static empty(){return new Hi([])}unionWith(e){let n=new ko(Me.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Hi(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return cg(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ka(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=di(n)}setAll(e){let n=Me.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=di(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ka(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ao(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ka(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ta(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pt(di(this.value))}}/**
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
 */class jt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new jt(e,0,we.min(),we.min(),we.min(),pt.empty(),0)}static newFoundDocument(e,n,r,i){return new jt(e,1,n,we.min(),r,i,0)}static newNoDocument(e,n){return new jt(e,2,n,we.min(),we.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new jt(e,3,n,we.min(),we.min(),pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class RE{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.O=null}}function Of(t,e=null,n=[],r=[],i=null,s=null,o=null){return new RE(t,e,n,r,i,s,o)}/**
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
 */class vc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.q=null,this.B=null,this.$=null,this.startAt,this.endAt}}function wc(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function na(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function CE(t){return t.collectionGroup!==null}function xE(t){const e=Zo(t);if(e.q===null){e.q=[];const n=na(e),r=wc(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new fi(n)),e.q.push(new fi(Me.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.q.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new fi(Me.keyField(),s))}}}return e.q}function NE(t){const e=Zo(t);return e.B||(e.B=OE(e,xE(t))),e.B}function OE(t,e){if(t.limitType==="F")return Of(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new fi(i.field,s)});const n=t.endAt?new xf(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new xf(t.startAt.position,t.startAt.inclusive):null;return Of(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function su(t,e){e.getFirstInequalityField(),na(t);const n=t.filters.concat([e]);return new vc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
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
 */function DE(t,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Eo(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,i){if(r.useProto3Json){if(isNaN(i))return{doubleValue:"NaN"};if(i===1/0)return{doubleValue:"Infinity"};if(i===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Eo(i)?"-0":i}}(t,e)}/**
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
 */class ra{constructor(){this._=void 0}}class LE extends ra{}class bE extends ra{constructor(e){super(),this.elements=e}}class VE extends ra{constructor(e){super(),this.elements=e}}class ME extends ra{constructor(e,n){super(),this.serializer=e,this.L=n}}class hi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hi}static exists(e){return new hi(void 0,e)}static updateTime(e){return new hi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class ia{}class gg extends ia{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class yg extends ia{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class UE extends ia{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jE extends ia{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const FE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),BE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),zE=(()=>({and:"AND",or:"OR"}))();class HE{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ou(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function WE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $E(t,e){return ou(t,e.toTimestamp())}function Df(t){return fn(!!t),we.fromTimestamp(function(n){const r=Vn(n);return new Fe(r.seconds,r.nanos)}(t))}function _c(t,e){return function(r){return new ie(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function au(t,e){return _c(t.databaseId,e.path)}function qE(t,e){const n=function(i){const s=ie.fromString(i);return fn(wg(s)),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new O(D,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(D,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new pe(function(i){return fn(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(n))}function Lf(t,e){return _c(t.databaseId,e)}function KE(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bf(t,e,n){return{name:au(t,e),fields:n.value.mapValue.fields}}function GE(t,e){let n;if(e instanceof gg)n={update:bf(t,e.key,e.value)};else if(e instanceof UE)n={delete:au(t,e.key)};else if(e instanceof yg)n={update:bf(t,e.key,e.data),updateMask:ZE(e.fieldMask)};else{if(!(e instanceof jE))return J();n={verify:au(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof LE)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof bE)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof VE)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ME)return{fieldPath:o.field.canonicalString(),increment:a.L};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:$E(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function QE(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Lf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Lf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return vg(Zi.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:Qn(f.field),direction:JE(f.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.useProto3Json||pE(u)?u:{value:u}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function JE(t){return FE[t]}function YE(t){return BE[t]}function XE(t){return zE[t]}function Qn(t){return{fieldPath:t.canonicalString()}}function vg(t){return t instanceof ut?function(n){if(n.op==="=="){if(Cf(n.value))return{unaryFilter:{field:Qn(n.field),op:"IS_NAN"}};if(Rf(n.value))return{unaryFilter:{field:Qn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Cf(n.value))return{unaryFilter:{field:Qn(n.field),op:"IS_NOT_NAN"}};if(Rf(n.value))return{unaryFilter:{field:Qn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qn(n.field),op:YE(n.op),value:n.value}}}(t):t instanceof Zi?function(n){const r=n.getFilters().map(i=>vg(i));return r.length===1?r[0]:{compositeFilter:{op:XE(n.op),filters:r}}}(t):J()}function ZE(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function wg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function Ic(t){return new HE(t,!0)}/**
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
 */class eA extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.X=!1}tt(){if(this.X)throw new O(Tr,"The client has already been terminated.")}R(e,n,r){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.R(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===iu&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(ci,i.toString())})}g(e,n,r,i){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.g(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===iu&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(ci,s.toString())})}terminate(){this.X=!0}}async function tA(t,e){const n=Zo(t),r=KE(n.serializer)+"/documents",i={writes:e.map(s=>GE(n.serializer,s))};await n.R("Commit",r,i)}async function nA(t,e){const n=Zo(t),r=QE(n.serializer,NE(e));return(await n.g("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(o,a,l){const u=qE(o,a.name),c=Df(a.updateTime),f=a.createTime?Df(a.createTime):we.min(),g=new pt({mapValue:{fields:a.fields}}),y=jt.newFoundDocument(u,c,f,g);return l&&y.setHasCommittedMutations(),l?y.setHasCommittedMutations():y}(n.serializer,i.document,void 0))}/**
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
 */const pi=new Map;function _g(t){if(t._terminated)throw new O(Tr,"The client has already been terminated.");if(!pi.has(t)){Io("ComponentProvider","Initializing Datastore");const e=function(s){return new gE(s,fetch.bind(null))}(function(s,o,a,l){return new dE(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,ug(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=Ic(t._databaseId),r=function(s,o,a,l){return new eA(s,o,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);pi.set(t,r)}return pi.get(t)}class Vf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(D,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(D,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,l){if(o===!0&&l===!0)throw new O(D,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ug((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(D,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(D,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(D,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}let sa=class{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(Tr,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(Tr,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iE;switch(r.type){case"firstParty":return new lE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(D,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=pi.get(n);r&&(Io("ComponentProvider","Removing Datastore"),pi.delete(n),r.terminate())}(this),Promise.resolve()}};function rA(t,e){const n=typeof t=="object"?t:pc(),r=typeof t=="string"?t:e||"(default)",i=Wn(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=k_("firestore");s&&iA(i,...s)}return i}function iA(t,e,n,r={}){var i;const s=(t=yc(t,sa))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&sg("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Re.MOCK_USER;else{a=R_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new O(D,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Re(u)}t._authCredentials=new sE(new ag(a,l))}}/**
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
 */class $n{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $n(this.firestore,e,this._query)}}class Be{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}}class ln extends $n{constructor(e,n,r){super(e,n,function(s){return new vc(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new pe(e))}withConverter(e){return new ln(this.firestore,e,this._path)}}function sA(t,e,...n){if(t=Te(t),lg("collection","path",e),t instanceof sa){const r=ie.fromString(e,...n);return Ef(r),new ln(t,null,r)}{if(!(t instanceof Be||t instanceof ln))throw new O(D,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return Ef(r),new ln(t.firestore,null,r)}}function oA(t,e,...n){if(t=Te(t),arguments.length===1&&(e=vE.C()),lg("doc","path",e),t instanceof sa){const r=ie.fromString(e,...n);return If(r),new Be(t,null,new pe(r))}{if(!(t instanceof Be||t instanceof ln))throw new O(D,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return If(r),new Be(t.firestore,t instanceof ln?t.converter:null,new pe(r))}}/**
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
 */class kr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kr(xt.fromBase64String(e))}catch(n){throw new O(D,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new kr(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ec{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(D,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ig{constructor(e){this._methodName=e}}/**
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
 */class Ac{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(D,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(D,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */const aA=/^__.*__$/;class lA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new yg(e,this.data,this.fieldMask,n,this.fieldTransforms):new gg(e,this.data,n,this.fieldTransforms)}}function Eg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Sc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.rt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get nt(){return this.settings.nt}it(e){return new Sc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}st(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.it({path:r,ot:!1});return i.ut(e),i}_t(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.it({path:r,ot:!1});return i.rt(),i}lt(e){return this.it({path:void 0,ot:!0})}ct(e){return Po(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.dt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}rt(){if(this.path)for(let e=0;e<this.path.length;e++)this.ut(this.path.get(e))}ut(e){if(e.length===0)throw this.ct("Document fields must not be empty");if(Eg(this.nt)&&aA.test(e))throw this.ct('Document fields cannot begin and end with "__"')}}class uA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ic(e)}ft(e,n,r,i=!1){return new Sc({nt:e,methodName:n,dt:r,path:Me.emptyPath(),ot:!1,ht:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ag(t){const e=t._freezeSettings(),n=Ic(t._databaseId);return new uA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function cA(t,e,n,r,i,s={}){const o=t.ft(s.merge||s.mergeFields?2:0,e,n,i);kg("Data must be an object, but it was:",o,r);const a=Sg(r,o);let l,u;if(s.merge)l=new Hi(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const g=fA(e,f,n);if(!o.contains(g))throw new O(D,`Field '${g}' is specified in your field mask but missing from your input data.`);pA(c,g)||c.push(g)}l=new Hi(c),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new lA(new pt(a),l,u)}function dA(t,e,n,r=!1){return Tc(n,t.ft(r?4:3,e))}function Tc(t,e){if(Tg(t=Te(t)))return kg("Unsupported field value:",e,t),Sg(t,e);if(t instanceof Ig)return function(r,i){if(!Eg(i.nt))throw i.ct(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ct(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ot&&e.nt!==4)throw e.ct("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Tc(a,i.lt(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return DE(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Fe.fromDate(r);return{timestampValue:ou(i.serializer,s)}}if(r instanceof Fe){const s=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ou(i.serializer,s)}}if(r instanceof Ac)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof kr)return{bytesValue:WE(i.serializer,r._byteString)};if(r instanceof Be){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.ct(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:_c(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.ct(`Unsupported field value: ${ea(r)}`)}(t,e)}function Sg(t,e){const n={};return function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ta(t,(r,i)=>{const s=Tc(i,e.st(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Tg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof Ac||t instanceof kr||t instanceof Be||t instanceof Ig)}function kg(t,e,n){if(!Tg(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ea(n);throw r==="an object"?e.ct(t+" a custom object"):e.ct(t+" "+r)}}function fA(t,e,n){if((e=Te(e))instanceof Ec)return e._internalPath;if(typeof e=="string")return Pg(t,e);throw Po("Field path arguments must be of type string or ",t,!1,void 0,n)}const hA=new RegExp("[~\\*/\\[\\]]");function Pg(t,e,n){if(e.search(hA)>=0)throw Po(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ec(...e.split("."))._internalPath}catch{throw Po(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Po(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new O(D,a+t+l)}function pA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class mA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Rg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Cg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Rg extends mA{data(){return super.data()}}class gA{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function Cg(t,e){return typeof e=="string"?Pg(t,e):e instanceof Ec?e._internalPath:e._delegate._internalPath}/**
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
 */class kc{}class xg extends kc{}function yA(t,e,...n){let r=[];e instanceof kc&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Rc).length,a=s.filter(l=>l instanceof Pc).length;if(o>1||o>0&&a>0)throw new O(D,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Pc extends xg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Pc(e,n,r)}_apply(e){const n=this._parse(e);return Ng(e._query,n),new $n(e.firestore,e.converter,su(e._query,n))}_parse(e){const n=Ag(e.firestore);return function(s,o,a,l,u,c,f){let g;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new O(D,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Uf(f,c);const y=[];for(const w of f)y.push(Mf(l,s,w));g={arrayValue:{values:y}}}else g=Mf(l,s,f)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Uf(f,c),g=dA(a,o,f,c==="in"||c==="not-in");return ut.create(u,c,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Rc extends kc{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Rc(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Zi.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)Ng(o,l),o=su(o,l)}(e._query,n),new $n(e.firestore,e.converter,su(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cc extends xg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Cc(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new O(D,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new O(D,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new fi(s,o);return function(u,c){if(wc(u)===null){const f=na(u);f!==null&&Og(u,f,c.field)}}(i,a),a}(e._query,this._field,this._direction);return new $n(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new vc(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function vA(t,e="asc"){const n=e,r=Cg("orderBy",t);return Cc._create(r,n)}function Mf(t,e,n){if(typeof(n=Te(n))=="string"){if(n==="")throw new O(D,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!CE(e)&&n.indexOf("/")!==-1)throw new O(D,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ie.fromString(n));if(!pe.isDocumentKey(r))throw new O(D,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pf(t,new pe(r))}if(n instanceof Be)return Pf(t,n._key);throw new O(D,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ea(n)}.`)}function Uf(t,e){if(!Array.isArray(t)||t.length===0)throw new O(D,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ng(t,e){if(e.isInequality()){const r=na(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new O(D,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=wc(t);s!==null&&Og(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new O(D,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(D,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Og(t,e,n){if(!n.isEqual(e))throw new O(D,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */function wA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class _A extends class{convertValue(n,r="none"){switch(Mn(n)){case 0:return null;case 1:return n.booleanValue;case 2:return re(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,r);case 5:return n.stringValue;case 6:return this.convertBytes(Fi(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,r);case 10:return this.convertObject(n.mapValue,r);default:throw J()}}convertObject(n,r){return this.convertObjectMap(n.fields,r)}convertObjectMap(n,r="none"){const i={};return ta(n,(s,o)=>{i[s]=this.convertValue(o,r)}),i}convertGeoPoint(n){return new Ac(re(n.latitude),re(n.longitude))}convertArray(n,r){return(n.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(n,r){switch(r){case"previous":const i=fg(n);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(Bi(n));default:return null}}convertTimestamp(n){const r=Vn(n);return new Fe(r.seconds,r.nanos)}convertDocumentKey(n,r){const i=ie.fromString(n);fn(wg(i));const s=new Ui(i.get(1),i.get(3)),o=new pe(i.popFirst(5));return s.isEqual(r)||mc(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new kr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}function IA(t){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new O(og,"limitToLast() queries require specifying at least one orderBy() clause")})((t=yc(t,$n))._query);const e=_g(t.firestore),n=new _A(t.firestore);return nA(e,t._query).then(r=>{const i=r.map(s=>new Rg(t.firestore,n,s.key,s,t.converter));return t._query.limitType==="L"&&i.reverse(),new gA(t,i)})}function EA(t,e,n){const r=wA((t=yc(t,Be)).converter,e,n),i=cA(Ag(t.firestore),"setDoc",t._key,r,t.converter!==null,n);return tA(_g(t.firestore),[i.toMutation(t._key,hi.none())])}(function(){(function(n){br=n})(`${Lr}_lite`),yt(new at("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new sa(new oE(e.getProvider("auth-internal")),new cE(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new O(D,'"projectId" not provided in firebase.initializeApp.');return new Ui(a.options.projectId,l)}(i,n),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Ye("firestore-lite","4.1.3",""),Ye("firestore-lite","4.1.3","esm2017")})();let ks;const AA=new Uint8Array(16);function SA(){if(!ks&&(ks=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ks))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ks(AA)}const de=[];for(let t=0;t<256;++t)de.push((t+256).toString(16).slice(1));function TA(t,e=0){return(de[t[e+0]]+de[t[e+1]]+de[t[e+2]]+de[t[e+3]]+"-"+de[t[e+4]]+de[t[e+5]]+"-"+de[t[e+6]]+de[t[e+7]]+"-"+de[t[e+8]]+de[t[e+9]]+"-"+de[t[e+10]]+de[t[e+11]]+de[t[e+12]]+de[t[e+13]]+de[t[e+14]]+de[t[e+15]]).toLowerCase()}const kA=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),jf={randomUUID:kA};function PA(t,e,n){if(jf.randomUUID&&!e&&!t)return jf.randomUUID();t=t||{};const r=t.random||(t.rng||SA)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return TA(r)}var RA="firebase",CA="10.3.1";/**
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
 */Ye(RA,CA,"app");function xc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}/**
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
 */function Ff(t){return t!==void 0&&t.getResponse!==void 0}function Dg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xA=Dg,Lg=new Hn("auth","Firebase",Dg());/**
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
 */const Ro=new Xo("@firebase/auth");function NA(t,...e){Ro.logLevel<=j.WARN&&Ro.warn(`Auth (${Lr}): ${t}`,...e)}function Bs(t,...e){Ro.logLevel<=j.ERROR&&Ro.error(`Auth (${Lr}): ${t}`,...e)}/**
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
 */function Nt(t,...e){throw Nc(t,...e)}function ze(t,...e){return Nc(t,...e)}function OA(t,e,n){const r=Object.assign(Object.assign({},xA()),{[e]:n});return new Hn("auth","Firebase",r).create(e,{appName:t.name})}function Nc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Lg.create(t,...e)}function C(t,e,...n){if(!t)throw Nc(e,...n)}function At(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bs(e),new Error(e)}function Ot(t,e){t||At(e)}/**
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
 */function lu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bg(){return Bf()==="http:"||Bf()==="https:"}function Bf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function DA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bg()||Ym()||"connection"in navigator)?navigator.onLine:!0}function LA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class es{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ot(n>e,"Short delay should be less than long delay!"),this.isMobile=C_()||x_()}get(){return DA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Oc(t,e){Ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Vg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const VA=new es(3e4,6e4);function yn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Lt(t,e,n,r,i={}){return Mg(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Dr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Vg.fetch()(Ug(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Mg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bA),e);try{const i=new MA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Zr(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Zr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Zr(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw OA(t,c,u);Nt(t,c)}}catch(i){if(i instanceof lt)throw i;Nt(t,"network-request-failed",{message:String(i)})}}async function oa(t,e,n,r,i={}){const s=await Lt(t,e,n,r,i);return"mfaPendingCredential"in s&&Nt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ug(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Oc(t.config,i):`${t.config.apiScheme}://${i}`}class MA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),VA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ze(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function UA(t){return(await Lt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */async function jA(t,e){return Lt(t,"POST","/v1/accounts:delete",e)}async function FA(t,e){return Lt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function mi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BA(t,e=!1){const n=Te(t),r=await n.getIdToken(e),i=Dc(r);C(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:mi(Ga(i.auth_time)),issuedAtTime:mi(Ga(i.iat)),expirationTime:mi(Ga(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ga(t){return Number(t)*1e3}function Dc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Km(n);return i?JSON.parse(i):(Bs("Failed to decode base64 JWT payload"),null)}catch(i){return Bs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zA(t){const e=Dc(t);return C(e,"internal-error"),C(typeof e.exp<"u","internal-error"),C(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof lt&&HA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function HA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class WA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mi(this.lastLoginAt),this.creationTime=mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Co(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Wi(t,FA(n,{idToken:r}));C(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?KA(s.providerUserInfo):[],a=qA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jg(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function $A(t){const e=Te(t);await Co(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function KA(t){return t.map(e=>{var{providerId:n}=e,r=xc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function GA(t,e){const n=await Mg(t,{},async()=>{const r=Dr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ug(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Vg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class $i{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken<"u","internal-error"),C(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return C(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await GA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new $i;return r&&(C(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(C(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(C(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $i,this.toJSON())}_performRefresh(){return At("not implemented")}}/**
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
 */function Vt(t,e){C(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=xc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new WA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Wi(this,this.stsTokenManager.getToken(this.auth,e));return C(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BA(this,e)}reload(){return $A(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Co(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wi(this,jA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:v,isAnonymous:A,providerData:P,stsTokenManager:R}=n;C(m&&R,e,"internal-error");const x=$i.fromJSON(this.name,R);C(typeof m=="string",e,"internal-error"),Vt(f,e.name),Vt(g,e.name),C(typeof v=="boolean",e,"internal-error"),C(typeof A=="boolean",e,"internal-error"),Vt(y,e.name),Vt(w,e.name),Vt(_,e.name),Vt(N,e.name),Vt(h,e.name),Vt(d,e.name);const B=new Cn({uid:m,auth:e,email:g,emailVerified:v,displayName:f,isAnonymous:A,photoURL:w,phoneNumber:y,tenantId:_,stsTokenManager:x,createdAt:h,lastLoginAt:d});return P&&Array.isArray(P)&&(B.providerData=P.map(S=>Object.assign({},S))),N&&(B._redirectEventId=N),B}static async _fromIdTokenResponse(e,n,r=!1){const i=new $i;i.updateFromServerResponse(n);const s=new Cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Co(s),s}}/**
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
 */const zf=new Map;function St(t){Ot(t instanceof Function,"Expected a class definition");let e=zf.get(t);return e?(Ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zf.set(t,e),e)}/**
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
 */class Fg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fg.type="NONE";const Hf=Fg;/**
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
 */function zs(t,e,n){return`firebase:${t}:${e}:${n}`}class mr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zs(this.userKey,i.apiKey,s),this.fullPersistenceKey=zs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new mr(St(Hf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||St(Hf);const o=zs(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=Cn._fromJSON(e,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new mr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new mr(s,e,r))}}/**
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
 */function Wf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($g(e))return"Blackberry";if(qg(e))return"Webos";if(Lc(e))return"Safari";if((e.includes("chrome/")||zg(e))&&!e.includes("edge/"))return"Chrome";if(Wg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bg(t=Ee()){return/firefox\//i.test(t)}function Lc(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zg(t=Ee()){return/crios\//i.test(t)}function Hg(t=Ee()){return/iemobile/i.test(t)}function Wg(t=Ee()){return/android/i.test(t)}function $g(t=Ee()){return/blackberry/i.test(t)}function qg(t=Ee()){return/webos/i.test(t)}function aa(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function QA(t=Ee()){var e;return aa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JA(){return N_()&&document.documentMode===10}function Kg(t=Ee()){return aa(t)||Wg(t)||qg(t)||$g(t)||/windows phone/i.test(t)||Hg(t)}function YA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Gg(t,e=[]){let n;switch(t){case"Browser":n=Wf(Ee());break;case"Worker":n=`${Wf(Ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Lr}/${r}`}/**
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
 */class XA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ZA(t,e={}){return Lt(t,"GET","/v2/passwordPolicy",yn(t,e))}/**
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
 */const eS=6;class tS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:eS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class nS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $f(this),this.idTokenSubscription=new $f(this),this.beforeStateQueue=new XA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=St(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await mr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Co(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Te(e):null;return n&&C(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(St(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ZA(this),n=new tS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&St(e)||this._popupRedirectResolver;C(n,this,"argument-error"),this.redirectPersistenceManager=await mr.create(this,[St(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vr(t){return Te(t)}class $f{constructor(e){this.auth=e,this.observer=null,this.addObserver=M_(n=>this.observer=n)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function rS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Qg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ze("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",rS().appendChild(r)})}function Jg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function iS(t,e){const n=Wn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vi(s,e??{}))return i;Nt(i,"already-initialized")}return n.initialize({options:e})}function sS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(St);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oS(t,e,n){const r=Vr(t);C(r._canInitEmulator,r,"emulator-config-failed"),C(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Yg(e),{host:o,port:a}=aS(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||lS()}function Yg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aS(t){const e=Yg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qf(o)}}}function qf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class bc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return At("not implemented")}_getIdTokenResponse(e){return At("not implemented")}_linkToIdToken(e,n){return At("not implemented")}_getReauthenticationResolver(e){return At("not implemented")}}/**
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
 */async function gr(t,e){return oa(t,"POST","/v1/accounts:signInWithIdp",yn(t,e))}/**
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
 */const uS="http://localhost";class Un extends bc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=xc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Un(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gr(e,n)}buildRequest(){const e={requestUri:uS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Dr(n)}return e}}/**
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
 */async function cS(t,e){return Lt(t,"POST","/v1/accounts:sendVerificationCode",yn(t,e))}async function dS(t,e){return oa(t,"POST","/v1/accounts:signInWithPhoneNumber",yn(t,e))}async function fS(t,e){const n=await oa(t,"POST","/v1/accounts:signInWithPhoneNumber",yn(t,e));if(n.temporaryProof)throw Zr(t,"account-exists-with-different-credential",n);return n}const hS={USER_NOT_FOUND:"user-not-found"};async function pS(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return oa(t,"POST","/v1/accounts:signInWithPhoneNumber",yn(t,n),hS)}/**
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
 */class gi extends bc{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new gi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new gi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return dS(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return fS(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return pS(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new gi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */class Xg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ts extends Xg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zt extends ts{constructor(){super("facebook.com")}static credential(e){return Un._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
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
 */class Ht extends ts{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Un._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ht.credential(n,r)}catch{return null}}}Ht.GOOGLE_SIGN_IN_METHOD="google.com";Ht.PROVIDER_ID="google.com";/**
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
 */class Wt extends ts{constructor(){super("github.com")}static credential(e){return Un._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.GITHUB_SIGN_IN_METHOD="github.com";Wt.PROVIDER_ID="github.com";/**
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
 */class $t extends ts{constructor(){super("twitter.com")}static credential(e,n){return Un._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $t.credential(n,r)}catch{return null}}}$t.TWITTER_SIGN_IN_METHOD="twitter.com";$t.PROVIDER_ID="twitter.com";/**
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
 */class Pr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Cn._fromIdTokenResponse(e,r,i),o=Kf(r);return new Pr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Kf(r);return new Pr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Kf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class xo extends lt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new xo(e,n,r,i)}}function Zg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xo._fromErrorAndOperation(t,s,e,r):s})}async function mS(t,e,n=!1){const r=await Wi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pr._forOperation(t,"link",r)}/**
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
 */async function gS(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Wi(t,Zg(r,i,e,t),n);C(s.idToken,r,"internal-error");const o=Dc(s.idToken);C(o,r,"internal-error");const{sub:a}=o;return C(t.uid===a,r,"user-mismatch"),Pr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nt(r,"user-mismatch"),s}}/**
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
 */async function ey(t,e,n=!1){const r="signIn",i=await Zg(t,r,e),s=await Pr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function yS(t,e){return ey(Vr(t),e)}function vS(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function wS(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}/**
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
 */function _S(t,e){return Lt(t,"POST","/v2/accounts/mfaEnrollment:start",yn(t,e))}const No="__sak";/**
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
 */class ty{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(No,"1"),this.storage.removeItem(No),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function IS(){const t=Ee();return Lc(t)||aa(t)}const ES=1e3,AS=10;class ny extends ty{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=IS()&&YA(),this.fallbackToPolling=Kg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);JA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,AS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ES)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ny.type="LOCAL";const SS=ny;/**
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
 */class ry extends ty{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ry.type="SESSION";const iy=ry;/**
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
 */function TS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class la{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new la(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await TS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}la.receivers=[];/**
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
 */function Vc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class kS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Vc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Z(){return window}function PS(t){Z().location.href=t}/**
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
 */function Mc(){return typeof Z().WorkerGlobalScope<"u"&&typeof Z().importScripts=="function"}async function RS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xS(){return Mc()?self:null}/**
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
 */const sy="firebaseLocalStorageDb",NS=1,Oo="firebaseLocalStorage",oy="fbase_key";class ns{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ua(t,e){return t.transaction([Oo],e?"readwrite":"readonly").objectStore(Oo)}function OS(){const t=indexedDB.deleteDatabase(sy);return new ns(t).toPromise()}function uu(){const t=indexedDB.open(sy,NS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Oo,{keyPath:oy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Oo)?e(r):(r.close(),await OS(),e(await uu()))})})}async function Gf(t,e,n){const r=ua(t,!0).put({[oy]:e,value:n});return new ns(r).toPromise()}async function DS(t,e){const n=ua(t,!1).get(e),r=await new ns(n).toPromise();return r===void 0?null:r.value}function Qf(t,e){const n=ua(t,!0).delete(e);return new ns(n).toPromise()}const LS=800,bS=3;class ay{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=la._getInstance(xS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await RS(),!this.activeServiceWorker)return;this.sender=new kS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uu();return await Gf(e,No,"1"),await Qf(e,No),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ua(i,!1).getAll();return new ns(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ay.type="LOCAL";const VS=ay;/**
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
 */function MS(t,e){return Lt(t,"POST","/v2/accounts/mfaSignIn:start",yn(t,e))}/**
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
 */const US=500,jS=6e4,Ps=1e12;class FS{constructor(e){this.auth=e,this.counter=Ps,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new BS(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Ps;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Ps;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Ps;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class BS{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;C(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=zS(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},jS)},US))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function zS(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Qa=Jg("rcb"),HS=new es(3e4,6e4),WS="https://www.google.com/recaptcha/api.js?";class $S{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Z().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return C(qS(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Ff(Z().grecaptcha)?Promise.resolve(Z().grecaptcha):new Promise((r,i)=>{const s=Z().setTimeout(()=>{i(ze(e,"network-request-failed"))},HS.get());Z()[Qa]=()=>{Z().clearTimeout(s),delete Z()[Qa];const a=Z().grecaptcha;if(!a||!Ff(a)){i(ze(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const f=l(u,c);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${WS}?${Dr({onload:Qa,render:"explicit",hl:n})}`;Qg(o).catch(()=>{clearTimeout(s),i(ze(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Z().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function qS(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class KS{async load(e){return new FS(e)}clearedOneInstance(){}}/**
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
 */const ly="recaptcha",GS={theme:"light",type:"image"};class QS{constructor(e,n,r=Object.assign({},GS)){this.parameters=r,this.type=ly,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Vr(e),this.isInvisible=this.parameters.size==="invisible",C(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;C(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new KS:new $S,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){C(!this.parameters.sitekey,this.auth,"argument-error"),C(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),C(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Z()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){C(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){C(bg()&&!Mc(),this.auth,"internal-error"),await JS(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await UA(this.auth);C(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return C(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function JS(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class YS{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=gi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function XS(t,e,n){const r=Vr(t),i=await ZS(r,e,Te(n));return new YS(i,s=>yS(r,s))}async function ZS(t,e,n){var r;const i=await n.verify();try{C(typeof i=="string",t,"argument-error"),C(n.type===ly,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return C(o.type==="enroll",t,"internal-error"),(await _S(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{C(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return C(a,t,"missing-multi-factor-info"),(await MS(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await cS(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}/**
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
 */function e1(t,e){return e?St(e):(C(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uc extends bc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function t1(t){return ey(t.auth,new Uc(t),t.bypassAuthState)}function n1(t){const{auth:e,user:n}=t;return C(n,e,"internal-error"),gS(n,new Uc(t),t.bypassAuthState)}async function r1(t){const{auth:e,user:n}=t;return C(n,e,"internal-error"),mS(n,new Uc(t),t.bypassAuthState)}/**
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
 */class uy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t1;case"linkViaPopup":case"linkViaRedirect":return r1;case"reauthViaPopup":case"reauthViaRedirect":return n1;default:Nt(this.auth,"internal-error")}}resolve(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const i1=new es(2e3,1e4);class lr extends uy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,lr.currentPopupAction&&lr.currentPopupAction.cancel(),lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){Ot(this.filter.length===1,"Popup operations only handle one event");const e=Vc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,i1.get())};e()}}lr.currentPopupAction=null;/**
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
 */const s1="pendingRedirect",Hs=new Map;class o1 extends uy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Hs.get(this.auth._key());if(!e){try{const r=await a1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Hs.set(this.auth._key(),e)}return this.bypassAuthState||Hs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a1(t,e){const n=c1(e),r=u1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function l1(t,e){Hs.set(t._key(),e)}function u1(t){return St(t._redirectPersistence)}function c1(t){return zs(s1,t.config.apiKey,t.name)}async function d1(t,e,n=!1){const r=Vr(t),i=e1(r,e),o=await new o1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const f1=10*60*1e3;class h1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!p1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!cy(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ze(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=f1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jf(e))}saveEventToCache(e){this.cachedEventUids.add(Jf(e)),this.lastProcessedEventTime=Date.now()}}function Jf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function p1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cy(t);default:return!1}}/**
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
 */async function m1(t,e={}){return Lt(t,"GET","/v1/projects",e)}/**
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
 */const g1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,y1=/^https?/;async function v1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await m1(t);for(const n of e)try{if(w1(n))return}catch{}Nt(t,"unauthorized-domain")}function w1(t){const e=lu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!y1.test(n))return!1;if(g1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const _1=new es(3e4,6e4);function Yf(){const t=Z().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function I1(t){return new Promise((e,n)=>{var r,i,s;function o(){Yf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yf(),n(ze(t,"network-request-failed"))},timeout:_1.get()})}if(!((i=(r=Z().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Z().gapi)===null||s===void 0)&&s.load)o();else{const a=Jg("iframefcb");return Z()[a]=()=>{gapi.load?o():n(ze(t,"network-request-failed"))},Qg(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ws=null,e})}let Ws=null;function E1(t){return Ws=Ws||I1(t),Ws}/**
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
 */const A1=new es(5e3,15e3),S1="__/auth/iframe",T1="emulator/auth/iframe",k1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},P1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function R1(t){const e=t.config;C(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Oc(e,T1):`https://${t.config.authDomain}/${S1}`,r={apiKey:e.apiKey,appName:t.name,v:Lr},i=P1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Dr(r).slice(1)}`}async function C1(t){const e=await E1(t),n=Z().gapi;return C(n,t,"internal-error"),e.open({where:document.body,url:R1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:k1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ze(t,"network-request-failed"),a=Z().setTimeout(()=>{s(o)},A1.get());function l(){Z().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const x1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},N1=500,O1=600,D1="_blank",L1="http://localhost";class Xf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function b1(t,e,n,r=N1,i=O1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},x1),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ee().toLowerCase();n&&(a=zg(u)?D1:n),Bg(u)&&(e=e||L1,l.scrollbars="yes");const c=Object.entries(l).reduce((g,[y,w])=>`${g}${y}=${w},`,"");if(QA(u)&&a!=="_self")return V1(e||"",a),new Xf(null);const f=window.open(e||"",a,c);C(f,t,"popup-blocked");try{f.focus()}catch{}return new Xf(f)}function V1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const M1="__/auth/handler",U1="emulator/auth/handler",j1=encodeURIComponent("fac");async function Zf(t,e,n,r,i,s){C(t.config.authDomain,t,"auth-domain-config-required"),C(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Lr,eventId:i};if(e instanceof Xg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",V_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(s||{}))o[c]=f}if(e instanceof ts){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${j1}=${encodeURIComponent(l)}`:"";return`${F1(t)}?${Dr(a).slice(1)}${u}`}function F1({config:t}){return t.emulator?Oc(t,U1):`https://${t.authDomain}/${M1}`}/**
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
 */const Ja="webStorageSupport";class B1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=iy,this._completeRedirectFn=d1,this._overrideRedirectResult=l1}async _openPopup(e,n,r,i){var s;Ot((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Zf(e,n,r,lu(),i);return b1(e,o,Vc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zf(e,n,r,lu(),i);return PS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ot(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await C1(e),r=new h1(e);return n.register("authEvent",i=>(C(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ja,{type:Ja},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ja];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=v1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kg()||Lc()||aa()}}const z1=B1;var eh="@firebase/auth",th="1.3.0";/**
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
 */class H1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function W1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $1(t){yt(new at("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;C(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gg(t)},u=new nS(r,i,s,l);return sS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yt(new at("auth-internal",e=>{const n=Vr(e.getProvider("auth").getImmediate());return(r=>new H1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(eh,th,W1(t)),Ye(eh,th,"esm2017")}/**
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
 */const q1=5*60,K1=Jm("authIdTokenMaxAge")||q1;let nh=null;const G1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>K1)return;const i=n==null?void 0:n.token;nh!==i&&(nh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Q1(t=pc()){const e=Wn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=iS(t,{popupRedirectResolver:z1,persistence:[VS,SS,iy]}),r=Jm("authTokenSyncURL");if(r){const s=G1(r);wS(n,s,()=>s(n.currentUser)),vS(n,o=>s(o))}const i=Gm("auth");return i&&oS(n,`http://${i}`),n}$1("Browser");const J1=(t,e)=>e.some(n=>t instanceof n);let rh,ih;function Y1(){return rh||(rh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function X1(){return ih||(ih=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dy=new WeakMap,cu=new WeakMap,fy=new WeakMap,Ya=new WeakMap,jc=new WeakMap;function Z1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(un(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dy.set(n,t)}).catch(()=>{}),jc.set(e,t),e}function eT(t){if(cu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cu.set(t,e)}let du={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tT(t){du=t(du)}function nT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xa(this),e,...n);return fy.set(r,e.sort?e.sort():[e]),un(r)}:X1().includes(t)?function(...e){return t.apply(Xa(this),e),un(dy.get(this))}:function(...e){return un(t.apply(Xa(this),e))}}function rT(t){return typeof t=="function"?nT(t):(t instanceof IDBTransaction&&eT(t),J1(t,Y1())?new Proxy(t,du):t)}function un(t){if(t instanceof IDBRequest)return Z1(t);if(Ya.has(t))return Ya.get(t);const e=rT(t);return e!==t&&(Ya.set(t,e),jc.set(e,t)),e}const Xa=t=>jc.get(t);function iT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=un(o);return r&&o.addEventListener("upgradeneeded",l=>{r(un(o.result),l.oldVersion,l.newVersion,un(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const sT=["get","getKey","getAll","getAllKeys","count"],oT=["put","add","delete","clear"],Za=new Map;function sh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Za.get(e))return Za.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=oT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Za.set(e,s),s}tT(t=>({...t,get:(e,n,r)=>sh(e,n)||t.get(e,n,r),has:(e,n)=>!!sh(e,n)||t.has(e,n)}));const hy="@firebase/installations",Fc="0.6.4";/**
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
 */const py=1e4,my=`w:${Fc}`,gy="FIS_v2",aT="https://firebaseinstallations.googleapis.com/v1",lT=60*60*1e3,uT="installations",cT="Installations";/**
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
 */const dT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},jn=new Hn(uT,cT,dT);function yy(t){return t instanceof lt&&t.code.includes("request-failed")}/**
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
 */function vy({projectId:t}){return`${aT}/projects/${t}/installations`}function wy(t){return{token:t.token,requestStatus:2,expiresIn:hT(t.expiresIn),creationTime:Date.now()}}async function _y(t,e){const r=(await e.json()).error;return jn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Iy({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function fT(t,{refreshToken:e}){const n=Iy(t);return n.append("Authorization",pT(e)),n}async function Ey(t){const e=await t();return e.status>=500&&e.status<600?t():e}function hT(t){return Number(t.replace("s","000"))}function pT(t){return`${gy} ${t}`}/**
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
 */async function mT({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=vy(t),i=Iy(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:gy,appId:t.appId,sdkVersion:my},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Ey(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:wy(u.authToken)}}else throw await _y("Create Installation",l)}/**
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
 */function Ay(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function gT(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const yT=/^[cdef][\w-]{21}$/,fu="";function vT(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=wT(t);return yT.test(n)?n:fu}catch{return fu}}function wT(t){return gT(t).substr(0,22)}/**
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
 */function ca(t){return`${t.appName}!${t.appId}`}/**
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
 */const Sy=new Map;function Ty(t,e){const n=ca(t);ky(n,e),_T(n,e)}function ky(t,e){const n=Sy.get(t);if(n)for(const r of n)r(e)}function _T(t,e){const n=IT();n&&n.postMessage({key:t,fid:e}),ET()}let kn=null;function IT(){return!kn&&"BroadcastChannel"in self&&(kn=new BroadcastChannel("[Firebase] FID Change"),kn.onmessage=t=>{ky(t.data.key,t.data.fid)}),kn}function ET(){Sy.size===0&&kn&&(kn.close(),kn=null)}/**
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
 */const AT="firebase-installations-database",ST=1,Fn="firebase-installations-store";let el=null;function Bc(){return el||(el=iT(AT,ST,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fn)}}})),el}async function Do(t,e){const n=ca(t),i=(await Bc()).transaction(Fn,"readwrite"),s=i.objectStore(Fn),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Ty(t,e.fid),e}async function Py(t){const e=ca(t),r=(await Bc()).transaction(Fn,"readwrite");await r.objectStore(Fn).delete(e),await r.done}async function da(t,e){const n=ca(t),i=(await Bc()).transaction(Fn,"readwrite"),s=i.objectStore(Fn),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Ty(t,a.fid),a}/**
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
 */async function zc(t){let e;const n=await da(t.appConfig,r=>{const i=TT(r),s=kT(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===fu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function TT(t){const e=t||{fid:vT(),registrationStatus:0};return Ry(e)}function kT(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(jn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=PT(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:RT(t)}:{installationEntry:e}}async function PT(t,e){try{const n=await mT(t,e);return Do(t.appConfig,n)}catch(n){throw yy(n)&&n.customData.serverCode===409?await Py(t.appConfig):await Do(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function RT(t){let e=await oh(t.appConfig);for(;e.registrationStatus===1;)await Ay(100),e=await oh(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await zc(t);return r||n}return e}function oh(t){return da(t,e=>{if(!e)throw jn.create("installation-not-found");return Ry(e)})}function Ry(t){return CT(t)?{fid:t.fid,registrationStatus:0}:t}function CT(t){return t.registrationStatus===1&&t.registrationTime+py<Date.now()}/**
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
 */async function xT({appConfig:t,heartbeatServiceProvider:e},n){const r=NT(t,n),i=fT(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:my,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Ey(()=>fetch(r,a));if(l.ok){const u=await l.json();return wy(u)}else throw await _y("Generate Auth Token",l)}function NT(t,{fid:e}){return`${vy(t)}/${e}/authTokens:generate`}/**
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
 */async function Hc(t,e=!1){let n;const r=await da(t.appConfig,s=>{if(!Cy(s))throw jn.create("not-registered");const o=s.authToken;if(!e&&LT(o))return s;if(o.requestStatus===1)return n=OT(t,e),s;{if(!navigator.onLine)throw jn.create("app-offline");const a=VT(s);return n=DT(t,a),a}});return n?await n:r.authToken}async function OT(t,e){let n=await ah(t.appConfig);for(;n.authToken.requestStatus===1;)await Ay(100),n=await ah(t.appConfig);const r=n.authToken;return r.requestStatus===0?Hc(t,e):r}function ah(t){return da(t,e=>{if(!Cy(e))throw jn.create("not-registered");const n=e.authToken;return MT(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function DT(t,e){try{const n=await xT(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Do(t.appConfig,r),n}catch(n){if(yy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Py(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Do(t.appConfig,r)}throw n}}function Cy(t){return t!==void 0&&t.registrationStatus===2}function LT(t){return t.requestStatus===2&&!bT(t)}function bT(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+lT}function VT(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function MT(t){return t.requestStatus===1&&t.requestTime+py<Date.now()}/**
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
 */async function UT(t){const e=t,{installationEntry:n,registrationPromise:r}=await zc(e);return r?r.catch(console.error):Hc(e).catch(console.error),n.fid}/**
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
 */async function jT(t,e=!1){const n=t;return await FT(n),(await Hc(n,e)).token}async function FT(t){const{registrationPromise:e}=await zc(t);e&&await e}/**
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
 */function BT(t){if(!t||!t.options)throw tl("App Configuration");if(!t.name)throw tl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw tl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function tl(t){return jn.create("missing-app-config-values",{valueName:t})}/**
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
 */const xy="installations",zT="installations-internal",HT=t=>{const e=t.getProvider("app").getImmediate(),n=BT(e),r=Wn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},WT=t=>{const e=t.getProvider("app").getImmediate(),n=Wn(e,xy).getImmediate();return{getId:()=>UT(n),getToken:i=>jT(n,i)}};function $T(){yt(new at(xy,HT,"PUBLIC")),yt(new at(zT,WT,"PRIVATE"))}$T();Ye(hy,Fc);Ye(hy,Fc,"esm2017");/**
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
 */const Lo="analytics",qT="firebase_id",KT="origin",GT=60*1e3,QT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Wc="https://www.googletagmanager.com/gtag/js";/**
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
 */const Le=new Xo("@firebase/analytics");/**
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
 */const JT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},He=new Hn("analytics","Analytics",JT);/**
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
 */function YT(t){if(!t.startsWith(Wc)){const e=He.create("invalid-gtag-resource",{gtagURL:t});return Le.warn(e.message),""}return t}function Ny(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function XT(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ZT(t,e){const n=XT("firebase-js-sdk-policy",{createScriptURL:YT}),r=document.createElement("script"),i=`${Wc}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function ek(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function tk(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await Ny(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Le.error(a)}t("config",i,s)}async function nk(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Ny(n);for(const l of o){const u=a.find(f=>f.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Le.error(s)}}function rk(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await nk(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await tk(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Le.error(a)}}return i}function ik(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=rk(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function sk(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Wc)&&n.src.includes(t))return n;return null}/**
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
 */const ok=30,ak=1e3;class lk{constructor(e={},n=ak){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Oy=new lk;function uk(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ck(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:uk(r)},s=QT.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw He.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function dk(t,e=Oy,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw He.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw He.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new pk;return setTimeout(async()=>{a.abort()},n!==void 0?n:GT),Dy({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Dy(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Oy){var s;const{appId:o,measurementId:a}=t;try{await fk(r,e)}catch(l){if(a)return Le.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await ck(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!hk(u)){if(i.deleteThrottleMetadata(o),a)return Le.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?ff(n,i.intervalMillis,ok):ff(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,f),Le.debug(`Calling attemptFetch again in ${c} millis`),Dy(t,f,r,i)}}function fk(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(He.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function hk(t){if(!(t instanceof lt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class pk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function mk(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function gk(){if(Xm())try{await Zm()}catch(t){return Le.warn(He.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Le.warn(He.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function yk(t,e,n,r,i,s,o){var a;const l=dk(t);l.then(y=>{n[y.measurementId]=y.appId,t.options.measurementId&&y.measurementId!==t.options.measurementId&&Le.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>Le.error(y)),e.push(l);const u=gk().then(y=>{if(y)return r.getId()}),[c,f]=await Promise.all([l,u]);sk(s)||ZT(s,c.measurementId),i("js",new Date);const g=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return g[KT]="firebase",g.update=!0,f!=null&&(g[qT]=f),i("config",c.measurementId,g),c.measurementId}/**
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
 */class vk{constructor(e){this.app=e}_delete(){return delete yi[this.app.options.appId],Promise.resolve()}}let yi={},lh=[];const uh={};let nl="dataLayer",wk="gtag",ch,Ly,dh=!1;function _k(){const t=[];if(Ym()&&t.push("This is a browser extension environment."),O_()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=He.create("invalid-analytics-context",{errorInfo:e});Le.warn(n.message)}}function Ik(t,e,n){_k();const r=t.options.appId;if(!r)throw He.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Le.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw He.create("no-api-key");if(yi[r]!=null)throw He.create("already-exists",{id:r});if(!dh){ek(nl);const{wrappedGtag:s,gtagCore:o}=ik(yi,lh,uh,nl,wk);Ly=s,ch=o,dh=!0}return yi[r]=yk(t,lh,uh,e,ch,nl,n),new vk(t)}function Ek(t=pc()){t=Te(t);const e=Wn(t,Lo);return e.isInitialized()?e.getImmediate():Ak(t)}function Ak(t,e={}){const n=Wn(t,Lo);if(n.isInitialized()){const i=n.getImmediate();if(Vi(e,n.getOptions()))return i;throw He.create("already-initialized")}return n.initialize({options:e})}function Sk(t,e,n,r){t=Te(t),mk(Ly,yi[t.app.options.appId],e,n,r).catch(i=>Le.error(i))}const fh="@firebase/analytics",hh="0.10.0";function Tk(){yt(new at(Lo,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Ik(r,i,n)},"PUBLIC")),yt(new at("analytics-internal",t,"PRIVATE")),Ye(fh,hh),Ye(fh,hh,"esm2017");function t(e){try{const n=e.getProvider(Lo).getImmediate();return{logEvent:(r,i,s)=>Sk(n,r,i,s)}}catch(n){throw He.create("interop-component-reg-failed",{reason:n})}}}Tk();const kk={apiKey:"AIzaSyBQjVHy5UrXMBYu5fFq0Atd1IOSsAO9_W4",authDomain:"kooop-399b4.firebaseapp.com",projectId:"kooop-399b4",storageBucket:"kooop-399b4.appspot.com",messagingSenderId:"861642362756",appId:"1:861642362756:web:c018549fb9a12228a517d1",measurementId:"G-5808DTTJXS"},$c=ng(kk);Ek($c);const by=rA($c);let Pk=by;const ph=Q1($c);async function Rk(){const t=sA(by,"koops"),e=yA(t,vA("date","desc"));return(await IA(e)).docs.map(i=>i.data()).sort()}async function Ck(t){return t.id=PA(),await EA(oA(Pk,COLLECTION_NAME.KOOPS,t.id),t)}function Vy(){const t=localStorage.getItem("koopUser")||!1;return t?JSON.parse(t):!1}const xk="/kooop/assets/error-fe6144de.png";function Nk({msg:t,error:e}){return p.jsx("div",{children:e&&p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"flex justify-center m-4 gap-4",children:p.jsx("img",{src:xk,width:60})}),p.jsx("p",{className:"text-center",children:t})]})})}const Ok="/kooop/assets/progress-a09ed1b0.gif";function ei({icon:t,title:e}){return p.jsxs("div",{className:"text-sky-600 border-t py-2 flex items-center gap-2 mb-1",children:[p.jsx("img",{src:t,width:30}),p.jsx("span",{children:e})]})}function Rs({btnName:t,left:e,right:n,curPage:r,onThumbClick:i}){return p.jsx("div",{onClick:s=>{console.log(t,r,t===r)},className:` ${e?"rounded-l-lg ":""} ${n?" rounded-r-lg ":""} cursor-pointer px-1
     
     ${Number(r)===Number(t)?" text-white bg-sky-500 ":" text-sky-500 border-sky-500 "}

     hover:text-white hover:bg-sky-500 border 
     text-center  `,children:t})}function Dk({pagesCount:t=20}){const[e,n]=E.useState(1);function r(i){switch(console.log(i),i){case"PREV":n(e-1);break;case"NEXT":n(e+1);break;default:n(Number(e));break}}return p.jsxs("div",{className:"flex mx-auto justify-center items-center",children:[p.jsx(Rs,{btnName:"PREV",left:!0,onThumbClick:r}),[...Array(t)].slice(0,5).map((i,s)=>p.jsx(Rs,{btnName:Number(s)+1,curPage:Number(e),onThumbClick:r},s)),"...",p.jsx(Rs,{btnName:Number(t),curPage:Number(e),onThumbClick:r}),p.jsx(Rs,{btnName:"NEXT",right:!0,onThumbClick:r})]})}const Lk="shadow-lg shadow-black/20 p-2 border border-slate-300 rounded-lg mb-4";function bk({}){const[t,e]=E.useState(""),[n,r]=E.useState(!1),[i,s]=E.useState("s"),o=E.useRef(),a=E.useRef(),l=E.useRef(),u=[E.useRef(),E.useRef(),E.useRef()],[c,f]=E.useState(!1),[g,y]=E.useState([]),[w,_]=E.useState(!0),[N,h]=E.useState(!1);E.useEffect(()=>{d()},[]);async function d(){h(!1),_(!0);try{const S=await Rk();y(S),console.log(S),_(!1)}catch(S){h(S),h(S.toString())}finally{console.log("done"),_(!1)}}function m(S){s(S),console.log("cur mode ",i)}function v(S){f(S.target.checked)}function A(S){switch(i){case"s":P();break;case"p":B();break}}function P(){console.log("searchKoops")}const R=cc();function x(S){R(Ve.VIEW_KOOP.path,{state:{koop:S}})}async function B(){let S={text:t,budget:Gn(o),date:Gn(l),location:Gn(a),media:[Gn(u[0]),Gn(u[1]),Gn(u[2])]};console.log(S);const oe=await Ck(S);d(),console.log(oe)}return p.jsx("div",{className:dc,children:p.jsxs("main",{className:"p-4 ",children:[p.jsxs("section",{className:"sect-search",children:[p.jsxs("div",{className:"cont-search-mode",children:[p.jsx("button",{className:`${i==="s"?" bg-sky-500 text-white ":"  "} hover:bg-sky-500 hover:text-white  p-1 rounded-t-lg `,onClick:S=>m("s"),children:"Search"}),p.jsx("button",{className:`  ${i==="p"?" bg-sky-500 text-white ":""}  p-1 hover:bg-sky-500 hover:text-white rounded-t-lg`,onClick:S=>m("p"),children:"Post"})]}),p.jsxs("div",{className:` flex ${i==="p"?"rounded-lg":""} cont-search-input bg-sky-500 p-2 rounded-b-lg rounded-r-lg `,children:[p.jsx("input",{onChange:S=>e(S.target.value),onKeyUp:S=>{S.key==="Enter"&&A()},className:"h-[30px] outline-none px-1 flex-grow rounded-md ",type:"search",onFocus:S=>r(!0),onBlur:S=>r(!1),placeholder:` ${i==="s"?"search koops ...":"post new koop ..."} `}),p.jsx("span",{className:"h-[30px] w-[30px] hover:scale-125  cursor-pointer inline-block",children:p.jsx("img",{src:i==="s"?pw:hw,onClick:S=>A(),width:20,className:"translate-x-[25%] translate-y-[25%] "})})]})]}),i==="p"&&p.jsxs("section",{className:"sect-koop-details",children:[p.jsxs("div",{children:[p.jsx("input",{type:"checkbox",checked:c,onChange:S=>v(S)}),"Add options"]}),c&&p.jsx(p.Fragment,{children:p.jsxs("div",{className:`cont-koop-det ${Lk} `,children:[p.jsxs("div",{className:"flex",children:[p.jsxs("div",{className:"option-card budget  ",children:[p.jsx(ei,{icon:Qt.budget,title:"Budget"}),p.jsx("input",{ref:o,name:"budget",type:"number",placeholder:"ex: 450"})]}),p.jsxs("div",{className:"option-card date  ",children:[p.jsx(ei,{icon:Qt.date,title:"Date"}),p.jsx("div",{children:p.jsx("input",{className:"w-[100%]",ref:l,name:"date",type:"date"})})]})]}),p.jsxs("div",{className:"option-card location  ",children:[p.jsx(ei,{icon:Qt.location,title:"Location"}),p.jsx("div",{children:p.jsx("input",{className:"w-[100%]",ref:a,placeholder:"koop location ...",type:"text",name:"location_add"})})]}),p.jsxs("div",{className:"option-card media flex  flex-col",children:[p.jsx(ei,{icon:Qt.media,title:"Media (photos/vids)"}),p.jsx("div",{className:"",children:[1,2,3].map((S,oe)=>p.jsx("input",{name:`file_${oe}`,ref:u[oe],type:"file"}))})]})]})})]}),w&&p.jsxs("div",{className:"flex justify-center items-center gap-8 p-2 m-2",children:[p.jsx("img",{src:Ok,width:60}),"Please wait ..."]}),p.jsx(Nk,{msg:N,error:N}),i==="s"&&p.jsxs("div",{children:[p.jsx("section",{className:"main-cont md:flex md:flex-wrap",children:g.map((S,oe)=>p.jsx(v_,{onKoopClicked:qn=>x(S),data:S},oe))}),p.jsx(Dk,{})]})]})})}function Vk(){return p.jsx("div",{children:"Page Not Found"})}const Mk="/kooop/assets/info-fc4fa1e5.png";function qr({icon:t,title:e,children:n,small:r}){return p.jsxs("div",{children:[p.jsx(ei,{title:e,icon:t}),p.jsx("div",{className:"p-2",children:n})]})}function Kr(t){const e={green:{bg:"bg-green-500",border:"border-green-500",text:"text-green-500",hover:{bg:"bg-green-600"}},yellow:{bg:"bg-yellow-500",border:"border-yellow-500",text:"text-yellow-500",hover:{bg:"bg-yellow-600"}},blue:{bg:"bg-blue-500",border:"border-blue-500",text:"text-blue-500",hover:{bg:"bg-blue-600"}},red:{bg:"bg-red-500",border:"border-red-500",text:"text-red-500",hover:{bg:"bg-red-600"}}};return`text-sm border ${e[t].border} p-1 ${e[t].text} rounded-lg hover:bg-green-500 hover:text-white`}function Uk({onPageChange:t}){var o,a,l,u;const e=Xi(),n=cc(),[r,i]=E.useState({});E.useEffect(()=>{const c=e.state.koop;i(c),console.log("curKoop",c)},[]);function s(){console.log("current fav => ",r),alert("added to fav")}return p.jsxs("div",{className:`${dc} p-4 `,children:[p.jsxs("div",{className:"btns-cont p-2 flex flex-col md:flex-row gap-4",children:[p.jsx("button",{onClick:c=>n(Ve.HOME.path),className:Kr("green"),children:"HOME"}),p.jsx("button",{className:Kr("green"),children:"Contact Info"}),p.jsx("button",{onClick:c=>s(),className:Kr("yellow"),children:"FAV"}),p.jsx("button",{className:Kr("yellow"),children:"SHARE"}),p.jsx("button",{className:Kr("yellow"),children:"REPORT"})]}),p.jsxs("div",{className:"flex flex-col md:flex-row",children:[p.jsxs("div",{className:"cont flex-1",children:[p.jsx(qr,{title:"Description",icon:Mk,children:p.jsx("p",{children:r.text})}),((o=r.budget)==null?void 0:o.length)>0&&p.jsx(qr,{title:"Budjet",icon:Bm,children:p.jsxs("p",{children:[r.budget," $"]})}),((a=r.date)==null?void 0:a.length)>0&&p.jsx(qr,{title:"Date",icon:zm,children:p.jsx("p",{children:r.text})}),((l=r.location)==null?void 0:l.length)>0&&p.jsx(qr,{title:"Location",icon:Hm,children:p.jsx("p",{children:r.text})}),((u=r.media)==null?void 0:u.size)>0&&p.jsx(qr,{title:"Media",icon:Wm,children:p.jsx("p",{children:JSON.stringify(r.media)})})]}),p.jsx("div",{className:"ad-space md:w-[140px] bg-slate-400 min-h-[120pt] md:min-h-[240pt]",children:"ad-space"})]})]})}const jk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAyvSURBVHgBrVh9bFXlGX/e95xze28/6L39wNJCe4sVWBWoc0NQGTWbGk3Y1I1N47awxWUmy0Ix2f5a7PCfLftjYNxM9ocDXRZI5obaKZHFUYPoVDTFiWA77BUoUrDt5bb3+5zz7ve877kfgIoST/P2vOf9eJ7f+3y/V9BlPjttu18I0SeVWqeU6kM/iuEo3kRKJS0hEgoNY4d83x/e4LrDdBmP+DyLtwNArW1vQncAO6N6UFVRUUEX/yT+cT8UjZIbCVMxlUpQbd2wNz295d5cLvEZWX42gAaYM6gYWIDk4zay8EqASwDjDz5Ihe44US5Hydk0TT28hbrvvnvH8Xx+y71PP52gSzzyUgt2Oc6miO2MMzgfCFw0X5RAGhDVTWLeKo8Lyo6/T6m5NL3xwl5SySl9gFQms7EYje17/McbN16K/6dKcJftbJ0lMfC28uhdEJ4G9TTG69Fvk4KWYHsf3pEArLwALI+G413U9N0NNP3sP6mpbyXJWJRm9u8nLxSmhqVLqXP9Hdu6Nnxv8+cCyCp1bXv3PqL+Fz2X5pSRjI25MLbU4R0BsBYh6QpQWKsUzRfiPHWwihX+vvTb39HoWwcpl81S3y9/QaeHnqO2666lib3/orp16ygUDtN79903UpPJ3HwXUfJCLB+r4pTt7Nvqef3Puh7AiSqLE5ptWEoK+YpaANz1fBrD+xyajzlfKW2GShhzxDmopa2NOrviFHZ9qq+poXcPH6YIpNfY0UGiWKC63t6+jvt/svvjsFgXDvwJan3M9+78QBkGFVEr3RyAq8H3fHBm6fVAinFI7xz6DUCF8HLecc4BjLdwIY29/DKlXz5A76dTlH3ySUrlCnRs504KTU3TRw31lEul4t9waqJDZ8+8QOfxrXr+ajkb9wi1/R+Q3MUnUZp5GC0K5Cssm5YJRVdCko2SpQcHwhpZ5SD8nsL6/cKiWsytwaqY7+NbkgSNIg5ZQ2zDsG/Y+VKMD8nQ5ueyqW0XqXgnIgI2DP4bBHxtPYGqqOSd5l1PHI0l2cqlZp+o1RIUA5lmTC7Au+Qoej86Ht6dfpGisGULswjeNMs2jX3jMI+TMIkTyqcJHHSUaQhvcHs0Gi3hsisisgYPKz8+7fskqgRrekoTr8FHLRi0gGivsGkhf6NfB7VbiiWswByhJTAOxc4DCtwERCaVp2du5/8eJCpZQhAHeDIj4bIOvKgsFgaxbHNZgiw9EtbGN5VfVk21BVo6tsEp8G7Du1datAIirUe/UYP0tQpDWFt7nuWWQg6DE5VMUzq4MocwhyETX4V2tgF4TLSiYscZ9MD8XV9V1BNAVGQ8qRnzX8ZsL7Z0M0OcugHfjhLaaWz0X8f+uSoIMuhXgxIBflU+CHiyY4nyl15p2/ZABaBP/dOQAsc7EVBQpZMHzBdBap34aofkolJq+4pgnNXO6n0F+y3MxXGc+sDjy8CEuMAdK/AqHVE1y4DFJg3wL2T34zvuVqlGVi130LkCDPowH4cddUBKCmAaAMomYxIzAJaH4zwNu8oJjyKWo8FTcEijCgO6IqMAnRBV/Iz+pMESHULFZEub+vmzEQzqpUc5pqdtzgBlRu0g3oh3KAg15xg4fwujxDEQWQ6PbMTc8zhAOw7QXpIgxo59806axlp2hlQqRbGYcdLJybPU07OYJk5MwKstijXFKJmcodTZKbrj0EGyfWRSeOdK1kAYG5YAUhdiVhMGajmPotVyAObMoYz7sEQdBihNMhsBmBB7NqR5DU70lO8hX0G6JZti7+7pof8Wi9R52610GPO0bBmdaW6hkVyeYjfcQCOFAr2aTNJM23yaaGiko8LEVRyuH2FGxVmi7KVtGCugn0XLcwxj4hqocRSOSRzCr0ALYy6DNa9BMj/wPC2tPNoagF0POz6DkQyZOBipjVBHxyIKI82t+ur11NTUQs0tLVQbqSUUs7R6zWpyiy4tWboE0m2i+Y1REiNvwqHUSoncGTfqB0BIsMhE9QmMtXiBac5hvohvaBCOYbzuKXyvtR2q801oj6L9jHWC8WbseRTjP0Vs+8OfH6fFtY7eu3zF1ZROzxHH4ltu/Tq1trbQ6Q8naQ1A2raFgOLQgva2UvSAP5pSXWf3uDQSEsoYM3sqx6Y59KcxlNZVDYDivQeqbQWx+VCZKVSN30a0V7O0Fd0P50lj/EgiQUN/fIxqvCJAOHTkyFHKZjOUyWSotaWVcvkszcxMUwSVdz6fp+7F3ToceQxQlZ0cKlPGMVRQETPIHMCeRu842tkg+OzHGKv9RnxGtfSM1PlwMgi4vLuDKxkO5EwJjN/ZvZskJDw7O6d5tqHKOTkxQSVHn03NwRQ6IEXLZBZNDxecQIA0CsXeAjGz3RkpmMAwC0BcrO4HmK3wVgbfaoco6RZgd0qbQRbrCmgu6ORMAKF38G8WvWZpjpt49RWKQYqLFyNaotiYOHkykGSWGhrmUXNzc9nDdbgTIml9R1oP8AWIPXQPjOQqEDsOQJNKaXtkpjNgdBwqTfAYl/x4d0ASZwG4i8wVgNXO14GiBotYBjq/guGnsL9VmICeRtF6+969dFtjA3mpWRorFGlyJknd3V10CpKcg22yCbz1xkFadPB1RA511AbKEUXGUW60JO2FdyQgpYJOQVKHiRBilOuZUH4GoA6A4SQKzc0AwZ5co0ivd7HW1YeStB00/sf5OwhXObTrsb4ZEsvv2UOLoLJG2OixnqtoaF4jFRd1oqAQ1NHeTh+ePGVsWtAHtifUSzDIO1kF14HRUqj5kBOiYbdIJ8AgyzEycAQ7KONZqu8BTA4Ga3NdF4zl8H4bBzyIbDIE7+XKx0bjIJTF+gkw+hvEzUE+hr0dOGzb2Cj9HII5lhinE3izI3bgBihNOhyx4bEjJvcZo6wD7JtQFi2H1I5gcBiqzYDQWgRwjoMJbBsF4G9hvt14mgbHl6kZUHgCe0chPaec2BQyj6KzADiGxc+r4DrgkgZhkSluI9lTtAQS/BraamHKXlf5w/Je3PhxmKQudxSV8iBOr32TmhXf0AVdi697dEVD+tuhSmHKwf00Nj8BbznCtR2ZOMpGwcE6A+LZIB/7psYy0UJX4bg+4LBcECcgjJ2g8Xcc8AQ+1wObbVK2egTsBsvejH8FbL4SNjPuu/QRxg8QA/C1A6wCwd4gFHGmSKL/HIDtK5dr5gJlvNunR62Qdr6PdLYSOuOcRvaZBSpOqz0sSWVTCN8/REo8AFpvFAvDFAhBXzPDtjPDp4phpAubCsqojhV1CiJ/CBs/0BWNoG+jOJgCkaulyTQ7IZH9nhesNtWxVOYAGxDMHxIGONtiMYiTDhlt5XURYq4ST+L790VPe7zj+90JSFHf6p6Bfd8trRgor56CobYqlorQ8YxjYg1feDD+IohzzRgVlpZSHut2ob3m+1Qpb6lcqzHA5dg3hTVzwtz4QoHNTaOf1OFH6FiZBqcBCIFVXivFDoS0J6pIGSmesu3x/5CINsAWjqBNg8VNmPsKYt5uhJlDOt4pnYZCXFhgez64B1tBeVWCqn84wr8Qx8ngTjOPVcyhibOTjrNKX7RWYeyo/rWC6DZLJnJC3rw5+IHpvDp3BX5/GSOxlYJK2ieT+sKCiwhfS5NtTijzLlCQ3ogCb6w0Lrf4Slm5eONiBRouCR0zC4GjtADcAxBALyS9FEKJSOtHC3O5HaVddjXAt4m2zSMRLwjapBUBIjU6dZmwwbXh1djSBa5cTg3DgdJB9lnDsY4zCZlgneFyCwzzxMEcqRJmUCq/vOCixDGSE1sf6MZ8tkd65KoqcBcB5CdF/sByy1m5Xqn+JAjnA2ldz7/D4JQCjCZA/yCYlEJNBxitQ0sHv2xJzj5a35IKwlQ5Wezli9kM5vguzEUtX7rW4nDt+mA0ck2hMHAhnosA8vOwW7wr5Tj7JpXoO8Oqh7fO4581AikcA/FFCDVzBZP+GtEawATS14xrgisaNEcRZey2jlULiTaRiRRNkCz3u3SIEcPFYuQuU/Ke/wj6lOc3jrOtxadNTdIsHQOxw1DFMWUuO697ribQCSksQ2sL7i3sDPMhcQ06cCh2FYRRVOp8p0EeBth6rFmg1COr3OLAJ2H4VIBamo6z8XnfGxz1KX5OVf/qoMoEyjWlMBfwUi3HzsSA+U7TGEgthkV1WNQlRfI6klvuKea30RfwxKGtHXyBQcGgzPvihguVcqrHRDAmKnMhM7ctGvxy8EU/cYfkDjAZD5eAgvESy1ELpFTIBgqhRVlVgOGpugHcDMZ+/XmBXVLFn/R83w7373Jz/Qg/K/fVhOPCd+O2lFGOi4d8lZyGCmGrI88U3JembH8E1dcwXcbzf9DRnuwZ8lT2AAAAAElFTkSuQmCC",Fk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjySURBVHgB7ZwLcFTVGcf/5967u9ndvN8xIIEhIgJhqIHC9AFMGW21VoqdEgEVLYx0gFo6rZLWqYA8Bkyd0cpDRQgDtIWhSJ2CvJQgcUpLwAihA5IMUajYhECI2fd99DtnsyHGwMa6ezeO9zdzs+fePZvd/e93v/M97i5DB+eBdBfwhAFMQHj7OlJL7/+FAqAycoDxP5eAIhocomERLDiNJNREEqpRCPSJMCBLnG40+oBRMlnPTFJpJiy6k64AAYnEeQIWPULajGd0ehmwuCESLG6KJVAULIGiYAkUBUugKFgCRaHPCdTXYg4FfQgtJwe20aMhDxkCluSA4Q9AO3MGanU12KefhhNHk0m4QNxijNJSpJaXwzF2LJQCShFZFyl0HcFz9biy4Jcw3nzTdJESGknrhYVwLV2GtJmPRJ8bDKJl7lzo69fDTBIiEH9CZfKPkbHhNcgZGb1+nNrcjObBgyG1tcEsTHfSRlIS7E8+iezXd34hcTgK91FTpsBMTBdImfEQMleu7NVcIxSCQT6oK7YRI2Ampgqkk8WkLVly0zmGqsJf+z5a5v8CTePGofn++6F7vdfvN9khmLqK2cumwVaQf8P7/adOoe3pp6Ht2QOJhOJwPdr+/Bek/+wxsa811MNMTBVIGVLc8x1kFm3rXoZn0TOQmpo+b9ZqKDxN0xDcv99Uszf1FAvuPwAjEPjMsUBDA5p/eB+8FOdwcbrDLchROlqMPQcPgtF8MzF1medPxL43Ca577oHu8yJw4AD0w4fDL+RG88dPQF7VIeh+P1ruvRf622/DTBJectWcLjjnzSUHZYf/xRchUUoRQaeQIO3IEbgo0m6p+AOCv/m16ctuQlMNvV8/ZJEFOQYNEvutlGYE5s0TY8PlQvIrrwhxvGQ1wWd+n5DMOmHZvG53IO31XZ3i8JhHI2sRY7cbjmefRcr06fC+8w6uTZ4MqctSbyYJE4hRYuoqvVOMhX+ZMwehbduAzEy4KiqQsWCBWN5byV91Pe3MJmGnmPNH93WOr1ASGtqwAfLEiUhZuQq2ogFofvgRaH/aCrlbJG02CbMgIxAMD0IUEKoa3Fu3InvXLuiXL+MqLfv6ls1gCRaHk7BVTMvKQlYVOejhw6CRf/Hu3QffurXQ3noLUh8QJkJi60G0abS8M6r19KnSZhcS+rr4+S0Fg+jLWF2NKFgCRcE0gYSjGz4cjsVLYIwcia8KpjlpgzoVqbRCuSjW8R39J65NGA/WLbMXUIoBav3Yhg1DYMuW3tWfb78dypgx0D74AMbRo4glcbWgzyhPNZ/QuXNiqF28QLGP2uNjJEo9cnbvQebq1dBT09AbkqkzkrVpE+yTJiHWxHQViwhi3HorpP79RVVQrzsN5mkX5QwvpQ/e9a9Bp7qPQsWvyGN4KVa6jZqFtKdL8vXax4ABdMQAu3hR7GruZDA+L+gH6uuvW2Acm2UxtSCNsvO0EydQ0NiIPOqG5pK5Z549C21wuJJo/+3vkPduNVIXLxL7XBjnmrW4hQTLP/oP5PDaEPXKIhRWH4Fzwa+EiPKs2chtPI+CEzXIr6tD+r+OiU5svImpQHJrK9T/fIwrTz2Fyz+diva/74a98BbKr8JdDDkjHZLN1jnf9eqrSPv5HPjfP4mWRx9Dy5QHwKjVHKH1uQoE9u+DPnAQ0letAqPa0RVy8v7qd5FUMgLOheWINzEViLW3w1s2FaE33hB+JnC8Rhy3U6+9p+RByc0Tt74dO6BWboS+Z7c4zSJ4qIBm7NsH5+OPQyFxPXv3IrBmNa4tXy66H+4Hy6AhvsTWB5HvSSGrcHNnKXXRnn05J2EfWSJu3T/4PpJO/xtMUcRmz8/vtSP/f4mZQPxzd9Nq4r7rLoTqG9C2YgVY8WBkLlyIL4vkcotb74GDUKmO3QnpLnd0POJF7CyIqoC2knDXs33jBqi87z5tOmJBkBy987vfgfbhhwiufkkci5yI8Y50Y/f/PR5oFy6Iob2kBHouNQhpVfuiaK3XOjupCgWMusOBwM6/UhhliCKbNvQO6NnZYNR1ZTNmiHmhpmZxa7uD7svIjGnkGzOBuJfxLF0KrbkZ7qlTkV37HjIXLRLNPs/GjZ8LVW74Jsi5t1dWisAyh4pmzvJyaNQPa63cBAfFRXk1x5Bzqg65FBJk0IqmcQE3byZRfeS0H0QqicmSkxGz9xXrVEPPy0NSWRkk7kAvXISPViaZ4iLxZGO+SZ/yUIRo36iqgkJ9LoliGZVazvrx453/g78giVIS5Rt3Qq2pgXG4KtwjGzsOSbxUqxtQ604huH379eIapRv2u++G4fMjRCsiYlRGsb6KEAWr3BEFS6Ao9BmB+up5HneBeAuZ99+l0tEwaMUxeCeVNnF1K9+KbwMrCRfQuLs10jNgDKd4qjAcIgjhRo0SbWoxJzW187iRm4t4E3cnbZs2DYGhw2BvvQpGOZl68iSkoiJoFPCxCRMhkWgSLctiZTt7BvJDD0NqaIBMXVff7NmQqETC/tskHqPS0m6nQltw2TIhjv2BnyC0dk1cLw2O/ylGbR1p5w6Enn+eYqTL0F/6IwxKFxhZBCsuhkq9sGDFc2JJ57Ug4/RpqC+vQ+jMWQQpn7N/69viKg+VgkeFgkOdevh6v/6QuTjbt8X9umlT2j7a1avikwhd+gRUDqOOqSYSWB5E8jfIy7FMDn9WxkcfdTxIE6atUZoRorTFoORUlWWwnFw4Zs2CxCuULS2IN3EXiFFQxwyEK4NGR1BHrWYe7ElUFZSoiMZsCkIUDPI3rVPgx6ViNFZorF/6GK7588Hy8qH+jVrTx45BLigQXVgZ8SfuPohLwjo2Ppa6HdMoyWUkmBTw9zhXlGS5Y/b5IPHLgul0U6jKqK1YbsrXEuJuQVIP467HZEpybzaXiyB37WykpMA4dMi072xYqUYUrEg6CpZAUbAEioIlUBQsgaJgCRQFS6AocIGqYNEjFIzWShQlHoZFj1C68wI7D6Q7gfdg/URXdxqpszdQGgi08h804wdgEaGxQ5Owky7oUIsOPkq7tfj6UkUaLOY/7lbQYTD/AyqrSBdOvBWaAAAAAElFTkSuQmCC",Bk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAp4SURBVHgB7VwJcFXVGf7OvS8bgZgQSEgIZjGgCCOLGfZKgKDAoCxip2ht0Zkyg0O3YWrFFot1sNPplMUuQmUrgsAwI4tCAUdBbWQRmgAKWAymMoIgW1iSvHfvuX//c27eywPCewGb9+hwv8x5796zn+/+9z//+c/JE2gAEaXz1085lDaE2xGVHOYJIZYGI4T6YHIK+GsbhwJ4UKjmMISJqg4S9AU8cq5GNYdeJpMziS8mwcPVUCrHL5igCr7oCQ9NYbsiiODhujDgISI8gqLAIygKPIKiwCMoCjyCosAjKAp8iANcy4saVoIiUk6dWYj4PceYE+TwmJ09u4FZL8P0+yPm1Tymp4Fm/hbi7rsjUtlSiLklbR/YBwwqhbhQw+93c5oWsArykfDJAYjU1og1Yi5B4uAnTM4F0NRnQJ2LI2dW/O3eDXPlamDXHmBoKWKNGBPE+iRg89RgwJgwARhcGi07aOHfYLyxCsLyIx6IMUFCB+FIfrcj53STHSAumqcRcZnFooNwqa4GNtWjTV4ujKQkpik+TodbkiA1bWz5bDHePbwSA4vGYtCudcjP7BYXWbolCTpz+Tg+rFoL27Gw/chqfGSux9B7voc+qaPQKb1LTO2iW4sglhxJNtZW/gWX/RddjcVkWE4Amz9diq0Hl6NHx1KM6TkFHdOKVWKLS1VcTFSeyyBZOurqLl+TsuXQ37H7P29fM3BFFLHSrvzqPcx4ayzmbpuMkzVH0NKIkw1P2Pje63ht6a8QslPJwY7qTdiwfz6zEblbPiMBZ2pPIT0lBy2NmL9iSgrU8Csq3sH+LxNhyTpMfur3+OjLjXizci4vReyI5R2SaN8mH1MHv4LkxJa3rGNDUIOUnK85jcN7NqGvvhMwhA+79m3BkRX7IVPrg9uY16tE66ceOUMwsc90ZLXORSzQsgQxMZcun0P1sX9j/6fb8M+db6Nb5WeaIJEskHxXAhLzUyET6sILwWUqSJSrrwoy7sWg4jEo7fI4EysQKwOyRQkiodSJATORlxbpJroOLEGO3wZ9cAaJ3bjpQhtSmdROYqiMRX499NYJGchOL0R+RhcMbP8g8lKLkJwdG6kJR0xW865MuJ/OsqXAD59GzaaVONWrABety6itv+h2hpVzWkoaMltlITUpk6/bgrZ9AHz/SZhLFkE8NAKxRkx0kAj7VDOUuspIyUZ6hz7hKY3QXAr97Xx+BOLE8bityOJqKF7XzAuPpqC+iQ9Fnk86CuLjkw5+kBM9n89EPBG3V4zmzgGWL4ucRzF06LC+vq10kJ7RNmzQ1yFrp6CQ5/Y2oNPfQHx9ImQNuRZR/JxmcdNBigB5//1w1q3VfkPn5Vmgyr3Ai79x7xcuAPXsofOKOKrKOLTcaHYZUgJfN0zhaguovh7kr2eCWMbO1oBq6xpK8J+IjxTFfNvH2vwPYMxYmIGAJoYp0k9JtOHXS4W6WohzNZoUof94DZaaCuPjj2F07YqYg2INaZH1/HSykpLUHBYxSBU4n1y4iByKD+JyBM9Roz91AuL82ah5KSsbom27uGkh74xiFHiWdBR4BEXBTRNE7loBN4sbKUnNzNESuqLZlrTSVMqfjAA7tPwWKCmR/VxJ+oSGJsuyIUy+M3zaUyGi1aNsILZ5REDCaZUMkZisC12xkFdBafTaWkiDzcWUFPYmGmF1cU2cLi5egEjwgTidOD2YR6crc0HtntiS07mdBNXnG7CpmjPVSYdd6VvfIf/o0SQLC8np0IGcortIjh9P9rO/IKtfX44vJrtXb/JPnUqy6nMel2y6rkOHyB41kpziYnJyc3VddlEhWRMnktxfSVJKPaU7/BdYv46sBwaR5HzyznyS351A8tgxXY/K41+yhOyevUiq/nTsSLKkhOzVq9x0yeU3vkVW2TBy8vJI5uSQ7FxMcuQIstes4f41z3BoFkGqMWt4GbvMhWubhOwUdW+QFIKshjiL46y0NLKPVjVZl11ZQU5yiq7DviONJHee9zEooO5TU0mWl+t8gVUrdZxjGOS0bcd2UwpZpkmWGuTJkyT3Veg2A6oPjzxMTtlQkpmZZM+cSYriwIJXdV9Unx3DJJmQFLKt7FGj9QP4nxHEz51kWZlLwDOTybZt8pe/r404FWdP+zlZVj3Jyr0USLtDD9iePp1kE52wwgiyqqrIVuQf4MG2y3LjHn6EpN9PVu9emiBryhRuj/OcPaMfksoT+N0sslesYAKYsMce1RKupdyyyD5zmuxDB8lKT9cE1o8fQ84pJtSxyZ7yI5ckTVDzcMNK2kxsBdM0kdD/O6Bhg3Wcwa2aviSIHr2BsWPcpcO/eOE5fz4oLY1DG/e7Y0eImgu6jNICPmHCZN3i694TxrSfuYuLnTtA+ypgHP0C2hN05hTET34M49cvsJ5zy5kV+yDu6w5SmwFr3oQzaiToz/PYNXIIIiMD2LUTxvnzMFpxX19bCNE+Sy94hZGIG8XNuzuUQk1IvjoKPu6U6xAjrZBFgEel1+eswFlRuldNVJeX57o46gO8SK1lJe5uIBobt/CH0D5qXU6t19T5onu7A68vgzN7LsSH5RCbt/JDaA2a9wq7S066vcnOhqEIC3buJvAt/EEitCF4BcKjHhoJUV7SmGQmQDjBmYwlQTTMgGq3Y8dOnUfm8NMuKgJa8a7pxUvAnD9ClJY2+K/dJSy1StXNGxMeY4kdB8GOfbmIJWXOn0ALFkA88YQmk5Rf6dgx4M58t0E78q5tU2hRh5koLACKChrvVaioQNBzYS9eDFHSm1+pAxDL33AdaaNGwczrBGvgAJjr1oP+MBsiqwOc9DR+xVgaj30FwQOmyzUQeytAubksyUz8HemaFMfHZsawMqB9e+CbU4Ai8bnn4BytguD6blSQbpwgim6Qhe+LXh2vNhLdawHzpZdCabaKeXA4jBdm6P0x319fBR0/Dtq9G4L1WrBOfShv9hwIyf6jx1lSDOHqF7aH1MtsPD0Jxj2dIadNg5g5E+Ye1oWPTtDlncxMVz+i+WgWQeqVcJ78AUS/fnBKSpCgGlM6Ztw40H09QCV9eT4hrSfkiOGsFDNZIeeyAeDGNVmnGu6M512lzcabGPwAjIEDWWdkugRmZwFbWP9sfxe0cxdwiZ1n7TJgDhgA9B8ASmb9t3kzUF7Oipy9Ap06wTdkMMy+/dzyv3wWGD4UxFKDc+dA/fpqyXPUKdvsnNBGZjQ0azVP4XXxROme1VFoULlq8hSue4tnW5aSoH669pS8s49noH79tfcQ1VUg7rQI2/cK55NCjbsdUGnusU4RkiitldTpdCWZ+lS+uOIh6GfE/VMeSZXWuOMfYV8uDM2SoCuEQARfESA0H4WRoES+sVDkfzMQjhHxOJ1ooh7jqnQ9yCvaDE8XDcXNUA0tr4O+JZyMdJhlZbAtXtMlmbfqMdsQYu4wu/rkc/w2dJqHmD/A/zcHlOcwiwKPoCjwCIoCj6Ao8AiKAo+gKPAIigJF0HZ4uB4qFUHvw8P1ME8tNdQvLakfWSqAh3BU8+q/0OCP83wzBO5vdnlwUQ2XE1dJ6197Y7b48im4P5V3u2I7hxc59FKcqIj/An+ArgXZL2cjAAAAAElFTkSuQmCC",zk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAm+SURBVHgB7Zx7bBTHHce/u3u7dz7fOdgQ2zixhXGBhKpp1VpUiVqSSiFULZFS8SyPlpcCNKGPgEEpBQSChraR+KdVq1YVLaiiVJWoKCptKWpo1JKkDqQUGxTqmIfBgO17mHs/dvqbuTtz9p29vr0jTpz9orPvZmfndj77m9/vNzOLAUuWLFkaO0lDCxoaGuZJkvQkPoJijJ2+du3a8ewy29BKiqI8RRU34aOrQYBkWBpRFiADWYAMZAEykAXIQBYgA1mADGQBMpAFyEAWIAONa0As/a8Y2TCuJeXOxgvUuAQkMR3NExlmTwyiM+DAn3sUhBIKzOgDDEiiwaGnbIABhqYg6kjQZB3rm8LYOLUfCovTEoaC+T4X1r3zAO7GJdFqISoJIF3XoWkaXZ8kXoUokUggmUzmnMc7oiDFJSFTp9jI7TI6X2FJbJgawouNPthYItWOpOPxSh+emODAX3vsKFRFA1JVFWvWrMGCBQtQXl6OQuXz+XDw4EEcPnxYfJYEC4ZlDXEsq/fDTnB+2+XGL96zU/kwMYVxy9CxrimCF6b6CKw+pIIEhy0Fu1CXXTSg+fPno6WlBbJsLiDW1tZiz5496O3txcmTJwWEeTUhbH/EAxUx8G5tmRZBlNXg11cGWwCHqZPlyEhiy4wwVk+5S+ckBtVhdH5vQsMbHi0d0Qqz8KLCPK08Yvbs2abhDFwEnd/c3Jxqk+7+ZyYEoREc3pXUUNPxbG0I+qDbTzWpgkKFmwjO2ikeOieS07Yn6cDX35yEO9FUa4WqaAsKBoMohfhQ5eJdsOXph1NKIttbS9wnkX9Z2xTH+ileutN6zjmeRJmA0x60FeycMyrq1nPHeuDAATE8SqVU9wd3RnwiQGwADihaJfGdj0WxaXqvgJMNgFHJ7ZgDL56biAtBRfgnsyragtrb2zFnzhzMnTsXbrc75zi3jBUrVmDy5MkoVpLwItznMIpWUWxo8kKlUJ4tjul2zI4Xzk7E2/22DFKYVUnCPI9ER44cyW3cZsOWLVtQU1ODUojDsVES+HxTDN+Y5oVNT+TUuRUtw8ZzHI5qelhl674lihzO3r17Rfgv1olnrEAhIC2PxrCmkSxHwMkaVuSTfLpdwGkVcHQUYzkZ3RdAPLrt3r0bCxcuzJs48uOFJZSSANDySAxrGz0DSWD2cT/BWfFmNfkcuWRwuEoOiHd+586dWLJkSQ4Efuz69evCLxXmkxiaXEnMcHkoW84dVn0iWlXhQogcMis81xlJJV3ucDqd2LVrF1auXJkXDm3rYt26dfD7/ShUdkShiFCf1SaBuBUro2hVhTYK5WDmo9VwKpkFcZ+zdetWEbHyDR8OZ/ny5eK3KUlDQ7+UilbcIft5hp0UuZFIj1A6lQQQHzKbN28WAPLBuXr1qjjW1dWFUqmP8pyXyHLayRhVKZaKWBwOk5GgV5Jm9fx9sSoaELcc7pAXLVqUN1pxn7N69eqSwuFyqQn84FNeAUbkR5n7QlAiSYbj3W785L0ygsULxygPykSrxYsXD+uQly1bVhCc0WYuDimOens87zGeV2+kXCmiT8LPOx1FZUOmbZAD2LFjx7DRikMpBA5jqW6khkqRk18+waW1occqYgJWcW2ZkKIo2L59O1atWpXX53DLWb9+fV44fBhevnx5UBmH09PTI97zDt2M2GnmrhSXB9NleWJ8ya24bNoUoFmzZuWFwzvKHTK3HD5HG0779+9HX1/fwDmdnZ04evSo+Mwj0bHuMnRGy8WkU894GZb1ylc26LiMbgr/v7leVrQ1mvJBdXV1eR1yJpQbDSsOhE9w582bh3A4jFOnTsHr9aYOUji/EZGx6EwFnq52oFpLZ8VUztJJYGqvQh9Y/MjYSOb93YSKv99RcS0qj82uRltbGwKBAFwu10AZH1Z86XW0PocDOXTo0LDHPXEVv7vBL4/lmZGPnC1n9sIkU4usg2XK/i5duoRt27YJGHzBvbW1FUuXLkVHRwdKp3t2wdLz8nuvoZ8HvwBzq4f5ZDrMHzt2DCdOnBAL9Xy5Y7yqKA8Wj8fHNRwu6+EFA1mADFQyQMUvbg7X5j3XOxYyCYhhospodS+G5fVROJXSreBl9HhVFF+iDUSe6LkoIV74cABTXQnI7P2FZQqQy6bj95/zolKJYrpbxy+bA7SgxWAnRpUiLkqosjFUEDiZFrHKaf+qnLZpJohjTACtUBiVpWZKGtXh9cW2M69BP56fEsG+TwTR4GB4pjqCV2b6CVpM5Dg1lDza6Vwl/Z38ZjnlVOjnbVbaUrmTW2JihZHvs2mSuZVGU2H+Cw/GcbUf+OHlCsjU+defDGJVYxBfrtNx3iejk/aiprp0zJyQwL7/OrDrsRDeoq3fz1ZGsfeiG9+eHsBbfXY8XRtDy1knvvXxOMJxhtduKzhyw55+UCOJK9TOrKoI5lZH0RZw4QGC/NPmCHrDSUxyyDjSaUfLzBDa+hU85Ezg+212fHOGjiRNVP9xR8Oz9XG81OrCK5+8ix9fLsNZ/720c7QyZUE6E/Nl8ZAB3z+I0fyHg+rwx/HdC27a5pVBfYCdLnSyXYdO28O76OI9UYav1AXR6rHhRxc1eBMK5j8cojaS6I8mMbsmStZz75KO39TwXF0Ik6iNcx6GRjdDlRLBy20ughTHp8mi+qMR7GkrR60jga/Wh1GmJOGjLf3PV8dxulvCkvogHGStZ/1qwXBMA3qjjxbdy4GXpwfxvUeD6AoreDdgRyipiHXjrzXEcN5ro+kCBycNPAjHf57z2TGXLGfDjCQeVGO40O+EJyzhnFeju17GH/FJDzUZ/wuo0BQJp3sd4APqFn2Pi3aov0gW3FhB600hRUxm9fQ+fVu/hhu0q3HWq+L1O3acoTZXNgZw4paanrkVrpzHriorK5+hX0+MdFJYl3GKvtRNF3sjouBnHeW0YQd0R1R0RzVcvCuj2gmc6dXwbshGEGRcCWm0wK6hO8w3/2S841MwnTq5r53A0tKGnQb7qdsaLXKl7vOdmA2XAjac92t4myyuI6yindr5y20HppHfO3bTiX9TG91Rldq2CVh/omNMPEQl4289NjxUpuMpsqQ97W66eaOynn/RhsLJ7IKcsxobG18tzf8Xy3aKmUkj2QW95RZWX87wxy4V/+lXRvdYSlYV49qS8PTP1UVouCv4J1mzxIwBUb9fpeWaluyy+/gI3tDZd6qMP8Lyq2tqehhJeeoaNzeKropKf+h2jLL+8BqbZxSFk/9wyJpqGMgCZCALkIEsQAayABnIAmQgC5CBLEAGsgAZyAJkIAuQgXLmYrRT+pokSR+WqVJJxf88DixZsmTpA6T/Ax/aBPGX97nPAAAAAElFTkSuQmCC",Gr=[{icon:Fk,text:"Info",name:"info"},{icon:Bk,text:"Favorites",name:"fav"},{icon:zk,text:"Subscription",name:"suv"}];function Hk(){const[t,e]=E.useState(Gr.name);return p.jsxs("div",{children:[p.jsxs("div",{className:"   bg-gradient-to-b text-white from-[#d138fb] to-[#8d3fff] header text-center min-h-[160pt] flex flex-col gap-2 p-4  ",children:[p.jsx(_t,{to:"/",children:p.jsx("img",{src:xm,width:40,className:"absolute  cursor-pointer "})}),p.jsx("img",{src:jk,className:"rounded-full mx-auto ",width:80}),p.jsx("div",{className:"displayname",children:"Displayname"}),p.jsx("div",{className:"text-sm",children:"email@server.com"})]}),p.jsx("div",{className:"menu max-w-[1100px]  shadow-md shadow-black/50 flex justify-around items-center min-h-[80pt] bg-white p-4 border  border-slate-200 rounded-md mx-8 md:mx-auto -mt-[20pt] ",children:Gr.map((n,r)=>p.jsxs("div",{onClick:i=>e(n.name),className:"cursor-pointer group",children:[p.jsx("img",{className:"mx-auto",src:n.icon}),p.jsx("div",{className:"text-center text-gray-400 group-hover:text-black",children:n.text})]}))}),p.jsxs("div",{className:"sec-cont bg-red-500 p-4 max-w-[1100px] mx-auto",children:[Gr[0].name===t&&p.jsx("div",{children:"Info"}),Gr[1].name===t&&p.jsx("div",{children:"My Favs"}),Gr[2].name===t&&p.jsx("div",{children:"My Sub"})]})]})}function Wk(){return p.jsx("div",{className:"bg-slate-700  text-white min-h-[120pt]",children:"Footer"})}function My(){return p.jsxs("div",{className:"dbg-links ",children:[p.jsx("p",{children:"------ DEBUG MENU -----"}),p.jsxs("ul",{className:"flex gap-2 justify-center items-center",children:[p.jsx("li",{children:p.jsx(_t,{to:"/",children:"Home"})}),p.jsx("li",{children:p.jsx(_t,{to:Ve.MY_ACCOUNT.path,children:"My Account"})}),p.jsx("li",{children:p.jsx(_t,{to:Ve.LOGIN.path,children:"Login"})}),p.jsx("li",{children:p.jsx(_t,{to:Ve.LEGAL.path,children:"Legal"})}),p.jsx("li",{children:p.jsx(_t,{to:Ve.SUBCRIPTION.path,children:"Subscription"})}),p.jsx("li",{children:p.jsx(_t,{to:Ve.INTRO.path,children:"Intro"})})]}),p.jsx("p",{children:"------ DEBUG MENU -----"})]})}const $k=()=>{const[t,e]=E.useState(!1);return E.useState(()=>{const n=Vy();e(n)},[]),p.jsxs(p.Fragment,{children:[p.jsx(My,{}),p.jsx(y_,{user:t}),p.jsx(r_,{}),p.jsx(Wk,{})]})};function mh(){const[t,e]=E.useState(!1),[n,r]=E.useState("+243893092849");E.useRef();const i=o=>{o.preventDefault();const a=()=>{window.recaptchaVerifier=new QS(ph,"recaptcha-cont",{size:"invisible",callback:l=>{console.log(`da resp ==> 
`,l)}})};if(n.length>=12){e(!0),a();let l=window.recaptchaVerifier;XS(ph,n,l).then(u=>{window.confirmationResult=u}).catch(u=>{console.log(u)})}},s=o=>{let a=o.target.value;a.length===6&&(console.log(a),window.confirmationResult.confirm(a).then(u=>{const c=u.user;console.log("user",c)}).catch(u=>{console.log("error => ",u)}))};return p.jsxs("div",{className:" ",children:[p.jsx(My,{}),p.jsx("div",{children:"Sign in with phone number"}),p.jsx("div",{children:"Phone number"}),p.jsx("input",{type:"tel",onChange:o=>r(o.target.value),value:n}),p.jsx("p",{children:"Please enter your phone number"}),t&&p.jsxs("div",{children:[p.jsx("div",{children:"OTP"}),p.jsx("input",{type:"text",maxLength:6,onChange:s})]}),!t&&p.jsx("button",{onClick:o=>i(o),children:"Request OTP"}),p.jsx("div",{id:"recaptcha-cont"})]})}function qk(){return p.jsx("div",{children:"Legal"})}function Kk({data:t}){const{title:e,features:n,price:r,bg:i,text:s,outline:o,id:a}=t;function l(u){console.log(u)}return p.jsxs("div",{className:`border text-center p-4 m-2 mt-8 min-w-[30%] rounded-lg text-white ${i} `,children:[p.jsx("div",{className:`bg-white w-fit p-2 mx-auto ${s} min-w-[100pt] text-center rounded-lg -mt-8 outline ${o} `,children:e}),p.jsx("div",{className:"my-4 gap-2 flex flex-col",children:n.map((u,c)=>p.jsxs("div",{children:["• ",u]}))}),p.jsxs("div",{className:"text-[40pt]",children:[r," FC"]}),p.jsx("button",{onClick:u=>l(a),className:"border p-1 rounded-lg hover:bg-white/30",children:"BUY NOW"})]})}function Gk(){const t=[{title:"Basic",features:["feature 1","feature 2","feature 3","feature 4"],price:5e3,bg:"bg-gradient-to-r from-blue-500 to-purple-500",text:"text-blue-500",outline:"outline-blue-500"},{title:"Standard",features:["feature 1","feature 2","feature 3","feature 4"],price:7500,bg:"bg-gradient-to-r from-orange-500 to-pink-500",text:"text-orange-500",outline:"outline-orange-500"},{title:"Premium",features:["feature 1","feature 2","feature 3","feature 4"],price:1e4,bg:"bg-gradient-to-r from-sky-500 to-blue-500",text:"text-purple-500",outline:"outline-purple-500"}];return p.jsx("div",{className:`  ${dc} md:flex justify-center items-center `,children:t.map((e,n)=>p.jsx(Kk,{data:{...e,id:n}},n))})}function Qk(){return p.jsx("div",{children:"Intro"})}function Jk(){E.useState(m_.HOME.path),E.useState({});const[t,e]=E.useState(!0);return E.useEffect(()=>{const n=Vy();e(n)},[]),p.jsx(d_,{basename:"/kooop",children:p.jsxs(s_,{children:[p.jsxs(dt,{path:"/",element:t?p.jsx($k,{}):p.jsx(mh,{}),children:[p.jsx(dt,{index:!0,element:p.jsx(bk,{})}),p.jsx(dt,{path:Ve.VIEW_KOOP.path,element:p.jsx(Uk,{})}),p.jsx(dt,{path:Ve.LEGAL.path,element:p.jsx(qk,{})}),p.jsx(dt,{path:Ve.SUBCRIPTION.path,element:p.jsx(Gk,{})}),p.jsx(dt,{path:"*",element:p.jsx(Vk,{})})]}),p.jsx(dt,{path:Ve.MY_ACCOUNT.path,element:p.jsx(Hk,{})}),p.jsx(dt,{path:"/intro",element:p.jsx(Qk,{})}),p.jsx(dt,{path:Ve.LOGIN.path,element:p.jsx(mh,{})})]})})}rl.createRoot(document.getElementById("root")).render(p.jsx(Th.StrictMode,{children:p.jsx(Jk,{})}));
