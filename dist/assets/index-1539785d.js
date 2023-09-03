function Py(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Cy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lh={exports:{}},xo={},uh={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fi=Symbol.for("react.element"),Ry=Symbol.for("react.portal"),xy=Symbol.for("react.fragment"),Ny=Symbol.for("react.strict_mode"),Oy=Symbol.for("react.profiler"),Dy=Symbol.for("react.provider"),Ly=Symbol.for("react.context"),by=Symbol.for("react.forward_ref"),Vy=Symbol.for("react.suspense"),My=Symbol.for("react.memo"),Uy=Symbol.for("react.lazy"),zc=Symbol.iterator;function jy(t){return t===null||typeof t!="object"?null:(t=zc&&t[zc]||t["@@iterator"],typeof t=="function"?t:null)}var ch={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dh=Object.assign,fh={};function kr(t,e,n){this.props=t,this.context=e,this.refs=fh,this.updater=n||ch}kr.prototype.isReactComponent={};kr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};kr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hh(){}hh.prototype=kr.prototype;function lu(t,e,n){this.props=t,this.context=e,this.refs=fh,this.updater=n||ch}var uu=lu.prototype=new hh;uu.constructor=lu;dh(uu,kr.prototype);uu.isPureReactComponent=!0;var Hc=Array.isArray,ph=Object.prototype.hasOwnProperty,cu={current:null},mh={key:!0,ref:!0,__self:!0,__source:!0};function gh(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ph.call(e,r)&&!mh.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Fi,type:t,key:s,ref:o,props:i,_owner:cu.current}}function Fy(t,e){return{$$typeof:Fi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function du(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fi}function By(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wc=/\/+/g;function ca(t,e){return typeof t=="object"&&t!==null&&t.key!=null?By(""+t.key):e.toString(36)}function Ss(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fi:case Ry:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ca(o,0):r,Hc(i)?(n="",t!=null&&(n=t.replace(Wc,"$&/")+"/"),Ss(i,e,n,"",function(u){return u})):i!=null&&(du(i)&&(i=Fy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Wc,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Hc(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ca(s,a);o+=Ss(s,e,n,l,i)}else if(l=jy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ca(s,a++),o+=Ss(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ts(t,e,n){if(t==null)return t;var r=[],i=0;return Ss(t,r,"","",function(s){return e.call(n,s,i++)}),r}function zy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Se={current:null},Ts={transition:null},Hy={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Ts,ReactCurrentOwner:cu};V.Children={map:ts,forEach:function(t,e,n){ts(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ts(t,function(){e++}),e},toArray:function(t){return ts(t,function(e){return e})||[]},only:function(t){if(!du(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};V.Component=kr;V.Fragment=xy;V.Profiler=Oy;V.PureComponent=lu;V.StrictMode=Ny;V.Suspense=Vy;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hy;V.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=dh({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=cu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ph.call(e,l)&&!mh.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Fi,type:t.type,key:i,ref:s,props:r,_owner:o}};V.createContext=function(t){return t={$$typeof:Ly,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Dy,_context:t},t.Consumer=t};V.createElement=gh;V.createFactory=function(t){var e=gh.bind(null,t);return e.type=t,e};V.createRef=function(){return{current:null}};V.forwardRef=function(t){return{$$typeof:by,render:t}};V.isValidElement=du;V.lazy=function(t){return{$$typeof:Uy,_payload:{_status:-1,_result:t},_init:zy}};V.memo=function(t,e){return{$$typeof:My,type:t,compare:e===void 0?null:e}};V.startTransition=function(t){var e=Ts.transition;Ts.transition={};try{t()}finally{Ts.transition=e}};V.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};V.useCallback=function(t,e){return Se.current.useCallback(t,e)};V.useContext=function(t){return Se.current.useContext(t)};V.useDebugValue=function(){};V.useDeferredValue=function(t){return Se.current.useDeferredValue(t)};V.useEffect=function(t,e){return Se.current.useEffect(t,e)};V.useId=function(){return Se.current.useId()};V.useImperativeHandle=function(t,e,n){return Se.current.useImperativeHandle(t,e,n)};V.useInsertionEffect=function(t,e){return Se.current.useInsertionEffect(t,e)};V.useLayoutEffect=function(t,e){return Se.current.useLayoutEffect(t,e)};V.useMemo=function(t,e){return Se.current.useMemo(t,e)};V.useReducer=function(t,e,n){return Se.current.useReducer(t,e,n)};V.useRef=function(t){return Se.current.useRef(t)};V.useState=function(t){return Se.current.useState(t)};V.useSyncExternalStore=function(t,e,n){return Se.current.useSyncExternalStore(t,e,n)};V.useTransition=function(){return Se.current.useTransition()};V.version="18.2.0";uh.exports=V;var E=uh.exports;const yh=Cy(E),Wy=Py({__proto__:null,default:yh},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $y=E,qy=Symbol.for("react.element"),Ky=Symbol.for("react.fragment"),Gy=Object.prototype.hasOwnProperty,Qy=$y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jy={key:!0,ref:!0,__self:!0,__source:!0};function vh(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Gy.call(e,r)&&!Jy.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:qy,type:t,key:s,ref:o,props:i,_owner:Qy.current}}xo.Fragment=Ky;xo.jsx=vh;xo.jsxs=vh;lh.exports=xo;var h=lh.exports,Ya={},wh={exports:{}},He={},_h={exports:{}},Eh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,L){var b=k.length;k.push(L);e:for(;0<b;){var Y=b-1>>>1,oe=k[Y];if(0<i(oe,L))k[Y]=L,k[b]=oe,b=Y;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var L=k[0],b=k.pop();if(b!==L){k[0]=b;e:for(var Y=0,oe=k.length,Zi=oe>>>1;Y<Zi;){var gn=2*(Y+1)-1,ua=k[gn],yn=gn+1,es=k[yn];if(0>i(ua,b))yn<oe&&0>i(es,ua)?(k[Y]=es,k[yn]=b,Y=yn):(k[Y]=ua,k[gn]=b,Y=gn);else if(yn<oe&&0>i(es,b))k[Y]=es,k[yn]=b,Y=yn;else break e}}return L}function i(k,L){var b=k.sortIndex-L.sortIndex;return b!==0?b:k.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,g=3,y=!1,w=!1,_=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(k){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=k)r(u),L.sortIndex=L.expirationTime,e(l,L);else break;L=n(u)}}function v(k){if(_=!1,m(k),!w)if(n(l)!==null)w=!0,aa(A);else{var L=n(u);L!==null&&la(v,L.startTime-k)}}function A(k,L){w=!1,_&&(_=!1,p(R),R=-1),y=!0;var b=g;try{for(m(L),f=n(l);f!==null&&(!(f.expirationTime>L)||k&&!se());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,g=f.priorityLevel;var oe=Y(f.expirationTime<=L);L=t.unstable_now(),typeof oe=="function"?f.callback=oe:f===n(l)&&r(l),m(L)}else r(l);f=n(l)}if(f!==null)var Zi=!0;else{var gn=n(u);gn!==null&&la(v,gn.startTime-L),Zi=!1}return Zi}finally{f=null,g=b,y=!1}}var P=!1,C=null,R=-1,B=5,S=-1;function se(){return!(t.unstable_now()-S<B)}function Wn(){if(C!==null){var k=t.unstable_now();S=k;var L=!0;try{L=C(!0,k)}finally{L?Dr():(P=!1,C=null)}}else P=!1}var Dr;if(typeof d=="function")Dr=function(){d(Wn)};else if(typeof MessageChannel<"u"){var Bc=new MessageChannel,ky=Bc.port2;Bc.port1.onmessage=Wn,Dr=function(){ky.postMessage(null)}}else Dr=function(){x(Wn,0)};function aa(k){C=k,P||(P=!0,Dr())}function la(k,L){R=x(function(){k(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){w||y||(w=!0,aa(A))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var b=g;g=L;try{return k()}finally{g=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,L){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var b=g;g=k;try{return L()}finally{g=b}},t.unstable_scheduleCallback=function(k,L,b){var Y=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?Y+b:Y):b=Y,k){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=b+oe,k={id:c++,callback:L,priorityLevel:k,startTime:b,expirationTime:oe,sortIndex:-1},b>Y?(k.sortIndex=b,e(u,k),n(l)===null&&k===n(u)&&(_?(p(R),R=-1):_=!0,la(v,b-Y))):(k.sortIndex=oe,e(l,k),w||y||(w=!0,aa(A))),k},t.unstable_shouldYield=se,t.unstable_wrapCallback=function(k){var L=g;return function(){var b=g;g=L;try{return k.apply(this,arguments)}finally{g=b}}}})(Eh);_h.exports=Eh;var Yy=_h.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih=E,ze=Yy;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ah=new Set,fi={};function jn(t,e){mr(t,e),mr(t+"Capture",e)}function mr(t,e){for(fi[t]=e,t=0;t<e.length;t++)Ah.add(e[t])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xa=Object.prototype.hasOwnProperty,Xy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$c={},qc={};function Zy(t){return Xa.call(qc,t)?!0:Xa.call($c,t)?!1:Xy.test(t)?qc[t]=!0:($c[t]=!0,!1)}function ev(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tv(t,e,n,r){if(e===null||typeof e>"u"||ev(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Te(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){me[t]=new Te(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];me[e]=new Te(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){me[t]=new Te(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){me[t]=new Te(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){me[t]=new Te(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){me[t]=new Te(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){me[t]=new Te(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){me[t]=new Te(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){me[t]=new Te(t,5,!1,t.toLowerCase(),null,!1,!1)});var fu=/[\-:]([a-z])/g;function hu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(fu,hu);me[e]=new Te(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(fu,hu);me[e]=new Te(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(fu,hu);me[e]=new Te(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){me[t]=new Te(t,1,!1,t.toLowerCase(),null,!1,!1)});me.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){me[t]=new Te(t,1,!1,t.toLowerCase(),null,!0,!0)});function pu(t,e,n,r){var i=me.hasOwnProperty(e)?me[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tv(e,n,i,r)&&(n=null),r||i===null?Zy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dt=Ih.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ns=Symbol.for("react.element"),Gn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),mu=Symbol.for("react.strict_mode"),Za=Symbol.for("react.profiler"),Sh=Symbol.for("react.provider"),Th=Symbol.for("react.context"),gu=Symbol.for("react.forward_ref"),el=Symbol.for("react.suspense"),tl=Symbol.for("react.suspense_list"),yu=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),kh=Symbol.for("react.offscreen"),Kc=Symbol.iterator;function Lr(t){return t===null||typeof t!="object"?null:(t=Kc&&t[Kc]||t["@@iterator"],typeof t=="function"?t:null)}var G=Object.assign,da;function $r(t){if(da===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);da=e&&e[1]||""}return`
`+da+t}var fa=!1;function ha(t,e){if(!t||fa)return"";fa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{fa=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$r(t):""}function nv(t){switch(t.tag){case 5:return $r(t.type);case 16:return $r("Lazy");case 13:return $r("Suspense");case 19:return $r("SuspenseList");case 0:case 2:case 15:return t=ha(t.type,!1),t;case 11:return t=ha(t.type.render,!1),t;case 1:return t=ha(t.type,!0),t;default:return""}}function nl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qn:return"Fragment";case Gn:return"Portal";case Za:return"Profiler";case mu:return"StrictMode";case el:return"Suspense";case tl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Th:return(t.displayName||"Context")+".Consumer";case Sh:return(t._context.displayName||"Context")+".Provider";case gu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yu:return e=t.displayName||null,e!==null?e:nl(t.type)||"Memo";case Vt:e=t._payload,t=t._init;try{return nl(t(e))}catch{}}return null}function rv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nl(e);case 8:return e===mu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function un(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ph(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iv(t){var e=Ph(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function rs(t){t._valueTracker||(t._valueTracker=iv(t))}function Ch(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ph(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Fs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rl(t,e){var n=e.checked;return G({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=un(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Rh(t,e){e=e.checked,e!=null&&pu(t,"checked",e,!1)}function il(t,e){Rh(t,e);var n=un(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sl(t,e.type,n):e.hasOwnProperty("defaultValue")&&sl(t,e.type,un(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sl(t,e,n){(e!=="number"||Fs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qr=Array.isArray;function ar(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+un(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ol(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return G({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(qr(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:un(n)}}function xh(t,e){var n=un(e.value),r=un(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Yc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Nh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function al(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Nh(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var is,Oh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(is=is||document.createElement("div"),is.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=is.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function hi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sv=["Webkit","ms","Moz","O"];Object.keys(Jr).forEach(function(t){sv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Jr[e]=Jr[t]})});function Dh(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Jr.hasOwnProperty(t)&&Jr[t]?(""+e).trim():e+"px"}function Lh(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dh(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ov=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ll(t,e){if(e){if(ov[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function ul(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cl=null;function vu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dl=null,lr=null,ur=null;function Xc(t){if(t=Hi(t)){if(typeof dl!="function")throw Error(I(280));var e=t.stateNode;e&&(e=bo(e),dl(t.stateNode,t.type,e))}}function bh(t){lr?ur?ur.push(t):ur=[t]:lr=t}function Vh(){if(lr){var t=lr,e=ur;if(ur=lr=null,Xc(t),e)for(t=0;t<e.length;t++)Xc(e[t])}}function Mh(t,e){return t(e)}function Uh(){}var pa=!1;function jh(t,e,n){if(pa)return t(e,n);pa=!0;try{return Mh(t,e,n)}finally{pa=!1,(lr!==null||ur!==null)&&(Uh(),Vh())}}function pi(t,e){var n=t.stateNode;if(n===null)return null;var r=bo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var fl=!1;if(kt)try{var br={};Object.defineProperty(br,"passive",{get:function(){fl=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{fl=!1}function av(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Yr=!1,Bs=null,zs=!1,hl=null,lv={onError:function(t){Yr=!0,Bs=t}};function uv(t,e,n,r,i,s,o,a,l){Yr=!1,Bs=null,av.apply(lv,arguments)}function cv(t,e,n,r,i,s,o,a,l){if(uv.apply(this,arguments),Yr){if(Yr){var u=Bs;Yr=!1,Bs=null}else throw Error(I(198));zs||(zs=!0,hl=u)}}function Fn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fh(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zc(t){if(Fn(t)!==t)throw Error(I(188))}function dv(t){var e=t.alternate;if(!e){if(e=Fn(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Zc(i),t;if(s===r)return Zc(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function Bh(t){return t=dv(t),t!==null?zh(t):null}function zh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zh(t);if(e!==null)return e;t=t.sibling}return null}var Hh=ze.unstable_scheduleCallback,ed=ze.unstable_cancelCallback,fv=ze.unstable_shouldYield,hv=ze.unstable_requestPaint,X=ze.unstable_now,pv=ze.unstable_getCurrentPriorityLevel,wu=ze.unstable_ImmediatePriority,Wh=ze.unstable_UserBlockingPriority,Hs=ze.unstable_NormalPriority,mv=ze.unstable_LowPriority,$h=ze.unstable_IdlePriority,No=null,ht=null;function gv(t){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(No,t,void 0,(t.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:wv,yv=Math.log,vv=Math.LN2;function wv(t){return t>>>=0,t===0?32:31-(yv(t)/vv|0)|0}var ss=64,os=4194304;function Kr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ws(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Kr(a):(s&=o,s!==0&&(r=Kr(s)))}else o=n&~i,o!==0?r=Kr(o):s!==0&&(r=Kr(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-nt(e),i=1<<n,r|=t[n],e&=~i;return r}function _v(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ev(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-nt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=_v(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function pl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qh(){var t=ss;return ss<<=1,!(ss&4194240)&&(ss=64),t}function ma(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Bi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-nt(e),t[e]=n}function Iv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-nt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function _u(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-nt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var F=0;function Kh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gh,Eu,Qh,Jh,Yh,ml=!1,as=[],Qt=null,Jt=null,Yt=null,mi=new Map,gi=new Map,jt=[],Av="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function td(t,e){switch(t){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":mi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":gi.delete(e.pointerId)}}function Vr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Hi(e),e!==null&&Eu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Sv(t,e,n,r,i){switch(e){case"focusin":return Qt=Vr(Qt,t,e,n,r,i),!0;case"dragenter":return Jt=Vr(Jt,t,e,n,r,i),!0;case"mouseover":return Yt=Vr(Yt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return mi.set(s,Vr(mi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,gi.set(s,Vr(gi.get(s)||null,t,e,n,r,i)),!0}return!1}function Xh(t){var e=En(t.target);if(e!==null){var n=Fn(e);if(n!==null){if(e=n.tag,e===13){if(e=Fh(n),e!==null){t.blockedOn=e,Yh(t.priority,function(){Qh(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ks(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);cl=r,n.target.dispatchEvent(r),cl=null}else return e=Hi(n),e!==null&&Eu(e),t.blockedOn=n,!1;e.shift()}return!0}function nd(t,e,n){ks(t)&&n.delete(e)}function Tv(){ml=!1,Qt!==null&&ks(Qt)&&(Qt=null),Jt!==null&&ks(Jt)&&(Jt=null),Yt!==null&&ks(Yt)&&(Yt=null),mi.forEach(nd),gi.forEach(nd)}function Mr(t,e){t.blockedOn===e&&(t.blockedOn=null,ml||(ml=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,Tv)))}function yi(t){function e(i){return Mr(i,t)}if(0<as.length){Mr(as[0],t);for(var n=1;n<as.length;n++){var r=as[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Qt!==null&&Mr(Qt,t),Jt!==null&&Mr(Jt,t),Yt!==null&&Mr(Yt,t),mi.forEach(e),gi.forEach(e),n=0;n<jt.length;n++)r=jt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jt.length&&(n=jt[0],n.blockedOn===null);)Xh(n),n.blockedOn===null&&jt.shift()}var cr=Dt.ReactCurrentBatchConfig,$s=!0;function kv(t,e,n,r){var i=F,s=cr.transition;cr.transition=null;try{F=1,Iu(t,e,n,r)}finally{F=i,cr.transition=s}}function Pv(t,e,n,r){var i=F,s=cr.transition;cr.transition=null;try{F=4,Iu(t,e,n,r)}finally{F=i,cr.transition=s}}function Iu(t,e,n,r){if($s){var i=gl(t,e,n,r);if(i===null)Ta(t,e,r,qs,n),td(t,r);else if(Sv(i,t,e,n,r))r.stopPropagation();else if(td(t,r),e&4&&-1<Av.indexOf(t)){for(;i!==null;){var s=Hi(i);if(s!==null&&Gh(s),s=gl(t,e,n,r),s===null&&Ta(t,e,r,qs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ta(t,e,r,null,n)}}var qs=null;function gl(t,e,n,r){if(qs=null,t=vu(r),t=En(t),t!==null)if(e=Fn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Fh(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qs=t,null}function Zh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pv()){case wu:return 1;case Wh:return 4;case Hs:case mv:return 16;case $h:return 536870912;default:return 16}default:return 16}}var $t=null,Au=null,Ps=null;function ep(){if(Ps)return Ps;var t,e=Au,n=e.length,r,i="value"in $t?$t.value:$t.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ps=i.slice(t,1<r?1-r:void 0)}function Cs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ls(){return!0}function rd(){return!1}function We(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ls:rd,this.isPropagationStopped=rd,this}return G(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ls)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ls)},persist:function(){},isPersistent:ls}),e}var Pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Su=We(Pr),zi=G({},Pr,{view:0,detail:0}),Cv=We(zi),ga,ya,Ur,Oo=G({},zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ur&&(Ur&&t.type==="mousemove"?(ga=t.screenX-Ur.screenX,ya=t.screenY-Ur.screenY):ya=ga=0,Ur=t),ga)},movementY:function(t){return"movementY"in t?t.movementY:ya}}),id=We(Oo),Rv=G({},Oo,{dataTransfer:0}),xv=We(Rv),Nv=G({},zi,{relatedTarget:0}),va=We(Nv),Ov=G({},Pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Dv=We(Ov),Lv=G({},Pr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bv=We(Lv),Vv=G({},Pr,{data:0}),sd=We(Vv),Mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jv[t])?!!e[t]:!1}function Tu(){return Fv}var Bv=G({},zi,{key:function(t){if(t.key){var e=Mv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Uv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(t){return t.type==="keypress"?Cs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zv=We(Bv),Hv=G({},Oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),od=We(Hv),Wv=G({},zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),$v=We(Wv),qv=G({},Pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kv=We(qv),Gv=G({},Oo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qv=We(Gv),Jv=[9,13,27,32],ku=kt&&"CompositionEvent"in window,Xr=null;kt&&"documentMode"in document&&(Xr=document.documentMode);var Yv=kt&&"TextEvent"in window&&!Xr,tp=kt&&(!ku||Xr&&8<Xr&&11>=Xr),ad=String.fromCharCode(32),ld=!1;function np(t,e){switch(t){case"keyup":return Jv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jn=!1;function Xv(t,e){switch(t){case"compositionend":return rp(e);case"keypress":return e.which!==32?null:(ld=!0,ad);case"textInput":return t=e.data,t===ad&&ld?null:t;default:return null}}function Zv(t,e){if(Jn)return t==="compositionend"||!ku&&np(t,e)?(t=ep(),Ps=Au=$t=null,Jn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tp&&e.locale!=="ko"?null:e.data;default:return null}}var e0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ud(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!e0[t.type]:e==="textarea"}function ip(t,e,n,r){bh(r),e=Ks(e,"onChange"),0<e.length&&(n=new Su("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Zr=null,vi=null;function t0(t){mp(t,0)}function Do(t){var e=Zn(t);if(Ch(e))return t}function n0(t,e){if(t==="change")return e}var sp=!1;if(kt){var wa;if(kt){var _a="oninput"in document;if(!_a){var cd=document.createElement("div");cd.setAttribute("oninput","return;"),_a=typeof cd.oninput=="function"}wa=_a}else wa=!1;sp=wa&&(!document.documentMode||9<document.documentMode)}function dd(){Zr&&(Zr.detachEvent("onpropertychange",op),vi=Zr=null)}function op(t){if(t.propertyName==="value"&&Do(vi)){var e=[];ip(e,vi,t,vu(t)),jh(t0,e)}}function r0(t,e,n){t==="focusin"?(dd(),Zr=e,vi=n,Zr.attachEvent("onpropertychange",op)):t==="focusout"&&dd()}function i0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Do(vi)}function s0(t,e){if(t==="click")return Do(e)}function o0(t,e){if(t==="input"||t==="change")return Do(e)}function a0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var it=typeof Object.is=="function"?Object.is:a0;function wi(t,e){if(it(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xa.call(e,i)||!it(t[i],e[i]))return!1}return!0}function fd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hd(t,e){var n=fd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fd(n)}}function ap(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ap(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function lp(){for(var t=window,e=Fs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fs(t.document)}return e}function Pu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function l0(t){var e=lp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ap(n.ownerDocument.documentElement,n)){if(r!==null&&Pu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=hd(n,s);var o=hd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var u0=kt&&"documentMode"in document&&11>=document.documentMode,Yn=null,yl=null,ei=null,vl=!1;function pd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vl||Yn==null||Yn!==Fs(r)||(r=Yn,"selectionStart"in r&&Pu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ei&&wi(ei,r)||(ei=r,r=Ks(yl,"onSelect"),0<r.length&&(e=new Su("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Yn)))}function us(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xn={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionend:us("Transition","TransitionEnd")},Ea={},up={};kt&&(up=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Lo(t){if(Ea[t])return Ea[t];if(!Xn[t])return t;var e=Xn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in up)return Ea[t]=e[n];return t}var cp=Lo("animationend"),dp=Lo("animationiteration"),fp=Lo("animationstart"),hp=Lo("transitionend"),pp=new Map,md="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(t,e){pp.set(t,e),jn(e,[t])}for(var Ia=0;Ia<md.length;Ia++){var Aa=md[Ia],c0=Aa.toLowerCase(),d0=Aa[0].toUpperCase()+Aa.slice(1);fn(c0,"on"+d0)}fn(cp,"onAnimationEnd");fn(dp,"onAnimationIteration");fn(fp,"onAnimationStart");fn("dblclick","onDoubleClick");fn("focusin","onFocus");fn("focusout","onBlur");fn(hp,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));function gd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,cv(r,e,void 0,t),t.currentTarget=null}function mp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;gd(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;gd(i,a,u),s=l}}}if(zs)throw t=hl,zs=!1,hl=null,t}function H(t,e){var n=e[Al];n===void 0&&(n=e[Al]=new Set);var r=t+"__bubble";n.has(r)||(gp(e,t,2,!1),n.add(r))}function Sa(t,e,n){var r=0;e&&(r|=4),gp(n,t,r,e)}var cs="_reactListening"+Math.random().toString(36).slice(2);function _i(t){if(!t[cs]){t[cs]=!0,Ah.forEach(function(n){n!=="selectionchange"&&(f0.has(n)||Sa(n,!1,t),Sa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cs]||(e[cs]=!0,Sa("selectionchange",!1,e))}}function gp(t,e,n,r){switch(Zh(e)){case 1:var i=kv;break;case 4:i=Pv;break;default:i=Iu}n=i.bind(null,e,n,t),i=void 0,!fl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ta(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=En(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}jh(function(){var u=s,c=vu(n),f=[];e:{var g=pp.get(t);if(g!==void 0){var y=Su,w=t;switch(t){case"keypress":if(Cs(n)===0)break e;case"keydown":case"keyup":y=zv;break;case"focusin":w="focus",y=va;break;case"focusout":w="blur",y=va;break;case"beforeblur":case"afterblur":y=va;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=xv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=$v;break;case cp:case dp:case fp:y=Dv;break;case hp:y=Kv;break;case"scroll":y=Cv;break;case"wheel":y=Qv;break;case"copy":case"cut":case"paste":y=bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=od}var _=(e&4)!==0,x=!_&&t==="scroll",p=_?g!==null?g+"Capture":null:g;_=[];for(var d=u,m;d!==null;){m=d;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,p!==null&&(v=pi(d,p),v!=null&&_.push(Ei(d,v,m)))),x)break;d=d.return}0<_.length&&(g=new y(g,w,null,n,c),f.push({event:g,listeners:_}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",g&&n!==cl&&(w=n.relatedTarget||n.fromElement)&&(En(w)||w[Pt]))break e;if((y||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?En(w):null,w!==null&&(x=Fn(w),w!==x||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(_=id,v="onMouseLeave",p="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(_=od,v="onPointerLeave",p="onPointerEnter",d="pointer"),x=y==null?g:Zn(y),m=w==null?g:Zn(w),g=new _(v,d+"leave",y,n,c),g.target=x,g.relatedTarget=m,v=null,En(c)===u&&(_=new _(p,d+"enter",w,n,c),_.target=m,_.relatedTarget=x,v=_),x=v,y&&w)t:{for(_=y,p=w,d=0,m=_;m;m=$n(m))d++;for(m=0,v=p;v;v=$n(v))m++;for(;0<d-m;)_=$n(_),d--;for(;0<m-d;)p=$n(p),m--;for(;d--;){if(_===p||p!==null&&_===p.alternate)break t;_=$n(_),p=$n(p)}_=null}else _=null;y!==null&&yd(f,g,y,_,!1),w!==null&&x!==null&&yd(f,x,w,_,!0)}}e:{if(g=u?Zn(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var A=n0;else if(ud(g))if(sp)A=o0;else{A=i0;var P=r0}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(A=s0);if(A&&(A=A(t,u))){ip(f,A,n,c);break e}P&&P(t,g,u),t==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&sl(g,"number",g.value)}switch(P=u?Zn(u):window,t){case"focusin":(ud(P)||P.contentEditable==="true")&&(Yn=P,yl=u,ei=null);break;case"focusout":ei=yl=Yn=null;break;case"mousedown":vl=!0;break;case"contextmenu":case"mouseup":case"dragend":vl=!1,pd(f,n,c);break;case"selectionchange":if(u0)break;case"keydown":case"keyup":pd(f,n,c)}var C;if(ku)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Jn?np(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(tp&&n.locale!=="ko"&&(Jn||R!=="onCompositionStart"?R==="onCompositionEnd"&&Jn&&(C=ep()):($t=c,Au="value"in $t?$t.value:$t.textContent,Jn=!0)),P=Ks(u,R),0<P.length&&(R=new sd(R,t,null,n,c),f.push({event:R,listeners:P}),C?R.data=C:(C=rp(n),C!==null&&(R.data=C)))),(C=Yv?Xv(t,n):Zv(t,n))&&(u=Ks(u,"onBeforeInput"),0<u.length&&(c=new sd("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=C))}mp(f,e)})}function Ei(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ks(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=pi(t,n),s!=null&&r.unshift(Ei(t,s,i)),s=pi(t,e),s!=null&&r.push(Ei(t,s,i))),t=t.return}return r}function $n(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yd(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=pi(n,s),l!=null&&o.unshift(Ei(n,l,a))):i||(l=pi(n,s),l!=null&&o.push(Ei(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var h0=/\r\n?/g,p0=/\u0000|\uFFFD/g;function vd(t){return(typeof t=="string"?t:""+t).replace(h0,`
`).replace(p0,"")}function ds(t,e,n){if(e=vd(e),vd(t)!==e&&n)throw Error(I(425))}function Gs(){}var wl=null,_l=null;function El(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Il=typeof setTimeout=="function"?setTimeout:void 0,m0=typeof clearTimeout=="function"?clearTimeout:void 0,wd=typeof Promise=="function"?Promise:void 0,g0=typeof queueMicrotask=="function"?queueMicrotask:typeof wd<"u"?function(t){return wd.resolve(null).then(t).catch(y0)}:Il;function y0(t){setTimeout(function(){throw t})}function ka(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),yi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);yi(e)}function Xt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _d(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Cr=Math.random().toString(36).slice(2),dt="__reactFiber$"+Cr,Ii="__reactProps$"+Cr,Pt="__reactContainer$"+Cr,Al="__reactEvents$"+Cr,v0="__reactListeners$"+Cr,w0="__reactHandles$"+Cr;function En(t){var e=t[dt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pt]||n[dt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_d(t);t!==null;){if(n=t[dt])return n;t=_d(t)}return e}t=n,n=t.parentNode}return null}function Hi(t){return t=t[dt]||t[Pt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function bo(t){return t[Ii]||null}var Sl=[],er=-1;function hn(t){return{current:t}}function W(t){0>er||(t.current=Sl[er],Sl[er]=null,er--)}function z(t,e){er++,Sl[er]=t.current,t.current=e}var cn={},_e=hn(cn),Re=hn(!1),Cn=cn;function gr(t,e){var n=t.type.contextTypes;if(!n)return cn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xe(t){return t=t.childContextTypes,t!=null}function Qs(){W(Re),W(_e)}function Ed(t,e,n){if(_e.current!==cn)throw Error(I(168));z(_e,e),z(Re,n)}function yp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,rv(t)||"Unknown",i));return G({},n,r)}function Js(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cn,Cn=_e.current,z(_e,t),z(Re,Re.current),!0}function Id(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=yp(t,e,Cn),r.__reactInternalMemoizedMergedChildContext=t,W(Re),W(_e),z(_e,t)):W(Re),z(Re,n)}var wt=null,Vo=!1,Pa=!1;function vp(t){wt===null?wt=[t]:wt.push(t)}function _0(t){Vo=!0,vp(t)}function pn(){if(!Pa&&wt!==null){Pa=!0;var t=0,e=F;try{var n=wt;for(F=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wt=null,Vo=!1}catch(i){throw wt!==null&&(wt=wt.slice(t+1)),Hh(wu,pn),i}finally{F=e,Pa=!1}}return null}var tr=[],nr=0,Ys=null,Xs=0,$e=[],qe=0,Rn=null,Et=1,It="";function vn(t,e){tr[nr++]=Xs,tr[nr++]=Ys,Ys=t,Xs=e}function wp(t,e,n){$e[qe++]=Et,$e[qe++]=It,$e[qe++]=Rn,Rn=t;var r=Et;t=It;var i=32-nt(r)-1;r&=~(1<<i),n+=1;var s=32-nt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Et=1<<32-nt(e)+i|n<<i|r,It=s+t}else Et=1<<s|n<<i|r,It=t}function Cu(t){t.return!==null&&(vn(t,1),wp(t,1,0))}function Ru(t){for(;t===Ys;)Ys=tr[--nr],tr[nr]=null,Xs=tr[--nr],tr[nr]=null;for(;t===Rn;)Rn=$e[--qe],$e[qe]=null,It=$e[--qe],$e[qe]=null,Et=$e[--qe],$e[qe]=null}var Ue=null,Me=null,$=!1,tt=null;function _p(t,e){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ad(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ue=t,Me=Xt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ue=t,Me=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Rn!==null?{id:Et,overflow:It}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ue=t,Me=null,!0):!1;default:return!1}}function Tl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kl(t){if($){var e=Me;if(e){var n=e;if(!Ad(t,e)){if(Tl(t))throw Error(I(418));e=Xt(n.nextSibling);var r=Ue;e&&Ad(t,e)?_p(r,n):(t.flags=t.flags&-4097|2,$=!1,Ue=t)}}else{if(Tl(t))throw Error(I(418));t.flags=t.flags&-4097|2,$=!1,Ue=t}}}function Sd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ue=t}function fs(t){if(t!==Ue)return!1;if(!$)return Sd(t),$=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!El(t.type,t.memoizedProps)),e&&(e=Me)){if(Tl(t))throw Ep(),Error(I(418));for(;e;)_p(t,e),e=Xt(e.nextSibling)}if(Sd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Me=Xt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Me=null}}else Me=Ue?Xt(t.stateNode.nextSibling):null;return!0}function Ep(){for(var t=Me;t;)t=Xt(t.nextSibling)}function yr(){Me=Ue=null,$=!1}function xu(t){tt===null?tt=[t]:tt.push(t)}var E0=Dt.ReactCurrentBatchConfig;function Ze(t,e){if(t&&t.defaultProps){e=G({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Zs=hn(null),eo=null,rr=null,Nu=null;function Ou(){Nu=rr=eo=null}function Du(t){var e=Zs.current;W(Zs),t._currentValue=e}function Pl(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function dr(t,e){eo=t,Nu=rr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ce=!0),t.firstContext=null)}function Je(t){var e=t._currentValue;if(Nu!==t)if(t={context:t,memoizedValue:e,next:null},rr===null){if(eo===null)throw Error(I(308));rr=t,eo.dependencies={lanes:0,firstContext:t}}else rr=rr.next=t;return e}var In=null;function Lu(t){In===null?In=[t]:In.push(t)}function Ip(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Lu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ct(t,r)}function Ct(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mt=!1;function bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ap(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ct(t,n)}return i=r.interleaved,i===null?(e.next=e,Lu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ct(t,n)}function Rs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_u(t,n)}}function Td(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function to(t,e,n,r){var i=t.updateQueue;Mt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var g=a.lane,y=a.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,_=a;switch(g=e,y=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){f=w.call(y,f,g);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,g=typeof w=="function"?w.call(y,f,g):w,g==null)break e;f=G({},f,g);break e;case 2:Mt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=f):c=c.next=y,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Nn|=o,t.lanes=o,t.memoizedState=f}}function kd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Sp=new Ih.Component().refs;function Cl(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:G({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mo={isMounted:function(t){return(t=t._reactInternals)?Fn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ae(),i=tn(t),s=Tt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Zt(t,s,i),e!==null&&(rt(e,t,i,r),Rs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ae(),i=tn(t),s=Tt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zt(t,s,i),e!==null&&(rt(e,t,i,r),Rs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ae(),r=tn(t),i=Tt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Zt(t,i,r),e!==null&&(rt(e,t,r,n),Rs(e,t,r))}};function Pd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!wi(n,r)||!wi(i,s):!0}function Tp(t,e,n){var r=!1,i=cn,s=e.contextType;return typeof s=="object"&&s!==null?s=Je(s):(i=xe(e)?Cn:_e.current,r=e.contextTypes,s=(r=r!=null)?gr(t,i):cn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Cd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Mo.enqueueReplaceState(e,e.state,null)}function Rl(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Sp,bu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Je(s):(s=xe(e)?Cn:_e.current,i.context=gr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cl(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Mo.enqueueReplaceState(i,i.state,null),to(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function jr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Sp&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function hs(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Rd(t){var e=t._init;return e(t._payload)}function kp(t){function e(p,d){if(t){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!t)return null;for(;d!==null;)e(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=nn(p,d),p.index=0,p.sibling=null,p}function s(p,d,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,v){return d===null||d.tag!==6?(d=La(m,p.mode,v),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,v){var A=m.type;return A===Qn?c(p,d,m.props.children,v,m.key):d!==null&&(d.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Vt&&Rd(A)===d.type)?(v=i(d,m.props),v.ref=jr(p,d,m),v.return=p,v):(v=bs(m.type,m.key,m.props,null,p.mode,v),v.ref=jr(p,d,m),v.return=p,v)}function u(p,d,m,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=ba(m,p.mode,v),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,v,A){return d===null||d.tag!==7?(d=kn(m,p.mode,v,A),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=La(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ns:return m=bs(d.type,d.key,d.props,null,p.mode,m),m.ref=jr(p,null,d),m.return=p,m;case Gn:return d=ba(d,p.mode,m),d.return=p,d;case Vt:var v=d._init;return f(p,v(d._payload),m)}if(qr(d)||Lr(d))return d=kn(d,p.mode,m,null),d.return=p,d;hs(p,d)}return null}function g(p,d,m,v){var A=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return A!==null?null:a(p,d,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ns:return m.key===A?l(p,d,m,v):null;case Gn:return m.key===A?u(p,d,m,v):null;case Vt:return A=m._init,g(p,d,A(m._payload),v)}if(qr(m)||Lr(m))return A!==null?null:c(p,d,m,v,null);hs(p,m)}return null}function y(p,d,m,v,A){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(m)||null,a(d,p,""+v,A);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ns:return p=p.get(v.key===null?m:v.key)||null,l(d,p,v,A);case Gn:return p=p.get(v.key===null?m:v.key)||null,u(d,p,v,A);case Vt:var P=v._init;return y(p,d,m,P(v._payload),A)}if(qr(v)||Lr(v))return p=p.get(m)||null,c(d,p,v,A,null);hs(d,v)}return null}function w(p,d,m,v){for(var A=null,P=null,C=d,R=d=0,B=null;C!==null&&R<m.length;R++){C.index>R?(B=C,C=null):B=C.sibling;var S=g(p,C,m[R],v);if(S===null){C===null&&(C=B);break}t&&C&&S.alternate===null&&e(p,C),d=s(S,d,R),P===null?A=S:P.sibling=S,P=S,C=B}if(R===m.length)return n(p,C),$&&vn(p,R),A;if(C===null){for(;R<m.length;R++)C=f(p,m[R],v),C!==null&&(d=s(C,d,R),P===null?A=C:P.sibling=C,P=C);return $&&vn(p,R),A}for(C=r(p,C);R<m.length;R++)B=y(C,p,R,m[R],v),B!==null&&(t&&B.alternate!==null&&C.delete(B.key===null?R:B.key),d=s(B,d,R),P===null?A=B:P.sibling=B,P=B);return t&&C.forEach(function(se){return e(p,se)}),$&&vn(p,R),A}function _(p,d,m,v){var A=Lr(m);if(typeof A!="function")throw Error(I(150));if(m=A.call(m),m==null)throw Error(I(151));for(var P=A=null,C=d,R=d=0,B=null,S=m.next();C!==null&&!S.done;R++,S=m.next()){C.index>R?(B=C,C=null):B=C.sibling;var se=g(p,C,S.value,v);if(se===null){C===null&&(C=B);break}t&&C&&se.alternate===null&&e(p,C),d=s(se,d,R),P===null?A=se:P.sibling=se,P=se,C=B}if(S.done)return n(p,C),$&&vn(p,R),A;if(C===null){for(;!S.done;R++,S=m.next())S=f(p,S.value,v),S!==null&&(d=s(S,d,R),P===null?A=S:P.sibling=S,P=S);return $&&vn(p,R),A}for(C=r(p,C);!S.done;R++,S=m.next())S=y(C,p,R,S.value,v),S!==null&&(t&&S.alternate!==null&&C.delete(S.key===null?R:S.key),d=s(S,d,R),P===null?A=S:P.sibling=S,P=S);return t&&C.forEach(function(Wn){return e(p,Wn)}),$&&vn(p,R),A}function x(p,d,m,v){if(typeof m=="object"&&m!==null&&m.type===Qn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ns:e:{for(var A=m.key,P=d;P!==null;){if(P.key===A){if(A=m.type,A===Qn){if(P.tag===7){n(p,P.sibling),d=i(P,m.props.children),d.return=p,p=d;break e}}else if(P.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Vt&&Rd(A)===P.type){n(p,P.sibling),d=i(P,m.props),d.ref=jr(p,P,m),d.return=p,p=d;break e}n(p,P);break}else e(p,P);P=P.sibling}m.type===Qn?(d=kn(m.props.children,p.mode,v,m.key),d.return=p,p=d):(v=bs(m.type,m.key,m.props,null,p.mode,v),v.ref=jr(p,d,m),v.return=p,p=v)}return o(p);case Gn:e:{for(P=m.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else e(p,d);d=d.sibling}d=ba(m,p.mode,v),d.return=p,p=d}return o(p);case Vt:return P=m._init,x(p,d,P(m._payload),v)}if(qr(m))return w(p,d,m,v);if(Lr(m))return _(p,d,m,v);hs(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=La(m,p.mode,v),d.return=p,p=d),o(p)):n(p,d)}return x}var vr=kp(!0),Pp=kp(!1),Wi={},pt=hn(Wi),Ai=hn(Wi),Si=hn(Wi);function An(t){if(t===Wi)throw Error(I(174));return t}function Vu(t,e){switch(z(Si,e),z(Ai,t),z(pt,Wi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:al(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=al(e,t)}W(pt),z(pt,e)}function wr(){W(pt),W(Ai),W(Si)}function Cp(t){An(Si.current);var e=An(pt.current),n=al(e,t.type);e!==n&&(z(Ai,t),z(pt,n))}function Mu(t){Ai.current===t&&(W(pt),W(Ai))}var q=hn(0);function no(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ca=[];function Uu(){for(var t=0;t<Ca.length;t++)Ca[t]._workInProgressVersionPrimary=null;Ca.length=0}var xs=Dt.ReactCurrentDispatcher,Ra=Dt.ReactCurrentBatchConfig,xn=0,K=null,te=null,le=null,ro=!1,ti=!1,Ti=0,I0=0;function ge(){throw Error(I(321))}function ju(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!it(t[n],e[n]))return!1;return!0}function Fu(t,e,n,r,i,s){if(xn=s,K=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xs.current=t===null||t.memoizedState===null?k0:P0,t=n(r,i),ti){s=0;do{if(ti=!1,Ti=0,25<=s)throw Error(I(301));s+=1,le=te=null,e.updateQueue=null,xs.current=C0,t=n(r,i)}while(ti)}if(xs.current=io,e=te!==null&&te.next!==null,xn=0,le=te=K=null,ro=!1,e)throw Error(I(300));return t}function Bu(){var t=Ti!==0;return Ti=0,t}function ct(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?K.memoizedState=le=t:le=le.next=t,le}function Ye(){if(te===null){var t=K.alternate;t=t!==null?t.memoizedState:null}else t=te.next;var e=le===null?K.memoizedState:le.next;if(e!==null)le=e,te=t;else{if(t===null)throw Error(I(310));te=t,t={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},le===null?K.memoizedState=le=t:le=le.next=t}return le}function ki(t,e){return typeof e=="function"?e(t):e}function xa(t){var e=Ye(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((xn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,K.lanes|=c,Nn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,it(r,e.memoizedState)||(Ce=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,K.lanes|=s,Nn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Na(t){var e=Ye(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);it(s,e.memoizedState)||(Ce=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Rp(){}function xp(t,e){var n=K,r=Ye(),i=e(),s=!it(r.memoizedState,i);if(s&&(r.memoizedState=i,Ce=!0),r=r.queue,zu(Dp.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Pi(9,Op.bind(null,n,r,i,e),void 0,null),ue===null)throw Error(I(349));xn&30||Np(n,e,i)}return i}function Np(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=K.updateQueue,e===null?(e={lastEffect:null,stores:null},K.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Op(t,e,n,r){e.value=n,e.getSnapshot=r,Lp(e)&&bp(t)}function Dp(t,e,n){return n(function(){Lp(e)&&bp(t)})}function Lp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!it(t,n)}catch{return!0}}function bp(t){var e=Ct(t,1);e!==null&&rt(e,t,1,-1)}function xd(t){var e=ct();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:t},e.queue=t,t=t.dispatch=T0.bind(null,K,t),[e.memoizedState,t]}function Pi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=K.updateQueue,e===null?(e={lastEffect:null,stores:null},K.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Vp(){return Ye().memoizedState}function Ns(t,e,n,r){var i=ct();K.flags|=t,i.memoizedState=Pi(1|e,n,void 0,r===void 0?null:r)}function Uo(t,e,n,r){var i=Ye();r=r===void 0?null:r;var s=void 0;if(te!==null){var o=te.memoizedState;if(s=o.destroy,r!==null&&ju(r,o.deps)){i.memoizedState=Pi(e,n,s,r);return}}K.flags|=t,i.memoizedState=Pi(1|e,n,s,r)}function Nd(t,e){return Ns(8390656,8,t,e)}function zu(t,e){return Uo(2048,8,t,e)}function Mp(t,e){return Uo(4,2,t,e)}function Up(t,e){return Uo(4,4,t,e)}function jp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Fp(t,e,n){return n=n!=null?n.concat([t]):null,Uo(4,4,jp.bind(null,e,t),n)}function Hu(){}function Bp(t,e){var n=Ye();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ju(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function zp(t,e){var n=Ye();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ju(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Hp(t,e,n){return xn&21?(it(n,e)||(n=qh(),K.lanes|=n,Nn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ce=!0),t.memoizedState=n)}function A0(t,e){var n=F;F=n!==0&&4>n?n:4,t(!0);var r=Ra.transition;Ra.transition={};try{t(!1),e()}finally{F=n,Ra.transition=r}}function Wp(){return Ye().memoizedState}function S0(t,e,n){var r=tn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$p(t))qp(e,n);else if(n=Ip(t,e,n,r),n!==null){var i=Ae();rt(n,t,r,i),Kp(n,e,r)}}function T0(t,e,n){var r=tn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($p(t))qp(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,it(a,o)){var l=e.interleaved;l===null?(i.next=i,Lu(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Ip(t,e,i,r),n!==null&&(i=Ae(),rt(n,t,r,i),Kp(n,e,r))}}function $p(t){var e=t.alternate;return t===K||e!==null&&e===K}function qp(t,e){ti=ro=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Kp(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_u(t,n)}}var io={readContext:Je,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},k0={readContext:Je,useCallback:function(t,e){return ct().memoizedState=[t,e===void 0?null:e],t},useContext:Je,useEffect:Nd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ns(4194308,4,jp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ns(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ns(4,2,t,e)},useMemo:function(t,e){var n=ct();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ct();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=S0.bind(null,K,t),[r.memoizedState,t]},useRef:function(t){var e=ct();return t={current:t},e.memoizedState=t},useState:xd,useDebugValue:Hu,useDeferredValue:function(t){return ct().memoizedState=t},useTransition:function(){var t=xd(!1),e=t[0];return t=A0.bind(null,t[1]),ct().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=K,i=ct();if($){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),ue===null)throw Error(I(349));xn&30||Np(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Nd(Dp.bind(null,r,s,t),[t]),r.flags|=2048,Pi(9,Op.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ct(),e=ue.identifierPrefix;if($){var n=It,r=Et;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ti++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=I0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},P0={readContext:Je,useCallback:Bp,useContext:Je,useEffect:zu,useImperativeHandle:Fp,useInsertionEffect:Mp,useLayoutEffect:Up,useMemo:zp,useReducer:xa,useRef:Vp,useState:function(){return xa(ki)},useDebugValue:Hu,useDeferredValue:function(t){var e=Ye();return Hp(e,te.memoizedState,t)},useTransition:function(){var t=xa(ki)[0],e=Ye().memoizedState;return[t,e]},useMutableSource:Rp,useSyncExternalStore:xp,useId:Wp,unstable_isNewReconciler:!1},C0={readContext:Je,useCallback:Bp,useContext:Je,useEffect:zu,useImperativeHandle:Fp,useInsertionEffect:Mp,useLayoutEffect:Up,useMemo:zp,useReducer:Na,useRef:Vp,useState:function(){return Na(ki)},useDebugValue:Hu,useDeferredValue:function(t){var e=Ye();return te===null?e.memoizedState=t:Hp(e,te.memoizedState,t)},useTransition:function(){var t=Na(ki)[0],e=Ye().memoizedState;return[t,e]},useMutableSource:Rp,useSyncExternalStore:xp,useId:Wp,unstable_isNewReconciler:!1};function _r(t,e){try{var n="",r=e;do n+=nv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Oa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xl(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var R0=typeof WeakMap=="function"?WeakMap:Map;function Gp(t,e,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){oo||(oo=!0,Fl=r),xl(t,e)},n}function Qp(t,e,n){n=Tt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xl(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xl(t,e),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Od(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new R0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=H0.bind(null,t,e,n),e.then(t,t))}function Dd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ld(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tt(-1,1),e.tag=2,Zt(n,e,1))),n.lanes|=1),t)}var x0=Dt.ReactCurrentOwner,Ce=!1;function Ie(t,e,n,r){e.child=t===null?Pp(e,null,n,r):vr(e,t.child,n,r)}function bd(t,e,n,r,i){n=n.render;var s=e.ref;return dr(e,i),r=Fu(t,e,n,r,s,i),n=Bu(),t!==null&&!Ce?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rt(t,e,i)):($&&n&&Cu(e),e.flags|=1,Ie(t,e,r,i),e.child)}function Vd(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Yu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Jp(t,e,s,r,i)):(t=bs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wi,n(o,r)&&t.ref===e.ref)return Rt(t,e,i)}return e.flags|=1,t=nn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Jp(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(wi(s,r)&&t.ref===e.ref)if(Ce=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ce=!0);else return e.lanes=t.lanes,Rt(t,e,i)}return Nl(t,e,n,r,i)}function Yp(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(sr,Le),Le|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,z(sr,Le),Le|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,z(sr,Le),Le|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,z(sr,Le),Le|=r;return Ie(t,e,i,n),e.child}function Xp(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nl(t,e,n,r,i){var s=xe(n)?Cn:_e.current;return s=gr(e,s),dr(e,i),n=Fu(t,e,n,r,s,i),r=Bu(),t!==null&&!Ce?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rt(t,e,i)):($&&r&&Cu(e),e.flags|=1,Ie(t,e,n,i),e.child)}function Md(t,e,n,r,i){if(xe(n)){var s=!0;Js(e)}else s=!1;if(dr(e,i),e.stateNode===null)Os(t,e),Tp(e,n,r),Rl(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=xe(n)?Cn:_e.current,u=gr(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Cd(e,o,r,u),Mt=!1;var g=e.memoizedState;o.state=g,to(e,r,o,i),l=e.memoizedState,a!==r||g!==l||Re.current||Mt?(typeof c=="function"&&(Cl(e,n,c,r),l=e.memoizedState),(a=Mt||Pd(e,n,a,r,g,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Ap(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ze(e.type,a),o.props=u,f=e.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Je(l):(l=xe(n)?Cn:_e.current,l=gr(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||g!==l)&&Cd(e,o,r,l),Mt=!1,g=e.memoizedState,o.state=g,to(e,r,o,i);var w=e.memoizedState;a!==f||g!==w||Re.current||Mt?(typeof y=="function"&&(Cl(e,n,y,r),w=e.memoizedState),(u=Mt||Pd(e,n,u,r,g,w,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Ol(t,e,n,r,s,i)}function Ol(t,e,n,r,i,s){Xp(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Id(e,n,!1),Rt(t,e,s);r=e.stateNode,x0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=vr(e,t.child,null,s),e.child=vr(e,null,a,s)):Ie(t,e,a,s),e.memoizedState=r.state,i&&Id(e,n,!0),e.child}function Zp(t){var e=t.stateNode;e.pendingContext?Ed(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ed(t,e.context,!1),Vu(t,e.containerInfo)}function Ud(t,e,n,r,i){return yr(),xu(i),e.flags|=256,Ie(t,e,n,r),e.child}var Dl={dehydrated:null,treeContext:null,retryLane:0};function Ll(t){return{baseLanes:t,cachePool:null,transitions:null}}function em(t,e,n){var r=e.pendingProps,i=q.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),z(q,i&1),t===null)return kl(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bo(o,r,0,null),t=kn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ll(n),e.memoizedState=Dl,t):Wu(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return N0(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=nn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=nn(a,s):(s=kn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ll(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Dl,r}return s=t.child,t=s.sibling,r=nn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Wu(t,e){return e=Bo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ps(t,e,n,r){return r!==null&&xu(r),vr(e,t.child,null,n),t=Wu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function N0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Oa(Error(I(422))),ps(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Bo({mode:"visible",children:r.children},i,0,null),s=kn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&vr(e,t.child,null,o),e.child.memoizedState=Ll(o),e.memoizedState=Dl,s);if(!(e.mode&1))return ps(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=Oa(s,r,void 0),ps(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ce||a){if(r=ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ct(t,i),rt(r,t,i,-1))}return Ju(),r=Oa(Error(I(421))),ps(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=W0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Me=Xt(i.nextSibling),Ue=e,$=!0,tt=null,t!==null&&($e[qe++]=Et,$e[qe++]=It,$e[qe++]=Rn,Et=t.id,It=t.overflow,Rn=e),e=Wu(e,r.children),e.flags|=4096,e)}function jd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Pl(t.return,e,n)}function Da(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function tm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ie(t,e,r.children,n),r=q.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jd(t,n,e);else if(t.tag===19)jd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(z(q,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&no(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Da(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&no(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Da(e,!0,n,null,s);break;case"together":Da(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Os(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Nn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=nn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function O0(t,e,n){switch(e.tag){case 3:Zp(e),yr();break;case 5:Cp(e);break;case 1:xe(e.type)&&Js(e);break;case 4:Vu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;z(Zs,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(z(q,q.current&1),e.flags|=128,null):n&e.child.childLanes?em(t,e,n):(z(q,q.current&1),t=Rt(t,e,n),t!==null?t.sibling:null);z(q,q.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return tm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(q,q.current),r)break;return null;case 22:case 23:return e.lanes=0,Yp(t,e,n)}return Rt(t,e,n)}var nm,bl,rm,im;nm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bl=function(){};rm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,An(pt.current);var s=null;switch(n){case"input":i=rl(t,i),r=rl(t,r),s=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),s=[];break;case"textarea":i=ol(t,i),r=ol(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Gs)}ll(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};im=function(t,e,n,r){n!==r&&(e.flags|=4)};function Fr(t,e){if(!$)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function D0(t,e,n){var r=e.pendingProps;switch(Ru(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(e),null;case 1:return xe(e.type)&&Qs(),ye(e),null;case 3:return r=e.stateNode,wr(),W(Re),W(_e),Uu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,tt!==null&&(Hl(tt),tt=null))),bl(t,e),ye(e),null;case 5:Mu(e);var i=An(Si.current);if(n=e.type,t!==null&&e.stateNode!=null)rm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return ye(e),null}if(t=An(pt.current),fs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[dt]=e,r[Ii]=s,t=(e.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Gr.length;i++)H(Gr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Gc(r,s),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},H("invalid",r);break;case"textarea":Jc(r,s),H("invalid",r)}ll(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ds(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ds(r.textContent,a,t),i=["children",""+a]):fi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":rs(r),Qc(r,s,!0);break;case"textarea":rs(r),Yc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gs)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Nh(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dt]=e,t[Ii]=r,nm(t,e,!1,!1),e.stateNode=t;e:{switch(o=ul(n,r),n){case"dialog":H("cancel",t),H("close",t),i=r;break;case"iframe":case"object":case"embed":H("load",t),i=r;break;case"video":case"audio":for(i=0;i<Gr.length;i++)H(Gr[i],t);i=r;break;case"source":H("error",t),i=r;break;case"img":case"image":case"link":H("error",t),H("load",t),i=r;break;case"details":H("toggle",t),i=r;break;case"input":Gc(t,r),i=rl(t,r),H("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),H("invalid",t);break;case"textarea":Jc(t,r),i=ol(t,r),H("invalid",t);break;default:i=r}ll(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Lh(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Oh(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&hi(t,l):typeof l=="number"&&hi(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&H("scroll",t):l!=null&&pu(t,s,l,o))}switch(n){case"input":rs(t),Qc(t,r,!1);break;case"textarea":rs(t),Yc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+un(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ar(t,!!r.multiple,s,!1):r.defaultValue!=null&&ar(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Gs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ye(e),null;case 6:if(t&&e.stateNode!=null)im(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=An(Si.current),An(pt.current),fs(e)){if(r=e.stateNode,n=e.memoizedProps,r[dt]=e,(s=r.nodeValue!==n)&&(t=Ue,t!==null))switch(t.tag){case 3:ds(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ds(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dt]=e,e.stateNode=r}return ye(e),null;case 13:if(W(q),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($&&Me!==null&&e.mode&1&&!(e.flags&128))Ep(),yr(),e.flags|=98560,s=!1;else if(s=fs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[dt]=e}else yr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ye(e),s=!1}else tt!==null&&(Hl(tt),tt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||q.current&1?ie===0&&(ie=3):Ju())),e.updateQueue!==null&&(e.flags|=4),ye(e),null);case 4:return wr(),bl(t,e),t===null&&_i(e.stateNode.containerInfo),ye(e),null;case 10:return Du(e.type._context),ye(e),null;case 17:return xe(e.type)&&Qs(),ye(e),null;case 19:if(W(q),s=e.memoizedState,s===null)return ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Fr(s,!1);else{if(ie!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=no(t),o!==null){for(e.flags|=128,Fr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return z(q,q.current&1|2),e.child}t=t.sibling}s.tail!==null&&X()>Er&&(e.flags|=128,r=!0,Fr(s,!1),e.lanes=4194304)}else{if(!r)if(t=no(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$)return ye(e),null}else 2*X()-s.renderingStartTime>Er&&n!==1073741824&&(e.flags|=128,r=!0,Fr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=X(),e.sibling=null,n=q.current,z(q,r?n&1|2:n&1),e):(ye(e),null);case 22:case 23:return Qu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Le&1073741824&&(ye(e),e.subtreeFlags&6&&(e.flags|=8192)):ye(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function L0(t,e){switch(Ru(e),e.tag){case 1:return xe(e.type)&&Qs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return wr(),W(Re),W(_e),Uu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Mu(e),null;case 13:if(W(q),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));yr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return W(q),null;case 4:return wr(),null;case 10:return Du(e.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var ms=!1,we=!1,b0=typeof WeakSet=="function"?WeakSet:Set,T=null;function ir(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(t,e,r)}else n.current=null}function Vl(t,e,n){try{n()}catch(r){Q(t,e,r)}}var Fd=!1;function V0(t,e){if(wl=$s,t=lp(),Pu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,g=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)g=f,f=y;for(;;){if(f===t)break t;if(g===n&&++u===i&&(a=o),g===s&&++c===r&&(l=o),(y=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_l={focusedElem:t,selectionRange:n},$s=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,x=w.memoizedState,p=e.stateNode,d=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:Ze(e.type,_),x);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(v){Q(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return w=Fd,Fd=!1,w}function ni(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Vl(e,n,s)}i=i.next}while(i!==r)}}function jo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ml(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sm(t){var e=t.alternate;e!==null&&(t.alternate=null,sm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dt],delete e[Ii],delete e[Al],delete e[v0],delete e[w0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function om(t){return t.tag===5||t.tag===3||t.tag===4}function Bd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||om(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ul(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gs));else if(r!==4&&(t=t.child,t!==null))for(Ul(t,e,n),t=t.sibling;t!==null;)Ul(t,e,n),t=t.sibling}function jl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jl(t,e,n),t=t.sibling;t!==null;)jl(t,e,n),t=t.sibling}var de=null,et=!1;function Lt(t,e,n){for(n=n.child;n!==null;)am(t,e,n),n=n.sibling}function am(t,e,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(No,n)}catch{}switch(n.tag){case 5:we||ir(n,e);case 6:var r=de,i=et;de=null,Lt(t,e,n),de=r,et=i,de!==null&&(et?(t=de,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(et?(t=de,n=n.stateNode,t.nodeType===8?ka(t.parentNode,n):t.nodeType===1&&ka(t,n),yi(t)):ka(de,n.stateNode));break;case 4:r=de,i=et,de=n.stateNode.containerInfo,et=!0,Lt(t,e,n),de=r,et=i;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vl(n,e,o),i=i.next}while(i!==r)}Lt(t,e,n);break;case 1:if(!we&&(ir(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,e,a)}Lt(t,e,n);break;case 21:Lt(t,e,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,Lt(t,e,n),we=r):Lt(t,e,n);break;default:Lt(t,e,n)}}function zd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new b0),e.forEach(function(r){var i=$0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xe(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:de=a.stateNode,et=!1;break e;case 3:de=a.stateNode.containerInfo,et=!0;break e;case 4:de=a.stateNode.containerInfo,et=!0;break e}a=a.return}if(de===null)throw Error(I(160));am(s,o,i),de=null,et=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Q(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lm(e,t),e=e.sibling}function lm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xe(e,t),lt(t),r&4){try{ni(3,t,t.return),jo(3,t)}catch(_){Q(t,t.return,_)}try{ni(5,t,t.return)}catch(_){Q(t,t.return,_)}}break;case 1:Xe(e,t),lt(t),r&512&&n!==null&&ir(n,n.return);break;case 5:if(Xe(e,t),lt(t),r&512&&n!==null&&ir(n,n.return),t.flags&32){var i=t.stateNode;try{hi(i,"")}catch(_){Q(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Rh(i,s),ul(a,o);var u=ul(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Lh(i,f):c==="dangerouslySetInnerHTML"?Oh(i,f):c==="children"?hi(i,f):pu(i,c,f,u)}switch(a){case"input":il(i,s);break;case"textarea":xh(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?ar(i,!!s.multiple,y,!1):g!==!!s.multiple&&(s.defaultValue!=null?ar(i,!!s.multiple,s.defaultValue,!0):ar(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ii]=s}catch(_){Q(t,t.return,_)}}break;case 6:if(Xe(e,t),lt(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Q(t,t.return,_)}}break;case 3:if(Xe(e,t),lt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yi(e.containerInfo)}catch(_){Q(t,t.return,_)}break;case 4:Xe(e,t),lt(t);break;case 13:Xe(e,t),lt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ku=X())),r&4&&zd(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(we=(u=we)||c,Xe(e,t),we=u):Xe(e,t),lt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(T=t,c=t.child;c!==null;){for(f=T=c;T!==null;){switch(g=T,y=g.child,g.tag){case 0:case 11:case 14:case 15:ni(4,g,g.return);break;case 1:ir(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(_){Q(r,n,_)}}break;case 5:ir(g,g.return);break;case 22:if(g.memoizedState!==null){Wd(f);continue}}y!==null?(y.return=g,T=y):Wd(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Dh("display",o))}catch(_){Q(t,t.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){Q(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Xe(e,t),lt(t),r&4&&zd(t);break;case 21:break;default:Xe(e,t),lt(t)}}function lt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(om(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(hi(i,""),r.flags&=-33);var s=Bd(t);jl(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Bd(t);Ul(t,a,o);break;default:throw Error(I(161))}}catch(l){Q(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function M0(t,e,n){T=t,um(t)}function um(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ms;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||we;a=ms;var u=we;if(ms=o,(we=l)&&!u)for(T=i;T!==null;)o=T,l=o.child,o.tag===22&&o.memoizedState!==null?$d(i):l!==null?(l.return=o,T=l):$d(i);for(;s!==null;)T=s,um(s),s=s.sibling;T=i,ms=a,we=u}Hd(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):Hd(t)}}function Hd(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:we||jo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!we)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ze(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&yi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}we||e.flags&512&&Ml(e)}catch(g){Q(e,e.return,g)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function Wd(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function $d(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{jo(4,e)}catch(l){Q(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Q(e,i,l)}}var s=e.return;try{Ml(e)}catch(l){Q(e,s,l)}break;case 5:var o=e.return;try{Ml(e)}catch(l){Q(e,o,l)}}}catch(l){Q(e,e.return,l)}if(e===t){T=null;break}var a=e.sibling;if(a!==null){a.return=e.return,T=a;break}T=e.return}}var U0=Math.ceil,so=Dt.ReactCurrentDispatcher,$u=Dt.ReactCurrentOwner,Ge=Dt.ReactCurrentBatchConfig,U=0,ue=null,Z=null,pe=0,Le=0,sr=hn(0),ie=0,Ci=null,Nn=0,Fo=0,qu=0,ri=null,Pe=null,Ku=0,Er=1/0,vt=null,oo=!1,Fl=null,en=null,gs=!1,qt=null,ao=0,ii=0,Bl=null,Ds=-1,Ls=0;function Ae(){return U&6?X():Ds!==-1?Ds:Ds=X()}function tn(t){return t.mode&1?U&2&&pe!==0?pe&-pe:E0.transition!==null?(Ls===0&&(Ls=qh()),Ls):(t=F,t!==0||(t=window.event,t=t===void 0?16:Zh(t.type)),t):1}function rt(t,e,n,r){if(50<ii)throw ii=0,Bl=null,Error(I(185));Bi(t,n,r),(!(U&2)||t!==ue)&&(t===ue&&(!(U&2)&&(Fo|=n),ie===4&&Ft(t,pe)),Ne(t,r),n===1&&U===0&&!(e.mode&1)&&(Er=X()+500,Vo&&pn()))}function Ne(t,e){var n=t.callbackNode;Ev(t,e);var r=Ws(t,t===ue?pe:0);if(r===0)n!==null&&ed(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ed(n),e===1)t.tag===0?_0(qd.bind(null,t)):vp(qd.bind(null,t)),g0(function(){!(U&6)&&pn()}),n=null;else{switch(Kh(r)){case 1:n=wu;break;case 4:n=Wh;break;case 16:n=Hs;break;case 536870912:n=$h;break;default:n=Hs}n=ym(n,cm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function cm(t,e){if(Ds=-1,Ls=0,U&6)throw Error(I(327));var n=t.callbackNode;if(fr()&&t.callbackNode!==n)return null;var r=Ws(t,t===ue?pe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=lo(t,r);else{e=r;var i=U;U|=2;var s=fm();(ue!==t||pe!==e)&&(vt=null,Er=X()+500,Tn(t,e));do try{B0();break}catch(a){dm(t,a)}while(1);Ou(),so.current=s,U=i,Z!==null?e=0:(ue=null,pe=0,e=ie)}if(e!==0){if(e===2&&(i=pl(t),i!==0&&(r=i,e=zl(t,i))),e===1)throw n=Ci,Tn(t,0),Ft(t,r),Ne(t,X()),n;if(e===6)Ft(t,r);else{if(i=t.current.alternate,!(r&30)&&!j0(i)&&(e=lo(t,r),e===2&&(s=pl(t),s!==0&&(r=s,e=zl(t,s))),e===1))throw n=Ci,Tn(t,0),Ft(t,r),Ne(t,X()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:wn(t,Pe,vt);break;case 3:if(Ft(t,r),(r&130023424)===r&&(e=Ku+500-X(),10<e)){if(Ws(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ae(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Il(wn.bind(null,t,Pe,vt),e);break}wn(t,Pe,vt);break;case 4:if(Ft(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-nt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*U0(r/1960))-r,10<r){t.timeoutHandle=Il(wn.bind(null,t,Pe,vt),r);break}wn(t,Pe,vt);break;case 5:wn(t,Pe,vt);break;default:throw Error(I(329))}}}return Ne(t,X()),t.callbackNode===n?cm.bind(null,t):null}function zl(t,e){var n=ri;return t.current.memoizedState.isDehydrated&&(Tn(t,e).flags|=256),t=lo(t,e),t!==2&&(e=Pe,Pe=n,e!==null&&Hl(e)),t}function Hl(t){Pe===null?Pe=t:Pe.push.apply(Pe,t)}function j0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!it(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ft(t,e){for(e&=~qu,e&=~Fo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-nt(e),r=1<<n;t[n]=-1,e&=~r}}function qd(t){if(U&6)throw Error(I(327));fr();var e=Ws(t,0);if(!(e&1))return Ne(t,X()),null;var n=lo(t,e);if(t.tag!==0&&n===2){var r=pl(t);r!==0&&(e=r,n=zl(t,r))}if(n===1)throw n=Ci,Tn(t,0),Ft(t,e),Ne(t,X()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wn(t,Pe,vt),Ne(t,X()),null}function Gu(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(Er=X()+500,Vo&&pn())}}function On(t){qt!==null&&qt.tag===0&&!(U&6)&&fr();var e=U;U|=1;var n=Ge.transition,r=F;try{if(Ge.transition=null,F=1,t)return t()}finally{F=r,Ge.transition=n,U=e,!(U&6)&&pn()}}function Qu(){Le=sr.current,W(sr)}function Tn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,m0(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(Ru(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qs();break;case 3:wr(),W(Re),W(_e),Uu();break;case 5:Mu(r);break;case 4:wr();break;case 13:W(q);break;case 19:W(q);break;case 10:Du(r.type._context);break;case 22:case 23:Qu()}n=n.return}if(ue=t,Z=t=nn(t.current,null),pe=Le=e,ie=0,Ci=null,qu=Fo=Nn=0,Pe=ri=null,In!==null){for(e=0;e<In.length;e++)if(n=In[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}In=null}return t}function dm(t,e){do{var n=Z;try{if(Ou(),xs.current=io,ro){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ro=!1}if(xn=0,le=te=K=null,ti=!1,Ti=0,$u.current=null,n===null||n.return===null){ie=1,Ci=e,Z=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Dd(o);if(y!==null){y.flags&=-257,Ld(y,o,a,s,e),y.mode&1&&Od(s,u,e),e=y,l=u;var w=e.updateQueue;if(w===null){var _=new Set;_.add(l),e.updateQueue=_}else w.add(l);break e}else{if(!(e&1)){Od(s,u,e),Ju();break e}l=Error(I(426))}}else if($&&a.mode&1){var x=Dd(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Ld(x,o,a,s,e),xu(_r(l,a));break e}}s=l=_r(l,a),ie!==4&&(ie=2),ri===null?ri=[s]:ri.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Gp(s,l,e);Td(s,p);break e;case 1:a=l;var d=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(en===null||!en.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=Qp(s,a,e);Td(s,v);break e}}s=s.return}while(s!==null)}pm(n)}catch(A){e=A,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(1)}function fm(){var t=so.current;return so.current=io,t===null?io:t}function Ju(){(ie===0||ie===3||ie===2)&&(ie=4),ue===null||!(Nn&268435455)&&!(Fo&268435455)||Ft(ue,pe)}function lo(t,e){var n=U;U|=2;var r=fm();(ue!==t||pe!==e)&&(vt=null,Tn(t,e));do try{F0();break}catch(i){dm(t,i)}while(1);if(Ou(),U=n,so.current=r,Z!==null)throw Error(I(261));return ue=null,pe=0,ie}function F0(){for(;Z!==null;)hm(Z)}function B0(){for(;Z!==null&&!fv();)hm(Z)}function hm(t){var e=gm(t.alternate,t,Le);t.memoizedProps=t.pendingProps,e===null?pm(t):Z=e,$u.current=null}function pm(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=L0(n,e),n!==null){n.flags&=32767,Z=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ie=6,Z=null;return}}else if(n=D0(n,e,Le),n!==null){Z=n;return}if(e=e.sibling,e!==null){Z=e;return}Z=e=t}while(e!==null);ie===0&&(ie=5)}function wn(t,e,n){var r=F,i=Ge.transition;try{Ge.transition=null,F=1,z0(t,e,n,r)}finally{Ge.transition=i,F=r}return null}function z0(t,e,n,r){do fr();while(qt!==null);if(U&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Iv(t,s),t===ue&&(Z=ue=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gs||(gs=!0,ym(Hs,function(){return fr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ge.transition,Ge.transition=null;var o=F;F=1;var a=U;U|=4,$u.current=null,V0(t,n),lm(n,t),l0(_l),$s=!!wl,_l=wl=null,t.current=n,M0(n),hv(),U=a,F=o,Ge.transition=s}else t.current=n;if(gs&&(gs=!1,qt=t,ao=i),s=t.pendingLanes,s===0&&(en=null),gv(n.stateNode),Ne(t,X()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,t=Fl,Fl=null,t;return ao&1&&t.tag!==0&&fr(),s=t.pendingLanes,s&1?t===Bl?ii++:(ii=0,Bl=t):ii=0,pn(),null}function fr(){if(qt!==null){var t=Kh(ao),e=Ge.transition,n=F;try{if(Ge.transition=null,F=16>t?16:t,qt===null)var r=!1;else{if(t=qt,qt=null,ao=0,U&6)throw Error(I(331));var i=U;for(U|=4,T=t.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:ni(8,c,s)}var f=c.child;if(f!==null)f.return=c,T=f;else for(;T!==null;){c=T;var g=c.sibling,y=c.return;if(sm(c),c===u){T=null;break}if(g!==null){g.return=y,T=g;break}T=y}}}var w=s.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var x=_.sibling;_.sibling=null,_=x}while(_!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ni(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,T=p;break e}T=s.return}}var d=t.current;for(T=d;T!==null;){o=T;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,T=m;else e:for(o=d;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:jo(9,a)}}catch(A){Q(a,a.return,A)}if(a===o){T=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,T=v;break e}T=a.return}}if(U=i,pn(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(No,t)}catch{}r=!0}return r}finally{F=n,Ge.transition=e}}return!1}function Kd(t,e,n){e=_r(n,e),e=Gp(t,e,1),t=Zt(t,e,1),e=Ae(),t!==null&&(Bi(t,1,e),Ne(t,e))}function Q(t,e,n){if(t.tag===3)Kd(t,t,n);else for(;e!==null;){if(e.tag===3){Kd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){t=_r(n,t),t=Qp(e,t,1),e=Zt(e,t,1),t=Ae(),e!==null&&(Bi(e,1,t),Ne(e,t));break}}e=e.return}}function H0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ae(),t.pingedLanes|=t.suspendedLanes&n,ue===t&&(pe&n)===n&&(ie===4||ie===3&&(pe&130023424)===pe&&500>X()-Ku?Tn(t,0):qu|=n),Ne(t,e)}function mm(t,e){e===0&&(t.mode&1?(e=os,os<<=1,!(os&130023424)&&(os=4194304)):e=1);var n=Ae();t=Ct(t,e),t!==null&&(Bi(t,e,n),Ne(t,n))}function W0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mm(t,n)}function $0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),mm(t,n)}var gm;gm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Re.current)Ce=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ce=!1,O0(t,e,n);Ce=!!(t.flags&131072)}else Ce=!1,$&&e.flags&1048576&&wp(e,Xs,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Os(t,e),t=e.pendingProps;var i=gr(e,_e.current);dr(e,n),i=Fu(null,e,r,t,i,n);var s=Bu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xe(r)?(s=!0,Js(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bu(e),i.updater=Mo,e.stateNode=i,i._reactInternals=e,Rl(e,r,t,n),e=Ol(null,e,r,!0,s,n)):(e.tag=0,$&&s&&Cu(e),Ie(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Os(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=K0(r),t=Ze(r,t),i){case 0:e=Nl(null,e,r,t,n);break e;case 1:e=Md(null,e,r,t,n);break e;case 11:e=bd(null,e,r,t,n);break e;case 14:e=Vd(null,e,r,Ze(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ze(r,i),Nl(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ze(r,i),Md(t,e,r,i,n);case 3:e:{if(Zp(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Ap(t,e),to(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=_r(Error(I(423)),e),e=Ud(t,e,r,n,i);break e}else if(r!==i){i=_r(Error(I(424)),e),e=Ud(t,e,r,n,i);break e}else for(Me=Xt(e.stateNode.containerInfo.firstChild),Ue=e,$=!0,tt=null,n=Pp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yr(),r===i){e=Rt(t,e,n);break e}Ie(t,e,r,n)}e=e.child}return e;case 5:return Cp(e),t===null&&kl(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,El(r,i)?o=null:s!==null&&El(r,s)&&(e.flags|=32),Xp(t,e),Ie(t,e,o,n),e.child;case 6:return t===null&&kl(e),null;case 13:return em(t,e,n);case 4:return Vu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=vr(e,null,r,n):Ie(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ze(r,i),bd(t,e,r,i,n);case 7:return Ie(t,e,e.pendingProps,n),e.child;case 8:return Ie(t,e,e.pendingProps.children,n),e.child;case 12:return Ie(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,z(Zs,r._currentValue),r._currentValue=o,s!==null)if(it(s.value,o)){if(s.children===i.children&&!Re.current){e=Rt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Tt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Pl(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Pl(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ie(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,dr(e,n),i=Je(i),r=r(i),e.flags|=1,Ie(t,e,r,n),e.child;case 14:return r=e.type,i=Ze(r,e.pendingProps),i=Ze(r.type,i),Vd(t,e,r,i,n);case 15:return Jp(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ze(r,i),Os(t,e),e.tag=1,xe(r)?(t=!0,Js(e)):t=!1,dr(e,n),Tp(e,r,i),Rl(e,r,i,n),Ol(null,e,r,!0,t,n);case 19:return tm(t,e,n);case 22:return Yp(t,e,n)}throw Error(I(156,e.tag))};function ym(t,e){return Hh(t,e)}function q0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(t,e,n,r){return new q0(t,e,n,r)}function Yu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function K0(t){if(typeof t=="function")return Yu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gu)return 11;if(t===yu)return 14}return 2}function nn(t,e){var n=t.alternate;return n===null?(n=Ke(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Yu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qn:return kn(n.children,i,s,e);case mu:o=8,i|=8;break;case Za:return t=Ke(12,n,e,i|2),t.elementType=Za,t.lanes=s,t;case el:return t=Ke(13,n,e,i),t.elementType=el,t.lanes=s,t;case tl:return t=Ke(19,n,e,i),t.elementType=tl,t.lanes=s,t;case kh:return Bo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Sh:o=10;break e;case Th:o=9;break e;case gu:o=11;break e;case yu:o=14;break e;case Vt:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=Ke(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function kn(t,e,n,r){return t=Ke(7,t,r,e),t.lanes=n,t}function Bo(t,e,n,r){return t=Ke(22,t,r,e),t.elementType=kh,t.lanes=n,t.stateNode={isHidden:!1},t}function La(t,e,n){return t=Ke(6,t,null,e),t.lanes=n,t}function ba(t,e,n){return e=Ke(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function G0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ma(0),this.expirationTimes=ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ma(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xu(t,e,n,r,i,s,o,a,l){return t=new G0(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ke(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bu(s),t}function Q0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function vm(t){if(!t)return cn;t=t._reactInternals;e:{if(Fn(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(xe(n))return yp(t,n,e)}return e}function wm(t,e,n,r,i,s,o,a,l){return t=Xu(n,r,!0,t,i,s,o,a,l),t.context=vm(null),n=t.current,r=Ae(),i=tn(n),s=Tt(r,i),s.callback=e??null,Zt(n,s,i),t.current.lanes=i,Bi(t,i,r),Ne(t,r),t}function zo(t,e,n,r){var i=e.current,s=Ae(),o=tn(i);return n=vm(n),e.context===null?e.context=n:e.pendingContext=n,e=Tt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zt(i,e,o),t!==null&&(rt(t,i,o,s),Rs(t,i,o)),o}function uo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zu(t,e){Gd(t,e),(t=t.alternate)&&Gd(t,e)}function J0(){return null}var _m=typeof reportError=="function"?reportError:function(t){console.error(t)};function ec(t){this._internalRoot=t}Ho.prototype.render=ec.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));zo(t,e,null,null)};Ho.prototype.unmount=ec.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;On(function(){zo(null,t,null,null)}),e[Pt]=null}};function Ho(t){this._internalRoot=t}Ho.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jh();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jt.length&&e!==0&&e<jt[n].priority;n++);jt.splice(n,0,t),n===0&&Xh(t)}};function tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qd(){}function Y0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=uo(o);s.call(u)}}var o=wm(e,r,t,0,null,!1,!1,"",Qd);return t._reactRootContainer=o,t[Pt]=o.current,_i(t.nodeType===8?t.parentNode:t),On(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=uo(l);a.call(u)}}var l=Xu(t,0,!1,null,null,!1,!1,"",Qd);return t._reactRootContainer=l,t[Pt]=l.current,_i(t.nodeType===8?t.parentNode:t),On(function(){zo(e,l,n,r)}),l}function $o(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=uo(o);a.call(l)}}zo(e,o,t,i)}else o=Y0(n,e,t,i,r);return uo(o)}Gh=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Kr(e.pendingLanes);n!==0&&(_u(e,n|1),Ne(e,X()),!(U&6)&&(Er=X()+500,pn()))}break;case 13:On(function(){var r=Ct(t,1);if(r!==null){var i=Ae();rt(r,t,1,i)}}),Zu(t,1)}};Eu=function(t){if(t.tag===13){var e=Ct(t,134217728);if(e!==null){var n=Ae();rt(e,t,134217728,n)}Zu(t,134217728)}};Qh=function(t){if(t.tag===13){var e=tn(t),n=Ct(t,e);if(n!==null){var r=Ae();rt(n,t,e,r)}Zu(t,e)}};Jh=function(){return F};Yh=function(t,e){var n=F;try{return F=t,e()}finally{F=n}};dl=function(t,e,n){switch(e){case"input":if(il(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=bo(r);if(!i)throw Error(I(90));Ch(r),il(r,i)}}}break;case"textarea":xh(t,n);break;case"select":e=n.value,e!=null&&ar(t,!!n.multiple,e,!1)}};Mh=Gu;Uh=On;var X0={usingClientEntryPoint:!1,Events:[Hi,Zn,bo,bh,Vh,Gu]},Br={findFiberByHostInstance:En,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Z0={bundleType:Br.bundleType,version:Br.version,rendererPackageName:Br.rendererPackageName,rendererConfig:Br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Bh(t),t===null?null:t.stateNode},findFiberByHostInstance:Br.findFiberByHostInstance||J0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ys.isDisabled&&ys.supportsFiber)try{No=ys.inject(Z0),ht=ys}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X0;He.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tc(e))throw Error(I(200));return Q0(t,e,null,n)};He.createRoot=function(t,e){if(!tc(t))throw Error(I(299));var n=!1,r="",i=_m;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Xu(t,1,!1,null,null,n,!1,r,i),t[Pt]=e.current,_i(t.nodeType===8?t.parentNode:t),new ec(e)};He.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=Bh(e),t=t===null?null:t.stateNode,t};He.flushSync=function(t){return On(t)};He.hydrate=function(t,e,n){if(!Wo(e))throw Error(I(200));return $o(null,t,e,!0,n)};He.hydrateRoot=function(t,e,n){if(!tc(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=_m;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=wm(e,null,t,1,n??null,i,!1,s,o),t[Pt]=e.current,_i(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ho(e)};He.render=function(t,e,n){if(!Wo(e))throw Error(I(200));return $o(null,t,e,!1,n)};He.unmountComponentAtNode=function(t){if(!Wo(t))throw Error(I(40));return t._reactRootContainer?(On(function(){$o(null,null,t,!1,function(){t._reactRootContainer=null,t[Pt]=null})}),!0):!1};He.unstable_batchedUpdates=Gu;He.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Wo(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return $o(t,e,n,!1,r)};He.version="18.2.0-next-9e3b772b8-20220608";function Em(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Em)}catch(t){console.error(t)}}Em(),wh.exports=He;var ew=wh.exports,Jd=ew;Ya.createRoot=Jd.createRoot,Ya.hydrateRoot=Jd.hydrateRoot;const tw="/kooop/assets/reqserv-2fce40ab.png",nw="/kooop/assets/search-333f67f0.png",nc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAACtCAYAAAANgcuAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAu6SURBVHgB7d3rcdtIEgfw1tV9P10Ei4vA6wgWjsDaCMyLwNoIJEVgbQTSRiA5AtIRWI4A2AisjaAX7RkUSS0BzPQ0ZkDq/6tC6UEQD3IaGMyTCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgdmehKzLzefdj1S0/dcu5//e3bnk6Ozvb0Ay6fdbdj/d+f89+f5tufy0BlNAlyk88rumWiozItrplPbK/O8v9AQQJCITdgDinRLINv62Q/VUEkEOX2H7mOJ8oUUTwsVUAAkxilx2J8T0lcbLLHsW6JAAD/5p4/YLiSCDUpHdH8WoCMDAYDP4Kr7nKV6TAruSopnhvCMDA2J3hZ9LRJs4PpPNMAAbGgkGb9/8vRWJXKrQiHQQDmJgjGP5D8a5I7xsBGJh6gM6lJr1HAjBQPBi6LNKKlA/dnee5moLA67OEO4P2wVngrgBmigaDf3CuSe+GAIyUvjOkPDij9SqYKh0MNen9QQCGigVD4oNz290V7gnAUMk7Q8qD8+8EYOzfVIDBg3OWUqSd9lkv22m15Ip1F1v7zdu+HtXOv+V4n/GsdViRYKC0B+f7Ob5Mn/ClPdZ7/1OW84n3SOJ68svnUnUePuFLC2NpF1bTRPazW19+yDG33fKZZi6M4G2X4V9o2+bt2S9fKOA73dnGG9r/btqd7czTBVny9KyzDth2w3o1GZLtsetQ9J3TyTbuOEMPPHY9Ai95vHtsjDW75zjr45Q+Kk3A/i9HtnHF4d9PY34ePFMwJGxXfCUjPN3POtUdzxAU7ILgim2C95CGDRMTx134Phw41zXrNGx14eT5gmHNeisy0G3nI+chCdasJx67brgN53HHiV1qOT4N7fWU7H5/4HQpWXL1ifTWI9vUdOvsNWSA47uyWkj+QrptfOD57gZDvnJaN96vHK/2771iO0EXpNxFqyvS21Ci7kO5SzwGrWtOuEN075WH43vSN6vXkgfVNesDQtNB7IJd9vKa7HzigCxT7mBIqVtIaofE7uq8onLkC4lOHD5haPqGW5Fjjr6zac7VqyittHHI5GeYLRh8ZFakk1ScOsOVRkszlI58iaWHw7nk+IdR7THLiI0rsidZ9OuxFeYIBikBqF4ulHZXSG2HVPLKukuKcVehK/t1a1qG2Kt1RTraO0qIj2MvzhEMcjLNgWVFOm1KRQrrR92YS8xFYY7sglbNxnU8BZyPnUOpGugYqX0WUu5IQmo3N93yp/+9r+XVZgN+JKqpAE/MVvY25Gpo5djleN8nbvOCwgsySmfthsScg8NplWNWkkbo8+eRUhz5cGj/7LJ+KWXgtwHHfcd6DQ9cAdnVWmt9p0DdutdsQ7YjFxD5zKWeRdJlw3rxRfS8jGBIyuuz+xC1HgK2v2adyZp01pXR96qJbad8t0F5erYJhnpg2xIYKRe5gxfYpYyOMSQ1i5TyMPab0TqHVGMv8rbRoMZkyZvvC7IhnTkfcHfdDGUl/fmlFKpUh/659GC44rT2PRXpPIUU5XbrPJFr/RlLHuR+Gnm9Ir3QRPKZdHIEgzybTWUlNZ97rzr0z6UHw6pbGtY3Z9AOdflnxLraQcz+N/JaynNSaCLRJibNIHGxvgT0FUkJhqPMJvUk/5mzriD4QXEmFSll6HAUPXyowiZgHfPzPJZgEKvMAQGH5bgzpFz11Y4pGIQExCXBqTNpoRzr2IJBXDGmrjppXVYv5pnNzBw10C0Nl2hIIu5rcLVkG3J3uCYAQ7MEQxfZ12Mr8LYVqbaphPRUu13y6BSg1lIhRbJJUobfLSvSj3/Uj5QAYKb0M8M16YvI3hOAoaLB4LM52mr1XM0C4JVYQmnSI+lMNWkAiLKEYEipYHlLAEaKB4PPKrWkUxGcmmJ1SEupdGtJB5Vvp6dY9vcYa6Dh9BXJ/iIYYImKlBSeejAcaw31ko+7pfn9ErCOeRb51IPhL1qusQTfklKGRow5PtOQYWkq0msP/fPUg0FbbBtzm1Y97Pkuo0Na0gvtb6ANmpbymOrdaN4CAcFwWBVyhWX9dFyjx5VY3Pz/wPW0iSlXx5t6qLtvwufeO3gOryEYNPlvCYSQftfavtlfAtbRdtj/yNNDxcidb0XxnjNP1fWjuy9vx02qfPZJhvGpSKcdau180sHgT1p7JbscuTJJWbgMIrwinUejdQ6RQF4PBYRPTJNTjZHtMaVYkTvefphS+T2ltGkz9MIxDC855kP35U6NEyRjL9Wk08+rsKH9O8wFJeS5Q66usk6375Z0V8CK3KgiG9rPbvUTN2qdwkT0g3fcYw+GqltkmMd3Q7c+n6g2pA8ISfQXZCdmYDRZN2UQhJrstGeFZjM1JOcweHcbyyZpy7pzF2fKle5yYp3UkfmstH40uyCJI99Zy/UZap/zQox2JhsLBm1eW/O+1JMfLRnxVzRtrzpLoSU9u2QIy9KVcPcxQZyoH/XcmlyIbsdWGAwGnw/XfAmaYEgdDWEy/96dT5/3L+VGk83w9RHaMV0ttAX2P8ddaPIcpkqTNAlb857UUorQoP2VygxQdTM1SMIYf1UuERBtt7zLPfCCvwBY3slvxp4VelPBEFvWvdHMveavmBvSC0rg8qV2i7SIzJllSgqEnr/Fv6N8NcAbcoHQUgH+Tm5x4TL5/H/guIkhKlLyZfcN61QUqXvPBc87wfiaZ5j2iV3F0z3Px2Qid9bPz7De2UZKmpDzqMkSuw+/Cdi5xQcoJx/7RSftl11QWMxE31tzhrnPeBsUDduQxCMJWFt/8vL4koNhZ1u3Ee83PY9DJyYfvNTIrnl/xpTGH2hKRc7Q/u4nTlj2W5ERv88Vu8CImTWn8e+55ELDXrJrrnDLcTMJfffry/tqMsaGweC39/L7aXaWB7+/mhKc0cL5EzynbYnR00SLT6v9yv6qnX3vJvSW3EN7e7bAUf3YXSQq/2e189IzbY+7pRmxm3NZ03ZLnjvfUQGLr4EuVeuZ2K6pKJ/QW4Io6PYJ4CEYDmD3IH/F+3lwyaeu6Iid6nnBTHi69Kxhwwf3XHKfFxs/QOeAO8M/yZdRjbwur635+CZMOdXzMoNg2OGzC1XAqrJOcr1KLqd6XtYQDPs+RqwbMpzJUpzqeZlCMOyLqTys6XiUOK+WjgyCAf6BX+lQ/wiGfVG1yUeUaFqKk2Pi88VBMOyLbVpxLImmpTgWJUot6bRUCIJhX2ww1ARDWtIpMge0QDDs+0Zx3tBxyF53kNBteEOFIBj2xTbMu1h6JZU/vtgm9g3Z2FC8Yo0jEQz7NhTHekylOdQUqbuqW2VVYrvX3i+xSfyrxfudlxbdliYEx/fi+0qGOLznYsNH2ObrpLGuf/Ei7w7sGufFuiVD7FrKTnXbbHgBgbD4nm65sW5g3rZb3i7tFi+JjOLHav01ZFgVxbHU5LKUfaGDfFaSHXs8gWErT5O/ksVmlUTKmKjm2PVbiCXn/WpbrcIBrG+Lr52vwZQyEMSiAhoWgN3dQatYQPjjvmO9mgBe4rSBuqQEp6KM2A0X07DeokvFoCDWPzv0Gs7Qt5jdIGhrTlcRwBB2A4OlatgNflWRAXZBKneBT5wWrLvwrEAoWp3ELvtQkw1parAhN8FhSyODkLEr1embUlTkptitKW0aqkNaKjjA8JIgGCb4K7rUys5Z5Ni++LuifN7mGKHwGCAYArCrYX6g0/Pb1Gw2rwka6gXwNbJLmRfOyg0CAdRYXxm3NNcEkIqPOyCk9GlFAFZ4/ll/5iBjqlYEYI1d8+g1L9+PmWwIYG7sKtQaXqY7xt0AcmJ3l5BniYbL6+c0qwigFN7OO9ZwfmsuOK/cKUCl20zYTfq4IjeQr3UTCtGSm6dbao8f0ZE+HYIhA94O11KT6/bYT55YTby1JT8hIbkukvJTEv8TEr89BMMCvMzfo9EcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALwqfwPu9k0O3n0Y2QAAAABJRU5ErkJggg==",Wl="/kooop/assets/docta-1ec713c3.jpg";/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ri(){return Ri=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ri.apply(this,arguments)}var Kt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Kt||(Kt={}));const Yd="popstate";function rw(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return $l("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:co(i)}return sw(e,n,null,t)}function ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function rc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function iw(){return Math.random().toString(36).substr(2,8)}function Xd(t,e){return{usr:t.state,key:t.key,idx:e}}function $l(t,e,n,r){return n===void 0&&(n=null),Ri({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Rr(e):e,{state:n,key:e&&e.key||r||iw()})}function co(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Rr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function sw(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Kt.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ri({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=Kt.Pop;let x=c(),p=x==null?null:x-u;u=x,l&&l({action:a,location:_.location,delta:p})}function g(x,p){a=Kt.Push;let d=$l(_.location,x,p);n&&n(d,x),u=c()+1;let m=Xd(d,u),v=_.createHref(d);try{o.pushState(m,"",v)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(v)}s&&l&&l({action:a,location:_.location,delta:1})}function y(x,p){a=Kt.Replace;let d=$l(_.location,x,p);n&&n(d,x),u=c();let m=Xd(d,u),v=_.createHref(d);o.replaceState(m,"",v),s&&l&&l({action:a,location:_.location,delta:0})}function w(x){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof x=="string"?x:co(x);return ee(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let _={get action(){return a},get location(){return t(i,o)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Yd,f),l=x,()=>{i.removeEventListener(Yd,f),l=null}},createHref(x){return e(i,x)},createURL:w,encodeLocation(x){let p=w(x);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:y,go(x){return o.go(x)}};return _}var Zd;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Zd||(Zd={}));function ow(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Rr(e):e,i=ic(r.pathname||"/",n);if(i==null)return null;let s=Im(t);aw(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=gw(s[a],ww(i));return o}function Im(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=rn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Im(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:pw(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Am(s.path))i(s,o,l)}),e}function Am(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Am(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function aw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:mw(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const lw=/^:\w+$/,uw=3,cw=2,dw=1,fw=10,hw=-2,ef=t=>t==="*";function pw(t,e){let n=t.split("/"),r=n.length;return n.some(ef)&&(r+=hw),e&&(r+=cw),n.filter(i=>!ef(i)).reduce((i,s)=>i+(lw.test(s)?uw:s===""?dw:fw),r)}function mw(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function gw(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=yw({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:rn([i,c.pathname]),pathnameBase:Aw(rn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=rn([i,c.pathnameBase]))}return s}function yw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=vw(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let g=a[f]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}return u[c]=_w(a[f]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function vw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),rc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ww(t){try{return decodeURI(t)}catch(e){return rc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function _w(t,e){try{return decodeURIComponent(t)}catch(n){return rc(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ic(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ew(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Rr(t):t;return{pathname:n?n.startsWith("/")?n:Iw(n,e):e,search:Sw(r),hash:Tw(i)}}function Iw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Va(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Sm(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Tm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Rr(t):(i=Ri({},t),ee(!i.pathname||!i.pathname.includes("?"),Va("?","pathname","search",i)),ee(!i.pathname||!i.pathname.includes("#"),Va("#","pathname","hash",i)),ee(!i.search||!i.search.includes("#"),Va("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let f=e.length-1;if(o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}a=f>=0?e[f]:"/"}let l=Ew(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const rn=t=>t.join("/").replace(/\/\/+/g,"/"),Aw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Sw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Tw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function kw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const km=["post","put","patch","delete"];new Set(km);const Pw=["get",...km];new Set(Pw);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fo(){return fo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fo.apply(this,arguments)}const sc=E.createContext(null),Cw=E.createContext(null),xr=E.createContext(null),qo=E.createContext(null),mn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Pm=E.createContext(null);function Rw(t,e){let{relative:n}=e===void 0?{}:e;$i()||ee(!1);let{basename:r,navigator:i}=E.useContext(xr),{hash:s,pathname:o,search:a}=Rm(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:rn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function $i(){return E.useContext(qo)!=null}function qi(){return $i()||ee(!1),E.useContext(qo).location}function Cm(t){E.useContext(xr).static||E.useLayoutEffect(t)}function Ko(){let{isDataRoute:t}=E.useContext(mn);return t?Ww():xw()}function xw(){$i()||ee(!1);let t=E.useContext(sc),{basename:e,navigator:n}=E.useContext(xr),{matches:r}=E.useContext(mn),{pathname:i}=qi(),s=JSON.stringify(Sm(r).map(l=>l.pathnameBase)),o=E.useRef(!1);return Cm(()=>{o.current=!0}),E.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Tm(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:rn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const Nw=E.createContext(null);function Ow(t){let e=E.useContext(mn).outlet;return e&&E.createElement(Nw.Provider,{value:t},e)}function Rm(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=E.useContext(mn),{pathname:i}=qi(),s=JSON.stringify(Sm(r).map(o=>o.pathnameBase));return E.useMemo(()=>Tm(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Dw(t,e){return Lw(t,e)}function Lw(t,e,n){$i()||ee(!1);let{navigator:r}=E.useContext(xr),{matches:i}=E.useContext(mn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=qi(),u;if(e){var c;let _=typeof e=="string"?Rr(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||ee(!1),u=_}else u=l;let f=u.pathname||"/",g=a==="/"?f:f.slice(a.length)||"/",y=ow(t,{pathname:g}),w=jw(y&&y.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:rn([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:rn([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&w?E.createElement(qo.Provider,{value:{location:fo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Kt.Pop}},w):w}function bw(){let t=Hw(),e=kw(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,s)}const Vw=E.createElement(bw,null);class Mw extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?E.createElement(mn.Provider,{value:this.props.routeContext},E.createElement(Pm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Uw(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(sc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(mn.Provider,{value:e},r)}function jw(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ee(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||Vw);let g=e.concat(s.slice(0,u+1)),y=()=>{let w;return c?w=f:l.route.Component?w=E.createElement(l.route.Component,null):l.route.element?w=l.route.element:w=a,E.createElement(Uw,{match:l,routeContext:{outlet:a,matches:g,isDataRoute:n!=null},children:w})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?E.createElement(Mw,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var xm=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(xm||{}),ho=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ho||{});function Fw(t){let e=E.useContext(sc);return e||ee(!1),e}function Bw(t){let e=E.useContext(Cw);return e||ee(!1),e}function zw(t){let e=E.useContext(mn);return e||ee(!1),e}function Nm(t){let e=zw(),n=e.matches[e.matches.length-1];return n.route.id||ee(!1),n.route.id}function Hw(){var t;let e=E.useContext(Pm),n=Bw(ho.UseRouteError),r=Nm(ho.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Ww(){let{router:t}=Fw(xm.UseNavigateStable),e=Nm(ho.UseNavigateStable),n=E.useRef(!1);return Cm(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,fo({fromRouteId:e},s)))},[t,e])}function $w(t){return Ow(t.context)}function ut(t){ee(!1)}function qw(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Kt.Pop,navigator:s,static:o=!1}=t;$i()&&ee(!1);let a=e.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Rr(r));let{pathname:u="/",search:c="",hash:f="",state:g=null,key:y="default"}=r,w=E.useMemo(()=>{let _=ic(u,a);return _==null?null:{location:{pathname:_,search:c,hash:f,state:g,key:y},navigationType:i}},[a,u,c,f,g,y,i]);return w==null?null:E.createElement(xr.Provider,{value:l},E.createElement(qo.Provider,{children:n,value:w}))}function Kw(t){let{children:e,location:n}=t;return Dw(ql(e),n)}new Promise(()=>{});function ql(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,ql(r.props.children,s));return}r.type!==ut&&ee(!1),!r.props.index||!r.props.children||ee(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ql(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kl(){return Kl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Kl.apply(this,arguments)}function Gw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Qw(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Jw(t,e){return t.button===0&&(!e||e==="_self")&&!Qw(t)}const Yw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Xw="startTransition",tf=Wy[Xw];function Zw(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=rw({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=E.useCallback(f=>{u&&tf?tf(()=>l(f)):l(f)},[l,u]);return E.useLayoutEffect(()=>o.listen(c),[o,c]),E.createElement(qw,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const e_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",t_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_t=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,f=Gw(e,Yw),{basename:g}=E.useContext(xr),y,w=!1;if(typeof u=="string"&&t_.test(u)&&(y=u,e_))try{let d=new URL(window.location.href),m=u.startsWith("//")?new URL(d.protocol+u):new URL(u),v=ic(m.pathname,g);m.origin===d.origin&&v!=null?u=v+m.search+m.hash:w=!0}catch{}let _=Rw(u,{relative:i}),x=n_(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(d){r&&r(d),d.defaultPrevented||x(d)}return E.createElement("a",Kl({},f,{href:y||_,onClick:w||s?r:p,ref:n,target:l}))});var nf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(nf||(nf={}));var rf;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(rf||(rf={}));function n_(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Ko(),l=qi(),u=Rm(t,{relative:o});return E.useCallback(c=>{if(Jw(c,n)){c.preventDefault();let f=r!==void 0?r:co(l)===co(u);a(t,{replace:f,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const Om="/kooop/assets/budget-954e8633.png",Dm="/kooop/assets/date-41afa211.png",Lm="/kooop/assets/location-78db43e9.png",bm="/kooop/assets/media-f7ac3fd5.png",Gt={budget:Om,date:Dm,location:Lm,media:bm},r_={HOME:{path:"home"},VIEW_KOOP:{path:"viewKoop"}},be={HOME:{path:"/",title:"Home"},MY_ACCOUNT:{path:"/my_acc",title:"My Account"},VIEW_KOOP:{path:"/view",title:"Koop"},SUBCRIPTION:{path:"/sub",title:"Subscription"},LOGIN:{path:"/login",title:"My Account"},LEGAL:{path:"/legal",title:"Koop"},INTRO:{path:"/intro",title:"Subscription"}},oc=" max-w-[900px] overflow-hidden mx-auto min-h-[320pt]";function i_(t){var n;const e=(n=t==null?void 0:t.current)==null?void 0:n.value;return e===void 0?"":e}const qn=i_;function s_({onLogoClick:t,small:e,user:n}){return h.jsxs("div",{className:"header bg-sky-500 flex flex-col",children:[h.jsxs("div",{className:`cont-logo  items-center flex
      
      ${e?" justify-around items-center ":"flex-col justify-center  "}
      
      
      `,children:[h.jsxs("div",{className:`self-end m-4 ${e?" flex-1 ":""}  `,children:[h.jsx(_t,{to:be.MY_ACCOUNT.path,children:h.jsx("img",{alt:"My Account",src:Wl,className:"rounded-full w-[30pt] mx-auto hover:outline cursor-pointer hover:outline-white  "})}),h.jsxs("div",{className:"text-center text-sm bg-white text-sky-500 rounded-lg w-fit mx-auto px-1 my-2 ",children:[h.jsx("div",{children:n.displayname}),h.jsxs("div",{children:[" ",n.phone]})]})]}),h.jsx(_t,{to:"/",children:h.jsx("img",{className:`cursor-pointer ${e?" flex-3 ":" -mt-[50pt] "}`,src:nc,width:e?160:100})}),h.jsx("p",{className:` p-2 text-center  transition-colors ease-in-out duration-150
          
          ${e?"text-sm flex-1 ":""}
          
          `,children:"100000 + of services and quick deals at your fingertips ..."})]}),h.jsx("div",{className:` gap-2 py-2 
      
      ${e?" h-[60pt] ":" h-[80pt] "}
      
      flex overflow-x-scroll w-[100vw]`,children:[...Array(20).fill(0)].map((r,i)=>h.jsx("div",{className:"bg-green-200  overflow-hidden min-w-[120pt] rounded-lg   ",children:h.jsx("img",{className:"w-[100%]  ",src:Wl})},i))})]})}function vs({icon:t,text:e}){return h.jsxs("div",{className:"flex",children:[h.jsx("img",{src:t,width:20}),h.jsx("span",{children:e})]})}function o_({data:t,onKoopClicked:e}){const{date:n,budget:r,location:i,media:s}=t;return h.jsxs("div",{onClick:o=>e(t),className:"border-sky-100 md:w-[50%]  flex flex-col gap-2 cursor-pointer border my-2 p-2 rounded-lg hover:border-green-500 shadow-black/10  shadow-lg hover:bg-sky-slate-200",children:[h.jsxs("div",{className:" flex gap-2 text-sm  text-gray-400",children:[r&&h.jsx(vs,{text:r+" $",icon:Gt.budget}),n&&h.jsx(vs,{text:n,icon:Gt.date}),i&&h.jsx(vs,{text:i,icon:Gt.location}),s&&h.jsx(vs,{text:"Media",icon:Gt.media})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{children:t.text}),h.jsx("span",{className:"bg-green-700 text-xs p-1 rounded-lg text-white",children:"Exp. dans 22h"})]}),h.jsx("div",{className:"italic text-sm my-1 text-slate-400 ",children:"Posted by @DoctaRhyf"})]})]})}/**
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
 */const Vm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},a_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Mm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let g=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(g=64)),r.push(n[c],n[f],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):a_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new l_;const g=s<<2|a>>4;if(r.push(g),u!==64){const y=a<<4&240|u>>2;if(r.push(y),f!==64){const w=u<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class l_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u_=function(t){const e=Vm(t);return Mm.encodeByteArray(e,!0)},po=function(t){return u_(t).replace(/\./g,"")},Um=function(t){try{return Mm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function c_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const d_=()=>c_().__FIREBASE_DEFAULTS__,f_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},h_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Um(t[1]);return e&&JSON.parse(e)},ac=()=>{try{return d_()||f_()||h_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jm=t=>{var e,n;return(n=(e=ac())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},p_=t=>{const e=jm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Fm=()=>{var t;return(t=ac())===null||t===void 0?void 0:t.config},Bm=t=>{var e;return(e=ac())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class m_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function g_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[po(JSON.stringify(n)),po(JSON.stringify(o)),a].join(".")}/**
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function y_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function zm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function v_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function w_(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Hm(){try{return typeof indexedDB=="object"}catch{return!1}}function Wm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function __(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const E_="FirebaseError";class ot extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=E_,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bn.prototype.create)}}class Bn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?I_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ot(i,a,r)}}function I_(t,e){return t.replace(A_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const A_=/\{\$([^}]+)}/g;function S_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(sf(s)&&sf(o)){if(!xi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function sf(t){return t!==null&&typeof t=="object"}/**
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
 */function Ki(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function T_(t,e){const n=new k_(t,e);return n.subscribe.bind(n)}class k_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");P_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ma),i.error===void 0&&(i.error=Ma),i.complete===void 0&&(i.complete=Ma);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function P_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ma(){}/**
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
 */const C_=1e3,R_=2,x_=4*60*60*1e3,N_=.5;function of(t,e=C_,n=R_){const r=e*Math.pow(n,t),i=Math.round(N_*r*(Math.random()-.5)*2);return Math.min(x_,r+i)}/**
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
 */function De(t){return t&&t._delegate?t._delegate:t}class st{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _n="[DEFAULT]";/**
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
 */class O_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new m_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(L_(e))try{this.getOrInitializeService({instanceIdentifier:_n})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=_n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_n){return this.instances.has(e)}getOptions(e=_n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:D_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_n){return this.component?this.component.multipleInstances?e:_n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function D_(t){return t===_n?void 0:t}function L_(t){return t.instantiationMode==="EAGER"}/**
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
 */class b_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new O_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(j||(j={}));const V_={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},M_=j.INFO,U_={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},j_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=U_[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Go{constructor(e){this.name=e,this._logLevel=M_,this._logHandler=j_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?V_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const F_=(t,e)=>e.some(n=>t instanceof n);let af,lf;function B_(){return af||(af=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function z_(){return lf||(lf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $m=new WeakMap,Gl=new WeakMap,qm=new WeakMap,Ua=new WeakMap,lc=new WeakMap;function H_(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(sn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$m.set(n,t)}).catch(()=>{}),lc.set(e,t),e}function W_(t){if(Gl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Gl.set(t,e)}let Ql={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $_(t){Ql=t(Ql)}function q_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ja(this),e,...n);return qm.set(r,e.sort?e.sort():[e]),sn(r)}:z_().includes(t)?function(...e){return t.apply(ja(this),e),sn($m.get(this))}:function(...e){return sn(t.apply(ja(this),e))}}function K_(t){return typeof t=="function"?q_(t):(t instanceof IDBTransaction&&W_(t),F_(t,B_())?new Proxy(t,Ql):t)}function sn(t){if(t instanceof IDBRequest)return H_(t);if(Ua.has(t))return Ua.get(t);const e=K_(t);return e!==t&&(Ua.set(t,e),lc.set(e,t)),e}const ja=t=>lc.get(t);function G_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=sn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(sn(o.result),l.oldVersion,l.newVersion,sn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Q_=["get","getKey","getAll","getAllKeys","count"],J_=["put","add","delete","clear"],Fa=new Map;function uf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fa.get(e))return Fa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=J_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Q_.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Fa.set(e,s),s}$_(t=>({...t,get:(e,n,r)=>uf(e,n)||t.get(e,n,r),has:(e,n)=>!!uf(e,n)||t.has(e,n)}));/**
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
 */class Y_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(X_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function X_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jl="@firebase/app",cf="0.9.18";/**
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
 */const Dn=new Go("@firebase/app"),Z_="@firebase/app-compat",eE="@firebase/analytics-compat",tE="@firebase/analytics",nE="@firebase/app-check-compat",rE="@firebase/app-check",iE="@firebase/auth",sE="@firebase/auth-compat",oE="@firebase/database",aE="@firebase/database-compat",lE="@firebase/functions",uE="@firebase/functions-compat",cE="@firebase/installations",dE="@firebase/installations-compat",fE="@firebase/messaging",hE="@firebase/messaging-compat",pE="@firebase/performance",mE="@firebase/performance-compat",gE="@firebase/remote-config",yE="@firebase/remote-config-compat",vE="@firebase/storage",wE="@firebase/storage-compat",_E="@firebase/firestore",EE="@firebase/firestore-compat",IE="firebase",AE="10.3.1";/**
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
 */const Yl="[DEFAULT]",SE={[Jl]:"fire-core",[Z_]:"fire-core-compat",[tE]:"fire-analytics",[eE]:"fire-analytics-compat",[rE]:"fire-app-check",[nE]:"fire-app-check-compat",[iE]:"fire-auth",[sE]:"fire-auth-compat",[oE]:"fire-rtdb",[aE]:"fire-rtdb-compat",[lE]:"fire-fn",[uE]:"fire-fn-compat",[cE]:"fire-iid",[dE]:"fire-iid-compat",[fE]:"fire-fcm",[hE]:"fire-fcm-compat",[pE]:"fire-perf",[mE]:"fire-perf-compat",[gE]:"fire-rc",[yE]:"fire-rc-compat",[vE]:"fire-gcs",[wE]:"fire-gcs-compat",[_E]:"fire-fst",[EE]:"fire-fst-compat","fire-js":"fire-js",[IE]:"fire-js-all"};/**
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
 */const mo=new Map,Xl=new Map;function TE(t,e){try{t.container.addComponent(e)}catch(n){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yt(t){const e=t.name;if(Xl.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;Xl.set(e,t);for(const n of mo.values())TE(n,t);return!0}function zn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const kE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},on=new Bn("app","Firebase",kE);/**
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
 */class PE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
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
 */const Nr=AE;function Km(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Yl,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw on.create("bad-app-name",{appName:String(i)});if(n||(n=Fm()),!n)throw on.create("no-options");const s=mo.get(i);if(s){if(xi(n,s.options)&&xi(r,s.config))return s;throw on.create("duplicate-app",{appName:i})}const o=new b_(i);for(const l of Xl.values())o.addComponent(l);const a=new PE(n,r,o);return mo.set(i,a),a}function uc(t=Yl){const e=mo.get(t);if(!e&&t===Yl&&Fm())return Km();if(!e)throw on.create("no-app",{appName:t});return e}function Qe(t,e,n){var r;let i=(r=SE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(a.join(" "));return}yt(new st(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const CE="firebase-heartbeat-database",RE=1,Ni="firebase-heartbeat-store";let Ba=null;function Gm(){return Ba||(Ba=G_(CE,RE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ni)}}}).catch(t=>{throw on.create("idb-open",{originalErrorMessage:t.message})})),Ba}async function xE(t){try{return await(await Gm()).transaction(Ni).objectStore(Ni).get(Qm(t))}catch(e){if(e instanceof ot)Dn.warn(e.message);else{const n=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(n.message)}}}async function df(t,e){try{const r=(await Gm()).transaction(Ni,"readwrite");await r.objectStore(Ni).put(e,Qm(t)),await r.done}catch(n){if(n instanceof ot)Dn.warn(n.message);else{const r=on.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(r.message)}}}function Qm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const NE=1024,OE=30*24*60*60*1e3;class DE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ff();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=OE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ff(),{heartbeatsToSend:n,unsentEntries:r}=LE(this._heartbeatsCache.heartbeats),i=po(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ff(){return new Date().toISOString().substring(0,10)}function LE(t,e=NE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),hf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),hf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hm()?Wm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return df(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return df(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function hf(t){return po(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function VE(t){yt(new st("platform-logger",e=>new Y_(e),"PRIVATE")),yt(new st("heartbeat",e=>new DE(e),"PRIVATE")),Qe(Jl,cf,t),Qe(Jl,cf,"esm2017"),Qe("fire-js","")}VE("");/**
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
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
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
 */let Or="10.3.1";/**
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
 */const Ir=new Go("@firebase/firestore");function go(t,...e){if(Ir.logLevel<=j.DEBUG){const n=e.map(dc);Ir.debug(`Firestore (${Or}): ${t}`,...n)}}function cc(t,...e){if(Ir.logLevel<=j.ERROR){const n=e.map(dc);Ir.error(`Firestore (${Or}): ${t}`,...n)}}function Jm(t,...e){if(Ir.logLevel<=j.WARN){const n=e.map(dc);Ir.warn(`Firestore (${Or}): ${t}`,...n)}}function dc(t){if(typeof t=="string")return t;try{/**
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${Or}) INTERNAL ASSERTION FAILED: `+t;throw cc(e),new Error(e)}function dn(t,e){t||J()}function Qo(t,e){return t}/**
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
 */const pf="ok",ME="cancelled",si="unknown",O="invalid-argument",UE="deadline-exceeded",jE="not-found",FE="permission-denied",Zl="unauthenticated",BE="resource-exhausted",Ar="failed-precondition",zE="aborted",HE="out-of-range",Ym="unimplemented",WE="internal",$E="unavailable";class N extends ot{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ke.UNAUTHENTICATED))}shutdown(){}}class KE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GE{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(dn(typeof e.accessToken=="string"),new Xm(e.accessToken,new ke(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class QE{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class JE{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new QE(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XE{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(dn(typeof e.token=="string"),new YE(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class ZE{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Oi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Oi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Oi&&e.projectId===this.projectId&&e.database===this.database}}class Di{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Di.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Di?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class re extends Di{construct(e,n,r){return new re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(O,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new re(n)}static emptyPath(){return new re([])}}const eI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends Di{construct(e,n,r){return new Ve(e,n,r)}static isValidIdentifier(e){return eI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new N(O,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new N(O,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(O,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new N(O,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
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
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(re.fromString(e))}static fromName(e){return new he(re.fromString(e).popFirst(5))}static empty(){return new he(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new re(e.slice()))}}/**
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
 */function Zm(t,e,n){if(!n)throw new N(O,`Function ${t}() cannot be called with an empty ${e}.`)}function mf(t){if(!he.isDocumentKey(t))throw new N(O,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function gf(t){if(he.isDocumentKey(t))throw new N(O,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jo(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function fc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(O,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jo(t);throw new N(O,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function eg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */let ws=null;function tI(){return ws===null?ws=function(){return 268435456+Math.round(2147483648*Math.random())}():ws++,"0x"+ws.toString(16)}/**
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
 */function nI(t){return t==null}function yo(t){return t===0&&1/t==-1/0}/**
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
 */const rI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var yf,M;function vf(t){if(t===void 0)return cc("RPC_ERROR","HTTP error has no status"),si;switch(t){case 200:return pf;case 400:return Ar;case 401:return Zl;case 403:return FE;case 404:return jE;case 409:return zE;case 416:return HE;case 429:return BE;case 499:return ME;case 500:return si;case 501:return Ym;case 503:return $E;case 504:return UE;default:return t>=200&&t<300?pf:t>=400&&t<500?Ar:t>=500&&t<600?WE:si}}/**
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
 */(M=yf||(yf={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";class iI extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+n.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get P(){return!1}R(n,r,i,s,o){const a=tI(),l=this.I(n,r);go("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(u,s,o),this.p(n,l,u,i).then(c=>(go("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Jm("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}g(n,r,i,s,o,a){return this.R(n,r,i,s,o)}V(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Or}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}I(n,r){const i=rI[n];return`${this.m}/v1/${r}:${i}`}}{constructor(e,n){super(e),this.F=n}v(e,n){throw new Error("Not supported by FetchConnection")}async p(e,n,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.F(n,{method:"POST",headers:r,body:o})}catch(l){const u=l;throw new N(vf(u.status),"Request failed with error: "+u.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const u=(s=l==null?void 0:l.error)===null||s===void 0?void 0:s.message;throw new N(vf(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}/**
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
 */function sI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class oI{static C(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=sI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function tg(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */function wf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class aI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new aI("Invalid base64 string: "+s):s}}(e);return new xt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const lI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ln(t){if(dn(!!t),typeof t=="string"){let e=0;const n=lI.exec(t);if(dn(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ne(t.seconds),nanos:ne(t.nanos)}}function ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Li(t){return typeof t=="string"?xt.fromBase64String(t):xt.fromUint8Array(t)}/**
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
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(O,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(O,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(O,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(O,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function ng(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function rg(t){const e=t.mapValue.fields.__previous_value__;return ng(e)?rg(e):e}function bi(t){const e=Ln(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */const _s={fields:{__type__:{stringValue:"__max__"}}};function bn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ng(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:J()}function vo(t,e){if(t===e)return!0;const n=bn(t);if(n!==bn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bi(t).isEqual(bi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ln(i.timestampValue),a=Ln(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Li(i.bytesValue).isEqual(Li(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ne(i.geoPointValue.latitude)===ne(s.geoPointValue.latitude)&&ne(i.geoPointValue.longitude)===ne(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ne(i.integerValue)===ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ne(i.doubleValue),a=ne(s.doubleValue);return o===a?yo(o)===yo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return tg(t.arrayValue.values||[],e.arrayValue.values||[],vo);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(wf(o)!==wf(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!vo(o[l],a[l])))return!1;return!0}(t,e);default:return J()}}function Vi(t,e){return(t.values||[]).find(n=>vo(n,e))!==void 0}function wo(t,e){if(t===e)return 0;const n=bn(t),r=bn(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ne(s.integerValue||s.doubleValue),l=ne(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return _f(t.timestampValue,e.timestampValue);case 4:return _f(bi(t),bi(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Li(s),l=Li(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ae(a[u],l[u]);if(c!==0)return c}return ae(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ae(ne(s.latitude),ne(o.latitude));return a!==0?a:ae(ne(s.longitude),ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=wo(a[u],l[u]);if(c)return c}return ae(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===_s&&o===_s)return 0;if(s===_s)return 1;if(o===_s)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const g=ae(l[f],c[f]);if(g!==0)return g;const y=wo(a[l[f]],u[c[f]]);if(y!==0)return y}return ae(l.length,c.length)}(t.mapValue,e.mapValue);default:throw J()}}function _f(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Ln(t),r=Ln(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function Ef(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ig(t){return!!t&&"arrayValue"in t}function If(t){return!!t&&"nullValue"in t}function Af(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function za(t){return!!t&&"mapValue"in t}function oi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oi(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Sf{constructor(e,n){this.position=e,this.inclusive=n}}/**
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
 */class sg{}class at extends sg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new uI(e,n,r):n==="array-contains"?new fI(e,r):n==="in"?new hI(e,r):n==="not-in"?new pI(e,r):n==="array-contains-any"?new mI(e,r):new at(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new cI(e,r):new dI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(wo(n,this.value)):n!==null&&bn(this.value)===bn(n)&&this.matchesComparison(wo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Gi extends sg{constructor(e,n){super(),this.filters=e,this.op=n,this.S=null}static create(e,n){return new Gi(e,n)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.S!==null||(this.S=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.S}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.N(n=>n.isInequality());return e!==null?e.field:null}N(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}class uI extends at{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class cI extends at{constructor(e,n){super(e,"in",n),this.keys=og("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dI extends at{constructor(e,n){super(e,"not-in",n),this.keys=og("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function og(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>he.fromName(r.referenceValue))}class fI extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ig(n)&&Vi(n.arrayValue,this.value)}}class hI extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vi(this.value.arrayValue,n)}}class pI extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vi(this.value.arrayValue,n)}}class mI extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ig(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vi(this.value.arrayValue,r))}}/**
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
 */class ai{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class ve{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ve(e)}static min(){return new ve(new je(0,0))}static max(){return new ve(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class _o{constructor(e,n){this.comparator=e,this.root=n||fe.EMPTY}insert(e,n){return new _o(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,fe.BLACK,null,null))}remove(e){return new _o(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Es(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Es(this.root,e,this.comparator,!1)}getReverseIterator(){return new Es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Es(this.root,e,this.comparator,!0)}}class Es{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??fe.RED,this.left=i??fe.EMPTY,this.right=s??fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return fe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}fe.EMPTY=null,fe.RED=!0,fe.BLACK=!1;fe.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new fe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Eo{constructor(e){this.comparator=e,this.data=new _o(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tf(this.data.getIterator())}getIteratorFrom(e){return new Tf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Eo)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Eo(this.comparator);return n.data=e,n}}class Tf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mi{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new Mi([])}unionWith(e){let n=new Eo(Ve.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mi(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return tg(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!za(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oi(n)}setAll(e){let n=Ve.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=oi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());za(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vo(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];za(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Yo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ft(oi(this.value))}}/**
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
 */class Ut{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ut(e,0,ve.min(),ve.min(),ve.min(),ft.empty(),0)}static newFoundDocument(e,n,r,i){return new Ut(e,1,n,ve.min(),r,i,0)}static newNoDocument(e,n){return new Ut(e,2,n,ve.min(),ve.min(),ft.empty(),0)}static newUnknownDocument(e,n){return new Ut(e,3,n,ve.min(),ve.min(),ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gI{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.O=null}}function kf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new gI(t,e,n,r,i,s,o)}/**
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
 */class hc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.q=null,this.B=null,this.$=null,this.startAt,this.endAt}}function pc(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Xo(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function yI(t){return t.collectionGroup!==null}function vI(t){const e=Qo(t);if(e.q===null){e.q=[];const n=Xo(e),r=pc(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new ai(n)),e.q.push(new ai(Ve.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.q.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new ai(Ve.keyField(),s))}}}return e.q}function wI(t){const e=Qo(t);return e.B||(e.B=_I(e,vI(t))),e.B}function _I(t,e){if(t.limitType==="F")return kf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ai(i.field,s)});const n=t.endAt?new Sf(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Sf(t.startAt.position,t.startAt.inclusive):null;return kf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function eu(t,e){e.getFirstInequalityField(),Xo(t);const n=t.filters.concat([e]);return new hc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
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
 */function EI(t,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!yo(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,i){if(r.useProto3Json){if(isNaN(i))return{doubleValue:"NaN"};if(i===1/0)return{doubleValue:"Infinity"};if(i===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yo(i)?"-0":i}}(t,e)}/**
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
 */class Zo{constructor(){this._=void 0}}class II extends Zo{}class AI extends Zo{constructor(e){super(),this.elements=e}}class SI extends Zo{constructor(e){super(),this.elements=e}}class TI extends Zo{constructor(e,n){super(),this.serializer=e,this.L=n}}class li{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new li}static exists(e){return new li(void 0,e)}static updateTime(e){return new li(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class ea{}class ag extends ea{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class lg extends ea{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class kI extends ea{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PI extends ea{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const CI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),RI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),xI=(()=>({and:"AND",or:"OR"}))();class NI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function tu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function OI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function DI(t,e){return tu(t,e.toTimestamp())}function Pf(t){return dn(!!t),ve.fromTimestamp(function(n){const r=Ln(n);return new je(r.seconds,r.nanos)}(t))}function mc(t,e){return function(r){return new re(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function nu(t,e){return mc(t.databaseId,e.path)}function LI(t,e){const n=function(i){const s=re.fromString(i);return dn(cg(s)),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new N(O,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(O,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(function(i){return dn(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(n))}function Cf(t,e){return mc(t.databaseId,e)}function bI(t){return new re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rf(t,e,n){return{name:nu(t,e),fields:n.value.mapValue.fields}}function VI(t,e){let n;if(e instanceof ag)n={update:Rf(t,e.key,e.value)};else if(e instanceof kI)n={delete:nu(t,e.key)};else if(e instanceof lg)n={update:Rf(t,e.key,e.data),updateMask:BI(e.fieldMask)};else{if(!(e instanceof PI))return J();n={verify:nu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof II)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof AI)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof SI)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof TI)return{fieldPath:o.field.canonicalString(),increment:a.L};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:DI(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function MI(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Cf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Cf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return ug(Gi.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:Kn(f.field),direction:UI(f.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.useProto3Json||nI(u)?u:{value:u}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function UI(t){return CI[t]}function jI(t){return RI[t]}function FI(t){return xI[t]}function Kn(t){return{fieldPath:t.canonicalString()}}function ug(t){return t instanceof at?function(n){if(n.op==="=="){if(Af(n.value))return{unaryFilter:{field:Kn(n.field),op:"IS_NAN"}};if(If(n.value))return{unaryFilter:{field:Kn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Af(n.value))return{unaryFilter:{field:Kn(n.field),op:"IS_NOT_NAN"}};if(If(n.value))return{unaryFilter:{field:Kn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kn(n.field),op:jI(n.op),value:n.value}}}(t):t instanceof Gi?function(n){const r=n.getFilters().map(i=>ug(i));return r.length===1?r[0]:{compositeFilter:{op:FI(n.op),filters:r}}}(t):J()}function BI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function gc(t){return new NI(t,!0)}/**
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
 */class zI extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.X=!1}tt(){if(this.X)throw new N(Ar,"The client has already been terminated.")}R(e,n,r){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.R(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Zl&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(si,i.toString())})}g(e,n,r,i){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.g(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Zl&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(si,s.toString())})}terminate(){this.X=!0}}async function HI(t,e){const n=Qo(t),r=bI(n.serializer)+"/documents",i={writes:e.map(s=>VI(n.serializer,s))};await n.R("Commit",r,i)}async function WI(t,e){const n=Qo(t),r=MI(n.serializer,wI(e));return(await n.g("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(o,a,l){const u=LI(o,a.name),c=Pf(a.updateTime),f=a.createTime?Pf(a.createTime):ve.min(),g=new ft({mapValue:{fields:a.fields}}),y=Ut.newFoundDocument(u,c,f,g);return l&&y.setHasCommittedMutations(),l?y.setHasCommittedMutations():y}(n.serializer,i.document,void 0))}/**
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
 */const ui=new Map;function dg(t){if(t._terminated)throw new N(Ar,"The client has already been terminated.");if(!ui.has(t)){go("ComponentProvider","Initializing Datastore");const e=function(s){return new iI(s,fetch.bind(null))}(function(s,o,a,l){return new ZE(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,eg(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=gc(t._databaseId),r=function(s,o,a,l){return new zI(s,o,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);ui.set(t,r)}return ui.get(t)}class xf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new N(O,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(O,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,l){if(o===!0&&l===!0)throw new N(O,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(O,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(O,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(O,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}let ta=class{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(Ar,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(Ar,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qE;switch(r.type){case"firstParty":return new JE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(O,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ui.get(n);r&&(go("ComponentProvider","Removing Datastore"),ui.delete(n),r.terminate())}(this),Promise.resolve()}};function $I(t,e){const n=typeof t=="object"?t:uc(),r=typeof t=="string"?t:e||"(default)",i=zn(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=p_("firestore");s&&qI(i,...s)}return i}function qI(t,e,n,r={}){var i;const s=(t=fc(t,ta))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Jm("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ke.MOCK_USER;else{a=g_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new N(O,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ke(u)}t._authCredentials=new KE(new Xm(a,l))}}/**
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
 */class Hn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hn(this.firestore,e,this._query)}}class Fe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new an(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}}class an extends Hn{constructor(e,n,r){super(e,n,function(s){return new hc(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new he(e))}withConverter(e){return new an(this.firestore,e,this._path)}}function KI(t,e,...n){if(t=De(t),Zm("collection","path",e),t instanceof ta){const r=re.fromString(e,...n);return gf(r),new an(t,null,r)}{if(!(t instanceof Fe||t instanceof an))throw new N(O,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return gf(r),new an(t.firestore,null,r)}}function GI(t,e,...n){if(t=De(t),arguments.length===1&&(e=oI.C()),Zm("doc","path",e),t instanceof ta){const r=re.fromString(e,...n);return mf(r),new Fe(t,null,new he(r))}{if(!(t instanceof Fe||t instanceof an))throw new N(O,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return mf(r),new Fe(t.firestore,t instanceof an?t.converter:null,new he(r))}}/**
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
 */class Sr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sr(xt.fromBase64String(e))}catch(n){throw new N(O,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Sr(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class yc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(O,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fg{constructor(e){this._methodName=e}}/**
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
 */class vc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(O,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(O,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
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
 */const QI=/^__.*__$/;class JI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new lg(e,this.data,this.fieldMask,n,this.fieldTransforms):new ag(e,this.data,n,this.fieldTransforms)}}function hg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class wc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.rt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get nt(){return this.settings.nt}it(e){return new wc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}st(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.it({path:r,ot:!1});return i.ut(e),i}_t(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.it({path:r,ot:!1});return i.rt(),i}lt(e){return this.it({path:void 0,ot:!0})}ct(e){return Io(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.dt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}rt(){if(this.path)for(let e=0;e<this.path.length;e++)this.ut(this.path.get(e))}ut(e){if(e.length===0)throw this.ct("Document fields must not be empty");if(hg(this.nt)&&QI.test(e))throw this.ct('Document fields cannot begin and end with "__"')}}class YI{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||gc(e)}ft(e,n,r,i=!1){return new wc({nt:e,methodName:n,dt:r,path:Ve.emptyPath(),ot:!1,ht:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pg(t){const e=t._freezeSettings(),n=gc(t._databaseId);return new YI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function XI(t,e,n,r,i,s={}){const o=t.ft(s.merge||s.mergeFields?2:0,e,n,i);yg("Data must be an object, but it was:",o,r);const a=mg(r,o);let l,u;if(s.merge)l=new Mi(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const g=eA(e,f,n);if(!o.contains(g))throw new N(O,`Field '${g}' is specified in your field mask but missing from your input data.`);nA(c,g)||c.push(g)}l=new Mi(c),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new JI(new ft(a),l,u)}function ZI(t,e,n,r=!1){return _c(n,t.ft(r?4:3,e))}function _c(t,e){if(gg(t=De(t)))return yg("Unsupported field value:",e,t),mg(t,e);if(t instanceof fg)return function(r,i){if(!hg(i.nt))throw i.ct(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ct(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ot&&e.nt!==4)throw e.ct("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=_c(a,i.lt(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return EI(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=je.fromDate(r);return{timestampValue:tu(i.serializer,s)}}if(r instanceof je){const s=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:tu(i.serializer,s)}}if(r instanceof vc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Sr)return{bytesValue:OI(i.serializer,r._byteString)};if(r instanceof Fe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.ct(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:mc(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.ct(`Unsupported field value: ${Jo(r)}`)}(t,e)}function mg(t,e){const n={};return function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yo(t,(r,i)=>{const s=_c(i,e.st(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function gg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof vc||t instanceof Sr||t instanceof Fe||t instanceof fg)}function yg(t,e,n){if(!gg(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Jo(n);throw r==="an object"?e.ct(t+" a custom object"):e.ct(t+" "+r)}}function eA(t,e,n){if((e=De(e))instanceof yc)return e._internalPath;if(typeof e=="string")return vg(t,e);throw Io("Field path arguments must be of type string or ",t,!1,void 0,n)}const tA=new RegExp("[~\\*/\\[\\]]");function vg(t,e,n){if(e.search(tA)>=0)throw Io(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yc(...e.split("."))._internalPath}catch{throw Io(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Io(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new N(O,a+t+l)}function nA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class rA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_g("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wg extends rA{data(){return super.data()}}class iA{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function _g(t,e){return typeof e=="string"?vg(t,e):e instanceof yc?e._internalPath:e._delegate._internalPath}/**
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
 */class Ec{}class Eg extends Ec{}function sA(t,e,...n){let r=[];e instanceof Ec&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Ac).length,a=s.filter(l=>l instanceof Ic).length;if(o>1||o>0&&a>0)throw new N(O,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ic extends Eg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ic(e,n,r)}_apply(e){const n=this._parse(e);return Ig(e._query,n),new Hn(e.firestore,e.converter,eu(e._query,n))}_parse(e){const n=pg(e.firestore);return function(s,o,a,l,u,c,f){let g;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new N(O,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Of(f,c);const y=[];for(const w of f)y.push(Nf(l,s,w));g={arrayValue:{values:y}}}else g=Nf(l,s,f)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Of(f,c),g=ZI(a,o,f,c==="in"||c==="not-in");return at.create(u,c,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Ac extends Ec{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ac(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Gi.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)Ig(o,l),o=eu(o,l)}(e._query,n),new Hn(e.firestore,e.converter,eu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Sc extends Eg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Sc(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new N(O,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new N(O,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new ai(s,o);return function(u,c){if(pc(u)===null){const f=Xo(u);f!==null&&Ag(u,f,c.field)}}(i,a),a}(e._query,this._field,this._direction);return new Hn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new hc(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function oA(t,e="asc"){const n=e,r=_g("orderBy",t);return Sc._create(r,n)}function Nf(t,e,n){if(typeof(n=De(n))=="string"){if(n==="")throw new N(O,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yI(e)&&n.indexOf("/")!==-1)throw new N(O,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(re.fromString(n));if(!he.isDocumentKey(r))throw new N(O,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ef(t,new he(r))}if(n instanceof Fe)return Ef(t,n._key);throw new N(O,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jo(n)}.`)}function Of(t,e){if(!Array.isArray(t)||t.length===0)throw new N(O,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ig(t,e){if(e.isInequality()){const r=Xo(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new N(O,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=pc(t);s!==null&&Ag(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new N(O,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(O,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Ag(t,e,n){if(!n.isEqual(e))throw new N(O,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */function aA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class lA extends class{convertValue(n,r="none"){switch(bn(n)){case 0:return null;case 1:return n.booleanValue;case 2:return ne(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,r);case 5:return n.stringValue;case 6:return this.convertBytes(Li(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,r);case 10:return this.convertObject(n.mapValue,r);default:throw J()}}convertObject(n,r){return this.convertObjectMap(n.fields,r)}convertObjectMap(n,r="none"){const i={};return Yo(n,(s,o)=>{i[s]=this.convertValue(o,r)}),i}convertGeoPoint(n){return new vc(ne(n.latitude),ne(n.longitude))}convertArray(n,r){return(n.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(n,r){switch(r){case"previous":const i=rg(n);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(bi(n));default:return null}}convertTimestamp(n){const r=Ln(n);return new je(r.seconds,r.nanos)}convertDocumentKey(n,r){const i=re.fromString(n);dn(cg(i));const s=new Oi(i.get(1),i.get(3)),o=new he(i.popFirst(5));return s.isEqual(r)||cc(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,n)}}function uA(t){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new N(Ym,"limitToLast() queries require specifying at least one orderBy() clause")})((t=fc(t,Hn))._query);const e=dg(t.firestore),n=new lA(t.firestore);return WI(e,t._query).then(r=>{const i=r.map(s=>new wg(t.firestore,n,s.key,s,t.converter));return t._query.limitType==="L"&&i.reverse(),new iA(t,i)})}function cA(t,e,n){const r=aA((t=fc(t,Fe)).converter,e,n),i=XI(pg(t.firestore),"setDoc",t._key,r,t.converter!==null,n);return HI(dg(t.firestore),[i.toMutation(t._key,li.none())])}(function(){(function(n){Or=n})(`${Nr}_lite`),yt(new st("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new ta(new GE(e.getProvider("auth-internal")),new XE(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new N(O,'"projectId" not provided in firebase.initializeApp.');return new Oi(a.options.projectId,l)}(i,n),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Qe("firestore-lite","4.1.3",""),Qe("firestore-lite","4.1.3","esm2017")})();let Is;const dA=new Uint8Array(16);function fA(){if(!Is&&(Is=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Is))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Is(dA)}const ce=[];for(let t=0;t<256;++t)ce.push((t+256).toString(16).slice(1));function hA(t,e=0){return(ce[t[e+0]]+ce[t[e+1]]+ce[t[e+2]]+ce[t[e+3]]+"-"+ce[t[e+4]]+ce[t[e+5]]+"-"+ce[t[e+6]]+ce[t[e+7]]+"-"+ce[t[e+8]]+ce[t[e+9]]+"-"+ce[t[e+10]]+ce[t[e+11]]+ce[t[e+12]]+ce[t[e+13]]+ce[t[e+14]]+ce[t[e+15]]).toLowerCase()}const pA=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Df={randomUUID:pA};function mA(t,e,n){if(Df.randomUUID&&!e&&!t)return Df.randomUUID();t=t||{};const r=t.random||(t.rng||fA)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return hA(r)}var gA="firebase",yA="10.3.1";/**
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
 */Qe(gA,yA,"app");function Tc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Sg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vA=Sg,Tg=new Bn("auth","Firebase",Sg());/**
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
 */const Ao=new Go("@firebase/auth");function wA(t,...e){Ao.logLevel<=j.WARN&&Ao.warn(`Auth (${Nr}): ${t}`,...e)}function Vs(t,...e){Ao.logLevel<=j.ERROR&&Ao.error(`Auth (${Nr}): ${t}`,...e)}/**
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
 */function Nt(t,...e){throw kc(t,...e)}function mt(t,...e){return kc(t,...e)}function _A(t,e,n){const r=Object.assign(Object.assign({},vA()),{[e]:n});return new Bn("auth","Firebase",r).create(e,{appName:t.name})}function kc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Tg.create(t,...e)}function D(t,e,...n){if(!t)throw kc(e,...n)}function At(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vs(e),new Error(e)}function Ot(t,e){t||At(e)}/**
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
 */function ru(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function EA(){return Lf()==="http:"||Lf()==="https:"}function Lf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function IA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EA()||zm()||"connection"in navigator)?navigator.onLine:!0}function AA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ot(n>e,"Short delay should be less than long delay!"),this.isMobile=y_()||v_()}get(){return IA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pc(t,e){Ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class kg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const TA=new Qi(3e4,6e4);function Pg(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ji(t,e,n,r,i={}){return Cg(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ki(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),kg.fetch()(Rg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Cg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},SA),e);try{const i=new PA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw As(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw As(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw As(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw As(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw _A(t,c,u);Nt(t,c)}}catch(i){if(i instanceof ot)throw i;Nt(t,"network-request-failed",{message:String(i)})}}async function kA(t,e,n,r,i={}){const s=await Ji(t,e,n,r,i);return"mfaPendingCredential"in s&&Nt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Rg(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Pc(t.config,i):`${t.config.apiScheme}://${i}`}class PA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mt(this.auth,"network-request-failed")),TA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function As(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function CA(t,e){return Ji(t,"POST","/v1/accounts:delete",e)}async function RA(t,e){return Ji(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ci(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xA(t,e=!1){const n=De(t),r=await n.getIdToken(e),i=Cc(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ci(Ha(i.auth_time)),issuedAtTime:ci(Ha(i.iat)),expirationTime:ci(Ha(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ha(t){return Number(t)*1e3}function Cc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Um(n);return i?JSON.parse(i):(Vs("Failed to decode base64 JWT payload"),null)}catch(i){return Vs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function NA(t){const e=Cc(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ui(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ot&&OA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class DA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ci(this.lastLoginAt),this.creationTime=ci(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function So(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ui(t,RA(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?VA(s.providerUserInfo):[],a=bA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xg(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function LA(t){const e=De(t);await So(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function VA(t){return t.map(e=>{var{providerId:n}=e,r=Tc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function MA(t,e){const n=await Cg(t,{},async()=>{const r=Ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Rg(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):NA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await MA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ji;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ji,this.toJSON())}_performRefresh(){return At("not implemented")}}/**
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
 */function bt(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Tc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ui(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xA(this,e)}reload(){return LA(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await So(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ui(this,CA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:v,isAnonymous:A,providerData:P,stsTokenManager:C}=n;D(m&&C,e,"internal-error");const R=ji.fromJSON(this.name,C);D(typeof m=="string",e,"internal-error"),bt(f,e.name),bt(g,e.name),D(typeof v=="boolean",e,"internal-error"),D(typeof A=="boolean",e,"internal-error"),bt(y,e.name),bt(w,e.name),bt(_,e.name),bt(x,e.name),bt(p,e.name),bt(d,e.name);const B=new Pn({uid:m,auth:e,email:g,emailVerified:v,displayName:f,isAnonymous:A,photoURL:w,phoneNumber:y,tenantId:_,stsTokenManager:R,createdAt:p,lastLoginAt:d});return P&&Array.isArray(P)&&(B.providerData=P.map(S=>Object.assign({},S))),x&&(B._redirectEventId=x),B}static async _fromIdTokenResponse(e,n,r=!1){const i=new ji;i.updateFromServerResponse(n);const s=new Pn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await So(s),s}}/**
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
 */const bf=new Map;function St(t){Ot(t instanceof Function,"Expected a class definition");let e=bf.get(t);return e?(Ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bf.set(t,e),e)}/**
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
 */class Ng{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ng.type="NONE";const Vf=Ng;/**
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
 */function Ms(t,e,n){return`firebase:${t}:${e}:${n}`}class hr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ms(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ms("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hr(St(Vf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||St(Vf);const o=Ms(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=Pn._fromJSON(e,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new hr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new hr(s,e,r))}}/**
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
 */function Mf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Og(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vg(e))return"Blackberry";if(Mg(e))return"Webos";if(Rc(e))return"Safari";if((e.includes("chrome/")||Dg(e))&&!e.includes("edge/"))return"Chrome";if(bg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Og(t=Ee()){return/firefox\//i.test(t)}function Rc(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dg(t=Ee()){return/crios\//i.test(t)}function Lg(t=Ee()){return/iemobile/i.test(t)}function bg(t=Ee()){return/android/i.test(t)}function Vg(t=Ee()){return/blackberry/i.test(t)}function Mg(t=Ee()){return/webos/i.test(t)}function na(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UA(t=Ee()){var e;return na(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jA(){return w_()&&document.documentMode===10}function Ug(t=Ee()){return na(t)||bg(t)||Mg(t)||Vg(t)||/windows phone/i.test(t)||Lg(t)}function FA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function jg(t,e=[]){let n;switch(t){case"Browser":n=Mf(Ee());break;case"Worker":n=`${Mf(Ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Nr}/${r}`}/**
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
 */class BA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function zA(t,e={}){return Ji(t,"GET","/v2/passwordPolicy",Pg(t,e))}/**
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
 */const HA=6;class WA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:HA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class $A{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uf(this),this.idTokenSubscription=new Uf(this),this.beforeStateQueue=new BA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=St(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await hr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await So(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?De(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(St(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zA(this),n=new WA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&St(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await hr.create(this,[St(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(D(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xc(t){return De(t)}class Uf{constructor(e){this.auth=e,this.observer=null,this.addObserver=T_(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function qA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function KA(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=mt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",qA().appendChild(r)})}function GA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function QA(t,e){const n=zn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(xi(s,e??{}))return i;Nt(i,"already-initialized")}return n.initialize({options:e})}function JA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(St);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YA(t,e,n){const r=xc(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Fg(e),{host:o,port:a}=XA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ZA()}function Fg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function XA(t){const e=Fg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:jf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:jf(o)}}}function jf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Bg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return At("not implemented")}_getIdTokenResponse(e){return At("not implemented")}_linkToIdToken(e,n){return At("not implemented")}_getReauthenticationResolver(e){return At("not implemented")}}/**
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
 */async function pr(t,e){return kA(t,"POST","/v1/accounts:signInWithIdp",Pg(t,e))}/**
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
 */const e1="http://localhost";class Vn extends Bg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Tc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Vn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,pr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pr(e,n)}buildRequest(){const e={requestUri:e1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ki(n)}return e}}/**
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
 */class zg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yi extends zg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Bt extends Yi{constructor(){super("facebook.com")}static credential(e){return Vn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bt.PROVIDER_ID="facebook.com";/**
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
 */class zt extends Yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zt.credential(n,r)}catch{return null}}}zt.GOOGLE_SIGN_IN_METHOD="google.com";zt.PROVIDER_ID="google.com";/**
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
 */class Ht extends Yi{constructor(){super("github.com")}static credential(e){return Vn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.GITHUB_SIGN_IN_METHOD="github.com";Ht.PROVIDER_ID="github.com";/**
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
 */class Wt extends Yi{constructor(){super("twitter.com")}static credential(e,n){return Vn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wt.credential(n,r)}catch{return null}}}Wt.TWITTER_SIGN_IN_METHOD="twitter.com";Wt.PROVIDER_ID="twitter.com";/**
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
 */class Tr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pn._fromIdTokenResponse(e,r,i),o=Ff(r);return new Tr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ff(r);return new Tr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ff(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class To extends ot{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,To.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new To(e,n,r,i)}}function Hg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?To._fromErrorAndOperation(t,s,e,r):s})}async function t1(t,e,n=!1){const r=await Ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Tr._forOperation(t,"link",r)}/**
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
 */async function n1(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ui(t,Hg(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=Cc(s.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(t.uid===a,r,"user-mismatch"),Tr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nt(r,"user-mismatch"),s}}/**
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
 */async function r1(t,e,n=!1){const r="signIn",i=await Hg(t,r,e),s=await Tr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function i1(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function s1(t,e,n){return De(t).beforeAuthStateChanged(e,n)}const ko="__sak";/**
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
 */class Wg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ko,"1"),this.storage.removeItem(ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function o1(){const t=Ee();return Rc(t)||na(t)}const a1=1e3,l1=10;class $g extends Wg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=o1()&&FA(),this.fallbackToPolling=Ug(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);jA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,l1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},a1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$g.type="LOCAL";const u1=$g;/**
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
 */class qg extends Wg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qg.type="SESSION";const Kg=qg;/**
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
 */function c1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ra{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ra(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await c1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ra.receivers=[];/**
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
 */function Nc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class d1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Nc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function gt(){return window}function f1(t){gt().location.href=t}/**
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
 */function Gg(){return typeof gt().WorkerGlobalScope<"u"&&typeof gt().importScripts=="function"}async function h1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function p1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function m1(){return Gg()?self:null}/**
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
 */const Qg="firebaseLocalStorageDb",g1=1,Po="firebaseLocalStorage",Jg="fbase_key";class Xi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ia(t,e){return t.transaction([Po],e?"readwrite":"readonly").objectStore(Po)}function y1(){const t=indexedDB.deleteDatabase(Qg);return new Xi(t).toPromise()}function iu(){const t=indexedDB.open(Qg,g1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Po,{keyPath:Jg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Po)?e(r):(r.close(),await y1(),e(await iu()))})})}async function Bf(t,e,n){const r=ia(t,!0).put({[Jg]:e,value:n});return new Xi(r).toPromise()}async function v1(t,e){const n=ia(t,!1).get(e),r=await new Xi(n).toPromise();return r===void 0?null:r.value}function zf(t,e){const n=ia(t,!0).delete(e);return new Xi(n).toPromise()}const w1=800,_1=3;class Yg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await iu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ra._getInstance(m1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await h1(),!this.activeServiceWorker)return;this.sender=new d1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||p1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await iu();return await Bf(e,ko,"1"),await zf(e,ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>v1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ia(i,!1).getAll();return new Xi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),w1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yg.type="LOCAL";const E1=Yg;new Qi(3e4,6e4);/**
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
 */function I1(t,e){return e?St(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Oc extends Bg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function A1(t){return r1(t.auth,new Oc(t),t.bypassAuthState)}function S1(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),n1(n,new Oc(t),t.bypassAuthState)}async function T1(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),t1(n,new Oc(t),t.bypassAuthState)}/**
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
 */class Xg{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return A1;case"linkViaPopup":case"linkViaRedirect":return T1;case"reauthViaPopup":case"reauthViaRedirect":return S1;default:Nt(this.auth,"internal-error")}}resolve(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const k1=new Qi(2e3,1e4);class or extends Xg{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,or.currentPopupAction&&or.currentPopupAction.cancel(),or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){Ot(this.filter.length===1,"Popup operations only handle one event");const e=Nc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,k1.get())};e()}}or.currentPopupAction=null;/**
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
 */const P1="pendingRedirect",Us=new Map;class C1 extends Xg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Us.get(this.auth._key());if(!e){try{const r=await R1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Us.set(this.auth._key(),e)}return this.bypassAuthState||Us.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function R1(t,e){const n=O1(e),r=N1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function x1(t,e){Us.set(t._key(),e)}function N1(t){return St(t._redirectPersistence)}function O1(t){return Ms(P1,t.config.apiKey,t.name)}async function D1(t,e,n=!1){const r=xc(t),i=I1(r,e),o=await new C1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const L1=10*60*1e3;class b1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!V1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zg(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=L1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hf(e))}saveEventToCache(e){this.cachedEventUids.add(Hf(e)),this.lastProcessedEventTime=Date.now()}}function Hf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function V1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zg(t);default:return!1}}/**
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
 */async function M1(t,e={}){return Ji(t,"GET","/v1/projects",e)}/**
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
 */const U1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,j1=/^https?/;async function F1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await M1(t);for(const n of e)try{if(B1(n))return}catch{}Nt(t,"unauthorized-domain")}function B1(t){const e=ru(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!j1.test(n))return!1;if(U1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const z1=new Qi(3e4,6e4);function Wf(){const t=gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function H1(t){return new Promise((e,n)=>{var r,i,s;function o(){Wf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wf(),n(mt(t,"network-request-failed"))},timeout:z1.get()})}if(!((i=(r=gt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=gt().gapi)===null||s===void 0)&&s.load)o();else{const a=GA("iframefcb");return gt()[a]=()=>{gapi.load?o():n(mt(t,"network-request-failed"))},KA(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw js=null,e})}let js=null;function W1(t){return js=js||H1(t),js}/**
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
 */const $1=new Qi(5e3,15e3),q1="__/auth/iframe",K1="emulator/auth/iframe",G1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Q1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function J1(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pc(e,K1):`https://${t.config.authDomain}/${q1}`,r={apiKey:e.apiKey,appName:t.name,v:Nr},i=Q1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ki(r).slice(1)}`}async function Y1(t){const e=await W1(t),n=gt().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:J1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:G1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mt(t,"network-request-failed"),a=gt().setTimeout(()=>{s(o)},$1.get());function l(){gt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const X1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Z1=500,eS=600,tS="_blank",nS="http://localhost";class $f{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rS(t,e,n,r=Z1,i=eS){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},X1),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ee().toLowerCase();n&&(a=Dg(u)?tS:n),Og(u)&&(e=e||nS,l.scrollbars="yes");const c=Object.entries(l).reduce((g,[y,w])=>`${g}${y}=${w},`,"");if(UA(u)&&a!=="_self")return iS(e||"",a),new $f(null);const f=window.open(e||"",a,c);D(f,t,"popup-blocked");try{f.focus()}catch{}return new $f(f)}function iS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const sS="__/auth/handler",oS="emulator/auth/handler",aS=encodeURIComponent("fac");async function qf(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Nr,eventId:i};if(e instanceof zg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",S_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(s||{}))o[c]=f}if(e instanceof Yi){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${aS}=${encodeURIComponent(l)}`:"";return`${lS(t)}?${Ki(a).slice(1)}${u}`}function lS({config:t}){return t.emulator?Pc(t,oS):`https://${t.authDomain}/${sS}`}/**
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
 */const Wa="webStorageSupport";class uS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kg,this._completeRedirectFn=D1,this._overrideRedirectResult=x1}async _openPopup(e,n,r,i){var s;Ot((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await qf(e,n,r,ru(),i);return rS(e,o,Nc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await qf(e,n,r,ru(),i);return f1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ot(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Y1(e),r=new b1(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wa,{type:Wa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Wa];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=F1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ug()||Rc()||na()}}const cS=uS;var Kf="@firebase/auth",Gf="1.3.0";/**
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
 */class dS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hS(t){yt(new st("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jg(t)},u=new $A(r,i,s,l);return JA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yt(new st("auth-internal",e=>{const n=xc(e.getProvider("auth").getImmediate());return(r=>new dS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(Kf,Gf,fS(t)),Qe(Kf,Gf,"esm2017")}/**
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
 */const pS=5*60,mS=Bm("authIdTokenMaxAge")||pS;let Qf=null;const gS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mS)return;const i=n==null?void 0:n.token;Qf!==i&&(Qf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yS(t=uc()){const e=zn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QA(t,{popupRedirectResolver:cS,persistence:[E1,u1,Kg]}),r=Bm("authTokenSyncURL");if(r){const s=gS(r);s1(n,s,()=>s(n.currentUser)),i1(n,o=>s(o))}const i=jm("auth");return i&&YA(n,`http://${i}`),n}hS("Browser");const vS=(t,e)=>e.some(n=>t instanceof n);let Jf,Yf;function wS(){return Jf||(Jf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _S(){return Yf||(Yf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ey=new WeakMap,su=new WeakMap,ty=new WeakMap,$a=new WeakMap,Dc=new WeakMap;function ES(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ln(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ey.set(n,t)}).catch(()=>{}),Dc.set(e,t),e}function IS(t){if(su.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});su.set(t,e)}let ou={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return su.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ty.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AS(t){ou=t(ou)}function SS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qa(this),e,...n);return ty.set(r,e.sort?e.sort():[e]),ln(r)}:_S().includes(t)?function(...e){return t.apply(qa(this),e),ln(ey.get(this))}:function(...e){return ln(t.apply(qa(this),e))}}function TS(t){return typeof t=="function"?SS(t):(t instanceof IDBTransaction&&IS(t),vS(t,wS())?new Proxy(t,ou):t)}function ln(t){if(t instanceof IDBRequest)return ES(t);if($a.has(t))return $a.get(t);const e=TS(t);return e!==t&&($a.set(t,e),Dc.set(e,t)),e}const qa=t=>Dc.get(t);function kS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ln(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ln(o.result),l.oldVersion,l.newVersion,ln(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const PS=["get","getKey","getAll","getAllKeys","count"],CS=["put","add","delete","clear"],Ka=new Map;function Xf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ka.get(e))return Ka.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=CS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||PS.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ka.set(e,s),s}AS(t=>({...t,get:(e,n,r)=>Xf(e,n)||t.get(e,n,r),has:(e,n)=>!!Xf(e,n)||t.has(e,n)}));const ny="@firebase/installations",Lc="0.6.4";/**
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
 */const ry=1e4,iy=`w:${Lc}`,sy="FIS_v2",RS="https://firebaseinstallations.googleapis.com/v1",xS=60*60*1e3,NS="installations",OS="Installations";/**
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
 */const DS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Mn=new Bn(NS,OS,DS);function oy(t){return t instanceof ot&&t.code.includes("request-failed")}/**
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
 */function ay({projectId:t}){return`${RS}/projects/${t}/installations`}function ly(t){return{token:t.token,requestStatus:2,expiresIn:bS(t.expiresIn),creationTime:Date.now()}}async function uy(t,e){const r=(await e.json()).error;return Mn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function cy({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function LS(t,{refreshToken:e}){const n=cy(t);return n.append("Authorization",VS(e)),n}async function dy(t){const e=await t();return e.status>=500&&e.status<600?t():e}function bS(t){return Number(t.replace("s","000"))}function VS(t){return`${sy} ${t}`}/**
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
 */async function MS({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=ay(t),i=cy(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:sy,appId:t.appId,sdkVersion:iy},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await dy(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:ly(u.authToken)}}else throw await uy("Create Installation",l)}/**
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
 */function fy(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function US(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const jS=/^[cdef][\w-]{21}$/,au="";function FS(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=BS(t);return jS.test(n)?n:au}catch{return au}}function BS(t){return US(t).substr(0,22)}/**
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
 */function sa(t){return`${t.appName}!${t.appId}`}/**
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
 */const hy=new Map;function py(t,e){const n=sa(t);my(n,e),zS(n,e)}function my(t,e){const n=hy.get(t);if(n)for(const r of n)r(e)}function zS(t,e){const n=HS();n&&n.postMessage({key:t,fid:e}),WS()}let Sn=null;function HS(){return!Sn&&"BroadcastChannel"in self&&(Sn=new BroadcastChannel("[Firebase] FID Change"),Sn.onmessage=t=>{my(t.data.key,t.data.fid)}),Sn}function WS(){hy.size===0&&Sn&&(Sn.close(),Sn=null)}/**
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
 */const $S="firebase-installations-database",qS=1,Un="firebase-installations-store";let Ga=null;function bc(){return Ga||(Ga=kS($S,qS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Un)}}})),Ga}async function Co(t,e){const n=sa(t),i=(await bc()).transaction(Un,"readwrite"),s=i.objectStore(Un),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&py(t,e.fid),e}async function gy(t){const e=sa(t),r=(await bc()).transaction(Un,"readwrite");await r.objectStore(Un).delete(e),await r.done}async function oa(t,e){const n=sa(t),i=(await bc()).transaction(Un,"readwrite"),s=i.objectStore(Un),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&py(t,a.fid),a}/**
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
 */async function Vc(t){let e;const n=await oa(t.appConfig,r=>{const i=KS(r),s=GS(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===au?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function KS(t){const e=t||{fid:FS(),registrationStatus:0};return yy(e)}function GS(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Mn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=QS(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:JS(t)}:{installationEntry:e}}async function QS(t,e){try{const n=await MS(t,e);return Co(t.appConfig,n)}catch(n){throw oy(n)&&n.customData.serverCode===409?await gy(t.appConfig):await Co(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function JS(t){let e=await Zf(t.appConfig);for(;e.registrationStatus===1;)await fy(100),e=await Zf(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Vc(t);return r||n}return e}function Zf(t){return oa(t,e=>{if(!e)throw Mn.create("installation-not-found");return yy(e)})}function yy(t){return YS(t)?{fid:t.fid,registrationStatus:0}:t}function YS(t){return t.registrationStatus===1&&t.registrationTime+ry<Date.now()}/**
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
 */async function XS({appConfig:t,heartbeatServiceProvider:e},n){const r=ZS(t,n),i=LS(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:iy,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await dy(()=>fetch(r,a));if(l.ok){const u=await l.json();return ly(u)}else throw await uy("Generate Auth Token",l)}function ZS(t,{fid:e}){return`${ay(t)}/${e}/authTokens:generate`}/**
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
 */async function Mc(t,e=!1){let n;const r=await oa(t.appConfig,s=>{if(!vy(s))throw Mn.create("not-registered");const o=s.authToken;if(!e&&nT(o))return s;if(o.requestStatus===1)return n=eT(t,e),s;{if(!navigator.onLine)throw Mn.create("app-offline");const a=iT(s);return n=tT(t,a),a}});return n?await n:r.authToken}async function eT(t,e){let n=await eh(t.appConfig);for(;n.authToken.requestStatus===1;)await fy(100),n=await eh(t.appConfig);const r=n.authToken;return r.requestStatus===0?Mc(t,e):r}function eh(t){return oa(t,e=>{if(!vy(e))throw Mn.create("not-registered");const n=e.authToken;return sT(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function tT(t,e){try{const n=await XS(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Co(t.appConfig,r),n}catch(n){if(oy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await gy(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Co(t.appConfig,r)}throw n}}function vy(t){return t!==void 0&&t.registrationStatus===2}function nT(t){return t.requestStatus===2&&!rT(t)}function rT(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+xS}function iT(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function sT(t){return t.requestStatus===1&&t.requestTime+ry<Date.now()}/**
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
 */async function oT(t){const e=t,{installationEntry:n,registrationPromise:r}=await Vc(e);return r?r.catch(console.error):Mc(e).catch(console.error),n.fid}/**
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
 */async function aT(t,e=!1){const n=t;return await lT(n),(await Mc(n,e)).token}async function lT(t){const{registrationPromise:e}=await Vc(t);e&&await e}/**
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
 */function uT(t){if(!t||!t.options)throw Qa("App Configuration");if(!t.name)throw Qa("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Qa(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Qa(t){return Mn.create("missing-app-config-values",{valueName:t})}/**
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
 */const wy="installations",cT="installations-internal",dT=t=>{const e=t.getProvider("app").getImmediate(),n=uT(e),r=zn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},fT=t=>{const e=t.getProvider("app").getImmediate(),n=zn(e,wy).getImmediate();return{getId:()=>oT(n),getToken:i=>aT(n,i)}};function hT(){yt(new st(wy,dT,"PUBLIC")),yt(new st(cT,fT,"PRIVATE"))}hT();Qe(ny,Lc);Qe(ny,Lc,"esm2017");/**
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
 */const Ro="analytics",pT="firebase_id",mT="origin",gT=60*1e3,yT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Uc="https://www.googletagmanager.com/gtag/js";/**
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
 */const Oe=new Go("@firebase/analytics");/**
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
 */const vT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Be=new Bn("analytics","Analytics",vT);/**
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
 */function wT(t){if(!t.startsWith(Uc)){const e=Be.create("invalid-gtag-resource",{gtagURL:t});return Oe.warn(e.message),""}return t}function _y(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function _T(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ET(t,e){const n=_T("firebase-js-sdk-policy",{createScriptURL:wT}),r=document.createElement("script"),i=`${Uc}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function IT(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function AT(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await _y(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Oe.error(a)}t("config",i,s)}async function ST(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await _y(n);for(const l of o){const u=a.find(f=>f.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Oe.error(s)}}function TT(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await ST(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await AT(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Oe.error(a)}}return i}function kT(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=TT(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function PT(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Uc)&&n.src.includes(t))return n;return null}/**
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
 */const CT=30,RT=1e3;class xT{constructor(e={},n=RT){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ey=new xT;function NT(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function OT(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:NT(r)},s=yT.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Be.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function DT(t,e=Ey,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Be.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Be.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new VT;return setTimeout(async()=>{a.abort()},n!==void 0?n:gT),Iy({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Iy(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Ey){var s;const{appId:o,measurementId:a}=t;try{await LT(r,e)}catch(l){if(a)return Oe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await OT(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!bT(u)){if(i.deleteThrottleMetadata(o),a)return Oe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?of(n,i.intervalMillis,CT):of(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,f),Oe.debug(`Calling attemptFetch again in ${c} millis`),Iy(t,f,r,i)}}function LT(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Be.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function bT(t){if(!(t instanceof ot)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class VT{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function MT(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function UT(){if(Hm())try{await Wm()}catch(t){return Oe.warn(Be.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Oe.warn(Be.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function jT(t,e,n,r,i,s,o){var a;const l=DT(t);l.then(y=>{n[y.measurementId]=y.appId,t.options.measurementId&&y.measurementId!==t.options.measurementId&&Oe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>Oe.error(y)),e.push(l);const u=UT().then(y=>{if(y)return r.getId()}),[c,f]=await Promise.all([l,u]);PT(s)||ET(s,c.measurementId),i("js",new Date);const g=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return g[mT]="firebase",g.update=!0,f!=null&&(g[pT]=f),i("config",c.measurementId,g),c.measurementId}/**
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
 */class FT{constructor(e){this.app=e}_delete(){return delete di[this.app.options.appId],Promise.resolve()}}let di={},th=[];const nh={};let Ja="dataLayer",BT="gtag",rh,Ay,ih=!1;function zT(){const t=[];if(zm()&&t.push("This is a browser extension environment."),__()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Be.create("invalid-analytics-context",{errorInfo:e});Oe.warn(n.message)}}function HT(t,e,n){zT();const r=t.options.appId;if(!r)throw Be.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Oe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Be.create("no-api-key");if(di[r]!=null)throw Be.create("already-exists",{id:r});if(!ih){IT(Ja);const{wrappedGtag:s,gtagCore:o}=kT(di,th,nh,Ja,BT);Ay=s,rh=o,ih=!0}return di[r]=jT(t,th,nh,e,rh,Ja,n),new FT(t)}function WT(t=uc()){t=De(t);const e=zn(t,Ro);return e.isInitialized()?e.getImmediate():$T(t)}function $T(t,e={}){const n=zn(t,Ro);if(n.isInitialized()){const i=n.getImmediate();if(xi(e,n.getOptions()))return i;throw Be.create("already-initialized")}return n.initialize({options:e})}function qT(t,e,n,r){t=De(t),MT(Ay,di[t.app.options.appId],e,n,r).catch(i=>Oe.error(i))}const sh="@firebase/analytics",oh="0.10.0";function KT(){yt(new st(Ro,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return HT(r,i,n)},"PUBLIC")),yt(new st("analytics-internal",t,"PRIVATE")),Qe(sh,oh),Qe(sh,oh,"esm2017");function t(e){try{const n=e.getProvider(Ro).getImmediate();return{logEvent:(r,i,s)=>qT(n,r,i,s)}}catch(n){throw Be.create("interop-component-reg-failed",{reason:n})}}}KT();const GT={apiKey:"AIzaSyBQjVHy5UrXMBYu5fFq0Atd1IOSsAO9_W4",authDomain:"kooop-399b4.firebaseapp.com",projectId:"kooop-399b4",storageBucket:"kooop-399b4.appspot.com",messagingSenderId:"861642362756",appId:"1:861642362756:web:c018549fb9a12228a517d1",measurementId:"G-5808DTTJXS"},jc=Km(GT);WT(jc);const Sy=$I(jc);let QT=Sy;const JT=yS(jc);async function YT(){const t=KI(Sy,"koops"),e=sA(t,oA("date","desc"));return(await uA(e)).docs.map(i=>i.data()).sort()}async function XT(t){return t.id=mA(),await cA(GI(QT,COLLECTION_NAME.KOOPS,t.id),t)}function Fc(){const t=localStorage.getItem("koopUser")||!1;return t?JSON.parse(t):!1}async function ZT(t){let e=new firebase.auth.auth.RecaptchaVerifier("sign-in-button");JT.signInWithPhoneNumber(mynumber,e).then(n=>{setfinal(n),alert("code sent"),setshow(!0)}).catch(n=>{alert(n),window.location.reload()})}const ek="/kooop/assets/error-fe6144de.png";function tk({msg:t,error:e}){return h.jsx("div",{children:e&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"flex justify-center m-4 gap-4",children:h.jsx("img",{src:ek,width:60})}),h.jsx("p",{className:"text-center",children:t})]})})}const nk="/kooop/assets/progress-a09ed1b0.gif";function Qr({icon:t,title:e}){return h.jsxs("div",{className:"text-sky-600 border-t py-2 flex items-center gap-2 mb-1",children:[h.jsx("img",{src:t,width:30}),h.jsx("span",{children:e})]})}const rk="shadow-lg shadow-black/20 p-2 border border-slate-300 rounded-lg mb-4";function ik({}){const[t,e]=E.useState(""),[n,r]=E.useState(!1),[i,s]=E.useState("s"),o=E.useRef(),a=E.useRef(),l=E.useRef(),u=[E.useRef(),E.useRef(),E.useRef()],[c,f]=E.useState(!1),[g,y]=E.useState([]),[w,_]=E.useState(!0),[x,p]=E.useState(!1);E.useEffect(()=>{d()},[]);async function d(){p(!1),_(!0);try{const S=await YT();y(S),console.log(S),_(!1)}catch(S){p(S),p(S.toString())}finally{console.log("done"),_(!1)}}function m(S){s(S),console.log("cur mode ",i)}function v(S){f(S.target.checked)}function A(S){switch(i){case"s":P();break;case"p":B();break}}function P(){console.log("searchKoops")}const C=Ko();function R(S){C(be.VIEW_KOOP.path,{state:{koop:S}})}async function B(){let S={text:t,budget:qn(o),date:qn(l),location:qn(a),media:[qn(u[0]),qn(u[1]),qn(u[2])]};console.log(S);const se=await XT(S);d(),console.log(se)}return h.jsx("div",{className:oc,children:h.jsxs("main",{className:"p-4 ",children:[h.jsxs("section",{className:"sect-search",children:[h.jsxs("div",{className:"cont-search-mode",children:[h.jsx("button",{className:`${i==="s"?" bg-sky-500 text-white ":"  "} hover:bg-sky-500 hover:text-white  p-1 rounded-t-lg `,onClick:S=>m("s"),children:"Search"}),h.jsx("button",{className:`  ${i==="p"?" bg-sky-500 text-white ":""}  p-1 hover:bg-sky-500 hover:text-white rounded-t-lg`,onClick:S=>m("p"),children:"Post"})]}),h.jsxs("div",{className:` flex ${i==="p"?"rounded-lg":""} cont-search-input bg-sky-500 p-2 rounded-b-lg rounded-r-lg `,children:[h.jsx("input",{onChange:S=>e(S.target.value),onKeyUp:S=>{S.key==="Enter"&&A()},className:"h-[30px] outline-none px-1 flex-grow rounded-md ",type:"search",onFocus:S=>r(!0),onBlur:S=>r(!1),placeholder:` ${i==="s"?"search koops ...":"post new koop ..."} `}),h.jsx("span",{className:"h-[30px] w-[30px] hover:scale-125  cursor-pointer inline-block",children:h.jsx("img",{src:i==="s"?nw:tw,onClick:S=>A(),width:20,className:"translate-x-[25%] translate-y-[25%] "})})]})]}),i==="p"&&h.jsxs("section",{className:"sect-koop-details",children:[h.jsxs("div",{children:[h.jsx("input",{type:"checkbox",checked:c,onChange:S=>v(S)}),"Add options"]}),c&&h.jsx(h.Fragment,{children:h.jsxs("div",{className:`cont-koop-det ${rk} `,children:[h.jsxs("div",{className:"flex",children:[h.jsxs("div",{className:"option-card budget  ",children:[h.jsx(Qr,{icon:Gt.budget,title:"Budget"}),h.jsx("input",{ref:o,name:"budget",type:"number",placeholder:"ex: 450"})]}),h.jsxs("div",{className:"option-card date  ",children:[h.jsx(Qr,{icon:Gt.date,title:"Date"}),h.jsx("div",{children:h.jsx("input",{className:"w-[100%]",ref:l,name:"date",type:"date"})})]})]}),h.jsxs("div",{className:"option-card location  ",children:[h.jsx(Qr,{icon:Gt.location,title:"Location"}),h.jsx("div",{children:h.jsx("input",{className:"w-[100%]",ref:a,placeholder:"koop location ...",type:"text",name:"location_add"})})]}),h.jsxs("div",{className:"option-card media flex  flex-col",children:[h.jsx(Qr,{icon:Gt.media,title:"Media (photos/vids)"}),h.jsx("div",{className:"",children:[1,2,3].map((S,se)=>h.jsx("input",{name:`file_${se}`,ref:u[se],type:"file"}))})]})]})})]}),w&&h.jsxs("div",{className:"flex justify-center items-center gap-8 p-2 m-2",children:[h.jsx("img",{src:nk,width:60}),"Please wait ..."]}),h.jsx(tk,{msg:x,error:x}),i==="s"&&h.jsxs("div",{children:[h.jsx("section",{className:"main-cont md:flex md:flex-wrap",children:g.map((S,se)=>h.jsx(o_,{onKoopClicked:Wn=>R(S),data:S},se))}),h.jsxs("div",{children:["<"," 1 2 3 ... 10 ",">"]})]})]})})}function sk(){return h.jsx("div",{children:"Page Not Found"})}const ok="/kooop/assets/info-fc4fa1e5.png";function zr({icon:t,title:e,children:n,small:r}){return h.jsxs("div",{children:[h.jsx(Qr,{title:e,icon:t}),h.jsx("div",{className:"p-2",children:n})]})}function Hr(t){const e={green:{bg:"bg-green-500",border:"border-green-500",text:"text-green-500",hover:{bg:"bg-green-600"}},yellow:{bg:"bg-yellow-500",border:"border-yellow-500",text:"text-yellow-500",hover:{bg:"bg-yellow-600"}},blue:{bg:"bg-blue-500",border:"border-blue-500",text:"text-blue-500",hover:{bg:"bg-blue-600"}},red:{bg:"bg-red-500",border:"border-red-500",text:"text-red-500",hover:{bg:"bg-red-600"}}};return`text-sm border ${e[t].border} p-1 ${e[t].text} rounded-lg hover:bg-green-500 hover:text-white`}function ak({onPageChange:t}){var o,a,l,u;const e=qi(),n=Ko(),[r,i]=E.useState({});E.useEffect(()=>{const c=e.state.koop;i(c),console.log("curKoop",c)},[]);function s(){console.log("current fav => ",r),alert("added to fav")}return h.jsxs("div",{className:`${oc} p-4 `,children:[h.jsxs("div",{className:"btns-cont p-2 flex flex-col md:flex-row gap-4",children:[h.jsx("button",{onClick:c=>n(be.HOME.path),className:Hr("green"),children:"HOME"}),h.jsx("button",{className:Hr("green"),children:"Contact Info"}),h.jsx("button",{onClick:c=>s(),className:Hr("yellow"),children:"FAV"}),h.jsx("button",{className:Hr("yellow"),children:"SHARE"}),h.jsx("button",{className:Hr("yellow"),children:"REPORT"})]}),h.jsxs("div",{className:"flex flex-col md:flex-row",children:[h.jsxs("div",{className:"cont flex-1",children:[h.jsx(zr,{title:"Description",icon:ok,children:h.jsx("p",{children:r.text})}),((o=r.budget)==null?void 0:o.length)>0&&h.jsx(zr,{title:"Budjet",icon:Om,children:h.jsxs("p",{children:[r.budget," $"]})}),((a=r.date)==null?void 0:a.length)>0&&h.jsx(zr,{title:"Date",icon:Dm,children:h.jsx("p",{children:r.text})}),((l=r.location)==null?void 0:l.length)>0&&h.jsx(zr,{title:"Location",icon:Lm,children:h.jsx("p",{children:r.text})}),((u=r.media)==null?void 0:u.size)>0&&h.jsx(zr,{title:"Media",icon:bm,children:h.jsx("p",{children:JSON.stringify(r.media)})})]}),h.jsx("div",{className:"ad-space md:w-[140px] bg-slate-400 min-h-[120pt] md:min-h-[240pt]",children:"ad-space"})]})]})}const lk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAyvSURBVHgBrVh9bFXlGX/e95xze28/6L39wNJCe4sVWBWoc0NQGTWbGk3Y1I1N47awxWUmy0Ix2f5a7PCfLftjYNxM9ocDXRZI5obaKZHFUYPoVDTFiWA77BUoUrDt5bb3+5zz7ve877kfgIoST/P2vOf9eJ7f+3y/V9BlPjttu18I0SeVWqeU6kM/iuEo3kRKJS0hEgoNY4d83x/e4LrDdBmP+DyLtwNArW1vQncAO6N6UFVRUUEX/yT+cT8UjZIbCVMxlUpQbd2wNz295d5cLvEZWX42gAaYM6gYWIDk4zay8EqASwDjDz5Ihe44US5Hydk0TT28hbrvvnvH8Xx+y71PP52gSzzyUgt2Oc6miO2MMzgfCFw0X5RAGhDVTWLeKo8Lyo6/T6m5NL3xwl5SySl9gFQms7EYje17/McbN16K/6dKcJftbJ0lMfC28uhdEJ4G9TTG69Fvk4KWYHsf3pEArLwALI+G413U9N0NNP3sP6mpbyXJWJRm9u8nLxSmhqVLqXP9Hdu6Nnxv8+cCyCp1bXv3PqL+Fz2X5pSRjI25MLbU4R0BsBYh6QpQWKsUzRfiPHWwihX+vvTb39HoWwcpl81S3y9/QaeHnqO2666lib3/orp16ygUDtN79903UpPJ3HwXUfJCLB+r4pTt7Nvqef3Puh7AiSqLE5ptWEoK+YpaANz1fBrD+xyajzlfKW2GShhzxDmopa2NOrviFHZ9qq+poXcPH6YIpNfY0UGiWKC63t6+jvt/svvjsFgXDvwJan3M9+78QBkGFVEr3RyAq8H3fHBm6fVAinFI7xz6DUCF8HLecc4BjLdwIY29/DKlXz5A76dTlH3ySUrlCnRs504KTU3TRw31lEul4t9waqJDZ8+8QOfxrXr+ajkb9wi1/R+Q3MUnUZp5GC0K5Cssm5YJRVdCko2SpQcHwhpZ5SD8nsL6/cKiWsytwaqY7+NbkgSNIg5ZQ2zDsG/Y+VKMD8nQ5ueyqW0XqXgnIgI2DP4bBHxtPYGqqOSd5l1PHI0l2cqlZp+o1RIUA5lmTC7Au+Qoej86Ht6dfpGisGULswjeNMs2jX3jMI+TMIkTyqcJHHSUaQhvcHs0Gi3hsisisgYPKz8+7fskqgRrekoTr8FHLRi0gGivsGkhf6NfB7VbiiWswByhJTAOxc4DCtwERCaVp2du5/8eJCpZQhAHeDIj4bIOvKgsFgaxbHNZgiw9EtbGN5VfVk21BVo6tsEp8G7Du1datAIirUe/UYP0tQpDWFt7nuWWQg6DE5VMUzq4MocwhyETX4V2tgF4TLSiYscZ9MD8XV9V1BNAVGQ8qRnzX8ZsL7Z0M0OcugHfjhLaaWz0X8f+uSoIMuhXgxIBflU+CHiyY4nyl15p2/ZABaBP/dOQAsc7EVBQpZMHzBdBap34aofkolJq+4pgnNXO6n0F+y3MxXGc+sDjy8CEuMAdK/AqHVE1y4DFJg3wL2T34zvuVqlGVi130LkCDPowH4cddUBKCmAaAMomYxIzAJaH4zwNu8oJjyKWo8FTcEijCgO6IqMAnRBV/Iz+pMESHULFZEub+vmzEQzqpUc5pqdtzgBlRu0g3oh3KAg15xg4fwujxDEQWQ6PbMTc8zhAOw7QXpIgxo59806axlp2hlQqRbGYcdLJybPU07OYJk5MwKstijXFKJmcodTZKbrj0EGyfWRSeOdK1kAYG5YAUhdiVhMGajmPotVyAObMoYz7sEQdBihNMhsBmBB7NqR5DU70lO8hX0G6JZti7+7pof8Wi9R52610GPO0bBmdaW6hkVyeYjfcQCOFAr2aTNJM23yaaGiko8LEVRyuH2FGxVmi7KVtGCugn0XLcwxj4hqocRSOSRzCr0ALYy6DNa9BMj/wPC2tPNoagF0POz6DkQyZOBipjVBHxyIKI82t+ur11NTUQs0tLVQbqSUUs7R6zWpyiy4tWboE0m2i+Y1REiNvwqHUSoncGTfqB0BIsMhE9QmMtXiBac5hvohvaBCOYbzuKXyvtR2q801oj6L9jHWC8WbseRTjP0Vs+8OfH6fFtY7eu3zF1ZROzxHH4ltu/Tq1trbQ6Q8naQ1A2raFgOLQgva2UvSAP5pSXWf3uDQSEsoYM3sqx6Y59KcxlNZVDYDivQeqbQWx+VCZKVSN30a0V7O0Fd0P50lj/EgiQUN/fIxqvCJAOHTkyFHKZjOUyWSotaWVcvkszcxMUwSVdz6fp+7F3ToceQxQlZ0cKlPGMVRQETPIHMCeRu842tkg+OzHGKv9RnxGtfSM1PlwMgi4vLuDKxkO5EwJjN/ZvZskJDw7O6d5tqHKOTkxQSVHn03NwRQ6IEXLZBZNDxecQIA0CsXeAjGz3RkpmMAwC0BcrO4HmK3wVgbfaoco6RZgd0qbQRbrCmgu6ORMAKF38G8WvWZpjpt49RWKQYqLFyNaotiYOHkykGSWGhrmUXNzc9nDdbgTIml9R1oP8AWIPXQPjOQqEDsOQJNKaXtkpjNgdBwqTfAYl/x4d0ASZwG4i8wVgNXO14GiBotYBjq/guGnsL9VmICeRtF6+969dFtjA3mpWRorFGlyJknd3V10CpKcg22yCbz1xkFadPB1RA511AbKEUXGUW60JO2FdyQgpYJOQVKHiRBilOuZUH4GoA6A4SQKzc0AwZ5co0ivd7HW1YeStB00/sf5OwhXObTrsb4ZEsvv2UOLoLJG2OixnqtoaF4jFRd1oqAQ1NHeTh+ePGVsWtAHtifUSzDIO1kF14HRUqj5kBOiYbdIJ8AgyzEycAQ7KONZqu8BTA4Ga3NdF4zl8H4bBzyIbDIE7+XKx0bjIJTF+gkw+hvEzUE+hr0dOGzb2Cj9HII5lhinE3izI3bgBihNOhyx4bEjJvcZo6wD7JtQFi2H1I5gcBiqzYDQWgRwjoMJbBsF4G9hvt14mgbHl6kZUHgCe0chPaec2BQyj6KzADiGxc+r4DrgkgZhkSluI9lTtAQS/BraamHKXlf5w/Je3PhxmKQudxSV8iBOr32TmhXf0AVdi697dEVD+tuhSmHKwf00Nj8BbznCtR2ZOMpGwcE6A+LZIB/7psYy0UJX4bg+4LBcECcgjJ2g8Xcc8AQ+1wObbVK2egTsBsvejH8FbL4SNjPuu/QRxg8QA/C1A6wCwd4gFHGmSKL/HIDtK5dr5gJlvNunR62Qdr6PdLYSOuOcRvaZBSpOqz0sSWVTCN8/REo8AFpvFAvDFAhBXzPDtjPDp4phpAubCsqojhV1CiJ/CBs/0BWNoG+jOJgCkaulyTQ7IZH9nhesNtWxVOYAGxDMHxIGONtiMYiTDhlt5XURYq4ST+L790VPe7zj+90JSFHf6p6Bfd8trRgor56CobYqlorQ8YxjYg1feDD+IohzzRgVlpZSHut2ob3m+1Qpb6lcqzHA5dg3hTVzwtz4QoHNTaOf1OFH6FiZBqcBCIFVXivFDoS0J6pIGSmesu3x/5CINsAWjqBNg8VNmPsKYt5uhJlDOt4pnYZCXFhgez64B1tBeVWCqn84wr8Qx8ngTjOPVcyhibOTjrNKX7RWYeyo/rWC6DZLJnJC3rw5+IHpvDp3BX5/GSOxlYJK2ieT+sKCiwhfS5NtTijzLlCQ3ogCb6w0Lrf4Slm5eONiBRouCR0zC4GjtADcAxBALyS9FEKJSOtHC3O5HaVddjXAt4m2zSMRLwjapBUBIjU6dZmwwbXh1djSBa5cTg3DgdJB9lnDsY4zCZlgneFyCwzzxMEcqRJmUCq/vOCixDGSE1sf6MZ8tkd65KoqcBcB5CdF/sByy1m5Xqn+JAjnA2ldz7/D4JQCjCZA/yCYlEJNBxitQ0sHv2xJzj5a35IKwlQ5Wezli9kM5vguzEUtX7rW4nDt+mA0ck2hMHAhnosA8vOwW7wr5Tj7JpXoO8Oqh7fO4581AikcA/FFCDVzBZP+GtEawATS14xrgisaNEcRZey2jlULiTaRiRRNkCz3u3SIEcPFYuQuU/Ke/wj6lOc3jrOtxadNTdIsHQOxw1DFMWUuO697ribQCSksQ2sL7i3sDPMhcQ06cCh2FYRRVOp8p0EeBth6rFmg1COr3OLAJ2H4VIBamo6z8XnfGxz1KX5OVf/qoMoEyjWlMBfwUi3HzsSA+U7TGEgthkV1WNQlRfI6klvuKea30RfwxKGtHXyBQcGgzPvihguVcqrHRDAmKnMhM7ctGvxy8EU/cYfkDjAZD5eAgvESy1ELpFTIBgqhRVlVgOGpugHcDMZ+/XmBXVLFn/R83w7373Jz/Qg/K/fVhOPCd+O2lFGOi4d8lZyGCmGrI88U3JembH8E1dcwXcbzf9DRnuwZ8lT2AAAAAElFTkSuQmCC",uk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjySURBVHgB7ZwLcFTVGcf/5967u9ndvN8xIIEhIgJhqIHC9AFMGW21VoqdEgEVLYx0gFo6rZLWqYA8Bkyd0cpDRQgDtIWhSJ2CvJQgcUpLwAihA5IMUajYhECI2fd99DtnsyHGwMa6ezeO9zdzs+fePZvd/e93v/M97i5DB+eBdBfwhAFMQHj7OlJL7/+FAqAycoDxP5eAIhocomERLDiNJNREEqpRCPSJMCBLnG40+oBRMlnPTFJpJiy6k64AAYnEeQIWPULajGd0ehmwuCESLG6KJVAULIGiYAkUBUugKFgCRaHPCdTXYg4FfQgtJwe20aMhDxkCluSA4Q9AO3MGanU12KefhhNHk0m4QNxijNJSpJaXwzF2LJQCShFZFyl0HcFz9biy4Jcw3nzTdJESGknrhYVwLV2GtJmPRJ8bDKJl7lzo69fDTBIiEH9CZfKPkbHhNcgZGb1+nNrcjObBgyG1tcEsTHfSRlIS7E8+iezXd34hcTgK91FTpsBMTBdImfEQMleu7NVcIxSCQT6oK7YRI2Ampgqkk8WkLVly0zmGqsJf+z5a5v8CTePGofn++6F7vdfvN9khmLqK2cumwVaQf8P7/adOoe3pp6Ht2QOJhOJwPdr+/Bek/+wxsa811MNMTBVIGVLc8x1kFm3rXoZn0TOQmpo+b9ZqKDxN0xDcv99Uszf1FAvuPwAjEPjMsUBDA5p/eB+8FOdwcbrDLchROlqMPQcPgtF8MzF1medPxL43Ca577oHu8yJw4AD0w4fDL+RG88dPQF7VIeh+P1ruvRf622/DTBJectWcLjjnzSUHZYf/xRchUUoRQaeQIO3IEbgo0m6p+AOCv/m16ctuQlMNvV8/ZJEFOQYNEvutlGYE5s0TY8PlQvIrrwhxvGQ1wWd+n5DMOmHZvG53IO31XZ3i8JhHI2sRY7cbjmefRcr06fC+8w6uTZ4MqctSbyYJE4hRYuoqvVOMhX+ZMwehbduAzEy4KiqQsWCBWN5byV91Pe3MJmGnmPNH93WOr1ASGtqwAfLEiUhZuQq2ogFofvgRaH/aCrlbJG02CbMgIxAMD0IUEKoa3Fu3InvXLuiXL+MqLfv6ls1gCRaHk7BVTMvKQlYVOejhw6CRf/Hu3QffurXQ3noLUh8QJkJi60G0abS8M6r19KnSZhcS+rr4+S0Fg+jLWF2NKFgCRcE0gYSjGz4cjsVLYIwcia8KpjlpgzoVqbRCuSjW8R39J65NGA/WLbMXUIoBav3Yhg1DYMuW3tWfb78dypgx0D74AMbRo4glcbWgzyhPNZ/QuXNiqF28QLGP2uNjJEo9cnbvQebq1dBT09AbkqkzkrVpE+yTJiHWxHQViwhi3HorpP79RVVQrzsN5mkX5QwvpQ/e9a9Bp7qPQsWvyGN4KVa6jZqFtKdL8vXax4ABdMQAu3hR7GruZDA+L+gH6uuvW2Acm2UxtSCNsvO0EydQ0NiIPOqG5pK5Z549C21wuJJo/+3vkPduNVIXLxL7XBjnmrW4hQTLP/oP5PDaEPXKIhRWH4Fzwa+EiPKs2chtPI+CEzXIr6tD+r+OiU5svImpQHJrK9T/fIwrTz2Fyz+diva/74a98BbKr8JdDDkjHZLN1jnf9eqrSPv5HPjfP4mWRx9Dy5QHwKjVHKH1uQoE9u+DPnAQ0letAqPa0RVy8v7qd5FUMgLOheWINzEViLW3w1s2FaE33hB+JnC8Rhy3U6+9p+RByc0Tt74dO6BWboS+Z7c4zSJ4qIBm7NsH5+OPQyFxPXv3IrBmNa4tXy66H+4Hy6AhvsTWB5HvSSGrcHNnKXXRnn05J2EfWSJu3T/4PpJO/xtMUcRmz8/vtSP/f4mZQPxzd9Nq4r7rLoTqG9C2YgVY8WBkLlyIL4vkcotb74GDUKmO3QnpLnd0POJF7CyIqoC2knDXs33jBqi87z5tOmJBkBy987vfgfbhhwiufkkci5yI8Y50Y/f/PR5oFy6Iob2kBHouNQhpVfuiaK3XOjupCgWMusOBwM6/UhhliCKbNvQO6NnZYNR1ZTNmiHmhpmZxa7uD7svIjGnkGzOBuJfxLF0KrbkZ7qlTkV37HjIXLRLNPs/GjZ8LVW74Jsi5t1dWisAyh4pmzvJyaNQPa63cBAfFRXk1x5Bzqg65FBJk0IqmcQE3byZRfeS0H0QqicmSkxGz9xXrVEPPy0NSWRkk7kAvXISPViaZ4iLxZGO+SZ/yUIRo36iqgkJ9LoliGZVazvrx453/g78giVIS5Rt3Qq2pgXG4KtwjGzsOSbxUqxtQ604huH379eIapRv2u++G4fMjRCsiYlRGsb6KEAWr3BEFS6Ao9BmB+up5HneBeAuZ99+l0tEwaMUxeCeVNnF1K9+KbwMrCRfQuLs10jNgDKd4qjAcIgjhRo0SbWoxJzW187iRm4t4E3cnbZs2DYGhw2BvvQpGOZl68iSkoiJoFPCxCRMhkWgSLctiZTt7BvJDD0NqaIBMXVff7NmQqETC/tskHqPS0m6nQltw2TIhjv2BnyC0dk1cLw2O/ylGbR1p5w6Enn+eYqTL0F/6IwxKFxhZBCsuhkq9sGDFc2JJ57Ug4/RpqC+vQ+jMWQQpn7N/69viKg+VgkeFgkOdevh6v/6QuTjbt8X9umlT2j7a1avikwhd+gRUDqOOqSYSWB5E8jfIy7FMDn9WxkcfdTxIE6atUZoRorTFoORUlWWwnFw4Zs2CxCuULS2IN3EXiFFQxwyEK4NGR1BHrWYe7ElUFZSoiMZsCkIUDPI3rVPgx6ViNFZorF/6GK7588Hy8qH+jVrTx45BLigQXVgZ8SfuPohLwjo2Ppa6HdMoyWUkmBTw9zhXlGS5Y/b5IPHLgul0U6jKqK1YbsrXEuJuQVIP467HZEpybzaXiyB37WykpMA4dMi072xYqUYUrEg6CpZAUbAEioIlUBQsgaJgCRQFS6AocIGqYNEjFIzWShQlHoZFj1C68wI7D6Q7gfdg/URXdxqpszdQGgi08h804wdgEaGxQ5Owky7oUIsOPkq7tfj6UkUaLOY/7lbQYTD/AyqrSBdOvBWaAAAAAElFTkSuQmCC",ck="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAp4SURBVHgB7VwJcFXVGf7OvS8bgZgQSEgIZjGgCCOLGfZKgKDAoCxip2ht0Zkyg0O3YWrFFot1sNPplMUuQmUrgsAwI4tCAUdBbWQRmgAKWAymMoIgW1iSvHfvuX//c27eywPCewGb9+hwv8x5796zn+/+9z//+c/JE2gAEaXz1085lDaE2xGVHOYJIZYGI4T6YHIK+GsbhwJ4UKjmMISJqg4S9AU8cq5GNYdeJpMziS8mwcPVUCrHL5igCr7oCQ9NYbsiiODhujDgISI8gqLAIygKPIKiwCMoCjyCosAjKAp8iANcy4saVoIiUk6dWYj4PceYE+TwmJ09u4FZL8P0+yPm1Tymp4Fm/hbi7rsjUtlSiLklbR/YBwwqhbhQw+93c5oWsArykfDJAYjU1og1Yi5B4uAnTM4F0NRnQJ2LI2dW/O3eDXPlamDXHmBoKWKNGBPE+iRg89RgwJgwARhcGi07aOHfYLyxCsLyIx6IMUFCB+FIfrcj53STHSAumqcRcZnFooNwqa4GNtWjTV4ujKQkpik+TodbkiA1bWz5bDHePbwSA4vGYtCudcjP7BYXWbolCTpz+Tg+rFoL27Gw/chqfGSux9B7voc+qaPQKb1LTO2iW4sglhxJNtZW/gWX/RddjcVkWE4Amz9diq0Hl6NHx1KM6TkFHdOKVWKLS1VcTFSeyyBZOurqLl+TsuXQ37H7P29fM3BFFLHSrvzqPcx4ayzmbpuMkzVH0NKIkw1P2Pje63ht6a8QslPJwY7qTdiwfz6zEblbPiMBZ2pPIT0lBy2NmL9iSgrU8Csq3sH+LxNhyTpMfur3+OjLjXizci4vReyI5R2SaN8mH1MHv4LkxJa3rGNDUIOUnK85jcN7NqGvvhMwhA+79m3BkRX7IVPrg9uY16tE66ceOUMwsc90ZLXORSzQsgQxMZcun0P1sX9j/6fb8M+db6Nb5WeaIJEskHxXAhLzUyET6sILwWUqSJSrrwoy7sWg4jEo7fI4EysQKwOyRQkiodSJATORlxbpJroOLEGO3wZ9cAaJ3bjpQhtSmdROYqiMRX499NYJGchOL0R+RhcMbP8g8lKLkJwdG6kJR0xW865MuJ/OsqXAD59GzaaVONWrABety6itv+h2hpVzWkoaMltlITUpk6/bgrZ9AHz/SZhLFkE8NAKxRkx0kAj7VDOUuspIyUZ6hz7hKY3QXAr97Xx+BOLE8bityOJqKF7XzAuPpqC+iQ9Fnk86CuLjkw5+kBM9n89EPBG3V4zmzgGWL4ucRzF06LC+vq10kJ7RNmzQ1yFrp6CQ5/Y2oNPfQHx9ImQNuRZR/JxmcdNBigB5//1w1q3VfkPn5Vmgyr3Ai79x7xcuAPXsofOKOKrKOLTcaHYZUgJfN0zhaguovh7kr2eCWMbO1oBq6xpK8J+IjxTFfNvH2vwPYMxYmIGAJoYp0k9JtOHXS4W6WohzNZoUof94DZaaCuPjj2F07YqYg2INaZH1/HSykpLUHBYxSBU4n1y4iByKD+JyBM9Roz91AuL82ah5KSsbom27uGkh74xiFHiWdBR4BEXBTRNE7loBN4sbKUnNzNESuqLZlrTSVMqfjAA7tPwWKCmR/VxJ+oSGJsuyIUy+M3zaUyGi1aNsILZ5REDCaZUMkZisC12xkFdBafTaWkiDzcWUFPYmGmF1cU2cLi5egEjwgTidOD2YR6crc0HtntiS07mdBNXnG7CpmjPVSYdd6VvfIf/o0SQLC8np0IGcortIjh9P9rO/IKtfX44vJrtXb/JPnUqy6nMel2y6rkOHyB41kpziYnJyc3VddlEhWRMnktxfSVJKPaU7/BdYv46sBwaR5HzyznyS351A8tgxXY/K41+yhOyevUiq/nTsSLKkhOzVq9x0yeU3vkVW2TBy8vJI5uSQ7FxMcuQIstes4f41z3BoFkGqMWt4GbvMhWubhOwUdW+QFIKshjiL46y0NLKPVjVZl11ZQU5yiq7DviONJHee9zEooO5TU0mWl+t8gVUrdZxjGOS0bcd2UwpZpkmWGuTJkyT3Veg2A6oPjzxMTtlQkpmZZM+cSYriwIJXdV9Unx3DJJmQFLKt7FGj9QP4nxHEz51kWZlLwDOTybZt8pe/r404FWdP+zlZVj3Jyr0USLtDD9iePp1kE52wwgiyqqrIVuQf4MG2y3LjHn6EpN9PVu9emiBryhRuj/OcPaMfksoT+N0sslesYAKYsMce1RKupdyyyD5zmuxDB8lKT9cE1o8fQ84pJtSxyZ7yI5ckTVDzcMNK2kxsBdM0kdD/O6Bhg3Wcwa2aviSIHr2BsWPcpcO/eOE5fz4oLY1DG/e7Y0eImgu6jNICPmHCZN3i694TxrSfuYuLnTtA+ypgHP0C2hN05hTET34M49cvsJ5zy5kV+yDu6w5SmwFr3oQzaiToz/PYNXIIIiMD2LUTxvnzMFpxX19bCNE+Sy94hZGIG8XNuzuUQk1IvjoKPu6U6xAjrZBFgEel1+eswFlRuldNVJeX57o46gO8SK1lJe5uIBobt/CH0D5qXU6t19T5onu7A68vgzN7LsSH5RCbt/JDaA2a9wq7S066vcnOhqEIC3buJvAt/EEitCF4BcKjHhoJUV7SmGQmQDjBmYwlQTTMgGq3Y8dOnUfm8NMuKgJa8a7pxUvAnD9ClJY2+K/dJSy1StXNGxMeY4kdB8GOfbmIJWXOn0ALFkA88YQmk5Rf6dgx4M58t0E78q5tU2hRh5koLACKChrvVaioQNBzYS9eDFHSm1+pAxDL33AdaaNGwczrBGvgAJjr1oP+MBsiqwOc9DR+xVgaj30FwQOmyzUQeytAubksyUz8HemaFMfHZsawMqB9e+CbU4Ai8bnn4BytguD6blSQbpwgim6Qhe+LXh2vNhLdawHzpZdCabaKeXA4jBdm6P0x319fBR0/Dtq9G4L1WrBOfShv9hwIyf6jx1lSDOHqF7aH1MtsPD0Jxj2dIadNg5g5E+Ye1oWPTtDlncxMVz+i+WgWQeqVcJ78AUS/fnBKSpCgGlM6Ztw40H09QCV9eT4hrSfkiOGsFDNZIeeyAeDGNVmnGu6M512lzcabGPwAjIEDWWdkugRmZwFbWP9sfxe0cxdwiZ1n7TJgDhgA9B8ASmb9t3kzUF7Oipy9Ap06wTdkMMy+/dzyv3wWGD4UxFKDc+dA/fpqyXPUKdvsnNBGZjQ0azVP4XXxROme1VFoULlq8hSue4tnW5aSoH669pS8s49noH79tfcQ1VUg7rQI2/cK55NCjbsdUGnusU4RkiitldTpdCWZ+lS+uOIh6GfE/VMeSZXWuOMfYV8uDM2SoCuEQARfESA0H4WRoES+sVDkfzMQjhHxOJ1ooh7jqnQ9yCvaDE8XDcXNUA0tr4O+JZyMdJhlZbAtXtMlmbfqMdsQYu4wu/rkc/w2dJqHmD/A/zcHlOcwiwKPoCjwCIoCj6Ao8AiKAo+gKPAIigJF0HZ4uB4qFUHvw8P1ME8tNdQvLakfWSqAh3BU8+q/0OCP83wzBO5vdnlwUQ2XE1dJ6197Y7b48im4P5V3u2I7hxc59FKcqIj/An+ArgXZL2cjAAAAAElFTkSuQmCC",dk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAm+SURBVHgB7Zx7bBTHHce/u3u7dz7fOdgQ2zixhXGBhKpp1VpUiVqSSiFULZFS8SyPlpcCNKGPgEEpBQSChraR+KdVq1YVLaiiVJWoKCptKWpo1JKkDqQUGxTqmIfBgO17mHs/dvqbuTtz9p29vr0jTpz9orPvZmfndj77m9/vNzOLAUuWLFkaO0lDCxoaGuZJkvQkPoJijJ2+du3a8ewy29BKiqI8RRU34aOrQYBkWBpRFiADWYAMZAEykAXIQBYgA1mADGQBMpAFyEAWIAONa0As/a8Y2TCuJeXOxgvUuAQkMR3NExlmTwyiM+DAn3sUhBIKzOgDDEiiwaGnbIABhqYg6kjQZB3rm8LYOLUfCovTEoaC+T4X1r3zAO7GJdFqISoJIF3XoWkaXZ8kXoUokUggmUzmnMc7oiDFJSFTp9jI7TI6X2FJbJgawouNPthYItWOpOPxSh+emODAX3vsKFRFA1JVFWvWrMGCBQtQXl6OQuXz+XDw4EEcPnxYfJYEC4ZlDXEsq/fDTnB+2+XGL96zU/kwMYVxy9CxrimCF6b6CKw+pIIEhy0Fu1CXXTSg+fPno6WlBbJsLiDW1tZiz5496O3txcmTJwWEeTUhbH/EAxUx8G5tmRZBlNXg11cGWwCHqZPlyEhiy4wwVk+5S+ckBtVhdH5vQsMbHi0d0Qqz8KLCPK08Yvbs2abhDFwEnd/c3Jxqk+7+ZyYEoREc3pXUUNPxbG0I+qDbTzWpgkKFmwjO2ikeOieS07Yn6cDX35yEO9FUa4WqaAsKBoMohfhQ5eJdsOXph1NKIttbS9wnkX9Z2xTH+ileutN6zjmeRJmA0x60FeycMyrq1nPHeuDAATE8SqVU9wd3RnwiQGwADihaJfGdj0WxaXqvgJMNgFHJ7ZgDL56biAtBRfgnsyragtrb2zFnzhzMnTsXbrc75zi3jBUrVmDy5MkoVpLwItznMIpWUWxo8kKlUJ4tjul2zI4Xzk7E2/22DFKYVUnCPI9ER44cyW3cZsOWLVtQU1ODUojDsVES+HxTDN+Y5oVNT+TUuRUtw8ZzHI5qelhl674lihzO3r17Rfgv1olnrEAhIC2PxrCmkSxHwMkaVuSTfLpdwGkVcHQUYzkZ3RdAPLrt3r0bCxcuzJs48uOFJZSSANDySAxrGz0DSWD2cT/BWfFmNfkcuWRwuEoOiHd+586dWLJkSQ4Efuz69evCLxXmkxiaXEnMcHkoW84dVn0iWlXhQogcMis81xlJJV3ucDqd2LVrF1auXJkXDm3rYt26dfD7/ShUdkShiFCf1SaBuBUro2hVhTYK5WDmo9VwKpkFcZ+zdetWEbHyDR8OZ/ny5eK3KUlDQ7+UilbcIft5hp0UuZFIj1A6lQQQHzKbN28WAPLBuXr1qjjW1dWFUqmP8pyXyHLayRhVKZaKWBwOk5GgV5Jm9fx9sSoaELcc7pAXLVqUN1pxn7N69eqSwuFyqQn84FNeAUbkR5n7QlAiSYbj3W785L0ygsULxygPykSrxYsXD+uQly1bVhCc0WYuDimOens87zGeV2+kXCmiT8LPOx1FZUOmbZAD2LFjx7DRikMpBA5jqW6khkqRk18+waW1occqYgJWcW2ZkKIo2L59O1atWpXX53DLWb9+fV44fBhevnx5UBmH09PTI97zDt2M2GnmrhSXB9NleWJ8ya24bNoUoFmzZuWFwzvKHTK3HD5HG0779+9HX1/fwDmdnZ04evSo+Mwj0bHuMnRGy8WkU894GZb1ylc26LiMbgr/v7leVrQ1mvJBdXV1eR1yJpQbDSsOhE9w582bh3A4jFOnTsHr9aYOUji/EZGx6EwFnq52oFpLZ8VUztJJYGqvQh9Y/MjYSOb93YSKv99RcS0qj82uRltbGwKBAFwu10AZH1Z86XW0PocDOXTo0LDHPXEVv7vBL4/lmZGPnC1n9sIkU4usg2XK/i5duoRt27YJGHzBvbW1FUuXLkVHRwdKp3t2wdLz8nuvoZ8HvwBzq4f5ZDrMHzt2DCdOnBAL9Xy5Y7yqKA8Wj8fHNRwu6+EFA1mADFQyQMUvbg7X5j3XOxYyCYhhospodS+G5fVROJXSreBl9HhVFF+iDUSe6LkoIV74cABTXQnI7P2FZQqQy6bj95/zolKJYrpbxy+bA7SgxWAnRpUiLkqosjFUEDiZFrHKaf+qnLZpJohjTACtUBiVpWZKGtXh9cW2M69BP56fEsG+TwTR4GB4pjqCV2b6CVpM5Dg1lDza6Vwl/Z38ZjnlVOjnbVbaUrmTW2JihZHvs2mSuZVGU2H+Cw/GcbUf+OHlCsjU+defDGJVYxBfrtNx3iejk/aiprp0zJyQwL7/OrDrsRDeoq3fz1ZGsfeiG9+eHsBbfXY8XRtDy1knvvXxOMJxhtduKzhyw55+UCOJK9TOrKoI5lZH0RZw4QGC/NPmCHrDSUxyyDjSaUfLzBDa+hU85Ezg+212fHOGjiRNVP9xR8Oz9XG81OrCK5+8ix9fLsNZ/720c7QyZUE6E/Nl8ZAB3z+I0fyHg+rwx/HdC27a5pVBfYCdLnSyXYdO28O76OI9UYav1AXR6rHhRxc1eBMK5j8cojaS6I8mMbsmStZz75KO39TwXF0Ik6iNcx6GRjdDlRLBy20ughTHp8mi+qMR7GkrR60jga/Wh1GmJOGjLf3PV8dxulvCkvogHGStZ/1qwXBMA3qjjxbdy4GXpwfxvUeD6AoreDdgRyipiHXjrzXEcN5ro+kCBycNPAjHf57z2TGXLGfDjCQeVGO40O+EJyzhnFeju17GH/FJDzUZ/wuo0BQJp3sd4APqFn2Pi3aov0gW3FhB600hRUxm9fQ+fVu/hhu0q3HWq+L1O3acoTZXNgZw4paanrkVrpzHriorK5+hX0+MdFJYl3GKvtRNF3sjouBnHeW0YQd0R1R0RzVcvCuj2gmc6dXwbshGEGRcCWm0wK6hO8w3/2S841MwnTq5r53A0tKGnQb7qdsaLXKl7vOdmA2XAjac92t4myyuI6yindr5y20HppHfO3bTiX9TG91Rldq2CVh/omNMPEQl4289NjxUpuMpsqQ97W66eaOynn/RhsLJ7IKcsxobG18tzf8Xy3aKmUkj2QW95RZWX87wxy4V/+lXRvdYSlYV49qS8PTP1UVouCv4J1mzxIwBUb9fpeWaluyy+/gI3tDZd6qMP8Lyq2tqehhJeeoaNzeKropKf+h2jLL+8BqbZxSFk/9wyJpqGMgCZCALkIEsQAayABnIAmQgC5CBLEAGsgAZyAJkIAuQgXLmYrRT+pokSR+WqVJJxf88DixZsmTpA6T/Ax/aBPGX97nPAAAAAElFTkSuQmCC",Wr=[{icon:uk,text:"Info",name:"info"},{icon:ck,text:"Favorites",name:"fav"},{icon:dk,text:"Subscription",name:"suv"}];function fk(){const[t,e]=E.useState(Wr.name);return h.jsxs("div",{children:[h.jsxs("div",{className:"   bg-gradient-to-b text-white from-[#d138fb] to-[#8d3fff] header text-center min-h-[160pt] flex flex-col gap-2 p-4  ",children:[h.jsx(_t,{to:"/",children:h.jsx("img",{src:nc,width:40,className:"absolute  cursor-pointer "})}),h.jsx("img",{src:lk,className:"rounded-full mx-auto ",width:80}),h.jsx("div",{className:"displayname",children:"Displayname"}),h.jsx("div",{className:"text-sm",children:"email@server.com"})]}),h.jsx("div",{className:"menu max-w-[1100px]  shadow-md shadow-black/50 flex justify-around items-center min-h-[80pt] bg-white p-4 border  border-slate-200 rounded-md mx-8 md:mx-auto -mt-[20pt] ",children:Wr.map((n,r)=>h.jsxs("div",{onClick:i=>e(n.name),className:"cursor-pointer group",children:[h.jsx("img",{className:"mx-auto",src:n.icon}),h.jsx("div",{className:"text-center text-gray-400 group-hover:text-black",children:n.text})]}))}),h.jsxs("div",{className:"sec-cont bg-red-500 p-4 max-w-[1100px] mx-auto",children:[Wr[0].name===t&&h.jsx("div",{children:"Info"}),Wr[1].name===t&&h.jsx("div",{children:"My Favs"}),Wr[2].name===t&&h.jsx("div",{children:"My Sub"})]})]})}function hk(){return h.jsx("div",{className:"bg-slate-700  text-white min-h-[120pt]",children:"Footer"})}function Ty(){return h.jsxs("div",{className:"dbg-links",children:[h.jsxs("ul",{children:[h.jsx("p",{children:"------ DEBUG MENU -----"}),h.jsx("li",{children:h.jsx(_t,{to:"/",children:"Home"})}),h.jsx("li",{children:h.jsx(_t,{to:be.MY_ACCOUNT.path,children:"My Account"})}),h.jsx("li",{children:h.jsx(_t,{to:be.LOGIN.path,children:"Login"})}),h.jsx("li",{children:h.jsx(_t,{to:be.LEGAL.path,children:"Legal"})}),h.jsx("li",{children:h.jsx(_t,{to:be.SUBCRIPTION.path,children:"Subscription"})}),h.jsx("li",{children:h.jsx(_t,{to:be.INTRO.path,children:"Intro"})})]}),h.jsx("p",{children:"------ DEBUG MENU -----"})]})}const pk=()=>{const[t,e]=E.useState(!1);return E.useState(()=>{const n=Fc();e(n)},[]),h.jsxs(h.Fragment,{children:[h.jsx(Ty,{}),h.jsx(s_,{user:t}),h.jsx($w,{}),h.jsx(hk,{})]})},mk="/kooop/assets/google-0cf576a5.svg",gk="/kooop/assets/phone-87144750.svg";const yk="/kooop/assets/key-78c50218.png";function vk(){return h.jsx("div",{className:" w-[100vw] mx-auto max-w-[1100px] my-4 grid gap-1 grid-flow-col auto-cols-[150pt] snap-x scroll-p-1 snap-mandatory overflow-x-scroll  ",children:[...Array(10).fill(Wl)].map((t,e)=>h.jsx("div",{className:"w-[140pt] rounded-lg h-[100pt] border-0 overflow-hidden border-purple-600 bg-emerald-500/0",children:h.jsx("img",{src:t,className:"w-[100%] object-none"})},e))})}function ah(){Ko();const[t,e]=E.useState(""),n=E.useRef(),r=E.useRef(),i=E.useRef();E.useEffect(()=>{Fc()},[]);function s(o){t==="phone"&&(n.current.value,ZT())}return h.jsxs("div",{className:"bg-gradient-to-b from-sky-500 to-purple-700 text-center pb-4 flex-col min-h-[100vh] flex  ",children:[h.jsx(Ty,{}),h.jsxs("div",{children:[h.jsx("img",{src:nc,width:180,className:"mx-auto"}),h.jsx("p",{children:"Proviter de 10000 + de services offerts "})]}),t===""&&h.jsx(vk,{}),h.jsxs("div",{children:[t==="phone"&&h.jsxs("div",{children:[h.jsx("div",{className:"text-white",children:"Phone"}),h.jsx("input",{maxLength:10,ref:n,className:"p-2 rounded-lg m-2",type:"tel",placeholder:"0893092849"}),h.jsx("div",{className:"text-white",children:"OTP"}),h.jsx("input",{maxLength:4,className:"p-2 rounded-lg m-2",ref:r,type:"phone",placeholder:"****"}),h.jsxs("button",{id:"sign-in-button",ref:i,onClick:s,className:`bg-white disabled:bg-white/50 disabled:text-gray-200/50 min-w-[200px] my-4 text-center mx-auto 
              hover:outline hover:outline-purple-600 md:max-w-[50%] 
              p-2 flex gap-4 rounded-lg`,children:[h.jsx("img",{src:yk,width:30}),"Sign In"]})]}),h.jsxs("div",{className:` max-w-[60%] mx-auto text-center flex pt-2 ${t!==""?"border-t border-gray-400":""} flex-col items-center justify-center mt-4 gap-4`,children:[t!==""&&h.jsx("p",{children:"OR"}),[{title:"Sign With Phone Number",icon:gk,section:"phone"},{title:"Sign In With Google",icon:mk,section:"google"}].map((o,a)=>h.jsxs("button",{onClick:l=>e(o.section),className:`bg-white 
              hover:outline hover:outline-purple-600 md:max-w-[50%] 
              p-2 flex gap-4 rounded-lg ${o.section===t?" hidden ":""} `,children:[h.jsx("img",{src:o.icon,width:30}),o.title]},a))]})]})]})}function wk(){return h.jsx("div",{children:"Legal"})}function _k({data:t}){const{title:e,features:n,price:r,bg:i,text:s,outline:o,id:a}=t;function l(u){console.log(u)}return h.jsxs("div",{className:`border text-center p-4 m-2 mt-8 min-w-[30%] rounded-lg text-white ${i} `,children:[h.jsx("div",{className:`bg-white w-fit p-2 mx-auto ${s} min-w-[100pt] text-center rounded-lg -mt-8 outline ${o} `,children:e}),h.jsx("div",{className:"my-4 gap-2 flex flex-col",children:n.map((u,c)=>h.jsxs("div",{children:["• ",u]}))}),h.jsxs("div",{className:"text-[40pt]",children:[r," FC"]}),h.jsx("button",{onClick:u=>l(a),className:"border p-1 rounded-lg hover:bg-white/30",children:"BUY NOW"})]})}function Ek(){const t=[{title:"Basic",features:["feature 1","feature 2","feature 3","feature 4"],price:5e3,bg:"bg-gradient-to-r from-blue-500 to-purple-500",text:"text-blue-500",outline:"outline-blue-500"},{title:"Standard",features:["feature 1","feature 2","feature 3","feature 4"],price:7500,bg:"bg-gradient-to-r from-orange-500 to-pink-500",text:"text-orange-500",outline:"outline-orange-500"},{title:"Premium",features:["feature 1","feature 2","feature 3","feature 4"],price:1e4,bg:"bg-gradient-to-r from-sky-500 to-blue-500",text:"text-purple-500",outline:"outline-purple-500"}];return h.jsx("div",{className:`  ${oc} md:flex justify-center items-center `,children:t.map((e,n)=>h.jsx(_k,{data:{...e,id:n}},n))})}function Ik(){return h.jsx("div",{children:"Intro"})}function Ak(){E.useState(r_.HOME.path),E.useState({});const[t,e]=E.useState(!0);return E.useEffect(()=>{const n=Fc();e(n)},[]),h.jsx(Zw,{basename:"/kooop",children:h.jsxs(Kw,{children:[h.jsxs(ut,{path:"/",element:t?h.jsx(pk,{}):h.jsx(ah,{}),children:[h.jsx(ut,{index:!0,element:h.jsx(ik,{})}),h.jsx(ut,{path:be.VIEW_KOOP.path,element:h.jsx(ak,{})}),h.jsx(ut,{path:be.LEGAL.path,element:h.jsx(wk,{})}),h.jsx(ut,{path:be.SUBCRIPTION.path,element:h.jsx(Ek,{})}),h.jsx(ut,{path:"*",element:h.jsx(sk,{})})]}),h.jsx(ut,{path:be.MY_ACCOUNT.path,element:h.jsx(fk,{})}),h.jsx(ut,{path:"/intro",element:h.jsx(Ik,{})}),h.jsx(ut,{path:be.LOGIN.path,element:h.jsx(ah,{})})]})})}Ya.createRoot(document.getElementById("root")).render(h.jsx(yh.StrictMode,{children:h.jsx(Ak,{})}));
