function RS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function DS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vv={exports:{}},eu={},wv={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ko=Symbol.for("react.element"),PS=Symbol.for("react.portal"),OS=Symbol.for("react.fragment"),LS=Symbol.for("react.strict_mode"),$S=Symbol.for("react.profiler"),MS=Symbol.for("react.provider"),bS=Symbol.for("react.context"),FS=Symbol.for("react.forward_ref"),jS=Symbol.for("react.suspense"),US=Symbol.for("react.memo"),VS=Symbol.for("react.lazy"),pm=Symbol.iterator;function BS(t){return t===null||typeof t!="object"?null:(t=pm&&t[pm]||t["@@iterator"],typeof t=="function"?t:null)}var Ev={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_v=Object.assign,Sv={};function zi(t,e,n){this.props=t,this.context=e,this.refs=Sv,this.updater=n||Ev}zi.prototype.isReactComponent={};zi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Iv(){}Iv.prototype=zi.prototype;function Hd(t,e,n){this.props=t,this.context=e,this.refs=Sv,this.updater=n||Ev}var Wd=Hd.prototype=new Iv;Wd.constructor=Hd;_v(Wd,zi.prototype);Wd.isPureReactComponent=!0;var mm=Array.isArray,Tv=Object.prototype.hasOwnProperty,qd={current:null},Cv={key:!0,ref:!0,__self:!0,__source:!0};function kv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Tv.call(e,r)&&!Cv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ko,type:t,key:s,ref:o,props:i,_owner:qd.current}}function zS(t,e){return{$$typeof:ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ko}function HS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gm=/\/+/g;function sc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?HS(""+t.key):e.toString(36)}function La(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ko:case PS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+sc(o,0):r,mm(i)?(n="",t!=null&&(n=t.replace(gm,"$&/")+"/"),La(i,e,n,"",function(u){return u})):i!=null&&(Kd(i)&&(i=zS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(gm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",mm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+sc(s,a);o+=La(s,e,n,l,i)}else if(l=BS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+sc(s,a++),o+=La(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ra(t,e,n){if(t==null)return t;var r=[],i=0;return La(t,r,"","",function(s){return e.call(n,s,i++)}),r}function WS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Je={current:null},$a={transition:null},qS={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:$a,ReactCurrentOwner:qd};W.Children={map:ra,forEach:function(t,e,n){ra(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ra(t,function(){e++}),e},toArray:function(t){return ra(t,function(e){return e})||[]},only:function(t){if(!Kd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=zi;W.Fragment=OS;W.Profiler=$S;W.PureComponent=Hd;W.StrictMode=LS;W.Suspense=jS;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qS;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=_v({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Tv.call(e,l)&&!Cv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ko,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:bS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:MS,_context:t},t.Consumer=t};W.createElement=kv;W.createFactory=function(t){var e=kv.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:FS,render:t}};W.isValidElement=Kd;W.lazy=function(t){return{$$typeof:VS,_payload:{_status:-1,_result:t},_init:WS}};W.memo=function(t,e){return{$$typeof:US,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=$a.transition;$a.transition={};try{t()}finally{$a.transition=e}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(t,e){return Je.current.useCallback(t,e)};W.useContext=function(t){return Je.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return Je.current.useDeferredValue(t)};W.useEffect=function(t,e){return Je.current.useEffect(t,e)};W.useId=function(){return Je.current.useId()};W.useImperativeHandle=function(t,e,n){return Je.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return Je.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return Je.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return Je.current.useMemo(t,e)};W.useReducer=function(t,e,n){return Je.current.useReducer(t,e,n)};W.useRef=function(t){return Je.current.useRef(t)};W.useState=function(t){return Je.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return Je.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return Je.current.useTransition()};W.version="18.2.0";wv.exports=W;var I=wv.exports;const Mn=DS(I),KS=RS({__proto__:null,default:Mn},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GS=I,QS=Symbol.for("react.element"),YS=Symbol.for("react.fragment"),XS=Object.prototype.hasOwnProperty,JS=GS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ZS={key:!0,ref:!0,__self:!0,__source:!0};function xv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)XS.call(e,r)&&!ZS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:QS,type:t,key:s,ref:o,props:i,_owner:JS.current}}eu.Fragment=YS;eu.jsx=xv;eu.jsxs=xv;vv.exports=eu;var y=vv.exports,hh={},Av={exports:{}},mt={},Nv={exports:{}},Rv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,V){var B=R.length;R.push(V);e:for(;0<B;){var de=B-1>>>1,Ie=R[de];if(0<i(Ie,V))R[de]=V,R[B]=Ie,B=de;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var V=R[0],B=R.pop();if(B!==V){R[0]=B;e:for(var de=0,Ie=R.length,ta=Ie>>>1;de<ta;){var ur=2*(de+1)-1,ic=R[ur],cr=ur+1,na=R[cr];if(0>i(ic,B))cr<Ie&&0>i(na,ic)?(R[de]=na,R[cr]=B,de=cr):(R[de]=ic,R[ur]=B,de=ur);else if(cr<Ie&&0>i(na,B))R[de]=na,R[cr]=B,de=cr;else break e}}return V}function i(R,V){var B=R.sortIndex-V.sortIndex;return B!==0?B:R.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,v=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=R)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function E(R){if(w=!1,g(R),!v)if(n(l)!==null)v=!0,nc(k);else{var V=n(u);V!==null&&rc(E,V.startTime-R)}}function k(R,V){v=!1,w&&(w=!1,p(L),L=-1),m=!0;var B=d;try{for(g(V),h=n(l);h!==null&&(!(h.expirationTime>V)||R&&!kt());){var de=h.callback;if(typeof de=="function"){h.callback=null,d=h.priorityLevel;var Ie=de(h.expirationTime<=V);V=t.unstable_now(),typeof Ie=="function"?h.callback=Ie:h===n(l)&&r(l),g(V)}else r(l);h=n(l)}if(h!==null)var ta=!0;else{var ur=n(u);ur!==null&&rc(E,ur.startTime-V),ta=!1}return ta}finally{h=null,d=B,m=!1}}var N=!1,P=null,L=-1,J=5,z=-1;function kt(){return!(t.unstable_now()-z<J)}function is(){if(P!==null){var R=t.unstable_now();z=R;var V=!0;try{V=P(!0,R)}finally{V?ss():(N=!1,P=null)}}else N=!1}var ss;if(typeof f=="function")ss=function(){f(is)};else if(typeof MessageChannel<"u"){var fm=new MessageChannel,NS=fm.port2;fm.port1.onmessage=is,ss=function(){NS.postMessage(null)}}else ss=function(){S(is,0)};function nc(R){P=R,N||(N=!0,ss())}function rc(R,V){L=S(function(){R(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,nc(k))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var B=d;d=V;try{return R()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,V){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var B=d;d=R;try{return V()}finally{d=B}},t.unstable_scheduleCallback=function(R,V,B){var de=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?de+B:de):B=de,R){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=B+Ie,R={id:c++,callback:V,priorityLevel:R,startTime:B,expirationTime:Ie,sortIndex:-1},B>de?(R.sortIndex=B,e(u,R),n(l)===null&&R===n(u)&&(w?(p(L),L=-1):w=!0,rc(E,B-de))):(R.sortIndex=Ie,e(l,R),v||m||(v=!0,nc(k))),R},t.unstable_shouldYield=kt,t.unstable_wrapCallback=function(R){var V=d;return function(){var B=d;d=V;try{return R.apply(this,arguments)}finally{d=B}}}})(Rv);Nv.exports=Rv;var eI=Nv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv=I,ft=eI;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pv=new Set,Hs={};function Ur(t,e){Ci(t,e),Ci(t+"Capture",e)}function Ci(t,e){for(Hs[t]=e,t=0;t<e.length;t++)Pv.add(e[t])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dh=Object.prototype.hasOwnProperty,tI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ym={},vm={};function nI(t){return dh.call(vm,t)?!0:dh.call(ym,t)?!1:tI.test(t)?vm[t]=!0:(ym[t]=!0,!1)}function rI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function iI(t,e,n,r){if(e===null||typeof e>"u"||rI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ze(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Le[t]=new Ze(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Le[e]=new Ze(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Le[t]=new Ze(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Le[t]=new Ze(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Le[t]=new Ze(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Le[t]=new Ze(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Le[t]=new Ze(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Le[t]=new Ze(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Le[t]=new Ze(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gd=/[\-:]([a-z])/g;function Qd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gd,Qd);Le[e]=new Ze(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gd,Qd);Le[e]=new Ze(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gd,Qd);Le[e]=new Ze(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Le[t]=new Ze(t,1,!1,t.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Le[t]=new Ze(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yd(t,e,n,r){var i=Le.hasOwnProperty(e)?Le[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iI(e,n,i,r)&&(n=null),r||i===null?nI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var wn=Dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ia=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),ei=Symbol.for("react.fragment"),Xd=Symbol.for("react.strict_mode"),fh=Symbol.for("react.profiler"),Ov=Symbol.for("react.provider"),Lv=Symbol.for("react.context"),Jd=Symbol.for("react.forward_ref"),ph=Symbol.for("react.suspense"),mh=Symbol.for("react.suspense_list"),Zd=Symbol.for("react.memo"),Tn=Symbol.for("react.lazy"),$v=Symbol.for("react.offscreen"),wm=Symbol.iterator;function os(t){return t===null||typeof t!="object"?null:(t=wm&&t[wm]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,oc;function ys(t){if(oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);oc=e&&e[1]||""}return`
`+oc+t}var ac=!1;function lc(t,e){if(!t||ac)return"";ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ys(t):""}function sI(t){switch(t.tag){case 5:return ys(t.type);case 16:return ys("Lazy");case 13:return ys("Suspense");case 19:return ys("SuspenseList");case 0:case 2:case 15:return t=lc(t.type,!1),t;case 11:return t=lc(t.type.render,!1),t;case 1:return t=lc(t.type,!0),t;default:return""}}function gh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ei:return"Fragment";case Zr:return"Portal";case fh:return"Profiler";case Xd:return"StrictMode";case ph:return"Suspense";case mh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Lv:return(t.displayName||"Context")+".Consumer";case Ov:return(t._context.displayName||"Context")+".Provider";case Jd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zd:return e=t.displayName||null,e!==null?e:gh(t.type)||"Memo";case Tn:e=t._payload,t=t._init;try{return gh(t(e))}catch{}}return null}function oI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gh(e);case 8:return e===Xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Jn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function aI(t){var e=Mv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sa(t){t._valueTracker||(t._valueTracker=aI(t))}function bv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Mv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function el(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yh(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Em(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Jn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fv(t,e){e=e.checked,e!=null&&Yd(t,"checked",e,!1)}function vh(t,e){Fv(t,e);var n=Jn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wh(t,e.type,n):e.hasOwnProperty("defaultValue")&&wh(t,e.type,Jn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _m(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wh(t,e,n){(e!=="number"||el(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var vs=Array.isArray;function fi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Jn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Eh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(vs(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Jn(n)}}function jv(t,e){var n=Jn(e.value),r=Jn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Im(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Uv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _h(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Uv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oa,Vv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oa=oa||document.createElement("div"),oa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ws(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var As={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lI=["Webkit","ms","Moz","O"];Object.keys(As).forEach(function(t){lI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),As[e]=As[t]})});function Bv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||As.hasOwnProperty(t)&&As[t]?(""+e).trim():e+"px"}function zv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Bv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var uI=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sh(t,e){if(e){if(uI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function Ih(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Th=null;function ef(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ch=null,pi=null,mi=null;function Tm(t){if(t=No(t)){if(typeof Ch!="function")throw Error(T(280));var e=t.stateNode;e&&(e=su(e),Ch(t.stateNode,t.type,e))}}function Hv(t){pi?mi?mi.push(t):mi=[t]:pi=t}function Wv(){if(pi){var t=pi,e=mi;if(mi=pi=null,Tm(t),e)for(t=0;t<e.length;t++)Tm(e[t])}}function qv(t,e){return t(e)}function Kv(){}var uc=!1;function Gv(t,e,n){if(uc)return t(e,n);uc=!0;try{return qv(t,e,n)}finally{uc=!1,(pi!==null||mi!==null)&&(Kv(),Wv())}}function qs(t,e){var n=t.stateNode;if(n===null)return null;var r=su(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var kh=!1;if(cn)try{var as={};Object.defineProperty(as,"passive",{get:function(){kh=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{kh=!1}function cI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ns=!1,tl=null,nl=!1,xh=null,hI={onError:function(t){Ns=!0,tl=t}};function dI(t,e,n,r,i,s,o,a,l){Ns=!1,tl=null,cI.apply(hI,arguments)}function fI(t,e,n,r,i,s,o,a,l){if(dI.apply(this,arguments),Ns){if(Ns){var u=tl;Ns=!1,tl=null}else throw Error(T(198));nl||(nl=!0,xh=u)}}function Vr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cm(t){if(Vr(t)!==t)throw Error(T(188))}function pI(t){var e=t.alternate;if(!e){if(e=Vr(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Cm(i),t;if(s===r)return Cm(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function Yv(t){return t=pI(t),t!==null?Xv(t):null}function Xv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xv(t);if(e!==null)return e;t=t.sibling}return null}var Jv=ft.unstable_scheduleCallback,km=ft.unstable_cancelCallback,mI=ft.unstable_shouldYield,gI=ft.unstable_requestPaint,fe=ft.unstable_now,yI=ft.unstable_getCurrentPriorityLevel,tf=ft.unstable_ImmediatePriority,Zv=ft.unstable_UserBlockingPriority,rl=ft.unstable_NormalPriority,vI=ft.unstable_LowPriority,e0=ft.unstable_IdlePriority,tu=null,Wt=null;function wI(t){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(tu,t,void 0,(t.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:SI,EI=Math.log,_I=Math.LN2;function SI(t){return t>>>=0,t===0?32:31-(EI(t)/_I|0)|0}var aa=64,la=4194304;function ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function il(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ws(a):(s&=o,s!==0&&(r=ws(s)))}else o=n&~i,o!==0?r=ws(o):s!==0&&(r=ws(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Dt(e),i=1<<n,r|=t[n],e&=~i;return r}function II(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Dt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=II(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ah(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function t0(){var t=aa;return aa<<=1,!(aa&4194240)&&(aa=64),t}function cc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Dt(e),t[e]=n}function CI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function nf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function n0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var r0,rf,i0,s0,o0,Nh=!1,ua=[],bn=null,Fn=null,jn=null,Ks=new Map,Gs=new Map,kn=[],kI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xm(t,e){switch(t){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":Ks.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gs.delete(e.pointerId)}}function ls(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=No(e),e!==null&&rf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function xI(t,e,n,r,i){switch(e){case"focusin":return bn=ls(bn,t,e,n,r,i),!0;case"dragenter":return Fn=ls(Fn,t,e,n,r,i),!0;case"mouseover":return jn=ls(jn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ks.set(s,ls(Ks.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Gs.set(s,ls(Gs.get(s)||null,t,e,n,r,i)),!0}return!1}function a0(t){var e=mr(t.target);if(e!==null){var n=Vr(e);if(n!==null){if(e=n.tag,e===13){if(e=Qv(n),e!==null){t.blockedOn=e,o0(t.priority,function(){i0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ma(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Th=r,n.target.dispatchEvent(r),Th=null}else return e=No(n),e!==null&&rf(e),t.blockedOn=n,!1;e.shift()}return!0}function Am(t,e,n){Ma(t)&&n.delete(e)}function AI(){Nh=!1,bn!==null&&Ma(bn)&&(bn=null),Fn!==null&&Ma(Fn)&&(Fn=null),jn!==null&&Ma(jn)&&(jn=null),Ks.forEach(Am),Gs.forEach(Am)}function us(t,e){t.blockedOn===e&&(t.blockedOn=null,Nh||(Nh=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,AI)))}function Qs(t){function e(i){return us(i,t)}if(0<ua.length){us(ua[0],t);for(var n=1;n<ua.length;n++){var r=ua[n];r.blockedOn===t&&(r.blockedOn=null)}}for(bn!==null&&us(bn,t),Fn!==null&&us(Fn,t),jn!==null&&us(jn,t),Ks.forEach(e),Gs.forEach(e),n=0;n<kn.length;n++)r=kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)a0(n),n.blockedOn===null&&kn.shift()}var gi=wn.ReactCurrentBatchConfig,sl=!0;function NI(t,e,n,r){var i=Y,s=gi.transition;gi.transition=null;try{Y=1,sf(t,e,n,r)}finally{Y=i,gi.transition=s}}function RI(t,e,n,r){var i=Y,s=gi.transition;gi.transition=null;try{Y=4,sf(t,e,n,r)}finally{Y=i,gi.transition=s}}function sf(t,e,n,r){if(sl){var i=Rh(t,e,n,r);if(i===null)Ec(t,e,r,ol,n),xm(t,r);else if(xI(i,t,e,n,r))r.stopPropagation();else if(xm(t,r),e&4&&-1<kI.indexOf(t)){for(;i!==null;){var s=No(i);if(s!==null&&r0(s),s=Rh(t,e,n,r),s===null&&Ec(t,e,r,ol,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ec(t,e,r,null,n)}}var ol=null;function Rh(t,e,n,r){if(ol=null,t=ef(r),t=mr(t),t!==null)if(e=Vr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ol=t,null}function l0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yI()){case tf:return 1;case Zv:return 4;case rl:case vI:return 16;case e0:return 536870912;default:return 16}default:return 16}}var Pn=null,of=null,ba=null;function u0(){if(ba)return ba;var t,e=of,n=e.length,r,i="value"in Pn?Pn.value:Pn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ba=i.slice(t,1<r?1-r:void 0)}function Fa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ca(){return!0}function Nm(){return!1}function gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ca:Nm,this.isPropagationStopped=Nm,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),e}var Hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},af=gt(Hi),Ao=le({},Hi,{view:0,detail:0}),DI=gt(Ao),hc,dc,cs,nu=le({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==cs&&(cs&&t.type==="mousemove"?(hc=t.screenX-cs.screenX,dc=t.screenY-cs.screenY):dc=hc=0,cs=t),hc)},movementY:function(t){return"movementY"in t?t.movementY:dc}}),Rm=gt(nu),PI=le({},nu,{dataTransfer:0}),OI=gt(PI),LI=le({},Ao,{relatedTarget:0}),fc=gt(LI),$I=le({},Hi,{animationName:0,elapsedTime:0,pseudoElement:0}),MI=gt($I),bI=le({},Hi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),FI=gt(bI),jI=le({},Hi,{data:0}),Dm=gt(jI),UI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=BI[t])?!!e[t]:!1}function lf(){return zI}var HI=le({},Ao,{key:function(t){if(t.key){var e=UI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?VI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lf,charCode:function(t){return t.type==="keypress"?Fa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),WI=gt(HI),qI=le({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pm=gt(qI),KI=le({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lf}),GI=gt(KI),QI=le({},Hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),YI=gt(QI),XI=le({},nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),JI=gt(XI),ZI=[9,13,27,32],uf=cn&&"CompositionEvent"in window,Rs=null;cn&&"documentMode"in document&&(Rs=document.documentMode);var eT=cn&&"TextEvent"in window&&!Rs,c0=cn&&(!uf||Rs&&8<Rs&&11>=Rs),Om=String.fromCharCode(32),Lm=!1;function h0(t,e){switch(t){case"keyup":return ZI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function d0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ti=!1;function tT(t,e){switch(t){case"compositionend":return d0(e);case"keypress":return e.which!==32?null:(Lm=!0,Om);case"textInput":return t=e.data,t===Om&&Lm?null:t;default:return null}}function nT(t,e){if(ti)return t==="compositionend"||!uf&&h0(t,e)?(t=u0(),ba=of=Pn=null,ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return c0&&e.locale!=="ko"?null:e.data;default:return null}}var rT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $m(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rT[t.type]:e==="textarea"}function f0(t,e,n,r){Hv(r),e=al(e,"onChange"),0<e.length&&(n=new af("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ds=null,Ys=null;function iT(t){T0(t,0)}function ru(t){var e=ii(t);if(bv(e))return t}function sT(t,e){if(t==="change")return e}var p0=!1;if(cn){var pc;if(cn){var mc="oninput"in document;if(!mc){var Mm=document.createElement("div");Mm.setAttribute("oninput","return;"),mc=typeof Mm.oninput=="function"}pc=mc}else pc=!1;p0=pc&&(!document.documentMode||9<document.documentMode)}function bm(){Ds&&(Ds.detachEvent("onpropertychange",m0),Ys=Ds=null)}function m0(t){if(t.propertyName==="value"&&ru(Ys)){var e=[];f0(e,Ys,t,ef(t)),Gv(iT,e)}}function oT(t,e,n){t==="focusin"?(bm(),Ds=e,Ys=n,Ds.attachEvent("onpropertychange",m0)):t==="focusout"&&bm()}function aT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ru(Ys)}function lT(t,e){if(t==="click")return ru(e)}function uT(t,e){if(t==="input"||t==="change")return ru(e)}function cT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ot=typeof Object.is=="function"?Object.is:cT;function Xs(t,e){if(Ot(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!dh.call(e,i)||!Ot(t[i],e[i]))return!1}return!0}function Fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jm(t,e){var n=Fm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fm(n)}}function g0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?g0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function y0(){for(var t=window,e=el();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=el(t.document)}return e}function cf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hT(t){var e=y0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&g0(n.ownerDocument.documentElement,n)){if(r!==null&&cf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=jm(n,s);var o=jm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dT=cn&&"documentMode"in document&&11>=document.documentMode,ni=null,Dh=null,Ps=null,Ph=!1;function Um(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ph||ni==null||ni!==el(r)||(r=ni,"selectionStart"in r&&cf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ps&&Xs(Ps,r)||(Ps=r,r=al(Dh,"onSelect"),0<r.length&&(e=new af("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ni)))}function ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ri={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionend:ha("Transition","TransitionEnd")},gc={},v0={};cn&&(v0=document.createElement("div").style,"AnimationEvent"in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),"TransitionEvent"in window||delete ri.transitionend.transition);function iu(t){if(gc[t])return gc[t];if(!ri[t])return t;var e=ri[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in v0)return gc[t]=e[n];return t}var w0=iu("animationend"),E0=iu("animationiteration"),_0=iu("animationstart"),S0=iu("transitionend"),I0=new Map,Vm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){I0.set(t,e),Ur(e,[t])}for(var yc=0;yc<Vm.length;yc++){var vc=Vm[yc],fT=vc.toLowerCase(),pT=vc[0].toUpperCase()+vc.slice(1);rr(fT,"on"+pT)}rr(w0,"onAnimationEnd");rr(E0,"onAnimationIteration");rr(_0,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(S0,"onTransitionEnd");Ci("onMouseEnter",["mouseout","mouseover"]);Ci("onMouseLeave",["mouseout","mouseover"]);Ci("onPointerEnter",["pointerout","pointerover"]);Ci("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Es="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Es));function Bm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,fI(r,e,void 0,t),t.currentTarget=null}function T0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Bm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Bm(i,a,u),s=l}}}if(nl)throw t=xh,nl=!1,xh=null,t}function ee(t,e){var n=e[bh];n===void 0&&(n=e[bh]=new Set);var r=t+"__bubble";n.has(r)||(C0(e,t,2,!1),n.add(r))}function wc(t,e,n){var r=0;e&&(r|=4),C0(n,t,r,e)}var da="_reactListening"+Math.random().toString(36).slice(2);function Js(t){if(!t[da]){t[da]=!0,Pv.forEach(function(n){n!=="selectionchange"&&(mT.has(n)||wc(n,!1,t),wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[da]||(e[da]=!0,wc("selectionchange",!1,e))}}function C0(t,e,n,r){switch(l0(e)){case 1:var i=NI;break;case 4:i=RI;break;default:i=sf}n=i.bind(null,e,n,t),i=void 0,!kh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ec(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=mr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Gv(function(){var u=s,c=ef(n),h=[];e:{var d=I0.get(t);if(d!==void 0){var m=af,v=t;switch(t){case"keypress":if(Fa(n)===0)break e;case"keydown":case"keyup":m=WI;break;case"focusin":v="focus",m=fc;break;case"focusout":v="blur",m=fc;break;case"beforeblur":case"afterblur":m=fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=OI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=GI;break;case w0:case E0:case _0:m=MI;break;case S0:m=YI;break;case"scroll":m=DI;break;case"wheel":m=JI;break;case"copy":case"cut":case"paste":m=FI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Pm}var w=(e&4)!==0,S=!w&&t==="scroll",p=w?d!==null?d+"Capture":null:d;w=[];for(var f=u,g;f!==null;){g=f;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,p!==null&&(E=qs(f,p),E!=null&&w.push(Zs(f,E,g)))),S)break;f=f.return}0<w.length&&(d=new m(d,v,null,n,c),h.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Th&&(v=n.relatedTarget||n.fromElement)&&(mr(v)||v[hn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?mr(v):null,v!==null&&(S=Vr(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(w=Rm,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Pm,E="onPointerLeave",p="onPointerEnter",f="pointer"),S=m==null?d:ii(m),g=v==null?d:ii(v),d=new w(E,f+"leave",m,n,c),d.target=S,d.relatedTarget=g,E=null,mr(c)===u&&(w=new w(p,f+"enter",v,n,c),w.target=g,w.relatedTarget=S,E=w),S=E,m&&v)t:{for(w=m,p=v,f=0,g=w;g;g=Kr(g))f++;for(g=0,E=p;E;E=Kr(E))g++;for(;0<f-g;)w=Kr(w),f--;for(;0<g-f;)p=Kr(p),g--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=Kr(w),p=Kr(p)}w=null}else w=null;m!==null&&zm(h,d,m,w,!1),v!==null&&S!==null&&zm(h,S,v,w,!0)}}e:{if(d=u?ii(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var k=sT;else if($m(d))if(p0)k=uT;else{k=aT;var N=oT}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=lT);if(k&&(k=k(t,u))){f0(h,k,n,c);break e}N&&N(t,d,u),t==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&wh(d,"number",d.value)}switch(N=u?ii(u):window,t){case"focusin":($m(N)||N.contentEditable==="true")&&(ni=N,Dh=u,Ps=null);break;case"focusout":Ps=Dh=ni=null;break;case"mousedown":Ph=!0;break;case"contextmenu":case"mouseup":case"dragend":Ph=!1,Um(h,n,c);break;case"selectionchange":if(dT)break;case"keydown":case"keyup":Um(h,n,c)}var P;if(uf)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ti?h0(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(c0&&n.locale!=="ko"&&(ti||L!=="onCompositionStart"?L==="onCompositionEnd"&&ti&&(P=u0()):(Pn=c,of="value"in Pn?Pn.value:Pn.textContent,ti=!0)),N=al(u,L),0<N.length&&(L=new Dm(L,t,null,n,c),h.push({event:L,listeners:N}),P?L.data=P:(P=d0(n),P!==null&&(L.data=P)))),(P=eT?tT(t,n):nT(t,n))&&(u=al(u,"onBeforeInput"),0<u.length&&(c=new Dm("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=P))}T0(h,e)})}function Zs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function al(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qs(t,n),s!=null&&r.unshift(Zs(t,s,i)),s=qs(t,e),s!=null&&r.push(Zs(t,s,i))),t=t.return}return r}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=qs(n,s),l!=null&&o.unshift(Zs(n,l,a))):i||(l=qs(n,s),l!=null&&o.push(Zs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gT=/\r\n?/g,yT=/\u0000|\uFFFD/g;function Hm(t){return(typeof t=="string"?t:""+t).replace(gT,`
`).replace(yT,"")}function fa(t,e,n){if(e=Hm(e),Hm(t)!==e&&n)throw Error(T(425))}function ll(){}var Oh=null,Lh=null;function $h(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mh=typeof setTimeout=="function"?setTimeout:void 0,vT=typeof clearTimeout=="function"?clearTimeout:void 0,Wm=typeof Promise=="function"?Promise:void 0,wT=typeof queueMicrotask=="function"?queueMicrotask:typeof Wm<"u"?function(t){return Wm.resolve(null).then(t).catch(ET)}:Mh;function ET(t){setTimeout(function(){throw t})}function _c(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Qs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qs(e)}function Un(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Wi=Math.random().toString(36).slice(2),Bt="__reactFiber$"+Wi,eo="__reactProps$"+Wi,hn="__reactContainer$"+Wi,bh="__reactEvents$"+Wi,_T="__reactListeners$"+Wi,ST="__reactHandles$"+Wi;function mr(t){var e=t[Bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hn]||n[Bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qm(t);t!==null;){if(n=t[Bt])return n;t=qm(t)}return e}t=n,n=t.parentNode}return null}function No(t){return t=t[Bt]||t[hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ii(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function su(t){return t[eo]||null}var Fh=[],si=-1;function ir(t){return{current:t}}function ne(t){0>si||(t.current=Fh[si],Fh[si]=null,si--)}function Z(t,e){si++,Fh[si]=t.current,t.current=e}var Zn={},We=ir(Zn),it=ir(!1),Ar=Zn;function ki(t,e){var n=t.type.contextTypes;if(!n)return Zn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function st(t){return t=t.childContextTypes,t!=null}function ul(){ne(it),ne(We)}function Km(t,e,n){if(We.current!==Zn)throw Error(T(168));Z(We,e),Z(it,n)}function k0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,oI(t)||"Unknown",i));return le({},n,r)}function cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zn,Ar=We.current,Z(We,t),Z(it,it.current),!0}function Gm(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=k0(t,e,Ar),r.__reactInternalMemoizedMergedChildContext=t,ne(it),ne(We),Z(We,t)):ne(it),Z(it,n)}var tn=null,ou=!1,Sc=!1;function x0(t){tn===null?tn=[t]:tn.push(t)}function IT(t){ou=!0,x0(t)}function sr(){if(!Sc&&tn!==null){Sc=!0;var t=0,e=Y;try{var n=tn;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}tn=null,ou=!1}catch(i){throw tn!==null&&(tn=tn.slice(t+1)),Jv(tf,sr),i}finally{Y=e,Sc=!1}}return null}var oi=[],ai=0,hl=null,dl=0,yt=[],vt=0,Nr=null,nn=1,rn="";function dr(t,e){oi[ai++]=dl,oi[ai++]=hl,hl=t,dl=e}function A0(t,e,n){yt[vt++]=nn,yt[vt++]=rn,yt[vt++]=Nr,Nr=t;var r=nn;t=rn;var i=32-Dt(r)-1;r&=~(1<<i),n+=1;var s=32-Dt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,nn=1<<32-Dt(e)+i|n<<i|r,rn=s+t}else nn=1<<s|n<<i|r,rn=t}function hf(t){t.return!==null&&(dr(t,1),A0(t,1,0))}function df(t){for(;t===hl;)hl=oi[--ai],oi[ai]=null,dl=oi[--ai],oi[ai]=null;for(;t===Nr;)Nr=yt[--vt],yt[vt]=null,rn=yt[--vt],yt[vt]=null,nn=yt[--vt],yt[vt]=null}var ht=null,ut=null,ie=!1,Rt=null;function N0(t,e){var n=Et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ht=t,ut=Un(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ht=t,ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:nn,overflow:rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ht=t,ut=null,!0):!1;default:return!1}}function jh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uh(t){if(ie){var e=ut;if(e){var n=e;if(!Qm(t,e)){if(jh(t))throw Error(T(418));e=Un(n.nextSibling);var r=ht;e&&Qm(t,e)?N0(r,n):(t.flags=t.flags&-4097|2,ie=!1,ht=t)}}else{if(jh(t))throw Error(T(418));t.flags=t.flags&-4097|2,ie=!1,ht=t}}}function Ym(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ht=t}function pa(t){if(t!==ht)return!1;if(!ie)return Ym(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$h(t.type,t.memoizedProps)),e&&(e=ut)){if(jh(t))throw R0(),Error(T(418));for(;e;)N0(t,e),e=Un(e.nextSibling)}if(Ym(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ut=Un(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ut=null}}else ut=ht?Un(t.stateNode.nextSibling):null;return!0}function R0(){for(var t=ut;t;)t=Un(t.nextSibling)}function xi(){ut=ht=null,ie=!1}function ff(t){Rt===null?Rt=[t]:Rt.push(t)}var TT=wn.ReactCurrentBatchConfig;function At(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var fl=ir(null),pl=null,li=null,pf=null;function mf(){pf=li=pl=null}function gf(t){var e=fl.current;ne(fl),t._currentValue=e}function Vh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function yi(t,e){pl=t,pf=li=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rt=!0),t.firstContext=null)}function It(t){var e=t._currentValue;if(pf!==t)if(t={context:t,memoizedValue:e,next:null},li===null){if(pl===null)throw Error(T(308));li=t,pl.dependencies={lanes:0,firstContext:t}}else li=li.next=t;return e}var gr=null;function yf(t){gr===null?gr=[t]:gr.push(t)}function D0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,yf(e)):(n.next=i.next,i.next=n),e.interleaved=n,dn(t,r)}function dn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Cn=!1;function vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function P0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,dn(t,n)}return i=r.interleaved,i===null?(e.next=e,yf(r)):(e.next=i.next,i.next=e),r.interleaved=e,dn(t,n)}function ja(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nf(t,n)}}function Xm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ml(t,e,n,r){var i=t.updateQueue;Cn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(d=e,m=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(m,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break e;h=le({},h,d);break e;case 2:Cn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Dr|=o,t.lanes=o,t.memoizedState=h}}function Jm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var O0=new Dv.Component().refs;function Bh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var au={isMounted:function(t){return(t=t._reactInternals)?Vr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ye(),i=zn(t),s=un(r,i);s.payload=e,n!=null&&(s.callback=n),e=Vn(t,s,i),e!==null&&(Pt(e,t,i,r),ja(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ye(),i=zn(t),s=un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vn(t,s,i),e!==null&&(Pt(e,t,i,r),ja(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ye(),r=zn(t),i=un(n,r);i.tag=2,e!=null&&(i.callback=e),e=Vn(t,i,r),e!==null&&(Pt(e,t,r,n),ja(e,t,r))}};function Zm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xs(n,r)||!Xs(i,s):!0}function L0(t,e,n){var r=!1,i=Zn,s=e.contextType;return typeof s=="object"&&s!==null?s=It(s):(i=st(e)?Ar:We.current,r=e.contextTypes,s=(r=r!=null)?ki(t,i):Zn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=au,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function eg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&au.enqueueReplaceState(e,e.state,null)}function zh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=O0,vf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=It(s):(s=st(e)?Ar:We.current,i.context=ki(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&au.enqueueReplaceState(i,i.state,null),ml(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===O0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function ma(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function tg(t){var e=t._init;return e(t._payload)}function $0(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Hn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,E){return f===null||f.tag!==6?(f=Nc(g,p.mode,E),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,E){var k=g.type;return k===ei?c(p,f,g.props.children,E,g.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Tn&&tg(k)===f.type)?(E=i(f,g.props),E.ref=hs(p,f,g),E.return=p,E):(E=Wa(g.type,g.key,g.props,null,p.mode,E),E.ref=hs(p,f,g),E.return=p,E)}function u(p,f,g,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Rc(g,p.mode,E),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,E,k){return f===null||f.tag!==7?(f=Ir(g,p.mode,E,k),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Nc(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ia:return g=Wa(f.type,f.key,f.props,null,p.mode,g),g.ref=hs(p,null,f),g.return=p,g;case Zr:return f=Rc(f,p.mode,g),f.return=p,f;case Tn:var E=f._init;return h(p,E(f._payload),g)}if(vs(f)||os(f))return f=Ir(f,p.mode,g,null),f.return=p,f;ma(p,f)}return null}function d(p,f,g,E){var k=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(p,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ia:return g.key===k?l(p,f,g,E):null;case Zr:return g.key===k?u(p,f,g,E):null;case Tn:return k=g._init,d(p,f,k(g._payload),E)}if(vs(g)||os(g))return k!==null?null:c(p,f,g,E,null);ma(p,g)}return null}function m(p,f,g,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(g)||null,a(f,p,""+E,k);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ia:return p=p.get(E.key===null?g:E.key)||null,l(f,p,E,k);case Zr:return p=p.get(E.key===null?g:E.key)||null,u(f,p,E,k);case Tn:var N=E._init;return m(p,f,g,N(E._payload),k)}if(vs(E)||os(E))return p=p.get(g)||null,c(f,p,E,k,null);ma(f,E)}return null}function v(p,f,g,E){for(var k=null,N=null,P=f,L=f=0,J=null;P!==null&&L<g.length;L++){P.index>L?(J=P,P=null):J=P.sibling;var z=d(p,P,g[L],E);if(z===null){P===null&&(P=J);break}t&&P&&z.alternate===null&&e(p,P),f=s(z,f,L),N===null?k=z:N.sibling=z,N=z,P=J}if(L===g.length)return n(p,P),ie&&dr(p,L),k;if(P===null){for(;L<g.length;L++)P=h(p,g[L],E),P!==null&&(f=s(P,f,L),N===null?k=P:N.sibling=P,N=P);return ie&&dr(p,L),k}for(P=r(p,P);L<g.length;L++)J=m(P,p,L,g[L],E),J!==null&&(t&&J.alternate!==null&&P.delete(J.key===null?L:J.key),f=s(J,f,L),N===null?k=J:N.sibling=J,N=J);return t&&P.forEach(function(kt){return e(p,kt)}),ie&&dr(p,L),k}function w(p,f,g,E){var k=os(g);if(typeof k!="function")throw Error(T(150));if(g=k.call(g),g==null)throw Error(T(151));for(var N=k=null,P=f,L=f=0,J=null,z=g.next();P!==null&&!z.done;L++,z=g.next()){P.index>L?(J=P,P=null):J=P.sibling;var kt=d(p,P,z.value,E);if(kt===null){P===null&&(P=J);break}t&&P&&kt.alternate===null&&e(p,P),f=s(kt,f,L),N===null?k=kt:N.sibling=kt,N=kt,P=J}if(z.done)return n(p,P),ie&&dr(p,L),k;if(P===null){for(;!z.done;L++,z=g.next())z=h(p,z.value,E),z!==null&&(f=s(z,f,L),N===null?k=z:N.sibling=z,N=z);return ie&&dr(p,L),k}for(P=r(p,P);!z.done;L++,z=g.next())z=m(P,p,L,z.value,E),z!==null&&(t&&z.alternate!==null&&P.delete(z.key===null?L:z.key),f=s(z,f,L),N===null?k=z:N.sibling=z,N=z);return t&&P.forEach(function(is){return e(p,is)}),ie&&dr(p,L),k}function S(p,f,g,E){if(typeof g=="object"&&g!==null&&g.type===ei&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ia:e:{for(var k=g.key,N=f;N!==null;){if(N.key===k){if(k=g.type,k===ei){if(N.tag===7){n(p,N.sibling),f=i(N,g.props.children),f.return=p,p=f;break e}}else if(N.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Tn&&tg(k)===N.type){n(p,N.sibling),f=i(N,g.props),f.ref=hs(p,N,g),f.return=p,p=f;break e}n(p,N);break}else e(p,N);N=N.sibling}g.type===ei?(f=Ir(g.props.children,p.mode,E,g.key),f.return=p,p=f):(E=Wa(g.type,g.key,g.props,null,p.mode,E),E.ref=hs(p,f,g),E.return=p,p=E)}return o(p);case Zr:e:{for(N=g.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Rc(g,p.mode,E),f.return=p,p=f}return o(p);case Tn:return N=g._init,S(p,f,N(g._payload),E)}if(vs(g))return v(p,f,g,E);if(os(g))return w(p,f,g,E);ma(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Nc(g,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return S}var Ai=$0(!0),M0=$0(!1),Ro={},qt=ir(Ro),to=ir(Ro),no=ir(Ro);function yr(t){if(t===Ro)throw Error(T(174));return t}function wf(t,e){switch(Z(no,e),Z(to,t),Z(qt,Ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_h(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_h(e,t)}ne(qt),Z(qt,e)}function Ni(){ne(qt),ne(to),ne(no)}function b0(t){yr(no.current);var e=yr(qt.current),n=_h(e,t.type);e!==n&&(Z(to,t),Z(qt,n))}function Ef(t){to.current===t&&(ne(qt),ne(to))}var oe=ir(0);function gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ic=[];function _f(){for(var t=0;t<Ic.length;t++)Ic[t]._workInProgressVersionPrimary=null;Ic.length=0}var Ua=wn.ReactCurrentDispatcher,Tc=wn.ReactCurrentBatchConfig,Rr=0,ae=null,Ee=null,Ce=null,yl=!1,Os=!1,ro=0,CT=0;function $e(){throw Error(T(321))}function Sf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ot(t[n],e[n]))return!1;return!0}function If(t,e,n,r,i,s){if(Rr=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ua.current=t===null||t.memoizedState===null?NT:RT,t=n(r,i),Os){s=0;do{if(Os=!1,ro=0,25<=s)throw Error(T(301));s+=1,Ce=Ee=null,e.updateQueue=null,Ua.current=DT,t=n(r,i)}while(Os)}if(Ua.current=vl,e=Ee!==null&&Ee.next!==null,Rr=0,Ce=Ee=ae=null,yl=!1,e)throw Error(T(300));return t}function Tf(){var t=ro!==0;return ro=0,t}function Vt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?ae.memoizedState=Ce=t:Ce=Ce.next=t,Ce}function Tt(){if(Ee===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=Ee.next;var e=Ce===null?ae.memoizedState:Ce.next;if(e!==null)Ce=e,Ee=t;else{if(t===null)throw Error(T(310));Ee=t,t={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ce===null?ae.memoizedState=Ce=t:Ce=Ce.next=t}return Ce}function io(t,e){return typeof e=="function"?e(t):e}function Cc(t){var e=Tt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=Ee,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Rr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ae.lanes|=c,Dr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ot(r,e.memoizedState)||(rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,Dr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kc(t){var e=Tt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ot(s,e.memoizedState)||(rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function F0(){}function j0(t,e){var n=ae,r=Tt(),i=e(),s=!Ot(r.memoizedState,i);if(s&&(r.memoizedState=i,rt=!0),r=r.queue,Cf(B0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,so(9,V0.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(T(349));Rr&30||U0(n,e,i)}return i}function U0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function V0(t,e,n,r){e.value=n,e.getSnapshot=r,z0(e)&&H0(t)}function B0(t,e,n){return n(function(){z0(e)&&H0(t)})}function z0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ot(t,n)}catch{return!0}}function H0(t){var e=dn(t,1);e!==null&&Pt(e,t,1,-1)}function ng(t){var e=Vt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:t},e.queue=t,t=t.dispatch=AT.bind(null,ae,t),[e.memoizedState,t]}function so(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function W0(){return Tt().memoizedState}function Va(t,e,n,r){var i=Vt();ae.flags|=t,i.memoizedState=so(1|e,n,void 0,r===void 0?null:r)}function lu(t,e,n,r){var i=Tt();r=r===void 0?null:r;var s=void 0;if(Ee!==null){var o=Ee.memoizedState;if(s=o.destroy,r!==null&&Sf(r,o.deps)){i.memoizedState=so(e,n,s,r);return}}ae.flags|=t,i.memoizedState=so(1|e,n,s,r)}function rg(t,e){return Va(8390656,8,t,e)}function Cf(t,e){return lu(2048,8,t,e)}function q0(t,e){return lu(4,2,t,e)}function K0(t,e){return lu(4,4,t,e)}function G0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Q0(t,e,n){return n=n!=null?n.concat([t]):null,lu(4,4,G0.bind(null,e,t),n)}function kf(){}function Y0(t,e){var n=Tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function X0(t,e){var n=Tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function J0(t,e,n){return Rr&21?(Ot(n,e)||(n=t0(),ae.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rt=!0),t.memoizedState=n)}function kT(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=Tc.transition;Tc.transition={};try{t(!1),e()}finally{Y=n,Tc.transition=r}}function Z0(){return Tt().memoizedState}function xT(t,e,n){var r=zn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},e1(t))t1(e,n);else if(n=D0(t,e,n,r),n!==null){var i=Ye();Pt(n,t,r,i),n1(n,e,r)}}function AT(t,e,n){var r=zn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(e1(t))t1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ot(a,o)){var l=e.interleaved;l===null?(i.next=i,yf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=D0(t,e,i,r),n!==null&&(i=Ye(),Pt(n,t,r,i),n1(n,e,r))}}function e1(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function t1(t,e){Os=yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function n1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nf(t,n)}}var vl={readContext:It,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},NT={readContext:It,useCallback:function(t,e){return Vt().memoizedState=[t,e===void 0?null:e],t},useContext:It,useEffect:rg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Va(4194308,4,G0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Va(4194308,4,t,e)},useInsertionEffect:function(t,e){return Va(4,2,t,e)},useMemo:function(t,e){var n=Vt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Vt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xT.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=Vt();return t={current:t},e.memoizedState=t},useState:ng,useDebugValue:kf,useDeferredValue:function(t){return Vt().memoizedState=t},useTransition:function(){var t=ng(!1),e=t[0];return t=kT.bind(null,t[1]),Vt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=Vt();if(ie){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),ke===null)throw Error(T(349));Rr&30||U0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,rg(B0.bind(null,r,s,t),[t]),r.flags|=2048,so(9,V0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Vt(),e=ke.identifierPrefix;if(ie){var n=rn,r=nn;n=(r&~(1<<32-Dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ro++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=CT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},RT={readContext:It,useCallback:Y0,useContext:It,useEffect:Cf,useImperativeHandle:Q0,useInsertionEffect:q0,useLayoutEffect:K0,useMemo:X0,useReducer:Cc,useRef:W0,useState:function(){return Cc(io)},useDebugValue:kf,useDeferredValue:function(t){var e=Tt();return J0(e,Ee.memoizedState,t)},useTransition:function(){var t=Cc(io)[0],e=Tt().memoizedState;return[t,e]},useMutableSource:F0,useSyncExternalStore:j0,useId:Z0,unstable_isNewReconciler:!1},DT={readContext:It,useCallback:Y0,useContext:It,useEffect:Cf,useImperativeHandle:Q0,useInsertionEffect:q0,useLayoutEffect:K0,useMemo:X0,useReducer:kc,useRef:W0,useState:function(){return kc(io)},useDebugValue:kf,useDeferredValue:function(t){var e=Tt();return Ee===null?e.memoizedState=t:J0(e,Ee.memoizedState,t)},useTransition:function(){var t=kc(io)[0],e=Tt().memoizedState;return[t,e]},useMutableSource:F0,useSyncExternalStore:j0,useId:Z0,unstable_isNewReconciler:!1};function Ri(t,e){try{var n="",r=e;do n+=sI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function xc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var PT=typeof WeakMap=="function"?WeakMap:Map;function r1(t,e,n){n=un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){El||(El=!0,ed=r),Hh(t,e)},n}function i1(t,e,n){n=un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Hh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Hh(t,e),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ig(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new PT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=qT.bind(null,t,e,n),e.then(t,t))}function sg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function og(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=un(-1,1),e.tag=2,Vn(n,e,1))),n.lanes|=1),t)}var OT=wn.ReactCurrentOwner,rt=!1;function Ge(t,e,n,r){e.child=t===null?M0(e,null,n,r):Ai(e,t.child,n,r)}function ag(t,e,n,r,i){n=n.render;var s=e.ref;return yi(e,i),r=If(t,e,n,r,s,i),n=Tf(),t!==null&&!rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fn(t,e,i)):(ie&&n&&hf(e),e.flags|=1,Ge(t,e,r,i),e.child)}function lg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Lf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,s1(t,e,s,r,i)):(t=Wa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xs,n(o,r)&&t.ref===e.ref)return fn(t,e,i)}return e.flags|=1,t=Hn(s,r),t.ref=e.ref,t.return=e,e.child=t}function s1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xs(s,r)&&t.ref===e.ref)if(rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(rt=!0);else return e.lanes=t.lanes,fn(t,e,i)}return Wh(t,e,n,r,i)}function o1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(ci,lt),lt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(ci,lt),lt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(ci,lt),lt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(ci,lt),lt|=r;return Ge(t,e,i,n),e.child}function a1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wh(t,e,n,r,i){var s=st(n)?Ar:We.current;return s=ki(e,s),yi(e,i),n=If(t,e,n,r,s,i),r=Tf(),t!==null&&!rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fn(t,e,i)):(ie&&r&&hf(e),e.flags|=1,Ge(t,e,n,i),e.child)}function ug(t,e,n,r,i){if(st(n)){var s=!0;cl(e)}else s=!1;if(yi(e,i),e.stateNode===null)Ba(t,e),L0(e,n,r),zh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=It(u):(u=st(n)?Ar:We.current,u=ki(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&eg(e,o,r,u),Cn=!1;var d=e.memoizedState;o.state=d,ml(e,r,o,i),l=e.memoizedState,a!==r||d!==l||it.current||Cn?(typeof c=="function"&&(Bh(e,n,c,r),l=e.memoizedState),(a=Cn||Zm(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,P0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:At(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=It(l):(l=st(n)?Ar:We.current,l=ki(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&eg(e,o,r,l),Cn=!1,d=e.memoizedState,o.state=d,ml(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||it.current||Cn?(typeof m=="function"&&(Bh(e,n,m,r),v=e.memoizedState),(u=Cn||Zm(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return qh(t,e,n,r,s,i)}function qh(t,e,n,r,i,s){a1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Gm(e,n,!1),fn(t,e,s);r=e.stateNode,OT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ai(e,t.child,null,s),e.child=Ai(e,null,a,s)):Ge(t,e,a,s),e.memoizedState=r.state,i&&Gm(e,n,!0),e.child}function l1(t){var e=t.stateNode;e.pendingContext?Km(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Km(t,e.context,!1),wf(t,e.containerInfo)}function cg(t,e,n,r,i){return xi(),ff(i),e.flags|=256,Ge(t,e,n,r),e.child}var Kh={dehydrated:null,treeContext:null,retryLane:0};function Gh(t){return{baseLanes:t,cachePool:null,transitions:null}}function u1(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(oe,i&1),t===null)return Uh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=hu(o,r,0,null),t=Ir(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gh(n),e.memoizedState=Kh,t):xf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return LT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Hn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Hn(a,s):(s=Ir(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Gh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Kh,r}return s=t.child,t=s.sibling,r=Hn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xf(t,e){return e=hu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ga(t,e,n,r){return r!==null&&ff(r),Ai(e,t.child,null,n),t=xf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function LT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=xc(Error(T(422))),ga(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=hu({mode:"visible",children:r.children},i,0,null),s=Ir(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ai(e,t.child,null,o),e.child.memoizedState=Gh(o),e.memoizedState=Kh,s);if(!(e.mode&1))return ga(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=xc(s,r,void 0),ga(t,e,o,r)}if(a=(o&t.childLanes)!==0,rt||a){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,dn(t,i),Pt(r,t,i,-1))}return Of(),r=xc(Error(T(421))),ga(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=KT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ut=Un(i.nextSibling),ht=e,ie=!0,Rt=null,t!==null&&(yt[vt++]=nn,yt[vt++]=rn,yt[vt++]=Nr,nn=t.id,rn=t.overflow,Nr=e),e=xf(e,r.children),e.flags|=4096,e)}function hg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Vh(t.return,e,n)}function Ac(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function c1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ge(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hg(t,n,e);else if(t.tag===19)hg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&gl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ac(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&gl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ac(e,!0,n,null,s);break;case"together":Ac(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ba(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=Hn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $T(t,e,n){switch(e.tag){case 3:l1(e),xi();break;case 5:b0(e);break;case 1:st(e.type)&&cl(e);break;case 4:wf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(fl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?u1(t,e,n):(Z(oe,oe.current&1),t=fn(t,e,n),t!==null?t.sibling:null);Z(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return c1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,o1(t,e,n)}return fn(t,e,n)}var h1,Qh,d1,f1;h1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qh=function(){};d1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,yr(qt.current);var s=null;switch(n){case"input":i=yh(t,i),r=yh(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=Eh(t,i),r=Eh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ll)}Sh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};f1=function(t,e,n,r){n!==r&&(e.flags|=4)};function ds(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function MT(t,e,n){var r=e.pendingProps;switch(df(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return st(e.type)&&ul(),Me(e),null;case 3:return r=e.stateNode,Ni(),ne(it),ne(We),_f(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rt!==null&&(rd(Rt),Rt=null))),Qh(t,e),Me(e),null;case 5:Ef(e);var i=yr(no.current);if(n=e.type,t!==null&&e.stateNode!=null)d1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return Me(e),null}if(t=yr(qt.current),pa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Bt]=e,r[eo]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<Es.length;i++)ee(Es[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Em(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":Sm(r,s),ee("invalid",r)}Sh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&fa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fa(r.textContent,a,t),i=["children",""+a]):Hs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":sa(r),_m(r,s,!0);break;case"textarea":sa(r),Im(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ll)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Uv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Bt]=e,t[eo]=r,h1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ih(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Es.length;i++)ee(Es[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":Em(t,r),i=yh(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),ee("invalid",t);break;case"textarea":Sm(t,r),i=Eh(t,r),ee("invalid",t);break;default:i=r}Sh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?zv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ws(t,l):typeof l=="number"&&Ws(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Hs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&Yd(t,s,l,o))}switch(n){case"input":sa(t),_m(t,r,!1);break;case"textarea":sa(t),Im(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Jn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?fi(t,!!r.multiple,s,!1):r.defaultValue!=null&&fi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ll)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)f1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=yr(no.current),yr(qt.current),pa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Bt]=e,(s=r.nodeValue!==n)&&(t=ht,t!==null))switch(t.tag){case 3:fa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=e,e.stateNode=r}return Me(e),null;case 13:if(ne(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&ut!==null&&e.mode&1&&!(e.flags&128))R0(),xi(),e.flags|=98560,s=!1;else if(s=pa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[Bt]=e}else xi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),s=!1}else Rt!==null&&(rd(Rt),Rt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?_e===0&&(_e=3):Of())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return Ni(),Qh(t,e),t===null&&Js(e.stateNode.containerInfo),Me(e),null;case 10:return gf(e.type._context),Me(e),null;case 17:return st(e.type)&&ul(),Me(e),null;case 19:if(ne(oe),s=e.memoizedState,s===null)return Me(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ds(s,!1);else{if(_e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=gl(t),o!==null){for(e.flags|=128,ds(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>Di&&(e.flags|=128,r=!0,ds(s,!1),e.lanes=4194304)}else{if(!r)if(t=gl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ds(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return Me(e),null}else 2*fe()-s.renderingStartTime>Di&&n!==1073741824&&(e.flags|=128,r=!0,ds(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=oe.current,Z(oe,r?n&1|2:n&1),e):(Me(e),null);case 22:case 23:return Pf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?lt&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function bT(t,e){switch(df(e),e.tag){case 1:return st(e.type)&&ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ni(),ne(it),ne(We),_f(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ef(e),null;case 13:if(ne(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(oe),null;case 4:return Ni(),null;case 10:return gf(e.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var ya=!1,je=!1,FT=typeof WeakSet=="function"?WeakSet:Set,A=null;function ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function Yh(t,e,n){try{n()}catch(r){ce(t,e,r)}}var dg=!1;function jT(t,e){if(Oh=sl,t=y0(),cf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lh={focusedElem:t,selectionRange:n},sl=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,S=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:At(e.type,w),S);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(E){ce(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return v=dg,dg=!1,v}function Ls(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Yh(e,n,s)}i=i.next}while(i!==r)}}function uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Xh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function p1(t){var e=t.alternate;e!==null&&(t.alternate=null,p1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bt],delete e[eo],delete e[bh],delete e[_T],delete e[ST])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function m1(t){return t.tag===5||t.tag===3||t.tag===4}function fg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||m1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ll));else if(r!==4&&(t=t.child,t!==null))for(Jh(t,e,n),t=t.sibling;t!==null;)Jh(t,e,n),t=t.sibling}function Zh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Zh(t,e,n),t=t.sibling;t!==null;)Zh(t,e,n),t=t.sibling}var Ne=null,Nt=!1;function _n(t,e,n){for(n=n.child;n!==null;)g1(t,e,n),n=n.sibling}function g1(t,e,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(tu,n)}catch{}switch(n.tag){case 5:je||ui(n,e);case 6:var r=Ne,i=Nt;Ne=null,_n(t,e,n),Ne=r,Nt=i,Ne!==null&&(Nt?(t=Ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(Nt?(t=Ne,n=n.stateNode,t.nodeType===8?_c(t.parentNode,n):t.nodeType===1&&_c(t,n),Qs(t)):_c(Ne,n.stateNode));break;case 4:r=Ne,i=Nt,Ne=n.stateNode.containerInfo,Nt=!0,_n(t,e,n),Ne=r,Nt=i;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Yh(n,e,o),i=i.next}while(i!==r)}_n(t,e,n);break;case 1:if(!je&&(ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,e,a)}_n(t,e,n);break;case 21:_n(t,e,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,_n(t,e,n),je=r):_n(t,e,n);break;default:_n(t,e,n)}}function pg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new FT),e.forEach(function(r){var i=GT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,Nt=!1;break e;case 3:Ne=a.stateNode.containerInfo,Nt=!0;break e;case 4:Ne=a.stateNode.containerInfo,Nt=!0;break e}a=a.return}if(Ne===null)throw Error(T(160));g1(s,o,i),Ne=null,Nt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)y1(e,t),e=e.sibling}function y1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xt(e,t),jt(t),r&4){try{Ls(3,t,t.return),uu(3,t)}catch(w){ce(t,t.return,w)}try{Ls(5,t,t.return)}catch(w){ce(t,t.return,w)}}break;case 1:xt(e,t),jt(t),r&512&&n!==null&&ui(n,n.return);break;case 5:if(xt(e,t),jt(t),r&512&&n!==null&&ui(n,n.return),t.flags&32){var i=t.stateNode;try{Ws(i,"")}catch(w){ce(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Fv(i,s),Ih(a,o);var u=Ih(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?zv(i,h):c==="dangerouslySetInnerHTML"?Vv(i,h):c==="children"?Ws(i,h):Yd(i,c,h,u)}switch(a){case"input":vh(i,s);break;case"textarea":jv(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?fi(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?fi(i,!!s.multiple,s.defaultValue,!0):fi(i,!!s.multiple,s.multiple?[]:"",!1))}i[eo]=s}catch(w){ce(t,t.return,w)}}break;case 6:if(xt(e,t),jt(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){ce(t,t.return,w)}}break;case 3:if(xt(e,t),jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qs(e.containerInfo)}catch(w){ce(t,t.return,w)}break;case 4:xt(e,t),jt(t);break;case 13:xt(e,t),jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Rf=fe())),r&4&&pg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(je=(u=je)||c,xt(e,t),je=u):xt(e,t),jt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(A=t,c=t.child;c!==null;){for(h=A=c;A!==null;){switch(d=A,m=d.child,d.tag){case 0:case 11:case 14:case 15:Ls(4,d,d.return);break;case 1:ui(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){ce(r,n,w)}}break;case 5:ui(d,d.return);break;case 22:if(d.memoizedState!==null){gg(h);continue}}m!==null?(m.return=d,A=m):gg(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Bv("display",o))}catch(w){ce(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){ce(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:xt(e,t),jt(t),r&4&&pg(t);break;case 21:break;default:xt(e,t),jt(t)}}function jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(m1(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ws(i,""),r.flags&=-33);var s=fg(t);Zh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=fg(t);Jh(t,a,o);break;default:throw Error(T(161))}}catch(l){ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function UT(t,e,n){A=t,v1(t)}function v1(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ya;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||je;a=ya;var u=je;if(ya=o,(je=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?yg(i):l!==null?(l.return=o,A=l):yg(i);for(;s!==null;)A=s,v1(s),s=s.sibling;A=i,ya=a,je=u}mg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):mg(t)}}function mg(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:je||uu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:At(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Qs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}je||e.flags&512&&Xh(e)}catch(d){ce(e,e.return,d)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function gg(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function yg(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uu(4,e)}catch(l){ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ce(e,i,l)}}var s=e.return;try{Xh(e)}catch(l){ce(e,s,l)}break;case 5:var o=e.return;try{Xh(e)}catch(l){ce(e,o,l)}}}catch(l){ce(e,e.return,l)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var VT=Math.ceil,wl=wn.ReactCurrentDispatcher,Af=wn.ReactCurrentOwner,_t=wn.ReactCurrentBatchConfig,K=0,ke=null,ve=null,Pe=0,lt=0,ci=ir(0),_e=0,oo=null,Dr=0,cu=0,Nf=0,$s=null,tt=null,Rf=0,Di=1/0,en=null,El=!1,ed=null,Bn=null,va=!1,On=null,_l=0,Ms=0,td=null,za=-1,Ha=0;function Ye(){return K&6?fe():za!==-1?za:za=fe()}function zn(t){return t.mode&1?K&2&&Pe!==0?Pe&-Pe:TT.transition!==null?(Ha===0&&(Ha=t0()),Ha):(t=Y,t!==0||(t=window.event,t=t===void 0?16:l0(t.type)),t):1}function Pt(t,e,n,r){if(50<Ms)throw Ms=0,td=null,Error(T(185));xo(t,n,r),(!(K&2)||t!==ke)&&(t===ke&&(!(K&2)&&(cu|=n),_e===4&&xn(t,Pe)),ot(t,r),n===1&&K===0&&!(e.mode&1)&&(Di=fe()+500,ou&&sr()))}function ot(t,e){var n=t.callbackNode;TI(t,e);var r=il(t,t===ke?Pe:0);if(r===0)n!==null&&km(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&km(n),e===1)t.tag===0?IT(vg.bind(null,t)):x0(vg.bind(null,t)),wT(function(){!(K&6)&&sr()}),n=null;else{switch(n0(r)){case 1:n=tf;break;case 4:n=Zv;break;case 16:n=rl;break;case 536870912:n=e0;break;default:n=rl}n=k1(n,w1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function w1(t,e){if(za=-1,Ha=0,K&6)throw Error(T(327));var n=t.callbackNode;if(vi()&&t.callbackNode!==n)return null;var r=il(t,t===ke?Pe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Sl(t,r);else{e=r;var i=K;K|=2;var s=_1();(ke!==t||Pe!==e)&&(en=null,Di=fe()+500,Sr(t,e));do try{HT();break}catch(a){E1(t,a)}while(1);mf(),wl.current=s,K=i,ve!==null?e=0:(ke=null,Pe=0,e=_e)}if(e!==0){if(e===2&&(i=Ah(t),i!==0&&(r=i,e=nd(t,i))),e===1)throw n=oo,Sr(t,0),xn(t,r),ot(t,fe()),n;if(e===6)xn(t,r);else{if(i=t.current.alternate,!(r&30)&&!BT(i)&&(e=Sl(t,r),e===2&&(s=Ah(t),s!==0&&(r=s,e=nd(t,s))),e===1))throw n=oo,Sr(t,0),xn(t,r),ot(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:fr(t,tt,en);break;case 3:if(xn(t,r),(r&130023424)===r&&(e=Rf+500-fe(),10<e)){if(il(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ye(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Mh(fr.bind(null,t,tt,en),e);break}fr(t,tt,en);break;case 4:if(xn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Dt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*VT(r/1960))-r,10<r){t.timeoutHandle=Mh(fr.bind(null,t,tt,en),r);break}fr(t,tt,en);break;case 5:fr(t,tt,en);break;default:throw Error(T(329))}}}return ot(t,fe()),t.callbackNode===n?w1.bind(null,t):null}function nd(t,e){var n=$s;return t.current.memoizedState.isDehydrated&&(Sr(t,e).flags|=256),t=Sl(t,e),t!==2&&(e=tt,tt=n,e!==null&&rd(e)),t}function rd(t){tt===null?tt=t:tt.push.apply(tt,t)}function BT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ot(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xn(t,e){for(e&=~Nf,e&=~cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Dt(e),r=1<<n;t[n]=-1,e&=~r}}function vg(t){if(K&6)throw Error(T(327));vi();var e=il(t,0);if(!(e&1))return ot(t,fe()),null;var n=Sl(t,e);if(t.tag!==0&&n===2){var r=Ah(t);r!==0&&(e=r,n=nd(t,r))}if(n===1)throw n=oo,Sr(t,0),xn(t,e),ot(t,fe()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fr(t,tt,en),ot(t,fe()),null}function Df(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(Di=fe()+500,ou&&sr())}}function Pr(t){On!==null&&On.tag===0&&!(K&6)&&vi();var e=K;K|=1;var n=_t.transition,r=Y;try{if(_t.transition=null,Y=1,t)return t()}finally{Y=r,_t.transition=n,K=e,!(K&6)&&sr()}}function Pf(){lt=ci.current,ne(ci)}function Sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vT(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(df(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ul();break;case 3:Ni(),ne(it),ne(We),_f();break;case 5:Ef(r);break;case 4:Ni();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:gf(r.type._context);break;case 22:case 23:Pf()}n=n.return}if(ke=t,ve=t=Hn(t.current,null),Pe=lt=e,_e=0,oo=null,Nf=cu=Dr=0,tt=$s=null,gr!==null){for(e=0;e<gr.length;e++)if(n=gr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}gr=null}return t}function E1(t,e){do{var n=ve;try{if(mf(),Ua.current=vl,yl){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}yl=!1}if(Rr=0,Ce=Ee=ae=null,Os=!1,ro=0,Af.current=null,n===null||n.return===null){_e=1,oo=e,ve=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=sg(o);if(m!==null){m.flags&=-257,og(m,o,a,s,e),m.mode&1&&ig(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){ig(s,u,e),Of();break e}l=Error(T(426))}}else if(ie&&a.mode&1){var S=sg(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),og(S,o,a,s,e),ff(Ri(l,a));break e}}s=l=Ri(l,a),_e!==4&&(_e=2),$s===null?$s=[s]:$s.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=r1(s,l,e);Xm(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Bn===null||!Bn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=i1(s,a,e);Xm(s,E);break e}}s=s.return}while(s!==null)}I1(n)}catch(k){e=k,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(1)}function _1(){var t=wl.current;return wl.current=vl,t===null?vl:t}function Of(){(_e===0||_e===3||_e===2)&&(_e=4),ke===null||!(Dr&268435455)&&!(cu&268435455)||xn(ke,Pe)}function Sl(t,e){var n=K;K|=2;var r=_1();(ke!==t||Pe!==e)&&(en=null,Sr(t,e));do try{zT();break}catch(i){E1(t,i)}while(1);if(mf(),K=n,wl.current=r,ve!==null)throw Error(T(261));return ke=null,Pe=0,_e}function zT(){for(;ve!==null;)S1(ve)}function HT(){for(;ve!==null&&!mI();)S1(ve)}function S1(t){var e=C1(t.alternate,t,lt);t.memoizedProps=t.pendingProps,e===null?I1(t):ve=e,Af.current=null}function I1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bT(n,e),n!==null){n.flags&=32767,ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_e=6,ve=null;return}}else if(n=MT(n,e,lt),n!==null){ve=n;return}if(e=e.sibling,e!==null){ve=e;return}ve=e=t}while(e!==null);_e===0&&(_e=5)}function fr(t,e,n){var r=Y,i=_t.transition;try{_t.transition=null,Y=1,WT(t,e,n,r)}finally{_t.transition=i,Y=r}return null}function WT(t,e,n,r){do vi();while(On!==null);if(K&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(CI(t,s),t===ke&&(ve=ke=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||va||(va=!0,k1(rl,function(){return vi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=_t.transition,_t.transition=null;var o=Y;Y=1;var a=K;K|=4,Af.current=null,jT(t,n),y1(n,t),hT(Lh),sl=!!Oh,Lh=Oh=null,t.current=n,UT(n),gI(),K=a,Y=o,_t.transition=s}else t.current=n;if(va&&(va=!1,On=t,_l=i),s=t.pendingLanes,s===0&&(Bn=null),wI(n.stateNode),ot(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(El)throw El=!1,t=ed,ed=null,t;return _l&1&&t.tag!==0&&vi(),s=t.pendingLanes,s&1?t===td?Ms++:(Ms=0,td=t):Ms=0,sr(),null}function vi(){if(On!==null){var t=n0(_l),e=_t.transition,n=Y;try{if(_t.transition=null,Y=16>t?16:t,On===null)var r=!1;else{if(t=On,On=null,_l=0,K&6)throw Error(T(331));var i=K;for(K|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:Ls(8,c,s)}var h=c.child;if(h!==null)h.return=c,A=h;else for(;A!==null;){c=A;var d=c.sibling,m=c.return;if(p1(c),c===u){A=null;break}if(d!==null){d.return=m,A=d;break}A=m}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ls(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,A=p;break e}A=s.return}}var f=t.current;for(A=f;A!==null;){o=A;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,A=g;else e:for(o=f;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:uu(9,a)}}catch(k){ce(a,a.return,k)}if(a===o){A=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,A=E;break e}A=a.return}}if(K=i,sr(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(tu,t)}catch{}r=!0}return r}finally{Y=n,_t.transition=e}}return!1}function wg(t,e,n){e=Ri(n,e),e=r1(t,e,1),t=Vn(t,e,1),e=Ye(),t!==null&&(xo(t,1,e),ot(t,e))}function ce(t,e,n){if(t.tag===3)wg(t,t,n);else for(;e!==null;){if(e.tag===3){wg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){t=Ri(n,t),t=i1(e,t,1),e=Vn(e,t,1),t=Ye(),e!==null&&(xo(e,1,t),ot(e,t));break}}e=e.return}}function qT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ye(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(Pe&n)===n&&(_e===4||_e===3&&(Pe&130023424)===Pe&&500>fe()-Rf?Sr(t,0):Nf|=n),ot(t,e)}function T1(t,e){e===0&&(t.mode&1?(e=la,la<<=1,!(la&130023424)&&(la=4194304)):e=1);var n=Ye();t=dn(t,e),t!==null&&(xo(t,e,n),ot(t,n))}function KT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),T1(t,n)}function GT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),T1(t,n)}var C1;C1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||it.current)rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rt=!1,$T(t,e,n);rt=!!(t.flags&131072)}else rt=!1,ie&&e.flags&1048576&&A0(e,dl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ba(t,e),t=e.pendingProps;var i=ki(e,We.current);yi(e,n),i=If(null,e,r,t,i,n);var s=Tf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,st(r)?(s=!0,cl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vf(e),i.updater=au,e.stateNode=i,i._reactInternals=e,zh(e,r,t,n),e=qh(null,e,r,!0,s,n)):(e.tag=0,ie&&s&&hf(e),Ge(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ba(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=YT(r),t=At(r,t),i){case 0:e=Wh(null,e,r,t,n);break e;case 1:e=ug(null,e,r,t,n);break e;case 11:e=ag(null,e,r,t,n);break e;case 14:e=lg(null,e,r,At(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Wh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),ug(t,e,r,i,n);case 3:e:{if(l1(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,P0(t,e),ml(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ri(Error(T(423)),e),e=cg(t,e,r,n,i);break e}else if(r!==i){i=Ri(Error(T(424)),e),e=cg(t,e,r,n,i);break e}else for(ut=Un(e.stateNode.containerInfo.firstChild),ht=e,ie=!0,Rt=null,n=M0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xi(),r===i){e=fn(t,e,n);break e}Ge(t,e,r,n)}e=e.child}return e;case 5:return b0(e),t===null&&Uh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,$h(r,i)?o=null:s!==null&&$h(r,s)&&(e.flags|=32),a1(t,e),Ge(t,e,o,n),e.child;case 6:return t===null&&Uh(e),null;case 13:return u1(t,e,n);case 4:return wf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ai(e,null,r,n):Ge(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),ag(t,e,r,i,n);case 7:return Ge(t,e,e.pendingProps,n),e.child;case 8:return Ge(t,e,e.pendingProps.children,n),e.child;case 12:return Ge(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(fl,r._currentValue),r._currentValue=o,s!==null)if(Ot(s.value,o)){if(s.children===i.children&&!it.current){e=fn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=un(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ge(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,yi(e,n),i=It(i),r=r(i),e.flags|=1,Ge(t,e,r,n),e.child;case 14:return r=e.type,i=At(r,e.pendingProps),i=At(r.type,i),lg(t,e,r,i,n);case 15:return s1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Ba(t,e),e.tag=1,st(r)?(t=!0,cl(e)):t=!1,yi(e,n),L0(e,r,i),zh(e,r,i,n),qh(null,e,r,!0,t,n);case 19:return c1(t,e,n);case 22:return o1(t,e,n)}throw Error(T(156,e.tag))};function k1(t,e){return Jv(t,e)}function QT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(t,e,n,r){return new QT(t,e,n,r)}function Lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function YT(t){if(typeof t=="function")return Lf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jd)return 11;if(t===Zd)return 14}return 2}function Hn(t,e){var n=t.alternate;return n===null?(n=Et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Lf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ei:return Ir(n.children,i,s,e);case Xd:o=8,i|=8;break;case fh:return t=Et(12,n,e,i|2),t.elementType=fh,t.lanes=s,t;case ph:return t=Et(13,n,e,i),t.elementType=ph,t.lanes=s,t;case mh:return t=Et(19,n,e,i),t.elementType=mh,t.lanes=s,t;case $v:return hu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ov:o=10;break e;case Lv:o=9;break e;case Jd:o=11;break e;case Zd:o=14;break e;case Tn:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=Et(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ir(t,e,n,r){return t=Et(7,t,r,e),t.lanes=n,t}function hu(t,e,n,r){return t=Et(22,t,r,e),t.elementType=$v,t.lanes=n,t.stateNode={isHidden:!1},t}function Nc(t,e,n){return t=Et(6,t,null,e),t.lanes=n,t}function Rc(t,e,n){return e=Et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function XT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cc(0),this.expirationTimes=cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $f(t,e,n,r,i,s,o,a,l){return t=new XT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Et(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vf(s),t}function JT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function x1(t){if(!t)return Zn;t=t._reactInternals;e:{if(Vr(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(st(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(st(n))return k0(t,n,e)}return e}function A1(t,e,n,r,i,s,o,a,l){return t=$f(n,r,!0,t,i,s,o,a,l),t.context=x1(null),n=t.current,r=Ye(),i=zn(n),s=un(r,i),s.callback=e??null,Vn(n,s,i),t.current.lanes=i,xo(t,i,r),ot(t,r),t}function du(t,e,n,r){var i=e.current,s=Ye(),o=zn(i);return n=x1(n),e.context===null?e.context=n:e.pendingContext=n,e=un(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Vn(i,e,o),t!==null&&(Pt(t,i,o,s),ja(t,i,o)),o}function Il(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Eg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mf(t,e){Eg(t,e),(t=t.alternate)&&Eg(t,e)}function ZT(){return null}var N1=typeof reportError=="function"?reportError:function(t){console.error(t)};function bf(t){this._internalRoot=t}fu.prototype.render=bf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));du(t,e,null,null)};fu.prototype.unmount=bf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pr(function(){du(null,t,null,null)}),e[hn]=null}};function fu(t){this._internalRoot=t}fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=s0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<kn.length&&e!==0&&e<kn[n].priority;n++);kn.splice(n,0,t),n===0&&a0(t)}};function Ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _g(){}function eC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Il(o);s.call(u)}}var o=A1(e,r,t,0,null,!1,!1,"",_g);return t._reactRootContainer=o,t[hn]=o.current,Js(t.nodeType===8?t.parentNode:t),Pr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Il(l);a.call(u)}}var l=$f(t,0,!1,null,null,!1,!1,"",_g);return t._reactRootContainer=l,t[hn]=l.current,Js(t.nodeType===8?t.parentNode:t),Pr(function(){du(e,l,n,r)}),l}function mu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Il(o);a.call(l)}}du(e,o,t,i)}else o=eC(n,e,t,i,r);return Il(o)}r0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ws(e.pendingLanes);n!==0&&(nf(e,n|1),ot(e,fe()),!(K&6)&&(Di=fe()+500,sr()))}break;case 13:Pr(function(){var r=dn(t,1);if(r!==null){var i=Ye();Pt(r,t,1,i)}}),Mf(t,1)}};rf=function(t){if(t.tag===13){var e=dn(t,134217728);if(e!==null){var n=Ye();Pt(e,t,134217728,n)}Mf(t,134217728)}};i0=function(t){if(t.tag===13){var e=zn(t),n=dn(t,e);if(n!==null){var r=Ye();Pt(n,t,e,r)}Mf(t,e)}};s0=function(){return Y};o0=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};Ch=function(t,e,n){switch(e){case"input":if(vh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=su(r);if(!i)throw Error(T(90));bv(r),vh(r,i)}}}break;case"textarea":jv(t,n);break;case"select":e=n.value,e!=null&&fi(t,!!n.multiple,e,!1)}};qv=Df;Kv=Pr;var tC={usingClientEntryPoint:!1,Events:[No,ii,su,Hv,Wv,Df]},fs={findFiberByHostInstance:mr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},nC={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yv(t),t===null?null:t.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance||ZT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wa.isDisabled&&wa.supportsFiber)try{tu=wa.inject(nC),Wt=wa}catch{}}mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tC;mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ff(e))throw Error(T(200));return JT(t,e,null,n)};mt.createRoot=function(t,e){if(!Ff(t))throw Error(T(299));var n=!1,r="",i=N1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$f(t,1,!1,null,null,n,!1,r,i),t[hn]=e.current,Js(t.nodeType===8?t.parentNode:t),new bf(e)};mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=Yv(e),t=t===null?null:t.stateNode,t};mt.flushSync=function(t){return Pr(t)};mt.hydrate=function(t,e,n){if(!pu(e))throw Error(T(200));return mu(null,t,e,!0,n)};mt.hydrateRoot=function(t,e,n){if(!Ff(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=N1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=A1(e,null,t,1,n??null,i,!1,s,o),t[hn]=e.current,Js(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new fu(e)};mt.render=function(t,e,n){if(!pu(e))throw Error(T(200));return mu(null,t,e,!1,n)};mt.unmountComponentAtNode=function(t){if(!pu(t))throw Error(T(40));return t._reactRootContainer?(Pr(function(){mu(null,null,t,!1,function(){t._reactRootContainer=null,t[hn]=null})}),!0):!1};mt.unstable_batchedUpdates=Df;mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!pu(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return mu(t,e,n,!1,r)};mt.version="18.2.0-next-9e3b772b8-20220608";function R1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R1)}catch(t){console.error(t)}}R1(),Av.exports=mt;var rC=Av.exports,Sg=rC;hh.createRoot=Sg.createRoot,hh.hydrateRoot=Sg.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ao(){return ao=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ao.apply(this,arguments)}var Ln;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ln||(Ln={}));const Ig="popstate";function iC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return id("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Tl(i)}return oC(e,n,null,t)}function pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function jf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function sC(){return Math.random().toString(36).substr(2,8)}function Tg(t,e){return{usr:t.state,key:t.key,idx:e}}function id(t,e,n,r){return n===void 0&&(n=null),ao({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?qi(e):e,{state:n,key:e&&e.key||r||sC()})}function Tl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function qi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function oC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ln.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ao({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Ln.Pop;let S=c(),p=S==null?null:S-u;u=S,l&&l({action:a,location:w.location,delta:p})}function d(S,p){a=Ln.Push;let f=id(w.location,S,p);n&&n(f,S),u=c()+1;let g=Tg(f,u),E=w.createHref(f);try{o.pushState(g,"",E)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(E)}s&&l&&l({action:a,location:w.location,delta:1})}function m(S,p){a=Ln.Replace;let f=id(w.location,S,p);n&&n(f,S),u=c();let g=Tg(f,u),E=w.createHref(f);o.replaceState(g,"",E),s&&l&&l({action:a,location:w.location,delta:0})}function v(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof S=="string"?S:Tl(S);return pe(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let w={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ig,h),l=S,()=>{i.removeEventListener(Ig,h),l=null}},createHref(S){return e(i,S)},createURL:v,encodeLocation(S){let p=v(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(S){return o.go(S)}};return w}var Cg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Cg||(Cg={}));function aC(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?qi(e):e,i=Uf(r.pathname||"/",n);if(i==null)return null;let s=D1(t);lC(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=yC(s[a],EC(i));return o}function D1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Wn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),D1(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:mC(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of P1(s.path))i(s,o,l)}),e}function P1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=P1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function lC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:gC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const uC=/^:\w+$/,cC=3,hC=2,dC=1,fC=10,pC=-2,kg=t=>t==="*";function mC(t,e){let n=t.split("/"),r=n.length;return n.some(kg)&&(r+=pC),e&&(r+=hC),n.filter(i=>!kg(i)).reduce((i,s)=>i+(uC.test(s)?cC:s===""?dC:fC),r)}function gC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function yC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=vC({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Wn([i,c.pathname]),pathnameBase:TC(Wn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Wn([i,c.pathnameBase]))}return s}function vC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=wC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=_C(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function wC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),jf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function EC(t){try{return decodeURI(t)}catch(e){return jf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function _C(t,e){try{return decodeURIComponent(t)}catch(n){return jf(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Uf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function SC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?qi(t):t;return{pathname:n?n.startsWith("/")?n:IC(n,e):e,search:CC(r),hash:kC(i)}}function IC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Dc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vf(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Bf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=qi(t):(i=ao({},t),pe(!i.pathname||!i.pathname.includes("?"),Dc("?","pathname","search",i)),pe(!i.pathname||!i.pathname.includes("#"),Dc("#","pathname","hash",i)),pe(!i.search||!i.search.includes("#"),Dc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=SC(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Wn=t=>t.join("/").replace(/\/\/+/g,"/"),TC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),CC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,kC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function xC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const O1=["post","put","patch","delete"];new Set(O1);const AC=["get",...O1];new Set(AC);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cl(){return Cl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cl.apply(this,arguments)}const zf=I.createContext(null),NC=I.createContext(null),Ki=I.createContext(null),gu=I.createContext(null),En=I.createContext({outlet:null,matches:[],isDataRoute:!1}),L1=I.createContext(null);function RC(t,e){let{relative:n}=e===void 0?{}:e;Gi()||pe(!1);let{basename:r,navigator:i}=I.useContext(Ki),{hash:s,pathname:o,search:a}=M1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Wn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Gi(){return I.useContext(gu)!=null}function Do(){return Gi()||pe(!1),I.useContext(gu).location}function $1(t){I.useContext(Ki).static||I.useLayoutEffect(t)}function Hf(){let{isDataRoute:t}=I.useContext(En);return t?WC():DC()}function DC(){Gi()||pe(!1);let t=I.useContext(zf),{basename:e,navigator:n}=I.useContext(Ki),{matches:r}=I.useContext(En),{pathname:i}=Do(),s=JSON.stringify(Vf(r).map(l=>l.pathnameBase)),o=I.useRef(!1);return $1(()=>{o.current=!0}),I.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Bf(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Wn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const PC=I.createContext(null);function OC(t){let e=I.useContext(En).outlet;return e&&I.createElement(PC.Provider,{value:t},e)}function M1(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.useContext(En),{pathname:i}=Do(),s=JSON.stringify(Vf(r).map(o=>o.pathnameBase));return I.useMemo(()=>Bf(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function LC(t,e){return $C(t,e)}function $C(t,e,n){Gi()||pe(!1);let{navigator:r}=I.useContext(Ki),{matches:i}=I.useContext(En),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Do(),u;if(e){var c;let w=typeof e=="string"?qi(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||pe(!1),u=w}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",m=aC(t,{pathname:d}),v=UC(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Wn([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Wn([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&v?I.createElement(gu.Provider,{value:{location:Cl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ln.Pop}},v):v}function MC(){let t=HC(),e=xC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,s)}const bC=I.createElement(MC,null);class FC extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I.createElement(En.Provider,{value:this.props.routeContext},I.createElement(L1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jC(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(zf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(En.Provider,{value:e},r)}function UC(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||pe(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||bC);let d=e.concat(s.slice(0,u+1)),m=()=>{let v;return c?v=h:l.route.Component?v=I.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,I.createElement(jC,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?I.createElement(FC,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var b1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(b1||{}),kl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(kl||{});function VC(t){let e=I.useContext(zf);return e||pe(!1),e}function BC(t){let e=I.useContext(NC);return e||pe(!1),e}function zC(t){let e=I.useContext(En);return e||pe(!1),e}function F1(t){let e=zC(),n=e.matches[e.matches.length-1];return n.route.id||pe(!1),n.route.id}function HC(){var t;let e=I.useContext(L1),n=BC(kl.UseRouteError),r=F1(kl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function WC(){let{router:t}=VC(b1.UseNavigateStable),e=F1(kl.UseNavigateStable),n=I.useRef(!1);return $1(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Cl({fromRouteId:e},s)))},[t,e])}function j1(t){let{to:e,replace:n,state:r,relative:i}=t;Gi()||pe(!1);let{matches:s}=I.useContext(En),{pathname:o}=Do(),a=Hf(),l=Bf(e,Vf(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return I.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function qC(t){return OC(t.context)}function Ut(t){pe(!1)}function KC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ln.Pop,navigator:s,static:o=!1}=t;Gi()&&pe(!1);let a=e.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=qi(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,v=I.useMemo(()=>{let w=Uf(u,a);return w==null?null:{location:{pathname:w,search:c,hash:h,state:d,key:m},navigationType:i}},[a,u,c,h,d,m,i]);return v==null?null:I.createElement(Ki.Provider,{value:l},I.createElement(gu.Provider,{children:n,value:v}))}function GC(t){let{children:e,location:n}=t;return LC(sd(e),n)}new Promise(()=>{});function sd(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,sd(r.props.children,s));return}r.type!==Ut&&pe(!1),!r.props.index||!r.props.children||pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=sd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function od(){return od=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},od.apply(this,arguments)}function QC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function YC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function XC(t,e){return t.button===0&&(!e||e==="_self")&&!YC(t)}const JC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],ZC="startTransition",xg=KS[ZC];function ek(t){let{basename:e,children:n,future:r,window:i}=t,s=I.useRef();s.current==null&&(s.current=iC({window:i,v5Compat:!0}));let o=s.current,[a,l]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=I.useCallback(h=>{u&&xg?xg(()=>l(h)):l(h)},[l,u]);return I.useLayoutEffect(()=>o.listen(c),[o,c]),I.createElement(KC,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const tk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rk=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=QC(e,JC),{basename:d}=I.useContext(Ki),m,v=!1;if(typeof u=="string"&&nk.test(u)&&(m=u,tk))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),E=Uf(g.pathname,d);g.origin===f.origin&&E!=null?u=E+g.search+g.hash:v=!0}catch{}let w=RC(u,{relative:i}),S=ik(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||S(f)}return I.createElement("a",od({},h,{href:m||w,onClick:v||s?r:p,ref:n,target:l}))});var Ag;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Ag||(Ag={}));var Ng;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ng||(Ng={}));function ik(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Hf(),l=Do(),u=M1(t,{relative:o});return I.useCallback(c=>{if(XC(c,n)){c.preventDefault();let h=r!==void 0?r:Tl(l)===Tl(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
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
 */const U1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},V1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(U1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new ok;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ok extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ak=function(t){const e=U1(t);return V1.encodeByteArray(e,!0)},xl=function(t){return ak(t).replace(/\./g,"")},B1=function(t){try{return V1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uk=()=>lk().__FIREBASE_DEFAULTS__,ck=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&B1(t[1]);return e&&JSON.parse(e)},Wf=()=>{try{return uk()||ck()||hk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},z1=t=>{var e,n;return(n=(e=Wf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dk=t=>{const e=z1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},H1=()=>{var t;return(t=Wf())===null||t===void 0?void 0:t.config},W1=t=>{var e;return(e=Wf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class fk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function pk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[xl(JSON.stringify(n)),xl(JSON.stringify(o)),a].join(".")}/**
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
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function q1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yk(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function K1(){try{return typeof indexedDB=="object"}catch{return!1}}function G1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function vk(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const wk="FirebaseError";class Ft extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wk,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ek(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ft(i,a,r)}}function Ek(t,e){return t.replace(_k,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _k=/\{\$([^}]+)}/g;function Sk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Rg(s)&&Rg(o)){if(!lo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Rg(t){return t!==null&&typeof t=="object"}/**
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
 */function Po(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _s(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ss(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ik(t,e){const n=new Tk(t,e);return n.subscribe.bind(n)}class Tk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ck(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Pc),i.error===void 0&&(i.error=Pc),i.complete===void 0&&(i.complete=Pc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ck(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pc(){}/**
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
 */const kk=1e3,xk=2,Ak=4*60*60*1e3,Nk=.5;function Dg(t,e=kk,n=xk){const r=e*Math.pow(n,t),i=Math.round(Nk*r*(Math.random()-.5)*2);return Math.min(Ak,r+i)}/**
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
 */function me(t){return t&&t._delegate?t._delegate:t}class Lt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pr="[DEFAULT]";/**
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
 */class Rk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pk(e))try{this.getOrInitializeService({instanceIdentifier:pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pr){return this.instances.has(e)}getOptions(e=pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pr){return this.component?this.component.multipleInstances?e:pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dk(t){return t===pr?void 0:t}function Pk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ok{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const Lk={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},$k=G.INFO,Mk={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},bk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Mk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yu{constructor(e){this.name=e,this._logLevel=$k,this._logHandler=bk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const Fk=(t,e)=>e.some(n=>t instanceof n);let Pg,Og;function jk(){return Pg||(Pg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Uk(){return Og||(Og=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q1=new WeakMap,ad=new WeakMap,Y1=new WeakMap,Oc=new WeakMap,qf=new WeakMap;function Vk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(qn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Q1.set(n,t)}).catch(()=>{}),qf.set(e,t),e}function Bk(t){if(ad.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ad.set(t,e)}let ld={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ad.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Y1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zk(t){ld=t(ld)}function Hk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Lc(this),e,...n);return Y1.set(r,e.sort?e.sort():[e]),qn(r)}:Uk().includes(t)?function(...e){return t.apply(Lc(this),e),qn(Q1.get(this))}:function(...e){return qn(t.apply(Lc(this),e))}}function Wk(t){return typeof t=="function"?Hk(t):(t instanceof IDBTransaction&&Bk(t),Fk(t,jk())?new Proxy(t,ld):t)}function qn(t){if(t instanceof IDBRequest)return Vk(t);if(Oc.has(t))return Oc.get(t);const e=Wk(t);return e!==t&&(Oc.set(t,e),qf.set(e,t)),e}const Lc=t=>qf.get(t);function qk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=qn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(qn(o.result),l.oldVersion,l.newVersion,qn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Kk=["get","getKey","getAll","getAllKeys","count"],Gk=["put","add","delete","clear"],$c=new Map;function Lg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($c.get(e))return $c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Gk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Kk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return $c.set(e,s),s}zk(t=>({...t,get:(e,n,r)=>Lg(e,n)||t.get(e,n,r),has:(e,n)=>!!Lg(e,n)||t.has(e,n)}));/**
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
 */class Qk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Yk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ud="@firebase/app",$g="0.9.10";/**
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
 */const Or=new yu("@firebase/app"),Xk="@firebase/app-compat",Jk="@firebase/analytics-compat",Zk="@firebase/analytics",e2="@firebase/app-check-compat",t2="@firebase/app-check",n2="@firebase/auth",r2="@firebase/auth-compat",i2="@firebase/database",s2="@firebase/database-compat",o2="@firebase/functions",a2="@firebase/functions-compat",l2="@firebase/installations",u2="@firebase/installations-compat",c2="@firebase/messaging",h2="@firebase/messaging-compat",d2="@firebase/performance",f2="@firebase/performance-compat",p2="@firebase/remote-config",m2="@firebase/remote-config-compat",g2="@firebase/storage",y2="@firebase/storage-compat",v2="@firebase/firestore",w2="@firebase/firestore-compat",E2="firebase",_2="9.22.0";/**
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
 */const cd="[DEFAULT]",S2={[ud]:"fire-core",[Xk]:"fire-core-compat",[Zk]:"fire-analytics",[Jk]:"fire-analytics-compat",[t2]:"fire-app-check",[e2]:"fire-app-check-compat",[n2]:"fire-auth",[r2]:"fire-auth-compat",[i2]:"fire-rtdb",[s2]:"fire-rtdb-compat",[o2]:"fire-fn",[a2]:"fire-fn-compat",[l2]:"fire-iid",[u2]:"fire-iid-compat",[c2]:"fire-fcm",[h2]:"fire-fcm-compat",[d2]:"fire-perf",[f2]:"fire-perf-compat",[p2]:"fire-rc",[m2]:"fire-rc-compat",[g2]:"fire-gcs",[y2]:"fire-gcs-compat",[v2]:"fire-fst",[w2]:"fire-fst-compat","fire-js":"fire-js",[E2]:"fire-js-all"};/**
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
 */const Al=new Map,hd=new Map;function I2(t,e){try{t.container.addComponent(e)}catch(n){Or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jt(t){const e=t.name;if(hd.has(e))return Or.debug(`There were multiple attempts to register component ${e}.`),!1;hd.set(e,t);for(const n of Al.values())I2(n,t);return!0}function zr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const T2={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Kn=new Br("app","Firebase",T2);/**
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
 */class C2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
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
 */const Qi=_2;function Kf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Kn.create("bad-app-name",{appName:String(i)});if(n||(n=H1()),!n)throw Kn.create("no-options");const s=Al.get(i);if(s){if(lo(n,s.options)&&lo(r,s.config))return s;throw Kn.create("duplicate-app",{appName:i})}const o=new Ok(i);for(const l of hd.values())o.addComponent(l);const a=new C2(n,r,o);return Al.set(i,a),a}function Gf(t=cd){const e=Al.get(t);if(!e&&t===cd&&H1())return Kf();if(!e)throw Kn.create("no-app",{appName:t});return e}function St(t,e,n){var r;let i=(r=S2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Or.warn(a.join(" "));return}Jt(new Lt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const k2="firebase-heartbeat-database",x2=1,uo="firebase-heartbeat-store";let Mc=null;function X1(){return Mc||(Mc=qk(k2,x2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(uo)}}}).catch(t=>{throw Kn.create("idb-open",{originalErrorMessage:t.message})})),Mc}async function A2(t){try{return await(await X1()).transaction(uo).objectStore(uo).get(J1(t))}catch(e){if(e instanceof Ft)Or.warn(e.message);else{const n=Kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Or.warn(n.message)}}}async function Mg(t,e){try{const r=(await X1()).transaction(uo,"readwrite");await r.objectStore(uo).put(e,J1(t)),await r.done}catch(n){if(n instanceof Ft)Or.warn(n.message);else{const r=Kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Or.warn(r.message)}}}function J1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const N2=1024,R2=30*24*60*60*1e3;class D2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new O2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=R2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bg(),{heartbeatsToSend:n,unsentEntries:r}=P2(this._heartbeatsCache.heartbeats),i=xl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function bg(){return new Date().toISOString().substring(0,10)}function P2(t,e=N2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Fg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class O2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return K1()?G1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await A2(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fg(t){return xl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function L2(t){Jt(new Lt("platform-logger",e=>new Qk(e),"PRIVATE")),Jt(new Lt("heartbeat",e=>new D2(e),"PRIVATE")),St(ud,$g,t),St(ud,$g,"esm2017"),St("fire-js","")}L2("");function Qf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Z1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $2=Z1,ew=new Br("auth","Firebase",Z1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=new yu("@firebase/auth");function M2(t,...e){Nl.logLevel<=G.WARN&&Nl.warn(`Auth (${Qi}): ${t}`,...e)}function qa(t,...e){Nl.logLevel<=G.ERROR&&Nl.error(`Auth (${Qi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,...e){throw Yf(t,...e)}function Kt(t,...e){return Yf(t,...e)}function b2(t,e,n){const r=Object.assign(Object.assign({},$2()),{[e]:n});return new Br("auth","Firebase",r).create(e,{appName:t.name})}function Yf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ew.create(t,...e)}function M(t,e,...n){if(!t)throw Yf(e,...n)}function sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qa(e),new Error(e)}function pn(t,e){t||sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function F2(){return jg()==="http:"||jg()==="https:"}function jg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(F2()||q1()||"connection"in navigator)?navigator.onLine:!0}function U2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,pn(n>e,"Short delay should be less than long delay!"),this.isMobile=mk()||gk()}get(){return j2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(t,e){pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2=new Oo(3e4,6e4);function Lo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yi(t,e,n,r,i={}){return nw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Po(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),tw.fetch()(rw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function nw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},V2),e);try{const i=new z2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ea(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ea(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ea(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ea(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw b2(t,c,u);$t(t,c)}}catch(i){if(i instanceof Ft)throw i;$t(t,"network-request-failed",{message:String(i)})}}async function vu(t,e,n,r,i={}){const s=await Yi(t,e,n,r,i);return"mfaPendingCredential"in s&&$t(t,"multi-factor-auth-required",{_serverResponse:s}),s}function rw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Xf(t.config,i):`${t.config.apiScheme}://${i}`}class z2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kt(this.auth,"network-request-failed")),B2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ea(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Kt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H2(t,e){return Yi(t,"POST","/v1/accounts:delete",e)}async function W2(t,e){return Yi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function q2(t,e=!1){const n=me(t),r=await n.getIdToken(e),i=Jf(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bs(bc(i.auth_time)),issuedAtTime:bs(bc(i.iat)),expirationTime:bs(bc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bc(t){return Number(t)*1e3}function Jf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qa("JWT malformed, contained fewer than 3 sections"),null;try{const i=B1(n);return i?JSON.parse(i):(qa("Failed to decode base64 JWT payload"),null)}catch(i){return qa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function K2(t){const e=Jf(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ft&&G2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function G2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bs(this.lastLoginAt),this.creationTime=bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Rl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await co(t,W2(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?J2(s.providerUserInfo):[],a=X2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new iw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function Y2(t){const e=me(t);await Rl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function X2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function J2(t){return t.map(e=>{var{providerId:n}=e,r=Qf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z2(t,e){const n=await nw(t,{},async()=>{const r=Po({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=rw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):K2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Z2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ho;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ho,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new iw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await co(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return q2(this,e)}reload(){return Y2(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Rl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await co(this,H2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:k,providerData:N,stsTokenManager:P}=n;M(g&&P,e,"internal-error");const L=ho.fromJSON(this.name,P);M(typeof g=="string",e,"internal-error"),Sn(h,e.name),Sn(d,e.name),M(typeof E=="boolean",e,"internal-error"),M(typeof k=="boolean",e,"internal-error"),Sn(m,e.name),Sn(v,e.name),Sn(w,e.name),Sn(S,e.name),Sn(p,e.name),Sn(f,e.name);const J=new Tr({uid:g,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:k,photoURL:v,phoneNumber:m,tenantId:w,stsTokenManager:L,createdAt:p,lastLoginAt:f});return N&&Array.isArray(N)&&(J.providerData=N.map(z=>Object.assign({},z))),S&&(J._redirectEventId=S),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new ho;i.updateFromServerResponse(n);const s=new Tr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Rl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=new Map;function on(t){pn(t instanceof Function,"Expected a class definition");let e=Ug.get(t);return e?(pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ug.set(t,e),e)}/**
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
 */class sw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sw.type="NONE";const Vg=sw;/**
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
 */function Ka(t,e,n){return`firebase:${t}:${e}:${n}`}class wi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ka(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ka("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new wi(on(Vg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||on(Vg);const o=Ka(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Tr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new wi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new wi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ow(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cw(e))return"Blackberry";if(hw(e))return"Webos";if(Zf(e))return"Safari";if((e.includes("chrome/")||aw(e))&&!e.includes("edge/"))return"Chrome";if(uw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ow(t=qe()){return/firefox\//i.test(t)}function Zf(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function aw(t=qe()){return/crios\//i.test(t)}function lw(t=qe()){return/iemobile/i.test(t)}function uw(t=qe()){return/android/i.test(t)}function cw(t=qe()){return/blackberry/i.test(t)}function hw(t=qe()){return/webos/i.test(t)}function wu(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ex(t=qe()){var e;return wu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tx(){return yk()&&document.documentMode===10}function dw(t=qe()){return wu(t)||uw(t)||hw(t)||cw(t)||/windows phone/i.test(t)||lw(t)}function nx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(t,e=[]){let n;switch(t){case"Browser":n=Bg(qe());break;case"Worker":n=`${Bg(qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qi}/${r}`}async function pw(t,e){return Yi(t,"GET","/v2/recaptchaConfig",Lo(t,e))}function zg(t){return t!==void 0&&t.enterprise!==void 0}class mw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",rx().appendChild(r)})}function ix(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sx="https://www.google.com/recaptcha/enterprise.js?render=",ox="recaptcha-enterprise",ax="NO_RECAPTCHA";class yw{constructor(e){this.type=ox,this.auth=$o(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{pw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new mw(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;zg(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(ax)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&zg(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}gw(sx+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Hg(t,e,n,r=!1){const i=new yw(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class lx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wg(this),this.idTokenSubscription=new Wg(this),this.beforeStateQueue=new lx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ew,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=on(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await wi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Rl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=U2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?me(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}async initializeRecaptchaConfig(){const e=await pw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new mw(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new yw(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Br("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&on(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await wi.create(this,[on(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&M2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $o(t){return me(t)}class Wg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ik(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(t,e){const n=zr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(lo(s,e??{}))return i;$t(i,"already-initialized")}return n.initialize({options:e})}function hx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(on);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dx(t,e,n){const r=$o(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=vw(e),{host:o,port:a}=fx(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||px()}function vw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fx(t){const e=vw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qg(o)}}}function qg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function px(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,n){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}async function mx(t,e){return Yi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fc(t,e){return vu(t,"POST","/v1/accounts:signInWithPassword",Lo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gx(t,e){return vu(t,"POST","/v1/accounts:signInWithEmailLink",Lo(t,e))}async function yx(t,e){return vu(t,"POST","/v1/accounts:signInWithEmailLink",Lo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo extends ep{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new fo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Hg(e,r,"signInWithPassword");return Fc(e,i)}else return Fc(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Hg(e,r,"signInWithPassword");return Fc(e,s)}else return Promise.reject(i)});case"emailLink":return gx(e,{email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return mx(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yx(e,{idToken:n,email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t,e){return vu(t,"POST","/v1/accounts:signInWithIdp",Lo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx="http://localhost";class Lr extends ep{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Lr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ei(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ei(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ei(e,n)}buildRequest(){const e={requestUri:vx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Po(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ex(t){const e=_s(Ss(t)).link,n=e?_s(Ss(e)).deep_link_id:null,r=_s(Ss(t)).deep_link_id;return(r?_s(Ss(r)).link:null)||r||n||e||t}class tp{constructor(e){var n,r,i,s,o,a;const l=_s(Ss(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=wx((i=l.mode)!==null&&i!==void 0?i:null);M(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ex(e);try{return new tp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.providerId=Xi.PROVIDER_ID}static credential(e,n){return fo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=tp.parseLink(n);return M(r,"argument-error"),fo._fromEmailAndCode(e,r.code,r.tenantId)}}Xi.PROVIDER_ID="password";Xi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mo extends ww{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Mo{constructor(){super("facebook.com")}static credential(e){return Lr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.FACEBOOK_SIGN_IN_METHOD="facebook.com";An.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Mo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Lr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Mo{constructor(){super("github.com")}static credential(e){return Lr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.GITHUB_SIGN_IN_METHOD="github.com";Rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Mo{constructor(){super("twitter.com")}static credential(e,n){return Lr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Tr._fromIdTokenResponse(e,r,i),o=Kg(r);return new Pi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Kg(r);return new Pi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Kg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends Ft{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Dl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Dl(e,n,r,i)}}function Ew(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Dl._fromErrorAndOperation(t,s,e,r):s})}async function _x(t,e,n=!1){const r=await co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pi._forOperation(t,"link",r)}/**
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
 */async function Sx(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await co(t,Ew(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=Jf(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),Pi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _w(t,e,n=!1){const r="signIn",i=await Ew(t,r,e),s=await Pi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ix(t,e){return _w($o(t),e)}function Tx(t,e,n){return Ix(me(t),Xi.credential(e,n))}function Cx(t,e,n,r){return me(t).onIdTokenChanged(e,n,r)}function kx(t,e,n){return me(t).beforeAuthStateChanged(e,n)}function xx(t,e,n,r){return me(t).onAuthStateChanged(e,n,r)}function Ax(t){return me(t).signOut()}const Pl="__sak";/**
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
 */class Sw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pl,"1"),this.storage.removeItem(Pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nx(){const t=qe();return Zf(t)||wu(t)}const Rx=1e3,Dx=10;class Iw extends Sw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Nx()&&nx(),this.fallbackToPolling=dw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Dx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Rx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Iw.type="LOCAL";const Px=Iw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw extends Sw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tw.type="SESSION";const Cw=Tw;/**
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
 */function Ox(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Eu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Eu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Ox(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Eu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Lx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=np("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function $x(t){Gt().location.href=t}/**
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
 */function kw(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function Mx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Fx(){return kw()?self:null}/**
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
 */const xw="firebaseLocalStorageDb",jx=1,Ol="firebaseLocalStorage",Aw="fbase_key";class bo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _u(t,e){return t.transaction([Ol],e?"readwrite":"readonly").objectStore(Ol)}function Ux(){const t=indexedDB.deleteDatabase(xw);return new bo(t).toPromise()}function fd(){const t=indexedDB.open(xw,jx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ol,{keyPath:Aw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ol)?e(r):(r.close(),await Ux(),e(await fd()))})})}async function Gg(t,e,n){const r=_u(t,!0).put({[Aw]:e,value:n});return new bo(r).toPromise()}async function Vx(t,e){const n=_u(t,!1).get(e),r=await new bo(n).toPromise();return r===void 0?null:r.value}function Qg(t,e){const n=_u(t,!0).delete(e);return new bo(n).toPromise()}const Bx=800,zx=3;class Nw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Eu._getInstance(Fx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mx(),!this.activeServiceWorker)return;this.sender=new Lx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fd();return await Gg(e,Pl,"1"),await Qg(e,Pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Vx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=_u(i,!1).getAll();return new bo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nw.type="LOCAL";const Hx=Nw;new Oo(3e4,6e4);/**
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
 */function Wx(t,e){return e?on(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class rp extends ep{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ei(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ei(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qx(t){return _w(t.auth,new rp(t),t.bypassAuthState)}function Kx(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),Sx(n,new rp(t),t.bypassAuthState)}async function Gx(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),_x(n,new rp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qx;case"linkViaPopup":case"linkViaRedirect":return Gx;case"reauthViaPopup":case"reauthViaRedirect":return Kx;default:$t(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=new Oo(2e3,1e4);class hi extends Rw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,hi.currentPopupAction&&hi.currentPopupAction.cancel(),hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=np();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qx.get())};e()}}hi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx="pendingRedirect",Ga=new Map;class Xx extends Rw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ga.get(this.auth._key());if(!e){try{const r=await Jx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ga.set(this.auth._key(),e)}return this.bypassAuthState||Ga.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jx(t,e){const n=tA(e),r=eA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Zx(t,e){Ga.set(t._key(),e)}function eA(t){return on(t._redirectPersistence)}function tA(t){return Ka(Yx,t.config.apiKey,t.name)}async function nA(t,e,n=!1){const r=$o(t),i=Wx(r,e),o=await new Xx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=10*60*1e3;class iA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Dw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yg(e))}saveEventToCache(e){this.cachedEventUids.add(Yg(e)),this.lastProcessedEventTime=Date.now()}}function Yg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(t,e={}){return Yi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lA=/^https?/;async function uA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oA(t);for(const n of e)try{if(cA(n))return}catch{}$t(t,"unauthorized-domain")}function cA(t){const e=dd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lA.test(n))return!1;if(aA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const hA=new Oo(3e4,6e4);function Xg(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dA(t){return new Promise((e,n)=>{var r,i,s;function o(){Xg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xg(),n(Kt(t,"network-request-failed"))},timeout:hA.get()})}if(!((i=(r=Gt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Gt().gapi)===null||s===void 0)&&s.load)o();else{const a=ix("iframefcb");return Gt()[a]=()=>{gapi.load?o():n(Kt(t,"network-request-failed"))},gw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Qa=null,e})}let Qa=null;function fA(t){return Qa=Qa||dA(t),Qa}/**
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
 */const pA=new Oo(5e3,15e3),mA="__/auth/iframe",gA="emulator/auth/iframe",yA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wA(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xf(e,gA):`https://${t.config.authDomain}/${mA}`,r={apiKey:e.apiKey,appName:t.name,v:Qi},i=vA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Po(r).slice(1)}`}async function EA(t){const e=await fA(t),n=Gt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:wA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Kt(t,"network-request-failed"),a=Gt().setTimeout(()=>{s(o)},pA.get());function l(){Gt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const _A={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SA=500,IA=600,TA="_blank",CA="http://localhost";class Jg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kA(t,e,n,r=SA,i=IA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_A),{width:r.toString(),height:i.toString(),top:s,left:o}),u=qe().toLowerCase();n&&(a=aw(u)?TA:n),ow(u)&&(e=e||CA,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,v])=>`${d}${m}=${v},`,"");if(ex(u)&&a!=="_self")return xA(e||"",a),new Jg(null);const h=window.open(e||"",a,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new Jg(h)}function xA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const AA="__/auth/handler",NA="emulator/auth/handler",RA=encodeURIComponent("fac");async function Zg(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qi,eventId:i};if(e instanceof ww){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Sk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Mo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${RA}=${encodeURIComponent(l)}`:"";return`${DA(t)}?${Po(a).slice(1)}${u}`}function DA({config:t}){return t.emulator?Xf(t,NA):`https://${t.authDomain}/${AA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="webStorageSupport";class PA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cw,this._completeRedirectFn=nA,this._overrideRedirectResult=Zx}async _openPopup(e,n,r,i){var s;pn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Zg(e,n,r,dd(),i);return kA(e,o,np())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zg(e,n,r,dd(),i);return $x(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await EA(e),r=new iA(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jc,{type:jc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jc];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dw()||Zf()||wu()}}const OA=PA;var ey="@firebase/auth",ty="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function MA(t){Jt(new Lt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fw(t)},u=new ux(r,i,s,l);return hx(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Jt(new Lt("auth-internal",e=>{const n=$o(e.getProvider("auth").getImmediate());return(r=>new LA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(ey,ty,$A(t)),St(ey,ty,"esm2017")}/**
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
 */const bA=5*60,FA=W1("authIdTokenMaxAge")||bA;let ny=null;const jA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>FA)return;const i=n==null?void 0:n.token;ny!==i&&(ny=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function UA(t=Gf()){const e=zr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cx(t,{popupRedirectResolver:OA,persistence:[Hx,Px,Cw]}),r=W1("authTokenSyncURL");if(r){const s=jA(r);kx(n,s,()=>s(n.currentUser)),Cx(n,o=>s(o))}const i=z1("auth");return i&&dx(n,`http://${i}`),n}MA("Browser");const Su=I.createContext({}),VA=({children:t})=>{const e=UA(),[n]=I.useState(!1),[r,i]=I.useState(null),[s,o]=I.useState(!0),[a,l]=I.useState("");I.useEffect(()=>xx(e,u),[]);const u=async()=>{await i(e.currentUser),o(!1)},c=(d,m)=>{o(!0),Tx(e,d,m).then(()=>{}).catch(()=>{l(!0),o(!1)})},h=()=>{o(!0),Ax(e).then(()=>{}).catch(()=>{o(!1)})};return y.jsx(Su.Provider,{value:{couldLogin:n,signIn:c,signOut:h,user:r,loading:s,err:a},children:t})},BA="_loader_hm3et_5",zA="_titleContainer_hm3et_25",HA="_title_hm3et_25",WA="_typing_hm3et_1",Uc={loader:BA,titleContainer:zA,title:HA,typing:WA},qA="_background_bbzut_1",KA="_flowers_bbzut_7",GA="_wheat_bbzut_22",QA="_details_bbzut_35",_a={background:qA,flowers:KA,wheat:GA,details:QA},YA="/assets/flowers-196b5b19.png",XA="/assets/wheat-6ddf021a.png",JA="/assets/details-e0934b85.png";function Iu(){return y.jsxs("div",{className:_a.background,children:[y.jsx("img",{src:YA,className:_a.flowers}),y.jsx("img",{src:XA,className:_a.wheat}),y.jsx("img",{src:JA,className:_a.details})]})}const ZA="_wrap_ie2xg_1",eN="_container_ie2xg_12",ry={wrap:ZA,container:eN},Pw=t=>{const[e,n]=I.useState(),[r,i]=I.useState(),[s,o]=I.useState(),[a,l]=I.useState();return setInterval(()=>{const c=new Date(t).getTime(),h=new Date().getTime(),d=c-h,m=1e3,v=m*60,w=v*60,S=w*24,p=Math.floor(d/S),f=Math.floor(d%S/w),g=Math.floor(d%w/v),E=Math.floor(d%v/m);n(p),i(f),o(g),l(E)},1e3),[e,r,s,a]},tN="_preCard_1c9ab_1",nN="_text_1c9ab_34",rN={preCard:tN,in:"_in_1c9ab_1",text:nN},iN="/assets/1-3e5e40af.jpg",sN="/assets/2-28143cb1.jpg",oN="/assets/3-9b63cf82.jpg",aN="/assets/4-7f1eddfc.jpg";function Sa(t){const[e,n]=I.useState(),r=()=>{n(!0)},i=()=>{n(!1)};function s(o){if(o===1)return iN;if(o===2)return sN;if(o===3)return oN;if(o===4)return aN}return y.jsx("div",{className:rN.preCard,style:e?{background:`url(${s(t.numberPhoto)}) no-repeat  center`,backgroundSize:"cover",transition:"2s",zIndex:"4",width:"130px"}:{},onMouseEnter:r,onMouseLeave:i,children:t.children})}function et({style:t,text:e}){return y.jsx("span",{className:t,children:e})}const lN="_a_4qqib_8",uN="_button_4qqib_22",cN="_textButton_4qqib_51",hN="_containerButton_4qqib_63",In={a:lN,button:uN,textButton:cN,containerButton:hN};function Cr({text:t="null",link:e="null",children:n,action:r,target:i="_blank",navigate:s=""}){return s===""?y.jsxs("div",{className:In.containerButton,children:[y.jsx("a",{className:In.a,href:e,target:i,children:y.jsx("button",{className:In.button,onClick:r,children:n})}),y.jsx("h1",{className:In.textButton,children:t})]}):y.jsxs("div",{className:In.containerButton,children:[y.jsx(rk,{className:In.a,to:s,children:y.jsx("button",{className:In.button,onClick:r,children:n})}),y.jsx("h1",{className:In.textButton,children:t})]})}var Ow={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},iy=Mn.createContext&&Mn.createContext(Ow),Gn=globalThis&&globalThis.__assign||function(){return Gn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Gn.apply(this,arguments)},dN=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function Lw(t){return t&&t.map(function(e,n){return Mn.createElement(e.tag,Gn({key:n},e.attr),Lw(e.child))})}function Ct(t){return function(e){return Mn.createElement(fN,Gn({attr:Gn({},t.attr)},e),Lw(t.child))}}function fN(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=dN(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Mn.createElement("svg",Gn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Gn(Gn({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Mn.createElement("title",null,s),t.children)};return iy!==void 0?Mn.createElement(iy.Consumer,null,function(n){return e(n)}):e(Ow)}function pN(t){return Ct({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 16C123.5 16 16 123.5 16 256c0 132.6 107.5 240 240 240 132.6 0 240-107.4 240-240S388.6 16 256 16zm0 60c99.4 0 180 80.6 180 180s-80.6 180-180 180S76 355.4 76 256 156.6 76 256 76zm91.3 64.2c-6.5 0-12.5 2.4-16.8 8.2-52 70.1-69 96.5-106 169.8-8.4-11.1-65.6-72.4-93.9-94.1-14.2-10.9-41.3 27.2-31.6 37.1C142.6 306.1 220.1 406 232.7 405c21.4-1.7 75.1-136.8 148.8-233.7 8-10.4-15-31.3-34.2-31.1z"}}]})(t)}function mN(t){return Ct({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.518 78.38c-6.55.117-12.45 1.736-17.35 4.91-7.465 4.84-11.765 12.904-13.063 21.34-2.595 16.874 4.747 36.355 19.862 52.31C154.08 172.893 177.643 185 208 185h2.438l-9.118-18.234c-22.194-1.554-38.46-10.777-49.287-22.205-11.885-12.545-16.543-28.064-15.138-37.19.702-4.564 2.402-7.25 5.062-8.974 2.66-1.724 7.113-2.875 14.756-1.326 13.078 2.65 34.233 13.948 62.205 39.284L220.27 135h23.408c-35.31-34.8-62.215-51.278-83.39-55.57-2.715-.55-5.363-.887-7.925-1.006-.96-.045-1.91-.06-2.845-.043zm212.964 0c-.935-.016-1.885 0-2.845.044-2.562.12-5.21.455-7.924 1.006-21.176 4.292-48.082 20.77-83.39 55.57h23.406l1.352 1.354c27.972-25.336 49.127-36.633 62.205-39.284 7.643-1.55 12.096-.398 14.756 1.326 2.66 1.725 4.36 4.41 5.062 8.973 1.405 9.126-3.253 24.645-15.138 37.19-10.827 11.43-27.093 20.652-49.287 22.206L301.562 185H304c30.357 0 53.92-12.106 69.033-28.06 15.115-15.955 22.457-35.436 19.862-52.31-1.298-8.436-5.598-16.5-13.063-21.34-4.9-3.174-10.8-4.793-17.35-4.91zM227.73 153l-8.78 8.777L229.564 183h52.875l10.61-21.223-8.777-8.777h-56.54zM73 201v46h142v-46H73zm160 0v270h46V201h-46zm64 0v46h142v-46H297zm-192 64v206h110V265H105zm192 0v206h110V265H297z"}}]})(t)}function gN(t){return Ct({tag:"svg",attr:{viewBox:"0 0 288 512"},child:[{tag:"path",attr:{d:"M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"}}]})(t)}function yN({enableTop:t=!0,enableMiddle:e=!0,enableDate:n=!0,enableBottom:r=!0}){const[i,s,o,a]=Pw("2024-06-14"),l="/confirm",u="https://drive.google.com/file/d/1mi5u9Q6fc5w_nuhlMWDqVDRjNHy87mhs/view?usp=sharing",c="https://goo.gl/maps/S2ykJjg2UxoPWTmd8",[h,d]=I.useState(),m=()=>{d(!0)},v=()=>{d(!1)},w=g=>g?y.jsxs("section",{className:ry.container,children:[y.jsx(et,{text:"Wendding",style:"wendding"}),y.jsx(et,{text:"Haylton & Camile",style:"name"}),y.jsx(et,{text:"Save The Date",style:"titulo"})]}):"",S=g=>g?y.jsxs(y.Fragment,{children:[y.jsxs(Sa,{numberPhoto:1,onMouseEnter:m,onMouseLeave:v,children:[y.jsx(et,{style:h?"text:hover":"text",text:i,isHoverSet:h}),y.jsx(et,{style:"nameBox",text:"Days",isHoverSet:h})]}),y.jsxs(Sa,{numberPhoto:2,children:[y.jsx(et,{style:"text",text:s}),y.jsx(et,{style:"nameBox",text:"Hours"})]}),y.jsxs(Sa,{numberPhoto:3,children:[y.jsx(et,{style:"text",text:o}),y.jsx(et,{style:"nameBox",text:"Minutes"})]}),y.jsxs(Sa,{numberPhoto:4,children:[y.jsx(et,{style:"text",text:a}),y.jsx(et,{style:"nameBox",text:"Seconds"})]})]}):"",p=g=>g?y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:{display:"flex",flexWrap:"wrap",width:"100%",padding:"40px"},children:[y.jsx(et,{text:"Assim, eles já não são dois, mas sim uma só carne. ",style:"textDate"}),y.jsx(et,{text:"Portanto, o que Deus uniu, ninguém separe. Mateus 19:6 ",style:"textDate"})]}),y.jsx(Cr,{link:c,text:"Local",style:"nameBox",children:y.jsx(gN,{style:{color:"white",fontSize:"50px"}})}),y.jsx(Cr,{link:l,text:"Confirmar Presença",style:"nameBox",target:"_self",children:y.jsx(pN,{style:{color:"white",fontSize:"50px"}})}),y.jsx(Cr,{link:u,text:"Sugestão de presente",style:"nameBox",children:y.jsx(mN,{style:{color:"white",fontSize:"50px"}})})]}):"",f=g=>g?y.jsx(y.Fragment,{children:y.jsx(et,{text:"14 | Junho | 17H",style:"date"})}):"";return y.jsx(y.Fragment,{children:y.jsxs("div",{className:ry.wrap,children:[w(t),S(e),f(n),p(r)]})})}const vN="_container_55e6b_1",wN={container:vN};function Tu({enableTop:t,enableMiddle:e,enableBottom:n,enableDate:r}){return y.jsx(y.Fragment,{children:y.jsx("div",{className:wN.container,children:y.jsx(yN,{enableTop:t,enableMiddle:e,enableBottom:n,enableDate:r})})})}function EN(){return y.jsxs("div",{className:"App",children:[y.jsx(Iu,{}),y.jsx(Tu,{enableTop:void 0,enableMiddle:void 0,enableBottom:void 0})]})}var $w={},Oi={};Object.defineProperty(Oi,"__esModule",{value:!0});Oi.cssValue=Oi.parseLengthAndUnit=void 0;var _N={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function Mw(t){if(typeof t=="number")return{value:t,unit:"px"};var e,n=(t.match(/^[0-9.]*/)||"").toString();n.includes(".")?e=parseFloat(n):e=parseInt(n,10);var r=(t.match(/[^0-9]*$/)||"").toString();return _N[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}Oi.parseLengthAndUnit=Mw;function SN(t){var e=Mw(t);return"".concat(e.value).concat(e.unit)}Oi.cssValue=SN;var Cu={};Object.defineProperty(Cu,"__esModule",{value:!0});Cu.createAnimation=void 0;var IN=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var s=i.sheet,o=`
    @keyframes `.concat(r,` {
      `).concat(e,`
    }
  `);return s&&s.insertRule(o,0),r};Cu.createAnimation=IN;var Ll=Xt&&Xt.__assign||function(){return Ll=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Ll.apply(this,arguments)},TN=Xt&&Xt.__createBinding||(Object.create?function(t,e,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}),CN=Xt&&Xt.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),kN=Xt&&Xt.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&TN(e,t,n);return CN(e,t),e},xN=Xt&&Xt.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};Object.defineProperty($w,"__esModule",{value:!0});var Vc=kN(I),Bc=Oi,bw=Cu,AN=(0,bw.createAnimation)("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}","right"),NN=(0,bw.createAnimation)("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}","left");function RN(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,i=r===void 0?"#000000":r,s=t.speedMultiplier,o=s===void 0?1:s,a=t.cssOverride,l=a===void 0?{}:a,u=t.size,c=u===void 0?60:u,h=xN(t,["loading","color","speedMultiplier","cssOverride","size"]),d=(0,Bc.parseLengthAndUnit)(c),m=d.value,v=d.unit,w=Ll({display:"inherit",width:(0,Bc.cssValue)(c),height:(0,Bc.cssValue)(c),position:"relative"},l),S=function(p){return{position:"absolute",top:"0",left:"0",width:"".concat(m).concat(v),height:"".concat(m).concat(v),border:"".concat(m/10).concat(v," solid ").concat(i),opacity:"0.4",borderRadius:"100%",animationFillMode:"forwards",perspective:"800px",animation:"".concat(p===1?AN:NN," ").concat(2/o,"s 0s infinite linear")}};return n?Vc.createElement("span",Ll({style:w},h),Vc.createElement("span",{style:S(1)}),Vc.createElement("span",{style:S(2)})):null}var DN=$w.default=RN;const PN="_containerButtons_1diw6_1",ON={containerButtons:PN};function LN(t){return Ct({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16 13v-2H7V8l-5 4 5 4v-3z"}},{tag:"path",attr:{d:"M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"}}]})(t)}function Fw(t){return Ct({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#78909C",d:"M40,41H8c-2.2,0-4-1.8-4-4l0-20.9c0-1.3,0.6-2.5,1.7-3.3L24,0l18.3,12.8c1.1,0.7,1.7,2,1.7,3.3V37 C44,39.2,42.2,41,40,41z"}},{tag:"rect",attr:{x:"12",y:"11",fill:"#fff",width:"24",height:"22"}},{tag:"path",attr:{fill:"#CFD8DC",d:"M40,41H8c-2.2,0-4-1.8-4-4l0-20l20,13l20-13v20C44,39.2,42.2,41,40,41z"}},{tag:"g",attr:{fill:"#4CAF50"},child:[{tag:"rect",attr:{x:"22",y:"14",width:"4",height:"12"}},{tag:"rect",attr:{x:"18",y:"18",width:"12",height:"4"}}]}]})(t)}function $N(){const{signOut:t}=I.useContext(Su);return y.jsxs("div",{className:"App",children:[y.jsxs("div",{children:[y.jsx(Iu,{}),y.jsx(Tu,{enableBottom:!1})]}),y.jsxs("div",{className:ON.containerButtons,children:[y.jsx(Cr,{action:()=>t(),text:"Logout",children:y.jsx(LN,{style:{color:"white",fontSize:"100px"}})}),y.jsx(Cr,{link:"guests",navigate:"/guests",text:"Guests",children:y.jsx(Fw,{style:{color:"white",fontSize:"100px"}})}),y.jsx(Cr,{})]})]})}const MN="_changeSize_171ld_1",bN={changeSize:MN,in:"_in_171ld_1"};function Li({type:t,onChange:e,placeholder:n}){return y.jsx("input",{className:bN.input,type:t,onChange:r=>{e(r.target.value)},placeholder:n})}const FN="_containerMid_3gaez_1",jN="_containerLogin_3gaez_9",UN="_change_3gaez_1",VN="_typing_3gaez_1",Ia={containerMid:FN,containerLogin:jN,change:UN,typing:VN};function BN(){const{user:t,signIn:e,err:n}=I.useContext(Su),r=Hf(),[i,s]=I.useState(),[o,a]=I.useState();I.useEffect(()=>{t&&r(window.history.back())},[t]);const l=(c,h)=>{e(c,h)},u=()=>{if(n)return y.jsx("p",{children:"Wrong email or password"})};return y.jsxs("div",{className:"App",children:[y.jsx(Iu,{}),y.jsxs("div",{className:Ia.containerMid,children:[y.jsx(Tu,{enableTop:!0,enableMiddle:!1,enableBottom:!1}),y.jsxs("div",{className:Ia.containerLogin,children:[y.jsx("span",{children:u()}),y.jsx(Li,{type:"text",onChange:s,placeholder:"Email"}),y.jsx(Li,{type:"password",onChange:a,placeholder:"Password"})]}),y.jsx("div",{className:Ia.buttons,children:y.jsx("button",{className:Ia.button,onClick:()=>{l(i,o)},children:"Login"})})]})]})}const zN="_container_fhds9_1",HN="_header_fhds9_15",WN="_title_fhds9_35",qN="_cards_fhds9_43",KN="_peoplesInviteds_fhds9_67",ps={container:zN,header:HN,title:WN,cards:qN,peoplesInviteds:KN},GN="_card_14g1d_1",QN="_title_14g1d_53",YN="_counter_14g1d_53",XN="_text_14g1d_77",Ta={card:GN,title:QN,counter:YN,text:XN};function Gr({title:t,text:e,children:n,color:r="",cursor:i="default",link:s}){return y.jsx(y.Fragment,{children:y.jsxs("a",{href:s,className:Ta.card,style:{backgroundColor:`${r}`,borderColor:`${r}`,cursor:`${i}`},children:[y.jsx("div",{className:Ta.icon,children:n}),y.jsx("p",{className:Ta.title,children:t}),y.jsx("p",{className:Ta.counter,children:e})]})})}function JN(t){return Ct({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"rect",attr:{x:"3",y:"10",width:"18",height:"4",rx:"2",fill:"currentColor"}}]})(t)}function sy(t){return Ct({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"circle",attr:{cx:"8",cy:"8",r:"8"}}]})(t)}function ZN(t){return Ct({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}}]})(t)}function eR(t){return Ct({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}}]})(t)}function tR(t){return Ct({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"}}]})(t)}const nR="_container_19thp_1",rR="_info_19thp_1",iR="_name_19thp_25",sR="_trash_19thp_25",oR="_icon_19thp_47",Qr={container:nR,info:rR,name:iR,trash:sR,icon:oR};function aR({name:t="null",lastName:e="null",status:n="black",age:r}){const i=s=>{switch(s){case"confirmed":return"green";case"unconfirmed":return"red";case"maybe":return"darkOrange"}};return y.jsxs("div",{className:Qr.container,children:[y.jsxs("div",{className:Qr.info,children:[y.jsx("span",{className:Qr,children:y.jsx(JN,{style:{color:i(n),fontSize:"35px"}})}),y.jsxs("span",{className:Qr.name,children:[t," ",e]})]}),y.jsx("div",{className:Qr.trash,children:y.jsx("span",{className:Qr.trash,children:y.jsx(tR,{style:{color:"black",fontSize:"15px"}})})})]})}function lR(t){return Ct({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M13 2v8h8c0-4.42-3.58-8-8-8zm6.32 13.89A7.948 7.948 0 0021 11H6.44l-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20zm9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20z"}}]})(t)}function uR(t){return Ct({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]})(t)}var cR="firebase",hR="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St(cR,hR,"app");const dR=(t,e)=>e.some(n=>t instanceof n);let oy,ay;function fR(){return oy||(oy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pR(){return ay||(ay=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jw=new WeakMap,pd=new WeakMap,Uw=new WeakMap,zc=new WeakMap,ip=new WeakMap;function mR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Qn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jw.set(n,t)}).catch(()=>{}),ip.set(e,t),e}function gR(t){if(pd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});pd.set(t,e)}let md={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Uw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yR(t){md=t(md)}function vR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hc(this),e,...n);return Uw.set(r,e.sort?e.sort():[e]),Qn(r)}:pR().includes(t)?function(...e){return t.apply(Hc(this),e),Qn(jw.get(this))}:function(...e){return Qn(t.apply(Hc(this),e))}}function wR(t){return typeof t=="function"?vR(t):(t instanceof IDBTransaction&&gR(t),dR(t,fR())?new Proxy(t,md):t)}function Qn(t){if(t instanceof IDBRequest)return mR(t);if(zc.has(t))return zc.get(t);const e=wR(t);return e!==t&&(zc.set(t,e),ip.set(e,t)),e}const Hc=t=>ip.get(t);function ER(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Qn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Qn(o.result),l.oldVersion,l.newVersion,Qn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const _R=["get","getKey","getAll","getAllKeys","count"],SR=["put","add","delete","clear"],Wc=new Map;function ly(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wc.get(e))return Wc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=SR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_R.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Wc.set(e,s),s}yR(t=>({...t,get:(e,n,r)=>ly(e,n)||t.get(e,n,r),has:(e,n)=>!!ly(e,n)||t.has(e,n)}));const Vw="@firebase/installations",sp="0.6.4";/**
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
 */const Bw=1e4,zw=`w:${sp}`,Hw="FIS_v2",IR="https://firebaseinstallations.googleapis.com/v1",TR=60*60*1e3,CR="installations",kR="Installations";/**
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
 */const xR={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},$r=new Br(CR,kR,xR);function Ww(t){return t instanceof Ft&&t.code.includes("request-failed")}/**
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
 */function qw({projectId:t}){return`${IR}/projects/${t}/installations`}function Kw(t){return{token:t.token,requestStatus:2,expiresIn:NR(t.expiresIn),creationTime:Date.now()}}async function Gw(t,e){const r=(await e.json()).error;return $r.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Qw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function AR(t,{refreshToken:e}){const n=Qw(t);return n.append("Authorization",RR(e)),n}async function Yw(t){const e=await t();return e.status>=500&&e.status<600?t():e}function NR(t){return Number(t.replace("s","000"))}function RR(t){return`${Hw} ${t}`}/**
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
 */async function DR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=qw(t),i=Qw(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Hw,appId:t.appId,sdkVersion:zw},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Yw(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Kw(u.authToken)}}else throw await Gw("Create Installation",l)}/**
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
 */function Xw(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function PR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const OR=/^[cdef][\w-]{21}$/,gd="";function LR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=$R(t);return OR.test(n)?n:gd}catch{return gd}}function $R(t){return PR(t).substr(0,22)}/**
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
 */function ku(t){return`${t.appName}!${t.appId}`}/**
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
 */const Jw=new Map;function Zw(t,e){const n=ku(t);eE(n,e),MR(n,e)}function eE(t,e){const n=Jw.get(t);if(n)for(const r of n)r(e)}function MR(t,e){const n=bR();n&&n.postMessage({key:t,fid:e}),FR()}let vr=null;function bR(){return!vr&&"BroadcastChannel"in self&&(vr=new BroadcastChannel("[Firebase] FID Change"),vr.onmessage=t=>{eE(t.data.key,t.data.fid)}),vr}function FR(){Jw.size===0&&vr&&(vr.close(),vr=null)}/**
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
 */const jR="firebase-installations-database",UR=1,Mr="firebase-installations-store";let qc=null;function op(){return qc||(qc=ER(jR,UR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Mr)}}})),qc}async function $l(t,e){const n=ku(t),i=(await op()).transaction(Mr,"readwrite"),s=i.objectStore(Mr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Zw(t,e.fid),e}async function tE(t){const e=ku(t),r=(await op()).transaction(Mr,"readwrite");await r.objectStore(Mr).delete(e),await r.done}async function xu(t,e){const n=ku(t),i=(await op()).transaction(Mr,"readwrite"),s=i.objectStore(Mr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Zw(t,a.fid),a}/**
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
 */async function ap(t){let e;const n=await xu(t.appConfig,r=>{const i=VR(r),s=BR(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===gd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function VR(t){const e=t||{fid:LR(),registrationStatus:0};return nE(e)}function BR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject($r.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=zR(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:HR(t)}:{installationEntry:e}}async function zR(t,e){try{const n=await DR(t,e);return $l(t.appConfig,n)}catch(n){throw Ww(n)&&n.customData.serverCode===409?await tE(t.appConfig):await $l(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function HR(t){let e=await uy(t.appConfig);for(;e.registrationStatus===1;)await Xw(100),e=await uy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ap(t);return r||n}return e}function uy(t){return xu(t,e=>{if(!e)throw $r.create("installation-not-found");return nE(e)})}function nE(t){return WR(t)?{fid:t.fid,registrationStatus:0}:t}function WR(t){return t.registrationStatus===1&&t.registrationTime+Bw<Date.now()}/**
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
 */async function qR({appConfig:t,heartbeatServiceProvider:e},n){const r=KR(t,n),i=AR(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:zw,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Yw(()=>fetch(r,a));if(l.ok){const u=await l.json();return Kw(u)}else throw await Gw("Generate Auth Token",l)}function KR(t,{fid:e}){return`${qw(t)}/${e}/authTokens:generate`}/**
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
 */async function lp(t,e=!1){let n;const r=await xu(t.appConfig,s=>{if(!rE(s))throw $r.create("not-registered");const o=s.authToken;if(!e&&YR(o))return s;if(o.requestStatus===1)return n=GR(t,e),s;{if(!navigator.onLine)throw $r.create("app-offline");const a=JR(s);return n=QR(t,a),a}});return n?await n:r.authToken}async function GR(t,e){let n=await cy(t.appConfig);for(;n.authToken.requestStatus===1;)await Xw(100),n=await cy(t.appConfig);const r=n.authToken;return r.requestStatus===0?lp(t,e):r}function cy(t){return xu(t,e=>{if(!rE(e))throw $r.create("not-registered");const n=e.authToken;return ZR(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function QR(t,e){try{const n=await qR(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await $l(t.appConfig,r),n}catch(n){if(Ww(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await tE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await $l(t.appConfig,r)}throw n}}function rE(t){return t!==void 0&&t.registrationStatus===2}function YR(t){return t.requestStatus===2&&!XR(t)}function XR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+TR}function JR(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function ZR(t){return t.requestStatus===1&&t.requestTime+Bw<Date.now()}/**
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
 */async function eD(t){const e=t,{installationEntry:n,registrationPromise:r}=await ap(e);return r?r.catch(console.error):lp(e).catch(console.error),n.fid}/**
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
 */async function tD(t,e=!1){const n=t;return await nD(n),(await lp(n,e)).token}async function nD(t){const{registrationPromise:e}=await ap(t);e&&await e}/**
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
 */function rD(t){if(!t||!t.options)throw Kc("App Configuration");if(!t.name)throw Kc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Kc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Kc(t){return $r.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="installations",iD="installations-internal",sD=t=>{const e=t.getProvider("app").getImmediate(),n=rD(e),r=zr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},oD=t=>{const e=t.getProvider("app").getImmediate(),n=zr(e,iE).getImmediate();return{getId:()=>eD(n),getToken:i=>tD(n,i)}};function aD(){Jt(new Lt(iE,sD,"PUBLIC")),Jt(new Lt(iD,oD,"PRIVATE"))}aD();St(Vw,sp);St(Vw,sp,"esm2017");/**
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
 */const Ml="analytics",lD="firebase_id",uD="origin",cD=60*1e3,hD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",up="https://www.googletagmanager.com/gtag/js";/**
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
 */const at=new yu("@firebase/analytics");/**
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
 */const dD={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dt=new Br("analytics","Analytics",dD);/**
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
 */function fD(t){if(!t.startsWith(up)){const e=dt.create("invalid-gtag-resource",{gtagURL:t});return at.warn(e.message),""}return t}function sE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function pD(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function mD(t,e){const n=pD("firebase-js-sdk-policy",{createScriptURL:fD}),r=document.createElement("script"),i=`${up}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function gD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function yD(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await sE(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){at.error(a)}t("config",i,s)}async function vD(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await sE(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){at.error(s)}}function wD(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await vD(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await yD(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){at.error(a)}}return i}function ED(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=wD(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function _D(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(up)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD=30,ID=1e3;class TD{constructor(e={},n=ID){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const oE=new TD;function CD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function kD(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:CD(r)},s=hD.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw dt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function xD(t,e=oE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw dt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw dt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new RD;return setTimeout(async()=>{a.abort()},n!==void 0?n:cD),aE({appId:r,apiKey:i,measurementId:s},o,a,e)}async function aE(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=oE){var s;const{appId:o,measurementId:a}=t;try{await AD(r,e)}catch(l){if(a)return at.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await kD(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!ND(u)){if(i.deleteThrottleMetadata(o),a)return at.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Dg(n,i.intervalMillis,SD):Dg(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),at.debug(`Calling attemptFetch again in ${c} millis`),aE(t,h,r,i)}}function AD(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(dt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ND(t){if(!(t instanceof Ft)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class RD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function DD(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PD(){if(K1())try{await G1()}catch(t){return at.warn(dt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return at.warn(dt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function OD(t,e,n,r,i,s,o){var a;const l=xD(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&at.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>at.error(m)),e.push(l);const u=PD().then(m=>{if(m)return r.getId()}),[c,h]=await Promise.all([l,u]);_D(s)||mD(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[uD]="firebase",d.update=!0,h!=null&&(d[lD]=h),i("config",c.measurementId,d),c.measurementId}/**
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
 */class LD{constructor(e){this.app=e}_delete(){return delete Fs[this.app.options.appId],Promise.resolve()}}let Fs={},hy=[];const dy={};let Gc="dataLayer",$D="gtag",fy,lE,py=!1;function MD(){const t=[];if(q1()&&t.push("This is a browser extension environment."),vk()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=dt.create("invalid-analytics-context",{errorInfo:e});at.warn(n.message)}}function bD(t,e,n){MD();const r=t.options.appId;if(!r)throw dt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)at.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dt.create("no-api-key");if(Fs[r]!=null)throw dt.create("already-exists",{id:r});if(!py){gD(Gc);const{wrappedGtag:s,gtagCore:o}=ED(Fs,hy,dy,Gc,$D);lE=s,fy=o,py=!0}return Fs[r]=OD(t,hy,dy,e,fy,Gc,n),new LD(t)}function FD(t=Gf()){t=me(t);const e=zr(t,Ml);return e.isInitialized()?e.getImmediate():jD(t)}function jD(t,e={}){const n=zr(t,Ml);if(n.isInitialized()){const i=n.getImmediate();if(lo(e,n.getOptions()))return i;throw dt.create("already-initialized")}return n.initialize({options:e})}function UD(t,e,n,r){t=me(t),DD(lE,Fs[t.app.options.appId],e,n,r).catch(i=>at.error(i))}const my="@firebase/analytics",gy="0.10.0";function VD(){Jt(new Lt(Ml,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return bD(r,i,n)},"PUBLIC")),Jt(new Lt("analytics-internal",t,"PRIVATE")),St(my,gy),St(my,gy,"esm2017");function t(e){try{const n=e.getProvider(Ml).getImmediate();return{logEvent:(r,i,s)=>UD(n,r,i,s)}}catch(n){throw dt.create("interop-component-reg-failed",{reason:n})}}}VD();const uE={apiKey:"AIzaSyBhTx_jyQ9XXDXbwN_8G3StDaWk8ixpOrU",authDomain:"mywendding.web.app",projectId:"mywendding",storageBucket:"mywendding.appspot.com",messagingSenderId:"297404197510",appId:"1:297404197510:web:51e391cdc5fcdca56a7f07",measurementId:"G-66KL1Q1VMH"},BD=Kf(uE);FD(BD);const cp=Kf(uE);var zD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,hp=hp||{},F=zD||self;function bl(){}function Au(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Fo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function HD(t){return Object.prototype.hasOwnProperty.call(t,Qc)&&t[Qc]||(t[Qc]=++WD)}var Qc="closure_uid_"+(1e9*Math.random()>>>0),WD=0;function qD(t,e,n){return t.call.apply(t.bind,arguments)}function KD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Be(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Be=qD:Be=KD,Be.apply(null,arguments)}function Ca(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ae(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function or(){this.s=this.s,this.o=this.o}var GD=0;or.prototype.s=!1;or.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),GD!=0)&&HD(this)};or.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const cE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function dp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function yy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Au(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var QD=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",bl,e),F.removeEventListener("test",bl,e)}catch{}return t}();function Fl(t){return/^[\s\xa0]*$/.test(t)}var vy=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Yc(t,e){return t<e?-1:t>e?1:0}function Nu(){var t=F.navigator;return t&&(t=t.userAgent)?t:""}function zt(t){return Nu().indexOf(t)!=-1}function fp(t){return fp[" "](t),t}fp[" "]=bl;function hE(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var YD=zt("Opera"),$i=zt("Trident")||zt("MSIE"),dE=zt("Edge"),yd=dE||$i,fE=zt("Gecko")&&!(Nu().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge"))&&!(zt("Trident")||zt("MSIE"))&&!zt("Edge"),XD=Nu().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge");function pE(){var t=F.document;return t?t.documentMode:void 0}var jl;e:{var Xc="",Jc=function(){var t=Nu();if(fE)return/rv:([^\);]+)(\)|;)/.exec(t);if(dE)return/Edge\/([\d\.]+)/.exec(t);if($i)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(XD)return/WebKit\/(\S+)/.exec(t);if(YD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Jc&&(Xc=Jc?Jc[1]:""),$i){var Zc=pE();if(Zc!=null&&Zc>parseFloat(Xc)){jl=String(Zc);break e}}jl=Xc}var JD={};function ZD(){return hE(JD,9,function(){let t=0;const e=vy(String(jl)).split("."),n=vy("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Yc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Yc(i[2].length==0,s[2].length==0)||Yc(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var vd;if(F.document&&$i){var wy=pE();vd=wy||parseInt(jl,10)||void 0}else vd=void 0;var eP=vd;function po(t,e){if(ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(fE){e:{try{fp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:tP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&po.$.h.call(this)}}Ae(po,ze);var tP={2:"touch",3:"pen",4:"mouse"};po.prototype.h=function(){po.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var jo="closure_listenable_"+(1e6*Math.random()|0),nP=0;function rP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++nP,this.fa=this.ia=!1}function Ru(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function pp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function mE(t){const e={};for(const n in t)e[n]=t[n];return e}const Ey="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Ey.length;s++)n=Ey[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Du(t){this.src=t,this.g={},this.h=0}Du.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ed(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new rP(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function wd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=cE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ru(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ed(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var mp="closure_lm_"+(1e6*Math.random()|0),eh={};function yE(t,e,n,r,i){if(r&&r.once)return wE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)yE(t,e[s],n,r,i);return null}return n=vp(n),t&&t[jo]?t.O(e,n,Fo(r)?!!r.capture:!!r,i):vE(t,e,n,!1,r,i)}function vE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Fo(i)?!!i.capture:!!i,a=yp(t);if(a||(t[mp]=a=new Du(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=iP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)QD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(_E(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function iP(){function t(n){return e.call(t.src,t.listener,n)}const e=sP;return t}function wE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)wE(t,e[s],n,r,i);return null}return n=vp(n),t&&t[jo]?t.P(e,n,Fo(r)?!!r.capture:!!r,i):vE(t,e,n,!0,r,i)}function EE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)EE(t,e[s],n,r,i);else r=Fo(r)?!!r.capture:!!r,n=vp(n),t&&t[jo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ed(s,n,r,i),-1<n&&(Ru(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=yp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ed(e,n,r,i)),(n=-1<t?e[t]:null)&&gp(n))}function gp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[jo])wd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_E(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yp(e))?(wd(n,t),n.h==0&&(n.src=null,e[mp]=null)):Ru(t)}}}function _E(t){return t in eh?eh[t]:eh[t]="on"+t}function sP(t,e){if(t.fa)t=!0;else{e=new po(e,this);var n=t.listener,r=t.la||t.src;t.ia&&gp(t),t=n.call(r,e)}return t}function yp(t){return t=t[mp],t instanceof Du?t:null}var th="__closure_events_fn_"+(1e9*Math.random()>>>0);function vp(t){return typeof t=="function"?t:(t[th]||(t[th]=function(e){return t.handleEvent(e)}),t[th])}function xe(){or.call(this),this.i=new Du(this),this.S=this,this.J=null}Ae(xe,or);xe.prototype[jo]=!0;xe.prototype.removeEventListener=function(t,e,n,r){EE(this,t,e,n,r)};function Oe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ze(e,t);else if(e instanceof ze)e.target=e.target||t;else{var i=e;e=new ze(r,t),gE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ka(o,r,!0,e)&&i}if(o=e.g=t,i=ka(o,r,!0,e)&&i,i=ka(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ka(o,r,!1,e)&&i}xe.prototype.N=function(){if(xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ru(n[r]);delete t.g[e],t.h--}}this.J=null};xe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};xe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ka(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&wd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var wp=F.JSON.stringify;function oP(){var t=TE;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class aP{constructor(){this.h=this.g=null}add(e,n){const r=SE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var SE=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new lP,t=>t.reset());class lP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function uP(t){F.setTimeout(()=>{throw t},0)}function IE(t,e){_d||cP(),Sd||(_d(),Sd=!0),TE.add(t,e)}var _d;function cP(){var t=F.Promise.resolve(void 0);_d=function(){t.then(hP)}}var Sd=!1,TE=new aP;function hP(){for(var t;t=oP();){try{t.h.call(t.g)}catch(n){uP(n)}var e=SE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Sd=!1}function Pu(t,e){xe.call(this),this.h=t||1,this.g=e||F,this.j=Be(this.qb,this),this.l=Date.now()}Ae(Pu,xe);x=Pu.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Oe(this,"tick"),this.ga&&(Ep(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ep(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){Pu.$.N.call(this),Ep(this),delete this.g};function _p(t,e,n){if(typeof t=="function")n&&(t=Be(t,n));else if(t&&typeof t.handleEvent=="function")t=Be(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function CE(t){t.g=_p(()=>{t.g=null,t.i&&(t.i=!1,CE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class dP extends or{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:CE(this)}N(){super.N(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mo(t){or.call(this),this.h=t,this.g={}}Ae(mo,or);var _y=[];function kE(t,e,n,r){Array.isArray(n)||(n&&(_y[0]=n.toString()),n=_y);for(var i=0;i<n.length;i++){var s=yE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function xE(t){pp(t.g,function(e,n){this.g.hasOwnProperty(n)&&gp(e)},t),t.g={}}mo.prototype.N=function(){mo.$.N.call(this),xE(this)};mo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ou(){this.g=!0}Ou.prototype.Ea=function(){this.g=!1};function fP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function pP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function di(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+gP(t,n)+(r?" "+r:"")})}function mP(t,e){t.info(function(){return"TIMEOUT: "+e})}Ou.prototype.info=function(){};function gP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return wp(n)}catch{return e}}var Hr={},Sy=null;function Lu(){return Sy=Sy||new xe}Hr.Ta="serverreachability";function AE(t){ze.call(this,Hr.Ta,t)}Ae(AE,ze);function go(t){const e=Lu();Oe(e,new AE(e))}Hr.STAT_EVENT="statevent";function NE(t,e){ze.call(this,Hr.STAT_EVENT,t),this.stat=e}Ae(NE,ze);function Qe(t){const e=Lu();Oe(e,new NE(e,t))}Hr.Ua="timingevent";function RE(t,e){ze.call(this,Hr.Ua,t),this.size=e}Ae(RE,ze);function Uo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var $u={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},DE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Sp(){}Sp.prototype.h=null;function Iy(t){return t.h||(t.h=t.i())}function PE(){}var Vo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ip(){ze.call(this,"d")}Ae(Ip,ze);function Tp(){ze.call(this,"c")}Ae(Tp,ze);var Id;function Mu(){}Ae(Mu,Sp);Mu.prototype.g=function(){return new XMLHttpRequest};Mu.prototype.i=function(){return{}};Id=new Mu;function Bo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new mo(this),this.P=yP,t=yd?125:void 0,this.V=new Pu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new OE}function OE(){this.i=null,this.g="",this.h=!1}var yP=45e3,Td={},Ul={};x=Bo.prototype;x.setTimeout=function(t){this.P=t};function Cd(t,e,n){t.L=1,t.v=Fu(mn(e)),t.s=n,t.S=!0,LE(t,null)}function LE(t,e){t.G=Date.now(),zo(t),t.A=mn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),BE(n.i,"t",r),t.C=0,n=t.l.I,t.h=new OE,t.g=u_(t.l,n?e:null,!t.s),0<t.O&&(t.M=new dP(Be(t.Pa,t,t.g),t.O)),kE(t.U,t.g,"readystatechange",t.nb),e=t.I?mE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),go(),fP(t.j,t.u,t.A,t.m,t.W,t.s)}x.nb=function(t){t=t.target;const e=this.M;e&&an(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const c=an(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||yd||this.g&&(this.h.h||this.g.ja()||xy(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?go(3):go(2)),bu(this);var n=this.g.da();this.aa=n;t:if($E(this)){var r=xy(this.g);t="";var i=r.length,s=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wr(this),js(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,pP(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fl(a)){var u=a;break t}}u=null}if(n=u)di(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kd(this,n);else{this.i=!1,this.o=3,Qe(12),wr(this),js(this);break e}}this.S?(ME(this,c,o),yd&&this.i&&c==3&&(kE(this.U,this.V,"tick",this.mb),this.V.start())):(di(this.j,this.m,o,null),kd(this,o)),c==4&&wr(this),this.i&&!this.J&&(c==4?s_(this.l,this):(this.i=!1,zo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Qe(12)):(this.o=0,Qe(13)),wr(this),js(this)}}}catch{}finally{}};function $E(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function ME(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=vP(t,n),i==Ul){e==4&&(t.o=4,Qe(14),r=!1),di(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Td){t.o=4,Qe(15),di(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else di(t.j,t.m,i,null),kd(t,i);$E(t)&&i!=Ul&&i!=Td&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Qe(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Dp(e),e.L=!0,Qe(11))):(di(t.j,t.m,n,"[Invalid Chunked Response]"),wr(t),js(t))}x.mb=function(){if(this.g){var t=an(this.g),e=this.g.ja();this.C<e.length&&(bu(this),ME(this,t,e),this.i&&t!=4&&zo(this))}};function vP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ul:(n=Number(e.substring(n,r)),isNaN(n)?Td:(r+=1,r+n>e.length?Ul:(e=e.substr(r,n),t.C=r+n,e)))}x.cancel=function(){this.J=!0,wr(this)};function zo(t){t.Y=Date.now()+t.P,bE(t,t.P)}function bE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Uo(Be(t.lb,t),e)}function bu(t){t.B&&(F.clearTimeout(t.B),t.B=null)}x.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(mP(this.j,this.A),this.L!=2&&(go(),Qe(17)),wr(this),this.o=2,js(this)):bE(this,this.Y-t)};function js(t){t.l.H==0||t.J||s_(t.l,t)}function wr(t){bu(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,Ep(t.V),xE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function kd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||xd(n.h,t))){if(!t.K&&xd(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)zl(n),Vu(n);else break e;Rp(n),Qe(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=Uo(Be(n.ib,n),6e3));if(1>=WE(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Er(n,11)}else if((t.K||n.g==t)&&zl(n),!Fl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const c=u[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const h=u[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.h;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Cp(s,s.h),s.h=null))}if(r.F){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,se(r.G,r.F,w))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=l_(r,r.I?r.oa:null,r.Y),o.K){qE(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(bu(a),zo(a)),r.g=o}else r_(r);0<n.i.length&&Bu(n)}else u[0]!="stop"&&u[0]!="close"||Er(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Er(n,7):Np(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}go(4)}catch{}}function wP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Au(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function EP(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Au(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function FE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Au(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=EP(t),r=wP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var jE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _P(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function kr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof kr){this.h=e!==void 0?e:t.h,Vl(this,t.j),this.s=t.s,this.g=t.g,Bl(this,t.m),this.l=t.l,e=t.i;var n=new yo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ty(this,n),this.o=t.o}else t&&(n=String(t).match(jE))?(this.h=!!e,Vl(this,n[1]||"",!0),this.s=Is(n[2]||""),this.g=Is(n[3]||"",!0),Bl(this,n[4]),this.l=Is(n[5]||"",!0),Ty(this,n[6]||"",!0),this.o=Is(n[7]||"")):(this.h=!!e,this.i=new yo(null,this.h))}kr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ts(e,Cy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ts(e,Cy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ts(n,n.charAt(0)=="/"?TP:IP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ts(n,kP)),t.join("")};function mn(t){return new kr(t)}function Vl(t,e,n){t.j=n?Is(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Bl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ty(t,e,n){e instanceof yo?(t.i=e,xP(t.i,t.h)):(n||(e=Ts(e,CP)),t.i=new yo(e,t.h))}function se(t,e,n){t.i.set(e,n)}function Fu(t){return se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Is(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ts(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,SP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function SP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Cy=/[#\/\?@]/g,IP=/[#\?:]/g,TP=/[#\?]/g,CP=/[#\?@]/g,kP=/#/g;function yo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ar(t){t.g||(t.g=new Map,t.h=0,t.i&&_P(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=yo.prototype;x.add=function(t,e){ar(this),this.i=null,t=Ji(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function UE(t,e){ar(t),e=Ji(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function VE(t,e){return ar(t),e=Ji(t,e),t.g.has(e)}x.forEach=function(t,e){ar(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};x.sa=function(){ar(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};x.Z=function(t){ar(this);let e=[];if(typeof t=="string")VE(this,t)&&(e=e.concat(this.g.get(Ji(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return ar(this),this.i=null,t=Ji(this,t),VE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function BE(t,e,n){UE(t,e),0<n.length&&(t.i=null,t.g.set(Ji(t,e),dp(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ji(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function xP(t,e){e&&!t.j&&(ar(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(UE(this,r),BE(this,i,n))},t)),t.j=e}var AP=class{constructor(t,e){this.h=t,this.g=e}};function zE(t){this.l=t||NP,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ka&&F.g.Ka()&&F.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var NP=10;function HE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function WE(t){return t.h?1:t.g?t.g.size:0}function xd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Cp(t,e){t.g?t.g.add(e):t.h=e}function qE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zE.prototype.cancel=function(){if(this.i=KE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function KE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return dp(t.i)}function kp(){}kp.prototype.stringify=function(t){return F.JSON.stringify(t,void 0)};kp.prototype.parse=function(t){return F.JSON.parse(t,void 0)};function RP(){this.g=new kp}function DP(t,e,n){const r=n||"";try{FE(t,function(i,s){let o=i;Fo(i)&&(o=wp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function PP(t,e){const n=new Ou;if(F.Image){const r=new Image;r.onload=Ca(xa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ca(xa,n,r,"TestLoadImage: error",!1,e),r.onabort=Ca(xa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ca(xa,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function xa(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ho(t){this.l=t.fc||null,this.j=t.ob||!1}Ae(Ho,Sp);Ho.prototype.g=function(){return new ju(this.l,this.j)};Ho.prototype.i=function(t){return function(){return t}}({});function ju(t,e){xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=xp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ae(ju,xe);var xp=0;x=ju.prototype;x.open=function(t,e){if(this.readyState!=xp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,vo(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||F).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wo(this)),this.readyState=xp};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vo(this)),this.g&&(this.readyState=3,vo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;GE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function GE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Wo(this):vo(this),this.readyState==3&&GE(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,Wo(this))};x.Ya=function(t){this.g&&(this.response=t,Wo(this))};x.ka=function(){this.g&&Wo(this)};function Wo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,vo(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function vo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ju.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var OP=F.JSON.parse;function he(t){xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=QE,this.L=this.M=!1}Ae(he,xe);var QE="",LP=/^https?$/i,$P=["POST","PUT"];x=he.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Id.g(),this.C=this.u?Iy(this.u):Iy(Id),this.g.onreadystatechange=Be(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){ky(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&t instanceof F.FormData,!(0<=cE($P,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{JE(this),0<this.B&&((this.L=MP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Be(this.ua,this)):this.A=_p(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){ky(this,s)}};function MP(t){return $i&&ZD()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof hp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))};function ky(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,YE(t),Uu(t)}function YE(t){t.F||(t.F=!0,Oe(t,"complete"),Oe(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Oe(this,"complete"),Oe(this,"abort"),Uu(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Uu(this,!0)),he.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?XE(this):this.kb())};x.kb=function(){XE(this)};function XE(t){if(t.h&&typeof hp<"u"&&(!t.C[1]||an(t)!=4||t.da()!=2)){if(t.v&&an(t)==4)_p(t.La,0,t);else if(Oe(t,"readystatechange"),an(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(jE)[1]||null;if(!i&&F.self&&F.self.location){var s=F.self.location.protocol;i=s.substr(0,s.length-1)}r=!LP.test(i?i.toLowerCase():"")}n=r}if(n)Oe(t,"complete"),Oe(t,"success");else{t.m=6;try{var o=2<an(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",YE(t)}}finally{Uu(t)}}}}function Uu(t,e){if(t.g){JE(t);const n=t.g,r=t.C[0]?bl:null;t.g=null,t.C=null,e||Oe(t,"ready");try{n.onreadystatechange=r}catch{}}}function JE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}function an(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),OP(e)}};function xy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case QE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ZE(t){let e="";return pp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ap(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ZE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):se(t,e,n))}function ms(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function e_(t){this.Ga=0,this.i=[],this.j=new Ou,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ms("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ms("baseRetryDelayMs",5e3,t),this.hb=ms("retryDelaySeedMs",1e4,t),this.eb=ms("forwardChannelMaxRetries",2,t),this.xa=ms("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new zE(t&&t.concurrentRequestLimit),this.Ja=new RP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}x=e_.prototype;x.qa=8;x.H=1;function Np(t){if(t_(t),t.H==3){var e=t.W++,n=mn(t.G);se(n,"SID",t.J),se(n,"RID",e),se(n,"TYPE","terminate"),qo(t,n),e=new Bo(t,t.j,e,void 0),e.L=2,e.v=Fu(mn(n)),n=!1,F.navigator&&F.navigator.sendBeacon&&(n=F.navigator.sendBeacon(e.v.toString(),"")),!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=u_(e.l,null),e.g.ha(e.v)),e.G=Date.now(),zo(e)}a_(t)}function Vu(t){t.g&&(Dp(t),t.g.cancel(),t.g=null)}function t_(t){Vu(t),t.u&&(F.clearTimeout(t.u),t.u=null),zl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function Bu(t){HE(t.h)||t.m||(t.m=!0,IE(t.Na,t),t.C=0)}function bP(t,e){return WE(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Uo(Be(t.Na,t,e),o_(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Bo(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=mE(s),gE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=n_(this,i,e),n=mn(this.G),se(n,"RID",t),se(n,"CVER",22),this.F&&se(n,"X-HTTP-Session-Id",this.F),qo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(ZE(s)))+"&"+e:this.o&&Ap(n,this.o,s)),Cp(this.h,i),this.bb&&se(n,"TYPE","init"),this.P?(se(n,"$req",e),se(n,"SID","null"),i.ba=!0,Cd(i,n,null)):Cd(i,n,e),this.H=2}}else this.H==3&&(t?Ay(this,t):this.i.length==0||HE(this.h)||Ay(this))};function Ay(t,e){var n;e?n=e.m:n=t.W++;const r=mn(t.G);se(r,"SID",t.J),se(r,"RID",n),se(r,"AID",t.V),qo(t,r),t.o&&t.s&&Ap(r,t.o,t.s),n=new Bo(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=n_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Cp(t.h,n),Cd(n,r,e)}function qo(t,e){t.ma&&pp(t.ma,function(n,r){se(e,r,n)}),t.l&&FE({},function(n,r){se(e,r,n)})}function n_(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Be(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{DP(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function r_(t){t.g||t.u||(t.ba=1,IE(t.Ma,t),t.A=0)}function Rp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Uo(Be(t.Ma,t),o_(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,i_(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Uo(Be(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Qe(10),Vu(this),i_(this))};function Dp(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function i_(t){t.g=new Bo(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=mn(t.wa);se(e,"RID","rpc"),se(e,"SID",t.J),se(e,"CI",t.M?"0":"1"),se(e,"AID",t.V),se(e,"TYPE","xmlhttp"),qo(t,e),t.o&&t.s&&Ap(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Fu(mn(e)),n.s=null,n.S=!0,LE(n,t)}x.ib=function(){this.v!=null&&(this.v=null,Vu(this),Rp(this),Qe(19))};function zl(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function s_(t,e){var n=null;if(t.g==e){zl(t),Dp(t),t.g=null;var r=2}else if(xd(t.h,e))n=e.F,qE(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Lu(),Oe(r,new RE(r,n)),Bu(t)}else r_(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&bP(t,e)||r==2&&Rp(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Er(t,5);break;case 4:Er(t,10);break;case 3:Er(t,6);break;default:Er(t,2)}}}function o_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Er(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Be(t.pb,t);n||(n=new kr("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||Vl(n,"https"),Fu(n)),PP(n.toString(),r)}else Qe(2);t.H=0,t.l&&t.l.za(e),a_(t),t_(t)}x.pb=function(t){t?(this.j.info("Successfully pinged google.com"),Qe(2)):(this.j.info("Failed to ping google.com"),Qe(1))};function a_(t){if(t.H=0,t.pa=[],t.l){const e=KE(t.h);(e.length!=0||t.i.length!=0)&&(yy(t.pa,e),yy(t.pa,t.i),t.h.i.length=0,dp(t.i),t.i.length=0),t.l.ya()}}function l_(t,e,n){var r=n instanceof kr?mn(n):new kr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Bl(r,r.m);else{var i=F.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new kr(null,void 0);r&&Vl(s,r),e&&(s.g=e),i&&Bl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&se(r,n,e),se(r,"VER",t.qa),qo(t,r),r}function u_(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new he(new Ho({ob:!0})):new he(t.va),e.Oa(t.I),e}function c_(){}x=c_.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.Va=function(){};function Hl(){if($i&&!(10<=Number(eP)))throw Error("Environmental error: no available transport.")}Hl.prototype.g=function(t,e){return new pt(t,e)};function pt(t,e){xe.call(this),this.g=new e_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Fl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Fl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Zi(this)}Ae(pt,xe);pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;Qe(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=l_(t,null,t.Y),Bu(t)};pt.prototype.close=function(){Np(this.g)};pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=wp(t),t=n);e.i.push(new AP(e.fb++,t)),e.H==3&&Bu(e)};pt.prototype.N=function(){this.g.l=null,delete this.j,Np(this.g),delete this.g,pt.$.N.call(this)};function h_(t){Ip.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ae(h_,Ip);function d_(){Tp.call(this),this.status=1}Ae(d_,Tp);function Zi(t){this.g=t}Ae(Zi,c_);Zi.prototype.Ba=function(){Oe(this.g,"a")};Zi.prototype.Aa=function(t){Oe(this.g,new h_(t))};Zi.prototype.za=function(t){Oe(this.g,new d_)};Zi.prototype.ya=function(){Oe(this.g,"b")};function FP(){this.blockSize=-1}function Mt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ae(Mt,FP);Mt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function nh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Mt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)nh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){nh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){nh(this,r),i=0;break}}this.h=i,this.i+=e};Mt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function X(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var jP={};function Pp(t){return-128<=t&&128>t?hE(jP,t,function(e){return new X([e|0],0>e?-1:0)}):new X([t|0],0>t?-1:0)}function Ht(t){if(isNaN(t)||!isFinite(t))return _i;if(0>t)return De(Ht(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Ad;return new X(e,0)}function f_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return De(f_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ht(Math.pow(e,8)),r=_i,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Ht(Math.pow(e,s)),r=r.R(s).add(Ht(o))):(r=r.R(n),r=r.add(Ht(o)))}return r}var Ad=4294967296,_i=Pp(0),Nd=Pp(1),Ny=Pp(16777216);x=X.prototype;x.ea=function(){if(wt(this))return-De(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Ad+r)*e,e*=Ad}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ln(this))return"0";if(wt(this))return"-"+De(this).toString(t);for(var e=Ht(Math.pow(t,6)),n=this,r="";;){var i=ql(n,e).g;n=Wl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,ln(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ln(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function wt(t){return t.h==-1}x.X=function(t){return t=Wl(this,t),wt(t)?-1:ln(t)?0:1};function De(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new X(n,~t.h).add(Nd)}x.abs=function(){return wt(this)?De(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new X(n,n[n.length-1]&-2147483648?-1:0)};function Wl(t,e){return t.add(De(e))}x.R=function(t){if(ln(this)||ln(t))return _i;if(wt(this))return wt(t)?De(this).R(De(t)):De(De(this).R(t));if(wt(t))return De(this.R(De(t)));if(0>this.X(Ny)&&0>t.X(Ny))return Ht(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Aa(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Aa(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Aa(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Aa(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new X(n,0)};function Aa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function gs(t,e){this.g=t,this.h=e}function ql(t,e){if(ln(e))throw Error("division by zero");if(ln(t))return new gs(_i,_i);if(wt(t))return e=ql(De(t),e),new gs(De(e.g),De(e.h));if(wt(e))return e=ql(t,De(e)),new gs(De(e.g),e.h);if(30<t.g.length){if(wt(t)||wt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Nd,r=e;0>=r.X(t);)n=Ry(n),r=Ry(r);var i=Yr(n,1),s=Yr(r,1);for(r=Yr(r,2),n=Yr(n,2);!ln(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Yr(r,1),n=Yr(n,1)}return e=Wl(t,i.R(e)),new gs(i,e)}for(i=_i;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ht(n),o=s.R(e);wt(o)||0<o.X(t);)n-=r,s=Ht(n),o=s.R(e);ln(s)&&(s=Nd),i=i.add(s),t=Wl(t,o)}return new gs(i,t)}x.gb=function(t){return ql(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new X(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new X(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new X(n,this.h^t.h)};function Ry(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new X(n,t.h)}function Yr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new X(i,t.h)}Hl.prototype.createWebChannel=Hl.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;$u.NO_ERROR=0;$u.TIMEOUT=8;$u.HTTP_ERROR=6;DE.COMPLETE="complete";PE.EventType=Vo;Vo.OPEN="a";Vo.CLOSE="b";Vo.ERROR="c";Vo.MESSAGE="d";xe.prototype.listen=xe.prototype.O;he.prototype.listenOnce=he.prototype.P;he.prototype.getLastError=he.prototype.Sa;he.prototype.getLastErrorCode=he.prototype.Ia;he.prototype.getStatus=he.prototype.da;he.prototype.getResponseJson=he.prototype.Wa;he.prototype.getResponseText=he.prototype.ja;he.prototype.send=he.prototype.ha;he.prototype.setWithCredentials=he.prototype.Oa;Mt.prototype.digest=Mt.prototype.l;Mt.prototype.reset=Mt.prototype.reset;Mt.prototype.update=Mt.prototype.j;X.prototype.add=X.prototype.add;X.prototype.multiply=X.prototype.R;X.prototype.modulo=X.prototype.gb;X.prototype.compare=X.prototype.X;X.prototype.toNumber=X.prototype.ea;X.prototype.toString=X.prototype.toString;X.prototype.getBits=X.prototype.D;X.fromNumber=Ht;X.fromString=f_;var UP=function(){return new Hl},VP=function(){return Lu()},rh=$u,BP=DE,zP=Hr,Dy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},HP=Ho,Na=PE,WP=he,qP=Mt,Si=X;const Py="@firebase/firestore";/**
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
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
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
 */let es="9.22.0";/**
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
 */const br=new yu("@firebase/firestore");function Oy(){return br.logLevel}function O(t,...e){if(br.logLevel<=G.DEBUG){const n=e.map(Op);br.debug(`Firestore (${es}): ${t}`,...n)}}function gn(t,...e){if(br.logLevel<=G.ERROR){const n=e.map(Op);br.error(`Firestore (${es}): ${t}`,...n)}}function Mi(t,...e){if(br.logLevel<=G.WARN){const n=e.map(Op);br.warn(`Firestore (${es}): ${t}`,...n)}}function Op(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
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
 */function b(t="Unexpected state"){const e=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: `+t;throw gn(e),new Error(e)}function re(t,e){t||b()}function U(t,e){return t}/**
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
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Ft{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class p_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Fe.UNAUTHENTICATED))}shutdown(){}}class GP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QP{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new xr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new xr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new xr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new p_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new Fe(e)}}class YP{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class XP{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new YP(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZP{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.T=n.token,new JP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class m_{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=e4(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function bi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Se{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Se(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new Se(0,0))}static max(){return new j(new Se(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class wo{constructor(e,n,r){n===void 0?n=0:n>e.length&&b(),r===void 0?r=e.length-n:r>e.length-n&&b(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class te extends wo{construct(e,n,r){return new te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new te(n)}static emptyPath(){return new te([])}}const t4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends wo{construct(e,n,r){return new Ve(e,n,r)}static isValidIdentifier(e){return t4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(te.fromString(e))}static fromName(e){return new $(te.fromString(e).popFirst(5))}static empty(){return new $(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new te(e.slice()))}}function n4(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new Se(n+1,0):new Se(n,r));return new er(i,$.empty(),e)}function r4(t){return new er(t.readTime,t.key,-1)}class er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new er(j.min(),$.empty(),-1)}static max(){return new er(j.max(),$.empty(),-1)}}function i4(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class o4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ko(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==s4)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(i=>i?C.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new C((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new C((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Go(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Lp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Lp.ct=-1;function zu(t){return t==null}function Kl(t){return t===0&&1/t==-1/0}function a4(t){return typeof t=="number"&&Number.isInteger(t)&&!Kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ly(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function g_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ue{constructor(e,n){this.comparator=e,this.root=n||Re.EMPTY}insert(e,n){return new ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Re.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Re.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ra(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ra(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ra(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ra(this.root,e,this.comparator,!0)}}class Ra{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Re{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Re.RED,this.left=i??Re.EMPTY,this.right=s??Re.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Re(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Re.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Re.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}Re.EMPTY=null,Re.RED=!0,Re.BLACK=!1;Re.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Re(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $y(this.data.getIterator())}getIteratorFrom(e){return new $y(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class $y{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new ct([])}unionWith(e){let n=new He(Ve.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class y_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new y_("Invalid base64 string: "+i):i}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const l4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tr(t){if(re(!!t),typeof t=="string"){let e=0;const n=l4.exec(t);if(re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(t.seconds),nanos:ye(t.nanos)}}function ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Mp(t){const e=t.mapValue.fields.__previous_value__;return $p(e)?Mp(e):e}function Eo(t){const e=tr(t.mapValue.fields.__local_write_time__.timestampValue);return new Se(e.seconds,e.nanos)}/**
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
 */class u4{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class _o{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _o("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _o&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$p(t)?4:c4(t)?9007199254740991:10:b()}function Zt(t,e){if(t===e)return!0;const n=jr(t);if(n!==jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Eo(t).isEqual(Eo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=tr(r.timestampValue),o=tr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Fr(r.bytesValue).isEqual(Fr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ye(r.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(r.geoPointValue.longitude)===ye(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ye(r.integerValue)===ye(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ye(r.doubleValue),o=ye(i.doubleValue);return s===o?Kl(s)===Kl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return bi(t.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Ly(s)!==Ly(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Zt(s[a],o[a])))return!1;return!0}(t,e);default:return b()}}function So(t,e){return(t.values||[]).find(n=>Zt(n,e))!==void 0}function Fi(t,e){if(t===e)return 0;const n=jr(t),r=jr(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ye(i.integerValue||i.doubleValue),a=ye(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return My(t.timestampValue,e.timestampValue);case 4:return My(Eo(t),Eo(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Fr(i),a=Fr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Q(o[l],a[l]);if(u!==0)return u}return Q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Q(ye(i.latitude),ye(s.latitude));return o!==0?o:Q(ye(i.longitude),ye(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Fi(o[l],a[l]);if(u)return u}return Q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Da.mapValue&&s===Da.mapValue)return 0;if(i===Da.mapValue)return 1;if(s===Da.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Q(a[c],u[c]);if(h!==0)return h;const d=Fi(o[a[c]],l[u[c]]);if(d!==0)return d}return Q(a.length,u.length)}(t.mapValue,e.mapValue);default:throw b()}}function My(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=tr(t),r=tr(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function ji(t){return Rd(t)}function Rd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=tr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Fr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Rd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Rd(r.fields[a])}`;return s+"}"}(t.mapValue):b();var e,n}function by(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Dd(t){return!!t&&"integerValue"in t}function bp(t){return!!t&&"arrayValue"in t}function Fy(t){return!!t&&"nullValue"in t}function jy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ya(t){return!!t&&"mapValue"in t}function Us(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Us(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Us(t.arrayValue.values[n]);return e}return Object.assign({},t)}function c4(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class nt{constructor(e){this.value=e}static empty(){return new nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ya(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Us(n)}setAll(e){let n=Ve.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Us(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ya(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ya(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Wr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new nt(Us(this.value))}}function v_(t){const e=[];return Wr(t.fields,(n,r)=>{const i=new Ve([n]);if(Ya(r)){const s=v_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ct(e)}/**
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
 */class Ue{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ue(e,0,j.min(),j.min(),j.min(),nt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ue(e,1,n,j.min(),r,i,0)}static newNoDocument(e,n){return new Ue(e,2,n,j.min(),j.min(),nt.empty(),0)}static newUnknownDocument(e,n){return new Ue(e,3,n,j.min(),j.min(),nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gl{constructor(e,n){this.position=e,this.inclusive=n}}function Uy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=Fi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Vs{constructor(e,n="asc"){this.field=e,this.dir=n}}function h4(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class w_{}class we extends w_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new f4(e,n,r):n==="array-contains"?new g4(e,r):n==="in"?new y4(e,r):n==="not-in"?new v4(e,r):n==="array-contains-any"?new w4(e,r):new we(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new p4(e,r):new m4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Fi(n,this.value)):n!==null&&jr(this.value)===jr(n)&&this.matchesComparison(Fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class bt extends w_{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new bt(e,n)}matches(e){return E_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function E_(t){return t.op==="and"}function __(t){return d4(t)&&E_(t)}function d4(t){for(const e of t.filters)if(e instanceof bt)return!1;return!0}function Pd(t){if(t instanceof we)return t.field.canonicalString()+t.op.toString()+ji(t.value);if(__(t))return t.filters.map(e=>Pd(e)).join(",");{const e=t.filters.map(n=>Pd(n)).join(",");return`${t.op}(${e})`}}function S_(t,e){return t instanceof we?function(n,r){return r instanceof we&&n.op===r.op&&n.field.isEqual(r.field)&&Zt(n.value,r.value)}(t,e):t instanceof bt?function(n,r){return r instanceof bt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&S_(s,r.filters[o]),!0):!1}(t,e):void b()}function I_(t){return t instanceof we?function(e){return`${e.field.canonicalString()} ${e.op} ${ji(e.value)}`}(t):t instanceof bt?function(e){return e.op.toString()+" {"+e.getFilters().map(I_).join(" ,")+"}"}(t):"Filter"}class f4 extends we{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class p4 extends we{constructor(e,n){super(e,"in",n),this.keys=T_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class m4 extends we{constructor(e,n){super(e,"not-in",n),this.keys=T_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function T_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class g4 extends we{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bp(n)&&So(n.arrayValue,this.value)}}class y4 extends we{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&So(this.value.arrayValue,n)}}class v4 extends we{constructor(e,n){super(e,"not-in",n)}matches(e){if(So(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!So(this.value.arrayValue,n)}}class w4 extends we{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>So(this.value.arrayValue,r))}}/**
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
 */class E4{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function By(t,e=null,n=[],r=[],i=null,s=null,o=null){return new E4(t,e,n,r,i,s,o)}function Fp(t){const e=U(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),zu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ji(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ji(r)).join(",")),e.dt=n}return e.dt}function jp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!h4(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!S_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vy(t.startAt,e.startAt)&&Vy(t.endAt,e.endAt)}function Od(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Qo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function _4(t,e,n,r,i,s,o,a){return new Qo(t,e,n,r,i,s,o,a)}function Up(t){return new Qo(t)}function zy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function C_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Vp(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function k_(t){return t.collectionGroup!==null}function Ii(t){const e=U(t);if(e.wt===null){e.wt=[];const n=Vp(e),r=C_(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Vs(n)),e.wt.push(new Vs(Ve.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Vs(Ve.keyField(),s))}}}return e.wt}function yn(t){const e=U(t);if(!e._t)if(e.limitType==="F")e._t=By(e.path,e.collectionGroup,Ii(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ii(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Vs(s.field,o))}const r=e.endAt?new Gl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Gl(e.startAt.position,e.startAt.inclusive):null;e._t=By(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Ld(t,e){e.getFirstInequalityField(),Vp(t);const n=t.filters.concat([e]);return new Qo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $d(t,e,n){return new Qo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hu(t,e){return jp(yn(t),yn(e))&&t.limitType===e.limitType}function x_(t){return`${Fp(yn(t))}|lt:${t.limitType}`}function Md(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>I_(r)).join(", ")}]`),zu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ji(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ji(r)).join(",")),`Target(${n})`}(yn(t))}; limitType=${t.limitType})`}function Wu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):$.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Ii(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Uy(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ii(n),r)||n.endAt&&!function(i,s,o){const a=Uy(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ii(n),r))}(t,e)}function S4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function A_(t){return(e,n)=>{let r=!1;for(const i of Ii(t)){const s=I4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function I4(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Fi(a,l):b()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
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
 */class ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return g_(this.inner)}size(){return this.innerSize}}/**
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
 */const T4=new ue($.comparator);function vn(){return T4}const N_=new ue($.comparator);function Cs(...t){let e=N_;for(const n of t)e=e.insert(n.key,n);return e}function R_(t){let e=N_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _r(){return Bs()}function D_(){return Bs()}function Bs(){return new ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const C4=new ue($.comparator),k4=new He($.comparator);function H(...t){let e=k4;for(const n of t)e=e.add(n);return e}const x4=new He(Q);function A4(){return x4}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kl(e)?"-0":e}}function O_(t){return{integerValue:""+t}}function N4(t,e){return a4(e)?O_(e):P_(t,e)}/**
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
 */class qu{constructor(){this._=void 0}}function R4(t,e,n){return t instanceof Ql?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&$p(i)&&(i=Mp(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Io?$_(t,e):t instanceof To?M_(t,e):function(r,i){const s=L_(r,i),o=Hy(s)+Hy(r.gt);return Dd(s)&&Dd(r.gt)?O_(o):P_(r.serializer,o)}(t,e)}function D4(t,e,n){return t instanceof Io?$_(t,e):t instanceof To?M_(t,e):n}function L_(t,e){return t instanceof Yl?Dd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ql extends qu{}class Io extends qu{constructor(e){super(),this.elements=e}}function $_(t,e){const n=b_(e);for(const r of t.elements)n.some(i=>Zt(i,r))||n.push(r);return{arrayValue:{values:n}}}class To extends qu{constructor(e){super(),this.elements=e}}function M_(t,e){let n=b_(e);for(const r of t.elements)n=n.filter(i=>!Zt(i,r));return{arrayValue:{values:n}}}class Yl extends qu{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Hy(t){return ye(t.integerValue||t.doubleValue)}function b_(t){return bp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function P4(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Io&&r instanceof Io||n instanceof To&&r instanceof To?bi(n.elements,r.elements,Zt):n instanceof Yl&&r instanceof Yl?Zt(n.gt,r.gt):n instanceof Ql&&r instanceof Ql}(t.transform,e.transform)}class O4{constructor(e,n){this.version=e,this.transformResults=n}}class Qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qt}static exists(e){return new Qt(void 0,e)}static updateTime(e){return new Qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ku{}function F_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new U_(t.key,Qt.none()):new Yo(t.key,t.data,Qt.none());{const n=t.data,r=nt.empty();let i=new He(Ve.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new lr(t.key,r,new ct(i.toArray()),Qt.none())}}function L4(t,e,n){t instanceof Yo?function(r,i,s){const o=r.value.clone(),a=qy(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof lr?function(r,i,s){if(!Xa(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=qy(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(j_(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function zs(t,e,n,r){return t instanceof Yo?function(i,s,o,a){if(!Xa(i.precondition,s))return o;const l=i.value.clone(),u=Ky(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof lr?function(i,s,o,a){if(!Xa(i.precondition,s))return o;const l=Ky(i.fieldTransforms,a,s),u=s.data;return u.setAll(j_(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Xa(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function $4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=L_(r.transform,i||null);s!=null&&(n===null&&(n=nt.empty()),n.set(r.field,s))}return n||null}function Wy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&bi(n,r,(i,s)=>P4(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yo extends Ku{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class lr extends Ku{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function j_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function qy(t,e,n){const r=new Map;re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,D4(o,a,n[i]))}return r}function Ky(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,R4(s,o,e))}return r}class U_ extends Ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class M4 extends Ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class b4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&L4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=zs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=zs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=D_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=F_(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&bi(this.mutations,e.mutations,(n,r)=>Wy(n,r))&&bi(this.baseMutations,e.baseMutations,(n,r)=>Wy(n,r))}}class Bp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){re(e.mutations.length===r.length);let i=C4;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Bp(e,n,r,i)}}/**
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
 */class F4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class j4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ge,q;function U4(t){switch(t){default:return b();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function V_(t){if(t===void 0)return gn("GRPC error has no .code"),_.UNKNOWN;switch(t){case ge.OK:return _.OK;case ge.CANCELLED:return _.CANCELLED;case ge.UNKNOWN:return _.UNKNOWN;case ge.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case ge.INTERNAL:return _.INTERNAL;case ge.UNAVAILABLE:return _.UNAVAILABLE;case ge.UNAUTHENTICATED:return _.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case ge.NOT_FOUND:return _.NOT_FOUND;case ge.ALREADY_EXISTS:return _.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return _.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case ge.ABORTED:return _.ABORTED;case ge.OUT_OF_RANGE:return _.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return _.UNIMPLEMENTED;case ge.DATA_LOSS:return _.DATA_LOSS;default:return b()}}(q=ge||(ge={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class zp{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Pa}static getOrCreateInstance(){return Pa===null&&(Pa=new zp),Pa}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Pa=null;/**
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
 */function V4(){return new TextEncoder}/**
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
 */const B4=new Si([4294967295,4294967295],0);function Gy(t){const e=V4().encode(t),n=new qP;return n.update(e),new Uint8Array(n.digest())}function Qy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Si([n,r],0),new Si([i,s],0)]}class Hp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ks(`Invalid padding: ${n}`);if(r<0)throw new ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ks(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ks(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Si.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Si.fromNumber(r)));return i.compare(B4)===1&&(i=new Si([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Gy(e),[r,i]=Qy(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Hp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Gy(e),[r,i]=Qy(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Xo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Gu(j.min(),i,new ue(Q),vn(),H())}}class Xo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xo(r,n,H(),H(),H())}}/**
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
 */class Ja{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class B_{constructor(e,n){this.targetId=e,this.Vt=n}}class z_{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Yy{constructor(){this.St=0,this.Dt=Jy(),this.Ct=Ke.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=H(),n=H(),r=H();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:b()}}),new Xo(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=Jy()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class z4{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=vn(),this.zt=Xy(),this.Wt=new ue(Q)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Od(o))if(i===0){const a=new $(o.path);this.Yt(r,a,Ue.newNoDocument(a,j.min()))}else re(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=zp.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,m,v,w,S,p;const f={localCacheCount:c,existenceFilterCount:h.count},g=h.unchangedNames;return g&&(f.bloomFilter={applied:u===0,hashCount:(d=g==null?void 0:g.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(w=(v=(m=g==null?void 0:g.bits)===null||m===void 0?void 0:m.bitmap)===null||v===void 0?void 0:v.length)!==null&&w!==void 0?w:0,padding:(p=(S=g==null?void 0:g.bits)===null||S===void 0?void 0:S.padding)!==null&&p!==void 0?p:0}),f}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Fr(s).toUint8Array()}catch(c){if(c instanceof y_)return Mi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Hp(l,o,a)}catch(c){return Mi(c instanceof ks?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Od(a.target)){const l=new $(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Ue.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=H();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new Gu(e,n,this.Wt,this.jt,r);return this.jt=vn(),this.zt=Xy(),this.Wt=new ue(Q),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Yy,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new He(Q),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Yy),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Xy(){return new ue($.comparator)}function Jy(){return new ue($.comparator)}const H4=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),W4=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),q4=(()=>({and:"AND",or:"OR"}))();class K4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bd(t,e){return t.useProto3Json||zu(e)?e:{value:e}}function Xl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function H_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function G4(t,e){return Xl(t,e.toTimestamp())}function Yt(t){return re(!!t),j.fromTimestamp(function(e){const n=tr(e);return new Se(n.seconds,n.nanos)}(t))}function Wp(t,e){return function(n){return new te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function W_(t){const e=te.fromString(t);return re(Q_(e)),e}function Fd(t,e){return Wp(t.databaseId,e.path)}function ih(t,e){const n=W_(e);if(n.get(1)!==t.databaseId.projectId)throw new D(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(q_(n))}function jd(t,e){return Wp(t.databaseId,e)}function Q4(t){const e=W_(t);return e.length===4?te.emptyPath():q_(e)}function Ud(t){return new te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function q_(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Zy(t,e,n){return{name:Fd(t,e),fields:n.value.mapValue.fields}}function Y4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(re(u===void 0||typeof u=="string"),Ke.fromBase64String(u||"")):(re(u===void 0||u instanceof Uint8Array),Ke.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:V_(l.code);return new D(u,l.message||"")}(o);n=new z_(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ih(t,r.document.name),s=Yt(r.document.updateTime),o=r.document.createTime?Yt(r.document.createTime):j.min(),a=new nt({mapValue:{fields:r.document.fields}}),l=Ue.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Ja(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ih(t,r.document),s=r.readTime?Yt(r.readTime):j.min(),o=Ue.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ja([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ih(t,r.document),s=r.removedTargetIds||[];n=new Ja([],s,i,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new j4(i,s),a=r.targetId;n=new B_(a,o)}}return n}function X4(t,e){let n;if(e instanceof Yo)n={update:Zy(t,e.key,e.value)};else if(e instanceof U_)n={delete:Fd(t,e.key)};else if(e instanceof lr)n={update:Zy(t,e.key,e.data),updateMask:oO(e.fieldMask)};else{if(!(e instanceof M4))return b();n={verify:Fd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ql)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Io)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof To)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Yl)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw b()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:G4(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(t,e.precondition)),n}function J4(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Yt(r.updateTime):Yt(i);return s.isEqual(j.min())&&(s=Yt(i)),new O4(s,r.transformResults||[])}(n,e))):[]}function Z4(t,e){return{documents:[jd(t,e.path)]}}function eO(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=jd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=jd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return G_(bt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Xr(c.field),direction:rO(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=bd(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function tO(t){let e=Q4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){re(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=K_(c);return h instanceof bt&&__(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Vs(Jr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,zu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Gl(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Gl(d,h)}(n.endAt)),_4(e,i,o,s,a,"F",l,u)}function nO(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return b()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function K_(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Jr(e.unaryFilter.field);return we.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Jr(e.unaryFilter.field);return we.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jr(e.unaryFilter.field);return we.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Jr(e.unaryFilter.field);return we.create(s,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(t):t.fieldFilter!==void 0?function(e){return we.create(Jr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return bt.create(e.compositeFilter.filters.map(n=>K_(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return b()}}(e.compositeFilter.op))}(t):b()}function rO(t){return H4[t]}function iO(t){return W4[t]}function sO(t){return q4[t]}function Xr(t){return{fieldPath:t.canonicalString()}}function Jr(t){return Ve.fromServerFormat(t.fieldPath)}function G_(t){return t instanceof we?function(e){if(e.op==="=="){if(jy(e.value))return{unaryFilter:{field:Xr(e.field),op:"IS_NAN"}};if(Fy(e.value))return{unaryFilter:{field:Xr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(jy(e.value))return{unaryFilter:{field:Xr(e.field),op:"IS_NOT_NAN"}};if(Fy(e.value))return{unaryFilter:{field:Xr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xr(e.field),op:iO(e.op),value:e.value}}}(t):t instanceof bt?function(e){const n=e.getFilters().map(r=>G_(r));return n.length===1?n[0]:{compositeFilter:{op:sO(e.op),filters:n}}}(t):b()}function oO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Q_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $n{constructor(e,n,r,i,s=j.min(),o=j.min(),a=Ke.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class aO{constructor(e){this.fe=e}}function lO(t){const e=tO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$d(e,e.limit,"L"):e}/**
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
 */class uO{constructor(){this.rn=new cO}addToCollectionParentIndex(e,n){return this.rn.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(er.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(er.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class cO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new He(te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new He(te.comparator)).toArray()}}/**
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
 */class Ui{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Ui(0)}static Mn(){return new Ui(-1)}}/**
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
 */class hO{constructor(){this.changes=new ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ue.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class dO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class fO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&zs(r.mutation,i,ct.empty(),Se.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,n,r=H()){const i=_r();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Cs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,H()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=vn();const o=Bs(),a=Bs();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof lr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),zs(c.mutation,u,c.mutation.getFieldMask(),Se.now())):o.set(u.key,ct.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new dO(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Bs();let i=new ue((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||ct.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=D_();c.forEach(d=>{if(!s.has(d)){const m=F_(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return $.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):k_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):C.resolve(_r());let a=-1,l=s;return o.next(u=>C.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?C.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,H())).next(c=>({batchId:a,changes:R_(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let i=Cs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Cs();return this.indexManager.getCollectionParents(e,i).next(o=>C.forEach(o,a=>{const l=function(u,c){return new Qo(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ue.newInvalidDocument(u)))});let o=Cs();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&zs(u.mutation,l,ct.empty(),Se.now()),Wu(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return C.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:Yt(r.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:lO(r.bundledQuery),readTime:Yt(r.readTime)}}(n)),C.resolve()}}/**
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
 */class mO{constructor(){this.overlays=new ue($.comparator),this.ls=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_r();return C.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const i=_r(),s=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ue((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=_r(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=_r(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return C.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new F4(n,r));let s=this.ls.get(n);s===void 0&&(s=H(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
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
 */class qp{constructor(){this.fs=new He(Te.ds),this.ws=new He(Te._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Te(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Te(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new $(new te([])),r=new Te(n,e),i=new Te(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new $(new te([])),r=new Te(n,e),i=new Te(n,e+1);let s=H();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Te(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Te{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return $.comparator(e.key,n.key)||Q(e.As,n.As)}static _s(e,n){return Q(e.As,n.As)||$.comparator(e.key,n.key)}}/**
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
 */class gO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new He(Te.ds)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new b4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Te(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Te(n,0),i=new Te(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(Q);return n.forEach(i=>{const s=new Te(i,0),o=new Te(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),C.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new Te(new $(s),0);let a=new He(Q);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),C.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){re(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return C.forEach(n.mutations,i=>{const s=new Te(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Te(n,0),i=this.Rs.firstAfterOrEqual(r);return C.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class yO{constructor(e){this.Ds=e,this.docs=new ue($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():Ue.newInvalidDocument(n))}getEntries(e,n){let r=vn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ue.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=vn();const o=n.path,a=new $(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||i4(r4(c),r)<=0||(i.has(c.key)||Wu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,n,r,i){b()}Cs(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new vO(this)}getSize(e){return C.resolve(this.size)}}class vO extends hO{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class wO{constructor(e){this.persistence=e,this.xs=new ts(n=>Fp(n),jp),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Ns=0,this.ks=new qp,this.targetCount=0,this.Ms=Ui.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),C.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Ui(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Fn(n),C.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.ks.containsKey(n))}}/**
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
 */class EO{constructor(e,n){this.$s={},this.overlays={},this.Os=new Lp(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new wO(this),this.indexManager=new uO,this.remoteDocumentCache=function(r){return new yO(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new aO(n),this.qs=new pO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new gO(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new _O(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return C.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class _O extends o4{constructor(e){super(),this.currentSequenceNumber=e}}class Kp{constructor(e){this.persistence=e,this.Qs=new qp,this.js=null}static zs(e){return new Kp(e)}get Ws(){if(this.js)return this.js;throw b()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),C.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Ws,r=>{const i=$.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,j.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return C.or([()=>C.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class Gp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Gp(e,n.fromCache,r,i)}}/**
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
 */class SO{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(zy(n))return C.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=$d(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,$d(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return zy(n)||i.isEqual(j.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(Oy()<=G.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Md(n)),this.Wi(e,o,n,n4(i,-1)))})}ji(e,n){let r=new He(A_(e));return n.forEach((i,s)=>{Wu(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return Oy()<=G.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Md(n)),this.Ui.getDocumentsMatchingQuery(e,n,er.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new ue(Q),this.Yi=new ts(s=>Fp(s),jp),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fO(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function TO(t,e,n,r){return new IO(t,e,n,r)}async function Y_(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function CO(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=C.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(v=>{const w=l.docVersions.get(m);re(w!==null),v.version.compareTo(w)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=H();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function X_(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function kO(t,e){const n=U(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(Ke.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(v,w,S){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,m,c)&&a.push(n.Bs.updateTargetData(s,m))});let l=vn(),u=H();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(xO(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(j.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return C.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function xO(t,e,n){let r=H(),i=H();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=vn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(j.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function AO(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function NO(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new $n(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Vd(t,e,n){const r=U(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Go(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function ev(t,e,n){const r=U(t);let i=j.min(),s=H();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=U(a),h=c.Yi.get(u);return h!==void 0?C.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,yn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:j.min(),n?s:H())).next(a=>(RO(r,S4(e),a),{documents:a,ir:s})))}function RO(t,e,n){let r=t.Xi.get(e)||j.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class tv{constructor(){this.activeTargetIds=A4()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DO{constructor(){this.Hr=new tv,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new tv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class PO{Yr(e){}shutdown(){}}/**
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
 */class nv{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oa=null;function sh(){return Oa===null?Oa=268435456+Math.round(2147483648*Math.random()):Oa++,"0x"+Oa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class LO{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const be="WebChannelConnection";class $O extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=sh(),a=this.To(e,n);O("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(O("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Mi("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+es,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=OO[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=sh();return new Promise((o,a)=>{const l=new WP;l.setWithCredentials(!0),l.listenOnce(BP.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case rh.NO_ERROR:const c=l.getResponseJson();O(be,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case rh.TIMEOUT:O(be,`RPC '${e}' ${s} timed out`),a(new D(_.DEADLINE_EXCEEDED,"Request time out"));break;case rh.HTTP_ERROR:const h=l.getStatus();if(O(be,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const v=function(w){const S=w.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(S)>=0?S:_.UNKNOWN}(m.status);a(new D(v,m.message))}else a(new D(_.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new D(_.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{O(be,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);O(be,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=sh(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=UP(),a=VP(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new HP({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");O(be,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,m=!1;const v=new LO({ro:S=>{m?O(be,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(d||(O(be,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),O(be,`RPC '${e}' stream ${i} sending:`,S),h.send(S))},oo:()=>h.close()}),w=(S,p,f)=>{S.listen(p,g=>{try{f(g)}catch(E){setTimeout(()=>{throw E},0)}})};return w(h,Na.EventType.OPEN,()=>{m||O(be,`RPC '${e}' stream ${i} transport opened.`)}),w(h,Na.EventType.CLOSE,()=>{m||(m=!0,O(be,`RPC '${e}' stream ${i} transport closed`),v.wo())}),w(h,Na.EventType.ERROR,S=>{m||(m=!0,Mi(be,`RPC '${e}' stream ${i} transport errored:`,S),v.wo(new D(_.UNAVAILABLE,"The operation could not be completed")))}),w(h,Na.EventType.MESSAGE,S=>{var p;if(!m){const f=S.data[0];re(!!f);const g=f,E=g.error||((p=g[0])===null||p===void 0?void 0:p.error);if(E){O(be,`RPC '${e}' stream ${i} received error:`,E);const k=E.status;let N=function(L){const J=ge[L];if(J!==void 0)return V_(J)}(k),P=E.message;N===void 0&&(N=_.INTERNAL,P="Unknown error status: "+k+" with message "+E.message),m=!0,v.wo(new D(N,P)),h.close()}else O(be,`RPC '${e}' stream ${i} received:`,f),v._o(f)}}),w(a,zP.STAT_EVENT,S=>{S.stat===Dy.PROXY?O(be,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===Dy.NOPROXY&&O(be,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.fo()},0),v}}function oh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t){return new K4(t,!0)}/**
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
 */class J_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class Z_{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new J_(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(gn(n.toString()),gn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new D(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class MO extends Z_{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=Y4(this.serializer,e),r=function(i){if(!("targetChange"in i))return j.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?j.min():s.readTime?Yt(s.readTime):j.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=Ud(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Od(a)?{documents:Z4(i,a)}:{query:eO(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=H_(i,s.resumeToken);const l=bd(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(j.min())>0){o.readTime=Xl(i,s.snapshotVersion.toTimestamp());const l=bd(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=nO(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=Ud(this.serializer),n.removeTarget=e,this.Wo(n)}}class bO extends Z_{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=J4(e.writeResults,e.commitTime),r=Yt(e.commitTime);return this.listener.cu(r,n)}return re(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Ud(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>X4(this.serializer,r))};this.Wo(n)}}/**
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
 */class FO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new D(_.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(_.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(_.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class jO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(gn(n),this.mu=!1):O("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class UO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{qr(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=U(a);l.vu.add(4),await Jo(l),l.bu.set("Unknown"),l.vu.delete(4),await Yu(l)}(this))})}),this.bu=new jO(r,i)}}async function Yu(t){if(qr(t))for(const e of t.Ru)await e(!0)}async function Jo(t){for(const e of t.Ru)await e(!1)}function eS(t,e){const n=U(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Xp(n)?Yp(n):ns(n).Ko()&&Qp(n,e))}function tS(t,e){const n=U(t),r=ns(n);n.Au.delete(e),r.Ko()&&nS(n,e),n.Au.size===0&&(r.Ko()?r.jo():qr(n)&&n.bu.set("Unknown"))}function Qp(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ns(t).su(e)}function nS(t,e){t.Vu.qt(e),ns(t).iu(e)}function Yp(t){t.Vu=new z4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),ns(t).start(),t.bu.gu()}function Xp(t){return qr(t)&&!ns(t).Uo()&&t.Au.size>0}function qr(t){return U(t).vu.size===0}function rS(t){t.Vu=void 0}async function VO(t){t.Au.forEach((e,n)=>{Qp(t,e)})}async function BO(t,e){rS(t),Xp(t)?(t.bu.Iu(e),Yp(t)):t.bu.set("Unknown")}async function zO(t,e,n){if(t.bu.set("Online"),e instanceof z_&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Jl(t,r)}else if(e instanceof Ja?t.Vu.Ht(e):e instanceof B_?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(j.min()))try{const r=await X_(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(Ke.EMPTY_BYTE_STRING,u.snapshotVersion)),nS(i,a);const c=new $n(u.target,a,l,u.sequenceNumber);Qp(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Jl(t,r)}}async function Jl(t,e,n){if(!Go(e))throw e;t.vu.add(1),await Jo(t),t.bu.set("Offline"),n||(n=()=>X_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Yu(t)})}function iS(t,e){return e().catch(n=>Jl(t,n,e))}async function Xu(t){const e=U(t),n=nr(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;HO(e);)try{const i=await AO(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,WO(e,i)}catch(i){await Jl(e,i)}sS(e)&&oS(e)}function HO(t){return qr(t)&&t.Eu.length<10}function WO(t,e){t.Eu.push(e);const n=nr(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function sS(t){return qr(t)&&!nr(t).Uo()&&t.Eu.length>0}function oS(t){nr(t).start()}async function qO(t){nr(t).hu()}async function KO(t){const e=nr(t);for(const n of t.Eu)e.uu(n.mutations)}async function GO(t,e,n){const r=t.Eu.shift(),i=Bp.from(r,e,n);await iS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Xu(t)}async function QO(t,e){e&&nr(t).ou&&await async function(n,r){if(i=r.code,U4(i)&&i!==_.ABORTED){const s=n.Eu.shift();nr(n).Qo(),await iS(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Xu(n)}var i}(t,e),sS(t)&&oS(t)}async function rv(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=qr(n);n.vu.add(3),await Jo(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Yu(n)}async function YO(t,e){const n=U(t);e?(n.vu.delete(2),await Yu(n)):e||(n.vu.add(2),await Jo(n),n.bu.set("Unknown"))}function ns(t){return t.Su||(t.Su=function(e,n,r){const i=U(e);return i.fu(),new MO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:VO.bind(null,t),ao:BO.bind(null,t),nu:zO.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Xp(t)?Yp(t):t.bu.set("Unknown")):(await t.Su.stop(),rS(t))})),t.Su}function nr(t){return t.Du||(t.Du=function(e,n,r){const i=U(e);return i.fu(),new bO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:qO.bind(null,t),ao:QO.bind(null,t),au:KO.bind(null,t),cu:GO.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Xu(t)):(await t.Du.stop(),t.Eu.length>0&&(O("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class Jp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Jp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zp(t,e){if(gn("AsyncQueue",`${e}: ${t}`),Go(t))return new D(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ti{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=Cs(),this.sortedSet=new ue(this.comparator)}static emptySet(e){return new Ti(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ti)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ti;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class iv{constructor(){this.Cu=new ue($.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):b():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Vi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Vi(e,n,Ti.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class XO{constructor(){this.Nu=void 0,this.listeners=[]}}class JO{constructor(){this.queries=new ts(e=>x_(e),Hu),this.onlineState="Unknown",this.ku=new Set}}async function ZO(t,e){const n=U(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new XO),i)try{s.Nu=await n.onListen(r)}catch(o){const a=Zp(o,`Initialization of query '${Md(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&em(n)}async function eL(t,e){const n=U(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function tL(t,e){const n=U(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&em(n)}function nL(t,e,n){const r=U(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function em(t){t.ku.forEach(e=>{e.next()})}class rL{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Vi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Vi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class aS{constructor(e){this.key=e}}class lS{constructor(e){this.key=e}}class iL{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=H(),this.mutatedKeys=H(),this.tc=A_(e),this.ec=new Ti(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new iv,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=Wu(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let S=!1;d&&m?d.data.isEqual(m.data)?v!==w&&(r.track({type:3,doc:m}),S=!0):this.rc(d,m)||(r.track({type:2,doc:m}),S=!0,(l&&this.tc(m,l)>0||u&&this.tc(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),S=!0):d&&!m&&(r.track({type:1,doc:d}),S=!0,(l||u)&&(a=!0)),S&&(m?(o=o.add(m),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,d){const m=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return m(h)-m(d)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new Vi(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new iv,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=H(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new lS(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new aS(r))}),n}hc(e){this.Yu=e.ir,this.Zu=H();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Vi.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class sL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class oL{constructor(e){this.key=e,this.fc=!1}}class aL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new ts(a=>x_(a),Hu),this._c=new Map,this.mc=new Set,this.gc=new ue($.comparator),this.yc=new Map,this.Ic=new qp,this.Tc={},this.Ec=new Map,this.Ac=Ui.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function lL(t,e){const n=vL(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await NO(n.localStore,yn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await uL(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&eS(n.remoteStore,o)}return i}async function uL(t,e,n,r,i){t.Rc=(h,d,m)=>async function(v,w,S,p){let f=w.view.sc(S);f.zi&&(f=await ev(v.localStore,w.query,!1).then(({documents:k})=>w.view.sc(k,f)));const g=p&&p.targetChanges.get(w.targetId),E=w.view.applyChanges(f,v.isPrimaryClient,g);return ov(v,w.targetId,E.cc),E.snapshot}(t,h,d,m);const s=await ev(t.localStore,e,!0),o=new iL(e,s.ir),a=o.sc(s.documents),l=Xo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);ov(t,n,u.cc);const c=new sL(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function cL(t,e){const n=U(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Hu(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Vd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),tS(n.remoteStore,r.targetId),Bd(n,r.targetId)}).catch(Ko)):(Bd(n,r.targetId),await Vd(n.localStore,r.targetId,!0))}async function hL(t,e,n){const r=wL(t);try{const i=await function(s,o){const a=U(s),l=Se.now(),u=o.reduce((d,m)=>d.add(m.key),H());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=vn(),v=H();return a.Zi.getEntries(d,u).next(w=>{m=w,m.forEach((S,p)=>{p.isValidDocument()||(v=v.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(w=>{c=w;const S=[];for(const p of o){const f=$4(p,c.get(p.key).overlayedDocument);f!=null&&S.push(new lr(p.key,f,v_(f.value.mapValue),Qt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,S,o)}).next(w=>{h=w;const S=w.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(d,w.batchId,S)})}).then(()=>({batchId:h.batchId,changes:R_(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new ue(Q)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Zo(r,i.changes),await Xu(r.remoteStore)}catch(i){const s=Zp(i,"Failed to persist write");n.reject(s)}}async function uS(t,e){const n=U(t);try{const r=await kO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?re(o.fc):i.removedDocuments.size>0&&(re(o.fc),o.fc=!1))}),await Zo(n,r,e)}catch(r){await Ko(r)}}function sv(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=U(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&em(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dL(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new ue($.comparator);o=o.insert(s,Ue.newNoDocument(s,j.min()));const a=H().add(s),l=new Gu(j.min(),new Map,new ue(Q),o,a);await uS(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),tm(r)}else await Vd(r.localStore,e,!1).then(()=>Bd(r,e,n)).catch(Ko)}async function fL(t,e){const n=U(t),r=e.batch.batchId;try{const i=await CO(n.localStore,e);hS(n,r,null),cS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zo(n,i)}catch(i){await Ko(i)}}async function pL(t,e,n){const r=U(t);try{const i=await function(s,o){const a=U(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(re(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);hS(r,e,n),cS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zo(r,i)}catch(i){await Ko(i)}}function cS(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function hS(t,e,n){const r=U(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Bd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||dS(t,r)})}function dS(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(tS(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),tm(t))}function ov(t,e,n){for(const r of n)r instanceof aS?(t.Ic.addReference(r.key,e),mL(t,r)):r instanceof lS?(O("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||dS(t,r.key)):b()}function mL(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(O("SyncEngine","New document in limbo: "+n),t.mc.add(r),tm(t))}function tm(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new $(te.fromString(e)),r=t.Ac.next();t.yc.set(r,new oL(n)),t.gc=t.gc.insert(n,r),eS(t.remoteStore,new $n(yn(Up(n.path)),r,"TargetPurposeLimboResolution",Lp.ct))}}async function Zo(t,e,n){const r=U(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Gp.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=U(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>C.forEach(l,h=>C.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>C.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Go(c))throw c;O("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ji.get(h),m=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(m);u.Ji=u.Ji.insert(h,v)}}}(r.localStore,s))}async function gL(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await Y_(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new D(_.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zo(n,r.er)}}function yL(t,e){const n=U(t),r=n.yc.get(e);if(r&&r.fc)return H().add(r.key);{let i=H();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function vL(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dL.bind(null,e),e.dc.nu=tL.bind(null,e.eventManager),e.dc.Pc=nL.bind(null,e.eventManager),e}function wL(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pL.bind(null,e),e}class av{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Qu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return TO(this.persistence,new SO,e.initialUser,this.serializer)}createPersistence(e){return new EO(Kp.zs,this.serializer)}createSharedClientState(e){return new DO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class EL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gL.bind(null,this.syncEngine),await YO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new JO}createDatastore(e){const n=Qu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new $O(i));var i;return function(s,o,a,l){return new FO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>sv(this.syncEngine,a,0),o=nv.D()?new nv:new PO,new UO(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new aL(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=U(e);O("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Jo(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _L{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):gn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class SL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Fe.UNAUTHENTICATED,this.clientId=m_.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ah(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Y_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function lv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await TL(t);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>rv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>rv(e.remoteStore,s)),t._onlineComponents=e}function IL(t){return t.name==="FirebaseError"?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function TL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await ah(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!IL(n))throw n;Mi("Error using user provided cache. Falling back to memory cache: "+n),await ah(t,new av)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await ah(t,new av);return t._offlineComponents}async function fS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await lv(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await lv(t,new EL))),t._onlineComponents}function CL(t){return fS(t).then(e=>e.syncEngine)}async function uv(t){const e=await fS(t),n=e.eventManager;return n.onListen=lL.bind(null,e.syncEngine),n.onUnlisten=cL.bind(null,e.syncEngine),n}/**
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
 */function pS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=new Map;/**
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
 */function mS(t,e,n){if(!n)throw new D(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kL(t,e,n,r){if(e===!0&&r===!0)throw new D(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hv(t){if(!$.isDocumentKey(t))throw new D(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dv(t){if($.isDocumentKey(t))throw new D(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ju(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function Yn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ju(t);throw new D(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new D(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new D(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new D(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new D(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Zu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new KP;switch(n.type){case"firstParty":return new XP(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=cv.get(e);n&&(O("ComponentProvider","Removing Datastore"),cv.delete(e),n.terminate())}(this),Promise.resolve()}}function xL(t,e,n,r={}){var i;const s=(t=Yn(t,Zu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Mi("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Fe.MOCK_USER;else{o=pk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new D(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Fe(l)}t._authCredentials=new GP(new p_(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xe(this.firestore,e,this._key)}}class rs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rs(this.firestore,e,this._query)}}class Xn extends rs{constructor(e,n,r){super(e,n,Up(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xe(this.firestore,null,new $(e))}withConverter(e){return new Xn(this.firestore,e,this._path)}}function AL(t,e,...n){if(t=me(t),mS("collection","path",e),t instanceof Zu){const r=te.fromString(e,...n);return dv(r),new Xn(t,null,r)}{if(!(t instanceof Xe||t instanceof Xn))throw new D(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return dv(r),new Xn(t.firestore,null,r)}}function lh(t,e,...n){if(t=me(t),arguments.length===1&&(e=m_.A()),mS("doc","path",e),t instanceof Zu){const r=te.fromString(e,...n);return hv(r),new Xe(t,null,new $(r))}{if(!(t instanceof Xe||t instanceof Xn))throw new D(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return hv(r),new Xe(t.firestore,t instanceof Xn?t.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new J_(this,"async_queue_retry"),this.Xc=()=>{const n=oh();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=oh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=oh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new xr;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Go(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw gn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=Jp.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&b()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function pv(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Co extends Zu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new NL,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yS(this),this._firestoreClient.terminate()}}function nm(t,e){const n=typeof t=="object"?t:Gf(),r=typeof t=="string"?t:e||"(default)",i=zr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=dk("firestore");s&&xL(i,...s)}return i}function gS(t){return t._firestoreClient||yS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yS(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new u4(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,pS(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new SL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bi(Ke.fromBase64String(e))}catch(n){throw new D(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bi(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this._methodName=e}}/**
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
 */class im{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
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
 */const RL=/^__.*__$/;class DL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yo(e,this.data,n,this.fieldTransforms)}}class vS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function wS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class sm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new sm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Zl(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(wS(this.ca)&&RL.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class PL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Qu(e)}ya(e,n,r,i=!1){return new sm({ca:e,methodName:n,ga:r,path:Ve.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function om(t){const e=t._freezeSettings(),n=Qu(t._databaseId);return new PL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function OL(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);am("Data must be an object, but it was:",o,r);const a=ES(r,o);let l,u;if(s.merge)l=new ct(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=zd(e,h,n);if(!o.contains(d))throw new D(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);SS(c,d)||c.push(d)}l=new ct(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new DL(new nt(a),l,u)}class tc extends rm{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof tc}}function LL(t,e,n,r){const i=t.ya(1,e,n);am("Data must be an object, but it was:",i,r);const s=[],o=nt.empty();Wr(r,(l,u)=>{const c=lm(e,l,n);u=me(u);const h=i.da(c);if(u instanceof tc)s.push(c);else{const d=ea(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new ct(s);return new vS(o,a,i.fieldTransforms)}function $L(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[zd(e,r,n)],l=[i];if(s.length%2!=0)throw new D(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(zd(e,s[d])),l.push(s[d+1]);const u=[],c=nt.empty();for(let d=a.length-1;d>=0;--d)if(!SS(u,a[d])){const m=a[d];let v=l[d];v=me(v);const w=o.da(m);if(v instanceof tc)u.push(m);else{const S=ea(v,w);S!=null&&(u.push(m),c.set(m,S))}}const h=new ct(u);return new vS(c,h,o.fieldTransforms)}function ML(t,e,n,r=!1){return ea(n,t.ya(r?4:3,e))}function ea(t,e){if(_S(t=me(t)))return am("Unsupported field value:",e,t),ES(t,e);if(t instanceof rm)return function(n,r){if(!wS(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ea(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=me(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return N4(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Se.fromDate(n);return{timestampValue:Xl(r.serializer,i)}}if(n instanceof Se){const i=new Se(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Xl(r.serializer,i)}}if(n instanceof im)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Bi)return{bytesValue:H_(r.serializer,n._byteString)};if(n instanceof Xe){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Ju(n)}`)}(t,e)}function ES(t,e){const n={};return g_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wr(t,(r,i)=>{const s=ea(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function _S(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Se||t instanceof im||t instanceof Bi||t instanceof Xe||t instanceof rm)}function am(t,e,n){if(!_S(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ju(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function zd(t,e,n){if((e=me(e))instanceof ec)return e._internalPath;if(typeof e=="string")return lm(t,e);throw Zl("Field path arguments must be of type string or ",t,!1,void 0,n)}const bL=new RegExp("[~\\*/\\[\\]]");function lm(t,e,n){if(e.search(bL)>=0)throw Zl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ec(...e.split("."))._internalPath}catch{throw Zl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new D(_.INVALID_ARGUMENT,a+t+l)}function SS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(TS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FL extends IS{data(){return super.data()}}function TS(t,e){return typeof e=="string"?lm(t,e):e instanceof ec?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class um{}class UL extends um{}function VL(t,e,...n){let r=[];e instanceof um&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof hm).length,o=i.filter(a=>a instanceof cm).length;if(s>1||s>0&&o>0)throw new D(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class cm extends UL{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new cm(e,n,r)}_apply(e){const n=this._parse(e);return CS(e._query,n),new rs(e.firestore,e.converter,Ld(e._query,n))}_parse(e){const n=om(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new D(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){gv(c,u);const d=[];for(const m of c)d.push(mv(a,i,m));h={arrayValue:{values:d}}}else h=mv(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||gv(c,u),h=ML(o,s,c,u==="in"||u==="not-in");return we.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class hm extends um{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new hm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:bt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)CS(s,a),s=Ld(s,a)}(e._query,n),new rs(e.firestore,e.converter,Ld(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function mv(t,e,n){if(typeof(n=me(n))=="string"){if(n==="")throw new D(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!k_(e)&&n.indexOf("/")!==-1)throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(te.fromString(n));if(!$.isDocumentKey(r))throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return by(t,new $(r))}if(n instanceof Xe)return by(t,n._key);throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ju(n)}.`)}function gv(t,e){if(!Array.isArray(t)||t.length===0)throw new D(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function CS(t,e){if(e.isInequality()){const r=Vp(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new D(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=C_(t);s!==null&&BL(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new D(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function BL(t,e,n){if(!n.isEqual(e))throw new D(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class zL{convertValue(e,n="none"){switch(jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Wr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new im(ye(e.latitude),ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Mp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Eo(e));default:return null}}convertTimestamp(e){const n=tr(e);return new Se(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=te.fromString(e);re(Q_(r));const i=new _o(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||gn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HL(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kS extends IS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Za(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(TS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Za extends kS{data(e={}){return super.data(e)}}class WL{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new xs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Za(this._firestore,this._userDataWriter,r.key,r,new xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Za(r._firestore,r._userDataWriter,o.doc.key,o.doc,new xs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Za(r._firestore,r._userDataWriter,o.doc.key,o.doc,new xs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:qL(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}class xS extends zL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xe(this.firestore,null,n)}}function KL(t,e,n){t=Yn(t,Xe);const r=Yn(t.firestore,Co),i=HL(t.converter,e,n);return AS(r,[OL(om(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Qt.none())])}function yv(t,e,n,...r){t=Yn(t,Xe);const i=Yn(t.firestore,Co),s=om(i);let o;return o=typeof(e=me(e))=="string"||e instanceof ec?$L(s,"updateDoc",t._key,e,n,r):LL(s,"updateDoc",t._key,e),AS(i,[o.toMutation(t._key,Qt.exists(!0))])}function GL(t,...e){var n,r,i;t=me(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||pv(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(pv(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Xe)u=Yn(t.firestore,Co),c=Up(t._key.path),l={next:h=>{e[o]&&e[o](QL(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Yn(t,rs);u=Yn(h.firestore,Co),c=h._query;const d=new xS(u);l={next:m=>{e[o]&&e[o](new WL(u,d,h,m))},error:e[o+1],complete:e[o+2]},jL(t._query)}return function(h,d,m,v){const w=new _L(v),S=new rL(d,w,m);return h.asyncQueue.enqueueAndForget(async()=>ZO(await uv(h),S)),()=>{w.Dc(),h.asyncQueue.enqueueAndForget(async()=>eL(await uv(h),S))}}(gS(u),c,a,l)}function AS(t,e){return function(n,r){const i=new xr;return n.asyncQueue.enqueueAndForget(async()=>hL(await CL(n),r,i)),i.promise}(gS(t),e)}function QL(t,e,n){const r=n.docs.get(e._key),i=new xS(t);return new kS(t,i,e._key,r,new xs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){es=n})(Qi),Jt(new Lt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Co(new QP(n.getProvider("auth-internal")),new ZP(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new D(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _o(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),St(Py,"3.12.0",t),St(Py,"3.12.0","esm2017")})();function YL(){Pw("2024-10-21"),I.useState("");const[t,e]=I.useState([]);function n(i){let s=0,o=0,a=0,l=0,u=0;if(t.map(c=>{c.age==="adult"&&(s=s+1),c.age==="child"&&(o=o+1),c.status==="confirmed"&&(a=a+1),c.status==="unconfirmed"&&(l=l+1),c.status==="maybe"&&(u=u+1)}),i==="adult")return s;if(i==="child")return o;if(i==="confirmed")return a;if(i==="unconfirmed")return l+u}I.useEffect(()=>{const i=VL(AL(r,"inviteds"));GL(i,s=>{const o=[];s.forEach(a=>{console.log(a.id,a.data),o.push({id:a.id,...a.data()})}),e([...o])})},[]);const r=nm(cp);return y.jsxs("div",{className:"App",children:[y.jsx("header",{className:ps.header,children:y.jsx("h1",{className:ps.title,children:"Guests List"})}),y.jsxs("div",{className:ps.container,children:[y.jsxs("section",{className:ps.cards,children:[y.jsx(Gr,{title:t.length,text:"Convidados",children:y.jsx(ZN,{style:{color:"white",fontSize:"15px"}})}),y.jsx(Gr,{title:n("adult"),text:"Adultos",children:y.jsx(eR,{style:{color:"white",fontSize:"15px"}})}),y.jsx(Gr,{title:n("child"),text:"Crianças",children:y.jsx(lR,{style:{color:"white",fontSize:"15px"}})}),y.jsx(Gr,{link:"/addguests",cursor:"pointer",color:"#8c3f0d",title:"Adicionar Convidados",text:"",children:y.jsx(uR,{style:{color:"white",fontSize:"15px"}})}),y.jsx(Gr,{title:n("confirmed"),text:"Confirmados",children:y.jsx(sy,{style:{color:"lightGreen",fontSize:"15px"}})}),y.jsx(Gr,{title:n("unconfirmed"),text:"Não confirmados",children:y.jsx(sy,{style:{color:"Red",fontSize:"15px"}})})]}),y.jsx("section",{className:ps.peoplesInviteds,children:t.map(i=>y.jsx(aR,{name:i.name,lastName:i.lastName,status:i.status,age:i.age},i.name))})]})]})}const XL="_header_1kyyt_1",JL="_grid_1kyyt_9",ZL="_ageBox_1kyyt_29",e$="_statusBox_1kyyt_29",t$="_age_1kyyt_29",n$="_status_1kyyt_29",hr={header:XL,grid:JL,ageBox:ZL,statusBox:e$,age:t$,status:n$},dm=I.createContext({}),r$=({children:t})=>{const[e,n]=I.useState("");I.useState(""),I.useState("");const r=nm(cp),i=async function(o="1",a,l,u="",c){console.log(o,a,l,u,c);const h=`${a.toLowerCase()}${l.toLowerCase()}`,d={name:a,lastName:l,age:u,status:c};await KL(lh(r,`inviteds/${h}`),d),await yv(lh(r,`inviteds/${h}`),d)},s=async function(o,a,l){const u=`${o.toLowerCase()}${a.toLowerCase()}`;l.toLowerCase()==="confirmado"&&(l="confirmed"),l.toLowerCase()==="não confirmado"&&(l="unconfirmed");const c={name:o,lastName:a,status:l};await yv(lh(r,`inviteds/${u}`),c)};return y.jsx(dm.Provider,{value:{name:e,addGuest:i,confirmGuest:s},children:t})};function i$(){const[t,e]=I.useState(),[n,r]=I.useState(),[i,s]=I.useState(),[o,a]=I.useState();nm(cp);const{addGuest:l}=I.useContext(dm),u=[{id:0,type:""},{id:2,type:"child"},{id:3,type:"adult"}],c=[{id:0,type:""},{id:2,type:"maybe"},{id:3,type:"confirmed"},{id:4,type:"unconfirmed"}];return y.jsx("div",{className:"App",children:y.jsxs("div",{className:hr.grid,children:[y.jsx("header",{className:hr.header,children:y.jsx("h1",{className:hr.title,children:"Add Guests"})}),y.jsx("div",{children:y.jsx(Li,{type:"text",onChange:e,placeholder:"Name"})}),y.jsx("div",{children:y.jsx(Li,{type:"text",onChange:r,placeholder:"Last Name"})}),y.jsx("div",{className:hr.ageBox,children:y.jsxs("div",{children:[y.jsx("label",{for:"ages",children:"Age "}),y.jsx("select",{className:hr.age,onChange:h=>s(h.target.value),name:"ages",id:"ages",children:u.map(h=>y.jsx("option",{value:h.type,children:h.type.toUpperCase()}))})]})}),y.jsx("div",{className:hr.statusBox,children:y.jsxs("div",{children:[y.jsx("label",{for:"status",children:"Status "}),y.jsx("select",{className:hr.status,onChange:h=>a(h.target.value),name:"status",id:"status",children:c.map(h=>y.jsx("option",{value:h.type,children:h.type.toUpperCase()}))})]})}),y.jsxs("div",{children:[y.jsx("button",{onClick:h=>l("0",t,n,i.toLowerCase(),o.toLowerCase()),children:"Add"}),y.jsx("button",{onClick:h=>l("1",t,n,i.toLowerCase(),o.toLowerCase()),children:"Add and continue"})]})]})})}const s$=()=>{const{user:t}=I.useContext(Su);return console.log(!!t),t?y.jsx(qC,{}):y.jsx(j1,{to:"/login"})},o$="_container_u5jqr_1",a$="_gif_u5jqr_19",l$="_img_u5jqr_29",uh={container:o$,gif:a$,img:l$},u$="/assets/bebesorrindo-2c997a07.gif";function c$(){return y.jsxs("div",{className:uh.container,children:[y.jsx("p",{children:"Desculpa rasgar as outras"}),y.jsx("div",{children:y.jsx("section",{children:y.jsx("figure",{class:uh.gif,children:y.jsx("img",{classname:uh.img,width:"250",src:u$})})})}),y.jsx("p",{children:"Prometo que farei de novo, bjbj, te amo, sdds"})]})}const h$="_containerButtons_1diw6_1",ch={containerButtons:h$};function d$(){const t=[{id:0,type:"Presença"},{id:2,type:"Confirmado"},{id:3,type:"Não confirmado"}],{confirmGuest:e}=I.useContext(dm),[n,r]=I.useState(""),[i,s]=I.useState(""),[o,a]=I.useState("");return y.jsxs("div",{className:"App",children:[y.jsxs("div",{children:[y.jsx(Iu,{}),y.jsx(Tu,{enableMiddle:!1,enableBottom:!1})]}),y.jsxs("div",{children:[y.jsx(Li,{type:"text",placeholder:"Nome",onChange:r}),y.jsx(Li,{type:"text",placeholder:"Ultimo Nome",onChange:s}),y.jsx("div",{className:ch.statusBox,children:y.jsxs("div",{children:[y.jsx("label",{for:"status"}),y.jsx("select",{className:ch.status,onChange:l=>a(l.target.value),name:"status",id:"status",children:t.map(l=>y.jsx("option",{value:l.type,children:l.type.toUpperCase()}))})]})})]}),y.jsx("div",{className:ch.containerButtons,children:y.jsx(Cr,{action:l=>e(n,i,o),link:"",navigate:"#",text:"Confirm",target:"_self",children:y.jsx(Fw,{style:{color:"white",fontSize:"100px"}})})})]})}function f$(){const[t,e]=I.useState(!0);I.useEffect(()=>{setTimeout(()=>{e(!1)},3e3)},[]);const n=` 
    display: flex;
    justify-content:center;
    align-self:center;
    margin: auto;
    border-color: red;
  `;return t?y.jsx(y.Fragment,{children:y.jsx("div",{children:y.jsxs(y.Fragment,{children:[y.jsx("div",{className:Uc.titleContainer,children:y.jsx("h1",{className:Uc.title,children:"a wedding is coming"})}),y.jsx("div",{className:Uc.loader,children:y.jsx(DN,{color:"#8c3f0d",isLoading:t,css:n,size:50})})]})})}):y.jsx(y.Fragment,{children:y.jsx(r$,{children:y.jsx(VA,{children:y.jsx(ek,{children:y.jsxs(GC,{children:[y.jsx(Ut,{path:"counter",element:y.jsx(EN,{})}),y.jsx(Ut,{path:"login",element:y.jsx(BN,{})}),y.jsx(Ut,{path:"confirm",element:y.jsx(d$,{})}),y.jsxs(Ut,{element:y.jsx(s$,{}),children:[y.jsx(Ut,{path:"guests",element:y.jsx(YL,{})}),y.jsx(Ut,{path:"admin",element:y.jsx($N,{})}),y.jsx(Ut,{path:"addguests",element:y.jsx(i$,{})}),y.jsx(Ut,{path:"ourdate",element:y.jsx(c$,{})})]}),y.jsx(Ut,{path:"/",element:y.jsx(j1,{to:"/counter"})})]})})})})})}hh.createRoot(document.getElementById("root")).render(y.jsx(f$,{}));
