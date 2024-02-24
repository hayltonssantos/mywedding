function CI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qv={exports:{}},pu={},Yv={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mo=Symbol.for("react.element"),kI=Symbol.for("react.portal"),xI=Symbol.for("react.fragment"),NI=Symbol.for("react.strict_mode"),AI=Symbol.for("react.profiler"),RI=Symbol.for("react.provider"),PI=Symbol.for("react.context"),DI=Symbol.for("react.forward_ref"),OI=Symbol.for("react.suspense"),LI=Symbol.for("react.memo"),$I=Symbol.for("react.lazy"),Um=Symbol.iterator;function MI(t){return t===null||typeof t!="object"?null:(t=Um&&t[Um]||t["@@iterator"],typeof t=="function"?t:null)}var Xv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jv=Object.assign,Zv={};function Qi(t,e,n){this.props=t,this.context=e,this.refs=Zv,this.updater=n||Xv}Qi.prototype.isReactComponent={};Qi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function e0(){}e0.prototype=Qi.prototype;function gf(t,e,n){this.props=t,this.context=e,this.refs=Zv,this.updater=n||Xv}var yf=gf.prototype=new e0;yf.constructor=gf;Jv(yf,Qi.prototype);yf.isPureReactComponent=!0;var Vm=Array.isArray,t0=Object.prototype.hasOwnProperty,vf={current:null},n0={key:!0,ref:!0,__self:!0,__source:!0};function r0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)t0.call(e,r)&&!n0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Mo,type:t,key:s,ref:o,props:i,_owner:vf.current}}function bI(t,e){return{$$typeof:Mo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Mo}function jI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bm=/\/+/g;function wc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jI(""+t.key):e.toString(36)}function Ka(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Mo:case kI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wc(o,0):r,Vm(i)?(n="",t!=null&&(n=t.replace(Bm,"$&/")+"/"),Ka(i,e,n,"",function(u){return u})):i!=null&&(wf(i)&&(i=bI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Bm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Vm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+wc(s,a);o+=Ka(s,e,n,l,i)}else if(l=MI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+wc(s,a++),o+=Ka(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pa(t,e,n){if(t==null)return t;var r=[],i=0;return Ka(t,r,"","",function(s){return e.call(n,s,i++)}),r}function FI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ze={current:null},Ga={transition:null},UI={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:Ga,ReactCurrentOwner:vf};W.Children={map:pa,forEach:function(t,e,n){pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pa(t,function(){e++}),e},toArray:function(t){return pa(t,function(e){return e})||[]},only:function(t){if(!wf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=Qi;W.Fragment=xI;W.Profiler=AI;W.PureComponent=gf;W.StrictMode=NI;W.Suspense=OI;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UI;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Jv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)t0.call(e,l)&&!n0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Mo,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:PI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:RI,_context:t},t.Consumer=t};W.createElement=r0;W.createFactory=function(t){var e=r0.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:DI,render:t}};W.isValidElement=wf;W.lazy=function(t){return{$$typeof:$I,_payload:{_status:-1,_result:t},_init:FI}};W.memo=function(t,e){return{$$typeof:LI,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=Ga.transition;Ga.transition={};try{t()}finally{Ga.transition=e}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(t,e){return Ze.current.useCallback(t,e)};W.useContext=function(t){return Ze.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return Ze.current.useDeferredValue(t)};W.useEffect=function(t,e){return Ze.current.useEffect(t,e)};W.useId=function(){return Ze.current.useId()};W.useImperativeHandle=function(t,e,n){return Ze.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return Ze.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return Ze.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return Ze.current.useMemo(t,e)};W.useReducer=function(t,e,n){return Ze.current.useReducer(t,e,n)};W.useRef=function(t){return Ze.current.useRef(t)};W.useState=function(t){return Ze.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return Ze.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return Ze.current.useTransition()};W.version="18.2.0";Yv.exports=W;var _=Yv.exports;const Qe=fu(_),VI=CI({__proto__:null,default:Qe},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BI=_,zI=Symbol.for("react.element"),HI=Symbol.for("react.fragment"),WI=Object.prototype.hasOwnProperty,qI=BI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,KI={key:!0,ref:!0,__self:!0,__source:!0};function i0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)WI.call(e,r)&&!KI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:zI,type:t,key:s,ref:o,props:i,_owner:qI.current}}pu.Fragment=HI;pu.jsx=i0;pu.jsxs=i0;Qv.exports=pu;var p=Qv.exports,Ah={},s0={exports:{}},yt={},o0={exports:{}},a0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,V){var B=P.length;P.push(V);e:for(;0<B;){var de=B-1>>>1,Ie=P[de];if(0<i(Ie,V))P[de]=V,P[B]=Ie,B=de;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var V=P[0],B=P.pop();if(B!==V){P[0]=B;e:for(var de=0,Ie=P.length,da=Ie>>>1;de<da;){var hr=2*(de+1)-1,vc=P[hr],dr=hr+1,fa=P[dr];if(0>i(vc,B))dr<Ie&&0>i(fa,vc)?(P[de]=fa,P[dr]=B,de=dr):(P[de]=vc,P[hr]=B,de=hr);else if(dr<Ie&&0>i(fa,B))P[de]=fa,P[dr]=B,de=dr;else break e}}return V}function i(P,V){var B=P.sortIndex-V.sortIndex;return B!==0?B:P.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,v=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(P){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=P)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function E(P){if(w=!1,y(P),!v)if(n(l)!==null)v=!0,gc(k);else{var V=n(u);V!==null&&yc(E,V.startTime-P)}}function k(P,V){v=!1,w&&(w=!1,g(O),O=-1),m=!0;var B=d;try{for(y(V),h=n(l);h!==null&&(!(h.expirationTime>V)||P&&!Nt());){var de=h.callback;if(typeof de=="function"){h.callback=null,d=h.priorityLevel;var Ie=de(h.expirationTime<=V);V=t.unstable_now(),typeof Ie=="function"?h.callback=Ie:h===n(l)&&r(l),y(V)}else r(l);h=n(l)}if(h!==null)var da=!0;else{var hr=n(u);hr!==null&&yc(E,hr.startTime-V),da=!1}return da}finally{h=null,d=B,m=!1}}var x=!1,A=null,O=-1,J=5,z=-1;function Nt(){return!(t.unstable_now()-z<J)}function ds(){if(A!==null){var P=t.unstable_now();z=P;var V=!0;try{V=A(!0,P)}finally{V?fs():(x=!1,A=null)}}else x=!1}var fs;if(typeof f=="function")fs=function(){f(ds)};else if(typeof MessageChannel<"u"){var Fm=new MessageChannel,TI=Fm.port2;Fm.port1.onmessage=ds,fs=function(){TI.postMessage(null)}}else fs=function(){S(ds,0)};function gc(P){A=P,x||(x=!0,fs())}function yc(P,V){O=S(function(){P(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,gc(k))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var B=d;d=V;try{return P()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,V){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var B=d;d=P;try{return V()}finally{d=B}},t.unstable_scheduleCallback=function(P,V,B){var de=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?de+B:de):B=de,P){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=B+Ie,P={id:c++,callback:V,priorityLevel:P,startTime:B,expirationTime:Ie,sortIndex:-1},B>de?(P.sortIndex=B,e(u,P),n(l)===null&&P===n(u)&&(w?(g(O),O=-1):w=!0,yc(E,B-de))):(P.sortIndex=Ie,e(l,P),v||m||(v=!0,gc(k))),P},t.unstable_shouldYield=Nt,t.unstable_wrapCallback=function(P){var V=d;return function(){var B=d;d=V;try{return P.apply(this,arguments)}finally{d=B}}}})(a0);o0.exports=a0;var GI=o0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0=_,mt=GI;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u0=new Set,to={};function qr(t,e){Ri(t,e),Ri(t+"Capture",e)}function Ri(t,e){for(to[t]=e,t=0;t<e.length;t++)u0.add(e[t])}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rh=Object.prototype.hasOwnProperty,QI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zm={},Hm={};function YI(t){return Rh.call(Hm,t)?!0:Rh.call(zm,t)?!1:QI.test(t)?Hm[t]=!0:(zm[t]=!0,!1)}function XI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function JI(t,e,n,r){if(e===null||typeof e>"u"||XI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function et(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Le[t]=new et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Le[e]=new et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Le[t]=new et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Le[t]=new et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Le[t]=new et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Le[t]=new et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Le[t]=new et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Le[t]=new et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Le[t]=new et(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ef=/[\-:]([a-z])/g;function _f(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ef,_f);Le[e]=new et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ef,_f);Le[e]=new et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ef,_f);Le[e]=new et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Le[t]=new et(t,1,!1,t.toLowerCase(),null,!1,!1)});Le.xlinkHref=new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Le[t]=new et(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sf(t,e,n,r){var i=Le.hasOwnProperty(e)?Le[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(JI(e,n,i,r)&&(n=null),r||i===null?YI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Sn=l0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ma=Symbol.for("react.element"),ii=Symbol.for("react.portal"),si=Symbol.for("react.fragment"),If=Symbol.for("react.strict_mode"),Ph=Symbol.for("react.profiler"),c0=Symbol.for("react.provider"),h0=Symbol.for("react.context"),Tf=Symbol.for("react.forward_ref"),Dh=Symbol.for("react.suspense"),Oh=Symbol.for("react.suspense_list"),Cf=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),d0=Symbol.for("react.offscreen"),Wm=Symbol.iterator;function ps(t){return t===null||typeof t!="object"?null:(t=Wm&&t[Wm]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,Ec;function ks(t){if(Ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||""}return`
`+Ec+t}var _c=!1;function Sc(t,e){if(!t||_c)return"";_c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{_c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ks(t):""}function ZI(t){switch(t.tag){case 5:return ks(t.type);case 16:return ks("Lazy");case 13:return ks("Suspense");case 19:return ks("SuspenseList");case 0:case 2:case 15:return t=Sc(t.type,!1),t;case 11:return t=Sc(t.type.render,!1),t;case 1:return t=Sc(t.type,!0),t;default:return""}}function Lh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case si:return"Fragment";case ii:return"Portal";case Ph:return"Profiler";case If:return"StrictMode";case Dh:return"Suspense";case Oh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case h0:return(t.displayName||"Context")+".Consumer";case c0:return(t._context.displayName||"Context")+".Provider";case Tf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cf:return e=t.displayName||null,e!==null?e:Lh(t.type)||"Memo";case xn:e=t._payload,t=t._init;try{return Lh(t(e))}catch{}}return null}function eT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lh(e);case 8:return e===If?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function f0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tT(t){var e=f0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ga(t){t._valueTracker||(t._valueTracker=tT(t))}function p0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=f0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $h(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function m0(t,e){e=e.checked,e!=null&&Sf(t,"checked",e,!1)}function Mh(t,e){m0(t,e);var n=er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bh(t,e.type,n):e.hasOwnProperty("defaultValue")&&bh(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Km(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bh(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xs=Array.isArray;function vi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+er(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(xs(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:er(n)}}function g0(t,e){var n=er(e.value),r=er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function y0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?y0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ya,v0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function no(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nT=["Webkit","ms","Moz","O"];Object.keys(Fs).forEach(function(t){nT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fs[e]=Fs[t]})});function w0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fs.hasOwnProperty(t)&&Fs[t]?(""+e).trim():e+"px"}function E0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=w0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rT=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uh(t,e){if(e){if(rT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function Vh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bh=null;function kf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zh=null,wi=null,Ei=null;function Ym(t){if(t=Fo(t)){if(typeof zh!="function")throw Error(T(280));var e=t.stateNode;e&&(e=wu(e),zh(t.stateNode,t.type,e))}}function _0(t){wi?Ei?Ei.push(t):Ei=[t]:wi=t}function S0(){if(wi){var t=wi,e=Ei;if(Ei=wi=null,Ym(t),e)for(t=0;t<e.length;t++)Ym(e[t])}}function I0(t,e){return t(e)}function T0(){}var Ic=!1;function C0(t,e,n){if(Ic)return t(e,n);Ic=!0;try{return I0(t,e,n)}finally{Ic=!1,(wi!==null||Ei!==null)&&(T0(),S0())}}function ro(t,e){var n=t.stateNode;if(n===null)return null;var r=wu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var Hh=!1;if(fn)try{var ms={};Object.defineProperty(ms,"passive",{get:function(){Hh=!0}}),window.addEventListener("test",ms,ms),window.removeEventListener("test",ms,ms)}catch{Hh=!1}function iT(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Us=!1,pl=null,ml=!1,Wh=null,sT={onError:function(t){Us=!0,pl=t}};function oT(t,e,n,r,i,s,o,a,l){Us=!1,pl=null,iT.apply(sT,arguments)}function aT(t,e,n,r,i,s,o,a,l){if(oT.apply(this,arguments),Us){if(Us){var u=pl;Us=!1,pl=null}else throw Error(T(198));ml||(ml=!0,Wh=u)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function k0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xm(t){if(Kr(t)!==t)throw Error(T(188))}function lT(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Xm(i),t;if(s===r)return Xm(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function x0(t){return t=lT(t),t!==null?N0(t):null}function N0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=N0(t);if(e!==null)return e;t=t.sibling}return null}var A0=mt.unstable_scheduleCallback,Jm=mt.unstable_cancelCallback,uT=mt.unstable_shouldYield,cT=mt.unstable_requestPaint,fe=mt.unstable_now,hT=mt.unstable_getCurrentPriorityLevel,xf=mt.unstable_ImmediatePriority,R0=mt.unstable_UserBlockingPriority,gl=mt.unstable_NormalPriority,dT=mt.unstable_LowPriority,P0=mt.unstable_IdlePriority,mu=null,Kt=null;function fT(t){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(mu,t,void 0,(t.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:gT,pT=Math.log,mT=Math.LN2;function gT(t){return t>>>=0,t===0?32:31-(pT(t)/mT|0)|0}var va=64,wa=4194304;function Ns(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ns(a):(s&=o,s!==0&&(r=Ns(s)))}else o=n&~i,o!==0?r=Ns(o):s!==0&&(r=Ns(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ot(e),i=1<<n,r|=t[n],e&=~i;return r}function yT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ot(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=yT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function qh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function D0(){var t=va;return va<<=1,!(va&4194240)&&(va=64),t}function Tc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ot(e),t[e]=n}function wT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ot(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Nf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ot(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function O0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var L0,Af,$0,M0,b0,Kh=!1,Ea=[],Un=null,Vn=null,Bn=null,io=new Map,so=new Map,Rn=[],ET="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zm(t,e){switch(t){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(e.pointerId)}}function gs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Fo(e),e!==null&&Af(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function _T(t,e,n,r,i){switch(e){case"focusin":return Un=gs(Un,t,e,n,r,i),!0;case"dragenter":return Vn=gs(Vn,t,e,n,r,i),!0;case"mouseover":return Bn=gs(Bn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return io.set(s,gs(io.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,so.set(s,gs(so.get(s)||null,t,e,n,r,i)),!0}return!1}function j0(t){var e=_r(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=k0(n),e!==null){t.blockedOn=e,b0(t.priority,function(){$0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Bh=r,n.target.dispatchEvent(r),Bh=null}else return e=Fo(n),e!==null&&Af(e),t.blockedOn=n,!1;e.shift()}return!0}function eg(t,e,n){Qa(t)&&n.delete(e)}function ST(){Kh=!1,Un!==null&&Qa(Un)&&(Un=null),Vn!==null&&Qa(Vn)&&(Vn=null),Bn!==null&&Qa(Bn)&&(Bn=null),io.forEach(eg),so.forEach(eg)}function ys(t,e){t.blockedOn===e&&(t.blockedOn=null,Kh||(Kh=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,ST)))}function oo(t){function e(i){return ys(i,t)}if(0<Ea.length){ys(Ea[0],t);for(var n=1;n<Ea.length;n++){var r=Ea[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Un!==null&&ys(Un,t),Vn!==null&&ys(Vn,t),Bn!==null&&ys(Bn,t),io.forEach(e),so.forEach(e),n=0;n<Rn.length;n++)r=Rn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Rn.length&&(n=Rn[0],n.blockedOn===null);)j0(n),n.blockedOn===null&&Rn.shift()}var _i=Sn.ReactCurrentBatchConfig,vl=!0;function IT(t,e,n,r){var i=Y,s=_i.transition;_i.transition=null;try{Y=1,Rf(t,e,n,r)}finally{Y=i,_i.transition=s}}function TT(t,e,n,r){var i=Y,s=_i.transition;_i.transition=null;try{Y=4,Rf(t,e,n,r)}finally{Y=i,_i.transition=s}}function Rf(t,e,n,r){if(vl){var i=Gh(t,e,n,r);if(i===null)Lc(t,e,r,wl,n),Zm(t,r);else if(_T(i,t,e,n,r))r.stopPropagation();else if(Zm(t,r),e&4&&-1<ET.indexOf(t)){for(;i!==null;){var s=Fo(i);if(s!==null&&L0(s),s=Gh(t,e,n,r),s===null&&Lc(t,e,r,wl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Lc(t,e,r,null,n)}}var wl=null;function Gh(t,e,n,r){if(wl=null,t=kf(r),t=_r(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=k0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wl=t,null}function F0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hT()){case xf:return 1;case R0:return 4;case gl:case dT:return 16;case P0:return 536870912;default:return 16}default:return 16}}var Mn=null,Pf=null,Ya=null;function U0(){if(Ya)return Ya;var t,e=Pf,n=e.length,r,i="value"in Mn?Mn.value:Mn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ya=i.slice(t,1<r?1-r:void 0)}function Xa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _a(){return!0}function tg(){return!1}function vt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_a:tg,this.isPropagationStopped=tg,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),e}var Yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Df=vt(Yi),jo=le({},Yi,{view:0,detail:0}),CT=vt(jo),Cc,kc,vs,gu=le({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vs&&(vs&&t.type==="mousemove"?(Cc=t.screenX-vs.screenX,kc=t.screenY-vs.screenY):kc=Cc=0,vs=t),Cc)},movementY:function(t){return"movementY"in t?t.movementY:kc}}),ng=vt(gu),kT=le({},gu,{dataTransfer:0}),xT=vt(kT),NT=le({},jo,{relatedTarget:0}),xc=vt(NT),AT=le({},Yi,{animationName:0,elapsedTime:0,pseudoElement:0}),RT=vt(AT),PT=le({},Yi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),DT=vt(PT),OT=le({},Yi,{data:0}),rg=vt(OT),LT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$T={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=MT[t])?!!e[t]:!1}function Of(){return bT}var jT=le({},jo,{key:function(t){if(t.key){var e=LT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$T[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Of,charCode:function(t){return t.type==="keypress"?Xa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),FT=vt(jT),UT=le({},gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ig=vt(UT),VT=le({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Of}),BT=vt(VT),zT=le({},Yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),HT=vt(zT),WT=le({},gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qT=vt(WT),KT=[9,13,27,32],Lf=fn&&"CompositionEvent"in window,Vs=null;fn&&"documentMode"in document&&(Vs=document.documentMode);var GT=fn&&"TextEvent"in window&&!Vs,V0=fn&&(!Lf||Vs&&8<Vs&&11>=Vs),sg=String.fromCharCode(32),og=!1;function B0(t,e){switch(t){case"keyup":return KT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function z0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var oi=!1;function QT(t,e){switch(t){case"compositionend":return z0(e);case"keypress":return e.which!==32?null:(og=!0,sg);case"textInput":return t=e.data,t===sg&&og?null:t;default:return null}}function YT(t,e){if(oi)return t==="compositionend"||!Lf&&B0(t,e)?(t=U0(),Ya=Pf=Mn=null,oi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return V0&&e.locale!=="ko"?null:e.data;default:return null}}var XT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ag(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!XT[t.type]:e==="textarea"}function H0(t,e,n,r){_0(r),e=El(e,"onChange"),0<e.length&&(n=new Df("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Bs=null,ao=null;function JT(t){t1(t,0)}function yu(t){var e=ui(t);if(p0(e))return t}function ZT(t,e){if(t==="change")return e}var W0=!1;if(fn){var Nc;if(fn){var Ac="oninput"in document;if(!Ac){var lg=document.createElement("div");lg.setAttribute("oninput","return;"),Ac=typeof lg.oninput=="function"}Nc=Ac}else Nc=!1;W0=Nc&&(!document.documentMode||9<document.documentMode)}function ug(){Bs&&(Bs.detachEvent("onpropertychange",q0),ao=Bs=null)}function q0(t){if(t.propertyName==="value"&&yu(ao)){var e=[];H0(e,ao,t,kf(t)),C0(JT,e)}}function eC(t,e,n){t==="focusin"?(ug(),Bs=e,ao=n,Bs.attachEvent("onpropertychange",q0)):t==="focusout"&&ug()}function tC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yu(ao)}function nC(t,e){if(t==="click")return yu(e)}function rC(t,e){if(t==="input"||t==="change")return yu(e)}function iC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Mt=typeof Object.is=="function"?Object.is:iC;function lo(t,e){if(Mt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rh.call(e,i)||!Mt(t[i],e[i]))return!1}return!0}function cg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hg(t,e){var n=cg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cg(n)}}function K0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?K0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function G0(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function $f(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sC(t){var e=G0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&K0(n.ownerDocument.documentElement,n)){if(r!==null&&$f(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=hg(n,s);var o=hg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oC=fn&&"documentMode"in document&&11>=document.documentMode,ai=null,Qh=null,zs=null,Yh=!1;function dg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yh||ai==null||ai!==fl(r)||(r=ai,"selectionStart"in r&&$f(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zs&&lo(zs,r)||(zs=r,r=El(Qh,"onSelect"),0<r.length&&(e=new Df("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ai)))}function Sa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var li={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Rc={},Q0={};fn&&(Q0=document.createElement("div").style,"AnimationEvent"in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),"TransitionEvent"in window||delete li.transitionend.transition);function vu(t){if(Rc[t])return Rc[t];if(!li[t])return t;var e=li[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Q0)return Rc[t]=e[n];return t}var Y0=vu("animationend"),X0=vu("animationiteration"),J0=vu("animationstart"),Z0=vu("transitionend"),e1=new Map,fg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){e1.set(t,e),qr(e,[t])}for(var Pc=0;Pc<fg.length;Pc++){var Dc=fg[Pc],aC=Dc.toLowerCase(),lC=Dc[0].toUpperCase()+Dc.slice(1);sr(aC,"on"+lC)}sr(Y0,"onAnimationEnd");sr(X0,"onAnimationIteration");sr(J0,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(Z0,"onTransitionEnd");Ri("onMouseEnter",["mouseout","mouseover"]);Ri("onMouseLeave",["mouseout","mouseover"]);Ri("onPointerEnter",["pointerout","pointerover"]);Ri("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var As="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uC=new Set("cancel close invalid load scroll toggle".split(" ").concat(As));function pg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,aT(r,e,void 0,t),t.currentTarget=null}function t1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;pg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;pg(i,a,u),s=l}}}if(ml)throw t=Wh,ml=!1,Wh=null,t}function ee(t,e){var n=e[td];n===void 0&&(n=e[td]=new Set);var r=t+"__bubble";n.has(r)||(n1(e,t,2,!1),n.add(r))}function Oc(t,e,n){var r=0;e&&(r|=4),n1(n,t,r,e)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function uo(t){if(!t[Ia]){t[Ia]=!0,u0.forEach(function(n){n!=="selectionchange"&&(uC.has(n)||Oc(n,!1,t),Oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ia]||(e[Ia]=!0,Oc("selectionchange",!1,e))}}function n1(t,e,n,r){switch(F0(e)){case 1:var i=IT;break;case 4:i=TT;break;default:i=Rf}n=i.bind(null,e,n,t),i=void 0,!Hh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Lc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=_r(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}C0(function(){var u=s,c=kf(n),h=[];e:{var d=e1.get(t);if(d!==void 0){var m=Df,v=t;switch(t){case"keypress":if(Xa(n)===0)break e;case"keydown":case"keyup":m=FT;break;case"focusin":v="focus",m=xc;break;case"focusout":v="blur",m=xc;break;case"beforeblur":case"afterblur":m=xc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ng;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=xT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=BT;break;case Y0:case X0:case J0:m=RT;break;case Z0:m=HT;break;case"scroll":m=CT;break;case"wheel":m=qT;break;case"copy":case"cut":case"paste":m=DT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ig}var w=(e&4)!==0,S=!w&&t==="scroll",g=w?d!==null?d+"Capture":null:d;w=[];for(var f=u,y;f!==null;){y=f;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,g!==null&&(E=ro(f,g),E!=null&&w.push(co(f,E,y)))),S)break;f=f.return}0<w.length&&(d=new m(d,v,null,n,c),h.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Bh&&(v=n.relatedTarget||n.fromElement)&&(_r(v)||v[pn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?_r(v):null,v!==null&&(S=Kr(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(w=ng,E="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=ig,E="onPointerLeave",g="onPointerEnter",f="pointer"),S=m==null?d:ui(m),y=v==null?d:ui(v),d=new w(E,f+"leave",m,n,c),d.target=S,d.relatedTarget=y,E=null,_r(c)===u&&(w=new w(g,f+"enter",v,n,c),w.target=y,w.relatedTarget=S,E=w),S=E,m&&v)t:{for(w=m,g=v,f=0,y=w;y;y=Zr(y))f++;for(y=0,E=g;E;E=Zr(E))y++;for(;0<f-y;)w=Zr(w),f--;for(;0<y-f;)g=Zr(g),y--;for(;f--;){if(w===g||g!==null&&w===g.alternate)break t;w=Zr(w),g=Zr(g)}w=null}else w=null;m!==null&&mg(h,d,m,w,!1),v!==null&&S!==null&&mg(h,S,v,w,!0)}}e:{if(d=u?ui(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var k=ZT;else if(ag(d))if(W0)k=rC;else{k=tC;var x=eC}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=nC);if(k&&(k=k(t,u))){H0(h,k,n,c);break e}x&&x(t,d,u),t==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&bh(d,"number",d.value)}switch(x=u?ui(u):window,t){case"focusin":(ag(x)||x.contentEditable==="true")&&(ai=x,Qh=u,zs=null);break;case"focusout":zs=Qh=ai=null;break;case"mousedown":Yh=!0;break;case"contextmenu":case"mouseup":case"dragend":Yh=!1,dg(h,n,c);break;case"selectionchange":if(oC)break;case"keydown":case"keyup":dg(h,n,c)}var A;if(Lf)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else oi?B0(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(V0&&n.locale!=="ko"&&(oi||O!=="onCompositionStart"?O==="onCompositionEnd"&&oi&&(A=U0()):(Mn=c,Pf="value"in Mn?Mn.value:Mn.textContent,oi=!0)),x=El(u,O),0<x.length&&(O=new rg(O,t,null,n,c),h.push({event:O,listeners:x}),A?O.data=A:(A=z0(n),A!==null&&(O.data=A)))),(A=GT?QT(t,n):YT(t,n))&&(u=El(u,"onBeforeInput"),0<u.length&&(c=new rg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=A))}t1(h,e)})}function co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function El(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ro(t,n),s!=null&&r.unshift(co(t,s,i)),s=ro(t,e),s!=null&&r.push(co(t,s,i))),t=t.return}return r}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ro(n,s),l!=null&&o.unshift(co(n,l,a))):i||(l=ro(n,s),l!=null&&o.push(co(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cC=/\r\n?/g,hC=/\u0000|\uFFFD/g;function gg(t){return(typeof t=="string"?t:""+t).replace(cC,`
`).replace(hC,"")}function Ta(t,e,n){if(e=gg(e),gg(t)!==e&&n)throw Error(T(425))}function _l(){}var Xh=null,Jh=null;function Zh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ed=typeof setTimeout=="function"?setTimeout:void 0,dC=typeof clearTimeout=="function"?clearTimeout:void 0,yg=typeof Promise=="function"?Promise:void 0,fC=typeof queueMicrotask=="function"?queueMicrotask:typeof yg<"u"?function(t){return yg.resolve(null).then(t).catch(pC)}:ed;function pC(t){setTimeout(function(){throw t})}function $c(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),oo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);oo(e)}function zn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xi=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Xi,ho="__reactProps$"+Xi,pn="__reactContainer$"+Xi,td="__reactEvents$"+Xi,mC="__reactListeners$"+Xi,gC="__reactHandles$"+Xi;function _r(t){var e=t[Ht];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pn]||n[Ht]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vg(t);t!==null;){if(n=t[Ht])return n;t=vg(t)}return e}t=n,n=t.parentNode}return null}function Fo(t){return t=t[Ht]||t[pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ui(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function wu(t){return t[ho]||null}var nd=[],ci=-1;function or(t){return{current:t}}function ne(t){0>ci||(t.current=nd[ci],nd[ci]=null,ci--)}function Z(t,e){ci++,nd[ci]=t.current,t.current=e}var tr={},We=or(tr),st=or(!1),Lr=tr;function Pi(t,e){var n=t.type.contextTypes;if(!n)return tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ot(t){return t=t.childContextTypes,t!=null}function Sl(){ne(st),ne(We)}function wg(t,e,n){if(We.current!==tr)throw Error(T(168));Z(We,e),Z(st,n)}function r1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,eT(t)||"Unknown",i));return le({},n,r)}function Il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Lr=We.current,Z(We,t),Z(st,st.current),!0}function Eg(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=r1(t,e,Lr),r.__reactInternalMemoizedMergedChildContext=t,ne(st),ne(We),Z(We,t)):ne(st),Z(st,n)}var rn=null,Eu=!1,Mc=!1;function i1(t){rn===null?rn=[t]:rn.push(t)}function yC(t){Eu=!0,i1(t)}function ar(){if(!Mc&&rn!==null){Mc=!0;var t=0,e=Y;try{var n=rn;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}rn=null,Eu=!1}catch(i){throw rn!==null&&(rn=rn.slice(t+1)),A0(xf,ar),i}finally{Y=e,Mc=!1}}return null}var hi=[],di=0,Tl=null,Cl=0,Et=[],_t=0,$r=null,sn=1,on="";function gr(t,e){hi[di++]=Cl,hi[di++]=Tl,Tl=t,Cl=e}function s1(t,e,n){Et[_t++]=sn,Et[_t++]=on,Et[_t++]=$r,$r=t;var r=sn;t=on;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var s=32-Ot(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,sn=1<<32-Ot(e)+i|n<<i|r,on=s+t}else sn=1<<s|n<<i|r,on=t}function Mf(t){t.return!==null&&(gr(t,1),s1(t,1,0))}function bf(t){for(;t===Tl;)Tl=hi[--di],hi[di]=null,Cl=hi[--di],hi[di]=null;for(;t===$r;)$r=Et[--_t],Et[_t]=null,on=Et[--_t],Et[_t]=null,sn=Et[--_t],Et[_t]=null}var ft=null,ht=null,ie=!1,Dt=null;function o1(t,e){var n=It(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _g(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ft=t,ht=zn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ft=t,ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$r!==null?{id:sn,overflow:on}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=It(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ft=t,ht=null,!0):!1;default:return!1}}function rd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function id(t){if(ie){var e=ht;if(e){var n=e;if(!_g(t,e)){if(rd(t))throw Error(T(418));e=zn(n.nextSibling);var r=ft;e&&_g(t,e)?o1(r,n):(t.flags=t.flags&-4097|2,ie=!1,ft=t)}}else{if(rd(t))throw Error(T(418));t.flags=t.flags&-4097|2,ie=!1,ft=t}}}function Sg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ft=t}function Ca(t){if(t!==ft)return!1;if(!ie)return Sg(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zh(t.type,t.memoizedProps)),e&&(e=ht)){if(rd(t))throw a1(),Error(T(418));for(;e;)o1(t,e),e=zn(e.nextSibling)}if(Sg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ht=zn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ht=null}}else ht=ft?zn(t.stateNode.nextSibling):null;return!0}function a1(){for(var t=ht;t;)t=zn(t.nextSibling)}function Di(){ht=ft=null,ie=!1}function jf(t){Dt===null?Dt=[t]:Dt.push(t)}var vC=Sn.ReactCurrentBatchConfig;function Rt(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var kl=or(null),xl=null,fi=null,Ff=null;function Uf(){Ff=fi=xl=null}function Vf(t){var e=kl.current;ne(kl),t._currentValue=e}function sd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Si(t,e){xl=t,Ff=fi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(it=!0),t.firstContext=null)}function kt(t){var e=t._currentValue;if(Ff!==t)if(t={context:t,memoizedValue:e,next:null},fi===null){if(xl===null)throw Error(T(308));fi=t,xl.dependencies={lanes:0,firstContext:t}}else fi=fi.next=t;return e}var Sr=null;function Bf(t){Sr===null?Sr=[t]:Sr.push(t)}function l1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bf(e)):(n.next=i.next,i.next=n),e.interleaved=n,mn(t,r)}function mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Nn=!1;function zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,mn(t,n)}return i=r.interleaved,i===null?(e.next=e,Bf(r)):(e.next=i.next,i.next=e),r.interleaved=e,mn(t,n)}function Ja(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nf(t,n)}}function Ig(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nl(t,e,n,r){var i=t.updateQueue;Nn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(d=e,m=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(m,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break e;h=le({},h,d);break e;case 2:Nn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);br|=o,t.lanes=o,t.memoizedState=h}}function Tg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var c1=new l0.Component().refs;function od(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _u={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Xe(),i=qn(t),s=hn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Hn(t,s,i),e!==null&&(Lt(e,t,i,r),Ja(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Xe(),i=qn(t),s=hn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hn(t,s,i),e!==null&&(Lt(e,t,i,r),Ja(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xe(),r=qn(t),i=hn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Hn(t,i,r),e!==null&&(Lt(e,t,r,n),Ja(e,t,r))}};function Cg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!lo(n,r)||!lo(i,s):!0}function h1(t,e,n){var r=!1,i=tr,s=e.contextType;return typeof s=="object"&&s!==null?s=kt(s):(i=ot(e)?Lr:We.current,r=e.contextTypes,s=(r=r!=null)?Pi(t,i):tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_u,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function kg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_u.enqueueReplaceState(e,e.state,null)}function ad(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=c1,zf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=kt(s):(s=ot(e)?Lr:We.current,i.context=Pi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(od(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_u.enqueueReplaceState(i,i.state,null),Nl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===c1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function ka(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xg(t){var e=t._init;return e(t._payload)}function d1(t){function e(g,f){if(t){var y=g.deletions;y===null?(g.deletions=[f],g.flags|=16):y.push(f)}}function n(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=Kn(g,f),g.index=0,g.sibling=null,g}function s(g,f,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<f?(g.flags|=2,f):y):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,f,y,E){return f===null||f.tag!==6?(f=zc(y,g.mode,E),f.return=g,f):(f=i(f,y),f.return=g,f)}function l(g,f,y,E){var k=y.type;return k===si?c(g,f,y.props.children,E,y.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===xn&&xg(k)===f.type)?(E=i(f,y.props),E.ref=ws(g,f,y),E.return=g,E):(E=il(y.type,y.key,y.props,null,g.mode,E),E.ref=ws(g,f,y),E.return=g,E)}function u(g,f,y,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Hc(y,g.mode,E),f.return=g,f):(f=i(f,y.children||[]),f.return=g,f)}function c(g,f,y,E,k){return f===null||f.tag!==7?(f=Ar(y,g.mode,E,k),f.return=g,f):(f=i(f,y),f.return=g,f)}function h(g,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=zc(""+f,g.mode,y),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ma:return y=il(f.type,f.key,f.props,null,g.mode,y),y.ref=ws(g,null,f),y.return=g,y;case ii:return f=Hc(f,g.mode,y),f.return=g,f;case xn:var E=f._init;return h(g,E(f._payload),y)}if(xs(f)||ps(f))return f=Ar(f,g.mode,y,null),f.return=g,f;ka(g,f)}return null}function d(g,f,y,E){var k=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:a(g,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ma:return y.key===k?l(g,f,y,E):null;case ii:return y.key===k?u(g,f,y,E):null;case xn:return k=y._init,d(g,f,k(y._payload),E)}if(xs(y)||ps(y))return k!==null?null:c(g,f,y,E,null);ka(g,y)}return null}function m(g,f,y,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(y)||null,a(f,g,""+E,k);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ma:return g=g.get(E.key===null?y:E.key)||null,l(f,g,E,k);case ii:return g=g.get(E.key===null?y:E.key)||null,u(f,g,E,k);case xn:var x=E._init;return m(g,f,y,x(E._payload),k)}if(xs(E)||ps(E))return g=g.get(y)||null,c(f,g,E,k,null);ka(f,E)}return null}function v(g,f,y,E){for(var k=null,x=null,A=f,O=f=0,J=null;A!==null&&O<y.length;O++){A.index>O?(J=A,A=null):J=A.sibling;var z=d(g,A,y[O],E);if(z===null){A===null&&(A=J);break}t&&A&&z.alternate===null&&e(g,A),f=s(z,f,O),x===null?k=z:x.sibling=z,x=z,A=J}if(O===y.length)return n(g,A),ie&&gr(g,O),k;if(A===null){for(;O<y.length;O++)A=h(g,y[O],E),A!==null&&(f=s(A,f,O),x===null?k=A:x.sibling=A,x=A);return ie&&gr(g,O),k}for(A=r(g,A);O<y.length;O++)J=m(A,g,O,y[O],E),J!==null&&(t&&J.alternate!==null&&A.delete(J.key===null?O:J.key),f=s(J,f,O),x===null?k=J:x.sibling=J,x=J);return t&&A.forEach(function(Nt){return e(g,Nt)}),ie&&gr(g,O),k}function w(g,f,y,E){var k=ps(y);if(typeof k!="function")throw Error(T(150));if(y=k.call(y),y==null)throw Error(T(151));for(var x=k=null,A=f,O=f=0,J=null,z=y.next();A!==null&&!z.done;O++,z=y.next()){A.index>O?(J=A,A=null):J=A.sibling;var Nt=d(g,A,z.value,E);if(Nt===null){A===null&&(A=J);break}t&&A&&Nt.alternate===null&&e(g,A),f=s(Nt,f,O),x===null?k=Nt:x.sibling=Nt,x=Nt,A=J}if(z.done)return n(g,A),ie&&gr(g,O),k;if(A===null){for(;!z.done;O++,z=y.next())z=h(g,z.value,E),z!==null&&(f=s(z,f,O),x===null?k=z:x.sibling=z,x=z);return ie&&gr(g,O),k}for(A=r(g,A);!z.done;O++,z=y.next())z=m(A,g,O,z.value,E),z!==null&&(t&&z.alternate!==null&&A.delete(z.key===null?O:z.key),f=s(z,f,O),x===null?k=z:x.sibling=z,x=z);return t&&A.forEach(function(ds){return e(g,ds)}),ie&&gr(g,O),k}function S(g,f,y,E){if(typeof y=="object"&&y!==null&&y.type===si&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ma:e:{for(var k=y.key,x=f;x!==null;){if(x.key===k){if(k=y.type,k===si){if(x.tag===7){n(g,x.sibling),f=i(x,y.props.children),f.return=g,g=f;break e}}else if(x.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===xn&&xg(k)===x.type){n(g,x.sibling),f=i(x,y.props),f.ref=ws(g,x,y),f.return=g,g=f;break e}n(g,x);break}else e(g,x);x=x.sibling}y.type===si?(f=Ar(y.props.children,g.mode,E,y.key),f.return=g,g=f):(E=il(y.type,y.key,y.props,null,g.mode,E),E.ref=ws(g,f,y),E.return=g,g=E)}return o(g);case ii:e:{for(x=y.key;f!==null;){if(f.key===x)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(g,f.sibling),f=i(f,y.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else e(g,f);f=f.sibling}f=Hc(y,g.mode,E),f.return=g,g=f}return o(g);case xn:return x=y._init,S(g,f,x(y._payload),E)}if(xs(y))return v(g,f,y,E);if(ps(y))return w(g,f,y,E);ka(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,y),f.return=g,g=f):(n(g,f),f=zc(y,g.mode,E),f.return=g,g=f),o(g)):n(g,f)}return S}var Oi=d1(!0),f1=d1(!1),Uo={},Gt=or(Uo),fo=or(Uo),po=or(Uo);function Ir(t){if(t===Uo)throw Error(T(174));return t}function Hf(t,e){switch(Z(po,e),Z(fo,t),Z(Gt,Uo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fh(e,t)}ne(Gt),Z(Gt,e)}function Li(){ne(Gt),ne(fo),ne(po)}function p1(t){Ir(po.current);var e=Ir(Gt.current),n=Fh(e,t.type);e!==n&&(Z(fo,t),Z(Gt,n))}function Wf(t){fo.current===t&&(ne(Gt),ne(fo))}var oe=or(0);function Al(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bc=[];function qf(){for(var t=0;t<bc.length;t++)bc[t]._workInProgressVersionPrimary=null;bc.length=0}var Za=Sn.ReactCurrentDispatcher,jc=Sn.ReactCurrentBatchConfig,Mr=0,ae=null,Ee=null,Ce=null,Rl=!1,Hs=!1,mo=0,wC=0;function $e(){throw Error(T(321))}function Kf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Mt(t[n],e[n]))return!1;return!0}function Gf(t,e,n,r,i,s){if(Mr=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Za.current=t===null||t.memoizedState===null?IC:TC,t=n(r,i),Hs){s=0;do{if(Hs=!1,mo=0,25<=s)throw Error(T(301));s+=1,Ce=Ee=null,e.updateQueue=null,Za.current=CC,t=n(r,i)}while(Hs)}if(Za.current=Pl,e=Ee!==null&&Ee.next!==null,Mr=0,Ce=Ee=ae=null,Rl=!1,e)throw Error(T(300));return t}function Qf(){var t=mo!==0;return mo=0,t}function zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?ae.memoizedState=Ce=t:Ce=Ce.next=t,Ce}function xt(){if(Ee===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=Ee.next;var e=Ce===null?ae.memoizedState:Ce.next;if(e!==null)Ce=e,Ee=t;else{if(t===null)throw Error(T(310));Ee=t,t={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ce===null?ae.memoizedState=Ce=t:Ce=Ce.next=t}return Ce}function go(t,e){return typeof e=="function"?e(t):e}function Fc(t){var e=xt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=Ee,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Mr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ae.lanes|=c,br|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Mt(r,e.memoizedState)||(it=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,br|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uc(t){var e=xt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Mt(s,e.memoizedState)||(it=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function m1(){}function g1(t,e){var n=ae,r=xt(),i=e(),s=!Mt(r.memoizedState,i);if(s&&(r.memoizedState=i,it=!0),r=r.queue,Yf(w1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,yo(9,v1.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(T(349));Mr&30||y1(n,e,i)}return i}function y1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function v1(t,e,n,r){e.value=n,e.getSnapshot=r,E1(e)&&_1(t)}function w1(t,e,n){return n(function(){E1(e)&&_1(t)})}function E1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Mt(t,n)}catch{return!0}}function _1(t){var e=mn(t,1);e!==null&&Lt(e,t,1,-1)}function Ng(t){var e=zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:t},e.queue=t,t=t.dispatch=SC.bind(null,ae,t),[e.memoizedState,t]}function yo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function S1(){return xt().memoizedState}function el(t,e,n,r){var i=zt();ae.flags|=t,i.memoizedState=yo(1|e,n,void 0,r===void 0?null:r)}function Su(t,e,n,r){var i=xt();r=r===void 0?null:r;var s=void 0;if(Ee!==null){var o=Ee.memoizedState;if(s=o.destroy,r!==null&&Kf(r,o.deps)){i.memoizedState=yo(e,n,s,r);return}}ae.flags|=t,i.memoizedState=yo(1|e,n,s,r)}function Ag(t,e){return el(8390656,8,t,e)}function Yf(t,e){return Su(2048,8,t,e)}function I1(t,e){return Su(4,2,t,e)}function T1(t,e){return Su(4,4,t,e)}function C1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function k1(t,e,n){return n=n!=null?n.concat([t]):null,Su(4,4,C1.bind(null,e,t),n)}function Xf(){}function x1(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function N1(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function A1(t,e,n){return Mr&21?(Mt(n,e)||(n=D0(),ae.lanes|=n,br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,it=!0),t.memoizedState=n)}function EC(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=jc.transition;jc.transition={};try{t(!1),e()}finally{Y=n,jc.transition=r}}function R1(){return xt().memoizedState}function _C(t,e,n){var r=qn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},P1(t))D1(e,n);else if(n=l1(t,e,n,r),n!==null){var i=Xe();Lt(n,t,r,i),O1(n,e,r)}}function SC(t,e,n){var r=qn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(P1(t))D1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Mt(a,o)){var l=e.interleaved;l===null?(i.next=i,Bf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=l1(t,e,i,r),n!==null&&(i=Xe(),Lt(n,t,r,i),O1(n,e,r))}}function P1(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function D1(t,e){Hs=Rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function O1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nf(t,n)}}var Pl={readContext:kt,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},IC={readContext:kt,useCallback:function(t,e){return zt().memoizedState=[t,e===void 0?null:e],t},useContext:kt,useEffect:Ag,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,el(4194308,4,C1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return el(4194308,4,t,e)},useInsertionEffect:function(t,e){return el(4,2,t,e)},useMemo:function(t,e){var n=zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=_C.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=zt();return t={current:t},e.memoizedState=t},useState:Ng,useDebugValue:Xf,useDeferredValue:function(t){return zt().memoizedState=t},useTransition:function(){var t=Ng(!1),e=t[0];return t=EC.bind(null,t[1]),zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=zt();if(ie){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),ke===null)throw Error(T(349));Mr&30||y1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ag(w1.bind(null,r,s,t),[t]),r.flags|=2048,yo(9,v1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=zt(),e=ke.identifierPrefix;if(ie){var n=on,r=sn;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=mo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TC={readContext:kt,useCallback:x1,useContext:kt,useEffect:Yf,useImperativeHandle:k1,useInsertionEffect:I1,useLayoutEffect:T1,useMemo:N1,useReducer:Fc,useRef:S1,useState:function(){return Fc(go)},useDebugValue:Xf,useDeferredValue:function(t){var e=xt();return A1(e,Ee.memoizedState,t)},useTransition:function(){var t=Fc(go)[0],e=xt().memoizedState;return[t,e]},useMutableSource:m1,useSyncExternalStore:g1,useId:R1,unstable_isNewReconciler:!1},CC={readContext:kt,useCallback:x1,useContext:kt,useEffect:Yf,useImperativeHandle:k1,useInsertionEffect:I1,useLayoutEffect:T1,useMemo:N1,useReducer:Uc,useRef:S1,useState:function(){return Uc(go)},useDebugValue:Xf,useDeferredValue:function(t){var e=xt();return Ee===null?e.memoizedState=t:A1(e,Ee.memoizedState,t)},useTransition:function(){var t=Uc(go)[0],e=xt().memoizedState;return[t,e]},useMutableSource:m1,useSyncExternalStore:g1,useId:R1,unstable_isNewReconciler:!1};function $i(t,e){try{var n="",r=e;do n+=ZI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Vc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ld(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kC=typeof WeakMap=="function"?WeakMap:Map;function L1(t,e,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ol||(Ol=!0,vd=r),ld(t,e)},n}function $1(t,e,n){n=hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ld(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ld(t,e),typeof r!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=UC.bind(null,t,e,n),e.then(t,t))}function Pg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hn(-1,1),e.tag=2,Hn(n,e,1))),n.lanes|=1),t)}var xC=Sn.ReactCurrentOwner,it=!1;function Ge(t,e,n,r){e.child=t===null?f1(e,null,n,r):Oi(e,t.child,n,r)}function Og(t,e,n,r,i){n=n.render;var s=e.ref;return Si(e,i),r=Gf(t,e,n,r,s,i),n=Qf(),t!==null&&!it?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(ie&&n&&Mf(e),e.flags|=1,Ge(t,e,r,i),e.child)}function Lg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,M1(t,e,s,r,i)):(t=il(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:lo,n(o,r)&&t.ref===e.ref)return gn(t,e,i)}return e.flags|=1,t=Kn(s,r),t.ref=e.ref,t.return=e,e.child=t}function M1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(lo(s,r)&&t.ref===e.ref)if(it=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(it=!0);else return e.lanes=t.lanes,gn(t,e,i)}return ud(t,e,n,r,i)}function b1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(mi,ct),ct|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(mi,ct),ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(mi,ct),ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(mi,ct),ct|=r;return Ge(t,e,i,n),e.child}function j1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ud(t,e,n,r,i){var s=ot(n)?Lr:We.current;return s=Pi(e,s),Si(e,i),n=Gf(t,e,n,r,s,i),r=Qf(),t!==null&&!it?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(ie&&r&&Mf(e),e.flags|=1,Ge(t,e,n,i),e.child)}function $g(t,e,n,r,i){if(ot(n)){var s=!0;Il(e)}else s=!1;if(Si(e,i),e.stateNode===null)tl(t,e),h1(e,n,r),ad(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=kt(u):(u=ot(n)?Lr:We.current,u=Pi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&kg(e,o,r,u),Nn=!1;var d=e.memoizedState;o.state=d,Nl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||st.current||Nn?(typeof c=="function"&&(od(e,n,c,r),l=e.memoizedState),(a=Nn||Cg(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,u1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Rt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=kt(l):(l=ot(n)?Lr:We.current,l=Pi(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&kg(e,o,r,l),Nn=!1,d=e.memoizedState,o.state=d,Nl(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||st.current||Nn?(typeof m=="function"&&(od(e,n,m,r),v=e.memoizedState),(u=Nn||Cg(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return cd(t,e,n,r,s,i)}function cd(t,e,n,r,i,s){j1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Eg(e,n,!1),gn(t,e,s);r=e.stateNode,xC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Oi(e,t.child,null,s),e.child=Oi(e,null,a,s)):Ge(t,e,a,s),e.memoizedState=r.state,i&&Eg(e,n,!0),e.child}function F1(t){var e=t.stateNode;e.pendingContext?wg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wg(t,e.context,!1),Hf(t,e.containerInfo)}function Mg(t,e,n,r,i){return Di(),jf(i),e.flags|=256,Ge(t,e,n,r),e.child}var hd={dehydrated:null,treeContext:null,retryLane:0};function dd(t){return{baseLanes:t,cachePool:null,transitions:null}}function U1(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(oe,i&1),t===null)return id(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cu(o,r,0,null),t=Ar(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=dd(n),e.memoizedState=hd,t):Jf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return NC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Kn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Kn(a,s):(s=Ar(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?dd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hd,r}return s=t.child,t=s.sibling,r=Kn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jf(t,e){return e=Cu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xa(t,e,n,r){return r!==null&&jf(r),Oi(e,t.child,null,n),t=Jf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Vc(Error(T(422))),xa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Cu({mode:"visible",children:r.children},i,0,null),s=Ar(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Oi(e,t.child,null,o),e.child.memoizedState=dd(o),e.memoizedState=hd,s);if(!(e.mode&1))return xa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=Vc(s,r,void 0),xa(t,e,o,r)}if(a=(o&t.childLanes)!==0,it||a){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,mn(t,i),Lt(r,t,i,-1))}return ip(),r=Vc(Error(T(421))),xa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=VC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ht=zn(i.nextSibling),ft=e,ie=!0,Dt=null,t!==null&&(Et[_t++]=sn,Et[_t++]=on,Et[_t++]=$r,sn=t.id,on=t.overflow,$r=e),e=Jf(e,r.children),e.flags|=4096,e)}function bg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),sd(t.return,e,n)}function Bc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function V1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ge(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bg(t,n,e);else if(t.tag===19)bg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Al(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Bc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Al(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Bc(e,!0,n,null,s);break;case"together":Bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=Kn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AC(t,e,n){switch(e.tag){case 3:F1(e),Di();break;case 5:p1(e);break;case 1:ot(e.type)&&Il(e);break;case 4:Hf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(kl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?U1(t,e,n):(Z(oe,oe.current&1),t=gn(t,e,n),t!==null?t.sibling:null);Z(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return V1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,b1(t,e,n)}return gn(t,e,n)}var B1,fd,z1,H1;B1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fd=function(){};z1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ir(Gt.current);var s=null;switch(n){case"input":i=$h(t,i),r=$h(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=jh(t,i),r=jh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_l)}Uh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(to.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(to.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};H1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Es(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function RC(t,e,n){var r=e.pendingProps;switch(bf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return ot(e.type)&&Sl(),Me(e),null;case 3:return r=e.stateNode,Li(),ne(st),ne(We),qf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dt!==null&&(_d(Dt),Dt=null))),fd(t,e),Me(e),null;case 5:Wf(e);var i=Ir(po.current);if(n=e.type,t!==null&&e.stateNode!=null)z1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return Me(e),null}if(t=Ir(Gt.current),Ca(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ht]=e,r[ho]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<As.length;i++)ee(As[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":qm(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":Gm(r,s),ee("invalid",r)}Uh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ta(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ta(r.textContent,a,t),i=["children",""+a]):to.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":ga(r),Km(r,s,!0);break;case"textarea":ga(r),Qm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_l)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=y0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ht]=e,t[ho]=r,B1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vh(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<As.length;i++)ee(As[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":qm(t,r),i=$h(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),ee("invalid",t);break;case"textarea":Gm(t,r),i=jh(t,r),ee("invalid",t);break;default:i=r}Uh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?E0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&v0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&no(t,l):typeof l=="number"&&no(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(to.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&Sf(t,s,l,o))}switch(n){case"input":ga(t),Km(t,r,!1);break;case"textarea":ga(t),Qm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+er(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?vi(t,!!r.multiple,s,!1):r.defaultValue!=null&&vi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)H1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=Ir(po.current),Ir(Gt.current),Ca(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ht]=e,(s=r.nodeValue!==n)&&(t=ft,t!==null))switch(t.tag){case 3:Ta(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ta(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ht]=e,e.stateNode=r}return Me(e),null;case 13:if(ne(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&ht!==null&&e.mode&1&&!(e.flags&128))a1(),Di(),e.flags|=98560,s=!1;else if(s=Ca(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[Ht]=e}else Di(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),s=!1}else Dt!==null&&(_d(Dt),Dt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?_e===0&&(_e=3):ip())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return Li(),fd(t,e),t===null&&uo(e.stateNode.containerInfo),Me(e),null;case 10:return Vf(e.type._context),Me(e),null;case 17:return ot(e.type)&&Sl(),Me(e),null;case 19:if(ne(oe),s=e.memoizedState,s===null)return Me(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Es(s,!1);else{if(_e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Al(t),o!==null){for(e.flags|=128,Es(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>Mi&&(e.flags|=128,r=!0,Es(s,!1),e.lanes=4194304)}else{if(!r)if(t=Al(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Es(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return Me(e),null}else 2*fe()-s.renderingStartTime>Mi&&n!==1073741824&&(e.flags|=128,r=!0,Es(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=oe.current,Z(oe,r?n&1|2:n&1),e):(Me(e),null);case 22:case 23:return rp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ct&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function PC(t,e){switch(bf(e),e.tag){case 1:return ot(e.type)&&Sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Li(),ne(st),ne(We),qf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wf(e),null;case 13:if(ne(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));Di()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(oe),null;case 4:return Li(),null;case 10:return Vf(e.type._context),null;case 22:case 23:return rp(),null;case 24:return null;default:return null}}var Na=!1,Fe=!1,DC=typeof WeakSet=="function"?WeakSet:Set,R=null;function pi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function pd(t,e,n){try{n()}catch(r){ce(t,e,r)}}var jg=!1;function OC(t,e){if(Xh=vl,t=G0(),$f(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jh={focusedElem:t,selectionRange:n},vl=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,S=v.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:Rt(e.type,w),S);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(E){ce(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return v=jg,jg=!1,v}function Ws(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&pd(e,n,s)}i=i.next}while(i!==r)}}function Iu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function md(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function W1(t){var e=t.alternate;e!==null&&(t.alternate=null,W1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ht],delete e[ho],delete e[td],delete e[mC],delete e[gC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function q1(t){return t.tag===5||t.tag===3||t.tag===4}function Fg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||q1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_l));else if(r!==4&&(t=t.child,t!==null))for(gd(t,e,n),t=t.sibling;t!==null;)gd(t,e,n),t=t.sibling}function yd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(yd(t,e,n),t=t.sibling;t!==null;)yd(t,e,n),t=t.sibling}var Ae=null,Pt=!1;function Tn(t,e,n){for(n=n.child;n!==null;)K1(t,e,n),n=n.sibling}function K1(t,e,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(mu,n)}catch{}switch(n.tag){case 5:Fe||pi(n,e);case 6:var r=Ae,i=Pt;Ae=null,Tn(t,e,n),Ae=r,Pt=i,Ae!==null&&(Pt?(t=Ae,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(Pt?(t=Ae,n=n.stateNode,t.nodeType===8?$c(t.parentNode,n):t.nodeType===1&&$c(t,n),oo(t)):$c(Ae,n.stateNode));break;case 4:r=Ae,i=Pt,Ae=n.stateNode.containerInfo,Pt=!0,Tn(t,e,n),Ae=r,Pt=i;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&pd(n,e,o),i=i.next}while(i!==r)}Tn(t,e,n);break;case 1:if(!Fe&&(pi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,e,a)}Tn(t,e,n);break;case 21:Tn(t,e,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,Tn(t,e,n),Fe=r):Tn(t,e,n);break;default:Tn(t,e,n)}}function Ug(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new DC),e.forEach(function(r){var i=BC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function At(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ae=a.stateNode,Pt=!1;break e;case 3:Ae=a.stateNode.containerInfo,Pt=!0;break e;case 4:Ae=a.stateNode.containerInfo,Pt=!0;break e}a=a.return}if(Ae===null)throw Error(T(160));K1(s,o,i),Ae=null,Pt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)G1(e,t),e=e.sibling}function G1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(At(e,t),Bt(t),r&4){try{Ws(3,t,t.return),Iu(3,t)}catch(w){ce(t,t.return,w)}try{Ws(5,t,t.return)}catch(w){ce(t,t.return,w)}}break;case 1:At(e,t),Bt(t),r&512&&n!==null&&pi(n,n.return);break;case 5:if(At(e,t),Bt(t),r&512&&n!==null&&pi(n,n.return),t.flags&32){var i=t.stateNode;try{no(i,"")}catch(w){ce(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&m0(i,s),Vh(a,o);var u=Vh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?E0(i,h):c==="dangerouslySetInnerHTML"?v0(i,h):c==="children"?no(i,h):Sf(i,c,h,u)}switch(a){case"input":Mh(i,s);break;case"textarea":g0(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?vi(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?vi(i,!!s.multiple,s.defaultValue,!0):vi(i,!!s.multiple,s.multiple?[]:"",!1))}i[ho]=s}catch(w){ce(t,t.return,w)}}break;case 6:if(At(e,t),Bt(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){ce(t,t.return,w)}}break;case 3:if(At(e,t),Bt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oo(e.containerInfo)}catch(w){ce(t,t.return,w)}break;case 4:At(e,t),Bt(t);break;case 13:At(e,t),Bt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(tp=fe())),r&4&&Ug(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Fe=(u=Fe)||c,At(e,t),Fe=u):At(e,t),Bt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(R=t,c=t.child;c!==null;){for(h=R=c;R!==null;){switch(d=R,m=d.child,d.tag){case 0:case 11:case 14:case 15:Ws(4,d,d.return);break;case 1:pi(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){ce(r,n,w)}}break;case 5:pi(d,d.return);break;case 22:if(d.memoizedState!==null){Bg(h);continue}}m!==null?(m.return=d,R=m):Bg(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=w0("display",o))}catch(w){ce(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){ce(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:At(e,t),Bt(t),r&4&&Ug(t);break;case 21:break;default:At(e,t),Bt(t)}}function Bt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(q1(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(no(i,""),r.flags&=-33);var s=Fg(t);yd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Fg(t);gd(t,a,o);break;default:throw Error(T(161))}}catch(l){ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LC(t,e,n){R=t,Q1(t)}function Q1(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Na;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Fe;a=Na;var u=Fe;if(Na=o,(Fe=l)&&!u)for(R=i;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?zg(i):l!==null?(l.return=o,R=l):zg(i);for(;s!==null;)R=s,Q1(s),s=s.sibling;R=i,Na=a,Fe=u}Vg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):Vg(t)}}function Vg(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Fe||Iu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Rt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&oo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Fe||e.flags&512&&md(e)}catch(d){ce(e,e.return,d)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function Bg(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function zg(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Iu(4,e)}catch(l){ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ce(e,i,l)}}var s=e.return;try{md(e)}catch(l){ce(e,s,l)}break;case 5:var o=e.return;try{md(e)}catch(l){ce(e,o,l)}}}catch(l){ce(e,e.return,l)}if(e===t){R=null;break}var a=e.sibling;if(a!==null){a.return=e.return,R=a;break}R=e.return}}var $C=Math.ceil,Dl=Sn.ReactCurrentDispatcher,Zf=Sn.ReactCurrentOwner,Tt=Sn.ReactCurrentBatchConfig,K=0,ke=null,ve=null,De=0,ct=0,mi=or(0),_e=0,vo=null,br=0,Tu=0,ep=0,qs=null,nt=null,tp=0,Mi=1/0,nn=null,Ol=!1,vd=null,Wn=null,Aa=!1,bn=null,Ll=0,Ks=0,wd=null,nl=-1,rl=0;function Xe(){return K&6?fe():nl!==-1?nl:nl=fe()}function qn(t){return t.mode&1?K&2&&De!==0?De&-De:vC.transition!==null?(rl===0&&(rl=D0()),rl):(t=Y,t!==0||(t=window.event,t=t===void 0?16:F0(t.type)),t):1}function Lt(t,e,n,r){if(50<Ks)throw Ks=0,wd=null,Error(T(185));bo(t,n,r),(!(K&2)||t!==ke)&&(t===ke&&(!(K&2)&&(Tu|=n),_e===4&&Pn(t,De)),at(t,r),n===1&&K===0&&!(e.mode&1)&&(Mi=fe()+500,Eu&&ar()))}function at(t,e){var n=t.callbackNode;vT(t,e);var r=yl(t,t===ke?De:0);if(r===0)n!==null&&Jm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jm(n),e===1)t.tag===0?yC(Hg.bind(null,t)):i1(Hg.bind(null,t)),fC(function(){!(K&6)&&ar()}),n=null;else{switch(O0(r)){case 1:n=xf;break;case 4:n=R0;break;case 16:n=gl;break;case 536870912:n=P0;break;default:n=gl}n=rw(n,Y1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Y1(t,e){if(nl=-1,rl=0,K&6)throw Error(T(327));var n=t.callbackNode;if(Ii()&&t.callbackNode!==n)return null;var r=yl(t,t===ke?De:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$l(t,r);else{e=r;var i=K;K|=2;var s=J1();(ke!==t||De!==e)&&(nn=null,Mi=fe()+500,Nr(t,e));do try{jC();break}catch(a){X1(t,a)}while(1);Uf(),Dl.current=s,K=i,ve!==null?e=0:(ke=null,De=0,e=_e)}if(e!==0){if(e===2&&(i=qh(t),i!==0&&(r=i,e=Ed(t,i))),e===1)throw n=vo,Nr(t,0),Pn(t,r),at(t,fe()),n;if(e===6)Pn(t,r);else{if(i=t.current.alternate,!(r&30)&&!MC(i)&&(e=$l(t,r),e===2&&(s=qh(t),s!==0&&(r=s,e=Ed(t,s))),e===1))throw n=vo,Nr(t,0),Pn(t,r),at(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:yr(t,nt,nn);break;case 3:if(Pn(t,r),(r&130023424)===r&&(e=tp+500-fe(),10<e)){if(yl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Xe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ed(yr.bind(null,t,nt,nn),e);break}yr(t,nt,nn);break;case 4:if(Pn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ot(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$C(r/1960))-r,10<r){t.timeoutHandle=ed(yr.bind(null,t,nt,nn),r);break}yr(t,nt,nn);break;case 5:yr(t,nt,nn);break;default:throw Error(T(329))}}}return at(t,fe()),t.callbackNode===n?Y1.bind(null,t):null}function Ed(t,e){var n=qs;return t.current.memoizedState.isDehydrated&&(Nr(t,e).flags|=256),t=$l(t,e),t!==2&&(e=nt,nt=n,e!==null&&_d(e)),t}function _d(t){nt===null?nt=t:nt.push.apply(nt,t)}function MC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Mt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pn(t,e){for(e&=~ep,e&=~Tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ot(e),r=1<<n;t[n]=-1,e&=~r}}function Hg(t){if(K&6)throw Error(T(327));Ii();var e=yl(t,0);if(!(e&1))return at(t,fe()),null;var n=$l(t,e);if(t.tag!==0&&n===2){var r=qh(t);r!==0&&(e=r,n=Ed(t,r))}if(n===1)throw n=vo,Nr(t,0),Pn(t,e),at(t,fe()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yr(t,nt,nn),at(t,fe()),null}function np(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(Mi=fe()+500,Eu&&ar())}}function jr(t){bn!==null&&bn.tag===0&&!(K&6)&&Ii();var e=K;K|=1;var n=Tt.transition,r=Y;try{if(Tt.transition=null,Y=1,t)return t()}finally{Y=r,Tt.transition=n,K=e,!(K&6)&&ar()}}function rp(){ct=mi.current,ne(mi)}function Nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dC(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(bf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sl();break;case 3:Li(),ne(st),ne(We),qf();break;case 5:Wf(r);break;case 4:Li();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:Vf(r.type._context);break;case 22:case 23:rp()}n=n.return}if(ke=t,ve=t=Kn(t.current,null),De=ct=e,_e=0,vo=null,ep=Tu=br=0,nt=qs=null,Sr!==null){for(e=0;e<Sr.length;e++)if(n=Sr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Sr=null}return t}function X1(t,e){do{var n=ve;try{if(Uf(),Za.current=Pl,Rl){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Rl=!1}if(Mr=0,Ce=Ee=ae=null,Hs=!1,mo=0,Zf.current=null,n===null||n.return===null){_e=1,vo=e,ve=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=De,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Pg(o);if(m!==null){m.flags&=-257,Dg(m,o,a,s,e),m.mode&1&&Rg(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){Rg(s,u,e),ip();break e}l=Error(T(426))}}else if(ie&&a.mode&1){var S=Pg(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Dg(S,o,a,s,e),jf($i(l,a));break e}}s=l=$i(l,a),_e!==4&&(_e=2),qs===null?qs=[s]:qs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=L1(s,l,e);Ig(s,g);break e;case 1:a=l;var f=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Wn===null||!Wn.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=$1(s,a,e);Ig(s,E);break e}}s=s.return}while(s!==null)}ew(n)}catch(k){e=k,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(1)}function J1(){var t=Dl.current;return Dl.current=Pl,t===null?Pl:t}function ip(){(_e===0||_e===3||_e===2)&&(_e=4),ke===null||!(br&268435455)&&!(Tu&268435455)||Pn(ke,De)}function $l(t,e){var n=K;K|=2;var r=J1();(ke!==t||De!==e)&&(nn=null,Nr(t,e));do try{bC();break}catch(i){X1(t,i)}while(1);if(Uf(),K=n,Dl.current=r,ve!==null)throw Error(T(261));return ke=null,De=0,_e}function bC(){for(;ve!==null;)Z1(ve)}function jC(){for(;ve!==null&&!uT();)Z1(ve)}function Z1(t){var e=nw(t.alternate,t,ct);t.memoizedProps=t.pendingProps,e===null?ew(t):ve=e,Zf.current=null}function ew(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=PC(n,e),n!==null){n.flags&=32767,ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_e=6,ve=null;return}}else if(n=RC(n,e,ct),n!==null){ve=n;return}if(e=e.sibling,e!==null){ve=e;return}ve=e=t}while(e!==null);_e===0&&(_e=5)}function yr(t,e,n){var r=Y,i=Tt.transition;try{Tt.transition=null,Y=1,FC(t,e,n,r)}finally{Tt.transition=i,Y=r}return null}function FC(t,e,n,r){do Ii();while(bn!==null);if(K&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(wT(t,s),t===ke&&(ve=ke=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Aa||(Aa=!0,rw(gl,function(){return Ii(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tt.transition,Tt.transition=null;var o=Y;Y=1;var a=K;K|=4,Zf.current=null,OC(t,n),G1(n,t),sC(Jh),vl=!!Xh,Jh=Xh=null,t.current=n,LC(n),cT(),K=a,Y=o,Tt.transition=s}else t.current=n;if(Aa&&(Aa=!1,bn=t,Ll=i),s=t.pendingLanes,s===0&&(Wn=null),fT(n.stateNode),at(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ol)throw Ol=!1,t=vd,vd=null,t;return Ll&1&&t.tag!==0&&Ii(),s=t.pendingLanes,s&1?t===wd?Ks++:(Ks=0,wd=t):Ks=0,ar(),null}function Ii(){if(bn!==null){var t=O0(Ll),e=Tt.transition,n=Y;try{if(Tt.transition=null,Y=16>t?16:t,bn===null)var r=!1;else{if(t=bn,bn=null,Ll=0,K&6)throw Error(T(331));var i=K;for(K|=4,R=t.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:Ws(8,c,s)}var h=c.child;if(h!==null)h.return=c,R=h;else for(;R!==null;){c=R;var d=c.sibling,m=c.return;if(W1(c),c===u){R=null;break}if(d!==null){d.return=m,R=d;break}R=m}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ws(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,R=g;break e}R=s.return}}var f=t.current;for(R=f;R!==null;){o=R;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,R=y;else e:for(o=f;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Iu(9,a)}}catch(k){ce(a,a.return,k)}if(a===o){R=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,R=E;break e}R=a.return}}if(K=i,ar(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(mu,t)}catch{}r=!0}return r}finally{Y=n,Tt.transition=e}}return!1}function Wg(t,e,n){e=$i(n,e),e=L1(t,e,1),t=Hn(t,e,1),e=Xe(),t!==null&&(bo(t,1,e),at(t,e))}function ce(t,e,n){if(t.tag===3)Wg(t,t,n);else for(;e!==null;){if(e.tag===3){Wg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wn===null||!Wn.has(r))){t=$i(n,t),t=$1(e,t,1),e=Hn(e,t,1),t=Xe(),e!==null&&(bo(e,1,t),at(e,t));break}}e=e.return}}function UC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Xe(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(De&n)===n&&(_e===4||_e===3&&(De&130023424)===De&&500>fe()-tp?Nr(t,0):ep|=n),at(t,e)}function tw(t,e){e===0&&(t.mode&1?(e=wa,wa<<=1,!(wa&130023424)&&(wa=4194304)):e=1);var n=Xe();t=mn(t,e),t!==null&&(bo(t,e,n),at(t,n))}function VC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tw(t,n)}function BC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),tw(t,n)}var nw;nw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||st.current)it=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return it=!1,AC(t,e,n);it=!!(t.flags&131072)}else it=!1,ie&&e.flags&1048576&&s1(e,Cl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;tl(t,e),t=e.pendingProps;var i=Pi(e,We.current);Si(e,n),i=Gf(null,e,r,t,i,n);var s=Qf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ot(r)?(s=!0,Il(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zf(e),i.updater=_u,e.stateNode=i,i._reactInternals=e,ad(e,r,t,n),e=cd(null,e,r,!0,s,n)):(e.tag=0,ie&&s&&Mf(e),Ge(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(tl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=HC(r),t=Rt(r,t),i){case 0:e=ud(null,e,r,t,n);break e;case 1:e=$g(null,e,r,t,n);break e;case 11:e=Og(null,e,r,t,n);break e;case 14:e=Lg(null,e,r,Rt(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),ud(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),$g(t,e,r,i,n);case 3:e:{if(F1(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,u1(t,e),Nl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=$i(Error(T(423)),e),e=Mg(t,e,r,n,i);break e}else if(r!==i){i=$i(Error(T(424)),e),e=Mg(t,e,r,n,i);break e}else for(ht=zn(e.stateNode.containerInfo.firstChild),ft=e,ie=!0,Dt=null,n=f1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Di(),r===i){e=gn(t,e,n);break e}Ge(t,e,r,n)}e=e.child}return e;case 5:return p1(e),t===null&&id(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Zh(r,i)?o=null:s!==null&&Zh(r,s)&&(e.flags|=32),j1(t,e),Ge(t,e,o,n),e.child;case 6:return t===null&&id(e),null;case 13:return U1(t,e,n);case 4:return Hf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Oi(e,null,r,n):Ge(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),Og(t,e,r,i,n);case 7:return Ge(t,e,e.pendingProps,n),e.child;case 8:return Ge(t,e,e.pendingProps.children,n),e.child;case 12:return Ge(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(kl,r._currentValue),r._currentValue=o,s!==null)if(Mt(s.value,o)){if(s.children===i.children&&!st.current){e=gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=hn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),sd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),sd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ge(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Si(e,n),i=kt(i),r=r(i),e.flags|=1,Ge(t,e,r,n),e.child;case 14:return r=e.type,i=Rt(r,e.pendingProps),i=Rt(r.type,i),Lg(t,e,r,i,n);case 15:return M1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),tl(t,e),e.tag=1,ot(r)?(t=!0,Il(e)):t=!1,Si(e,n),h1(e,r,i),ad(e,r,i,n),cd(null,e,r,!0,t,n);case 19:return V1(t,e,n);case 22:return b1(t,e,n)}throw Error(T(156,e.tag))};function rw(t,e){return A0(t,e)}function zC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(t,e,n,r){return new zC(t,e,n,r)}function sp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HC(t){if(typeof t=="function")return sp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Tf)return 11;if(t===Cf)return 14}return 2}function Kn(t,e){var n=t.alternate;return n===null?(n=It(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function il(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case si:return Ar(n.children,i,s,e);case If:o=8,i|=8;break;case Ph:return t=It(12,n,e,i|2),t.elementType=Ph,t.lanes=s,t;case Dh:return t=It(13,n,e,i),t.elementType=Dh,t.lanes=s,t;case Oh:return t=It(19,n,e,i),t.elementType=Oh,t.lanes=s,t;case d0:return Cu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case c0:o=10;break e;case h0:o=9;break e;case Tf:o=11;break e;case Cf:o=14;break e;case xn:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=It(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ar(t,e,n,r){return t=It(7,t,r,e),t.lanes=n,t}function Cu(t,e,n,r){return t=It(22,t,r,e),t.elementType=d0,t.lanes=n,t.stateNode={isHidden:!1},t}function zc(t,e,n){return t=It(6,t,null,e),t.lanes=n,t}function Hc(t,e,n){return e=It(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tc(0),this.expirationTimes=Tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function op(t,e,n,r,i,s,o,a,l){return t=new WC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=It(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zf(s),t}function qC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ii,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function iw(t){if(!t)return tr;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(ot(n))return r1(t,n,e)}return e}function sw(t,e,n,r,i,s,o,a,l){return t=op(n,r,!0,t,i,s,o,a,l),t.context=iw(null),n=t.current,r=Xe(),i=qn(n),s=hn(r,i),s.callback=e??null,Hn(n,s,i),t.current.lanes=i,bo(t,i,r),at(t,r),t}function ku(t,e,n,r){var i=e.current,s=Xe(),o=qn(i);return n=iw(n),e.context===null?e.context=n:e.pendingContext=n,e=hn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Hn(i,e,o),t!==null&&(Lt(t,i,o,s),Ja(t,i,o)),o}function Ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ap(t,e){qg(t,e),(t=t.alternate)&&qg(t,e)}function KC(){return null}var ow=typeof reportError=="function"?reportError:function(t){console.error(t)};function lp(t){this._internalRoot=t}xu.prototype.render=lp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));ku(t,e,null,null)};xu.prototype.unmount=lp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jr(function(){ku(null,t,null,null)}),e[pn]=null}};function xu(t){this._internalRoot=t}xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=M0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Rn.length&&e!==0&&e<Rn[n].priority;n++);Rn.splice(n,0,t),n===0&&j0(t)}};function up(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kg(){}function GC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ml(o);s.call(u)}}var o=sw(e,r,t,0,null,!1,!1,"",Kg);return t._reactRootContainer=o,t[pn]=o.current,uo(t.nodeType===8?t.parentNode:t),jr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ml(l);a.call(u)}}var l=op(t,0,!1,null,null,!1,!1,"",Kg);return t._reactRootContainer=l,t[pn]=l.current,uo(t.nodeType===8?t.parentNode:t),jr(function(){ku(e,l,n,r)}),l}function Au(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ml(o);a.call(l)}}ku(e,o,t,i)}else o=GC(n,e,t,i,r);return Ml(o)}L0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ns(e.pendingLanes);n!==0&&(Nf(e,n|1),at(e,fe()),!(K&6)&&(Mi=fe()+500,ar()))}break;case 13:jr(function(){var r=mn(t,1);if(r!==null){var i=Xe();Lt(r,t,1,i)}}),ap(t,1)}};Af=function(t){if(t.tag===13){var e=mn(t,134217728);if(e!==null){var n=Xe();Lt(e,t,134217728,n)}ap(t,134217728)}};$0=function(t){if(t.tag===13){var e=qn(t),n=mn(t,e);if(n!==null){var r=Xe();Lt(n,t,e,r)}ap(t,e)}};M0=function(){return Y};b0=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};zh=function(t,e,n){switch(e){case"input":if(Mh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wu(r);if(!i)throw Error(T(90));p0(r),Mh(r,i)}}}break;case"textarea":g0(t,n);break;case"select":e=n.value,e!=null&&vi(t,!!n.multiple,e,!1)}};I0=np;T0=jr;var QC={usingClientEntryPoint:!1,Events:[Fo,ui,wu,_0,S0,np]},_s={findFiberByHostInstance:_r,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},YC={bundleType:_s.bundleType,version:_s.version,rendererPackageName:_s.rendererPackageName,rendererConfig:_s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=x0(t),t===null?null:t.stateNode},findFiberByHostInstance:_s.findFiberByHostInstance||KC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ra.isDisabled&&Ra.supportsFiber)try{mu=Ra.inject(YC),Kt=Ra}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QC;yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!up(e))throw Error(T(200));return qC(t,e,null,n)};yt.createRoot=function(t,e){if(!up(t))throw Error(T(299));var n=!1,r="",i=ow;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=op(t,1,!1,null,null,n,!1,r,i),t[pn]=e.current,uo(t.nodeType===8?t.parentNode:t),new lp(e)};yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=x0(e),t=t===null?null:t.stateNode,t};yt.flushSync=function(t){return jr(t)};yt.hydrate=function(t,e,n){if(!Nu(e))throw Error(T(200));return Au(null,t,e,!0,n)};yt.hydrateRoot=function(t,e,n){if(!up(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ow;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=sw(e,null,t,1,n??null,i,!1,s,o),t[pn]=e.current,uo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new xu(e)};yt.render=function(t,e,n){if(!Nu(e))throw Error(T(200));return Au(null,t,e,!1,n)};yt.unmountComponentAtNode=function(t){if(!Nu(t))throw Error(T(40));return t._reactRootContainer?(jr(function(){Au(null,null,t,!1,function(){t._reactRootContainer=null,t[pn]=null})}),!0):!1};yt.unstable_batchedUpdates=np;yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Nu(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return Au(t,e,n,!1,r)};yt.version="18.2.0-next-9e3b772b8-20220608";function aw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(aw)}catch(t){console.error(t)}}aw(),s0.exports=yt;var lw=s0.exports;const Rs=fu(lw);var Gg=lw;Ah.createRoot=Gg.createRoot,Ah.hydrateRoot=Gg.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wo.apply(this,arguments)}var jn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(jn||(jn={}));const Qg="popstate";function XC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Sd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:bl(i)}return ZC(e,n,null,t)}function pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function cp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function JC(){return Math.random().toString(36).substr(2,8)}function Yg(t,e){return{usr:t.state,key:t.key,idx:e}}function Sd(t,e,n,r){return n===void 0&&(n=null),wo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ji(e):e,{state:n,key:e&&e.key||r||JC()})}function bl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ji(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ZC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=jn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(wo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=jn.Pop;let S=c(),g=S==null?null:S-u;u=S,l&&l({action:a,location:w.location,delta:g})}function d(S,g){a=jn.Push;let f=Sd(w.location,S,g);n&&n(f,S),u=c()+1;let y=Yg(f,u),E=w.createHref(f);try{o.pushState(y,"",E)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(E)}s&&l&&l({action:a,location:w.location,delta:1})}function m(S,g){a=jn.Replace;let f=Sd(w.location,S,g);n&&n(f,S),u=c();let y=Yg(f,u),E=w.createHref(f);o.replaceState(y,"",E),s&&l&&l({action:a,location:w.location,delta:0})}function v(S){let g=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof S=="string"?S:bl(S);return pe(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let w={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Qg,h),l=S,()=>{i.removeEventListener(Qg,h),l=null}},createHref(S){return e(i,S)},createURL:v,encodeLocation(S){let g=v(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:m,go(S){return o.go(S)}};return w}var Xg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Xg||(Xg={}));function ek(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ji(e):e,i=hp(r.pathname||"/",n);if(i==null)return null;let s=uw(t);tk(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=ck(s[a],fk(i));return o}function uw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Gn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),uw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:lk(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of cw(s.path))i(s,o,l)}),e}function cw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=cw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function tk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:uk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const nk=/^:\w+$/,rk=3,ik=2,sk=1,ok=10,ak=-2,Jg=t=>t==="*";function lk(t,e){let n=t.split("/"),r=n.length;return n.some(Jg)&&(r+=ak),e&&(r+=ik),n.filter(i=>!Jg(i)).reduce((i,s)=>i+(nk.test(s)?rk:s===""?sk:ok),r)}function uk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ck(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=hk({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Gn([i,c.pathname]),pathnameBase:yk(Gn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Gn([i,c.pathnameBase]))}return s}function hk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=dk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=pk(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function dk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),cp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function fk(t){try{return decodeURI(t)}catch(e){return cp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function pk(t,e){try{return decodeURIComponent(t)}catch(n){return cp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function hp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function mk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ji(t):t;return{pathname:n?n.startsWith("/")?n:gk(n,e):e,search:vk(r),hash:wk(i)}}function gk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function fp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ji(t):(i=wo({},t),pe(!i.pathname||!i.pathname.includes("?"),Wc("?","pathname","search",i)),pe(!i.pathname||!i.pathname.includes("#"),Wc("#","pathname","hash",i)),pe(!i.search||!i.search.includes("#"),Wc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=mk(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Gn=t=>t.join("/").replace(/\/\/+/g,"/"),yk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),vk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,wk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Ek(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const hw=["post","put","patch","delete"];new Set(hw);const _k=["get",...hw];new Set(_k);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jl(){return jl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jl.apply(this,arguments)}const pp=_.createContext(null),Sk=_.createContext(null),Zi=_.createContext(null),Ru=_.createContext(null),tn=_.createContext({outlet:null,matches:[],isDataRoute:!1}),dw=_.createContext(null);function Ik(t,e){let{relative:n}=e===void 0?{}:e;es()||pe(!1);let{basename:r,navigator:i}=_.useContext(Zi),{hash:s,pathname:o,search:a}=pw(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Gn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function es(){return _.useContext(Ru)!=null}function ts(){return es()||pe(!1),_.useContext(Ru).location}function fw(t){_.useContext(Zi).static||_.useLayoutEffect(t)}function ns(){let{isDataRoute:t}=_.useContext(tn);return t?Fk():Tk()}function Tk(){es()||pe(!1);let t=_.useContext(pp),{basename:e,navigator:n}=_.useContext(Zi),{matches:r}=_.useContext(tn),{pathname:i}=ts(),s=JSON.stringify(dp(r).map(l=>l.pathnameBase)),o=_.useRef(!1);return fw(()=>{o.current=!0}),_.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=fp(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Gn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const Ck=_.createContext(null);function kk(t){let e=_.useContext(tn).outlet;return e&&_.createElement(Ck.Provider,{value:t},e)}function xk(){let{matches:t}=_.useContext(tn),e=t[t.length-1];return e?e.params:{}}function pw(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=_.useContext(tn),{pathname:i}=ts(),s=JSON.stringify(dp(r).map(o=>o.pathnameBase));return _.useMemo(()=>fp(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Nk(t,e){return Ak(t,e)}function Ak(t,e,n){es()||pe(!1);let{navigator:r}=_.useContext(Zi),{matches:i}=_.useContext(tn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=ts(),u;if(e){var c;let w=typeof e=="string"?Ji(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||pe(!1),u=w}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",m=ek(t,{pathname:d}),v=Lk(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Gn([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Gn([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&v?_.createElement(Ru.Provider,{value:{location:jl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:jn.Pop}},v):v}function Rk(){let t=jk(),e=Ek(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},e),n?_.createElement("pre",{style:i},n):null,s)}const Pk=_.createElement(Rk,null);class Dk extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?_.createElement(tn.Provider,{value:this.props.routeContext},_.createElement(dw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ok(t){let{routeContext:e,match:n,children:r}=t,i=_.useContext(pp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(tn.Provider,{value:e},r)}function Lk(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||pe(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||Pk);let d=e.concat(s.slice(0,u+1)),m=()=>{let v;return c?v=h:l.route.Component?v=_.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,_.createElement(Ok,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?_.createElement(Dk,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var mw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(mw||{}),Fl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Fl||{});function $k(t){let e=_.useContext(pp);return e||pe(!1),e}function Mk(t){let e=_.useContext(Sk);return e||pe(!1),e}function bk(t){let e=_.useContext(tn);return e||pe(!1),e}function gw(t){let e=bk(),n=e.matches[e.matches.length-1];return n.route.id||pe(!1),n.route.id}function jk(){var t;let e=_.useContext(dw),n=Mk(Fl.UseRouteError),r=gw(Fl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Fk(){let{router:t}=$k(mw.UseNavigateStable),e=gw(Fl.UseNavigateStable),n=_.useRef(!1);return fw(()=>{n.current=!0}),_.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,jl({fromRouteId:e},s)))},[t,e])}function Id(t){let{to:e,replace:n,state:r,relative:i}=t;es()||pe(!1);let{matches:s}=_.useContext(tn),{pathname:o}=ts(),a=ns(),l=fp(e,dp(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return _.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Uk(t){return kk(t.context)}function ut(t){pe(!1)}function Vk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=jn.Pop,navigator:s,static:o=!1}=t;es()&&pe(!1);let a=e.replace(/^\/*/,"/"),l=_.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ji(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,v=_.useMemo(()=>{let w=hp(u,a);return w==null?null:{location:{pathname:w,search:c,hash:h,state:d,key:m},navigationType:i}},[a,u,c,h,d,m,i]);return v==null?null:_.createElement(Zi.Provider,{value:l},_.createElement(Ru.Provider,{children:n,value:v}))}function Bk(t){let{children:e,location:n}=t;return Nk(Td(e),n)}new Promise(()=>{});function Td(t,e){e===void 0&&(e=[]);let n=[];return _.Children.forEach(t,(r,i)=>{if(!_.isValidElement(r))return;let s=[...e,i];if(r.type===_.Fragment){n.push.apply(n,Td(r.props.children,s));return}r.type!==ut&&pe(!1),!r.props.index||!r.props.children||pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Td(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cd(){return Cd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cd.apply(this,arguments)}function zk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Hk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Wk(t,e){return t.button===0&&(!e||e==="_self")&&!Hk(t)}function kd(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function qk(t,e){let n=kd(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const Kk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Gk="startTransition",Zg=VI[Gk];function Qk(t){let{basename:e,children:n,future:r,window:i}=t,s=_.useRef();s.current==null&&(s.current=XC({window:i,v5Compat:!0}));let o=s.current,[a,l]=_.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=_.useCallback(h=>{u&&Zg?Zg(()=>l(h)):l(h)},[l,u]);return _.useLayoutEffect(()=>o.listen(c),[o,c]),_.createElement(Vk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const Yk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jk=_.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=zk(e,Kk),{basename:d}=_.useContext(Zi),m,v=!1;if(typeof u=="string"&&Xk.test(u)&&(m=u,Yk))try{let f=new URL(window.location.href),y=u.startsWith("//")?new URL(f.protocol+u):new URL(u),E=hp(y.pathname,d);y.origin===f.origin&&E!=null?u=E+y.search+y.hash:v=!0}catch{}let w=Ik(u,{relative:i}),S=Zk(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(f){r&&r(f),f.defaultPrevented||S(f)}return _.createElement("a",Cd({},h,{href:m||w,onClick:v||s?r:g,ref:n,target:l}))});var ey;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(ey||(ey={}));var ty;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ty||(ty={}));function Zk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=ns(),l=ts(),u=pw(t,{relative:o});return _.useCallback(c=>{if(Wk(c,n)){c.preventDefault();let h=r!==void 0?r:bl(l)===bl(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function yw(t){let e=_.useRef(kd(t)),n=_.useRef(!1),r=ts(),i=_.useMemo(()=>qk(r.search,n.current?null:e.current),[r.search]),s=ns(),o=_.useCallback((a,l)=>{const u=kd(typeof a=="function"?a(i):a);n.current=!0,s("?"+u,l)},[s,i]);return[i,o]}/**
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
 */const vw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},e2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ww={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):e2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new t2;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class t2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const n2=function(t){const e=vw(t);return ww.encodeByteArray(e,!0)},Ul=function(t){return n2(t).replace(/\./g,"")},Ew=function(t){try{return ww.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function r2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const i2=()=>r2().__FIREBASE_DEFAULTS__,s2=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},o2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ew(t[1]);return e&&JSON.parse(e)},mp=()=>{try{return i2()||s2()||o2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_w=t=>{var e,n;return(n=(e=mp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},a2=t=>{const e=_w(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Sw=()=>{var t;return(t=mp())===null||t===void 0?void 0:t.config},Iw=t=>{var e;return(e=mp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class l2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function u2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ul(JSON.stringify(n)),Ul(JSON.stringify(o)),a].join(".")}/**
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
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function c2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function Tw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function h2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function d2(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Cw(){try{return typeof indexedDB=="object"}catch{return!1}}function kw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function f2(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const p2="FirebaseError";class Vt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=p2,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gr.prototype.create)}}class Gr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?m2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Vt(i,a,r)}}function m2(t,e){return t.replace(g2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const g2=/\{\$([^}]+)}/g;function y2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Eo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ny(s)&&ny(o)){if(!Eo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ny(t){return t!==null&&typeof t=="object"}/**
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
 */function Vo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ps(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ds(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function v2(t,e){const n=new w2(t,e);return n.subscribe.bind(n)}class w2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");E2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qc),i.error===void 0&&(i.error=qc),i.complete===void 0&&(i.complete=qc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function E2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qc(){}/**
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
 */const _2=1e3,S2=2,I2=4*60*60*1e3,T2=.5;function ry(t,e=_2,n=S2){const r=e*Math.pow(n,t),i=Math.round(T2*r*(Math.random()-.5)*2);return Math.min(I2,r+i)}/**
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
 */function me(t){return t&&t._delegate?t._delegate:t}class bt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vr="[DEFAULT]";/**
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
 */class C2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new l2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(x2(e))try{this.getOrInitializeService({instanceIdentifier:vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vr){return this.instances.has(e)}getOptions(e=vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:k2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vr){return this.component?this.component.multipleInstances?e:vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function k2(t){return t===vr?void 0:t}function x2(t){return t.instantiationMode==="EAGER"}/**
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
 */class N2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new C2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const A2={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},R2=G.INFO,P2={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},D2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=P2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pu{constructor(e){this.name=e,this._logLevel=R2,this._logHandler=D2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?A2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const O2=(t,e)=>e.some(n=>t instanceof n);let iy,sy;function L2(){return iy||(iy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $2(){return sy||(sy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xw=new WeakMap,xd=new WeakMap,Nw=new WeakMap,Kc=new WeakMap,gp=new WeakMap;function M2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Qn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xw.set(n,t)}).catch(()=>{}),gp.set(e,t),e}function b2(t){if(xd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});xd.set(t,e)}let Nd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function j2(t){Nd=t(Nd)}function F2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gc(this),e,...n);return Nw.set(r,e.sort?e.sort():[e]),Qn(r)}:$2().includes(t)?function(...e){return t.apply(Gc(this),e),Qn(xw.get(this))}:function(...e){return Qn(t.apply(Gc(this),e))}}function U2(t){return typeof t=="function"?F2(t):(t instanceof IDBTransaction&&b2(t),O2(t,L2())?new Proxy(t,Nd):t)}function Qn(t){if(t instanceof IDBRequest)return M2(t);if(Kc.has(t))return Kc.get(t);const e=U2(t);return e!==t&&(Kc.set(t,e),gp.set(e,t)),e}const Gc=t=>gp.get(t);function V2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Qn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Qn(o.result),l.oldVersion,l.newVersion,Qn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const B2=["get","getKey","getAll","getAllKeys","count"],z2=["put","add","delete","clear"],Qc=new Map;function oy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qc.get(e))return Qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=z2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||B2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Qc.set(e,s),s}j2(t=>({...t,get:(e,n,r)=>oy(e,n)||t.get(e,n,r),has:(e,n)=>!!oy(e,n)||t.has(e,n)}));/**
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
 */class H2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(W2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function W2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ad="@firebase/app",ay="0.9.10";/**
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
 */const Fr=new Pu("@firebase/app"),q2="@firebase/app-compat",K2="@firebase/analytics-compat",G2="@firebase/analytics",Q2="@firebase/app-check-compat",Y2="@firebase/app-check",X2="@firebase/auth",J2="@firebase/auth-compat",Z2="@firebase/database",ex="@firebase/database-compat",tx="@firebase/functions",nx="@firebase/functions-compat",rx="@firebase/installations",ix="@firebase/installations-compat",sx="@firebase/messaging",ox="@firebase/messaging-compat",ax="@firebase/performance",lx="@firebase/performance-compat",ux="@firebase/remote-config",cx="@firebase/remote-config-compat",hx="@firebase/storage",dx="@firebase/storage-compat",fx="@firebase/firestore",px="@firebase/firestore-compat",mx="firebase",gx="9.22.0";/**
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
 */const Rd="[DEFAULT]",yx={[Ad]:"fire-core",[q2]:"fire-core-compat",[G2]:"fire-analytics",[K2]:"fire-analytics-compat",[Y2]:"fire-app-check",[Q2]:"fire-app-check-compat",[X2]:"fire-auth",[J2]:"fire-auth-compat",[Z2]:"fire-rtdb",[ex]:"fire-rtdb-compat",[tx]:"fire-fn",[nx]:"fire-fn-compat",[rx]:"fire-iid",[ix]:"fire-iid-compat",[sx]:"fire-fcm",[ox]:"fire-fcm-compat",[ax]:"fire-perf",[lx]:"fire-perf-compat",[ux]:"fire-rc",[cx]:"fire-rc-compat",[hx]:"fire-gcs",[dx]:"fire-gcs-compat",[fx]:"fire-fst",[px]:"fire-fst-compat","fire-js":"fire-js",[mx]:"fire-js-all"};/**
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
 */const Vl=new Map,Pd=new Map;function vx(t,e){try{t.container.addComponent(e)}catch(n){Fr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zt(t){const e=t.name;if(Pd.has(e))return Fr.debug(`There were multiple attempts to register component ${e}.`),!1;Pd.set(e,t);for(const n of Vl.values())vx(n,t);return!0}function Qr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const wx={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yn=new Gr("app","Firebase",wx);/**
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
 */class Ex{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}}/**
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
 */const rs=gx;function yp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Rd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Yn.create("bad-app-name",{appName:String(i)});if(n||(n=Sw()),!n)throw Yn.create("no-options");const s=Vl.get(i);if(s){if(Eo(n,s.options)&&Eo(r,s.config))return s;throw Yn.create("duplicate-app",{appName:i})}const o=new N2(i);for(const l of Pd.values())o.addComponent(l);const a=new Ex(n,r,o);return Vl.set(i,a),a}function vp(t=Rd){const e=Vl.get(t);if(!e&&t===Rd&&Sw())return yp();if(!e)throw Yn.create("no-app",{appName:t});return e}function Ct(t,e,n){var r;let i=(r=yx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fr.warn(a.join(" "));return}Zt(new bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const _x="firebase-heartbeat-database",Sx=1,_o="firebase-heartbeat-store";let Yc=null;function Aw(){return Yc||(Yc=V2(_x,Sx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_o)}}}).catch(t=>{throw Yn.create("idb-open",{originalErrorMessage:t.message})})),Yc}async function Ix(t){try{return await(await Aw()).transaction(_o).objectStore(_o).get(Rw(t))}catch(e){if(e instanceof Vt)Fr.warn(e.message);else{const n=Yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fr.warn(n.message)}}}async function ly(t,e){try{const r=(await Aw()).transaction(_o,"readwrite");await r.objectStore(_o).put(e,Rw(t)),await r.done}catch(n){if(n instanceof Vt)Fr.warn(n.message);else{const r=Yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fr.warn(r.message)}}}function Rw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Tx=1024,Cx=30*24*60*60*1e3;class kx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=uy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Cx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=uy(),{heartbeatsToSend:n,unsentEntries:r}=xx(this._heartbeatsCache.heartbeats),i=Ul(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function uy(){return new Date().toISOString().substring(0,10)}function xx(t,e=Tx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cw()?kw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ix(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ly(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ly(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cy(t){return Ul(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ax(t){Zt(new bt("platform-logger",e=>new H2(e),"PRIVATE")),Zt(new bt("heartbeat",e=>new kx(e),"PRIVATE")),Ct(Ad,ay,t),Ct(Ad,ay,"esm2017"),Ct("fire-js","")}Ax("");function wp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Pw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rx=Pw,Dw=new Gr("auth","Firebase",Pw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=new Pu("@firebase/auth");function Px(t,...e){Bl.logLevel<=G.WARN&&Bl.warn(`Auth (${rs}): ${t}`,...e)}function sl(t,...e){Bl.logLevel<=G.ERROR&&Bl.error(`Auth (${rs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,...e){throw Ep(t,...e)}function Qt(t,...e){return Ep(t,...e)}function Dx(t,e,n){const r=Object.assign(Object.assign({},Rx()),{[e]:n});return new Gr("auth","Firebase",r).create(e,{appName:t.name})}function Ep(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dw.create(t,...e)}function M(t,e,...n){if(!t)throw Ep(e,...n)}function an(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sl(e),new Error(e)}function yn(t,e){t||an(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ox(){return hy()==="http:"||hy()==="https:"}function hy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ox()||Tw()||"connection"in navigator)?navigator.onLine:!0}function $x(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,yn(n>e,"Short delay should be less than long delay!"),this.isMobile=c2()||h2()}get(){return Lx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t,e){yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=new Bo(3e4,6e4);function zo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function is(t,e,n,r,i={}){return Lw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Vo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Ow.fetch()($w(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Lw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Mx),e);try{const i=new jx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Pa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Pa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Pa(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Dx(t,c,u);jt(t,c)}}catch(i){if(i instanceof Vt)throw i;jt(t,"network-request-failed",{message:String(i)})}}async function Du(t,e,n,r,i={}){const s=await is(t,e,n,r,i);return"mfaPendingCredential"in s&&jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $w(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?_p(t.config,i):`${t.config.apiScheme}://${i}`}class jx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),bx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fx(t,e){return is(t,"POST","/v1/accounts:delete",e)}async function Ux(t,e){return is(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vx(t,e=!1){const n=me(t),r=await n.getIdToken(e),i=Sp(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gs(Xc(i.auth_time)),issuedAtTime:Gs(Xc(i.iat)),expirationTime:Gs(Xc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xc(t){return Number(t)*1e3}function Sp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return sl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ew(n);return i?JSON.parse(i):(sl("Failed to decode base64 JWT payload"),null)}catch(i){return sl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Bx(t){const e=Sp(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vt&&zx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gs(this.lastLoginAt),this.creationTime=Gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await So(t,Ux(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Kx(s.providerUserInfo):[],a=qx(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Mw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function Wx(t){const e=me(t);await zl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Kx(t){return t.map(e=>{var{providerId:n}=e,r=wp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gx(t,e){const n=await Lw(t,{},async()=>{const r=Vo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=$w(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ow.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Gx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Io;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Io,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=wp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Mw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await So(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Vx(this,e)}reload(){return Wx(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await So(this,Fx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:k,providerData:x,stsTokenManager:A}=n;M(y&&A,e,"internal-error");const O=Io.fromJSON(this.name,A);M(typeof y=="string",e,"internal-error"),Cn(h,e.name),Cn(d,e.name),M(typeof E=="boolean",e,"internal-error"),M(typeof k=="boolean",e,"internal-error"),Cn(m,e.name),Cn(v,e.name),Cn(w,e.name),Cn(S,e.name),Cn(g,e.name),Cn(f,e.name);const J=new Rr({uid:y,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:k,photoURL:v,phoneNumber:m,tenantId:w,stsTokenManager:O,createdAt:g,lastLoginAt:f});return x&&Array.isArray(x)&&(J.providerData=x.map(z=>Object.assign({},z))),S&&(J._redirectEventId=S),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new Io;i.updateFromServerResponse(n);const s=new Rr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=new Map;function ln(t){yn(t instanceof Function,"Expected a class definition");let e=dy.get(t);return e?(yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dy.set(t,e),e)}/**
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
 */class bw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bw.type="NONE";const fy=bw;/**
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
 */function ol(t,e,n){return`firebase:${t}:${e}:${n}`}class Ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ol(this.userKey,i.apiKey,s),this.fullPersistenceKey=ol("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ti(ln(fy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ln(fy);const o=ol(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Rr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ti(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ti(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bw(e))return"Blackberry";if(zw(e))return"Webos";if(Ip(e))return"Safari";if((e.includes("chrome/")||Fw(e))&&!e.includes("edge/"))return"Chrome";if(Vw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jw(t=qe()){return/firefox\//i.test(t)}function Ip(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fw(t=qe()){return/crios\//i.test(t)}function Uw(t=qe()){return/iemobile/i.test(t)}function Vw(t=qe()){return/android/i.test(t)}function Bw(t=qe()){return/blackberry/i.test(t)}function zw(t=qe()){return/webos/i.test(t)}function Ou(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qx(t=qe()){var e;return Ou(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Yx(){return d2()&&document.documentMode===10}function Hw(t=qe()){return Ou(t)||Vw(t)||zw(t)||Bw(t)||/windows phone/i.test(t)||Uw(t)}function Xx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t,e=[]){let n;switch(t){case"Browser":n=py(qe());break;case"Worker":n=`${py(qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rs}/${r}`}async function qw(t,e){return is(t,"GET","/v2/recaptchaConfig",zo(t,e))}function my(t){return t!==void 0&&t.enterprise!==void 0}class Kw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Gw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Jx().appendChild(r)})}function Zx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const eN="https://www.google.com/recaptcha/enterprise.js?render=",tN="recaptcha-enterprise",nN="NO_RECAPTCHA";class Qw{constructor(e){this.type=tN,this.auth=Ho(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{qw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Kw(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;my(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(nN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&my(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Gw(eN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function gy(t,e,n,r=!1){const i=new Qw(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class rN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yy(this),this.idTokenSubscription=new yy(this),this.beforeStateQueue=new rN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ln(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ti.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?me(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}async initializeRecaptchaConfig(){const e=await qw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Kw(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Qw(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ln(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Ti.create(this,[ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ww(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Px(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ho(t){return me(t)}class yy{constructor(e){this.auth=e,this.observer=null,this.addObserver=v2(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(t,e){const n=Qr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Eo(s,e??{}))return i;jt(i,"already-initialized")}return n.initialize({options:e})}function oN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function aN(t,e,n){const r=Ho(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Yw(e),{host:o,port:a}=lN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||uN()}function Yw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lN(t){const e=Yw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:vy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:vy(o)}}}function vy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,n){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}async function cN(t,e){return is(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jc(t,e){return Du(t,"POST","/v1/accounts:signInWithPassword",zo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN(t,e){return Du(t,"POST","/v1/accounts:signInWithEmailLink",zo(t,e))}async function dN(t,e){return Du(t,"POST","/v1/accounts:signInWithEmailLink",zo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends Tp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new To(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new To(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await gy(e,r,"signInWithPassword");return Jc(e,i)}else return Jc(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await gy(e,r,"signInWithPassword");return Jc(e,s)}else return Promise.reject(i)});case"emailLink":return hN(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return cN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dN(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t,e){return Du(t,"POST","/v1/accounts:signInWithIdp",zo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN="http://localhost";class Ur extends Tp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=wp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ur(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ci(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ci(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ci(e,n)}buildRequest(){const e={requestUri:fN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mN(t){const e=Ps(Ds(t)).link,n=e?Ps(Ds(e)).deep_link_id:null,r=Ps(Ds(t)).deep_link_id;return(r?Ps(Ds(r)).link:null)||r||n||e||t}class Cp{constructor(e){var n,r,i,s,o,a;const l=Ps(Ds(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=pN((i=l.mode)!==null&&i!==void 0?i:null);M(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=mN(e);try{return new Cp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.providerId=ss.PROVIDER_ID}static credential(e,n){return To._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cp.parseLink(n);return M(r,"argument-error"),To._fromEmailAndCode(e,r.code,r.tenantId)}}ss.PROVIDER_ID="password";ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wo extends Xw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Wo{constructor(){super("facebook.com")}static credential(e){return Ur._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ur._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return On.credential(n,r)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Wo{constructor(){super("github.com")}static credential(e){return Ur._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Wo{constructor(){super("twitter.com")}static credential(e,n){return Ur._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Rr._fromIdTokenResponse(e,r,i),o=wy(r);return new bi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=wy(r);return new bi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function wy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends Vt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Hl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Hl(e,n,r,i)}}function Jw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Hl._fromErrorAndOperation(t,s,e,r):s})}async function gN(t,e,n=!1){const r=await So(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bi._forOperation(t,"link",r)}/**
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
 */async function yN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await So(t,Jw(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=Sp(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),bi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zw(t,e,n=!1){const r="signIn",i=await Jw(t,r,e),s=await bi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function vN(t,e){return Zw(Ho(t),e)}function wN(t,e,n){return vN(me(t),ss.credential(e,n))}function EN(t,e,n,r){return me(t).onIdTokenChanged(e,n,r)}function _N(t,e,n){return me(t).beforeAuthStateChanged(e,n)}function SN(t,e,n,r){return me(t).onAuthStateChanged(e,n,r)}function IN(t){return me(t).signOut()}const Wl="__sak";/**
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
 */class eE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wl,"1"),this.storage.removeItem(Wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(){const t=qe();return Ip(t)||Ou(t)}const CN=1e3,kN=10;class tE extends eE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=TN()&&Xx(),this.fallbackToPolling=Hw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Yx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,kN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},CN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tE.type="LOCAL";const xN=tE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE extends eE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nE.type="SESSION";const rE=nE;/**
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
 */function NN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Lu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await NN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class AN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=kp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function RN(t){Yt().location.href=t}/**
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
 */function iE(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function PN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ON(){return iE()?self:null}/**
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
 */const sE="firebaseLocalStorageDb",LN=1,ql="firebaseLocalStorage",oE="fbase_key";class qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $u(t,e){return t.transaction([ql],e?"readwrite":"readonly").objectStore(ql)}function $N(){const t=indexedDB.deleteDatabase(sE);return new qo(t).toPromise()}function Od(){const t=indexedDB.open(sE,LN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ql,{keyPath:oE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ql)?e(r):(r.close(),await $N(),e(await Od()))})})}async function Ey(t,e,n){const r=$u(t,!0).put({[oE]:e,value:n});return new qo(r).toPromise()}async function MN(t,e){const n=$u(t,!1).get(e),r=await new qo(n).toPromise();return r===void 0?null:r.value}function _y(t,e){const n=$u(t,!0).delete(e);return new qo(n).toPromise()}const bN=800,jN=3;class aE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Od(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lu._getInstance(ON()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PN(),!this.activeServiceWorker)return;this.sender=new AN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Od();return await Ey(e,Wl,"1"),await _y(e,Wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ey(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>MN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_y(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$u(i,!1).getAll();return new qo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aE.type="LOCAL";const FN=aE;new Bo(3e4,6e4);/**
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
 */function UN(t,e){return e?ln(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class xp extends Tp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ci(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ci(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VN(t){return Zw(t.auth,new xp(t),t.bypassAuthState)}function BN(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),yN(n,new xp(t),t.bypassAuthState)}async function zN(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),gN(n,new xp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VN;case"linkViaPopup":case"linkViaRedirect":return zN;case"reauthViaPopup":case"reauthViaRedirect":return BN;default:jt(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=new Bo(2e3,1e4);class gi extends lE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,gi.currentPopupAction&&gi.currentPopupAction.cancel(),gi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=kp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,HN.get())};e()}}gi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN="pendingRedirect",al=new Map;class qN extends lE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=al.get(this.auth._key());if(!e){try{const r=await KN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}al.set(this.auth._key(),e)}return this.bypassAuthState||al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KN(t,e){const n=YN(e),r=QN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function GN(t,e){al.set(t._key(),e)}function QN(t){return ln(t._redirectPersistence)}function YN(t){return ol(WN,t.config.apiKey,t.name)}async function XN(t,e,n=!1){const r=Ho(t),i=UN(r,e),o=await new qN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=10*60*1e3;class ZN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sy(e))}saveEventToCache(e){this.cachedEventUids.add(Sy(e)),this.lastProcessedEventTime=Date.now()}}function Sy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(t,e={}){return is(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rA=/^https?/;async function iA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tA(t);for(const n of e)try{if(sA(n))return}catch{}jt(t,"unauthorized-domain")}function sA(t){const e=Dd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rA.test(n))return!1;if(nA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const oA=new Bo(3e4,6e4);function Iy(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aA(t){return new Promise((e,n)=>{var r,i,s;function o(){Iy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Iy(),n(Qt(t,"network-request-failed"))},timeout:oA.get()})}if(!((i=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Yt().gapi)===null||s===void 0)&&s.load)o();else{const a=Zx("iframefcb");return Yt()[a]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},Gw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ll=null,e})}let ll=null;function lA(t){return ll=ll||aA(t),ll}/**
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
 */const uA=new Bo(5e3,15e3),cA="__/auth/iframe",hA="emulator/auth/iframe",dA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pA(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_p(e,hA):`https://${t.config.authDomain}/${cA}`,r={apiKey:e.apiKey,appName:t.name,v:rs},i=fA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Vo(r).slice(1)}`}async function mA(t){const e=await lA(t),n=Yt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:pA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),a=Yt().setTimeout(()=>{s(o)},uA.get());function l(){Yt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const gA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yA=500,vA=600,wA="_blank",EA="http://localhost";class Ty{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _A(t,e,n,r=yA,i=vA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},gA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=qe().toLowerCase();n&&(a=Fw(u)?wA:n),jw(u)&&(e=e||EA,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,v])=>`${d}${m}=${v},`,"");if(Qx(u)&&a!=="_self")return SA(e||"",a),new Ty(null);const h=window.open(e||"",a,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new Ty(h)}function SA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const IA="__/auth/handler",TA="emulator/auth/handler",CA=encodeURIComponent("fac");async function Cy(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:rs,eventId:i};if(e instanceof Xw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",y2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Wo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${CA}=${encodeURIComponent(l)}`:"";return`${kA(t)}?${Vo(a).slice(1)}${u}`}function kA({config:t}){return t.emulator?_p(t,TA):`https://${t.authDomain}/${IA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="webStorageSupport";class xA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rE,this._completeRedirectFn=XN,this._overrideRedirectResult=GN}async _openPopup(e,n,r,i){var s;yn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Cy(e,n,r,Dd(),i);return _A(e,o,kp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Cy(e,n,r,Dd(),i);return RN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(yn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mA(e),r=new ZN(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zc,{type:Zc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Zc];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=iA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hw()||Ip()||Ou()}}const NA=xA;var ky="@firebase/auth",xy="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function PA(t){Zt(new bt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ww(t)},u=new iN(r,i,s,l);return oN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zt(new bt("auth-internal",e=>{const n=Ho(e.getProvider("auth").getImmediate());return(r=>new AA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ct(ky,xy,RA(t)),Ct(ky,xy,"esm2017")}/**
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
 */const DA=5*60,OA=Iw("authIdTokenMaxAge")||DA;let Ny=null;const LA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>OA)return;const i=n==null?void 0:n.token;Ny!==i&&(Ny=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $A(t=vp()){const e=Qr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sN(t,{popupRedirectResolver:NA,persistence:[FN,xN,rE]}),r=Iw("authTokenSyncURL");if(r){const s=LA(r);_N(n,s,()=>s(n.currentUser)),EN(n,o=>s(o))}const i=_w("auth");return i&&aN(n,`http://${i}`),n}PA("Browser");const Mu=_.createContext({}),MA=({children:t})=>{const e=$A(),[n]=_.useState(!1),[r,i]=_.useState(null),[s,o]=_.useState(!0),[a,l]=_.useState("");_.useEffect(()=>SN(e,u),[]);const u=async()=>{await i(e.currentUser),o(!1)},c=(d,m)=>{o(!0),wN(e,d,m).then(()=>{}).catch(()=>{l(!0),o(!1)})},h=()=>{o(!0),IN(e).then(()=>{}).catch(()=>{o(!1)})};return p.jsx(Mu.Provider,{value:{couldLogin:n,signIn:c,signOut:h,user:r,loading:s,err:a},children:t})},bA="_loader_hm3et_5",jA="_titleContainer_hm3et_25",FA="_title_hm3et_25",UA="_typing_hm3et_1",eh={loader:bA,titleContainer:jA,title:FA,typing:UA},VA="_background_bbzut_1",BA="_flowers_bbzut_7",zA="_wheat_bbzut_22",HA="_details_bbzut_35",Da={background:VA,flowers:BA,wheat:zA,details:HA},WA="/assets/flowers-196b5b19.png",qA="/assets/wheat-6ddf021a.png",KA="/assets/details-e0934b85.png";function Ko(){return p.jsxs("div",{className:Da.background,children:[p.jsx("img",{src:WA,className:Da.flowers}),p.jsx("img",{src:qA,className:Da.wheat}),p.jsx("img",{src:KA,className:Da.details})]})}const GA="_wrap_ie2xg_1",QA="_container_ie2xg_12",Ay={wrap:GA,container:QA},cE=t=>{const[e,n]=_.useState(),[r,i]=_.useState(),[s,o]=_.useState(),[a,l]=_.useState();return setInterval(()=>{const c=new Date(t).getTime(),h=new Date().getTime(),d=c-h,m=1e3,v=m*60,w=v*60,S=w*24,g=Math.floor(d/S),f=Math.floor(d%S/w),y=Math.floor(d%w/v),E=Math.floor(d%v/m);n(g),i(f),o(y),l(E)},1e3),[e,r,s,a]},YA="_preCard_1c9ab_1",XA="_text_1c9ab_34",JA={preCard:YA,in:"_in_1c9ab_1",text:XA},ZA="/assets/1-3e5e40af.jpg",eR="/assets/2-28143cb1.jpg",tR="/assets/3-9b63cf82.jpg",nR="/assets/4-7f1eddfc.jpg";function Oa(t){const[e,n]=_.useState(),r=()=>{n(!0)},i=()=>{n(!1)};function s(o){if(o===1)return ZA;if(o===2)return eR;if(o===3)return tR;if(o===4)return nR}return p.jsx("div",{className:JA.preCard,style:e?{background:`url(${s(t.numberPhoto)}) no-repeat  center`,backgroundSize:"cover",transition:"2s",zIndex:"4",width:"130px"}:{},onMouseEnter:r,onMouseLeave:i,children:t.children})}function tt({style:t,text:e,color:n}){return p.jsx("span",{className:t,style:{color:`${n}`},children:e})}const rR="_a_4qqib_8",iR="_button_4qqib_22",sR="_textButton_4qqib_51",oR="_containerButton_4qqib_63",kn={a:rR,button:iR,textButton:sR,containerButton:oR};function Pr({text:t="null",link:e="null",children:n,action:r,target:i="_blank",navigate:s=""}){return s===""?p.jsxs("div",{className:kn.containerButton,children:[p.jsx("a",{className:kn.a,href:e,target:i,children:p.jsx("button",{className:kn.button,onClick:r,children:n})}),p.jsx("h1",{className:kn.textButton,children:t})]}):p.jsxs("div",{className:kn.containerButton,children:[p.jsx(Jk,{className:kn.a,to:s,children:p.jsx("button",{className:kn.button,onClick:r,children:n})}),p.jsx("h1",{className:kn.textButton,children:t})]})}var hE={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ry=Qe.createContext&&Qe.createContext(hE),Xn=globalThis&&globalThis.__assign||function(){return Xn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Xn.apply(this,arguments)},aR=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function dE(t){return t&&t.map(function(e,n){return Qe.createElement(e.tag,Xn({key:n},e.attr),dE(e.child))})}function wt(t){return function(e){return Qe.createElement(lR,Xn({attr:Xn({},t.attr)},e),dE(t.child))}}function lR(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=aR(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Qe.createElement("svg",Xn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Xn(Xn({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Qe.createElement("title",null,s),t.children)};return Ry!==void 0?Qe.createElement(Ry.Consumer,null,function(n){return e(n)}):e(hE)}function uR(t){return wt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 16C123.5 16 16 123.5 16 256c0 132.6 107.5 240 240 240 132.6 0 240-107.4 240-240S388.6 16 256 16zm0 60c99.4 0 180 80.6 180 180s-80.6 180-180 180S76 355.4 76 256 156.6 76 256 76zm91.3 64.2c-6.5 0-12.5 2.4-16.8 8.2-52 70.1-69 96.5-106 169.8-8.4-11.1-65.6-72.4-93.9-94.1-14.2-10.9-41.3 27.2-31.6 37.1C142.6 306.1 220.1 406 232.7 405c21.4-1.7 75.1-136.8 148.8-233.7 8-10.4-15-31.3-34.2-31.1z"}}]})(t)}function cR(t){return wt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.518 78.38c-6.55.117-12.45 1.736-17.35 4.91-7.465 4.84-11.765 12.904-13.063 21.34-2.595 16.874 4.747 36.355 19.862 52.31C154.08 172.893 177.643 185 208 185h2.438l-9.118-18.234c-22.194-1.554-38.46-10.777-49.287-22.205-11.885-12.545-16.543-28.064-15.138-37.19.702-4.564 2.402-7.25 5.062-8.974 2.66-1.724 7.113-2.875 14.756-1.326 13.078 2.65 34.233 13.948 62.205 39.284L220.27 135h23.408c-35.31-34.8-62.215-51.278-83.39-55.57-2.715-.55-5.363-.887-7.925-1.006-.96-.045-1.91-.06-2.845-.043zm212.964 0c-.935-.016-1.885 0-2.845.044-2.562.12-5.21.455-7.924 1.006-21.176 4.292-48.082 20.77-83.39 55.57h23.406l1.352 1.354c27.972-25.336 49.127-36.633 62.205-39.284 7.643-1.55 12.096-.398 14.756 1.326 2.66 1.725 4.36 4.41 5.062 8.973 1.405 9.126-3.253 24.645-15.138 37.19-10.827 11.43-27.093 20.652-49.287 22.206L301.562 185H304c30.357 0 53.92-12.106 69.033-28.06 15.115-15.955 22.457-35.436 19.862-52.31-1.298-8.436-5.598-16.5-13.063-21.34-4.9-3.174-10.8-4.793-17.35-4.91zM227.73 153l-8.78 8.777L229.564 183h52.875l10.61-21.223-8.777-8.777h-56.54zM73 201v46h142v-46H73zm160 0v270h46V201h-46zm64 0v46h142v-46H297zm-192 64v206h110V265H105zm192 0v206h110V265H297z"}}]})(t)}function hR(t){return wt({tag:"svg",attr:{viewBox:"0 0 288 512"},child:[{tag:"path",attr:{d:"M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"}}]})(t)}function dR({color:t,enableTop:e=!0,enableMiddle:n=!0,enableDate:r=!0,enableBottom:i=!0}){const[s,o,a,l]=cE("2024-10-12"),u="/confirm",c="https://drive.google.com/file/d/1mi5u9Q6fc5w_nuhlMWDqVDRjNHy87mhs/view?usp=sharing",h="https://goo.gl/maps/S2ykJjg2UxoPWTmd8",[d,m]=_.useState(),v=()=>{m(!0)},w=()=>{m(!1)},S=E=>E?p.jsxs("section",{className:Ay.container,children:[p.jsx(tt,{text:"Wedding",style:"wedding",color:t}),p.jsx(tt,{text:"Haylton & Camile",style:"name",color:t}),p.jsx(tt,{text:"Save The Date",style:"titulo",color:t})]}):"",g=E=>E?p.jsxs(p.Fragment,{children:[p.jsxs(Oa,{numberPhoto:1,onMouseEnter:v,onMouseLeave:w,children:[p.jsx(tt,{style:d?"text:hover":"text",text:s,isHoverSet:d}),p.jsx(tt,{style:"nameBox",text:"Days",isHoverSet:d})]}),p.jsxs(Oa,{numberPhoto:2,children:[p.jsx(tt,{style:"text",text:o}),p.jsx(tt,{style:"nameBox",text:"Hours"})]}),p.jsxs(Oa,{numberPhoto:3,children:[p.jsx(tt,{style:"text",text:a}),p.jsx(tt,{style:"nameBox",text:"Minutes"})]}),p.jsxs(Oa,{numberPhoto:4,children:[p.jsx(tt,{style:"text",text:l}),p.jsx(tt,{style:"nameBox",text:"Seconds"})]})]}):"",f=E=>E?p.jsxs(p.Fragment,{children:[p.jsxs("div",{style:{display:"flex",flexWrap:"wrap",width:"100%",padding:"40px"},children:[p.jsx(tt,{text:"Assim, eles já não são dois, mas sim uma só carne. ",style:"textDate"}),p.jsx(tt,{text:"Portanto, o que Deus uniu, ninguém separe. Mateus 19:6 ",style:"textDate"})]}),p.jsx(Pr,{link:h,text:"Local",style:"nameBox",children:p.jsx(hR,{style:{color:"white",fontSize:"50px"}})}),p.jsx(Pr,{link:u,text:"Confirmar Presença",style:"nameBox",target:"_self",children:p.jsx(uR,{style:{color:"white",fontSize:"50px"}})}),p.jsx(Pr,{link:c,text:"Sugestão de presente",style:"nameBox",children:p.jsx(cR,{style:{color:"white",fontSize:"50px"}})})]}):"",y=E=>E?p.jsx(p.Fragment,{children:p.jsx(tt,{text:"12 | Outubro | 15h30m",style:"date"})}):"";return p.jsx(p.Fragment,{children:p.jsxs("div",{className:Ay.wrap,children:[S(e),g(n),y(r),f(i)]})})}const fR="_container_55e6b_1",pR={container:fR};function bu({color:t,enableTop:e,enableMiddle:n,enableBottom:r,enableDate:i}){return p.jsx(p.Fragment,{children:p.jsx("div",{className:pR.container,children:p.jsx(dR,{enableTop:e,enableMiddle:n,enableBottom:r,enableDate:i,color:t})})})}function mR(){return p.jsxs("div",{className:"App",children:[p.jsx(Ko,{}),p.jsx(bu,{enableTop:void 0,enableMiddle:void 0,enableBottom:void 0})]})}var fE={},ji={};Object.defineProperty(ji,"__esModule",{value:!0});ji.cssValue=ji.parseLengthAndUnit=void 0;var gR={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function pE(t){if(typeof t=="number")return{value:t,unit:"px"};var e,n=(t.match(/^[0-9.]*/)||"").toString();n.includes(".")?e=parseFloat(n):e=parseInt(n,10);var r=(t.match(/[^0-9]*$/)||"").toString();return gR[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}ji.parseLengthAndUnit=pE;function yR(t){var e=pE(t);return"".concat(e.value).concat(e.unit)}ji.cssValue=yR;var ju={};Object.defineProperty(ju,"__esModule",{value:!0});ju.createAnimation=void 0;var vR=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var s=i.sheet,o=`
    @keyframes `.concat(r,` {
      `).concat(e,`
    }
  `);return s&&s.insertRule(o,0),r};ju.createAnimation=vR;var Kl=Jt&&Jt.__assign||function(){return Kl=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Kl.apply(this,arguments)},wR=Jt&&Jt.__createBinding||(Object.create?function(t,e,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}),ER=Jt&&Jt.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),_R=Jt&&Jt.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&wR(e,t,n);return ER(e,t),e},SR=Jt&&Jt.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};Object.defineProperty(fE,"__esModule",{value:!0});var th=_R(_),nh=ji,mE=ju,IR=(0,mE.createAnimation)("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}","right"),TR=(0,mE.createAnimation)("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}","left");function CR(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,i=r===void 0?"#000000":r,s=t.speedMultiplier,o=s===void 0?1:s,a=t.cssOverride,l=a===void 0?{}:a,u=t.size,c=u===void 0?60:u,h=SR(t,["loading","color","speedMultiplier","cssOverride","size"]),d=(0,nh.parseLengthAndUnit)(c),m=d.value,v=d.unit,w=Kl({display:"inherit",width:(0,nh.cssValue)(c),height:(0,nh.cssValue)(c),position:"relative"},l),S=function(g){return{position:"absolute",top:"0",left:"0",width:"".concat(m).concat(v),height:"".concat(m).concat(v),border:"".concat(m/10).concat(v," solid ").concat(i),opacity:"0.4",borderRadius:"100%",animationFillMode:"forwards",perspective:"800px",animation:"".concat(g===1?IR:TR," ").concat(2/o,"s 0s infinite linear")}};return n?th.createElement("span",Kl({style:w},h),th.createElement("span",{style:S(1)}),th.createElement("span",{style:S(2)})):null}var kR=fE.default=CR;const xR="_containerButtons_1diw6_1",NR={containerButtons:xR};function AR(t){return wt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16 13v-2H7V8l-5 4 5 4v-3z"}},{tag:"path",attr:{d:"M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"}}]})(t)}function gE(t){return wt({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#78909C",d:"M40,41H8c-2.2,0-4-1.8-4-4l0-20.9c0-1.3,0.6-2.5,1.7-3.3L24,0l18.3,12.8c1.1,0.7,1.7,2,1.7,3.3V37 C44,39.2,42.2,41,40,41z"}},{tag:"rect",attr:{x:"12",y:"11",fill:"#fff",width:"24",height:"22"}},{tag:"path",attr:{fill:"#CFD8DC",d:"M40,41H8c-2.2,0-4-1.8-4-4l0-20l20,13l20-13v20C44,39.2,42.2,41,40,41z"}},{tag:"g",attr:{fill:"#4CAF50"},child:[{tag:"rect",attr:{x:"22",y:"14",width:"4",height:"12"}},{tag:"rect",attr:{x:"18",y:"18",width:"12",height:"4"}}]}]})(t)}function RR(){const{signOut:t}=_.useContext(Mu);return p.jsxs("div",{className:"App",children:[p.jsxs("div",{children:[p.jsx(Ko,{}),p.jsx(bu,{enableBottom:!1})]}),p.jsxs("div",{className:NR.containerButtons,children:[p.jsx(Pr,{action:()=>t(),text:"Logout",children:p.jsx(AR,{style:{color:"white",fontSize:"100px"}})}),p.jsx(Pr,{link:"guests",navigate:"/guests",text:"Guests",children:p.jsx(gE,{style:{color:"white",fontSize:"100px"}})}),p.jsx(Pr,{})]})]})}const PR="_changeSize_171ld_1",DR={changeSize:PR,in:"_in_171ld_1"};function Fi({type:t,onChange:e,placeholder:n,value:r}){return p.jsx("input",{className:DR.input,type:t,onChange:i=>{e(i.target.value)},placeholder:n,value:r})}const OR="_containerMid_3gaez_1",LR="_containerLogin_3gaez_9",$R="_change_3gaez_1",MR="_typing_3gaez_1",La={containerMid:OR,containerLogin:LR,change:$R,typing:MR};function bR(){const{user:t,signIn:e,err:n}=_.useContext(Mu),r=ns(),[i,s]=_.useState(),[o,a]=_.useState();_.useEffect(()=>{t&&r(window.history.back())},[t]);const l=(c,h)=>{e(c,h)},u=()=>{if(n)return p.jsx("p",{children:"Wrong email or password"})};return p.jsxs("div",{className:"App",children:[p.jsx(Ko,{}),p.jsxs("div",{className:La.containerMid,children:[p.jsx(bu,{enableTop:!0,enableMiddle:!1,enableBottom:!1}),p.jsxs("div",{className:La.containerLogin,children:[p.jsx("span",{children:u()}),p.jsx(Fi,{type:"text",onChange:s,placeholder:"Email"}),p.jsx(Fi,{type:"password",onChange:a,placeholder:"Password"})]}),p.jsx("div",{className:La.buttons,children:p.jsx("button",{className:La.button,onClick:()=>{l(i,o)},children:"Login"})})]})]})}const jR="_container_fhds9_1",FR="_header_fhds9_15",UR="_title_fhds9_35",VR="_cards_fhds9_43",BR="_peoplesInviteds_fhds9_67",Ss={container:jR,header:FR,title:UR,cards:VR,peoplesInviteds:BR},zR="_card_14g1d_1",HR="_title_14g1d_53",WR="_counter_14g1d_53",qR="_text_14g1d_77",$a={card:zR,title:HR,counter:WR,text:qR};function fr({title:t,text:e,children:n,color:r="",cursor:i="default",link:s}){return p.jsx(p.Fragment,{children:p.jsxs("a",{href:s,className:$a.card,style:{backgroundColor:`${r}`,borderColor:`${r}`,cursor:`${i}`},children:[p.jsx("div",{className:$a.icon,children:n}),p.jsx("p",{className:$a.title,children:t}),p.jsx("p",{className:$a.counter,children:e})]})})}function KR(t){return wt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"rect",attr:{x:"3",y:"10",width:"18",height:"4",rx:"2",fill:"currentColor"}}]})(t)}function rh(t){return wt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"circle",attr:{cx:"8",cy:"8",r:"8"}}]})(t)}function GR(t){return wt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"}}]})(t)}function QR(t){return wt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}}]})(t)}function YR(t){return wt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}}]})(t)}function XR(t){return wt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"}}]})(t)}const JR="_container_19thp_1",ZR="_info_19thp_1",eP="_name_19thp_25",tP="_trash_19thp_25",nP="_icon_19thp_47",pr={container:JR,info:ZR,name:eP,trash:tP,icon:nP};var rP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,Np=Np||{},j=rP||self;function Gl(){}function Fu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Go(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function iP(t){return Object.prototype.hasOwnProperty.call(t,ih)&&t[ih]||(t[ih]=++sP)}var ih="closure_uid_"+(1e9*Math.random()>>>0),sP=0;function oP(t,e,n){return t.call.apply(t.bind,arguments)}function aP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Be(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Be=oP:Be=aP,Be.apply(null,arguments)}function Ma(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ne(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function lr(){this.s=this.s,this.o=this.o}var lP=0;lr.prototype.s=!1;lr.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),lP!=0)&&iP(this)};lr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ap(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Py(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Fu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var uP=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",Gl,e),j.removeEventListener("test",Gl,e)}catch{}return t}();function Ql(t){return/^[\s\xa0]*$/.test(t)}var Dy=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function sh(t,e){return t<e?-1:t>e?1:0}function Uu(){var t=j.navigator;return t&&(t=t.userAgent)?t:""}function Wt(t){return Uu().indexOf(t)!=-1}function Rp(t){return Rp[" "](t),t}Rp[" "]=Gl;function vE(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var cP=Wt("Opera"),Ui=Wt("Trident")||Wt("MSIE"),wE=Wt("Edge"),Ld=wE||Ui,EE=Wt("Gecko")&&!(Uu().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge"))&&!(Wt("Trident")||Wt("MSIE"))&&!Wt("Edge"),hP=Uu().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge");function _E(){var t=j.document;return t?t.documentMode:void 0}var Yl;e:{var oh="",ah=function(){var t=Uu();if(EE)return/rv:([^\);]+)(\)|;)/.exec(t);if(wE)return/Edge\/([\d\.]+)/.exec(t);if(Ui)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hP)return/WebKit\/(\S+)/.exec(t);if(cP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ah&&(oh=ah?ah[1]:""),Ui){var lh=_E();if(lh!=null&&lh>parseFloat(oh)){Yl=String(lh);break e}}Yl=oh}var dP={};function fP(){return vE(dP,9,function(){let t=0;const e=Dy(String(Yl)).split("."),n=Dy("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=sh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||sh(i[2].length==0,s[2].length==0)||sh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var $d;if(j.document&&Ui){var Oy=_E();$d=Oy||parseInt(Yl,10)||void 0}else $d=void 0;var pP=$d;function Co(t,e){if(ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(EE){e:{try{Rp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:mP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Co.$.h.call(this)}}Ne(Co,ze);var mP={2:"touch",3:"pen",4:"mouse"};Co.prototype.h=function(){Co.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Qo="closure_listenable_"+(1e6*Math.random()|0),gP=0;function yP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++gP,this.fa=this.ia=!1}function Vu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Pp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function SE(t){const e={};for(const n in t)e[n]=t[n];return e}const Ly="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function IE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Ly.length;s++)n=Ly[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Bu(t){this.src=t,this.g={},this.h=0}Bu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=bd(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new yP(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Md(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=yE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Vu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function bd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Dp="closure_lm_"+(1e6*Math.random()|0),uh={};function TE(t,e,n,r,i){if(r&&r.once)return kE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)TE(t,e[s],n,r,i);return null}return n=$p(n),t&&t[Qo]?t.O(e,n,Go(r)?!!r.capture:!!r,i):CE(t,e,n,!1,r,i)}function CE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Go(i)?!!i.capture:!!i,a=Lp(t);if(a||(t[Dp]=a=new Bu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=vP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)uP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(NE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function vP(){function t(n){return e.call(t.src,t.listener,n)}const e=wP;return t}function kE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)kE(t,e[s],n,r,i);return null}return n=$p(n),t&&t[Qo]?t.P(e,n,Go(r)?!!r.capture:!!r,i):CE(t,e,n,!0,r,i)}function xE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)xE(t,e[s],n,r,i);else r=Go(r)?!!r.capture:!!r,n=$p(n),t&&t[Qo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=bd(s,n,r,i),-1<n&&(Vu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Lp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=bd(e,n,r,i)),(n=-1<t?e[t]:null)&&Op(n))}function Op(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Qo])Md(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(NE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Lp(e))?(Md(n,t),n.h==0&&(n.src=null,e[Dp]=null)):Vu(t)}}}function NE(t){return t in uh?uh[t]:uh[t]="on"+t}function wP(t,e){if(t.fa)t=!0;else{e=new Co(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Op(t),t=n.call(r,e)}return t}function Lp(t){return t=t[Dp],t instanceof Bu?t:null}var ch="__closure_events_fn_"+(1e9*Math.random()>>>0);function $p(t){return typeof t=="function"?t:(t[ch]||(t[ch]=function(e){return t.handleEvent(e)}),t[ch])}function xe(){lr.call(this),this.i=new Bu(this),this.S=this,this.J=null}Ne(xe,lr);xe.prototype[Qo]=!0;xe.prototype.removeEventListener=function(t,e,n,r){xE(this,t,e,n,r)};function Oe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ze(e,t);else if(e instanceof ze)e.target=e.target||t;else{var i=e;e=new ze(r,t),IE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ba(o,r,!0,e)&&i}if(o=e.g=t,i=ba(o,r,!0,e)&&i,i=ba(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ba(o,r,!1,e)&&i}xe.prototype.N=function(){if(xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Vu(n[r]);delete t.g[e],t.h--}}this.J=null};xe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};xe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ba(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Md(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Mp=j.JSON.stringify;function EP(){var t=PE;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _P{constructor(){this.h=this.g=null}add(e,n){const r=AE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var AE=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new SP,t=>t.reset());class SP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function IP(t){j.setTimeout(()=>{throw t},0)}function RE(t,e){jd||TP(),Fd||(jd(),Fd=!0),PE.add(t,e)}var jd;function TP(){var t=j.Promise.resolve(void 0);jd=function(){t.then(CP)}}var Fd=!1,PE=new _P;function CP(){for(var t;t=EP();){try{t.h.call(t.g)}catch(n){IP(n)}var e=AE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Fd=!1}function zu(t,e){xe.call(this),this.h=t||1,this.g=e||j,this.j=Be(this.qb,this),this.l=Date.now()}Ne(zu,xe);N=zu.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Oe(this,"tick"),this.ga&&(bp(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){zu.$.N.call(this),bp(this),delete this.g};function jp(t,e,n){if(typeof t=="function")n&&(t=Be(t,n));else if(t&&typeof t.handleEvent=="function")t=Be(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function DE(t){t.g=jp(()=>{t.g=null,t.i&&(t.i=!1,DE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class kP extends lr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:DE(this)}N(){super.N(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ko(t){lr.call(this),this.h=t,this.g={}}Ne(ko,lr);var $y=[];function OE(t,e,n,r){Array.isArray(n)||(n&&($y[0]=n.toString()),n=$y);for(var i=0;i<n.length;i++){var s=TE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function LE(t){Pp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Op(e)},t),t.g={}}ko.prototype.N=function(){ko.$.N.call(this),LE(this)};ko.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Hu(){this.g=!0}Hu.prototype.Ea=function(){this.g=!1};function xP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function NP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function yi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+RP(t,n)+(r?" "+r:"")})}function AP(t,e){t.info(function(){return"TIMEOUT: "+e})}Hu.prototype.info=function(){};function RP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Mp(n)}catch{return e}}var Yr={},My=null;function Wu(){return My=My||new xe}Yr.Ta="serverreachability";function $E(t){ze.call(this,Yr.Ta,t)}Ne($E,ze);function xo(t){const e=Wu();Oe(e,new $E(e))}Yr.STAT_EVENT="statevent";function ME(t,e){ze.call(this,Yr.STAT_EVENT,t),this.stat=e}Ne(ME,ze);function Ye(t){const e=Wu();Oe(e,new ME(e,t))}Yr.Ua="timingevent";function bE(t,e){ze.call(this,Yr.Ua,t),this.size=e}Ne(bE,ze);function Yo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var qu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},jE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Fp(){}Fp.prototype.h=null;function by(t){return t.h||(t.h=t.i())}function FE(){}var Xo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Up(){ze.call(this,"d")}Ne(Up,ze);function Vp(){ze.call(this,"c")}Ne(Vp,ze);var Ud;function Ku(){}Ne(Ku,Fp);Ku.prototype.g=function(){return new XMLHttpRequest};Ku.prototype.i=function(){return{}};Ud=new Ku;function Jo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ko(this),this.P=PP,t=Ld?125:void 0,this.V=new zu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new UE}function UE(){this.i=null,this.g="",this.h=!1}var PP=45e3,Vd={},Xl={};N=Jo.prototype;N.setTimeout=function(t){this.P=t};function Bd(t,e,n){t.L=1,t.v=Qu(vn(e)),t.s=n,t.S=!0,VE(t,null)}function VE(t,e){t.G=Date.now(),Zo(t),t.A=vn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),QE(n.i,"t",r),t.C=0,n=t.l.I,t.h=new UE,t.g=g_(t.l,n?e:null,!t.s),0<t.O&&(t.M=new kP(Be(t.Pa,t,t.g),t.O)),OE(t.U,t.g,"readystatechange",t.nb),e=t.I?SE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),xo(),xP(t.j,t.u,t.A,t.m,t.W,t.s)}N.nb=function(t){t=t.target;const e=this.M;e&&un(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const c=un(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Ld||this.g&&(this.h.h||this.g.ja()||Vy(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?xo(3):xo(2)),Gu(this);var n=this.g.da();this.aa=n;t:if(BE(this)){var r=Vy(this.g);t="";var i=r.length,s=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tr(this),Qs(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,NP(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ql(a)){var u=a;break t}}u=null}if(n=u)yi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zd(this,n);else{this.i=!1,this.o=3,Ye(12),Tr(this),Qs(this);break e}}this.S?(zE(this,c,o),Ld&&this.i&&c==3&&(OE(this.U,this.V,"tick",this.mb),this.V.start())):(yi(this.j,this.m,o,null),zd(this,o)),c==4&&Tr(this),this.i&&!this.J&&(c==4?d_(this.l,this):(this.i=!1,Zo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ye(12)):(this.o=0,Ye(13)),Tr(this),Qs(this)}}}catch{}finally{}};function BE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function zE(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=DP(t,n),i==Xl){e==4&&(t.o=4,Ye(14),r=!1),yi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Vd){t.o=4,Ye(15),yi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else yi(t.j,t.m,i,null),zd(t,i);BE(t)&&i!=Xl&&i!=Vd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ye(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gp(e),e.L=!0,Ye(11))):(yi(t.j,t.m,n,"[Invalid Chunked Response]"),Tr(t),Qs(t))}N.mb=function(){if(this.g){var t=un(this.g),e=this.g.ja();this.C<e.length&&(Gu(this),zE(this,t,e),this.i&&t!=4&&Zo(this))}};function DP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Xl:(n=Number(e.substring(n,r)),isNaN(n)?Vd:(r+=1,r+n>e.length?Xl:(e=e.substr(r,n),t.C=r+n,e)))}N.cancel=function(){this.J=!0,Tr(this)};function Zo(t){t.Y=Date.now()+t.P,HE(t,t.P)}function HE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Yo(Be(t.lb,t),e)}function Gu(t){t.B&&(j.clearTimeout(t.B),t.B=null)}N.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(AP(this.j,this.A),this.L!=2&&(xo(),Ye(17)),Tr(this),this.o=2,Qs(this)):HE(this,this.Y-t)};function Qs(t){t.l.H==0||t.J||d_(t.l,t)}function Tr(t){Gu(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,bp(t.V),LE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function zd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Hd(n.h,t))){if(!t.K&&Hd(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)eu(n),Ju(n);else break e;Kp(n),Ye(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=Yo(Be(n.ib,n),6e3));if(1>=JE(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Cr(n,11)}else if((t.K||n.g==t)&&eu(n),!Ql(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const c=u[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const h=u[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.h;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Bp(s,s.h),s.h=null))}if(r.F){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,se(r.G,r.F,w))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=m_(r,r.I?r.oa:null,r.Y),o.K){ZE(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Gu(a),Zo(a)),r.g=o}else c_(r);0<n.i.length&&Zu(n)}else u[0]!="stop"&&u[0]!="close"||Cr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Cr(n,7):qp(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}xo(4)}catch{}}function OP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Fu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function LP(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Fu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function WE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Fu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=LP(t),r=OP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var qE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $P(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Dr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Dr){this.h=e!==void 0?e:t.h,Jl(this,t.j),this.s=t.s,this.g=t.g,Zl(this,t.m),this.l=t.l,e=t.i;var n=new No;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),jy(this,n),this.o=t.o}else t&&(n=String(t).match(qE))?(this.h=!!e,Jl(this,n[1]||"",!0),this.s=Os(n[2]||""),this.g=Os(n[3]||"",!0),Zl(this,n[4]),this.l=Os(n[5]||"",!0),jy(this,n[6]||"",!0),this.o=Os(n[7]||"")):(this.h=!!e,this.i=new No(null,this.h))}Dr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ls(e,Fy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ls(e,Fy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ls(n,n.charAt(0)=="/"?jP:bP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ls(n,UP)),t.join("")};function vn(t){return new Dr(t)}function Jl(t,e,n){t.j=n?Os(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Zl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function jy(t,e,n){e instanceof No?(t.i=e,VP(t.i,t.h)):(n||(e=Ls(e,FP)),t.i=new No(e,t.h))}function se(t,e,n){t.i.set(e,n)}function Qu(t){return se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Os(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ls(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,MP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function MP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Fy=/[#\/\?@]/g,bP=/[#\?:]/g,jP=/[#\?]/g,FP=/[#\?@]/g,UP=/#/g;function No(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ur(t){t.g||(t.g=new Map,t.h=0,t.i&&$P(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=No.prototype;N.add=function(t,e){ur(this),this.i=null,t=os(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function KE(t,e){ur(t),e=os(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function GE(t,e){return ur(t),e=os(t,e),t.g.has(e)}N.forEach=function(t,e){ur(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};N.sa=function(){ur(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};N.Z=function(t){ur(this);let e=[];if(typeof t=="string")GE(this,t)&&(e=e.concat(this.g.get(os(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return ur(this),this.i=null,t=os(this,t),GE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function QE(t,e,n){KE(t,e),0<n.length&&(t.i=null,t.g.set(os(t,e),Ap(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function os(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function VP(t,e){e&&!t.j&&(ur(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(KE(this,r),QE(this,i,n))},t)),t.j=e}var BP=class{constructor(t,e){this.h=t,this.g=e}};function YE(t){this.l=t||zP,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ka&&j.g.Ka()&&j.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zP=10;function XE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function JE(t){return t.h?1:t.g?t.g.size:0}function Hd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Bp(t,e){t.g?t.g.add(e):t.h=e}function ZE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}YE.prototype.cancel=function(){if(this.i=e_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function e_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ap(t.i)}function zp(){}zp.prototype.stringify=function(t){return j.JSON.stringify(t,void 0)};zp.prototype.parse=function(t){return j.JSON.parse(t,void 0)};function HP(){this.g=new zp}function WP(t,e,n){const r=n||"";try{WE(t,function(i,s){let o=i;Go(i)&&(o=Mp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function qP(t,e){const n=new Hu;if(j.Image){const r=new Image;r.onload=Ma(ja,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ma(ja,n,r,"TestLoadImage: error",!1,e),r.onabort=Ma(ja,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ma(ja,n,r,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ja(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ea(t){this.l=t.fc||null,this.j=t.ob||!1}Ne(ea,Fp);ea.prototype.g=function(){return new Yu(this.l,this.j)};ea.prototype.i=function(t){return function(){return t}}({});function Yu(t,e){xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Hp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ne(Yu,xe);var Hp=0;N=Yu.prototype;N.open=function(t,e){if(this.readyState!=Hp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ao(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||j).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ta(this)),this.readyState=Hp};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ao(this)),this.g&&(this.readyState=3,Ao(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;t_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function t_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ta(this):Ao(this),this.readyState==3&&t_(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,ta(this))};N.Ya=function(t){this.g&&(this.response=t,ta(this))};N.ka=function(){this.g&&ta(this)};function ta(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ao(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ao(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Yu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var KP=j.JSON.parse;function he(t){xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=n_,this.L=this.M=!1}Ne(he,xe);var n_="",GP=/^https?$/i,QP=["POST","PUT"];N=he.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ud.g(),this.C=this.u?by(this.u):by(Ud),this.g.onreadystatechange=Be(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Uy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=j.FormData&&t instanceof j.FormData,!(0<=yE(QP,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{s_(this),0<this.B&&((this.L=YP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Be(this.ua,this)):this.A=jp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Uy(this,s)}};function YP(t){return Ui&&fP()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof Np<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))};function Uy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,r_(t),Xu(t)}function r_(t){t.F||(t.F=!0,Oe(t,"complete"),Oe(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Oe(this,"complete"),Oe(this,"abort"),Xu(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xu(this,!0)),he.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?i_(this):this.kb())};N.kb=function(){i_(this)};function i_(t){if(t.h&&typeof Np<"u"&&(!t.C[1]||un(t)!=4||t.da()!=2)){if(t.v&&un(t)==4)jp(t.La,0,t);else if(Oe(t,"readystatechange"),un(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(qE)[1]||null;if(!i&&j.self&&j.self.location){var s=j.self.location.protocol;i=s.substr(0,s.length-1)}r=!GP.test(i?i.toLowerCase():"")}n=r}if(n)Oe(t,"complete"),Oe(t,"success");else{t.m=6;try{var o=2<un(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",r_(t)}}finally{Xu(t)}}}}function Xu(t,e){if(t.g){s_(t);const n=t.g,r=t.C[0]?Gl:null;t.g=null,t.C=null,e||Oe(t,"ready");try{n.onreadystatechange=r}catch{}}}function s_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}function un(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),KP(e)}};function Vy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case n_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function o_(t){let e="";return Pp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Wp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=o_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):se(t,e,n))}function Is(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function a_(t){this.Ga=0,this.i=[],this.j=new Hu,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Is("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Is("baseRetryDelayMs",5e3,t),this.hb=Is("retryDelaySeedMs",1e4,t),this.eb=Is("forwardChannelMaxRetries",2,t),this.xa=Is("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new YE(t&&t.concurrentRequestLimit),this.Ja=new HP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}N=a_.prototype;N.qa=8;N.H=1;function qp(t){if(l_(t),t.H==3){var e=t.W++,n=vn(t.G);se(n,"SID",t.J),se(n,"RID",e),se(n,"TYPE","terminate"),na(t,n),e=new Jo(t,t.j,e,void 0),e.L=2,e.v=Qu(vn(n)),n=!1,j.navigator&&j.navigator.sendBeacon&&(n=j.navigator.sendBeacon(e.v.toString(),"")),!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=g_(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Zo(e)}p_(t)}function Ju(t){t.g&&(Gp(t),t.g.cancel(),t.g=null)}function l_(t){Ju(t),t.u&&(j.clearTimeout(t.u),t.u=null),eu(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function Zu(t){XE(t.h)||t.m||(t.m=!0,RE(t.Na,t),t.C=0)}function XP(t,e){return JE(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Yo(Be(t.Na,t,e),f_(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Jo(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=SE(s),IE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=u_(this,i,e),n=vn(this.G),se(n,"RID",t),se(n,"CVER",22),this.F&&se(n,"X-HTTP-Session-Id",this.F),na(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(o_(s)))+"&"+e:this.o&&Wp(n,this.o,s)),Bp(this.h,i),this.bb&&se(n,"TYPE","init"),this.P?(se(n,"$req",e),se(n,"SID","null"),i.ba=!0,Bd(i,n,null)):Bd(i,n,e),this.H=2}}else this.H==3&&(t?By(this,t):this.i.length==0||XE(this.h)||By(this))};function By(t,e){var n;e?n=e.m:n=t.W++;const r=vn(t.G);se(r,"SID",t.J),se(r,"RID",n),se(r,"AID",t.V),na(t,r),t.o&&t.s&&Wp(r,t.o,t.s),n=new Jo(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=u_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Bp(t.h,n),Bd(n,r,e)}function na(t,e){t.ma&&Pp(t.ma,function(n,r){se(e,r,n)}),t.l&&WE({},function(n,r){se(e,r,n)})}function u_(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Be(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{WP(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function c_(t){t.g||t.u||(t.ba=1,RE(t.Ma,t),t.A=0)}function Kp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Yo(Be(t.Ma,t),f_(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,h_(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Yo(Be(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Ye(10),Ju(this),h_(this))};function Gp(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function h_(t){t.g=new Jo(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=vn(t.wa);se(e,"RID","rpc"),se(e,"SID",t.J),se(e,"CI",t.M?"0":"1"),se(e,"AID",t.V),se(e,"TYPE","xmlhttp"),na(t,e),t.o&&t.s&&Wp(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Qu(vn(e)),n.s=null,n.S=!0,VE(n,t)}N.ib=function(){this.v!=null&&(this.v=null,Ju(this),Kp(this),Ye(19))};function eu(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function d_(t,e){var n=null;if(t.g==e){eu(t),Gp(t),t.g=null;var r=2}else if(Hd(t.h,e))n=e.F,ZE(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Wu(),Oe(r,new bE(r,n)),Zu(t)}else c_(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&XP(t,e)||r==2&&Kp(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Cr(t,5);break;case 4:Cr(t,10);break;case 3:Cr(t,6);break;default:Cr(t,2)}}}function f_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Cr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Be(t.pb,t);n||(n=new Dr("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||Jl(n,"https"),Qu(n)),qP(n.toString(),r)}else Ye(2);t.H=0,t.l&&t.l.za(e),p_(t),l_(t)}N.pb=function(t){t?(this.j.info("Successfully pinged google.com"),Ye(2)):(this.j.info("Failed to ping google.com"),Ye(1))};function p_(t){if(t.H=0,t.pa=[],t.l){const e=e_(t.h);(e.length!=0||t.i.length!=0)&&(Py(t.pa,e),Py(t.pa,t.i),t.h.i.length=0,Ap(t.i),t.i.length=0),t.l.ya()}}function m_(t,e,n){var r=n instanceof Dr?vn(n):new Dr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Zl(r,r.m);else{var i=j.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Dr(null,void 0);r&&Jl(s,r),e&&(s.g=e),i&&Zl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&se(r,n,e),se(r,"VER",t.qa),na(t,r),r}function g_(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new he(new ea({ob:!0})):new he(t.va),e.Oa(t.I),e}function y_(){}N=y_.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.Va=function(){};function tu(){if(Ui&&!(10<=Number(pP)))throw Error("Environmental error: no available transport.")}tu.prototype.g=function(t,e){return new gt(t,e)};function gt(t,e){xe.call(this),this.g=new a_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ql(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ql(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new as(this)}Ne(gt,xe);gt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;Ye(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=m_(t,null,t.Y),Zu(t)};gt.prototype.close=function(){qp(this.g)};gt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Mp(t),t=n);e.i.push(new BP(e.fb++,t)),e.H==3&&Zu(e)};gt.prototype.N=function(){this.g.l=null,delete this.j,qp(this.g),delete this.g,gt.$.N.call(this)};function v_(t){Up.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ne(v_,Up);function w_(){Vp.call(this),this.status=1}Ne(w_,Vp);function as(t){this.g=t}Ne(as,y_);as.prototype.Ba=function(){Oe(this.g,"a")};as.prototype.Aa=function(t){Oe(this.g,new v_(t))};as.prototype.za=function(t){Oe(this.g,new w_)};as.prototype.ya=function(){Oe(this.g,"b")};function JP(){this.blockSize=-1}function Ft(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ne(Ft,JP);Ft.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function hh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Ft.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)hh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){hh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){hh(this,r),i=0;break}}this.h=i,this.i+=e};Ft.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function X(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var ZP={};function Qp(t){return-128<=t&&128>t?vE(ZP,t,function(e){return new X([e|0],0>e?-1:0)}):new X([t|0],0>t?-1:0)}function qt(t){if(isNaN(t)||!isFinite(t))return ki;if(0>t)return Pe(qt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Wd;return new X(e,0)}function E_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Pe(E_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=qt(Math.pow(e,8)),r=ki,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=qt(Math.pow(e,s)),r=r.R(s).add(qt(o))):(r=r.R(n),r=r.add(qt(o)))}return r}var Wd=4294967296,ki=Qp(0),qd=Qp(1),zy=Qp(16777216);N=X.prototype;N.ea=function(){if(St(this))return-Pe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Wd+r)*e,e*=Wd}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(cn(this))return"0";if(St(this))return"-"+Pe(this).toString(t);for(var e=qt(Math.pow(t,6)),n=this,r="";;){var i=ru(n,e).g;n=nu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,cn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function cn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function St(t){return t.h==-1}N.X=function(t){return t=nu(this,t),St(t)?-1:cn(t)?0:1};function Pe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new X(n,~t.h).add(qd)}N.abs=function(){return St(this)?Pe(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new X(n,n[n.length-1]&-2147483648?-1:0)};function nu(t,e){return t.add(Pe(e))}N.R=function(t){if(cn(this)||cn(t))return ki;if(St(this))return St(t)?Pe(this).R(Pe(t)):Pe(Pe(this).R(t));if(St(t))return Pe(this.R(Pe(t)));if(0>this.X(zy)&&0>t.X(zy))return qt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Fa(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Fa(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Fa(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Fa(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new X(n,0)};function Fa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ts(t,e){this.g=t,this.h=e}function ru(t,e){if(cn(e))throw Error("division by zero");if(cn(t))return new Ts(ki,ki);if(St(t))return e=ru(Pe(t),e),new Ts(Pe(e.g),Pe(e.h));if(St(e))return e=ru(t,Pe(e)),new Ts(Pe(e.g),e.h);if(30<t.g.length){if(St(t)||St(e))throw Error("slowDivide_ only works with positive integers.");for(var n=qd,r=e;0>=r.X(t);)n=Hy(n),r=Hy(r);var i=ei(n,1),s=ei(r,1);for(r=ei(r,2),n=ei(n,2);!cn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ei(r,1),n=ei(n,1)}return e=nu(t,i.R(e)),new Ts(i,e)}for(i=ki;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=qt(n),o=s.R(e);St(o)||0<o.X(t);)n-=r,s=qt(n),o=s.R(e);cn(s)&&(s=qd),i=i.add(s),t=nu(t,o)}return new Ts(i,t)}N.gb=function(t){return ru(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new X(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new X(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new X(n,this.h^t.h)};function Hy(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new X(n,t.h)}function ei(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new X(i,t.h)}tu.prototype.createWebChannel=tu.prototype.g;gt.prototype.send=gt.prototype.u;gt.prototype.open=gt.prototype.m;gt.prototype.close=gt.prototype.close;qu.NO_ERROR=0;qu.TIMEOUT=8;qu.HTTP_ERROR=6;jE.COMPLETE="complete";FE.EventType=Xo;Xo.OPEN="a";Xo.CLOSE="b";Xo.ERROR="c";Xo.MESSAGE="d";xe.prototype.listen=xe.prototype.O;he.prototype.listenOnce=he.prototype.P;he.prototype.getLastError=he.prototype.Sa;he.prototype.getLastErrorCode=he.prototype.Ia;he.prototype.getStatus=he.prototype.da;he.prototype.getResponseJson=he.prototype.Wa;he.prototype.getResponseText=he.prototype.ja;he.prototype.send=he.prototype.ha;he.prototype.setWithCredentials=he.prototype.Oa;Ft.prototype.digest=Ft.prototype.l;Ft.prototype.reset=Ft.prototype.reset;Ft.prototype.update=Ft.prototype.j;X.prototype.add=X.prototype.add;X.prototype.multiply=X.prototype.R;X.prototype.modulo=X.prototype.gb;X.prototype.compare=X.prototype.X;X.prototype.toNumber=X.prototype.ea;X.prototype.toString=X.prototype.toString;X.prototype.getBits=X.prototype.D;X.fromNumber=qt;X.fromString=E_;var eD=function(){return new tu},tD=function(){return Wu()},dh=qu,nD=jE,rD=Yr,Wy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},iD=ea,Ua=FE,sD=he,oD=Ft,xi=X;const qy="@firebase/firestore";/**
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
 */class je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}je.UNAUTHENTICATED=new je(null),je.GOOGLE_CREDENTIALS=new je("google-credentials-uid"),je.FIRST_PARTY=new je("first-party-uid"),je.MOCK_USER=new je("mock-user");/**
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
 */let ls="9.22.0";/**
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
 */const Vr=new Pu("@firebase/firestore");function Ky(){return Vr.logLevel}function L(t,...e){if(Vr.logLevel<=G.DEBUG){const n=e.map(Yp);Vr.debug(`Firestore (${ls}): ${t}`,...n)}}function wn(t,...e){if(Vr.logLevel<=G.ERROR){const n=e.map(Yp);Vr.error(`Firestore (${ls}): ${t}`,...n)}}function Vi(t,...e){if(Vr.logLevel<=G.WARN){const n=e.map(Yp);Vr.warn(`Firestore (${ls}): ${t}`,...n)}}function Yp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function b(t="Unexpected state"){const e=`FIRESTORE (${ls}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function re(t,e){t||b()}function U(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Vt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class __{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(je.UNAUTHENTICATED))}shutdown(){}}class lD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uD{constructor(e){this.t=e,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Or;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Or,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new __(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new je(e)}}class cD{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=je.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class hD{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new cD(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fD{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.T=n.token,new dD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class S_{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=pD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function Bi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Se{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Se(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new Se(0,0))}static max(){return new F(new Se(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ro{constructor(e,n,r){n===void 0?n=0:n>e.length&&b(),r===void 0?r=e.length-n:r>e.length-n&&b(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ro.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ro?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class te extends Ro{construct(e,n,r){return new te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new te(n)}static emptyPath(){return new te([])}}const mD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends Ro{construct(e,n,r){return new Ve(e,n,r)}static isValidIdentifier(e){return mD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(te.fromString(e))}static fromName(e){return new $(te.fromString(e).popFirst(5))}static empty(){return new $(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new te(e.slice()))}}function gD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new Se(n+1,0):new Se(n,r));return new nr(i,$.empty(),e)}function yD(t){return new nr(t.readTime,t.key,-1)}class nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new nr(F.min(),$.empty(),-1)}static max(){return new nr(F.max(),$.empty(),-1)}}function vD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ED{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ra(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==wD)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(i=>i?C.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new C((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new C((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ia(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Xp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Xp.ct=-1;function ec(t){return t==null}function iu(t){return t===0&&1/t==-1/0}function _D(t){return typeof t=="number"&&Number.isInteger(t)&&!iu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Gy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function I_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ue{constructor(e,n){this.comparator=e,this.root=n||Re.EMPTY}insert(e,n){return new ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Re.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Re.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Va(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Va(this.root,e,this.comparator,!1)}getReverseIterator(){return new Va(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Va(this.root,e,this.comparator,!0)}}class Va{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Re{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Re.RED,this.left=i??Re.EMPTY,this.right=s??Re.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Re(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Re.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Re.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}Re.EMPTY=null,Re.RED=!0,Re.BLACK=!1;Re.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Re(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qy(this.data.getIterator())}getIteratorFrom(e){return new Qy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Qy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new dt([])}unionWith(e){let n=new He(Ve.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class T_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new T_("Invalid base64 string: "+i):i}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const SD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rr(t){if(re(!!t),typeof t=="string"){let e=0;const n=SD.exec(t);if(re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(t.seconds),nanos:ye(t.nanos)}}function ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Br(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Zp(t){const e=t.mapValue.fields.__previous_value__;return Jp(e)?Zp(e):e}function Po(t){const e=rr(t.mapValue.fields.__local_write_time__.timestampValue);return new Se(e.seconds,e.nanos)}/**
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
 */class ID{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Do{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Do("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Do&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jp(t)?4:TD(t)?9007199254740991:10:b()}function en(t,e){if(t===e)return!0;const n=zr(t);if(n!==zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Po(t).isEqual(Po(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=rr(r.timestampValue),o=rr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Br(r.bytesValue).isEqual(Br(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ye(r.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(r.geoPointValue.longitude)===ye(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ye(r.integerValue)===ye(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ye(r.doubleValue),o=ye(i.doubleValue);return s===o?iu(s)===iu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Bi(t.arrayValue.values||[],e.arrayValue.values||[],en);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Gy(s)!==Gy(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!en(s[a],o[a])))return!1;return!0}(t,e);default:return b()}}function Oo(t,e){return(t.values||[]).find(n=>en(n,e))!==void 0}function zi(t,e){if(t===e)return 0;const n=zr(t),r=zr(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ye(i.integerValue||i.doubleValue),a=ye(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Yy(t.timestampValue,e.timestampValue);case 4:return Yy(Po(t),Po(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Br(i),a=Br(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Q(o[l],a[l]);if(u!==0)return u}return Q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Q(ye(i.latitude),ye(s.latitude));return o!==0?o:Q(ye(i.longitude),ye(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=zi(o[l],a[l]);if(u)return u}return Q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ba.mapValue&&s===Ba.mapValue)return 0;if(i===Ba.mapValue)return 1;if(s===Ba.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Q(a[c],u[c]);if(h!==0)return h;const d=zi(o[a[c]],l[u[c]]);if(d!==0)return d}return Q(a.length,u.length)}(t.mapValue,e.mapValue);default:throw b()}}function Yy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=rr(t),r=rr(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function Hi(t){return Kd(t)}function Kd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=rr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Br(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Kd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Kd(r.fields[a])}`;return s+"}"}(t.mapValue):b();var e,n}function Xy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Gd(t){return!!t&&"integerValue"in t}function em(t){return!!t&&"arrayValue"in t}function Jy(t){return!!t&&"nullValue"in t}function Zy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ul(t){return!!t&&"mapValue"in t}function Ys(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ys(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ys(t.arrayValue.values[n]);return e}return Object.assign({},t)}function TD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ul(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(n)}setAll(e){let n=Ve.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ys(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ul(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ul(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Xr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new rt(Ys(this.value))}}function C_(t){const e=[];return Xr(t.fields,(n,r)=>{const i=new Ve([n]);if(ul(r)){const s=C_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new dt(e)}/**
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
 */class Ue{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ue(e,0,F.min(),F.min(),F.min(),rt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ue(e,1,n,F.min(),r,i,0)}static newNoDocument(e,n){return new Ue(e,2,n,F.min(),F.min(),rt.empty(),0)}static newUnknownDocument(e,n){return new Ue(e,3,n,F.min(),F.min(),rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class su{constructor(e,n){this.position=e,this.inclusive=n}}function ev(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=zi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function tv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!en(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xs{constructor(e,n="asc"){this.field=e,this.dir=n}}function CD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class k_{}class we extends k_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xD(e,n,r):n==="array-contains"?new RD(e,r):n==="in"?new PD(e,r):n==="not-in"?new DD(e,r):n==="array-contains-any"?new OD(e,r):new we(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ND(e,r):new AD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(zi(n,this.value)):n!==null&&zr(this.value)===zr(n)&&this.matchesComparison(zi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ut extends k_{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Ut(e,n)}matches(e){return x_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function x_(t){return t.op==="and"}function N_(t){return kD(t)&&x_(t)}function kD(t){for(const e of t.filters)if(e instanceof Ut)return!1;return!0}function Qd(t){if(t instanceof we)return t.field.canonicalString()+t.op.toString()+Hi(t.value);if(N_(t))return t.filters.map(e=>Qd(e)).join(",");{const e=t.filters.map(n=>Qd(n)).join(",");return`${t.op}(${e})`}}function A_(t,e){return t instanceof we?function(n,r){return r instanceof we&&n.op===r.op&&n.field.isEqual(r.field)&&en(n.value,r.value)}(t,e):t instanceof Ut?function(n,r){return r instanceof Ut&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&A_(s,r.filters[o]),!0):!1}(t,e):void b()}function R_(t){return t instanceof we?function(e){return`${e.field.canonicalString()} ${e.op} ${Hi(e.value)}`}(t):t instanceof Ut?function(e){return e.op.toString()+" {"+e.getFilters().map(R_).join(" ,")+"}"}(t):"Filter"}class xD extends we{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class ND extends we{constructor(e,n){super(e,"in",n),this.keys=P_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class AD extends we{constructor(e,n){super(e,"not-in",n),this.keys=P_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function P_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class RD extends we{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return em(n)&&Oo(n.arrayValue,this.value)}}class PD extends we{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Oo(this.value.arrayValue,n)}}class DD extends we{constructor(e,n){super(e,"not-in",n)}matches(e){if(Oo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Oo(this.value.arrayValue,n)}}class OD extends we{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!em(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Oo(this.value.arrayValue,r))}}/**
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
 */class LD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function nv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new LD(t,e,n,r,i,s,o)}function tm(t){const e=U(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Qd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ec(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Hi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Hi(r)).join(",")),e.dt=n}return e.dt}function nm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!A_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tv(t.startAt,e.startAt)&&tv(t.endAt,e.endAt)}function Yd(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class sa{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function $D(t,e,n,r,i,s,o,a){return new sa(t,e,n,r,i,s,o,a)}function rm(t){return new sa(t)}function rv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function D_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function im(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function O_(t){return t.collectionGroup!==null}function Ni(t){const e=U(t);if(e.wt===null){e.wt=[];const n=im(e),r=D_(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Xs(n)),e.wt.push(new Xs(Ve.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Xs(Ve.keyField(),s))}}}return e.wt}function En(t){const e=U(t);if(!e._t)if(e.limitType==="F")e._t=nv(e.path,e.collectionGroup,Ni(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ni(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Xs(s.field,o))}const r=e.endAt?new su(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new su(e.startAt.position,e.startAt.inclusive):null;e._t=nv(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Xd(t,e){e.getFirstInequalityField(),im(t);const n=t.filters.concat([e]);return new sa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Jd(t,e,n){return new sa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tc(t,e){return nm(En(t),En(e))&&t.limitType===e.limitType}function L_(t){return`${tm(En(t))}|lt:${t.limitType}`}function Zd(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>R_(r)).join(", ")}]`),ec(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Hi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Hi(r)).join(",")),`Target(${n})`}(En(t))}; limitType=${t.limitType})`}function nc(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):$.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Ni(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=ev(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ni(n),r)||n.endAt&&!function(i,s,o){const a=ev(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ni(n),r))}(t,e)}function MD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $_(t){return(e,n)=>{let r=!1;for(const i of Ni(t)){const s=bD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function bD(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?zi(a,l):b()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
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
 */class us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Xr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return I_(this.inner)}size(){return this.innerSize}}/**
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
 */const jD=new ue($.comparator);function _n(){return jD}const M_=new ue($.comparator);function $s(...t){let e=M_;for(const n of t)e=e.insert(n.key,n);return e}function b_(t){let e=M_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function kr(){return Js()}function j_(){return Js()}function Js(){return new us(t=>t.toString(),(t,e)=>t.isEqual(e))}const FD=new ue($.comparator),UD=new He($.comparator);function H(...t){let e=UD;for(const n of t)e=e.add(n);return e}const VD=new He(Q);function BD(){return VD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:iu(e)?"-0":e}}function U_(t){return{integerValue:""+t}}function zD(t,e){return _D(e)?U_(e):F_(t,e)}/**
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
 */class rc{constructor(){this._=void 0}}function HD(t,e,n){return t instanceof ou?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Jp(i)&&(i=Zp(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Lo?B_(t,e):t instanceof $o?z_(t,e):function(r,i){const s=V_(r,i),o=iv(s)+iv(r.gt);return Gd(s)&&Gd(r.gt)?U_(o):F_(r.serializer,o)}(t,e)}function WD(t,e,n){return t instanceof Lo?B_(t,e):t instanceof $o?z_(t,e):n}function V_(t,e){return t instanceof au?Gd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ou extends rc{}class Lo extends rc{constructor(e){super(),this.elements=e}}function B_(t,e){const n=H_(e);for(const r of t.elements)n.some(i=>en(i,r))||n.push(r);return{arrayValue:{values:n}}}class $o extends rc{constructor(e){super(),this.elements=e}}function z_(t,e){let n=H_(e);for(const r of t.elements)n=n.filter(i=>!en(i,r));return{arrayValue:{values:n}}}class au extends rc{constructor(e,n){super(),this.serializer=e,this.gt=n}}function iv(t){return ye(t.integerValue||t.doubleValue)}function H_(t){return em(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qD(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Lo&&r instanceof Lo||n instanceof $o&&r instanceof $o?Bi(n.elements,r.elements,en):n instanceof au&&r instanceof au?en(n.gt,r.gt):n instanceof ou&&r instanceof ou}(t.transform,e.transform)}class KD{constructor(e,n){this.version=e,this.transformResults=n}}class $t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $t}static exists(e){return new $t(void 0,e)}static updateTime(e){return new $t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ic{}function W_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sm(t.key,$t.none()):new oa(t.key,t.data,$t.none());{const n=t.data,r=rt.empty();let i=new He(Ve.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new cr(t.key,r,new dt(i.toArray()),$t.none())}}function GD(t,e,n){t instanceof oa?function(r,i,s){const o=r.value.clone(),a=ov(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof cr?function(r,i,s){if(!cl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=ov(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(q_(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Zs(t,e,n,r){return t instanceof oa?function(i,s,o,a){if(!cl(i.precondition,s))return o;const l=i.value.clone(),u=av(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof cr?function(i,s,o,a){if(!cl(i.precondition,s))return o;const l=av(i.fieldTransforms,a,s),u=s.data;return u.setAll(q_(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return cl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function QD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=V_(r.transform,i||null);s!=null&&(n===null&&(n=rt.empty()),n.set(r.field,s))}return n||null}function sv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Bi(n,r,(i,s)=>qD(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class oa extends ic{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class cr extends ic{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function q_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ov(t,e,n){const r=new Map;re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,WD(o,a,n[i]))}return r}function av(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,HD(s,o,e))}return r}class sm extends ic{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YD extends ic{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class XD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&GD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=j_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=W_(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&Bi(this.mutations,e.mutations,(n,r)=>sv(n,r))&&Bi(this.baseMutations,e.baseMutations,(n,r)=>sv(n,r))}}class om{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){re(e.mutations.length===r.length);let i=FD;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new om(e,n,r,i)}}/**
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
 */class JD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ZD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ge,q;function eO(t){switch(t){default:return b();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function K_(t){if(t===void 0)return wn("GRPC error has no .code"),I.UNKNOWN;switch(t){case ge.OK:return I.OK;case ge.CANCELLED:return I.CANCELLED;case ge.UNKNOWN:return I.UNKNOWN;case ge.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case ge.INTERNAL:return I.INTERNAL;case ge.UNAVAILABLE:return I.UNAVAILABLE;case ge.UNAUTHENTICATED:return I.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case ge.NOT_FOUND:return I.NOT_FOUND;case ge.ALREADY_EXISTS:return I.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return I.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case ge.ABORTED:return I.ABORTED;case ge.OUT_OF_RANGE:return I.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return I.UNIMPLEMENTED;case ge.DATA_LOSS:return I.DATA_LOSS;default:return b()}}(q=ge||(ge={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class am{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return za}static getOrCreateInstance(){return za===null&&(za=new am),za}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let za=null;/**
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
 */function tO(){return new TextEncoder}/**
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
 */const nO=new xi([4294967295,4294967295],0);function lv(t){const e=tO().encode(t),n=new oD;return n.update(e),new Uint8Array(n.digest())}function uv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new xi([n,r],0),new xi([i,s],0)]}class lm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ms(`Invalid padding: ${n}`);if(r<0)throw new Ms(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ms(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ms(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=xi.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(xi.fromNumber(r)));return i.compare(nO)===1&&(i=new xi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=lv(e),[r,i]=uv(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new lm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=lv(e),[r,i]=uv(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ms extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class sc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,aa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new sc(F.min(),i,new ue(Q),_n(),H())}}class aa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new aa(r,n,H(),H(),H())}}/**
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
 */class hl{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class G_{constructor(e,n){this.targetId=e,this.Vt=n}}class Q_{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class cv{constructor(){this.St=0,this.Dt=dv(),this.Ct=Ke.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=H(),n=H(),r=H();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:b()}}),new aa(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=dv()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class rO{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=_n(),this.zt=hv(),this.Wt=new ue(Q)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Yd(o))if(i===0){const a=new $(o.path);this.Yt(r,a,Ue.newNoDocument(a,F.min()))}else re(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=am.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,m,v,w,S,g;const f={localCacheCount:c,existenceFilterCount:h.count},y=h.unchangedNames;return y&&(f.bloomFilter={applied:u===0,hashCount:(d=y==null?void 0:y.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(w=(v=(m=y==null?void 0:y.bits)===null||m===void 0?void 0:m.bitmap)===null||v===void 0?void 0:v.length)!==null&&w!==void 0?w:0,padding:(g=(S=y==null?void 0:y.bits)===null||S===void 0?void 0:S.padding)!==null&&g!==void 0?g:0}),f}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Br(s).toUint8Array()}catch(c){if(c instanceof T_)return Vi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new lm(l,o,a)}catch(c){return Vi(c instanceof Ms?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Yd(a.target)){const l=new $(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Ue.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=H();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new sc(e,n,this.Wt,this.jt,r);return this.jt=_n(),this.zt=hv(),this.Wt=new ue(Q),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new cv,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new He(Q),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new cv),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function hv(){return new ue($.comparator)}function dv(){return new ue($.comparator)}const iO=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),oO=(()=>({and:"AND",or:"OR"}))();class aO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ef(t,e){return t.useProto3Json||ec(e)?e:{value:e}}function lu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Y_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lO(t,e){return lu(t,e.toTimestamp())}function Xt(t){return re(!!t),F.fromTimestamp(function(e){const n=rr(e);return new Se(n.seconds,n.nanos)}(t))}function um(t,e){return function(n){return new te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function X_(t){const e=te.fromString(t);return re(tS(e)),e}function tf(t,e){return um(t.databaseId,e.path)}function fh(t,e){const n=X_(e);if(n.get(1)!==t.databaseId.projectId)throw new D(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(J_(n))}function nf(t,e){return um(t.databaseId,e)}function uO(t){const e=X_(t);return e.length===4?te.emptyPath():J_(e)}function rf(t){return new te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function J_(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function fv(t,e,n){return{name:tf(t,e),fields:n.value.mapValue.fields}}function cO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(re(u===void 0||typeof u=="string"),Ke.fromBase64String(u||"")):(re(u===void 0||u instanceof Uint8Array),Ke.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:K_(l.code);return new D(u,l.message||"")}(o);n=new Q_(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fh(t,r.document.name),s=Xt(r.document.updateTime),o=r.document.createTime?Xt(r.document.createTime):F.min(),a=new rt({mapValue:{fields:r.document.fields}}),l=Ue.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new hl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fh(t,r.document),s=r.readTime?Xt(r.readTime):F.min(),o=Ue.newNoDocument(i,s),a=r.removedTargetIds||[];n=new hl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fh(t,r.document),s=r.removedTargetIds||[];n=new hl([],s,i,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ZD(i,s),a=r.targetId;n=new G_(a,o)}}return n}function hO(t,e){let n;if(e instanceof oa)n={update:fv(t,e.key,e.value)};else if(e instanceof sm)n={delete:tf(t,e.key)};else if(e instanceof cr)n={update:fv(t,e.key,e.data),updateMask:EO(e.fieldMask)};else{if(!(e instanceof YD))return b();n={verify:tf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ou)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Lo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof $o)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof au)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw b()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:lO(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(t,e.precondition)),n}function dO(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Xt(r.updateTime):Xt(i);return s.isEqual(F.min())&&(s=Xt(i)),new KD(s,r.transformResults||[])}(n,e))):[]}function fO(t,e){return{documents:[nf(t,e.path)]}}function pO(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=nf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=nf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return eS(Ut.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ni(c.field),direction:yO(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=ef(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function mO(t){let e=uO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){re(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=Z_(c);return h instanceof Ut&&N_(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Xs(ri(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,ec(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new su(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new su(d,h)}(n.endAt)),$D(e,i,o,s,a,"F",l,u)}function gO(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return b()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Z_(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ri(e.unaryFilter.field);return we.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ri(e.unaryFilter.field);return we.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ri(e.unaryFilter.field);return we.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ri(e.unaryFilter.field);return we.create(s,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(t):t.fieldFilter!==void 0?function(e){return we.create(ri(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ut.create(e.compositeFilter.filters.map(n=>Z_(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return b()}}(e.compositeFilter.op))}(t):b()}function yO(t){return iO[t]}function vO(t){return sO[t]}function wO(t){return oO[t]}function ni(t){return{fieldPath:t.canonicalString()}}function ri(t){return Ve.fromServerFormat(t.fieldPath)}function eS(t){return t instanceof we?function(e){if(e.op==="=="){if(Zy(e.value))return{unaryFilter:{field:ni(e.field),op:"IS_NAN"}};if(Jy(e.value))return{unaryFilter:{field:ni(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Zy(e.value))return{unaryFilter:{field:ni(e.field),op:"IS_NOT_NAN"}};if(Jy(e.value))return{unaryFilter:{field:ni(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ni(e.field),op:vO(e.op),value:e.value}}}(t):t instanceof Ut?function(e){const n=e.getFilters().map(r=>eS(r));return n.length===1?n[0]:{compositeFilter:{op:wO(e.op),filters:n}}}(t):b()}function EO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Fn{constructor(e,n,r,i,s=F.min(),o=F.min(),a=Ke.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class _O{constructor(e){this.fe=e}}function SO(t){const e=mO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jd(e,e.limit,"L"):e}/**
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
 */class IO{constructor(){this.rn=new TO}addToCollectionParentIndex(e,n){return this.rn.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(nr.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class TO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new He(te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new He(te.comparator)).toArray()}}/**
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
 */class Wi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Wi(0)}static Mn(){return new Wi(-1)}}/**
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
 */class CO{constructor(){this.changes=new us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ue.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class kO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class xO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Zs(r.mutation,i,dt.empty(),Se.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,n,r=H()){const i=kr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=$s();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,H()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=_n();const o=Js(),a=Js();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof cr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Zs(c.mutation,u,c.mutation.getFieldMask(),Se.now())):o.set(u.key,dt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new kO(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Js();let i=new ue((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||dt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=j_();c.forEach(d=>{if(!s.has(d)){const m=W_(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return $.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):O_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):C.resolve(kr());let a=-1,l=s;return o.next(u=>C.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?C.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,H())).next(c=>({batchId:a,changes:b_(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let i=$s();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=$s();return this.indexManager.getCollectionParents(e,i).next(o=>C.forEach(o,a=>{const l=function(u,c){return new sa(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ue.newInvalidDocument(u)))});let o=$s();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Zs(u.mutation,l,dt.empty(),Se.now()),nc(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return C.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:Xt(r.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:SO(r.bundledQuery),readTime:Xt(r.readTime)}}(n)),C.resolve()}}/**
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
 */class AO{constructor(){this.overlays=new ue($.comparator),this.ls=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=kr();return C.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const i=kr(),s=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ue((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=kr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=kr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return C.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new JD(n,r));let s=this.ls.get(n);s===void 0&&(s=H(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
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
 */class cm{constructor(){this.fs=new He(Te.ds),this.ws=new He(Te._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Te(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Te(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new $(new te([])),r=new Te(n,e),i=new Te(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new $(new te([])),r=new Te(n,e),i=new Te(n,e+1);let s=H();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Te(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Te{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return $.comparator(e.key,n.key)||Q(e.As,n.As)}static _s(e,n){return Q(e.As,n.As)||$.comparator(e.key,n.key)}}/**
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
 */class RO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new He(Te.ds)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Te(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Te(n,0),i=new Te(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(Q);return n.forEach(i=>{const s=new Te(i,0),o=new Te(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),C.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new Te(new $(s),0);let a=new He(Q);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),C.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){re(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return C.forEach(n.mutations,i=>{const s=new Te(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Te(n,0),i=this.Rs.firstAfterOrEqual(r);return C.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class PO{constructor(e){this.Ds=e,this.docs=new ue($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():Ue.newInvalidDocument(n))}getEntries(e,n){let r=_n();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ue.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=_n();const o=n.path,a=new $(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||vD(yD(c),r)<=0||(i.has(c.key)||nc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,n,r,i){b()}Cs(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new DO(this)}getSize(e){return C.resolve(this.size)}}class DO extends CO{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class OO{constructor(e){this.persistence=e,this.xs=new us(n=>tm(n),nm),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Ns=0,this.ks=new cm,this.targetCount=0,this.Ms=Wi.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),C.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Wi(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Fn(n),C.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.ks.containsKey(n))}}/**
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
 */class LO{constructor(e,n){this.$s={},this.overlays={},this.Os=new Xp(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new OO(this),this.indexManager=new IO,this.remoteDocumentCache=function(r){return new PO(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new _O(n),this.qs=new NO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new AO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new RO(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const i=new $O(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return C.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class $O extends ED{constructor(e){super(),this.currentSequenceNumber=e}}class hm{constructor(e){this.persistence=e,this.Qs=new cm,this.js=null}static zs(e){return new hm(e)}get Ws(){if(this.js)return this.js;throw b()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),C.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Ws,r=>{const i=$.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,F.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return C.or([()=>C.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class dm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new dm(e,n.fromCache,r,i)}}/**
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
 */class MO{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(rv(n))return C.resolve(null);let r=En(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Jd(n,null,"F"),r=En(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,Jd(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return rv(n)||i.isEqual(F.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(Ky()<=G.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zd(n)),this.Wi(e,o,n,gD(i,-1)))})}ji(e,n){let r=new He($_(e));return n.forEach((i,s)=>{nc(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return Ky()<=G.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Zd(n)),this.Ui.getDocumentsMatchingQuery(e,n,nr.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new ue(Q),this.Yi=new us(s=>tm(s),nm),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xO(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function jO(t,e,n,r){return new bO(t,e,n,r)}async function nS(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function FO(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=C.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(v=>{const w=l.docVersions.get(m);re(w!==null),v.version.compareTo(w)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=H();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function rS(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function UO(t,e){const n=U(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(Ke.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(v,w,S){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,m,c)&&a.push(n.Bs.updateTargetData(s,m))});let l=_n(),u=H();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(VO(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(F.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return C.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function VO(t,e,n){let r=H(),i=H();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=_n();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function BO(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function zO(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new Fn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function sf(t,e,n){const r=U(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ia(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function pv(t,e,n){const r=U(t);let i=F.min(),s=H();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=U(a),h=c.Yi.get(u);return h!==void 0?C.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,En(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:F.min(),n?s:H())).next(a=>(HO(r,MD(e),a),{documents:a,ir:s})))}function HO(t,e,n){let r=t.Xi.get(e)||F.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class mv{constructor(){this.activeTargetIds=BD()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WO{constructor(){this.Hr=new mv,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new mv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class qO{Yr(e){}shutdown(){}}/**
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
 */class gv{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ha=null;function ph(){return Ha===null?Ha=268435456+Math.round(2147483648*Math.random()):Ha++,"0x"+Ha.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class GO{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const be="WebChannelConnection";class QO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=ph(),a=this.To(e,n);L("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(L("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Vi("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ls,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=KO[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=ph();return new Promise((o,a)=>{const l=new sD;l.setWithCredentials(!0),l.listenOnce(nD.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case dh.NO_ERROR:const c=l.getResponseJson();L(be,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case dh.TIMEOUT:L(be,`RPC '${e}' ${s} timed out`),a(new D(I.DEADLINE_EXCEEDED,"Request time out"));break;case dh.HTTP_ERROR:const h=l.getStatus();if(L(be,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const v=function(w){const S=w.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(S)>=0?S:I.UNKNOWN}(m.status);a(new D(v,m.message))}else a(new D(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new D(I.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{L(be,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);L(be,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=ph(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=eD(),a=tD(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new iD({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");L(be,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,m=!1;const v=new GO({ro:S=>{m?L(be,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(d||(L(be,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),L(be,`RPC '${e}' stream ${i} sending:`,S),h.send(S))},oo:()=>h.close()}),w=(S,g,f)=>{S.listen(g,y=>{try{f(y)}catch(E){setTimeout(()=>{throw E},0)}})};return w(h,Ua.EventType.OPEN,()=>{m||L(be,`RPC '${e}' stream ${i} transport opened.`)}),w(h,Ua.EventType.CLOSE,()=>{m||(m=!0,L(be,`RPC '${e}' stream ${i} transport closed`),v.wo())}),w(h,Ua.EventType.ERROR,S=>{m||(m=!0,Vi(be,`RPC '${e}' stream ${i} transport errored:`,S),v.wo(new D(I.UNAVAILABLE,"The operation could not be completed")))}),w(h,Ua.EventType.MESSAGE,S=>{var g;if(!m){const f=S.data[0];re(!!f);const y=f,E=y.error||((g=y[0])===null||g===void 0?void 0:g.error);if(E){L(be,`RPC '${e}' stream ${i} received error:`,E);const k=E.status;let x=function(O){const J=ge[O];if(J!==void 0)return K_(J)}(k),A=E.message;x===void 0&&(x=I.INTERNAL,A="Unknown error status: "+k+" with message "+E.message),m=!0,v.wo(new D(x,A)),h.close()}else L(be,`RPC '${e}' stream ${i} received:`,f),v._o(f)}}),w(a,rD.STAT_EVENT,S=>{S.stat===Wy.PROXY?L(be,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===Wy.NOPROXY&&L(be,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.fo()},0),v}}function mh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(t){return new aO(t,!0)}/**
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
 */class iS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class sS{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new iS(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new D(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class YO extends sS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=cO(this.serializer,e),r=function(i){if(!("targetChange"in i))return F.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?F.min():s.readTime?Xt(s.readTime):F.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=rf(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Yd(a)?{documents:fO(i,a)}:{query:pO(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=Y_(i,s.resumeToken);const l=ef(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(F.min())>0){o.readTime=lu(i,s.snapshotVersion.toTimestamp());const l=ef(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=gO(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=rf(this.serializer),n.removeTarget=e,this.Wo(n)}}class XO extends sS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=dO(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.cu(r,n)}return re(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=rf(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>hO(this.serializer,r))};this.Wo(n)}}/**
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
 */class JO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new D(I.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(I.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(I.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class ZO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(wn(n),this.mu=!1):L("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class e4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Jr(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=U(a);l.vu.add(4),await la(l),l.bu.set("Unknown"),l.vu.delete(4),await ac(l)}(this))})}),this.bu=new ZO(r,i)}}async function ac(t){if(Jr(t))for(const e of t.Ru)await e(!0)}async function la(t){for(const e of t.Ru)await e(!1)}function oS(t,e){const n=U(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),mm(n)?pm(n):cs(n).Ko()&&fm(n,e))}function aS(t,e){const n=U(t),r=cs(n);n.Au.delete(e),r.Ko()&&lS(n,e),n.Au.size===0&&(r.Ko()?r.jo():Jr(n)&&n.bu.set("Unknown"))}function fm(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}cs(t).su(e)}function lS(t,e){t.Vu.qt(e),cs(t).iu(e)}function pm(t){t.Vu=new rO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),cs(t).start(),t.bu.gu()}function mm(t){return Jr(t)&&!cs(t).Uo()&&t.Au.size>0}function Jr(t){return U(t).vu.size===0}function uS(t){t.Vu=void 0}async function t4(t){t.Au.forEach((e,n)=>{fm(t,e)})}async function n4(t,e){uS(t),mm(t)?(t.bu.Iu(e),pm(t)):t.bu.set("Unknown")}async function r4(t,e,n){if(t.bu.set("Online"),e instanceof Q_&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await uu(t,r)}else if(e instanceof hl?t.Vu.Ht(e):e instanceof G_?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(F.min()))try{const r=await rS(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(Ke.EMPTY_BYTE_STRING,u.snapshotVersion)),lS(i,a);const c=new Fn(u.target,a,l,u.sequenceNumber);fm(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await uu(t,r)}}async function uu(t,e,n){if(!ia(e))throw e;t.vu.add(1),await la(t),t.bu.set("Offline"),n||(n=()=>rS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await ac(t)})}function cS(t,e){return e().catch(n=>uu(t,n,e))}async function lc(t){const e=U(t),n=ir(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;i4(e);)try{const i=await BO(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,s4(e,i)}catch(i){await uu(e,i)}hS(e)&&dS(e)}function i4(t){return Jr(t)&&t.Eu.length<10}function s4(t,e){t.Eu.push(e);const n=ir(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function hS(t){return Jr(t)&&!ir(t).Uo()&&t.Eu.length>0}function dS(t){ir(t).start()}async function o4(t){ir(t).hu()}async function a4(t){const e=ir(t);for(const n of t.Eu)e.uu(n.mutations)}async function l4(t,e,n){const r=t.Eu.shift(),i=om.from(r,e,n);await cS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await lc(t)}async function u4(t,e){e&&ir(t).ou&&await async function(n,r){if(i=r.code,eO(i)&&i!==I.ABORTED){const s=n.Eu.shift();ir(n).Qo(),await cS(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await lc(n)}var i}(t,e),hS(t)&&dS(t)}async function yv(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=Jr(n);n.vu.add(3),await la(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await ac(n)}async function c4(t,e){const n=U(t);e?(n.vu.delete(2),await ac(n)):e||(n.vu.add(2),await la(n),n.bu.set("Unknown"))}function cs(t){return t.Su||(t.Su=function(e,n,r){const i=U(e);return i.fu(),new YO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:t4.bind(null,t),ao:n4.bind(null,t),nu:r4.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),mm(t)?pm(t):t.bu.set("Unknown")):(await t.Su.stop(),uS(t))})),t.Su}function ir(t){return t.Du||(t.Du=function(e,n,r){const i=U(e);return i.fu(),new XO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:o4.bind(null,t),ao:u4.bind(null,t),au:a4.bind(null,t),cu:l4.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await lc(t)):(await t.Du.stop(),t.Eu.length>0&&(L("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class gm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new gm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ym(t,e){if(wn("AsyncQueue",`${e}: ${t}`),ia(t))return new D(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ai{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=$s(),this.sortedSet=new ue(this.comparator)}static emptySet(e){return new Ai(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ai)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ai;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class vv{constructor(){this.Cu=new ue($.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):b():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class qi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qi(e,n,Ai.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class h4{constructor(){this.Nu=void 0,this.listeners=[]}}class d4{constructor(){this.queries=new us(e=>L_(e),tc),this.onlineState="Unknown",this.ku=new Set}}async function f4(t,e){const n=U(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new h4),i)try{s.Nu=await n.onListen(r)}catch(o){const a=ym(o,`Initialization of query '${Zd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&vm(n)}async function p4(t,e){const n=U(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function m4(t,e){const n=U(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&vm(n)}function g4(t,e,n){const r=U(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function vm(t){t.ku.forEach(e=>{e.next()})}class y4{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new qi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class fS{constructor(e){this.key=e}}class pS{constructor(e){this.key=e}}class v4{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=H(),this.mutatedKeys=H(),this.tc=$_(e),this.ec=new Ai(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new vv,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=nc(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let S=!1;d&&m?d.data.isEqual(m.data)?v!==w&&(r.track({type:3,doc:m}),S=!0):this.rc(d,m)||(r.track({type:2,doc:m}),S=!0,(l&&this.tc(m,l)>0||u&&this.tc(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),S=!0):d&&!m&&(r.track({type:1,doc:d}),S=!0,(l||u)&&(a=!0)),S&&(m?(o=o.add(m),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,d){const m=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return m(h)-m(d)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new qi(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new vv,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=H(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new pS(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new fS(r))}),n}hc(e){this.Yu=e.ir,this.Zu=H();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return qi.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class w4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class E4{constructor(e){this.key=e,this.fc=!1}}class _4{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new us(a=>L_(a),tc),this._c=new Map,this.mc=new Set,this.gc=new ue($.comparator),this.yc=new Map,this.Ic=new cm,this.Tc={},this.Ec=new Map,this.Ac=Wi.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function S4(t,e){const n=D4(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await zO(n.localStore,En(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await I4(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&oS(n.remoteStore,o)}return i}async function I4(t,e,n,r,i){t.Rc=(h,d,m)=>async function(v,w,S,g){let f=w.view.sc(S);f.zi&&(f=await pv(v.localStore,w.query,!1).then(({documents:k})=>w.view.sc(k,f)));const y=g&&g.targetChanges.get(w.targetId),E=w.view.applyChanges(f,v.isPrimaryClient,y);return Ev(v,w.targetId,E.cc),E.snapshot}(t,h,d,m);const s=await pv(t.localStore,e,!0),o=new v4(e,s.ir),a=o.sc(s.documents),l=aa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Ev(t,n,u.cc);const c=new w4(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function T4(t,e){const n=U(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!tc(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await sf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),aS(n.remoteStore,r.targetId),of(n,r.targetId)}).catch(ra)):(of(n,r.targetId),await sf(n.localStore,r.targetId,!0))}async function C4(t,e,n){const r=O4(t);try{const i=await function(s,o){const a=U(s),l=Se.now(),u=o.reduce((d,m)=>d.add(m.key),H());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=_n(),v=H();return a.Zi.getEntries(d,u).next(w=>{m=w,m.forEach((S,g)=>{g.isValidDocument()||(v=v.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(w=>{c=w;const S=[];for(const g of o){const f=QD(g,c.get(g.key).overlayedDocument);f!=null&&S.push(new cr(g.key,f,C_(f.value.mapValue),$t.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,S,o)}).next(w=>{h=w;const S=w.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(d,w.batchId,S)})}).then(()=>({batchId:h.batchId,changes:b_(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new ue(Q)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await ua(r,i.changes),await lc(r.remoteStore)}catch(i){const s=ym(i,"Failed to persist write");n.reject(s)}}async function mS(t,e){const n=U(t);try{const r=await UO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?re(o.fc):i.removedDocuments.size>0&&(re(o.fc),o.fc=!1))}),await ua(n,r,e)}catch(r){await ra(r)}}function wv(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=U(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&vm(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function k4(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new ue($.comparator);o=o.insert(s,Ue.newNoDocument(s,F.min()));const a=H().add(s),l=new sc(F.min(),new Map,new ue(Q),o,a);await mS(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),wm(r)}else await sf(r.localStore,e,!1).then(()=>of(r,e,n)).catch(ra)}async function x4(t,e){const n=U(t),r=e.batch.batchId;try{const i=await FO(n.localStore,e);yS(n,r,null),gS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ua(n,i)}catch(i){await ra(i)}}async function N4(t,e,n){const r=U(t);try{const i=await function(s,o){const a=U(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(re(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);yS(r,e,n),gS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ua(r,i)}catch(i){await ra(i)}}function gS(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function yS(t,e,n){const r=U(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function of(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||vS(t,r)})}function vS(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(aS(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),wm(t))}function Ev(t,e,n){for(const r of n)r instanceof fS?(t.Ic.addReference(r.key,e),A4(t,r)):r instanceof pS?(L("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||vS(t,r.key)):b()}function A4(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(L("SyncEngine","New document in limbo: "+n),t.mc.add(r),wm(t))}function wm(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new $(te.fromString(e)),r=t.Ac.next();t.yc.set(r,new E4(n)),t.gc=t.gc.insert(n,r),oS(t.remoteStore,new Fn(En(rm(n.path)),r,"TargetPurposeLimboResolution",Xp.ct))}}async function ua(t,e,n){const r=U(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=dm.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=U(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>C.forEach(l,h=>C.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>C.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!ia(c))throw c;L("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ji.get(h),m=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(m);u.Ji=u.Ji.insert(h,v)}}}(r.localStore,s))}async function R4(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await nS(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new D(I.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ua(n,r.er)}}function P4(t,e){const n=U(t),r=n.yc.get(e);if(r&&r.fc)return H().add(r.key);{let i=H();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function D4(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=P4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=k4.bind(null,e),e.dc.nu=m4.bind(null,e.eventManager),e.dc.Pc=g4.bind(null,e.eventManager),e}function O4(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=x4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=N4.bind(null,e),e}class _v{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=oc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return jO(this.persistence,new MO,e.initialUser,this.serializer)}createPersistence(e){return new LO(hm.zs,this.serializer)}createSharedClientState(e){return new WO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class L4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=R4.bind(null,this.syncEngine),await c4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new d4}createDatastore(e){const n=oc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new QO(i));var i;return function(s,o,a,l){return new JO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>wv(this.syncEngine,a,0),o=gv.D()?new gv:new qO,new e4(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new _4(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=U(e);L("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await la(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $4{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class M4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=je.UNAUTHENTICATED,this.clientId=S_.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{L("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(L("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ym(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gh(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await nS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await j4(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>yv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>yv(e.remoteStore,s)),t._onlineComponents=e}function b4(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function j4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await gh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!b4(n))throw n;Vi("Error using user provided cache. Falling back to memory cache: "+n),await gh(t,new _v)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await gh(t,new _v);return t._offlineComponents}async function wS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await Sv(t,t._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await Sv(t,new L4))),t._onlineComponents}function F4(t){return wS(t).then(e=>e.syncEngine)}async function Iv(t){const e=await wS(t),n=e.eventManager;return n.onListen=S4.bind(null,e.syncEngine),n.onUnlisten=T4.bind(null,e.syncEngine),n}/**
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
 */function ES(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=new Map;/**
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
 */function _S(t,e,n){if(!n)throw new D(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function U4(t,e,n,r){if(e===!0&&r===!0)throw new D(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Cv(t){if(!$.isDocumentKey(t))throw new D(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kv(t){if($.isDocumentKey(t))throw new D(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function uc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function dn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=uc(t);throw new D(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new D(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}U4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ES((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new D(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new D(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new D(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class cc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new aD;switch(n.type){case"firstParty":return new hD(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Tv.get(e);n&&(L("ComponentProvider","Removing Datastore"),Tv.delete(e),n.terminate())}(this),Promise.resolve()}}function V4(t,e,n,r={}){var i;const s=(t=dn(t,cc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Vi("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=je.MOCK_USER;else{o=u2(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new D(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new je(l)}t._authCredentials=new lD(new __(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Je(this.firestore,e,this._key)}}class hs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hs(this.firestore,e,this._query)}}class Jn extends hs{constructor(e,n,r){super(e,n,rm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new $(e))}withConverter(e){return new Jn(this.firestore,e,this._path)}}function SS(t,e,...n){if(t=me(t),_S("collection","path",e),t instanceof cc){const r=te.fromString(e,...n);return kv(r),new Jn(t,null,r)}{if(!(t instanceof Je||t instanceof Jn))throw new D(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return kv(r),new Jn(t.firestore,null,r)}}function Wa(t,e,...n){if(t=me(t),arguments.length===1&&(e=S_.A()),_S("doc","path",e),t instanceof cc){const r=te.fromString(e,...n);return Cv(r),new Je(t,null,new $(r))}{if(!(t instanceof Je||t instanceof Jn))throw new D(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return Cv(r),new Je(t.firestore,t instanceof Jn?t.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new iS(this,"async_queue_retry"),this.Xc=()=>{const n=mh();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=mh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=mh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Or;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ia(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw wn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=gm.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&b()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function Nv(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ki extends cc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new B4,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||TS(this),this._firestoreClient.terminate()}}function Em(t,e){const n=typeof t=="object"?t:vp(),r=typeof t=="string"?t:e||"(default)",i=Qr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=a2("firestore");s&&V4(i,...s)}return i}function IS(t){return t._firestoreClient||TS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function TS(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new ID(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,ES(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new M4(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gi(Ke.fromBase64String(e))}catch(n){throw new D(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gi(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){this._methodName=e}}/**
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
 */class Sm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
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
 */const z4=/^__.*__$/;class H4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new oa(e,this.data,n,this.fieldTransforms)}}class CS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new cr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function kS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class Im{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Im(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return cu(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(kS(this.ca)&&z4.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class W4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||oc(e)}ya(e,n,r,i=!1){return new Im({ca:e,methodName:n,ga:r,path:Ve.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tm(t){const e=t._freezeSettings(),n=oc(t._databaseId);return new W4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function q4(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);Cm("Data must be an object, but it was:",o,r);const a=xS(r,o);let l,u;if(s.merge)l=new dt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=af(e,h,n);if(!o.contains(d))throw new D(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);AS(c,d)||c.push(d)}l=new dt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new H4(new rt(a),l,u)}class dc extends _m{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dc}}function K4(t,e,n,r){const i=t.ya(1,e,n);Cm("Data must be an object, but it was:",i,r);const s=[],o=rt.empty();Xr(r,(l,u)=>{const c=km(e,l,n);u=me(u);const h=i.da(c);if(u instanceof dc)s.push(c);else{const d=ca(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new dt(s);return new CS(o,a,i.fieldTransforms)}function G4(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[af(e,r,n)],l=[i];if(s.length%2!=0)throw new D(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(af(e,s[d])),l.push(s[d+1]);const u=[],c=rt.empty();for(let d=a.length-1;d>=0;--d)if(!AS(u,a[d])){const m=a[d];let v=l[d];v=me(v);const w=o.da(m);if(v instanceof dc)u.push(m);else{const S=ca(v,w);S!=null&&(u.push(m),c.set(m,S))}}const h=new dt(u);return new CS(c,h,o.fieldTransforms)}function Q4(t,e,n,r=!1){return ca(n,t.ya(r?4:3,e))}function ca(t,e){if(NS(t=me(t)))return Cm("Unsupported field value:",e,t),xS(t,e);if(t instanceof _m)return function(n,r){if(!kS(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ca(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=me(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return zD(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Se.fromDate(n);return{timestampValue:lu(r.serializer,i)}}if(n instanceof Se){const i=new Se(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:lu(r.serializer,i)}}if(n instanceof Sm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Gi)return{bytesValue:Y_(r.serializer,n._byteString)};if(n instanceof Je){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:um(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${uc(n)}`)}(t,e)}function xS(t,e){const n={};return I_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xr(t,(r,i)=>{const s=ca(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function NS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Se||t instanceof Sm||t instanceof Gi||t instanceof Je||t instanceof _m)}function Cm(t,e,n){if(!NS(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=uc(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function af(t,e,n){if((e=me(e))instanceof hc)return e._internalPath;if(typeof e=="string")return km(t,e);throw cu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Y4=new RegExp("[~\\*/\\[\\]]");function km(t,e,n){if(e.search(Y4)>=0)throw cu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hc(...e.split("."))._internalPath}catch{throw cu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new D(I.INVALID_ARGUMENT,a+t+l)}function AS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new X4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(PS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class X4 extends RS{data(){return super.data()}}function PS(t,e){return typeof e=="string"?km(t,e):e instanceof hc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xm{}class Z4 extends xm{}function DS(t,e,...n){let r=[];e instanceof xm&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Am).length,o=i.filter(a=>a instanceof Nm).length;if(s>1||s>0&&o>0)throw new D(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Nm extends Z4{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Nm(e,n,r)}_apply(e){const n=this._parse(e);return OS(e._query,n),new hs(e.firestore,e.converter,Xd(e._query,n))}_parse(e){const n=Tm(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new D(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Rv(c,u);const d=[];for(const m of c)d.push(Av(a,i,m));h={arrayValue:{values:d}}}else h=Av(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Rv(c,u),h=Q4(o,s,c,u==="in"||u==="not-in");return we.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Am extends xm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Am(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ut.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)OS(s,a),s=Xd(s,a)}(e._query,n),new hs(e.firestore,e.converter,Xd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Av(t,e,n){if(typeof(n=me(n))=="string"){if(n==="")throw new D(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!O_(e)&&n.indexOf("/")!==-1)throw new D(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(te.fromString(n));if(!$.isDocumentKey(r))throw new D(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xy(t,new $(r))}if(n instanceof Je)return Xy(t,n._key);throw new D(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${uc(n)}.`)}function Rv(t,e){if(!Array.isArray(t)||t.length===0)throw new D(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function OS(t,e){if(e.isInequality()){const r=im(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new D(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=D_(t);s!==null&&eL(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new D(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function eL(t,e,n){if(!n.isEqual(e))throw new D(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class tL{convertValue(e,n="none"){switch(zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Xr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Sm(ye(e.latitude),ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Po(e));default:return null}}convertTimestamp(e){const n=rr(e);return new Se(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=te.fromString(e);re(tS(r));const i=new Do(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nL(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class LS extends RS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new dl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(PS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class dl extends LS{data(e={}){return super.data(e)}}class rL{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new bs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new dl(this._firestore,this._userDataWriter,r.key,r,new bs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new dl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new bs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new dl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new bs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:iL(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function iL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}class $S extends tL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Je(this.firestore,null,n)}}function sL(t,e,n){t=dn(t,Je);const r=dn(t.firestore,Ki),i=nL(t.converter,e,n);return Rm(r,[q4(Tm(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,$t.none())])}function Pv(t,e,n,...r){t=dn(t,Je);const i=dn(t.firestore,Ki),s=Tm(i);let o;return o=typeof(e=me(e))=="string"||e instanceof hc?G4(s,"updateDoc",t._key,e,n,r):K4(s,"updateDoc",t._key,e),Rm(i,[o.toMutation(t._key,$t.exists(!0))])}function oL(t){return Rm(dn(t.firestore,Ki),[new sm(t._key,$t.none())])}function MS(t,...e){var n,r,i;t=me(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Nv(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Nv(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Je)u=dn(t.firestore,Ki),c=rm(t._key.path),l={next:h=>{e[o]&&e[o](aL(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=dn(t,hs);u=dn(h.firestore,Ki),c=h._query;const d=new $S(u);l={next:m=>{e[o]&&e[o](new rL(u,d,h,m))},error:e[o+1],complete:e[o+2]},J4(t._query)}return function(h,d,m,v){const w=new $4(v),S=new y4(d,w,m);return h.asyncQueue.enqueueAndForget(async()=>f4(await Iv(h),S)),()=>{w.Dc(),h.asyncQueue.enqueueAndForget(async()=>p4(await Iv(h),S))}}(IS(u),c,a,l)}function Rm(t,e){return function(n,r){const i=new Or;return n.asyncQueue.enqueueAndForget(async()=>C4(await F4(n),r,i)),i.promise}(IS(t),e)}function aL(t,e,n){const r=n.docs.get(e._key),i=new $S(t);return new LS(t,i,e._key,r,new bs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ls=n})(rs),Zt(new bt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ki(new uD(n.getProvider("auth-internal")),new fD(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new D(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Do(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ct(qy,"3.12.0",t),Ct(qy,"3.12.0","esm2017")})();var lL="firebase",uL="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct(lL,uL,"app");const cL=(t,e)=>e.some(n=>t instanceof n);let Dv,Ov;function hL(){return Dv||(Dv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dL(){return Ov||(Ov=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bS=new WeakMap,lf=new WeakMap,jS=new WeakMap,yh=new WeakMap,Pm=new WeakMap;function fL(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Zn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bS.set(n,t)}).catch(()=>{}),Pm.set(e,t),e}function pL(t){if(lf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});lf.set(t,e)}let uf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mL(t){uf=t(uf)}function gL(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vh(this),e,...n);return jS.set(r,e.sort?e.sort():[e]),Zn(r)}:dL().includes(t)?function(...e){return t.apply(vh(this),e),Zn(bS.get(this))}:function(...e){return Zn(t.apply(vh(this),e))}}function yL(t){return typeof t=="function"?gL(t):(t instanceof IDBTransaction&&pL(t),cL(t,hL())?new Proxy(t,uf):t)}function Zn(t){if(t instanceof IDBRequest)return fL(t);if(yh.has(t))return yh.get(t);const e=yL(t);return e!==t&&(yh.set(t,e),Pm.set(e,t)),e}const vh=t=>Pm.get(t);function vL(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Zn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Zn(o.result),l.oldVersion,l.newVersion,Zn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const wL=["get","getKey","getAll","getAllKeys","count"],EL=["put","add","delete","clear"],wh=new Map;function Lv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wh.get(e))return wh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=EL.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wL.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return wh.set(e,s),s}mL(t=>({...t,get:(e,n,r)=>Lv(e,n)||t.get(e,n,r),has:(e,n)=>!!Lv(e,n)||t.has(e,n)}));const FS="@firebase/installations",Dm="0.6.4";/**
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
 */const US=1e4,VS=`w:${Dm}`,BS="FIS_v2",_L="https://firebaseinstallations.googleapis.com/v1",SL=60*60*1e3,IL="installations",TL="Installations";/**
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
 */const CL={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Hr=new Gr(IL,TL,CL);function zS(t){return t instanceof Vt&&t.code.includes("request-failed")}/**
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
 */function HS({projectId:t}){return`${_L}/projects/${t}/installations`}function WS(t){return{token:t.token,requestStatus:2,expiresIn:xL(t.expiresIn),creationTime:Date.now()}}async function qS(t,e){const r=(await e.json()).error;return Hr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function KS({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function kL(t,{refreshToken:e}){const n=KS(t);return n.append("Authorization",NL(e)),n}async function GS(t){const e=await t();return e.status>=500&&e.status<600?t():e}function xL(t){return Number(t.replace("s","000"))}function NL(t){return`${BS} ${t}`}/**
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
 */async function AL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=HS(t),i=KS(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:BS,appId:t.appId,sdkVersion:VS},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await GS(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:WS(u.authToken)}}else throw await qS("Create Installation",l)}/**
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
 */function QS(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function RL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const PL=/^[cdef][\w-]{21}$/,cf="";function DL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=OL(t);return PL.test(n)?n:cf}catch{return cf}}function OL(t){return RL(t).substr(0,22)}/**
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
 */function fc(t){return`${t.appName}!${t.appId}`}/**
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
 */const YS=new Map;function XS(t,e){const n=fc(t);JS(n,e),LL(n,e)}function JS(t,e){const n=YS.get(t);if(n)for(const r of n)r(e)}function LL(t,e){const n=$L();n&&n.postMessage({key:t,fid:e}),ML()}let xr=null;function $L(){return!xr&&"BroadcastChannel"in self&&(xr=new BroadcastChannel("[Firebase] FID Change"),xr.onmessage=t=>{JS(t.data.key,t.data.fid)}),xr}function ML(){YS.size===0&&xr&&(xr.close(),xr=null)}/**
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
 */const bL="firebase-installations-database",jL=1,Wr="firebase-installations-store";let Eh=null;function Om(){return Eh||(Eh=vL(bL,jL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Wr)}}})),Eh}async function hu(t,e){const n=fc(t),i=(await Om()).transaction(Wr,"readwrite"),s=i.objectStore(Wr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&XS(t,e.fid),e}async function ZS(t){const e=fc(t),r=(await Om()).transaction(Wr,"readwrite");await r.objectStore(Wr).delete(e),await r.done}async function pc(t,e){const n=fc(t),i=(await Om()).transaction(Wr,"readwrite"),s=i.objectStore(Wr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&XS(t,a.fid),a}/**
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
 */async function Lm(t){let e;const n=await pc(t.appConfig,r=>{const i=FL(r),s=UL(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===cf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function FL(t){const e=t||{fid:DL(),registrationStatus:0};return eI(e)}function UL(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Hr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=VL(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:BL(t)}:{installationEntry:e}}async function VL(t,e){try{const n=await AL(t,e);return hu(t.appConfig,n)}catch(n){throw zS(n)&&n.customData.serverCode===409?await ZS(t.appConfig):await hu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function BL(t){let e=await $v(t.appConfig);for(;e.registrationStatus===1;)await QS(100),e=await $v(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Lm(t);return r||n}return e}function $v(t){return pc(t,e=>{if(!e)throw Hr.create("installation-not-found");return eI(e)})}function eI(t){return zL(t)?{fid:t.fid,registrationStatus:0}:t}function zL(t){return t.registrationStatus===1&&t.registrationTime+US<Date.now()}/**
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
 */async function HL({appConfig:t,heartbeatServiceProvider:e},n){const r=WL(t,n),i=kL(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:VS,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await GS(()=>fetch(r,a));if(l.ok){const u=await l.json();return WS(u)}else throw await qS("Generate Auth Token",l)}function WL(t,{fid:e}){return`${HS(t)}/${e}/authTokens:generate`}/**
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
 */async function $m(t,e=!1){let n;const r=await pc(t.appConfig,s=>{if(!tI(s))throw Hr.create("not-registered");const o=s.authToken;if(!e&&GL(o))return s;if(o.requestStatus===1)return n=qL(t,e),s;{if(!navigator.onLine)throw Hr.create("app-offline");const a=YL(s);return n=KL(t,a),a}});return n?await n:r.authToken}async function qL(t,e){let n=await Mv(t.appConfig);for(;n.authToken.requestStatus===1;)await QS(100),n=await Mv(t.appConfig);const r=n.authToken;return r.requestStatus===0?$m(t,e):r}function Mv(t){return pc(t,e=>{if(!tI(e))throw Hr.create("not-registered");const n=e.authToken;return XL(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function KL(t,e){try{const n=await HL(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await hu(t.appConfig,r),n}catch(n){if(zS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ZS(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await hu(t.appConfig,r)}throw n}}function tI(t){return t!==void 0&&t.registrationStatus===2}function GL(t){return t.requestStatus===2&&!QL(t)}function QL(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+SL}function YL(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function XL(t){return t.requestStatus===1&&t.requestTime+US<Date.now()}/**
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
 */async function JL(t){const e=t,{installationEntry:n,registrationPromise:r}=await Lm(e);return r?r.catch(console.error):$m(e).catch(console.error),n.fid}/**
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
 */async function ZL(t,e=!1){const n=t;return await e$(n),(await $m(n,e)).token}async function e$(t){const{registrationPromise:e}=await Lm(t);e&&await e}/**
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
 */function t$(t){if(!t||!t.options)throw _h("App Configuration");if(!t.name)throw _h("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw _h(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function _h(t){return Hr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="installations",n$="installations-internal",r$=t=>{const e=t.getProvider("app").getImmediate(),n=t$(e),r=Qr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},i$=t=>{const e=t.getProvider("app").getImmediate(),n=Qr(e,nI).getImmediate();return{getId:()=>JL(n),getToken:i=>ZL(n,i)}};function s$(){Zt(new bt(nI,r$,"PUBLIC")),Zt(new bt(n$,i$,"PRIVATE"))}s$();Ct(FS,Dm);Ct(FS,Dm,"esm2017");/**
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
 */const du="analytics",o$="firebase_id",a$="origin",l$=60*1e3,u$="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Mm="https://www.googletagmanager.com/gtag/js";/**
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
 */const lt=new Pu("@firebase/analytics");/**
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
 */const c$={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},pt=new Gr("analytics","Analytics",c$);/**
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
 */function h$(t){if(!t.startsWith(Mm)){const e=pt.create("invalid-gtag-resource",{gtagURL:t});return lt.warn(e.message),""}return t}function rI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function d$(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function f$(t,e){const n=d$("firebase-js-sdk-policy",{createScriptURL:h$}),r=document.createElement("script"),i=`${Mm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function p$(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function m$(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await rI(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){lt.error(a)}t("config",i,s)}async function g$(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await rI(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){lt.error(s)}}function y$(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await g$(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await m$(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){lt.error(a)}}return i}function v$(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=y$(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function w$(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Mm)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E$=30,_$=1e3;class S${constructor(e={},n=_$){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const iI=new S$;function I$(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function T$(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:I$(r)},s=u$.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw pt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function C$(t,e=iI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw pt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw pt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new N$;return setTimeout(async()=>{a.abort()},n!==void 0?n:l$),sI({appId:r,apiKey:i,measurementId:s},o,a,e)}async function sI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=iI){var s;const{appId:o,measurementId:a}=t;try{await k$(r,e)}catch(l){if(a)return lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await T$(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!x$(u)){if(i.deleteThrottleMetadata(o),a)return lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?ry(n,i.intervalMillis,E$):ry(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),lt.debug(`Calling attemptFetch again in ${c} millis`),sI(t,h,r,i)}}function k$(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(pt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function x$(t){if(!(t instanceof Vt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class N${constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function A$(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R$(){if(Cw())try{await kw()}catch(t){return lt.warn(pt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return lt.warn(pt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function P$(t,e,n,r,i,s,o){var a;const l=C$(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&lt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>lt.error(m)),e.push(l);const u=R$().then(m=>{if(m)return r.getId()}),[c,h]=await Promise.all([l,u]);w$(s)||f$(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[a$]="firebase",d.update=!0,h!=null&&(d[o$]=h),i("config",c.measurementId,d),c.measurementId}/**
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
 */class D${constructor(e){this.app=e}_delete(){return delete eo[this.app.options.appId],Promise.resolve()}}let eo={},bv=[];const jv={};let Sh="dataLayer",O$="gtag",Fv,oI,Uv=!1;function L$(){const t=[];if(Tw()&&t.push("This is a browser extension environment."),f2()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=pt.create("invalid-analytics-context",{errorInfo:e});lt.warn(n.message)}}function $$(t,e,n){L$();const r=t.options.appId;if(!r)throw pt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw pt.create("no-api-key");if(eo[r]!=null)throw pt.create("already-exists",{id:r});if(!Uv){p$(Sh);const{wrappedGtag:s,gtagCore:o}=v$(eo,bv,jv,Sh,O$);oI=s,Fv=o,Uv=!0}return eo[r]=P$(t,bv,jv,e,Fv,Sh,n),new D$(t)}function M$(t=vp()){t=me(t);const e=Qr(t,du);return e.isInitialized()?e.getImmediate():b$(t)}function b$(t,e={}){const n=Qr(t,du);if(n.isInitialized()){const i=n.getImmediate();if(Eo(e,n.getOptions()))return i;throw pt.create("already-initialized")}return n.initialize({options:e})}function j$(t,e,n,r){t=me(t),A$(oI,eo[t.app.options.appId],e,n,r).catch(i=>lt.error(i))}const Vv="@firebase/analytics",Bv="0.10.0";function F$(){Zt(new bt(du,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return $$(r,i,n)},"PUBLIC")),Zt(new bt("analytics-internal",t,"PRIVATE")),Ct(Vv,Bv),Ct(Vv,Bv,"esm2017");function t(e){try{const n=e.getProvider(du).getImmediate();return{logEvent:(r,i,s)=>j$(n,r,i,s)}}catch(n){throw pt.create("interop-component-reg-failed",{reason:n})}}}F$();const aI={apiKey:"AIzaSyBhTx_jyQ9XXDXbwN_8G3StDaWk8ixpOrU",authDomain:"mywendding.web.app",projectId:"mywendding",storageBucket:"mywendding.appspot.com",messagingSenderId:"297404197510",appId:"1:297404197510:web:51e391cdc5fcdca56a7f07",measurementId:"G-66KL1Q1VMH"},U$=yp(aI);M$(U$);const bm=yp(aI),mc=_.createContext({}),V$=({children:t})=>{const[e,n]=_.useState("");_.useState("");const[r,i]=_.useState(""),s=Em(bm),o=async function(u="1",c,h,d="0",m="maybe"){const w=`${c.toLowerCase()}${h.toLowerCase()}`.split(" ").join(""),S={name:c.split(" ").join(""),lastName:h.split(" ").join(""),age:d,status:m};await sL(Wa(s,`inviteds/${w}`),S),await Pv(Wa(s,`inviteds/${w}`),S)},a=async function(u,c,h){const m=`${u.toLowerCase()}${c.toLowerCase()}`.split(" ").join("");h.toLowerCase()==="confirmado"&&(h="confirmed"),h.toLowerCase()==="não confirmado"&&(h="unconfirmed");const v={name:u.split(" ").join(""),lastName:c.split(" ").join(""),age:r,status:h};try{await Pv(Wa(s,`inviteds/${m}`),v)}catch{o("0",u,c,r,h="NotFound")}},l=async function(u,c){const h=`${u.toLowerCase()}${c.toLowerCase()}`,m=Wa(s,"inviteds",h);oL(m).then(()=>{console.log("Entire Document has been deleted successfully.")}).catch(v=>{console.log(v)})};return p.jsx(mc.Provider,{value:{name:e,addGuest:o,confirmGuest:a,deleteGuest:l},children:t})};function B$({name:t="null",lastName:e="null",status:n="black",age:r}){const{deleteGuest:i}=_.useContext(mc),s=ns(),[o,a]=yw(),l=c=>{switch(c){case"confirmed":return"green";case"unconfirmed":return"red";case"maybe":return"darkOrange"}},u=(c,h)=>{const d=(c+"_"+h).toLowerCase();a({q:d}),s(`/addguests?q=${encodeURIComponent(d)}`)};return p.jsxs("div",{className:pr.container,children:[p.jsxs("div",{className:pr.info,children:[p.jsx("span",{className:pr,children:p.jsx(KR,{style:{color:l(n),fontSize:"35px"}})}),p.jsxs("span",{className:pr.name,id:"name",children:[t," ",e]},t)]}),p.jsxs("div",{className:pr.trash,children:[p.jsx("span",{onClick:c=>u(t,e),className:pr.trash,children:p.jsx(GR,{style:{color:"black",fontSize:"15px"}})}),p.jsx("span",{onClick:c=>i(t,e),className:pr.trash,children:p.jsx(XR,{style:{color:"black",fontSize:"15px"}})})]})]})}function z$(t){return wt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M13 2v8h8c0-4.42-3.58-8-8-8zm6.32 13.89A7.948 7.948 0 0021 11H6.44l-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20zm9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20z"}}]})(t)}function H$(t){return wt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]})(t)}var lI={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(lI);var W$=lI.exports;const ha=fu(W$);function hf(){return hf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hf.apply(this,arguments)}function uI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function zv(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function q$(t){var e=K$(t,"string");return typeof e=="symbol"?e:String(e)}function K$(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function G$(t,e,n){var r=_.useRef(t!==void 0),i=_.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,_.useCallback(function(u){for(var c=arguments.length,h=new Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];n&&n.apply(void 0,[u].concat(h)),o(u)},[n])]}function Q$(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[zv(r)],a=s[r],l=uI(s,[zv(r),r].map(q$)),u=e[r],c=G$(a,o,t[u]),h=c[0],d=c[1];return hf({},l,(i={},i[r]=h,i[u]=d,i))},t)}function df(t,e){return df=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},df(t,e)}function Y$(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,df(t,e)}function X$(t){const e=_.useRef(t);return _.useEffect(()=>{e.current=t},[t]),e}function cI(t){const e=X$(t);return _.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const J$=["as","disabled"];function Z$(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function eM(t){return!t||t.trim()==="#"}function hI({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const c=d=>{if((e||t==="a"&&eM(n))&&d.preventDefault(),e){d.stopPropagation();return}o==null||o(d)},h=d=>{d.key===" "&&(d.preventDefault(),c(d))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:c,onKeyDown:h},u]}const tM=_.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=Z$(t,J$);const[s,{tagName:o}]=hI(Object.assign({tagName:n,disabled:r},i));return p.jsx(o,Object.assign({},i,s,{ref:e}))});tM.displayName="Button";const nM=["onKeyDown"];function rM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function iM(t){return!t||t.trim()==="#"}const dI=_.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=rM(t,nM);const[i]=hI(Object.assign({tagName:"a"},r)),s=cI(o=>{i.onKeyDown(o),n==null||n(o)});return iM(r.href)||r.role==="button"?p.jsx("a",Object.assign({ref:e},r,i,{onKeyDown:s})):p.jsx("a",Object.assign({ref:e},r,{onKeyDown:n}))});dI.displayName="Anchor";const sM=dI,oM=["xxl","xl","lg","md","sm","xs"],aM="xs",lM=_.createContext({prefixes:{},breakpoints:oM,minBreakpoint:aM});function fI(t,e){const{prefixes:n}=_.useContext(lM);return t||n[e]||e}var pI={exports:{}},uM="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",cM=uM,hM=cM;function mI(){}function gI(){}gI.resetWarningCache=mI;var dM=function(){function t(r,i,s,o,a,l){if(l!==hM){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:gI,resetWarningCache:mI};return n.PropTypes=n,n};pI.exports=dM();var fM=pI.exports;const Ih=fu(fM),Hv={disabled:!1},yI=Qe.createContext(null);var pM=function(e){return e.scrollTop},js="unmounted",wr="exited",An="entering",Er="entered",ff="exiting",In=function(t){Y$(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=wr,s.appearStatus=An):l=Er:r.unmountOnExit||r.mountOnEnter?l=js:l=wr,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===js?{status:wr}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==An&&o!==Er&&(s=An):(o===An||o===Er)&&(s=ff)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===An){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:Rs.findDOMNode(this);o&&pM(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===wr&&this.setState({status:js})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[Rs.findDOMNode(this),a],u=l[0],c=l[1],h=this.getTimeouts(),d=a?h.appear:h.enter;if(!i&&!o||Hv.disabled){this.safeSetState({status:Er},function(){s.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:An},function(){s.props.onEntering(u,c),s.onTransitionEnd(d,function(){s.safeSetState({status:Er},function(){s.props.onEntered(u,c)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:Rs.findDOMNode(this);if(!s||Hv.disabled){this.safeSetState({status:wr},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:ff},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:wr},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:Rs.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===js)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=uI(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Qe.createElement(yI.Provider,{value:null},typeof o=="function"?o(i,a):Qe.cloneElement(Qe.Children.only(o),a))},e}(Qe.Component);In.contextType=yI;In.propTypes={};function ti(){}In.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ti,onEntering:ti,onEntered:ti,onExit:ti,onExiting:ti,onExited:ti};In.UNMOUNTED=js;In.EXITED=wr;In.ENTERING=An;In.ENTERED=Er;In.EXITING=ff;const mM=In;function gM(t){return t&&t.ownerDocument||document}function yM(t){var e=gM(t);return e&&e.defaultView||window}function vM(t,e){return yM(t).getComputedStyle(t,e)}var wM=/([A-Z])/g;function EM(t){return t.replace(wM,"-$1").toLowerCase()}var _M=/^ms-/;function qa(t){return EM(t).replace(_M,"-ms-")}var SM=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function IM(t){return!!(t&&SM.test(t))}function vI(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(qa(e))||vM(t).getPropertyValue(qa(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(qa(i)):IM(i)?r+=i+"("+s+") ":n+=qa(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}const TM=!!(typeof window<"u"&&window.document&&window.document.createElement);var pf=!1,mf=!1;try{var Th={get passive(){return pf=!0},get once(){return mf=pf=!0}};TM&&(window.addEventListener("test",Th,Th),window.removeEventListener("test",Th,!0))}catch{}function CM(t,e,n,r){if(r&&typeof r!="boolean"&&!mf){var i=r.once,s=r.capture,o=n;!mf&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,pf?r:s)}t.addEventListener(e,n,r)}function kM(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function wI(t,e,n,r){return CM(t,e,n,r),function(){kM(t,e,n,r)}}function xM(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function NM(t){var e=vI(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function AM(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||xM(t,"transitionend",!0)},e+n),s=wI(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function RM(t,e,n,r){n==null&&(n=NM(t)||0);var i=AM(t,n,r),s=wI(t,"transitionend",e);return function(){i(),s()}}function Wv(t,e){const n=vI(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function PM(t,e){const n=Wv(t,"transitionDuration"),r=Wv(t,"transitionDelay"),i=RM(t,s=>{s.target===t&&(i(),e(s))},n+r)}function DM(t){t.offsetHeight}const qv=t=>!t||typeof t=="function"?t:e=>{t.current=e};function OM(t,e){const n=qv(t),r=qv(e);return i=>{n&&n(i),r&&r(i)}}function LM(t,e){return _.useMemo(()=>OM(t,e),[t,e])}function $M(t){return t&&"setState"in t?Rs.findDOMNode(t):t??null}const MM=Qe.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...u},c)=>{const h=_.useRef(null),d=LM(h,l),m=x=>{d($M(x))},v=x=>A=>{x&&h.current&&x(h.current,A)},w=_.useCallback(v(t),[t]),S=_.useCallback(v(e),[e]),g=_.useCallback(v(n),[n]),f=_.useCallback(v(r),[r]),y=_.useCallback(v(i),[i]),E=_.useCallback(v(s),[s]),k=_.useCallback(v(o),[o]);return p.jsx(mM,{ref:c,...u,onEnter:w,onEntered:g,onEntering:S,onExit:f,onExited:E,onExiting:y,addEndListener:k,nodeRef:h,children:typeof a=="function"?(x,A)=>a(x,{...A,ref:m}):Qe.cloneElement(a,{ref:m})})}),bM=MM,jM={[An]:"show",[Er]:"show"},EI=_.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:r,...i},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},a=_.useCallback((l,u)=>{DM(l),r==null||r(l,u)},[r]);return p.jsx(bM,{ref:s,addEndListener:PM,...o,onEnter:a,childRef:e.ref,children:(l,u)=>_.cloneElement(e,{...u,className:ha("fade",t,e.props.className,jM[l],n[l])})})});EI.displayName="Fade";const Kv=EI,FM={"aria-label":Ih.string,onClick:Ih.func,variant:Ih.oneOf(["white"])},jm=_.forwardRef(({className:t,variant:e,"aria-label":n="Close",...r},i)=>p.jsx("button",{ref:i,type:"button",className:ha("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r}));jm.displayName="CloseButton";jm.propTypes=FM;const UM=jm,VM=t=>_.forwardRef((e,n)=>p.jsx("div",{...e,ref:n,className:ha(e.className,t)}));var BM=/-(.)/g;function zM(t){return t.replace(BM,function(e,n){return n.toUpperCase()})}const HM=t=>t[0].toUpperCase()+zM(t).slice(1);function _I(t,{displayName:e=HM(t),Component:n,defaultProps:r}={}){const i=_.forwardRef(({className:s,bsPrefix:o,as:a=n||"div",...l},u)=>{const c={...r,...l},h=fI(o,t);return p.jsx(a,{ref:u,className:ha(s,h),...c})});return i.displayName=e,i}const SI=VM("h4");SI.displayName="DivStyledAsH4";const WM=_I("alert-heading",{Component:SI}),qM=_I("alert-link",{Component:sM}),II=_.forwardRef((t,e)=>{const{bsPrefix:n,show:r=!0,closeLabel:i="Close alert",closeVariant:s,className:o,children:a,variant:l="primary",onClose:u,dismissible:c,transition:h=Kv,...d}=Q$(t,{show:"onClose"}),m=fI(n,"alert"),v=cI(g=>{u&&u(!1,g)}),w=h===!0?Kv:h,S=p.jsxs("div",{role:"alert",...w?void 0:d,ref:e,className:ha(o,m,l&&`${m}-${l}`,c&&`${m}-dismissible`),children:[c&&p.jsx(UM,{onClick:v,"aria-label":i,variant:s}),a]});return w?p.jsx(w,{unmountOnExit:!0,...d,ref:void 0,in:r,children:S}):r?S:null});II.displayName="Alert";const Gv=Object.assign(II,{Link:qM,Heading:WM}),KM="_div_vsus5_1",GM={div:KM,in:"_in_vsus5_1"};function QM({text:t}){return p.jsx("div",{className:GM.div,children:p.jsx(Gv,{variant:"success",style:{width:"42rem"},children:p.jsx(Gv.Heading,{children:t})})})}function YM(){cE("2024-10-21"),_.useState("");const[t,e]=_.useState([]);function n(i){let s=0,o=0,a=0,l=0,u=0;if(t.map(c=>{c.age==="adult"&&(s=s+1),c.age==="child"&&(o=o+1),c.status==="confirmed"&&(a=a+1),c.status==="unconfirmed"&&(l=l+1),c.status==="maybe"&&(u=u+1)}),i==="adult")return s;if(i==="child")return o;if(i==="confirmed")return a;if(i==="unconfirmed")return l+u}_.useEffect(()=>{const i=DS(SS(r,"inviteds"));MS(i,s=>{const o=[];s.forEach(a=>{o.push({id:a.id,...a.data()})}),e([...o])})},[]);const r=Em(bm);return p.jsxs("div",{className:"App",children:[p.jsx("header",{className:Ss.header,children:p.jsx("h1",{className:Ss.title,children:"Guests List"})}),p.jsxs("div",{className:Ss.container,children:[p.jsxs("section",{className:Ss.cards,children:[p.jsx(fr,{title:t.length,text:"Convidados",children:p.jsx(QR,{style:{color:"white",fontSize:"15px"}})}),p.jsx(fr,{title:n("adult"),text:"Adultos",children:p.jsx(YR,{style:{color:"white",fontSize:"15px"}})}),p.jsx(fr,{title:n("child"),text:"Crianças",children:p.jsx(z$,{style:{color:"white",fontSize:"15px"}})}),p.jsx(fr,{link:"/addguests",cursor:"pointer",color:"#8c3f0d",title:"Adicionar Convidados",text:"",children:p.jsx(H$,{style:{color:"white",fontSize:"15px"}})}),p.jsx(fr,{title:n("confirmed"),text:"Confirmados",children:p.jsx(rh,{style:{color:"lightGreen",fontSize:"15px"}})}),p.jsx(fr,{title:n("unconfirmed"),text:"Não confirmados",children:p.jsx(rh,{style:{color:"Red",fontSize:"15px"}})}),p.jsx(fr,{title:n("NotFound"),text:"Não Encontrados",children:p.jsx(rh,{style:{color:"Black",fontSize:"15px"}})})]}),p.jsx("section",{className:Ss.peoplesInviteds,children:t.map(i=>p.jsx(B$,{name:i.name,lastName:i.lastName,status:i.status,age:i.age},`${i.name}${i.lastName}`))})]})]})}const XM="_header_1kyyt_1",JM="_grid_1kyyt_9",ZM="_ageBox_1kyyt_29",e3="_statusBox_1kyyt_29",t3="_age_1kyyt_29",n3="_status_1kyyt_29",mr={header:XM,grid:JM,ageBox:ZM,statusBox:e3,age:t3,status:n3};function r3(){const{addGuest:t}=_.useContext(mc),[e,n]=_.useState(""),[r,i]=_.useState(""),[s,o]=_.useState(""),[a,l]=_.useState(""),u=ns(),[c,h]=yw(),d=c.get("q")?c.get("q").split("_"):[],m=[{id:0,type:""},{id:2,type:"child"},{id:3,type:"adult"}],v=[{id:0,type:""},{id:2,type:"maybe"},{id:3,type:"confirmed"},{id:4,type:"unconfirmed"}],[w,S]=_.useState(!1),g=()=>{S(!w)};_.useEffect(()=>{d.length===2&&(n(d[0]),i(d[1]))},[]);const f=(E,k,x,A,O)=>{g(),n(y(k)),i(y(x)),t(E,k,x,A.toLowerCase(),O.toLowerCase()),E==0&&u("/guests")};function y(E){return E.charAt(0).toUpperCase()+E.slice(1)}return p.jsx("div",{className:"App",children:p.jsxs("div",{className:mr.grid,children:[w&&p.jsx(QM,{text:"Success"}),p.jsx("header",{className:mr.header,children:p.jsx("h1",{className:mr.title,children:"Add Guests"})}),p.jsx("div",{children:p.jsx(Fi,{type:"text",onChange:n,placeholder:"Name",value:y(e)})}),p.jsx("div",{children:p.jsx(Fi,{type:"text",onChange:i,placeholder:"Last Name",value:y(r)})}),p.jsx("div",{className:mr.ageBox,children:p.jsxs("div",{children:[p.jsx("label",{htmlFor:"ages",children:"Age "}),p.jsx("select",{className:mr.age,onChange:E=>o(E.target.value),name:"ages",id:"ages",value:s,children:m.map(E=>p.jsx("option",{value:E.type,children:E.type.toUpperCase()},E.id))})]})}),p.jsx("div",{className:mr.statusBox,children:p.jsxs("div",{children:[p.jsx("label",{htmlFor:"status",children:"Status "}),p.jsx("select",{className:mr.status,onChange:E=>l(E.target.value),name:"status",id:"status",value:a,children:v.map(E=>p.jsx("option",{value:E.type,children:E.type.toUpperCase()},E.id))})]})}),p.jsxs("div",{children:[p.jsx("button",{onClick:E=>f("0",y(e),y(r),s.toLowerCase(),a.toLowerCase()),children:"Add"}),p.jsx("button",{onClick:E=>f("1",y(e),y(r),s.toLowerCase(),a.toLowerCase()),children:"Add and continue"})]})]})})}const i3=()=>{const{user:t}=_.useContext(Mu);return console.log(!!t),t?p.jsx(Uk,{}):p.jsx(Id,{to:"/login"})},s3="_container_u5jqr_1",o3="_gif_u5jqr_19",a3="_img_u5jqr_29",Ch={container:s3,gif:o3,img:a3},l3="/assets/bebesorrindo-2c997a07.gif";function u3(){return p.jsxs("div",{className:Ch.container,children:[p.jsx("p",{children:"Desculpa rasgar as outras"}),p.jsx("div",{children:p.jsx("section",{children:p.jsx("figure",{class:Ch.gif,children:p.jsx("img",{classname:Ch.img,width:"250",src:l3})})})}),p.jsx("p",{children:"Prometo que farei de novo, bjbj, te amo, sdds"})]})}const c3="_containerButtons_1diw6_1",kh={containerButtons:c3};function h3(){const t=[{id:0,type:"Presença"},{id:2,type:"Confirmado"},{id:3,type:"Não confirmado"}],{confirmGuest:e}=_.useContext(mc),[n,r]=_.useState(""),[i,s]=_.useState(""),[o,a]=_.useState(""),l=`https://api.whatsapp.com/send/?phone=351964337343&text=Ol%C3%A1%2C+confirmo+minha+presen%C3%A7a+no+Casamento+de+Camile+e+Haylton.+Dia+12+de+Outubro%2C+%C3%A0s+15:30h.+${n}+${i}%3A&type=phone_number&app_absent=0`;return p.jsxs("div",{className:"App",children:[p.jsxs("div",{children:[p.jsx(Ko,{}),p.jsx(bu,{enableMiddle:!1,enableBottom:!1,color:""})]}),p.jsxs("div",{children:[p.jsx(Fi,{type:"text",placeholder:"Nome",onChange:r}),p.jsx(Fi,{type:"text",placeholder:"Ultimo Nome",onChange:s}),p.jsx("div",{className:kh.statusBox,children:p.jsxs("div",{children:[p.jsx("label",{for:"status"}),p.jsx("select",{className:kh.status,onChange:u=>a(u.target.value),name:"status",id:"status",children:t.map(u=>p.jsx("option",{value:u.type,children:u.type.toUpperCase()}))})]})})]}),p.jsx("div",{className:kh.containerButtons,children:p.jsx(Pr,{action:u=>e(n,i,o),link:l,navigate:"#counter",text:"Confirm",target:"_self",children:p.jsx(gE,{style:{color:"white",fontSize:"100px"}})})})]})}const d3="_main_11dwx_1",f3="_img_11dwx_15",xh={main:d3,img:f3},p3="/assets/1-97822717.jpg",m3="/assets/2-e2e1f154.jpg",g3="/assets/3-500a9e9b.jpg",y3="/assets/4-a787d06e.jpg",v3="/assets/5-c8036157.mp4",w3="/assets/6-aba83af9.jpg",E3="/assets/7-370808a1.jpg",_3="/assets/8-de8a7f8f.jpg",S3="/assets/9-75f44995.jpg",I3="/assets/10-aa334433.jpg",T3="/assets/11-f2991cc0.jpg",C3="/assets/12-9dbf7762.jpg",k3="/assets/13-e578ba43.jpg",x3="/assets/14-e7a615d5.jpg";function N3(){const t=[p3,m3,g3,y3,v3,w3,E3,_3,S3,I3,T3,C3,k3,x3],[e,n]=_.useState(0);return _.useEffect(()=>{const r=setInterval(()=>{n(i=>(i+1)%t.length)},5e3);return()=>clearInterval(r)},[]),p.jsxs("div",{className:xh.main,children:[p.jsx("div",{className:xh.img,style:{background:`url(${t[e]}) no-repeat center/80%`}}),p.jsx("div",{className:xh.img,style:{background:`url(${t[e+1]}) no-repeat center/80%`}})]})}const A3="_div_y7o65_1",R3="_text_y7o65_27",P3="_btn_y7o65_51",Nh={div:A3,text:R3,btn:P3};function D3(){return p.jsxs("div",{className:Nh.div,children:[p.jsx("div",{className:Nh.text,children:"Atao, isto é só uma cena descontraída antes de te dar o teu presente, vai respondendo aí, pá."}),p.jsx(N3,{}),p.jsx("div",{className:Nh.btn,children:p.jsx("button",{children:p.jsx("a",{href:"/questions/1",children:"Questions"})})})]})}const O3=_.createContext({}),L3=({children:t})=>{const[e,n]=_.useState(0);return p.jsx(O3.Provider,{value:{number:e},children:t})},$3="_main_qwi6w_1",M3="_pontos_qwi6w_27",b3="_title_qwi6w_41",j3="_divButtons_qwi6w_51",F3="_questions_qwi6w_61",U3="_inputs_qwi6w_77",Cs={main:$3,pontos:M3,title:b3,divButtons:j3,questions:F3,inputs:U3};function V3(){const{id:t}=xk(),[e,n]=_.useState(parseInt(t)),[r,i]=_.useState([]),s=Em(bm),o=function(){return n(e+1),e},a=function(){return n(e-1),e},l=function(){return e<=0?p.jsx("a",{onClick:()=>a(),href:"/thefirsty",children:"Prev"}):p.jsx("a",{onClick:()=>a(),href:`/questions/${e}`,children:"Prev"})};_.useEffect(()=>{const c=DS(SS(s,`questions/1/q${e}`));MS(c,h=>{const d=[];h.forEach(m=>{d.push({id:m.id,...m.data()})}),i([...d])})},[]);const u=function(c){let h="";return c===1&&(h=r.map(d=>d.um)),c===2&&(h=r.map(d=>d.dois)),c===3&&(h=r.map(d=>d.tres)),p.jsxs("div",{className:Cs.inputs,children:[p.jsx("input",{type:"radio",id:`${h}`,name:`${c}`,value:`${c}`}),p.jsx("label",{for:`${c}`,children:p.jsx("p",{children:h})})]})};return p.jsxs(p.Fragment,{children:[p.jsx(Ko,{}),p.jsxs("div",{className:Cs.main,children:[p.jsxs("div",{className:Cs.title,children:[p.jsx("h2",{children:r.map(c=>c.id)}),p.jsxs("div",{className:Cs.questions,children:[u(1),u(2),u(3)]})]}),p.jsxs("div",{className:Cs.divButtons,children:[p.jsx("button",{children:l()}),p.jsx("button",{children:p.jsx("a",{onClick:()=>o(),href:`/questions/${e}`,children:"Next"})})]})]})]})}function B3(){const[t,e]=_.useState(!0);_.useEffect(()=>{setTimeout(()=>{e(!1)},3e3)},[]);const n=` 
    display: flex;
    justify-content:center;
    align-self:center;
    margin: auto;
    border-color: red;
  `;return t?p.jsx(p.Fragment,{children:p.jsx("div",{children:p.jsxs(p.Fragment,{children:[p.jsx("div",{className:eh.titleContainer,children:p.jsx("h1",{className:eh.title,children:"a wedding is coming"})}),p.jsx("div",{className:eh.loader,children:p.jsx(kR,{color:"#8c3f0d",isLoading:t,css:n,size:50})})]})})}):p.jsx(p.Fragment,{children:p.jsx(V$,{children:p.jsx(MA,{children:p.jsx(L3,{children:p.jsx(Qk,{children:p.jsxs(Bk,{children:[p.jsx(ut,{path:"counter",element:p.jsx(mR,{})}),p.jsx(ut,{path:"login",element:p.jsx(bR,{})}),p.jsx(ut,{path:"confirm",element:p.jsx(h3,{})}),p.jsxs(ut,{element:p.jsx(i3,{}),children:[p.jsx(ut,{path:"guests",element:p.jsx(YM,{})}),p.jsx(ut,{path:"admin",element:p.jsx(RR,{})}),p.jsx(ut,{path:"addguests",element:p.jsx(r3,{})}),p.jsx(ut,{path:"ourdate",element:p.jsx(u3,{})})]}),p.jsx(ut,{path:"thefirsty",element:p.jsx(D3,{})}),p.jsx(ut,{path:"/questions/:id",element:p.jsx(V3,{})}),p.jsx(ut,{path:"/",element:p.jsx(Id,{to:"/counter"})}),p.jsx(ut,{path:"*",element:p.jsx(Id,{to:"/counter"})})]})})})})})})}Ah.createRoot(document.getElementById("root")).render(p.jsx(B3,{}));
