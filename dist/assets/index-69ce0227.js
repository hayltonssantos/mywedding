(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Md={exports:{}},Fo={},jd={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oi=Symbol.for("react.element"),Pm=Symbol.for("react.portal"),xm=Symbol.for("react.fragment"),Nm=Symbol.for("react.strict_mode"),Om=Symbol.for("react.profiler"),Am=Symbol.for("react.provider"),Dm=Symbol.for("react.context"),Lm=Symbol.for("react.forward_ref"),Mm=Symbol.for("react.suspense"),jm=Symbol.for("react.memo"),Um=Symbol.for("react.lazy"),Au=Symbol.iterator;function zm(e){return e===null||typeof e!="object"?null:(e=Au&&e[Au]||e["@@iterator"],typeof e=="function"?e:null)}var Ud={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zd=Object.assign,Fd={};function Zn(e,t,n){this.props=e,this.context=t,this.refs=Fd,this.updater=n||Ud}Zn.prototype.isReactComponent={};Zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bd(){}bd.prototype=Zn.prototype;function dl(e,t,n){this.props=e,this.context=t,this.refs=Fd,this.updater=n||Ud}var fl=dl.prototype=new bd;fl.constructor=dl;zd(fl,Zn.prototype);fl.isPureReactComponent=!0;var Du=Array.isArray,Bd=Object.prototype.hasOwnProperty,hl={current:null},$d={key:!0,ref:!0,__self:!0,__source:!0};function Vd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Bd.call(t,r)&&!$d.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:oi,type:e,key:o,ref:s,props:i,_owner:hl.current}}function Fm(e,t){return{$$typeof:oi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pl(e){return typeof e=="object"&&e!==null&&e.$$typeof===oi}function bm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Lu=/\/+/g;function hs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bm(""+e.key):t.toString(36)}function Bi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case oi:case Pm:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+hs(s,0):r,Du(i)?(n="",e!=null&&(n=e.replace(Lu,"$&/")+"/"),Bi(i,t,n,"",function(u){return u})):i!=null&&(pl(i)&&(i=Fm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Lu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Du(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+hs(o,a);s+=Bi(o,t,n,l,i)}else if(l=zm(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+hs(o,a++),s+=Bi(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ei(e,t,n){if(e==null)return e;var r=[],i=0;return Bi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Bm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},$i={transition:null},$m={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:$i,ReactCurrentOwner:hl};L.Children={map:Ei,forEach:function(e,t,n){Ei(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ei(e,function(){t++}),t},toArray:function(e){return Ei(e,function(t){return t})||[]},only:function(e){if(!pl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Zn;L.Fragment=xm;L.Profiler=Om;L.PureComponent=dl;L.StrictMode=Nm;L.Suspense=Mm;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$m;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zd({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=hl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Bd.call(t,l)&&!$d.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:oi,type:e.type,key:i,ref:o,props:r,_owner:s}};L.createContext=function(e){return e={$$typeof:Dm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Am,_context:e},e.Consumer=e};L.createElement=Vd;L.createFactory=function(e){var t=Vd.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Lm,render:e}};L.isValidElement=pl;L.lazy=function(e){return{$$typeof:Um,_payload:{_status:-1,_result:e},_init:Bm}};L.memo=function(e,t){return{$$typeof:jm,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=$i.transition;$i.transition={};try{e()}finally{$i.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return fe.current.useCallback(e,t)};L.useContext=function(e){return fe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};L.useEffect=function(e,t){return fe.current.useEffect(e,t)};L.useId=function(){return fe.current.useId()};L.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return fe.current.useMemo(e,t)};L.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};L.useRef=function(e){return fe.current.useRef(e)};L.useState=function(e){return fe.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return fe.current.useTransition()};L.version="18.2.0";jd.exports=L;var S=jd.exports;const on=Rm(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm=S,Hm=Symbol.for("react.element"),Wm=Symbol.for("react.fragment"),Km=Object.prototype.hasOwnProperty,Gm=Vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qm={key:!0,ref:!0,__self:!0,__source:!0};function Hd(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Km.call(t,r)&&!qm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Hm,type:e,key:o,ref:s,props:i,_owner:Gm.current}}Fo.Fragment=Wm;Fo.jsx=Hd;Fo.jsxs=Hd;Md.exports=Fo;var w=Md.exports,ia={},Wd={exports:{}},Te={},Kd={exports:{}},Gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,O){var A=C.length;C.push(O);e:for(;0<A;){var G=A-1>>>1,Z=C[G];if(0<i(Z,O))C[G]=O,C[A]=Z,A=G;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var O=C[0],A=C.pop();if(A!==O){C[0]=A;e:for(var G=0,Z=C.length,wi=Z>>>1;G<wi;){var qt=2*(G+1)-1,fs=C[qt],Qt=qt+1,_i=C[Qt];if(0>i(fs,A))Qt<Z&&0>i(_i,fs)?(C[G]=_i,C[Qt]=A,G=Qt):(C[G]=fs,C[qt]=A,G=qt);else if(Qt<Z&&0>i(_i,A))C[G]=_i,C[Qt]=A,G=Qt;else break e}}return O}function i(C,O){var A=C.sortIndex-O.sortIndex;return A!==0?A:C.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,h=null,m=3,g=!1,v=!1,_=!1,T=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=C)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function y(C){if(_=!1,p(C),!v)if(n(l)!==null)v=!0,cs(I);else{var O=n(u);O!==null&&ds(y,O.startTime-C)}}function I(C,O){v=!1,_&&(_=!1,f(x),x=-1),g=!0;var A=m;try{for(p(O),h=n(l);h!==null&&(!(h.expirationTime>O)||C&&!Le());){var G=h.callback;if(typeof G=="function"){h.callback=null,m=h.priorityLevel;var Z=G(h.expirationTime<=O);O=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(l)&&r(l),p(O)}else r(l);h=n(l)}if(h!==null)var wi=!0;else{var qt=n(u);qt!==null&&ds(y,qt.startTime-O),wi=!1}return wi}finally{h=null,m=A,g=!1}}var R=!1,P=null,x=-1,F=5,D=-1;function Le(){return!(e.unstable_now()-D<F)}function lr(){if(P!==null){var C=e.unstable_now();D=C;var O=!0;try{O=P(!0,C)}finally{O?ur():(R=!1,P=null)}}else R=!1}var ur;if(typeof c=="function")ur=function(){c(lr)};else if(typeof MessageChannel<"u"){var Ou=new MessageChannel,Tm=Ou.port2;Ou.port1.onmessage=lr,ur=function(){Tm.postMessage(null)}}else ur=function(){T(lr,0)};function cs(C){P=C,R||(R=!0,ur())}function ds(C,O){x=T(function(){C(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,cs(I))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var A=m;m=O;try{return C()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,O){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var A=m;m=C;try{return O()}finally{m=A}},e.unstable_scheduleCallback=function(C,O,A){var G=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?G+A:G):A=G,C){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=A+Z,C={id:d++,callback:O,priorityLevel:C,startTime:A,expirationTime:Z,sortIndex:-1},A>G?(C.sortIndex=A,t(u,C),n(l)===null&&C===n(u)&&(_?(f(x),x=-1):_=!0,ds(y,A-G))):(C.sortIndex=Z,t(l,C),v||g||(v=!0,cs(I))),C},e.unstable_shouldYield=Le,e.unstable_wrapCallback=function(C){var O=m;return function(){var A=m;m=O;try{return C.apply(this,arguments)}finally{m=A}}}})(Gd);Kd.exports=Gd;var Qm=Kd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd=S,Ce=Qm;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qd=new Set,Mr={};function yn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(Mr[e]=t,e=0;e<t.length;e++)Qd.add(t[e])}var lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oa=Object.prototype.hasOwnProperty,Ym=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mu={},ju={};function Jm(e){return oa.call(ju,e)?!0:oa.call(Mu,e)?!1:Ym.test(e)?ju[e]=!0:(Mu[e]=!0,!1)}function Xm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zm(e,t,n,r){if(t===null||typeof t>"u"||Xm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var ml=/[\-:]([a-z])/g;function gl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ml,gl);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ml,gl);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ml,gl);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function vl(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zm(t,n,i,r)&&(n=null),r||i===null?Jm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Si=Symbol.for("react.element"),Sn=Symbol.for("react.portal"),In=Symbol.for("react.fragment"),yl=Symbol.for("react.strict_mode"),sa=Symbol.for("react.profiler"),Yd=Symbol.for("react.provider"),Jd=Symbol.for("react.context"),wl=Symbol.for("react.forward_ref"),aa=Symbol.for("react.suspense"),la=Symbol.for("react.suspense_list"),_l=Symbol.for("react.memo"),wt=Symbol.for("react.lazy"),Xd=Symbol.for("react.offscreen"),Uu=Symbol.iterator;function cr(e){return e===null||typeof e!="object"?null:(e=Uu&&e[Uu]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,ps;function yr(e){if(ps===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ps=t&&t[1]||""}return`
`+ps+e}var ms=!1;function gs(e,t){if(!e||ms)return"";ms=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ms=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yr(e):""}function eg(e){switch(e.tag){case 5:return yr(e.type);case 16:return yr("Lazy");case 13:return yr("Suspense");case 19:return yr("SuspenseList");case 0:case 2:case 15:return e=gs(e.type,!1),e;case 11:return e=gs(e.type.render,!1),e;case 1:return e=gs(e.type,!0),e;default:return""}}function ua(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case In:return"Fragment";case Sn:return"Portal";case sa:return"Profiler";case yl:return"StrictMode";case aa:return"Suspense";case la:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jd:return(e.displayName||"Context")+".Consumer";case Yd:return(e._context.displayName||"Context")+".Provider";case wl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _l:return t=e.displayName||null,t!==null?t:ua(e.type)||"Memo";case wt:t=e._payload,e=e._init;try{return ua(e(t))}catch{}}return null}function tg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ua(t);case 8:return t===yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ng(e){var t=Zd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ii(e){e._valueTracker||(e._valueTracker=ng(e))}function ef(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Zd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ro(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ca(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tf(e,t){t=t.checked,t!=null&&vl(e,"checked",t,!1)}function da(e,t){tf(e,t);var n=Vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fa(e,t.type,n):t.hasOwnProperty("defaultValue")&&fa(e,t.type,Vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fa(e,t,n){(t!=="number"||ro(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wr=Array.isArray;function Mn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ha(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(wr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Vt(n)}}function nf(e,t){var n=Vt(t.value),r=Vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function rf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?rf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ki,of=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ki=ki||document.createElement("div"),ki.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ki.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rg=["Webkit","ms","Moz","O"];Object.keys(kr).forEach(function(e){rg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kr[t]=kr[e]})});function sf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||kr.hasOwnProperty(e)&&kr[e]?(""+t).trim():t+"px"}function af(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ig=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ma(e,t){if(t){if(ig[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function ga(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var va=null;function El(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ya=null,jn=null,Un=null;function $u(e){if(e=li(e)){if(typeof ya!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Ho(t),ya(e.stateNode,e.type,t))}}function lf(e){jn?Un?Un.push(e):Un=[e]:jn=e}function uf(){if(jn){var e=jn,t=Un;if(Un=jn=null,$u(e),t)for(e=0;e<t.length;e++)$u(t[e])}}function cf(e,t){return e(t)}function df(){}var vs=!1;function ff(e,t,n){if(vs)return e(t,n);vs=!0;try{return cf(e,t,n)}finally{vs=!1,(jn!==null||Un!==null)&&(df(),uf())}}function Ur(e,t){var n=e.stateNode;if(n===null)return null;var r=Ho(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var wa=!1;if(lt)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){wa=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{wa=!1}function og(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Cr=!1,io=null,oo=!1,_a=null,sg={onError:function(e){Cr=!0,io=e}};function ag(e,t,n,r,i,o,s,a,l){Cr=!1,io=null,og.apply(sg,arguments)}function lg(e,t,n,r,i,o,s,a,l){if(ag.apply(this,arguments),Cr){if(Cr){var u=io;Cr=!1,io=null}else throw Error(E(198));oo||(oo=!0,_a=u)}}function wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vu(e){if(wn(e)!==e)throw Error(E(188))}function ug(e){var t=e.alternate;if(!t){if(t=wn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Vu(i),e;if(o===r)return Vu(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function pf(e){return e=ug(e),e!==null?mf(e):null}function mf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mf(e);if(t!==null)return t;e=e.sibling}return null}var gf=Ce.unstable_scheduleCallback,Hu=Ce.unstable_cancelCallback,cg=Ce.unstable_shouldYield,dg=Ce.unstable_requestPaint,q=Ce.unstable_now,fg=Ce.unstable_getCurrentPriorityLevel,Sl=Ce.unstable_ImmediatePriority,vf=Ce.unstable_UserBlockingPriority,so=Ce.unstable_NormalPriority,hg=Ce.unstable_LowPriority,yf=Ce.unstable_IdlePriority,bo=null,Ge=null;function pg(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(bo,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:vg,mg=Math.log,gg=Math.LN2;function vg(e){return e>>>=0,e===0?32:31-(mg(e)/gg|0)|0}var Ci=64,Ti=4194304;function _r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ao(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=_r(a):(o&=s,o!==0&&(r=_r(o)))}else s=n&~i,s!==0?r=_r(s):o!==0&&(r=_r(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),i=1<<n,r|=e[n],t&=~i;return r}function yg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Fe(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=yg(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Ea(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wf(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function ys(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function si(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function _g(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Fe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Il(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var j=0;function _f(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ef,kl,Sf,If,kf,Sa=!1,Ri=[],Nt=null,Ot=null,At=null,zr=new Map,Fr=new Map,Et=[],Eg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wu(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fr.delete(t.pointerId)}}function fr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=li(t),t!==null&&kl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Sg(e,t,n,r,i){switch(t){case"focusin":return Nt=fr(Nt,e,t,n,r,i),!0;case"dragenter":return Ot=fr(Ot,e,t,n,r,i),!0;case"mouseover":return At=fr(At,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return zr.set(o,fr(zr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Fr.set(o,fr(Fr.get(o)||null,e,t,n,r,i)),!0}return!1}function Cf(e){var t=en(e.target);if(t!==null){var n=wn(t);if(n!==null){if(t=n.tag,t===13){if(t=hf(n),t!==null){e.blockedOn=t,kf(e.priority,function(){Sf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ia(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);va=r,n.target.dispatchEvent(r),va=null}else return t=li(n),t!==null&&kl(t),e.blockedOn=n,!1;t.shift()}return!0}function Ku(e,t,n){Vi(e)&&n.delete(t)}function Ig(){Sa=!1,Nt!==null&&Vi(Nt)&&(Nt=null),Ot!==null&&Vi(Ot)&&(Ot=null),At!==null&&Vi(At)&&(At=null),zr.forEach(Ku),Fr.forEach(Ku)}function hr(e,t){e.blockedOn===t&&(e.blockedOn=null,Sa||(Sa=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,Ig)))}function br(e){function t(i){return hr(i,e)}if(0<Ri.length){hr(Ri[0],e);for(var n=1;n<Ri.length;n++){var r=Ri[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nt!==null&&hr(Nt,e),Ot!==null&&hr(Ot,e),At!==null&&hr(At,e),zr.forEach(t),Fr.forEach(t),n=0;n<Et.length;n++)r=Et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Et.length&&(n=Et[0],n.blockedOn===null);)Cf(n),n.blockedOn===null&&Et.shift()}var zn=pt.ReactCurrentBatchConfig,lo=!0;function kg(e,t,n,r){var i=j,o=zn.transition;zn.transition=null;try{j=1,Cl(e,t,n,r)}finally{j=i,zn.transition=o}}function Cg(e,t,n,r){var i=j,o=zn.transition;zn.transition=null;try{j=4,Cl(e,t,n,r)}finally{j=i,zn.transition=o}}function Cl(e,t,n,r){if(lo){var i=Ia(e,t,n,r);if(i===null)Ps(e,t,r,uo,n),Wu(e,r);else if(Sg(i,e,t,n,r))r.stopPropagation();else if(Wu(e,r),t&4&&-1<Eg.indexOf(e)){for(;i!==null;){var o=li(i);if(o!==null&&Ef(o),o=Ia(e,t,n,r),o===null&&Ps(e,t,r,uo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ps(e,t,r,null,n)}}var uo=null;function Ia(e,t,n,r){if(uo=null,e=El(r),e=en(e),e!==null)if(t=wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return uo=e,null}function Tf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fg()){case Sl:return 1;case vf:return 4;case so:case hg:return 16;case yf:return 536870912;default:return 16}default:return 16}}var Rt=null,Tl=null,Hi=null;function Rf(){if(Hi)return Hi;var e,t=Tl,n=t.length,r,i="value"in Rt?Rt.value:Rt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Hi=i.slice(e,1<r?1-r:void 0)}function Wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pi(){return!0}function Gu(){return!1}function Re(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Pi:Gu,this.isPropagationStopped=Gu,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),t}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=Re(er),ai=W({},er,{view:0,detail:0}),Tg=Re(ai),ws,_s,pr,Bo=W({},ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pr&&(pr&&e.type==="mousemove"?(ws=e.screenX-pr.screenX,_s=e.screenY-pr.screenY):_s=ws=0,pr=e),ws)},movementY:function(e){return"movementY"in e?e.movementY:_s}}),qu=Re(Bo),Rg=W({},Bo,{dataTransfer:0}),Pg=Re(Rg),xg=W({},ai,{relatedTarget:0}),Es=Re(xg),Ng=W({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),Og=Re(Ng),Ag=W({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dg=Re(Ag),Lg=W({},er,{data:0}),Qu=Re(Lg),Mg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ug[e])?!!t[e]:!1}function Pl(){return zg}var Fg=W({},ai,{key:function(e){if(e.key){var t=Mg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pl,charCode:function(e){return e.type==="keypress"?Wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bg=Re(Fg),Bg=W({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yu=Re(Bg),$g=W({},ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pl}),Vg=Re($g),Hg=W({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wg=Re(Hg),Kg=W({},Bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gg=Re(Kg),qg=[9,13,27,32],xl=lt&&"CompositionEvent"in window,Tr=null;lt&&"documentMode"in document&&(Tr=document.documentMode);var Qg=lt&&"TextEvent"in window&&!Tr,Pf=lt&&(!xl||Tr&&8<Tr&&11>=Tr),Ju=String.fromCharCode(32),Xu=!1;function xf(e,t){switch(e){case"keyup":return qg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function Yg(e,t){switch(e){case"compositionend":return Nf(t);case"keypress":return t.which!==32?null:(Xu=!0,Ju);case"textInput":return e=t.data,e===Ju&&Xu?null:e;default:return null}}function Jg(e,t){if(kn)return e==="compositionend"||!xl&&xf(e,t)?(e=Rf(),Hi=Tl=Rt=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pf&&t.locale!=="ko"?null:t.data;default:return null}}var Xg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xg[e.type]:t==="textarea"}function Of(e,t,n,r){lf(r),t=co(t,"onChange"),0<t.length&&(n=new Rl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rr=null,Br=null;function Zg(e){$f(e,0)}function $o(e){var t=Rn(e);if(ef(t))return e}function ev(e,t){if(e==="change")return t}var Af=!1;if(lt){var Ss;if(lt){var Is="oninput"in document;if(!Is){var ec=document.createElement("div");ec.setAttribute("oninput","return;"),Is=typeof ec.oninput=="function"}Ss=Is}else Ss=!1;Af=Ss&&(!document.documentMode||9<document.documentMode)}function tc(){Rr&&(Rr.detachEvent("onpropertychange",Df),Br=Rr=null)}function Df(e){if(e.propertyName==="value"&&$o(Br)){var t=[];Of(t,Br,e,El(e)),ff(Zg,t)}}function tv(e,t,n){e==="focusin"?(tc(),Rr=t,Br=n,Rr.attachEvent("onpropertychange",Df)):e==="focusout"&&tc()}function nv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o(Br)}function rv(e,t){if(e==="click")return $o(t)}function iv(e,t){if(e==="input"||e==="change")return $o(t)}function ov(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:ov;function $r(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!oa.call(t,i)||!Be(e[i],t[i]))return!1}return!0}function nc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rc(e,t){var n=nc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nc(n)}}function Lf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mf(){for(var e=window,t=ro();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ro(e.document)}return t}function Nl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sv(e){var t=Mf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lf(n.ownerDocument.documentElement,n)){if(r!==null&&Nl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=rc(n,o);var s=rc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var av=lt&&"documentMode"in document&&11>=document.documentMode,Cn=null,ka=null,Pr=null,Ca=!1;function ic(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ca||Cn==null||Cn!==ro(r)||(r=Cn,"selectionStart"in r&&Nl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&$r(Pr,r)||(Pr=r,r=co(ka,"onSelect"),0<r.length&&(t=new Rl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cn)))}function xi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tn={animationend:xi("Animation","AnimationEnd"),animationiteration:xi("Animation","AnimationIteration"),animationstart:xi("Animation","AnimationStart"),transitionend:xi("Transition","TransitionEnd")},ks={},jf={};lt&&(jf=document.createElement("div").style,"AnimationEvent"in window||(delete Tn.animationend.animation,delete Tn.animationiteration.animation,delete Tn.animationstart.animation),"TransitionEvent"in window||delete Tn.transitionend.transition);function Vo(e){if(ks[e])return ks[e];if(!Tn[e])return e;var t=Tn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jf)return ks[e]=t[n];return e}var Uf=Vo("animationend"),zf=Vo("animationiteration"),Ff=Vo("animationstart"),bf=Vo("transitionend"),Bf=new Map,oc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){Bf.set(e,t),yn(t,[e])}for(var Cs=0;Cs<oc.length;Cs++){var Ts=oc[Cs],lv=Ts.toLowerCase(),uv=Ts[0].toUpperCase()+Ts.slice(1);Wt(lv,"on"+uv)}Wt(Uf,"onAnimationEnd");Wt(zf,"onAnimationIteration");Wt(Ff,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(bf,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function sc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,lg(r,t,void 0,e),e.currentTarget=null}function $f(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;sc(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;sc(i,a,u),o=l}}}if(oo)throw e=_a,oo=!1,_a=null,e}function b(e,t){var n=t[Na];n===void 0&&(n=t[Na]=new Set);var r=e+"__bubble";n.has(r)||(Vf(t,e,2,!1),n.add(r))}function Rs(e,t,n){var r=0;t&&(r|=4),Vf(n,e,r,t)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[Ni]){e[Ni]=!0,Qd.forEach(function(n){n!=="selectionchange"&&(cv.has(n)||Rs(n,!1,e),Rs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ni]||(t[Ni]=!0,Rs("selectionchange",!1,t))}}function Vf(e,t,n,r){switch(Tf(t)){case 1:var i=kg;break;case 4:i=Cg;break;default:i=Cl}n=i.bind(null,t,n,e),i=void 0,!wa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ps(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=en(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}ff(function(){var u=o,d=El(n),h=[];e:{var m=Bf.get(e);if(m!==void 0){var g=Rl,v=e;switch(e){case"keypress":if(Wi(n)===0)break e;case"keydown":case"keyup":g=bg;break;case"focusin":v="focus",g=Es;break;case"focusout":v="blur",g=Es;break;case"beforeblur":case"afterblur":g=Es;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Pg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Vg;break;case Uf:case zf:case Ff:g=Og;break;case bf:g=Wg;break;case"scroll":g=Tg;break;case"wheel":g=Gg;break;case"copy":case"cut":case"paste":g=Dg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Yu}var _=(t&4)!==0,T=!_&&e==="scroll",f=_?m!==null?m+"Capture":null:m;_=[];for(var c=u,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Ur(c,f),y!=null&&_.push(Hr(c,y,p)))),T)break;c=c.return}0<_.length&&(m=new g(m,v,null,n,d),h.push({event:m,listeners:_}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==va&&(v=n.relatedTarget||n.fromElement)&&(en(v)||v[ut]))break e;if((g||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?en(v):null,v!==null&&(T=wn(v),v!==T||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(_=qu,y="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=Yu,y="onPointerLeave",f="onPointerEnter",c="pointer"),T=g==null?m:Rn(g),p=v==null?m:Rn(v),m=new _(y,c+"leave",g,n,d),m.target=T,m.relatedTarget=p,y=null,en(d)===u&&(_=new _(f,c+"enter",v,n,d),_.target=p,_.relatedTarget=T,y=_),T=y,g&&v)t:{for(_=g,f=v,c=0,p=_;p;p=En(p))c++;for(p=0,y=f;y;y=En(y))p++;for(;0<c-p;)_=En(_),c--;for(;0<p-c;)f=En(f),p--;for(;c--;){if(_===f||f!==null&&_===f.alternate)break t;_=En(_),f=En(f)}_=null}else _=null;g!==null&&ac(h,m,g,_,!1),v!==null&&T!==null&&ac(h,T,v,_,!0)}}e:{if(m=u?Rn(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var I=ev;else if(Zu(m))if(Af)I=iv;else{I=nv;var R=tv}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(I=rv);if(I&&(I=I(e,u))){Of(h,I,n,d);break e}R&&R(e,m,u),e==="focusout"&&(R=m._wrapperState)&&R.controlled&&m.type==="number"&&fa(m,"number",m.value)}switch(R=u?Rn(u):window,e){case"focusin":(Zu(R)||R.contentEditable==="true")&&(Cn=R,ka=u,Pr=null);break;case"focusout":Pr=ka=Cn=null;break;case"mousedown":Ca=!0;break;case"contextmenu":case"mouseup":case"dragend":Ca=!1,ic(h,n,d);break;case"selectionchange":if(av)break;case"keydown":case"keyup":ic(h,n,d)}var P;if(xl)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else kn?xf(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Pf&&n.locale!=="ko"&&(kn||x!=="onCompositionStart"?x==="onCompositionEnd"&&kn&&(P=Rf()):(Rt=d,Tl="value"in Rt?Rt.value:Rt.textContent,kn=!0)),R=co(u,x),0<R.length&&(x=new Qu(x,e,null,n,d),h.push({event:x,listeners:R}),P?x.data=P:(P=Nf(n),P!==null&&(x.data=P)))),(P=Qg?Yg(e,n):Jg(e,n))&&(u=co(u,"onBeforeInput"),0<u.length&&(d=new Qu("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=P))}$f(h,t)})}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function co(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ur(e,n),o!=null&&r.unshift(Hr(e,o,i)),o=Ur(e,t),o!=null&&r.push(Hr(e,o,i))),e=e.return}return r}function En(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ac(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ur(n,o),l!=null&&s.unshift(Hr(n,l,a))):i||(l=Ur(n,o),l!=null&&s.push(Hr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var dv=/\r\n?/g,fv=/\u0000|\uFFFD/g;function lc(e){return(typeof e=="string"?e:""+e).replace(dv,`
`).replace(fv,"")}function Oi(e,t,n){if(t=lc(t),lc(e)!==t&&n)throw Error(E(425))}function fo(){}var Ta=null,Ra=null;function Pa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xa=typeof setTimeout=="function"?setTimeout:void 0,hv=typeof clearTimeout=="function"?clearTimeout:void 0,uc=typeof Promise=="function"?Promise:void 0,pv=typeof queueMicrotask=="function"?queueMicrotask:typeof uc<"u"?function(e){return uc.resolve(null).then(e).catch(mv)}:xa;function mv(e){setTimeout(function(){throw e})}function xs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),br(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);br(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var tr=Math.random().toString(36).slice(2),Ke="__reactFiber$"+tr,Wr="__reactProps$"+tr,ut="__reactContainer$"+tr,Na="__reactEvents$"+tr,gv="__reactListeners$"+tr,vv="__reactHandles$"+tr;function en(e){var t=e[Ke];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[Ke]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cc(e);e!==null;){if(n=e[Ke])return n;e=cc(e)}return t}e=n,n=e.parentNode}return null}function li(e){return e=e[Ke]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Ho(e){return e[Wr]||null}var Oa=[],Pn=-1;function Kt(e){return{current:e}}function B(e){0>Pn||(e.current=Oa[Pn],Oa[Pn]=null,Pn--)}function z(e,t){Pn++,Oa[Pn]=e.current,e.current=t}var Ht={},le=Kt(Ht),ve=Kt(!1),un=Ht;function Wn(e,t){var n=e.type.contextTypes;if(!n)return Ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function ho(){B(ve),B(le)}function dc(e,t,n){if(le.current!==Ht)throw Error(E(168));z(le,t),z(ve,n)}function Hf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,tg(e)||"Unknown",i));return W({},n,r)}function po(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,un=le.current,z(le,e),z(ve,ve.current),!0}function fc(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Hf(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,B(ve),B(le),z(le,e)):B(ve),z(ve,n)}var nt=null,Wo=!1,Ns=!1;function Wf(e){nt===null?nt=[e]:nt.push(e)}function yv(e){Wo=!0,Wf(e)}function Gt(){if(!Ns&&nt!==null){Ns=!0;var e=0,t=j;try{var n=nt;for(j=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nt=null,Wo=!1}catch(i){throw nt!==null&&(nt=nt.slice(e+1)),gf(Sl,Gt),i}finally{j=t,Ns=!1}}return null}var xn=[],Nn=0,mo=null,go=0,Pe=[],xe=0,cn=null,rt=1,it="";function Yt(e,t){xn[Nn++]=go,xn[Nn++]=mo,mo=e,go=t}function Kf(e,t,n){Pe[xe++]=rt,Pe[xe++]=it,Pe[xe++]=cn,cn=e;var r=rt;e=it;var i=32-Fe(r)-1;r&=~(1<<i),n+=1;var o=32-Fe(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,rt=1<<32-Fe(t)+i|n<<i|r,it=o+e}else rt=1<<o|n<<i|r,it=e}function Ol(e){e.return!==null&&(Yt(e,1),Kf(e,1,0))}function Al(e){for(;e===mo;)mo=xn[--Nn],xn[Nn]=null,go=xn[--Nn],xn[Nn]=null;for(;e===cn;)cn=Pe[--xe],Pe[xe]=null,it=Pe[--xe],Pe[xe]=null,rt=Pe[--xe],Pe[xe]=null}var Ie=null,Se=null,$=!1,ze=null;function Gf(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,Se=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:rt,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ie=e,Se=null,!0):!1;default:return!1}}function Aa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Da(e){if($){var t=Se;if(t){var n=t;if(!hc(e,t)){if(Aa(e))throw Error(E(418));t=Dt(n.nextSibling);var r=Ie;t&&hc(e,t)?Gf(r,n):(e.flags=e.flags&-4097|2,$=!1,Ie=e)}}else{if(Aa(e))throw Error(E(418));e.flags=e.flags&-4097|2,$=!1,Ie=e}}}function pc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function Ai(e){if(e!==Ie)return!1;if(!$)return pc(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pa(e.type,e.memoizedProps)),t&&(t=Se)){if(Aa(e))throw qf(),Error(E(418));for(;t;)Gf(e,t),t=Dt(t.nextSibling)}if(pc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=Dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Ie?Dt(e.stateNode.nextSibling):null;return!0}function qf(){for(var e=Se;e;)e=Dt(e.nextSibling)}function Kn(){Se=Ie=null,$=!1}function Dl(e){ze===null?ze=[e]:ze.push(e)}var wv=pt.ReactCurrentBatchConfig;function je(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var vo=Kt(null),yo=null,On=null,Ll=null;function Ml(){Ll=On=yo=null}function jl(e){var t=vo.current;B(vo),e._currentValue=t}function La(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fn(e,t){yo=e,Ll=On=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Ll!==e)if(e={context:e,memoizedValue:t,next:null},On===null){if(yo===null)throw Error(E(308));On=e,yo.dependencies={lanes:0,firstContext:e}}else On=On.next=e;return t}var tn=null;function Ul(e){tn===null?tn=[e]:tn.push(e)}function Qf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ul(t)):(n.next=i.next,i.next=n),t.interleaved=n,ct(e,r)}function ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var _t=!1;function zl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Lt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ct(e,n)}return i=r.interleaved,i===null?(t.next=t,Ul(r)):(t.next=i.next,i.next=t),r.interleaved=t,ct(e,n)}function Ki(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Il(e,n)}}function mc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wo(e,t,n,r){var i=e.updateQueue;_t=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,d=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,_=a;switch(m=t,g=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(g,h,m);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,m=typeof v=="function"?v.call(g,h,m):v,m==null)break e;h=W({},h,m);break e;case 2:_t=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=h):d=d.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);fn|=s,e.lanes=s,e.memoizedState=h}}function gc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Jf=new qd.Component().refs;function Ma(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ko={isMounted:function(e){return(e=e._reactInternals)?wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),i=jt(e),o=at(r,i);o.payload=t,n!=null&&(o.callback=n),t=Lt(e,o,i),t!==null&&(be(t,e,i,r),Ki(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),i=jt(e),o=at(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Lt(e,o,i),t!==null&&(be(t,e,i,r),Ki(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=jt(e),i=at(n,r);i.tag=2,t!=null&&(i.callback=t),t=Lt(e,i,r),t!==null&&(be(t,e,r,n),Ki(t,e,r))}};function vc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!$r(n,r)||!$r(i,o):!0}function Xf(e,t,n){var r=!1,i=Ht,o=t.contextType;return typeof o=="object"&&o!==null?o=Ae(o):(i=ye(t)?un:le.current,r=t.contextTypes,o=(r=r!=null)?Wn(e,i):Ht),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ko,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function yc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ko.enqueueReplaceState(t,t.state,null)}function ja(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Jf,zl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ae(o):(o=ye(t)?un:le.current,i.context=Wn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ma(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ko.enqueueReplaceState(i,i.state,null),wo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Jf&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Di(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wc(e){var t=e._init;return t(e._payload)}function Zf(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Ut(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,y){return c===null||c.tag!==6?(c=Us(p,f.mode,y),c.return=f,c):(c=i(c,p),c.return=f,c)}function l(f,c,p,y){var I=p.type;return I===In?d(f,c,p.props.children,y,p.key):c!==null&&(c.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===wt&&wc(I)===c.type)?(y=i(c,p.props),y.ref=mr(f,c,p),y.return=f,y):(y=Xi(p.type,p.key,p.props,null,f.mode,y),y.ref=mr(f,c,p),y.return=f,y)}function u(f,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=zs(p,f.mode,y),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function d(f,c,p,y,I){return c===null||c.tag!==7?(c=an(p,f.mode,y,I),c.return=f,c):(c=i(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Us(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Si:return p=Xi(c.type,c.key,c.props,null,f.mode,p),p.ref=mr(f,null,c),p.return=f,p;case Sn:return c=zs(c,f.mode,p),c.return=f,c;case wt:var y=c._init;return h(f,y(c._payload),p)}if(wr(c)||cr(c))return c=an(c,f.mode,p,null),c.return=f,c;Di(f,c)}return null}function m(f,c,p,y){var I=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return I!==null?null:a(f,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Si:return p.key===I?l(f,c,p,y):null;case Sn:return p.key===I?u(f,c,p,y):null;case wt:return I=p._init,m(f,c,I(p._payload),y)}if(wr(p)||cr(p))return I!==null?null:d(f,c,p,y,null);Di(f,p)}return null}function g(f,c,p,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,a(c,f,""+y,I);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Si:return f=f.get(y.key===null?p:y.key)||null,l(c,f,y,I);case Sn:return f=f.get(y.key===null?p:y.key)||null,u(c,f,y,I);case wt:var R=y._init;return g(f,c,p,R(y._payload),I)}if(wr(y)||cr(y))return f=f.get(p)||null,d(c,f,y,I,null);Di(c,y)}return null}function v(f,c,p,y){for(var I=null,R=null,P=c,x=c=0,F=null;P!==null&&x<p.length;x++){P.index>x?(F=P,P=null):F=P.sibling;var D=m(f,P,p[x],y);if(D===null){P===null&&(P=F);break}e&&P&&D.alternate===null&&t(f,P),c=o(D,c,x),R===null?I=D:R.sibling=D,R=D,P=F}if(x===p.length)return n(f,P),$&&Yt(f,x),I;if(P===null){for(;x<p.length;x++)P=h(f,p[x],y),P!==null&&(c=o(P,c,x),R===null?I=P:R.sibling=P,R=P);return $&&Yt(f,x),I}for(P=r(f,P);x<p.length;x++)F=g(P,f,x,p[x],y),F!==null&&(e&&F.alternate!==null&&P.delete(F.key===null?x:F.key),c=o(F,c,x),R===null?I=F:R.sibling=F,R=F);return e&&P.forEach(function(Le){return t(f,Le)}),$&&Yt(f,x),I}function _(f,c,p,y){var I=cr(p);if(typeof I!="function")throw Error(E(150));if(p=I.call(p),p==null)throw Error(E(151));for(var R=I=null,P=c,x=c=0,F=null,D=p.next();P!==null&&!D.done;x++,D=p.next()){P.index>x?(F=P,P=null):F=P.sibling;var Le=m(f,P,D.value,y);if(Le===null){P===null&&(P=F);break}e&&P&&Le.alternate===null&&t(f,P),c=o(Le,c,x),R===null?I=Le:R.sibling=Le,R=Le,P=F}if(D.done)return n(f,P),$&&Yt(f,x),I;if(P===null){for(;!D.done;x++,D=p.next())D=h(f,D.value,y),D!==null&&(c=o(D,c,x),R===null?I=D:R.sibling=D,R=D);return $&&Yt(f,x),I}for(P=r(f,P);!D.done;x++,D=p.next())D=g(P,f,x,D.value,y),D!==null&&(e&&D.alternate!==null&&P.delete(D.key===null?x:D.key),c=o(D,c,x),R===null?I=D:R.sibling=D,R=D);return e&&P.forEach(function(lr){return t(f,lr)}),$&&Yt(f,x),I}function T(f,c,p,y){if(typeof p=="object"&&p!==null&&p.type===In&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Si:e:{for(var I=p.key,R=c;R!==null;){if(R.key===I){if(I=p.type,I===In){if(R.tag===7){n(f,R.sibling),c=i(R,p.props.children),c.return=f,f=c;break e}}else if(R.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===wt&&wc(I)===R.type){n(f,R.sibling),c=i(R,p.props),c.ref=mr(f,R,p),c.return=f,f=c;break e}n(f,R);break}else t(f,R);R=R.sibling}p.type===In?(c=an(p.props.children,f.mode,y,p.key),c.return=f,f=c):(y=Xi(p.type,p.key,p.props,null,f.mode,y),y.ref=mr(f,c,p),y.return=f,f=y)}return s(f);case Sn:e:{for(R=p.key;c!==null;){if(c.key===R)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=zs(p,f.mode,y),c.return=f,f=c}return s(f);case wt:return R=p._init,T(f,c,R(p._payload),y)}if(wr(p))return v(f,c,p,y);if(cr(p))return _(f,c,p,y);Di(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=Us(p,f.mode,y),c.return=f,f=c),s(f)):n(f,c)}return T}var Gn=Zf(!0),eh=Zf(!1),ui={},qe=Kt(ui),Kr=Kt(ui),Gr=Kt(ui);function nn(e){if(e===ui)throw Error(E(174));return e}function Fl(e,t){switch(z(Gr,t),z(Kr,e),z(qe,ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pa(t,e)}B(qe),z(qe,t)}function qn(){B(qe),B(Kr),B(Gr)}function th(e){nn(Gr.current);var t=nn(qe.current),n=pa(t,e.type);t!==n&&(z(Kr,e),z(qe,n))}function bl(e){Kr.current===e&&(B(qe),B(Kr))}var V=Kt(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Os=[];function Bl(){for(var e=0;e<Os.length;e++)Os[e]._workInProgressVersionPrimary=null;Os.length=0}var Gi=pt.ReactCurrentDispatcher,As=pt.ReactCurrentBatchConfig,dn=0,H=null,J=null,ee=null,Eo=!1,xr=!1,qr=0,_v=0;function oe(){throw Error(E(321))}function $l(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function Vl(e,t,n,r,i,o){if(dn=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gi.current=e===null||e.memoizedState===null?kv:Cv,e=n(r,i),xr){o=0;do{if(xr=!1,qr=0,25<=o)throw Error(E(301));o+=1,ee=J=null,t.updateQueue=null,Gi.current=Tv,e=n(r,i)}while(xr)}if(Gi.current=So,t=J!==null&&J.next!==null,dn=0,ee=J=H=null,Eo=!1,t)throw Error(E(300));return e}function Hl(){var e=qr!==0;return qr=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?H.memoizedState=ee=e:ee=ee.next=e,ee}function De(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ee===null?H.memoizedState:ee.next;if(t!==null)ee=t,J=e;else{if(e===null)throw Error(E(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?H.memoizedState=ee=e:ee=ee.next=e}return ee}function Qr(e,t){return typeof t=="function"?t(e):t}function Ds(e){var t=De(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=J,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((dn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,H.lanes|=d,fn|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Be(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,fn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ls(e){var t=De(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Be(o,t.memoizedState)||(ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function nh(){}function rh(e,t){var n=H,r=De(),i=t(),o=!Be(r.memoizedState,i);if(o&&(r.memoizedState=i,ge=!0),r=r.queue,Wl(sh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,Yr(9,oh.bind(null,n,r,i,t),void 0,null),te===null)throw Error(E(349));dn&30||ih(n,t,i)}return i}function ih(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function oh(e,t,n,r){t.value=n,t.getSnapshot=r,ah(t)&&lh(e)}function sh(e,t,n){return n(function(){ah(t)&&lh(e)})}function ah(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function lh(e){var t=ct(e,1);t!==null&&be(t,e,1,-1)}function _c(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:e},t.queue=e,e=e.dispatch=Iv.bind(null,H,e),[t.memoizedState,e]}function Yr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function uh(){return De().memoizedState}function qi(e,t,n,r){var i=We();H.flags|=e,i.memoizedState=Yr(1|t,n,void 0,r===void 0?null:r)}function Go(e,t,n,r){var i=De();r=r===void 0?null:r;var o=void 0;if(J!==null){var s=J.memoizedState;if(o=s.destroy,r!==null&&$l(r,s.deps)){i.memoizedState=Yr(t,n,o,r);return}}H.flags|=e,i.memoizedState=Yr(1|t,n,o,r)}function Ec(e,t){return qi(8390656,8,e,t)}function Wl(e,t){return Go(2048,8,e,t)}function ch(e,t){return Go(4,2,e,t)}function dh(e,t){return Go(4,4,e,t)}function fh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hh(e,t,n){return n=n!=null?n.concat([e]):null,Go(4,4,fh.bind(null,t,e),n)}function Kl(){}function ph(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$l(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function mh(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$l(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function gh(e,t,n){return dn&21?(Be(n,t)||(n=wf(),H.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function Ev(e,t){var n=j;j=n!==0&&4>n?n:4,e(!0);var r=As.transition;As.transition={};try{e(!1),t()}finally{j=n,As.transition=r}}function vh(){return De().memoizedState}function Sv(e,t,n){var r=jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yh(e))wh(t,n);else if(n=Qf(e,t,n,r),n!==null){var i=de();be(n,e,r,i),_h(n,t,r)}}function Iv(e,t,n){var r=jt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yh(e))wh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Be(a,s)){var l=t.interleaved;l===null?(i.next=i,Ul(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Qf(e,t,i,r),n!==null&&(i=de(),be(n,e,r,i),_h(n,t,r))}}function yh(e){var t=e.alternate;return e===H||t!==null&&t===H}function wh(e,t){xr=Eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _h(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Il(e,n)}}var So={readContext:Ae,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},kv={readContext:Ae,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Ec,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qi(4194308,4,fh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qi(4194308,4,e,t)},useInsertionEffect:function(e,t){return qi(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Sv.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:_c,useDebugValue:Kl,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=_c(!1),t=e[0];return e=Ev.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=We();if($){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),te===null)throw Error(E(349));dn&30||ih(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ec(sh.bind(null,r,o,e),[e]),r.flags|=2048,Yr(9,oh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=We(),t=te.identifierPrefix;if($){var n=it,r=rt;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_v++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Cv={readContext:Ae,useCallback:ph,useContext:Ae,useEffect:Wl,useImperativeHandle:hh,useInsertionEffect:ch,useLayoutEffect:dh,useMemo:mh,useReducer:Ds,useRef:uh,useState:function(){return Ds(Qr)},useDebugValue:Kl,useDeferredValue:function(e){var t=De();return gh(t,J.memoizedState,e)},useTransition:function(){var e=Ds(Qr)[0],t=De().memoizedState;return[e,t]},useMutableSource:nh,useSyncExternalStore:rh,useId:vh,unstable_isNewReconciler:!1},Tv={readContext:Ae,useCallback:ph,useContext:Ae,useEffect:Wl,useImperativeHandle:hh,useInsertionEffect:ch,useLayoutEffect:dh,useMemo:mh,useReducer:Ls,useRef:uh,useState:function(){return Ls(Qr)},useDebugValue:Kl,useDeferredValue:function(e){var t=De();return J===null?t.memoizedState=e:gh(t,J.memoizedState,e)},useTransition:function(){var e=Ls(Qr)[0],t=De().memoizedState;return[e,t]},useMutableSource:nh,useSyncExternalStore:rh,useId:vh,unstable_isNewReconciler:!1};function Qn(e,t){try{var n="",r=t;do n+=eg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ms(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ua(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rv=typeof WeakMap=="function"?WeakMap:Map;function Eh(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ko||(ko=!0,Ga=r),Ua(e,t)},n}function Sh(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ua(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ua(e,t),typeof r!="function"&&(Mt===null?Mt=new Set([this]):Mt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Sc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Bv.bind(null,e,t,n),t.then(e,e))}function Ic(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,Lt(n,t,1))),n.lanes|=1),e)}var Pv=pt.ReactCurrentOwner,ge=!1;function ce(e,t,n,r){t.child=e===null?eh(t,null,n,r):Gn(t,e.child,n,r)}function Cc(e,t,n,r,i){n=n.render;var o=t.ref;return Fn(t,i),r=Vl(e,t,n,r,o,i),n=Hl(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):($&&n&&Ol(t),t.flags|=1,ce(e,t,r,i),t.child)}function Tc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!eu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ih(e,t,o,r,i)):(e=Xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(s,r)&&e.ref===t.ref)return dt(e,t,i)}return t.flags|=1,e=Ut(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ih(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if($r(o,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,dt(e,t,i)}return za(e,t,n,r,i)}function kh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(Dn,Ee),Ee|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(Dn,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,z(Dn,Ee),Ee|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,z(Dn,Ee),Ee|=r;return ce(e,t,i,n),t.child}function Ch(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function za(e,t,n,r,i){var o=ye(n)?un:le.current;return o=Wn(t,o),Fn(t,i),n=Vl(e,t,n,r,o,i),r=Hl(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):($&&r&&Ol(t),t.flags|=1,ce(e,t,n,i),t.child)}function Rc(e,t,n,r,i){if(ye(n)){var o=!0;po(t)}else o=!1;if(Fn(t,i),t.stateNode===null)Qi(e,t),Xf(t,n,r),ja(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=ye(n)?un:le.current,u=Wn(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&yc(t,s,r,u),_t=!1;var m=t.memoizedState;s.state=m,wo(t,r,s,i),l=t.memoizedState,a!==r||m!==l||ve.current||_t?(typeof d=="function"&&(Ma(t,n,d,r),l=t.memoizedState),(a=_t||vc(t,n,a,r,m,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Yf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:je(t.type,a),s.props=u,h=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ae(l):(l=ye(n)?un:le.current,l=Wn(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||m!==l)&&yc(t,s,r,l),_t=!1,m=t.memoizedState,s.state=m,wo(t,r,s,i);var v=t.memoizedState;a!==h||m!==v||ve.current||_t?(typeof g=="function"&&(Ma(t,n,g,r),v=t.memoizedState),(u=_t||vc(t,n,u,r,m,v,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Fa(e,t,n,r,o,i)}function Fa(e,t,n,r,i,o){Ch(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&fc(t,n,!1),dt(e,t,o);r=t.stateNode,Pv.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Gn(t,e.child,null,o),t.child=Gn(t,null,a,o)):ce(e,t,a,o),t.memoizedState=r.state,i&&fc(t,n,!0),t.child}function Th(e){var t=e.stateNode;t.pendingContext?dc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&dc(e,t.context,!1),Fl(e,t.containerInfo)}function Pc(e,t,n,r,i){return Kn(),Dl(i),t.flags|=256,ce(e,t,n,r),t.child}var ba={dehydrated:null,treeContext:null,retryLane:0};function Ba(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rh(e,t,n){var r=t.pendingProps,i=V.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z(V,i&1),e===null)return Da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Yo(s,r,0,null),e=an(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ba(n),t.memoizedState=ba,e):Gl(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return xv(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Ut(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ut(a,o):(o=an(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ba(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ba,r}return o=e.child,e=o.sibling,r=Ut(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Gl(e,t){return t=Yo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Li(e,t,n,r){return r!==null&&Dl(r),Gn(t,e.child,null,n),e=Gl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xv(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ms(Error(E(422))),Li(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Yo({mode:"visible",children:r.children},i,0,null),o=an(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Gn(t,e.child,null,s),t.child.memoizedState=Ba(s),t.memoizedState=ba,o);if(!(t.mode&1))return Li(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(E(419)),r=Ms(o,r,void 0),Li(e,t,s,r)}if(a=(s&e.childLanes)!==0,ge||a){if(r=te,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ct(e,i),be(r,e,i,-1))}return Zl(),r=Ms(Error(E(421))),Li(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=$v.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Se=Dt(i.nextSibling),Ie=t,$=!0,ze=null,e!==null&&(Pe[xe++]=rt,Pe[xe++]=it,Pe[xe++]=cn,rt=e.id,it=e.overflow,cn=t),t=Gl(t,r.children),t.flags|=4096,t)}function xc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),La(e.return,t,n)}function js(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ph(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ce(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xc(e,n,t);else if(e.tag===19)xc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),js(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}js(t,!0,n,null,o);break;case"together":js(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nv(e,t,n){switch(t.tag){case 3:Th(t),Kn();break;case 5:th(t);break;case 1:ye(t.type)&&po(t);break;case 4:Fl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;z(vo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(z(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Rh(e,t,n):(z(V,V.current&1),e=dt(e,t,n),e!==null?e.sibling:null);z(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ph(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,kh(e,t,n)}return dt(e,t,n)}var xh,$a,Nh,Oh;xh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$a=function(){};Nh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,nn(qe.current);var o=null;switch(n){case"input":i=ca(e,i),r=ca(e,r),o=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":i=ha(e,i),r=ha(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fo)}ma(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Mr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Mr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&b("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Oh=function(e,t,n,r){n!==r&&(t.flags|=4)};function gr(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ov(e,t,n){var r=t.pendingProps;switch(Al(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ye(t.type)&&ho(),se(t),null;case 3:return r=t.stateNode,qn(),B(ve),B(le),Bl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ai(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ze!==null&&(Ya(ze),ze=null))),$a(e,t),se(t),null;case 5:bl(t);var i=nn(Gr.current);if(n=t.type,e!==null&&t.stateNode!=null)Nh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return se(t),null}if(e=nn(qe.current),Ai(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ke]=t,r[Wr]=o,e=(t.mode&1)!==0,n){case"dialog":b("cancel",r),b("close",r);break;case"iframe":case"object":case"embed":b("load",r);break;case"video":case"audio":for(i=0;i<Er.length;i++)b(Er[i],r);break;case"source":b("error",r);break;case"img":case"image":case"link":b("error",r),b("load",r);break;case"details":b("toggle",r);break;case"input":zu(r,o),b("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},b("invalid",r);break;case"textarea":bu(r,o),b("invalid",r)}ma(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Oi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Oi(r.textContent,a,e),i=["children",""+a]):Mr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&b("scroll",r)}switch(n){case"input":Ii(r),Fu(r,o,!0);break;case"textarea":Ii(r),Bu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=fo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ke]=t,e[Wr]=r,xh(e,t,!1,!1),t.stateNode=e;e:{switch(s=ga(n,r),n){case"dialog":b("cancel",e),b("close",e),i=r;break;case"iframe":case"object":case"embed":b("load",e),i=r;break;case"video":case"audio":for(i=0;i<Er.length;i++)b(Er[i],e);i=r;break;case"source":b("error",e),i=r;break;case"img":case"image":case"link":b("error",e),b("load",e),i=r;break;case"details":b("toggle",e),i=r;break;case"input":zu(e,r),i=ca(e,r),b("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),b("invalid",e);break;case"textarea":bu(e,r),i=ha(e,r),b("invalid",e);break;default:i=r}ma(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?af(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&of(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&jr(e,l):typeof l=="number"&&jr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Mr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&b("scroll",e):l!=null&&vl(e,o,l,s))}switch(n){case"input":Ii(e),Fu(e,r,!1);break;case"textarea":Ii(e),Bu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Mn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Mn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Oh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=nn(Gr.current),nn(qe.current),Ai(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ke]=t,(o=r.nodeValue!==n)&&(e=Ie,e!==null))switch(e.tag){case 3:Oi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Oi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ke]=t,t.stateNode=r}return se(t),null;case 13:if(B(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&Se!==null&&t.mode&1&&!(t.flags&128))qf(),Kn(),t.flags|=98560,o=!1;else if(o=Ai(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[Ke]=t}else Kn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else ze!==null&&(Ya(ze),ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?X===0&&(X=3):Zl())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return qn(),$a(e,t),e===null&&Vr(t.stateNode.containerInfo),se(t),null;case 10:return jl(t.type._context),se(t),null;case 17:return ye(t.type)&&ho(),se(t),null;case 19:if(B(V),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)gr(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=_o(e),s!==null){for(t.flags|=128,gr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>Yn&&(t.flags|=128,r=!0,gr(o,!1),t.lanes=4194304)}else{if(!r)if(e=_o(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!$)return se(t),null}else 2*q()-o.renderingStartTime>Yn&&n!==1073741824&&(t.flags|=128,r=!0,gr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,n=V.current,z(V,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Xl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ee&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Av(e,t){switch(Al(t),t.tag){case 1:return ye(t.type)&&ho(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qn(),B(ve),B(le),Bl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bl(t),null;case 13:if(B(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(V),null;case 4:return qn(),null;case 10:return jl(t.type._context),null;case 22:case 23:return Xl(),null;case 24:return null;default:return null}}var Mi=!1,ae=!1,Dv=typeof WeakSet=="function"?WeakSet:Set,k=null;function An(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Va(e,t,n){try{n()}catch(r){K(e,t,r)}}var Nc=!1;function Lv(e,t){if(Ta=lo,e=Mf(),Nl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,h=e,m=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(g=h.firstChild)!==null;)m=h,h=g;for(;;){if(h===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++d===r&&(l=s),(g=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ra={focusedElem:e,selectionRange:n},lo=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,T=v.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?_:je(t.type,_),T);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){K(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return v=Nc,Nc=!1,v}function Nr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Va(t,n,o)}i=i.next}while(i!==r)}}function qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ha(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ah(e){var t=e.alternate;t!==null&&(e.alternate=null,Ah(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ke],delete t[Wr],delete t[Na],delete t[gv],delete t[vv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dh(e){return e.tag===5||e.tag===3||e.tag===4}function Oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fo));else if(r!==4&&(e=e.child,e!==null))for(Wa(e,t,n),e=e.sibling;e!==null;)Wa(e,t,n),e=e.sibling}function Ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ka(e,t,n),e=e.sibling;e!==null;)Ka(e,t,n),e=e.sibling}var ne=null,Ue=!1;function gt(e,t,n){for(n=n.child;n!==null;)Lh(e,t,n),n=n.sibling}function Lh(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(bo,n)}catch{}switch(n.tag){case 5:ae||An(n,t);case 6:var r=ne,i=Ue;ne=null,gt(e,t,n),ne=r,Ue=i,ne!==null&&(Ue?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Ue?(e=ne,n=n.stateNode,e.nodeType===8?xs(e.parentNode,n):e.nodeType===1&&xs(e,n),br(e)):xs(ne,n.stateNode));break;case 4:r=ne,i=Ue,ne=n.stateNode.containerInfo,Ue=!0,gt(e,t,n),ne=r,Ue=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Va(n,t,s),i=i.next}while(i!==r)}gt(e,t,n);break;case 1:if(!ae&&(An(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,gt(e,t,n),ae=r):gt(e,t,n);break;default:gt(e,t,n)}}function Ac(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Dv),t.forEach(function(r){var i=Vv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Ue=!1;break e;case 3:ne=a.stateNode.containerInfo,Ue=!0;break e;case 4:ne=a.stateNode.containerInfo,Ue=!0;break e}a=a.return}if(ne===null)throw Error(E(160));Lh(o,s,i),ne=null,Ue=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){K(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mh(t,e),t=t.sibling}function Mh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),He(e),r&4){try{Nr(3,e,e.return),qo(3,e)}catch(_){K(e,e.return,_)}try{Nr(5,e,e.return)}catch(_){K(e,e.return,_)}}break;case 1:Me(t,e),He(e),r&512&&n!==null&&An(n,n.return);break;case 5:if(Me(t,e),He(e),r&512&&n!==null&&An(n,n.return),e.flags&32){var i=e.stateNode;try{jr(i,"")}catch(_){K(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&tf(i,o),ga(a,s);var u=ga(a,o);for(s=0;s<l.length;s+=2){var d=l[s],h=l[s+1];d==="style"?af(i,h):d==="dangerouslySetInnerHTML"?of(i,h):d==="children"?jr(i,h):vl(i,d,h,u)}switch(a){case"input":da(i,o);break;case"textarea":nf(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Mn(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?Mn(i,!!o.multiple,o.defaultValue,!0):Mn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Wr]=o}catch(_){K(e,e.return,_)}}break;case 6:if(Me(t,e),He(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(_){K(e,e.return,_)}}break;case 3:if(Me(t,e),He(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{br(t.containerInfo)}catch(_){K(e,e.return,_)}break;case 4:Me(t,e),He(e);break;case 13:Me(t,e),He(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Yl=q())),r&4&&Ac(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(u=ae)||d,Me(t,e),ae=u):Me(t,e),He(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(k=e,d=e.child;d!==null;){for(h=k=d;k!==null;){switch(m=k,g=m.child,m.tag){case 0:case 11:case 14:case 15:Nr(4,m,m.return);break;case 1:An(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(_){K(r,n,_)}}break;case 5:An(m,m.return);break;case 22:if(m.memoizedState!==null){Lc(h);continue}}g!==null?(g.return=m,k=g):Lc(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sf("display",s))}catch(_){K(e,e.return,_)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){K(e,e.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Me(t,e),He(e),r&4&&Ac(e);break;case 21:break;default:Me(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dh(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jr(i,""),r.flags&=-33);var o=Oc(e);Ka(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Oc(e);Wa(e,a,s);break;default:throw Error(E(161))}}catch(l){K(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mv(e,t,n){k=e,jh(e)}function jh(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var i=k,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Mi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ae;a=Mi;var u=ae;if(Mi=s,(ae=l)&&!u)for(k=i;k!==null;)s=k,l=s.child,s.tag===22&&s.memoizedState!==null?Mc(i):l!==null?(l.return=s,k=l):Mc(i);for(;o!==null;)k=o,jh(o),o=o.sibling;k=i,Mi=a,ae=u}Dc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,k=o):Dc(e)}}function Dc(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||qo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:je(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&gc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&br(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ae||t.flags&512&&Ha(t)}catch(m){K(t,t.return,m)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function Lc(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function Mc(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qo(4,t)}catch(l){K(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){K(t,i,l)}}var o=t.return;try{Ha(t)}catch(l){K(t,o,l)}break;case 5:var s=t.return;try{Ha(t)}catch(l){K(t,s,l)}}}catch(l){K(t,t.return,l)}if(t===e){k=null;break}var a=t.sibling;if(a!==null){a.return=t.return,k=a;break}k=t.return}}var jv=Math.ceil,Io=pt.ReactCurrentDispatcher,ql=pt.ReactCurrentOwner,Oe=pt.ReactCurrentBatchConfig,M=0,te=null,Y=null,re=0,Ee=0,Dn=Kt(0),X=0,Jr=null,fn=0,Qo=0,Ql=0,Or=null,me=null,Yl=0,Yn=1/0,tt=null,ko=!1,Ga=null,Mt=null,ji=!1,Pt=null,Co=0,Ar=0,qa=null,Yi=-1,Ji=0;function de(){return M&6?q():Yi!==-1?Yi:Yi=q()}function jt(e){return e.mode&1?M&2&&re!==0?re&-re:wv.transition!==null?(Ji===0&&(Ji=wf()),Ji):(e=j,e!==0||(e=window.event,e=e===void 0?16:Tf(e.type)),e):1}function be(e,t,n,r){if(50<Ar)throw Ar=0,qa=null,Error(E(185));si(e,n,r),(!(M&2)||e!==te)&&(e===te&&(!(M&2)&&(Qo|=n),X===4&&St(e,re)),we(e,r),n===1&&M===0&&!(t.mode&1)&&(Yn=q()+500,Wo&&Gt()))}function we(e,t){var n=e.callbackNode;wg(e,t);var r=ao(e,e===te?re:0);if(r===0)n!==null&&Hu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hu(n),t===1)e.tag===0?yv(jc.bind(null,e)):Wf(jc.bind(null,e)),pv(function(){!(M&6)&&Gt()}),n=null;else{switch(_f(r)){case 1:n=Sl;break;case 4:n=vf;break;case 16:n=so;break;case 536870912:n=yf;break;default:n=so}n=Hh(n,Uh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Uh(e,t){if(Yi=-1,Ji=0,M&6)throw Error(E(327));var n=e.callbackNode;if(bn()&&e.callbackNode!==n)return null;var r=ao(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=To(e,r);else{t=r;var i=M;M|=2;var o=Fh();(te!==e||re!==t)&&(tt=null,Yn=q()+500,sn(e,t));do try{Fv();break}catch(a){zh(e,a)}while(1);Ml(),Io.current=o,M=i,Y!==null?t=0:(te=null,re=0,t=X)}if(t!==0){if(t===2&&(i=Ea(e),i!==0&&(r=i,t=Qa(e,i))),t===1)throw n=Jr,sn(e,0),St(e,r),we(e,q()),n;if(t===6)St(e,r);else{if(i=e.current.alternate,!(r&30)&&!Uv(i)&&(t=To(e,r),t===2&&(o=Ea(e),o!==0&&(r=o,t=Qa(e,o))),t===1))throw n=Jr,sn(e,0),St(e,r),we(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Jt(e,me,tt);break;case 3:if(St(e,r),(r&130023424)===r&&(t=Yl+500-q(),10<t)){if(ao(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xa(Jt.bind(null,e,me,tt),t);break}Jt(e,me,tt);break;case 4:if(St(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Fe(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jv(r/1960))-r,10<r){e.timeoutHandle=xa(Jt.bind(null,e,me,tt),r);break}Jt(e,me,tt);break;case 5:Jt(e,me,tt);break;default:throw Error(E(329))}}}return we(e,q()),e.callbackNode===n?Uh.bind(null,e):null}function Qa(e,t){var n=Or;return e.current.memoizedState.isDehydrated&&(sn(e,t).flags|=256),e=To(e,t),e!==2&&(t=me,me=n,t!==null&&Ya(t)),e}function Ya(e){me===null?me=e:me.push.apply(me,e)}function Uv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Be(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~Ql,t&=~Qo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function jc(e){if(M&6)throw Error(E(327));bn();var t=ao(e,0);if(!(t&1))return we(e,q()),null;var n=To(e,t);if(e.tag!==0&&n===2){var r=Ea(e);r!==0&&(t=r,n=Qa(e,r))}if(n===1)throw n=Jr,sn(e,0),St(e,t),we(e,q()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,me,tt),we(e,q()),null}function Jl(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Yn=q()+500,Wo&&Gt())}}function hn(e){Pt!==null&&Pt.tag===0&&!(M&6)&&bn();var t=M;M|=1;var n=Oe.transition,r=j;try{if(Oe.transition=null,j=1,e)return e()}finally{j=r,Oe.transition=n,M=t,!(M&6)&&Gt()}}function Xl(){Ee=Dn.current,B(Dn)}function sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,hv(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(Al(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ho();break;case 3:qn(),B(ve),B(le),Bl();break;case 5:bl(r);break;case 4:qn();break;case 13:B(V);break;case 19:B(V);break;case 10:jl(r.type._context);break;case 22:case 23:Xl()}n=n.return}if(te=e,Y=e=Ut(e.current,null),re=Ee=t,X=0,Jr=null,Ql=Qo=fn=0,me=Or=null,tn!==null){for(t=0;t<tn.length;t++)if(n=tn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}tn=null}return e}function zh(e,t){do{var n=Y;try{if(Ml(),Gi.current=So,Eo){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Eo=!1}if(dn=0,ee=J=H=null,xr=!1,qr=0,ql.current=null,n===null||n.return===null){X=1,Jr=t,Y=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Ic(s);if(g!==null){g.flags&=-257,kc(g,s,a,o,t),g.mode&1&&Sc(o,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var _=new Set;_.add(l),t.updateQueue=_}else v.add(l);break e}else{if(!(t&1)){Sc(o,u,t),Zl();break e}l=Error(E(426))}}else if($&&a.mode&1){var T=Ic(s);if(T!==null){!(T.flags&65536)&&(T.flags|=256),kc(T,s,a,o,t),Dl(Qn(l,a));break e}}o=l=Qn(l,a),X!==4&&(X=2),Or===null?Or=[o]:Or.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Eh(o,l,t);mc(o,f);break e;case 1:a=l;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Mt===null||!Mt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Sh(o,a,t);mc(o,y);break e}}o=o.return}while(o!==null)}Bh(n)}catch(I){t=I,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(1)}function Fh(){var e=Io.current;return Io.current=So,e===null?So:e}function Zl(){(X===0||X===3||X===2)&&(X=4),te===null||!(fn&268435455)&&!(Qo&268435455)||St(te,re)}function To(e,t){var n=M;M|=2;var r=Fh();(te!==e||re!==t)&&(tt=null,sn(e,t));do try{zv();break}catch(i){zh(e,i)}while(1);if(Ml(),M=n,Io.current=r,Y!==null)throw Error(E(261));return te=null,re=0,X}function zv(){for(;Y!==null;)bh(Y)}function Fv(){for(;Y!==null&&!cg();)bh(Y)}function bh(e){var t=Vh(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?Bh(e):Y=t,ql.current=null}function Bh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Av(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(n=Ov(n,t,Ee),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);X===0&&(X=5)}function Jt(e,t,n){var r=j,i=Oe.transition;try{Oe.transition=null,j=1,bv(e,t,n,r)}finally{Oe.transition=i,j=r}return null}function bv(e,t,n,r){do bn();while(Pt!==null);if(M&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(_g(e,o),e===te&&(Y=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ji||(ji=!0,Hh(so,function(){return bn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Oe.transition,Oe.transition=null;var s=j;j=1;var a=M;M|=4,ql.current=null,Lv(e,n),Mh(n,e),sv(Ra),lo=!!Ta,Ra=Ta=null,e.current=n,Mv(n),dg(),M=a,j=s,Oe.transition=o}else e.current=n;if(ji&&(ji=!1,Pt=e,Co=i),o=e.pendingLanes,o===0&&(Mt=null),pg(n.stateNode),we(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ko)throw ko=!1,e=Ga,Ga=null,e;return Co&1&&e.tag!==0&&bn(),o=e.pendingLanes,o&1?e===qa?Ar++:(Ar=0,qa=e):Ar=0,Gt(),null}function bn(){if(Pt!==null){var e=_f(Co),t=Oe.transition,n=j;try{if(Oe.transition=null,j=16>e?16:e,Pt===null)var r=!1;else{if(e=Pt,Pt=null,Co=0,M&6)throw Error(E(331));var i=M;for(M|=4,k=e.current;k!==null;){var o=k,s=o.child;if(k.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var d=k;switch(d.tag){case 0:case 11:case 15:Nr(8,d,o)}var h=d.child;if(h!==null)h.return=d,k=h;else for(;k!==null;){d=k;var m=d.sibling,g=d.return;if(Ah(d),d===u){k=null;break}if(m!==null){m.return=g,k=m;break}k=g}}}var v=o.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var T=_.sibling;_.sibling=null,_=T}while(_!==null)}}k=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,k=s;else e:for(;k!==null;){if(o=k,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Nr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,k=f;break e}k=o.return}}var c=e.current;for(k=c;k!==null;){s=k;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,k=p;else e:for(s=c;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qo(9,a)}}catch(I){K(a,a.return,I)}if(a===s){k=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,k=y;break e}k=a.return}}if(M=i,Gt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(bo,e)}catch{}r=!0}return r}finally{j=n,Oe.transition=t}}return!1}function Uc(e,t,n){t=Qn(n,t),t=Eh(e,t,1),e=Lt(e,t,1),t=de(),e!==null&&(si(e,1,t),we(e,t))}function K(e,t,n){if(e.tag===3)Uc(e,e,n);else for(;t!==null;){if(t.tag===3){Uc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mt===null||!Mt.has(r))){e=Qn(n,e),e=Sh(t,e,1),t=Lt(t,e,1),e=de(),t!==null&&(si(t,1,e),we(t,e));break}}t=t.return}}function Bv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(X===4||X===3&&(re&130023424)===re&&500>q()-Yl?sn(e,0):Ql|=n),we(e,t)}function $h(e,t){t===0&&(e.mode&1?(t=Ti,Ti<<=1,!(Ti&130023424)&&(Ti=4194304)):t=1);var n=de();e=ct(e,t),e!==null&&(si(e,t,n),we(e,n))}function $v(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$h(e,n)}function Vv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),$h(e,n)}var Vh;Vh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,Nv(e,t,n);ge=!!(e.flags&131072)}else ge=!1,$&&t.flags&1048576&&Kf(t,go,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qi(e,t),e=t.pendingProps;var i=Wn(t,le.current);Fn(t,n),i=Vl(null,t,r,e,i,n);var o=Hl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(o=!0,po(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zl(t),i.updater=Ko,t.stateNode=i,i._reactInternals=t,ja(t,r,e,n),t=Fa(null,t,r,!0,o,n)):(t.tag=0,$&&o&&Ol(t),ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Wv(r),e=je(r,e),i){case 0:t=za(null,t,r,e,n);break e;case 1:t=Rc(null,t,r,e,n);break e;case 11:t=Cc(null,t,r,e,n);break e;case 14:t=Tc(null,t,r,je(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),za(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),Rc(e,t,r,i,n);case 3:e:{if(Th(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Yf(e,t),wo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Qn(Error(E(423)),t),t=Pc(e,t,r,n,i);break e}else if(r!==i){i=Qn(Error(E(424)),t),t=Pc(e,t,r,n,i);break e}else for(Se=Dt(t.stateNode.containerInfo.firstChild),Ie=t,$=!0,ze=null,n=eh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kn(),r===i){t=dt(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return th(t),e===null&&Da(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Pa(r,i)?s=null:o!==null&&Pa(r,o)&&(t.flags|=32),Ch(e,t),ce(e,t,s,n),t.child;case 6:return e===null&&Da(t),null;case 13:return Rh(e,t,n);case 4:return Fl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),Cc(e,t,r,i,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,z(vo,r._currentValue),r._currentValue=s,o!==null)if(Be(o.value,s)){if(o.children===i.children&&!ve.current){t=dt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=at(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),La(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(E(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),La(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fn(t,n),i=Ae(i),r=r(i),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,i=je(r,t.pendingProps),i=je(r.type,i),Tc(e,t,r,i,n);case 15:return Ih(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),Qi(e,t),t.tag=1,ye(r)?(e=!0,po(t)):e=!1,Fn(t,n),Xf(t,r,i),ja(t,r,i,n),Fa(null,t,r,!0,e,n);case 19:return Ph(e,t,n);case 22:return kh(e,t,n)}throw Error(E(156,t.tag))};function Hh(e,t){return gf(e,t)}function Hv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Hv(e,t,n,r)}function eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wv(e){if(typeof e=="function")return eu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wl)return 11;if(e===_l)return 14}return 2}function Ut(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xi(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")eu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case In:return an(n.children,i,o,t);case yl:s=8,i|=8;break;case sa:return e=Ne(12,n,t,i|2),e.elementType=sa,e.lanes=o,e;case aa:return e=Ne(13,n,t,i),e.elementType=aa,e.lanes=o,e;case la:return e=Ne(19,n,t,i),e.elementType=la,e.lanes=o,e;case Xd:return Yo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yd:s=10;break e;case Jd:s=9;break e;case wl:s=11;break e;case _l:s=14;break e;case wt:s=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Ne(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function an(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function Yo(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=Xd,e.lanes=n,e.stateNode={isHidden:!1},e}function Us(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function zs(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ys(0),this.expirationTimes=ys(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tu(e,t,n,r,i,o,s,a,l){return e=new Kv(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ne(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zl(o),e}function Gv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Wh(e){if(!e)return Ht;e=e._reactInternals;e:{if(wn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(ye(n))return Hf(e,n,t)}return t}function Kh(e,t,n,r,i,o,s,a,l){return e=tu(n,r,!0,e,i,o,s,a,l),e.context=Wh(null),n=e.current,r=de(),i=jt(n),o=at(r,i),o.callback=t??null,Lt(n,o,i),e.current.lanes=i,si(e,i,r),we(e,r),e}function Jo(e,t,n,r){var i=t.current,o=de(),s=jt(i);return n=Wh(n),t.context===null?t.context=n:t.pendingContext=n,t=at(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Lt(i,t,s),e!==null&&(be(e,i,s,o),Ki(e,i,s)),s}function Ro(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nu(e,t){zc(e,t),(e=e.alternate)&&zc(e,t)}function qv(){return null}var Gh=typeof reportError=="function"?reportError:function(e){console.error(e)};function ru(e){this._internalRoot=e}Xo.prototype.render=ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Jo(e,t,null,null)};Xo.prototype.unmount=ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hn(function(){Jo(null,e,null,null)}),t[ut]=null}};function Xo(e){this._internalRoot=e}Xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=If();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Et.length&&t!==0&&t<Et[n].priority;n++);Et.splice(n,0,e),n===0&&Cf(e)}};function iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fc(){}function Qv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ro(s);o.call(u)}}var s=Kh(t,r,e,0,null,!1,!1,"",Fc);return e._reactRootContainer=s,e[ut]=s.current,Vr(e.nodeType===8?e.parentNode:e),hn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ro(l);a.call(u)}}var l=tu(e,0,!1,null,null,!1,!1,"",Fc);return e._reactRootContainer=l,e[ut]=l.current,Vr(e.nodeType===8?e.parentNode:e),hn(function(){Jo(t,l,n,r)}),l}function es(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Ro(s);a.call(l)}}Jo(t,s,e,i)}else s=Qv(n,t,e,i,r);return Ro(s)}Ef=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_r(t.pendingLanes);n!==0&&(Il(t,n|1),we(t,q()),!(M&6)&&(Yn=q()+500,Gt()))}break;case 13:hn(function(){var r=ct(e,1);if(r!==null){var i=de();be(r,e,1,i)}}),nu(e,1)}};kl=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var n=de();be(t,e,134217728,n)}nu(e,134217728)}};Sf=function(e){if(e.tag===13){var t=jt(e),n=ct(e,t);if(n!==null){var r=de();be(n,e,t,r)}nu(e,t)}};If=function(){return j};kf=function(e,t){var n=j;try{return j=e,t()}finally{j=n}};ya=function(e,t,n){switch(t){case"input":if(da(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ho(r);if(!i)throw Error(E(90));ef(r),da(r,i)}}}break;case"textarea":nf(e,n);break;case"select":t=n.value,t!=null&&Mn(e,!!n.multiple,t,!1)}};cf=Jl;df=hn;var Yv={usingClientEntryPoint:!1,Events:[li,Rn,Ho,lf,uf,Jl]},vr={findFiberByHostInstance:en,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Jv={bundleType:vr.bundleType,version:vr.version,rendererPackageName:vr.rendererPackageName,rendererConfig:vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pf(e),e===null?null:e.stateNode},findFiberByHostInstance:vr.findFiberByHostInstance||qv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ui.isDisabled&&Ui.supportsFiber)try{bo=Ui.inject(Jv),Ge=Ui}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yv;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!iu(t))throw Error(E(200));return Gv(e,t,null,n)};Te.createRoot=function(e,t){if(!iu(e))throw Error(E(299));var n=!1,r="",i=Gh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=tu(e,1,!1,null,null,n,!1,r,i),e[ut]=t.current,Vr(e.nodeType===8?e.parentNode:e),new ru(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=pf(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return hn(e)};Te.hydrate=function(e,t,n){if(!Zo(t))throw Error(E(200));return es(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!iu(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Gh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Kh(t,null,e,1,n??null,i,!1,o,s),e[ut]=t.current,Vr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Xo(t)};Te.render=function(e,t,n){if(!Zo(t))throw Error(E(200));return es(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Zo(e))throw Error(E(40));return e._reactRootContainer?(hn(function(){es(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1};Te.unstable_batchedUpdates=Jl;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zo(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return es(e,t,n,!1,r)};Te.version="18.2.0-next-9e3b772b8-20220608";function qh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qh)}catch(e){console.error(e)}}qh(),Wd.exports=Te;var Xv=Wd.exports,bc=Xv;ia.createRoot=bc.createRoot,ia.hydrateRoot=bc.hydrateRoot;/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xr(){return Xr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xr.apply(this,arguments)}var xt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xt||(xt={}));const Bc="popstate";function Zv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Ja("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Po(i)}return ty(t,n,null,e)}function Q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ou(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ey(){return Math.random().toString(36).substr(2,8)}function $c(e,t){return{usr:e.state,key:e.key,idx:t}}function Ja(e,t,n,r){return n===void 0&&(n=null),Xr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?nr(t):t,{state:n,key:t&&t.key||r||ey()})}function Po(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function nr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ty(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=xt.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(Xr({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function h(){a=xt.Pop;let T=d(),f=T==null?null:T-u;u=T,l&&l({action:a,location:_.location,delta:f})}function m(T,f){a=xt.Push;let c=Ja(_.location,T,f);n&&n(c,T),u=d()+1;let p=$c(c,u),y=_.createHref(c);try{s.pushState(p,"",y)}catch{i.location.assign(y)}o&&l&&l({action:a,location:_.location,delta:1})}function g(T,f){a=xt.Replace;let c=Ja(_.location,T,f);n&&n(c,T),u=d();let p=$c(c,u),y=_.createHref(c);s.replaceState(p,"",y),o&&l&&l({action:a,location:_.location,delta:0})}function v(T){let f=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof T=="string"?T:Po(T);return Q(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let _={get action(){return a},get location(){return e(i,s)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Bc,h),l=T,()=>{i.removeEventListener(Bc,h),l=null}},createHref(T){return t(i,T)},createURL:v,encodeLocation(T){let f=v(T);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:g,go(T){return s.go(T)}};return _}var Vc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Vc||(Vc={}));function ny(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?nr(t):t,i=su(r.pathname||"/",n);if(i==null)return null;let o=Qh(e);ry(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=fy(o[a],my(i));return s}function Qh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Q(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=zt([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(Q(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Qh(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:cy(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Yh(o.path))i(o,s,l)}),t}function Yh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Yh(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function ry(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:dy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const iy=/^:\w+$/,oy=3,sy=2,ay=1,ly=10,uy=-2,Hc=e=>e==="*";function cy(e,t){let n=e.split("/"),r=n.length;return n.some(Hc)&&(r+=uy),t&&(r+=sy),n.filter(i=>!Hc(i)).reduce((i,o)=>i+(iy.test(o)?oy:o===""?ay:ly),r)}function dy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function fy(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=hy({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let h=a.route;o.push({params:r,pathname:zt([i,d.pathname]),pathnameBase:wy(zt([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=zt([i,d.pathnameBase]))}return o}function hy(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=py(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,h)=>{if(d==="*"){let m=a[h]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[d]=gy(a[h]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:e}}function py(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ou(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function my(e){try{return decodeURI(e)}catch(t){return ou(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function gy(e,t){try{return decodeURIComponent(e)}catch(n){return ou(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function su(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function vy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?nr(e):e;return{pathname:n?n.startsWith("/")?n:yy(n,t):t,search:_y(r),hash:Ey(i)}}function yy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Fs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function au(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function lu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=nr(e):(i=Xr({},e),Q(!i.pathname||!i.pathname.includes("?"),Fs("?","pathname","search",i)),Q(!i.pathname||!i.pathname.includes("#"),Fs("#","pathname","hash",i)),Q(!i.search||!i.search.includes("#"),Fs("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let h=t.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}a=h>=0?t[h]:"/"}let l=vy(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const zt=e=>e.join("/").replace(/\/\/+/g,"/"),wy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_y=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ey=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Sy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Jh=["post","put","patch","delete"];new Set(Jh);const Iy=["get",...Jh];new Set(Iy);/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xo(){return xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xo.apply(this,arguments)}const uu=S.createContext(null),ky=S.createContext(null),rr=S.createContext(null),ts=S.createContext(null),mt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Xh=S.createContext(null);function Cy(e,t){let{relative:n}=t===void 0?{}:t;ir()||Q(!1);let{basename:r,navigator:i}=S.useContext(rr),{hash:o,pathname:s,search:a}=ep(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:zt([r,s])),i.createHref({pathname:l,search:a,hash:o})}function ir(){return S.useContext(ts)!=null}function ci(){return ir()||Q(!1),S.useContext(ts).location}function Zh(e){S.useContext(rr).static||S.useLayoutEffect(e)}function cu(){let{isDataRoute:e}=S.useContext(mt);return e?by():Ty()}function Ty(){ir()||Q(!1);let e=S.useContext(uu),{basename:t,navigator:n}=S.useContext(rr),{matches:r}=S.useContext(mt),{pathname:i}=ci(),o=JSON.stringify(au(r).map(l=>l.pathnameBase)),s=S.useRef(!1);return Zh(()=>{s.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let d=lu(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:zt([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}const Ry=S.createContext(null);function Py(e){let t=S.useContext(mt).outlet;return t&&S.createElement(Ry.Provider,{value:e},t)}function ep(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=S.useContext(mt),{pathname:i}=ci(),o=JSON.stringify(au(r).map(s=>s.pathnameBase));return S.useMemo(()=>lu(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function xy(e,t){return Ny(e,t)}function Ny(e,t,n){ir()||Q(!1);let{navigator:r}=S.useContext(rr),{matches:i}=S.useContext(mt),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=ci(),u;if(t){var d;let _=typeof t=="string"?nr(t):t;a==="/"||(d=_.pathname)!=null&&d.startsWith(a)||Q(!1),u=_}else u=l;let h=u.pathname||"/",m=a==="/"?h:h.slice(a.length)||"/",g=ny(e,{pathname:m}),v=My(g&&g.map(_=>Object.assign({},_,{params:Object.assign({},s,_.params),pathname:zt([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:zt([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return t&&v?S.createElement(ts.Provider,{value:{location:xo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:xt.Pop}},v):v}function Oy(){let e=Fy(),t=Sy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,o)}const Ay=S.createElement(Oy,null);class Dy extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?S.createElement(mt.Provider,{value:this.props.routeContext},S.createElement(Xh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ly(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(uu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(mt.Provider,{value:t},r)}function My(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||Q(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let d=l.route.id?s==null?void 0:s[l.route.id]:null,h=null;n&&(h=l.route.errorElement||Ay);let m=t.concat(o.slice(0,u+1)),g=()=>{let v;return d?v=h:l.route.Component?v=S.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,S.createElement(Ly,{match:l,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(Dy,{location:n.location,revalidation:n.revalidation,component:h,error:d,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var Xa;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Xa||(Xa={}));var Zr;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Zr||(Zr={}));function jy(e){let t=S.useContext(uu);return t||Q(!1),t}function Uy(e){let t=S.useContext(ky);return t||Q(!1),t}function zy(e){let t=S.useContext(mt);return t||Q(!1),t}function tp(e){let t=zy(),n=t.matches[t.matches.length-1];return n.route.id||Q(!1),n.route.id}function Fy(){var e;let t=S.useContext(Xh),n=Uy(Zr.UseRouteError),r=tp(Zr.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function by(){let{router:e}=jy(Xa.UseNavigateStable),t=tp(Zr.UseNavigateStable),n=S.useRef(!1);return Zh(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,xo({fromRouteId:t},o)))},[e,t])}function np(e){let{to:t,replace:n,state:r,relative:i}=e;ir()||Q(!1);let{matches:o}=S.useContext(mt),{pathname:s}=ci(),a=cu(),l=lu(t,au(o).map(d=>d.pathnameBase),s,i==="path"),u=JSON.stringify(l);return S.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function By(e){return Py(e.context)}function Xt(e){Q(!1)}function $y(e){let{basename:t="/",children:n=null,location:r,navigationType:i=xt.Pop,navigator:o,static:s=!1}=e;ir()&&Q(!1);let a=t.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=nr(r));let{pathname:u="/",search:d="",hash:h="",state:m=null,key:g="default"}=r,v=S.useMemo(()=>{let _=su(u,a);return _==null?null:{location:{pathname:_,search:d,hash:h,state:m,key:g},navigationType:i}},[a,u,d,h,m,g,i]);return v==null?null:S.createElement(rr.Provider,{value:l},S.createElement(ts.Provider,{children:n,value:v}))}function Vy(e){let{children:t,location:n}=e;return xy(Za(t),n)}var Wc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Wc||(Wc={}));new Promise(()=>{});function Za(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let o=[...t,i];if(r.type===S.Fragment){n.push.apply(n,Za(r.props.children,o));return}r.type!==Xt&&Q(!1),!r.props.index||!r.props.children||Q(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Za(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function el(){return el=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},el.apply(this,arguments)}function Hy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Wy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ky(e,t){return e.button===0&&(!t||t==="_self")&&!Wy(e)}const Gy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function qy(e){let{basename:t,children:n,window:r}=e,i=S.useRef();i.current==null&&(i.current=Zv({window:r,v5Compat:!0}));let o=i.current,[s,a]=S.useState({action:o.action,location:o.location});return S.useLayoutEffect(()=>o.listen(a),[o]),S.createElement($y,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}const Qy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jy=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d}=t,h=Hy(t,Gy),{basename:m}=S.useContext(rr),g,v=!1;if(typeof u=="string"&&Yy.test(u)&&(g=u,Qy))try{let c=new URL(window.location.href),p=u.startsWith("//")?new URL(c.protocol+u):new URL(u),y=su(p.pathname,m);p.origin===c.origin&&y!=null?u=y+p.search+p.hash:v=!0}catch{}let _=Cy(u,{relative:i}),T=Xy(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i});function f(c){r&&r(c),c.defaultPrevented||T(c)}return S.createElement("a",el({},h,{href:g||_,onClick:v||o?r:f,ref:n,target:l}))});var Kc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Kc||(Kc={}));var Gc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gc||(Gc={}));function Xy(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=cu(),l=ci(),u=ep(e,{relative:s});return S.useCallback(d=>{if(Ky(d,n)){d.preventDefault();let h=r!==void 0?r:Po(l)===Po(u);a(e,{replace:h,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,e,o,s])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const rp=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Zy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},ip={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=o>>2,h=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(m=64)),r.push(n[d],n[h],n[m],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(rp(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Zy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||h==null)throw new e0;const m=o<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class e0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const t0=function(e){const t=rp(e);return ip.encodeByteArray(t,!0)},op=function(e){return t0(e).replace(/\./g,"")},sp=function(e){try{return ip.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function n0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const r0=()=>n0().__FIREBASE_DEFAULTS__,i0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},o0=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&sp(e[1]);return t&&JSON.parse(t)},du=()=>{try{return r0()||i0()||o0()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},s0=e=>{var t,n;return(n=(t=du())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ap=()=>{var e;return(e=du())===null||e===void 0?void 0:e.config},lp=e=>{var t;return(t=du())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function l0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function up(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function u0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function c0(){const e=ue();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function cp(){try{return typeof indexedDB=="object"}catch{return!1}}function dp(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function d0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="FirebaseError";class et extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=f0,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_n.prototype.create)}}class _n{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?h0(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new et(i,a,r)}}function h0(e,t){return e.replace(p0,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const p0=/\{\$([^}]+)}/g;function m0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ei(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(qc(o)&&qc(s)){if(!ei(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Sr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function Ir(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function g0(e,t){const n=new v0(e,t);return n.subscribe.bind(n)}class v0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");y0(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=bs),i.error===void 0&&(i.error=bs),i.complete===void 0&&(i.complete=bs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function y0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function bs(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=1e3,_0=2,E0=4*60*60*1e3,S0=.5;function Qc(e,t=w0,n=_0){const r=t*Math.pow(n,e),i=Math.round(S0*r*(Math.random()-.5)*2);return Math.min(E0,r+i)}/**
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
 */function Ve(e){return e&&e._delegate?e._delegate:e}class Ze{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new a0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(C0(t))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Zt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Zt){return this.instances.has(t)}getOptions(t=Zt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:k0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Zt){return this.component?this.component.multipleInstances?t:Zt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function k0(e){return e===Zt?void 0:e}function C0(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new I0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(U||(U={}));const R0={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},P0=U.INFO,x0={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},N0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=x0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fu{constructor(t){this.name=t,this._logLevel=P0,this._logHandler=N0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?R0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const O0=(e,t)=>t.some(n=>e instanceof n);let Yc,Jc;function A0(){return Yc||(Yc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function D0(){return Jc||(Jc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fp=new WeakMap,tl=new WeakMap,hp=new WeakMap,Bs=new WeakMap,hu=new WeakMap;function L0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Ft(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&fp.set(n,e)}).catch(()=>{}),hu.set(t,e),t}function M0(e){if(tl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});tl.set(e,t)}let nl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return tl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||hp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ft(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function j0(e){nl=e(nl)}function U0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call($s(this),t,...n);return hp.set(r,t.sort?t.sort():[t]),Ft(r)}:D0().includes(e)?function(...t){return e.apply($s(this),t),Ft(fp.get(this))}:function(...t){return Ft(e.apply($s(this),t))}}function z0(e){return typeof e=="function"?U0(e):(e instanceof IDBTransaction&&M0(e),O0(e,A0())?new Proxy(e,nl):e)}function Ft(e){if(e instanceof IDBRequest)return L0(e);if(Bs.has(e))return Bs.get(e);const t=z0(e);return t!==e&&(Bs.set(e,t),hu.set(t,e)),t}const $s=e=>hu.get(e);function F0(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Ft(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Ft(s.result),l.oldVersion,l.newVersion,Ft(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const b0=["get","getKey","getAll","getAllKeys","count"],B0=["put","add","delete","clear"],Vs=new Map;function Xc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Vs.get(t))return Vs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=B0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||b0.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Vs.set(t,o),o}j0(e=>({...e,get:(t,n,r)=>Xc(t,n)||e.get(t,n,r),has:(t,n)=>!!Xc(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(V0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function V0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const rl="@firebase/app",Zc="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new fu("@firebase/app"),H0="@firebase/app-compat",W0="@firebase/analytics-compat",K0="@firebase/analytics",G0="@firebase/app-check-compat",q0="@firebase/app-check",Q0="@firebase/auth",Y0="@firebase/auth-compat",J0="@firebase/database",X0="@firebase/database-compat",Z0="@firebase/functions",e1="@firebase/functions-compat",t1="@firebase/installations",n1="@firebase/installations-compat",r1="@firebase/messaging",i1="@firebase/messaging-compat",o1="@firebase/performance",s1="@firebase/performance-compat",a1="@firebase/remote-config",l1="@firebase/remote-config-compat",u1="@firebase/storage",c1="@firebase/storage-compat",d1="@firebase/firestore",f1="@firebase/firestore-compat",h1="firebase",p1="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="[DEFAULT]",m1={[rl]:"fire-core",[H0]:"fire-core-compat",[K0]:"fire-analytics",[W0]:"fire-analytics-compat",[q0]:"fire-app-check",[G0]:"fire-app-check-compat",[Q0]:"fire-auth",[Y0]:"fire-auth-compat",[J0]:"fire-rtdb",[X0]:"fire-rtdb-compat",[Z0]:"fire-fn",[e1]:"fire-fn-compat",[t1]:"fire-iid",[n1]:"fire-iid-compat",[r1]:"fire-fcm",[i1]:"fire-fcm-compat",[o1]:"fire-perf",[s1]:"fire-perf-compat",[a1]:"fire-rc",[l1]:"fire-rc-compat",[u1]:"fire-gcs",[c1]:"fire-gcs-compat",[d1]:"fire-fst",[f1]:"fire-fst-compat","fire-js":"fire-js",[h1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Map,ol=new Map;function g1(e,t){try{e.container.addComponent(t)}catch(n){pn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ft(e){const t=e.name;if(ol.has(t))return pn.debug(`There were multiple attempts to register component ${t}.`),!1;ol.set(t,e);for(const n of No.values())g1(n,e);return!0}function or(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bt=new _n("app","Firebase",v1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=p1;function pp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:il,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw bt.create("bad-app-name",{appName:String(i)});if(n||(n=ap()),!n)throw bt.create("no-options");const o=No.get(i);if(o){if(ei(n,o.options)&&ei(r,o.config))return o;throw bt.create("duplicate-app",{appName:i})}const s=new T0(i);for(const l of ol.values())s.addComponent(l);const a=new y1(n,r,s);return No.set(i,a),a}function mp(e=il){const t=No.get(e);if(!t&&e===il&&ap())return pp();if(!t)throw bt.create("no-app",{appName:e});return t}function Qe(e,t,n){var r;let i=(r=m1[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),pn.warn(a.join(" "));return}ft(new Ze(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const w1="firebase-heartbeat-database",_1=1,ti="firebase-heartbeat-store";let Hs=null;function gp(){return Hs||(Hs=F0(w1,_1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ti)}}}).catch(e=>{throw bt.create("idb-open",{originalErrorMessage:e.message})})),Hs}async function E1(e){try{return await(await gp()).transaction(ti).objectStore(ti).get(vp(e))}catch(t){if(t instanceof et)pn.warn(t.message);else{const n=bt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});pn.warn(n.message)}}}async function ed(e,t){try{const r=(await gp()).transaction(ti,"readwrite");await r.objectStore(ti).put(t,vp(e)),await r.done}catch(n){if(n instanceof et)pn.warn(n.message);else{const r=bt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pn.warn(r.message)}}}function vp(e){return`${e.name}!${e.options.appId}`}/**
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
 */const S1=1024,I1=30*24*60*60*1e3;class k1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new T1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=td();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=I1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=td(),{heartbeatsToSend:n,unsentEntries:r}=C1(this._heartbeatsCache.heartbeats),i=op(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function td(){return new Date().toISOString().substring(0,10)}function C1(e,t=S1){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),nd(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),nd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class T1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cp()?dp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await E1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ed(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ed(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function nd(e){return op(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(e){ft(new Ze("platform-logger",t=>new $0(t),"PRIVATE")),ft(new Ze("heartbeat",t=>new k1(t),"PRIVATE")),Qe(rl,Zc,e),Qe(rl,Zc,"esm2017"),Qe("fire-js","")}R1("");function pu(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function yp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const P1=yp,wp=new _n("auth","Firebase",yp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new fu("@firebase/auth");function x1(e,...t){Oo.logLevel<=U.WARN&&Oo.warn(`Auth (${fi}): ${e}`,...t)}function Zi(e,...t){Oo.logLevel<=U.ERROR&&Oo.error(`Auth (${fi}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e,...t){throw mu(e,...t)}function Ye(e,...t){return mu(e,...t)}function N1(e,t,n){const r=Object.assign(Object.assign({},P1()),{[t]:n});return new _n("auth","Firebase",r).create(t,{appName:e.name})}function mu(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return wp.create(e,...t)}function N(e,t,...n){if(!e)throw mu(t,...n)}function ot(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Zi(t),new Error(t)}function ht(e,t){e||ot(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function O1(){return rd()==="http:"||rd()==="https:"}function rd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(O1()||up()||"connection"in navigator)?navigator.onLine:!0}function D1(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,n){this.shortDelay=t,this.longDelay=n,ht(n>t,"Short delay should be less than long delay!"),this.isMobile=l0()||u0()}get(){return A1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(e,t){ht(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1=new hi(3e4,6e4);function pi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function sr(e,t,n,r,i={}){return Ep(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=di(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),_p.fetch()(Sp(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function Ep(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},L1),t);try{const i=new j1(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw zi(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zi(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw zi(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw zi(e,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw N1(e,d,u);$e(e,d)}}catch(i){if(i instanceof et)throw i;$e(e,"network-request-failed",{message:String(i)})}}async function ns(e,t,n,r,i={}){const o=await sr(e,t,n,r,i);return"mfaPendingCredential"in o&&$e(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Sp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?gu(e.config,i):`${e.config.apiScheme}://${i}`}class j1{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),M1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ye(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(e,t){return sr(e,"POST","/v1/accounts:delete",t)}async function z1(e,t){return sr(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function F1(e,t=!1){const n=Ve(e),r=await n.getIdToken(t),i=vu(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Dr(Ws(i.auth_time)),issuedAtTime:Dr(Ws(i.iat)),expirationTime:Dr(Ws(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ws(e){return Number(e)*1e3}function vu(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Zi("JWT malformed, contained fewer than 3 sections"),null;try{const i=sp(n);return i?JSON.parse(i):(Zi("Failed to decode base64 JWT payload"),null)}catch(i){return Zi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function b1(e){const t=vu(e);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof et&&B1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function B1({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dr(this.lastLoginAt),this.creationTime=Dr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ni(e,z1(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?W1(o.providerUserInfo):[],a=H1(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Ip(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,h)}async function V1(e){const t=Ve(e);await Ao(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function H1(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function W1(e){return e.map(t=>{var{providerId:n}=t,r=pu(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1(e,t){const n=await Ep(e,{},async()=>{const r=di({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=Sp(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_p.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):b1(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return N(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await K1(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new ri;return r&&(N(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(N(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(e,t){N(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ln{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=pu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ip(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await ni(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return F1(this,t)}reload(){return V1(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ln(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ao(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await ni(this,U1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:y,isAnonymous:I,providerData:R,stsTokenManager:P}=n;N(p&&P,t,"internal-error");const x=ri.fromJSON(this.name,P);N(typeof p=="string",t,"internal-error"),vt(h,t.name),vt(m,t.name),N(typeof y=="boolean",t,"internal-error"),N(typeof I=="boolean",t,"internal-error"),vt(g,t.name),vt(v,t.name),vt(_,t.name),vt(T,t.name),vt(f,t.name),vt(c,t.name);const F=new ln({uid:p,auth:t,email:m,emailVerified:y,displayName:h,isAnonymous:I,photoURL:v,phoneNumber:g,tenantId:_,stsTokenManager:x,createdAt:f,lastLoginAt:c});return R&&Array.isArray(R)&&(F.providerData=R.map(D=>Object.assign({},D))),T&&(F._redirectEventId=T),F}static async _fromIdTokenResponse(t,n,r=!1){const i=new ri;i.updateFromServerResponse(n);const o=new ln({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ao(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=new Map;function st(e){ht(e instanceof Function,"Expected a class definition");let t=id.get(e);return t?(ht(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,id.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}kp.type="NONE";const od=kp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e,t,n){return`firebase:${e}:${t}:${n}`}class Bn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=eo(this.userKey,i.apiKey,o),this.fullPersistenceKey=eo("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ln._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Bn(st(od),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||st(od);const s=eo(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const h=ln._fromJSON(t,d);u!==o&&(a=h),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Bn(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Bn(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Rp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Cp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(xp(t))return"Blackberry";if(Np(t))return"Webos";if(yu(t))return"Safari";if((t.includes("chrome/")||Tp(t))&&!t.includes("edge/"))return"Chrome";if(Pp(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cp(e=ue()){return/firefox\//i.test(e)}function yu(e=ue()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Tp(e=ue()){return/crios\//i.test(e)}function Rp(e=ue()){return/iemobile/i.test(e)}function Pp(e=ue()){return/android/i.test(e)}function xp(e=ue()){return/blackberry/i.test(e)}function Np(e=ue()){return/webos/i.test(e)}function rs(e=ue()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function G1(e=ue()){var t;return rs(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function q1(){return c0()&&document.documentMode===10}function Op(e=ue()){return rs(e)||Pp(e)||Np(e)||xp(e)||/windows phone/i.test(e)||Rp(e)}function Q1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(e,t=[]){let n;switch(e){case"Browser":n=sd(ue());break;case"Worker":n=`${sd(ue())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${fi}/${r}`}async function Dp(e,t){return sr(e,"GET","/v2/recaptchaConfig",pi(e,t))}function ad(e){return e!==void 0&&e.enterprise!==void 0}class Lp{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Mp(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Ye("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Y1().appendChild(r)})}function J1(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const X1="https://www.google.com/recaptcha/enterprise.js?render=",Z1="recaptcha-enterprise",ew="NO_RECAPTCHA";class jp{constructor(t){this.type=Z1,this.auth=mi(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{Dp(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Lp(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;ad(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(ew)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&ad(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}Mp(X1+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function ld(e,t,n,r=!1){const i=new jp(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
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
 */class tw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ud(this),this.idTokenSubscription=new ud(this),this.beforeStateQueue=new tw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ao(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=D1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ve(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(st(t))})}async initializeRecaptchaConfig(){const t=await Dp(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Lp(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new jp(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new _n("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&st(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Bn.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return N(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ap(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&x1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function mi(e){return Ve(e)}class ud{constructor(t){this.auth=t,this.observer=null,this.addObserver=g0(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(e,t){const n=or(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(ei(o,t??{}))return i;$e(i,"already-initialized")}return n.initialize({options:t})}function iw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(st);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function ow(e,t,n){const r=mi(e);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Up(t),{host:s,port:a}=sw(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||aw()}function Up(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function sw(e){const t=Up(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:cd(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:cd(s)}}}function cd(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function aw(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(t){return ot("not implemented")}_linkToIdToken(t,n){return ot("not implemented")}_getReauthenticationResolver(t){return ot("not implemented")}}async function lw(e,t){return sr(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ks(e,t){return ns(e,"POST","/v1/accounts:signInWithPassword",pi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uw(e,t){return ns(e,"POST","/v1/accounts:signInWithEmailLink",pi(e,t))}async function cw(e,t){return ns(e,"POST","/v1/accounts:signInWithEmailLink",pi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends wu{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ii(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ii(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await ld(t,r,"signInWithPassword");return Ks(t,i)}else return Ks(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const o=await ld(t,r,"signInWithPassword");return Ks(t,o)}else return Promise.reject(i)});case"emailLink":return uw(t,{email:this._email,oobCode:this._password});default:$e(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return lw(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return cw(t,{idToken:n,email:this._email,oobCode:this._password});default:$e(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $n(e,t){return ns(e,"POST","/v1/accounts:signInWithIdp",pi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="http://localhost";class mn extends wu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new mn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):$e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=pu(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new mn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return $n(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,$n(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,$n(t,n)}buildRequest(){const t={requestUri:dw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=di(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hw(e){const t=Sr(Ir(e)).link,n=t?Sr(Ir(t)).deep_link_id:null,r=Sr(Ir(e)).deep_link_id;return(r?Sr(Ir(r)).link:null)||r||n||t||e}class _u{constructor(t){var n,r,i,o,s,a;const l=Sr(Ir(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,h=fw((i=l.mode)!==null&&i!==void 0?i:null);N(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=hw(t);try{return new _u(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.providerId=ar.PROVIDER_ID}static credential(t,n){return ii._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=_u.parseLink(n);return N(r,"argument-error"),ii._fromEmailAndCode(t,r.code,r.tenantId)}}ar.PROVIDER_ID="password";ar.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ar.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends zp{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends gi{constructor(){super("facebook.com")}static credential(t){return mn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return It.credential(t.oauthAccessToken)}catch{return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com";It.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends gi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return mn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends gi{constructor(){super("github.com")}static credential(t){return mn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ct.credentialFromTaggedObject(t)}static credentialFromError(t){return Ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ct.credential(t.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends gi{constructor(){super("twitter.com")}static credential(t,n){return mn._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Tt.credentialFromTaggedObject(t)}static credentialFromError(t){return Tt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.TWITTER_SIGN_IN_METHOD="twitter.com";Tt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await ln._fromIdTokenResponse(t,r,i),s=dd(r);return new Jn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=dd(r);return new Jn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function dd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends et{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Do.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Do(t,n,r,i)}}function Fp(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Do._fromErrorAndOperation(e,o,t,r):o})}async function pw(e,t,n=!1){const r=await ni(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Jn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mw(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await ni(e,Fp(r,i,t,e),n);N(o.idToken,r,"internal-error");const s=vu(o.idToken);N(s,r,"internal-error");const{sub:a}=s;return N(e.uid===a,r,"user-mismatch"),Jn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&$e(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bp(e,t,n=!1){const r="signIn",i=await Fp(e,r,t),o=await Jn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function gw(e,t){return bp(mi(e),t)}function vw(e,t,n){return gw(Ve(e),ar.credential(t,n))}function yw(e,t,n,r){return Ve(e).onIdTokenChanged(t,n,r)}function ww(e,t,n){return Ve(e).beforeAuthStateChanged(t,n)}function _w(e,t,n,r){return Ve(e).onAuthStateChanged(t,n,r)}function Ew(e){return Ve(e).signOut()}const Lo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lo,"1"),this.storage.removeItem(Lo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(){const e=ue();return yu(e)||rs(e)}const Iw=1e3,kw=10;class $p extends Bp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Sw()&&Q1(),this.fallbackToPolling=Op(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);q1()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,kw):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Iw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}$p.type="LOCAL";const Cw=$p;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp extends Bp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Vp.type="SESSION";const Hp=Vp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new is(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await Tw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}is.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Eu("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function Pw(e){Je().location.href=e}/**
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
 */function Wp(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function xw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nw(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Ow(){return Wp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="firebaseLocalStorageDb",Aw=1,Mo="firebaseLocalStorage",Gp="fbase_key";class vi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function os(e,t){return e.transaction([Mo],t?"readwrite":"readonly").objectStore(Mo)}function Dw(){const e=indexedDB.deleteDatabase(Kp);return new vi(e).toPromise()}function al(){const e=indexedDB.open(Kp,Aw);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Mo,{keyPath:Gp})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Mo)?t(r):(r.close(),await Dw(),t(await al()))})})}async function fd(e,t,n){const r=os(e,!0).put({[Gp]:t,value:n});return new vi(r).toPromise()}async function Lw(e,t){const n=os(e,!1).get(t),r=await new vi(n).toPromise();return r===void 0?null:r.value}function hd(e,t){const n=os(e,!0).delete(t);return new vi(n).toPromise()}const Mw=800,jw=3;class qp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await al(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>jw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=is._getInstance(Ow()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await xw(),!this.activeServiceWorker)return;this.sender=new Rw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Nw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await al();return await fd(t,Lo,"1"),await hd(t,Lo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fd(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Lw(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>hd(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=os(i,!1).getAll();return new vi(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qp.type="LOCAL";const Uw=qp;new hi(3e4,6e4);/**
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
 */function zw(e,t){return t?st(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su extends wu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return $n(t,this._buildIdpRequest())}_linkToIdToken(t,n){return $n(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return $n(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Fw(e){return bp(e.auth,new Su(e),e.bypassAuthState)}function bw(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),mw(n,new Su(e),e.bypassAuthState)}async function Bw(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),pw(n,new Su(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Fw;case"linkViaPopup":case"linkViaRedirect":return Bw;case"reauthViaPopup":case"reauthViaRedirect":return bw;default:$e(this.auth,"internal-error")}}resolve(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=new hi(2e3,1e4);class Ln extends Qp{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return N(t,this.auth,"internal-error"),t}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const t=Eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,$w.get())};t()}}Ln.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="pendingRedirect",to=new Map;class Hw extends Qp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=to.get(this.auth._key());if(!t){try{const r=await Ww(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}to.set(this.auth._key(),t)}return this.bypassAuthState||to.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ww(e,t){const n=qw(t),r=Gw(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Kw(e,t){to.set(e._key(),t)}function Gw(e){return st(e._redirectPersistence)}function qw(e){return eo(Vw,e.config.apiKey,e.name)}async function Qw(e,t,n=!1){const r=mi(e),i=zw(r,t),s=await new Hw(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=10*60*1e3;class Jw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Xw(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Yp(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Yw&&this.cachedEventUids.clear(),this.cachedEventUids.has(pd(t))}saveEventToCache(t){this.cachedEventUids.add(pd(t)),this.lastProcessedEventTime=Date.now()}}function pd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Yp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Xw(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yp(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zw(e,t={}){return sr(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,t_=/^https?/;async function n_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Zw(e);for(const n of t)try{if(r_(n))return}catch{}$e(e,"unauthorized-domain")}function r_(e){const t=sl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!t_.test(n))return!1;if(e_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const i_=new hi(3e4,6e4);function md(){const e=Je().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function o_(e){return new Promise((t,n)=>{var r,i,o;function s(){md(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{md(),n(Ye(e,"network-request-failed"))},timeout:i_.get()})}if(!((i=(r=Je().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Je().gapi)===null||o===void 0)&&o.load)s();else{const a=J1("iframefcb");return Je()[a]=()=>{gapi.load?s():n(Ye(e,"network-request-failed"))},Mp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw no=null,t})}let no=null;function s_(e){return no=no||o_(e),no}/**
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
 */const a_=new hi(5e3,15e3),l_="__/auth/iframe",u_="emulator/auth/iframe",c_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},d_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function f_(e){const t=e.config;N(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?gu(t,u_):`https://${e.config.authDomain}/${l_}`,r={apiKey:t.apiKey,appName:e.name,v:fi},i=d_.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${di(r).slice(1)}`}async function h_(e){const t=await s_(e),n=Je().gapi;return N(n,e,"internal-error"),t.open({where:document.body,url:f_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:c_,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Ye(e,"network-request-failed"),a=Je().setTimeout(()=>{o(s)},a_.get());function l(){Je().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const p_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},m_=500,g_=600,v_="_blank",y_="http://localhost";class gd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function w_(e,t,n,r=m_,i=g_){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},p_),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ue().toLowerCase();n&&(a=Tp(u)?v_:n),Cp(u)&&(t=t||y_,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[g,v])=>`${m}${g}=${v},`,"");if(G1(u)&&a!=="_self")return __(t||"",a),new gd(null);const h=window.open(t||"",a,d);N(h,e,"popup-blocked");try{h.focus()}catch{}return new gd(h)}function __(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const E_="__/auth/handler",S_="emulator/auth/handler",I_=encodeURIComponent("fac");async function vd(e,t,n,r,i,o){N(e.config.authDomain,e,"auth-domain-config-required"),N(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:fi,eventId:i};if(t instanceof zp){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",m0(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries(o||{}))s[d]=h}if(t instanceof gi){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(s.scopes=d.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),u=l?`#${I_}=${encodeURIComponent(l)}`:"";return`${k_(e)}?${di(a).slice(1)}${u}`}function k_({config:e}){return e.emulator?gu(e,S_):`https://${e.authDomain}/${E_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs="webStorageSupport";class C_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hp,this._completeRedirectFn=Qw,this._overrideRedirectResult=Kw}async _openPopup(t,n,r,i){var o;ht((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await vd(t,n,r,sl(),i);return w_(t,s,Eu())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await vd(t,n,r,sl(),i);return Pw(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(ht(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await h_(t),r=new Jw(t);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Gs,{type:Gs},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Gs];s!==void 0&&n(!!s),$e(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=n_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Op()||yu()||rs()}}const T_=C_;var yd="@firebase/auth",wd="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function x_(e){ft(new Ze("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;N(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ap(e)},u=new nw(r,i,o,l);return iw(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ft(new Ze("auth-internal",t=>{const n=mi(t.getProvider("auth").getImmediate());return(r=>new R_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(yd,wd,P_(e)),Qe(yd,wd,"esm2017")}/**
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
 */const N_=5*60,O_=lp("authIdTokenMaxAge")||N_;let _d=null;const A_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>O_)return;const i=n==null?void 0:n.token;_d!==i&&(_d=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function D_(e=mp()){const t=or(e,"auth");if(t.isInitialized())return t.getImmediate();const n=rw(e,{popupRedirectResolver:T_,persistence:[Uw,Cw,Hp]}),r=lp("authTokenSyncURL");if(r){const o=A_(r);ww(n,o,()=>o(n.currentUser)),yw(n,s=>o(s))}const i=s0("auth");return i&&ow(n,`http://${i}`),n}x_("Browser");const ss=S.createContext({}),L_=({children:e})=>{const t=D_(),[n]=S.useState(!1),[r,i]=S.useState(null),[o,s]=S.useState(!0),[a,l]=S.useState("");S.useEffect(()=>_w(t,u),[]);const u=async()=>{await i(t.currentUser),s(!1)},d=(m,g)=>{s(!0),vw(t,m,g).then(()=>{}).catch(()=>{l(!0),s(!1)})},h=()=>{s(!0),Ew(t).then(()=>{}).catch(()=>{s(!1)})};return w.jsx(ss.Provider,{value:{couldLogin:n,signIn:d,signOut:h,user:r,loading:o,err:a},children:e})},M_="_loader_hm3et_5",j_="_titleContainer_hm3et_25",U_="_title_hm3et_25",z_="_typing_hm3et_1",qs={loader:M_,titleContainer:j_,title:U_,typing:z_},F_="_background_idb63_1",b_="_flowers_idb63_6",B_="_wheat_idb63_20",$_="_details_idb63_32",Fi={background:F_,flowers:b_,wheat:B_,details:$_},V_="/assets/flowers-196b5b19.png",H_="/assets/wheat-6ddf021a.png",W_="/assets/details-e0934b85.png";function Iu(){return w.jsxs("div",{className:Fi.background,children:[w.jsx("img",{src:V_,className:Fi.flowers}),w.jsx("img",{src:H_,className:Fi.wheat}),w.jsx("img",{src:W_,className:Fi.details})]})}const K_="_wrap_ie2xg_1",G_="_container_ie2xg_12",Ed={wrap:K_,container:G_},q_=e=>{const[t,n]=S.useState(),[r,i]=S.useState(),[o,s]=S.useState(),[a,l]=S.useState();return setInterval(()=>{const d=new Date(e).getTime(),h=new Date().getTime(),m=d-h,g=1e3,v=g*60,_=v*60,T=_*24,f=Math.floor(m/T),c=Math.floor(m%T/_),p=Math.floor(m%_/v),y=Math.floor(m%v/g);n(f),i(c),s(p),l(y)},1e3),[t,r,o,a]},Q_="_preCard_1c9ab_1",Y_="_text_1c9ab_34",J_={preCard:Q_,in:"_in_1c9ab_1",text:Y_},X_="/assets/1-3e5e40af.jpg",Z_="/assets/2-28143cb1.jpg",eE="/assets/3-9b63cf82.jpg",tE="/assets/4-7f1eddfc.jpg";function bi(e){const[t,n]=S.useState(),r=()=>{n(!0)},i=()=>{n(!1)};function o(s){if(s===1)return X_;if(s===2)return Z_;if(s===3)return eE;if(s===4)return tE}return w.jsx("div",{className:J_.preCard,style:t?{background:`url(${o(e.numberPhoto)}) no-repeat  center`,backgroundSize:"cover",transition:"2s",zIndex:"4",width:"130px"}:{},onMouseEnter:r,onMouseLeave:i,children:e.children})}function pe({style:e,text:t}){return w.jsx("span",{className:e,children:t})}const nE="_a_4qqib_8",rE="_button_4qqib_22",iE="_textButton_4qqib_51",oE="_containerButton_4qqib_63",yt={a:nE,button:rE,textButton:iE,containerButton:oE};function Vn({text:e,link:t,children:n,action:r,target:i="_blank",navigate:o=""}){return o===""?w.jsxs("div",{className:yt.containerButton,children:[w.jsx("a",{className:yt.a,href:t,target:i,children:w.jsx("button",{className:yt.button,onClick:r,children:n})}),w.jsx("h1",{className:yt.textButton,children:e})]}):w.jsxs("div",{className:yt.containerButton,children:[w.jsx(Jy,{className:yt.a,to:o,children:w.jsx("button",{className:yt.button,onClick:r,children:n})}),w.jsx("h1",{className:yt.textButton,children:e})]})}var Jp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Sd=on.createContext&&on.createContext(Jp),Bt=globalThis&&globalThis.__assign||function(){return Bt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Bt.apply(this,arguments)},sE=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Xp(e){return e&&e.map(function(t,n){return on.createElement(t.tag,Bt({key:n},t.attr),Xp(t.child))})}function yi(e){return function(t){return on.createElement(aE,Bt({attr:Bt({},e.attr)},t),Xp(e.child))}}function aE(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=sE(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),on.createElement("svg",Bt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Bt(Bt({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&on.createElement("title",null,o),e.children)};return Sd!==void 0?on.createElement(Sd.Consumer,null,function(n){return t(n)}):t(Jp)}function lE(e){return yi({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 16C123.5 16 16 123.5 16 256c0 132.6 107.5 240 240 240 132.6 0 240-107.4 240-240S388.6 16 256 16zm0 60c99.4 0 180 80.6 180 180s-80.6 180-180 180S76 355.4 76 256 156.6 76 256 76zm91.3 64.2c-6.5 0-12.5 2.4-16.8 8.2-52 70.1-69 96.5-106 169.8-8.4-11.1-65.6-72.4-93.9-94.1-14.2-10.9-41.3 27.2-31.6 37.1C142.6 306.1 220.1 406 232.7 405c21.4-1.7 75.1-136.8 148.8-233.7 8-10.4-15-31.3-34.2-31.1z"}}]})(e)}function uE(e){return yi({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.518 78.38c-6.55.117-12.45 1.736-17.35 4.91-7.465 4.84-11.765 12.904-13.063 21.34-2.595 16.874 4.747 36.355 19.862 52.31C154.08 172.893 177.643 185 208 185h2.438l-9.118-18.234c-22.194-1.554-38.46-10.777-49.287-22.205-11.885-12.545-16.543-28.064-15.138-37.19.702-4.564 2.402-7.25 5.062-8.974 2.66-1.724 7.113-2.875 14.756-1.326 13.078 2.65 34.233 13.948 62.205 39.284L220.27 135h23.408c-35.31-34.8-62.215-51.278-83.39-55.57-2.715-.55-5.363-.887-7.925-1.006-.96-.045-1.91-.06-2.845-.043zm212.964 0c-.935-.016-1.885 0-2.845.044-2.562.12-5.21.455-7.924 1.006-21.176 4.292-48.082 20.77-83.39 55.57h23.406l1.352 1.354c27.972-25.336 49.127-36.633 62.205-39.284 7.643-1.55 12.096-.398 14.756 1.326 2.66 1.725 4.36 4.41 5.062 8.973 1.405 9.126-3.253 24.645-15.138 37.19-10.827 11.43-27.093 20.652-49.287 22.206L301.562 185H304c30.357 0 53.92-12.106 69.033-28.06 15.115-15.955 22.457-35.436 19.862-52.31-1.298-8.436-5.598-16.5-13.063-21.34-4.9-3.174-10.8-4.793-17.35-4.91zM227.73 153l-8.78 8.777L229.564 183h52.875l10.61-21.223-8.777-8.777h-56.54zM73 201v46h142v-46H73zm160 0v270h46V201h-46zm64 0v46h142v-46H297zm-192 64v206h110V265H105zm192 0v206h110V265H297z"}}]})(e)}function cE(e){return yi({tag:"svg",attr:{viewBox:"0 0 288 512"},child:[{tag:"path",attr:{d:"M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"}}]})(e)}function dE({enableTop:e=!0,enableMiddle:t=!0,enableBottom:n=!0}){const[r,i,o,s]=q_("2024-10-21"),a="https://api.whatsapp.com/send/?phone=5521976618713&text=Ol%C3%A1%2C+confirmo+minha+presen%C3%A7a+na+Festa+da+Jennyni.+Dia+02+de+Junho%2C+%C3%A0s+21h.+Nome+Completo%3A&type=phone_number&app_absent=0",l="https://drive.google.com/file/d/1mi5u9Q6fc5w_nuhlMWDqVDRjNHy87mhs/view?usp=sharing",u="https://goo.gl/maps/S2ykJjg2UxoPWTmd8",[d,h]=S.useState(),m=()=>{h(!0)},g=()=>{h(!1)},v=f=>f?w.jsxs("section",{className:Ed.container,children:[w.jsx(pe,{text:"Wendding",style:"wendding"}),w.jsx(pe,{text:"Haylton & Camile",style:"name"}),w.jsx(pe,{text:"Save The Date",style:"titulo"})]}):"",_=f=>f?w.jsxs(w.Fragment,{children:[w.jsxs(bi,{numberPhoto:1,onMouseEnter:m,onMouseLeave:g,children:[w.jsx(pe,{style:d?"text:hover":"text",text:r,isHoverSet:d}),w.jsx(pe,{style:"nameBox",text:"Days",isHoverSet:d})]}),w.jsxs(bi,{numberPhoto:2,children:[w.jsx(pe,{style:"text",text:i}),w.jsx(pe,{style:"nameBox",text:"Hours"})]}),w.jsxs(bi,{numberPhoto:3,children:[w.jsx(pe,{style:"text",text:o}),w.jsx(pe,{style:"nameBox",text:"Minutes"})]}),w.jsxs(bi,{numberPhoto:4,children:[w.jsx(pe,{style:"text",text:s}),w.jsx(pe,{style:"nameBox",text:"Seconds"})]}),w.jsx(pe,{text:"22 | Outubro | 17H",style:"date"})]}):"",T=f=>f?w.jsxs(w.Fragment,{children:[w.jsxs("div",{style:{display:"flex",flexWrap:"wrap",width:"100%",padding:"40px"},children:[w.jsx(pe,{text:"Assim, eles já não são dois, mas sim uma só carne. ",style:"textDate"}),w.jsx(pe,{text:"Portanto, o que Deus uniu, ninguém separe. Mateus 19:6 ",style:"textDate"})]}),w.jsx(Vn,{link:u,text:"Local",style:"nameBox",children:w.jsx(cE,{style:{color:"white",fontSize:"50px"}})}),w.jsx(Vn,{link:a,text:"Confirmar Presença",style:"nameBox",children:w.jsx(lE,{style:{color:"white",fontSize:"50px"}})}),w.jsx(Vn,{link:l,text:"Sugestão de presente",style:"nameBox",children:w.jsx(uE,{style:{color:"white",fontSize:"50px"}})})]}):"";return w.jsx(w.Fragment,{children:w.jsxs("div",{className:Ed.wrap,children:[v(e),_(t),T(n)]})})}const fE="_container_55e6b_1",hE={container:fE};function ku({enableTop:e,enableMiddle:t,enableBottom:n}){return w.jsx(w.Fragment,{children:w.jsx("div",{className:hE.container,children:w.jsx(dE,{enableTop:e,enableMiddle:t,enableBottom:n})})})}function pE(){return w.jsxs("div",{className:"App",children:[w.jsx(Iu,{}),w.jsx(ku,{enableTop:void 0,enableMiddle:void 0,enableBottom:void 0})]})}var Zp={},Xn={};Object.defineProperty(Xn,"__esModule",{value:!0});Xn.cssValue=Xn.parseLengthAndUnit=void 0;var mE={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function em(e){if(typeof e=="number")return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();n.includes(".")?t=parseFloat(n):t=parseInt(n,10);var r=(e.match(/[^0-9]*$/)||"").toString();return mE[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}Xn.parseLengthAndUnit=em;function gE(e){var t=em(e);return"".concat(t.value).concat(t.unit)}Xn.cssValue=gE;var as={};Object.defineProperty(as,"__esModule",{value:!0});as.createAnimation=void 0;var vE=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var o=i.sheet,s=`
    @keyframes `.concat(r,` {
      `).concat(t,`
    }
  `);return o&&o.insertRule(s,0),r};as.createAnimation=vE;var jo=Xe&&Xe.__assign||function(){return jo=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},jo.apply(this,arguments)},yE=Xe&&Xe.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),wE=Xe&&Xe.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),_E=Xe&&Xe.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&yE(t,e,n);return wE(t,e),t},EE=Xe&&Xe.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};Object.defineProperty(Zp,"__esModule",{value:!0});var Qs=_E(S),Ys=Xn,tm=as,SE=(0,tm.createAnimation)("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}","right"),IE=(0,tm.createAnimation)("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}","left");function kE(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,i=r===void 0?"#000000":r,o=e.speedMultiplier,s=o===void 0?1:o,a=e.cssOverride,l=a===void 0?{}:a,u=e.size,d=u===void 0?60:u,h=EE(e,["loading","color","speedMultiplier","cssOverride","size"]),m=(0,Ys.parseLengthAndUnit)(d),g=m.value,v=m.unit,_=jo({display:"inherit",width:(0,Ys.cssValue)(d),height:(0,Ys.cssValue)(d),position:"relative"},l),T=function(f){return{position:"absolute",top:"0",left:"0",width:"".concat(g).concat(v),height:"".concat(g).concat(v),border:"".concat(g/10).concat(v," solid ").concat(i),opacity:"0.4",borderRadius:"100%",animationFillMode:"forwards",perspective:"800px",animation:"".concat(f===1?SE:IE," ").concat(2/s,"s 0s infinite linear")}};return n?Qs.createElement("span",jo({style:_},h),Qs.createElement("span",{style:T(1)}),Qs.createElement("span",{style:T(2)})):null}var CE=Zp.default=kE;const TE="_containerButtons_1diw6_1",RE={containerButtons:TE};function PE(e){return yi({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16 13v-2H7V8l-5 4 5 4v-3z"}},{tag:"path",attr:{d:"M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"}}]})(e)}function xE(e){return yi({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#78909C",d:"M40,41H8c-2.2,0-4-1.8-4-4l0-20.9c0-1.3,0.6-2.5,1.7-3.3L24,0l18.3,12.8c1.1,0.7,1.7,2,1.7,3.3V37 C44,39.2,42.2,41,40,41z"}},{tag:"rect",attr:{x:"12",y:"11",fill:"#fff",width:"24",height:"22"}},{tag:"path",attr:{fill:"#CFD8DC",d:"M40,41H8c-2.2,0-4-1.8-4-4l0-20l20,13l20-13v20C44,39.2,42.2,41,40,41z"}},{tag:"g",attr:{fill:"#4CAF50"},child:[{tag:"rect",attr:{x:"22",y:"14",width:"4",height:"12"}},{tag:"rect",attr:{x:"18",y:"18",width:"12",height:"4"}}]}]})(e)}function NE(){const{signOut:e}=S.useContext(ss);return w.jsxs("div",{className:"App",children:[w.jsxs("div",{children:[w.jsx(Iu,{}),w.jsx(ku,{enableBottom:!1})]}),w.jsxs("div",{className:RE.containerButtons,children:[w.jsx(Vn,{action:()=>e(),text:"Logout",children:w.jsx(PE,{style:{color:"white",fontSize:"100px"}})}),w.jsx(Vn,{link:"guests",navigate:"/guests",text:"Guests",children:w.jsx(xE,{style:{color:"white",fontSize:"100px"}})}),w.jsx(Vn,{})]})]})}const OE="_changeSize_171ld_1",AE={changeSize:OE,in:"_in_171ld_1"};function Id({type:e,onChange:t,placeholder:n}){return w.jsx("input",{className:AE.input,type:e,onChange:r=>{t(r.target.value)},placeholder:n})}const DE="_containerMid_3gaez_1",LE="_containerLogin_3gaez_9",ME="_change_3gaez_1",jE="_typing_3gaez_1",Js={containerMid:DE,containerLogin:LE,change:ME,typing:jE};function UE(){const{user:e,signIn:t,err:n}=S.useContext(ss),r=cu(),[i,o]=S.useState(),[s,a]=S.useState();S.useEffect(()=>{e&&r(window.history.back())},[e]);const l=(u,d)=>{t(u,d)};return w.jsxs("div",{className:"App",children:[w.jsx(Iu,{}),w.jsxs("div",{className:Js.containerMid,children:[w.jsx(ku,{enableTop:!0,enableMiddle:!1,enableBottom:!1}),w.jsxs("div",{className:Js.containerLogin,children:[w.jsx(Id,{type:"text",onChange:o,placeholder:"Email"}),w.jsx(Id,{type:"password",onChange:a,placeholder:"Password"})]}),w.jsx("div",{className:Js.buttons,children:w.jsx("button",{onClick:()=>{l(i,s)},children:"Login"})})]})]})}function zE(){return w.jsx("div",{children:"Guests"})}const FE=()=>{const{user:e}=S.useContext(ss);return console.log(!!e),e?w.jsx(By,{}):w.jsx(np,{to:"/login"})};function bE(){const[e,t]=S.useState(!0);S.useEffect(()=>{setTimeout(()=>{t(!1)},3e3)},[]);const n=` 
    display: flex;
    justify-content:center;
    align-self:center;
    margin: auto;
    border-color: red;
  `;return e?w.jsx(w.Fragment,{children:w.jsx("div",{children:w.jsxs(w.Fragment,{children:[w.jsx("div",{className:qs.titleContainer,children:w.jsx("h1",{className:qs.title,children:"a wedding is coming"})}),w.jsx("div",{className:qs.loader,children:w.jsx(CE,{color:"#8c3f0d",isLoading:e,css:n,size:50})})]})})}):w.jsx(w.Fragment,{children:w.jsx(L_,{children:w.jsx(qy,{children:w.jsxs(Vy,{children:[w.jsx(Xt,{path:"counter",element:w.jsx(pE,{})}),w.jsx(Xt,{path:"login",element:w.jsx(UE,{})}),w.jsxs(Xt,{element:w.jsx(FE,{}),children:[w.jsx(Xt,{path:"guests",element:w.jsx(zE,{})}),w.jsx(Xt,{path:"admin",element:w.jsx(NE,{})})]}),w.jsx(Xt,{path:"/",element:w.jsx(np,{to:"/counter"})})]})})})})}var BE="firebase",$E="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe(BE,$E,"app");const VE=(e,t)=>t.some(n=>e instanceof n);let kd,Cd;function HE(){return kd||(kd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WE(){return Cd||(Cd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nm=new WeakMap,ll=new WeakMap,rm=new WeakMap,Xs=new WeakMap,Cu=new WeakMap;function KE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n($t(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&nm.set(n,e)}).catch(()=>{}),Cu.set(t,e),t}function GE(e){if(ll.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});ll.set(e,t)}let ul={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ll.get(e);if(t==="objectStoreNames")return e.objectStoreNames||rm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $t(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function qE(e){ul=e(ul)}function QE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Zs(this),t,...n);return rm.set(r,t.sort?t.sort():[t]),$t(r)}:WE().includes(e)?function(...t){return e.apply(Zs(this),t),$t(nm.get(this))}:function(...t){return $t(e.apply(Zs(this),t))}}function YE(e){return typeof e=="function"?QE(e):(e instanceof IDBTransaction&&GE(e),VE(e,HE())?new Proxy(e,ul):e)}function $t(e){if(e instanceof IDBRequest)return KE(e);if(Xs.has(e))return Xs.get(e);const t=YE(e);return t!==e&&(Xs.set(e,t),Cu.set(t,e)),t}const Zs=e=>Cu.get(e);function JE(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=$t(s);return r&&s.addEventListener("upgradeneeded",l=>{r($t(s.result),l.oldVersion,l.newVersion,$t(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const XE=["get","getKey","getAll","getAllKeys","count"],ZE=["put","add","delete","clear"],ea=new Map;function Td(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ea.get(t))return ea.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ZE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||XE.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ea.set(t,o),o}qE(e=>({...e,get:(t,n,r)=>Td(t,n)||e.get(t,n,r),has:(t,n)=>!!Td(t,n)||e.has(t,n)}));const im="@firebase/installations",Tu="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=1e4,sm=`w:${Tu}`,am="FIS_v2",eS="https://firebaseinstallations.googleapis.com/v1",tS=60*60*1e3,nS="installations",rS="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},gn=new _n(nS,rS,iS);function lm(e){return e instanceof et&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um({projectId:e}){return`${eS}/projects/${e}/installations`}function cm(e){return{token:e.token,requestStatus:2,expiresIn:sS(e.expiresIn),creationTime:Date.now()}}async function dm(e,t){const r=(await t.json()).error;return gn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function fm({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function oS(e,{refreshToken:t}){const n=fm(e);return n.append("Authorization",aS(t)),n}async function hm(e){const t=await e();return t.status>=500&&t.status<600?e():t}function sS(e){return Number(e.replace("s","000"))}function aS(e){return`${am} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lS({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=um(e),i=fm(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:am,appId:e.appId,sdkVersion:sm},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await hm(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:cm(u.authToken)}}else throw await dm("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=/^[cdef][\w-]{21}$/,cl="";function dS(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=fS(e);return cS.test(n)?n:cl}catch{return cl}}function fS(e){return uS(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=new Map;function gm(e,t){const n=ls(e);vm(n,t),hS(n,t)}function vm(e,t){const n=mm.get(e);if(n)for(const r of n)r(t)}function hS(e,t){const n=pS();n&&n.postMessage({key:e,fid:t}),mS()}let rn=null;function pS(){return!rn&&"BroadcastChannel"in self&&(rn=new BroadcastChannel("[Firebase] FID Change"),rn.onmessage=e=>{vm(e.data.key,e.data.fid)}),rn}function mS(){mm.size===0&&rn&&(rn.close(),rn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="firebase-installations-database",vS=1,vn="firebase-installations-store";let ta=null;function Ru(){return ta||(ta=JE(gS,vS,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(vn)}}})),ta}async function Uo(e,t){const n=ls(e),i=(await Ru()).transaction(vn,"readwrite"),o=i.objectStore(vn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&gm(e,t.fid),t}async function ym(e){const t=ls(e),r=(await Ru()).transaction(vn,"readwrite");await r.objectStore(vn).delete(t),await r.done}async function us(e,t){const n=ls(e),i=(await Ru()).transaction(vn,"readwrite"),o=i.objectStore(vn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&gm(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pu(e){let t;const n=await us(e.appConfig,r=>{const i=yS(r),o=wS(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===cl?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function yS(e){const t=e||{fid:dS(),registrationStatus:0};return wm(t)}function wS(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(gn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=_S(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ES(e)}:{installationEntry:t}}async function _S(e,t){try{const n=await lS(e,t);return Uo(e.appConfig,n)}catch(n){throw lm(n)&&n.customData.serverCode===409?await ym(e.appConfig):await Uo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ES(e){let t=await Rd(e.appConfig);for(;t.registrationStatus===1;)await pm(100),t=await Rd(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Pu(e);return r||n}return t}function Rd(e){return us(e,t=>{if(!t)throw gn.create("installation-not-found");return wm(t)})}function wm(e){return SS(e)?{fid:e.fid,registrationStatus:0}:e}function SS(e){return e.registrationStatus===1&&e.registrationTime+om<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS({appConfig:e,heartbeatServiceProvider:t},n){const r=kS(e,n),i=oS(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:sm,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await hm(()=>fetch(r,a));if(l.ok){const u=await l.json();return cm(u)}else throw await dm("Generate Auth Token",l)}function kS(e,{fid:t}){return`${um(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xu(e,t=!1){let n;const r=await us(e.appConfig,o=>{if(!_m(o))throw gn.create("not-registered");const s=o.authToken;if(!t&&RS(s))return o;if(s.requestStatus===1)return n=CS(e,t),o;{if(!navigator.onLine)throw gn.create("app-offline");const a=xS(o);return n=TS(e,a),a}});return n?await n:r.authToken}async function CS(e,t){let n=await Pd(e.appConfig);for(;n.authToken.requestStatus===1;)await pm(100),n=await Pd(e.appConfig);const r=n.authToken;return r.requestStatus===0?xu(e,t):r}function Pd(e){return us(e,t=>{if(!_m(t))throw gn.create("not-registered");const n=t.authToken;return NS(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function TS(e,t){try{const n=await IS(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Uo(e.appConfig,r),n}catch(n){if(lm(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ym(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Uo(e.appConfig,r)}throw n}}function _m(e){return e!==void 0&&e.registrationStatus===2}function RS(e){return e.requestStatus===2&&!PS(e)}function PS(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+tS}function xS(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function NS(e){return e.requestStatus===1&&e.requestTime+om<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(e){const t=e,{installationEntry:n,registrationPromise:r}=await Pu(t);return r?r.catch(console.error):xu(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AS(e,t=!1){const n=e;return await DS(n),(await xu(n,t)).token}async function DS(e){const{registrationPromise:t}=await Pu(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(e){if(!e||!e.options)throw na("App Configuration");if(!e.name)throw na("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw na(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function na(e){return gn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="installations",MS="installations-internal",jS=e=>{const t=e.getProvider("app").getImmediate(),n=LS(t),r=or(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},US=e=>{const t=e.getProvider("app").getImmediate(),n=or(t,Em).getImmediate();return{getId:()=>OS(n),getToken:i=>AS(n,i)}};function zS(){ft(new Ze(Em,jS,"PUBLIC")),ft(new Ze(MS,US,"PRIVATE"))}zS();Qe(im,Tu);Qe(im,Tu,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo="analytics",FS="firebase_id",bS="origin",BS=60*1e3,$S="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Nu="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=new fu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ke=new _n("analytics","Analytics",VS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(e){if(!e.startsWith(Nu)){const t=ke.create("invalid-gtag-resource",{gtagURL:e});return _e.warn(t.message),""}return e}function Sm(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function WS(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function KS(e,t){const n=WS("firebase-js-sdk-policy",{createScriptURL:HS}),r=document.createElement("script"),i=`${Nu}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function GS(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function qS(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await Sm(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){_e.error(a)}e("config",i,o)}async function QS(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await Sm(n);for(const l of s){const u=a.find(h=>h.measurementId===l),d=u&&t[u.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){_e.error(o)}}function YS(e,t,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await QS(e,t,n,a,l)}else if(o==="config"){const[a,l]=s;await qS(e,t,n,r,a,l)}else if(o==="consent"){const[a]=s;e("consent","update",a)}else if(o==="get"){const[a,l,u]=s;e("get",a,l,u)}else if(o==="set"){const[a]=s;e("set",a)}else e(o,...s)}catch(a){_e.error(a)}}return i}function JS(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=YS(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function XS(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Nu)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=30,eI=1e3;class tI{constructor(t={},n=eI){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Im=new tI;function nI(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function rI(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:nI(r)},o=$S.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw ke.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function iI(e,t=Im,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw ke.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw ke.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new aI;return setTimeout(async()=>{a.abort()},n!==void 0?n:BS),km({appId:r,apiKey:i,measurementId:o},s,a,t)}async function km(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Im){var o;const{appId:s,measurementId:a}=e;try{await oI(r,t)}catch(l){if(a)return _e.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await rI(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!sI(u)){if(i.deleteThrottleMetadata(s),a)return _e.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const d=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?Qc(n,i.intervalMillis,ZS):Qc(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,h),_e.debug(`Calling attemptFetch again in ${d} millis`),km(e,h,r,i)}}function oI(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(ke.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function sI(e){if(!(e instanceof et)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class aI{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function lI(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(){if(cp())try{await dp()}catch(e){return _e.warn(ke.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return _e.warn(ke.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function cI(e,t,n,r,i,o,s){var a;const l=iI(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&_e.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>_e.error(g)),t.push(l);const u=uI().then(g=>{if(g)return r.getId()}),[d,h]=await Promise.all([l,u]);XS(o)||KS(o,d.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[bS]="firebase",m.update=!0,h!=null&&(m[FS]=h),i("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(t){this.app=t}_delete(){return delete Lr[this.app.options.appId],Promise.resolve()}}let Lr={},xd=[];const Nd={};let ra="dataLayer",fI="gtag",Od,Cm,Ad=!1;function hI(){const e=[];if(up()&&e.push("This is a browser extension environment."),d0()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ke.create("invalid-analytics-context",{errorInfo:t});_e.warn(n.message)}}function pI(e,t,n){hI();const r=e.options.appId;if(!r)throw ke.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)_e.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ke.create("no-api-key");if(Lr[r]!=null)throw ke.create("already-exists",{id:r});if(!Ad){GS(ra);const{wrappedGtag:o,gtagCore:s}=JS(Lr,xd,Nd,ra,fI);Cm=o,Od=s,Ad=!0}return Lr[r]=cI(e,xd,Nd,t,Od,ra,n),new dI(e)}function mI(e=mp()){e=Ve(e);const t=or(e,zo);return t.isInitialized()?t.getImmediate():gI(e)}function gI(e,t={}){const n=or(e,zo);if(n.isInitialized()){const i=n.getImmediate();if(ei(t,n.getOptions()))return i;throw ke.create("already-initialized")}return n.initialize({options:t})}function vI(e,t,n,r){e=Ve(e),lI(Cm,Lr[e.app.options.appId],t,n,r).catch(i=>_e.error(i))}const Dd="@firebase/analytics",Ld="0.10.0";function yI(){ft(new Ze(zo,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return pI(r,i,n)},"PUBLIC")),ft(new Ze("analytics-internal",e,"PRIVATE")),Qe(Dd,Ld),Qe(Dd,Ld,"esm2017");function e(t){try{const n=t.getProvider(zo).getImmediate();return{logEvent:(r,i,o)=>vI(n,r,i,o)}}catch(n){throw ke.create("interop-component-reg-failed",{reason:n})}}}yI();const wI={apiKey:"AIzaSyBhTx_jyQ9XXDXbwN_8G3StDaWk8ixpOrU",authDomain:"mywendding.web.app",projectId:"mywendding",storageBucket:"mywendding.appspot.com",messagingSenderId:"297404197510",appId:"1:297404197510:web:51e391cdc5fcdca56a7f07",measurementId:"G-66KL1Q1VMH"},_I=pp(wI);mI(_I);ia.createRoot(document.getElementById("root")).render(w.jsx(bE,{}));
